"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_input_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/input.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/input.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ Input),
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
const INPUT_TYPE_ICONS = {
  tel: "phone",
  password: "lock",
  email: "email-address",
  date: "calendar",
  time: "clock",
  search: "search",
};
const SLOTS = {
  action: "action",
};

const inputCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) textarea{block-size:1.5rem;min-block-size:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) input[type=file]{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=s]) textarea{block-size:auto;padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) textarea{min-block-size:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) input[type=file]{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=m]) textarea{block-size:auto;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) textarea{min-block-size:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) input[type=file]{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([scale=l]) textarea{block-size:auto;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([disabled]) textarea{resize:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}textarea,input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}input[type=search]::-webkit-search-decoration{-webkit-appearance:none}input,textarea{text-overflow:ellipsis;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}input:placeholder-shown,textarea:placeholder-shown{text-overflow:ellipsis}input:focus,textarea:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}input[readonly],textarea[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus,textarea[readonly]:focus{color:var(--calcite-ui-text-1)}calcite-icon{color:var(--calcite-ui-text-3)}textarea,input{outline-color:transparent}textarea:focus,input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.icon,.resize-icon-wrapper{z-index:var(--calcite-app-z-index)}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:start}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:end}input[type=number]{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0px}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-ui-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item:active{background-color:var(--calcite-ui-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:input::-webkit-calendar-picker-indicator{display:none}input[type=date]::-webkit-input-placeholder{visibility:hidden !important}textarea::-webkit-resizer{position:absolute;inset-block-end:0px;box-sizing:border-box;padding-block:0px;padding-inline:0.25rem;inset-inline-end:0}.resize-icon-wrapper{inset-block-end:2px;inset-inline-end:2px;pointer-events:none;position:absolute;block-size:0.75rem;inline-size:0.75rem;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3)}.resize-icon-wrapper calcite-icon{inset-block-end:0.25rem;inset-inline-end:0.25rem;transform:rotate(-45deg)}.calcite--rtl .resize-icon-wrapper calcite-icon{transform:rotate(45deg)}:host([type=color]) input{padding:0.25rem}:host([type=file]) input{cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);text-align:center}:host([type=file][scale=s]) input{padding-block:1px;padding-inline:0.5rem}:host([type=file][scale=m]) input{padding-block:0.25rem;padding-inline:0.75rem}:host([type=file][scale=l]) input{padding-block:0.5rem;padding-inline:1rem}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}input.inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";

