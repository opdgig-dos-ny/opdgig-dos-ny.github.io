"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_action-menu_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/action-menu.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/action-menu.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ActionMenu),
/* harmony export */   S: () => (/* binding */ SLOTS),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./node_modules/@esri/calcite-components/dist/components/array.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _popover_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popover.js */ "./node_modules/@esri/calcite-components/dist/components/popover.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */











const CSS = {
  menu: "menu",
  defaultTrigger: "default-trigger",
};
const SLOTS = {
  tooltip: "tooltip",
  trigger: "trigger",
};
const ICONS = {
  menu: "ellipsis",
};
const activeAttr = "data-active";

const actionMenuCss = ":host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1);color:var(--calcite-ui-text-2)}.menu ::slotted(calcite-action){margin:0.125rem;display:flex;outline-color:transparent}.menu ::slotted(calcite-action[data-active]){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          );outline-offset:0px}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{flex-direction:column;flex-wrap:nowrap;outline:2px solid transparent;outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}";

const SUPPORTED_MENU_NAV_KEYS = ["ArrowUp", "ArrowDown", "End", "Home"];
const ActionMenu = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteActionMenuOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteActionMenuOpen", 6);
    this.actionElements = [];
    this.guid = `calcite-action-menu-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_2__.g)()}`;
    this.menuId = `${this.guid}-menu`;
    this.menuButtonId = `${this.guid}-menu-button`;
    // --------------------------------------------------------------------------
    //
    //  Component Methods
    //
    // --------------------------------------------------------------------------
    this.connectMenuButtonEl = () => {
      const { menuButtonId, menuId, open, label } = this;
      const menuButtonEl = this.slottedMenuButtonEl || this.defaultMenuButtonEl;
      if (this.menuButtonEl === menuButtonEl) {
        return;
      }
      this.disconnectMenuButtonEl();
      this.menuButtonEl = menuButtonEl;
      this.setTooltipReferenceElement();
      if (!menuButtonEl) {
        return;
      }
      menuButtonEl.active = open;
      menuButtonEl.setAttribute("aria-controls", menuId);
      menuButtonEl.setAttribute("aria-expanded", (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.t)(open));
      menuButtonEl.setAttribute("aria-haspopup", "true");
      if (!menuButtonEl.id) {
        menuButtonEl.id = menuButtonId;
      }
      if (!menuButtonEl.label) {
        menuButtonEl.label = label;
      }
      if (!menuButtonEl.text) {
        menuButtonEl.text = label;
      }
      menuButtonEl.addEventListener("pointerdown", this.menuButtonClick);
      menuButtonEl.addEventListener("keydown", this.menuButtonKeyDown);
    };
    this.disconnectMenuButtonEl = () => {
      const { menuButtonEl } = this;
      if (!menuButtonEl) {
        return;
      }
      menuButtonEl.removeEventListener("pointerdown", this.menuButtonClick);
      menuButtonEl.removeEventListener("keydown", this.menuButtonKeyDown);
    };
    this.setMenuButtonEl = (event) => {
      const actions = event.target
        .assignedElements({
        flatten: true,
      })
        .filter((el) => el?.matches("calcite-action"));
      this.slottedMenuButtonEl = actions[0];
      this.connectMenuButtonEl();
    };
    this.setDefaultMenuButtonEl = (el) => {
      this.defaultMenuButtonEl = el;
      this.connectMenuButtonEl();
    };
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleCalciteActionClick = () => {
      this.open = false;
      this.setFocus();
    };
    this.menuButtonClick = (event) => {
      if (!(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.j)(event)) {
        return;
      }
      this.toggleOpen();
    };
    this.updateTooltip = (event) => {
      const tooltips = event.target
        .assignedElements({
        flatten: true,
      })
        .filter((el) => el?.matches("calcite-tooltip"));
      this.tooltipEl = tooltips[0];
      this.setTooltipReferenceElement();
    };
    this.setTooltipReferenceElement = () => {
      const { tooltipEl, expanded, menuButtonEl, open } = this;
      if (tooltipEl) {
        tooltipEl.referenceElement = !expanded && !open ? menuButtonEl : null;
      }
    };
    this.updateAction = (action, index) => {
      const { guid, activeMenuItemIndex } = this;
      const id = `${guid}-action-${index}`;
      action.tabIndex = -1;
      action.setAttribute("role", "menuitem");
      if (!action.id) {
        action.id = id;
      }
      // data attribute is used to style the "activeMenuItemIndex" action using token focus styling.
      action.toggleAttribute(activeAttr, index === activeMenuItemIndex);
    };
    this.updateActions = (actions) => {
      actions?.forEach(this.updateAction);
    };
    this.handleDefaultSlotChange = (event) => {
      const actions = event.target
        .assignedElements({
        flatten: true,
      })
        .filter((el) => el?.matches("calcite-action"));
      this.actionElements = actions;
    };
    this.menuButtonKeyDown = (event) => {
      const { key } = event;
      const { actionElements, activeMenuItemIndex, open } = this;
      if (!actionElements.length) {
        return;
      }
      if ((0,_key_js__WEBPACK_IMPORTED_MODULE_3__.i)(key)) {
        event.preventDefault();
        if (!open) {
          this.toggleOpen();
          return;
        }
        const action = actionElements[activeMenuItemIndex];
        action ? action.click() : this.toggleOpen(false);
      }
      if (key === "Tab") {
        this.open = false;
        return;
      }
      if (key === "Escape") {
        this.toggleOpen(false);
        event.preventDefault();
        return;
      }
      this.handleActionNavigation(event, key, actionElements);
    };
    this.handleActionNavigation = (event, key, actions) => {
      if (!this.isValidKey(key, SUPPORTED_MENU_NAV_KEYS)) {
        return;
      }
      event.preventDefault();
      if (!this.open) {
        this.toggleOpen();
        if (key === "Home" || key === "ArrowDown") {
          this.activeMenuItemIndex = 0;
        }
        if (key === "End" || key === "ArrowUp") {
          this.activeMenuItemIndex = actions.length - 1;
        }
        return;
      }
      if (key === "Home") {
        this.activeMenuItemIndex = 0;
      }
      if (key === "End") {
        this.activeMenuItemIndex = actions.length - 1;
      }
      const currentIndex = this.activeMenuItemIndex;
      if (key === "ArrowUp") {
        this.activeMenuItemIndex = (0,_array_js__WEBPACK_IMPORTED_MODULE_0__.g)(Math.max(currentIndex - 1, -1), actions.length);
      }
      if (key === "ArrowDown") {
        this.activeMenuItemIndex = (0,_array_js__WEBPACK_IMPORTED_MODULE_0__.g)(currentIndex + 1, actions.length);
      }
    };
    this.toggleOpenEnd = () => {
      this.setFocus();
      this.el.removeEventListener("calcitePopoverOpen", this.toggleOpenEnd);
    };
    this.toggleOpen = (value = !this.open) => {
      this.el.addEventListener("calcitePopoverOpen", this.toggleOpenEnd);
      this.open = value;
    };
    this.appearance = "solid";
    this.expanded = false;
    this.flipPlacements = undefined;
    this.label = undefined;
    this.open = false;
    this.overlayPositioning = "absolute";
    this.placement = "auto";
    this.scale = undefined;
    this.menuButtonEl = undefined;
    this.activeMenuItemIndex = -1;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.a)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  disconnectedCallback() {
    this.disconnectMenuButtonEl();
  }
  expandedHandler() {
    this.open = false;
    this.setTooltipReferenceElement();
  }
  openHandler(open) {
    this.activeMenuItemIndex = this.open ? 0 : -1;
    if (this.menuButtonEl) {
      this.menuButtonEl.active = open;
    }
    this.calciteActionMenuOpen.emit();
    this.setTooltipReferenceElement();
  }
  closeCalciteActionMenuOnClick(event) {
    if (!(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.j)(event)) {
      return;
    }
    const composedPath = event.composedPath();
    if (composedPath.includes(this.el)) {
      return;
    }
    this.open = false;
  }
  activeMenuItemIndexHandler() {
    this.updateActions(this.actionElements);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    return (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.k)(this.menuButtonEl);
  }
  renderMenuButton() {
    const { appearance, label, scale, expanded } = this;
    const menuButtonSlot = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: SLOTS.trigger, onSlotchange: this.setMenuButtonEl }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-action", { appearance: appearance, class: CSS.defaultTrigger, icon: ICONS.menu, scale: scale, text: label, textEnabled: expanded,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setDefaultMenuButtonEl })));
    return menuButtonSlot;
  }
  renderMenuItems() {
    const { actionElements, activeMenuItemIndex, open, menuId, menuButtonEl, label, placement, overlayPositioning, flipPlacements, } = this;
    const activeAction = actionElements[activeMenuItemIndex];
    const activeDescendantId = activeAction?.id || null;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-popover", { flipPlacements: flipPlacements, focusTrapDisabled: true, label: label, offsetDistance: 0, open: open, overlayPositioning: overlayPositioning, placement: placement, pointerDisabled: true, referenceElement: menuButtonEl }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { "aria-activedescendant": activeDescendantId, "aria-labelledby": menuButtonEl?.id, class: CSS.menu, id: menuId, onClick: this.handleCalciteActionClick, role: "menu", tabIndex: -1 }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { onSlotchange: this.handleDefaultSlotChange }))));
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.Fragment, null, this.renderMenuButton(), this.renderMenuItems(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: SLOTS.tooltip, onSlotchange: this.updateTooltip })));
  }
  isValidKey(key, supportedKeys) {
    return !!supportedKeys.find((k) => k === key);
  }
  get el() { return this; }
  static get watchers() { return {
    "expanded": ["expandedHandler"],
    "open": ["openHandler"],
    "activeMenuItemIndex": ["activeMenuItemIndexHandler"]
  }; }
  static get style() { return actionMenuCss; }
}, [1, "calcite-action-menu", {
    "appearance": [513],
    "expanded": [516],
    "flipPlacements": [16],
    "label": [1],
    "open": [1540],
    "overlayPositioning": [513, "overlay-positioning"],
    "placement": [513],
    "scale": [513],
    "menuButtonEl": [32],
    "activeMenuItemIndex": [32],
    "setFocus": [64]
  }, [[9, "pointerdown", "closeCalciteActionMenuOnClick"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-action-menu", "calcite-action", "calcite-icon", "calcite-loader", "calcite-popover"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-action-menu":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionMenu);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        (0,_action_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
    case "calcite-popover":
      if (!customElements.get(tagName)) {
        (0,_popover_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/array.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/array.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getRoundRobinIndex)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
function getRoundRobinIndex(index, total) {
  return (index + total) % total;
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/loadable.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/loadable.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ setUpLoadableComponent),
/* harmony export */   b: () => (/* binding */ componentLoaded),
/* harmony export */   c: () => (/* binding */ componentFocusable),
/* harmony export */   s: () => (/* binding */ setComponentLoaded)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const resolveMap = new WeakMap();
const promiseMap = new WeakMap();
/**
 * This helper util sets up the component for the ability to know when the component has been loaded.
 *
 * This should be used in the `componentWillLoad` lifecycle hook.
 *
 * ```
 * componentWillLoad(): void {
 *   setUpLoadableComponent(this);
 * }
 * ```
 *
 * @param component
 */
function setUpLoadableComponent(component) {
  promiseMap.set(component, new Promise((resolve) => resolveMap.set(component, resolve)));
}
/**
 * This helper util lets the loadable component know that it is now loaded.
 *
 * This should be used in the `componentDidLoad` lifecycle hook.
 *
 * ```
 * componentDidLoad(): void {
 *   setComponentLoaded(this);
 * }
 * ```
 *
 * @param component
 */
function setComponentLoaded(component) {
  resolveMap.get(component)();
}
/**
 * This helper util can be used to ensure a component has been loaded (The "componentDidLoad" Stencil lifecycle method has been called).
 *
 * Requires requires `LoadableComponent` to be implemented.
 *
 * A component developer can await this method before proceeding with any logic that requires a component to be loaded first.
 *
 * ```
 * async myMethod(): Promise<void> {
 *   await componentLoaded(this);
 * }
 * ```
 *
 * @param component
 * @returns Promise<void>
 */
function componentLoaded(component) {
  return promiseMap.get(component);
}
/**
 * This helper util can be used to ensuring the component is loaded and rendered by the browser (The "componentDidLoad" Stencil lifecycle method has been called and any internal elements are focusable).
 *
 * Requires requires `LoadableComponent` to be implemented.
 *
 * A component developer can await this method before proceeding with any logic that requires a component to be loaded first and then an internal element be focused.
 *
 * ```
 * async setFocus(): Promise<void> {
 *   await componentFocusable(this);
 *   this.internalElement?.focus();
 * }
 * ```
 *
 * @param component
 * @returns Promise<void>
 */
async function componentFocusable(component) {
  await componentLoaded(component);
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.Build.isBrowser) {
    return;
  }
  (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.forceUpdate)(component);
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZmNjN2FiYWJmMTY0OWE3YWNhOWU1YzQ5YWY5NGZkYzYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUg7QUFDOUQ7QUFDeUM7QUFDeEQ7QUFDVTtBQUM4RDtBQUNyRDtBQUNGO0FBQ0U7QUFDQzs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixzQkFBc0IsYUFBYSxzQkFBc0IscUNBQXFDLCtCQUErQixnQ0FBZ0MsZ0JBQWdCLGFBQWEsMEJBQTBCLDZDQUE2Qyx5RUFBeUUsb1BBQW9QLG1CQUFtQixpQkFBaUIsa0JBQWtCLGdCQUFnQixjQUFjLG1CQUFtQixvRkFBb0Ysa0JBQWtCLGdCQUFnQixjQUFjLG1CQUFtQixNQUFNLHNCQUFzQixpQkFBaUIsOEJBQThCLG1CQUFtQixnQkFBZ0IsYUFBYSxTQUFTLGFBQWE7O0FBRTErQjtBQUNBLGlDQUFpQywwRkFBa0IsZUFBZSwrRUFBVztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxtRkFBVztBQUM1QztBQUNBLHVDQUF1QywyQ0FBSSxHQUFHO0FBQzlDLHFCQUFxQixVQUFVO0FBQy9CLDJCQUEyQixVQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsb0NBQW9DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCwwQ0FBYTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxlQUFlO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0RTs7QUFFNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBSztBQUNaO0FBQ0E7QUFDQSxFQUFFLG1GQUFXO0FBQ2I7QUFDQTs7QUFFK0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvYWN0aW9uLW1lbnUuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2FycmF5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9sb2FkYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgRnJhZ21lbnQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFJvdW5kUm9iaW5JbmRleCB9IGZyb20gJy4vYXJyYXkuanMnO1xuaW1wb3J0IHsgdCBhcyB0b0FyaWFCb29sZWFuLCBqIGFzIGlzUHJpbWFyeVBvaW50ZXJCdXR0b24sIGsgYXMgZm9jdXNFbGVtZW50IH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgZyBhcyBndWlkIH0gZnJvbSAnLi9ndWlkLmpzJztcbmltcG9ydCB7IGkgYXMgaXNBY3RpdmF0aW9uS2V5IH0gZnJvbSAnLi9rZXkuanMnO1xuaW1wb3J0IHsgYSBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBzIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRGb2N1c2FibGUgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0IH0gZnJvbSAnLi9hY3Rpb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDMgfSBmcm9tICcuL2ljb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL2xvYWRlci5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMSB9IGZyb20gJy4vcG9wb3Zlci5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgbWVudTogXCJtZW51XCIsXG4gIGRlZmF1bHRUcmlnZ2VyOiBcImRlZmF1bHQtdHJpZ2dlclwiLFxufTtcbmNvbnN0IFNMT1RTID0ge1xuICB0b29sdGlwOiBcInRvb2x0aXBcIixcbiAgdHJpZ2dlcjogXCJ0cmlnZ2VyXCIsXG59O1xuY29uc3QgSUNPTlMgPSB7XG4gIG1lbnU6IFwiZWxsaXBzaXNcIixcbn07XG5jb25zdCBhY3RpdmVBdHRyID0gXCJkYXRhLWFjdGl2ZVwiO1xuXG5jb25zdCBhY3Rpb25NZW51Q3NzID0gXCI6aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS5tZW51IDo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbil7bWFyZ2luOjAuMTI1cmVtO2Rpc3BsYXk6ZmxleDtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fS5tZW51IDo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbltkYXRhLWFjdGl2ZV0pe291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIDJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApO291dGxpbmUtb2Zmc2V0OjBweH0uZGVmYXVsdC10cmlnZ2Vye3Bvc2l0aW9uOnJlbGF0aXZlO2Jsb2NrLXNpemU6MTAwJTtmbGV4OjAgMSBhdXRvO2FsaWduLXNlbGY6c3RyZXRjaH1zbG90W25hbWU9dHJpZ2dlcl06OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24pLGNhbGNpdGUtYWN0aW9uOjpzbG90dGVkKFtzbG90PXRyaWdnZXJdKXtwb3NpdGlvbjpyZWxhdGl2ZTtibG9jay1zaXplOjEwMCU7ZmxleDowIDEgYXV0bzthbGlnbi1zZWxmOnN0cmV0Y2h9Lm1lbnV7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtd3JhcDpub3dyYXA7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4fTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBTVVBQT1JURURfTUVOVV9OQVZfS0VZUyA9IFtcIkFycm93VXBcIiwgXCJBcnJvd0Rvd25cIiwgXCJFbmRcIiwgXCJIb21lXCJdO1xuY29uc3QgQWN0aW9uTWVudSA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlQWN0aW9uTWVudU9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVBY3Rpb25NZW51T3BlblwiLCA2KTtcbiAgICB0aGlzLmFjdGlvbkVsZW1lbnRzID0gW107XG4gICAgdGhpcy5ndWlkID0gYGNhbGNpdGUtYWN0aW9uLW1lbnUtJHtndWlkKCl9YDtcbiAgICB0aGlzLm1lbnVJZCA9IGAke3RoaXMuZ3VpZH0tbWVudWA7XG4gICAgdGhpcy5tZW51QnV0dG9uSWQgPSBgJHt0aGlzLmd1aWR9LW1lbnUtYnV0dG9uYDtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIENvbXBvbmVudCBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuY29ubmVjdE1lbnVCdXR0b25FbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgbWVudUJ1dHRvbklkLCBtZW51SWQsIG9wZW4sIGxhYmVsIH0gPSB0aGlzO1xuICAgICAgY29uc3QgbWVudUJ1dHRvbkVsID0gdGhpcy5zbG90dGVkTWVudUJ1dHRvbkVsIHx8IHRoaXMuZGVmYXVsdE1lbnVCdXR0b25FbDtcbiAgICAgIGlmICh0aGlzLm1lbnVCdXR0b25FbCA9PT0gbWVudUJ1dHRvbkVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGlzY29ubmVjdE1lbnVCdXR0b25FbCgpO1xuICAgICAgdGhpcy5tZW51QnV0dG9uRWwgPSBtZW51QnV0dG9uRWw7XG4gICAgICB0aGlzLnNldFRvb2x0aXBSZWZlcmVuY2VFbGVtZW50KCk7XG4gICAgICBpZiAoIW1lbnVCdXR0b25FbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBtZW51QnV0dG9uRWwuYWN0aXZlID0gb3BlbjtcbiAgICAgIG1lbnVCdXR0b25FbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIsIG1lbnVJZCk7XG4gICAgICBtZW51QnV0dG9uRWwuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0b0FyaWFCb29sZWFuKG9wZW4pKTtcbiAgICAgIG1lbnVCdXR0b25FbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhhc3BvcHVwXCIsIFwidHJ1ZVwiKTtcbiAgICAgIGlmICghbWVudUJ1dHRvbkVsLmlkKSB7XG4gICAgICAgIG1lbnVCdXR0b25FbC5pZCA9IG1lbnVCdXR0b25JZDtcbiAgICAgIH1cbiAgICAgIGlmICghbWVudUJ1dHRvbkVsLmxhYmVsKSB7XG4gICAgICAgIG1lbnVCdXR0b25FbC5sYWJlbCA9IGxhYmVsO1xuICAgICAgfVxuICAgICAgaWYgKCFtZW51QnV0dG9uRWwudGV4dCkge1xuICAgICAgICBtZW51QnV0dG9uRWwudGV4dCA9IGxhYmVsO1xuICAgICAgfVxuICAgICAgbWVudUJ1dHRvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCB0aGlzLm1lbnVCdXR0b25DbGljayk7XG4gICAgICBtZW51QnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5tZW51QnV0dG9uS2V5RG93bik7XG4gICAgfTtcbiAgICB0aGlzLmRpc2Nvbm5lY3RNZW51QnV0dG9uRWwgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IG1lbnVCdXR0b25FbCB9ID0gdGhpcztcbiAgICAgIGlmICghbWVudUJ1dHRvbkVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG1lbnVCdXR0b25FbC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgdGhpcy5tZW51QnV0dG9uQ2xpY2spO1xuICAgICAgbWVudUJ1dHRvbkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMubWVudUJ1dHRvbktleURvd24pO1xuICAgIH07XG4gICAgdGhpcy5zZXRNZW51QnV0dG9uRWwgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSBldmVudC50YXJnZXRcbiAgICAgICAgLmFzc2lnbmVkRWxlbWVudHMoe1xuICAgICAgICBmbGF0dGVuOiB0cnVlLFxuICAgICAgfSlcbiAgICAgICAgLmZpbHRlcigoZWwpID0+IGVsPy5tYXRjaGVzKFwiY2FsY2l0ZS1hY3Rpb25cIikpO1xuICAgICAgdGhpcy5zbG90dGVkTWVudUJ1dHRvbkVsID0gYWN0aW9uc1swXTtcbiAgICAgIHRoaXMuY29ubmVjdE1lbnVCdXR0b25FbCgpO1xuICAgIH07XG4gICAgdGhpcy5zZXREZWZhdWx0TWVudUJ1dHRvbkVsID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmRlZmF1bHRNZW51QnV0dG9uRWwgPSBlbDtcbiAgICAgIHRoaXMuY29ubmVjdE1lbnVCdXR0b25FbCgpO1xuICAgIH07XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5oYW5kbGVDYWxjaXRlQWN0aW9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICB9O1xuICAgIHRoaXMubWVudUJ1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudG9nZ2xlT3BlbigpO1xuICAgIH07XG4gICAgdGhpcy51cGRhdGVUb29sdGlwID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0b29sdGlwcyA9IGV2ZW50LnRhcmdldFxuICAgICAgICAuYXNzaWduZWRFbGVtZW50cyh7XG4gICAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgICB9KVxuICAgICAgICAuZmlsdGVyKChlbCkgPT4gZWw/Lm1hdGNoZXMoXCJjYWxjaXRlLXRvb2x0aXBcIikpO1xuICAgICAgdGhpcy50b29sdGlwRWwgPSB0b29sdGlwc1swXTtcbiAgICAgIHRoaXMuc2V0VG9vbHRpcFJlZmVyZW5jZUVsZW1lbnQoKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0VG9vbHRpcFJlZmVyZW5jZUVsZW1lbnQgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IHRvb2x0aXBFbCwgZXhwYW5kZWQsIG1lbnVCdXR0b25FbCwgb3BlbiB9ID0gdGhpcztcbiAgICAgIGlmICh0b29sdGlwRWwpIHtcbiAgICAgICAgdG9vbHRpcEVsLnJlZmVyZW5jZUVsZW1lbnQgPSAhZXhwYW5kZWQgJiYgIW9wZW4gPyBtZW51QnV0dG9uRWwgOiBudWxsO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy51cGRhdGVBY3Rpb24gPSAoYWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgeyBndWlkLCBhY3RpdmVNZW51SXRlbUluZGV4IH0gPSB0aGlzO1xuICAgICAgY29uc3QgaWQgPSBgJHtndWlkfS1hY3Rpb24tJHtpbmRleH1gO1xuICAgICAgYWN0aW9uLnRhYkluZGV4ID0gLTE7XG4gICAgICBhY3Rpb24uc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcIm1lbnVpdGVtXCIpO1xuICAgICAgaWYgKCFhY3Rpb24uaWQpIHtcbiAgICAgICAgYWN0aW9uLmlkID0gaWQ7XG4gICAgICB9XG4gICAgICAvLyBkYXRhIGF0dHJpYnV0ZSBpcyB1c2VkIHRvIHN0eWxlIHRoZSBcImFjdGl2ZU1lbnVJdGVtSW5kZXhcIiBhY3Rpb24gdXNpbmcgdG9rZW4gZm9jdXMgc3R5bGluZy5cbiAgICAgIGFjdGlvbi50b2dnbGVBdHRyaWJ1dGUoYWN0aXZlQXR0ciwgaW5kZXggPT09IGFjdGl2ZU1lbnVJdGVtSW5kZXgpO1xuICAgIH07XG4gICAgdGhpcy51cGRhdGVBY3Rpb25zID0gKGFjdGlvbnMpID0+IHtcbiAgICAgIGFjdGlvbnM/LmZvckVhY2godGhpcy51cGRhdGVBY3Rpb24pO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVEZWZhdWx0U2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgYWN0aW9ucyA9IGV2ZW50LnRhcmdldFxuICAgICAgICAuYXNzaWduZWRFbGVtZW50cyh7XG4gICAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgICB9KVxuICAgICAgICAuZmlsdGVyKChlbCkgPT4gZWw/Lm1hdGNoZXMoXCJjYWxjaXRlLWFjdGlvblwiKSk7XG4gICAgICB0aGlzLmFjdGlvbkVsZW1lbnRzID0gYWN0aW9ucztcbiAgICB9O1xuICAgIHRoaXMubWVudUJ1dHRvbktleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcbiAgICAgIGNvbnN0IHsgYWN0aW9uRWxlbWVudHMsIGFjdGl2ZU1lbnVJdGVtSW5kZXgsIG9wZW4gfSA9IHRoaXM7XG4gICAgICBpZiAoIWFjdGlvbkVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaXNBY3RpdmF0aW9uS2V5KGtleSkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCFvcGVuKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVPcGVuKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGFjdGlvbkVsZW1lbnRzW2FjdGl2ZU1lbnVJdGVtSW5kZXhdO1xuICAgICAgICBhY3Rpb24gPyBhY3Rpb24uY2xpY2soKSA6IHRoaXMudG9nZ2xlT3BlbihmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSBcIlRhYlwiKSB7XG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlT3BlbihmYWxzZSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGFuZGxlQWN0aW9uTmF2aWdhdGlvbihldmVudCwga2V5LCBhY3Rpb25FbGVtZW50cyk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUFjdGlvbk5hdmlnYXRpb24gPSAoZXZlbnQsIGtleSwgYWN0aW9ucykgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzVmFsaWRLZXkoa2V5LCBTVVBQT1JURURfTUVOVV9OQVZfS0VZUykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlT3BlbigpO1xuICAgICAgICBpZiAoa2V5ID09PSBcIkhvbWVcIiB8fCBrZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZU1lbnVJdGVtSW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkgPT09IFwiRW5kXCIgfHwga2V5ID09PSBcIkFycm93VXBcIikge1xuICAgICAgICAgIHRoaXMuYWN0aXZlTWVudUl0ZW1JbmRleCA9IGFjdGlvbnMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSBcIkhvbWVcIikge1xuICAgICAgICB0aGlzLmFjdGl2ZU1lbnVJdGVtSW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gXCJFbmRcIikge1xuICAgICAgICB0aGlzLmFjdGl2ZU1lbnVJdGVtSW5kZXggPSBhY3Rpb25zLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmFjdGl2ZU1lbnVJdGVtSW5kZXg7XG4gICAgICBpZiAoa2V5ID09PSBcIkFycm93VXBcIikge1xuICAgICAgICB0aGlzLmFjdGl2ZU1lbnVJdGVtSW5kZXggPSBnZXRSb3VuZFJvYmluSW5kZXgoTWF0aC5tYXgoY3VycmVudEluZGV4IC0gMSwgLTEpLCBhY3Rpb25zLmxlbmd0aCk7XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTWVudUl0ZW1JbmRleCA9IGdldFJvdW5kUm9iaW5JbmRleChjdXJyZW50SW5kZXggKyAxLCBhY3Rpb25zLmxlbmd0aCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnRvZ2dsZU9wZW5FbmQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjYWxjaXRlUG9wb3Zlck9wZW5cIiwgdGhpcy50b2dnbGVPcGVuRW5kKTtcbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlT3BlbiA9ICh2YWx1ZSA9ICF0aGlzLm9wZW4pID0+IHtcbiAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNhbGNpdGVQb3BvdmVyT3BlblwiLCB0aGlzLnRvZ2dsZU9wZW5FbmQpO1xuICAgICAgdGhpcy5vcGVuID0gdmFsdWU7XG4gICAgfTtcbiAgICB0aGlzLmFwcGVhcmFuY2UgPSBcInNvbGlkXCI7XG4gICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMuZmxpcFBsYWNlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLm92ZXJsYXlQb3NpdGlvbmluZyA9IFwiYWJzb2x1dGVcIjtcbiAgICB0aGlzLnBsYWNlbWVudCA9IFwiYXV0b1wiO1xuICAgIHRoaXMuc2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZW51QnV0dG9uRWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hY3RpdmVNZW51SXRlbUluZGV4ID0gLTE7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuZGlzY29ubmVjdE1lbnVCdXR0b25FbCgpO1xuICB9XG4gIGV4cGFuZGVkSGFuZGxlcigpIHtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLnNldFRvb2x0aXBSZWZlcmVuY2VFbGVtZW50KCk7XG4gIH1cbiAgb3BlbkhhbmRsZXIob3Blbikge1xuICAgIHRoaXMuYWN0aXZlTWVudUl0ZW1JbmRleCA9IHRoaXMub3BlbiA/IDAgOiAtMTtcbiAgICBpZiAodGhpcy5tZW51QnV0dG9uRWwpIHtcbiAgICAgIHRoaXMubWVudUJ1dHRvbkVsLmFjdGl2ZSA9IG9wZW47XG4gICAgfVxuICAgIHRoaXMuY2FsY2l0ZUFjdGlvbk1lbnVPcGVuLmVtaXQoKTtcbiAgICB0aGlzLnNldFRvb2x0aXBSZWZlcmVuY2VFbGVtZW50KCk7XG4gIH1cbiAgY2xvc2VDYWxjaXRlQWN0aW9uTWVudU9uQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAoIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgIGlmIChjb21wb3NlZFBhdGguaW5jbHVkZXModGhpcy5lbCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gIH1cbiAgYWN0aXZlTWVudUl0ZW1JbmRleEhhbmRsZXIoKSB7XG4gICAgdGhpcy51cGRhdGVBY3Rpb25zKHRoaXMuYWN0aW9uRWxlbWVudHMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAgICByZXR1cm4gZm9jdXNFbGVtZW50KHRoaXMubWVudUJ1dHRvbkVsKTtcbiAgfVxuICByZW5kZXJNZW51QnV0dG9uKCkge1xuICAgIGNvbnN0IHsgYXBwZWFyYW5jZSwgbGFiZWwsIHNjYWxlLCBleHBhbmRlZCB9ID0gdGhpcztcbiAgICBjb25zdCBtZW51QnV0dG9uU2xvdCA9IChoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLnRyaWdnZXIsIG9uU2xvdGNoYW5nZTogdGhpcy5zZXRNZW51QnV0dG9uRWwgfSwgaChcImNhbGNpdGUtYWN0aW9uXCIsIHsgYXBwZWFyYW5jZTogYXBwZWFyYW5jZSwgY2xhc3M6IENTUy5kZWZhdWx0VHJpZ2dlciwgaWNvbjogSUNPTlMubWVudSwgc2NhbGU6IHNjYWxlLCB0ZXh0OiBsYWJlbCwgdGV4dEVuYWJsZWQ6IGV4cGFuZGVkLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zZXREZWZhdWx0TWVudUJ1dHRvbkVsIH0pKSk7XG4gICAgcmV0dXJuIG1lbnVCdXR0b25TbG90O1xuICB9XG4gIHJlbmRlck1lbnVJdGVtcygpIHtcbiAgICBjb25zdCB7IGFjdGlvbkVsZW1lbnRzLCBhY3RpdmVNZW51SXRlbUluZGV4LCBvcGVuLCBtZW51SWQsIG1lbnVCdXR0b25FbCwgbGFiZWwsIHBsYWNlbWVudCwgb3ZlcmxheVBvc2l0aW9uaW5nLCBmbGlwUGxhY2VtZW50cywgfSA9IHRoaXM7XG4gICAgY29uc3QgYWN0aXZlQWN0aW9uID0gYWN0aW9uRWxlbWVudHNbYWN0aXZlTWVudUl0ZW1JbmRleF07XG4gICAgY29uc3QgYWN0aXZlRGVzY2VuZGFudElkID0gYWN0aXZlQWN0aW9uPy5pZCB8fCBudWxsO1xuICAgIHJldHVybiAoaChcImNhbGNpdGUtcG9wb3ZlclwiLCB7IGZsaXBQbGFjZW1lbnRzOiBmbGlwUGxhY2VtZW50cywgZm9jdXNUcmFwRGlzYWJsZWQ6IHRydWUsIGxhYmVsOiBsYWJlbCwgb2Zmc2V0RGlzdGFuY2U6IDAsIG9wZW46IG9wZW4sIG92ZXJsYXlQb3NpdGlvbmluZzogb3ZlcmxheVBvc2l0aW9uaW5nLCBwbGFjZW1lbnQ6IHBsYWNlbWVudCwgcG9pbnRlckRpc2FibGVkOiB0cnVlLCByZWZlcmVuY2VFbGVtZW50OiBtZW51QnV0dG9uRWwgfSwgaChcImRpdlwiLCB7IFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCI6IGFjdGl2ZURlc2NlbmRhbnRJZCwgXCJhcmlhLWxhYmVsbGVkYnlcIjogbWVudUJ1dHRvbkVsPy5pZCwgY2xhc3M6IENTUy5tZW51LCBpZDogbWVudUlkLCBvbkNsaWNrOiB0aGlzLmhhbmRsZUNhbGNpdGVBY3Rpb25DbGljaywgcm9sZTogXCJtZW51XCIsIHRhYkluZGV4OiAtMSB9LCBoKFwic2xvdFwiLCB7IG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVEZWZhdWx0U2xvdENoYW5nZSB9KSkpKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEZyYWdtZW50LCBudWxsLCB0aGlzLnJlbmRlck1lbnVCdXR0b24oKSwgdGhpcy5yZW5kZXJNZW51SXRlbXMoKSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy50b29sdGlwLCBvblNsb3RjaGFuZ2U6IHRoaXMudXBkYXRlVG9vbHRpcCB9KSkpO1xuICB9XG4gIGlzVmFsaWRLZXkoa2V5LCBzdXBwb3J0ZWRLZXlzKSB7XG4gICAgcmV0dXJuICEhc3VwcG9ydGVkS2V5cy5maW5kKChrKSA9PiBrID09PSBrZXkpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImV4cGFuZGVkXCI6IFtcImV4cGFuZGVkSGFuZGxlclwiXSxcbiAgICBcIm9wZW5cIjogW1wib3BlbkhhbmRsZXJcIl0sXG4gICAgXCJhY3RpdmVNZW51SXRlbUluZGV4XCI6IFtcImFjdGl2ZU1lbnVJdGVtSW5kZXhIYW5kbGVyXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIGFjdGlvbk1lbnVDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtYWN0aW9uLW1lbnVcIiwge1xuICAgIFwiYXBwZWFyYW5jZVwiOiBbNTEzXSxcbiAgICBcImV4cGFuZGVkXCI6IFs1MTZdLFxuICAgIFwiZmxpcFBsYWNlbWVudHNcIjogWzE2XSxcbiAgICBcImxhYmVsXCI6IFsxXSxcbiAgICBcIm9wZW5cIjogWzE1NDBdLFxuICAgIFwib3ZlcmxheVBvc2l0aW9uaW5nXCI6IFs1MTMsIFwib3ZlcmxheS1wb3NpdGlvbmluZ1wiXSxcbiAgICBcInBsYWNlbWVudFwiOiBbNTEzXSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwibWVudUJ1dHRvbkVsXCI6IFszMl0sXG4gICAgXCJhY3RpdmVNZW51SXRlbUluZGV4XCI6IFszMl0sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdXG4gIH0sIFtbOSwgXCJwb2ludGVyZG93blwiLCBcImNsb3NlQ2FsY2l0ZUFjdGlvbk1lbnVPbkNsaWNrXCJdXV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1hY3Rpb24tbWVudVwiLCBcImNhbGNpdGUtYWN0aW9uXCIsIFwiY2FsY2l0ZS1pY29uXCIsIFwiY2FsY2l0ZS1sb2FkZXJcIiwgXCJjYWxjaXRlLXBvcG92ZXJcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtYWN0aW9uLW1lbnVcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBBY3Rpb25NZW51KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWFjdGlvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDMoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWxvYWRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1wb3BvdmVyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBBY3Rpb25NZW51IGFzIEEsIFNMT1RTIGFzIFMsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuZnVuY3Rpb24gZ2V0Um91bmRSb2JpbkluZGV4KGluZGV4LCB0b3RhbCkge1xuICByZXR1cm4gKGluZGV4ICsgdG90YWwpICUgdG90YWw7XG59XG5cbmV4cG9ydCB7IGdldFJvdW5kUm9iaW5JbmRleCBhcyBnIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBCdWlsZCwgZm9yY2VVcGRhdGUgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5cbmNvbnN0IHJlc29sdmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcHJvbWlzZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgc2V0cyB1cCB0aGUgY29tcG9uZW50IGZvciB0aGUgYWJpbGl0eSB0byBrbm93IHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudFdpbGxMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudFdpbGxMb2FkKCk6IHZvaWQge1xuICogICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRVcExvYWRhYmxlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICBwcm9taXNlTWFwLnNldChjb21wb25lbnQsIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlTWFwLnNldChjb21wb25lbnQsIHJlc29sdmUpKSk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgbGV0cyB0aGUgbG9hZGFibGUgY29tcG9uZW50IGtub3cgdGhhdCBpdCBpcyBub3cgbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudERpZExvYWQoKTogdm9pZCB7XG4gKiAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0Q29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXNvbHZlTWFwLmdldChjb21wb25lbnQpKCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgY2FuIGJlIHVzZWQgdG8gZW5zdXJlIGEgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZCAoVGhlIFwiY29tcG9uZW50RGlkTG9hZFwiIFN0ZW5jaWwgbGlmZWN5Y2xlIG1ldGhvZCBoYXMgYmVlbiBjYWxsZWQpLlxuICpcbiAqIFJlcXVpcmVzIHJlcXVpcmVzIGBMb2FkYWJsZUNvbXBvbmVudGAgdG8gYmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQSBjb21wb25lbnQgZGV2ZWxvcGVyIGNhbiBhd2FpdCB0aGlzIG1ldGhvZCBiZWZvcmUgcHJvY2VlZGluZyB3aXRoIGFueSBsb2dpYyB0aGF0IHJlcXVpcmVzIGEgY29tcG9uZW50IHRvIGJlIGxvYWRlZCBmaXJzdC5cbiAqXG4gKiBgYGBcbiAqIGFzeW5jIG15TWV0aG9kKCk6IFByb21pc2U8dm9pZD4ge1xuICogICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gKi9cbmZ1bmN0aW9uIGNvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmV0dXJuIHByb21pc2VNYXAuZ2V0KGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgY2FuIGJlIHVzZWQgdG8gZW5zdXJpbmcgdGhlIGNvbXBvbmVudCBpcyBsb2FkZWQgYW5kIHJlbmRlcmVkIGJ5IHRoZSBicm93c2VyIChUaGUgXCJjb21wb25lbnREaWRMb2FkXCIgU3RlbmNpbCBsaWZlY3ljbGUgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCBhbmQgYW55IGludGVybmFsIGVsZW1lbnRzIGFyZSBmb2N1c2FibGUpLlxuICpcbiAqIFJlcXVpcmVzIHJlcXVpcmVzIGBMb2FkYWJsZUNvbXBvbmVudGAgdG8gYmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQSBjb21wb25lbnQgZGV2ZWxvcGVyIGNhbiBhd2FpdCB0aGlzIG1ldGhvZCBiZWZvcmUgcHJvY2VlZGluZyB3aXRoIGFueSBsb2dpYyB0aGF0IHJlcXVpcmVzIGEgY29tcG9uZW50IHRvIGJlIGxvYWRlZCBmaXJzdCBhbmQgdGhlbiBhbiBpbnRlcm5hbCBlbGVtZW50IGJlIGZvY3VzZWQuXG4gKlxuICogYGBgXG4gKiBhc3luYyBzZXRGb2N1cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAqICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICogICB0aGlzLmludGVybmFsRWxlbWVudD8uZm9jdXMoKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY29tcG9uZW50Rm9jdXNhYmxlKGNvbXBvbmVudCkge1xuICBhd2FpdCBjb21wb25lbnRMb2FkZWQoY29tcG9uZW50KTtcbiAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZm9yY2VVcGRhdGUoY29tcG9uZW50KTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcmVzb2x2ZSgpKSk7XG59XG5cbmV4cG9ydCB7IHNldFVwTG9hZGFibGVDb21wb25lbnQgYXMgYSwgY29tcG9uZW50TG9hZGVkIGFzIGIsIGNvbXBvbmVudEZvY3VzYWJsZSBhcyBjLCBzZXRDb21wb25lbnRMb2FkZWQgYXMgcyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9