"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_date-picker_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/date-picker.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/date-picker.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ DatePicker),
/* harmony export */   a: () => (/* binding */ getLocaleData),
/* harmony export */   d: () => (/* binding */ defineCustomElement),
/* harmony export */   g: () => (/* binding */ getValueAsDateRange)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.js */ "./node_modules/@esri/calcite-components/dist/components/date.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _date_picker_day_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date-picker-day.js */ "./node_modules/@esri/calcite-components/dist/components/date-picker-day.js");
/* harmony import */ var _date_picker_month_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date-picker-month.js */ "./node_modules/@esri/calcite-components/dist/components/date-picker-month.js");
/* harmony import */ var _date_picker_month_header_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date-picker-month-header.js */ "./node_modules/@esri/calcite-components/dist/components/date-picker-month-header.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */










const HEADING_LEVEL = 2;
const DATE_PICKER_FORMAT_OPTIONS = { dateStyle: "full" };

/**
 * CLDR cache.
 * Exported for testing purposes.
 *
 * @private
 */
const translationCache = {};
/**
 * CLDR request cache.
 * Exported for testing purposes.
 *
 * @private
 */
const requestCache = {};
/**
 * Fetch calendar data for a given locale from list of supported languages
 *
 * @param lang
 * @public
 */
async function getLocaleData(lang) {
  const locale = (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.g)(lang);
  if (translationCache[locale]) {
    return translationCache[locale];
  }
  if (!requestCache[locale]) {
    requestCache[locale] = fetch((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.getAssetPath)(`./assets/date-picker/nls/${locale}.json`))
      .then((resp) => resp.json())
      .catch(() => {
      console.error(`Translations for "${locale}" not found or invalid, falling back to english`);
      return getLocaleData("en");
    });
  }
  const data = await requestCache[locale];
  translationCache[locale] = data;
  return data;
}
/**
 *  Maps value to valueAsDate
 *
 * @param value
 */
function getValueAsDateRange(value) {
  return value.map((v, index) => (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.e)(v, index === 1));
}

const datePickerCss = ":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:inline-block;inline-size:auto;overflow:visible;border-radius:0px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);vertical-align:top}:host([scale=s]){inline-size:234px;min-inline-size:216px;max-inline-size:380px}:host([scale=m]){inline-size:304px;min-inline-size:272px;max-inline-size:480px}:host([scale=l]){inline-size:370px;min-inline-size:320px;max-inline-size:600px}:host([hidden]){display:none}[hidden]{display:none}";

