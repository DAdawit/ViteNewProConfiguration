import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
  SidebarTrigger,
} from "../components/ui/sidebar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../components/ui/collapsible";
import { Building2, ChevronDown, LogOut, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { languageTranslate, sidebarLinks } from "../utils/data";
import { Check } from "lucide-react";
import { TbSelector } from "react-icons/tb";
import { useEffect, useMemo, useState } from "react";
import apiRequest from "../utils/request";
import { jwtDecode } from "jwt-decode";
import { setActiveWorkspaceRef } from "@/utils/activeWorkspaceRef";
import { filterSidebar } from "@/utils/checkPermission";
import ThemeToggleButton from "./ThemeToggleButton";
import useAppStore from "@/Store/useAppStore";
import ServerError from "./common/ServerError";
import useUserStore from "@/Store/useUserStore";
import useUserPermissionsStore from "@/Store/UserPermissionsStore";

const AppSidebar = () => {
  const token = sessionStorage.getItem("tID");
  const userInfo = token ? jwtDecode(token) : null;
  const { open, setOpen } = useSidebar();
  const language = useAppStore((state) => state.language);
  const theme = useAppStore((state) => state.theme);
  const title = useAppStore((state) => state.title);
  const user = useUserStore((state) => state.user);
  const permissions = useUserPermissionsStore((state) => state.permissions);
  const permissionCodes = useMemo(
    () => permissions?.map((p) => p?.code_name) || [],
    [permissions],
  );

  const navigate = useNavigate();
  const location = useLocation();
  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setOpen]);

  const currentOrgId = userInfo?.currentOrgId || null;
  const userOrgIds = user?.orgIds || [];

  const displayName = user?.fullname?.[language] || "Personal Account";

  /**
   * Switch the active organization context.
   * Posts to /account_switch_api/switch_account with the selected orgId.
   */
  const switchOrganization = async (orgId) => {
    try {
      const response = await apiRequest.post(
        "/account_switch_api/switch_account",
        { orgId },
        {
          headers: {
            GET_SWTCHACC_API: import.meta.env.VITE_APP_GET_SWTCHACC_API,
          },
        },
      );

      sessionStorage.setItem("tID", response?.data?.token);
      setActiveWorkspaceRef({ orgId });
      // Clear permissions and navigate to trigger re-fetch in Content/Dashboard
      useUserPermissionsStore.getState().clearPermissions();
      navigate("/", { replace: true });
    } catch {
      setServerError(true);
    }
  };

  const handleLogout = async () => {
    try {
      const token = sessionStorage.getItem("tID");
      await apiRequest.get("/user_api/logout_user", {
        headers: {
          get_lguser_api: import.meta.env.VITE_APP_GET_LGUSER_API,
          Authorization: `Bearer ${token}`,
        },
      });
      sessionStorage.clear();
      navigate("/login");
    } catch (error) {
      if (error?.response?.status === 500) setServerError(true);
    }
  };

  const activeCategory = location.pathname.split("/")[1] || "dashboard";

  // First filter by category (which section the user is in)
  const categoryLinks = sidebarLinks.navMain.filter(
    (link) => link.category === activeCategory,
  );

  // Then filter by user permissions
  const isSuperAdmin = user?.isSuperAdmin === "yes";
  const filteredSidebarLinks = filterSidebar(
    categoryLinks,
    permissionCodes,
    isSuperAdmin,
  );

  const segments = location.pathname.split("/");
  let registrationId = null;
  // If we are in registration section and the second segment is not one of the static routes, it's likely an ID
  if (
    segments[1] === "registration" &&
    segments[2] &&
    !["forms", "stations", "analytics", "reports"].includes(segments[2])
  ) {
    registrationId = segments[2];
  }

  const getDynamicUrl = (url) => {
    if (!url) return url;
    if (
      registrationId &&
      url.startsWith("/registration/") &&
      !url.includes(`/${registrationId}/`)
    ) {
      return url.replace("/registration/", `/registration/${registrationId}/`);
    }
    return url;
  };

  const isBaseRegistration = location.pathname === "/registration";

  if (isBaseRegistration) return null;
  if (serverError) return <ServerError />;

  return (
    <Sidebar className="h-full! bg-right-sidebar" collapsible="icon">
      <SidebarHeader className="px-0! bg-sidebar-profile m-1 md:m-3 rounded-[10px]">
        <div className="w-full flex flex-col gap-2.5">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2 px-1">
              {open && (
                <img
                  src="/logos/AACA_Logo.png"
                  alt=""
                  className="h-6 w-6 object-contain"
                />
              )}
              <img
                src="/logos/AACA_Logo.png"
                alt=""
                className="h-6 w-6 object-contain md:hidden"
              />
              <img
                src="/logos/AAHDAB_Logo.png"
                alt=""
                className="h-6.5 w-6 object-contain"
              />
              {open && (
                <h1 className="font-medium text-sm leading-thight tracking-tight text-center capitalize text-sidebar-50 uppercase">
                  {languageTranslate(language, "aahdab")}
                </h1>
              )}
              <h1 className="font-medium text-sm leading-thight tracking-tight text-center capitalize text-sidebar-50 uppercase md:hidden">
                {languageTranslate(language, "aahdab")}
              </h1>
            </div>
            <div className="md:hidden">
              <ThemeToggleButton />
            </div>
            <div className="flex items-center ">
              <SidebarTrigger className="mr-2 text-white" />
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent
        className={`text-white pt-3.5 pb-3.5 rounded-[10px] bg-right-sidebar group-data-[collapsible=icon]:overflow-auto overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
      >
        {/* {filteredSidebarLinks?.map((group, gIdx) => ( */}
        {/* {sidebarLinks?.navMain?.map((group, gIdx) => ( */}
        {sidebarLinks?.navMain?.map((group, gIdx) => (
          <SidebarGroup key={gIdx} className="p-0">
            <SidebarGroupLabel className="px-3.5 py-[4.5px] rounded-none">
              <span className="text-white  text-xs font-bold leading-none tracking-normal align-middle w-full py-2 pr-3.5 pl-2.5 box-border rounded-[10px] border-b border-[#E1EEF7]">
                {language === "en" && group?.title[0]}
                {language === "am" && group?.title[1]}
              </span>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-0">
                {group?.items?.map((navItem, nIdx) => {
                  const hasSubItems = navItem?.items?.length > 0;

                  const isActive =
                    navItem?.url === "/"
                      ? location.pathname === "/"
                      : navItem?.url &&
                        location.pathname.startsWith(
                          getDynamicUrl(navItem.url),
                        );

                  const isAnySubActive = hasSubItems
                    ? navItem?.items?.some((sub) => {
                        const dUrl = getDynamicUrl(sub?.url);
                        return sub?.url === ""
                          ? location.pathname === "/"
                          : dUrl && location.pathname.startsWith(dUrl);
                      })
                    : false;

                  const parentLink = navItem?.link || navItem?.url;
                  const dParentLink = getDynamicUrl(parentLink);
                  const isParentLinkActive =
                    !!dParentLink &&
                    (dParentLink === "/"
                      ? location.pathname === "/"
                      : location.pathname.startsWith(dParentLink));

                  const isParentActive =
                    hasSubItems && (isAnySubActive || isParentLinkActive);

                  return (
                    <SidebarMenuItem key={nIdx}>
                      {hasSubItems ? (
                        <Collapsible defaultOpen={false}>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton
                              onClick={() => {
                                if (navItem.link) {
                                  navigate(getDynamicUrl(navItem?.link));
                                } else {
                                  return;
                                }
                              }}
                              className={`
                                    group w-[90%] gap-2.5 h-10 mx-3.5 py-0 cursor-pointer flex items-center justify-between
                                    text-sidebar-50 hover:bg-white hover:text-black hover:font-bold 
                                    data-[state=open]:bg-brand-secondary data-[state=open]:text-sidebar-50 data-[state=open]:font-bold
                                    group-data-[collapsible=icon]:w-full group-data-[collapsible=icon]:mx-0 group-data-[collapsible=icon]:justify-center
                                    group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:h-auto group-data-[collapsible=icon]:py-2.5
                                  `}
                            >
                              <div
                                className={`flex hover:bg-transparent  items-center gap-2.5 group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:gap-0`}
                              >
                                {navItem.icon && (
                                  <navItem.icon
                                    size={20}
                                    className={`group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:size-5`}
                                  />
                                )}
                                <span
                                  className={`
                                        text-[14px] group-data-[collapsible=icon]:text-center group-data-[collapsible=icon]:text-[10px]
                                       ${
                                         isParentActive
                                           ? "font-bold hover:bg-transparent "
                                           : "font-normal"
                                       }
                                      `}
                                >
                                  {language === "en" && navItem?.title[0]}
                                  {language === "am" && navItem?.title[1]}
                                </span>{" "}
                              </div>

                              <ChevronDown
                                size={12}
                                className={`
                                      h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180
                                          ${
                                            isParentActive
                                              ? "group-data-[state=open]:font-bold text-accent-logo hover:text-black"
                                              : "font-normal"
                                          }
                                      group-data-[collapsible=icon]:size-3 group-data-[collapsible=icon]:mt-1
                                    `}
                              />
                            </SidebarMenuButton>
                          </CollapsibleTrigger>

                          <CollapsibleContent>
                            <div className="w-[90%] border-l border-accent-logo  group-data-[collapsible=icon]:ml-1 ml-8 mt-1 space-y-1">
                              {navItem?.items?.map((subItem) => {
                                const isSubActive =
                                  subItem.url &&
                                  (location.pathname ===
                                    getDynamicUrl(subItem.url) ||
                                    (subItem.url === "/registration/stations" &&
                                      /^\/registration\/[^/]+\/stations\/?$/.test(
                                        location.pathname,
                                      )) ||
                                    (subItem.url !== "/" &&
                                      location.pathname.startsWith(
                                        getDynamicUrl(subItem.url),
                                      ) &&
                                      location.pathname[
                                        getDynamicUrl(subItem.url).length
                                      ] === "/" &&
                                      !navItem.items.some(
                                        (sibling) =>
                                          sibling.url &&
                                          sibling.url !== subItem.url &&
                                          location.pathname.startsWith(
                                            getDynamicUrl(sibling.url),
                                          ) &&
                                          getDynamicUrl(sibling.url).length >
                                            getDynamicUrl(subItem.url).length,
                                      )));

                                return (
                                  <SidebarMenuItem
                                    key={subItem?.title}
                                    className={"w-full"}
                                  >
                                    <NavLink
                                      to={getDynamicUrl(subItem?.url)}
                                      className="block w-full pr-4  group-data-[collapsible=icon]:pr-0"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(getDynamicUrl(subItem?.url));
                                      }}
                                    >
                                      <SidebarMenuButton
                                        className={`
                                              w-full h-9 flex items-center gap-2 px-2  text-[14px] transition-colors 
                                              group-data-[collapsible=icon]:flex-col 
                                              group-data-[collapsible=icon]:justify-center 
                                              group-data-[collapsible=icon]:items-center
                                              group-data-[collapsible=icon]:px-0
                                       
                                              ${
                                                isSubActive
                                                  ? "bg-white text-black font-bold border-l-3 rounded-tl-[1px] rounded-bl-[1px]  border-brand-secondary"
                                                  : "text-white hover:bg-white rounded-tl-[1px] rounded-bl-[1px] hover:text-black hover:font-bold hover:cursor-pointer"
                                              }
                                            `}
                                      >
                                        {subItem?.icon && (
                                          <subItem.icon
                                            size={16}
                                            className="group-data-[collapsible=icon]:mx-auto "
                                          />
                                        )}
                                        <div className="group-data-[collapsible=icon]:text-[10px] group-data-[collapsible=icon]:text-center ">
                                          <span className="group-data-[collapsible=icon]:text-center">
                                            {/* {subItem?.title?.[language] || ""} */}

                                            {language === "en" &&
                                              subItem?.title[0]}
                                            {language === "am" &&
                                              subItem?.title[1]}
                                          </span>
                                        </div>
                                      </SidebarMenuButton>
                                    </NavLink>
                                  </SidebarMenuItem>
                                );
                              })}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <NavLink
                          to={getDynamicUrl(navItem?.url)}
                          className="w-full flex items-center gap-2 group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:gap-1 group-data-[collapsible=icon]:text-center"
                        >
                          <SidebarMenuButton
                            onClick={() => navigate(getDynamicUrl(navItem.url))}
                            className={`w-full gap-2.5 h-10 mx-3.5 py-0 cursor-pointer flex  ${
                              isActive
                                ? "bg-white font-bold text-black border-y-0 border-x-3  border-brand-secondary shadow-[0_2px_6px_0_#1018280F] cursor-pointer"
                                : "text-white hover:bg-white hover:text-black hover:font-bold my-1 cursor-pointer"
                            }`}
                          >
                            {navItem?.icon && (
                              <>
                                {isActive || isParentActive ? (
                                  navItem.activeIcon ? (
                                    <navItem.activeIcon
                                      size={20}
                                      className={`group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:size-5`}
                                    />
                                  ) : (
                                    <navItem.icon
                                      size={20}
                                      className={`group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:size-5`}
                                    />
                                  )
                                ) : (
                                  <navItem.icon
                                    size={20}
                                    className={`group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:size-5`}
                                  />
                                )}
                              </>
                            )}
                            <span
                              className={`w-full px-px text-[14px]  group-data-[collapsible=icon]:whitespace-normal hover:font-bold  group-data-[collapsible=icon]:wrap-break-word group-data-[collapsible=icon]:text-center group-data-[collapsible=icon]:leading-tight group-data-[collapsible=icon]:text-[10px]`}
                            >
                              {language === "en" && navItem?.title[0]}
                              {language === "am" && navItem?.title[1]}
                            </span>
                          </SidebarMenuButton>
                        </NavLink>
                      )}
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter
        className={`rounded-[10px] gap-0! m-3.5 mb-6 pt-2.5 pb-2.5 bg-sidebar-profile shadow-[0_0_10px_0_#0A74B933] h-fit`}
      >
        <SidebarMenu className="gap-0">
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="flex min-h-10 2xl:min-h-16 cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 hover:bg-primary-50 data-[state=open]:bg-primary-50 transition-colors">
                  <div className="flex items-center gap-3 flex-1 py-1 text-sidebar-50 hover:text-sidebar-950">
                    <div className="p-1 rounded-full bg-yellow-100 flex items-center justify-center ">
                      <User className="w-6 h-6 text-yellow-800" />
                    </div>
                    <div
                      className={`text-left overflow-auto ${
                        open ? "block" : "block md:hidden lg:hidden"
                      }`}
                    >
                      <p
                        className="text-sm font-semibold line-clamp-2 uppercase"
                        title={displayName}
                      >
                        {displayName}
                      </p>
                    </div>
                  </div>
                  <TbSelector className="ml-auto w-4 h-4 text-primary-700 transition-transform data-[state=open]:rotate-180" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                side="top"
                align="start"
                sideOffset={8}
                className="w-72 rounded-lg p-2"
              >
                {/* Organization Switcher */}
                <div className="px-3 py-2 text-xs font-medium text-neutral-500 uppercase">
                  {languageTranslate(language, "organization")}
                </div>

                {userOrgIds.map((org) => {
                  const orgId =
                    typeof org === "string" ? org : org?._id || org?.orgId;
                  const orgName =
                    typeof org === "object"
                      ? org?.name?.[language] || org?.name?.en || orgId
                      : orgId;
                  const isActive = currentOrgId === orgId;

                  return (
                    <DropdownMenuItem
                      key={orgId}
                      onClick={() => !isActive && switchOrganization(orgId)}
                      className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-full bg-info-100 flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-info-700" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {orgName}
                        </p>
                      </div>
                      {isActive && (
                        <Check className="ml-auto w-4 h-4 text-green-600 shrink-0" />
                      )}
                    </DropdownMenuItem>
                  );
                })}

                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>

          <div className={`w-full h-px bg-neutral-300  my-1`} />

          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleLogout}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-50 hover:text-sidebar-950 dark:text-destructive-900 hover:bg-neutral-50 cursor-pointer`}
            >
              <LogOut className="size-5 shrink-0" />

              <span className="flex-1 text-left text-sm font-medium group-data-[collapsible=icon]:hidden">
                {languageTranslate(language, "logout")}
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {open && (
            <>
              <div
                className={`w-full h-px ${
                  theme === "dark" ? "bg-neutral-700" : "bg-neutral-300"
                } my-1`}
              />
              <div className="text-center my-2 flex justify-center items-center gap-2 text-xs font-bold text-[#032A44]">
                <span className={`text-sidebar-50`}>Powered By</span>
                <a
                  href="https://www.aastu.edu.et/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#AD892E] cursor-pointer font-semibold text-[14px] hover:underline"
                >
                  AASTU
                </a>
              </div>
            </>
          )}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
