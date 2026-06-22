import { HiMiniDocumentPlus } from "react-icons/hi2";
import {
  TbAccessible,
  TbAlertTriangle,
  TbBed,
  TbBriefcase,
  TbBuilding,
  TbCategory,
  TbCloudUpload,
  TbCreditCard,
  TbEdit,
  TbFileCheck,
  TbFileText,
  TbForms,
  TbHeart,
  TbHome,
  TbInfoCircle,
  TbKey,
  TbLayersDifference,
  TbListCheck,
  TbMapPin,
  TbNews,
  TbPhoto,
  TbPigMoney,
  TbRefresh,
  TbReportSearch,
  TbRoute,
  TbSettings,
  TbTag,
  TbUpload,
  TbUser,
  TbUserExclamation,
  TbUserPlus,
  TbUsers,
  TbUsersGroup,
  TbUserStar,
  TbWallet,
  TbWorld,
} from "react-icons/tb";

import { language } from "./language";
import { toEthiopian } from "ethiopian-date";
import { FaRegCircleQuestion } from "react-icons/fa6";

export const sidebarLinks = {
  navMain: [
    // Dashboard
    {
      title: language.dashboard,
      url: "/dashboard",
      category: "dashboard",
      items: [
        {
          title: language.analytics,
          url: "/dashboard/analytics",
          selfView: true,
          icon: TbReportSearch,
          require: "any",
          permissions: [""], // TODO: check and finalize
        },
        {
          title: language.reports,
          url: "/dashboard/reports",
          selfView: true,
          icon: TbReportSearch,
          require: "any",
          permissions: [""],
        },
      ],
    },
    // Content Management
    {
      title: language.contentManagement,
      url: "/cms",
      category: "cms",
      items: [
        {
          title: language.news,
          url: "/cms/news",
          selfView: true,
          icon: TbNews,
          require: "any",
          permissions: [""],
        },
        {
          title: language.hero,
          url: "/cms/hero",
          selfView: true,
          icon: TbPhoto,
          require: "any",
          permissions: [""],
        },
        {
          title: language.mainDirector,
          url: "/cms/main-director",
          selfView: true,
          icon: TbUserStar,
          require: "any",
          permissions: [""],
        },
        {
          title: language.about,
          url: "/cms/about",
          selfView: true,
          icon: TbInfoCircle,
          require: "any",
          permissions: [""],
        },
      ],
    },

    // Organization
    {
      title: language.organization,
      url: "/administration",
      category: "administration",
      items: [
        {
          title: language.organization,
          url: "/administration/organization",
          selfView: true,
          icon: TbBuilding,
          require: "any",
          permissions: [""],
        },
      ],
    },

    // User & Access Control
    {
      title: language.userAndAccessControl,
      url: "/administration",
      category: "administration",
      items: [
        {
          title: language.users,
          url: "/administration/users",
          selfView: true,
          icon: TbUsers,
          require: "any",
          permissions: [""],
        },
        {
          title: language.groups,
          url: "/administration/groups",
          selfView: true,
          icon: TbUsersGroup,
          require: "any",
          permissions: [""],
        },
        {
          title: language.permissions,
          url: "/administration/permissions",
          selfView: true,
          icon: TbKey,
          require: "any",
          permissions: [""],
        },
        {
          title: language.permissionCategories,
          url: "/administration/permission-categories",
          selfView: true,
          icon: TbCategory,
          require: "any",
          permissions: [""],
        },
      ],
    },

    {
      title: language.registrationAndCampaigns,
      url: "/registration",
      category: "registration",
      items: [
        {
          title: language.registrationForms,
          icon: TbFileText, // You can change the icon
          require: "any",
          permissions: [""],
          items: [
            {
              title: language.registrationForms,
              url: "/registration/forms",
              selfView: true,
              icon: TbForms,
              require: "any",
              permissions: [""],
            },
            {
              title: language.formDecisions,
              url: "/registration/forms/decisions",
              selfView: true,
              icon: TbFileCheck,
              require: "any",
              permissions: [""],
            },
            {
              title: language.decisionGivers,
              url: "/registration/forms/decision-givers",
              selfView: true,
              icon: TbUsers,
              require: "any",
              permissions: [""],
            },
            {
              title: language.servicePayments,
              url: "/registration/forms/service-payments",
              selfView: true,
              icon: TbCreditCard,
              require: "any",
              permissions: [""],
            },
          ],
        },
        {
          title: language.registrationStations,
          icon: TbMapPin,
          require: "any",
          permissions: [""],
          items: [
            {
              title: language.registrationStations,
              url: "/registration/stations",
              selfView: true,
              icon: TbMapPin,
              require: "any",
              permissions: [""],
            },
            {
              title: language.approvalUnits,
              url: "/registration/stations/approval-units",
              selfView: true,
              icon: TbBuilding,
              require: "any",
              permissions: [""],
            },
            {
              title: language.approvalUnitPartitions,
              url: "/registration/stations/approval-unit-partitions",
              selfView: true,
              icon: TbLayersDifference,
              require: "any",
              permissions: [""],
            },
          ],
        },
      ],
    },

    // System & Monitoring
    {
      title: language.systemAndMonitoring,
      url: "/system",
      category: "system",
      items: [
        {
          title: language.auditLogs,
          url: "/system/audit-logs",
          selfView: true,
          icon: TbListCheck,
          require: "any",
          permissions: [""],
        },
      ],
    },
  ],
};

