(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_stencil_core_internal_client_lazy_recursive_entry_js_include_entry_js_exclude_sy-20ef8c"],{

/***/ "./node_modules/@stencil/core/internal/client lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/@stencil/core/internal/client lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-date-picker-month-header.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-date-picker-month-header.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteDatePickerMonthHeader: () => (/* binding */ CalciteDatePickerMonthHeader),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _date_picker_month_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-picker-month-header.js */ "./node_modules/@esri/calcite-components/dist/components/date-picker-month-header.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const CalciteDatePickerMonthHeader = _date_picker_month_header_js__WEBPACK_IMPORTED_MODULE_0__.D;
const defineCustomElement = _date_picker_month_header_js__WEBPACK_IMPORTED_MODULE_0__.d;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/date.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/date.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ datePartsFromLocalizedString),
/* harmony export */   b: () => (/* binding */ dateFromLocalizedString),
/* harmony export */   c: () => (/* binding */ dateToISO),
/* harmony export */   d: () => (/* binding */ datePartsFromISO),
/* harmony export */   e: () => (/* binding */ dateFromISO),
/* harmony export */   f: () => (/* binding */ dateFromRange),
/* harmony export */   g: () => (/* binding */ getDaysDiff),
/* harmony export */   h: () => (/* binding */ sameDate),
/* harmony export */   i: () => (/* binding */ inRange),
/* harmony export */   j: () => (/* binding */ getOrder),
/* harmony export */   k: () => (/* binding */ formatCalendarYear),
/* harmony export */   l: () => (/* binding */ parseCalendarYear),
/* harmony export */   n: () => (/* binding */ nextMonth),
/* harmony export */   p: () => (/* binding */ prevMonth),
/* harmony export */   s: () => (/* binding */ setEndOfDay)
/* harmony export */ });
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


/**
 * Check if date is within a min and max
 *
 * @param date
 * @param min
 * @param max
 */
function inRange(date, min, max) {
  if (!date) {
    return;
  }
  const time = date.getTime();
  const afterMin = !(min instanceof Date) || time >= min.getTime();
  const beforeMax = !(max instanceof Date) || time <= max.getTime();
  return afterMin && beforeMax;
}
/**
 * Ensures date is within range,
 * returns min or max if out of bounds
 *
 * @param date
 * @param min
 * @param max
 */
function dateFromRange(date, min, max) {
  if (!(date instanceof Date)) {
    return null;
  }
  const time = date.getTime();
  const beforeMin = min instanceof Date && time < min.getTime();
  const afterMax = max instanceof Date && time > max.getTime();
  if (beforeMin) {
    return min;
  }
  if (afterMax) {
    return max;
  }
  return date;
}
/**
 * Parse an iso8601 string (YYYY-mm-dd) into a valid date.
 * TODO: handle time when time of day UI is added
 *
 * @param iso8601
 * @param isEndDate
 */
