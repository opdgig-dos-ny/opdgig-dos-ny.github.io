"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-accordion-item_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-accordion-item.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-accordion-item.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteAccordionItem: () => (/* binding */ CalciteAccordionItem),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditionalSlot.js */ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */






const SLOTS = {
  actionsStart: "actions-start",
  actionsEnd: "actions-end",
};
const CSS = {
  icon: "icon",
  header: "header",
  headerContent: "header-content",
  actionsStart: "actions-start",
  actionsEnd: "actions-end",
  headerText: "header-text",
  heading: "heading",
  description: "description",
  expandIcon: "expand-icon",
  content: "content",
  iconStart: "icon--start",
  iconEnd: "icon--end",
  headerContainer: "header-container",
};
const IDS = {
  section: "section",
  sectionToggle: "section-toggle",
};

const accordionItemCss = ".icon-position--end,.icon-position--start{--calcite-accordion-item-icon-rotation:calc(90deg * -1);--calcite-accordion-item-active-icon-rotation:0deg;--calcite-accordion-item-icon-rotation-rtl:90deg;--calcite-accordion-item-active-icon-rotation-rtl:0deg}.icon-position--start{--calcite-accordion-item-flex-direction:row-reverse;--calcite-accordion-item-icon-spacing-start:0;--calcite-accordion-item-icon-spacing-end:var(--calcite-accordion-icon-margin)}.icon-position--end{--calcite-accordion-item-flex-direction:row;--calcite-accordion-item-icon-spacing-start:var(--calcite-accordion-icon-margin);--calcite-accordion-item-icon-spacing-end:0}.icon-position--end:not(.icon-type--plus-minus){--calcite-accordion-item-icon-rotation:0deg;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:0deg;--calcite-accordion-item-active-icon-rotation-rtl:calc(180deg * -1)}:host{position:relative;display:flex;flex-direction:column;color:var(--calcite-ui-text-3);text-decoration-line:none;background-color:var(--calcite-accordion-item-background, var(--calcite-ui-foreground-1))}:host .header-content{outline-color:transparent}:host(:focus) .header-content{outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([expanded]){color:var(--calcite-ui-text-1)}:host([expanded]) .content{display:block;color:var(--calcite-ui-text-1)}:host([expanded]) .header{border-block-end-color:transparent}:host .header{display:flex;align-items:stretch}:host .icon{position:relative;margin:0px;display:inline-flex;color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-accordion-item-icon-spacing-start);margin-inline-start:var(--calcite-accordion-item-icon-spacing-end)}.icon--start{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin)}.icon--end{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin);margin-inline-start:var(--calcite-accordion-icon-margin)}.header-container{inline-size:100%}.content{padding:var(--calcite-accordion-item-padding)}:host .content,:host .header{border-block-end:1px solid var(--calcite-accordion-item-border, var(--calcite-ui-border-2))}:host .header *{display:inline-flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}:host .content{display:none;padding-block-start:0px;color:var(--calcite-ui-text-3);text-align:initial}:host .expand-icon{color:var(--calcite-ui-text-3);margin-inline-start:var(--calcite-accordion-item-icon-spacing-start);margin-inline-end:var(--calcite-accordion-item-icon-spacing-end);transform:rotate(var(--calcite-accordion-item-icon-rotation))}.calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}:host([expanded]) .expand-icon{color:var(--calcite-ui-text-3);transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}:host([expanded]) .calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}:host .header-text{margin-block:0px;flex-grow:1;flex-direction:column;padding-block:0px;text-align:initial;margin-inline-end:auto}:host .heading,:host .description{display:flex;inline-size:100%}:host .heading{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}:host .description{margin-block-start:0.25rem;color:var(--calcite-ui-text-3)}:host(:focus) .heading,:host(:hover) .heading{color:var(--calcite-ui-text-1)}:host(:focus) .icon,:host(:hover) .icon{color:var(--calcite-ui-text-1)}:host(:focus) .expand-icon,:host(:hover) .expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .description,:host(:hover) .description{color:var(--calcite-ui-text-2)}:host(:focus) .heading,:host(:active) .heading,:host([expanded]) .heading{color:var(--calcite-ui-text-1)}:host(:focus) .icon,:host(:active) .icon,:host([expanded]) .icon{color:var(--calcite-ui-text-1)}:host(:focus) .description,:host(:active) .description,:host([expanded]) .description{color:var(--calcite-ui-text-2)}.header-content{flex-grow:1;cursor:pointer;padding:var(--calcite-accordion-item-padding);flex-direction:var(--calcite-accordion-item-flex-direction)}.actions-start,.actions-end{display:flex;align-items:center}@media (forced-colors: active){:host([expanded]) .header{border-block-end:none}:host([expanded]) .heading{font-weight:bolder}:host(:hover) .heading,:host(:focus) .heading{text-decoration:underline}}:host([hidden]){display:none}[hidden]{display:none}";

