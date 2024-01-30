"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_component_js-node_modules_esri_c-3ccafc"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/components/loadable.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/loadable.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ setUpLoadableComponent),
/* harmony export */   b: () => (/* binding */ componentLoaded),
/* harmony export */   c: () => (/* binding */ componentFocusable),
/* harmony export */   s: () => (/* binding */ setComponentLoaded)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const resolveMap = new WeakMap();
const promiseMap = new WeakMap();
/**
 * This helper util sets up the component for the ability to know when the component has been loaded.
 *
 * This should be used in the `componentWillLoad` lifecycle hook.
 *
 * ```
 * componentWillLoad(): void {
 *   setUpLoadableComponent(this);
 * }
 * ```
 *
 * @param component
 */
function setUpLoadableComponent(component) {
  promiseMap.set(component, new Promise((resolve) => resolveMap.set(component, resolve)));
}
/**
 * This helper util lets the loadable component know that it is now loaded.
 *
 * This should be used in the `componentDidLoad` lifecycle hook.
 *
 * ```
 * componentDidLoad(): void {
 *   setComponentLoaded(this);
 * }
 * ```
 *
 * @param component
 */
function setComponentLoaded(component) {
  resolveMap.get(component)();
}
/**
 * This helper util can be used to ensure a component has been loaded (The "componentDidLoad" Stencil lifecycle method has been called).
 *
 * Requires requires `LoadableComponent` to be implemented.
 *
 * A component developer can await this method before proceeding with any logic that requires a component to be loaded first.
 *
 * ```
 * async myMethod(): Promise<void> {
 *   await componentLoaded(this);
 * }
 * ```
 *
 * @param component
 * @returns Promise<void>
 */
function componentLoaded(component) {
  return promiseMap.get(component);
}
/**
 * This helper util can be used to ensuring the component is loaded and rendered by the browser (The "componentDidLoad" Stencil lifecycle method has been called and any internal elements are focusable).
 *
 * Requires requires `LoadableComponent` to be implemented.
 *
 * A component developer can await this method before proceeding with any logic that requires a component to be loaded first and then an internal element be focused.
 *
 * ```
 * async setFocus(): Promise<void> {
 *   await componentFocusable(this);
 *   this.internalElement?.focus();
 * }
 * ```
 *
 * @param component
 * @returns Promise<void>
 */
async function componentFocusable(component) {
  await componentLoaded(component);
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.Build.isBrowser) {
    return;
  }
  (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.forceUpdate)(component);
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ onToggleOpenCloseComponent)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


function isOpen(component) {
  return "opened" in component ? component.opened : component.open;
}
function emitImmediately(component, nonOpenCloseComponent = false) {
  (nonOpenCloseComponent ? component[component.transitionProp] : isOpen(component))
    ? component.onBeforeOpen()
    : component.onBeforeClose();
  (nonOpenCloseComponent ? component[component.transitionProp] : isOpen(component))
    ? component.onOpen()
    : component.onClose();
}
/**
 * Helper to determine globally set transition duration on the given openTransitionProp, which is imported and set in the @Watch("open").
 * Used to emit (before)open/close events both for when the opacity transition is present and when there is none (transition-duration is set to 0).
 *
 * @example
 * import { onToggleOpenCloseComponent, OpenCloseComponent } from "../../utils/openCloseComponent";
 *
 * async componentWillLoad() {
 * // When component initially renders, if `open` was set we need to trigger on load as watcher doesn't fire.
 * if (this.open) {
 *    onToggleOpenCloseComponent(this);
 * }
 * @Watch("open")
 * async toggleModal(value: boolean): Promise<void> {
 *    onToggleOpenCloseComponent(this);
 * }
 *
 * @param component - OpenCloseComponent uses `open` prop to emit (before)open/close.
 * @param nonOpenCloseComponent - OpenCloseComponent uses `expanded` prop to emit (before)open/close.
 */
