"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-label_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-label.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-label.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteLabel: () => (/* binding */ CalciteLabel),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _label_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label.js */ "./node_modules/@esri/calcite-components/dist/components/label.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const CalciteLabel = _label_js__WEBPACK_IMPORTED_MODULE_0__.L;
const defineCustomElement = _label_js__WEBPACK_IMPORTED_MODULE_0__.d;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/label.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/label.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ Label),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _label2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label2.js */ "./node_modules/@esri/calcite-components/dist/components/label2.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const CSS = {
  container: "container",
};

const labelCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{gap:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.5rem)}:host([scale=m]) .container{gap:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.75rem)}:host([scale=l]) .container{gap:0.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-ui-text-1)}:host([layout=default]) .container{display:flex;flex-direction:column}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:0.5rem}:host([layout=inline][scale=l]) .container{gap:0.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity:0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}";

const Label = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalLabelClick = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.createEvent)(this, "calciteInternalLabelClick", 2);
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.labelClickHandler = (event) => {
      this.calciteInternalLabelClick.emit({
        sourceEvent: event,
      });
    };
    this.alignment = "start";
    this.for = undefined;
    this.scale = "m";
    this.layout = "default";
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    document.dispatchEvent(new CustomEvent(_label2_js__WEBPACK_IMPORTED_MODULE_0__.l));
  }
  disconnectedCallback() {
    document.dispatchEvent(new CustomEvent(_label2_js__WEBPACK_IMPORTED_MODULE_0__.a));
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.Host, { onClick: this.labelClickHandler }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: CSS.container }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null))));
  }
  get el() { return this; }
  static get style() { return labelCss; }
}, [1, "calcite-label", {
    "alignment": [513],
    "for": [513],
    "scale": [513],
    "layout": [513]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-label"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-label":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Label);
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/label2.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/label2.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ labelDisconnectedEvent),
/* harmony export */   c: () => (/* binding */ connectLabel),
/* harmony export */   d: () => (/* binding */ disconnectLabel),
/* harmony export */   g: () => (/* binding */ getLabelText),
/* harmony export */   l: () => (/* binding */ labelConnectedEvent)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


/**
 * Exported for testing purposes only
 *
 * @internal
 */
const labelClickEvent = "calciteInternalLabelClick";
const labelConnectedEvent = "calciteInternalLabelConnected";
const labelDisconnectedEvent = "calciteInternalLabelDisconnected";
const labelTagName = "calcite-label";
const labelToLabelables = new WeakMap();
const onLabelClickMap = new WeakMap();
const onLabelConnectedMap = new WeakMap();
const onLabelDisconnectedMap = new WeakMap();
const unlabeledComponents = new WeakSet();
const findLabelForComponent = (componentEl) => {
  const { id } = componentEl;
  const forLabel = id && (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.q)(componentEl, { selector: `${labelTagName}[for="${id}"]` });
  if (forLabel) {
    return forLabel;
  }
  const parentLabel = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.c)(componentEl, labelTagName);
  if (!parentLabel ||
    // labelable components within other custom elements are not considered labelable
    hasAncestorCustomElements(parentLabel, componentEl)) {
    return null;
  }
  return parentLabel;
};
function hasAncestorCustomElements(label, componentEl) {
  let traversedElements;
  const customElementAncestorCheckEventType = "custom-element-ancestor-check";
  const listener = (event) => {
    event.stopImmediatePropagation();
    const composedPath = event.composedPath();
    traversedElements = composedPath.slice(composedPath.indexOf(componentEl), composedPath.indexOf(label));
  };
  label.addEventListener(customElementAncestorCheckEventType, listener, { once: true });
  componentEl.dispatchEvent(new CustomEvent(customElementAncestorCheckEventType, { composed: true, bubbles: true }));
  label.removeEventListener(customElementAncestorCheckEventType, listener);
  const ancestorCustomElements = traversedElements
    .filter((el) => el !== componentEl && el !== label)
    .filter((el) => el.tagName?.includes("-"));
  return ancestorCustomElements.length > 0;
}
/**
 * Helper to set up label interactions on connectedCallback.
 *
 * @param component
 */