const AccordionItem = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalAccordionItemSelect = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.createEvent)(this, "calciteInternalAccordionItemSelect", 6);
    this.calciteInternalAccordionItemClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.createEvent)(this, "calciteInternalAccordionItemClose", 6);
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /** handle clicks on item header */
    this.itemHeaderClickHandler = () => this.emitRequestedItem();
    this.expanded = false;
    this.heading = undefined;
    this.description = undefined;
    this.iconStart = undefined;
    this.iconEnd = undefined;
    this.iconFlipRtl = undefined;
    this.iconPosition = undefined;
    this.iconType = undefined;
    this.accordionParent = undefined;
    this.scale = undefined;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderActionsStart() {
    const { el } = this;
    return (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(el, SLOTS.actionsStart) ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.h)("div", { class: CSS.actionsStart }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.h)("slot", { name: SLOTS.actionsStart }))) : null;
  }
  renderActionsEnd() {
    const { el } = this;
    return (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(el, SLOTS.actionsEnd) ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.h)("div", { class: CSS.actionsEnd }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.h)("slot", { name: SLOTS.actionsEnd }))) : null;
  }
  render() {
    const { iconFlipRtl } = this;
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.el);
    const iconStartEl = this.iconStart ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.h)("calcite-icon", { class: CSS.iconStart, flipRtl: iconFlipRtl === "both" || iconFlipRtl === "start", icon: this.iconStart, key: "icon-start", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.scale) })) : null;
    const iconEndEl = this.iconEnd ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.h)("calcite-icon", { class: CSS.iconEnd, flipRtl: iconFlipRtl === "both" || iconFlipRtl === "end", icon: this.iconEnd, key: "icon-end", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.scale) })) : null;
    const { description } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.Host, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.h)("div", { class: {
        [`icon-position--${this.iconPosition}`]: true,
        [`icon-type--${this.iconType}`]: true,
      } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.h)("div", { class: { [CSS.header]: true, [_dom_js__WEBPACK_IMPORTED_MODULE_1__.C.rtl]: dir === "rtl" } }, this.renderActionsStart(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.h)("div", { "aria-controls": IDS.section, "aria-expanded": (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.t)(this.expanded), class: CSS.headerContent, id: IDS.sectionToggle, onClick: this.itemHeaderClickHandler, role: "button", tabindex: "0" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.h)("div", { class: CSS.headerContainer }, iconStartEl, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.h)("div", { class: CSS.headerText }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.h)("span", { class: CSS.heading }, this.heading), description ? (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.h)("span", { class: CSS.description }, description) : null), iconEndEl), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.h)("calcite-icon", { class: CSS.expandIcon, icon: this.iconType === "chevron"
        ? "chevronDown"
        : this.iconType === "caret"
          ? "caretDown"
          : this.expanded
            ? "minus"
            : "plus", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.scale) })), this.renderActionsEnd()), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.h)("section", { "aria-labelledby": IDS.sectionToggle, class: CSS.content, id: IDS.section }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.h)("slot", null)))));
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
          this.emitRequestedItem();
          event.preventDefault();
          break;
      }
    }
  }
  updateActiveItemOnChange(event) {
    const [accordion] = event.composedPath();
    const parent = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.el, "calcite-accordion");
    if (accordion !== parent) {
      return;
    }
    this.determineActiveItem(parent.selectionMode, event.detail.requestedAccordionItem);
    event.stopPropagation();
  }
  accordionItemSyncHandler(event) {
    const [accordion] = event.composedPath();
    const accordionItem = this.el;
    // we sync with our accordion parent via event only if the item is wrapped within another component's shadow DOM,
    // otherwise, the accordion parent will sync the item directly
    const willBeSyncedByDirectParent = accordionItem.parentElement === accordion;
    if (willBeSyncedByDirectParent) {
      return;
    }
    const closestAccordionParent = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.c)(accordionItem, "calcite-accordion");
    if (accordion !== closestAccordionParent) {
      return;
    }
    accordionItem.iconPosition = closestAccordionParent.iconPosition;
    accordionItem.iconType = closestAccordionParent.iconType;
    accordionItem.scale = closestAccordionParent.scale;
    event.stopPropagation();
  }
  determineActiveItem(selectionMode, requestedItem) {
    switch (selectionMode) {
      case "multiple":
        if (this.el === requestedItem) {
          this.expanded = !this.expanded;
        }
        break;
      case "single":
        this.expanded = this.el === requestedItem ? !this.expanded : false;
        break;
      case "single-persist":
        this.expanded = this.el === requestedItem;
        break;
    }
  }
  emitRequestedItem() {
    this.calciteInternalAccordionItemSelect.emit({
      requestedAccordionItem: this.el,
    });
  }
  get el() { return this; }
  static get style() { return accordionItemCss; }
}, [1, "calcite-accordion-item", {
    "expanded": [1540],
    "heading": [1],
    "description": [1],
    "iconStart": [513, "icon-start"],
    "iconEnd": [513, "icon-end"],
    "iconFlipRtl": [513, "icon-flip-rtl"],
    "iconPosition": [1, "icon-position"],
    "iconType": [1, "icon-type"],
    "accordionParent": [16],
    "scale": [1]
  }, [[0, "keydown", "keyDownHandler"], [16, "calciteInternalAccordionChange", "updateActiveItemOnChange"], [4, "calciteInternalAccordionItemsSync", "accordionItemSyncHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-accordion-item", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-accordion-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, AccordionItem);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_3__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteAccordionItem = AccordionItem;
const defineCustomElement = defineCustomElement$1;




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




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/observers.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/observers.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createObserver)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


/**
 * This utility ensures observers are created only for browser contexts.
 *
 * @param type - the type of observer to create
 * @param callback - the observer callback
 * @param options - the observer options
 */
function createObserver(type, callback, options) {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.Build.isBrowser) {
    return undefined;
  }
  const Observer = getObserver(type);
  return new Observer(callback, options);
}
function getObserver(type) {
  // based on https://github.com/whatwg/dom/issues/126#issuecomment-1049814948
  class ExtendedMutationObserver extends window.MutationObserver {
    constructor(callback) {
      super(callback);
      this.observedEntry = [];
      this.callback = callback;
    }
    observe(target, options) {
      this.observedEntry.push({ target, options });
      return super.observe(target, options);
    }
    unobserve(target) {
      const newObservedEntries = this.observedEntry.filter((observed) => observed.target !== target);
      this.observedEntry = [];
      this.callback(super.takeRecords(), this);
      this.disconnect();
      newObservedEntries.forEach((observed) => this.observe(observed.target, observed.options));
    }
  }
  return (function () {
    return (type === "intersection"
      ? window.IntersectionObserver
      : type === "mutation"
        ? ExtendedMutationObserver
        : window.ResizeObserver);
  })();
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYWFmYTFkYjI0ODQxN2U3YjU5ZTI5NmZkYmY2ZjJkOTQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0c7QUFDTTtBQUN3QjtBQUMxRjtBQUNJOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9FQUFvRSx3REFBd0QsbURBQW1ELGlEQUFpRCx1REFBdUQsc0JBQXNCLG9EQUFvRCw4Q0FBOEMsK0VBQStFLG9CQUFvQiw0Q0FBNEMsaUZBQWlGLDRDQUE0QyxnREFBZ0QsNENBQTRDLHFEQUFxRCxnREFBZ0Qsb0VBQW9FLE1BQU0sa0JBQWtCLGFBQWEsc0JBQXNCLCtCQUErQiwwQkFBMEIsMEZBQTBGLHNCQUFzQiwwQkFBMEIsOEJBQThCLDhCQUE4QixtQkFBbUIseUVBQXlFLHFQQUFxUCxrQkFBa0IsK0JBQStCLDJCQUEyQixjQUFjLCtCQUErQiwwQkFBMEIsbUNBQW1DLGNBQWMsYUFBYSxvQkFBb0IsWUFBWSxrQkFBa0IsV0FBVyxvQkFBb0IsK0JBQStCLDBCQUEwQix3REFBd0QsbUVBQW1FLG1FQUFtRSxhQUFhLGFBQWEsbUJBQW1CLHVEQUF1RCxXQUFXLGFBQWEsbUJBQW1CLHVEQUF1RCx5REFBeUQsa0JBQWtCLGlCQUFpQixTQUFTLDhDQUE4Qyw2QkFBNkIsNEZBQTRGLGdCQUFnQixvQkFBb0IsbUJBQW1CLDBCQUEwQix3REFBd0QscUJBQXFCLHNCQUFzQixlQUFlLGFBQWEsd0JBQXdCLCtCQUErQixtQkFBbUIsbUJBQW1CLCtCQUErQixxRUFBcUUsaUVBQWlFLDhEQUE4RCwyQkFBMkIsa0VBQWtFLCtCQUErQiwrQkFBK0IscUVBQXFFLDZDQUE2Qyx5RUFBeUUsbUJBQW1CLGlCQUFpQixZQUFZ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Q0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLLElBQUksb0JBQW9CO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixhQUFhO0FBQ2IsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUUrQzs7Ozs7Ozs7Ozs7Ozs7OztBQzVML0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8seUVBQUs7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlCQUFpQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS1hY2NvcmRpb24taXRlbS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jb25kaXRpb25hbFNsb3QuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2ljb24uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL29ic2VydmVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCwgZCBhcyBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IH0gZnJvbSAnLi9jb25kaXRpb25hbFNsb3QuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTbG90dGVkLCBiIGFzIGdldEVsZW1lbnREaXIsIEMgYXMgQ1NTX1VUSUxJVFksIHQgYXMgdG9BcmlhQm9vbGVhbiwgYyBhcyBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldEljb25TY2FsZSB9IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9pY29uLmpzJztcblxuY29uc3QgU0xPVFMgPSB7XG4gIGFjdGlvbnNTdGFydDogXCJhY3Rpb25zLXN0YXJ0XCIsXG4gIGFjdGlvbnNFbmQ6IFwiYWN0aW9ucy1lbmRcIixcbn07XG5jb25zdCBDU1MgPSB7XG4gIGljb246IFwiaWNvblwiLFxuICBoZWFkZXI6IFwiaGVhZGVyXCIsXG4gIGhlYWRlckNvbnRlbnQ6IFwiaGVhZGVyLWNvbnRlbnRcIixcbiAgYWN0aW9uc1N0YXJ0OiBcImFjdGlvbnMtc3RhcnRcIixcbiAgYWN0aW9uc0VuZDogXCJhY3Rpb25zLWVuZFwiLFxuICBoZWFkZXJUZXh0OiBcImhlYWRlci10ZXh0XCIsXG4gIGhlYWRpbmc6IFwiaGVhZGluZ1wiLFxuICBkZXNjcmlwdGlvbjogXCJkZXNjcmlwdGlvblwiLFxuICBleHBhbmRJY29uOiBcImV4cGFuZC1pY29uXCIsXG4gIGNvbnRlbnQ6IFwiY29udGVudFwiLFxuICBpY29uU3RhcnQ6IFwiaWNvbi0tc3RhcnRcIixcbiAgaWNvbkVuZDogXCJpY29uLS1lbmRcIixcbiAgaGVhZGVyQ29udGFpbmVyOiBcImhlYWRlci1jb250YWluZXJcIixcbn07XG5jb25zdCBJRFMgPSB7XG4gIHNlY3Rpb246IFwic2VjdGlvblwiLFxuICBzZWN0aW9uVG9nZ2xlOiBcInNlY3Rpb24tdG9nZ2xlXCIsXG59O1xuXG5jb25zdCBhY2NvcmRpb25JdGVtQ3NzID0gXCIuaWNvbi1wb3NpdGlvbi0tZW5kLC5pY29uLXBvc2l0aW9uLS1zdGFydHstLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0taWNvbi1yb3RhdGlvbjpjYWxjKDkwZGVnICogLTEpOy0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1hY3RpdmUtaWNvbi1yb3RhdGlvbjowZGVnOy0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1pY29uLXJvdGF0aW9uLXJ0bDo5MGRlZzstLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tYWN0aXZlLWljb24tcm90YXRpb24tcnRsOjBkZWd9Lmljb24tcG9zaXRpb24tLXN0YXJ0ey0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1mbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZTstLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0taWNvbi1zcGFjaW5nLXN0YXJ0OjA7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWljb24tc3BhY2luZy1lbmQ6dmFyKC0tY2FsY2l0ZS1hY2NvcmRpb24taWNvbi1tYXJnaW4pfS5pY29uLXBvc2l0aW9uLS1lbmR7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWZsZXgtZGlyZWN0aW9uOnJvdzstLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0taWNvbi1zcGFjaW5nLXN0YXJ0OnZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWljb24tbWFyZ2luKTstLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0taWNvbi1zcGFjaW5nLWVuZDowfS5pY29uLXBvc2l0aW9uLS1lbmQ6bm90KC5pY29uLXR5cGUtLXBsdXMtbWludXMpey0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1pY29uLXJvdGF0aW9uOjBkZWc7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWFjdGl2ZS1pY29uLXJvdGF0aW9uOjE4MGRlZzstLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0taWNvbi1yb3RhdGlvbi1ydGw6MGRlZzstLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tYWN0aXZlLWljb24tcm90YXRpb24tcnRsOmNhbGMoMTgwZGVnICogLTEpfTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKSl9Omhvc3QgLmhlYWRlci1jb250ZW50e291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnR9Omhvc3QoOmZvY3VzKSAuaGVhZGVyLWNvbnRlbnR7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4O291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX06aG9zdChbZXhwYW5kZWRdKXtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW2V4cGFuZGVkXSkgLmNvbnRlbnR7ZGlzcGxheTpibG9jaztjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW2V4cGFuZGVkXSkgLmhlYWRlcntib3JkZXItYmxvY2stZW5kLWNvbG9yOnRyYW5zcGFyZW50fTpob3N0IC5oZWFkZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOnN0cmV0Y2h9Omhvc3QgLmljb257cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjBweDtkaXNwbGF5OmlubGluZS1mbGV4O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7bWFyZ2luLWlubGluZS1lbmQ6dmFyKC0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1pY29uLXNwYWNpbmctc3RhcnQpO21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1pY29uLXNwYWNpbmctZW5kKX0uaWNvbi0tc3RhcnR7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW4taW5saW5lLWVuZDp2YXIoLS1jYWxjaXRlLWFjY29yZGlvbi1pY29uLW1hcmdpbil9Lmljb24tLWVuZHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbi1pbmxpbmUtZW5kOnZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWljb24tbWFyZ2luKTttYXJnaW4taW5saW5lLXN0YXJ0OnZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWljb24tbWFyZ2luKX0uaGVhZGVyLWNvbnRhaW5lcntpbmxpbmUtc2l6ZToxMDAlfS5jb250ZW50e3BhZGRpbmc6dmFyKC0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1wYWRkaW5nKX06aG9zdCAuY29udGVudCw6aG9zdCAuaGVhZGVye2JvcmRlci1ibG9jay1lbmQ6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tYm9yZGVyLCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0yKSl9Omhvc3QgLmhlYWRlciAqe2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3RyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt3b3JkLXdyYXA6YnJlYWstd29yZDt3b3JkLWJyZWFrOmJyZWFrLXdvcmR9Omhvc3QgLmNvbnRlbnR7ZGlzcGxheTpub25lO3BhZGRpbmctYmxvY2stc3RhcnQ6MHB4O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTt0ZXh0LWFsaWduOmluaXRpYWx9Omhvc3QgLmV4cGFuZC1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTttYXJnaW4taW5saW5lLXN0YXJ0OnZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0taWNvbi1zcGFjaW5nLXN0YXJ0KTttYXJnaW4taW5saW5lLWVuZDp2YXIoLS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWljb24tc3BhY2luZy1lbmQpO3RyYW5zZm9ybTpyb3RhdGUodmFyKC0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1pY29uLXJvdGF0aW9uKSl9LmNhbGNpdGUtLXJ0bCAuZXhwYW5kLWljb257dHJhbnNmb3JtOnJvdGF0ZSh2YXIoLS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWljb24tcm90YXRpb24tcnRsKSl9Omhvc3QoW2V4cGFuZGVkXSkgLmV4cGFuZC1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTt0cmFuc2Zvcm06cm90YXRlKHZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tYWN0aXZlLWljb24tcm90YXRpb24pKX06aG9zdChbZXhwYW5kZWRdKSAuY2FsY2l0ZS0tcnRsIC5leHBhbmQtaWNvbnt0cmFuc2Zvcm06cm90YXRlKHZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tYWN0aXZlLWljb24tcm90YXRpb24tcnRsKSl9Omhvc3QgLmhlYWRlci10ZXh0e21hcmdpbi1ibG9jazowcHg7ZmxleC1ncm93OjE7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3BhZGRpbmctYmxvY2s6MHB4O3RleHQtYWxpZ246aW5pdGlhbDttYXJnaW4taW5saW5lLWVuZDphdXRvfTpob3N0IC5oZWFkaW5nLDpob3N0IC5kZXNjcmlwdGlvbntkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJX06aG9zdCAuaGVhZGluZ3tmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfTpob3N0IC5kZXNjcmlwdGlvbnttYXJnaW4tYmxvY2stc3RhcnQ6MC4yNXJlbTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9Omhvc3QoOmZvY3VzKSAuaGVhZGluZyw6aG9zdCg6aG92ZXIpIC5oZWFkaW5ne2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdCg6Zm9jdXMpIC5pY29uLDpob3N0KDpob3ZlcikgLmljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KDpmb2N1cykgLmV4cGFuZC1pY29uLDpob3N0KDpob3ZlcikgLmV4cGFuZC1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdCg6Zm9jdXMpIC5kZXNjcmlwdGlvbiw6aG9zdCg6aG92ZXIpIC5kZXNjcmlwdGlvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMil9Omhvc3QoOmZvY3VzKSAuaGVhZGluZyw6aG9zdCg6YWN0aXZlKSAuaGVhZGluZyw6aG9zdChbZXhwYW5kZWRdKSAuaGVhZGluZ3tjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoOmZvY3VzKSAuaWNvbiw6aG9zdCg6YWN0aXZlKSAuaWNvbiw6aG9zdChbZXhwYW5kZWRdKSAuaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoOmZvY3VzKSAuZGVzY3JpcHRpb24sOmhvc3QoOmFjdGl2ZSkgLmRlc2NyaXB0aW9uLDpob3N0KFtleHBhbmRlZF0pIC5kZXNjcmlwdGlvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMil9LmhlYWRlci1jb250ZW50e2ZsZXgtZ3JvdzoxO2N1cnNvcjpwb2ludGVyO3BhZGRpbmc6dmFyKC0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1wYWRkaW5nKTtmbGV4LWRpcmVjdGlvbjp2YXIoLS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWZsZXgtZGlyZWN0aW9uKX0uYWN0aW9ucy1zdGFydCwuYWN0aW9ucy1lbmR7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcn1AbWVkaWEgKGZvcmNlZC1jb2xvcnM6IGFjdGl2ZSl7Omhvc3QoW2V4cGFuZGVkXSkgLmhlYWRlcntib3JkZXItYmxvY2stZW5kOm5vbmV9Omhvc3QoW2V4cGFuZGVkXSkgLmhlYWRpbmd7Zm9udC13ZWlnaHQ6Ym9sZGVyfTpob3N0KDpob3ZlcikgLmhlYWRpbmcsOmhvc3QoOmZvY3VzKSAuaGVhZGluZ3t0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgQWNjb3JkaW9uSXRlbSA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxBY2NvcmRpb25JdGVtU2VsZWN0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxBY2NvcmRpb25JdGVtU2VsZWN0XCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsQWNjb3JkaW9uSXRlbUNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxBY2NvcmRpb25JdGVtQ2xvc2VcIiwgNik7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKiBoYW5kbGUgY2xpY2tzIG9uIGl0ZW0gaGVhZGVyICovXG4gICAgdGhpcy5pdGVtSGVhZGVyQ2xpY2tIYW5kbGVyID0gKCkgPT4gdGhpcy5lbWl0UmVxdWVzdGVkSXRlbSgpO1xuICAgIHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLmhlYWRpbmcgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25TdGFydCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25FbmQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pY29uRmxpcFJ0bCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25Qb3NpdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25UeXBlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWNjb3JkaW9uUGFyZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJBY3Rpb25zU3RhcnQoKSB7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICByZXR1cm4gZ2V0U2xvdHRlZChlbCwgU0xPVFMuYWN0aW9uc1N0YXJ0KSA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5hY3Rpb25zU3RhcnQgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5hY3Rpb25zU3RhcnQgfSkpKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyQWN0aW9uc0VuZCgpIHtcbiAgICBjb25zdCB7IGVsIH0gPSB0aGlzO1xuICAgIHJldHVybiBnZXRTbG90dGVkKGVsLCBTTE9UUy5hY3Rpb25zRW5kKSA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5hY3Rpb25zRW5kIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuYWN0aW9uc0VuZCB9KSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpY29uRmxpcFJ0bCB9ID0gdGhpcztcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKHRoaXMuZWwpO1xuICAgIGNvbnN0IGljb25TdGFydEVsID0gdGhpcy5pY29uU3RhcnQgPyAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiBDU1MuaWNvblN0YXJ0LCBmbGlwUnRsOiBpY29uRmxpcFJ0bCA9PT0gXCJib3RoXCIgfHwgaWNvbkZsaXBSdGwgPT09IFwic3RhcnRcIiwgaWNvbjogdGhpcy5pY29uU3RhcnQsIGtleTogXCJpY29uLXN0YXJ0XCIsIHNjYWxlOiBnZXRJY29uU2NhbGUodGhpcy5zY2FsZSkgfSkpIDogbnVsbDtcbiAgICBjb25zdCBpY29uRW5kRWwgPSB0aGlzLmljb25FbmQgPyAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiBDU1MuaWNvbkVuZCwgZmxpcFJ0bDogaWNvbkZsaXBSdGwgPT09IFwiYm90aFwiIHx8IGljb25GbGlwUnRsID09PSBcImVuZFwiLCBpY29uOiB0aGlzLmljb25FbmQsIGtleTogXCJpY29uLWVuZFwiLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKSA6IG51bGw7XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtgaWNvbi1wb3NpdGlvbi0tJHt0aGlzLmljb25Qb3NpdGlvbn1gXTogdHJ1ZSxcbiAgICAgICAgW2BpY29uLXR5cGUtLSR7dGhpcy5pY29uVHlwZX1gXTogdHJ1ZSxcbiAgICAgIH0gfSwgaChcImRpdlwiLCB7IGNsYXNzOiB7IFtDU1MuaGVhZGVyXTogdHJ1ZSwgW0NTU19VVElMSVRZLnJ0bF06IGRpciA9PT0gXCJydGxcIiB9IH0sIHRoaXMucmVuZGVyQWN0aW9uc1N0YXJ0KCksIGgoXCJkaXZcIiwgeyBcImFyaWEtY29udHJvbHNcIjogSURTLnNlY3Rpb24sIFwiYXJpYS1leHBhbmRlZFwiOiB0b0FyaWFCb29sZWFuKHRoaXMuZXhwYW5kZWQpLCBjbGFzczogQ1NTLmhlYWRlckNvbnRlbnQsIGlkOiBJRFMuc2VjdGlvblRvZ2dsZSwgb25DbGljazogdGhpcy5pdGVtSGVhZGVyQ2xpY2tIYW5kbGVyLCByb2xlOiBcImJ1dHRvblwiLCB0YWJpbmRleDogXCIwXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuaGVhZGVyQ29udGFpbmVyIH0sIGljb25TdGFydEVsLCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5oZWFkZXJUZXh0IH0sIGgoXCJzcGFuXCIsIHsgY2xhc3M6IENTUy5oZWFkaW5nIH0sIHRoaXMuaGVhZGluZyksIGRlc2NyaXB0aW9uID8gaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLmRlc2NyaXB0aW9uIH0sIGRlc2NyaXB0aW9uKSA6IG51bGwpLCBpY29uRW5kRWwpLCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IENTUy5leHBhbmRJY29uLCBpY29uOiB0aGlzLmljb25UeXBlID09PSBcImNoZXZyb25cIlxuICAgICAgICA/IFwiY2hldnJvbkRvd25cIlxuICAgICAgICA6IHRoaXMuaWNvblR5cGUgPT09IFwiY2FyZXRcIlxuICAgICAgICAgID8gXCJjYXJldERvd25cIlxuICAgICAgICAgIDogdGhpcy5leHBhbmRlZFxuICAgICAgICAgICAgPyBcIm1pbnVzXCJcbiAgICAgICAgICAgIDogXCJwbHVzXCIsIHNjYWxlOiBnZXRJY29uU2NhbGUodGhpcy5zY2FsZSkgfSkpLCB0aGlzLnJlbmRlckFjdGlvbnNFbmQoKSksIGgoXCJzZWN0aW9uXCIsIHsgXCJhcmlhLWxhYmVsbGVkYnlcIjogSURTLnNlY3Rpb25Ub2dnbGUsIGNsYXNzOiBDU1MuY29udGVudCwgaWQ6IElEUy5zZWN0aW9uIH0sIGgoXCJzbG90XCIsIG51bGwpKSkpKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBrZXlEb3duSGFuZGxlcihldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuZWwpIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgIGNhc2UgXCIgXCI6XG4gICAgICAgIGNhc2UgXCJFbnRlclwiOlxuICAgICAgICAgIHRoaXMuZW1pdFJlcXVlc3RlZEl0ZW0oKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB1cGRhdGVBY3RpdmVJdGVtT25DaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBbYWNjb3JkaW9uXSA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgIGNvbnN0IHBhcmVudCA9IGNsb3Nlc3RFbGVtZW50Q3Jvc3NTaGFkb3dCb3VuZGFyeSh0aGlzLmVsLCBcImNhbGNpdGUtYWNjb3JkaW9uXCIpO1xuICAgIGlmIChhY2NvcmRpb24gIT09IHBhcmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRldGVybWluZUFjdGl2ZUl0ZW0ocGFyZW50LnNlbGVjdGlvbk1vZGUsIGV2ZW50LmRldGFpbC5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICBhY2NvcmRpb25JdGVtU3luY0hhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBbYWNjb3JkaW9uXSA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgIGNvbnN0IGFjY29yZGlvbkl0ZW0gPSB0aGlzLmVsO1xuICAgIC8vIHdlIHN5bmMgd2l0aCBvdXIgYWNjb3JkaW9uIHBhcmVudCB2aWEgZXZlbnQgb25seSBpZiB0aGUgaXRlbSBpcyB3cmFwcGVkIHdpdGhpbiBhbm90aGVyIGNvbXBvbmVudCdzIHNoYWRvdyBET00sXG4gICAgLy8gb3RoZXJ3aXNlLCB0aGUgYWNjb3JkaW9uIHBhcmVudCB3aWxsIHN5bmMgdGhlIGl0ZW0gZGlyZWN0bHlcbiAgICBjb25zdCB3aWxsQmVTeW5jZWRCeURpcmVjdFBhcmVudCA9IGFjY29yZGlvbkl0ZW0ucGFyZW50RWxlbWVudCA9PT0gYWNjb3JkaW9uO1xuICAgIGlmICh3aWxsQmVTeW5jZWRCeURpcmVjdFBhcmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjbG9zZXN0QWNjb3JkaW9uUGFyZW50ID0gY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5KGFjY29yZGlvbkl0ZW0sIFwiY2FsY2l0ZS1hY2NvcmRpb25cIik7XG4gICAgaWYgKGFjY29yZGlvbiAhPT0gY2xvc2VzdEFjY29yZGlvblBhcmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhY2NvcmRpb25JdGVtLmljb25Qb3NpdGlvbiA9IGNsb3Nlc3RBY2NvcmRpb25QYXJlbnQuaWNvblBvc2l0aW9uO1xuICAgIGFjY29yZGlvbkl0ZW0uaWNvblR5cGUgPSBjbG9zZXN0QWNjb3JkaW9uUGFyZW50Lmljb25UeXBlO1xuICAgIGFjY29yZGlvbkl0ZW0uc2NhbGUgPSBjbG9zZXN0QWNjb3JkaW9uUGFyZW50LnNjYWxlO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIGRldGVybWluZUFjdGl2ZUl0ZW0oc2VsZWN0aW9uTW9kZSwgcmVxdWVzdGVkSXRlbSkge1xuICAgIHN3aXRjaCAoc2VsZWN0aW9uTW9kZSkge1xuICAgICAgY2FzZSBcIm11bHRpcGxlXCI6XG4gICAgICAgIGlmICh0aGlzLmVsID09PSByZXF1ZXN0ZWRJdGVtKSB7XG4gICAgICAgICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNpbmdsZVwiOlxuICAgICAgICB0aGlzLmV4cGFuZGVkID0gdGhpcy5lbCA9PT0gcmVxdWVzdGVkSXRlbSA/ICF0aGlzLmV4cGFuZGVkIDogZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNpbmdsZS1wZXJzaXN0XCI6XG4gICAgICAgIHRoaXMuZXhwYW5kZWQgPSB0aGlzLmVsID09PSByZXF1ZXN0ZWRJdGVtO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgZW1pdFJlcXVlc3RlZEl0ZW0oKSB7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxBY2NvcmRpb25JdGVtU2VsZWN0LmVtaXQoe1xuICAgICAgcmVxdWVzdGVkQWNjb3JkaW9uSXRlbTogdGhpcy5lbCxcbiAgICB9KTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBhY2NvcmRpb25JdGVtQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWFjY29yZGlvbi1pdGVtXCIsIHtcbiAgICBcImV4cGFuZGVkXCI6IFsxNTQwXSxcbiAgICBcImhlYWRpbmdcIjogWzFdLFxuICAgIFwiZGVzY3JpcHRpb25cIjogWzFdLFxuICAgIFwiaWNvblN0YXJ0XCI6IFs1MTMsIFwiaWNvbi1zdGFydFwiXSxcbiAgICBcImljb25FbmRcIjogWzUxMywgXCJpY29uLWVuZFwiXSxcbiAgICBcImljb25GbGlwUnRsXCI6IFs1MTMsIFwiaWNvbi1mbGlwLXJ0bFwiXSxcbiAgICBcImljb25Qb3NpdGlvblwiOiBbMSwgXCJpY29uLXBvc2l0aW9uXCJdLFxuICAgIFwiaWNvblR5cGVcIjogWzEsIFwiaWNvbi10eXBlXCJdLFxuICAgIFwiYWNjb3JkaW9uUGFyZW50XCI6IFsxNl0sXG4gICAgXCJzY2FsZVwiOiBbMV1cbiAgfSwgW1swLCBcImtleWRvd25cIiwgXCJrZXlEb3duSGFuZGxlclwiXSwgWzE2LCBcImNhbGNpdGVJbnRlcm5hbEFjY29yZGlvbkNoYW5nZVwiLCBcInVwZGF0ZUFjdGl2ZUl0ZW1PbkNoYW5nZVwiXSwgWzQsIFwiY2FsY2l0ZUludGVybmFsQWNjb3JkaW9uSXRlbXNTeW5jXCIsIFwiYWNjb3JkaW9uSXRlbVN5bmNIYW5kbGVyXCJdXV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWFjY29yZGlvbi1pdGVtXCIsIFwiY2FsY2l0ZS1pY29uXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWFjY29yZGlvbi1pdGVtXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgQWNjb3JkaW9uSXRlbSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDIoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG5cbmNvbnN0IENhbGNpdGVBY2NvcmRpb25JdGVtID0gQWNjb3JkaW9uSXRlbTtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVBY2NvcmRpb25JdGVtLCBkZWZpbmVDdXN0b21FbGVtZW50IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5mdW5jdGlvbiBnZXRJY29uU2NhbGUoY29tcG9uZW50U2NhbGUpIHtcbiAgcmV0dXJuIGNvbXBvbmVudFNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCI7XG59XG5cbmV4cG9ydCB7IGdldEljb25TY2FsZSBhcyBnIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBmb3JjZVVwZGF0ZSB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5cbmNvbnN0IG9ic2VydmVkID0gbmV3IFNldCgpO1xubGV0IG11dGF0aW9uT2JzZXJ2ZXI7XG5jb25zdCBvYnNlcnZlck9wdGlvbnMgPSB7IGNoaWxkTGlzdDogdHJ1ZSB9O1xuLyoqXG4gKiBIZWxwZXIgdG8gc2V0IHVwIGEgY29uZGl0aW9uYWwgc2xvdCBjb21wb25lbnQgb24gY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQGRlcHJlY2F0ZWQgVXNlIGBvblNsb3RjaGFuZ2VgIGV2ZW50IHdpdGggYHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnRgIERPTSB1dGlsaXR5IGluc3RlYWQuXG4gKlxuICogYGBgXG4gKiA8c2xvdCBvblNsb3RjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5teVNsb3RIYXNFbGVtZW50ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCl9IC8+fVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIGlmICghbXV0YXRpb25PYnNlcnZlcikge1xuICAgIG11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsIHByb2Nlc3NNdXRhdGlvbnMpO1xuICB9XG4gIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShjb21wb25lbnQuZWwsIG9ic2VydmVyT3B0aW9ucyk7XG59XG4vKipcbiAqIEhlbHBlciB0byB0ZWFyIGRvd24gYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBkaXNjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgb2JzZXJ2ZWQuZGVsZXRlKGNvbXBvbmVudC5lbCk7XG4gIC8vIHdlIGV4cGxpY2l0bHkgcHJvY2VzcyBxdWV1ZWQgbXV0YXRpb25zIGFuZCBkaXNjb25uZWN0IGFuZCByZWNvbm5lY3RcbiAgLy8gdGhlIG9ic2VydmVyIHVudGlsIE11dGF0aW9uT2JzZXJ2ZXIgZ2V0cyBhbiBgdW5vYnNlcnZlYCBtZXRob2RcbiAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvZG9tL2lzc3Vlcy8xMjZcbiAgcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbk9ic2VydmVyLnRha2VSZWNvcmRzKCkpO1xuICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgZm9yIChjb25zdCBbZWxlbWVudF0gb2Ygb2JzZXJ2ZWQuZW50cmllcygpKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9ic2VydmVyT3B0aW9ucyk7XG4gIH1cbn1cbmZ1bmN0aW9uIHByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gIG11dGF0aW9ucy5mb3JFYWNoKCh7IHRhcmdldCB9KSA9PiB7XG4gICAgZm9yY2VVcGRhdGUodGFyZ2V0KTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgYXMgYywgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBnZXRBc3NldFBhdGgsIHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGgsIEhvc3QsIEJ1aWxkIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRFbGVtZW50RGlyLCB0IGFzIHRvQXJpYUJvb2xlYW4gfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGljb246IFwiaWNvblwiLFxuICBmbGlwUnRsOiBcImZsaXAtcnRsXCIsXG59O1xuXG4vKipcbiAqIEljb24gZGF0YSBjYWNoZS5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGljb25DYWNoZSA9IHt9O1xuLyoqXG4gKiBJY29uIHJlcXVlc3QgY2FjaGUuXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCByZXF1ZXN0Q2FjaGUgPSB7fTtcbmNvbnN0IHNjYWxlVG9QeCA9IHtcbiAgczogMTYsXG4gIG06IDI0LFxuICBsOiAzMixcbn07XG5hc3luYyBmdW5jdGlvbiBmZXRjaEljb24oeyBpY29uLCBzY2FsZSB9KSB7XG4gIGNvbnN0IHNpemUgPSBzY2FsZVRvUHhbc2NhbGVdO1xuICBjb25zdCBuYW1lID0gbm9ybWFsaXplSWNvbk5hbWUoaWNvbik7XG4gIGNvbnN0IGZpbGxlZCA9IG5hbWUuY2hhckF0KG5hbWUubGVuZ3RoIC0gMSkgPT09IFwiRlwiO1xuICBjb25zdCBpY29uTmFtZSA9IGZpbGxlZCA/IG5hbWUuc3Vic3RyaW5nKDAsIG5hbWUubGVuZ3RoIC0gMSkgOiBuYW1lO1xuICBjb25zdCBpZCA9IGAke2ljb25OYW1lfSR7c2l6ZX0ke2ZpbGxlZCA/IFwiRlwiIDogXCJcIn1gO1xuICBpZiAoaWNvbkNhY2hlW2lkXSkge1xuICAgIHJldHVybiBpY29uQ2FjaGVbaWRdO1xuICB9XG4gIGlmICghcmVxdWVzdENhY2hlW2lkXSkge1xuICAgIHJlcXVlc3RDYWNoZVtpZF0gPSBmZXRjaChnZXRBc3NldFBhdGgoYC4vYXNzZXRzL2ljb24vJHtpZH0uanNvbmApKVxuICAgICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFwiJHtpZH1cIiBpcyBub3QgYSB2YWxpZCBjYWxjaXRlLXVpLWljb24gbmFtZWApO1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgcGF0aCA9IGF3YWl0IHJlcXVlc3RDYWNoZVtpZF07XG4gIGljb25DYWNoZVtpZF0gPSBwYXRoO1xuICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogTm9ybWFsaXplIHRoZSBpY29uIG5hbWUgdG8gbWF0Y2ggdGhlIHBhdGggZGF0YSBtb2R1bGUgZXhwb3J0cy5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICpcbiAqIEBwYXJhbSBuYW1lIOKAkyBhbiBpY29uIG5hbWUgdGhhdCBjYW4gYmUgZWl0aGVyIGtlYmFiIG9yIGNhbWVsLWNhc2VkXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVJY29uTmFtZShuYW1lKSB7XG4gIGNvbnN0IG51bWJlckxlYWRpbmdOYW1lID0gIWlzTmFOKE51bWJlcihuYW1lLmNoYXJBdCgwKSkpO1xuICBjb25zdCBwYXJ0cyA9IG5hbWUuc3BsaXQoXCItXCIpO1xuICBjb25zdCBrZWJhYkNhc2VkID0gcGFydHMubGVuZ3RoID4gMDtcbiAgaWYgKGtlYmFiQ2FzZWQpIHtcbiAgICBjb25zdCBmaXJzdE5vbkRpZ2l0SW5QYXJ0UGF0dGVybiA9IC9bYS16XS9pO1xuICAgIG5hbWUgPSBwYXJ0c1xuICAgICAgLm1hcCgocGFydCwgcGFydEluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gcGFydC5yZXBsYWNlKGZpcnN0Tm9uRGlnaXRJblBhcnRQYXR0ZXJuLCBmdW5jdGlvbiByZXBsYWNlcihtYXRjaCwgb2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IGlzRmlyc3RDaGFySW5OYW1lID0gcGFydEluZGV4ID09PSAwICYmIG9mZnNldCA9PT0gMDtcbiAgICAgICAgaWYgKGlzRmlyc3RDaGFySW5OYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXRjaC50b1VwcGVyQ2FzZSgpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAgIC5qb2luKFwiXCIpO1xuICB9XG4gIHJldHVybiBudW1iZXJMZWFkaW5nTmFtZSA/IGBpJHtuYW1lfWAgOiBuYW1lO1xufVxuXG5jb25zdCBpY29uQ3NzID0gXCI6aG9zdHtkaXNwbGF5OmlubGluZS1mbGV4O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktaWNvbi1jb2xvcil9Omhvc3QoW3NjYWxlPXNdKXtpbmxpbmUtc2l6ZToxNnB4O2Jsb2NrLXNpemU6MTZweDttaW4taW5saW5lLXNpemU6MTZweDttaW4tYmxvY2stc2l6ZToxNnB4fTpob3N0KFtzY2FsZT1tXSl7aW5saW5lLXNpemU6MjRweDtibG9jay1zaXplOjI0cHg7bWluLWlubGluZS1zaXplOjI0cHg7bWluLWJsb2NrLXNpemU6MjRweH06aG9zdChbc2NhbGU9bF0pe2lubGluZS1zaXplOjMycHg7YmxvY2stc2l6ZTozMnB4O21pbi1pbmxpbmUtc2l6ZTozMnB4O21pbi1ibG9jay1zaXplOjMycHh9LmZsaXAtcnRse3RyYW5zZm9ybTpzY2FsZVgoLTEpfS5zdmd7ZGlzcGxheTpibG9ja306aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgSWNvbiA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5pY29uID0gbnVsbDtcbiAgICB0aGlzLmZsaXBSdGwgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy50ZXh0TGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYXRoRGF0YSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLndhaXRVbnRpbFZpc2libGUoKCkgPT4ge1xuICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMubG9hZEljb25QYXRoRGF0YSgpO1xuICAgIH0pO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gbnVsbDtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICB0aGlzLmxvYWRJY29uUGF0aERhdGEoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbCwgZmxpcFJ0bCwgcGF0aERhdGEsIHNjYWxlLCB0ZXh0TGFiZWwgfSA9IHRoaXM7XG4gICAgY29uc3QgZGlyID0gZ2V0RWxlbWVudERpcihlbCk7XG4gICAgY29uc3Qgc2l6ZSA9IHNjYWxlVG9QeFtzY2FsZV07XG4gICAgY29uc3Qgc2VtYW50aWMgPSAhIXRleHRMYWJlbDtcbiAgICBjb25zdCBwYXRocyA9IFtdLmNvbmNhdChwYXRoRGF0YSB8fCBcIlwiKTtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtaGlkZGVuXCI6IHRvQXJpYUJvb2xlYW4oIXNlbWFudGljKSwgXCJhcmlhLWxhYmVsXCI6IHNlbWFudGljID8gdGV4dExhYmVsIDogbnVsbCwgcm9sZTogc2VtYW50aWMgPyBcImltZ1wiIDogbnVsbCB9LCBoKFwic3ZnXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5mbGlwUnRsXTogZGlyID09PSBcInJ0bFwiICYmIGZsaXBSdGwsXG4gICAgICAgIHN2ZzogdHJ1ZSxcbiAgICAgIH0sIGZpbGw6IFwiY3VycmVudENvbG9yXCIsIGhlaWdodDogXCIxMDAlXCIsIHZpZXdCb3g6IGAwIDAgJHtzaXplfSAke3NpemV9YCwgd2lkdGg6IFwiMTAwJVwiLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIH0sIHBhdGhzLm1hcCgocGF0aCkgPT4gdHlwZW9mIHBhdGggPT09IFwic3RyaW5nXCIgPyAoaChcInBhdGhcIiwgeyBkOiBwYXRoIH0pKSA6IChoKFwicGF0aFwiLCB7IGQ6IHBhdGguZCwgb3BhY2l0eTogXCJvcGFjaXR5XCIgaW4gcGF0aCA/IHBhdGgub3BhY2l0eSA6IDEgfSkpKSkpKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhc3luYyBsb2FkSWNvblBhdGhEYXRhKCkge1xuICAgIGNvbnN0IHsgaWNvbiwgc2NhbGUsIHZpc2libGUgfSA9IHRoaXM7XG4gICAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIgfHwgIWljb24gfHwgIXZpc2libGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGF0aERhdGEgPSBhd2FpdCBmZXRjaEljb24oeyBpY29uLCBzY2FsZSB9KTtcbiAgICAvLyBXaGlsZSB0aGUgZmV0Y2hJY29uIG1ldGhvZCBpcyBhd2FpdGluZyByZXNwb25zZSwgdGhlIGljb24gcmVxdWVzdGVkIGNhbiBjaGFuZ2UuIFRoaXMgY2hlY2sgaXMgdG8gdmVyaWZ5IHRoZSByZXNwb25zZSByZWNlaXZlZCBiZWxvbmdzIHRvIHRoZSBjdXJyZW50IGljb24uXG4gICAgaWYgKGljb24gIT09IHRoaXMuaWNvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBhdGhEYXRhID0gcGF0aERhdGE7XG4gIH1cbiAgd2FpdFVudGlsVmlzaWJsZShjYWxsYmFjaykge1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcImludGVyc2VjdGlvblwiLCAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCB7IHJvb3RNYXJnaW46IFwiNTBweFwiIH0pO1xuICAgIGlmICghdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWwpO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJpY29uXCI6IFtcImxvYWRJY29uUGF0aERhdGFcIl0sXG4gICAgXCJzY2FsZVwiOiBbXCJsb2FkSWNvblBhdGhEYXRhXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIGljb25Dc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtaWNvblwiLCB7XG4gICAgXCJpY29uXCI6IFs1MTNdLFxuICAgIFwiZmxpcFJ0bFwiOiBbNTE2LCBcImZsaXAtcnRsXCJdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJ0ZXh0TGFiZWxcIjogWzEsIFwidGV4dC1sYWJlbFwiXSxcbiAgICBcInBhdGhEYXRhXCI6IFszMl0sXG4gICAgXCJ2aXNpYmxlXCI6IFszMl1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1pY29uXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWljb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBJY29uKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBJY29uIGFzIEksIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5cbi8qKlxuICogVGhpcyB1dGlsaXR5IGVuc3VyZXMgb2JzZXJ2ZXJzIGFyZSBjcmVhdGVkIG9ubHkgZm9yIGJyb3dzZXIgY29udGV4dHMuXG4gKlxuICogQHBhcmFtIHR5cGUgLSB0aGUgdHlwZSBvZiBvYnNlcnZlciB0byBjcmVhdGVcbiAqIEBwYXJhbSBjYWxsYmFjayAtIHRoZSBvYnNlcnZlciBjYWxsYmFja1xuICogQHBhcmFtIG9wdGlvbnMgLSB0aGUgb2JzZXJ2ZXIgb3B0aW9uc1xuICovXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcih0eXBlLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgY29uc3QgT2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcih0eXBlKTtcbiAgcmV0dXJuIG5ldyBPYnNlcnZlcihjYWxsYmFjaywgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBnZXRPYnNlcnZlcih0eXBlKSB7XG4gIC8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvZG9tL2lzc3Vlcy8xMjYjaXNzdWVjb21tZW50LTEwNDk4MTQ5NDhcbiAgY2xhc3MgRXh0ZW5kZWRNdXRhdGlvbk9ic2VydmVyIGV4dGVuZHMgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrKSB7XG4gICAgICBzdXBlcihjYWxsYmFjayk7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkgPSBbXTtcbiAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gICAgb2JzZXJ2ZSh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeS5wdXNoKHsgdGFyZ2V0LCBvcHRpb25zIH0pO1xuICAgICAgcmV0dXJuIHN1cGVyLm9ic2VydmUodGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgdW5vYnNlcnZlKHRhcmdldCkge1xuICAgICAgY29uc3QgbmV3T2JzZXJ2ZWRFbnRyaWVzID0gdGhpcy5vYnNlcnZlZEVudHJ5LmZpbHRlcigob2JzZXJ2ZWQpID0+IG9ic2VydmVkLnRhcmdldCAhPT0gdGFyZ2V0KTtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeSA9IFtdO1xuICAgICAgdGhpcy5jYWxsYmFjayhzdXBlci50YWtlUmVjb3JkcygpLCB0aGlzKTtcbiAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgICAgbmV3T2JzZXJ2ZWRFbnRyaWVzLmZvckVhY2goKG9ic2VydmVkKSA9PiB0aGlzLm9ic2VydmUob2JzZXJ2ZWQudGFyZ2V0LCBvYnNlcnZlZC5vcHRpb25zKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodHlwZSA9PT0gXCJpbnRlcnNlY3Rpb25cIlxuICAgICAgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgICAgIDogdHlwZSA9PT0gXCJtdXRhdGlvblwiXG4gICAgICAgID8gRXh0ZW5kZWRNdXRhdGlvbk9ic2VydmVyXG4gICAgICAgIDogd2luZG93LlJlc2l6ZU9ic2VydmVyKTtcbiAgfSkoKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlT2JzZXJ2ZXIgYXMgYyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9