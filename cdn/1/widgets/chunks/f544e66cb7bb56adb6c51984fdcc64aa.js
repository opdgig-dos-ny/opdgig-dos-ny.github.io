"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-card_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-card.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-card.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteCard: () => (/* binding */ CalciteCard),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditionalSlot.js */ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkbox.js */ "./node_modules/@esri/calcite-components/dist/components/checkbox.js");
/* harmony import */ var _label_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./label.js */ "./node_modules/@esri/calcite-components/dist/components/label.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */









const CSS = {
  container: "container",
  header: "header",
  footer: "footer",
  title: "title",
  subtitle: "subtitle",
  checkboxWrapper: "checkbox-wrapper",
  thumbnailWrapper: "thumbnail-wrapper",
};
const SLOTS = {
  thumbnail: "thumbnail",
  title: "title",
  subtitle: "subtitle",
  footerStart: "footer-start",
  footerEnd: "footer-end",
};

const cardCss = ":host{display:block;max-inline-size:100%}:host .calcite-card-container{position:relative;display:flex;block-size:100%;flex-direction:column;justify-content:space-between;overflow:hidden;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:var(--calcite-border-radius-base)}.container{position:relative;display:flex;flex:1 1 auto;flex-direction:column}:host([loading]) .calcite-card-container *:not(calcite-loader):not(.calcite-card-loader-container){pointer-events:none;opacity:0}:host([loading]) .calcite-card-loader-container{position:absolute;inset:0px;display:flex;align-items:center}.header,.footer{display:flex;padding-inline:0.75rem;padding-block:0.75rem 0.25rem}.header{flex-direction:column}.footer{margin-block-start:auto;flex-direction:row;align-content:space-between;justify-content:space-between;padding-inline:0.75rem;padding-block:0.25rem 0.75rem}.card-content{padding:0.75rem;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3)}:host([selected]) .calcite-card-container{border-color:var(--calcite-ui-brand)}slot[name=title]::slotted(*),*::slotted([slot=title]){margin:0px;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selectable]) .header{padding-inline-end:2rem}slot[name=subtitle]::slotted(*),*::slotted([slot=subtitle]){margin:0px;margin-block-start:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}slot[name=thumbnail]::slotted(img),img::slotted([slot=thumbnail]){min-inline-size:100%;max-inline-size:100%}slot[name=footer-start]::slotted(*),*::slotted([slot=footer-start]){align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375;margin-inline-end:auto}slot[name=footer-end]::slotted(*),*::slotted([slot=footer-end]){align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375}.checkbox-wrapper{position:absolute;margin:0px;padding:0px;inset-block-start:0.5rem;inset-inline-end:0.5rem}.thumbnail-wrapper{display:flex}.calcite-card-container.inline{flex-direction:row}.calcite-card-container.inline>.container{inline-size:60%}.calcite-card-container.inline>.thumbnail-wrapper{inline-size:40%;align-items:flex-start}.calcite-card-container.inline slot[name=thumbnail]::slotted(img),.calcite-card-container.inline img::slotted([slot=thumbnail]){inline-size:100%}slot[name=footer-start]::slotted(*),slot[name=footer-end]::slotted(*){display:flex;gap:0.25rem}:host([hidden]){display:none}[hidden]{display:none}";

const Card = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteCardSelect = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.createEvent)(this, "calciteCardSelect", 6);
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.cardSelectClick = () => {
      this.selectCard();
    };
    this.cardSelectKeyDown = (event) => {
      switch (event.key) {
        case " ":
        case "Enter":
          this.selectCard();
          event.preventDefault();
          break;
      }
    };
    this.loading = false;
    this.selected = false;
    this.selectable = false;
    this.thumbnailPosition = "block-start";
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
  }
  async componentWillLoad() {
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
  }
  render() {
    const thumbnailInline = this.thumbnailPosition.startsWith("inline");
    const thumbnailStart = this.thumbnailPosition.endsWith("start");
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", { class: { "calcite-card-container": true, inline: thumbnailInline } }, this.loading ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", { "aria-live": "polite", class: "calcite-card-loader-container" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-loader", { label: this.messages.loading }))) : null, thumbnailStart && this.renderThumbnail(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("section", { "aria-busy": (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.t)(this.loading), class: { [CSS.container]: true } }, this.selectable ? this.renderCheckbox() : null, this.renderHeader(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", { class: "card-content" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot", null)), this.renderFooter()), !thumbnailStart && this.renderThumbnail()));
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.u)(this, this.effectiveLocale);
  }
  selectCard() {
    this.selected = !this.selected;
    this.calciteCardSelect.emit();
  }
  renderThumbnail() {
    return (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.el, SLOTS.thumbnail) ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("section", { class: CSS.thumbnailWrapper }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot", { name: SLOTS.thumbnail }))) : null;
  }
  renderCheckbox() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-label", { class: CSS.checkboxWrapper, onClick: this.cardSelectClick, onKeyDown: this.cardSelectKeyDown }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-checkbox", { checked: this.selected, label: this.messages.select })));
  }
  renderHeader() {
    const { el } = this;
    const title = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(el, SLOTS.title);
    const subtitle = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(el, SLOTS.subtitle);
    const hasHeader = title || subtitle;
    return hasHeader ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("header", { class: CSS.header }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot", { name: SLOTS.title }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot", { name: SLOTS.subtitle }))) : null;
  }
  renderFooter() {
    const { el } = this;
    const startFooter = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(el, SLOTS.footerStart);
    const endFooter = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(el, SLOTS.footerEnd);
    const hasFooter = startFooter || endFooter;
    return hasFooter ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("footer", { class: CSS.footer }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot", { name: SLOTS.footerStart }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot", { name: SLOTS.footerEnd }))) : null;
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return cardCss; }
}, [1, "calcite-card", {
    "loading": [516],
    "selected": [1540],
    "selectable": [516],
    "thumbnailPosition": [513, "thumbnail-position"],
    "messages": [1040],
    "messageOverrides": [1040],
    "effectiveLocale": [32],
    "defaultMessages": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-card", "calcite-checkbox", "calcite-label", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-card":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Card);
      }
      break;
    case "calcite-checkbox":
      if (!customElements.get(tagName)) {
        (0,_checkbox_js__WEBPACK_IMPORTED_MODULE_4__.d)();
      }
      break;
    case "calcite-label":
      if (!customElements.get(tagName)) {
        (0,_label_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteCard = Card;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ connectConditionalSlotComponent),
/* harmony export */   d: () => (/* binding */ disconnectConditionalSlotComponent)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const observed = new Set();
let mutationObserver;
const observerOptions = { childList: true };
/**
 * Helper to set up a conditional slot component on connectedCallback.
 *
 * @param component
 * @deprecated Use `onSlotchange` event with `slotChangeHasAssignedElement` DOM utility instead.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 */
function connectConditionalSlotComponent(component) {
  if (!mutationObserver) {
    mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_0__.c)("mutation", processMutations);
  }
  mutationObserver.observe(component.el, observerOptions);
}
/**
 * Helper to tear down a conditional slot component on disconnectedCallback.
 *
 * @param component
 * @deprecated Use `onSlotchange` event with `slotChangeHasAssignedElement` DOM utility instead.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 */
