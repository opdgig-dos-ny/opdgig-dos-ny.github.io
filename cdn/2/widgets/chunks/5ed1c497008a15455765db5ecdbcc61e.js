(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_stencil_core_internal_client_lazy_recursive_entry_js_include_entry_js_exclude_sy-942cd6"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-fab.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-fab.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteFab: () => (/* binding */ CalciteFab),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.js */ "./node_modules/@esri/calcite-components/dist/components/button.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */








const CSS = {
  button: "button",
};
const ICONS = {
  plus: "plus",
};

const fabCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}calcite-button{--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}calcite-button:hover{--tw-shadow:0 12px 32px -2px rgba(0, 0, 0, 0.1), 0 4px 20px 0 rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 12px 32px -2px var(--tw-shadow-color), 0 4px 20px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}calcite-button:active{--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([hidden]){display:none}[hidden]{display:none}";

const Fab = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.appearance = "solid";
    this.kind = "brand";
    this.disabled = false;
    this.icon = ICONS.plus;
    this.iconFlipRtl = false;
    this.label = undefined;
    this.loading = false;
    this.scale = "m";
    this.text = undefined;
    this.textEnabled = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
  }
  componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.k)(this.buttonEl);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { appearance, kind, disabled, loading, scale, textEnabled, icon, label, text, iconFlipRtl, } = this;
    const title = !textEnabled ? label || text || null : null;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("calcite-button", { appearance: appearance === "solid" ? "solid" : "outline-fill", class: CSS.button, disabled: disabled, iconFlipRtl: iconFlipRtl ? "start" : null, iconStart: icon, kind: kind, label: label, loading: loading, round: true, scale: scale, title: title, type: "button", width: "auto",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (buttonEl) => {
        this.buttonEl = buttonEl;
      } }, this.textEnabled ? this.text : null));
  }
  get el() { return this; }
  static get style() { return fabCss; }
}, [1, "calcite-fab", {
    "appearance": [513],
    "kind": [513],
    "disabled": [516],
    "icon": [513],
    "iconFlipRtl": [516, "icon-flip-rtl"],
    "label": [1],
    "loading": [516],
    "scale": [513],
    "text": [1],
    "textEnabled": [516, "text-enabled"],
    "setFocus": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-fab", "calcite-button", "calcite-icon", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-fab":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Fab);
      }
      break;
    case "calcite-button":
      if (!customElements.get(tagName)) {
        (0,_button_js__WEBPACK_IMPORTED_MODULE_3__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_4__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteFab = Fab;
const defineCustomElement = defineCustomElement$1;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNWVkMWM0OTcwMDhhMTU0NTU3NjVkYjVlY2RiY2M2MWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEY7QUFDL0M7QUFDc0U7QUFDTDtBQUNyRDtBQUNGO0FBQ0U7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MsZUFBZSx5QkFBeUIsaUJBQWlCLDJDQUEyQyxtREFBbUQsb0JBQW9CLE1BQU0sYUFBYSw2QkFBNkIseUdBQXlHLFVBQVUsZUFBZSxvRkFBb0YsbUdBQW1HLHVHQUF1RyxxQkFBcUIsa0ZBQWtGLGlHQUFpRyx1R0FBdUcsc0JBQXNCLG1GQUFtRixrR0FBa0csdUdBQXVHLGdCQUFnQixhQUFhLFNBQVMsYUFBYTs7QUFFanpDLDBCQUEwQiwwRkFBa0IsZUFBZSwrRUFBVztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFrQjtBQUN0QjtBQUNBO0FBQ0EsSUFBSSwrQ0FBc0I7QUFDMUI7QUFDQTtBQUNBLElBQUksK0NBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxJQUFJLGtEQUFxQjtBQUN6QjtBQUNBO0FBQ0EsSUFBSSxrREFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK0NBQWtCO0FBQzVCLElBQUksMENBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJGQUEyRjtBQUN2RztBQUNBLFlBQVkseUVBQUMscUJBQXFCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkNBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZDQUFxQjtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50LyBsYXp5IF5cXC5cXC8uKlxcLmVudHJ5XFwuanMuKiQgaW5jbHVkZTogXFwuZW50cnlcXC5qcyQgZXhjbHVkZTogXFwuc3lzdGVtXFwuZW50cnlcXC5qcyQgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS1mYWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50IGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmVudHJ5XFxcXC5qcy4qJCBpbmNsdWRlOiBcXFxcLmVudHJ5XFxcXC5qcyQgZXhjbHVkZTogXFxcXC5zeXN0ZW1cXFxcLmVudHJ5XFxcXC5qcyRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0OyIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBrIGFzIGZvY3VzRWxlbWVudCB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUgfSBmcm9tICcuL2ludGVyYWN0aXZlLmpzJztcbmltcG9ydCB7IGEgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgcyBhcyBzZXRDb21wb25lbnRMb2FkZWQsIGMgYXMgY29tcG9uZW50Rm9jdXNhYmxlIH0gZnJvbSAnLi9sb2FkYWJsZS5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNCB9IGZyb20gJy4vYnV0dG9uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQzIH0gZnJvbSAnLi9pY29uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9sb2FkZXIuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGJ1dHRvbjogXCJidXR0b25cIixcbn07XG5jb25zdCBJQ09OUyA9IHtcbiAgcGx1czogXCJwbHVzXCIsXG59O1xuXG5jb25zdCBmYWJDc3MgPSBcIjpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2Rpc3BsYXk6ZmxleDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX1jYWxjaXRlLWJ1dHRvbnstLXR3LXNoYWRvdzowIDZweCAyMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDRweCAxMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA4KTstLXR3LXNoYWRvdy1jb2xvcmVkOjAgNnB4IDIwcHggLTRweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDRweCAxMnB4IC0ycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9Y2FsY2l0ZS1idXR0b246aG92ZXJ7LS10dy1zaGFkb3c6MCAxMnB4IDMycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpOy0tdHctc2hhZG93LWNvbG9yZWQ6MCAxMnB4IDMycHggLTJweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDRweCAyMHB4IDAgdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9Y2FsY2l0ZS1idXR0b246YWN0aXZley0tdHctc2hhZG93OjAgMnB4IDEycHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7LS10dy1zaGFkb3ctY29sb3JlZDowIDJweCAxMnB4IC00cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMCAycHggNHB4IC0ycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IEZhYiA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5hcHBlYXJhbmNlID0gXCJzb2xpZFwiO1xuICAgIHRoaXMua2luZCA9IFwiYnJhbmRcIjtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5pY29uID0gSUNPTlMucGx1cztcbiAgICB0aGlzLmljb25GbGlwUnRsID0gZmFsc2U7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy50ZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudGV4dEVuYWJsZWQgPSBmYWxzZTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRGb2N1c2FibGUodGhpcyk7XG4gICAgZm9jdXNFbGVtZW50KHRoaXMuYnV0dG9uRWwpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhcHBlYXJhbmNlLCBraW5kLCBkaXNhYmxlZCwgbG9hZGluZywgc2NhbGUsIHRleHRFbmFibGVkLCBpY29uLCBsYWJlbCwgdGV4dCwgaWNvbkZsaXBSdGwsIH0gPSB0aGlzO1xuICAgIGNvbnN0IHRpdGxlID0gIXRleHRFbmFibGVkID8gbGFiZWwgfHwgdGV4dCB8fCBudWxsIDogbnVsbDtcbiAgICByZXR1cm4gKGgoXCJjYWxjaXRlLWJ1dHRvblwiLCB7IGFwcGVhcmFuY2U6IGFwcGVhcmFuY2UgPT09IFwic29saWRcIiA/IFwic29saWRcIiA6IFwib3V0bGluZS1maWxsXCIsIGNsYXNzOiBDU1MuYnV0dG9uLCBkaXNhYmxlZDogZGlzYWJsZWQsIGljb25GbGlwUnRsOiBpY29uRmxpcFJ0bCA/IFwic3RhcnRcIiA6IG51bGwsIGljb25TdGFydDogaWNvbiwga2luZDoga2luZCwgbGFiZWw6IGxhYmVsLCBsb2FkaW5nOiBsb2FkaW5nLCByb3VuZDogdHJ1ZSwgc2NhbGU6IHNjYWxlLCB0aXRsZTogdGl0bGUsIHR5cGU6IFwiYnV0dG9uXCIsIHdpZHRoOiBcImF1dG9cIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IChidXR0b25FbCkgPT4ge1xuICAgICAgICB0aGlzLmJ1dHRvbkVsID0gYnV0dG9uRWw7XG4gICAgICB9IH0sIHRoaXMudGV4dEVuYWJsZWQgPyB0aGlzLnRleHQgOiBudWxsKSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gZmFiQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWZhYlwiLCB7XG4gICAgXCJhcHBlYXJhbmNlXCI6IFs1MTNdLFxuICAgIFwia2luZFwiOiBbNTEzXSxcbiAgICBcImRpc2FibGVkXCI6IFs1MTZdLFxuICAgIFwiaWNvblwiOiBbNTEzXSxcbiAgICBcImljb25GbGlwUnRsXCI6IFs1MTYsIFwiaWNvbi1mbGlwLXJ0bFwiXSxcbiAgICBcImxhYmVsXCI6IFsxXSxcbiAgICBcImxvYWRpbmdcIjogWzUxNl0sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcInRleHRcIjogWzFdLFxuICAgIFwidGV4dEVuYWJsZWRcIjogWzUxNiwgXCJ0ZXh0LWVuYWJsZWRcIl0sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1mYWJcIiwgXCJjYWxjaXRlLWJ1dHRvblwiLCBcImNhbGNpdGUtaWNvblwiLCBcImNhbGNpdGUtbG9hZGVyXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWZhYlwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIEZhYik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1idXR0b25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNCgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQzKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcblxuY29uc3QgQ2FsY2l0ZUZhYiA9IEZhYjtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVGYWIsIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==