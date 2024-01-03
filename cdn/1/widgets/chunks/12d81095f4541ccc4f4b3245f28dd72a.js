"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_input-number_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/input-number.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/input-number.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ InputNumber),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ "./node_modules/@esri/calcite-components/dist/components/form.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _label2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./label2.js */ "./node_modules/@esri/calcite-components/dist/components/label2.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./progress.js */ "./node_modules/@esri/calcite-components/dist/components/progress.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */














const CSS = {
  loader: "loader",
  clearButton: "clear-button",
  editingEnabled: "editing-enabled",
  inlineChild: "inline-child",
  inputIcon: "icon",
  prefix: "prefix",
  suffix: "suffix",
  numberButtonWrapper: "number-button-wrapper",
  buttonItemHorizontal: "number-button-item--horizontal",
  wrapper: "element-wrapper",
  inputWrapper: "wrapper",
  actionWrapper: "action-wrapper",
  resizeIconWrapper: "resize-icon-wrapper",
  numberButtonItem: "number-button-item",
};
const SLOTS = {
  action: "action",
};

const inputNumberCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;text-overflow:ellipsis;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}input:placeholder-shown{text-overflow:ellipsis}input{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}input::placeholder,input:-ms-input-placeholder,input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}input:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}input[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus{color:var(--calcite-ui-text-1)}calcite-icon{color:var(--calcite-ui-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([status=invalid]) input{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-app-z-index);display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-ui-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item:active{background-color:var(--calcite-ui-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}.inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.inline-child .editing-enabled{background-color:inherit}.inline-child:not(.editing-enabled){display:flex;cursor:pointer;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";

const InputNumber = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalInputNumberFocus = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteInternalInputNumberFocus", 6);
    this.calciteInternalInputNumberBlur = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteInternalInputNumberBlur", 6);
    this.calciteInputNumberInput = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteInputNumberInput", 7);
    this.calciteInputNumberChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteInputNumberChange", 6);
    this.previousValueOrigin = "initial";
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_7__.c)("mutation", () => this.setDisabledAction());
    this.userChangedValue = false;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.keyDownHandler = (event) => {
      if (this.readOnly || this.disabled) {
        return;
      }
      if (this.isClearable && event.key === "Escape") {
        this.clearInputValue(event);
        event.preventDefault();
      }
      if (event.key === "Enter" && !event.defaultPrevented) {
        if ((0,_form_js__WEBPACK_IMPORTED_MODULE_1__.s)(this)) {
          event.preventDefault();
        }
      }
    };
    this.clearInputValue = (nativeEvent) => {
      this.setNumberValue({
        committing: true,
        nativeEvent,
        origin: "user",
        value: "",
      });
    };
    this.emitChangeIfUserModified = () => {
      if (this.previousValueOrigin === "user" && this.value !== this.previousEmittedNumberValue) {
        this.calciteInputNumberChange.emit();
        this.setPreviousEmittedNumberValue(this.value);
      }
    };
    this.inputNumberBlurHandler = () => {
      window.clearInterval(this.nudgeNumberValueIntervalId);
      this.calciteInternalInputNumberBlur.emit();
      this.emitChangeIfUserModified();
    };
    this.clickHandler = (event) => {
      if (this.disabled) {
        return;
      }
      const slottedActionEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.g)(this.el, "action");
      if (event.target !== slottedActionEl) {
        this.setFocus();
      }
    };
    this.inputNumberFocusHandler = () => {
      this.calciteInternalInputNumberFocus.emit();
    };
    this.inputNumberInputHandler = (nativeEvent) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      const value = nativeEvent.target.value;
      _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator,
      };
      const delocalizedValue = _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.delocalize(value);
      if (nativeEvent.inputType === "insertFromPaste") {
        if (!(0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(delocalizedValue) ||
          (this.integer && (delocalizedValue.includes("e") || delocalizedValue.includes(".")))) {
          nativeEvent.preventDefault();
        }
        this.setNumberValue({
          nativeEvent,
          origin: "user",
          value: (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.p)(delocalizedValue),
        });
        this.childNumberEl.value = this.localizedValue;
      }
      else {
        this.setNumberValue({
          nativeEvent,
          origin: "user",
          value: delocalizedValue,
        });
      }
    };
    this.inputNumberKeyDownHandler = (event) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      if (event.key === "ArrowUp") {
        /* prevent default behavior of moving cursor to the beginning of the input when holding down ArrowUp */
        event.preventDefault();
        this.nudgeNumberValue("up", event);
        return;
      }
      if (event.key === "ArrowDown") {
        this.nudgeNumberValue("down", event);
        return;
      }
      const supportedKeys = [
        ..._key_js__WEBPACK_IMPORTED_MODULE_3__.n,
        "ArrowLeft",
        "ArrowRight",
        "Backspace",
        "Delete",
        "Enter",
        "Escape",
        "Tab",
      ];
      if (event.altKey || event.ctrlKey || event.metaKey) {
        return;
      }
      const isShiftTabEvent = event.shiftKey && event.key === "Tab";
      if (supportedKeys.includes(event.key) || isShiftTabEvent) {
        if (event.key === "Enter") {
          this.emitChangeIfUserModified();
        }
        return;
      }
      _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator,
      };
      if (event.key === _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.decimal && !this.integer) {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && this.childNumberEl.value.indexOf(_locale_js__WEBPACK_IMPORTED_MODULE_6__.n.decimal) === -1) {
          return;
        }
      }
      if (/[eE]/.test(event.key) && !this.integer) {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && !/[eE]/.test(this.childNumberEl.value)) {
          return;
        }
      }
      if (event.key === "-") {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && this.childNumberEl.value.split("-").length <= 2) {
          return;
        }
      }
      event.preventDefault();
    };
    this.nudgeNumberValue = (direction, nativeEvent) => {
      if (nativeEvent instanceof KeyboardEvent && nativeEvent.repeat) {
        return;
      }
      const inputMax = this.maxString ? parseFloat(this.maxString) : null;
      const inputMin = this.minString ? parseFloat(this.minString) : null;
      const valueNudgeDelayInMs = 150;
      this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
      if (this.nudgeNumberValueIntervalId) {
        window.clearInterval(this.nudgeNumberValueIntervalId);
      }
      let firstValueNudge = true;
      this.nudgeNumberValueIntervalId = window.setInterval(() => {
        if (firstValueNudge) {
          firstValueNudge = false;
          return;
        }
        this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
      }, valueNudgeDelayInMs);
    };
    this.nudgeButtonPointerUpHandler = (event) => {
      if (!(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.j)(event)) {
        return;
      }
      window.clearInterval(this.nudgeNumberValueIntervalId);
    };
    this.nudgeButtonPointerOutHandler = () => {
      window.clearInterval(this.nudgeNumberValueIntervalId);
    };
    this.nudgeButtonPointerDownHandler = (event) => {
      if (!(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.j)(event)) {
        return;
      }
      event.preventDefault();
      const direction = event.target.dataset.adjustment;
      if (!this.disabled) {
        this.nudgeNumberValue(direction, event);
      }
    };
    this.hiddenInputChangeHandler = (event) => {
      if (event.target.name === this.name) {
        this.setNumberValue({
          value: event.target.value,
          origin: "direct",
        });
      }
      event.stopPropagation();
    };
    this.setChildNumberElRef = (el) => {
      this.childNumberEl = el;
    };
    this.setInputNumberValue = (newInputValue) => {
      if (!this.childNumberEl) {
        return;
      }
      this.childNumberEl.value = newInputValue;
    };
    this.setPreviousEmittedNumberValue = (value) => {
      this.previousEmittedNumberValue = this.normalizeValue(value);
    };
    this.setPreviousNumberValue = (value) => {
      this.previousValue = this.normalizeValue(value);
    };
    this.setNumberValue = ({ committing = false, nativeEvent, origin, previousValue, value, }) => {
      _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator,
      };
      const isValueDeleted = this.previousValue?.length > value.length || this.value?.length > value.length;
      const valueHandleInteger = this.integer ? value.replace(/[e.]/g, "") : value;
      const hasTrailingDecimalSeparator = valueHandleInteger.charAt(valueHandleInteger.length - 1) === ".";
      const sanitizedValue = hasTrailingDecimalSeparator && isValueDeleted
        ? valueHandleInteger
        : (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.s)(valueHandleInteger);
      const newValue = value && !sanitizedValue
        ? (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(this.previousValue)
          ? this.previousValue
          : ""
        : sanitizedValue;
      let newLocalizedValue = _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.localize(newValue);
      if (origin !== "connected" && !hasTrailingDecimalSeparator) {
        newLocalizedValue = (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.e)(newLocalizedValue, newValue, _locale_js__WEBPACK_IMPORTED_MODULE_6__.n);
      }
      // adds localized trailing decimal separator
      this.localizedValue =
        hasTrailingDecimalSeparator && isValueDeleted
          ? `${newLocalizedValue}${_locale_js__WEBPACK_IMPORTED_MODULE_6__.n.decimal}`
          : newLocalizedValue;
      this.setPreviousNumberValue(previousValue ?? this.value);
      this.previousValueOrigin = origin;
      this.userChangedValue = origin === "user" && this.value !== newValue;
      // don't sanitize the start of negative/decimal numbers, but
      // don't set value to an invalid number
      this.value = ["-", "."].includes(newValue) ? "" : newValue;
      if (origin === "direct") {
        this.setInputNumberValue(newLocalizedValue);
        this.setPreviousEmittedNumberValue(newLocalizedValue);
      }
      if (nativeEvent) {
        const calciteInputNumberInputEvent = this.calciteInputNumberInput.emit();
        if (calciteInputNumberInputEvent.defaultPrevented) {
          this.value = this.previousValue;
          this.localizedValue = _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.localize(this.previousValue);
        }
        else if (committing) {
          this.emitChangeIfUserModified();
        }
      }
    };
    this.inputNumberKeyUpHandler = () => {
      window.clearInterval(this.nudgeNumberValueIntervalId);
    };
    this.alignment = "start";
    this.autofocus = false;
    this.clearable = false;
    this.disabled = false;
    this.form = undefined;
    this.groupSeparator = false;
    this.hidden = false;
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.integer = false;
    this.label = undefined;
    this.loading = false;
    this.numberingSystem = undefined;
    this.localeFormat = false;
    this.max = undefined;
    this.min = undefined;
    this.maxLength = undefined;
    this.minLength = undefined;
    this.name = undefined;
    this.numberButtonType = "vertical";
    this.placeholder = undefined;
    this.prefixText = undefined;
    this.readOnly = false;
    this.required = false;
    this.scale = "m";
    this.status = "idle";
    this.step = undefined;
    this.autocomplete = undefined;
    this.inputMode = "decimal";
    this.enterKeyHint = undefined;
    this.suffixText = undefined;
    this.editingEnabled = false;
    this.value = "";
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = "";
    this.defaultMessages = undefined;
    this.localizedValue = undefined;
    this.slottedActionElDisabledInternally = false;
  }
  disabledWatcher() {
    this.setDisabledAction();
  }
  /** watcher to update number-to-string for max */
  maxWatcher() {
    this.maxString = this.max?.toString() || null;
  }
  /** watcher to update number-to-string for min */
  minWatcher() {
    this.minString = this.min?.toString() || null;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  valueWatcher(newValue, previousValue) {
    if (!this.userChangedValue) {
      this.setNumberValue({
        origin: "direct",
        previousValue,
        value: newValue == null || newValue == ""
          ? ""
          : (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(newValue)
            ? newValue
            : this.previousValue || "",
      });
      this.warnAboutInvalidNumberValue(newValue);
    }
    this.userChangedValue = false;
  }
  updateRequestedIcon() {
    this.requestedIcon = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.h)({}, this.icon, "number");
  }
  get isClearable() {
    return this.clearable && this.value.length > 0;
  }
  effectiveLocaleWatcher(locale) {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_8__.u)(this, this.effectiveLocale);
    _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.numberFormatOptions = {
      locale,
      numberingSystem: this.numberingSystem,
      useGrouping: false,
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
    this.inlineEditableEl = this.el.closest("calcite-inline-editable");
    if (this.inlineEditableEl) {
      this.editingEnabled = this.inlineEditableEl.editingEnabled || false;
    }
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    this.setPreviousEmittedNumberValue(this.value);
    this.setPreviousNumberValue(this.value);
    this.warnAboutInvalidNumberValue(this.value);
    this.setNumberValue({
      origin: "connected",
      value: (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(this.value) ? this.value : "",
    });
    this.mutationObserver?.observe(this.el, { childList: true });
    this.setDisabledAction();
    this.el.addEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_8__.d)(this);
    this.mutationObserver?.disconnect();
    this.el.removeEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.a)(this);
    this.maxString = this.max?.toString();
    this.minString = this.min?.toString();
    this.requestedIcon = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.h)({}, this.icon, "number");
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_8__.s)(this);
  }
  componentShouldUpdate(newValue, oldValue, property) {
    if (property === "value" && newValue && !(0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(newValue)) {
      this.setNumberValue({
        origin: "reset",
        value: oldValue,
      });
      return false;
    }
    return true;
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    this.childNumberEl?.focus();
  }
  /** Selects the text of the component's `value`. */
  async selectText() {
    this.childNumberEl?.select();
  }
  onLabelClick() {
    this.setFocus();
  }
  incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent) {
    const { value } = this;
    const adjustment = direction === "up" ? 1 : -1;
    const stepHandleInteger = this.integer && this.step !== "any" ? Math.round(this.step) : this.step;
    const inputStep = stepHandleInteger === "any" ? 1 : Math.abs(stepHandleInteger || 1);
    const inputVal = new _locale_js__WEBPACK_IMPORTED_MODULE_6__.B(value !== "" ? value : "0");
    const nudgedValue = inputVal.add(`${inputStep * adjustment}`);
    const nudgedValueBelowInputMin = () => typeof inputMin === "number" &&
      !isNaN(inputMin) &&
      nudgedValue.subtract(`${inputMin}`).isNegative;
    const nudgedValueAboveInputMax = () => typeof inputMax === "number" &&
      !isNaN(inputMax) &&
      !nudgedValue.subtract(`${inputMax}`).isNegative;
    const finalValue = nudgedValueBelowInputMin()
      ? `${inputMin}`
      : nudgedValueAboveInputMax()
        ? `${inputMax}`
        : nudgedValue.toString();
    this.setNumberValue({
      committing: true,
      nativeEvent,
      origin: "user",
      value: finalValue,
    });
  }
  onFormReset() {
    this.setNumberValue({
      origin: "reset",
      value: this.defaultValue,
    });
  }
  syncHiddenFormInput(input) {
    input.type = "number";
    input.min = this.min?.toString(10) ?? "";
    input.max = this.max?.toString(10) ?? "";
  }
  setDisabledAction() {
    const slottedActionEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.g)(this.el, "action");
    if (!slottedActionEl) {
      return;
    }
    if (this.disabled) {
      if (slottedActionEl.getAttribute("disabled") == null) {
        this.slottedActionElDisabledInternally = true;
      }
      slottedActionEl.setAttribute("disabled", "");
    }
    else if (this.slottedActionElDisabledInternally) {
      slottedActionEl.removeAttribute("disabled");
      this.slottedActionElDisabledInternally = false;
    }
  }
  normalizeValue(value) {
    return (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(value) ? value : "";
  }
  warnAboutInvalidNumberValue(value) {
    if (value && !(0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(value)) {
      console.warn(`The specified value "${value}" cannot be parsed, or is out of range.`);
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(this.el);
    const loader = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: CSS.loader }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("calcite-progress", { label: this.messages.loading, type: "indeterminate" })));
    const inputClearButton = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("button", { "aria-label": this.messages.clear, class: CSS.clearButton, disabled: this.disabled || this.readOnly, onClick: this.clearInputValue, tabIndex: -1, type: "button" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("calcite-icon", { icon: "x", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_9__.g)(this.scale) })));
    const iconEl = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("calcite-icon", { class: CSS.inputIcon, flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_9__.g)(this.scale) }));
    const isHorizontalNumberButton = this.numberButtonType === "horizontal";
    const numberButtonsHorizontalUp = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("button", { "aria-hidden": "true", class: {
        [CSS.numberButtonItem]: true,
        [CSS.buttonItemHorizontal]: isHorizontalNumberButton,
      }, "data-adjustment": "up", disabled: this.disabled || this.readOnly, onPointerDown: this.nudgeButtonPointerDownHandler, onPointerOut: this.nudgeButtonPointerOutHandler, onPointerUp: this.nudgeButtonPointerUpHandler, tabIndex: -1, type: "button" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("calcite-icon", { icon: "chevron-up", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_9__.g)(this.scale) })));
    const numberButtonsHorizontalDown = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("button", { "aria-hidden": "true", class: {
        [CSS.numberButtonItem]: true,
        [CSS.buttonItemHorizontal]: isHorizontalNumberButton,
      }, "data-adjustment": "down", disabled: this.disabled || this.readOnly, onPointerDown: this.nudgeButtonPointerDownHandler, onPointerOut: this.nudgeButtonPointerOutHandler, onPointerUp: this.nudgeButtonPointerUpHandler, tabIndex: -1, type: "button" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("calcite-icon", { icon: "chevron-down", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_9__.g)(this.scale) })));
    const numberButtonsVertical = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: CSS.numberButtonWrapper }, numberButtonsHorizontalUp, numberButtonsHorizontalDown));
    const prefixText = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: CSS.prefix }, this.prefixText);
    const suffixText = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: CSS.suffix }, this.suffixText);
    const childEl = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("input", { "aria-label": (0,_label2_js__WEBPACK_IMPORTED_MODULE_4__.g)(this), autocomplete: this.autocomplete, autofocus: this.autofocus ? true : null, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.enterKeyHint, inputMode: this.inputMode, key: "localized-input", maxLength: this.maxLength, minLength: this.minLength, name: undefined, onBlur: this.inputNumberBlurHandler, onFocus: this.inputNumberFocusHandler, onInput: this.inputNumberInputHandler, onKeyDown: this.inputNumberKeyDownHandler, onKeyUp: this.inputNumberKeyUpHandler, placeholder: this.placeholder || "", readOnly: this.readOnly, type: "text", value: this.localizedValue,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setChildNumberElRef }));
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.Host, { onClick: this.clickHandler, onKeyDown: this.keyDownHandler }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: { [CSS.inputWrapper]: true, [_dom_js__WEBPACK_IMPORTED_MODULE_0__.C.rtl]: dir === "rtl" } }, this.numberButtonType === "horizontal" && !this.readOnly
      ? numberButtonsHorizontalDown
      : null, this.prefixText ? prefixText : null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: CSS.wrapper }, childEl, this.isClearable ? inputClearButton : null, this.requestedIcon ? iconEl : null, this.loading ? loader : null), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: CSS.actionWrapper }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { name: SLOTS.action })), this.numberButtonType === "vertical" && !this.readOnly ? numberButtonsVertical : null, this.suffixText ? suffixText : null, this.numberButtonType === "horizontal" && !this.readOnly
      ? numberButtonsHorizontalUp
      : null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)(_form_js__WEBPACK_IMPORTED_MODULE_1__.H, { component: this }))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "disabled": ["disabledWatcher"],
    "max": ["maxWatcher"],
    "min": ["minWatcher"],
    "messageOverrides": ["onMessagesChange"],
    "value": ["valueWatcher"],
    "icon": ["updateRequestedIcon"],
    "effectiveLocale": ["effectiveLocaleWatcher"]
  }; }
  static get style() { return inputNumberCss; }
}, [1, "calcite-input-number", {
    "alignment": [513],
    "autofocus": [516],
    "clearable": [516],
    "disabled": [516],
    "form": [513],
    "groupSeparator": [516, "group-separator"],
    "hidden": [516],
    "icon": [520],
    "iconFlipRtl": [516, "icon-flip-rtl"],
    "integer": [4],
    "label": [1],
    "loading": [516],
    "numberingSystem": [513, "numbering-system"],
    "localeFormat": [4, "locale-format"],
    "max": [514],
    "min": [514],
    "maxLength": [514, "max-length"],
    "minLength": [514, "min-length"],
    "name": [513],
    "numberButtonType": [513, "number-button-type"],
    "placeholder": [1],
    "prefixText": [1, "prefix-text"],
    "readOnly": [516, "read-only"],
    "required": [516],
    "scale": [513],
    "status": [513],
    "step": [520],
    "autocomplete": [1],
    "inputMode": [1, "input-mode"],
    "enterKeyHint": [1, "enter-key-hint"],
    "suffixText": [1, "suffix-text"],
    "editingEnabled": [1540, "editing-enabled"],
    "value": [1025],
    "messages": [1040],
    "messageOverrides": [1040],
    "effectiveLocale": [32],
    "defaultMessages": [32],
    "localizedValue": [32],
    "slottedActionElDisabledInternally": [32],
    "setFocus": [64],
    "selectText": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-input-number", "calcite-icon", "calcite-progress"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-input-number":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, InputNumber);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_10__.d)();
      }
      break;
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        (0,_progress_js__WEBPACK_IMPORTED_MODULE_11__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMTJkODEwOTVmNDU0MWNjYzRmNGIzMjQ1ZjI4ZGQ3MmEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRztBQUNzQjtBQUN4QjtBQUNNO0FBQ3hFO0FBQzhDO0FBQ3FCO0FBQzJIO0FBQ3BMO0FBQzZEO0FBQy9EO0FBQ0k7QUFDSTs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGNBQWMseUVBQXlFLGtCQUFrQixzQkFBc0Isc0NBQXNDLGlCQUFpQiwrSUFBK0ksa0JBQWtCLCtCQUErQixzQkFBc0IsdUJBQXVCLHlFQUF5RSxnQkFBZ0IsdUJBQXVCLHNDQUFzQyxpQkFBaUIsK0lBQStJLGdCQUFnQiwrQkFBK0Isb0JBQW9CLHFCQUFxQix5RUFBeUUsbUJBQW1CLG9CQUFvQixxQ0FBcUMsb0JBQW9CLCtJQUErSSxtQkFBbUIsK0JBQStCLHVCQUF1Qix3QkFBd0IseUdBQXlHLFVBQVUsTUFBTSw0RUFBNEUsd0JBQXdCLGtCQUFrQixXQUFXLHNCQUFzQixhQUFhLG9CQUFvQixpQkFBaUIscUJBQXFCLFlBQVksdUJBQXVCLGtCQUFrQixnREFBZ0Qsb0JBQW9CLDhDQUE4QywrQkFBK0Isd0JBQXdCLHVCQUF1QixNQUFNLGlCQUFpQixtQkFBbUIsNENBQTRDLCtCQUErQiw0RUFBNEUsOENBQThDLCtCQUErQixZQUFZLHFDQUFxQywrQkFBK0IsZ0JBQWdCLDhDQUE4Qyw4Q0FBOEMsc0JBQXNCLCtCQUErQixhQUFhLCtCQUErQixNQUFNLDBCQUEwQixZQUFZLHlFQUF5RSxxUEFBcVAsOEJBQThCLHNDQUFzQyxvQ0FBb0MsMkNBQTJDLHFQQUFxUCx1QkFBdUIsMEJBQTBCLHVCQUF1QiwyQkFBMkIsdUJBQXVCLHdCQUF3Qiw2QkFBNkIsMEJBQTBCLDZCQUE2Qiw0QkFBNEIsNkJBQTZCLDRCQUE0QixpQkFBaUIsa0JBQWtCLFFBQVEsb0JBQW9CLFlBQVksbUJBQW1CLE1BQU0sb0JBQW9CLGtCQUFrQixtQ0FBbUMsY0FBYyw2RkFBNkYsY0FBYyx1QkFBdUIsUUFBUSxXQUFXLHNCQUFzQixhQUFhLG9CQUFvQixlQUFlLG1CQUFtQix1QkFBdUIsbUJBQW1CLGlCQUFpQixtQkFBbUIsNENBQTRDLGdEQUFnRCwwQkFBMEIsOEJBQThCLG9CQUFvQixnREFBZ0QsNkZBQTZGLGlDQUFpQywrQkFBK0IsNkZBQTZGLHFCQUFxQixnREFBZ0Qsa0NBQWtDLCtCQUErQixvQkFBb0IseUVBQXlFLHFQQUFxUCx1QkFBdUIsMkNBQTJDLFFBQVEsc0JBQXNCLGlCQUFpQixvQkFBb0Isa0JBQWtCLGNBQWMsZ0JBQWdCLFFBQVEsYUFBYSxnQkFBZ0Isc0JBQXNCLGFBQWEsZ0JBQWdCLG9CQUFvQix5QkFBeUIsaUJBQWlCLHFCQUFxQixtQkFBbUIseUJBQXlCLGlCQUFpQixtQkFBbUIsNENBQTRDLDhDQUE4Qyw4Q0FBOEMsY0FBYywrQkFBK0IsUUFBUSxRQUFRLDRCQUE0QixRQUFRLFFBQVEsOEJBQThCLCtCQUErQixpQkFBaUIsNkJBQTZCLGVBQWUsdUJBQXVCLG9CQUFvQixRQUFRLHNCQUFzQixhQUFhLHNCQUFzQiw2RkFBNkYsOENBQThDLG1CQUFtQixhQUFhLDJDQUEyQyxRQUFRLDRHQUE0Ryx5QkFBeUIsMEdBQTBHLHlCQUF5QixnSkFBZ0osUUFBUSxvQkFBb0Isb0JBQW9CLG1CQUFtQiwwS0FBMEssd0JBQXdCLHlFQUF5RSxpQkFBaUIsbUJBQW1CLDRDQUE0Qyw0QkFBNEIsK0VBQStFLGdEQUFnRCw0RkFBNEYsK0JBQStCLHVFQUF1RSxRQUFRLDZFQUE2RSxnREFBZ0QsMEZBQTBGLCtCQUErQixxRkFBcUYsZ0RBQWdELGtHQUFrRywrQkFBK0IsbUZBQW1GLGdEQUFnRCxnR0FBZ0csK0JBQStCLCtFQUErRSw2QkFBNkIsb0JBQW9CLG1CQUFtQixtQkFBbUIsdUJBQXVCLFdBQVcsc0JBQXNCLGFBQWEsZUFBZSxtQkFBbUIsa0JBQWtCLGlCQUFpQixtQkFBbUIsNENBQTRDLGdEQUFnRCxrQkFBa0Isc0JBQXNCLDZGQUE2Riw4QkFBOEIsaUNBQWlDLG9CQUFvQiw2RkFBNkYsMEJBQTBCLGdEQUFnRCx1Q0FBdUMsK0JBQStCLDJCQUEyQixnREFBZ0QsNkJBQTZCLG9CQUFvQixTQUFTLGtCQUFrQixhQUFhLG1CQUFtQixtQkFBbUIsK0JBQStCLDJCQUEyQixtQ0FBbUMsb0RBQW9ELGNBQWMsNkJBQTZCLDZGQUE2RiwrQkFBK0IseUJBQXlCLG9DQUFvQyxhQUFhLGVBQWUseUJBQXlCLHVCQUF1Qix5Q0FBeUMsb0JBQW9CLHFCQUFxQix3QkFBd0IscUJBQXFCLDZCQUE2QixtQkFBbUIsMEJBQTBCLG1DQUFtQyxzQkFBc0IsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUU1d1Qsa0NBQWtDLDJGQUFrQixlQUFlLGdGQUFXO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG9GQUFXO0FBQ3RELDBDQUEwQyxvRkFBVztBQUNyRCxtQ0FBbUMsb0ZBQVc7QUFDOUMsb0NBQW9DLG9GQUFXO0FBQy9DO0FBQ0EsNEJBQTRCLGdEQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkNBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMENBQVU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5Q0FBcUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IseUNBQXFCO0FBQ3BEO0FBQ0EsYUFBYSw2Q0FBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNkNBQWlCO0FBQ2xDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQ0FBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlDQUFxQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5Q0FBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELHlDQUFxQjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFdBQVcsMENBQXNCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDBDQUFzQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZ0VBQWdFO0FBQzdGLE1BQU0seUNBQXFCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNkNBQW9CO0FBQzlCO0FBQ0EsVUFBVSw2Q0FBYTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIseUNBQXFCO0FBQ25EO0FBQ0EsNEJBQTRCLDZDQUFnQyw4QkFBOEIseUNBQXFCO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQkFBa0IsRUFBRSx5Q0FBcUIsU0FBUztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MseUNBQXFCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2Q0FBYTtBQUN6QjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMENBQWdCLEdBQUc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMENBQWM7QUFDbEIsSUFBSSx5Q0FBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQWtCO0FBQ3RCLElBQUksNkNBQWdCO0FBQ3BCLElBQUksMENBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZDQUFZO0FBQ2hCLElBQUksMkNBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw2Q0FBYTtBQUMxQixLQUFLO0FBQ0wsOENBQThDLGlCQUFpQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxJQUFJLGtEQUFxQjtBQUN6QixJQUFJLDZDQUFlO0FBQ25CLElBQUksMkNBQWM7QUFDbEIsSUFBSSw2Q0FBbUI7QUFDdkIsSUFBSSwwQ0FBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtDQUFzQjtBQUMxQjtBQUNBO0FBQ0EseUJBQXlCLDBDQUFnQixHQUFHO0FBQzVDLFVBQVUsMENBQWE7QUFDdkI7QUFDQTtBQUNBLDZDQUE2Qyw2Q0FBYTtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtDQUFrQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIseUNBQVU7QUFDbkMsd0NBQXdDLHVCQUF1QjtBQUMvRDtBQUNBO0FBQ0EsOEJBQThCLFNBQVM7QUFDdkM7QUFDQTtBQUNBLCtCQUErQixTQUFTO0FBQ3hDO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBDQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNkNBQWE7QUFDeEI7QUFDQTtBQUNBLGtCQUFrQiw2Q0FBYTtBQUMvQiwyQ0FBMkMsTUFBTTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDBDQUFhO0FBQzdCLG9CQUFvQiwwRUFBQyxVQUFVLG1CQUFtQixFQUFFLDBFQUFDLHVCQUF1QixxREFBcUQ7QUFDakksOEJBQThCLDBFQUFDLGFBQWEsa0tBQWtLLEVBQUUsMEVBQUMsbUJBQW1CLGtCQUFrQixnREFBWSxjQUFjO0FBQ2hSLG9CQUFvQiwwRUFBQyxtQkFBbUIsa0ZBQWtGLGdEQUFZLGNBQWM7QUFDcEo7QUFDQSx1Q0FBdUMsMEVBQUMsYUFBYTtBQUNyRDtBQUNBO0FBQ0EsT0FBTyxzUEFBc1AsRUFBRSwwRUFBQyxtQkFBbUIsMkJBQTJCLGdEQUFZLGNBQWM7QUFDeFUseUNBQXlDLDBFQUFDLGFBQWE7QUFDdkQ7QUFDQTtBQUNBLE9BQU8sd1BBQXdQLEVBQUUsMEVBQUMsbUJBQW1CLDZCQUE2QixnREFBWSxjQUFjO0FBQzVVLG1DQUFtQywwRUFBQyxVQUFVLGdDQUFnQztBQUM5RSx1QkFBdUIsMEVBQUMsVUFBVSxtQkFBbUI7QUFDckQsdUJBQXVCLDBFQUFDLFVBQVUsbUJBQW1CO0FBQ3JELHFCQUFxQiwwRUFBQyxZQUFZLGNBQWMsNkNBQVk7QUFDNUQ7QUFDQSxxQ0FBcUM7QUFDckMsWUFBWSwwRUFBQyxDQUFDLHlFQUFJLElBQUksNERBQTRELEVBQUUsMEVBQUMsVUFBVSxTQUFTLDJCQUEyQixzQ0FBVyx3QkFBd0I7QUFDdEs7QUFDQSxtREFBbUQsMEVBQUMsVUFBVSxvQkFBb0IsMEhBQTBILDBFQUFDLFVBQVUsMEJBQTBCLEVBQUUsMEVBQUMsV0FBVyxvQkFBb0I7QUFDblI7QUFDQSxjQUFjLDBFQUFDLENBQUMsdUNBQW1CLElBQUksaUJBQWlCO0FBQ3hEO0FBQ0EsNEJBQTRCO0FBQzVCLGFBQWE7QUFDYiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0Q0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdEQUFxQjtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRXNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2lucHV0LW51bWJlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U2xvdHRlZCwgaiBhcyBpc1ByaW1hcnlQb2ludGVyQnV0dG9uLCBoIGFzIHNldFJlcXVlc3RlZEljb24sIGIgYXMgZ2V0RWxlbWVudERpciwgQyBhcyBDU1NfVVRJTElUWSB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IHMgYXMgc3VibWl0Rm9ybSwgYyBhcyBjb25uZWN0Rm9ybSwgZCBhcyBkaXNjb25uZWN0Rm9ybSwgSCBhcyBIaWRkZW5Gb3JtSW5wdXRTbG90IH0gZnJvbSAnLi9mb3JtLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLmpzJztcbmltcG9ydCB7IG4gYXMgbnVtYmVyS2V5cyB9IGZyb20gJy4va2V5LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExhYmVsLCBkIGFzIGRpc2Nvbm5lY3RMYWJlbCwgZyBhcyBnZXRMYWJlbFRleHQgfSBmcm9tICcuL2xhYmVsMi5qcyc7XG5pbXBvcnQgeyBzIGFzIHNldENvbXBvbmVudExvYWRlZCwgYSBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBjIGFzIGNvbXBvbmVudEZvY3VzYWJsZSB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgbiBhcyBudW1iZXJTdHJpbmdGb3JtYXR0ZXIsIGkgYXMgaXNWYWxpZE51bWJlciwgcCBhcyBwYXJzZU51bWJlclN0cmluZywgcyBhcyBzYW5pdGl6ZU51bWJlclN0cmluZywgZSBhcyBhZGRMb2NhbGl6ZWRUcmFpbGluZ0RlY2ltYWxaZXJvcywgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQsIEIgYXMgQmlnRGVjaW1hbCB9IGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0SWNvblNjYWxlIH0gZnJvbSAnLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL2ljb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDEgfSBmcm9tICcuL3Byb2dyZXNzLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBsb2FkZXI6IFwibG9hZGVyXCIsXG4gIGNsZWFyQnV0dG9uOiBcImNsZWFyLWJ1dHRvblwiLFxuICBlZGl0aW5nRW5hYmxlZDogXCJlZGl0aW5nLWVuYWJsZWRcIixcbiAgaW5saW5lQ2hpbGQ6IFwiaW5saW5lLWNoaWxkXCIsXG4gIGlucHV0SWNvbjogXCJpY29uXCIsXG4gIHByZWZpeDogXCJwcmVmaXhcIixcbiAgc3VmZml4OiBcInN1ZmZpeFwiLFxuICBudW1iZXJCdXR0b25XcmFwcGVyOiBcIm51bWJlci1idXR0b24td3JhcHBlclwiLFxuICBidXR0b25JdGVtSG9yaXpvbnRhbDogXCJudW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxcIixcbiAgd3JhcHBlcjogXCJlbGVtZW50LXdyYXBwZXJcIixcbiAgaW5wdXRXcmFwcGVyOiBcIndyYXBwZXJcIixcbiAgYWN0aW9uV3JhcHBlcjogXCJhY3Rpb24td3JhcHBlclwiLFxuICByZXNpemVJY29uV3JhcHBlcjogXCJyZXNpemUtaWNvbi13cmFwcGVyXCIsXG4gIG51bWJlckJ1dHRvbkl0ZW06IFwibnVtYmVyLWJ1dHRvbi1pdGVtXCIsXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIGFjdGlvbjogXCJhY3Rpb25cIixcbn07XG5cbmNvbnN0IGlucHV0TnVtYmVyQ3NzID0gXCI6aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmJsb2NrfTpob3N0KFtzY2FsZT1zXSkgaW5wdXQsOmhvc3QoW3NjYWxlPXNdKSAucHJlZml4LDpob3N0KFtzY2FsZT1zXSkgLnN1ZmZpeHtibG9jay1zaXplOjEuNXJlbTtwYWRkaW5nLWlubGluZTowLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1zXSkgLm51bWJlci1idXR0b24td3JhcHBlciw6aG9zdChbc2NhbGU9c10pIC5hY3Rpb24td3JhcHBlciBjYWxjaXRlLWJ1dHRvbiw6aG9zdChbc2NhbGU9c10pIC5hY3Rpb24td3JhcHBlciBjYWxjaXRlLWJ1dHRvbiBidXR0b257YmxvY2stc2l6ZToxLjVyZW19Omhvc3QoW3NjYWxlPXNdKSAuY2xlYXItYnV0dG9ue21pbi1ibG9jay1zaXplOjEuNXJlbTttaW4taW5saW5lLXNpemU6MS41cmVtfTpob3N0KFtzY2FsZT1tXSkgaW5wdXQsOmhvc3QoW3NjYWxlPW1dKSAucHJlZml4LDpob3N0KFtzY2FsZT1tXSkgLnN1ZmZpeHtibG9jay1zaXplOjJyZW07cGFkZGluZy1pbmxpbmU6MC43NXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPW1dKSAubnVtYmVyLWJ1dHRvbi13cmFwcGVyLDpob3N0KFtzY2FsZT1tXSkgLmFjdGlvbi13cmFwcGVyIGNhbGNpdGUtYnV0dG9uLDpob3N0KFtzY2FsZT1tXSkgLmFjdGlvbi13cmFwcGVyIGNhbGNpdGUtYnV0dG9uIGJ1dHRvbntibG9jay1zaXplOjJyZW19Omhvc3QoW3NjYWxlPW1dKSAuY2xlYXItYnV0dG9ue21pbi1ibG9jay1zaXplOjJyZW07bWluLWlubGluZS1zaXplOjJyZW19Omhvc3QoW3NjYWxlPWxdKSBpbnB1dCw6aG9zdChbc2NhbGU9bF0pIC5wcmVmaXgsOmhvc3QoW3NjYWxlPWxdKSAuc3VmZml4e2Jsb2NrLXNpemU6Mi43NXJlbTtwYWRkaW5nLWlubGluZToxcmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtfTpob3N0KFtzY2FsZT1sXSkgLm51bWJlci1idXR0b24td3JhcHBlciw6aG9zdChbc2NhbGU9bF0pIC5hY3Rpb24td3JhcHBlciBjYWxjaXRlLWJ1dHRvbiw6aG9zdChbc2NhbGU9bF0pIC5hY3Rpb24td3JhcHBlciBjYWxjaXRlLWJ1dHRvbiBidXR0b257YmxvY2stc2l6ZToyLjc1cmVtfTpob3N0KFtzY2FsZT1sXSkgLmNsZWFyLWJ1dHRvbnttaW4tYmxvY2stc2l6ZToyLjc1cmVtO21pbi1pbmxpbmUtc2l6ZToyLjc1cmVtfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX1pbnB1dHt0cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyksIGJsb2NrLXNpemUgMCwgb3V0bGluZS1vZmZzZXQgMHM7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O21heC1ibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTttYXgtaW5saW5lLXNpemU6MTAwJTtmbGV4OjEgMSAwJTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2JvcmRlci1yYWRpdXM6MHB4O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWwpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX1pbnB1dDpwbGFjZWhvbGRlci1zaG93bnt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfWlucHV0e2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfWlucHV0OjpwbGFjZWhvbGRlcixpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfWlucHV0OmZvY3Vze2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9aW5wdXRbcmVhZG9ubHlde2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1iYWNrZ3JvdW5kKTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSl9aW5wdXRbcmVhZG9ubHldOmZvY3Vze2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX1jYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfWlucHV0e291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnR9aW5wdXQ6Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfTpob3N0KFtzdGF0dXM9aW52YWxpZF0pIGlucHV0e2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcil9Omhvc3QoW3N0YXR1cz1pbnZhbGlkXSkgaW5wdXQ6Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfTpob3N0KFtzY2FsZT1zXSkgLmljb257aW5zZXQtaW5saW5lLXN0YXJ0OjAuNXJlbX06aG9zdChbc2NhbGU9bV0pIC5pY29ue2luc2V0LWlubGluZS1zdGFydDowLjc1cmVtfTpob3N0KFtzY2FsZT1sXSkgLmljb257aW5zZXQtaW5saW5lLXN0YXJ0OjFyZW19Omhvc3QoW2ljb25dW3NjYWxlPXNdKSBpbnB1dHtwYWRkaW5nLWlubGluZS1zdGFydDoycmVtfTpob3N0KFtpY29uXVtzY2FsZT1tXSkgaW5wdXR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6Mi41cmVtfTpob3N0KFtpY29uXVtzY2FsZT1sXSkgaW5wdXR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6My41cmVtfS5lbGVtZW50LXdyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmU7b3JkZXI6MztkaXNwbGF5OmlubGluZS1mbGV4O2ZsZXg6MSAxIDAlO2FsaWduLWl0ZW1zOmNlbnRlcn0uaWNvbntwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleCk7ZGlzcGxheTpibG9jazt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc30uY2xlYXItYnV0dG9ue3BvaW50ZXItZXZlbnRzOmluaXRpYWw7b3JkZXI6NDttYXJnaW46MHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7bWluLWJsb2NrLXNpemU6MTAwJTtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1zZWxmOnN0cmV0Y2g7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6MHB4fS5jbGVhci1idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9LmNsZWFyLWJ1dHRvbjpob3ZlciBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzfS5jbGVhci1idXR0b246YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfS5jbGVhci1idXR0b246YWN0aXZlIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmNsZWFyLWJ1dHRvbjpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9LmNsZWFyLWJ1dHRvbjpkaXNhYmxlZHtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9LmxvYWRlcntpbnNldC1ibG9jay1zdGFydDoxcHg7aW5zZXQtaW5saW5lOjFweDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6YmxvY2t9LmFjdGlvbi13cmFwcGVye29yZGVyOjc7ZGlzcGxheTpmbGV4fS5wcmVmaXgsLnN1ZmZpeHtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6YXV0bzttaW4tYmxvY2stc2l6ZToxMDAlOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYmFja2dyb3VuZCk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2xpbmUtaGVpZ2h0OjE7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS5wcmVmaXh7b3JkZXI6Mjtib3JkZXItaW5saW5lLWVuZC13aWR0aDowcHh9LnN1ZmZpeHtvcmRlcjo1O2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6MHB4fTpob3N0KFthbGlnbm1lbnQ9c3RhcnRdKSBpbnB1dHt0ZXh0LWFsaWduOnN0YXJ0fTpob3N0KFthbGlnbm1lbnQ9ZW5kXSkgaW5wdXR7dGV4dC1hbGlnbjplbmR9Lm51bWJlci1idXR0b24td3JhcHBlcntwb2ludGVyLWV2ZW50czpub25lO29yZGVyOjY7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIC53cmFwcGVye2ZsZXgtZGlyZWN0aW9uOnJvdztkaXNwbGF5OmZsZXh9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIGlucHV0e29yZGVyOjJ9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT1ob3Jpem9udGFsXSkgLmNhbGNpdGUtLXJ0bCAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD1kb3duXSBjYWxjaXRlLWljb257dHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9aG9yaXpvbnRhbF0pIC5jYWxjaXRlLS1ydGwgLm51bWJlci1idXR0b24taXRlbVtkYXRhLWFkanVzdG1lbnQ9dXBdIGNhbGNpdGUtaWNvbnt0cmFuc2Zvcm06cm90YXRlKC05MGRlZyl9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PWRvd25dLC5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD11cF17b3JkZXI6MTttYXgtYmxvY2stc2l6ZToxMDAlO21pbi1ibG9jay1zaXplOjEwMCU7YWxpZ24tc2VsZjpzdHJldGNofS5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD1kb3duXSBjYWxjaXRlLWljb24sLm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PXVwXSBjYWxjaXRlLWljb257dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PWRvd25de2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7Ym9yZGVyLWlubGluZS1lbmQtd2lkdGg6MHB4fS5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD1kb3duXTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9ZG93bl06aG92ZXIgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9dXBde29yZGVyOjV9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PXVwXTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9dXBdOmhvdmVyIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIC5udW1iZXItYnV0dG9uLWl0ZW1bZGF0YS1hZGp1c3RtZW50PWRvd25dOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9dmVydGljYWxdKSAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD1kb3duXTpob3ZlciBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9dmVydGljYWxdKSAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD11cF06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMil9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIC5udW1iZXItYnV0dG9uLWl0ZW1bZGF0YS1hZGp1c3RtZW50PXVwXTpob3ZlciBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9dmVydGljYWxdKSAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD1kb3duXXtib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6MHB4fS5udW1iZXItYnV0dG9uLWl0ZW17bWF4LWJsb2NrLXNpemU6NTAlO21pbi1ibG9jay1zaXplOjUwJTtwb2ludGVyLWV2ZW50czppbml0aWFsO21hcmdpbjowcHg7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tc2VsZjpjZW50ZXI7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtwYWRkaW5nLWJsb2NrOjBweDtwYWRkaW5nLWlubGluZTowLjVyZW07dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7Ym9yZGVyLWlubGluZS1zdGFydC13aWR0aDowcHh9Lm51bWJlci1idXR0b24taXRlbSBjYWxjaXRlLWljb257cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc30ubnVtYmVyLWJ1dHRvbi1pdGVtOmZvY3Vze2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfS5udW1iZXItYnV0dG9uLWl0ZW06Zm9jdXMgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0ubnVtYmVyLWJ1dHRvbi1pdGVtOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKX0ubnVtYmVyLWJ1dHRvbi1pdGVtOmRpc2FibGVke3BvaW50ZXItZXZlbnRzOm5vbmV9LndyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpjZW50ZXJ9Omhvc3QoLm5vLWJvdHRvbS1ib3JkZXIpIGlucHV0e2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MHB4fTpob3N0KC5ib3JkZXItdG9wLWNvbG9yLW9uZSkgaW5wdXR7Ym9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpfS5pbmxpbmUtY2hpbGR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc30uaW5saW5lLWNoaWxkIC5lZGl0aW5nLWVuYWJsZWR7YmFja2dyb3VuZC1jb2xvcjppbmhlcml0fS5pbmxpbmUtY2hpbGQ6bm90KC5lZGl0aW5nLWVuYWJsZWQpe2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MH06OnNsb3R0ZWQoaW5wdXRbc2xvdD1oaWRkZW4tZm9ybS1pbnB1dF0pe21hcmdpbjowICFpbXBvcnRhbnQ7b3BhY2l0eTowICFpbXBvcnRhbnQ7b3V0bGluZTpub25lICFpbXBvcnRhbnQ7cGFkZGluZzowICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtpbnNldDowICFpbXBvcnRhbnQ7dHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZSAhaW1wb3J0YW50O3otaW5kZXg6LTEgIWltcG9ydGFudH06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgSW5wdXROdW1iZXIgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsSW5wdXROdW1iZXJGb2N1cyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsSW5wdXROdW1iZXJGb2N1c1wiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0TnVtYmVyQmx1ciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsSW5wdXROdW1iZXJCbHVyXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0TnVtYmVySW5wdXQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnB1dE51bWJlcklucHV0XCIsIDcpO1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0TnVtYmVyQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXROdW1iZXJDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlT3JpZ2luID0gXCJpbml0aWFsXCI7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCAoKSA9PiB0aGlzLnNldERpc2FibGVkQWN0aW9uKCkpO1xuICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IGZhbHNlO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5yZWFkT25seSB8fCB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzQ2xlYXJhYmxlICYmIGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICB0aGlzLmNsZWFySW5wdXRWYWx1ZShldmVudCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiYgIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgaWYgKHN1Ym1pdEZvcm0odGhpcykpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmNsZWFySW5wdXRWYWx1ZSA9IChuYXRpdmVFdmVudCkgPT4ge1xuICAgICAgdGhpcy5zZXROdW1iZXJWYWx1ZSh7XG4gICAgICAgIGNvbW1pdHRpbmc6IHRydWUsXG4gICAgICAgIG5hdGl2ZUV2ZW50LFxuICAgICAgICBvcmlnaW46IFwidXNlclwiLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5lbWl0Q2hhbmdlSWZVc2VyTW9kaWZpZWQgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wcmV2aW91c1ZhbHVlT3JpZ2luID09PSBcInVzZXJcIiAmJiB0aGlzLnZhbHVlICE9PSB0aGlzLnByZXZpb3VzRW1pdHRlZE51bWJlclZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUlucHV0TnVtYmVyQ2hhbmdlLmVtaXQoKTtcbiAgICAgICAgdGhpcy5zZXRQcmV2aW91c0VtaXR0ZWROdW1iZXJWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaW5wdXROdW1iZXJCbHVySGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMubnVkZ2VOdW1iZXJWYWx1ZUludGVydmFsSWQpO1xuICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dE51bWJlckJsdXIuZW1pdCgpO1xuICAgICAgdGhpcy5lbWl0Q2hhbmdlSWZVc2VyTW9kaWZpZWQoKTtcbiAgICB9O1xuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzbG90dGVkQWN0aW9uRWwgPSBnZXRTbG90dGVkKHRoaXMuZWwsIFwiYWN0aW9uXCIpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gc2xvdHRlZEFjdGlvbkVsKSB7XG4gICAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaW5wdXROdW1iZXJGb2N1c0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0TnVtYmVyRm9jdXMuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5pbnB1dE51bWJlcklucHV0SGFuZGxlciA9IChuYXRpdmVFdmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB2YWx1ZSA9IG5hdGl2ZUV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICB1c2VHcm91cGluZzogdGhpcy5ncm91cFNlcGFyYXRvcixcbiAgICAgIH07XG4gICAgICBjb25zdCBkZWxvY2FsaXplZFZhbHVlID0gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmRlbG9jYWxpemUodmFsdWUpO1xuICAgICAgaWYgKG5hdGl2ZUV2ZW50LmlucHV0VHlwZSA9PT0gXCJpbnNlcnRGcm9tUGFzdGVcIikge1xuICAgICAgICBpZiAoIWlzVmFsaWROdW1iZXIoZGVsb2NhbGl6ZWRWYWx1ZSkgfHxcbiAgICAgICAgICAodGhpcy5pbnRlZ2VyICYmIChkZWxvY2FsaXplZFZhbHVlLmluY2x1ZGVzKFwiZVwiKSB8fCBkZWxvY2FsaXplZFZhbHVlLmluY2x1ZGVzKFwiLlwiKSkpKSB7XG4gICAgICAgICAgbmF0aXZlRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE51bWJlclZhbHVlKHtcbiAgICAgICAgICBuYXRpdmVFdmVudCxcbiAgICAgICAgICBvcmlnaW46IFwidXNlclwiLFxuICAgICAgICAgIHZhbHVlOiBwYXJzZU51bWJlclN0cmluZyhkZWxvY2FsaXplZFZhbHVlKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZSA9IHRoaXMubG9jYWxpemVkVmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXROdW1iZXJWYWx1ZSh7XG4gICAgICAgICAgbmF0aXZlRXZlbnQsXG4gICAgICAgICAgb3JpZ2luOiBcInVzZXJcIixcbiAgICAgICAgICB2YWx1ZTogZGVsb2NhbGl6ZWRWYWx1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmlucHV0TnVtYmVyS2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgLyogcHJldmVudCBkZWZhdWx0IGJlaGF2aW9yIG9mIG1vdmluZyBjdXJzb3IgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgaW5wdXQgd2hlbiBob2xkaW5nIGRvd24gQXJyb3dVcCAqL1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm51ZGdlTnVtYmVyVmFsdWUoXCJ1cFwiLCBldmVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgdGhpcy5udWRnZU51bWJlclZhbHVlKFwiZG93blwiLCBldmVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN1cHBvcnRlZEtleXMgPSBbXG4gICAgICAgIC4uLm51bWJlcktleXMsXG4gICAgICAgIFwiQXJyb3dMZWZ0XCIsXG4gICAgICAgIFwiQXJyb3dSaWdodFwiLFxuICAgICAgICBcIkJhY2tzcGFjZVwiLFxuICAgICAgICBcIkRlbGV0ZVwiLFxuICAgICAgICBcIkVudGVyXCIsXG4gICAgICAgIFwiRXNjYXBlXCIsXG4gICAgICAgIFwiVGFiXCIsXG4gICAgICBdO1xuICAgICAgaWYgKGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNTaGlmdFRhYkV2ZW50ID0gZXZlbnQuc2hpZnRLZXkgJiYgZXZlbnQua2V5ID09PSBcIlRhYlwiO1xuICAgICAgaWYgKHN1cHBvcnRlZEtleXMuaW5jbHVkZXMoZXZlbnQua2V5KSB8fCBpc1NoaWZ0VGFiRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlSWZVc2VyTW9kaWZpZWQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgdXNlR3JvdXBpbmc6IHRoaXMuZ3JvdXBTZXBhcmF0b3IsXG4gICAgICB9O1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmRlY2ltYWwgJiYgIXRoaXMuaW50ZWdlcikge1xuICAgICAgICBpZiAoIXRoaXMudmFsdWUgJiYgIXRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLmNoaWxkTnVtYmVyRWwudmFsdWUuaW5kZXhPZihudW1iZXJTdHJpbmdGb3JtYXR0ZXIuZGVjaW1hbCkgPT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoL1tlRV0vLnRlc3QoZXZlbnQua2V5KSAmJiAhdGhpcy5pbnRlZ2VyKSB7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZSAmJiAhdGhpcy5jaGlsZE51bWJlckVsLnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICYmICEvW2VFXS8udGVzdCh0aGlzLmNoaWxkTnVtYmVyRWwudmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIi1cIikge1xuICAgICAgICBpZiAoIXRoaXMudmFsdWUgJiYgIXRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLmNoaWxkTnVtYmVyRWwudmFsdWUuc3BsaXQoXCItXCIpLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG4gICAgdGhpcy5udWRnZU51bWJlclZhbHVlID0gKGRpcmVjdGlvbiwgbmF0aXZlRXZlbnQpID0+IHtcbiAgICAgIGlmIChuYXRpdmVFdmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQgJiYgbmF0aXZlRXZlbnQucmVwZWF0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlucHV0TWF4ID0gdGhpcy5tYXhTdHJpbmcgPyBwYXJzZUZsb2F0KHRoaXMubWF4U3RyaW5nKSA6IG51bGw7XG4gICAgICBjb25zdCBpbnB1dE1pbiA9IHRoaXMubWluU3RyaW5nID8gcGFyc2VGbG9hdCh0aGlzLm1pblN0cmluZykgOiBudWxsO1xuICAgICAgY29uc3QgdmFsdWVOdWRnZURlbGF5SW5NcyA9IDE1MDtcbiAgICAgIHRoaXMuaW5jcmVtZW50T3JEZWNyZW1lbnROdW1iZXJWYWx1ZShkaXJlY3Rpb24sIGlucHV0TWF4LCBpbnB1dE1pbiwgbmF0aXZlRXZlbnQpO1xuICAgICAgaWYgKHRoaXMubnVkZ2VOdW1iZXJWYWx1ZUludGVydmFsSWQpIHtcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5udWRnZU51bWJlclZhbHVlSW50ZXJ2YWxJZCk7XG4gICAgICB9XG4gICAgICBsZXQgZmlyc3RWYWx1ZU51ZGdlID0gdHJ1ZTtcbiAgICAgIHRoaXMubnVkZ2VOdW1iZXJWYWx1ZUludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoZmlyc3RWYWx1ZU51ZGdlKSB7XG4gICAgICAgICAgZmlyc3RWYWx1ZU51ZGdlID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5jcmVtZW50T3JEZWNyZW1lbnROdW1iZXJWYWx1ZShkaXJlY3Rpb24sIGlucHV0TWF4LCBpbnB1dE1pbiwgbmF0aXZlRXZlbnQpO1xuICAgICAgfSwgdmFsdWVOdWRnZURlbGF5SW5Ncyk7XG4gICAgfTtcbiAgICB0aGlzLm51ZGdlQnV0dG9uUG9pbnRlclVwSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCFpc1ByaW1hcnlQb2ludGVyQnV0dG9uKGV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLm51ZGdlTnVtYmVyVmFsdWVJbnRlcnZhbElkKTtcbiAgICB9O1xuICAgIHRoaXMubnVkZ2VCdXR0b25Qb2ludGVyT3V0SGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMubnVkZ2VOdW1iZXJWYWx1ZUludGVydmFsSWQpO1xuICAgIH07XG4gICAgdGhpcy5udWRnZUJ1dHRvblBvaW50ZXJEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCFpc1ByaW1hcnlQb2ludGVyQnV0dG9uKGV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuYWRqdXN0bWVudDtcbiAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLm51ZGdlTnVtYmVyVmFsdWUoZGlyZWN0aW9uLCBldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhpZGRlbklucHV0Q2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5uYW1lID09PSB0aGlzLm5hbWUpIHtcbiAgICAgICAgdGhpcy5zZXROdW1iZXJWYWx1ZSh7XG4gICAgICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgICBvcmlnaW46IFwiZGlyZWN0XCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICB0aGlzLnNldENoaWxkTnVtYmVyRWxSZWYgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuY2hpbGROdW1iZXJFbCA9IGVsO1xuICAgIH07XG4gICAgdGhpcy5zZXRJbnB1dE51bWJlclZhbHVlID0gKG5ld0lucHV0VmFsdWUpID0+IHtcbiAgICAgIGlmICghdGhpcy5jaGlsZE51bWJlckVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZSA9IG5ld0lucHV0VmFsdWU7XG4gICAgfTtcbiAgICB0aGlzLnNldFByZXZpb3VzRW1pdHRlZE51bWJlclZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLnByZXZpb3VzRW1pdHRlZE51bWJlclZhbHVlID0gdGhpcy5ub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG4gICAgfTtcbiAgICB0aGlzLnNldFByZXZpb3VzTnVtYmVyVmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHRoaXMubm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICAgIH07XG4gICAgdGhpcy5zZXROdW1iZXJWYWx1ZSA9ICh7IGNvbW1pdHRpbmcgPSBmYWxzZSwgbmF0aXZlRXZlbnQsIG9yaWdpbiwgcHJldmlvdXNWYWx1ZSwgdmFsdWUsIH0pID0+IHtcbiAgICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICB1c2VHcm91cGluZzogdGhpcy5ncm91cFNlcGFyYXRvcixcbiAgICAgIH07XG4gICAgICBjb25zdCBpc1ZhbHVlRGVsZXRlZCA9IHRoaXMucHJldmlvdXNWYWx1ZT8ubGVuZ3RoID4gdmFsdWUubGVuZ3RoIHx8IHRoaXMudmFsdWU/Lmxlbmd0aCA+IHZhbHVlLmxlbmd0aDtcbiAgICAgIGNvbnN0IHZhbHVlSGFuZGxlSW50ZWdlciA9IHRoaXMuaW50ZWdlciA/IHZhbHVlLnJlcGxhY2UoL1tlLl0vZywgXCJcIikgOiB2YWx1ZTtcbiAgICAgIGNvbnN0IGhhc1RyYWlsaW5nRGVjaW1hbFNlcGFyYXRvciA9IHZhbHVlSGFuZGxlSW50ZWdlci5jaGFyQXQodmFsdWVIYW5kbGVJbnRlZ2VyLmxlbmd0aCAtIDEpID09PSBcIi5cIjtcbiAgICAgIGNvbnN0IHNhbml0aXplZFZhbHVlID0gaGFzVHJhaWxpbmdEZWNpbWFsU2VwYXJhdG9yICYmIGlzVmFsdWVEZWxldGVkXG4gICAgICAgID8gdmFsdWVIYW5kbGVJbnRlZ2VyXG4gICAgICAgIDogc2FuaXRpemVOdW1iZXJTdHJpbmcodmFsdWVIYW5kbGVJbnRlZ2VyKTtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWUgJiYgIXNhbml0aXplZFZhbHVlXG4gICAgICAgID8gaXNWYWxpZE51bWJlcih0aGlzLnByZXZpb3VzVmFsdWUpXG4gICAgICAgICAgPyB0aGlzLnByZXZpb3VzVmFsdWVcbiAgICAgICAgICA6IFwiXCJcbiAgICAgICAgOiBzYW5pdGl6ZWRWYWx1ZTtcbiAgICAgIGxldCBuZXdMb2NhbGl6ZWRWYWx1ZSA9IG51bWJlclN0cmluZ0Zvcm1hdHRlci5sb2NhbGl6ZShuZXdWYWx1ZSk7XG4gICAgICBpZiAob3JpZ2luICE9PSBcImNvbm5lY3RlZFwiICYmICFoYXNUcmFpbGluZ0RlY2ltYWxTZXBhcmF0b3IpIHtcbiAgICAgICAgbmV3TG9jYWxpemVkVmFsdWUgPSBhZGRMb2NhbGl6ZWRUcmFpbGluZ0RlY2ltYWxaZXJvcyhuZXdMb2NhbGl6ZWRWYWx1ZSwgbmV3VmFsdWUsIG51bWJlclN0cmluZ0Zvcm1hdHRlcik7XG4gICAgICB9XG4gICAgICAvLyBhZGRzIGxvY2FsaXplZCB0cmFpbGluZyBkZWNpbWFsIHNlcGFyYXRvclxuICAgICAgdGhpcy5sb2NhbGl6ZWRWYWx1ZSA9XG4gICAgICAgIGhhc1RyYWlsaW5nRGVjaW1hbFNlcGFyYXRvciAmJiBpc1ZhbHVlRGVsZXRlZFxuICAgICAgICAgID8gYCR7bmV3TG9jYWxpemVkVmFsdWV9JHtudW1iZXJTdHJpbmdGb3JtYXR0ZXIuZGVjaW1hbH1gXG4gICAgICAgICAgOiBuZXdMb2NhbGl6ZWRWYWx1ZTtcbiAgICAgIHRoaXMuc2V0UHJldmlvdXNOdW1iZXJWYWx1ZShwcmV2aW91c1ZhbHVlID8/IHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlT3JpZ2luID0gb3JpZ2luO1xuICAgICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gb3JpZ2luID09PSBcInVzZXJcIiAmJiB0aGlzLnZhbHVlICE9PSBuZXdWYWx1ZTtcbiAgICAgIC8vIGRvbid0IHNhbml0aXplIHRoZSBzdGFydCBvZiBuZWdhdGl2ZS9kZWNpbWFsIG51bWJlcnMsIGJ1dFxuICAgICAgLy8gZG9uJ3Qgc2V0IHZhbHVlIHRvIGFuIGludmFsaWQgbnVtYmVyXG4gICAgICB0aGlzLnZhbHVlID0gW1wiLVwiLCBcIi5cIl0uaW5jbHVkZXMobmV3VmFsdWUpID8gXCJcIiA6IG5ld1ZhbHVlO1xuICAgICAgaWYgKG9yaWdpbiA9PT0gXCJkaXJlY3RcIikge1xuICAgICAgICB0aGlzLnNldElucHV0TnVtYmVyVmFsdWUobmV3TG9jYWxpemVkVmFsdWUpO1xuICAgICAgICB0aGlzLnNldFByZXZpb3VzRW1pdHRlZE51bWJlclZhbHVlKG5ld0xvY2FsaXplZFZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChuYXRpdmVFdmVudCkge1xuICAgICAgICBjb25zdCBjYWxjaXRlSW5wdXROdW1iZXJJbnB1dEV2ZW50ID0gdGhpcy5jYWxjaXRlSW5wdXROdW1iZXJJbnB1dC5lbWl0KCk7XG4gICAgICAgIGlmIChjYWxjaXRlSW5wdXROdW1iZXJJbnB1dEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5wcmV2aW91c1ZhbHVlO1xuICAgICAgICAgIHRoaXMubG9jYWxpemVkVmFsdWUgPSBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubG9jYWxpemUodGhpcy5wcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21taXR0aW5nKSB7XG4gICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlSWZVc2VyTW9kaWZpZWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pbnB1dE51bWJlcktleVVwSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMubnVkZ2VOdW1iZXJWYWx1ZUludGVydmFsSWQpO1xuICAgIH07XG4gICAgdGhpcy5hbGlnbm1lbnQgPSBcInN0YXJ0XCI7XG4gICAgdGhpcy5hdXRvZm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLmNsZWFyYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ncm91cFNlcGFyYXRvciA9IGZhbHNlO1xuICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XG4gICAgdGhpcy5pY29uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvbkZsaXBSdGwgPSBmYWxzZTtcbiAgICB0aGlzLmludGVnZXIgPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYWxlRm9ybWF0ID0gZmFsc2U7XG4gICAgdGhpcy5tYXggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW4gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tYXhMZW5ndGggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW5MZW5ndGggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubnVtYmVyQnV0dG9uVHlwZSA9IFwidmVydGljYWxcIjtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucHJlZml4VGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnN0YXR1cyA9IFwiaWRsZVwiO1xuICAgIHRoaXMuc3RlcCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlucHV0TW9kZSA9IFwiZGVjaW1hbFwiO1xuICAgIHRoaXMuZW50ZXJLZXlIaW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3VmZml4VGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVkaXRpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYWxpemVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zbG90dGVkQWN0aW9uRWxEaXNhYmxlZEludGVybmFsbHkgPSBmYWxzZTtcbiAgfVxuICBkaXNhYmxlZFdhdGNoZXIoKSB7XG4gICAgdGhpcy5zZXREaXNhYmxlZEFjdGlvbigpO1xuICB9XG4gIC8qKiB3YXRjaGVyIHRvIHVwZGF0ZSBudW1iZXItdG8tc3RyaW5nIGZvciBtYXggKi9cbiAgbWF4V2F0Y2hlcigpIHtcbiAgICB0aGlzLm1heFN0cmluZyA9IHRoaXMubWF4Py50b1N0cmluZygpIHx8IG51bGw7XG4gIH1cbiAgLyoqIHdhdGNoZXIgdG8gdXBkYXRlIG51bWJlci10by1zdHJpbmcgZm9yIG1pbiAqL1xuICBtaW5XYXRjaGVyKCkge1xuICAgIHRoaXMubWluU3RyaW5nID0gdGhpcy5taW4/LnRvU3RyaW5nKCkgfHwgbnVsbDtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgdmFsdWVXYXRjaGVyKG5ld1ZhbHVlLCBwcmV2aW91c1ZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLnVzZXJDaGFuZ2VkVmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0TnVtYmVyVmFsdWUoe1xuICAgICAgICBvcmlnaW46IFwiZGlyZWN0XCIsXG4gICAgICAgIHByZXZpb3VzVmFsdWUsXG4gICAgICAgIHZhbHVlOiBuZXdWYWx1ZSA9PSBudWxsIHx8IG5ld1ZhbHVlID09IFwiXCJcbiAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICA6IGlzVmFsaWROdW1iZXIobmV3VmFsdWUpXG4gICAgICAgICAgICA/IG5ld1ZhbHVlXG4gICAgICAgICAgICA6IHRoaXMucHJldmlvdXNWYWx1ZSB8fCBcIlwiLFxuICAgICAgfSk7XG4gICAgICB0aGlzLndhcm5BYm91dEludmFsaWROdW1iZXJWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfVxuICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IGZhbHNlO1xuICB9XG4gIHVwZGF0ZVJlcXVlc3RlZEljb24oKSB7XG4gICAgdGhpcy5yZXF1ZXN0ZWRJY29uID0gc2V0UmVxdWVzdGVkSWNvbih7fSwgdGhpcy5pY29uLCBcIm51bWJlclwiKTtcbiAgfVxuICBnZXQgaXNDbGVhcmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xlYXJhYmxlICYmIHRoaXMudmFsdWUubGVuZ3RoID4gMDtcbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVXYXRjaGVyKGxvY2FsZSkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIGxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICB1c2VHcm91cGluZzogZmFsc2UsXG4gICAgfTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5pbmxpbmVFZGl0YWJsZUVsID0gdGhpcy5lbC5jbG9zZXN0KFwiY2FsY2l0ZS1pbmxpbmUtZWRpdGFibGVcIik7XG4gICAgaWYgKHRoaXMuaW5saW5lRWRpdGFibGVFbCkge1xuICAgICAgdGhpcy5lZGl0aW5nRW5hYmxlZCA9IHRoaXMuaW5saW5lRWRpdGFibGVFbC5lZGl0aW5nRW5hYmxlZCB8fCBmYWxzZTtcbiAgICB9XG4gICAgY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGNvbm5lY3RGb3JtKHRoaXMpO1xuICAgIHRoaXMuc2V0UHJldmlvdXNFbWl0dGVkTnVtYmVyVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5zZXRQcmV2aW91c051bWJlclZhbHVlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMud2FybkFib3V0SW52YWxpZE51bWJlclZhbHVlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMuc2V0TnVtYmVyVmFsdWUoe1xuICAgICAgb3JpZ2luOiBcImNvbm5lY3RlZFwiLFxuICAgICAgdmFsdWU6IGlzVmFsaWROdW1iZXIodGhpcy52YWx1ZSkgPyB0aGlzLnZhbHVlIDogXCJcIixcbiAgICB9KTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/Lm9ic2VydmUodGhpcy5lbCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgdGhpcy5zZXREaXNhYmxlZEFjdGlvbigpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNhbGNpdGVJbnRlcm5hbEhpZGRlbklucHV0Q2hhbmdlXCIsIHRoaXMuaGlkZGVuSW5wdXRDaGFuZ2VIYW5kbGVyKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgZGlzY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RGb3JtKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNhbGNpdGVJbnRlcm5hbEhpZGRlbklucHV0Q2hhbmdlXCIsIHRoaXMuaGlkZGVuSW5wdXRDaGFuZ2VIYW5kbGVyKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIHRoaXMubWF4U3RyaW5nID0gdGhpcy5tYXg/LnRvU3RyaW5nKCk7XG4gICAgdGhpcy5taW5TdHJpbmcgPSB0aGlzLm1pbj8udG9TdHJpbmcoKTtcbiAgICB0aGlzLnJlcXVlc3RlZEljb24gPSBzZXRSZXF1ZXN0ZWRJY29uKHt9LCB0aGlzLmljb24sIFwibnVtYmVyXCIpO1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50U2hvdWxkVXBkYXRlKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgcHJvcGVydHkpIHtcbiAgICBpZiAocHJvcGVydHkgPT09IFwidmFsdWVcIiAmJiBuZXdWYWx1ZSAmJiAhaXNWYWxpZE51bWJlcihuZXdWYWx1ZSkpIHtcbiAgICAgIHRoaXMuc2V0TnVtYmVyVmFsdWUoe1xuICAgICAgICBvcmlnaW46IFwicmVzZXRcIixcbiAgICAgICAgdmFsdWU6IG9sZFZhbHVlLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRGb2N1c2FibGUodGhpcyk7XG4gICAgdGhpcy5jaGlsZE51bWJlckVsPy5mb2N1cygpO1xuICB9XG4gIC8qKiBTZWxlY3RzIHRoZSB0ZXh0IG9mIHRoZSBjb21wb25lbnQncyBgdmFsdWVgLiAqL1xuICBhc3luYyBzZWxlY3RUZXh0KCkge1xuICAgIHRoaXMuY2hpbGROdW1iZXJFbD8uc2VsZWN0KCk7XG4gIH1cbiAgb25MYWJlbENsaWNrKCkge1xuICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgfVxuICBpbmNyZW1lbnRPckRlY3JlbWVudE51bWJlclZhbHVlKGRpcmVjdGlvbiwgaW5wdXRNYXgsIGlucHV0TWluLCBuYXRpdmVFdmVudCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXM7XG4gICAgY29uc3QgYWRqdXN0bWVudCA9IGRpcmVjdGlvbiA9PT0gXCJ1cFwiID8gMSA6IC0xO1xuICAgIGNvbnN0IHN0ZXBIYW5kbGVJbnRlZ2VyID0gdGhpcy5pbnRlZ2VyICYmIHRoaXMuc3RlcCAhPT0gXCJhbnlcIiA/IE1hdGgucm91bmQodGhpcy5zdGVwKSA6IHRoaXMuc3RlcDtcbiAgICBjb25zdCBpbnB1dFN0ZXAgPSBzdGVwSGFuZGxlSW50ZWdlciA9PT0gXCJhbnlcIiA/IDEgOiBNYXRoLmFicyhzdGVwSGFuZGxlSW50ZWdlciB8fCAxKTtcbiAgICBjb25zdCBpbnB1dFZhbCA9IG5ldyBCaWdEZWNpbWFsKHZhbHVlICE9PSBcIlwiID8gdmFsdWUgOiBcIjBcIik7XG4gICAgY29uc3QgbnVkZ2VkVmFsdWUgPSBpbnB1dFZhbC5hZGQoYCR7aW5wdXRTdGVwICogYWRqdXN0bWVudH1gKTtcbiAgICBjb25zdCBudWRnZWRWYWx1ZUJlbG93SW5wdXRNaW4gPSAoKSA9PiB0eXBlb2YgaW5wdXRNaW4gPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICFpc05hTihpbnB1dE1pbikgJiZcbiAgICAgIG51ZGdlZFZhbHVlLnN1YnRyYWN0KGAke2lucHV0TWlufWApLmlzTmVnYXRpdmU7XG4gICAgY29uc3QgbnVkZ2VkVmFsdWVBYm92ZUlucHV0TWF4ID0gKCkgPT4gdHlwZW9mIGlucHV0TWF4ID09PSBcIm51bWJlclwiICYmXG4gICAgICAhaXNOYU4oaW5wdXRNYXgpICYmXG4gICAgICAhbnVkZ2VkVmFsdWUuc3VidHJhY3QoYCR7aW5wdXRNYXh9YCkuaXNOZWdhdGl2ZTtcbiAgICBjb25zdCBmaW5hbFZhbHVlID0gbnVkZ2VkVmFsdWVCZWxvd0lucHV0TWluKClcbiAgICAgID8gYCR7aW5wdXRNaW59YFxuICAgICAgOiBudWRnZWRWYWx1ZUFib3ZlSW5wdXRNYXgoKVxuICAgICAgICA/IGAke2lucHV0TWF4fWBcbiAgICAgICAgOiBudWRnZWRWYWx1ZS50b1N0cmluZygpO1xuICAgIHRoaXMuc2V0TnVtYmVyVmFsdWUoe1xuICAgICAgY29tbWl0dGluZzogdHJ1ZSxcbiAgICAgIG5hdGl2ZUV2ZW50LFxuICAgICAgb3JpZ2luOiBcInVzZXJcIixcbiAgICAgIHZhbHVlOiBmaW5hbFZhbHVlLFxuICAgIH0pO1xuICB9XG4gIG9uRm9ybVJlc2V0KCkge1xuICAgIHRoaXMuc2V0TnVtYmVyVmFsdWUoe1xuICAgICAgb3JpZ2luOiBcInJlc2V0XCIsXG4gICAgICB2YWx1ZTogdGhpcy5kZWZhdWx0VmFsdWUsXG4gICAgfSk7XG4gIH1cbiAgc3luY0hpZGRlbkZvcm1JbnB1dChpbnB1dCkge1xuICAgIGlucHV0LnR5cGUgPSBcIm51bWJlclwiO1xuICAgIGlucHV0Lm1pbiA9IHRoaXMubWluPy50b1N0cmluZygxMCkgPz8gXCJcIjtcbiAgICBpbnB1dC5tYXggPSB0aGlzLm1heD8udG9TdHJpbmcoMTApID8/IFwiXCI7XG4gIH1cbiAgc2V0RGlzYWJsZWRBY3Rpb24oKSB7XG4gICAgY29uc3Qgc2xvdHRlZEFjdGlvbkVsID0gZ2V0U2xvdHRlZCh0aGlzLmVsLCBcImFjdGlvblwiKTtcbiAgICBpZiAoIXNsb3R0ZWRBY3Rpb25FbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgaWYgKHNsb3R0ZWRBY3Rpb25FbC5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2xvdHRlZEFjdGlvbkVsRGlzYWJsZWRJbnRlcm5hbGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHNsb3R0ZWRBY3Rpb25FbC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5zbG90dGVkQWN0aW9uRWxEaXNhYmxlZEludGVybmFsbHkpIHtcbiAgICAgIHNsb3R0ZWRBY3Rpb25FbC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgIHRoaXMuc2xvdHRlZEFjdGlvbkVsRGlzYWJsZWRJbnRlcm5hbGx5ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzVmFsaWROdW1iZXIodmFsdWUpID8gdmFsdWUgOiBcIlwiO1xuICB9XG4gIHdhcm5BYm91dEludmFsaWROdW1iZXJWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAmJiAhaXNWYWxpZE51bWJlcih2YWx1ZSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVGhlIHNwZWNpZmllZCB2YWx1ZSBcIiR7dmFsdWV9XCIgY2Fubm90IGJlIHBhcnNlZCwgb3IgaXMgb3V0IG9mIHJhbmdlLmApO1xuICAgIH1cbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIodGhpcy5lbCk7XG4gICAgY29uc3QgbG9hZGVyID0gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmxvYWRlciB9LCBoKFwiY2FsY2l0ZS1wcm9ncmVzc1wiLCB7IGxhYmVsOiB0aGlzLm1lc3NhZ2VzLmxvYWRpbmcsIHR5cGU6IFwiaW5kZXRlcm1pbmF0ZVwiIH0pKSk7XG4gICAgY29uc3QgaW5wdXRDbGVhckJ1dHRvbiA9IChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMuY2xlYXIsIGNsYXNzOiBDU1MuY2xlYXJCdXR0b24sIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHksIG9uQ2xpY2s6IHRoaXMuY2xlYXJJbnB1dFZhbHVlLCB0YWJJbmRleDogLTEsIHR5cGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwieFwiLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKSk7XG4gICAgY29uc3QgaWNvbkVsID0gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogQ1NTLmlucHV0SWNvbiwgZmxpcFJ0bDogdGhpcy5pY29uRmxpcFJ0bCwgaWNvbjogdGhpcy5yZXF1ZXN0ZWRJY29uLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKTtcbiAgICBjb25zdCBpc0hvcml6b250YWxOdW1iZXJCdXR0b24gPSB0aGlzLm51bWJlckJ1dHRvblR5cGUgPT09IFwiaG9yaXpvbnRhbFwiO1xuICAgIGNvbnN0IG51bWJlckJ1dHRvbnNIb3Jpem9udGFsVXAgPSAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MubnVtYmVyQnV0dG9uSXRlbV06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uSXRlbUhvcml6b250YWxdOiBpc0hvcml6b250YWxOdW1iZXJCdXR0b24sXG4gICAgICB9LCBcImRhdGEtYWRqdXN0bWVudFwiOiBcInVwXCIsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHksIG9uUG9pbnRlckRvd246IHRoaXMubnVkZ2VCdXR0b25Qb2ludGVyRG93bkhhbmRsZXIsIG9uUG9pbnRlck91dDogdGhpcy5udWRnZUJ1dHRvblBvaW50ZXJPdXRIYW5kbGVyLCBvblBvaW50ZXJVcDogdGhpcy5udWRnZUJ1dHRvblBvaW50ZXJVcEhhbmRsZXIsIHRhYkluZGV4OiAtMSwgdHlwZTogXCJidXR0b25cIiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJjaGV2cm9uLXVwXCIsIHNjYWxlOiBnZXRJY29uU2NhbGUodGhpcy5zY2FsZSkgfSkpKTtcbiAgICBjb25zdCBudW1iZXJCdXR0b25zSG9yaXpvbnRhbERvd24gPSAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MubnVtYmVyQnV0dG9uSXRlbV06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uSXRlbUhvcml6b250YWxdOiBpc0hvcml6b250YWxOdW1iZXJCdXR0b24sXG4gICAgICB9LCBcImRhdGEtYWRqdXN0bWVudFwiOiBcImRvd25cIiwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSwgb25Qb2ludGVyRG93bjogdGhpcy5udWRnZUJ1dHRvblBvaW50ZXJEb3duSGFuZGxlciwgb25Qb2ludGVyT3V0OiB0aGlzLm51ZGdlQnV0dG9uUG9pbnRlck91dEhhbmRsZXIsIG9uUG9pbnRlclVwOiB0aGlzLm51ZGdlQnV0dG9uUG9pbnRlclVwSGFuZGxlciwgdGFiSW5kZXg6IC0xLCB0eXBlOiBcImJ1dHRvblwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBcImNoZXZyb24tZG93blwiLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKSk7XG4gICAgY29uc3QgbnVtYmVyQnV0dG9uc1ZlcnRpY2FsID0gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLm51bWJlckJ1dHRvbldyYXBwZXIgfSwgbnVtYmVyQnV0dG9uc0hvcml6b250YWxVcCwgbnVtYmVyQnV0dG9uc0hvcml6b250YWxEb3duKSk7XG4gICAgY29uc3QgcHJlZml4VGV4dCA9IGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLnByZWZpeCB9LCB0aGlzLnByZWZpeFRleHQpO1xuICAgIGNvbnN0IHN1ZmZpeFRleHQgPSBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5zdWZmaXggfSwgdGhpcy5zdWZmaXhUZXh0KTtcbiAgICBjb25zdCBjaGlsZEVsID0gKGgoXCJpbnB1dFwiLCB7IFwiYXJpYS1sYWJlbFwiOiBnZXRMYWJlbFRleHQodGhpcyksIGF1dG9jb21wbGV0ZTogdGhpcy5hdXRvY29tcGxldGUsIGF1dG9mb2N1czogdGhpcy5hdXRvZm9jdXMgPyB0cnVlIDogbnVsbCwgZGVmYXVsdFZhbHVlOiB0aGlzLmRlZmF1bHRWYWx1ZSwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgPyB0cnVlIDogbnVsbCwgZW50ZXJLZXlIaW50OiB0aGlzLmVudGVyS2V5SGludCwgaW5wdXRNb2RlOiB0aGlzLmlucHV0TW9kZSwga2V5OiBcImxvY2FsaXplZC1pbnB1dFwiLCBtYXhMZW5ndGg6IHRoaXMubWF4TGVuZ3RoLCBtaW5MZW5ndGg6IHRoaXMubWluTGVuZ3RoLCBuYW1lOiB1bmRlZmluZWQsIG9uQmx1cjogdGhpcy5pbnB1dE51bWJlckJsdXJIYW5kbGVyLCBvbkZvY3VzOiB0aGlzLmlucHV0TnVtYmVyRm9jdXNIYW5kbGVyLCBvbklucHV0OiB0aGlzLmlucHV0TnVtYmVySW5wdXRIYW5kbGVyLCBvbktleURvd246IHRoaXMuaW5wdXROdW1iZXJLZXlEb3duSGFuZGxlciwgb25LZXlVcDogdGhpcy5pbnB1dE51bWJlcktleVVwSGFuZGxlciwgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIgfHwgXCJcIiwgcmVhZE9ubHk6IHRoaXMucmVhZE9ubHksIHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogdGhpcy5sb2NhbGl6ZWRWYWx1ZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IHRoaXMuc2V0Q2hpbGROdW1iZXJFbFJlZiB9KSk7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5jbGlja0hhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlciB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUy5pbnB1dFdyYXBwZXJdOiB0cnVlLCBbQ1NTX1VUSUxJVFkucnRsXTogZGlyID09PSBcInJ0bFwiIH0gfSwgdGhpcy5udW1iZXJCdXR0b25UeXBlID09PSBcImhvcml6b250YWxcIiAmJiAhdGhpcy5yZWFkT25seVxuICAgICAgPyBudW1iZXJCdXR0b25zSG9yaXpvbnRhbERvd25cbiAgICAgIDogbnVsbCwgdGhpcy5wcmVmaXhUZXh0ID8gcHJlZml4VGV4dCA6IG51bGwsIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLndyYXBwZXIgfSwgY2hpbGRFbCwgdGhpcy5pc0NsZWFyYWJsZSA/IGlucHV0Q2xlYXJCdXR0b24gOiBudWxsLCB0aGlzLnJlcXVlc3RlZEljb24gPyBpY29uRWwgOiBudWxsLCB0aGlzLmxvYWRpbmcgPyBsb2FkZXIgOiBudWxsKSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuYWN0aW9uV3JhcHBlciB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmFjdGlvbiB9KSksIHRoaXMubnVtYmVyQnV0dG9uVHlwZSA9PT0gXCJ2ZXJ0aWNhbFwiICYmICF0aGlzLnJlYWRPbmx5ID8gbnVtYmVyQnV0dG9uc1ZlcnRpY2FsIDogbnVsbCwgdGhpcy5zdWZmaXhUZXh0ID8gc3VmZml4VGV4dCA6IG51bGwsIHRoaXMubnVtYmVyQnV0dG9uVHlwZSA9PT0gXCJob3Jpem9udGFsXCIgJiYgIXRoaXMucmVhZE9ubHlcbiAgICAgID8gbnVtYmVyQnV0dG9uc0hvcml6b250YWxVcFxuICAgICAgOiBudWxsLCBoKEhpZGRlbkZvcm1JbnB1dFNsb3QsIHsgY29tcG9uZW50OiB0aGlzIH0pKSkpO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZFdhdGNoZXJcIl0sXG4gICAgXCJtYXhcIjogW1wibWF4V2F0Y2hlclwiXSxcbiAgICBcIm1pblwiOiBbXCJtaW5XYXRjaGVyXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwidmFsdWVcIjogW1widmFsdWVXYXRjaGVyXCJdLFxuICAgIFwiaWNvblwiOiBbXCJ1cGRhdGVSZXF1ZXN0ZWRJY29uXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZVdhdGNoZXJcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gaW5wdXROdW1iZXJDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtaW5wdXQtbnVtYmVyXCIsIHtcbiAgICBcImFsaWdubWVudFwiOiBbNTEzXSxcbiAgICBcImF1dG9mb2N1c1wiOiBbNTE2XSxcbiAgICBcImNsZWFyYWJsZVwiOiBbNTE2XSxcbiAgICBcImRpc2FibGVkXCI6IFs1MTZdLFxuICAgIFwiZm9ybVwiOiBbNTEzXSxcbiAgICBcImdyb3VwU2VwYXJhdG9yXCI6IFs1MTYsIFwiZ3JvdXAtc2VwYXJhdG9yXCJdLFxuICAgIFwiaGlkZGVuXCI6IFs1MTZdLFxuICAgIFwiaWNvblwiOiBbNTIwXSxcbiAgICBcImljb25GbGlwUnRsXCI6IFs1MTYsIFwiaWNvbi1mbGlwLXJ0bFwiXSxcbiAgICBcImludGVnZXJcIjogWzRdLFxuICAgIFwibGFiZWxcIjogWzFdLFxuICAgIFwibG9hZGluZ1wiOiBbNTE2XSxcbiAgICBcIm51bWJlcmluZ1N5c3RlbVwiOiBbNTEzLCBcIm51bWJlcmluZy1zeXN0ZW1cIl0sXG4gICAgXCJsb2NhbGVGb3JtYXRcIjogWzQsIFwibG9jYWxlLWZvcm1hdFwiXSxcbiAgICBcIm1heFwiOiBbNTE0XSxcbiAgICBcIm1pblwiOiBbNTE0XSxcbiAgICBcIm1heExlbmd0aFwiOiBbNTE0LCBcIm1heC1sZW5ndGhcIl0sXG4gICAgXCJtaW5MZW5ndGhcIjogWzUxNCwgXCJtaW4tbGVuZ3RoXCJdLFxuICAgIFwibmFtZVwiOiBbNTEzXSxcbiAgICBcIm51bWJlckJ1dHRvblR5cGVcIjogWzUxMywgXCJudW1iZXItYnV0dG9uLXR5cGVcIl0sXG4gICAgXCJwbGFjZWhvbGRlclwiOiBbMV0sXG4gICAgXCJwcmVmaXhUZXh0XCI6IFsxLCBcInByZWZpeC10ZXh0XCJdLFxuICAgIFwicmVhZE9ubHlcIjogWzUxNiwgXCJyZWFkLW9ubHlcIl0sXG4gICAgXCJyZXF1aXJlZFwiOiBbNTE2XSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwic3RhdHVzXCI6IFs1MTNdLFxuICAgIFwic3RlcFwiOiBbNTIwXSxcbiAgICBcImF1dG9jb21wbGV0ZVwiOiBbMV0sXG4gICAgXCJpbnB1dE1vZGVcIjogWzEsIFwiaW5wdXQtbW9kZVwiXSxcbiAgICBcImVudGVyS2V5SGludFwiOiBbMSwgXCJlbnRlci1rZXktaGludFwiXSxcbiAgICBcInN1ZmZpeFRleHRcIjogWzEsIFwic3VmZml4LXRleHRcIl0sXG4gICAgXCJlZGl0aW5nRW5hYmxlZFwiOiBbMTU0MCwgXCJlZGl0aW5nLWVuYWJsZWRcIl0sXG4gICAgXCJ2YWx1ZVwiOiBbMTAyNV0sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFsxMDQwXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJsb2NhbGl6ZWRWYWx1ZVwiOiBbMzJdLFxuICAgIFwic2xvdHRlZEFjdGlvbkVsRGlzYWJsZWRJbnRlcm5hbGx5XCI6IFszMl0sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdLFxuICAgIFwic2VsZWN0VGV4dFwiOiBbNjRdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtaW5wdXQtbnVtYmVyXCIsIFwiY2FsY2l0ZS1pY29uXCIsIFwiY2FsY2l0ZS1wcm9ncmVzc1wiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1pbnB1dC1udW1iZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBJbnB1dE51bWJlcik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDIoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLXByb2dyZXNzXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBJbnB1dE51bWJlciBhcyBJLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==