export const getEthiopianDate = (dateInput) => {
  if (!dateInput) return null;

  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
  if (isNaN(date.getTime())) return null;

  try {
    const [year, month, day] = toEthiopian(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
    );

    const ethiopianMonths = [
      "መስከረም",
      "ጥቅምት",
      "ኅዳር",
      "ታኅሣሥ",
      "ጥር",
      "የካቲት",
      "መጋቢት",
      "ሚያዝያ",
      "ግንቦት",
      "ሰኔ",
      "ሐምሌ",
      "ነሐሴ",
      "ጳጉሜ",
    ];

    return {
      year,
      month,
      monthName: ethiopianMonths[month - 1],
      day,
      formatted: `${day} ${ethiopianMonths[month - 1]} ${year}`,
    };
  } catch {
    return null;
  }
};
export const customFormatNumber = (number) => {
  if (!number || isNaN(number)) return "";
  let numStr = number.toString();
  let [integerPart, decimalPart = ""] = numStr.split(".");
  let formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
};

export const formatFileSize = (bytes, decimals = 1) => {
  if (bytes === 0) return "0 Bytes";
  if (!bytes || bytes < 0) return "—";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

export function languageTranslate(lang, key) {
  if (!key || !language[key]) return undefined;

  switch (lang) {
    case "en":
      return language[key][0];
    case "am":
      return language[key][1];
    default:
      return undefined;
  }
}

export function t(language, key, fallback) {
  const translated = languageTranslate(language, key);
  return translated || fallback;
}

export const languages = ["en", "am"];
export const languageNames = {
  en: {
    en: "English",
    am: "እንግሊዝኛ",
  },
  am: {
    en: "Amharic",
    am: "አማርኛ",
  },
};

export const formatTimeAgo = (dateString) => {
  if (!dateString) return "Never";
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 60) return "Just now";
  if (diffInSeconds < 3600)
    return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 2592000)
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  if (diffInSeconds < 31536000)
    return `${Math.floor(diffInSeconds / 2592000)} months ago`;
  return `${Math.floor(diffInSeconds / 31536000)} years ago`;
};

export const loadFilters = (path, key) => {
  if (location?.pathname !== path) return null;
  const stored = localStorage.getItem(key);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
};

export const parseSort = (v) => {
  const s = String(v ?? "");
  return s === "1" || s === "-1" ? s : "-1";
};

export const STRUCT_LEVEL_FILTER_SPEC = {
  name: {
    key: "name",
    default: "",
  },
  level: {
    key: "level",
    default: "",
    parse: (v) => String(v || "").trim(),
  },
  org: {
    key: "org",
    default: "",
    parse: (v) => String(v || "").trim(),
    serialize: (v) => String(v || "").trim(),
    omit: (v) => !String(v || "").trim(),
  },
  page: {
    key: "page",
    default: 1,
    parse: (v) => {
      const n = parseInt(v || "", 10);
      return !isNaN(n) && n > 0 ? n : 1;
    },
    serialize: (v) => String(v || 1),
    omit: (v) => Number(v) <= 1,
  },
  sort: {
    key: "sort",
    default: "-1",
    parse: parseSort,
    serialize: parseSort,
    omit: () => false,
  },
};

export const normalizeDelegationStatus = (v) =>
  ["pending", "active", "rejected", "revoked"].includes(v) ? v : "";

const parsePage = (v) => {
  const n = parseInt(String(v ?? ""), 10);
  return Number.isFinite(n) && n > 0 ? n : 1;
};

export const PERM_CATEGORY_FILTER_SPEC = {
  page: {
    key: "page",
    default: 1,
    parse: parsePage,
    serialize: (v) => String(parsePage(v)),
    omit: (v) => parsePage(v) <= 1,
  },
  sort: {
    key: "sort",
    default: "-1",
    parse: parseSort,
    serialize: parseSort,
    omit: (v) => parseSort(v) === "-1",
  },
  name: {
    key: "name",
    default: "",
  },
};

const darkMode = localStorage.getItem("darkMode");

export const isDarkMode = darkMode === "true" || darkMode === "1";

export const formatTime = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

export const languagesForInputs = [
  { code: "en", label: "ENGLISH", placeholder: "Enter text in English" },
  { code: "am", label: "AMHARIC", placeholder: "Enter text in Amharic" },
];

export function normalizeApiArray(data) {
  if (Array.isArray(data)) return data;
  if (data && typeof data === "object") {
    const firstArray = Object.values(data).find((v) => Array.isArray(v));
    if (firstArray) return firstArray;
  }
  return [];
}

export function getDisplayName(item, lang) {
  if (!item) return "-";
  const raw = item.name || item.letterName || item.fullname || "-";
  if (typeof raw === "object") return raw[lang] || raw.en || raw.am || "-";
  return raw;
}
