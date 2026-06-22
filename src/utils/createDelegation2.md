import React, { useState, useMemo, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  X,
  Check,
  ChevronRight,
  Search,
  SquareMinus,
  Upload,
} from "lucide-react";
import { format } from "date-fns";
import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GenericStepper from "../common/GenericStepper";
import { Checkbox } from "@/components/ui/checkbox";
import PermissionAccordion from "../common/PermissionAccordion";
import ButtonPrimaryOutlined from "../common/Buttons/ButtonPrimaryOutlined";
import ButtonPrimaryFilled from "../common/Buttons/ButtonPrimaryFilled";
import { useSelector } from "react-redux";
import { languageTranslate } from "@/utils/data";
import {
  getOrgDelegation,
  getPermissionCategoryForDelegationFilters,
  getUserPositionDeleationFilters,
  getUsersDeleationFilters,
} from "@/utils/dataFetch";
import MultiSelect from "../common/MultiSelect";
import apiRequest from "@/utils/request";
import { toast } from "sonner";
import ServerError from "../ServerError";

const CreateDelegation = () => {
  const navigate = useNavigate();
  const appState = useSelector((state) => state.app);

  const [currentStep, setCurrentStep] = useState(1); // Start at 1
  const [hiddenCategories, setHiddenCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [orgs, setOrgs] = useState([]);
  const [permCategories, setPermCategories] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [userPositionList, setUserPositionList] = useState([]);

  const [selectedOrg, setSelectedOrg] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState([]);
  const [selectedDelegatedUser, setSelectedDelegatedUser] = useState([]);
  const [serverError, setServerError] = useState(false);

  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      organization: [],
      userPosition: [],
      delegatedUser: [],
      startDate: null,
      additionalPermissions: [],
    },
  });

  const watched = watch();
  const selectedPermissions = watch("additionalPermissions") || [];

  // Fetch filter data
  useEffect(() => {
    const fetchFilters = async () => {
      const token = sessionStorage.getItem("tID");

      const orgData = await getOrgDelegation(token);
      setOrgs(orgData?.orgs || []);
      const userData = await getUsersDeleationFilters(token);
      const positionData = await getUserPositionDeleationFilters(token);
      const permData = await getPermissionCategoryForDelegationFilters(token);

      const filterUser = userData?.users?.filter((user) =>
        user?.organizations?.includes(selectedOrg[0]?._id)
      );
      setUsersList(userData?.users || []);
      const filterPos = positionData?.usersPositions?.filter(
        (pos) => pos?.organization?._id === selectedOrg[0]?._id
      );
      setUserPositionList(filterPos || []);
      setPermCategories(permData?.permCategory || []);
    };
    fetchFilters();
  }, [selectedOrg]);

  console.log({
    orgs,
    usersList,
    userPositionList,
    permCategories,
    selectedOrg,
  });

  // Compute permissions from API
  const allPermissions = useMemo(() => {
    if (!Array.isArray(permCategories)) return [];
    return permCategories.flatMap(
      (category) =>
        category.perms?.map((perm) => ({
          ...perm,
          category: {
            _id: category?.perm_category,
            name: category?.perm_category,
          },
        })) || []
    );
  }, [permCategories]);

  const permissionCategories = useMemo(() => {
    if (!Array.isArray(permCategories)) return [];
    return permCategories.map((cat) => ({
      _id: cat?.perm_category,
      name: cat?.perm_category,
      permCount: cat?.perms?.length || 0,
    }));
  }, [permCategories]);

  const visibleCategories = permissionCategories.filter(
    (cat) => !hiddenCategories.includes(cat._id)
  );

  const filteredPermissions = useMemo(() => {
    if (!searchTerm) return allPermissions;
    const lower = searchTerm.toLowerCase();
    return allPermissions.filter(
      (p) =>
        p?.name?.toLowerCase().includes(lower) ||
        p?.code_name?.toLowerCase().includes(lower)
    );
  }, [searchTerm, allPermissions]);

  const getPermissionsForCategory = (categoryId) => {
    return filteredPermissions.filter((p) => p?.category?._id === categoryId);
  };

  const uncheckAllPermissions = (categoryId) => {
    const categoryPerms = allPermissions.filter(
      (p) => p?.category?._id === categoryId
    );
    const idsToRemove = categoryPerms.map((p) => p._id);
    const updated = selectedPermissions.filter(
      (id) => !idsToRemove.includes(id)
    );
    setValue("additionalPermissions", updated);
  };

  const handleHideCategory = (categoryId) => {
    setHiddenCategories((prev) => [...prev, categoryId]);
  };

  // Step validation
  const isStep1Valid =
    selectedOrg.length > 0 &&
    selectedPosition.length > 0 &&
    selectedDelegatedUser.length > 0 &&
    watched.startDate;

  const isStep2Valid = selectedPermissions.length > 0;

  const goNext = async () => {
    if (currentStep === 1 && isStep1Valid) {
      setCurrentStep(2);
    } else if (currentStep === 2 && isStep2Valid) {
      // Optionally validate further or just allow submit
    }
  };

  const goPrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const token = sessionStorage.getItem("tID");
      const delegationData = new FormData();

      delegationData.append("fromPositionId", selectedPosition[0]?._id);
      delegationData.append("delegateeId", selectedDelegatedUser[0]?._id);
      delegationData.append("startDate", data.startDate);
      delegationData.append(
        "permissions",
        JSON.stringify(data.additionalPermissions)
      );

      if (data.reasonFile)
        delegationData.append("delegationLtr", data.reasonFile);

      
      await apiRequest
        .post("/dlgs_api/create_delegation", delegationData, {
          headers: {
            Authorization: `Bearer ${token}`,
            GET_CRDLGS_API: import.meta.env.VITE_APP_GET_CRDLGS_API,
          },
        })
        .then((res) => {
          setLoading(false);
          toast.success(res?.data?.[`Message_${appState?.language}`]);
          setCurrentStep(1);
          setSelectedOrg([]);
          setSelectedPosition([]);
          setUserPositionList([]);
        })
        .catch((error) => {
          setLoading(false);
          toast.error(error?.response?.data?.[`Message_${appState?.language}`]);
        });
    } catch {
      setServerError(true);
    }
  };

  const steps = useMemo(
    () => [
      {
        id: 1,
        label: languageTranslate(appState.language, "generalInformation"),
      },
      {
        id: 2,
        label: languageTranslate(appState.language, "assignPermission"),
      },
    ],
    [appState.language]
  );

  if (serverError) return <ServerError />;

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="p-3.5 space-y-6">
            <h2 className="text-sm font-bold text-neutral-700">
              {languageTranslate(appState.language, "generalInformation")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label>
                  {languageTranslate(appState.language, "organization")} *
                </Label>
                <Controller
                  name="organization"
                  control={control}
                  render={() => (
                    <MultiSelect
                      maxSelection={1}
                      options={orgs}
                      selected={selectedOrg}
                      onSelectedChange={setSelectedOrg}
                      language={appState.language}
                      placeholder={languageTranslate(
                        appState.language,
                        "selectOrg"
                      )}
                    />
                  )}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label>
                  {languageTranslate(appState.language, "userPosition")} *
                </Label>
                <Controller
                  name="userPosition"
                  control={control}
                  render={() => (
                    <MultiSelect
                      maxSelection={1}
                      options={userPositionList}
                      selected={selectedPosition}
                      onSelectedChange={setSelectedPosition}
                      language={appState.language}
                      placeholder={languageTranslate(
                        appState.language,
                        "selectUserPosition"
                      )}
                    />
                  )}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label>
                  {languageTranslate(appState.language, "delegatedUser")} *
                </Label>
                <Controller
                  name="delegatedUser"
                  control={control}
                  render={() => (
                    <MultiSelect
                      maxSelection={1}
                      options={usersList}
                      selected={selectedDelegatedUser}
                      onSelectedChange={setSelectedDelegatedUser}
                      language={appState.language}
                      placeholder={languageTranslate(
                        appState.language,
                        "selectUser"
                      )}
                    />
                  )}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label>
                  {languageTranslate(appState.language, "startDate")} *
                </Label>
                <Controller
                  name="startDate"
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="date"
                      {...field}
                      value={
                        field.value
                          ? format(new Date(field.value), "yyyy-MM-dd")
                          : ""
                      }
                      onChange={(e) => field.onChange(e.target.value)}
                      className={"bg-neutral-50 p-4"}
                    />
                  )}
                />
              </div>

              {/* file */}

              <div className="col-span-2 mt-5">
                <div className="bg-neutral-50 rounded-[10px] py-6 w-full">
                  <div className="flex flex-col gap-4 items-center w-full justify-center">
                    <Upload className="h-10 w-10 text-primary-800" />
                    <h3 className="text-sm font-medium text-primary-darkest">
                      {languageTranslate(
                        appState?.language,
                        "uploadReasonDelegation"
                      )}
                    </h3>
                  </div>
                  <div className="px-6 mt-4 mx-auto max-w-4xl">
                    <Controller
                      name="reasonFile"
                      control={control}
                      render={({ field }) => (
                        <Input
                          type="file"
                          accept=".pdf"
                          className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                          onChange={(e) =>
                            field.onChange(e.target.files?.[0] ?? null)
                          }
                        />
                      )}
                    />
                    <p className="text-center mt-4 text-neutral-500 text-sm">
                      {languageTranslate(
                        appState?.language,
                        "acceptedFormatPDF"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="p-3.5">
            <h2 className="text-sm font-bold text-neutral-700 mb-3.5">
              {languageTranslate(appState.language, "assignPermission")}
            </h2>

            <PermissionAccordion
              categories={visibleCategories}
              onCategoryHide={handleHideCategory}
            >
              <div className="grid gap-4 p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 h-4 w-4" />
                  <Input
                    placeholder={languageTranslate(
                      appState.language,
                      "searchByPermissionName"
                    )}
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="grid gap-y-2">
                  {visibleCategories?.map((category) => {
                    const perms = getPermissionsForCategory(category?._id);
                    if (perms?.length === 0) return null;

                    return (
                      <div
                        key={category?._id}
                        className="border rounded-[10px]"
                      >
                        <div className="bg-primary-50 h-14 rounded-t-[10px] flex items-center pl-4 gap-2">
                          <button
                            type="button"
                            onClick={() => uncheckAllPermissions(category?._id)}
                          >
                            <SquareMinus className="h-5 w-5" />
                          </button>
                          <h3 className="font-bold text-sm">
                            {category?.name}
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                          {perms?.map((perm) => (
                            <Controller
                              key={perm._id}
                              name="additionalPermissions"
                              control={control}
                              render={({ field }) => (
                                <div
                                  className={`flex items-center gap-3 p-3 h-16 ${
                                    field.value.includes(perm?._id)
                                      ? "bg-info-50"
                                      : ""
                                  }`}
                                >
                                  <Checkbox
                                    checked={field.value.includes(perm?._id)}
                                    onCheckedChange={(checked) => {
                                      const set = new Set(field?.value);
                                      checked
                                        ? set.add(perm?._id)
                                        : set.delete(perm?._id);
                                      field.onChange(Array.from(set));
                                    }}
                                    className="h-5 w-5 data-[state=checked]:bg-primary-800"
                                  />
                                  <Label className="cursor-pointer text-sm">
                                    {perm?.name}
                                  </Label>
                                </div>
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </PermissionAccordion>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-black sticky top-0 border-b flex items-center justify-between w-full px-5 py-3.5 my-3.5 rounded-[10px]">
        <div className="flex items-center gap-3">
          <IconButton variant="ghost" onClick={() => navigate(-1)}>
            <ChevronLeft className="h-5 w-5" />
          </IconButton>
          <h1 className="text-xl font-bold text-neutral-700">
            {languageTranslate(appState.language, "createDelegationAssignment")}
          </h1>
        </div>
      </div>
      <div className="bg-white dark:bg-black rounded-[10px] px-3.5 py-5 mb-3.5">
        <GenericStepper currentStep={currentStep} steps={steps} />
      </div>
      {/* Header */}
      <div className="bg-white dark:bg-black rounded-[10px] px-3.5 py-5 border">
        {/* Render step content WITHOUT wrapping in <form> here */}

        {renderStepContent()}

        {/* Navigation Buttons - OUTSIDE the main form submission flow */}
        <div className="flex justify-end mt-6 gap-3">
          <ButtonPrimaryOutlined
            title={languageTranslate(appState.language, "cancel")}
            icon={<X />}
            iconPosition="left"
            type="button"
            onClick={() => navigate(-1)}
          />

          {currentStep > 1 && (
            <ButtonPrimaryOutlined
              title={languageTranslate(appState.language, "previous")}
              icon={<ChevronLeft />}
              iconPosition="left"
              type="button"
              onClick={goPrev}
            />
          )}

          {currentStep < steps.length ? (
            <ButtonPrimaryFilled
              title={languageTranslate(appState.language, "next")}
              icon={<ChevronRight />}
              iconPosition="right"
              type="button"
              onClick={(e) => {
                e.preventDefault(); // Critical: prevent any form submission
                e.stopPropagation();
                goNext();
              }}
              disabled={currentStep === 1 ? !isStep1Valid : !isStep2Valid}
            />
          ) : (
            // Only the final Confirm button triggers submit
            <form onSubmit={handleSubmit(onSubmit)} className="inline">
              <ButtonPrimaryFilled
                title={
                  loading
                    ? languageTranslate(appState.language, "loading")
                    : languageTranslate(appState.language, "confirm")
                }
                icon={<Check />}
                iconPosition="left"
                type="submit"
                disabled={loading || !isStep2Valid}
              />
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateDelegation;