function disconnectConditionalSlotComponent(component) {
  observed.delete(component.el);
  // we explicitly process queued mutations and disconnect and reconnect
  // the observer until MutationObserver gets an `unobserve` method
  // see https://github.com/whatwg/dom/issues/126
  processMutations(mutationObserver.takeRecords());
  mutationObserver.disconnect();
  for (const [element] of observed.entries()) {
    mutationObserver.observe(element, observerOptions);
  }
}
function processMutations(mutations) {
  mutations.forEach(({ target }) => {
    (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.forceUpdate)(target);
  });
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/label.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/label.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ Label),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _label2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label2.js */ "./node_modules/@esri/calcite-components/dist/components/label2.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const CSS = {
  container: "container",
};

const labelCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{gap:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.5rem)}:host([scale=m]) .container{gap:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.75rem)}:host([scale=l]) .container{gap:0.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-ui-text-1)}:host([layout=default]) .container{display:flex;flex-direction:column}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:0.5rem}:host([layout=inline][scale=l]) .container{gap:0.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity:0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}";

const Label = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalLabelClick = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.createEvent)(this, "calciteInternalLabelClick", 2);
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.labelClickHandler = (event) => {
      this.calciteInternalLabelClick.emit({
        sourceEvent: event,
      });
    };
    this.alignment = "start";
    this.for = undefined;
    this.scale = "m";
    this.layout = "default";
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    document.dispatchEvent(new CustomEvent(_label2_js__WEBPACK_IMPORTED_MODULE_0__.l));
  }
  disconnectedCallback() {
    document.dispatchEvent(new CustomEvent(_label2_js__WEBPACK_IMPORTED_MODULE_0__.a));
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.Host, { onClick: this.labelClickHandler }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: CSS.container }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null))));
  }
  get el() { return this; }
  static get style() { return labelCss; }
}, [1, "calcite-label", {
    "alignment": [513],
    "for": [513],
    "scale": [513],
    "layout": [513]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-label"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-label":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Label);
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/loader.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/loader.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ Loader),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const loaderCss = "@charset \"UTF-8\";@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-ui-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem)}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--2);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem}:host([no-padding]){padding-block:0px}:host{display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{position:absolute;display:block;text-align:center;color:var(--calcite-ui-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);line-height:0.25;transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.66 / var(--calcite-internal-duration-factor));animation-name:loader-clockwise}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear}@supports (display: grid){.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}}:host([type=determinate]){animation:none;stroke:var(--calcite-ui-border-3)}:host([type=determinate]) .loader__svgs{animation:none}:host([type=determinate]) .loader__svg--3{animation:none;stroke:var(--calcite-ui-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-ui-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 4.8 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-83.7757333333}100%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:-279.2524444444}}.loader__svg--2{stroke-dasharray:55.8504888889 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.4 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-97.7383555556}100%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:-279.2524444444}}.loader__svg--3{stroke-dasharray:13.9626222222 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 7.734 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-76.7944222222}100%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:-279.2524444444}}@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@keyframes loader-clockwise{100%{transform:rotate(360deg)}}:host([hidden]){display:none}[hidden]{display:none}";

