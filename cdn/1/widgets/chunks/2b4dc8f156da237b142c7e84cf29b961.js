"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-input-date-picker_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-input-date-picker.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-input-date-picker.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteInputDatePicker: () => (/* binding */ CalciteInputDatePicker),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.js */ "./node_modules/@esri/calcite-components/dist/components/date.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _floating_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./floating-ui.js */ "./node_modules/@esri/calcite-components/dist/components/floating-ui.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.js */ "./node_modules/@esri/calcite-components/dist/components/form.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _label2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./label2.js */ "./node_modules/@esri/calcite-components/dist/components/label2.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _openCloseComponent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./openCloseComponent.js */ "./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js");
/* harmony import */ var _date_picker_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./date-picker.js */ "./node_modules/@esri/calcite-components/dist/components/date-picker.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./focusTrapComponent.js */ "./node_modules/@esri/calcite-components/dist/components/focusTrapComponent.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _date_picker_day_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./date-picker-day.js */ "./node_modules/@esri/calcite-components/dist/components/date-picker-day.js");
/* harmony import */ var _date_picker_month_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./date-picker-month.js */ "./node_modules/@esri/calcite-components/dist/components/date-picker-month.js");
/* harmony import */ var _date_picker_month_header_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./date-picker-month-header.js */ "./node_modules/@esri/calcite-components/dist/components/date-picker-month-header.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _input_text_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./input-text.js */ "./node_modules/@esri/calcite-components/dist/components/input-text.js");
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./progress.js */ "./node_modules/@esri/calcite-components/dist/components/progress.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */























const CSS = {
  assistiveText: "assistive-text",
  menu: "menu-container",
  menuActive: "menu-container--active",
  toggleIcon: "toggle-icon",
};

/**
 * Specifies if an ISO string date (YYYY-MM-DD) has two digit year.
 *
 * @param {string} value
 * @returns {boolean}
 */
function isTwoDigitYear(value) {
  if (!value) {
    return false;
  }
  const { year } = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.d)(value);
  return Number(year) < 100;
}
/**
 * Returns a normalized year to current century from a given two digit year number.
 *
 * @param {number} twoDigitYear
 * @returns {string}
 */
function normalizeToCurrentCentury(twoDigitYear) {
  const currentYear = new Date().getFullYear();
  const normalizedYear = Math.floor(currentYear / 100) * 100 + twoDigitYear;
  return normalizedYear;
}

const inputDatePickerCss = ":host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:inline-block;inline-size:100%;overflow:visible;vertical-align:top;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host .menu-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host .menu-container[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}:host .menu-container[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}:host .menu-container[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}:host .menu-container[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}:host .menu-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([scale=s]){--calcite-toggle-spacing:0.5rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 1rem)}:host([scale=m]){--calcite-toggle-spacing:0.75rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 1.5rem)}:host([scale=l]){--calcite-toggle-spacing:1rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 2rem)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.calendar-picker-wrapper{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:translate3d(0, 0, 0)}.input-wrapper{position:relative}.toggle-icon{position:absolute;display:flex;cursor:pointer;align-items:center;inset-inline-end:0;inset-block:0;padding-inline:var(--calcite-toggle-spacing)}:host([range]) .input-container{display:flex}:host([range]) .input-wrapper{flex:1 1 auto}:host([range]) .horizontal-arrow-container{display:flex;align-items:center;border-width:1px;border-inline-start-width:0px;border-inline-end-width:0px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);padding-block:0px;padding-inline:0.25rem}:host([range][layout=vertical]) .input-wrapper{inline-size:100%}:host([range][layout=vertical]) .input-container{flex-direction:column;align-items:flex-start}:host([range][layout=vertical]) .calendar-picker-wrapper--end{transform:translate3d(0, 0, 0)}:host([range][layout=vertical]) .vertical-arrow-container{inset-block-start:1.5rem;position:absolute;z-index:var(--calcite-app-z-index);margin-inline:1px;background-color:var(--calcite-ui-foreground-1);padding-inline:0.625rem;inset-inline-start:0}.menu-container{--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.menu-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}.menu-container[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.menu-container[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.menu-container[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.menu-container[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.menu-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([open]) .menu-container{visibility:visible}.menu-container--active{visibility:visible}.input .calcite-input__wrapper{margin-block-start:0px}:host([range][layout=vertical][scale=m]) .vertical-arrow-container{inset-block-start:1.5rem;padding-inline-start:0.75rem}:host([range][layout=vertical][scale=m]) .vertical-arrow-container calcite-icon{block-size:0.75rem;inline-size:0.75rem;min-inline-size:0px}:host([range][layout=vertical][scale=l]) .vertical-arrow-container{inset-block-start:2.25rem;padding-inline:0.875rem}:host([range][layout=vertical][open]) .vertical-arrow-container{display:none}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}";

