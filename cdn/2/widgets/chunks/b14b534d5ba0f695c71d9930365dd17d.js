"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_popover_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/FloatingArrow.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/FloatingArrow.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ FloatingArrow)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const CSS = {
  arrow: "calcite-floating-ui-arrow",
  arrowStroke: "calcite-floating-ui-arrow__stroke",
};
const DEFAULTS = {
  width: 12,
  height: 6,
  strokeWidth: 1,
};
/**
 * Renders a SVG element to be used as a floating-ui arrow.
 *
 * This functional component should be rendered inside a `FloatingUIComponent` when it needs an arrow element.
 *
 * @param floatingLayout.floatingLayout
 * @param floatingLayout – The effective floating layout to render the arrow vertically or horizontally. Possible values: `vertical` or `horizontal`.
 *
 * See [floating-ui](https://github.com/Esri/calcite-design-system/blob/main/src/utils/floating-ui.ts)
 * @param floatingLayout.key
 * @param floatingLayout.ref
 */
const FloatingArrow = ({ floatingLayout, key, ref, }) => {
  const { width, height, strokeWidth } = DEFAULTS;
  const svgX = width / 2;
  const isVertical = floatingLayout === "vertical";
  const dValue = "M0,0" +
    ` H${width}` +
    ` L${width - svgX},${height}` +
    ` Q${svgX},${height} ${svgX},${height}` +
    " Z";
  return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { "aria-hidden": "true", class: CSS.arrow, height: width, key: key, viewBox: `0 0 ${width} ${width + (!isVertical ? strokeWidth : 0)}`, width: width + (isVertical ? strokeWidth : 0), 
    // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
    ref: ref },
    strokeWidth > 0 && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { class: CSS.arrowStroke, d: dValue, fill: "none", "stroke-width": strokeWidth + 1 })),
    (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: dValue, stroke: "none" })));
};




/***/ }),

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

/***/ "./node_modules/@esri/calcite-components/dist/components/popover.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/popover.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ Popover),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _floating_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./floating-ui.js */ "./node_modules/@esri/calcite-components/dist/components/floating-ui.js");
/* harmony import */ var _focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusTrapComponent.js */ "./node_modules/@esri/calcite-components/dist/components/focusTrapComponent.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _openCloseComponent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./openCloseComponent.js */ "./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js");
/* harmony import */ var _Heading_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Heading.js */ "./node_modules/@esri/calcite-components/dist/components/Heading.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _FloatingArrow_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FloatingArrow.js */ "./node_modules/@esri/calcite-components/dist/components/FloatingArrow.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


















const CSS = {
  container: "container",
  imageContainer: "image-container",
  closeButtonContainer: "close-button-container",
  closeButton: "close-button",
  content: "content",
  hasHeader: "has-header",
  header: "header",
  headerContent: "header-content",
  heading: "heading",
};
const defaultPopoverPlacement = "auto";
const ARIA_CONTROLS = "aria-controls";
const ARIA_EXPANDED = "aria-expanded";