function onToggleOpenCloseComponent(component, nonOpenCloseComponent = false) {
  (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.readTask)(() => {
    if (component.transitionEl) {
      const { transitionDuration: allDurations, transitionProperty: allProps } = getComputedStyle(component.transitionEl);
      const allTransitionDurationsArray = allDurations.split(",");
      const allTransitionPropsArray = allProps.split(",");
      const openTransitionPropIndex = allTransitionPropsArray.indexOf(component.openTransitionProp);
      const transitionDuration = allTransitionDurationsArray[openTransitionPropIndex] ??
        /* Safari will have a single transition value if multiple props share it,
        so we fall back to it if there's no matching prop duration */
        allTransitionDurationsArray[0];
      if (transitionDuration === "0s") {
        emitImmediately(component, nonOpenCloseComponent);
        return;
      }
      const fallbackTimeoutId = setTimeout(() => {
        component.transitionEl.removeEventListener("transitionstart", onStart);
        component.transitionEl.removeEventListener("transitionend", onEndOrCancel);
        component.transitionEl.removeEventListener("transitioncancel", onEndOrCancel);
        emitImmediately(component, nonOpenCloseComponent);
      }, parseFloat(transitionDuration) * 1000);
      component.transitionEl.addEventListener("transitionstart", onStart);
      component.transitionEl.addEventListener("transitionend", onEndOrCancel);
      component.transitionEl.addEventListener("transitioncancel", onEndOrCancel);
      function onStart(event) {
        if (event.propertyName === component.openTransitionProp && event.target === component.transitionEl) {
          clearTimeout(fallbackTimeoutId);
          component.transitionEl.removeEventListener("transitionstart", onStart);
          (nonOpenCloseComponent ? component[component.transitionProp] : isOpen(component))
            ? component.onBeforeOpen()
            : component.onBeforeClose();
        }
      }
      function onEndOrCancel(event) {
        if (event.propertyName === component.openTransitionProp && event.target === component.transitionEl) {
          (nonOpenCloseComponent ? component[component.transitionProp] : isOpen(component))
            ? component.onOpen()
            : component.onClose();
          component.transitionEl.removeEventListener("transitionend", onEndOrCancel);
          component.transitionEl.removeEventListener("transitioncancel", onEndOrCancel);
        }
      }
    }
  });
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/resources.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/resources.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ KindIcons)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
var KindIcons;
(function (KindIcons) {
  KindIcons["brand"] = "lightbulb";
  KindIcons["danger"] = "exclamationMarkTriangle";
  KindIcons["info"] = "information";
  KindIcons["success"] = "checkCircle";
  KindIcons["warning"] = "exclamationMarkTriangle";
})(KindIcons || (KindIcons = {}));




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNzVmNTIzZWQwOWNlMDkwNGZjMmRlMjQwZDQzM2VkYTUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUg7QUFDckQ7QUFDYjs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTLEVBQUUsS0FBSyxFQUFFLGtCQUFrQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixvRkFBWSxrQkFBa0IsR0FBRztBQUM5RDtBQUNBO0FBQ0Esd0JBQXdCLEdBQUc7QUFDM0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlDQUFpQyxLQUFLO0FBQ3RDOztBQUVBLHVCQUF1QixvQkFBb0IsbUNBQW1DLGlCQUFpQixpQkFBaUIsZ0JBQWdCLHFCQUFxQixvQkFBb0IsaUJBQWlCLGlCQUFpQixnQkFBZ0IscUJBQXFCLG9CQUFvQixpQkFBaUIsaUJBQWlCLGdCQUFnQixxQkFBcUIsb0JBQW9CLFVBQVUscUJBQXFCLEtBQUssY0FBYyxnQkFBZ0IsYUFBYSxTQUFTLGFBQWE7O0FBRXBjLDJCQUEyQiwwRkFBa0IsZUFBZSwrRUFBVztBQUN2RTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOEJBQThCOztBQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2QxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZFO0FBQ3ZCOztBQUV0RDtBQUNBO0FBQ0EsaUJBQWlCLFVBQVUsR0FBRyxLQUFLO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxvRkFBWSxhQUFhLFVBQVUsZ0JBQWdCLEtBQUs7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8seUVBQUs7QUFDWjtBQUNBO0FBQ0EsVUFBVSxLQUFLO0FBQ2Y7QUFDQTtBQUNBLDBCQUEwQiw2Q0FBa0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9pY29uLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9sb2FkYWJsZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvb3BlbkNsb3NlQ29tcG9uZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9yZXNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3Q5bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5mdW5jdGlvbiBnZXRJY29uU2NhbGUoY29tcG9uZW50U2NhbGUpIHtcbiAgcmV0dXJuIGNvbXBvbmVudFNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCI7XG59XG5cbmV4cG9ydCB7IGdldEljb25TY2FsZSBhcyBnIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBnZXRBc3NldFBhdGgsIHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGgsIEhvc3QsIEJ1aWxkIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRFbGVtZW50RGlyLCB0IGFzIHRvQXJpYUJvb2xlYW4gfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGljb246IFwiaWNvblwiLFxuICBmbGlwUnRsOiBcImZsaXAtcnRsXCIsXG59O1xuXG4vKipcbiAqIEljb24gZGF0YSBjYWNoZS5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGljb25DYWNoZSA9IHt9O1xuLyoqXG4gKiBJY29uIHJlcXVlc3QgY2FjaGUuXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCByZXF1ZXN0Q2FjaGUgPSB7fTtcbmNvbnN0IHNjYWxlVG9QeCA9IHtcbiAgczogMTYsXG4gIG06IDI0LFxuICBsOiAzMixcbn07XG5hc3luYyBmdW5jdGlvbiBmZXRjaEljb24oeyBpY29uLCBzY2FsZSB9KSB7XG4gIGNvbnN0IHNpemUgPSBzY2FsZVRvUHhbc2NhbGVdO1xuICBjb25zdCBuYW1lID0gbm9ybWFsaXplSWNvbk5hbWUoaWNvbik7XG4gIGNvbnN0IGZpbGxlZCA9IG5hbWUuY2hhckF0KG5hbWUubGVuZ3RoIC0gMSkgPT09IFwiRlwiO1xuICBjb25zdCBpY29uTmFtZSA9IGZpbGxlZCA/IG5hbWUuc3Vic3RyaW5nKDAsIG5hbWUubGVuZ3RoIC0gMSkgOiBuYW1lO1xuICBjb25zdCBpZCA9IGAke2ljb25OYW1lfSR7c2l6ZX0ke2ZpbGxlZCA/IFwiRlwiIDogXCJcIn1gO1xuICBpZiAoaWNvbkNhY2hlW2lkXSkge1xuICAgIHJldHVybiBpY29uQ2FjaGVbaWRdO1xuICB9XG4gIGlmICghcmVxdWVzdENhY2hlW2lkXSkge1xuICAgIHJlcXVlc3RDYWNoZVtpZF0gPSBmZXRjaChnZXRBc3NldFBhdGgoYC4vYXNzZXRzL2ljb24vJHtpZH0uanNvbmApKVxuICAgICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFwiJHtpZH1cIiBpcyBub3QgYSB2YWxpZCBjYWxjaXRlLXVpLWljb24gbmFtZWApO1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgcGF0aCA9IGF3YWl0IHJlcXVlc3RDYWNoZVtpZF07XG4gIGljb25DYWNoZVtpZF0gPSBwYXRoO1xuICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogTm9ybWFsaXplIHRoZSBpY29uIG5hbWUgdG8gbWF0Y2ggdGhlIHBhdGggZGF0YSBtb2R1bGUgZXhwb3J0cy5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICpcbiAqIEBwYXJhbSBuYW1lIOKAkyBhbiBpY29uIG5hbWUgdGhhdCBjYW4gYmUgZWl0aGVyIGtlYmFiIG9yIGNhbWVsLWNhc2VkXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVJY29uTmFtZShuYW1lKSB7XG4gIGNvbnN0IG51bWJlckxlYWRpbmdOYW1lID0gIWlzTmFOKE51bWJlcihuYW1lLmNoYXJBdCgwKSkpO1xuICBjb25zdCBwYXJ0cyA9IG5hbWUuc3BsaXQoXCItXCIpO1xuICBjb25zdCBrZWJhYkNhc2VkID0gcGFydHMubGVuZ3RoID4gMDtcbiAgaWYgKGtlYmFiQ2FzZWQpIHtcbiAgICBjb25zdCBmaXJzdE5vbkRpZ2l0SW5QYXJ0UGF0dGVybiA9IC9bYS16XS9pO1xuICAgIG5hbWUgPSBwYXJ0c1xuICAgICAgLm1hcCgocGFydCwgcGFydEluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gcGFydC5yZXBsYWNlKGZpcnN0Tm9uRGlnaXRJblBhcnRQYXR0ZXJuLCBmdW5jdGlvbiByZXBsYWNlcihtYXRjaCwgb2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IGlzRmlyc3RDaGFySW5OYW1lID0gcGFydEluZGV4ID09PSAwICYmIG9mZnNldCA9PT0gMDtcbiAgICAgICAgaWYgKGlzRmlyc3RDaGFySW5OYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXRjaC50b1VwcGVyQ2FzZSgpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAgIC5qb2luKFwiXCIpO1xuICB9XG4gIHJldHVybiBudW1iZXJMZWFkaW5nTmFtZSA/IGBpJHtuYW1lfWAgOiBuYW1lO1xufVxuXG5jb25zdCBpY29uQ3NzID0gXCI6aG9zdHtkaXNwbGF5OmlubGluZS1mbGV4O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktaWNvbi1jb2xvcil9Omhvc3QoW3NjYWxlPXNdKXtpbmxpbmUtc2l6ZToxNnB4O2Jsb2NrLXNpemU6MTZweDttaW4taW5saW5lLXNpemU6MTZweDttaW4tYmxvY2stc2l6ZToxNnB4fTpob3N0KFtzY2FsZT1tXSl7aW5saW5lLXNpemU6MjRweDtibG9jay1zaXplOjI0cHg7bWluLWlubGluZS1zaXplOjI0cHg7bWluLWJsb2NrLXNpemU6MjRweH06aG9zdChbc2NhbGU9bF0pe2lubGluZS1zaXplOjMycHg7YmxvY2stc2l6ZTozMnB4O21pbi1pbmxpbmUtc2l6ZTozMnB4O21pbi1ibG9jay1zaXplOjMycHh9LmZsaXAtcnRse3RyYW5zZm9ybTpzY2FsZVgoLTEpfS5zdmd7ZGlzcGxheTpibG9ja306aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgSWNvbiA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5pY29uID0gbnVsbDtcbiAgICB0aGlzLmZsaXBSdGwgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy50ZXh0TGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYXRoRGF0YSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLndhaXRVbnRpbFZpc2libGUoKCkgPT4ge1xuICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMubG9hZEljb25QYXRoRGF0YSgpO1xuICAgIH0pO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gbnVsbDtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICB0aGlzLmxvYWRJY29uUGF0aERhdGEoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbCwgZmxpcFJ0bCwgcGF0aERhdGEsIHNjYWxlLCB0ZXh0TGFiZWwgfSA9IHRoaXM7XG4gICAgY29uc3QgZGlyID0gZ2V0RWxlbWVudERpcihlbCk7XG4gICAgY29uc3Qgc2l6ZSA9IHNjYWxlVG9QeFtzY2FsZV07XG4gICAgY29uc3Qgc2VtYW50aWMgPSAhIXRleHRMYWJlbDtcbiAgICBjb25zdCBwYXRocyA9IFtdLmNvbmNhdChwYXRoRGF0YSB8fCBcIlwiKTtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtaGlkZGVuXCI6IHRvQXJpYUJvb2xlYW4oIXNlbWFudGljKSwgXCJhcmlhLWxhYmVsXCI6IHNlbWFudGljID8gdGV4dExhYmVsIDogbnVsbCwgcm9sZTogc2VtYW50aWMgPyBcImltZ1wiIDogbnVsbCB9LCBoKFwic3ZnXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5mbGlwUnRsXTogZGlyID09PSBcInJ0bFwiICYmIGZsaXBSdGwsXG4gICAgICAgIHN2ZzogdHJ1ZSxcbiAgICAgIH0sIGZpbGw6IFwiY3VycmVudENvbG9yXCIsIGhlaWdodDogXCIxMDAlXCIsIHZpZXdCb3g6IGAwIDAgJHtzaXplfSAke3NpemV9YCwgd2lkdGg6IFwiMTAwJVwiLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIH0sIHBhdGhzLm1hcCgocGF0aCkgPT4gdHlwZW9mIHBhdGggPT09IFwic3RyaW5nXCIgPyAoaChcInBhdGhcIiwgeyBkOiBwYXRoIH0pKSA6IChoKFwicGF0aFwiLCB7IGQ6IHBhdGguZCwgb3BhY2l0eTogXCJvcGFjaXR5XCIgaW4gcGF0aCA/IHBhdGgub3BhY2l0eSA6IDEgfSkpKSkpKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhc3luYyBsb2FkSWNvblBhdGhEYXRhKCkge1xuICAgIGNvbnN0IHsgaWNvbiwgc2NhbGUsIHZpc2libGUgfSA9IHRoaXM7XG4gICAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIgfHwgIWljb24gfHwgIXZpc2libGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGF0aERhdGEgPSBhd2FpdCBmZXRjaEljb24oeyBpY29uLCBzY2FsZSB9KTtcbiAgICAvLyBXaGlsZSB0aGUgZmV0Y2hJY29uIG1ldGhvZCBpcyBhd2FpdGluZyByZXNwb25zZSwgdGhlIGljb24gcmVxdWVzdGVkIGNhbiBjaGFuZ2UuIFRoaXMgY2hlY2sgaXMgdG8gdmVyaWZ5IHRoZSByZXNwb25zZSByZWNlaXZlZCBiZWxvbmdzIHRvIHRoZSBjdXJyZW50IGljb24uXG4gICAgaWYgKGljb24gIT09IHRoaXMuaWNvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBhdGhEYXRhID0gcGF0aERhdGE7XG4gIH1cbiAgd2FpdFVudGlsVmlzaWJsZShjYWxsYmFjaykge1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcImludGVyc2VjdGlvblwiLCAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCB7IHJvb3RNYXJnaW46IFwiNTBweFwiIH0pO1xuICAgIGlmICghdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWwpO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJpY29uXCI6IFtcImxvYWRJY29uUGF0aERhdGFcIl0sXG4gICAgXCJzY2FsZVwiOiBbXCJsb2FkSWNvblBhdGhEYXRhXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIGljb25Dc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtaWNvblwiLCB7XG4gICAgXCJpY29uXCI6IFs1MTNdLFxuICAgIFwiZmxpcFJ0bFwiOiBbNTE2LCBcImZsaXAtcnRsXCJdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJ0ZXh0TGFiZWxcIjogWzEsIFwidGV4dC1sYWJlbFwiXSxcbiAgICBcInBhdGhEYXRhXCI6IFszMl0sXG4gICAgXCJ2aXNpYmxlXCI6IFszMl1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1pY29uXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWljb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBJY29uKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBJY29uIGFzIEksIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgQnVpbGQsIGZvcmNlVXBkYXRlIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG5jb25zdCByZXNvbHZlTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIHNldHMgdXAgdGhlIGNvbXBvbmVudCBmb3IgdGhlIGFiaWxpdHkgdG8ga25vdyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnRXaWxsTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0VXBMb2FkYWJsZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgcHJvbWlzZU1hcC5zZXQoY29tcG9uZW50LCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZU1hcC5zZXQoY29tcG9uZW50LCByZXNvbHZlKSkpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGxldHMgdGhlIGxvYWRhYmxlIGNvbXBvbmVudCBrbm93IHRoYXQgaXQgaXMgbm93IGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnREaWRMb2FkKCk6IHZvaWQge1xuICogICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldENvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmVzb2x2ZU1hcC5nZXQoY29tcG9uZW50KSgpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyZSBhIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBTdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkKS5cbiAqXG4gKiBSZXF1aXJlcyByZXF1aXJlcyBgTG9hZGFibGVDb21wb25lbnRgIHRvIGJlIGltcGxlbWVudGVkLlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QuXG4gKlxuICogYGBgXG4gKiBhc3luYyBteU1ldGhvZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAqICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICovXG5mdW5jdGlvbiBjb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJldHVybiBwcm9taXNlTWFwLmdldChjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyaW5nIHRoZSBjb21wb25lbnQgaXMgbG9hZGVkIGFuZCByZW5kZXJlZCBieSB0aGUgYnJvd3NlciAoVGhlIFwiY29tcG9uZW50RGlkTG9hZFwiIFN0ZW5jaWwgbGlmZWN5Y2xlIG1ldGhvZCBoYXMgYmVlbiBjYWxsZWQgYW5kIGFueSBpbnRlcm5hbCBlbGVtZW50cyBhcmUgZm9jdXNhYmxlKS5cbiAqXG4gKiBSZXF1aXJlcyByZXF1aXJlcyBgTG9hZGFibGVDb21wb25lbnRgIHRvIGJlIGltcGxlbWVudGVkLlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QgYW5kIHRoZW4gYW4gaW50ZXJuYWwgZWxlbWVudCBiZSBmb2N1c2VkLlxuICpcbiAqIGBgYFxuICogYXN5bmMgc2V0Rm9jdXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAqICAgdGhpcy5pbnRlcm5hbEVsZW1lbnQ/LmZvY3VzKCk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNvbXBvbmVudEZvY3VzYWJsZShjb21wb25lbnQpIHtcbiAgYXdhaXQgY29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCk7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvcmNlVXBkYXRlKGNvbXBvbmVudCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHJlc29sdmUoKSkpO1xufVxuXG5leHBvcnQgeyBzZXRVcExvYWRhYmxlQ29tcG9uZW50IGFzIGEsIGNvbXBvbmVudExvYWRlZCBhcyBiLCBjb21wb25lbnRGb2N1c2FibGUgYXMgYywgc2V0Q29tcG9uZW50TG9hZGVkIGFzIHMgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHJlYWRUYXNrIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG5mdW5jdGlvbiBpc09wZW4oY29tcG9uZW50KSB7XG4gIHJldHVybiBcIm9wZW5lZFwiIGluIGNvbXBvbmVudCA/IGNvbXBvbmVudC5vcGVuZWQgOiBjb21wb25lbnQub3Blbjtcbn1cbmZ1bmN0aW9uIGVtaXRJbW1lZGlhdGVseShjb21wb25lbnQsIG5vbk9wZW5DbG9zZUNvbXBvbmVudCA9IGZhbHNlKSB7XG4gIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGlzT3Blbihjb21wb25lbnQpKVxuICAgID8gY29tcG9uZW50Lm9uQmVmb3JlT3BlbigpXG4gICAgOiBjb21wb25lbnQub25CZWZvcmVDbG9zZSgpO1xuICAobm9uT3BlbkNsb3NlQ29tcG9uZW50ID8gY29tcG9uZW50W2NvbXBvbmVudC50cmFuc2l0aW9uUHJvcF0gOiBpc09wZW4oY29tcG9uZW50KSlcbiAgICA/IGNvbXBvbmVudC5vbk9wZW4oKVxuICAgIDogY29tcG9uZW50Lm9uQ2xvc2UoKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIGRldGVybWluZSBnbG9iYWxseSBzZXQgdHJhbnNpdGlvbiBkdXJhdGlvbiBvbiB0aGUgZ2l2ZW4gb3BlblRyYW5zaXRpb25Qcm9wLCB3aGljaCBpcyBpbXBvcnRlZCBhbmQgc2V0IGluIHRoZSBAV2F0Y2goXCJvcGVuXCIpLlxuICogVXNlZCB0byBlbWl0IChiZWZvcmUpb3Blbi9jbG9zZSBldmVudHMgYm90aCBmb3Igd2hlbiB0aGUgb3BhY2l0eSB0cmFuc2l0aW9uIGlzIHByZXNlbnQgYW5kIHdoZW4gdGhlcmUgaXMgbm9uZSAodHJhbnNpdGlvbi1kdXJhdGlvbiBpcyBzZXQgdG8gMCkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50LCBPcGVuQ2xvc2VDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvb3BlbkNsb3NlQ29tcG9uZW50XCI7XG4gKlxuICogYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gKiAvLyBXaGVuIGNvbXBvbmVudCBpbml0aWFsbHkgcmVuZGVycywgaWYgYG9wZW5gIHdhcyBzZXQgd2UgbmVlZCB0byB0cmlnZ2VyIG9uIGxvYWQgYXMgd2F0Y2hlciBkb2Vzbid0IGZpcmUuXG4gKiBpZiAodGhpcy5vcGVuKSB7XG4gKiAgICBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqIEBXYXRjaChcIm9wZW5cIilcbiAqIGFzeW5jIHRvZ2dsZU1vZGFsKHZhbHVlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgICBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50IC0gT3BlbkNsb3NlQ29tcG9uZW50IHVzZXMgYG9wZW5gIHByb3AgdG8gZW1pdCAoYmVmb3JlKW9wZW4vY2xvc2UuXG4gKiBAcGFyYW0gbm9uT3BlbkNsb3NlQ29tcG9uZW50IC0gT3BlbkNsb3NlQ29tcG9uZW50IHVzZXMgYGV4cGFuZGVkYCBwcm9wIHRvIGVtaXQgKGJlZm9yZSlvcGVuL2Nsb3NlLlxuICovXG5mdW5jdGlvbiBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudChjb21wb25lbnQsIG5vbk9wZW5DbG9zZUNvbXBvbmVudCA9IGZhbHNlKSB7XG4gIHJlYWRUYXNrKCgpID0+IHtcbiAgICBpZiAoY29tcG9uZW50LnRyYW5zaXRpb25FbCkge1xuICAgICAgY29uc3QgeyB0cmFuc2l0aW9uRHVyYXRpb246IGFsbER1cmF0aW9ucywgdHJhbnNpdGlvblByb3BlcnR5OiBhbGxQcm9wcyB9ID0gZ2V0Q29tcHV0ZWRTdHlsZShjb21wb25lbnQudHJhbnNpdGlvbkVsKTtcbiAgICAgIGNvbnN0IGFsbFRyYW5zaXRpb25EdXJhdGlvbnNBcnJheSA9IGFsbER1cmF0aW9ucy5zcGxpdChcIixcIik7XG4gICAgICBjb25zdCBhbGxUcmFuc2l0aW9uUHJvcHNBcnJheSA9IGFsbFByb3BzLnNwbGl0KFwiLFwiKTtcbiAgICAgIGNvbnN0IG9wZW5UcmFuc2l0aW9uUHJvcEluZGV4ID0gYWxsVHJhbnNpdGlvblByb3BzQXJyYXkuaW5kZXhPZihjb21wb25lbnQub3BlblRyYW5zaXRpb25Qcm9wKTtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IGFsbFRyYW5zaXRpb25EdXJhdGlvbnNBcnJheVtvcGVuVHJhbnNpdGlvblByb3BJbmRleF0gPz9cbiAgICAgICAgLyogU2FmYXJpIHdpbGwgaGF2ZSBhIHNpbmdsZSB0cmFuc2l0aW9uIHZhbHVlIGlmIG11bHRpcGxlIHByb3BzIHNoYXJlIGl0LFxuICAgICAgICBzbyB3ZSBmYWxsIGJhY2sgdG8gaXQgaWYgdGhlcmUncyBubyBtYXRjaGluZyBwcm9wIGR1cmF0aW9uICovXG4gICAgICAgIGFsbFRyYW5zaXRpb25EdXJhdGlvbnNBcnJheVswXTtcbiAgICAgIGlmICh0cmFuc2l0aW9uRHVyYXRpb24gPT09IFwiMHNcIikge1xuICAgICAgICBlbWl0SW1tZWRpYXRlbHkoY29tcG9uZW50LCBub25PcGVuQ2xvc2VDb21wb25lbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBmYWxsYmFja1RpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uc3RhcnRcIiwgb25TdGFydCk7XG4gICAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgb25FbmRPckNhbmNlbCk7XG4gICAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25jYW5jZWxcIiwgb25FbmRPckNhbmNlbCk7XG4gICAgICAgIGVtaXRJbW1lZGlhdGVseShjb21wb25lbnQsIG5vbk9wZW5DbG9zZUNvbXBvbmVudCk7XG4gICAgICB9LCBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKiAxMDAwKTtcbiAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25zdGFydFwiLCBvblN0YXJ0KTtcbiAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgb25FbmRPckNhbmNlbCk7XG4gICAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uY2FuY2VsXCIsIG9uRW5kT3JDYW5jZWwpO1xuICAgICAgZnVuY3Rpb24gb25TdGFydChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQucHJvcGVydHlOYW1lID09PSBjb21wb25lbnQub3BlblRyYW5zaXRpb25Qcm9wICYmIGV2ZW50LnRhcmdldCA9PT0gY29tcG9uZW50LnRyYW5zaXRpb25FbCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChmYWxsYmFja1RpbWVvdXRJZCk7XG4gICAgICAgICAgY29tcG9uZW50LnRyYW5zaXRpb25FbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbnN0YXJ0XCIsIG9uU3RhcnQpO1xuICAgICAgICAgIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGlzT3Blbihjb21wb25lbnQpKVxuICAgICAgICAgICAgPyBjb21wb25lbnQub25CZWZvcmVPcGVuKClcbiAgICAgICAgICAgIDogY29tcG9uZW50Lm9uQmVmb3JlQ2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gb25FbmRPckNhbmNlbChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQucHJvcGVydHlOYW1lID09PSBjb21wb25lbnQub3BlblRyYW5zaXRpb25Qcm9wICYmIGV2ZW50LnRhcmdldCA9PT0gY29tcG9uZW50LnRyYW5zaXRpb25FbCkge1xuICAgICAgICAgIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGlzT3Blbihjb21wb25lbnQpKVxuICAgICAgICAgICAgPyBjb21wb25lbnQub25PcGVuKClcbiAgICAgICAgICAgIDogY29tcG9uZW50Lm9uQ2xvc2UoKTtcbiAgICAgICAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIG9uRW5kT3JDYW5jZWwpO1xuICAgICAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25jYW5jZWxcIiwgb25FbmRPckNhbmNlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudCBhcyBvIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG52YXIgS2luZEljb25zO1xuKGZ1bmN0aW9uIChLaW5kSWNvbnMpIHtcbiAgS2luZEljb25zW1wiYnJhbmRcIl0gPSBcImxpZ2h0YnVsYlwiO1xuICBLaW5kSWNvbnNbXCJkYW5nZXJcIl0gPSBcImV4Y2xhbWF0aW9uTWFya1RyaWFuZ2xlXCI7XG4gIEtpbmRJY29uc1tcImluZm9cIl0gPSBcImluZm9ybWF0aW9uXCI7XG4gIEtpbmRJY29uc1tcInN1Y2Nlc3NcIl0gPSBcImNoZWNrQ2lyY2xlXCI7XG4gIEtpbmRJY29uc1tcIndhcm5pbmdcIl0gPSBcImV4Y2xhbWF0aW9uTWFya1RyaWFuZ2xlXCI7XG59KShLaW5kSWNvbnMgfHwgKEtpbmRJY29ucyA9IHt9KSk7XG5cbmV4cG9ydCB7IEtpbmRJY29ucyBhcyBLIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBCdWlsZCwgZ2V0QXNzZXRQYXRoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTdXBwb3J0ZWRMb2NhbGUgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5cbmNvbnN0IGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZSA9IHt9O1xuYXN5bmMgZnVuY3Rpb24gZ2V0TWVzc2FnZUJ1bmRsZShsYW5nLCBjb21wb25lbnQpIHtcbiAgY29uc3Qga2V5ID0gYCR7Y29tcG9uZW50fV8ke2xhbmd9YDtcbiAgaWYgKGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xuICB9XG4gIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldID0gZmV0Y2goZ2V0QXNzZXRQYXRoKGAuL2Fzc2V0cy8ke2NvbXBvbmVudH0vdDluL21lc3NhZ2VzXyR7bGFuZ30uanNvbmApKVxuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgfSlcbiAgICAuY2F0Y2goKCkgPT4gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpKTtcbiAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xufVxuZnVuY3Rpb24gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY291bGQgbm90IGZldGNoIGNvbXBvbmVudCBtZXNzYWdlIGJ1bmRsZVwiKTtcbn1cbmZ1bmN0aW9uIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5tZXNzYWdlcyA9IHtcbiAgICAuLi5jb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzLFxuICAgIC4uLmNvbXBvbmVudC5tZXNzYWdlT3ZlcnJpZGVzLFxuICB9O1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCB0aGUgbWVzc2FnZXMgdXNlZCBieSB0aGUgY29tcG9uZW50LiBJdCBzaG91bGQgYmUgYXdhaXRlZCBpbiB0aGUgYGNvbXBvbmVudFdpbGxMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldFVwTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgY29tcG9uZW50LmVmZmVjdGl2ZUxvY2FsZSk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIGNvbnN0IHsgZWwgfSA9IGNvbXBvbmVudDtcbiAgY29uc3QgdGFnID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBjb21wb25lbnROYW1lID0gdGFnLnJlcGxhY2UoXCJjYWxjaXRlLVwiLCBcIlwiKTtcbiAgcmV0dXJuIGdldE1lc3NhZ2VCdW5kbGUoZ2V0U3VwcG9ydGVkTG9jYWxlKGxhbmcsIFwidDluXCIpLCBjb21wb25lbnROYW1lKTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IG11c3QgYmUgc2V0IHVwIGZvciB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZSBpdHMgZGVmYXVsdCBtZXNzYWdlIGJ1bmRsZSBpZiB0aGUgbG9jYWxlIGNoYW5nZXMuXG4gKlxuICogSXQgY2FuIGJlIHNldCB1cCBpbiAqKmVpdGhlcioqIG9mIHRoZSBmb2xsb3dpbmcgd2F5czpcbiAqXG4gKiAxLiBjYWxsZWQgZnJvbSBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBvbkxvY2FsZUNoYW5nZWAgbWV0aG9kIG9yXG4gKiAyLiBjYWxsZWQgZnJvbSBhIHdhdGNoZXIgY29uZmlndXJlZCB0byB3YXRjaCBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBlZmZlY3RpdmVMb2NhbGVgIHByb3BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gbGFuZ1xuICovXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpIHtcbiAgY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyA9IGF3YWl0IGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKTtcbiAgbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiAqKk5vdGUqKjogdGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBjb25uZWN0TG9jYWxpemVkYCBtZXRob2QuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0TWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5vbk1lc3NhZ2VzQ2hhbmdlID0gZGVmYXVsdE9uTWVzc2FnZXNDaGFuZ2U7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSB0ZWFycyBkb3duIGludGVybmFscyBmb3IgbWVzc2FnZXMgc3VwcG9ydC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICBtZXJnZU1lc3NhZ2VzKHRoaXMpO1xufVxuXG5leHBvcnQgeyBjb25uZWN0TWVzc2FnZXMgYXMgYywgZGlzY29ubmVjdE1lc3NhZ2VzIGFzIGQsIHNldFVwTWVzc2FnZXMgYXMgcywgdXBkYXRlTWVzc2FnZXMgYXMgdSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9