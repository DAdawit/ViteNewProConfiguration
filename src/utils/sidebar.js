import { Shield } from "lucide-react";
import { AiOutlineAudit } from "react-icons/ai";
import { FaArchive, FaUserCircle } from "react-icons/fa";
import { FaDatabase, FaShare, FaUsers } from "react-icons/fa6";
import { GiPostOffice } from "react-icons/gi";
import { HiDocument, HiDocumentText, HiMiniDocumentArrowDown, HiMiniDocumentArrowUp, HiMiniDocumentMagnifyingGlass, HiMiniDocumentMinus } from "react-icons/hi2";
import { IoIosSettings } from "react-icons/io";
import { MdAssignmentAdd, MdDashboard } from "react-icons/md";
import { RiOrganizationChart } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";

export const sidebarLinks = {
  navMain: [
    {
      title: ["Monitoring & Evaluation", "ክትትልና ግምገማ"],
      url: "/",
      items: [
        {
          title: ["Dashboard", "ዋና አመልካች ማሳያ"],
          icon: MdDashboard,
          items: [
            {
              title: ["Overview", "አጠቃላይ እይታ"],
              url: "/",
              icon: MdDashboard,
              require: "all",
              permissions: "",
            },
            {
              title: ["Incoming Letters", "ገቢ ደብዳቤዎች"],
              url: "/incomingletters",
              icon: HiMiniDocumentArrowDown,
              require: "any",
              permissions: "",
            },
            {
              title: ["Outgoing Letters", "ወጪ ደብዳቤዎች"],
              url: "/outgoingletters",
              icon: HiMiniDocumentArrowDown,
              require: "any",
              permissions: "",
            },
            {
              title: ["Internal Memos", "የውስጥ ማስታወሻዎች"],
              url: "/memos",
              icon: HiMiniDocumentArrowDown,
              require: "any",
              permissions: "",
            },
            {
              title: ["Meeting Minutes", "የየስብሰባ ቃለ ጉባዔ"],
              url: "/minutes",
              icon: HiMiniDocumentArrowDown,
              require: "any",
              permissions: "",
            },
            {
              title: ["Document Repository", "የሰነድ ማከማቻ"],
              url: "/documentrepository",
              icon: HiMiniDocumentArrowDown,
              require: "any",
              permissions: "",
            },
          ],
        },

        {
          title: ["Reports", "ሪፖርቶች"],
          url: "/reports",
          icon: TbReportSearch,
          require: "all",
          permissions: "",
        },
      ],
    },
    {
      title: ["Document Management", "የሰነዶች አስተዳደር"],
      url: "/",
      items: [
        {
          title: ["Incoming Letters", "ገቢ ደብዳቤዎች"],
          url: "/incoming",
          icon: HiMiniDocumentArrowDown,
          require: "all",
          permissions: HiMiniDocumentArrowDown,
        },
        {
          title: ["Outoing Letters", "ወጪ ደብዳቤዎች"],
          url: "/outgoing",
          icon: HiMiniDocumentArrowUp,
          require: "all",
          permissions: HiMiniDocumentArrowUp,
        },
        {
          title: ["Memo", "የውስጥ ማስታወሻ"],
          url: "/memos",
          icon: HiDocument,
          require: "all",
          permissions: "",
        },
        {
          title: ["Minutes", "ቃለ ጉባኤዎች"],
          url: "/minutes",
          icon: HiDocumentText,
          require: "all",
          permissions: "",
        },
        {
          title: ["Pre-System Letters", "ከሲስተም በፊት ደብዳቤዎች"],
          url: "/presystem",
          icon: HiMiniDocumentMagnifyingGlass,
          require: "all",
          permissions: "",
        },
        {
          title: ["Document Repository", "የሰነዶች ማከማቻ"],
          url: "/respositiories",
          icon: FaDatabase,
          require: "all",
          permissions: "",
        },
        {
          title: ["Closings", "መዝጊያ"],
          url: "/closings",
          icon: HiMiniDocumentMinus,
          require: "all",
          permissions: "",
        },
        {
          title: ["Document Category", "የሰነድ ምድብ"],
          url: "/documentcategory",
          icon: FaArchive,
          require: "all",
          permissions: "",
        },
      ],
    },
    {
      title: ["Organizational Control", " የመዋቅር ቁጥጥር"],
      url: "/",
      items: [
        {
          title: ["Organizations Management", "የተቋሞች አስተዳደር"],
          url: "/organizations",
          icon: RiOrganizationChart,
          require: "all",
          permissions: "",
        },
        {
          title: ["Record Offices", "የመዝግብ ቢሮዎች"],
          url: "/recordoffices",
          icon: GiPostOffice,
          require: "all",
          permissions: "",
        },
      ],
    },
    {
      title: ["System & Administration", "ሲስተም እና አስተዳደር"],
      url: "/",
      items: [
        {
          title: ["User Management", "የተጠቃሚ አስተዳደር"],
          url: "/users",
          icon: FaUserCircle,
          require: "all",
          permissions: "",
        },
        {
          title: ["Delegation Assignment", "የውክልና ምደባ"],
          url: "/delegations",
          icon: MdAssignmentAdd,
          require: "all",
          permissions: "",
        },
        {
          title: ["Account Sharing", "መለያ መጋራት"],
          url: "/sharing",
          icon: FaShare,
          require: "all",
          permissions: "",
        },

        {
          title: ["Groups and Permissions", "ቡድኖች እና ፈቃዶች"],
          url: "/groups",
          icon: FaUsers,
          require: "all",
          permissions: "",
        },
        {
          title: ["CORS", "ኮርስ"],
          url: "/cors",
          icon: Shield,
          require: "all",
          permissions: "",
        },
        {
          title: ["System Settings", "የሲስተም ቅንብሮች"],
          url: "/settings",
          icon: IoIosSettings,
          require: "all",
          permissions: "",
        },
        {
          title: ["Audit Logs", "የኦዲት መዝገብ"],
          url: "/audit",
          icon: AiOutlineAudit,
          require: "all",
          permissions: "",
        },
      ],
    },
  ],
};