import { toEthiopian } from "ethiopian-date";

/**
 * Formats a date string or object into a localized string based on the language.
 * @param {string|Date} dateInput - The date to format.
 * @param {string} language - The current application language ('en' or 'am').
 * @returns {string} - The formatted date string.
 */
export function formatLocalizedDate(dateInput, language) {
  if (!dateInput) return "—";
  const date = new Date(dateInput);
  if (Number.isNaN(date.getTime())) return "—";

  if (language === "am") {
    try {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      const etDate = toEthiopian(year, month, day);
      // Format: DD/MM/YYYY
      return `${etDate[2].toString().padStart(2, "0")}/${etDate[1]
        .toString()
        .padStart(2, "0")}/${etDate[0]}`;
    } catch {
      // Fallback to ISO date if conversion fails
      return date.toISOString().split("T")[0];
    }
  }

  // Default Gregorian (English) format: MM/DD/YYYY
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}