const DatePicker = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteDatePickerChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteDatePickerChange", 6);
    this.calciteDatePickerRangeChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteDatePickerRangeChange", 6);
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.keyDownHandler = (event) => {
      if (event.key === "Escape") {
        this.resetActiveDates();
      }
    };
    this.monthHeaderSelectChange = (event) => {
      const date = new Date(event.detail);
      if (!this.range) {
        this.activeDate = date;
      }
      else {
        if (this.activeRange === "end") {
          this.activeEndDate = date;
        }
        else {
          this.activeStartDate = date;
        }
        this.mostRecentRangeValue = date;
      }
    };
    this.monthActiveDateChange = (event) => {
      const date = new Date(event.detail);
      if (!this.range) {
        this.activeDate = date;
      }
      else {
        if (this.activeRange === "end") {
          this.activeEndDate = date;
        }
        else {
          this.activeStartDate = date;
        }
        this.mostRecentRangeValue = date;
      }
    };
    this.monthHoverChange = (event) => {
      if (!this.range) {
        this.hoverRange = undefined;
        return;
      }
      const { valueAsDate } = this;
      const start = Array.isArray(valueAsDate) && valueAsDate[0];
      const end = Array.isArray(valueAsDate) && valueAsDate[1];
      const date = new Date(event.detail);
      this.hoverRange = {
        focused: this.activeRange || "start",
        start,
        end,
      };
      if (!this.proximitySelectionDisabled) {
        if (end) {
          const startDiff = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.g)(date, start);
          const endDiff = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.g)(date, end);
          if (endDiff > 0) {
            this.hoverRange.end = date;
            this.hoverRange.focused = "end";
          }
          else if (startDiff < 0) {
            this.hoverRange.start = date;
            this.hoverRange.focused = "start";
          }
          else if (startDiff > endDiff) {
            this.hoverRange.start = date;
            this.hoverRange.focused = "start";
          }
          else {
            this.hoverRange.end = date;
            this.hoverRange.focused = "end";
          }
        }
        else {
          if (start) {
            if (date < start) {
              this.hoverRange = {
                focused: "start",
                start: date,
                end: start,
              };
            }
            else {
              this.hoverRange.end = date;
              this.hoverRange.focused = "end";
            }
          }
        }
      }
      else {
        if (!end) {
          if (date < start) {
            this.hoverRange = {
              focused: "start",
              start: date,
              end: start,
            };
          }
          else {
            this.hoverRange.end = date;
            this.hoverRange.focused = "end";
          }
        }
        else {
          this.hoverRange = undefined;
        }
      }
      event.stopPropagation();
    };
    this.monthMouseOutChange = () => {
      if (this.hoverRange) {
        this.hoverRange = undefined;
      }
    };
    this.resetActiveDates = () => {
      const { valueAsDate } = this;
      if (!Array.isArray(valueAsDate) && valueAsDate && valueAsDate !== this.activeDate) {
        this.activeDate = new Date(valueAsDate);
      }
      if (Array.isArray(valueAsDate)) {
        if (valueAsDate[0] && valueAsDate[0] !== this.activeStartDate) {
          this.activeStartDate = new Date(valueAsDate[0]);
        }
        if (valueAsDate[1] && valueAsDate[1] !== this.activeEndDate) {
          this.activeEndDate = new Date(valueAsDate[1]);
        }
      }
    };
    /**
     * Event handler for when the selected date changes
     *
     * @param event
     */
    this.monthDateChange = (event) => {
      const date = new Date(event.detail);
      const isoDate = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.c)(date);
      if (!this.range && isoDate === (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.c)(this.valueAsDate)) {
        return;
      }
      if (!this.range) {
        this.value = isoDate || "";
        this.valueAsDate = date || null;
        this.activeDate = date || null;
        this.calciteDatePickerChange.emit();
        return;
      }
      const start = this.getStartDate();
      const end = this.getEndDate();
      if (!start || (!end && date < start)) {
        if (start) {
          this.setEndDate(new Date(start));
        }
        if (this.activeRange == "end") {
          this.setEndDate(date);
        }
        else {
          this.setStartDate(date);
        }
      }
      else if (!end) {
        this.setEndDate(date);
      }
      else {
        if (!this.proximitySelectionDisabled) {
          if (this.activeRange) {
            if (this.activeRange == "end") {
              this.setEndDate(date);
            }
            else {
              this.setStartDate(date);
            }
          }
          else {
            const startDiff = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.g)(date, start);
            const endDiff = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.g)(date, end);
            if (endDiff === 0 || startDiff < 0) {
              this.setStartDate(date);
            }
            else if (startDiff === 0 || endDiff < 0) {
              this.setEndDate(date);
            }
            else if (startDiff < endDiff) {
              this.setStartDate(date);
            }
            else {
              this.setEndDate(date);
            }
          }
        }
        else {
          this.setStartDate(date);
        }
      }
      this.calciteDatePickerChange.emit();
    };
    this.activeDate = undefined;
    this.activeRange = undefined;
    this.value = undefined;
    this.headingLevel = undefined;
    this.valueAsDate = undefined;
    this.minAsDate = undefined;
    this.maxAsDate = undefined;
    this.min = undefined;
    this.max = undefined;
    this.numberingSystem = undefined;
    this.scale = "m";
    this.range = false;
    this.proximitySelectionDisabled = false;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.activeEndDate = undefined;
    this.activeStartDate = undefined;
    this.dateTimeFormat = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.endAsDate = undefined;
    this.hoverRange = undefined;
    this.localeData = undefined;
    this.mostRecentRangeValue = undefined;
    this.startAsDate = undefined;
  }
  activeDateWatcher(newActiveDate) {
    if (this.activeRange === "end") {
      this.activeEndDate = newActiveDate;
    }
  }
  valueAsDateWatcher(newValueAsDate) {
    if (this.range && Array.isArray(newValueAsDate)) {
      const { activeStartDate, activeEndDate } = this;
      const newActiveStartDate = newValueAsDate[0];
      const newActiveEndDate = newValueAsDate[1];
      this.activeStartDate = activeStartDate !== newActiveStartDate && newActiveStartDate;
      this.activeEndDate = activeEndDate !== newActiveEndDate && newActiveEndDate;
    }
    else if (newValueAsDate && newValueAsDate !== this.activeDate) {
      this.activeDate = newValueAsDate;
    }
  }
  onMinChanged(min) {
    if (min) {
      this.minAsDate = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.e)(min);
    }
  }
  onMaxChanged(max) {
    if (max) {
      this.maxAsDate = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.e)(max);
    }
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    this.el.focus();
  }
  /**
   * Resets active date state.
   * @internal
   */
  async reset() {
    this.resetActiveDates();
    this.mostRecentRangeValue = undefined;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    if (Array.isArray(this.value)) {
      this.valueAsDate = getValueAsDateRange(this.value);
    }
    else if (this.value) {
      this.valueAsDate = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.e)(this.value);
    }
    if (this.min) {
      this.minAsDate = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.e)(this.min);
    }
    if (this.max) {
      this.maxAsDate = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.e)(this.max);
    }
  }
  disconnectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
    await this.loadLocaleData();
    this.onMinChanged(this.min);
    this.onMaxChanged(this.max);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.s)(this);
  }
  render() {
    const date = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.range && Array.isArray(this.valueAsDate) ? this.valueAsDate[0] : this.valueAsDate, this.minAsDate, this.maxAsDate);
    let activeDate = this.getActiveDate(date, this.minAsDate, this.maxAsDate);
    const endDate = this.range && Array.isArray(this.valueAsDate)
      ? (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.valueAsDate[1], this.minAsDate, this.maxAsDate)
      : null;
    const activeEndDate = this.getActiveEndDate(endDate, this.minAsDate, this.maxAsDate);
    if ((this.activeRange === "end" ||
      (this.hoverRange?.focused === "end" && (!this.proximitySelectionDisabled || endDate))) &&
      activeEndDate) {
      activeDate = activeEndDate;
    }
    if (this.range && this.mostRecentRangeValue) {
      activeDate = this.mostRecentRangeValue;
    }
    const minDate = this.range && this.activeRange
      ? this.activeRange === "start"
        ? this.minAsDate
        : date || this.minAsDate
      : this.minAsDate;
    const maxDate = this.range && this.activeRange
      ? this.activeRange === "start"
        ? endDate || this.maxAsDate
        : this.maxAsDate
      : this.maxAsDate;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.Host, { onBlur: this.resetActiveDates, onKeyDown: this.keyDownHandler }, this.renderCalendar(activeDate, maxDate, minDate, date, endDate)));
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.u)(this, this.effectiveLocale);
  }
  valueHandler(value) {
    if (Array.isArray(value)) {
      this.valueAsDate = getValueAsDateRange(value);
    }
    else if (value) {
      this.valueAsDate = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.e)(value);
    }
  }
  async loadLocaleData() {
    if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.Build.isBrowser) {
      return;
    }
    _locale_js__WEBPACK_IMPORTED_MODULE_2__.n.numberFormatOptions = {
      numberingSystem: this.numberingSystem,
      locale: this.effectiveLocale,
      useGrouping: false,
    };
    this.localeData = await getLocaleData(this.effectiveLocale);
    this.dateTimeFormat = (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.b)(this.effectiveLocale, DATE_PICKER_FORMAT_OPTIONS);
  }
  /**
   * Render calcite-date-picker-month-header and calcite-date-picker-month
   *
   * @param activeDate
   * @param maxDate
   * @param minDate
   * @param date
   * @param endDate
   */
  renderCalendar(activeDate, maxDate, minDate, date, endDate) {
    return (this.localeData && [
      (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-date-picker-month-header", { activeDate: activeDate, headingLevel: this.headingLevel || HEADING_LEVEL, localeData: this.localeData, max: maxDate, messages: this.messages, min: minDate, onCalciteInternalDatePickerSelect: this.monthHeaderSelectChange, scale: this.scale, selectedDate: this.activeRange === "end" ? endDate : date || new Date() }),
      (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-date-picker-month", { activeDate: activeDate, dateTimeFormat: this.dateTimeFormat, endDate: this.range ? endDate : undefined, hoverRange: this.hoverRange, localeData: this.localeData, max: maxDate, min: minDate, onCalciteInternalDatePickerActiveDateChange: this.monthActiveDateChange, onCalciteInternalDatePickerHover: this.monthHoverChange, onCalciteInternalDatePickerMouseOut: this.monthMouseOutChange, onCalciteInternalDatePickerSelect: this.monthDateChange, scale: this.scale, selectedDate: this.activeRange === "end" ? endDate : date, startDate: this.range ? date : undefined }),
    ]);
  }
  getEndDate() {
    return (Array.isArray(this.valueAsDate) && this.valueAsDate[1]) || undefined;
  }
  setEndDate(date) {
    const startDate = this.getStartDate();
    const newEndDate = date ? (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.s)(date) : date;
    this.value = [(0,_date_js__WEBPACK_IMPORTED_MODULE_0__.c)(startDate), (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.c)(date)];
    this.valueAsDate = [startDate, date];
    this.mostRecentRangeValue = newEndDate;
    this.calciteDatePickerRangeChange.emit();
    this.activeEndDate = date || null;
  }
  getStartDate() {
    return Array.isArray(this.valueAsDate) && this.valueAsDate[0];
  }
  setStartDate(date) {
    const endDate = this.getEndDate();
    this.value = [(0,_date_js__WEBPACK_IMPORTED_MODULE_0__.c)(date), (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.c)(endDate)];
    this.valueAsDate = [date, endDate];
    this.mostRecentRangeValue = date;
    this.calciteDatePickerRangeChange.emit();
    this.activeStartDate = date || null;
  }
  /**
   * Get an active date using the value, or current date as default
   *
   * @param value
   * @param min
   * @param max
   */
  getActiveDate(value, min, max) {
    return (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.activeDate, min, max) || value || (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.f)(new Date(), min, max);
  }
  getActiveEndDate(value, min, max) {
    return ((0,_date_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.activeEndDate, min, max) || value || (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.f)(new Date(), min, max));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "activeDate": ["activeDateWatcher"],
    "valueAsDate": ["valueAsDateWatcher"],
    "min": ["onMinChanged"],
    "max": ["onMaxChanged"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange", "loadLocaleData"],
    "value": ["valueHandler"]
  }; }
  static get style() { return datePickerCss; }
}, [17, "calcite-date-picker", {
    "activeDate": [1040],
    "activeRange": [513, "active-range"],
    "value": [1025],
    "headingLevel": [514, "heading-level"],
    "valueAsDate": [1040],
    "minAsDate": [1040],
    "maxAsDate": [1040],
    "min": [513],
    "max": [513],
    "numberingSystem": [513, "numbering-system"],
    "scale": [513],
    "range": [516],
    "proximitySelectionDisabled": [516, "proximity-selection-disabled"],
    "messageOverrides": [1040],
    "messages": [1040],
    "activeEndDate": [32],
    "activeStartDate": [32],
    "dateTimeFormat": [32],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "endAsDate": [32],
    "hoverRange": [32],
    "localeData": [32],
    "mostRecentRangeValue": [32],
    "startAsDate": [32],
    "setFocus": [64],
    "reset": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-date-picker", "calcite-date-picker-day", "calcite-date-picker-month", "calcite-date-picker-month-header", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-date-picker":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DatePicker);
      }
      break;
    case "calcite-date-picker-day":
      if (!customElements.get(tagName)) {
        (0,_date_picker_day_js__WEBPACK_IMPORTED_MODULE_4__.d)();
      }
      break;
    case "calcite-date-picker-month":
      if (!customElements.get(tagName)) {
        (0,_date_picker_month_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
    case "calcite-date-picker-month-header":
      if (!customElements.get(tagName)) {
        (0,_date_picker_month_header_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/t9n.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/t9n.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ connectMessages),
/* harmony export */   d: () => (/* binding */ disconnectMessages),
/* harmony export */   s: () => (/* binding */ setUpMessages),
/* harmony export */   u: () => (/* binding */ updateMessages)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const componentLangToMessageBundleCache = {};
async function getMessageBundle(lang, component) {
  const key = `${component}_${lang}`;
  if (componentLangToMessageBundleCache[key]) {
    return componentLangToMessageBundleCache[key];
  }
  componentLangToMessageBundleCache[key] = fetch((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.getAssetPath)(`./assets/${component}/t9n/messages_${lang}.json`))
    .then((resp) => {
    if (!resp.ok) {
      throwMessageFetchError();
    }
    return resp.json();
  })
    .catch(() => throwMessageFetchError());
  return componentLangToMessageBundleCache[key];
}
function throwMessageFetchError() {
  throw new Error("could not fetch component message bundle");
}
function mergeMessages(component) {
  component.messages = {
    ...component.defaultMessages,
    ...component.messageOverrides,
  };
}
/**
 * This utility sets up the messages used by the component. It should be awaited in the `componentWillLoad` lifecycle hook.
 *
 * @param component
 */
async function setUpMessages(component) {
  component.defaultMessages = await fetchMessages(component, component.effectiveLocale);
  mergeMessages(component);
}
async function fetchMessages(component, lang) {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.Build.isBrowser) {
    return {};
  }
  const { el } = component;
  const tag = el.tagName.toLowerCase();
  const componentName = tag.replace("calcite-", "");
  return getMessageBundle((0,_locale_js__WEBPACK_IMPORTED_MODULE_0__.g)(lang, "t9n"), componentName);
}
/**
 * This utility must be set up for the component to update its default message bundle if the locale changes.
 *
 * It can be set up in **either** of the following ways:
 *
 * 1. called from `LocalizedComponent`'s `onLocaleChange` method or
 * 2. called from a watcher configured to watch `LocalizedComponent`'s `effectiveLocale` prop
 *
 * @param component
 * @param lang
 */
async function updateMessages(component, lang) {
  component.defaultMessages = await fetchMessages(component, lang);
  mergeMessages(component);
}
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback`
 *
 * **Note**: this must be called after `LocalizedComponent`'s `connectLocalized` method.
 *
 * @param component
 */
function connectMessages(component) {
  component.onMessagesChange = defaultOnMessagesChange;
}
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
function disconnectMessages(component) {
  component.onMessagesChange = undefined;
}
function defaultOnMessagesChange() {
  mergeMessages(this);
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNjRiZTY4ZWNjM2E0NmNlZTllNmJlZTZkY2QyZThhMjIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0k7QUFDZjtBQUNQO0FBQzZDO0FBQ3pDO0FBQ2hEO0FBQ0U7QUFDTztBQUNwQjs7QUFFdkQ7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2Q0FBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsb0ZBQVksNkJBQTZCLE9BQU87QUFDakY7QUFDQTtBQUNBLHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMkNBQVc7QUFDNUM7O0FBRUEsNkJBQTZCLHNCQUFzQixnREFBZ0QsK0JBQStCLHNDQUFzQyxRQUFRLHNCQUFzQixNQUFNLHFCQUFxQixpQkFBaUIsaUJBQWlCLGtCQUFrQixpQkFBaUIsbUJBQW1CLHdDQUF3QyxtQkFBbUIsaUJBQWlCLGtCQUFrQixzQkFBc0Isc0JBQXNCLGlCQUFpQixrQkFBa0Isc0JBQXNCLHNCQUFzQixpQkFBaUIsa0JBQWtCLHNCQUFzQixzQkFBc0IsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUVwcEIsaUNBQWlDLDBGQUFrQixlQUFlLCtFQUFXO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG1GQUFXO0FBQzlDLHdDQUF3QyxtRkFBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGNBQWM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkNBQVc7QUFDdkMsMEJBQTBCLDJDQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGNBQWM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkNBQVM7QUFDL0IscUNBQXFDLDJDQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwyQ0FBVztBQUN6Qyw0QkFBNEIsMkNBQVc7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsaUNBQWlDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkNBQVc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkNBQVc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwrQ0FBa0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZDQUFnQjtBQUNwQixJQUFJLDBDQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJDQUFXO0FBQ3BDO0FBQ0E7QUFDQSx1QkFBdUIsMkNBQVc7QUFDbEM7QUFDQTtBQUNBLHVCQUF1QiwyQ0FBVztBQUNsQztBQUNBO0FBQ0E7QUFDQSxJQUFJLDZDQUFtQjtBQUN2QixJQUFJLDBDQUFrQjtBQUN0QjtBQUNBO0FBQ0EsSUFBSSwrQ0FBc0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsVUFBVSwwQ0FBYTtBQUN2QjtBQUNBO0FBQ0EsSUFBSSwrQ0FBa0I7QUFDdEI7QUFDQTtBQUNBLGlCQUFpQiwyQ0FBYTtBQUM5QjtBQUNBO0FBQ0EsUUFBUSwyQ0FBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5RUFBQyxDQUFDLHdFQUFJLElBQUksK0RBQStEO0FBQ3JGO0FBQ0E7QUFDQSxJQUFJLDBDQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQ0FBVztBQUNwQztBQUNBO0FBQ0E7QUFDQSxTQUFTLHlFQUFLO0FBQ2Q7QUFDQTtBQUNBLElBQUkseUNBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkNBQWlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seUVBQUMsdUNBQXVDLHlUQUF5VDtBQUN2VyxNQUFNLHlFQUFDLGdDQUFnQyxnakJBQWdqQjtBQUN2bEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMkNBQVc7QUFDekMsa0JBQWtCLDJDQUFTLGFBQWEsMkNBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMkNBQVMsUUFBUSwyQ0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkNBQWEsd0NBQXdDLDJDQUFhO0FBQzdFO0FBQ0E7QUFDQSxZQUFZLDJDQUFhLDJDQUEyQywyQ0FBYTtBQUNqRjtBQUNBLGdDQUFnQztBQUNoQyw0QkFBNEI7QUFDNUIsYUFBYTtBQUNiLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkNBQXFCO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFbUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN2lCbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2RTtBQUN2Qjs7QUFFdEQ7QUFDQTtBQUNBLGlCQUFpQixVQUFVLEdBQUcsS0FBSztBQUNuQztBQUNBO0FBQ0E7QUFDQSxpREFBaUQsb0ZBQVksYUFBYSxVQUFVLGdCQUFnQixLQUFLO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlFQUFLO0FBQ1o7QUFDQTtBQUNBLFVBQVUsS0FBSztBQUNmO0FBQ0E7QUFDQSwwQkFBMEIsNkNBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2RhdGUtcGlja2VyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy90OW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZ2V0QXNzZXRQYXRoLCBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgSG9zdCwgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBlIGFzIGRhdGVGcm9tSVNPLCBnIGFzIGdldERheXNEaWZmLCBjIGFzIGRhdGVUb0lTTywgZiBhcyBkYXRlRnJvbVJhbmdlLCBzIGFzIHNldEVuZE9mRGF5IH0gZnJvbSAnLi9kYXRlLmpzJztcbmltcG9ydCB7IGMgYXMgY29tcG9uZW50Rm9jdXNhYmxlLCBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFN1cHBvcnRlZExvY2FsZSwgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQsIG4gYXMgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLCBiIGFzIGdldERhdGVUaW1lRm9ybWF0IH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIHUgYXMgdXBkYXRlTWVzc2FnZXMgfSBmcm9tICcuL3Q5bi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNCB9IGZyb20gJy4vZGF0ZS1waWNrZXItZGF5LmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQzIH0gZnJvbSAnLi9kYXRlLXBpY2tlci1tb250aC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMiB9IGZyb20gJy4vZGF0ZS1waWNrZXItbW9udGgtaGVhZGVyLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQxIH0gZnJvbSAnLi9pY29uLmpzJztcblxuY29uc3QgSEVBRElOR19MRVZFTCA9IDI7XG5jb25zdCBEQVRFX1BJQ0tFUl9GT1JNQVRfT1BUSU9OUyA9IHsgZGF0ZVN0eWxlOiBcImZ1bGxcIiB9O1xuXG4vKipcbiAqIENMRFIgY2FjaGUuXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCB0cmFuc2xhdGlvbkNhY2hlID0ge307XG4vKipcbiAqIENMRFIgcmVxdWVzdCBjYWNoZS5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IHJlcXVlc3RDYWNoZSA9IHt9O1xuLyoqXG4gKiBGZXRjaCBjYWxlbmRhciBkYXRhIGZvciBhIGdpdmVuIGxvY2FsZSBmcm9tIGxpc3Qgb2Ygc3VwcG9ydGVkIGxhbmd1YWdlc1xuICpcbiAqIEBwYXJhbSBsYW5nXG4gKiBAcHVibGljXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldExvY2FsZURhdGEobGFuZykge1xuICBjb25zdCBsb2NhbGUgPSBnZXRTdXBwb3J0ZWRMb2NhbGUobGFuZyk7XG4gIGlmICh0cmFuc2xhdGlvbkNhY2hlW2xvY2FsZV0pIHtcbiAgICByZXR1cm4gdHJhbnNsYXRpb25DYWNoZVtsb2NhbGVdO1xuICB9XG4gIGlmICghcmVxdWVzdENhY2hlW2xvY2FsZV0pIHtcbiAgICByZXF1ZXN0Q2FjaGVbbG9jYWxlXSA9IGZldGNoKGdldEFzc2V0UGF0aChgLi9hc3NldHMvZGF0ZS1waWNrZXIvbmxzLyR7bG9jYWxlfS5qc29uYCkpXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihgVHJhbnNsYXRpb25zIGZvciBcIiR7bG9jYWxlfVwiIG5vdCBmb3VuZCBvciBpbnZhbGlkLCBmYWxsaW5nIGJhY2sgdG8gZW5nbGlzaGApO1xuICAgICAgcmV0dXJuIGdldExvY2FsZURhdGEoXCJlblwiKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdENhY2hlW2xvY2FsZV07XG4gIHRyYW5zbGF0aW9uQ2FjaGVbbG9jYWxlXSA9IGRhdGE7XG4gIHJldHVybiBkYXRhO1xufVxuLyoqXG4gKiAgTWFwcyB2YWx1ZSB0byB2YWx1ZUFzRGF0ZVxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZUFzRGF0ZVJhbmdlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5tYXAoKHYsIGluZGV4KSA9PiBkYXRlRnJvbUlTTyh2LCBpbmRleCA9PT0gMSkpO1xufVxuXG5jb25zdCBkYXRlUGlja2VyQ3NzID0gXCI6aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSl9Omhvc3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7aW5saW5lLXNpemU6YXV0bztvdmVyZmxvdzp2aXNpYmxlO2JvcmRlci1yYWRpdXM6MHB4O2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKTt2ZXJ0aWNhbC1hbGlnbjp0b3B9Omhvc3QoW3NjYWxlPXNdKXtpbmxpbmUtc2l6ZToyMzRweDttaW4taW5saW5lLXNpemU6MjE2cHg7bWF4LWlubGluZS1zaXplOjM4MHB4fTpob3N0KFtzY2FsZT1tXSl7aW5saW5lLXNpemU6MzA0cHg7bWluLWlubGluZS1zaXplOjI3MnB4O21heC1pbmxpbmUtc2l6ZTo0ODBweH06aG9zdChbc2NhbGU9bF0pe2lubGluZS1zaXplOjM3MHB4O21pbi1pbmxpbmUtc2l6ZTozMjBweDttYXgtaW5saW5lLXNpemU6NjAwcHh9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IERhdGVQaWNrZXIgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZURhdGVQaWNrZXJDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVEYXRlUGlja2VyQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZURhdGVQaWNrZXJSYW5nZUNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZURhdGVQaWNrZXJSYW5nZUNoYW5nZVwiLCA2KTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICB0aGlzLnJlc2V0QWN0aXZlRGF0ZXMoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMubW9udGhIZWFkZXJTZWxlY3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShldmVudC5kZXRhaWwpO1xuICAgICAgaWYgKCF0aGlzLnJhbmdlKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IGRhdGU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUmFuZ2UgPT09IFwiZW5kXCIpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUVuZERhdGUgPSBkYXRlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWN0aXZlU3RhcnREYXRlID0gZGF0ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vc3RSZWNlbnRSYW5nZVZhbHVlID0gZGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMubW9udGhBY3RpdmVEYXRlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZXZlbnQuZGV0YWlsKTtcbiAgICAgIGlmICghdGhpcy5yYW5nZSkge1xuICAgICAgICB0aGlzLmFjdGl2ZURhdGUgPSBkYXRlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVJhbmdlID09PSBcImVuZFwiKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVFbmREYXRlID0gZGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVN0YXJ0RGF0ZSA9IGRhdGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3N0UmVjZW50UmFuZ2VWYWx1ZSA9IGRhdGU7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm1vbnRoSG92ZXJDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghdGhpcy5yYW5nZSkge1xuICAgICAgICB0aGlzLmhvdmVyUmFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgdmFsdWVBc0RhdGUgfSA9IHRoaXM7XG4gICAgICBjb25zdCBzdGFydCA9IEFycmF5LmlzQXJyYXkodmFsdWVBc0RhdGUpICYmIHZhbHVlQXNEYXRlWzBdO1xuICAgICAgY29uc3QgZW5kID0gQXJyYXkuaXNBcnJheSh2YWx1ZUFzRGF0ZSkgJiYgdmFsdWVBc0RhdGVbMV07XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZXZlbnQuZGV0YWlsKTtcbiAgICAgIHRoaXMuaG92ZXJSYW5nZSA9IHtcbiAgICAgICAgZm9jdXNlZDogdGhpcy5hY3RpdmVSYW5nZSB8fCBcInN0YXJ0XCIsXG4gICAgICAgIHN0YXJ0LFxuICAgICAgICBlbmQsXG4gICAgICB9O1xuICAgICAgaWYgKCF0aGlzLnByb3hpbWl0eVNlbGVjdGlvbkRpc2FibGVkKSB7XG4gICAgICAgIGlmIChlbmQpIHtcbiAgICAgICAgICBjb25zdCBzdGFydERpZmYgPSBnZXREYXlzRGlmZihkYXRlLCBzdGFydCk7XG4gICAgICAgICAgY29uc3QgZW5kRGlmZiA9IGdldERheXNEaWZmKGRhdGUsIGVuZCk7XG4gICAgICAgICAgaWYgKGVuZERpZmYgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmhvdmVyUmFuZ2UuZW5kID0gZGF0ZTtcbiAgICAgICAgICAgIHRoaXMuaG92ZXJSYW5nZS5mb2N1c2VkID0gXCJlbmRcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoc3RhcnREaWZmIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5ob3ZlclJhbmdlLnN0YXJ0ID0gZGF0ZTtcbiAgICAgICAgICAgIHRoaXMuaG92ZXJSYW5nZS5mb2N1c2VkID0gXCJzdGFydFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChzdGFydERpZmYgPiBlbmREaWZmKSB7XG4gICAgICAgICAgICB0aGlzLmhvdmVyUmFuZ2Uuc3RhcnQgPSBkYXRlO1xuICAgICAgICAgICAgdGhpcy5ob3ZlclJhbmdlLmZvY3VzZWQgPSBcInN0YXJ0XCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ob3ZlclJhbmdlLmVuZCA9IGRhdGU7XG4gICAgICAgICAgICB0aGlzLmhvdmVyUmFuZ2UuZm9jdXNlZCA9IFwiZW5kXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmIChzdGFydCkge1xuICAgICAgICAgICAgaWYgKGRhdGUgPCBzdGFydCkge1xuICAgICAgICAgICAgICB0aGlzLmhvdmVyUmFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgZm9jdXNlZDogXCJzdGFydFwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBkYXRlLFxuICAgICAgICAgICAgICAgIGVuZDogc3RhcnQsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5ob3ZlclJhbmdlLmVuZCA9IGRhdGU7XG4gICAgICAgICAgICAgIHRoaXMuaG92ZXJSYW5nZS5mb2N1c2VkID0gXCJlbmRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoIWVuZCkge1xuICAgICAgICAgIGlmIChkYXRlIDwgc3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMuaG92ZXJSYW5nZSA9IHtcbiAgICAgICAgICAgICAgZm9jdXNlZDogXCJzdGFydFwiLFxuICAgICAgICAgICAgICBzdGFydDogZGF0ZSxcbiAgICAgICAgICAgICAgZW5kOiBzdGFydCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ob3ZlclJhbmdlLmVuZCA9IGRhdGU7XG4gICAgICAgICAgICB0aGlzLmhvdmVyUmFuZ2UuZm9jdXNlZCA9IFwiZW5kXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuaG92ZXJSYW5nZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICB0aGlzLm1vbnRoTW91c2VPdXRDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5ob3ZlclJhbmdlKSB7XG4gICAgICAgIHRoaXMuaG92ZXJSYW5nZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucmVzZXRBY3RpdmVEYXRlcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgdmFsdWVBc0RhdGUgfSA9IHRoaXM7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVBc0RhdGUpICYmIHZhbHVlQXNEYXRlICYmIHZhbHVlQXNEYXRlICE9PSB0aGlzLmFjdGl2ZURhdGUpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUodmFsdWVBc0RhdGUpO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVBc0RhdGUpKSB7XG4gICAgICAgIGlmICh2YWx1ZUFzRGF0ZVswXSAmJiB2YWx1ZUFzRGF0ZVswXSAhPT0gdGhpcy5hY3RpdmVTdGFydERhdGUpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHZhbHVlQXNEYXRlWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWVBc0RhdGVbMV0gJiYgdmFsdWVBc0RhdGVbMV0gIT09IHRoaXMuYWN0aXZlRW5kRGF0ZSkge1xuICAgICAgICAgIHRoaXMuYWN0aXZlRW5kRGF0ZSA9IG5ldyBEYXRlKHZhbHVlQXNEYXRlWzFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3Igd2hlbiB0aGUgc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICB0aGlzLm1vbnRoRGF0ZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRldGFpbCk7XG4gICAgICBjb25zdCBpc29EYXRlID0gZGF0ZVRvSVNPKGRhdGUpO1xuICAgICAgaWYgKCF0aGlzLnJhbmdlICYmIGlzb0RhdGUgPT09IGRhdGVUb0lTTyh0aGlzLnZhbHVlQXNEYXRlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMucmFuZ2UpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGlzb0RhdGUgfHwgXCJcIjtcbiAgICAgICAgdGhpcy52YWx1ZUFzRGF0ZSA9IGRhdGUgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlID0gZGF0ZSB8fCBudWxsO1xuICAgICAgICB0aGlzLmNhbGNpdGVEYXRlUGlja2VyQ2hhbmdlLmVtaXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmdldFN0YXJ0RGF0ZSgpO1xuICAgICAgY29uc3QgZW5kID0gdGhpcy5nZXRFbmREYXRlKCk7XG4gICAgICBpZiAoIXN0YXJ0IHx8ICghZW5kICYmIGRhdGUgPCBzdGFydCkpIHtcbiAgICAgICAgaWYgKHN0YXJ0KSB7XG4gICAgICAgICAgdGhpcy5zZXRFbmREYXRlKG5ldyBEYXRlKHN0YXJ0KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUmFuZ2UgPT0gXCJlbmRcIikge1xuICAgICAgICAgIHRoaXMuc2V0RW5kRGF0ZShkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXJ0RGF0ZShkYXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIWVuZCkge1xuICAgICAgICB0aGlzLnNldEVuZERhdGUoZGF0ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3hpbWl0eVNlbGVjdGlvbkRpc2FibGVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUmFuZ2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVJhbmdlID09IFwiZW5kXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRFbmREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhcnREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0RGlmZiA9IGdldERheXNEaWZmKGRhdGUsIHN0YXJ0KTtcbiAgICAgICAgICAgIGNvbnN0IGVuZERpZmYgPSBnZXREYXlzRGlmZihkYXRlLCBlbmQpO1xuICAgICAgICAgICAgaWYgKGVuZERpZmYgPT09IDAgfHwgc3RhcnREaWZmIDwgMCkge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXJ0RGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0RGlmZiA9PT0gMCB8fCBlbmREaWZmIDwgMCkge1xuICAgICAgICAgICAgICB0aGlzLnNldEVuZERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydERpZmYgPCBlbmREaWZmKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhcnREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0RW5kRGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGFydERhdGUoZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY2FsY2l0ZURhdGVQaWNrZXJDaGFuZ2UuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5hY3RpdmVEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWN0aXZlUmFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhlYWRpbmdMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZhbHVlQXNEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWluQXNEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWF4QXNEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWluID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWF4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnJhbmdlID0gZmFsc2U7XG4gICAgdGhpcy5wcm94aW1pdHlTZWxlY3Rpb25EaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWN0aXZlRW5kRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFjdGl2ZVN0YXJ0RGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRhdGVUaW1lRm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgICB0aGlzLmVuZEFzRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhvdmVyUmFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2NhbGVEYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubW9zdFJlY2VudFJhbmdlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGFydEFzRGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICBhY3RpdmVEYXRlV2F0Y2hlcihuZXdBY3RpdmVEYXRlKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlUmFuZ2UgPT09IFwiZW5kXCIpIHtcbiAgICAgIHRoaXMuYWN0aXZlRW5kRGF0ZSA9IG5ld0FjdGl2ZURhdGU7XG4gICAgfVxuICB9XG4gIHZhbHVlQXNEYXRlV2F0Y2hlcihuZXdWYWx1ZUFzRGF0ZSkge1xuICAgIGlmICh0aGlzLnJhbmdlICYmIEFycmF5LmlzQXJyYXkobmV3VmFsdWVBc0RhdGUpKSB7XG4gICAgICBjb25zdCB7IGFjdGl2ZVN0YXJ0RGF0ZSwgYWN0aXZlRW5kRGF0ZSB9ID0gdGhpcztcbiAgICAgIGNvbnN0IG5ld0FjdGl2ZVN0YXJ0RGF0ZSA9IG5ld1ZhbHVlQXNEYXRlWzBdO1xuICAgICAgY29uc3QgbmV3QWN0aXZlRW5kRGF0ZSA9IG5ld1ZhbHVlQXNEYXRlWzFdO1xuICAgICAgdGhpcy5hY3RpdmVTdGFydERhdGUgPSBhY3RpdmVTdGFydERhdGUgIT09IG5ld0FjdGl2ZVN0YXJ0RGF0ZSAmJiBuZXdBY3RpdmVTdGFydERhdGU7XG4gICAgICB0aGlzLmFjdGl2ZUVuZERhdGUgPSBhY3RpdmVFbmREYXRlICE9PSBuZXdBY3RpdmVFbmREYXRlICYmIG5ld0FjdGl2ZUVuZERhdGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKG5ld1ZhbHVlQXNEYXRlICYmIG5ld1ZhbHVlQXNEYXRlICE9PSB0aGlzLmFjdGl2ZURhdGUpIHtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ld1ZhbHVlQXNEYXRlO1xuICAgIH1cbiAgfVxuICBvbk1pbkNoYW5nZWQobWluKSB7XG4gICAgaWYgKG1pbikge1xuICAgICAgdGhpcy5taW5Bc0RhdGUgPSBkYXRlRnJvbUlTTyhtaW4pO1xuICAgIH1cbiAgfVxuICBvbk1heENoYW5nZWQobWF4KSB7XG4gICAgaWYgKG1heCkge1xuICAgICAgdGhpcy5tYXhBc0RhdGUgPSBkYXRlRnJvbUlTTyhtYXgpO1xuICAgIH1cbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50J3MgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbiAgLyoqXG4gICAqIFJlc2V0cyBhY3RpdmUgZGF0ZSBzdGF0ZS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyByZXNldCgpIHtcbiAgICB0aGlzLnJlc2V0QWN0aXZlRGF0ZXMoKTtcbiAgICB0aGlzLm1vc3RSZWNlbnRSYW5nZVZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMudmFsdWVBc0RhdGUgPSBnZXRWYWx1ZUFzRGF0ZVJhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlQXNEYXRlID0gZGF0ZUZyb21JU08odGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1pbikge1xuICAgICAgdGhpcy5taW5Bc0RhdGUgPSBkYXRlRnJvbUlTTyh0aGlzLm1pbik7XG4gICAgfVxuICAgIGlmICh0aGlzLm1heCkge1xuICAgICAgdGhpcy5tYXhBc0RhdGUgPSBkYXRlRnJvbUlTTyh0aGlzLm1heCk7XG4gICAgfVxuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgYXdhaXQgdGhpcy5sb2FkTG9jYWxlRGF0YSgpO1xuICAgIHRoaXMub25NaW5DaGFuZ2VkKHRoaXMubWluKTtcbiAgICB0aGlzLm9uTWF4Q2hhbmdlZCh0aGlzLm1heCk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGF0ZSA9IGRhdGVGcm9tUmFuZ2UodGhpcy5yYW5nZSAmJiBBcnJheS5pc0FycmF5KHRoaXMudmFsdWVBc0RhdGUpID8gdGhpcy52YWx1ZUFzRGF0ZVswXSA6IHRoaXMudmFsdWVBc0RhdGUsIHRoaXMubWluQXNEYXRlLCB0aGlzLm1heEFzRGF0ZSk7XG4gICAgbGV0IGFjdGl2ZURhdGUgPSB0aGlzLmdldEFjdGl2ZURhdGUoZGF0ZSwgdGhpcy5taW5Bc0RhdGUsIHRoaXMubWF4QXNEYXRlKTtcbiAgICBjb25zdCBlbmREYXRlID0gdGhpcy5yYW5nZSAmJiBBcnJheS5pc0FycmF5KHRoaXMudmFsdWVBc0RhdGUpXG4gICAgICA/IGRhdGVGcm9tUmFuZ2UodGhpcy52YWx1ZUFzRGF0ZVsxXSwgdGhpcy5taW5Bc0RhdGUsIHRoaXMubWF4QXNEYXRlKVxuICAgICAgOiBudWxsO1xuICAgIGNvbnN0IGFjdGl2ZUVuZERhdGUgPSB0aGlzLmdldEFjdGl2ZUVuZERhdGUoZW5kRGF0ZSwgdGhpcy5taW5Bc0RhdGUsIHRoaXMubWF4QXNEYXRlKTtcbiAgICBpZiAoKHRoaXMuYWN0aXZlUmFuZ2UgPT09IFwiZW5kXCIgfHxcbiAgICAgICh0aGlzLmhvdmVyUmFuZ2U/LmZvY3VzZWQgPT09IFwiZW5kXCIgJiYgKCF0aGlzLnByb3hpbWl0eVNlbGVjdGlvbkRpc2FibGVkIHx8IGVuZERhdGUpKSkgJiZcbiAgICAgIGFjdGl2ZUVuZERhdGUpIHtcbiAgICAgIGFjdGl2ZURhdGUgPSBhY3RpdmVFbmREYXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5yYW5nZSAmJiB0aGlzLm1vc3RSZWNlbnRSYW5nZVZhbHVlKSB7XG4gICAgICBhY3RpdmVEYXRlID0gdGhpcy5tb3N0UmVjZW50UmFuZ2VWYWx1ZTtcbiAgICB9XG4gICAgY29uc3QgbWluRGF0ZSA9IHRoaXMucmFuZ2UgJiYgdGhpcy5hY3RpdmVSYW5nZVxuICAgICAgPyB0aGlzLmFjdGl2ZVJhbmdlID09PSBcInN0YXJ0XCJcbiAgICAgICAgPyB0aGlzLm1pbkFzRGF0ZVxuICAgICAgICA6IGRhdGUgfHwgdGhpcy5taW5Bc0RhdGVcbiAgICAgIDogdGhpcy5taW5Bc0RhdGU7XG4gICAgY29uc3QgbWF4RGF0ZSA9IHRoaXMucmFuZ2UgJiYgdGhpcy5hY3RpdmVSYW5nZVxuICAgICAgPyB0aGlzLmFjdGl2ZVJhbmdlID09PSBcInN0YXJ0XCJcbiAgICAgICAgPyBlbmREYXRlIHx8IHRoaXMubWF4QXNEYXRlXG4gICAgICAgIDogdGhpcy5tYXhBc0RhdGVcbiAgICAgIDogdGhpcy5tYXhBc0RhdGU7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgb25CbHVyOiB0aGlzLnJlc2V0QWN0aXZlRGF0ZXMsIG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlciB9LCB0aGlzLnJlbmRlckNhbGVuZGFyKGFjdGl2ZURhdGUsIG1heERhdGUsIG1pbkRhdGUsIGRhdGUsIGVuZERhdGUpKSk7XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICB2YWx1ZUhhbmRsZXIodmFsdWUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMudmFsdWVBc0RhdGUgPSBnZXRWYWx1ZUFzRGF0ZVJhbmdlKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWVBc0RhdGUgPSBkYXRlRnJvbUlTTyh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIGFzeW5jIGxvYWRMb2NhbGVEYXRhKCkge1xuICAgIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICB1c2VHcm91cGluZzogZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLmxvY2FsZURhdGEgPSBhd2FpdCBnZXRMb2NhbGVEYXRhKHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgICB0aGlzLmRhdGVUaW1lRm9ybWF0ID0gZ2V0RGF0ZVRpbWVGb3JtYXQodGhpcy5lZmZlY3RpdmVMb2NhbGUsIERBVEVfUElDS0VSX0ZPUk1BVF9PUFRJT05TKTtcbiAgfVxuICAvKipcbiAgICogUmVuZGVyIGNhbGNpdGUtZGF0ZS1waWNrZXItbW9udGgtaGVhZGVyIGFuZCBjYWxjaXRlLWRhdGUtcGlja2VyLW1vbnRoXG4gICAqXG4gICAqIEBwYXJhbSBhY3RpdmVEYXRlXG4gICAqIEBwYXJhbSBtYXhEYXRlXG4gICAqIEBwYXJhbSBtaW5EYXRlXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEBwYXJhbSBlbmREYXRlXG4gICAqL1xuICByZW5kZXJDYWxlbmRhcihhY3RpdmVEYXRlLCBtYXhEYXRlLCBtaW5EYXRlLCBkYXRlLCBlbmREYXRlKSB7XG4gICAgcmV0dXJuICh0aGlzLmxvY2FsZURhdGEgJiYgW1xuICAgICAgaChcImNhbGNpdGUtZGF0ZS1waWNrZXItbW9udGgtaGVhZGVyXCIsIHsgYWN0aXZlRGF0ZTogYWN0aXZlRGF0ZSwgaGVhZGluZ0xldmVsOiB0aGlzLmhlYWRpbmdMZXZlbCB8fCBIRUFESU5HX0xFVkVMLCBsb2NhbGVEYXRhOiB0aGlzLmxvY2FsZURhdGEsIG1heDogbWF4RGF0ZSwgbWVzc2FnZXM6IHRoaXMubWVzc2FnZXMsIG1pbjogbWluRGF0ZSwgb25DYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyU2VsZWN0OiB0aGlzLm1vbnRoSGVhZGVyU2VsZWN0Q2hhbmdlLCBzY2FsZTogdGhpcy5zY2FsZSwgc2VsZWN0ZWREYXRlOiB0aGlzLmFjdGl2ZVJhbmdlID09PSBcImVuZFwiID8gZW5kRGF0ZSA6IGRhdGUgfHwgbmV3IERhdGUoKSB9KSxcbiAgICAgIGgoXCJjYWxjaXRlLWRhdGUtcGlja2VyLW1vbnRoXCIsIHsgYWN0aXZlRGF0ZTogYWN0aXZlRGF0ZSwgZGF0ZVRpbWVGb3JtYXQ6IHRoaXMuZGF0ZVRpbWVGb3JtYXQsIGVuZERhdGU6IHRoaXMucmFuZ2UgPyBlbmREYXRlIDogdW5kZWZpbmVkLCBob3ZlclJhbmdlOiB0aGlzLmhvdmVyUmFuZ2UsIGxvY2FsZURhdGE6IHRoaXMubG9jYWxlRGF0YSwgbWF4OiBtYXhEYXRlLCBtaW46IG1pbkRhdGUsIG9uQ2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlckFjdGl2ZURhdGVDaGFuZ2U6IHRoaXMubW9udGhBY3RpdmVEYXRlQ2hhbmdlLCBvbkNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJIb3ZlcjogdGhpcy5tb250aEhvdmVyQ2hhbmdlLCBvbkNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJNb3VzZU91dDogdGhpcy5tb250aE1vdXNlT3V0Q2hhbmdlLCBvbkNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJTZWxlY3Q6IHRoaXMubW9udGhEYXRlQ2hhbmdlLCBzY2FsZTogdGhpcy5zY2FsZSwgc2VsZWN0ZWREYXRlOiB0aGlzLmFjdGl2ZVJhbmdlID09PSBcImVuZFwiID8gZW5kRGF0ZSA6IGRhdGUsIHN0YXJ0RGF0ZTogdGhpcy5yYW5nZSA/IGRhdGUgOiB1bmRlZmluZWQgfSksXG4gICAgXSk7XG4gIH1cbiAgZ2V0RW5kRGF0ZSgpIHtcbiAgICByZXR1cm4gKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZUFzRGF0ZSkgJiYgdGhpcy52YWx1ZUFzRGF0ZVsxXSkgfHwgdW5kZWZpbmVkO1xuICB9XG4gIHNldEVuZERhdGUoZGF0ZSkge1xuICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IHRoaXMuZ2V0U3RhcnREYXRlKCk7XG4gICAgY29uc3QgbmV3RW5kRGF0ZSA9IGRhdGUgPyBzZXRFbmRPZkRheShkYXRlKSA6IGRhdGU7XG4gICAgdGhpcy52YWx1ZSA9IFtkYXRlVG9JU08oc3RhcnREYXRlKSwgZGF0ZVRvSVNPKGRhdGUpXTtcbiAgICB0aGlzLnZhbHVlQXNEYXRlID0gW3N0YXJ0RGF0ZSwgZGF0ZV07XG4gICAgdGhpcy5tb3N0UmVjZW50UmFuZ2VWYWx1ZSA9IG5ld0VuZERhdGU7XG4gICAgdGhpcy5jYWxjaXRlRGF0ZVBpY2tlclJhbmdlQ2hhbmdlLmVtaXQoKTtcbiAgICB0aGlzLmFjdGl2ZUVuZERhdGUgPSBkYXRlIHx8IG51bGw7XG4gIH1cbiAgZ2V0U3RhcnREYXRlKCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRoaXMudmFsdWVBc0RhdGUpICYmIHRoaXMudmFsdWVBc0RhdGVbMF07XG4gIH1cbiAgc2V0U3RhcnREYXRlKGRhdGUpIHtcbiAgICBjb25zdCBlbmREYXRlID0gdGhpcy5nZXRFbmREYXRlKCk7XG4gICAgdGhpcy52YWx1ZSA9IFtkYXRlVG9JU08oZGF0ZSksIGRhdGVUb0lTTyhlbmREYXRlKV07XG4gICAgdGhpcy52YWx1ZUFzRGF0ZSA9IFtkYXRlLCBlbmREYXRlXTtcbiAgICB0aGlzLm1vc3RSZWNlbnRSYW5nZVZhbHVlID0gZGF0ZTtcbiAgICB0aGlzLmNhbGNpdGVEYXRlUGlja2VyUmFuZ2VDaGFuZ2UuZW1pdCgpO1xuICAgIHRoaXMuYWN0aXZlU3RhcnREYXRlID0gZGF0ZSB8fCBudWxsO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgYW4gYWN0aXZlIGRhdGUgdXNpbmcgdGhlIHZhbHVlLCBvciBjdXJyZW50IGRhdGUgYXMgZGVmYXVsdFxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICogQHBhcmFtIG1pblxuICAgKiBAcGFyYW0gbWF4XG4gICAqL1xuICBnZXRBY3RpdmVEYXRlKHZhbHVlLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBkYXRlRnJvbVJhbmdlKHRoaXMuYWN0aXZlRGF0ZSwgbWluLCBtYXgpIHx8IHZhbHVlIHx8IGRhdGVGcm9tUmFuZ2UobmV3IERhdGUoKSwgbWluLCBtYXgpO1xuICB9XG4gIGdldEFjdGl2ZUVuZERhdGUodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIChkYXRlRnJvbVJhbmdlKHRoaXMuYWN0aXZlRW5kRGF0ZSwgbWluLCBtYXgpIHx8IHZhbHVlIHx8IGRhdGVGcm9tUmFuZ2UobmV3IERhdGUoKSwgbWluLCBtYXgpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGRlbGVnYXRlc0ZvY3VzKCkgeyByZXR1cm4gdHJ1ZTsgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiYWN0aXZlRGF0ZVwiOiBbXCJhY3RpdmVEYXRlV2F0Y2hlclwiXSxcbiAgICBcInZhbHVlQXNEYXRlXCI6IFtcInZhbHVlQXNEYXRlV2F0Y2hlclwiXSxcbiAgICBcIm1pblwiOiBbXCJvbk1pbkNoYW5nZWRcIl0sXG4gICAgXCJtYXhcIjogW1wib25NYXhDaGFuZ2VkXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiLCBcImxvYWRMb2NhbGVEYXRhXCJdLFxuICAgIFwidmFsdWVcIjogW1widmFsdWVIYW5kbGVyXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIGRhdGVQaWNrZXJDc3M7IH1cbn0sIFsxNywgXCJjYWxjaXRlLWRhdGUtcGlja2VyXCIsIHtcbiAgICBcImFjdGl2ZURhdGVcIjogWzEwNDBdLFxuICAgIFwiYWN0aXZlUmFuZ2VcIjogWzUxMywgXCJhY3RpdmUtcmFuZ2VcIl0sXG4gICAgXCJ2YWx1ZVwiOiBbMTAyNV0sXG4gICAgXCJoZWFkaW5nTGV2ZWxcIjogWzUxNCwgXCJoZWFkaW5nLWxldmVsXCJdLFxuICAgIFwidmFsdWVBc0RhdGVcIjogWzEwNDBdLFxuICAgIFwibWluQXNEYXRlXCI6IFsxMDQwXSxcbiAgICBcIm1heEFzRGF0ZVwiOiBbMTA0MF0sXG4gICAgXCJtaW5cIjogWzUxM10sXG4gICAgXCJtYXhcIjogWzUxM10sXG4gICAgXCJudW1iZXJpbmdTeXN0ZW1cIjogWzUxMywgXCJudW1iZXJpbmctc3lzdGVtXCJdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJyYW5nZVwiOiBbNTE2XSxcbiAgICBcInByb3hpbWl0eVNlbGVjdGlvbkRpc2FibGVkXCI6IFs1MTYsIFwicHJveGltaXR5LXNlbGVjdGlvbi1kaXNhYmxlZFwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogWzEwNDBdLFxuICAgIFwibWVzc2FnZXNcIjogWzEwNDBdLFxuICAgIFwiYWN0aXZlRW5kRGF0ZVwiOiBbMzJdLFxuICAgIFwiYWN0aXZlU3RhcnREYXRlXCI6IFszMl0sXG4gICAgXCJkYXRlVGltZUZvcm1hdFwiOiBbMzJdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogWzMyXSxcbiAgICBcImVuZEFzRGF0ZVwiOiBbMzJdLFxuICAgIFwiaG92ZXJSYW5nZVwiOiBbMzJdLFxuICAgIFwibG9jYWxlRGF0YVwiOiBbMzJdLFxuICAgIFwibW9zdFJlY2VudFJhbmdlVmFsdWVcIjogWzMyXSxcbiAgICBcInN0YXJ0QXNEYXRlXCI6IFszMl0sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdLFxuICAgIFwicmVzZXRcIjogWzY0XVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWRhdGUtcGlja2VyXCIsIFwiY2FsY2l0ZS1kYXRlLXBpY2tlci1kYXlcIiwgXCJjYWxjaXRlLWRhdGUtcGlja2VyLW1vbnRoXCIsIFwiY2FsY2l0ZS1kYXRlLXBpY2tlci1tb250aC1oZWFkZXJcIiwgXCJjYWxjaXRlLWljb25cIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtZGF0ZS1waWNrZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBEYXRlUGlja2VyKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWRhdGUtcGlja2VyLWRheVwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1kYXRlLXBpY2tlci1tb250aFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQzKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1kYXRlLXBpY2tlci1tb250aC1oZWFkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgRGF0ZVBpY2tlciBhcyBELCBnZXRMb2NhbGVEYXRhIGFzIGEsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCwgZ2V0VmFsdWVBc0RhdGVSYW5nZSBhcyBnIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBCdWlsZCwgZ2V0QXNzZXRQYXRoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTdXBwb3J0ZWRMb2NhbGUgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5cbmNvbnN0IGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZSA9IHt9O1xuYXN5bmMgZnVuY3Rpb24gZ2V0TWVzc2FnZUJ1bmRsZShsYW5nLCBjb21wb25lbnQpIHtcbiAgY29uc3Qga2V5ID0gYCR7Y29tcG9uZW50fV8ke2xhbmd9YDtcbiAgaWYgKGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xuICB9XG4gIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldID0gZmV0Y2goZ2V0QXNzZXRQYXRoKGAuL2Fzc2V0cy8ke2NvbXBvbmVudH0vdDluL21lc3NhZ2VzXyR7bGFuZ30uanNvbmApKVxuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgfSlcbiAgICAuY2F0Y2goKCkgPT4gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpKTtcbiAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xufVxuZnVuY3Rpb24gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY291bGQgbm90IGZldGNoIGNvbXBvbmVudCBtZXNzYWdlIGJ1bmRsZVwiKTtcbn1cbmZ1bmN0aW9uIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5tZXNzYWdlcyA9IHtcbiAgICAuLi5jb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzLFxuICAgIC4uLmNvbXBvbmVudC5tZXNzYWdlT3ZlcnJpZGVzLFxuICB9O1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCB0aGUgbWVzc2FnZXMgdXNlZCBieSB0aGUgY29tcG9uZW50LiBJdCBzaG91bGQgYmUgYXdhaXRlZCBpbiB0aGUgYGNvbXBvbmVudFdpbGxMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldFVwTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgY29tcG9uZW50LmVmZmVjdGl2ZUxvY2FsZSk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIGNvbnN0IHsgZWwgfSA9IGNvbXBvbmVudDtcbiAgY29uc3QgdGFnID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBjb21wb25lbnROYW1lID0gdGFnLnJlcGxhY2UoXCJjYWxjaXRlLVwiLCBcIlwiKTtcbiAgcmV0dXJuIGdldE1lc3NhZ2VCdW5kbGUoZ2V0U3VwcG9ydGVkTG9jYWxlKGxhbmcsIFwidDluXCIpLCBjb21wb25lbnROYW1lKTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IG11c3QgYmUgc2V0IHVwIGZvciB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZSBpdHMgZGVmYXVsdCBtZXNzYWdlIGJ1bmRsZSBpZiB0aGUgbG9jYWxlIGNoYW5nZXMuXG4gKlxuICogSXQgY2FuIGJlIHNldCB1cCBpbiAqKmVpdGhlcioqIG9mIHRoZSBmb2xsb3dpbmcgd2F5czpcbiAqXG4gKiAxLiBjYWxsZWQgZnJvbSBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBvbkxvY2FsZUNoYW5nZWAgbWV0aG9kIG9yXG4gKiAyLiBjYWxsZWQgZnJvbSBhIHdhdGNoZXIgY29uZmlndXJlZCB0byB3YXRjaCBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBlZmZlY3RpdmVMb2NhbGVgIHByb3BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gbGFuZ1xuICovXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpIHtcbiAgY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyA9IGF3YWl0IGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKTtcbiAgbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiAqKk5vdGUqKjogdGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBjb25uZWN0TG9jYWxpemVkYCBtZXRob2QuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0TWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5vbk1lc3NhZ2VzQ2hhbmdlID0gZGVmYXVsdE9uTWVzc2FnZXNDaGFuZ2U7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSB0ZWFycyBkb3duIGludGVybmFscyBmb3IgbWVzc2FnZXMgc3VwcG9ydC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICBtZXJnZU1lc3NhZ2VzKHRoaXMpO1xufVxuXG5leHBvcnQgeyBjb25uZWN0TWVzc2FnZXMgYXMgYywgZGlzY29ubmVjdE1lc3NhZ2VzIGFzIGQsIHNldFVwTWVzc2FnZXMgYXMgcywgdXBkYXRlTWVzc2FnZXMgYXMgdSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9