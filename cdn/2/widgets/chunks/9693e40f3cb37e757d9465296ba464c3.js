(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_stencil_core_internal_client_lazy_recursive_entry_js_include_entry_js_exclude_sy-90905b"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-stack.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-stack.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteStack: () => (/* binding */ CalciteStack),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stack.js */ "./node_modules/@esri/calcite-components/dist/components/stack.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const CalciteStack = _stack_js__WEBPACK_IMPORTED_MODULE_0__.a;
const defineCustomElement = _stack_js__WEBPACK_IMPORTED_MODULE_0__.d;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/stack.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/stack.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ SLOTS),
/* harmony export */   a: () => (/* binding */ Stack),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const CSS = {
  container: "container",
  actionsStart: "actions-start",
  contentStart: "content-start",
  content: "content",
  contentEnd: "content-end",
  actionsEnd: "actions-end",
};
const SLOTS = {
  actionsStart: "actions-start",
  contentStart: "content-start",
  contentEnd: "content-end",
  actionsEnd: "actions-end",
};

const stackCss = ":host([disabled]) .content{cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) .content *,:host([disabled]) .content ::slotted(*){pointer-events:none}:host{display:flex;flex:1 1 0%;flex-direction:column}.container{display:flex;flex:1 1 auto;align-items:stretch;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}.content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;font-size:var(--calcite-font-size--2);line-height:1.375;padding-inline:var(--calcite-stack-padding-inline, 0.75rem);padding-block:var(--calcite-stack-padding-block, 0.5rem)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:0 1 auto}.actions-start,.actions-end,.content-start,.content-end{display:flex;align-items:center}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}:host([hidden]){display:none}[hidden]{display:none}";

