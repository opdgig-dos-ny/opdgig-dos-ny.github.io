"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_time-picker_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/math.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/math.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ closeToRangeEdge),
/* harmony export */   c: () => (/* binding */ clamp),
/* harmony export */   d: () => (/* binding */ decimalPlaces),
/* harmony export */   g: () => (/* binding */ getDecimals),
/* harmony export */   r: () => (/* binding */ remap)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const clamp = (value, min, max) => Math.max(min, Math.min(value, max));
const decimalNumberRegex = new RegExp(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
/**
 * Returns the quantity of real decimal places for a number, which excludes trailing zeros.
 *
 * Adapted from {@link https://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number}.
 *
 * @param decimal - decimal value
 * @param value
 * @returns {number} the amount of decimal places in a number
 */
const decimalPlaces = (value) => {
  const match = ("" + value).match(decimalNumberRegex);
  if (!match || parseInt(match[1]) === 0) {
    return 0;
  }
  return Math.max(0, 
  // Number of digits right of decimal point.
  (match[1] ? match[1].length : 0) -
    // Adjust for scientific notation.
    (match[2] ? +match[2] : 0));
};
function getDecimals(value) {
  if (decimalPlaces(value) > 0 && value > 0) {
    return parseFloat(`0.${value.toString().split(".")[1]}`);
  }
  return value;
}
function remap(value, fromMin, fromMax, toMin, toMax) {
  return ((value - fromMin) * (toMax - toMin)) / (fromMax - fromMin) + toMin;
}
/**
 * Helper to determine if a value is close to the edge of a range within a threshold.
 *
 * @param value
 * @param range
 * @param threshold
 * @returns -1 if close to lower edge, 1 if close to upper edge, 0 otherwise.
 */
function closeToRangeEdge(value, range, threshold) {
  return value < threshold ? -1 : value > range - threshold ? 1 : 0;
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/time-picker.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/time-picker.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TimePicker),
/* harmony export */   a: () => (/* binding */ formatTimePart),
/* harmony export */   d: () => (/* binding */ defineCustomElement),
/* harmony export */   f: () => (/* binding */ formatTimeString),
/* harmony export */   i: () => (/* binding */ isValidTime),
/* harmony export */   l: () => (/* binding */ localizeTimeString),
/* harmony export */   t: () => (/* binding */ toISOTimeString)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math.js */ "./node_modules/@esri/calcite-components/dist/components/math.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */









const maxTenthForMinuteAndSecond = 5;
function createLocaleDateTimeFormatter(locale, numberingSystem, includeSeconds = true, fractionalSecondDigits) {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
    numberingSystem: (0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.f)(numberingSystem),
  };
  if (includeSeconds) {
    options.second = "2-digit";
    if (fractionalSecondDigits) {
      options.fractionalSecondDigits = fractionalSecondDigits;
    }
  }
  return (0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.b)(locale, options);
}
function formatTimePart(number, minLength) {
  if (number === null || number === undefined) {
    return;
  }
  const numberAsString = number.toString();
  const numberDecimalPlaces = (0,_math_js__WEBPACK_IMPORTED_MODULE_3__.d)(number);
  if (number < 1 && numberDecimalPlaces > 0 && numberDecimalPlaces < 4) {
    const fractionalDigits = numberAsString.replace("0.", "");
    if (!minLength || fractionalDigits.length === minLength) {
      return fractionalDigits;
    }
    if (fractionalDigits.length < minLength) {
      return fractionalDigits.padEnd(minLength, "0");
    }
    return fractionalDigits;
  }
  if (number >= 0 && number < 10) {
    return numberAsString.padStart(2, "0");
  }
  if (number >= 10) {
    return numberAsString;
  }
}
function formatTimeString(value) {
  if (!isValidTime(value)) {
    return null;
  }
  const { hour, minute, second, fractionalSecond } = parseTimeString(value);
  let formattedValue = `${formatTimePart(parseInt(hour))}:${formatTimePart(parseInt(minute))}`;
  if (second) {
    formattedValue += `:${formatTimePart(parseInt(second))}`;
    if (fractionalSecond) {
      formattedValue += `.${fractionalSecond}`;
    }
  }
  return formattedValue;
}
function fractionalSecondPartToMilliseconds(fractionalSecondPart) {
  return parseInt((parseFloat(`0.${fractionalSecondPart}`) / 0.001).toFixed(3));
}
function getLocaleHourCycle(locale, numberingSystem) {
  const formatter = createLocaleDateTimeFormatter(locale, numberingSystem);
  const parts = formatter.formatToParts(new Date(Date.UTC(0, 0, 0, 0, 0, 0)));
  return getLocalizedTimePart("meridiem", parts) ? "12" : "24";
}
function getLocalizedDecimalSeparator(locale, numberingSystem) {
  _locale_js__WEBPACK_IMPORTED_MODULE_1__.n.numberFormatOptions = {
    locale,
    numberingSystem,
  };
  return _locale_js__WEBPACK_IMPORTED_MODULE_1__.n.localize("1.1").split("")[1];
}
function getLocalizedTimePartSuffix(part, locale, numberingSystem = "latn") {
  const formatter = createLocaleDateTimeFormatter(locale, numberingSystem);
  const parts = formatter.formatToParts(new Date(Date.UTC(0, 0, 0, 0, 0, 0)));
  return getLocalizedTimePart(`${part}Suffix`, parts);
}
function getLocalizedTimePart(part, parts) {
  if (!part || !parts) {
    return null;
  }
  if (part === "hourSuffix") {
    const hourIndex = parts.indexOf(parts.find(({ type }) => type === "hour"));
    const minuteIndex = parts.indexOf(parts.find(({ type }) => type === "minute"));
    const hourSuffix = parts[hourIndex + 1];
    return hourSuffix && hourSuffix.type === "literal" && minuteIndex - hourIndex === 2
      ? hourSuffix.value?.trim() || null
      : null;
  }
  if (part === "minuteSuffix") {
    const minuteIndex = parts.indexOf(parts.find(({ type }) => type === "minute"));
    const secondIndex = parts.indexOf(parts.find(({ type }) => type === "second"));
    const minuteSuffix = parts[minuteIndex + 1];
    return minuteSuffix && minuteSuffix.type === "literal" && secondIndex - minuteIndex === 2
      ? minuteSuffix.value?.trim() || null
      : null;
  }
  if (part === "secondSuffix") {
    const secondIndex = parts.indexOf(parts.find(({ type }) => type === "second"));
    const secondSuffix = parts[secondIndex + 1];
    return secondSuffix && secondSuffix.type === "literal" ? secondSuffix.value?.trim() || null : null;
  }
  return parts.find(({ type }) => (part == "meridiem" ? type === "dayPeriod" : type === part))?.value || null;
}
function getMeridiem(hour) {
  if (!(0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.i)(hour)) {
    return null;
  }
  const hourAsNumber = parseInt(hour);
  return hourAsNumber >= 0 && hourAsNumber <= 11 ? "AM" : "PM";
}
function isValidTime(value) {
  if (!value || value.startsWith(":") || value.endsWith(":")) {
    return false;
  }
  const splitValue = value.split(":");
  const validLength = splitValue.length > 1 && splitValue.length < 4;
  if (!validLength) {
    return false;
  }
  const [hour, minute, second] = splitValue;
  const hourAsNumber = parseInt(splitValue[0]);
  const minuteAsNumber = parseInt(splitValue[1]);
  const secondAsNumber = parseInt(splitValue[2]);
  const hourValid = (0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.i)(hour) && hourAsNumber >= 0 && hourAsNumber < 24;
  const minuteValid = (0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.i)(minute) && minuteAsNumber >= 0 && minuteAsNumber < 60;
  const secondValid = (0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.i)(second) && secondAsNumber >= 0 && secondAsNumber < 60;
  if ((hourValid && minuteValid && !second) || (hourValid && minuteValid && secondValid)) {
    return true;
  }
}
function isValidTimePart(value, part) {
  if (part === "meridiem") {
    return value === "AM" || value === "PM";
  }
  if (!(0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.i)(value)) {
    return false;
  }
  const valueAsNumber = Number(value);
  return part === "hour" ? valueAsNumber >= 0 && valueAsNumber < 24 : valueAsNumber >= 0 && valueAsNumber < 60;
}
function localizeTimePart({ value, part, locale, numberingSystem }) {
  if (part === "fractionalSecond") {
    const localizedDecimalSeparator = getLocalizedDecimalSeparator(locale, numberingSystem);
    let localizedFractionalSecond = null;
    if (value) {
      _locale_js__WEBPACK_IMPORTED_MODULE_1__.n.numberFormatOptions = {
        locale,
        numberingSystem,
      };
      const localizedZero = _locale_js__WEBPACK_IMPORTED_MODULE_1__.n.localize("0");
      if (parseInt(value) === 0) {
        localizedFractionalSecond = "".padStart(value.length, localizedZero);
      }
      else {
        localizedFractionalSecond = _locale_js__WEBPACK_IMPORTED_MODULE_1__.n
          .localize(`0.${value}`)
          .replace(`${localizedZero}${localizedDecimalSeparator}`, "");
        if (localizedFractionalSecond.length < value.length) {
          localizedFractionalSecond = localizedFractionalSecond.padEnd(value.length, localizedZero);
        }
      }
    }
    return localizedFractionalSecond;
  }
  if (!isValidTimePart(value, part)) {
    return;
  }
  const valueAsNumber = parseInt(value);
  const date = new Date(Date.UTC(0, 0, 0, part === "hour" ? valueAsNumber : part === "meridiem" ? (value === "AM" ? 0 : 12) : 0, part === "minute" ? valueAsNumber : 0, part === "second" ? valueAsNumber : 0));
  if (!date) {
    return;
  }
  const formatter = createLocaleDateTimeFormatter(locale, numberingSystem);
  const parts = formatter.formatToParts(date);
  return getLocalizedTimePart(part, parts);
}
function localizeTimeString({ value, locale, numberingSystem, includeSeconds = true, fractionalSecondDigits, }) {
  if (!isValidTime(value)) {
    return null;
  }
  const { hour, minute, second = "0", fractionalSecond } = parseTimeString(value);
  const dateFromTimeString = new Date(Date.UTC(0, 0, 0, parseInt(hour), parseInt(minute), parseInt(second), fractionalSecond && fractionalSecondPartToMilliseconds(fractionalSecond)));
  const formatter = createLocaleDateTimeFormatter(locale, numberingSystem, includeSeconds, fractionalSecondDigits);
  return formatter.format(dateFromTimeString) || null;
}
function localizeTimeStringToParts({ value, locale, numberingSystem = "latn", }) {
  if (!isValidTime(value)) {
    return null;
  }
  const { hour, minute, second = "0", fractionalSecond } = parseTimeString(value);
  const dateFromTimeString = new Date(Date.UTC(0, 0, 0, parseInt(hour), parseInt(minute), parseInt(second)));
  if (dateFromTimeString) {
    const formatter = createLocaleDateTimeFormatter(locale, numberingSystem);
    const parts = formatter.formatToParts(dateFromTimeString);
    return {
      localizedHour: getLocalizedTimePart("hour", parts),
      localizedHourSuffix: getLocalizedTimePart("hourSuffix", parts),
      localizedMinute: getLocalizedTimePart("minute", parts),
      localizedMinuteSuffix: getLocalizedTimePart("minuteSuffix", parts),
      localizedSecond: getLocalizedTimePart("second", parts),
      localizedDecimalSeparator: getLocalizedDecimalSeparator(locale, numberingSystem),
      localizedFractionalSecond: localizeTimePart({
        value: fractionalSecond,
        part: "fractionalSecond",
        locale,
        numberingSystem,
      }),
      localizedSecondSuffix: getLocalizedTimePart("secondSuffix", parts),
      localizedMeridiem: getLocalizedTimePart("meridiem", parts),
    };
  }
  return null;
}
function getTimeParts({ value, locale, numberingSystem }) {
  if (!isValidTime(value)) {
    return null;
  }
  const { hour, minute, second = "0" } = parseTimeString(value);
  const dateFromTimeString = new Date(Date.UTC(0, 0, 0, parseInt(hour), parseInt(minute), parseInt(second)));
  if (dateFromTimeString) {
    const formatter = createLocaleDateTimeFormatter(locale, numberingSystem);
    const parts = formatter.formatToParts(dateFromTimeString);
    return parts;
  }
  return null;
}
function parseTimeString(value) {
  if (isValidTime(value)) {
    const [hour, minute, secondDecimal] = value.split(":");
    let second = secondDecimal;
    let fractionalSecond = null;
    if (secondDecimal?.includes(".")) {
      [second, fractionalSecond] = secondDecimal.split(".");
    }
    return {
      fractionalSecond,
      hour,
      minute,
      second,
    };
  }
  return {
    fractionalSecond: null,
    hour: null,
    minute: null,
    second: null,
  };
}
function toISOTimeString(value, includeSeconds = true) {
  if (!isValidTime(value)) {
    return "";
  }
  const { hour, minute, second, fractionalSecond } = parseTimeString(value);
  let isoTimeString = `${formatTimePart(parseInt(hour))}:${formatTimePart(parseInt(minute))}`;
  if (includeSeconds) {
    isoTimeString += `:${formatTimePart(parseInt((includeSeconds && second) || "0"))}`;
    if (fractionalSecond) {
      isoTimeString += `.${fractionalSecond}`;
    }
  }
  return isoTimeString;
}

const CSS = {
  button: "button",
  buttonBottomLeft: "button--bottom-left",
  buttonBottomRight: "button--bottom-right",
  buttonFractionalSecondDown: "button--fractionalSecond-down",
  buttonFractionalSecondUp: "button--fractionalSecond-up",
  buttonHourDown: "button--hour-down",
  buttonHourUp: "button--hour-up",
  buttonMeridiemDown: "button--meridiem-down",
  buttonMeridiemUp: "button--meridiem-up",
  buttonMinuteDown: "button--minute-down",
  buttonMinuteUp: "button--minute-up",
  buttonSecondDown: "button--second-down",
  buttonSecondUp: "button--second-up",
  buttonTopLeft: "button--top-left",
  buttonTopRight: "button--top-right",
  column: "column",
  delimiter: "delimiter",
  fractionalSecond: "fractionalSecond",
  hour: "hour",
  input: "input",
  inputFocus: "inputFocus",
  meridiem: "meridiem",
  minute: "minute",
  second: "second",
  showMeridiem: "show-meridiem",
  showSecond: "show-second",
  "scale-s": "scale-s",
  "scale-m": "scale-m",
  "scale-l": "scale-l",
  timePicker: "time-picker",
  meridiemStart: "meridiem--start",
};

