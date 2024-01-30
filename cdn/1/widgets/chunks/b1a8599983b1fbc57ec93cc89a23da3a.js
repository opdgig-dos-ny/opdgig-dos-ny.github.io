"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-flow-item_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-flow-item.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-flow-item.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteFlowItem: () => (/* binding */ CalciteFlowItem),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _panel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panel.js */ "./node_modules/@esri/calcite-components/dist/components/panel.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _action_menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./action-menu.js */ "./node_modules/@esri/calcite-components/dist/components/action-menu.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _popover_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popover.js */ "./node_modules/@esri/calcite-components/dist/components/popover.js");
/* harmony import */ var _scrim_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scrim.js */ "./node_modules/@esri/calcite-components/dist/components/scrim.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */














const CSS = {
  backButton: "back-button",
};
const ICONS = {
  backLeft: "chevron-left",
  backRight: "chevron-right",
};
const SLOTS = {
  actionBar: "action-bar",
  headerActionsStart: "header-actions-start",
  headerActionsEnd: "header-actions-end",
  headerMenuActions: "header-menu-actions",
  headerContent: "header-content",
  fab: "fab",
  footer: "footer",
  footerActions: "footer-actions",
};

const flowItemCss = ":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}";

const FlowItem = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteFlowItemBack = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteFlowItemBack", 7);
    this.calciteFlowItemScroll = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteFlowItemScroll", 6);
    this.calciteFlowItemClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteFlowItemClose", 6);
    this.calciteFlowItemToggle = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteFlowItemToggle", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handlePanelScroll = (event) => {
      event.stopPropagation();
      this.calciteFlowItemScroll.emit();
    };
    this.handlePanelClose = (event) => {
      event.stopPropagation();
      this.calciteFlowItemClose.emit();
    };
    this.handlePanelToggle = (event) => {
      event.stopPropagation();
      this.collapsed = event.target.collapsed;
      this.calciteFlowItemToggle.emit();
    };
    this.backButtonClick = () => {
      this.calciteFlowItemBack.emit();
    };
    this.setBackRef = (node) => {
      this.backButtonEl = node;
    };
    this.setContainerRef = (node) => {
      this.containerEl = node;
    };
    this.closable = false;
    this.closed = false;
    this.collapsed = false;
    this.collapseDirection = "down";
    this.collapsible = false;
    this.beforeBack = undefined;
    this.description = undefined;
    this.disabled = false;
    this.heading = undefined;
    this.headingLevel = undefined;
    this.loading = false;
    this.menuOpen = false;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.showBackButton = false;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
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
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
  }
  async componentWillLoad() {
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Sets focus on the component.
   *
   * @returns promise.
   */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    const { backButtonEl, containerEl } = this;
    if (backButtonEl) {
      return backButtonEl.setFocus();
    }
    else if (containerEl) {
      return containerEl.setFocus();
    }
  }
  /**
   * Scrolls the component's content to a specified set of coordinates.
   *
   * @example
   * myCalciteFlowItem.scrollContentTo({
   *   left: 0, // Specifies the number of pixels along the X axis to scroll the window or element.
   *   top: 0, // Specifies the number of pixels along the Y axis to scroll the window or element
   *   behavior: "auto" // Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).
   * });
   * @param options - allows specific coordinates to be defined.
   * @returns - promise that resolves once the content is scrolled to.
   */
  async scrollContentTo(options) {
    await this.containerEl?.scrollContentTo(options);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderBackButton() {
    const { el } = this;
    const rtl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(el) === "rtl";
    const { showBackButton, backButtonClick, messages } = this;
    const label = messages.back;
    const icon = rtl ? ICONS.backRight : ICONS.backLeft;
    return showBackButton ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("calcite-action", { "aria-label": label, class: CSS.backButton, icon: icon, key: "flow-back-button", onClick: backButtonClick, scale: "s", slot: "header-actions-start", text: label, title: label,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setBackRef })) : null;
  }
  render() {
    const { collapsed, collapseDirection, collapsible, closable, closed, description, disabled, heading, headingLevel, loading, menuOpen, messages, } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.Host, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("calcite-panel", { closable: closable, closed: closed, collapseDirection: collapseDirection, collapsed: collapsed, collapsible: collapsible, description: description, disabled: disabled, heading: heading, headingLevel: headingLevel, loading: loading, menuOpen: menuOpen, messageOverrides: messages, onCalcitePanelClose: this.handlePanelClose, onCalcitePanelScroll: this.handlePanelScroll, onCalcitePanelToggle: this.handlePanelToggle,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setContainerRef }, this.renderBackButton(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { name: SLOTS.actionBar, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.actionBar }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { name: SLOTS.headerActionsStart, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.headerActionsStart }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { name: SLOTS.headerActionsEnd, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.headerActionsEnd }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { name: SLOTS.headerContent, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.headerContent }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { name: SLOTS.headerMenuActions, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.headerMenuActions }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { name: SLOTS.fab, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.fab }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { name: SLOTS.footerActions, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.footerActions }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { name: SLOTS.footer, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.footer }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot", null))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return flowItemCss; }
}, [1, "calcite-flow-item", {
    "closable": [516],
    "closed": [516],
    "collapsed": [516],
    "collapseDirection": [1, "collapse-direction"],
    "collapsible": [516],
    "beforeBack": [16],
    "description": [1],
    "disabled": [516],
    "heading": [1],
    "headingLevel": [514, "heading-level"],
    "loading": [516],
    "menuOpen": [516, "menu-open"],
    "messageOverrides": [1040],
    "messages": [1040],
    "showBackButton": [4, "show-back-button"],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "setFocus": [64],
    "scrollContentTo": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-flow-item", "calcite-action", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-panel", "calcite-popover", "calcite-scrim"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-flow-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FlowItem);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        (0,_action_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
    case "calcite-action-menu":
      if (!customElements.get(tagName)) {
        (0,_action_menu_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_9__.d)();
      }
      break;
    case "calcite-panel":
      if (!customElements.get(tagName)) {
        (0,_panel_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
    case "calcite-popover":
      if (!customElements.get(tagName)) {
        (0,_popover_js__WEBPACK_IMPORTED_MODULE_10__.d)();
      }
      break;
    case "calcite-scrim":
      if (!customElements.get(tagName)) {
        (0,_scrim_js__WEBPACK_IMPORTED_MODULE_11__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteFlowItem = FlowItem;
const defineCustomElement = defineCustomElement$1;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYjFhODU5OTk4M2IxZmJjNTdlYzkzY2M4OWEyM2RhM2EuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRztBQUNqRTtBQUNxRTtBQUNMO0FBQ2hDO0FBQ29DO0FBQzVDO0FBQ2I7QUFDSztBQUNQO0FBQ0U7QUFDQztBQUNGOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixzQkFBc0IsZ0RBQWdELCtCQUErQixzQ0FBc0MsUUFBUSxzQkFBc0Isa0JBQWtCLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGtCQUFrQixhQUFhLGlCQUFpQixjQUFjLHlHQUF5RyxVQUFVLGFBQWEsaUJBQWlCLG1CQUFtQix3Q0FBd0MsNEJBQTRCLGNBQWMsdUVBQXVFLHlGQUF5RixnQkFBZ0IsYUFBYSxTQUFTLGFBQWE7O0FBRTk0QiwrQkFBK0IsMkZBQWtCLGVBQWUsZ0ZBQVc7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isb0ZBQVc7QUFDMUMsaUNBQWlDLG9GQUFXO0FBQzVDLGdDQUFnQyxvRkFBVztBQUMzQyxpQ0FBaUMsb0ZBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBa0I7QUFDdEIsSUFBSSw2Q0FBZ0I7QUFDcEIsSUFBSSwwQ0FBZTtBQUNuQjtBQUNBO0FBQ0EsVUFBVSwwQ0FBYTtBQUN2QixJQUFJLCtDQUFzQjtBQUMxQjtBQUNBO0FBQ0EsSUFBSSxrREFBcUI7QUFDekI7QUFDQTtBQUNBLElBQUksa0RBQXFCO0FBQ3pCLElBQUksNkNBQW1CO0FBQ3ZCLElBQUksMENBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxJQUFJLCtDQUFrQjtBQUN0QjtBQUNBO0FBQ0EsSUFBSSwwQ0FBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtDQUFrQjtBQUM1QixZQUFZLDRCQUE0QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxLQUFLO0FBQ2pCLGdCQUFnQiwwQ0FBYTtBQUM3QixZQUFZLDRDQUE0QztBQUN4RDtBQUNBO0FBQ0EsNkJBQTZCLDBFQUFDLHFCQUFxQjtBQUNuRDtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsWUFBWSwwSUFBMEk7QUFDdEosWUFBWSwwRUFBQyxDQUFDLHlFQUFJLFFBQVEsMEVBQUMsb0JBQW9CO0FBQy9DO0FBQ0EsaUNBQWlDLDJCQUEyQiwwRUFBQyxXQUFXLDZCQUE2Qix3Q0FBTyxZQUFZLEdBQUcsMEVBQUMsV0FBVyxzQ0FBc0Msd0NBQU8scUJBQXFCLEdBQUcsMEVBQUMsV0FBVyxvQ0FBb0Msd0NBQU8sbUJBQW1CLEdBQUcsMEVBQUMsV0FBVyxpQ0FBaUMsd0NBQU8sZ0JBQWdCLEdBQUcsMEVBQUMsV0FBVyxxQ0FBcUMsd0NBQU8sb0JBQW9CLEdBQUcsMEVBQUMsV0FBVyx1QkFBdUIsd0NBQU8sTUFBTSxHQUFHLDBFQUFDLFdBQVcsaUNBQWlDLHdDQUFPLGdCQUFnQixHQUFHLDBFQUFDLFdBQVcsMEJBQTBCLHdDQUFPLFNBQVMsR0FBRywwRUFBQztBQUNubUI7QUFDQSw0QkFBNEI7QUFDNUIsYUFBYTtBQUNiLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZDQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZDQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNENBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZDQUFxQjtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS1mbG93LWl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGgsIEhvc3QgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldEVsZW1lbnREaXIgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24sIGQgYXMgZGlzY29ubmVjdEludGVyYWN0aXZlIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS5qcyc7XG5pbXBvcnQgeyBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudEZvY3VzYWJsZSB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcywgdSBhcyB1cGRhdGVNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IFMgYXMgU0xPVFMkMSwgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDQgfSBmcm9tICcuL3BhbmVsLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ4IH0gZnJvbSAnLi9hY3Rpb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDcgfSBmcm9tICcuL2FjdGlvbi1tZW51LmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ2IH0gZnJvbSAnLi9pY29uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ1IH0gZnJvbSAnLi9sb2FkZXIuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDMgfSBmcm9tICcuL3BvcG92ZXIuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL3NjcmltLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBiYWNrQnV0dG9uOiBcImJhY2stYnV0dG9uXCIsXG59O1xuY29uc3QgSUNPTlMgPSB7XG4gIGJhY2tMZWZ0OiBcImNoZXZyb24tbGVmdFwiLFxuICBiYWNrUmlnaHQ6IFwiY2hldnJvbi1yaWdodFwiLFxufTtcbmNvbnN0IFNMT1RTID0ge1xuICBhY3Rpb25CYXI6IFwiYWN0aW9uLWJhclwiLFxuICBoZWFkZXJBY3Rpb25zU3RhcnQ6IFwiaGVhZGVyLWFjdGlvbnMtc3RhcnRcIixcbiAgaGVhZGVyQWN0aW9uc0VuZDogXCJoZWFkZXItYWN0aW9ucy1lbmRcIixcbiAgaGVhZGVyTWVudUFjdGlvbnM6IFwiaGVhZGVyLW1lbnUtYWN0aW9uc1wiLFxuICBoZWFkZXJDb250ZW50OiBcImhlYWRlci1jb250ZW50XCIsXG4gIGZhYjogXCJmYWJcIixcbiAgZm9vdGVyOiBcImZvb3RlclwiLFxuICBmb290ZXJBY3Rpb25zOiBcImZvb3Rlci1hY3Rpb25zXCIsXG59O1xuXG5jb25zdCBmbG93SXRlbUNzcyA9IFwiOmhvc3R7Ym94LXNpemluZzpib3JkZXItYm94O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpfTpob3N0ICp7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO2ZsZXg6MSAxIGF1dG99Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfS5iYWNrLWJ1dHRvbntib3JkZXItd2lkdGg6MHB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7Ym9yZGVyLWlubGluZS1lbmQtd2lkdGg6MXB4fWNhbGNpdGUtcGFuZWx7LS1jYWxjaXRlLXBhbmVsLWZvb3Rlci1wYWRkaW5nOnZhcigtLWNhbGNpdGUtZmxvdy1pdGVtLWZvb3Rlci1wYWRkaW5nKTstLWNhbGNpdGUtcGFuZWwtaGVhZGVyLWJvcmRlci1ibG9jay1lbmQ6dmFyKC0tY2FsY2l0ZS1mbG93LWl0ZW0taGVhZGVyLWJvcmRlci1ibG9jay1lbmQpfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBGbG93SXRlbSA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlRmxvd0l0ZW1CYWNrID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlRmxvd0l0ZW1CYWNrXCIsIDcpO1xuICAgIHRoaXMuY2FsY2l0ZUZsb3dJdGVtU2Nyb2xsID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlRmxvd0l0ZW1TY3JvbGxcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlRmxvd0l0ZW1DbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUZsb3dJdGVtQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlRmxvd0l0ZW1Ub2dnbGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVGbG93SXRlbVRvZ2dsZVwiLCA2KTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmhhbmRsZVBhbmVsU2Nyb2xsID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuY2FsY2l0ZUZsb3dJdGVtU2Nyb2xsLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlUGFuZWxDbG9zZSA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmNhbGNpdGVGbG93SXRlbUNsb3NlLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlUGFuZWxUb2dnbGUgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5jb2xsYXBzZWQgPSBldmVudC50YXJnZXQuY29sbGFwc2VkO1xuICAgICAgdGhpcy5jYWxjaXRlRmxvd0l0ZW1Ub2dnbGUuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5iYWNrQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGNpdGVGbG93SXRlbUJhY2suZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5zZXRCYWNrUmVmID0gKG5vZGUpID0+IHtcbiAgICAgIHRoaXMuYmFja0J1dHRvbkVsID0gbm9kZTtcbiAgICB9O1xuICAgIHRoaXMuc2V0Q29udGFpbmVyUmVmID0gKG5vZGUpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyRWwgPSBub2RlO1xuICAgIH07XG4gICAgdGhpcy5jbG9zYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNvbGxhcHNlRGlyZWN0aW9uID0gXCJkb3duXCI7XG4gICAgdGhpcy5jb2xsYXBzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuYmVmb3JlQmFjayA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmhlYWRpbmcgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oZWFkaW5nTGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5tZW51T3BlbiA9IGZhbHNlO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2hvd0JhY2tCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcmV0dXJucyBwcm9taXNlLlxuICAgKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIGNvbnN0IHsgYmFja0J1dHRvbkVsLCBjb250YWluZXJFbCB9ID0gdGhpcztcbiAgICBpZiAoYmFja0J1dHRvbkVsKSB7XG4gICAgICByZXR1cm4gYmFja0J1dHRvbkVsLnNldEZvY3VzKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbnRhaW5lckVsKSB7XG4gICAgICByZXR1cm4gY29udGFpbmVyRWwuc2V0Rm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNjcm9sbHMgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgdG8gYSBzcGVjaWZpZWQgc2V0IG9mIGNvb3JkaW5hdGVzLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBteUNhbGNpdGVGbG93SXRlbS5zY3JvbGxDb250ZW50VG8oe1xuICAgKiAgIGxlZnQ6IDAsIC8vIFNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHBpeGVscyBhbG9uZyB0aGUgWCBheGlzIHRvIHNjcm9sbCB0aGUgd2luZG93IG9yIGVsZW1lbnQuXG4gICAqICAgdG9wOiAwLCAvLyBTcGVjaWZpZXMgdGhlIG51bWJlciBvZiBwaXhlbHMgYWxvbmcgdGhlIFkgYXhpcyB0byBzY3JvbGwgdGhlIHdpbmRvdyBvciBlbGVtZW50XG4gICAqICAgYmVoYXZpb3I6IFwiYXV0b1wiIC8vIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBzY3JvbGxpbmcgc2hvdWxkIGFuaW1hdGUgc21vb3RobHkgKHNtb290aCksIG9yIGhhcHBlbiBpbnN0YW50bHkgaW4gYSBzaW5nbGUganVtcCAoYXV0bywgdGhlIGRlZmF1bHQgdmFsdWUpLlxuICAgKiB9KTtcbiAgICogQHBhcmFtIG9wdGlvbnMgLSBhbGxvd3Mgc3BlY2lmaWMgY29vcmRpbmF0ZXMgdG8gYmUgZGVmaW5lZC5cbiAgICogQHJldHVybnMgLSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgb25jZSB0aGUgY29udGVudCBpcyBzY3JvbGxlZCB0by5cbiAgICovXG4gIGFzeW5jIHNjcm9sbENvbnRlbnRUbyhvcHRpb25zKSB7XG4gICAgYXdhaXQgdGhpcy5jb250YWluZXJFbD8uc2Nyb2xsQ29udGVudFRvKG9wdGlvbnMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJCYWNrQnV0dG9uKCkge1xuICAgIGNvbnN0IHsgZWwgfSA9IHRoaXM7XG4gICAgY29uc3QgcnRsID0gZ2V0RWxlbWVudERpcihlbCkgPT09IFwicnRsXCI7XG4gICAgY29uc3QgeyBzaG93QmFja0J1dHRvbiwgYmFja0J1dHRvbkNsaWNrLCBtZXNzYWdlcyB9ID0gdGhpcztcbiAgICBjb25zdCBsYWJlbCA9IG1lc3NhZ2VzLmJhY2s7XG4gICAgY29uc3QgaWNvbiA9IHJ0bCA/IElDT05TLmJhY2tSaWdodCA6IElDT05TLmJhY2tMZWZ0O1xuICAgIHJldHVybiBzaG93QmFja0J1dHRvbiA/IChoKFwiY2FsY2l0ZS1hY3Rpb25cIiwgeyBcImFyaWEtbGFiZWxcIjogbGFiZWwsIGNsYXNzOiBDU1MuYmFja0J1dHRvbiwgaWNvbjogaWNvbiwga2V5OiBcImZsb3ctYmFjay1idXR0b25cIiwgb25DbGljazogYmFja0J1dHRvbkNsaWNrLCBzY2FsZTogXCJzXCIsIHNsb3Q6IFwiaGVhZGVyLWFjdGlvbnMtc3RhcnRcIiwgdGV4dDogbGFiZWwsIHRpdGxlOiBsYWJlbCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IHRoaXMuc2V0QmFja1JlZiB9KSkgOiBudWxsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbGxhcHNlZCwgY29sbGFwc2VEaXJlY3Rpb24sIGNvbGxhcHNpYmxlLCBjbG9zYWJsZSwgY2xvc2VkLCBkZXNjcmlwdGlvbiwgZGlzYWJsZWQsIGhlYWRpbmcsIGhlYWRpbmdMZXZlbCwgbG9hZGluZywgbWVudU9wZW4sIG1lc3NhZ2VzLCB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcImNhbGNpdGUtcGFuZWxcIiwgeyBjbG9zYWJsZTogY2xvc2FibGUsIGNsb3NlZDogY2xvc2VkLCBjb2xsYXBzZURpcmVjdGlvbjogY29sbGFwc2VEaXJlY3Rpb24sIGNvbGxhcHNlZDogY29sbGFwc2VkLCBjb2xsYXBzaWJsZTogY29sbGFwc2libGUsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgZGlzYWJsZWQ6IGRpc2FibGVkLCBoZWFkaW5nOiBoZWFkaW5nLCBoZWFkaW5nTGV2ZWw6IGhlYWRpbmdMZXZlbCwgbG9hZGluZzogbG9hZGluZywgbWVudU9wZW46IG1lbnVPcGVuLCBtZXNzYWdlT3ZlcnJpZGVzOiBtZXNzYWdlcywgb25DYWxjaXRlUGFuZWxDbG9zZTogdGhpcy5oYW5kbGVQYW5lbENsb3NlLCBvbkNhbGNpdGVQYW5lbFNjcm9sbDogdGhpcy5oYW5kbGVQYW5lbFNjcm9sbCwgb25DYWxjaXRlUGFuZWxUb2dnbGU6IHRoaXMuaGFuZGxlUGFuZWxUb2dnbGUsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiB0aGlzLnNldENvbnRhaW5lclJlZiB9LCB0aGlzLnJlbmRlckJhY2tCdXR0b24oKSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5hY3Rpb25CYXIsIHNsb3Q6IFNMT1RTJDEuYWN0aW9uQmFyIH0pLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmhlYWRlckFjdGlvbnNTdGFydCwgc2xvdDogU0xPVFMkMS5oZWFkZXJBY3Rpb25zU3RhcnQgfSksIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuaGVhZGVyQWN0aW9uc0VuZCwgc2xvdDogU0xPVFMkMS5oZWFkZXJBY3Rpb25zRW5kIH0pLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmhlYWRlckNvbnRlbnQsIHNsb3Q6IFNMT1RTJDEuaGVhZGVyQ29udGVudCB9KSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5oZWFkZXJNZW51QWN0aW9ucywgc2xvdDogU0xPVFMkMS5oZWFkZXJNZW51QWN0aW9ucyB9KSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5mYWIsIHNsb3Q6IFNMT1RTJDEuZmFiIH0pLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmZvb3RlckFjdGlvbnMsIHNsb3Q6IFNMT1RTJDEuZm9vdGVyQWN0aW9ucyB9KSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5mb290ZXIsIHNsb3Q6IFNMT1RTJDEuZm9vdGVyIH0pLCBoKFwic2xvdFwiLCBudWxsKSkpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBmbG93SXRlbUNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1mbG93LWl0ZW1cIiwge1xuICAgIFwiY2xvc2FibGVcIjogWzUxNl0sXG4gICAgXCJjbG9zZWRcIjogWzUxNl0sXG4gICAgXCJjb2xsYXBzZWRcIjogWzUxNl0sXG4gICAgXCJjb2xsYXBzZURpcmVjdGlvblwiOiBbMSwgXCJjb2xsYXBzZS1kaXJlY3Rpb25cIl0sXG4gICAgXCJjb2xsYXBzaWJsZVwiOiBbNTE2XSxcbiAgICBcImJlZm9yZUJhY2tcIjogWzE2XSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IFsxXSxcbiAgICBcImRpc2FibGVkXCI6IFs1MTZdLFxuICAgIFwiaGVhZGluZ1wiOiBbMV0sXG4gICAgXCJoZWFkaW5nTGV2ZWxcIjogWzUxNCwgXCJoZWFkaW5nLWxldmVsXCJdLFxuICAgIFwibG9hZGluZ1wiOiBbNTE2XSxcbiAgICBcIm1lbnVPcGVuXCI6IFs1MTYsIFwibWVudS1vcGVuXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJzaG93QmFja0J1dHRvblwiOiBbNCwgXCJzaG93LWJhY2stYnV0dG9uXCJdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogWzMyXSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF0sXG4gICAgXCJzY3JvbGxDb250ZW50VG9cIjogWzY0XVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50JDEoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtZmxvdy1pdGVtXCIsIFwiY2FsY2l0ZS1hY3Rpb25cIiwgXCJjYWxjaXRlLWFjdGlvbi1tZW51XCIsIFwiY2FsY2l0ZS1pY29uXCIsIFwiY2FsY2l0ZS1sb2FkZXJcIiwgXCJjYWxjaXRlLXBhbmVsXCIsIFwiY2FsY2l0ZS1wb3BvdmVyXCIsIFwiY2FsY2l0ZS1zY3JpbVwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1mbG93LWl0ZW1cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBGbG93SXRlbSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1hY3Rpb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkOCgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtYWN0aW9uLW1lbnVcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ2KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtcGFuZWxcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNCgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtcG9wb3ZlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQzKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1zY3JpbVwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlRmxvd0l0ZW0gPSBGbG93SXRlbTtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVGbG93SXRlbSwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9