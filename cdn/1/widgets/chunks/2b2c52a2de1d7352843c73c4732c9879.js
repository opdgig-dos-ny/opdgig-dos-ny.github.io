"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_input-text_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/input-text.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/input-text.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ InputText),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ "./node_modules/@esri/calcite-components/dist/components/form.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _label2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./label2.js */ "./node_modules/@esri/calcite-components/dist/components/label2.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./progress.js */ "./node_modules/@esri/calcite-components/dist/components/progress.js");
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
  wrapper: "element-wrapper",
  inputWrapper: "wrapper",
  actionWrapper: "action-wrapper",
  resizeIconWrapper: "resize-icon-wrapper",
};
const SLOTS = {
  action: "action",
};

const inputTextCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input{padding-inline-start:0.5rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 0.5rem)}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .prefix,:host([scale=s]) .suffix{padding-inline:0.5rem}:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input{padding-inline-start:0.75rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 0.75rem)}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .prefix,:host([scale=m]) .suffix{padding-inline:0.75rem}:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input{padding-inline-start:1rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 1rem)}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .prefix,:host([scale=l]) .suffix{padding-inline:1rem}:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;text-overflow:ellipsis;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}input:placeholder-shown{text-overflow:ellipsis}input{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}input::placeholder,input:-ms-input-placeholder,input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}input:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}input[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus{color:var(--calcite-ui-text-1)}calcite-icon{color:var(--calcite-ui-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([status=invalid]) input{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-app-z-index);display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}.inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.inline-child .editing-enabled{background-color:inherit}.inline-child:not(.editing-enabled){display:flex;cursor:pointer;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";

const InputText = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalInputTextFocus = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.createEvent)(this, "calciteInternalInputTextFocus", 7);
    this.calciteInternalInputTextBlur = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.createEvent)(this, "calciteInternalInputTextBlur", 7);
    this.calciteInputTextInput = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.createEvent)(this, "calciteInputTextInput", 7);
    this.calciteInputTextChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.createEvent)(this, "calciteInputTextChange", 7);
    this.previousValueOrigin = "initial";
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_6__.c)("mutation", () => this.setDisabledAction());
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
        this.clearInputTextValue(event);
        event.preventDefault();
      }
      if (event.key === "Enter" && !event.defaultPrevented) {
        if ((0,_form_js__WEBPACK_IMPORTED_MODULE_1__.s)(this)) {
          event.preventDefault();
        }
      }
    };
    this.clearInputTextValue = (nativeEvent) => {
      this.setValue({
        committing: true,
        nativeEvent,
        origin: "user",
        value: "",
      });
    };
    this.emitChangeIfUserModified = () => {
      if (this.previousValueOrigin === "user" && this.value !== this.previousEmittedValue) {
        this.calciteInputTextChange.emit();
        this.setPreviousEmittedValue(this.value);
      }
    };
    this.inputTextBlurHandler = () => {
      this.calciteInternalInputTextBlur.emit({
        element: this.childEl,
        value: this.value,
      });
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
    this.inputTextFocusHandler = () => {
      this.calciteInternalInputTextFocus.emit({
        element: this.childEl,
        value: this.value,
      });
    };
    this.inputTextInputHandler = (nativeEvent) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      this.setValue({
        nativeEvent,
        origin: "user",
        value: nativeEvent.target.value,
      });
    };
    this.inputTextKeyDownHandler = (event) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      if (event.key === "Enter") {
        this.emitChangeIfUserModified();
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
    this.setInputValue = (newInputValue) => {
      if (!this.childEl) {
        return;
      }
      this.childEl.value = newInputValue;
    };
    this.setPreviousEmittedValue = (value) => {
      this.previousEmittedValue = value;
    };
    this.setPreviousValue = (value) => {
      this.previousValue = value;
    };
    this.setValue = ({ committing = false, nativeEvent, origin, previousValue, value, }) => {
      this.setPreviousValue(previousValue ?? this.value);
      this.previousValueOrigin = origin;
      this.userChangedValue = origin === "user" && value !== this.value;
      this.value = value;
      if (origin === "direct") {
        this.setInputValue(value);
        this.setPreviousEmittedValue(value);
      }
      if (nativeEvent) {
        const calciteInputTextInputEvent = this.calciteInputTextInput.emit();
        if (calciteInputTextInputEvent.defaultPrevented) {
          this.value = this.previousValue;
        }
        else if (committing) {
          this.emitChangeIfUserModified();
        }
      }
    };
    this.alignment = "start";
    this.autofocus = false;
    this.clearable = false;
    this.disabled = false;
    this.form = undefined;
    this.hidden = false;
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.label = undefined;
    this.loading = false;
    this.maxLength = undefined;
    this.minLength = undefined;
    this.name = undefined;
    this.placeholder = undefined;
    this.prefixText = undefined;
    this.readOnly = false;
    this.required = false;
    this.scale = "m";
    this.status = "idle";
    this.autocomplete = undefined;
    this.inputMode = "text";
    this.enterKeyHint = undefined;
    this.pattern = undefined;
    this.suffixText = undefined;
    this.editingEnabled = false;
    this.value = "";
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
    this.slottedActionElDisabledInternally = false;
  }
  disabledWatcher() {
    this.setDisabledAction();
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  valueWatcher(newValue, previousValue) {
    if (!this.userChangedValue) {
      this.setValue({
        origin: "direct",
        previousValue,
        value: !newValue ? "" : newValue,
      });
    }
    this.userChangedValue = false;
  }
  updateRequestedIcon() {
    this.requestedIcon = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.h)({}, this.icon, "text");
  }
  get isClearable() {
    return this.clearable && this.value.length > 0;
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.u)(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    this.inlineEditableEl = this.el.closest("calcite-inline-editable");
    if (this.inlineEditableEl) {
      this.editingEnabled = this.inlineEditableEl.editingEnabled || false;
    }
    this.setPreviousEmittedValue(this.value);
    this.setPreviousValue(this.value);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    this.mutationObserver?.observe(this.el, { childList: true });
    this.setDisabledAction();
    this.el.addEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    this.mutationObserver?.disconnect();
    this.el.removeEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.a)(this);
    this.requestedIcon = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.h)({}, this.icon, "text");
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
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
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    this.childEl?.focus();
  }
  /** Selects the text of the component's `value`. */
  async selectText() {
    this.childEl?.select();
  }
  onLabelClick() {
    this.setFocus();
  }
  onFormReset() {
    this.setValue({
      origin: "reset",
      value: this.defaultValue,
    });
  }
  syncHiddenFormInput(input) {
    if (this.minLength != null) {
      input.minLength = this.minLength;
    }
    if (this.maxLength != null) {
      input.maxLength = this.maxLength;
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
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(this.el);
    const loader = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("div", { class: CSS.loader }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("calcite-progress", { label: this.messages.loading, type: "indeterminate" })));
    const inputClearButton = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("button", { "aria-label": this.messages.clear, class: CSS.clearButton, disabled: this.disabled || this.readOnly, onClick: this.clearInputTextValue, tabIndex: -1, type: "button" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("calcite-icon", { icon: "x", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_8__.g)(this.scale) })));
    const iconEl = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("calcite-icon", { class: CSS.inputIcon, flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_8__.g)(this.scale) }));
    const prefixText = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("div", { class: CSS.prefix }, this.prefixText);
    const suffixText = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("div", { class: CSS.suffix }, this.suffixText);
    const childEl = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("input", { "aria-label": (0,_label2_js__WEBPACK_IMPORTED_MODULE_3__.g)(this), autocomplete: this.autocomplete, autofocus: this.autofocus ? true : null, class: {
        [CSS.editingEnabled]: this.editingEnabled,
        [CSS.inlineChild]: !!this.inlineEditableEl,
      }, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.enterKeyHint, inputMode: this.inputMode, maxLength: this.maxLength, minLength: this.minLength, name: this.name, onBlur: this.inputTextBlurHandler, onFocus: this.inputTextFocusHandler, onInput: this.inputTextInputHandler, onKeyDown: this.inputTextKeyDownHandler, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readOnly, required: this.required ? true : null, tabIndex: this.disabled || (this.inlineEditableEl && !this.editingEnabled) ? -1 : null, type: "text", value: this.value,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setChildElRef }));
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.Host, { onClick: this.clickHandler, onKeyDown: this.keyDownHandler }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("div", { class: { [CSS.inputWrapper]: true, [_dom_js__WEBPACK_IMPORTED_MODULE_0__.C.rtl]: dir === "rtl" } }, this.prefixText ? prefixText : null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("div", { class: CSS.wrapper }, childEl, this.isClearable ? inputClearButton : null, this.requestedIcon ? iconEl : null, this.loading ? loader : null), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("div", { class: CSS.actionWrapper }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("slot", { name: SLOTS.action })), this.suffixText ? suffixText : null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)(_form_js__WEBPACK_IMPORTED_MODULE_1__.H, { component: this }))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "disabled": ["disabledWatcher"],
    "messageOverrides": ["onMessagesChange"],
    "value": ["valueWatcher"],
    "icon": ["updateRequestedIcon"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return inputTextCss; }
}, [1, "calcite-input-text", {
    "alignment": [513],
    "autofocus": [516],
    "clearable": [516],
    "disabled": [516],
    "form": [513],
    "hidden": [516],
    "icon": [520],
    "iconFlipRtl": [516, "icon-flip-rtl"],
    "label": [1],
    "loading": [516],
    "maxLength": [514, "max-length"],
    "minLength": [514, "min-length"],
    "name": [513],
    "placeholder": [1],
    "prefixText": [1, "prefix-text"],
    "readOnly": [516, "read-only"],
    "required": [516],
    "scale": [513],
    "status": [513],
    "autocomplete": [1],
    "inputMode": [1, "input-mode"],
    "enterKeyHint": [1, "enter-key-hint"],
    "pattern": [1],
    "suffixText": [1, "suffix-text"],
    "editingEnabled": [1540, "editing-enabled"],
    "value": [1025],
    "messages": [1040],
    "messageOverrides": [1040],
    "effectiveLocale": [32],
    "defaultMessages": [32],
    "slottedActionElDisabledInternally": [32],
    "setFocus": [64],
    "selectText": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-input-text", "calcite-icon", "calcite-progress"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-input-text":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, InputText);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_9__.d)();
      }
      break;
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        (0,_progress_js__WEBPACK_IMPORTED_MODULE_10__.d)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMmIyYzUyYTJkZTFkNzM1Mjg0M2M3M2M0NzMyYzk4NzkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytHO0FBQ1A7QUFDSztBQUNNO0FBQzFCO0FBQ3FCO0FBQ2hDO0FBQ3pCO0FBQzZEO0FBQy9EO0FBQ0k7QUFDSTs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGNBQWMsdUJBQXVCLDRCQUE0Qix1RkFBdUYseUVBQXlFLGtCQUFrQixzQ0FBc0MsaUJBQWlCLGtEQUFrRCxzQkFBc0IsdUdBQXVHLGtCQUFrQiwrQkFBK0Isc0JBQXNCLHVCQUF1Qix1QkFBdUIsNkJBQTZCLHdGQUF3Rix5RUFBeUUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsa0RBQWtELHVCQUF1Qix1R0FBdUcsZ0JBQWdCLCtCQUErQixvQkFBb0IscUJBQXFCLHVCQUF1QiwwQkFBMEIscUZBQXFGLHlFQUF5RSxtQkFBbUIscUNBQXFDLG9CQUFvQixrREFBa0Qsb0JBQW9CLHVHQUF1RyxtQkFBbUIsK0JBQStCLHVCQUF1Qix3QkFBd0IseUdBQXlHLFVBQVUsTUFBTSw0RUFBNEUsd0JBQXdCLGtCQUFrQixXQUFXLHNCQUFzQixhQUFhLG9CQUFvQixpQkFBaUIscUJBQXFCLFlBQVksdUJBQXVCLGtCQUFrQixnREFBZ0Qsb0JBQW9CLDhDQUE4QywrQkFBK0Isd0JBQXdCLHVCQUF1QixNQUFNLGlCQUFpQixtQkFBbUIsNENBQTRDLCtCQUErQiw0RUFBNEUsOENBQThDLCtCQUErQixZQUFZLHFDQUFxQywrQkFBK0IsZ0JBQWdCLDhDQUE4Qyw4Q0FBOEMsc0JBQXNCLCtCQUErQixhQUFhLCtCQUErQixNQUFNLDBCQUEwQixZQUFZLHlFQUF5RSxxUEFBcVAsOEJBQThCLHNDQUFzQyxvQ0FBb0MsMkNBQTJDLHFQQUFxUCx1QkFBdUIsMEJBQTBCLHVCQUF1QiwyQkFBMkIsdUJBQXVCLHdCQUF3Qiw2QkFBNkIsMEJBQTBCLDZCQUE2Qiw0QkFBNEIsNkJBQTZCLDRCQUE0QixpQkFBaUIsa0JBQWtCLFFBQVEsb0JBQW9CLFlBQVksbUJBQW1CLE1BQU0sb0JBQW9CLGtCQUFrQixtQ0FBbUMsY0FBYyw2RkFBNkYseURBQXlELGFBQWEsZUFBZSxnQkFBZ0IsY0FBYyx1QkFBdUIsUUFBUSxXQUFXLHNCQUFzQixhQUFhLG9CQUFvQixlQUFlLG1CQUFtQix1QkFBdUIsbUJBQW1CLGlCQUFpQixtQkFBbUIsNENBQTRDLGdEQUFnRCwwQkFBMEIsOEJBQThCLG9CQUFvQixnREFBZ0QsNkZBQTZGLGlDQUFpQywrQkFBK0IsNkZBQTZGLHFCQUFxQixnREFBZ0Qsa0NBQWtDLCtCQUErQixvQkFBb0IseUVBQXlFLHFQQUFxUCx1QkFBdUIsMkNBQTJDLFFBQVEsc0JBQXNCLGlCQUFpQixvQkFBb0Isa0JBQWtCLGNBQWMsZ0JBQWdCLFFBQVEsYUFBYSxnQkFBZ0Isc0JBQXNCLGFBQWEsZ0JBQWdCLG9CQUFvQix5QkFBeUIsaUJBQWlCLHFCQUFxQixtQkFBbUIseUJBQXlCLGlCQUFpQixtQkFBbUIsNENBQTRDLDhDQUE4Qyw4Q0FBOEMsY0FBYywrQkFBK0IsUUFBUSxRQUFRLDRCQUE0QixRQUFRLFFBQVEsOEJBQThCLCtCQUErQixpQkFBaUIsNkJBQTZCLGVBQWUsU0FBUyxrQkFBa0IsYUFBYSxtQkFBbUIsbUJBQW1CLCtCQUErQiwyQkFBMkIsbUNBQW1DLG9EQUFvRCxjQUFjLDZCQUE2Qiw2RkFBNkYsK0JBQStCLHlCQUF5QixvQ0FBb0MsYUFBYSxlQUFlLHlCQUF5Qix1QkFBdUIseUNBQXlDLG9CQUFvQixxQkFBcUIsd0JBQXdCLHFCQUFxQiw2QkFBNkIsbUJBQW1CLDBCQUEwQixtQ0FBbUMsc0JBQXNCLGdCQUFnQixhQUFhLFNBQVMsYUFBYTs7QUFFdG1PLGdDQUFnQywyRkFBa0IsZUFBZSxnRkFBVztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxvRkFBVztBQUNwRCx3Q0FBd0Msb0ZBQVc7QUFDbkQsaUNBQWlDLG9GQUFXO0FBQzVDLGtDQUFrQyxvRkFBVztBQUM3QztBQUNBLDRCQUE0QixnREFBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJDQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDBDQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdFQUFnRTtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBDQUFnQixHQUFHO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBDQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBa0I7QUFDdEIsSUFBSSw2Q0FBZ0I7QUFDcEIsSUFBSSwwQ0FBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZDQUFZO0FBQ2hCLElBQUksMkNBQVc7QUFDZiw4Q0FBOEMsaUJBQWlCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBcUI7QUFDekIsSUFBSSw2Q0FBZTtBQUNuQixJQUFJLDJDQUFjO0FBQ2xCLElBQUksNkNBQW1CO0FBQ3ZCLElBQUksMENBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBc0I7QUFDMUIseUJBQXlCLDBDQUFnQixHQUFHO0FBQzVDLFVBQVUsMENBQWE7QUFDdkI7QUFDQTtBQUNBLElBQUksK0NBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxJQUFJLGtEQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwrQ0FBa0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMENBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwQ0FBYTtBQUM3QixvQkFBb0IsMEVBQUMsVUFBVSxtQkFBbUIsRUFBRSwwRUFBQyx1QkFBdUIscURBQXFEO0FBQ2pJLDhCQUE4QiwwRUFBQyxhQUFhLHNLQUFzSyxFQUFFLDBFQUFDLG1CQUFtQixrQkFBa0IsZ0RBQVksY0FBYztBQUNwUixvQkFBb0IsMEVBQUMsbUJBQW1CLGtGQUFrRixnREFBWSxjQUFjO0FBQ3BKLHVCQUF1QiwwRUFBQyxVQUFVLG1CQUFtQjtBQUNyRCx1QkFBdUIsMEVBQUMsVUFBVSxtQkFBbUI7QUFDckQscUJBQXFCLDBFQUFDLFlBQVksY0FBYyw2Q0FBWTtBQUM1RDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsK0JBQStCO0FBQy9CLFlBQVksMEVBQUMsQ0FBQyx5RUFBSSxJQUFJLDREQUE0RCxFQUFFLDBFQUFDLFVBQVUsU0FBUywyQkFBMkIsc0NBQVcsd0JBQXdCLHVDQUF1QywwRUFBQyxVQUFVLG9CQUFvQiwwSEFBMEgsMEVBQUMsVUFBVSwwQkFBMEIsRUFBRSwwRUFBQyxXQUFXLG9CQUFvQix5Q0FBeUMsMEVBQUMsQ0FBQyx1Q0FBbUIsSUFBSSxpQkFBaUI7QUFDaGdCO0FBQ0EsNEJBQTRCO0FBQzVCLGFBQWE7QUFDYiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkNBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnREFBcUI7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaFpwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzRGO0FBQzVCOztBQUVoRSwyQkFBMkIsa0JBQWtCLGNBQWMsaUJBQWlCLFlBQVksa0JBQWtCLHNCQUFzQixlQUFlLE9BQU8sbUNBQW1DLGlCQUFpQixnQkFBZ0Isc0NBQXNDLEtBQUssbUNBQW1DLHlDQUF5QywrQkFBK0IsT0FBTywrQkFBK0IsS0FBSywyQkFBMkIsZUFBZSxnQkFBZ0Isa01BQWtNLDRCQUE0Qiw0Q0FBNEMsVUFBVSw0QkFBNEIsTUFBTSxtQkFBbUIsdUJBQXVCLGtCQUFrQixzQ0FBc0MsaUJBQWlCLDhDQUE4QywrQkFBK0Isb0NBQW9DLEdBQUcsbUNBQW1DLElBQUksZ0JBQWdCLEtBQUssbUNBQW1DLHdDQUF3QyxHQUFHLGtDQUFrQyxJQUFJLGdCQUFnQixLQUFLLG9DQUFvQyxnQkFBZ0IsYUFBYSxTQUFTLGFBQWE7O0FBRTl3QywrQkFBK0IsMEZBQWtCLGVBQWUsK0VBQVc7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFVBQVUsaUJBQWlCLEtBQUs7QUFDeEUsZ0JBQWdCLDBDQUFhO0FBQzdCLFlBQVkseUVBQUMsVUFBVSxpSUFBaUksRUFBRSx5RUFBQyxVQUFVLGdCQUFnQixFQUFFLHlFQUFDLFVBQVU7QUFDbE07QUFDQTtBQUNBLFNBQVMsc0NBQVc7QUFDcEI7QUFDQSxPQUFPLG9CQUFvQixnQkFBZ0IseUVBQUMsVUFBVSxlQUFlO0FBQ3JFO0FBQ0EsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFbUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvaW5wdXQtdGV4dC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvcHJvZ3Jlc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGgsIEhvc3QgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFNsb3R0ZWQsIGggYXMgc2V0UmVxdWVzdGVkSWNvbiwgYiBhcyBnZXRFbGVtZW50RGlyLCBDIGFzIENTU19VVElMSVRZIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgcyBhcyBzdWJtaXRGb3JtLCBjIGFzIGNvbm5lY3RGb3JtLCBkIGFzIGRpc2Nvbm5lY3RGb3JtLCBIIGFzIEhpZGRlbkZvcm1JbnB1dFNsb3QgfSBmcm9tICcuL2Zvcm0uanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0SW50ZXJhY3RpdmUsIGQgYXMgZGlzY29ubmVjdEludGVyYWN0aXZlLCB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TGFiZWwsIGQgYXMgZGlzY29ubmVjdExhYmVsLCBnIGFzIGdldExhYmVsVGV4dCB9IGZyb20gJy4vbGFiZWwyLmpzJztcbmltcG9ydCB7IGEgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgcyBhcyBzZXRDb21wb25lbnRMb2FkZWQsIGMgYXMgY29tcG9uZW50Rm9jdXNhYmxlIH0gZnJvbSAnLi9sb2FkYWJsZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0SWNvblNjYWxlIH0gZnJvbSAnLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL2ljb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDEgfSBmcm9tICcuL3Byb2dyZXNzLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBsb2FkZXI6IFwibG9hZGVyXCIsXG4gIGNsZWFyQnV0dG9uOiBcImNsZWFyLWJ1dHRvblwiLFxuICBlZGl0aW5nRW5hYmxlZDogXCJlZGl0aW5nLWVuYWJsZWRcIixcbiAgaW5saW5lQ2hpbGQ6IFwiaW5saW5lLWNoaWxkXCIsXG4gIGlucHV0SWNvbjogXCJpY29uXCIsXG4gIHByZWZpeDogXCJwcmVmaXhcIixcbiAgc3VmZml4OiBcInN1ZmZpeFwiLFxuICB3cmFwcGVyOiBcImVsZW1lbnQtd3JhcHBlclwiLFxuICBpbnB1dFdyYXBwZXI6IFwid3JhcHBlclwiLFxuICBhY3Rpb25XcmFwcGVyOiBcImFjdGlvbi13cmFwcGVyXCIsXG4gIHJlc2l6ZUljb25XcmFwcGVyOiBcInJlc2l6ZS1pY29uLXdyYXBwZXJcIixcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgYWN0aW9uOiBcImFjdGlvblwiLFxufTtcblxuY29uc3QgaW5wdXRUZXh0Q3NzID0gXCI6aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmJsb2NrfTpob3N0KFtzY2FsZT1zXSkgaW5wdXR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MC41cmVtO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1jYWxjaXRlLWludGVybmFsLWlucHV0LXRleHQtaW5wdXQtcGFkZGluZy1pbmxpbmUtZW5kLCAwLjVyZW0pfTpob3N0KFtzY2FsZT1zXSkgaW5wdXQsOmhvc3QoW3NjYWxlPXNdKSAucHJlZml4LDpob3N0KFtzY2FsZT1zXSkgLnN1ZmZpeHtibG9jay1zaXplOjEuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPXNdKSAucHJlZml4LDpob3N0KFtzY2FsZT1zXSkgLnN1ZmZpeHtwYWRkaW5nLWlubGluZTowLjVyZW19Omhvc3QoW3NjYWxlPXNdKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24sOmhvc3QoW3NjYWxlPXNdKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24gYnV0dG9ue2Jsb2NrLXNpemU6MS41cmVtfTpob3N0KFtzY2FsZT1zXSkgLmNsZWFyLWJ1dHRvbnttaW4tYmxvY2stc2l6ZToxLjVyZW07bWluLWlubGluZS1zaXplOjEuNXJlbX06aG9zdChbc2NhbGU9bV0pIGlucHV0e3BhZGRpbmctaW5saW5lLXN0YXJ0OjAuNzVyZW07cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLWNhbGNpdGUtaW50ZXJuYWwtaW5wdXQtdGV4dC1pbnB1dC1wYWRkaW5nLWlubGluZS1lbmQsIDAuNzVyZW0pfTpob3N0KFtzY2FsZT1tXSkgaW5wdXQsOmhvc3QoW3NjYWxlPW1dKSAucHJlZml4LDpob3N0KFtzY2FsZT1tXSkgLnN1ZmZpeHtibG9jay1zaXplOjJyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1tXSkgLnByZWZpeCw6aG9zdChbc2NhbGU9bV0pIC5zdWZmaXh7cGFkZGluZy1pbmxpbmU6MC43NXJlbX06aG9zdChbc2NhbGU9bV0pIC5hY3Rpb24td3JhcHBlciBjYWxjaXRlLWJ1dHRvbiw6aG9zdChbc2NhbGU9bV0pIC5hY3Rpb24td3JhcHBlciBjYWxjaXRlLWJ1dHRvbiBidXR0b257YmxvY2stc2l6ZToycmVtfTpob3N0KFtzY2FsZT1tXSkgLmNsZWFyLWJ1dHRvbnttaW4tYmxvY2stc2l6ZToycmVtO21pbi1pbmxpbmUtc2l6ZToycmVtfTpob3N0KFtzY2FsZT1sXSkgaW5wdXR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MXJlbTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1pbnB1dC10ZXh0LWlucHV0LXBhZGRpbmctaW5saW5lLWVuZCwgMXJlbSl9Omhvc3QoW3NjYWxlPWxdKSBpbnB1dCw6aG9zdChbc2NhbGU9bF0pIC5wcmVmaXgsOmhvc3QoW3NjYWxlPWxdKSAuc3VmZml4e2Jsb2NrLXNpemU6Mi43NXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbX06aG9zdChbc2NhbGU9bF0pIC5wcmVmaXgsOmhvc3QoW3NjYWxlPWxdKSAuc3VmZml4e3BhZGRpbmctaW5saW5lOjFyZW19Omhvc3QoW3NjYWxlPWxdKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24sOmhvc3QoW3NjYWxlPWxdKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24gYnV0dG9ue2Jsb2NrLXNpemU6Mi43NXJlbX06aG9zdChbc2NhbGU9bF0pIC5jbGVhci1idXR0b257bWluLWJsb2NrLXNpemU6Mi43NXJlbTttaW4taW5saW5lLXNpemU6Mi43NXJlbX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9aW5wdXR7dHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpLCBibG9jay1zaXplIDAsIG91dGxpbmUtb2Zmc2V0IDBzOy13ZWJraXQtYXBwZWFyYW5jZTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbjowcHg7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDttYXgtYmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7bWF4LWlubGluZS1zaXplOjEwMCU7ZmxleDoxIDEgMCU7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztib3JkZXItcmFkaXVzOjBweDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbm9ybWFsKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9aW5wdXQ6cGxhY2Vob2xkZXItc2hvd257dGV4dC1vdmVyZmxvdzplbGxpcHNpc31pbnB1dHtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX1pbnB1dDo6cGxhY2Vob2xkZXIsaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWwpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX1pbnB1dDpmb2N1c3tib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfWlucHV0W3JlYWRvbmx5XXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYmFja2dyb3VuZCk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pfWlucHV0W3JlYWRvbmx5XTpmb2N1c3tjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Y2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX1pbnB1dHtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fWlucHV0OmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX06aG9zdChbc3RhdHVzPWludmFsaWRdKSBpbnB1dHtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfTpob3N0KFtzdGF0dXM9aW52YWxpZF0pIGlucHV0OmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZGFuZ2VyKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX06aG9zdChbc2NhbGU9c10pIC5pY29ue2luc2V0LWlubGluZS1zdGFydDowLjVyZW19Omhvc3QoW3NjYWxlPW1dKSAuaWNvbntpbnNldC1pbmxpbmUtc3RhcnQ6MC43NXJlbX06aG9zdChbc2NhbGU9bF0pIC5pY29ue2luc2V0LWlubGluZS1zdGFydDoxcmVtfTpob3N0KFtpY29uXVtzY2FsZT1zXSkgaW5wdXR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MnJlbX06aG9zdChbaWNvbl1bc2NhbGU9bV0pIGlucHV0e3BhZGRpbmctaW5saW5lLXN0YXJ0OjIuNXJlbX06aG9zdChbaWNvbl1bc2NhbGU9bF0pIGlucHV0e3BhZGRpbmctaW5saW5lLXN0YXJ0OjMuNXJlbX0uZWxlbWVudC13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO29yZGVyOjM7ZGlzcGxheTppbmxpbmUtZmxleDtmbGV4OjEgMSAwJTthbGlnbi1pdGVtczpjZW50ZXJ9Lmljb257cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2Rpc3BsYXk6YmxvY2s7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9aW5wdXRbdHlwZT10ZXh0XTo6LW1zLWNsZWFyLGlucHV0W3R5cGU9dGV4dF06Oi1tcy1yZXZlYWx7ZGlzcGxheTpub25lO2Jsb2NrLXNpemU6MHB4O2lubGluZS1zaXplOjBweH0uY2xlYXItYnV0dG9ue3BvaW50ZXItZXZlbnRzOmluaXRpYWw7b3JkZXI6NDttYXJnaW46MHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7bWluLWJsb2NrLXNpemU6MTAwJTtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1zZWxmOnN0cmV0Y2g7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6MHB4fS5jbGVhci1idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9LmNsZWFyLWJ1dHRvbjpob3ZlciBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzfS5jbGVhci1idXR0b246YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfS5jbGVhci1idXR0b246YWN0aXZlIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmNsZWFyLWJ1dHRvbjpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9LmNsZWFyLWJ1dHRvbjpkaXNhYmxlZHtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9LmxvYWRlcntpbnNldC1ibG9jay1zdGFydDoxcHg7aW5zZXQtaW5saW5lOjFweDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6YmxvY2t9LmFjdGlvbi13cmFwcGVye29yZGVyOjc7ZGlzcGxheTpmbGV4fS5wcmVmaXgsLnN1ZmZpeHtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6YXV0bzttaW4tYmxvY2stc2l6ZToxMDAlOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYmFja2dyb3VuZCk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2xpbmUtaGVpZ2h0OjE7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS5wcmVmaXh7b3JkZXI6Mjtib3JkZXItaW5saW5lLWVuZC13aWR0aDowcHh9LnN1ZmZpeHtvcmRlcjo1O2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6MHB4fTpob3N0KFthbGlnbm1lbnQ9c3RhcnRdKSBpbnB1dHt0ZXh0LWFsaWduOnN0YXJ0fTpob3N0KFthbGlnbm1lbnQ9ZW5kXSkgaW5wdXR7dGV4dC1hbGlnbjplbmR9LndyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpjZW50ZXJ9Omhvc3QoLm5vLWJvdHRvbS1ib3JkZXIpIGlucHV0e2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MHB4fTpob3N0KC5ib3JkZXItdG9wLWNvbG9yLW9uZSkgaW5wdXR7Ym9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpfS5pbmxpbmUtY2hpbGR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc30uaW5saW5lLWNoaWxkIC5lZGl0aW5nLWVuYWJsZWR7YmFja2dyb3VuZC1jb2xvcjppbmhlcml0fS5pbmxpbmUtY2hpbGQ6bm90KC5lZGl0aW5nLWVuYWJsZWQpe2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MH06OnNsb3R0ZWQoaW5wdXRbc2xvdD1oaWRkZW4tZm9ybS1pbnB1dF0pe21hcmdpbjowICFpbXBvcnRhbnQ7b3BhY2l0eTowICFpbXBvcnRhbnQ7b3V0bGluZTpub25lICFpbXBvcnRhbnQ7cGFkZGluZzowICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtpbnNldDowICFpbXBvcnRhbnQ7dHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZSAhaW1wb3J0YW50O3otaW5kZXg6LTEgIWltcG9ydGFudH06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgSW5wdXRUZXh0ID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0VGV4dEZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxJbnB1dFRleHRGb2N1c1wiLCA3KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0VGV4dEJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbElucHV0VGV4dEJsdXJcIiwgNyk7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXRUZXh0SW5wdXQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnB1dFRleHRJbnB1dFwiLCA3KTtcbiAgICB0aGlzLmNhbGNpdGVJbnB1dFRleHRDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnB1dFRleHRDaGFuZ2VcIiwgNyk7XG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlT3JpZ2luID0gXCJpbml0aWFsXCI7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCAoKSA9PiB0aGlzLnNldERpc2FibGVkQWN0aW9uKCkpO1xuICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IGZhbHNlO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5yZWFkT25seSB8fCB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzQ2xlYXJhYmxlICYmIGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICB0aGlzLmNsZWFySW5wdXRUZXh0VmFsdWUoZXZlbnQpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmICFldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGlmIChzdWJtaXRGb3JtKHRoaXMpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jbGVhcklucHV0VGV4dFZhbHVlID0gKG5hdGl2ZUV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgICAgY29tbWl0dGluZzogdHJ1ZSxcbiAgICAgICAgbmF0aXZlRXZlbnQsXG4gICAgICAgIG9yaWdpbjogXCJ1c2VyXCIsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLmVtaXRDaGFuZ2VJZlVzZXJNb2RpZmllZCA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnByZXZpb3VzVmFsdWVPcmlnaW4gPT09IFwidXNlclwiICYmIHRoaXMudmFsdWUgIT09IHRoaXMucHJldmlvdXNFbWl0dGVkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jYWxjaXRlSW5wdXRUZXh0Q2hhbmdlLmVtaXQoKTtcbiAgICAgICAgdGhpcy5zZXRQcmV2aW91c0VtaXR0ZWRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaW5wdXRUZXh0Qmx1ckhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0VGV4dEJsdXIuZW1pdCh7XG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuY2hpbGRFbCxcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZW1pdENoYW5nZUlmVXNlck1vZGlmaWVkKCk7XG4gICAgfTtcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2xvdHRlZEFjdGlvbkVsID0gZ2V0U2xvdHRlZCh0aGlzLmVsLCBcImFjdGlvblwiKTtcbiAgICAgIGlmIChldmVudC50YXJnZXQgIT09IHNsb3R0ZWRBY3Rpb25FbCkge1xuICAgICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmlucHV0VGV4dEZvY3VzSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsSW5wdXRUZXh0Rm9jdXMuZW1pdCh7XG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuY2hpbGRFbCxcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuaW5wdXRUZXh0SW5wdXRIYW5kbGVyID0gKG5hdGl2ZUV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgICBuYXRpdmVFdmVudCxcbiAgICAgICAgb3JpZ2luOiBcInVzZXJcIixcbiAgICAgICAgdmFsdWU6IG5hdGl2ZUV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5pbnB1dFRleHRLZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgdGhpcy5lbWl0Q2hhbmdlSWZVc2VyTW9kaWZpZWQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGlkZGVuSW5wdXRDaGFuZ2VIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0Lm5hbWUgPT09IHRoaXMubmFtZSkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgIG9yaWdpbjogXCJkaXJlY3RcIixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0Q2hpbGRFbFJlZiA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5jaGlsZEVsID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLnNldElucHV0VmFsdWUgPSAobmV3SW5wdXRWYWx1ZSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNoaWxkRWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGlsZEVsLnZhbHVlID0gbmV3SW5wdXRWYWx1ZTtcbiAgICB9O1xuICAgIHRoaXMuc2V0UHJldmlvdXNFbWl0dGVkVmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICAgIHRoaXMucHJldmlvdXNFbWl0dGVkVmFsdWUgPSB2YWx1ZTtcbiAgICB9O1xuICAgIHRoaXMuc2V0UHJldmlvdXNWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdmFsdWU7XG4gICAgfTtcbiAgICB0aGlzLnNldFZhbHVlID0gKHsgY29tbWl0dGluZyA9IGZhbHNlLCBuYXRpdmVFdmVudCwgb3JpZ2luLCBwcmV2aW91c1ZhbHVlLCB2YWx1ZSwgfSkgPT4ge1xuICAgICAgdGhpcy5zZXRQcmV2aW91c1ZhbHVlKHByZXZpb3VzVmFsdWUgPz8gdGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLnByZXZpb3VzVmFsdWVPcmlnaW4gPSBvcmlnaW47XG4gICAgICB0aGlzLnVzZXJDaGFuZ2VkVmFsdWUgPSBvcmlnaW4gPT09IFwidXNlclwiICYmIHZhbHVlICE9PSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKG9yaWdpbiA9PT0gXCJkaXJlY3RcIikge1xuICAgICAgICB0aGlzLnNldElucHV0VmFsdWUodmFsdWUpO1xuICAgICAgICB0aGlzLnNldFByZXZpb3VzRW1pdHRlZFZhbHVlKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChuYXRpdmVFdmVudCkge1xuICAgICAgICBjb25zdCBjYWxjaXRlSW5wdXRUZXh0SW5wdXRFdmVudCA9IHRoaXMuY2FsY2l0ZUlucHV0VGV4dElucHV0LmVtaXQoKTtcbiAgICAgICAgaWYgKGNhbGNpdGVJbnB1dFRleHRJbnB1dEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5wcmV2aW91c1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbW1pdHRpbmcpIHtcbiAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2VJZlVzZXJNb2RpZmllZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmFsaWdubWVudCA9IFwic3RhcnRcIjtcbiAgICB0aGlzLmF1dG9mb2N1cyA9IGZhbHNlO1xuICAgIHRoaXMuY2xlYXJhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xuICAgIHRoaXMuaWNvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25GbGlwUnRsID0gZmFsc2U7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm1heExlbmd0aCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1pbkxlbmd0aCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnByZWZpeFRleHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWFkT25seSA9IGZhbHNlO1xuICAgIHRoaXMucmVxdWlyZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5zdGF0dXMgPSBcImlkbGVcIjtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlucHV0TW9kZSA9IFwidGV4dFwiO1xuICAgIHRoaXMuZW50ZXJLZXlIaW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGF0dGVybiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN1ZmZpeFRleHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZGl0aW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMudmFsdWUgPSBcIlwiO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2xvdHRlZEFjdGlvbkVsRGlzYWJsZWRJbnRlcm5hbGx5ID0gZmFsc2U7XG4gIH1cbiAgZGlzYWJsZWRXYXRjaGVyKCkge1xuICAgIHRoaXMuc2V0RGlzYWJsZWRBY3Rpb24oKTtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgdmFsdWVXYXRjaGVyKG5ld1ZhbHVlLCBwcmV2aW91c1ZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLnVzZXJDaGFuZ2VkVmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgICBvcmlnaW46IFwiZGlyZWN0XCIsXG4gICAgICAgIHByZXZpb3VzVmFsdWUsXG4gICAgICAgIHZhbHVlOiAhbmV3VmFsdWUgPyBcIlwiIDogbmV3VmFsdWUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gZmFsc2U7XG4gIH1cbiAgdXBkYXRlUmVxdWVzdGVkSWNvbigpIHtcbiAgICB0aGlzLnJlcXVlc3RlZEljb24gPSBzZXRSZXF1ZXN0ZWRJY29uKHt9LCB0aGlzLmljb24sIFwidGV4dFwiKTtcbiAgfVxuICBnZXQgaXNDbGVhcmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xlYXJhYmxlICYmIHRoaXMudmFsdWUubGVuZ3RoID4gMDtcbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLmlubGluZUVkaXRhYmxlRWwgPSB0aGlzLmVsLmNsb3Nlc3QoXCJjYWxjaXRlLWlubGluZS1lZGl0YWJsZVwiKTtcbiAgICBpZiAodGhpcy5pbmxpbmVFZGl0YWJsZUVsKSB7XG4gICAgICB0aGlzLmVkaXRpbmdFbmFibGVkID0gdGhpcy5pbmxpbmVFZGl0YWJsZUVsLmVkaXRpbmdFbmFibGVkIHx8IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnNldFByZXZpb3VzRW1pdHRlZFZhbHVlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMuc2V0UHJldmlvdXNWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgY29ubmVjdEZvcm0odGhpcyk7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgIHRoaXMuc2V0RGlzYWJsZWRBY3Rpb24oKTtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjYWxjaXRlSW50ZXJuYWxIaWRkZW5JbnB1dENoYW5nZVwiLCB0aGlzLmhpZGRlbklucHV0Q2hhbmdlSGFuZGxlcik7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBkaXNjb25uZWN0Rm9ybSh0aGlzKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjYWxjaXRlSW50ZXJuYWxIaWRkZW5JbnB1dENoYW5nZVwiLCB0aGlzLmhpZGRlbklucHV0Q2hhbmdlSGFuZGxlcik7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLnJlcXVlc3RlZEljb24gPSBzZXRSZXF1ZXN0ZWRJY29uKHt9LCB0aGlzLmljb24sIFwidGV4dFwiKTtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRGb2N1c2FibGUodGhpcyk7XG4gICAgdGhpcy5jaGlsZEVsPy5mb2N1cygpO1xuICB9XG4gIC8qKiBTZWxlY3RzIHRoZSB0ZXh0IG9mIHRoZSBjb21wb25lbnQncyBgdmFsdWVgLiAqL1xuICBhc3luYyBzZWxlY3RUZXh0KCkge1xuICAgIHRoaXMuY2hpbGRFbD8uc2VsZWN0KCk7XG4gIH1cbiAgb25MYWJlbENsaWNrKCkge1xuICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgfVxuICBvbkZvcm1SZXNldCgpIHtcbiAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgIG9yaWdpbjogXCJyZXNldFwiLFxuICAgICAgdmFsdWU6IHRoaXMuZGVmYXVsdFZhbHVlLFxuICAgIH0pO1xuICB9XG4gIHN5bmNIaWRkZW5Gb3JtSW5wdXQoaW5wdXQpIHtcbiAgICBpZiAodGhpcy5taW5MZW5ndGggIT0gbnVsbCkge1xuICAgICAgaW5wdXQubWluTGVuZ3RoID0gdGhpcy5taW5MZW5ndGg7XG4gICAgfVxuICAgIGlmICh0aGlzLm1heExlbmd0aCAhPSBudWxsKSB7XG4gICAgICBpbnB1dC5tYXhMZW5ndGggPSB0aGlzLm1heExlbmd0aDtcbiAgICB9XG4gIH1cbiAgc2V0RGlzYWJsZWRBY3Rpb24oKSB7XG4gICAgY29uc3Qgc2xvdHRlZEFjdGlvbkVsID0gZ2V0U2xvdHRlZCh0aGlzLmVsLCBcImFjdGlvblwiKTtcbiAgICBpZiAoIXNsb3R0ZWRBY3Rpb25FbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgaWYgKHNsb3R0ZWRBY3Rpb25FbC5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2xvdHRlZEFjdGlvbkVsRGlzYWJsZWRJbnRlcm5hbGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHNsb3R0ZWRBY3Rpb25FbC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5zbG90dGVkQWN0aW9uRWxEaXNhYmxlZEludGVybmFsbHkpIHtcbiAgICAgIHNsb3R0ZWRBY3Rpb25FbC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgIHRoaXMuc2xvdHRlZEFjdGlvbkVsRGlzYWJsZWRJbnRlcm5hbGx5ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGlyID0gZ2V0RWxlbWVudERpcih0aGlzLmVsKTtcbiAgICBjb25zdCBsb2FkZXIgPSAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MubG9hZGVyIH0sIGgoXCJjYWxjaXRlLXByb2dyZXNzXCIsIHsgbGFiZWw6IHRoaXMubWVzc2FnZXMubG9hZGluZywgdHlwZTogXCJpbmRldGVybWluYXRlXCIgfSkpKTtcbiAgICBjb25zdCBpbnB1dENsZWFyQnV0dG9uID0gKGgoXCJidXR0b25cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5jbGVhciwgY2xhc3M6IENTUy5jbGVhckJ1dHRvbiwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSwgb25DbGljazogdGhpcy5jbGVhcklucHV0VGV4dFZhbHVlLCB0YWJJbmRleDogLTEsIHR5cGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwieFwiLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKSk7XG4gICAgY29uc3QgaWNvbkVsID0gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogQ1NTLmlucHV0SWNvbiwgZmxpcFJ0bDogdGhpcy5pY29uRmxpcFJ0bCwgaWNvbjogdGhpcy5yZXF1ZXN0ZWRJY29uLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKTtcbiAgICBjb25zdCBwcmVmaXhUZXh0ID0gaChcImRpdlwiLCB7IGNsYXNzOiBDU1MucHJlZml4IH0sIHRoaXMucHJlZml4VGV4dCk7XG4gICAgY29uc3Qgc3VmZml4VGV4dCA9IGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLnN1ZmZpeCB9LCB0aGlzLnN1ZmZpeFRleHQpO1xuICAgIGNvbnN0IGNoaWxkRWwgPSAoaChcImlucHV0XCIsIHsgXCJhcmlhLWxhYmVsXCI6IGdldExhYmVsVGV4dCh0aGlzKSwgYXV0b2NvbXBsZXRlOiB0aGlzLmF1dG9jb21wbGV0ZSwgYXV0b2ZvY3VzOiB0aGlzLmF1dG9mb2N1cyA/IHRydWUgOiBudWxsLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmVkaXRpbmdFbmFibGVkXTogdGhpcy5lZGl0aW5nRW5hYmxlZCxcbiAgICAgICAgW0NTUy5pbmxpbmVDaGlsZF06ICEhdGhpcy5pbmxpbmVFZGl0YWJsZUVsLFxuICAgICAgfSwgZGVmYXVsdFZhbHVlOiB0aGlzLmRlZmF1bHRWYWx1ZSwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgPyB0cnVlIDogbnVsbCwgZW50ZXJLZXlIaW50OiB0aGlzLmVudGVyS2V5SGludCwgaW5wdXRNb2RlOiB0aGlzLmlucHV0TW9kZSwgbWF4TGVuZ3RoOiB0aGlzLm1heExlbmd0aCwgbWluTGVuZ3RoOiB0aGlzLm1pbkxlbmd0aCwgbmFtZTogdGhpcy5uYW1lLCBvbkJsdXI6IHRoaXMuaW5wdXRUZXh0Qmx1ckhhbmRsZXIsIG9uRm9jdXM6IHRoaXMuaW5wdXRUZXh0Rm9jdXNIYW5kbGVyLCBvbklucHV0OiB0aGlzLmlucHV0VGV4dElucHV0SGFuZGxlciwgb25LZXlEb3duOiB0aGlzLmlucHV0VGV4dEtleURvd25IYW5kbGVyLCBwYXR0ZXJuOiB0aGlzLnBhdHRlcm4sIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyIHx8IFwiXCIsIHJlYWRPbmx5OiB0aGlzLnJlYWRPbmx5LCByZXF1aXJlZDogdGhpcy5yZXF1aXJlZCA/IHRydWUgOiBudWxsLCB0YWJJbmRleDogdGhpcy5kaXNhYmxlZCB8fCAodGhpcy5pbmxpbmVFZGl0YWJsZUVsICYmICF0aGlzLmVkaXRpbmdFbmFibGVkKSA/IC0xIDogbnVsbCwgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zZXRDaGlsZEVsUmVmIH0pKTtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNsaWNrOiB0aGlzLmNsaWNrSGFuZGxlciwgb25LZXlEb3duOiB0aGlzLmtleURvd25IYW5kbGVyIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTLmlucHV0V3JhcHBlcl06IHRydWUsIFtDU1NfVVRJTElUWS5ydGxdOiBkaXIgPT09IFwicnRsXCIgfSB9LCB0aGlzLnByZWZpeFRleHQgPyBwcmVmaXhUZXh0IDogbnVsbCwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1Mud3JhcHBlciB9LCBjaGlsZEVsLCB0aGlzLmlzQ2xlYXJhYmxlID8gaW5wdXRDbGVhckJ1dHRvbiA6IG51bGwsIHRoaXMucmVxdWVzdGVkSWNvbiA/IGljb25FbCA6IG51bGwsIHRoaXMubG9hZGluZyA/IGxvYWRlciA6IG51bGwpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5hY3Rpb25XcmFwcGVyIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuYWN0aW9uIH0pKSwgdGhpcy5zdWZmaXhUZXh0ID8gc3VmZml4VGV4dCA6IG51bGwsIGgoSGlkZGVuRm9ybUlucHV0U2xvdCwgeyBjb21wb25lbnQ6IHRoaXMgfSkpKSk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkV2F0Y2hlclwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcInZhbHVlXCI6IFtcInZhbHVlV2F0Y2hlclwiXSxcbiAgICBcImljb25cIjogW1widXBkYXRlUmVxdWVzdGVkSWNvblwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gaW5wdXRUZXh0Q3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWlucHV0LXRleHRcIiwge1xuICAgIFwiYWxpZ25tZW50XCI6IFs1MTNdLFxuICAgIFwiYXV0b2ZvY3VzXCI6IFs1MTZdLFxuICAgIFwiY2xlYXJhYmxlXCI6IFs1MTZdLFxuICAgIFwiZGlzYWJsZWRcIjogWzUxNl0sXG4gICAgXCJmb3JtXCI6IFs1MTNdLFxuICAgIFwiaGlkZGVuXCI6IFs1MTZdLFxuICAgIFwiaWNvblwiOiBbNTIwXSxcbiAgICBcImljb25GbGlwUnRsXCI6IFs1MTYsIFwiaWNvbi1mbGlwLXJ0bFwiXSxcbiAgICBcImxhYmVsXCI6IFsxXSxcbiAgICBcImxvYWRpbmdcIjogWzUxNl0sXG4gICAgXCJtYXhMZW5ndGhcIjogWzUxNCwgXCJtYXgtbGVuZ3RoXCJdLFxuICAgIFwibWluTGVuZ3RoXCI6IFs1MTQsIFwibWluLWxlbmd0aFwiXSxcbiAgICBcIm5hbWVcIjogWzUxM10sXG4gICAgXCJwbGFjZWhvbGRlclwiOiBbMV0sXG4gICAgXCJwcmVmaXhUZXh0XCI6IFsxLCBcInByZWZpeC10ZXh0XCJdLFxuICAgIFwicmVhZE9ubHlcIjogWzUxNiwgXCJyZWFkLW9ubHlcIl0sXG4gICAgXCJyZXF1aXJlZFwiOiBbNTE2XSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwic3RhdHVzXCI6IFs1MTNdLFxuICAgIFwiYXV0b2NvbXBsZXRlXCI6IFsxXSxcbiAgICBcImlucHV0TW9kZVwiOiBbMSwgXCJpbnB1dC1tb2RlXCJdLFxuICAgIFwiZW50ZXJLZXlIaW50XCI6IFsxLCBcImVudGVyLWtleS1oaW50XCJdLFxuICAgIFwicGF0dGVyblwiOiBbMV0sXG4gICAgXCJzdWZmaXhUZXh0XCI6IFsxLCBcInN1ZmZpeC10ZXh0XCJdLFxuICAgIFwiZWRpdGluZ0VuYWJsZWRcIjogWzE1NDAsIFwiZWRpdGluZy1lbmFibGVkXCJdLFxuICAgIFwidmFsdWVcIjogWzEwMjVdLFxuICAgIFwibWVzc2FnZXNcIjogWzEwNDBdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogWzMyXSxcbiAgICBcImRlZmF1bHRNZXNzYWdlc1wiOiBbMzJdLFxuICAgIFwic2xvdHRlZEFjdGlvbkVsRGlzYWJsZWRJbnRlcm5hbGx5XCI6IFszMl0sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdLFxuICAgIFwic2VsZWN0VGV4dFwiOiBbNjRdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtaW5wdXQtdGV4dFwiLCBcImNhbGNpdGUtaWNvblwiLCBcImNhbGNpdGUtcHJvZ3Jlc3NcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtaW5wdXQtdGV4dFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIElucHV0VGV4dCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDIoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLXByb2dyZXNzXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBJbnB1dFRleHQgYXMgSSwgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRFbGVtZW50RGlyLCBDIGFzIENTU19VVElMSVRZIH0gZnJvbSAnLi9kb20uanMnO1xuXG5jb25zdCBwcm9ncmVzc0NzcyA9IFwiOmhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztpbmxpbmUtc2l6ZToxMDAlfS50cmFjaywuYmFye3Bvc2l0aW9uOmFic29sdXRlO2luc2V0LWJsb2NrLXN0YXJ0OjBweDtibG9jay1zaXplOjJweH0udHJhY2t7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KTtpbmxpbmUtc2l6ZToxMDAlO292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfS5iYXJ7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfUBtZWRpYSAoZm9yY2VkLWNvbG9yczogYWN0aXZlKXsudHJhY2t7YmFja2dyb3VuZC1jb2xvcjpoaWdobGlnaHRUZXh0fS5iYXJ7YmFja2dyb3VuZC1jb2xvcjpsaW5rVGV4dH19LmluZGV0ZXJtaW5hdGV7aW5saW5lLXNpemU6MjAlO2FuaW1hdGlvbjpsb29waW5nLXByb2dyZXNzLWJhci1hbmkgY2FsYyh2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSAqIDExIC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKSBsaW5lYXIgaW5maW5pdGV9LmluZGV0ZXJtaW5hdGUuY2FsY2l0ZS0tcnRse2FuaW1hdGlvbi1uYW1lOmxvb3BpbmctcHJvZ3Jlc3MtYmFyLWFuaS1ydGx9LnJldmVyc2Vke2FuaW1hdGlvbi1kaXJlY3Rpb246cmV2ZXJzZX0udGV4dHtwYWRkaW5nLWlubGluZTowcHg7cGFkZGluZy1ibG9jazoxcmVtIDBweDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW07Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX1Aa2V5ZnJhbWVzIGxvb3BpbmctcHJvZ3Jlc3MtYmFyLWFuaXswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApfTUwJXtpbmxpbmUtc2l6ZTo0MCV9MTAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNjAwJSwgMCwgMCl9fUBrZXlmcmFtZXMgbG9vcGluZy1wcm9ncmVzcy1iYXItYW5pLXJ0bHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwgMCwgMCl9NTAle2lubGluZS1zaXplOjQwJX0xMDAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNjAwJSwgMCwgMCl9fTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBQcm9ncmVzcyA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy50eXBlID0gXCJkZXRlcm1pbmF0ZVwiO1xuICAgIHRoaXMudmFsdWUgPSAwO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50ZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmV2ZXJzZWQgPSBmYWxzZTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXNEZXRlcm1pbmF0ZSA9IHRoaXMudHlwZSA9PT0gXCJkZXRlcm1pbmF0ZVwiO1xuICAgIGNvbnN0IGJhclN0eWxlcyA9IGlzRGV0ZXJtaW5hdGUgPyB7IHdpZHRoOiBgJHt0aGlzLnZhbHVlICogMTAwfSVgIH0gOiB7fTtcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKHRoaXMuZWwpO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLmxhYmVsIHx8IHRoaXMudGV4dCwgXCJhcmlhLXZhbHVlbWF4XCI6IDEsIFwiYXJpYS12YWx1ZW1pblwiOiAwLCBcImFyaWEtdmFsdWVub3dcIjogdGhpcy52YWx1ZSwgcm9sZTogXCJwcm9ncmVzc2JhclwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0cmFja1wiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBiYXI6IHRydWUsXG4gICAgICAgIGluZGV0ZXJtaW5hdGU6IHRoaXMudHlwZSA9PT0gXCJpbmRldGVybWluYXRlXCIsXG4gICAgICAgIFtDU1NfVVRJTElUWS5ydGxdOiBkaXIgPT09IFwicnRsXCIsXG4gICAgICAgIHJldmVyc2VkOiB0aGlzLnJldmVyc2VkLFxuICAgICAgfSwgc3R5bGU6IGJhclN0eWxlcyB9KSksIHRoaXMudGV4dCA/IGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0ZXh0XCIgfSwgdGhpcy50ZXh0KSA6IG51bGwpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBwcm9ncmVzc0NzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1wcm9ncmVzc1wiLCB7XG4gICAgXCJ0eXBlXCI6IFs1MTNdLFxuICAgIFwidmFsdWVcIjogWzJdLFxuICAgIFwibGFiZWxcIjogWzFdLFxuICAgIFwidGV4dFwiOiBbMV0sXG4gICAgXCJyZXZlcnNlZFwiOiBbNTE2XVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXByb2dyZXNzXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLXByb2dyZXNzXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgUHJvZ3Jlc3MpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IFByb2dyZXNzIGFzIFAsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9