"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-menu-item_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-menu-item.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-menu-item.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteMenuItem: () => (/* binding */ CalciteMenuItem),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu.js */ "./node_modules/@esri/calcite-components/dist/components/menu.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */










const CSS = {
  container: "container",
  content: "content",
  dropdownVertical: "dropdown--vertical",
  dropdownMenuItems: "dropdown-menu-items",
  dropdownAction: "dropdown-action",
  layoutVertical: "layout--vertical",
  hoverHrefIcon: "hover-href-icon",
  icon: "icon",
  iconBreadcrumb: "icon--breadcrumb",
  iconDropdown: "icon--dropdown",
  iconEnd: "icon--end",
  iconStart: "icon--start",
  isParentVertical: "parent--vertical",
  itemContent: "item-content",
  open: "open",
  nested: "nested",
  textContainer: "text-container",
};

const menuItemCss = ":host{position:relative;box-sizing:border-box;display:flex;align-items:center;flex-shrink:0}:host .container,:host .item-content,:host .content{min-block-size:3rem}:host([layout=vertical]){inline-size:100%}:host(:not([layout=vertical])){block-size:100%}.container,.item-content{display:flex;block-size:100%;inline-size:100%;flex-direction:row;align-items:stretch}.content{position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);padding-inline:1rem;font-size:var(--calcite-font-size-0);color:var(--calcite-ui-text-2);outline:2px solid transparent;outline-offset:2px;text-decoration:none;border-block-end:0.125rem solid transparent;padding-block-start:0.125rem}.content:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-2)}.content:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-2);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.content:active{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.content span{display:inline-flex}.content.layout--vertical{display:flex;inline-size:100%;justify-content:flex-start;padding-block:1rem;border-block-end:0;border-inline-end:0.25rem solid transparent}:host([active]) .content{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-brand)}:host([active]) .content .icon{--calcite-ui-icon-color:var(--calcite-ui-brand)}:host([layout=vertical]) .content{padding-inline:0.75rem}.icon--start{margin-inline-end:0.75rem}.icon--end{margin-inline-start:0.75rem}:host([layout=vertical]) .icon--end{margin-inline-start:auto;padding-inline-start:0.75rem}.icon--dropdown{position:relative;margin-inline-start:auto;margin-inline-end:0px;padding-inline-start:0.5rem;--calcite-ui-icon-color:var(--calcite-ui-text-3)}:host([layout=vertical]) .icon--end~.icon--dropdown{margin-inline-start:0.75rem}:host([layout=vertical]) .hover-href-icon{padding-inline-start:0.5rem}:host([layout=vertical]) .hover-href-icon~.icon--end{margin-inline-start:0.5rem}:host([layout=vertical]) .hover-href-icon~.icon--breadcrumb{margin-inline-start:0.75rem}.icon--breadcrumb{margin-inline-end:0px;padding-inline-start:0.5rem;--calcite-ui-icon-color:var(--calcite-ui-text-3)}:host([layout=vertical]) .icon--breadcrumb{margin-inline-start:auto}:host([layout=vertical]) .icon--breadcrumb~.icon--dropdown{margin-inline-start:0.5rem}:host([layout=vertical]) .icon--end~.icon--breadcrumb{margin-inline-start:0.5rem}:host([breadcrumb]) .content{padding-inline-end:0.75rem}calcite-action{position:relative;block-size:auto;border-inline-start:1px solid var(--calcite-ui-foreground-1)}calcite-action:after{position:absolute;inset-inline-start:-1px;display:block;inline-size:1px;content:\"\";inset-block:0.75rem;background-color:var(--calcite-ui-border-3)}calcite-action:hover:after{block-size:100%;inset-block:0}.content:focus~calcite-action,.content:hover~calcite-action{color:var(--calcite-ui-text-1);border-inline-start:1px solid var(--calcite-ui-border-3)}.container:hover .dropdown-action{background-color:var(--calcite-ui-foreground-2)}.dropdown-menu-items{position:absolute;display:none;block-size:auto;min-inline-size:100%;flex-direction:column;overflow:visible;border:1px solid var(--calcite-ui-border-3);background:var(--calcite-ui-foreground-1);inset-block-start:100%;z-index:var(--calcite-app-z-index-dropdown)}.dropdown-menu-items.open{display:block}.dropdown-menu-items.nested{position:absolute;inset-block-start:-1px;transform:translateX(calc(100% - 2px))}.parent--vertical{flex-direction:column}.dropdown--vertical.dropdown-menu-items{position:relative;border-radius:0px;box-shadow:none;inset-block-start:0;transform:none}.dropdown--vertical.dropdown-menu-items:last-of-type{border-inline:0}:host([layout=vertical]:last-of-type) .dropdown-menu-items{border-block-end:0}:host([slot=submenu-item]) .parent--vertical{padding-inline-start:1.5rem}.dropdown-menu-items.nested.calcite--rtl{transform:translateX(calc(-100% + 2px))}.dropdown--vertical.dropdown-menu-items.nested.calcite--rtl{transform:none}.hover-href-icon{position:relative;inset-inline-end:0.25rem;margin-inline-start:auto;opacity:0;transition:all var(--calcite-internal-animation-timing-medium) ease-in-out}.content:focus .hover-href-icon,.content:hover .hover-href-icon{inset-inline-end:-0.25rem;opacity:1}:host([hidden]){display:none}[hidden]{display:none}";

