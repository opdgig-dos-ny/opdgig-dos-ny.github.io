"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-tooltip_js"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-tooltip.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-tooltip.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteTooltip: () => (/* binding */ CalciteTooltip),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _floating_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./floating-ui.js */ "./node_modules/@esri/calcite-components/dist/components/floating-ui.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _openCloseComponent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./openCloseComponent.js */ "./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js");
/* harmony import */ var _FloatingArrow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FloatingArrow.js */ "./node_modules/@esri/calcite-components/dist/components/FloatingArrow.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */







const CSS = {
  container: "container",
};
const TOOLTIP_OPEN_DELAY_MS = 300;
const TOOLTIP_CLOSE_DELAY_MS = 500;
const ARIA_DESCRIBED_BY = "aria-describedby";

function getEffectiveReferenceElement(tooltip) {
  const { referenceElement } = tooltip;
  return ((typeof referenceElement === "string" ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.q)(tooltip, { id: referenceElement }) : referenceElement) ||
    null);
}

class TooltipManager {
  constructor() {
    // --------------------------------------------------------------------------
    //
    //  Private Properties
    //
    // --------------------------------------------------------------------------
    this.registeredElements = new WeakMap();
    this.registeredShadowRootCounts = new WeakMap();
    this.hoverOpenTimeout = null;
    this.hoverCloseTimeout = null;
    this.hoveredTooltip = null;
    this.clickedTooltip = null;
    this.activeTooltip = null;
    this.registeredElementCount = 0;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.queryTooltip = (composedPath) => {
      const { registeredElements } = this;
      const registeredElement = composedPath.find((pathEl) => registeredElements.has(pathEl));
      return registeredElements.get(registeredElement);
    };
    this.keyDownHandler = (event) => {
      if (event.key === "Escape" && !event.defaultPrevented) {
        const { activeTooltip } = this;
        if (activeTooltip?.open) {
          this.clearHoverTimeout();
          this.closeActiveTooltip();
          const referenceElement = getEffectiveReferenceElement(activeTooltip);
          if (referenceElement instanceof Element && referenceElement.contains(event.target)) {
            event.preventDefault();
          }
        }
      }
    };
    this.pointerMoveHandler = (event) => {
      const composedPath = event.composedPath();
      const { activeTooltip } = this;
      const hoveringActiveTooltip = activeTooltip?.open && composedPath.includes(activeTooltip);
      if (hoveringActiveTooltip) {
        this.clearHoverTimeout();
        return;
      }
      const tooltip = this.queryTooltip(composedPath);
      this.hoveredTooltip = tooltip;
      if (this.isClosableClickedTooltip(tooltip)) {
        return;
      }
      this.clickedTooltip = null;
      if (tooltip) {
        this.openHoveredTooltip(tooltip);
      }
      else if (activeTooltip) {
        this.closeHoveredTooltip();
      }
    };
    this.pointerDownHandler = (event) => {
      if (!(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.j)(event)) {
        return;
      }
      const clickedTooltip = this.queryTooltip(event.composedPath());
      this.clickedTooltip = clickedTooltip;
      if (clickedTooltip?.closeOnClick) {
        this.toggleTooltip(clickedTooltip, false);
        this.clearHoverTimeout();
      }
    };
    this.focusInHandler = (event) => {
      this.queryFocusedTooltip(event, true);
    };
    this.focusOutHandler = (event) => {
      this.queryFocusedTooltip(event, false);
    };
    this.openHoveredTooltip = (tooltip) => {
      this.hoverOpenTimeout = window.setTimeout(() => {
        if (this.hoverOpenTimeout === null) {
          return;
        }
        this.clearHoverCloseTimeout();
        if (this.activeTooltip === this.hoveredTooltip) {
          return;
        }
        this.closeActiveTooltip();
        if (tooltip !== this.hoveredTooltip) {
          return;
        }
        this.toggleTooltip(tooltip, true);
      }, this.activeTooltip ? 0 : TOOLTIP_OPEN_DELAY_MS);
    };
    this.closeHoveredTooltip = () => {
      this.hoverCloseTimeout = window.setTimeout(() => {
        if (this.hoverCloseTimeout === null) {
          return;
        }
        this.closeActiveTooltip();
      }, TOOLTIP_CLOSE_DELAY_MS);
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  registerElement(referenceEl, tooltip) {
    this.registeredElementCount++;
    this.registeredElements.set(referenceEl, tooltip);
    const shadowRoot = this.getReferenceElShadowRootNode(referenceEl);
    if (shadowRoot) {
      this.registerShadowRoot(shadowRoot);
    }
    if (this.registeredElementCount === 1) {
      this.addListeners();
    }
  }
  unregisterElement(referenceEl) {
    const shadowRoot = this.getReferenceElShadowRootNode(referenceEl);
    if (shadowRoot) {
      this.unregisterShadowRoot(shadowRoot);
    }
    if (this.registeredElements.delete(referenceEl)) {
      this.registeredElementCount--;
    }
    if (this.registeredElementCount === 0) {
      this.removeListeners();
    }
  }
  addShadowListeners(shadowRoot) {
    shadowRoot.addEventListener("focusin", this.focusInHandler, { capture: true });
    shadowRoot.addEventListener("focusout", this.focusOutHandler, { capture: true });
  }
  removeShadowListeners(shadowRoot) {
    shadowRoot.removeEventListener("focusin", this.focusInHandler, { capture: true });
    shadowRoot.removeEventListener("focusout", this.focusOutHandler, { capture: true });
  }
  addListeners() {
    document.addEventListener("keydown", this.keyDownHandler, { capture: true });
    document.addEventListener("pointermove", this.pointerMoveHandler, { capture: true });
    document.addEventListener("pointerdown", this.pointerDownHandler, { capture: true });
    document.addEventListener("focusin", this.focusInHandler, { capture: true });
    document.addEventListener("focusout", this.focusOutHandler, { capture: true });
  }
  removeListeners() {
    document.removeEventListener("keydown", this.keyDownHandler, { capture: true });
    document.removeEventListener("pointermove", this.pointerMoveHandler, { capture: true });
    document.removeEventListener("pointerdown", this.pointerDownHandler, { capture: true });
    document.removeEventListener("focusin", this.focusInHandler, { capture: true });
    document.removeEventListener("focusout", this.focusOutHandler, { capture: true });
  }
  clearHoverOpenTimeout() {
    window.clearTimeout(this.hoverOpenTimeout);
    this.hoverOpenTimeout = null;
  }
  clearHoverCloseTimeout() {
    window.clearTimeout(this.hoverCloseTimeout);
    this.hoverCloseTimeout = null;
  }
  clearHoverTimeout() {
    this.clearHoverOpenTimeout();
    this.clearHoverCloseTimeout();
  }
  closeActiveTooltip() {
    const { activeTooltip } = this;
    if (activeTooltip?.open) {
      this.toggleTooltip(activeTooltip, false);
    }
  }
  toggleFocusedTooltip(tooltip, open) {
    this.closeActiveTooltip();
    if (open) {
      this.clearHoverTimeout();
    }
    this.toggleTooltip(tooltip, open);
  }
  toggleTooltip(tooltip, open) {
    tooltip.open = open;
    this.activeTooltip = open ? tooltip : null;
  }
  queryFocusedTooltip(event, open) {
    const tooltip = this.queryTooltip(event.composedPath());
    if (!tooltip || this.isClosableClickedTooltip(tooltip)) {
      return;
    }
    this.toggleFocusedTooltip(tooltip, open);
  }
  isClosableClickedTooltip(tooltip) {
    return tooltip?.closeOnClick && tooltip === this.clickedTooltip;
  }
  registerShadowRoot(shadowRoot) {
    const { registeredShadowRootCounts } = this;
    const newCount = (registeredShadowRootCounts.get(shadowRoot) ?? 0) + 1;
    if (newCount === 1) {
      this.addShadowListeners(shadowRoot);
    }
    registeredShadowRootCounts.set(shadowRoot, newCount);
  }
  unregisterShadowRoot(shadowRoot) {
    const { registeredShadowRootCounts } = this;
    const newCount = registeredShadowRootCounts.get(shadowRoot) - 1;
    if (newCount === 0) {
      this.removeShadowListeners(shadowRoot);
    }
    registeredShadowRootCounts.set(shadowRoot, newCount);
  }
  getReferenceElShadowRootNode(referenceEl) {
    return referenceEl instanceof Element ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.n)(referenceEl) : null;
  }
}

const tooltipCss = ":host{--calcite-floating-ui-z-index:var(--calcite-tooltip-z-index, var(--calcite-app-z-index-tooltip));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-app-z-index) * -1);fill:var(--calcite-ui-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-ui-border-3)}.container{position:relative;overflow:hidden;border-radius:0.25rem;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}:host([hidden]){display:none}[hidden]{display:none}";

const manager = new TooltipManager();
const Tooltip = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteTooltipBeforeClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.createEvent)(this, "calciteTooltipBeforeClose", 6);
    this.calciteTooltipClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.createEvent)(this, "calciteTooltipClose", 6);
    this.calciteTooltipBeforeOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.createEvent)(this, "calciteTooltipBeforeOpen", 6);
    this.calciteTooltipOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.createEvent)(this, "calciteTooltipOpen", 6);
    this.guid = `calcite-tooltip-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_2__.g)()}`;
    this.hasLoaded = false;
    this.openTransitionProp = "opacity";
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
    };
    this.setUpReferenceElement = (warn = true) => {
      this.removeReferences();
      this.effectiveReferenceElement = getEffectiveReferenceElement(this.el);
      (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, this.effectiveReferenceElement, this.el);
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
    this.addReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      const id = this.getId();
      if ("setAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.setAttribute(ARIA_DESCRIBED_BY, id);
      }
      manager.registerElement(effectiveReferenceElement, this.el);
    };
    this.removeReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      if ("removeAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.removeAttribute(ARIA_DESCRIBED_BY);
      }
      manager.unregisterElement(effectiveReferenceElement);
    };
    this.closeOnClick = false;
    this.label = undefined;
    this.offsetDistance = _floating_ui_js__WEBPACK_IMPORTED_MODULE_1__.b;
    this.offsetSkidding = 0;
    this.open = false;
    this.overlayPositioning = "absolute";
    this.placement = "auto";
    this.referenceElement = undefined;
    this.effectiveReferenceElement = undefined;
    this.floatingLayout = "vertical";
  }
  offsetDistanceOffsetHandler() {
    this.reposition(true);
  }
  offsetSkiddingHandler() {
    this.reposition(true);
  }
  openHandler(value) {
    (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_3__.o)(this);
    if (value) {
      this.reposition(true);
    }
  }
  overlayPositioningHandler() {
    this.reposition(true);
  }
  placementHandler() {
    this.reposition(true);
  }
  referenceElementHandler() {
    this.setUpReferenceElement();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.setUpReferenceElement(this.hasLoaded);
    if (this.open) {
      (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_3__.o)(this);
    }
  }
  async componentWillLoad() {
    if (this.open) {
      (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_3__.o)(this);
    }
  }
  componentDidLoad() {
    if (this.referenceElement && !this.effectiveReferenceElement) {
      this.setUpReferenceElement();
    }
    this.reposition(true);
    this.hasLoaded = true;
  }
  disconnectedCallback() {
    this.removeReferences();
    (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_1__.a)(this, this.effectiveReferenceElement, this.el);
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
    const { el, effectiveReferenceElement, placement, overlayPositioning, offsetDistance, offsetSkidding, arrowEl, } = this;
    return (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, {
      floatingEl: el,
      referenceEl: effectiveReferenceElement,
      overlayPositioning,
      placement,
      offsetDistance,
      offsetSkidding,
      arrowEl,
      type: "tooltip",
    }, delayed);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  onBeforeOpen() {
    this.calciteTooltipBeforeOpen.emit();
  }
  onOpen() {
    this.calciteTooltipOpen.emit();
  }
  onBeforeClose() {
    this.calciteTooltipBeforeClose.emit();
  }
  onClose() {
    this.calciteTooltipClose.emit();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { effectiveReferenceElement, label, open, floatingLayout } = this;
    const displayed = effectiveReferenceElement && open;
    const hidden = !displayed;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.Host, { "aria-hidden": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(hidden), "aria-label": label, "aria-live": "polite", "calcite-hydrated-hidden": hidden, id: this.getId(), role: "tooltip" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: {
        [_floating_ui_js__WEBPACK_IMPORTED_MODULE_1__.F.animation]: true,
        [_floating_ui_js__WEBPACK_IMPORTED_MODULE_1__.F.animationActive]: displayed,
      },
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setTransitionEl }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)(_FloatingArrow_js__WEBPACK_IMPORTED_MODULE_4__.F, { floatingLayout: floatingLayout,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (arrowEl) => (this.arrowEl = arrowEl) }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: CSS.container }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", null)))));
  }
  get el() { return this; }
  static get watchers() { return {
    "offsetDistance": ["offsetDistanceOffsetHandler"],
    "offsetSkidding": ["offsetSkiddingHandler"],
    "open": ["openHandler"],
    "overlayPositioning": ["overlayPositioningHandler"],
    "placement": ["placementHandler"],
    "referenceElement": ["referenceElementHandler"]
  }; }
  static get style() { return tooltipCss; }
}, [1, "calcite-tooltip", {
    "closeOnClick": [516, "close-on-click"],
    "label": [1],
    "offsetDistance": [514, "offset-distance"],
    "offsetSkidding": [514, "offset-skidding"],
    "open": [516],
    "overlayPositioning": [513, "overlay-positioning"],
    "placement": [513],
    "referenceElement": [1, "reference-element"],
    "effectiveReferenceElement": [32],
    "floatingLayout": [32],
    "reposition": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-tooltip":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Tooltip);
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteTooltip = Tooltip;
const defineCustomElement = defineCustomElement$1;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNWVjZjQzMzQ3NWM1NDViNjcyMWIzMWIzMGQ5OGU1Y2QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJEOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkJBQTJCO0FBQ3BELFVBQVUsNkJBQTZCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsTUFBTTtBQUNmLFNBQVMsYUFBYSxHQUFHLE9BQU87QUFDaEMsU0FBUyxLQUFLLEdBQUcsUUFBUSxFQUFFLEtBQUssR0FBRyxPQUFPO0FBQzFDO0FBQ0EsVUFBVSx5RUFBQyxVQUFVLGtGQUFrRixPQUFPLEVBQUUsd0NBQXdDO0FBQ3hKO0FBQ0EsY0FBYztBQUNkLHdCQUF3Qix5RUFBQyxXQUFXLGtGQUFrRjtBQUN0SCxJQUFJLHlFQUFDLFdBQVcsMkJBQTJCO0FBQzNDOztBQUU4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRztBQUNZO0FBQ3lCO0FBQzlHO0FBQ29DO0FBQ2xCOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLG1CQUFtQjtBQUM3QixrREFBa0QsMENBQWlCLFlBQVksc0JBQXNCO0FBQ3JHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxxQkFBcUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnQkFBZ0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUUseUVBQUMsVUFBVTtBQUMzTCxTQUFTLDhDQUFXO0FBQ3BCLFNBQVMsOENBQVc7QUFDcEIsT0FBTztBQUNQO0FBQ0EsaUNBQWlDLEVBQUUseUVBQUMsQ0FBQyxnREFBYSxJQUFJO0FBQ3REO0FBQ0Esa0RBQWtELEdBQUcseUVBQUMsVUFBVSxzQkFBc0IsRUFBRSx5RUFBQztBQUN6RjtBQUNBLGFBQWE7QUFDYiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFK0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvRmxvYXRpbmdBcnJvdy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS10b29sdGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgYXJyb3c6IFwiY2FsY2l0ZS1mbG9hdGluZy11aS1hcnJvd1wiLFxuICBhcnJvd1N0cm9rZTogXCJjYWxjaXRlLWZsb2F0aW5nLXVpLWFycm93X19zdHJva2VcIixcbn07XG5jb25zdCBERUZBVUxUUyA9IHtcbiAgd2lkdGg6IDEyLFxuICBoZWlnaHQ6IDYsXG4gIHN0cm9rZVdpZHRoOiAxLFxufTtcbi8qKlxuICogUmVuZGVycyBhIFNWRyBlbGVtZW50IHRvIGJlIHVzZWQgYXMgYSBmbG9hdGluZy11aSBhcnJvdy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uYWwgY29tcG9uZW50IHNob3VsZCBiZSByZW5kZXJlZCBpbnNpZGUgYSBgRmxvYXRpbmdVSUNvbXBvbmVudGAgd2hlbiBpdCBuZWVkcyBhbiBhcnJvdyBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSBmbG9hdGluZ0xheW91dC5mbG9hdGluZ0xheW91dFxuICogQHBhcmFtIGZsb2F0aW5nTGF5b3V0IOKAkyBUaGUgZWZmZWN0aXZlIGZsb2F0aW5nIGxheW91dCB0byByZW5kZXIgdGhlIGFycm93IHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5LiBQb3NzaWJsZSB2YWx1ZXM6IGB2ZXJ0aWNhbGAgb3IgYGhvcml6b250YWxgLlxuICpcbiAqIFNlZSBbZmxvYXRpbmctdWldKGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vc3JjL3V0aWxzL2Zsb2F0aW5nLXVpLnRzKVxuICogQHBhcmFtIGZsb2F0aW5nTGF5b3V0LmtleVxuICogQHBhcmFtIGZsb2F0aW5nTGF5b3V0LnJlZlxuICovXG5jb25zdCBGbG9hdGluZ0Fycm93ID0gKHsgZmxvYXRpbmdMYXlvdXQsIGtleSwgcmVmLCB9KSA9PiB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgc3Ryb2tlV2lkdGggfSA9IERFRkFVTFRTO1xuICBjb25zdCBzdmdYID0gd2lkdGggLyAyO1xuICBjb25zdCBpc1ZlcnRpY2FsID0gZmxvYXRpbmdMYXlvdXQgPT09IFwidmVydGljYWxcIjtcbiAgY29uc3QgZFZhbHVlID0gXCJNMCwwXCIgK1xuICAgIGAgSCR7d2lkdGh9YCArXG4gICAgYCBMJHt3aWR0aCAtIHN2Z1h9LCR7aGVpZ2h0fWAgK1xuICAgIGAgUSR7c3ZnWH0sJHtoZWlnaHR9ICR7c3ZnWH0sJHtoZWlnaHR9YCArXG4gICAgXCIgWlwiO1xuICByZXR1cm4gKGgoXCJzdmdcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogQ1NTLmFycm93LCBoZWlnaHQ6IHdpZHRoLCBrZXk6IGtleSwgdmlld0JveDogYDAgMCAke3dpZHRofSAke3dpZHRoICsgKCFpc1ZlcnRpY2FsID8gc3Ryb2tlV2lkdGggOiAwKX1gLCB3aWR0aDogd2lkdGggKyAoaXNWZXJ0aWNhbCA/IHN0cm9rZVdpZHRoIDogMCksIFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgcmVmOiByZWYgfSxcbiAgICBzdHJva2VXaWR0aCA+IDAgJiYgKGgoXCJwYXRoXCIsIHsgY2xhc3M6IENTUy5hcnJvd1N0cm9rZSwgZDogZFZhbHVlLCBmaWxsOiBcIm5vbmVcIiwgXCJzdHJva2Utd2lkdGhcIjogc3Ryb2tlV2lkdGggKyAxIH0pKSxcbiAgICBoKFwicGF0aFwiLCB7IGQ6IGRWYWx1ZSwgc3Ryb2tlOiBcIm5vbmVcIiB9KSkpO1xufTtcblxuZXhwb3J0IHsgRmxvYXRpbmdBcnJvdyBhcyBGIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IHEgYXMgcXVlcnlFbGVtZW50Um9vdHMsIGogYXMgaXNQcmltYXJ5UG9pbnRlckJ1dHRvbiwgbiBhcyBnZXRTaGFkb3dSb290Tm9kZSwgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0RmxvYXRpbmdVSSwgYiBhcyBkZWZhdWx0T2Zmc2V0RGlzdGFuY2UsIGEgYXMgZGlzY29ubmVjdEZsb2F0aW5nVUksIHIgYXMgcmVwb3NpdGlvbiwgRiBhcyBGbG9hdGluZ0NTUyB9IGZyb20gJy4vZmxvYXRpbmctdWkuanMnO1xuaW1wb3J0IHsgZyBhcyBndWlkIH0gZnJvbSAnLi9ndWlkLmpzJztcbmltcG9ydCB7IG8gYXMgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQgfSBmcm9tICcuL29wZW5DbG9zZUNvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBGIGFzIEZsb2F0aW5nQXJyb3cgfSBmcm9tICcuL0Zsb2F0aW5nQXJyb3cuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbn07XG5jb25zdCBUT09MVElQX09QRU5fREVMQVlfTVMgPSAzMDA7XG5jb25zdCBUT09MVElQX0NMT1NFX0RFTEFZX01TID0gNTAwO1xuY29uc3QgQVJJQV9ERVNDUklCRURfQlkgPSBcImFyaWEtZGVzY3JpYmVkYnlcIjtcblxuZnVuY3Rpb24gZ2V0RWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCh0b29sdGlwKSB7XG4gIGNvbnN0IHsgcmVmZXJlbmNlRWxlbWVudCB9ID0gdG9vbHRpcDtcbiAgcmV0dXJuICgodHlwZW9mIHJlZmVyZW5jZUVsZW1lbnQgPT09IFwic3RyaW5nXCIgPyBxdWVyeUVsZW1lbnRSb290cyh0b29sdGlwLCB7IGlkOiByZWZlcmVuY2VFbGVtZW50IH0pIDogcmVmZXJlbmNlRWxlbWVudCkgfHxcbiAgICBudWxsKTtcbn1cblxuY2xhc3MgVG9vbHRpcE1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgUHJvcGVydGllc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnJlZ2lzdGVyZWRFbGVtZW50cyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgdGhpcy5yZWdpc3RlcmVkU2hhZG93Um9vdENvdW50cyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgdGhpcy5ob3Zlck9wZW5UaW1lb3V0ID0gbnVsbDtcbiAgICB0aGlzLmhvdmVyQ2xvc2VUaW1lb3V0ID0gbnVsbDtcbiAgICB0aGlzLmhvdmVyZWRUb29sdGlwID0gbnVsbDtcbiAgICB0aGlzLmNsaWNrZWRUb29sdGlwID0gbnVsbDtcbiAgICB0aGlzLmFjdGl2ZVRvb2x0aXAgPSBudWxsO1xuICAgIHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRDb3VudCA9IDA7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5xdWVyeVRvb2x0aXAgPSAoY29tcG9zZWRQYXRoKSA9PiB7XG4gICAgICBjb25zdCB7IHJlZ2lzdGVyZWRFbGVtZW50cyB9ID0gdGhpcztcbiAgICAgIGNvbnN0IHJlZ2lzdGVyZWRFbGVtZW50ID0gY29tcG9zZWRQYXRoLmZpbmQoKHBhdGhFbCkgPT4gcmVnaXN0ZXJlZEVsZW1lbnRzLmhhcyhwYXRoRWwpKTtcbiAgICAgIHJldHVybiByZWdpc3RlcmVkRWxlbWVudHMuZ2V0KHJlZ2lzdGVyZWRFbGVtZW50KTtcbiAgICB9O1xuICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIgJiYgIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgY29uc3QgeyBhY3RpdmVUb29sdGlwIH0gPSB0aGlzO1xuICAgICAgICBpZiAoYWN0aXZlVG9vbHRpcD8ub3Blbikge1xuICAgICAgICAgIHRoaXMuY2xlYXJIb3ZlclRpbWVvdXQoKTtcbiAgICAgICAgICB0aGlzLmNsb3NlQWN0aXZlVG9vbHRpcCgpO1xuICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZUVsZW1lbnQgPSBnZXRFZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KGFjdGl2ZVRvb2x0aXApO1xuICAgICAgICAgIGlmIChyZWZlcmVuY2VFbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCAmJiByZWZlcmVuY2VFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnBvaW50ZXJNb3ZlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG4gICAgICBjb25zdCB7IGFjdGl2ZVRvb2x0aXAgfSA9IHRoaXM7XG4gICAgICBjb25zdCBob3ZlcmluZ0FjdGl2ZVRvb2x0aXAgPSBhY3RpdmVUb29sdGlwPy5vcGVuICYmIGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhhY3RpdmVUb29sdGlwKTtcbiAgICAgIGlmIChob3ZlcmluZ0FjdGl2ZVRvb2x0aXApIHtcbiAgICAgICAgdGhpcy5jbGVhckhvdmVyVGltZW91dCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0b29sdGlwID0gdGhpcy5xdWVyeVRvb2x0aXAoY29tcG9zZWRQYXRoKTtcbiAgICAgIHRoaXMuaG92ZXJlZFRvb2x0aXAgPSB0b29sdGlwO1xuICAgICAgaWYgKHRoaXMuaXNDbG9zYWJsZUNsaWNrZWRUb29sdGlwKHRvb2x0aXApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xpY2tlZFRvb2x0aXAgPSBudWxsO1xuICAgICAgaWYgKHRvb2x0aXApIHtcbiAgICAgICAgdGhpcy5vcGVuSG92ZXJlZFRvb2x0aXAodG9vbHRpcCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhY3RpdmVUb29sdGlwKSB7XG4gICAgICAgIHRoaXMuY2xvc2VIb3ZlcmVkVG9vbHRpcCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5wb2ludGVyRG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNQcmltYXJ5UG9pbnRlckJ1dHRvbihldmVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY2xpY2tlZFRvb2x0aXAgPSB0aGlzLnF1ZXJ5VG9vbHRpcChldmVudC5jb21wb3NlZFBhdGgoKSk7XG4gICAgICB0aGlzLmNsaWNrZWRUb29sdGlwID0gY2xpY2tlZFRvb2x0aXA7XG4gICAgICBpZiAoY2xpY2tlZFRvb2x0aXA/LmNsb3NlT25DbGljaykge1xuICAgICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAoY2xpY2tlZFRvb2x0aXAsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jbGVhckhvdmVyVGltZW91dCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5mb2N1c0luSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5xdWVyeUZvY3VzZWRUb29sdGlwKGV2ZW50LCB0cnVlKTtcbiAgICB9O1xuICAgIHRoaXMuZm9jdXNPdXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5Rm9jdXNlZFRvb2x0aXAoZXZlbnQsIGZhbHNlKTtcbiAgICB9O1xuICAgIHRoaXMub3BlbkhvdmVyZWRUb29sdGlwID0gKHRvb2x0aXApID0+IHtcbiAgICAgIHRoaXMuaG92ZXJPcGVuVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaG92ZXJPcGVuVGltZW91dCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsZWFySG92ZXJDbG9zZVRpbWVvdXQoKTtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlVG9vbHRpcCA9PT0gdGhpcy5ob3ZlcmVkVG9vbHRpcCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsb3NlQWN0aXZlVG9vbHRpcCgpO1xuICAgICAgICBpZiAodG9vbHRpcCAhPT0gdGhpcy5ob3ZlcmVkVG9vbHRpcCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAodG9vbHRpcCwgdHJ1ZSk7XG4gICAgICB9LCB0aGlzLmFjdGl2ZVRvb2x0aXAgPyAwIDogVE9PTFRJUF9PUEVOX0RFTEFZX01TKTtcbiAgICB9O1xuICAgIHRoaXMuY2xvc2VIb3ZlcmVkVG9vbHRpcCA9ICgpID0+IHtcbiAgICAgIHRoaXMuaG92ZXJDbG9zZVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmhvdmVyQ2xvc2VUaW1lb3V0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xvc2VBY3RpdmVUb29sdGlwKCk7XG4gICAgICB9LCBUT09MVElQX0NMT1NFX0RFTEFZX01TKTtcbiAgICB9O1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZWdpc3RlckVsZW1lbnQocmVmZXJlbmNlRWwsIHRvb2x0aXApIHtcbiAgICB0aGlzLnJlZ2lzdGVyZWRFbGVtZW50Q291bnQrKztcbiAgICB0aGlzLnJlZ2lzdGVyZWRFbGVtZW50cy5zZXQocmVmZXJlbmNlRWwsIHRvb2x0aXApO1xuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmdldFJlZmVyZW5jZUVsU2hhZG93Um9vdE5vZGUocmVmZXJlbmNlRWwpO1xuICAgIGlmIChzaGFkb3dSb290KSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyU2hhZG93Um9vdChzaGFkb3dSb290KTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRDb3VudCA9PT0gMSkge1xuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cbiAgdW5yZWdpc3RlckVsZW1lbnQocmVmZXJlbmNlRWwpIHtcbiAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5nZXRSZWZlcmVuY2VFbFNoYWRvd1Jvb3ROb2RlKHJlZmVyZW5jZUVsKTtcbiAgICBpZiAoc2hhZG93Um9vdCkge1xuICAgICAgdGhpcy51bnJlZ2lzdGVyU2hhZG93Um9vdChzaGFkb3dSb290KTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRzLmRlbGV0ZShyZWZlcmVuY2VFbCkpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRDb3VudC0tO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZWdpc3RlcmVkRWxlbWVudENvdW50ID09PSAwKSB7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICAgIH1cbiAgfVxuICBhZGRTaGFkb3dMaXN0ZW5lcnMoc2hhZG93Um9vdCkge1xuICAgIHNoYWRvd1Jvb3QuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgdGhpcy5mb2N1c0luSGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIHNoYWRvd1Jvb3QuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIHRoaXMuZm9jdXNPdXRIYW5kbGVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gIH1cbiAgcmVtb3ZlU2hhZG93TGlzdGVuZXJzKHNoYWRvd1Jvb3QpIHtcbiAgICBzaGFkb3dSb290LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIHRoaXMuZm9jdXNJbkhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICBzaGFkb3dSb290LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCB0aGlzLmZvY3VzT3V0SGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICB9XG4gIGFkZExpc3RlbmVycygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleURvd25IYW5kbGVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIHRoaXMucG9pbnRlck1vdmVIYW5kbGVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHRoaXMucG9pbnRlckRvd25IYW5kbGVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgdGhpcy5mb2N1c0luSGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCB0aGlzLmZvY3VzT3V0SGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICB9XG4gIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleURvd25IYW5kbGVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIHRoaXMucG9pbnRlck1vdmVIYW5kbGVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHRoaXMucG9pbnRlckRvd25IYW5kbGVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgdGhpcy5mb2N1c0luSGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCB0aGlzLmZvY3VzT3V0SGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICB9XG4gIGNsZWFySG92ZXJPcGVuVGltZW91dCgpIHtcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuaG92ZXJPcGVuVGltZW91dCk7XG4gICAgdGhpcy5ob3Zlck9wZW5UaW1lb3V0ID0gbnVsbDtcbiAgfVxuICBjbGVhckhvdmVyQ2xvc2VUaW1lb3V0KCkge1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5ob3ZlckNsb3NlVGltZW91dCk7XG4gICAgdGhpcy5ob3ZlckNsb3NlVGltZW91dCA9IG51bGw7XG4gIH1cbiAgY2xlYXJIb3ZlclRpbWVvdXQoKSB7XG4gICAgdGhpcy5jbGVhckhvdmVyT3BlblRpbWVvdXQoKTtcbiAgICB0aGlzLmNsZWFySG92ZXJDbG9zZVRpbWVvdXQoKTtcbiAgfVxuICBjbG9zZUFjdGl2ZVRvb2x0aXAoKSB7XG4gICAgY29uc3QgeyBhY3RpdmVUb29sdGlwIH0gPSB0aGlzO1xuICAgIGlmIChhY3RpdmVUb29sdGlwPy5vcGVuKSB7XG4gICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAoYWN0aXZlVG9vbHRpcCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuICB0b2dnbGVGb2N1c2VkVG9vbHRpcCh0b29sdGlwLCBvcGVuKSB7XG4gICAgdGhpcy5jbG9zZUFjdGl2ZVRvb2x0aXAoKTtcbiAgICBpZiAob3Blbikge1xuICAgICAgdGhpcy5jbGVhckhvdmVyVGltZW91dCgpO1xuICAgIH1cbiAgICB0aGlzLnRvZ2dsZVRvb2x0aXAodG9vbHRpcCwgb3Blbik7XG4gIH1cbiAgdG9nZ2xlVG9vbHRpcCh0b29sdGlwLCBvcGVuKSB7XG4gICAgdG9vbHRpcC5vcGVuID0gb3BlbjtcbiAgICB0aGlzLmFjdGl2ZVRvb2x0aXAgPSBvcGVuID8gdG9vbHRpcCA6IG51bGw7XG4gIH1cbiAgcXVlcnlGb2N1c2VkVG9vbHRpcChldmVudCwgb3Blbikge1xuICAgIGNvbnN0IHRvb2x0aXAgPSB0aGlzLnF1ZXJ5VG9vbHRpcChldmVudC5jb21wb3NlZFBhdGgoKSk7XG4gICAgaWYgKCF0b29sdGlwIHx8IHRoaXMuaXNDbG9zYWJsZUNsaWNrZWRUb29sdGlwKHRvb2x0aXApKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudG9nZ2xlRm9jdXNlZFRvb2x0aXAodG9vbHRpcCwgb3Blbik7XG4gIH1cbiAgaXNDbG9zYWJsZUNsaWNrZWRUb29sdGlwKHRvb2x0aXApIHtcbiAgICByZXR1cm4gdG9vbHRpcD8uY2xvc2VPbkNsaWNrICYmIHRvb2x0aXAgPT09IHRoaXMuY2xpY2tlZFRvb2x0aXA7XG4gIH1cbiAgcmVnaXN0ZXJTaGFkb3dSb290KHNoYWRvd1Jvb3QpIHtcbiAgICBjb25zdCB7IHJlZ2lzdGVyZWRTaGFkb3dSb290Q291bnRzIH0gPSB0aGlzO1xuICAgIGNvbnN0IG5ld0NvdW50ID0gKHJlZ2lzdGVyZWRTaGFkb3dSb290Q291bnRzLmdldChzaGFkb3dSb290KSA/PyAwKSArIDE7XG4gICAgaWYgKG5ld0NvdW50ID09PSAxKSB7XG4gICAgICB0aGlzLmFkZFNoYWRvd0xpc3RlbmVycyhzaGFkb3dSb290KTtcbiAgICB9XG4gICAgcmVnaXN0ZXJlZFNoYWRvd1Jvb3RDb3VudHMuc2V0KHNoYWRvd1Jvb3QsIG5ld0NvdW50KTtcbiAgfVxuICB1bnJlZ2lzdGVyU2hhZG93Um9vdChzaGFkb3dSb290KSB7XG4gICAgY29uc3QgeyByZWdpc3RlcmVkU2hhZG93Um9vdENvdW50cyB9ID0gdGhpcztcbiAgICBjb25zdCBuZXdDb3VudCA9IHJlZ2lzdGVyZWRTaGFkb3dSb290Q291bnRzLmdldChzaGFkb3dSb290KSAtIDE7XG4gICAgaWYgKG5ld0NvdW50ID09PSAwKSB7XG4gICAgICB0aGlzLnJlbW92ZVNoYWRvd0xpc3RlbmVycyhzaGFkb3dSb290KTtcbiAgICB9XG4gICAgcmVnaXN0ZXJlZFNoYWRvd1Jvb3RDb3VudHMuc2V0KHNoYWRvd1Jvb3QsIG5ld0NvdW50KTtcbiAgfVxuICBnZXRSZWZlcmVuY2VFbFNoYWRvd1Jvb3ROb2RlKHJlZmVyZW5jZUVsKSB7XG4gICAgcmV0dXJuIHJlZmVyZW5jZUVsIGluc3RhbmNlb2YgRWxlbWVudCA/IGdldFNoYWRvd1Jvb3ROb2RlKHJlZmVyZW5jZUVsKSA6IG51bGw7XG4gIH1cbn1cblxuY29uc3QgdG9vbHRpcENzcyA9IFwiOmhvc3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS10b29sdGlwLXotaW5kZXgsIHZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtdG9vbHRpcCkpO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXgpfS5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLCB2aXNpYmlsaXR5LCBvcGFjaXR5O29wYWNpdHk6MDtib3gtc2hhZG93OjAgMCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2JvcmRlci1yYWRpdXM6MC4yNXJlbX06aG9zdChbZGF0YS1wbGFjZW1lbnRePWJvdHRvbV0pIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTVweCl9Omhvc3QoW2RhdGEtcGxhY2VtZW50Xj10b3BdKSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVZKDVweCl9Omhvc3QoW2RhdGEtcGxhY2VtZW50Xj1sZWZ0XSkgLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWCg1cHgpfTpob3N0KFtkYXRhLXBsYWNlbWVudF49cmlnaHRdKSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01cHgpfTpob3N0KFtkYXRhLXBsYWNlbWVudF0pIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW0tLWFjdGl2ZXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwKX06aG9zdChbY2FsY2l0ZS1oeWRyYXRlZC1oaWRkZW5dKXt2aXNpYmlsaXR5OmhpZGRlbiAhaW1wb3J0YW50O3BvaW50ZXItZXZlbnRzOm5vbmV9LmNhbGNpdGUtZmxvYXRpbmctdWktYXJyb3d7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OmNhbGModmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleCkgKiAtMSk7ZmlsbDp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9LmNhbGNpdGUtZmxvYXRpbmctdWktYXJyb3dfX3N0cm9rZXtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9LmNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLXJhZGl1czowLjI1cmVtO3BhZGRpbmctYmxvY2s6MC43NXJlbTtwYWRkaW5nLWlubGluZToxcmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MS4zNzU7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTttYXgtaW5saW5lLXNpemU6MjByZW07bWF4LWJsb2NrLXNpemU6MjByZW07dGV4dC1hbGlnbjpzdGFydH0uY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte2JvcmRlci1yYWRpdXM6MC4yNXJlbTtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9LmFycm93OjpiZWZvcmV7b3V0bGluZToxcHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IG1hbmFnZXIgPSBuZXcgVG9vbHRpcE1hbmFnZXIoKTtcbmNvbnN0IFRvb2x0aXAgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZVRvb2x0aXBCZWZvcmVDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVRvb2x0aXBCZWZvcmVDbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVUb29sdGlwQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVUb29sdGlwQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlVG9vbHRpcEJlZm9yZU9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVUb29sdGlwQmVmb3JlT3BlblwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVUb29sdGlwT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVRvb2x0aXBPcGVuXCIsIDYpO1xuICAgIHRoaXMuZ3VpZCA9IGBjYWxjaXRlLXRvb2x0aXAtJHtndWlkKCl9YDtcbiAgICB0aGlzLmhhc0xvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMub3BlblRyYW5zaXRpb25Qcm9wID0gXCJvcGFjaXR5XCI7XG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbkVsID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLnNldFVwUmVmZXJlbmNlRWxlbWVudCA9ICh3YXJuID0gdHJ1ZSkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVSZWZlcmVuY2VzKCk7XG4gICAgICB0aGlzLmVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQgPSBnZXRFZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KHRoaXMuZWwpO1xuICAgICAgY29ubmVjdEZsb2F0aW5nVUkodGhpcywgdGhpcy5lZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LCB0aGlzLmVsKTtcbiAgICAgIGNvbnN0IHsgZWwsIHJlZmVyZW5jZUVsZW1lbnQsIGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQgfSA9IHRoaXM7XG4gICAgICBpZiAod2FybiAmJiByZWZlcmVuY2VFbGVtZW50ICYmICFlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgJHtlbC50YWdOYW1lfTogcmVmZXJlbmNlLWVsZW1lbnQgaWQgXCIke3JlZmVyZW5jZUVsZW1lbnR9XCIgd2FzIG5vdCBmb3VuZC5gLCB7XG4gICAgICAgICAgZWwsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5hZGRSZWZlcmVuY2VzKCk7XG4gICAgfTtcbiAgICB0aGlzLmdldElkID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZWwuaWQgfHwgdGhpcy5ndWlkO1xuICAgIH07XG4gICAgdGhpcy5hZGRSZWZlcmVuY2VzID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50IH0gPSB0aGlzO1xuICAgICAgaWYgKCFlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXRJZCgpO1xuICAgICAgaWYgKFwic2V0QXR0cmlidXRlXCIgaW4gZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCkge1xuICAgICAgICBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LnNldEF0dHJpYnV0ZShBUklBX0RFU0NSSUJFRF9CWSwgaWQpO1xuICAgICAgfVxuICAgICAgbWFuYWdlci5yZWdpc3RlckVsZW1lbnQoZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCwgdGhpcy5lbCk7XG4gICAgfTtcbiAgICB0aGlzLnJlbW92ZVJlZmVyZW5jZXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQgfSA9IHRoaXM7XG4gICAgICBpZiAoIWVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKFwicmVtb3ZlQXR0cmlidXRlXCIgaW4gZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCkge1xuICAgICAgICBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShBUklBX0RFU0NSSUJFRF9CWSk7XG4gICAgICB9XG4gICAgICBtYW5hZ2VyLnVucmVnaXN0ZXJFbGVtZW50KGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpO1xuICAgIH07XG4gICAgdGhpcy5jbG9zZU9uQ2xpY2sgPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub2Zmc2V0RGlzdGFuY2UgPSBkZWZhdWx0T2Zmc2V0RGlzdGFuY2U7XG4gICAgdGhpcy5vZmZzZXRTa2lkZGluZyA9IDA7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5vdmVybGF5UG9zaXRpb25pbmcgPSBcImFic29sdXRlXCI7XG4gICAgdGhpcy5wbGFjZW1lbnQgPSBcImF1dG9cIjtcbiAgICB0aGlzLnJlZmVyZW5jZUVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZmxvYXRpbmdMYXlvdXQgPSBcInZlcnRpY2FsXCI7XG4gIH1cbiAgb2Zmc2V0RGlzdGFuY2VPZmZzZXRIYW5kbGVyKCkge1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICBvZmZzZXRTa2lkZGluZ0hhbmRsZXIoKSB7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIG9wZW5IYW5kbGVyKHZhbHVlKSB7XG4gICAgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gICAgfVxuICB9XG4gIG92ZXJsYXlQb3NpdGlvbmluZ0hhbmRsZXIoKSB7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIHBsYWNlbWVudEhhbmRsZXIoKSB7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIHJlZmVyZW5jZUVsZW1lbnRIYW5kbGVyKCkge1xuICAgIHRoaXMuc2V0VXBSZWZlcmVuY2VFbGVtZW50KCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnNldFVwUmVmZXJlbmNlRWxlbWVudCh0aGlzLmhhc0xvYWRlZCk7XG4gICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gICAgfVxuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgIG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIGlmICh0aGlzLnJlZmVyZW5jZUVsZW1lbnQgJiYgIXRoaXMuZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCkge1xuICAgICAgdGhpcy5zZXRVcFJlZmVyZW5jZUVsZW1lbnQoKTtcbiAgICB9XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICAgIHRoaXMuaGFzTG9hZGVkID0gdHJ1ZTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnJlbW92ZVJlZmVyZW5jZXMoKTtcbiAgICBkaXNjb25uZWN0RmxvYXRpbmdVSSh0aGlzLCB0aGlzLmVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuZWwpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIGRlbGF5ZWRcbiAgICovXG4gIGFzeW5jIHJlcG9zaXRpb24oZGVsYXllZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgeyBlbCwgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCwgcGxhY2VtZW50LCBvdmVybGF5UG9zaXRpb25pbmcsIG9mZnNldERpc3RhbmNlLCBvZmZzZXRTa2lkZGluZywgYXJyb3dFbCwgfSA9IHRoaXM7XG4gICAgcmV0dXJuIHJlcG9zaXRpb24odGhpcywge1xuICAgICAgZmxvYXRpbmdFbDogZWwsXG4gICAgICByZWZlcmVuY2VFbDogZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCxcbiAgICAgIG92ZXJsYXlQb3NpdGlvbmluZyxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIG9mZnNldERpc3RhbmNlLFxuICAgICAgb2Zmc2V0U2tpZGRpbmcsXG4gICAgICBhcnJvd0VsLFxuICAgICAgdHlwZTogXCJ0b29sdGlwXCIsXG4gICAgfSwgZGVsYXllZCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBvbkJlZm9yZU9wZW4oKSB7XG4gICAgdGhpcy5jYWxjaXRlVG9vbHRpcEJlZm9yZU9wZW4uZW1pdCgpO1xuICB9XG4gIG9uT3BlbigpIHtcbiAgICB0aGlzLmNhbGNpdGVUb29sdGlwT3Blbi5lbWl0KCk7XG4gIH1cbiAgb25CZWZvcmVDbG9zZSgpIHtcbiAgICB0aGlzLmNhbGNpdGVUb29sdGlwQmVmb3JlQ2xvc2UuZW1pdCgpO1xuICB9XG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5jYWxjaXRlVG9vbHRpcENsb3NlLmVtaXQoKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCwgbGFiZWwsIG9wZW4sIGZsb2F0aW5nTGF5b3V0IH0gPSB0aGlzO1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQgJiYgb3BlbjtcbiAgICBjb25zdCBoaWRkZW4gPSAhZGlzcGxheWVkO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1oaWRkZW5cIjogdG9BcmlhQm9vbGVhbihoaWRkZW4pLCBcImFyaWEtbGFiZWxcIjogbGFiZWwsIFwiYXJpYS1saXZlXCI6IFwicG9saXRlXCIsIFwiY2FsY2l0ZS1oeWRyYXRlZC1oaWRkZW5cIjogaGlkZGVuLCBpZDogdGhpcy5nZXRJZCgpLCByb2xlOiBcInRvb2x0aXBcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0Zsb2F0aW5nQ1NTLmFuaW1hdGlvbl06IHRydWUsXG4gICAgICAgIFtGbG9hdGluZ0NTUy5hbmltYXRpb25BY3RpdmVdOiBkaXNwbGF5ZWQsXG4gICAgICB9LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zZXRUcmFuc2l0aW9uRWwgfSwgaChGbG9hdGluZ0Fycm93LCB7IGZsb2F0aW5nTGF5b3V0OiBmbG9hdGluZ0xheW91dCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IChhcnJvd0VsKSA9PiAodGhpcy5hcnJvd0VsID0gYXJyb3dFbCkgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbnRhaW5lciB9LCBoKFwic2xvdFwiLCBudWxsKSkpKSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwib2Zmc2V0RGlzdGFuY2VcIjogW1wib2Zmc2V0RGlzdGFuY2VPZmZzZXRIYW5kbGVyXCJdLFxuICAgIFwib2Zmc2V0U2tpZGRpbmdcIjogW1wib2Zmc2V0U2tpZGRpbmdIYW5kbGVyXCJdLFxuICAgIFwib3BlblwiOiBbXCJvcGVuSGFuZGxlclwiXSxcbiAgICBcIm92ZXJsYXlQb3NpdGlvbmluZ1wiOiBbXCJvdmVybGF5UG9zaXRpb25pbmdIYW5kbGVyXCJdLFxuICAgIFwicGxhY2VtZW50XCI6IFtcInBsYWNlbWVudEhhbmRsZXJcIl0sXG4gICAgXCJyZWZlcmVuY2VFbGVtZW50XCI6IFtcInJlZmVyZW5jZUVsZW1lbnRIYW5kbGVyXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIHRvb2x0aXBDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtdG9vbHRpcFwiLCB7XG4gICAgXCJjbG9zZU9uQ2xpY2tcIjogWzUxNiwgXCJjbG9zZS1vbi1jbGlja1wiXSxcbiAgICBcImxhYmVsXCI6IFsxXSxcbiAgICBcIm9mZnNldERpc3RhbmNlXCI6IFs1MTQsIFwib2Zmc2V0LWRpc3RhbmNlXCJdLFxuICAgIFwib2Zmc2V0U2tpZGRpbmdcIjogWzUxNCwgXCJvZmZzZXQtc2tpZGRpbmdcIl0sXG4gICAgXCJvcGVuXCI6IFs1MTZdLFxuICAgIFwib3ZlcmxheVBvc2l0aW9uaW5nXCI6IFs1MTMsIFwib3ZlcmxheS1wb3NpdGlvbmluZ1wiXSxcbiAgICBcInBsYWNlbWVudFwiOiBbNTEzXSxcbiAgICBcInJlZmVyZW5jZUVsZW1lbnRcIjogWzEsIFwicmVmZXJlbmNlLWVsZW1lbnRcIl0sXG4gICAgXCJlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50XCI6IFszMl0sXG4gICAgXCJmbG9hdGluZ0xheW91dFwiOiBbMzJdLFxuICAgIFwicmVwb3NpdGlvblwiOiBbNjRdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS10b29sdGlwXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLXRvb2x0aXBcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBUb29sdGlwKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG5cbmNvbnN0IENhbGNpdGVUb29sdGlwID0gVG9vbHRpcDtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVUb29sdGlwLCBkZWZpbmVDdXN0b21FbGVtZW50IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=