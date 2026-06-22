const formatTime = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

export const language = {
  underAddisAbabaCityAdministration: [
    "Addis Ababa City Administration",
    "በአዲስ አበባ ከተማ አስተዳደር",
  ],
  fullAAHDAB: [
    "Addis Ababa Housing Development and Administration Bureau",
    "የአዲስ አበባ ቤቶች ልማት እና አስተዳደር ቢሮ",
  ],
  aahdc: ["AAHDC", "አአቤኮ", "AAHDC", "AAHDC", "AAHDC", "AAHDC"], // Tigrigna updated: ኣኣቤኮ (አዲስ አበባ ቤቶች ኮርፖሬሽን)
  fullAAHDC: [
    "Addis Ababa Housing Development Corporation",
    "አዲስ አበባ ቤቶች ልማት ኮርፖሬሽን",
  ],
  system: ["System", "ሲስተም"], // Tig: ሲስተም; Som: Nidaamka; Afar: Système (using French/English)
  welcomeBack: ["Welcome Back", "እንኳን ደህና መጡ"], // Tig:እንኳዕ ብድሓን መጹ; Som: Ku soo dhawoow; Afar: Koomol Ku Soolum
  personalAccount: ["Personal Account", "የግል አካውንት"], // Tig: ብሕታዊ ኣካውንት; Som: Akoonkaaga Gaarka ah; Afar: Akawuntii Daggawwa

  settings: ["Settings", "ቅንብሮች"], // Tig: ኣሰናድዋት; Som: Habayn; Afar: Qandi'in
  profile: ["Profile", "የግል ገፅ"], // Tig: ናይ ገዛእ ርእስኻ (Profile); Som: Muqaalka (Profile); Afar: Naa Daggawwa
  loginAccount: ["Login to your account", "ወደ አካውንትዎ ይግቡ"], // Tig: ናብ ኣካውንትኩም እተዉ; Som: Akoonkaada gal; Afar: Akawuntii Kee Gal
  email: ["Email/Phone Number *", "ኢሜይል/ስልክ ቁጥር *"], // Tig: ኢሜይል/ቁጽሪ ስልኪ *; Som: Email/Lambarka Taleefoonka *; Afar: E-mail/Numbara Bilbila
  password: ["Password", "የይለፍ ቃል"], // Tig: መሕለፊ ቃል; Som: Lambarka sirta ah; Afar: Jechi' Icittii
  forgotPassword: ["Forgot Password", "የይለፍ ቃል ረስተዋል?"], // Tig: መሕለፊ ቃል ረሲዕኩም?; Som: Lambarka sirta ah ma hilmaantay?; Afar: Jechi' Icittii Dagahtee?
  enterYourEmail: ["Enter Your Email/Phone Number", "ኢሜይልዎን/ስልክ ቁጥርዎን ያስገቡ"], // Tig: ኢሜይል/ቁጽሪ ስልኪ ኣእትዉ; Som: Geli Email/Lambarka Taleefoonkaaga; Afar: E-mail/Numbara Bilbila Kee Galchi
  enterYourPassword: ["Enter Your Password", "የይለፍ ቃልዎን ያስገቡ"], // Tig: መሕለፊ ቃልኩም ኣእትዉ; Som: Geli lambarkaaga sirta ah; Afar: Jechi' Icittii Kee Galchi
  confirmYourPassword: ["Confirm Your Password", "የይለፍ ቃልዎን ያረጋግጡ"], // Tig: መሕለፊ ቃልኩም ኣረጋግጹ; Som: Xaqiiji lambarkaaga sirta ah; Afar: Jechi' Icittii Kee Tabal
  login: ["Login", "ይግቡ"], // Tig: እተዉ; Som: Gal; Afar: Gal
  incorrectCredentials: [
    "The provided credentials are incorrect",
    "ያስገቡት የመግቢያ መረጃ ትክክል አይደለም።",
  ],

  emailOnly: ["Email", "ኢሜይል"], // Tig: ኢሜይል; Som: Email; Afar: E-mail

  passwordResetMessage2: [
    "If you haven't received an email in 5 minutes, check your spam, resend, or try a different email address.",
    "በ5 ደቂቃ ውስጥ ካልደረሰ፣ አይፈለጌ ሳጥንዎን (Spam) ያረጋግጡ፣ እንደገና እንዲላክ ይጠይቁ ወይም ሌላ አድራሻ ይጠቀሙ፡፡",
  ],
  resend: ["Resend", "እንደገና ይላኩ"], // Tig: ካልእ ግዜ ስደድ; Som: Mar labaad dir; Afar: Irra Deebin Ergi
  resetPassword: ["Reset Password", "የይለፍ ቃል ዳግም ያስጀምሩ"], // Tig: መሕለፊ ቃል ደጊም ኣቕንዕ; Som: Dib u deji lambarka sirta ah; Afar: Jechi' Icittii Tabal
  restoreAccess: ["Restore your account", "አካውንትዎን ይመልሱ"], // Tig: ኣካውንትኩም መልሱ; Som: Soo celi akoonkaada; Afar: Akawuntii Kee Deggawwi
  createNewPassword: ["Create New Password", "አዲስ የይለፍ ቃል ይፍጠሩ"],

  newPassword: ["New Password", "አዲስ የይለፍ ቃል *"], // Tig: ሓድሽ መሕለፊ ቃል *; Som: Lambarka sirta ah oo cusub *; Afar: Jechi' Icittii Harta *
  confirmPassword: ["Confirm Password", "የይለፍ ቃል ያረጋግጡ *"], // Tig: መሕለፊ ቃል ኣረጋግጽ *; Som: Xaqiiji lambarka sirta ah *; Afar: Jechi' Icittii Tabal *
  passwordDontMatch: ["Your Passwords do not match", "የይለፍ ቃሎቹ አይዛመዱም"],
  minimumEight: ["Minimum 8 letters", "ቢያንስ 8 ፊደላት"], // Tig: ብውሑዱ 8 ፊደላት; Som: Ugu yaraan 8 xaraf; Afar: 8 Quba Le'e
  atLeastOneNumber: ["At least one number", "ቢያንስ አንድ ቁጥር"],
  specialCharacters: [
    "At least one special character (e.g., !, @, #, $).",
    "ቢያንስ አንድ ልዩ ምልክት (ለምሳሌ፣ !, @, #, $)",
  ], // Tigrigna; Som: Ugu yaraan hal astaamo gaar ah; Afar: 1 Mallato' Adda Le'e
  returnToLogin: ["Return to login", "ወደ መግቢያ ገጽ ይመለሱ"], // Tig: ናብ ገጽ ምእታው ተመለስ; Som: Ku noqo bogga galitaanka; Afar: Seensa-le Deebi'i
  logout: ["Logout", "ይውጡ"], // Tig: ውጻእ; Som: Ka bax; Afar: Baa'i
  dashboard: ["Dashboard", "ዳሽቦርድ"], // Tig: ዳሽቦርድ; Som: Dashboard; Afar: Dashboard
  organization: ["Organization", "ተቋም"], // Tig: ትካል; Som: Hay'ad; Afar: Dhaabbata
  organizations: ["Organizations", "ተቋማት"], // Tig: ትካላት; Som: Hay'adaha; Afar: Dhaabbilee

  totalOrganizations: ["Total Organizations", "ጠቅላላ ተቋማት"], // Tig: ጠቕላላ ትካላት; Som: Wadarta Hay'adaha; Afar: Dhaabbilee Waliigalaa
  morefilters: ["More Filters", "ተጨማሪ ማጣሪያዎች"], // Tig: ተወሳኺ መምረሕታት; Som: Shaandheyaal kale; Afar: Haala Addaa Barbaaduuf
  actions: ["Actions", "ድርጊቶች"], // Tig: ተግባራት; Som: Ficilooyinka; Afar: Gochaalee
  sort: ["Sort", "ደ", "Qindeessi"], // Tig: ኣሰልፍ; Som: Kala sarree; Afar: Qindeessi
  latest: ["Latest", "የቅርብ ጊዜ"], // Tig: ናይ ቀረባ ግዜ; Som: Kii ugu dambeeyey; Afar: Yeroo Dhiho'o
  oldest: ["Oldest", "የቆየ"], // Tig: ናይ ቀደም; Som: Kii ugu horeeyey; Afar: Durii
  goto: ["Go to", "ወደ ገጽ"], // Tig: ናብ ገጽ; Som: U gudub; Afar: Gara Fuulaa
  active: ["Active", "ንቁ"], // Tig: ንቁህ; Som: Firfircoon; Afar: Hojii Irra Jiru
  inactive: ["Inactive", "ስራ ያቆመ"], // Tig: ስራ ደው ዘበለ; Som: Hawl gab; Afar: Hojii Irraa Dhaabbate
  applyFilters: ["Apply Filters", "ማጣሪያዎችን ተግብር"], // Tig: መምረሕታት ተግብር; Som: Ku dabaq shaandheyaasha; Afar: Adda Baasaa Hojii Irra Oolchi
  organizationName: ["Organization Name", "የተቋም ስም"], // Tig: ሽም ትካል; Som: Magaca Hay'adda; Afar: Maqaa Dhaabbataa
  parentOrganization: ["Parent Organization", "ተጠሪ ተቋም"],
  searchbyParentOrganization: [
    "Search by parent organization",
    "በተጠሪ ተቋም ይፈልጉ",
  ],
  type: ["Type", "አይነት"],
  location: ["Location", "አድራሻ"],
  searchByLocation: ["Search by location", "በአድራሻ ይፈልጉ"],
  status: ["Status", "ሁኔታ"],
  searchByStatus: ["Search by status", "በሁኔታ ይፈልጉ"],
  description: ["Description", "መግለጫ"],
  isBranch: ["Is Branch", "ቅርንጫፍ ነው?"],
  yes: ["Yes", "አዎ"],
  no: ["No", "አይ"],
  updateOrg: ["Update Organization", "ተቋም ያዘምኑ"],
  generalInformation: ["General Information", "አጠቃላይ መረጃ"],
  cancel: ["Cancel", "ይቅር"],
  confirm: ["Confirm", "ያረጋግጡ"],
  deactivate: ["Deactivate", "ከስራ ውጪ ያድርጉ"],
  organizationDetail: ["Organization Detail", "የተቋም ዝርዝር መረጃ"],
  createdBy: ["Created by", "በማን ተመዘገበ"],
  createdAt: ["Created At", "የተፈጠረበት ቀን"],
  requiredField: ["This field is required", "ይህ መስክ ያስፈልጋል"],
  remove: ["Remove", "ያስወግዱ"],
  groups: ["Groups", "ቡድኖች"],
  registerGroup: ["Add New Group", "አዲስ ቡድን ይመዝግቡ"],
  editGroup: ["Edit Group", "ቡድንን ያዘምኑ"],
  groupName: ["Group Name", "የቡድን ስም"],
  nameRequired: ["Name is required", "ስም ያስፈልጋል"],
  totalGroups: ["Total Groups", "ጠቅላላ ቡድኖች"],
  searchByName: ["Search by name", "በስም ይፈልጉ"],
  permissionCategory: ["Permission Category", "የፈቃድ ምድብ"],
  permissions: ["Permissions", "ፈቃዶች"],
  reorder: ["Reorder", "ዳግም ያቀናብሩ"],
  columns: ["Columns", "ዓምዶች"],
  allStatus: ["All Status", "ሁሉም ሁኔታዎች"],
  selectOrg: ["Select Organization", "ተቋም ይምረጡ"],
  assignPermission: ["Assign Permissions", "ፈቃዶችን ይመድቡ"],
  assignedPermission: ["Permission List", "የፈቃድ ዝርዝር"],
  choosePermissionCategory: [
    "Choose from permission categories",
    "ከፈቃድ ምድቦች ይምረጡ",
  ],
  searchByPermissionName: ["Search Permissions", "በፈቃድ ስም ይፈልጉ"],
  loading: ["Loading", "በሂደት ላይ"],
  groupStatus: ["Group Status", "የቡድን ሁኔታ"],
  totalCategories: ["Total Permission Categories", "ጠቅላላ የፈቃድ ምድቦች"],
  permissionCategoryDetails: [
    "Permission Category Details",
    "የፈቃድ ምድብ ዝርዝር መረጃ",
  ],
  permissionsInformation: ["Permission Information", "የፈቃድ መረጃ"],
  edit: ["Edit", "አዘምን"],
  permissionCategoryName: ["Permission Category Name", "የፈቃድ ምድብ ስም"],
  totalPermissions: ["Total Permissions", "ጠቅላላ ፈቃዶች"],
  allPermissionCategories: ["All Permission Categories", "ሁሉም የፈቃድ ምድቦች"],
  pending: ["Pending", "በመጠባበቅ ላይ"],
  approved: ["Approved", "የጸደቀ"],
  today: ["Today", "ዛሬ"],
  revoke2: ["Revoke", "ውክልናውን ይሰርዙ"],
  reject: ["Reject", "ውድቅ ያድርጉ"],
  rejected: ["Rejected", "ውድቅ ተደርጓል"],
  activated: ["Activated", "ነቅቷል"],
  activate: ["Activate", "አግብር"],
  next: ["Next", "ቀጣይ"],
  previous: ["Previous", "ወደ ኋላ"],
  acceptedFormatPDF: ["Accepted formats: PDF", "ተቀባይነት ያለው ቅርፀት: PDF"],
  step: ["Step", "ደረጃ"],
  noPermissionCategoryFound: [
    "No permission categories available",
    "ምንም የፈቃድ ምድብ የለም",
  ],
  expired: ["Expired", "ጊዜው ያለፈበት"],
  selectUser: ["Select user", "ተጠቃሚ ይምረጡ"],
  selectStatus: ["Select status", "ሁኔታ ይምረጡ"],
  resetFilter: ["Reset Filters", "ማጣሪያውን ያጽዱ"],
  viewDetails: ["View Details", "ዝርዝር መረጃ ይመልከቱ"],
  delete: ["Delete", "ይሰረዙ"],
  notification: ["Notification", "ማሳወቂያ"],
  markAllAsRead: ["Mark all as read", "ሁሉንም እንደተነበበ ምልክት አድርግ"],
  noNotifications: ["No notification yet", "እስካሁን ምንም ማሳወቂያ የለም"],
  viewAllNotifications: ["View all notifications", "ሁሉንም ማሳወቂያዎች ይመልከቱ"],
  selectLanguage: ["Select Language", "ቋንቋ ይምረጡ"],
  english: ["English", "እንግሊዘኛ"],
  amharic: ["Amharic", "አማርኛ"],
  unCheckAllPerms: [
    "Uncheck all permissions in this category",
    "በዚህ ምድብ ውስጥ ያሉትን ፈቃዶች በሙሉ ምልክት አንሳ",
  ],
  saveChanges: ["Save Changes", "ያዘምኑ"],
  logs: ["Logs", "መዝገቦች"],
  totalAuditLogs: ["Total Audit Logs", "ጠቅላላ የኦዲት መዝገቦች"],
  activeUsers: ["Active Users", "ንቁ ተጠቃሚዎች"],
  recentActivites: ["Recent Activities", "የቅርብ ጊዜ ክስተቶች"],
  popularEndpoints: ["Popular Endpoints", "ተጠቃሚ የሚበዛባቸው መግቢያዎች"],
  totalIP: ["Total IP", "ጠቅላላ አይፒ"],
  auditInformation: ["Audit Log Information", "የኦዲት መዝገብ መረጃ"],
  requestDetails: ["Request Details", "የጥያቄ ዝርዝሮች"],
  requestPath: ["Request Path", "የጥያቄ መንገድ"],
  action: ["Action", "ድርጊት"],
  ip: ["IP", "አይፒ"],
  logCreatedDate: ["Log Created Date", "ድርጊቱ የተፈጠረበት ቀን"],
  logCreatedTime: ["Log Created Time", "ድርጊቱ የተፈጠረበት ሰዓት"],
  logUpdatedDate: ["Log Updated Date", "ድርጊቱ የዘመነበት ቀን"],
  logUpdatedTime: ["Log Updated Time", "ድርጊቱ የዘመነበት ሰዓት"],
  userInformation: ["User Information", "የተጠቃሚ መረጃ"],
  fullname: ["Full Name", "ሙሉ ስም"],
  user: ["User", "ተጠቃሚ"],
  count: ["Count", "ብዛት"],
  apiEndpoints: ["API Endpoints", "የኤፒአይ መግቢያዎች"],
  branch: ["Branch", "ቅርንጫፍ"],
  close: ["Close", "ይዝጉ"],
  title: ["Title", "ርዕስ"],
  noPermissionCategory: [
    "No permission category available",
    "ምንም የፈቃድ ምድብ አልተገኘም",
  ],
  noPermissionTerm: ["No permission found for", "ምንም ፈቃድ አልተገኘም ለ"],
  groupRequired: ["Group name is required", "የቡድን ስም አስፈላጊ ነው"],
  groupDetails: ["Group Details", "የቡድን ዝርዝር መረጃ"],
  permissionInformation: ["Permission Information", "የፈቃድ መረጃ"],
  totalAssignedPermission: ["Total Assigned Permission", "ጠቅላላ የተመደቡ ፈቃዶች"],
  searchAssignedPermission: ["Search Assigned Permissions", "የተመደቡ ፈቃዶችን ይፈልጉ"],
  noPermissionFound: ["No permission found", "ምንም ፈቃድ አልተገኘም።"],
  additionalDetails: ["Additional Details", "ተጨማሪ ዝርዝር መረጃ"],
  createNew: ["Create New", "አዲስ መዝግብ"],
  chooseAccount: ["Choose Account", "መለያ ይምረጡ"],
  chooseAccountDescription: [
    "Choose an account to continue to ADTM System",
    "ወደ ADTM ሲስተም ለመግባት መለያ ይምረጡ",
  ],
  personal: ["Personal", "የግል"],
  passwordChangeSuccess: ["Password Change Success", "የይለፍ ቃል በተሳካ ሁኔታ ተቀይሯል"],
  passwordChangeSuccessMessage: [
    "Congratulations! You have successfully changed your password for login",
    "እንኳን ደስ አልዎ! የመግቢያ የይለፍ ቃልዎን በተሳካ ሁኔታ ቀይረዋል።",
  ],
  all: ["All", "ሁሉም"],
  enterDescription: ["Enter Description", "መግለጫ ያስገቡ"],
  headOffice: ["Head Office", "ዋና ቢሮ"],
  branchOffice: ["Branch Office", "ቅርንጫፍ ቢሮ"],
  toManyLoginAttempts: [
    "Too many login attempts.",
    "በጣም ብዙ ያልተሳኩ የመግቢያ ሙከራዎች አድርገዋል።",
  ],
  unAuthorized: ["Unauthorized", "ፍቃድ የሎትም"],
  unAuthorizedToView: [
    "You don't have the necessary permission to view this page.",
    "ይህን ገጽ ለማየት የሚያስችል ፍቃድ የለውትም።",
  ],
  contactAdmin: ["Contact Administrator", "የሲስተም አስተዳዳሪ ያግኙ"],
  backToDashboard: ["Return to Dashboard", "ወደ ዋና አመልካች ማሳያ ገጽ ይመለሱ"],
  users: ["Users", "ተጠቃሚዎች"],
  size: ["Size", "መጠን"],
  selectAll: ["Select All", "ሁሉንም ይምረጡ"],
  deselectAll: ["Deselect All", "የተመረጡትን ይሰርዙ"],
  selected: ["Selected", "ተመርጧል"],
  more: ["More", "ተጨማሪ"],
  userRequired: ["User is required", "ተጠቃሚ ያስፈልጋል"],
  startDateRequired: ["Start Date is required", "መነሻ ቀን ያስፈልጋል"],
  endDate: ["End Date", "ማብቂያ ቀን"],
  endDateOptional: ["End Date (Optional)", "ማብቂያ ቀን (አማራጭ)"],
  permissionList: ["Permission List", "የፍቃድ ዝርዝር"],
  searchPermissions: ["Search by Permission Name", "በፍቃድ ስም ይፈልጉ"],
  editPermissions: ["Edit Permissions", "ፍቃዶቹን ያዘምኑ"],
  somethingWentWrong: ["System Interruption Detected", "የስርዓት መቋረጥ አጋጥሟል"],
  passwordChangeSuccessTitle: ["Password Change Success", "የይለፍ ቃል መቀየር ተሳክቷል"],
  serverErrorDescription: [
    "We're working to fix the issue. Please try again later.",
    "ችግሩን ለመፍታት እየሰራን ነው። እባክዎ ቆይተው እንደገና ይሞክሩ።",
  ],
  refreshPage: ["Refresh Page", "ገጹን እንደገና ያስጀምሩ"],
  required: ["Required", "አስፈላጊ"],
  activatedBy: ["Activated By", "ሥራ ላይ ያዋለው አካል"],
  activiataedAt: ["Activated At", "ሥራ ላይ የዋለበት ቀን"],
  revokedBy: ["Revoked By", "ውክልናውን ያነሳው አካል"],
  revokedAt: ["Revoked At", "ውክልናው የተነሳበት ቀን"],
  assignedBy: ["Assigned By", "የመደበው ተጠቃሚ"],
  assignedAt: ["Assigned At", "የተመደበበት ቀን"],
  reset: ["Reset", "ወደ ነበረበት መልስ"],
  seneitivePermission: ["Sensitive Permission", "ጥንቃቄ የሚፈልጉ ፈቃዶች"],
  otherPermissions: ["Other Permissions", "ሌሎች ፈቃዶች"],
  failedToLoadGroup: ["Failed to load group details", "የቡድን ዝርዝሮችን መጫን አልተሳካም"],
  characters: ["Characters", "ፊደላት"],
  choosePDF: ["Choose PDF File", "ፒዲኤፍ ፋይል ይምረጡ"],
  dragDropHere: ["or drag and drop here", "ወይም ጎትተው እዚህ ያስቀምጡ"],
  max10MB: ["Max 10MB", "ከፍተኛ 10ሜባ"],
  MB: ["MB", "ሜባ"],
  uploadedFile: ["Uploaded File", "የተጫነ ፋይል"],
  activateInformation: ["Official Activation Details", "ይፋዊ የሥራ ማስጀመሪያ መረጃ"],
  submitting: ["Submitting...", "በመላክ ላይ..."],
  to: ["To", "ለ"],
  detailInformation: ["Detailed Information", "ዝርዝር መረጃ"],
  positionInformation: ["Position Information", "የሥራ መደብ መረጃ"],
  isRequired: ["is required", "አስፈላጊ ነው"],
  searchOrganizations: ["Search Organizations", "ተቋም ይፈልጉ"],
  noOrganizationDescription: [
    "To view available structures, please go back to Step 1 and select an organization.",
    "የሚገኙ መዋቅሮችን ለማየት በመጀመርያ ወደ ኋላ ተመልሰው (ደረጃ 1) ላይ ተቋም ይምረጡ።",
  ],
  searchNotFound: [
    "No results found matching your search criteria.",
    "ከፍለጋዎ ጋር የሚዛመድ መረጃ አልተገኘም።",
  ],
  create: ["Create", "ፍጠር"],
  update: ["Update", "አዘምን"],
  checkingWorkspace: ["Checking Workspace...", "የሥራ ቦታን በመፈተሽ ላይ..."],
  goBack: ["Go Back", "ወደ ኋላ ተመለስ"],
  myProfile: ["My Profile", "የኔ ገጽታ"],
  profilePicture: ["Profile Picture", "የገጽታ ምስል"],
  signature: ["Signature", "ፊርማ"],
  signatureNotAvailable: ["Signature not available", "ፊርማ አልተገኘም"],
  lastLoggedIn: ["Last Logged In", "ለመጨረሻ ጊዜ የገባበት"],
  contactInformation: ["Contact Information", "የእውቂያ መረጃ"],
  registrationInformation: ["Registration Information", "የምዝገባ መረጃ"],

  passwordChanged: ["Password Changed", "ይለፍ ቃል ተቀይሯል"],
  currentPasswordRequired: [
    "Current Password is required",
    "የአሁኑ ይለፍ ቃል ያስፈልጋል",
  ],
  sixCharactersMinimum: [
    "Current password must be at least 6 characters",
    "የአሁኑ ይለፍ ቃል ቢያንስ 6 ቁምፊዎች መሆን አለበት",
  ],
  newPasswordRequired: ["New Password is required", "አዲስ ይለፍ ቃል ያስፈልጋል"],
  eightCharactersminimum: [
    "New password must be at least 8 characters",
    "አዲሱ ይለፍ ቃል ቢያንስ 8 ቁምፊዎች መሆን አለበት",
  ],
  passwordRequirements: [
    "Password must contain Uppercase, Lowercase, Number, and Special character",
    "ይለፍ ቃል ከፍተኛ እና ዝቅተኛ ፊደላት፣ ቁጥር እና ልዩ ምልክት መያዝ አለበት",
  ],
  newPasswordSameAsCurrent: [
    "New Password cannot be the same as Current Password",
    "አዲሱ ይለፍ ቃል ከአሁኑ ጋር አንድ መሆን አይችልም",
  ],
  weak: ["Weak", "ደካማ"],
  fair: ["Fair", "መካከለኛ"],
  strong: ["Strong", "ጠንካራ"],
  good: ["Good", "ጥሩ"],
  atLeastOneUppercase: [
    "Password must contain at least one uppercase letter",
    "ይለፍ ቃል ቢያንስ አንድ ከፍተኛ ፊደል መያዝ አለበት",
  ],
  atLeastOneLowercase: [
    "Password must contain at least one lowercase letter",
    "ይለፍ ቃል ቢያንስ አንድ ዝቅተኛ ፊደል መያዝ አለበት",
  ],
  atLeastOneSpecialCharacter: [
    "Password must contain at least one special character",
    "ይለፍ ቃል ቢያንስ አንድ ልዩ ባህሪ መያዝ አለበት",
  ],
  diffrentCurrentPassword: [
    "Must be different from current password",
    "ከአሁኑ ይለፍ ቃል መለየት አለበት",
  ],
  changePassword: ["Change Password", "ይለፍ ቃል ይቀይሩ"],
  currentPassword: ["Current Password", "የአሁኑ ይለፍ ቃል"],
  confirmNewPassword: ["Confirm New Password", "አዲሱን ይለፍ ቃል ያረጋግጡ"],
  enterCurrentPassword: ["Enter Current Password", "የአሁኑን ይለፍ ቃል ያስገቡ"],
  enterNewPassword: ["Enter New Password", "አዲስ ይለፍ ቃል ያስገቡ"],
  enterConfirmNewPassword: [
    "Re-enter to Confirm New Password",
    "አዲሱን ይለፍ ቃል በድጋሚ በማስገባት ያረጋግጡ",
  ],
  passwordStrength: ["Password Strength", "የይለፍ ቃል ጥንካሬ"],
  passwordContain: ["Password must contain:", "ይለፍ ቃል መያዝ ያለበት፡"],
  filterSuperAdmin: ["Filter by Super Admin", "በዋና ሲስተም አስተዳዳሪ ይለዩ"],
  setNewPasswordFor: ["Set New Password for", "አዲስ ይለፍ ቃል ለ... ያቀናብሩ"],
  passwordSetUser: [
    "You are setting a new password for this user. They will need to use this password on their next login.",
    "ለዚህ ተጠቃሚ አዲስ ይለፍ ቃል እያቀናበሩ ነው። ተጠቃሚው በሚቀጥለው ጊዜ ሲገባ ይህንኑ ይለፍ ቃል መጠቀም ይኖርበታል።",
  ],
  passwordMustContain: [
    "Password must contain the following:",
    "ይለፍ ቃል የሚከተሉትን መያዝ አለበት፡",
  ],
  userDetails: ["User Details", "የተጠቃሚ ዝርዝር"],
  fullNameRequired: ["Full Name is required", "ሙሉ ስም ያስፈልጋል"],
  enterFullName: ["Enter Full Name", "ሙሉ ስም ያስገቡ"],
  emailRequired: ["Email is required", "ኢሜይል ያስፈልጋል"],
  invalidEmail: ["Invalid Email", "የማይሰራ ኢሜይል"],
  phoneNumberRequired: ["Phone Number is required", "የስልክ ቁጥር ያስፈልጋል"],
  genderRequired: ["Gender is required", "ጾታ ያስፈልጋል"],
  passwordRequired: ["Password is required", "ይለፍ ቃል ያስፈልጋል"],
  uploadUserPicture: ["Upload User Picture", "የተጠቃሚ ምስል ይጫኑ"],
  acceptedFormatImage: ["Accepted formats: jpg, png", "የሚፈቀዱ ቅርጸቶች: jpg, png"],
  acceptedSignFormatImage: ["Accepted formats:  png", "የሚፈቀዱ ቅርጸቶች: png"],
  isSuperAdmin: ["System Administrator", "የሲስተም አስተዳዳሪ"],
  assignOrganization: ["Assign Organization", "ተቋም ይመድቡ"],
  clear: ["Clear", "አጽዳ"],
  noGroupFound: ["No Group Found", "ቡድን አልተገኘም"],
  additionalPermissionRequired: [
    "Additional Permissions Required",
    "ተጨማሪ ፈቃዶች ያስፈልጋሉ",
  ],
  register: ["Register", "መዝግብ"],
  restrictedPermissionRequired: [
    "Restricted Permissions Required",
    "የተገደቡ ፈቃዶች ያስፈልጋሉ",
  ],
  restrictedPermissionFor: ["Restricted Permission for", "ለ... የተገደቡ ፈቃዶች"],
  userManagement: ["User Management", "የተጠቃሚ አስተዳደር"],
  groupPermissions: ["Groups and Permissions", "ቡድኖች እና ፈቃዶች"],
  auditLogs: ["Audit Logs", "የኦዲት መዝገብ"],
  lines: ["Lines", "መስመሮች"],
  additionalPermissions: ["Additional Permissions", "ተጨማሪ ፈቃዶች"],
  searchAdditionalPermissions: [
    "Search for additional permissions by name",
    "ተጨማሪ ፈቃዶችን በስም ይፈልጉ",
  ],
  searchRestrictedPermissions: [
    "Search for restricted permissions by name",
    "የተገደቡ ፈቃዶችን በስም ይፈልጉ",
  ],
  additionalPermissionList: ["Additional permissions list", "የተጨማሪ ፈቃዶች ዝርዝር"],
  restrictedPermissionList: ["Restricted Permissions list", "የተገደቡ ፈቃዶች ዝርዝር"],
  noPermAssignedOrg: [
    "No assignments or permissions for this organization.",
    "ለዚህ ተቋም ምንም አይነት ምደባ ወይም ፈቃድ የለም።",
  ],
  lastUpdatedAt: ["Last updated at", "ለመጨረሻ ጊዜ የተሻሻለው"],
  notifications: ["Notifications", "ማሳወቂያዎች"],
  unread: ["Unread", "ያልተነበቡ"],
  read: ["Read", "የተነበቡ"],
  markAsRead: ["Mark as read", "እንደተነበበ ምልክት ያድርጉ"],
  chooseWorkspace: ["Choose Workspace", "የሥራ አውድ ይምረጡ"],
  chooseWorkspaceToContinue: [
    "Select a workspace to continue to the ADTM system",
    "ወደ ADTM ሲስተም ለመቀጠል የሥራ አውድ ይምረጡ",
  ],
  selectType: ["Select Type", "ዓይነት ይምረጡ"],
  pleaseFillAllRequiredFields: [
    "Please fill all required fields",
    "እባክዎ ሁሉንም አስፈላጊ ቦታዎችን ይሙሉ።",
  ],
  restrictedPermissions: ["Restricted Permissions", "የተገደቡ ፈቃዶች"],
  browserSupport: [
    "Your browser does not support embedded PDFs.",
    "የእርስዎ ብራውዘር የፒዲኤፍ (PDF) ፋይሎችን በቀጥታ ማሳየት አይችልም።",
  ],
  download: ["Download", "ያውርዱ"],
  selectPermissionCategory: ["Select permission category", "የፈቃድ ምድብ ይምረጡ"],
  noCategoriesFound: [
    "No permission categories found",
    "ምንም ዓይነት የፈቃድ ምድብ አልተገኘም",
  ],
  noUsersFound: ["No users found", "ምንም ዓይነት ተጠቃሚ አልተገኘም"],
  results: ["Results", "ውጤቶች"],
  titleRequired: ["Title is required", "ርዕስ አስፈላጊ ነው"],
  totalReceipents: ["Total Recipients", "ጠቅላላ ተቀባዮች"],
  structureLevelNumberRequired: [
    "Structure level number is required",
    "የመዋቅር ደረጃ ቁጥር አስፈላጊ ነው",
  ],
  enterPassword: ["Enter user password", "የተጠቃሚውን ይለፍ ቃል ያስገቡ"],
  organizationsNotFound: ["Organization not found", "ተቋሙ አልተገኘም"],
  media: ["Media", "ሚዲያ"],
  selectGroupBeforePermission: [
    "Please select groups first before enabling additional permissions.",
    "ተጨማሪ ፈቃዶችን ከመፍቀድዎ በፊት መጀመሪያ እባክዎ ቡድኖችን ይምረጡ።",
  ],
  fayda: ["Fayda", "ፋይዳ"],
  ethiopianCalandar: ["Ethiopian", "የኢትዮጵያ"],
  gregorianCalandar: ["Gregorian", "ጎርጎርዮሳውያን"],
  add: ["Add", "ጨምር"],
  warnning: ["Warning", "ማሳሰቢያ"],
  blockedMessage: (time) => {
    return [
      `You are temporarily blocked for ${formatTime(time)}.`,
      `ለ ${formatTime(time)} በጊዜያዊነት ታግደዋል`,
    ];
  },
  corspondingOrg: ["Corresponding Organization", "ተዛማጅ ተቋም"],
  search: ["Search", "ይፈልጉ"],
  enter: ["Enter", "ያስገቡ"],
  creating: ["Creating ...", "በመፍጠር ላይ ..."],
  updating: ["Updating ...", "በማዘመን ላይ ..."],
  none: ["None", "ምንም"],
  response: ["Response", "ምላሽ"],
  prev: ["Previous", "የበፊት"],
  accept: ["Accept", "ይቀበሉ"],
  loadingUsers: ["Loading users...", "ተጠቃሚዎች በመጫን ላይ..."],
  refresh: ["Refresh", "ያድሱ"],
  acceptedFormatsImagesPDF: [
    "Accepted formats: PDF, JPG, PNG, GIF",
    "የተፈቀዱ ፋይሎች፡ PDF, JPG, PNG, GIF",
  ],
  chooseFiles: ["Choose Files", "ፋይሎችን ይምረጡ"],
  noFilesChosen: ["No files chosen", "ምንም ፋይል አልተመረጠም"],
  filesSelected: ["file(s) selected", "ፋይል(ሎች) ተመርጠዋል"],
  maxFileSize10MB: ["Max file size: 10MB", "ከፍተኛው ፋይል መጠን፡ 10MB"],
  maxFileSize10MBEach: [
    "Max file size: 10MB each",
    "የእያንዳንዱ ፋይል ከፍተኛ መጠን፡ 10MB",
  ],
  invalidFileTypePDFOnly: [
    "Invalid file type. Please upload PDF files only.",
    "የፋይል ዓይነት ስህተት። እባክዎን PDF ፋይል ብቻ ይጫኑ።",
  ],
  show: ["Show", "አሳይ"],
  clearAllFilters: ["Clear all filters", "ሁሉንም ማጣሪያዎች አጥፋ"],
  invalid_request: ["Invalid request.", "ትክክል ያልሆነ ጥያቄ።"],
  retry: ["Retry", "እንደገና ይሞክሩ"],
  created: ["Created", "ተፈጥሯል"],
  ENGLISH: ["English", "እንግሊዝኛ"],
  AMHARIC: ["Amharic", "አማርኛ"],
  city: ["City", "ከተማ"],
  createDaysRemainingArray: (name) => {
    return [
      `Are you sure you want to restore this ${name}? It will be moved back to its original location.`,
      `ይህንን ${name} ወደ ነበረበት ለመመለስ እርግጠኛ ነዎት? ወደ ቀድሞ ቦታው ተመልሶ ይቀመጣል።`,
    ];
  },
  language: ["Language", "ቋንቋ"],
  // new project translation langs
  sendResetLink: ["Send Reset Link", "ዳግም ማስጀመሪያ አገናኝ ይላኩ"], // Tig: ካልእ ግዜ ስደድ; Som: Mar labaad dir; Afar: Irra Deebin Ergi
  backToLogin: ["Return to Login", "ወደ መግቢያ ገጽ ይመለሱ"],
  sending: ["sending ...", "በመላክ ላይ ..."],
  checkYourEmail: ["Check Your Email", "የኢሜይልዎን ይመልከቱ"],
  tooManyAttempts: ["Too many login attempts.", "ብዙ የመግቢያ ሙከራዎች።"],
  temporarilyBlocked: ["You are temporarily blocked for", "ለጊዜው ተዘግቶዎታል"],
  // Slides titles and descriptions
  slide1Title: [
    "Housing Lottery Applicants Management System",
    "የቤቶች ሎተሪ አመልካቾች አስተዳደር ሥርዓት",
  ],
  slide1Description: [
    "A government information system for AAHDAB that manages the full lifecycle of housing lottery applicants, from legacy Excel imports and new registrations to eligibility review, bank integration, and lottery handoff.",
    "A government information system for AAHDAB that manages the full lifecycle of housing lottery applicants, from legacy Excel imports and new registrations to eligibility review, bank integration, and lottery handoff.",
  ],
  slide2Title: [
    "End-To-End Applicant Management For AAHDAB",
    "ለአዲስ አበባ ቤቶች ልማት እና አስተዳደር ቢሮ ከጫፍ እስከ ጫፍ አመልካች አስተዳደር",
  ],
  slide2Description: [
    "Built for Addis Ababa's subsidized housing process, this system handles old applicant data, new campaign registrations, multi-level approvals, status tracking, and controlled coordination with external entities like banks and AAHDC.",
    "Built for Addis Ababa's subsidized housing process, this system handles old applicant data, new campaign registrations, multi-level approvals, status tracking, and controlled coordination with external entities like banks and AAHDC.",
  ],
  // Footer text
  poweredBy: ["Powered By", "Powered By"],
  aastu: ["AASTU", "AASTU"],
  // Select dropdown
  loginToAccount: ["Login to your account", "ወደ መለያዎ ይግቡ"],
  emailLabel: ["Email *", "ኢሜይል *"],
  enterEmailPlaceholder: ["Enter your email", "ኢሜይል ያስገቡ"],
  enterEmail: ["Enter your email", "ኢሜይል ያስገቡ"],
  validEmail: [
    "Please enter a valid email address",
    "እባክዎ ትክክለኛ የኢሜይል አድራሻ ያስገቡ",
  ],
  passwordLabel: ["Password *", "የይለፍ ቃል *"],
  loginButton: ["Login", "ግባ"],
  loggingIn: ["Logging in...", "በመግባት ላይ..."],
  // ChangePassword component translations (if needed)
  changePasswordTitle: ["Change Password", "የይለፍ ቃል ቀይር"],
  updatePassword: ["Update Password", "የይለፍ ቃል ዘምን"],
  newPasswordLabel: ["New Password *", "አዲስ የይለፍ ቃል *"],
  confirmPasswordLabel: ["Confirm Password *", "የይለፍ ቃል አረጋግጥ *"],
  // Password requirements
  minLength: ["Minimum 8 letters", "ቢያንስ 8 ፊደላት"],
  upperLowerCase: [
    "At least one upper case and lower case letter",
    "ቢያንስ አንድ አቢይ እና ትንሽ ፊደል",
  ],
  specialCharacter: [
    "At least one special character (e.g., !, @, #, $)",
    "ቢያንስ አንድ ልዩ ቁምፊ (ለምሳሌ፡ !, @, #, $)",
  ],
  passwordsMatch: ["Passwords match", "የይለፍ ቃሎች ተመሳሳይ ናቸው"],
  passwordsDoNotMatch: ["Passwords do not match", "የይለፍ ቃሎች አይመሳሰሉም"],
  // Validation error messages
  passwordMinLengthMsg: [
    "Password must be at least 8 characters",
    "የይለፍ ቃል ቢያንስ 8 ቁምፊዎች መሆን አለበት",
  ],
  passwordRequireNumber: [
    "Password must contain at least one number",
    "የይለፍ ቃል ቢያንስ አንድ ቁጥር መያዝ አለበት",
  ],
  passwordRequireUppercase: [
    "Password must contain at least one uppercase letter",
    "የይለፍ ቃል ቢያንስ አንድ አቢይ ፊደል መያዝ አለበት",
  ],
  passwordRequireLowercase: [
    "Password must contain at least one lowercase letter",
    "የይለፍ ቃል ቢያንስ አንድ ትንሽ ፊደል መያዝ አለበት",
  ],
  passwordRequireSpecial: [
    "Password must contain at least one special character",
    "የይለፍ ቃል ቢያንስ አንድ ልዩ ቁምፊ መያዝ አለበት",
  ],
  confirmPasswordRequired: [
    "Please confirm your password",
    "እባክዎ የይለፍ ቃልዎን ያረጋግጡ",
  ],
  passwordsMismatch: ["Passwords do not match", "የይለፍ ቃሎች አይመሳሰሉም"],
  resetting: ["Resetting...", "በማስጀመር ላይ..."],
  passwordChangedSuccess: [
    "Your password has been successfully changed. You will be redirected to login shortly.",
    "የይለፍ ቃልዎ በሚገባ ተቀይሯል። በቅርቡ ወደ ግቤት ይዘዋወራሉ።",
  ],
  // API error messages
  passwordChangeFailed: [
    "Failed to change password. Please try again.",
    "የይለፍ ቃል መቀየር አልተሳካም። እባክዎ እንደገና ይሞክሩ።",
  ],
  validEmailRequired: [
    "Please enter a valid email address",
    "እባክዎ ትክክለኛ የኢሜይል አድራሻ ያስገቡ",
  ],
  forgotPasswordError: [
    "Failed to send reset email. Please try again.",
    "የዳግም ማስጀመሪያ ኢሜይል መላክ አልተሳካም። እባክዎ እንደገና ይሞክሩ።",
  ],
  resetPasswordTitle: ["Reset Password", "የይለፍ ቃል ዳግም አስጀምር"],
  restoreAccessSubtitle: [
    "Restore access to your account",
    "ወደ መለያዎ መድረስን ወደነበረበት ይመልሱ",
  ],
  sendingButton: ["Sending...", "በመላክ ላይ..."],
  resetPasswordButton: ["Reset Password", "የይለፍ ቃል ዳግም አስጀምር"],
  // Success modal messages
  successThanksMessage: [
    "Thanks! If {email} matches an email address we have on file, then we've sent you an email containing further instructions for resetting your password.",
    "እንግዲያው! {email} ካለን የኢሜይል አድራሻ ጋር የሚዛመድ ከሆነ፣ የይለፍ ቃልዎን ዳግም ለማስጀመር ተጨማሪ መመሪያዎችን የያዘ ኢሜይል ልከንልዎታል።",
  ],
  successSpamMessage: [
    "If you haven't received an email in 5 minutes, check your spam, resend, or try a different email address.",
    "በ5 ደቂቃ ውስጥ ኢሜይል ካልደረሰዎት እባክዎ የስፓም አቃፊዎን ያረጋግጡ፣ እንደገና ይላኩ ወይም የተለየ የኢሜይል አድራሻ ይሞክሩ።",
  ],
  tryAnotherEmail: ["Try Another Email", "ሌላ ኢሜይል ይሞክሩ"],
  // API error messages
  resetPasswordFailed: [
    "Failed to send reset email. Please try again.",
    "የዳግም ማስጀመሪያ ኢሜይል መላክ አልተሳካም። እባክዎ እንደገና ይሞክሩ።",
  ],
  createNewPasswordTitle: ["Create New Password", "አዲስ የይለፍ ቃል ይፍጠሩ"],
  returnToLoginButton: ["Return to Login", "ወደ ግቤት ተመለስ"],
  hlms: ["HLMS", "HLMS"],
  analytics: ["Analytics", "Analytics"],
  administrative: ["Administrative", "Administrative"],
  cities: ["Cities", "Cities"],
  woredas: ["Woredas", "oredas"],
  subCities: ["Sub Cities", "Sub Cities"],
  reports: ["Reports", "Reports"],
  housing: ["Housing", "Housing"],
  programTypes: ["Program Types", "Program Types"],
  bedroomTypes: ["Bedroom Types", "Bedroom Types"],
  housingPurposes: ["Housing Purposes", "Housing Purposes"],

  demographic: ["Demographic", "Demographic"],
  maritalStatuses: ["Marital Statuses", "Marital Statuses"],
  jobTypes: ["Job Types", "Job Types"],
  disabilityStatuses: ["Disability Statuses", "Disability Statuses"],
  proclamations: ["Proclamations", "Proclamations"],
  userAndAccessControl: ["User & Access Control", "User & Access Control"],
  permissionCategories: ["Permission Categories", "Permission Categories"],
  externalEntity: ["External Entity", "External Entity"],
  externalEntities: ["External Entities", "External Entities"],
  externalEntityUsers: ["External Entity Users", "External Entity Users"],
  externalUpdateRequests: [
    "External Update Requests",
    "External Update Requests",
  ],
  applicantManagement: ["Applicant Management", "Applicant Management"],
  applicants: ["Applicants", "Applicants"],
  missingApplicantClaims: [
    "Missing Applicant Claims",
    "Missing Applicant Claims",
  ],
  updateRequests: ["Update Requests", "Update Requests"],
  workflow: ["Workflow", "Workflow"],
  approvalWorkflows: ["Approval Workflows", "Approval Workflows"],
  formConfigs: ["Form Configs", "Form Configs"],

  dataImportAndBatchOps: ["Data Import & Batch Ops", "Data Import & Batch Ops"],
  aahdabBatchUploads: ["AAHDAB Batch Uploads", "AAHDAB Batch Uploads"],
  aahdabBatchUpdates: ["AAHDAB Batch Updates", "AAHDAB Batch Updates"],

  bankingAndSavings: ["Banking & Savings", "Banking & Savings"],
  bankAccounts: ["Bank Accounts", "Bank Accounts"],
  bankBatchUploads: ["Bank Batch Uploads", "Bank Batch Uploads"],

  paymentsAndBilling: ["Payments & Billing", "Payments & Billing"],
  payments: ["Payments", "Payments"],
  paymentMethods: ["Payment Methods", "Payment Methods"],
  paymentConfigs: ["Payment Configs", "Payment Configs"],

  contentManagement: ["Content Management", "Content Management"],
  news: ["News", "News"],
  hero: ["Hero", "Hero"],
  mainDirector: ["Main Director", "Main Director"],
  about: ["About", "About"],

  systemAndMonitoring: ["System & Monitoring", "System & Monitoring"],
  registrationCampaigns: ["Registration Campaigns", "Registration Campaigns"],
  registrationForms: ["Registration Forms", "Registration Forms"],
  formDecisions: ["Form Decisions", "Form Decisions"],
  decisionGivers: ["Decision Givers", "Decision Givers"],
  servicePayments: ["Service Payments", "Service Payments"],

  registrationStations: ["Registration Stations", "Registration Stations"],
  approvalUnits: ["Approval Units", "Approval Units"],
  aahdab: ["aahdab", "aahdab"],
  approvalUnitPartitions: [
    "Approval Unit Partitions",
    "Approval Unit Partitions",
  ],
};