const Loader = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.inline = false;
    this.label = undefined;
    this.scale = "m";
    this.type = undefined;
    this.value = 0;
    this.text = "";
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const { el, inline, label, scale, text, type, value } = this;
    const id = el.id || (0,_guid_js__WEBPACK_IMPORTED_MODULE_0__.g)();
    const radiusRatio = 0.45;
    const size = inline ? this.getInlineSize(scale) : this.getSize(scale);
    const radius = size * radiusRatio;
    const viewbox = `0 0 ${size} ${size}`;
    const isDeterminate = type === "determinate";
    const circumference = 2 * radius * Math.PI;
    const progress = (value / 100) * circumference;
    const remaining = circumference - progress;
    const valueNow = Math.floor(value);
    const hostAttributes = {
      "aria-valuenow": valueNow,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      complete: valueNow === 100,
    };
    const svgAttributes = { r: radius, cx: size / 2, cy: size / 2 };
    const determinateStyle = { "stroke-dasharray": `${progress} ${remaining}` };
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.Host, { "aria-label": label, id: id, role: "progressbar", ...(isDeterminate ? hostAttributes : {}) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: "loader__svgs" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg", { "aria-hidden": "true", class: "loader__svg loader__svg--1", viewBox: viewbox }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("circle", { ...svgAttributes })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg", { "aria-hidden": "true", class: "loader__svg loader__svg--2", viewBox: viewbox }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("circle", { ...svgAttributes })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg", { "aria-hidden": "true", class: "loader__svg loader__svg--3", viewBox: viewbox, ...(isDeterminate ? { style: determinateStyle } : {}) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("circle", { ...svgAttributes }))), text && (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: "loader__text" }, text), isDeterminate && (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: "loader__percentage" }, value)));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Return the proper sizes based on the scale property
   *
   * @param scale
   */
  getSize(scale) {
    return {
      s: 32,
      m: 56,
      l: 80,
    }[scale];
  }
  getInlineSize(scale) {
    return {
      s: 12,
      m: 16,
      l: 20,
    }[scale];
  }
  get el() { return this; }
  static get style() { return loaderCss; }
}, [1, "calcite-loader", {
    "inline": [516],
    "label": [1],
    "scale": [513],
    "type": [513],
    "value": [2],
    "text": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Loader);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZjU0NGU2NmNiN2JiNTZhZGI2YzUxOTg0ZmRjYzY0YWEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDeUc7QUFDWTtBQUN0RDtBQUNlO0FBQ29DO0FBQ3ZEO0FBQ0g7QUFDQzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLGNBQWMscUJBQXFCLDhCQUE4QixrQkFBa0IsYUFBYSxnQkFBZ0Isc0JBQXNCLDhCQUE4QixnQkFBZ0IsaUJBQWlCLG1CQUFtQix3Q0FBd0MsZ0RBQWdELCtCQUErQixzQkFBc0IsOEJBQThCLHVHQUF1RywwQkFBMEIsd0RBQXdELGdEQUFnRCxXQUFXLGtCQUFrQixhQUFhLGNBQWMsc0JBQXNCLG1HQUFtRyxvQkFBb0IsVUFBVSxnREFBZ0Qsa0JBQWtCLFVBQVUsYUFBYSxtQkFBbUIsZ0JBQWdCLGFBQWEsdUJBQXVCLDhCQUE4QixRQUFRLHNCQUFzQixRQUFRLHdCQUF3QixtQkFBbUIsNEJBQTRCLDhCQUE4Qix1QkFBdUIsOEJBQThCLGNBQWMsZ0JBQWdCLHNDQUFzQyxrQkFBa0IsK0JBQStCLDBDQUEwQyxxQ0FBcUMsc0RBQXNELFdBQVcsc0NBQXNDLGtCQUFrQiw4Q0FBOEMsK0JBQStCLDRCQUE0Qix3QkFBd0IsNERBQTRELFdBQVcsMEJBQTBCLHNDQUFzQyxrQkFBa0IsOENBQThDLCtCQUErQixrRUFBa0UscUJBQXFCLHFCQUFxQixvRUFBb0Usa0JBQWtCLHNDQUFzQyxrQkFBa0IsdUJBQXVCLGdFQUFnRSxrQkFBa0Isc0NBQXNDLGtCQUFrQixrQkFBa0Isa0JBQWtCLFdBQVcsWUFBWSx5QkFBeUIsd0JBQXdCLG1CQUFtQixhQUFhLCtCQUErQixtQkFBbUIsMENBQTBDLGdCQUFnQixrREFBa0QsZ0JBQWdCLHVCQUF1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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtY2FyZC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY29uZGl0aW9uYWxTbG90LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9sYWJlbC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvbG9hZGVyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy90OW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQsIGQgYXMgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCB9IGZyb20gJy4vY29uZGl0aW9uYWxTbG90LmpzJztcbmltcG9ydCB7IHQgYXMgdG9BcmlhQm9vbGVhbiwgZyBhcyBnZXRTbG90dGVkIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgdSBhcyB1cGRhdGVNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0IH0gZnJvbSAnLi9jaGVja2JveC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMyB9IGZyb20gJy4vbGFiZWwuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL2xvYWRlci5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuICBoZWFkZXI6IFwiaGVhZGVyXCIsXG4gIGZvb3RlcjogXCJmb290ZXJcIixcbiAgdGl0bGU6IFwidGl0bGVcIixcbiAgc3VidGl0bGU6IFwic3VidGl0bGVcIixcbiAgY2hlY2tib3hXcmFwcGVyOiBcImNoZWNrYm94LXdyYXBwZXJcIixcbiAgdGh1bWJuYWlsV3JhcHBlcjogXCJ0aHVtYm5haWwtd3JhcHBlclwiLFxufTtcbmNvbnN0IFNMT1RTID0ge1xuICB0aHVtYm5haWw6IFwidGh1bWJuYWlsXCIsXG4gIHRpdGxlOiBcInRpdGxlXCIsXG4gIHN1YnRpdGxlOiBcInN1YnRpdGxlXCIsXG4gIGZvb3RlclN0YXJ0OiBcImZvb3Rlci1zdGFydFwiLFxuICBmb290ZXJFbmQ6IFwiZm9vdGVyLWVuZFwiLFxufTtcblxuY29uc3QgY2FyZENzcyA9IFwiOmhvc3R7ZGlzcGxheTpibG9jazttYXgtaW5saW5lLXNpemU6MTAwJX06aG9zdCAuY2FsY2l0ZS1jYXJkLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7YmxvY2stc2l6ZToxMDAlO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTIpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTstLXR3LXNoYWRvdzowIDAgIzAwMDA7LS10dy1zaGFkb3ctY29sb3JlZDowIDAgIzAwMDA7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO3RyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtib3JkZXItcmFkaXVzOnZhcigtLWNhbGNpdGUtYm9yZGVyLXJhZGl1cy1iYXNlKX0uY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSBhdXRvO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn06aG9zdChbbG9hZGluZ10pIC5jYWxjaXRlLWNhcmQtY29udGFpbmVyICo6bm90KGNhbGNpdGUtbG9hZGVyKTpub3QoLmNhbGNpdGUtY2FyZC1sb2FkZXItY29udGFpbmVyKXtwb2ludGVyLWV2ZW50czpub25lO29wYWNpdHk6MH06aG9zdChbbG9hZGluZ10pIC5jYWxjaXRlLWNhcmQtbG9hZGVyLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTtpbnNldDowcHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcn0uaGVhZGVyLC5mb290ZXJ7ZGlzcGxheTpmbGV4O3BhZGRpbmctaW5saW5lOjAuNzVyZW07cGFkZGluZy1ibG9jazowLjc1cmVtIDAuMjVyZW19LmhlYWRlcntmbGV4LWRpcmVjdGlvbjpjb2x1bW59LmZvb3RlcnttYXJnaW4tYmxvY2stc3RhcnQ6YXV0bztmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24tY29udGVudDpzcGFjZS1iZXR3ZWVuO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3BhZGRpbmctaW5saW5lOjAuNzVyZW07cGFkZGluZy1ibG9jazowLjI1cmVtIDAuNzVyZW19LmNhcmQtY29udGVudHtwYWRkaW5nOjAuNzVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxLjM3NTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9Omhvc3QoW3NlbGVjdGVkXSkgLmNhbGNpdGUtY2FyZC1jb250YWluZXJ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfXNsb3RbbmFtZT10aXRsZV06OnNsb3R0ZWQoKiksKjo6c2xvdHRlZChbc2xvdD10aXRsZV0pe21hcmdpbjowcHg7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxLjM3NTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFtzZWxlY3RhYmxlXSkgLmhlYWRlcntwYWRkaW5nLWlubGluZS1lbmQ6MnJlbX1zbG90W25hbWU9c3VidGl0bGVdOjpzbG90dGVkKCopLCo6OnNsb3R0ZWQoW3Nsb3Q9c3VidGl0bGVdKXttYXJnaW46MHB4O21hcmdpbi1ibG9jay1zdGFydDowLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxLjM3NTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfXNsb3RbbmFtZT10aHVtYm5haWxdOjpzbG90dGVkKGltZyksaW1nOjpzbG90dGVkKFtzbG90PXRodW1ibmFpbF0pe21pbi1pbmxpbmUtc2l6ZToxMDAlO21heC1pbmxpbmUtc2l6ZToxMDAlfXNsb3RbbmFtZT1mb290ZXItc3RhcnRdOjpzbG90dGVkKCopLCo6OnNsb3R0ZWQoW3Nsb3Q9Zm9vdGVyLXN0YXJ0XSl7YWxpZ24tc2VsZjpjZW50ZXI7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxLjM3NTttYXJnaW4taW5saW5lLWVuZDphdXRvfXNsb3RbbmFtZT1mb290ZXItZW5kXTo6c2xvdHRlZCgqKSwqOjpzbG90dGVkKFtzbG90PWZvb3Rlci1lbmRdKXthbGlnbi1zZWxmOmNlbnRlcjtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjEuMzc1fS5jaGVja2JveC13cmFwcGVye3Bvc2l0aW9uOmFic29sdXRlO21hcmdpbjowcHg7cGFkZGluZzowcHg7aW5zZXQtYmxvY2stc3RhcnQ6MC41cmVtO2luc2V0LWlubGluZS1lbmQ6MC41cmVtfS50aHVtYm5haWwtd3JhcHBlcntkaXNwbGF5OmZsZXh9LmNhbGNpdGUtY2FyZC1jb250YWluZXIuaW5saW5le2ZsZXgtZGlyZWN0aW9uOnJvd30uY2FsY2l0ZS1jYXJkLWNvbnRhaW5lci5pbmxpbmU+LmNvbnRhaW5lcntpbmxpbmUtc2l6ZTo2MCV9LmNhbGNpdGUtY2FyZC1jb250YWluZXIuaW5saW5lPi50aHVtYm5haWwtd3JhcHBlcntpbmxpbmUtc2l6ZTo0MCU7YWxpZ24taXRlbXM6ZmxleC1zdGFydH0uY2FsY2l0ZS1jYXJkLWNvbnRhaW5lci5pbmxpbmUgc2xvdFtuYW1lPXRodW1ibmFpbF06OnNsb3R0ZWQoaW1nKSwuY2FsY2l0ZS1jYXJkLWNvbnRhaW5lci5pbmxpbmUgaW1nOjpzbG90dGVkKFtzbG90PXRodW1ibmFpbF0pe2lubGluZS1zaXplOjEwMCV9c2xvdFtuYW1lPWZvb3Rlci1zdGFydF06OnNsb3R0ZWQoKiksc2xvdFtuYW1lPWZvb3Rlci1lbmRdOjpzbG90dGVkKCope2Rpc3BsYXk6ZmxleDtnYXA6MC4yNXJlbX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgQ2FyZCA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlQ2FyZFNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUNhcmRTZWxlY3RcIiwgNik7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuY2FyZFNlbGVjdENsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RDYXJkKCk7XG4gICAgfTtcbiAgICB0aGlzLmNhcmRTZWxlY3RLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICBjYXNlIFwiIFwiOlxuICAgICAgICBjYXNlIFwiRW50ZXJcIjpcbiAgICAgICAgICB0aGlzLnNlbGVjdENhcmQoKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0YWJsZSA9IGZhbHNlO1xuICAgIHRoaXMudGh1bWJuYWlsUG9zaXRpb24gPSBcImJsb2NrLXN0YXJ0XCI7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRodW1ibmFpbElubGluZSA9IHRoaXMudGh1bWJuYWlsUG9zaXRpb24uc3RhcnRzV2l0aChcImlubGluZVwiKTtcbiAgICBjb25zdCB0aHVtYm5haWxTdGFydCA9IHRoaXMudGh1bWJuYWlsUG9zaXRpb24uZW5kc1dpdGgoXCJzdGFydFwiKTtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogeyBcImNhbGNpdGUtY2FyZC1jb250YWluZXJcIjogdHJ1ZSwgaW5saW5lOiB0aHVtYm5haWxJbmxpbmUgfSB9LCB0aGlzLmxvYWRpbmcgPyAoaChcImRpdlwiLCB7IFwiYXJpYS1saXZlXCI6IFwicG9saXRlXCIsIGNsYXNzOiBcImNhbGNpdGUtY2FyZC1sb2FkZXItY29udGFpbmVyXCIgfSwgaChcImNhbGNpdGUtbG9hZGVyXCIsIHsgbGFiZWw6IHRoaXMubWVzc2FnZXMubG9hZGluZyB9KSkpIDogbnVsbCwgdGh1bWJuYWlsU3RhcnQgJiYgdGhpcy5yZW5kZXJUaHVtYm5haWwoKSwgaChcInNlY3Rpb25cIiwgeyBcImFyaWEtYnVzeVwiOiB0b0FyaWFCb29sZWFuKHRoaXMubG9hZGluZyksIGNsYXNzOiB7IFtDU1MuY29udGFpbmVyXTogdHJ1ZSB9IH0sIHRoaXMuc2VsZWN0YWJsZSA/IHRoaXMucmVuZGVyQ2hlY2tib3goKSA6IG51bGwsIHRoaXMucmVuZGVySGVhZGVyKCksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJjYXJkLWNvbnRlbnRcIiB9LCBoKFwic2xvdFwiLCBudWxsKSksIHRoaXMucmVuZGVyRm9vdGVyKCkpLCAhdGh1bWJuYWlsU3RhcnQgJiYgdGhpcy5yZW5kZXJUaHVtYm5haWwoKSkpO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgc2VsZWN0Q2FyZCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XG4gICAgdGhpcy5jYWxjaXRlQ2FyZFNlbGVjdC5lbWl0KCk7XG4gIH1cbiAgcmVuZGVyVGh1bWJuYWlsKCkge1xuICAgIHJldHVybiBnZXRTbG90dGVkKHRoaXMuZWwsIFNMT1RTLnRodW1ibmFpbCkgPyAoaChcInNlY3Rpb25cIiwgeyBjbGFzczogQ1NTLnRodW1ibmFpbFdyYXBwZXIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy50aHVtYm5haWwgfSkpKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyQ2hlY2tib3goKSB7XG4gICAgcmV0dXJuIChoKFwiY2FsY2l0ZS1sYWJlbFwiLCB7IGNsYXNzOiBDU1MuY2hlY2tib3hXcmFwcGVyLCBvbkNsaWNrOiB0aGlzLmNhcmRTZWxlY3RDbGljaywgb25LZXlEb3duOiB0aGlzLmNhcmRTZWxlY3RLZXlEb3duIH0sIGgoXCJjYWxjaXRlLWNoZWNrYm94XCIsIHsgY2hlY2tlZDogdGhpcy5zZWxlY3RlZCwgbGFiZWw6IHRoaXMubWVzc2FnZXMuc2VsZWN0IH0pKSk7XG4gIH1cbiAgcmVuZGVySGVhZGVyKCkge1xuICAgIGNvbnN0IHsgZWwgfSA9IHRoaXM7XG4gICAgY29uc3QgdGl0bGUgPSBnZXRTbG90dGVkKGVsLCBTTE9UUy50aXRsZSk7XG4gICAgY29uc3Qgc3VidGl0bGUgPSBnZXRTbG90dGVkKGVsLCBTTE9UUy5zdWJ0aXRsZSk7XG4gICAgY29uc3QgaGFzSGVhZGVyID0gdGl0bGUgfHwgc3VidGl0bGU7XG4gICAgcmV0dXJuIGhhc0hlYWRlciA/IChoKFwiaGVhZGVyXCIsIHsgY2xhc3M6IENTUy5oZWFkZXIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy50aXRsZSB9KSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5zdWJ0aXRsZSB9KSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXJGb290ZXIoKSB7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICBjb25zdCBzdGFydEZvb3RlciA9IGdldFNsb3R0ZWQoZWwsIFNMT1RTLmZvb3RlclN0YXJ0KTtcbiAgICBjb25zdCBlbmRGb290ZXIgPSBnZXRTbG90dGVkKGVsLCBTTE9UUy5mb290ZXJFbmQpO1xuICAgIGNvbnN0IGhhc0Zvb3RlciA9IHN0YXJ0Rm9vdGVyIHx8IGVuZEZvb3RlcjtcbiAgICByZXR1cm4gaGFzRm9vdGVyID8gKGgoXCJmb290ZXJcIiwgeyBjbGFzczogQ1NTLmZvb3RlciB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmZvb3RlclN0YXJ0IH0pLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmZvb3RlckVuZCB9KSkpIDogbnVsbDtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBjYXJkQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWNhcmRcIiwge1xuICAgIFwibG9hZGluZ1wiOiBbNTE2XSxcbiAgICBcInNlbGVjdGVkXCI6IFsxNTQwXSxcbiAgICBcInNlbGVjdGFibGVcIjogWzUxNl0sXG4gICAgXCJ0aHVtYm5haWxQb3NpdGlvblwiOiBbNTEzLCBcInRodW1ibmFpbC1wb3NpdGlvblwiXSxcbiAgICBcIm1lc3NhZ2VzXCI6IFsxMDQwXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogWzEwNDBdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFszMl0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50JDEoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtY2FyZFwiLCBcImNhbGNpdGUtY2hlY2tib3hcIiwgXCJjYWxjaXRlLWxhYmVsXCIsIFwiY2FsY2l0ZS1sb2FkZXJcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtY2FyZFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIENhcmQpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtY2hlY2tib3hcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNCgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtbGFiZWxcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtbG9hZGVyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDIoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG5cbmNvbnN0IENhbGNpdGVDYXJkID0gQ2FyZDtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVDYXJkLCBkZWZpbmVDdXN0b21FbGVtZW50IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBmb3JjZVVwZGF0ZSB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5cbmNvbnN0IG9ic2VydmVkID0gbmV3IFNldCgpO1xubGV0IG11dGF0aW9uT2JzZXJ2ZXI7XG5jb25zdCBvYnNlcnZlck9wdGlvbnMgPSB7IGNoaWxkTGlzdDogdHJ1ZSB9O1xuLyoqXG4gKiBIZWxwZXIgdG8gc2V0IHVwIGEgY29uZGl0aW9uYWwgc2xvdCBjb21wb25lbnQgb24gY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQGRlcHJlY2F0ZWQgVXNlIGBvblNsb3RjaGFuZ2VgIGV2ZW50IHdpdGggYHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnRgIERPTSB1dGlsaXR5IGluc3RlYWQuXG4gKlxuICogYGBgXG4gKiA8c2xvdCBvblNsb3RjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5teVNsb3RIYXNFbGVtZW50ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCl9IC8+fVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIGlmICghbXV0YXRpb25PYnNlcnZlcikge1xuICAgIG11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsIHByb2Nlc3NNdXRhdGlvbnMpO1xuICB9XG4gIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShjb21wb25lbnQuZWwsIG9ic2VydmVyT3B0aW9ucyk7XG59XG4vKipcbiAqIEhlbHBlciB0byB0ZWFyIGRvd24gYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBkaXNjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgb2JzZXJ2ZWQuZGVsZXRlKGNvbXBvbmVudC5lbCk7XG4gIC8vIHdlIGV4cGxpY2l0bHkgcHJvY2VzcyBxdWV1ZWQgbXV0YXRpb25zIGFuZCBkaXNjb25uZWN0IGFuZCByZWNvbm5lY3RcbiAgLy8gdGhlIG9ic2VydmVyIHVudGlsIE11dGF0aW9uT2JzZXJ2ZXIgZ2V0cyBhbiBgdW5vYnNlcnZlYCBtZXRob2RcbiAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvZG9tL2lzc3Vlcy8xMjZcbiAgcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbk9ic2VydmVyLnRha2VSZWNvcmRzKCkpO1xuICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgZm9yIChjb25zdCBbZWxlbWVudF0gb2Ygb2JzZXJ2ZWQuZW50cmllcygpKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9ic2VydmVyT3B0aW9ucyk7XG4gIH1cbn1cbmZ1bmN0aW9uIHByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gIG11dGF0aW9ucy5mb3JFYWNoKCh7IHRhcmdldCB9KSA9PiB7XG4gICAgZm9yY2VVcGRhdGUodGFyZ2V0KTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgYXMgYywgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGwgYXMgbGFiZWxDb25uZWN0ZWRFdmVudCwgYSBhcyBsYWJlbERpc2Nvbm5lY3RlZEV2ZW50IH0gZnJvbSAnLi9sYWJlbDIuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbn07XG5cbmNvbnN0IGxhYmVsQ3NzID0gXCI6aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmZsZXh9Omhvc3QoW2FsaWdubWVudD1zdGFydF0pe3RleHQtYWxpZ246c3RhcnR9Omhvc3QoW2FsaWdubWVudD1lbmRdKXt0ZXh0LWFsaWduOmVuZH06aG9zdChbYWxpZ25tZW50PWNlbnRlcl0pe3RleHQtYWxpZ246Y2VudGVyfTpob3N0KFtzY2FsZT1zXSkgLmNvbnRhaW5lcntnYXA6MC4yNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW07bWFyZ2luLWJsb2NrLWVuZDp2YXIoLS1jYWxjaXRlLWxhYmVsLW1hcmdpbi1ib3R0b20sIDAuNXJlbSl9Omhvc3QoW3NjYWxlPW1dKSAuY29udGFpbmVye2dhcDowLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtO21hcmdpbi1ibG9jay1lbmQ6dmFyKC0tY2FsY2l0ZS1sYWJlbC1tYXJnaW4tYm90dG9tLCAwLjc1cmVtKX06aG9zdChbc2NhbGU9bF0pIC5jb250YWluZXJ7Z2FwOjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbTttYXJnaW4tYmxvY2stZW5kOnZhcigtLWNhbGNpdGUtbGFiZWwtbWFyZ2luLWJvdHRvbSwgMXJlbSl9Omhvc3QgLmNvbnRhaW5lcnttYXJnaW4taW5saW5lOjBweDttYXJnaW4tYmxvY2stc3RhcnQ6MHB4O2lubGluZS1zaXplOjEwMCU7bGluZS1oZWlnaHQ6MS4zNzU7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFtsYXlvdXQ9ZGVmYXVsdF0pIC5jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn06aG9zdChbbGF5b3V0PWlubGluZV0pIC5jb250YWluZXIsOmhvc3QoW2xheW91dD1pbmxpbmUtc3BhY2UtYmV0d2Vlbl0pIC5jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjAuNXJlbX06aG9zdChbbGF5b3V0PWlubGluZV1bc2NhbGU9bF0pIC5jb250YWluZXJ7Z2FwOjAuNzVyZW19Omhvc3QoW2xheW91dD1pbmxpbmUtc3BhY2UtYmV0d2Vlbl0pIC5jb250YWluZXJ7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Omhvc3QoW2Rpc2FibGVkXSk+LmNvbnRhaW5lcntvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCpbZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKltkaXNhYmxlZF0gKil7LS10dy1iZy1vcGFjaXR5OjF9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKGNhbGNpdGUtaW5wdXQtbWVzc2FnZTpub3QoW2FjdGl2ZV0pKXstLXR3LWJnLW9wYWNpdHk6MH06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IExhYmVsID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbExhYmVsQ2xpY2sgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbExhYmVsQ2xpY2tcIiwgMik7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMubGFiZWxDbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsTGFiZWxDbGljay5lbWl0KHtcbiAgICAgICAgc291cmNlRXZlbnQ6IGV2ZW50LFxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLmFsaWdubWVudCA9IFwic3RhcnRcIjtcbiAgICB0aGlzLmZvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5sYXlvdXQgPSBcImRlZmF1bHRcIjtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChsYWJlbENvbm5lY3RlZEV2ZW50KSk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQobGFiZWxEaXNjb25uZWN0ZWRFdmVudCkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNsaWNrOiB0aGlzLmxhYmVsQ2xpY2tIYW5kbGVyIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbnRhaW5lciB9LCBoKFwic2xvdFwiLCBudWxsKSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBsYWJlbENzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1sYWJlbFwiLCB7XG4gICAgXCJhbGlnbm1lbnRcIjogWzUxM10sXG4gICAgXCJmb3JcIjogWzUxM10sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcImxheW91dFwiOiBbNTEzXVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWxhYmVsXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWxhYmVsXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgTGFiZWwpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IExhYmVsIGFzIEwsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC5qcyc7XG5cbmNvbnN0IGxvYWRlckNzcyA9IFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtAbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowfX06aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4taW5saW5lOmF1dG87ZGlzcGxheTpub25lO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO29wYWNpdHk6MTttaW4tYmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItZm9udC1zaXplKTtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7c3Ryb2tlLXdpZHRoOjM7ZmlsbDpub25lO3RyYW5zZm9ybTpzY2FsZSgxLCAxKTthbmltYXRpb246bG9hZGVyLWNvbG9yLXNoaWZ0IGNhbGModmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpICogMiAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSkgYWx0ZXJuYXRlLXJldmVyc2UgaW5maW5pdGUgbGluZWFyO3BhZGRpbmctYmxvY2s6dmFyKC0tY2FsY2l0ZS1sb2FkZXItcGFkZGluZywgNHJlbSl9Omhvc3QoW3NjYWxlPXNdKXstLWNhbGNpdGUtbG9hZGVyLWZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7LS1jYWxjaXRlLWxvYWRlci1zaXplOjJyZW07LS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZTowLjc1cmVtfTpob3N0KFtzY2FsZT1tXSl7LS1jYWxjaXRlLWxvYWRlci1mb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7LS1jYWxjaXRlLWxvYWRlci1zaXplOjRyZW07LS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZToxcmVtfTpob3N0KFtzY2FsZT1sXSl7LS1jYWxjaXRlLWxvYWRlci1mb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMik7LS1jYWxjaXRlLWxvYWRlci1zaXplOjZyZW07LS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZToxLjVyZW19Omhvc3QoW25vLXBhZGRpbmddKXtwYWRkaW5nLWJsb2NrOjBweH06aG9zdHtkaXNwbGF5OmZsZXh9LmxvYWRlcl9fdGV4dHtkaXNwbGF5OmJsb2NrO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7bWFyZ2luLWJsb2NrLXN0YXJ0OmNhbGModmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSkgKyAxLjVyZW0pfS5sb2FkZXJfX3BlcmNlbnRhZ2V7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jazt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLWZvbnQtc2l6ZSk7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSk7aW5zZXQtaW5saW5lLXN0YXJ0OjUwJTttYXJnaW4taW5saW5lLXN0YXJ0OmNhbGModmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSkgLyAyICogLTEpO2xpbmUtaGVpZ2h0OjAuMjU7dHJhbnNmb3JtOnNjYWxlKDEsIDEpfS5sb2FkZXJfX3N2Z3N7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3c6dmlzaWJsZTtvcGFjaXR5OjE7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSk7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKTtpbnNldC1pbmxpbmUtc3RhcnQ6NTAlO21hcmdpbi1pbmxpbmUtc3RhcnQ6Y2FsYyh2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKSAvIDIgKiAtMSk7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdykgLyB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikgKiA2LjY2IC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTthbmltYXRpb24tbmFtZTpsb2FkZXItY2xvY2t3aXNlfS5sb2FkZXJfX3N2Z3twb3NpdGlvbjphYnNvbHV0ZTtpbnNldC1ibG9jay1zdGFydDowcHg7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7b3ZlcmZsb3c6dmlzaWJsZTtpbnNldC1pbmxpbmUtc3RhcnQ6MDtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKTtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUpO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXJ9QHN1cHBvcnRzIChkaXNwbGF5OiBncmlkKXsubG9hZGVyX19zdmctLTF7YW5pbWF0aW9uLW5hbWU6bG9hZGVyLW9mZnNldC0xfS5sb2FkZXJfX3N2Zy0tMnthbmltYXRpb24tbmFtZTpsb2FkZXItb2Zmc2V0LTJ9LmxvYWRlcl9fc3ZnLS0ze2FuaW1hdGlvbi1uYW1lOmxvYWRlci1vZmZzZXQtM319Omhvc3QoW3R5cGU9ZGV0ZXJtaW5hdGVdKXthbmltYXRpb246bm9uZTtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9Omhvc3QoW3R5cGU9ZGV0ZXJtaW5hdGVdKSAubG9hZGVyX19zdmdze2FuaW1hdGlvbjpub25lfTpob3N0KFt0eXBlPWRldGVybWluYXRlXSkgLmxvYWRlcl9fc3ZnLS0ze2FuaW1hdGlvbjpub25lO3N0cm9rZTp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTtzdHJva2UtZGFzaGFycmF5OjE1MC43OTYzMjt0cmFuc2Zvcm06cm90YXRlKC05MGRlZyk7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3QpIGxpbmVhcn06aG9zdChbaW5saW5lXSl7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjBweDthbmltYXRpb246bm9uZTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDoyO3BhZGRpbmctYmxvY2s6MHB4O2Jsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmUpO21pbi1ibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKTtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSk7bWFyZ2luLWlubGluZS1lbmQ6Y2FsYyh2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSkgKiAwLjUpO3ZlcnRpY2FsLWFsaWduOmNhbGModmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmUpICogLTEgKiAwLjIpfTpob3N0KFtpbmxpbmVdKSAubG9hZGVyX19zdmdze2luc2V0LWJsb2NrLXN0YXJ0OjBweDttYXJnaW46MHB4O2luc2V0LWlubGluZS1zdGFydDowO2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKTtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKX06aG9zdChbaW5saW5lXSkgLmxvYWRlcl9fc3Zne2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKTtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKX06aG9zdChbY29tcGxldGVdKXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlKDAuNzUsIDAuNzUpO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zaXRpb246b3BhY2l0eSB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSBsaW5lYXIgMTAwMG1zLCB0cmFuc2Zvcm0gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bSkgbGluZWFyIDEwMDBtc306aG9zdChbY29tcGxldGVdKSAubG9hZGVyX19zdmdze29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUoMC43NSwgMC43NSk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNpdGlvbjpvcGFjaXR5IGNhbGMoMTgwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpIGxpbmVhciA4MDBtcywgdHJhbnNmb3JtIGNhbGMoMTgwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpIGxpbmVhciA4MDBtc306aG9zdChbY29tcGxldGVdKSAubG9hZGVyX19wZXJjZW50YWdle2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO3RyYW5zZm9ybTpzY2FsZSgxLjA1LCAxLjA1KTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2l0aW9uOmNvbG9yIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGxpbmVhciwgdHJhbnNmb3JtIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGxpbmVhcn0ubG9hZGVyX19zdmctLTF7c3Ryb2tlLWRhc2hhcnJheToyNy45MjUyNDQ0NDQ0IDEzOS42MjYyMjIyMjIyO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSAqIDQuOCAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9QGtleWZyYW1lcyBsb2FkZXItb2Zmc2V0LTF7MCV7c3Ryb2tlLWRhc2hhcnJheToyNy45MjUyNDQ0NDQ0IDI1MS4zMjcyO3N0cm9rZS1kYXNob2Zmc2V0OjB9NTAle3N0cm9rZS1kYXNoYXJyYXk6MTM5LjYyNjIyMjIyMjIgMTM5LjYyNjIyMjIyMjI7c3Ryb2tlLWRhc2hvZmZzZXQ6LTgzLjc3NTczMzMzMzN9MTAwJXtzdHJva2UtZGFzaGFycmF5OjI3LjkyNTI0NDQ0NDQgMjUxLjMyNzI7c3Ryb2tlLWRhc2hvZmZzZXQ6LTI3OS4yNTI0NDQ0NDQ0fX0ubG9hZGVyX19zdmctLTJ7c3Ryb2tlLWRhc2hhcnJheTo1NS44NTA0ODg4ODg5IDEzOS42MjYyMjIyMjIyO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSAqIDYuNCAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9QGtleWZyYW1lcyBsb2FkZXItb2Zmc2V0LTJ7MCV7c3Ryb2tlLWRhc2hhcnJheTo1NS44NTA0ODg4ODg5IDIyMy40MDE5NTU1NTU2O3N0cm9rZS1kYXNob2Zmc2V0OjB9NTAle3N0cm9rZS1kYXNoYXJyYXk6MTM5LjYyNjIyMjIyMjIgMTM5LjYyNjIyMjIyMjI7c3Ryb2tlLWRhc2hvZmZzZXQ6LTk3LjczODM1NTU1NTZ9MTAwJXtzdHJva2UtZGFzaGFycmF5OjU1Ljg1MDQ4ODg4ODkgMjIzLjQwMTk1NTU1NTY7c3Ryb2tlLWRhc2hvZmZzZXQ6LTI3OS4yNTI0NDQ0NDQ0fX0ubG9hZGVyX19zdmctLTN7c3Ryb2tlLWRhc2hhcnJheToxMy45NjI2MjIyMjIyIDEzOS42MjYyMjIyMjIyO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSAqIDcuNzM0IC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX1Aa2V5ZnJhbWVzIGxvYWRlci1vZmZzZXQtM3swJXtzdHJva2UtZGFzaGFycmF5OjEzLjk2MjYyMjIyMjIgMjY1LjI4OTgyMjIyMjI7c3Ryb2tlLWRhc2hvZmZzZXQ6MH01MCV7c3Ryb2tlLWRhc2hhcnJheToxMzkuNjI2MjIyMjIyMiAxMzkuNjI2MjIyMjIyMjtzdHJva2UtZGFzaG9mZnNldDotNzYuNzk0NDIyMjIyMn0xMDAle3N0cm9rZS1kYXNoYXJyYXk6MTMuOTYyNjIyMjIyMiAyNjUuMjg5ODIyMjIyMjtzdHJva2UtZGFzaG9mZnNldDotMjc5LjI1MjQ0NDQ0NDR9fUBrZXlmcmFtZXMgbG9hZGVyLWNvbG9yLXNoaWZ0ezAle3N0cm9rZTp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX0zMyV7c3Ryb2tlOnZhcigtLWNhbGNpdGUtdWktYnJhbmQtcHJlc3MpfTY2JXtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1icmFuZC1ob3Zlcil9MTAwJXtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9fUBrZXlmcmFtZXMgbG9hZGVyLWNsb2Nrd2lzZXsxMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IExvYWRlciA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5pbmxpbmUgPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnR5cGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52YWx1ZSA9IDA7XG4gICAgdGhpcy50ZXh0ID0gXCJcIjtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbCwgaW5saW5lLCBsYWJlbCwgc2NhbGUsIHRleHQsIHR5cGUsIHZhbHVlIH0gPSB0aGlzO1xuICAgIGNvbnN0IGlkID0gZWwuaWQgfHwgZ3VpZCgpO1xuICAgIGNvbnN0IHJhZGl1c1JhdGlvID0gMC40NTtcbiAgICBjb25zdCBzaXplID0gaW5saW5lID8gdGhpcy5nZXRJbmxpbmVTaXplKHNjYWxlKSA6IHRoaXMuZ2V0U2l6ZShzY2FsZSk7XG4gICAgY29uc3QgcmFkaXVzID0gc2l6ZSAqIHJhZGl1c1JhdGlvO1xuICAgIGNvbnN0IHZpZXdib3ggPSBgMCAwICR7c2l6ZX0gJHtzaXplfWA7XG4gICAgY29uc3QgaXNEZXRlcm1pbmF0ZSA9IHR5cGUgPT09IFwiZGV0ZXJtaW5hdGVcIjtcbiAgICBjb25zdCBjaXJjdW1mZXJlbmNlID0gMiAqIHJhZGl1cyAqIE1hdGguUEk7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSAodmFsdWUgLyAxMDApICogY2lyY3VtZmVyZW5jZTtcbiAgICBjb25zdCByZW1haW5pbmcgPSBjaXJjdW1mZXJlbmNlIC0gcHJvZ3Jlc3M7XG4gICAgY29uc3QgdmFsdWVOb3cgPSBNYXRoLmZsb29yKHZhbHVlKTtcbiAgICBjb25zdCBob3N0QXR0cmlidXRlcyA9IHtcbiAgICAgIFwiYXJpYS12YWx1ZW5vd1wiOiB2YWx1ZU5vdyxcbiAgICAgIFwiYXJpYS12YWx1ZW1pblwiOiAwLFxuICAgICAgXCJhcmlhLXZhbHVlbWF4XCI6IDEwMCxcbiAgICAgIGNvbXBsZXRlOiB2YWx1ZU5vdyA9PT0gMTAwLFxuICAgIH07XG4gICAgY29uc3Qgc3ZnQXR0cmlidXRlcyA9IHsgcjogcmFkaXVzLCBjeDogc2l6ZSAvIDIsIGN5OiBzaXplIC8gMiB9O1xuICAgIGNvbnN0IGRldGVybWluYXRlU3R5bGUgPSB7IFwic3Ryb2tlLWRhc2hhcnJheVwiOiBgJHtwcm9ncmVzc30gJHtyZW1haW5pbmd9YCB9O1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1sYWJlbFwiOiBsYWJlbCwgaWQ6IGlkLCByb2xlOiBcInByb2dyZXNzYmFyXCIsIC4uLihpc0RldGVybWluYXRlID8gaG9zdEF0dHJpYnV0ZXMgOiB7fSkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImxvYWRlcl9fc3Znc1wiIH0sIGgoXCJzdmdcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogXCJsb2FkZXJfX3N2ZyBsb2FkZXJfX3N2Zy0tMVwiLCB2aWV3Qm94OiB2aWV3Ym94IH0sIGgoXCJjaXJjbGVcIiwgeyAuLi5zdmdBdHRyaWJ1dGVzIH0pKSwgaChcInN2Z1wiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBcImxvYWRlcl9fc3ZnIGxvYWRlcl9fc3ZnLS0yXCIsIHZpZXdCb3g6IHZpZXdib3ggfSwgaChcImNpcmNsZVwiLCB7IC4uLnN2Z0F0dHJpYnV0ZXMgfSkpLCBoKFwic3ZnXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IFwibG9hZGVyX19zdmcgbG9hZGVyX19zdmctLTNcIiwgdmlld0JveDogdmlld2JveCwgLi4uKGlzRGV0ZXJtaW5hdGUgPyB7IHN0eWxlOiBkZXRlcm1pbmF0ZVN0eWxlIH0gOiB7fSkgfSwgaChcImNpcmNsZVwiLCB7IC4uLnN2Z0F0dHJpYnV0ZXMgfSkpKSwgdGV4dCAmJiBoKFwiZGl2XCIsIHsgY2xhc3M6IFwibG9hZGVyX190ZXh0XCIgfSwgdGV4dCksIGlzRGV0ZXJtaW5hdGUgJiYgaChcImRpdlwiLCB7IGNsYXNzOiBcImxvYWRlcl9fcGVyY2VudGFnZVwiIH0sIHZhbHVlKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHByb3BlciBzaXplcyBiYXNlZCBvbiB0aGUgc2NhbGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHNjYWxlXG4gICAqL1xuICBnZXRTaXplKHNjYWxlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHM6IDMyLFxuICAgICAgbTogNTYsXG4gICAgICBsOiA4MCxcbiAgICB9W3NjYWxlXTtcbiAgfVxuICBnZXRJbmxpbmVTaXplKHNjYWxlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHM6IDEyLFxuICAgICAgbTogMTYsXG4gICAgICBsOiAyMCxcbiAgICB9W3NjYWxlXTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBsb2FkZXJDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtbG9hZGVyXCIsIHtcbiAgICBcImlubGluZVwiOiBbNTE2XSxcbiAgICBcImxhYmVsXCI6IFsxXSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwidHlwZVwiOiBbNTEzXSxcbiAgICBcInZhbHVlXCI6IFsyXSxcbiAgICBcInRleHRcIjogWzFdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtbG9hZGVyXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWxvYWRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIExvYWRlcik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgTG9hZGVyIGFzIEwsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgQnVpbGQsIGdldEFzc2V0UGF0aCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U3VwcG9ydGVkTG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuXG5jb25zdCBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGUgPSB7fTtcbmFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VCdW5kbGUobGFuZywgY29tcG9uZW50KSB7XG4gIGNvbnN0IGtleSA9IGAke2NvbXBvbmVudH1fJHtsYW5nfWA7XG4gIGlmIChjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XSkge1xuICAgIHJldHVybiBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XTtcbiAgfVxuICBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XSA9IGZldGNoKGdldEFzc2V0UGF0aChgLi9hc3NldHMvJHtjb21wb25lbnR9L3Q5bi9tZXNzYWdlc18ke2xhbmd9Lmpzb25gKSlcbiAgICAudGhlbigocmVzcCkgPT4ge1xuICAgIGlmICghcmVzcC5vaykge1xuICAgICAgdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcC5qc29uKCk7XG4gIH0pXG4gICAgLmNhdGNoKCgpID0+IHRocm93TWVzc2FnZUZldGNoRXJyb3IoKSk7XG4gIHJldHVybiBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XTtcbn1cbmZ1bmN0aW9uIHRocm93TWVzc2FnZUZldGNoRXJyb3IoKSB7XG4gIHRocm93IG5ldyBFcnJvcihcImNvdWxkIG5vdCBmZXRjaCBjb21wb25lbnQgbWVzc2FnZSBidW5kbGVcIik7XG59XG5mdW5jdGlvbiBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQubWVzc2FnZXMgPSB7XG4gICAgLi4uY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyxcbiAgICAuLi5jb21wb25lbnQubWVzc2FnZU92ZXJyaWRlcyxcbiAgfTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgdGhlIG1lc3NhZ2VzIHVzZWQgYnkgdGhlIGNvbXBvbmVudC4gSXQgc2hvdWxkIGJlIGF3YWl0ZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5hc3luYyBmdW5jdGlvbiBzZXRVcE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGNvbXBvbmVudC5lZmZlY3RpdmVMb2NhbGUpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG5hc3luYyBmdW5jdGlvbiBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBjb25zdCB7IGVsIH0gPSBjb21wb25lbnQ7XG4gIGNvbnN0IHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IHRhZy5yZXBsYWNlKFwiY2FsY2l0ZS1cIiwgXCJcIik7XG4gIHJldHVybiBnZXRNZXNzYWdlQnVuZGxlKGdldFN1cHBvcnRlZExvY2FsZShsYW5nLCBcInQ5blwiKSwgY29tcG9uZW50TmFtZSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBtdXN0IGJlIHNldCB1cCBmb3IgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIGRlZmF1bHQgbWVzc2FnZSBidW5kbGUgaWYgdGhlIGxvY2FsZSBjaGFuZ2VzLlxuICpcbiAqIEl0IGNhbiBiZSBzZXQgdXAgaW4gKiplaXRoZXIqKiBvZiB0aGUgZm9sbG93aW5nIHdheXM6XG4gKlxuICogMS4gY2FsbGVkIGZyb20gYExvY2FsaXplZENvbXBvbmVudGAncyBgb25Mb2NhbGVDaGFuZ2VgIG1ldGhvZCBvclxuICogMi4gY2FsbGVkIGZyb20gYSB3YXRjaGVyIGNvbmZpZ3VyZWQgdG8gd2F0Y2ggYExvY2FsaXplZENvbXBvbmVudGAncyBgZWZmZWN0aXZlTG9jYWxlYCBwcm9wXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGxhbmdcbiAqL1xuYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZyk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogKipOb3RlKio6IHRoaXMgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgYExvY2FsaXplZENvbXBvbmVudGAncyBgY29ubmVjdExvY2FsaXplZGAgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgdGVhcnMgZG93biBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgbWVyZ2VNZXNzYWdlcyh0aGlzKTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdE1lc3NhZ2VzIGFzIGMsIGRpc2Nvbm5lY3RNZXNzYWdlcyBhcyBkLCBzZXRVcE1lc3NhZ2VzIGFzIHMsIHVwZGF0ZU1lc3NhZ2VzIGFzIHUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==