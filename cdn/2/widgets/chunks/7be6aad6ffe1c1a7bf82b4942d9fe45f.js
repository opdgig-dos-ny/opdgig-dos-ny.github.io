(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_stencil_core_internal_client_lazy_recursive_entry_js_include_entry_js_exclude_sy-ee4d83"],{

/***/ "./node_modules/@stencil/core/internal/client lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/@stencil/core/internal/client lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-action-pad.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-action-pad.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteActionPad: () => (/* binding */ CalciteActionPad),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditionalSlot.js */ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _ExpandToggle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ExpandToggle.js */ "./node_modules/@esri/calcite-components/dist/components/ExpandToggle.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _action_group_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./action-group.js */ "./node_modules/@esri/calcite-components/dist/components/action-group.js");
/* harmony import */ var _action_menu_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./action-menu.js */ "./node_modules/@esri/calcite-components/dist/components/action-menu.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _popover_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./popover.js */ "./node_modules/@esri/calcite-components/dist/components/popover.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */















const CSS = {
  actionGroupEnd: "action-group--end",
  container: "container",
};
const SLOTS = {
  expandTooltip: "expand-tooltip",
};

const actionPadCss = ":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:block}@keyframes in{0%{opacity:0}100%{opacity:1}}:host{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:0.125rem;--calcite-action-pad-expanded-max-width:auto;background:transparent}:host([expanded][layout=vertical]) .container{max-inline-size:var(--calcite-action-pad-expanded-max-width)}::slotted(calcite-action-group){border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-block:0px}.container{display:inline-flex;flex-direction:column;overflow-y:auto;border-radius:0.25rem;background-color:var(--calcite-ui-background);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.action-group--bottom{flex-grow:1;justify-content:flex-end;padding-block-end:0px}:host([layout=horizontal]) .container{flex-direction:row}:host([layout=horizontal]) .container .action-group--bottom{padding:0px}:host([layout=horizontal]) .container ::slotted(calcite-action-group){border-width:0px;padding:0px;border-inline-end-width:1px}::slotted(calcite-action-group:last-child){border-block-end-width:0px}:host([hidden]){display:none}[hidden]{display:none}";

