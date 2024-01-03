"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-action-bar_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-action-bar.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-action-bar.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteActionBar: () => (/* binding */ CalciteActionBar),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditionalSlot.js */ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _ExpandToggle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ExpandToggle.js */ "./node_modules/@esri/calcite-components/dist/components/ExpandToggle.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _action_group_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./action-group.js */ "./node_modules/@esri/calcite-components/dist/components/action-group.js");
/* harmony import */ var _action_menu_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./action-menu.js */ "./node_modules/@esri/calcite-components/dist/components/action-menu.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _popover_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./popover.js */ "./node_modules/@esri/calcite-components/dist/components/popover.js");
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./debounce.js */ "./node_modules/@esri/calcite-components/dist/components/debounce.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
















const CSS = {
  actionGroupEnd: "action-group--end",
};
const SLOTS = {
  actionsEnd: "actions-end",
  bottomActions: "bottom-actions",
  expandTooltip: "expand-tooltip",
};

const actionBarCss = ":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;--calcite-action-bar-expanded-max-width:auto}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=vertical][overflow-actions-disabled]){overflow-y:auto}:host([layout=horizontal][overflow-actions-disabled]){overflow-x:auto}:host([layout=vertical][expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width)}::slotted(calcite-action-group){border-block-end:1px solid var(--calcite-ui-border-3)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-block-end:0;border-inline-end:1px solid var(--calcite-ui-border-3)}:host([layout=horizontal][expand-disabled]) ::slotted(calcite-action-group:last-of-type){border-inline-end:0}::slotted(calcite-action-group:last-child){border-block-end:0;border-inline-end:0}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}";