const InputDatePicker = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInputDatePickerChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.createEvent)(this, "calciteInputDatePickerChange", 6);
    this.calciteInputDatePickerBeforeClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.createEvent)(this, "calciteInputDatePickerBeforeClose", 6);
    this.calciteInputDatePickerClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.createEvent)(this, "calciteInputDatePickerClose", 6);
    this.calciteInputDatePickerBeforeOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.createEvent)(this, "calciteInputDatePickerBeforeOpen", 6);
    this.calciteInputDatePickerOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.createEvent)(this, "calciteInputDatePickerOpen", 6);
    this.calciteInternalInputInputHandler = (event) => {
      const target = event.target;
      const value = target.value;
      const parsedValue = this.parseNumerals(value);
      const formattedValue = this.formatNumerals(parsedValue);
      target.value = formattedValue;
      const { year } = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.a)(value, this.localeData);
      if (year && year.length < 4) {
        return;
      }
      const date = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.b)(value, this.localeData);
      if ((0,_date_js__WEBPACK_IMPORTED_MODULE_0__.i)(date, this.min, this.max)) {
        this.datePickerActiveDate = date;
      }
    };
    this.calciteInternalInputBlurHandler = () => {
      this.commitValue();
    };
    this.dialogId = `date-picker-dialog--${(0,_guid_js__WEBPACK_IMPORTED_MODULE_13__.g)()}`;
    this.focusOnOpen = false;
    this.lastBlurredInput = "none";
    this.userChangedValue = false;
    this.openTransitionProp = "opacity";
    this.valueAsDateChangedExternally = false;
    this.placeholderTextId = `calcite-input-date-picker-placeholder-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_13__.g)()}`;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.onInputWrapperClick = () => {
      if (this.range && this.lastBlurredInput !== "none" && this.open) ;
      else {
        this.open = !this.open;
      }
      this.lastBlurredInput = "none";
    };
    this.setFilteredPlacements = () => {
      const { el, flipPlacements } = this;
      this.filteredFlipPlacements = flipPlacements
        ? (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_2__.f)(flipPlacements, el)
        : null;
    };
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
    };
    this.setStartInput = (el) => {
      this.startInput = el;
    };
    this.setEndInput = (el) => {
      this.endInput = el;
    };
    this.deactivate = () => {
      this.open = false;
      this.lastBlurredInput = "none";
    };
    this.keyDownHandler = (event) => {
      const { defaultPrevented, key } = event;
      if (defaultPrevented) {
        return;
      }
      if (key === "Enter") {
        this.commitValue();
        if (this.shouldFocusRangeEnd()) {
          this.endInput?.setFocus();
        }
        else if (this.shouldFocusRangeStart()) {
          this.startInput?.setFocus();
        }
        if ((0,_form_js__WEBPACK_IMPORTED_MODULE_3__.s)(this)) {
          event.preventDefault();
          this.restoreInputFocus();
        }
      }
      else if (key === "ArrowDown") {
        this.open = true;
        this.focusOnOpen = true;
        event.preventDefault();
      }
      else if (key === "Escape") {
        this.open = false;
        event.preventDefault();
        this.restoreInputFocus();
      }
    };
    this.startInputFocus = () => {
      this.focusedInput = "start";
    };
    this.startEndInputFocus = (event) => {
      const blurredEl = event.relatedTarget;
      this.lastBlurredInput =
        blurredEl === this.startInput ? "start" : blurredEl === this.endInput ? "end" : "none";
    };
    this.endInputFocus = () => {
      this.focusedInput = "end";
    };
    this.setFloatingEl = (el) => {
      this.floatingEl = el;
      (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_2__.c)(this, this.referenceEl, this.floatingEl);
    };
    this.setStartWrapper = (el) => {
      this.startWrapper = el;
      this.setReferenceEl();
    };
    this.setEndWrapper = (el) => {
      this.endWrapper = el;
      this.setReferenceEl();
    };
    this.setDatePickerRef = (el) => {
      this.datePickerEl = el;
      (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_12__.c)(this, {
        focusTrapEl: el,
        focusTrapOptions: {
          initialFocus: false,
          setReturnFocus: false,
        },
      });
    };
    /**
     * Event handler for when the selected date changes
     *
     * @param event CalciteDatePicker custom change event
     */
    this.handleDateChange = (event) => {
      if (this.range) {
        return;
      }
      event.stopPropagation();
      this.setValue(event.target.valueAsDate);
      this.localizeInputValues();
      this.restoreInputFocus();
    };
    this.handleDateRangeChange = (event) => {
      if (!this.range) {
        return;
      }
      event.stopPropagation();
      const value = event.target.valueAsDate;
      this.setRangeValue(value);
      this.localizeInputValues();
      this.restoreInputFocus();
    };
    this.setInputValue = (newValue, input = "start") => {
      const inputEl = this[`${input}Input`];
      if (!inputEl) {
        return;
      }
      inputEl.value = newValue;
    };
    this.setRangeValue = (valueAsDate) => {
      if (!this.range) {
        return;
      }
      const { value: oldValue } = this;
      const oldValueIsArray = Array.isArray(oldValue);
      const valueIsArray = Array.isArray(valueAsDate);
      const newStartDate = valueIsArray ? valueAsDate[0] : null;
      let newStartDateISO = valueIsArray ? (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.c)(newStartDate) : "";
      if (newStartDateISO) {
        newStartDateISO = this.getNormalizedDate(newStartDateISO);
      }
      const newEndDate = valueIsArray ? valueAsDate[1] : null;
      let newEndDateISO = valueIsArray ? (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.c)(newEndDate) : "";
      if (newEndDateISO) {
        newEndDateISO = this.getNormalizedDate(newEndDateISO);
      }
      const newValue = newStartDateISO || newEndDateISO ? [newStartDateISO, newEndDateISO] : "";
      if (newValue === oldValue) {
        return;
      }
      this.userChangedValue = true;
      this.value = newValue;
      this.valueAsDate = newValue ? (0,_date_picker_js__WEBPACK_IMPORTED_MODULE_10__.g)(newValue) : undefined;
      const changeEvent = this.calciteInputDatePickerChange.emit();
      if (changeEvent && changeEvent.defaultPrevented) {
        this.value = oldValue;
        if (oldValueIsArray) {
          this.setInputValue(oldValue[0], "start");
          this.setInputValue(oldValue[1], "end");
        }
        else {
          this.value = oldValue;
          this.setInputValue(oldValue);
        }
      }
    };
    this.setValue = (value) => {
      if (this.range) {
        return;
      }
      const oldValue = this.value;
      let newValue = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.c)(value);
      newValue = this.getNormalizedDate(newValue);
      if (newValue === oldValue) {
        return;
      }
      this.userChangedValue = true;
      this.valueAsDate = newValue ? (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.e)(newValue) : undefined;
      this.value = newValue || "";
      const changeEvent = this.calciteInputDatePickerChange.emit();
      if (changeEvent.defaultPrevented) {
        this.value = oldValue;
        this.setInputValue(oldValue);
      }
    };
    this.commonDateSeparators = [".", "-", "/"];
    this.formatNumerals = (value) => value
      ? value
        .split("")
        .map((char) => this.commonDateSeparators?.includes(char)
        ? this.localeData?.separator
        : _key_js__WEBPACK_IMPORTED_MODULE_5__.n?.includes(char)
          ? _locale_js__WEBPACK_IMPORTED_MODULE_8__.n?.numberFormatter?.format(Number(char))
          : char)
        .join("")
      : "";
    this.parseNumerals = (value) => value
      ? value
        .split("")
        .map((char) => _key_js__WEBPACK_IMPORTED_MODULE_5__.n.includes(char) ? _locale_js__WEBPACK_IMPORTED_MODULE_8__.n.delocalize(char) : char)
        .join("")
      : "";
    this.disabled = false;
    this.focusTrapDisabled = false;
    this.form = undefined;
    this.readOnly = false;
    this.value = "";
    this.flipPlacements = undefined;
    this.headingLevel = undefined;
    this.valueAsDate = undefined;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.minAsDate = undefined;
    this.maxAsDate = undefined;
    this.min = undefined;
    this.max = undefined;
    this.open = false;
    this.name = undefined;
    this.numberingSystem = undefined;
    this.scale = "m";
    this.status = "idle";
    this.placement = _floating_ui_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.range = false;
    this.required = false;
    this.overlayPositioning = "absolute";
    this.proximitySelectionDisabled = false;
    this.layout = "horizontal";
    this.datePickerActiveDate = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.focusedInput = "start";
    this.localeData = undefined;
  }
  handleFocusTrapDisabled(focusTrapDisabled) {
    if (!this.open) {
      return;
    }
    focusTrapDisabled ? (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_12__.d)(this) : (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_12__.a)(this);
  }
  handleDisabledAndReadOnlyChange(value) {
    if (!value) {
      this.open = false;
    }
  }
  valueWatcher(newValue) {
    if (!this.userChangedValue) {
      let newValueAsDate;
      if (Array.isArray(newValue)) {
        newValueAsDate = (0,_date_picker_js__WEBPACK_IMPORTED_MODULE_10__.g)(newValue);
      }
      else if (newValue) {
        newValueAsDate = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.e)(newValue);
      }
      else {
        newValueAsDate = undefined;
      }
      if (!this.valueAsDateChangedExternally && newValueAsDate !== this.valueAsDate) {
        this.valueAsDate = newValueAsDate;
      }
      this.localizeInputValues();
    }
    this.userChangedValue = false;
  }
  valueAsDateWatcher(valueAsDate) {
    this.datePickerActiveDate = valueAsDate;
    const newValue = this.range && Array.isArray(valueAsDate)
      ? [(0,_date_js__WEBPACK_IMPORTED_MODULE_0__.c)(valueAsDate[0]), (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.c)(valueAsDate[1])]
      : (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.c)(valueAsDate);
    if (this.value !== newValue) {
      this.valueAsDateChangedExternally = true;
      this.value = newValue;
      this.valueAsDateChangedExternally = false;
    }
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements();
    this.reposition(true);
  }
  onMessagesChange() {
    /* wired up by t9n util */
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
  openHandler(value) {
    (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_9__.o)(this);
    if (this.disabled || this.readOnly) {
      this.open = false;
      return;
    }
    if (value) {
      this.reposition(true);
    }
  }
  overlayPositioningHandler() {
    this.reposition(true);
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  calciteDaySelectHandler() {
    if (this.shouldFocusRangeStart() || this.shouldFocusRangeEnd()) {
      return;
    }
    this.open = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    this.el.focus();
  }
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(delayed = false) {
    const { floatingEl, referenceEl, placement, overlayPositioning, filteredFlipPlacements } = this;
    return (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_2__.r)(this, {
      floatingEl,
      referenceEl,
      overlayPositioning,
      placement,
      flipPlacements: filteredFlipPlacements,
      type: "menu",
    }, delayed);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
    const { open } = this;
    open && this.openHandler(open);
    if (Array.isArray(this.value)) {
      this.valueAsDate = (0,_date_picker_js__WEBPACK_IMPORTED_MODULE_10__.g)(this.value);
    }
    else if (this.value) {
      try {
        this.valueAsDate = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.e)(this.value);
      }
      catch (error) {
        this.warnAboutInvalidValue(this.value);
        this.value = "";
      }
    }
    else if (this.range && this.valueAsDate) {
      this.setRangeValue(this.valueAsDate);
    }
    if (this.min) {
      this.minAsDate = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.e)(this.min);
    }
    if (this.max) {
      this.maxAsDate = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.e)(this.max);
    }
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_11__.c)(this);
    this.setFilteredPlacements();
    this.reposition(true);
    _locale_js__WEBPACK_IMPORTED_MODULE_8__.n.numberFormatOptions = {
      numberingSystem: this.numberingSystem,
      locale: this.effectiveLocale,
      useGrouping: false,
    };
    if (this.open) {
      (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_9__.o)(this);
    }
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_7__.a)(this);
    await Promise.all([this.loadLocaleData(), (0,_t9n_js__WEBPACK_IMPORTED_MODULE_11__.s)(this)]);
    this.onMinChanged(this.min);
    this.onMaxChanged(this.max);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_7__.s)(this);
    this.localizeInputValues();
    this.reposition(true);
  }
  disconnectedCallback() {
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_12__.d)(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, this.referenceEl, this.floatingEl);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_8__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_11__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_4__.u)(this);
  }
  render() {
    const { disabled, effectiveLocale, messages, numberingSystem, readOnly } = this;
    _locale_js__WEBPACK_IMPORTED_MODULE_8__.n.numberFormatOptions = {
      numberingSystem,
      locale: effectiveLocale,
      useGrouping: false,
    };
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.Host, { onBlur: this.deactivate, onKeyDown: this.keyDownHandler }, this.localeData && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.h)("div", { class: "input-container" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.h)("div", { class: "input-wrapper", onClick: this.onInputWrapperClick,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setStartWrapper }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.h)("calcite-input-text", { "aria-autocomplete": "none", "aria-controls": this.dialogId, "aria-describedby": this.placeholderTextId, "aria-expanded": (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.t)(this.open), "aria-haspopup": "dialog", class: `input ${this.layout === "vertical" && this.range ? `no-bottom-border` : ``}`, disabled: disabled, icon: "calendar", onCalciteInputTextInput: this.calciteInternalInputInputHandler, onCalciteInternalInputTextBlur: this.calciteInternalInputBlurHandler, onCalciteInternalInputTextFocus: this.startInputFocus, onFocus: this.startEndInputFocus, placeholder: this.localeData?.placeholder, readOnly: readOnly, role: "combobox", scale: this.scale, status: this.status,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setStartInput }), !this.readOnly && this.renderToggleIcon(this.open && this.focusedInput === "start"), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.h)("span", { "aria-hidden": "true", class: CSS.assistiveText, id: this.placeholderTextId }, "Date Format: ", this.localeData?.placeholder)), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.h)("div", { "aria-hidden": (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.t)(!this.open), "aria-label": messages.chooseDate, "aria-live": "polite", "aria-modal": "true", class: {
        [CSS.menu]: true,
        [CSS.menuActive]: this.open,
      }, id: this.dialogId, role: "dialog",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setFloatingEl }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.h)("div", { class: {
        ["calendar-picker-wrapper"]: true,
        ["calendar-picker-wrapper--end"]: this.focusedInput === "end",
        [_floating_ui_js__WEBPACK_IMPORTED_MODULE_2__.F.animation]: true,
        [_floating_ui_js__WEBPACK_IMPORTED_MODULE_2__.F.animationActive]: this.open,
      },
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setTransitionEl }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.h)("calcite-date-picker", { activeDate: this.datePickerActiveDate, activeRange: this.focusedInput, headingLevel: this.headingLevel, max: this.max, maxAsDate: this.maxAsDate, messageOverrides: this.messageOverrides, min: this.min, minAsDate: this.minAsDate, numberingSystem: numberingSystem, onCalciteDatePickerChange: this.handleDateChange, onCalciteDatePickerRangeChange: this.handleDateRangeChange, proximitySelectionDisabled: this.proximitySelectionDisabled, range: this.range, scale: this.scale, tabIndex: this.open ? undefined : -1, valueAsDate: this.valueAsDate,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setDatePickerRef }))), this.range && this.layout === "horizontal" && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.h)("div", { class: "horizontal-arrow-container" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.h)("calcite-icon", { flipRtl: true, icon: "arrow-right", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_14__.g)(this.scale) }))), this.range && this.layout === "vertical" && this.scale !== "s" && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.h)("div", { class: "vertical-arrow-container" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.h)("calcite-icon", { icon: "arrow-down", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_14__.g)(this.scale) }))), this.range && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.h)("div", { class: "input-wrapper", onClick: this.onInputWrapperClick,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setEndWrapper }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.h)("calcite-input-text", { "aria-autocomplete": "none", "aria-controls": this.dialogId, "aria-expanded": (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.t)(this.open), "aria-haspopup": "dialog", class: {
        input: true,
        "border-top-color-one": this.layout === "vertical" && this.range,
      }, disabled: disabled, icon: "calendar", onCalciteInputTextInput: this.calciteInternalInputInputHandler, onCalciteInternalInputTextBlur: this.calciteInternalInputBlurHandler, onCalciteInternalInputTextFocus: this.endInputFocus, onFocus: this.startEndInputFocus, placeholder: this.localeData?.placeholder, readOnly: readOnly, role: "combobox", scale: this.scale, status: this.status,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setEndInput }), !this.readOnly && this.renderToggleIcon(this.open && this.focusedInput === "end"))))), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.h)(_form_js__WEBPACK_IMPORTED_MODULE_3__.H, { component: this })));
  }
  renderToggleIcon(open) {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.h)("span", { class: CSS.toggleIcon }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.h)("calcite-icon", { icon: open ? "chevron-up" : "chevron-down", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_14__.g)(this.scale) })));
  }
  setReferenceEl() {
    const { focusedInput, layout, endWrapper, startWrapper } = this;
    this.referenceEl =
      focusedInput === "end" || layout === "vertical"
        ? endWrapper || startWrapper
        : startWrapper || endWrapper;
    requestAnimationFrame(() => (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_2__.c)(this, this.referenceEl, this.floatingEl));
  }
  onLabelClick() {
    this.setFocus();
  }
  onBeforeOpen() {
    this.calciteInputDatePickerBeforeOpen.emit();
  }
  onOpen() {
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_12__.a)(this, {
      onActivate: () => {
        if (this.focusOnOpen) {
          this.datePickerEl.setFocus();
          this.focusOnOpen = false;
        }
      },
    });
    this.calciteInputDatePickerOpen.emit();
  }
  onBeforeClose() {
    this.calciteInputDatePickerBeforeClose.emit();
  }
  onClose() {
    this.calciteInputDatePickerClose.emit();
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_12__.d)(this);
    this.restoreInputFocus();
    this.focusOnOpen = false;
    this.datePickerEl.reset();
  }
  commitValue() {
    const { focusedInput, value } = this;
    const focusedInputName = `${focusedInput}Input`;
    const focusedInputValue = this[focusedInputName].value;
    const date = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.b)(focusedInputValue, this.localeData);
    const dateAsISO = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.c)(date);
    const valueIsArray = Array.isArray(value);
    if (this.range) {
      const focusedInputValueIndex = focusedInput === "start" ? 0 : 1;
      if (valueIsArray) {
        if (dateAsISO === value[focusedInputValueIndex]) {
          return;
        }
        if (date) {
          this.setRangeValue([
            focusedInput === "start" ? date : (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.e)(value[0]),
            focusedInput === "end" ? date : (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.e)(value[1]),
          ]);
          this.localizeInputValues();
        }
        else {
          this.setRangeValue([
            focusedInput === "end" && (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.e)(value[0]),
            focusedInput === "start" && (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.e)(value[1]),
          ]);
        }
      }
      else {
        if (date) {
          this.setRangeValue([
            focusedInput === "start" ? date : (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.e)(value[0]),
            focusedInput === "end" ? date : (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.e)(value[1]),
          ]);
          this.localizeInputValues();
        }
      }
    }
    else {
      if (dateAsISO === value) {
        return;
      }
      this.setValue(date);
      this.localizeInputValues();
    }
  }
  async loadLocaleData() {
    if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_21__.Build.isBrowser) {
      return;
    }
    _locale_js__WEBPACK_IMPORTED_MODULE_8__.n.numberFormatOptions = {
      numberingSystem: this.numberingSystem,
      locale: this.effectiveLocale,
      useGrouping: false,
    };
    this.localeData = await (0,_date_picker_js__WEBPACK_IMPORTED_MODULE_10__.a)(this.effectiveLocale);
    this.localizeInputValues();
  }
  shouldFocusRangeStart() {
    const startValue = this.value[0];
    const endValue = this.value[1];
    return !!(endValue && !startValue && this.focusedInput === "end" && this.startInput);
  }
  shouldFocusRangeEnd() {
    const startValue = this.value[0];
    const endValue = this.value[1];
    return !!(startValue && !endValue && this.focusedInput === "start" && this.endInput);
  }
  restoreInputFocus() {
    if (!this.range) {
      this.startInput.setFocus();
      return;
    }
    const focusedInput = this.focusedInput === "start" ? this.startInput : this.endInput;
    focusedInput.setFocus();
  }
  localizeInputValues() {
    const date = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.f)((this.range
      ? (Array.isArray(this.valueAsDate) && this.valueAsDate[0]) || undefined
      : this.valueAsDate), this.minAsDate, this.maxAsDate);
    const endDate = this.range
      ? (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.f)((Array.isArray(this.valueAsDate) && this.valueAsDate[1]) || undefined, this.minAsDate, this.maxAsDate)
      : null;
    const formattingOptions = {
      // we explicitly set numberingSystem to prevent the browser-inferred value
      // see https://github.com/Esri/calcite-design-system/issues/3079#issuecomment-1168964195 for more info
      numberingSystem: _locale_js__WEBPACK_IMPORTED_MODULE_8__.a,
    };
    const localizedDate = date && this.formatNumerals(date.toLocaleDateString(this.effectiveLocale, formattingOptions));
    const localizedEndDate = endDate &&
      this.formatNumerals(endDate.toLocaleDateString(this.effectiveLocale, formattingOptions));
    this.setInputValue(localizedDate ?? "", "start");
    this.setInputValue((this.range && localizedEndDate) ?? "", "end");
  }
  warnAboutInvalidValue(value) {
    console.warn(`The specified value "${value}" does not conform to the required format, "YYYY-MM-DD".`);
  }
  getNormalizedDate(value) {
    if (!value) {
      return "";
    }
    if (!isTwoDigitYear(value)) {
      return value;
    }
    const { day, month, year } = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.d)(value);
    const normalizedYear = normalizeToCurrentCentury(Number(year));
    return `${normalizedYear}-${month}-${day}`;
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "focusTrapDisabled": ["handleFocusTrapDisabled"],
    "disabled": ["handleDisabledAndReadOnlyChange"],
    "readOnly": ["handleDisabledAndReadOnlyChange"],
    "value": ["valueWatcher"],
    "valueAsDate": ["valueAsDateWatcher"],
    "flipPlacements": ["flipPlacementsHandler"],
    "messageOverrides": ["onMessagesChange"],
    "min": ["onMinChanged"],
    "max": ["onMaxChanged"],
    "open": ["openHandler"],
    "overlayPositioning": ["overlayPositioningHandler"],
    "layout": ["setReferenceEl"],
    "focusedInput": ["setReferenceEl"],
    "effectiveLocale": ["loadLocaleData"]
  }; }
  static get style() { return inputDatePickerCss; }
}, [17, "calcite-input-date-picker", {
    "disabled": [516],
    "focusTrapDisabled": [516, "focus-trap-disabled"],
    "form": [513],
    "readOnly": [516, "read-only"],
    "value": [1025],
    "flipPlacements": [16],
    "headingLevel": [514, "heading-level"],
    "valueAsDate": [1040],
    "messageOverrides": [1040],
    "messages": [1040],
    "minAsDate": [1040],
    "maxAsDate": [1040],
    "min": [1],
    "max": [1],
    "open": [1540],
    "name": [513],
    "numberingSystem": [513, "numbering-system"],
    "scale": [513],
    "status": [513],
    "placement": [513],
    "range": [516],
    "required": [516],
    "overlayPositioning": [513, "overlay-positioning"],
    "proximitySelectionDisabled": [4, "proximity-selection-disabled"],
    "layout": [513],
    "datePickerActiveDate": [32],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "focusedInput": [32],
    "localeData": [32],
    "setFocus": [64],
    "reposition": [64]
  }, [[0, "calciteDaySelect", "calciteDaySelectHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-input-date-picker", "calcite-date-picker", "calcite-date-picker-day", "calcite-date-picker-month", "calcite-date-picker-month-header", "calcite-icon", "calcite-input-text", "calcite-progress"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-input-date-picker":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, InputDatePicker);
      }
      break;
    case "calcite-date-picker":
      if (!customElements.get(tagName)) {
        (0,_date_picker_js__WEBPACK_IMPORTED_MODULE_10__.d)();
      }
      break;
    case "calcite-date-picker-day":
      if (!customElements.get(tagName)) {
        (0,_date_picker_day_js__WEBPACK_IMPORTED_MODULE_15__.d)();
      }
      break;
    case "calcite-date-picker-month":
      if (!customElements.get(tagName)) {
        (0,_date_picker_month_js__WEBPACK_IMPORTED_MODULE_16__.d)();
      }
      break;
    case "calcite-date-picker-month-header":
      if (!customElements.get(tagName)) {
        (0,_date_picker_month_header_js__WEBPACK_IMPORTED_MODULE_17__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_18__.d)();
      }
      break;
    case "calcite-input-text":
      if (!customElements.get(tagName)) {
        (0,_input_text_js__WEBPACK_IMPORTED_MODULE_19__.d)();
      }
      break;
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        (0,_progress_js__WEBPACK_IMPORTED_MODULE_20__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteInputDatePicker = InputDatePicker;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/label2.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/label2.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ labelDisconnectedEvent),
/* harmony export */   c: () => (/* binding */ connectLabel),
/* harmony export */   d: () => (/* binding */ disconnectLabel),
/* harmony export */   g: () => (/* binding */ getLabelText),
/* harmony export */   l: () => (/* binding */ labelConnectedEvent)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


/**
 * Exported for testing purposes only
 *
 * @internal
 */
const labelClickEvent = "calciteInternalLabelClick";
const labelConnectedEvent = "calciteInternalLabelConnected";
const labelDisconnectedEvent = "calciteInternalLabelDisconnected";
const labelTagName = "calcite-label";
const labelToLabelables = new WeakMap();
const onLabelClickMap = new WeakMap();
const onLabelConnectedMap = new WeakMap();
const onLabelDisconnectedMap = new WeakMap();
const unlabeledComponents = new WeakSet();
const findLabelForComponent = (componentEl) => {
  const { id } = componentEl;
  const forLabel = id && (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.q)(componentEl, { selector: `${labelTagName}[for="${id}"]` });
  if (forLabel) {
    return forLabel;
  }
  const parentLabel = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.c)(componentEl, labelTagName);
  if (!parentLabel ||
    // labelable components within other custom elements are not considered labelable
    hasAncestorCustomElements(parentLabel, componentEl)) {
    return null;
  }
  return parentLabel;
};
function hasAncestorCustomElements(label, componentEl) {
  let traversedElements;
  const customElementAncestorCheckEventType = "custom-element-ancestor-check";
  const listener = (event) => {
    event.stopImmediatePropagation();
    const composedPath = event.composedPath();
    traversedElements = composedPath.slice(composedPath.indexOf(componentEl), composedPath.indexOf(label));
  };
  label.addEventListener(customElementAncestorCheckEventType, listener, { once: true });
  componentEl.dispatchEvent(new CustomEvent(customElementAncestorCheckEventType, { composed: true, bubbles: true }));
  label.removeEventListener(customElementAncestorCheckEventType, listener);
  const ancestorCustomElements = traversedElements
    .filter((el) => el !== componentEl && el !== label)
    .filter((el) => el.tagName?.includes("-"));
  return ancestorCustomElements.length > 0;
}
/**
 * Helper to set up label interactions on connectedCallback.
 *
 * @param component
 */
function connectLabel(component) {
  const labelEl = findLabelForComponent(component.el);
  if ((onLabelClickMap.has(labelEl) && labelEl === component.labelEl) ||
    (!labelEl && unlabeledComponents.has(component))) {
    return;
  }
  const boundOnLabelDisconnected = onLabelDisconnected.bind(component);
  if (labelEl) {
    component.labelEl = labelEl;
    const labelables = labelToLabelables.get(labelEl) || [];
    labelables.push(component);
    labelToLabelables.set(labelEl, labelables.sort(sortByDOMOrder));
    if (!onLabelClickMap.has(component.labelEl)) {
      onLabelClickMap.set(component.labelEl, onLabelClick);
      component.labelEl.addEventListener(labelClickEvent, onLabelClick);
    }
    unlabeledComponents.delete(component);
    document.removeEventListener(labelConnectedEvent, onLabelConnectedMap.get(component));
    onLabelDisconnectedMap.set(component, boundOnLabelDisconnected);
    document.addEventListener(labelDisconnectedEvent, boundOnLabelDisconnected);
  }
  else if (!unlabeledComponents.has(component)) {
    boundOnLabelDisconnected();
    document.removeEventListener(labelDisconnectedEvent, onLabelDisconnectedMap.get(component));
  }
}
/**
 * Helper to tear down label interactions on disconnectedCallback on labelable components.
 *
 * @param component
 */
function disconnectLabel(component) {
  unlabeledComponents.delete(component);
  document.removeEventListener(labelConnectedEvent, onLabelConnectedMap.get(component));
  document.removeEventListener(labelDisconnectedEvent, onLabelDisconnectedMap.get(component));
  onLabelConnectedMap.delete(component);
  onLabelDisconnectedMap.delete(component);
  if (!component.labelEl) {
    return;
  }
  const labelables = labelToLabelables.get(component.labelEl);
  if (labelables.length === 1) {
    component.labelEl.removeEventListener(labelClickEvent, onLabelClickMap.get(component.labelEl));
    onLabelClickMap.delete(component.labelEl);
  }
  labelToLabelables.set(component.labelEl, labelables.filter((labelable) => labelable !== component).sort(sortByDOMOrder));
  component.labelEl = null;
}
function sortByDOMOrder(a, b) {
  return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.y)(a.el, b.el) ? -1 : 1;
}
/**
 * Helper to get the label text from a component.
 *
 * @param component
 */
