"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_dropdown_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/dropdown.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/dropdown.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ Dropdown),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _floating_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./floating-ui.js */ "./node_modules/@esri/calcite-components/dist/components/floating-ui.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _openCloseComponent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./openCloseComponent.js */ "./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */










const SLOTS = {
  dropdownTrigger: "trigger",
};

const dropdownCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-flex;flex:0 1 auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host .calcite-dropdown-wrapper{--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.calcite-dropdown-wrapper .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}.calcite-dropdown-wrapper[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.calcite-dropdown-wrapper[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.calcite-dropdown-wrapper[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.calcite-dropdown-wrapper[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.calcite-dropdown-wrapper[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([open]) .calcite-dropdown-wrapper{visibility:visible}:host .calcite-dropdown-content{max-block-size:45vh;inline-size:auto;overflow-y:auto;overflow-x:hidden;background-color:var(--calcite-ui-foreground-1);inline-size:var(--calcite-dropdown-width)}.calcite-trigger-container{position:relative;display:flex;flex:1 1 auto;word-wrap:break-word;word-break:break-word}@media (forced-colors: active){:host([open]) .calcite-dropdown-wrapper{border:1px solid canvasText}}:host([width=s]){--calcite-dropdown-width:12rem}:host([width=m]){--calcite-dropdown-width:14rem}:host([width=l]){--calcite-dropdown-width:16rem}:host([hidden]){display:none}[hidden]{display:none}";

const Dropdown = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteDropdownSelect = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteDropdownSelect", 6);
    this.calciteDropdownBeforeClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteDropdownBeforeClose", 6);
    this.calciteDropdownClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteDropdownClose", 6);
    this.calciteDropdownBeforeOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteDropdownBeforeOpen", 6);
    this.calciteDropdownOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteDropdownOpen", 6);
    this.items = [];
    this.groups = [];
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_6__.c)("mutation", () => this.updateItems());
    this.resizeObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_6__.c)("resize", (entries) => this.resizeObserverCallback(entries));
    this.openTransitionProp = "opacity";
    this.guid = `calcite-dropdown-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_2__.g)()}`;
    this.defaultAssignedElements = [];
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.slotChangeHandler = (event) => {
      this.defaultAssignedElements = event.target.assignedElements({
        flatten: true,
      });
      this.updateItems();
    };
    this.setFilteredPlacements = () => {
      const { el, flipPlacements } = this;
      this.filteredFlipPlacements = flipPlacements
        ? (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_1__.f)(flipPlacements, el)
        : null;
    };
    this.updateTriggers = (event) => {
      this.triggers = event.target.assignedElements({
        flatten: true,
      });
      this.reposition(true);
    };
    this.updateItems = () => {
      this.items = this.groups
        .map((group) => Array.from(group?.querySelectorAll("calcite-dropdown-item")))
        .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);
      this.updateSelectedItems();
      this.reposition(true);
      this.items.forEach((item) => (item.scale = this.scale));
    };
    this.updateGroups = (event) => {
      const groups = event.target
        .assignedElements({ flatten: true })
        .filter((el) => el?.matches("calcite-dropdown-group"));
      this.groups = groups;
      this.updateItems();
    };
    this.resizeObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const { target } = entry;
        if (target === this.referenceEl) {
          this.setDropdownWidth();
        }
        else if (target === this.scrollerEl) {
          this.setMaxScrollerHeight();
        }
      });
    };
    this.setDropdownWidth = () => {
      const { referenceEl, scrollerEl } = this;
      const referenceElWidth = referenceEl?.clientWidth;
      if (!referenceElWidth || !scrollerEl) {
        return;
      }
      scrollerEl.style.minWidth = `${referenceElWidth}px`;
    };
    this.setMaxScrollerHeight = () => {
      const { scrollerEl } = this;
      if (!scrollerEl) {
        return;
      }
      this.reposition(true);
      const maxScrollerHeight = this.getMaxScrollerHeight();
      scrollerEl.style.maxHeight = maxScrollerHeight > 0 ? `${maxScrollerHeight}px` : "";
      this.reposition(true);
    };
    this.setScrollerAndTransitionEl = (el) => {
      this.resizeObserver.observe(el);
      this.scrollerEl = el;
      this.transitionEl = el;
    };
    this.setReferenceEl = (el) => {
      this.referenceEl = el;
      (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, this.referenceEl, this.floatingEl);
      this.resizeObserver.observe(el);
    };
    this.setFloatingEl = (el) => {
      this.floatingEl = el;
      (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, this.referenceEl, this.floatingEl);
    };
    this.keyDownHandler = (event) => {
      if (!event.composedPath().includes(this.referenceEl)) {
        return;
      }
      const { defaultPrevented, key } = event;
      if (defaultPrevented) {
        return;
      }
      if (this.open) {
        if (key === "Escape") {
          this.closeCalciteDropdown();
          event.preventDefault();
          return;
        }
        else if (event.shiftKey && key === "Tab") {
          this.closeCalciteDropdown();
          event.preventDefault();
          return;
        }
      }
      if ((0,_key_js__WEBPACK_IMPORTED_MODULE_4__.i)(key)) {
        this.openCalciteDropdown();
        event.preventDefault();
      }
      else if (key === "Escape") {
        this.closeCalciteDropdown();
        event.preventDefault();
      }
    };
    this.focusOnFirstActiveOrFirstItem = () => {
      this.getFocusableElement(this.items.find((item) => item.selected) || this.items[0]);
    };
    this.toggleOpenEnd = () => {
      this.focusOnFirstActiveOrFirstItem();
      this.el.removeEventListener("calciteDropdownOpen", this.toggleOpenEnd);
    };
    this.openCalciteDropdown = () => {
      this.open = !this.open;
      if (this.open) {
        this.el.addEventListener("calciteDropdownOpen", this.toggleOpenEnd);
      }
    };
    this.open = false;
    this.closeOnSelectDisabled = false;
    this.disabled = false;
    this.flipPlacements = undefined;
    this.maxItems = 0;
    this.overlayPositioning = "absolute";
    this.placement = _floating_ui_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.selectedItems = [];
    this.type = "click";
    this.width = undefined;
    this.scale = "m";
  }
  openHandler(value) {
    if (!this.disabled) {
      if (value) {
        this.reposition(true);
      }
      (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_7__.o)(this);
      return;
    }
    this.open = false;
  }
  handleDisabledChange(value) {
    if (!value) {
      this.open = false;
    }
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements();
    this.reposition(true);
  }
  maxItemsHandler() {
    this.setMaxScrollerHeight();
  }
  overlayPositioningHandler() {
    this.reposition(true);
  }
  placementHandler() {
    this.reposition(true);
  }
  handlePropsChange() {
    this.updateItems();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    this.el.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
    this.setFilteredPlacements();
    this.reposition(true);
    if (this.open) {
      this.openHandler(this.open);
      (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_7__.o)(this);
    }
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    this.updateItems();
  }
  componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.a)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
    this.reposition(true);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.u)(this);
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
    this.resizeObserver?.disconnect();
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_1__.a)(this, this.referenceEl, this.floatingEl);
  }
  render() {
    const { open, guid } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.Host, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("div", { class: "calcite-trigger-container", id: `${guid}-menubutton`, onClick: this.openCalciteDropdown, onKeyDown: this.keyDownHandler,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setReferenceEl }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot", { "aria-controls": `${guid}-menu`, "aria-expanded": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(open), "aria-haspopup": "menu", name: SLOTS.dropdownTrigger, onSlotchange: this.updateTriggers })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("div", { "aria-hidden": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(!open), class: "calcite-dropdown-wrapper",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setFloatingEl }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("div", { "aria-labelledby": `${guid}-menubutton`, class: {
        ["calcite-dropdown-content"]: true,
        [_floating_ui_js__WEBPACK_IMPORTED_MODULE_1__.F.animation]: true,
        [_floating_ui_js__WEBPACK_IMPORTED_MODULE_1__.F.animationActive]: open,
      }, id: `${guid}-menu`, role: "menu",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setScrollerAndTransitionEl }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot", { onSlotchange: this.updateGroups })))));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(delayed = false) {
    const { floatingEl, referenceEl, placement, overlayPositioning, filteredFlipPlacements } = this;
    return (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, {
      floatingEl,
      referenceEl,
      overlayPositioning,
      placement,
      flipPlacements: filteredFlipPlacements,
      type: "menu",
    }, delayed);
  }
  closeCalciteDropdownOnClick(event) {
    if (this.disabled ||
      !(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.j)(event) ||
      !this.open ||
      event.composedPath().includes(this.el)) {
      return;
    }
    this.closeCalciteDropdown(false);
  }
  closeCalciteDropdownOnEvent(event) {
    this.closeCalciteDropdown();
    event.stopPropagation();
  }
  closeCalciteDropdownOnOpenEvent(event) {
    if (event.composedPath().includes(this.el)) {
      return;
    }
    this.open = false;
  }
  pointerEnterHandler() {
    if (this.disabled || this.type !== "hover") {
      return;
    }
    this.openCalciteDropdown();
  }
  pointerLeaveHandler() {
    if (this.disabled || this.type !== "hover") {
      return;
    }
    this.closeCalciteDropdown();
  }
  calciteInternalDropdownItemKeyEvent(event) {
    const { keyboardEvent } = event.detail;
    const target = keyboardEvent.target;
    switch (keyboardEvent.key) {
      case "Tab":
        this.open = false;
        this.updateTabIndexOfItems(target);
        break;
      case "ArrowDown":
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.i)(this.items, target, "next");
        break;
      case "ArrowUp":
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.i)(this.items, target, "previous");
        break;
      case "Home":
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.i)(this.items, target, "first");
        break;
      case "End":
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.i)(this.items, target, "last");
        break;
    }
    event.stopPropagation();
  }
  handleItemSelect(event) {
    this.updateSelectedItems();
    event.stopPropagation();
    this.calciteDropdownSelect.emit();
    if (!this.closeOnSelectDisabled ||
      event.detail.requestedDropdownGroup.selectionMode === "none") {
      this.closeCalciteDropdown();
    }
    event.stopPropagation();
  }
  onBeforeOpen() {
    this.calciteDropdownBeforeOpen.emit();
  }
  onOpen() {
    this.calciteDropdownOpen.emit();
  }
  onBeforeClose() {
    this.calciteDropdownBeforeClose.emit();
  }
  onClose() {
    this.calciteDropdownClose.emit();
  }
  updateSelectedItems() {
    this.selectedItems = this.items.filter((item) => item.selected);
  }
  getMaxScrollerHeight() {
    const { maxItems, items } = this;
    let itemsToProcess = 0;
    let maxScrollerHeight = 0;
    let groupHeaderHeight;
    this.groups.forEach((group) => {
      if (maxItems > 0 && itemsToProcess < maxItems) {
        Array.from(group.children).forEach((item, index) => {
          if (index === 0) {
            if (isNaN(groupHeaderHeight)) {
              groupHeaderHeight = item.offsetTop;
            }
            maxScrollerHeight += groupHeaderHeight;
          }
          if (itemsToProcess < maxItems) {
            maxScrollerHeight += item.offsetHeight;
            itemsToProcess += 1;
          }
        });
      }
    });
    return items.length > maxItems ? maxScrollerHeight : 0;
  }
  closeCalciteDropdown(focusTrigger = true) {
    this.open = false;
    if (focusTrigger) {
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.k)(this.triggers[0]);
    }
  }
  getFocusableElement(item) {
    if (!item) {
      return;
    }
    const target = item.attributes.isLink
      ? item.shadowRoot.querySelector("a")
      : item;
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.k)(target);
  }
  updateTabIndexOfItems(target) {
    this.items.forEach((item) => {
      item.tabIndex = target !== item ? -1 : 0;
    });
  }
  static get delegatesFocus() { return true; }
  get el() { return this; }
  static get watchers() { return {
    "open": ["openHandler"],
    "disabled": ["handleDisabledChange"],
    "flipPlacements": ["flipPlacementsHandler"],
    "maxItems": ["maxItemsHandler"],
    "overlayPositioning": ["overlayPositioningHandler"],
    "placement": ["placementHandler"],
    "scale": ["handlePropsChange"]
  }; }
  static get style() { return dropdownCss; }
}, [17, "calcite-dropdown", {
    "open": [1540],
    "closeOnSelectDisabled": [516, "close-on-select-disabled"],
    "disabled": [516],
    "flipPlacements": [16],
    "maxItems": [514, "max-items"],
    "overlayPositioning": [513, "overlay-positioning"],
    "placement": [513],
    "selectedItems": [1040],
    "type": [513],
    "width": [513],
    "scale": [513],
    "setFocus": [64],
    "reposition": [64]
  }, [[9, "pointerdown", "closeCalciteDropdownOnClick"], [0, "calciteInternalDropdownCloseRequest", "closeCalciteDropdownOnEvent"], [8, "calciteDropdownOpen", "closeCalciteDropdownOnOpenEvent"], [1, "pointerenter", "pointerEnterHandler"], [1, "pointerleave", "pointerLeaveHandler"], [0, "calciteInternalDropdownItemKeyEvent", "calciteInternalDropdownItemKeyEvent"], [0, "calciteInternalDropdownItemSelect", "handleItemSelect"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-dropdown"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-dropdown":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Dropdown);
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOTI3MjgzMGJmY2NjYjE3YTljNTI1NmExNDZiYjU1NTcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytHO0FBQ1M7QUFDMEQ7QUFDNUk7QUFDNkU7QUFDbkU7QUFDOEQ7QUFDekQ7QUFDcUI7O0FBRTFFO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsZUFBZSx5QkFBeUIsaUJBQWlCLDJDQUEyQyxtREFBbUQsb0JBQW9CLE1BQU0sb0JBQW9CLGNBQWMseUdBQXlHLFVBQVUsZ0NBQWdDLGtFQUFrRSxjQUFjLGtCQUFrQiwyQ0FBMkMsa0JBQWtCLG9EQUFvRCxrQkFBa0IsaURBQWlELG1EQUFtRCxVQUFVLDBDQUEwQyxtQ0FBbUMsc0JBQXNCLDRFQUE0RSwyQkFBMkIseUVBQXlFLDBCQUEwQiwwRUFBMEUsMEJBQTBCLDJFQUEyRSwyQkFBMkIsNEVBQTRFLFVBQVUsdUJBQXVCLHdDQUF3QyxtQkFBbUIsZ0NBQWdDLG9CQUFvQixpQkFBaUIsZ0JBQWdCLGtCQUFrQixnREFBZ0QsMENBQTBDLDJCQUEyQixrQkFBa0IsYUFBYSxjQUFjLHFCQUFxQixzQkFBc0IsK0JBQStCLHdDQUF3Qyw2QkFBNkIsaUJBQWlCLCtCQUErQixpQkFBaUIsK0JBQStCLGlCQUFpQiwrQkFBK0IsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUUxOUQsK0JBQStCLDBGQUFrQixlQUFlLCtFQUFXO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG1GQUFXO0FBQzVDLHNDQUFzQyxtRkFBVztBQUNqRCxnQ0FBZ0MsbUZBQVc7QUFDM0MscUNBQXFDLG1GQUFXO0FBQ2hELCtCQUErQixtRkFBVztBQUMxQztBQUNBO0FBQ0EsNEJBQTRCLGdEQUFjO0FBQzFDLDBCQUEwQixnREFBYztBQUN4QztBQUNBLG9DQUFvQywyQ0FBSSxHQUFHO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxjQUFjLHFCQUFxQjtBQUNuQztBQUNBLFVBQVUsa0RBQXdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGVBQWU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxjQUFjLDBCQUEwQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxpQkFBaUI7QUFDdEQ7QUFDQTtBQUNBLGNBQWMsYUFBYTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELGtCQUFrQjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtEQUFpQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sa0RBQWlCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHdCQUF3QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDBDQUFlO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw4Q0FBb0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlEQUEwQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwrQ0FBa0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxnQ0FBZ0M7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlEQUEwQjtBQUNoQztBQUNBLElBQUksa0RBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQXNCO0FBQzFCO0FBQ0E7QUFDQSxJQUFJLCtDQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQXFCO0FBQ3pCLElBQUksa0RBQW9CO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekIsWUFBWSx5RUFBQyxDQUFDLHdFQUFJLFFBQVEseUVBQUMsVUFBVSwyQ0FBMkMsS0FBSztBQUNyRjtBQUNBLGdDQUFnQyxFQUFFLHlFQUFDLFdBQVcsb0JBQW9CLEtBQUsseUJBQXlCLDBDQUFhLGlHQUFpRyxJQUFJLHlFQUFDLFVBQVUsZUFBZSwwQ0FBYTtBQUN6UDtBQUNBLCtCQUErQixFQUFFLHlFQUFDLFVBQVUsc0JBQXNCLEtBQUs7QUFDdkU7QUFDQSxTQUFTLDhDQUFXO0FBQ3BCLFNBQVMsOENBQVc7QUFDcEIsT0FBTyxTQUFTLEtBQUs7QUFDckI7QUFDQSw0Q0FBNEMsRUFBRSx5RUFBQyxXQUFXLGlDQUFpQztBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlGQUFpRjtBQUM3RixXQUFXLGtEQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPLDBDQUFzQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBDQUFtQjtBQUMzQjtBQUNBO0FBQ0EsUUFBUSwwQ0FBbUI7QUFDM0I7QUFDQTtBQUNBLFFBQVEsMENBQW1CO0FBQzNCO0FBQ0E7QUFDQSxRQUFRLDBDQUFtQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwQ0FBWTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBDQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZ0NBQWdDO0FBQ2hDLGFBQWE7QUFDYiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRW1EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2Ryb3Bkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoLCBIb3N0IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgdCBhcyB0b0FyaWFCb29sZWFuLCBqIGFzIGlzUHJpbWFyeVBvaW50ZXJCdXR0b24sIGkgYXMgZm9jdXNFbGVtZW50SW5Hcm91cCwgayBhcyBmb2N1c0VsZW1lbnQgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBmIGFzIGZpbHRlckNvbXB1dGVkUGxhY2VtZW50cywgYyBhcyBjb25uZWN0RmxvYXRpbmdVSSwgZCBhcyBkZWZhdWx0TWVudVBsYWNlbWVudCwgYSBhcyBkaXNjb25uZWN0RmxvYXRpbmdVSSwgRiBhcyBGbG9hdGluZ0NTUywgciBhcyByZXBvc2l0aW9uIH0gZnJvbSAnLi9mbG9hdGluZy11aS5qcyc7XG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSB9IGZyb20gJy4vaW50ZXJhY3RpdmUuanMnO1xuaW1wb3J0IHsgaSBhcyBpc0FjdGl2YXRpb25LZXkgfSBmcm9tICcuL2tleS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbXBvbmVudEZvY3VzYWJsZSwgYSBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBzIGFzIHNldENvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcbmltcG9ydCB7IG8gYXMgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQgfSBmcm9tICcuL29wZW5DbG9zZUNvbXBvbmVudC5qcyc7XG5cbmNvbnN0IFNMT1RTID0ge1xuICBkcm9wZG93blRyaWdnZXI6IFwidHJpZ2dlclwiLFxufTtcblxuY29uc3QgZHJvcGRvd25Dc3MgPSBcIjpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2Rpc3BsYXk6aW5saW5lLWZsZXg7ZmxleDowIDEgYXV0b306aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9Omhvc3QgLmNhbGNpdGUtZHJvcGRvd24td3JhcHBlcnstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4KTt2aXNpYmlsaXR5OmhpZGRlbn0uY2FsY2l0ZS1kcm9wZG93bi13cmFwcGVyIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLCB2aXNpYmlsaXR5LCBvcGFjaXR5O29wYWNpdHk6MDtib3gtc2hhZG93OjAgMCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2JvcmRlci1yYWRpdXM6MC4yNXJlbX0uY2FsY2l0ZS1kcm9wZG93bi13cmFwcGVyW2RhdGEtcGxhY2VtZW50Xj1ib3R0b21dIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTVweCl9LmNhbGNpdGUtZHJvcGRvd24td3JhcHBlcltkYXRhLXBsYWNlbWVudF49dG9wXSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVZKDVweCl9LmNhbGNpdGUtZHJvcGRvd24td3JhcHBlcltkYXRhLXBsYWNlbWVudF49bGVmdF0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWCg1cHgpfS5jYWxjaXRlLWRyb3Bkb3duLXdyYXBwZXJbZGF0YS1wbGFjZW1lbnRePXJpZ2h0XSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01cHgpfS5jYWxjaXRlLWRyb3Bkb3duLXdyYXBwZXJbZGF0YS1wbGFjZW1lbnRdIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW0tLWFjdGl2ZXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwKX06aG9zdChbb3Blbl0pIC5jYWxjaXRlLWRyb3Bkb3duLXdyYXBwZXJ7dmlzaWJpbGl0eTp2aXNpYmxlfTpob3N0IC5jYWxjaXRlLWRyb3Bkb3duLWNvbnRlbnR7bWF4LWJsb2NrLXNpemU6NDV2aDtpbmxpbmUtc2l6ZTphdXRvO292ZXJmbG93LXk6YXV0bztvdmVyZmxvdy14OmhpZGRlbjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWRyb3Bkb3duLXdpZHRoKX0uY2FsY2l0ZS10cmlnZ2VyLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7ZmxleDoxIDEgYXV0bzt3b3JkLXdyYXA6YnJlYWstd29yZDt3b3JkLWJyZWFrOmJyZWFrLXdvcmR9QG1lZGlhIChmb3JjZWQtY29sb3JzOiBhY3RpdmUpezpob3N0KFtvcGVuXSkgLmNhbGNpdGUtZHJvcGRvd24td3JhcHBlcntib3JkZXI6MXB4IHNvbGlkIGNhbnZhc1RleHR9fTpob3N0KFt3aWR0aD1zXSl7LS1jYWxjaXRlLWRyb3Bkb3duLXdpZHRoOjEycmVtfTpob3N0KFt3aWR0aD1tXSl7LS1jYWxjaXRlLWRyb3Bkb3duLXdpZHRoOjE0cmVtfTpob3N0KFt3aWR0aD1sXSl7LS1jYWxjaXRlLWRyb3Bkb3duLXdpZHRoOjE2cmVtfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBEcm9wZG93biA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlRHJvcGRvd25TZWxlY3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVEcm9wZG93blNlbGVjdFwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVEcm9wZG93bkJlZm9yZUNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlRHJvcGRvd25CZWZvcmVDbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVEcm9wZG93bkNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlRHJvcGRvd25DbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVEcm9wZG93bkJlZm9yZU9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVEcm9wZG93bkJlZm9yZU9wZW5cIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlRHJvcGRvd25PcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlRHJvcGRvd25PcGVuXCIsIDYpO1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLmdyb3VwcyA9IFtdO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgKCkgPT4gdGhpcy51cGRhdGVJdGVtcygpKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJyZXNpemVcIiwgKGVudHJpZXMpID0+IHRoaXMucmVzaXplT2JzZXJ2ZXJDYWxsYmFjayhlbnRyaWVzKSk7XG4gICAgdGhpcy5vcGVuVHJhbnNpdGlvblByb3AgPSBcIm9wYWNpdHlcIjtcbiAgICB0aGlzLmd1aWQgPSBgY2FsY2l0ZS1kcm9wZG93bi0ke2d1aWQoKX1gO1xuICAgIHRoaXMuZGVmYXVsdEFzc2lnbmVkRWxlbWVudHMgPSBbXTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5zbG90Q2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5kZWZhdWx0QXNzaWduZWRFbGVtZW50cyA9IGV2ZW50LnRhcmdldC5hc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgICAgZmxhdHRlbjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy51cGRhdGVJdGVtcygpO1xuICAgIH07XG4gICAgdGhpcy5zZXRGaWx0ZXJlZFBsYWNlbWVudHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGVsLCBmbGlwUGxhY2VtZW50cyB9ID0gdGhpcztcbiAgICAgIHRoaXMuZmlsdGVyZWRGbGlwUGxhY2VtZW50cyA9IGZsaXBQbGFjZW1lbnRzXG4gICAgICAgID8gZmlsdGVyQ29tcHV0ZWRQbGFjZW1lbnRzKGZsaXBQbGFjZW1lbnRzLCBlbClcbiAgICAgICAgOiBudWxsO1xuICAgIH07XG4gICAgdGhpcy51cGRhdGVUcmlnZ2VycyA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy50cmlnZ2VycyA9IGV2ZW50LnRhcmdldC5hc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgICAgZmxhdHRlbjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICAgIH07XG4gICAgdGhpcy51cGRhdGVJdGVtcyA9ICgpID0+IHtcbiAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmdyb3Vwc1xuICAgICAgICAubWFwKChncm91cCkgPT4gQXJyYXkuZnJvbShncm91cD8ucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtZHJvcGRvd24taXRlbVwiKSkpXG4gICAgICAgIC5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT4gWy4uLnByZXZpb3VzVmFsdWUsIC4uLmN1cnJlbnRWYWx1ZV0sIFtdKTtcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRJdGVtcygpO1xuICAgICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5zY2FsZSA9IHRoaXMuc2NhbGUpKTtcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlR3JvdXBzID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBncm91cHMgPSBldmVudC50YXJnZXRcbiAgICAgICAgLmFzc2lnbmVkRWxlbWVudHMoeyBmbGF0dGVuOiB0cnVlIH0pXG4gICAgICAgIC5maWx0ZXIoKGVsKSA9PiBlbD8ubWF0Y2hlcyhcImNhbGNpdGUtZHJvcGRvd24tZ3JvdXBcIikpO1xuICAgICAgdGhpcy5ncm91cHMgPSBncm91cHM7XG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XG4gICAgfTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyQ2FsbGJhY2sgPSAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBjb25zdCB7IHRhcmdldCB9ID0gZW50cnk7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHRoaXMucmVmZXJlbmNlRWwpIHtcbiAgICAgICAgICB0aGlzLnNldERyb3Bkb3duV2lkdGgoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0YXJnZXQgPT09IHRoaXMuc2Nyb2xsZXJFbCkge1xuICAgICAgICAgIHRoaXMuc2V0TWF4U2Nyb2xsZXJIZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLnNldERyb3Bkb3duV2lkdGggPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IHJlZmVyZW5jZUVsLCBzY3JvbGxlckVsIH0gPSB0aGlzO1xuICAgICAgY29uc3QgcmVmZXJlbmNlRWxXaWR0aCA9IHJlZmVyZW5jZUVsPy5jbGllbnRXaWR0aDtcbiAgICAgIGlmICghcmVmZXJlbmNlRWxXaWR0aCB8fCAhc2Nyb2xsZXJFbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzY3JvbGxlckVsLnN0eWxlLm1pbldpZHRoID0gYCR7cmVmZXJlbmNlRWxXaWR0aH1weGA7XG4gICAgfTtcbiAgICB0aGlzLnNldE1heFNjcm9sbGVySGVpZ2h0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyBzY3JvbGxlckVsIH0gPSB0aGlzO1xuICAgICAgaWYgKCFzY3JvbGxlckVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICAgIGNvbnN0IG1heFNjcm9sbGVySGVpZ2h0ID0gdGhpcy5nZXRNYXhTY3JvbGxlckhlaWdodCgpO1xuICAgICAgc2Nyb2xsZXJFbC5zdHlsZS5tYXhIZWlnaHQgPSBtYXhTY3JvbGxlckhlaWdodCA+IDAgPyBgJHttYXhTY3JvbGxlckhlaWdodH1weGAgOiBcIlwiO1xuICAgICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICAgIH07XG4gICAgdGhpcy5zZXRTY3JvbGxlckFuZFRyYW5zaXRpb25FbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsKTtcbiAgICAgIHRoaXMuc2Nyb2xsZXJFbCA9IGVsO1xuICAgICAgdGhpcy50cmFuc2l0aW9uRWwgPSBlbDtcbiAgICB9O1xuICAgIHRoaXMuc2V0UmVmZXJlbmNlRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMucmVmZXJlbmNlRWwgPSBlbDtcbiAgICAgIGNvbm5lY3RGbG9hdGluZ1VJKHRoaXMsIHRoaXMucmVmZXJlbmNlRWwsIHRoaXMuZmxvYXRpbmdFbCk7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWwpO1xuICAgIH07XG4gICAgdGhpcy5zZXRGbG9hdGluZ0VsID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmZsb2F0aW5nRWwgPSBlbDtcbiAgICAgIGNvbm5lY3RGbG9hdGluZ1VJKHRoaXMsIHRoaXMucmVmZXJlbmNlRWwsIHRoaXMuZmxvYXRpbmdFbCk7XG4gICAgfTtcbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWV2ZW50LmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKHRoaXMucmVmZXJlbmNlRWwpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgZGVmYXVsdFByZXZlbnRlZCwga2V5IH0gPSBldmVudDtcbiAgICAgIGlmIChkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgaWYgKGtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgIHRoaXMuY2xvc2VDYWxjaXRlRHJvcGRvd24oKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudC5zaGlmdEtleSAmJiBrZXkgPT09IFwiVGFiXCIpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlQ2FsY2l0ZURyb3Bkb3duKCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc0FjdGl2YXRpb25LZXkoa2V5KSkge1xuICAgICAgICB0aGlzLm9wZW5DYWxjaXRlRHJvcGRvd24oKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICB0aGlzLmNsb3NlQ2FsY2l0ZURyb3Bkb3duKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmZvY3VzT25GaXJzdEFjdGl2ZU9yRmlyc3RJdGVtID0gKCkgPT4ge1xuICAgICAgdGhpcy5nZXRGb2N1c2FibGVFbGVtZW50KHRoaXMuaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5zZWxlY3RlZCkgfHwgdGhpcy5pdGVtc1swXSk7XG4gICAgfTtcbiAgICB0aGlzLnRvZ2dsZU9wZW5FbmQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmZvY3VzT25GaXJzdEFjdGl2ZU9yRmlyc3RJdGVtKCk7XG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjYWxjaXRlRHJvcGRvd25PcGVuXCIsIHRoaXMudG9nZ2xlT3BlbkVuZCk7XG4gICAgfTtcbiAgICB0aGlzLm9wZW5DYWxjaXRlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjYWxjaXRlRHJvcGRvd25PcGVuXCIsIHRoaXMudG9nZ2xlT3BlbkVuZCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NlT25TZWxlY3REaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZsaXBQbGFjZW1lbnRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWF4SXRlbXMgPSAwO1xuICAgIHRoaXMub3ZlcmxheVBvc2l0aW9uaW5nID0gXCJhYnNvbHV0ZVwiO1xuICAgIHRoaXMucGxhY2VtZW50ID0gZGVmYXVsdE1lbnVQbGFjZW1lbnQ7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgdGhpcy50eXBlID0gXCJjbGlja1wiO1xuICAgIHRoaXMud2lkdGggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICB9XG4gIG9wZW5IYW5kbGVyKHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICAgICAgfVxuICAgICAgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICB9XG4gIGhhbmRsZURpc2FibGVkQ2hhbmdlKHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZsaXBQbGFjZW1lbnRzSGFuZGxlcigpIHtcbiAgICB0aGlzLnNldEZpbHRlcmVkUGxhY2VtZW50cygpO1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICBtYXhJdGVtc0hhbmRsZXIoKSB7XG4gICAgdGhpcy5zZXRNYXhTY3JvbGxlckhlaWdodCgpO1xuICB9XG4gIG92ZXJsYXlQb3NpdGlvbmluZ0hhbmRsZXIoKSB7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIHBsYWNlbWVudEhhbmRsZXIoKSB7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIGhhbmRsZVByb3BzQ2hhbmdlKCkge1xuICAgIHRoaXMudXBkYXRlSXRlbXMoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQncyBmaXJzdCBmb2N1c2FibGUgZWxlbWVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/Lm9ic2VydmUodGhpcy5lbCwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgdGhpcy5zZXRGaWx0ZXJlZFBsYWNlbWVudHMoKTtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgdGhpcy5vcGVuSGFuZGxlcih0aGlzLm9wZW4pO1xuICAgICAgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gICAgfVxuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RGbG9hdGluZ1VJKHRoaXMsIHRoaXMucmVmZXJlbmNlRWwsIHRoaXMuZmxvYXRpbmdFbCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb3BlbiwgZ3VpZCB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcImRpdlwiLCB7IGNsYXNzOiBcImNhbGNpdGUtdHJpZ2dlci1jb250YWluZXJcIiwgaWQ6IGAke2d1aWR9LW1lbnVidXR0b25gLCBvbkNsaWNrOiB0aGlzLm9wZW5DYWxjaXRlRHJvcGRvd24sIG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlcixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IHRoaXMuc2V0UmVmZXJlbmNlRWwgfSwgaChcInNsb3RcIiwgeyBcImFyaWEtY29udHJvbHNcIjogYCR7Z3VpZH0tbWVudWAsIFwiYXJpYS1leHBhbmRlZFwiOiB0b0FyaWFCb29sZWFuKG9wZW4pLCBcImFyaWEtaGFzcG9wdXBcIjogXCJtZW51XCIsIG5hbWU6IFNMT1RTLmRyb3Bkb3duVHJpZ2dlciwgb25TbG90Y2hhbmdlOiB0aGlzLnVwZGF0ZVRyaWdnZXJzIH0pKSwgaChcImRpdlwiLCB7IFwiYXJpYS1oaWRkZW5cIjogdG9BcmlhQm9vbGVhbighb3BlbiksIGNsYXNzOiBcImNhbGNpdGUtZHJvcGRvd24td3JhcHBlclwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zZXRGbG9hdGluZ0VsIH0sIGgoXCJkaXZcIiwgeyBcImFyaWEtbGFiZWxsZWRieVwiOiBgJHtndWlkfS1tZW51YnV0dG9uYCwgY2xhc3M6IHtcbiAgICAgICAgW1wiY2FsY2l0ZS1kcm9wZG93bi1jb250ZW50XCJdOiB0cnVlLFxuICAgICAgICBbRmxvYXRpbmdDU1MuYW5pbWF0aW9uXTogdHJ1ZSxcbiAgICAgICAgW0Zsb2F0aW5nQ1NTLmFuaW1hdGlvbkFjdGl2ZV06IG9wZW4sXG4gICAgICB9LCBpZDogYCR7Z3VpZH0tbWVudWAsIHJvbGU6IFwibWVudVwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zZXRTY3JvbGxlckFuZFRyYW5zaXRpb25FbCB9LCBoKFwic2xvdFwiLCB7IG9uU2xvdGNoYW5nZTogdGhpcy51cGRhdGVHcm91cHMgfSkpKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBkZWxheWVkXG4gICAqL1xuICBhc3luYyByZXBvc2l0aW9uKGRlbGF5ZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHsgZmxvYXRpbmdFbCwgcmVmZXJlbmNlRWwsIHBsYWNlbWVudCwgb3ZlcmxheVBvc2l0aW9uaW5nLCBmaWx0ZXJlZEZsaXBQbGFjZW1lbnRzIH0gPSB0aGlzO1xuICAgIHJldHVybiByZXBvc2l0aW9uKHRoaXMsIHtcbiAgICAgIGZsb2F0aW5nRWwsXG4gICAgICByZWZlcmVuY2VFbCxcbiAgICAgIG92ZXJsYXlQb3NpdGlvbmluZyxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIGZsaXBQbGFjZW1lbnRzOiBmaWx0ZXJlZEZsaXBQbGFjZW1lbnRzLFxuICAgICAgdHlwZTogXCJtZW51XCIsXG4gICAgfSwgZGVsYXllZCk7XG4gIH1cbiAgY2xvc2VDYWxjaXRlRHJvcGRvd25PbkNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHxcbiAgICAgICFpc1ByaW1hcnlQb2ludGVyQnV0dG9uKGV2ZW50KSB8fFxuICAgICAgIXRoaXMub3BlbiB8fFxuICAgICAgZXZlbnQuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXModGhpcy5lbCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jbG9zZUNhbGNpdGVEcm9wZG93bihmYWxzZSk7XG4gIH1cbiAgY2xvc2VDYWxjaXRlRHJvcGRvd25PbkV2ZW50KGV2ZW50KSB7XG4gICAgdGhpcy5jbG9zZUNhbGNpdGVEcm9wZG93bigpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIGNsb3NlQ2FsY2l0ZURyb3Bkb3duT25PcGVuRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXModGhpcy5lbCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gIH1cbiAgcG9pbnRlckVudGVySGFuZGxlcigpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnR5cGUgIT09IFwiaG92ZXJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9wZW5DYWxjaXRlRHJvcGRvd24oKTtcbiAgfVxuICBwb2ludGVyTGVhdmVIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMudHlwZSAhPT0gXCJob3ZlclwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2xvc2VDYWxjaXRlRHJvcGRvd24oKTtcbiAgfVxuICBjYWxjaXRlSW50ZXJuYWxEcm9wZG93bkl0ZW1LZXlFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsga2V5Ym9hcmRFdmVudCB9ID0gZXZlbnQuZGV0YWlsO1xuICAgIGNvbnN0IHRhcmdldCA9IGtleWJvYXJkRXZlbnQudGFyZ2V0O1xuICAgIHN3aXRjaCAoa2V5Ym9hcmRFdmVudC5rZXkpIHtcbiAgICAgIGNhc2UgXCJUYWJcIjpcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlVGFiSW5kZXhPZkl0ZW1zKHRhcmdldCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICBmb2N1c0VsZW1lbnRJbkdyb3VwKHRoaXMuaXRlbXMsIHRhcmdldCwgXCJuZXh0XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgIGZvY3VzRWxlbWVudEluR3JvdXAodGhpcy5pdGVtcywgdGFyZ2V0LCBcInByZXZpb3VzXCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICAgIGZvY3VzRWxlbWVudEluR3JvdXAodGhpcy5pdGVtcywgdGFyZ2V0LCBcImZpcnN0XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJFbmRcIjpcbiAgICAgICAgZm9jdXNFbGVtZW50SW5Hcm91cCh0aGlzLml0ZW1zLCB0YXJnZXQsIFwibGFzdFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIGhhbmRsZUl0ZW1TZWxlY3QoZXZlbnQpIHtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkSXRlbXMoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmNhbGNpdGVEcm9wZG93blNlbGVjdC5lbWl0KCk7XG4gICAgaWYgKCF0aGlzLmNsb3NlT25TZWxlY3REaXNhYmxlZCB8fFxuICAgICAgZXZlbnQuZGV0YWlsLnJlcXVlc3RlZERyb3Bkb3duR3JvdXAuc2VsZWN0aW9uTW9kZSA9PT0gXCJub25lXCIpIHtcbiAgICAgIHRoaXMuY2xvc2VDYWxjaXRlRHJvcGRvd24oKTtcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgb25CZWZvcmVPcGVuKCkge1xuICAgIHRoaXMuY2FsY2l0ZURyb3Bkb3duQmVmb3JlT3Blbi5lbWl0KCk7XG4gIH1cbiAgb25PcGVuKCkge1xuICAgIHRoaXMuY2FsY2l0ZURyb3Bkb3duT3Blbi5lbWl0KCk7XG4gIH1cbiAgb25CZWZvcmVDbG9zZSgpIHtcbiAgICB0aGlzLmNhbGNpdGVEcm9wZG93bkJlZm9yZUNsb3NlLmVtaXQoKTtcbiAgfVxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY2FsY2l0ZURyb3Bkb3duQ2xvc2UuZW1pdCgpO1xuICB9XG4gIHVwZGF0ZVNlbGVjdGVkSXRlbXMoKSB7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc2VsZWN0ZWQpO1xuICB9XG4gIGdldE1heFNjcm9sbGVySGVpZ2h0KCkge1xuICAgIGNvbnN0IHsgbWF4SXRlbXMsIGl0ZW1zIH0gPSB0aGlzO1xuICAgIGxldCBpdGVtc1RvUHJvY2VzcyA9IDA7XG4gICAgbGV0IG1heFNjcm9sbGVySGVpZ2h0ID0gMDtcbiAgICBsZXQgZ3JvdXBIZWFkZXJIZWlnaHQ7XG4gICAgdGhpcy5ncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgIGlmIChtYXhJdGVtcyA+IDAgJiYgaXRlbXNUb1Byb2Nlc3MgPCBtYXhJdGVtcykge1xuICAgICAgICBBcnJheS5mcm9tKGdyb3VwLmNoaWxkcmVuKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKGlzTmFOKGdyb3VwSGVhZGVySGVpZ2h0KSkge1xuICAgICAgICAgICAgICBncm91cEhlYWRlckhlaWdodCA9IGl0ZW0ub2Zmc2V0VG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF4U2Nyb2xsZXJIZWlnaHQgKz0gZ3JvdXBIZWFkZXJIZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpdGVtc1RvUHJvY2VzcyA8IG1heEl0ZW1zKSB7XG4gICAgICAgICAgICBtYXhTY3JvbGxlckhlaWdodCArPSBpdGVtLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGl0ZW1zVG9Qcm9jZXNzICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaXRlbXMubGVuZ3RoID4gbWF4SXRlbXMgPyBtYXhTY3JvbGxlckhlaWdodCA6IDA7XG4gIH1cbiAgY2xvc2VDYWxjaXRlRHJvcGRvd24oZm9jdXNUcmlnZ2VyID0gdHJ1ZSkge1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIGlmIChmb2N1c1RyaWdnZXIpIHtcbiAgICAgIGZvY3VzRWxlbWVudCh0aGlzLnRyaWdnZXJzWzBdKTtcbiAgICB9XG4gIH1cbiAgZ2V0Rm9jdXNhYmxlRWxlbWVudChpdGVtKSB7XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGl0ZW0uYXR0cmlidXRlcy5pc0xpbmtcbiAgICAgID8gaXRlbS5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpXG4gICAgICA6IGl0ZW07XG4gICAgZm9jdXNFbGVtZW50KHRhcmdldCk7XG4gIH1cbiAgdXBkYXRlVGFiSW5kZXhPZkl0ZW1zKHRhcmdldCkge1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS50YWJJbmRleCA9IHRhcmdldCAhPT0gaXRlbSA/IC0xIDogMDtcbiAgICB9KTtcbiAgfVxuICBzdGF0aWMgZ2V0IGRlbGVnYXRlc0ZvY3VzKCkgeyByZXR1cm4gdHJ1ZTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJvcGVuXCI6IFtcIm9wZW5IYW5kbGVyXCJdLFxuICAgIFwiZGlzYWJsZWRcIjogW1wiaGFuZGxlRGlzYWJsZWRDaGFuZ2VcIl0sXG4gICAgXCJmbGlwUGxhY2VtZW50c1wiOiBbXCJmbGlwUGxhY2VtZW50c0hhbmRsZXJcIl0sXG4gICAgXCJtYXhJdGVtc1wiOiBbXCJtYXhJdGVtc0hhbmRsZXJcIl0sXG4gICAgXCJvdmVybGF5UG9zaXRpb25pbmdcIjogW1wib3ZlcmxheVBvc2l0aW9uaW5nSGFuZGxlclwiXSxcbiAgICBcInBsYWNlbWVudFwiOiBbXCJwbGFjZW1lbnRIYW5kbGVyXCJdLFxuICAgIFwic2NhbGVcIjogW1wiaGFuZGxlUHJvcHNDaGFuZ2VcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gZHJvcGRvd25Dc3M7IH1cbn0sIFsxNywgXCJjYWxjaXRlLWRyb3Bkb3duXCIsIHtcbiAgICBcIm9wZW5cIjogWzE1NDBdLFxuICAgIFwiY2xvc2VPblNlbGVjdERpc2FibGVkXCI6IFs1MTYsIFwiY2xvc2Utb24tc2VsZWN0LWRpc2FibGVkXCJdLFxuICAgIFwiZGlzYWJsZWRcIjogWzUxNl0sXG4gICAgXCJmbGlwUGxhY2VtZW50c1wiOiBbMTZdLFxuICAgIFwibWF4SXRlbXNcIjogWzUxNCwgXCJtYXgtaXRlbXNcIl0sXG4gICAgXCJvdmVybGF5UG9zaXRpb25pbmdcIjogWzUxMywgXCJvdmVybGF5LXBvc2l0aW9uaW5nXCJdLFxuICAgIFwicGxhY2VtZW50XCI6IFs1MTNdLFxuICAgIFwic2VsZWN0ZWRJdGVtc1wiOiBbMTA0MF0sXG4gICAgXCJ0eXBlXCI6IFs1MTNdLFxuICAgIFwid2lkdGhcIjogWzUxM10sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF0sXG4gICAgXCJyZXBvc2l0aW9uXCI6IFs2NF1cbiAgfSwgW1s5LCBcInBvaW50ZXJkb3duXCIsIFwiY2xvc2VDYWxjaXRlRHJvcGRvd25PbkNsaWNrXCJdLCBbMCwgXCJjYWxjaXRlSW50ZXJuYWxEcm9wZG93bkNsb3NlUmVxdWVzdFwiLCBcImNsb3NlQ2FsY2l0ZURyb3Bkb3duT25FdmVudFwiXSwgWzgsIFwiY2FsY2l0ZURyb3Bkb3duT3BlblwiLCBcImNsb3NlQ2FsY2l0ZURyb3Bkb3duT25PcGVuRXZlbnRcIl0sIFsxLCBcInBvaW50ZXJlbnRlclwiLCBcInBvaW50ZXJFbnRlckhhbmRsZXJcIl0sIFsxLCBcInBvaW50ZXJsZWF2ZVwiLCBcInBvaW50ZXJMZWF2ZUhhbmRsZXJcIl0sIFswLCBcImNhbGNpdGVJbnRlcm5hbERyb3Bkb3duSXRlbUtleUV2ZW50XCIsIFwiY2FsY2l0ZUludGVybmFsRHJvcGRvd25JdGVtS2V5RXZlbnRcIl0sIFswLCBcImNhbGNpdGVJbnRlcm5hbERyb3Bkb3duSXRlbVNlbGVjdFwiLCBcImhhbmRsZUl0ZW1TZWxlY3RcIl1dXSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWRyb3Bkb3duXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWRyb3Bkb3duXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgRHJvcGRvd24pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IERyb3Bkb3duIGFzIEQsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9