const CalciteMenuItem$1 = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalMenuItemKeyEvent = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteInternalMenuItemKeyEvent", 7);
    this.calciteMenuItemSelect = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteMenuItemSelect", 7);
    this.clickHandler = (event) => {
      if ((this.href && event.target === this.dropdownActionEl) || (!this.href && this.hasSubmenu)) {
        this.open = !this.open;
      }
      this.selectMenuItem(event);
    };
    this.handleMenuItemSlotChange = (event) => {
      this.submenuItems = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.s)(event);
      this.submenuItems.forEach((item) => {
        if (!item.topLevelMenuLayout) {
          item.topLevelMenuLayout = this.topLevelMenuLayout;
        }
      });
      this.hasSubmenu = this.submenuItems.length > 0;
    };
    this.keyDownHandler = async (event) => {
      // opening and closing of submenu is handled here. Any other functionality is bubbled to parent menu.
      if (event.key === " " || event.key === "Enter") {
        this.selectMenuItem(event);
        if (this.hasSubmenu &&
          (!this.href || (this.href && event.target === this.dropdownActionEl))) {
          this.open = !this.open;
        }
        event.preventDefault();
      }
      else if (event.key === "Escape") {
        if (this.open) {
          this.open = false;
          return;
        }
        this.calciteInternalMenuItemKeyEvent.emit({ event });
        event.preventDefault();
      }
      else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        if ((event.target === this.dropdownActionEl || !this.href) &&
          this.hasSubmenu &&
          !this.open &&
          this.layout === "horizontal") {
          this.open = true;
          return;
        }
        this.calciteInternalMenuItemKeyEvent.emit({
          event,
          children: this.submenuItems,
          isSubmenuOpen: this.open && this.hasSubmenu,
        });
      }
      else if (event.key === "ArrowLeft") {
        event.preventDefault();
        this.calciteInternalMenuItemKeyEvent.emit({
          event,
          children: this.submenuItems,
          isSubmenuOpen: true,
        });
      }
      else if (event.key === "ArrowRight") {
        event.preventDefault();
        if ((event.target === this.dropdownActionEl || !this.href) &&
          this.hasSubmenu &&
          !this.open &&
          this.layout === "vertical") {
          this.open = true;
          return;
        }
        this.calciteInternalMenuItemKeyEvent.emit({
          event,
          children: this.submenuItems,
          isSubmenuOpen: this.open && this.hasSubmenu,
        });
      }
    };
    this.active = undefined;
    this.breadcrumb = undefined;
    this.href = undefined;
    this.iconEnd = undefined;
    this.iconFlipRtl = undefined;
    this.iconStart = undefined;
    this.isTopLevelItem = false;
    this.label = undefined;
    this.layout = undefined;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.open = false;
    this.rel = undefined;
    this.target = undefined;
    this.text = undefined;
    this.topLevelMenuLayout = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.hasSubmenu = false;
    this.submenuItems = undefined;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_2__.u)(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    this.anchorEl.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  handleClickOut(event) {
    if (this.topLevelMenuLayout !== "vertical" &&
      this.hasSubmenu &&
      this.open &&
      !event.composedPath().includes(this.el)) {
      this.open = false;
    }
  }
  handleFocusOut(event) {
    if (this.topLevelMenuLayout !== "vertical" &&
      !this.el.contains(event.relatedTarget)) {
      this.open = false;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.s)(this);
  }
  disconnectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  blurHandler() {
    this.isFocused = false;
  }
  focusHandler(event) {
    const target = event.target;
    this.isFocused = true;
    if (target.open && !this.open) {
      target.open = false;
    }
  }
  selectMenuItem(event) {
    if (event.target !== this.dropdownActionEl) {
      this.calciteMenuItemSelect.emit();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderIconStart() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-icon", { class: `${CSS.icon} ${CSS.iconStart}`, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, key: CSS.iconStart, scale: "s" }));
  }
  renderIconEnd() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-icon", { class: `${CSS.icon} ${CSS.iconEnd}`, flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, key: CSS.iconEnd, scale: "s" }));
  }
  renderBreadcrumbIcon(dir) {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-icon", { class: `${CSS.icon} ${CSS.iconBreadcrumb}`, icon: dir === "rtl" ? "chevron-left" : "chevron-right", key: CSS.iconBreadcrumb, scale: "s" }));
  }
  renderDropdownIcon(dir) {
    const dirChevron = dir === "rtl" ? "chevron-left" : "chevron-right";
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-icon", { class: `${CSS.icon} ${CSS.iconDropdown}`, icon: this.topLevelMenuLayout === "vertical" || this.isTopLevelItem
        ? this.open
          ? "chevron-up"
          : "chevron-down"
        : dirChevron, key: CSS.iconDropdown, scale: "s" }));
  }
  renderDropdownAction(dir) {
    const dirChevron = dir === "rtl" ? "chevron-left" : "chevron-right";
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-action", { class: CSS.dropdownAction, icon: this.topLevelMenuLayout === "vertical" || this.isTopLevelItem
        ? this.open
          ? "chevron-up"
          : "chevron-down"
        : dirChevron, key: CSS.dropdownAction, onClick: this.clickHandler, onKeyDown: this.keyDownHandler, text: this.messages.open,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.dropdownActionEl = el) }));
  }
  renderSubmenuItems(dir) {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-menu", { class: {
        [CSS.dropdownMenuItems]: true,
        [CSS.open]: this.open,
        [CSS.nested]: !this.isTopLevelItem,
        [_dom_js__WEBPACK_IMPORTED_MODULE_0__.C.rtl]: dir === "rtl",
        [CSS.dropdownVertical]: this.topLevelMenuLayout === "vertical",
      }, label: this.messages.submenu, layout: "vertical", role: "menu" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot", { name: "submenu-item", onSlotchange: this.handleMenuItemSlotChange })));
  }
  renderHrefIcon(dir) {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-icon", { class: CSS.hoverHrefIcon, icon: dir === "rtl" ? "arrow-left" : "arrow-right", key: CSS.hoverHrefIcon, scale: "s" }));
  }
  renderItemContent(dir) {
    const hasHref = this.href && (this.topLevelMenuLayout === "vertical" || !this.isTopLevelItem);
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, this.iconStart && this.renderIconStart(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("div", { class: CSS.textContainer }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("span", null, this.text)), hasHref && this.renderHrefIcon(dir), this.iconEnd && this.renderIconEnd(), this.breadcrumb ? this.renderBreadcrumbIcon(dir) : null, !this.href && this.hasSubmenu ? this.renderDropdownIcon(dir) : null));
  }
  render() {
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(this.el);
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.Host, { onBlur: this.blurHandler, onFocus: this.focusHandler }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("li", { class: {
        [CSS.container]: true,
        [CSS.isParentVertical]: this.topLevelMenuLayout === "vertical",
      }, role: "none" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("div", { class: CSS.itemContent }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("a", { "aria-current": this.isFocused ? "page" : false, "aria-expanded": this.open, "aria-haspopup": this.hasSubmenu, "aria-label": this.label, class: { [CSS.layoutVertical]: this.layout === "vertical", [CSS.content]: true }, href: this.href, onClick: this.clickHandler, onKeyDown: this.keyDownHandler, rel: this.rel, role: "menuitem", tabIndex: this.isTopLevelItem ? 0 : -1, target: this.target,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.anchorEl = el) }, this.renderItemContent(dir)), this.href && this.hasSubmenu ? this.renderDropdownAction(dir) : null), this.renderSubmenuItems(dir))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return menuItemCss; }
}, [1, "calcite-menu-item", {
    "active": [516],
    "breadcrumb": [516],
    "href": [1],
    "iconEnd": [513, "icon-end"],
    "iconFlipRtl": [513, "icon-flip-rtl"],
    "iconStart": [513, "icon-start"],
    "isTopLevelItem": [4, "is-top-level-item"],
    "label": [1],
    "layout": [513],
    "messageOverrides": [1040],
    "messages": [1040],
    "open": [1540],
    "rel": [513],
    "target": [513],
    "text": [1],
    "topLevelMenuLayout": [1, "top-level-menu-layout"],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "hasSubmenu": [32],
    "submenuItems": [32],
    "setFocus": [64]
  }, [[8, "click", "handleClickOut"], [0, "focusout", "handleFocusOut"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-menu-item", "calcite-action", "calcite-icon", "calcite-loader", "calcite-menu"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-menu-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CalciteMenuItem$1);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        (0,_action_js__WEBPACK_IMPORTED_MODULE_4__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
    case "calcite-menu":
      if (!customElements.get(tagName)) {
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteMenuItem = CalciteMenuItem$1;
const defineCustomElement = defineCustomElement$1;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMzkwMjVjZWYxNmU2MTVhOGJkMTFkZmIxYWExOTU2OTQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lIO0FBQ3JCO0FBQ1U7QUFDSTtBQUNwQztBQUNyQjtBQUNGO0FBQ0U7QUFDRjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGtCQUFrQixzQkFBc0IsYUFBYSxtQkFBbUIsY0FBYyxvREFBb0Qsb0JBQW9CLHlCQUF5QixpQkFBaUIsK0JBQStCLGdCQUFnQix5QkFBeUIsYUFBYSxnQkFBZ0IsaUJBQWlCLG1CQUFtQixvQkFBb0IsU0FBUyxrQkFBa0Isc0JBQXNCLGFBQWEsZ0JBQWdCLGlCQUFpQixlQUFlLG1CQUFtQix1QkFBdUIsZ0RBQWdELG9CQUFvQixxQ0FBcUMsK0JBQStCLDhCQUE4QixtQkFBbUIscUJBQXFCLDRDQUE0Qyw2QkFBNkIsZUFBZSxnREFBZ0QsK0JBQStCLGVBQWUsZ0RBQWdELCtCQUErQix5RUFBeUUscVBBQXFQLGdCQUFnQixnREFBZ0QsK0JBQStCLGNBQWMsb0JBQW9CLDBCQUEwQixhQUFhLGlCQUFpQiwyQkFBMkIsbUJBQW1CLG1CQUFtQiw0Q0FBNEMseUJBQXlCLCtCQUErQixxQ0FBcUMsK0JBQStCLGdEQUFnRCxrQ0FBa0MsdUJBQXVCLGFBQWEsMEJBQTBCLFdBQVcsNEJBQTRCLG9DQUFvQyx5QkFBeUIsNkJBQTZCLGdCQUFnQixrQkFBa0IseUJBQXlCLHNCQUFzQiw0QkFBNEIsaURBQWlELG9EQUFvRCw0QkFBNEIsMENBQTBDLDRCQUE0QixxREFBcUQsMkJBQTJCLDREQUE0RCw0QkFBNEIsa0JBQWtCLHNCQUFzQiw0QkFBNEIsaURBQWlELDJDQUEyQyx5QkFBeUIsMkRBQTJELDJC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QTtBQUNBO0FBQ0EsUUFBUSw2Q0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJDQUFxQjtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS1tZW51LWl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGgsIEZyYWdtZW50LCBIb3N0IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgcyBhcyBzbG90Q2hhbmdlR2V0QXNzaWduZWRFbGVtZW50cywgQyBhcyBDU1NfVVRJTElUWSwgYiBhcyBnZXRFbGVtZW50RGlyIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYyBhcyBjb21wb25lbnRGb2N1c2FibGUsIGEgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgcyBhcyBzZXRDb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlTWVzc2FnZXMsIGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzIH0gZnJvbSAnLi90OW4uanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNSB9IGZyb20gJy4vYWN0aW9uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0IH0gZnJvbSAnLi9pY29uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQzIH0gZnJvbSAnLi9sb2FkZXIuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL21lbnUuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgY29udGVudDogXCJjb250ZW50XCIsXG4gIGRyb3Bkb3duVmVydGljYWw6IFwiZHJvcGRvd24tLXZlcnRpY2FsXCIsXG4gIGRyb3Bkb3duTWVudUl0ZW1zOiBcImRyb3Bkb3duLW1lbnUtaXRlbXNcIixcbiAgZHJvcGRvd25BY3Rpb246IFwiZHJvcGRvd24tYWN0aW9uXCIsXG4gIGxheW91dFZlcnRpY2FsOiBcImxheW91dC0tdmVydGljYWxcIixcbiAgaG92ZXJIcmVmSWNvbjogXCJob3Zlci1ocmVmLWljb25cIixcbiAgaWNvbjogXCJpY29uXCIsXG4gIGljb25CcmVhZGNydW1iOiBcImljb24tLWJyZWFkY3J1bWJcIixcbiAgaWNvbkRyb3Bkb3duOiBcImljb24tLWRyb3Bkb3duXCIsXG4gIGljb25FbmQ6IFwiaWNvbi0tZW5kXCIsXG4gIGljb25TdGFydDogXCJpY29uLS1zdGFydFwiLFxuICBpc1BhcmVudFZlcnRpY2FsOiBcInBhcmVudC0tdmVydGljYWxcIixcbiAgaXRlbUNvbnRlbnQ6IFwiaXRlbS1jb250ZW50XCIsXG4gIG9wZW46IFwib3BlblwiLFxuICBuZXN0ZWQ6IFwibmVzdGVkXCIsXG4gIHRleHRDb250YWluZXI6IFwidGV4dC1jb250YWluZXJcIixcbn07XG5cbmNvbnN0IG1lbnVJdGVtQ3NzID0gXCI6aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtmbGV4LXNocmluazowfTpob3N0IC5jb250YWluZXIsOmhvc3QgLml0ZW0tY29udGVudCw6aG9zdCAuY29udGVudHttaW4tYmxvY2stc2l6ZTozcmVtfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdKXtpbmxpbmUtc2l6ZToxMDAlfTpob3N0KDpub3QoW2xheW91dD12ZXJ0aWNhbF0pKXtibG9jay1zaXplOjEwMCV9LmNvbnRhaW5lciwuaXRlbS1jb250ZW50e2Rpc3BsYXk6ZmxleDtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6c3RyZXRjaH0uY29udGVudHtwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO3BhZGRpbmctaW5saW5lOjFyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTtvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHg7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Ym9yZGVyLWJsb2NrLWVuZDowLjEyNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtwYWRkaW5nLWJsb2NrLXN0YXJ0OjAuMTI1cmVtfS5jb250ZW50OmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX0uY29udGVudDpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS5jb250ZW50OmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmNvbnRlbnQgc3BhbntkaXNwbGF5OmlubGluZS1mbGV4fS5jb250ZW50LmxheW91dC0tdmVydGljYWx7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCU7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7cGFkZGluZy1ibG9jazoxcmVtO2JvcmRlci1ibG9jay1lbmQ6MDtib3JkZXItaW5saW5lLWVuZDowLjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50fTpob3N0KFthY3RpdmVdKSAuY29udGVudHtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFthY3RpdmVdKSAuY29udGVudCAuaWNvbnstLWNhbGNpdGUtdWktaWNvbi1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChbbGF5b3V0PXZlcnRpY2FsXSkgLmNvbnRlbnR7cGFkZGluZy1pbmxpbmU6MC43NXJlbX0uaWNvbi0tc3RhcnR7bWFyZ2luLWlubGluZS1lbmQ6MC43NXJlbX0uaWNvbi0tZW5ke21hcmdpbi1pbmxpbmUtc3RhcnQ6MC43NXJlbX06aG9zdChbbGF5b3V0PXZlcnRpY2FsXSkgLmljb24tLWVuZHttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG87cGFkZGluZy1pbmxpbmUtc3RhcnQ6MC43NXJlbX0uaWNvbi0tZHJvcGRvd257cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLWlubGluZS1zdGFydDphdXRvO21hcmdpbi1pbmxpbmUtZW5kOjBweDtwYWRkaW5nLWlubGluZS1zdGFydDowLjVyZW07LS1jYWxjaXRlLXVpLWljb24tY29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdKSAuaWNvbi0tZW5kfi5pY29uLS1kcm9wZG93bnttYXJnaW4taW5saW5lLXN0YXJ0OjAuNzVyZW19Omhvc3QoW2xheW91dD12ZXJ0aWNhbF0pIC5ob3Zlci1ocmVmLWljb257cGFkZGluZy1pbmxpbmUtc3RhcnQ6MC41cmVtfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdKSAuaG92ZXItaHJlZi1pY29ufi5pY29uLS1lbmR7bWFyZ2luLWlubGluZS1zdGFydDowLjVyZW19Omhvc3QoW2xheW91dD12ZXJ0aWNhbF0pIC5ob3Zlci1ocmVmLWljb25+Lmljb24tLWJyZWFkY3J1bWJ7bWFyZ2luLWlubGluZS1zdGFydDowLjc1cmVtfS5pY29uLS1icmVhZGNydW1ie21hcmdpbi1pbmxpbmUtZW5kOjBweDtwYWRkaW5nLWlubGluZS1zdGFydDowLjVyZW07LS1jYWxjaXRlLXVpLWljb24tY29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdKSAuaWNvbi0tYnJlYWRjcnVtYnttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG99Omhvc3QoW2xheW91dD12ZXJ0aWNhbF0pIC5pY29uLS1icmVhZGNydW1ifi5pY29uLS1kcm9wZG93bnttYXJnaW4taW5saW5lLXN0YXJ0OjAuNXJlbX06aG9zdChbbGF5b3V0PXZlcnRpY2FsXSkgLmljb24tLWVuZH4uaWNvbi0tYnJlYWRjcnVtYnttYXJnaW4taW5saW5lLXN0YXJ0OjAuNXJlbX06aG9zdChbYnJlYWRjcnVtYl0pIC5jb250ZW50e3BhZGRpbmctaW5saW5lLWVuZDowLjc1cmVtfWNhbGNpdGUtYWN0aW9ue3Bvc2l0aW9uOnJlbGF0aXZlO2Jsb2NrLXNpemU6YXV0bztib3JkZXItaW5saW5lLXN0YXJ0OjFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Y2FsY2l0ZS1hY3Rpb246YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQtaW5saW5lLXN0YXJ0Oi0xcHg7ZGlzcGxheTpibG9jaztpbmxpbmUtc2l6ZToxcHg7Y29udGVudDpcXFwiXFxcIjtpbnNldC1ibG9jazowLjc1cmVtO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9Y2FsY2l0ZS1hY3Rpb246aG92ZXI6YWZ0ZXJ7YmxvY2stc2l6ZToxMDAlO2luc2V0LWJsb2NrOjB9LmNvbnRlbnQ6Zm9jdXN+Y2FsY2l0ZS1hY3Rpb24sLmNvbnRlbnQ6aG92ZXJ+Y2FsY2l0ZS1hY3Rpb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO2JvcmRlci1pbmxpbmUtc3RhcnQ6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfS5jb250YWluZXI6aG92ZXIgLmRyb3Bkb3duLWFjdGlvbntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX0uZHJvcGRvd24tbWVudS1pdGVtc3twb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5Om5vbmU7YmxvY2stc2l6ZTphdXRvO21pbi1pbmxpbmUtc2l6ZToxMDAlO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtvdmVyZmxvdzp2aXNpYmxlO2JvcmRlcjoxcHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7YmFja2dyb3VuZDp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7aW5zZXQtYmxvY2stc3RhcnQ6MTAwJTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfS5kcm9wZG93bi1tZW51LWl0ZW1zLm9wZW57ZGlzcGxheTpibG9ja30uZHJvcGRvd24tbWVudS1pdGVtcy5uZXN0ZWR7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQtYmxvY2stc3RhcnQ6LTFweDt0cmFuc2Zvcm06dHJhbnNsYXRlWChjYWxjKDEwMCUgLSAycHgpKX0ucGFyZW50LS12ZXJ0aWNhbHtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LmRyb3Bkb3duLS12ZXJ0aWNhbC5kcm9wZG93bi1tZW51LWl0ZW1ze3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6MHB4O2JveC1zaGFkb3c6bm9uZTtpbnNldC1ibG9jay1zdGFydDowO3RyYW5zZm9ybTpub25lfS5kcm9wZG93bi0tdmVydGljYWwuZHJvcGRvd24tbWVudS1pdGVtczpsYXN0LW9mLXR5cGV7Ym9yZGVyLWlubGluZTowfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdOmxhc3Qtb2YtdHlwZSkgLmRyb3Bkb3duLW1lbnUtaXRlbXN7Ym9yZGVyLWJsb2NrLWVuZDowfTpob3N0KFtzbG90PXN1Ym1lbnUtaXRlbV0pIC5wYXJlbnQtLXZlcnRpY2Fse3BhZGRpbmctaW5saW5lLXN0YXJ0OjEuNXJlbX0uZHJvcGRvd24tbWVudS1pdGVtcy5uZXN0ZWQuY2FsY2l0ZS0tcnRse3RyYW5zZm9ybTp0cmFuc2xhdGVYKGNhbGMoLTEwMCUgKyAycHgpKX0uZHJvcGRvd24tLXZlcnRpY2FsLmRyb3Bkb3duLW1lbnUtaXRlbXMubmVzdGVkLmNhbGNpdGUtLXJ0bHt0cmFuc2Zvcm06bm9uZX0uaG92ZXItaHJlZi1pY29ue3Bvc2l0aW9uOnJlbGF0aXZlO2luc2V0LWlubGluZS1lbmQ6MC4yNXJlbTttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG87b3BhY2l0eTowO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGVhc2UtaW4tb3V0fS5jb250ZW50OmZvY3VzIC5ob3Zlci1ocmVmLWljb24sLmNvbnRlbnQ6aG92ZXIgLmhvdmVyLWhyZWYtaWNvbntpbnNldC1pbmxpbmUtZW5kOi0wLjI1cmVtO29wYWNpdHk6MX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgQ2FsY2l0ZU1lbnVJdGVtJDEgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsTWVudUl0ZW1LZXlFdmVudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsTWVudUl0ZW1LZXlFdmVudFwiLCA3KTtcbiAgICB0aGlzLmNhbGNpdGVNZW51SXRlbVNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZU1lbnVJdGVtU2VsZWN0XCIsIDcpO1xuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoKHRoaXMuaHJlZiAmJiBldmVudC50YXJnZXQgPT09IHRoaXMuZHJvcGRvd25BY3Rpb25FbCkgfHwgKCF0aGlzLmhyZWYgJiYgdGhpcy5oYXNTdWJtZW51KSkge1xuICAgICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RNZW51SXRlbShldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZU1lbnVJdGVtU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5zdWJtZW51SXRlbXMgPSBzbG90Q2hhbmdlR2V0QXNzaWduZWRFbGVtZW50cyhldmVudCk7XG4gICAgICB0aGlzLnN1Ym1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmICghaXRlbS50b3BMZXZlbE1lbnVMYXlvdXQpIHtcbiAgICAgICAgICBpdGVtLnRvcExldmVsTWVudUxheW91dCA9IHRoaXMudG9wTGV2ZWxNZW51TGF5b3V0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaGFzU3VibWVudSA9IHRoaXMuc3VibWVudUl0ZW1zLmxlbmd0aCA+IDA7XG4gICAgfTtcbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAvLyBvcGVuaW5nIGFuZCBjbG9zaW5nIG9mIHN1Ym1lbnUgaXMgaGFuZGxlZCBoZXJlLiBBbnkgb3RoZXIgZnVuY3Rpb25hbGl0eSBpcyBidWJibGVkIHRvIHBhcmVudCBtZW51LlxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCIgXCIgfHwgZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RNZW51SXRlbShldmVudCk7XG4gICAgICAgIGlmICh0aGlzLmhhc1N1Ym1lbnUgJiZcbiAgICAgICAgICAoIXRoaXMuaHJlZiB8fCAodGhpcy5ocmVmICYmIGV2ZW50LnRhcmdldCA9PT0gdGhpcy5kcm9wZG93bkFjdGlvbkVsKSkpIHtcbiAgICAgICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbE1lbnVJdGVtS2V5RXZlbnQuZW1pdCh7IGV2ZW50IH0pO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93RG93blwiIHx8IGV2ZW50LmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKChldmVudC50YXJnZXQgPT09IHRoaXMuZHJvcGRvd25BY3Rpb25FbCB8fCAhdGhpcy5ocmVmKSAmJlxuICAgICAgICAgIHRoaXMuaGFzU3VibWVudSAmJlxuICAgICAgICAgICF0aGlzLm9wZW4gJiZcbiAgICAgICAgICB0aGlzLmxheW91dCA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbE1lbnVJdGVtS2V5RXZlbnQuZW1pdCh7XG4gICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgY2hpbGRyZW46IHRoaXMuc3VibWVudUl0ZW1zLFxuICAgICAgICAgIGlzU3VibWVudU9wZW46IHRoaXMub3BlbiAmJiB0aGlzLmhhc1N1Ym1lbnUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsTWVudUl0ZW1LZXlFdmVudC5lbWl0KHtcbiAgICAgICAgICBldmVudCxcbiAgICAgICAgICBjaGlsZHJlbjogdGhpcy5zdWJtZW51SXRlbXMsXG4gICAgICAgICAgaXNTdWJtZW51T3BlbjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICgoZXZlbnQudGFyZ2V0ID09PSB0aGlzLmRyb3Bkb3duQWN0aW9uRWwgfHwgIXRoaXMuaHJlZikgJiZcbiAgICAgICAgICB0aGlzLmhhc1N1Ym1lbnUgJiZcbiAgICAgICAgICAhdGhpcy5vcGVuICYmXG4gICAgICAgICAgdGhpcy5sYXlvdXQgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgIHRoaXMub3BlbiA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsTWVudUl0ZW1LZXlFdmVudC5lbWl0KHtcbiAgICAgICAgICBldmVudCxcbiAgICAgICAgICBjaGlsZHJlbjogdGhpcy5zdWJtZW51SXRlbXMsXG4gICAgICAgICAgaXNTdWJtZW51T3BlbjogdGhpcy5vcGVuICYmIHRoaXMuaGFzU3VibWVudSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmFjdGl2ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmJyZWFkY3J1bWIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ocmVmID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvbkVuZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25GbGlwUnRsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvblN0YXJ0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaXNUb3BMZXZlbEl0ZW0gPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGF5b3V0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMucmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRvcExldmVsTWVudUxheW91dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gICAgdGhpcy5oYXNTdWJtZW51ID0gZmFsc2U7XG4gICAgdGhpcy5zdWJtZW51SXRlbXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRGb2N1c2FibGUodGhpcyk7XG4gICAgdGhpcy5hbmNob3JFbC5mb2N1cygpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGhhbmRsZUNsaWNrT3V0KGV2ZW50KSB7XG4gICAgaWYgKHRoaXMudG9wTGV2ZWxNZW51TGF5b3V0ICE9PSBcInZlcnRpY2FsXCIgJiZcbiAgICAgIHRoaXMuaGFzU3VibWVudSAmJlxuICAgICAgdGhpcy5vcGVuICYmXG4gICAgICAhZXZlbnQuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXModGhpcy5lbCkpIHtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBoYW5kbGVGb2N1c091dChldmVudCkge1xuICAgIGlmICh0aGlzLnRvcExldmVsTWVudUxheW91dCAhPT0gXCJ2ZXJ0aWNhbFwiICYmXG4gICAgICAhdGhpcy5lbC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGJsdXJIYW5kbGVyKCkge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XG4gIH1cbiAgZm9jdXNIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICBpZiAodGFyZ2V0Lm9wZW4gJiYgIXRoaXMub3Blbikge1xuICAgICAgdGFyZ2V0Lm9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc2VsZWN0TWVudUl0ZW0oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSB0aGlzLmRyb3Bkb3duQWN0aW9uRWwpIHtcbiAgICAgIHRoaXMuY2FsY2l0ZU1lbnVJdGVtU2VsZWN0LmVtaXQoKTtcbiAgICB9XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJJY29uU3RhcnQoKSB7XG4gICAgcmV0dXJuIChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IGAke0NTUy5pY29ufSAke0NTUy5pY29uU3RhcnR9YCwgZmxpcFJ0bDogdGhpcy5pY29uRmxpcFJ0bCA9PT0gXCJzdGFydFwiIHx8IHRoaXMuaWNvbkZsaXBSdGwgPT09IFwiYm90aFwiLCBpY29uOiB0aGlzLmljb25TdGFydCwga2V5OiBDU1MuaWNvblN0YXJ0LCBzY2FsZTogXCJzXCIgfSkpO1xuICB9XG4gIHJlbmRlckljb25FbmQoKSB7XG4gICAgcmV0dXJuIChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IGAke0NTUy5pY29ufSAke0NTUy5pY29uRW5kfWAsIGZsaXBSdGw6IHRoaXMuaWNvbkZsaXBSdGwgPT09IFwiZW5kXCIgfHwgdGhpcy5pY29uRmxpcFJ0bCA9PT0gXCJib3RoXCIsIGljb246IHRoaXMuaWNvbkVuZCwga2V5OiBDU1MuaWNvbkVuZCwgc2NhbGU6IFwic1wiIH0pKTtcbiAgfVxuICByZW5kZXJCcmVhZGNydW1iSWNvbihkaXIpIHtcbiAgICByZXR1cm4gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogYCR7Q1NTLmljb259ICR7Q1NTLmljb25CcmVhZGNydW1ifWAsIGljb246IGRpciA9PT0gXCJydGxcIiA/IFwiY2hldnJvbi1sZWZ0XCIgOiBcImNoZXZyb24tcmlnaHRcIiwga2V5OiBDU1MuaWNvbkJyZWFkY3J1bWIsIHNjYWxlOiBcInNcIiB9KSk7XG4gIH1cbiAgcmVuZGVyRHJvcGRvd25JY29uKGRpcikge1xuICAgIGNvbnN0IGRpckNoZXZyb24gPSBkaXIgPT09IFwicnRsXCIgPyBcImNoZXZyb24tbGVmdFwiIDogXCJjaGV2cm9uLXJpZ2h0XCI7XG4gICAgcmV0dXJuIChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IGAke0NTUy5pY29ufSAke0NTUy5pY29uRHJvcGRvd259YCwgaWNvbjogdGhpcy50b3BMZXZlbE1lbnVMYXlvdXQgPT09IFwidmVydGljYWxcIiB8fCB0aGlzLmlzVG9wTGV2ZWxJdGVtXG4gICAgICAgID8gdGhpcy5vcGVuXG4gICAgICAgICAgPyBcImNoZXZyb24tdXBcIlxuICAgICAgICAgIDogXCJjaGV2cm9uLWRvd25cIlxuICAgICAgICA6IGRpckNoZXZyb24sIGtleTogQ1NTLmljb25Ecm9wZG93biwgc2NhbGU6IFwic1wiIH0pKTtcbiAgfVxuICByZW5kZXJEcm9wZG93bkFjdGlvbihkaXIpIHtcbiAgICBjb25zdCBkaXJDaGV2cm9uID0gZGlyID09PSBcInJ0bFwiID8gXCJjaGV2cm9uLWxlZnRcIiA6IFwiY2hldnJvbi1yaWdodFwiO1xuICAgIHJldHVybiAoaChcImNhbGNpdGUtYWN0aW9uXCIsIHsgY2xhc3M6IENTUy5kcm9wZG93bkFjdGlvbiwgaWNvbjogdGhpcy50b3BMZXZlbE1lbnVMYXlvdXQgPT09IFwidmVydGljYWxcIiB8fCB0aGlzLmlzVG9wTGV2ZWxJdGVtXG4gICAgICAgID8gdGhpcy5vcGVuXG4gICAgICAgICAgPyBcImNoZXZyb24tdXBcIlxuICAgICAgICAgIDogXCJjaGV2cm9uLWRvd25cIlxuICAgICAgICA6IGRpckNoZXZyb24sIGtleTogQ1NTLmRyb3Bkb3duQWN0aW9uLCBvbkNsaWNrOiB0aGlzLmNsaWNrSGFuZGxlciwgb25LZXlEb3duOiB0aGlzLmtleURvd25IYW5kbGVyLCB0ZXh0OiB0aGlzLm1lc3NhZ2VzLm9wZW4sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLmRyb3Bkb3duQWN0aW9uRWwgPSBlbCkgfSkpO1xuICB9XG4gIHJlbmRlclN1Ym1lbnVJdGVtcyhkaXIpIHtcbiAgICByZXR1cm4gKGgoXCJjYWxjaXRlLW1lbnVcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLmRyb3Bkb3duTWVudUl0ZW1zXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5vcGVuXTogdGhpcy5vcGVuLFxuICAgICAgICBbQ1NTLm5lc3RlZF06ICF0aGlzLmlzVG9wTGV2ZWxJdGVtLFxuICAgICAgICBbQ1NTX1VUSUxJVFkucnRsXTogZGlyID09PSBcInJ0bFwiLFxuICAgICAgICBbQ1NTLmRyb3Bkb3duVmVydGljYWxdOiB0aGlzLnRvcExldmVsTWVudUxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiLFxuICAgICAgfSwgbGFiZWw6IHRoaXMubWVzc2FnZXMuc3VibWVudSwgbGF5b3V0OiBcInZlcnRpY2FsXCIsIHJvbGU6IFwibWVudVwiIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogXCJzdWJtZW51LWl0ZW1cIiwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZU1lbnVJdGVtU2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlckhyZWZJY29uKGRpcikge1xuICAgIHJldHVybiAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiBDU1MuaG92ZXJIcmVmSWNvbiwgaWNvbjogZGlyID09PSBcInJ0bFwiID8gXCJhcnJvdy1sZWZ0XCIgOiBcImFycm93LXJpZ2h0XCIsIGtleTogQ1NTLmhvdmVySHJlZkljb24sIHNjYWxlOiBcInNcIiB9KSk7XG4gIH1cbiAgcmVuZGVySXRlbUNvbnRlbnQoZGlyKSB7XG4gICAgY29uc3QgaGFzSHJlZiA9IHRoaXMuaHJlZiAmJiAodGhpcy50b3BMZXZlbE1lbnVMYXlvdXQgPT09IFwidmVydGljYWxcIiB8fCAhdGhpcy5pc1RvcExldmVsSXRlbSk7XG4gICAgcmV0dXJuIChoKEZyYWdtZW50LCBudWxsLCB0aGlzLmljb25TdGFydCAmJiB0aGlzLnJlbmRlckljb25TdGFydCgpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy50ZXh0Q29udGFpbmVyIH0sIGgoXCJzcGFuXCIsIG51bGwsIHRoaXMudGV4dCkpLCBoYXNIcmVmICYmIHRoaXMucmVuZGVySHJlZkljb24oZGlyKSwgdGhpcy5pY29uRW5kICYmIHRoaXMucmVuZGVySWNvbkVuZCgpLCB0aGlzLmJyZWFkY3J1bWIgPyB0aGlzLnJlbmRlckJyZWFkY3J1bWJJY29uKGRpcikgOiBudWxsLCAhdGhpcy5ocmVmICYmIHRoaXMuaGFzU3VibWVudSA/IHRoaXMucmVuZGVyRHJvcGRvd25JY29uKGRpcikgOiBudWxsKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIodGhpcy5lbCk7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgb25CbHVyOiB0aGlzLmJsdXJIYW5kbGVyLCBvbkZvY3VzOiB0aGlzLmZvY3VzSGFuZGxlciB9LCBoKFwibGlcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLmNvbnRhaW5lcl06IHRydWUsXG4gICAgICAgIFtDU1MuaXNQYXJlbnRWZXJ0aWNhbF06IHRoaXMudG9wTGV2ZWxNZW51TGF5b3V0ID09PSBcInZlcnRpY2FsXCIsXG4gICAgICB9LCByb2xlOiBcIm5vbmVcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5pdGVtQ29udGVudCB9LCBoKFwiYVwiLCB7IFwiYXJpYS1jdXJyZW50XCI6IHRoaXMuaXNGb2N1c2VkID8gXCJwYWdlXCIgOiBmYWxzZSwgXCJhcmlhLWV4cGFuZGVkXCI6IHRoaXMub3BlbiwgXCJhcmlhLWhhc3BvcHVwXCI6IHRoaXMuaGFzU3VibWVudSwgXCJhcmlhLWxhYmVsXCI6IHRoaXMubGFiZWwsIGNsYXNzOiB7IFtDU1MubGF5b3V0VmVydGljYWxdOiB0aGlzLmxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiLCBbQ1NTLmNvbnRlbnRdOiB0cnVlIH0sIGhyZWY6IHRoaXMuaHJlZiwgb25DbGljazogdGhpcy5jbGlja0hhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlciwgcmVsOiB0aGlzLnJlbCwgcm9sZTogXCJtZW51aXRlbVwiLCB0YWJJbmRleDogdGhpcy5pc1RvcExldmVsSXRlbSA/IDAgOiAtMSwgdGFyZ2V0OiB0aGlzLnRhcmdldCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMuYW5jaG9yRWwgPSBlbCkgfSwgdGhpcy5yZW5kZXJJdGVtQ29udGVudChkaXIpKSwgdGhpcy5ocmVmICYmIHRoaXMuaGFzU3VibWVudSA/IHRoaXMucmVuZGVyRHJvcGRvd25BY3Rpb24oZGlyKSA6IG51bGwpLCB0aGlzLnJlbmRlclN1Ym1lbnVJdGVtcyhkaXIpKSkpO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIG1lbnVJdGVtQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLW1lbnUtaXRlbVwiLCB7XG4gICAgXCJhY3RpdmVcIjogWzUxNl0sXG4gICAgXCJicmVhZGNydW1iXCI6IFs1MTZdLFxuICAgIFwiaHJlZlwiOiBbMV0sXG4gICAgXCJpY29uRW5kXCI6IFs1MTMsIFwiaWNvbi1lbmRcIl0sXG4gICAgXCJpY29uRmxpcFJ0bFwiOiBbNTEzLCBcImljb24tZmxpcC1ydGxcIl0sXG4gICAgXCJpY29uU3RhcnRcIjogWzUxMywgXCJpY29uLXN0YXJ0XCJdLFxuICAgIFwiaXNUb3BMZXZlbEl0ZW1cIjogWzQsIFwiaXMtdG9wLWxldmVsLWl0ZW1cIl0sXG4gICAgXCJsYWJlbFwiOiBbMV0sXG4gICAgXCJsYXlvdXRcIjogWzUxM10sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFsxMDQwXSxcbiAgICBcIm1lc3NhZ2VzXCI6IFsxMDQwXSxcbiAgICBcIm9wZW5cIjogWzE1NDBdLFxuICAgIFwicmVsXCI6IFs1MTNdLFxuICAgIFwidGFyZ2V0XCI6IFs1MTNdLFxuICAgIFwidGV4dFwiOiBbMV0sXG4gICAgXCJ0b3BMZXZlbE1lbnVMYXlvdXRcIjogWzEsIFwidG9wLWxldmVsLW1lbnUtbGF5b3V0XCJdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogWzMyXSxcbiAgICBcImhhc1N1Ym1lbnVcIjogWzMyXSxcbiAgICBcInN1Ym1lbnVJdGVtc1wiOiBbMzJdLFxuICAgIFwic2V0Rm9jdXNcIjogWzY0XVxuICB9LCBbWzgsIFwiY2xpY2tcIiwgXCJoYW5kbGVDbGlja091dFwiXSwgWzAsIFwiZm9jdXNvdXRcIiwgXCJoYW5kbGVGb2N1c091dFwiXV1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1tZW51LWl0ZW1cIiwgXCJjYWxjaXRlLWFjdGlvblwiLCBcImNhbGNpdGUtaWNvblwiLCBcImNhbGNpdGUtbG9hZGVyXCIsIFwiY2FsY2l0ZS1tZW51XCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLW1lbnUtaXRlbVwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIENhbGNpdGVNZW51SXRlbSQxKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWFjdGlvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ1KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDQoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWxvYWRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQzKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1tZW51XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDIoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG5cbmNvbnN0IENhbGNpdGVNZW51SXRlbSA9IENhbGNpdGVNZW51SXRlbSQxO1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IGRlZmluZUN1c3RvbUVsZW1lbnQkMTtcblxuZXhwb3J0IHsgQ2FsY2l0ZU1lbnVJdGVtLCBkZWZpbmVDdXN0b21FbGVtZW50IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=