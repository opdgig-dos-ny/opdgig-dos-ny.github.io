"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_chip_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/chip.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/chip.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ Chip),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _conditionalSlot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conditionalSlot.js */ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */












const CSS = {
  title: "title",
  close: "close",
  imageContainer: "image-container",
  chipIcon: "chip-icon",
  textSlotted: "text--slotted",
  container: "container",
  imageSlotted: "image--slotted",
  closable: "closable",
  multiple: "multiple",
  selectable: "selectable",
  selectIcon: "select-icon",
  selectIconActive: "select-icon--active",
  nonInteractive: "non-interactive",
  isCircle: "is-circle",
};
const SLOTS = {
  image: "image",
};
const ICONS = {
  close: "x",
  unchecked: "circle",
  checkedSingle: "circle-f",
  checked: "check-circle-f",
};

const chipCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]){block-size:1.5rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-s-internal:0.25rem;--calcite-chip-spacing-l-internal:0.5rem}:host([scale=s]) .close,:host([scale=s]) .select-icon--active{block-size:1rem;inline-size:1rem}:host([scale=s]) .image-container{block-size:1.25rem;inline-size:1.25rem}:host([scale=s]) .container.is-circle{block-size:1.5rem;inline-size:1.5rem}:host([scale=m]){block-size:2rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-s-internal:0.375rem;--calcite-chip-spacing-l-internal:0.5rem}:host([scale=m]) .close,:host([scale=m]) .image-container,:host([scale=m]) .select-icon--active{block-size:1.5rem;inline-size:1.5rem}:host([scale=m]) .container.is-circle{block-size:2rem;inline-size:2rem}:host([scale=l]){block-size:2.75rem;font-size:var(--calcite-font-size-0);--calcite-chip-spacing-s-internal:0.5rem;--calcite-chip-spacing-l-internal:0.75rem}:host([scale=l]) .image-container,:host([scale=l]) .close,:host([scale=l]) .select-icon--active{block-size:2rem;inline-size:2rem}:host([scale=l]) .container.is-circle{block-size:2.75rem;inline-size:2.75rem}:host{display:inline-flex;cursor:default;border-radius:9999px}.container{box-sizing:border-box;display:inline-flex;block-size:100%;max-inline-size:100%;align-items:center;justify-content:center;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);font-weight:var(--calcite-font-weight-medium);outline-color:transparent}.container:not(.is-circle){padding-inline:var(--calcite-chip-spacing-s-internal)}.container.selectable{cursor:pointer}.container:not(.non-interactive):focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([scale=s]) .container.image--slotted{padding-inline-start:calc(0.125rem / 2)}:host([scale=s]) .container.is-circle{padding-inline:0}.container.text--slotted .title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-inline:var(--calcite-chip-spacing-s-internal)}.container:not(.text--slotted) .title{display:none}.container:not(.image--slotted) .image-container{display:none}.container.closable{padding-inline-end:calc(var(--calcite-chip-spacing-l-internal) / 2)}.container:not(.is-circle).image--slotted{padding-inline-start:calc(var(--calcite-chip-spacing-l-internal) / 2)}.container:not(.is-circle).image--slotted .image-container{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle).image--slotted .image-container~.chip-icon{margin-inline-start:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle).selectable:not(.text--slotted) .chip-icon{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.selectable):not(.text--slotted) .chip-icon{margin-inline-start:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.text--slotted) .chip-icon{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.text-slotted).image--slotted .image-container{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.closable):not(.text--slotted).image--slotted.selectable .image-container{margin-inline-end:0}.container:not(.is-circle):not(.closable):not(.text--slotted).image--slotted.selectable .image-container~.chip-icon{margin-inline-start:calc(var(--calcite-chip-spacing-s-internal) * 2)}.chip-icon{position:relative;margin-block:0px;display:inline-flex;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline:var(--calcite-chip-spacing-s-internal)}.image-container{display:inline-flex;overflow:hidden;align-items:center;justify-content:center;pointer-events:none}.close{margin:0px;cursor:pointer;align-items:center;border-style:none;background-color:transparent;color:var(--calcite-ui-text-1);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;-webkit-appearance:none;display:flex;border-radius:50%;align-content:center;justify-content:center;--calcite-chip-transparent-hover:var(--calcite-button-transparent-hover);--calcite-chip-transparent-press:var(--calcite-button-transparent-press)}.close:hover{background-color:var(--calcite-chip-transparent-hover)}.close:focus{background-color:var(--calcite-chip-transparent-hover);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.close:active{background-color:var(--calcite-chip-transparent-press)}.close calcite-icon{color:inherit}.select-icon{align-self:center;justify-content:center;align-items:center;display:flex;inset-block-start:-1px;position:relative;visibility:hidden;inline-size:0;opacity:0;transition:opacity 0.15s ease-in-out, inline-size 0.15s ease-in-out}.select-icon.select-icon--active{visibility:visible;opacity:0.5}.container:not(.is-circle).image--slotted .select-icon.select-icon--active{margin-inline-end:var(--calcite-chip-spacing-s-internal)}:host([selected]) .select-icon{opacity:1}.container:hover .select-icon--active{opacity:1}slot[name=image]::slotted(*){display:flex;block-size:100%;inline-size:100%;overflow:hidden;border-radius:50%}:host([kind=neutral]){background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host([kind=neutral]) .container{border-color:transparent}:host([kind=neutral]) .close{color:var(--calcite-ui-text-3)}:host([kind=neutral]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([kind=inverse]){background-color:var(--calcite-ui-inverse);color:var(--calcite-ui-text-inverse)}:host([kind=inverse]) .container{border-color:transparent}:host([kind=inverse]) .close{color:var(--calcite-ui-text-inverse)}:host([kind=inverse]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-inverse))}:host([kind=brand]){background-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-inverse)}:host([kind=brand]) .container{border-color:transparent}:host([kind=brand]) .close{color:var(--calcite-ui-text-inverse)}:host([kind=brand]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-inverse))}:host([appearance=outline-fill]),:host([appearance=outline]){background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1)}:host([appearance=outline-fill]) .close,:host([appearance=outline]) .close{color:var(--calcite-ui-text-3)}:host([appearance=outline-fill]) .chip-icon,:host([appearance=outline]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([appearance=outline-fill]){background-color:var(--calcite-ui-foreground-1)}:host([appearance=outline]){background-color:transparent}:host([kind=neutral][appearance=outline-fill]) .container,:host([kind=neutral][appearance=outline]) .container{border-color:var(--calcite-ui-border-1)}:host([kind=inverse][appearance=outline-fill]) .container,:host([kind=inverse][appearance=outline]) .container{border-color:var(--calcite-ui-border-inverse)}:host([kind=brand][appearance=outline-fill]) .container,:host([kind=brand][appearance=outline]) .container{border-color:var(--calcite-ui-brand)}:host([kind=brand][appearance=solid]) button,:host([kind=inverse][appearance=solid]) button{outline-color:var(--calcite-ui-text-inverse)}:host([closed]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}";

const Chip = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteChipClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteChipClose", 6);
    this.calciteChipSelect = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteChipSelect", 6);
    this.calciteInternalChipKeyEvent = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteInternalChipKeyEvent", 6);
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_6__.c)("mutation", () => this.updateHasText());
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.close = () => {
      this.calciteChipClose.emit();
      this.selected = false;
      this.closed = true;
    };
    this.closeButtonKeyDownHandler = (event) => {
      if ((0,_key_js__WEBPACK_IMPORTED_MODULE_7__.i)(event.key)) {
        event.preventDefault();
        this.close();
      }
    };
    this.handleSlotImageChange = (event) => {
      this.hasImage = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleEmittingEvent = () => {
      if (this.interactive) {
        this.calciteChipSelect.emit();
      }
    };
    this.disabled = false;
    this.appearance = "solid";
    this.kind = "neutral";
    this.closable = false;
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.scale = "m";
    this.label = undefined;
    this.value = undefined;
    this.closed = false;
    this.selectionMode = "none";
    this.selected = false;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.interactive = false;
    this.defaultMessages = undefined;
    this.effectiveLocale = undefined;
    this.hasText = false;
    this.hasImage = false;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_4__.u)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    this.mutationObserver?.disconnect();
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
    if (_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.Build.isBrowser) {
      await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
      this.updateHasText();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  keyDownHandler(event) {
    if (event.target === this.el) {
      switch (event.key) {
        case " ":
        case "Enter":
          this.handleEmittingEvent();
          event.preventDefault();
          break;
        case "ArrowRight":
        case "ArrowLeft":
        case "Home":
        case "End":
          this.calciteInternalChipKeyEvent.emit(event);
          event.preventDefault();
          break;
      }
    }
  }
  clickHandler() {
    if (!this.interactive && this.closable) {
      this.closeButtonEl.focus();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    if (!this.disabled && this.interactive) {
      this.containerEl?.focus();
    }
    else if (!this.disabled && this.closable) {
      this.closeButtonEl?.focus();
    }
  }
  updateHasText() {
    this.hasText = this.el.textContent.trim().length > 0;
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderChipImage() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: CSS.imageContainer }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", { name: SLOTS.image, onSlotchange: this.handleSlotImageChange })));
  }
  renderSelectionIcon() {
    const icon = this.selectionMode === "multiple" && this.selected
      ? ICONS.checked
      : this.selectionMode === "multiple"
        ? ICONS.unchecked
        : this.selected
          ? ICONS.checkedSingle
          : undefined;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: {
        [CSS.selectIcon]: true,
        [CSS.selectIconActive]: this.selectionMode === "multiple" || this.selected,
      } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("calcite-icon", { icon: icon, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_8__.g)(this.scale) })));
  }
  renderCloseButton() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("button", { "aria-label": this.messages.dismissLabel, class: CSS.close, onClick: this.close, onKeyDown: this.closeButtonKeyDownHandler, tabIndex: this.disabled ? -1 : 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.closeButtonEl = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("calcite-icon", { icon: ICONS.close, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_8__.g)(this.scale) })));
  }
  renderIcon() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("calcite-icon", { class: CSS.chipIcon, flipRtl: this.iconFlipRtl, icon: this.icon, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_8__.g)(this.scale) }));
  }
  render() {
    const disableInteraction = this.disabled || (!this.disabled && !this.interactive);
    const role = this.selectionMode === "multiple" && this.interactive
      ? "checkbox"
      : this.selectionMode !== "none" && this.interactive
        ? "radio"
        : this.interactive
          ? "button"
          : undefined;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.Host, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { "aria-checked": this.selectionMode !== "none" && this.interactive
        ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.selected)
        : undefined, "aria-disabled": disableInteraction ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.disabled) : undefined, "aria-label": this.label, class: {
        [CSS.container]: true,
        [CSS.textSlotted]: this.hasText,
        [CSS.imageSlotted]: this.hasImage,
        [CSS.selectable]: this.selectionMode !== "none",
        [CSS.multiple]: this.selectionMode === "multiple",
        [CSS.closable]: this.closable,
        [CSS.nonInteractive]: !this.interactive,
        [CSS.isCircle]: !this.closable &&
          !this.hasText &&
          (!this.icon || !this.hasImage) &&
          (this.selectionMode === "none" ||
            (!!this.selectionMode && this.selectionMode !== "multiple" && !this.selected)),
      }, onClick: this.handleEmittingEvent, role: role, tabIndex: disableInteraction ? -1 : 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.containerEl = el) }, this.selectionMode !== "none" && this.renderSelectionIcon(), this.renderChipImage(), this.icon && this.renderIcon(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { class: CSS.title }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", null)), this.closable && this.renderCloseButton())));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return chipCss; }
}, [1, "calcite-chip", {
    "disabled": [516],
    "appearance": [513],
    "kind": [513],
    "closable": [516],
    "icon": [513],
    "iconFlipRtl": [516, "icon-flip-rtl"],
    "scale": [513],
    "label": [1],
    "value": [8],
    "closed": [1540],
    "selectionMode": [1, "selection-mode"],
    "selected": [1540],
    "messageOverrides": [1040],
    "messages": [1040],
    "interactive": [4],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "hasText": [32],
    "hasImage": [32],
    "setFocus": [64]
  }, [[0, "keydown", "keyDownHandler"], [0, "click", "clickHandler"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-chip", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-chip":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Chip);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_9__.d)();
      }
      break;
  } });
}
defineCustomElement();




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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOTQ2M2VlYjBiZGFiZmMyYTE0MWMxMTExMDJhMTM3NDguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0g7QUFDckM7QUFDb0M7QUFDUDtBQUNJO0FBQ0M7QUFDckM7QUFDekI7QUFDTDtBQUNHO0FBQ0k7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQyxlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsaUJBQWlCLGtCQUFrQixzQ0FBc0MsMENBQTBDLHlDQUF5Qyw4REFBOEQsZ0JBQWdCLGlCQUFpQixrQ0FBa0MsbUJBQW1CLG9CQUFvQixzQ0FBc0Msa0JBQWtCLG1CQUFtQixpQkFBaUIsZ0JBQWdCLHNDQUFzQywyQ0FBMkMseUNBQXlDLGdHQUFnRyxrQkFBa0IsbUJBQW1CLHNDQUFzQyxnQkFBZ0IsaUJBQWlCLGlCQUFpQixtQkFBbUIscUNBQXFDLHlDQUF5QywwQ0FBMEMsZ0dBQWdHLGdCQUFnQixpQkFBaUIsc0NBQXNDLG1CQUFtQixvQkFBb0IsTUFBTSxvQkFBb0IsZUFBZSxxQkFBcUIsV0FBVyxzQkFBc0Isb0JBQW9CLGdCQUFnQixxQkFBcUIsbUJBQW1CLHVCQUF1QixxQkFBcUIsaUJBQWlCLG1CQUFtQix3Q0FBd0MsOENBQThDLDBCQUEwQiwyQkFBMkIsc0RBQXNELHNCQUFzQixlQUFlLHVDQUF1Qyx5RUFBeUUsb1BBQW9QLDJDQUEyQyx3Q0FBd0Msc0NBQXNDLGlCQUFpQixnQ0FBZ0MsZ0JBQWdCLHVCQUF1QixtQkFBbUIsc0RBQXNELHNDQUFzQyxhQUFhLGlEQUFpRCxhQUFhLG9CQUFvQixvRUFBb0UsMENBQTBDLHNFQUFz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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkNBQXFCO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFK0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hTL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNxRTtBQUNoQjs7QUFFckQ7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3RUFBd0U7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0RBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0VBQXdFO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQixJQUFJLG1GQUFXO0FBQ2YsR0FBRztBQUNIOztBQUV5RiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jaGlwLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jb25kaXRpb25hbFNsb3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIEJ1aWxkLCBoLCBIb3N0IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgZSBhcyBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50LCB0IGFzIHRvQXJpYUJvb2xlYW4gfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQsIGQgYXMgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCB9IGZyb20gJy4vY29uZGl0aW9uYWxTbG90LmpzJztcbmltcG9ydCB7IHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIGMgYXMgY29tcG9uZW50Rm9jdXNhYmxlIH0gZnJvbSAnLi9sb2FkYWJsZS5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUgfSBmcm9tICcuL2ludGVyYWN0aXZlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcbmltcG9ydCB7IGkgYXMgaXNBY3RpdmF0aW9uS2V5IH0gZnJvbSAnLi9rZXkuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRJY29uU2NhbGUgfSBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMSB9IGZyb20gJy4vaWNvbi5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgdGl0bGU6IFwidGl0bGVcIixcbiAgY2xvc2U6IFwiY2xvc2VcIixcbiAgaW1hZ2VDb250YWluZXI6IFwiaW1hZ2UtY29udGFpbmVyXCIsXG4gIGNoaXBJY29uOiBcImNoaXAtaWNvblwiLFxuICB0ZXh0U2xvdHRlZDogXCJ0ZXh0LS1zbG90dGVkXCIsXG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgaW1hZ2VTbG90dGVkOiBcImltYWdlLS1zbG90dGVkXCIsXG4gIGNsb3NhYmxlOiBcImNsb3NhYmxlXCIsXG4gIG11bHRpcGxlOiBcIm11bHRpcGxlXCIsXG4gIHNlbGVjdGFibGU6IFwic2VsZWN0YWJsZVwiLFxuICBzZWxlY3RJY29uOiBcInNlbGVjdC1pY29uXCIsXG4gIHNlbGVjdEljb25BY3RpdmU6IFwic2VsZWN0LWljb24tLWFjdGl2ZVwiLFxuICBub25JbnRlcmFjdGl2ZTogXCJub24taW50ZXJhY3RpdmVcIixcbiAgaXNDaXJjbGU6IFwiaXMtY2lyY2xlXCIsXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIGltYWdlOiBcImltYWdlXCIsXG59O1xuY29uc3QgSUNPTlMgPSB7XG4gIGNsb3NlOiBcInhcIixcbiAgdW5jaGVja2VkOiBcImNpcmNsZVwiLFxuICBjaGVja2VkU2luZ2xlOiBcImNpcmNsZS1mXCIsXG4gIGNoZWNrZWQ6IFwiY2hlY2stY2lyY2xlLWZcIixcbn07XG5cbmNvbnN0IGNoaXBDc3MgPSBcIjpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KFtzY2FsZT1zXSl7YmxvY2stc2l6ZToxLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTstLWNhbGNpdGUtY2hpcC1zcGFjaW5nLXMtaW50ZXJuYWw6MC4yNXJlbTstLWNhbGNpdGUtY2hpcC1zcGFjaW5nLWwtaW50ZXJuYWw6MC41cmVtfTpob3N0KFtzY2FsZT1zXSkgLmNsb3NlLDpob3N0KFtzY2FsZT1zXSkgLnNlbGVjdC1pY29uLS1hY3RpdmV7YmxvY2stc2l6ZToxcmVtO2lubGluZS1zaXplOjFyZW19Omhvc3QoW3NjYWxlPXNdKSAuaW1hZ2UtY29udGFpbmVye2Jsb2NrLXNpemU6MS4yNXJlbTtpbmxpbmUtc2l6ZToxLjI1cmVtfTpob3N0KFtzY2FsZT1zXSkgLmNvbnRhaW5lci5pcy1jaXJjbGV7YmxvY2stc2l6ZToxLjVyZW07aW5saW5lLXNpemU6MS41cmVtfTpob3N0KFtzY2FsZT1tXSl7YmxvY2stc2l6ZToycmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7LS1jYWxjaXRlLWNoaXAtc3BhY2luZy1zLWludGVybmFsOjAuMzc1cmVtOy0tY2FsY2l0ZS1jaGlwLXNwYWNpbmctbC1pbnRlcm5hbDowLjVyZW19Omhvc3QoW3NjYWxlPW1dKSAuY2xvc2UsOmhvc3QoW3NjYWxlPW1dKSAuaW1hZ2UtY29udGFpbmVyLDpob3N0KFtzY2FsZT1tXSkgLnNlbGVjdC1pY29uLS1hY3RpdmV7YmxvY2stc2l6ZToxLjVyZW07aW5saW5lLXNpemU6MS41cmVtfTpob3N0KFtzY2FsZT1tXSkgLmNvbnRhaW5lci5pcy1jaXJjbGV7YmxvY2stc2l6ZToycmVtO2lubGluZS1zaXplOjJyZW19Omhvc3QoW3NjYWxlPWxdKXtibG9jay1zaXplOjIuNzVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApOy0tY2FsY2l0ZS1jaGlwLXNwYWNpbmctcy1pbnRlcm5hbDowLjVyZW07LS1jYWxjaXRlLWNoaXAtc3BhY2luZy1sLWludGVybmFsOjAuNzVyZW19Omhvc3QoW3NjYWxlPWxdKSAuaW1hZ2UtY29udGFpbmVyLDpob3N0KFtzY2FsZT1sXSkgLmNsb3NlLDpob3N0KFtzY2FsZT1sXSkgLnNlbGVjdC1pY29uLS1hY3RpdmV7YmxvY2stc2l6ZToycmVtO2lubGluZS1zaXplOjJyZW19Omhvc3QoW3NjYWxlPWxdKSAuY29udGFpbmVyLmlzLWNpcmNsZXtibG9jay1zaXplOjIuNzVyZW07aW5saW5lLXNpemU6Mi43NXJlbX06aG9zdHtkaXNwbGF5OmlubGluZS1mbGV4O2N1cnNvcjpkZWZhdWx0O2JvcmRlci1yYWRpdXM6OTk5OXB4fS5jb250YWluZXJ7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6aW5saW5lLWZsZXg7YmxvY2stc2l6ZToxMDAlO21heC1pbmxpbmUtc2l6ZToxMDAlO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JvcmRlci1yYWRpdXM6OTk5OXB4O2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH0uY29udGFpbmVyOm5vdCguaXMtY2lyY2xlKXtwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLWNoaXAtc3BhY2luZy1zLWludGVybmFsKX0uY29udGFpbmVyLnNlbGVjdGFibGV7Y3Vyc29yOnBvaW50ZXJ9LmNvbnRhaW5lcjpub3QoLm5vbi1pbnRlcmFjdGl2ZSk6Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9Omhvc3QoW3NjYWxlPXNdKSAuY29udGFpbmVyLmltYWdlLS1zbG90dGVke3BhZGRpbmctaW5saW5lLXN0YXJ0OmNhbGMoMC4xMjVyZW0gLyAyKX06aG9zdChbc2NhbGU9c10pIC5jb250YWluZXIuaXMtY2lyY2xle3BhZGRpbmctaW5saW5lOjB9LmNvbnRhaW5lci50ZXh0LS1zbG90dGVkIC50aXRsZXtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7cGFkZGluZy1pbmxpbmU6dmFyKC0tY2FsY2l0ZS1jaGlwLXNwYWNpbmctcy1pbnRlcm5hbCl9LmNvbnRhaW5lcjpub3QoLnRleHQtLXNsb3R0ZWQpIC50aXRsZXtkaXNwbGF5Om5vbmV9LmNvbnRhaW5lcjpub3QoLmltYWdlLS1zbG90dGVkKSAuaW1hZ2UtY29udGFpbmVye2Rpc3BsYXk6bm9uZX0uY29udGFpbmVyLmNsb3NhYmxle3BhZGRpbmctaW5saW5lLWVuZDpjYWxjKHZhcigtLWNhbGNpdGUtY2hpcC1zcGFjaW5nLWwtaW50ZXJuYWwpIC8gMil9LmNvbnRhaW5lcjpub3QoLmlzLWNpcmNsZSkuaW1hZ2UtLXNsb3R0ZWR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6Y2FsYyh2YXIoLS1jYWxjaXRlLWNoaXAtc3BhY2luZy1sLWludGVybmFsKSAvIDIpfS5jb250YWluZXI6bm90KC5pcy1jaXJjbGUpLmltYWdlLS1zbG90dGVkIC5pbWFnZS1jb250YWluZXJ7bWFyZ2luLWlubGluZS1lbmQ6dmFyKC0tY2FsY2l0ZS1jaGlwLXNwYWNpbmctcy1pbnRlcm5hbCl9LmNvbnRhaW5lcjpub3QoLmlzLWNpcmNsZSkuaW1hZ2UtLXNsb3R0ZWQgLmltYWdlLWNvbnRhaW5lcn4uY2hpcC1pY29ue21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0tY2FsY2l0ZS1jaGlwLXNwYWNpbmctcy1pbnRlcm5hbCl9LmNvbnRhaW5lcjpub3QoLmlzLWNpcmNsZSkuc2VsZWN0YWJsZTpub3QoLnRleHQtLXNsb3R0ZWQpIC5jaGlwLWljb257bWFyZ2luLWlubGluZS1lbmQ6dmFyKC0tY2FsY2l0ZS1jaGlwLXNwYWNpbmctcy1pbnRlcm5hbCl9LmNvbnRhaW5lcjpub3QoLmlzLWNpcmNsZSk6bm90KC5zZWxlY3RhYmxlKTpub3QoLnRleHQtLXNsb3R0ZWQpIC5jaGlwLWljb257bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1jYWxjaXRlLWNoaXAtc3BhY2luZy1zLWludGVybmFsKX0uY29udGFpbmVyOm5vdCguaXMtY2lyY2xlKTpub3QoLnRleHQtLXNsb3R0ZWQpIC5jaGlwLWljb257bWFyZ2luLWlubGluZS1lbmQ6dmFyKC0tY2FsY2l0ZS1jaGlwLXNwYWNpbmctcy1pbnRlcm5hbCl9LmNvbnRhaW5lcjpub3QoLmlzLWNpcmNsZSk6bm90KC50ZXh0LXNsb3R0ZWQpLmltYWdlLS1zbG90dGVkIC5pbWFnZS1jb250YWluZXJ7bWFyZ2luLWlubGluZS1lbmQ6dmFyKC0tY2FsY2l0ZS1jaGlwLXNwYWNpbmctcy1pbnRlcm5hbCl9LmNvbnRhaW5lcjpub3QoLmlzLWNpcmNsZSk6bm90KC5jbG9zYWJsZSk6bm90KC50ZXh0LS1zbG90dGVkKS5pbWFnZS0tc2xvdHRlZC5zZWxlY3RhYmxlIC5pbWFnZS1jb250YWluZXJ7bWFyZ2luLWlubGluZS1lbmQ6MH0uY29udGFpbmVyOm5vdCguaXMtY2lyY2xlKTpub3QoLmNsb3NhYmxlKTpub3QoLnRleHQtLXNsb3R0ZWQpLmltYWdlLS1zbG90dGVkLnNlbGVjdGFibGUgLmltYWdlLWNvbnRhaW5lcn4uY2hpcC1pY29ue21hcmdpbi1pbmxpbmUtc3RhcnQ6Y2FsYyh2YXIoLS1jYWxjaXRlLWNoaXAtc3BhY2luZy1zLWludGVybmFsKSAqIDIpfS5jaGlwLWljb257cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLWJsb2NrOjBweDtkaXNwbGF5OmlubGluZS1mbGV4O3RyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTttYXJnaW4taW5saW5lOnZhcigtLWNhbGNpdGUtY2hpcC1zcGFjaW5nLXMtaW50ZXJuYWwpfS5pbWFnZS1jb250YWluZXJ7ZGlzcGxheTppbmxpbmUtZmxleDtvdmVyZmxvdzpoaWRkZW47YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7cG9pbnRlci1ldmVudHM6bm9uZX0uY2xvc2V7bWFyZ2luOjBweDtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Ym9yZGVyLXN0eWxlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudDt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwczstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTtkaXNwbGF5OmZsZXg7Ym9yZGVyLXJhZGl1czo1MCU7YWxpZ24tY29udGVudDpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjstLWNhbGNpdGUtY2hpcC10cmFuc3BhcmVudC1ob3Zlcjp2YXIoLS1jYWxjaXRlLWJ1dHRvbi10cmFuc3BhcmVudC1ob3Zlcik7LS1jYWxjaXRlLWNoaXAtdHJhbnNwYXJlbnQtcHJlc3M6dmFyKC0tY2FsY2l0ZS1idXR0b24tdHJhbnNwYXJlbnQtcHJlc3MpfS5jbG9zZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtY2hpcC10cmFuc3BhcmVudC1ob3Zlcil9LmNsb3NlOmZvY3Vze2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS1jaGlwLXRyYW5zcGFyZW50LWhvdmVyKTtvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9LmNsb3NlOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtY2hpcC10cmFuc3BhcmVudC1wcmVzcyl9LmNsb3NlIGNhbGNpdGUtaWNvbntjb2xvcjppbmhlcml0fS5zZWxlY3QtaWNvbnthbGlnbi1zZWxmOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7aW5zZXQtYmxvY2stc3RhcnQ6LTFweDtwb3NpdGlvbjpyZWxhdGl2ZTt2aXNpYmlsaXR5OmhpZGRlbjtpbmxpbmUtc2l6ZTowO29wYWNpdHk6MDt0cmFuc2l0aW9uOm9wYWNpdHkgMC4xNXMgZWFzZS1pbi1vdXQsIGlubGluZS1zaXplIDAuMTVzIGVhc2UtaW4tb3V0fS5zZWxlY3QtaWNvbi5zZWxlY3QtaWNvbi0tYWN0aXZle3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjAuNX0uY29udGFpbmVyOm5vdCguaXMtY2lyY2xlKS5pbWFnZS0tc2xvdHRlZCAuc2VsZWN0LWljb24uc2VsZWN0LWljb24tLWFjdGl2ZXttYXJnaW4taW5saW5lLWVuZDp2YXIoLS1jYWxjaXRlLWNoaXAtc3BhY2luZy1zLWludGVybmFsKX06aG9zdChbc2VsZWN0ZWRdKSAuc2VsZWN0LWljb257b3BhY2l0eToxfS5jb250YWluZXI6aG92ZXIgLnNlbGVjdC1pY29uLS1hY3RpdmV7b3BhY2l0eToxfXNsb3RbbmFtZT1pbWFnZV06OnNsb3R0ZWQoKil7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO292ZXJmbG93OmhpZGRlbjtib3JkZXItcmFkaXVzOjUwJX06aG9zdChba2luZD1uZXV0cmFsXSl7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFtraW5kPW5ldXRyYWxdKSAuY29udGFpbmVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudH06aG9zdChba2luZD1uZXV0cmFsXSkgLmNsb3Nle2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX06aG9zdChba2luZD1uZXV0cmFsXSkgLmNoaXAtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWljb24tY29sb3IsIHZhcigtLWNhbGNpdGUtdWktdGV4dC0zKSl9Omhvc3QoW2tpbmQ9aW52ZXJzZV0pe2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1pbnZlcnNlKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtaW52ZXJzZSl9Omhvc3QoW2tpbmQ9aW52ZXJzZV0pIC5jb250YWluZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fTpob3N0KFtraW5kPWludmVyc2VdKSAuY2xvc2V7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LWludmVyc2UpfTpob3N0KFtraW5kPWludmVyc2VdKSAuY2hpcC1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktaWNvbi1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS10ZXh0LWludmVyc2UpKX06aG9zdChba2luZD1icmFuZF0pe2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LWludmVyc2UpfTpob3N0KFtraW5kPWJyYW5kXSkgLmNvbnRhaW5lcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnR9Omhvc3QoW2tpbmQ9YnJhbmRdKSAuY2xvc2V7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LWludmVyc2UpfTpob3N0KFtraW5kPWJyYW5kXSkgLmNoaXAtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWljb24tY29sb3IsIHZhcigtLWNhbGNpdGUtdWktdGV4dC1pbnZlcnNlKSl9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXSksOmhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZV0pe2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdKSAuY2xvc2UsOmhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZV0pIC5jbG9zZXtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXSkgLmNoaXAtaWNvbiw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXSkgLmNoaXAtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWljb24tY29sb3IsIHZhcigtLWNhbGNpdGUtdWktdGV4dC0zKSl9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXSl7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZV0pe2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Omhvc3QoW2tpbmQ9bmV1dHJhbF1bYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdKSAuY29udGFpbmVyLDpob3N0KFtraW5kPW5ldXRyYWxdW2FwcGVhcmFuY2U9b3V0bGluZV0pIC5jb250YWluZXJ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpfTpob3N0KFtraW5kPWludmVyc2VdW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXSkgLmNvbnRhaW5lciw6aG9zdChba2luZD1pbnZlcnNlXVthcHBlYXJhbmNlPW91dGxpbmVdKSAuY29udGFpbmVye2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnZlcnNlKX06aG9zdChba2luZD1icmFuZF1bYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdKSAuY29udGFpbmVyLDpob3N0KFtraW5kPWJyYW5kXVthcHBlYXJhbmNlPW91dGxpbmVdKSAuY29udGFpbmVye2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChba2luZD1icmFuZF1bYXBwZWFyYW5jZT1zb2xpZF0pIGJ1dHRvbiw6aG9zdChba2luZD1pbnZlcnNlXVthcHBlYXJhbmNlPXNvbGlkXSkgYnV0dG9ue291dGxpbmUtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LWludmVyc2UpfTpob3N0KFtjbG9zZWRdKXtkaXNwbGF5Om5vbmV9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBDaGlwID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVDaGlwQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVDaGlwQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlQ2hpcFNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUNoaXBTZWxlY3RcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxDaGlwS2V5RXZlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbENoaXBLZXlFdmVudFwiLCA2KTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsICgpID0+IHRoaXMudXBkYXRlSGFzVGV4dCgpKTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmNsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjaXRlQ2hpcENsb3NlLmVtaXQoKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICB9O1xuICAgIHRoaXMuY2xvc2VCdXR0b25LZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGlzQWN0aXZhdGlvbktleShldmVudC5rZXkpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU2xvdEltYWdlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc0ltYWdlID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUVtaXR0aW5nRXZlbnQgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pbnRlcmFjdGl2ZSkge1xuICAgICAgICB0aGlzLmNhbGNpdGVDaGlwU2VsZWN0LmVtaXQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmFwcGVhcmFuY2UgPSBcInNvbGlkXCI7XG4gICAgdGhpcy5raW5kID0gXCJuZXV0cmFsXCI7XG4gICAgdGhpcy5jbG9zYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuaWNvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25GbGlwUnRsID0gZmFsc2U7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0aW9uTW9kZSA9IFwibm9uZVwiO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmludGVyYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oYXNUZXh0ID0gZmFsc2U7XG4gICAgdGhpcy5oYXNJbWFnZSA9IGZhbHNlO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICBpZiAoQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICAgICAgdGhpcy51cGRhdGVIYXNUZXh0KCk7XG4gICAgfVxuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5lbCkge1xuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgY2FzZSBcIkVudGVyXCI6XG4gICAgICAgICAgdGhpcy5oYW5kbGVFbWl0dGluZ0V2ZW50KCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgICBjYXNlIFwiRW5kXCI6XG4gICAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxDaGlwS2V5RXZlbnQuZW1pdChldmVudCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2xpY2tIYW5kbGVyKCkge1xuICAgIGlmICghdGhpcy5pbnRlcmFjdGl2ZSAmJiB0aGlzLmNsb3NhYmxlKSB7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uRWwuZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRGb2N1c2FibGUodGhpcyk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMuaW50ZXJhY3RpdmUpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyRWw/LmZvY3VzKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMuY2xvc2FibGUpIHtcbiAgICAgIHRoaXMuY2xvc2VCdXR0b25FbD8uZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlSGFzVGV4dCgpIHtcbiAgICB0aGlzLmhhc1RleHQgPSB0aGlzLmVsLnRleHRDb250ZW50LnRyaW0oKS5sZW5ndGggPiAwO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyQ2hpcEltYWdlKCkge1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuaW1hZ2VDb250YWluZXIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5pbWFnZSwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZVNsb3RJbWFnZUNoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlclNlbGVjdGlvbkljb24oKSB7XG4gICAgY29uc3QgaWNvbiA9IHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJtdWx0aXBsZVwiICYmIHRoaXMuc2VsZWN0ZWRcbiAgICAgID8gSUNPTlMuY2hlY2tlZFxuICAgICAgOiB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGlwbGVcIlxuICAgICAgICA/IElDT05TLnVuY2hlY2tlZFxuICAgICAgICA6IHRoaXMuc2VsZWN0ZWRcbiAgICAgICAgICA/IElDT05TLmNoZWNrZWRTaW5nbGVcbiAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLnNlbGVjdEljb25dOiB0cnVlLFxuICAgICAgICBbQ1NTLnNlbGVjdEljb25BY3RpdmVdOiB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGlwbGVcIiB8fCB0aGlzLnNlbGVjdGVkLFxuICAgICAgfSB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogaWNvbiwgc2NhbGU6IGdldEljb25TY2FsZSh0aGlzLnNjYWxlKSB9KSkpO1xuICB9XG4gIHJlbmRlckNsb3NlQnV0dG9uKCkge1xuICAgIHJldHVybiAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1lc3NhZ2VzLmRpc21pc3NMYWJlbCwgY2xhc3M6IENTUy5jbG9zZSwgb25DbGljazogdGhpcy5jbG9zZSwgb25LZXlEb3duOiB0aGlzLmNsb3NlQnV0dG9uS2V5RG93bkhhbmRsZXIsIHRhYkluZGV4OiB0aGlzLmRpc2FibGVkID8gLTEgOiAwLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5jbG9zZUJ1dHRvbkVsID0gZWwpIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBJQ09OUy5jbG9zZSwgc2NhbGU6IGdldEljb25TY2FsZSh0aGlzLnNjYWxlKSB9KSkpO1xuICB9XG4gIHJlbmRlckljb24oKSB7XG4gICAgcmV0dXJuIChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IENTUy5jaGlwSWNvbiwgZmxpcFJ0bDogdGhpcy5pY29uRmxpcFJ0bCwgaWNvbjogdGhpcy5pY29uLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGlzYWJsZUludGVyYWN0aW9uID0gdGhpcy5kaXNhYmxlZCB8fCAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMuaW50ZXJhY3RpdmUpO1xuICAgIGNvbnN0IHJvbGUgPSB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGlwbGVcIiAmJiB0aGlzLmludGVyYWN0aXZlXG4gICAgICA/IFwiY2hlY2tib3hcIlxuICAgICAgOiB0aGlzLnNlbGVjdGlvbk1vZGUgIT09IFwibm9uZVwiICYmIHRoaXMuaW50ZXJhY3RpdmVcbiAgICAgICAgPyBcInJhZGlvXCJcbiAgICAgICAgOiB0aGlzLmludGVyYWN0aXZlXG4gICAgICAgICAgPyBcImJ1dHRvblwiXG4gICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJkaXZcIiwgeyBcImFyaWEtY2hlY2tlZFwiOiB0aGlzLnNlbGVjdGlvbk1vZGUgIT09IFwibm9uZVwiICYmIHRoaXMuaW50ZXJhY3RpdmVcbiAgICAgICAgPyB0b0FyaWFCb29sZWFuKHRoaXMuc2VsZWN0ZWQpXG4gICAgICAgIDogdW5kZWZpbmVkLCBcImFyaWEtZGlzYWJsZWRcIjogZGlzYWJsZUludGVyYWN0aW9uID8gdG9BcmlhQm9vbGVhbih0aGlzLmRpc2FibGVkKSA6IHVuZGVmaW5lZCwgXCJhcmlhLWxhYmVsXCI6IHRoaXMubGFiZWwsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuY29udGFpbmVyXTogdHJ1ZSxcbiAgICAgICAgW0NTUy50ZXh0U2xvdHRlZF06IHRoaXMuaGFzVGV4dCxcbiAgICAgICAgW0NTUy5pbWFnZVNsb3R0ZWRdOiB0aGlzLmhhc0ltYWdlLFxuICAgICAgICBbQ1NTLnNlbGVjdGFibGVdOiB0aGlzLnNlbGVjdGlvbk1vZGUgIT09IFwibm9uZVwiLFxuICAgICAgICBbQ1NTLm11bHRpcGxlXTogdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm11bHRpcGxlXCIsXG4gICAgICAgIFtDU1MuY2xvc2FibGVdOiB0aGlzLmNsb3NhYmxlLFxuICAgICAgICBbQ1NTLm5vbkludGVyYWN0aXZlXTogIXRoaXMuaW50ZXJhY3RpdmUsXG4gICAgICAgIFtDU1MuaXNDaXJjbGVdOiAhdGhpcy5jbG9zYWJsZSAmJlxuICAgICAgICAgICF0aGlzLmhhc1RleHQgJiZcbiAgICAgICAgICAoIXRoaXMuaWNvbiB8fCAhdGhpcy5oYXNJbWFnZSkgJiZcbiAgICAgICAgICAodGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm5vbmVcIiB8fFxuICAgICAgICAgICAgKCEhdGhpcy5zZWxlY3Rpb25Nb2RlICYmIHRoaXMuc2VsZWN0aW9uTW9kZSAhPT0gXCJtdWx0aXBsZVwiICYmICF0aGlzLnNlbGVjdGVkKSksXG4gICAgICB9LCBvbkNsaWNrOiB0aGlzLmhhbmRsZUVtaXR0aW5nRXZlbnQsIHJvbGU6IHJvbGUsIHRhYkluZGV4OiBkaXNhYmxlSW50ZXJhY3Rpb24gPyAtMSA6IDAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLmNvbnRhaW5lckVsID0gZWwpIH0sIHRoaXMuc2VsZWN0aW9uTW9kZSAhPT0gXCJub25lXCIgJiYgdGhpcy5yZW5kZXJTZWxlY3Rpb25JY29uKCksIHRoaXMucmVuZGVyQ2hpcEltYWdlKCksIHRoaXMuaWNvbiAmJiB0aGlzLnJlbmRlckljb24oKSwgaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLnRpdGxlIH0sIGgoXCJzbG90XCIsIG51bGwpKSwgdGhpcy5jbG9zYWJsZSAmJiB0aGlzLnJlbmRlckNsb3NlQnV0dG9uKCkpKSk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gY2hpcENzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1jaGlwXCIsIHtcbiAgICBcImRpc2FibGVkXCI6IFs1MTZdLFxuICAgIFwiYXBwZWFyYW5jZVwiOiBbNTEzXSxcbiAgICBcImtpbmRcIjogWzUxM10sXG4gICAgXCJjbG9zYWJsZVwiOiBbNTE2XSxcbiAgICBcImljb25cIjogWzUxM10sXG4gICAgXCJpY29uRmxpcFJ0bFwiOiBbNTE2LCBcImljb24tZmxpcC1ydGxcIl0sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcImxhYmVsXCI6IFsxXSxcbiAgICBcInZhbHVlXCI6IFs4XSxcbiAgICBcImNsb3NlZFwiOiBbMTU0MF0sXG4gICAgXCJzZWxlY3Rpb25Nb2RlXCI6IFsxLCBcInNlbGVjdGlvbi1tb2RlXCJdLFxuICAgIFwic2VsZWN0ZWRcIjogWzE1NDBdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJpbnRlcmFjdGl2ZVwiOiBbNF0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwiaGFzVGV4dFwiOiBbMzJdLFxuICAgIFwiaGFzSW1hZ2VcIjogWzMyXSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF1cbiAgfSwgW1swLCBcImtleWRvd25cIiwgXCJrZXlEb3duSGFuZGxlclwiXSwgWzAsIFwiY2xpY2tcIiwgXCJjbGlja0hhbmRsZXJcIl1dXSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWNoaXBcIiwgXCJjYWxjaXRlLWljb25cIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtY2hpcFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIENoaXApO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgQ2hpcCBhcyBDLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGZvcmNlVXBkYXRlIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcblxuY29uc3Qgb2JzZXJ2ZWQgPSBuZXcgU2V0KCk7XG5sZXQgbXV0YXRpb25PYnNlcnZlcjtcbmNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHsgY2hpbGRMaXN0OiB0cnVlIH07XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgaWYgKCFtdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgcHJvY2Vzc011dGF0aW9ucyk7XG4gIH1cbiAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGNvbXBvbmVudC5lbCwgb2JzZXJ2ZXJPcHRpb25zKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHRlYXIgZG93biBhIGNvbmRpdGlvbmFsIHNsb3QgY29tcG9uZW50IG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBkZXByZWNhdGVkIFVzZSBgb25TbG90Y2hhbmdlYCBldmVudCB3aXRoIGBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50YCBET00gdXRpbGl0eSBpbnN0ZWFkLlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpfSAvPn1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBvYnNlcnZlZC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgLy8gd2UgZXhwbGljaXRseSBwcm9jZXNzIHF1ZXVlZCBtdXRhdGlvbnMgYW5kIGRpc2Nvbm5lY3QgYW5kIHJlY29ubmVjdFxuICAvLyB0aGUgb2JzZXJ2ZXIgdW50aWwgTXV0YXRpb25PYnNlcnZlciBnZXRzIGFuIGB1bm9ic2VydmVgIG1ldGhvZFxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNlxuICBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICBmb3IgKGNvbnN0IFtlbGVtZW50XSBvZiBvYnNlcnZlZC5lbnRyaWVzKCkpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcbiAgfVxufVxuZnVuY3Rpb24gcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgbXV0YXRpb25zLmZvckVhY2goKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBmb3JjZVVwZGF0ZSh0YXJnZXQpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBjLCBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IGFzIGQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==