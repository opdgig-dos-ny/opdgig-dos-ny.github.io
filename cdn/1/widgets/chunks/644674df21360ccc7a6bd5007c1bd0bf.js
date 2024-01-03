"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-text-area_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-text-area.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-text-area.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteTextArea: () => (/* binding */ CalciteTextArea),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ "./node_modules/@esri/calcite-components/dist/components/form.js");
/* harmony import */ var _label2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./label2.js */ "./node_modules/@esri/calcite-components/dist/components/label2.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _throttle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./throttle.js */ "./node_modules/@esri/calcite-components/dist/components/throttle.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */












const CSS = {
  assistiveText: "assistive-text",
  characterLimit: "character-limit",
  content: "content",
  container: "container",
  footer: "footer",
  resizeDisabled: "resize--disabled",
  resizeDisabledX: "resize--disabled-x",
  resizeDisabledY: "resize--disabled-y",
  characterOverLimit: "character--over-limit",
  readOnly: "readonly",
  textAreaInvalid: "text-area--invalid",
  footerSlotted: "footer--slotted",
  borderColor: "border--color",
  hide: "hide",
  blockSizeFull: "block-size--full",
  footerEndSlotOnly: "footer--end-only",
};
const SLOTS = {
  footerStart: "footer-start",
  footerEnd: "footer-end",
};
const RESIZE_TIMEOUT = 100;

const textAreaCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:inline-block;block-size:100%;inline-size:100%}textarea{position:relative;margin:0px;box-sizing:border-box;display:block;inline-size:100%;border-width:1px;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family);color:var(--calcite-ui-text-1);min-inline-size:12rem;border-block-end:1px solid var(--calcite-ui-border-3)}@media screen and (max-width: 480px){textarea{resize:none}}textarea:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}textarea.text-area--invalid{border-width:1px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-danger)}textarea.text-area--invalid:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}textarea.footer--slotted{min-inline-size:18rem}.footer{box-sizing:border-box;display:flex;align-items:center;border-width:1px;border-block-start-width:0px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1)}.character-limit{display:flex;align-items:center;justify-content:flex-end;white-space:nowrap;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}.character--over-limit{font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-danger)}:host([resize=none]) textarea{resize:none}:host([resize=horizontal]) textarea{resize:horizontal}:host([resize=vertical]) textarea{resize:vertical}:host([scale=s]){font-size:var(--calcite-font-size--2)}:host([scale=s]) .footer{padding-block:0.25rem;padding-inline:0.5rem;min-block-size:1.75rem}:host([scale=s]) textarea{padding-block:0.25rem;padding-inline:0.5rem}:host([scale=s]) textarea,:host([scale=s]) .footer,:host([scale=s]) .character-limit{padding-inline-start:0.5rem;font-size:var(--calcite-font-size--2)}:host([scale=m]) textarea{padding-block:0.5rem;padding-inline:0.75rem}:host([scale=m]) .footer{padding-block:0.5rem;padding-inline:0.75rem;min-block-size:2.25rem}:host([scale=m]) textarea,:host([scale=m]) .footer,:host([scale=m]) .character-limit{padding-inline-start:0.75rem;font-size:var(--calcite-font-size--1)}:host([scale=l]){font-size:var(--calcite-font-size-0)}:host([scale=l]) textarea{padding-block:0.75rem;padding-inline:1rem}:host([scale=l]) .footer{padding-block:0.75rem;padding-inline:1rem;min-block-size:2.75rem}:host([scale=l]) textarea,:host([scale=l]) .footer,:host([scale=l]) .character-limit{padding-inline-start:1rem;font-size:var(--calcite-font-size-0)}.readonly{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host([disabled]) textarea,:host([disabled]) footer{opacity:0.5}.border--color{border-block-end-width:1px;border-color:var(--calcite-ui-border-input)}.border--color:focus{border-block-end-width:2px}textarea.block-size--full{block-size:100%}.content,.hide{display:none}.container{display:flex;inline-size:100%;justify-content:space-between}.footer--end-only{justify-content:flex-end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}";

const TextArea = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteTextAreaInput = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteTextAreaInput", 7);
    this.calciteTextAreaChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteTextAreaChange", 7);
    this.guid = (0,_guid_js__WEBPACK_IMPORTED_MODULE_8__.g)();
    this.handleInput = (event) => {
      this.value = event.target["value"];
      this.calciteTextAreaInput.emit();
    };
    this.handleChange = () => {
      this.calciteTextAreaChange.emit();
    };
    this.contentSlotChangeHandler = () => {
      if (!this.value) {
        const nodes = this.el.childNodes;
        nodes.forEach((el) => {
          if (el.nodeName === "#text") {
            this.value = el.nodeValue.trim();
          }
        });
      }
    };
    this.renderCharacterLimit = () => {
      if (this.maxLength) {
        this.localizedCharacterLengthObj = this.getLocalizedCharacterLength();
        return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { class: CSS.characterLimit }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { class: { [CSS.characterOverLimit]: this.isCharacterLimitExceeded() } }, this.localizedCharacterLengthObj.currentLength), "/", this.localizedCharacterLengthObj.maxLength));
      }
      return null;
    };
    this.resizeObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_4__.c)("resize", async () => {
      await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.b)(this);
      const { textAreaHeight, textAreaWidth, elHeight, elWidth, footerHeight, footerWidth } = this.getHeightAndWidthOfElements();
      if (footerWidth > 0 && footerWidth !== textAreaWidth) {
        this.footerEl.style.width = `${textAreaWidth}px`;
      }
      if (elWidth !== textAreaWidth || elHeight !== textAreaHeight + (footerHeight || 0)) {
        this.setHeightAndWidthToAuto();
      }
    });
    this.setTextAreaEl = (el) => {
      this.textAreaEl = el;
      this.resizeObserver.observe(el);
    };
    // height and width are set to auto here to avoid overlapping on to neighboring elements in the layout when user starts resizing.
    // throttle is used to avoid flashing of textarea when user resizes.
    this.setHeightAndWidthToAuto = (0,_throttle_js__WEBPACK_IMPORTED_MODULE_9__.t)(() => {
      if (this.resize === "vertical" || this.resize === "both") {
        this.el.style.height = "auto";
      }
      if (this.resize === "horizontal" || this.resize === "both") {
        this.el.style.width = "auto";
      }
    }, RESIZE_TIMEOUT, { leading: false });
    this.autofocus = false;
    this.columns = undefined;
    this.disabled = false;
    this.form = undefined;
    this.groupSeparator = false;
    this.label = undefined;
    this.maxLength = undefined;
    this.messages = undefined;
    this.name = undefined;
    this.numberingSystem = undefined;
    this.placeholder = undefined;
    this.readOnly = false;
    this.required = false;
    this.resize = "both";
    this.rows = undefined;
    this.scale = "m";
    this.value = undefined;
    this.wrap = "soft";
    this.messageOverrides = undefined;
    this.defaultMessages = undefined;
    this.endSlotHasElements = undefined;
    this.startSlotHasElements = undefined;
    this.effectiveLocale = "";
    this.localizedCharacterLengthObj = undefined;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.a)(this);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_7__.u)(this);
    this.setTextAreaHeight();
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    this.resizeObserver?.disconnect();
  }
  render() {
    const hasFooter = this.startSlotHasElements || this.endSlotHasElements || !!this.maxLength;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.Host, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("textarea", { "aria-describedby": this.guid, "aria-invalid": (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.t)(this.isCharacterLimitExceeded()), "aria-label": (0,_label2_js__WEBPACK_IMPORTED_MODULE_1__.g)(this), autofocus: this.autofocus, class: {
        [CSS.readOnly]: this.readOnly,
        [CSS.textAreaInvalid]: this.isCharacterLimitExceeded(),
        [CSS.footerSlotted]: this.endSlotHasElements && this.startSlotHasElements,
        [CSS.blockSizeFull]: !hasFooter,
        [CSS.borderColor]: !hasFooter,
      }, cols: this.columns, disabled: this.disabled, name: this.name, onChange: this.handleChange, onInput: this.handleInput, placeholder: this.placeholder, readonly: this.readOnly, required: this.required, rows: this.rows, value: this.value, wrap: this.wrap,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setTextAreaEl }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { class: { [CSS.content]: true } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", { onSlotchange: this.contentSlotChangeHandler })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("footer", { class: {
        [CSS.footer]: true,
        [CSS.readOnly]: this.readOnly,
        [CSS.hide]: !hasFooter,
      }, ref: (el) => (this.footerEl = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: {
        [CSS.container]: true,
        [CSS.footerEndSlotOnly]: !this.startSlotHasElements && this.endSlotHasElements,
      } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", { name: SLOTS.footerStart, onSlotchange: (event) => (this.startSlotHasElements = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.e)(event)) }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", { name: SLOTS.footerEnd, onSlotchange: (event) => (this.endSlotHasElements = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.e)(event)) })), this.renderCharacterLimit()), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)(_form_js__WEBPACK_IMPORTED_MODULE_0__.H, { component: this }), this.isCharacterLimitExceeded() && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": true, "aria-live": "polite", class: CSS.assistiveText, id: this.guid }, this.replacePlaceHoldersInMessages()))));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    this.textAreaEl.focus();
  }
  /** Selects the text of the component's `value`. */
  async selectText() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.b)(this);
    this.textAreaEl.select();
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_6__.u)(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onFormReset() {
    this.value = this.defaultValue;
  }
  onLabelClick() {
    this.setFocus();
  }
  getLocalizedCharacterLength() {
    const currentLength = this.value ? this.value.length.toString() : "0";
    const maxLength = this.maxLength.toString();
    if (this.numberingSystem === "latn") {
      return { currentLength, maxLength };
    }
    _locale_js__WEBPACK_IMPORTED_MODULE_3__.n.numberFormatOptions = {
      locale: this.effectiveLocale,
      numberingSystem: this.numberingSystem,
      signDisplay: "never",
      useGrouping: this.groupSeparator,
    };
    return {
      currentLength: _locale_js__WEBPACK_IMPORTED_MODULE_3__.n.localize(currentLength),
      maxLength: _locale_js__WEBPACK_IMPORTED_MODULE_3__.n.localize(maxLength),
    };
  }
  syncHiddenFormInput(input) {
    input.setCustomValidity("");
    if (this.isCharacterLimitExceeded()) {
      input.setCustomValidity(this.replacePlaceHoldersInMessages());
    }
  }
  setTextAreaHeight() {
    const { textAreaHeight, elHeight, footerHeight } = this.getHeightAndWidthOfElements();
    if (footerHeight > 0 && textAreaHeight + footerHeight != elHeight) {
      this.textAreaEl.style.height = `${elHeight - footerHeight}px`;
    }
  }
  getHeightAndWidthOfElements() {
    const { height: textAreaHeight, width: textAreaWidth } = this.textAreaEl.getBoundingClientRect();
    const { height: elHeight, width: elWidth } = this.el.getBoundingClientRect();
    const { height: footerHeight, width: footerWidth } = this.footerEl?.getBoundingClientRect();
    return {
      textAreaHeight,
      textAreaWidth,
      elHeight,
      elWidth,
      footerHeight,
      footerWidth,
    };
  }
  replacePlaceHoldersInMessages() {
    return this.messages.tooLong
      .replace("{maxLength}", this.localizedCharacterLengthObj.maxLength)
      .replace("{currentLength}", this.localizedCharacterLengthObj.currentLength);
  }
  isCharacterLimitExceeded() {
    return this.value?.length > this.maxLength;
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return textAreaCss; }
}, [1, "calcite-text-area", {
    "autofocus": [516],
    "columns": [514],
    "disabled": [516],
    "form": [513],
    "groupSeparator": [516, "group-separator"],
    "label": [1],
    "maxLength": [514, "max-length"],
    "messages": [1040],
    "name": [513],
    "numberingSystem": [1, "numbering-system"],
    "placeholder": [1],
    "readOnly": [516, "read-only"],
    "required": [516],
    "resize": [513],
    "rows": [514],
    "scale": [513],
    "value": [1025],
    "wrap": [513],
    "messageOverrides": [1040],
    "defaultMessages": [32],
    "endSlotHasElements": [32],
    "startSlotHasElements": [32],
    "effectiveLocale": [32],
    "localizedCharacterLengthObj": [32],
    "setFocus": [64],
    "selectText": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-text-area"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-text-area":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TextArea);
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteTextArea = TextArea;
const defineCustomElement = defineCustomElement$1;




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




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/throttle.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/throttle.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ "./node_modules/@esri/calcite-components/dist/components/debounce.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if ((0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.i)(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.d)(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNjQ0Njc0ZGYyMTM2MGNjYzdhNmJkNTAwN2MxYmQwYmYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0c7QUFDbkI7QUFDSDtBQUNSO0FBQ3lCO0FBQ3JEO0FBQytFO0FBQ2xCO0FBQ0M7QUFDN0U7QUFDUTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsZUFBZSx5QkFBeUIsaUJBQWlCLDJDQUEyQyxtREFBbUQsb0JBQW9CLE1BQU0sa0JBQWtCLHFCQUFxQixnQkFBZ0IsaUJBQWlCLFNBQVMsa0JBQWtCLFdBQVcsc0JBQXNCLGNBQWMsaUJBQWlCLGlCQUFpQiw0Q0FBNEMsZ0RBQWdELHVDQUF1QywrQkFBK0Isc0JBQXNCLHNEQUFzRCxxQ0FBcUMsU0FBUyxhQUFhLGVBQWUseUVBQXlFLHFQQUFxUCw0QkFBNEIsaUJBQWlCLDJCQUEyQixtQkFBbUIsc0NBQXNDLGtDQUFrQywyQ0FBMkMscVBBQXFQLHlCQUF5QixzQkFBc0IsUUFBUSxzQkFBc0IsYUFBYSxtQkFBbUIsaUJBQWlCLDZCQUE2QixtQkFBbUIsNENBQTRDLGdEQUFnRCxpQkFBaUIsYUFBYSxtQkFBbUIseUJBQXlCLG1CQUFtQiw4Q0FBOEMsK0JBQStCLHVCQUF1Qiw0Q0FBNEMsK0JBQStCLDhCQUE4QixZQUFZLG9DQUFvQyxrQkFBa0Isa0NBQWtDLGdCQUFnQixpQkFBaUIsc0NBQXNDLHlCQUF5QixzQkFBc0Isc0JBQXNCLHVCQUF1QiwwQkFBMEIsc0JBQXNCLHNCQUFzQixxRkFBcUYsNEJBQTRCLHNDQUFzQywwQkFBMEIscUJBQXFCLHVCQUF1Qix5QkFBeUIscUJBQXFCLHVCQUF1Qix1QkFBdUIscUZBQXFGLDZC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QUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtdGV4dC1hcmVhLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9pbnRlcmFjdGl2ZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvbGFiZWwyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy90OW4uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3Rocm90dGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoLCBIb3N0IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Rm9ybSwgZCBhcyBkaXNjb25uZWN0Rm9ybSwgSCBhcyBIaWRkZW5Gb3JtSW5wdXRTbG90IH0gZnJvbSAnLi9mb3JtLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExhYmVsLCBkIGFzIGRpc2Nvbm5lY3RMYWJlbCwgZyBhcyBnZXRMYWJlbFRleHQgfSBmcm9tICcuL2xhYmVsMi5qcyc7XG5pbXBvcnQgeyB0IGFzIHRvQXJpYUJvb2xlYW4sIGUgYXMgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudCB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkLCBuIGFzIG51bWJlclN0cmluZ0Zvcm1hdHRlciB9IGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5pbXBvcnQgeyBiIGFzIGNvbXBvbmVudExvYWRlZCwgYSBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBzIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRGb2N1c2FibGUgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzLCB1IGFzIHVwZGF0ZU1lc3NhZ2VzIH0gZnJvbSAnLi90OW4uanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSB9IGZyb20gJy4vaW50ZXJhY3RpdmUuanMnO1xuaW1wb3J0IHsgZyBhcyBndWlkIH0gZnJvbSAnLi9ndWlkLmpzJztcbmltcG9ydCB7IHQgYXMgdGhyb3R0bGUgfSBmcm9tICcuL3Rocm90dGxlLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBhc3Npc3RpdmVUZXh0OiBcImFzc2lzdGl2ZS10ZXh0XCIsXG4gIGNoYXJhY3RlckxpbWl0OiBcImNoYXJhY3Rlci1saW1pdFwiLFxuICBjb250ZW50OiBcImNvbnRlbnRcIixcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuICBmb290ZXI6IFwiZm9vdGVyXCIsXG4gIHJlc2l6ZURpc2FibGVkOiBcInJlc2l6ZS0tZGlzYWJsZWRcIixcbiAgcmVzaXplRGlzYWJsZWRYOiBcInJlc2l6ZS0tZGlzYWJsZWQteFwiLFxuICByZXNpemVEaXNhYmxlZFk6IFwicmVzaXplLS1kaXNhYmxlZC15XCIsXG4gIGNoYXJhY3Rlck92ZXJMaW1pdDogXCJjaGFyYWN0ZXItLW92ZXItbGltaXRcIixcbiAgcmVhZE9ubHk6IFwicmVhZG9ubHlcIixcbiAgdGV4dEFyZWFJbnZhbGlkOiBcInRleHQtYXJlYS0taW52YWxpZFwiLFxuICBmb290ZXJTbG90dGVkOiBcImZvb3Rlci0tc2xvdHRlZFwiLFxuICBib3JkZXJDb2xvcjogXCJib3JkZXItLWNvbG9yXCIsXG4gIGhpZGU6IFwiaGlkZVwiLFxuICBibG9ja1NpemVGdWxsOiBcImJsb2NrLXNpemUtLWZ1bGxcIixcbiAgZm9vdGVyRW5kU2xvdE9ubHk6IFwiZm9vdGVyLS1lbmQtb25seVwiLFxufTtcbmNvbnN0IFNMT1RTID0ge1xuICBmb290ZXJTdGFydDogXCJmb290ZXItc3RhcnRcIixcbiAgZm9vdGVyRW5kOiBcImZvb3Rlci1lbmRcIixcbn07XG5jb25zdCBSRVNJWkVfVElNRU9VVCA9IDEwMDtcblxuY29uc3QgdGV4dEFyZWFDc3MgPSBcIjpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlfXRleHRhcmVhe3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbjowcHg7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6YmxvY2s7aW5saW5lLXNpemU6MTAwJTtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Zm9udC1mYW1pbHk6dmFyKC0tY2FsY2l0ZS1zYW5zLWZhbWlseSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO21pbi1pbmxpbmUtc2l6ZToxMnJlbTtib3JkZXItYmxvY2stZW5kOjFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7dGV4dGFyZWF7cmVzaXplOm5vbmV9fXRleHRhcmVhOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX10ZXh0YXJlYS50ZXh0LWFyZWEtLWludmFsaWR7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItYmxvY2stZW5kLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyKX10ZXh0YXJlYS50ZXh0LWFyZWEtLWludmFsaWQ6Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfXRleHRhcmVhLmZvb3Rlci0tc2xvdHRlZHttaW4taW5saW5lLXNpemU6MThyZW19LmZvb3Rlcntib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1ibG9jay1zdGFydC13aWR0aDowcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9LmNoYXJhY3Rlci1saW1pdHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWwpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX0uY2hhcmFjdGVyLS1vdmVyLWxpbWl0e2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtYm9sZCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfTpob3N0KFtyZXNpemU9bm9uZV0pIHRleHRhcmVhe3Jlc2l6ZTpub25lfTpob3N0KFtyZXNpemU9aG9yaXpvbnRhbF0pIHRleHRhcmVhe3Jlc2l6ZTpob3Jpem9udGFsfTpob3N0KFtyZXNpemU9dmVydGljYWxdKSB0ZXh0YXJlYXtyZXNpemU6dmVydGljYWx9Omhvc3QoW3NjYWxlPXNdKXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpfTpob3N0KFtzY2FsZT1zXSkgLmZvb3RlcntwYWRkaW5nLWJsb2NrOjAuMjVyZW07cGFkZGluZy1pbmxpbmU6MC41cmVtO21pbi1ibG9jay1zaXplOjEuNzVyZW19Omhvc3QoW3NjYWxlPXNdKSB0ZXh0YXJlYXtwYWRkaW5nLWJsb2NrOjAuMjVyZW07cGFkZGluZy1pbmxpbmU6MC41cmVtfTpob3N0KFtzY2FsZT1zXSkgdGV4dGFyZWEsOmhvc3QoW3NjYWxlPXNdKSAuZm9vdGVyLDpob3N0KFtzY2FsZT1zXSkgLmNoYXJhY3Rlci1saW1pdHtwYWRkaW5nLWlubGluZS1zdGFydDowLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKX06aG9zdChbc2NhbGU9bV0pIHRleHRhcmVhe3BhZGRpbmctYmxvY2s6MC41cmVtO3BhZGRpbmctaW5saW5lOjAuNzVyZW19Omhvc3QoW3NjYWxlPW1dKSAuZm9vdGVye3BhZGRpbmctYmxvY2s6MC41cmVtO3BhZGRpbmctaW5saW5lOjAuNzVyZW07bWluLWJsb2NrLXNpemU6Mi4yNXJlbX06aG9zdChbc2NhbGU9bV0pIHRleHRhcmVhLDpob3N0KFtzY2FsZT1tXSkgLmZvb3Rlciw6aG9zdChbc2NhbGU9bV0pIC5jaGFyYWN0ZXItbGltaXR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MC43NXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpfTpob3N0KFtzY2FsZT1sXSl7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApfTpob3N0KFtzY2FsZT1sXSkgdGV4dGFyZWF7cGFkZGluZy1ibG9jazowLjc1cmVtO3BhZGRpbmctaW5saW5lOjFyZW19Omhvc3QoW3NjYWxlPWxdKSAuZm9vdGVye3BhZGRpbmctYmxvY2s6MC43NXJlbTtwYWRkaW5nLWlubGluZToxcmVtO21pbi1ibG9jay1zaXplOjIuNzVyZW19Omhvc3QoW3NjYWxlPWxdKSB0ZXh0YXJlYSw6aG9zdChbc2NhbGU9bF0pIC5mb290ZXIsOmhvc3QoW3NjYWxlPWxdKSAuY2hhcmFjdGVyLWxpbWl0e3BhZGRpbmctaW5saW5lLXN0YXJ0OjFyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApfS5yZWFkb25seXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYmFja2dyb3VuZCk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pfTpob3N0KFtkaXNhYmxlZF0pIHRleHRhcmVhLDpob3N0KFtkaXNhYmxlZF0pIGZvb3RlcntvcGFjaXR5OjAuNX0uYm9yZGVyLS1jb2xvcntib3JkZXItYmxvY2stZW5kLXdpZHRoOjFweDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpfS5ib3JkZXItLWNvbG9yOmZvY3Vze2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MnB4fXRleHRhcmVhLmJsb2NrLXNpemUtLWZ1bGx7YmxvY2stc2l6ZToxMDAlfS5jb250ZW50LC5oaWRle2Rpc3BsYXk6bm9uZX0uY29udGFpbmVye2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5mb290ZXItLWVuZC1vbmx5e2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uYXNzaXN0aXZlLXRleHR7cG9zaXRpb246YWJzb2x1dGU7aW5saW5lLXNpemU6MXB4O2Jsb2NrLXNpemU6MXB4O3BhZGRpbmc6MDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47Y2xpcDpyZWN0KDAsIDAsIDAsIDApO3doaXRlLXNwYWNlOm5vd3JhcDtib3JkZXItd2lkdGg6MH06OnNsb3R0ZWQoaW5wdXRbc2xvdD1oaWRkZW4tZm9ybS1pbnB1dF0pe21hcmdpbjowICFpbXBvcnRhbnQ7b3BhY2l0eTowICFpbXBvcnRhbnQ7b3V0bGluZTpub25lICFpbXBvcnRhbnQ7cGFkZGluZzowICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtpbnNldDowICFpbXBvcnRhbnQ7dHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZSAhaW1wb3J0YW50O3otaW5kZXg6LTEgIWltcG9ydGFudH06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IFRleHRBcmVhID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVUZXh0QXJlYUlucHV0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlVGV4dEFyZWFJbnB1dFwiLCA3KTtcbiAgICB0aGlzLmNhbGNpdGVUZXh0QXJlYUNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVRleHRBcmVhQ2hhbmdlXCIsIDcpO1xuICAgIHRoaXMuZ3VpZCA9IGd1aWQoKTtcbiAgICB0aGlzLmhhbmRsZUlucHV0ID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnZhbHVlID0gZXZlbnQudGFyZ2V0W1widmFsdWVcIl07XG4gICAgICB0aGlzLmNhbGNpdGVUZXh0QXJlYUlucHV0LmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjaXRlVGV4dEFyZWFDaGFuZ2UuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5jb250ZW50U2xvdENoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMudmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLmVsLmNoaWxkTm9kZXM7XG4gICAgICAgIG5vZGVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgaWYgKGVsLm5vZGVOYW1lID09PSBcIiN0ZXh0XCIpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBlbC5ub2RlVmFsdWUudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnJlbmRlckNoYXJhY3RlckxpbWl0ID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubWF4TGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubG9jYWxpemVkQ2hhcmFjdGVyTGVuZ3RoT2JqID0gdGhpcy5nZXRMb2NhbGl6ZWRDaGFyYWN0ZXJMZW5ndGgoKTtcbiAgICAgICAgcmV0dXJuIChoKFwic3BhblwiLCB7IGNsYXNzOiBDU1MuY2hhcmFjdGVyTGltaXQgfSwgaChcInNwYW5cIiwgeyBjbGFzczogeyBbQ1NTLmNoYXJhY3Rlck92ZXJMaW1pdF06IHRoaXMuaXNDaGFyYWN0ZXJMaW1pdEV4Y2VlZGVkKCkgfSB9LCB0aGlzLmxvY2FsaXplZENoYXJhY3Rlckxlbmd0aE9iai5jdXJyZW50TGVuZ3RoKSwgXCIvXCIsIHRoaXMubG9jYWxpemVkQ2hhcmFjdGVyTGVuZ3RoT2JqLm1heExlbmd0aCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJyZXNpemVcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgICAgY29uc3QgeyB0ZXh0QXJlYUhlaWdodCwgdGV4dEFyZWFXaWR0aCwgZWxIZWlnaHQsIGVsV2lkdGgsIGZvb3RlckhlaWdodCwgZm9vdGVyV2lkdGggfSA9IHRoaXMuZ2V0SGVpZ2h0QW5kV2lkdGhPZkVsZW1lbnRzKCk7XG4gICAgICBpZiAoZm9vdGVyV2lkdGggPiAwICYmIGZvb3RlcldpZHRoICE9PSB0ZXh0QXJlYVdpZHRoKSB7XG4gICAgICAgIHRoaXMuZm9vdGVyRWwuc3R5bGUud2lkdGggPSBgJHt0ZXh0QXJlYVdpZHRofXB4YDtcbiAgICAgIH1cbiAgICAgIGlmIChlbFdpZHRoICE9PSB0ZXh0QXJlYVdpZHRoIHx8IGVsSGVpZ2h0ICE9PSB0ZXh0QXJlYUhlaWdodCArIChmb290ZXJIZWlnaHQgfHwgMCkpIHtcbiAgICAgICAgdGhpcy5zZXRIZWlnaHRBbmRXaWR0aFRvQXV0bygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2V0VGV4dEFyZWFFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy50ZXh0QXJlYUVsID0gZWw7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWwpO1xuICAgIH07XG4gICAgLy8gaGVpZ2h0IGFuZCB3aWR0aCBhcmUgc2V0IHRvIGF1dG8gaGVyZSB0byBhdm9pZCBvdmVybGFwcGluZyBvbiB0byBuZWlnaGJvcmluZyBlbGVtZW50cyBpbiB0aGUgbGF5b3V0IHdoZW4gdXNlciBzdGFydHMgcmVzaXppbmcuXG4gICAgLy8gdGhyb3R0bGUgaXMgdXNlZCB0byBhdm9pZCBmbGFzaGluZyBvZiB0ZXh0YXJlYSB3aGVuIHVzZXIgcmVzaXplcy5cbiAgICB0aGlzLnNldEhlaWdodEFuZFdpZHRoVG9BdXRvID0gdGhyb3R0bGUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucmVzaXplID09PSBcInZlcnRpY2FsXCIgfHwgdGhpcy5yZXNpemUgPT09IFwiYm90aFwiKSB7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yZXNpemUgPT09IFwiaG9yaXpvbnRhbFwiIHx8IHRoaXMucmVzaXplID09PSBcImJvdGhcIikge1xuICAgICAgICB0aGlzLmVsLnN0eWxlLndpZHRoID0gXCJhdXRvXCI7XG4gICAgICB9XG4gICAgfSwgUkVTSVpFX1RJTUVPVVQsIHsgbGVhZGluZzogZmFsc2UgfSk7XG4gICAgdGhpcy5hdXRvZm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLmNvbHVtbnMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmdyb3VwU2VwYXJhdG9yID0gZmFsc2U7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1heExlbmd0aCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVhZE9ubHkgPSBmYWxzZTtcbiAgICB0aGlzLnJlcXVpcmVkID0gZmFsc2U7XG4gICAgdGhpcy5yZXNpemUgPSBcImJvdGhcIjtcbiAgICB0aGlzLnJvd3MgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy53cmFwID0gXCJzb2Z0XCI7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZW5kU2xvdEhhc0VsZW1lbnRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RhcnRTbG90SGFzRWxlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMubG9jYWxpemVkQ2hhcmFjdGVyTGVuZ3RoT2JqID0gdW5kZWZpbmVkO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGNvbm5lY3RGb3JtKHRoaXMpO1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICAgIHRoaXMuc2V0VGV4dEFyZWFIZWlnaHQoKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgZGlzY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RGb3JtKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaGFzRm9vdGVyID0gdGhpcy5zdGFydFNsb3RIYXNFbGVtZW50cyB8fCB0aGlzLmVuZFNsb3RIYXNFbGVtZW50cyB8fCAhIXRoaXMubWF4TGVuZ3RoO1xuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwidGV4dGFyZWFcIiwgeyBcImFyaWEtZGVzY3JpYmVkYnlcIjogdGhpcy5ndWlkLCBcImFyaWEtaW52YWxpZFwiOiB0b0FyaWFCb29sZWFuKHRoaXMuaXNDaGFyYWN0ZXJMaW1pdEV4Y2VlZGVkKCkpLCBcImFyaWEtbGFiZWxcIjogZ2V0TGFiZWxUZXh0KHRoaXMpLCBhdXRvZm9jdXM6IHRoaXMuYXV0b2ZvY3VzLCBjbGFzczoge1xuICAgICAgICBbQ1NTLnJlYWRPbmx5XTogdGhpcy5yZWFkT25seSxcbiAgICAgICAgW0NTUy50ZXh0QXJlYUludmFsaWRdOiB0aGlzLmlzQ2hhcmFjdGVyTGltaXRFeGNlZWRlZCgpLFxuICAgICAgICBbQ1NTLmZvb3RlclNsb3R0ZWRdOiB0aGlzLmVuZFNsb3RIYXNFbGVtZW50cyAmJiB0aGlzLnN0YXJ0U2xvdEhhc0VsZW1lbnRzLFxuICAgICAgICBbQ1NTLmJsb2NrU2l6ZUZ1bGxdOiAhaGFzRm9vdGVyLFxuICAgICAgICBbQ1NTLmJvcmRlckNvbG9yXTogIWhhc0Zvb3RlcixcbiAgICAgIH0sIGNvbHM6IHRoaXMuY29sdW1ucywgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsIG5hbWU6IHRoaXMubmFtZSwgb25DaGFuZ2U6IHRoaXMuaGFuZGxlQ2hhbmdlLCBvbklucHV0OiB0aGlzLmhhbmRsZUlucHV0LCBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlciwgcmVhZG9ubHk6IHRoaXMucmVhZE9ubHksIHJlcXVpcmVkOiB0aGlzLnJlcXVpcmVkLCByb3dzOiB0aGlzLnJvd3MsIHZhbHVlOiB0aGlzLnZhbHVlLCB3cmFwOiB0aGlzLndyYXAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiB0aGlzLnNldFRleHRBcmVhRWwgfSksIGgoXCJzcGFuXCIsIHsgY2xhc3M6IHsgW0NTUy5jb250ZW50XTogdHJ1ZSB9IH0sIGgoXCJzbG90XCIsIHsgb25TbG90Y2hhbmdlOiB0aGlzLmNvbnRlbnRTbG90Q2hhbmdlSGFuZGxlciB9KSksIGgoXCJmb290ZXJcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLmZvb3Rlcl06IHRydWUsXG4gICAgICAgIFtDU1MucmVhZE9ubHldOiB0aGlzLnJlYWRPbmx5LFxuICAgICAgICBbQ1NTLmhpZGVdOiAhaGFzRm9vdGVyLFxuICAgICAgfSwgcmVmOiAoZWwpID0+ICh0aGlzLmZvb3RlckVsID0gZWwpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLmNvbnRhaW5lcl06IHRydWUsXG4gICAgICAgIFtDU1MuZm9vdGVyRW5kU2xvdE9ubHldOiAhdGhpcy5zdGFydFNsb3RIYXNFbGVtZW50cyAmJiB0aGlzLmVuZFNsb3RIYXNFbGVtZW50cyxcbiAgICAgIH0gfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5mb290ZXJTdGFydCwgb25TbG90Y2hhbmdlOiAoZXZlbnQpID0+ICh0aGlzLnN0YXJ0U2xvdEhhc0VsZW1lbnRzID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCkpIH0pLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmZvb3RlckVuZCwgb25TbG90Y2hhbmdlOiAoZXZlbnQpID0+ICh0aGlzLmVuZFNsb3RIYXNFbGVtZW50cyA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpKSB9KSksIHRoaXMucmVuZGVyQ2hhcmFjdGVyTGltaXQoKSksIGgoSGlkZGVuRm9ybUlucHV0U2xvdCwgeyBjb21wb25lbnQ6IHRoaXMgfSksIHRoaXMuaXNDaGFyYWN0ZXJMaW1pdEV4Y2VlZGVkKCkgJiYgKGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiB0cnVlLCBcImFyaWEtbGl2ZVwiOiBcInBvbGl0ZVwiLCBjbGFzczogQ1NTLmFzc2lzdGl2ZVRleHQsIGlkOiB0aGlzLmd1aWQgfSwgdGhpcy5yZXBsYWNlUGxhY2VIb2xkZXJzSW5NZXNzYWdlcygpKSkpKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAgICB0aGlzLnRleHRBcmVhRWwuZm9jdXMoKTtcbiAgfVxuICAvKiogU2VsZWN0cyB0aGUgdGV4dCBvZiB0aGUgY29tcG9uZW50J3MgYHZhbHVlYC4gKi9cbiAgYXN5bmMgc2VsZWN0VGV4dCgpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy50ZXh0QXJlYUVsLnNlbGVjdCgpO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgb25Gb3JtUmVzZXQoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZGVmYXVsdFZhbHVlO1xuICB9XG4gIG9uTGFiZWxDbGljaygpIHtcbiAgICB0aGlzLnNldEZvY3VzKCk7XG4gIH1cbiAgZ2V0TG9jYWxpemVkQ2hhcmFjdGVyTGVuZ3RoKCkge1xuICAgIGNvbnN0IGN1cnJlbnRMZW5ndGggPSB0aGlzLnZhbHVlID8gdGhpcy52YWx1ZS5sZW5ndGgudG9TdHJpbmcoKSA6IFwiMFwiO1xuICAgIGNvbnN0IG1heExlbmd0aCA9IHRoaXMubWF4TGVuZ3RoLnRvU3RyaW5nKCk7XG4gICAgaWYgKHRoaXMubnVtYmVyaW5nU3lzdGVtID09PSBcImxhdG5cIikge1xuICAgICAgcmV0dXJuIHsgY3VycmVudExlbmd0aCwgbWF4TGVuZ3RoIH07XG4gICAgfVxuICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICBzaWduRGlzcGxheTogXCJuZXZlclwiLFxuICAgICAgdXNlR3JvdXBpbmc6IHRoaXMuZ3JvdXBTZXBhcmF0b3IsXG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudExlbmd0aDogbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmxvY2FsaXplKGN1cnJlbnRMZW5ndGgpLFxuICAgICAgbWF4TGVuZ3RoOiBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubG9jYWxpemUobWF4TGVuZ3RoKSxcbiAgICB9O1xuICB9XG4gIHN5bmNIaWRkZW5Gb3JtSW5wdXQoaW5wdXQpIHtcbiAgICBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICBpZiAodGhpcy5pc0NoYXJhY3RlckxpbWl0RXhjZWVkZWQoKSkge1xuICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkodGhpcy5yZXBsYWNlUGxhY2VIb2xkZXJzSW5NZXNzYWdlcygpKTtcbiAgICB9XG4gIH1cbiAgc2V0VGV4dEFyZWFIZWlnaHQoKSB7XG4gICAgY29uc3QgeyB0ZXh0QXJlYUhlaWdodCwgZWxIZWlnaHQsIGZvb3RlckhlaWdodCB9ID0gdGhpcy5nZXRIZWlnaHRBbmRXaWR0aE9mRWxlbWVudHMoKTtcbiAgICBpZiAoZm9vdGVySGVpZ2h0ID4gMCAmJiB0ZXh0QXJlYUhlaWdodCArIGZvb3RlckhlaWdodCAhPSBlbEhlaWdodCkge1xuICAgICAgdGhpcy50ZXh0QXJlYUVsLnN0eWxlLmhlaWdodCA9IGAke2VsSGVpZ2h0IC0gZm9vdGVySGVpZ2h0fXB4YDtcbiAgICB9XG4gIH1cbiAgZ2V0SGVpZ2h0QW5kV2lkdGhPZkVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgaGVpZ2h0OiB0ZXh0QXJlYUhlaWdodCwgd2lkdGg6IHRleHRBcmVhV2lkdGggfSA9IHRoaXMudGV4dEFyZWFFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB7IGhlaWdodDogZWxIZWlnaHQsIHdpZHRoOiBlbFdpZHRoIH0gPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHsgaGVpZ2h0OiBmb290ZXJIZWlnaHQsIHdpZHRoOiBmb290ZXJXaWR0aCB9ID0gdGhpcy5mb290ZXJFbD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHRBcmVhSGVpZ2h0LFxuICAgICAgdGV4dEFyZWFXaWR0aCxcbiAgICAgIGVsSGVpZ2h0LFxuICAgICAgZWxXaWR0aCxcbiAgICAgIGZvb3RlckhlaWdodCxcbiAgICAgIGZvb3RlcldpZHRoLFxuICAgIH07XG4gIH1cbiAgcmVwbGFjZVBsYWNlSG9sZGVyc0luTWVzc2FnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZXMudG9vTG9uZ1xuICAgICAgLnJlcGxhY2UoXCJ7bWF4TGVuZ3RofVwiLCB0aGlzLmxvY2FsaXplZENoYXJhY3Rlckxlbmd0aE9iai5tYXhMZW5ndGgpXG4gICAgICAucmVwbGFjZShcIntjdXJyZW50TGVuZ3RofVwiLCB0aGlzLmxvY2FsaXplZENoYXJhY3Rlckxlbmd0aE9iai5jdXJyZW50TGVuZ3RoKTtcbiAgfVxuICBpc0NoYXJhY3RlckxpbWl0RXhjZWVkZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU/Lmxlbmd0aCA+IHRoaXMubWF4TGVuZ3RoO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIHRleHRBcmVhQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLXRleHQtYXJlYVwiLCB7XG4gICAgXCJhdXRvZm9jdXNcIjogWzUxNl0sXG4gICAgXCJjb2x1bW5zXCI6IFs1MTRdLFxuICAgIFwiZGlzYWJsZWRcIjogWzUxNl0sXG4gICAgXCJmb3JtXCI6IFs1MTNdLFxuICAgIFwiZ3JvdXBTZXBhcmF0b3JcIjogWzUxNiwgXCJncm91cC1zZXBhcmF0b3JcIl0sXG4gICAgXCJsYWJlbFwiOiBbMV0sXG4gICAgXCJtYXhMZW5ndGhcIjogWzUxNCwgXCJtYXgtbGVuZ3RoXCJdLFxuICAgIFwibWVzc2FnZXNcIjogWzEwNDBdLFxuICAgIFwibmFtZVwiOiBbNTEzXSxcbiAgICBcIm51bWJlcmluZ1N5c3RlbVwiOiBbMSwgXCJudW1iZXJpbmctc3lzdGVtXCJdLFxuICAgIFwicGxhY2Vob2xkZXJcIjogWzFdLFxuICAgIFwicmVhZE9ubHlcIjogWzUxNiwgXCJyZWFkLW9ubHlcIl0sXG4gICAgXCJyZXF1aXJlZFwiOiBbNTE2XSxcbiAgICBcInJlc2l6ZVwiOiBbNTEzXSxcbiAgICBcInJvd3NcIjogWzUxNF0sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcInZhbHVlXCI6IFsxMDI1XSxcbiAgICBcIndyYXBcIjogWzUxM10sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFsxMDQwXSxcbiAgICBcImRlZmF1bHRNZXNzYWdlc1wiOiBbMzJdLFxuICAgIFwiZW5kU2xvdEhhc0VsZW1lbnRzXCI6IFszMl0sXG4gICAgXCJzdGFydFNsb3RIYXNFbGVtZW50c1wiOiBbMzJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFszMl0sXG4gICAgXCJsb2NhbGl6ZWRDaGFyYWN0ZXJMZW5ndGhPYmpcIjogWzMyXSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF0sXG4gICAgXCJzZWxlY3RUZXh0XCI6IFs2NF1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXRleHQtYXJlYVwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS10ZXh0LWFyZWFcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBUZXh0QXJlYSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlVGV4dEFyZWEgPSBUZXh0QXJlYTtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVUZXh0QXJlYSwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5cbmZ1bmN0aW9uIGdldFVzZXJBZ2VudERhdGEoKSB7XG4gIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50RGF0YTtcbn1cbmZ1bmN0aW9uIGdldFVzZXJBZ2VudFN0cmluZygpIHtcbiAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICBjb25zdCB1YURhdGEgPSBnZXRVc2VyQWdlbnREYXRhKCk7XG4gIHJldHVybiB1YURhdGE/LmJyYW5kc1xuICAgID8gdWFEYXRhLmJyYW5kcy5tYXAoKHsgYnJhbmQsIHZlcnNpb24gfSkgPT4gYCR7YnJhbmR9LyR7dmVyc2lvbn1gKS5qb2luKFwiIFwiKVxuICAgIDogbmF2aWdhdG9yLnVzZXJBZ2VudDtcbn1cblxuLy8g4pqg77iPIGJyb3dzZXItc25pZmZpbmcgaXMgbm90IGEgYmVzdCBwcmFjdGljZSBhbmQgc2hvdWxkIGJlIGF2b2lkZWQg4pqg77iPXG5jb25zdCBpc0ZpcmVmb3ggPSAvZmlyZWZveC9pLnRlc3QoZ2V0VXNlckFnZW50U3RyaW5nKCkpO1xuY29uc3QgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQgPSBpc0ZpcmVmb3hcbiAgPyBuZXcgV2Vha01hcCgpXG4gIDogbnVsbDtcbmZ1bmN0aW9uIGludGVyY2VwdGVkQ2xpY2soKSB7XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXM7XG4gIGlmICghZGlzYWJsZWQpIHtcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2suY2FsbCh0aGlzKTtcbiAgfVxufVxuZnVuY3Rpb24gb25Qb2ludGVyRG93bihldmVudCkge1xuICBjb25zdCBpbnRlcmFjdGl2ZUVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gIGlmIChpc0ZpcmVmb3ggJiYgIWludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChpbnRlcmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IGludGVyYWN0aXZlRWxlbWVudDtcbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgLy8gcHJldmVudCBjbGljayBmcm9tIG1vdmluZyBmb2N1cyBvbiBob3N0XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuY29uc3Qgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cyA9IFtcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJjbGlja1wiXTtcbmZ1bmN0aW9uIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50KGV2ZW50KSB7XG4gIGlmIChpc0ZpcmVmb3ggJiYgIWludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChldmVudC50YXJnZXQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IGV2ZW50LnRhcmdldDtcbiAgLy8gcHJldmVudCBkaXNhbGxvd2VkIG1vdXNlIGV2ZW50cyBmcm9tIGJlaW5nIGVtaXR0ZWQgb24gdGhlIGRpc2FibGVkIGhvc3QgKHBlciBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2h0bWwvaXNzdWVzLzU4ODYpXG4gIC8v4pqgIHdlIGdlbmVyYWxseSBhdm9pZCBzdG9wcGluZyBwcm9wYWdhdGlvbiBvZiBldmVudHMsIGJ1dCB0aGlzIGlzIG5lZWRlZCB0byBhZGhlcmUgdG8gdGhlIGludGVuZGVkIHNwZWMgY2hhbmdlcyBhYm92ZSDimqBcbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuY29uc3QgY2FwdHVyZU9ubHlPcHRpb25zID0geyBjYXB0dXJlOiB0cnVlIH07XG4vKipcbiAqIFRoaXMgaGVscGVyIHVwZGF0ZXMgdGhlIGhvc3QgZWxlbWVudCB0byBwcmV2ZW50IGtleWJvYXJkIGludGVyYWN0aW9uIG9uIGl0cyBzdWJ0cmVlIGFuZCBzZXRzIHRoZSBhcHByb3ByaWF0ZSBhcmlhIGF0dHJpYnV0ZSBmb3IgYWNjZXNzaWJpbGl0eS5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkUmVuZGVyYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiAqKk5vdGVzKipcbiAqXG4gKiB0aGlzIHV0aWwgaXMgbm90IG5lZWRlZCBmb3Igc2ltcGxlIGNvbXBvbmVudHMgd2hvc2Ugcm9vdCBlbGVtZW50IG9yIGVsZW1lbnRzIGFyZSBhbiBpbnRlcmFjdGl2ZSBjb21wb25lbnQgKGN1c3RvbSBlbGVtZW50IG9yIG5hdGl2ZSBjb250cm9sKS4gRm9yIHRob3NlIGNhc2VzLCBzZXQgdGhlIGBkaXNhYmxlZGAgcHJvcHMgb24gdGhlIHJvb3QgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogdGVjaG5pY2FsbHksIHVzZXJzIGNhbiBvdmVycmlkZSBgdGFiaW5kZXhgIGFuZCByZXN0b3JlIGtleWJvYXJkIG5hdmlnYXRpb24sIGJ1dCB0aGlzIHdpbGwgYmUgY29uc2lkZXJlZCB1c2VyIGVycm9yXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGhvc3RJc1RhYmJhYmxlIOKAkyB3aGVuIHNldCB0byB0cnVlIG9yIGl0cyBwcmVkaWNhdGUgcmV0dXJucyB0cnVlLCB0aGUgaG9zdCBpcyB0YWJiYWJsZSBhbmQgd2lsbCBiZSBtYW5hZ2VkIGJ5IHRoZSBoZWxwZXIuIFNldCB0byBcIm1hbmFnZWRcIiBmb3IgY2FzZXMgd2hlcmUgYSBjb21wb25lbnQncyBwYXJlbnQgZGV0ZXJtaW5lcyB3aGljaCBpdGVtIGlzIHRhYmJhYmxlIChpLmUuLCBzZXRzIGB0YWJpbmRleGAgdG8gYWxsb3cgdGFiYmluZykuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbihjb21wb25lbnQsIGhvc3RJc1RhYmJhYmxlID0gZmFsc2UpIHtcbiAgaWYgKGNvbXBvbmVudC5kaXNhYmxlZCkge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcbiAgICBpZiAoY29tcG9uZW50LmVsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gICAgYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpO1xuICAgIHJldHVybjtcbiAgfVxuICByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbiAgaWYgKHR5cGVvZiBob3N0SXNUYWJiYWJsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIGhvc3RJc1RhYmJhYmxlLmNhbGwoY29tcG9uZW50KSA/IFwiMFwiIDogXCItMVwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gdHJ1ZSkge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gIH1cbiAgZWxzZSBpZiAoaG9zdElzVGFiYmFibGUgPT09IGZhbHNlKSB7XG4gICAgY29tcG9uZW50LmVsLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xuICB9XG4gIGVsc2UgO1xuICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiKTtcbn1cbmZ1bmN0aW9uIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5lbC5jbGljayA9IGludGVyY2VwdGVkQ2xpY2s7XG4gIGFkZEludGVyYWN0aW9uTGlzdGVuZXJzKGlzRmlyZWZveCA/IGdldFBhcmVudEVsZW1lbnQoY29tcG9uZW50KSA6IGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiBhZGRJbnRlcmFjdGlvbkxpc3RlbmVycyhlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIC8vIHRoaXMgcGF0aCBpcyBvbmx5IGFwcGxpY2FibGUgdG8gRmlyZWZveFxuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50LCBjYXB0dXJlT25seU9wdGlvbnMpKTtcbn1cbmZ1bmN0aW9uIGdldFBhcmVudEVsZW1lbnQoY29tcG9uZW50KSB7XG4gIHJldHVybiBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpIHtcbiAgZGVsZXRlIGNvbXBvbmVudC5lbC5jbGljazsgLy8gZmFsbGJhY2sgb24gSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrXG4gIHJlbW92ZUludGVyYWN0aW9uTGlzdGVuZXJzKGlzRmlyZWZveCA/IGdldFBhcmVudEVsZW1lbnQoY29tcG9uZW50KSA6IGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiByZW1vdmVJbnRlcmFjdGlvbkxpc3RlbmVycyhlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIC8vIHRoaXMgcGF0aCBpcyBvbmx5IGFwcGxpY2FibGUgdG8gRmlyZWZveFxuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50LCBjYXB0dXJlT25seU9wdGlvbnMpKTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IGhlbHBzIGRpc2FibGUgY29tcG9uZW50cyBjb25zaXN0ZW50bHkgaW4gRmlyZWZveC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGNvbm5lY3RlZENhbGxiYWNrYCBhbmQgaXMgb25seSBuZWVkZWQgZm9yIEZpcmVmb3ggYXMgaXQgZG9lcyBub3QgY2FsbCBjYXB0dXJlIGV2ZW50IGxpc3RlbmVycyBiZWZvcmUgbm9uLWNhcHR1cmUgb25lcyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE3MzE1MDQpLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdEludGVyYWN0aXZlKGNvbXBvbmVudCkge1xuICBpZiAoIWNvbXBvbmVudC5kaXNhYmxlZCB8fCAhaXNGaXJlZm94KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHBhcmVudCA9IGNvbXBvbmVudC5lbC5wYXJlbnRFbGVtZW50IHx8IGNvbXBvbmVudC5lbDsgLyogYXNzdW1lIGVsZW1lbnQgaXMgaG9zdCBpZiBpdCBoYXMgbm8gcGFyZW50IHdoZW4gY29ubmVjdGVkICovXG4gIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LnNldChjb21wb25lbnQuZWwsIHBhcmVudCk7XG4gIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHJlc3RvcmVzIGludGVyYWN0aXZpdHkgdG8gZGlzYWJsZWQgY29tcG9uZW50cyBjb25zaXN0ZW50bHkgaW4gRmlyZWZveC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrYCBhbmQgaXMgb25seSBuZWVkZWQgZm9yIEZpcmVmb3ggYXMgaXQgZG9lcyBub3QgY2FsbCBjYXB0dXJlIGV2ZW50IGxpc3RlbmVycyBiZWZvcmUgbm9uLWNhcHR1cmUgb25lcyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE3MzE1MDQpLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdEludGVyYWN0aXZlKGNvbXBvbmVudCkge1xuICBpZiAoIWlzRmlyZWZveCkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBhbHdheXMgcmVtb3ZlIG9uIGRpc2Nvbm5lY3QgYXMgcmVuZGVyIG9yIGNvbm5lY3Qgd2lsbCByZXN0b3JlIGl0XG4gIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmRlbGV0ZShjb21wb25lbnQuZWwpO1xuICByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdEludGVyYWN0aXZlIGFzIGMsIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSBhcyBkLCBnZXRVc2VyQWdlbnRTdHJpbmcgYXMgZywgdXBkYXRlSG9zdEludGVyYWN0aW9uIGFzIHUgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHkgYXMgaXNCZWZvcmUsIHEgYXMgcXVlcnlFbGVtZW50Um9vdHMsIGMgYXMgY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5IH0gZnJvbSAnLi9kb20uanMnO1xuXG4vKipcbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHlcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgbGFiZWxDbGlja0V2ZW50ID0gXCJjYWxjaXRlSW50ZXJuYWxMYWJlbENsaWNrXCI7XG5jb25zdCBsYWJlbENvbm5lY3RlZEV2ZW50ID0gXCJjYWxjaXRlSW50ZXJuYWxMYWJlbENvbm5lY3RlZFwiO1xuY29uc3QgbGFiZWxEaXNjb25uZWN0ZWRFdmVudCA9IFwiY2FsY2l0ZUludGVybmFsTGFiZWxEaXNjb25uZWN0ZWRcIjtcbmNvbnN0IGxhYmVsVGFnTmFtZSA9IFwiY2FsY2l0ZS1sYWJlbFwiO1xuY29uc3QgbGFiZWxUb0xhYmVsYWJsZXMgPSBuZXcgV2Vha01hcCgpO1xuY29uc3Qgb25MYWJlbENsaWNrTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IG9uTGFiZWxDb25uZWN0ZWRNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3Qgb25MYWJlbERpc2Nvbm5lY3RlZE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB1bmxhYmVsZWRDb21wb25lbnRzID0gbmV3IFdlYWtTZXQoKTtcbmNvbnN0IGZpbmRMYWJlbEZvckNvbXBvbmVudCA9IChjb21wb25lbnRFbCkgPT4ge1xuICBjb25zdCB7IGlkIH0gPSBjb21wb25lbnRFbDtcbiAgY29uc3QgZm9yTGFiZWwgPSBpZCAmJiBxdWVyeUVsZW1lbnRSb290cyhjb21wb25lbnRFbCwgeyBzZWxlY3RvcjogYCR7bGFiZWxUYWdOYW1lfVtmb3I9XCIke2lkfVwiXWAgfSk7XG4gIGlmIChmb3JMYWJlbCkge1xuICAgIHJldHVybiBmb3JMYWJlbDtcbiAgfVxuICBjb25zdCBwYXJlbnRMYWJlbCA9IGNsb3Nlc3RFbGVtZW50Q3Jvc3NTaGFkb3dCb3VuZGFyeShjb21wb25lbnRFbCwgbGFiZWxUYWdOYW1lKTtcbiAgaWYgKCFwYXJlbnRMYWJlbCB8fFxuICAgIC8vIGxhYmVsYWJsZSBjb21wb25lbnRzIHdpdGhpbiBvdGhlciBjdXN0b20gZWxlbWVudHMgYXJlIG5vdCBjb25zaWRlcmVkIGxhYmVsYWJsZVxuICAgIGhhc0FuY2VzdG9yQ3VzdG9tRWxlbWVudHMocGFyZW50TGFiZWwsIGNvbXBvbmVudEVsKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBwYXJlbnRMYWJlbDtcbn07XG5mdW5jdGlvbiBoYXNBbmNlc3RvckN1c3RvbUVsZW1lbnRzKGxhYmVsLCBjb21wb25lbnRFbCkge1xuICBsZXQgdHJhdmVyc2VkRWxlbWVudHM7XG4gIGNvbnN0IGN1c3RvbUVsZW1lbnRBbmNlc3RvckNoZWNrRXZlbnRUeXBlID0gXCJjdXN0b20tZWxlbWVudC1hbmNlc3Rvci1jaGVja1wiO1xuICBjb25zdCBsaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgIHRyYXZlcnNlZEVsZW1lbnRzID0gY29tcG9zZWRQYXRoLnNsaWNlKGNvbXBvc2VkUGF0aC5pbmRleE9mKGNvbXBvbmVudEVsKSwgY29tcG9zZWRQYXRoLmluZGV4T2YobGFiZWwpKTtcbiAgfTtcbiAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihjdXN0b21FbGVtZW50QW5jZXN0b3JDaGVja0V2ZW50VHlwZSwgbGlzdGVuZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgY29tcG9uZW50RWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoY3VzdG9tRWxlbWVudEFuY2VzdG9yQ2hlY2tFdmVudFR5cGUsIHsgY29tcG9zZWQ6IHRydWUsIGJ1YmJsZXM6IHRydWUgfSkpO1xuICBsYWJlbC5yZW1vdmVFdmVudExpc3RlbmVyKGN1c3RvbUVsZW1lbnRBbmNlc3RvckNoZWNrRXZlbnRUeXBlLCBsaXN0ZW5lcik7XG4gIGNvbnN0IGFuY2VzdG9yQ3VzdG9tRWxlbWVudHMgPSB0cmF2ZXJzZWRFbGVtZW50c1xuICAgIC5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gY29tcG9uZW50RWwgJiYgZWwgIT09IGxhYmVsKVxuICAgIC5maWx0ZXIoKGVsKSA9PiBlbC50YWdOYW1lPy5pbmNsdWRlcyhcIi1cIikpO1xuICByZXR1cm4gYW5jZXN0b3JDdXN0b21FbGVtZW50cy5sZW5ndGggPiAwO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gc2V0IHVwIGxhYmVsIGludGVyYWN0aW9ucyBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RMYWJlbChjb21wb25lbnQpIHtcbiAgY29uc3QgbGFiZWxFbCA9IGZpbmRMYWJlbEZvckNvbXBvbmVudChjb21wb25lbnQuZWwpO1xuICBpZiAoKG9uTGFiZWxDbGlja01hcC5oYXMobGFiZWxFbCkgJiYgbGFiZWxFbCA9PT0gY29tcG9uZW50LmxhYmVsRWwpIHx8XG4gICAgKCFsYWJlbEVsICYmIHVubGFiZWxlZENvbXBvbmVudHMuaGFzKGNvbXBvbmVudCkpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGJvdW5kT25MYWJlbERpc2Nvbm5lY3RlZCA9IG9uTGFiZWxEaXNjb25uZWN0ZWQuYmluZChjb21wb25lbnQpO1xuICBpZiAobGFiZWxFbCkge1xuICAgIGNvbXBvbmVudC5sYWJlbEVsID0gbGFiZWxFbDtcbiAgICBjb25zdCBsYWJlbGFibGVzID0gbGFiZWxUb0xhYmVsYWJsZXMuZ2V0KGxhYmVsRWwpIHx8IFtdO1xuICAgIGxhYmVsYWJsZXMucHVzaChjb21wb25lbnQpO1xuICAgIGxhYmVsVG9MYWJlbGFibGVzLnNldChsYWJlbEVsLCBsYWJlbGFibGVzLnNvcnQoc29ydEJ5RE9NT3JkZXIpKTtcbiAgICBpZiAoIW9uTGFiZWxDbGlja01hcC5oYXMoY29tcG9uZW50LmxhYmVsRWwpKSB7XG4gICAgICBvbkxhYmVsQ2xpY2tNYXAuc2V0KGNvbXBvbmVudC5sYWJlbEVsLCBvbkxhYmVsQ2xpY2spO1xuICAgICAgY29tcG9uZW50LmxhYmVsRWwuYWRkRXZlbnRMaXN0ZW5lcihsYWJlbENsaWNrRXZlbnQsIG9uTGFiZWxDbGljayk7XG4gICAgfVxuICAgIHVubGFiZWxlZENvbXBvbmVudHMuZGVsZXRlKGNvbXBvbmVudCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbENvbm5lY3RlZEV2ZW50LCBvbkxhYmVsQ29ubmVjdGVkTWFwLmdldChjb21wb25lbnQpKTtcbiAgICBvbkxhYmVsRGlzY29ubmVjdGVkTWFwLnNldChjb21wb25lbnQsIGJvdW5kT25MYWJlbERpc2Nvbm5lY3RlZCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihsYWJlbERpc2Nvbm5lY3RlZEV2ZW50LCBib3VuZE9uTGFiZWxEaXNjb25uZWN0ZWQpO1xuICB9XG4gIGVsc2UgaWYgKCF1bmxhYmVsZWRDb21wb25lbnRzLmhhcyhjb21wb25lbnQpKSB7XG4gICAgYm91bmRPbkxhYmVsRGlzY29ubmVjdGVkKCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbERpc2Nvbm5lY3RlZEV2ZW50LCBvbkxhYmVsRGlzY29ubmVjdGVkTWFwLmdldChjb21wb25lbnQpKTtcbiAgfVxufVxuLyoqXG4gKiBIZWxwZXIgdG8gdGVhciBkb3duIGxhYmVsIGludGVyYWN0aW9ucyBvbiBkaXNjb25uZWN0ZWRDYWxsYmFjayBvbiBsYWJlbGFibGUgY29tcG9uZW50cy5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RMYWJlbChjb21wb25lbnQpIHtcbiAgdW5sYWJlbGVkQ29tcG9uZW50cy5kZWxldGUoY29tcG9uZW50KTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbENvbm5lY3RlZEV2ZW50LCBvbkxhYmVsQ29ubmVjdGVkTWFwLmdldChjb21wb25lbnQpKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbERpc2Nvbm5lY3RlZEV2ZW50LCBvbkxhYmVsRGlzY29ubmVjdGVkTWFwLmdldChjb21wb25lbnQpKTtcbiAgb25MYWJlbENvbm5lY3RlZE1hcC5kZWxldGUoY29tcG9uZW50KTtcbiAgb25MYWJlbERpc2Nvbm5lY3RlZE1hcC5kZWxldGUoY29tcG9uZW50KTtcbiAgaWYgKCFjb21wb25lbnQubGFiZWxFbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBsYWJlbGFibGVzID0gbGFiZWxUb0xhYmVsYWJsZXMuZ2V0KGNvbXBvbmVudC5sYWJlbEVsKTtcbiAgaWYgKGxhYmVsYWJsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgY29tcG9uZW50LmxhYmVsRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbENsaWNrRXZlbnQsIG9uTGFiZWxDbGlja01hcC5nZXQoY29tcG9uZW50LmxhYmVsRWwpKTtcbiAgICBvbkxhYmVsQ2xpY2tNYXAuZGVsZXRlKGNvbXBvbmVudC5sYWJlbEVsKTtcbiAgfVxuICBsYWJlbFRvTGFiZWxhYmxlcy5zZXQoY29tcG9uZW50LmxhYmVsRWwsIGxhYmVsYWJsZXMuZmlsdGVyKChsYWJlbGFibGUpID0+IGxhYmVsYWJsZSAhPT0gY29tcG9uZW50KS5zb3J0KHNvcnRCeURPTU9yZGVyKSk7XG4gIGNvbXBvbmVudC5sYWJlbEVsID0gbnVsbDtcbn1cbmZ1bmN0aW9uIHNvcnRCeURPTU9yZGVyKGEsIGIpIHtcbiAgcmV0dXJuIGlzQmVmb3JlKGEuZWwsIGIuZWwpID8gLTEgOiAxO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gZ2V0IHRoZSBsYWJlbCB0ZXh0IGZyb20gYSBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBnZXRMYWJlbFRleHQoY29tcG9uZW50KSB7XG4gIHJldHVybiBjb21wb25lbnQubGFiZWwgfHwgY29tcG9uZW50LmxhYmVsRWw/LnRleHRDb250ZW50Py50cmltKCkgfHwgXCJcIjtcbn1cbmZ1bmN0aW9uIG9uTGFiZWxDbGljayhldmVudCkge1xuICBjb25zdCBsYWJlbENsaWNrVGFyZ2V0ID0gZXZlbnQuZGV0YWlsLnNvdXJjZUV2ZW50LnRhcmdldDtcbiAgY29uc3QgbGFiZWxhYmxlcyA9IGxhYmVsVG9MYWJlbGFibGVzLmdldCh0aGlzKTtcbiAgY29uc3QgY2xpY2tlZExhYmVsYWJsZSA9IGxhYmVsYWJsZXMuZmluZCgobGFiZWxhYmxlKSA9PiBsYWJlbGFibGUuZWwgPT09IGxhYmVsQ2xpY2tUYXJnZXQpO1xuICBjb25zdCBsYWJlbGFibGVDaGlsZENsaWNrZWQgPSBsYWJlbGFibGVzLmluY2x1ZGVzKGNsaWNrZWRMYWJlbGFibGUpO1xuICBpZiAobGFiZWxhYmxlQ2hpbGRDbGlja2VkKSB7XG4gICAgLy8gbm8gbmVlZCB0byBmb3J3YXJkIGNsaWNrIGFzIGxhYmVsYWJsZSB3aWxsIHJlY2VpdmUgZm9jdXNcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZmlyc3RMYWJlbGFibGUgPSBsYWJlbGFibGVzWzBdO1xuICBpZiAoZmlyc3RMYWJlbGFibGUuZGlzYWJsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZmlyc3RMYWJlbGFibGUub25MYWJlbENsaWNrKGV2ZW50KTtcbn1cbmZ1bmN0aW9uIG9uTGFiZWxDb25uZWN0ZWQoKSB7XG4gIGlmICh1bmxhYmVsZWRDb21wb25lbnRzLmhhcyh0aGlzKSkge1xuICAgIGNvbm5lY3RMYWJlbCh0aGlzKTtcbiAgfVxufVxuZnVuY3Rpb24gb25MYWJlbERpc2Nvbm5lY3RlZCgpIHtcbiAgdW5sYWJlbGVkQ29tcG9uZW50cy5hZGQodGhpcyk7XG4gIGNvbnN0IGJvdW5kT25MYWJlbENvbm5lY3RlZCA9IG9uTGFiZWxDb25uZWN0ZWRNYXAuZ2V0KHRoaXMpIHx8IG9uTGFiZWxDb25uZWN0ZWQuYmluZCh0aGlzKTtcbiAgb25MYWJlbENvbm5lY3RlZE1hcC5zZXQodGhpcywgYm91bmRPbkxhYmVsQ29ubmVjdGVkKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihsYWJlbENvbm5lY3RlZEV2ZW50LCBib3VuZE9uTGFiZWxDb25uZWN0ZWQpO1xufVxuXG5leHBvcnQgeyBsYWJlbERpc2Nvbm5lY3RlZEV2ZW50IGFzIGEsIGNvbm5lY3RMYWJlbCBhcyBjLCBkaXNjb25uZWN0TGFiZWwgYXMgZCwgZ2V0TGFiZWxUZXh0IGFzIGcsIGxhYmVsQ29ubmVjdGVkRXZlbnQgYXMgbCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgQnVpbGQsIGdldEFzc2V0UGF0aCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U3VwcG9ydGVkTG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuXG5jb25zdCBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGUgPSB7fTtcbmFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VCdW5kbGUobGFuZywgY29tcG9uZW50KSB7XG4gIGNvbnN0IGtleSA9IGAke2NvbXBvbmVudH1fJHtsYW5nfWA7XG4gIGlmIChjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XSkge1xuICAgIHJldHVybiBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XTtcbiAgfVxuICBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XSA9IGZldGNoKGdldEFzc2V0UGF0aChgLi9hc3NldHMvJHtjb21wb25lbnR9L3Q5bi9tZXNzYWdlc18ke2xhbmd9Lmpzb25gKSlcbiAgICAudGhlbigocmVzcCkgPT4ge1xuICAgIGlmICghcmVzcC5vaykge1xuICAgICAgdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcC5qc29uKCk7XG4gIH0pXG4gICAgLmNhdGNoKCgpID0+IHRocm93TWVzc2FnZUZldGNoRXJyb3IoKSk7XG4gIHJldHVybiBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XTtcbn1cbmZ1bmN0aW9uIHRocm93TWVzc2FnZUZldGNoRXJyb3IoKSB7XG4gIHRocm93IG5ldyBFcnJvcihcImNvdWxkIG5vdCBmZXRjaCBjb21wb25lbnQgbWVzc2FnZSBidW5kbGVcIik7XG59XG5mdW5jdGlvbiBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQubWVzc2FnZXMgPSB7XG4gICAgLi4uY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyxcbiAgICAuLi5jb21wb25lbnQubWVzc2FnZU92ZXJyaWRlcyxcbiAgfTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgdGhlIG1lc3NhZ2VzIHVzZWQgYnkgdGhlIGNvbXBvbmVudC4gSXQgc2hvdWxkIGJlIGF3YWl0ZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5hc3luYyBmdW5jdGlvbiBzZXRVcE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGNvbXBvbmVudC5lZmZlY3RpdmVMb2NhbGUpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG5hc3luYyBmdW5jdGlvbiBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBjb25zdCB7IGVsIH0gPSBjb21wb25lbnQ7XG4gIGNvbnN0IHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IHRhZy5yZXBsYWNlKFwiY2FsY2l0ZS1cIiwgXCJcIik7XG4gIHJldHVybiBnZXRNZXNzYWdlQnVuZGxlKGdldFN1cHBvcnRlZExvY2FsZShsYW5nLCBcInQ5blwiKSwgY29tcG9uZW50TmFtZSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBtdXN0IGJlIHNldCB1cCBmb3IgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIGRlZmF1bHQgbWVzc2FnZSBidW5kbGUgaWYgdGhlIGxvY2FsZSBjaGFuZ2VzLlxuICpcbiAqIEl0IGNhbiBiZSBzZXQgdXAgaW4gKiplaXRoZXIqKiBvZiB0aGUgZm9sbG93aW5nIHdheXM6XG4gKlxuICogMS4gY2FsbGVkIGZyb20gYExvY2FsaXplZENvbXBvbmVudGAncyBgb25Mb2NhbGVDaGFuZ2VgIG1ldGhvZCBvclxuICogMi4gY2FsbGVkIGZyb20gYSB3YXRjaGVyIGNvbmZpZ3VyZWQgdG8gd2F0Y2ggYExvY2FsaXplZENvbXBvbmVudGAncyBgZWZmZWN0aXZlTG9jYWxlYCBwcm9wXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGxhbmdcbiAqL1xuYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZyk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogKipOb3RlKio6IHRoaXMgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgYExvY2FsaXplZENvbXBvbmVudGAncyBgY29ubmVjdExvY2FsaXplZGAgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgdGVhcnMgZG93biBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgbWVyZ2VNZXNzYWdlcyh0aGlzKTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdE1lc3NhZ2VzIGFzIGMsIGRpc2Nvbm5lY3RNZXNzYWdlcyBhcyBkLCBzZXRVcE1lc3NhZ2VzIGFzIHMsIHVwZGF0ZU1lc3NhZ2VzIGFzIHUgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGQgYXMgZGVib3VuY2UsIGkgYXMgaXNPYmplY3QgfSBmcm9tICcuL2RlYm91bmNlLmpzJztcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgdGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgb25seSBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyXG4gKiBldmVyeSBgd2FpdGAgbWlsbGlzZWNvbmRzLiBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYFxuICogbWV0aG9kIHRvIGNhbmNlbCBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0b1xuICogaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgXG4gKiB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlXG4gKiB0aHJvdHRsZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIHRocm90dGxlZCBmdW5jdGlvbiByZXR1cm4gdGhlXG4gKiByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8udGhyb3R0bGVgIGFuZCBgXy5kZWJvdW5jZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGV4Y2Vzc2l2ZWx5IHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB3aGlsZSBzY3JvbGxpbmcuXG4gKiBqUXVlcnkod2luZG93KS5vbignc2Nyb2xsJywgXy50aHJvdHRsZSh1cGRhdGVQb3NpdGlvbiwgMTAwKSk7XG4gKlxuICogLy8gSW52b2tlIGByZW5ld1Rva2VuYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSA1IG1pbnV0ZXMuXG4gKiB2YXIgdGhyb3R0bGVkID0gXy50aHJvdHRsZShyZW5ld1Rva2VuLCAzMDAwMDAsIHsgJ3RyYWlsaW5nJzogZmFsc2UgfSk7XG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgdGhyb3R0bGVkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIHRocm90dGxlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhyb3R0bGVkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZShmdW5jLCB3YWl0LCB7XG4gICAgJ2xlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICAndHJhaWxpbmcnOiB0cmFpbGluZ1xuICB9KTtcbn1cblxuZXhwb3J0IHsgdGhyb3R0bGUgYXMgdCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9