"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_switch_js"],{

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




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/switch.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/switch.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Switch),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ "./node_modules/@esri/calcite-components/dist/components/form.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _label2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./label2.js */ "./node_modules/@esri/calcite-components/dist/components/label2.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */








const switchCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]) .container{block-size:0.75rem}:host([scale=s]) .track{block-size:0.75rem;inline-size:1.5rem}:host([scale=s]) .handle{block-size:0.5rem;inline-size:0.5rem}:host([scale=m]) .container{block-size:1rem}:host([scale=m]) .track{block-size:1rem;inline-size:2rem}:host([scale=m]) .handle{block-size:0.75rem;inline-size:0.75rem}:host([scale=l]) .container{block-size:1.5rem}:host([scale=l]) .track{block-size:1.5rem;inline-size:3rem}:host([scale=l]) .handle{block-size:1.25rem;inline-size:1.25rem}:host{position:relative;display:inline-block;inline-size:auto;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{outline-width:0px}.track{pointer-events:none;position:relative;box-sizing:border-box;display:inline-block;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-2);vertical-align:top;outline-color:transparent}:host(:focus) .track{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.handle{pointer-events:none;position:absolute;display:block;border-radius:9999px;border-width:2px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);inset-block-start:-1px;inset-inline:-1px auto}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([checked]) .track{border-color:var(--calcite-ui-brand-hover);background-color:var(--calcite-ui-brand)}:host([checked]) .handle{border-color:var(--calcite-ui-brand);inset-inline:auto -1px}:host([checked]:hover) .track{border-color:var(--calcite-ui-brand-hover);background-color:var(--calcite-ui-brand)}:host([checked]:hover) .handle{border-color:var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}@media (forced-colors: active){:host([checked]) .track{background-color:canvasText}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";

const Switch = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteSwitchChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.createEvent)(this, "calciteSwitchChange", 6);
    this.keyDownHandler = (event) => {
      if (!this.disabled && (0,_key_js__WEBPACK_IMPORTED_MODULE_3__.i)(event.key)) {
        this.toggle();
        event.preventDefault();
      }
    };
    this.clickHandler = () => {
      if (this.disabled) {
        return;
      }
      this.toggle();
    };
    this.setSwitchEl = (el) => {
      this.switchEl = el;
    };
    this.disabled = false;
    this.form = undefined;
    this.label = undefined;
    this.name = undefined;
    this.scale = "m";
    this.checked = false;
    this.value = undefined;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.k)(this.switchEl);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  syncHiddenFormInput(input) {
    input.type = "checkbox";
  }
  onLabelClick() {
    if (!this.disabled) {
      this.toggle();
      this.setFocus();
    }
  }
  toggle() {
    this.checked = !this.checked;
    this.calciteSwitchChange.emit();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
  }
  componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.a)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.Host, { onClick: this.clickHandler, onKeyDown: this.keyDownHandler }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("div", { "aria-checked": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.checked), "aria-label": (0,_label2_js__WEBPACK_IMPORTED_MODULE_4__.g)(this), class: "container", role: "switch", tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setSwitchEl }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("div", { class: "track" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("div", { class: "handle" })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)(_form_js__WEBPACK_IMPORTED_MODULE_1__.H, { component: this }))));
  }
  get el() { return this; }
  static get style() { return switchCss; }
}, [1, "calcite-switch", {
    "disabled": [516],
    "form": [513],
    "label": [1],
    "name": [513],
    "scale": [513],
    "checked": [1540],
    "value": [8],
    "setFocus": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-switch"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-switch":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Switch);
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMjcwYzg1NzljZWNmMjdmMmNkNmY4MTI3ZGExNjAwOTQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8seUVBQUs7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnQkFBZ0IsUUFBUSxNQUFNLEdBQUcsUUFBUTtBQUNwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsV0FBVztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEpwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lHOztBQUV6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQUs7QUFDZix5QkFBeUIsMENBQWlCLGdCQUFnQixhQUFhLGFBQWEsUUFBUSxHQUFHLEtBQUs7QUFDcEc7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBDQUFpQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsWUFBWTtBQUN0RixtRkFBbUYsK0JBQStCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMENBQVE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUk3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytHO0FBQzlDO0FBQzJCO0FBQ3VCO0FBQ25FO0FBQ3lDO0FBQ3FCOztBQUU5RyxxQ0FBcUMsZUFBZSx5QkFBeUIsaUJBQWlCLDJDQUEyQyxtREFBbUQsb0JBQW9CLDRCQUE0QixtQkFBbUIsd0JBQXdCLG1CQUFtQixtQkFBbUIseUJBQXlCLGtCQUFrQixtQkFBbUIsNEJBQTRCLGdCQUFnQix3QkFBd0IsZ0JBQWdCLGlCQUFpQix5QkFBeUIsbUJBQW1CLG9CQUFvQiw0QkFBNEIsa0JBQWtCLHdCQUF3QixrQkFBa0IsaUJBQWlCLHlCQUF5QixtQkFBbUIsb0JBQW9CLE1BQU0sa0JBQWtCLHFCQUFxQixpQkFBaUIsZUFBZSx5QkFBeUIsaUJBQWlCLHNCQUFzQixnQ0FBZ0MseUdBQXlHLFVBQVUsV0FBVyxrQkFBa0IsT0FBTyxvQkFBb0Isa0JBQWtCLHNCQUFzQixxQkFBcUIscUJBQXFCLGlCQUFpQixtQkFBbUIsd0NBQXdDLGdEQUFnRCxtQkFBbUIsMEJBQTBCLHFCQUFxQix5RUFBeUUsb1BBQW9QLFFBQVEsb0JBQW9CLGtCQUFrQixjQUFjLHFCQUFxQixpQkFBaUIsbUJBQW1CLDRDQUE0QyxnREFBZ0Qsd0JBQXdCLDBCQUEwQix3REFBd0QsdUJBQXVCLHVCQUF1Qiw0Q0FBNEMscUNBQXFDLG1EQUFtRCx3QkFBd0IsMkNBQTJDLHlDQUF5Qyx5QkFBeUIscUNBQXFDLHVCQUF1Qiw4QkFBOEIsMkNBQTJDLHlDQUF5QywrQkFBK0IsMkNBQTJDLHlEQUF5RCwrQkFBK0Isd0JBQXdCLDZCQUE2Qix5Q0FBeUMsb0JBQW9CLHFCQUFxQix3QkFBd0IscUJBQXFCLDZCQUE2QixtQkFBbUIsMEJBQTBCLG1DQUFtQyxzQkFBc0IsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUUxNUYsNkJBQTZCLDBGQUFrQixlQUFlLCtFQUFXO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1GQUFXO0FBQzFDO0FBQ0EsNEJBQTRCLDBDQUFlO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwrQ0FBa0I7QUFDNUIsSUFBSSwwQ0FBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQWtCO0FBQ3RCLElBQUksNkNBQVk7QUFDaEIsSUFBSSwyQ0FBVztBQUNmO0FBQ0E7QUFDQSxJQUFJLCtDQUFzQjtBQUMxQjtBQUNBO0FBQ0EsSUFBSSwrQ0FBa0I7QUFDdEI7QUFDQTtBQUNBLElBQUksa0RBQXFCO0FBQ3pCLElBQUksNkNBQWU7QUFDbkIsSUFBSSwyQ0FBYztBQUNsQjtBQUNBO0FBQ0EsSUFBSSxrREFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlFQUFDLENBQUMsd0VBQUksSUFBSSw0REFBNEQsRUFBRSx5RUFBQyxVQUFVLGdCQUFnQiwwQ0FBYSw4QkFBOEIsNkNBQVk7QUFDdEs7QUFDQSw2QkFBNkIsRUFBRSx5RUFBQyxVQUFVLGdCQUFnQixFQUFFLHlFQUFDLFVBQVUsaUJBQWlCLElBQUkseUVBQUMsQ0FBQyx1Q0FBbUIsSUFBSSxpQkFBaUI7QUFDdEk7QUFDQSxhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVpRCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9pbnRlcmFjdGl2ZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvbGFiZWwyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9zd2l0Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5cbmZ1bmN0aW9uIGdldFVzZXJBZ2VudERhdGEoKSB7XG4gIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50RGF0YTtcbn1cbmZ1bmN0aW9uIGdldFVzZXJBZ2VudFN0cmluZygpIHtcbiAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICBjb25zdCB1YURhdGEgPSBnZXRVc2VyQWdlbnREYXRhKCk7XG4gIHJldHVybiB1YURhdGE/LmJyYW5kc1xuICAgID8gdWFEYXRhLmJyYW5kcy5tYXAoKHsgYnJhbmQsIHZlcnNpb24gfSkgPT4gYCR7YnJhbmR9LyR7dmVyc2lvbn1gKS5qb2luKFwiIFwiKVxuICAgIDogbmF2aWdhdG9yLnVzZXJBZ2VudDtcbn1cblxuLy8g4pqg77iPIGJyb3dzZXItc25pZmZpbmcgaXMgbm90IGEgYmVzdCBwcmFjdGljZSBhbmQgc2hvdWxkIGJlIGF2b2lkZWQg4pqg77iPXG5jb25zdCBpc0ZpcmVmb3ggPSAvZmlyZWZveC9pLnRlc3QoZ2V0VXNlckFnZW50U3RyaW5nKCkpO1xuY29uc3QgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQgPSBpc0ZpcmVmb3hcbiAgPyBuZXcgV2Vha01hcCgpXG4gIDogbnVsbDtcbmZ1bmN0aW9uIGludGVyY2VwdGVkQ2xpY2soKSB7XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXM7XG4gIGlmICghZGlzYWJsZWQpIHtcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2suY2FsbCh0aGlzKTtcbiAgfVxufVxuZnVuY3Rpb24gb25Qb2ludGVyRG93bihldmVudCkge1xuICBjb25zdCBpbnRlcmFjdGl2ZUVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gIGlmIChpc0ZpcmVmb3ggJiYgIWludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChpbnRlcmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IGludGVyYWN0aXZlRWxlbWVudDtcbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgLy8gcHJldmVudCBjbGljayBmcm9tIG1vdmluZyBmb2N1cyBvbiBob3N0XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuY29uc3Qgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cyA9IFtcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJjbGlja1wiXTtcbmZ1bmN0aW9uIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50KGV2ZW50KSB7XG4gIGlmIChpc0ZpcmVmb3ggJiYgIWludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChldmVudC50YXJnZXQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IGV2ZW50LnRhcmdldDtcbiAgLy8gcHJldmVudCBkaXNhbGxvd2VkIG1vdXNlIGV2ZW50cyBmcm9tIGJlaW5nIGVtaXR0ZWQgb24gdGhlIGRpc2FibGVkIGhvc3QgKHBlciBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2h0bWwvaXNzdWVzLzU4ODYpXG4gIC8v4pqgIHdlIGdlbmVyYWxseSBhdm9pZCBzdG9wcGluZyBwcm9wYWdhdGlvbiBvZiBldmVudHMsIGJ1dCB0aGlzIGlzIG5lZWRlZCB0byBhZGhlcmUgdG8gdGhlIGludGVuZGVkIHNwZWMgY2hhbmdlcyBhYm92ZSDimqBcbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuY29uc3QgY2FwdHVyZU9ubHlPcHRpb25zID0geyBjYXB0dXJlOiB0cnVlIH07XG4vKipcbiAqIFRoaXMgaGVscGVyIHVwZGF0ZXMgdGhlIGhvc3QgZWxlbWVudCB0byBwcmV2ZW50IGtleWJvYXJkIGludGVyYWN0aW9uIG9uIGl0cyBzdWJ0cmVlIGFuZCBzZXRzIHRoZSBhcHByb3ByaWF0ZSBhcmlhIGF0dHJpYnV0ZSBmb3IgYWNjZXNzaWJpbGl0eS5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkUmVuZGVyYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiAqKk5vdGVzKipcbiAqXG4gKiB0aGlzIHV0aWwgaXMgbm90IG5lZWRlZCBmb3Igc2ltcGxlIGNvbXBvbmVudHMgd2hvc2Ugcm9vdCBlbGVtZW50IG9yIGVsZW1lbnRzIGFyZSBhbiBpbnRlcmFjdGl2ZSBjb21wb25lbnQgKGN1c3RvbSBlbGVtZW50IG9yIG5hdGl2ZSBjb250cm9sKS4gRm9yIHRob3NlIGNhc2VzLCBzZXQgdGhlIGBkaXNhYmxlZGAgcHJvcHMgb24gdGhlIHJvb3QgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogdGVjaG5pY2FsbHksIHVzZXJzIGNhbiBvdmVycmlkZSBgdGFiaW5kZXhgIGFuZCByZXN0b3JlIGtleWJvYXJkIG5hdmlnYXRpb24sIGJ1dCB0aGlzIHdpbGwgYmUgY29uc2lkZXJlZCB1c2VyIGVycm9yXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGhvc3RJc1RhYmJhYmxlIOKAkyB3aGVuIHNldCB0byB0cnVlIG9yIGl0cyBwcmVkaWNhdGUgcmV0dXJucyB0cnVlLCB0aGUgaG9zdCBpcyB0YWJiYWJsZSBhbmQgd2lsbCBiZSBtYW5hZ2VkIGJ5IHRoZSBoZWxwZXIuIFNldCB0byBcIm1hbmFnZWRcIiBmb3IgY2FzZXMgd2hlcmUgYSBjb21wb25lbnQncyBwYXJlbnQgZGV0ZXJtaW5lcyB3aGljaCBpdGVtIGlzIHRhYmJhYmxlIChpLmUuLCBzZXRzIGB0YWJpbmRleGAgdG8gYWxsb3cgdGFiYmluZykuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbihjb21wb25lbnQsIGhvc3RJc1RhYmJhYmxlID0gZmFsc2UpIHtcbiAgaWYgKGNvbXBvbmVudC5kaXNhYmxlZCkge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcbiAgICBpZiAoY29tcG9uZW50LmVsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gICAgYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpO1xuICAgIHJldHVybjtcbiAgfVxuICByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbiAgaWYgKHR5cGVvZiBob3N0SXNUYWJiYWJsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIGhvc3RJc1RhYmJhYmxlLmNhbGwoY29tcG9uZW50KSA/IFwiMFwiIDogXCItMVwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gdHJ1ZSkge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gIH1cbiAgZWxzZSBpZiAoaG9zdElzVGFiYmFibGUgPT09IGZhbHNlKSB7XG4gICAgY29tcG9uZW50LmVsLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xuICB9XG4gIGVsc2UgO1xuICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiKTtcbn1cbmZ1bmN0aW9uIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5lbC5jbGljayA9IGludGVyY2VwdGVkQ2xpY2s7XG4gIGFkZEludGVyYWN0aW9uTGlzdGVuZXJzKGlzRmlyZWZveCA/IGdldFBhcmVudEVsZW1lbnQoY29tcG9uZW50KSA6IGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiBhZGRJbnRlcmFjdGlvbkxpc3RlbmVycyhlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIC8vIHRoaXMgcGF0aCBpcyBvbmx5IGFwcGxpY2FibGUgdG8gRmlyZWZveFxuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50LCBjYXB0dXJlT25seU9wdGlvbnMpKTtcbn1cbmZ1bmN0aW9uIGdldFBhcmVudEVsZW1lbnQoY29tcG9uZW50KSB7XG4gIHJldHVybiBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpIHtcbiAgZGVsZXRlIGNvbXBvbmVudC5lbC5jbGljazsgLy8gZmFsbGJhY2sgb24gSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrXG4gIHJlbW92ZUludGVyYWN0aW9uTGlzdGVuZXJzKGlzRmlyZWZveCA/IGdldFBhcmVudEVsZW1lbnQoY29tcG9uZW50KSA6IGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiByZW1vdmVJbnRlcmFjdGlvbkxpc3RlbmVycyhlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIC8vIHRoaXMgcGF0aCBpcyBvbmx5IGFwcGxpY2FibGUgdG8gRmlyZWZveFxuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50LCBjYXB0dXJlT25seU9wdGlvbnMpKTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IGhlbHBzIGRpc2FibGUgY29tcG9uZW50cyBjb25zaXN0ZW50bHkgaW4gRmlyZWZveC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGNvbm5lY3RlZENhbGxiYWNrYCBhbmQgaXMgb25seSBuZWVkZWQgZm9yIEZpcmVmb3ggYXMgaXQgZG9lcyBub3QgY2FsbCBjYXB0dXJlIGV2ZW50IGxpc3RlbmVycyBiZWZvcmUgbm9uLWNhcHR1cmUgb25lcyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE3MzE1MDQpLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdEludGVyYWN0aXZlKGNvbXBvbmVudCkge1xuICBpZiAoIWNvbXBvbmVudC5kaXNhYmxlZCB8fCAhaXNGaXJlZm94KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHBhcmVudCA9IGNvbXBvbmVudC5lbC5wYXJlbnRFbGVtZW50IHx8IGNvbXBvbmVudC5lbDsgLyogYXNzdW1lIGVsZW1lbnQgaXMgaG9zdCBpZiBpdCBoYXMgbm8gcGFyZW50IHdoZW4gY29ubmVjdGVkICovXG4gIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LnNldChjb21wb25lbnQuZWwsIHBhcmVudCk7XG4gIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHJlc3RvcmVzIGludGVyYWN0aXZpdHkgdG8gZGlzYWJsZWQgY29tcG9uZW50cyBjb25zaXN0ZW50bHkgaW4gRmlyZWZveC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrYCBhbmQgaXMgb25seSBuZWVkZWQgZm9yIEZpcmVmb3ggYXMgaXQgZG9lcyBub3QgY2FsbCBjYXB0dXJlIGV2ZW50IGxpc3RlbmVycyBiZWZvcmUgbm9uLWNhcHR1cmUgb25lcyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE3MzE1MDQpLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdEludGVyYWN0aXZlKGNvbXBvbmVudCkge1xuICBpZiAoIWlzRmlyZWZveCkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBhbHdheXMgcmVtb3ZlIG9uIGRpc2Nvbm5lY3QgYXMgcmVuZGVyIG9yIGNvbm5lY3Qgd2lsbCByZXN0b3JlIGl0XG4gIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmRlbGV0ZShjb21wb25lbnQuZWwpO1xuICByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdEludGVyYWN0aXZlIGFzIGMsIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSBhcyBkLCBnZXRVc2VyQWdlbnRTdHJpbmcgYXMgZywgdXBkYXRlSG9zdEludGVyYWN0aW9uIGFzIHUgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHkgYXMgaXNCZWZvcmUsIHEgYXMgcXVlcnlFbGVtZW50Um9vdHMsIGMgYXMgY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5IH0gZnJvbSAnLi9kb20uanMnO1xuXG4vKipcbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHlcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgbGFiZWxDbGlja0V2ZW50ID0gXCJjYWxjaXRlSW50ZXJuYWxMYWJlbENsaWNrXCI7XG5jb25zdCBsYWJlbENvbm5lY3RlZEV2ZW50ID0gXCJjYWxjaXRlSW50ZXJuYWxMYWJlbENvbm5lY3RlZFwiO1xuY29uc3QgbGFiZWxEaXNjb25uZWN0ZWRFdmVudCA9IFwiY2FsY2l0ZUludGVybmFsTGFiZWxEaXNjb25uZWN0ZWRcIjtcbmNvbnN0IGxhYmVsVGFnTmFtZSA9IFwiY2FsY2l0ZS1sYWJlbFwiO1xuY29uc3QgbGFiZWxUb0xhYmVsYWJsZXMgPSBuZXcgV2Vha01hcCgpO1xuY29uc3Qgb25MYWJlbENsaWNrTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IG9uTGFiZWxDb25uZWN0ZWRNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3Qgb25MYWJlbERpc2Nvbm5lY3RlZE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB1bmxhYmVsZWRDb21wb25lbnRzID0gbmV3IFdlYWtTZXQoKTtcbmNvbnN0IGZpbmRMYWJlbEZvckNvbXBvbmVudCA9IChjb21wb25lbnRFbCkgPT4ge1xuICBjb25zdCB7IGlkIH0gPSBjb21wb25lbnRFbDtcbiAgY29uc3QgZm9yTGFiZWwgPSBpZCAmJiBxdWVyeUVsZW1lbnRSb290cyhjb21wb25lbnRFbCwgeyBzZWxlY3RvcjogYCR7bGFiZWxUYWdOYW1lfVtmb3I9XCIke2lkfVwiXWAgfSk7XG4gIGlmIChmb3JMYWJlbCkge1xuICAgIHJldHVybiBmb3JMYWJlbDtcbiAgfVxuICBjb25zdCBwYXJlbnRMYWJlbCA9IGNsb3Nlc3RFbGVtZW50Q3Jvc3NTaGFkb3dCb3VuZGFyeShjb21wb25lbnRFbCwgbGFiZWxUYWdOYW1lKTtcbiAgaWYgKCFwYXJlbnRMYWJlbCB8fFxuICAgIC8vIGxhYmVsYWJsZSBjb21wb25lbnRzIHdpdGhpbiBvdGhlciBjdXN0b20gZWxlbWVudHMgYXJlIG5vdCBjb25zaWRlcmVkIGxhYmVsYWJsZVxuICAgIGhhc0FuY2VzdG9yQ3VzdG9tRWxlbWVudHMocGFyZW50TGFiZWwsIGNvbXBvbmVudEVsKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBwYXJlbnRMYWJlbDtcbn07XG5mdW5jdGlvbiBoYXNBbmNlc3RvckN1c3RvbUVsZW1lbnRzKGxhYmVsLCBjb21wb25lbnRFbCkge1xuICBsZXQgdHJhdmVyc2VkRWxlbWVudHM7XG4gIGNvbnN0IGN1c3RvbUVsZW1lbnRBbmNlc3RvckNoZWNrRXZlbnRUeXBlID0gXCJjdXN0b20tZWxlbWVudC1hbmNlc3Rvci1jaGVja1wiO1xuICBjb25zdCBsaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgIHRyYXZlcnNlZEVsZW1lbnRzID0gY29tcG9zZWRQYXRoLnNsaWNlKGNvbXBvc2VkUGF0aC5pbmRleE9mKGNvbXBvbmVudEVsKSwgY29tcG9zZWRQYXRoLmluZGV4T2YobGFiZWwpKTtcbiAgfTtcbiAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihjdXN0b21FbGVtZW50QW5jZXN0b3JDaGVja0V2ZW50VHlwZSwgbGlzdGVuZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgY29tcG9uZW50RWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoY3VzdG9tRWxlbWVudEFuY2VzdG9yQ2hlY2tFdmVudFR5cGUsIHsgY29tcG9zZWQ6IHRydWUsIGJ1YmJsZXM6IHRydWUgfSkpO1xuICBsYWJlbC5yZW1vdmVFdmVudExpc3RlbmVyKGN1c3RvbUVsZW1lbnRBbmNlc3RvckNoZWNrRXZlbnRUeXBlLCBsaXN0ZW5lcik7XG4gIGNvbnN0IGFuY2VzdG9yQ3VzdG9tRWxlbWVudHMgPSB0cmF2ZXJzZWRFbGVtZW50c1xuICAgIC5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gY29tcG9uZW50RWwgJiYgZWwgIT09IGxhYmVsKVxuICAgIC5maWx0ZXIoKGVsKSA9PiBlbC50YWdOYW1lPy5pbmNsdWRlcyhcIi1cIikpO1xuICByZXR1cm4gYW5jZXN0b3JDdXN0b21FbGVtZW50cy5sZW5ndGggPiAwO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gc2V0IHVwIGxhYmVsIGludGVyYWN0aW9ucyBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RMYWJlbChjb21wb25lbnQpIHtcbiAgY29uc3QgbGFiZWxFbCA9IGZpbmRMYWJlbEZvckNvbXBvbmVudChjb21wb25lbnQuZWwpO1xuICBpZiAoKG9uTGFiZWxDbGlja01hcC5oYXMobGFiZWxFbCkgJiYgbGFiZWxFbCA9PT0gY29tcG9uZW50LmxhYmVsRWwpIHx8XG4gICAgKCFsYWJlbEVsICYmIHVubGFiZWxlZENvbXBvbmVudHMuaGFzKGNvbXBvbmVudCkpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGJvdW5kT25MYWJlbERpc2Nvbm5lY3RlZCA9IG9uTGFiZWxEaXNjb25uZWN0ZWQuYmluZChjb21wb25lbnQpO1xuICBpZiAobGFiZWxFbCkge1xuICAgIGNvbXBvbmVudC5sYWJlbEVsID0gbGFiZWxFbDtcbiAgICBjb25zdCBsYWJlbGFibGVzID0gbGFiZWxUb0xhYmVsYWJsZXMuZ2V0KGxhYmVsRWwpIHx8IFtdO1xuICAgIGxhYmVsYWJsZXMucHVzaChjb21wb25lbnQpO1xuICAgIGxhYmVsVG9MYWJlbGFibGVzLnNldChsYWJlbEVsLCBsYWJlbGFibGVzLnNvcnQoc29ydEJ5RE9NT3JkZXIpKTtcbiAgICBpZiAoIW9uTGFiZWxDbGlja01hcC5oYXMoY29tcG9uZW50LmxhYmVsRWwpKSB7XG4gICAgICBvbkxhYmVsQ2xpY2tNYXAuc2V0KGNvbXBvbmVudC5sYWJlbEVsLCBvbkxhYmVsQ2xpY2spO1xuICAgICAgY29tcG9uZW50LmxhYmVsRWwuYWRkRXZlbnRMaXN0ZW5lcihsYWJlbENsaWNrRXZlbnQsIG9uTGFiZWxDbGljayk7XG4gICAgfVxuICAgIHVubGFiZWxlZENvbXBvbmVudHMuZGVsZXRlKGNvbXBvbmVudCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbENvbm5lY3RlZEV2ZW50LCBvbkxhYmVsQ29ubmVjdGVkTWFwLmdldChjb21wb25lbnQpKTtcbiAgICBvbkxhYmVsRGlzY29ubmVjdGVkTWFwLnNldChjb21wb25lbnQsIGJvdW5kT25MYWJlbERpc2Nvbm5lY3RlZCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihsYWJlbERpc2Nvbm5lY3RlZEV2ZW50LCBib3VuZE9uTGFiZWxEaXNjb25uZWN0ZWQpO1xuICB9XG4gIGVsc2UgaWYgKCF1bmxhYmVsZWRDb21wb25lbnRzLmhhcyhjb21wb25lbnQpKSB7XG4gICAgYm91bmRPbkxhYmVsRGlzY29ubmVjdGVkKCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbERpc2Nvbm5lY3RlZEV2ZW50LCBvbkxhYmVsRGlzY29ubmVjdGVkTWFwLmdldChjb21wb25lbnQpKTtcbiAgfVxufVxuLyoqXG4gKiBIZWxwZXIgdG8gdGVhciBkb3duIGxhYmVsIGludGVyYWN0aW9ucyBvbiBkaXNjb25uZWN0ZWRDYWxsYmFjayBvbiBsYWJlbGFibGUgY29tcG9uZW50cy5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RMYWJlbChjb21wb25lbnQpIHtcbiAgdW5sYWJlbGVkQ29tcG9uZW50cy5kZWxldGUoY29tcG9uZW50KTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbENvbm5lY3RlZEV2ZW50LCBvbkxhYmVsQ29ubmVjdGVkTWFwLmdldChjb21wb25lbnQpKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbERpc2Nvbm5lY3RlZEV2ZW50LCBvbkxhYmVsRGlzY29ubmVjdGVkTWFwLmdldChjb21wb25lbnQpKTtcbiAgb25MYWJlbENvbm5lY3RlZE1hcC5kZWxldGUoY29tcG9uZW50KTtcbiAgb25MYWJlbERpc2Nvbm5lY3RlZE1hcC5kZWxldGUoY29tcG9uZW50KTtcbiAgaWYgKCFjb21wb25lbnQubGFiZWxFbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBsYWJlbGFibGVzID0gbGFiZWxUb0xhYmVsYWJsZXMuZ2V0KGNvbXBvbmVudC5sYWJlbEVsKTtcbiAgaWYgKGxhYmVsYWJsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgY29tcG9uZW50LmxhYmVsRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbENsaWNrRXZlbnQsIG9uTGFiZWxDbGlja01hcC5nZXQoY29tcG9uZW50LmxhYmVsRWwpKTtcbiAgICBvbkxhYmVsQ2xpY2tNYXAuZGVsZXRlKGNvbXBvbmVudC5sYWJlbEVsKTtcbiAgfVxuICBsYWJlbFRvTGFiZWxhYmxlcy5zZXQoY29tcG9uZW50LmxhYmVsRWwsIGxhYmVsYWJsZXMuZmlsdGVyKChsYWJlbGFibGUpID0+IGxhYmVsYWJsZSAhPT0gY29tcG9uZW50KS5zb3J0KHNvcnRCeURPTU9yZGVyKSk7XG4gIGNvbXBvbmVudC5sYWJlbEVsID0gbnVsbDtcbn1cbmZ1bmN0aW9uIHNvcnRCeURPTU9yZGVyKGEsIGIpIHtcbiAgcmV0dXJuIGlzQmVmb3JlKGEuZWwsIGIuZWwpID8gLTEgOiAxO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gZ2V0IHRoZSBsYWJlbCB0ZXh0IGZyb20gYSBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBnZXRMYWJlbFRleHQoY29tcG9uZW50KSB7XG4gIHJldHVybiBjb21wb25lbnQubGFiZWwgfHwgY29tcG9uZW50LmxhYmVsRWw/LnRleHRDb250ZW50Py50cmltKCkgfHwgXCJcIjtcbn1cbmZ1bmN0aW9uIG9uTGFiZWxDbGljayhldmVudCkge1xuICBjb25zdCBsYWJlbENsaWNrVGFyZ2V0ID0gZXZlbnQuZGV0YWlsLnNvdXJjZUV2ZW50LnRhcmdldDtcbiAgY29uc3QgbGFiZWxhYmxlcyA9IGxhYmVsVG9MYWJlbGFibGVzLmdldCh0aGlzKTtcbiAgY29uc3QgY2xpY2tlZExhYmVsYWJsZSA9IGxhYmVsYWJsZXMuZmluZCgobGFiZWxhYmxlKSA9PiBsYWJlbGFibGUuZWwgPT09IGxhYmVsQ2xpY2tUYXJnZXQpO1xuICBjb25zdCBsYWJlbGFibGVDaGlsZENsaWNrZWQgPSBsYWJlbGFibGVzLmluY2x1ZGVzKGNsaWNrZWRMYWJlbGFibGUpO1xuICBpZiAobGFiZWxhYmxlQ2hpbGRDbGlja2VkKSB7XG4gICAgLy8gbm8gbmVlZCB0byBmb3J3YXJkIGNsaWNrIGFzIGxhYmVsYWJsZSB3aWxsIHJlY2VpdmUgZm9jdXNcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZmlyc3RMYWJlbGFibGUgPSBsYWJlbGFibGVzWzBdO1xuICBpZiAoZmlyc3RMYWJlbGFibGUuZGlzYWJsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZmlyc3RMYWJlbGFibGUub25MYWJlbENsaWNrKGV2ZW50KTtcbn1cbmZ1bmN0aW9uIG9uTGFiZWxDb25uZWN0ZWQoKSB7XG4gIGlmICh1bmxhYmVsZWRDb21wb25lbnRzLmhhcyh0aGlzKSkge1xuICAgIGNvbm5lY3RMYWJlbCh0aGlzKTtcbiAgfVxufVxuZnVuY3Rpb24gb25MYWJlbERpc2Nvbm5lY3RlZCgpIHtcbiAgdW5sYWJlbGVkQ29tcG9uZW50cy5hZGQodGhpcyk7XG4gIGNvbnN0IGJvdW5kT25MYWJlbENvbm5lY3RlZCA9IG9uTGFiZWxDb25uZWN0ZWRNYXAuZ2V0KHRoaXMpIHx8IG9uTGFiZWxDb25uZWN0ZWQuYmluZCh0aGlzKTtcbiAgb25MYWJlbENvbm5lY3RlZE1hcC5zZXQodGhpcywgYm91bmRPbkxhYmVsQ29ubmVjdGVkKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihsYWJlbENvbm5lY3RlZEV2ZW50LCBib3VuZE9uTGFiZWxDb25uZWN0ZWQpO1xufVxuXG5leHBvcnQgeyBsYWJlbERpc2Nvbm5lY3RlZEV2ZW50IGFzIGEsIGNvbm5lY3RMYWJlbCBhcyBjLCBkaXNjb25uZWN0TGFiZWwgYXMgZCwgZ2V0TGFiZWxUZXh0IGFzIGcsIGxhYmVsQ29ubmVjdGVkRXZlbnQgYXMgbCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGgsIEhvc3QgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBrIGFzIGZvY3VzRWxlbWVudCwgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Rm9ybSwgZCBhcyBkaXNjb25uZWN0Rm9ybSwgSCBhcyBIaWRkZW5Gb3JtSW5wdXRTbG90IH0gZnJvbSAnLi9mb3JtLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLmpzJztcbmltcG9ydCB7IGkgYXMgaXNBY3RpdmF0aW9uS2V5IH0gZnJvbSAnLi9rZXkuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TGFiZWwsIGQgYXMgZGlzY29ubmVjdExhYmVsLCBnIGFzIGdldExhYmVsVGV4dCB9IGZyb20gJy4vbGFiZWwyLmpzJztcbmltcG9ydCB7IGMgYXMgY29tcG9uZW50Rm9jdXNhYmxlLCBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS5qcyc7XG5cbmNvbnN0IHN3aXRjaENzcyA9IFwiOmhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoW3NjYWxlPXNdKSAuY29udGFpbmVye2Jsb2NrLXNpemU6MC43NXJlbX06aG9zdChbc2NhbGU9c10pIC50cmFja3tibG9jay1zaXplOjAuNzVyZW07aW5saW5lLXNpemU6MS41cmVtfTpob3N0KFtzY2FsZT1zXSkgLmhhbmRsZXtibG9jay1zaXplOjAuNXJlbTtpbmxpbmUtc2l6ZTowLjVyZW19Omhvc3QoW3NjYWxlPW1dKSAuY29udGFpbmVye2Jsb2NrLXNpemU6MXJlbX06aG9zdChbc2NhbGU9bV0pIC50cmFja3tibG9jay1zaXplOjFyZW07aW5saW5lLXNpemU6MnJlbX06aG9zdChbc2NhbGU9bV0pIC5oYW5kbGV7YmxvY2stc2l6ZTowLjc1cmVtO2lubGluZS1zaXplOjAuNzVyZW19Omhvc3QoW3NjYWxlPWxdKSAuY29udGFpbmVye2Jsb2NrLXNpemU6MS41cmVtfTpob3N0KFtzY2FsZT1sXSkgLnRyYWNre2Jsb2NrLXNpemU6MS41cmVtO2lubGluZS1zaXplOjNyZW19Omhvc3QoW3NjYWxlPWxdKSAuaGFuZGxle2Jsb2NrLXNpemU6MS4yNXJlbTtpbmxpbmUtc2l6ZToxLjI1cmVtfTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2lubGluZS1zaXplOmF1dG87Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7dmVydGljYWwtYWxpZ246bWlkZGxlO3RhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnR9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfS5jb250YWluZXJ7b3V0bGluZS13aWR0aDowcHh9LnRyYWNre3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlci1yYWRpdXM6OTk5OXB4O2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0yKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTt2ZXJ0aWNhbC1hbGlnbjp0b3A7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH06aG9zdCg6Zm9jdXMpIC50cmFja3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX0uaGFuZGxle3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jaztib3JkZXItcmFkaXVzOjk5OTlweDtib3JkZXItd2lkdGg6MnB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO3RyYW5zaXRpb24tcHJvcGVydHk6YWxsO3RyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtpbnNldC1ibG9jay1zdGFydDotMXB4O2luc2V0LWlubGluZTotMXB4IGF1dG99Omhvc3QoOmhvdmVyKSAuaGFuZGxlLDpob3N0KDpmb2N1cykgLmhhbmRsZXtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggdmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoW2NoZWNrZWRdKSAudHJhY2t7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQtaG92ZXIpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoW2NoZWNrZWRdKSAuaGFuZGxle2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTtpbnNldC1pbmxpbmU6YXV0byAtMXB4fTpob3N0KFtjaGVja2VkXTpob3ZlcikgLnRyYWNre2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kLWhvdmVyKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFtjaGVja2VkXTpob3ZlcikgLmhhbmRsZXtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZC1ob3Zlcik7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggdmFyKC0tY2FsY2l0ZS11aS1icmFuZC1ob3Zlcil9QG1lZGlhIChmb3JjZWQtY29sb3JzOiBhY3RpdmUpezpob3N0KFtjaGVja2VkXSkgLnRyYWNre2JhY2tncm91bmQtY29sb3I6Y2FudmFzVGV4dH19OjpzbG90dGVkKGlucHV0W3Nsb3Q9aGlkZGVuLWZvcm0taW5wdXRdKXttYXJnaW46MCAhaW1wb3J0YW50O29wYWNpdHk6MCAhaW1wb3J0YW50O291dGxpbmU6bm9uZSAhaW1wb3J0YW50O3BhZGRpbmc6MCAhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlICFpbXBvcnRhbnQ7aW5zZXQ6MCAhaW1wb3J0YW50O3RyYW5zZm9ybTpub25lICFpbXBvcnRhbnQ7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmUgIWltcG9ydGFudDt6LWluZGV4Oi0xICFpbXBvcnRhbnR9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IFN3aXRjaCA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlU3dpdGNoQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlU3dpdGNoQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiBpc0FjdGl2YXRpb25LZXkoZXZlbnQua2V5KSkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH07XG4gICAgdGhpcy5zZXRTd2l0Y2hFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5zd2l0Y2hFbCA9IGVsO1xuICAgIH07XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAgICBmb2N1c0VsZW1lbnQodGhpcy5zd2l0Y2hFbCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3luY0hpZGRlbkZvcm1JbnB1dChpbnB1dCkge1xuICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIH1cbiAgb25MYWJlbENsaWNrKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gICAgdGhpcy5jYWxjaXRlU3dpdGNoQ2hhbmdlLmVtaXQoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGNvbm5lY3RGb3JtKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBkaXNjb25uZWN0Rm9ybSh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5jbGlja0hhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlciB9LCBoKFwiZGl2XCIsIHsgXCJhcmlhLWNoZWNrZWRcIjogdG9BcmlhQm9vbGVhbih0aGlzLmNoZWNrZWQpLCBcImFyaWEtbGFiZWxcIjogZ2V0TGFiZWxUZXh0KHRoaXMpLCBjbGFzczogXCJjb250YWluZXJcIiwgcm9sZTogXCJzd2l0Y2hcIiwgdGFiSW5kZXg6IDAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiB0aGlzLnNldFN3aXRjaEVsIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0cmFja1wiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGVcIiB9KSksIGgoSGlkZGVuRm9ybUlucHV0U2xvdCwgeyBjb21wb25lbnQ6IHRoaXMgfSkpKSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gc3dpdGNoQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLXN3aXRjaFwiLCB7XG4gICAgXCJkaXNhYmxlZFwiOiBbNTE2XSxcbiAgICBcImZvcm1cIjogWzUxM10sXG4gICAgXCJsYWJlbFwiOiBbMV0sXG4gICAgXCJuYW1lXCI6IFs1MTNdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJjaGVja2VkXCI6IFsxNTQwXSxcbiAgICBcInZhbHVlXCI6IFs4XSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1zd2l0Y2hcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtc3dpdGNoXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgU3dpdGNoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBTd2l0Y2ggYXMgUywgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=