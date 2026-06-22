import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import {
  ChevronLeft,
  Upload,
  X,
  ChevronRight,
  Check,
  Search,
  SquareMinus,
  CalendarIcon,
} from "lucide-react";
import { format } from "date-fns";
import StickyHeader from "../common/StickyHeader";
import SubTitle from "../common/SubTitle";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import PermissionAccordion from "../common/PermissionAccordion";
import ButtonPrimaryOutlined from "../common/Buttons/ButtonPrimaryOutlined";
import ButtonPrimaryFilled from "../common/Buttons/ButtonPrimaryFilled";
import { Stepper } from "@/components/ui/stepper";
import { useSelector } from "react-redux";
import { languageTranslate, steps } from "../../utils/data";
import {
  getOrgDelegation,
  getPermissionCategoryForDelegationFilters,
  getUserPositionDeleationFilters,
  getUsersDeleationFilters,
} from "@/utils/dataFetch";
import MultiSelect from "../common/MultiSelect";

const CreateDelegation = () => {
  const navigate = useNavigate();
  const appState = useSelector((state) => state.app);
  const [currentStep, setCurrentStep] = useState(0);
  const [hiddenCategories, setHiddenCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [orgs, setOrgs] = useState([]);
  const [permCategories, setPermCategories] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [selecteddelegatedUser, setSelectedDelegatedUser] = useState([]);
  const [userPositionList, setUserPositionList] = useState([]);
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    // formState: { errors },
    // trigger,
  } = useForm({
    defaultValues: {
      userPosition: "",
      delegatedUser: "",
      startDate: undefined,
      endDate: undefined,
      reasonFile: null,
      additionalPermissions: [],
    },
  });

  // Watch form values for validation
  // eslint-disable-next-line react-hooks/incompatible-library
  const userPosition = watch("userPosition");
  const delegatedUser = watch("delegatedUser");
  const startDate = watch("startDate");
  const selectedPermissions = watch("additionalPermissions") || [];

  useEffect(() => {
    const fetchFilters = async () => {
      const token = sessionStorage.getItem("tID");
      const result = await getUsersDeleationFilters(token);
      const orgResult = await getOrgDelegation(token);
      const positionData = await getUserPositionDeleationFilters(token);

      const permData = await getPermissionCategoryForDelegationFilters(token);
      setPermCategories(permData?.permCategory);

      setOrgs(orgResult?.orgs);
      setUsersList(result.users);
      setUserPositionList(positionData?.usersPositions);
    };
    fetchFilters();
  }, []);

  // console.log({ orgs, usersList, userPositionList });

  console.log({});
  // Check if step 1 is valid
  const isStep1Valid = userPosition && delegatedUser && startDate;

  // Check if step 2 is valid
  const isStep2Valid = selectedPermissions.length > 0;

  const permissionCategories = [
    { _id: "1", name: "User Management" },
    { _id: "2", name: "Content Management" },
    { _id: "3", name: "System Settings" },
    { _id: "4", name: "Financial Operations" },
    { _id: "5", name: "Analytics and Reports" },
  ];

  const allPermissions = useMemo(
    () => [
      // User Management Permissions
      { _id: "1", name: "Create Users", category: { _id: "1" } },
      { _id: "2", name: "Delete Users", category: { _id: "1" } },
      { _id: "3", name: "Edit User Profiles", category: { _id: "1" } },
      { _id: "4", name: "View User List", category: { _id: "1" } },
      { _id: "5", name: "Reset User Passwords", category: { _id: "1" } },
      { _id: "6", name: "Manage User Roles", category: { _id: "1" } },
      { _id: "7", name: "Assign User Permissions", category: { _id: "1" } },
      { _id: "8", name: "Deactivate Users", category: { _id: "1" } },

      // Content Management Permissions
      { _id: "9", name: "Edit Content", category: { _id: "2" } },
      { _id: "10", name: "View Reports", category: { _id: "2" } },
      { _id: "11", name: "Create Articles", category: { _id: "2" } },
      { _id: "12", name: "Publish Content", category: { _id: "2" } },
      { _id: "13", name: "Delete Content", category: { _id: "2" } },
      { _id: "14", name: "Manage Categories", category: { _id: "2" } },
      { _id: "15", name: "Review Submissions", category: { _id: "2" } },
      { _id: "16", name: "Schedule Posts", category: { _id: "2" } },

      // System Settings Permissions
      { _id: "17", name: "System Configuration", category: { _id: "3" } },
      { _id: "18", name: "Manage Settings", category: { _id: "3" } },
      { _id: "19", name: "Backup Database", category: { _id: "3" } },
      { _id: "20", name: "Restore System", category: { _id: "3" } },
      { _id: "21", name: "Update Software", category: { _id: "3" } },
      { _id: "22", name: "Monitor Performance", category: { _id: "3" } },

      // Financial Permissions
      { _id: "23", name: "View Financial Reports", category: { _id: "4" } },
      { _id: "24", name: "Process Payments", category: { _id: "4" } },
      { _id: "25", name: "Manage Invoices", category: { _id: "4" } },
      { _id: "26", name: "Approve Expenses", category: { _id: "4" } },

      // Analytics Permissions
      { _id: "27", name: "View Analytics", category: { _id: "5" } },
      { _id: "28", name: "Export Data", category: { _id: "5" } },
      { _id: "29", name: "Create Dashboards", category: { _id: "5" } },
      { _id: "30", name: "Manage Reports", category: { _id: "5" } },
    ],
    []
  );

  // const totalAssignedPermissions = selectedPermissions.length;

  // Function to handle hiding categories
  const handleHideCategory = (categoryId) => {
    setHiddenCategories((prev) => [...prev, categoryId]);
  };

  // Filter out hidden categories
  const visibleCategories = permissionCategories.filter(
    (cat) => !hiddenCategories.includes(cat._id)
  );

  // Search functionality
  const filteredPermissions = useMemo(() => {
    if (!searchTerm) return allPermissions;

    const searchTermLower = searchTerm.toLowerCase();
    return allPermissions.filter((perm) =>
      perm.name.toLowerCase().includes(searchTermLower)
    );
  }, [searchTerm, allPermissions]);

  // Function to uncheck all permissions in a category
  const uncheckAllPermissions = (categoryId) => {
    const categoryPerms = allPermissions.filter(
      (perm) => perm.category?._id === categoryId
    );
    const categoryPermissionIds = categoryPerms.map((perm) => perm._id);
    const updatedPermissions = selectedPermissions.filter(
      (permId) => !categoryPermissionIds.includes(permId)
    );
    setValue("additionalPermissions", updatedPermissions);
  };

  const getPermissionsForCategory = (categoryId) => {
    return filteredPermissions?.filter(
      (perm) => perm?.category?._id === categoryId
    );
  };

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Handle form submission
  };

  const handleNext = async () => {
    // Validate step 1 fields before proceeding
    setCurrentStep(1);
    // const isValid = await trigger([
    //   "userPosition",
    //   "delegatedUser",
    //   "startDate",
    // ]);
    // if (isValid) {
    //   setCurrentStep(1);
    // }
  };

  return (
    <div className="sticky_container flex flex-col gap-4">
      <StickyHeader className="sticky top-0">
        <button
          className="flex items-center custom-gapx-8 text-neutral-700 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="text-Neutral-700" />
          <span className="custom-text-20 font-bold">
            {languageTranslate(appState.language, "createDelegationAssignment")}
          </span>
        </button>
      </StickyHeader>

      {/* Stepper */}
      <div className="w-full rounded-lg flex flex-col gap-4">
        <div className="w-full bg-white dark:bg-black p-5 rounded-lg">
          <Stepper steps={steps} currentStep={currentStep} className="mb-8" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Step 1: General Information */}
          {currentStep === 0 && (
            <div className="w-full">
              <div className="p-3.5">
                <h2 className="text-sm font-bold leading-[140%] tracking-[0.5%] text-neutral-700 mb-3.5">
                  {languageTranslate(appState.language, "assignPermission")}
                </h2>

                <PermissionAccordion
                  categories={visibleCategories}
                  onCategoryHide={handleHideCategory}
                  className="mt-3.5"
                >
                  <div className="grid gap-4 p-4 w-full">
                    {/* Search Field */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-4 w-4" />
                      <Input
                        type="text"
                        placeholder={languageTranslate(
                          appState.language,
                          "searchByPermissionName"
                        )}
                        className="pl-10 bg-neutral-50 border border-neutral-200 focus:border-primary-brandBlue"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>

                    <div className="rounded-[10px] mt-3.5 grid gap-y-2">
                      {visibleCategories.map((category) => {
                        const categoryPerms = getPermissionsForCategory(
                          category._id
                        );

                        if (categoryPerms.length === 0) return null;

                        return (
                          <div
                            key={category?._id}
                            className="border rounded-[10px]"
                          >
                            <div className="bg-primary-50 font-bold h-14 rounded-t-[10px] flex justify-start items-center pl-4 gap-x-2 text-[12px]">
                              <button
                                type="button"
                                onClick={() =>
                                  uncheckAllPermissions(category._id)
                                }
                                className="bg-white dark:bg-black hover:bg-info-50 p-1 rounded transition-colors"
                                title={languageTranslate(
                                  appState.language,
                                  "unCheckAllPerms"
                                )}
                              >
                                <SquareMinus className="h-5 w-5" />
                              </button>
                              <h3>{category?.name}</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                              {categoryPerms?.map((perm, idx) => {
                                const pId = perm._id;

                                return (
                                  <Controller
                                    name="permissions"
                                    key={pId || idx}
                                    control={control}
                                    render={({ field }) => (
                                      <div
                                        className={`flex items-center gap-3 p-3 transition-colors h-16 ${
                                          field.value.includes(pId)
                                            ? "bg-info-50"
                                            : ""
                                        }`}
                                      >
                                        <Checkbox
                                          checked={field.value.includes(pId)}
                                          onCheckedChange={(c) => {
                                            const set = new Set(field.value);
                                            c ? set.add(pId) : set.delete(pId);
                                            field.onChange(Array.from(set));
                                          }}
                                          className="data-[state=checked]:bg-primary-800 h-5 w-5"
                                        />
                                        <Label className="cursor-pointer flex-1 text-sm">
                                          {perm.name}
                                        </Label>
                                      </div>
                                    )}
                                  />
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}

                      {/* Empty State */}
                      {visibleCategories.length === 0 && (
                        <div className="py-8 text-center text-neutral-500">
                          {languageTranslate(
                            appState.language,
                            "noPermissionCategoryFound"
                          )}
                        </div>
                      )}

                      {/* Search no results state */}
                      {searchTerm && filteredPermissions.length === 0 && (
                        <div className="py-8 text-center text-neutral-500">
                          {languageTranslate(
                            appState.language,
                            "noPermissionFound"
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </PermissionAccordion>

                <div className="flex flex-col gap-4 mt-6">
                  <div className="flex justify-end gap-x-4">
                    {/* <div className="flex justify-between items-center gap-x-2">
                      <span className="text-primary-darkest font-bold">
                        {appState.language === "en" &&
                          language?.totalPermissions[0]}
                        {appState.language === "am" &&
                          language?.totalPermissions[1]}
                        {appState.language === "or" &&
                          language?.totalPermissions[2]}
                        {appState.language === "ti" &&
                          language?.totalPermissions[3]}
                        {appState.language === "so" &&
                          language?.totalPermissions[4]}
                        {appState.language === "aa" &&
                          language?.totalPermissions[5]}
                      </span>
                      <span className="bg-primary-800 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {totalAssignedPermissions}
                      </span>
                    </div> */}
                    <ButtonPrimaryOutlined
                      title={languageTranslate(appState?.language, "cancel")}
                      icon={<X />}
                      iconPosition="left"
                      type="button"
                      onClick={() => navigate(-1)}
                    />
                    <ButtonPrimaryOutlined
                      title={languageTranslate(appState?.language, "previous")}
                      icon={<ChevronLeft />}
                      iconPosition="left"
                      type="button"
                      // onClick={handlePrevious}
                    />
                    <ButtonPrimaryFilled
                      title={languageTranslate(appState?.language, "confirm")}
                      icon={<Check />}
                      iconPosition="left"
                      type="submit"
                      disabled={!isStep2Valid}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-x-4 mt-6">
                <ButtonPrimaryOutlined
                  title={languageTranslate(appState?.language, "cancel")}
                  icon={<X />}
                  iconPosition="left"
                  type="button"
                  onClick={() => navigate(-1)}
                />
                <ButtonPrimaryFilled
                  title={languageTranslate(appState?.language, "next")}
                  icon={<ChevronRight />}
                  iconPosition="right"
                  type="button"
                  onClick={handleNext}
                  disabled={!isStep1Valid}
                />
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateDelegation;
