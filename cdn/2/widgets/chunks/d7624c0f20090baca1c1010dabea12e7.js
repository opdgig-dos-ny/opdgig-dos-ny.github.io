(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_stencil_core_internal_client_lazy_recursive_entry_js_include_entry_js_exclude_sy-85a01d"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-value-list-item.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-value-list-item.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteValueListItem: () => (/* binding */ CalciteValueListItem),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditionalSlot.js */ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _pick_list_item_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pick-list-item.js */ "./node_modules/@esri/calcite-components/dist/components/pick-list-item.js");
/* harmony import */ var _resources3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources3.js */ "./node_modules/@esri/calcite-components/dist/components/resources3.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */












const ICONS = {
  drag: "drag",
};
const SLOTS = {
  actionsEnd: "actions-end",
  actionsStart: "actions-start",
};

const valueListItemCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{margin-block-end:1px;box-sizing:border-box;display:flex;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition:background-color var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}:host *{box-sizing:border-box}calcite-pick-list-item{position:relative;margin:0px;flex-grow:1;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([active]),:host([selected]){--tw-shadow:0 0 0 1px var(--calcite-ui-brand);--tw-shadow-colored:0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.handle{display:flex;cursor:move;align-items:center;justify-content:center;border-style:none;background-color:transparent;padding-block:0px;padding-inline:0.25rem;color:var(--calcite-ui-border-input);outline-color:transparent}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}";

const ValueListItem = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteListItemChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteListItemChange", 6);
    this.calciteListItemRemove = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteListItemRemove", 7);
    this.calciteValueListItemDragHandleBlur = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteValueListItemDragHandleBlur", 6);
    this.pickListItem = null;
    this.guid = `calcite-value-list-item-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_2__.g)()}`;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.getPickListRef = (el) => (this.pickListItem = el);
    this.handleKeyDown = (event) => {
      if (event.key === " ") {
        this.handleActivated = !this.handleActivated;
      }
    };
    this.handleBlur = () => {
      this.handleActivated = false;
      this.calciteValueListItemDragHandleBlur.emit({ item: this.el, handle: this.handleEl });
    };
    this.handleSelectChange = (event) => {
      this.selected = event.detail.selected;
    };
    this.description = undefined;
    this.disabled = false;
    this.deselectDisabled = false;
    this.nonInteractive = false;
    this.handleActivated = false;
    this.icon = null;
    this.iconFlipRtl = false;
    this.label = undefined;
    this.metadata = undefined;
    this.removable = false;
    this.selected = false;
    this.value = undefined;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
  }
  componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.a)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.u)(this, this.el.closest("calcite-value-list") ? "managed" : false);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Toggle the selection state. By default this won't trigger an event.
   * The first argument allows the value to be coerced, rather than swapping values.
   *
   * @param coerce
   */
  async toggleSelected(coerce) {
    this.pickListItem.toggleSelected(coerce);
  }
  /** Set focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    return this.pickListItem?.setFocus();
  }
  calciteListItemChangeHandler(event) {
    // adjust item payload from wrapped item before bubbling
    event.detail.item = this.el;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderActionsEnd() {
    const { el } = this;
    const hasActionsEnd = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(el, SLOTS.actionsEnd);
    return hasActionsEnd ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", { name: SLOTS.actionsEnd, slot: _pick_list_item_js__WEBPACK_IMPORTED_MODULE_5__.S.actionsEnd })) : null;
  }
  renderActionsStart() {
    const { el } = this;
    const hasActionsStart = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(el, SLOTS.actionsStart);
    return hasActionsStart ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", { name: SLOTS.actionsStart, slot: _pick_list_item_js__WEBPACK_IMPORTED_MODULE_5__.S.actionsStart })) : null;
  }
  renderHandle() {
    const { icon, iconFlipRtl } = this;
    if (icon === _resources3_js__WEBPACK_IMPORTED_MODULE_6__.I.grip) {
      return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { class: {
          [_pick_list_item_js__WEBPACK_IMPORTED_MODULE_5__.C.handle]: true,
          [_pick_list_item_js__WEBPACK_IMPORTED_MODULE_5__.C.handleActivated]: this.handleActivated,
        }, "data-js-handle": true, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, role: "button", tabindex: "0",
        // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
        ref: (el) => (this.handleEl = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("calcite-icon", { flipRtl: iconFlipRtl, icon: ICONS.drag, scale: "s" })));
    }
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.Host, { id: this.el.id || this.guid }, this.renderHandle(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("calcite-pick-list-item", { description: this.description, deselectDisabled: this.deselectDisabled, disabled: this.disabled, label: this.label, metadata: this.metadata, nonInteractive: this.nonInteractive, onCalciteListItemChange: this.handleSelectChange, removable: this.removable, selected: this.selected, value: this.value,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.getPickListRef }, this.renderActionsStart(), this.renderActionsEnd())));
  }
  get el() { return this; }
  static get style() { return valueListItemCss; }
}, [1, "calcite-value-list-item", {
    "description": [513],
    "disabled": [516],
    "deselectDisabled": [4, "deselect-disabled"],
    "nonInteractive": [516, "non-interactive"],
    "handleActivated": [1028, "handle-activated"],
    "icon": [513],
    "iconFlipRtl": [516, "icon-flip-rtl"],
    "label": [513],
    "metadata": [16],
    "removable": [516],
    "selected": [1540],
    "value": [8],
    "toggleSelected": [64],
    "setFocus": [64]
  }, [[0, "calciteListItemChange", "calciteListItemChangeHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-value-list-item", "calcite-action", "calcite-icon", "calcite-loader", "calcite-pick-list-item"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-value-list-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ValueListItem);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        (0,_action_js__WEBPACK_IMPORTED_MODULE_7__.d)();
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
    case "calcite-pick-list-item":
      if (!customElements.get(tagName)) {
        (0,_pick_list_item_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteValueListItem = ValueListItem;
const defineCustomElement = defineCustomElement$1;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZDc2MjRjMGYyMDA5MGJhY2ExYzEwMTBkYWJlYTEyZTcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytHO0FBQ007QUFDMUU7QUFDTDtBQUM2RTtBQUNMO0FBQ3JCO0FBQ3ZDO0FBQ087QUFDRjtBQUNFOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsZUFBZSx5QkFBeUIsaUJBQWlCLDJDQUEyQyxtREFBbUQsb0JBQW9CLE1BQU0scUJBQXFCLHNCQUFzQixhQUFhLGdEQUFnRCxzQ0FBc0MsK0JBQStCLCtDQUErQyxtREFBbUQsdUdBQXVHLHdHQUF3RyxRQUFRLHNCQUFzQix1QkFBdUIsa0JBQWtCLFdBQVcsWUFBWSxzQkFBc0IsOEJBQThCLHVHQUF1RyxrQ0FBa0MsOENBQThDLHFEQUFxRCx1R0FBdUcsUUFBUSxhQUFhLFlBQVksbUJBQW1CLHVCQUF1QixrQkFBa0IsNkJBQTZCLGtCQUFrQix1QkFBdUIscUNBQXFDLDBCQUEwQixjQUFjLGdEQUFnRCwrQkFBK0IsY0FBYyx5RUFBeUUscVBBQXFQLG1CQUFtQixnREFBZ0QsK0JBQStCLHFCQUFxQixjQUFjLHlHQUF5RyxVQUFVLGdCQUFnQixhQUFhLFNBQVMsYUFBYTs7QUFFdGxFLG9DQUFvQywyRkFBa0IsZUFBZSxnRkFBVztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxvRkFBVztBQUM1QyxpQ0FBaUMsb0ZBQVc7QUFDNUMsOENBQThDLG9GQUFXO0FBQ3pEO0FBQ0EsMkNBQTJDLDJDQUFJLEdBQUc7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsc0NBQXNDO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUErQjtBQUNuQyxJQUFJLGtEQUFrQjtBQUN0QjtBQUNBO0FBQ0EsSUFBSSxzREFBa0M7QUFDdEMsSUFBSSxrREFBcUI7QUFDekI7QUFDQTtBQUNBLElBQUksK0NBQXNCO0FBQzFCO0FBQ0E7QUFDQSxJQUFJLCtDQUFrQjtBQUN0QjtBQUNBO0FBQ0EsSUFBSSxrREFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK0NBQWtCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksS0FBSztBQUNqQiwwQkFBMEIsMENBQVU7QUFDcEMsNEJBQTRCLDBFQUFDLFdBQVcsOEJBQThCLGlEQUFPLGFBQWE7QUFDMUY7QUFDQTtBQUNBLFlBQVksS0FBSztBQUNqQiw0QkFBNEIsMENBQVU7QUFDdEMsOEJBQThCLDBFQUFDLFdBQVcsZ0NBQWdDLGlEQUFPLGVBQWU7QUFDaEc7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDLGlCQUFpQiw2Q0FBVTtBQUMzQixjQUFjLDBFQUFDLFdBQVc7QUFDMUIsV0FBVyxpREFBRztBQUNkLFdBQVcsaURBQUc7QUFDZCxTQUFTO0FBQ1Q7QUFDQSwyQ0FBMkMsRUFBRSwwRUFBQyxtQkFBbUIsb0RBQW9EO0FBQ3JIO0FBQ0E7QUFDQTtBQUNBLFlBQVksMEVBQUMsQ0FBQyx5RUFBSSxJQUFJLDZCQUE2Qix1QkFBdUIsMEVBQUMsNkJBQTZCO0FBQ3hHO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2Q0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJDQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkNBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBcUI7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRXFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9Ac3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC8gbGF6eSBeXFwuXFwvLipcXC5lbnRyeVxcLmpzLiokIGluY2x1ZGU6IFxcLmVudHJ5XFwuanMkIGV4Y2x1ZGU6IFxcLnN5c3RlbVxcLmVudHJ5XFwuanMkIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtdmFsdWUtbGlzdC1pdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKFtdKTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9Ac3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudCBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5lbnRyeVxcXFwuanMuKiQgaW5jbHVkZTogXFxcXC5lbnRyeVxcXFwuanMkIGV4Y2x1ZGU6IFxcXFwuc3lzdGVtXFxcXC5lbnRyeVxcXFwuanMkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDsiLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCwgZCBhcyBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IH0gZnJvbSAnLi9jb25kaXRpb25hbFNsb3QuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTbG90dGVkIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgZyBhcyBndWlkIH0gZnJvbSAnLi9ndWlkLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLmpzJztcbmltcG9ydCB7IGEgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgcyBhcyBzZXRDb21wb25lbnRMb2FkZWQsIGMgYXMgY29tcG9uZW50Rm9jdXNhYmxlIH0gZnJvbSAnLi9sb2FkYWJsZS5qcyc7XG5pbXBvcnQgeyBTIGFzIFNMT1RTJDEsIEMgYXMgQ1NTLCBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMiB9IGZyb20gJy4vcGljay1saXN0LWl0ZW0uanMnO1xuaW1wb3J0IHsgSSBhcyBJQ09OX1RZUEVTIH0gZnJvbSAnLi9yZXNvdXJjZXMzLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ1IH0gZnJvbSAnLi9hY3Rpb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDQgfSBmcm9tICcuL2ljb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDMgfSBmcm9tICcuL2xvYWRlci5qcyc7XG5cbmNvbnN0IElDT05TID0ge1xuICBkcmFnOiBcImRyYWdcIixcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgYWN0aW9uc0VuZDogXCJhY3Rpb25zLWVuZFwiLFxuICBhY3Rpb25zU3RhcnQ6IFwiYWN0aW9ucy1zdGFydFwiLFxufTtcblxuY29uc3QgdmFsdWVMaXN0SXRlbUNzcyA9IFwiOmhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7bWFyZ2luLWJsb2NrLWVuZDoxcHg7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTstLXR3LXNoYWRvdzowIDFweCAwIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpOy0tdHctc2hhZG93LWNvbG9yZWQ6MCAxcHggMCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO2JveC1zaGFkb3c6dmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSwgYm94LXNoYWRvdyB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfTpob3N0ICp7Ym94LXNpemluZzpib3JkZXItYm94fWNhbGNpdGUtcGljay1saXN0LWl0ZW17cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjBweDtmbGV4LWdyb3c6MTstLXR3LXNoYWRvdzowIDAgIzAwMDA7LS10dy1zaGFkb3ctY29sb3JlZDowIDAgIzAwMDA7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfTpob3N0KFthY3RpdmVdKSw6aG9zdChbc2VsZWN0ZWRdKXstLXR3LXNoYWRvdzowIDAgMCAxcHggdmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7LS10dy1zaGFkb3ctY29sb3JlZDowIDAgMCAxcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9LmhhbmRsZXtkaXNwbGF5OmZsZXg7Y3Vyc29yOm1vdmU7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyLXN0eWxlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtwYWRkaW5nLWJsb2NrOjBweDtwYWRkaW5nLWlubGluZTowLjI1cmVtO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fS5oYW5kbGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5oYW5kbGU6Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS5oYW5kbGUtLWFjdGl2YXRlZHtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmhhbmRsZSBjYWxjaXRlLWljb257Y29sb3I6aW5oZXJpdH06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IFZhbHVlTGlzdEl0ZW0gPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZUxpc3RJdGVtQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlTGlzdEl0ZW1DaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlTGlzdEl0ZW1SZW1vdmUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVMaXN0SXRlbVJlbW92ZVwiLCA3KTtcbiAgICB0aGlzLmNhbGNpdGVWYWx1ZUxpc3RJdGVtRHJhZ0hhbmRsZUJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVWYWx1ZUxpc3RJdGVtRHJhZ0hhbmRsZUJsdXJcIiwgNik7XG4gICAgdGhpcy5waWNrTGlzdEl0ZW0gPSBudWxsO1xuICAgIHRoaXMuZ3VpZCA9IGBjYWxjaXRlLXZhbHVlLWxpc3QtaXRlbS0ke2d1aWQoKX1gO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuZ2V0UGlja0xpc3RSZWYgPSAoZWwpID0+ICh0aGlzLnBpY2tMaXN0SXRlbSA9IGVsKTtcbiAgICB0aGlzLmhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQWN0aXZhdGVkID0gIXRoaXMuaGFuZGxlQWN0aXZhdGVkO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVBY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2FsY2l0ZVZhbHVlTGlzdEl0ZW1EcmFnSGFuZGxlQmx1ci5lbWl0KHsgaXRlbTogdGhpcy5lbCwgaGFuZGxlOiB0aGlzLmhhbmRsZUVsIH0pO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVTZWxlY3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBldmVudC5kZXRhaWwuc2VsZWN0ZWQ7XG4gICAgfTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlc2VsZWN0RGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLm5vbkludGVyYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5oYW5kbGVBY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmljb24gPSBudWxsO1xuICAgIHRoaXMuaWNvbkZsaXBSdGwgPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWV0YWRhdGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZW1vdmFibGUgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzLCB0aGlzLmVsLmNsb3Nlc3QoXCJjYWxjaXRlLXZhbHVlLWxpc3RcIikgPyBcIm1hbmFnZWRcIiA6IGZhbHNlKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgc2VsZWN0aW9uIHN0YXRlLiBCeSBkZWZhdWx0IHRoaXMgd29uJ3QgdHJpZ2dlciBhbiBldmVudC5cbiAgICogVGhlIGZpcnN0IGFyZ3VtZW50IGFsbG93cyB0aGUgdmFsdWUgdG8gYmUgY29lcmNlZCwgcmF0aGVyIHRoYW4gc3dhcHBpbmcgdmFsdWVzLlxuICAgKlxuICAgKiBAcGFyYW0gY29lcmNlXG4gICAqL1xuICBhc3luYyB0b2dnbGVTZWxlY3RlZChjb2VyY2UpIHtcbiAgICB0aGlzLnBpY2tMaXN0SXRlbS50b2dnbGVTZWxlY3RlZChjb2VyY2UpO1xuICB9XG4gIC8qKiBTZXQgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIHJldHVybiB0aGlzLnBpY2tMaXN0SXRlbT8uc2V0Rm9jdXMoKTtcbiAgfVxuICBjYWxjaXRlTGlzdEl0ZW1DaGFuZ2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgLy8gYWRqdXN0IGl0ZW0gcGF5bG9hZCBmcm9tIHdyYXBwZWQgaXRlbSBiZWZvcmUgYnViYmxpbmdcbiAgICBldmVudC5kZXRhaWwuaXRlbSA9IHRoaXMuZWw7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlckFjdGlvbnNFbmQoKSB7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICBjb25zdCBoYXNBY3Rpb25zRW5kID0gZ2V0U2xvdHRlZChlbCwgU0xPVFMuYWN0aW9uc0VuZCk7XG4gICAgcmV0dXJuIGhhc0FjdGlvbnNFbmQgPyAoaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5hY3Rpb25zRW5kLCBzbG90OiBTTE9UUyQxLmFjdGlvbnNFbmQgfSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXJBY3Rpb25zU3RhcnQoKSB7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICBjb25zdCBoYXNBY3Rpb25zU3RhcnQgPSBnZXRTbG90dGVkKGVsLCBTTE9UUy5hY3Rpb25zU3RhcnQpO1xuICAgIHJldHVybiBoYXNBY3Rpb25zU3RhcnQgPyAoaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5hY3Rpb25zU3RhcnQsIHNsb3Q6IFNMT1RTJDEuYWN0aW9uc1N0YXJ0IH0pKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVySGFuZGxlKCkge1xuICAgIGNvbnN0IHsgaWNvbiwgaWNvbkZsaXBSdGwgfSA9IHRoaXM7XG4gICAgaWYgKGljb24gPT09IElDT05fVFlQRVMuZ3JpcCkge1xuICAgICAgcmV0dXJuIChoKFwic3BhblwiLCB7IGNsYXNzOiB7XG4gICAgICAgICAgW0NTUy5oYW5kbGVdOiB0cnVlLFxuICAgICAgICAgIFtDU1MuaGFuZGxlQWN0aXZhdGVkXTogdGhpcy5oYW5kbGVBY3RpdmF0ZWQsXG4gICAgICAgIH0sIFwiZGF0YS1qcy1oYW5kbGVcIjogdHJ1ZSwgb25CbHVyOiB0aGlzLmhhbmRsZUJsdXIsIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLCByb2xlOiBcImJ1dHRvblwiLCB0YWJpbmRleDogXCIwXCIsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5oYW5kbGVFbCA9IGVsKSB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgZmxpcFJ0bDogaWNvbkZsaXBSdGwsIGljb246IElDT05TLmRyYWcsIHNjYWxlOiBcInNcIiB9KSkpO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgaWQ6IHRoaXMuZWwuaWQgfHwgdGhpcy5ndWlkIH0sIHRoaXMucmVuZGVySGFuZGxlKCksIGgoXCJjYWxjaXRlLXBpY2stbGlzdC1pdGVtXCIsIHsgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sIGRlc2VsZWN0RGlzYWJsZWQ6IHRoaXMuZGVzZWxlY3REaXNhYmxlZCwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsIGxhYmVsOiB0aGlzLmxhYmVsLCBtZXRhZGF0YTogdGhpcy5tZXRhZGF0YSwgbm9uSW50ZXJhY3RpdmU6IHRoaXMubm9uSW50ZXJhY3RpdmUsIG9uQ2FsY2l0ZUxpc3RJdGVtQ2hhbmdlOiB0aGlzLmhhbmRsZVNlbGVjdENoYW5nZSwgcmVtb3ZhYmxlOiB0aGlzLnJlbW92YWJsZSwgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQsIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5nZXRQaWNrTGlzdFJlZiB9LCB0aGlzLnJlbmRlckFjdGlvbnNTdGFydCgpLCB0aGlzLnJlbmRlckFjdGlvbnNFbmQoKSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiB2YWx1ZUxpc3RJdGVtQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLXZhbHVlLWxpc3QtaXRlbVwiLCB7XG4gICAgXCJkZXNjcmlwdGlvblwiOiBbNTEzXSxcbiAgICBcImRpc2FibGVkXCI6IFs1MTZdLFxuICAgIFwiZGVzZWxlY3REaXNhYmxlZFwiOiBbNCwgXCJkZXNlbGVjdC1kaXNhYmxlZFwiXSxcbiAgICBcIm5vbkludGVyYWN0aXZlXCI6IFs1MTYsIFwibm9uLWludGVyYWN0aXZlXCJdLFxuICAgIFwiaGFuZGxlQWN0aXZhdGVkXCI6IFsxMDI4LCBcImhhbmRsZS1hY3RpdmF0ZWRcIl0sXG4gICAgXCJpY29uXCI6IFs1MTNdLFxuICAgIFwiaWNvbkZsaXBSdGxcIjogWzUxNiwgXCJpY29uLWZsaXAtcnRsXCJdLFxuICAgIFwibGFiZWxcIjogWzUxM10sXG4gICAgXCJtZXRhZGF0YVwiOiBbMTZdLFxuICAgIFwicmVtb3ZhYmxlXCI6IFs1MTZdLFxuICAgIFwic2VsZWN0ZWRcIjogWzE1NDBdLFxuICAgIFwidmFsdWVcIjogWzhdLFxuICAgIFwidG9nZ2xlU2VsZWN0ZWRcIjogWzY0XSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF1cbiAgfSwgW1swLCBcImNhbGNpdGVMaXN0SXRlbUNoYW5nZVwiLCBcImNhbGNpdGVMaXN0SXRlbUNoYW5nZUhhbmRsZXJcIl1dXSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50JDEoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtdmFsdWUtbGlzdC1pdGVtXCIsIFwiY2FsY2l0ZS1hY3Rpb25cIiwgXCJjYWxjaXRlLWljb25cIiwgXCJjYWxjaXRlLWxvYWRlclwiLCBcImNhbGNpdGUtcGljay1saXN0LWl0ZW1cIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtdmFsdWUtbGlzdC1pdGVtXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgVmFsdWVMaXN0SXRlbSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1hY3Rpb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtcGljay1saXN0LWl0ZW1cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcblxuY29uc3QgQ2FsY2l0ZVZhbHVlTGlzdEl0ZW0gPSBWYWx1ZUxpc3RJdGVtO1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IGRlZmluZUN1c3RvbUVsZW1lbnQkMTtcblxuZXhwb3J0IHsgQ2FsY2l0ZVZhbHVlTGlzdEl0ZW0sIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==