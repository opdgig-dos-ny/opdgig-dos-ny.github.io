"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_date-picker-month-header_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/Heading.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/Heading.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ Heading),
/* harmony export */   c: () => (/* binding */ constrainHeadingLevel)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


function constrainHeadingLevel(level) {
  return Math.min(Math.max(Math.ceil(level), 1), 6);
}
const Heading = (props, children) => {
  const HeadingTag = props.level ? `h${props.level}` : "div";
  delete props.level;
  return (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.h)(HeadingTag, { ...props }, children);
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/component.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/component.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getIconScale)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
function getIconScale(componentScale) {
  return componentScale === "l" ? "m" : "s";
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/date-picker-month-header.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/date-picker-month-header.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ DatePickerMonthHeader),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.js */ "./node_modules/@esri/calcite-components/dist/components/date.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _Heading_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Heading.js */ "./node_modules/@esri/calcite-components/dist/components/Heading.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */









const CSS = {
  header: "header",
  month: "month",
  chevron: "chevron",
  suffix: "suffix",
  yearSuffix: "year--suffix",
  yearWrap: "year-wrap",
  textReverse: "text--reverse",
};
const ICON = {
  chevronLeft: "chevron-left",
  chevronRight: "chevron-right",
};

const datePickerMonthHeaderCss = ":host{display:block}.header{display:flex;justify-content:space-between;padding-block:0px;padding-inline:0.25rem}:host([scale=s]) .text{margin-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=s]) .chevron{block-size:2.25rem}:host([scale=m]) .text{margin-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m]) .chevron{block-size:3rem}:host([scale=l]) .text{margin-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.5rem}:host([scale=l]) .chevron{block-size:3.5rem}.chevron{margin-inline:-0.25rem;box-sizing:content-box;display:flex;flex-grow:0;cursor:pointer;align-items:center;justify-content:center;border-style:none;background-color:var(--calcite-ui-foreground-1);padding-inline:0.25rem;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;inline-size:14.2857142857%}.chevron:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.chevron:hover,.chevron:focus{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}.chevron:active{background-color:var(--calcite-ui-foreground-3)}.chevron[aria-disabled=true]{pointer-events:none;opacity:0}.text{margin-block:auto;display:flex;inline-size:100%;flex:1 1 auto;align-items:center;justify-content:center;text-align:center;line-height:1}.text--reverse{flex-direction:row-reverse}.month,.year,.suffix{margin-inline:0.25rem;margin-block:auto;display:inline-block;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-ui-text-1);font-size:inherit}.year{position:relative;inline-size:2.5rem;border-style:none;background-color:transparent;text-align:center;font-family:inherit;outline-color:transparent}.year:hover{transition-duration:100ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:outline-color;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}.year:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.year--suffix{text-align:start}.year-wrap{position:relative}.suffix{inset-block-start:0px;white-space:nowrap;text-align:start;inset-inline-start:0}:host([hidden]){display:none}[hidden]{display:none}";

const DatePickerMonthHeader = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalDatePickerSelect = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.createEvent)(this, "calciteInternalDatePickerSelect", 6);
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Increment year on UP/DOWN keys
     *
     * @param event
     */
    this.onYearKey = (event) => {
      const localizedYear = this.parseCalendarYear(event.target.value);
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          this.setYear({ localizedYear, offset: -1 });
          break;
        case "ArrowUp":
          event.preventDefault();
          this.setYear({ localizedYear, offset: 1 });
          break;
      }
    };
    this.onYearChange = (event) => {
      this.setYear({
        localizedYear: this.parseCalendarYear(event.target.value),
      });
    };
    this.onYearInput = (event) => {
      this.setYear({
        localizedYear: this.parseCalendarYear(event.target.value),
        commit: false,
      });
    };
    this.prevMonthClick = (event) => {
      this.handleArrowClick(event, this.prevMonthDate);
    };
    this.prevMonthKeydown = (event) => {
      if ((0,_key_js__WEBPACK_IMPORTED_MODULE_2__.i)(event.key)) {
        this.prevMonthClick(event);
      }
    };
    this.nextMonthClick = (event) => {
      this.handleArrowClick(event, this.nextMonthDate);
    };
    this.nextMonthKeydown = (event) => {
      if ((0,_key_js__WEBPACK_IMPORTED_MODULE_2__.i)(event.key)) {
        this.nextMonthClick(event);
      }
    };
    /*
     * Update active month on clicks of left/right arrows
     */
    this.handleArrowClick = (event, date) => {
      event.preventDefault();
      this.calciteInternalDatePickerSelect.emit(date);
    };
    this.selectedDate = undefined;
    this.activeDate = undefined;
    this.headingLevel = undefined;
    this.min = undefined;
    this.max = undefined;
    this.scale = undefined;
    this.localeData = undefined;
    this.messages = undefined;
    this.nextMonthDate = undefined;
    this.prevMonthDate = undefined;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.parentDatePickerEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.el, "calcite-date-picker");
  }
  connectedCallback() {
    this.setNextPrevMonthDates();
  }
  render() {
    return (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", { class: CSS.header }, this.renderContent());
  }
  renderContent() {
    const { messages, localeData, activeDate } = this;
    if (!activeDate || !localeData) {
      return null;
    }
    if (this.parentDatePickerEl) {
      const { numberingSystem, lang: locale } = this.parentDatePickerEl;
      _locale_js__WEBPACK_IMPORTED_MODULE_3__.n.numberFormatOptions = {
        useGrouping: false,
        ...(numberingSystem && { numberingSystem }),
        ...(locale && { locale }),
      };
    }
    const activeMonth = activeDate.getMonth();
    const { months, unitOrder } = localeData;
    const localizedMonth = (months.wide || months.narrow || months.abbreviated)[activeMonth];
    const localizedYear = this.formatCalendarYear(activeDate.getFullYear());
    const order = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.j)(unitOrder);
    const reverse = order.indexOf("y") < order.indexOf("m");
    const suffix = localeData.year?.suffix;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("a", { "aria-disabled": `${this.prevMonthDate.getMonth() === activeMonth}`, "aria-label": messages.prevMonth, class: CSS.chevron, href: "#", onClick: this.prevMonthClick, onKeyDown: this.prevMonthKeydown, role: "button", tabindex: this.prevMonthDate.getMonth() === activeMonth ? -1 : 0 }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { "flip-rtl": true, icon: ICON.chevronLeft, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_5__.g)(this.scale) })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", { class: { text: true, [CSS.textReverse]: reverse } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)(_Heading_js__WEBPACK_IMPORTED_MODULE_4__.H, { class: CSS.month, level: this.headingLevel }, localizedMonth), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { class: CSS.yearWrap }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("input", { "aria-label": messages.year, class: {
        year: true,
        [CSS.yearSuffix]: !!suffix,
      }, inputmode: "numeric", maxlength: "4", minlength: "1", onChange: this.onYearChange, onInput: this.onYearInput, onKeyDown: this.onYearKey, pattern: "\\d*", type: "text", value: localizedYear,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.yearInput = el) }), suffix && (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { class: CSS.suffix }, suffix))), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("a", { "aria-disabled": `${this.nextMonthDate.getMonth() === activeMonth}`, "aria-label": messages.nextMonth, class: CSS.chevron, href: "#", onClick: this.nextMonthClick, onKeyDown: this.nextMonthKeydown, role: "button", tabindex: this.nextMonthDate.getMonth() === activeMonth ? -1 : 0 }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { "flip-rtl": true, icon: ICON.chevronRight, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_5__.g)(this.scale) }))));
  }
  setNextPrevMonthDates() {
    if (!this.activeDate) {
      return;
    }
    this.nextMonthDate = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.f)((0,_date_js__WEBPACK_IMPORTED_MODULE_0__.n)(this.activeDate), this.min, this.max);
    this.prevMonthDate = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.f)((0,_date_js__WEBPACK_IMPORTED_MODULE_0__.p)(this.activeDate), this.min, this.max);
  }
  formatCalendarYear(year) {
    return _locale_js__WEBPACK_IMPORTED_MODULE_3__.n.localize(`${(0,_date_js__WEBPACK_IMPORTED_MODULE_0__.k)(year, this.localeData)}`);
  }
  parseCalendarYear(year) {
    return _locale_js__WEBPACK_IMPORTED_MODULE_3__.n.localize(`${(0,_date_js__WEBPACK_IMPORTED_MODULE_0__.l)(Number(_locale_js__WEBPACK_IMPORTED_MODULE_3__.n.delocalize(year)), this.localeData)}`);
  }
  getInRangeDate({ localizedYear, offset = 0, }) {
    const { min, max, activeDate } = this;
    const parsedYear = Number(_locale_js__WEBPACK_IMPORTED_MODULE_3__.n.delocalize(localizedYear));
    const length = parsedYear.toString().length;
    const year = isNaN(parsedYear) ? false : parsedYear + offset;
    const inRange = year && (!min || min.getFullYear() <= year) && (!max || max.getFullYear() >= year);
    // if you've supplied a year and it's in range
    if (year && inRange && length === localizedYear.length) {
      const nextDate = new Date(activeDate);
      nextDate.setFullYear(year);
      return (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.f)(nextDate, min, max);
    }
  }
  /**
   * Parse localized year string from input,
   * set to active if in range
   *
   * @param root0
   * @param root0.localizedYear
   * @param root0.commit
   * @param root0.offset
   */
  setYear({ localizedYear, commit = true, offset = 0, }) {
    const { yearInput, activeDate } = this;
    const inRangeDate = this.getInRangeDate({ localizedYear, offset });
    // if you've supplied a year and it's in range, update active date
    if (inRangeDate) {
      this.calciteInternalDatePickerSelect.emit(inRangeDate);
    }
    if (commit) {
      yearInput.value = this.formatCalendarYear((inRangeDate || activeDate).getFullYear());
    }
  }
  get el() { return this; }
  static get watchers() { return {
    "min": ["setNextPrevMonthDates"],
    "max": ["setNextPrevMonthDates"],
    "activeDate": ["setNextPrevMonthDates"]
  }; }
  static get style() { return datePickerMonthHeaderCss; }
}, [1, "calcite-date-picker-month-header", {
    "selectedDate": [16],
    "activeDate": [16],
    "headingLevel": [2, "heading-level"],
    "min": [16],
    "max": [16],
    "scale": [513],
    "localeData": [16],
    "messages": [1040],
    "nextMonthDate": [32],
    "prevMonthDate": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-date-picker-month-header", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-date-picker-month-header":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DatePickerMonthHeader);
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




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/icon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/icon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ Icon),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */




