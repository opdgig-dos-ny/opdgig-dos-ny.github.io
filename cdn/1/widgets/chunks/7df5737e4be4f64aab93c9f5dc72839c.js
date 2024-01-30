"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_table-cell_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/interactive.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/interactive.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ connectInteractive),
/* harmony export */   d: () => (/* binding */ disconnectInteractive),
/* harmony export */   g: () => (/* binding */ getUserAgentString),
/* harmony export */   u: () => (/* binding */ updateHostInteraction)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


function getUserAgentData() {
  return navigator.userAgentData;
}
function getUserAgentString() {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.Build.isBrowser) {
    return "";
  }
  const uaData = getUserAgentData();
  return uaData?.brands
    ? uaData.brands.map(({ brand, version }) => `${brand}/${version}`).join(" ")
    : navigator.userAgent;
}

// ⚠️ browser-sniffing is not a best practice and should be avoided ⚠️
const isFirefox = /firefox/i.test(getUserAgentString());
const interactiveElementToParent = isFirefox
  ? new WeakMap()
  : null;
function interceptedClick() {
  const { disabled } = this;
  if (!disabled) {
    HTMLElement.prototype.click.call(this);
  }
}
function onPointerDown(event) {
  const interactiveElement = event.target;
  if (isFirefox && !interactiveElementToParent.get(interactiveElement)) {
    return;
  }
  const { disabled } = interactiveElement;
  if (disabled) {
    // prevent click from moving focus on host
    event.preventDefault();
  }
}
const nonBubblingWhenDisabledMouseEvents = ["mousedown", "mouseup", "click"];
function onNonBubblingWhenDisabledMouseEvent(event) {
  if (isFirefox && !interactiveElementToParent.get(event.target)) {
    return;
  }
  const { disabled } = event.target;
  // prevent disallowed mouse events from being emitted on the disabled host (per https://github.com/whatwg/html/issues/5886)
  //⚠ we generally avoid stopping propagation of events, but this is needed to adhere to the intended spec changes above ⚠
  if (disabled) {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
}
const captureOnlyOptions = { capture: true };
/**
 * This helper updates the host element to prevent keyboard interaction on its subtree and sets the appropriate aria attribute for accessibility.
 *
 * This should be used in the `componentDidRender` lifecycle hook.
 *
 * **Notes**
 *
 * this util is not needed for simple components whose root element or elements are an interactive component (custom element or native control). For those cases, set the `disabled` props on the root components instead.
 * technically, users can override `tabindex` and restore keyboard navigation, but this will be considered user error
 *
 * @param component
 * @param hostIsTabbable – when set to true or its predicate returns true, the host is tabbable and will be managed by the helper. Set to "managed" for cases where a component's parent determines which item is tabbable (i.e., sets `tabindex` to allow tabbing).
 */
function updateHostInteraction(component, hostIsTabbable = false) {
  if (component.disabled) {
    component.el.setAttribute("tabindex", "-1");
    component.el.setAttribute("aria-disabled", "true");
    if (component.el.contains(document.activeElement)) {
      document.activeElement.blur();
    }
    blockInteraction(component);
    return;
  }
  restoreInteraction(component);
  if (typeof hostIsTabbable === "function") {
    component.el.setAttribute("tabindex", hostIsTabbable.call(component) ? "0" : "-1");
  }
  else if (hostIsTabbable === true) {
    component.el.setAttribute("tabindex", "0");
  }
  else if (hostIsTabbable === false) {
    component.el.removeAttribute("tabindex");
  }
  else ;
  component.el.removeAttribute("aria-disabled");
}
function blockInteraction(component) {
  component.el.click = interceptedClick;
  addInteractionListeners(isFirefox ? getParentElement(component) : component.el);
}
function addInteractionListeners(element) {
  if (!element) {
    // this path is only applicable to Firefox
    return;
  }
  element.addEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => element.addEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
}
function getParentElement(component) {
  return interactiveElementToParent.get(component.el);
}
function restoreInteraction(component) {
  delete component.el.click; // fallback on HTMLElement.prototype.click
  removeInteractionListeners(isFirefox ? getParentElement(component) : component.el);
}
function removeInteractionListeners(element) {
  if (!element) {
    // this path is only applicable to Firefox
    return;
  }
  element.removeEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => element.removeEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
}
/**
 * This utility helps disable components consistently in Firefox.
 *
 * It needs to be called in `connectedCallback` and is only needed for Firefox as it does not call capture event listeners before non-capture ones (see https://bugzilla.mozilla.org/show_bug.cgi?id=1731504).
 *
 * @param component
 */
function connectInteractive(component) {
  if (!component.disabled || !isFirefox) {
    return;
  }
  const parent = component.el.parentElement || component.el; /* assume element is host if it has no parent when connected */
  interactiveElementToParent.set(component.el, parent);
  blockInteraction(component);
}
/**
 * This utility restores interactivity to disabled components consistently in Firefox.
 *
 * It needs to be called in `disconnectedCallback` and is only needed for Firefox as it does not call capture event listeners before non-capture ones (see https://bugzilla.mozilla.org/show_bug.cgi?id=1731504).
 *
 * @param component
 */
function disconnectInteractive(component) {
  if (!isFirefox) {
    return;
  }
  // always remove on disconnect as render or connect will restore it
  interactiveElementToParent.delete(component.el);
  restoreInteraction(component);
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/table-cell.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/table-cell.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TableCell),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */







const CSS = {
  numberCell: "number-cell",
  footerCell: "footer-cell",
  selectionCell: "selection-cell",
  selectedCell: "selected-cell",
  assistiveText: "assistive-text",
};

const tableCellCss = ":host{--calcite-internal-table-cell-background-internal:var(--calcite-table-cell-background, transparent);--calcite-internal-table-cell-border-color-internal:var(--calcite-table-cell-border-color, transparent);display:contents}:host([alignment=center]) td{text-align:center}:host([alignment=end]) td{text-align:end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}td{white-space:normal;text-align:start;vertical-align:middle;color:var(--calcite-ui-text-1);outline-color:transparent;background:var(--calcite-internal-table-cell-background);border-inline-end:1px solid var(--calcite-ui-border-3);font-size:var(--calcite-internal-table-cell-font-size);padding:var(--calcite-internal-table-cell-padding)}td:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.number-cell{background-color:var(--calcite-ui-foreground-2)}.footer-cell{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);border-block-start:1px solid var(--calcite-ui-border-3)}.number-cell,.selection-cell{border-inline-end:1px solid var(--calcite-ui-border-3);inline-size:2rem;min-inline-size:2rem}.selection-cell{cursor:pointer;color:var(--calcite-ui-text-3);inset-inline-start:2rem}.selected-cell:not(.number-cell):not(.footer-cell){--calcite-table-cell-background:var(--calcite-ui-foreground-current);background:var(--calcite-ui-foreground-current)}.selection-cell.selected-cell{box-shadow:inset 0.25rem 0 0 0 var(--calcite-ui-brand);color:var(--calcite-ui-brand)}.selection-cell.selected-cell calcite-icon{color:var(--calcite-ui-brand)}.calcite--rtl.selection-cell.selected-cell{box-shadow:inset -0.25rem 0 0 0 var(--calcite-ui-brand)}.selection-cell{vertical-align:middle}.selection-cell ::slotted(calcite-icon){pointer-events:none;margin-block-start:0.25rem}";

const TableCell = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.updateScreenReaderContentsText = () => {
      this.contentsText = this.el.textContent;
    };
    this.onContainerBlur = () => {
      this.focused = false;
    };
    this.onContainerFocus = () => {
      this.focused = true;
    };
    this.alignment = "start";
    this.colSpan = undefined;
    this.rowSpan = undefined;
    this.disabled = undefined;
    this.numberCell = undefined;
    this.parentRowIsSelected = undefined;
    this.parentRowPositionLocalized = undefined;
    this.parentRowType = undefined;
    this.positionInRow = undefined;
    this.readCellContentsToAT = undefined;
    this.scale = "m";
    this.selectionCell = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.contentsText = "";
    this.defaultMessages = undefined;
    this.focused = false;
    this.selectionText = "";
    this.effectiveLocale = "";
  }
  onSelectedChange() {
    this.updateScreenReaderSelectionText();
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_0__.a)(this);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.s)(this);
    this.updateScreenReaderContentsText();
    this.updateScreenReaderSelectionText();
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_0__.s)(this);
  }
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  disconnectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    this.containerEl.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  updateScreenReaderSelectionText() {
    const selectedText = `${this.messages?.row} ${this.parentRowPositionLocalized} ${this.messages?.selected} ${this.messages?.keyboardDeselect}`;
    const unselectedText = `${this.messages?.row} ${this.parentRowPositionLocalized} ${this.messages?.unselected} ${this.messages?.keyboardSelect}`;
    this.selectionText = this.parentRowIsSelected ? selectedText : unselectedText;
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  render() {
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.b)(this.el);
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.Host, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("td", { "aria-disabled": this.disabled, class: {
        [CSS.footerCell]: this.parentRowType === "foot",
        [CSS.numberCell]: this.numberCell,
        [CSS.selectionCell]: this.selectionCell,
        [CSS.selectedCell]: this.parentRowIsSelected,
        [_dom_js__WEBPACK_IMPORTED_MODULE_4__.C.rtl]: dir === "rtl",
      }, colSpan: this.colSpan, onBlur: this.onContainerBlur, onFocus: this.onContainerFocus, role: "gridcell", rowSpan: this.rowSpan, tabIndex: this.disabled ? -1 : 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.containerEl = el) }, (this.selectionCell || this.readCellContentsToAT) && this.focused && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("span", { "aria-hidden": true, "aria-live": "polite", class: CSS.assistiveText }, this.selectionCell && this.selectionText, this.readCellContentsToAT && !this.selectionCell && this.contentsText)), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { onSlotchange: this.updateScreenReaderContentsText }))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "parentRowIsSelected": ["onSelectedChange"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return tableCellCss; }
}, [1, "calcite-table-cell", {
    "alignment": [513],
    "colSpan": [514, "col-span"],
    "rowSpan": [514, "row-span"],
    "disabled": [4],
    "numberCell": [4, "number-cell"],
    "parentRowIsSelected": [4, "parent-row-is-selected"],
    "parentRowPositionLocalized": [1, "parent-row-position-localized"],
    "parentRowType": [1, "parent-row-type"],
    "positionInRow": [2, "position-in-row"],
    "readCellContentsToAT": [4, "read-cell-contents-to-a-t"],
    "scale": [1],
    "selectionCell": [4, "selection-cell"],
    "messages": [1040],
    "messageOverrides": [1040],
    "contentsText": [32],
    "defaultMessages": [32],
    "focused": [32],
    "selectionText": [32],
    "effectiveLocale": [32],
    "setFocus": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-table-cell"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-table-cell":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TableCell);
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvN2RmNTczN2U0YmU0ZjY0YWFiOTNjOWY1ZGM3MjgzOWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8seUVBQUs7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnQkFBZ0IsUUFBUSxNQUFNLEdBQUcsUUFBUTtBQUNwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsV0FBVztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBRW9EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2ludGVyYWN0aXZlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy90YWJsZS1jZWxsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IEJ1aWxkIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG5mdW5jdGlvbiBnZXRVc2VyQWdlbnREYXRhKCkge1xuICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGE7XG59XG5mdW5jdGlvbiBnZXRVc2VyQWdlbnRTdHJpbmcoKSB7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgY29uc3QgdWFEYXRhID0gZ2V0VXNlckFnZW50RGF0YSgpO1xuICByZXR1cm4gdWFEYXRhPy5icmFuZHNcbiAgICA/IHVhRGF0YS5icmFuZHMubWFwKCh7IGJyYW5kLCB2ZXJzaW9uIH0pID0+IGAke2JyYW5kfS8ke3ZlcnNpb259YCkuam9pbihcIiBcIilcbiAgICA6IG5hdmlnYXRvci51c2VyQWdlbnQ7XG59XG5cbi8vIOKaoO+4jyBicm93c2VyLXNuaWZmaW5nIGlzIG5vdCBhIGJlc3QgcHJhY3RpY2UgYW5kIHNob3VsZCBiZSBhdm9pZGVkIOKaoO+4j1xuY29uc3QgaXNGaXJlZm94ID0gL2ZpcmVmb3gvaS50ZXN0KGdldFVzZXJBZ2VudFN0cmluZygpKTtcbmNvbnN0IGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50ID0gaXNGaXJlZm94XG4gID8gbmV3IFdlYWtNYXAoKVxuICA6IG51bGw7XG5mdW5jdGlvbiBpbnRlcmNlcHRlZENsaWNrKCkge1xuICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzO1xuICBpZiAoIWRpc2FibGVkKSB7XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrLmNhbGwodGhpcyk7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZXZlbnQpIHtcbiAgY29uc3QgaW50ZXJhY3RpdmVFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICBpZiAoaXNGaXJlZm94ICYmICFpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoaW50ZXJhY3RpdmVFbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGRpc2FibGVkIH0gPSBpbnRlcmFjdGl2ZUVsZW1lbnQ7XG4gIGlmIChkaXNhYmxlZCkge1xuICAgIC8vIHByZXZlbnQgY2xpY2sgZnJvbSBtb3ZpbmcgZm9jdXMgb24gaG9zdFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMgPSBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIl07XG5mdW5jdGlvbiBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudChldmVudCkge1xuICBpZiAoaXNGaXJlZm94ICYmICFpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoZXZlbnQudGFyZ2V0KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGRpc2FibGVkIH0gPSBldmVudC50YXJnZXQ7XG4gIC8vIHByZXZlbnQgZGlzYWxsb3dlZCBtb3VzZSBldmVudHMgZnJvbSBiZWluZyBlbWl0dGVkIG9uIHRoZSBkaXNhYmxlZCBob3N0IChwZXIgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy81ODg2KVxuICAvL+KaoCB3ZSBnZW5lcmFsbHkgYXZvaWQgc3RvcHBpbmcgcHJvcGFnYXRpb24gb2YgZXZlbnRzLCBidXQgdGhpcyBpcyBuZWVkZWQgdG8gYWRoZXJlIHRvIHRoZSBpbnRlbmRlZCBzcGVjIGNoYW5nZXMgYWJvdmUg4pqgXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IGNhcHR1cmVPbmx5T3B0aW9ucyA9IHsgY2FwdHVyZTogdHJ1ZSB9O1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1cGRhdGVzIHRoZSBob3N0IGVsZW1lbnQgdG8gcHJldmVudCBrZXlib2FyZCBpbnRlcmFjdGlvbiBvbiBpdHMgc3VidHJlZSBhbmQgc2V0cyB0aGUgYXBwcm9wcmlhdGUgYXJpYSBhdHRyaWJ1dGUgZm9yIGFjY2Vzc2liaWxpdHkuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZFJlbmRlcmAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogKipOb3RlcyoqXG4gKlxuICogdGhpcyB1dGlsIGlzIG5vdCBuZWVkZWQgZm9yIHNpbXBsZSBjb21wb25lbnRzIHdob3NlIHJvb3QgZWxlbWVudCBvciBlbGVtZW50cyBhcmUgYW4gaW50ZXJhY3RpdmUgY29tcG9uZW50IChjdXN0b20gZWxlbWVudCBvciBuYXRpdmUgY29udHJvbCkuIEZvciB0aG9zZSBjYXNlcywgc2V0IHRoZSBgZGlzYWJsZWRgIHByb3BzIG9uIHRoZSByb290IGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIHRlY2huaWNhbGx5LCB1c2VycyBjYW4gb3ZlcnJpZGUgYHRhYmluZGV4YCBhbmQgcmVzdG9yZSBrZXlib2FyZCBuYXZpZ2F0aW9uLCBidXQgdGhpcyB3aWxsIGJlIGNvbnNpZGVyZWQgdXNlciBlcnJvclxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBob3N0SXNUYWJiYWJsZSDigJMgd2hlbiBzZXQgdG8gdHJ1ZSBvciBpdHMgcHJlZGljYXRlIHJldHVybnMgdHJ1ZSwgdGhlIGhvc3QgaXMgdGFiYmFibGUgYW5kIHdpbGwgYmUgbWFuYWdlZCBieSB0aGUgaGVscGVyLiBTZXQgdG8gXCJtYW5hZ2VkXCIgZm9yIGNhc2VzIHdoZXJlIGEgY29tcG9uZW50J3MgcGFyZW50IGRldGVybWluZXMgd2hpY2ggaXRlbSBpcyB0YWJiYWJsZSAoaS5lLiwgc2V0cyBgdGFiaW5kZXhgIHRvIGFsbG93IHRhYmJpbmcpLlxuICovXG5mdW5jdGlvbiB1cGRhdGVIb3N0SW50ZXJhY3Rpb24oY29tcG9uZW50LCBob3N0SXNUYWJiYWJsZSA9IGZhbHNlKSB7XG4gIGlmIChjb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgaWYgKGNvbXBvbmVudC5lbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICAgIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbiAgICByZXR1cm47XG4gIH1cbiAgcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCk7XG4gIGlmICh0eXBlb2YgaG9zdElzVGFiYmFibGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBob3N0SXNUYWJiYWJsZS5jYWxsKGNvbXBvbmVudCkgPyBcIjBcIiA6IFwiLTFcIik7XG4gIH1cbiAgZWxzZSBpZiAoaG9zdElzVGFiYmFibGUgPT09IHRydWUpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSBmYWxzZSkge1xuICAgIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcbiAgfVxuICBlbHNlIDtcbiAgY29tcG9uZW50LmVsLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIik7XG59XG5mdW5jdGlvbiBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZWwuY2xpY2sgPSBpbnRlcmNlcHRlZENsaWNrO1xuICBhZGRJbnRlcmFjdGlvbkxpc3RlbmVycyhpc0ZpcmVmb3ggPyBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gYWRkSW50ZXJhY3Rpb25MaXN0ZW5lcnMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICAvLyB0aGlzIHBhdGggaXMgb25seSBhcHBsaWNhYmxlIHRvIEZpcmVmb3hcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG59XG5mdW5jdGlvbiBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkge1xuICByZXR1cm4gaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KSB7XG4gIGRlbGV0ZSBjb21wb25lbnQuZWwuY2xpY2s7IC8vIGZhbGxiYWNrIG9uIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGlja1xuICByZW1vdmVJbnRlcmFjdGlvbkxpc3RlbmVycyhpc0ZpcmVmb3ggPyBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gcmVtb3ZlSW50ZXJhY3Rpb25MaXN0ZW5lcnMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICAvLyB0aGlzIHBhdGggaXMgb25seSBhcHBsaWNhYmxlIHRvIEZpcmVmb3hcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBoZWxwcyBkaXNhYmxlIGNvbXBvbmVudHMgY29uc2lzdGVudGx5IGluIEZpcmVmb3guXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBjb25uZWN0ZWRDYWxsYmFja2AgYW5kIGlzIG9ubHkgbmVlZGVkIGZvciBGaXJlZm94IGFzIGl0IGRvZXMgbm90IGNhbGwgY2FwdHVyZSBldmVudCBsaXN0ZW5lcnMgYmVmb3JlIG5vbi1jYXB0dXJlIG9uZXMgKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzMxNTA0KS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RJbnRlcmFjdGl2ZShjb21wb25lbnQpIHtcbiAgaWYgKCFjb21wb25lbnQuZGlzYWJsZWQgfHwgIWlzRmlyZWZveCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwYXJlbnQgPSBjb21wb25lbnQuZWwucGFyZW50RWxlbWVudCB8fCBjb21wb25lbnQuZWw7IC8qIGFzc3VtZSBlbGVtZW50IGlzIGhvc3QgaWYgaXQgaGFzIG5vIHBhcmVudCB3aGVuIGNvbm5lY3RlZCAqL1xuICBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5zZXQoY29tcG9uZW50LmVsLCBwYXJlbnQpO1xuICBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSByZXN0b3JlcyBpbnRlcmFjdGl2aXR5IHRvIGRpc2FibGVkIGNvbXBvbmVudHMgY29uc2lzdGVudGx5IGluIEZpcmVmb3guXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFja2AgYW5kIGlzIG9ubHkgbmVlZGVkIGZvciBGaXJlZm94IGFzIGl0IGRvZXMgbm90IGNhbGwgY2FwdHVyZSBldmVudCBsaXN0ZW5lcnMgYmVmb3JlIG5vbi1jYXB0dXJlIG9uZXMgKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzMxNTA0KS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZShjb21wb25lbnQpIHtcbiAgaWYgKCFpc0ZpcmVmb3gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYWx3YXlzIHJlbW92ZSBvbiBkaXNjb25uZWN0IGFzIHJlbmRlciBvciBjb25uZWN0IHdpbGwgcmVzdG9yZSBpdFxuICBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RJbnRlcmFjdGl2ZSBhcyBjLCBkaXNjb25uZWN0SW50ZXJhY3RpdmUgYXMgZCwgZ2V0VXNlckFnZW50U3RyaW5nIGFzIGcsIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiBhcyB1IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBoLCBIb3N0IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYSBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBzIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRGb2N1c2FibGUgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlTWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzIH0gZnJvbSAnLi90OW4uanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSB9IGZyb20gJy4vaW50ZXJhY3RpdmUuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldEVsZW1lbnREaXIsIEMgYXMgQ1NTX1VUSUxJVFkgfSBmcm9tICcuL2RvbS5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgbnVtYmVyQ2VsbDogXCJudW1iZXItY2VsbFwiLFxuICBmb290ZXJDZWxsOiBcImZvb3Rlci1jZWxsXCIsXG4gIHNlbGVjdGlvbkNlbGw6IFwic2VsZWN0aW9uLWNlbGxcIixcbiAgc2VsZWN0ZWRDZWxsOiBcInNlbGVjdGVkLWNlbGxcIixcbiAgYXNzaXN0aXZlVGV4dDogXCJhc3Npc3RpdmUtdGV4dFwiLFxufTtcblxuY29uc3QgdGFibGVDZWxsQ3NzID0gXCI6aG9zdHstLWNhbGNpdGUtaW50ZXJuYWwtdGFibGUtY2VsbC1iYWNrZ3JvdW5kLWludGVybmFsOnZhcigtLWNhbGNpdGUtdGFibGUtY2VsbC1iYWNrZ3JvdW5kLCB0cmFuc3BhcmVudCk7LS1jYWxjaXRlLWludGVybmFsLXRhYmxlLWNlbGwtYm9yZGVyLWNvbG9yLWludGVybmFsOnZhcigtLWNhbGNpdGUtdGFibGUtY2VsbC1ib3JkZXItY29sb3IsIHRyYW5zcGFyZW50KTtkaXNwbGF5OmNvbnRlbnRzfTpob3N0KFthbGlnbm1lbnQ9Y2VudGVyXSkgdGR7dGV4dC1hbGlnbjpjZW50ZXJ9Omhvc3QoW2FsaWdubWVudD1lbmRdKSB0ZHt0ZXh0LWFsaWduOmVuZH0uYXNzaXN0aXZlLXRleHR7cG9zaXRpb246YWJzb2x1dGU7aW5saW5lLXNpemU6MXB4O2Jsb2NrLXNpemU6MXB4O3BhZGRpbmc6MDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47Y2xpcDpyZWN0KDAsIDAsIDAsIDApO3doaXRlLXNwYWNlOm5vd3JhcDtib3JkZXItd2lkdGg6MH10ZHt3aGl0ZS1zcGFjZTpub3JtYWw7dGV4dC1hbGlnbjpzdGFydDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7YmFja2dyb3VuZDp2YXIoLS1jYWxjaXRlLWludGVybmFsLXRhYmxlLWNlbGwtYmFja2dyb3VuZCk7Ym9yZGVyLWlubGluZS1lbmQ6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWludGVybmFsLXRhYmxlLWNlbGwtZm9udC1zaXplKTtwYWRkaW5nOnZhcigtLWNhbGNpdGUtaW50ZXJuYWwtdGFibGUtY2VsbC1wYWRkaW5nKX10ZDpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9Lm51bWJlci1jZWxse2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfS5mb290ZXItY2VsbHtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYmFja2dyb3VuZCk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTtib3JkZXItYmxvY2stc3RhcnQ6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfS5udW1iZXItY2VsbCwuc2VsZWN0aW9uLWNlbGx7Ym9yZGVyLWlubGluZS1lbmQ6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpO2lubGluZS1zaXplOjJyZW07bWluLWlubGluZS1zaXplOjJyZW19LnNlbGVjdGlvbi1jZWxse2N1cnNvcjpwb2ludGVyO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTtpbnNldC1pbmxpbmUtc3RhcnQ6MnJlbX0uc2VsZWN0ZWQtY2VsbDpub3QoLm51bWJlci1jZWxsKTpub3QoLmZvb3Rlci1jZWxsKXstLWNhbGNpdGUtdGFibGUtY2VsbC1iYWNrZ3JvdW5kOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KTtiYWNrZ3JvdW5kOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KX0uc2VsZWN0aW9uLWNlbGwuc2VsZWN0ZWQtY2VsbHtib3gtc2hhZG93Omluc2V0IDAuMjVyZW0gMCAwIDAgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9LnNlbGVjdGlvbi1jZWxsLnNlbGVjdGVkLWNlbGwgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS5jYWxjaXRlLS1ydGwuc2VsZWN0aW9uLWNlbGwuc2VsZWN0ZWQtY2VsbHtib3gtc2hhZG93Omluc2V0IC0wLjI1cmVtIDAgMCAwIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS5zZWxlY3Rpb24tY2VsbHt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LnNlbGVjdGlvbi1jZWxsIDo6c2xvdHRlZChjYWxjaXRlLWljb24pe3BvaW50ZXItZXZlbnRzOm5vbmU7bWFyZ2luLWJsb2NrLXN0YXJ0OjAuMjVyZW19XCI7XG5cbmNvbnN0IFRhYmxlQ2VsbCA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy51cGRhdGVTY3JlZW5SZWFkZXJDb250ZW50c1RleHQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNvbnRlbnRzVGV4dCA9IHRoaXMuZWwudGV4dENvbnRlbnQ7XG4gICAgfTtcbiAgICB0aGlzLm9uQ29udGFpbmVyQmx1ciA9ICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIH07XG4gICAgdGhpcy5vbkNvbnRhaW5lckZvY3VzID0gKCkgPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICB9O1xuICAgIHRoaXMuYWxpZ25tZW50ID0gXCJzdGFydFwiO1xuICAgIHRoaXMuY29sU3BhbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJvd1NwYW4gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm51bWJlckNlbGwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYXJlbnRSb3dJc1NlbGVjdGVkID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGFyZW50Um93UG9zaXRpb25Mb2NhbGl6ZWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYXJlbnRSb3dUeXBlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucG9zaXRpb25JblJvdyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlYWRDZWxsQ29udGVudHNUb0FUID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnNlbGVjdGlvbkNlbGwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb250ZW50c1RleHQgPSBcIlwiO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0aW9uVGV4dCA9IFwiXCI7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICB9XG4gIG9uU2VsZWN0ZWRDaGFuZ2UoKSB7XG4gICAgdGhpcy51cGRhdGVTY3JlZW5SZWFkZXJTZWxlY3Rpb25UZXh0KCk7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy51cGRhdGVTY3JlZW5SZWFkZXJDb250ZW50c1RleHQoKTtcbiAgICB0aGlzLnVwZGF0ZVNjcmVlblJlYWRlclNlbGVjdGlvblRleHQoKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIHRoaXMuY29udGFpbmVyRWwuZm9jdXMoKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVwZGF0ZVNjcmVlblJlYWRlclNlbGVjdGlvblRleHQoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRUZXh0ID0gYCR7dGhpcy5tZXNzYWdlcz8ucm93fSAke3RoaXMucGFyZW50Um93UG9zaXRpb25Mb2NhbGl6ZWR9ICR7dGhpcy5tZXNzYWdlcz8uc2VsZWN0ZWR9ICR7dGhpcy5tZXNzYWdlcz8ua2V5Ym9hcmREZXNlbGVjdH1gO1xuICAgIGNvbnN0IHVuc2VsZWN0ZWRUZXh0ID0gYCR7dGhpcy5tZXNzYWdlcz8ucm93fSAke3RoaXMucGFyZW50Um93UG9zaXRpb25Mb2NhbGl6ZWR9ICR7dGhpcy5tZXNzYWdlcz8udW5zZWxlY3RlZH0gJHt0aGlzLm1lc3NhZ2VzPy5rZXlib2FyZFNlbGVjdH1gO1xuICAgIHRoaXMuc2VsZWN0aW9uVGV4dCA9IHRoaXMucGFyZW50Um93SXNTZWxlY3RlZCA/IHNlbGVjdGVkVGV4dCA6IHVuc2VsZWN0ZWRUZXh0O1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIodGhpcy5lbCk7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJ0ZFwiLCB7IFwiYXJpYS1kaXNhYmxlZFwiOiB0aGlzLmRpc2FibGVkLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmZvb3RlckNlbGxdOiB0aGlzLnBhcmVudFJvd1R5cGUgPT09IFwiZm9vdFwiLFxuICAgICAgICBbQ1NTLm51bWJlckNlbGxdOiB0aGlzLm51bWJlckNlbGwsXG4gICAgICAgIFtDU1Muc2VsZWN0aW9uQ2VsbF06IHRoaXMuc2VsZWN0aW9uQ2VsbCxcbiAgICAgICAgW0NTUy5zZWxlY3RlZENlbGxdOiB0aGlzLnBhcmVudFJvd0lzU2VsZWN0ZWQsXG4gICAgICAgIFtDU1NfVVRJTElUWS5ydGxdOiBkaXIgPT09IFwicnRsXCIsXG4gICAgICB9LCBjb2xTcGFuOiB0aGlzLmNvbFNwYW4sIG9uQmx1cjogdGhpcy5vbkNvbnRhaW5lckJsdXIsIG9uRm9jdXM6IHRoaXMub25Db250YWluZXJGb2N1cywgcm9sZTogXCJncmlkY2VsbFwiLCByb3dTcGFuOiB0aGlzLnJvd1NwYW4sIHRhYkluZGV4OiB0aGlzLmRpc2FibGVkID8gLTEgOiAwLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5jb250YWluZXJFbCA9IGVsKSB9LCAodGhpcy5zZWxlY3Rpb25DZWxsIHx8IHRoaXMucmVhZENlbGxDb250ZW50c1RvQVQpICYmIHRoaXMuZm9jdXNlZCAmJiAoaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IHRydWUsIFwiYXJpYS1saXZlXCI6IFwicG9saXRlXCIsIGNsYXNzOiBDU1MuYXNzaXN0aXZlVGV4dCB9LCB0aGlzLnNlbGVjdGlvbkNlbGwgJiYgdGhpcy5zZWxlY3Rpb25UZXh0LCB0aGlzLnJlYWRDZWxsQ29udGVudHNUb0FUICYmICF0aGlzLnNlbGVjdGlvbkNlbGwgJiYgdGhpcy5jb250ZW50c1RleHQpKSwgaChcInNsb3RcIiwgeyBvblNsb3RjaGFuZ2U6IHRoaXMudXBkYXRlU2NyZWVuUmVhZGVyQ29udGVudHNUZXh0IH0pKSkpO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJwYXJlbnRSb3dJc1NlbGVjdGVkXCI6IFtcIm9uU2VsZWN0ZWRDaGFuZ2VcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIHRhYmxlQ2VsbENzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS10YWJsZS1jZWxsXCIsIHtcbiAgICBcImFsaWdubWVudFwiOiBbNTEzXSxcbiAgICBcImNvbFNwYW5cIjogWzUxNCwgXCJjb2wtc3BhblwiXSxcbiAgICBcInJvd1NwYW5cIjogWzUxNCwgXCJyb3ctc3BhblwiXSxcbiAgICBcImRpc2FibGVkXCI6IFs0XSxcbiAgICBcIm51bWJlckNlbGxcIjogWzQsIFwibnVtYmVyLWNlbGxcIl0sXG4gICAgXCJwYXJlbnRSb3dJc1NlbGVjdGVkXCI6IFs0LCBcInBhcmVudC1yb3ctaXMtc2VsZWN0ZWRcIl0sXG4gICAgXCJwYXJlbnRSb3dQb3NpdGlvbkxvY2FsaXplZFwiOiBbMSwgXCJwYXJlbnQtcm93LXBvc2l0aW9uLWxvY2FsaXplZFwiXSxcbiAgICBcInBhcmVudFJvd1R5cGVcIjogWzEsIFwicGFyZW50LXJvdy10eXBlXCJdLFxuICAgIFwicG9zaXRpb25JblJvd1wiOiBbMiwgXCJwb3NpdGlvbi1pbi1yb3dcIl0sXG4gICAgXCJyZWFkQ2VsbENvbnRlbnRzVG9BVFwiOiBbNCwgXCJyZWFkLWNlbGwtY29udGVudHMtdG8tYS10XCJdLFxuICAgIFwic2NhbGVcIjogWzFdLFxuICAgIFwic2VsZWN0aW9uQ2VsbFwiOiBbNCwgXCJzZWxlY3Rpb24tY2VsbFwiXSxcbiAgICBcIm1lc3NhZ2VzXCI6IFsxMDQwXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogWzEwNDBdLFxuICAgIFwiY29udGVudHNUZXh0XCI6IFszMl0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXSxcbiAgICBcImZvY3VzZWRcIjogWzMyXSxcbiAgICBcInNlbGVjdGlvblRleHRcIjogWzMyXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwic2V0Rm9jdXNcIjogWzY0XVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXRhYmxlLWNlbGxcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtdGFibGUtY2VsbFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIFRhYmxlQ2VsbCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgVGFibGVDZWxsIGFzIFQsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9