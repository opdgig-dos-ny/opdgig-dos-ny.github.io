"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_panel_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/panel.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/panel.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ Panel),
/* harmony export */   S: () => (/* binding */ SLOTS),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _action_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action-menu.js */ "./node_modules/@esri/calcite-components/dist/components/action-menu.js");
/* harmony import */ var _Heading_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Heading.js */ "./node_modules/@esri/calcite-components/dist/components/Heading.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _popover_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popover.js */ "./node_modules/@esri/calcite-components/dist/components/popover.js");
/* harmony import */ var _scrim_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scrim.js */ "./node_modules/@esri/calcite-components/dist/components/scrim.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */















const CSS = {
  actionBarContainer: "action-bar-container",
  backButton: "back-button",
  container: "container",
  header: "header",
  headerContainer: "header-container",
  headerContainerBorderEnd: "header-container--border-end",
  heading: "heading",
  summary: "summary",
  description: "description",
  headerContent: "header-content",
  headerActions: "header-actions",
  headerActionsEnd: "header-actions--end",
  headerActionsStart: "header-actions--start",
  contentWrapper: "content-wrapper",
  fabContainer: "fab-container",
  footer: "footer",
};
const ICONS = {
  close: "x",
  menu: "ellipsis",
  backLeft: "chevron-left",
  backRight: "chevron-right",
  expand: "chevron-down",
  collapse: "chevron-up",
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

const panelCss = ":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-ui-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-app-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-ui-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-ui-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;background-color:var(--calcite-ui-background)}.footer{display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-ui-foreground-1);flex:0 0 auto;padding:var(--calcite-panel-footer-padding, 0.5rem);border-block-start:1px solid var(--calcite-ui-border-3)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-app-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}";

const Panel = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calcitePanelClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.createEvent)(this, "calcitePanelClose", 6);
    this.calcitePanelToggle = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.createEvent)(this, "calcitePanelToggle", 6);
    this.calcitePanelScroll = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.createEvent)(this, "calcitePanelScroll", 6);
    this.resizeObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_3__.c)("resize", () => this.resizeHandler());
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.resizeHandler = () => {
      const { panelScrollEl } = this;
      if (!panelScrollEl ||
        typeof panelScrollEl.scrollHeight !== "number" ||
        typeof panelScrollEl.offsetHeight !== "number") {
        return;
      }
      panelScrollEl.tabIndex = panelScrollEl.scrollHeight > panelScrollEl.offsetHeight ? 0 : -1;
    };
    this.setContainerRef = (node) => {
      this.containerEl = node;
    };
    this.panelKeyDownHandler = (event) => {
      if (this.closable && event.key === "Escape" && !event.defaultPrevented) {
        this.close();
        event.preventDefault();
      }
    };
    this.close = () => {
      this.closed = true;
      this.calcitePanelClose.emit();
    };
    this.collapse = () => {
      this.collapsed = !this.collapsed;
      this.calcitePanelToggle.emit();
    };
    this.panelScrollHandler = () => {
      this.calcitePanelScroll.emit();
    };
    this.handleHeaderActionsStartSlotChange = (event) => {
      this.hasStartActions = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleHeaderActionsEndSlotChange = (event) => {
      this.hasEndActions = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleHeaderMenuActionsSlotChange = (event) => {
      this.hasMenuItems = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleActionBarSlotChange = (event) => {
      const actionBars = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.s)(event).filter((el) => el?.matches("calcite-action-bar"));
      actionBars.forEach((actionBar) => (actionBar.layout = "horizontal"));
      this.hasActionBar = !!actionBars.length;
    };
    this.handleHeaderContentSlotChange = (event) => {
      this.hasHeaderContent = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleFooterSlotChange = (event) => {
      this.hasFooterContent = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleFooterActionsSlotChange = (event) => {
      this.hasFooterActions = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleFabSlotChange = (event) => {
      this.hasFab = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.setPanelScrollEl = (el) => {
      this.panelScrollEl = el;
      this.resizeObserver?.disconnect();
      if (el) {
        this.resizeObserver?.observe(el);
        this.resizeHandler();
      }
    };
    this.closed = false;
    this.disabled = false;
    this.closable = false;
    this.collapsed = false;
    this.collapseDirection = "down";
    this.collapsible = false;
    this.headingLevel = undefined;
    this.loading = false;
    this.heading = undefined;
    this.description = undefined;
    this.menuOpen = false;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.hasStartActions = false;
    this.hasEndActions = false;
    this.hasMenuItems = false;
    this.hasHeaderContent = false;
    this.hasActionBar = false;
    this.hasFooterContent = false;
    this.hasFooterActions = false;
    this.hasFab = false;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.showHeaderContent = false;
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
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    this.resizeObserver?.disconnect();
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Sets focus on the component's first focusable element.
   */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.containerEl);
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
    this.panelScrollEl?.scrollTo(options);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderHeaderContent() {
    const { heading, headingLevel, description, hasHeaderContent } = this;
    const headingNode = heading ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)(_Heading_js__WEBPACK_IMPORTED_MODULE_5__.H, { class: CSS.heading, level: headingLevel }, heading)) : null;
    const descriptionNode = description ? (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("span", { class: CSS.description }, description) : null;
    return !hasHeaderContent && (headingNode || descriptionNode) ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("div", { class: CSS.headerContent, key: "header-content" }, headingNode, descriptionNode)) : null;
  }
  renderActionBar() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("div", { class: CSS.actionBarContainer, hidden: !this.hasActionBar }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { name: SLOTS.actionBar, onSlotchange: this.handleActionBarSlotChange })));
  }
  renderHeaderSlottedContent() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("div", { class: CSS.headerContent, hidden: !this.hasHeaderContent, key: "slotted-header-content" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { name: SLOTS.headerContent, onSlotchange: this.handleHeaderContentSlotChange })));
  }
  renderHeaderStartActions() {
    const { hasStartActions } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("div", { class: { [CSS.headerActionsStart]: true, [CSS.headerActions]: true }, hidden: !hasStartActions, key: "header-actions-start" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { name: SLOTS.headerActionsStart, onSlotchange: this.handleHeaderActionsStartSlotChange })));
  }
  renderHeaderActionsEnd() {
    const { hasEndActions, messages, closable, collapsed, collapseDirection, collapsible, hasMenuItems, } = this;
    const { collapse, expand, close } = messages;
    const icons = [ICONS.expand, ICONS.collapse];
    if (collapseDirection === "up") {
      icons.reverse();
    }
    const collapseNode = collapsible ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("calcite-action", { "aria-expanded": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(!collapsed), "aria-label": collapse, "data-test": "collapse", icon: collapsed ? icons[0] : icons[1], onClick: this.collapse, text: collapse, title: collapsed ? expand : collapse })) : null;
    const closeNode = closable ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("calcite-action", { "aria-label": close, "data-test": "close", icon: ICONS.close, onClick: this.close, text: close, title: close })) : null;
    const slotNode = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { name: SLOTS.headerActionsEnd, onSlotchange: this.handleHeaderActionsEndSlotChange }));
    const showContainer = hasEndActions || collapseNode || closeNode || hasMenuItems;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("div", { class: { [CSS.headerActionsEnd]: true, [CSS.headerActions]: true }, hidden: !showContainer, key: "header-actions-end" }, slotNode, this.renderMenu(), collapseNode, closeNode));
  }
  renderMenu() {
    const { hasMenuItems, messages, menuOpen } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("calcite-action-menu", { flipPlacements: ["top", "bottom"], hidden: !hasMenuItems, key: "menu", label: messages.options, open: menuOpen, placement: "bottom-end" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("calcite-action", { icon: ICONS.menu, slot: _action_menu_js__WEBPACK_IMPORTED_MODULE_4__.S.trigger, text: messages.options }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { name: SLOTS.headerMenuActions, onSlotchange: this.handleHeaderMenuActionsSlotChange })));
  }
  renderHeaderNode() {
    const { hasHeaderContent, hasStartActions, hasEndActions, closable, collapsible, hasMenuItems, hasActionBar, } = this;
    const headerContentNode = this.renderHeaderContent();
    const showHeaderContent = hasHeaderContent ||
      !!headerContentNode ||
      hasStartActions ||
      hasEndActions ||
      collapsible ||
      closable ||
      hasMenuItems;
    this.showHeaderContent = showHeaderContent;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("header", { class: CSS.header, hidden: !(showHeaderContent || hasActionBar) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("div", { class: { [CSS.headerContainer]: true, [CSS.headerContainerBorderEnd]: hasActionBar }, hidden: !showHeaderContent }, this.renderHeaderStartActions(), this.renderHeaderSlottedContent(), headerContentNode, this.renderHeaderActionsEnd()), this.renderActionBar()));
  }
  renderFooterNode() {
    const { hasFooterContent, hasFooterActions } = this;
    const showFooter = hasFooterContent || hasFooterActions;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("footer", { class: CSS.footer, hidden: !showFooter }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { key: "footer-slot", name: SLOTS.footer, onSlotchange: this.handleFooterSlotChange }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { key: "footer-actions-slot", name: SLOTS.footerActions, onSlotchange: this.handleFooterActionsSlotChange })));
  }
  renderContent() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("div", { class: CSS.contentWrapper, hidden: this.collapsible && this.collapsed, onScroll: this.panelScrollHandler,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setPanelScrollEl }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", null), this.renderFab()));
  }
  renderFab() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("div", { class: CSS.fabContainer, hidden: !this.hasFab }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { name: SLOTS.fab, onSlotchange: this.handleFabSlotChange })));
  }
  render() {
    const { loading, panelKeyDownHandler, closed, closable } = this;
    const panelNode = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("article", { "aria-busy": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(loading), class: CSS.container, hidden: closed, onKeyDown: panelKeyDownHandler, tabIndex: closable ? 0 : -1,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setContainerRef }, this.renderHeaderNode(), this.renderContent(), this.renderFooterNode()));
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.Fragment, null, loading ? (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("calcite-scrim", { loading: loading }) : null, panelNode));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return panelCss; }
}, [1, "calcite-panel", {
    "closed": [1540],
    "disabled": [516],
    "closable": [516],
    "collapsed": [516],
    "collapseDirection": [1, "collapse-direction"],
    "collapsible": [516],
    "headingLevel": [514, "heading-level"],
    "loading": [516],
    "heading": [1],
    "description": [1],
    "menuOpen": [516, "menu-open"],
    "messageOverrides": [1040],
    "messages": [1040],
    "hasStartActions": [32],
    "hasEndActions": [32],
    "hasMenuItems": [32],
    "hasHeaderContent": [32],
    "hasActionBar": [32],
    "hasFooterContent": [32],
    "hasFooterActions": [32],
    "hasFab": [32],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "showHeaderContent": [32],
    "setFocus": [64],
    "scrollContentTo": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-panel", "calcite-action", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-popover", "calcite-scrim"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-panel":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Panel);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        (0,_action_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
    case "calcite-action-menu":
      if (!customElements.get(tagName)) {
        (0,_action_menu_js__WEBPACK_IMPORTED_MODULE_4__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_9__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_10__.d)();
      }
      break;
    case "calcite-popover":
      if (!customElements.get(tagName)) {
        (0,_popover_js__WEBPACK_IMPORTED_MODULE_11__.d)();
      }
      break;
    case "calcite-scrim":
      if (!customElements.get(tagName)) {
        (0,_scrim_js__WEBPACK_IMPORTED_MODULE_12__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/scrim.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/scrim.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Scrim),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */







const CSS = {
  scrim: "scrim",
  content: "content",
};
const BREAKPOINTS = {
  s: 72,
  // medium is assumed default.
  l: 480, // Greater than or equal to 480px.
};

const scrimCss = ":host{position:absolute;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-scrim-background-internal))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}";

const Scrim = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.resizeObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_2__.c)("resize", () => this.handleResize());
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleDefaultSlotChange = (event) => {
      this.hasContent = (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.w)(event);
    };
    this.storeLoaderEl = (el) => {
      this.loaderEl = el;
      this.handleResize();
    };
    this.loading = false;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.loaderScale = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.hasContent = false;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.u)(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    this.resizeObserver?.observe(this.el);
  }
  async componentWillLoad() {
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.s)(this);
  }
  disconnectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    this.resizeObserver?.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Method
  //
  // --------------------------------------------------------------------------
  render() {
    const { hasContent, loading, messages } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: CSS.scrim }, loading ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("calcite-loader", { label: messages.loading, scale: this.loaderScale,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.storeLoaderEl })) : null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: CSS.content, hidden: !hasContent }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { onSlotchange: this.handleDefaultSlotChange }))));
  }
  getScale(size) {
    if (size < BREAKPOINTS.s) {
      return "s";
    }
    else if (size >= BREAKPOINTS.l) {
      return "l";
    }
    else {
      return "m";
    }
  }
  handleResize() {
    const { loaderEl, el } = this;
    if (!loaderEl) {
      return;
    }
    this.loaderScale = this.getScale(Math.min(el.clientHeight, el.clientWidth) ?? 0);
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return scrimCss; }
}, [1, "calcite-scrim", {
    "loading": [516],
    "messages": [1040],
    "messageOverrides": [1040],
    "loaderScale": [32],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "hasContent": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-scrim", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-scrim":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Scrim);
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_4__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNTEwODAxYTJiM2QxMzRiYjFhYzliZTllMWY2OGZjNmMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21IO0FBQzJCO0FBQzNCO0FBQ0w7QUFDekQ7QUFDdUI7QUFDaEM7QUFDa0M7QUFDb0M7QUFDekQ7QUFDRjtBQUNFO0FBQ0M7QUFDRjs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixzQkFBc0IsZ0RBQWdELCtCQUErQixzQ0FBc0MsUUFBUSxzQkFBc0Isa0JBQWtCLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGtCQUFrQixhQUFhLGdCQUFnQixpQkFBaUIsY0FBYywrREFBK0QseUdBQXlHLFVBQVUsUUFBUSxXQUFXLGFBQWEsNEJBQTRCLG1CQUFtQiw4QkFBOEIsK0JBQStCLFNBQVMsV0FBVyxZQUFZLDhDQUE4QyxpQkFBaUIsY0FBYyxlQUFlLFdBQVcsV0FBVyxhQUFhLGlCQUFpQixjQUFjLHNCQUFzQixvQkFBb0IsOENBQThDLFlBQVksdUdBQXVHLG1CQUFtQixhQUFhLFFBQVEsMENBQTBDLGFBQWEsc0JBQXNCLGdEQUFnRCxvR0FBb0csa0JBQWtCLGFBQWEsaUJBQWlCLG1CQUFtQixvQkFBb0IsMkJBQTJCLGNBQWMsOEJBQThCLHNEQUFzRCxzQkFBc0IsaUJBQWlCLG9EQUFvRCxpQkFBaUIsZ0JBQWdCLGFBQWEsc0JBQXNCLGdCQUFnQix1QkFBdUIsdUJBQXVCLHVCQUF1QixzREFBc0QsY0FBYyx5QkFBeUIsWUFBWSx5QkFBeUIsa0JBQWtCLHlCQUF5QixxQ0FBcUMsb0JBQW9CLDhDQUE4QyxvQ0FBb0MscUJBQXFCLDZCQUE2QixzQ0FBc0MsaUJBQWlCLCtCQUErQixhQUFhLGlCQUFpQixtQkFBbUIsd0NBQXdDLDRCQUE0QixnQkFBZ0IsYUFBYSxtQkFBbUIsaUJBQWlCLG9CQUFvQixxQkFBcUIseUJBQXlCLGlCQUFpQixhQUFhLGdCQUFnQixjQUFjLHNCQUFzQixpQkFBaUIsb0JBQW9CLGNBQWMsOENBQThDLFFBQVEsYUFBYSxpQkFBaUIsNkJBQTZCLGdEQUFnRCxjQUFjLG9EQUFvRCx3REFBd0QsZUFBZSxnQkFBZ0Isb0JBQW9CLDBDQUEwQyxpQkFBaUIsbUJBQW1CLGNBQWMsZUFBZSxlQUFlLDZCQUE2Qix3QkFBd0IsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUV2dEcsNEJBQTRCLDJGQUFrQixlQUFlLGdGQUFXO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG9GQUFXO0FBQ3hDLDhCQUE4QixvRkFBVztBQUN6Qyw4QkFBOEIsb0ZBQVc7QUFDekMsMEJBQTBCLGdEQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDBDQUE0QjtBQUN6RDtBQUNBO0FBQ0EsMkJBQTJCLDBDQUE0QjtBQUN2RDtBQUNBO0FBQ0EsMEJBQTBCLDBDQUE0QjtBQUN0RDtBQUNBO0FBQ0EseUJBQXlCLDBDQUE2QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwwQ0FBNEI7QUFDMUQ7QUFDQTtBQUNBLDhCQUE4QiwwQ0FBNEI7QUFDMUQ7QUFDQTtBQUNBLDhCQUE4QiwwQ0FBNEI7QUFDMUQ7QUFDQTtBQUNBLG9CQUFvQiwwQ0FBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFrQjtBQUN0QixJQUFJLDZDQUFnQjtBQUNwQixJQUFJLDBDQUFlO0FBQ25CO0FBQ0E7QUFDQSxJQUFJLCtDQUFzQjtBQUMxQixVQUFVLDBDQUFhO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJLCtDQUFrQjtBQUN0QjtBQUNBO0FBQ0EsSUFBSSxrREFBcUI7QUFDekI7QUFDQTtBQUNBLElBQUksa0RBQXFCO0FBQ3pCLElBQUksNkNBQW1CO0FBQ3ZCLElBQUksMENBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLElBQUksMENBQWM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtDQUFrQjtBQUM1QixJQUFJLDBDQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBdUQ7QUFDbkUsbUNBQW1DLDBFQUFDLENBQUMsMENBQU8sSUFBSSx5Q0FBeUM7QUFDekYsMENBQTBDLDBFQUFDLFdBQVcsd0JBQXdCO0FBQzlFLG9FQUFvRSwwRUFBQyxVQUFVLGlEQUFpRDtBQUNoSTtBQUNBO0FBQ0EsWUFBWSwwRUFBQyxVQUFVLDJEQUEyRCxFQUFFLDBFQUFDLFdBQVcscUVBQXFFO0FBQ3JLO0FBQ0E7QUFDQSxZQUFZLDBFQUFDLFVBQVUseUZBQXlGLEVBQUUsMEVBQUMsV0FBVyw2RUFBNkU7QUFDM007QUFDQTtBQUNBLFlBQVksa0JBQWtCO0FBQzlCLFlBQVksMEVBQUMsVUFBVSxTQUFTLDJEQUEyRCx5REFBeUQsRUFBRSwwRUFBQyxXQUFXLHVGQUF1RjtBQUN6UDtBQUNBO0FBQ0EsWUFBWSw4RkFBOEY7QUFDMUcsWUFBWSwwQkFBMEI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsMEVBQUMscUJBQXFCLGlCQUFpQiwwQ0FBYSxvTEFBb0w7QUFDaFIsa0NBQWtDLDBFQUFDLHFCQUFxQiw4R0FBOEc7QUFDdEssc0JBQXNCLDBFQUFDLFdBQVcsbUZBQW1GO0FBQ3JIO0FBQ0EsWUFBWSwwRUFBQyxVQUFVLFNBQVMseURBQXlELHFEQUFxRDtBQUM5STtBQUNBO0FBQ0EsWUFBWSxtQ0FBbUM7QUFDL0MsWUFBWSwwRUFBQywwQkFBMEIseUlBQXlJLEVBQUUsMEVBQUMscUJBQXFCLHdCQUF3Qiw4Q0FBTyxrQ0FBa0MsR0FBRywwRUFBQyxXQUFXLHFGQUFxRjtBQUM3VztBQUNBO0FBQ0EsWUFBWSx1R0FBdUc7QUFDbkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwRUFBQyxhQUFhLGlFQUFpRSxFQUFFLDBFQUFDLFVBQVUsU0FBUywyRUFBMkUsOEJBQThCO0FBQzFOO0FBQ0E7QUFDQSxZQUFZLHFDQUFxQztBQUNqRDtBQUNBLFlBQVksMEVBQUMsYUFBYSx3Q0FBd0MsRUFBRSwwRUFBQyxXQUFXLG1GQUFtRixHQUFHLDBFQUFDLFdBQVcseUdBQXlHO0FBQzNSO0FBQ0E7QUFDQSxZQUFZLDBFQUFDLFVBQVU7QUFDdkI7QUFDQSxrQ0FBa0MsRUFBRSwwRUFBQztBQUNyQztBQUNBO0FBQ0EsWUFBWSwwRUFBQyxVQUFVLCtDQUErQyxFQUFFLDBFQUFDLFdBQVcseURBQXlEO0FBQzdJO0FBQ0E7QUFDQSxZQUFZLGlEQUFpRDtBQUM3RCx1QkFBdUIsMEVBQUMsY0FBYyxhQUFhLDBDQUFhO0FBQ2hFO0FBQ0EsaUNBQWlDO0FBQ2pDLFlBQVksMEVBQUMsQ0FBQyw2RUFBUSxrQkFBa0IsMEVBQUMsb0JBQW9CLGtCQUFrQjtBQUMvRTtBQUNBLDRCQUE0QjtBQUM1QixhQUFhO0FBQ2IsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2Q0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkNBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkNBQXFCO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFNEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuWDVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEY7QUFDZDtBQUNvQztBQUM3RDtBQUNBO0FBQ0k7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isa0JBQWtCLFVBQVUsMkNBQTJDLGFBQWEsZ0JBQWdCLGlCQUFpQixzQkFBc0Isb0JBQW9CLGlDQUFpQyxHQUFHLGtCQUFrQixLQUFLLHFCQUFxQixPQUFPLGtCQUFrQixVQUFVLGFBQWEsc0JBQXNCLHFCQUFxQixtQkFBbUIsdUJBQXVCLGdCQUFnQiw0RkFBNEYsMkZBQTJGLFNBQVMsYUFBYSxnQkFBZ0IsYUFBYSxTQUFTLGFBQWE7O0FBRTVwQiw0QkFBNEIsMEZBQWtCLGVBQWUsK0VBQVc7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0RBQWM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBDQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwQ0FBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkNBQWdCO0FBQ3BCLElBQUksMENBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsVUFBVSwwQ0FBYTtBQUN2QjtBQUNBO0FBQ0EsSUFBSSw2Q0FBbUI7QUFDdkIsSUFBSSwwQ0FBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0NBQWdDO0FBQzVDLFlBQVkseUVBQUMsVUFBVSxrQkFBa0IsYUFBYSx5RUFBQyxxQkFBcUI7QUFDNUU7QUFDQSwrQkFBK0IsV0FBVyx5RUFBQyxVQUFVLHlDQUF5QyxFQUFFLHlFQUFDLFdBQVcsNENBQTRDO0FBQ3hKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxlQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsYUFBYTtBQUNiLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZDQUFxQjtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3BhbmVsLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9zY3JpbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgRnJhZ21lbnQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBlIGFzIHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQsIHMgYXMgc2xvdENoYW5nZUdldEFzc2lnbmVkRWxlbWVudHMsIGYgYXMgZm9jdXNGaXJzdFRhYmJhYmxlLCB0IGFzIHRvQXJpYUJvb2xlYW4gfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24sIGQgYXMgZGlzY29ubmVjdEludGVyYWN0aXZlIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS5qcyc7XG5pbXBvcnQgeyBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudEZvY3VzYWJsZSB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcbmltcG9ydCB7IFMgYXMgU0xPVFMkMSwgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDUgfSBmcm9tICcuL2FjdGlvbi1tZW51LmpzJztcbmltcG9ydCB7IEggYXMgSGVhZGluZyB9IGZyb20gJy4vSGVhZGluZy5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzLCB1IGFzIHVwZGF0ZU1lc3NhZ2VzIH0gZnJvbSAnLi90OW4uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDYgfSBmcm9tICcuL2FjdGlvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNCB9IGZyb20gJy4vaWNvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMyB9IGZyb20gJy4vbG9hZGVyLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9wb3BvdmVyLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQxIH0gZnJvbSAnLi9zY3JpbS5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgYWN0aW9uQmFyQ29udGFpbmVyOiBcImFjdGlvbi1iYXItY29udGFpbmVyXCIsXG4gIGJhY2tCdXR0b246IFwiYmFjay1idXR0b25cIixcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuICBoZWFkZXI6IFwiaGVhZGVyXCIsXG4gIGhlYWRlckNvbnRhaW5lcjogXCJoZWFkZXItY29udGFpbmVyXCIsXG4gIGhlYWRlckNvbnRhaW5lckJvcmRlckVuZDogXCJoZWFkZXItY29udGFpbmVyLS1ib3JkZXItZW5kXCIsXG4gIGhlYWRpbmc6IFwiaGVhZGluZ1wiLFxuICBzdW1tYXJ5OiBcInN1bW1hcnlcIixcbiAgZGVzY3JpcHRpb246IFwiZGVzY3JpcHRpb25cIixcbiAgaGVhZGVyQ29udGVudDogXCJoZWFkZXItY29udGVudFwiLFxuICBoZWFkZXJBY3Rpb25zOiBcImhlYWRlci1hY3Rpb25zXCIsXG4gIGhlYWRlckFjdGlvbnNFbmQ6IFwiaGVhZGVyLWFjdGlvbnMtLWVuZFwiLFxuICBoZWFkZXJBY3Rpb25zU3RhcnQ6IFwiaGVhZGVyLWFjdGlvbnMtLXN0YXJ0XCIsXG4gIGNvbnRlbnRXcmFwcGVyOiBcImNvbnRlbnQtd3JhcHBlclwiLFxuICBmYWJDb250YWluZXI6IFwiZmFiLWNvbnRhaW5lclwiLFxuICBmb290ZXI6IFwiZm9vdGVyXCIsXG59O1xuY29uc3QgSUNPTlMgPSB7XG4gIGNsb3NlOiBcInhcIixcbiAgbWVudTogXCJlbGxpcHNpc1wiLFxuICBiYWNrTGVmdDogXCJjaGV2cm9uLWxlZnRcIixcbiAgYmFja1JpZ2h0OiBcImNoZXZyb24tcmlnaHRcIixcbiAgZXhwYW5kOiBcImNoZXZyb24tZG93blwiLFxuICBjb2xsYXBzZTogXCJjaGV2cm9uLXVwXCIsXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIGFjdGlvbkJhcjogXCJhY3Rpb24tYmFyXCIsXG4gIGhlYWRlckFjdGlvbnNTdGFydDogXCJoZWFkZXItYWN0aW9ucy1zdGFydFwiLFxuICBoZWFkZXJBY3Rpb25zRW5kOiBcImhlYWRlci1hY3Rpb25zLWVuZFwiLFxuICBoZWFkZXJNZW51QWN0aW9uczogXCJoZWFkZXItbWVudS1hY3Rpb25zXCIsXG4gIGhlYWRlckNvbnRlbnQ6IFwiaGVhZGVyLWNvbnRlbnRcIixcbiAgZmFiOiBcImZhYlwiLFxuICBmb290ZXI6IFwiZm9vdGVyXCIsXG4gIGZvb3RlckFjdGlvbnM6IFwiZm9vdGVyLWFjdGlvbnNcIixcbn07XG5cbmNvbnN0IHBhbmVsQ3NzID0gXCI6aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSl9Omhvc3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO2ZsZXg6MSAxIGF1dG87LS1jYWxjaXRlLW1pbi1oZWFkZXItaGVpZ2h0OmNhbGModmFyKC0tY2FsY2l0ZS1pY29uLXNpemUpICogMyl9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfS5oZWFkZXJ7bWFyZ2luOjBweDtkaXNwbGF5OmZsZXg7YWxpZ24tY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjtmaWxsOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMil9LmhlYWRpbmd7bWFyZ2luOjBweDtwYWRkaW5nOjBweDtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSl9LmhlYWRlciAuaGVhZGluZ3tmbGV4OjEgMSBhdXRvO3BhZGRpbmc6MC41cmVtfS5jb250YWluZXJ7bWFyZ2luOjBweDtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTtmbGV4OjEgMSBhdXRvO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpzdHJldGNoO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1iYWNrZ3JvdW5kKTtwYWRkaW5nOjBweDt0cmFuc2l0aW9uOm1heC1ibG9jay1zaXplIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyksIGlubGluZS1zaXplIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNvbnRhaW5lcltoaWRkZW5de2Rpc3BsYXk6bm9uZX0uaGVhZGVye3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1oZWFkZXIpO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Ym9yZGVyLWJsb2NrLWVuZDp2YXIoLS1jYWxjaXRlLXBhbmVsLWhlYWRlci1ib3JkZXItYmxvY2stZW5kLCAxcHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMykpfS5oZWFkZXItY29udGFpbmVye2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpzdHJldGNoO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2ZsZXg6MCAwIGF1dG99LmhlYWRlci1jb250YWluZXItLWJvcmRlci1lbmR7Ym9yZGVyLWJsb2NrLWVuZDoxcHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9LmFjdGlvbi1iYXItY29udGFpbmVye2lubGluZS1zaXplOjEwMCV9LmFjdGlvbi1iYXItY29udGFpbmVyIDo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbi1iYXIpe2lubGluZS1zaXplOjEwMCV9LmhlYWRlci1jb250ZW50e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmctaW5saW5lOjAuNzVyZW07cGFkZGluZy1ibG9jazowLjg3NXJlbTttYXJnaW4taW5saW5lLWVuZDphdXRvfS5oZWFkZXItY29udGVudCAuaGVhZGluZywuaGVhZGVyLWNvbnRlbnQgLmRlc2NyaXB0aW9ue2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkO3BhZGRpbmc6MHB4fS5oZWFkZXItY29udGVudCAuaGVhZGluZ3ttYXJnaW4taW5saW5lOjBweDttYXJnaW4tYmxvY2s6MHB4IDAuMjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW07Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pfS5oZWFkZXItY29udGVudCAuaGVhZGluZzpvbmx5LWNoaWxke21hcmdpbi1ibG9jay1lbmQ6MHB4fS5oZWFkZXItY29udGVudCAuZGVzY3JpcHRpb257Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX0uYmFjay1idXR0b257Ym9yZGVyLXdpZHRoOjBweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpO2JvcmRlci1pbmxpbmUtZW5kLXdpZHRoOjFweH0uaGVhZGVyLWFjdGlvbnN7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LXdyYXA6bm93cmFwO2FsaWduLWl0ZW1zOnN0cmV0Y2h9LmhlYWRlci1hY3Rpb25zLS1lbmR7bWFyZ2luLWlubGluZS1zdGFydDphdXRvfS5jb250ZW50LXdyYXBwZXJ7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6MTAwJTtmbGV4OjEgMSBhdXRvO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LXdyYXA6bm93cmFwO2FsaWduLWl0ZW1zOnN0cmV0Y2g7b3ZlcmZsb3c6YXV0bztiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYmFja2dyb3VuZCl9LmZvb3RlcntkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2ZsZXg6MCAwIGF1dG87cGFkZGluZzp2YXIoLS1jYWxjaXRlLXBhbmVsLWZvb3Rlci1wYWRkaW5nLCAwLjVyZW0pO2JvcmRlci1ibG9jay1zdGFydDoxcHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9LmZhYi1jb250YWluZXJ7cG9zaXRpb246c3RpY2t5O2luc2V0LWJsb2NrLWVuZDowcHg7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LXN0aWNreSk7bWFyZ2luLWJsb2NrOjBweDttYXJnaW4taW5saW5lOmF1dG87ZGlzcGxheTpibG9jaztwYWRkaW5nOjAuNXJlbTtpbnNldC1pbmxpbmU6MDtpbmxpbmUtc2l6ZTotbW96LWZpdC1jb250ZW50O2lubGluZS1zaXplOmZpdC1jb250ZW50fTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBQYW5lbCA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlUGFuZWxDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVBhbmVsQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlUGFuZWxUb2dnbGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVQYW5lbFRvZ2dsZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVQYW5lbFNjcm9sbCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVBhbmVsU2Nyb2xsXCIsIDYpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcInJlc2l6ZVwiLCAoKSA9PiB0aGlzLnJlc2l6ZUhhbmRsZXIoKSk7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5yZXNpemVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyBwYW5lbFNjcm9sbEVsIH0gPSB0aGlzO1xuICAgICAgaWYgKCFwYW5lbFNjcm9sbEVsIHx8XG4gICAgICAgIHR5cGVvZiBwYW5lbFNjcm9sbEVsLnNjcm9sbEhlaWdodCAhPT0gXCJudW1iZXJcIiB8fFxuICAgICAgICB0eXBlb2YgcGFuZWxTY3JvbGxFbC5vZmZzZXRIZWlnaHQgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcGFuZWxTY3JvbGxFbC50YWJJbmRleCA9IHBhbmVsU2Nyb2xsRWwuc2Nyb2xsSGVpZ2h0ID4gcGFuZWxTY3JvbGxFbC5vZmZzZXRIZWlnaHQgPyAwIDogLTE7XG4gICAgfTtcbiAgICB0aGlzLnNldENvbnRhaW5lclJlZiA9IChub2RlKSA9PiB7XG4gICAgICB0aGlzLmNvbnRhaW5lckVsID0gbm9kZTtcbiAgICB9O1xuICAgIHRoaXMucGFuZWxLZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY2xvc2FibGUgJiYgZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiICYmICFldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY2xvc2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICB0aGlzLmNhbGNpdGVQYW5lbENsb3NlLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuY29sbGFwc2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcbiAgICAgIHRoaXMuY2FsY2l0ZVBhbmVsVG9nZ2xlLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMucGFuZWxTY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjaXRlUGFuZWxTY3JvbGwuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVIZWFkZXJBY3Rpb25zU3RhcnRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc1N0YXJ0QWN0aW9ucyA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVIZWFkZXJBY3Rpb25zRW5kU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNFbmRBY3Rpb25zID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUhlYWRlck1lbnVBY3Rpb25zU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNNZW51SXRlbXMgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQWN0aW9uQmFyU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgYWN0aW9uQmFycyA9IHNsb3RDaGFuZ2VHZXRBc3NpZ25lZEVsZW1lbnRzKGV2ZW50KS5maWx0ZXIoKGVsKSA9PiBlbD8ubWF0Y2hlcyhcImNhbGNpdGUtYWN0aW9uLWJhclwiKSk7XG4gICAgICBhY3Rpb25CYXJzLmZvckVhY2goKGFjdGlvbkJhcikgPT4gKGFjdGlvbkJhci5sYXlvdXQgPSBcImhvcml6b250YWxcIikpO1xuICAgICAgdGhpcy5oYXNBY3Rpb25CYXIgPSAhIWFjdGlvbkJhcnMubGVuZ3RoO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVIZWFkZXJDb250ZW50U2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNIZWFkZXJDb250ZW50ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUZvb3RlclNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzRm9vdGVyQ29udGVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVGb290ZXJBY3Rpb25zU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNGb290ZXJBY3Rpb25zID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUZhYlNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzRmFiID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLnNldFBhbmVsU2Nyb2xsRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMucGFuZWxTY3JvbGxFbCA9IGVsO1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/Lm9ic2VydmUoZWwpO1xuICAgICAgICB0aGlzLnJlc2l6ZUhhbmRsZXIoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2FibGUgPSBmYWxzZTtcbiAgICB0aGlzLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgIHRoaXMuY29sbGFwc2VEaXJlY3Rpb24gPSBcImRvd25cIjtcbiAgICB0aGlzLmNvbGxhcHNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5oZWFkaW5nTGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5oZWFkaW5nID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZW51T3BlbiA9IGZhbHNlO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGFzU3RhcnRBY3Rpb25zID0gZmFsc2U7XG4gICAgdGhpcy5oYXNFbmRBY3Rpb25zID0gZmFsc2U7XG4gICAgdGhpcy5oYXNNZW51SXRlbXMgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0hlYWRlckNvbnRlbnQgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0FjdGlvbkJhciA9IGZhbHNlO1xuICAgIHRoaXMuaGFzRm9vdGVyQ29udGVudCA9IGZhbHNlO1xuICAgIHRoaXMuaGFzRm9vdGVyQWN0aW9ucyA9IGZhbHNlO1xuICAgIHRoaXMuaGFzRmFiID0gZmFsc2U7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuc2hvd0hlYWRlckNvbnRlbnQgPSBmYWxzZTtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50J3MgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQuXG4gICAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRGb2N1c2FibGUodGhpcyk7XG4gICAgZm9jdXNGaXJzdFRhYmJhYmxlKHRoaXMuY29udGFpbmVyRWwpO1xuICB9XG4gIC8qKlxuICAgKiBTY3JvbGxzIHRoZSBjb21wb25lbnQncyBjb250ZW50IHRvIGEgc3BlY2lmaWVkIHNldCBvZiBjb29yZGluYXRlcy5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogbXlDYWxjaXRlRmxvd0l0ZW0uc2Nyb2xsQ29udGVudFRvKHtcbiAgICogICBsZWZ0OiAwLCAvLyBTcGVjaWZpZXMgdGhlIG51bWJlciBvZiBwaXhlbHMgYWxvbmcgdGhlIFggYXhpcyB0byBzY3JvbGwgdGhlIHdpbmRvdyBvciBlbGVtZW50LlxuICAgKiAgIHRvcDogMCwgLy8gU3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgcGl4ZWxzIGFsb25nIHRoZSBZIGF4aXMgdG8gc2Nyb2xsIHRoZSB3aW5kb3cgb3IgZWxlbWVudFxuICAgKiAgIGJlaGF2aW9yOiBcImF1dG9cIiAvLyBTcGVjaWZpZXMgd2hldGhlciB0aGUgc2Nyb2xsaW5nIHNob3VsZCBhbmltYXRlIHNtb290aGx5IChzbW9vdGgpLCBvciBoYXBwZW4gaW5zdGFudGx5IGluIGEgc2luZ2xlIGp1bXAgKGF1dG8sIHRoZSBkZWZhdWx0IHZhbHVlKS5cbiAgICogfSk7XG4gICAqIEBwYXJhbSBvcHRpb25zIC0gYWxsb3dzIHNwZWNpZmljIGNvb3JkaW5hdGVzIHRvIGJlIGRlZmluZWQuXG4gICAqIEByZXR1cm5zIC0gcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uY2UgdGhlIGNvbnRlbnQgaXMgc2Nyb2xsZWQgdG8uXG4gICAqL1xuICBhc3luYyBzY3JvbGxDb250ZW50VG8ob3B0aW9ucykge1xuICAgIHRoaXMucGFuZWxTY3JvbGxFbD8uc2Nyb2xsVG8ob3B0aW9ucyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlckhlYWRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgeyBoZWFkaW5nLCBoZWFkaW5nTGV2ZWwsIGRlc2NyaXB0aW9uLCBoYXNIZWFkZXJDb250ZW50IH0gPSB0aGlzO1xuICAgIGNvbnN0IGhlYWRpbmdOb2RlID0gaGVhZGluZyA/IChoKEhlYWRpbmcsIHsgY2xhc3M6IENTUy5oZWFkaW5nLCBsZXZlbDogaGVhZGluZ0xldmVsIH0sIGhlYWRpbmcpKSA6IG51bGw7XG4gICAgY29uc3QgZGVzY3JpcHRpb25Ob2RlID0gZGVzY3JpcHRpb24gPyBoKFwic3BhblwiLCB7IGNsYXNzOiBDU1MuZGVzY3JpcHRpb24gfSwgZGVzY3JpcHRpb24pIDogbnVsbDtcbiAgICByZXR1cm4gIWhhc0hlYWRlckNvbnRlbnQgJiYgKGhlYWRpbmdOb2RlIHx8IGRlc2NyaXB0aW9uTm9kZSkgPyAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuaGVhZGVyQ29udGVudCwga2V5OiBcImhlYWRlci1jb250ZW50XCIgfSwgaGVhZGluZ05vZGUsIGRlc2NyaXB0aW9uTm9kZSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXJBY3Rpb25CYXIoKSB7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5hY3Rpb25CYXJDb250YWluZXIsIGhpZGRlbjogIXRoaXMuaGFzQWN0aW9uQmFyIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuYWN0aW9uQmFyLCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlQWN0aW9uQmFyU2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlckhlYWRlclNsb3R0ZWRDb250ZW50KCkge1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuaGVhZGVyQ29udGVudCwgaGlkZGVuOiAhdGhpcy5oYXNIZWFkZXJDb250ZW50LCBrZXk6IFwic2xvdHRlZC1oZWFkZXItY29udGVudFwiIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuaGVhZGVyQ29udGVudCwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZUhlYWRlckNvbnRlbnRTbG90Q2hhbmdlIH0pKSk7XG4gIH1cbiAgcmVuZGVySGVhZGVyU3RhcnRBY3Rpb25zKCkge1xuICAgIGNvbnN0IHsgaGFzU3RhcnRBY3Rpb25zIH0gPSB0aGlzO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiB7IFtDU1MuaGVhZGVyQWN0aW9uc1N0YXJ0XTogdHJ1ZSwgW0NTUy5oZWFkZXJBY3Rpb25zXTogdHJ1ZSB9LCBoaWRkZW46ICFoYXNTdGFydEFjdGlvbnMsIGtleTogXCJoZWFkZXItYWN0aW9ucy1zdGFydFwiIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuaGVhZGVyQWN0aW9uc1N0YXJ0LCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlSGVhZGVyQWN0aW9uc1N0YXJ0U2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlckhlYWRlckFjdGlvbnNFbmQoKSB7XG4gICAgY29uc3QgeyBoYXNFbmRBY3Rpb25zLCBtZXNzYWdlcywgY2xvc2FibGUsIGNvbGxhcHNlZCwgY29sbGFwc2VEaXJlY3Rpb24sIGNvbGxhcHNpYmxlLCBoYXNNZW51SXRlbXMsIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgY29sbGFwc2UsIGV4cGFuZCwgY2xvc2UgfSA9IG1lc3NhZ2VzO1xuICAgIGNvbnN0IGljb25zID0gW0lDT05TLmV4cGFuZCwgSUNPTlMuY29sbGFwc2VdO1xuICAgIGlmIChjb2xsYXBzZURpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XG4gICAgICBpY29ucy5yZXZlcnNlKCk7XG4gICAgfVxuICAgIGNvbnN0IGNvbGxhcHNlTm9kZSA9IGNvbGxhcHNpYmxlID8gKGgoXCJjYWxjaXRlLWFjdGlvblwiLCB7IFwiYXJpYS1leHBhbmRlZFwiOiB0b0FyaWFCb29sZWFuKCFjb2xsYXBzZWQpLCBcImFyaWEtbGFiZWxcIjogY29sbGFwc2UsIFwiZGF0YS10ZXN0XCI6IFwiY29sbGFwc2VcIiwgaWNvbjogY29sbGFwc2VkID8gaWNvbnNbMF0gOiBpY29uc1sxXSwgb25DbGljazogdGhpcy5jb2xsYXBzZSwgdGV4dDogY29sbGFwc2UsIHRpdGxlOiBjb2xsYXBzZWQgPyBleHBhbmQgOiBjb2xsYXBzZSB9KSkgOiBudWxsO1xuICAgIGNvbnN0IGNsb3NlTm9kZSA9IGNsb3NhYmxlID8gKGgoXCJjYWxjaXRlLWFjdGlvblwiLCB7IFwiYXJpYS1sYWJlbFwiOiBjbG9zZSwgXCJkYXRhLXRlc3RcIjogXCJjbG9zZVwiLCBpY29uOiBJQ09OUy5jbG9zZSwgb25DbGljazogdGhpcy5jbG9zZSwgdGV4dDogY2xvc2UsIHRpdGxlOiBjbG9zZSB9KSkgOiBudWxsO1xuICAgIGNvbnN0IHNsb3ROb2RlID0gKGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuaGVhZGVyQWN0aW9uc0VuZCwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZUhlYWRlckFjdGlvbnNFbmRTbG90Q2hhbmdlIH0pKTtcbiAgICBjb25zdCBzaG93Q29udGFpbmVyID0gaGFzRW5kQWN0aW9ucyB8fCBjb2xsYXBzZU5vZGUgfHwgY2xvc2VOb2RlIHx8IGhhc01lbnVJdGVtcztcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTLmhlYWRlckFjdGlvbnNFbmRdOiB0cnVlLCBbQ1NTLmhlYWRlckFjdGlvbnNdOiB0cnVlIH0sIGhpZGRlbjogIXNob3dDb250YWluZXIsIGtleTogXCJoZWFkZXItYWN0aW9ucy1lbmRcIiB9LCBzbG90Tm9kZSwgdGhpcy5yZW5kZXJNZW51KCksIGNvbGxhcHNlTm9kZSwgY2xvc2VOb2RlKSk7XG4gIH1cbiAgcmVuZGVyTWVudSgpIHtcbiAgICBjb25zdCB7IGhhc01lbnVJdGVtcywgbWVzc2FnZXMsIG1lbnVPcGVuIH0gPSB0aGlzO1xuICAgIHJldHVybiAoaChcImNhbGNpdGUtYWN0aW9uLW1lbnVcIiwgeyBmbGlwUGxhY2VtZW50czogW1widG9wXCIsIFwiYm90dG9tXCJdLCBoaWRkZW46ICFoYXNNZW51SXRlbXMsIGtleTogXCJtZW51XCIsIGxhYmVsOiBtZXNzYWdlcy5vcHRpb25zLCBvcGVuOiBtZW51T3BlbiwgcGxhY2VtZW50OiBcImJvdHRvbS1lbmRcIiB9LCBoKFwiY2FsY2l0ZS1hY3Rpb25cIiwgeyBpY29uOiBJQ09OUy5tZW51LCBzbG90OiBTTE9UUyQxLnRyaWdnZXIsIHRleHQ6IG1lc3NhZ2VzLm9wdGlvbnMgfSksIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuaGVhZGVyTWVudUFjdGlvbnMsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVIZWFkZXJNZW51QWN0aW9uc1Nsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICByZW5kZXJIZWFkZXJOb2RlKCkge1xuICAgIGNvbnN0IHsgaGFzSGVhZGVyQ29udGVudCwgaGFzU3RhcnRBY3Rpb25zLCBoYXNFbmRBY3Rpb25zLCBjbG9zYWJsZSwgY29sbGFwc2libGUsIGhhc01lbnVJdGVtcywgaGFzQWN0aW9uQmFyLCB9ID0gdGhpcztcbiAgICBjb25zdCBoZWFkZXJDb250ZW50Tm9kZSA9IHRoaXMucmVuZGVySGVhZGVyQ29udGVudCgpO1xuICAgIGNvbnN0IHNob3dIZWFkZXJDb250ZW50ID0gaGFzSGVhZGVyQ29udGVudCB8fFxuICAgICAgISFoZWFkZXJDb250ZW50Tm9kZSB8fFxuICAgICAgaGFzU3RhcnRBY3Rpb25zIHx8XG4gICAgICBoYXNFbmRBY3Rpb25zIHx8XG4gICAgICBjb2xsYXBzaWJsZSB8fFxuICAgICAgY2xvc2FibGUgfHxcbiAgICAgIGhhc01lbnVJdGVtcztcbiAgICB0aGlzLnNob3dIZWFkZXJDb250ZW50ID0gc2hvd0hlYWRlckNvbnRlbnQ7XG4gICAgcmV0dXJuIChoKFwiaGVhZGVyXCIsIHsgY2xhc3M6IENTUy5oZWFkZXIsIGhpZGRlbjogIShzaG93SGVhZGVyQ29udGVudCB8fCBoYXNBY3Rpb25CYXIpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTLmhlYWRlckNvbnRhaW5lcl06IHRydWUsIFtDU1MuaGVhZGVyQ29udGFpbmVyQm9yZGVyRW5kXTogaGFzQWN0aW9uQmFyIH0sIGhpZGRlbjogIXNob3dIZWFkZXJDb250ZW50IH0sIHRoaXMucmVuZGVySGVhZGVyU3RhcnRBY3Rpb25zKCksIHRoaXMucmVuZGVySGVhZGVyU2xvdHRlZENvbnRlbnQoKSwgaGVhZGVyQ29udGVudE5vZGUsIHRoaXMucmVuZGVySGVhZGVyQWN0aW9uc0VuZCgpKSwgdGhpcy5yZW5kZXJBY3Rpb25CYXIoKSkpO1xuICB9XG4gIHJlbmRlckZvb3Rlck5vZGUoKSB7XG4gICAgY29uc3QgeyBoYXNGb290ZXJDb250ZW50LCBoYXNGb290ZXJBY3Rpb25zIH0gPSB0aGlzO1xuICAgIGNvbnN0IHNob3dGb290ZXIgPSBoYXNGb290ZXJDb250ZW50IHx8IGhhc0Zvb3RlckFjdGlvbnM7XG4gICAgcmV0dXJuIChoKFwiZm9vdGVyXCIsIHsgY2xhc3M6IENTUy5mb290ZXIsIGhpZGRlbjogIXNob3dGb290ZXIgfSwgaChcInNsb3RcIiwgeyBrZXk6IFwiZm9vdGVyLXNsb3RcIiwgbmFtZTogU0xPVFMuZm9vdGVyLCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlRm9vdGVyU2xvdENoYW5nZSB9KSwgaChcInNsb3RcIiwgeyBrZXk6IFwiZm9vdGVyLWFjdGlvbnMtc2xvdFwiLCBuYW1lOiBTTE9UUy5mb290ZXJBY3Rpb25zLCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlRm9vdGVyQWN0aW9uc1Nsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICByZW5kZXJDb250ZW50KCkge1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGVudFdyYXBwZXIsIGhpZGRlbjogdGhpcy5jb2xsYXBzaWJsZSAmJiB0aGlzLmNvbGxhcHNlZCwgb25TY3JvbGw6IHRoaXMucGFuZWxTY3JvbGxIYW5kbGVyLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zZXRQYW5lbFNjcm9sbEVsIH0sIGgoXCJzbG90XCIsIG51bGwpLCB0aGlzLnJlbmRlckZhYigpKSk7XG4gIH1cbiAgcmVuZGVyRmFiKCkge1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuZmFiQ29udGFpbmVyLCBoaWRkZW46ICF0aGlzLmhhc0ZhYiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmZhYiwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZUZhYlNsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBwYW5lbEtleURvd25IYW5kbGVyLCBjbG9zZWQsIGNsb3NhYmxlIH0gPSB0aGlzO1xuICAgIGNvbnN0IHBhbmVsTm9kZSA9IChoKFwiYXJ0aWNsZVwiLCB7IFwiYXJpYS1idXN5XCI6IHRvQXJpYUJvb2xlYW4obG9hZGluZyksIGNsYXNzOiBDU1MuY29udGFpbmVyLCBoaWRkZW46IGNsb3NlZCwgb25LZXlEb3duOiBwYW5lbEtleURvd25IYW5kbGVyLCB0YWJJbmRleDogY2xvc2FibGUgPyAwIDogLTEsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiB0aGlzLnNldENvbnRhaW5lclJlZiB9LCB0aGlzLnJlbmRlckhlYWRlck5vZGUoKSwgdGhpcy5yZW5kZXJDb250ZW50KCksIHRoaXMucmVuZGVyRm9vdGVyTm9kZSgpKSk7XG4gICAgcmV0dXJuIChoKEZyYWdtZW50LCBudWxsLCBsb2FkaW5nID8gaChcImNhbGNpdGUtc2NyaW1cIiwgeyBsb2FkaW5nOiBsb2FkaW5nIH0pIDogbnVsbCwgcGFuZWxOb2RlKSk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gcGFuZWxDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtcGFuZWxcIiwge1xuICAgIFwiY2xvc2VkXCI6IFsxNTQwXSxcbiAgICBcImRpc2FibGVkXCI6IFs1MTZdLFxuICAgIFwiY2xvc2FibGVcIjogWzUxNl0sXG4gICAgXCJjb2xsYXBzZWRcIjogWzUxNl0sXG4gICAgXCJjb2xsYXBzZURpcmVjdGlvblwiOiBbMSwgXCJjb2xsYXBzZS1kaXJlY3Rpb25cIl0sXG4gICAgXCJjb2xsYXBzaWJsZVwiOiBbNTE2XSxcbiAgICBcImhlYWRpbmdMZXZlbFwiOiBbNTE0LCBcImhlYWRpbmctbGV2ZWxcIl0sXG4gICAgXCJsb2FkaW5nXCI6IFs1MTZdLFxuICAgIFwiaGVhZGluZ1wiOiBbMV0sXG4gICAgXCJkZXNjcmlwdGlvblwiOiBbMV0sXG4gICAgXCJtZW51T3BlblwiOiBbNTE2LCBcIm1lbnUtb3BlblwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogWzEwNDBdLFxuICAgIFwibWVzc2FnZXNcIjogWzEwNDBdLFxuICAgIFwiaGFzU3RhcnRBY3Rpb25zXCI6IFszMl0sXG4gICAgXCJoYXNFbmRBY3Rpb25zXCI6IFszMl0sXG4gICAgXCJoYXNNZW51SXRlbXNcIjogWzMyXSxcbiAgICBcImhhc0hlYWRlckNvbnRlbnRcIjogWzMyXSxcbiAgICBcImhhc0FjdGlvbkJhclwiOiBbMzJdLFxuICAgIFwiaGFzRm9vdGVyQ29udGVudFwiOiBbMzJdLFxuICAgIFwiaGFzRm9vdGVyQWN0aW9uc1wiOiBbMzJdLFxuICAgIFwiaGFzRmFiXCI6IFszMl0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwic2hvd0hlYWRlckNvbnRlbnRcIjogWzMyXSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF0sXG4gICAgXCJzY3JvbGxDb250ZW50VG9cIjogWzY0XVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXBhbmVsXCIsIFwiY2FsY2l0ZS1hY3Rpb25cIiwgXCJjYWxjaXRlLWFjdGlvbi1tZW51XCIsIFwiY2FsY2l0ZS1pY29uXCIsIFwiY2FsY2l0ZS1sb2FkZXJcIiwgXCJjYWxjaXRlLXBvcG92ZXJcIiwgXCJjYWxjaXRlLXNjcmltXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLXBhbmVsXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgUGFuZWwpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtYWN0aW9uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDYoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWFjdGlvbi1tZW51XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDUoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWljb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNCgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtbG9hZGVyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDMoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLXBvcG92ZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtc2NyaW1cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IFBhbmVsIGFzIFAsIFNMT1RTIGFzIFMsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgaCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuaW1wb3J0IHsgdyBhcyBzbG90Q2hhbmdlSGFzQ29udGVudCB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQxIH0gZnJvbSAnLi9sb2FkZXIuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIHNjcmltOiBcInNjcmltXCIsXG4gIGNvbnRlbnQ6IFwiY29udGVudFwiLFxufTtcbmNvbnN0IEJSRUFLUE9JTlRTID0ge1xuICBzOiA3MixcbiAgLy8gbWVkaXVtIGlzIGFzc3VtZWQgZGVmYXVsdC5cbiAgbDogNDgwLCAvLyBHcmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gNDgwcHguXG59O1xuXG5jb25zdCBzY3JpbUNzcyA9IFwiOmhvc3R7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQ6MHB4O3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1vdmVybGF5KTtkaXNwbGF5OmZsZXg7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOnN0cmV0Y2h9QGtleWZyYW1lcyBjYWxjaXRlLXNjcmltLWZhZGUtaW57MCV7LS10dy1iZy1vcGFjaXR5OjB9MTAwJXstLXR3LXRleHQtb3BhY2l0eToxfX0uc2NyaW17cG9zaXRpb246YWJzb2x1dGU7aW5zZXQ6MHB4O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24tY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7b3ZlcmZsb3c6aGlkZGVuO2FuaW1hdGlvbjpjYWxjaXRlLXNjcmltLWZhZGUtaW4gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bSkgZWFzZS1pbi1vdXQ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXNjcmltLWJhY2tncm91bmQsIHZhcigtLWNhbGNpdGUtc2NyaW0tYmFja2dyb3VuZC1pbnRlcm5hbCkpfS5jb250ZW50e3BhZGRpbmc6MXJlbX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgU2NyaW0gPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcInJlc2l6ZVwiLCAoKSA9PiB0aGlzLmhhbmRsZVJlc2l6ZSgpKTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmhhbmRsZURlZmF1bHRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc0NvbnRlbnQgPSBzbG90Q2hhbmdlSGFzQ29udGVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLnN0b3JlTG9hZGVyRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMubG9hZGVyRWwgPSBlbDtcbiAgICAgIHRoaXMuaGFuZGxlUmVzaXplKCk7XG4gICAgfTtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvYWRlclNjYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgICB0aGlzLmhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGhhc0NvbnRlbnQsIGxvYWRpbmcsIG1lc3NhZ2VzIH0gPSB0aGlzO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1Muc2NyaW0gfSwgbG9hZGluZyA/IChoKFwiY2FsY2l0ZS1sb2FkZXJcIiwgeyBsYWJlbDogbWVzc2FnZXMubG9hZGluZywgc2NhbGU6IHRoaXMubG9hZGVyU2NhbGUsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiB0aGlzLnN0b3JlTG9hZGVyRWwgfSkpIDogbnVsbCwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGVudCwgaGlkZGVuOiAhaGFzQ29udGVudCB9LCBoKFwic2xvdFwiLCB7IG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVEZWZhdWx0U2xvdENoYW5nZSB9KSkpKTtcbiAgfVxuICBnZXRTY2FsZShzaXplKSB7XG4gICAgaWYgKHNpemUgPCBCUkVBS1BPSU5UUy5zKSB7XG4gICAgICByZXR1cm4gXCJzXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNpemUgPj0gQlJFQUtQT0lOVFMubCkge1xuICAgICAgcmV0dXJuIFwibFwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBcIm1cIjtcbiAgICB9XG4gIH1cbiAgaGFuZGxlUmVzaXplKCkge1xuICAgIGNvbnN0IHsgbG9hZGVyRWwsIGVsIH0gPSB0aGlzO1xuICAgIGlmICghbG9hZGVyRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5sb2FkZXJTY2FsZSA9IHRoaXMuZ2V0U2NhbGUoTWF0aC5taW4oZWwuY2xpZW50SGVpZ2h0LCBlbC5jbGllbnRXaWR0aCkgPz8gMCk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gc2NyaW1Dc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtc2NyaW1cIiwge1xuICAgIFwibG9hZGluZ1wiOiBbNTE2XSxcbiAgICBcIm1lc3NhZ2VzXCI6IFsxMDQwXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogWzEwNDBdLFxuICAgIFwibG9hZGVyU2NhbGVcIjogWzMyXSxcbiAgICBcImRlZmF1bHRNZXNzYWdlc1wiOiBbMzJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFszMl0sXG4gICAgXCJoYXNDb250ZW50XCI6IFszMl1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1zY3JpbVwiLCBcImNhbGNpdGUtbG9hZGVyXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLXNjcmltXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgU2NyaW0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtbG9hZGVyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBTY3JpbSBhcyBTLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==