const timePickerCss = ":host{display:inline-block}.time-picker{display:flex;-webkit-user-select:none;user-select:none;align-items:center;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:var(--calcite-border-radius)}.time-picker .column{display:flex;flex-direction:column}.time-picker .meridiem--start{order:-1}.time-picker .button{display:inline-flex;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1)}.time-picker .button:hover,.time-picker .button:focus{background-color:var(--calcite-ui-foreground-2);outline:2px solid transparent;outline-offset:2px;z-index:var(--calcite-app-z-index-header);outline-offset:0}.time-picker .button:active{background-color:var(--calcite-ui-foreground-3)}.time-picker .button.top-left{border-start-start-radius:var(--calcite-border-radius)}.time-picker .button.bottom-left{border-end-start-radius:var(--calcite-border-radius)}.time-picker .button.top-right{border-start-end-radius:var(--calcite-border-radius)}.time-picker .button.bottom-right{border-end-end-radius:var(--calcite-border-radius)}.time-picker .button calcite-icon{color:var(--calcite-ui-text-3)}.time-picker .input{display:inline-flex;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium)}.time-picker .input:hover{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-2);z-index:var(--calcite-app-z-index-header)}.time-picker .input:focus,.time-picker .input:hover:focus{outline:2px solid transparent;outline-offset:2px;outline-offset:0}.time-picker .input.inputFocus,.time-picker .input:hover.inputFocus{box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);z-index:var(--calcite-app-z-index-header)}.time-picker.scale-s{font-size:var(--calcite-font-size--1)}.time-picker.scale-s .button,.time-picker.scale-s .input{padding-inline:0.75rem;padding-block:0.25rem}.time-picker.scale-s:not(.show-meridiem) .delimiter:last-child{padding-inline-end:0.75rem}.time-picker.scale-m{font-size:var(--calcite-font-size-0)}.time-picker.scale-m .button,.time-picker.scale-m .input{padding-inline:1rem;padding-block:0.5rem}.time-picker.scale-m:not(.show-meridiem) .delimiter:last-child{padding-inline-end:1rem}.time-picker.scale-l{font-size:var(--calcite-font-size-1)}.time-picker.scale-l .button,.time-picker.scale-l .input{padding-inline:1.25rem;padding-block:0.75rem}.time-picker.scale-l:not(.show-meridiem) .delimiter:last-child{padding-inline-end:1.25rem}:host([hidden]){display:none}[hidden]{display:none}";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const TimePicker = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalTimePickerBlur = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.createEvent)(this, "calciteInternalTimePickerBlur", 6);
    this.calciteInternalTimePickerChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.createEvent)(this, "calciteInternalTimePickerChange", 6);
    this.calciteInternalTimePickerFocus = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.createEvent)(this, "calciteInternalTimePickerFocus", 6);
    this.pointerActivated = false;
    this.decrementHour = () => {
      const newHour = !this.hour ? 0 : this.hour === "00" ? 23 : parseInt(this.hour) - 1;
      this.setValuePart("hour", newHour);
    };
    this.decrementMeridiem = () => {
      const newMeridiem = this.meridiem === "PM" ? "AM" : "PM";
      this.setValuePart("meridiem", newMeridiem);
    };
    this.decrementMinuteOrSecond = (key) => {
      let newValue;
      if ((0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.i)(this[key])) {
        const valueAsNumber = parseInt(this[key]);
        newValue = valueAsNumber === 0 ? 59 : valueAsNumber - 1;
      }
      else {
        newValue = 59;
      }
      this.setValuePart(key, newValue);
    };
    this.decrementMinute = () => {
      this.decrementMinuteOrSecond("minute");
    };
    this.decrementSecond = () => {
      this.decrementMinuteOrSecond("second");
    };
    this.focusHandler = (event) => {
      if (this.pointerActivated) {
        return;
      }
      this.activeEl = event.currentTarget;
    };
    this.fractionalSecondKeyDownHandler = (event) => {
      const { key } = event;
      if (_key_js__WEBPACK_IMPORTED_MODULE_0__.n.includes(key)) {
        const stepPrecision = (0,_math_js__WEBPACK_IMPORTED_MODULE_3__.d)(this.step);
        const fractionalSecondAsInteger = parseInt(this.fractionalSecond);
        const fractionalSecondAsIntegerLength = fractionalSecondAsInteger.toString().length;
        let newFractionalSecondAsIntegerString;
        if (fractionalSecondAsIntegerLength >= stepPrecision) {
          newFractionalSecondAsIntegerString = key.padStart(stepPrecision, "0");
        }
        else if (fractionalSecondAsIntegerLength < stepPrecision) {
          newFractionalSecondAsIntegerString = `${fractionalSecondAsInteger}${key}`.padStart(stepPrecision, "0");
        }
        this.setValuePart("fractionalSecond", parseFloat(`0.${newFractionalSecondAsIntegerString}`));
      }
      else {
        switch (key) {
          case "Backspace":
          case "Delete":
            this.setValuePart("fractionalSecond", null);
            break;
          case "ArrowDown":
            event.preventDefault();
            this.nudgeFractionalSecond("down");
            break;
          case "ArrowUp":
            event.preventDefault();
            this.nudgeFractionalSecond("up");
            break;
          case " ":
            event.preventDefault();
            break;
        }
      }
    };
    this.fractionalSecondDownClickHandler = () => {
      this.activeEl = this.fractionalSecondEl;
      this.fractionalSecondEl.focus();
      this.nudgeFractionalSecond("down");
    };
    this.fractionalSecondUpClickHandler = () => {
      this.activeEl = this.fractionalSecondEl;
      this.fractionalSecondEl.focus();
      this.nudgeFractionalSecond("up");
    };
    this.hourDownClickHandler = () => {
      this.activeEl = this.hourEl;
      this.hourEl.focus();
      this.decrementHour();
    };
    this.hourKeyDownHandler = (event) => {
      const { key } = event;
      if (_key_js__WEBPACK_IMPORTED_MODULE_0__.n.includes(key)) {
        const keyAsNumber = parseInt(key);
        let newHour;
        if ((0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.hour)) {
          switch (this.hourCycle) {
            case "12":
              newHour =
                this.hour === "01" && keyAsNumber >= 0 && keyAsNumber <= 2
                  ? `1${keyAsNumber}`
                  : keyAsNumber;
              break;
            case "24":
              if (this.hour === "01") {
                newHour = `1${keyAsNumber}`;
              }
              else if (this.hour === "02" && keyAsNumber >= 0 && keyAsNumber <= 3) {
                newHour = `2${keyAsNumber}`;
              }
              else {
                newHour = keyAsNumber;
              }
              break;
          }
        }
        else {
          newHour = keyAsNumber;
        }
        this.setValuePart("hour", newHour);
      }
      else {
        switch (key) {
          case "Backspace":
          case "Delete":
            this.setValuePart("hour", null);
            break;
          case "ArrowDown":
            event.preventDefault();
            this.decrementHour();
            break;
          case "ArrowUp":
            event.preventDefault();
            this.incrementHour();
            break;
          case " ":
            event.preventDefault();
            break;
        }
      }
    };
    this.hourUpClickHandler = () => {
      this.activeEl = this.hourEl;
      this.hourEl.focus();
      this.incrementHour();
    };
    this.incrementMeridiem = () => {
      const newMeridiem = this.meridiem === "AM" ? "PM" : "AM";
      this.setValuePart("meridiem", newMeridiem);
    };
    this.incrementHour = () => {
      const newHour = (0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.hour)
        ? this.hour === "23"
          ? 0
          : parseInt(this.hour) + 1
        : 1;
      this.setValuePart("hour", newHour);
    };
    this.incrementMinuteOrSecond = (key) => {
      const newValue = (0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.i)(this[key])
        ? this[key] === "59"
          ? 0
          : parseInt(this[key]) + 1
        : 0;
      this.setValuePart(key, newValue);
    };
    this.incrementMinute = () => {
      this.incrementMinuteOrSecond("minute");
    };
    this.incrementSecond = () => {
      this.incrementMinuteOrSecond("second");
    };
    this.inputClickHandler = (event) => {
      this.activeEl = event.target;
    };
    this.meridiemUpClickHandler = () => {
      this.activeEl = this.meridiemEl;
      this.meridiemEl.focus();
      this.incrementMeridiem();
    };
    this.meridiemKeyDownHandler = (event) => {
      switch (event.key) {
        case "a":
          this.setValuePart("meridiem", "AM");
          break;
        case "p":
          this.setValuePart("meridiem", "PM");
          break;
        case "Backspace":
        case "Delete":
          this.setValuePart("meridiem", null);
          break;
        case "ArrowUp":
          event.preventDefault();
          this.incrementMeridiem();
          break;
        case "ArrowDown":
          event.preventDefault();
          this.decrementMeridiem();
          break;
        case " ":
          event.preventDefault();
          break;
      }
    };
    this.meridiemDownClickHandler = () => {
      this.activeEl = this.meridiemEl;
      this.meridiemEl.focus();
      this.decrementMeridiem();
    };
    this.minuteDownClickHandler = () => {
      this.activeEl = this.minuteEl;
      this.minuteEl.focus();
      this.decrementMinute();
    };
    this.minuteUpClickHandler = () => {
      this.activeEl = this.minuteEl;
      this.minuteEl.focus();
      this.incrementMinute();
    };
    this.minuteKeyDownHandler = (event) => {
      const { key } = event;
      if (_key_js__WEBPACK_IMPORTED_MODULE_0__.n.includes(key)) {
        const keyAsNumber = parseInt(key);
        let newMinute;
        if ((0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.minute) && this.minute.startsWith("0")) {
          const minuteAsNumber = parseInt(this.minute);
          newMinute =
            minuteAsNumber > maxTenthForMinuteAndSecond
              ? keyAsNumber
              : `${minuteAsNumber}${keyAsNumber}`;
        }
        else {
          newMinute = keyAsNumber;
        }
        this.setValuePart("minute", newMinute);
      }
      else {
        switch (key) {
          case "Backspace":
          case "Delete":
            this.setValuePart("minute", null);
            break;
          case "ArrowDown":
            event.preventDefault();
            this.decrementMinute();
            break;
          case "ArrowUp":
            event.preventDefault();
            this.incrementMinute();
            break;
          case " ":
            event.preventDefault();
            break;
        }
      }
    };
    this.nudgeFractionalSecond = (direction) => {
      const stepDecimal = (0,_math_js__WEBPACK_IMPORTED_MODULE_3__.g)(this.step);
      const stepPrecision = (0,_math_js__WEBPACK_IMPORTED_MODULE_3__.d)(this.step);
      const fractionalSecondAsInteger = parseInt(this.fractionalSecond);
      const fractionalSecondAsFloat = parseFloat(`0.${this.fractionalSecond}`);
      let nudgedValue;
      let nudgedValueRounded;
      let nudgedValueRoundedDecimals;
      let newFractionalSecond;
      if (direction === "up") {
        nudgedValue = isNaN(fractionalSecondAsInteger) ? 0 : fractionalSecondAsFloat + stepDecimal;
        nudgedValueRounded = parseFloat(nudgedValue.toFixed(stepPrecision));
        nudgedValueRoundedDecimals = (0,_math_js__WEBPACK_IMPORTED_MODULE_3__.g)(nudgedValueRounded);
        newFractionalSecond =
          nudgedValueRounded < 1 && (0,_math_js__WEBPACK_IMPORTED_MODULE_3__.d)(nudgedValueRoundedDecimals) > 0
            ? formatTimePart(nudgedValueRoundedDecimals, stepPrecision)
            : "".padStart(stepPrecision, "0");
      }
      if (direction === "down") {
        nudgedValue =
          isNaN(fractionalSecondAsInteger) || fractionalSecondAsInteger === 0
            ? 1 - stepDecimal
            : fractionalSecondAsFloat - stepDecimal;
        nudgedValueRounded = parseFloat(nudgedValue.toFixed(stepPrecision));
        nudgedValueRoundedDecimals = (0,_math_js__WEBPACK_IMPORTED_MODULE_3__.g)(nudgedValueRounded);
        newFractionalSecond =
          nudgedValueRounded < 1 &&
            (0,_math_js__WEBPACK_IMPORTED_MODULE_3__.d)(nudgedValueRoundedDecimals) > 0 &&
            Math.sign(nudgedValueRoundedDecimals) === 1
            ? formatTimePart(nudgedValueRoundedDecimals, stepPrecision)
            : "".padStart(stepPrecision, "0");
      }
      this.setValuePart("fractionalSecond", newFractionalSecond);
    };
    this.sanitizeValue = (value) => {
      const { hour, minute, second, fractionalSecond } = parseTimeString(value);
      if (fractionalSecond) {
        const sanitizedFractionalSecond = this.sanitizeFractionalSecond(fractionalSecond);
        return `${hour}:${minute}:${second}.${sanitizedFractionalSecond}`;
      }
      return isValidTime(value) && value;
    };
    this.sanitizeFractionalSecond = (fractionalSecond) => fractionalSecond && (0,_math_js__WEBPACK_IMPORTED_MODULE_3__.d)(this.step) !== fractionalSecond.length
      ? parseFloat(`0.${fractionalSecond}`).toFixed((0,_math_js__WEBPACK_IMPORTED_MODULE_3__.d)(this.step)).replace("0.", "")
      : fractionalSecond;
    this.secondKeyDownHandler = (event) => {
      const { key } = event;
      if (_key_js__WEBPACK_IMPORTED_MODULE_0__.n.includes(key)) {
        const keyAsNumber = parseInt(key);
        let newSecond;
        if ((0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.second) && this.second.startsWith("0")) {
          const secondAsNumber = parseInt(this.second);
          newSecond =
            secondAsNumber > maxTenthForMinuteAndSecond
              ? keyAsNumber
              : `${secondAsNumber}${keyAsNumber}`;
        }
        else {
          newSecond = keyAsNumber;
        }
        this.setValuePart("second", newSecond);
      }
      else {
        switch (key) {
          case "Backspace":
          case "Delete":
            this.setValuePart("second", null);
            break;
          case "ArrowDown":
            event.preventDefault();
            this.decrementSecond();
            break;
          case "ArrowUp":
            event.preventDefault();
            this.incrementSecond();
            break;
          case " ":
            event.preventDefault();
            break;
        }
      }
    };
    this.secondDownClickHandler = () => {
      this.activeEl = this.secondEl;
      this.secondEl.focus();
      this.decrementSecond();
    };
    this.secondUpClickHandler = () => {
      this.activeEl = this.secondEl;
      this.secondEl.focus();
      this.incrementSecond();
    };
    this.setHourEl = (el) => (this.hourEl = el);
    this.setMeridiemEl = (el) => (this.meridiemEl = el);
    this.setMinuteEl = (el) => (this.minuteEl = el);
    this.setSecondEl = (el) => (this.secondEl = el);
    this.setFractionalSecondEl = (el) => (this.fractionalSecondEl = el);
    this.setValue = (value) => {
      if (isValidTime(value)) {
        const { hour, minute, second, fractionalSecond } = parseTimeString(value);
        const { effectiveLocale: locale, numberingSystem } = this;
        const { localizedHour, localizedHourSuffix, localizedMinute, localizedMinuteSuffix, localizedSecond, localizedDecimalSeparator, localizedFractionalSecond, localizedSecondSuffix, localizedMeridiem, } = localizeTimeStringToParts({ value, locale, numberingSystem });
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.fractionalSecond = this.sanitizeFractionalSecond(fractionalSecond);
        this.localizedHour = localizedHour;
        this.localizedHourSuffix = localizedHourSuffix;
        this.localizedMinute = localizedMinute;
        this.localizedMinuteSuffix = localizedMinuteSuffix;
        this.localizedSecond = localizedSecond;
        this.localizedDecimalSeparator = localizedDecimalSeparator;
        this.localizedFractionalSecond = localizedFractionalSecond;
        this.localizedSecondSuffix = localizedSecondSuffix;
        if (localizedMeridiem) {
          this.localizedMeridiem = localizedMeridiem;
          this.meridiem = getMeridiem(this.hour);
          const formatParts = getTimeParts({ value, locale, numberingSystem });
          this.meridiemOrder = this.getMeridiemOrder(formatParts);
        }
      }
      else {
        this.hour = null;
        this.fractionalSecond = null;
        this.localizedHour = null;
        this.localizedHourSuffix = getLocalizedTimePartSuffix("hour", this.effectiveLocale, this.numberingSystem);
        this.localizedMeridiem = null;
        this.localizedMinute = null;
        this.localizedMinuteSuffix = getLocalizedTimePartSuffix("minute", this.effectiveLocale, this.numberingSystem);
        this.localizedSecond = null;
        this.localizedDecimalSeparator = getLocalizedDecimalSeparator(this.effectiveLocale, this.numberingSystem);
        this.localizedFractionalSecond = null;
        this.localizedSecondSuffix = getLocalizedTimePartSuffix("second", this.effectiveLocale, this.numberingSystem);
        this.meridiem = null;
        this.minute = null;
        this.second = null;
        this.value = null;
      }
    };
    this.setValuePart = (key, value) => {
      const { effectiveLocale: locale, numberingSystem } = this;
      if (key === "meridiem") {
        this.meridiem = value;
        if ((0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.hour)) {
          const hourAsNumber = parseInt(this.hour);
          switch (value) {
            case "AM":
              if (hourAsNumber >= 12) {
                this.hour = formatTimePart(hourAsNumber - 12);
              }
              break;
            case "PM":
              if (hourAsNumber < 12) {
                this.hour = formatTimePart(hourAsNumber + 12);
              }
              break;
          }
          this.localizedHour = localizeTimePart({
            value: this.hour,
            part: "hour",
            locale,
            numberingSystem,
          });
        }
      }
      else if (key === "fractionalSecond") {
        const stepPrecision = (0,_math_js__WEBPACK_IMPORTED_MODULE_3__.d)(this.step);
        if (typeof value === "number") {
          this.fractionalSecond =
            value === 0 ? "".padStart(stepPrecision, "0") : formatTimePart(value, stepPrecision);
        }
        else {
          this.fractionalSecond = value;
        }
        this.localizedFractionalSecond = localizeTimePart({
          value: this.fractionalSecond,
          part: "fractionalSecond",
          locale,
          numberingSystem,
        });
      }
      else {
        this[key] = typeof value === "number" ? formatTimePart(value) : value;
        this[`localized${capitalize(key)}`] = localizeTimePart({
          value: this[key],
          part: key,
          locale,
          numberingSystem,
        });
      }
      let emit = false;
      let newValue;
      if (this.hour && this.minute) {
        newValue = `${this.hour}:${this.minute}`;
        if (this.showSecond) {
          newValue = `${newValue}:${this.second ?? "00"}`;
          if (this.showFractionalSecond && this.fractionalSecond) {
            newValue = `${newValue}.${this.fractionalSecond}`;
          }
        }
      }
      else {
        newValue = null;
      }
      if (this.value !== newValue) {
        emit = true;
      }
      this.value = newValue;
      this.localizedMeridiem = this.value
        ? localizeTimeStringToParts({ value: this.value, locale, numberingSystem })
          ?.localizedMeridiem || null
        : localizeTimePart({ value: this.meridiem, part: "meridiem", locale, numberingSystem });
      if (emit) {
        this.calciteInternalTimePickerChange.emit();
      }
    };
    this.scale = "m";
    this.step = 60;
    this.numberingSystem = undefined;
    this.value = null;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.activeEl = undefined;
    this.effectiveLocale = "";
    this.fractionalSecond = undefined;
    this.hour = undefined;
    this.hourCycle = undefined;
    this.localizedDecimalSeparator = ".";
    this.localizedHour = undefined;
    this.localizedHourSuffix = undefined;
    this.localizedMeridiem = undefined;
    this.localizedFractionalSecond = undefined;
    this.localizedMinute = undefined;
    this.localizedMinuteSuffix = undefined;
    this.localizedSecond = undefined;
    this.localizedSecondSuffix = undefined;
    this.meridiem = undefined;
    this.minute = undefined;
    this.second = undefined;
    this.showFractionalSecond = undefined;
    this.showSecond = undefined;
    this.defaultMessages = undefined;
  }
  stepChange() {
    this.toggleSecond();
  }
  valueWatcher(newValue) {
    this.setValue(newValue);
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleWatcher() {
    this.updateLocale();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  blurHandler() {
    this.activeEl = undefined;
    this.pointerActivated = false;
    this.calciteInternalTimePickerBlur.emit();
  }
  hostFocusHandler() {
    this.calciteInternalTimePickerFocus.emit();
  }
  keyDownHandler(event) {
    this.pointerActivated = false;
    const { defaultPrevented, key } = event;
    if (defaultPrevented) {
      return;
    }
    switch (this.activeEl) {
      case this.hourEl:
        if (key === "ArrowRight") {
          this.focusPart("minute");
          event.preventDefault();
        }
        break;
      case this.minuteEl:
        switch (key) {
          case "ArrowLeft":
            this.focusPart("hour");
            event.preventDefault();
            break;
          case "ArrowRight":
            if (this.step !== 60) {
              this.focusPart("second");
              event.preventDefault();
            }
            else if (this.hourCycle === "12") {
              this.focusPart("meridiem");
              event.preventDefault();
            }
            break;
        }
        break;
      case this.secondEl:
        switch (key) {
          case "ArrowLeft":
            this.focusPart("minute");
            event.preventDefault();
            break;
          case "ArrowRight":
            if (this.showFractionalSecond) {
              this.focusPart("fractionalSecond");
            }
            else if (this.hourCycle === "12") {
              this.focusPart("meridiem");
              event.preventDefault();
            }
            break;
        }
        break;
      case this.fractionalSecondEl:
        switch (key) {
          case "ArrowLeft":
            this.focusPart("second");
            event.preventDefault();
            break;
          case "ArrowRight":
            if (this.hourCycle === "12") {
              this.focusPart("meridiem");
              event.preventDefault();
            }
            break;
        }
        break;
      case this.meridiemEl:
        switch (key) {
          case "ArrowLeft":
            if (this.showFractionalSecond) {
              this.focusPart("fractionalSecond");
            }
            else if (this.step !== 60) {
              this.focusPart("second");
              event.preventDefault();
            }
            else {
              this.focusPart("minute");
              event.preventDefault();
            }
            break;
        }
        break;
    }
  }
  pointerDownHandler() {
    this.pointerActivated = true;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Sets focus on the component's first focusable element.
   */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    this.el?.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  async focusPart(target) {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    this[`${target || "hour"}El`]?.focus();
  }
  toggleSecond() {
    this.showSecond = this.step < 60;
    this.showFractionalSecond = (0,_math_js__WEBPACK_IMPORTED_MODULE_3__.d)(this.step) > 0;
  }
  getMeridiemOrder(formatParts) {
    const locale = this.effectiveLocale;
    const isRTLKind = locale === "ar" || locale === "he";
    if (formatParts && !isRTLKind) {
      const index = formatParts.findIndex((parts) => {
        return parts.value === this.localizedMeridiem;
      });
      return index;
    }
    return 0;
  }
  updateLocale() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_2__.u)(this, this.effectiveLocale);
    this.hourCycle = getLocaleHourCycle(this.effectiveLocale, this.numberingSystem);
    this.localizedDecimalSeparator = getLocalizedDecimalSeparator(this.effectiveLocale, this.numberingSystem);
    this.setValue(this.sanitizeValue(this.value));
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    this.updateLocale();
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.toggleSecond();
    this.meridiemOrder = this.getMeridiemOrder(getTimeParts({
      value: "0:00:00",
      locale: this.effectiveLocale,
      numberingSystem: this.numberingSystem,
    }));
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.a)(this);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
  }
  disconnectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const hourIsNumber = (0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.hour);
    const iconScale = (0,_component_js__WEBPACK_IMPORTED_MODULE_4__.g)(this.scale);
    const minuteIsNumber = (0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.minute);
    const secondIsNumber = (0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.second);
    const fractionalSecondIsNumber = (0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.fractionalSecond);
    const showMeridiem = this.hourCycle === "12";
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", { class: {
        [CSS.timePicker]: true,
        [CSS.showMeridiem]: showMeridiem,
        [CSS.showSecond]: this.showSecond,
        [CSS[`scale-${this.scale}`]]: true,
      }, dir: "ltr" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", { class: CSS.column, role: "group" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { "aria-label": this.messages.hourUp, class: {
        [CSS.button]: true,
        [CSS.buttonHourUp]: true,
        [CSS.buttonTopLeft]: true,
      }, onClick: this.hourUpClickHandler, role: "button" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { icon: "chevron-up", scale: iconScale })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { "aria-label": this.messages.hour, "aria-valuemax": "23", "aria-valuemin": "1", "aria-valuenow": (hourIsNumber && parseInt(this.hour)) || "0", "aria-valuetext": this.hour, class: {
        [CSS.input]: true,
        [CSS.hour]: true,
        [CSS.inputFocus]: this.activeEl && this.activeEl === this.hourEl,
      }, onClick: this.inputClickHandler, onFocus: this.focusHandler, onKeyDown: this.hourKeyDownHandler, role: "spinbutton", tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setHourEl }, this.localizedHour || "--"), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { "aria-label": this.messages.hourDown, class: {
        [CSS.button]: true,
        [CSS.buttonHourDown]: true,
        [CSS.buttonBottomLeft]: true,
      }, onClick: this.hourDownClickHandler, role: "button" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { icon: "chevron-down", scale: iconScale }))), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { class: CSS.delimiter }, this.localizedHourSuffix), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", { class: CSS.column, role: "group" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { "aria-label": this.messages.minuteUp, class: {
        [CSS.button]: true,
        [CSS.buttonMinuteUp]: true,
      }, onClick: this.minuteUpClickHandler, role: "button" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { icon: "chevron-up", scale: iconScale })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { "aria-label": this.messages.minute, "aria-valuemax": "12", "aria-valuemin": "1", "aria-valuenow": (minuteIsNumber && parseInt(this.minute)) || "0", "aria-valuetext": this.minute, class: {
        [CSS.input]: true,
        [CSS.minute]: true,
        [CSS.inputFocus]: this.activeEl && this.activeEl === this.minuteEl,
      }, onClick: this.inputClickHandler, onFocus: this.focusHandler, onKeyDown: this.minuteKeyDownHandler, role: "spinbutton", tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setMinuteEl }, this.localizedMinute || "--"), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { "aria-label": this.messages.minuteDown, class: {
        [CSS.button]: true,
        [CSS.buttonMinuteDown]: true,
      }, onClick: this.minuteDownClickHandler, role: "button" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { icon: "chevron-down", scale: iconScale }))), this.showSecond && (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { class: CSS.delimiter }, this.localizedMinuteSuffix), this.showSecond && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", { class: CSS.column, role: "group" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { "aria-label": this.messages.secondUp, class: {
        [CSS.button]: true,
        [CSS.buttonSecondUp]: true,
      }, onClick: this.secondUpClickHandler, role: "button" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { icon: "chevron-up", scale: iconScale })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { "aria-label": this.messages.second, "aria-valuemax": "59", "aria-valuemin": "0", "aria-valuenow": (secondIsNumber && parseInt(this.second)) || "0", "aria-valuetext": this.second, class: {
        [CSS.input]: true,
        [CSS.second]: true,
        [CSS.inputFocus]: this.activeEl && this.activeEl === this.secondEl,
      }, onClick: this.inputClickHandler, onFocus: this.focusHandler, onKeyDown: this.secondKeyDownHandler, role: "spinbutton", tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setSecondEl }, this.localizedSecond || "--"), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { "aria-label": this.messages.secondDown, class: {
        [CSS.button]: true,
        [CSS.buttonSecondDown]: true,
      }, onClick: this.secondDownClickHandler, role: "button" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { icon: "chevron-down", scale: iconScale })))), this.showFractionalSecond && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { class: CSS.delimiter }, this.localizedDecimalSeparator)), this.showFractionalSecond && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", { class: CSS.column, role: "group" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { "aria-label": this.messages.fractionalSecondUp, class: {
        [CSS.button]: true,
        [CSS.buttonFractionalSecondUp]: true,
      }, onClick: this.fractionalSecondUpClickHandler, role: "button" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { icon: "chevron-up", scale: iconScale })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { "aria-label": this.messages.fractionalSecond, "aria-valuemax": "999", "aria-valuemin": "1", "aria-valuenow": (fractionalSecondIsNumber && parseInt(this.fractionalSecond)) || "0", "aria-valuetext": this.localizedFractionalSecond, class: {
        [CSS.input]: true,
        [CSS.fractionalSecond]: true,
        [CSS.inputFocus]: this.activeEl && this.activeEl === this.fractionalSecondEl,
      }, onClick: this.inputClickHandler, onFocus: this.focusHandler, onKeyDown: this.fractionalSecondKeyDownHandler, role: "spinbutton", tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setFractionalSecondEl }, this.localizedFractionalSecond || "--"), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { "aria-label": this.messages.fractionalSecondDown, class: {
        [CSS.button]: true,
        [CSS.buttonFractionalSecondDown]: true,
      }, onClick: this.fractionalSecondDownClickHandler, role: "button" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { icon: "chevron-down", scale: iconScale })))), this.localizedSecondSuffix && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { class: CSS.delimiter }, this.localizedSecondSuffix)), showMeridiem && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", { class: {
        [CSS.column]: true,
        [CSS.meridiemStart]: this.meridiemOrder === 0,
      }, role: "group" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { "aria-label": this.messages.meridiemUp, class: {
        [CSS.button]: true,
        [CSS.buttonMeridiemUp]: true,
        [CSS.buttonTopRight]: true,
      }, onClick: this.meridiemUpClickHandler, role: "button" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { icon: "chevron-up", scale: iconScale })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { "aria-label": this.messages.meridiem, "aria-valuemax": "2", "aria-valuemin": "1", "aria-valuenow": (this.meridiem === "PM" && "2") || "1", "aria-valuetext": this.meridiem, class: {
        [CSS.input]: true,
        [CSS.meridiem]: true,
        [CSS.inputFocus]: this.activeEl && this.activeEl === this.meridiemEl,
      }, onClick: this.inputClickHandler, onFocus: this.focusHandler, onKeyDown: this.meridiemKeyDownHandler, role: "spinbutton", tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setMeridiemEl }, this.localizedMeridiem || "--"), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { "aria-label": this.messages.meridiemDown, class: {
        [CSS.button]: true,
        [CSS.buttonMeridiemDown]: true,
        [CSS.buttonBottomRight]: true,
      }, onClick: this.meridiemDownClickHandler, role: "button" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { icon: "chevron-down", scale: iconScale }))))));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "step": ["stepChange"],
    "value": ["valueWatcher"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleWatcher"]
  }; }
  static get style() { return timePickerCss; }
}, [17, "calcite-time-picker", {
    "scale": [513],
    "step": [514],
    "numberingSystem": [1, "numbering-system"],
    "value": [1025],
    "messages": [1040],
    "messageOverrides": [1040],
    "activeEl": [32],
    "effectiveLocale": [32],
    "fractionalSecond": [32],
    "hour": [32],
    "hourCycle": [32],
    "localizedDecimalSeparator": [32],
    "localizedHour": [32],
    "localizedHourSuffix": [32],
    "localizedMeridiem": [32],
    "localizedFractionalSecond": [32],
    "localizedMinute": [32],
    "localizedMinuteSuffix": [32],
    "localizedSecond": [32],
    "localizedSecondSuffix": [32],
    "meridiem": [32],
    "minute": [32],
    "second": [32],
    "showFractionalSecond": [32],
    "showSecond": [32],
    "defaultMessages": [32],
    "setFocus": [64]
  }, [[0, "blur", "blurHandler"], [0, "focus", "hostFocusHandler"], [0, "keydown", "keyDownHandler"], [1, "pointerdown", "pointerDownHandler"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-time-picker", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-time-picker":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TimePicker);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMGZmYjFjMjBkNjA2ZmU3Y2E4MWExM2RhODRmNGQ5ZWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3SEFBd0g7QUFDekk7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRStGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RztBQUM5RDtBQUM2STtBQUN0RTtBQUNqRDtBQUNkO0FBQzJEO0FBQ3ZEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkNBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw2Q0FBaUI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDJDQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUseUNBQXlDO0FBQ25ELDBCQUEwQiwrQkFBK0IsR0FBRyxpQ0FBaUM7QUFDN0Y7QUFDQSwwQkFBMEIsaUNBQWlDO0FBQzNEO0FBQ0EsNEJBQTRCLGlCQUFpQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHFCQUFxQjtBQUN4RDtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdCQUF3QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtDQUFrQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwrQ0FBa0I7QUFDNUIsWUFBWSxpQkFBaUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDJDQUFhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q2IsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBcUI7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVrSyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9tYXRoLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy90aW1lLXBpY2tlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5jb25zdCBjbGFtcCA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IE1hdGgubWF4KG1pbiwgTWF0aC5taW4odmFsdWUsIG1heCkpO1xuY29uc3QgZGVjaW1hbE51bWJlclJlZ2V4ID0gbmV3IFJlZ0V4cCgvKD86XFwuKFxcZCspKT8oPzpbZUVdKFsrLV0/XFxkKykpPyQvKTtcbi8qKlxuICogUmV0dXJucyB0aGUgcXVhbnRpdHkgb2YgcmVhbCBkZWNpbWFsIHBsYWNlcyBmb3IgYSBudW1iZXIsIHdoaWNoIGV4Y2x1ZGVzIHRyYWlsaW5nIHplcm9zLlxuICpcbiAqIEFkYXB0ZWQgZnJvbSB7QGxpbmsgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA0NTQ1MTgvamF2YXNjcmlwdC1ob3ctdG8tcmV0cmlldmUtdGhlLW51bWJlci1vZi1kZWNpbWFscy1vZi1hLXN0cmluZy1udW1iZXJ9LlxuICpcbiAqIEBwYXJhbSBkZWNpbWFsIC0gZGVjaW1hbCB2YWx1ZVxuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgYW1vdW50IG9mIGRlY2ltYWwgcGxhY2VzIGluIGEgbnVtYmVyXG4gKi9cbmNvbnN0IGRlY2ltYWxQbGFjZXMgPSAodmFsdWUpID0+IHtcbiAgY29uc3QgbWF0Y2ggPSAoXCJcIiArIHZhbHVlKS5tYXRjaChkZWNpbWFsTnVtYmVyUmVnZXgpO1xuICBpZiAoIW1hdGNoIHx8IHBhcnNlSW50KG1hdGNoWzFdKSA9PT0gMCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHJldHVybiBNYXRoLm1heCgwLCBcbiAgLy8gTnVtYmVyIG9mIGRpZ2l0cyByaWdodCBvZiBkZWNpbWFsIHBvaW50LlxuICAobWF0Y2hbMV0gPyBtYXRjaFsxXS5sZW5ndGggOiAwKSAtXG4gICAgLy8gQWRqdXN0IGZvciBzY2llbnRpZmljIG5vdGF0aW9uLlxuICAgIChtYXRjaFsyXSA/ICttYXRjaFsyXSA6IDApKTtcbn07XG5mdW5jdGlvbiBnZXREZWNpbWFscyh2YWx1ZSkge1xuICBpZiAoZGVjaW1hbFBsYWNlcyh2YWx1ZSkgPiAwICYmIHZhbHVlID4gMCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KGAwLiR7dmFsdWUudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV19YCk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gcmVtYXAodmFsdWUsIGZyb21NaW4sIGZyb21NYXgsIHRvTWluLCB0b01heCkge1xuICByZXR1cm4gKCh2YWx1ZSAtIGZyb21NaW4pICogKHRvTWF4IC0gdG9NaW4pKSAvIChmcm9tTWF4IC0gZnJvbU1pbikgKyB0b01pbjtcbn1cbi8qKlxuICogSGVscGVyIHRvIGRldGVybWluZSBpZiBhIHZhbHVlIGlzIGNsb3NlIHRvIHRoZSBlZGdlIG9mIGEgcmFuZ2Ugd2l0aGluIGEgdGhyZXNob2xkLlxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIHJhbmdlXG4gKiBAcGFyYW0gdGhyZXNob2xkXG4gKiBAcmV0dXJucyAtMSBpZiBjbG9zZSB0byBsb3dlciBlZGdlLCAxIGlmIGNsb3NlIHRvIHVwcGVyIGVkZ2UsIDAgb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBjbG9zZVRvUmFuZ2VFZGdlKHZhbHVlLCByYW5nZSwgdGhyZXNob2xkKSB7XG4gIHJldHVybiB2YWx1ZSA8IHRocmVzaG9sZCA/IC0xIDogdmFsdWUgPiByYW5nZSAtIHRocmVzaG9sZCA/IDEgOiAwO1xufVxuXG5leHBvcnQgeyBjbG9zZVRvUmFuZ2VFZGdlIGFzIGEsIGNsYW1wIGFzIGMsIGRlY2ltYWxQbGFjZXMgYXMgZCwgZ2V0RGVjaW1hbHMgYXMgZywgcmVtYXAgYXMgciB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBuIGFzIG51bWJlcktleXMgfSBmcm9tICcuL2tleS5qcyc7XG5pbXBvcnQgeyBuIGFzIG51bWJlclN0cmluZ0Zvcm1hdHRlciwgYiBhcyBnZXREYXRlVGltZUZvcm1hdCwgaSBhcyBpc1ZhbGlkTnVtYmVyLCBmIGFzIGdldFN1cHBvcnRlZE51bWJlcmluZ1N5c3RlbSwgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IGQgYXMgZGVjaW1hbFBsYWNlcywgZyBhcyBnZXREZWNpbWFscyB9IGZyb20gJy4vbWF0aC5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldEljb25TY2FsZSB9IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCB7IGMgYXMgY29tcG9uZW50Rm9jdXNhYmxlLCBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMSB9IGZyb20gJy4vaWNvbi5qcyc7XG5cbmNvbnN0IG1heFRlbnRoRm9yTWludXRlQW5kU2Vjb25kID0gNTtcbmZ1bmN0aW9uIGNyZWF0ZUxvY2FsZURhdGVUaW1lRm9ybWF0dGVyKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBpbmNsdWRlU2Vjb25kcyA9IHRydWUsIGZyYWN0aW9uYWxTZWNvbmREaWdpdHMpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgIHRpbWVab25lOiBcIlVUQ1wiLFxuICAgIG51bWJlcmluZ1N5c3RlbTogZ2V0U3VwcG9ydGVkTnVtYmVyaW5nU3lzdGVtKG51bWJlcmluZ1N5c3RlbSksXG4gIH07XG4gIGlmIChpbmNsdWRlU2Vjb25kcykge1xuICAgIG9wdGlvbnMuc2Vjb25kID0gXCIyLWRpZ2l0XCI7XG4gICAgaWYgKGZyYWN0aW9uYWxTZWNvbmREaWdpdHMpIHtcbiAgICAgIG9wdGlvbnMuZnJhY3Rpb25hbFNlY29uZERpZ2l0cyA9IGZyYWN0aW9uYWxTZWNvbmREaWdpdHM7XG4gICAgfVxuICB9XG4gIHJldHVybiBnZXREYXRlVGltZUZvcm1hdChsb2NhbGUsIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZVBhcnQobnVtYmVyLCBtaW5MZW5ndGgpIHtcbiAgaWYgKG51bWJlciA9PT0gbnVsbCB8fCBudW1iZXIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBudW1iZXJBc1N0cmluZyA9IG51bWJlci50b1N0cmluZygpO1xuICBjb25zdCBudW1iZXJEZWNpbWFsUGxhY2VzID0gZGVjaW1hbFBsYWNlcyhudW1iZXIpO1xuICBpZiAobnVtYmVyIDwgMSAmJiBudW1iZXJEZWNpbWFsUGxhY2VzID4gMCAmJiBudW1iZXJEZWNpbWFsUGxhY2VzIDwgNCkge1xuICAgIGNvbnN0IGZyYWN0aW9uYWxEaWdpdHMgPSBudW1iZXJBc1N0cmluZy5yZXBsYWNlKFwiMC5cIiwgXCJcIik7XG4gICAgaWYgKCFtaW5MZW5ndGggfHwgZnJhY3Rpb25hbERpZ2l0cy5sZW5ndGggPT09IG1pbkxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZyYWN0aW9uYWxEaWdpdHM7XG4gICAgfVxuICAgIGlmIChmcmFjdGlvbmFsRGlnaXRzLmxlbmd0aCA8IG1pbkxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZyYWN0aW9uYWxEaWdpdHMucGFkRW5kKG1pbkxlbmd0aCwgXCIwXCIpO1xuICAgIH1cbiAgICByZXR1cm4gZnJhY3Rpb25hbERpZ2l0cztcbiAgfVxuICBpZiAobnVtYmVyID49IDAgJiYgbnVtYmVyIDwgMTApIHtcbiAgICByZXR1cm4gbnVtYmVyQXNTdHJpbmcucGFkU3RhcnQoMiwgXCIwXCIpO1xuICB9XG4gIGlmIChudW1iZXIgPj0gMTApIHtcbiAgICByZXR1cm4gbnVtYmVyQXNTdHJpbmc7XG4gIH1cbn1cbmZ1bmN0aW9uIGZvcm1hdFRpbWVTdHJpbmcodmFsdWUpIHtcbiAgaWYgKCFpc1ZhbGlkVGltZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB7IGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBmcmFjdGlvbmFsU2Vjb25kIH0gPSBwYXJzZVRpbWVTdHJpbmcodmFsdWUpO1xuICBsZXQgZm9ybWF0dGVkVmFsdWUgPSBgJHtmb3JtYXRUaW1lUGFydChwYXJzZUludChob3VyKSl9OiR7Zm9ybWF0VGltZVBhcnQocGFyc2VJbnQobWludXRlKSl9YDtcbiAgaWYgKHNlY29uZCkge1xuICAgIGZvcm1hdHRlZFZhbHVlICs9IGA6JHtmb3JtYXRUaW1lUGFydChwYXJzZUludChzZWNvbmQpKX1gO1xuICAgIGlmIChmcmFjdGlvbmFsU2Vjb25kKSB7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZSArPSBgLiR7ZnJhY3Rpb25hbFNlY29uZH1gO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZm9ybWF0dGVkVmFsdWU7XG59XG5mdW5jdGlvbiBmcmFjdGlvbmFsU2Vjb25kUGFydFRvTWlsbGlzZWNvbmRzKGZyYWN0aW9uYWxTZWNvbmRQYXJ0KSB7XG4gIHJldHVybiBwYXJzZUludCgocGFyc2VGbG9hdChgMC4ke2ZyYWN0aW9uYWxTZWNvbmRQYXJ0fWApIC8gMC4wMDEpLnRvRml4ZWQoMykpO1xufVxuZnVuY3Rpb24gZ2V0TG9jYWxlSG91ckN5Y2xlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtKSB7XG4gIGNvbnN0IGZvcm1hdHRlciA9IGNyZWF0ZUxvY2FsZURhdGVUaW1lRm9ybWF0dGVyKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtKTtcbiAgY29uc3QgcGFydHMgPSBmb3JtYXR0ZXIuZm9ybWF0VG9QYXJ0cyhuZXcgRGF0ZShEYXRlLlVUQygwLCAwLCAwLCAwLCAwLCAwKSkpO1xuICByZXR1cm4gZ2V0TG9jYWxpemVkVGltZVBhcnQoXCJtZXJpZGllbVwiLCBwYXJ0cykgPyBcIjEyXCIgOiBcIjI0XCI7XG59XG5mdW5jdGlvbiBnZXRMb2NhbGl6ZWREZWNpbWFsU2VwYXJhdG9yKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtKSB7XG4gIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgIGxvY2FsZSxcbiAgICBudW1iZXJpbmdTeXN0ZW0sXG4gIH07XG4gIHJldHVybiBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubG9jYWxpemUoXCIxLjFcIikuc3BsaXQoXCJcIilbMV07XG59XG5mdW5jdGlvbiBnZXRMb2NhbGl6ZWRUaW1lUGFydFN1ZmZpeChwYXJ0LCBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSA9IFwibGF0blwiKSB7XG4gIGNvbnN0IGZvcm1hdHRlciA9IGNyZWF0ZUxvY2FsZURhdGVUaW1lRm9ybWF0dGVyKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtKTtcbiAgY29uc3QgcGFydHMgPSBmb3JtYXR0ZXIuZm9ybWF0VG9QYXJ0cyhuZXcgRGF0ZShEYXRlLlVUQygwLCAwLCAwLCAwLCAwLCAwKSkpO1xuICByZXR1cm4gZ2V0TG9jYWxpemVkVGltZVBhcnQoYCR7cGFydH1TdWZmaXhgLCBwYXJ0cyk7XG59XG5mdW5jdGlvbiBnZXRMb2NhbGl6ZWRUaW1lUGFydChwYXJ0LCBwYXJ0cykge1xuICBpZiAoIXBhcnQgfHwgIXBhcnRzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHBhcnQgPT09IFwiaG91clN1ZmZpeFwiKSB7XG4gICAgY29uc3QgaG91ckluZGV4ID0gcGFydHMuaW5kZXhPZihwYXJ0cy5maW5kKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gXCJob3VyXCIpKTtcbiAgICBjb25zdCBtaW51dGVJbmRleCA9IHBhcnRzLmluZGV4T2YocGFydHMuZmluZCgoeyB0eXBlIH0pID0+IHR5cGUgPT09IFwibWludXRlXCIpKTtcbiAgICBjb25zdCBob3VyU3VmZml4ID0gcGFydHNbaG91ckluZGV4ICsgMV07XG4gICAgcmV0dXJuIGhvdXJTdWZmaXggJiYgaG91clN1ZmZpeC50eXBlID09PSBcImxpdGVyYWxcIiAmJiBtaW51dGVJbmRleCAtIGhvdXJJbmRleCA9PT0gMlxuICAgICAgPyBob3VyU3VmZml4LnZhbHVlPy50cmltKCkgfHwgbnVsbFxuICAgICAgOiBudWxsO1xuICB9XG4gIGlmIChwYXJ0ID09PSBcIm1pbnV0ZVN1ZmZpeFwiKSB7XG4gICAgY29uc3QgbWludXRlSW5kZXggPSBwYXJ0cy5pbmRleE9mKHBhcnRzLmZpbmQoKHsgdHlwZSB9KSA9PiB0eXBlID09PSBcIm1pbnV0ZVwiKSk7XG4gICAgY29uc3Qgc2Vjb25kSW5kZXggPSBwYXJ0cy5pbmRleE9mKHBhcnRzLmZpbmQoKHsgdHlwZSB9KSA9PiB0eXBlID09PSBcInNlY29uZFwiKSk7XG4gICAgY29uc3QgbWludXRlU3VmZml4ID0gcGFydHNbbWludXRlSW5kZXggKyAxXTtcbiAgICByZXR1cm4gbWludXRlU3VmZml4ICYmIG1pbnV0ZVN1ZmZpeC50eXBlID09PSBcImxpdGVyYWxcIiAmJiBzZWNvbmRJbmRleCAtIG1pbnV0ZUluZGV4ID09PSAyXG4gICAgICA/IG1pbnV0ZVN1ZmZpeC52YWx1ZT8udHJpbSgpIHx8IG51bGxcbiAgICAgIDogbnVsbDtcbiAgfVxuICBpZiAocGFydCA9PT0gXCJzZWNvbmRTdWZmaXhcIikge1xuICAgIGNvbnN0IHNlY29uZEluZGV4ID0gcGFydHMuaW5kZXhPZihwYXJ0cy5maW5kKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gXCJzZWNvbmRcIikpO1xuICAgIGNvbnN0IHNlY29uZFN1ZmZpeCA9IHBhcnRzW3NlY29uZEluZGV4ICsgMV07XG4gICAgcmV0dXJuIHNlY29uZFN1ZmZpeCAmJiBzZWNvbmRTdWZmaXgudHlwZSA9PT0gXCJsaXRlcmFsXCIgPyBzZWNvbmRTdWZmaXgudmFsdWU/LnRyaW0oKSB8fCBudWxsIDogbnVsbDtcbiAgfVxuICByZXR1cm4gcGFydHMuZmluZCgoeyB0eXBlIH0pID0+IChwYXJ0ID09IFwibWVyaWRpZW1cIiA/IHR5cGUgPT09IFwiZGF5UGVyaW9kXCIgOiB0eXBlID09PSBwYXJ0KSk/LnZhbHVlIHx8IG51bGw7XG59XG5mdW5jdGlvbiBnZXRNZXJpZGllbShob3VyKSB7XG4gIGlmICghaXNWYWxpZE51bWJlcihob3VyKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IGhvdXJBc051bWJlciA9IHBhcnNlSW50KGhvdXIpO1xuICByZXR1cm4gaG91ckFzTnVtYmVyID49IDAgJiYgaG91ckFzTnVtYmVyIDw9IDExID8gXCJBTVwiIDogXCJQTVwiO1xufVxuZnVuY3Rpb24gaXNWYWxpZFRpbWUodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS5zdGFydHNXaXRoKFwiOlwiKSB8fCB2YWx1ZS5lbmRzV2l0aChcIjpcIikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qgc3BsaXRWYWx1ZSA9IHZhbHVlLnNwbGl0KFwiOlwiKTtcbiAgY29uc3QgdmFsaWRMZW5ndGggPSBzcGxpdFZhbHVlLmxlbmd0aCA+IDEgJiYgc3BsaXRWYWx1ZS5sZW5ndGggPCA0O1xuICBpZiAoIXZhbGlkTGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IFtob3VyLCBtaW51dGUsIHNlY29uZF0gPSBzcGxpdFZhbHVlO1xuICBjb25zdCBob3VyQXNOdW1iZXIgPSBwYXJzZUludChzcGxpdFZhbHVlWzBdKTtcbiAgY29uc3QgbWludXRlQXNOdW1iZXIgPSBwYXJzZUludChzcGxpdFZhbHVlWzFdKTtcbiAgY29uc3Qgc2Vjb25kQXNOdW1iZXIgPSBwYXJzZUludChzcGxpdFZhbHVlWzJdKTtcbiAgY29uc3QgaG91clZhbGlkID0gaXNWYWxpZE51bWJlcihob3VyKSAmJiBob3VyQXNOdW1iZXIgPj0gMCAmJiBob3VyQXNOdW1iZXIgPCAyNDtcbiAgY29uc3QgbWludXRlVmFsaWQgPSBpc1ZhbGlkTnVtYmVyKG1pbnV0ZSkgJiYgbWludXRlQXNOdW1iZXIgPj0gMCAmJiBtaW51dGVBc051bWJlciA8IDYwO1xuICBjb25zdCBzZWNvbmRWYWxpZCA9IGlzVmFsaWROdW1iZXIoc2Vjb25kKSAmJiBzZWNvbmRBc051bWJlciA+PSAwICYmIHNlY29uZEFzTnVtYmVyIDwgNjA7XG4gIGlmICgoaG91clZhbGlkICYmIG1pbnV0ZVZhbGlkICYmICFzZWNvbmQpIHx8IChob3VyVmFsaWQgJiYgbWludXRlVmFsaWQgJiYgc2Vjb25kVmFsaWQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbmZ1bmN0aW9uIGlzVmFsaWRUaW1lUGFydCh2YWx1ZSwgcGFydCkge1xuICBpZiAocGFydCA9PT0gXCJtZXJpZGllbVwiKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBcIkFNXCIgfHwgdmFsdWUgPT09IFwiUE1cIjtcbiAgfVxuICBpZiAoIWlzVmFsaWROdW1iZXIodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHZhbHVlQXNOdW1iZXIgPSBOdW1iZXIodmFsdWUpO1xuICByZXR1cm4gcGFydCA9PT0gXCJob3VyXCIgPyB2YWx1ZUFzTnVtYmVyID49IDAgJiYgdmFsdWVBc051bWJlciA8IDI0IDogdmFsdWVBc051bWJlciA+PSAwICYmIHZhbHVlQXNOdW1iZXIgPCA2MDtcbn1cbmZ1bmN0aW9uIGxvY2FsaXplVGltZVBhcnQoeyB2YWx1ZSwgcGFydCwgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0gfSkge1xuICBpZiAocGFydCA9PT0gXCJmcmFjdGlvbmFsU2Vjb25kXCIpIHtcbiAgICBjb25zdCBsb2NhbGl6ZWREZWNpbWFsU2VwYXJhdG9yID0gZ2V0TG9jYWxpemVkRGVjaW1hbFNlcGFyYXRvcihsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSk7XG4gICAgbGV0IGxvY2FsaXplZEZyYWN0aW9uYWxTZWNvbmQgPSBudWxsO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IGxvY2FsaXplZFplcm8gPSBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubG9jYWxpemUoXCIwXCIpO1xuICAgICAgaWYgKHBhcnNlSW50KHZhbHVlKSA9PT0gMCkge1xuICAgICAgICBsb2NhbGl6ZWRGcmFjdGlvbmFsU2Vjb25kID0gXCJcIi5wYWRTdGFydCh2YWx1ZS5sZW5ndGgsIGxvY2FsaXplZFplcm8pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxvY2FsaXplZEZyYWN0aW9uYWxTZWNvbmQgPSBudW1iZXJTdHJpbmdGb3JtYXR0ZXJcbiAgICAgICAgICAubG9jYWxpemUoYDAuJHt2YWx1ZX1gKVxuICAgICAgICAgIC5yZXBsYWNlKGAke2xvY2FsaXplZFplcm99JHtsb2NhbGl6ZWREZWNpbWFsU2VwYXJhdG9yfWAsIFwiXCIpO1xuICAgICAgICBpZiAobG9jYWxpemVkRnJhY3Rpb25hbFNlY29uZC5sZW5ndGggPCB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICBsb2NhbGl6ZWRGcmFjdGlvbmFsU2Vjb25kID0gbG9jYWxpemVkRnJhY3Rpb25hbFNlY29uZC5wYWRFbmQodmFsdWUubGVuZ3RoLCBsb2NhbGl6ZWRaZXJvKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbG9jYWxpemVkRnJhY3Rpb25hbFNlY29uZDtcbiAgfVxuICBpZiAoIWlzVmFsaWRUaW1lUGFydCh2YWx1ZSwgcGFydCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgdmFsdWVBc051bWJlciA9IHBhcnNlSW50KHZhbHVlKTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKDAsIDAsIDAsIHBhcnQgPT09IFwiaG91clwiID8gdmFsdWVBc051bWJlciA6IHBhcnQgPT09IFwibWVyaWRpZW1cIiA/ICh2YWx1ZSA9PT0gXCJBTVwiID8gMCA6IDEyKSA6IDAsIHBhcnQgPT09IFwibWludXRlXCIgPyB2YWx1ZUFzTnVtYmVyIDogMCwgcGFydCA9PT0gXCJzZWNvbmRcIiA/IHZhbHVlQXNOdW1iZXIgOiAwKSk7XG4gIGlmICghZGF0ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBmb3JtYXR0ZXIgPSBjcmVhdGVMb2NhbGVEYXRlVGltZUZvcm1hdHRlcihsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSk7XG4gIGNvbnN0IHBhcnRzID0gZm9ybWF0dGVyLmZvcm1hdFRvUGFydHMoZGF0ZSk7XG4gIHJldHVybiBnZXRMb2NhbGl6ZWRUaW1lUGFydChwYXJ0LCBwYXJ0cyk7XG59XG5mdW5jdGlvbiBsb2NhbGl6ZVRpbWVTdHJpbmcoeyB2YWx1ZSwgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIGluY2x1ZGVTZWNvbmRzID0gdHJ1ZSwgZnJhY3Rpb25hbFNlY29uZERpZ2l0cywgfSkge1xuICBpZiAoIWlzVmFsaWRUaW1lKHZhbHVlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHsgaG91ciwgbWludXRlLCBzZWNvbmQgPSBcIjBcIiwgZnJhY3Rpb25hbFNlY29uZCB9ID0gcGFyc2VUaW1lU3RyaW5nKHZhbHVlKTtcbiAgY29uc3QgZGF0ZUZyb21UaW1lU3RyaW5nID0gbmV3IERhdGUoRGF0ZS5VVEMoMCwgMCwgMCwgcGFyc2VJbnQoaG91ciksIHBhcnNlSW50KG1pbnV0ZSksIHBhcnNlSW50KHNlY29uZCksIGZyYWN0aW9uYWxTZWNvbmQgJiYgZnJhY3Rpb25hbFNlY29uZFBhcnRUb01pbGxpc2Vjb25kcyhmcmFjdGlvbmFsU2Vjb25kKSkpO1xuICBjb25zdCBmb3JtYXR0ZXIgPSBjcmVhdGVMb2NhbGVEYXRlVGltZUZvcm1hdHRlcihsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgaW5jbHVkZVNlY29uZHMsIGZyYWN0aW9uYWxTZWNvbmREaWdpdHMpO1xuICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChkYXRlRnJvbVRpbWVTdHJpbmcpIHx8IG51bGw7XG59XG5mdW5jdGlvbiBsb2NhbGl6ZVRpbWVTdHJpbmdUb1BhcnRzKHsgdmFsdWUsIGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtID0gXCJsYXRuXCIsIH0pIHtcbiAgaWYgKCFpc1ZhbGlkVGltZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB7IGhvdXIsIG1pbnV0ZSwgc2Vjb25kID0gXCIwXCIsIGZyYWN0aW9uYWxTZWNvbmQgfSA9IHBhcnNlVGltZVN0cmluZyh2YWx1ZSk7XG4gIGNvbnN0IGRhdGVGcm9tVGltZVN0cmluZyA9IG5ldyBEYXRlKERhdGUuVVRDKDAsIDAsIDAsIHBhcnNlSW50KGhvdXIpLCBwYXJzZUludChtaW51dGUpLCBwYXJzZUludChzZWNvbmQpKSk7XG4gIGlmIChkYXRlRnJvbVRpbWVTdHJpbmcpIHtcbiAgICBjb25zdCBmb3JtYXR0ZXIgPSBjcmVhdGVMb2NhbGVEYXRlVGltZUZvcm1hdHRlcihsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSk7XG4gICAgY29uc3QgcGFydHMgPSBmb3JtYXR0ZXIuZm9ybWF0VG9QYXJ0cyhkYXRlRnJvbVRpbWVTdHJpbmcpO1xuICAgIHJldHVybiB7XG4gICAgICBsb2NhbGl6ZWRIb3VyOiBnZXRMb2NhbGl6ZWRUaW1lUGFydChcImhvdXJcIiwgcGFydHMpLFxuICAgICAgbG9jYWxpemVkSG91clN1ZmZpeDogZ2V0TG9jYWxpemVkVGltZVBhcnQoXCJob3VyU3VmZml4XCIsIHBhcnRzKSxcbiAgICAgIGxvY2FsaXplZE1pbnV0ZTogZ2V0TG9jYWxpemVkVGltZVBhcnQoXCJtaW51dGVcIiwgcGFydHMpLFxuICAgICAgbG9jYWxpemVkTWludXRlU3VmZml4OiBnZXRMb2NhbGl6ZWRUaW1lUGFydChcIm1pbnV0ZVN1ZmZpeFwiLCBwYXJ0cyksXG4gICAgICBsb2NhbGl6ZWRTZWNvbmQ6IGdldExvY2FsaXplZFRpbWVQYXJ0KFwic2Vjb25kXCIsIHBhcnRzKSxcbiAgICAgIGxvY2FsaXplZERlY2ltYWxTZXBhcmF0b3I6IGdldExvY2FsaXplZERlY2ltYWxTZXBhcmF0b3IobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0pLFxuICAgICAgbG9jYWxpemVkRnJhY3Rpb25hbFNlY29uZDogbG9jYWxpemVUaW1lUGFydCh7XG4gICAgICAgIHZhbHVlOiBmcmFjdGlvbmFsU2Vjb25kLFxuICAgICAgICBwYXJ0OiBcImZyYWN0aW9uYWxTZWNvbmRcIixcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0sXG4gICAgICB9KSxcbiAgICAgIGxvY2FsaXplZFNlY29uZFN1ZmZpeDogZ2V0TG9jYWxpemVkVGltZVBhcnQoXCJzZWNvbmRTdWZmaXhcIiwgcGFydHMpLFxuICAgICAgbG9jYWxpemVkTWVyaWRpZW06IGdldExvY2FsaXplZFRpbWVQYXJ0KFwibWVyaWRpZW1cIiwgcGFydHMpLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBnZXRUaW1lUGFydHMoeyB2YWx1ZSwgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0gfSkge1xuICBpZiAoIWlzVmFsaWRUaW1lKHZhbHVlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHsgaG91ciwgbWludXRlLCBzZWNvbmQgPSBcIjBcIiB9ID0gcGFyc2VUaW1lU3RyaW5nKHZhbHVlKTtcbiAgY29uc3QgZGF0ZUZyb21UaW1lU3RyaW5nID0gbmV3IERhdGUoRGF0ZS5VVEMoMCwgMCwgMCwgcGFyc2VJbnQoaG91ciksIHBhcnNlSW50KG1pbnV0ZSksIHBhcnNlSW50KHNlY29uZCkpKTtcbiAgaWYgKGRhdGVGcm9tVGltZVN0cmluZykge1xuICAgIGNvbnN0IGZvcm1hdHRlciA9IGNyZWF0ZUxvY2FsZURhdGVUaW1lRm9ybWF0dGVyKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtKTtcbiAgICBjb25zdCBwYXJ0cyA9IGZvcm1hdHRlci5mb3JtYXRUb1BhcnRzKGRhdGVGcm9tVGltZVN0cmluZyk7XG4gICAgcmV0dXJuIHBhcnRzO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lU3RyaW5nKHZhbHVlKSB7XG4gIGlmIChpc1ZhbGlkVGltZSh2YWx1ZSkpIHtcbiAgICBjb25zdCBbaG91ciwgbWludXRlLCBzZWNvbmREZWNpbWFsXSA9IHZhbHVlLnNwbGl0KFwiOlwiKTtcbiAgICBsZXQgc2Vjb25kID0gc2Vjb25kRGVjaW1hbDtcbiAgICBsZXQgZnJhY3Rpb25hbFNlY29uZCA9IG51bGw7XG4gICAgaWYgKHNlY29uZERlY2ltYWw/LmluY2x1ZGVzKFwiLlwiKSkge1xuICAgICAgW3NlY29uZCwgZnJhY3Rpb25hbFNlY29uZF0gPSBzZWNvbmREZWNpbWFsLnNwbGl0KFwiLlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGZyYWN0aW9uYWxTZWNvbmQsXG4gICAgICBob3VyLFxuICAgICAgbWludXRlLFxuICAgICAgc2Vjb25kLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBmcmFjdGlvbmFsU2Vjb25kOiBudWxsLFxuICAgIGhvdXI6IG51bGwsXG4gICAgbWludXRlOiBudWxsLFxuICAgIHNlY29uZDogbnVsbCxcbiAgfTtcbn1cbmZ1bmN0aW9uIHRvSVNPVGltZVN0cmluZyh2YWx1ZSwgaW5jbHVkZVNlY29uZHMgPSB0cnVlKSB7XG4gIGlmICghaXNWYWxpZFRpbWUodmFsdWUpKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgY29uc3QgeyBob3VyLCBtaW51dGUsIHNlY29uZCwgZnJhY3Rpb25hbFNlY29uZCB9ID0gcGFyc2VUaW1lU3RyaW5nKHZhbHVlKTtcbiAgbGV0IGlzb1RpbWVTdHJpbmcgPSBgJHtmb3JtYXRUaW1lUGFydChwYXJzZUludChob3VyKSl9OiR7Zm9ybWF0VGltZVBhcnQocGFyc2VJbnQobWludXRlKSl9YDtcbiAgaWYgKGluY2x1ZGVTZWNvbmRzKSB7XG4gICAgaXNvVGltZVN0cmluZyArPSBgOiR7Zm9ybWF0VGltZVBhcnQocGFyc2VJbnQoKGluY2x1ZGVTZWNvbmRzICYmIHNlY29uZCkgfHwgXCIwXCIpKX1gO1xuICAgIGlmIChmcmFjdGlvbmFsU2Vjb25kKSB7XG4gICAgICBpc29UaW1lU3RyaW5nICs9IGAuJHtmcmFjdGlvbmFsU2Vjb25kfWA7XG4gICAgfVxuICB9XG4gIHJldHVybiBpc29UaW1lU3RyaW5nO1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJ1dHRvbjogXCJidXR0b25cIixcbiAgYnV0dG9uQm90dG9tTGVmdDogXCJidXR0b24tLWJvdHRvbS1sZWZ0XCIsXG4gIGJ1dHRvbkJvdHRvbVJpZ2h0OiBcImJ1dHRvbi0tYm90dG9tLXJpZ2h0XCIsXG4gIGJ1dHRvbkZyYWN0aW9uYWxTZWNvbmREb3duOiBcImJ1dHRvbi0tZnJhY3Rpb25hbFNlY29uZC1kb3duXCIsXG4gIGJ1dHRvbkZyYWN0aW9uYWxTZWNvbmRVcDogXCJidXR0b24tLWZyYWN0aW9uYWxTZWNvbmQtdXBcIixcbiAgYnV0dG9uSG91ckRvd246IFwiYnV0dG9uLS1ob3VyLWRvd25cIixcbiAgYnV0dG9uSG91clVwOiBcImJ1dHRvbi0taG91ci11cFwiLFxuICBidXR0b25NZXJpZGllbURvd246IFwiYnV0dG9uLS1tZXJpZGllbS1kb3duXCIsXG4gIGJ1dHRvbk1lcmlkaWVtVXA6IFwiYnV0dG9uLS1tZXJpZGllbS11cFwiLFxuICBidXR0b25NaW51dGVEb3duOiBcImJ1dHRvbi0tbWludXRlLWRvd25cIixcbiAgYnV0dG9uTWludXRlVXA6IFwiYnV0dG9uLS1taW51dGUtdXBcIixcbiAgYnV0dG9uU2Vjb25kRG93bjogXCJidXR0b24tLXNlY29uZC1kb3duXCIsXG4gIGJ1dHRvblNlY29uZFVwOiBcImJ1dHRvbi0tc2Vjb25kLXVwXCIsXG4gIGJ1dHRvblRvcExlZnQ6IFwiYnV0dG9uLS10b3AtbGVmdFwiLFxuICBidXR0b25Ub3BSaWdodDogXCJidXR0b24tLXRvcC1yaWdodFwiLFxuICBjb2x1bW46IFwiY29sdW1uXCIsXG4gIGRlbGltaXRlcjogXCJkZWxpbWl0ZXJcIixcbiAgZnJhY3Rpb25hbFNlY29uZDogXCJmcmFjdGlvbmFsU2Vjb25kXCIsXG4gIGhvdXI6IFwiaG91clwiLFxuICBpbnB1dDogXCJpbnB1dFwiLFxuICBpbnB1dEZvY3VzOiBcImlucHV0Rm9jdXNcIixcbiAgbWVyaWRpZW06IFwibWVyaWRpZW1cIixcbiAgbWludXRlOiBcIm1pbnV0ZVwiLFxuICBzZWNvbmQ6IFwic2Vjb25kXCIsXG4gIHNob3dNZXJpZGllbTogXCJzaG93LW1lcmlkaWVtXCIsXG4gIHNob3dTZWNvbmQ6IFwic2hvdy1zZWNvbmRcIixcbiAgXCJzY2FsZS1zXCI6IFwic2NhbGUtc1wiLFxuICBcInNjYWxlLW1cIjogXCJzY2FsZS1tXCIsXG4gIFwic2NhbGUtbFwiOiBcInNjYWxlLWxcIixcbiAgdGltZVBpY2tlcjogXCJ0aW1lLXBpY2tlclwiLFxuICBtZXJpZGllbVN0YXJ0OiBcIm1lcmlkaWVtLS1zdGFydFwiLFxufTtcblxuY29uc3QgdGltZVBpY2tlckNzcyA9IFwiOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2t9LnRpbWUtcGlja2Vye2Rpc3BsYXk6ZmxleDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTstLXR3LXNoYWRvdzowIDZweCAyMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDRweCAxMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA4KTstLXR3LXNoYWRvdy1jb2xvcmVkOjAgNnB4IDIwcHggLTRweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDRweCAxMnB4IC0ycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7Ym9yZGVyLXJhZGl1czp2YXIoLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMpfS50aW1lLXBpY2tlciAuY29sdW1ue2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LnRpbWUtcGlja2VyIC5tZXJpZGllbS0tc3RhcnR7b3JkZXI6LTF9LnRpbWUtcGlja2VyIC5idXR0b257ZGlzcGxheTppbmxpbmUtZmxleDtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX0udGltZS1waWNrZXIgLmJ1dHRvbjpob3ZlciwudGltZS1waWNrZXIgLmJ1dHRvbjpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTtvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHg7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWhlYWRlcik7b3V0bGluZS1vZmZzZXQ6MH0udGltZS1waWNrZXIgLmJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyl9LnRpbWUtcGlja2VyIC5idXR0b24udG9wLWxlZnR7Ym9yZGVyLXN0YXJ0LXN0YXJ0LXJhZGl1czp2YXIoLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMpfS50aW1lLXBpY2tlciAuYnV0dG9uLmJvdHRvbS1sZWZ0e2JvcmRlci1lbmQtc3RhcnQtcmFkaXVzOnZhcigtLWNhbGNpdGUtYm9yZGVyLXJhZGl1cyl9LnRpbWUtcGlja2VyIC5idXR0b24udG9wLXJpZ2h0e2JvcmRlci1zdGFydC1lbmQtcmFkaXVzOnZhcigtLWNhbGNpdGUtYm9yZGVyLXJhZGl1cyl9LnRpbWUtcGlja2VyIC5idXR0b24uYm90dG9tLXJpZ2h0e2JvcmRlci1lbmQtZW5kLXJhZGl1czp2YXIoLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMpfS50aW1lLXBpY2tlciAuYnV0dG9uIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9LnRpbWUtcGlja2VyIC5pbnB1dHtkaXNwbGF5OmlubGluZS1mbGV4O2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKX0udGltZS1waWNrZXIgLmlucHV0OmhvdmVye2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtaGVhZGVyKX0udGltZS1waWNrZXIgLmlucHV0OmZvY3VzLC50aW1lLXBpY2tlciAuaW5wdXQ6aG92ZXI6Zm9jdXN7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4O291dGxpbmUtb2Zmc2V0OjB9LnRpbWUtcGlja2VyIC5pbnB1dC5pbnB1dEZvY3VzLC50aW1lLXBpY2tlciAuaW5wdXQ6aG92ZXIuaW5wdXRGb2N1c3tib3gtc2hhZG93Omluc2V0IDAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtaGVhZGVyKX0udGltZS1waWNrZXIuc2NhbGUtc3tmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpfS50aW1lLXBpY2tlci5zY2FsZS1zIC5idXR0b24sLnRpbWUtcGlja2VyLnNjYWxlLXMgLmlucHV0e3BhZGRpbmctaW5saW5lOjAuNzVyZW07cGFkZGluZy1ibG9jazowLjI1cmVtfS50aW1lLXBpY2tlci5zY2FsZS1zOm5vdCguc2hvdy1tZXJpZGllbSkgLmRlbGltaXRlcjpsYXN0LWNoaWxke3BhZGRpbmctaW5saW5lLWVuZDowLjc1cmVtfS50aW1lLXBpY2tlci5zY2FsZS1te2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKX0udGltZS1waWNrZXIuc2NhbGUtbSAuYnV0dG9uLC50aW1lLXBpY2tlci5zY2FsZS1tIC5pbnB1dHtwYWRkaW5nLWlubGluZToxcmVtO3BhZGRpbmctYmxvY2s6MC41cmVtfS50aW1lLXBpY2tlci5zY2FsZS1tOm5vdCguc2hvdy1tZXJpZGllbSkgLmRlbGltaXRlcjpsYXN0LWNoaWxke3BhZGRpbmctaW5saW5lLWVuZDoxcmVtfS50aW1lLXBpY2tlci5zY2FsZS1se2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0xKX0udGltZS1waWNrZXIuc2NhbGUtbCAuYnV0dG9uLC50aW1lLXBpY2tlci5zY2FsZS1sIC5pbnB1dHtwYWRkaW5nLWlubGluZToxLjI1cmVtO3BhZGRpbmctYmxvY2s6MC43NXJlbX0udGltZS1waWNrZXIuc2NhbGUtbDpub3QoLnNob3ctbWVyaWRpZW0pIC5kZWxpbWl0ZXI6bGFzdC1jaGlsZHtwYWRkaW5nLWlubGluZS1lbmQ6MS4yNXJlbX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cbmNvbnN0IFRpbWVQaWNrZXIgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGltZVBpY2tlckJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFRpbWVQaWNrZXJCbHVyXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGltZVBpY2tlckNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsVGltZVBpY2tlckNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRpbWVQaWNrZXJGb2N1cyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsVGltZVBpY2tlckZvY3VzXCIsIDYpO1xuICAgIHRoaXMucG9pbnRlckFjdGl2YXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVjcmVtZW50SG91ciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld0hvdXIgPSAhdGhpcy5ob3VyID8gMCA6IHRoaXMuaG91ciA9PT0gXCIwMFwiID8gMjMgOiBwYXJzZUludCh0aGlzLmhvdXIpIC0gMTtcbiAgICAgIHRoaXMuc2V0VmFsdWVQYXJ0KFwiaG91clwiLCBuZXdIb3VyKTtcbiAgICB9O1xuICAgIHRoaXMuZGVjcmVtZW50TWVyaWRpZW0gPSAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdNZXJpZGllbSA9IHRoaXMubWVyaWRpZW0gPT09IFwiUE1cIiA/IFwiQU1cIiA6IFwiUE1cIjtcbiAgICAgIHRoaXMuc2V0VmFsdWVQYXJ0KFwibWVyaWRpZW1cIiwgbmV3TWVyaWRpZW0pO1xuICAgIH07XG4gICAgdGhpcy5kZWNyZW1lbnRNaW51dGVPclNlY29uZCA9IChrZXkpID0+IHtcbiAgICAgIGxldCBuZXdWYWx1ZTtcbiAgICAgIGlmIChpc1ZhbGlkTnVtYmVyKHRoaXNba2V5XSkpIHtcbiAgICAgICAgY29uc3QgdmFsdWVBc051bWJlciA9IHBhcnNlSW50KHRoaXNba2V5XSk7XG4gICAgICAgIG5ld1ZhbHVlID0gdmFsdWVBc051bWJlciA9PT0gMCA/IDU5IDogdmFsdWVBc051bWJlciAtIDE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV3VmFsdWUgPSA1OTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0VmFsdWVQYXJ0KGtleSwgbmV3VmFsdWUpO1xuICAgIH07XG4gICAgdGhpcy5kZWNyZW1lbnRNaW51dGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLmRlY3JlbWVudE1pbnV0ZU9yU2Vjb25kKFwibWludXRlXCIpO1xuICAgIH07XG4gICAgdGhpcy5kZWNyZW1lbnRTZWNvbmQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmRlY3JlbWVudE1pbnV0ZU9yU2Vjb25kKFwic2Vjb25kXCIpO1xuICAgIH07XG4gICAgdGhpcy5mb2N1c0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnBvaW50ZXJBY3RpdmF0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5hY3RpdmVFbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgfTtcbiAgICB0aGlzLmZyYWN0aW9uYWxTZWNvbmRLZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgICAgaWYgKG51bWJlcktleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBjb25zdCBzdGVwUHJlY2lzaW9uID0gZGVjaW1hbFBsYWNlcyh0aGlzLnN0ZXApO1xuICAgICAgICBjb25zdCBmcmFjdGlvbmFsU2Vjb25kQXNJbnRlZ2VyID0gcGFyc2VJbnQodGhpcy5mcmFjdGlvbmFsU2Vjb25kKTtcbiAgICAgICAgY29uc3QgZnJhY3Rpb25hbFNlY29uZEFzSW50ZWdlckxlbmd0aCA9IGZyYWN0aW9uYWxTZWNvbmRBc0ludGVnZXIudG9TdHJpbmcoKS5sZW5ndGg7XG4gICAgICAgIGxldCBuZXdGcmFjdGlvbmFsU2Vjb25kQXNJbnRlZ2VyU3RyaW5nO1xuICAgICAgICBpZiAoZnJhY3Rpb25hbFNlY29uZEFzSW50ZWdlckxlbmd0aCA+PSBzdGVwUHJlY2lzaW9uKSB7XG4gICAgICAgICAgbmV3RnJhY3Rpb25hbFNlY29uZEFzSW50ZWdlclN0cmluZyA9IGtleS5wYWRTdGFydChzdGVwUHJlY2lzaW9uLCBcIjBcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZnJhY3Rpb25hbFNlY29uZEFzSW50ZWdlckxlbmd0aCA8IHN0ZXBQcmVjaXNpb24pIHtcbiAgICAgICAgICBuZXdGcmFjdGlvbmFsU2Vjb25kQXNJbnRlZ2VyU3RyaW5nID0gYCR7ZnJhY3Rpb25hbFNlY29uZEFzSW50ZWdlcn0ke2tleX1gLnBhZFN0YXJ0KHN0ZXBQcmVjaXNpb24sIFwiMFwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFZhbHVlUGFydChcImZyYWN0aW9uYWxTZWNvbmRcIiwgcGFyc2VGbG9hdChgMC4ke25ld0ZyYWN0aW9uYWxTZWNvbmRBc0ludGVnZXJTdHJpbmd9YCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgY2FzZSBcIkJhY2tzcGFjZVwiOlxuICAgICAgICAgIGNhc2UgXCJEZWxldGVcIjpcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVQYXJ0KFwiZnJhY3Rpb25hbFNlY29uZFwiLCBudWxsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLm51ZGdlRnJhY3Rpb25hbFNlY29uZChcImRvd25cIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMubnVkZ2VGcmFjdGlvbmFsU2Vjb25kKFwidXBcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiIFwiOlxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmZyYWN0aW9uYWxTZWNvbmREb3duQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVFbCA9IHRoaXMuZnJhY3Rpb25hbFNlY29uZEVsO1xuICAgICAgdGhpcy5mcmFjdGlvbmFsU2Vjb25kRWwuZm9jdXMoKTtcbiAgICAgIHRoaXMubnVkZ2VGcmFjdGlvbmFsU2Vjb25kKFwiZG93blwiKTtcbiAgICB9O1xuICAgIHRoaXMuZnJhY3Rpb25hbFNlY29uZFVwQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVFbCA9IHRoaXMuZnJhY3Rpb25hbFNlY29uZEVsO1xuICAgICAgdGhpcy5mcmFjdGlvbmFsU2Vjb25kRWwuZm9jdXMoKTtcbiAgICAgIHRoaXMubnVkZ2VGcmFjdGlvbmFsU2Vjb25kKFwidXBcIik7XG4gICAgfTtcbiAgICB0aGlzLmhvdXJEb3duQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVFbCA9IHRoaXMuaG91ckVsO1xuICAgICAgdGhpcy5ob3VyRWwuZm9jdXMoKTtcbiAgICAgIHRoaXMuZGVjcmVtZW50SG91cigpO1xuICAgIH07XG4gICAgdGhpcy5ob3VyS2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcbiAgICAgIGlmIChudW1iZXJLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgY29uc3Qga2V5QXNOdW1iZXIgPSBwYXJzZUludChrZXkpO1xuICAgICAgICBsZXQgbmV3SG91cjtcbiAgICAgICAgaWYgKGlzVmFsaWROdW1iZXIodGhpcy5ob3VyKSkge1xuICAgICAgICAgIHN3aXRjaCAodGhpcy5ob3VyQ3ljbGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCIxMlwiOlxuICAgICAgICAgICAgICBuZXdIb3VyID1cbiAgICAgICAgICAgICAgICB0aGlzLmhvdXIgPT09IFwiMDFcIiAmJiBrZXlBc051bWJlciA+PSAwICYmIGtleUFzTnVtYmVyIDw9IDJcbiAgICAgICAgICAgICAgICAgID8gYDEke2tleUFzTnVtYmVyfWBcbiAgICAgICAgICAgICAgICAgIDoga2V5QXNOdW1iZXI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjI0XCI6XG4gICAgICAgICAgICAgIGlmICh0aGlzLmhvdXIgPT09IFwiMDFcIikge1xuICAgICAgICAgICAgICAgIG5ld0hvdXIgPSBgMSR7a2V5QXNOdW1iZXJ9YDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmhvdXIgPT09IFwiMDJcIiAmJiBrZXlBc051bWJlciA+PSAwICYmIGtleUFzTnVtYmVyIDw9IDMpIHtcbiAgICAgICAgICAgICAgICBuZXdIb3VyID0gYDIke2tleUFzTnVtYmVyfWA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3SG91ciA9IGtleUFzTnVtYmVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBuZXdIb3VyID0ga2V5QXNOdW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRWYWx1ZVBhcnQoXCJob3VyXCIsIG5ld0hvdXIpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgY2FzZSBcIkJhY2tzcGFjZVwiOlxuICAgICAgICAgIGNhc2UgXCJEZWxldGVcIjpcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVQYXJ0KFwiaG91clwiLCBudWxsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRlY3JlbWVudEhvdXIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnRIb3VyKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiIFwiOlxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhvdXJVcENsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlRWwgPSB0aGlzLmhvdXJFbDtcbiAgICAgIHRoaXMuaG91ckVsLmZvY3VzKCk7XG4gICAgICB0aGlzLmluY3JlbWVudEhvdXIoKTtcbiAgICB9O1xuICAgIHRoaXMuaW5jcmVtZW50TWVyaWRpZW0gPSAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdNZXJpZGllbSA9IHRoaXMubWVyaWRpZW0gPT09IFwiQU1cIiA/IFwiUE1cIiA6IFwiQU1cIjtcbiAgICAgIHRoaXMuc2V0VmFsdWVQYXJ0KFwibWVyaWRpZW1cIiwgbmV3TWVyaWRpZW0pO1xuICAgIH07XG4gICAgdGhpcy5pbmNyZW1lbnRIb3VyID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV3SG91ciA9IGlzVmFsaWROdW1iZXIodGhpcy5ob3VyKVxuICAgICAgICA/IHRoaXMuaG91ciA9PT0gXCIyM1wiXG4gICAgICAgICAgPyAwXG4gICAgICAgICAgOiBwYXJzZUludCh0aGlzLmhvdXIpICsgMVxuICAgICAgICA6IDE7XG4gICAgICB0aGlzLnNldFZhbHVlUGFydChcImhvdXJcIiwgbmV3SG91cik7XG4gICAgfTtcbiAgICB0aGlzLmluY3JlbWVudE1pbnV0ZU9yU2Vjb25kID0gKGtleSkgPT4ge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBpc1ZhbGlkTnVtYmVyKHRoaXNba2V5XSlcbiAgICAgICAgPyB0aGlzW2tleV0gPT09IFwiNTlcIlxuICAgICAgICAgID8gMFxuICAgICAgICAgIDogcGFyc2VJbnQodGhpc1trZXldKSArIDFcbiAgICAgICAgOiAwO1xuICAgICAgdGhpcy5zZXRWYWx1ZVBhcnQoa2V5LCBuZXdWYWx1ZSk7XG4gICAgfTtcbiAgICB0aGlzLmluY3JlbWVudE1pbnV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuaW5jcmVtZW50TWludXRlT3JTZWNvbmQoXCJtaW51dGVcIik7XG4gICAgfTtcbiAgICB0aGlzLmluY3JlbWVudFNlY29uZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuaW5jcmVtZW50TWludXRlT3JTZWNvbmQoXCJzZWNvbmRcIik7XG4gICAgfTtcbiAgICB0aGlzLmlucHV0Q2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZUVsID0gZXZlbnQudGFyZ2V0O1xuICAgIH07XG4gICAgdGhpcy5tZXJpZGllbVVwQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVFbCA9IHRoaXMubWVyaWRpZW1FbDtcbiAgICAgIHRoaXMubWVyaWRpZW1FbC5mb2N1cygpO1xuICAgICAgdGhpcy5pbmNyZW1lbnRNZXJpZGllbSgpO1xuICAgIH07XG4gICAgdGhpcy5tZXJpZGllbUtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICBjYXNlIFwiYVwiOlxuICAgICAgICAgIHRoaXMuc2V0VmFsdWVQYXJ0KFwibWVyaWRpZW1cIiwgXCJBTVwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInBcIjpcbiAgICAgICAgICB0aGlzLnNldFZhbHVlUGFydChcIm1lcmlkaWVtXCIsIFwiUE1cIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjpcbiAgICAgICAgY2FzZSBcIkRlbGV0ZVwiOlxuICAgICAgICAgIHRoaXMuc2V0VmFsdWVQYXJ0KFwibWVyaWRpZW1cIiwgbnVsbCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmluY3JlbWVudE1lcmlkaWVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuZGVjcmVtZW50TWVyaWRpZW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5tZXJpZGllbURvd25DbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZUVsID0gdGhpcy5tZXJpZGllbUVsO1xuICAgICAgdGhpcy5tZXJpZGllbUVsLmZvY3VzKCk7XG4gICAgICB0aGlzLmRlY3JlbWVudE1lcmlkaWVtKCk7XG4gICAgfTtcbiAgICB0aGlzLm1pbnV0ZURvd25DbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZUVsID0gdGhpcy5taW51dGVFbDtcbiAgICAgIHRoaXMubWludXRlRWwuZm9jdXMoKTtcbiAgICAgIHRoaXMuZGVjcmVtZW50TWludXRlKCk7XG4gICAgfTtcbiAgICB0aGlzLm1pbnV0ZVVwQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVFbCA9IHRoaXMubWludXRlRWw7XG4gICAgICB0aGlzLm1pbnV0ZUVsLmZvY3VzKCk7XG4gICAgICB0aGlzLmluY3JlbWVudE1pbnV0ZSgpO1xuICAgIH07XG4gICAgdGhpcy5taW51dGVLZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgICAgaWYgKG51bWJlcktleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBjb25zdCBrZXlBc051bWJlciA9IHBhcnNlSW50KGtleSk7XG4gICAgICAgIGxldCBuZXdNaW51dGU7XG4gICAgICAgIGlmIChpc1ZhbGlkTnVtYmVyKHRoaXMubWludXRlKSAmJiB0aGlzLm1pbnV0ZS5zdGFydHNXaXRoKFwiMFwiKSkge1xuICAgICAgICAgIGNvbnN0IG1pbnV0ZUFzTnVtYmVyID0gcGFyc2VJbnQodGhpcy5taW51dGUpO1xuICAgICAgICAgIG5ld01pbnV0ZSA9XG4gICAgICAgICAgICBtaW51dGVBc051bWJlciA+IG1heFRlbnRoRm9yTWludXRlQW5kU2Vjb25kXG4gICAgICAgICAgICAgID8ga2V5QXNOdW1iZXJcbiAgICAgICAgICAgICAgOiBgJHttaW51dGVBc051bWJlcn0ke2tleUFzTnVtYmVyfWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbmV3TWludXRlID0ga2V5QXNOdW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRWYWx1ZVBhcnQoXCJtaW51dGVcIiwgbmV3TWludXRlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjpcbiAgICAgICAgICBjYXNlIFwiRGVsZXRlXCI6XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlUGFydChcIm1pbnV0ZVwiLCBudWxsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRlY3JlbWVudE1pbnV0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmluY3JlbWVudE1pbnV0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5udWRnZUZyYWN0aW9uYWxTZWNvbmQgPSAoZGlyZWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdGVwRGVjaW1hbCA9IGdldERlY2ltYWxzKHRoaXMuc3RlcCk7XG4gICAgICBjb25zdCBzdGVwUHJlY2lzaW9uID0gZGVjaW1hbFBsYWNlcyh0aGlzLnN0ZXApO1xuICAgICAgY29uc3QgZnJhY3Rpb25hbFNlY29uZEFzSW50ZWdlciA9IHBhcnNlSW50KHRoaXMuZnJhY3Rpb25hbFNlY29uZCk7XG4gICAgICBjb25zdCBmcmFjdGlvbmFsU2Vjb25kQXNGbG9hdCA9IHBhcnNlRmxvYXQoYDAuJHt0aGlzLmZyYWN0aW9uYWxTZWNvbmR9YCk7XG4gICAgICBsZXQgbnVkZ2VkVmFsdWU7XG4gICAgICBsZXQgbnVkZ2VkVmFsdWVSb3VuZGVkO1xuICAgICAgbGV0IG51ZGdlZFZhbHVlUm91bmRlZERlY2ltYWxzO1xuICAgICAgbGV0IG5ld0ZyYWN0aW9uYWxTZWNvbmQ7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpIHtcbiAgICAgICAgbnVkZ2VkVmFsdWUgPSBpc05hTihmcmFjdGlvbmFsU2Vjb25kQXNJbnRlZ2VyKSA/IDAgOiBmcmFjdGlvbmFsU2Vjb25kQXNGbG9hdCArIHN0ZXBEZWNpbWFsO1xuICAgICAgICBudWRnZWRWYWx1ZVJvdW5kZWQgPSBwYXJzZUZsb2F0KG51ZGdlZFZhbHVlLnRvRml4ZWQoc3RlcFByZWNpc2lvbikpO1xuICAgICAgICBudWRnZWRWYWx1ZVJvdW5kZWREZWNpbWFscyA9IGdldERlY2ltYWxzKG51ZGdlZFZhbHVlUm91bmRlZCk7XG4gICAgICAgIG5ld0ZyYWN0aW9uYWxTZWNvbmQgPVxuICAgICAgICAgIG51ZGdlZFZhbHVlUm91bmRlZCA8IDEgJiYgZGVjaW1hbFBsYWNlcyhudWRnZWRWYWx1ZVJvdW5kZWREZWNpbWFscykgPiAwXG4gICAgICAgICAgICA/IGZvcm1hdFRpbWVQYXJ0KG51ZGdlZFZhbHVlUm91bmRlZERlY2ltYWxzLCBzdGVwUHJlY2lzaW9uKVxuICAgICAgICAgICAgOiBcIlwiLnBhZFN0YXJ0KHN0ZXBQcmVjaXNpb24sIFwiMFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XG4gICAgICAgIG51ZGdlZFZhbHVlID1cbiAgICAgICAgICBpc05hTihmcmFjdGlvbmFsU2Vjb25kQXNJbnRlZ2VyKSB8fCBmcmFjdGlvbmFsU2Vjb25kQXNJbnRlZ2VyID09PSAwXG4gICAgICAgICAgICA/IDEgLSBzdGVwRGVjaW1hbFxuICAgICAgICAgICAgOiBmcmFjdGlvbmFsU2Vjb25kQXNGbG9hdCAtIHN0ZXBEZWNpbWFsO1xuICAgICAgICBudWRnZWRWYWx1ZVJvdW5kZWQgPSBwYXJzZUZsb2F0KG51ZGdlZFZhbHVlLnRvRml4ZWQoc3RlcFByZWNpc2lvbikpO1xuICAgICAgICBudWRnZWRWYWx1ZVJvdW5kZWREZWNpbWFscyA9IGdldERlY2ltYWxzKG51ZGdlZFZhbHVlUm91bmRlZCk7XG4gICAgICAgIG5ld0ZyYWN0aW9uYWxTZWNvbmQgPVxuICAgICAgICAgIG51ZGdlZFZhbHVlUm91bmRlZCA8IDEgJiZcbiAgICAgICAgICAgIGRlY2ltYWxQbGFjZXMobnVkZ2VkVmFsdWVSb3VuZGVkRGVjaW1hbHMpID4gMCAmJlxuICAgICAgICAgICAgTWF0aC5zaWduKG51ZGdlZFZhbHVlUm91bmRlZERlY2ltYWxzKSA9PT0gMVxuICAgICAgICAgICAgPyBmb3JtYXRUaW1lUGFydChudWRnZWRWYWx1ZVJvdW5kZWREZWNpbWFscywgc3RlcFByZWNpc2lvbilcbiAgICAgICAgICAgIDogXCJcIi5wYWRTdGFydChzdGVwUHJlY2lzaW9uLCBcIjBcIik7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFZhbHVlUGFydChcImZyYWN0aW9uYWxTZWNvbmRcIiwgbmV3RnJhY3Rpb25hbFNlY29uZCk7XG4gICAgfTtcbiAgICB0aGlzLnNhbml0aXplVmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IHsgaG91ciwgbWludXRlLCBzZWNvbmQsIGZyYWN0aW9uYWxTZWNvbmQgfSA9IHBhcnNlVGltZVN0cmluZyh2YWx1ZSk7XG4gICAgICBpZiAoZnJhY3Rpb25hbFNlY29uZCkge1xuICAgICAgICBjb25zdCBzYW5pdGl6ZWRGcmFjdGlvbmFsU2Vjb25kID0gdGhpcy5zYW5pdGl6ZUZyYWN0aW9uYWxTZWNvbmQoZnJhY3Rpb25hbFNlY29uZCk7XG4gICAgICAgIHJldHVybiBgJHtob3VyfToke21pbnV0ZX06JHtzZWNvbmR9LiR7c2FuaXRpemVkRnJhY3Rpb25hbFNlY29uZH1gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlzVmFsaWRUaW1lKHZhbHVlKSAmJiB2YWx1ZTtcbiAgICB9O1xuICAgIHRoaXMuc2FuaXRpemVGcmFjdGlvbmFsU2Vjb25kID0gKGZyYWN0aW9uYWxTZWNvbmQpID0+IGZyYWN0aW9uYWxTZWNvbmQgJiYgZGVjaW1hbFBsYWNlcyh0aGlzLnN0ZXApICE9PSBmcmFjdGlvbmFsU2Vjb25kLmxlbmd0aFxuICAgICAgPyBwYXJzZUZsb2F0KGAwLiR7ZnJhY3Rpb25hbFNlY29uZH1gKS50b0ZpeGVkKGRlY2ltYWxQbGFjZXModGhpcy5zdGVwKSkucmVwbGFjZShcIjAuXCIsIFwiXCIpXG4gICAgICA6IGZyYWN0aW9uYWxTZWNvbmQ7XG4gICAgdGhpcy5zZWNvbmRLZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgICAgaWYgKG51bWJlcktleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBjb25zdCBrZXlBc051bWJlciA9IHBhcnNlSW50KGtleSk7XG4gICAgICAgIGxldCBuZXdTZWNvbmQ7XG4gICAgICAgIGlmIChpc1ZhbGlkTnVtYmVyKHRoaXMuc2Vjb25kKSAmJiB0aGlzLnNlY29uZC5zdGFydHNXaXRoKFwiMFwiKSkge1xuICAgICAgICAgIGNvbnN0IHNlY29uZEFzTnVtYmVyID0gcGFyc2VJbnQodGhpcy5zZWNvbmQpO1xuICAgICAgICAgIG5ld1NlY29uZCA9XG4gICAgICAgICAgICBzZWNvbmRBc051bWJlciA+IG1heFRlbnRoRm9yTWludXRlQW5kU2Vjb25kXG4gICAgICAgICAgICAgID8ga2V5QXNOdW1iZXJcbiAgICAgICAgICAgICAgOiBgJHtzZWNvbmRBc051bWJlcn0ke2tleUFzTnVtYmVyfWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbmV3U2Vjb25kID0ga2V5QXNOdW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRWYWx1ZVBhcnQoXCJzZWNvbmRcIiwgbmV3U2Vjb25kKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjpcbiAgICAgICAgICBjYXNlIFwiRGVsZXRlXCI6XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlUGFydChcInNlY29uZFwiLCBudWxsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRlY3JlbWVudFNlY29uZCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmluY3JlbWVudFNlY29uZCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zZWNvbmREb3duQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVFbCA9IHRoaXMuc2Vjb25kRWw7XG4gICAgICB0aGlzLnNlY29uZEVsLmZvY3VzKCk7XG4gICAgICB0aGlzLmRlY3JlbWVudFNlY29uZCgpO1xuICAgIH07XG4gICAgdGhpcy5zZWNvbmRVcENsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlRWwgPSB0aGlzLnNlY29uZEVsO1xuICAgICAgdGhpcy5zZWNvbmRFbC5mb2N1cygpO1xuICAgICAgdGhpcy5pbmNyZW1lbnRTZWNvbmQoKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0SG91ckVsID0gKGVsKSA9PiAodGhpcy5ob3VyRWwgPSBlbCk7XG4gICAgdGhpcy5zZXRNZXJpZGllbUVsID0gKGVsKSA9PiAodGhpcy5tZXJpZGllbUVsID0gZWwpO1xuICAgIHRoaXMuc2V0TWludXRlRWwgPSAoZWwpID0+ICh0aGlzLm1pbnV0ZUVsID0gZWwpO1xuICAgIHRoaXMuc2V0U2Vjb25kRWwgPSAoZWwpID0+ICh0aGlzLnNlY29uZEVsID0gZWwpO1xuICAgIHRoaXMuc2V0RnJhY3Rpb25hbFNlY29uZEVsID0gKGVsKSA9PiAodGhpcy5mcmFjdGlvbmFsU2Vjb25kRWwgPSBlbCk7XG4gICAgdGhpcy5zZXRWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKGlzVmFsaWRUaW1lKHZhbHVlKSkge1xuICAgICAgICBjb25zdCB7IGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBmcmFjdGlvbmFsU2Vjb25kIH0gPSBwYXJzZVRpbWVTdHJpbmcodmFsdWUpO1xuICAgICAgICBjb25zdCB7IGVmZmVjdGl2ZUxvY2FsZTogbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0gfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgbG9jYWxpemVkSG91ciwgbG9jYWxpemVkSG91clN1ZmZpeCwgbG9jYWxpemVkTWludXRlLCBsb2NhbGl6ZWRNaW51dGVTdWZmaXgsIGxvY2FsaXplZFNlY29uZCwgbG9jYWxpemVkRGVjaW1hbFNlcGFyYXRvciwgbG9jYWxpemVkRnJhY3Rpb25hbFNlY29uZCwgbG9jYWxpemVkU2Vjb25kU3VmZml4LCBsb2NhbGl6ZWRNZXJpZGllbSwgfSA9IGxvY2FsaXplVGltZVN0cmluZ1RvUGFydHMoeyB2YWx1ZSwgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0gfSk7XG4gICAgICAgIHRoaXMuaG91ciA9IGhvdXI7XG4gICAgICAgIHRoaXMubWludXRlID0gbWludXRlO1xuICAgICAgICB0aGlzLnNlY29uZCA9IHNlY29uZDtcbiAgICAgICAgdGhpcy5mcmFjdGlvbmFsU2Vjb25kID0gdGhpcy5zYW5pdGl6ZUZyYWN0aW9uYWxTZWNvbmQoZnJhY3Rpb25hbFNlY29uZCk7XG4gICAgICAgIHRoaXMubG9jYWxpemVkSG91ciA9IGxvY2FsaXplZEhvdXI7XG4gICAgICAgIHRoaXMubG9jYWxpemVkSG91clN1ZmZpeCA9IGxvY2FsaXplZEhvdXJTdWZmaXg7XG4gICAgICAgIHRoaXMubG9jYWxpemVkTWludXRlID0gbG9jYWxpemVkTWludXRlO1xuICAgICAgICB0aGlzLmxvY2FsaXplZE1pbnV0ZVN1ZmZpeCA9IGxvY2FsaXplZE1pbnV0ZVN1ZmZpeDtcbiAgICAgICAgdGhpcy5sb2NhbGl6ZWRTZWNvbmQgPSBsb2NhbGl6ZWRTZWNvbmQ7XG4gICAgICAgIHRoaXMubG9jYWxpemVkRGVjaW1hbFNlcGFyYXRvciA9IGxvY2FsaXplZERlY2ltYWxTZXBhcmF0b3I7XG4gICAgICAgIHRoaXMubG9jYWxpemVkRnJhY3Rpb25hbFNlY29uZCA9IGxvY2FsaXplZEZyYWN0aW9uYWxTZWNvbmQ7XG4gICAgICAgIHRoaXMubG9jYWxpemVkU2Vjb25kU3VmZml4ID0gbG9jYWxpemVkU2Vjb25kU3VmZml4O1xuICAgICAgICBpZiAobG9jYWxpemVkTWVyaWRpZW0pIHtcbiAgICAgICAgICB0aGlzLmxvY2FsaXplZE1lcmlkaWVtID0gbG9jYWxpemVkTWVyaWRpZW07XG4gICAgICAgICAgdGhpcy5tZXJpZGllbSA9IGdldE1lcmlkaWVtKHRoaXMuaG91cik7XG4gICAgICAgICAgY29uc3QgZm9ybWF0UGFydHMgPSBnZXRUaW1lUGFydHMoeyB2YWx1ZSwgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0gfSk7XG4gICAgICAgICAgdGhpcy5tZXJpZGllbU9yZGVyID0gdGhpcy5nZXRNZXJpZGllbU9yZGVyKGZvcm1hdFBhcnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaG91ciA9IG51bGw7XG4gICAgICAgIHRoaXMuZnJhY3Rpb25hbFNlY29uZCA9IG51bGw7XG4gICAgICAgIHRoaXMubG9jYWxpemVkSG91ciA9IG51bGw7XG4gICAgICAgIHRoaXMubG9jYWxpemVkSG91clN1ZmZpeCA9IGdldExvY2FsaXplZFRpbWVQYXJ0U3VmZml4KFwiaG91clwiLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSwgdGhpcy5udW1iZXJpbmdTeXN0ZW0pO1xuICAgICAgICB0aGlzLmxvY2FsaXplZE1lcmlkaWVtID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb2NhbGl6ZWRNaW51dGUgPSBudWxsO1xuICAgICAgICB0aGlzLmxvY2FsaXplZE1pbnV0ZVN1ZmZpeCA9IGdldExvY2FsaXplZFRpbWVQYXJ0U3VmZml4KFwibWludXRlXCIsIHRoaXMuZWZmZWN0aXZlTG9jYWxlLCB0aGlzLm51bWJlcmluZ1N5c3RlbSk7XG4gICAgICAgIHRoaXMubG9jYWxpemVkU2Vjb25kID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb2NhbGl6ZWREZWNpbWFsU2VwYXJhdG9yID0gZ2V0TG9jYWxpemVkRGVjaW1hbFNlcGFyYXRvcih0aGlzLmVmZmVjdGl2ZUxvY2FsZSwgdGhpcy5udW1iZXJpbmdTeXN0ZW0pO1xuICAgICAgICB0aGlzLmxvY2FsaXplZEZyYWN0aW9uYWxTZWNvbmQgPSBudWxsO1xuICAgICAgICB0aGlzLmxvY2FsaXplZFNlY29uZFN1ZmZpeCA9IGdldExvY2FsaXplZFRpbWVQYXJ0U3VmZml4KFwic2Vjb25kXCIsIHRoaXMuZWZmZWN0aXZlTG9jYWxlLCB0aGlzLm51bWJlcmluZ1N5c3RlbSk7XG4gICAgICAgIHRoaXMubWVyaWRpZW0gPSBudWxsO1xuICAgICAgICB0aGlzLm1pbnV0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2Vjb25kID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNldFZhbHVlUGFydCA9IChrZXksIHZhbHVlKSA9PiB7XG4gICAgICBjb25zdCB7IGVmZmVjdGl2ZUxvY2FsZTogbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0gfSA9IHRoaXM7XG4gICAgICBpZiAoa2V5ID09PSBcIm1lcmlkaWVtXCIpIHtcbiAgICAgICAgdGhpcy5tZXJpZGllbSA9IHZhbHVlO1xuICAgICAgICBpZiAoaXNWYWxpZE51bWJlcih0aGlzLmhvdXIpKSB7XG4gICAgICAgICAgY29uc3QgaG91ckFzTnVtYmVyID0gcGFyc2VJbnQodGhpcy5ob3VyKTtcbiAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwiQU1cIjpcbiAgICAgICAgICAgICAgaWYgKGhvdXJBc051bWJlciA+PSAxMikge1xuICAgICAgICAgICAgICAgIHRoaXMuaG91ciA9IGZvcm1hdFRpbWVQYXJ0KGhvdXJBc051bWJlciAtIDEyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJQTVwiOlxuICAgICAgICAgICAgICBpZiAoaG91ckFzTnVtYmVyIDwgMTIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvdXIgPSBmb3JtYXRUaW1lUGFydChob3VyQXNOdW1iZXIgKyAxMik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubG9jYWxpemVkSG91ciA9IGxvY2FsaXplVGltZVBhcnQoe1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMuaG91cixcbiAgICAgICAgICAgIHBhcnQ6IFwiaG91clwiLFxuICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT09IFwiZnJhY3Rpb25hbFNlY29uZFwiKSB7XG4gICAgICAgIGNvbnN0IHN0ZXBQcmVjaXNpb24gPSBkZWNpbWFsUGxhY2VzKHRoaXMuc3RlcCk7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICB0aGlzLmZyYWN0aW9uYWxTZWNvbmQgPVxuICAgICAgICAgICAgdmFsdWUgPT09IDAgPyBcIlwiLnBhZFN0YXJ0KHN0ZXBQcmVjaXNpb24sIFwiMFwiKSA6IGZvcm1hdFRpbWVQYXJ0KHZhbHVlLCBzdGVwUHJlY2lzaW9uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZyYWN0aW9uYWxTZWNvbmQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvY2FsaXplZEZyYWN0aW9uYWxTZWNvbmQgPSBsb2NhbGl6ZVRpbWVQYXJ0KHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy5mcmFjdGlvbmFsU2Vjb25kLFxuICAgICAgICAgIHBhcnQ6IFwiZnJhY3Rpb25hbFNlY29uZFwiLFxuICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICBudW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXNba2V5XSA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiA/IGZvcm1hdFRpbWVQYXJ0KHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICB0aGlzW2Bsb2NhbGl6ZWQke2NhcGl0YWxpemUoa2V5KX1gXSA9IGxvY2FsaXplVGltZVBhcnQoe1xuICAgICAgICAgIHZhbHVlOiB0aGlzW2tleV0sXG4gICAgICAgICAgcGFydDoga2V5LFxuICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICBudW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbGV0IGVtaXQgPSBmYWxzZTtcbiAgICAgIGxldCBuZXdWYWx1ZTtcbiAgICAgIGlmICh0aGlzLmhvdXIgJiYgdGhpcy5taW51dGUpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBgJHt0aGlzLmhvdXJ9OiR7dGhpcy5taW51dGV9YDtcbiAgICAgICAgaWYgKHRoaXMuc2hvd1NlY29uZCkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gYCR7bmV3VmFsdWV9OiR7dGhpcy5zZWNvbmQgPz8gXCIwMFwifWA7XG4gICAgICAgICAgaWYgKHRoaXMuc2hvd0ZyYWN0aW9uYWxTZWNvbmQgJiYgdGhpcy5mcmFjdGlvbmFsU2Vjb25kKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGAke25ld1ZhbHVlfS4ke3RoaXMuZnJhY3Rpb25hbFNlY29uZH1gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5ld1ZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICBlbWl0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMubG9jYWxpemVkTWVyaWRpZW0gPSB0aGlzLnZhbHVlXG4gICAgICAgID8gbG9jYWxpemVUaW1lU3RyaW5nVG9QYXJ0cyh7IHZhbHVlOiB0aGlzLnZhbHVlLCBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSB9KVxuICAgICAgICAgID8ubG9jYWxpemVkTWVyaWRpZW0gfHwgbnVsbFxuICAgICAgICA6IGxvY2FsaXplVGltZVBhcnQoeyB2YWx1ZTogdGhpcy5tZXJpZGllbSwgcGFydDogXCJtZXJpZGllbVwiLCBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSB9KTtcbiAgICAgIGlmIChlbWl0KSB7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGltZVBpY2tlckNoYW5nZS5lbWl0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5zdGVwID0gNjA7XG4gICAgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hY3RpdmVFbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gICAgdGhpcy5mcmFjdGlvbmFsU2Vjb25kID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaG91ciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhvdXJDeWNsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvY2FsaXplZERlY2ltYWxTZXBhcmF0b3IgPSBcIi5cIjtcbiAgICB0aGlzLmxvY2FsaXplZEhvdXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2NhbGl6ZWRIb3VyU3VmZml4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYWxpemVkTWVyaWRpZW0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2NhbGl6ZWRGcmFjdGlvbmFsU2Vjb25kID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYWxpemVkTWludXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYWxpemVkTWludXRlU3VmZml4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYWxpemVkU2Vjb25kID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYWxpemVkU2Vjb25kU3VmZml4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVyaWRpZW0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW51dGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWNvbmQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaG93RnJhY3Rpb25hbFNlY29uZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNob3dTZWNvbmQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgc3RlcENoYW5nZSgpIHtcbiAgICB0aGlzLnRvZ2dsZVNlY29uZCgpO1xuICB9XG4gIHZhbHVlV2F0Y2hlcihuZXdWYWx1ZSkge1xuICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVXYXRjaGVyKCkge1xuICAgIHRoaXMudXBkYXRlTG9jYWxlKCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYmx1ckhhbmRsZXIoKSB7XG4gICAgdGhpcy5hY3RpdmVFbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBvaW50ZXJBY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRpbWVQaWNrZXJCbHVyLmVtaXQoKTtcbiAgfVxuICBob3N0Rm9jdXNIYW5kbGVyKCkge1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGltZVBpY2tlckZvY3VzLmVtaXQoKTtcbiAgfVxuICBrZXlEb3duSGFuZGxlcihldmVudCkge1xuICAgIHRoaXMucG9pbnRlckFjdGl2YXRlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHsgZGVmYXVsdFByZXZlbnRlZCwga2V5IH0gPSBldmVudDtcbiAgICBpZiAoZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMuYWN0aXZlRWwpIHtcbiAgICAgIGNhc2UgdGhpcy5ob3VyRWw6XG4gICAgICAgIGlmIChrZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgICAgdGhpcy5mb2N1c1BhcnQoXCJtaW51dGVcIik7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5taW51dGVFbDpcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICB0aGlzLmZvY3VzUGFydChcImhvdXJcIik7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgIGlmICh0aGlzLnN0ZXAgIT09IDYwKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9jdXNQYXJ0KFwic2Vjb25kXCIpO1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ob3VyQ3ljbGUgPT09IFwiMTJcIikge1xuICAgICAgICAgICAgICB0aGlzLmZvY3VzUGFydChcIm1lcmlkaWVtXCIpO1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuc2Vjb25kRWw6XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgdGhpcy5mb2N1c1BhcnQoXCJtaW51dGVcIik7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dGcmFjdGlvbmFsU2Vjb25kKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9jdXNQYXJ0KFwiZnJhY3Rpb25hbFNlY29uZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaG91ckN5Y2xlID09PSBcIjEyXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb2N1c1BhcnQoXCJtZXJpZGllbVwiKTtcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLmZyYWN0aW9uYWxTZWNvbmRFbDpcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICB0aGlzLmZvY3VzUGFydChcInNlY29uZFwiKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgaWYgKHRoaXMuaG91ckN5Y2xlID09PSBcIjEyXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb2N1c1BhcnQoXCJtZXJpZGllbVwiKTtcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLm1lcmlkaWVtRWw6XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0ZyYWN0aW9uYWxTZWNvbmQpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb2N1c1BhcnQoXCJmcmFjdGlvbmFsU2Vjb25kXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zdGVwICE9PSA2MCkge1xuICAgICAgICAgICAgICB0aGlzLmZvY3VzUGFydChcInNlY29uZFwiKTtcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmZvY3VzUGFydChcIm1pbnV0ZVwiKTtcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBwb2ludGVyRG93bkhhbmRsZXIoKSB7XG4gICAgdGhpcy5wb2ludGVyQWN0aXZhdGVkID0gdHJ1ZTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQncyBmaXJzdCBmb2N1c2FibGUgZWxlbWVudC5cbiAgICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAgICB0aGlzLmVsPy5mb2N1cygpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYXN5bmMgZm9jdXNQYXJ0KHRhcmdldCkge1xuICAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAgICB0aGlzW2Ake3RhcmdldCB8fCBcImhvdXJcIn1FbGBdPy5mb2N1cygpO1xuICB9XG4gIHRvZ2dsZVNlY29uZCgpIHtcbiAgICB0aGlzLnNob3dTZWNvbmQgPSB0aGlzLnN0ZXAgPCA2MDtcbiAgICB0aGlzLnNob3dGcmFjdGlvbmFsU2Vjb25kID0gZGVjaW1hbFBsYWNlcyh0aGlzLnN0ZXApID4gMDtcbiAgfVxuICBnZXRNZXJpZGllbU9yZGVyKGZvcm1hdFBhcnRzKSB7XG4gICAgY29uc3QgbG9jYWxlID0gdGhpcy5lZmZlY3RpdmVMb2NhbGU7XG4gICAgY29uc3QgaXNSVExLaW5kID0gbG9jYWxlID09PSBcImFyXCIgfHwgbG9jYWxlID09PSBcImhlXCI7XG4gICAgaWYgKGZvcm1hdFBhcnRzICYmICFpc1JUTEtpbmQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZm9ybWF0UGFydHMuZmluZEluZGV4KChwYXJ0cykgPT4ge1xuICAgICAgICByZXR1cm4gcGFydHMudmFsdWUgPT09IHRoaXMubG9jYWxpemVkTWVyaWRpZW07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgdXBkYXRlTG9jYWxlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgICB0aGlzLmhvdXJDeWNsZSA9IGdldExvY2FsZUhvdXJDeWNsZSh0aGlzLmVmZmVjdGl2ZUxvY2FsZSwgdGhpcy5udW1iZXJpbmdTeXN0ZW0pO1xuICAgIHRoaXMubG9jYWxpemVkRGVjaW1hbFNlcGFyYXRvciA9IGdldExvY2FsaXplZERlY2ltYWxTZXBhcmF0b3IodGhpcy5lZmZlY3RpdmVMb2NhbGUsIHRoaXMubnVtYmVyaW5nU3lzdGVtKTtcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMuc2FuaXRpemVWYWx1ZSh0aGlzLnZhbHVlKSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlTG9jYWxlKCk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlU2Vjb25kKCk7XG4gICAgdGhpcy5tZXJpZGllbU9yZGVyID0gdGhpcy5nZXRNZXJpZGllbU9yZGVyKGdldFRpbWVQYXJ0cyh7XG4gICAgICB2YWx1ZTogXCIwOjAwOjAwXCIsXG4gICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICB9KSk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaG91cklzTnVtYmVyID0gaXNWYWxpZE51bWJlcih0aGlzLmhvdXIpO1xuICAgIGNvbnN0IGljb25TY2FsZSA9IGdldEljb25TY2FsZSh0aGlzLnNjYWxlKTtcbiAgICBjb25zdCBtaW51dGVJc051bWJlciA9IGlzVmFsaWROdW1iZXIodGhpcy5taW51dGUpO1xuICAgIGNvbnN0IHNlY29uZElzTnVtYmVyID0gaXNWYWxpZE51bWJlcih0aGlzLnNlY29uZCk7XG4gICAgY29uc3QgZnJhY3Rpb25hbFNlY29uZElzTnVtYmVyID0gaXNWYWxpZE51bWJlcih0aGlzLmZyYWN0aW9uYWxTZWNvbmQpO1xuICAgIGNvbnN0IHNob3dNZXJpZGllbSA9IHRoaXMuaG91ckN5Y2xlID09PSBcIjEyXCI7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy50aW1lUGlja2VyXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5zaG93TWVyaWRpZW1dOiBzaG93TWVyaWRpZW0sXG4gICAgICAgIFtDU1Muc2hvd1NlY29uZF06IHRoaXMuc2hvd1NlY29uZCxcbiAgICAgICAgW0NTU1tgc2NhbGUtJHt0aGlzLnNjYWxlfWBdXTogdHJ1ZSxcbiAgICAgIH0sIGRpcjogXCJsdHJcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb2x1bW4sIHJvbGU6IFwiZ3JvdXBcIiB9LCBoKFwic3BhblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1lc3NhZ2VzLmhvdXJVcCwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5idXR0b25dOiB0cnVlLFxuICAgICAgICBbQ1NTLmJ1dHRvbkhvdXJVcF06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uVG9wTGVmdF06IHRydWUsXG4gICAgICB9LCBvbkNsaWNrOiB0aGlzLmhvdXJVcENsaWNrSGFuZGxlciwgcm9sZTogXCJidXR0b25cIiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJjaGV2cm9uLXVwXCIsIHNjYWxlOiBpY29uU2NhbGUgfSkpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1lc3NhZ2VzLmhvdXIsIFwiYXJpYS12YWx1ZW1heFwiOiBcIjIzXCIsIFwiYXJpYS12YWx1ZW1pblwiOiBcIjFcIiwgXCJhcmlhLXZhbHVlbm93XCI6IChob3VySXNOdW1iZXIgJiYgcGFyc2VJbnQodGhpcy5ob3VyKSkgfHwgXCIwXCIsIFwiYXJpYS12YWx1ZXRleHRcIjogdGhpcy5ob3VyLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmlucHV0XTogdHJ1ZSxcbiAgICAgICAgW0NTUy5ob3VyXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5pbnB1dEZvY3VzXTogdGhpcy5hY3RpdmVFbCAmJiB0aGlzLmFjdGl2ZUVsID09PSB0aGlzLmhvdXJFbCxcbiAgICAgIH0sIG9uQ2xpY2s6IHRoaXMuaW5wdXRDbGlja0hhbmRsZXIsIG9uRm9jdXM6IHRoaXMuZm9jdXNIYW5kbGVyLCBvbktleURvd246IHRoaXMuaG91cktleURvd25IYW5kbGVyLCByb2xlOiBcInNwaW5idXR0b25cIiwgdGFiSW5kZXg6IDAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiB0aGlzLnNldEhvdXJFbCB9LCB0aGlzLmxvY2FsaXplZEhvdXIgfHwgXCItLVwiKSwgaChcInNwYW5cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5ob3VyRG93biwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5idXR0b25dOiB0cnVlLFxuICAgICAgICBbQ1NTLmJ1dHRvbkhvdXJEb3duXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5idXR0b25Cb3R0b21MZWZ0XTogdHJ1ZSxcbiAgICAgIH0sIG9uQ2xpY2s6IHRoaXMuaG91ckRvd25DbGlja0hhbmRsZXIsIHJvbGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwiY2hldnJvbi1kb3duXCIsIHNjYWxlOiBpY29uU2NhbGUgfSkpKSwgaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLmRlbGltaXRlciB9LCB0aGlzLmxvY2FsaXplZEhvdXJTdWZmaXgpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb2x1bW4sIHJvbGU6IFwiZ3JvdXBcIiB9LCBoKFwic3BhblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1lc3NhZ2VzLm1pbnV0ZVVwLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmJ1dHRvbl06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uTWludXRlVXBdOiB0cnVlLFxuICAgICAgfSwgb25DbGljazogdGhpcy5taW51dGVVcENsaWNrSGFuZGxlciwgcm9sZTogXCJidXR0b25cIiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJjaGV2cm9uLXVwXCIsIHNjYWxlOiBpY29uU2NhbGUgfSkpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1lc3NhZ2VzLm1pbnV0ZSwgXCJhcmlhLXZhbHVlbWF4XCI6IFwiMTJcIiwgXCJhcmlhLXZhbHVlbWluXCI6IFwiMVwiLCBcImFyaWEtdmFsdWVub3dcIjogKG1pbnV0ZUlzTnVtYmVyICYmIHBhcnNlSW50KHRoaXMubWludXRlKSkgfHwgXCIwXCIsIFwiYXJpYS12YWx1ZXRleHRcIjogdGhpcy5taW51dGUsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuaW5wdXRdOiB0cnVlLFxuICAgICAgICBbQ1NTLm1pbnV0ZV06IHRydWUsXG4gICAgICAgIFtDU1MuaW5wdXRGb2N1c106IHRoaXMuYWN0aXZlRWwgJiYgdGhpcy5hY3RpdmVFbCA9PT0gdGhpcy5taW51dGVFbCxcbiAgICAgIH0sIG9uQ2xpY2s6IHRoaXMuaW5wdXRDbGlja0hhbmRsZXIsIG9uRm9jdXM6IHRoaXMuZm9jdXNIYW5kbGVyLCBvbktleURvd246IHRoaXMubWludXRlS2V5RG93bkhhbmRsZXIsIHJvbGU6IFwic3BpbmJ1dHRvblwiLCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IHRoaXMuc2V0TWludXRlRWwgfSwgdGhpcy5sb2NhbGl6ZWRNaW51dGUgfHwgXCItLVwiKSwgaChcInNwYW5cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5taW51dGVEb3duLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmJ1dHRvbl06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uTWludXRlRG93bl06IHRydWUsXG4gICAgICB9LCBvbkNsaWNrOiB0aGlzLm1pbnV0ZURvd25DbGlja0hhbmRsZXIsIHJvbGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwiY2hldnJvbi1kb3duXCIsIHNjYWxlOiBpY29uU2NhbGUgfSkpKSwgdGhpcy5zaG93U2Vjb25kICYmIGgoXCJzcGFuXCIsIHsgY2xhc3M6IENTUy5kZWxpbWl0ZXIgfSwgdGhpcy5sb2NhbGl6ZWRNaW51dGVTdWZmaXgpLCB0aGlzLnNob3dTZWNvbmQgJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbHVtbiwgcm9sZTogXCJncm91cFwiIH0sIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMuc2Vjb25kVXAsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuYnV0dG9uXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5idXR0b25TZWNvbmRVcF06IHRydWUsXG4gICAgICB9LCBvbkNsaWNrOiB0aGlzLnNlY29uZFVwQ2xpY2tIYW5kbGVyLCByb2xlOiBcImJ1dHRvblwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBcImNoZXZyb24tdXBcIiwgc2NhbGU6IGljb25TY2FsZSB9KSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMuc2Vjb25kLCBcImFyaWEtdmFsdWVtYXhcIjogXCI1OVwiLCBcImFyaWEtdmFsdWVtaW5cIjogXCIwXCIsIFwiYXJpYS12YWx1ZW5vd1wiOiAoc2Vjb25kSXNOdW1iZXIgJiYgcGFyc2VJbnQodGhpcy5zZWNvbmQpKSB8fCBcIjBcIiwgXCJhcmlhLXZhbHVldGV4dFwiOiB0aGlzLnNlY29uZCwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5pbnB1dF06IHRydWUsXG4gICAgICAgIFtDU1Muc2Vjb25kXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5pbnB1dEZvY3VzXTogdGhpcy5hY3RpdmVFbCAmJiB0aGlzLmFjdGl2ZUVsID09PSB0aGlzLnNlY29uZEVsLFxuICAgICAgfSwgb25DbGljazogdGhpcy5pbnB1dENsaWNrSGFuZGxlciwgb25Gb2N1czogdGhpcy5mb2N1c0hhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5zZWNvbmRLZXlEb3duSGFuZGxlciwgcm9sZTogXCJzcGluYnV0dG9uXCIsIHRhYkluZGV4OiAwLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zZXRTZWNvbmRFbCB9LCB0aGlzLmxvY2FsaXplZFNlY29uZCB8fCBcIi0tXCIpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1lc3NhZ2VzLnNlY29uZERvd24sIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuYnV0dG9uXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5idXR0b25TZWNvbmREb3duXTogdHJ1ZSxcbiAgICAgIH0sIG9uQ2xpY2s6IHRoaXMuc2Vjb25kRG93bkNsaWNrSGFuZGxlciwgcm9sZTogXCJidXR0b25cIiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJjaGV2cm9uLWRvd25cIiwgc2NhbGU6IGljb25TY2FsZSB9KSkpKSwgdGhpcy5zaG93RnJhY3Rpb25hbFNlY29uZCAmJiAoaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLmRlbGltaXRlciB9LCB0aGlzLmxvY2FsaXplZERlY2ltYWxTZXBhcmF0b3IpKSwgdGhpcy5zaG93RnJhY3Rpb25hbFNlY29uZCAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29sdW1uLCByb2xlOiBcImdyb3VwXCIgfSwgaChcInNwYW5cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5mcmFjdGlvbmFsU2Vjb25kVXAsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuYnV0dG9uXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5idXR0b25GcmFjdGlvbmFsU2Vjb25kVXBdOiB0cnVlLFxuICAgICAgfSwgb25DbGljazogdGhpcy5mcmFjdGlvbmFsU2Vjb25kVXBDbGlja0hhbmRsZXIsIHJvbGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwiY2hldnJvbi11cFwiLCBzY2FsZTogaWNvblNjYWxlIH0pKSwgaChcInNwYW5cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5mcmFjdGlvbmFsU2Vjb25kLCBcImFyaWEtdmFsdWVtYXhcIjogXCI5OTlcIiwgXCJhcmlhLXZhbHVlbWluXCI6IFwiMVwiLCBcImFyaWEtdmFsdWVub3dcIjogKGZyYWN0aW9uYWxTZWNvbmRJc051bWJlciAmJiBwYXJzZUludCh0aGlzLmZyYWN0aW9uYWxTZWNvbmQpKSB8fCBcIjBcIiwgXCJhcmlhLXZhbHVldGV4dFwiOiB0aGlzLmxvY2FsaXplZEZyYWN0aW9uYWxTZWNvbmQsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuaW5wdXRdOiB0cnVlLFxuICAgICAgICBbQ1NTLmZyYWN0aW9uYWxTZWNvbmRdOiB0cnVlLFxuICAgICAgICBbQ1NTLmlucHV0Rm9jdXNdOiB0aGlzLmFjdGl2ZUVsICYmIHRoaXMuYWN0aXZlRWwgPT09IHRoaXMuZnJhY3Rpb25hbFNlY29uZEVsLFxuICAgICAgfSwgb25DbGljazogdGhpcy5pbnB1dENsaWNrSGFuZGxlciwgb25Gb2N1czogdGhpcy5mb2N1c0hhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5mcmFjdGlvbmFsU2Vjb25kS2V5RG93bkhhbmRsZXIsIHJvbGU6IFwic3BpbmJ1dHRvblwiLCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IHRoaXMuc2V0RnJhY3Rpb25hbFNlY29uZEVsIH0sIHRoaXMubG9jYWxpemVkRnJhY3Rpb25hbFNlY29uZCB8fCBcIi0tXCIpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1lc3NhZ2VzLmZyYWN0aW9uYWxTZWNvbmREb3duLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmJ1dHRvbl06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uRnJhY3Rpb25hbFNlY29uZERvd25dOiB0cnVlLFxuICAgICAgfSwgb25DbGljazogdGhpcy5mcmFjdGlvbmFsU2Vjb25kRG93bkNsaWNrSGFuZGxlciwgcm9sZTogXCJidXR0b25cIiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJjaGV2cm9uLWRvd25cIiwgc2NhbGU6IGljb25TY2FsZSB9KSkpKSwgdGhpcy5sb2NhbGl6ZWRTZWNvbmRTdWZmaXggJiYgKGgoXCJzcGFuXCIsIHsgY2xhc3M6IENTUy5kZWxpbWl0ZXIgfSwgdGhpcy5sb2NhbGl6ZWRTZWNvbmRTdWZmaXgpKSwgc2hvd01lcmlkaWVtICYmIChoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5jb2x1bW5dOiB0cnVlLFxuICAgICAgICBbQ1NTLm1lcmlkaWVtU3RhcnRdOiB0aGlzLm1lcmlkaWVtT3JkZXIgPT09IDAsXG4gICAgICB9LCByb2xlOiBcImdyb3VwXCIgfSwgaChcInNwYW5cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5tZXJpZGllbVVwLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmJ1dHRvbl06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uTWVyaWRpZW1VcF06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uVG9wUmlnaHRdOiB0cnVlLFxuICAgICAgfSwgb25DbGljazogdGhpcy5tZXJpZGllbVVwQ2xpY2tIYW5kbGVyLCByb2xlOiBcImJ1dHRvblwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBcImNoZXZyb24tdXBcIiwgc2NhbGU6IGljb25TY2FsZSB9KSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMubWVyaWRpZW0sIFwiYXJpYS12YWx1ZW1heFwiOiBcIjJcIiwgXCJhcmlhLXZhbHVlbWluXCI6IFwiMVwiLCBcImFyaWEtdmFsdWVub3dcIjogKHRoaXMubWVyaWRpZW0gPT09IFwiUE1cIiAmJiBcIjJcIikgfHwgXCIxXCIsIFwiYXJpYS12YWx1ZXRleHRcIjogdGhpcy5tZXJpZGllbSwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5pbnB1dF06IHRydWUsXG4gICAgICAgIFtDU1MubWVyaWRpZW1dOiB0cnVlLFxuICAgICAgICBbQ1NTLmlucHV0Rm9jdXNdOiB0aGlzLmFjdGl2ZUVsICYmIHRoaXMuYWN0aXZlRWwgPT09IHRoaXMubWVyaWRpZW1FbCxcbiAgICAgIH0sIG9uQ2xpY2s6IHRoaXMuaW5wdXRDbGlja0hhbmRsZXIsIG9uRm9jdXM6IHRoaXMuZm9jdXNIYW5kbGVyLCBvbktleURvd246IHRoaXMubWVyaWRpZW1LZXlEb3duSGFuZGxlciwgcm9sZTogXCJzcGluYnV0dG9uXCIsIHRhYkluZGV4OiAwLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zZXRNZXJpZGllbUVsIH0sIHRoaXMubG9jYWxpemVkTWVyaWRpZW0gfHwgXCItLVwiKSwgaChcInNwYW5cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5tZXJpZGllbURvd24sIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuYnV0dG9uXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5idXR0b25NZXJpZGllbURvd25dOiB0cnVlLFxuICAgICAgICBbQ1NTLmJ1dHRvbkJvdHRvbVJpZ2h0XTogdHJ1ZSxcbiAgICAgIH0sIG9uQ2xpY2s6IHRoaXMubWVyaWRpZW1Eb3duQ2xpY2tIYW5kbGVyLCByb2xlOiBcImJ1dHRvblwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBcImNoZXZyb24tZG93blwiLCBzY2FsZTogaWNvblNjYWxlIH0pKSkpKSk7XG4gIH1cbiAgc3RhdGljIGdldCBkZWxlZ2F0ZXNGb2N1cygpIHsgcmV0dXJuIHRydWU7IH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcInN0ZXBcIjogW1wic3RlcENoYW5nZVwiXSxcbiAgICBcInZhbHVlXCI6IFtcInZhbHVlV2F0Y2hlclwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVXYXRjaGVyXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIHRpbWVQaWNrZXJDc3M7IH1cbn0sIFsxNywgXCJjYWxjaXRlLXRpbWUtcGlja2VyXCIsIHtcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwic3RlcFwiOiBbNTE0XSxcbiAgICBcIm51bWJlcmluZ1N5c3RlbVwiOiBbMSwgXCJudW1iZXJpbmctc3lzdGVtXCJdLFxuICAgIFwidmFsdWVcIjogWzEwMjVdLFxuICAgIFwibWVzc2FnZXNcIjogWzEwNDBdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJhY3RpdmVFbFwiOiBbMzJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFszMl0sXG4gICAgXCJmcmFjdGlvbmFsU2Vjb25kXCI6IFszMl0sXG4gICAgXCJob3VyXCI6IFszMl0sXG4gICAgXCJob3VyQ3ljbGVcIjogWzMyXSxcbiAgICBcImxvY2FsaXplZERlY2ltYWxTZXBhcmF0b3JcIjogWzMyXSxcbiAgICBcImxvY2FsaXplZEhvdXJcIjogWzMyXSxcbiAgICBcImxvY2FsaXplZEhvdXJTdWZmaXhcIjogWzMyXSxcbiAgICBcImxvY2FsaXplZE1lcmlkaWVtXCI6IFszMl0sXG4gICAgXCJsb2NhbGl6ZWRGcmFjdGlvbmFsU2Vjb25kXCI6IFszMl0sXG4gICAgXCJsb2NhbGl6ZWRNaW51dGVcIjogWzMyXSxcbiAgICBcImxvY2FsaXplZE1pbnV0ZVN1ZmZpeFwiOiBbMzJdLFxuICAgIFwibG9jYWxpemVkU2Vjb25kXCI6IFszMl0sXG4gICAgXCJsb2NhbGl6ZWRTZWNvbmRTdWZmaXhcIjogWzMyXSxcbiAgICBcIm1lcmlkaWVtXCI6IFszMl0sXG4gICAgXCJtaW51dGVcIjogWzMyXSxcbiAgICBcInNlY29uZFwiOiBbMzJdLFxuICAgIFwic2hvd0ZyYWN0aW9uYWxTZWNvbmRcIjogWzMyXSxcbiAgICBcInNob3dTZWNvbmRcIjogWzMyXSxcbiAgICBcImRlZmF1bHRNZXNzYWdlc1wiOiBbMzJdLFxuICAgIFwic2V0Rm9jdXNcIjogWzY0XVxuICB9LCBbWzAsIFwiYmx1clwiLCBcImJsdXJIYW5kbGVyXCJdLCBbMCwgXCJmb2N1c1wiLCBcImhvc3RGb2N1c0hhbmRsZXJcIl0sIFswLCBcImtleWRvd25cIiwgXCJrZXlEb3duSGFuZGxlclwiXSwgWzEsIFwicG9pbnRlcmRvd25cIiwgXCJwb2ludGVyRG93bkhhbmRsZXJcIl1dXSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXRpbWUtcGlja2VyXCIsIFwiY2FsY2l0ZS1pY29uXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLXRpbWUtcGlja2VyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgVGltZVBpY2tlcik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBUaW1lUGlja2VyIGFzIFQsIGZvcm1hdFRpbWVQYXJ0IGFzIGEsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCwgZm9ybWF0VGltZVN0cmluZyBhcyBmLCBpc1ZhbGlkVGltZSBhcyBpLCBsb2NhbGl6ZVRpbWVTdHJpbmcgYXMgbCwgdG9JU09UaW1lU3RyaW5nIGFzIHQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==