function connectLabel(component) {
  const labelEl = findLabelForComponent(component.el);
  if ((onLabelClickMap.has(labelEl) && labelEl === component.labelEl) ||
    (!labelEl && unlabeledComponents.has(component))) {
    return;
  }
  const boundOnLabelDisconnected = onLabelDisconnected.bind(component);
  if (labelEl) {
    component.labelEl = labelEl;
    const labelables = labelToLabelables.get(labelEl) || [];
    labelables.push(component);
    labelToLabelables.set(labelEl, labelables.sort(sortByDOMOrder));
    if (!onLabelClickMap.has(component.labelEl)) {
      onLabelClickMap.set(component.labelEl, onLabelClick);
      component.labelEl.addEventListener(labelClickEvent, onLabelClick);
    }
    unlabeledComponents.delete(component);
    document.removeEventListener(labelConnectedEvent, onLabelConnectedMap.get(component));
    onLabelDisconnectedMap.set(component, boundOnLabelDisconnected);
    document.addEventListener(labelDisconnectedEvent, boundOnLabelDisconnected);
  }
  else if (!unlabeledComponents.has(component)) {
    boundOnLabelDisconnected();
    document.removeEventListener(labelDisconnectedEvent, onLabelDisconnectedMap.get(component));
  }
}
/**
 * Helper to tear down label interactions on disconnectedCallback on labelable components.
 *
 * @param component
 */
function disconnectLabel(component) {
  unlabeledComponents.delete(component);
  document.removeEventListener(labelConnectedEvent, onLabelConnectedMap.get(component));
  document.removeEventListener(labelDisconnectedEvent, onLabelDisconnectedMap.get(component));
  onLabelConnectedMap.delete(component);
  onLabelDisconnectedMap.delete(component);
  if (!component.labelEl) {
    return;
  }
  const labelables = labelToLabelables.get(component.labelEl);
  if (labelables.length === 1) {
    component.labelEl.removeEventListener(labelClickEvent, onLabelClickMap.get(component.labelEl));
    onLabelClickMap.delete(component.labelEl);
  }
  labelToLabelables.set(component.labelEl, labelables.filter((labelable) => labelable !== component).sort(sortByDOMOrder));
  component.labelEl = null;
}
function sortByDOMOrder(a, b) {
  return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.y)(a.el, b.el) ? -1 : 1;
}
/**
 * Helper to get the label text from a component.
 *
 * @param component
 */
