"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-tab-title_js-node_module-1402df"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-tab-title.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-tab-title.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteTabTitle: () => (/* binding */ CalciteTabTitle),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _tab_title_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-title.js */ "./node_modules/@esri/calcite-components/dist/components/tab-title.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const CalciteTabTitle = _tab_title_js__WEBPACK_IMPORTED_MODULE_0__.T;
const defineCustomElement = _tab_title_js__WEBPACK_IMPORTED_MODULE_0__.d;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/component.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/component.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getIconScale)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
function getIconScale(componentScale) {
  return componentScale === "l" ? "m" : "s";
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/icon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/icon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ Icon),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */




const CSS = {
  icon: "icon",
  flipRtl: "flip-rtl",
};

/**
 * Icon data cache.
 * Exported for testing purposes.
 *
 * @private
 */
const iconCache = {};
/**
 * Icon request cache.
 * Exported for testing purposes.
 *
 * @private
 */
const requestCache = {};
const scaleToPx = {
  s: 16,
  m: 24,
  l: 32,
};
async function fetchIcon({ icon, scale }) {
  const size = scaleToPx[scale];
  const name = normalizeIconName(icon);
  const filled = name.charAt(name.length - 1) === "F";
  const iconName = filled ? name.substring(0, name.length - 1) : name;
  const id = `${iconName}${size}${filled ? "F" : ""}`;
  if (iconCache[id]) {
    return iconCache[id];
  }
  if (!requestCache[id]) {
    requestCache[id] = fetch((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.getAssetPath)(`./assets/icon/${id}.json`))
      .then((resp) => resp.json())
      .catch(() => {
      console.error(`"${id}" is not a valid calcite-ui-icon name`);
      return "";
    });
  }
  const path = await requestCache[id];
  iconCache[id] = path;
  return path;
}
/**
 * Normalize the icon name to match the path data module exports.
 * Exported for testing purposes.
 *
 * @param name – an icon name that can be either kebab or camel-cased
 * @private
 */
function normalizeIconName(name) {
  const numberLeadingName = !isNaN(Number(name.charAt(0)));
  const parts = name.split("-");
  const kebabCased = parts.length > 0;
  if (kebabCased) {
    const firstNonDigitInPartPattern = /[a-z]/i;
    name = parts
      .map((part, partIndex) => {
      return part.replace(firstNonDigitInPartPattern, function replacer(match, offset) {
        const isFirstCharInName = partIndex === 0 && offset === 0;
        if (isFirstCharInName) {
          return match;
        }
        return match.toUpperCase();
      });
    })
      .join("");
  }
  return numberLeadingName ? `i${name}` : name;
}

const iconCss = ":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}";

const Icon = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.icon = null;
    this.flipRtl = false;
    this.scale = "m";
    this.textLabel = undefined;
    this.pathData = undefined;
    this.visible = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.waitUntilVisible(() => {
      this.visible = true;
      this.loadIconPathData();
    });
  }
  disconnectedCallback() {
    this.intersectionObserver?.disconnect();
    this.intersectionObserver = null;
  }
  async componentWillLoad() {
    this.loadIconPathData();
  }
  render() {
    const { el, flipRtl, pathData, scale, textLabel } = this;
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(el);
    const size = scaleToPx[scale];
    const semantic = !!textLabel;
    const paths = [].concat(pathData || "");
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Host, { "aria-hidden": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(!semantic), "aria-label": semantic ? textLabel : null, role: semantic ? "img" : null }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("svg", { "aria-hidden": "true", class: {
        [CSS.flipRtl]: dir === "rtl" && flipRtl,
        svg: true,
      }, fill: "currentColor", height: "100%", viewBox: `0 0 ${size} ${size}`, width: "100%", xmlns: "http://www.w3.org/2000/svg" }, paths.map((path) => typeof path === "string" ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { d: path })) : ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { d: path.d, opacity: "opacity" in path ? path.opacity : 1 }))))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  async loadIconPathData() {
    const { icon, scale, visible } = this;
    if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Build.isBrowser || !icon || !visible) {
      return;
    }
    const pathData = await fetchIcon({ icon, scale });
    // While the fetchIcon method is awaiting response, the icon requested can change. This check is to verify the response received belongs to the current icon.
    if (icon !== this.icon) {
      return;
    }
    this.pathData = pathData;
  }
  waitUntilVisible(callback) {
    this.intersectionObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_1__.c)("intersection", (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.intersectionObserver.disconnect();
          this.intersectionObserver = null;
          callback();
        }
      });
    }, { rootMargin: "50px" });
    if (!this.intersectionObserver) {
      callback();
      return;
    }
    this.intersectionObserver.observe(this.el);
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "icon": ["loadIconPathData"],
    "scale": ["loadIconPathData"]
  }; }
  static get style() { return iconCss; }
}, [1, "calcite-icon", {
    "icon": [513],
    "flipRtl": [516, "flip-rtl"],
    "scale": [513],
    "textLabel": [1, "text-label"],
    "pathData": [32],
    "visible": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Icon);
      }
      break;
  } });
}
defineCustomElement();




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

