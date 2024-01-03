"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_date-picker-day_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/date-picker-day.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/date-picker-day.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ DatePickerDay),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.js */ "./node_modules/@esri/calcite-components/dist/components/date.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */







const datePickerDayCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;cursor:pointer;color:var(--calcite-ui-text-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.day-v-wrapper{flex:1 1 auto}.day-wrapper{position:relative;display:flex;flex-direction:column;align-items:center}:host([range]) .day-wrapper:before,:host([range]) .day-wrapper:after,:host([range-hover]) .day-wrapper:before,:host([range-hover]) .day-wrapper:after{pointer-events:none;position:absolute;inset-block:0;content:\"\";block-size:var(--calcite-internal-day-size);inline-size:var(--calcite-internal-day-size)}.day{z-index:var(--calcite-app-z-index);display:flex;align-items:center;justify-content:center;border-radius:9999px;font-size:var(--calcite-font-size--2);line-height:1rem;line-height:1;color:var(--calcite-ui-text-3);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background:none;box-shadow:0 0 0 2px transparent;block-size:var(--calcite-internal-day-size);inline-size:var(--calcite-internal-day-size)}.text{margin-block:1px 0px;margin-inline-start:0px}:host([scale=s]){--calcite-internal-day-size:27px}:host([scale=s]) .day-v-wrapper{padding-block:0.125rem}:host([scale=s]) .day-wrapper{padding:0px}:host([scale=s]) .day{font-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-internal-day-size:33px}:host([scale=m]) .day-v-wrapper{padding-block:0.25rem}:host([scale=m]) .day-wrapper{padding:0px}:host([scale=m]) .day{font-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-internal-day-size:43px}:host([scale=l]) .day-v-wrapper{padding-block:0.25rem}:host([scale=l]) .day-wrapper{padding-inline:0.25rem}:host([scale=l]) .day{font-size:var(--calcite-font-size-0)}:host(:not([current-month])) .day{opacity:var(--calcite-ui-opacity-disabled)}:host(:hover:not([disabled]):not([selected])) .day,:host([active]:not([range]):not([selected])) .day{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:focus),:host([active]){outline:2px solid transparent;outline-offset:2px}:host(:focus:not([disabled])) .day{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([selected]) .day{font-weight:var(--calcite-font-weight-medium);background-color:var(--calcite-ui-brand);color:var(--calcite-ui-foreground-1)}:host(:focus:not([disabled])) .day,:host([start-of-range]:not(:focus)) .day,:host([end-of-range]:not(:focus)) .day{box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host([range-hover]:not([selected])) .day-wrapper:before,:host([highlighted]:not([selected])) .day-wrapper:before{inset-inline-end:50%;border-radius:0}:host([range-hover]:not([selected])) .day-wrapper:after,:host([highlighted]:not([selected])) .day-wrapper:after{inset-inline-start:50%;border-radius:0}:host([range-hover]:not([selected])) .day,:host([highlighted]:not([selected])) .day{color:var(--calcite-ui-text-1)}:host([highlighted]) .day-wrapper:before,:host([highlighted]) .day-wrapper:after,:host([selected]:not(.hover--outside-range)) .day-wrapper:before,:host([selected]:not(.hover--outside-range)) .day-wrapper:after{background-color:var(--calcite-ui-foreground-current)}:host([range-hover]:not([selected])) .day-wrapper:before,:host([range-hover]:not([selected])) .day-wrapper:after{background-color:var(--calcite-ui-foreground-2)}:host(:hover[range-hover]:not([selected]).focused--end) .day-wrapper:before,:host([highlighted][end-of-range]) .day-wrapper:before,:host([highlighted][range-edge=end]) .day-wrapper:before,:host([range-hover][range-edge=end]) .day-wrapper:before,:host(:hover[range-hover].focused--end.hover--outside-range) .day-wrapper:before{inset-inline-end:50%}:host(:hover[range-hover]:not([selected]).focused--end) .day-wrapper:after,:host([highlighted][end-of-range]) .day-wrapper:after,:host([highlighted][range-edge=end]) .day-wrapper:after,:host([range-hover][range-edge=end]) .day-wrapper:after,:host(:hover[range-hover].focused--end.hover--outside-range) .day-wrapper:after{inset-inline-start:50%;border-start-end-radius:var(--calcite-internal-day-size);border-end-end-radius:var(--calcite-internal-day-size);inline-size:calc(var(--calcite-internal-day-size) / 2)}:host([highlighted][start-of-range]) .day-wrapper:before,:host([highlighted][range-edge=start]) .day-wrapper:before,:host([range-hover][range-edge=start]) .day-wrapper:before,:host(:hover[range-hover]:not([selected]).focused--start) .day-wrapper:before,:host([start-of-range].hover--inside-range) .day-wrapper:before,:host(:hover[range-hover].focused--start.hover--outside-range) .day-wrapper:before{inset-inline-end:50%;border-start-start-radius:var(--calcite-internal-day-size);border-end-start-radius:var(--calcite-internal-day-size);inline-size:calc(var(--calcite-internal-day-size) / 2)}:host([highlighted][start-of-range]) .day-wrapper:after,:host([highlighted][range-edge=start]) .day-wrapper:after,:host([range-hover][range-edge=start]) .day-wrapper:after,:host(:hover[range-hover]:not([selected]).focused--start) .day-wrapper:after,:host([start-of-range].hover--inside-range) .day-wrapper:after,:host(:hover[range-hover].focused--start.hover--outside-range) .day-wrapper:after{inset-inline-start:50%}:host([range-hover][start-of-range][range-edge=end]) .day-wrapper:after,:host([range-hover][start-of-range][range-edge=end]) .day-wrapper:before,:host([range-hover][end-of-range][range-edge=start]) .day-wrapper:after,:host([range-hover][end-of-range][range-edge=start]) .day-wrapper:before,:host([start-of-range][range-edge=end].hover--inside-range) .day-wrapper:after,:host([start-of-range][range-edge=end].hover--inside-range) .day-wrapper:before,:host([end-of-range]) .day-wrapper:after,:host([end-of-range]) .day-wrapper:before{content:unset}:host(:hover[range-hover]:not([selected]).focused--start) .day,:host(:hover[range-hover]:not([selected]).focused--end) .day,:host(:hover[range-hover]:not([selected]).focused--start.hover--outside-range) .day,:host(:hover[range-hover]:not([selected]).focused--end.hover--outside-range) .day{box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}@media (forced-colors: active){.day{border-radius:0px}:host([selected]){outline:2px solid canvasText}:host(:hover:not([selected])) .day{border-radius:50%}:host([range][selected]) .day-wrapper:before,:host([range][selected]) .day-wrapper:after,:host([highlighted]) .day-wrapper:before,:host([highlighted]) .day-wrapper:after,:host([range-hover]:not([selected])) .day-wrapper:before,:host([range-hover]:not([selected])) .day-wrapper:after{background-color:highlight}:host([range-hover]) .day-wrapper:before,:host([range-hover]) .day-wrapper:after,:host([range][selected][start-of-range]) .day-wrapper:before,:host([range][selected][start-of-range]) .day-wrapper:after,:host([range][selected][end-of-range]) .day-wrapper:before,:host([range][selected][end-of-range]) .day-wrapper:after{background-color:canvas}}:host([hidden]){display:none}[hidden]{display:none}";

const DatePickerDay = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteDaySelect = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.createEvent)(this, "calciteDaySelect", 6);
    this.calciteInternalDayHover = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.createEvent)(this, "calciteInternalDayHover", 6);
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    this.onClick = () => {
      if (this.disabled) {
        return;
      }
      this.calciteDaySelect.emit();
    };
    this.keyDownHandler = (event) => {
      if ((0,_key_js__WEBPACK_IMPORTED_MODULE_3__.i)(event.key)) {
        !this.disabled && this.calciteDaySelect.emit();
        event.preventDefault();
      }
    };
    this.day = undefined;
    this.dateTimeFormat = undefined;
    this.disabled = false;
    this.currentMonth = false;
    this.selected = false;
    this.highlighted = false;
    this.range = false;
    this.rangeEdge = undefined;
    this.startOfRange = false;
    this.endOfRange = false;
    this.rangeHover = false;
    this.active = false;
    this.scale = undefined;
    this.value = undefined;
  }
  pointerOverHandler() {
    if (this.disabled) {
      return;
    }
    this.calciteInternalDayHover.emit();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.parentDatePickerEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.el, "calcite-date-picker");
  }
  render() {
    const dayId = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.c)(this.value).replaceAll("-", "");
    if (this.parentDatePickerEl) {
      const { numberingSystem, lang: locale } = this.parentDatePickerEl;
      _locale_js__WEBPACK_IMPORTED_MODULE_4__.n.numberFormatOptions = {
        useGrouping: false,
        ...(numberingSystem && { numberingSystem }),
        ...(locale && { locale }),
      };
    }
    const formattedDay = _locale_js__WEBPACK_IMPORTED_MODULE_4__.n.localize(String(this.day));
    const dayLabel = this.dateTimeFormat.format(this.value);
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.Host, { "aria-disabled": (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.t)(this.disabled), "aria-label": dayLabel, "aria-selected": (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.t)(this.active), id: dayId, onClick: this.onClick, onKeyDown: this.keyDownHandler, role: "button" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { "aria-hidden": "true", class: { "day-v-wrapper": true } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: "day-wrapper" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("span", { class: "day" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("span", { class: "text" }, formattedDay))))));
  }
  connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.u)(this, this.isTabbable);
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
  }
  isTabbable() {
    return this.active;
  }
  get el() { return this; }
  static get style() { return datePickerDayCss; }
}, [1, "calcite-date-picker-day", {
    "day": [2],
    "dateTimeFormat": [16],
    "disabled": [516],
    "currentMonth": [516, "current-month"],
    "selected": [516],
    "highlighted": [516],
    "range": [516],
    "rangeEdge": [513, "range-edge"],
    "startOfRange": [516, "start-of-range"],
    "endOfRange": [516, "end-of-range"],
    "rangeHover": [516, "range-hover"],
    "active": [516],
    "scale": [513],
    "value": [16]
  }, [[1, "pointerover", "pointerOverHandler"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-date-picker-day"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-date-picker-day":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DatePickerDay);
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/date.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/date.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/interactive.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/interactive.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ connectInteractive),
/* harmony export */   d: () => (/* binding */ disconnectInteractive),
/* harmony export */   g: () => (/* binding */ getUserAgentString),
/* harmony export */   u: () => (/* binding */ updateHostInteraction)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


function getUserAgentData() {
  return navigator.userAgentData;
}
function getUserAgentString() {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.Build.isBrowser) {
    return "";
  }
  const uaData = getUserAgentData();
  return uaData?.brands
    ? uaData.brands.map(({ brand, version }) => `${brand}/${version}`).join(" ")
    : navigator.userAgent;
}