class PopoverManager {
  constructor() {
    // --------------------------------------------------------------------------
    //
    //  Private Properties
    //
    // --------------------------------------------------------------------------
    this.registeredElements = new Map();
    this.registeredElementCount = 0;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.queryPopover = (composedPath) => {
      const { registeredElements } = this;
      const registeredElement = composedPath.find((pathEl) => registeredElements.has(pathEl));
      return registeredElements.get(registeredElement);
    };
    this.togglePopovers = (event) => {
      const composedPath = event.composedPath();
      const togglePopover = this.queryPopover(composedPath);
      if (togglePopover && !togglePopover.triggerDisabled) {
        togglePopover.open = !togglePopover.open;
      }
      Array.from(this.registeredElements.values())
        .filter((popover) => popover !== togglePopover && popover.autoClose && popover.open && !composedPath.includes(popover))
        .forEach((popover) => (popover.open = false));
    };
    this.keyHandler = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      if (event.key === "Escape") {
        this.closeAllPopovers();
      }
      else if ((0,_key_js__WEBPACK_IMPORTED_MODULE_8__.i)(event.key)) {
        this.togglePopovers(event);
      }
    };
    this.clickHandler = (event) => {
      if ((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.j)(event)) {
        this.togglePopovers(event);
      }
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  registerElement(referenceEl, popover) {
    this.registeredElementCount++;
    this.registeredElements.set(referenceEl, popover);
    if (this.registeredElementCount === 1) {
      this.addListeners();
    }
  }
  unregisterElement(referenceEl) {
    if (this.registeredElements.delete(referenceEl)) {
      this.registeredElementCount--;
    }
    if (this.registeredElementCount === 0) {
      this.removeListeners();
    }
  }
  closeAllPopovers() {
    Array.from(this.registeredElements.values()).forEach((popover) => (popover.open = false));
  }
  addListeners() {
    document.addEventListener("pointerdown", this.clickHandler, { capture: true });
    document.addEventListener("keydown", this.keyHandler, { capture: true });
  }
  removeListeners() {
    document.removeEventListener("pointerdown", this.clickHandler, { capture: true });
    document.removeEventListener("keydown", this.keyHandler, { capture: true });
  }
}

const popoverCss = ":host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-app-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-app-z-index) * -1);fill:var(--calcite-ui-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-ui-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-ui-text-1)}.container.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}:host([hidden]){display:none}[hidden]{display:none}";

const manager = new PopoverManager();
const Popover = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_16__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_16__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calcitePopoverBeforeClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_16__.createEvent)(this, "calcitePopoverBeforeClose", 6);
    this.calcitePopoverClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_16__.createEvent)(this, "calcitePopoverClose", 6);
    this.calcitePopoverBeforeOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_16__.createEvent)(this, "calcitePopoverBeforeOpen", 6);
    this.calcitePopoverOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_16__.createEvent)(this, "calcitePopoverOpen", 6);
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_10__.c)("mutation", () => this.updateFocusTrapElements());
    this.guid = `calcite-popover-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_3__.g)()}`;
    this.openTransitionProp = "opacity";
    this.hasLoaded = false;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
    };
    this.setFilteredPlacements = () => {
      const { el, flipPlacements } = this;
      this.filteredFlipPlacements = flipPlacements
        ? (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_0__.f)(flipPlacements, el)
        : null;
    };
    this.setUpReferenceElement = (warn = true) => {
      this.removeReferences();
      this.effectiveReferenceElement = this.getReferenceElement();
      (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, this.effectiveReferenceElement, this.el);
      const { el, referenceElement, effectiveReferenceElement } = this;
      if (warn && referenceElement && !effectiveReferenceElement) {
        console.warn(`${el.tagName}: reference-element id "${referenceElement}" was not found.`, {
          el,
        });
      }
      this.addReferences();
    };
    this.getId = () => {
      return this.el.id || this.guid;
    };
    this.setExpandedAttr = () => {
      const { effectiveReferenceElement, open } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      if ("setAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.setAttribute(ARIA_EXPANDED, (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.t)(open));
      }
    };
    this.addReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      const id = this.getId();
      if ("setAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.setAttribute(ARIA_CONTROLS, id);
      }
      manager.registerElement(effectiveReferenceElement, this.el);
      this.setExpandedAttr();
    };
    this.removeReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      if ("removeAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.removeAttribute(ARIA_CONTROLS);
        effectiveReferenceElement.removeAttribute(ARIA_EXPANDED);
      }
      manager.unregisterElement(effectiveReferenceElement);
    };
    this.hide = () => {
      this.open = false;
    };
    this.storeArrowEl = (el) => {
      this.arrowEl = el;
      this.reposition(true);
    };
    this.autoClose = false;
    this.closable = false;
    this.flipDisabled = false;
    this.focusTrapDisabled = false;
    this.pointerDisabled = false;
    this.flipPlacements = undefined;
    this.heading = undefined;
    this.headingLevel = undefined;
    this.label = undefined;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.offsetDistance = _floating_ui_js__WEBPACK_IMPORTED_MODULE_0__.b;
    this.offsetSkidding = 0;
    this.open = false;
    this.overlayPositioning = "absolute";
    this.placement = defaultPopoverPlacement;
    this.referenceElement = undefined;
    this.scale = "m";
    this.triggerDisabled = false;
    this.effectiveLocale = "";
    this.floatingLayout = "vertical";
    this.effectiveReferenceElement = undefined;
    this.defaultMessages = undefined;
  }
  handleFocusTrapDisabled(focusTrapDisabled) {
    if (!this.open) {
      return;
    }
    focusTrapDisabled ? (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.d)(this) : (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements();
    this.reposition(true);
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  offsetDistanceOffsetHandler() {
    this.reposition(true);
  }
  offsetSkiddingHandler() {
    this.reposition(true);
  }
  openHandler(value) {
    (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_4__.o)(this);
    if (value) {
      this.reposition(true);
    }
    this.setExpandedAttr();
  }
  overlayPositioningHandler() {
    this.reposition(true);
  }
  placementHandler() {
    this.reposition(true);
  }
  referenceElementHandler() {
    this.setUpReferenceElement();
    this.reposition(true);
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.setFilteredPlacements();
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    this.setUpReferenceElement(this.hasLoaded);
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    if (this.open) {
      (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_4__.o)(this);
    }
  }
  async componentWillLoad() {
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.s)(this);
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_9__.a)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_9__.s)(this);
    if (this.referenceElement && !this.effectiveReferenceElement) {
      this.setUpReferenceElement();
    }
    this.reposition();
    this.hasLoaded = true;
  }
  disconnectedCallback() {
    this.removeReferences();
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, this.effectiveReferenceElement, this.el);
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(delayed = false) {
    const { el, effectiveReferenceElement, placement, overlayPositioning, flipDisabled, filteredFlipPlacements, offsetDistance, offsetSkidding, arrowEl, } = this;
    return (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, {
      floatingEl: el,
      referenceEl: effectiveReferenceElement,
      overlayPositioning,
      placement,
      flipDisabled,
      flipPlacements: filteredFlipPlacements,
      offsetDistance,
      offsetSkidding,
      arrowEl,
      type: "popover",
    }, delayed);
  }
  /**
   * Sets focus on the component's first focusable element.
   */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_9__.c)(this);
    (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_16__.forceUpdate)(this.el);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.f)(this.el);
  }
  /**
   * Updates the element(s) that are used within the focus-trap of the component.
   */
  async updateFocusTrapElements() {
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  getReferenceElement() {
    const { referenceElement, el } = this;
    return ((typeof referenceElement === "string"
      ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.q)(el, { id: referenceElement })
      : referenceElement) || null);
  }
  onBeforeOpen() {
    this.calcitePopoverBeforeOpen.emit();
  }
  onOpen() {
    this.calcitePopoverOpen.emit();
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
  }
  onBeforeClose() {
    this.calcitePopoverBeforeClose.emit();
  }
  onClose() {
    this.calcitePopoverClose.emit();
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderCloseButton() {
    const { messages, closable } = this;
    return closable ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_16__.h)("div", { class: CSS.closeButtonContainer, key: CSS.closeButtonContainer }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_16__.h)("calcite-action", { appearance: "transparent", class: CSS.closeButton, onClick: this.hide, scale: this.scale, text: messages.close,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (closeButtonEl) => (this.closeButtonEl = closeButtonEl) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_16__.h)("calcite-icon", { icon: "x", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_12__.g)(this.scale) })))) : null;
  }
  renderHeader() {
    const { heading, headingLevel } = this;
    const headingNode = heading ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_16__.h)(_Heading_js__WEBPACK_IMPORTED_MODULE_5__.H, { class: CSS.heading, level: headingLevel }, heading)) : null;
    return headingNode ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_16__.h)("div", { class: CSS.header, key: CSS.header }, headingNode, this.renderCloseButton())) : null;
  }
  render() {
    const { effectiveReferenceElement, heading, label, open, pointerDisabled, floatingLayout } = this;
    const displayed = effectiveReferenceElement && open;
    const hidden = !displayed;
    const arrowNode = !pointerDisabled ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_16__.h)(_FloatingArrow_js__WEBPACK_IMPORTED_MODULE_11__.F, { floatingLayout: floatingLayout, key: "floating-arrow",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.storeArrowEl })) : null;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_16__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_16__.Host, { "aria-hidden": (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.t)(hidden), "aria-label": label, "aria-live": "polite", "calcite-hydrated-hidden": hidden, id: this.getId(), role: "dialog" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_16__.h)("div", { class: {
        [_floating_ui_js__WEBPACK_IMPORTED_MODULE_0__.F.animation]: true,
        [_floating_ui_js__WEBPACK_IMPORTED_MODULE_0__.F.animationActive]: displayed,
      },
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setTransitionEl }, arrowNode, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_16__.h)("div", { class: {
        [CSS.hasHeader]: !!heading,
        [CSS.container]: true,
      } }, this.renderHeader(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_16__.h)("div", { class: CSS.content }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_16__.h)("slot", null)), !heading ? this.renderCloseButton() : null))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "focusTrapDisabled": ["handleFocusTrapDisabled"],
    "flipPlacements": ["flipPlacementsHandler"],
    "messageOverrides": ["onMessagesChange"],
    "offsetDistance": ["offsetDistanceOffsetHandler"],
    "offsetSkidding": ["offsetSkiddingHandler"],
    "open": ["openHandler"],
    "overlayPositioning": ["overlayPositioningHandler"],
    "placement": ["placementHandler"],
    "referenceElement": ["referenceElementHandler"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return popoverCss; }
}, [1, "calcite-popover", {
    "autoClose": [516, "auto-close"],
    "closable": [516],
    "flipDisabled": [516, "flip-disabled"],
    "focusTrapDisabled": [516, "focus-trap-disabled"],
    "pointerDisabled": [516, "pointer-disabled"],
    "flipPlacements": [16],
    "heading": [1],
    "headingLevel": [514, "heading-level"],
    "label": [1],
    "messageOverrides": [1040],
    "messages": [1040],
    "offsetDistance": [514, "offset-distance"],
    "offsetSkidding": [514, "offset-skidding"],
    "open": [1540],
    "overlayPositioning": [513, "overlay-positioning"],
    "placement": [513],
    "referenceElement": [1, "reference-element"],
    "scale": [513],
    "triggerDisabled": [516, "trigger-disabled"],
    "effectiveLocale": [32],
    "floatingLayout": [32],
    "effectiveReferenceElement": [32],
    "defaultMessages": [32],
    "reposition": [64],
    "setFocus": [64],
    "updateFocusTrapElements": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-popover", "calcite-action", "calcite-icon", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-popover":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Popover);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        (0,_action_js__WEBPACK_IMPORTED_MODULE_13__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_14__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_15__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYjE0YjUzNGQ1YmEwZjY5NWM3MWQ5OTMwMzY1ZGQxN2QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJEOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkJBQTJCO0FBQ3BELFVBQVUsNkJBQTZCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsTUFBTTtBQUNmLFNBQVMsYUFBYSxHQUFHLE9BQU87QUFDaEMsU0FBUyxLQUFLLEdBQUcsUUFBUSxFQUFFLEtBQUssR0FBRyxPQUFPO0FBQzFDO0FBQ0EsVUFBVSx5RUFBQyxVQUFVLGtGQUFrRixPQUFPLEVBQUUsd0NBQXdDO0FBQ3hKO0FBQ0EsY0FBYztBQUNkLHdCQUF3Qix5RUFBQyxXQUFXLGtGQUFrRjtBQUN0SCxJQUFJLHlFQUFDLFdBQVcsMkJBQTJCO0FBQzNDOztBQUU4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMkQ7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFlBQVk7QUFDbkQ7QUFDQSxTQUFTLHlFQUFDLGVBQWUsVUFBVTtBQUNuQzs7QUFFb0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0SDtBQUN1RDtBQUNuQztBQUNwQjtBQUN0RjtBQUNvQztBQUM5QjtBQUNrQztBQUNvQztBQUNsRTtBQUM4RDtBQUN6RDtBQUNHO0FBQ0w7QUFDTTtBQUNGO0FBQ0U7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhDQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNENBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBcUI7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVrRCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9GbG9hdGluZ0Fycm93LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9IZWFkaW5nLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9wb3BvdmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgYXJyb3c6IFwiY2FsY2l0ZS1mbG9hdGluZy11aS1hcnJvd1wiLFxuICBhcnJvd1N0cm9rZTogXCJjYWxjaXRlLWZsb2F0aW5nLXVpLWFycm93X19zdHJva2VcIixcbn07XG5jb25zdCBERUZBVUxUUyA9IHtcbiAgd2lkdGg6IDEyLFxuICBoZWlnaHQ6IDYsXG4gIHN0cm9rZVdpZHRoOiAxLFxufTtcbi8qKlxuICogUmVuZGVycyBhIFNWRyBlbGVtZW50IHRvIGJlIHVzZWQgYXMgYSBmbG9hdGluZy11aSBhcnJvdy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uYWwgY29tcG9uZW50IHNob3VsZCBiZSByZW5kZXJlZCBpbnNpZGUgYSBgRmxvYXRpbmdVSUNvbXBvbmVudGAgd2hlbiBpdCBuZWVkcyBhbiBhcnJvdyBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSBmbG9hdGluZ0xheW91dC5mbG9hdGluZ0xheW91dFxuICogQHBhcmFtIGZsb2F0aW5nTGF5b3V0IOKAkyBUaGUgZWZmZWN0aXZlIGZsb2F0aW5nIGxheW91dCB0byByZW5kZXIgdGhlIGFycm93IHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5LiBQb3NzaWJsZSB2YWx1ZXM6IGB2ZXJ0aWNhbGAgb3IgYGhvcml6b250YWxgLlxuICpcbiAqIFNlZSBbZmxvYXRpbmctdWldKGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vc3JjL3V0aWxzL2Zsb2F0aW5nLXVpLnRzKVxuICogQHBhcmFtIGZsb2F0aW5nTGF5b3V0LmtleVxuICogQHBhcmFtIGZsb2F0aW5nTGF5b3V0LnJlZlxuICovXG5jb25zdCBGbG9hdGluZ0Fycm93ID0gKHsgZmxvYXRpbmdMYXlvdXQsIGtleSwgcmVmLCB9KSA9PiB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgc3Ryb2tlV2lkdGggfSA9IERFRkFVTFRTO1xuICBjb25zdCBzdmdYID0gd2lkdGggLyAyO1xuICBjb25zdCBpc1ZlcnRpY2FsID0gZmxvYXRpbmdMYXlvdXQgPT09IFwidmVydGljYWxcIjtcbiAgY29uc3QgZFZhbHVlID0gXCJNMCwwXCIgK1xuICAgIGAgSCR7d2lkdGh9YCArXG4gICAgYCBMJHt3aWR0aCAtIHN2Z1h9LCR7aGVpZ2h0fWAgK1xuICAgIGAgUSR7c3ZnWH0sJHtoZWlnaHR9ICR7c3ZnWH0sJHtoZWlnaHR9YCArXG4gICAgXCIgWlwiO1xuICByZXR1cm4gKGgoXCJzdmdcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogQ1NTLmFycm93LCBoZWlnaHQ6IHdpZHRoLCBrZXk6IGtleSwgdmlld0JveDogYDAgMCAke3dpZHRofSAke3dpZHRoICsgKCFpc1ZlcnRpY2FsID8gc3Ryb2tlV2lkdGggOiAwKX1gLCB3aWR0aDogd2lkdGggKyAoaXNWZXJ0aWNhbCA/IHN0cm9rZVdpZHRoIDogMCksIFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgcmVmOiByZWYgfSxcbiAgICBzdHJva2VXaWR0aCA+IDAgJiYgKGgoXCJwYXRoXCIsIHsgY2xhc3M6IENTUy5hcnJvd1N0cm9rZSwgZDogZFZhbHVlLCBmaWxsOiBcIm5vbmVcIiwgXCJzdHJva2Utd2lkdGhcIjogc3Ryb2tlV2lkdGggKyAxIH0pKSxcbiAgICBoKFwicGF0aFwiLCB7IGQ6IGRWYWx1ZSwgc3Ryb2tlOiBcIm5vbmVcIiB9KSkpO1xufTtcblxuZXhwb3J0IHsgRmxvYXRpbmdBcnJvdyBhcyBGIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG5mdW5jdGlvbiBjb25zdHJhaW5IZWFkaW5nTGV2ZWwobGV2ZWwpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KE1hdGguY2VpbChsZXZlbCksIDEpLCA2KTtcbn1cbmNvbnN0IEhlYWRpbmcgPSAocHJvcHMsIGNoaWxkcmVuKSA9PiB7XG4gIGNvbnN0IEhlYWRpbmdUYWcgPSBwcm9wcy5sZXZlbCA/IGBoJHtwcm9wcy5sZXZlbH1gIDogXCJkaXZcIjtcbiAgZGVsZXRlIHByb3BzLmxldmVsO1xuICByZXR1cm4gaChIZWFkaW5nVGFnLCB7IC4uLnByb3BzIH0sIGNoaWxkcmVuKTtcbn07XG5cbmV4cG9ydCB7IEhlYWRpbmcgYXMgSCwgY29uc3RyYWluSGVhZGluZ0xldmVsIGFzIGMgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBmb3JjZVVwZGF0ZSwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGYgYXMgZmlsdGVyQ29tcHV0ZWRQbGFjZW1lbnRzLCBjIGFzIGNvbm5lY3RGbG9hdGluZ1VJLCBiIGFzIGRlZmF1bHRPZmZzZXREaXN0YW5jZSwgYSBhcyBkaXNjb25uZWN0RmxvYXRpbmdVSSwgciBhcyByZXBvc2l0aW9uLCBGIGFzIEZsb2F0aW5nQ1NTIH0gZnJvbSAnLi9mbG9hdGluZy11aS5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlYWN0aXZhdGVGb2N1c1RyYXAsIGEgYXMgYWN0aXZhdGVGb2N1c1RyYXAsIGMgYXMgY29ubmVjdEZvY3VzVHJhcCwgdSBhcyB1cGRhdGVGb2N1c1RyYXBFbGVtZW50cyB9IGZyb20gJy4vZm9jdXNUcmFwQ29tcG9uZW50LmpzJztcbmltcG9ydCB7IGogYXMgaXNQcmltYXJ5UG9pbnRlckJ1dHRvbiwgdCBhcyB0b0FyaWFCb29sZWFuLCBmIGFzIGZvY3VzRmlyc3RUYWJiYWJsZSwgcSBhcyBxdWVyeUVsZW1lbnRSb290cyB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC5qcyc7XG5pbXBvcnQgeyBvIGFzIG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50IH0gZnJvbSAnLi9vcGVuQ2xvc2VDb21wb25lbnQuanMnO1xuaW1wb3J0IHsgSCBhcyBIZWFkaW5nIH0gZnJvbSAnLi9IZWFkaW5nLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzQWN0aXZhdGlvbktleSB9IGZyb20gJy4va2V5LmpzJztcbmltcG9ydCB7IGEgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgcyBhcyBzZXRDb21wb25lbnRMb2FkZWQsIGMgYXMgY29tcG9uZW50Rm9jdXNhYmxlIH0gZnJvbSAnLi9sb2FkYWJsZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuaW1wb3J0IHsgRiBhcyBGbG9hdGluZ0Fycm93IH0gZnJvbSAnLi9GbG9hdGluZ0Fycm93LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0SWNvblNjYWxlIH0gZnJvbSAnLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDMgfSBmcm9tICcuL2FjdGlvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMiB9IGZyb20gJy4vaWNvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMSB9IGZyb20gJy4vbG9hZGVyLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGltYWdlQ29udGFpbmVyOiBcImltYWdlLWNvbnRhaW5lclwiLFxuICBjbG9zZUJ1dHRvbkNvbnRhaW5lcjogXCJjbG9zZS1idXR0b24tY29udGFpbmVyXCIsXG4gIGNsb3NlQnV0dG9uOiBcImNsb3NlLWJ1dHRvblwiLFxuICBjb250ZW50OiBcImNvbnRlbnRcIixcbiAgaGFzSGVhZGVyOiBcImhhcy1oZWFkZXJcIixcbiAgaGVhZGVyOiBcImhlYWRlclwiLFxuICBoZWFkZXJDb250ZW50OiBcImhlYWRlci1jb250ZW50XCIsXG4gIGhlYWRpbmc6IFwiaGVhZGluZ1wiLFxufTtcbmNvbnN0IGRlZmF1bHRQb3BvdmVyUGxhY2VtZW50ID0gXCJhdXRvXCI7XG5jb25zdCBBUklBX0NPTlRST0xTID0gXCJhcmlhLWNvbnRyb2xzXCI7XG5jb25zdCBBUklBX0VYUEFOREVEID0gXCJhcmlhLWV4cGFuZGVkXCI7XG5cbmNsYXNzIFBvcG92ZXJNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIFByb3BlcnRpZXNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5yZWdpc3RlcmVkRWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5yZWdpc3RlcmVkRWxlbWVudENvdW50ID0gMDtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnF1ZXJ5UG9wb3ZlciA9IChjb21wb3NlZFBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHsgcmVnaXN0ZXJlZEVsZW1lbnRzIH0gPSB0aGlzO1xuICAgICAgY29uc3QgcmVnaXN0ZXJlZEVsZW1lbnQgPSBjb21wb3NlZFBhdGguZmluZCgocGF0aEVsKSA9PiByZWdpc3RlcmVkRWxlbWVudHMuaGFzKHBhdGhFbCkpO1xuICAgICAgcmV0dXJuIHJlZ2lzdGVyZWRFbGVtZW50cy5nZXQocmVnaXN0ZXJlZEVsZW1lbnQpO1xuICAgIH07XG4gICAgdGhpcy50b2dnbGVQb3BvdmVycyA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG4gICAgICBjb25zdCB0b2dnbGVQb3BvdmVyID0gdGhpcy5xdWVyeVBvcG92ZXIoY29tcG9zZWRQYXRoKTtcbiAgICAgIGlmICh0b2dnbGVQb3BvdmVyICYmICF0b2dnbGVQb3BvdmVyLnRyaWdnZXJEaXNhYmxlZCkge1xuICAgICAgICB0b2dnbGVQb3BvdmVyLm9wZW4gPSAhdG9nZ2xlUG9wb3Zlci5vcGVuO1xuICAgICAgfVxuICAgICAgQXJyYXkuZnJvbSh0aGlzLnJlZ2lzdGVyZWRFbGVtZW50cy52YWx1ZXMoKSlcbiAgICAgICAgLmZpbHRlcigocG9wb3ZlcikgPT4gcG9wb3ZlciAhPT0gdG9nZ2xlUG9wb3ZlciAmJiBwb3BvdmVyLmF1dG9DbG9zZSAmJiBwb3BvdmVyLm9wZW4gJiYgIWNvbXBvc2VkUGF0aC5pbmNsdWRlcyhwb3BvdmVyKSlcbiAgICAgICAgLmZvckVhY2goKHBvcG92ZXIpID0+IChwb3BvdmVyLm9wZW4gPSBmYWxzZSkpO1xuICAgIH07XG4gICAgdGhpcy5rZXlIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIHRoaXMuY2xvc2VBbGxQb3BvdmVycygpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNBY3RpdmF0aW9uS2V5KGV2ZW50LmtleSkpIHtcbiAgICAgICAgdGhpcy50b2dnbGVQb3BvdmVycyhldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlUG9wb3ZlcnMoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlZ2lzdGVyRWxlbWVudChyZWZlcmVuY2VFbCwgcG9wb3Zlcikge1xuICAgIHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRDb3VudCsrO1xuICAgIHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRzLnNldChyZWZlcmVuY2VFbCwgcG9wb3Zlcik7XG4gICAgaWYgKHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRDb3VudCA9PT0gMSkge1xuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cbiAgdW5yZWdpc3RlckVsZW1lbnQocmVmZXJlbmNlRWwpIHtcbiAgICBpZiAodGhpcy5yZWdpc3RlcmVkRWxlbWVudHMuZGVsZXRlKHJlZmVyZW5jZUVsKSkge1xuICAgICAgdGhpcy5yZWdpc3RlcmVkRWxlbWVudENvdW50LS07XG4gICAgfVxuICAgIGlmICh0aGlzLnJlZ2lzdGVyZWRFbGVtZW50Q291bnQgPT09IDApIHtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG4gIGNsb3NlQWxsUG9wb3ZlcnMoKSB7XG4gICAgQXJyYXkuZnJvbSh0aGlzLnJlZ2lzdGVyZWRFbGVtZW50cy52YWx1ZXMoKSkuZm9yRWFjaCgocG9wb3ZlcikgPT4gKHBvcG92ZXIub3BlbiA9IGZhbHNlKSk7XG4gIH1cbiAgYWRkTGlzdGVuZXJzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCB0aGlzLmNsaWNrSGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5SGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICB9XG4gIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgdGhpcy5jbGlja0hhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleUhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgfVxufVxuXG5jb25zdCBwb3BvdmVyQ3NzID0gXCI6aG9zdHstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLXBvcG92ZXItei1pbmRleCwgdmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1wb3B1cCkpO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXgpfS5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLCB2aXNpYmlsaXR5LCBvcGFjaXR5O29wYWNpdHk6MDtib3gtc2hhZG93OjAgMCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2JvcmRlci1yYWRpdXM6MC4yNXJlbX06aG9zdChbZGF0YS1wbGFjZW1lbnRePWJvdHRvbV0pIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTVweCl9Omhvc3QoW2RhdGEtcGxhY2VtZW50Xj10b3BdKSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVZKDVweCl9Omhvc3QoW2RhdGEtcGxhY2VtZW50Xj1sZWZ0XSkgLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWCg1cHgpfTpob3N0KFtkYXRhLXBsYWNlbWVudF49cmlnaHRdKSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01cHgpfTpob3N0KFtkYXRhLXBsYWNlbWVudF0pIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW0tLWFjdGl2ZXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwKX06aG9zdChbY2FsY2l0ZS1oeWRyYXRlZC1oaWRkZW5dKXt2aXNpYmlsaXR5OmhpZGRlbiAhaW1wb3J0YW50O3BvaW50ZXItZXZlbnRzOm5vbmV9LmNhbGNpdGUtZmxvYXRpbmctdWktYXJyb3d7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OmNhbGModmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleCkgKiAtMSk7ZmlsbDp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9LmNhbGNpdGUtZmxvYXRpbmctdWktYXJyb3dfX3N0cm9rZXtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9Omhvc3QoW3NjYWxlPXNdKSAuaGVhZGluZ3twYWRkaW5nLWlubGluZTowLjc1cmVtO3BhZGRpbmctYmxvY2s6MC41cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3QoW3NjYWxlPW1dKSAuaGVhZGluZ3twYWRkaW5nLWlubGluZToxcmVtO3BhZGRpbmctYmxvY2s6MC43NXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3QoW3NjYWxlPWxdKSAuaGVhZGluZ3twYWRkaW5nLWlubGluZToxLjI1cmVtO3BhZGRpbmctYmxvY2s6MXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMSk7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3R7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdChbb3Blbl0pe3BvaW50ZXItZXZlbnRzOmluaXRpYWx9LmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXtib3JkZXItcmFkaXVzOjAuMjVyZW07Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfS5hcnJvdzo6YmVmb3Jle291dGxpbmU6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfS5oZWFkZXJ7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIGF1dG87YWxpZ24taXRlbXM6c3RyZXRjaDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtib3JkZXItd2lkdGg6MHB4O2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItYmxvY2stZW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfS5oZWFkaW5ne21hcmdpbjowcHg7ZGlzcGxheTpibG9jaztmbGV4OjEgMSBhdXRvO2FsaWduLXNlbGY6Y2VudGVyO3doaXRlLXNwYWNlOm5vcm1hbDtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO3dvcmQtd3JhcDpicmVhay13b3JkO3dvcmQtYnJlYWs6YnJlYWstd29yZH0uY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtibG9jay1zaXplOjEwMCU7ZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtd3JhcDpub3dyYXA7Ym9yZGVyLXJhZGl1czowLjI1cmVtO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0uY29udGFpbmVyLmhhcy1oZWFkZXJ7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5jb250ZW50e2Rpc3BsYXk6ZmxleDtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC13cmFwOm5vd3JhcDthbGlnbi1zZWxmOmNlbnRlcjt3b3JkLXdyYXA6YnJlYWstd29yZDt3b3JkLWJyZWFrOmJyZWFrLXdvcmR9LmNsb3NlLWJ1dHRvbi1jb250YWluZXJ7ZGlzcGxheTpmbGV4O292ZXJmbG93OmhpZGRlbjtmbGV4OjAgMCBhdXRvO2JvcmRlci1zdGFydC1lbmQtcmFkaXVzOjAuMjVyZW07Ym9yZGVyLWVuZC1lbmQtcmFkaXVzOjAuMjVyZW19OjpzbG90dGVkKGNhbGNpdGUtcGFuZWwpLDo6c2xvdHRlZChjYWxjaXRlLWZsb3cpe2Jsb2NrLXNpemU6MTAwJX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgbWFuYWdlciA9IG5ldyBQb3BvdmVyTWFuYWdlcigpO1xuY29uc3QgUG9wb3ZlciA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlUG9wb3ZlckJlZm9yZUNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlUG9wb3ZlckJlZm9yZUNsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZVBvcG92ZXJDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVBvcG92ZXJDbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVQb3BvdmVyQmVmb3JlT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVBvcG92ZXJCZWZvcmVPcGVuXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZVBvcG92ZXJPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlUG9wb3Zlck9wZW5cIiwgNik7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCAoKSA9PiB0aGlzLnVwZGF0ZUZvY3VzVHJhcEVsZW1lbnRzKCkpO1xuICAgIHRoaXMuZ3VpZCA9IGBjYWxjaXRlLXBvcG92ZXItJHtndWlkKCl9YDtcbiAgICB0aGlzLm9wZW5UcmFuc2l0aW9uUHJvcCA9IFwib3BhY2l0eVwiO1xuICAgIHRoaXMuaGFzTG9hZGVkID0gZmFsc2U7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbkVsID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLnNldEZpbHRlcmVkUGxhY2VtZW50cyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZWwsIGZsaXBQbGFjZW1lbnRzIH0gPSB0aGlzO1xuICAgICAgdGhpcy5maWx0ZXJlZEZsaXBQbGFjZW1lbnRzID0gZmxpcFBsYWNlbWVudHNcbiAgICAgICAgPyBmaWx0ZXJDb21wdXRlZFBsYWNlbWVudHMoZmxpcFBsYWNlbWVudHMsIGVsKVxuICAgICAgICA6IG51bGw7XG4gICAgfTtcbiAgICB0aGlzLnNldFVwUmVmZXJlbmNlRWxlbWVudCA9ICh3YXJuID0gdHJ1ZSkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVSZWZlcmVuY2VzKCk7XG4gICAgICB0aGlzLmVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLmdldFJlZmVyZW5jZUVsZW1lbnQoKTtcbiAgICAgIGNvbm5lY3RGbG9hdGluZ1VJKHRoaXMsIHRoaXMuZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCwgdGhpcy5lbCk7XG4gICAgICBjb25zdCB7IGVsLCByZWZlcmVuY2VFbGVtZW50LCBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50IH0gPSB0aGlzO1xuICAgICAgaWYgKHdhcm4gJiYgcmVmZXJlbmNlRWxlbWVudCAmJiAhZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCkge1xuICAgICAgICBjb25zb2xlLndhcm4oYCR7ZWwudGFnTmFtZX06IHJlZmVyZW5jZS1lbGVtZW50IGlkIFwiJHtyZWZlcmVuY2VFbGVtZW50fVwiIHdhcyBub3QgZm91bmQuYCwge1xuICAgICAgICAgIGVsLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWRkUmVmZXJlbmNlcygpO1xuICAgIH07XG4gICAgdGhpcy5nZXRJZCA9ICgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmVsLmlkIHx8IHRoaXMuZ3VpZDtcbiAgICB9O1xuICAgIHRoaXMuc2V0RXhwYW5kZWRBdHRyID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LCBvcGVuIH0gPSB0aGlzO1xuICAgICAgaWYgKCFlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChcInNldEF0dHJpYnV0ZVwiIGluIGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpIHtcbiAgICAgICAgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudC5zZXRBdHRyaWJ1dGUoQVJJQV9FWFBBTkRFRCwgdG9BcmlhQm9vbGVhbihvcGVuKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmFkZFJlZmVyZW5jZXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQgfSA9IHRoaXM7XG4gICAgICBpZiAoIWVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaWQgPSB0aGlzLmdldElkKCk7XG4gICAgICBpZiAoXCJzZXRBdHRyaWJ1dGVcIiBpbiBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KSB7XG4gICAgICAgIGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQuc2V0QXR0cmlidXRlKEFSSUFfQ09OVFJPTFMsIGlkKTtcbiAgICAgIH1cbiAgICAgIG1hbmFnZXIucmVnaXN0ZXJFbGVtZW50KGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuZWwpO1xuICAgICAgdGhpcy5zZXRFeHBhbmRlZEF0dHIoKTtcbiAgICB9O1xuICAgIHRoaXMucmVtb3ZlUmVmZXJlbmNlcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCB9ID0gdGhpcztcbiAgICAgIGlmICghZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoXCJyZW1vdmVBdHRyaWJ1dGVcIiBpbiBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KSB7XG4gICAgICAgIGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKEFSSUFfQ09OVFJPTFMpO1xuICAgICAgICBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShBUklBX0VYUEFOREVEKTtcbiAgICAgIH1cbiAgICAgIG1hbmFnZXIudW5yZWdpc3RlckVsZW1lbnQoZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhpZGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB9O1xuICAgIHRoaXMuc3RvcmVBcnJvd0VsID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmFycm93RWwgPSBlbDtcbiAgICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICB9O1xuICAgIHRoaXMuYXV0b0Nsb3NlID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuZmxpcERpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb2N1c1RyYXBEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMucG9pbnRlckRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mbGlwUGxhY2VtZW50cyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhlYWRpbmcgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oZWFkaW5nTGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9mZnNldERpc3RhbmNlID0gZGVmYXVsdE9mZnNldERpc3RhbmNlO1xuICAgIHRoaXMub2Zmc2V0U2tpZGRpbmcgPSAwO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMub3ZlcmxheVBvc2l0aW9uaW5nID0gXCJhYnNvbHV0ZVwiO1xuICAgIHRoaXMucGxhY2VtZW50ID0gZGVmYXVsdFBvcG92ZXJQbGFjZW1lbnQ7XG4gICAgdGhpcy5yZWZlcmVuY2VFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnRyaWdnZXJEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgICB0aGlzLmZsb2F0aW5nTGF5b3V0ID0gXCJ2ZXJ0aWNhbFwiO1xuICAgIHRoaXMuZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICBoYW5kbGVGb2N1c1RyYXBEaXNhYmxlZChmb2N1c1RyYXBEaXNhYmxlZCkge1xuICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvY3VzVHJhcERpc2FibGVkID8gZGVhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzKSA6IGFjdGl2YXRlRm9jdXNUcmFwKHRoaXMpO1xuICB9XG4gIGZsaXBQbGFjZW1lbnRzSGFuZGxlcigpIHtcbiAgICB0aGlzLnNldEZpbHRlcmVkUGxhY2VtZW50cygpO1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgb2Zmc2V0RGlzdGFuY2VPZmZzZXRIYW5kbGVyKCkge1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICBvZmZzZXRTa2lkZGluZ0hhbmRsZXIoKSB7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIG9wZW5IYW5kbGVyKHZhbHVlKSB7XG4gICAgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMuc2V0RXhwYW5kZWRBdHRyKCk7XG4gIH1cbiAgb3ZlcmxheVBvc2l0aW9uaW5nSGFuZGxlcigpIHtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgcGxhY2VtZW50SGFuZGxlcigpIHtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgcmVmZXJlbmNlRWxlbWVudEhhbmRsZXIoKSB7XG4gICAgdGhpcy5zZXRVcFJlZmVyZW5jZUVsZW1lbnQoKTtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuc2V0RmlsdGVyZWRQbGFjZW1lbnRzKCk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5zZXRVcFJlZmVyZW5jZUVsZW1lbnQodGhpcy5oYXNMb2FkZWQpO1xuICAgIGNvbm5lY3RGb2N1c1RyYXAodGhpcyk7XG4gICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gICAgfVxuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICBpZiAodGhpcy5yZWZlcmVuY2VFbGVtZW50ICYmICF0aGlzLmVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2V0VXBSZWZlcmVuY2VFbGVtZW50KCk7XG4gICAgfVxuICAgIHRoaXMucmVwb3NpdGlvbigpO1xuICAgIHRoaXMuaGFzTG9hZGVkID0gdHJ1ZTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnJlbW92ZVJlZmVyZW5jZXMoKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBkaXNjb25uZWN0RmxvYXRpbmdVSSh0aGlzLCB0aGlzLmVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuZWwpO1xuICAgIGRlYWN0aXZhdGVGb2N1c1RyYXAodGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcGFyYW0gZGVsYXllZFxuICAgKi9cbiAgYXN5bmMgcmVwb3NpdGlvbihkZWxheWVkID0gZmFsc2UpIHtcbiAgICBjb25zdCB7IGVsLCBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LCBwbGFjZW1lbnQsIG92ZXJsYXlQb3NpdGlvbmluZywgZmxpcERpc2FibGVkLCBmaWx0ZXJlZEZsaXBQbGFjZW1lbnRzLCBvZmZzZXREaXN0YW5jZSwgb2Zmc2V0U2tpZGRpbmcsIGFycm93RWwsIH0gPSB0aGlzO1xuICAgIHJldHVybiByZXBvc2l0aW9uKHRoaXMsIHtcbiAgICAgIGZsb2F0aW5nRWw6IGVsLFxuICAgICAgcmVmZXJlbmNlRWw6IGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQsXG4gICAgICBvdmVybGF5UG9zaXRpb25pbmcsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBmbGlwRGlzYWJsZWQsXG4gICAgICBmbGlwUGxhY2VtZW50czogZmlsdGVyZWRGbGlwUGxhY2VtZW50cyxcbiAgICAgIG9mZnNldERpc3RhbmNlLFxuICAgICAgb2Zmc2V0U2tpZGRpbmcsXG4gICAgICBhcnJvd0VsLFxuICAgICAgdHlwZTogXCJwb3BvdmVyXCIsXG4gICAgfSwgZGVsYXllZCk7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50LlxuICAgKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIGZvcmNlVXBkYXRlKHRoaXMuZWwpO1xuICAgIGZvY3VzRmlyc3RUYWJiYWJsZSh0aGlzLmVsKTtcbiAgfVxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgZWxlbWVudChzKSB0aGF0IGFyZSB1c2VkIHdpdGhpbiB0aGUgZm9jdXMtdHJhcCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgYXN5bmMgdXBkYXRlRm9jdXNUcmFwRWxlbWVudHMoKSB7XG4gICAgdXBkYXRlRm9jdXNUcmFwRWxlbWVudHModGhpcyk7XG4gIH1cbiAgZ2V0UmVmZXJlbmNlRWxlbWVudCgpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZUVsZW1lbnQsIGVsIH0gPSB0aGlzO1xuICAgIHJldHVybiAoKHR5cGVvZiByZWZlcmVuY2VFbGVtZW50ID09PSBcInN0cmluZ1wiXG4gICAgICA/IHF1ZXJ5RWxlbWVudFJvb3RzKGVsLCB7IGlkOiByZWZlcmVuY2VFbGVtZW50IH0pXG4gICAgICA6IHJlZmVyZW5jZUVsZW1lbnQpIHx8IG51bGwpO1xuICB9XG4gIG9uQmVmb3JlT3BlbigpIHtcbiAgICB0aGlzLmNhbGNpdGVQb3BvdmVyQmVmb3JlT3Blbi5lbWl0KCk7XG4gIH1cbiAgb25PcGVuKCkge1xuICAgIHRoaXMuY2FsY2l0ZVBvcG92ZXJPcGVuLmVtaXQoKTtcbiAgICBhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzKTtcbiAgfVxuICBvbkJlZm9yZUNsb3NlKCkge1xuICAgIHRoaXMuY2FsY2l0ZVBvcG92ZXJCZWZvcmVDbG9zZS5lbWl0KCk7XG4gIH1cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNhbGNpdGVQb3BvdmVyQ2xvc2UuZW1pdCgpO1xuICAgIGRlYWN0aXZhdGVGb2N1c1RyYXAodGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlckNsb3NlQnV0dG9uKCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMsIGNsb3NhYmxlIH0gPSB0aGlzO1xuICAgIHJldHVybiBjbG9zYWJsZSA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jbG9zZUJ1dHRvbkNvbnRhaW5lciwga2V5OiBDU1MuY2xvc2VCdXR0b25Db250YWluZXIgfSwgaChcImNhbGNpdGUtYWN0aW9uXCIsIHsgYXBwZWFyYW5jZTogXCJ0cmFuc3BhcmVudFwiLCBjbGFzczogQ1NTLmNsb3NlQnV0dG9uLCBvbkNsaWNrOiB0aGlzLmhpZGUsIHNjYWxlOiB0aGlzLnNjYWxlLCB0ZXh0OiBtZXNzYWdlcy5jbG9zZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IChjbG9zZUJ1dHRvbkVsKSA9PiAodGhpcy5jbG9zZUJ1dHRvbkVsID0gY2xvc2VCdXR0b25FbCkgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwieFwiLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXJIZWFkZXIoKSB7XG4gICAgY29uc3QgeyBoZWFkaW5nLCBoZWFkaW5nTGV2ZWwgfSA9IHRoaXM7XG4gICAgY29uc3QgaGVhZGluZ05vZGUgPSBoZWFkaW5nID8gKGgoSGVhZGluZywgeyBjbGFzczogQ1NTLmhlYWRpbmcsIGxldmVsOiBoZWFkaW5nTGV2ZWwgfSwgaGVhZGluZykpIDogbnVsbDtcbiAgICByZXR1cm4gaGVhZGluZ05vZGUgPyAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuaGVhZGVyLCBrZXk6IENTUy5oZWFkZXIgfSwgaGVhZGluZ05vZGUsIHRoaXMucmVuZGVyQ2xvc2VCdXR0b24oKSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LCBoZWFkaW5nLCBsYWJlbCwgb3BlbiwgcG9pbnRlckRpc2FibGVkLCBmbG9hdGluZ0xheW91dCB9ID0gdGhpcztcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50ICYmIG9wZW47XG4gICAgY29uc3QgaGlkZGVuID0gIWRpc3BsYXllZDtcbiAgICBjb25zdCBhcnJvd05vZGUgPSAhcG9pbnRlckRpc2FibGVkID8gKGgoRmxvYXRpbmdBcnJvdywgeyBmbG9hdGluZ0xheW91dDogZmxvYXRpbmdMYXlvdXQsIGtleTogXCJmbG9hdGluZy1hcnJvd1wiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zdG9yZUFycm93RWwgfSkpIDogbnVsbDtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtaGlkZGVuXCI6IHRvQXJpYUJvb2xlYW4oaGlkZGVuKSwgXCJhcmlhLWxhYmVsXCI6IGxhYmVsLCBcImFyaWEtbGl2ZVwiOiBcInBvbGl0ZVwiLCBcImNhbGNpdGUtaHlkcmF0ZWQtaGlkZGVuXCI6IGhpZGRlbiwgaWQ6IHRoaXMuZ2V0SWQoKSwgcm9sZTogXCJkaWFsb2dcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0Zsb2F0aW5nQ1NTLmFuaW1hdGlvbl06IHRydWUsXG4gICAgICAgIFtGbG9hdGluZ0NTUy5hbmltYXRpb25BY3RpdmVdOiBkaXNwbGF5ZWQsXG4gICAgICB9LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zZXRUcmFuc2l0aW9uRWwgfSwgYXJyb3dOb2RlLCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5oYXNIZWFkZXJdOiAhIWhlYWRpbmcsXG4gICAgICAgIFtDU1MuY29udGFpbmVyXTogdHJ1ZSxcbiAgICAgIH0gfSwgdGhpcy5yZW5kZXJIZWFkZXIoKSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGVudCB9LCBoKFwic2xvdFwiLCBudWxsKSksICFoZWFkaW5nID8gdGhpcy5yZW5kZXJDbG9zZUJ1dHRvbigpIDogbnVsbCkpKSk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImZvY3VzVHJhcERpc2FibGVkXCI6IFtcImhhbmRsZUZvY3VzVHJhcERpc2FibGVkXCJdLFxuICAgIFwiZmxpcFBsYWNlbWVudHNcIjogW1wiZmxpcFBsYWNlbWVudHNIYW5kbGVyXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwib2Zmc2V0RGlzdGFuY2VcIjogW1wib2Zmc2V0RGlzdGFuY2VPZmZzZXRIYW5kbGVyXCJdLFxuICAgIFwib2Zmc2V0U2tpZGRpbmdcIjogW1wib2Zmc2V0U2tpZGRpbmdIYW5kbGVyXCJdLFxuICAgIFwib3BlblwiOiBbXCJvcGVuSGFuZGxlclwiXSxcbiAgICBcIm92ZXJsYXlQb3NpdGlvbmluZ1wiOiBbXCJvdmVybGF5UG9zaXRpb25pbmdIYW5kbGVyXCJdLFxuICAgIFwicGxhY2VtZW50XCI6IFtcInBsYWNlbWVudEhhbmRsZXJcIl0sXG4gICAgXCJyZWZlcmVuY2VFbGVtZW50XCI6IFtcInJlZmVyZW5jZUVsZW1lbnRIYW5kbGVyXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBwb3BvdmVyQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLXBvcG92ZXJcIiwge1xuICAgIFwiYXV0b0Nsb3NlXCI6IFs1MTYsIFwiYXV0by1jbG9zZVwiXSxcbiAgICBcImNsb3NhYmxlXCI6IFs1MTZdLFxuICAgIFwiZmxpcERpc2FibGVkXCI6IFs1MTYsIFwiZmxpcC1kaXNhYmxlZFwiXSxcbiAgICBcImZvY3VzVHJhcERpc2FibGVkXCI6IFs1MTYsIFwiZm9jdXMtdHJhcC1kaXNhYmxlZFwiXSxcbiAgICBcInBvaW50ZXJEaXNhYmxlZFwiOiBbNTE2LCBcInBvaW50ZXItZGlzYWJsZWRcIl0sXG4gICAgXCJmbGlwUGxhY2VtZW50c1wiOiBbMTZdLFxuICAgIFwiaGVhZGluZ1wiOiBbMV0sXG4gICAgXCJoZWFkaW5nTGV2ZWxcIjogWzUxNCwgXCJoZWFkaW5nLWxldmVsXCJdLFxuICAgIFwibGFiZWxcIjogWzFdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJvZmZzZXREaXN0YW5jZVwiOiBbNTE0LCBcIm9mZnNldC1kaXN0YW5jZVwiXSxcbiAgICBcIm9mZnNldFNraWRkaW5nXCI6IFs1MTQsIFwib2Zmc2V0LXNraWRkaW5nXCJdLFxuICAgIFwib3BlblwiOiBbMTU0MF0sXG4gICAgXCJvdmVybGF5UG9zaXRpb25pbmdcIjogWzUxMywgXCJvdmVybGF5LXBvc2l0aW9uaW5nXCJdLFxuICAgIFwicGxhY2VtZW50XCI6IFs1MTNdLFxuICAgIFwicmVmZXJlbmNlRWxlbWVudFwiOiBbMSwgXCJyZWZlcmVuY2UtZWxlbWVudFwiXSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwidHJpZ2dlckRpc2FibGVkXCI6IFs1MTYsIFwidHJpZ2dlci1kaXNhYmxlZFwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwiZmxvYXRpbmdMYXlvdXRcIjogWzMyXSxcbiAgICBcImVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnRcIjogWzMyXSxcbiAgICBcImRlZmF1bHRNZXNzYWdlc1wiOiBbMzJdLFxuICAgIFwicmVwb3NpdGlvblwiOiBbNjRdLFxuICAgIFwic2V0Rm9jdXNcIjogWzY0XSxcbiAgICBcInVwZGF0ZUZvY3VzVHJhcEVsZW1lbnRzXCI6IFs2NF1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1wb3BvdmVyXCIsIFwiY2FsY2l0ZS1hY3Rpb25cIiwgXCJjYWxjaXRlLWljb25cIiwgXCJjYWxjaXRlLWxvYWRlclwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1wb3BvdmVyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgUG9wb3Zlcik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1hY3Rpb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IFBvcG92ZXIgYXMgUCwgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=