const CSS = {
  icon: "icon",
  flipRtl: "flip-rtl",
};

/**
 * Icon data cache.
 * Exported for testing purposes.
 *
 * @private
 */
const iconCache = {};
/**
 * Icon request cache.
 * Exported for testing purposes.
 *
 * @private
 */
const requestCache = {};
const scaleToPx = {
  s: 16,
  m: 24,
  l: 32,
};
async function fetchIcon({ icon, scale }) {
  const size = scaleToPx[scale];
  const name = normalizeIconName(icon);
  const filled = name.charAt(name.length - 1) === "F";
  const iconName = filled ? name.substring(0, name.length - 1) : name;
  const id = `${iconName}${size}${filled ? "F" : ""}`;
  if (iconCache[id]) {
    return iconCache[id];
  }
  if (!requestCache[id]) {
    requestCache[id] = fetch((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.getAssetPath)(`./assets/icon/${id}.json`))
      .then((resp) => resp.json())
      .catch(() => {
      console.error(`"${id}" is not a valid calcite-ui-icon name`);
      return "";
    });
  }
  const path = await requestCache[id];
  iconCache[id] = path;
  return path;
}
/**
 * Normalize the icon name to match the path data module exports.
 * Exported for testing purposes.
 *
 * @param name – an icon name that can be either kebab or camel-cased
 * @private
 */
function normalizeIconName(name) {
  const numberLeadingName = !isNaN(Number(name.charAt(0)));
  const parts = name.split("-");
  const kebabCased = parts.length > 0;
  if (kebabCased) {
    const firstNonDigitInPartPattern = /[a-z]/i;
    name = parts
      .map((part, partIndex) => {
      return part.replace(firstNonDigitInPartPattern, function replacer(match, offset) {
        const isFirstCharInName = partIndex === 0 && offset === 0;
        if (isFirstCharInName) {
          return match;
        }
        return match.toUpperCase();
      });
    })
      .join("");
  }
  return numberLeadingName ? `i${name}` : name;
}

const iconCss = ":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}";