/***/ "./node_modules/@esri/calcite-components/dist/components/t9n.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/t9n.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ connectMessages),
/* harmony export */   d: () => (/* binding */ disconnectMessages),
/* harmony export */   s: () => (/* binding */ setUpMessages),
/* harmony export */   u: () => (/* binding */ updateMessages)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const componentLangToMessageBundleCache = {};
async function getMessageBundle(lang, component) {
  const key = `${component}_${lang}`;
  if (componentLangToMessageBundleCache[key]) {
    return componentLangToMessageBundleCache[key];
  }
  componentLangToMessageBundleCache[key] = fetch((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.getAssetPath)(`./assets/${component}/t9n/messages_${lang}.json`))
    .then((resp) => {
    if (!resp.ok) {
      throwMessageFetchError();
    }
    return resp.json();
  })
    .catch(() => throwMessageFetchError());
  return componentLangToMessageBundleCache[key];
}
function throwMessageFetchError() {
  throw new Error("could not fetch component message bundle");
}
function mergeMessages(component) {
  component.messages = {
    ...component.defaultMessages,
    ...component.messageOverrides,
  };
}
/**
 * This utility sets up the messages used by the component. It should be awaited in the `componentWillLoad` lifecycle hook.
 *
 * @param component
 */
async function setUpMessages(component) {
  component.defaultMessages = await fetchMessages(component, component.effectiveLocale);
  mergeMessages(component);
}
async function fetchMessages(component, lang) {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.Build.isBrowser) {
    return {};
  }
  const { el } = component;
  const tag = el.tagName.toLowerCase();
  const componentName = tag.replace("calcite-", "");
  return getMessageBundle((0,_locale_js__WEBPACK_IMPORTED_MODULE_0__.g)(lang, "t9n"), componentName);
}
/**
 * This utility must be set up for the component to update its default message bundle if the locale changes.
 *
 * It can be set up in **either** of the following ways:
 *
 * 1. called from `LocalizedComponent`'s `onLocaleChange` method or
 * 2. called from a watcher configured to watch `LocalizedComponent`'s `effectiveLocale` prop
 *
 * @param component
 * @param lang
 */
