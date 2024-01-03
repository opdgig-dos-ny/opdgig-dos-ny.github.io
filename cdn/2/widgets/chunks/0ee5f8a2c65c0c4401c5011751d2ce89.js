"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_avatar_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/avatar.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/avatar.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Avatar),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@esri/calcite-components/dist/components/utils.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */





/**
 * Convert a string to a valid hex by hashing its contents
 * and using the hash as a seed for three distinct color values
 *
 * @param str
 */
function stringToHex(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let hex = "#";
  for (let j = 0; j < 3; j++) {
    const value = (hash >> (j * 8)) & 0xff;
    hex += ("00" + value.toString(16)).substr(-2);
  }
  return hex;
}
/**
 * Find the hue of a color given the separate RGB color channels
 *
 * @param rgb
 */
function rgbToHue(rgb) {
  let { r, g, b } = rgb;
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  if (max === min) {
    return 0;
  }
  let hue = (max + min) / 2;
  switch (max) {
    case r:
      hue = (g - b) / delta + (g < b ? 6 : 0);
      break;
    case g:
      hue = (b - r) / delta + 2;
      break;
    case b:
      hue = (r - g) / delta + 4;
      break;
  }
  return Math.round(hue * 60);
}
/**
 * For a hex color, find the hue
 *
 * @param hex {string} - form of "#------"
 */
function hexToHue(hex) {
  return rgbToHue((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.g)(hex));
}

const avatarCss = ":host{display:inline-block;overflow:hidden;border-radius:50%}:host([scale=s]){block-size:1.5rem;inline-size:1.5rem;font-size:var(--calcite-font-size--3)}:host([scale=m]){block-size:2rem;inline-size:2rem;font-size:var(--calcite-font-size--2)}:host([scale=l]){block-size:2.75rem;inline-size:2.75rem;font-size:var(--calcite-font-size-0)}.icon{display:flex}.background{display:flex;block-size:100%;inline-size:100%;align-items:center;justify-content:center;border-radius:50%}.initials{font-weight:var(--calcite-font-weight-bold);text-transform:uppercase;color:var(--calcite-ui-text-2)}.thumbnail{block-size:100%;inline-size:100%;border-radius:50%}:host([hidden]){display:none}[hidden]{display:none}";