function getLabelText(component) {
  return component.label || component.labelEl?.textContent?.trim() || "";
}
function onLabelClick(event) {
  const labelClickTarget = event.detail.sourceEvent.target;
  const labelables = labelToLabelables.get(this);
  const clickedLabelable = labelables.find((labelable) => labelable.el === labelClickTarget);
  const labelableChildClicked = labelables.includes(clickedLabelable);
  if (labelableChildClicked) {
    // no need to forward click as labelable will receive focus
    return;
  }
  const firstLabelable = labelables[0];
  if (firstLabelable.disabled) {
    return;
  }
  firstLabelable.onLabelClick(event);
}
function onLabelConnected() {
  if (unlabeledComponents.has(this)) {
    connectLabel(this);
  }
}
function onLabelDisconnected() {
  unlabeledComponents.add(this);
  const boundOnLabelConnected = onLabelConnectedMap.get(this) || onLabelConnected.bind(this);
  onLabelConnectedMap.set(this, boundOnLabelConnected);
  document.addEventListener(labelConnectedEvent, boundOnLabelConnected);
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMmI0ZGM4ZjE1NmRhMjM3YjE0MmM3ZTg0Y2YyOWI5NjEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzSDtBQUNpRTtBQUN6STtBQUNvSTtBQUNyRTtBQUNNO0FBQ3hFO0FBQzJCO0FBQ3dDO0FBQ3lCO0FBQzdEO0FBQ2tDO0FBQ2Y7QUFDcUI7QUFDNUU7QUFDYTtBQUNlO0FBQ0U7QUFDTztBQUNwQjtBQUNNO0FBQ0Y7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE9BQU8sRUFBRSwyQ0FBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQyx5QkFBeUIsa0NBQWtDLGtDQUFrQyw4QkFBOEIseUNBQXlDLHVCQUF1Qix1Q0FBdUMsbUNBQW1DLDhCQUE4QiwrQkFBK0IsaUNBQWlDLGlDQUFpQyxrQkFBa0IsZUFBZSx5QkFBeUIsaUJBQWlCLDJDQUEyQyxtREFBbUQsb0JBQW9CLE1BQU0sa0JBQWtCLHFCQUFxQixpQkFBaUIsaUJBQWlCLG1CQUFtQixzQkFBc0IsOEJBQThCLHVHQUF1RyxnREFBZ0Qsa0JBQWtCLGlEQUFpRCxtREFBbUQsVUFBVSwwQ0FBMEMsbUNBQW1DLHNCQUFzQix3RUFBd0UsMkJBQTJCLHFFQUFxRSwwQkFBMEIsc0VBQXNFLDBCQUEwQix1RUFBdUUsMkJBQTJCLHdFQUF3RSxVQUFVLHVCQUF1QixpQkFBaUIsZ0NBQWdDLGtHQUFrRyxpQkFBaUIsaUNBQWlDLG9HQUFvRyxpQkFBaUIsOEJBQThCLGtHQUFrRyx5R0FBeUcsVUFBVSx5QkFBeUIsc0JBQXNCLDhCQUE4Qix1R0FBdUcsK0JBQStCLGVBQWUsa0JBQWtCLGFBQWEsa0JBQWtCLGFBQWEsZUFBZSxtQkFBbUIsbUJBQW1CLGNBQWMsNkNBQTZDLGdDQUFnQyxhQUFhLDhCQUE4QixjQUFjLDJDQUEyQyxhQUFhLG1CQUFtQixpQkFBaUIsOEJBQThCLDRCQUE0QixtQkFBbUIsNENBQTRDLDhDQUE4QyxrQkFBa0IsdUJBQXVCLCtDQUErQyxpQkFBaUIsaURBQWlELHNCQUFzQix1QkFBdUIsOERBQThELCtCQUErQiwwREFBMEQseUJBQXlCLGtCQUFrQixtQ0FBbUMsa0JBQWtCLGdEQUFnRCx3QkFBd0IscUJBQXFCLGdCQUFnQixrRUFBa0UsY0FBYyxrQkFBa0IsMkNBQTJDLGtCQUFrQiwwQ0FBMEMsa0JBQWtCLGlEQUFpRCxtREFBbUQsVUFBVSwwQ0FBMEMsbUNBQW1DLHNCQUFzQixrRUFBa0UsMkJBQTJCLCtEQUErRCwwQkFBMEIsZ0VBQWdFLDBCQUEwQixpRUFBaUUsMkJBQTJCLGtFQUFrRSxVQUFVLHVCQUF1Qiw4QkFBOEIsbUJBQW1CLHdCQUF3QixtQkFBbUIsK0JBQStCLHVCQUF1QixtRUFBbUUseUJBQXlCLDZCQUE2QixnRkFBZ0YsbUJBQW1CLG9CQUFvQixvQkFBb0IsbUVBQW1FLDBCQUEwQix3QkFBd0IsZ0VBQWdFLGFBQWEseUNBQXlDLG9CQUFvQixxQkFBcUIsd0JBQXdCLHFCQUFxQiw2QkFBNkIsbUJBQW1CLDBCQUEwQixtQ0FBbUMsc0JBQXNCLGdCQUFnQixrQkFBa0IsZ0JBQWdCLGVBQWUsVUFBVSxZQUFZLGdCQUFnQixzQkFBc0IsbUJBQW1CLGVBQWUsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUUzMEssc0NBQXNDLDJGQUFrQixlQUFlLGdGQUFXO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG9GQUFXO0FBQ25ELDZDQUE2QyxvRkFBVztBQUN4RCx1Q0FBdUMsb0ZBQVc7QUFDbEQsNENBQTRDLG9GQUFXO0FBQ3ZELHNDQUFzQyxvRkFBVztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU8sRUFBRSwyQ0FBNEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJDQUF1QjtBQUMxQyxVQUFVLDJDQUFPO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyw0Q0FBSSxHQUFHO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsNENBQUksR0FBRztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMscUJBQXFCO0FBQ25DO0FBQ0EsVUFBVSxrREFBd0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHdCQUF3QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyQ0FBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sa0RBQWlCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBEQUFnQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixNQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsa0JBQWtCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyQ0FBUztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QywyQ0FBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbURBQW1CO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDJDQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxzQ0FBVTtBQUNwQixZQUFZLHlDQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0NBQVUsa0JBQWtCLHlDQUFxQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOENBQW9CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwREFBbUIsU0FBUywwREFBaUI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbURBQW1CO0FBQzVDO0FBQ0E7QUFDQSx5QkFBeUIsMkNBQVc7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMkNBQVMsa0JBQWtCLDJDQUFTO0FBQzdDLFFBQVEsMkNBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJDQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJDQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQTBCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtDQUFrQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRkFBaUY7QUFDN0YsV0FBVyxrREFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFrQjtBQUN0QixJQUFJLDZDQUFnQjtBQUNwQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBLHlCQUF5QixtREFBbUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDJDQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJDQUFXO0FBQ2xDO0FBQ0E7QUFDQSx1QkFBdUIsMkNBQVc7QUFDbEM7QUFDQSxJQUFJLDZDQUFZO0FBQ2hCLElBQUksMkNBQVc7QUFDZixJQUFJLDJDQUFlO0FBQ25CO0FBQ0E7QUFDQSxJQUFJLHlDQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5REFBMEI7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBc0I7QUFDMUIsOENBQThDLDJDQUFhO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFtQjtBQUN2QixJQUFJLGtEQUFxQjtBQUN6QixJQUFJLDZDQUFlO0FBQ25CLElBQUksMkNBQWM7QUFDbEIsSUFBSSxrREFBb0I7QUFDeEIsSUFBSSw2Q0FBbUI7QUFDdkIsSUFBSSwyQ0FBa0I7QUFDdEI7QUFDQTtBQUNBLElBQUksa0RBQXFCO0FBQ3pCO0FBQ0E7QUFDQSxZQUFZLGlFQUFpRTtBQUM3RSxJQUFJLHlDQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMEVBQUMsQ0FBQyx5RUFBSSxJQUFJLHlEQUF5RCxzQkFBc0IsMEVBQUMsVUFBVSwwQkFBMEIsRUFBRSwwRUFBQyxVQUFVO0FBQ3ZKO0FBQ0EsaUNBQWlDLEVBQUUsMEVBQUMseUJBQXlCLDBIQUEwSCwwQ0FBYSx3REFBd0QsbUVBQW1FO0FBQy9UO0FBQ0EsK0JBQStCLHdGQUF3RiwwRUFBQyxXQUFXLDZFQUE2RSxtREFBbUQsMEVBQUMsVUFBVSxlQUFlLDBDQUFhO0FBQzFTO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSwrQkFBK0IsRUFBRSwwRUFBQyxVQUFVO0FBQzVDO0FBQ0E7QUFDQSxTQUFTLDhDQUFXO0FBQ3BCLFNBQVMsOENBQVc7QUFDcEIsT0FBTztBQUNQO0FBQ0EsaUNBQWlDLEVBQUUsMEVBQUMsMEJBQTBCO0FBQzlEO0FBQ0Esa0NBQWtDLG9EQUFvRCwwRUFBQyxVQUFVLHFDQUFxQyxFQUFFLDBFQUFDLG1CQUFtQiwyQ0FBMkMsaURBQVksY0FBYyx3RUFBd0UsMEVBQUMsVUFBVSxtQ0FBbUMsRUFBRSwwRUFBQyxtQkFBbUIsMkJBQTJCLGlEQUFZLGNBQWMsb0JBQW9CLDBFQUFDLFVBQVU7QUFDamM7QUFDQSwrQkFBK0IsRUFBRSwwRUFBQyx5QkFBeUIsOEVBQThFLDBDQUFhO0FBQ3RKO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSw2QkFBNkIsMEZBQTBGLDBFQUFDLENBQUMsdUNBQW1CLElBQUksaUJBQWlCO0FBQ2pLO0FBQ0E7QUFDQSxZQUFZLDBFQUFDLFdBQVcsdUJBQXVCLEVBQUUsMEVBQUMsbUJBQW1CLG1EQUFtRCxpREFBWSxjQUFjO0FBQ2xKO0FBQ0E7QUFDQSxZQUFZLGlEQUFpRDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrREFBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQWlCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBbUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0JBQXNCO0FBQ2xDLGdDQUFnQyxhQUFhO0FBQzdDO0FBQ0EsaUJBQWlCLDJDQUF1QjtBQUN4QyxzQkFBc0IsMkNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDJDQUFXO0FBQ3pELDRDQUE0QywyQ0FBVztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDJDQUFXO0FBQ2pELHdDQUF3QywyQ0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsMkNBQVc7QUFDekQsNENBQTRDLDJDQUFXO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDBFQUFLO0FBQ2Q7QUFDQTtBQUNBLElBQUkseUNBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1EQUFhO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwyQ0FBYTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJDQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlDQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE1BQU07QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUJBQW1CLEVBQUUsMkNBQWdCO0FBQ2pEO0FBQ0EsY0FBYyxlQUFlLEdBQUcsTUFBTSxHQUFHLElBQUk7QUFDN0M7QUFDQSxnQ0FBZ0M7QUFDaEMsNEJBQTRCO0FBQzVCLGFBQWE7QUFDYiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdFQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNENBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrREFBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdEQUFxQjtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFdUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbnhCdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5Rzs7QUFFekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFLO0FBQ2YseUJBQXlCLDBDQUFpQixnQkFBZ0IsYUFBYSxhQUFhLFFBQVEsR0FBRyxLQUFLO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwQ0FBaUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLFlBQVk7QUFDdEYsbUZBQW1GLCtCQUErQjtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDBDQUFRO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtaW5wdXQtZGF0ZS1waWNrZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2xhYmVsMi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgSG9zdCwgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRhdGVQYXJ0c0Zyb21JU08sIGEgYXMgZGF0ZVBhcnRzRnJvbUxvY2FsaXplZFN0cmluZywgYiBhcyBkYXRlRnJvbUxvY2FsaXplZFN0cmluZywgaSBhcyBpblJhbmdlLCBjIGFzIGRhdGVUb0lTTywgZSBhcyBkYXRlRnJvbUlTTywgZiBhcyBkYXRlRnJvbVJhbmdlIH0gZnJvbSAnLi9kYXRlLmpzJztcbmltcG9ydCB7IHQgYXMgdG9BcmlhQm9vbGVhbiB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGYgYXMgZmlsdGVyQ29tcHV0ZWRQbGFjZW1lbnRzLCBjIGFzIGNvbm5lY3RGbG9hdGluZ1VJLCBkIGFzIGRlZmF1bHRNZW51UGxhY2VtZW50LCByIGFzIHJlcG9zaXRpb24sIGEgYXMgZGlzY29ubmVjdEZsb2F0aW5nVUksIEYgYXMgRmxvYXRpbmdDU1MgfSBmcm9tICcuL2Zsb2F0aW5nLXVpLmpzJztcbmltcG9ydCB7IHMgYXMgc3VibWl0Rm9ybSwgYyBhcyBjb25uZWN0Rm9ybSwgZCBhcyBkaXNjb25uZWN0Rm9ybSwgSCBhcyBIaWRkZW5Gb3JtSW5wdXRTbG90IH0gZnJvbSAnLi9mb3JtLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLmpzJztcbmltcG9ydCB7IG4gYXMgbnVtYmVyS2V5cyB9IGZyb20gJy4va2V5LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExhYmVsLCBkIGFzIGRpc2Nvbm5lY3RMYWJlbCB9IGZyb20gJy4vbGFiZWwyLmpzJztcbmltcG9ydCB7IGMgYXMgY29tcG9uZW50Rm9jdXNhYmxlLCBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS5qcyc7XG5pbXBvcnQgeyBuIGFzIG51bWJlclN0cmluZ0Zvcm1hdHRlciwgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQsIGEgYXMgZGVmYXVsdE51bWJlcmluZ1N5c3RlbSB9IGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCB7IG8gYXMgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQgfSBmcm9tICcuL29wZW5DbG9zZUNvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFZhbHVlQXNEYXRlUmFuZ2UsIGEgYXMgZ2V0TG9jYWxlRGF0YSwgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDggfSBmcm9tICcuL2RhdGUtcGlja2VyLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzIH0gZnJvbSAnLi90OW4uanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Rm9jdXNUcmFwLCBkIGFzIGRlYWN0aXZhdGVGb2N1c1RyYXAsIGEgYXMgYWN0aXZhdGVGb2N1c1RyYXAgfSBmcm9tICcuL2ZvY3VzVHJhcENvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRJY29uU2NhbGUgfSBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNyB9IGZyb20gJy4vZGF0ZS1waWNrZXItZGF5LmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ2IH0gZnJvbSAnLi9kYXRlLXBpY2tlci1tb250aC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNSB9IGZyb20gJy4vZGF0ZS1waWNrZXItbW9udGgtaGVhZGVyLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0IH0gZnJvbSAnLi9pY29uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQzIH0gZnJvbSAnLi9pbnB1dC10ZXh0LmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9wcm9ncmVzcy5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgYXNzaXN0aXZlVGV4dDogXCJhc3Npc3RpdmUtdGV4dFwiLFxuICBtZW51OiBcIm1lbnUtY29udGFpbmVyXCIsXG4gIG1lbnVBY3RpdmU6IFwibWVudS1jb250YWluZXItLWFjdGl2ZVwiLFxuICB0b2dnbGVJY29uOiBcInRvZ2dsZS1pY29uXCIsXG59O1xuXG4vKipcbiAqIFNwZWNpZmllcyBpZiBhbiBJU08gc3RyaW5nIGRhdGUgKFlZWVktTU0tREQpIGhhcyB0d28gZGlnaXQgeWVhci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1R3b0RpZ2l0WWVhcih2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHsgeWVhciB9ID0gZGF0ZVBhcnRzRnJvbUlTTyh2YWx1ZSk7XG4gIHJldHVybiBOdW1iZXIoeWVhcikgPCAxMDA7XG59XG4vKipcbiAqIFJldHVybnMgYSBub3JtYWxpemVkIHllYXIgdG8gY3VycmVudCBjZW50dXJ5IGZyb20gYSBnaXZlbiB0d28gZGlnaXQgeWVhciBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHR3b0RpZ2l0WWVhclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplVG9DdXJyZW50Q2VudHVyeSh0d29EaWdpdFllYXIpIHtcbiAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IG5vcm1hbGl6ZWRZZWFyID0gTWF0aC5mbG9vcihjdXJyZW50WWVhciAvIDEwMCkgKiAxMDAgKyB0d29EaWdpdFllYXI7XG4gIHJldHVybiBub3JtYWxpemVkWWVhcjtcbn1cblxuY29uc3QgaW5wdXREYXRlUGlja2VyQ3NzID0gXCI6aG9zdHstLWNhbGNpdGUtaWNvbi1zaXplOjFyZW07LS1jYWxjaXRlLXNwYWNpbmctZWlnaHRoOjAuMTI1cmVtOy0tY2FsY2l0ZS1zcGFjaW5nLXF1YXJ0ZXI6MC4yNXJlbTstLWNhbGNpdGUtc3BhY2luZy1oYWxmOjAuNXJlbTstLWNhbGNpdGUtc3BhY2luZy10aHJlZS1xdWFydGVyczowLjc1cmVtOy0tY2FsY2l0ZS1zcGFjaW5nOjFyZW07LS1jYWxjaXRlLXNwYWNpbmctcGx1cy1xdWFydGVyOjEuMjVyZW07LS1jYWxjaXRlLXNwYWNpbmctcGx1cy1oYWxmOjEuNXJlbTstLWNhbGNpdGUtc3BhY2luZy1kb3VibGU6MnJlbTstLWNhbGNpdGUtbWVudS1taW4td2lkdGg6MTByZW07LS1jYWxjaXRlLWhlYWRlci1taW4taGVpZ2h0OjNyZW07LS1jYWxjaXRlLWZvb3Rlci1taW4taGVpZ2h0OjNyZW19Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7aW5saW5lLXNpemU6MTAwJTtvdmVyZmxvdzp2aXNpYmxlO3ZlcnRpY2FsLWFsaWduOnRvcDstLXR3LXNoYWRvdzowIDAgIzAwMDA7LS10dy1zaGFkb3ctY29sb3JlZDowIDAgIzAwMDA7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfTpob3N0IC5tZW51LWNvbnRhaW5lciAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uKTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSwgdmlzaWJpbGl0eSwgb3BhY2l0eTtvcGFjaXR5OjA7Ym94LXNoYWRvdzowIDAgMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KTtib3JkZXItcmFkaXVzOjAuMjVyZW19Omhvc3QgLm1lbnUtY29udGFpbmVyW2RhdGEtcGxhY2VtZW50Xj1ib3R0b21dIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTVweCl9Omhvc3QgLm1lbnUtY29udGFpbmVyW2RhdGEtcGxhY2VtZW50Xj10b3BdIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNXB4KX06aG9zdCAubWVudS1jb250YWluZXJbZGF0YS1wbGFjZW1lbnRePWxlZnRdIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVgoNXB4KX06aG9zdCAubWVudS1jb250YWluZXJbZGF0YS1wbGFjZW1lbnRePXJpZ2h0XSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01cHgpfTpob3N0IC5tZW51LWNvbnRhaW5lcltkYXRhLXBsYWNlbWVudF0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbS0tYWN0aXZle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlKDApfTpob3N0KFtzY2FsZT1zXSl7LS1jYWxjaXRlLXRvZ2dsZS1zcGFjaW5nOjAuNXJlbTstLWNhbGNpdGUtaW50ZXJuYWwtaW5wdXQtdGV4dC1pbnB1dC1wYWRkaW5nLWlubGluZS1lbmQ6Y2FsYyh2YXIoLS1jYWxjaXRlLXRvZ2dsZS1zcGFjaW5nKSArIDFyZW0pfTpob3N0KFtzY2FsZT1tXSl7LS1jYWxjaXRlLXRvZ2dsZS1zcGFjaW5nOjAuNzVyZW07LS1jYWxjaXRlLWludGVybmFsLWlucHV0LXRleHQtaW5wdXQtcGFkZGluZy1pbmxpbmUtZW5kOmNhbGModmFyKC0tY2FsY2l0ZS10b2dnbGUtc3BhY2luZykgKyAxLjVyZW0pfTpob3N0KFtzY2FsZT1sXSl7LS1jYWxjaXRlLXRvZ2dsZS1zcGFjaW5nOjFyZW07LS1jYWxjaXRlLWludGVybmFsLWlucHV0LXRleHQtaW5wdXQtcGFkZGluZy1pbmxpbmUtZW5kOmNhbGModmFyKC0tY2FsY2l0ZS10b2dnbGUtc3BhY2luZykgKyAycmVtKX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9LmNhbGVuZGFyLXBpY2tlci13cmFwcGVyey0tdHctc2hhZG93OjAgMCAjMDAwMDstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMCAjMDAwMDtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIDAsIDApfS5pbnB1dC13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlfS50b2dnbGUtaWNvbntwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmZsZXg7Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2luc2V0LWlubGluZS1lbmQ6MDtpbnNldC1ibG9jazowO3BhZGRpbmctaW5saW5lOnZhcigtLWNhbGNpdGUtdG9nZ2xlLXNwYWNpbmcpfTpob3N0KFtyYW5nZV0pIC5pbnB1dC1jb250YWluZXJ7ZGlzcGxheTpmbGV4fTpob3N0KFtyYW5nZV0pIC5pbnB1dC13cmFwcGVye2ZsZXg6MSAxIGF1dG99Omhvc3QoW3JhbmdlXSkgLmhvcml6b250YWwtYXJyb3ctY29udGFpbmVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOjBweDtib3JkZXItaW5saW5lLWVuZC13aWR0aDowcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJhY2tncm91bmQpO3BhZGRpbmctYmxvY2s6MHB4O3BhZGRpbmctaW5saW5lOjAuMjVyZW19Omhvc3QoW3JhbmdlXVtsYXlvdXQ9dmVydGljYWxdKSAuaW5wdXQtd3JhcHBlcntpbmxpbmUtc2l6ZToxMDAlfTpob3N0KFtyYW5nZV1bbGF5b3V0PXZlcnRpY2FsXSkgLmlucHV0LWNvbnRhaW5lcntmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6ZmxleC1zdGFydH06aG9zdChbcmFuZ2VdW2xheW91dD12ZXJ0aWNhbF0pIC5jYWxlbmRhci1waWNrZXItd3JhcHBlci0tZW5ke3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwLCAwKX06aG9zdChbcmFuZ2VdW2xheW91dD12ZXJ0aWNhbF0pIC52ZXJ0aWNhbC1hcnJvdy1jb250YWluZXJ7aW5zZXQtYmxvY2stc3RhcnQ6MS41cmVtO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleCk7bWFyZ2luLWlubGluZToxcHg7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7cGFkZGluZy1pbmxpbmU6MC42MjVyZW07aW5zZXQtaW5saW5lLXN0YXJ0OjB9Lm1lbnUtY29udGFpbmVyey0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXgpO3Zpc2liaWxpdHk6aGlkZGVufS5tZW51LWNvbnRhaW5lciAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uKTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSwgdmlzaWJpbGl0eSwgb3BhY2l0eTtvcGFjaXR5OjA7Ym94LXNoYWRvdzowIDAgMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KTtib3JkZXItcmFkaXVzOjAuMjVyZW19Lm1lbnUtY29udGFpbmVyW2RhdGEtcGxhY2VtZW50Xj1ib3R0b21dIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTVweCl9Lm1lbnUtY29udGFpbmVyW2RhdGEtcGxhY2VtZW50Xj10b3BdIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNXB4KX0ubWVudS1jb250YWluZXJbZGF0YS1wbGFjZW1lbnRePWxlZnRdIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVgoNXB4KX0ubWVudS1jb250YWluZXJbZGF0YS1wbGFjZW1lbnRePXJpZ2h0XSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01cHgpfS5tZW51LWNvbnRhaW5lcltkYXRhLXBsYWNlbWVudF0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbS0tYWN0aXZle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlKDApfTpob3N0KFtvcGVuXSkgLm1lbnUtY29udGFpbmVye3Zpc2liaWxpdHk6dmlzaWJsZX0ubWVudS1jb250YWluZXItLWFjdGl2ZXt2aXNpYmlsaXR5OnZpc2libGV9LmlucHV0IC5jYWxjaXRlLWlucHV0X193cmFwcGVye21hcmdpbi1ibG9jay1zdGFydDowcHh9Omhvc3QoW3JhbmdlXVtsYXlvdXQ9dmVydGljYWxdW3NjYWxlPW1dKSAudmVydGljYWwtYXJyb3ctY29udGFpbmVye2luc2V0LWJsb2NrLXN0YXJ0OjEuNXJlbTtwYWRkaW5nLWlubGluZS1zdGFydDowLjc1cmVtfTpob3N0KFtyYW5nZV1bbGF5b3V0PXZlcnRpY2FsXVtzY2FsZT1tXSkgLnZlcnRpY2FsLWFycm93LWNvbnRhaW5lciBjYWxjaXRlLWljb257YmxvY2stc2l6ZTowLjc1cmVtO2lubGluZS1zaXplOjAuNzVyZW07bWluLWlubGluZS1zaXplOjBweH06aG9zdChbcmFuZ2VdW2xheW91dD12ZXJ0aWNhbF1bc2NhbGU9bF0pIC52ZXJ0aWNhbC1hcnJvdy1jb250YWluZXJ7aW5zZXQtYmxvY2stc3RhcnQ6Mi4yNXJlbTtwYWRkaW5nLWlubGluZTowLjg3NXJlbX06aG9zdChbcmFuZ2VdW2xheW91dD12ZXJ0aWNhbF1bb3Blbl0pIC52ZXJ0aWNhbC1hcnJvdy1jb250YWluZXJ7ZGlzcGxheTpub25lfTo6c2xvdHRlZChpbnB1dFtzbG90PWhpZGRlbi1mb3JtLWlucHV0XSl7bWFyZ2luOjAgIWltcG9ydGFudDtvcGFjaXR5OjAgIWltcG9ydGFudDtvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtwYWRkaW5nOjAgIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50O2luc2V0OjAgIWltcG9ydGFudDt0cmFuc2Zvcm06bm9uZSAhaW1wb3J0YW50Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lICFpbXBvcnRhbnQ7ei1pbmRleDotMSAhaW1wb3J0YW50fS5hc3Npc3RpdmUtdGV4dHtwb3NpdGlvbjphYnNvbHV0ZTtpbmxpbmUtc2l6ZToxcHg7YmxvY2stc2l6ZToxcHg7cGFkZGluZzowO21hcmdpbjotMXB4O292ZXJmbG93OmhpZGRlbjtjbGlwOnJlY3QoMCwgMCwgMCwgMCk7d2hpdGUtc3BhY2U6bm93cmFwO2JvcmRlci13aWR0aDowfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBJbnB1dERhdGVQaWNrZXIgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0RGF0ZVBpY2tlckNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUlucHV0RGF0ZVBpY2tlckNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnB1dERhdGVQaWNrZXJCZWZvcmVDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUlucHV0RGF0ZVBpY2tlckJlZm9yZUNsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0RGF0ZVBpY2tlckNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXREYXRlUGlja2VyQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXREYXRlUGlja2VyQmVmb3JlT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUlucHV0RGF0ZVBpY2tlckJlZm9yZU9wZW5cIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXREYXRlUGlja2VyT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUlucHV0RGF0ZVBpY2tlck9wZW5cIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dElucHV0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgICBjb25zdCBwYXJzZWRWYWx1ZSA9IHRoaXMucGFyc2VOdW1lcmFscyh2YWx1ZSk7XG4gICAgICBjb25zdCBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZm9ybWF0TnVtZXJhbHMocGFyc2VkVmFsdWUpO1xuICAgICAgdGFyZ2V0LnZhbHVlID0gZm9ybWF0dGVkVmFsdWU7XG4gICAgICBjb25zdCB7IHllYXIgfSA9IGRhdGVQYXJ0c0Zyb21Mb2NhbGl6ZWRTdHJpbmcodmFsdWUsIHRoaXMubG9jYWxlRGF0YSk7XG4gICAgICBpZiAoeWVhciAmJiB5ZWFyLmxlbmd0aCA8IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0ZSA9IGRhdGVGcm9tTG9jYWxpemVkU3RyaW5nKHZhbHVlLCB0aGlzLmxvY2FsZURhdGEpO1xuICAgICAgaWYgKGluUmFuZ2UoZGF0ZSwgdGhpcy5taW4sIHRoaXMubWF4KSkge1xuICAgICAgICB0aGlzLmRhdGVQaWNrZXJBY3RpdmVEYXRlID0gZGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsSW5wdXRCbHVySGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMuY29tbWl0VmFsdWUoKTtcbiAgICB9O1xuICAgIHRoaXMuZGlhbG9nSWQgPSBgZGF0ZS1waWNrZXItZGlhbG9nLS0ke2d1aWQoKX1gO1xuICAgIHRoaXMuZm9jdXNPbk9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmxhc3RCbHVycmVkSW5wdXQgPSBcIm5vbmVcIjtcbiAgICB0aGlzLnVzZXJDaGFuZ2VkVmFsdWUgPSBmYWxzZTtcbiAgICB0aGlzLm9wZW5UcmFuc2l0aW9uUHJvcCA9IFwib3BhY2l0eVwiO1xuICAgIHRoaXMudmFsdWVBc0RhdGVDaGFuZ2VkRXh0ZXJuYWxseSA9IGZhbHNlO1xuICAgIHRoaXMucGxhY2Vob2xkZXJUZXh0SWQgPSBgY2FsY2l0ZS1pbnB1dC1kYXRlLXBpY2tlci1wbGFjZWhvbGRlci0ke2d1aWQoKX1gO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLm9uSW5wdXRXcmFwcGVyQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5yYW5nZSAmJiB0aGlzLmxhc3RCbHVycmVkSW5wdXQgIT09IFwibm9uZVwiICYmIHRoaXMub3BlbikgO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gICAgICB9XG4gICAgICB0aGlzLmxhc3RCbHVycmVkSW5wdXQgPSBcIm5vbmVcIjtcbiAgICB9O1xuICAgIHRoaXMuc2V0RmlsdGVyZWRQbGFjZW1lbnRzID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyBlbCwgZmxpcFBsYWNlbWVudHMgfSA9IHRoaXM7XG4gICAgICB0aGlzLmZpbHRlcmVkRmxpcFBsYWNlbWVudHMgPSBmbGlwUGxhY2VtZW50c1xuICAgICAgICA/IGZpbHRlckNvbXB1dGVkUGxhY2VtZW50cyhmbGlwUGxhY2VtZW50cywgZWwpXG4gICAgICAgIDogbnVsbDtcbiAgICB9O1xuICAgIHRoaXMuc2V0VHJhbnNpdGlvbkVsID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLnRyYW5zaXRpb25FbCA9IGVsO1xuICAgIH07XG4gICAgdGhpcy5zZXRTdGFydElucHV0ID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLnN0YXJ0SW5wdXQgPSBlbDtcbiAgICB9O1xuICAgIHRoaXMuc2V0RW5kSW5wdXQgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuZW5kSW5wdXQgPSBlbDtcbiAgICB9O1xuICAgIHRoaXMuZGVhY3RpdmF0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5sYXN0Qmx1cnJlZElucHV0ID0gXCJub25lXCI7XG4gICAgfTtcbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGRlZmF1bHRQcmV2ZW50ZWQsIGtleSB9ID0gZXZlbnQ7XG4gICAgICBpZiAoZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgdGhpcy5jb21taXRWYWx1ZSgpO1xuICAgICAgICBpZiAodGhpcy5zaG91bGRGb2N1c1JhbmdlRW5kKCkpIHtcbiAgICAgICAgICB0aGlzLmVuZElucHV0Py5zZXRGb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2hvdWxkRm9jdXNSYW5nZVN0YXJ0KCkpIHtcbiAgICAgICAgICB0aGlzLnN0YXJ0SW5wdXQ/LnNldEZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1Ym1pdEZvcm0odGhpcykpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMucmVzdG9yZUlucHV0Rm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoa2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIHRoaXMub3BlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuZm9jdXNPbk9wZW4gPSB0cnVlO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoa2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnJlc3RvcmVJbnB1dEZvY3VzKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnN0YXJ0SW5wdXRGb2N1cyA9ICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZElucHV0ID0gXCJzdGFydFwiO1xuICAgIH07XG4gICAgdGhpcy5zdGFydEVuZElucHV0Rm9jdXMgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGJsdXJyZWRFbCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQ7XG4gICAgICB0aGlzLmxhc3RCbHVycmVkSW5wdXQgPVxuICAgICAgICBibHVycmVkRWwgPT09IHRoaXMuc3RhcnRJbnB1dCA/IFwic3RhcnRcIiA6IGJsdXJyZWRFbCA9PT0gdGhpcy5lbmRJbnB1dCA/IFwiZW5kXCIgOiBcIm5vbmVcIjtcbiAgICB9O1xuICAgIHRoaXMuZW5kSW5wdXRGb2N1cyA9ICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZElucHV0ID0gXCJlbmRcIjtcbiAgICB9O1xuICAgIHRoaXMuc2V0RmxvYXRpbmdFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5mbG9hdGluZ0VsID0gZWw7XG4gICAgICBjb25uZWN0RmxvYXRpbmdVSSh0aGlzLCB0aGlzLnJlZmVyZW5jZUVsLCB0aGlzLmZsb2F0aW5nRWwpO1xuICAgIH07XG4gICAgdGhpcy5zZXRTdGFydFdyYXBwZXIgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuc3RhcnRXcmFwcGVyID0gZWw7XG4gICAgICB0aGlzLnNldFJlZmVyZW5jZUVsKCk7XG4gICAgfTtcbiAgICB0aGlzLnNldEVuZFdyYXBwZXIgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuZW5kV3JhcHBlciA9IGVsO1xuICAgICAgdGhpcy5zZXRSZWZlcmVuY2VFbCgpO1xuICAgIH07XG4gICAgdGhpcy5zZXREYXRlUGlja2VyUmVmID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmRhdGVQaWNrZXJFbCA9IGVsO1xuICAgICAgY29ubmVjdEZvY3VzVHJhcCh0aGlzLCB7XG4gICAgICAgIGZvY3VzVHJhcEVsOiBlbCxcbiAgICAgICAgZm9jdXNUcmFwT3B0aW9uczoge1xuICAgICAgICAgIGluaXRpYWxGb2N1czogZmFsc2UsXG4gICAgICAgICAgc2V0UmV0dXJuRm9jdXM6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciB3aGVuIHRoZSBzZWxlY3RlZCBkYXRlIGNoYW5nZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBldmVudCBDYWxjaXRlRGF0ZVBpY2tlciBjdXN0b20gY2hhbmdlIGV2ZW50XG4gICAgICovXG4gICAgdGhpcy5oYW5kbGVEYXRlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuc2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlQXNEYXRlKTtcbiAgICAgIHRoaXMubG9jYWxpemVJbnB1dFZhbHVlcygpO1xuICAgICAgdGhpcy5yZXN0b3JlSW5wdXRGb2N1cygpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVEYXRlUmFuZ2VDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghdGhpcy5yYW5nZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlQXNEYXRlO1xuICAgICAgdGhpcy5zZXRSYW5nZVZhbHVlKHZhbHVlKTtcbiAgICAgIHRoaXMubG9jYWxpemVJbnB1dFZhbHVlcygpO1xuICAgICAgdGhpcy5yZXN0b3JlSW5wdXRGb2N1cygpO1xuICAgIH07XG4gICAgdGhpcy5zZXRJbnB1dFZhbHVlID0gKG5ld1ZhbHVlLCBpbnB1dCA9IFwic3RhcnRcIikgPT4ge1xuICAgICAgY29uc3QgaW5wdXRFbCA9IHRoaXNbYCR7aW5wdXR9SW5wdXRgXTtcbiAgICAgIGlmICghaW5wdXRFbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbnB1dEVsLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgfTtcbiAgICB0aGlzLnNldFJhbmdlVmFsdWUgPSAodmFsdWVBc0RhdGUpID0+IHtcbiAgICAgIGlmICghdGhpcy5yYW5nZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7IHZhbHVlOiBvbGRWYWx1ZSB9ID0gdGhpcztcbiAgICAgIGNvbnN0IG9sZFZhbHVlSXNBcnJheSA9IEFycmF5LmlzQXJyYXkob2xkVmFsdWUpO1xuICAgICAgY29uc3QgdmFsdWVJc0FycmF5ID0gQXJyYXkuaXNBcnJheSh2YWx1ZUFzRGF0ZSk7XG4gICAgICBjb25zdCBuZXdTdGFydERhdGUgPSB2YWx1ZUlzQXJyYXkgPyB2YWx1ZUFzRGF0ZVswXSA6IG51bGw7XG4gICAgICBsZXQgbmV3U3RhcnREYXRlSVNPID0gdmFsdWVJc0FycmF5ID8gZGF0ZVRvSVNPKG5ld1N0YXJ0RGF0ZSkgOiBcIlwiO1xuICAgICAgaWYgKG5ld1N0YXJ0RGF0ZUlTTykge1xuICAgICAgICBuZXdTdGFydERhdGVJU08gPSB0aGlzLmdldE5vcm1hbGl6ZWREYXRlKG5ld1N0YXJ0RGF0ZUlTTyk7XG4gICAgICB9XG4gICAgICBjb25zdCBuZXdFbmREYXRlID0gdmFsdWVJc0FycmF5ID8gdmFsdWVBc0RhdGVbMV0gOiBudWxsO1xuICAgICAgbGV0IG5ld0VuZERhdGVJU08gPSB2YWx1ZUlzQXJyYXkgPyBkYXRlVG9JU08obmV3RW5kRGF0ZSkgOiBcIlwiO1xuICAgICAgaWYgKG5ld0VuZERhdGVJU08pIHtcbiAgICAgICAgbmV3RW5kRGF0ZUlTTyA9IHRoaXMuZ2V0Tm9ybWFsaXplZERhdGUobmV3RW5kRGF0ZUlTTyk7XG4gICAgICB9XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IG5ld1N0YXJ0RGF0ZUlTTyB8fCBuZXdFbmREYXRlSVNPID8gW25ld1N0YXJ0RGF0ZUlTTywgbmV3RW5kRGF0ZUlTT10gOiBcIlwiO1xuICAgICAgaWYgKG5ld1ZhbHVlID09PSBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnVzZXJDaGFuZ2VkVmFsdWUgPSB0cnVlO1xuICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy52YWx1ZUFzRGF0ZSA9IG5ld1ZhbHVlID8gZ2V0VmFsdWVBc0RhdGVSYW5nZShuZXdWYWx1ZSkgOiB1bmRlZmluZWQ7XG4gICAgICBjb25zdCBjaGFuZ2VFdmVudCA9IHRoaXMuY2FsY2l0ZUlucHV0RGF0ZVBpY2tlckNoYW5nZS5lbWl0KCk7XG4gICAgICBpZiAoY2hhbmdlRXZlbnQgJiYgY2hhbmdlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gb2xkVmFsdWU7XG4gICAgICAgIGlmIChvbGRWYWx1ZUlzQXJyYXkpIHtcbiAgICAgICAgICB0aGlzLnNldElucHV0VmFsdWUob2xkVmFsdWVbMF0sIFwic3RhcnRcIik7XG4gICAgICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKG9sZFZhbHVlWzFdLCBcImVuZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gb2xkVmFsdWU7XG4gICAgICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zZXRWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgbGV0IG5ld1ZhbHVlID0gZGF0ZVRvSVNPKHZhbHVlKTtcbiAgICAgIG5ld1ZhbHVlID0gdGhpcy5nZXROb3JtYWxpemVkRGF0ZShuZXdWYWx1ZSk7XG4gICAgICBpZiAobmV3VmFsdWUgPT09IG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IHRydWU7XG4gICAgICB0aGlzLnZhbHVlQXNEYXRlID0gbmV3VmFsdWUgPyBkYXRlRnJvbUlTTyhuZXdWYWx1ZSkgOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWUgfHwgXCJcIjtcbiAgICAgIGNvbnN0IGNoYW5nZUV2ZW50ID0gdGhpcy5jYWxjaXRlSW5wdXREYXRlUGlja2VyQ2hhbmdlLmVtaXQoKTtcbiAgICAgIGlmIChjaGFuZ2VFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBvbGRWYWx1ZTtcbiAgICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKG9sZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY29tbW9uRGF0ZVNlcGFyYXRvcnMgPSBbXCIuXCIsIFwiLVwiLCBcIi9cIl07XG4gICAgdGhpcy5mb3JtYXROdW1lcmFscyA9ICh2YWx1ZSkgPT4gdmFsdWVcbiAgICAgID8gdmFsdWVcbiAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgIC5tYXAoKGNoYXIpID0+IHRoaXMuY29tbW9uRGF0ZVNlcGFyYXRvcnM/LmluY2x1ZGVzKGNoYXIpXG4gICAgICAgID8gdGhpcy5sb2NhbGVEYXRhPy5zZXBhcmF0b3JcbiAgICAgICAgOiBudW1iZXJLZXlzPy5pbmNsdWRlcyhjaGFyKVxuICAgICAgICAgID8gbnVtYmVyU3RyaW5nRm9ybWF0dGVyPy5udW1iZXJGb3JtYXR0ZXI/LmZvcm1hdChOdW1iZXIoY2hhcikpXG4gICAgICAgICAgOiBjaGFyKVxuICAgICAgICAuam9pbihcIlwiKVxuICAgICAgOiBcIlwiO1xuICAgIHRoaXMucGFyc2VOdW1lcmFscyA9ICh2YWx1ZSkgPT4gdmFsdWVcbiAgICAgID8gdmFsdWVcbiAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgIC5tYXAoKGNoYXIpID0+IG51bWJlcktleXMuaW5jbHVkZXMoY2hhcikgPyBudW1iZXJTdHJpbmdGb3JtYXR0ZXIuZGVsb2NhbGl6ZShjaGFyKSA6IGNoYXIpXG4gICAgICAgIC5qb2luKFwiXCIpXG4gICAgICA6IFwiXCI7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9jdXNUcmFwRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWFkT25seSA9IGZhbHNlO1xuICAgIHRoaXMudmFsdWUgPSBcIlwiO1xuICAgIHRoaXMuZmxpcFBsYWNlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oZWFkaW5nTGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52YWx1ZUFzRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1pbkFzRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1heEFzRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1pbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1heCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMuc3RhdHVzID0gXCJpZGxlXCI7XG4gICAgdGhpcy5wbGFjZW1lbnQgPSBkZWZhdWx0TWVudVBsYWNlbWVudDtcbiAgICB0aGlzLnJhbmdlID0gZmFsc2U7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIHRoaXMub3ZlcmxheVBvc2l0aW9uaW5nID0gXCJhYnNvbHV0ZVwiO1xuICAgIHRoaXMucHJveGltaXR5U2VsZWN0aW9uRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmxheW91dCA9IFwiaG9yaXpvbnRhbFwiO1xuICAgIHRoaXMuZGF0ZVBpY2tlckFjdGl2ZURhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuZm9jdXNlZElucHV0ID0gXCJzdGFydFwiO1xuICAgIHRoaXMubG9jYWxlRGF0YSA9IHVuZGVmaW5lZDtcbiAgfVxuICBoYW5kbGVGb2N1c1RyYXBEaXNhYmxlZChmb2N1c1RyYXBEaXNhYmxlZCkge1xuICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvY3VzVHJhcERpc2FibGVkID8gZGVhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzKSA6IGFjdGl2YXRlRm9jdXNUcmFwKHRoaXMpO1xuICB9XG4gIGhhbmRsZURpc2FibGVkQW5kUmVhZE9ubHlDaGFuZ2UodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgdmFsdWVXYXRjaGVyKG5ld1ZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLnVzZXJDaGFuZ2VkVmFsdWUpIHtcbiAgICAgIGxldCBuZXdWYWx1ZUFzRGF0ZTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG5ld1ZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZUFzRGF0ZSA9IGdldFZhbHVlQXNEYXRlUmFuZ2UobmV3VmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgbmV3VmFsdWVBc0RhdGUgPSBkYXRlRnJvbUlTTyhuZXdWYWx1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV3VmFsdWVBc0RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMudmFsdWVBc0RhdGVDaGFuZ2VkRXh0ZXJuYWxseSAmJiBuZXdWYWx1ZUFzRGF0ZSAhPT0gdGhpcy52YWx1ZUFzRGF0ZSkge1xuICAgICAgICB0aGlzLnZhbHVlQXNEYXRlID0gbmV3VmFsdWVBc0RhdGU7XG4gICAgICB9XG4gICAgICB0aGlzLmxvY2FsaXplSW5wdXRWYWx1ZXMoKTtcbiAgICB9XG4gICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gZmFsc2U7XG4gIH1cbiAgdmFsdWVBc0RhdGVXYXRjaGVyKHZhbHVlQXNEYXRlKSB7XG4gICAgdGhpcy5kYXRlUGlja2VyQWN0aXZlRGF0ZSA9IHZhbHVlQXNEYXRlO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5yYW5nZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlQXNEYXRlKVxuICAgICAgPyBbZGF0ZVRvSVNPKHZhbHVlQXNEYXRlWzBdKSwgZGF0ZVRvSVNPKHZhbHVlQXNEYXRlWzFdKV1cbiAgICAgIDogZGF0ZVRvSVNPKHZhbHVlQXNEYXRlKTtcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWVBc0RhdGVDaGFuZ2VkRXh0ZXJuYWxseSA9IHRydWU7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLnZhbHVlQXNEYXRlQ2hhbmdlZEV4dGVybmFsbHkgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZmxpcFBsYWNlbWVudHNIYW5kbGVyKCkge1xuICAgIHRoaXMuc2V0RmlsdGVyZWRQbGFjZW1lbnRzKCk7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICBvbk1pbkNoYW5nZWQobWluKSB7XG4gICAgaWYgKG1pbikge1xuICAgICAgdGhpcy5taW5Bc0RhdGUgPSBkYXRlRnJvbUlTTyhtaW4pO1xuICAgIH1cbiAgfVxuICBvbk1heENoYW5nZWQobWF4KSB7XG4gICAgaWYgKG1heCkge1xuICAgICAgdGhpcy5tYXhBc0RhdGUgPSBkYXRlRnJvbUlTTyhtYXgpO1xuICAgIH1cbiAgfVxuICBvcGVuSGFuZGxlcih2YWx1ZSkge1xuICAgIG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHkpIHtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICB9XG4gIH1cbiAgb3ZlcmxheVBvc2l0aW9uaW5nSGFuZGxlcigpIHtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY2FsY2l0ZURheVNlbGVjdEhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkRm9jdXNSYW5nZVN0YXJ0KCkgfHwgdGhpcy5zaG91bGRGb2N1c1JhbmdlRW5kKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBkZWxheWVkXG4gICAqL1xuICBhc3luYyByZXBvc2l0aW9uKGRlbGF5ZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHsgZmxvYXRpbmdFbCwgcmVmZXJlbmNlRWwsIHBsYWNlbWVudCwgb3ZlcmxheVBvc2l0aW9uaW5nLCBmaWx0ZXJlZEZsaXBQbGFjZW1lbnRzIH0gPSB0aGlzO1xuICAgIHJldHVybiByZXBvc2l0aW9uKHRoaXMsIHtcbiAgICAgIGZsb2F0aW5nRWwsXG4gICAgICByZWZlcmVuY2VFbCxcbiAgICAgIG92ZXJsYXlQb3NpdGlvbmluZyxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIGZsaXBQbGFjZW1lbnRzOiBmaWx0ZXJlZEZsaXBQbGFjZW1lbnRzLFxuICAgICAgdHlwZTogXCJtZW51XCIsXG4gICAgfSwgZGVsYXllZCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXM7XG4gICAgb3BlbiAmJiB0aGlzLm9wZW5IYW5kbGVyKG9wZW4pO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnZhbHVlQXNEYXRlID0gZ2V0VmFsdWVBc0RhdGVSYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy52YWx1ZUFzRGF0ZSA9IGRhdGVGcm9tSVNPKHRoaXMudmFsdWUpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRoaXMud2FybkFib3V0SW52YWxpZFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLnZhbHVlID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5yYW5nZSAmJiB0aGlzLnZhbHVlQXNEYXRlKSB7XG4gICAgICB0aGlzLnNldFJhbmdlVmFsdWUodGhpcy52YWx1ZUFzRGF0ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1pbikge1xuICAgICAgdGhpcy5taW5Bc0RhdGUgPSBkYXRlRnJvbUlTTyh0aGlzLm1pbik7XG4gICAgfVxuICAgIGlmICh0aGlzLm1heCkge1xuICAgICAgdGhpcy5tYXhBc0RhdGUgPSBkYXRlRnJvbUlTTyh0aGlzLm1heCk7XG4gICAgfVxuICAgIGNvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBjb25uZWN0Rm9ybSh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5zZXRGaWx0ZXJlZFBsYWNlbWVudHMoKTtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gICAgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgIHVzZUdyb3VwaW5nOiBmYWxzZSxcbiAgICB9O1xuICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgIG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICAgIH1cbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFt0aGlzLmxvYWRMb2NhbGVEYXRhKCksIHNldFVwTWVzc2FnZXModGhpcyldKTtcbiAgICB0aGlzLm9uTWluQ2hhbmdlZCh0aGlzLm1pbik7XG4gICAgdGhpcy5vbk1heENoYW5nZWQodGhpcy5tYXgpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIHRoaXMubG9jYWxpemVJbnB1dFZhbHVlcygpO1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkZWFjdGl2YXRlRm9jdXNUcmFwKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBkaXNjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgZGlzY29ubmVjdEZvcm0odGhpcyk7XG4gICAgZGlzY29ubmVjdEZsb2F0aW5nVUkodGhpcywgdGhpcy5yZWZlcmVuY2VFbCwgdGhpcy5mbG9hdGluZ0VsKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRpc2FibGVkLCBlZmZlY3RpdmVMb2NhbGUsIG1lc3NhZ2VzLCBudW1iZXJpbmdTeXN0ZW0sIHJlYWRPbmx5IH0gPSB0aGlzO1xuICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgbG9jYWxlOiBlZmZlY3RpdmVMb2NhbGUsXG4gICAgICB1c2VHcm91cGluZzogZmFsc2UsXG4gICAgfTtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkJsdXI6IHRoaXMuZGVhY3RpdmF0ZSwgb25LZXlEb3duOiB0aGlzLmtleURvd25IYW5kbGVyIH0sIHRoaXMubG9jYWxlRGF0YSAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiBcImlucHV0LWNvbnRhaW5lclwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJpbnB1dC13cmFwcGVyXCIsIG9uQ2xpY2s6IHRoaXMub25JbnB1dFdyYXBwZXJDbGljayxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IHRoaXMuc2V0U3RhcnRXcmFwcGVyIH0sIGgoXCJjYWxjaXRlLWlucHV0LXRleHRcIiwgeyBcImFyaWEtYXV0b2NvbXBsZXRlXCI6IFwibm9uZVwiLCBcImFyaWEtY29udHJvbHNcIjogdGhpcy5kaWFsb2dJZCwgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6IHRoaXMucGxhY2Vob2xkZXJUZXh0SWQsIFwiYXJpYS1leHBhbmRlZFwiOiB0b0FyaWFCb29sZWFuKHRoaXMub3BlbiksIFwiYXJpYS1oYXNwb3B1cFwiOiBcImRpYWxvZ1wiLCBjbGFzczogYGlucHV0ICR7dGhpcy5sYXlvdXQgPT09IFwidmVydGljYWxcIiAmJiB0aGlzLnJhbmdlID8gYG5vLWJvdHRvbS1ib3JkZXJgIDogYGB9YCwgZGlzYWJsZWQ6IGRpc2FibGVkLCBpY29uOiBcImNhbGVuZGFyXCIsIG9uQ2FsY2l0ZUlucHV0VGV4dElucHV0OiB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0SW5wdXRIYW5kbGVyLCBvbkNhbGNpdGVJbnRlcm5hbElucHV0VGV4dEJsdXI6IHRoaXMuY2FsY2l0ZUludGVybmFsSW5wdXRCbHVySGFuZGxlciwgb25DYWxjaXRlSW50ZXJuYWxJbnB1dFRleHRGb2N1czogdGhpcy5zdGFydElucHV0Rm9jdXMsIG9uRm9jdXM6IHRoaXMuc3RhcnRFbmRJbnB1dEZvY3VzLCBwbGFjZWhvbGRlcjogdGhpcy5sb2NhbGVEYXRhPy5wbGFjZWhvbGRlciwgcmVhZE9ubHk6IHJlYWRPbmx5LCByb2xlOiBcImNvbWJvYm94XCIsIHNjYWxlOiB0aGlzLnNjYWxlLCBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zZXRTdGFydElucHV0IH0pLCAhdGhpcy5yZWFkT25seSAmJiB0aGlzLnJlbmRlclRvZ2dsZUljb24odGhpcy5vcGVuICYmIHRoaXMuZm9jdXNlZElucHV0ID09PSBcInN0YXJ0XCIpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBDU1MuYXNzaXN0aXZlVGV4dCwgaWQ6IHRoaXMucGxhY2Vob2xkZXJUZXh0SWQgfSwgXCJEYXRlIEZvcm1hdDogXCIsIHRoaXMubG9jYWxlRGF0YT8ucGxhY2Vob2xkZXIpKSwgaChcImRpdlwiLCB7IFwiYXJpYS1oaWRkZW5cIjogdG9BcmlhQm9vbGVhbighdGhpcy5vcGVuKSwgXCJhcmlhLWxhYmVsXCI6IG1lc3NhZ2VzLmNob29zZURhdGUsIFwiYXJpYS1saXZlXCI6IFwicG9saXRlXCIsIFwiYXJpYS1tb2RhbFwiOiBcInRydWVcIiwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5tZW51XTogdHJ1ZSxcbiAgICAgICAgW0NTUy5tZW51QWN0aXZlXTogdGhpcy5vcGVuLFxuICAgICAgfSwgaWQ6IHRoaXMuZGlhbG9nSWQsIHJvbGU6IFwiZGlhbG9nXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiB0aGlzLnNldEZsb2F0aW5nRWwgfSwgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtcImNhbGVuZGFyLXBpY2tlci13cmFwcGVyXCJdOiB0cnVlLFxuICAgICAgICBbXCJjYWxlbmRhci1waWNrZXItd3JhcHBlci0tZW5kXCJdOiB0aGlzLmZvY3VzZWRJbnB1dCA9PT0gXCJlbmRcIixcbiAgICAgICAgW0Zsb2F0aW5nQ1NTLmFuaW1hdGlvbl06IHRydWUsXG4gICAgICAgIFtGbG9hdGluZ0NTUy5hbmltYXRpb25BY3RpdmVdOiB0aGlzLm9wZW4sXG4gICAgICB9LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zZXRUcmFuc2l0aW9uRWwgfSwgaChcImNhbGNpdGUtZGF0ZS1waWNrZXJcIiwgeyBhY3RpdmVEYXRlOiB0aGlzLmRhdGVQaWNrZXJBY3RpdmVEYXRlLCBhY3RpdmVSYW5nZTogdGhpcy5mb2N1c2VkSW5wdXQsIGhlYWRpbmdMZXZlbDogdGhpcy5oZWFkaW5nTGV2ZWwsIG1heDogdGhpcy5tYXgsIG1heEFzRGF0ZTogdGhpcy5tYXhBc0RhdGUsIG1lc3NhZ2VPdmVycmlkZXM6IHRoaXMubWVzc2FnZU92ZXJyaWRlcywgbWluOiB0aGlzLm1pbiwgbWluQXNEYXRlOiB0aGlzLm1pbkFzRGF0ZSwgbnVtYmVyaW5nU3lzdGVtOiBudW1iZXJpbmdTeXN0ZW0sIG9uQ2FsY2l0ZURhdGVQaWNrZXJDaGFuZ2U6IHRoaXMuaGFuZGxlRGF0ZUNoYW5nZSwgb25DYWxjaXRlRGF0ZVBpY2tlclJhbmdlQ2hhbmdlOiB0aGlzLmhhbmRsZURhdGVSYW5nZUNoYW5nZSwgcHJveGltaXR5U2VsZWN0aW9uRGlzYWJsZWQ6IHRoaXMucHJveGltaXR5U2VsZWN0aW9uRGlzYWJsZWQsIHJhbmdlOiB0aGlzLnJhbmdlLCBzY2FsZTogdGhpcy5zY2FsZSwgdGFiSW5kZXg6IHRoaXMub3BlbiA/IHVuZGVmaW5lZCA6IC0xLCB2YWx1ZUFzRGF0ZTogdGhpcy52YWx1ZUFzRGF0ZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IHRoaXMuc2V0RGF0ZVBpY2tlclJlZiB9KSkpLCB0aGlzLnJhbmdlICYmIHRoaXMubGF5b3V0ID09PSBcImhvcml6b250YWxcIiAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiBcImhvcml6b250YWwtYXJyb3ctY29udGFpbmVyXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGZsaXBSdGw6IHRydWUsIGljb246IFwiYXJyb3ctcmlnaHRcIiwgc2NhbGU6IGdldEljb25TY2FsZSh0aGlzLnNjYWxlKSB9KSkpLCB0aGlzLnJhbmdlICYmIHRoaXMubGF5b3V0ID09PSBcInZlcnRpY2FsXCIgJiYgdGhpcy5zY2FsZSAhPT0gXCJzXCIgJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogXCJ2ZXJ0aWNhbC1hcnJvdy1jb250YWluZXJcIiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJhcnJvdy1kb3duXCIsIHNjYWxlOiBnZXRJY29uU2NhbGUodGhpcy5zY2FsZSkgfSkpKSwgdGhpcy5yYW5nZSAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiBcImlucHV0LXdyYXBwZXJcIiwgb25DbGljazogdGhpcy5vbklucHV0V3JhcHBlckNsaWNrLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zZXRFbmRXcmFwcGVyIH0sIGgoXCJjYWxjaXRlLWlucHV0LXRleHRcIiwgeyBcImFyaWEtYXV0b2NvbXBsZXRlXCI6IFwibm9uZVwiLCBcImFyaWEtY29udHJvbHNcIjogdGhpcy5kaWFsb2dJZCwgXCJhcmlhLWV4cGFuZGVkXCI6IHRvQXJpYUJvb2xlYW4odGhpcy5vcGVuKSwgXCJhcmlhLWhhc3BvcHVwXCI6IFwiZGlhbG9nXCIsIGNsYXNzOiB7XG4gICAgICAgIGlucHV0OiB0cnVlLFxuICAgICAgICBcImJvcmRlci10b3AtY29sb3Itb25lXCI6IHRoaXMubGF5b3V0ID09PSBcInZlcnRpY2FsXCIgJiYgdGhpcy5yYW5nZSxcbiAgICAgIH0sIGRpc2FibGVkOiBkaXNhYmxlZCwgaWNvbjogXCJjYWxlbmRhclwiLCBvbkNhbGNpdGVJbnB1dFRleHRJbnB1dDogdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dElucHV0SGFuZGxlciwgb25DYWxjaXRlSW50ZXJuYWxJbnB1dFRleHRCbHVyOiB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0Qmx1ckhhbmRsZXIsIG9uQ2FsY2l0ZUludGVybmFsSW5wdXRUZXh0Rm9jdXM6IHRoaXMuZW5kSW5wdXRGb2N1cywgb25Gb2N1czogdGhpcy5zdGFydEVuZElucHV0Rm9jdXMsIHBsYWNlaG9sZGVyOiB0aGlzLmxvY2FsZURhdGE/LnBsYWNlaG9sZGVyLCByZWFkT25seTogcmVhZE9ubHksIHJvbGU6IFwiY29tYm9ib3hcIiwgc2NhbGU6IHRoaXMuc2NhbGUsIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiB0aGlzLnNldEVuZElucHV0IH0pLCAhdGhpcy5yZWFkT25seSAmJiB0aGlzLnJlbmRlclRvZ2dsZUljb24odGhpcy5vcGVuICYmIHRoaXMuZm9jdXNlZElucHV0ID09PSBcImVuZFwiKSkpKSksIGgoSGlkZGVuRm9ybUlucHV0U2xvdCwgeyBjb21wb25lbnQ6IHRoaXMgfSkpKTtcbiAgfVxuICByZW5kZXJUb2dnbGVJY29uKG9wZW4pIHtcbiAgICByZXR1cm4gKGgoXCJzcGFuXCIsIHsgY2xhc3M6IENTUy50b2dnbGVJY29uIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBvcGVuID8gXCJjaGV2cm9uLXVwXCIgOiBcImNoZXZyb24tZG93blwiLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKSk7XG4gIH1cbiAgc2V0UmVmZXJlbmNlRWwoKSB7XG4gICAgY29uc3QgeyBmb2N1c2VkSW5wdXQsIGxheW91dCwgZW5kV3JhcHBlciwgc3RhcnRXcmFwcGVyIH0gPSB0aGlzO1xuICAgIHRoaXMucmVmZXJlbmNlRWwgPVxuICAgICAgZm9jdXNlZElucHV0ID09PSBcImVuZFwiIHx8IGxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiXG4gICAgICAgID8gZW5kV3JhcHBlciB8fCBzdGFydFdyYXBwZXJcbiAgICAgICAgOiBzdGFydFdyYXBwZXIgfHwgZW5kV3JhcHBlcjtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gY29ubmVjdEZsb2F0aW5nVUkodGhpcywgdGhpcy5yZWZlcmVuY2VFbCwgdGhpcy5mbG9hdGluZ0VsKSk7XG4gIH1cbiAgb25MYWJlbENsaWNrKCkge1xuICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgfVxuICBvbkJlZm9yZU9wZW4oKSB7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXREYXRlUGlja2VyQmVmb3JlT3Blbi5lbWl0KCk7XG4gIH1cbiAgb25PcGVuKCkge1xuICAgIGFjdGl2YXRlRm9jdXNUcmFwKHRoaXMsIHtcbiAgICAgIG9uQWN0aXZhdGU6ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNPbk9wZW4pIHtcbiAgICAgICAgICB0aGlzLmRhdGVQaWNrZXJFbC5zZXRGb2N1cygpO1xuICAgICAgICAgIHRoaXMuZm9jdXNPbk9wZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLmNhbGNpdGVJbnB1dERhdGVQaWNrZXJPcGVuLmVtaXQoKTtcbiAgfVxuICBvbkJlZm9yZUNsb3NlKCkge1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0RGF0ZVBpY2tlckJlZm9yZUNsb3NlLmVtaXQoKTtcbiAgfVxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0RGF0ZVBpY2tlckNsb3NlLmVtaXQoKTtcbiAgICBkZWFjdGl2YXRlRm9jdXNUcmFwKHRoaXMpO1xuICAgIHRoaXMucmVzdG9yZUlucHV0Rm9jdXMoKTtcbiAgICB0aGlzLmZvY3VzT25PcGVuID0gZmFsc2U7XG4gICAgdGhpcy5kYXRlUGlja2VyRWwucmVzZXQoKTtcbiAgfVxuICBjb21taXRWYWx1ZSgpIHtcbiAgICBjb25zdCB7IGZvY3VzZWRJbnB1dCwgdmFsdWUgfSA9IHRoaXM7XG4gICAgY29uc3QgZm9jdXNlZElucHV0TmFtZSA9IGAke2ZvY3VzZWRJbnB1dH1JbnB1dGA7XG4gICAgY29uc3QgZm9jdXNlZElucHV0VmFsdWUgPSB0aGlzW2ZvY3VzZWRJbnB1dE5hbWVdLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkYXRlRnJvbUxvY2FsaXplZFN0cmluZyhmb2N1c2VkSW5wdXRWYWx1ZSwgdGhpcy5sb2NhbGVEYXRhKTtcbiAgICBjb25zdCBkYXRlQXNJU08gPSBkYXRlVG9JU08oZGF0ZSk7XG4gICAgY29uc3QgdmFsdWVJc0FycmF5ID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgIGNvbnN0IGZvY3VzZWRJbnB1dFZhbHVlSW5kZXggPSBmb2N1c2VkSW5wdXQgPT09IFwic3RhcnRcIiA/IDAgOiAxO1xuICAgICAgaWYgKHZhbHVlSXNBcnJheSkge1xuICAgICAgICBpZiAoZGF0ZUFzSVNPID09PSB2YWx1ZVtmb2N1c2VkSW5wdXRWYWx1ZUluZGV4XSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgIHRoaXMuc2V0UmFuZ2VWYWx1ZShbXG4gICAgICAgICAgICBmb2N1c2VkSW5wdXQgPT09IFwic3RhcnRcIiA/IGRhdGUgOiBkYXRlRnJvbUlTTyh2YWx1ZVswXSksXG4gICAgICAgICAgICBmb2N1c2VkSW5wdXQgPT09IFwiZW5kXCIgPyBkYXRlIDogZGF0ZUZyb21JU08odmFsdWVbMV0pLFxuICAgICAgICAgIF0pO1xuICAgICAgICAgIHRoaXMubG9jYWxpemVJbnB1dFZhbHVlcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0UmFuZ2VWYWx1ZShbXG4gICAgICAgICAgICBmb2N1c2VkSW5wdXQgPT09IFwiZW5kXCIgJiYgZGF0ZUZyb21JU08odmFsdWVbMF0pLFxuICAgICAgICAgICAgZm9jdXNlZElucHV0ID09PSBcInN0YXJ0XCIgJiYgZGF0ZUZyb21JU08odmFsdWVbMV0pLFxuICAgICAgICAgIF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICB0aGlzLnNldFJhbmdlVmFsdWUoW1xuICAgICAgICAgICAgZm9jdXNlZElucHV0ID09PSBcInN0YXJ0XCIgPyBkYXRlIDogZGF0ZUZyb21JU08odmFsdWVbMF0pLFxuICAgICAgICAgICAgZm9jdXNlZElucHV0ID09PSBcImVuZFwiID8gZGF0ZSA6IGRhdGVGcm9tSVNPKHZhbHVlWzFdKSxcbiAgICAgICAgICBdKTtcbiAgICAgICAgICB0aGlzLmxvY2FsaXplSW5wdXRWYWx1ZXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChkYXRlQXNJU08gPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0VmFsdWUoZGF0ZSk7XG4gICAgICB0aGlzLmxvY2FsaXplSW5wdXRWYWx1ZXMoKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgbG9hZExvY2FsZURhdGEoKSB7XG4gICAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgIHVzZUdyb3VwaW5nOiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMubG9jYWxlRGF0YSA9IGF3YWl0IGdldExvY2FsZURhdGEodGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICAgIHRoaXMubG9jYWxpemVJbnB1dFZhbHVlcygpO1xuICB9XG4gIHNob3VsZEZvY3VzUmFuZ2VTdGFydCgpIHtcbiAgICBjb25zdCBzdGFydFZhbHVlID0gdGhpcy52YWx1ZVswXTtcbiAgICBjb25zdCBlbmRWYWx1ZSA9IHRoaXMudmFsdWVbMV07XG4gICAgcmV0dXJuICEhKGVuZFZhbHVlICYmICFzdGFydFZhbHVlICYmIHRoaXMuZm9jdXNlZElucHV0ID09PSBcImVuZFwiICYmIHRoaXMuc3RhcnRJbnB1dCk7XG4gIH1cbiAgc2hvdWxkRm9jdXNSYW5nZUVuZCgpIHtcbiAgICBjb25zdCBzdGFydFZhbHVlID0gdGhpcy52YWx1ZVswXTtcbiAgICBjb25zdCBlbmRWYWx1ZSA9IHRoaXMudmFsdWVbMV07XG4gICAgcmV0dXJuICEhKHN0YXJ0VmFsdWUgJiYgIWVuZFZhbHVlICYmIHRoaXMuZm9jdXNlZElucHV0ID09PSBcInN0YXJ0XCIgJiYgdGhpcy5lbmRJbnB1dCk7XG4gIH1cbiAgcmVzdG9yZUlucHV0Rm9jdXMoKSB7XG4gICAgaWYgKCF0aGlzLnJhbmdlKSB7XG4gICAgICB0aGlzLnN0YXJ0SW5wdXQuc2V0Rm9jdXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZm9jdXNlZElucHV0ID0gdGhpcy5mb2N1c2VkSW5wdXQgPT09IFwic3RhcnRcIiA/IHRoaXMuc3RhcnRJbnB1dCA6IHRoaXMuZW5kSW5wdXQ7XG4gICAgZm9jdXNlZElucHV0LnNldEZvY3VzKCk7XG4gIH1cbiAgbG9jYWxpemVJbnB1dFZhbHVlcygpIHtcbiAgICBjb25zdCBkYXRlID0gZGF0ZUZyb21SYW5nZSgodGhpcy5yYW5nZVxuICAgICAgPyAoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlQXNEYXRlKSAmJiB0aGlzLnZhbHVlQXNEYXRlWzBdKSB8fCB1bmRlZmluZWRcbiAgICAgIDogdGhpcy52YWx1ZUFzRGF0ZSksIHRoaXMubWluQXNEYXRlLCB0aGlzLm1heEFzRGF0ZSk7XG4gICAgY29uc3QgZW5kRGF0ZSA9IHRoaXMucmFuZ2VcbiAgICAgID8gZGF0ZUZyb21SYW5nZSgoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlQXNEYXRlKSAmJiB0aGlzLnZhbHVlQXNEYXRlWzFdKSB8fCB1bmRlZmluZWQsIHRoaXMubWluQXNEYXRlLCB0aGlzLm1heEFzRGF0ZSlcbiAgICAgIDogbnVsbDtcbiAgICBjb25zdCBmb3JtYXR0aW5nT3B0aW9ucyA9IHtcbiAgICAgIC8vIHdlIGV4cGxpY2l0bHkgc2V0IG51bWJlcmluZ1N5c3RlbSB0byBwcmV2ZW50IHRoZSBicm93c2VyLWluZmVycmVkIHZhbHVlXG4gICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2lzc3Vlcy8zMDc5I2lzc3VlY29tbWVudC0xMTY4OTY0MTk1IGZvciBtb3JlIGluZm9cbiAgICAgIG51bWJlcmluZ1N5c3RlbTogZGVmYXVsdE51bWJlcmluZ1N5c3RlbSxcbiAgICB9O1xuICAgIGNvbnN0IGxvY2FsaXplZERhdGUgPSBkYXRlICYmIHRoaXMuZm9ybWF0TnVtZXJhbHMoZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcodGhpcy5lZmZlY3RpdmVMb2NhbGUsIGZvcm1hdHRpbmdPcHRpb25zKSk7XG4gICAgY29uc3QgbG9jYWxpemVkRW5kRGF0ZSA9IGVuZERhdGUgJiZcbiAgICAgIHRoaXMuZm9ybWF0TnVtZXJhbHMoZW5kRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcodGhpcy5lZmZlY3RpdmVMb2NhbGUsIGZvcm1hdHRpbmdPcHRpb25zKSk7XG4gICAgdGhpcy5zZXRJbnB1dFZhbHVlKGxvY2FsaXplZERhdGUgPz8gXCJcIiwgXCJzdGFydFwiKTtcbiAgICB0aGlzLnNldElucHV0VmFsdWUoKHRoaXMucmFuZ2UgJiYgbG9jYWxpemVkRW5kRGF0ZSkgPz8gXCJcIiwgXCJlbmRcIik7XG4gIH1cbiAgd2FybkFib3V0SW52YWxpZFZhbHVlKHZhbHVlKSB7XG4gICAgY29uc29sZS53YXJuKGBUaGUgc3BlY2lmaWVkIHZhbHVlIFwiJHt2YWx1ZX1cIiBkb2VzIG5vdCBjb25mb3JtIHRvIHRoZSByZXF1aXJlZCBmb3JtYXQsIFwiWVlZWS1NTS1ERFwiLmApO1xuICB9XG4gIGdldE5vcm1hbGl6ZWREYXRlKHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGlmICghaXNUd29EaWdpdFllYXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IHsgZGF5LCBtb250aCwgeWVhciB9ID0gZGF0ZVBhcnRzRnJvbUlTTyh2YWx1ZSk7XG4gICAgY29uc3Qgbm9ybWFsaXplZFllYXIgPSBub3JtYWxpemVUb0N1cnJlbnRDZW50dXJ5KE51bWJlcih5ZWFyKSk7XG4gICAgcmV0dXJuIGAke25vcm1hbGl6ZWRZZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICB9XG4gIHN0YXRpYyBnZXQgZGVsZWdhdGVzRm9jdXMoKSB7IHJldHVybiB0cnVlOyB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJmb2N1c1RyYXBEaXNhYmxlZFwiOiBbXCJoYW5kbGVGb2N1c1RyYXBEaXNhYmxlZFwiXSxcbiAgICBcImRpc2FibGVkXCI6IFtcImhhbmRsZURpc2FibGVkQW5kUmVhZE9ubHlDaGFuZ2VcIl0sXG4gICAgXCJyZWFkT25seVwiOiBbXCJoYW5kbGVEaXNhYmxlZEFuZFJlYWRPbmx5Q2hhbmdlXCJdLFxuICAgIFwidmFsdWVcIjogW1widmFsdWVXYXRjaGVyXCJdLFxuICAgIFwidmFsdWVBc0RhdGVcIjogW1widmFsdWVBc0RhdGVXYXRjaGVyXCJdLFxuICAgIFwiZmxpcFBsYWNlbWVudHNcIjogW1wiZmxpcFBsYWNlbWVudHNIYW5kbGVyXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwibWluXCI6IFtcIm9uTWluQ2hhbmdlZFwiXSxcbiAgICBcIm1heFwiOiBbXCJvbk1heENoYW5nZWRcIl0sXG4gICAgXCJvcGVuXCI6IFtcIm9wZW5IYW5kbGVyXCJdLFxuICAgIFwib3ZlcmxheVBvc2l0aW9uaW5nXCI6IFtcIm92ZXJsYXlQb3NpdGlvbmluZ0hhbmRsZXJcIl0sXG4gICAgXCJsYXlvdXRcIjogW1wic2V0UmVmZXJlbmNlRWxcIl0sXG4gICAgXCJmb2N1c2VkSW5wdXRcIjogW1wic2V0UmVmZXJlbmNlRWxcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wibG9hZExvY2FsZURhdGFcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gaW5wdXREYXRlUGlja2VyQ3NzOyB9XG59LCBbMTcsIFwiY2FsY2l0ZS1pbnB1dC1kYXRlLXBpY2tlclwiLCB7XG4gICAgXCJkaXNhYmxlZFwiOiBbNTE2XSxcbiAgICBcImZvY3VzVHJhcERpc2FibGVkXCI6IFs1MTYsIFwiZm9jdXMtdHJhcC1kaXNhYmxlZFwiXSxcbiAgICBcImZvcm1cIjogWzUxM10sXG4gICAgXCJyZWFkT25seVwiOiBbNTE2LCBcInJlYWQtb25seVwiXSxcbiAgICBcInZhbHVlXCI6IFsxMDI1XSxcbiAgICBcImZsaXBQbGFjZW1lbnRzXCI6IFsxNl0sXG4gICAgXCJoZWFkaW5nTGV2ZWxcIjogWzUxNCwgXCJoZWFkaW5nLWxldmVsXCJdLFxuICAgIFwidmFsdWVBc0RhdGVcIjogWzEwNDBdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJtaW5Bc0RhdGVcIjogWzEwNDBdLFxuICAgIFwibWF4QXNEYXRlXCI6IFsxMDQwXSxcbiAgICBcIm1pblwiOiBbMV0sXG4gICAgXCJtYXhcIjogWzFdLFxuICAgIFwib3BlblwiOiBbMTU0MF0sXG4gICAgXCJuYW1lXCI6IFs1MTNdLFxuICAgIFwibnVtYmVyaW5nU3lzdGVtXCI6IFs1MTMsIFwibnVtYmVyaW5nLXN5c3RlbVwiXSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwic3RhdHVzXCI6IFs1MTNdLFxuICAgIFwicGxhY2VtZW50XCI6IFs1MTNdLFxuICAgIFwicmFuZ2VcIjogWzUxNl0sXG4gICAgXCJyZXF1aXJlZFwiOiBbNTE2XSxcbiAgICBcIm92ZXJsYXlQb3NpdGlvbmluZ1wiOiBbNTEzLCBcIm92ZXJsYXktcG9zaXRpb25pbmdcIl0sXG4gICAgXCJwcm94aW1pdHlTZWxlY3Rpb25EaXNhYmxlZFwiOiBbNCwgXCJwcm94aW1pdHktc2VsZWN0aW9uLWRpc2FibGVkXCJdLFxuICAgIFwibGF5b3V0XCI6IFs1MTNdLFxuICAgIFwiZGF0ZVBpY2tlckFjdGl2ZURhdGVcIjogWzMyXSxcbiAgICBcImRlZmF1bHRNZXNzYWdlc1wiOiBbMzJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFszMl0sXG4gICAgXCJmb2N1c2VkSW5wdXRcIjogWzMyXSxcbiAgICBcImxvY2FsZURhdGFcIjogWzMyXSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF0sXG4gICAgXCJyZXBvc2l0aW9uXCI6IFs2NF1cbiAgfSwgW1swLCBcImNhbGNpdGVEYXlTZWxlY3RcIiwgXCJjYWxjaXRlRGF5U2VsZWN0SGFuZGxlclwiXV1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1pbnB1dC1kYXRlLXBpY2tlclwiLCBcImNhbGNpdGUtZGF0ZS1waWNrZXJcIiwgXCJjYWxjaXRlLWRhdGUtcGlja2VyLWRheVwiLCBcImNhbGNpdGUtZGF0ZS1waWNrZXItbW9udGhcIiwgXCJjYWxjaXRlLWRhdGUtcGlja2VyLW1vbnRoLWhlYWRlclwiLCBcImNhbGNpdGUtaWNvblwiLCBcImNhbGNpdGUtaW5wdXQtdGV4dFwiLCBcImNhbGNpdGUtcHJvZ3Jlc3NcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtaW5wdXQtZGF0ZS1waWNrZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBJbnB1dERhdGVQaWNrZXIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtZGF0ZS1waWNrZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkOCgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtZGF0ZS1waWNrZXItZGF5XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDcoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWRhdGUtcGlja2VyLW1vbnRoXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDYoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWRhdGUtcGlja2VyLW1vbnRoLWhlYWRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ1KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDQoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWlucHV0LXRleHRcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtcHJvZ3Jlc3NcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcblxuY29uc3QgQ2FsY2l0ZUlucHV0RGF0ZVBpY2tlciA9IElucHV0RGF0ZVBpY2tlcjtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVJbnB1dERhdGVQaWNrZXIsIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHkgYXMgaXNCZWZvcmUsIHEgYXMgcXVlcnlFbGVtZW50Um9vdHMsIGMgYXMgY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5IH0gZnJvbSAnLi9kb20uanMnO1xuXG4vKipcbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHlcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgbGFiZWxDbGlja0V2ZW50ID0gXCJjYWxjaXRlSW50ZXJuYWxMYWJlbENsaWNrXCI7XG5jb25zdCBsYWJlbENvbm5lY3RlZEV2ZW50ID0gXCJjYWxjaXRlSW50ZXJuYWxMYWJlbENvbm5lY3RlZFwiO1xuY29uc3QgbGFiZWxEaXNjb25uZWN0ZWRFdmVudCA9IFwiY2FsY2l0ZUludGVybmFsTGFiZWxEaXNjb25uZWN0ZWRcIjtcbmNvbnN0IGxhYmVsVGFnTmFtZSA9IFwiY2FsY2l0ZS1sYWJlbFwiO1xuY29uc3QgbGFiZWxUb0xhYmVsYWJsZXMgPSBuZXcgV2Vha01hcCgpO1xuY29uc3Qgb25MYWJlbENsaWNrTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IG9uTGFiZWxDb25uZWN0ZWRNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3Qgb25MYWJlbERpc2Nvbm5lY3RlZE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB1bmxhYmVsZWRDb21wb25lbnRzID0gbmV3IFdlYWtTZXQoKTtcbmNvbnN0IGZpbmRMYWJlbEZvckNvbXBvbmVudCA9IChjb21wb25lbnRFbCkgPT4ge1xuICBjb25zdCB7IGlkIH0gPSBjb21wb25lbnRFbDtcbiAgY29uc3QgZm9yTGFiZWwgPSBpZCAmJiBxdWVyeUVsZW1lbnRSb290cyhjb21wb25lbnRFbCwgeyBzZWxlY3RvcjogYCR7bGFiZWxUYWdOYW1lfVtmb3I9XCIke2lkfVwiXWAgfSk7XG4gIGlmIChmb3JMYWJlbCkge1xuICAgIHJldHVybiBmb3JMYWJlbDtcbiAgfVxuICBjb25zdCBwYXJlbnRMYWJlbCA9IGNsb3Nlc3RFbGVtZW50Q3Jvc3NTaGFkb3dCb3VuZGFyeShjb21wb25lbnRFbCwgbGFiZWxUYWdOYW1lKTtcbiAgaWYgKCFwYXJlbnRMYWJlbCB8fFxuICAgIC8vIGxhYmVsYWJsZSBjb21wb25lbnRzIHdpdGhpbiBvdGhlciBjdXN0b20gZWxlbWVudHMgYXJlIG5vdCBjb25zaWRlcmVkIGxhYmVsYWJsZVxuICAgIGhhc0FuY2VzdG9yQ3VzdG9tRWxlbWVudHMocGFyZW50TGFiZWwsIGNvbXBvbmVudEVsKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBwYXJlbnRMYWJlbDtcbn07XG5mdW5jdGlvbiBoYXNBbmNlc3RvckN1c3RvbUVsZW1lbnRzKGxhYmVsLCBjb21wb25lbnRFbCkge1xuICBsZXQgdHJhdmVyc2VkRWxlbWVudHM7XG4gIGNvbnN0IGN1c3RvbUVsZW1lbnRBbmNlc3RvckNoZWNrRXZlbnRUeXBlID0gXCJjdXN0b20tZWxlbWVudC1hbmNlc3Rvci1jaGVja1wiO1xuICBjb25zdCBsaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgIHRyYXZlcnNlZEVsZW1lbnRzID0gY29tcG9zZWRQYXRoLnNsaWNlKGNvbXBvc2VkUGF0aC5pbmRleE9mKGNvbXBvbmVudEVsKSwgY29tcG9zZWRQYXRoLmluZGV4T2YobGFiZWwpKTtcbiAgfTtcbiAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihjdXN0b21FbGVtZW50QW5jZXN0b3JDaGVja0V2ZW50VHlwZSwgbGlzdGVuZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgY29tcG9uZW50RWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoY3VzdG9tRWxlbWVudEFuY2VzdG9yQ2hlY2tFdmVudFR5cGUsIHsgY29tcG9zZWQ6IHRydWUsIGJ1YmJsZXM6IHRydWUgfSkpO1xuICBsYWJlbC5yZW1vdmVFdmVudExpc3RlbmVyKGN1c3RvbUVsZW1lbnRBbmNlc3RvckNoZWNrRXZlbnRUeXBlLCBsaXN0ZW5lcik7XG4gIGNvbnN0IGFuY2VzdG9yQ3VzdG9tRWxlbWVudHMgPSB0cmF2ZXJzZWRFbGVtZW50c1xuICAgIC5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gY29tcG9uZW50RWwgJiYgZWwgIT09IGxhYmVsKVxuICAgIC5maWx0ZXIoKGVsKSA9PiBlbC50YWdOYW1lPy5pbmNsdWRlcyhcIi1cIikpO1xuICByZXR1cm4gYW5jZXN0b3JDdXN0b21FbGVtZW50cy5sZW5ndGggPiAwO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gc2V0IHVwIGxhYmVsIGludGVyYWN0aW9ucyBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RMYWJlbChjb21wb25lbnQpIHtcbiAgY29uc3QgbGFiZWxFbCA9IGZpbmRMYWJlbEZvckNvbXBvbmVudChjb21wb25lbnQuZWwpO1xuICBpZiAoKG9uTGFiZWxDbGlja01hcC5oYXMobGFiZWxFbCkgJiYgbGFiZWxFbCA9PT0gY29tcG9uZW50LmxhYmVsRWwpIHx8XG4gICAgKCFsYWJlbEVsICYmIHVubGFiZWxlZENvbXBvbmVudHMuaGFzKGNvbXBvbmVudCkpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGJvdW5kT25MYWJlbERpc2Nvbm5lY3RlZCA9IG9uTGFiZWxEaXNjb25uZWN0ZWQuYmluZChjb21wb25lbnQpO1xuICBpZiAobGFiZWxFbCkge1xuICAgIGNvbXBvbmVudC5sYWJlbEVsID0gbGFiZWxFbDtcbiAgICBjb25zdCBsYWJlbGFibGVzID0gbGFiZWxUb0xhYmVsYWJsZXMuZ2V0KGxhYmVsRWwpIHx8IFtdO1xuICAgIGxhYmVsYWJsZXMucHVzaChjb21wb25lbnQpO1xuICAgIGxhYmVsVG9MYWJlbGFibGVzLnNldChsYWJlbEVsLCBsYWJlbGFibGVzLnNvcnQoc29ydEJ5RE9NT3JkZXIpKTtcbiAgICBpZiAoIW9uTGFiZWxDbGlja01hcC5oYXMoY29tcG9uZW50LmxhYmVsRWwpKSB7XG4gICAgICBvbkxhYmVsQ2xpY2tNYXAuc2V0KGNvbXBvbmVudC5sYWJlbEVsLCBvbkxhYmVsQ2xpY2spO1xuICAgICAgY29tcG9uZW50LmxhYmVsRWwuYWRkRXZlbnRMaXN0ZW5lcihsYWJlbENsaWNrRXZlbnQsIG9uTGFiZWxDbGljayk7XG4gICAgfVxuICAgIHVubGFiZWxlZENvbXBvbmVudHMuZGVsZXRlKGNvbXBvbmVudCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbENvbm5lY3RlZEV2ZW50LCBvbkxhYmVsQ29ubmVjdGVkTWFwLmdldChjb21wb25lbnQpKTtcbiAgICBvbkxhYmVsRGlzY29ubmVjdGVkTWFwLnNldChjb21wb25lbnQsIGJvdW5kT25MYWJlbERpc2Nvbm5lY3RlZCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihsYWJlbERpc2Nvbm5lY3RlZEV2ZW50LCBib3VuZE9uTGFiZWxEaXNjb25uZWN0ZWQpO1xuICB9XG4gIGVsc2UgaWYgKCF1bmxhYmVsZWRDb21wb25lbnRzLmhhcyhjb21wb25lbnQpKSB7XG4gICAgYm91bmRPbkxhYmVsRGlzY29ubmVjdGVkKCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbERpc2Nvbm5lY3RlZEV2ZW50LCBvbkxhYmVsRGlzY29ubmVjdGVkTWFwLmdldChjb21wb25lbnQpKTtcbiAgfVxufVxuLyoqXG4gKiBIZWxwZXIgdG8gdGVhciBkb3duIGxhYmVsIGludGVyYWN0aW9ucyBvbiBkaXNjb25uZWN0ZWRDYWxsYmFjayBvbiBsYWJlbGFibGUgY29tcG9uZW50cy5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RMYWJlbChjb21wb25lbnQpIHtcbiAgdW5sYWJlbGVkQ29tcG9uZW50cy5kZWxldGUoY29tcG9uZW50KTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbENvbm5lY3RlZEV2ZW50LCBvbkxhYmVsQ29ubmVjdGVkTWFwLmdldChjb21wb25lbnQpKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbERpc2Nvbm5lY3RlZEV2ZW50LCBvbkxhYmVsRGlzY29ubmVjdGVkTWFwLmdldChjb21wb25lbnQpKTtcbiAgb25MYWJlbENvbm5lY3RlZE1hcC5kZWxldGUoY29tcG9uZW50KTtcbiAgb25MYWJlbERpc2Nvbm5lY3RlZE1hcC5kZWxldGUoY29tcG9uZW50KTtcbiAgaWYgKCFjb21wb25lbnQubGFiZWxFbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBsYWJlbGFibGVzID0gbGFiZWxUb0xhYmVsYWJsZXMuZ2V0KGNvbXBvbmVudC5sYWJlbEVsKTtcbiAgaWYgKGxhYmVsYWJsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgY29tcG9uZW50LmxhYmVsRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbENsaWNrRXZlbnQsIG9uTGFiZWxDbGlja01hcC5nZXQoY29tcG9uZW50LmxhYmVsRWwpKTtcbiAgICBvbkxhYmVsQ2xpY2tNYXAuZGVsZXRlKGNvbXBvbmVudC5sYWJlbEVsKTtcbiAgfVxuICBsYWJlbFRvTGFiZWxhYmxlcy5zZXQoY29tcG9uZW50LmxhYmVsRWwsIGxhYmVsYWJsZXMuZmlsdGVyKChsYWJlbGFibGUpID0+IGxhYmVsYWJsZSAhPT0gY29tcG9uZW50KS5zb3J0KHNvcnRCeURPTU9yZGVyKSk7XG4gIGNvbXBvbmVudC5sYWJlbEVsID0gbnVsbDtcbn1cbmZ1bmN0aW9uIHNvcnRCeURPTU9yZGVyKGEsIGIpIHtcbiAgcmV0dXJuIGlzQmVmb3JlKGEuZWwsIGIuZWwpID8gLTEgOiAxO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gZ2V0IHRoZSBsYWJlbCB0ZXh0IGZyb20gYSBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBnZXRMYWJlbFRleHQoY29tcG9uZW50KSB7XG4gIHJldHVybiBjb21wb25lbnQubGFiZWwgfHwgY29tcG9uZW50LmxhYmVsRWw/LnRleHRDb250ZW50Py50cmltKCkgfHwgXCJcIjtcbn1cbmZ1bmN0aW9uIG9uTGFiZWxDbGljayhldmVudCkge1xuICBjb25zdCBsYWJlbENsaWNrVGFyZ2V0ID0gZXZlbnQuZGV0YWlsLnNvdXJjZUV2ZW50LnRhcmdldDtcbiAgY29uc3QgbGFiZWxhYmxlcyA9IGxhYmVsVG9MYWJlbGFibGVzLmdldCh0aGlzKTtcbiAgY29uc3QgY2xpY2tlZExhYmVsYWJsZSA9IGxhYmVsYWJsZXMuZmluZCgobGFiZWxhYmxlKSA9PiBsYWJlbGFibGUuZWwgPT09IGxhYmVsQ2xpY2tUYXJnZXQpO1xuICBjb25zdCBsYWJlbGFibGVDaGlsZENsaWNrZWQgPSBsYWJlbGFibGVzLmluY2x1ZGVzKGNsaWNrZWRMYWJlbGFibGUpO1xuICBpZiAobGFiZWxhYmxlQ2hpbGRDbGlja2VkKSB7XG4gICAgLy8gbm8gbmVlZCB0byBmb3J3YXJkIGNsaWNrIGFzIGxhYmVsYWJsZSB3aWxsIHJlY2VpdmUgZm9jdXNcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZmlyc3RMYWJlbGFibGUgPSBsYWJlbGFibGVzWzBdO1xuICBpZiAoZmlyc3RMYWJlbGFibGUuZGlzYWJsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZmlyc3RMYWJlbGFibGUub25MYWJlbENsaWNrKGV2ZW50KTtcbn1cbmZ1bmN0aW9uIG9uTGFiZWxDb25uZWN0ZWQoKSB7XG4gIGlmICh1bmxhYmVsZWRDb21wb25lbnRzLmhhcyh0aGlzKSkge1xuICAgIGNvbm5lY3RMYWJlbCh0aGlzKTtcbiAgfVxufVxuZnVuY3Rpb24gb25MYWJlbERpc2Nvbm5lY3RlZCgpIHtcbiAgdW5sYWJlbGVkQ29tcG9uZW50cy5hZGQodGhpcyk7XG4gIGNvbnN0IGJvdW5kT25MYWJlbENvbm5lY3RlZCA9IG9uTGFiZWxDb25uZWN0ZWRNYXAuZ2V0KHRoaXMpIHx8IG9uTGFiZWxDb25uZWN0ZWQuYmluZCh0aGlzKTtcbiAgb25MYWJlbENvbm5lY3RlZE1hcC5zZXQodGhpcywgYm91bmRPbkxhYmVsQ29ubmVjdGVkKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihsYWJlbENvbm5lY3RlZEV2ZW50LCBib3VuZE9uTGFiZWxDb25uZWN0ZWQpO1xufVxuXG5leHBvcnQgeyBsYWJlbERpc2Nvbm5lY3RlZEV2ZW50IGFzIGEsIGNvbm5lY3RMYWJlbCBhcyBjLCBkaXNjb25uZWN0TGFiZWwgYXMgZCwgZ2V0TGFiZWxUZXh0IGFzIGcsIGxhYmVsQ29ubmVjdGVkRXZlbnQgYXMgbCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9