const ActionBar = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteActionBarToggle = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.createEvent)(this, "calciteActionBarToggle", 6);
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_4__.c)("mutation", () => {
      const { el, expanded } = this;
      (0,_ExpandToggle_js__WEBPACK_IMPORTED_MODULE_6__.t)({ el, expanded });
      this.overflowActions();
    });
    this.resizeObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_4__.c)("resize", (entries) => this.resizeHandlerEntries(entries));
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
    this.resizeHandlerEntries = (entries) => {
      entries.forEach(this.resizeHandler);
    };
    this.resizeHandler = (entry) => {
      const { width, height } = entry.contentRect;
      this.resize({ width, height });
    };
    this.resize = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_13__.d)(({ width, height }) => {
      const { el, expanded, expandDisabled, layout, overflowActionsDisabled } = this;
      if (overflowActionsDisabled ||
        (layout === "vertical" && !height) ||
        (layout === "horizontal" && !width)) {
        return;
      }
      const actions = (0,_ExpandToggle_js__WEBPACK_IMPORTED_MODULE_6__.q)(el);
      const actionCount = expandDisabled ? actions.length : actions.length + 1;
      const actionGroups = Array.from(el.querySelectorAll("calcite-action-group"));
      this.setGroupLayout(actionGroups);
      const groupCount = this.hasActionsEnd || this.hasBottomActions || !expandDisabled
        ? actionGroups.length + 1
        : actionGroups.length;
      const { actionHeight, actionWidth } = (0,_ExpandToggle_js__WEBPACK_IMPORTED_MODULE_6__.g)(actions);
      const overflowCount = (0,_ExpandToggle_js__WEBPACK_IMPORTED_MODULE_6__.b)({
        layout,
        actionCount,
        actionHeight,
        actionWidth,
        height,
        width,
        groupCount,
      });
      (0,_ExpandToggle_js__WEBPACK_IMPORTED_MODULE_6__.a)({
        actionGroups,
        expanded,
        overflowCount,
      });
    }, _ExpandToggle_js__WEBPACK_IMPORTED_MODULE_6__.o);
    this.toggleExpand = () => {
      this.expanded = !this.expanded;
      this.calciteActionBarToggle.emit();
    };
    this.setExpandToggleRef = (el) => {
      this.expandToggleEl = el;
    };
    this.handleDefaultSlotChange = (event) => {
      const groups = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.s)(event).filter((el) => el.matches("calcite-action-group"));
      this.setGroupLayout(groups);
    };
    this.handleActionsEndSlotChange = (event) => {
      this.hasActionsEnd = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.e)(event);
    };
    this.handleBottomActionsSlotChange = (event) => {
      this.hasBottomActions = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.e)(event);
    };
    this.handleTooltipSlotChange = (event) => {
      const tooltips = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.s)(event).filter((el) => el?.matches("calcite-tooltip"));
      this.expandTooltip = tooltips[0];
    };
    this.actionsEndGroupLabel = undefined;
    this.expandDisabled = false;
    this.expanded = false;
    this.layout = "vertical";
    this.overflowActionsDisabled = false;
    this.position = undefined;
    this.scale = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = undefined;
    this.hasActionsEnd = false;
    this.hasBottomActions = false;
    this.expandTooltip = undefined;
    this.defaultMessages = undefined;
  }
  expandHandler() {
    this.overflowActions();
  }
  expandedHandler() {
    const { el, expanded } = this;
    (0,_ExpandToggle_js__WEBPACK_IMPORTED_MODULE_6__.t)({ el, expanded });
    this.overflowActions();
  }
  layoutHandler() {
    this.updateGroups();
  }
  overflowDisabledHandler(overflowActionsDisabled) {
    if (overflowActionsDisabled) {
      this.resizeObserver?.disconnect();
      return;
    }
    this.resizeObserver?.observe(this.el);
    this.overflowActions();
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_5__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  componentDidLoad() {
    const { el, expanded } = this;
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
    (0,_ExpandToggle_js__WEBPACK_IMPORTED_MODULE_6__.t)({ el, expanded });
    this.overflowActions();
  }
  connectedCallback() {
    const { el, expanded } = this;
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_ExpandToggle_js__WEBPACK_IMPORTED_MODULE_6__.t)({ el, expanded });
    this.mutationObserver?.observe(el, { childList: true, subtree: true });
    if (!this.overflowActionsDisabled) {
      this.resizeObserver?.observe(el);
    }
    this.overflowActions();
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
    this.resizeObserver?.disconnect();
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Overflows actions that won't fit into menus.
   *
   * @internal
   */
  async overflowActions() {
    this.resize({ width: this.el.clientWidth, height: this.el.clientHeight });
  }
  /**
   * Sets focus on the component's first focusable element.
   */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.el);
  }
  updateGroups() {
    this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")));
  }
  setGroupLayout(groups) {
    groups.forEach((group) => (group.layout = this.layout));
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderBottomActionGroup() {
    const { expanded, expandDisabled, el, position, toggleExpand, scale, layout, messages, actionsEndGroupLabel, } = this;
    const expandToggleNode = !expandDisabled ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.h)(_ExpandToggle_js__WEBPACK_IMPORTED_MODULE_6__.E, { collapseText: messages.collapse, el: el, expandText: messages.expand, expanded: expanded, position: position, scale: scale, toggle: toggleExpand, tooltip: this.expandTooltip,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setExpandToggleRef })) : null;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.h)("calcite-action-group", { class: CSS.actionGroupEnd, hidden: this.expandDisabled && !(this.hasActionsEnd || this.hasBottomActions), label: actionsEndGroupLabel, layout: layout, scale: scale }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.h)("slot", { name: SLOTS.actionsEnd, onSlotchange: this.handleActionsEndSlotChange }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.h)("slot", { name: SLOTS.bottomActions, onSlotchange: this.handleBottomActionsSlotChange }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.h)("slot", { name: SLOTS.expandTooltip, onSlotchange: this.handleTooltipSlotChange }), expandToggleNode));
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.Host, { onCalciteActionMenuOpen: this.actionMenuOpenHandler }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.h)("slot", { onSlotchange: this.handleDefaultSlotChange }), this.renderBottomActionGroup()));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "expandDisabled": ["expandHandler"],
    "expanded": ["expandedHandler"],
    "layout": ["layoutHandler"],
    "overflowActionsDisabled": ["overflowDisabledHandler"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return actionBarCss; }
}, [1, "calcite-action-bar", {
    "actionsEndGroupLabel": [1, "actions-end-group-label"],
    "expandDisabled": [516, "expand-disabled"],
    "expanded": [1540],
    "layout": [513],
    "overflowActionsDisabled": [516, "overflow-actions-disabled"],
    "position": [513],
    "scale": [513],
    "messages": [1040],
    "messageOverrides": [1040],
    "effectiveLocale": [32],
    "hasActionsEnd": [32],
    "hasBottomActions": [32],
    "expandTooltip": [32],
    "defaultMessages": [32],
    "overflowActions": [64],
    "setFocus": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-action-bar", "calcite-action", "calcite-action-group", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-popover"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-action-bar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionBar);
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

const CalciteActionBar = ActionBar;
const defineCustomElement = defineCustomElement$1;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYWNkMDIzMGM2NzNhZmZlY2U2MDZiZjk0Mzc4M2JlNjcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytHO0FBQ007QUFDSztBQUNaO0FBQ2hDO0FBQ3pCO0FBQzZEO0FBQzJGO0FBQ3BKO0FBQ007QUFDRDtBQUNQO0FBQ0U7QUFDQztBQUNaOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixzQkFBc0IsZ0RBQWdELCtCQUErQixzQ0FBc0MsUUFBUSxzQkFBc0IsTUFBTSxvQkFBb0Isb0JBQW9CLG1CQUFtQiw2Q0FBNkMseUJBQXlCLHNCQUFzQiw0Q0FBNEMsd0JBQXdCLDJCQUEyQixtQkFBbUIsOENBQThDLHlCQUF5QixvREFBb0QsZ0JBQWdCLHNEQUFzRCxnQkFBZ0IsbUNBQW1DLDZEQUE2RCxnQ0FBZ0Msc0RBQXNELDJEQUEyRCxtQkFBbUIsdURBQXVELHlGQUF5RixvQkFBb0IsMkNBQTJDLG1CQUFtQixvQkFBb0IsbUJBQW1CLHlCQUF5QixnQkFBZ0IsYUFBYSxTQUFTLGFBQWE7O0FBRTl2QyxnQ0FBZ0MsMkZBQWtCLGVBQWUsZ0ZBQVc7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msb0ZBQVc7QUFDN0MsNEJBQTRCLGdEQUFjO0FBQzFDLGNBQWMsZUFBZTtBQUM3QixNQUFNLG1EQUFxQixHQUFHLGNBQWM7QUFDNUM7QUFDQSxLQUFLO0FBQ0wsMEJBQTBCLGdEQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQjtBQUM5QixvQkFBb0IsZUFBZTtBQUNuQztBQUNBLGtCQUFrQixnREFBUSxJQUFJLGVBQWU7QUFDN0MsY0FB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O0FBQ0E7QUFDQSxRQUFRLGtEQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNENBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFxQjtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFaUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS1hY3Rpb24tYmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoLCBIb3N0IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50LCBkIGFzIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgfSBmcm9tICcuL2NvbmRpdGlvbmFsU2xvdC5qcyc7XG5pbXBvcnQgeyBzIGFzIHNsb3RDaGFuZ2VHZXRBc3NpZ25lZEVsZW1lbnRzLCBlIGFzIHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQsIGYgYXMgZm9jdXNGaXJzdFRhYmJhYmxlIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgcyBhcyBzZXRDb21wb25lbnRMb2FkZWQsIGEgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgYyBhcyBjb21wb25lbnRGb2N1c2FibGUgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlTWVzc2FnZXMsIGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzIH0gZnJvbSAnLi90OW4uanMnO1xuaW1wb3J0IHsgdCBhcyB0b2dnbGVDaGlsZEFjdGlvblRleHQsIEUgYXMgRXhwYW5kVG9nZ2xlLCBvIGFzIG92ZXJmbG93QWN0aW9uc0RlYm91bmNlSW5NcywgcSBhcyBxdWVyeUFjdGlvbnMsIGcgYXMgZ2VBY3Rpb25EaW1lbnNpb25zLCBhIGFzIG92ZXJmbG93QWN0aW9ucywgYiBhcyBnZXRPdmVyZmxvd0NvdW50IH0gZnJvbSAnLi9FeHBhbmRUb2dnbGUuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDcgfSBmcm9tICcuL2FjdGlvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNiB9IGZyb20gJy4vYWN0aW9uLWdyb3VwLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ1IH0gZnJvbSAnLi9hY3Rpb24tbWVudS5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNCB9IGZyb20gJy4vaWNvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMyB9IGZyb20gJy4vbG9hZGVyLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9wb3BvdmVyLmpzJztcbmltcG9ydCB7IGQgYXMgZGVib3VuY2UgfSBmcm9tICcuL2RlYm91bmNlLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBhY3Rpb25Hcm91cEVuZDogXCJhY3Rpb24tZ3JvdXAtLWVuZFwiLFxufTtcbmNvbnN0IFNMT1RTID0ge1xuICBhY3Rpb25zRW5kOiBcImFjdGlvbnMtZW5kXCIsXG4gIGJvdHRvbUFjdGlvbnM6IFwiYm90dG9tLWFjdGlvbnNcIixcbiAgZXhwYW5kVG9vbHRpcDogXCJleHBhbmQtdG9vbHRpcFwiLFxufTtcblxuY29uc3QgYWN0aW9uQmFyQ3NzID0gXCI6aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSl9Omhvc3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3R7cG9pbnRlci1ldmVudHM6YXV0bztkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLXNlbGY6c3RyZXRjaDstLWNhbGNpdGUtYWN0aW9uLWJhci1leHBhbmRlZC1tYXgtd2lkdGg6YXV0b306aG9zdChbbGF5b3V0PXZlcnRpY2FsXSl7ZmxleC1kaXJlY3Rpb246Y29sdW1ufTpob3N0KFtsYXlvdXQ9dmVydGljYWxdKSAuYWN0aW9uLWdyb3VwLS1lbmR7bWFyZ2luLWJsb2NrLXN0YXJ0OmF1dG99Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXSl7ZmxleC1kaXJlY3Rpb246cm93fTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF0pIC5hY3Rpb24tZ3JvdXAtLWVuZHttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG99Omhvc3QoW2xheW91dD12ZXJ0aWNhbF1bb3ZlcmZsb3ctYWN0aW9ucy1kaXNhYmxlZF0pe292ZXJmbG93LXk6YXV0b306aG9zdChbbGF5b3V0PWhvcml6b250YWxdW292ZXJmbG93LWFjdGlvbnMtZGlzYWJsZWRdKXtvdmVyZmxvdy14OmF1dG99Omhvc3QoW2xheW91dD12ZXJ0aWNhbF1bZXhwYW5kZWRdKXttYXgtaW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1hY3Rpb24tYmFyLWV4cGFuZGVkLW1heC13aWR0aCl9OjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uLWdyb3VwKXtib3JkZXItYmxvY2stZW5kOjFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKX06aG9zdChbbGF5b3V0PWhvcml6b250YWxdKSA6OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24tZ3JvdXApe2JvcmRlci1ibG9jay1lbmQ6MDtib3JkZXItaW5saW5lLWVuZDoxcHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXVtleHBhbmQtZGlzYWJsZWRdKSA6OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24tZ3JvdXA6bGFzdC1vZi10eXBlKXtib3JkZXItaW5saW5lLWVuZDowfTo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbi1ncm91cDpsYXN0LWNoaWxkKXtib3JkZXItYmxvY2stZW5kOjA7Ym9yZGVyLWlubGluZS1lbmQ6MH0uYWN0aW9uLWdyb3VwLS1lbmR7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBBY3Rpb25CYXIgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZUFjdGlvbkJhclRvZ2dsZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUFjdGlvbkJhclRvZ2dsZVwiLCA2KTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZWwsIGV4cGFuZGVkIH0gPSB0aGlzO1xuICAgICAgdG9nZ2xlQ2hpbGRBY3Rpb25UZXh0KHsgZWwsIGV4cGFuZGVkIH0pO1xuICAgICAgdGhpcy5vdmVyZmxvd0FjdGlvbnMoKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJyZXNpemVcIiwgKGVudHJpZXMpID0+IHRoaXMucmVzaXplSGFuZGxlckVudHJpZXMoZW50cmllcykpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuYWN0aW9uTWVudU9wZW5IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0Lm1lbnVPcGVuKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgICAgICBBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtYWN0aW9uLWdyb3VwXCIpKS5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgICAgIGlmICghY29tcG9zZWRQYXRoLmluY2x1ZGVzKGdyb3VwKSkge1xuICAgICAgICAgICAgZ3JvdXAubWVudU9wZW4gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5yZXNpemVIYW5kbGVyRW50cmllcyA9IChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2godGhpcy5yZXNpemVIYW5kbGVyKTtcbiAgICB9O1xuICAgIHRoaXMucmVzaXplSGFuZGxlciA9IChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBlbnRyeS5jb250ZW50UmVjdDtcbiAgICAgIHRoaXMucmVzaXplKHsgd2lkdGgsIGhlaWdodCB9KTtcbiAgICB9O1xuICAgIHRoaXMucmVzaXplID0gZGVib3VuY2UoKHsgd2lkdGgsIGhlaWdodCB9KSA9PiB7XG4gICAgICBjb25zdCB7IGVsLCBleHBhbmRlZCwgZXhwYW5kRGlzYWJsZWQsIGxheW91dCwgb3ZlcmZsb3dBY3Rpb25zRGlzYWJsZWQgfSA9IHRoaXM7XG4gICAgICBpZiAob3ZlcmZsb3dBY3Rpb25zRGlzYWJsZWQgfHxcbiAgICAgICAgKGxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiICYmICFoZWlnaHQpIHx8XG4gICAgICAgIChsYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiICYmICF3aWR0aCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgYWN0aW9ucyA9IHF1ZXJ5QWN0aW9ucyhlbCk7XG4gICAgICBjb25zdCBhY3Rpb25Db3VudCA9IGV4cGFuZERpc2FibGVkID8gYWN0aW9ucy5sZW5ndGggOiBhY3Rpb25zLmxlbmd0aCArIDE7XG4gICAgICBjb25zdCBhY3Rpb25Hcm91cHMgPSBBcnJheS5mcm9tKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWFjdGlvbi1ncm91cFwiKSk7XG4gICAgICB0aGlzLnNldEdyb3VwTGF5b3V0KGFjdGlvbkdyb3Vwcyk7XG4gICAgICBjb25zdCBncm91cENvdW50ID0gdGhpcy5oYXNBY3Rpb25zRW5kIHx8IHRoaXMuaGFzQm90dG9tQWN0aW9ucyB8fCAhZXhwYW5kRGlzYWJsZWRcbiAgICAgICAgPyBhY3Rpb25Hcm91cHMubGVuZ3RoICsgMVxuICAgICAgICA6IGFjdGlvbkdyb3Vwcy5sZW5ndGg7XG4gICAgICBjb25zdCB7IGFjdGlvbkhlaWdodCwgYWN0aW9uV2lkdGggfSA9IGdlQWN0aW9uRGltZW5zaW9ucyhhY3Rpb25zKTtcbiAgICAgIGNvbnN0IG92ZXJmbG93Q291bnQgPSBnZXRPdmVyZmxvd0NvdW50KHtcbiAgICAgICAgbGF5b3V0LFxuICAgICAgICBhY3Rpb25Db3VudCxcbiAgICAgICAgYWN0aW9uSGVpZ2h0LFxuICAgICAgICBhY3Rpb25XaWR0aCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgZ3JvdXBDb3VudCxcbiAgICAgIH0pO1xuICAgICAgb3ZlcmZsb3dBY3Rpb25zKHtcbiAgICAgICAgYWN0aW9uR3JvdXBzLFxuICAgICAgICBleHBhbmRlZCxcbiAgICAgICAgb3ZlcmZsb3dDb3VudCxcbiAgICAgIH0pO1xuICAgIH0sIG92ZXJmbG93QWN0aW9uc0RlYm91bmNlSW5Ncyk7XG4gICAgdGhpcy50b2dnbGVFeHBhbmQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XG4gICAgICB0aGlzLmNhbGNpdGVBY3Rpb25CYXJUb2dnbGUuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5zZXRFeHBhbmRUb2dnbGVSZWYgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuZXhwYW5kVG9nZ2xlRWwgPSBlbDtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRGVmYXVsdFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGdyb3VwcyA9IHNsb3RDaGFuZ2VHZXRBc3NpZ25lZEVsZW1lbnRzKGV2ZW50KS5maWx0ZXIoKGVsKSA9PiBlbC5tYXRjaGVzKFwiY2FsY2l0ZS1hY3Rpb24tZ3JvdXBcIikpO1xuICAgICAgdGhpcy5zZXRHcm91cExheW91dChncm91cHMpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVBY3Rpb25zRW5kU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNBY3Rpb25zRW5kID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUJvdHRvbUFjdGlvbnNTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc0JvdHRvbUFjdGlvbnMgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlVG9vbHRpcFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRvb2x0aXBzID0gc2xvdENoYW5nZUdldEFzc2lnbmVkRWxlbWVudHMoZXZlbnQpLmZpbHRlcigoZWwpID0+IGVsPy5tYXRjaGVzKFwiY2FsY2l0ZS10b29sdGlwXCIpKTtcbiAgICAgIHRoaXMuZXhwYW5kVG9vbHRpcCA9IHRvb2x0aXBzWzBdO1xuICAgIH07XG4gICAgdGhpcy5hY3Rpb25zRW5kR3JvdXBMYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmV4cGFuZERpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMubGF5b3V0ID0gXCJ2ZXJ0aWNhbFwiO1xuICAgIHRoaXMub3ZlcmZsb3dBY3Rpb25zRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnBvc2l0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oYXNBY3Rpb25zRW5kID0gZmFsc2U7XG4gICAgdGhpcy5oYXNCb3R0b21BY3Rpb25zID0gZmFsc2U7XG4gICAgdGhpcy5leHBhbmRUb29sdGlwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIGV4cGFuZEhhbmRsZXIoKSB7XG4gICAgdGhpcy5vdmVyZmxvd0FjdGlvbnMoKTtcbiAgfVxuICBleHBhbmRlZEhhbmRsZXIoKSB7XG4gICAgY29uc3QgeyBlbCwgZXhwYW5kZWQgfSA9IHRoaXM7XG4gICAgdG9nZ2xlQ2hpbGRBY3Rpb25UZXh0KHsgZWwsIGV4cGFuZGVkIH0pO1xuICAgIHRoaXMub3ZlcmZsb3dBY3Rpb25zKCk7XG4gIH1cbiAgbGF5b3V0SGFuZGxlcigpIHtcbiAgICB0aGlzLnVwZGF0ZUdyb3VwcygpO1xuICB9XG4gIG92ZXJmbG93RGlzYWJsZWRIYW5kbGVyKG92ZXJmbG93QWN0aW9uc0Rpc2FibGVkKSB7XG4gICAgaWYgKG92ZXJmbG93QWN0aW9uc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/Lm9ic2VydmUodGhpcy5lbCk7XG4gICAgdGhpcy5vdmVyZmxvd0FjdGlvbnMoKTtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgY29uc3QgeyBlbCwgZXhwYW5kZWQgfSA9IHRoaXM7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIHRvZ2dsZUNoaWxkQWN0aW9uVGV4dCh7IGVsLCBleHBhbmRlZCB9KTtcbiAgICB0aGlzLm92ZXJmbG93QWN0aW9ucygpO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbnN0IHsgZWwsIGV4cGFuZGVkIH0gPSB0aGlzO1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRvZ2dsZUNoaWxkQWN0aW9uVGV4dCh7IGVsLCBleHBhbmRlZCB9KTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/Lm9ic2VydmUoZWwsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgIGlmICghdGhpcy5vdmVyZmxvd0FjdGlvbnNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlcj8ub2JzZXJ2ZShlbCk7XG4gICAgfVxuICAgIHRoaXMub3ZlcmZsb3dBY3Rpb25zKCk7XG4gICAgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIE92ZXJmbG93cyBhY3Rpb25zIHRoYXQgd29uJ3QgZml0IGludG8gbWVudXMuXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgb3ZlcmZsb3dBY3Rpb25zKCkge1xuICAgIHRoaXMucmVzaXplKHsgd2lkdGg6IHRoaXMuZWwuY2xpZW50V2lkdGgsIGhlaWdodDogdGhpcy5lbC5jbGllbnRIZWlnaHQgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50LlxuICAgKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIGZvY3VzRmlyc3RUYWJiYWJsZSh0aGlzLmVsKTtcbiAgfVxuICB1cGRhdGVHcm91cHMoKSB7XG4gICAgdGhpcy5zZXRHcm91cExheW91dChBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtYWN0aW9uLWdyb3VwXCIpKSk7XG4gIH1cbiAgc2V0R3JvdXBMYXlvdXQoZ3JvdXBzKSB7XG4gICAgZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiAoZ3JvdXAubGF5b3V0ID0gdGhpcy5sYXlvdXQpKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyQm90dG9tQWN0aW9uR3JvdXAoKSB7XG4gICAgY29uc3QgeyBleHBhbmRlZCwgZXhwYW5kRGlzYWJsZWQsIGVsLCBwb3NpdGlvbiwgdG9nZ2xlRXhwYW5kLCBzY2FsZSwgbGF5b3V0LCBtZXNzYWdlcywgYWN0aW9uc0VuZEdyb3VwTGFiZWwsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGV4cGFuZFRvZ2dsZU5vZGUgPSAhZXhwYW5kRGlzYWJsZWQgPyAoaChFeHBhbmRUb2dnbGUsIHsgY29sbGFwc2VUZXh0OiBtZXNzYWdlcy5jb2xsYXBzZSwgZWw6IGVsLCBleHBhbmRUZXh0OiBtZXNzYWdlcy5leHBhbmQsIGV4cGFuZGVkOiBleHBhbmRlZCwgcG9zaXRpb246IHBvc2l0aW9uLCBzY2FsZTogc2NhbGUsIHRvZ2dsZTogdG9nZ2xlRXhwYW5kLCB0b29sdGlwOiB0aGlzLmV4cGFuZFRvb2x0aXAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiB0aGlzLnNldEV4cGFuZFRvZ2dsZVJlZiB9KSkgOiBudWxsO1xuICAgIHJldHVybiAoaChcImNhbGNpdGUtYWN0aW9uLWdyb3VwXCIsIHsgY2xhc3M6IENTUy5hY3Rpb25Hcm91cEVuZCwgaGlkZGVuOiB0aGlzLmV4cGFuZERpc2FibGVkICYmICEodGhpcy5oYXNBY3Rpb25zRW5kIHx8IHRoaXMuaGFzQm90dG9tQWN0aW9ucyksIGxhYmVsOiBhY3Rpb25zRW5kR3JvdXBMYWJlbCwgbGF5b3V0OiBsYXlvdXQsIHNjYWxlOiBzY2FsZSB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmFjdGlvbnNFbmQsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVBY3Rpb25zRW5kU2xvdENoYW5nZSB9KSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5ib3R0b21BY3Rpb25zLCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlQm90dG9tQWN0aW9uc1Nsb3RDaGFuZ2UgfSksIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuZXhwYW5kVG9vbHRpcCwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZVRvb2x0aXBTbG90Q2hhbmdlIH0pLCBleHBhbmRUb2dnbGVOb2RlKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2FsY2l0ZUFjdGlvbk1lbnVPcGVuOiB0aGlzLmFjdGlvbk1lbnVPcGVuSGFuZGxlciB9LCBoKFwic2xvdFwiLCB7IG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVEZWZhdWx0U2xvdENoYW5nZSB9KSwgdGhpcy5yZW5kZXJCb3R0b21BY3Rpb25Hcm91cCgpKSk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImV4cGFuZERpc2FibGVkXCI6IFtcImV4cGFuZEhhbmRsZXJcIl0sXG4gICAgXCJleHBhbmRlZFwiOiBbXCJleHBhbmRlZEhhbmRsZXJcIl0sXG4gICAgXCJsYXlvdXRcIjogW1wibGF5b3V0SGFuZGxlclwiXSxcbiAgICBcIm92ZXJmbG93QWN0aW9uc0Rpc2FibGVkXCI6IFtcIm92ZXJmbG93RGlzYWJsZWRIYW5kbGVyXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBhY3Rpb25CYXJDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtYWN0aW9uLWJhclwiLCB7XG4gICAgXCJhY3Rpb25zRW5kR3JvdXBMYWJlbFwiOiBbMSwgXCJhY3Rpb25zLWVuZC1ncm91cC1sYWJlbFwiXSxcbiAgICBcImV4cGFuZERpc2FibGVkXCI6IFs1MTYsIFwiZXhwYW5kLWRpc2FibGVkXCJdLFxuICAgIFwiZXhwYW5kZWRcIjogWzE1NDBdLFxuICAgIFwibGF5b3V0XCI6IFs1MTNdLFxuICAgIFwib3ZlcmZsb3dBY3Rpb25zRGlzYWJsZWRcIjogWzUxNiwgXCJvdmVyZmxvdy1hY3Rpb25zLWRpc2FibGVkXCJdLFxuICAgIFwicG9zaXRpb25cIjogWzUxM10sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcIm1lc3NhZ2VzXCI6IFsxMDQwXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogWzEwNDBdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFszMl0sXG4gICAgXCJoYXNBY3Rpb25zRW5kXCI6IFszMl0sXG4gICAgXCJoYXNCb3R0b21BY3Rpb25zXCI6IFszMl0sXG4gICAgXCJleHBhbmRUb29sdGlwXCI6IFszMl0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXSxcbiAgICBcIm92ZXJmbG93QWN0aW9uc1wiOiBbNjRdLFxuICAgIFwic2V0Rm9jdXNcIjogWzY0XVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50JDEoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtYWN0aW9uLWJhclwiLCBcImNhbGNpdGUtYWN0aW9uXCIsIFwiY2FsY2l0ZS1hY3Rpb24tZ3JvdXBcIiwgXCJjYWxjaXRlLWFjdGlvbi1tZW51XCIsIFwiY2FsY2l0ZS1pY29uXCIsIFwiY2FsY2l0ZS1sb2FkZXJcIiwgXCJjYWxjaXRlLXBvcG92ZXJcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtYWN0aW9uLWJhclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIEFjdGlvbkJhcik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1hY3Rpb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtYWN0aW9uLWdyb3VwXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDYoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWFjdGlvbi1tZW51XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDUoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWljb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNCgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtbG9hZGVyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDMoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLXBvcG92ZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcblxuY29uc3QgQ2FsY2l0ZUFjdGlvbkJhciA9IEFjdGlvbkJhcjtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVBY3Rpb25CYXIsIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==