// ⚠️ browser-sniffing is not a best practice and should be avoided ⚠️
const isFirefox = /firefox/i.test(getUserAgentString());
const interactiveElementToParent = isFirefox
  ? new WeakMap()
  : null;
function interceptedClick() {
  const { disabled } = this;
  if (!disabled) {
    HTMLElement.prototype.click.call(this);
  }
}
function onPointerDown(event) {
  const interactiveElement = event.target;
  if (isFirefox && !interactiveElementToParent.get(interactiveElement)) {
    return;
  }
  const { disabled } = interactiveElement;
  if (disabled) {
    // prevent click from moving focus on host
    event.preventDefault();
  }
}
const nonBubblingWhenDisabledMouseEvents = ["mousedown", "mouseup", "click"];
function onNonBubblingWhenDisabledMouseEvent(event) {
  if (isFirefox && !interactiveElementToParent.get(event.target)) {
    return;
  }
  const { disabled } = event.target;
  // prevent disallowed mouse events from being emitted on the disabled host (per https://github.com/whatwg/html/issues/5886)
  //⚠ we generally avoid stopping propagation of events, but this is needed to adhere to the intended spec changes above ⚠
  if (disabled) {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
}
const captureOnlyOptions = { capture: true };
/**
 * This helper updates the host element to prevent keyboard interaction on its subtree and sets the appropriate aria attribute for accessibility.
 *
 * This should be used in the `componentDidRender` lifecycle hook.
 *
 * **Notes**
 *
 * this util is not needed for simple components whose root element or elements are an interactive component (custom element or native control). For those cases, set the `disabled` props on the root components instead.
 * technically, users can override `tabindex` and restore keyboard navigation, but this will be considered user error
 *
 * @param component
 * @param hostIsTabbable – when set to true or its predicate returns true, the host is tabbable and will be managed by the helper. Set to "managed" for cases where a component's parent determines which item is tabbable (i.e., sets `tabindex` to allow tabbing).
 */
function updateHostInteraction(component, hostIsTabbable = false) {
  if (component.disabled) {
    component.el.setAttribute("tabindex", "-1");
    component.el.setAttribute("aria-disabled", "true");
    if (component.el.contains(document.activeElement)) {
      document.activeElement.blur();
    }
    blockInteraction(component);
    return;
  }
  restoreInteraction(component);
  if (typeof hostIsTabbable === "function") {
    component.el.setAttribute("tabindex", hostIsTabbable.call(component) ? "0" : "-1");
  }
  else if (hostIsTabbable === true) {
    component.el.setAttribute("tabindex", "0");
  }
  else if (hostIsTabbable === false) {
    component.el.removeAttribute("tabindex");
  }
  else ;
  component.el.removeAttribute("aria-disabled");
}
function blockInteraction(component) {
  component.el.click = interceptedClick;
  addInteractionListeners(isFirefox ? getParentElement(component) : component.el);
}
function addInteractionListeners(element) {
  if (!element) {
    // this path is only applicable to Firefox
    return;
  }
  element.addEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => element.addEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
}
function getParentElement(component) {
  return interactiveElementToParent.get(component.el);
}
function restoreInteraction(component) {
  delete component.el.click; // fallback on HTMLElement.prototype.click
  removeInteractionListeners(isFirefox ? getParentElement(component) : component.el);
}
function removeInteractionListeners(element) {
  if (!element) {
    // this path is only applicable to Firefox
    return;
  }
  element.removeEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => element.removeEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
}
/**
 * This utility helps disable components consistently in Firefox.
 *
 * It needs to be called in `connectedCallback` and is only needed for Firefox as it does not call capture event listeners before non-capture ones (see https://bugzilla.mozilla.org/show_bug.cgi?id=1731504).
 *
 * @param component
 */
function connectInteractive(component) {
  if (!component.disabled || !isFirefox) {
    return;
  }
  const parent = component.el.parentElement || component.el; /* assume element is host if it has no parent when connected */
  interactiveElementToParent.set(component.el, parent);
  blockInteraction(component);
}
/**
 * This utility restores interactivity to disabled components consistently in Firefox.
 *
 * It needs to be called in `disconnectedCallback` and is only needed for Firefox as it does not call capture event listeners before non-capture ones (see https://bugzilla.mozilla.org/show_bug.cgi?id=1731504).
 *
 * @param component
 */
function disconnectInteractive(component) {
  if (!isFirefox) {
    return;
  }
  // always remove on disconnect as render or connect will restore it
  interactiveElementToParent.delete(component.el);
  restoreInteraction(component);
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYTJjYzJkMDY3ZDI2YWIxZTIyMzRlZmEzOWU3MDEzOGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytHO0FBQ3BFO0FBQzJDO0FBQzZCO0FBQ25FO0FBQ1M7O0FBRXpELDRDQUE0QyxlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxrQkFBa0IsYUFBYSxlQUFlLCtCQUErQix5R0FBeUcsVUFBVSxlQUFlLGNBQWMsYUFBYSxrQkFBa0IsYUFBYSxzQkFBc0IsbUJBQW1CLHNKQUFzSixvQkFBb0Isa0JBQWtCLGNBQWMsYUFBYSw0Q0FBNEMsNkNBQTZDLEtBQUssbUNBQW1DLGFBQWEsbUJBQW1CLHVCQUF1QixxQkFBcUIsc0NBQXNDLGlCQUFpQixjQUFjLCtCQUErQiwwQkFBMEIsNkZBQTZGLGdCQUFnQixpQ0FBaUMsNENBQTRDLDZDQUE2QyxNQUFNLHFCQUFxQix3QkFBd0IsaUJBQWlCLGlDQUFpQyxnQ0FBZ0MsdUJBQXVCLDhCQUE4QixZQUFZLHNCQUFzQixzQ0FBc0MsaUJBQWlCLGlDQUFpQyxnQ0FBZ0Msc0JBQXNCLDhCQUE4QixZQUFZLHNCQUFzQixzQ0FBc0MsaUJBQWlCLGlDQUFpQyxnQ0FBZ0Msc0JBQXNCLDhCQUE4Qix1QkFBdUIsc0JBQXNCLHFDQUFxQyxrQ0FBa0MsMkNBQTJDLHFHQUFxRyxnREFBZ0QsK0JBQStCLDhCQUE4Qiw4QkFBOEIsbUJBQW1CLG1DQUFtQyx5RUFBeUUsb1BBQW9QLHVCQUF1Qiw4Q0FBOEMseUNBQXlDLHFDQUFxQyxtSEFBbUgsb0RBQW9ELGtIQUFrSCxxQkFBcUIsZ0JBQWdCLGdIQUFnSCx1QkFBdUIsZ0JBQWdCLG9GQUFvRiwrQkFBK0Isa05BQWtOLHNEQUFzRCxpSEFBaUgsZ0RBQWdELHNVQUFzVSxxQkFBcUIsaVVBQWlVLHVCQUF1Qix5REFBeUQsdURBQXVELHVEQUF1RCxnWkFBZ1oscUJBQXFC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O0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvZGF0ZS1waWNrZXItZGF5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9kYXRlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9pbnRlcmFjdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGMgYXMgZGF0ZVRvSVNPIH0gZnJvbSAnLi9kYXRlLmpzJztcbmltcG9ydCB7IGMgYXMgY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5LCB0IGFzIHRvQXJpYUJvb2xlYW4gfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24sIGQgYXMgZGlzY29ubmVjdEludGVyYWN0aXZlIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzQWN0aXZhdGlvbktleSB9IGZyb20gJy4va2V5LmpzJztcbmltcG9ydCB7IG4gYXMgbnVtYmVyU3RyaW5nRm9ybWF0dGVyIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuXG5jb25zdCBkYXRlUGlja2VyRGF5Q3NzID0gXCI6aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7Y3Vyc29yOnBvaW50ZXI7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX0uZGF5LXYtd3JhcHBlcntmbGV4OjEgMSBhdXRvfS5kYXktd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcn06aG9zdChbcmFuZ2VdKSAuZGF5LXdyYXBwZXI6YmVmb3JlLDpob3N0KFtyYW5nZV0pIC5kYXktd3JhcHBlcjphZnRlciw6aG9zdChbcmFuZ2UtaG92ZXJdKSAuZGF5LXdyYXBwZXI6YmVmb3JlLDpob3N0KFtyYW5nZS1ob3Zlcl0pIC5kYXktd3JhcHBlcjphZnRlcntwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO2luc2V0LWJsb2NrOjA7Y29udGVudDpcXFwiXFxcIjtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZGF5LXNpemUpO2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZGF5LXNpemUpfS5kYXl7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyLXJhZGl1czo5OTk5cHg7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtO2xpbmUtaGVpZ2h0OjE7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7YmFja2dyb3VuZDpub25lO2JveC1zaGFkb3c6MCAwIDAgMnB4IHRyYW5zcGFyZW50O2Jsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kYXktc2l6ZSk7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kYXktc2l6ZSl9LnRleHR7bWFyZ2luLWJsb2NrOjFweCAwcHg7bWFyZ2luLWlubGluZS1zdGFydDowcHh9Omhvc3QoW3NjYWxlPXNdKXstLWNhbGNpdGUtaW50ZXJuYWwtZGF5LXNpemU6MjdweH06aG9zdChbc2NhbGU9c10pIC5kYXktdi13cmFwcGVye3BhZGRpbmctYmxvY2s6MC4xMjVyZW19Omhvc3QoW3NjYWxlPXNdKSAuZGF5LXdyYXBwZXJ7cGFkZGluZzowcHh9Omhvc3QoW3NjYWxlPXNdKSAuZGF5e2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMil9Omhvc3QoW3NjYWxlPW1dKXstLWNhbGNpdGUtaW50ZXJuYWwtZGF5LXNpemU6MzNweH06aG9zdChbc2NhbGU9bV0pIC5kYXktdi13cmFwcGVye3BhZGRpbmctYmxvY2s6MC4yNXJlbX06aG9zdChbc2NhbGU9bV0pIC5kYXktd3JhcHBlcntwYWRkaW5nOjBweH06aG9zdChbc2NhbGU9bV0pIC5kYXl7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKX06aG9zdChbc2NhbGU9bF0pey0tY2FsY2l0ZS1pbnRlcm5hbC1kYXktc2l6ZTo0M3B4fTpob3N0KFtzY2FsZT1sXSkgLmRheS12LXdyYXBwZXJ7cGFkZGluZy1ibG9jazowLjI1cmVtfTpob3N0KFtzY2FsZT1sXSkgLmRheS13cmFwcGVye3BhZGRpbmctaW5saW5lOjAuMjVyZW19Omhvc3QoW3NjYWxlPWxdKSAuZGF5e2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKX06aG9zdCg6bm90KFtjdXJyZW50LW1vbnRoXSkpIC5kYXl7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KDpob3Zlcjpub3QoW2Rpc2FibGVkXSk6bm90KFtzZWxlY3RlZF0pKSAuZGF5LDpob3N0KFthY3RpdmVdOm5vdChbcmFuZ2VdKTpub3QoW3NlbGVjdGVkXSkpIC5kYXl7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KDpmb2N1cyksOmhvc3QoW2FjdGl2ZV0pe291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweH06aG9zdCg6Zm9jdXM6bm90KFtkaXNhYmxlZF0pKSAuZGF5e291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIDJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfTpob3N0KFtzZWxlY3RlZF0pIC5kYXl7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KDpmb2N1czpub3QoW2Rpc2FibGVkXSkpIC5kYXksOmhvc3QoW3N0YXJ0LW9mLXJhbmdlXTpub3QoOmZvY3VzKSkgLmRheSw6aG9zdChbZW5kLW9mLXJhbmdlXTpub3QoOmZvY3VzKSkgLmRheXtib3gtc2hhZG93OjAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkpIC5kYXktd3JhcHBlcjpiZWZvcmUsOmhvc3QoW2hpZ2hsaWdodGVkXTpub3QoW3NlbGVjdGVkXSkpIC5kYXktd3JhcHBlcjpiZWZvcmV7aW5zZXQtaW5saW5lLWVuZDo1MCU7Ym9yZGVyLXJhZGl1czowfTpob3N0KFtyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pKSAuZGF5LXdyYXBwZXI6YWZ0ZXIsOmhvc3QoW2hpZ2hsaWdodGVkXTpub3QoW3NlbGVjdGVkXSkpIC5kYXktd3JhcHBlcjphZnRlcntpbnNldC1pbmxpbmUtc3RhcnQ6NTAlO2JvcmRlci1yYWRpdXM6MH06aG9zdChbcmFuZ2UtaG92ZXJdOm5vdChbc2VsZWN0ZWRdKSkgLmRheSw6aG9zdChbaGlnaGxpZ2h0ZWRdOm5vdChbc2VsZWN0ZWRdKSkgLmRheXtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW2hpZ2hsaWdodGVkXSkgLmRheS13cmFwcGVyOmJlZm9yZSw6aG9zdChbaGlnaGxpZ2h0ZWRdKSAuZGF5LXdyYXBwZXI6YWZ0ZXIsOmhvc3QoW3NlbGVjdGVkXTpub3QoLmhvdmVyLS1vdXRzaWRlLXJhbmdlKSkgLmRheS13cmFwcGVyOmJlZm9yZSw6aG9zdChbc2VsZWN0ZWRdOm5vdCguaG92ZXItLW91dHNpZGUtcmFuZ2UpKSAuZGF5LXdyYXBwZXI6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCl9Omhvc3QoW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkpIC5kYXktd3JhcHBlcjpiZWZvcmUsOmhvc3QoW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkpIC5kYXktd3JhcHBlcjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX06aG9zdCg6aG92ZXJbcmFuZ2UtaG92ZXJdOm5vdChbc2VsZWN0ZWRdKS5mb2N1c2VkLS1lbmQpIC5kYXktd3JhcHBlcjpiZWZvcmUsOmhvc3QoW2hpZ2hsaWdodGVkXVtlbmQtb2YtcmFuZ2VdKSAuZGF5LXdyYXBwZXI6YmVmb3JlLDpob3N0KFtoaWdobGlnaHRlZF1bcmFuZ2UtZWRnZT1lbmRdKSAuZGF5LXdyYXBwZXI6YmVmb3JlLDpob3N0KFtyYW5nZS1ob3Zlcl1bcmFuZ2UtZWRnZT1lbmRdKSAuZGF5LXdyYXBwZXI6YmVmb3JlLDpob3N0KDpob3ZlcltyYW5nZS1ob3Zlcl0uZm9jdXNlZC0tZW5kLmhvdmVyLS1vdXRzaWRlLXJhbmdlKSAuZGF5LXdyYXBwZXI6YmVmb3Jle2luc2V0LWlubGluZS1lbmQ6NTAlfTpob3N0KDpob3ZlcltyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pLmZvY3VzZWQtLWVuZCkgLmRheS13cmFwcGVyOmFmdGVyLDpob3N0KFtoaWdobGlnaHRlZF1bZW5kLW9mLXJhbmdlXSkgLmRheS13cmFwcGVyOmFmdGVyLDpob3N0KFtoaWdobGlnaHRlZF1bcmFuZ2UtZWRnZT1lbmRdKSAuZGF5LXdyYXBwZXI6YWZ0ZXIsOmhvc3QoW3JhbmdlLWhvdmVyXVtyYW5nZS1lZGdlPWVuZF0pIC5kYXktd3JhcHBlcjphZnRlciw6aG9zdCg6aG92ZXJbcmFuZ2UtaG92ZXJdLmZvY3VzZWQtLWVuZC5ob3Zlci0tb3V0c2lkZS1yYW5nZSkgLmRheS13cmFwcGVyOmFmdGVye2luc2V0LWlubGluZS1zdGFydDo1MCU7Ym9yZGVyLXN0YXJ0LWVuZC1yYWRpdXM6dmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kYXktc2l6ZSk7Ym9yZGVyLWVuZC1lbmQtcmFkaXVzOnZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZGF5LXNpemUpO2lubGluZS1zaXplOmNhbGModmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kYXktc2l6ZSkgLyAyKX06aG9zdChbaGlnaGxpZ2h0ZWRdW3N0YXJ0LW9mLXJhbmdlXSkgLmRheS13cmFwcGVyOmJlZm9yZSw6aG9zdChbaGlnaGxpZ2h0ZWRdW3JhbmdlLWVkZ2U9c3RhcnRdKSAuZGF5LXdyYXBwZXI6YmVmb3JlLDpob3N0KFtyYW5nZS1ob3Zlcl1bcmFuZ2UtZWRnZT1zdGFydF0pIC5kYXktd3JhcHBlcjpiZWZvcmUsOmhvc3QoOmhvdmVyW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkuZm9jdXNlZC0tc3RhcnQpIC5kYXktd3JhcHBlcjpiZWZvcmUsOmhvc3QoW3N0YXJ0LW9mLXJhbmdlXS5ob3Zlci0taW5zaWRlLXJhbmdlKSAuZGF5LXdyYXBwZXI6YmVmb3JlLDpob3N0KDpob3ZlcltyYW5nZS1ob3Zlcl0uZm9jdXNlZC0tc3RhcnQuaG92ZXItLW91dHNpZGUtcmFuZ2UpIC5kYXktd3JhcHBlcjpiZWZvcmV7aW5zZXQtaW5saW5lLWVuZDo1MCU7Ym9yZGVyLXN0YXJ0LXN0YXJ0LXJhZGl1czp2YXIoLS1jYWxjaXRlLWludGVybmFsLWRheS1zaXplKTtib3JkZXItZW5kLXN0YXJ0LXJhZGl1czp2YXIoLS1jYWxjaXRlLWludGVybmFsLWRheS1zaXplKTtpbmxpbmUtc2l6ZTpjYWxjKHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZGF5LXNpemUpIC8gMil9Omhvc3QoW2hpZ2hsaWdodGVkXVtzdGFydC1vZi1yYW5nZV0pIC5kYXktd3JhcHBlcjphZnRlciw6aG9zdChbaGlnaGxpZ2h0ZWRdW3JhbmdlLWVkZ2U9c3RhcnRdKSAuZGF5LXdyYXBwZXI6YWZ0ZXIsOmhvc3QoW3JhbmdlLWhvdmVyXVtyYW5nZS1lZGdlPXN0YXJ0XSkgLmRheS13cmFwcGVyOmFmdGVyLDpob3N0KDpob3ZlcltyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pLmZvY3VzZWQtLXN0YXJ0KSAuZGF5LXdyYXBwZXI6YWZ0ZXIsOmhvc3QoW3N0YXJ0LW9mLXJhbmdlXS5ob3Zlci0taW5zaWRlLXJhbmdlKSAuZGF5LXdyYXBwZXI6YWZ0ZXIsOmhvc3QoOmhvdmVyW3JhbmdlLWhvdmVyXS5mb2N1c2VkLS1zdGFydC5ob3Zlci0tb3V0c2lkZS1yYW5nZSkgLmRheS13cmFwcGVyOmFmdGVye2luc2V0LWlubGluZS1zdGFydDo1MCV9Omhvc3QoW3JhbmdlLWhvdmVyXVtzdGFydC1vZi1yYW5nZV1bcmFuZ2UtZWRnZT1lbmRdKSAuZGF5LXdyYXBwZXI6YWZ0ZXIsOmhvc3QoW3JhbmdlLWhvdmVyXVtzdGFydC1vZi1yYW5nZV1bcmFuZ2UtZWRnZT1lbmRdKSAuZGF5LXdyYXBwZXI6YmVmb3JlLDpob3N0KFtyYW5nZS1ob3Zlcl1bZW5kLW9mLXJhbmdlXVtyYW5nZS1lZGdlPXN0YXJ0XSkgLmRheS13cmFwcGVyOmFmdGVyLDpob3N0KFtyYW5nZS1ob3Zlcl1bZW5kLW9mLXJhbmdlXVtyYW5nZS1lZGdlPXN0YXJ0XSkgLmRheS13cmFwcGVyOmJlZm9yZSw6aG9zdChbc3RhcnQtb2YtcmFuZ2VdW3JhbmdlLWVkZ2U9ZW5kXS5ob3Zlci0taW5zaWRlLXJhbmdlKSAuZGF5LXdyYXBwZXI6YWZ0ZXIsOmhvc3QoW3N0YXJ0LW9mLXJhbmdlXVtyYW5nZS1lZGdlPWVuZF0uaG92ZXItLWluc2lkZS1yYW5nZSkgLmRheS13cmFwcGVyOmJlZm9yZSw6aG9zdChbZW5kLW9mLXJhbmdlXSkgLmRheS13cmFwcGVyOmFmdGVyLDpob3N0KFtlbmQtb2YtcmFuZ2VdKSAuZGF5LXdyYXBwZXI6YmVmb3Jle2NvbnRlbnQ6dW5zZXR9Omhvc3QoOmhvdmVyW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkuZm9jdXNlZC0tc3RhcnQpIC5kYXksOmhvc3QoOmhvdmVyW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkuZm9jdXNlZC0tZW5kKSAuZGF5LDpob3N0KDpob3ZlcltyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pLmZvY3VzZWQtLXN0YXJ0LmhvdmVyLS1vdXRzaWRlLXJhbmdlKSAuZGF5LDpob3N0KDpob3ZlcltyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pLmZvY3VzZWQtLWVuZC5ob3Zlci0tb3V0c2lkZS1yYW5nZSkgLmRheXtib3gtc2hhZG93OjAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9QG1lZGlhIChmb3JjZWQtY29sb3JzOiBhY3RpdmUpey5kYXl7Ym9yZGVyLXJhZGl1czowcHh9Omhvc3QoW3NlbGVjdGVkXSl7b3V0bGluZToycHggc29saWQgY2FudmFzVGV4dH06aG9zdCg6aG92ZXI6bm90KFtzZWxlY3RlZF0pKSAuZGF5e2JvcmRlci1yYWRpdXM6NTAlfTpob3N0KFtyYW5nZV1bc2VsZWN0ZWRdKSAuZGF5LXdyYXBwZXI6YmVmb3JlLDpob3N0KFtyYW5nZV1bc2VsZWN0ZWRdKSAuZGF5LXdyYXBwZXI6YWZ0ZXIsOmhvc3QoW2hpZ2hsaWdodGVkXSkgLmRheS13cmFwcGVyOmJlZm9yZSw6aG9zdChbaGlnaGxpZ2h0ZWRdKSAuZGF5LXdyYXBwZXI6YWZ0ZXIsOmhvc3QoW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkpIC5kYXktd3JhcHBlcjpiZWZvcmUsOmhvc3QoW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkpIC5kYXktd3JhcHBlcjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOmhpZ2hsaWdodH06aG9zdChbcmFuZ2UtaG92ZXJdKSAuZGF5LXdyYXBwZXI6YmVmb3JlLDpob3N0KFtyYW5nZS1ob3Zlcl0pIC5kYXktd3JhcHBlcjphZnRlciw6aG9zdChbcmFuZ2VdW3NlbGVjdGVkXVtzdGFydC1vZi1yYW5nZV0pIC5kYXktd3JhcHBlcjpiZWZvcmUsOmhvc3QoW3JhbmdlXVtzZWxlY3RlZF1bc3RhcnQtb2YtcmFuZ2VdKSAuZGF5LXdyYXBwZXI6YWZ0ZXIsOmhvc3QoW3JhbmdlXVtzZWxlY3RlZF1bZW5kLW9mLXJhbmdlXSkgLmRheS13cmFwcGVyOmJlZm9yZSw6aG9zdChbcmFuZ2VdW3NlbGVjdGVkXVtlbmQtb2YtcmFuZ2VdKSAuZGF5LXdyYXBwZXI6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjpjYW52YXN9fTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBEYXRlUGlja2VyRGF5ID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVEYXlTZWxlY3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVEYXlTZWxlY3RcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEYXlIb3ZlciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsRGF5SG92ZXJcIiwgNik7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMub25DbGljayA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2FsY2l0ZURheVNlbGVjdC5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoaXNBY3RpdmF0aW9uS2V5KGV2ZW50LmtleSkpIHtcbiAgICAgICAgIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5jYWxjaXRlRGF5U2VsZWN0LmVtaXQoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuZGF5ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGF0ZVRpbWVGb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudE1vbnRoID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJhbmdlID0gZmFsc2U7XG4gICAgdGhpcy5yYW5nZUVkZ2UgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGFydE9mUmFuZ2UgPSBmYWxzZTtcbiAgICB0aGlzLmVuZE9mUmFuZ2UgPSBmYWxzZTtcbiAgICB0aGlzLnJhbmdlSG92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICBwb2ludGVyT3ZlckhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEYXlIb3Zlci5lbWl0KCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5wYXJlbnREYXRlUGlja2VyRWwgPSBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkodGhpcy5lbCwgXCJjYWxjaXRlLWRhdGUtcGlja2VyXCIpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkYXlJZCA9IGRhdGVUb0lTTyh0aGlzLnZhbHVlKS5yZXBsYWNlQWxsKFwiLVwiLCBcIlwiKTtcbiAgICBpZiAodGhpcy5wYXJlbnREYXRlUGlja2VyRWwpIHtcbiAgICAgIGNvbnN0IHsgbnVtYmVyaW5nU3lzdGVtLCBsYW5nOiBsb2NhbGUgfSA9IHRoaXMucGFyZW50RGF0ZVBpY2tlckVsO1xuICAgICAgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICAgIHVzZUdyb3VwaW5nOiBmYWxzZSxcbiAgICAgICAgLi4uKG51bWJlcmluZ1N5c3RlbSAmJiB7IG51bWJlcmluZ1N5c3RlbSB9KSxcbiAgICAgICAgLi4uKGxvY2FsZSAmJiB7IGxvY2FsZSB9KSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGZvcm1hdHRlZERheSA9IG51bWJlclN0cmluZ0Zvcm1hdHRlci5sb2NhbGl6ZShTdHJpbmcodGhpcy5kYXkpKTtcbiAgICBjb25zdCBkYXlMYWJlbCA9IHRoaXMuZGF0ZVRpbWVGb3JtYXQuZm9ybWF0KHRoaXMudmFsdWUpO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1kaXNhYmxlZFwiOiB0b0FyaWFCb29sZWFuKHRoaXMuZGlzYWJsZWQpLCBcImFyaWEtbGFiZWxcIjogZGF5TGFiZWwsIFwiYXJpYS1zZWxlY3RlZFwiOiB0b0FyaWFCb29sZWFuKHRoaXMuYWN0aXZlKSwgaWQ6IGRheUlkLCBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssIG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlciwgcm9sZTogXCJidXR0b25cIiB9LCBoKFwiZGl2XCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IHsgXCJkYXktdi13cmFwcGVyXCI6IHRydWUgfSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiZGF5LXdyYXBwZXJcIiB9LCBoKFwic3BhblwiLCB7IGNsYXNzOiBcImRheVwiIH0sIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwidGV4dFwiIH0sIGZvcm1hdHRlZERheSkpKSkpKTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzLCB0aGlzLmlzVGFiYmFibGUpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgfVxuICBpc1RhYmJhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBkYXRlUGlja2VyRGF5Q3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWRhdGUtcGlja2VyLWRheVwiLCB7XG4gICAgXCJkYXlcIjogWzJdLFxuICAgIFwiZGF0ZVRpbWVGb3JtYXRcIjogWzE2XSxcbiAgICBcImRpc2FibGVkXCI6IFs1MTZdLFxuICAgIFwiY3VycmVudE1vbnRoXCI6IFs1MTYsIFwiY3VycmVudC1tb250aFwiXSxcbiAgICBcInNlbGVjdGVkXCI6IFs1MTZdLFxuICAgIFwiaGlnaGxpZ2h0ZWRcIjogWzUxNl0sXG4gICAgXCJyYW5nZVwiOiBbNTE2XSxcbiAgICBcInJhbmdlRWRnZVwiOiBbNTEzLCBcInJhbmdlLWVkZ2VcIl0sXG4gICAgXCJzdGFydE9mUmFuZ2VcIjogWzUxNiwgXCJzdGFydC1vZi1yYW5nZVwiXSxcbiAgICBcImVuZE9mUmFuZ2VcIjogWzUxNiwgXCJlbmQtb2YtcmFuZ2VcIl0sXG4gICAgXCJyYW5nZUhvdmVyXCI6IFs1MTYsIFwicmFuZ2UtaG92ZXJcIl0sXG4gICAgXCJhY3RpdmVcIjogWzUxNl0sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcInZhbHVlXCI6IFsxNl1cbiAgfSwgW1sxLCBcInBvaW50ZXJvdmVyXCIsIFwicG9pbnRlck92ZXJIYW5kbGVyXCJdXV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1kYXRlLXBpY2tlci1kYXlcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtZGF0ZS1waWNrZXItZGF5XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgRGF0ZVBpY2tlckRheSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgRGF0ZVBpY2tlckRheSBhcyBELCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IG4gYXMgbnVtYmVyU3RyaW5nRm9ybWF0dGVyIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuXG4vKipcbiAqIENoZWNrIGlmIGRhdGUgaXMgd2l0aGluIGEgbWluIGFuZCBtYXhcbiAqXG4gKiBAcGFyYW0gZGF0ZVxuICogQHBhcmFtIG1pblxuICogQHBhcmFtIG1heFxuICovXG5mdW5jdGlvbiBpblJhbmdlKGRhdGUsIG1pbiwgbWF4KSB7XG4gIGlmICghZGF0ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB0aW1lID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGNvbnN0IGFmdGVyTWluID0gIShtaW4gaW5zdGFuY2VvZiBEYXRlKSB8fCB0aW1lID49IG1pbi5nZXRUaW1lKCk7XG4gIGNvbnN0IGJlZm9yZU1heCA9ICEobWF4IGluc3RhbmNlb2YgRGF0ZSkgfHwgdGltZSA8PSBtYXguZ2V0VGltZSgpO1xuICByZXR1cm4gYWZ0ZXJNaW4gJiYgYmVmb3JlTWF4O1xufVxuLyoqXG4gKiBFbnN1cmVzIGRhdGUgaXMgd2l0aGluIHJhbmdlLFxuICogcmV0dXJucyBtaW4gb3IgbWF4IGlmIG91dCBvZiBib3VuZHNcbiAqXG4gKiBAcGFyYW0gZGF0ZVxuICogQHBhcmFtIG1pblxuICogQHBhcmFtIG1heFxuICovXG5mdW5jdGlvbiBkYXRlRnJvbVJhbmdlKGRhdGUsIG1pbiwgbWF4KSB7XG4gIGlmICghKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHRpbWUgPSBkYXRlLmdldFRpbWUoKTtcbiAgY29uc3QgYmVmb3JlTWluID0gbWluIGluc3RhbmNlb2YgRGF0ZSAmJiB0aW1lIDwgbWluLmdldFRpbWUoKTtcbiAgY29uc3QgYWZ0ZXJNYXggPSBtYXggaW5zdGFuY2VvZiBEYXRlICYmIHRpbWUgPiBtYXguZ2V0VGltZSgpO1xuICBpZiAoYmVmb3JlTWluKSB7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuICBpZiAoYWZ0ZXJNYXgpIHtcbiAgICByZXR1cm4gbWF4O1xuICB9XG4gIHJldHVybiBkYXRlO1xufVxuLyoqXG4gKiBQYXJzZSBhbiBpc284NjAxIHN0cmluZyAoWVlZWS1tbS1kZCkgaW50byBhIHZhbGlkIGRhdGUuXG4gKiBUT0RPOiBoYW5kbGUgdGltZSB3aGVuIHRpbWUgb2YgZGF5IFVJIGlzIGFkZGVkXG4gKlxuICogQHBhcmFtIGlzbzg2MDFcbiAqIEBwYXJhbSBpc0VuZERhdGVcbiAqL1xuZnVuY3Rpb24gZGF0ZUZyb21JU08oaXNvODYwMSwgaXNFbmREYXRlID0gZmFsc2UpIHtcbiAgaWYgKGlzbzg2MDEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIGlzbzg2MDE7XG4gIH1cbiAgaWYgKCFpc284NjAxIHx8IHR5cGVvZiBpc284NjAxICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgZCA9IGlzbzg2MDEuc3BsaXQoL1s6IFQtXS8pLm1hcChwYXJzZUZsb2F0KTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRbMF0sIChkWzFdIHx8IDEpIC0gMSwgZFsyXSB8fCAxKTtcbiAgZGF0ZS5zZXRGdWxsWWVhcihkWzBdKTtcbiAgaWYgKGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBJU08gODYwMSBkYXRlOiBcIiR7aXNvODYwMX1cImApO1xuICB9XG4gIGlmIChpc0VuZERhdGUpIHtcbiAgICByZXR1cm4gc2V0RW5kT2ZEYXkoZGF0ZSk7XG4gIH1cbiAgcmV0dXJuIGRhdGU7XG59XG4vKipcbiAqIFBhcnNlIGEgbG9jYWxpemVkIGRhdGUgc3RyaW5nIGludG8gYSB2YWxpZCBEYXRlLlxuICogcmV0dXJuIGZhbHNlIGlmIGRhdGUgaXMgaW52YWxpZCwgb3Igb3V0IG9mIHJhbmdlXG4gKlxuICogQHBhcmFtIHZhbHVlXG4gKiBAcGFyYW0gbG9jYWxlRGF0YVxuICovXG5mdW5jdGlvbiBkYXRlRnJvbUxvY2FsaXplZFN0cmluZyh2YWx1ZSwgbG9jYWxlRGF0YSkge1xuICBpZiAoIWxvY2FsZURhdGEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB7IHNlcGFyYXRvciB9ID0gbG9jYWxlRGF0YTtcbiAgY29uc3QgcGFydHMgPSBwYXJzZURhdGVTdHJpbmcodmFsdWUsIGxvY2FsZURhdGEpO1xuICBjb25zdCB7IGRheSwgbW9udGggfSA9IHBhcnRzO1xuICBjb25zdCB5ZWFyID0gcGFyc2VDYWxlbmRhclllYXIocGFydHMueWVhciwgbG9jYWxlRGF0YSk7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcbiAgY29uc3QgdmFsaWREYXkgPSBkYXkgPiAwO1xuICBjb25zdCB2YWxpZE1vbnRoID0gbW9udGggPiAtMTtcbiAgY29uc3QgdmFsaWREYXRlID0gIWlzTmFOKGRhdGUuZ2V0VGltZSgpKTtcbiAgY29uc3QgdmFsaWRMZW5ndGggPSB2YWx1ZS5zcGxpdChzZXBhcmF0b3IpLmZpbHRlcigoYykgPT4gYykubGVuZ3RoID4gMjtcbiAgY29uc3QgdmFsaWRZZWFyID0geWVhci50b1N0cmluZygpLmxlbmd0aCA+IDA7XG4gIGlmICh2YWxpZERheSAmJiB2YWxpZE1vbnRoICYmIHZhbGlkRGF0ZSAmJiB2YWxpZExlbmd0aCAmJiB2YWxpZFllYXIpIHtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHBhcnNlQ2FsZW5kYXJZZWFyKHllYXIsIGxvY2FsZURhdGEpIHtcbiAgcmV0dXJuIHByb2Nlc3NDYWxlbmRhclllYXIoeWVhciwgbG9jYWxlRGF0YSwgXCJyZWFkXCIpO1xufVxuZnVuY3Rpb24gZm9ybWF0Q2FsZW5kYXJZZWFyKHllYXIsIGxvY2FsZURhdGEpIHtcbiAgcmV0dXJuIHByb2Nlc3NDYWxlbmRhclllYXIoeWVhciwgbG9jYWxlRGF0YSwgXCJ3cml0ZVwiKTtcbn1cbmZ1bmN0aW9uIHByb2Nlc3NDYWxlbmRhclllYXIoeWVhciwgbG9jYWxlRGF0YSwgbW9kZSkge1xuICBpZiAobG9jYWxlRGF0YVtcImRlZmF1bHQtY2FsZW5kYXJcIl0gIT09IFwiYnVkZGhpc3RcIikge1xuICAgIHJldHVybiB5ZWFyO1xuICB9XG4gIGNvbnN0IEJVRERISVNUX0NBTEVOREFSX1lFQVJfT0ZGU0VUID0gNTQzO1xuICBjb25zdCB5ZWFyT2Zmc2V0ID0gQlVEREhJU1RfQ0FMRU5EQVJfWUVBUl9PRkZTRVQgKiAobW9kZSA9PT0gXCJyZWFkXCIgPyAtMSA6IDEpO1xuICByZXR1cm4geWVhciArIHllYXJPZmZzZXQ7XG59XG4vKipcbiAqIFJldHJpZXZlIGRheSwgbW9udGgsIGFuZCB5ZWFyIHN0cmluZ3MgZnJvbSBhIGxvY2FsaXplZCBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gc3RyaW5nXG4gKiBAcGFyYW0gbG9jYWxlRGF0YVxuICovXG5mdW5jdGlvbiBkYXRlUGFydHNGcm9tTG9jYWxpemVkU3RyaW5nKHN0cmluZywgbG9jYWxlRGF0YSkge1xuICBjb25zdCB7IHNlcGFyYXRvciwgdW5pdE9yZGVyIH0gPSBsb2NhbGVEYXRhO1xuICBjb25zdCBvcmRlciA9IGdldE9yZGVyKHVuaXRPcmRlcik7XG4gIGNvbnN0IHZhbHVlcyA9IHN0cmluZy5zcGxpdChzZXBhcmF0b3IpLm1hcCgocGFydCkgPT4gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmRlbG9jYWxpemUocGFydCkpO1xuICBjb25zdCBkYXkgPSB2YWx1ZXNbb3JkZXIuaW5kZXhPZihcImRcIildO1xuICBjb25zdCBtb250aCA9IHZhbHVlc1tvcmRlci5pbmRleE9mKFwibVwiKV07XG4gIGNvbnN0IHllYXIgPSB2YWx1ZXNbb3JkZXIuaW5kZXhPZihcInlcIildO1xuICByZXR1cm4geyBkYXksIG1vbnRoLCB5ZWFyIH07XG59XG4vKipcbiAqIFJldHVybiBmaXJzdCBwb3J0aW9uIG9mIElTTyBzdHJpbmcgKFlZWVktbW0tZGQpXG4gKlxuICogQHBhcmFtIGRhdGVcbiAqL1xuZnVuY3Rpb24gZGF0ZVRvSVNPKGRhdGUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpIC0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuICB9XG4gIHJldHVybiBcIlwiO1xufVxuLyoqXG4gKiBSZXRyaWV2ZSBkYXksIG1vbnRoLCBhbmQgeWVhciBzdHJpbmdzIGZyb20gYSBJU08gc3RyaW5nIChZWVlZLW1tLWRkKVxuICpcbiAqIEBwYXJhbSBzdHJpbmdcbiAqIEBwYXJhbSBpc29EYXRlXG4gKi9cbmZ1bmN0aW9uIGRhdGVQYXJ0c0Zyb21JU08oaXNvRGF0ZSkge1xuICBjb25zdCBkYXRlUGFydHMgPSBpc29EYXRlLnNwbGl0KFwiLVwiKTtcbiAgcmV0dXJuIHsgZGF5OiBkYXRlUGFydHNbMl0sIG1vbnRoOiBkYXRlUGFydHNbMV0sIHllYXI6IGRhdGVQYXJ0c1swXSB9O1xufVxuLyoqXG4gKiBDaGVjayBpZiB0d28gZGF0ZXMgYXJlIHRoZSBzYW1lIGRheSwgbW9udGgsIHllYXJcbiAqXG4gKiBAcGFyYW0gZDFcbiAqIEBwYXJhbSBkMlxuICovXG5mdW5jdGlvbiBzYW1lRGF0ZShkMSwgZDIpIHtcbiAgcmV0dXJuIChkMSBpbnN0YW5jZW9mIERhdGUgJiZcbiAgICBkMiBpbnN0YW5jZW9mIERhdGUgJiZcbiAgICBkMS5nZXREYXRlKCkgPT09IGQyLmdldERhdGUoKSAmJlxuICAgIGQxLmdldE1vbnRoKCkgPT09IGQyLmdldE1vbnRoKCkgJiZcbiAgICBkMS5nZXRGdWxsWWVhcigpID09PSBkMi5nZXRGdWxsWWVhcigpKTtcbn1cbi8qKlxuICogR2V0IGEgZGF0ZSBvbmUgbW9udGggaW4gdGhlIHBhc3RcbiAqXG4gKiBAcGFyYW0gZGF0ZVxuICovXG5mdW5jdGlvbiBwcmV2TW9udGgoZGF0ZSkge1xuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgY29uc3QgbmV4dERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgbmV4dERhdGUuc2V0TW9udGgobW9udGggLSAxKTtcbiAgLy8gZGF0ZSBkb2Vzbid0IGV4aXN0IGluIG5ldyBtb250aCwgdXNlIGxhc3QgZGF5XG4gIGlmIChtb250aCA9PT0gbmV4dERhdGUuZ2V0TW9udGgoKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoLCAwKTtcbiAgfVxuICByZXR1cm4gbmV4dERhdGU7XG59XG4vKipcbiAqIEdldCBhIGRhdGUgb25lIG1vbnRoIGluIHRoZSBmdXR1cmVcbiAqXG4gKiBAcGFyYW0gZGF0ZVxuICovXG5mdW5jdGlvbiBuZXh0TW9udGgoZGF0ZSkge1xuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgY29uc3QgbmV4dERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgbmV4dERhdGUuc2V0TW9udGgobW9udGggKyAxKTtcbiAgLy8gZGF0ZSBkb2Vzbid0IGV4aXN0IGluIG5ldyBtb250aCwgdXNlIGxhc3QgZGF5XG4gIGlmICgobW9udGggKyAyKSAlIDcgPT09IG5leHREYXRlLmdldE1vbnRoKCkgJSA3KSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGggKyAyLCAwKTtcbiAgfVxuICByZXR1cm4gbmV4dERhdGU7XG59XG4vKipcbiAqIFBhcnNlIG51bWVyaWMgdW5pdHMgZm9yIGRheSwgbW9udGgsIGFuZCB5ZWFyIGZyb20gYSBsb2NhbGl6ZWQgc3RyaW5nXG4gKiBtb250aCBzdGFydHMgYXQgMCAoY2FuIHBhc3MgdG8gZGF0ZSBjb25zdHJ1Y3RvcilcbiAqIGNhbiByZXR1cm4gdmFsdWVzIGFzIG51bWJlciBvciBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gc3RyaW5nXG4gKiBAcGFyYW0gbG9jYWxlRGF0YVxuICovXG5mdW5jdGlvbiBwYXJzZURhdGVTdHJpbmcoc3RyaW5nLCBsb2NhbGVEYXRhKSB7XG4gIGNvbnN0IHsgZGF5LCBtb250aCwgeWVhciB9ID0gZGF0ZVBhcnRzRnJvbUxvY2FsaXplZFN0cmluZyhzdHJpbmcsIGxvY2FsZURhdGEpO1xuICByZXR1cm4ge1xuICAgIGRheTogcGFyc2VJbnQoZGF5KSxcbiAgICBtb250aDogcGFyc2VJbnQobW9udGgpIC0gMSxcbiAgICB5ZWFyOiBwYXJzZUludCh5ZWFyKSxcbiAgfTtcbn1cbi8qKlxuICogQmFzZWQgb24gdGhlIHVuaXRPcmRlciBzdHJpbmcsIGZpbmQgb3JkZXIgb2YgbW9udGgsIGRheSwgYW5kIHllYXIgZm9yIGxvY2FsZVxuICpcbiAqIEBwYXJhbSB1bml0T3JkZXJcbiAqL1xuZnVuY3Rpb24gZ2V0T3JkZXIodW5pdE9yZGVyKSB7XG4gIGNvbnN0IHNpZ25pZmllcnMgPSBbXCJkXCIsIFwibVwiLCBcInlcIl07XG4gIGNvbnN0IG9yZGVyID0gdW5pdE9yZGVyLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBzaWduaWZpZXJzLnNvcnQoKGEsIGIpID0+IG9yZGVyLmluZGV4T2YoYSkgLSBvcmRlci5pbmRleE9mKGIpKTtcbn1cbi8qKlxuICogR2V0IG51bWJlciBvZiBkYXlzIGJldHdlZW4gdHdvIGRhdGVzXG4gKlxuICogQHBhcmFtIGRhdGUxXG4gKiBAcGFyYW0gZGF0ZTJcbiAqL1xuZnVuY3Rpb24gZ2V0RGF5c0RpZmYoZGF0ZTEsIGRhdGUyKSB7XG4gIGNvbnN0IHRzMSA9IGRhdGUxLmdldFRpbWUoKTtcbiAgY29uc3QgdHMyID0gZGF0ZTIuZ2V0VGltZSgpO1xuICByZXR1cm4gKHRzMSAtIHRzMikgLyAoMTAwMCAqIDM2MDAgKiAyNCk7XG59XG4vKipcbiAqIFNldCB0aW1lIG9mIHRoZSBkYXkgdG8gdGhlIGVuZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUgRGF0ZS5cbiAqIEByZXR1cm5zIHtEYXRlfSBEYXRlIHdpdGggdGltZSBzZXQgdG8gZW5kIG9mIGRheSAuXG4gKi9cbmZ1bmN0aW9uIHNldEVuZE9mRGF5KGRhdGUpIHtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IHsgZGF0ZVBhcnRzRnJvbUxvY2FsaXplZFN0cmluZyBhcyBhLCBkYXRlRnJvbUxvY2FsaXplZFN0cmluZyBhcyBiLCBkYXRlVG9JU08gYXMgYywgZGF0ZVBhcnRzRnJvbUlTTyBhcyBkLCBkYXRlRnJvbUlTTyBhcyBlLCBkYXRlRnJvbVJhbmdlIGFzIGYsIGdldERheXNEaWZmIGFzIGcsIHNhbWVEYXRlIGFzIGgsIGluUmFuZ2UgYXMgaSwgZ2V0T3JkZXIgYXMgaiwgZm9ybWF0Q2FsZW5kYXJZZWFyIGFzIGssIHBhcnNlQ2FsZW5kYXJZZWFyIGFzIGwsIG5leHRNb250aCBhcyBuLCBwcmV2TW9udGggYXMgcCwgc2V0RW5kT2ZEYXkgYXMgcyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5cbmZ1bmN0aW9uIGdldFVzZXJBZ2VudERhdGEoKSB7XG4gIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50RGF0YTtcbn1cbmZ1bmN0aW9uIGdldFVzZXJBZ2VudFN0cmluZygpIHtcbiAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICBjb25zdCB1YURhdGEgPSBnZXRVc2VyQWdlbnREYXRhKCk7XG4gIHJldHVybiB1YURhdGE/LmJyYW5kc1xuICAgID8gdWFEYXRhLmJyYW5kcy5tYXAoKHsgYnJhbmQsIHZlcnNpb24gfSkgPT4gYCR7YnJhbmR9LyR7dmVyc2lvbn1gKS5qb2luKFwiIFwiKVxuICAgIDogbmF2aWdhdG9yLnVzZXJBZ2VudDtcbn1cblxuLy8g4pqg77iPIGJyb3dzZXItc25pZmZpbmcgaXMgbm90IGEgYmVzdCBwcmFjdGljZSBhbmQgc2hvdWxkIGJlIGF2b2lkZWQg4pqg77iPXG5jb25zdCBpc0ZpcmVmb3ggPSAvZmlyZWZveC9pLnRlc3QoZ2V0VXNlckFnZW50U3RyaW5nKCkpO1xuY29uc3QgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQgPSBpc0ZpcmVmb3hcbiAgPyBuZXcgV2Vha01hcCgpXG4gIDogbnVsbDtcbmZ1bmN0aW9uIGludGVyY2VwdGVkQ2xpY2soKSB7XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXM7XG4gIGlmICghZGlzYWJsZWQpIHtcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2suY2FsbCh0aGlzKTtcbiAgfVxufVxuZnVuY3Rpb24gb25Qb2ludGVyRG93bihldmVudCkge1xuICBjb25zdCBpbnRlcmFjdGl2ZUVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gIGlmIChpc0ZpcmVmb3ggJiYgIWludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChpbnRlcmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IGludGVyYWN0aXZlRWxlbWVudDtcbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgLy8gcHJldmVudCBjbGljayBmcm9tIG1vdmluZyBmb2N1cyBvbiBob3N0XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuY29uc3Qgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cyA9IFtcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJjbGlja1wiXTtcbmZ1bmN0aW9uIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50KGV2ZW50KSB7XG4gIGlmIChpc0ZpcmVmb3ggJiYgIWludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChldmVudC50YXJnZXQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IGV2ZW50LnRhcmdldDtcbiAgLy8gcHJldmVudCBkaXNhbGxvd2VkIG1vdXNlIGV2ZW50cyBmcm9tIGJlaW5nIGVtaXR0ZWQgb24gdGhlIGRpc2FibGVkIGhvc3QgKHBlciBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2h0bWwvaXNzdWVzLzU4ODYpXG4gIC8v4pqgIHdlIGdlbmVyYWxseSBhdm9pZCBzdG9wcGluZyBwcm9wYWdhdGlvbiBvZiBldmVudHMsIGJ1dCB0aGlzIGlzIG5lZWRlZCB0byBhZGhlcmUgdG8gdGhlIGludGVuZGVkIHNwZWMgY2hhbmdlcyBhYm92ZSDimqBcbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuY29uc3QgY2FwdHVyZU9ubHlPcHRpb25zID0geyBjYXB0dXJlOiB0cnVlIH07XG4vKipcbiAqIFRoaXMgaGVscGVyIHVwZGF0ZXMgdGhlIGhvc3QgZWxlbWVudCB0byBwcmV2ZW50IGtleWJvYXJkIGludGVyYWN0aW9uIG9uIGl0cyBzdWJ0cmVlIGFuZCBzZXRzIHRoZSBhcHByb3ByaWF0ZSBhcmlhIGF0dHJpYnV0ZSBmb3IgYWNjZXNzaWJpbGl0eS5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkUmVuZGVyYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiAqKk5vdGVzKipcbiAqXG4gKiB0aGlzIHV0aWwgaXMgbm90IG5lZWRlZCBmb3Igc2ltcGxlIGNvbXBvbmVudHMgd2hvc2Ugcm9vdCBlbGVtZW50IG9yIGVsZW1lbnRzIGFyZSBhbiBpbnRlcmFjdGl2ZSBjb21wb25lbnQgKGN1c3RvbSBlbGVtZW50IG9yIG5hdGl2ZSBjb250cm9sKS4gRm9yIHRob3NlIGNhc2VzLCBzZXQgdGhlIGBkaXNhYmxlZGAgcHJvcHMgb24gdGhlIHJvb3QgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogdGVjaG5pY2FsbHksIHVzZXJzIGNhbiBvdmVycmlkZSBgdGFiaW5kZXhgIGFuZCByZXN0b3JlIGtleWJvYXJkIG5hdmlnYXRpb24sIGJ1dCB0aGlzIHdpbGwgYmUgY29uc2lkZXJlZCB1c2VyIGVycm9yXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGhvc3RJc1RhYmJhYmxlIOKAkyB3aGVuIHNldCB0byB0cnVlIG9yIGl0cyBwcmVkaWNhdGUgcmV0dXJucyB0cnVlLCB0aGUgaG9zdCBpcyB0YWJiYWJsZSBhbmQgd2lsbCBiZSBtYW5hZ2VkIGJ5IHRoZSBoZWxwZXIuIFNldCB0byBcIm1hbmFnZWRcIiBmb3IgY2FzZXMgd2hlcmUgYSBjb21wb25lbnQncyBwYXJlbnQgZGV0ZXJtaW5lcyB3aGljaCBpdGVtIGlzIHRhYmJhYmxlIChpLmUuLCBzZXRzIGB0YWJpbmRleGAgdG8gYWxsb3cgdGFiYmluZykuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbihjb21wb25lbnQsIGhvc3RJc1RhYmJhYmxlID0gZmFsc2UpIHtcbiAgaWYgKGNvbXBvbmVudC5kaXNhYmxlZCkge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcbiAgICBpZiAoY29tcG9uZW50LmVsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gICAgYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpO1xuICAgIHJldHVybjtcbiAgfVxuICByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbiAgaWYgKHR5cGVvZiBob3N0SXNUYWJiYWJsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIGhvc3RJc1RhYmJhYmxlLmNhbGwoY29tcG9uZW50KSA/IFwiMFwiIDogXCItMVwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gdHJ1ZSkge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gIH1cbiAgZWxzZSBpZiAoaG9zdElzVGFiYmFibGUgPT09IGZhbHNlKSB7XG4gICAgY29tcG9uZW50LmVsLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xuICB9XG4gIGVsc2UgO1xuICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiKTtcbn1cbmZ1bmN0aW9uIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5lbC5jbGljayA9IGludGVyY2VwdGVkQ2xpY2s7XG4gIGFkZEludGVyYWN0aW9uTGlzdGVuZXJzKGlzRmlyZWZveCA/IGdldFBhcmVudEVsZW1lbnQoY29tcG9uZW50KSA6IGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiBhZGRJbnRlcmFjdGlvbkxpc3RlbmVycyhlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIC8vIHRoaXMgcGF0aCBpcyBvbmx5IGFwcGxpY2FibGUgdG8gRmlyZWZveFxuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50LCBjYXB0dXJlT25seU9wdGlvbnMpKTtcbn1cbmZ1bmN0aW9uIGdldFBhcmVudEVsZW1lbnQoY29tcG9uZW50KSB7XG4gIHJldHVybiBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpIHtcbiAgZGVsZXRlIGNvbXBvbmVudC5lbC5jbGljazsgLy8gZmFsbGJhY2sgb24gSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrXG4gIHJlbW92ZUludGVyYWN0aW9uTGlzdGVuZXJzKGlzRmlyZWZveCA/IGdldFBhcmVudEVsZW1lbnQoY29tcG9uZW50KSA6IGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiByZW1vdmVJbnRlcmFjdGlvbkxpc3RlbmVycyhlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIC8vIHRoaXMgcGF0aCBpcyBvbmx5IGFwcGxpY2FibGUgdG8gRmlyZWZveFxuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50LCBjYXB0dXJlT25seU9wdGlvbnMpKTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IGhlbHBzIGRpc2FibGUgY29tcG9uZW50cyBjb25zaXN0ZW50bHkgaW4gRmlyZWZveC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGNvbm5lY3RlZENhbGxiYWNrYCBhbmQgaXMgb25seSBuZWVkZWQgZm9yIEZpcmVmb3ggYXMgaXQgZG9lcyBub3QgY2FsbCBjYXB0dXJlIGV2ZW50IGxpc3RlbmVycyBiZWZvcmUgbm9uLWNhcHR1cmUgb25lcyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE3MzE1MDQpLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdEludGVyYWN0aXZlKGNvbXBvbmVudCkge1xuICBpZiAoIWNvbXBvbmVudC5kaXNhYmxlZCB8fCAhaXNGaXJlZm94KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHBhcmVudCA9IGNvbXBvbmVudC5lbC5wYXJlbnRFbGVtZW50IHx8IGNvbXBvbmVudC5lbDsgLyogYXNzdW1lIGVsZW1lbnQgaXMgaG9zdCBpZiBpdCBoYXMgbm8gcGFyZW50IHdoZW4gY29ubmVjdGVkICovXG4gIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LnNldChjb21wb25lbnQuZWwsIHBhcmVudCk7XG4gIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHJlc3RvcmVzIGludGVyYWN0aXZpdHkgdG8gZGlzYWJsZWQgY29tcG9uZW50cyBjb25zaXN0ZW50bHkgaW4gRmlyZWZveC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrYCBhbmQgaXMgb25seSBuZWVkZWQgZm9yIEZpcmVmb3ggYXMgaXQgZG9lcyBub3QgY2FsbCBjYXB0dXJlIGV2ZW50IGxpc3RlbmVycyBiZWZvcmUgbm9uLWNhcHR1cmUgb25lcyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE3MzE1MDQpLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdEludGVyYWN0aXZlKGNvbXBvbmVudCkge1xuICBpZiAoIWlzRmlyZWZveCkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBhbHdheXMgcmVtb3ZlIG9uIGRpc2Nvbm5lY3QgYXMgcmVuZGVyIG9yIGNvbm5lY3Qgd2lsbCByZXN0b3JlIGl0XG4gIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmRlbGV0ZShjb21wb25lbnQuZWwpO1xuICByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdEludGVyYWN0aXZlIGFzIGMsIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSBhcyBkLCBnZXRVc2VyQWdlbnRTdHJpbmcgYXMgZywgdXBkYXRlSG9zdEludGVyYWN0aW9uIGFzIHUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==