const ActionPad = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteActionPadToggle = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.createEvent)(this, "calciteActionPadToggle", 6);
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_6__.c)("mutation", () => this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group"))));
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.actionMenuOpenHandler = (event) => {
      if (event.target.menuOpen) {
        const composedPath = event.composedPath();
        Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((group) => {
          if (!composedPath.includes(group)) {
            group.menuOpen = false;
          }
        });
      }
    };
    this.toggleExpand = () => {
      this.expanded = !this.expanded;
      this.calciteActionPadToggle.emit();
    };
    this.setExpandToggleRef = (el) => {
      this.expandToggleEl = el;
    };
    this.handleDefaultSlotChange = (event) => {
      const groups = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.s)(event).filter((el) => el?.matches("calcite-action-group"));
      this.setGroupLayout(groups);
    };
    this.handleTooltipSlotChange = (event) => {
      const tooltips = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.s)(event).filter((el) => el?.matches("calcite-tooltip"));
      this.expandTooltip = tooltips[0];
    };
    this.actionsEndGroupLabel = undefined;
    this.expandDisabled = false;
    this.expanded = false;
    this.layout = "vertical";
    this.position = undefined;
    this.scale = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.expandTooltip = undefined;
    this.effectiveLocale = "";
    this.defaultMessages = undefined;
  }
  expandedHandler(expanded) {
    (0,_ExpandToggle_js__WEBPACK_IMPORTED_MODULE_5__.t)({ el: this.el, expanded });
  }
  layoutHandler() {
    this.updateGroups();
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
  }
  disconnectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
    const { el, expanded } = this;
    (0,_ExpandToggle_js__WEBPACK_IMPORTED_MODULE_5__.t)({ el, expanded });
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
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
    this.el?.focus();
  }
  updateGroups() {
    this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")));
  }
  setGroupLayout(groups) {
    groups.forEach((group) => (group.layout = this.layout));
  }
  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------
  renderBottomActionGroup() {
    const { expanded, expandDisabled, messages, el, position, toggleExpand, scale, layout, actionsEndGroupLabel, } = this;
    const expandToggleNode = !expandDisabled ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)(_ExpandToggle_js__WEBPACK_IMPORTED_MODULE_5__.E, { collapseText: messages.collapse, el: el, expandText: messages.expand, expanded: expanded, position: position, scale: scale, toggle: toggleExpand, tooltip: this.expandTooltip,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setExpandToggleRef })) : null;
    return expandToggleNode ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("calcite-action-group", { class: CSS.actionGroupEnd, label: actionsEndGroupLabel, layout: layout, scale: scale }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { name: SLOTS.expandTooltip, onSlotchange: this.handleTooltipSlotChange }), expandToggleNode)) : null;
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.Host, { onCalciteActionMenuOpen: this.actionMenuOpenHandler }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("div", { class: CSS.container }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot", { onSlotchange: this.handleDefaultSlotChange }), this.renderBottomActionGroup())));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "expanded": ["expandedHandler"],
    "layout": ["layoutHandler"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return actionPadCss; }
}, [17, "calcite-action-pad", {
    "actionsEndGroupLabel": [1, "actions-end-group-label"],
    "expandDisabled": [516, "expand-disabled"],
    "expanded": [1540],
    "layout": [513],
    "position": [513],
    "scale": [513],
    "messages": [1040],
    "messageOverrides": [1040],
    "expandTooltip": [32],
    "effectiveLocale": [32],
    "defaultMessages": [32],
    "setFocus": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-action-pad", "calcite-action", "calcite-action-group", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-popover"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-action-pad":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionPad);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        (0,_action_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
    case "calcite-action-group":
      if (!customElements.get(tagName)) {
        (0,_action_group_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
    case "calcite-action-menu":
      if (!customElements.get(tagName)) {
        (0,_action_menu_js__WEBPACK_IMPORTED_MODULE_9__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_10__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_11__.d)();
      }
      break;
    case "calcite-popover":
      if (!customElements.get(tagName)) {
        (0,_popover_js__WEBPACK_IMPORTED_MODULE_12__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteActionPad = ActionPad;
const defineCustomElement = defineCustomElement$1;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvN2JlNmFhZDZmZmUxYzFhN2JmODJiNDk0MmQ5ZmU0NWYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytHO0FBQ007QUFDdkQ7QUFDZ0Q7QUFDaEM7QUFDb0M7QUFDaEM7QUFDN0I7QUFDSTtBQUNNO0FBQ0Q7QUFDUDtBQUNFO0FBQ0M7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixzQkFBc0IsZ0RBQWdELCtCQUErQixzQ0FBc0MsUUFBUSxzQkFBc0IsTUFBTSxjQUFjLGNBQWMsR0FBRyxVQUFVLEtBQUssV0FBVyxNQUFNLHVFQUF1RSx1QkFBdUIsNkNBQTZDLHVCQUF1Qiw4Q0FBOEMsNkRBQTZELGdDQUFnQyxpQkFBaUIsMkJBQTJCLG1CQUFtQix3Q0FBd0Msa0JBQWtCLFdBQVcsb0JBQW9CLHNCQUFzQixnQkFBZ0Isc0JBQXNCLDhDQUE4QyxvRkFBb0YsbUdBQW1HLHVHQUF1RyxzQkFBc0IsWUFBWSx5QkFBeUIsc0JBQXNCLHNDQUFzQyxtQkFBbUIsNERBQTRELFlBQVksc0VBQXNFLGlCQUFpQixZQUFZLDRCQUE0QiwyQ0FBMkMsMkJBQTJCLGdCQUFnQixhQUFhLFNBQVMsYUFBYTs7QUFFamlELGdDQUFnQywyRkFBa0IsZUFBZSxnRkFBVztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvRkFBVztBQUM3Qyw0QkFBNEIsZ0RBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMENBQTZCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQXFCLEdBQUcsdUJBQXVCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBDQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBK0I7QUFDbkMsSUFBSSw2Q0FBZ0I7QUFDcEIsSUFBSSwwQ0FBZTtBQUNuQjtBQUNBO0FBQ0EsSUFBSSw2Q0FBbUI7QUFDdkIsSUFBSSwwQ0FBa0I7QUFDdEIsSUFBSSxzREFBa0M7QUFDdEM7QUFDQTtBQUNBLElBQUksK0NBQXNCO0FBQzFCLFlBQVksZUFBZTtBQUMzQixJQUFJLG1EQUFxQixHQUFHLGNBQWM7QUFDMUMsVUFBVSwwQ0FBYTtBQUN2QjtBQUNBO0FBQ0EsSUFBSSwrQ0FBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtDQUFrQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1R0FBdUc7QUFDbkgsZ0RBQWdELDBFQUFDLENBQUMsK0NBQVksSUFBSTtBQUNsRTtBQUNBLG9DQUFvQztBQUNwQywrQkFBK0IsMEVBQUMsMkJBQTJCLHNGQUFzRixFQUFFLDBFQUFDLFdBQVcsdUVBQXVFO0FBQ3RPO0FBQ0E7QUFDQSxZQUFZLDBFQUFDLENBQUMseUVBQUksSUFBSSxxREFBcUQsRUFBRSwwRUFBQyxVQUFVLHNCQUFzQixFQUFFLDBFQUFDLFdBQVcsNENBQTRDO0FBQ3hLO0FBQ0EsZ0NBQWdDO0FBQ2hDLDRCQUE0QjtBQUM1QixhQUFhO0FBQ2IsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2Q0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0Q0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhDQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQXFCO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVpRCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvIGxhenkgXlxcLlxcLy4qXFwuZW50cnlcXC5qcy4qJCBpbmNsdWRlOiBcXC5lbnRyeVxcLmpzJCBleGNsdWRlOiBcXC5zeXN0ZW1cXC5lbnRyeVxcLmpzJCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLWFjdGlvbi1wYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50IGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmVudHJ5XFxcXC5qcy4qJCBpbmNsdWRlOiBcXFxcLmVudHJ5XFxcXC5qcyQgZXhjbHVkZTogXFxcXC5zeXN0ZW1cXFxcLmVudHJ5XFxcXC5qcyRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0OyIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoLCBIb3N0IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50LCBkIGFzIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgfSBmcm9tICcuL2NvbmRpdGlvbmFsU2xvdC5qcyc7XG5pbXBvcnQgeyBzIGFzIHNsb3RDaGFuZ2VHZXRBc3NpZ25lZEVsZW1lbnRzIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYSBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBzIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRGb2N1c2FibGUgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMgfSBmcm9tICcuL3Q5bi5qcyc7XG5pbXBvcnQgeyB0IGFzIHRvZ2dsZUNoaWxkQWN0aW9uVGV4dCwgRSBhcyBFeHBhbmRUb2dnbGUgfSBmcm9tICcuL0V4cGFuZFRvZ2dsZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDcgfSBmcm9tICcuL2FjdGlvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNiB9IGZyb20gJy4vYWN0aW9uLWdyb3VwLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ1IH0gZnJvbSAnLi9hY3Rpb24tbWVudS5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNCB9IGZyb20gJy4vaWNvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMyB9IGZyb20gJy4vbG9hZGVyLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9wb3BvdmVyLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBhY3Rpb25Hcm91cEVuZDogXCJhY3Rpb24tZ3JvdXAtLWVuZFwiLFxuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIGV4cGFuZFRvb2x0aXA6IFwiZXhwYW5kLXRvb2x0aXBcIixcbn07XG5cbmNvbnN0IGFjdGlvblBhZENzcyA9IFwiOmhvc3R7Ym94LXNpemluZzpib3JkZXItYm94O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpfTpob3N0ICp7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0e2Rpc3BsYXk6YmxvY2t9QGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fTpob3N0e2FuaW1hdGlvbjppbiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdykgZWFzZS1pbi1vdXQ7Ym9yZGVyLXJhZGl1czowLjEyNXJlbTstLWNhbGNpdGUtYWN0aW9uLXBhZC1leHBhbmRlZC1tYXgtd2lkdGg6YXV0bztiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fTpob3N0KFtleHBhbmRlZF1bbGF5b3V0PXZlcnRpY2FsXSkgLmNvbnRhaW5lcnttYXgtaW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1hY3Rpb24tcGFkLWV4cGFuZGVkLW1heC13aWR0aCl9OjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uLWdyb3VwKXtib3JkZXItd2lkdGg6MHB4O2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7cGFkZGluZy1ibG9jazowcHh9LmNvbnRhaW5lcntkaXNwbGF5OmlubGluZS1mbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtvdmVyZmxvdy15OmF1dG87Ym9yZGVyLXJhZGl1czowLjI1cmVtO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1iYWNrZ3JvdW5kKTstLXR3LXNoYWRvdzowIDZweCAyMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDRweCAxMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA4KTstLXR3LXNoYWRvdy1jb2xvcmVkOjAgNnB4IDIwcHggLTRweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDRweCAxMnB4IC0ycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9LmFjdGlvbi1ncm91cC0tYm90dG9te2ZsZXgtZ3JvdzoxO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDtwYWRkaW5nLWJsb2NrLWVuZDowcHh9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXSkgLmNvbnRhaW5lcntmbGV4LWRpcmVjdGlvbjpyb3d9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXSkgLmNvbnRhaW5lciAuYWN0aW9uLWdyb3VwLS1ib3R0b217cGFkZGluZzowcHh9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXSkgLmNvbnRhaW5lciA6OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24tZ3JvdXApe2JvcmRlci13aWR0aDowcHg7cGFkZGluZzowcHg7Ym9yZGVyLWlubGluZS1lbmQtd2lkdGg6MXB4fTo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbi1ncm91cDpsYXN0LWNoaWxkKXtib3JkZXItYmxvY2stZW5kLXdpZHRoOjBweH06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgQWN0aW9uUGFkID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVBY3Rpb25QYWRUb2dnbGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVBY3Rpb25QYWRUb2dnbGVcIiwgNik7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCAoKSA9PiB0aGlzLnNldEdyb3VwTGF5b3V0KEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS1hY3Rpb24tZ3JvdXBcIikpKSk7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5hY3Rpb25NZW51T3BlbkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQubWVudU9wZW4pIHtcbiAgICAgICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG4gICAgICAgIEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS1hY3Rpb24tZ3JvdXBcIikpLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICAgICAgaWYgKCFjb21wb3NlZFBhdGguaW5jbHVkZXMoZ3JvdXApKSB7XG4gICAgICAgICAgICBncm91cC5tZW51T3BlbiA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnRvZ2dsZUV4cGFuZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcbiAgICAgIHRoaXMuY2FsY2l0ZUFjdGlvblBhZFRvZ2dsZS5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLnNldEV4cGFuZFRvZ2dsZVJlZiA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5leHBhbmRUb2dnbGVFbCA9IGVsO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVEZWZhdWx0U2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZ3JvdXBzID0gc2xvdENoYW5nZUdldEFzc2lnbmVkRWxlbWVudHMoZXZlbnQpLmZpbHRlcigoZWwpID0+IGVsPy5tYXRjaGVzKFwiY2FsY2l0ZS1hY3Rpb24tZ3JvdXBcIikpO1xuICAgICAgdGhpcy5zZXRHcm91cExheW91dChncm91cHMpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVUb29sdGlwU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdG9vbHRpcHMgPSBzbG90Q2hhbmdlR2V0QXNzaWduZWRFbGVtZW50cyhldmVudCkuZmlsdGVyKChlbCkgPT4gZWw/Lm1hdGNoZXMoXCJjYWxjaXRlLXRvb2x0aXBcIikpO1xuICAgICAgdGhpcy5leHBhbmRUb29sdGlwID0gdG9vbHRpcHNbMF07XG4gICAgfTtcbiAgICB0aGlzLmFjdGlvbnNFbmRHcm91cExhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZXhwYW5kRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5sYXlvdXQgPSBcInZlcnRpY2FsXCI7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNjYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZXhwYW5kVG9vbHRpcCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgZXhwYW5kZWRIYW5kbGVyKGV4cGFuZGVkKSB7XG4gICAgdG9nZ2xlQ2hpbGRBY3Rpb25UZXh0KHsgZWw6IHRoaXMuZWwsIGV4cGFuZGVkIH0pO1xuICB9XG4gIGxheW91dEhhbmRsZXIoKSB7XG4gICAgdGhpcy51cGRhdGVHcm91cHMoKTtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIGNvbnN0IHsgZWwsIGV4cGFuZGVkIH0gPSB0aGlzO1xuICAgIHRvZ2dsZUNoaWxkQWN0aW9uVGV4dCh7IGVsLCBleHBhbmRlZCB9KTtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQncyBmaXJzdCBmb2N1c2FibGUgZWxlbWVudC5cbiAgICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAgICB0aGlzLmVsPy5mb2N1cygpO1xuICB9XG4gIHVwZGF0ZUdyb3VwcygpIHtcbiAgICB0aGlzLnNldEdyb3VwTGF5b3V0KEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS1hY3Rpb24tZ3JvdXBcIikpKTtcbiAgfVxuICBzZXRHcm91cExheW91dChncm91cHMpIHtcbiAgICBncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IChncm91cC5sYXlvdXQgPSB0aGlzLmxheW91dCkpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBDb21wb25lbnQgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJCb3R0b21BY3Rpb25Hcm91cCgpIHtcbiAgICBjb25zdCB7IGV4cGFuZGVkLCBleHBhbmREaXNhYmxlZCwgbWVzc2FnZXMsIGVsLCBwb3NpdGlvbiwgdG9nZ2xlRXhwYW5kLCBzY2FsZSwgbGF5b3V0LCBhY3Rpb25zRW5kR3JvdXBMYWJlbCwgfSA9IHRoaXM7XG4gICAgY29uc3QgZXhwYW5kVG9nZ2xlTm9kZSA9ICFleHBhbmREaXNhYmxlZCA/IChoKEV4cGFuZFRvZ2dsZSwgeyBjb2xsYXBzZVRleHQ6IG1lc3NhZ2VzLmNvbGxhcHNlLCBlbDogZWwsIGV4cGFuZFRleHQ6IG1lc3NhZ2VzLmV4cGFuZCwgZXhwYW5kZWQ6IGV4cGFuZGVkLCBwb3NpdGlvbjogcG9zaXRpb24sIHNjYWxlOiBzY2FsZSwgdG9nZ2xlOiB0b2dnbGVFeHBhbmQsIHRvb2x0aXA6IHRoaXMuZXhwYW5kVG9vbHRpcCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IHRoaXMuc2V0RXhwYW5kVG9nZ2xlUmVmIH0pKSA6IG51bGw7XG4gICAgcmV0dXJuIGV4cGFuZFRvZ2dsZU5vZGUgPyAoaChcImNhbGNpdGUtYWN0aW9uLWdyb3VwXCIsIHsgY2xhc3M6IENTUy5hY3Rpb25Hcm91cEVuZCwgbGFiZWw6IGFjdGlvbnNFbmRHcm91cExhYmVsLCBsYXlvdXQ6IGxheW91dCwgc2NhbGU6IHNjYWxlIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuZXhwYW5kVG9vbHRpcCwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZVRvb2x0aXBTbG90Q2hhbmdlIH0pLCBleHBhbmRUb2dnbGVOb2RlKSkgOiBudWxsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNhbGNpdGVBY3Rpb25NZW51T3BlbjogdGhpcy5hY3Rpb25NZW51T3BlbkhhbmRsZXIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGFpbmVyIH0sIGgoXCJzbG90XCIsIHsgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZURlZmF1bHRTbG90Q2hhbmdlIH0pLCB0aGlzLnJlbmRlckJvdHRvbUFjdGlvbkdyb3VwKCkpKSk7XG4gIH1cbiAgc3RhdGljIGdldCBkZWxlZ2F0ZXNGb2N1cygpIHsgcmV0dXJuIHRydWU7IH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImV4cGFuZGVkXCI6IFtcImV4cGFuZGVkSGFuZGxlclwiXSxcbiAgICBcImxheW91dFwiOiBbXCJsYXlvdXRIYW5kbGVyXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBhY3Rpb25QYWRDc3M7IH1cbn0sIFsxNywgXCJjYWxjaXRlLWFjdGlvbi1wYWRcIiwge1xuICAgIFwiYWN0aW9uc0VuZEdyb3VwTGFiZWxcIjogWzEsIFwiYWN0aW9ucy1lbmQtZ3JvdXAtbGFiZWxcIl0sXG4gICAgXCJleHBhbmREaXNhYmxlZFwiOiBbNTE2LCBcImV4cGFuZC1kaXNhYmxlZFwiXSxcbiAgICBcImV4cGFuZGVkXCI6IFsxNTQwXSxcbiAgICBcImxheW91dFwiOiBbNTEzXSxcbiAgICBcInBvc2l0aW9uXCI6IFs1MTNdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFsxMDQwXSxcbiAgICBcImV4cGFuZFRvb2x0aXBcIjogWzMyXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1hY3Rpb24tcGFkXCIsIFwiY2FsY2l0ZS1hY3Rpb25cIiwgXCJjYWxjaXRlLWFjdGlvbi1ncm91cFwiLCBcImNhbGNpdGUtYWN0aW9uLW1lbnVcIiwgXCJjYWxjaXRlLWljb25cIiwgXCJjYWxjaXRlLWxvYWRlclwiLCBcImNhbGNpdGUtcG9wb3ZlclwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1hY3Rpb24tcGFkXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgQWN0aW9uUGFkKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWFjdGlvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ3KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1hY3Rpb24tZ3JvdXBcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtYWN0aW9uLW1lbnVcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtcG9wb3ZlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlQWN0aW9uUGFkID0gQWN0aW9uUGFkO1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IGRlZmluZUN1c3RvbUVsZW1lbnQkMTtcblxuZXhwb3J0IHsgQ2FsY2l0ZUFjdGlvblBhZCwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9