async function updateMessages(component, lang) {
  component.defaultMessages = await fetchMessages(component, lang);
  mergeMessages(component);
}
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback`
 *
 * **Note**: this must be called after `LocalizedComponent`'s `connectLocalized` method.
 *
 * @param component
 */
function connectMessages(component) {
  component.onMessagesChange = defaultOnMessagesChange;
}
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
function disconnectMessages(component) {
  component.onMessagesChange = undefined;
}
function defaultOnMessagesChange() {
  mergeMessages(this);
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMzQzNzdjZDMxN2UzZGQzYzQyMTNkMWE2ZjhiNTUxZmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMyRTs7QUFFM0Usd0JBQXdCLDRDQUFRO0FBQ2hDLDRCQUE0Qiw0Q0FBcUI7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7OztBQ1ZoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Q3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VIO0FBQ3JEO0FBQ2I7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUyxFQUFFLEtBQUssRUFBRSxrQkFBa0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsb0ZBQVksa0JBQWtCLEdBQUc7QUFDOUQ7QUFDQTtBQUNBLHdCQUF3QixHQUFHO0FBQzNCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxpQ0FBaUMsS0FBSztBQUN0Qzs7QUFFQSx1QkFBdUIsb0JBQW9CLG1DQUFtQyxpQkFBaUIsaUJBQWlCLGdCQUFnQixxQkFBcUIsb0JBQW9CLGlCQUFpQixpQkFBaUIsZ0JBQWdCLHFCQUFxQixvQkFBb0IsaUJBQWlCLGlCQUFpQixnQkFBZ0IscUJBQXFCLG9CQUFvQixVQUFVLHFCQUFxQixLQUFLLGNBQWMsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUVwYywyQkFBMkIsMEZBQWtCLGVBQWUsK0VBQVc7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBDQUEwQztBQUN0RCxnQkFBZ0IsMENBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5RUFBQyxDQUFDLHdFQUFJLElBQUksZUFBZSwwQ0FBYSx1RkFBdUYsRUFBRSx5RUFBQyxVQUFVO0FBQ3RKO0FBQ0E7QUFDQSxPQUFPLHdEQUF3RCxNQUFNLEVBQUUsS0FBSyx1REFBdUQsa0RBQWtELHlFQUFDLFdBQVcsU0FBUyxNQUFNLHlFQUFDLFdBQVcsMERBQTBEO0FBQ3RSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1QkFBdUI7QUFDbkMsU0FBUyx5RUFBSztBQUNkO0FBQ0E7QUFDQSx1Q0FBdUMsYUFBYTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnREFBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSyxJQUFJLG9CQUFvQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsYUFBYTtBQUNiLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1TC9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBSztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQixRQUFRLE1BQU0sR0FBRyxRQUFRO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsV0FBVztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsV0FBVztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVvSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SnBIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkU7QUFDdkI7O0FBRXREO0FBQ0E7QUFDQSxpQkFBaUIsVUFBVSxHQUFHLEtBQUs7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsaURBQWlELG9GQUFZLGFBQWEsVUFBVSxnQkFBZ0IsS0FBSztBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBSztBQUNaO0FBQ0E7QUFDQSxVQUFVLEtBQUs7QUFDZjtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFrQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLXRhYi10aXRsZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9pY29uLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9pbnRlcmFjdGl2ZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvdDluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IFQgYXMgVGFiVGl0bGUsIGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQxIH0gZnJvbSAnLi90YWItdGl0bGUuanMnO1xuXG5jb25zdCBDYWxjaXRlVGFiVGl0bGUgPSBUYWJUaXRsZTtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVUYWJUaXRsZSwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuZnVuY3Rpb24gZ2V0SWNvblNjYWxlKGNvbXBvbmVudFNjYWxlKSB7XG4gIHJldHVybiBjb21wb25lbnRTY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiO1xufVxuXG5leHBvcnQgeyBnZXRJY29uU2NhbGUgYXMgZyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZ2V0QXNzZXRQYXRoLCBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBoLCBIb3N0LCBCdWlsZCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0RWxlbWVudERpciwgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBpY29uOiBcImljb25cIixcbiAgZmxpcFJ0bDogXCJmbGlwLXJ0bFwiLFxufTtcblxuLyoqXG4gKiBJY29uIGRhdGEgY2FjaGUuXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBpY29uQ2FjaGUgPSB7fTtcbi8qKlxuICogSWNvbiByZXF1ZXN0IGNhY2hlLlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgcmVxdWVzdENhY2hlID0ge307XG5jb25zdCBzY2FsZVRvUHggPSB7XG4gIHM6IDE2LFxuICBtOiAyNCxcbiAgbDogMzIsXG59O1xuYXN5bmMgZnVuY3Rpb24gZmV0Y2hJY29uKHsgaWNvbiwgc2NhbGUgfSkge1xuICBjb25zdCBzaXplID0gc2NhbGVUb1B4W3NjYWxlXTtcbiAgY29uc3QgbmFtZSA9IG5vcm1hbGl6ZUljb25OYW1lKGljb24pO1xuICBjb25zdCBmaWxsZWQgPSBuYW1lLmNoYXJBdChuYW1lLmxlbmd0aCAtIDEpID09PSBcIkZcIjtcbiAgY29uc3QgaWNvbk5hbWUgPSBmaWxsZWQgPyBuYW1lLnN1YnN0cmluZygwLCBuYW1lLmxlbmd0aCAtIDEpIDogbmFtZTtcbiAgY29uc3QgaWQgPSBgJHtpY29uTmFtZX0ke3NpemV9JHtmaWxsZWQgPyBcIkZcIiA6IFwiXCJ9YDtcbiAgaWYgKGljb25DYWNoZVtpZF0pIHtcbiAgICByZXR1cm4gaWNvbkNhY2hlW2lkXTtcbiAgfVxuICBpZiAoIXJlcXVlc3RDYWNoZVtpZF0pIHtcbiAgICByZXF1ZXN0Q2FjaGVbaWRdID0gZmV0Y2goZ2V0QXNzZXRQYXRoKGAuL2Fzc2V0cy9pY29uLyR7aWR9Lmpzb25gKSlcbiAgICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGBcIiR7aWR9XCIgaXMgbm90IGEgdmFsaWQgY2FsY2l0ZS11aS1pY29uIG5hbWVgKTtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IHBhdGggPSBhd2FpdCByZXF1ZXN0Q2FjaGVbaWRdO1xuICBpY29uQ2FjaGVbaWRdID0gcGF0aDtcbiAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgaWNvbiBuYW1lIHRvIG1hdGNoIHRoZSBwYXRoIGRhdGEgbW9kdWxlIGV4cG9ydHMuXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBAcGFyYW0gbmFtZSDigJMgYW4gaWNvbiBuYW1lIHRoYXQgY2FuIGJlIGVpdGhlciBrZWJhYiBvciBjYW1lbC1jYXNlZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplSWNvbk5hbWUobmFtZSkge1xuICBjb25zdCBudW1iZXJMZWFkaW5nTmFtZSA9ICFpc05hTihOdW1iZXIobmFtZS5jaGFyQXQoMCkpKTtcbiAgY29uc3QgcGFydHMgPSBuYW1lLnNwbGl0KFwiLVwiKTtcbiAgY29uc3Qga2ViYWJDYXNlZCA9IHBhcnRzLmxlbmd0aCA+IDA7XG4gIGlmIChrZWJhYkNhc2VkKSB7XG4gICAgY29uc3QgZmlyc3ROb25EaWdpdEluUGFydFBhdHRlcm4gPSAvW2Etel0vaTtcbiAgICBuYW1lID0gcGFydHNcbiAgICAgIC5tYXAoKHBhcnQsIHBhcnRJbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHBhcnQucmVwbGFjZShmaXJzdE5vbkRpZ2l0SW5QYXJ0UGF0dGVybiwgZnVuY3Rpb24gcmVwbGFjZXIobWF0Y2gsIG9mZnNldCkge1xuICAgICAgICBjb25zdCBpc0ZpcnN0Q2hhckluTmFtZSA9IHBhcnRJbmRleCA9PT0gMCAmJiBvZmZzZXQgPT09IDA7XG4gICAgICAgIGlmIChpc0ZpcnN0Q2hhckluTmFtZSkge1xuICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0Y2gudG9VcHBlckNhc2UoKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgICAuam9pbihcIlwiKTtcbiAgfVxuICByZXR1cm4gbnVtYmVyTGVhZGluZ05hbWUgPyBgaSR7bmFtZX1gIDogbmFtZTtcbn1cblxuY29uc3QgaWNvbkNzcyA9IFwiOmhvc3R7ZGlzcGxheTppbmxpbmUtZmxleDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWljb24tY29sb3IpfTpob3N0KFtzY2FsZT1zXSl7aW5saW5lLXNpemU6MTZweDtibG9jay1zaXplOjE2cHg7bWluLWlubGluZS1zaXplOjE2cHg7bWluLWJsb2NrLXNpemU6MTZweH06aG9zdChbc2NhbGU9bV0pe2lubGluZS1zaXplOjI0cHg7YmxvY2stc2l6ZToyNHB4O21pbi1pbmxpbmUtc2l6ZToyNHB4O21pbi1ibG9jay1zaXplOjI0cHh9Omhvc3QoW3NjYWxlPWxdKXtpbmxpbmUtc2l6ZTozMnB4O2Jsb2NrLXNpemU6MzJweDttaW4taW5saW5lLXNpemU6MzJweDttaW4tYmxvY2stc2l6ZTozMnB4fS5mbGlwLXJ0bHt0cmFuc2Zvcm06c2NhbGVYKC0xKX0uc3Zne2Rpc3BsYXk6YmxvY2t9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IEljb24gPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuaWNvbiA9IG51bGw7XG4gICAgdGhpcy5mbGlwUnRsID0gZmFsc2U7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMudGV4dExhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGF0aERhdGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy53YWl0VW50aWxWaXNpYmxlKCgpID0+IHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICB0aGlzLmxvYWRJY29uUGF0aERhdGEoKTtcbiAgICB9KTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG51bGw7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5sb2FkSWNvblBhdGhEYXRhKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWwsIGZsaXBSdGwsIHBhdGhEYXRhLCBzY2FsZSwgdGV4dExhYmVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIoZWwpO1xuICAgIGNvbnN0IHNpemUgPSBzY2FsZVRvUHhbc2NhbGVdO1xuICAgIGNvbnN0IHNlbWFudGljID0gISF0ZXh0TGFiZWw7XG4gICAgY29uc3QgcGF0aHMgPSBbXS5jb25jYXQocGF0aERhdGEgfHwgXCJcIik7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWhpZGRlblwiOiB0b0FyaWFCb29sZWFuKCFzZW1hbnRpYyksIFwiYXJpYS1sYWJlbFwiOiBzZW1hbnRpYyA/IHRleHRMYWJlbCA6IG51bGwsIHJvbGU6IHNlbWFudGljID8gXCJpbWdcIiA6IG51bGwgfSwgaChcInN2Z1wiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuZmxpcFJ0bF06IGRpciA9PT0gXCJydGxcIiAmJiBmbGlwUnRsLFxuICAgICAgICBzdmc6IHRydWUsXG4gICAgICB9LCBmaWxsOiBcImN1cnJlbnRDb2xvclwiLCBoZWlnaHQ6IFwiMTAwJVwiLCB2aWV3Qm94OiBgMCAwICR7c2l6ZX0gJHtzaXplfWAsIHdpZHRoOiBcIjEwMCVcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9LCBwYXRocy5tYXAoKHBhdGgpID0+IHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiID8gKGgoXCJwYXRoXCIsIHsgZDogcGF0aCB9KSkgOiAoaChcInBhdGhcIiwgeyBkOiBwYXRoLmQsIG9wYWNpdHk6IFwib3BhY2l0eVwiIGluIHBhdGggPyBwYXRoLm9wYWNpdHkgOiAxIH0pKSkpKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYXN5bmMgbG9hZEljb25QYXRoRGF0YSgpIHtcbiAgICBjb25zdCB7IGljb24sIHNjYWxlLCB2aXNpYmxlIH0gPSB0aGlzO1xuICAgIGlmICghQnVpbGQuaXNCcm93c2VyIHx8ICFpY29uIHx8ICF2aXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhdGhEYXRhID0gYXdhaXQgZmV0Y2hJY29uKHsgaWNvbiwgc2NhbGUgfSk7XG4gICAgLy8gV2hpbGUgdGhlIGZldGNoSWNvbiBtZXRob2QgaXMgYXdhaXRpbmcgcmVzcG9uc2UsIHRoZSBpY29uIHJlcXVlc3RlZCBjYW4gY2hhbmdlLiBUaGlzIGNoZWNrIGlzIHRvIHZlcmlmeSB0aGUgcmVzcG9uc2UgcmVjZWl2ZWQgYmVsb25ncyB0byB0aGUgY3VycmVudCBpY29uLlxuICAgIGlmIChpY29uICE9PSB0aGlzLmljb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wYXRoRGF0YSA9IHBhdGhEYXRhO1xuICB9XG4gIHdhaXRVbnRpbFZpc2libGUoY2FsbGJhY2spIHtcbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJpbnRlcnNlY3Rpb25cIiwgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG51bGw7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgeyByb290TWFyZ2luOiBcIjUwcHhcIiB9KTtcbiAgICBpZiAoIXRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiaWNvblwiOiBbXCJsb2FkSWNvblBhdGhEYXRhXCJdLFxuICAgIFwic2NhbGVcIjogW1wibG9hZEljb25QYXRoRGF0YVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBpY29uQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWljb25cIiwge1xuICAgIFwiaWNvblwiOiBbNTEzXSxcbiAgICBcImZsaXBSdGxcIjogWzUxNiwgXCJmbGlwLXJ0bFwiXSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwidGV4dExhYmVsXCI6IFsxLCBcInRleHQtbGFiZWxcIl0sXG4gICAgXCJwYXRoRGF0YVwiOiBbMzJdLFxuICAgIFwidmlzaWJsZVwiOiBbMzJdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtaWNvblwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgSWNvbik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgSWNvbiBhcyBJLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IEJ1aWxkIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG5mdW5jdGlvbiBnZXRVc2VyQWdlbnREYXRhKCkge1xuICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGE7XG59XG5mdW5jdGlvbiBnZXRVc2VyQWdlbnRTdHJpbmcoKSB7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgY29uc3QgdWFEYXRhID0gZ2V0VXNlckFnZW50RGF0YSgpO1xuICByZXR1cm4gdWFEYXRhPy5icmFuZHNcbiAgICA/IHVhRGF0YS5icmFuZHMubWFwKCh7IGJyYW5kLCB2ZXJzaW9uIH0pID0+IGAke2JyYW5kfS8ke3ZlcnNpb259YCkuam9pbihcIiBcIilcbiAgICA6IG5hdmlnYXRvci51c2VyQWdlbnQ7XG59XG5cbi8vIOKaoO+4jyBicm93c2VyLXNuaWZmaW5nIGlzIG5vdCBhIGJlc3QgcHJhY3RpY2UgYW5kIHNob3VsZCBiZSBhdm9pZGVkIOKaoO+4j1xuY29uc3QgaXNGaXJlZm94ID0gL2ZpcmVmb3gvaS50ZXN0KGdldFVzZXJBZ2VudFN0cmluZygpKTtcbmNvbnN0IGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50ID0gaXNGaXJlZm94XG4gID8gbmV3IFdlYWtNYXAoKVxuICA6IG51bGw7XG5mdW5jdGlvbiBpbnRlcmNlcHRlZENsaWNrKCkge1xuICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzO1xuICBpZiAoIWRpc2FibGVkKSB7XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrLmNhbGwodGhpcyk7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZXZlbnQpIHtcbiAgY29uc3QgaW50ZXJhY3RpdmVFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICBpZiAoaXNGaXJlZm94ICYmICFpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoaW50ZXJhY3RpdmVFbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGRpc2FibGVkIH0gPSBpbnRlcmFjdGl2ZUVsZW1lbnQ7XG4gIGlmIChkaXNhYmxlZCkge1xuICAgIC8vIHByZXZlbnQgY2xpY2sgZnJvbSBtb3ZpbmcgZm9jdXMgb24gaG9zdFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMgPSBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIl07XG5mdW5jdGlvbiBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudChldmVudCkge1xuICBpZiAoaXNGaXJlZm94ICYmICFpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoZXZlbnQudGFyZ2V0KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGRpc2FibGVkIH0gPSBldmVudC50YXJnZXQ7XG4gIC8vIHByZXZlbnQgZGlzYWxsb3dlZCBtb3VzZSBldmVudHMgZnJvbSBiZWluZyBlbWl0dGVkIG9uIHRoZSBkaXNhYmxlZCBob3N0IChwZXIgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy81ODg2KVxuICAvL+KaoCB3ZSBnZW5lcmFsbHkgYXZvaWQgc3RvcHBpbmcgcHJvcGFnYXRpb24gb2YgZXZlbnRzLCBidXQgdGhpcyBpcyBuZWVkZWQgdG8gYWRoZXJlIHRvIHRoZSBpbnRlbmRlZCBzcGVjIGNoYW5nZXMgYWJvdmUg4pqgXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IGNhcHR1cmVPbmx5T3B0aW9ucyA9IHsgY2FwdHVyZTogdHJ1ZSB9O1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1cGRhdGVzIHRoZSBob3N0IGVsZW1lbnQgdG8gcHJldmVudCBrZXlib2FyZCBpbnRlcmFjdGlvbiBvbiBpdHMgc3VidHJlZSBhbmQgc2V0cyB0aGUgYXBwcm9wcmlhdGUgYXJpYSBhdHRyaWJ1dGUgZm9yIGFjY2Vzc2liaWxpdHkuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZFJlbmRlcmAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogKipOb3RlcyoqXG4gKlxuICogdGhpcyB1dGlsIGlzIG5vdCBuZWVkZWQgZm9yIHNpbXBsZSBjb21wb25lbnRzIHdob3NlIHJvb3QgZWxlbWVudCBvciBlbGVtZW50cyBhcmUgYW4gaW50ZXJhY3RpdmUgY29tcG9uZW50IChjdXN0b20gZWxlbWVudCBvciBuYXRpdmUgY29udHJvbCkuIEZvciB0aG9zZSBjYXNlcywgc2V0IHRoZSBgZGlzYWJsZWRgIHByb3BzIG9uIHRoZSByb290IGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIHRlY2huaWNhbGx5LCB1c2VycyBjYW4gb3ZlcnJpZGUgYHRhYmluZGV4YCBhbmQgcmVzdG9yZSBrZXlib2FyZCBuYXZpZ2F0aW9uLCBidXQgdGhpcyB3aWxsIGJlIGNvbnNpZGVyZWQgdXNlciBlcnJvclxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBob3N0SXNUYWJiYWJsZSDigJMgd2hlbiBzZXQgdG8gdHJ1ZSBvciBpdHMgcHJlZGljYXRlIHJldHVybnMgdHJ1ZSwgdGhlIGhvc3QgaXMgdGFiYmFibGUgYW5kIHdpbGwgYmUgbWFuYWdlZCBieSB0aGUgaGVscGVyLiBTZXQgdG8gXCJtYW5hZ2VkXCIgZm9yIGNhc2VzIHdoZXJlIGEgY29tcG9uZW50J3MgcGFyZW50IGRldGVybWluZXMgd2hpY2ggaXRlbSBpcyB0YWJiYWJsZSAoaS5lLiwgc2V0cyBgdGFiaW5kZXhgIHRvIGFsbG93IHRhYmJpbmcpLlxuICovXG5mdW5jdGlvbiB1cGRhdGVIb3N0SW50ZXJhY3Rpb24oY29tcG9uZW50LCBob3N0SXNUYWJiYWJsZSA9IGZhbHNlKSB7XG4gIGlmIChjb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgaWYgKGNvbXBvbmVudC5lbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICAgIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbiAgICByZXR1cm47XG4gIH1cbiAgcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCk7XG4gIGlmICh0eXBlb2YgaG9zdElzVGFiYmFibGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBob3N0SXNUYWJiYWJsZS5jYWxsKGNvbXBvbmVudCkgPyBcIjBcIiA6IFwiLTFcIik7XG4gIH1cbiAgZWxzZSBpZiAoaG9zdElzVGFiYmFibGUgPT09IHRydWUpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSBmYWxzZSkge1xuICAgIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcbiAgfVxuICBlbHNlIDtcbiAgY29tcG9uZW50LmVsLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIik7XG59XG5mdW5jdGlvbiBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZWwuY2xpY2sgPSBpbnRlcmNlcHRlZENsaWNrO1xuICBhZGRJbnRlcmFjdGlvbkxpc3RlbmVycyhpc0ZpcmVmb3ggPyBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gYWRkSW50ZXJhY3Rpb25MaXN0ZW5lcnMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICAvLyB0aGlzIHBhdGggaXMgb25seSBhcHBsaWNhYmxlIHRvIEZpcmVmb3hcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG59XG5mdW5jdGlvbiBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkge1xuICByZXR1cm4gaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KSB7XG4gIGRlbGV0ZSBjb21wb25lbnQuZWwuY2xpY2s7IC8vIGZhbGxiYWNrIG9uIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGlja1xuICByZW1vdmVJbnRlcmFjdGlvbkxpc3RlbmVycyhpc0ZpcmVmb3ggPyBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gcmVtb3ZlSW50ZXJhY3Rpb25MaXN0ZW5lcnMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICAvLyB0aGlzIHBhdGggaXMgb25seSBhcHBsaWNhYmxlIHRvIEZpcmVmb3hcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBoZWxwcyBkaXNhYmxlIGNvbXBvbmVudHMgY29uc2lzdGVudGx5IGluIEZpcmVmb3guXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBjb25uZWN0ZWRDYWxsYmFja2AgYW5kIGlzIG9ubHkgbmVlZGVkIGZvciBGaXJlZm94IGFzIGl0IGRvZXMgbm90IGNhbGwgY2FwdHVyZSBldmVudCBsaXN0ZW5lcnMgYmVmb3JlIG5vbi1jYXB0dXJlIG9uZXMgKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzMxNTA0KS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RJbnRlcmFjdGl2ZShjb21wb25lbnQpIHtcbiAgaWYgKCFjb21wb25lbnQuZGlzYWJsZWQgfHwgIWlzRmlyZWZveCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwYXJlbnQgPSBjb21wb25lbnQuZWwucGFyZW50RWxlbWVudCB8fCBjb21wb25lbnQuZWw7IC8qIGFzc3VtZSBlbGVtZW50IGlzIGhvc3QgaWYgaXQgaGFzIG5vIHBhcmVudCB3aGVuIGNvbm5lY3RlZCAqL1xuICBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5zZXQoY29tcG9uZW50LmVsLCBwYXJlbnQpO1xuICBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSByZXN0b3JlcyBpbnRlcmFjdGl2aXR5IHRvIGRpc2FibGVkIGNvbXBvbmVudHMgY29uc2lzdGVudGx5IGluIEZpcmVmb3guXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFja2AgYW5kIGlzIG9ubHkgbmVlZGVkIGZvciBGaXJlZm94IGFzIGl0IGRvZXMgbm90IGNhbGwgY2FwdHVyZSBldmVudCBsaXN0ZW5lcnMgYmVmb3JlIG5vbi1jYXB0dXJlIG9uZXMgKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzMxNTA0KS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZShjb21wb25lbnQpIHtcbiAgaWYgKCFpc0ZpcmVmb3gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYWx3YXlzIHJlbW92ZSBvbiBkaXNjb25uZWN0IGFzIHJlbmRlciBvciBjb25uZWN0IHdpbGwgcmVzdG9yZSBpdFxuICBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RJbnRlcmFjdGl2ZSBhcyBjLCBkaXNjb25uZWN0SW50ZXJhY3RpdmUgYXMgZCwgZ2V0VXNlckFnZW50U3RyaW5nIGFzIGcsIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiBhcyB1IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBCdWlsZCwgZ2V0QXNzZXRQYXRoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTdXBwb3J0ZWRMb2NhbGUgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5cbmNvbnN0IGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZSA9IHt9O1xuYXN5bmMgZnVuY3Rpb24gZ2V0TWVzc2FnZUJ1bmRsZShsYW5nLCBjb21wb25lbnQpIHtcbiAgY29uc3Qga2V5ID0gYCR7Y29tcG9uZW50fV8ke2xhbmd9YDtcbiAgaWYgKGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xuICB9XG4gIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldID0gZmV0Y2goZ2V0QXNzZXRQYXRoKGAuL2Fzc2V0cy8ke2NvbXBvbmVudH0vdDluL21lc3NhZ2VzXyR7bGFuZ30uanNvbmApKVxuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgfSlcbiAgICAuY2F0Y2goKCkgPT4gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpKTtcbiAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xufVxuZnVuY3Rpb24gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY291bGQgbm90IGZldGNoIGNvbXBvbmVudCBtZXNzYWdlIGJ1bmRsZVwiKTtcbn1cbmZ1bmN0aW9uIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5tZXNzYWdlcyA9IHtcbiAgICAuLi5jb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzLFxuICAgIC4uLmNvbXBvbmVudC5tZXNzYWdlT3ZlcnJpZGVzLFxuICB9O1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCB0aGUgbWVzc2FnZXMgdXNlZCBieSB0aGUgY29tcG9uZW50LiBJdCBzaG91bGQgYmUgYXdhaXRlZCBpbiB0aGUgYGNvbXBvbmVudFdpbGxMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldFVwTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgY29tcG9uZW50LmVmZmVjdGl2ZUxvY2FsZSk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIGNvbnN0IHsgZWwgfSA9IGNvbXBvbmVudDtcbiAgY29uc3QgdGFnID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBjb21wb25lbnROYW1lID0gdGFnLnJlcGxhY2UoXCJjYWxjaXRlLVwiLCBcIlwiKTtcbiAgcmV0dXJuIGdldE1lc3NhZ2VCdW5kbGUoZ2V0U3VwcG9ydGVkTG9jYWxlKGxhbmcsIFwidDluXCIpLCBjb21wb25lbnROYW1lKTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IG11c3QgYmUgc2V0IHVwIGZvciB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZSBpdHMgZGVmYXVsdCBtZXNzYWdlIGJ1bmRsZSBpZiB0aGUgbG9jYWxlIGNoYW5nZXMuXG4gKlxuICogSXQgY2FuIGJlIHNldCB1cCBpbiAqKmVpdGhlcioqIG9mIHRoZSBmb2xsb3dpbmcgd2F5czpcbiAqXG4gKiAxLiBjYWxsZWQgZnJvbSBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBvbkxvY2FsZUNoYW5nZWAgbWV0aG9kIG9yXG4gKiAyLiBjYWxsZWQgZnJvbSBhIHdhdGNoZXIgY29uZmlndXJlZCB0byB3YXRjaCBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBlZmZlY3RpdmVMb2NhbGVgIHByb3BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gbGFuZ1xuICovXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpIHtcbiAgY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyA9IGF3YWl0IGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKTtcbiAgbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiAqKk5vdGUqKjogdGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBjb25uZWN0TG9jYWxpemVkYCBtZXRob2QuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0TWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5vbk1lc3NhZ2VzQ2hhbmdlID0gZGVmYXVsdE9uTWVzc2FnZXNDaGFuZ2U7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSB0ZWFycyBkb3duIGludGVybmFscyBmb3IgbWVzc2FnZXMgc3VwcG9ydC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICBtZXJnZU1lc3NhZ2VzKHRoaXMpO1xufVxuXG5leHBvcnQgeyBjb25uZWN0TWVzc2FnZXMgYXMgYywgZGlzY29ubmVjdE1lc3NhZ2VzIGFzIGQsIHNldFVwTWVzc2FnZXMgYXMgcywgdXBkYXRlTWVzc2FnZXMgYXMgdSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9