const Avatar = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.scale = "m";
    this.thumbnail = undefined;
    this.fullName = undefined;
    this.username = undefined;
    this.userId = undefined;
    this.label = undefined;
    this.thumbnailFailedToLoad = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    return this.determineContent();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  determineContent() {
    if (this.thumbnail && !this.thumbnailFailedToLoad) {
      return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("img", { alt: this.label || "", class: "thumbnail", onError: () => (this.thumbnailFailedToLoad = true), src: this.thumbnail }));
    }
    const initials = this.generateInitials();
    const backgroundColor = this.generateFillColor();
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("span", { "aria-label": this.label || this.fullName, class: "background", role: "figure", style: { backgroundColor } }, initials ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("span", { "aria-hidden": "true", class: "initials" }, initials)) : ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("calcite-icon", { class: "icon", icon: "user", scale: this.scale }))));
  }
  /**
   * Generate a valid background color that is consistent and unique to this user
   */
  generateFillColor() {
    const { userId, username, fullName, el } = this;
    const theme = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.r)(el);
    const id = userId && `#${userId.substr(userId.length - 6)}`;
    const name = username || fullName || "";
    const hex = id && (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.i)(id) ? id : stringToHex(name);
    // if there is not unique information, or an invalid hex is produced, return a default
    if ((!userId && !name) || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.i)(hex)) {
      return `var(--calcite-ui-foreground-2)`;
    }
    const hue = hexToHue(hex);
    const l = theme === "dark" ? 20 : 90;
    return `hsl(${hue}, 60%, ${l}%)`;
  }
  /**
   * Use fullName or username to generate initials
   */
  generateInitials() {
    const { fullName, username } = this;
    if (fullName) {
      return fullName
        .trim()
        .split(" ")
        .map((name) => name.substring(0, 1))
        .join("");
    }
    else if (username) {
      return username.substring(0, 2);
    }
    return false;
  }
  get el() { return this; }
  static get style() { return avatarCss; }
}, [1, "calcite-avatar", {
    "scale": [513],
    "thumbnail": [513],
    "fullName": [513, "full-name"],
    "username": [513],
    "userId": [513, "user-id"],
    "label": [1],
    "thumbnailFailedToLoad": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-avatar", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-avatar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Avatar);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_2__.d)();
      }
      break;
  } });
}
defineCustomElement();




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




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/utils.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/utils.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CSSColorMode),
/* harmony export */   a: () => (/* binding */ alphaCompatible),
/* harmony export */   b: () => (/* binding */ alphaToOpacity),
/* harmony export */   c: () => (/* binding */ colorEqual),
/* harmony export */   d: () => (/* binding */ normalizeAlpha),
/* harmony export */   e: () => (/* binding */ normalizeColor),
/* harmony export */   f: () => (/* binding */ toAlphaMode),
/* harmony export */   g: () => (/* binding */ hexToRGB),
/* harmony export */   h: () => (/* binding */ hexify),
/* harmony export */   i: () => (/* binding */ isValidHex),
/* harmony export */   j: () => (/* binding */ isLonghandHex),
/* harmony export */   k: () => (/* binding */ hexChar),
/* harmony export */   n: () => (/* binding */ normalizeHex),
/* harmony export */   o: () => (/* binding */ opacityToAlpha),
/* harmony export */   p: () => (/* binding */ parseMode),
/* harmony export */   r: () => (/* binding */ rgbToHex),
/* harmony export */   t: () => (/* binding */ toNonAlphaMode)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const hexChar = /^[0-9A-F]$/i;
const shorthandHex = /^#[0-9A-F]{3}$/i;
const longhandHex = /^#[0-9A-F]{6}$/i;
const shorthandHexWithAlpha = /^#[0-9A-F]{4}$/i;
const longhandHexWithAlpha = /^#[0-9A-F]{8}$/i;
const alphaToOpacity = (alpha) => Number((alpha * 100).toFixed());
const opacityToAlpha = (opacity) => Number((opacity / 100).toFixed(2));
function isValidHex(hex, hasAlpha = false) {
  return isShorthandHex(hex, hasAlpha) || isLonghandHex(hex, hasAlpha);
}
function evaluateHex(hex, length, pattern) {
  if (!hex) {
    return false;
  }
  return hex.length === length && pattern.test(hex);
}
function isShorthandHex(hex, hasAlpha = false) {
  const hexLength = hasAlpha ? 5 : 4;
  const hexPattern = hasAlpha ? shorthandHexWithAlpha : shorthandHex;
  return evaluateHex(hex, hexLength, hexPattern);
}
function isLonghandHex(hex, hasAlpha = false) {
  const hexLength = hasAlpha ? 9 : 7;
  const hexPattern = hasAlpha ? longhandHexWithAlpha : longhandHex;
  return evaluateHex(hex, hexLength, hexPattern);
}
function normalizeHex(hex, hasAlpha = false, convertFromHexToHexa = false) {
  hex = hex.toLowerCase();
  if (!hex.startsWith("#")) {
    hex = `#${hex}`;
  }
  if (isShorthandHex(hex, hasAlpha)) {
    return rgbToHex(hexToRGB(hex, hasAlpha));
  }
  if (hasAlpha && convertFromHexToHexa && isValidHex(hex, false /* we only care about RGB hex for conversion */)) {
    const isShorthand = isShorthandHex(hex, false);
    return rgbToHex(hexToRGB(`${hex}${isShorthand ? "f" : "ff"}`, true));
  }
  return hex;
}
function hexify(color, hasAlpha = false) {
  return hasAlpha ? color.hexa() : color.hex();
}
function rgbToHex(color) {
  const { r, g, b } = color;
  const rChars = numToHex(r);
  const gChars = numToHex(g);
  const bChars = numToHex(b);
  const alphaChars = "a" in color ? numToHex(color.a * 255) : "";
  return `#${rChars}${gChars}${bChars}${alphaChars}`.toLowerCase();
}
function numToHex(num) {
  return num.toString(16).padStart(2, "0");
}
function normalizeAlpha(colorObject) {
  const normalized = { ...colorObject, a: colorObject.alpha ?? 1 /* Color() will omit alpha if 1 */ };
  delete normalized.alpha;
  return normalized;
}
function normalizeColor(alphaColorObject) {
  const normalized = { ...alphaColorObject, alpha: alphaColorObject.a ?? 1 };
  delete normalized.a;
  return normalized;
}
function hexToRGB(hex, hasAlpha = false) {
  if (!isValidHex(hex, hasAlpha)) {
    return null;
  }
  hex = hex.replace("#", "");
  let r;
  let g;
  let b;
  let a;
  const isShorthand = hex.length === 3 || hex.length === 4;
  if (isShorthand) {
    const [first, second, third, fourth] = hex.split("");
    r = parseInt(`${first}${first}`, 16);
    g = parseInt(`${second}${second}`, 16);
    b = parseInt(`${third}${third}`, 16);
    a = parseInt(`${fourth}${fourth}`, 16) / 255;
  }
  else {
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
    a = parseInt(hex.slice(6, 8), 16) / 255;
  }
  return isNaN(a) ? { r, g, b } : { r, g, b, a };
}
// these utils allow users to pass enum values as strings without having to access the enum
// based on the approach suggested by https://github.com/microsoft/TypeScript/issues/17690#issuecomment-321365759,
const enumify = (x) => x;
const CSSColorMode = enumify({
  HEX: "hex",
  HEXA: "hexa",
  RGB_CSS: "rgb-css",
  RGBA_CSS: "rgba-css",
  HSL_CSS: "hsl-css",
  HSLA_CSS: "hsla-css",
});
const ObjectColorMode = enumify({
  RGB: "rgb",
  RGBA: "rgba",
  HSL: "hsl",
  HSLA: "hsla",
  HSV: "hsv",
  HSVA: "hsva",
});
function parseMode(colorValue) {
  if (typeof colorValue === "string") {
    if (colorValue.startsWith("#")) {
      const { length } = colorValue;
      if (length === 4 || length === 7) {
        return CSSColorMode.HEX;
      }
      if (length === 5 || length === 9) {
        return CSSColorMode.HEXA;
      }
    }
    if (colorValue.startsWith("rgba(")) {
      return CSSColorMode.RGBA_CSS;
    }
    if (colorValue.startsWith("rgb(")) {
      return CSSColorMode.RGB_CSS;
    }
    if (colorValue.startsWith("hsl(")) {
      return CSSColorMode.HSL_CSS;
    }
    if (colorValue.startsWith("hsla(")) {
      return CSSColorMode.HSLA_CSS;
    }
  }
  if (typeof colorValue === "object") {
    if (hasChannels(colorValue, "r", "g", "b")) {
      return hasChannels(colorValue, "a") ? ObjectColorMode.RGBA : ObjectColorMode.RGB;
    }
    if (hasChannels(colorValue, "h", "s", "l")) {
      return hasChannels(colorValue, "a") ? ObjectColorMode.HSLA : ObjectColorMode.HSL;
    }
    if (hasChannels(colorValue, "h", "s", "v")) {
      return hasChannels(colorValue, "a") ? ObjectColorMode.HSVA : ObjectColorMode.HSV;
    }
  }
  return null;
}
function hasChannels(colorObject, ...channels) {
  return channels.every((channel) => channel && colorObject && `${channel}` in colorObject);
}
function colorEqual(value1, value2) {
  return value1?.rgb().array().toString() === value2?.rgb().array().toString();
}
function alphaCompatible(mode) {
  return (mode === CSSColorMode.HEXA ||
    mode === CSSColorMode.RGBA_CSS ||
    mode === CSSColorMode.HSLA_CSS ||
    mode === ObjectColorMode.RGBA ||
    mode === ObjectColorMode.HSLA ||
    mode === ObjectColorMode.HSVA);
}
function toAlphaMode(mode) {
  const alphaMode = mode === CSSColorMode.HEX
    ? CSSColorMode.HEXA
    : mode === CSSColorMode.RGB_CSS
      ? CSSColorMode.RGBA_CSS
      : mode === CSSColorMode.HSL_CSS
        ? CSSColorMode.HSLA_CSS
        : mode === ObjectColorMode.RGB
          ? ObjectColorMode.RGBA
          : mode === ObjectColorMode.HSL
            ? ObjectColorMode.HSLA
            : mode === ObjectColorMode.HSV
              ? ObjectColorMode.HSVA
              : mode;
  return alphaMode;
}
function toNonAlphaMode(mode) {
  const nonAlphaMode = mode === CSSColorMode.HEXA
    ? CSSColorMode.HEX
    : mode === CSSColorMode.RGBA_CSS
      ? CSSColorMode.RGB_CSS
      : mode === CSSColorMode.HSLA_CSS
        ? CSSColorMode.HSL_CSS
        : mode === ObjectColorMode.RGBA
          ? ObjectColorMode.RGB
          : mode === ObjectColorMode.HSLA
            ? ObjectColorMode.HSL
            : mode === ObjectColorMode.HSVA
              ? ObjectColorMode.HSV
              : mode;
  return nonAlphaMode;
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMGVlNWY4YTJjNjVjMGM0NDAxYzUwMTE3NTFkMmNlODkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0RjtBQUNoRDtBQUNnQjtBQUNMOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxVQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBLGtCQUFrQiw0Q0FBUTtBQUMxQjs7QUFFQSx5QkFBeUIscUJBQXFCLGdCQUFnQixrQkFBa0IsaUJBQWlCLGtCQUFrQixtQkFBbUIsc0NBQXNDLGlCQUFpQixnQkFBZ0IsaUJBQWlCLHNDQUFzQyxpQkFBaUIsbUJBQW1CLG9CQUFvQixxQ0FBcUMsTUFBTSxhQUFhLFlBQVksYUFBYSxnQkFBZ0IsaUJBQWlCLG1CQUFtQix1QkFBdUIsa0JBQWtCLFVBQVUsNENBQTRDLHlCQUF5QiwrQkFBK0IsV0FBVyxnQkFBZ0IsaUJBQWlCLGtCQUFrQixnQkFBZ0IsYUFBYSxTQUFTLGFBQWE7O0FBRXpzQiw2QkFBNkIsMEZBQWtCLGVBQWUsK0VBQVc7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnVSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9hdmF0YXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2ljb24uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL29ic2VydmVycy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgaCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IHIgYXMgZ2V0TW9kZU5hbWUgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBnIGFzIGhleFRvUkdCLCBpIGFzIGlzVmFsaWRIZXggfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQxIH0gZnJvbSAnLi9pY29uLmpzJztcblxuLyoqXG4gKiBDb252ZXJ0IGEgc3RyaW5nIHRvIGEgdmFsaWQgaGV4IGJ5IGhhc2hpbmcgaXRzIGNvbnRlbnRzXG4gKiBhbmQgdXNpbmcgdGhlIGhhc2ggYXMgYSBzZWVkIGZvciB0aHJlZSBkaXN0aW5jdCBjb2xvciB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0gc3RyXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvSGV4KHN0cikge1xuICBsZXQgaGFzaCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgaGFzaCA9IHN0ci5jaGFyQ29kZUF0KGkpICsgKChoYXNoIDw8IDUpIC0gaGFzaCk7XG4gIH1cbiAgbGV0IGhleCA9IFwiI1wiO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgIGNvbnN0IHZhbHVlID0gKGhhc2ggPj4gKGogKiA4KSkgJiAweGZmO1xuICAgIGhleCArPSAoXCIwMFwiICsgdmFsdWUudG9TdHJpbmcoMTYpKS5zdWJzdHIoLTIpO1xuICB9XG4gIHJldHVybiBoZXg7XG59XG4vKipcbiAqIEZpbmQgdGhlIGh1ZSBvZiBhIGNvbG9yIGdpdmVuIHRoZSBzZXBhcmF0ZSBSR0IgY29sb3IgY2hhbm5lbHNcbiAqXG4gKiBAcGFyYW0gcmdiXG4gKi9cbmZ1bmN0aW9uIHJnYlRvSHVlKHJnYikge1xuICBsZXQgeyByLCBnLCBiIH0gPSByZ2I7XG4gIHIgLz0gMjU1O1xuICBnIC89IDI1NTtcbiAgYiAvPSAyNTU7XG4gIGNvbnN0IG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICBjb25zdCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgY29uc3QgZGVsdGEgPSBtYXggLSBtaW47XG4gIGlmIChtYXggPT09IG1pbikge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGxldCBodWUgPSAobWF4ICsgbWluKSAvIDI7XG4gIHN3aXRjaCAobWF4KSB7XG4gICAgY2FzZSByOlxuICAgICAgaHVlID0gKGcgLSBiKSAvIGRlbHRhICsgKGcgPCBiID8gNiA6IDApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBnOlxuICAgICAgaHVlID0gKGIgLSByKSAvIGRlbHRhICsgMjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgYjpcbiAgICAgIGh1ZSA9IChyIC0gZykgLyBkZWx0YSArIDQ7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gTWF0aC5yb3VuZChodWUgKiA2MCk7XG59XG4vKipcbiAqIEZvciBhIGhleCBjb2xvciwgZmluZCB0aGUgaHVlXG4gKlxuICogQHBhcmFtIGhleCB7c3RyaW5nfSAtIGZvcm0gb2YgXCIjLS0tLS0tXCJcbiAqL1xuZnVuY3Rpb24gaGV4VG9IdWUoaGV4KSB7XG4gIHJldHVybiByZ2JUb0h1ZShoZXhUb1JHQihoZXgpKTtcbn1cblxuY29uc3QgYXZhdGFyQ3NzID0gXCI6aG9zdHtkaXNwbGF5OmlubGluZS1ibG9jaztvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLXJhZGl1czo1MCV9Omhvc3QoW3NjYWxlPXNdKXtibG9jay1zaXplOjEuNXJlbTtpbmxpbmUtc2l6ZToxLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0zKX06aG9zdChbc2NhbGU9bV0pe2Jsb2NrLXNpemU6MnJlbTtpbmxpbmUtc2l6ZToycmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMil9Omhvc3QoW3NjYWxlPWxdKXtibG9jay1zaXplOjIuNzVyZW07aW5saW5lLXNpemU6Mi43NXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCl9Lmljb257ZGlzcGxheTpmbGV4fS5iYWNrZ3JvdW5ke2Rpc3BsYXk6ZmxleDtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtib3JkZXItcmFkaXVzOjUwJX0uaW5pdGlhbHN7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ib2xkKTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS50aHVtYm5haWx7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7Ym9yZGVyLXJhZGl1czo1MCV9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IEF2YXRhciA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMudGh1bWJuYWlsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZnVsbE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy51c2VybmFtZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnVzZXJJZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudGh1bWJuYWlsRmFpbGVkVG9Mb2FkID0gZmFsc2U7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmRldGVybWluZUNvbnRlbnQoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkZXRlcm1pbmVDb250ZW50KCkge1xuICAgIGlmICh0aGlzLnRodW1ibmFpbCAmJiAhdGhpcy50aHVtYm5haWxGYWlsZWRUb0xvYWQpIHtcbiAgICAgIHJldHVybiAoaChcImltZ1wiLCB7IGFsdDogdGhpcy5sYWJlbCB8fCBcIlwiLCBjbGFzczogXCJ0aHVtYm5haWxcIiwgb25FcnJvcjogKCkgPT4gKHRoaXMudGh1bWJuYWlsRmFpbGVkVG9Mb2FkID0gdHJ1ZSksIHNyYzogdGhpcy50aHVtYm5haWwgfSkpO1xuICAgIH1cbiAgICBjb25zdCBpbml0aWFscyA9IHRoaXMuZ2VuZXJhdGVJbml0aWFscygpO1xuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IHRoaXMuZ2VuZXJhdGVGaWxsQ29sb3IoKTtcbiAgICByZXR1cm4gKGgoXCJzcGFuXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubGFiZWwgfHwgdGhpcy5mdWxsTmFtZSwgY2xhc3M6IFwiYmFja2dyb3VuZFwiLCByb2xlOiBcImZpZ3VyZVwiLCBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3IgfSB9LCBpbml0aWFscyA/IChoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBcImluaXRpYWxzXCIgfSwgaW5pdGlhbHMpKSA6IChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IFwiaWNvblwiLCBpY29uOiBcInVzZXJcIiwgc2NhbGU6IHRoaXMuc2NhbGUgfSkpKSk7XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGEgdmFsaWQgYmFja2dyb3VuZCBjb2xvciB0aGF0IGlzIGNvbnNpc3RlbnQgYW5kIHVuaXF1ZSB0byB0aGlzIHVzZXJcbiAgICovXG4gIGdlbmVyYXRlRmlsbENvbG9yKCkge1xuICAgIGNvbnN0IHsgdXNlcklkLCB1c2VybmFtZSwgZnVsbE5hbWUsIGVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IHRoZW1lID0gZ2V0TW9kZU5hbWUoZWwpO1xuICAgIGNvbnN0IGlkID0gdXNlcklkICYmIGAjJHt1c2VySWQuc3Vic3RyKHVzZXJJZC5sZW5ndGggLSA2KX1gO1xuICAgIGNvbnN0IG5hbWUgPSB1c2VybmFtZSB8fCBmdWxsTmFtZSB8fCBcIlwiO1xuICAgIGNvbnN0IGhleCA9IGlkICYmIGlzVmFsaWRIZXgoaWQpID8gaWQgOiBzdHJpbmdUb0hleChuYW1lKTtcbiAgICAvLyBpZiB0aGVyZSBpcyBub3QgdW5pcXVlIGluZm9ybWF0aW9uLCBvciBhbiBpbnZhbGlkIGhleCBpcyBwcm9kdWNlZCwgcmV0dXJuIGEgZGVmYXVsdFxuICAgIGlmICgoIXVzZXJJZCAmJiAhbmFtZSkgfHwgIWlzVmFsaWRIZXgoaGV4KSkge1xuICAgICAgcmV0dXJuIGB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMilgO1xuICAgIH1cbiAgICBjb25zdCBodWUgPSBoZXhUb0h1ZShoZXgpO1xuICAgIGNvbnN0IGwgPSB0aGVtZSA9PT0gXCJkYXJrXCIgPyAyMCA6IDkwO1xuICAgIHJldHVybiBgaHNsKCR7aHVlfSwgNjAlLCAke2x9JSlgO1xuICB9XG4gIC8qKlxuICAgKiBVc2UgZnVsbE5hbWUgb3IgdXNlcm5hbWUgdG8gZ2VuZXJhdGUgaW5pdGlhbHNcbiAgICovXG4gIGdlbmVyYXRlSW5pdGlhbHMoKSB7XG4gICAgY29uc3QgeyBmdWxsTmFtZSwgdXNlcm5hbWUgfSA9IHRoaXM7XG4gICAgaWYgKGZ1bGxOYW1lKSB7XG4gICAgICByZXR1cm4gZnVsbE5hbWVcbiAgICAgICAgLnRyaW0oKVxuICAgICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAgIC5tYXAoKG5hbWUpID0+IG5hbWUuc3Vic3RyaW5nKDAsIDEpKVxuICAgICAgICAuam9pbihcIlwiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodXNlcm5hbWUpIHtcbiAgICAgIHJldHVybiB1c2VybmFtZS5zdWJzdHJpbmcoMCwgMik7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBhdmF0YXJDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtYXZhdGFyXCIsIHtcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwidGh1bWJuYWlsXCI6IFs1MTNdLFxuICAgIFwiZnVsbE5hbWVcIjogWzUxMywgXCJmdWxsLW5hbWVcIl0sXG4gICAgXCJ1c2VybmFtZVwiOiBbNTEzXSxcbiAgICBcInVzZXJJZFwiOiBbNTEzLCBcInVzZXItaWRcIl0sXG4gICAgXCJsYWJlbFwiOiBbMV0sXG4gICAgXCJ0aHVtYm5haWxGYWlsZWRUb0xvYWRcIjogWzMyXVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWF2YXRhclwiLCBcImNhbGNpdGUtaWNvblwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1hdmF0YXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBBdmF0YXIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgQXZhdGFyIGFzIEEsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZ2V0QXNzZXRQYXRoLCBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBoLCBIb3N0LCBCdWlsZCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0RWxlbWVudERpciwgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBpY29uOiBcImljb25cIixcbiAgZmxpcFJ0bDogXCJmbGlwLXJ0bFwiLFxufTtcblxuLyoqXG4gKiBJY29uIGRhdGEgY2FjaGUuXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBpY29uQ2FjaGUgPSB7fTtcbi8qKlxuICogSWNvbiByZXF1ZXN0IGNhY2hlLlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgcmVxdWVzdENhY2hlID0ge307XG5jb25zdCBzY2FsZVRvUHggPSB7XG4gIHM6IDE2LFxuICBtOiAyNCxcbiAgbDogMzIsXG59O1xuYXN5bmMgZnVuY3Rpb24gZmV0Y2hJY29uKHsgaWNvbiwgc2NhbGUgfSkge1xuICBjb25zdCBzaXplID0gc2NhbGVUb1B4W3NjYWxlXTtcbiAgY29uc3QgbmFtZSA9IG5vcm1hbGl6ZUljb25OYW1lKGljb24pO1xuICBjb25zdCBmaWxsZWQgPSBuYW1lLmNoYXJBdChuYW1lLmxlbmd0aCAtIDEpID09PSBcIkZcIjtcbiAgY29uc3QgaWNvbk5hbWUgPSBmaWxsZWQgPyBuYW1lLnN1YnN0cmluZygwLCBuYW1lLmxlbmd0aCAtIDEpIDogbmFtZTtcbiAgY29uc3QgaWQgPSBgJHtpY29uTmFtZX0ke3NpemV9JHtmaWxsZWQgPyBcIkZcIiA6IFwiXCJ9YDtcbiAgaWYgKGljb25DYWNoZVtpZF0pIHtcbiAgICByZXR1cm4gaWNvbkNhY2hlW2lkXTtcbiAgfVxuICBpZiAoIXJlcXVlc3RDYWNoZVtpZF0pIHtcbiAgICByZXF1ZXN0Q2FjaGVbaWRdID0gZmV0Y2goZ2V0QXNzZXRQYXRoKGAuL2Fzc2V0cy9pY29uLyR7aWR9Lmpzb25gKSlcbiAgICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGBcIiR7aWR9XCIgaXMgbm90IGEgdmFsaWQgY2FsY2l0ZS11aS1pY29uIG5hbWVgKTtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IHBhdGggPSBhd2FpdCByZXF1ZXN0Q2FjaGVbaWRdO1xuICBpY29uQ2FjaGVbaWRdID0gcGF0aDtcbiAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgaWNvbiBuYW1lIHRvIG1hdGNoIHRoZSBwYXRoIGRhdGEgbW9kdWxlIGV4cG9ydHMuXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBAcGFyYW0gbmFtZSDigJMgYW4gaWNvbiBuYW1lIHRoYXQgY2FuIGJlIGVpdGhlciBrZWJhYiBvciBjYW1lbC1jYXNlZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplSWNvbk5hbWUobmFtZSkge1xuICBjb25zdCBudW1iZXJMZWFkaW5nTmFtZSA9ICFpc05hTihOdW1iZXIobmFtZS5jaGFyQXQoMCkpKTtcbiAgY29uc3QgcGFydHMgPSBuYW1lLnNwbGl0KFwiLVwiKTtcbiAgY29uc3Qga2ViYWJDYXNlZCA9IHBhcnRzLmxlbmd0aCA+IDA7XG4gIGlmIChrZWJhYkNhc2VkKSB7XG4gICAgY29uc3QgZmlyc3ROb25EaWdpdEluUGFydFBhdHRlcm4gPSAvW2Etel0vaTtcbiAgICBuYW1lID0gcGFydHNcbiAgICAgIC5tYXAoKHBhcnQsIHBhcnRJbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHBhcnQucmVwbGFjZShmaXJzdE5vbkRpZ2l0SW5QYXJ0UGF0dGVybiwgZnVuY3Rpb24gcmVwbGFjZXIobWF0Y2gsIG9mZnNldCkge1xuICAgICAgICBjb25zdCBpc0ZpcnN0Q2hhckluTmFtZSA9IHBhcnRJbmRleCA9PT0gMCAmJiBvZmZzZXQgPT09IDA7XG4gICAgICAgIGlmIChpc0ZpcnN0Q2hhckluTmFtZSkge1xuICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0Y2gudG9VcHBlckNhc2UoKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgICAuam9pbihcIlwiKTtcbiAgfVxuICByZXR1cm4gbnVtYmVyTGVhZGluZ05hbWUgPyBgaSR7bmFtZX1gIDogbmFtZTtcbn1cblxuY29uc3QgaWNvbkNzcyA9IFwiOmhvc3R7ZGlzcGxheTppbmxpbmUtZmxleDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWljb24tY29sb3IpfTpob3N0KFtzY2FsZT1zXSl7aW5saW5lLXNpemU6MTZweDtibG9jay1zaXplOjE2cHg7bWluLWlubGluZS1zaXplOjE2cHg7bWluLWJsb2NrLXNpemU6MTZweH06aG9zdChbc2NhbGU9bV0pe2lubGluZS1zaXplOjI0cHg7YmxvY2stc2l6ZToyNHB4O21pbi1pbmxpbmUtc2l6ZToyNHB4O21pbi1ibG9jay1zaXplOjI0cHh9Omhvc3QoW3NjYWxlPWxdKXtpbmxpbmUtc2l6ZTozMnB4O2Jsb2NrLXNpemU6MzJweDttaW4taW5saW5lLXNpemU6MzJweDttaW4tYmxvY2stc2l6ZTozMnB4fS5mbGlwLXJ0bHt0cmFuc2Zvcm06c2NhbGVYKC0xKX0uc3Zne2Rpc3BsYXk6YmxvY2t9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IEljb24gPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuaWNvbiA9IG51bGw7XG4gICAgdGhpcy5mbGlwUnRsID0gZmFsc2U7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMudGV4dExhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGF0aERhdGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy53YWl0VW50aWxWaXNpYmxlKCgpID0+IHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICB0aGlzLmxvYWRJY29uUGF0aERhdGEoKTtcbiAgICB9KTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG51bGw7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5sb2FkSWNvblBhdGhEYXRhKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWwsIGZsaXBSdGwsIHBhdGhEYXRhLCBzY2FsZSwgdGV4dExhYmVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIoZWwpO1xuICAgIGNvbnN0IHNpemUgPSBzY2FsZVRvUHhbc2NhbGVdO1xuICAgIGNvbnN0IHNlbWFudGljID0gISF0ZXh0TGFiZWw7XG4gICAgY29uc3QgcGF0aHMgPSBbXS5jb25jYXQocGF0aERhdGEgfHwgXCJcIik7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWhpZGRlblwiOiB0b0FyaWFCb29sZWFuKCFzZW1hbnRpYyksIFwiYXJpYS1sYWJlbFwiOiBzZW1hbnRpYyA/IHRleHRMYWJlbCA6IG51bGwsIHJvbGU6IHNlbWFudGljID8gXCJpbWdcIiA6IG51bGwgfSwgaChcInN2Z1wiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuZmxpcFJ0bF06IGRpciA9PT0gXCJydGxcIiAmJiBmbGlwUnRsLFxuICAgICAgICBzdmc6IHRydWUsXG4gICAgICB9LCBmaWxsOiBcImN1cnJlbnRDb2xvclwiLCBoZWlnaHQ6IFwiMTAwJVwiLCB2aWV3Qm94OiBgMCAwICR7c2l6ZX0gJHtzaXplfWAsIHdpZHRoOiBcIjEwMCVcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9LCBwYXRocy5tYXAoKHBhdGgpID0+IHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiID8gKGgoXCJwYXRoXCIsIHsgZDogcGF0aCB9KSkgOiAoaChcInBhdGhcIiwgeyBkOiBwYXRoLmQsIG9wYWNpdHk6IFwib3BhY2l0eVwiIGluIHBhdGggPyBwYXRoLm9wYWNpdHkgOiAxIH0pKSkpKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYXN5bmMgbG9hZEljb25QYXRoRGF0YSgpIHtcbiAgICBjb25zdCB7IGljb24sIHNjYWxlLCB2aXNpYmxlIH0gPSB0aGlzO1xuICAgIGlmICghQnVpbGQuaXNCcm93c2VyIHx8ICFpY29uIHx8ICF2aXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhdGhEYXRhID0gYXdhaXQgZmV0Y2hJY29uKHsgaWNvbiwgc2NhbGUgfSk7XG4gICAgLy8gV2hpbGUgdGhlIGZldGNoSWNvbiBtZXRob2QgaXMgYXdhaXRpbmcgcmVzcG9uc2UsIHRoZSBpY29uIHJlcXVlc3RlZCBjYW4gY2hhbmdlLiBUaGlzIGNoZWNrIGlzIHRvIHZlcmlmeSB0aGUgcmVzcG9uc2UgcmVjZWl2ZWQgYmVsb25ncyB0byB0aGUgY3VycmVudCBpY29uLlxuICAgIGlmIChpY29uICE9PSB0aGlzLmljb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wYXRoRGF0YSA9IHBhdGhEYXRhO1xuICB9XG4gIHdhaXRVbnRpbFZpc2libGUoY2FsbGJhY2spIHtcbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJpbnRlcnNlY3Rpb25cIiwgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG51bGw7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgeyByb290TWFyZ2luOiBcIjUwcHhcIiB9KTtcbiAgICBpZiAoIXRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiaWNvblwiOiBbXCJsb2FkSWNvblBhdGhEYXRhXCJdLFxuICAgIFwic2NhbGVcIjogW1wibG9hZEljb25QYXRoRGF0YVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBpY29uQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWljb25cIiwge1xuICAgIFwiaWNvblwiOiBbNTEzXSxcbiAgICBcImZsaXBSdGxcIjogWzUxNiwgXCJmbGlwLXJ0bFwiXSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwidGV4dExhYmVsXCI6IFsxLCBcInRleHQtbGFiZWxcIl0sXG4gICAgXCJwYXRoRGF0YVwiOiBbMzJdLFxuICAgIFwidmlzaWJsZVwiOiBbMzJdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtaWNvblwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgSWNvbik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgSWNvbiBhcyBJLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IEJ1aWxkIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG4vKipcbiAqIFRoaXMgdXRpbGl0eSBlbnN1cmVzIG9ic2VydmVycyBhcmUgY3JlYXRlZCBvbmx5IGZvciBicm93c2VyIGNvbnRleHRzLlxuICpcbiAqIEBwYXJhbSB0eXBlIC0gdGhlIHR5cGUgb2Ygb2JzZXJ2ZXIgdG8gY3JlYXRlXG4gKiBAcGFyYW0gY2FsbGJhY2sgLSB0aGUgb2JzZXJ2ZXIgY2FsbGJhY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gdGhlIG9ic2VydmVyIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGNvbnN0IE9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIodHlwZSk7XG4gIHJldHVybiBuZXcgT2JzZXJ2ZXIoY2FsbGJhY2ssIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIodHlwZSkge1xuICAvLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2RvbS9pc3N1ZXMvMTI2I2lzc3VlY29tbWVudC0xMDQ5ODE0OTQ4XG4gIGNsYXNzIEV4dGVuZGVkTXV0YXRpb25PYnNlcnZlciBleHRlbmRzIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjaykge1xuICAgICAgc3VwZXIoY2FsbGJhY2spO1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5ID0gW107XG4gICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuICAgIG9ic2VydmUodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkucHVzaCh7IHRhcmdldCwgb3B0aW9ucyB9KTtcbiAgICAgIHJldHVybiBzdXBlci5vYnNlcnZlKHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHVub2JzZXJ2ZSh0YXJnZXQpIHtcbiAgICAgIGNvbnN0IG5ld09ic2VydmVkRW50cmllcyA9IHRoaXMub2JzZXJ2ZWRFbnRyeS5maWx0ZXIoKG9ic2VydmVkKSA9PiBvYnNlcnZlZC50YXJnZXQgIT09IHRhcmdldCk7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkgPSBbXTtcbiAgICAgIHRoaXMuY2FsbGJhY2soc3VwZXIudGFrZVJlY29yZHMoKSwgdGhpcyk7XG4gICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAgIG5ld09ic2VydmVkRW50cmllcy5mb3JFYWNoKChvYnNlcnZlZCkgPT4gdGhpcy5vYnNlcnZlKG9ic2VydmVkLnRhcmdldCwgb2JzZXJ2ZWQub3B0aW9ucykpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHR5cGUgPT09IFwiaW50ZXJzZWN0aW9uXCJcbiAgICAgID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyXG4gICAgICA6IHR5cGUgPT09IFwibXV0YXRpb25cIlxuICAgICAgICA/IEV4dGVuZGVkTXV0YXRpb25PYnNlcnZlclxuICAgICAgICA6IHdpbmRvdy5SZXNpemVPYnNlcnZlcik7XG4gIH0pKCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU9ic2VydmVyIGFzIGMgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmNvbnN0IGhleENoYXIgPSAvXlswLTlBLUZdJC9pO1xuY29uc3Qgc2hvcnRoYW5kSGV4ID0gL14jWzAtOUEtRl17M30kL2k7XG5jb25zdCBsb25naGFuZEhleCA9IC9eI1swLTlBLUZdezZ9JC9pO1xuY29uc3Qgc2hvcnRoYW5kSGV4V2l0aEFscGhhID0gL14jWzAtOUEtRl17NH0kL2k7XG5jb25zdCBsb25naGFuZEhleFdpdGhBbHBoYSA9IC9eI1swLTlBLUZdezh9JC9pO1xuY29uc3QgYWxwaGFUb09wYWNpdHkgPSAoYWxwaGEpID0+IE51bWJlcigoYWxwaGEgKiAxMDApLnRvRml4ZWQoKSk7XG5jb25zdCBvcGFjaXR5VG9BbHBoYSA9IChvcGFjaXR5KSA9PiBOdW1iZXIoKG9wYWNpdHkgLyAxMDApLnRvRml4ZWQoMikpO1xuZnVuY3Rpb24gaXNWYWxpZEhleChoZXgsIGhhc0FscGhhID0gZmFsc2UpIHtcbiAgcmV0dXJuIGlzU2hvcnRoYW5kSGV4KGhleCwgaGFzQWxwaGEpIHx8IGlzTG9uZ2hhbmRIZXgoaGV4LCBoYXNBbHBoYSk7XG59XG5mdW5jdGlvbiBldmFsdWF0ZUhleChoZXgsIGxlbmd0aCwgcGF0dGVybikge1xuICBpZiAoIWhleCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gbGVuZ3RoICYmIHBhdHRlcm4udGVzdChoZXgpO1xufVxuZnVuY3Rpb24gaXNTaG9ydGhhbmRIZXgoaGV4LCBoYXNBbHBoYSA9IGZhbHNlKSB7XG4gIGNvbnN0IGhleExlbmd0aCA9IGhhc0FscGhhID8gNSA6IDQ7XG4gIGNvbnN0IGhleFBhdHRlcm4gPSBoYXNBbHBoYSA/IHNob3J0aGFuZEhleFdpdGhBbHBoYSA6IHNob3J0aGFuZEhleDtcbiAgcmV0dXJuIGV2YWx1YXRlSGV4KGhleCwgaGV4TGVuZ3RoLCBoZXhQYXR0ZXJuKTtcbn1cbmZ1bmN0aW9uIGlzTG9uZ2hhbmRIZXgoaGV4LCBoYXNBbHBoYSA9IGZhbHNlKSB7XG4gIGNvbnN0IGhleExlbmd0aCA9IGhhc0FscGhhID8gOSA6IDc7XG4gIGNvbnN0IGhleFBhdHRlcm4gPSBoYXNBbHBoYSA/IGxvbmdoYW5kSGV4V2l0aEFscGhhIDogbG9uZ2hhbmRIZXg7XG4gIHJldHVybiBldmFsdWF0ZUhleChoZXgsIGhleExlbmd0aCwgaGV4UGF0dGVybik7XG59XG5mdW5jdGlvbiBub3JtYWxpemVIZXgoaGV4LCBoYXNBbHBoYSA9IGZhbHNlLCBjb252ZXJ0RnJvbUhleFRvSGV4YSA9IGZhbHNlKSB7XG4gIGhleCA9IGhleC50b0xvd2VyQ2FzZSgpO1xuICBpZiAoIWhleC5zdGFydHNXaXRoKFwiI1wiKSkge1xuICAgIGhleCA9IGAjJHtoZXh9YDtcbiAgfVxuICBpZiAoaXNTaG9ydGhhbmRIZXgoaGV4LCBoYXNBbHBoYSkpIHtcbiAgICByZXR1cm4gcmdiVG9IZXgoaGV4VG9SR0IoaGV4LCBoYXNBbHBoYSkpO1xuICB9XG4gIGlmIChoYXNBbHBoYSAmJiBjb252ZXJ0RnJvbUhleFRvSGV4YSAmJiBpc1ZhbGlkSGV4KGhleCwgZmFsc2UgLyogd2Ugb25seSBjYXJlIGFib3V0IFJHQiBoZXggZm9yIGNvbnZlcnNpb24gKi8pKSB7XG4gICAgY29uc3QgaXNTaG9ydGhhbmQgPSBpc1Nob3J0aGFuZEhleChoZXgsIGZhbHNlKTtcbiAgICByZXR1cm4gcmdiVG9IZXgoaGV4VG9SR0IoYCR7aGV4fSR7aXNTaG9ydGhhbmQgPyBcImZcIiA6IFwiZmZcIn1gLCB0cnVlKSk7XG4gIH1cbiAgcmV0dXJuIGhleDtcbn1cbmZ1bmN0aW9uIGhleGlmeShjb2xvciwgaGFzQWxwaGEgPSBmYWxzZSkge1xuICByZXR1cm4gaGFzQWxwaGEgPyBjb2xvci5oZXhhKCkgOiBjb2xvci5oZXgoKTtcbn1cbmZ1bmN0aW9uIHJnYlRvSGV4KGNvbG9yKSB7XG4gIGNvbnN0IHsgciwgZywgYiB9ID0gY29sb3I7XG4gIGNvbnN0IHJDaGFycyA9IG51bVRvSGV4KHIpO1xuICBjb25zdCBnQ2hhcnMgPSBudW1Ub0hleChnKTtcbiAgY29uc3QgYkNoYXJzID0gbnVtVG9IZXgoYik7XG4gIGNvbnN0IGFscGhhQ2hhcnMgPSBcImFcIiBpbiBjb2xvciA/IG51bVRvSGV4KGNvbG9yLmEgKiAyNTUpIDogXCJcIjtcbiAgcmV0dXJuIGAjJHtyQ2hhcnN9JHtnQ2hhcnN9JHtiQ2hhcnN9JHthbHBoYUNoYXJzfWAudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIG51bVRvSGV4KG51bSkge1xuICByZXR1cm4gbnVtLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCBcIjBcIik7XG59XG5mdW5jdGlvbiBub3JtYWxpemVBbHBoYShjb2xvck9iamVjdCkge1xuICBjb25zdCBub3JtYWxpemVkID0geyAuLi5jb2xvck9iamVjdCwgYTogY29sb3JPYmplY3QuYWxwaGEgPz8gMSAvKiBDb2xvcigpIHdpbGwgb21pdCBhbHBoYSBpZiAxICovIH07XG4gIGRlbGV0ZSBub3JtYWxpemVkLmFscGhhO1xuICByZXR1cm4gbm9ybWFsaXplZDtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNvbG9yKGFscGhhQ29sb3JPYmplY3QpIHtcbiAgY29uc3Qgbm9ybWFsaXplZCA9IHsgLi4uYWxwaGFDb2xvck9iamVjdCwgYWxwaGE6IGFscGhhQ29sb3JPYmplY3QuYSA/PyAxIH07XG4gIGRlbGV0ZSBub3JtYWxpemVkLmE7XG4gIHJldHVybiBub3JtYWxpemVkO1xufVxuZnVuY3Rpb24gaGV4VG9SR0IoaGV4LCBoYXNBbHBoYSA9IGZhbHNlKSB7XG4gIGlmICghaXNWYWxpZEhleChoZXgsIGhhc0FscGhhKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGhleCA9IGhleC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgbGV0IHI7XG4gIGxldCBnO1xuICBsZXQgYjtcbiAgbGV0IGE7XG4gIGNvbnN0IGlzU2hvcnRoYW5kID0gaGV4Lmxlbmd0aCA9PT0gMyB8fCBoZXgubGVuZ3RoID09PSA0O1xuICBpZiAoaXNTaG9ydGhhbmQpIHtcbiAgICBjb25zdCBbZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aF0gPSBoZXguc3BsaXQoXCJcIik7XG4gICAgciA9IHBhcnNlSW50KGAke2ZpcnN0fSR7Zmlyc3R9YCwgMTYpO1xuICAgIGcgPSBwYXJzZUludChgJHtzZWNvbmR9JHtzZWNvbmR9YCwgMTYpO1xuICAgIGIgPSBwYXJzZUludChgJHt0aGlyZH0ke3RoaXJkfWAsIDE2KTtcbiAgICBhID0gcGFyc2VJbnQoYCR7Zm91cnRofSR7Zm91cnRofWAsIDE2KSAvIDI1NTtcbiAgfVxuICBlbHNlIHtcbiAgICByID0gcGFyc2VJbnQoaGV4LnNsaWNlKDAsIDIpLCAxNik7XG4gICAgZyA9IHBhcnNlSW50KGhleC5zbGljZSgyLCA0KSwgMTYpO1xuICAgIGIgPSBwYXJzZUludChoZXguc2xpY2UoNCwgNiksIDE2KTtcbiAgICBhID0gcGFyc2VJbnQoaGV4LnNsaWNlKDYsIDgpLCAxNikgLyAyNTU7XG4gIH1cbiAgcmV0dXJuIGlzTmFOKGEpID8geyByLCBnLCBiIH0gOiB7IHIsIGcsIGIsIGEgfTtcbn1cbi8vIHRoZXNlIHV0aWxzIGFsbG93IHVzZXJzIHRvIHBhc3MgZW51bSB2YWx1ZXMgYXMgc3RyaW5ncyB3aXRob3V0IGhhdmluZyB0byBhY2Nlc3MgdGhlIGVudW1cbi8vIGJhc2VkIG9uIHRoZSBhcHByb2FjaCBzdWdnZXN0ZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xNzY5MCNpc3N1ZWNvbW1lbnQtMzIxMzY1NzU5LFxuY29uc3QgZW51bWlmeSA9ICh4KSA9PiB4O1xuY29uc3QgQ1NTQ29sb3JNb2RlID0gZW51bWlmeSh7XG4gIEhFWDogXCJoZXhcIixcbiAgSEVYQTogXCJoZXhhXCIsXG4gIFJHQl9DU1M6IFwicmdiLWNzc1wiLFxuICBSR0JBX0NTUzogXCJyZ2JhLWNzc1wiLFxuICBIU0xfQ1NTOiBcImhzbC1jc3NcIixcbiAgSFNMQV9DU1M6IFwiaHNsYS1jc3NcIixcbn0pO1xuY29uc3QgT2JqZWN0Q29sb3JNb2RlID0gZW51bWlmeSh7XG4gIFJHQjogXCJyZ2JcIixcbiAgUkdCQTogXCJyZ2JhXCIsXG4gIEhTTDogXCJoc2xcIixcbiAgSFNMQTogXCJoc2xhXCIsXG4gIEhTVjogXCJoc3ZcIixcbiAgSFNWQTogXCJoc3ZhXCIsXG59KTtcbmZ1bmN0aW9uIHBhcnNlTW9kZShjb2xvclZhbHVlKSB7XG4gIGlmICh0eXBlb2YgY29sb3JWYWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGlmIChjb2xvclZhbHVlLnN0YXJ0c1dpdGgoXCIjXCIpKSB7XG4gICAgICBjb25zdCB7IGxlbmd0aCB9ID0gY29sb3JWYWx1ZTtcbiAgICAgIGlmIChsZW5ndGggPT09IDQgfHwgbGVuZ3RoID09PSA3KSB7XG4gICAgICAgIHJldHVybiBDU1NDb2xvck1vZGUuSEVYO1xuICAgICAgfVxuICAgICAgaWYgKGxlbmd0aCA9PT0gNSB8fCBsZW5ndGggPT09IDkpIHtcbiAgICAgICAgcmV0dXJuIENTU0NvbG9yTW9kZS5IRVhBO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29sb3JWYWx1ZS5zdGFydHNXaXRoKFwicmdiYShcIikpIHtcbiAgICAgIHJldHVybiBDU1NDb2xvck1vZGUuUkdCQV9DU1M7XG4gICAgfVxuICAgIGlmIChjb2xvclZhbHVlLnN0YXJ0c1dpdGgoXCJyZ2IoXCIpKSB7XG4gICAgICByZXR1cm4gQ1NTQ29sb3JNb2RlLlJHQl9DU1M7XG4gICAgfVxuICAgIGlmIChjb2xvclZhbHVlLnN0YXJ0c1dpdGgoXCJoc2woXCIpKSB7XG4gICAgICByZXR1cm4gQ1NTQ29sb3JNb2RlLkhTTF9DU1M7XG4gICAgfVxuICAgIGlmIChjb2xvclZhbHVlLnN0YXJ0c1dpdGgoXCJoc2xhKFwiKSkge1xuICAgICAgcmV0dXJuIENTU0NvbG9yTW9kZS5IU0xBX0NTUztcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiBjb2xvclZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgaWYgKGhhc0NoYW5uZWxzKGNvbG9yVmFsdWUsIFwiclwiLCBcImdcIiwgXCJiXCIpKSB7XG4gICAgICByZXR1cm4gaGFzQ2hhbm5lbHMoY29sb3JWYWx1ZSwgXCJhXCIpID8gT2JqZWN0Q29sb3JNb2RlLlJHQkEgOiBPYmplY3RDb2xvck1vZGUuUkdCO1xuICAgIH1cbiAgICBpZiAoaGFzQ2hhbm5lbHMoY29sb3JWYWx1ZSwgXCJoXCIsIFwic1wiLCBcImxcIikpIHtcbiAgICAgIHJldHVybiBoYXNDaGFubmVscyhjb2xvclZhbHVlLCBcImFcIikgPyBPYmplY3RDb2xvck1vZGUuSFNMQSA6IE9iamVjdENvbG9yTW9kZS5IU0w7XG4gICAgfVxuICAgIGlmIChoYXNDaGFubmVscyhjb2xvclZhbHVlLCBcImhcIiwgXCJzXCIsIFwidlwiKSkge1xuICAgICAgcmV0dXJuIGhhc0NoYW5uZWxzKGNvbG9yVmFsdWUsIFwiYVwiKSA/IE9iamVjdENvbG9yTW9kZS5IU1ZBIDogT2JqZWN0Q29sb3JNb2RlLkhTVjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBoYXNDaGFubmVscyhjb2xvck9iamVjdCwgLi4uY2hhbm5lbHMpIHtcbiAgcmV0dXJuIGNoYW5uZWxzLmV2ZXJ5KChjaGFubmVsKSA9PiBjaGFubmVsICYmIGNvbG9yT2JqZWN0ICYmIGAke2NoYW5uZWx9YCBpbiBjb2xvck9iamVjdCk7XG59XG5mdW5jdGlvbiBjb2xvckVxdWFsKHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiB2YWx1ZTE/LnJnYigpLmFycmF5KCkudG9TdHJpbmcoKSA9PT0gdmFsdWUyPy5yZ2IoKS5hcnJheSgpLnRvU3RyaW5nKCk7XG59XG5mdW5jdGlvbiBhbHBoYUNvbXBhdGlibGUobW9kZSkge1xuICByZXR1cm4gKG1vZGUgPT09IENTU0NvbG9yTW9kZS5IRVhBIHx8XG4gICAgbW9kZSA9PT0gQ1NTQ29sb3JNb2RlLlJHQkFfQ1NTIHx8XG4gICAgbW9kZSA9PT0gQ1NTQ29sb3JNb2RlLkhTTEFfQ1NTIHx8XG4gICAgbW9kZSA9PT0gT2JqZWN0Q29sb3JNb2RlLlJHQkEgfHxcbiAgICBtb2RlID09PSBPYmplY3RDb2xvck1vZGUuSFNMQSB8fFxuICAgIG1vZGUgPT09IE9iamVjdENvbG9yTW9kZS5IU1ZBKTtcbn1cbmZ1bmN0aW9uIHRvQWxwaGFNb2RlKG1vZGUpIHtcbiAgY29uc3QgYWxwaGFNb2RlID0gbW9kZSA9PT0gQ1NTQ29sb3JNb2RlLkhFWFxuICAgID8gQ1NTQ29sb3JNb2RlLkhFWEFcbiAgICA6IG1vZGUgPT09IENTU0NvbG9yTW9kZS5SR0JfQ1NTXG4gICAgICA/IENTU0NvbG9yTW9kZS5SR0JBX0NTU1xuICAgICAgOiBtb2RlID09PSBDU1NDb2xvck1vZGUuSFNMX0NTU1xuICAgICAgICA/IENTU0NvbG9yTW9kZS5IU0xBX0NTU1xuICAgICAgICA6IG1vZGUgPT09IE9iamVjdENvbG9yTW9kZS5SR0JcbiAgICAgICAgICA/IE9iamVjdENvbG9yTW9kZS5SR0JBXG4gICAgICAgICAgOiBtb2RlID09PSBPYmplY3RDb2xvck1vZGUuSFNMXG4gICAgICAgICAgICA/IE9iamVjdENvbG9yTW9kZS5IU0xBXG4gICAgICAgICAgICA6IG1vZGUgPT09IE9iamVjdENvbG9yTW9kZS5IU1ZcbiAgICAgICAgICAgICAgPyBPYmplY3RDb2xvck1vZGUuSFNWQVxuICAgICAgICAgICAgICA6IG1vZGU7XG4gIHJldHVybiBhbHBoYU1vZGU7XG59XG5mdW5jdGlvbiB0b05vbkFscGhhTW9kZShtb2RlKSB7XG4gIGNvbnN0IG5vbkFscGhhTW9kZSA9IG1vZGUgPT09IENTU0NvbG9yTW9kZS5IRVhBXG4gICAgPyBDU1NDb2xvck1vZGUuSEVYXG4gICAgOiBtb2RlID09PSBDU1NDb2xvck1vZGUuUkdCQV9DU1NcbiAgICAgID8gQ1NTQ29sb3JNb2RlLlJHQl9DU1NcbiAgICAgIDogbW9kZSA9PT0gQ1NTQ29sb3JNb2RlLkhTTEFfQ1NTXG4gICAgICAgID8gQ1NTQ29sb3JNb2RlLkhTTF9DU1NcbiAgICAgICAgOiBtb2RlID09PSBPYmplY3RDb2xvck1vZGUuUkdCQVxuICAgICAgICAgID8gT2JqZWN0Q29sb3JNb2RlLlJHQlxuICAgICAgICAgIDogbW9kZSA9PT0gT2JqZWN0Q29sb3JNb2RlLkhTTEFcbiAgICAgICAgICAgID8gT2JqZWN0Q29sb3JNb2RlLkhTTFxuICAgICAgICAgICAgOiBtb2RlID09PSBPYmplY3RDb2xvck1vZGUuSFNWQVxuICAgICAgICAgICAgICA/IE9iamVjdENvbG9yTW9kZS5IU1ZcbiAgICAgICAgICAgICAgOiBtb2RlO1xuICByZXR1cm4gbm9uQWxwaGFNb2RlO1xufVxuXG5leHBvcnQgeyBDU1NDb2xvck1vZGUgYXMgQywgYWxwaGFDb21wYXRpYmxlIGFzIGEsIGFscGhhVG9PcGFjaXR5IGFzIGIsIGNvbG9yRXF1YWwgYXMgYywgbm9ybWFsaXplQWxwaGEgYXMgZCwgbm9ybWFsaXplQ29sb3IgYXMgZSwgdG9BbHBoYU1vZGUgYXMgZiwgaGV4VG9SR0IgYXMgZywgaGV4aWZ5IGFzIGgsIGlzVmFsaWRIZXggYXMgaSwgaXNMb25naGFuZEhleCBhcyBqLCBoZXhDaGFyIGFzIGssIG5vcm1hbGl6ZUhleCBhcyBuLCBvcGFjaXR5VG9BbHBoYSBhcyBvLCBwYXJzZU1vZGUgYXMgcCwgcmdiVG9IZXggYXMgciwgdG9Ob25BbHBoYU1vZGUgYXMgdCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9