import useAppStore from "@/Store/useAppStore";
import { sidebarLinks } from "@/utils/data";
import { Bell, ChevronRight } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import LanguageChange from "./LanguageChange";
import { language as langData } from "@/utils/language";
import { Skeleton } from "@/components/ui/skeleton";

const Navbar = () => {
  const language = useAppStore((state) => state.language);
  const location = useLocation();

  const langIdx = { en: 0, am: 1, or: 2, ti: 3, so: 4, aa: 5 }[language] ?? 0;
  const isDashboard =
    location.pathname === "/" || location.pathname === "/dashboard";

  // Find active nav item and its parent for breadcrumbs and component mapping
  const getActiveRouteData = () => {
    let pathname = location.pathname;
    let extraCrumbs = [];

    // Custom handling for Registration & Campaigns hierarchy
    if (pathname.startsWith("/registration")) {
      const parts = pathname.split("/");
      const id = parts[2];
      const group = sidebarLinks.navMain.find(
        (g) => g.category === "registration",
      );

      // 1. Root: /registration
      if (!id || id === "") {
        return {
          groupTitle: group.title[langIdx],
          groupUrl: group.url,
          itemTitle: langData.campaigns[langIdx],
          itemUrl: group.url,
        };
      }

      // 2. Detail: /registration/:id
      if (
        id &&
        !["forms", "stations", "analytics", "reports", "create"].includes(id) &&
        !parts[3]
      ) {
        return {
          groupTitle: group.title[langIdx],
          groupUrl: group.url,
          itemTitle: langData.campaigns[langIdx],
          itemUrl: group.url,
          subItemTitle: langData.details[langIdx],
          subItemUrl: pathname,
        };
      }

      // 3. Sub-pages: /registration/:id/forms/...
      if (
        id &&
        !["forms", "stations", "analytics", "reports", "create"].includes(id) &&
        parts[3]
      ) {
        extraCrumbs.push({
          title: langData.campaigns[langIdx],
          url: "/registration",
        });
        extraCrumbs.push({
          title: langData.details[langIdx],
          url: `/registration/${id}`,
        });
        // Normalize pathname for item matching
        pathname = "/registration/" + parts.slice(3).join("/");
      }
    }

    for (const group of sidebarLinks.navMain) {
      if (group.items) {
        for (const item of group.items) {
          // Exact match
          if (item.url === pathname) {
            return {
              groupTitle: group.title[langIdx],
              groupUrl: group.url,
              itemTitle: item.title[langIdx],
              itemUrl: item.url,
              extraCrumbs,
            };
          }

          // Check for sub-items (3rd level)
          if (item.items) {
            const subItem = item.items.find((si) => si.url === pathname);
            if (subItem) {
              return {
                groupTitle: group.title[langIdx],
                groupUrl: group.url,
                itemTitle: item.title[langIdx],
                itemUrl: item.url,
                subItemTitle: subItem.title[langIdx],
                subItemUrl: subItem.url,
                extraCrumbs,
              };
            }

            // Check for detail pages of sub-items
            const subItemDetail = item.items.find(
              (si) => si.url && pathname.startsWith(si.url + "/"),
            );
            if (subItemDetail) {
              const subPath = pathname.slice(subItemDetail.url.length + 1);
              let subItemTitle = subItemDetail.title[langIdx] || "Item";
              let leafTitle = null;

              if (subPath === "create") {
                leafTitle = langData.create[langIdx] || "Create";
              } else if (subPath.startsWith("edit/")) {
                leafTitle = langData.edit[langIdx] || "Edit";
              } else {
                subItemTitle =
                  subItemTitle + " " + (langData.details[langIdx] || "Details");
              }

              return {
                groupTitle: group.title[langIdx],
                groupUrl: group.url,
                itemTitle: item.title[langIdx],
                itemUrl: item.url,
                subItemTitle,
                subItemUrl: subItemDetail.url,
                leafTitle,
                extraCrumbs,
              };
            }
          }

          // Check for detail pages of items (2nd level becomes 3rd level)
          if (item.url && pathname.startsWith(item.url + "/")) {
            const subPath = pathname.slice(item.url.length + 1);
            let subItemTitle = langData.details[langIdx] || "Details";
            let leafTitle = null;

            if (subPath === "create") {
              subItemTitle = langData.create[langIdx] || "Create";
            } else if (subPath.startsWith("edit/")) {
              subItemTitle = langData.details[langIdx] || "Details";
              leafTitle = langData.edit[langIdx] || "Edit";
            }

            return {
              groupTitle: group.title[langIdx],
              groupUrl: group.url,
              itemTitle: item.title[langIdx],
              itemUrl: item.url,
              subItemTitle,
              subItemUrl: leafTitle
                ? pathname.replace("/edit/", "/")
                : pathname,
              leafTitle,
              extraCrumbs,
            };
          }
        }
      }
    }
    return null;
  };

  const activeRouteData = getActiveRouteData();

  return (
    <div className="flex bg-base-white border-b border-border">
      <div className="w-full h-13 flex justify-between items-center px-5 py-3.5">
        <div className="flex-1 h-full flex justify-start items-center">
          <Breadcrumb>
            <BreadcrumbList>
              {activeRouteData ? (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      asChild
                      className="text-foreground hover:text-primary-600"
                    >
                      <Link to={activeRouteData.groupUrl || "#"}>
                        {activeRouteData.groupTitle}
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  {activeRouteData.extraCrumbs &&
                    activeRouteData.extraCrumbs.map((crumb, idx) => (
                      <React.Fragment key={idx}>
                        <BreadcrumbSeparator className="text-muted-foreground" />
                        <BreadcrumbItem>
                          <BreadcrumbLink
                            asChild
                            className="text-foreground hover:text-primary-600"
                          >
                            <Link to={crumb.url}>{crumb.title}</Link>
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                      </React.Fragment>
                    ))}

                  {activeRouteData.subItemTitle ? (
                    <>
                      <BreadcrumbSeparator className="text-muted-foreground" />
                      <BreadcrumbItem>
                        <BreadcrumbLink
                          asChild
                          className="text-foreground hover:text-primary-600"
                        >
                          <Link to={activeRouteData.itemUrl || "#"}>
                            {activeRouteData.itemTitle}
                          </Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="text-muted-foreground" />
                      <BreadcrumbItem>
                        {activeRouteData.leafTitle ? (
                          <BreadcrumbLink
                            asChild
                            className="text-foreground hover:text-primary-600"
                          >
                            <Link to={activeRouteData.subItemUrl || "#"}>
                              {activeRouteData.subItemTitle}
                            </Link>
                          </BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage className="text-primary-600 font-medium">
                            {activeRouteData.subItemTitle}
                          </BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                      {activeRouteData.leafTitle && (
                        <>
                          <BreadcrumbSeparator className="text-muted-foreground" />
                          <BreadcrumbItem>
                            <BreadcrumbPage className="text-primary-600 font-medium">
                              {activeRouteData.leafTitle}
                            </BreadcrumbPage>
                          </BreadcrumbItem>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <BreadcrumbSeparator className="text-muted-foreground" />
                      <BreadcrumbItem>
                        <BreadcrumbPage className="text-primary-600 font-medium">
                          {activeRouteData.itemTitle}
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </>
                  )}
                </>
              ) : isDashboard ? (
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary-600 font-medium">
                    Dashboard
                  </BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-20 bg-gray-200" />
                  <ChevronRight className="h-3 w-3 text-gray-300" />
                  <Skeleton className="h-4 w-28 bg-gray-200" />
                </div>
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex justify-end items-center gap-x-2">
          <LanguageChange />
          <Bell className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
