"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-input-time-zone_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-input-time-zone.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-input-time-zone.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteInputTimeZone: () => (/* binding */ CalciteInputTimeZone),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _label2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label2.js */ "./node_modules/@esri/calcite-components/dist/components/label2.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form.js */ "./node_modules/@esri/calcite-components/dist/components/form.js");
/* harmony import */ var _chip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chip.js */ "./node_modules/@esri/calcite-components/dist/components/chip.js");
/* harmony import */ var _combobox_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./combobox.js */ "./node_modules/@esri/calcite-components/dist/components/combobox.js");
/* harmony import */ var _combobox_item_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./combobox-item.js */ "./node_modules/@esri/calcite-components/dist/components/combobox-item.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */












const hourToMinutes = 60;
const timeZoneNameBlockList = [
  "CET",
  "CST6CDT",
  "EET",
  "EST",
  "EST5EDT",
  "Factory",
  "HST",
  "MET",
  "MST",
  "MST7MDT",
  "PST8PDT",
  "UTC",
  "WET",
];
function timeZoneOffsetToDecimal(shortOffsetTimeZoneName) {
  const minusSign = "−";
  const hyphen = "-";
  return (shortOffsetTimeZoneName
    .replace(":15", ".25")
    .replace(":30", ".5")
    .replace(":45", ".75")
    // ensures decimal string representation is parseable
    .replace(minusSign, hyphen));
}
function toOffsetValue(timeZoneName, referenceDateInMs) {
  // we use "en-US" to allow us to reliably remove the standard time token
  const offset = getTimeZoneShortOffset(timeZoneName, "en-US", referenceDateInMs).replace("GMT", "");
  if (offset === "") {
    return 0;
  }
  return Number(timeZoneOffsetToDecimal(offset)) * hourToMinutes;
}
function getUserTimeZoneOffset() {
  const localDate = new Date();
  return localDate.getTimezoneOffset() * -1;
}
function getUserTimeZoneName() {
  const dateFormatter = new Intl.DateTimeFormat();
  return dateFormatter.resolvedOptions().timeZone;
}
/**
 * The lazy-loaded timezone-groups lib to be used across instances.
 */
let timeZoneGroups;
async function createTimeZoneItems(locale, messages, mode, referenceDate) {
  const referenceDateInMs = referenceDate.getTime();
  const timeZoneNames = Intl.supportedValuesOf("timeZone");
  if (mode === "offset") {
    if (!timeZoneGroups) {
      timeZoneGroups = Promise.all([
        __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_index3_js").then(__webpack_require__.bind(__webpack_require__, /*! ./index3.js */ "./node_modules/@esri/calcite-components/dist/components/index3.js")),
        __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_index4_js").then(__webpack_require__.bind(__webpack_require__, /*! ./index4.js */ "./node_modules/@esri/calcite-components/dist/components/index4.js")),
      ]);
    }
    return timeZoneGroups.then(async ([{ groupTimeZones }, { DateEngine }]) => {
      const timeZoneGroups = await groupTimeZones({
        dateEngine: new DateEngine(),
        groupDateRange: 1,
        startDate: new Date(referenceDateInMs).toISOString(),
      });
      const listFormatter = new Intl.ListFormat(locale, { style: "long", type: "conjunction" });
      // we remove blocked entries from tzs and adjust label indices accordingly
      timeZoneGroups.forEach((group) => {
        const indexOffsets = [];
        let removedSoFar = 0;
        group.tzs.forEach((tz, index) => {
          if (timeZoneNameBlockList.includes(tz)) {
            removedSoFar++;
          }
          indexOffsets[index] = removedSoFar;
        });
        group.tzs = group.tzs.filter((tz) => !timeZoneNameBlockList.includes(tz));
        group.labelTzIndices = group.labelTzIndices
          .map((index) => index - indexOffsets[index])
          .filter((index) => index >= 0 && index < group.tzs.length);
      });
      return timeZoneGroups
        .map(({ labelTzIndices, tzs }) => {
        const groupRepTz = tzs[0];
        const decimalOffset = timeZoneOffsetToDecimal(getTimeZoneShortOffset(groupRepTz, locale, referenceDateInMs));
        const value = toOffsetValue(groupRepTz, referenceDateInMs);
        const tzLabels = labelTzIndices.map((index) => {
          const timeZone = tzs[index];
          const timeZoneLabel = messages[timeZone];
          return (timeZoneLabel ||
            // get city token
            timeZone.split("/").pop());
        });
        const label = createTimeZoneOffsetLabel(messages, decimalOffset, listFormatter.format(tzLabels));
        return {
          label,
          value,
          filterValue: tzs.map((tz) => toUserFriendlyName(tz)),
        };
      })
        .filter((group) => !!group)
        .sort((groupA, groupB) => groupA.value - groupB.value);
    });
  }
  return timeZoneNames
    .map((timeZone) => {
    const label = toUserFriendlyName(timeZone);
    const value = timeZone;
    return {
      label,
      value,
      filterValue: timeZone,
    };
  })
    .filter((group) => !!group)
    .sort();
}
/**
 * Exported for testing purposes only
 *
 * @internal
 */
function toUserFriendlyName(timeZoneName) {
  return timeZoneName.replace(/_/g, " ");
}
function createTimeZoneOffsetLabel(messages, offsetLabel, groupLabel) {
  return messages.timeZoneLabel.replace("{offset}", offsetLabel).replace("{cities}", groupLabel);
}
function getTimeZoneShortOffset(timeZone, locale, referenceDateInMs = Date.now()) {
  const dateTimeFormat = (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.b)(locale, { timeZone, timeZoneName: "shortOffset" });
  const parts = dateTimeFormat.formatToParts(referenceDateInMs);
  return parts.find(({ type }) => type === "timeZoneName").value;
}

const inputTimeZoneCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const InputTimeZone = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInputTimeZoneBeforeClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteInputTimeZoneBeforeClose", 6);
    this.calciteInputTimeZoneBeforeOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteInputTimeZoneBeforeOpen", 6);
    this.calciteInputTimeZoneChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteInputTimeZoneChange", 6);
    this.calciteInputTimeZoneClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteInputTimeZoneClose", 6);
    this.calciteInputTimeZoneOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteInputTimeZoneOpen", 6);
    this.setComboboxRef = (el) => {
      this.comboboxEl = el;
    };
    this.onComboboxBeforeClose = (event) => {
      event.stopPropagation();
      this.calciteInputTimeZoneBeforeClose.emit();
    };
    this.onComboboxBeforeOpen = (event) => {
      event.stopPropagation();
      this.calciteInputTimeZoneBeforeOpen.emit();
    };
    this.onComboboxChange = (event) => {
      event.stopPropagation();
      const combobox = event.target;
      const selected = this.findTimeZoneItem(combobox.selectedItems[0].getAttribute("data-value"));
      const selectedValue = `${selected.value}`;
      if (this.value === selectedValue) {
        return;
      }
      this.value = selectedValue;
      this.selectedTimeZoneItem = selected;
      this.calciteInputTimeZoneChange.emit();
    };
    this.onComboboxClose = (event) => {
      event.stopPropagation();
      this.open = false;
      this.calciteInputTimeZoneClose.emit();
    };
    this.onComboboxOpen = (event) => {
      this.open = true;
      event.stopPropagation();
      this.calciteInputTimeZoneOpen.emit();
    };
    this.disabled = false;
    this.form = undefined;
    this.maxItems = 0;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.mode = "offset";
    this.name = undefined;
    this.open = false;
    this.overlayPositioning = "absolute";
    this.referenceDate = undefined;
    this.required = false;
    this.scale = "m";
    this.value = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  handleTimeZoneItemPropsChange() {
    this.createTimeZoneItems();
  }
  handleValueChange(value, oldValue) {
    const timeZoneItem = this.findTimeZoneItem(value);
    if (!timeZoneItem) {
      this.value = oldValue;
      return;
    }
    this.selectedTimeZoneItem = timeZoneItem;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    await this.comboboxEl.setFocus();
  }
  effectiveLocaleWatcher() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.u)(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onLabelClick() {
    this.setFocus();
  }
  findTimeZoneItem(value) {
    const valueToMatch = value;
    return this.timeZoneItems.find(({ value }) => 
    // intentional == to match string to number
    value == valueToMatch);
  }
  async createTimeZoneItems() {
    if (!this.effectiveLocale || !this.messages) {
      return [];
    }
    return createTimeZoneItems(this.effectiveLocale, this.messages, this.mode, this.referenceDate instanceof Date
      ? this.referenceDate
      : new Date(this.referenceDate ?? Date.now()));
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_form_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
  }
  disconnectedCallback() {
    (0,_form_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.a)(this);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
    this.timeZoneItems = await this.createTimeZoneItems();
    const fallbackValue = this.mode === "offset" ? getUserTimeZoneOffset() : getUserTimeZoneName();
    const valueToMatch = this.value ?? fallbackValue;
    this.selectedTimeZoneItem = this.findTimeZoneItem(valueToMatch);
    if (!this.selectedTimeZoneItem) {
      this.selectedTimeZoneItem = this.findTimeZoneItem(fallbackValue);
    }
    const selectedValue = `${this.selectedTimeZoneItem.value}`;
    (0,_form_js__WEBPACK_IMPORTED_MODULE_5__.a)(this, selectedValue);
    this.value = selectedValue;
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.Host, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("calcite-combobox", { clearDisabled: true, disabled: this.disabled, label: this.messages.chooseTimeZone, lang: this.effectiveLocale, maxItems: this.maxItems, onCalciteComboboxBeforeClose: this.onComboboxBeforeClose, onCalciteComboboxBeforeOpen: this.onComboboxBeforeOpen, onCalciteComboboxChange: this.onComboboxChange, onCalciteComboboxClose: this.onComboboxClose, onCalciteComboboxOpen: this.onComboboxOpen, open: this.open, overlayPositioning: this.overlayPositioning, scale: this.scale, selectionMode: "single-persist",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setComboboxRef }, this.timeZoneItems.map((group) => {
      const selected = this.selectedTimeZoneItem === group;
      const { label, value } = group;
      return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("calcite-combobox-item", { "data-value": value, key: label, selected: selected, textLabel: label, value: `${group.filterValue}` }));
    })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)(_form_js__WEBPACK_IMPORTED_MODULE_5__.H, { component: this })));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["handleTimeZoneItemPropsChange", "effectiveLocaleWatcher"],
    "messages": ["handleTimeZoneItemPropsChange"],
    "mode": ["handleTimeZoneItemPropsChange"],
    "referenceDate": ["handleTimeZoneItemPropsChange"],
    "value": ["handleValueChange"]
  }; }
  static get style() { return inputTimeZoneCss; }
}, [17, "calcite-input-time-zone", {
    "disabled": [516],
    "form": [513],
    "maxItems": [514, "max-items"],
    "messages": [1040],
    "messageOverrides": [1040],
    "mode": [513],
    "name": [513],
    "open": [1540],
    "overlayPositioning": [513, "overlay-positioning"],
    "referenceDate": [1, "reference-date"],
    "required": [516],
    "scale": [513],
    "value": [1025],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "setFocus": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-input-time-zone", "calcite-chip", "calcite-combobox", "calcite-combobox-item", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-input-time-zone":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, InputTimeZone);
      }
      break;
    case "calcite-chip":
      if (!customElements.get(tagName)) {
        (0,_chip_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
    case "calcite-combobox":
      if (!customElements.get(tagName)) {
        (0,_combobox_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
    case "calcite-combobox-item":
      if (!customElements.get(tagName)) {
        (0,_combobox_item_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_9__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteInputTimeZone = InputTimeZone;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/combobox-item.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/combobox-item.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ ComboboxItem),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditionalSlot.js */ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _utils2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils2.js */ "./node_modules/@esri/calcite-components/dist/components/utils2.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */









const CSS = {
  icon: "icon",
  iconActive: "icon--active",
  iconIndent: "icon--indent",
  custom: "icon--custom",
  dot: "icon--dot",
  single: "label--single",
  label: "label",
  active: "label--active",
  selected: "label--selected",
  title: "title",
  textContainer: "text-container",
};

const comboboxItemCss = "@charset \"UTF-8\";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([hidden]){display:none}[hidden]{display:none}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.625rem;--calcite-combobox-item-spacing-indent:1rem;--calcite-combobox-item-selector-icon-size:1.5rem}.container{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  )}:host(:focus){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host,ul{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),ul:focus{outline:2px solid transparent;outline-offset:2px}.label{position:relative;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:100%;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-color:transparent;word-wrap:break-word;word-break:break-word;padding-block:var(--calcite-combobox-item-spacing-unit-s);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host([disabled]) .label{cursor:default}.label--selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.label--active{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.label:hover,.label:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration-line:none;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.title{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon{display:inline-flex;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-ui-border-1)}.icon--indent{padding-inline-start:var(--calcite-combobox-item-indent-value)}.icon--custom{margin-block-start:-1px;padding-inline-start:var(--calcite-combobox-item-spacing-unit-l);color:var(--calcite-ui-text-3)}.icon--active{color:var(--calcite-ui-text-1)}.icon--dot{display:flex;justify-content:center;min-inline-size:var(--calcite-combobox-item-selector-icon-size)}.icon--dot:before{text-align:start;content:\"•\"}.label--active .icon{opacity:1}.label--selected .icon{opacity:1;color:var(--calcite-ui-brand)}:host(:hover[disabled]) .icon{opacity:1}";

const ComboboxItem = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteComboboxItemChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.createEvent)(this, "calciteComboboxItemChange", 6);
    this.itemClickHandler = () => {
      this.toggleSelected();
    };
    this.disabled = false;
    this.selected = false;
    this.active = false;
    this.ancestors = undefined;
    this.guid = (0,_guid_js__WEBPACK_IMPORTED_MODULE_2__.g)();
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.textLabel = undefined;
    this.value = undefined;
    this.filterDisabled = undefined;
    this.selectionMode = "multiple";
    this.scale = "m";
  }
  selectedWatchHandler() {
    this.calciteComboboxItemChange.emit();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.ancestors = (0,_utils2_js__WEBPACK_IMPORTED_MODULE_4__.g)(this.el);
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.u)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  toggleSelected() {
    const isSinglePersistSelect = this.selectionMode === "single-persist";
    if (this.disabled || (isSinglePersistSelect && this.selected)) {
      return;
    }
    this.selected = !this.selected;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderIcon(iconPath) {
    return this.icon ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { class: {
        [CSS.custom]: !!this.icon,
        [CSS.iconActive]: this.icon && this.selected,
        [CSS.iconIndent]: true,
      }, flipRtl: this.iconFlipRtl, icon: this.icon || iconPath, key: "icon", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_5__.g)(this.scale) })) : null;
  }
  renderSelectIndicator(showDot, iconPath) {
    return showDot ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { class: {
        [CSS.icon]: true,
        [CSS.dot]: true,
        [CSS.iconIndent]: true,
      } })) : ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { class: {
        [CSS.icon]: true,
        [CSS.iconActive]: this.selected,
        [CSS.iconIndent]: true,
      }, flipRtl: this.iconFlipRtl, icon: iconPath, key: "indicator", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_5__.g)(this.scale) }));
  }
  renderChildren() {
    if ((0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.el)) {
      return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("ul", { key: "default-slot-container" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot", null)));
    }
    return null;
  }
  render() {
    const isSingleSelect = (0,_utils2_js__WEBPACK_IMPORTED_MODULE_4__.i)(this.selectionMode);
    const showDot = isSingleSelect && !this.disabled;
    const defaultIcon = isSingleSelect ? "dot" : "check";
    const iconPath = this.disabled ? "" : defaultIcon;
    const classes = {
      [CSS.label]: true,
      [CSS.selected]: this.selected,
      [CSS.active]: this.active,
      [CSS.single]: isSingleSelect,
    };
    const depth = (0,_utils2_js__WEBPACK_IMPORTED_MODULE_4__.a)(this.el);
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.Host, { "aria-hidden": "true" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", { class: `container scale--${this.scale}`, style: { "--calcite-combobox-item-spacing-indent-multiplier": `${depth}` } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("li", { class: classes, id: this.guid, onClick: this.itemClickHandler }, this.renderSelectIndicator(showDot, iconPath), this.renderIcon(iconPath), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { class: "title" }, this.textLabel)), this.renderChildren())));
  }
  get el() { return this; }
  static get watchers() { return {
    "selected": ["selectedWatchHandler"]
  }; }
  static get style() { return comboboxItemCss; }
}, [1, "calcite-combobox-item", {
    "disabled": [516],
    "selected": [1540],
    "active": [516],
    "ancestors": [1040],
    "guid": [513],
    "icon": [513],
    "iconFlipRtl": [516, "icon-flip-rtl"],
    "textLabel": [513, "text-label"],
    "value": [8],
    "filterDisabled": [516, "filter-disabled"],
    "selectionMode": [513, "selection-mode"],
    "scale": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-combobox-item", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-combobox-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ComboboxItem);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZTM0NWIzMjAxZGJhOGFhOTA5MWJlYzczNzVkNDRjMzAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0c7QUFDekM7QUFDUjtBQUN3QztBQUNZO0FBQ0o7QUFDZ0I7QUFDdkU7QUFDSTtBQUNLO0FBQ1Q7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtUEFBcUI7QUFDN0IsUUFBUSxtUEFBcUI7QUFDN0I7QUFDQTtBQUNBLHlDQUF5QyxnQkFBZ0IsSUFBSSxZQUFZO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDBEQUEwRCxvQ0FBb0M7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsZ0JBQWdCLHFCQUFxQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQVE7QUFDMUIsWUFBWSx5RUFBQyxDQUFDLHdFQUFJLElBQUksdUJBQXVCLEVBQUUseUVBQUMsVUFBVSwyQkFBMkIsV0FBVyxZQUFZLHdEQUF3RCxNQUFNLEtBQUssRUFBRSx5RUFBQyxTQUFTLCtEQUErRCw0RUFBNEUseUVBQUMsV0FBVyxnQkFBZ0I7QUFDbFc7QUFDQSxhQUFhO0FBQ2IsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBcUI7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUV1RCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLWlucHV0LXRpbWUtem9uZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY29tYm9ib3gtaXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExhYmVsLCBkIGFzIGRpc2Nvbm5lY3RMYWJlbCB9IGZyb20gJy4vbGFiZWwyLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldERhdGVUaW1lRm9ybWF0LCBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlTWVzc2FnZXMsIGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzIH0gZnJvbSAnLi90OW4uanMnO1xuaW1wb3J0IHsgYyBhcyBjb21wb25lbnRGb2N1c2FibGUsIGEgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgcyBhcyBzZXRDb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEZvcm0sIGQgYXMgZGlzY29ubmVjdEZvcm0sIGEgYXMgYWZ0ZXJDb25uZWN0RGVmYXVsdFZhbHVlU2V0LCBIIGFzIEhpZGRlbkZvcm1JbnB1dFNsb3QgfSBmcm9tICcuL2Zvcm0uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDUgfSBmcm9tICcuL2NoaXAuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDQgfSBmcm9tICcuL2NvbWJvYm94LmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQzIH0gZnJvbSAnLi9jb21ib2JveC1pdGVtLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9pY29uLmpzJztcblxuY29uc3QgaG91clRvTWludXRlcyA9IDYwO1xuY29uc3QgdGltZVpvbmVOYW1lQmxvY2tMaXN0ID0gW1xuICBcIkNFVFwiLFxuICBcIkNTVDZDRFRcIixcbiAgXCJFRVRcIixcbiAgXCJFU1RcIixcbiAgXCJFU1Q1RURUXCIsXG4gIFwiRmFjdG9yeVwiLFxuICBcIkhTVFwiLFxuICBcIk1FVFwiLFxuICBcIk1TVFwiLFxuICBcIk1TVDdNRFRcIixcbiAgXCJQU1Q4UERUXCIsXG4gIFwiVVRDXCIsXG4gIFwiV0VUXCIsXG5dO1xuZnVuY3Rpb24gdGltZVpvbmVPZmZzZXRUb0RlY2ltYWwoc2hvcnRPZmZzZXRUaW1lWm9uZU5hbWUpIHtcbiAgY29uc3QgbWludXNTaWduID0gXCLiiJJcIjtcbiAgY29uc3QgaHlwaGVuID0gXCItXCI7XG4gIHJldHVybiAoc2hvcnRPZmZzZXRUaW1lWm9uZU5hbWVcbiAgICAucmVwbGFjZShcIjoxNVwiLCBcIi4yNVwiKVxuICAgIC5yZXBsYWNlKFwiOjMwXCIsIFwiLjVcIilcbiAgICAucmVwbGFjZShcIjo0NVwiLCBcIi43NVwiKVxuICAgIC8vIGVuc3VyZXMgZGVjaW1hbCBzdHJpbmcgcmVwcmVzZW50YXRpb24gaXMgcGFyc2VhYmxlXG4gICAgLnJlcGxhY2UobWludXNTaWduLCBoeXBoZW4pKTtcbn1cbmZ1bmN0aW9uIHRvT2Zmc2V0VmFsdWUodGltZVpvbmVOYW1lLCByZWZlcmVuY2VEYXRlSW5Ncykge1xuICAvLyB3ZSB1c2UgXCJlbi1VU1wiIHRvIGFsbG93IHVzIHRvIHJlbGlhYmx5IHJlbW92ZSB0aGUgc3RhbmRhcmQgdGltZSB0b2tlblxuICBjb25zdCBvZmZzZXQgPSBnZXRUaW1lWm9uZVNob3J0T2Zmc2V0KHRpbWVab25lTmFtZSwgXCJlbi1VU1wiLCByZWZlcmVuY2VEYXRlSW5NcykucmVwbGFjZShcIkdNVFwiLCBcIlwiKTtcbiAgaWYgKG9mZnNldCA9PT0gXCJcIikge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHJldHVybiBOdW1iZXIodGltZVpvbmVPZmZzZXRUb0RlY2ltYWwob2Zmc2V0KSkgKiBob3VyVG9NaW51dGVzO1xufVxuZnVuY3Rpb24gZ2V0VXNlclRpbWVab25lT2Zmc2V0KCkge1xuICBjb25zdCBsb2NhbERhdGUgPSBuZXcgRGF0ZSgpO1xuICByZXR1cm4gbG9jYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiAtMTtcbn1cbmZ1bmN0aW9uIGdldFVzZXJUaW1lWm9uZU5hbWUoKSB7XG4gIGNvbnN0IGRhdGVGb3JtYXR0ZXIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgpO1xuICByZXR1cm4gZGF0ZUZvcm1hdHRlci5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZTtcbn1cbi8qKlxuICogVGhlIGxhenktbG9hZGVkIHRpbWV6b25lLWdyb3VwcyBsaWIgdG8gYmUgdXNlZCBhY3Jvc3MgaW5zdGFuY2VzLlxuICovXG5sZXQgdGltZVpvbmVHcm91cHM7XG5hc3luYyBmdW5jdGlvbiBjcmVhdGVUaW1lWm9uZUl0ZW1zKGxvY2FsZSwgbWVzc2FnZXMsIG1vZGUsIHJlZmVyZW5jZURhdGUpIHtcbiAgY29uc3QgcmVmZXJlbmNlRGF0ZUluTXMgPSByZWZlcmVuY2VEYXRlLmdldFRpbWUoKTtcbiAgY29uc3QgdGltZVpvbmVOYW1lcyA9IEludGwuc3VwcG9ydGVkVmFsdWVzT2YoXCJ0aW1lWm9uZVwiKTtcbiAgaWYgKG1vZGUgPT09IFwib2Zmc2V0XCIpIHtcbiAgICBpZiAoIXRpbWVab25lR3JvdXBzKSB7XG4gICAgICB0aW1lWm9uZUdyb3VwcyA9IFByb21pc2UuYWxsKFtcbiAgICAgICAgaW1wb3J0KCcuL2luZGV4My5qcycpLFxuICAgICAgICBpbXBvcnQoJy4vaW5kZXg0LmpzJyksXG4gICAgICBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRpbWVab25lR3JvdXBzLnRoZW4oYXN5bmMgKFt7IGdyb3VwVGltZVpvbmVzIH0sIHsgRGF0ZUVuZ2luZSB9XSkgPT4ge1xuICAgICAgY29uc3QgdGltZVpvbmVHcm91cHMgPSBhd2FpdCBncm91cFRpbWVab25lcyh7XG4gICAgICAgIGRhdGVFbmdpbmU6IG5ldyBEYXRlRW5naW5lKCksXG4gICAgICAgIGdyb3VwRGF0ZVJhbmdlOiAxLFxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHJlZmVyZW5jZURhdGVJbk1zKS50b0lTT1N0cmluZygpLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBsaXN0Rm9ybWF0dGVyID0gbmV3IEludGwuTGlzdEZvcm1hdChsb2NhbGUsIHsgc3R5bGU6IFwibG9uZ1wiLCB0eXBlOiBcImNvbmp1bmN0aW9uXCIgfSk7XG4gICAgICAvLyB3ZSByZW1vdmUgYmxvY2tlZCBlbnRyaWVzIGZyb20gdHpzIGFuZCBhZGp1c3QgbGFiZWwgaW5kaWNlcyBhY2NvcmRpbmdseVxuICAgICAgdGltZVpvbmVHcm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXhPZmZzZXRzID0gW107XG4gICAgICAgIGxldCByZW1vdmVkU29GYXIgPSAwO1xuICAgICAgICBncm91cC50enMuZm9yRWFjaCgodHosIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKHRpbWVab25lTmFtZUJsb2NrTGlzdC5pbmNsdWRlcyh0eikpIHtcbiAgICAgICAgICAgIHJlbW92ZWRTb0ZhcisrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbmRleE9mZnNldHNbaW5kZXhdID0gcmVtb3ZlZFNvRmFyO1xuICAgICAgICB9KTtcbiAgICAgICAgZ3JvdXAudHpzID0gZ3JvdXAudHpzLmZpbHRlcigodHopID0+ICF0aW1lWm9uZU5hbWVCbG9ja0xpc3QuaW5jbHVkZXModHopKTtcbiAgICAgICAgZ3JvdXAubGFiZWxUekluZGljZXMgPSBncm91cC5sYWJlbFR6SW5kaWNlc1xuICAgICAgICAgIC5tYXAoKGluZGV4KSA9PiBpbmRleCAtIGluZGV4T2Zmc2V0c1tpbmRleF0pXG4gICAgICAgICAgLmZpbHRlcigoaW5kZXgpID0+IGluZGV4ID49IDAgJiYgaW5kZXggPCBncm91cC50enMubGVuZ3RoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRpbWVab25lR3JvdXBzXG4gICAgICAgIC5tYXAoKHsgbGFiZWxUekluZGljZXMsIHR6cyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwUmVwVHogPSB0enNbMF07XG4gICAgICAgIGNvbnN0IGRlY2ltYWxPZmZzZXQgPSB0aW1lWm9uZU9mZnNldFRvRGVjaW1hbChnZXRUaW1lWm9uZVNob3J0T2Zmc2V0KGdyb3VwUmVwVHosIGxvY2FsZSwgcmVmZXJlbmNlRGF0ZUluTXMpKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0b09mZnNldFZhbHVlKGdyb3VwUmVwVHosIHJlZmVyZW5jZURhdGVJbk1zKTtcbiAgICAgICAgY29uc3QgdHpMYWJlbHMgPSBsYWJlbFR6SW5kaWNlcy5tYXAoKGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdGltZVpvbmUgPSB0enNbaW5kZXhdO1xuICAgICAgICAgIGNvbnN0IHRpbWVab25lTGFiZWwgPSBtZXNzYWdlc1t0aW1lWm9uZV07XG4gICAgICAgICAgcmV0dXJuICh0aW1lWm9uZUxhYmVsIHx8XG4gICAgICAgICAgICAvLyBnZXQgY2l0eSB0b2tlblxuICAgICAgICAgICAgdGltZVpvbmUuc3BsaXQoXCIvXCIpLnBvcCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlVGltZVpvbmVPZmZzZXRMYWJlbChtZXNzYWdlcywgZGVjaW1hbE9mZnNldCwgbGlzdEZvcm1hdHRlci5mb3JtYXQodHpMYWJlbHMpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBmaWx0ZXJWYWx1ZTogdHpzLm1hcCgodHopID0+IHRvVXNlckZyaWVuZGx5TmFtZSh0eikpLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICAgICAgLmZpbHRlcigoZ3JvdXApID0+ICEhZ3JvdXApXG4gICAgICAgIC5zb3J0KChncm91cEEsIGdyb3VwQikgPT4gZ3JvdXBBLnZhbHVlIC0gZ3JvdXBCLnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdGltZVpvbmVOYW1lc1xuICAgIC5tYXAoKHRpbWVab25lKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSB0b1VzZXJGcmllbmRseU5hbWUodGltZVpvbmUpO1xuICAgIGNvbnN0IHZhbHVlID0gdGltZVpvbmU7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVsLFxuICAgICAgdmFsdWUsXG4gICAgICBmaWx0ZXJWYWx1ZTogdGltZVpvbmUsXG4gICAgfTtcbiAgfSlcbiAgICAuZmlsdGVyKChncm91cCkgPT4gISFncm91cClcbiAgICAuc29ydCgpO1xufVxuLyoqXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5XG4gKlxuICogQGludGVybmFsXG4gKi9cbmZ1bmN0aW9uIHRvVXNlckZyaWVuZGx5TmFtZSh0aW1lWm9uZU5hbWUpIHtcbiAgcmV0dXJuIHRpbWVab25lTmFtZS5yZXBsYWNlKC9fL2csIFwiIFwiKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVRpbWVab25lT2Zmc2V0TGFiZWwobWVzc2FnZXMsIG9mZnNldExhYmVsLCBncm91cExhYmVsKSB7XG4gIHJldHVybiBtZXNzYWdlcy50aW1lWm9uZUxhYmVsLnJlcGxhY2UoXCJ7b2Zmc2V0fVwiLCBvZmZzZXRMYWJlbCkucmVwbGFjZShcIntjaXRpZXN9XCIsIGdyb3VwTGFiZWwpO1xufVxuZnVuY3Rpb24gZ2V0VGltZVpvbmVTaG9ydE9mZnNldCh0aW1lWm9uZSwgbG9jYWxlLCByZWZlcmVuY2VEYXRlSW5NcyA9IERhdGUubm93KCkpIHtcbiAgY29uc3QgZGF0ZVRpbWVGb3JtYXQgPSBnZXREYXRlVGltZUZvcm1hdChsb2NhbGUsIHsgdGltZVpvbmUsIHRpbWVab25lTmFtZTogXCJzaG9ydE9mZnNldFwiIH0pO1xuICBjb25zdCBwYXJ0cyA9IGRhdGVUaW1lRm9ybWF0LmZvcm1hdFRvUGFydHMocmVmZXJlbmNlRGF0ZUluTXMpO1xuICByZXR1cm4gcGFydHMuZmluZCgoeyB0eXBlIH0pID0+IHR5cGUgPT09IFwidGltZVpvbmVOYW1lXCIpLnZhbHVlO1xufVxuXG5jb25zdCBpbnB1dFRpbWVab25lQ3NzID0gXCI6aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmJsb2NrfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX06OnNsb3R0ZWQoaW5wdXRbc2xvdD1oaWRkZW4tZm9ybS1pbnB1dF0pe21hcmdpbjowICFpbXBvcnRhbnQ7b3BhY2l0eTowICFpbXBvcnRhbnQ7b3V0bGluZTpub25lICFpbXBvcnRhbnQ7cGFkZGluZzowICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtpbnNldDowICFpbXBvcnRhbnQ7dHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZSAhaW1wb3J0YW50O3otaW5kZXg6LTEgIWltcG9ydGFudH1cIjtcblxuY29uc3QgSW5wdXRUaW1lWm9uZSA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXRUaW1lWm9uZUJlZm9yZUNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXRUaW1lWm9uZUJlZm9yZUNsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0VGltZVpvbmVCZWZvcmVPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXRUaW1lWm9uZUJlZm9yZU9wZW5cIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXRUaW1lWm9uZUNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUlucHV0VGltZVpvbmVDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXRUaW1lWm9uZUNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXRUaW1lWm9uZUNsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0VGltZVpvbmVPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXRUaW1lWm9uZU9wZW5cIiwgNik7XG4gICAgdGhpcy5zZXRDb21ib2JveFJlZiA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5jb21ib2JveEVsID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLm9uQ29tYm9ib3hCZWZvcmVDbG9zZSA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmNhbGNpdGVJbnB1dFRpbWVab25lQmVmb3JlQ2xvc2UuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5vbkNvbWJvYm94QmVmb3JlT3BlbiA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmNhbGNpdGVJbnB1dFRpbWVab25lQmVmb3JlT3Blbi5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLm9uQ29tYm9ib3hDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgY29tYm9ib3ggPSBldmVudC50YXJnZXQ7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuZmluZFRpbWVab25lSXRlbShjb21ib2JveC5zZWxlY3RlZEl0ZW1zWzBdLmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIikpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IGAke3NlbGVjdGVkLnZhbHVlfWA7XG4gICAgICBpZiAodGhpcy52YWx1ZSA9PT0gc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnZhbHVlID0gc2VsZWN0ZWRWYWx1ZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUaW1lWm9uZUl0ZW0gPSBzZWxlY3RlZDtcbiAgICAgIHRoaXMuY2FsY2l0ZUlucHV0VGltZVpvbmVDaGFuZ2UuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5vbkNvbWJvYm94Q2xvc2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLmNhbGNpdGVJbnB1dFRpbWVab25lQ2xvc2UuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5vbkNvbWJvYm94T3BlbiA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5jYWxjaXRlSW5wdXRUaW1lWm9uZU9wZW4uZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1heEl0ZW1zID0gMDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1vZGUgPSBcIm9mZnNldFwiO1xuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLm92ZXJsYXlQb3NpdGlvbmluZyA9IFwiYWJzb2x1dGVcIjtcbiAgICB0aGlzLnJlZmVyZW5jZURhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgaGFuZGxlVGltZVpvbmVJdGVtUHJvcHNDaGFuZ2UoKSB7XG4gICAgdGhpcy5jcmVhdGVUaW1lWm9uZUl0ZW1zKCk7XG4gIH1cbiAgaGFuZGxlVmFsdWVDaGFuZ2UodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgY29uc3QgdGltZVpvbmVJdGVtID0gdGhpcy5maW5kVGltZVpvbmVJdGVtKHZhbHVlKTtcbiAgICBpZiAoIXRpbWVab25lSXRlbSkge1xuICAgICAgdGhpcy52YWx1ZSA9IG9sZFZhbHVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkVGltZVpvbmVJdGVtID0gdGltZVpvbmVJdGVtO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIGF3YWl0IHRoaXMuY29tYm9ib3hFbC5zZXRGb2N1cygpO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZVdhdGNoZXIoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG9uTGFiZWxDbGljaygpIHtcbiAgICB0aGlzLnNldEZvY3VzKCk7XG4gIH1cbiAgZmluZFRpbWVab25lSXRlbSh2YWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlVG9NYXRjaCA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzLnRpbWVab25lSXRlbXMuZmluZCgoeyB2YWx1ZSB9KSA9PiBcbiAgICAvLyBpbnRlbnRpb25hbCA9PSB0byBtYXRjaCBzdHJpbmcgdG8gbnVtYmVyXG4gICAgdmFsdWUgPT0gdmFsdWVUb01hdGNoKTtcbiAgfVxuICBhc3luYyBjcmVhdGVUaW1lWm9uZUl0ZW1zKCkge1xuICAgIGlmICghdGhpcy5lZmZlY3RpdmVMb2NhbGUgfHwgIXRoaXMubWVzc2FnZXMpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZVRpbWVab25lSXRlbXModGhpcy5lZmZlY3RpdmVMb2NhbGUsIHRoaXMubWVzc2FnZXMsIHRoaXMubW9kZSwgdGhpcy5yZWZlcmVuY2VEYXRlIGluc3RhbmNlb2YgRGF0ZVxuICAgICAgPyB0aGlzLnJlZmVyZW5jZURhdGVcbiAgICAgIDogbmV3IERhdGUodGhpcy5yZWZlcmVuY2VEYXRlID8/IERhdGUubm93KCkpKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdEZvcm0odGhpcyk7XG4gICAgY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RGb3JtKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy50aW1lWm9uZUl0ZW1zID0gYXdhaXQgdGhpcy5jcmVhdGVUaW1lWm9uZUl0ZW1zKCk7XG4gICAgY29uc3QgZmFsbGJhY2tWYWx1ZSA9IHRoaXMubW9kZSA9PT0gXCJvZmZzZXRcIiA/IGdldFVzZXJUaW1lWm9uZU9mZnNldCgpIDogZ2V0VXNlclRpbWVab25lTmFtZSgpO1xuICAgIGNvbnN0IHZhbHVlVG9NYXRjaCA9IHRoaXMudmFsdWUgPz8gZmFsbGJhY2tWYWx1ZTtcbiAgICB0aGlzLnNlbGVjdGVkVGltZVpvbmVJdGVtID0gdGhpcy5maW5kVGltZVpvbmVJdGVtKHZhbHVlVG9NYXRjaCk7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkVGltZVpvbmVJdGVtKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkVGltZVpvbmVJdGVtID0gdGhpcy5maW5kVGltZVpvbmVJdGVtKGZhbGxiYWNrVmFsdWUpO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gYCR7dGhpcy5zZWxlY3RlZFRpbWVab25lSXRlbS52YWx1ZX1gO1xuICAgIGFmdGVyQ29ubmVjdERlZmF1bHRWYWx1ZVNldCh0aGlzLCBzZWxlY3RlZFZhbHVlKTtcbiAgICB0aGlzLnZhbHVlID0gc2VsZWN0ZWRWYWx1ZTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcImNhbGNpdGUtY29tYm9ib3hcIiwgeyBjbGVhckRpc2FibGVkOiB0cnVlLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgbGFiZWw6IHRoaXMubWVzc2FnZXMuY2hvb3NlVGltZVpvbmUsIGxhbmc6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLCBtYXhJdGVtczogdGhpcy5tYXhJdGVtcywgb25DYWxjaXRlQ29tYm9ib3hCZWZvcmVDbG9zZTogdGhpcy5vbkNvbWJvYm94QmVmb3JlQ2xvc2UsIG9uQ2FsY2l0ZUNvbWJvYm94QmVmb3JlT3BlbjogdGhpcy5vbkNvbWJvYm94QmVmb3JlT3Blbiwgb25DYWxjaXRlQ29tYm9ib3hDaGFuZ2U6IHRoaXMub25Db21ib2JveENoYW5nZSwgb25DYWxjaXRlQ29tYm9ib3hDbG9zZTogdGhpcy5vbkNvbWJvYm94Q2xvc2UsIG9uQ2FsY2l0ZUNvbWJvYm94T3BlbjogdGhpcy5vbkNvbWJvYm94T3Blbiwgb3BlbjogdGhpcy5vcGVuLCBvdmVybGF5UG9zaXRpb25pbmc6IHRoaXMub3ZlcmxheVBvc2l0aW9uaW5nLCBzY2FsZTogdGhpcy5zY2FsZSwgc2VsZWN0aW9uTW9kZTogXCJzaW5nbGUtcGVyc2lzdFwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zZXRDb21ib2JveFJlZiB9LCB0aGlzLnRpbWVab25lSXRlbXMubWFwKChncm91cCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkVGltZVpvbmVJdGVtID09PSBncm91cDtcbiAgICAgIGNvbnN0IHsgbGFiZWwsIHZhbHVlIH0gPSBncm91cDtcbiAgICAgIHJldHVybiAoaChcImNhbGNpdGUtY29tYm9ib3gtaXRlbVwiLCB7IFwiZGF0YS12YWx1ZVwiOiB2YWx1ZSwga2V5OiBsYWJlbCwgc2VsZWN0ZWQ6IHNlbGVjdGVkLCB0ZXh0TGFiZWw6IGxhYmVsLCB2YWx1ZTogYCR7Z3JvdXAuZmlsdGVyVmFsdWV9YCB9KSk7XG4gICAgfSkpLCBoKEhpZGRlbkZvcm1JbnB1dFNsb3QsIHsgY29tcG9uZW50OiB0aGlzIH0pKSk7XG4gIH1cbiAgc3RhdGljIGdldCBkZWxlZ2F0ZXNGb2N1cygpIHsgcmV0dXJuIHRydWU7IH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJoYW5kbGVUaW1lWm9uZUl0ZW1Qcm9wc0NoYW5nZVwiLCBcImVmZmVjdGl2ZUxvY2FsZVdhdGNoZXJcIl0sXG4gICAgXCJtZXNzYWdlc1wiOiBbXCJoYW5kbGVUaW1lWm9uZUl0ZW1Qcm9wc0NoYW5nZVwiXSxcbiAgICBcIm1vZGVcIjogW1wiaGFuZGxlVGltZVpvbmVJdGVtUHJvcHNDaGFuZ2VcIl0sXG4gICAgXCJyZWZlcmVuY2VEYXRlXCI6IFtcImhhbmRsZVRpbWVab25lSXRlbVByb3BzQ2hhbmdlXCJdLFxuICAgIFwidmFsdWVcIjogW1wiaGFuZGxlVmFsdWVDaGFuZ2VcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gaW5wdXRUaW1lWm9uZUNzczsgfVxufSwgWzE3LCBcImNhbGNpdGUtaW5wdXQtdGltZS16b25lXCIsIHtcbiAgICBcImRpc2FibGVkXCI6IFs1MTZdLFxuICAgIFwiZm9ybVwiOiBbNTEzXSxcbiAgICBcIm1heEl0ZW1zXCI6IFs1MTQsIFwibWF4LWl0ZW1zXCJdLFxuICAgIFwibWVzc2FnZXNcIjogWzEwNDBdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJtb2RlXCI6IFs1MTNdLFxuICAgIFwibmFtZVwiOiBbNTEzXSxcbiAgICBcIm9wZW5cIjogWzE1NDBdLFxuICAgIFwib3ZlcmxheVBvc2l0aW9uaW5nXCI6IFs1MTMsIFwib3ZlcmxheS1wb3NpdGlvbmluZ1wiXSxcbiAgICBcInJlZmVyZW5jZURhdGVcIjogWzEsIFwicmVmZXJlbmNlLWRhdGVcIl0sXG4gICAgXCJyZXF1aXJlZFwiOiBbNTE2XSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwidmFsdWVcIjogWzEwMjVdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogWzMyXSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWlucHV0LXRpbWUtem9uZVwiLCBcImNhbGNpdGUtY2hpcFwiLCBcImNhbGNpdGUtY29tYm9ib3hcIiwgXCJjYWxjaXRlLWNvbWJvYm94LWl0ZW1cIiwgXCJjYWxjaXRlLWljb25cIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtaW5wdXQtdGltZS16b25lXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgSW5wdXRUaW1lWm9uZSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1jaGlwXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDUoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWNvbWJvYm94XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDQoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWNvbWJvYm94LWl0ZW1cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlSW5wdXRUaW1lWm9uZSA9IElucHV0VGltZVpvbmU7XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gZGVmaW5lQ3VzdG9tRWxlbWVudCQxO1xuXG5leHBvcnQgeyBDYWxjaXRlSW5wdXRUaW1lWm9uZSwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGgsIEhvc3QgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQsIGQgYXMgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCB9IGZyb20gJy4vY29uZGl0aW9uYWxTbG90LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U2xvdHRlZCB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldEFuY2VzdG9ycywgaSBhcyBpc1NpbmdsZUxpa2UsIGEgYXMgZ2V0RGVwdGggfSBmcm9tICcuL3V0aWxzMi5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldEljb25TY2FsZSB9IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQxIH0gZnJvbSAnLi9pY29uLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBpY29uOiBcImljb25cIixcbiAgaWNvbkFjdGl2ZTogXCJpY29uLS1hY3RpdmVcIixcbiAgaWNvbkluZGVudDogXCJpY29uLS1pbmRlbnRcIixcbiAgY3VzdG9tOiBcImljb24tLWN1c3RvbVwiLFxuICBkb3Q6IFwiaWNvbi0tZG90XCIsXG4gIHNpbmdsZTogXCJsYWJlbC0tc2luZ2xlXCIsXG4gIGxhYmVsOiBcImxhYmVsXCIsXG4gIGFjdGl2ZTogXCJsYWJlbC0tYWN0aXZlXCIsXG4gIHNlbGVjdGVkOiBcImxhYmVsLS1zZWxlY3RlZFwiLFxuICB0aXRsZTogXCJ0aXRsZVwiLFxuICB0ZXh0Q29udGFpbmVyOiBcInRleHQtY29udGFpbmVyXCIsXG59O1xuXG5jb25zdCBjb21ib2JveEl0ZW1Dc3MgPSBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9LnNjYWxlLS1ze2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtbDowLjVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LXM6MC4yNXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLWluZGVudDowLjVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc2VsZWN0b3ItaWNvbi1zaXplOjFyZW19LnNjYWxlLS1te2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtbDowLjc1cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1zOjAuNXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLWluZGVudDowLjc1cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNlbGVjdG9yLWljb24tc2l6ZToxcmVtfS5zY2FsZS0tbHtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtbDoxcmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1zOjAuNjI1cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctaW5kZW50OjFyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc2VsZWN0b3ItaWNvbi1zaXplOjEuNXJlbX0uY29udGFpbmVyey0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLWluZGVudC12YWx1ZTpjYWxjKFxcbiAgICB2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy1pbmRlbnQpICogdmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctaW5kZW50LW11bHRpcGxpZXIpXFxuICApfTpob3N0KDpmb2N1cyl7LS10dy1zaGFkb3c6MCAwICMwMDAwOy0tdHctc2hhZG93LWNvbG9yZWQ6MCAwICMwMDAwO2JveC1zaGFkb3c6dmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9Omhvc3QsdWx7bWFyZ2luOjBweDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3BhZGRpbmc6MHB4fTpob3N0KDpmb2N1cyksdWw6Zm9jdXN7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4fS5sYWJlbHtwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCU7bWluLWlubGluZS1zaXplOjEwMCU7Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O3dvcmQtd3JhcDpicmVhay13b3JkO3dvcmQtYnJlYWs6YnJlYWstd29yZDtwYWRkaW5nLWJsb2NrOnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtcyk7cGFkZGluZy1pbmxpbmU6dmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1sKX06aG9zdChbZGlzYWJsZWRdKSAubGFiZWx7Y3Vyc29yOmRlZmF1bHR9LmxhYmVsLS1zZWxlY3RlZHtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5sYWJlbC0tYWN0aXZle291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX0ubGFiZWw6aG92ZXIsLmxhYmVsOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTstLXR3LXNoYWRvdzowIDAgIzAwMDA7LS10dy1zaGFkb3ctY29sb3JlZDowIDAgIzAwMDA7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfS50aXRsZXtwYWRkaW5nLWJsb2NrOjA7cGFkZGluZy1pbmxpbmU6dmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1sKX0uaWNvbntkaXNwbGF5OmlubGluZS1mbGV4O29wYWNpdHk6MDt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSl9Lmljb24tLWluZGVudHtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0taW5kZW50LXZhbHVlKX0uaWNvbi0tY3VzdG9te21hcmdpbi1ibG9jay1zdGFydDotMXB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtbCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfS5pY29uLS1hY3RpdmV7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5pY29uLS1kb3R7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7bWluLWlubGluZS1zaXplOnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zZWxlY3Rvci1pY29uLXNpemUpfS5pY29uLS1kb3Q6YmVmb3Jle3RleHQtYWxpZ246c3RhcnQ7Y29udGVudDpcXFwi4oCiXFxcIn0ubGFiZWwtLWFjdGl2ZSAuaWNvbntvcGFjaXR5OjF9LmxhYmVsLS1zZWxlY3RlZCAuaWNvbntvcGFjaXR5OjE7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoOmhvdmVyW2Rpc2FibGVkXSkgLmljb257b3BhY2l0eToxfVwiO1xuXG5jb25zdCBDb21ib2JveEl0ZW0gPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZUNvbWJvYm94SXRlbUNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUNvbWJvYm94SXRlbUNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLml0ZW1DbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnRvZ2dsZVNlbGVjdGVkKCk7XG4gICAgfTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5hbmNlc3RvcnMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ndWlkID0gZ3VpZCgpO1xuICAgIHRoaXMuaWNvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25GbGlwUnRsID0gZmFsc2U7XG4gICAgdGhpcy50ZXh0TGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZpbHRlckRpc2FibGVkID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VsZWN0aW9uTW9kZSA9IFwibXVsdGlwbGVcIjtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gIH1cbiAgc2VsZWN0ZWRXYXRjaEhhbmRsZXIoKSB7XG4gICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hJdGVtQ2hhbmdlLmVtaXQoKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuYW5jZXN0b3JzID0gZ2V0QW5jZXN0b3JzKHRoaXMuZWwpO1xuICAgIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB0b2dnbGVTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBpc1NpbmdsZVBlcnNpc3RTZWxlY3QgPSB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwic2luZ2xlLXBlcnNpc3RcIjtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAoaXNTaW5nbGVQZXJzaXN0U2VsZWN0ICYmIHRoaXMuc2VsZWN0ZWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVySWNvbihpY29uUGF0aCkge1xuICAgIHJldHVybiB0aGlzLmljb24gPyAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtDU1MuY3VzdG9tXTogISF0aGlzLmljb24sXG4gICAgICAgIFtDU1MuaWNvbkFjdGl2ZV06IHRoaXMuaWNvbiAmJiB0aGlzLnNlbGVjdGVkLFxuICAgICAgICBbQ1NTLmljb25JbmRlbnRdOiB0cnVlLFxuICAgICAgfSwgZmxpcFJ0bDogdGhpcy5pY29uRmxpcFJ0bCwgaWNvbjogdGhpcy5pY29uIHx8IGljb25QYXRoLCBrZXk6IFwiaWNvblwiLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyU2VsZWN0SW5kaWNhdG9yKHNob3dEb3QsIGljb25QYXRoKSB7XG4gICAgcmV0dXJuIHNob3dEb3QgPyAoaChcInNwYW5cIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLmljb25dOiB0cnVlLFxuICAgICAgICBbQ1NTLmRvdF06IHRydWUsXG4gICAgICAgIFtDU1MuaWNvbkluZGVudF06IHRydWUsXG4gICAgICB9IH0pKSA6IChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5pY29uXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5pY29uQWN0aXZlXTogdGhpcy5zZWxlY3RlZCxcbiAgICAgICAgW0NTUy5pY29uSW5kZW50XTogdHJ1ZSxcbiAgICAgIH0sIGZsaXBSdGw6IHRoaXMuaWNvbkZsaXBSdGwsIGljb246IGljb25QYXRoLCBrZXk6IFwiaW5kaWNhdG9yXCIsIHNjYWxlOiBnZXRJY29uU2NhbGUodGhpcy5zY2FsZSkgfSkpO1xuICB9XG4gIHJlbmRlckNoaWxkcmVuKCkge1xuICAgIGlmIChnZXRTbG90dGVkKHRoaXMuZWwpKSB7XG4gICAgICByZXR1cm4gKGgoXCJ1bFwiLCB7IGtleTogXCJkZWZhdWx0LXNsb3QtY29udGFpbmVyXCIgfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlzU2luZ2xlU2VsZWN0ID0gaXNTaW5nbGVMaWtlKHRoaXMuc2VsZWN0aW9uTW9kZSk7XG4gICAgY29uc3Qgc2hvd0RvdCA9IGlzU2luZ2xlU2VsZWN0ICYmICF0aGlzLmRpc2FibGVkO1xuICAgIGNvbnN0IGRlZmF1bHRJY29uID0gaXNTaW5nbGVTZWxlY3QgPyBcImRvdFwiIDogXCJjaGVja1wiO1xuICAgIGNvbnN0IGljb25QYXRoID0gdGhpcy5kaXNhYmxlZCA/IFwiXCIgOiBkZWZhdWx0SWNvbjtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgW0NTUy5sYWJlbF06IHRydWUsXG4gICAgICBbQ1NTLnNlbGVjdGVkXTogdGhpcy5zZWxlY3RlZCxcbiAgICAgIFtDU1MuYWN0aXZlXTogdGhpcy5hY3RpdmUsXG4gICAgICBbQ1NTLnNpbmdsZV06IGlzU2luZ2xlU2VsZWN0LFxuICAgIH07XG4gICAgY29uc3QgZGVwdGggPSBnZXREZXB0aCh0aGlzLmVsKTtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogYGNvbnRhaW5lciBzY2FsZS0tJHt0aGlzLnNjYWxlfWAsIHN0eWxlOiB7IFwiLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy1pbmRlbnQtbXVsdGlwbGllclwiOiBgJHtkZXB0aH1gIH0gfSwgaChcImxpXCIsIHsgY2xhc3M6IGNsYXNzZXMsIGlkOiB0aGlzLmd1aWQsIG9uQ2xpY2s6IHRoaXMuaXRlbUNsaWNrSGFuZGxlciB9LCB0aGlzLnJlbmRlclNlbGVjdEluZGljYXRvcihzaG93RG90LCBpY29uUGF0aCksIHRoaXMucmVuZGVySWNvbihpY29uUGF0aCksIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwidGl0bGVcIiB9LCB0aGlzLnRleHRMYWJlbCkpLCB0aGlzLnJlbmRlckNoaWxkcmVuKCkpKSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwic2VsZWN0ZWRcIjogW1wic2VsZWN0ZWRXYXRjaEhhbmRsZXJcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gY29tYm9ib3hJdGVtQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWNvbWJvYm94LWl0ZW1cIiwge1xuICAgIFwiZGlzYWJsZWRcIjogWzUxNl0sXG4gICAgXCJzZWxlY3RlZFwiOiBbMTU0MF0sXG4gICAgXCJhY3RpdmVcIjogWzUxNl0sXG4gICAgXCJhbmNlc3RvcnNcIjogWzEwNDBdLFxuICAgIFwiZ3VpZFwiOiBbNTEzXSxcbiAgICBcImljb25cIjogWzUxM10sXG4gICAgXCJpY29uRmxpcFJ0bFwiOiBbNTE2LCBcImljb24tZmxpcC1ydGxcIl0sXG4gICAgXCJ0ZXh0TGFiZWxcIjogWzUxMywgXCJ0ZXh0LWxhYmVsXCJdLFxuICAgIFwidmFsdWVcIjogWzhdLFxuICAgIFwiZmlsdGVyRGlzYWJsZWRcIjogWzUxNiwgXCJmaWx0ZXItZGlzYWJsZWRcIl0sXG4gICAgXCJzZWxlY3Rpb25Nb2RlXCI6IFs1MTMsIFwic2VsZWN0aW9uLW1vZGVcIl0sXG4gICAgXCJzY2FsZVwiOiBbMV1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1jb21ib2JveC1pdGVtXCIsIFwiY2FsY2l0ZS1pY29uXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWNvbWJvYm94LWl0ZW1cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBDb21ib2JveEl0ZW0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgQ29tYm9ib3hJdGVtIGFzIEMsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9