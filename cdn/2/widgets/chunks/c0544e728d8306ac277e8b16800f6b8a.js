"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-radio-button_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/array.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/array.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getRoundRobinIndex)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
function getRoundRobinIndex(index, total) {
  return (index + total) % total;
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-radio-button.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-radio-button.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteRadioButton: () => (/* binding */ CalciteRadioButton),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./node_modules/@esri/calcite-components/dist/components/array.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.js */ "./node_modules/@esri/calcite-components/dist/components/form.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _label2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./label2.js */ "./node_modules/@esri/calcite-components/dist/components/label2.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */









const CSS = {
  container: "container",
};

const radioButtonCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;cursor:pointer}:host .container{position:relative;outline:2px solid transparent;outline-offset:2px}:host .radio{cursor:pointer;border-radius:9999px;background-color:var(--calcite-ui-foreground-1);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([hovered]) .radio,:host(:not([checked])[focused]:not([disabled])) .radio{box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([focused]) .radio{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([disabled]) .radio{cursor:default;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hovered][disabled]) .radio{box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([scale=s]){--calcite-radio-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-radio-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-radio-size:var(--calcite-font-size-0)}.radio{block-size:var(--calcite-radio-size);max-inline-size:var(--calcite-radio-size);min-inline-size:var(--calcite-radio-size)}:host([scale=s][checked]) .radio,:host([hovered][scale=s][checked][disabled]) .radio{box-shadow:inset 0 0 0 4px var(--calcite-ui-brand)}:host([scale=s][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 4px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}:host([scale=m][checked]) .radio,:host([hovered][scale=m][checked][disabled]) .radio{box-shadow:inset 0 0 0 5px var(--calcite-ui-brand)}:host([scale=m][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 5px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}:host([scale=l][checked]) .radio,:host([hovered][scale=l][checked][disabled]) .radio{box-shadow:inset 0 0 0 6px var(--calcite-ui-brand)}:host([scale=l][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 6px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}@media (forced-colors: active){:host([checked]) .radio::after,:host([checked][disabled]) .radio::after{content:\"\";inline-size:var(--calcite-radio-size);block-size:var(--calcite-radio-size);background-color:windowText;display:block}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";

const RadioButton = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalRadioButtonBlur = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.createEvent)(this, "calciteInternalRadioButtonBlur", 6);
    this.calciteRadioButtonChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.createEvent)(this, "calciteRadioButtonChange", 6);
    this.calciteInternalRadioButtonCheckedChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.createEvent)(this, "calciteInternalRadioButtonCheckedChange", 6);
    this.calciteInternalRadioButtonFocus = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.createEvent)(this, "calciteInternalRadioButtonFocus", 6);
    this.selectItem = (items, selectedIndex) => {
      items[selectedIndex].click();
    };
    this.queryButtons = () => {
      return Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden])")).filter((radioButton) => radioButton.name === this.name);
    };
    this.isFocusable = () => {
      const radioButtons = this.queryButtons();
      const firstFocusable = radioButtons.find((radioButton) => !radioButton.disabled);
      const checked = radioButtons.find((radioButton) => radioButton.checked);
      return firstFocusable === this.el && !checked;
    };
    this.check = () => {
      if (this.disabled) {
        return;
      }
      this.focused = true;
      this.setFocus();
      if (this.checked) {
        return;
      }
      this.uncheckAllRadioButtonsInGroup();
      this.checked = true;
      this.calciteRadioButtonChange.emit();
    };
    this.clickHandler = () => {
      if (this.disabled) {
        return;
      }
      this.check();
    };
    this.setContainerEl = (el) => {
      this.containerEl = el;
    };
    this.handleKeyDown = (event) => {
      const keys = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", " "];
      const { key } = event;
      const { el } = this;
      if (keys.indexOf(key) === -1) {
        return;
      }
      if (key === " ") {
        this.check();
        event.preventDefault();
        return;
      }
      let adjustedKey = key;
      if ((0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.b)(el) === "rtl") {
        if (key === "ArrowRight") {
          adjustedKey = "ArrowLeft";
        }
        if (key === "ArrowLeft") {
          adjustedKey = "ArrowRight";
        }
      }
      const radioButtons = Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden]")).filter((radioButton) => radioButton.name === this.name);
      let currentIndex = 0;
      const radioButtonsLength = radioButtons.length;
      radioButtons.some((item, index) => {
        if (item.checked) {
          currentIndex = index;
          return true;
        }
      });
      switch (adjustedKey) {
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault();
          this.selectItem(radioButtons, (0,_array_js__WEBPACK_IMPORTED_MODULE_0__.g)(Math.max(currentIndex - 1, -1), radioButtonsLength));
          return;
        case "ArrowRight":
        case "ArrowDown":
          event.preventDefault();
          this.selectItem(radioButtons, (0,_array_js__WEBPACK_IMPORTED_MODULE_0__.g)(currentIndex + 1, radioButtonsLength));
          return;
        default:
          return;
      }
    };
    this.onContainerBlur = () => {
      this.focused = false;
      this.calciteInternalRadioButtonBlur.emit();
    };
    this.onContainerFocus = () => {
      if (!this.disabled) {
        this.focused = true;
        this.calciteInternalRadioButtonFocus.emit();
      }
    };
    this.checked = false;
    this.disabled = false;
    this.focused = false;
    this.form = undefined;
    this.guid = undefined;
    this.hidden = false;
    this.hovered = false;
    this.label = undefined;
    this.name = undefined;
    this.required = false;
    this.scale = "m";
    this.value = undefined;
  }
  checkedChanged(newChecked) {
    if (newChecked) {
      this.uncheckOtherRadioButtonsInGroup();
    }
    this.calciteInternalRadioButtonCheckedChange.emit();
  }
  disabledChanged() {
    this.updateTabIndexOfOtherRadioButtonsInGroup();
  }
  hiddenChanged() {
    this.updateTabIndexOfOtherRadioButtonsInGroup();
  }
  nameChanged() {
    this.checkLastRadioButton();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    if (!this.disabled) {
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.k)(this.containerEl);
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  syncHiddenFormInput(input) {
    input.type = "radio";
  }
  onLabelClick(event) {
    if (this.disabled || this.hidden) {
      return;
    }
    const label = event.currentTarget;
    const radioButton = label.for
      ? this.rootNode.querySelector(`calcite-radio-button[id="${label.for}"]`)
      : label.querySelector(`calcite-radio-button[name="${this.name}"]`);
    if (!radioButton) {
      return;
    }
    radioButton.focused = true;
    this.setFocus();
    if (radioButton.checked) {
      return;
    }
    this.uncheckOtherRadioButtonsInGroup();
    radioButton.checked = true;
    this.calciteRadioButtonChange.emit();
  }
  checkLastRadioButton() {
    const radioButtons = this.queryButtons();
    const checkedRadioButtons = radioButtons.filter((radioButton) => radioButton.checked);
    if (checkedRadioButtons?.length > 1) {
      const lastCheckedRadioButton = checkedRadioButtons[checkedRadioButtons.length - 1];
      checkedRadioButtons
        .filter((checkedRadioButton) => checkedRadioButton !== lastCheckedRadioButton)
        .forEach((checkedRadioButton) => {
        checkedRadioButton.checked = false;
        checkedRadioButton.emitCheckedChange();
      });
    }
  }
  /** @internal */
  async emitCheckedChange() {
    this.calciteInternalRadioButtonCheckedChange.emit();
  }
  uncheckAllRadioButtonsInGroup() {
    const radioButtons = this.queryButtons();
    radioButtons.forEach((radioButton) => {
      if (radioButton.checked) {
        radioButton.checked = false;
        radioButton.focused = false;
      }
    });
  }
  uncheckOtherRadioButtonsInGroup() {
    const radioButtons = this.queryButtons();
    const otherRadioButtons = radioButtons.filter((radioButton) => radioButton.guid !== this.guid);
    otherRadioButtons.forEach((otherRadioButton) => {
      if (otherRadioButton.checked) {
        otherRadioButton.checked = false;
        otherRadioButton.focused = false;
      }
    });
  }
  updateTabIndexOfOtherRadioButtonsInGroup() {
    const radioButtons = this.queryButtons();
    const otherFocusableRadioButtons = radioButtons.filter((radioButton) => radioButton.guid !== this.guid && !radioButton.disabled);
    otherFocusableRadioButtons.forEach((radioButton) => {
      (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.forceUpdate)(radioButton);
    });
  }
  getTabIndex() {
    if (this.disabled) {
      return undefined;
    }
    return this.checked || this.isFocusable() ? 0 : -1;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  pointerEnterHandler() {
    if (this.disabled) {
      return;
    }
    this.hovered = true;
  }
  pointerLeaveHandler() {
    if (this.disabled) {
      return;
    }
    this.hovered = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.rootNode = this.el.getRootNode();
    this.guid = this.el.id || `calcite-radio-button-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_3__.g)()}`;
    if (this.name) {
      this.checkLastRadioButton();
    }
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.updateTabIndexOfOtherRadioButtonsInGroup();
  }
  componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_6__.a)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
    if (this.focused && !this.disabled) {
      this.setFocus();
    }
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    this.updateTabIndexOfOtherRadioButtonsInGroup();
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_4__.u)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const tabIndex = this.getTabIndex();
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.Host, { onClick: this.clickHandler, onKeyDown: this.handleKeyDown }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", { "aria-checked": (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.t)(this.checked), "aria-label": (0,_label2_js__WEBPACK_IMPORTED_MODULE_5__.g)(this), class: CSS.container, onBlur: this.onContainerBlur, onFocus: this.onContainerFocus, role: "radio", tabIndex: tabIndex,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setContainerEl }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", { class: "radio" })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)(_form_js__WEBPACK_IMPORTED_MODULE_2__.H, { component: this })));
  }
  get el() { return this; }
  static get watchers() { return {
    "checked": ["checkedChanged"],
    "disabled": ["disabledChanged"],
    "hidden": ["hiddenChanged"],
    "name": ["nameChanged"]
  }; }
  static get style() { return radioButtonCss; }
}, [1, "calcite-radio-button", {
    "checked": [1540],
    "disabled": [516],
    "focused": [1540],
    "form": [513],
    "guid": [1537],
    "hidden": [516],
    "hovered": [1540],
    "label": [1],
    "name": [513],
    "required": [516],
    "scale": [513],
    "value": [1032],
    "setFocus": [64],
    "emitCheckedChange": [64]
  }, [[1, "pointerenter", "pointerEnterHandler"], [1, "pointerleave", "pointerLeaveHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-radio-button"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-radio-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RadioButton);
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteRadioButton = RadioButton;
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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYzA1NDRlNzI4ZDgzMDZhYzI3N2U4YjE2ODAwZjZiOGEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0SDtBQUN2RTtBQUNnQztBQUNPO0FBQ3REO0FBQzZFO0FBQzFCO0FBQ3FCOztBQUU5RztBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGNBQWMsZUFBZSxpQkFBaUIsa0JBQWtCLDhCQUE4QixtQkFBbUIsYUFBYSxlQUFlLHFCQUFxQixnREFBZ0QsMEJBQTBCLDZGQUE2RiwwREFBMEQsK0VBQStFLG1EQUFtRCx3QkFBd0IseUVBQXlFLG9QQUFvUCx5QkFBeUIsZUFBZSwyQ0FBMkMseUdBQXlHLFVBQVUsa0NBQWtDLDBEQUEwRCxpQkFBaUIsaURBQWlELGlCQUFpQixpREFBaUQsaUJBQWlCLGdEQUFnRCxPQUFPLHFDQUFxQywwQ0FBMEMsMENBQTBDLHFGQUFxRixtREFBbUQsMERBQTBELDZGQUE2RixxRkFBcUYsbURBQW1ELDBEQUEwRCw2RkFBNkYscUZBQXFGLG1EQUFtRCwwREFBMEQsNkZBQTZGLCtCQUErQix3RUFBd0UsYUFBYSxzQ0FBc0MscUNBQXFDLDRCQUE0QixlQUFlLHlDQUF5QyxvQkFBb0IscUJBQXFCLHdCQUF3QixxQkFBcUIsNkJBQTZCLG1CQUFtQiwwQkFBMEIsbUNBQW1DLHNCQUFzQixnQkFBZ0IsYUFBYSxTQUFTLGFBQWE7O0FBRXhoRyxrQ0FBa0MsMEZBQWtCLGVBQWUsK0VBQVc7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsbUZBQVc7QUFDckQsb0NBQW9DLG1GQUFXO0FBQy9DLG1EQUFtRCxtRkFBVztBQUM5RCwyQ0FBMkMsbUZBQVc7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9hcnJheS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS1yYWRpby1idXR0b24uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2ludGVyYWN0aXZlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9sYWJlbDIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuZnVuY3Rpb24gZ2V0Um91bmRSb2JpbkluZGV4KGluZGV4LCB0b3RhbCkge1xuICByZXR1cm4gKGluZGV4ICsgdG90YWwpICUgdG90YWw7XG59XG5cbmV4cG9ydCB7IGdldFJvdW5kUm9iaW5JbmRleCBhcyBnIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgZm9yY2VVcGRhdGUsIGgsIEhvc3QgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFJvdW5kUm9iaW5JbmRleCB9IGZyb20gJy4vYXJyYXkuanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRFbGVtZW50RGlyLCBrIGFzIGZvY3VzRWxlbWVudCwgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Rm9ybSwgZCBhcyBkaXNjb25uZWN0Rm9ybSwgSCBhcyBIaWRkZW5Gb3JtSW5wdXRTbG90IH0gZnJvbSAnLi9mb3JtLmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMYWJlbCwgZCBhcyBkaXNjb25uZWN0TGFiZWwsIGcgYXMgZ2V0TGFiZWxUZXh0IH0gZnJvbSAnLi9sYWJlbDIuanMnO1xuaW1wb3J0IHsgYyBhcyBjb21wb25lbnRGb2N1c2FibGUsIGEgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgcyBhcyBzZXRDb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG59O1xuXG5jb25zdCByYWRpb0J1dHRvbkNzcyA9IFwiOmhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7ZGlzcGxheTpibG9jaztjdXJzb3I6cG9pbnRlcn06aG9zdCAuY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweH06aG9zdCAucmFkaW97Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLXJhZGl1czo5OTk5cHg7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudDt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwcztib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCl9Omhvc3QoW2hvdmVyZWRdKSAucmFkaW8sOmhvc3QoOm5vdChbY2hlY2tlZF0pW2ZvY3VzZWRdOm5vdChbZGlzYWJsZWRdKSkgLnJhZGlve2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFtmb2N1c2VkXSkgLnJhZGlve291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIDJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfTpob3N0KFtkaXNhYmxlZF0pIC5yYWRpb3tjdXJzb3I6ZGVmYXVsdDtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfTpob3N0KFtob3ZlcmVkXVtkaXNhYmxlZF0pIC5yYWRpb3tib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCl9Omhvc3QoW3NjYWxlPXNdKXstLWNhbGNpdGUtcmFkaW8tc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMil9Omhvc3QoW3NjYWxlPW1dKXstLWNhbGNpdGUtcmFkaW8tc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSl9Omhvc3QoW3NjYWxlPWxdKXstLWNhbGNpdGUtcmFkaW8tc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKX0ucmFkaW97YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLXJhZGlvLXNpemUpO21heC1pbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLXJhZGlvLXNpemUpO21pbi1pbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLXJhZGlvLXNpemUpfTpob3N0KFtzY2FsZT1zXVtjaGVja2VkXSkgLnJhZGlvLDpob3N0KFtob3ZlcmVkXVtzY2FsZT1zXVtjaGVja2VkXVtkaXNhYmxlZF0pIC5yYWRpb3tib3gtc2hhZG93Omluc2V0IDAgMCAwIDRweCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChbc2NhbGU9c11bZm9jdXNlZF1bY2hlY2tlZF06bm90KFtkaXNhYmxlZF0pKSAucmFkaW97Ym94LXNoYWRvdzppbnNldCAwIDAgMCA0cHggdmFyKC0tY2FsY2l0ZS11aS1icmFuZCksIDAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW3NjYWxlPW1dW2NoZWNrZWRdKSAucmFkaW8sOmhvc3QoW2hvdmVyZWRdW3NjYWxlPW1dW2NoZWNrZWRdW2Rpc2FibGVkXSkgLnJhZGlve2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgNXB4IHZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFtzY2FsZT1tXVtmb2N1c2VkXVtjaGVja2VkXTpub3QoW2Rpc2FibGVkXSkpIC5yYWRpb3tib3gtc2hhZG93Omluc2V0IDAgMCAwIDVweCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSwgMCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbc2NhbGU9bF1bY2hlY2tlZF0pIC5yYWRpbyw6aG9zdChbaG92ZXJlZF1bc2NhbGU9bF1bY2hlY2tlZF1bZGlzYWJsZWRdKSAucmFkaW97Ym94LXNoYWRvdzppbnNldCAwIDAgMCA2cHggdmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoW3NjYWxlPWxdW2ZvY3VzZWRdW2NoZWNrZWRdOm5vdChbZGlzYWJsZWRdKSkgLnJhZGlve2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgNnB4IHZhcigtLWNhbGNpdGUtdWktYnJhbmQpLCAwIDAgMCAycHggdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfUBtZWRpYSAoZm9yY2VkLWNvbG9yczogYWN0aXZlKXs6aG9zdChbY2hlY2tlZF0pIC5yYWRpbzo6YWZ0ZXIsOmhvc3QoW2NoZWNrZWRdW2Rpc2FibGVkXSkgLnJhZGlvOjphZnRlcntjb250ZW50OlxcXCJcXFwiO2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtcmFkaW8tc2l6ZSk7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLXJhZGlvLXNpemUpO2JhY2tncm91bmQtY29sb3I6d2luZG93VGV4dDtkaXNwbGF5OmJsb2NrfX06OnNsb3R0ZWQoaW5wdXRbc2xvdD1oaWRkZW4tZm9ybS1pbnB1dF0pe21hcmdpbjowICFpbXBvcnRhbnQ7b3BhY2l0eTowICFpbXBvcnRhbnQ7b3V0bGluZTpub25lICFpbXBvcnRhbnQ7cGFkZGluZzowICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtpbnNldDowICFpbXBvcnRhbnQ7dHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZSAhaW1wb3J0YW50O3otaW5kZXg6LTEgIWltcG9ydGFudH06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgUmFkaW9CdXR0b24gPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsUmFkaW9CdXR0b25CbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxSYWRpb0J1dHRvbkJsdXJcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlUmFkaW9CdXR0b25DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVSYWRpb0J1dHRvbkNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFJhZGlvQnV0dG9uQ2hlY2tlZENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsUmFkaW9CdXR0b25DaGVja2VkQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsUmFkaW9CdXR0b25Gb2N1cyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsUmFkaW9CdXR0b25Gb2N1c1wiLCA2KTtcbiAgICB0aGlzLnNlbGVjdEl0ZW0gPSAoaXRlbXMsIHNlbGVjdGVkSW5kZXgpID0+IHtcbiAgICAgIGl0ZW1zW3NlbGVjdGVkSW5kZXhdLmNsaWNrKCk7XG4gICAgfTtcbiAgICB0aGlzLnF1ZXJ5QnV0dG9ucyA9ICgpID0+IHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtcmFkaW8tYnV0dG9uOm5vdChbaGlkZGVuXSlcIikpLmZpbHRlcigocmFkaW9CdXR0b24pID0+IHJhZGlvQnV0dG9uLm5hbWUgPT09IHRoaXMubmFtZSk7XG4gICAgfTtcbiAgICB0aGlzLmlzRm9jdXNhYmxlID0gKCkgPT4ge1xuICAgICAgY29uc3QgcmFkaW9CdXR0b25zID0gdGhpcy5xdWVyeUJ1dHRvbnMoKTtcbiAgICAgIGNvbnN0IGZpcnN0Rm9jdXNhYmxlID0gcmFkaW9CdXR0b25zLmZpbmQoKHJhZGlvQnV0dG9uKSA9PiAhcmFkaW9CdXR0b24uZGlzYWJsZWQpO1xuICAgICAgY29uc3QgY2hlY2tlZCA9IHJhZGlvQnV0dG9ucy5maW5kKChyYWRpb0J1dHRvbikgPT4gcmFkaW9CdXR0b24uY2hlY2tlZCk7XG4gICAgICByZXR1cm4gZmlyc3RGb2N1c2FibGUgPT09IHRoaXMuZWwgJiYgIWNoZWNrZWQ7XG4gICAgfTtcbiAgICB0aGlzLmNoZWNrID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy51bmNoZWNrQWxsUmFkaW9CdXR0b25zSW5Hcm91cCgpO1xuICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2FsY2l0ZVJhZGlvQnV0dG9uQ2hhbmdlLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGVjaygpO1xuICAgIH07XG4gICAgdGhpcy5zZXRDb250YWluZXJFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXJFbCA9IGVsO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBrZXlzID0gW1wiQXJyb3dMZWZ0XCIsIFwiQXJyb3dVcFwiLCBcIkFycm93UmlnaHRcIiwgXCJBcnJvd0Rvd25cIiwgXCIgXCJdO1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICAgIGlmIChrZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgdGhpcy5jaGVjaygpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgYWRqdXN0ZWRLZXkgPSBrZXk7XG4gICAgICBpZiAoZ2V0RWxlbWVudERpcihlbCkgPT09IFwicnRsXCIpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICBhZGp1c3RlZEtleSA9IFwiQXJyb3dMZWZ0XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICAgIGFkanVzdGVkS2V5ID0gXCJBcnJvd1JpZ2h0XCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IEFycmF5LmZyb20odGhpcy5yb290Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS1yYWRpby1idXR0b246bm90KFtoaWRkZW5dXCIpKS5maWx0ZXIoKHJhZGlvQnV0dG9uKSA9PiByYWRpb0J1dHRvbi5uYW1lID09PSB0aGlzLm5hbWUpO1xuICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gICAgICBjb25zdCByYWRpb0J1dHRvbnNMZW5ndGggPSByYWRpb0J1dHRvbnMubGVuZ3RoO1xuICAgICAgcmFkaW9CdXR0b25zLnNvbWUoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcbiAgICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzd2l0Y2ggKGFkanVzdGVkS2V5KSB7XG4gICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbShyYWRpb0J1dHRvbnMsIGdldFJvdW5kUm9iaW5JbmRleChNYXRoLm1heChjdXJyZW50SW5kZXggLSAxLCAtMSksIHJhZGlvQnV0dG9uc0xlbmd0aCkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5zZWxlY3RJdGVtKHJhZGlvQnV0dG9ucywgZ2V0Um91bmRSb2JpbkluZGV4KGN1cnJlbnRJbmRleCArIDEsIHJhZGlvQnV0dG9uc0xlbmd0aCkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9uQ29udGFpbmVyQmx1ciA9ICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxSYWRpb0J1dHRvbkJsdXIuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5vbkNvbnRhaW5lckZvY3VzID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsUmFkaW9CdXR0b25Gb2N1cy5lbWl0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5mb3JtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZ3VpZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xuICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVxdWlyZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICBjaGVja2VkQ2hhbmdlZChuZXdDaGVja2VkKSB7XG4gICAgaWYgKG5ld0NoZWNrZWQpIHtcbiAgICAgIHRoaXMudW5jaGVja090aGVyUmFkaW9CdXR0b25zSW5Hcm91cCgpO1xuICAgIH1cbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFJhZGlvQnV0dG9uQ2hlY2tlZENoYW5nZS5lbWl0KCk7XG4gIH1cbiAgZGlzYWJsZWRDaGFuZ2VkKCkge1xuICAgIHRoaXMudXBkYXRlVGFiSW5kZXhPZk90aGVyUmFkaW9CdXR0b25zSW5Hcm91cCgpO1xuICB9XG4gIGhpZGRlbkNoYW5nZWQoKSB7XG4gICAgdGhpcy51cGRhdGVUYWJJbmRleE9mT3RoZXJSYWRpb0J1dHRvbnNJbkdyb3VwKCk7XG4gIH1cbiAgbmFtZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5jaGVja0xhc3RSYWRpb0J1dHRvbigpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgZm9jdXNFbGVtZW50KHRoaXMuY29udGFpbmVyRWwpO1xuICAgIH1cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzeW5jSGlkZGVuRm9ybUlucHV0KGlucHV0KSB7XG4gICAgaW5wdXQudHlwZSA9IFwicmFkaW9cIjtcbiAgfVxuICBvbkxhYmVsQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmhpZGRlbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsYWJlbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgY29uc3QgcmFkaW9CdXR0b24gPSBsYWJlbC5mb3JcbiAgICAgID8gdGhpcy5yb290Tm9kZS5xdWVyeVNlbGVjdG9yKGBjYWxjaXRlLXJhZGlvLWJ1dHRvbltpZD1cIiR7bGFiZWwuZm9yfVwiXWApXG4gICAgICA6IGxhYmVsLnF1ZXJ5U2VsZWN0b3IoYGNhbGNpdGUtcmFkaW8tYnV0dG9uW25hbWU9XCIke3RoaXMubmFtZX1cIl1gKTtcbiAgICBpZiAoIXJhZGlvQnV0dG9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJhZGlvQnV0dG9uLmZvY3VzZWQgPSB0cnVlO1xuICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICBpZiAocmFkaW9CdXR0b24uY2hlY2tlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVuY2hlY2tPdGhlclJhZGlvQnV0dG9uc0luR3JvdXAoKTtcbiAgICByYWRpb0J1dHRvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLmNhbGNpdGVSYWRpb0J1dHRvbkNoYW5nZS5lbWl0KCk7XG4gIH1cbiAgY2hlY2tMYXN0UmFkaW9CdXR0b24oKSB7XG4gICAgY29uc3QgcmFkaW9CdXR0b25zID0gdGhpcy5xdWVyeUJ1dHRvbnMoKTtcbiAgICBjb25zdCBjaGVja2VkUmFkaW9CdXR0b25zID0gcmFkaW9CdXR0b25zLmZpbHRlcigocmFkaW9CdXR0b24pID0+IHJhZGlvQnV0dG9uLmNoZWNrZWQpO1xuICAgIGlmIChjaGVja2VkUmFkaW9CdXR0b25zPy5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBsYXN0Q2hlY2tlZFJhZGlvQnV0dG9uID0gY2hlY2tlZFJhZGlvQnV0dG9uc1tjaGVja2VkUmFkaW9CdXR0b25zLmxlbmd0aCAtIDFdO1xuICAgICAgY2hlY2tlZFJhZGlvQnV0dG9uc1xuICAgICAgICAuZmlsdGVyKChjaGVja2VkUmFkaW9CdXR0b24pID0+IGNoZWNrZWRSYWRpb0J1dHRvbiAhPT0gbGFzdENoZWNrZWRSYWRpb0J1dHRvbilcbiAgICAgICAgLmZvckVhY2goKGNoZWNrZWRSYWRpb0J1dHRvbikgPT4ge1xuICAgICAgICBjaGVja2VkUmFkaW9CdXR0b24uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja2VkUmFkaW9CdXR0b24uZW1pdENoZWNrZWRDaGFuZ2UoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKiogQGludGVybmFsICovXG4gIGFzeW5jIGVtaXRDaGVja2VkQ2hhbmdlKCkge1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsUmFkaW9CdXR0b25DaGVja2VkQ2hhbmdlLmVtaXQoKTtcbiAgfVxuICB1bmNoZWNrQWxsUmFkaW9CdXR0b25zSW5Hcm91cCgpIHtcbiAgICBjb25zdCByYWRpb0J1dHRvbnMgPSB0aGlzLnF1ZXJ5QnV0dG9ucygpO1xuICAgIHJhZGlvQnV0dG9ucy5mb3JFYWNoKChyYWRpb0J1dHRvbikgPT4ge1xuICAgICAgaWYgKHJhZGlvQnV0dG9uLmNoZWNrZWQpIHtcbiAgICAgICAgcmFkaW9CdXR0b24uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICByYWRpb0J1dHRvbi5mb2N1c2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgdW5jaGVja090aGVyUmFkaW9CdXR0b25zSW5Hcm91cCgpIHtcbiAgICBjb25zdCByYWRpb0J1dHRvbnMgPSB0aGlzLnF1ZXJ5QnV0dG9ucygpO1xuICAgIGNvbnN0IG90aGVyUmFkaW9CdXR0b25zID0gcmFkaW9CdXR0b25zLmZpbHRlcigocmFkaW9CdXR0b24pID0+IHJhZGlvQnV0dG9uLmd1aWQgIT09IHRoaXMuZ3VpZCk7XG4gICAgb3RoZXJSYWRpb0J1dHRvbnMuZm9yRWFjaCgob3RoZXJSYWRpb0J1dHRvbikgPT4ge1xuICAgICAgaWYgKG90aGVyUmFkaW9CdXR0b24uY2hlY2tlZCkge1xuICAgICAgICBvdGhlclJhZGlvQnV0dG9uLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgb3RoZXJSYWRpb0J1dHRvbi5mb2N1c2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgdXBkYXRlVGFiSW5kZXhPZk90aGVyUmFkaW9CdXR0b25zSW5Hcm91cCgpIHtcbiAgICBjb25zdCByYWRpb0J1dHRvbnMgPSB0aGlzLnF1ZXJ5QnV0dG9ucygpO1xuICAgIGNvbnN0IG90aGVyRm9jdXNhYmxlUmFkaW9CdXR0b25zID0gcmFkaW9CdXR0b25zLmZpbHRlcigocmFkaW9CdXR0b24pID0+IHJhZGlvQnV0dG9uLmd1aWQgIT09IHRoaXMuZ3VpZCAmJiAhcmFkaW9CdXR0b24uZGlzYWJsZWQpO1xuICAgIG90aGVyRm9jdXNhYmxlUmFkaW9CdXR0b25zLmZvckVhY2goKHJhZGlvQnV0dG9uKSA9PiB7XG4gICAgICBmb3JjZVVwZGF0ZShyYWRpb0J1dHRvbik7XG4gICAgfSk7XG4gIH1cbiAgZ2V0VGFiSW5kZXgoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNoZWNrZWQgfHwgdGhpcy5pc0ZvY3VzYWJsZSgpID8gMCA6IC0xO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHBvaW50ZXJFbnRlckhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5ob3ZlcmVkID0gdHJ1ZTtcbiAgfVxuICBwb2ludGVyTGVhdmVIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucm9vdE5vZGUgPSB0aGlzLmVsLmdldFJvb3ROb2RlKCk7XG4gICAgdGhpcy5ndWlkID0gdGhpcy5lbC5pZCB8fCBgY2FsY2l0ZS1yYWRpby1idXR0b24tJHtndWlkKCl9YDtcbiAgICBpZiAodGhpcy5uYW1lKSB7XG4gICAgICB0aGlzLmNoZWNrTGFzdFJhZGlvQnV0dG9uKCk7XG4gICAgfVxuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgY29ubmVjdEZvcm0odGhpcyk7XG4gICAgdGhpcy51cGRhdGVUYWJJbmRleE9mT3RoZXJSYWRpb0J1dHRvbnNJbkdyb3VwKCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICBpZiAodGhpcy5mb2N1c2VkICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgfVxuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBkaXNjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgZGlzY29ubmVjdEZvcm0odGhpcyk7XG4gICAgdGhpcy51cGRhdGVUYWJJbmRleE9mT3RoZXJSYWRpb0J1dHRvbnNJbkdyb3VwKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRhYkluZGV4ID0gdGhpcy5nZXRUYWJJbmRleCgpO1xuICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMuY2xpY2tIYW5kbGVyLCBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93biB9LCBoKFwiZGl2XCIsIHsgXCJhcmlhLWNoZWNrZWRcIjogdG9BcmlhQm9vbGVhbih0aGlzLmNoZWNrZWQpLCBcImFyaWEtbGFiZWxcIjogZ2V0TGFiZWxUZXh0KHRoaXMpLCBjbGFzczogQ1NTLmNvbnRhaW5lciwgb25CbHVyOiB0aGlzLm9uQ29udGFpbmVyQmx1ciwgb25Gb2N1czogdGhpcy5vbkNvbnRhaW5lckZvY3VzLCByb2xlOiBcInJhZGlvXCIsIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IHRoaXMuc2V0Q29udGFpbmVyRWwgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInJhZGlvXCIgfSkpLCBoKEhpZGRlbkZvcm1JbnB1dFNsb3QsIHsgY29tcG9uZW50OiB0aGlzIH0pKSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiY2hlY2tlZFwiOiBbXCJjaGVja2VkQ2hhbmdlZFwiXSxcbiAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkQ2hhbmdlZFwiXSxcbiAgICBcImhpZGRlblwiOiBbXCJoaWRkZW5DaGFuZ2VkXCJdLFxuICAgIFwibmFtZVwiOiBbXCJuYW1lQ2hhbmdlZFwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiByYWRpb0J1dHRvbkNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1yYWRpby1idXR0b25cIiwge1xuICAgIFwiY2hlY2tlZFwiOiBbMTU0MF0sXG4gICAgXCJkaXNhYmxlZFwiOiBbNTE2XSxcbiAgICBcImZvY3VzZWRcIjogWzE1NDBdLFxuICAgIFwiZm9ybVwiOiBbNTEzXSxcbiAgICBcImd1aWRcIjogWzE1MzddLFxuICAgIFwiaGlkZGVuXCI6IFs1MTZdLFxuICAgIFwiaG92ZXJlZFwiOiBbMTU0MF0sXG4gICAgXCJsYWJlbFwiOiBbMV0sXG4gICAgXCJuYW1lXCI6IFs1MTNdLFxuICAgIFwicmVxdWlyZWRcIjogWzUxNl0sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcInZhbHVlXCI6IFsxMDMyXSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF0sXG4gICAgXCJlbWl0Q2hlY2tlZENoYW5nZVwiOiBbNjRdXG4gIH0sIFtbMSwgXCJwb2ludGVyZW50ZXJcIiwgXCJwb2ludGVyRW50ZXJIYW5kbGVyXCJdLCBbMSwgXCJwb2ludGVybGVhdmVcIiwgXCJwb2ludGVyTGVhdmVIYW5kbGVyXCJdXV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXJhZGlvLWJ1dHRvblwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1yYWRpby1idXR0b25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBSYWRpb0J1dHRvbik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlUmFkaW9CdXR0b24gPSBSYWRpb0J1dHRvbjtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVSYWRpb0J1dHRvbiwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5cbmZ1bmN0aW9uIGdldFVzZXJBZ2VudERhdGEoKSB7XG4gIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50RGF0YTtcbn1cbmZ1bmN0aW9uIGdldFVzZXJBZ2VudFN0cmluZygpIHtcbiAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICBjb25zdCB1YURhdGEgPSBnZXRVc2VyQWdlbnREYXRhKCk7XG4gIHJldHVybiB1YURhdGE/LmJyYW5kc1xuICAgID8gdWFEYXRhLmJyYW5kcy5tYXAoKHsgYnJhbmQsIHZlcnNpb24gfSkgPT4gYCR7YnJhbmR9LyR7dmVyc2lvbn1gKS5qb2luKFwiIFwiKVxuICAgIDogbmF2aWdhdG9yLnVzZXJBZ2VudDtcbn1cblxuLy8g4pqg77iPIGJyb3dzZXItc25pZmZpbmcgaXMgbm90IGEgYmVzdCBwcmFjdGljZSBhbmQgc2hvdWxkIGJlIGF2b2lkZWQg4pqg77iPXG5jb25zdCBpc0ZpcmVmb3ggPSAvZmlyZWZveC9pLnRlc3QoZ2V0VXNlckFnZW50U3RyaW5nKCkpO1xuY29uc3QgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQgPSBpc0ZpcmVmb3hcbiAgPyBuZXcgV2Vha01hcCgpXG4gIDogbnVsbDtcbmZ1bmN0aW9uIGludGVyY2VwdGVkQ2xpY2soKSB7XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXM7XG4gIGlmICghZGlzYWJsZWQpIHtcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2suY2FsbCh0aGlzKTtcbiAgfVxufVxuZnVuY3Rpb24gb25Qb2ludGVyRG93bihldmVudCkge1xuICBjb25zdCBpbnRlcmFjdGl2ZUVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gIGlmIChpc0ZpcmVmb3ggJiYgIWludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChpbnRlcmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IGludGVyYWN0aXZlRWxlbWVudDtcbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgLy8gcHJldmVudCBjbGljayBmcm9tIG1vdmluZyBmb2N1cyBvbiBob3N0XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuY29uc3Qgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cyA9IFtcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJjbGlja1wiXTtcbmZ1bmN0aW9uIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50KGV2ZW50KSB7XG4gIGlmIChpc0ZpcmVmb3ggJiYgIWludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChldmVudC50YXJnZXQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IGV2ZW50LnRhcmdldDtcbiAgLy8gcHJldmVudCBkaXNhbGxvd2VkIG1vdXNlIGV2ZW50cyBmcm9tIGJlaW5nIGVtaXR0ZWQgb24gdGhlIGRpc2FibGVkIGhvc3QgKHBlciBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2h0bWwvaXNzdWVzLzU4ODYpXG4gIC8v4pqgIHdlIGdlbmVyYWxseSBhdm9pZCBzdG9wcGluZyBwcm9wYWdhdGlvbiBvZiBldmVudHMsIGJ1dCB0aGlzIGlzIG5lZWRlZCB0byBhZGhlcmUgdG8gdGhlIGludGVuZGVkIHNwZWMgY2hhbmdlcyBhYm92ZSDimqBcbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuY29uc3QgY2FwdHVyZU9ubHlPcHRpb25zID0geyBjYXB0dXJlOiB0cnVlIH07XG4vKipcbiAqIFRoaXMgaGVscGVyIHVwZGF0ZXMgdGhlIGhvc3QgZWxlbWVudCB0byBwcmV2ZW50IGtleWJvYXJkIGludGVyYWN0aW9uIG9uIGl0cyBzdWJ0cmVlIGFuZCBzZXRzIHRoZSBhcHByb3ByaWF0ZSBhcmlhIGF0dHJpYnV0ZSBmb3IgYWNjZXNzaWJpbGl0eS5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkUmVuZGVyYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiAqKk5vdGVzKipcbiAqXG4gKiB0aGlzIHV0aWwgaXMgbm90IG5lZWRlZCBmb3Igc2ltcGxlIGNvbXBvbmVudHMgd2hvc2Ugcm9vdCBlbGVtZW50IG9yIGVsZW1lbnRzIGFyZSBhbiBpbnRlcmFjdGl2ZSBjb21wb25lbnQgKGN1c3RvbSBlbGVtZW50IG9yIG5hdGl2ZSBjb250cm9sKS4gRm9yIHRob3NlIGNhc2VzLCBzZXQgdGhlIGBkaXNhYmxlZGAgcHJvcHMgb24gdGhlIHJvb3QgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogdGVjaG5pY2FsbHksIHVzZXJzIGNhbiBvdmVycmlkZSBgdGFiaW5kZXhgIGFuZCByZXN0b3JlIGtleWJvYXJkIG5hdmlnYXRpb24sIGJ1dCB0aGlzIHdpbGwgYmUgY29uc2lkZXJlZCB1c2VyIGVycm9yXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGhvc3RJc1RhYmJhYmxlIOKAkyB3aGVuIHNldCB0byB0cnVlIG9yIGl0cyBwcmVkaWNhdGUgcmV0dXJucyB0cnVlLCB0aGUgaG9zdCBpcyB0YWJiYWJsZSBhbmQgd2lsbCBiZSBtYW5hZ2VkIGJ5IHRoZSBoZWxwZXIuIFNldCB0byBcIm1hbmFnZWRcIiBmb3IgY2FzZXMgd2hlcmUgYSBjb21wb25lbnQncyBwYXJlbnQgZGV0ZXJtaW5lcyB3aGljaCBpdGVtIGlzIHRhYmJhYmxlIChpLmUuLCBzZXRzIGB0YWJpbmRleGAgdG8gYWxsb3cgdGFiYmluZykuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbihjb21wb25lbnQsIGhvc3RJc1RhYmJhYmxlID0gZmFsc2UpIHtcbiAgaWYgKGNvbXBvbmVudC5kaXNhYmxlZCkge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcbiAgICBpZiAoY29tcG9uZW50LmVsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gICAgYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpO1xuICAgIHJldHVybjtcbiAgfVxuICByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbiAgaWYgKHR5cGVvZiBob3N0SXNUYWJiYWJsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIGhvc3RJc1RhYmJhYmxlLmNhbGwoY29tcG9uZW50KSA/IFwiMFwiIDogXCItMVwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gdHJ1ZSkge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gIH1cbiAgZWxzZSBpZiAoaG9zdElzVGFiYmFibGUgPT09IGZhbHNlKSB7XG4gICAgY29tcG9uZW50LmVsLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xuICB9XG4gIGVsc2UgO1xuICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiKTtcbn1cbmZ1bmN0aW9uIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5lbC5jbGljayA9IGludGVyY2VwdGVkQ2xpY2s7XG4gIGFkZEludGVyYWN0aW9uTGlzdGVuZXJzKGlzRmlyZWZveCA/IGdldFBhcmVudEVsZW1lbnQoY29tcG9uZW50KSA6IGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiBhZGRJbnRlcmFjdGlvbkxpc3RlbmVycyhlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIC8vIHRoaXMgcGF0aCBpcyBvbmx5IGFwcGxpY2FibGUgdG8gRmlyZWZveFxuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50LCBjYXB0dXJlT25seU9wdGlvbnMpKTtcbn1cbmZ1bmN0aW9uIGdldFBhcmVudEVsZW1lbnQoY29tcG9uZW50KSB7XG4gIHJldHVybiBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpIHtcbiAgZGVsZXRlIGNvbXBvbmVudC5lbC5jbGljazsgLy8gZmFsbGJhY2sgb24gSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrXG4gIHJlbW92ZUludGVyYWN0aW9uTGlzdGVuZXJzKGlzRmlyZWZveCA/IGdldFBhcmVudEVsZW1lbnQoY29tcG9uZW50KSA6IGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiByZW1vdmVJbnRlcmFjdGlvbkxpc3RlbmVycyhlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIC8vIHRoaXMgcGF0aCBpcyBvbmx5IGFwcGxpY2FibGUgdG8gRmlyZWZveFxuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50LCBjYXB0dXJlT25seU9wdGlvbnMpKTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IGhlbHBzIGRpc2FibGUgY29tcG9uZW50cyBjb25zaXN0ZW50bHkgaW4gRmlyZWZveC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGNvbm5lY3RlZENhbGxiYWNrYCBhbmQgaXMgb25seSBuZWVkZWQgZm9yIEZpcmVmb3ggYXMgaXQgZG9lcyBub3QgY2FsbCBjYXB0dXJlIGV2ZW50IGxpc3RlbmVycyBiZWZvcmUgbm9uLWNhcHR1cmUgb25lcyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE3MzE1MDQpLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdEludGVyYWN0aXZlKGNvbXBvbmVudCkge1xuICBpZiAoIWNvbXBvbmVudC5kaXNhYmxlZCB8fCAhaXNGaXJlZm94KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHBhcmVudCA9IGNvbXBvbmVudC5lbC5wYXJlbnRFbGVtZW50IHx8IGNvbXBvbmVudC5lbDsgLyogYXNzdW1lIGVsZW1lbnQgaXMgaG9zdCBpZiBpdCBoYXMgbm8gcGFyZW50IHdoZW4gY29ubmVjdGVkICovXG4gIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LnNldChjb21wb25lbnQuZWwsIHBhcmVudCk7XG4gIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHJlc3RvcmVzIGludGVyYWN0aXZpdHkgdG8gZGlzYWJsZWQgY29tcG9uZW50cyBjb25zaXN0ZW50bHkgaW4gRmlyZWZveC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrYCBhbmQgaXMgb25seSBuZWVkZWQgZm9yIEZpcmVmb3ggYXMgaXQgZG9lcyBub3QgY2FsbCBjYXB0dXJlIGV2ZW50IGxpc3RlbmVycyBiZWZvcmUgbm9uLWNhcHR1cmUgb25lcyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE3MzE1MDQpLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdEludGVyYWN0aXZlKGNvbXBvbmVudCkge1xuICBpZiAoIWlzRmlyZWZveCkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBhbHdheXMgcmVtb3ZlIG9uIGRpc2Nvbm5lY3QgYXMgcmVuZGVyIG9yIGNvbm5lY3Qgd2lsbCByZXN0b3JlIGl0XG4gIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmRlbGV0ZShjb21wb25lbnQuZWwpO1xuICByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdEludGVyYWN0aXZlIGFzIGMsIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSBhcyBkLCBnZXRVc2VyQWdlbnRTdHJpbmcgYXMgZywgdXBkYXRlSG9zdEludGVyYWN0aW9uIGFzIHUgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHkgYXMgaXNCZWZvcmUsIHEgYXMgcXVlcnlFbGVtZW50Um9vdHMsIGMgYXMgY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5IH0gZnJvbSAnLi9kb20uanMnO1xuXG4vKipcbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHlcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgbGFiZWxDbGlja0V2ZW50ID0gXCJjYWxjaXRlSW50ZXJuYWxMYWJlbENsaWNrXCI7XG5jb25zdCBsYWJlbENvbm5lY3RlZEV2ZW50ID0gXCJjYWxjaXRlSW50ZXJuYWxMYWJlbENvbm5lY3RlZFwiO1xuY29uc3QgbGFiZWxEaXNjb25uZWN0ZWRFdmVudCA9IFwiY2FsY2l0ZUludGVybmFsTGFiZWxEaXNjb25uZWN0ZWRcIjtcbmNvbnN0IGxhYmVsVGFnTmFtZSA9IFwiY2FsY2l0ZS1sYWJlbFwiO1xuY29uc3QgbGFiZWxUb0xhYmVsYWJsZXMgPSBuZXcgV2Vha01hcCgpO1xuY29uc3Qgb25MYWJlbENsaWNrTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IG9uTGFiZWxDb25uZWN0ZWRNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3Qgb25MYWJlbERpc2Nvbm5lY3RlZE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB1bmxhYmVsZWRDb21wb25lbnRzID0gbmV3IFdlYWtTZXQoKTtcbmNvbnN0IGZpbmRMYWJlbEZvckNvbXBvbmVudCA9IChjb21wb25lbnRFbCkgPT4ge1xuICBjb25zdCB7IGlkIH0gPSBjb21wb25lbnRFbDtcbiAgY29uc3QgZm9yTGFiZWwgPSBpZCAmJiBxdWVyeUVsZW1lbnRSb290cyhjb21wb25lbnRFbCwgeyBzZWxlY3RvcjogYCR7bGFiZWxUYWdOYW1lfVtmb3I9XCIke2lkfVwiXWAgfSk7XG4gIGlmIChmb3JMYWJlbCkge1xuICAgIHJldHVybiBmb3JMYWJlbDtcbiAgfVxuICBjb25zdCBwYXJlbnRMYWJlbCA9IGNsb3Nlc3RFbGVtZW50Q3Jvc3NTaGFkb3dCb3VuZGFyeShjb21wb25lbnRFbCwgbGFiZWxUYWdOYW1lKTtcbiAgaWYgKCFwYXJlbnRMYWJlbCB8fFxuICAgIC8vIGxhYmVsYWJsZSBjb21wb25lbnRzIHdpdGhpbiBvdGhlciBjdXN0b20gZWxlbWVudHMgYXJlIG5vdCBjb25zaWRlcmVkIGxhYmVsYWJsZVxuICAgIGhhc0FuY2VzdG9yQ3VzdG9tRWxlbWVudHMocGFyZW50TGFiZWwsIGNvbXBvbmVudEVsKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBwYXJlbnRMYWJlbDtcbn07XG5mdW5jdGlvbiBoYXNBbmNlc3RvckN1c3RvbUVsZW1lbnRzKGxhYmVsLCBjb21wb25lbnRFbCkge1xuICBsZXQgdHJhdmVyc2VkRWxlbWVudHM7XG4gIGNvbnN0IGN1c3RvbUVsZW1lbnRBbmNlc3RvckNoZWNrRXZlbnRUeXBlID0gXCJjdXN0b20tZWxlbWVudC1hbmNlc3Rvci1jaGVja1wiO1xuICBjb25zdCBsaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgIHRyYXZlcnNlZEVsZW1lbnRzID0gY29tcG9zZWRQYXRoLnNsaWNlKGNvbXBvc2VkUGF0aC5pbmRleE9mKGNvbXBvbmVudEVsKSwgY29tcG9zZWRQYXRoLmluZGV4T2YobGFiZWwpKTtcbiAgfTtcbiAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihjdXN0b21FbGVtZW50QW5jZXN0b3JDaGVja0V2ZW50VHlwZSwgbGlzdGVuZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgY29tcG9uZW50RWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoY3VzdG9tRWxlbWVudEFuY2VzdG9yQ2hlY2tFdmVudFR5cGUsIHsgY29tcG9zZWQ6IHRydWUsIGJ1YmJsZXM6IHRydWUgfSkpO1xuICBsYWJlbC5yZW1vdmVFdmVudExpc3RlbmVyKGN1c3RvbUVsZW1lbnRBbmNlc3RvckNoZWNrRXZlbnRUeXBlLCBsaXN0ZW5lcik7XG4gIGNvbnN0IGFuY2VzdG9yQ3VzdG9tRWxlbWVudHMgPSB0cmF2ZXJzZWRFbGVtZW50c1xuICAgIC5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gY29tcG9uZW50RWwgJiYgZWwgIT09IGxhYmVsKVxuICAgIC5maWx0ZXIoKGVsKSA9PiBlbC50YWdOYW1lPy5pbmNsdWRlcyhcIi1cIikpO1xuICByZXR1cm4gYW5jZXN0b3JDdXN0b21FbGVtZW50cy5sZW5ndGggPiAwO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gc2V0IHVwIGxhYmVsIGludGVyYWN0aW9ucyBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RMYWJlbChjb21wb25lbnQpIHtcbiAgY29uc3QgbGFiZWxFbCA9IGZpbmRMYWJlbEZvckNvbXBvbmVudChjb21wb25lbnQuZWwpO1xuICBpZiAoKG9uTGFiZWxDbGlja01hcC5oYXMobGFiZWxFbCkgJiYgbGFiZWxFbCA9PT0gY29tcG9uZW50LmxhYmVsRWwpIHx8XG4gICAgKCFsYWJlbEVsICYmIHVubGFiZWxlZENvbXBvbmVudHMuaGFzKGNvbXBvbmVudCkpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGJvdW5kT25MYWJlbERpc2Nvbm5lY3RlZCA9IG9uTGFiZWxEaXNjb25uZWN0ZWQuYmluZChjb21wb25lbnQpO1xuICBpZiAobGFiZWxFbCkge1xuICAgIGNvbXBvbmVudC5sYWJlbEVsID0gbGFiZWxFbDtcbiAgICBjb25zdCBsYWJlbGFibGVzID0gbGFiZWxUb0xhYmVsYWJsZXMuZ2V0KGxhYmVsRWwpIHx8IFtdO1xuICAgIGxhYmVsYWJsZXMucHVzaChjb21wb25lbnQpO1xuICAgIGxhYmVsVG9MYWJlbGFibGVzLnNldChsYWJlbEVsLCBsYWJlbGFibGVzLnNvcnQoc29ydEJ5RE9NT3JkZXIpKTtcbiAgICBpZiAoIW9uTGFiZWxDbGlja01hcC5oYXMoY29tcG9uZW50LmxhYmVsRWwpKSB7XG4gICAgICBvbkxhYmVsQ2xpY2tNYXAuc2V0KGNvbXBvbmVudC5sYWJlbEVsLCBvbkxhYmVsQ2xpY2spO1xuICAgICAgY29tcG9uZW50LmxhYmVsRWwuYWRkRXZlbnRMaXN0ZW5lcihsYWJlbENsaWNrRXZlbnQsIG9uTGFiZWxDbGljayk7XG4gICAgfVxuICAgIHVubGFiZWxlZENvbXBvbmVudHMuZGVsZXRlKGNvbXBvbmVudCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbENvbm5lY3RlZEV2ZW50LCBvbkxhYmVsQ29ubmVjdGVkTWFwLmdldChjb21wb25lbnQpKTtcbiAgICBvbkxhYmVsRGlzY29ubmVjdGVkTWFwLnNldChjb21wb25lbnQsIGJvdW5kT25MYWJlbERpc2Nvbm5lY3RlZCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihsYWJlbERpc2Nvbm5lY3RlZEV2ZW50LCBib3VuZE9uTGFiZWxEaXNjb25uZWN0ZWQpO1xuICB9XG4gIGVsc2UgaWYgKCF1bmxhYmVsZWRDb21wb25lbnRzLmhhcyhjb21wb25lbnQpKSB7XG4gICAgYm91bmRPbkxhYmVsRGlzY29ubmVjdGVkKCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbERpc2Nvbm5lY3RlZEV2ZW50LCBvbkxhYmVsRGlzY29ubmVjdGVkTWFwLmdldChjb21wb25lbnQpKTtcbiAgfVxufVxuLyoqXG4gKiBIZWxwZXIgdG8gdGVhciBkb3duIGxhYmVsIGludGVyYWN0aW9ucyBvbiBkaXNjb25uZWN0ZWRDYWxsYmFjayBvbiBsYWJlbGFibGUgY29tcG9uZW50cy5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RMYWJlbChjb21wb25lbnQpIHtcbiAgdW5sYWJlbGVkQ29tcG9uZW50cy5kZWxldGUoY29tcG9uZW50KTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbENvbm5lY3RlZEV2ZW50LCBvbkxhYmVsQ29ubmVjdGVkTWFwLmdldChjb21wb25lbnQpKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbERpc2Nvbm5lY3RlZEV2ZW50LCBvbkxhYmVsRGlzY29ubmVjdGVkTWFwLmdldChjb21wb25lbnQpKTtcbiAgb25MYWJlbENvbm5lY3RlZE1hcC5kZWxldGUoY29tcG9uZW50KTtcbiAgb25MYWJlbERpc2Nvbm5lY3RlZE1hcC5kZWxldGUoY29tcG9uZW50KTtcbiAgaWYgKCFjb21wb25lbnQubGFiZWxFbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBsYWJlbGFibGVzID0gbGFiZWxUb0xhYmVsYWJsZXMuZ2V0KGNvbXBvbmVudC5sYWJlbEVsKTtcbiAgaWYgKGxhYmVsYWJsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgY29tcG9uZW50LmxhYmVsRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbENsaWNrRXZlbnQsIG9uTGFiZWxDbGlja01hcC5nZXQoY29tcG9uZW50LmxhYmVsRWwpKTtcbiAgICBvbkxhYmVsQ2xpY2tNYXAuZGVsZXRlKGNvbXBvbmVudC5sYWJlbEVsKTtcbiAgfVxuICBsYWJlbFRvTGFiZWxhYmxlcy5zZXQoY29tcG9uZW50LmxhYmVsRWwsIGxhYmVsYWJsZXMuZmlsdGVyKChsYWJlbGFibGUpID0+IGxhYmVsYWJsZSAhPT0gY29tcG9uZW50KS5zb3J0KHNvcnRCeURPTU9yZGVyKSk7XG4gIGNvbXBvbmVudC5sYWJlbEVsID0gbnVsbDtcbn1cbmZ1bmN0aW9uIHNvcnRCeURPTU9yZGVyKGEsIGIpIHtcbiAgcmV0dXJuIGlzQmVmb3JlKGEuZWwsIGIuZWwpID8gLTEgOiAxO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gZ2V0IHRoZSBsYWJlbCB0ZXh0IGZyb20gYSBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBnZXRMYWJlbFRleHQoY29tcG9uZW50KSB7XG4gIHJldHVybiBjb21wb25lbnQubGFiZWwgfHwgY29tcG9uZW50LmxhYmVsRWw/LnRleHRDb250ZW50Py50cmltKCkgfHwgXCJcIjtcbn1cbmZ1bmN0aW9uIG9uTGFiZWxDbGljayhldmVudCkge1xuICBjb25zdCBsYWJlbENsaWNrVGFyZ2V0ID0gZXZlbnQuZGV0YWlsLnNvdXJjZUV2ZW50LnRhcmdldDtcbiAgY29uc3QgbGFiZWxhYmxlcyA9IGxhYmVsVG9MYWJlbGFibGVzLmdldCh0aGlzKTtcbiAgY29uc3QgY2xpY2tlZExhYmVsYWJsZSA9IGxhYmVsYWJsZXMuZmluZCgobGFiZWxhYmxlKSA9PiBsYWJlbGFibGUuZWwgPT09IGxhYmVsQ2xpY2tUYXJnZXQpO1xuICBjb25zdCBsYWJlbGFibGVDaGlsZENsaWNrZWQgPSBsYWJlbGFibGVzLmluY2x1ZGVzKGNsaWNrZWRMYWJlbGFibGUpO1xuICBpZiAobGFiZWxhYmxlQ2hpbGRDbGlja2VkKSB7XG4gICAgLy8gbm8gbmVlZCB0byBmb3J3YXJkIGNsaWNrIGFzIGxhYmVsYWJsZSB3aWxsIHJlY2VpdmUgZm9jdXNcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZmlyc3RMYWJlbGFibGUgPSBsYWJlbGFibGVzWzBdO1xuICBpZiAoZmlyc3RMYWJlbGFibGUuZGlzYWJsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZmlyc3RMYWJlbGFibGUub25MYWJlbENsaWNrKGV2ZW50KTtcbn1cbmZ1bmN0aW9uIG9uTGFiZWxDb25uZWN0ZWQoKSB7XG4gIGlmICh1bmxhYmVsZWRDb21wb25lbnRzLmhhcyh0aGlzKSkge1xuICAgIGNvbm5lY3RMYWJlbCh0aGlzKTtcbiAgfVxufVxuZnVuY3Rpb24gb25MYWJlbERpc2Nvbm5lY3RlZCgpIHtcbiAgdW5sYWJlbGVkQ29tcG9uZW50cy5hZGQodGhpcyk7XG4gIGNvbnN0IGJvdW5kT25MYWJlbENvbm5lY3RlZCA9IG9uTGFiZWxDb25uZWN0ZWRNYXAuZ2V0KHRoaXMpIHx8IG9uTGFiZWxDb25uZWN0ZWQuYmluZCh0aGlzKTtcbiAgb25MYWJlbENvbm5lY3RlZE1hcC5zZXQodGhpcywgYm91bmRPbkxhYmVsQ29ubmVjdGVkKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihsYWJlbENvbm5lY3RlZEV2ZW50LCBib3VuZE9uTGFiZWxDb25uZWN0ZWQpO1xufVxuXG5leHBvcnQgeyBsYWJlbERpc2Nvbm5lY3RlZEV2ZW50IGFzIGEsIGNvbm5lY3RMYWJlbCBhcyBjLCBkaXNjb25uZWN0TGFiZWwgYXMgZCwgZ2V0TGFiZWxUZXh0IGFzIGcsIGxhYmVsQ29ubmVjdGVkRXZlbnQgYXMgbCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9