"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-sortable-list_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-sortable-list.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-sortable-list.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteSortableList: () => (/* binding */ CalciteSortableList),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _sortableComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sortableComponent.js */ "./node_modules/@esri/calcite-components/dist/components/sortableComponent.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */






const CSS = {
  sortItem: "sort-item",
  container: "container",
  containerHorizontal: "container--horizontal",
  containerVertical: "container--vertical",
};

const sortableListCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{display:flex;flex:1 1 auto}.container--vertical{flex-direction:column}.container--horizontal{flex-direction:row}:host([hidden]){display:none}[hidden]{display:none}";

const SortableList = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteListOrderChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.createEvent)(this, "calciteListOrderChange", 6);
    this.items = [];
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_1__.c)("mutation", () => {
      this.setUpSorting();
    });
    this.dragEnabled = true;
    this.canPull = undefined;
    this.canPut = undefined;
    this.dragSelector = undefined;
    this.group = undefined;
    this.handleSelector = "calcite-handle";
    this.layout = "vertical";
    this.disabled = false;
    this.loading = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    if ((0,_sortableComponent_js__WEBPACK_IMPORTED_MODULE_2__.d)(this)) {
      return;
    }
    this.setUpSorting();
    this.beginObserving();
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
  }
  disconnectedCallback() {
    if ((0,_sortableComponent_js__WEBPACK_IMPORTED_MODULE_2__.d)(this)) {
      return;
    }
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    (0,_sortableComponent_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
    this.endObserving();
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_0__.u)(this);
  }
  calciteHandleNudgeNextHandler(event) {
    this.handleNudgeEvent(event);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  onDragStart() {
    this.endObserving();
  }
  onDragEnd() {
    this.beginObserving();
  }
  onDragSort() {
    this.items = Array.from(this.el.children);
    this.calciteListOrderChange.emit();
  }
  handleNudgeEvent(event) {
    const { direction } = event.detail;
    const handle = event
      .composedPath()
      .find((el) => el.matches(this.handleSelector));
    const sortItem = this.items.find((item) => {
      return item.contains(handle) || event.composedPath().includes(item);
    });
    const lastIndex = this.items.length - 1;
    const startingIndex = this.items.indexOf(sortItem);
    let appendInstead = false;
    let buddyIndex;
    if (direction === "up") {
      if (startingIndex === 0) {
        appendInstead = true;
      }
      else {
        buddyIndex = startingIndex - 1;
      }
    }
    else {
      if (startingIndex === lastIndex) {
        buddyIndex = 0;
      }
      else if (startingIndex === lastIndex - 1) {
        appendInstead = true;
      }
      else {
        buddyIndex = startingIndex + 2;
      }
    }
    this.endObserving();
    if (appendInstead) {
      sortItem.parentElement.appendChild(sortItem);
    }
    else {
      sortItem.parentElement.insertBefore(sortItem, this.items[buddyIndex]);
    }
    this.items = Array.from(this.el.children);
    this.beginObserving();
    requestAnimationFrame(() => (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.k)(handle));
    if ("activated" in handle) {
      handle.activated = true;
    }
  }
  setUpSorting() {
    this.items = Array.from(this.el.children);
    (0,_sortableComponent_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
  }
  beginObserving() {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
  }
  endObserving() {
    this.mutationObserver?.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { layout } = this;
    const horizontal = layout === "horizontal" || false;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.h)("div", { class: {
        [CSS.container]: true,
        [CSS.containerVertical]: !horizontal,
        [CSS.containerHorizontal]: horizontal,
      } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_4__.h)("slot", null)));
  }
  get el() { return this; }
  static get style() { return sortableListCss; }
}, [1, "calcite-sortable-list", {
    "canPull": [16],
    "canPut": [16],
    "dragSelector": [513, "drag-selector"],
    "group": [513],
    "handleSelector": [513, "handle-selector"],
    "layout": [513],
    "disabled": [516],
    "loading": [516]
  }, [[0, "calciteHandleNudge", "calciteHandleNudgeNextHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-sortable-list"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-sortable-list":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SortableList);
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteSortableList = SortableList;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNmQwYjlmYWNmZTJhNTU0YTQyNWQwZmIxM2NmZmYwN2YuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDeUc7QUFDVTtBQUM5RDtBQUNxRTtBQUM3RTs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxhQUFhLHlHQUF5RyxVQUFVLFdBQVcsYUFBYSxjQUFjLHFCQUFxQixzQkFBc0IsdUJBQXVCLG1CQUFtQixnQkFBZ0IsYUFBYSxTQUFTLGFBQWE7O0FBRTFnQixtQ0FBbUMsMEZBQWtCLGVBQWUsK0VBQVc7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsbUZBQVc7QUFDN0M7QUFDQSw0QkFBNEIsZ0RBQWM7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBa0I7QUFDdEI7QUFDQTtBQUNBLFFBQVEsd0RBQVU7QUFDbEI7QUFDQTtBQUNBLElBQUksa0RBQXFCO0FBQ3pCLElBQUksd0RBQTJCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDBDQUFZO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQXdCO0FBQzVCO0FBQ0E7QUFDQSw4Q0FBOEMsZ0NBQWdDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0EsWUFBWSx5RUFBQyxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRUFBRSx5RUFBQztBQUNaO0FBQ0EsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JMcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlFQUFLO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0JBQWdCLFFBQVEsTUFBTSxHQUFHLFFBQVE7QUFDcEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9IOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEpwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBSztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUUrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLXNvcnRhYmxlLWxpc3QuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2ludGVyYWN0aXZlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9vYnNlcnZlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuaW1wb3J0IHsgZCBhcyBkcmFnQWN0aXZlLCBhIGFzIGRpc2Nvbm5lY3RTb3J0YWJsZUNvbXBvbmVudCwgYyBhcyBjb25uZWN0U29ydGFibGVDb21wb25lbnQgfSBmcm9tICcuL3NvcnRhYmxlQ29tcG9uZW50LmpzJztcbmltcG9ydCB7IGsgYXMgZm9jdXNFbGVtZW50IH0gZnJvbSAnLi9kb20uanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIHNvcnRJdGVtOiBcInNvcnQtaXRlbVwiLFxuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGNvbnRhaW5lckhvcml6b250YWw6IFwiY29udGFpbmVyLS1ob3Jpem9udGFsXCIsXG4gIGNvbnRhaW5lclZlcnRpY2FsOiBcImNvbnRhaW5lci0tdmVydGljYWxcIixcbn07XG5cbmNvbnN0IHNvcnRhYmxlTGlzdENzcyA9IFwiOmhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7ZGlzcGxheTpmbGV4fTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX0uY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSBhdXRvfS5jb250YWluZXItLXZlcnRpY2Fse2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uY29udGFpbmVyLS1ob3Jpem9udGFse2ZsZXgtZGlyZWN0aW9uOnJvd306aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgU29ydGFibGVMaXN0ID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVMaXN0T3JkZXJDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVMaXN0T3JkZXJDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRVcFNvcnRpbmcoKTtcbiAgICB9KTtcbiAgICB0aGlzLmRyYWdFbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmNhblB1bGwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jYW5QdXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kcmFnU2VsZWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ncm91cCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhhbmRsZVNlbGVjdG9yID0gXCJjYWxjaXRlLWhhbmRsZVwiO1xuICAgIHRoaXMubGF5b3V0ID0gXCJ2ZXJ0aWNhbFwiO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmIChkcmFnQWN0aXZlKHRoaXMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0VXBTb3J0aW5nKCk7XG4gICAgdGhpcy5iZWdpbk9ic2VydmluZygpO1xuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoZHJhZ0FjdGl2ZSh0aGlzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgZGlzY29ubmVjdFNvcnRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIHRoaXMuZW5kT2JzZXJ2aW5nKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICBjYWxjaXRlSGFuZGxlTnVkZ2VOZXh0SGFuZGxlcihldmVudCkge1xuICAgIHRoaXMuaGFuZGxlTnVkZ2VFdmVudChldmVudCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBvbkRyYWdTdGFydCgpIHtcbiAgICB0aGlzLmVuZE9ic2VydmluZygpO1xuICB9XG4gIG9uRHJhZ0VuZCgpIHtcbiAgICB0aGlzLmJlZ2luT2JzZXJ2aW5nKCk7XG4gIH1cbiAgb25EcmFnU29ydCgpIHtcbiAgICB0aGlzLml0ZW1zID0gQXJyYXkuZnJvbSh0aGlzLmVsLmNoaWxkcmVuKTtcbiAgICB0aGlzLmNhbGNpdGVMaXN0T3JkZXJDaGFuZ2UuZW1pdCgpO1xuICB9XG4gIGhhbmRsZU51ZGdlRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IGRpcmVjdGlvbiB9ID0gZXZlbnQuZGV0YWlsO1xuICAgIGNvbnN0IGhhbmRsZSA9IGV2ZW50XG4gICAgICAuY29tcG9zZWRQYXRoKClcbiAgICAgIC5maW5kKChlbCkgPT4gZWwubWF0Y2hlcyh0aGlzLmhhbmRsZVNlbGVjdG9yKSk7XG4gICAgY29uc3Qgc29ydEl0ZW0gPSB0aGlzLml0ZW1zLmZpbmQoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiBpdGVtLmNvbnRhaW5zKGhhbmRsZSkgfHwgZXZlbnQuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXMoaXRlbSk7XG4gICAgfSk7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5pdGVtcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHN0YXJ0aW5nSW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2Yoc29ydEl0ZW0pO1xuICAgIGxldCBhcHBlbmRJbnN0ZWFkID0gZmFsc2U7XG4gICAgbGV0IGJ1ZGR5SW5kZXg7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XG4gICAgICBpZiAoc3RhcnRpbmdJbmRleCA9PT0gMCkge1xuICAgICAgICBhcHBlbmRJbnN0ZWFkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBidWRkeUluZGV4ID0gc3RhcnRpbmdJbmRleCAtIDE7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHN0YXJ0aW5nSW5kZXggPT09IGxhc3RJbmRleCkge1xuICAgICAgICBidWRkeUluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHN0YXJ0aW5nSW5kZXggPT09IGxhc3RJbmRleCAtIDEpIHtcbiAgICAgICAgYXBwZW5kSW5zdGVhZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYnVkZHlJbmRleCA9IHN0YXJ0aW5nSW5kZXggKyAyO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmVuZE9ic2VydmluZygpO1xuICAgIGlmIChhcHBlbmRJbnN0ZWFkKSB7XG4gICAgICBzb3J0SXRlbS5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHNvcnRJdGVtKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzb3J0SXRlbS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShzb3J0SXRlbSwgdGhpcy5pdGVtc1tidWRkeUluZGV4XSk7XG4gICAgfVxuICAgIHRoaXMuaXRlbXMgPSBBcnJheS5mcm9tKHRoaXMuZWwuY2hpbGRyZW4pO1xuICAgIHRoaXMuYmVnaW5PYnNlcnZpbmcoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gZm9jdXNFbGVtZW50KGhhbmRsZSkpO1xuICAgIGlmIChcImFjdGl2YXRlZFwiIGluIGhhbmRsZSkge1xuICAgICAgaGFuZGxlLmFjdGl2YXRlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHNldFVwU29ydGluZygpIHtcbiAgICB0aGlzLml0ZW1zID0gQXJyYXkuZnJvbSh0aGlzLmVsLmNoaWxkcmVuKTtcbiAgICBjb25uZWN0U29ydGFibGVDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgYmVnaW5PYnNlcnZpbmcoKSB7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICB9XG4gIGVuZE9ic2VydmluZygpIHtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGF5b3V0IH0gPSB0aGlzO1xuICAgIGNvbnN0IGhvcml6b250YWwgPSBsYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiIHx8IGZhbHNlO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtDU1MuY29udGFpbmVyXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5jb250YWluZXJWZXJ0aWNhbF06ICFob3Jpem9udGFsLFxuICAgICAgICBbQ1NTLmNvbnRhaW5lckhvcml6b250YWxdOiBob3Jpem9udGFsLFxuICAgICAgfSB9LCBoKFwic2xvdFwiLCBudWxsKSkpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIHNvcnRhYmxlTGlzdENzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1zb3J0YWJsZS1saXN0XCIsIHtcbiAgICBcImNhblB1bGxcIjogWzE2XSxcbiAgICBcImNhblB1dFwiOiBbMTZdLFxuICAgIFwiZHJhZ1NlbGVjdG9yXCI6IFs1MTMsIFwiZHJhZy1zZWxlY3RvclwiXSxcbiAgICBcImdyb3VwXCI6IFs1MTNdLFxuICAgIFwiaGFuZGxlU2VsZWN0b3JcIjogWzUxMywgXCJoYW5kbGUtc2VsZWN0b3JcIl0sXG4gICAgXCJsYXlvdXRcIjogWzUxM10sXG4gICAgXCJkaXNhYmxlZFwiOiBbNTE2XSxcbiAgICBcImxvYWRpbmdcIjogWzUxNl1cbiAgfSwgW1swLCBcImNhbGNpdGVIYW5kbGVOdWRnZVwiLCBcImNhbGNpdGVIYW5kbGVOdWRnZU5leHRIYW5kbGVyXCJdXV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXNvcnRhYmxlLWxpc3RcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtc29ydGFibGUtbGlzdFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIFNvcnRhYmxlTGlzdCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlU29ydGFibGVMaXN0ID0gU29ydGFibGVMaXN0O1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IGRlZmluZUN1c3RvbUVsZW1lbnQkMTtcblxuZXhwb3J0IHsgQ2FsY2l0ZVNvcnRhYmxlTGlzdCwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5cbmZ1bmN0aW9uIGdldFVzZXJBZ2VudERhdGEoKSB7XG4gIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50RGF0YTtcbn1cbmZ1bmN0aW9uIGdldFVzZXJBZ2VudFN0cmluZygpIHtcbiAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICBjb25zdCB1YURhdGEgPSBnZXRVc2VyQWdlbnREYXRhKCk7XG4gIHJldHVybiB1YURhdGE/LmJyYW5kc1xuICAgID8gdWFEYXRhLmJyYW5kcy5tYXAoKHsgYnJhbmQsIHZlcnNpb24gfSkgPT4gYCR7YnJhbmR9LyR7dmVyc2lvbn1gKS5qb2luKFwiIFwiKVxuICAgIDogbmF2aWdhdG9yLnVzZXJBZ2VudDtcbn1cblxuLy8g4pqg77iPIGJyb3dzZXItc25pZmZpbmcgaXMgbm90IGEgYmVzdCBwcmFjdGljZSBhbmQgc2hvdWxkIGJlIGF2b2lkZWQg4pqg77iPXG5jb25zdCBpc0ZpcmVmb3ggPSAvZmlyZWZveC9pLnRlc3QoZ2V0VXNlckFnZW50U3RyaW5nKCkpO1xuY29uc3QgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQgPSBpc0ZpcmVmb3hcbiAgPyBuZXcgV2Vha01hcCgpXG4gIDogbnVsbDtcbmZ1bmN0aW9uIGludGVyY2VwdGVkQ2xpY2soKSB7XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXM7XG4gIGlmICghZGlzYWJsZWQpIHtcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2suY2FsbCh0aGlzKTtcbiAgfVxufVxuZnVuY3Rpb24gb25Qb2ludGVyRG93bihldmVudCkge1xuICBjb25zdCBpbnRlcmFjdGl2ZUVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gIGlmIChpc0ZpcmVmb3ggJiYgIWludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChpbnRlcmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IGludGVyYWN0aXZlRWxlbWVudDtcbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgLy8gcHJldmVudCBjbGljayBmcm9tIG1vdmluZyBmb2N1cyBvbiBob3N0XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuY29uc3Qgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cyA9IFtcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJjbGlja1wiXTtcbmZ1bmN0aW9uIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50KGV2ZW50KSB7XG4gIGlmIChpc0ZpcmVmb3ggJiYgIWludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChldmVudC50YXJnZXQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IGV2ZW50LnRhcmdldDtcbiAgLy8gcHJldmVudCBkaXNhbGxvd2VkIG1vdXNlIGV2ZW50cyBmcm9tIGJlaW5nIGVtaXR0ZWQgb24gdGhlIGRpc2FibGVkIGhvc3QgKHBlciBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2h0bWwvaXNzdWVzLzU4ODYpXG4gIC8v4pqgIHdlIGdlbmVyYWxseSBhdm9pZCBzdG9wcGluZyBwcm9wYWdhdGlvbiBvZiBldmVudHMsIGJ1dCB0aGlzIGlzIG5lZWRlZCB0byBhZGhlcmUgdG8gdGhlIGludGVuZGVkIHNwZWMgY2hhbmdlcyBhYm92ZSDimqBcbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuY29uc3QgY2FwdHVyZU9ubHlPcHRpb25zID0geyBjYXB0dXJlOiB0cnVlIH07XG4vKipcbiAqIFRoaXMgaGVscGVyIHVwZGF0ZXMgdGhlIGhvc3QgZWxlbWVudCB0byBwcmV2ZW50IGtleWJvYXJkIGludGVyYWN0aW9uIG9uIGl0cyBzdWJ0cmVlIGFuZCBzZXRzIHRoZSBhcHByb3ByaWF0ZSBhcmlhIGF0dHJpYnV0ZSBmb3IgYWNjZXNzaWJpbGl0eS5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkUmVuZGVyYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiAqKk5vdGVzKipcbiAqXG4gKiB0aGlzIHV0aWwgaXMgbm90IG5lZWRlZCBmb3Igc2ltcGxlIGNvbXBvbmVudHMgd2hvc2Ugcm9vdCBlbGVtZW50IG9yIGVsZW1lbnRzIGFyZSBhbiBpbnRlcmFjdGl2ZSBjb21wb25lbnQgKGN1c3RvbSBlbGVtZW50IG9yIG5hdGl2ZSBjb250cm9sKS4gRm9yIHRob3NlIGNhc2VzLCBzZXQgdGhlIGBkaXNhYmxlZGAgcHJvcHMgb24gdGhlIHJvb3QgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogdGVjaG5pY2FsbHksIHVzZXJzIGNhbiBvdmVycmlkZSBgdGFiaW5kZXhgIGFuZCByZXN0b3JlIGtleWJvYXJkIG5hdmlnYXRpb24sIGJ1dCB0aGlzIHdpbGwgYmUgY29uc2lkZXJlZCB1c2VyIGVycm9yXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGhvc3RJc1RhYmJhYmxlIOKAkyB3aGVuIHNldCB0byB0cnVlIG9yIGl0cyBwcmVkaWNhdGUgcmV0dXJucyB0cnVlLCB0aGUgaG9zdCBpcyB0YWJiYWJsZSBhbmQgd2lsbCBiZSBtYW5hZ2VkIGJ5IHRoZSBoZWxwZXIuIFNldCB0byBcIm1hbmFnZWRcIiBmb3IgY2FzZXMgd2hlcmUgYSBjb21wb25lbnQncyBwYXJlbnQgZGV0ZXJtaW5lcyB3aGljaCBpdGVtIGlzIHRhYmJhYmxlIChpLmUuLCBzZXRzIGB0YWJpbmRleGAgdG8gYWxsb3cgdGFiYmluZykuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbihjb21wb25lbnQsIGhvc3RJc1RhYmJhYmxlID0gZmFsc2UpIHtcbiAgaWYgKGNvbXBvbmVudC5kaXNhYmxlZCkge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcbiAgICBpZiAoY29tcG9uZW50LmVsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gICAgYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpO1xuICAgIHJldHVybjtcbiAgfVxuICByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbiAgaWYgKHR5cGVvZiBob3N0SXNUYWJiYWJsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIGhvc3RJc1RhYmJhYmxlLmNhbGwoY29tcG9uZW50KSA/IFwiMFwiIDogXCItMVwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gdHJ1ZSkge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gIH1cbiAgZWxzZSBpZiAoaG9zdElzVGFiYmFibGUgPT09IGZhbHNlKSB7XG4gICAgY29tcG9uZW50LmVsLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xuICB9XG4gIGVsc2UgO1xuICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiKTtcbn1cbmZ1bmN0aW9uIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5lbC5jbGljayA9IGludGVyY2VwdGVkQ2xpY2s7XG4gIGFkZEludGVyYWN0aW9uTGlzdGVuZXJzKGlzRmlyZWZveCA/IGdldFBhcmVudEVsZW1lbnQoY29tcG9uZW50KSA6IGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiBhZGRJbnRlcmFjdGlvbkxpc3RlbmVycyhlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIC8vIHRoaXMgcGF0aCBpcyBvbmx5IGFwcGxpY2FibGUgdG8gRmlyZWZveFxuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50LCBjYXB0dXJlT25seU9wdGlvbnMpKTtcbn1cbmZ1bmN0aW9uIGdldFBhcmVudEVsZW1lbnQoY29tcG9uZW50KSB7XG4gIHJldHVybiBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpIHtcbiAgZGVsZXRlIGNvbXBvbmVudC5lbC5jbGljazsgLy8gZmFsbGJhY2sgb24gSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrXG4gIHJlbW92ZUludGVyYWN0aW9uTGlzdGVuZXJzKGlzRmlyZWZveCA/IGdldFBhcmVudEVsZW1lbnQoY29tcG9uZW50KSA6IGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiByZW1vdmVJbnRlcmFjdGlvbkxpc3RlbmVycyhlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIC8vIHRoaXMgcGF0aCBpcyBvbmx5IGFwcGxpY2FibGUgdG8gRmlyZWZveFxuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50LCBjYXB0dXJlT25seU9wdGlvbnMpKTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IGhlbHBzIGRpc2FibGUgY29tcG9uZW50cyBjb25zaXN0ZW50bHkgaW4gRmlyZWZveC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGNvbm5lY3RlZENhbGxiYWNrYCBhbmQgaXMgb25seSBuZWVkZWQgZm9yIEZpcmVmb3ggYXMgaXQgZG9lcyBub3QgY2FsbCBjYXB0dXJlIGV2ZW50IGxpc3RlbmVycyBiZWZvcmUgbm9uLWNhcHR1cmUgb25lcyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE3MzE1MDQpLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdEludGVyYWN0aXZlKGNvbXBvbmVudCkge1xuICBpZiAoIWNvbXBvbmVudC5kaXNhYmxlZCB8fCAhaXNGaXJlZm94KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHBhcmVudCA9IGNvbXBvbmVudC5lbC5wYXJlbnRFbGVtZW50IHx8IGNvbXBvbmVudC5lbDsgLyogYXNzdW1lIGVsZW1lbnQgaXMgaG9zdCBpZiBpdCBoYXMgbm8gcGFyZW50IHdoZW4gY29ubmVjdGVkICovXG4gIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LnNldChjb21wb25lbnQuZWwsIHBhcmVudCk7XG4gIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHJlc3RvcmVzIGludGVyYWN0aXZpdHkgdG8gZGlzYWJsZWQgY29tcG9uZW50cyBjb25zaXN0ZW50bHkgaW4gRmlyZWZveC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrYCBhbmQgaXMgb25seSBuZWVkZWQgZm9yIEZpcmVmb3ggYXMgaXQgZG9lcyBub3QgY2FsbCBjYXB0dXJlIGV2ZW50IGxpc3RlbmVycyBiZWZvcmUgbm9uLWNhcHR1cmUgb25lcyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE3MzE1MDQpLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdEludGVyYWN0aXZlKGNvbXBvbmVudCkge1xuICBpZiAoIWlzRmlyZWZveCkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBhbHdheXMgcmVtb3ZlIG9uIGRpc2Nvbm5lY3QgYXMgcmVuZGVyIG9yIGNvbm5lY3Qgd2lsbCByZXN0b3JlIGl0XG4gIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmRlbGV0ZShjb21wb25lbnQuZWwpO1xuICByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdEludGVyYWN0aXZlIGFzIGMsIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSBhcyBkLCBnZXRVc2VyQWdlbnRTdHJpbmcgYXMgZywgdXBkYXRlSG9zdEludGVyYWN0aW9uIGFzIHUgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IEJ1aWxkIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG4vKipcbiAqIFRoaXMgdXRpbGl0eSBlbnN1cmVzIG9ic2VydmVycyBhcmUgY3JlYXRlZCBvbmx5IGZvciBicm93c2VyIGNvbnRleHRzLlxuICpcbiAqIEBwYXJhbSB0eXBlIC0gdGhlIHR5cGUgb2Ygb2JzZXJ2ZXIgdG8gY3JlYXRlXG4gKiBAcGFyYW0gY2FsbGJhY2sgLSB0aGUgb2JzZXJ2ZXIgY2FsbGJhY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gdGhlIG9ic2VydmVyIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGNvbnN0IE9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIodHlwZSk7XG4gIHJldHVybiBuZXcgT2JzZXJ2ZXIoY2FsbGJhY2ssIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIodHlwZSkge1xuICAvLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2RvbS9pc3N1ZXMvMTI2I2lzc3VlY29tbWVudC0xMDQ5ODE0OTQ4XG4gIGNsYXNzIEV4dGVuZGVkTXV0YXRpb25PYnNlcnZlciBleHRlbmRzIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjaykge1xuICAgICAgc3VwZXIoY2FsbGJhY2spO1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5ID0gW107XG4gICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuICAgIG9ic2VydmUodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkucHVzaCh7IHRhcmdldCwgb3B0aW9ucyB9KTtcbiAgICAgIHJldHVybiBzdXBlci5vYnNlcnZlKHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHVub2JzZXJ2ZSh0YXJnZXQpIHtcbiAgICAgIGNvbnN0IG5ld09ic2VydmVkRW50cmllcyA9IHRoaXMub2JzZXJ2ZWRFbnRyeS5maWx0ZXIoKG9ic2VydmVkKSA9PiBvYnNlcnZlZC50YXJnZXQgIT09IHRhcmdldCk7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkgPSBbXTtcbiAgICAgIHRoaXMuY2FsbGJhY2soc3VwZXIudGFrZVJlY29yZHMoKSwgdGhpcyk7XG4gICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAgIG5ld09ic2VydmVkRW50cmllcy5mb3JFYWNoKChvYnNlcnZlZCkgPT4gdGhpcy5vYnNlcnZlKG9ic2VydmVkLnRhcmdldCwgb2JzZXJ2ZWQub3B0aW9ucykpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHR5cGUgPT09IFwiaW50ZXJzZWN0aW9uXCJcbiAgICAgID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyXG4gICAgICA6IHR5cGUgPT09IFwibXV0YXRpb25cIlxuICAgICAgICA/IEV4dGVuZGVkTXV0YXRpb25PYnNlcnZlclxuICAgICAgICA6IHdpbmRvdy5SZXNpemVPYnNlcnZlcik7XG4gIH0pKCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU9ic2VydmVyIGFzIGMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==