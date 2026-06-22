// import { useNavigate } from "react-router-dom";
// import { FaPlus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import IncomingLetterAnalytics from "./IncomingLetterAnalytics";
import { useState } from "react";
import Pagination from "../Pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Eye, EyeOff, MoreVertical } from "lucide-react";
import { useSelector } from "react-redux";

const IncomingLetters = () => {
  // const navigate = useNavigate();
  const appState = useSelector((state) => state.app);
  const isDark = appState?.theme === "dark";
  const [page, setPage] = useState(1);

  const headers = [
    {
      key: "letternumber",
      label: "Letter Number",
    },
    {
      key: "subject",
      label: "Subject",
    },

    {
      key: "registeredBy",
      label: "Registered By",
    },
    {
      key: "registereddate",
      label: "Registered Date",
    },
    {
      key: "status",
      label: "Status",
      render: (item) => {
        const getStatusColor = (status) => {
          if (isDark) {
            switch (status) {
              case "registered":
                // success/50 → success/950, success/900 → success/100
                return "bg-success-950 text-success-100";
              case "forwarded":
                // destructive/200 → destructive/800, destructive/900 → destructive/100
                return "bg-destructive-800 text-destructive-100";
              default:
                return "bg-gray-800 text-gray-100";
            }
          } else {
            switch (status) {
              case "registered":
                return "bg-success-50 text-success-900";
              case "forwarded":
                return "bg-destructive-200 text-destructive-900";
              default:
                return "bg-gray-100 text-gray-800";
            }
          }
        };

        return (
          <span
            className={`inline-flex px-3 py-1 text-[12px] md:text-[16px] font-semibold rounded-full ${getStatusColor(
              item.status
            )}`}
          >
            {item.status}
          </span>
        );
      },
    },
  ];

  const [visibleColumns, setVisibleColumns] = useState(
    headers.reduce((acc, h) => ({ ...acc, [h.key]: true }), {})
  );

  const toggleColumn = (key) => {
    setVisibleColumns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const someHidden = Object.values(visibleColumns).some((v) => !v);

  return (
    <div className="grid custom-gap-14">
      <IncomingLetterAnalytics />

      {/* Total Count Card */}
      <div
        className={`p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 rounded-xl  ${
          isDark
            ? "bg-primary-900  text-white"
            : "bg-white  txt-primary-700"
        }`}
      >
        <span className="font-bold text-xl">
          Total Incoming Letters:{" "}
          <span className="text-2xl font-bold text-">1</span>
        </span>
        <button
          className={`py-3 px-6 ${
            isDark
              ? "bg-primary-300 text-primary-950"
              : "bg-primary-700 text-neutral-50"
          } hover:bg-[#ad892e]  rounded-lg flex items-center gap-3 font-medium transition-all shadow-md hover:shadow-lg`}
        >
          <FaPlus className="h-5 w-5" />
          Register Letter
        </button>
      </div>

      {/* Search & Filters */}
      <div
        className={`w-full p-6 rounded-xl  ${isDark ? "bg-black" : "bg-white"}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search By Letter Number"
              className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all ${
                isDark
                  ? "bg-neutral-950 border-primary-950 placeholder-neutral-500 text-white focus:border-primary-700"
                  : "bg-neutral-50 border-primary-50 placeholder-gray-500 text-gray-900 focus:border-primary-300"
              }`}
            />
          </div>

          <div className="flex items-center gap-3">
            <select
              className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all ${
                isDark
                  ? "bg-neutral-950 border-primary-950 text-neutral-500 focus:border-primary-brandBlue"
                  : "bg-neutral-50 border-primary-50 text-gray-900 focus:border-primary-brandBlue"
              }`}
            >
              <option value="">Search by status</option>
              <option value="registered">Registered</option>
              <option value="forwarded">Forwarded</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table with Column Toggle */}
      <div
        className={`relative rounded-xl overflow-hidden  ${
          isDark ? "bg-black border-neutral-800" : "bg-white border-gray-200"
        }`}
      >
        {/* Toolbar */}
        <div
          className={`p-4 flex flex-col  gap-4  ${
            isDark ? "border-neutral-800" : "border-gray-200"
          }`}
        >
          <div className="w-full flex justify-end items-center gap-4">
            <div className="flex items-center gap-3">
              <span
                className={`text-sm font-medium ${
                  isDark ? "text-neutral-300" : "text-gray-600"
                }`}
              >
                Sort by:
              </span>
              <select
                className={`px-4 py-2 rounded-md border text-sm font-medium transition-all ${
                  isDark
                    ? " border-primary-300 text-primary-300"
                    : " border-primary-700 text-primary-700"
                }`}
              >
                <option value={-1}>Latest</option>
                <option value={1}>Oldest</option>
              </select>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className={`flex items-center gap-2 bg-transparent border ${
                    isDark
                      ? "border-primary-300 text-primary-300 py-5"
                      : "border-primary-700 text-primary-700 "
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  Columns
                  {someHidden && (
                    <span className="ml-1 text-xs bg-primary-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                      {Object.values(visibleColumns).filter(Boolean).length}
                    </span>
                  )}
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className={`w-56 p-3 rounded-lg shadow-xl border ${
                  isDark
                    ? "bg-neutral-900 border-neutral-800"
                    : "bg-white border-gray-200"
                }`}
              >
                {headers.map((header) => (
                  <DropdownMenuCheckboxItem
                    key={header.key}
                    checked={visibleColumns[header.key]}
                    onCheckedChange={() => toggleColumn(header.key)}
                    className={`flex items-center gap-3 rounded-md px-3 py-2 cursor-pointer transition-colors ${
                      isDark ? "hover:bg-neutral-800" : "hover:bg-gray-100"
                    }`}
                  >
                    {visibleColumns[header.key] ? (
                      <Eye className="w-4 h-4 text-primary-500" />
                    ) : (
                      <EyeOff className="w-4 h-4 text-gray-400" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        isDark ? "text-neutral-300" : "text-gray-900"
                      }`}
                    >
                      {header.label}
                    </span>
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead
                className={`h-14 ${
                  isDark ? "bg-primary-950" : "bg-primary-50"
                }`}
              >
                <tr>
                  {headers
                    .filter((h) => visibleColumns[h.key])
                    .map((header) => (
                      <th
                        key={header.key}
                        className={`px-6 py-4 text-left text-[12px] md:text-[16px] font-bold uppercase tracking-wider whitespace-nowrap ${
                          isDark ? "text-primary-200" : "text-primary-800"
                        }`}
                      >
                        {header.label}
                      </th>
                    ))}
                  <th
                    className={`px-6 py-4 text-left text-[12px] md:text-[16px] font-bold uppercase tracking-wider whitespace-nowrap ${
                      isDark ? "text-primary-200" : "text-primary-800"
                    }`}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody
                className={`divide-y ${
                  isDark ? "divide-neutral-800" : "divide-gray-200"
                }`}
              >
                <tr
                  className={`transition-colors ${
                    isDark
                      ? "hover:bg-primary-900 text-primary-50"
                      : "hover:bg-primary-100 text-primary-950"
                  }`}
                >
                  {visibleColumns.letternumber && (
                    <td
                      className={`px-6 py-4 whitespace-nowrap ${
                        isDark ? "text-primary-50" : "text-primary-950"
                      }`}
                    >
                      000001/2018
                    </td>
                  )}
                  {visibleColumns.subject && (
                    <td
                      className={`px-6 py-4 whitespace-nowrap ${
                        isDark ? "text-primary-50" : "text-primary-950"
                      }`}
                    >
                      Payment Request
                    </td>
                  )}
                  {visibleColumns.registeredBy && (
                    <td
                      className={`px-6 py-4 whitespace-nowrap ${
                        isDark ? "text-primary-50" : "text-primary-950"
                      }`}
                    >
                      Abebe Kebede Kasu
                    </td>
                  )}
                  {visibleColumns.registereddate && (
                    <td
                    className={`px-6 py-4 whitespace-nowrap ${
                        isDark ? "text-primary-50" : "text-primary-950"
                      }`}
                    >
                      Nov 22, 2025
                    </td>
                  )}
                  {visibleColumns.status && (
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
                          isDark
                            ? "bg-success-950 text-success-100"
                            : "bg-success-50 text-success-900"
                        }`}
                      >
                        Registered
                      </span>
                    </td>
                  )}
                  <td className="px-6 py-4">
                    <button
                      className={`${
                        isDark
                          ? "text-neutral-400 hover:text-white"
                          : "text-primary-three hover:text-primary-darkest"
                      } transition-colors`}
                    >
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <Pagination page={page} setPage={setPage} totalPages={1} />
      </div>
    </div>
  );
};

export default IncomingLetters;
