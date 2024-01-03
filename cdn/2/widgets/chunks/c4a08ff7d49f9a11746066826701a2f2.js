"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-segmented-control_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-segmented-control.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-segmented-control.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteSegmentedControl: () => (/* binding */ CalciteSegmentedControl),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ "./node_modules/@esri/calcite-components/dist/components/form.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _label2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./label2.js */ "./node_modules/@esri/calcite-components/dist/components/label2.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */








const segmentedControlCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:var(--calcite-ui-foreground-1);inline-size:-moz-fit-content;inline-size:fit-content;outline:1px solid var(--calcite-ui-border-input);outline-offset:-1px}:host([appearance=outline]){background-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([layout=vertical]){flex-direction:column;align-items:flex-start;align-self:flex-start}:host([width=full]){inline-size:100%;min-inline-size:-moz-fit-content;min-inline-size:fit-content}:host([width=full]) ::slotted(calcite-segmented-control-item){flex:1 1 auto}:host([width=full][layout=vertical]) ::slotted(calcite-segmented-control-item){justify-content:flex-start}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";

const SegmentedControl = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteSegmentedControlChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.createEvent)(this, "calciteSegmentedControlChange", 6);
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    this.handleClick = (event) => {
      if (this.disabled) {
        return;
      }
      if (event.target.localName === "calcite-segmented-control-item") {
        this.selectItem(event.target, true);
      }
    };
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_5__.c)("mutation", () => this.setUpItems());
    this.appearance = "solid";
    this.disabled = false;
    this.form = undefined;
    this.required = false;
    this.name = undefined;
    this.layout = "horizontal";
    this.scale = "m";
    this.value = null;
    this.selectedItem = undefined;
    this.width = "auto";
  }
  handlePropsChange() {
    this.handleItemPropChange();
  }
  valueHandler(value) {
    const items = this.getItems();
    items.forEach((item) => (item.checked = item.value === value));
  }
  handleSelectedItemChange(newItem, oldItem) {
    this.value = newItem?.value;
    if (newItem === oldItem) {
      return;
    }
    const items = this.getItems();
    const match = items.filter((item) => item === newItem).pop();
    if (match) {
      this.selectItem(match);
    }
    else if (items[0]) {
      items[0].tabIndex = 0;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.a)(this);
    this.setUpItems();
  }
  componentDidLoad() {
    (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.a)(this, this.value);
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    this.mutationObserver?.observe(this.el, { childList: true });
    this.handleItemPropChange();
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    this.mutationObserver?.unobserve(this.el);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.Host, { onClick: this.handleClick, role: "radiogroup" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("slot", null), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)(_form_js__WEBPACK_IMPORTED_MODULE_1__.H, { component: this })));
  }
  handleSelected(event) {
    event.preventDefault();
    this.selectItem(event.target);
    event.stopPropagation();
  }
  handleKeyDown(event) {
    const keys = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", " "];
    const { key } = event;
    const { el, selectedItem } = this;
    if (keys.indexOf(key) === -1) {
      return;
    }
    let adjustedKey = key;
    if ((0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(el) === "rtl") {
      if (key === "ArrowRight") {
        adjustedKey = "ArrowLeft";
      }
      if (key === "ArrowLeft") {
        adjustedKey = "ArrowRight";
      }
    }
    const items = this.getItems();
    let selectedIndex = -1;
    items.forEach((item, index) => {
      if (item === selectedItem) {
        selectedIndex = index;
      }
    });
    switch (adjustedKey) {
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        const previous = selectedIndex < 1 ? items[items.length - 1] : items[selectedIndex - 1];
        this.selectItem(previous, true);
        return;
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        const next = selectedIndex === -1 ? items[1] : items[selectedIndex + 1] || items[0];
        this.selectItem(next, true);
        return;
      case " ":
        event.preventDefault();
        this.selectItem(event.target, true);
        return;
      default:
        return;
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (this.selectedItem || this.getItems()[0])?.focus();
  }
  handleItemPropChange() {
    const items = this.getItems();
    items.forEach((item) => {
      item.appearance = this.appearance;
      item.layout = this.layout;
      item.scale = this.scale;
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onLabelClick() {
    this.setFocus();
  }
  getItems() {
    return Array.from(this.el.querySelectorAll("calcite-segmented-control-item"));
  }
  selectItem(selected, emit = false) {
    if (selected === this.selectedItem) {
      return;
    }
    const items = this.getItems();
    let match = null;
    items.forEach((item) => {
      const matches = item === selected;
      if ((matches && !item.checked) || (!matches && item.checked)) {
        item.checked = matches;
      }
      item.tabIndex = matches ? 0 : -1;
      if (matches) {
        match = item;
        if (emit) {
          this.calciteSegmentedControlChange.emit();
        }
      }
    });
    this.selectedItem = match;
    if (_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.Build.isBrowser && match) {
      match.focus();
    }
  }
  setUpItems() {
    const items = this.getItems();
    const lastChecked = items.filter((item) => item.checked).pop();
    if (lastChecked) {
      this.selectItem(lastChecked);
    }
    else if (items[0]) {
      items[0].tabIndex = 0;
    }
  }
  get el() { return this; }
  static get watchers() { return {
    "appearance": ["handlePropsChange"],
    "layout": ["handlePropsChange"],
    "scale": ["handlePropsChange"],
    "value": ["valueHandler"],
    "selectedItem": ["handleSelectedItemChange"]
  }; }
  static get style() { return segmentedControlCss; }
}, [1, "calcite-segmented-control", {
    "appearance": [513],
    "disabled": [516],
    "form": [513],
    "required": [516],
    "name": [513],
    "layout": [513],
    "scale": [513],
    "value": [1025],
    "selectedItem": [1040],
    "width": [513],
    "setFocus": [64]
  }, [[0, "calciteInternalSegmentedControlItemChange", "handleSelected"], [0, "keydown", "handleKeyDown"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-segmented-control"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-segmented-control":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SegmentedControl);
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteSegmentedControl = SegmentedControl;
const defineCustomElement = defineCustomElement$1;




/***/ }),

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

/***/ "./node_modules/@esri/calcite-components/dist/components/observers.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/observers.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createObserver)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


/**
 * This utility ensures observers are created only for browser contexts.
 *
 * @param type - the type of observer to create
 * @param callback - the observer callback
 * @param options - the observer options
 */
function createObserver(type, callback, options) {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.Build.isBrowser) {
    return undefined;
  }
  const Observer = getObserver(type);
  return new Observer(callback, options);
}
function getObserver(type) {
  // based on https://github.com/whatwg/dom/issues/126#issuecomment-1049814948
  class ExtendedMutationObserver extends window.MutationObserver {
    constructor(callback) {
      super(callback);
      this.observedEntry = [];
      this.callback = callback;
    }
    observe(target, options) {
      this.observedEntry.push({ target, options });
      return super.observe(target, options);
    }
    unobserve(target) {
      const newObservedEntries = this.observedEntry.filter((observed) => observed.target !== target);
      this.observedEntry = [];
      this.callback(super.takeRecords(), this);
      this.disconnect();
      newObservedEntries.forEach((observed) => this.observe(observed.target, observed.options));
    }
  }
  return (function () {
    return (type === "intersection"
      ? window.IntersectionObserver
      : type === "mutation"
        ? ExtendedMutationObserver
        : window.ResizeObserver);
  })();
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYzRhMDhmZjdkNDlmOWExMTc0NjA2NjgyNjcwMWEyZjIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzSDtBQUN4RTtBQUNnRjtBQUNYO0FBQzdDO0FBQ3dDO0FBQ3pEOztBQUVyRCwrQ0FBK0MsZUFBZSx5QkFBeUIsaUJBQWlCLDJDQUEyQyxtREFBbUQsb0JBQW9CLE1BQU0sYUFBYSxnREFBZ0QsNkJBQTZCLHdCQUF3QixpREFBaUQsb0JBQW9CLDRCQUE0Qiw2QkFBNkIseUdBQXlHLFVBQVUseUJBQXlCLHNCQUFzQix1QkFBdUIsc0JBQXNCLG9CQUFvQixpQkFBaUIsaUNBQWlDLDRCQUE0Qiw4REFBOEQsY0FBYywrRUFBK0UsMkJBQTJCLHlDQUF5QyxvQkFBb0IscUJBQXFCLHdCQUF3QixxQkFBcUIsNkJBQTZCLG1CQUFtQiwwQkFBMEIsbUNBQW1DLHNCQUFzQixnQkFBZ0IsYUFBYSxTQUFTLGFBQWE7O0FBRTV1Qyx1Q0FBdUMsMEZBQWtCLGVBQWUsK0VBQVc7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsbUZBQVc7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0RBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLElBQUksMkNBQTJCO0FBQy9CLElBQUksK0NBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxJQUFJLGtEQUFrQjtBQUN0QixJQUFJLDZDQUFZO0FBQ2hCLElBQUksMkNBQVc7QUFDZiw4Q0FBOEMsaUJBQWlCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQXFCO0FBQ3pCLElBQUksNkNBQWU7QUFDbkIsSUFBSSwyQ0FBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFxQjtBQUN6QjtBQUNBO0FBQ0EsWUFBWSx5RUFBQyxDQUFDLHdFQUFJLElBQUksK0NBQStDLEVBQUUseUVBQUMsZ0JBQWdCLHlFQUFDLENBQUMsdUNBQW1CLElBQUksaUJBQWlCO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEIsWUFBWSxtQkFBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBDQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwrQ0FBa0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxRQUFRLHlFQUFLO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUV3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNQeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlFQUFLO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0JBQWdCLFFBQVEsTUFBTSxHQUFHLFFBQVE7QUFDcEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9IOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5Rzs7QUFFekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFLO0FBQ2YseUJBQXlCLDBDQUFpQixnQkFBZ0IsYUFBYSxhQUFhLFFBQVEsR0FBRyxLQUFLO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwQ0FBaUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLFlBQVk7QUFDdEYsbUZBQW1GLCtCQUErQjtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDBDQUFRO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZIOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUk3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBSztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUUrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLXNlZ21lbnRlZC1jb250cm9sLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9pbnRlcmFjdGl2ZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvbGFiZWwyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9vYnNlcnZlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGgsIEhvc3QsIEJ1aWxkIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRFbGVtZW50RGlyIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYSBhcyBhZnRlckNvbm5lY3REZWZhdWx0VmFsdWVTZXQsIGMgYXMgY29ubmVjdEZvcm0sIGQgYXMgZGlzY29ubmVjdEZvcm0sIEggYXMgSGlkZGVuRm9ybUlucHV0U2xvdCB9IGZyb20gJy4vZm9ybS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMYWJlbCwgZCBhcyBkaXNjb25uZWN0TGFiZWwgfSBmcm9tICcuL2xhYmVsMi5qcyc7XG5pbXBvcnQgeyBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudEZvY3VzYWJsZSB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcblxuY29uc3Qgc2VnbWVudGVkQ29udHJvbENzcyA9IFwiOmhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7ZGlzcGxheTpmbGV4O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2lubGluZS1zaXplOi1tb3otZml0LWNvbnRlbnQ7aW5saW5lLXNpemU6Zml0LWNvbnRlbnQ7b3V0bGluZToxcHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO291dGxpbmUtb2Zmc2V0Oi0xcHh9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZV0pe2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdKXtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6ZmxleC1zdGFydDthbGlnbi1zZWxmOmZsZXgtc3RhcnR9Omhvc3QoW3dpZHRoPWZ1bGxdKXtpbmxpbmUtc2l6ZToxMDAlO21pbi1pbmxpbmUtc2l6ZTotbW96LWZpdC1jb250ZW50O21pbi1pbmxpbmUtc2l6ZTpmaXQtY29udGVudH06aG9zdChbd2lkdGg9ZnVsbF0pIDo6c2xvdHRlZChjYWxjaXRlLXNlZ21lbnRlZC1jb250cm9sLWl0ZW0pe2ZsZXg6MSAxIGF1dG99Omhvc3QoW3dpZHRoPWZ1bGxdW2xheW91dD12ZXJ0aWNhbF0pIDo6c2xvdHRlZChjYWxjaXRlLXNlZ21lbnRlZC1jb250cm9sLWl0ZW0pe2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fTo6c2xvdHRlZChpbnB1dFtzbG90PWhpZGRlbi1mb3JtLWlucHV0XSl7bWFyZ2luOjAgIWltcG9ydGFudDtvcGFjaXR5OjAgIWltcG9ydGFudDtvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtwYWRkaW5nOjAgIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50O2luc2V0OjAgIWltcG9ydGFudDt0cmFuc2Zvcm06bm9uZSAhaW1wb3J0YW50Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lICFpbXBvcnRhbnQ7ei1pbmRleDotMSAhaW1wb3J0YW50fTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBTZWdtZW50ZWRDb250cm9sID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVTZWdtZW50ZWRDb250cm9sQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlU2VnbWVudGVkQ29udHJvbENoYW5nZVwiLCA2KTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5sb2NhbE5hbWUgPT09IFwiY2FsY2l0ZS1zZWdtZW50ZWQtY29udHJvbC1pdGVtXCIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RJdGVtKGV2ZW50LnRhcmdldCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsICgpID0+IHRoaXMuc2V0VXBJdGVtcygpKTtcbiAgICB0aGlzLmFwcGVhcmFuY2UgPSBcInNvbGlkXCI7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlcXVpcmVkID0gZmFsc2U7XG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGF5b3V0ID0gXCJob3Jpem9udGFsXCI7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMud2lkdGggPSBcImF1dG9cIjtcbiAgfVxuICBoYW5kbGVQcm9wc0NoYW5nZSgpIHtcbiAgICB0aGlzLmhhbmRsZUl0ZW1Qcm9wQ2hhbmdlKCk7XG4gIH1cbiAgdmFsdWVIYW5kbGVyKHZhbHVlKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0uY2hlY2tlZCA9IGl0ZW0udmFsdWUgPT09IHZhbHVlKSk7XG4gIH1cbiAgaGFuZGxlU2VsZWN0ZWRJdGVtQ2hhbmdlKG5ld0l0ZW0sIG9sZEl0ZW0pIHtcbiAgICB0aGlzLnZhbHVlID0gbmV3SXRlbT8udmFsdWU7XG4gICAgaWYgKG5ld0l0ZW0gPT09IG9sZEl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XG4gICAgY29uc3QgbWF0Y2ggPSBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gPT09IG5ld0l0ZW0pLnBvcCgpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgdGhpcy5zZWxlY3RJdGVtKG1hdGNoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXRlbXNbMF0pIHtcbiAgICAgIGl0ZW1zWzBdLnRhYkluZGV4ID0gMDtcbiAgICB9XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLnNldFVwSXRlbXMoKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIGFmdGVyQ29ubmVjdERlZmF1bHRWYWx1ZVNldCh0aGlzLCB0aGlzLnZhbHVlKTtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGNvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBjb25uZWN0Rm9ybSh0aGlzKTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/Lm9ic2VydmUodGhpcy5lbCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgdGhpcy5oYW5kbGVJdGVtUHJvcENoYW5nZSgpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBkaXNjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgZGlzY29ubmVjdEZvcm0odGhpcyk7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy51bm9ic2VydmUodGhpcy5lbCk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5oYW5kbGVDbGljaywgcm9sZTogXCJyYWRpb2dyb3VwXCIgfSwgaChcInNsb3RcIiwgbnVsbCksIGgoSGlkZGVuRm9ybUlucHV0U2xvdCwgeyBjb21wb25lbnQ6IHRoaXMgfSkpKTtcbiAgfVxuICBoYW5kbGVTZWxlY3RlZChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZWxlY3RJdGVtKGV2ZW50LnRhcmdldCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgIGNvbnN0IGtleXMgPSBbXCJBcnJvd0xlZnRcIiwgXCJBcnJvd1VwXCIsIFwiQXJyb3dSaWdodFwiLCBcIkFycm93RG93blwiLCBcIiBcIl07XG4gICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgIGNvbnN0IHsgZWwsIHNlbGVjdGVkSXRlbSB9ID0gdGhpcztcbiAgICBpZiAoa2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBhZGp1c3RlZEtleSA9IGtleTtcbiAgICBpZiAoZ2V0RWxlbWVudERpcihlbCkgPT09IFwicnRsXCIpIHtcbiAgICAgIGlmIChrZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgIGFkanVzdGVkS2V5ID0gXCJBcnJvd0xlZnRcIjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgYWRqdXN0ZWRLZXkgPSBcIkFycm93UmlnaHRcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XG4gICAgbGV0IHNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGl0ZW0gPT09IHNlbGVjdGVkSXRlbSkge1xuICAgICAgICBzZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc3dpdGNoIChhZGp1c3RlZEtleSkge1xuICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJldmlvdXMgPSBzZWxlY3RlZEluZGV4IDwgMSA/IGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdIDogaXRlbXNbc2VsZWN0ZWRJbmRleCAtIDFdO1xuICAgICAgICB0aGlzLnNlbGVjdEl0ZW0ocHJldmlvdXMsIHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBuZXh0ID0gc2VsZWN0ZWRJbmRleCA9PT0gLTEgPyBpdGVtc1sxXSA6IGl0ZW1zW3NlbGVjdGVkSW5kZXggKyAxXSB8fCBpdGVtc1swXTtcbiAgICAgICAgdGhpcy5zZWxlY3RJdGVtKG5leHQsIHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIFwiIFwiOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNlbGVjdEl0ZW0oZXZlbnQudGFyZ2V0LCB0cnVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRGb2N1c2FibGUodGhpcyk7XG4gICAgKHRoaXMuc2VsZWN0ZWRJdGVtIHx8IHRoaXMuZ2V0SXRlbXMoKVswXSk/LmZvY3VzKCk7XG4gIH1cbiAgaGFuZGxlSXRlbVByb3BDaGFuZ2UoKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5hcHBlYXJhbmNlID0gdGhpcy5hcHBlYXJhbmNlO1xuICAgICAgaXRlbS5sYXlvdXQgPSB0aGlzLmxheW91dDtcbiAgICAgIGl0ZW0uc2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgIH0pO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG9uTGFiZWxDbGljaygpIHtcbiAgICB0aGlzLnNldEZvY3VzKCk7XG4gIH1cbiAgZ2V0SXRlbXMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS1zZWdtZW50ZWQtY29udHJvbC1pdGVtXCIpKTtcbiAgfVxuICBzZWxlY3RJdGVtKHNlbGVjdGVkLCBlbWl0ID0gZmFsc2UpIHtcbiAgICBpZiAoc2VsZWN0ZWQgPT09IHRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xuICAgIGxldCBtYXRjaCA9IG51bGw7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGl0ZW0gPT09IHNlbGVjdGVkO1xuICAgICAgaWYgKChtYXRjaGVzICYmICFpdGVtLmNoZWNrZWQpIHx8ICghbWF0Y2hlcyAmJiBpdGVtLmNoZWNrZWQpKSB7XG4gICAgICAgIGl0ZW0uY2hlY2tlZCA9IG1hdGNoZXM7XG4gICAgICB9XG4gICAgICBpdGVtLnRhYkluZGV4ID0gbWF0Y2hlcyA/IDAgOiAtMTtcbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIG1hdGNoID0gaXRlbTtcbiAgICAgICAgaWYgKGVtaXQpIHtcbiAgICAgICAgICB0aGlzLmNhbGNpdGVTZWdtZW50ZWRDb250cm9sQ2hhbmdlLmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbWF0Y2g7XG4gICAgaWYgKEJ1aWxkLmlzQnJvd3NlciAmJiBtYXRjaCkge1xuICAgICAgbWF0Y2guZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgc2V0VXBJdGVtcygpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcbiAgICBjb25zdCBsYXN0Q2hlY2tlZCA9IGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jaGVja2VkKS5wb3AoKTtcbiAgICBpZiAobGFzdENoZWNrZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0SXRlbShsYXN0Q2hlY2tlZCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGl0ZW1zWzBdKSB7XG4gICAgICBpdGVtc1swXS50YWJJbmRleCA9IDA7XG4gICAgfVxuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImFwcGVhcmFuY2VcIjogW1wiaGFuZGxlUHJvcHNDaGFuZ2VcIl0sXG4gICAgXCJsYXlvdXRcIjogW1wiaGFuZGxlUHJvcHNDaGFuZ2VcIl0sXG4gICAgXCJzY2FsZVwiOiBbXCJoYW5kbGVQcm9wc0NoYW5nZVwiXSxcbiAgICBcInZhbHVlXCI6IFtcInZhbHVlSGFuZGxlclwiXSxcbiAgICBcInNlbGVjdGVkSXRlbVwiOiBbXCJoYW5kbGVTZWxlY3RlZEl0ZW1DaGFuZ2VcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gc2VnbWVudGVkQ29udHJvbENzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1zZWdtZW50ZWQtY29udHJvbFwiLCB7XG4gICAgXCJhcHBlYXJhbmNlXCI6IFs1MTNdLFxuICAgIFwiZGlzYWJsZWRcIjogWzUxNl0sXG4gICAgXCJmb3JtXCI6IFs1MTNdLFxuICAgIFwicmVxdWlyZWRcIjogWzUxNl0sXG4gICAgXCJuYW1lXCI6IFs1MTNdLFxuICAgIFwibGF5b3V0XCI6IFs1MTNdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJ2YWx1ZVwiOiBbMTAyNV0sXG4gICAgXCJzZWxlY3RlZEl0ZW1cIjogWzEwNDBdLFxuICAgIFwid2lkdGhcIjogWzUxM10sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdXG4gIH0sIFtbMCwgXCJjYWxjaXRlSW50ZXJuYWxTZWdtZW50ZWRDb250cm9sSXRlbUNoYW5nZVwiLCBcImhhbmRsZVNlbGVjdGVkXCJdLCBbMCwgXCJrZXlkb3duXCIsIFwiaGFuZGxlS2V5RG93blwiXV1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1zZWdtZW50ZWQtY29udHJvbFwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1zZWdtZW50ZWQtY29udHJvbFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIFNlZ21lbnRlZENvbnRyb2wpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcblxuY29uc3QgQ2FsY2l0ZVNlZ21lbnRlZENvbnRyb2wgPSBTZWdtZW50ZWRDb250cm9sO1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IGRlZmluZUN1c3RvbUVsZW1lbnQkMTtcblxuZXhwb3J0IHsgQ2FsY2l0ZVNlZ21lbnRlZENvbnRyb2wsIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IEJ1aWxkIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG5mdW5jdGlvbiBnZXRVc2VyQWdlbnREYXRhKCkge1xuICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGE7XG59XG5mdW5jdGlvbiBnZXRVc2VyQWdlbnRTdHJpbmcoKSB7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgY29uc3QgdWFEYXRhID0gZ2V0VXNlckFnZW50RGF0YSgpO1xuICByZXR1cm4gdWFEYXRhPy5icmFuZHNcbiAgICA/IHVhRGF0YS5icmFuZHMubWFwKCh7IGJyYW5kLCB2ZXJzaW9uIH0pID0+IGAke2JyYW5kfS8ke3ZlcnNpb259YCkuam9pbihcIiBcIilcbiAgICA6IG5hdmlnYXRvci51c2VyQWdlbnQ7XG59XG5cbi8vIOKaoO+4jyBicm93c2VyLXNuaWZmaW5nIGlzIG5vdCBhIGJlc3QgcHJhY3RpY2UgYW5kIHNob3VsZCBiZSBhdm9pZGVkIOKaoO+4j1xuY29uc3QgaXNGaXJlZm94ID0gL2ZpcmVmb3gvaS50ZXN0KGdldFVzZXJBZ2VudFN0cmluZygpKTtcbmNvbnN0IGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50ID0gaXNGaXJlZm94XG4gID8gbmV3IFdlYWtNYXAoKVxuICA6IG51bGw7XG5mdW5jdGlvbiBpbnRlcmNlcHRlZENsaWNrKCkge1xuICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzO1xuICBpZiAoIWRpc2FibGVkKSB7XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrLmNhbGwodGhpcyk7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZXZlbnQpIHtcbiAgY29uc3QgaW50ZXJhY3RpdmVFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICBpZiAoaXNGaXJlZm94ICYmICFpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoaW50ZXJhY3RpdmVFbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGRpc2FibGVkIH0gPSBpbnRlcmFjdGl2ZUVsZW1lbnQ7XG4gIGlmIChkaXNhYmxlZCkge1xuICAgIC8vIHByZXZlbnQgY2xpY2sgZnJvbSBtb3ZpbmcgZm9jdXMgb24gaG9zdFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMgPSBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIl07XG5mdW5jdGlvbiBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudChldmVudCkge1xuICBpZiAoaXNGaXJlZm94ICYmICFpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoZXZlbnQudGFyZ2V0KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGRpc2FibGVkIH0gPSBldmVudC50YXJnZXQ7XG4gIC8vIHByZXZlbnQgZGlzYWxsb3dlZCBtb3VzZSBldmVudHMgZnJvbSBiZWluZyBlbWl0dGVkIG9uIHRoZSBkaXNhYmxlZCBob3N0IChwZXIgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy81ODg2KVxuICAvL+KaoCB3ZSBnZW5lcmFsbHkgYXZvaWQgc3RvcHBpbmcgcHJvcGFnYXRpb24gb2YgZXZlbnRzLCBidXQgdGhpcyBpcyBuZWVkZWQgdG8gYWRoZXJlIHRvIHRoZSBpbnRlbmRlZCBzcGVjIGNoYW5nZXMgYWJvdmUg4pqgXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IGNhcHR1cmVPbmx5T3B0aW9ucyA9IHsgY2FwdHVyZTogdHJ1ZSB9O1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1cGRhdGVzIHRoZSBob3N0IGVsZW1lbnQgdG8gcHJldmVudCBrZXlib2FyZCBpbnRlcmFjdGlvbiBvbiBpdHMgc3VidHJlZSBhbmQgc2V0cyB0aGUgYXBwcm9wcmlhdGUgYXJpYSBhdHRyaWJ1dGUgZm9yIGFjY2Vzc2liaWxpdHkuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZFJlbmRlcmAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogKipOb3RlcyoqXG4gKlxuICogdGhpcyB1dGlsIGlzIG5vdCBuZWVkZWQgZm9yIHNpbXBsZSBjb21wb25lbnRzIHdob3NlIHJvb3QgZWxlbWVudCBvciBlbGVtZW50cyBhcmUgYW4gaW50ZXJhY3RpdmUgY29tcG9uZW50IChjdXN0b20gZWxlbWVudCBvciBuYXRpdmUgY29udHJvbCkuIEZvciB0aG9zZSBjYXNlcywgc2V0IHRoZSBgZGlzYWJsZWRgIHByb3BzIG9uIHRoZSByb290IGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIHRlY2huaWNhbGx5LCB1c2VycyBjYW4gb3ZlcnJpZGUgYHRhYmluZGV4YCBhbmQgcmVzdG9yZSBrZXlib2FyZCBuYXZpZ2F0aW9uLCBidXQgdGhpcyB3aWxsIGJlIGNvbnNpZGVyZWQgdXNlciBlcnJvclxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBob3N0SXNUYWJiYWJsZSDigJMgd2hlbiBzZXQgdG8gdHJ1ZSBvciBpdHMgcHJlZGljYXRlIHJldHVybnMgdHJ1ZSwgdGhlIGhvc3QgaXMgdGFiYmFibGUgYW5kIHdpbGwgYmUgbWFuYWdlZCBieSB0aGUgaGVscGVyLiBTZXQgdG8gXCJtYW5hZ2VkXCIgZm9yIGNhc2VzIHdoZXJlIGEgY29tcG9uZW50J3MgcGFyZW50IGRldGVybWluZXMgd2hpY2ggaXRlbSBpcyB0YWJiYWJsZSAoaS5lLiwgc2V0cyBgdGFiaW5kZXhgIHRvIGFsbG93IHRhYmJpbmcpLlxuICovXG5mdW5jdGlvbiB1cGRhdGVIb3N0SW50ZXJhY3Rpb24oY29tcG9uZW50LCBob3N0SXNUYWJiYWJsZSA9IGZhbHNlKSB7XG4gIGlmIChjb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgaWYgKGNvbXBvbmVudC5lbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICAgIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbiAgICByZXR1cm47XG4gIH1cbiAgcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCk7XG4gIGlmICh0eXBlb2YgaG9zdElzVGFiYmFibGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBob3N0SXNUYWJiYWJsZS5jYWxsKGNvbXBvbmVudCkgPyBcIjBcIiA6IFwiLTFcIik7XG4gIH1cbiAgZWxzZSBpZiAoaG9zdElzVGFiYmFibGUgPT09IHRydWUpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSBmYWxzZSkge1xuICAgIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcbiAgfVxuICBlbHNlIDtcbiAgY29tcG9uZW50LmVsLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIik7XG59XG5mdW5jdGlvbiBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZWwuY2xpY2sgPSBpbnRlcmNlcHRlZENsaWNrO1xuICBhZGRJbnRlcmFjdGlvbkxpc3RlbmVycyhpc0ZpcmVmb3ggPyBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gYWRkSW50ZXJhY3Rpb25MaXN0ZW5lcnMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICAvLyB0aGlzIHBhdGggaXMgb25seSBhcHBsaWNhYmxlIHRvIEZpcmVmb3hcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG59XG5mdW5jdGlvbiBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkge1xuICByZXR1cm4gaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KSB7XG4gIGRlbGV0ZSBjb21wb25lbnQuZWwuY2xpY2s7IC8vIGZhbGxiYWNrIG9uIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGlja1xuICByZW1vdmVJbnRlcmFjdGlvbkxpc3RlbmVycyhpc0ZpcmVmb3ggPyBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gcmVtb3ZlSW50ZXJhY3Rpb25MaXN0ZW5lcnMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICAvLyB0aGlzIHBhdGggaXMgb25seSBhcHBsaWNhYmxlIHRvIEZpcmVmb3hcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBoZWxwcyBkaXNhYmxlIGNvbXBvbmVudHMgY29uc2lzdGVudGx5IGluIEZpcmVmb3guXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBjb25uZWN0ZWRDYWxsYmFja2AgYW5kIGlzIG9ubHkgbmVlZGVkIGZvciBGaXJlZm94IGFzIGl0IGRvZXMgbm90IGNhbGwgY2FwdHVyZSBldmVudCBsaXN0ZW5lcnMgYmVmb3JlIG5vbi1jYXB0dXJlIG9uZXMgKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzMxNTA0KS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RJbnRlcmFjdGl2ZShjb21wb25lbnQpIHtcbiAgaWYgKCFjb21wb25lbnQuZGlzYWJsZWQgfHwgIWlzRmlyZWZveCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwYXJlbnQgPSBjb21wb25lbnQuZWwucGFyZW50RWxlbWVudCB8fCBjb21wb25lbnQuZWw7IC8qIGFzc3VtZSBlbGVtZW50IGlzIGhvc3QgaWYgaXQgaGFzIG5vIHBhcmVudCB3aGVuIGNvbm5lY3RlZCAqL1xuICBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5zZXQoY29tcG9uZW50LmVsLCBwYXJlbnQpO1xuICBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSByZXN0b3JlcyBpbnRlcmFjdGl2aXR5IHRvIGRpc2FibGVkIGNvbXBvbmVudHMgY29uc2lzdGVudGx5IGluIEZpcmVmb3guXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFja2AgYW5kIGlzIG9ubHkgbmVlZGVkIGZvciBGaXJlZm94IGFzIGl0IGRvZXMgbm90IGNhbGwgY2FwdHVyZSBldmVudCBsaXN0ZW5lcnMgYmVmb3JlIG5vbi1jYXB0dXJlIG9uZXMgKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzMxNTA0KS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZShjb21wb25lbnQpIHtcbiAgaWYgKCFpc0ZpcmVmb3gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYWx3YXlzIHJlbW92ZSBvbiBkaXNjb25uZWN0IGFzIHJlbmRlciBvciBjb25uZWN0IHdpbGwgcmVzdG9yZSBpdFxuICBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RJbnRlcmFjdGl2ZSBhcyBjLCBkaXNjb25uZWN0SW50ZXJhY3RpdmUgYXMgZCwgZ2V0VXNlckFnZW50U3RyaW5nIGFzIGcsIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiBhcyB1IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyB5IGFzIGlzQmVmb3JlLCBxIGFzIHF1ZXJ5RWxlbWVudFJvb3RzLCBjIGFzIGNsb3Nlc3RFbGVtZW50Q3Jvc3NTaGFkb3dCb3VuZGFyeSB9IGZyb20gJy4vZG9tLmpzJztcblxuLyoqXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5XG4gKlxuICogQGludGVybmFsXG4gKi9cbmNvbnN0IGxhYmVsQ2xpY2tFdmVudCA9IFwiY2FsY2l0ZUludGVybmFsTGFiZWxDbGlja1wiO1xuY29uc3QgbGFiZWxDb25uZWN0ZWRFdmVudCA9IFwiY2FsY2l0ZUludGVybmFsTGFiZWxDb25uZWN0ZWRcIjtcbmNvbnN0IGxhYmVsRGlzY29ubmVjdGVkRXZlbnQgPSBcImNhbGNpdGVJbnRlcm5hbExhYmVsRGlzY29ubmVjdGVkXCI7XG5jb25zdCBsYWJlbFRhZ05hbWUgPSBcImNhbGNpdGUtbGFiZWxcIjtcbmNvbnN0IGxhYmVsVG9MYWJlbGFibGVzID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IG9uTGFiZWxDbGlja01hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBvbkxhYmVsQ29ubmVjdGVkTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdW5sYWJlbGVkQ29tcG9uZW50cyA9IG5ldyBXZWFrU2V0KCk7XG5jb25zdCBmaW5kTGFiZWxGb3JDb21wb25lbnQgPSAoY29tcG9uZW50RWwpID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gY29tcG9uZW50RWw7XG4gIGNvbnN0IGZvckxhYmVsID0gaWQgJiYgcXVlcnlFbGVtZW50Um9vdHMoY29tcG9uZW50RWwsIHsgc2VsZWN0b3I6IGAke2xhYmVsVGFnTmFtZX1bZm9yPVwiJHtpZH1cIl1gIH0pO1xuICBpZiAoZm9yTGFiZWwpIHtcbiAgICByZXR1cm4gZm9yTGFiZWw7XG4gIH1cbiAgY29uc3QgcGFyZW50TGFiZWwgPSBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkoY29tcG9uZW50RWwsIGxhYmVsVGFnTmFtZSk7XG4gIGlmICghcGFyZW50TGFiZWwgfHxcbiAgICAvLyBsYWJlbGFibGUgY29tcG9uZW50cyB3aXRoaW4gb3RoZXIgY3VzdG9tIGVsZW1lbnRzIGFyZSBub3QgY29uc2lkZXJlZCBsYWJlbGFibGVcbiAgICBoYXNBbmNlc3RvckN1c3RvbUVsZW1lbnRzKHBhcmVudExhYmVsLCBjb21wb25lbnRFbCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gcGFyZW50TGFiZWw7XG59O1xuZnVuY3Rpb24gaGFzQW5jZXN0b3JDdXN0b21FbGVtZW50cyhsYWJlbCwgY29tcG9uZW50RWwpIHtcbiAgbGV0IHRyYXZlcnNlZEVsZW1lbnRzO1xuICBjb25zdCBjdXN0b21FbGVtZW50QW5jZXN0b3JDaGVja0V2ZW50VHlwZSA9IFwiY3VzdG9tLWVsZW1lbnQtYW5jZXN0b3ItY2hlY2tcIjtcbiAgY29uc3QgbGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICB0cmF2ZXJzZWRFbGVtZW50cyA9IGNvbXBvc2VkUGF0aC5zbGljZShjb21wb3NlZFBhdGguaW5kZXhPZihjb21wb25lbnRFbCksIGNvbXBvc2VkUGF0aC5pbmRleE9mKGxhYmVsKSk7XG4gIH07XG4gIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoY3VzdG9tRWxlbWVudEFuY2VzdG9yQ2hlY2tFdmVudFR5cGUsIGxpc3RlbmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gIGNvbXBvbmVudEVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGN1c3RvbUVsZW1lbnRBbmNlc3RvckNoZWNrRXZlbnRUeXBlLCB7IGNvbXBvc2VkOiB0cnVlLCBidWJibGVzOiB0cnVlIH0pKTtcbiAgbGFiZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihjdXN0b21FbGVtZW50QW5jZXN0b3JDaGVja0V2ZW50VHlwZSwgbGlzdGVuZXIpO1xuICBjb25zdCBhbmNlc3RvckN1c3RvbUVsZW1lbnRzID0gdHJhdmVyc2VkRWxlbWVudHNcbiAgICAuZmlsdGVyKChlbCkgPT4gZWwgIT09IGNvbXBvbmVudEVsICYmIGVsICE9PSBsYWJlbClcbiAgICAuZmlsdGVyKChlbCkgPT4gZWwudGFnTmFtZT8uaW5jbHVkZXMoXCItXCIpKTtcbiAgcmV0dXJuIGFuY2VzdG9yQ3VzdG9tRWxlbWVudHMubGVuZ3RoID4gMDtcbn1cbi8qKlxuICogSGVscGVyIHRvIHNldCB1cCBsYWJlbCBpbnRlcmFjdGlvbnMgb24gY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0TGFiZWwoY29tcG9uZW50KSB7XG4gIGNvbnN0IGxhYmVsRWwgPSBmaW5kTGFiZWxGb3JDb21wb25lbnQoY29tcG9uZW50LmVsKTtcbiAgaWYgKChvbkxhYmVsQ2xpY2tNYXAuaGFzKGxhYmVsRWwpICYmIGxhYmVsRWwgPT09IGNvbXBvbmVudC5sYWJlbEVsKSB8fFxuICAgICghbGFiZWxFbCAmJiB1bmxhYmVsZWRDb21wb25lbnRzLmhhcyhjb21wb25lbnQpKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBib3VuZE9uTGFiZWxEaXNjb25uZWN0ZWQgPSBvbkxhYmVsRGlzY29ubmVjdGVkLmJpbmQoY29tcG9uZW50KTtcbiAgaWYgKGxhYmVsRWwpIHtcbiAgICBjb21wb25lbnQubGFiZWxFbCA9IGxhYmVsRWw7XG4gICAgY29uc3QgbGFiZWxhYmxlcyA9IGxhYmVsVG9MYWJlbGFibGVzLmdldChsYWJlbEVsKSB8fCBbXTtcbiAgICBsYWJlbGFibGVzLnB1c2goY29tcG9uZW50KTtcbiAgICBsYWJlbFRvTGFiZWxhYmxlcy5zZXQobGFiZWxFbCwgbGFiZWxhYmxlcy5zb3J0KHNvcnRCeURPTU9yZGVyKSk7XG4gICAgaWYgKCFvbkxhYmVsQ2xpY2tNYXAuaGFzKGNvbXBvbmVudC5sYWJlbEVsKSkge1xuICAgICAgb25MYWJlbENsaWNrTWFwLnNldChjb21wb25lbnQubGFiZWxFbCwgb25MYWJlbENsaWNrKTtcbiAgICAgIGNvbXBvbmVudC5sYWJlbEVsLmFkZEV2ZW50TGlzdGVuZXIobGFiZWxDbGlja0V2ZW50LCBvbkxhYmVsQ2xpY2spO1xuICAgIH1cbiAgICB1bmxhYmVsZWRDb21wb25lbnRzLmRlbGV0ZShjb21wb25lbnQpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobGFiZWxDb25uZWN0ZWRFdmVudCwgb25MYWJlbENvbm5lY3RlZE1hcC5nZXQoY29tcG9uZW50KSk7XG4gICAgb25MYWJlbERpc2Nvbm5lY3RlZE1hcC5zZXQoY29tcG9uZW50LCBib3VuZE9uTGFiZWxEaXNjb25uZWN0ZWQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobGFiZWxEaXNjb25uZWN0ZWRFdmVudCwgYm91bmRPbkxhYmVsRGlzY29ubmVjdGVkKTtcbiAgfVxuICBlbHNlIGlmICghdW5sYWJlbGVkQ29tcG9uZW50cy5oYXMoY29tcG9uZW50KSkge1xuICAgIGJvdW5kT25MYWJlbERpc2Nvbm5lY3RlZCgpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobGFiZWxEaXNjb25uZWN0ZWRFdmVudCwgb25MYWJlbERpc2Nvbm5lY3RlZE1hcC5nZXQoY29tcG9uZW50KSk7XG4gIH1cbn1cbi8qKlxuICogSGVscGVyIHRvIHRlYXIgZG93biBsYWJlbCBpbnRlcmFjdGlvbnMgb24gZGlzY29ubmVjdGVkQ2FsbGJhY2sgb24gbGFiZWxhYmxlIGNvbXBvbmVudHMuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0TGFiZWwoY29tcG9uZW50KSB7XG4gIHVubGFiZWxlZENvbXBvbmVudHMuZGVsZXRlKGNvbXBvbmVudCk7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobGFiZWxDb25uZWN0ZWRFdmVudCwgb25MYWJlbENvbm5lY3RlZE1hcC5nZXQoY29tcG9uZW50KSk7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobGFiZWxEaXNjb25uZWN0ZWRFdmVudCwgb25MYWJlbERpc2Nvbm5lY3RlZE1hcC5nZXQoY29tcG9uZW50KSk7XG4gIG9uTGFiZWxDb25uZWN0ZWRNYXAuZGVsZXRlKGNvbXBvbmVudCk7XG4gIG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAuZGVsZXRlKGNvbXBvbmVudCk7XG4gIGlmICghY29tcG9uZW50LmxhYmVsRWwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgbGFiZWxhYmxlcyA9IGxhYmVsVG9MYWJlbGFibGVzLmdldChjb21wb25lbnQubGFiZWxFbCk7XG4gIGlmIChsYWJlbGFibGVzLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbXBvbmVudC5sYWJlbEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIobGFiZWxDbGlja0V2ZW50LCBvbkxhYmVsQ2xpY2tNYXAuZ2V0KGNvbXBvbmVudC5sYWJlbEVsKSk7XG4gICAgb25MYWJlbENsaWNrTWFwLmRlbGV0ZShjb21wb25lbnQubGFiZWxFbCk7XG4gIH1cbiAgbGFiZWxUb0xhYmVsYWJsZXMuc2V0KGNvbXBvbmVudC5sYWJlbEVsLCBsYWJlbGFibGVzLmZpbHRlcigobGFiZWxhYmxlKSA9PiBsYWJlbGFibGUgIT09IGNvbXBvbmVudCkuc29ydChzb3J0QnlET01PcmRlcikpO1xuICBjb21wb25lbnQubGFiZWxFbCA9IG51bGw7XG59XG5mdW5jdGlvbiBzb3J0QnlET01PcmRlcihhLCBiKSB7XG4gIHJldHVybiBpc0JlZm9yZShhLmVsLCBiLmVsKSA/IC0xIDogMTtcbn1cbi8qKlxuICogSGVscGVyIHRvIGdldCB0aGUgbGFiZWwgdGV4dCBmcm9tIGEgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZ2V0TGFiZWxUZXh0KGNvbXBvbmVudCkge1xuICByZXR1cm4gY29tcG9uZW50LmxhYmVsIHx8IGNvbXBvbmVudC5sYWJlbEVsPy50ZXh0Q29udGVudD8udHJpbSgpIHx8IFwiXCI7XG59XG5mdW5jdGlvbiBvbkxhYmVsQ2xpY2soZXZlbnQpIHtcbiAgY29uc3QgbGFiZWxDbGlja1RhcmdldCA9IGV2ZW50LmRldGFpbC5zb3VyY2VFdmVudC50YXJnZXQ7XG4gIGNvbnN0IGxhYmVsYWJsZXMgPSBsYWJlbFRvTGFiZWxhYmxlcy5nZXQodGhpcyk7XG4gIGNvbnN0IGNsaWNrZWRMYWJlbGFibGUgPSBsYWJlbGFibGVzLmZpbmQoKGxhYmVsYWJsZSkgPT4gbGFiZWxhYmxlLmVsID09PSBsYWJlbENsaWNrVGFyZ2V0KTtcbiAgY29uc3QgbGFiZWxhYmxlQ2hpbGRDbGlja2VkID0gbGFiZWxhYmxlcy5pbmNsdWRlcyhjbGlja2VkTGFiZWxhYmxlKTtcbiAgaWYgKGxhYmVsYWJsZUNoaWxkQ2xpY2tlZCkge1xuICAgIC8vIG5vIG5lZWQgdG8gZm9yd2FyZCBjbGljayBhcyBsYWJlbGFibGUgd2lsbCByZWNlaXZlIGZvY3VzXG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGZpcnN0TGFiZWxhYmxlID0gbGFiZWxhYmxlc1swXTtcbiAgaWYgKGZpcnN0TGFiZWxhYmxlLmRpc2FibGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZpcnN0TGFiZWxhYmxlLm9uTGFiZWxDbGljayhldmVudCk7XG59XG5mdW5jdGlvbiBvbkxhYmVsQ29ubmVjdGVkKCkge1xuICBpZiAodW5sYWJlbGVkQ29tcG9uZW50cy5oYXModGhpcykpIHtcbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uTGFiZWxEaXNjb25uZWN0ZWQoKSB7XG4gIHVubGFiZWxlZENvbXBvbmVudHMuYWRkKHRoaXMpO1xuICBjb25zdCBib3VuZE9uTGFiZWxDb25uZWN0ZWQgPSBvbkxhYmVsQ29ubmVjdGVkTWFwLmdldCh0aGlzKSB8fCBvbkxhYmVsQ29ubmVjdGVkLmJpbmQodGhpcyk7XG4gIG9uTGFiZWxDb25uZWN0ZWRNYXAuc2V0KHRoaXMsIGJvdW5kT25MYWJlbENvbm5lY3RlZCk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobGFiZWxDb25uZWN0ZWRFdmVudCwgYm91bmRPbkxhYmVsQ29ubmVjdGVkKTtcbn1cblxuZXhwb3J0IHsgbGFiZWxEaXNjb25uZWN0ZWRFdmVudCBhcyBhLCBjb25uZWN0TGFiZWwgYXMgYywgZGlzY29ubmVjdExhYmVsIGFzIGQsIGdldExhYmVsVGV4dCBhcyBnLCBsYWJlbENvbm5lY3RlZEV2ZW50IGFzIGwgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IEJ1aWxkIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG4vKipcbiAqIFRoaXMgdXRpbGl0eSBlbnN1cmVzIG9ic2VydmVycyBhcmUgY3JlYXRlZCBvbmx5IGZvciBicm93c2VyIGNvbnRleHRzLlxuICpcbiAqIEBwYXJhbSB0eXBlIC0gdGhlIHR5cGUgb2Ygb2JzZXJ2ZXIgdG8gY3JlYXRlXG4gKiBAcGFyYW0gY2FsbGJhY2sgLSB0aGUgb2JzZXJ2ZXIgY2FsbGJhY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gdGhlIG9ic2VydmVyIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGNvbnN0IE9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIodHlwZSk7XG4gIHJldHVybiBuZXcgT2JzZXJ2ZXIoY2FsbGJhY2ssIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIodHlwZSkge1xuICAvLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2RvbS9pc3N1ZXMvMTI2I2lzc3VlY29tbWVudC0xMDQ5ODE0OTQ4XG4gIGNsYXNzIEV4dGVuZGVkTXV0YXRpb25PYnNlcnZlciBleHRlbmRzIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjaykge1xuICAgICAgc3VwZXIoY2FsbGJhY2spO1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5ID0gW107XG4gICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuICAgIG9ic2VydmUodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkucHVzaCh7IHRhcmdldCwgb3B0aW9ucyB9KTtcbiAgICAgIHJldHVybiBzdXBlci5vYnNlcnZlKHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHVub2JzZXJ2ZSh0YXJnZXQpIHtcbiAgICAgIGNvbnN0IG5ld09ic2VydmVkRW50cmllcyA9IHRoaXMub2JzZXJ2ZWRFbnRyeS5maWx0ZXIoKG9ic2VydmVkKSA9PiBvYnNlcnZlZC50YXJnZXQgIT09IHRhcmdldCk7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkgPSBbXTtcbiAgICAgIHRoaXMuY2FsbGJhY2soc3VwZXIudGFrZVJlY29yZHMoKSwgdGhpcyk7XG4gICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAgIG5ld09ic2VydmVkRW50cmllcy5mb3JFYWNoKChvYnNlcnZlZCkgPT4gdGhpcy5vYnNlcnZlKG9ic2VydmVkLnRhcmdldCwgb2JzZXJ2ZWQub3B0aW9ucykpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHR5cGUgPT09IFwiaW50ZXJzZWN0aW9uXCJcbiAgICAgID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyXG4gICAgICA6IHR5cGUgPT09IFwibXV0YXRpb25cIlxuICAgICAgICA/IEV4dGVuZGVkTXV0YXRpb25PYnNlcnZlclxuICAgICAgICA6IHdpbmRvdy5SZXNpemVPYnNlcnZlcik7XG4gIH0pKCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU9ic2VydmVyIGFzIGMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==