function getLabelText(component) {
  return component.label || component.labelEl?.textContent?.trim() || "";
}
function onLabelClick(event) {
  const labelClickTarget = event.detail.sourceEvent.target;
  const labelables = labelToLabelables.get(this);
  const clickedLabelable = labelables.find((labelable) => labelable.el === labelClickTarget);
  const labelableChildClicked = labelables.includes(clickedLabelable);
  if (labelableChildClicked) {
    // no need to forward click as labelable will receive focus
    return;
  }
  const firstLabelable = labelables[0];
  if (firstLabelable.disabled) {
    return;
  }
  firstLabelable.onLabelClick(event);
}
function onLabelConnected() {
  if (unlabeledComponents.has(this)) {
    connectLabel(this);
  }
}
function onLabelDisconnected() {
  unlabeledComponents.add(this);
  const boundOnLabelConnected = onLabelConnectedMap.get(this) || onLabelConnected.bind(this);
  onLabelConnectedMap.set(this, boundOnLabelConnected);
  document.addEventListener(labelConnectedEvent, boundOnLabelConnected);
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZDNhNjZmZGRhODkxNTc0ZjU0NWU1MDY0MTM3ZmNjYjkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvRTs7QUFFcEUscUJBQXFCLHdDQUFLO0FBQzFCLDRCQUE0Qix3Q0FBcUI7O0FBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytHO0FBQzNCOztBQUVwRjtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGFBQWEseUJBQXlCLGlCQUFpQix1QkFBdUIsZUFBZSwwQkFBMEIsa0JBQWtCLDRCQUE0QixZQUFZLHNDQUFzQyxpQkFBaUIsNERBQTRELDRCQUE0QixXQUFXLHNDQUFzQyxpQkFBaUIsNkRBQTZELDRCQUE0QixXQUFXLHFDQUFxQyxvQkFBb0IsMERBQTBELGlCQUFpQixrQkFBa0IsdUJBQXVCLGlCQUFpQixrQkFBa0IsK0JBQStCLG1DQUFtQyxhQUFhLHNCQUFzQixrRkFBa0YsYUFBYSxtQkFBbUIsbUJBQW1CLFdBQVcsMkNBQTJDLFlBQVksZ0RBQWdELDhCQUE4Qiw2QkFBNkIsMkNBQTJDLG9GQUFvRixrQkFBa0IsaUVBQWlFLGtCQUFrQix5R0FBeUcsVUFBVSxnQkFBZ0IsYUFBYSxTQUFTLGFBQWE7O0FBRTVxRCw0QkFBNEIsMEZBQWtCLGVBQWUsK0VBQVc7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsbUZBQVc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMseUNBQW1CO0FBQzlEO0FBQ0E7QUFDQSwyQ0FBMkMseUNBQXNCO0FBQ2pFO0FBQ0E7QUFDQSxZQUFZLHlFQUFDLENBQUMsd0VBQUksSUFBSSxpQ0FBaUMsRUFBRSx5RUFBQyxVQUFVLHNCQUFzQixFQUFFLHlFQUFDO0FBQzdGO0FBQ0EsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRWdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5Rzs7QUFFekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFLO0FBQ2YseUJBQXlCLDBDQUFpQixnQkFBZ0IsYUFBYSxhQUFhLFFBQVEsR0FBRyxLQUFLO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwQ0FBaUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLFlBQVk7QUFDdEYsbUZBQW1GLCtCQUErQjtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDBDQUFRO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtbGFiZWwuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2xhYmVsLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9sYWJlbDIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgTCBhcyBMYWJlbCwgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDEgfSBmcm9tICcuL2xhYmVsLmpzJztcblxuY29uc3QgQ2FsY2l0ZUxhYmVsID0gTGFiZWw7XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gZGVmaW5lQ3VzdG9tRWxlbWVudCQxO1xuXG5leHBvcnQgeyBDYWxjaXRlTGFiZWwsIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoLCBIb3N0IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgbCBhcyBsYWJlbENvbm5lY3RlZEV2ZW50LCBhIGFzIGxhYmVsRGlzY29ubmVjdGVkRXZlbnQgfSBmcm9tICcuL2xhYmVsMi5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxufTtcblxuY29uc3QgbGFiZWxDc3MgPSBcIjpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2Rpc3BsYXk6ZmxleH06aG9zdChbYWxpZ25tZW50PXN0YXJ0XSl7dGV4dC1hbGlnbjpzdGFydH06aG9zdChbYWxpZ25tZW50PWVuZF0pe3RleHQtYWxpZ246ZW5kfTpob3N0KFthbGlnbm1lbnQ9Y2VudGVyXSl7dGV4dC1hbGlnbjpjZW50ZXJ9Omhvc3QoW3NjYWxlPXNdKSAuY29udGFpbmVye2dhcDowLjI1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbTttYXJnaW4tYmxvY2stZW5kOnZhcigtLWNhbGNpdGUtbGFiZWwtbWFyZ2luLWJvdHRvbSwgMC41cmVtKX06aG9zdChbc2NhbGU9bV0pIC5jb250YWluZXJ7Z2FwOjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW07bWFyZ2luLWJsb2NrLWVuZDp2YXIoLS1jYWxjaXRlLWxhYmVsLW1hcmdpbi1ib3R0b20sIDAuNzVyZW0pfTpob3N0KFtzY2FsZT1sXSkgLmNvbnRhaW5lcntnYXA6MC41cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtO21hcmdpbi1ibG9jay1lbmQ6dmFyKC0tY2FsY2l0ZS1sYWJlbC1tYXJnaW4tYm90dG9tLCAxcmVtKX06aG9zdCAuY29udGFpbmVye21hcmdpbi1pbmxpbmU6MHB4O21hcmdpbi1ibG9jay1zdGFydDowcHg7aW5saW5lLXNpemU6MTAwJTtsaW5lLWhlaWdodDoxLjM3NTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW2xheW91dD1kZWZhdWx0XSkgLmNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1ufTpob3N0KFtsYXlvdXQ9aW5saW5lXSkgLmNvbnRhaW5lciw6aG9zdChbbGF5b3V0PWlubGluZS1zcGFjZS1iZXR3ZWVuXSkgLmNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6MC41cmVtfTpob3N0KFtsYXlvdXQ9aW5saW5lXVtzY2FsZT1sXSkgLmNvbnRhaW5lcntnYXA6MC43NXJlbX06aG9zdChbbGF5b3V0PWlubGluZS1zcGFjZS1iZXR3ZWVuXSkgLmNvbnRhaW5lcntqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn06aG9zdChbZGlzYWJsZWRdKT4uY29udGFpbmVye29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKltkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqW2Rpc2FibGVkXSAqKXstLXR3LWJnLW9wYWNpdHk6MX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoY2FsY2l0ZS1pbnB1dC1tZXNzYWdlOm5vdChbYWN0aXZlXSkpey0tdHctYmctb3BhY2l0eTowfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgTGFiZWwgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsTGFiZWxDbGljayA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsTGFiZWxDbGlja1wiLCAyKTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5sYWJlbENsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxMYWJlbENsaWNrLmVtaXQoe1xuICAgICAgICBzb3VyY2VFdmVudDogZXZlbnQsXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuYWxpZ25tZW50ID0gXCJzdGFydFwiO1xuICAgIHRoaXMuZm9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLmxheW91dCA9IFwiZGVmYXVsdFwiO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGxhYmVsQ29ubmVjdGVkRXZlbnQpKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChsYWJlbERpc2Nvbm5lY3RlZEV2ZW50KSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMubGFiZWxDbGlja0hhbmRsZXIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGFpbmVyIH0sIGgoXCJzbG90XCIsIG51bGwpKSkpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIGxhYmVsQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWxhYmVsXCIsIHtcbiAgICBcImFsaWdubWVudFwiOiBbNTEzXSxcbiAgICBcImZvclwiOiBbNTEzXSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwibGF5b3V0XCI6IFs1MTNdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtbGFiZWxcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtbGFiZWxcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBMYWJlbCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgTGFiZWwgYXMgTCwgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyB5IGFzIGlzQmVmb3JlLCBxIGFzIHF1ZXJ5RWxlbWVudFJvb3RzLCBjIGFzIGNsb3Nlc3RFbGVtZW50Q3Jvc3NTaGFkb3dCb3VuZGFyeSB9IGZyb20gJy4vZG9tLmpzJztcblxuLyoqXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5XG4gKlxuICogQGludGVybmFsXG4gKi9cbmNvbnN0IGxhYmVsQ2xpY2tFdmVudCA9IFwiY2FsY2l0ZUludGVybmFsTGFiZWxDbGlja1wiO1xuY29uc3QgbGFiZWxDb25uZWN0ZWRFdmVudCA9IFwiY2FsY2l0ZUludGVybmFsTGFiZWxDb25uZWN0ZWRcIjtcbmNvbnN0IGxhYmVsRGlzY29ubmVjdGVkRXZlbnQgPSBcImNhbGNpdGVJbnRlcm5hbExhYmVsRGlzY29ubmVjdGVkXCI7XG5jb25zdCBsYWJlbFRhZ05hbWUgPSBcImNhbGNpdGUtbGFiZWxcIjtcbmNvbnN0IGxhYmVsVG9MYWJlbGFibGVzID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IG9uTGFiZWxDbGlja01hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBvbkxhYmVsQ29ubmVjdGVkTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdW5sYWJlbGVkQ29tcG9uZW50cyA9IG5ldyBXZWFrU2V0KCk7XG5jb25zdCBmaW5kTGFiZWxGb3JDb21wb25lbnQgPSAoY29tcG9uZW50RWwpID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gY29tcG9uZW50RWw7XG4gIGNvbnN0IGZvckxhYmVsID0gaWQgJiYgcXVlcnlFbGVtZW50Um9vdHMoY29tcG9uZW50RWwsIHsgc2VsZWN0b3I6IGAke2xhYmVsVGFnTmFtZX1bZm9yPVwiJHtpZH1cIl1gIH0pO1xuICBpZiAoZm9yTGFiZWwpIHtcbiAgICByZXR1cm4gZm9yTGFiZWw7XG4gIH1cbiAgY29uc3QgcGFyZW50TGFiZWwgPSBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkoY29tcG9uZW50RWwsIGxhYmVsVGFnTmFtZSk7XG4gIGlmICghcGFyZW50TGFiZWwgfHxcbiAgICAvLyBsYWJlbGFibGUgY29tcG9uZW50cyB3aXRoaW4gb3RoZXIgY3VzdG9tIGVsZW1lbnRzIGFyZSBub3QgY29uc2lkZXJlZCBsYWJlbGFibGVcbiAgICBoYXNBbmNlc3RvckN1c3RvbUVsZW1lbnRzKHBhcmVudExhYmVsLCBjb21wb25lbnRFbCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gcGFyZW50TGFiZWw7XG59O1xuZnVuY3Rpb24gaGFzQW5jZXN0b3JDdXN0b21FbGVtZW50cyhsYWJlbCwgY29tcG9uZW50RWwpIHtcbiAgbGV0IHRyYXZlcnNlZEVsZW1lbnRzO1xuICBjb25zdCBjdXN0b21FbGVtZW50QW5jZXN0b3JDaGVja0V2ZW50VHlwZSA9IFwiY3VzdG9tLWVsZW1lbnQtYW5jZXN0b3ItY2hlY2tcIjtcbiAgY29uc3QgbGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICB0cmF2ZXJzZWRFbGVtZW50cyA9IGNvbXBvc2VkUGF0aC5zbGljZShjb21wb3NlZFBhdGguaW5kZXhPZihjb21wb25lbnRFbCksIGNvbXBvc2VkUGF0aC5pbmRleE9mKGxhYmVsKSk7XG4gIH07XG4gIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoY3VzdG9tRWxlbWVudEFuY2VzdG9yQ2hlY2tFdmVudFR5cGUsIGxpc3RlbmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gIGNvbXBvbmVudEVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGN1c3RvbUVsZW1lbnRBbmNlc3RvckNoZWNrRXZlbnRUeXBlLCB7IGNvbXBvc2VkOiB0cnVlLCBidWJibGVzOiB0cnVlIH0pKTtcbiAgbGFiZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihjdXN0b21FbGVtZW50QW5jZXN0b3JDaGVja0V2ZW50VHlwZSwgbGlzdGVuZXIpO1xuICBjb25zdCBhbmNlc3RvckN1c3RvbUVsZW1lbnRzID0gdHJhdmVyc2VkRWxlbWVudHNcbiAgICAuZmlsdGVyKChlbCkgPT4gZWwgIT09IGNvbXBvbmVudEVsICYmIGVsICE9PSBsYWJlbClcbiAgICAuZmlsdGVyKChlbCkgPT4gZWwudGFnTmFtZT8uaW5jbHVkZXMoXCItXCIpKTtcbiAgcmV0dXJuIGFuY2VzdG9yQ3VzdG9tRWxlbWVudHMubGVuZ3RoID4gMDtcbn1cbi8qKlxuICogSGVscGVyIHRvIHNldCB1cCBsYWJlbCBpbnRlcmFjdGlvbnMgb24gY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0TGFiZWwoY29tcG9uZW50KSB7XG4gIGNvbnN0IGxhYmVsRWwgPSBmaW5kTGFiZWxGb3JDb21wb25lbnQoY29tcG9uZW50LmVsKTtcbiAgaWYgKChvbkxhYmVsQ2xpY2tNYXAuaGFzKGxhYmVsRWwpICYmIGxhYmVsRWwgPT09IGNvbXBvbmVudC5sYWJlbEVsKSB8fFxuICAgICghbGFiZWxFbCAmJiB1bmxhYmVsZWRDb21wb25lbnRzLmhhcyhjb21wb25lbnQpKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBib3VuZE9uTGFiZWxEaXNjb25uZWN0ZWQgPSBvbkxhYmVsRGlzY29ubmVjdGVkLmJpbmQoY29tcG9uZW50KTtcbiAgaWYgKGxhYmVsRWwpIHtcbiAgICBjb21wb25lbnQubGFiZWxFbCA9IGxhYmVsRWw7XG4gICAgY29uc3QgbGFiZWxhYmxlcyA9IGxhYmVsVG9MYWJlbGFibGVzLmdldChsYWJlbEVsKSB8fCBbXTtcbiAgICBsYWJlbGFibGVzLnB1c2goY29tcG9uZW50KTtcbiAgICBsYWJlbFRvTGFiZWxhYmxlcy5zZXQobGFiZWxFbCwgbGFiZWxhYmxlcy5zb3J0KHNvcnRCeURPTU9yZGVyKSk7XG4gICAgaWYgKCFvbkxhYmVsQ2xpY2tNYXAuaGFzKGNvbXBvbmVudC5sYWJlbEVsKSkge1xuICAgICAgb25MYWJlbENsaWNrTWFwLnNldChjb21wb25lbnQubGFiZWxFbCwgb25MYWJlbENsaWNrKTtcbiAgICAgIGNvbXBvbmVudC5sYWJlbEVsLmFkZEV2ZW50TGlzdGVuZXIobGFiZWxDbGlja0V2ZW50LCBvbkxhYmVsQ2xpY2spO1xuICAgIH1cbiAgICB1bmxhYmVsZWRDb21wb25lbnRzLmRlbGV0ZShjb21wb25lbnQpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobGFiZWxDb25uZWN0ZWRFdmVudCwgb25MYWJlbENvbm5lY3RlZE1hcC5nZXQoY29tcG9uZW50KSk7XG4gICAgb25MYWJlbERpc2Nvbm5lY3RlZE1hcC5zZXQoY29tcG9uZW50LCBib3VuZE9uTGFiZWxEaXNjb25uZWN0ZWQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobGFiZWxEaXNjb25uZWN0ZWRFdmVudCwgYm91bmRPbkxhYmVsRGlzY29ubmVjdGVkKTtcbiAgfVxuICBlbHNlIGlmICghdW5sYWJlbGVkQ29tcG9uZW50cy5oYXMoY29tcG9uZW50KSkge1xuICAgIGJvdW5kT25MYWJlbERpc2Nvbm5lY3RlZCgpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobGFiZWxEaXNjb25uZWN0ZWRFdmVudCwgb25MYWJlbERpc2Nvbm5lY3RlZE1hcC5nZXQoY29tcG9uZW50KSk7XG4gIH1cbn1cbi8qKlxuICogSGVscGVyIHRvIHRlYXIgZG93biBsYWJlbCBpbnRlcmFjdGlvbnMgb24gZGlzY29ubmVjdGVkQ2FsbGJhY2sgb24gbGFiZWxhYmxlIGNvbXBvbmVudHMuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0TGFiZWwoY29tcG9uZW50KSB7XG4gIHVubGFiZWxlZENvbXBvbmVudHMuZGVsZXRlKGNvbXBvbmVudCk7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobGFiZWxDb25uZWN0ZWRFdmVudCwgb25MYWJlbENvbm5lY3RlZE1hcC5nZXQoY29tcG9uZW50KSk7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobGFiZWxEaXNjb25uZWN0ZWRFdmVudCwgb25MYWJlbERpc2Nvbm5lY3RlZE1hcC5nZXQoY29tcG9uZW50KSk7XG4gIG9uTGFiZWxDb25uZWN0ZWRNYXAuZGVsZXRlKGNvbXBvbmVudCk7XG4gIG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAuZGVsZXRlKGNvbXBvbmVudCk7XG4gIGlmICghY29tcG9uZW50LmxhYmVsRWwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgbGFiZWxhYmxlcyA9IGxhYmVsVG9MYWJlbGFibGVzLmdldChjb21wb25lbnQubGFiZWxFbCk7XG4gIGlmIChsYWJlbGFibGVzLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbXBvbmVudC5sYWJlbEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIobGFiZWxDbGlja0V2ZW50LCBvbkxhYmVsQ2xpY2tNYXAuZ2V0KGNvbXBvbmVudC5sYWJlbEVsKSk7XG4gICAgb25MYWJlbENsaWNrTWFwLmRlbGV0ZShjb21wb25lbnQubGFiZWxFbCk7XG4gIH1cbiAgbGFiZWxUb0xhYmVsYWJsZXMuc2V0KGNvbXBvbmVudC5sYWJlbEVsLCBsYWJlbGFibGVzLmZpbHRlcigobGFiZWxhYmxlKSA9PiBsYWJlbGFibGUgIT09IGNvbXBvbmVudCkuc29ydChzb3J0QnlET01PcmRlcikpO1xuICBjb21wb25lbnQubGFiZWxFbCA9IG51bGw7XG59XG5mdW5jdGlvbiBzb3J0QnlET01PcmRlcihhLCBiKSB7XG4gIHJldHVybiBpc0JlZm9yZShhLmVsLCBiLmVsKSA/IC0xIDogMTtcbn1cbi8qKlxuICogSGVscGVyIHRvIGdldCB0aGUgbGFiZWwgdGV4dCBmcm9tIGEgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZ2V0TGFiZWxUZXh0KGNvbXBvbmVudCkge1xuICByZXR1cm4gY29tcG9uZW50LmxhYmVsIHx8IGNvbXBvbmVudC5sYWJlbEVsPy50ZXh0Q29udGVudD8udHJpbSgpIHx8IFwiXCI7XG59XG5mdW5jdGlvbiBvbkxhYmVsQ2xpY2soZXZlbnQpIHtcbiAgY29uc3QgbGFiZWxDbGlja1RhcmdldCA9IGV2ZW50LmRldGFpbC5zb3VyY2VFdmVudC50YXJnZXQ7XG4gIGNvbnN0IGxhYmVsYWJsZXMgPSBsYWJlbFRvTGFiZWxhYmxlcy5nZXQodGhpcyk7XG4gIGNvbnN0IGNsaWNrZWRMYWJlbGFibGUgPSBsYWJlbGFibGVzLmZpbmQoKGxhYmVsYWJsZSkgPT4gbGFiZWxhYmxlLmVsID09PSBsYWJlbENsaWNrVGFyZ2V0KTtcbiAgY29uc3QgbGFiZWxhYmxlQ2hpbGRDbGlja2VkID0gbGFiZWxhYmxlcy5pbmNsdWRlcyhjbGlja2VkTGFiZWxhYmxlKTtcbiAgaWYgKGxhYmVsYWJsZUNoaWxkQ2xpY2tlZCkge1xuICAgIC8vIG5vIG5lZWQgdG8gZm9yd2FyZCBjbGljayBhcyBsYWJlbGFibGUgd2lsbCByZWNlaXZlIGZvY3VzXG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGZpcnN0TGFiZWxhYmxlID0gbGFiZWxhYmxlc1swXTtcbiAgaWYgKGZpcnN0TGFiZWxhYmxlLmRpc2FibGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZpcnN0TGFiZWxhYmxlLm9uTGFiZWxDbGljayhldmVudCk7XG59XG5mdW5jdGlvbiBvbkxhYmVsQ29ubmVjdGVkKCkge1xuICBpZiAodW5sYWJlbGVkQ29tcG9uZW50cy5oYXModGhpcykpIHtcbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uTGFiZWxEaXNjb25uZWN0ZWQoKSB7XG4gIHVubGFiZWxlZENvbXBvbmVudHMuYWRkKHRoaXMpO1xuICBjb25zdCBib3VuZE9uTGFiZWxDb25uZWN0ZWQgPSBvbkxhYmVsQ29ubmVjdGVkTWFwLmdldCh0aGlzKSB8fCBvbkxhYmVsQ29ubmVjdGVkLmJpbmQodGhpcyk7XG4gIG9uTGFiZWxDb25uZWN0ZWRNYXAuc2V0KHRoaXMsIGJvdW5kT25MYWJlbENvbm5lY3RlZCk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobGFiZWxDb25uZWN0ZWRFdmVudCwgYm91bmRPbkxhYmVsQ29ubmVjdGVkKTtcbn1cblxuZXhwb3J0IHsgbGFiZWxEaXNjb25uZWN0ZWRFdmVudCBhcyBhLCBjb25uZWN0TGFiZWwgYXMgYywgZGlzY29ubmVjdExhYmVsIGFzIGQsIGdldExhYmVsVGV4dCBhcyBnLCBsYWJlbENvbm5lY3RlZEV2ZW50IGFzIGwgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==