const Icon = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.icon = null;
    this.flipRtl = false;
    this.scale = "m";
    this.textLabel = undefined;
    this.pathData = undefined;
    this.visible = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.waitUntilVisible(() => {
      this.visible = true;
      this.loadIconPathData();
    });
  }
  disconnectedCallback() {
    this.intersectionObserver?.disconnect();
    this.intersectionObserver = null;
  }
  async componentWillLoad() {
    this.loadIconPathData();
  }
  render() {
    const { el, flipRtl, pathData, scale, textLabel } = this;
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(el);
    const size = scaleToPx[scale];
    const semantic = !!textLabel;
    const paths = [].concat(pathData || "");
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Host, { "aria-hidden": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(!semantic), "aria-label": semantic ? textLabel : null, role: semantic ? "img" : null }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("svg", { "aria-hidden": "true", class: {
        [CSS.flipRtl]: dir === "rtl" && flipRtl,
        svg: true,
      }, fill: "currentColor", height: "100%", viewBox: `0 0 ${size} ${size}`, width: "100%", xmlns: "http://www.w3.org/2000/svg" }, paths.map((path) => typeof path === "string" ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { d: path })) : ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { d: path.d, opacity: "opacity" in path ? path.opacity : 1 }))))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  async loadIconPathData() {
    const { icon, scale, visible } = this;
    if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Build.isBrowser || !icon || !visible) {
      return;
    }
    const pathData = await fetchIcon({ icon, scale });
    // While the fetchIcon method is awaiting response, the icon requested can change. This check is to verify the response received belongs to the current icon.
    if (icon !== this.icon) {
      return;
    }
    this.pathData = pathData;
  }
  waitUntilVisible(callback) {
    this.intersectionObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_1__.c)("intersection", (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.intersectionObserver.disconnect();
          this.intersectionObserver = null;
          callback();
        }
      });
    }, { rootMargin: "50px" });
    if (!this.intersectionObserver) {
      callback();
      return;
    }
    this.intersectionObserver.observe(this.el);
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "icon": ["loadIconPathData"],
    "scale": ["loadIconPathData"]
  }; }
  static get style() { return iconCss; }
}, [1, "calcite-icon", {
    "icon": [513],
    "flipRtl": [516, "flip-rtl"],
    "scale": [513],
    "textLabel": [1, "text-label"],
    "pathData": [32],
    "visible": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Icon);
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMTI2Y2Y2MzllMWZmNWYxZjFlOTk2NDQ5OTU2YzQ5NDYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMyRDs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsWUFBWTtBQUNuRDtBQUNBLFNBQVMseUVBQUMsZUFBZSxVQUFVO0FBQ25DOztBQUVvRDs7Ozs7Ozs7Ozs7Ozs7O0FDaEJwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUg7QUFDNEI7QUFDN0U7QUFDbEI7QUFDUztBQUNiO0FBQ087QUFDSTs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLGNBQWMsUUFBUSxhQUFhLDhCQUE4QixrQkFBa0IsdUJBQXVCLHVCQUF1QixvQkFBb0Isc0NBQXNDLGlCQUFpQiwwQkFBMEIsbUJBQW1CLHVCQUF1QixxQkFBcUIscUNBQXFDLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLHVCQUF1QixrQkFBa0IscUNBQXFDLG1CQUFtQiwwQkFBMEIsa0JBQWtCLFNBQVMsdUJBQXVCLHVCQUF1QixhQUFhLFlBQVksZUFBZSxtQkFBbUIsdUJBQXVCLGtCQUFrQixnREFBZ0QsdUJBQXVCLCtCQUErQiw4QkFBOEIsbUJBQW1CLDBCQUEwQiw2RkFBNkYsMkJBQTJCLGVBQWUseUVBQXlFLHFQQUFxUCw4QkFBOEIsZ0RBQWdELDhCQUE4QiwrQkFBK0IsZ0JBQWdCLGdEQUFnRCw2QkFBNkIsb0JBQW9CLFVBQVUsTUFBTSxrQkFBa0IsYUFBYSxpQkFBaUIsY0FBYyxtQkFBbUIsdUJBQXVCLGtCQUFrQixjQUFjLGVBQWUsMkJBQTJCLHFCQUFxQixzQkFBc0Isa0JBQWtCLHFCQUFxQixnREFBZ0QsOENBQThDLGlCQUFpQiwrQkFBK0Isa0JBQWtCLE1BQU0sa0JBQWtCLG1CQUFtQixrQkFBa0IsNkJBQTZCLGtCQUFrQixvQkFBb0IsMEJBQTBCLFlBQVksMEJBQTBCLHdEQUF3RCxrQ0FBa0MsNkNBQTZDLG1CQUFtQixZQUFZLHlFQUF5RSxvUEFBb1AsY0FBYyxpQkFBaUIsV0FBVyxrQkFBa0IsUUFBUSxzQkFBc0IsbUJBQW1CLGlCQUFpQixxQkFBcUIsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUV2MkYsNENBQTRDLDBGQUFrQixlQUFlLCtFQUFXO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1GQUFXO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQkFBMkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBCQUEwQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwwQ0FBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMENBQWU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDBDQUFpQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx5RUFBQyxVQUFVLG1CQUFtQjtBQUN6QztBQUNBO0FBQ0EsWUFBWSxtQ0FBbUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdDQUFnQztBQUM5QyxNQUFNLHlDQUFxQjtBQUMzQjtBQUNBLGlDQUFpQyxpQkFBaUI7QUFDbEQsd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBLGtCQUFrQiwyQ0FBUTtBQUMxQjtBQUNBO0FBQ0EsWUFBWSx5RUFBQyxDQUFDLDRFQUFRLFFBQVEseUVBQUMsUUFBUSxvQkFBb0IsOENBQThDLHNOQUFzTixFQUFFLHlFQUFDLG1CQUFtQixpREFBaUQsZ0RBQVksY0FBYyxJQUFJLHlFQUFDLFVBQVUsU0FBUywwQ0FBMEMsRUFBRSx5RUFBQyxDQUFDLDBDQUFPLElBQUksNENBQTRDLG1CQUFtQix5RUFBQyxXQUFXLHFCQUFxQixFQUFFLHlFQUFDLFlBQVk7QUFDaG1CO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSwwQ0FBMEMsYUFBYSx5RUFBQyxXQUFXLG1CQUFtQixhQUFhLHlFQUFDLFFBQVEsb0JBQW9CLDhDQUE4QyxzTkFBc04sRUFBRSx5RUFBQyxtQkFBbUIsa0RBQWtELGdEQUFZLGNBQWM7QUFDdGU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQ0FBYSxDQUFDLDJDQUFTO0FBQ2hELHlCQUF5QiwyQ0FBYSxDQUFDLDJDQUFTO0FBQ2hEO0FBQ0E7QUFDQSxXQUFXLHlDQUFxQixhQUFhLDJDQUFrQix3QkFBd0I7QUFDdkY7QUFDQTtBQUNBLFdBQVcseUNBQXFCLGFBQWEsMkNBQWlCLFFBQVEseUNBQXFCLHFDQUFxQztBQUNoSTtBQUNBLG1CQUFtQiw0QkFBNEI7QUFDL0MsWUFBWSx1QkFBdUI7QUFDbkMsOEJBQThCLHlDQUFxQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMkNBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkNBQTJDO0FBQ3ZELFlBQVksd0JBQXdCO0FBQ3BDLDhDQUE4Qyx1QkFBdUI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJDQUFxQjtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRWdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdE9oRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VIO0FBQ3JEO0FBQ2I7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUyxFQUFFLEtBQUssRUFBRSxrQkFBa0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsb0ZBQVksa0JBQWtCLEdBQUc7QUFDOUQ7QUFDQTtBQUNBLHdCQUF3QixHQUFHO0FBQzNCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxpQ0FBaUMsS0FBSztBQUN0Qzs7QUFFQSx1QkFBdUIsb0JBQW9CLG1DQUFtQyxpQkFBaUIsaUJBQWlCLGdCQUFnQixxQkFBcUIsb0JBQW9CLGlCQUFpQixpQkFBaUIsZ0JBQWdCLHFCQUFxQixvQkFBb0IsaUJBQWlCLGlCQUFpQixnQkFBZ0IscUJBQXFCLG9CQUFvQixVQUFVLHFCQUFxQixLQUFLLGNBQWMsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUVwYywyQkFBMkIsMEZBQWtCLGVBQWUsK0VBQVc7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBDQUEwQztBQUN0RCxnQkFBZ0IsMENBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5RUFBQyxDQUFDLHdFQUFJLElBQUksZUFBZSwwQ0FBYSx1RkFBdUYsRUFBRSx5RUFBQyxVQUFVO0FBQ3RKO0FBQ0E7QUFDQSxPQUFPLHdEQUF3RCxNQUFNLEVBQUUsS0FBSyx1REFBdUQsa0RBQWtELHlFQUFDLFdBQVcsU0FBUyxNQUFNLHlFQUFDLFdBQVcsMERBQTBEO0FBQ3RSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1QkFBdUI7QUFDbkMsU0FBUyx5RUFBSztBQUNkO0FBQ0E7QUFDQSx1Q0FBdUMsYUFBYTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnREFBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSyxJQUFJLG9CQUFvQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsYUFBYTtBQUNiLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFK0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvSGVhZGluZy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9kYXRlLXBpY2tlci1tb250aC1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2ljb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgaCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuZnVuY3Rpb24gY29uc3RyYWluSGVhZGluZ0xldmVsKGxldmVsKSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChNYXRoLmNlaWwobGV2ZWwpLCAxKSwgNik7XG59XG5jb25zdCBIZWFkaW5nID0gKHByb3BzLCBjaGlsZHJlbikgPT4ge1xuICBjb25zdCBIZWFkaW5nVGFnID0gcHJvcHMubGV2ZWwgPyBgaCR7cHJvcHMubGV2ZWx9YCA6IFwiZGl2XCI7XG4gIGRlbGV0ZSBwcm9wcy5sZXZlbDtcbiAgcmV0dXJuIGgoSGVhZGluZ1RhZywgeyAuLi5wcm9wcyB9LCBjaGlsZHJlbik7XG59O1xuXG5leHBvcnQgeyBIZWFkaW5nIGFzIEgsIGNvbnN0cmFpbkhlYWRpbmdMZXZlbCBhcyBjIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5mdW5jdGlvbiBnZXRJY29uU2NhbGUoY29tcG9uZW50U2NhbGUpIHtcbiAgcmV0dXJuIGNvbXBvbmVudFNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCI7XG59XG5cbmV4cG9ydCB7IGdldEljb25TY2FsZSBhcyBnIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgRnJhZ21lbnQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBqIGFzIGdldE9yZGVyLCBmIGFzIGRhdGVGcm9tUmFuZ2UsIG4gYXMgbmV4dE1vbnRoLCBwIGFzIHByZXZNb250aCwgayBhcyBmb3JtYXRDYWxlbmRhclllYXIsIGwgYXMgcGFyc2VDYWxlbmRhclllYXIgfSBmcm9tICcuL2RhdGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzQWN0aXZhdGlvbktleSB9IGZyb20gJy4va2V5LmpzJztcbmltcG9ydCB7IG4gYXMgbnVtYmVyU3RyaW5nRm9ybWF0dGVyIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuaW1wb3J0IHsgSCBhcyBIZWFkaW5nIH0gZnJvbSAnLi9IZWFkaW5nLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0SWNvblNjYWxlIH0gZnJvbSAnLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDEgfSBmcm9tICcuL2ljb24uanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGhlYWRlcjogXCJoZWFkZXJcIixcbiAgbW9udGg6IFwibW9udGhcIixcbiAgY2hldnJvbjogXCJjaGV2cm9uXCIsXG4gIHN1ZmZpeDogXCJzdWZmaXhcIixcbiAgeWVhclN1ZmZpeDogXCJ5ZWFyLS1zdWZmaXhcIixcbiAgeWVhcldyYXA6IFwieWVhci13cmFwXCIsXG4gIHRleHRSZXZlcnNlOiBcInRleHQtLXJldmVyc2VcIixcbn07XG5jb25zdCBJQ09OID0ge1xuICBjaGV2cm9uTGVmdDogXCJjaGV2cm9uLWxlZnRcIixcbiAgY2hldnJvblJpZ2h0OiBcImNoZXZyb24tcmlnaHRcIixcbn07XG5cbmNvbnN0IGRhdGVQaWNrZXJNb250aEhlYWRlckNzcyA9IFwiOmhvc3R7ZGlzcGxheTpibG9ja30uaGVhZGVye2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtwYWRkaW5nLWJsb2NrOjBweDtwYWRkaW5nLWlubGluZTowLjI1cmVtfTpob3N0KFtzY2FsZT1zXSkgLnRleHR7bWFyZ2luLWJsb2NrOjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPXNdKSAuY2hldnJvbntibG9jay1zaXplOjIuMjVyZW19Omhvc3QoW3NjYWxlPW1dKSAudGV4dHttYXJnaW4tYmxvY2s6MC43NXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbX06aG9zdChbc2NhbGU9bV0pIC5jaGV2cm9ue2Jsb2NrLXNpemU6M3JlbX06aG9zdChbc2NhbGU9bF0pIC50ZXh0e21hcmdpbi1ibG9jazoxcmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0xKTtsaW5lLWhlaWdodDoxLjVyZW19Omhvc3QoW3NjYWxlPWxdKSAuY2hldnJvbntibG9jay1zaXplOjMuNXJlbX0uY2hldnJvbnttYXJnaW4taW5saW5lOi0wLjI1cmVtO2JveC1zaXppbmc6Y29udGVudC1ib3g7ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzowO2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JvcmRlci1zdHlsZTpub25lO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO3BhZGRpbmctaW5saW5lOjAuMjVyZW07Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweDtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO2lubGluZS1zaXplOjE0LjI4NTcxNDI4NTclfS5jaGV2cm9uOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX0uY2hldnJvbjpob3ZlciwuY2hldnJvbjpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTtmaWxsOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmNoZXZyb246YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfS5jaGV2cm9uW2FyaWEtZGlzYWJsZWQ9dHJ1ZV17cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjB9LnRleHR7bWFyZ2luLWJsb2NrOmF1dG87ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCU7ZmxleDoxIDEgYXV0bzthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDoxfS50ZXh0LS1yZXZlcnNle2ZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlfS5tb250aCwueWVhciwuc3VmZml4e21hcmdpbi1pbmxpbmU6MC4yNXJlbTttYXJnaW4tYmxvY2s6YXV0bztkaXNwbGF5OmlubGluZS1ibG9jaztiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7bGluZS1oZWlnaHQ6MS4yNTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7Zm9udC1zaXplOmluaGVyaXR9LnllYXJ7cG9zaXRpb246cmVsYXRpdmU7aW5saW5lLXNpemU6Mi41cmVtO2JvcmRlci1zdHlsZTpub25lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1mYW1pbHk6aW5oZXJpdDtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fS55ZWFyOmhvdmVye3RyYW5zaXRpb24tZHVyYXRpb246MTAwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2l0aW9uLXByb3BlcnR5Om91dGxpbmUtY29sb3I7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMik7b3V0bGluZS1vZmZzZXQ6MnB4fS55ZWFyOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIDJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS55ZWFyLS1zdWZmaXh7dGV4dC1hbGlnbjpzdGFydH0ueWVhci13cmFwe3Bvc2l0aW9uOnJlbGF0aXZlfS5zdWZmaXh7aW5zZXQtYmxvY2stc3RhcnQ6MHB4O3doaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LWFsaWduOnN0YXJ0O2luc2V0LWlubGluZS1zdGFydDowfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBEYXRlUGlja2VyTW9udGhIZWFkZXIgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlclNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlclNlbGVjdFwiLCA2KTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLyoqXG4gICAgICogSW5jcmVtZW50IHllYXIgb24gVVAvRE9XTiBrZXlzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICB0aGlzLm9uWWVhcktleSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgbG9jYWxpemVkWWVhciA9IHRoaXMucGFyc2VDYWxlbmRhclllYXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuc2V0WWVhcih7IGxvY2FsaXplZFllYXIsIG9mZnNldDogLTEgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnNldFllYXIoeyBsb2NhbGl6ZWRZZWFyLCBvZmZzZXQ6IDEgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9uWWVhckNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5zZXRZZWFyKHtcbiAgICAgICAgbG9jYWxpemVkWWVhcjogdGhpcy5wYXJzZUNhbGVuZGFyWWVhcihldmVudC50YXJnZXQudmFsdWUpLFxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLm9uWWVhcklucHV0ID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnNldFllYXIoe1xuICAgICAgICBsb2NhbGl6ZWRZZWFyOiB0aGlzLnBhcnNlQ2FsZW5kYXJZZWFyKGV2ZW50LnRhcmdldC52YWx1ZSksXG4gICAgICAgIGNvbW1pdDogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMucHJldk1vbnRoQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlQXJyb3dDbGljayhldmVudCwgdGhpcy5wcmV2TW9udGhEYXRlKTtcbiAgICB9O1xuICAgIHRoaXMucHJldk1vbnRoS2V5ZG93biA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGlzQWN0aXZhdGlvbktleShldmVudC5rZXkpKSB7XG4gICAgICAgIHRoaXMucHJldk1vbnRoQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5uZXh0TW9udGhDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVBcnJvd0NsaWNrKGV2ZW50LCB0aGlzLm5leHRNb250aERhdGUpO1xuICAgIH07XG4gICAgdGhpcy5uZXh0TW9udGhLZXlkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoaXNBY3RpdmF0aW9uS2V5KGV2ZW50LmtleSkpIHtcbiAgICAgICAgdGhpcy5uZXh0TW9udGhDbGljayhldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvKlxuICAgICAqIFVwZGF0ZSBhY3RpdmUgbW9udGggb24gY2xpY2tzIG9mIGxlZnQvcmlnaHQgYXJyb3dzXG4gICAgICovXG4gICAgdGhpcy5oYW5kbGVBcnJvd0NsaWNrID0gKGV2ZW50LCBkYXRlKSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyU2VsZWN0LmVtaXQoZGF0ZSk7XG4gICAgfTtcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oZWFkaW5nTGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW4gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tYXggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvY2FsZURhdGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5leHRNb250aERhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wcmV2TW9udGhEYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMucGFyZW50RGF0ZVBpY2tlckVsID0gY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5KHRoaXMuZWwsIFwiY2FsY2l0ZS1kYXRlLXBpY2tlclwiKTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnNldE5leHRQcmV2TW9udGhEYXRlcygpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuaGVhZGVyIH0sIHRoaXMucmVuZGVyQ29udGVudCgpKTtcbiAgfVxuICByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMsIGxvY2FsZURhdGEsIGFjdGl2ZURhdGUgfSA9IHRoaXM7XG4gICAgaWYgKCFhY3RpdmVEYXRlIHx8ICFsb2NhbGVEYXRhKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFyZW50RGF0ZVBpY2tlckVsKSB7XG4gICAgICBjb25zdCB7IG51bWJlcmluZ1N5c3RlbSwgbGFuZzogbG9jYWxlIH0gPSB0aGlzLnBhcmVudERhdGVQaWNrZXJFbDtcbiAgICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgICB1c2VHcm91cGluZzogZmFsc2UsXG4gICAgICAgIC4uLihudW1iZXJpbmdTeXN0ZW0gJiYgeyBudW1iZXJpbmdTeXN0ZW0gfSksXG4gICAgICAgIC4uLihsb2NhbGUgJiYgeyBsb2NhbGUgfSksXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBhY3RpdmVNb250aCA9IGFjdGl2ZURhdGUuZ2V0TW9udGgoKTtcbiAgICBjb25zdCB7IG1vbnRocywgdW5pdE9yZGVyIH0gPSBsb2NhbGVEYXRhO1xuICAgIGNvbnN0IGxvY2FsaXplZE1vbnRoID0gKG1vbnRocy53aWRlIHx8IG1vbnRocy5uYXJyb3cgfHwgbW9udGhzLmFiYnJldmlhdGVkKVthY3RpdmVNb250aF07XG4gICAgY29uc3QgbG9jYWxpemVkWWVhciA9IHRoaXMuZm9ybWF0Q2FsZW5kYXJZZWFyKGFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgY29uc3Qgb3JkZXIgPSBnZXRPcmRlcih1bml0T3JkZXIpO1xuICAgIGNvbnN0IHJldmVyc2UgPSBvcmRlci5pbmRleE9mKFwieVwiKSA8IG9yZGVyLmluZGV4T2YoXCJtXCIpO1xuICAgIGNvbnN0IHN1ZmZpeCA9IGxvY2FsZURhdGEueWVhcj8uc3VmZml4O1xuICAgIHJldHVybiAoaChGcmFnbWVudCwgbnVsbCwgaChcImFcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogYCR7dGhpcy5wcmV2TW9udGhEYXRlLmdldE1vbnRoKCkgPT09IGFjdGl2ZU1vbnRofWAsIFwiYXJpYS1sYWJlbFwiOiBtZXNzYWdlcy5wcmV2TW9udGgsIGNsYXNzOiBDU1MuY2hldnJvbiwgaHJlZjogXCIjXCIsIG9uQ2xpY2s6IHRoaXMucHJldk1vbnRoQ2xpY2ssIG9uS2V5RG93bjogdGhpcy5wcmV2TW9udGhLZXlkb3duLCByb2xlOiBcImJ1dHRvblwiLCB0YWJpbmRleDogdGhpcy5wcmV2TW9udGhEYXRlLmdldE1vbnRoKCkgPT09IGFjdGl2ZU1vbnRoID8gLTEgOiAwIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBcImZsaXAtcnRsXCI6IHRydWUsIGljb246IElDT04uY2hldnJvbkxlZnQsIHNjYWxlOiBnZXRJY29uU2NhbGUodGhpcy5zY2FsZSkgfSkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IHsgdGV4dDogdHJ1ZSwgW0NTUy50ZXh0UmV2ZXJzZV06IHJldmVyc2UgfSB9LCBoKEhlYWRpbmcsIHsgY2xhc3M6IENTUy5tb250aCwgbGV2ZWw6IHRoaXMuaGVhZGluZ0xldmVsIH0sIGxvY2FsaXplZE1vbnRoKSwgaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLnllYXJXcmFwIH0sIGgoXCJpbnB1dFwiLCB7IFwiYXJpYS1sYWJlbFwiOiBtZXNzYWdlcy55ZWFyLCBjbGFzczoge1xuICAgICAgICB5ZWFyOiB0cnVlLFxuICAgICAgICBbQ1NTLnllYXJTdWZmaXhdOiAhIXN1ZmZpeCxcbiAgICAgIH0sIGlucHV0bW9kZTogXCJudW1lcmljXCIsIG1heGxlbmd0aDogXCI0XCIsIG1pbmxlbmd0aDogXCIxXCIsIG9uQ2hhbmdlOiB0aGlzLm9uWWVhckNoYW5nZSwgb25JbnB1dDogdGhpcy5vblllYXJJbnB1dCwgb25LZXlEb3duOiB0aGlzLm9uWWVhcktleSwgcGF0dGVybjogXCJcXFxcZCpcIiwgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiBsb2NhbGl6ZWRZZWFyLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy55ZWFySW5wdXQgPSBlbCkgfSksIHN1ZmZpeCAmJiBoKFwic3BhblwiLCB7IGNsYXNzOiBDU1Muc3VmZml4IH0sIHN1ZmZpeCkpKSwgaChcImFcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogYCR7dGhpcy5uZXh0TW9udGhEYXRlLmdldE1vbnRoKCkgPT09IGFjdGl2ZU1vbnRofWAsIFwiYXJpYS1sYWJlbFwiOiBtZXNzYWdlcy5uZXh0TW9udGgsIGNsYXNzOiBDU1MuY2hldnJvbiwgaHJlZjogXCIjXCIsIG9uQ2xpY2s6IHRoaXMubmV4dE1vbnRoQ2xpY2ssIG9uS2V5RG93bjogdGhpcy5uZXh0TW9udGhLZXlkb3duLCByb2xlOiBcImJ1dHRvblwiLCB0YWJpbmRleDogdGhpcy5uZXh0TW9udGhEYXRlLmdldE1vbnRoKCkgPT09IGFjdGl2ZU1vbnRoID8gLTEgOiAwIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBcImZsaXAtcnRsXCI6IHRydWUsIGljb246IElDT04uY2hldnJvblJpZ2h0LCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKSkpO1xuICB9XG4gIHNldE5leHRQcmV2TW9udGhEYXRlcygpIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlRGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5leHRNb250aERhdGUgPSBkYXRlRnJvbVJhbmdlKG5leHRNb250aCh0aGlzLmFjdGl2ZURhdGUpLCB0aGlzLm1pbiwgdGhpcy5tYXgpO1xuICAgIHRoaXMucHJldk1vbnRoRGF0ZSA9IGRhdGVGcm9tUmFuZ2UocHJldk1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksIHRoaXMubWluLCB0aGlzLm1heCk7XG4gIH1cbiAgZm9ybWF0Q2FsZW5kYXJZZWFyKHllYXIpIHtcbiAgICByZXR1cm4gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmxvY2FsaXplKGAke2Zvcm1hdENhbGVuZGFyWWVhcih5ZWFyLCB0aGlzLmxvY2FsZURhdGEpfWApO1xuICB9XG4gIHBhcnNlQ2FsZW5kYXJZZWFyKHllYXIpIHtcbiAgICByZXR1cm4gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmxvY2FsaXplKGAke3BhcnNlQ2FsZW5kYXJZZWFyKE51bWJlcihudW1iZXJTdHJpbmdGb3JtYXR0ZXIuZGVsb2NhbGl6ZSh5ZWFyKSksIHRoaXMubG9jYWxlRGF0YSl9YCk7XG4gIH1cbiAgZ2V0SW5SYW5nZURhdGUoeyBsb2NhbGl6ZWRZZWFyLCBvZmZzZXQgPSAwLCB9KSB7XG4gICAgY29uc3QgeyBtaW4sIG1heCwgYWN0aXZlRGF0ZSB9ID0gdGhpcztcbiAgICBjb25zdCBwYXJzZWRZZWFyID0gTnVtYmVyKG51bWJlclN0cmluZ0Zvcm1hdHRlci5kZWxvY2FsaXplKGxvY2FsaXplZFllYXIpKTtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJzZWRZZWFyLnRvU3RyaW5nKCkubGVuZ3RoO1xuICAgIGNvbnN0IHllYXIgPSBpc05hTihwYXJzZWRZZWFyKSA/IGZhbHNlIDogcGFyc2VkWWVhciArIG9mZnNldDtcbiAgICBjb25zdCBpblJhbmdlID0geWVhciAmJiAoIW1pbiB8fCBtaW4uZ2V0RnVsbFllYXIoKSA8PSB5ZWFyKSAmJiAoIW1heCB8fCBtYXguZ2V0RnVsbFllYXIoKSA+PSB5ZWFyKTtcbiAgICAvLyBpZiB5b3UndmUgc3VwcGxpZWQgYSB5ZWFyIGFuZCBpdCdzIGluIHJhbmdlXG4gICAgaWYgKHllYXIgJiYgaW5SYW5nZSAmJiBsZW5ndGggPT09IGxvY2FsaXplZFllYXIubGVuZ3RoKSB7XG4gICAgICBjb25zdCBuZXh0RGF0ZSA9IG5ldyBEYXRlKGFjdGl2ZURhdGUpO1xuICAgICAgbmV4dERhdGUuc2V0RnVsbFllYXIoeWVhcik7XG4gICAgICByZXR1cm4gZGF0ZUZyb21SYW5nZShuZXh0RGF0ZSwgbWluLCBtYXgpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUGFyc2UgbG9jYWxpemVkIHllYXIgc3RyaW5nIGZyb20gaW5wdXQsXG4gICAqIHNldCB0byBhY3RpdmUgaWYgaW4gcmFuZ2VcbiAgICpcbiAgICogQHBhcmFtIHJvb3QwXG4gICAqIEBwYXJhbSByb290MC5sb2NhbGl6ZWRZZWFyXG4gICAqIEBwYXJhbSByb290MC5jb21taXRcbiAgICogQHBhcmFtIHJvb3QwLm9mZnNldFxuICAgKi9cbiAgc2V0WWVhcih7IGxvY2FsaXplZFllYXIsIGNvbW1pdCA9IHRydWUsIG9mZnNldCA9IDAsIH0pIHtcbiAgICBjb25zdCB7IHllYXJJbnB1dCwgYWN0aXZlRGF0ZSB9ID0gdGhpcztcbiAgICBjb25zdCBpblJhbmdlRGF0ZSA9IHRoaXMuZ2V0SW5SYW5nZURhdGUoeyBsb2NhbGl6ZWRZZWFyLCBvZmZzZXQgfSk7XG4gICAgLy8gaWYgeW91J3ZlIHN1cHBsaWVkIGEgeWVhciBhbmQgaXQncyBpbiByYW5nZSwgdXBkYXRlIGFjdGl2ZSBkYXRlXG4gICAgaWYgKGluUmFuZ2VEYXRlKSB7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJTZWxlY3QuZW1pdChpblJhbmdlRGF0ZSk7XG4gICAgfVxuICAgIGlmIChjb21taXQpIHtcbiAgICAgIHllYXJJbnB1dC52YWx1ZSA9IHRoaXMuZm9ybWF0Q2FsZW5kYXJZZWFyKChpblJhbmdlRGF0ZSB8fCBhY3RpdmVEYXRlKS5nZXRGdWxsWWVhcigpKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibWluXCI6IFtcInNldE5leHRQcmV2TW9udGhEYXRlc1wiXSxcbiAgICBcIm1heFwiOiBbXCJzZXROZXh0UHJldk1vbnRoRGF0ZXNcIl0sXG4gICAgXCJhY3RpdmVEYXRlXCI6IFtcInNldE5leHRQcmV2TW9udGhEYXRlc1wiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBkYXRlUGlja2VyTW9udGhIZWFkZXJDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtZGF0ZS1waWNrZXItbW9udGgtaGVhZGVyXCIsIHtcbiAgICBcInNlbGVjdGVkRGF0ZVwiOiBbMTZdLFxuICAgIFwiYWN0aXZlRGF0ZVwiOiBbMTZdLFxuICAgIFwiaGVhZGluZ0xldmVsXCI6IFsyLCBcImhlYWRpbmctbGV2ZWxcIl0sXG4gICAgXCJtaW5cIjogWzE2XSxcbiAgICBcIm1heFwiOiBbMTZdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJsb2NhbGVEYXRhXCI6IFsxNl0sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJuZXh0TW9udGhEYXRlXCI6IFszMl0sXG4gICAgXCJwcmV2TW9udGhEYXRlXCI6IFszMl1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1kYXRlLXBpY2tlci1tb250aC1oZWFkZXJcIiwgXCJjYWxjaXRlLWljb25cIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtZGF0ZS1waWNrZXItbW9udGgtaGVhZGVyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgRGF0ZVBpY2tlck1vbnRoSGVhZGVyKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWljb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IERhdGVQaWNrZXJNb250aEhlYWRlciBhcyBELCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGdldEFzc2V0UGF0aCwgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgaCwgSG9zdCwgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldEVsZW1lbnREaXIsIHQgYXMgdG9BcmlhQm9vbGVhbiB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgaWNvbjogXCJpY29uXCIsXG4gIGZsaXBSdGw6IFwiZmxpcC1ydGxcIixcbn07XG5cbi8qKlxuICogSWNvbiBkYXRhIGNhY2hlLlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgaWNvbkNhY2hlID0ge307XG4vKipcbiAqIEljb24gcmVxdWVzdCBjYWNoZS5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IHJlcXVlc3RDYWNoZSA9IHt9O1xuY29uc3Qgc2NhbGVUb1B4ID0ge1xuICBzOiAxNixcbiAgbTogMjQsXG4gIGw6IDMyLFxufTtcbmFzeW5jIGZ1bmN0aW9uIGZldGNoSWNvbih7IGljb24sIHNjYWxlIH0pIHtcbiAgY29uc3Qgc2l6ZSA9IHNjYWxlVG9QeFtzY2FsZV07XG4gIGNvbnN0IG5hbWUgPSBub3JtYWxpemVJY29uTmFtZShpY29uKTtcbiAgY29uc3QgZmlsbGVkID0gbmFtZS5jaGFyQXQobmFtZS5sZW5ndGggLSAxKSA9PT0gXCJGXCI7XG4gIGNvbnN0IGljb25OYW1lID0gZmlsbGVkID8gbmFtZS5zdWJzdHJpbmcoMCwgbmFtZS5sZW5ndGggLSAxKSA6IG5hbWU7XG4gIGNvbnN0IGlkID0gYCR7aWNvbk5hbWV9JHtzaXplfSR7ZmlsbGVkID8gXCJGXCIgOiBcIlwifWA7XG4gIGlmIChpY29uQ2FjaGVbaWRdKSB7XG4gICAgcmV0dXJuIGljb25DYWNoZVtpZF07XG4gIH1cbiAgaWYgKCFyZXF1ZXN0Q2FjaGVbaWRdKSB7XG4gICAgcmVxdWVzdENhY2hlW2lkXSA9IGZldGNoKGdldEFzc2V0UGF0aChgLi9hc3NldHMvaWNvbi8ke2lkfS5qc29uYCkpXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihgXCIke2lkfVwiIGlzIG5vdCBhIHZhbGlkIGNhbGNpdGUtdWktaWNvbiBuYW1lYCk7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBwYXRoID0gYXdhaXQgcmVxdWVzdENhY2hlW2lkXTtcbiAgaWNvbkNhY2hlW2lkXSA9IHBhdGg7XG4gIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGljb24gbmFtZSB0byBtYXRjaCB0aGUgcGF0aCBkYXRhIG1vZHVsZSBleHBvcnRzLlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKlxuICogQHBhcmFtIG5hbWUg4oCTIGFuIGljb24gbmFtZSB0aGF0IGNhbiBiZSBlaXRoZXIga2ViYWIgb3IgY2FtZWwtY2FzZWRcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUljb25OYW1lKG5hbWUpIHtcbiAgY29uc3QgbnVtYmVyTGVhZGluZ05hbWUgPSAhaXNOYU4oTnVtYmVyKG5hbWUuY2hhckF0KDApKSk7XG4gIGNvbnN0IHBhcnRzID0gbmFtZS5zcGxpdChcIi1cIik7XG4gIGNvbnN0IGtlYmFiQ2FzZWQgPSBwYXJ0cy5sZW5ndGggPiAwO1xuICBpZiAoa2ViYWJDYXNlZCkge1xuICAgIGNvbnN0IGZpcnN0Tm9uRGlnaXRJblBhcnRQYXR0ZXJuID0gL1thLXpdL2k7XG4gICAgbmFtZSA9IHBhcnRzXG4gICAgICAubWFwKChwYXJ0LCBwYXJ0SW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBwYXJ0LnJlcGxhY2UoZmlyc3ROb25EaWdpdEluUGFydFBhdHRlcm4sIGZ1bmN0aW9uIHJlcGxhY2VyKG1hdGNoLCBvZmZzZXQpIHtcbiAgICAgICAgY29uc3QgaXNGaXJzdENoYXJJbk5hbWUgPSBwYXJ0SW5kZXggPT09IDAgJiYgb2Zmc2V0ID09PSAwO1xuICAgICAgICBpZiAoaXNGaXJzdENoYXJJbk5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KTtcbiAgICB9KVxuICAgICAgLmpvaW4oXCJcIik7XG4gIH1cbiAgcmV0dXJuIG51bWJlckxlYWRpbmdOYW1lID8gYGkke25hbWV9YCA6IG5hbWU7XG59XG5cbmNvbnN0IGljb25Dc3MgPSBcIjpob3N0e2Rpc3BsYXk6aW5saW5lLWZsZXg7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1pY29uLWNvbG9yKX06aG9zdChbc2NhbGU9c10pe2lubGluZS1zaXplOjE2cHg7YmxvY2stc2l6ZToxNnB4O21pbi1pbmxpbmUtc2l6ZToxNnB4O21pbi1ibG9jay1zaXplOjE2cHh9Omhvc3QoW3NjYWxlPW1dKXtpbmxpbmUtc2l6ZToyNHB4O2Jsb2NrLXNpemU6MjRweDttaW4taW5saW5lLXNpemU6MjRweDttaW4tYmxvY2stc2l6ZToyNHB4fTpob3N0KFtzY2FsZT1sXSl7aW5saW5lLXNpemU6MzJweDtibG9jay1zaXplOjMycHg7bWluLWlubGluZS1zaXplOjMycHg7bWluLWJsb2NrLXNpemU6MzJweH0uZmxpcC1ydGx7dHJhbnNmb3JtOnNjYWxlWCgtMSl9LnN2Z3tkaXNwbGF5OmJsb2NrfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBJY29uID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmljb24gPSBudWxsO1xuICAgIHRoaXMuZmxpcFJ0bCA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnRleHRMYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBhdGhEYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMud2FpdFVudGlsVmlzaWJsZSgoKSA9PiB7XG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgdGhpcy5sb2FkSWNvblBhdGhEYXRhKCk7XG4gICAgfSk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBudWxsO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMubG9hZEljb25QYXRoRGF0YSgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVsLCBmbGlwUnRsLCBwYXRoRGF0YSwgc2NhbGUsIHRleHRMYWJlbCB9ID0gdGhpcztcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKGVsKTtcbiAgICBjb25zdCBzaXplID0gc2NhbGVUb1B4W3NjYWxlXTtcbiAgICBjb25zdCBzZW1hbnRpYyA9ICEhdGV4dExhYmVsO1xuICAgIGNvbnN0IHBhdGhzID0gW10uY29uY2F0KHBhdGhEYXRhIHx8IFwiXCIpO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1oaWRkZW5cIjogdG9BcmlhQm9vbGVhbighc2VtYW50aWMpLCBcImFyaWEtbGFiZWxcIjogc2VtYW50aWMgPyB0ZXh0TGFiZWwgOiBudWxsLCByb2xlOiBzZW1hbnRpYyA/IFwiaW1nXCIgOiBudWxsIH0sIGgoXCJzdmdcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmZsaXBSdGxdOiBkaXIgPT09IFwicnRsXCIgJiYgZmxpcFJ0bCxcbiAgICAgICAgc3ZnOiB0cnVlLFxuICAgICAgfSwgZmlsbDogXCJjdXJyZW50Q29sb3JcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgdmlld0JveDogYDAgMCAke3NpemV9ICR7c2l6ZX1gLCB3aWR0aDogXCIxMDAlXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSwgcGF0aHMubWFwKChwYXRoKSA9PiB0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIiA/IChoKFwicGF0aFwiLCB7IGQ6IHBhdGggfSkpIDogKGgoXCJwYXRoXCIsIHsgZDogcGF0aC5kLCBvcGFjaXR5OiBcIm9wYWNpdHlcIiBpbiBwYXRoID8gcGF0aC5vcGFjaXR5IDogMSB9KSkpKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFzeW5jIGxvYWRJY29uUGF0aERhdGEoKSB7XG4gICAgY29uc3QgeyBpY29uLCBzY2FsZSwgdmlzaWJsZSB9ID0gdGhpcztcbiAgICBpZiAoIUJ1aWxkLmlzQnJvd3NlciB8fCAhaWNvbiB8fCAhdmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXRoRGF0YSA9IGF3YWl0IGZldGNoSWNvbih7IGljb24sIHNjYWxlIH0pO1xuICAgIC8vIFdoaWxlIHRoZSBmZXRjaEljb24gbWV0aG9kIGlzIGF3YWl0aW5nIHJlc3BvbnNlLCB0aGUgaWNvbiByZXF1ZXN0ZWQgY2FuIGNoYW5nZS4gVGhpcyBjaGVjayBpcyB0byB2ZXJpZnkgdGhlIHJlc3BvbnNlIHJlY2VpdmVkIGJlbG9uZ3MgdG8gdGhlIGN1cnJlbnQgaWNvbi5cbiAgICBpZiAoaWNvbiAhPT0gdGhpcy5pY29uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGF0aERhdGEgPSBwYXRoRGF0YTtcbiAgfVxuICB3YWl0VW50aWxWaXNpYmxlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwiaW50ZXJzZWN0aW9uXCIsIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIHsgcm9vdE1hcmdpbjogXCI1MHB4XCIgfSk7XG4gICAgaWYgKCF0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbCk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImljb25cIjogW1wibG9hZEljb25QYXRoRGF0YVwiXSxcbiAgICBcInNjYWxlXCI6IFtcImxvYWRJY29uUGF0aERhdGFcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gaWNvbkNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1pY29uXCIsIHtcbiAgICBcImljb25cIjogWzUxM10sXG4gICAgXCJmbGlwUnRsXCI6IFs1MTYsIFwiZmxpcC1ydGxcIl0sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcInRleHRMYWJlbFwiOiBbMSwgXCJ0ZXh0LWxhYmVsXCJdLFxuICAgIFwicGF0aERhdGFcIjogWzMyXSxcbiAgICBcInZpc2libGVcIjogWzMyXVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWljb25cIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIEljb24pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IEljb24gYXMgSSwgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=