function dateFromISO(iso8601, isEndDate = false) {
  if (iso8601 instanceof Date) {
    return iso8601;
  }
  if (!iso8601 || typeof iso8601 !== "string") {
    return null;
  }
  const d = iso8601.split(/[: T-]/).map(parseFloat);
  const date = new Date(d[0], (d[1] || 1) - 1, d[2] || 1);
  date.setFullYear(d[0]);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid ISO 8601 date: "${iso8601}"`);
  }
  if (isEndDate) {
    return setEndOfDay(date);
  }
  return date;
}
/**
 * Parse a localized date string into a valid Date.
 * return false if date is invalid, or out of range
 *
 * @param value
 * @param localeData
 */
function dateFromLocalizedString(value, localeData) {
  if (!localeData) {
    return null;
  }
  const { separator } = localeData;
  const parts = parseDateString(value, localeData);
  const { day, month } = parts;
  const year = parseCalendarYear(parts.year, localeData);
  const date = new Date(year, month, day);
  date.setFullYear(year);
  const validDay = day > 0;
  const validMonth = month > -1;
  const validDate = !isNaN(date.getTime());
  const validLength = value.split(separator).filter((c) => c).length > 2;
  const validYear = year.toString().length > 0;
  if (validDay && validMonth && validDate && validLength && validYear) {
    return date;
  }
  return null;
}
function parseCalendarYear(year, localeData) {
  return processCalendarYear(year, localeData, "read");
}
function formatCalendarYear(year, localeData) {
  return processCalendarYear(year, localeData, "write");
}
function processCalendarYear(year, localeData, mode) {
  if (localeData["default-calendar"] !== "buddhist") {
    return year;
  }
  const BUDDHIST_CALENDAR_YEAR_OFFSET = 543;
  const yearOffset = BUDDHIST_CALENDAR_YEAR_OFFSET * (mode === "read" ? -1 : 1);
  return year + yearOffset;
}
/**
 * Retrieve day, month, and year strings from a localized string
 *
 * @param string
 * @param localeData
 */
function datePartsFromLocalizedString(string, localeData) {
  const { separator, unitOrder } = localeData;
  const order = getOrder(unitOrder);
  const values = string.split(separator).map((part) => _locale_js__WEBPACK_IMPORTED_MODULE_0__.n.delocalize(part));
  const day = values[order.indexOf("d")];
  const month = values[order.indexOf("m")];
  const year = values[order.indexOf("y")];
  return { day, month, year };
}
/**
 * Return first portion of ISO string (YYYY-mm-dd)
 *
 * @param date
 */
function dateToISO(date) {
  if (date instanceof Date) {
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split("T")[0];
  }
  return "";
}
/**
 * Retrieve day, month, and year strings from a ISO string (YYYY-mm-dd)
 *
 * @param string
 * @param isoDate
 */
function datePartsFromISO(isoDate) {
  const dateParts = isoDate.split("-");
  return { day: dateParts[2], month: dateParts[1], year: dateParts[0] };
}
/**
 * Check if two dates are the same day, month, year
 *
 * @param d1
 * @param d2
 */
function sameDate(d1, d2) {
  return (d1 instanceof Date &&
    d2 instanceof Date &&
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear());
}
/**
 * Get a date one month in the past
 *
 * @param date
 */
function prevMonth(date) {
  const month = date.getMonth();
  const nextDate = new Date(date);
  nextDate.setMonth(month - 1);
  // date doesn't exist in new month, use last day
  if (month === nextDate.getMonth()) {
    return new Date(date.getFullYear(), month, 0);
  }
  return nextDate;
}
/**
 * Get a date one month in the future
 *
 * @param date
 */
function nextMonth(date) {
  const month = date.getMonth();
  const nextDate = new Date(date);
  nextDate.setMonth(month + 1);
  // date doesn't exist in new month, use last day
  if ((month + 2) % 7 === nextDate.getMonth() % 7) {
    return new Date(date.getFullYear(), month + 2, 0);
  }
  return nextDate;
}
/**
 * Parse numeric units for day, month, and year from a localized string
 * month starts at 0 (can pass to date constructor)
 * can return values as number or string
 *
 * @param string
 * @param localeData
 */
function parseDateString(string, localeData) {
  const { day, month, year } = datePartsFromLocalizedString(string, localeData);
  return {
    day: parseInt(day),
    month: parseInt(month) - 1,
    year: parseInt(year),
  };
}
/**
 * Based on the unitOrder string, find order of month, day, and year for locale
 *
 * @param unitOrder
 */
function getOrder(unitOrder) {
  const signifiers = ["d", "m", "y"];
  const order = unitOrder.toLowerCase();
  return signifiers.sort((a, b) => order.indexOf(a) - order.indexOf(b));
}
/**
 * Get number of days between two dates
 *
 * @param date1
 * @param date2
 */
function getDaysDiff(date1, date2) {
  const ts1 = date1.getTime();
  const ts2 = date2.getTime();
  return (ts1 - ts2) / (1000 * 3600 * 24);
}
/**
 * Set time of the day to the end.
 *
 * @param {Date} date Date.
 * @returns {Date} Date with time set to end of day .
 */
function setEndOfDay(date) {
  date.setHours(23, 59, 59, 999);
  return date;
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNzExNzIzYWM4YWY4ZDc2ZWJjY2Y3NTU2MzYzODkxZGMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUc7O0FBRXZHLHFDQUFxQywyREFBcUI7QUFDMUQsNEJBQTRCLDJEQUFxQjs7QUFFWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lEOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxZQUFZO0FBQ3RCO0FBQ0EsVUFBVSxhQUFhO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx1QkFBdUI7QUFDakM7QUFDQSx1REFBdUQseUNBQXFCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1CQUFtQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXlUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9Ac3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC8gbGF6eSBeXFwuXFwvLipcXC5lbnRyeVxcLmpzLiokIGluY2x1ZGU6IFxcLmVudHJ5XFwuanMkIGV4Y2x1ZGU6IFxcLnN5c3RlbVxcLmVudHJ5XFwuanMkIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtZGF0ZS1waWNrZXItbW9udGgtaGVhZGVyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9kYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKFtdKTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9Ac3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudCBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5lbnRyeVxcXFwuanMuKiQgaW5jbHVkZTogXFxcXC5lbnRyeVxcXFwuanMkIGV4Y2x1ZGU6IFxcXFwuc3lzdGVtXFxcXC5lbnRyeVxcXFwuanMkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDsiLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBEIGFzIERhdGVQaWNrZXJNb250aEhlYWRlciwgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDEgfSBmcm9tICcuL2RhdGUtcGlja2VyLW1vbnRoLWhlYWRlci5qcyc7XG5cbmNvbnN0IENhbGNpdGVEYXRlUGlja2VyTW9udGhIZWFkZXIgPSBEYXRlUGlja2VyTW9udGhIZWFkZXI7XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gZGVmaW5lQ3VzdG9tRWxlbWVudCQxO1xuXG5leHBvcnQgeyBDYWxjaXRlRGF0ZVBpY2tlck1vbnRoSGVhZGVyLCBkZWZpbmVDdXN0b21FbGVtZW50IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBuIGFzIG51bWJlclN0cmluZ0Zvcm1hdHRlciB9IGZyb20gJy4vbG9jYWxlLmpzJztcblxuLyoqXG4gKiBDaGVjayBpZiBkYXRlIGlzIHdpdGhpbiBhIG1pbiBhbmQgbWF4XG4gKlxuICogQHBhcmFtIGRhdGVcbiAqIEBwYXJhbSBtaW5cbiAqIEBwYXJhbSBtYXhcbiAqL1xuZnVuY3Rpb24gaW5SYW5nZShkYXRlLCBtaW4sIG1heCkge1xuICBpZiAoIWRhdGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgdGltZSA9IGRhdGUuZ2V0VGltZSgpO1xuICBjb25zdCBhZnRlck1pbiA9ICEobWluIGluc3RhbmNlb2YgRGF0ZSkgfHwgdGltZSA+PSBtaW4uZ2V0VGltZSgpO1xuICBjb25zdCBiZWZvcmVNYXggPSAhKG1heCBpbnN0YW5jZW9mIERhdGUpIHx8IHRpbWUgPD0gbWF4LmdldFRpbWUoKTtcbiAgcmV0dXJuIGFmdGVyTWluICYmIGJlZm9yZU1heDtcbn1cbi8qKlxuICogRW5zdXJlcyBkYXRlIGlzIHdpdGhpbiByYW5nZSxcbiAqIHJldHVybnMgbWluIG9yIG1heCBpZiBvdXQgb2YgYm91bmRzXG4gKlxuICogQHBhcmFtIGRhdGVcbiAqIEBwYXJhbSBtaW5cbiAqIEBwYXJhbSBtYXhcbiAqL1xuZnVuY3Rpb24gZGF0ZUZyb21SYW5nZShkYXRlLCBtaW4sIG1heCkge1xuICBpZiAoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB0aW1lID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGNvbnN0IGJlZm9yZU1pbiA9IG1pbiBpbnN0YW5jZW9mIERhdGUgJiYgdGltZSA8IG1pbi5nZXRUaW1lKCk7XG4gIGNvbnN0IGFmdGVyTWF4ID0gbWF4IGluc3RhbmNlb2YgRGF0ZSAmJiB0aW1lID4gbWF4LmdldFRpbWUoKTtcbiAgaWYgKGJlZm9yZU1pbikge1xuICAgIHJldHVybiBtaW47XG4gIH1cbiAgaWYgKGFmdGVyTWF4KSB7XG4gICAgcmV0dXJuIG1heDtcbiAgfVxuICByZXR1cm4gZGF0ZTtcbn1cbi8qKlxuICogUGFyc2UgYW4gaXNvODYwMSBzdHJpbmcgKFlZWVktbW0tZGQpIGludG8gYSB2YWxpZCBkYXRlLlxuICogVE9ETzogaGFuZGxlIHRpbWUgd2hlbiB0aW1lIG9mIGRheSBVSSBpcyBhZGRlZFxuICpcbiAqIEBwYXJhbSBpc284NjAxXG4gKiBAcGFyYW0gaXNFbmREYXRlXG4gKi9cbmZ1bmN0aW9uIGRhdGVGcm9tSVNPKGlzbzg2MDEsIGlzRW5kRGF0ZSA9IGZhbHNlKSB7XG4gIGlmIChpc284NjAxIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBpc284NjAxO1xuICB9XG4gIGlmICghaXNvODYwMSB8fCB0eXBlb2YgaXNvODYwMSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IGQgPSBpc284NjAxLnNwbGl0KC9bOiBULV0vKS5tYXAocGFyc2VGbG9hdCk7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkWzBdLCAoZFsxXSB8fCAxKSAtIDEsIGRbMl0gfHwgMSk7XG4gIGRhdGUuc2V0RnVsbFllYXIoZFswXSk7XG4gIGlmIChpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgSVNPIDg2MDEgZGF0ZTogXCIke2lzbzg2MDF9XCJgKTtcbiAgfVxuICBpZiAoaXNFbmREYXRlKSB7XG4gICAgcmV0dXJuIHNldEVuZE9mRGF5KGRhdGUpO1xuICB9XG4gIHJldHVybiBkYXRlO1xufVxuLyoqXG4gKiBQYXJzZSBhIGxvY2FsaXplZCBkYXRlIHN0cmluZyBpbnRvIGEgdmFsaWQgRGF0ZS5cbiAqIHJldHVybiBmYWxzZSBpZiBkYXRlIGlzIGludmFsaWQsIG9yIG91dCBvZiByYW5nZVxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIGxvY2FsZURhdGFcbiAqL1xuZnVuY3Rpb24gZGF0ZUZyb21Mb2NhbGl6ZWRTdHJpbmcodmFsdWUsIGxvY2FsZURhdGEpIHtcbiAgaWYgKCFsb2NhbGVEYXRhKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgeyBzZXBhcmF0b3IgfSA9IGxvY2FsZURhdGE7XG4gIGNvbnN0IHBhcnRzID0gcGFyc2VEYXRlU3RyaW5nKHZhbHVlLCBsb2NhbGVEYXRhKTtcbiAgY29uc3QgeyBkYXksIG1vbnRoIH0gPSBwYXJ0cztcbiAgY29uc3QgeWVhciA9IHBhcnNlQ2FsZW5kYXJZZWFyKHBhcnRzLnllYXIsIGxvY2FsZURhdGEpO1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSk7XG4gIGRhdGUuc2V0RnVsbFllYXIoeWVhcik7XG4gIGNvbnN0IHZhbGlkRGF5ID0gZGF5ID4gMDtcbiAgY29uc3QgdmFsaWRNb250aCA9IG1vbnRoID4gLTE7XG4gIGNvbnN0IHZhbGlkRGF0ZSA9ICFpc05hTihkYXRlLmdldFRpbWUoKSk7XG4gIGNvbnN0IHZhbGlkTGVuZ3RoID0gdmFsdWUuc3BsaXQoc2VwYXJhdG9yKS5maWx0ZXIoKGMpID0+IGMpLmxlbmd0aCA+IDI7XG4gIGNvbnN0IHZhbGlkWWVhciA9IHllYXIudG9TdHJpbmcoKS5sZW5ndGggPiAwO1xuICBpZiAodmFsaWREYXkgJiYgdmFsaWRNb250aCAmJiB2YWxpZERhdGUgJiYgdmFsaWRMZW5ndGggJiYgdmFsaWRZZWFyKSB7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBwYXJzZUNhbGVuZGFyWWVhcih5ZWFyLCBsb2NhbGVEYXRhKSB7XG4gIHJldHVybiBwcm9jZXNzQ2FsZW5kYXJZZWFyKHllYXIsIGxvY2FsZURhdGEsIFwicmVhZFwiKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdENhbGVuZGFyWWVhcih5ZWFyLCBsb2NhbGVEYXRhKSB7XG4gIHJldHVybiBwcm9jZXNzQ2FsZW5kYXJZZWFyKHllYXIsIGxvY2FsZURhdGEsIFwid3JpdGVcIik7XG59XG5mdW5jdGlvbiBwcm9jZXNzQ2FsZW5kYXJZZWFyKHllYXIsIGxvY2FsZURhdGEsIG1vZGUpIHtcbiAgaWYgKGxvY2FsZURhdGFbXCJkZWZhdWx0LWNhbGVuZGFyXCJdICE9PSBcImJ1ZGRoaXN0XCIpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfVxuICBjb25zdCBCVURESElTVF9DQUxFTkRBUl9ZRUFSX09GRlNFVCA9IDU0MztcbiAgY29uc3QgeWVhck9mZnNldCA9IEJVRERISVNUX0NBTEVOREFSX1lFQVJfT0ZGU0VUICogKG1vZGUgPT09IFwicmVhZFwiID8gLTEgOiAxKTtcbiAgcmV0dXJuIHllYXIgKyB5ZWFyT2Zmc2V0O1xufVxuLyoqXG4gKiBSZXRyaWV2ZSBkYXksIG1vbnRoLCBhbmQgeWVhciBzdHJpbmdzIGZyb20gYSBsb2NhbGl6ZWQgc3RyaW5nXG4gKlxuICogQHBhcmFtIHN0cmluZ1xuICogQHBhcmFtIGxvY2FsZURhdGFcbiAqL1xuZnVuY3Rpb24gZGF0ZVBhcnRzRnJvbUxvY2FsaXplZFN0cmluZyhzdHJpbmcsIGxvY2FsZURhdGEpIHtcbiAgY29uc3QgeyBzZXBhcmF0b3IsIHVuaXRPcmRlciB9ID0gbG9jYWxlRGF0YTtcbiAgY29uc3Qgb3JkZXIgPSBnZXRPcmRlcih1bml0T3JkZXIpO1xuICBjb25zdCB2YWx1ZXMgPSBzdHJpbmcuc3BsaXQoc2VwYXJhdG9yKS5tYXAoKHBhcnQpID0+IG51bWJlclN0cmluZ0Zvcm1hdHRlci5kZWxvY2FsaXplKHBhcnQpKTtcbiAgY29uc3QgZGF5ID0gdmFsdWVzW29yZGVyLmluZGV4T2YoXCJkXCIpXTtcbiAgY29uc3QgbW9udGggPSB2YWx1ZXNbb3JkZXIuaW5kZXhPZihcIm1cIildO1xuICBjb25zdCB5ZWFyID0gdmFsdWVzW29yZGVyLmluZGV4T2YoXCJ5XCIpXTtcbiAgcmV0dXJuIHsgZGF5LCBtb250aCwgeWVhciB9O1xufVxuLyoqXG4gKiBSZXR1cm4gZmlyc3QgcG9ydGlvbiBvZiBJU08gc3RyaW5nIChZWVlZLW1tLWRkKVxuICpcbiAqIEBwYXJhbSBkYXRlXG4gKi9cbmZ1bmN0aW9uIGRhdGVUb0lTTyhkYXRlKSB7XG4gIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSAtIGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcbiAgfVxuICByZXR1cm4gXCJcIjtcbn1cbi8qKlxuICogUmV0cmlldmUgZGF5LCBtb250aCwgYW5kIHllYXIgc3RyaW5ncyBmcm9tIGEgSVNPIHN0cmluZyAoWVlZWS1tbS1kZClcbiAqXG4gKiBAcGFyYW0gc3RyaW5nXG4gKiBAcGFyYW0gaXNvRGF0ZVxuICovXG5mdW5jdGlvbiBkYXRlUGFydHNGcm9tSVNPKGlzb0RhdGUpIHtcbiAgY29uc3QgZGF0ZVBhcnRzID0gaXNvRGF0ZS5zcGxpdChcIi1cIik7XG4gIHJldHVybiB7IGRheTogZGF0ZVBhcnRzWzJdLCBtb250aDogZGF0ZVBhcnRzWzFdLCB5ZWFyOiBkYXRlUGFydHNbMF0gfTtcbn1cbi8qKlxuICogQ2hlY2sgaWYgdHdvIGRhdGVzIGFyZSB0aGUgc2FtZSBkYXksIG1vbnRoLCB5ZWFyXG4gKlxuICogQHBhcmFtIGQxXG4gKiBAcGFyYW0gZDJcbiAqL1xuZnVuY3Rpb24gc2FtZURhdGUoZDEsIGQyKSB7XG4gIHJldHVybiAoZDEgaW5zdGFuY2VvZiBEYXRlICYmXG4gICAgZDIgaW5zdGFuY2VvZiBEYXRlICYmXG4gICAgZDEuZ2V0RGF0ZSgpID09PSBkMi5nZXREYXRlKCkgJiZcbiAgICBkMS5nZXRNb250aCgpID09PSBkMi5nZXRNb250aCgpICYmXG4gICAgZDEuZ2V0RnVsbFllYXIoKSA9PT0gZDIuZ2V0RnVsbFllYXIoKSk7XG59XG4vKipcbiAqIEdldCBhIGRhdGUgb25lIG1vbnRoIGluIHRoZSBwYXN0XG4gKlxuICogQHBhcmFtIGRhdGVcbiAqL1xuZnVuY3Rpb24gcHJldk1vbnRoKGRhdGUpIHtcbiAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gIGNvbnN0IG5leHREYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIG5leHREYXRlLnNldE1vbnRoKG1vbnRoIC0gMSk7XG4gIC8vIGRhdGUgZG9lc24ndCBleGlzdCBpbiBuZXcgbW9udGgsIHVzZSBsYXN0IGRheVxuICBpZiAobW9udGggPT09IG5leHREYXRlLmdldE1vbnRoKCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aCwgMCk7XG4gIH1cbiAgcmV0dXJuIG5leHREYXRlO1xufVxuLyoqXG4gKiBHZXQgYSBkYXRlIG9uZSBtb250aCBpbiB0aGUgZnV0dXJlXG4gKlxuICogQHBhcmFtIGRhdGVcbiAqL1xuZnVuY3Rpb24gbmV4dE1vbnRoKGRhdGUpIHtcbiAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gIGNvbnN0IG5leHREYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIG5leHREYXRlLnNldE1vbnRoKG1vbnRoICsgMSk7XG4gIC8vIGRhdGUgZG9lc24ndCBleGlzdCBpbiBuZXcgbW9udGgsIHVzZSBsYXN0IGRheVxuICBpZiAoKG1vbnRoICsgMikgJSA3ID09PSBuZXh0RGF0ZS5nZXRNb250aCgpICUgNykge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoICsgMiwgMCk7XG4gIH1cbiAgcmV0dXJuIG5leHREYXRlO1xufVxuLyoqXG4gKiBQYXJzZSBudW1lcmljIHVuaXRzIGZvciBkYXksIG1vbnRoLCBhbmQgeWVhciBmcm9tIGEgbG9jYWxpemVkIHN0cmluZ1xuICogbW9udGggc3RhcnRzIGF0IDAgKGNhbiBwYXNzIHRvIGRhdGUgY29uc3RydWN0b3IpXG4gKiBjYW4gcmV0dXJuIHZhbHVlcyBhcyBudW1iZXIgb3Igc3RyaW5nXG4gKlxuICogQHBhcmFtIHN0cmluZ1xuICogQHBhcmFtIGxvY2FsZURhdGFcbiAqL1xuZnVuY3Rpb24gcGFyc2VEYXRlU3RyaW5nKHN0cmluZywgbG9jYWxlRGF0YSkge1xuICBjb25zdCB7IGRheSwgbW9udGgsIHllYXIgfSA9IGRhdGVQYXJ0c0Zyb21Mb2NhbGl6ZWRTdHJpbmcoc3RyaW5nLCBsb2NhbGVEYXRhKTtcbiAgcmV0dXJuIHtcbiAgICBkYXk6IHBhcnNlSW50KGRheSksXG4gICAgbW9udGg6IHBhcnNlSW50KG1vbnRoKSAtIDEsXG4gICAgeWVhcjogcGFyc2VJbnQoeWVhciksXG4gIH07XG59XG4vKipcbiAqIEJhc2VkIG9uIHRoZSB1bml0T3JkZXIgc3RyaW5nLCBmaW5kIG9yZGVyIG9mIG1vbnRoLCBkYXksIGFuZCB5ZWFyIGZvciBsb2NhbGVcbiAqXG4gKiBAcGFyYW0gdW5pdE9yZGVyXG4gKi9cbmZ1bmN0aW9uIGdldE9yZGVyKHVuaXRPcmRlcikge1xuICBjb25zdCBzaWduaWZpZXJzID0gW1wiZFwiLCBcIm1cIiwgXCJ5XCJdO1xuICBjb25zdCBvcmRlciA9IHVuaXRPcmRlci50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gc2lnbmlmaWVycy5zb3J0KChhLCBiKSA9PiBvcmRlci5pbmRleE9mKGEpIC0gb3JkZXIuaW5kZXhPZihiKSk7XG59XG4vKipcbiAqIEdldCBudW1iZXIgb2YgZGF5cyBiZXR3ZWVuIHR3byBkYXRlc1xuICpcbiAqIEBwYXJhbSBkYXRlMVxuICogQHBhcmFtIGRhdGUyXG4gKi9cbmZ1bmN0aW9uIGdldERheXNEaWZmKGRhdGUxLCBkYXRlMikge1xuICBjb25zdCB0czEgPSBkYXRlMS5nZXRUaW1lKCk7XG4gIGNvbnN0IHRzMiA9IGRhdGUyLmdldFRpbWUoKTtcbiAgcmV0dXJuICh0czEgLSB0czIpIC8gKDEwMDAgKiAzNjAwICogMjQpO1xufVxuLyoqXG4gKiBTZXQgdGltZSBvZiB0aGUgZGF5IHRvIHRoZSBlbmQuXG4gKlxuICogQHBhcmFtIHtEYXRlfSBkYXRlIERhdGUuXG4gKiBAcmV0dXJucyB7RGF0ZX0gRGF0ZSB3aXRoIHRpbWUgc2V0IHRvIGVuZCBvZiBkYXkgLlxuICovXG5mdW5jdGlvbiBzZXRFbmRPZkRheShkYXRlKSB7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCB7IGRhdGVQYXJ0c0Zyb21Mb2NhbGl6ZWRTdHJpbmcgYXMgYSwgZGF0ZUZyb21Mb2NhbGl6ZWRTdHJpbmcgYXMgYiwgZGF0ZVRvSVNPIGFzIGMsIGRhdGVQYXJ0c0Zyb21JU08gYXMgZCwgZGF0ZUZyb21JU08gYXMgZSwgZGF0ZUZyb21SYW5nZSBhcyBmLCBnZXREYXlzRGlmZiBhcyBnLCBzYW1lRGF0ZSBhcyBoLCBpblJhbmdlIGFzIGksIGdldE9yZGVyIGFzIGosIGZvcm1hdENhbGVuZGFyWWVhciBhcyBrLCBwYXJzZUNhbGVuZGFyWWVhciBhcyBsLCBuZXh0TW9udGggYXMgbiwgcHJldk1vbnRoIGFzIHAsIHNldEVuZE9mRGF5IGFzIHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==