const Input = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalInputFocus = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteInternalInputFocus", 6);
    this.calciteInternalInputBlur = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteInternalInputBlur", 6);
    this.calciteInputInput = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteInputInput", 7);
    this.calciteInputChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteInputChange", 6);
    /** keep track of the rendered child type */
    this.childElType = "input";
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
      this.setValue({
        committing: true,
        nativeEvent,
        origin: "user",
        value: "",
      });
    };
    this.emitChangeIfUserModified = () => {
      if (this.previousValueOrigin === "user" && this.value !== this.previousEmittedValue) {
        this.calciteInputChange.emit();
        this.setPreviousEmittedValue(this.value);
      }
    };
    this.inputBlurHandler = () => {
      this.calciteInternalInputBlur.emit();
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
    this.inputFocusHandler = () => {
      this.calciteInternalInputFocus.emit();
    };
    this.inputChangeHandler = () => {
      if (this.type === "file") {
        this.files = this.childEl.files;
      }
    };
    this.inputInputHandler = (nativeEvent) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      this.setValue({
        nativeEvent,
        origin: "user",
        value: nativeEvent.target.value,
      });
    };
    this.inputKeyDownHandler = (event) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      if (event.key === "Enter") {
        this.emitChangeIfUserModified();
      }
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
        if (!(0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(delocalizedValue)) {
          nativeEvent.preventDefault();
        }
        this.setValue({
          nativeEvent,
          origin: "user",
          value: (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.p)(delocalizedValue),
        });
        this.childNumberEl.value = this.localizedValue;
      }
      else {
        this.setValue({
          nativeEvent,
          origin: "user",
          value: delocalizedValue,
        });
      }
    };
    this.inputNumberKeyDownHandler = (event) => {
      if (this.type !== "number" || this.disabled || this.readOnly) {
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
      if (event.key === _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.decimal) {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && this.childNumberEl.value.indexOf(_locale_js__WEBPACK_IMPORTED_MODULE_6__.n.decimal) === -1) {
          return;
        }
      }
      if (/[eE]/.test(event.key)) {
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
      if ((nativeEvent instanceof KeyboardEvent && nativeEvent.repeat) || this.type !== "number") {
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
    this.numberButtonPointerUpAndOutHandler = () => {
      window.clearInterval(this.nudgeNumberValueIntervalId);
    };
    this.numberButtonPointerDownHandler = (event) => {
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
        this.setValue({
          value: event.target.value,
          origin: "direct",
        });
      }
      event.stopPropagation();
    };
    this.setChildElRef = (el) => {
      this.childEl = el;
    };
    this.setChildNumberElRef = (el) => {
      this.childNumberEl = el;
    };
    this.setInputValue = (newInputValue) => {
      if (this.type === "text" && !this.childEl) {
        return;
      }
      if (this.type === "number" && !this.childNumberEl) {
        return;
      }
      this[`child${this.type === "number" ? "Number" : ""}El`].value = newInputValue;
    };
    this.setPreviousEmittedValue = (value) => {
      this.previousEmittedValue = this.normalizeValue(value);
    };
    this.setPreviousValue = (value) => {
      this.previousValue = this.normalizeValue(value);
    };
    this.setValue = ({ committing = false, nativeEvent, origin, previousValue, value, }) => {
      this.setPreviousValue(previousValue ?? this.value);
      this.previousValueOrigin = origin;
      if (this.type === "number") {
        _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.numberFormatOptions = {
          locale: this.effectiveLocale,
          numberingSystem: this.numberingSystem,
          useGrouping: this.groupSeparator,
          signDisplay: "never",
        };
        const isValueDeleted = this.previousValue?.length > value.length || this.value?.length > value.length;
        const hasTrailingDecimalSeparator = value.charAt(value.length - 1) === ".";
        const sanitizedValue = hasTrailingDecimalSeparator && isValueDeleted ? value : (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.s)(value);
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
        this.userChangedValue = origin === "user" && this.value !== newValue;
        // don't sanitize the start of negative/decimal numbers, but
        // don't set value to an invalid number
        this.value = ["-", "."].includes(newValue) ? "" : newValue;
      }
      else {
        this.userChangedValue = origin === "user" && this.value !== value;
        this.value = value;
      }
      if (origin === "direct") {
        this.setInputValue(value);
        this.previousEmittedValue = value;
      }
      if (nativeEvent) {
        const calciteInputInputEvent = this.calciteInputInput.emit();
        if (calciteInputInputEvent.defaultPrevented) {
          this.value = this.previousValue;
          this.localizedValue =
            this.type === "number"
              ? _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.localize(this.previousValue)
              : this.previousValue;
        }
        else if (committing) {
          this.emitChangeIfUserModified();
        }
      }
    };
    this.inputKeyUpHandler = () => {
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
    this.pattern = undefined;
    this.accept = undefined;
    this.multiple = false;
    this.inputMode = "text";
    this.enterKeyHint = undefined;
    this.suffixText = undefined;
    this.editingEnabled = false;
    this.type = "text";
    this.value = "";
    this.files = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
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
      this.setValue({
        origin: "direct",
        previousValue,
        value: newValue == null || newValue == ""
          ? ""
          : this.type === "number"
            ? (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(newValue)
              ? newValue
              : this.previousValue || ""
            : newValue,
      });
      this.warnAboutInvalidNumberValue(newValue);
    }
    this.userChangedValue = false;
  }
  updateRequestedIcon() {
    this.requestedIcon = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.h)(INPUT_TYPE_ICONS, this.icon, this.type);
  }
  get isClearable() {
    return !this.isTextarea && (this.clearable || this.type === "search") && this.value?.length > 0;
  }
  get isTextarea() {
    return this.childElType === "textarea";
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_8__.u)(this, this.effectiveLocale);
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
    this.setPreviousEmittedValue(this.value);
    this.setPreviousValue(this.value);
    if (this.type === "number") {
      this.warnAboutInvalidNumberValue(this.value);
      this.setValue({
        origin: "connected",
        value: (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(this.value) ? this.value : "",
      });
    }
    this.mutationObserver?.observe(this.el, { childList: true });
    this.setDisabledAction();
    this.el.addEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
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
    this.childElType = this.type === "textarea" ? "textarea" : "input";
    this.maxString = this.max?.toString();
    this.minString = this.min?.toString();
    this.requestedIcon = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.h)(INPUT_TYPE_ICONS, this.icon, this.type);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_8__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
  }
  componentShouldUpdate(newValue, oldValue, property) {
    if (this.type === "number" && property === "value" && newValue && !(0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(newValue)) {
      this.setValue({
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
    if (this.type === "number") {
      this.childNumberEl?.focus();
    }
    else {
      this.childEl?.focus();
    }
  }
  /** Selects the text of the component's `value`. */
  async selectText() {
    if (this.type === "number") {
      this.childNumberEl?.select();
    }
    else {
      this.childEl?.select();
    }
  }
  onLabelClick() {
    this.setFocus();
  }
  incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent) {
    const { value } = this;
    const adjustment = direction === "up" ? 1 : -1;
    const inputStep = this.step === "any" ? 1 : Math.abs(this.step || 1);
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
    this.setValue({
      committing: true,
      nativeEvent,
      origin: "user",
      value: finalValue,
    });
  }
  onFormReset() {
    this.setValue({
      origin: "reset",
      value: this.defaultValue,
    });
  }
  syncHiddenFormInput(input) {
    const { type } = this;
    input.type = type;
    if (type === "number") {
      input.min = this.min?.toString(10) ?? "";
      input.max = this.max?.toString(10) ?? "";
    }
    else if (type === "text") {
      if (this.minLength != null) {
        input.minLength = this.minLength;
      }
      if (this.maxLength != null) {
        input.maxLength = this.maxLength;
      }
    }
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
    return this.type === "number" ? ((0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(value) ? value : "") : value;
  }
  warnAboutInvalidNumberValue(value) {
    if (this.type === "number" && value && !(0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(value)) {
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
      }, "data-adjustment": "up", disabled: this.disabled || this.readOnly, onPointerDown: this.numberButtonPointerDownHandler, onPointerOut: this.numberButtonPointerUpAndOutHandler, onPointerUp: this.numberButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("calcite-icon", { icon: "chevron-up", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_9__.g)(this.scale) })));
    const numberButtonsHorizontalDown = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("button", { "aria-hidden": "true", class: {
        [CSS.numberButtonItem]: true,
        [CSS.buttonItemHorizontal]: isHorizontalNumberButton,
      }, "data-adjustment": "down", disabled: this.disabled || this.readOnly, onPointerDown: this.numberButtonPointerDownHandler, onPointerOut: this.numberButtonPointerUpAndOutHandler, onPointerUp: this.numberButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("calcite-icon", { icon: "chevron-down", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_9__.g)(this.scale) })));
    const numberButtonsVertical = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: CSS.numberButtonWrapper }, numberButtonsHorizontalUp, numberButtonsHorizontalDown));
    const prefixText = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: CSS.prefix }, this.prefixText);
    const suffixText = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: CSS.suffix }, this.suffixText);
    const localeNumberInput = this.type === "number" ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("input", { accept: this.accept, "aria-label": (0,_label2_js__WEBPACK_IMPORTED_MODULE_4__.g)(this), autocomplete: this.autocomplete, autofocus: this.autofocus ? true : null, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.enterKeyHint, inputMode: this.inputMode, key: "localized-input", maxLength: this.maxLength, minLength: this.minLength, multiple: this.multiple, name: undefined, onBlur: this.inputBlurHandler, onFocus: this.inputFocusHandler, onInput: this.inputNumberInputHandler, onKeyDown: this.inputNumberKeyDownHandler, onKeyUp: this.inputKeyUpHandler, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readOnly, type: "text", value: this.localizedValue,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setChildNumberElRef })) : null;
    const childEl = this.type !== "number"
      ? [
        (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)(this.childElType, { accept: this.accept, "aria-label": (0,_label2_js__WEBPACK_IMPORTED_MODULE_4__.g)(this), autocomplete: this.autocomplete, autofocus: this.autofocus ? true : null, class: {
            [CSS.editingEnabled]: this.editingEnabled,
            [CSS.inlineChild]: !!this.inlineEditableEl,
          }, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.enterKeyHint, inputMode: this.inputMode, max: this.maxString, maxLength: this.maxLength, min: this.minString, minLength: this.minLength, multiple: this.multiple, name: this.name, onBlur: this.inputBlurHandler, onChange: this.inputChangeHandler, onFocus: this.inputFocusHandler, onInput: this.inputInputHandler, onKeyDown: this.inputKeyDownHandler, onKeyUp: this.inputKeyUpHandler, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readOnly, required: this.required ? true : null, step: this.step, tabIndex: this.disabled || (this.inlineEditableEl && !this.editingEnabled) ? -1 : null, type: this.type, value: this.value,
          // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
          ref: this.setChildElRef }),
        this.isTextarea ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: CSS.resizeIconWrapper }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("calcite-icon", { icon: "chevron-down", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_9__.g)(this.scale) }))) : null,
      ]
      : null;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.Host, { onClick: this.clickHandler, onKeyDown: this.keyDownHandler }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: { [CSS.inputWrapper]: true, [_dom_js__WEBPACK_IMPORTED_MODULE_0__.C.rtl]: dir === "rtl" } }, this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly
      ? numberButtonsHorizontalDown
      : null, this.prefixText ? prefixText : null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: CSS.wrapper }, localeNumberInput, childEl, this.isClearable ? inputClearButton : null, this.requestedIcon ? iconEl : null, this.loading ? loader : null), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: CSS.actionWrapper }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { name: SLOTS.action })), this.type === "number" && this.numberButtonType === "vertical" && !this.readOnly
      ? numberButtonsVertical
      : null, this.suffixText ? suffixText : null, this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly
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
    "type": ["updateRequestedIcon"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return inputCss; }
}, [1, "calcite-input", {
    "alignment": [513],
    "autofocus": [516],
    "clearable": [516],
    "disabled": [516],
    "form": [513],
    "groupSeparator": [516, "group-separator"],
    "hidden": [516],
    "icon": [520],
    "iconFlipRtl": [516, "icon-flip-rtl"],
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
    "pattern": [1],
    "accept": [1],
    "multiple": [4],
    "inputMode": [1, "input-mode"],
    "enterKeyHint": [1, "enter-key-hint"],
    "suffixText": [1, "suffix-text"],
    "editingEnabled": [1540, "editing-enabled"],
    "type": [513],
    "value": [1025],
    "files": [16],
    "messages": [1040],
    "messageOverrides": [1040],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "localizedValue": [32],
    "slottedActionElDisabledInternally": [32],
    "setFocus": [64],
    "selectText": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-input", "calcite-icon", "calcite-progress"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Input);
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




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/progress.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/progress.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ Progress),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const progressCss = ":host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:var(--calcite-app-z-index);inline-size:100%;overflow:hidden;background:var(--calcite-ui-border-3)}.bar{z-index:var(--calcite-app-z-index);background-color:var(--calcite-ui-brand)}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) / var(--calcite-internal-duration-factor) * 11 / var(--calcite-internal-duration-factor)) linear infinite}.indeterminate.calcite--rtl{animation-name:looping-progress-bar-ani-rtl}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(600%, 0, 0)}}@keyframes looping-progress-bar-ani-rtl{0%{transform:translate3d(100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(-600%, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}";

const Progress = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.type = "determinate";
    this.value = 0;
    this.label = undefined;
    this.text = undefined;
    this.reversed = false;
  }
  render() {
    const isDeterminate = this.type === "determinate";
    const barStyles = isDeterminate ? { width: `${this.value * 100}%` } : {};
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(this.el);
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { "aria-label": this.label || this.text, "aria-valuemax": 1, "aria-valuemin": 0, "aria-valuenow": this.value, role: "progressbar" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: "track" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: {
        bar: true,
        indeterminate: this.type === "indeterminate",
        [_dom_js__WEBPACK_IMPORTED_MODULE_0__.C.rtl]: dir === "rtl",
        reversed: this.reversed,
      }, style: barStyles })), this.text ? (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: "text" }, this.text) : null));
  }
  get el() { return this; }
  static get style() { return progressCss; }
}, [1, "calcite-progress", {
    "type": [513],
    "value": [2],
    "label": [1],
    "text": [1],
    "reversed": [516]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-progress"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Progress);
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNGYzMmIwYTk1YjhkNGZjYzNmOGFiMzkwZTAyYjc3YzAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRztBQUNzQjtBQUN4QjtBQUNNO0FBQ3hFO0FBQzhDO0FBQ3FCO0FBQzJIO0FBQ3BMO0FBQzZEO0FBQy9EO0FBQ0k7QUFDSTs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyxlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxjQUFjLHlFQUF5RSxrQkFBa0Isc0JBQXNCLHNDQUFzQyxpQkFBaUIsMEJBQTBCLGtCQUFrQixzQkFBc0IsK0lBQStJLGtCQUFrQixrQ0FBa0Msa0JBQWtCLCtCQUErQixzQkFBc0IsdUJBQXVCLDBCQUEwQixnQkFBZ0Isc0JBQXNCLHNCQUFzQixzQ0FBc0MsaUJBQWlCLHlFQUF5RSxnQkFBZ0IsdUJBQXVCLHNDQUFzQyxpQkFBaUIsMEJBQTBCLG9CQUFvQiwrSUFBK0ksZ0JBQWdCLGtDQUFrQyxnQkFBZ0IsK0JBQStCLG9CQUFvQixxQkFBcUIsMEJBQTBCLGdCQUFnQixxQkFBcUIsdUJBQXVCLHNDQUFzQyxpQkFBaUIseUVBQXlFLG1CQUFtQixvQkFBb0IscUNBQXFDLG9CQUFvQiwwQkFBMEIsdUJBQXVCLCtJQUErSSxtQkFBbUIsa0NBQWtDLG1CQUFtQiwrQkFBK0IsdUJBQXVCLHdCQUF3QiwwQkFBMEIsZ0JBQWdCLHNCQUFzQixvQkFBb0IscUNBQXFDLG9CQUFvQiwyQkFBMkIsWUFBWSx5R0FBeUcsVUFBVSxlQUFlLDRFQUE0RSx3QkFBd0Isa0JBQWtCLFdBQVcsc0JBQXNC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QyxpQkFBaUIsZ0JBQWdCLHNDQUFzQyxLQUFLLG1DQUFtQyx5Q0FBeUMsK0JBQStCLE9BQU8sK0JBQStCLEtBQUssMkJBQTJCLGVBQWUsZ0JBQWdCLGtNQUFrTSw0QkFBNEIsNENBQTRDLFVBQVUsNEJBQTRCLE1BQU0sbUJBQW1CLHVCQUF1QixrQkFBa0Isc0NBQXNDLGlCQUFpQiw4Q0FBOEMsK0JBQStCLG9DQUFvQyxHQUFHLG1DQUFtQyxJQUFJLGdCQUFnQixLQUFLLG1DQUFtQyx3Q0FBd0MsR0FBRyxrQ0FBa0MsSUFBSSxnQkFBZ0IsS0FBSyxvQ0FBb0MsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUU5d0MsK0JBQStCLDBGQUFrQixlQUFlLCtFQUFXO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxVQUFVLGlCQUFpQixLQUFLO0FBQ3hFLGdCQUFnQiwwQ0FBYTtBQUM3QixZQUFZLHlFQUFDLFVBQVUsaUlBQWlJLEVBQUUseUVBQUMsVUFBVSxnQkFBZ0IsRUFBRSx5RUFBQyxVQUFVO0FBQ2xNO0FBQ0E7QUFDQSxTQUFTLHNDQUFXO0FBQ3BCO0FBQ0EsT0FBTyxvQkFBb0IsZ0JBQWdCLHlFQUFDLFVBQVUsZUFBZTtBQUNyRTtBQUNBLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRW1EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9wcm9ncmVzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U2xvdHRlZCwgaiBhcyBpc1ByaW1hcnlQb2ludGVyQnV0dG9uLCBoIGFzIHNldFJlcXVlc3RlZEljb24sIGIgYXMgZ2V0RWxlbWVudERpciwgQyBhcyBDU1NfVVRJTElUWSB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IHMgYXMgc3VibWl0Rm9ybSwgYyBhcyBjb25uZWN0Rm9ybSwgZCBhcyBkaXNjb25uZWN0Rm9ybSwgSCBhcyBIaWRkZW5Gb3JtSW5wdXRTbG90IH0gZnJvbSAnLi9mb3JtLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLmpzJztcbmltcG9ydCB7IG4gYXMgbnVtYmVyS2V5cyB9IGZyb20gJy4va2V5LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExhYmVsLCBkIGFzIGRpc2Nvbm5lY3RMYWJlbCwgZyBhcyBnZXRMYWJlbFRleHQgfSBmcm9tICcuL2xhYmVsMi5qcyc7XG5pbXBvcnQgeyBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudEZvY3VzYWJsZSB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgbiBhcyBudW1iZXJTdHJpbmdGb3JtYXR0ZXIsIGkgYXMgaXNWYWxpZE51bWJlciwgcCBhcyBwYXJzZU51bWJlclN0cmluZywgcyBhcyBzYW5pdGl6ZU51bWJlclN0cmluZywgZSBhcyBhZGRMb2NhbGl6ZWRUcmFpbGluZ0RlY2ltYWxaZXJvcywgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQsIEIgYXMgQmlnRGVjaW1hbCB9IGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0SWNvblNjYWxlIH0gZnJvbSAnLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL2ljb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDEgfSBmcm9tICcuL3Byb2dyZXNzLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBsb2FkZXI6IFwibG9hZGVyXCIsXG4gIGNsZWFyQnV0dG9uOiBcImNsZWFyLWJ1dHRvblwiLFxuICBlZGl0aW5nRW5hYmxlZDogXCJlZGl0aW5nLWVuYWJsZWRcIixcbiAgaW5saW5lQ2hpbGQ6IFwiaW5saW5lLWNoaWxkXCIsXG4gIGlucHV0SWNvbjogXCJpY29uXCIsXG4gIHByZWZpeDogXCJwcmVmaXhcIixcbiAgc3VmZml4OiBcInN1ZmZpeFwiLFxuICBudW1iZXJCdXR0b25XcmFwcGVyOiBcIm51bWJlci1idXR0b24td3JhcHBlclwiLFxuICBidXR0b25JdGVtSG9yaXpvbnRhbDogXCJudW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxcIixcbiAgd3JhcHBlcjogXCJlbGVtZW50LXdyYXBwZXJcIixcbiAgaW5wdXRXcmFwcGVyOiBcIndyYXBwZXJcIixcbiAgYWN0aW9uV3JhcHBlcjogXCJhY3Rpb24td3JhcHBlclwiLFxuICByZXNpemVJY29uV3JhcHBlcjogXCJyZXNpemUtaWNvbi13cmFwcGVyXCIsXG4gIG51bWJlckJ1dHRvbkl0ZW06IFwibnVtYmVyLWJ1dHRvbi1pdGVtXCIsXG59O1xuY29uc3QgSU5QVVRfVFlQRV9JQ09OUyA9IHtcbiAgdGVsOiBcInBob25lXCIsXG4gIHBhc3N3b3JkOiBcImxvY2tcIixcbiAgZW1haWw6IFwiZW1haWwtYWRkcmVzc1wiLFxuICBkYXRlOiBcImNhbGVuZGFyXCIsXG4gIHRpbWU6IFwiY2xvY2tcIixcbiAgc2VhcmNoOiBcInNlYXJjaFwiLFxufTtcbmNvbnN0IFNMT1RTID0ge1xuICBhY3Rpb246IFwiYWN0aW9uXCIsXG59O1xuXG5jb25zdCBpbnB1dENzcyA9IFwiOmhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7ZGlzcGxheTpibG9ja306aG9zdChbc2NhbGU9c10pIGlucHV0LDpob3N0KFtzY2FsZT1zXSkgLnByZWZpeCw6aG9zdChbc2NhbGU9c10pIC5zdWZmaXh7YmxvY2stc2l6ZToxLjVyZW07cGFkZGluZy1pbmxpbmU6MC41cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9c10pIHRleHRhcmVhe2Jsb2NrLXNpemU6MS41cmVtO21pbi1ibG9jay1zaXplOjEuNXJlbX06aG9zdChbc2NhbGU9c10pIC5udW1iZXItYnV0dG9uLXdyYXBwZXIsOmhvc3QoW3NjYWxlPXNdKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24sOmhvc3QoW3NjYWxlPXNdKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24gYnV0dG9ue2Jsb2NrLXNpemU6MS41cmVtfTpob3N0KFtzY2FsZT1zXSkgaW5wdXRbdHlwZT1maWxlXXtibG9jay1zaXplOjEuNXJlbX06aG9zdChbc2NhbGU9c10pIC5jbGVhci1idXR0b257bWluLWJsb2NrLXNpemU6MS41cmVtO21pbi1pbmxpbmUtc2l6ZToxLjVyZW19Omhvc3QoW3NjYWxlPXNdKSB0ZXh0YXJlYXtibG9jay1zaXplOmF1dG87cGFkZGluZy1ibG9jazowLjI1cmVtO3BhZGRpbmctaW5saW5lOjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPW1dKSBpbnB1dCw6aG9zdChbc2NhbGU9bV0pIC5wcmVmaXgsOmhvc3QoW3NjYWxlPW1dKSAuc3VmZml4e2Jsb2NrLXNpemU6MnJlbTtwYWRkaW5nLWlubGluZTowLjc1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9bV0pIHRleHRhcmVhe21pbi1ibG9jay1zaXplOjJyZW19Omhvc3QoW3NjYWxlPW1dKSAubnVtYmVyLWJ1dHRvbi13cmFwcGVyLDpob3N0KFtzY2FsZT1tXSkgLmFjdGlvbi13cmFwcGVyIGNhbGNpdGUtYnV0dG9uLDpob3N0KFtzY2FsZT1tXSkgLmFjdGlvbi13cmFwcGVyIGNhbGNpdGUtYnV0dG9uIGJ1dHRvbntibG9jay1zaXplOjJyZW19Omhvc3QoW3NjYWxlPW1dKSBpbnB1dFt0eXBlPWZpbGVde2Jsb2NrLXNpemU6MnJlbX06aG9zdChbc2NhbGU9bV0pIC5jbGVhci1idXR0b257bWluLWJsb2NrLXNpemU6MnJlbTttaW4taW5saW5lLXNpemU6MnJlbX06aG9zdChbc2NhbGU9bV0pIHRleHRhcmVhe2Jsb2NrLXNpemU6YXV0bztwYWRkaW5nLWJsb2NrOjAuNXJlbTtwYWRkaW5nLWlubGluZTowLjc1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9bF0pIGlucHV0LDpob3N0KFtzY2FsZT1sXSkgLnByZWZpeCw6aG9zdChbc2NhbGU9bF0pIC5zdWZmaXh7YmxvY2stc2l6ZToyLjc1cmVtO3BhZGRpbmctaW5saW5lOjFyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW19Omhvc3QoW3NjYWxlPWxdKSB0ZXh0YXJlYXttaW4tYmxvY2stc2l6ZToyLjc1cmVtfTpob3N0KFtzY2FsZT1sXSkgLm51bWJlci1idXR0b24td3JhcHBlciw6aG9zdChbc2NhbGU9bF0pIC5hY3Rpb24td3JhcHBlciBjYWxjaXRlLWJ1dHRvbiw6aG9zdChbc2NhbGU9bF0pIC5hY3Rpb24td3JhcHBlciBjYWxjaXRlLWJ1dHRvbiBidXR0b257YmxvY2stc2l6ZToyLjc1cmVtfTpob3N0KFtzY2FsZT1sXSkgaW5wdXRbdHlwZT1maWxlXXtibG9jay1zaXplOjIuNzVyZW19Omhvc3QoW3NjYWxlPWxdKSAuY2xlYXItYnV0dG9ue21pbi1ibG9jay1zaXplOjIuNzVyZW07bWluLWlubGluZS1zaXplOjIuNzVyZW19Omhvc3QoW3NjYWxlPWxdKSB0ZXh0YXJlYXtibG9jay1zaXplOmF1dG87cGFkZGluZy1ibG9jazowLjc1cmVtO3BhZGRpbmctaW5saW5lOjFyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW19Omhvc3QoW2Rpc2FibGVkXSkgdGV4dGFyZWF7cmVzaXplOm5vbmV9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfXRleHRhcmVhLGlucHV0e3RyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSwgYmxvY2stc2l6ZSAwLCBvdXRsaW5lLW9mZnNldCAwczstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7bWF4LWJsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO21heC1pbmxpbmUtc2l6ZToxMDAlO2ZsZXg6MSAxIDAlO2JvcmRlci1yYWRpdXM6MHB4O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWwpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX1pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9aW5wdXQsdGV4dGFyZWF7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX1pbnB1dDpwbGFjZWhvbGRlci1zaG93bix0ZXh0YXJlYTpwbGFjZWhvbGRlci1zaG93bnt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfWlucHV0OmZvY3VzLHRleHRhcmVhOmZvY3Vze2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9aW5wdXRbcmVhZG9ubHldLHRleHRhcmVhW3JlYWRvbmx5XXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYmFja2dyb3VuZCk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pfWlucHV0W3JlYWRvbmx5XTpmb2N1cyx0ZXh0YXJlYVtyZWFkb25seV06Zm9jdXN7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfWNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9dGV4dGFyZWEsaW5wdXR7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH10ZXh0YXJlYTpmb2N1cyxpbnB1dDpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9Omhvc3QoW3N0YXR1cz1pbnZhbGlkXSkgaW5wdXQsOmhvc3QoW3N0YXR1cz1pbnZhbGlkXSkgdGV4dGFyZWF7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyKX06aG9zdChbc3RhdHVzPWludmFsaWRdKSBpbnB1dDpmb2N1cyw6aG9zdChbc3RhdHVzPWludmFsaWRdKSB0ZXh0YXJlYTpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcik7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9Omhvc3QoW3NjYWxlPXNdKSAuaWNvbntpbnNldC1pbmxpbmUtc3RhcnQ6MC41cmVtfTpob3N0KFtzY2FsZT1tXSkgLmljb257aW5zZXQtaW5saW5lLXN0YXJ0OjAuNzVyZW19Omhvc3QoW3NjYWxlPWxdKSAuaWNvbntpbnNldC1pbmxpbmUtc3RhcnQ6MXJlbX06aG9zdChbaWNvbl1bc2NhbGU9c10pIGlucHV0e3BhZGRpbmctaW5saW5lLXN0YXJ0OjJyZW19Omhvc3QoW2ljb25dW3NjYWxlPW1dKSBpbnB1dHtwYWRkaW5nLWlubGluZS1zdGFydDoyLjVyZW19Omhvc3QoW2ljb25dW3NjYWxlPWxdKSBpbnB1dHtwYWRkaW5nLWlubGluZS1zdGFydDozLjVyZW19LmVsZW1lbnQtd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZTtvcmRlcjozO2Rpc3BsYXk6aW5saW5lLWZsZXg7ZmxleDoxIDEgMCU7YWxpZ24taXRlbXM6Y2VudGVyfS5pY29ue3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jazt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc30uaWNvbiwucmVzaXplLWljb24td3JhcHBlcnt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpfWlucHV0W3R5cGU9dGV4dF06Oi1tcy1jbGVhcixpbnB1dFt0eXBlPXRleHRdOjotbXMtcmV2ZWFse2Rpc3BsYXk6bm9uZTtibG9jay1zaXplOjBweDtpbmxpbmUtc2l6ZTowcHh9aW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLGlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixpbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLGlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uLGlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2xlYXItYnV0dG9uLGlucHV0W3R5cGU9dGltZV06Oi13ZWJraXQtY2xlYXItYnV0dG9ue2Rpc3BsYXk6bm9uZX0uY2xlYXItYnV0dG9ue3BvaW50ZXItZXZlbnRzOmluaXRpYWw7b3JkZXI6NDttYXJnaW46MHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7bWluLWJsb2NrLXNpemU6MTAwJTtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1zZWxmOnN0cmV0Y2g7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6MHB4fS5jbGVhci1idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9LmNsZWFyLWJ1dHRvbjpob3ZlciBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzfS5jbGVhci1idXR0b246YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfS5jbGVhci1idXR0b246YWN0aXZlIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmNsZWFyLWJ1dHRvbjpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9LmNsZWFyLWJ1dHRvbjpkaXNhYmxlZHtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9LmxvYWRlcntpbnNldC1ibG9jay1zdGFydDoxcHg7aW5zZXQtaW5saW5lOjFweDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6YmxvY2t9LmFjdGlvbi13cmFwcGVye29yZGVyOjc7ZGlzcGxheTpmbGV4fS5wcmVmaXgsLnN1ZmZpeHtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6YXV0bzttaW4tYmxvY2stc2l6ZToxMDAlOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYmFja2dyb3VuZCk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2xpbmUtaGVpZ2h0OjE7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS5wcmVmaXh7b3JkZXI6Mjtib3JkZXItaW5saW5lLWVuZC13aWR0aDowcHh9LnN1ZmZpeHtvcmRlcjo1O2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6MHB4fTpob3N0KFthbGlnbm1lbnQ9c3RhcnRdKSB0ZXh0YXJlYSw6aG9zdChbYWxpZ25tZW50PXN0YXJ0XSkgaW5wdXR7dGV4dC1hbGlnbjpzdGFydH06aG9zdChbYWxpZ25tZW50PWVuZF0pIHRleHRhcmVhLDpob3N0KFthbGlnbm1lbnQ9ZW5kXSkgaW5wdXR7dGV4dC1hbGlnbjplbmR9aW5wdXRbdHlwZT1udW1iZXJdey1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGR9aW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkO21hcmdpbjowcHh9Lm51bWJlci1idXR0b24td3JhcHBlcntwb2ludGVyLWV2ZW50czpub25lO29yZGVyOjY7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIC53cmFwcGVye2ZsZXgtZGlyZWN0aW9uOnJvdztkaXNwbGF5OmZsZXh9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIGlucHV0LDpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9dmVydGljYWxdKSB0ZXh0YXJlYXtvcmRlcjoyfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9aG9yaXpvbnRhbF0pIC5jYWxjaXRlLS1ydGwgLm51bWJlci1idXR0b24taXRlbVtkYXRhLWFkanVzdG1lbnQ9ZG93bl0gY2FsY2l0ZS1pY29ue3RyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKX06aG9zdChbbnVtYmVyLWJ1dHRvbi10eXBlPWhvcml6b250YWxdKSAuY2FsY2l0ZS0tcnRsIC5udW1iZXItYnV0dG9uLWl0ZW1bZGF0YS1hZGp1c3RtZW50PXVwXSBjYWxjaXRlLWljb257dHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpfS5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD1kb3duXSwubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9dXBde29yZGVyOjE7bWF4LWJsb2NrLXNpemU6MTAwJTttaW4tYmxvY2stc2l6ZToxMDAlO2FsaWduLXNlbGY6c3RyZXRjaH0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9ZG93bl0gY2FsY2l0ZS1pY29uLC5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD11cF0gY2FsY2l0ZS1pY29ue3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpfS5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD1kb3duXXtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO2JvcmRlci1pbmxpbmUtZW5kLXdpZHRoOjBweH0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9ZG93bl06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMil9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PWRvd25dOmhvdmVyIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PXVwXXtvcmRlcjo1fS5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD11cF06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMil9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PXVwXTpob3ZlciBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9dmVydGljYWxdKSAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD1kb3duXTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX06aG9zdChbbnVtYmVyLWJ1dHRvbi10eXBlPXZlcnRpY2FsXSkgLm51bWJlci1idXR0b24taXRlbVtkYXRhLWFkanVzdG1lbnQ9ZG93bl06aG92ZXIgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdChbbnVtYmVyLWJ1dHRvbi10eXBlPXZlcnRpY2FsXSkgLm51bWJlci1idXR0b24taXRlbVtkYXRhLWFkanVzdG1lbnQ9dXBdOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9dmVydGljYWxdKSAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD11cF06aG92ZXIgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdChbbnVtYmVyLWJ1dHRvbi10eXBlPXZlcnRpY2FsXSkgLm51bWJlci1idXR0b24taXRlbVtkYXRhLWFkanVzdG1lbnQ9ZG93bl17Ym9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOjBweH0ubnVtYmVyLWJ1dHRvbi1pdGVte21heC1ibG9jay1zaXplOjUwJTttaW4tYmxvY2stc2l6ZTo1MCU7cG9pbnRlci1ldmVudHM6aW5pdGlhbDttYXJnaW46MHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLXNlbGY6Y2VudGVyO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7cGFkZGluZy1ibG9jazowcHg7cGFkZGluZy1pbmxpbmU6MC41cmVtO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6MHB4fS5udW1iZXItYnV0dG9uLWl0ZW0gY2FsY2l0ZS1pY29ue3BvaW50ZXItZXZlbnRzOm5vbmU7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9Lm51bWJlci1idXR0b24taXRlbTpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX0ubnVtYmVyLWJ1dHRvbi1pdGVtOmZvY3VzIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Lm51bWJlci1idXR0b24taXRlbTphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyl9Lm51bWJlci1idXR0b24taXRlbTpkaXNhYmxlZHtwb2ludGVyLWV2ZW50czpub25lfS53cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6Y2VudGVyfTppbnB1dDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9ye2Rpc3BsYXk6bm9uZX1pbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye3Zpc2liaWxpdHk6aGlkZGVuICFpbXBvcnRhbnR9dGV4dGFyZWE6Oi13ZWJraXQtcmVzaXplcntwb3NpdGlvbjphYnNvbHV0ZTtpbnNldC1ibG9jay1lbmQ6MHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nLWJsb2NrOjBweDtwYWRkaW5nLWlubGluZTowLjI1cmVtO2luc2V0LWlubGluZS1lbmQ6MH0ucmVzaXplLWljb24td3JhcHBlcntpbnNldC1ibG9jay1lbmQ6MnB4O2luc2V0LWlubGluZS1lbmQ6MnB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7YmxvY2stc2l6ZTowLjc1cmVtO2lubGluZS1zaXplOjAuNzVyZW07YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfS5yZXNpemUtaWNvbi13cmFwcGVyIGNhbGNpdGUtaWNvbntpbnNldC1ibG9jay1lbmQ6MC4yNXJlbTtpbnNldC1pbmxpbmUtZW5kOjAuMjVyZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5jYWxjaXRlLS1ydGwgLnJlc2l6ZS1pY29uLXdyYXBwZXIgY2FsY2l0ZS1pY29ue3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfTpob3N0KFt0eXBlPWNvbG9yXSkgaW5wdXR7cGFkZGluZzowLjI1cmVtfTpob3N0KFt0eXBlPWZpbGVdKSBpbnB1dHtjdXJzb3I6cG9pbnRlcjtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpkYXNoZWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTt0ZXh0LWFsaWduOmNlbnRlcn06aG9zdChbdHlwZT1maWxlXVtzY2FsZT1zXSkgaW5wdXR7cGFkZGluZy1ibG9jazoxcHg7cGFkZGluZy1pbmxpbmU6MC41cmVtfTpob3N0KFt0eXBlPWZpbGVdW3NjYWxlPW1dKSBpbnB1dHtwYWRkaW5nLWJsb2NrOjAuMjVyZW07cGFkZGluZy1pbmxpbmU6MC43NXJlbX06aG9zdChbdHlwZT1maWxlXVtzY2FsZT1sXSkgaW5wdXR7cGFkZGluZy1ibG9jazowLjVyZW07cGFkZGluZy1pbmxpbmU6MXJlbX06aG9zdCgubm8tYm90dG9tLWJvcmRlcikgaW5wdXR7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDowcHh9Omhvc3QoLmJvcmRlci10b3AtY29sb3Itb25lKSBpbnB1dHtib3JkZXItYmxvY2stc3RhcnQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSl9aW5wdXQuaW5saW5lLWNoaWxke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9aW5wdXQuaW5saW5lLWNoaWxkIC5lZGl0aW5nLWVuYWJsZWR7YmFja2dyb3VuZC1jb2xvcjppbmhlcml0fWlucHV0LmlubGluZS1jaGlsZDpub3QoLmVkaXRpbmctZW5hYmxlZCl7ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O3BhZGRpbmctaW5saW5lLXN0YXJ0OjB9OjpzbG90dGVkKGlucHV0W3Nsb3Q9aGlkZGVuLWZvcm0taW5wdXRdKXttYXJnaW46MCAhaW1wb3J0YW50O29wYWNpdHk6MCAhaW1wb3J0YW50O291dGxpbmU6bm9uZSAhaW1wb3J0YW50O3BhZGRpbmc6MCAhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlICFpbXBvcnRhbnQ7aW5zZXQ6MCAhaW1wb3J0YW50O3RyYW5zZm9ybTpub25lICFpbXBvcnRhbnQ7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmUgIWltcG9ydGFudDt6LWluZGV4Oi0xICFpbXBvcnRhbnR9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IElucHV0ID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0Rm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbElucHV0Rm9jdXNcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dEJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbElucHV0Qmx1clwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnB1dElucHV0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXRJbnB1dFwiLCA3KTtcbiAgICB0aGlzLmNhbGNpdGVJbnB1dENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUlucHV0Q2hhbmdlXCIsIDYpO1xuICAgIC8qKiBrZWVwIHRyYWNrIG9mIHRoZSByZW5kZXJlZCBjaGlsZCB0eXBlICovXG4gICAgdGhpcy5jaGlsZEVsVHlwZSA9IFwiaW5wdXRcIjtcbiAgICB0aGlzLnByZXZpb3VzVmFsdWVPcmlnaW4gPSBcImluaXRpYWxcIjtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsICgpID0+IHRoaXMuc2V0RGlzYWJsZWRBY3Rpb24oKSk7XG4gICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gZmFsc2U7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnJlYWRPbmx5IHx8IHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNDbGVhcmFibGUgJiYgZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dFZhbHVlKGV2ZW50KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIiAmJiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBpZiAoc3VibWl0Rm9ybSh0aGlzKSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY2xlYXJJbnB1dFZhbHVlID0gKG5hdGl2ZUV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgICAgY29tbWl0dGluZzogdHJ1ZSxcbiAgICAgICAgbmF0aXZlRXZlbnQsXG4gICAgICAgIG9yaWdpbjogXCJ1c2VyXCIsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLmVtaXRDaGFuZ2VJZlVzZXJNb2RpZmllZCA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnByZXZpb3VzVmFsdWVPcmlnaW4gPT09IFwidXNlclwiICYmIHRoaXMudmFsdWUgIT09IHRoaXMucHJldmlvdXNFbWl0dGVkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jYWxjaXRlSW5wdXRDaGFuZ2UuZW1pdCgpO1xuICAgICAgICB0aGlzLnNldFByZXZpb3VzRW1pdHRlZFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pbnB1dEJsdXJIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dEJsdXIuZW1pdCgpO1xuICAgICAgdGhpcy5lbWl0Q2hhbmdlSWZVc2VyTW9kaWZpZWQoKTtcbiAgICB9O1xuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzbG90dGVkQWN0aW9uRWwgPSBnZXRTbG90dGVkKHRoaXMuZWwsIFwiYWN0aW9uXCIpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gc2xvdHRlZEFjdGlvbkVsKSB7XG4gICAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaW5wdXRGb2N1c0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0Rm9jdXMuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5pbnB1dENoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy50eXBlID09PSBcImZpbGVcIikge1xuICAgICAgICB0aGlzLmZpbGVzID0gdGhpcy5jaGlsZEVsLmZpbGVzO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pbnB1dElucHV0SGFuZGxlciA9IChuYXRpdmVFdmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgICAgbmF0aXZlRXZlbnQsXG4gICAgICAgIG9yaWdpbjogXCJ1c2VyXCIsXG4gICAgICAgIHZhbHVlOiBuYXRpdmVFdmVudC50YXJnZXQudmFsdWUsXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuaW5wdXRLZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgdGhpcy5lbWl0Q2hhbmdlSWZVc2VyTW9kaWZpZWQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaW5wdXROdW1iZXJJbnB1dEhhbmRsZXIgPSAobmF0aXZlRXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdmFsdWUgPSBuYXRpdmVFdmVudC50YXJnZXQudmFsdWU7XG4gICAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgdXNlR3JvdXBpbmc6IHRoaXMuZ3JvdXBTZXBhcmF0b3IsXG4gICAgICB9O1xuICAgICAgY29uc3QgZGVsb2NhbGl6ZWRWYWx1ZSA9IG51bWJlclN0cmluZ0Zvcm1hdHRlci5kZWxvY2FsaXplKHZhbHVlKTtcbiAgICAgIGlmIChuYXRpdmVFdmVudC5pbnB1dFR5cGUgPT09IFwiaW5zZXJ0RnJvbVBhc3RlXCIpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkTnVtYmVyKGRlbG9jYWxpemVkVmFsdWUpKSB7XG4gICAgICAgICAgbmF0aXZlRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgICAgICBuYXRpdmVFdmVudCxcbiAgICAgICAgICBvcmlnaW46IFwidXNlclwiLFxuICAgICAgICAgIHZhbHVlOiBwYXJzZU51bWJlclN0cmluZyhkZWxvY2FsaXplZFZhbHVlKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZSA9IHRoaXMubG9jYWxpemVkVmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh7XG4gICAgICAgICAgbmF0aXZlRXZlbnQsXG4gICAgICAgICAgb3JpZ2luOiBcInVzZXJcIixcbiAgICAgICAgICB2YWx1ZTogZGVsb2NhbGl6ZWRWYWx1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmlucHV0TnVtYmVyS2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnR5cGUgIT09IFwibnVtYmVyXCIgfHwgdGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgIC8qIHByZXZlbnQgZGVmYXVsdCBiZWhhdmlvciBvZiBtb3ZpbmcgY3Vyc29yIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGlucHV0IHdoZW4gaG9sZGluZyBkb3duIEFycm93VXAgKi9cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5udWRnZU51bWJlclZhbHVlKFwidXBcIiwgZXZlbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIHRoaXMubnVkZ2VOdW1iZXJWYWx1ZShcImRvd25cIiwgZXZlbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzdXBwb3J0ZWRLZXlzID0gW1xuICAgICAgICAuLi5udW1iZXJLZXlzLFxuICAgICAgICBcIkFycm93TGVmdFwiLFxuICAgICAgICBcIkFycm93UmlnaHRcIixcbiAgICAgICAgXCJCYWNrc3BhY2VcIixcbiAgICAgICAgXCJEZWxldGVcIixcbiAgICAgICAgXCJFbnRlclwiLFxuICAgICAgICBcIkVzY2FwZVwiLFxuICAgICAgICBcIlRhYlwiLFxuICAgICAgXTtcbiAgICAgIGlmIChldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzU2hpZnRUYWJFdmVudCA9IGV2ZW50LnNoaWZ0S2V5ICYmIGV2ZW50LmtleSA9PT0gXCJUYWJcIjtcbiAgICAgIGlmIChzdXBwb3J0ZWRLZXlzLmluY2x1ZGVzKGV2ZW50LmtleSkgfHwgaXNTaGlmdFRhYkV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgIHRoaXMuZW1pdENoYW5nZUlmVXNlck1vZGlmaWVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIHVzZUdyb3VwaW5nOiB0aGlzLmdyb3VwU2VwYXJhdG9yLFxuICAgICAgfTtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IG51bWJlclN0cmluZ0Zvcm1hdHRlci5kZWNpbWFsKSB7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZSAmJiAhdGhpcy5jaGlsZE51bWJlckVsLnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZS5pbmRleE9mKG51bWJlclN0cmluZ0Zvcm1hdHRlci5kZWNpbWFsKSA9PT0gLTEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICgvW2VFXS8udGVzdChldmVudC5rZXkpKSB7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZSAmJiAhdGhpcy5jaGlsZE51bWJlckVsLnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICYmICEvW2VFXS8udGVzdCh0aGlzLmNoaWxkTnVtYmVyRWwudmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIi1cIikge1xuICAgICAgICBpZiAoIXRoaXMudmFsdWUgJiYgIXRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLmNoaWxkTnVtYmVyRWwudmFsdWUuc3BsaXQoXCItXCIpLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG4gICAgdGhpcy5udWRnZU51bWJlclZhbHVlID0gKGRpcmVjdGlvbiwgbmF0aXZlRXZlbnQpID0+IHtcbiAgICAgIGlmICgobmF0aXZlRXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50ICYmIG5hdGl2ZUV2ZW50LnJlcGVhdCkgfHwgdGhpcy50eXBlICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlucHV0TWF4ID0gdGhpcy5tYXhTdHJpbmcgPyBwYXJzZUZsb2F0KHRoaXMubWF4U3RyaW5nKSA6IG51bGw7XG4gICAgICBjb25zdCBpbnB1dE1pbiA9IHRoaXMubWluU3RyaW5nID8gcGFyc2VGbG9hdCh0aGlzLm1pblN0cmluZykgOiBudWxsO1xuICAgICAgY29uc3QgdmFsdWVOdWRnZURlbGF5SW5NcyA9IDE1MDtcbiAgICAgIHRoaXMuaW5jcmVtZW50T3JEZWNyZW1lbnROdW1iZXJWYWx1ZShkaXJlY3Rpb24sIGlucHV0TWF4LCBpbnB1dE1pbiwgbmF0aXZlRXZlbnQpO1xuICAgICAgaWYgKHRoaXMubnVkZ2VOdW1iZXJWYWx1ZUludGVydmFsSWQpIHtcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5udWRnZU51bWJlclZhbHVlSW50ZXJ2YWxJZCk7XG4gICAgICB9XG4gICAgICBsZXQgZmlyc3RWYWx1ZU51ZGdlID0gdHJ1ZTtcbiAgICAgIHRoaXMubnVkZ2VOdW1iZXJWYWx1ZUludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoZmlyc3RWYWx1ZU51ZGdlKSB7XG4gICAgICAgICAgZmlyc3RWYWx1ZU51ZGdlID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5jcmVtZW50T3JEZWNyZW1lbnROdW1iZXJWYWx1ZShkaXJlY3Rpb24sIGlucHV0TWF4LCBpbnB1dE1pbiwgbmF0aXZlRXZlbnQpO1xuICAgICAgfSwgdmFsdWVOdWRnZURlbGF5SW5Ncyk7XG4gICAgfTtcbiAgICB0aGlzLm51bWJlckJ1dHRvblBvaW50ZXJVcEFuZE91dEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLm51ZGdlTnVtYmVyVmFsdWVJbnRlcnZhbElkKTtcbiAgICB9O1xuICAgIHRoaXMubnVtYmVyQnV0dG9uUG9pbnRlckRvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBldmVudC50YXJnZXQuZGF0YXNldC5hZGp1c3RtZW50O1xuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMubnVkZ2VOdW1iZXJWYWx1ZShkaXJlY3Rpb24sIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGlkZGVuSW5wdXRDaGFuZ2VIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0Lm5hbWUgPT09IHRoaXMubmFtZSkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgIG9yaWdpbjogXCJkaXJlY3RcIixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0Q2hpbGRFbFJlZiA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5jaGlsZEVsID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLnNldENoaWxkTnVtYmVyRWxSZWYgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuY2hpbGROdW1iZXJFbCA9IGVsO1xuICAgIH07XG4gICAgdGhpcy5zZXRJbnB1dFZhbHVlID0gKG5ld0lucHV0VmFsdWUpID0+IHtcbiAgICAgIGlmICh0aGlzLnR5cGUgPT09IFwidGV4dFwiICYmICF0aGlzLmNoaWxkRWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIiAmJiAhdGhpcy5jaGlsZE51bWJlckVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXNbYGNoaWxkJHt0aGlzLnR5cGUgPT09IFwibnVtYmVyXCIgPyBcIk51bWJlclwiIDogXCJcIn1FbGBdLnZhbHVlID0gbmV3SW5wdXRWYWx1ZTtcbiAgICB9O1xuICAgIHRoaXMuc2V0UHJldmlvdXNFbWl0dGVkVmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICAgIHRoaXMucHJldmlvdXNFbWl0dGVkVmFsdWUgPSB0aGlzLm5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0UHJldmlvdXNWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdGhpcy5ub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG4gICAgfTtcbiAgICB0aGlzLnNldFZhbHVlID0gKHsgY29tbWl0dGluZyA9IGZhbHNlLCBuYXRpdmVFdmVudCwgb3JpZ2luLCBwcmV2aW91c1ZhbHVlLCB2YWx1ZSwgfSkgPT4ge1xuICAgICAgdGhpcy5zZXRQcmV2aW91c1ZhbHVlKHByZXZpb3VzVmFsdWUgPz8gdGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLnByZXZpb3VzVmFsdWVPcmlnaW4gPSBvcmlnaW47XG4gICAgICBpZiAodGhpcy50eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgICB1c2VHcm91cGluZzogdGhpcy5ncm91cFNlcGFyYXRvcixcbiAgICAgICAgICBzaWduRGlzcGxheTogXCJuZXZlclwiLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBpc1ZhbHVlRGVsZXRlZCA9IHRoaXMucHJldmlvdXNWYWx1ZT8ubGVuZ3RoID4gdmFsdWUubGVuZ3RoIHx8IHRoaXMudmFsdWU/Lmxlbmd0aCA+IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaGFzVHJhaWxpbmdEZWNpbWFsU2VwYXJhdG9yID0gdmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aCAtIDEpID09PSBcIi5cIjtcbiAgICAgICAgY29uc3Qgc2FuaXRpemVkVmFsdWUgPSBoYXNUcmFpbGluZ0RlY2ltYWxTZXBhcmF0b3IgJiYgaXNWYWx1ZURlbGV0ZWQgPyB2YWx1ZSA6IHNhbml0aXplTnVtYmVyU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZSAmJiAhc2FuaXRpemVkVmFsdWVcbiAgICAgICAgICA/IGlzVmFsaWROdW1iZXIodGhpcy5wcmV2aW91c1ZhbHVlKVxuICAgICAgICAgICAgPyB0aGlzLnByZXZpb3VzVmFsdWVcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgIDogc2FuaXRpemVkVmFsdWU7XG4gICAgICAgIGxldCBuZXdMb2NhbGl6ZWRWYWx1ZSA9IG51bWJlclN0cmluZ0Zvcm1hdHRlci5sb2NhbGl6ZShuZXdWYWx1ZSk7XG4gICAgICAgIGlmIChvcmlnaW4gIT09IFwiY29ubmVjdGVkXCIgJiYgIWhhc1RyYWlsaW5nRGVjaW1hbFNlcGFyYXRvcikge1xuICAgICAgICAgIG5ld0xvY2FsaXplZFZhbHVlID0gYWRkTG9jYWxpemVkVHJhaWxpbmdEZWNpbWFsWmVyb3MobmV3TG9jYWxpemVkVmFsdWUsIG5ld1ZhbHVlLCBudW1iZXJTdHJpbmdGb3JtYXR0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFkZHMgbG9jYWxpemVkIHRyYWlsaW5nIGRlY2ltYWwgc2VwYXJhdG9yXG4gICAgICAgIHRoaXMubG9jYWxpemVkVmFsdWUgPVxuICAgICAgICAgIGhhc1RyYWlsaW5nRGVjaW1hbFNlcGFyYXRvciAmJiBpc1ZhbHVlRGVsZXRlZFxuICAgICAgICAgICAgPyBgJHtuZXdMb2NhbGl6ZWRWYWx1ZX0ke251bWJlclN0cmluZ0Zvcm1hdHRlci5kZWNpbWFsfWBcbiAgICAgICAgICAgIDogbmV3TG9jYWxpemVkVmFsdWU7XG4gICAgICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IG9yaWdpbiA9PT0gXCJ1c2VyXCIgJiYgdGhpcy52YWx1ZSAhPT0gbmV3VmFsdWU7XG4gICAgICAgIC8vIGRvbid0IHNhbml0aXplIHRoZSBzdGFydCBvZiBuZWdhdGl2ZS9kZWNpbWFsIG51bWJlcnMsIGJ1dFxuICAgICAgICAvLyBkb24ndCBzZXQgdmFsdWUgdG8gYW4gaW52YWxpZCBudW1iZXJcbiAgICAgICAgdGhpcy52YWx1ZSA9IFtcIi1cIiwgXCIuXCJdLmluY2x1ZGVzKG5ld1ZhbHVlKSA/IFwiXCIgOiBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnVzZXJDaGFuZ2VkVmFsdWUgPSBvcmlnaW4gPT09IFwidXNlclwiICYmIHRoaXMudmFsdWUgIT09IHZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAob3JpZ2luID09PSBcImRpcmVjdFwiKSB7XG4gICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMucHJldmlvdXNFbWl0dGVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChuYXRpdmVFdmVudCkge1xuICAgICAgICBjb25zdCBjYWxjaXRlSW5wdXRJbnB1dEV2ZW50ID0gdGhpcy5jYWxjaXRlSW5wdXRJbnB1dC5lbWl0KCk7XG4gICAgICAgIGlmIChjYWxjaXRlSW5wdXRJbnB1dEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5wcmV2aW91c1ZhbHVlO1xuICAgICAgICAgIHRoaXMubG9jYWxpemVkVmFsdWUgPVxuICAgICAgICAgICAgdGhpcy50eXBlID09PSBcIm51bWJlclwiXG4gICAgICAgICAgICAgID8gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmxvY2FsaXplKHRoaXMucHJldmlvdXNWYWx1ZSlcbiAgICAgICAgICAgICAgOiB0aGlzLnByZXZpb3VzVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tbWl0dGluZykge1xuICAgICAgICAgIHRoaXMuZW1pdENoYW5nZUlmVXNlck1vZGlmaWVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaW5wdXRLZXlVcEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLm51ZGdlTnVtYmVyVmFsdWVJbnRlcnZhbElkKTtcbiAgICB9O1xuICAgIHRoaXMuYWxpZ25tZW50ID0gXCJzdGFydFwiO1xuICAgIHRoaXMuYXV0b2ZvY3VzID0gZmFsc2U7XG4gICAgdGhpcy5jbGVhcmFibGUgPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb3JtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZ3JvdXBTZXBhcmF0b3IgPSBmYWxzZTtcbiAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xuICAgIHRoaXMuaWNvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25GbGlwUnRsID0gZmFsc2U7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvY2FsZUZvcm1hdCA9IGZhbHNlO1xuICAgIHRoaXMubWF4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWluID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWF4TGVuZ3RoID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWluTGVuZ3RoID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm51bWJlckJ1dHRvblR5cGUgPSBcInZlcnRpY2FsXCI7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnByZWZpeFRleHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWFkT25seSA9IGZhbHNlO1xuICAgIHRoaXMucmVxdWlyZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5zdGF0dXMgPSBcImlkbGVcIjtcbiAgICB0aGlzLnN0ZXAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hdXRvY29tcGxldGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYXR0ZXJuID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWNjZXB0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubXVsdGlwbGUgPSBmYWxzZTtcbiAgICB0aGlzLmlucHV0TW9kZSA9IFwidGV4dFwiO1xuICAgIHRoaXMuZW50ZXJLZXlIaW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3VmZml4VGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVkaXRpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gICAgdGhpcy5maWxlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gICAgdGhpcy5sb2NhbGl6ZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNsb3R0ZWRBY3Rpb25FbERpc2FibGVkSW50ZXJuYWxseSA9IGZhbHNlO1xuICB9XG4gIGRpc2FibGVkV2F0Y2hlcigpIHtcbiAgICB0aGlzLnNldERpc2FibGVkQWN0aW9uKCk7XG4gIH1cbiAgLyoqIHdhdGNoZXIgdG8gdXBkYXRlIG51bWJlci10by1zdHJpbmcgZm9yIG1heCAqL1xuICBtYXhXYXRjaGVyKCkge1xuICAgIHRoaXMubWF4U3RyaW5nID0gdGhpcy5tYXg/LnRvU3RyaW5nKCkgfHwgbnVsbDtcbiAgfVxuICAvKiogd2F0Y2hlciB0byB1cGRhdGUgbnVtYmVyLXRvLXN0cmluZyBmb3IgbWluICovXG4gIG1pbldhdGNoZXIoKSB7XG4gICAgdGhpcy5taW5TdHJpbmcgPSB0aGlzLm1pbj8udG9TdHJpbmcoKSB8fCBudWxsO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICB2YWx1ZVdhdGNoZXIobmV3VmFsdWUsIHByZXZpb3VzVmFsdWUpIHtcbiAgICBpZiAoIXRoaXMudXNlckNoYW5nZWRWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh7XG4gICAgICAgIG9yaWdpbjogXCJkaXJlY3RcIixcbiAgICAgICAgcHJldmlvdXNWYWx1ZSxcbiAgICAgICAgdmFsdWU6IG5ld1ZhbHVlID09IG51bGwgfHwgbmV3VmFsdWUgPT0gXCJcIlxuICAgICAgICAgID8gXCJcIlxuICAgICAgICAgIDogdGhpcy50eXBlID09PSBcIm51bWJlclwiXG4gICAgICAgICAgICA/IGlzVmFsaWROdW1iZXIobmV3VmFsdWUpXG4gICAgICAgICAgICAgID8gbmV3VmFsdWVcbiAgICAgICAgICAgICAgOiB0aGlzLnByZXZpb3VzVmFsdWUgfHwgXCJcIlxuICAgICAgICAgICAgOiBuZXdWYWx1ZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy53YXJuQWJvdXRJbnZhbGlkTnVtYmVyVmFsdWUobmV3VmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLnVzZXJDaGFuZ2VkVmFsdWUgPSBmYWxzZTtcbiAgfVxuICB1cGRhdGVSZXF1ZXN0ZWRJY29uKCkge1xuICAgIHRoaXMucmVxdWVzdGVkSWNvbiA9IHNldFJlcXVlc3RlZEljb24oSU5QVVRfVFlQRV9JQ09OUywgdGhpcy5pY29uLCB0aGlzLnR5cGUpO1xuICB9XG4gIGdldCBpc0NsZWFyYWJsZSgpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNUZXh0YXJlYSAmJiAodGhpcy5jbGVhcmFibGUgfHwgdGhpcy50eXBlID09PSBcInNlYXJjaFwiKSAmJiB0aGlzLnZhbHVlPy5sZW5ndGggPiAwO1xuICB9XG4gIGdldCBpc1RleHRhcmVhKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWxUeXBlID09PSBcInRleHRhcmVhXCI7XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5pbmxpbmVFZGl0YWJsZUVsID0gdGhpcy5lbC5jbG9zZXN0KFwiY2FsY2l0ZS1pbmxpbmUtZWRpdGFibGVcIik7XG4gICAgaWYgKHRoaXMuaW5saW5lRWRpdGFibGVFbCkge1xuICAgICAgdGhpcy5lZGl0aW5nRW5hYmxlZCA9IHRoaXMuaW5saW5lRWRpdGFibGVFbC5lZGl0aW5nRW5hYmxlZCB8fCBmYWxzZTtcbiAgICB9XG4gICAgY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGNvbm5lY3RGb3JtKHRoaXMpO1xuICAgIHRoaXMuc2V0UHJldmlvdXNFbWl0dGVkVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5zZXRQcmV2aW91c1ZhbHVlKHRoaXMudmFsdWUpO1xuICAgIGlmICh0aGlzLnR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHRoaXMud2FybkFib3V0SW52YWxpZE51bWJlclZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5zZXRWYWx1ZSh7XG4gICAgICAgIG9yaWdpbjogXCJjb25uZWN0ZWRcIixcbiAgICAgICAgdmFsdWU6IGlzVmFsaWROdW1iZXIodGhpcy52YWx1ZSkgPyB0aGlzLnZhbHVlIDogXCJcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/Lm9ic2VydmUodGhpcy5lbCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgdGhpcy5zZXREaXNhYmxlZEFjdGlvbigpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNhbGNpdGVJbnRlcm5hbEhpZGRlbklucHV0Q2hhbmdlXCIsIHRoaXMuaGlkZGVuSW5wdXRDaGFuZ2VIYW5kbGVyKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgZGlzY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RGb3JtKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNhbGNpdGVJbnRlcm5hbEhpZGRlbklucHV0Q2hhbmdlXCIsIHRoaXMuaGlkZGVuSW5wdXRDaGFuZ2VIYW5kbGVyKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIHRoaXMuY2hpbGRFbFR5cGUgPSB0aGlzLnR5cGUgPT09IFwidGV4dGFyZWFcIiA/IFwidGV4dGFyZWFcIiA6IFwiaW5wdXRcIjtcbiAgICB0aGlzLm1heFN0cmluZyA9IHRoaXMubWF4Py50b1N0cmluZygpO1xuICAgIHRoaXMubWluU3RyaW5nID0gdGhpcy5taW4/LnRvU3RyaW5nKCk7XG4gICAgdGhpcy5yZXF1ZXN0ZWRJY29uID0gc2V0UmVxdWVzdGVkSWNvbihJTlBVVF9UWVBFX0lDT05TLCB0aGlzLmljb24sIHRoaXMudHlwZSk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnRTaG91bGRVcGRhdGUobmV3VmFsdWUsIG9sZFZhbHVlLCBwcm9wZXJ0eSkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09IFwibnVtYmVyXCIgJiYgcHJvcGVydHkgPT09IFwidmFsdWVcIiAmJiBuZXdWYWx1ZSAmJiAhaXNWYWxpZE51bWJlcihuZXdWYWx1ZSkpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgICBvcmlnaW46IFwicmVzZXRcIixcbiAgICAgICAgdmFsdWU6IG9sZFZhbHVlLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRGb2N1c2FibGUodGhpcyk7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgdGhpcy5jaGlsZE51bWJlckVsPy5mb2N1cygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2hpbGRFbD8uZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgLyoqIFNlbGVjdHMgdGhlIHRleHQgb2YgdGhlIGNvbXBvbmVudCdzIGB2YWx1ZWAuICovXG4gIGFzeW5jIHNlbGVjdFRleHQoKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgdGhpcy5jaGlsZE51bWJlckVsPy5zZWxlY3QoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNoaWxkRWw/LnNlbGVjdCgpO1xuICAgIH1cbiAgfVxuICBvbkxhYmVsQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRGb2N1cygpO1xuICB9XG4gIGluY3JlbWVudE9yRGVjcmVtZW50TnVtYmVyVmFsdWUoZGlyZWN0aW9uLCBpbnB1dE1heCwgaW5wdXRNaW4sIG5hdGl2ZUV2ZW50KSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcztcbiAgICBjb25zdCBhZGp1c3RtZW50ID0gZGlyZWN0aW9uID09PSBcInVwXCIgPyAxIDogLTE7XG4gICAgY29uc3QgaW5wdXRTdGVwID0gdGhpcy5zdGVwID09PSBcImFueVwiID8gMSA6IE1hdGguYWJzKHRoaXMuc3RlcCB8fCAxKTtcbiAgICBjb25zdCBpbnB1dFZhbCA9IG5ldyBCaWdEZWNpbWFsKHZhbHVlICE9PSBcIlwiID8gdmFsdWUgOiBcIjBcIik7XG4gICAgY29uc3QgbnVkZ2VkVmFsdWUgPSBpbnB1dFZhbC5hZGQoYCR7aW5wdXRTdGVwICogYWRqdXN0bWVudH1gKTtcbiAgICBjb25zdCBudWRnZWRWYWx1ZUJlbG93SW5wdXRNaW4gPSAoKSA9PiB0eXBlb2YgaW5wdXRNaW4gPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICFpc05hTihpbnB1dE1pbikgJiZcbiAgICAgIG51ZGdlZFZhbHVlLnN1YnRyYWN0KGAke2lucHV0TWlufWApLmlzTmVnYXRpdmU7XG4gICAgY29uc3QgbnVkZ2VkVmFsdWVBYm92ZUlucHV0TWF4ID0gKCkgPT4gdHlwZW9mIGlucHV0TWF4ID09PSBcIm51bWJlclwiICYmXG4gICAgICAhaXNOYU4oaW5wdXRNYXgpICYmXG4gICAgICAhbnVkZ2VkVmFsdWUuc3VidHJhY3QoYCR7aW5wdXRNYXh9YCkuaXNOZWdhdGl2ZTtcbiAgICBjb25zdCBmaW5hbFZhbHVlID0gbnVkZ2VkVmFsdWVCZWxvd0lucHV0TWluKClcbiAgICAgID8gYCR7aW5wdXRNaW59YFxuICAgICAgOiBudWRnZWRWYWx1ZUFib3ZlSW5wdXRNYXgoKVxuICAgICAgICA/IGAke2lucHV0TWF4fWBcbiAgICAgICAgOiBudWRnZWRWYWx1ZS50b1N0cmluZygpO1xuICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgY29tbWl0dGluZzogdHJ1ZSxcbiAgICAgIG5hdGl2ZUV2ZW50LFxuICAgICAgb3JpZ2luOiBcInVzZXJcIixcbiAgICAgIHZhbHVlOiBmaW5hbFZhbHVlLFxuICAgIH0pO1xuICB9XG4gIG9uRm9ybVJlc2V0KCkge1xuICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgb3JpZ2luOiBcInJlc2V0XCIsXG4gICAgICB2YWx1ZTogdGhpcy5kZWZhdWx0VmFsdWUsXG4gICAgfSk7XG4gIH1cbiAgc3luY0hpZGRlbkZvcm1JbnB1dChpbnB1dCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcztcbiAgICBpbnB1dC50eXBlID0gdHlwZTtcbiAgICBpZiAodHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgaW5wdXQubWluID0gdGhpcy5taW4/LnRvU3RyaW5nKDEwKSA/PyBcIlwiO1xuICAgICAgaW5wdXQubWF4ID0gdGhpcy5tYXg/LnRvU3RyaW5nKDEwKSA/PyBcIlwiO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSBcInRleHRcIikge1xuICAgICAgaWYgKHRoaXMubWluTGVuZ3RoICE9IG51bGwpIHtcbiAgICAgICAgaW5wdXQubWluTGVuZ3RoID0gdGhpcy5taW5MZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5tYXhMZW5ndGggIT0gbnVsbCkge1xuICAgICAgICBpbnB1dC5tYXhMZW5ndGggPSB0aGlzLm1heExlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2V0RGlzYWJsZWRBY3Rpb24oKSB7XG4gICAgY29uc3Qgc2xvdHRlZEFjdGlvbkVsID0gZ2V0U2xvdHRlZCh0aGlzLmVsLCBcImFjdGlvblwiKTtcbiAgICBpZiAoIXNsb3R0ZWRBY3Rpb25FbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgaWYgKHNsb3R0ZWRBY3Rpb25FbC5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2xvdHRlZEFjdGlvbkVsRGlzYWJsZWRJbnRlcm5hbGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHNsb3R0ZWRBY3Rpb25FbC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5zbG90dGVkQWN0aW9uRWxEaXNhYmxlZEludGVybmFsbHkpIHtcbiAgICAgIHNsb3R0ZWRBY3Rpb25FbC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgIHRoaXMuc2xvdHRlZEFjdGlvbkVsRGlzYWJsZWRJbnRlcm5hbGx5ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIiA/IChpc1ZhbGlkTnVtYmVyKHZhbHVlKSA/IHZhbHVlIDogXCJcIikgOiB2YWx1ZTtcbiAgfVxuICB3YXJuQWJvdXRJbnZhbGlkTnVtYmVyVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSBcIm51bWJlclwiICYmIHZhbHVlICYmICFpc1ZhbGlkTnVtYmVyKHZhbHVlKSkge1xuICAgICAgY29uc29sZS53YXJuKGBUaGUgc3BlY2lmaWVkIHZhbHVlIFwiJHt2YWx1ZX1cIiBjYW5ub3QgYmUgcGFyc2VkLCBvciBpcyBvdXQgb2YgcmFuZ2UuYCk7XG4gICAgfVxuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGlyID0gZ2V0RWxlbWVudERpcih0aGlzLmVsKTtcbiAgICBjb25zdCBsb2FkZXIgPSAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MubG9hZGVyIH0sIGgoXCJjYWxjaXRlLXByb2dyZXNzXCIsIHsgbGFiZWw6IHRoaXMubWVzc2FnZXMubG9hZGluZywgdHlwZTogXCJpbmRldGVybWluYXRlXCIgfSkpKTtcbiAgICBjb25zdCBpbnB1dENsZWFyQnV0dG9uID0gKGgoXCJidXR0b25cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5jbGVhciwgY2xhc3M6IENTUy5jbGVhckJ1dHRvbiwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSwgb25DbGljazogdGhpcy5jbGVhcklucHV0VmFsdWUsIHRhYkluZGV4OiAtMSwgdHlwZTogXCJidXR0b25cIiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJ4XCIsIHNjYWxlOiBnZXRJY29uU2NhbGUodGhpcy5zY2FsZSkgfSkpKTtcbiAgICBjb25zdCBpY29uRWwgPSAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiBDU1MuaW5wdXRJY29uLCBmbGlwUnRsOiB0aGlzLmljb25GbGlwUnRsLCBpY29uOiB0aGlzLnJlcXVlc3RlZEljb24sIHNjYWxlOiBnZXRJY29uU2NhbGUodGhpcy5zY2FsZSkgfSkpO1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbE51bWJlckJ1dHRvbiA9IHRoaXMubnVtYmVyQnV0dG9uVHlwZSA9PT0gXCJob3Jpem9udGFsXCI7XG4gICAgY29uc3QgbnVtYmVyQnV0dG9uc0hvcml6b250YWxVcCA9IChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5udW1iZXJCdXR0b25JdGVtXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5idXR0b25JdGVtSG9yaXpvbnRhbF06IGlzSG9yaXpvbnRhbE51bWJlckJ1dHRvbixcbiAgICAgIH0sIFwiZGF0YS1hZGp1c3RtZW50XCI6IFwidXBcIiwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSwgb25Qb2ludGVyRG93bjogdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyRG93bkhhbmRsZXIsIG9uUG9pbnRlck91dDogdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyVXBBbmRPdXRIYW5kbGVyLCBvblBvaW50ZXJVcDogdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyVXBBbmRPdXRIYW5kbGVyLCB0YWJJbmRleDogLTEsIHR5cGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwiY2hldnJvbi11cFwiLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKSk7XG4gICAgY29uc3QgbnVtYmVyQnV0dG9uc0hvcml6b250YWxEb3duID0gKGgoXCJidXR0b25cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczoge1xuICAgICAgICBbQ1NTLm51bWJlckJ1dHRvbkl0ZW1dOiB0cnVlLFxuICAgICAgICBbQ1NTLmJ1dHRvbkl0ZW1Ib3Jpem9udGFsXTogaXNIb3Jpem9udGFsTnVtYmVyQnV0dG9uLFxuICAgICAgfSwgXCJkYXRhLWFkanVzdG1lbnRcIjogXCJkb3duXCIsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHksIG9uUG9pbnRlckRvd246IHRoaXMubnVtYmVyQnV0dG9uUG9pbnRlckRvd25IYW5kbGVyLCBvblBvaW50ZXJPdXQ6IHRoaXMubnVtYmVyQnV0dG9uUG9pbnRlclVwQW5kT3V0SGFuZGxlciwgb25Qb2ludGVyVXA6IHRoaXMubnVtYmVyQnV0dG9uUG9pbnRlclVwQW5kT3V0SGFuZGxlciwgdGFiSW5kZXg6IC0xLCB0eXBlOiBcImJ1dHRvblwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBcImNoZXZyb24tZG93blwiLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKSk7XG4gICAgY29uc3QgbnVtYmVyQnV0dG9uc1ZlcnRpY2FsID0gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLm51bWJlckJ1dHRvbldyYXBwZXIgfSwgbnVtYmVyQnV0dG9uc0hvcml6b250YWxVcCwgbnVtYmVyQnV0dG9uc0hvcml6b250YWxEb3duKSk7XG4gICAgY29uc3QgcHJlZml4VGV4dCA9IGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLnByZWZpeCB9LCB0aGlzLnByZWZpeFRleHQpO1xuICAgIGNvbnN0IHN1ZmZpeFRleHQgPSBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5zdWZmaXggfSwgdGhpcy5zdWZmaXhUZXh0KTtcbiAgICBjb25zdCBsb2NhbGVOdW1iZXJJbnB1dCA9IHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIiA/IChoKFwiaW5wdXRcIiwgeyBhY2NlcHQ6IHRoaXMuYWNjZXB0LCBcImFyaWEtbGFiZWxcIjogZ2V0TGFiZWxUZXh0KHRoaXMpLCBhdXRvY29tcGxldGU6IHRoaXMuYXV0b2NvbXBsZXRlLCBhdXRvZm9jdXM6IHRoaXMuYXV0b2ZvY3VzID8gdHJ1ZSA6IG51bGwsIGRlZmF1bHRWYWx1ZTogdGhpcy5kZWZhdWx0VmFsdWUsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkID8gdHJ1ZSA6IG51bGwsIGVudGVyS2V5SGludDogdGhpcy5lbnRlcktleUhpbnQsIGlucHV0TW9kZTogdGhpcy5pbnB1dE1vZGUsIGtleTogXCJsb2NhbGl6ZWQtaW5wdXRcIiwgbWF4TGVuZ3RoOiB0aGlzLm1heExlbmd0aCwgbWluTGVuZ3RoOiB0aGlzLm1pbkxlbmd0aCwgbXVsdGlwbGU6IHRoaXMubXVsdGlwbGUsIG5hbWU6IHVuZGVmaW5lZCwgb25CbHVyOiB0aGlzLmlucHV0Qmx1ckhhbmRsZXIsIG9uRm9jdXM6IHRoaXMuaW5wdXRGb2N1c0hhbmRsZXIsIG9uSW5wdXQ6IHRoaXMuaW5wdXROdW1iZXJJbnB1dEhhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5pbnB1dE51bWJlcktleURvd25IYW5kbGVyLCBvbktleVVwOiB0aGlzLmlucHV0S2V5VXBIYW5kbGVyLCBwYXR0ZXJuOiB0aGlzLnBhdHRlcm4sIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyIHx8IFwiXCIsIHJlYWRPbmx5OiB0aGlzLnJlYWRPbmx5LCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IHRoaXMubG9jYWxpemVkVmFsdWUsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiB0aGlzLnNldENoaWxkTnVtYmVyRWxSZWYgfSkpIDogbnVsbDtcbiAgICBjb25zdCBjaGlsZEVsID0gdGhpcy50eXBlICE9PSBcIm51bWJlclwiXG4gICAgICA/IFtcbiAgICAgICAgaCh0aGlzLmNoaWxkRWxUeXBlLCB7IGFjY2VwdDogdGhpcy5hY2NlcHQsIFwiYXJpYS1sYWJlbFwiOiBnZXRMYWJlbFRleHQodGhpcyksIGF1dG9jb21wbGV0ZTogdGhpcy5hdXRvY29tcGxldGUsIGF1dG9mb2N1czogdGhpcy5hdXRvZm9jdXMgPyB0cnVlIDogbnVsbCwgY2xhc3M6IHtcbiAgICAgICAgICAgIFtDU1MuZWRpdGluZ0VuYWJsZWRdOiB0aGlzLmVkaXRpbmdFbmFibGVkLFxuICAgICAgICAgICAgW0NTUy5pbmxpbmVDaGlsZF06ICEhdGhpcy5pbmxpbmVFZGl0YWJsZUVsLFxuICAgICAgICAgIH0sIGRlZmF1bHRWYWx1ZTogdGhpcy5kZWZhdWx0VmFsdWUsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkID8gdHJ1ZSA6IG51bGwsIGVudGVyS2V5SGludDogdGhpcy5lbnRlcktleUhpbnQsIGlucHV0TW9kZTogdGhpcy5pbnB1dE1vZGUsIG1heDogdGhpcy5tYXhTdHJpbmcsIG1heExlbmd0aDogdGhpcy5tYXhMZW5ndGgsIG1pbjogdGhpcy5taW5TdHJpbmcsIG1pbkxlbmd0aDogdGhpcy5taW5MZW5ndGgsIG11bHRpcGxlOiB0aGlzLm11bHRpcGxlLCBuYW1lOiB0aGlzLm5hbWUsIG9uQmx1cjogdGhpcy5pbnB1dEJsdXJIYW5kbGVyLCBvbkNoYW5nZTogdGhpcy5pbnB1dENoYW5nZUhhbmRsZXIsIG9uRm9jdXM6IHRoaXMuaW5wdXRGb2N1c0hhbmRsZXIsIG9uSW5wdXQ6IHRoaXMuaW5wdXRJbnB1dEhhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5pbnB1dEtleURvd25IYW5kbGVyLCBvbktleVVwOiB0aGlzLmlucHV0S2V5VXBIYW5kbGVyLCBwYXR0ZXJuOiB0aGlzLnBhdHRlcm4sIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyIHx8IFwiXCIsIHJlYWRPbmx5OiB0aGlzLnJlYWRPbmx5LCByZXF1aXJlZDogdGhpcy5yZXF1aXJlZCA/IHRydWUgOiBudWxsLCBzdGVwOiB0aGlzLnN0ZXAsIHRhYkluZGV4OiB0aGlzLmRpc2FibGVkIHx8ICh0aGlzLmlubGluZUVkaXRhYmxlRWwgJiYgIXRoaXMuZWRpdGluZ0VuYWJsZWQpID8gLTEgOiBudWxsLCB0eXBlOiB0aGlzLnR5cGUsIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICAgICAgcmVmOiB0aGlzLnNldENoaWxkRWxSZWYgfSksXG4gICAgICAgIHRoaXMuaXNUZXh0YXJlYSA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5yZXNpemVJY29uV3JhcHBlciB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJjaGV2cm9uLWRvd25cIiwgc2NhbGU6IGdldEljb25TY2FsZSh0aGlzLnNjYWxlKSB9KSkpIDogbnVsbCxcbiAgICAgIF1cbiAgICAgIDogbnVsbDtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNsaWNrOiB0aGlzLmNsaWNrSGFuZGxlciwgb25LZXlEb3duOiB0aGlzLmtleURvd25IYW5kbGVyIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTLmlucHV0V3JhcHBlcl06IHRydWUsIFtDU1NfVVRJTElUWS5ydGxdOiBkaXIgPT09IFwicnRsXCIgfSB9LCB0aGlzLnR5cGUgPT09IFwibnVtYmVyXCIgJiYgdGhpcy5udW1iZXJCdXR0b25UeXBlID09PSBcImhvcml6b250YWxcIiAmJiAhdGhpcy5yZWFkT25seVxuICAgICAgPyBudW1iZXJCdXR0b25zSG9yaXpvbnRhbERvd25cbiAgICAgIDogbnVsbCwgdGhpcy5wcmVmaXhUZXh0ID8gcHJlZml4VGV4dCA6IG51bGwsIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLndyYXBwZXIgfSwgbG9jYWxlTnVtYmVySW5wdXQsIGNoaWxkRWwsIHRoaXMuaXNDbGVhcmFibGUgPyBpbnB1dENsZWFyQnV0dG9uIDogbnVsbCwgdGhpcy5yZXF1ZXN0ZWRJY29uID8gaWNvbkVsIDogbnVsbCwgdGhpcy5sb2FkaW5nID8gbG9hZGVyIDogbnVsbCksIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmFjdGlvbldyYXBwZXIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5hY3Rpb24gfSkpLCB0aGlzLnR5cGUgPT09IFwibnVtYmVyXCIgJiYgdGhpcy5udW1iZXJCdXR0b25UeXBlID09PSBcInZlcnRpY2FsXCIgJiYgIXRoaXMucmVhZE9ubHlcbiAgICAgID8gbnVtYmVyQnV0dG9uc1ZlcnRpY2FsXG4gICAgICA6IG51bGwsIHRoaXMuc3VmZml4VGV4dCA/IHN1ZmZpeFRleHQgOiBudWxsLCB0aGlzLnR5cGUgPT09IFwibnVtYmVyXCIgJiYgdGhpcy5udW1iZXJCdXR0b25UeXBlID09PSBcImhvcml6b250YWxcIiAmJiAhdGhpcy5yZWFkT25seVxuICAgICAgPyBudW1iZXJCdXR0b25zSG9yaXpvbnRhbFVwXG4gICAgICA6IG51bGwsIGgoSGlkZGVuRm9ybUlucHV0U2xvdCwgeyBjb21wb25lbnQ6IHRoaXMgfSkpKSk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkV2F0Y2hlclwiXSxcbiAgICBcIm1heFwiOiBbXCJtYXhXYXRjaGVyXCJdLFxuICAgIFwibWluXCI6IFtcIm1pbldhdGNoZXJcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJ2YWx1ZVwiOiBbXCJ2YWx1ZVdhdGNoZXJcIl0sXG4gICAgXCJpY29uXCI6IFtcInVwZGF0ZVJlcXVlc3RlZEljb25cIl0sXG4gICAgXCJ0eXBlXCI6IFtcInVwZGF0ZVJlcXVlc3RlZEljb25cIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIGlucHV0Q3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWlucHV0XCIsIHtcbiAgICBcImFsaWdubWVudFwiOiBbNTEzXSxcbiAgICBcImF1dG9mb2N1c1wiOiBbNTE2XSxcbiAgICBcImNsZWFyYWJsZVwiOiBbNTE2XSxcbiAgICBcImRpc2FibGVkXCI6IFs1MTZdLFxuICAgIFwiZm9ybVwiOiBbNTEzXSxcbiAgICBcImdyb3VwU2VwYXJhdG9yXCI6IFs1MTYsIFwiZ3JvdXAtc2VwYXJhdG9yXCJdLFxuICAgIFwiaGlkZGVuXCI6IFs1MTZdLFxuICAgIFwiaWNvblwiOiBbNTIwXSxcbiAgICBcImljb25GbGlwUnRsXCI6IFs1MTYsIFwiaWNvbi1mbGlwLXJ0bFwiXSxcbiAgICBcImxhYmVsXCI6IFsxXSxcbiAgICBcImxvYWRpbmdcIjogWzUxNl0sXG4gICAgXCJudW1iZXJpbmdTeXN0ZW1cIjogWzUxMywgXCJudW1iZXJpbmctc3lzdGVtXCJdLFxuICAgIFwibG9jYWxlRm9ybWF0XCI6IFs0LCBcImxvY2FsZS1mb3JtYXRcIl0sXG4gICAgXCJtYXhcIjogWzUxNF0sXG4gICAgXCJtaW5cIjogWzUxNF0sXG4gICAgXCJtYXhMZW5ndGhcIjogWzUxNCwgXCJtYXgtbGVuZ3RoXCJdLFxuICAgIFwibWluTGVuZ3RoXCI6IFs1MTQsIFwibWluLWxlbmd0aFwiXSxcbiAgICBcIm5hbWVcIjogWzUxM10sXG4gICAgXCJudW1iZXJCdXR0b25UeXBlXCI6IFs1MTMsIFwibnVtYmVyLWJ1dHRvbi10eXBlXCJdLFxuICAgIFwicGxhY2Vob2xkZXJcIjogWzFdLFxuICAgIFwicHJlZml4VGV4dFwiOiBbMSwgXCJwcmVmaXgtdGV4dFwiXSxcbiAgICBcInJlYWRPbmx5XCI6IFs1MTYsIFwicmVhZC1vbmx5XCJdLFxuICAgIFwicmVxdWlyZWRcIjogWzUxNl0sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcInN0YXR1c1wiOiBbNTEzXSxcbiAgICBcInN0ZXBcIjogWzUyMF0sXG4gICAgXCJhdXRvY29tcGxldGVcIjogWzFdLFxuICAgIFwicGF0dGVyblwiOiBbMV0sXG4gICAgXCJhY2NlcHRcIjogWzFdLFxuICAgIFwibXVsdGlwbGVcIjogWzRdLFxuICAgIFwiaW5wdXRNb2RlXCI6IFsxLCBcImlucHV0LW1vZGVcIl0sXG4gICAgXCJlbnRlcktleUhpbnRcIjogWzEsIFwiZW50ZXIta2V5LWhpbnRcIl0sXG4gICAgXCJzdWZmaXhUZXh0XCI6IFsxLCBcInN1ZmZpeC10ZXh0XCJdLFxuICAgIFwiZWRpdGluZ0VuYWJsZWRcIjogWzE1NDAsIFwiZWRpdGluZy1lbmFibGVkXCJdLFxuICAgIFwidHlwZVwiOiBbNTEzXSxcbiAgICBcInZhbHVlXCI6IFsxMDI1XSxcbiAgICBcImZpbGVzXCI6IFsxNl0sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFsxMDQwXSxcbiAgICBcImRlZmF1bHRNZXNzYWdlc1wiOiBbMzJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFszMl0sXG4gICAgXCJsb2NhbGl6ZWRWYWx1ZVwiOiBbMzJdLFxuICAgIFwic2xvdHRlZEFjdGlvbkVsRGlzYWJsZWRJbnRlcm5hbGx5XCI6IFszMl0sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdLFxuICAgIFwic2VsZWN0VGV4dFwiOiBbNjRdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtaW5wdXRcIiwgXCJjYWxjaXRlLWljb25cIiwgXCJjYWxjaXRlLXByb2dyZXNzXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWlucHV0XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgSW5wdXQpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1wcm9ncmVzc1wiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgSW5wdXQgYXMgSSwgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRFbGVtZW50RGlyLCBDIGFzIENTU19VVElMSVRZIH0gZnJvbSAnLi9kb20uanMnO1xuXG5jb25zdCBwcm9ncmVzc0NzcyA9IFwiOmhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztpbmxpbmUtc2l6ZToxMDAlfS50cmFjaywuYmFye3Bvc2l0aW9uOmFic29sdXRlO2luc2V0LWJsb2NrLXN0YXJ0OjBweDtibG9jay1zaXplOjJweH0udHJhY2t7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KTtpbmxpbmUtc2l6ZToxMDAlO292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfS5iYXJ7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfUBtZWRpYSAoZm9yY2VkLWNvbG9yczogYWN0aXZlKXsudHJhY2t7YmFja2dyb3VuZC1jb2xvcjpoaWdobGlnaHRUZXh0fS5iYXJ7YmFja2dyb3VuZC1jb2xvcjpsaW5rVGV4dH19LmluZGV0ZXJtaW5hdGV7aW5saW5lLXNpemU6MjAlO2FuaW1hdGlvbjpsb29waW5nLXByb2dyZXNzLWJhci1hbmkgY2FsYyh2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSAqIDExIC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKSBsaW5lYXIgaW5maW5pdGV9LmluZGV0ZXJtaW5hdGUuY2FsY2l0ZS0tcnRse2FuaW1hdGlvbi1uYW1lOmxvb3BpbmctcHJvZ3Jlc3MtYmFyLWFuaS1ydGx9LnJldmVyc2Vke2FuaW1hdGlvbi1kaXJlY3Rpb246cmV2ZXJzZX0udGV4dHtwYWRkaW5nLWlubGluZTowcHg7cGFkZGluZy1ibG9jazoxcmVtIDBweDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW07Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX1Aa2V5ZnJhbWVzIGxvb3BpbmctcHJvZ3Jlc3MtYmFyLWFuaXswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApfTUwJXtpbmxpbmUtc2l6ZTo0MCV9MTAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNjAwJSwgMCwgMCl9fUBrZXlmcmFtZXMgbG9vcGluZy1wcm9ncmVzcy1iYXItYW5pLXJ0bHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwgMCwgMCl9NTAle2lubGluZS1zaXplOjQwJX0xMDAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNjAwJSwgMCwgMCl9fTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBQcm9ncmVzcyA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy50eXBlID0gXCJkZXRlcm1pbmF0ZVwiO1xuICAgIHRoaXMudmFsdWUgPSAwO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50ZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmV2ZXJzZWQgPSBmYWxzZTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXNEZXRlcm1pbmF0ZSA9IHRoaXMudHlwZSA9PT0gXCJkZXRlcm1pbmF0ZVwiO1xuICAgIGNvbnN0IGJhclN0eWxlcyA9IGlzRGV0ZXJtaW5hdGUgPyB7IHdpZHRoOiBgJHt0aGlzLnZhbHVlICogMTAwfSVgIH0gOiB7fTtcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKHRoaXMuZWwpO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLmxhYmVsIHx8IHRoaXMudGV4dCwgXCJhcmlhLXZhbHVlbWF4XCI6IDEsIFwiYXJpYS12YWx1ZW1pblwiOiAwLCBcImFyaWEtdmFsdWVub3dcIjogdGhpcy52YWx1ZSwgcm9sZTogXCJwcm9ncmVzc2JhclwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0cmFja1wiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBiYXI6IHRydWUsXG4gICAgICAgIGluZGV0ZXJtaW5hdGU6IHRoaXMudHlwZSA9PT0gXCJpbmRldGVybWluYXRlXCIsXG4gICAgICAgIFtDU1NfVVRJTElUWS5ydGxdOiBkaXIgPT09IFwicnRsXCIsXG4gICAgICAgIHJldmVyc2VkOiB0aGlzLnJldmVyc2VkLFxuICAgICAgfSwgc3R5bGU6IGJhclN0eWxlcyB9KSksIHRoaXMudGV4dCA/IGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0ZXh0XCIgfSwgdGhpcy50ZXh0KSA6IG51bGwpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBwcm9ncmVzc0NzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1wcm9ncmVzc1wiLCB7XG4gICAgXCJ0eXBlXCI6IFs1MTNdLFxuICAgIFwidmFsdWVcIjogWzJdLFxuICAgIFwibGFiZWxcIjogWzFdLFxuICAgIFwidGV4dFwiOiBbMV0sXG4gICAgXCJyZXZlcnNlZFwiOiBbNTE2XVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXByb2dyZXNzXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLXByb2dyZXNzXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgUHJvZ3Jlc3MpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IFByb2dyZXNzIGFzIFAsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9