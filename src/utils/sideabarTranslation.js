import { AiOutlineAudit } from "react-icons/ai";
import {
  HiDocument,
  HiDocumentText,
  HiMiniDocumentArrowDown,
  HiMiniDocumentArrowUp,
  HiMiniDocumentMagnifyingGlass,
  HiMiniDocumentMinus,
  HiMiniDocumentPlus,
} from "react-icons/hi2";
import { TbReportSearch, TbUserExclamation } from "react-icons/tb";
import { GiPostOffice } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { RiOrganizationChart } from "react-icons/ri";
import { Shield } from "lucide-react";
import { MdAssignmentAdd, MdContentCopy, MdDashboard } from "react-icons/md";
import { FaArchive, FaDatabase, FaShare, FaUsers } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import {
  getAuditLogsPermission,
  getDelegationPermission,
  getGroupsPermission,
  getOrgnaizationsPermissions,
  getRecordOfficePermission,
  getSharingPermission,
  getUsersPermission,
} from "./permissions";
import { IoBriefcaseSharp } from "react-icons/io5";
export const sidebarLinks = {
  navMain: [
    {
      title: ["Monitoring & Evaluation", "ክትትልና ግምገማ", "Hordoffiif Gargaarsa"],
      url: "/",
      items: [
        {
          title: ["Dashboard", "ዋና አመልካች ማሳያ", "Daashboordii"],
          icon: MdDashboard,
          items: [
            {
              title: ["Overview", "አጠቃላይ እይታ", "Haala Waliigalaa"],
              url: "/",
              icon: MdDashboard,
              require: "all",
              permissions: [""],
            },
            {
              title: ["Incoming Letters", "ገቢ ደብዳቤዎች", "Xalayaa Dhufan"],
              url: "/incomingletters",
              icon: HiMiniDocumentArrowDown,
              require: "any",
              permissions: [""],
            },
            {
              title: ["Outgoing Letters", "ወጪ ደብዳቤዎች", "Xalayaalee Ba’aan"],
              url: "/outgoingletters",
              icon: HiMiniDocumentArrowDown,
              require: "any",
              permissions: [""],
            },
            {
              title: ["Internal Memos", "የውስጥ ማስታወሻዎች", "Yaadannoo keessaa"],
              url: "/memos",
              icon: HiMiniDocumentArrowDown,
              require: "any",
              permissions: [""],
            },
            {
              title: ["Meeting Minutes", "የየስብሰባ ቃለ ጉባዔ", "Daqiiqaa Walgahii"],
              url: "/minutes",
              icon: HiMiniDocumentArrowDown,
              require: "any",
              permissions: [""],
            },
            {
              title: ["Document Repository", "የሰነድ ማከማቻ", "Kuusaa Galmee"],
              url: "/documentrepository",
              icon: HiMiniDocumentArrowDown,
              require: "any",
              permissions: [""],
            },
          ],
        },

        {
          title: ["Reports", "ሪፖርቶች", "Gabaasa"],
          url: "/reports",
          icon: TbReportSearch,
          require: "all",
          permissions: [""],
        },
      ],
    },
    {
      title: ["Cases and Accusations", " የጉዳይ እና የጥቆማ መዝገቦች"],
      url: "/",
      items: [
        {
          title: ["Cases", " ጉዳዮች"],
          url: "/cases",
          icon: IoBriefcaseSharp,
          require: "all",
          permissions: [""],
        },
        {
          title: ["Case Requests", "የጉዳይ ጥያቄዎች"],
          url: "/case-requests",
          icon: HiMiniDocumentPlus,
          require: "all",
          permissions: [""],
        },
        {
          title: ["Accusations", "ጥቆማዎች"],
          url: "/accusations",
          icon: TbUserExclamation,
          require: "any",
          permissions: "",
        },
      ],
    },
    {
      title: ["Content Management", " የይዘት አስተዳደር"],
      url: "/",
      items: [
        {
          title: ["CMS", "የይዘት አስተዳደር"],
          url: "/cms",
          icon: MdContentCopy,
          require: "all",
          permissions: "",
        },
      ],
    },
    {
      title: ["Document Management", "የሰነዶች አስተዳደር", "Bulchiinsa Sanadaa"],
      url: "/",
      items: [
        {
          title: ["Incoming Letters", "ገቢ ደብዳቤዎች", "Xalayaa seenee"],
          url: "/incoming",
          icon: HiMiniDocumentArrowDown,
          require: "all",
          permissions: [""],
        },
        {
          title: ["Outgoing Letters", "ወጪ ደብዳቤዎች", "Xalayaa Ba'uu"],
          url: "/outgoing",
          icon: HiMiniDocumentArrowUp,
          require: "all",
          permissions: [""],
        },
        {
          title: ["Memo", "የውስጥ ማስታወሻ", "Yaadannoo keessoo"],
          url: "/memos",
          icon: HiDocument,
          require: "all",
          permissions: [""],
        },
        {
          title: ["Minutes", "ቃለ ጉባኤዎች", "daqiiqaa walgahii"],
          url: "/minutes",
          icon: HiDocumentText,
          require: "all",
          permissions: [""],
        },
        {
          title: [
            "Pre-System Letters",
            "ከሲስተም በፊት ደብዳቤዎች",
            "xalayaawwan Siistamiin Duraa",
          ],
          url: "/presystem",
          icon: HiMiniDocumentMagnifyingGlass,
          require: "all",
          permissions: [""],
        },
        {
          title: ["Document Repository", "የሰነዶች ማከማቻ", "Kuusaa sanadaa"],
          url: "/respositiories",
          icon: FaDatabase,
          require: "all",
          permissions: [""],
        },
        {
          title: ["Closings", "መዝጊያ", "Cufuu"],
          url: "/closings",
          icon: HiMiniDocumentMinus,
          require: "all",
          permissions: [""],
        },
        {
          title: ["Document Category", "የሰነድ ምድብ", "gosa xalayaa"],
          url: "/documentcategory",
          icon: FaArchive,
          require: "all",
          permissions: [""],
        },
      ],
    },
    {
      title: ["Organizational Control", " የመዋቅር ቁጥጥር", "To'annaa Ijaarsaa"],
      url: "/",
      items: [
        {
          title: [
            "Organizations Management",
            "የተቋሞች አስተዳደር",
            "Hoggansa Dhaabbilee",
          ],
          url: "/organizations",
          icon: RiOrganizationChart,
          require: "any",
          permissions: getOrgnaizationsPermissions,
        },
        {
          title: ["Record Offices", "የመዝግብ ቢሮዎች", "Waajjira Galmee"],
          url: "/recordoffices",
          icon: GiPostOffice,
          require: "any",
          permissions: getRecordOfficePermission,
        },
      ],
    },
    {
      title: [
        "System & Administration",
        "ሲስተም እና አስተዳደር",
        "Sirnaa fi Bulchiinsa",
      ],
      url: "/",
      items: [
        {
          title: [
            "User Management",
            "የተጠቃሚ አስተዳደር",
            "Bulchiinsa Fayyadamtootaa",
          ],
          url: "/users",
          icon: FaUserCircle,
          require: "any",
          permissions: getUsersPermission,
        },
        {
          title: ["Delegation Assignment", "የውክልና ምደባ", "ramaddii bakka bu'aa"],
          url: "/delegations",
          icon: MdAssignmentAdd,
          require: "any",
          permissions: getDelegationPermission,
        },
        {
          title: ["Account Sharing", "መለያ መጋራት", "Waliigalcha Akkaawuntii"],
          url: "/sharing",
          icon: FaShare,
          require: "any",
          permissions: getSharingPermission,
        },

        {
          title: [
            "Groups and Permissions",
            "ቡድኖች እና ፈቃዶች",
            "Gareewwan fi Hayyamoota",
          ],
          url: "/groups",
          icon: FaUsers,
          require: "any",
          permissions: getGroupsPermission,
        },
        {
          title: ["CORS", "ኮርስ", "CORS"],
          url: "/cors",
          icon: Shield,
          require: "all",
          permissions: "",
        },
        {
          title: ["System Settings", "የሲስተም ቅንብሮች", "Sirreeffama Siistamii"],
          url: "/settings",
          icon: IoIosSettings,
          require: "all",
          permissions: "",
        },
        {
          title: ["Audit Logs", "የኦዲት መዝገብ", "Galmeewwan Auditi"],
          url: "/audit",
          icon: AiOutlineAudit,
          require: "any",
          permissions: getAuditLogsPermission,
        },
      ],
    },
  ],
};
