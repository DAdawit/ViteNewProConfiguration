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
  createdAt: ["Created At", "የተመዘገበበት ቀን"],
  requiredField: ["This field is required", "ይህ መስክ ያስፈልጋል"],
  remove: ["Remove", "ያስወግዱ"],
  columns: ["Columns", "ዓምዶች"],
  allStatus: ["All Status", "ሁሉም ሁኔታዎች"],
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
  startDate: ["Start Date", "መነሻ ቀን"],
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
  detailInformation: ["Detailed Information", "ዝርዝር መረጃ"],
  positionInformation: ["Position Information", "የሥራ መደብ መረጃ"],
  isRequired: ["Is Required", "አስፈላጊ ነው"],
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
  media: ["Media", "ሚዲያ"],

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
  analytics: ["Analytics", "የመረጃ ትንተና"],
  reports: ["Reports", "ሪፖርቶች"],
  administrative: ["Administrative", "አስተዳደራዊ"],
  cities: ["Cities", "ከተሞች"],
  woredas: ["Woredas", "ወረዳዎች"],
  subCities: ["Sub Cities", "ክፍለ ከተሞች"],
  housing: ["Housing", "ቤት ልማት"],
  programTypes: ["Program Types", "የፕሮግራም ዓይነቶች"],
  bedroomTypes: ["Bedroom Types", "የመኝታ ክፍል ዓይነቶች"],
  housingPurposes: ["Housing Purposes", "የቤት አገልግሎት ውሎዎች"],
  demographic: ["Demographic", "የሕዝብ ስብጥር መረጃ"],
  maritalStatuses: ["Marital Statuses", "የጋብቻ ሁኔታዎች"],
  jobTypes: ["Job Types", "የሥራ ዓይነቶች"],
  disabilityStatuses: ["Disability Statuses", "የአካል ጉዳተኝነት ሁኔታዎች"],
  proclamations: ["Proclamations", "አዋጆች"],
  userAndAccessControl: ["User & Access Control", "የተጠቃሚ እና የፈቃድ ቁጥጥር"],
  permissionCategories: ["Permission Categories", "የመዳረሻ ፈቃድ ምድቦች"],
  externalEntity: ["External Entity", "የውጭ አካል"],
  externalEntities: ["External Entities", "የውጭ አካላት"],
  externalEntityUsers: ["External Entity Users", "የውጭ አካል ተጠቃሚዎች"],
  externalUpdateRequests: [
    "External Update Requests",
    "የውጭ አካል መረጃ ማሻሻያ ጥያቄዎች",
  ],
  applicantManagement: ["Applicant Management", "የአመልካቾች አስተዳደር"],
  applicants: ["Applicants", "አመልካቾች"],
  missingApplicantClaims: ["Missing Applicant Claims", "ያልተካተቱ አመልካቾች አቤቱታዎች"],
  updateRequests: ["Update Requests", "የመረጃ ማሻሻያ ጥያቄዎች"],
  workflow: ["Workflow", "የሥራ ፍሰት"],
  approvalWorkflows: ["Approval Workflows", "የማጽደቂያ የሥራ ፍሰቶች"],
  formConfigs: ["Form Configs", "የቅጽ ውቅረቶች"],

  dataImportAndBatchOps: [
    "Data Import & Batch Ops",
    "የውሂብ ማስገቢያ እና የጅምላ ክዋኔዎች",
  ],
  aahdabBatchUploads: [
    "AAHDAB Batch Uploads",
    "የአዲስ አበባ ቤቶች ልማትና አስተዳደር ቢሮ የጅምላ መረጃ ጭነቶች",
  ],
  aahdabBatchUpdates: [
    "AAHDAB Batch Updates",
    "የአዲስ አበባ ቤቶች ልማትና አስተዳደር ቢሮ የጅምላ መረጃ ማሻሻያዎች",
  ],

  bankingAndSavings: ["Banking & Savings", "የባንክ እና ቁጠባ ክንውን"],
  bankAccounts: ["Bank Accounts", "የባንክ ሒሳቦች"],
  bankBatchUploads: ["Bank Batch Uploads", "የባንክ የጅምላ መረጃ ጭነቶች"],

  paymentsAndBilling: ["Payments & Billing", "ክፍያ እና የክፍያ መጠየቂያ"],
  payments: ["Payments", "ክፍያዎች"],
  paymentMethods: ["Payment Methods", "የክፍያ አማራጮች"],
  paymentConfigs: ["Payment Configs", "የክፍያ ሥርዓት ውቅረቶች"],

  contentManagement: ["Content Management", "የይዘት ማስተዳደሪያ"],
  news: ["News", "ዜናዎች"],
  hero: ["Hero", "ዋናው ገጽ ማሳያ"],
  mainDirector: ["Main Director", "ዋና ዳይሬክተር"],
  about: ["About", "ስለ እኛ"],
  overview: ["Overview", "አጠቃላይ እይታ"],
  scopeAndTargets: ["Scope & Targets", "ወሰን እና ግቦች"],
  eligibility: ["Eligibility", "ብቁነት"],
  approvalWorkflow: ["Approval Workflow", "የማጽደቅ ሂደት"],
  registrationSchedule: ["Registration Schedule", "የምዝገባ ጊዜ ሰሌዳ"],
  geographicScope: ["Geographic Scope", "ጂኦግራፊያዊ ወሰን"],
  housingAndTargets: ["Housing & Targets", "ቤቶች እና ግቦች"],
  housingAndBanks: ["Housing & Banking", "ቤቶች እና ባንክ"],
  demographicFilters: ["Demographic Filters", "የህዝብ ስብጥር ማጣሪያዎች"],
  overallStatus: ["Overall Status", "አጠቃላይ ሁኔታ"],
  basedOnCampaign: ["Based on Campaign", "በዘመቻው ላይ የተመሰረተ"],
  applicantEligibility: ["Applicant Eligibility", "የአመልካች ብቁነት"],
  isDiasporaAllowed: ["Diaspora Allowed?", "ዲያስፖራ ተፈቅዷል?"],
  isNoHouseEvidenceRequired: [
    "No House Evidence Req?",
    "የቤት አልባነት ማስረጃ ያስፈልጋል?",
  ],
  systemAndMonitoring: ["System & Monitoring", "የሥርዓት ክትትል እና ቁጥጥር"],
  registrationAndCampaigns: ["Registration & Campaigns", "ምዝገባ እና ዘመቻዎች"],
  campaigns: ["Campaigns", "ዘመቻዎች"],
  registrationCampaigns: ["Registration Campaigns", "የምዝገባ ዘመቻዎች"],
  manageAllRegistrationCampaigns: [
    "Manage all registration campaigns",
    "ሁሉንም የምዝገባ ዘመቻዎች ያስተዳድሩ",
  ],
  registrationForms: ["Registration Forms", "የምዝገባ ቅጾች"],
  formDecisions: ["Form Decisions", "የቅጽ ውሳኔዎች"],
  decisionGivers: ["Decision Givers", "ውሳኔ ሰጪ አካላት"],
  servicePayments: ["Service Payments", "የአገልግሎት ክፍያዎች"],
  registrationStations: ["Registration Stations", "የምዝገባ ጣቢያዎች"],
  approvalUnits: ["Approval Units", "የማጽደቂያ ክፍሎች"],
  approvalUnitPartitions: ["Approval Unit Partitions", "የማጽደቂያ ክፍል ክፍፍሎች"],
  groups: ["Groups", "ቡድኖች"],
  permissions: ["Permissions", "ፈቃዶች"],
  buttonsExample: ["Buttons Example", "Buttons Example"],
};