const Stack = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleActionsStartSlotChange = (event) => {
      this.hasActionsStart = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleActionsEndSlotChange = (event) => {
      this.hasActionsEnd = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleContentStartSlotChange = (event) => {
      this.hasContentStart = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleContentEndSlotChange = (event) => {
      this.hasContentEnd = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.disabled = false;
    this.hasActionsStart = false;
    this.hasActionsEnd = false;
    this.hasContentStart = false;
    this.hasContentEnd = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderActionsStart() {
    const { hasActionsStart } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: CSS.actionsStart, hidden: !hasActionsStart, key: "actions-start-container" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", { name: SLOTS.actionsStart, onSlotchange: this.handleActionsStartSlotChange })));
  }
  renderActionsEnd() {
    const { hasActionsEnd } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: CSS.actionsEnd, hidden: !hasActionsEnd, key: "actions-end-container" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", { name: SLOTS.actionsEnd, onSlotchange: this.handleActionsEndSlotChange })));
  }
  renderContentStart() {
    const { hasContentStart } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: CSS.contentStart, hidden: !hasContentStart }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", { name: SLOTS.contentStart, onSlotchange: this.handleContentStartSlotChange })));
  }
  renderDefaultContent() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: CSS.content }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null)));
  }
  renderContentEnd() {
    const { hasContentEnd } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: CSS.contentEnd, hidden: !hasContentEnd }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", { name: SLOTS.contentEnd, onSlotchange: this.handleContentEndSlotChange })));
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.Host, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: CSS.container }, this.renderActionsStart(), this.renderContentStart(), this.renderDefaultContent(), this.renderContentEnd(), this.renderActionsEnd())));
  }
  static get style() { return stackCss; }
}, [1, "calcite-stack", {
    "disabled": [516],
    "hasActionsStart": [32],
    "hasActionsEnd": [32],
    "hasContentStart": [32],
    "hasContentEnd": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-stack"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-stack":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Stack);
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOTY5M2U0MGYzY2IzN2U3NTdkOTQ2NTI5NmJhNDY0YzMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0U7O0FBRXBFLHFCQUFxQix3Q0FBSztBQUMxQiw0QkFBNEIsd0NBQXFCOztBQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tHO0FBQ3JDOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE2QyxlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLHFFQUFxRSxvQkFBb0IsTUFBTSxhQUFhLFlBQVksc0JBQXNCLFdBQVcsYUFBYSxjQUFjLG9CQUFvQix1Q0FBdUMsOENBQThDLCtCQUErQixTQUFTLGFBQWEsY0FBYyxzQkFBc0IsdUJBQXVCLHNDQUFzQyxrQkFBa0IsNERBQTRELHlEQUF5RCxlQUFlLDJCQUEyQixhQUFhLHlCQUF5Qiw0QkFBNEIsY0FBYyx3REFBd0QsYUFBYSxtQkFBbUIsNEVBQTRFLHNCQUFzQixrQkFBa0IsOFVBQThVLG1CQUFtQixjQUFjLGdCQUFnQixhQUFhLFNBQVMsYUFBYTs7QUFFbjdDLDRCQUE0QiwwRkFBa0IsZUFBZSwrRUFBVztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwwQ0FBNEI7QUFDekQ7QUFDQTtBQUNBLDJCQUEyQiwwQ0FBNEI7QUFDdkQ7QUFDQTtBQUNBLDZCQUE2QiwwQ0FBNEI7QUFDekQ7QUFDQTtBQUNBLDJCQUEyQiwwQ0FBNEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtCQUFrQjtBQUM5QixZQUFZLHlFQUFDLFVBQVUsbUZBQW1GLEVBQUUseUVBQUMsV0FBVywyRUFBMkU7QUFDbk07QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCLFlBQVkseUVBQUMsVUFBVSw2RUFBNkUsRUFBRSx5RUFBQyxXQUFXLHVFQUF1RTtBQUN6TDtBQUNBO0FBQ0EsWUFBWSxrQkFBa0I7QUFDOUIsWUFBWSx5RUFBQyxVQUFVLG1EQUFtRCxFQUFFLHlFQUFDLFdBQVcsMkVBQTJFO0FBQ25LO0FBQ0E7QUFDQSxZQUFZLHlFQUFDLFVBQVUsb0JBQW9CLEVBQUUseUVBQUM7QUFDOUM7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCLFlBQVkseUVBQUMsVUFBVSwrQ0FBK0MsRUFBRSx5RUFBQyxXQUFXLHVFQUF1RTtBQUMzSjtBQUNBO0FBQ0EsWUFBWSx5RUFBQyxDQUFDLHdFQUFJLFFBQVEseUVBQUMsVUFBVSxzQkFBc0I7QUFDM0Q7QUFDQSx1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRTREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9Ac3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC8gbGF6eSBeXFwuXFwvLipcXC5lbnRyeVxcLmpzLiokIGluY2x1ZGU6IFxcLmVudHJ5XFwuanMkIGV4Y2x1ZGU6IFxcLnN5c3RlbVxcLmVudHJ5XFwuanMkIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtc3RhY2suanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3N0YWNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKFtdKTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9Ac3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudCBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5lbnRyeVxcXFwuanMuKiQgaW5jbHVkZTogXFxcXC5lbnRyeVxcXFwuanMkIGV4Y2x1ZGU6IFxcXFwuc3lzdGVtXFxcXC5lbnRyeVxcXFwuanMkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDsiLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBhIGFzIFN0YWNrLCBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMSB9IGZyb20gJy4vc3RhY2suanMnO1xuXG5jb25zdCBDYWxjaXRlU3RhY2sgPSBTdGFjaztcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVTdGFjaywgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGUgYXMgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudCB9IGZyb20gJy4vZG9tLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGFjdGlvbnNTdGFydDogXCJhY3Rpb25zLXN0YXJ0XCIsXG4gIGNvbnRlbnRTdGFydDogXCJjb250ZW50LXN0YXJ0XCIsXG4gIGNvbnRlbnQ6IFwiY29udGVudFwiLFxuICBjb250ZW50RW5kOiBcImNvbnRlbnQtZW5kXCIsXG4gIGFjdGlvbnNFbmQ6IFwiYWN0aW9ucy1lbmRcIixcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgYWN0aW9uc1N0YXJ0OiBcImFjdGlvbnMtc3RhcnRcIixcbiAgY29udGVudFN0YXJ0OiBcImNvbnRlbnQtc3RhcnRcIixcbiAgY29udGVudEVuZDogXCJjb250ZW50LWVuZFwiLFxuICBhY3Rpb25zRW5kOiBcImFjdGlvbnMtZW5kXCIsXG59O1xuXG5jb25zdCBzdGFja0NzcyA9IFwiOmhvc3QoW2Rpc2FibGVkXSkgLmNvbnRlbnR7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pIC5jb250ZW50ICosOmhvc3QoW2Rpc2FibGVkXSkgLmNvbnRlbnQgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIDAlO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSBhdXRvO2FsaWduLWl0ZW1zOnN0cmV0Y2g7Zm9udC1mYW1pbHk6dmFyKC0tY2FsY2l0ZS1zYW5zLWZhbWlseSk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWwpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX0uY29udGVudHtkaXNwbGF5OmZsZXg7ZmxleDoxIDEgYXV0bztmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OmNlbnRlcjtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjEuMzc1O3BhZGRpbmctaW5saW5lOnZhcigtLWNhbGNpdGUtc3RhY2stcGFkZGluZy1pbmxpbmUsIDAuNzVyZW0pO3BhZGRpbmctYmxvY2s6dmFyKC0tY2FsY2l0ZS1zdGFjay1wYWRkaW5nLWJsb2NrLCAwLjVyZW0pfS5jb250ZW50LXN0YXJ0e2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5jb250ZW50LWVuZHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LmNvbnRlbnQtc3RhcnQsLmNvbnRlbnQtZW5ke2ZsZXg6MCAxIGF1dG99LmFjdGlvbnMtc3RhcnQsLmFjdGlvbnMtZW5kLC5jb250ZW50LXN0YXJ0LC5jb250ZW50LWVuZHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfS5jb250ZW50LXN0YXJ0IDo6c2xvdHRlZChjYWxjaXRlLWljb24pLC5jb250ZW50LWVuZCA6OnNsb3R0ZWQoY2FsY2l0ZS1pY29uKXttYXJnaW4taW5saW5lOjAuNzVyZW07YWxpZ24tc2VsZjpjZW50ZXJ9LmFjdGlvbnMtc3RhcnQgOjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uKSwuYWN0aW9ucy1zdGFydCA6OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24tbWVudSksLmFjdGlvbnMtc3RhcnQgOjpzbG90dGVkKGNhbGNpdGUtaGFuZGxlKSwuYWN0aW9ucy1zdGFydCA6OnNsb3R0ZWQoY2FsY2l0ZS1kcm9wZG93biksLmFjdGlvbnMtZW5kIDo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbiksLmFjdGlvbnMtZW5kIDo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbi1tZW51KSwuYWN0aW9ucy1lbmQgOjpzbG90dGVkKGNhbGNpdGUtaGFuZGxlKSwuYWN0aW9ucy1lbmQgOjpzbG90dGVkKGNhbGNpdGUtZHJvcGRvd24pe2FsaWduLXNlbGY6c3RyZXRjaDtjb2xvcjppbmhlcml0fTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBTdGFjayA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5oYW5kbGVBY3Rpb25zU3RhcnRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc0FjdGlvbnNTdGFydCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVBY3Rpb25zRW5kU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNBY3Rpb25zRW5kID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNvbnRlbnRTdGFydFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzQ29udGVudFN0YXJ0ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNvbnRlbnRFbmRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc0NvbnRlbnRFbmQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0FjdGlvbnNTdGFydCA9IGZhbHNlO1xuICAgIHRoaXMuaGFzQWN0aW9uc0VuZCA9IGZhbHNlO1xuICAgIHRoaXMuaGFzQ29udGVudFN0YXJ0ID0gZmFsc2U7XG4gICAgdGhpcy5oYXNDb250ZW50RW5kID0gZmFsc2U7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlckFjdGlvbnNTdGFydCgpIHtcbiAgICBjb25zdCB7IGhhc0FjdGlvbnNTdGFydCB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmFjdGlvbnNTdGFydCwgaGlkZGVuOiAhaGFzQWN0aW9uc1N0YXJ0LCBrZXk6IFwiYWN0aW9ucy1zdGFydC1jb250YWluZXJcIiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmFjdGlvbnNTdGFydCwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZUFjdGlvbnNTdGFydFNsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICByZW5kZXJBY3Rpb25zRW5kKCkge1xuICAgIGNvbnN0IHsgaGFzQWN0aW9uc0VuZCB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmFjdGlvbnNFbmQsIGhpZGRlbjogIWhhc0FjdGlvbnNFbmQsIGtleTogXCJhY3Rpb25zLWVuZC1jb250YWluZXJcIiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmFjdGlvbnNFbmQsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVBY3Rpb25zRW5kU2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlckNvbnRlbnRTdGFydCgpIHtcbiAgICBjb25zdCB7IGhhc0NvbnRlbnRTdGFydCB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbnRlbnRTdGFydCwgaGlkZGVuOiAhaGFzQ29udGVudFN0YXJ0IH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuY29udGVudFN0YXJ0LCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlQ29udGVudFN0YXJ0U2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlckRlZmF1bHRDb250ZW50KCkge1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGVudCB9LCBoKFwic2xvdFwiLCBudWxsKSkpO1xuICB9XG4gIHJlbmRlckNvbnRlbnRFbmQoKSB7XG4gICAgY29uc3QgeyBoYXNDb250ZW50RW5kIH0gPSB0aGlzO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGVudEVuZCwgaGlkZGVuOiAhaGFzQ29udGVudEVuZCB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmNvbnRlbnRFbmQsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVDb250ZW50RW5kU2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGFpbmVyIH0sIHRoaXMucmVuZGVyQWN0aW9uc1N0YXJ0KCksIHRoaXMucmVuZGVyQ29udGVudFN0YXJ0KCksIHRoaXMucmVuZGVyRGVmYXVsdENvbnRlbnQoKSwgdGhpcy5yZW5kZXJDb250ZW50RW5kKCksIHRoaXMucmVuZGVyQWN0aW9uc0VuZCgpKSkpO1xuICB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBzdGFja0NzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1zdGFja1wiLCB7XG4gICAgXCJkaXNhYmxlZFwiOiBbNTE2XSxcbiAgICBcImhhc0FjdGlvbnNTdGFydFwiOiBbMzJdLFxuICAgIFwiaGFzQWN0aW9uc0VuZFwiOiBbMzJdLFxuICAgIFwiaGFzQ29udGVudFN0YXJ0XCI6IFszMl0sXG4gICAgXCJoYXNDb250ZW50RW5kXCI6IFszMl1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1zdGFja1wiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1zdGFja1wiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIFN0YWNrKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBTTE9UUyBhcyBTLCBTdGFjayBhcyBhLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==