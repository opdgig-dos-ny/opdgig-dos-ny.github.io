"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_action_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/action.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/action.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Action),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */












const CSS = {
  button: "button",
  buttonTextVisible: "button--text-visible",
  buttonCompact: "button--compact",
  indicatorText: "indicator-text",
  iconContainer: "icon-container",
  slotContainer: "slot-container",
  slotContainerHidden: "slot-container--hidden",
  textContainer: "text-container",
  textContainerVisible: "text-container--visible",
  indicatorWithIcon: "indicator-with-icon",
  indicatorWithoutIcon: "indicator-without-icon",
};
const SLOTS = {
  tooltip: "tooltip",
};

const actionCss = ":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent;--calcite-action-indicator-color:var(--calcite-ui-brand)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.button{position:relative;margin:0px;display:flex;inline-size:auto;cursor:pointer;align-items:center;justify-content:flex-start;border-style:none;background-color:var(--calcite-ui-foreground-1);fill:var(--calcite-ui-text-3);font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-3);outline-color:transparent;text-align:unset;flex:1 0 auto}.button:hover{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}.button:focus{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.button:active{background-color:var(--calcite-ui-foreground-3)}.button .icon-container{pointer-events:none;margin:0px;display:flex;align-items:center;justify-content:center;min-inline-size:1rem;min-block-size:1rem}.button .text-container{margin:0px;inline-size:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem;opacity:0;transition-property:opacity;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:margin;transition-property:inline-size}.button .text-container--visible{inline-size:auto;flex:1 1 auto;opacity:1}:host([scale=s]) .button{padding-inline:0.5rem;padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=s]) .button--text-visible .icon-container{margin-inline-end:0.5rem}:host([scale=m]) .button{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=m]) .button--text-visible .icon-container{margin-inline-end:0.75rem}:host([scale=l]) .button{padding:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=l]) .button--text-visible .icon-container{margin-inline-end:1rem}:host([alignment=center]) .button{justify-content:center}:host([alignment=end]) .button{justify-content:flex-end}:host([alignment=center]) .button .text-container--visible,:host([alignment=end]) .button .text-container--visible{flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-inline:0px}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{inline-size:100%}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus,:host([active][loading]) .button{background-color:var(--calcite-ui-foreground-3);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}:host([active]) .button:active{background-color:var(--calcite-ui-foreground-1)}:host([appearance=transparent]) .button{background-color:transparent}:host([appearance=transparent][active]) .button,:host([appearance=transparent]) .button:hover,:host([appearance=transparent]) .button:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent]) .button:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][disabled]) .button{background-color:transparent}:host([loading][appearance=solid]) .button,:host([loading][appearance=solid]) .button:hover,:host([loading][appearance=solid]) .button:focus{background-color:var(--calcite-ui-foreground-1)}:host([loading][appearance=solid]) .button .text-container,:host([loading][appearance=solid]) .button:hover .text-container,:host([loading][appearance=solid]) .button:focus .text-container{opacity:var(--calcite-ui-opacity-disabled)}:host([loading]) calcite-loader[inline]{color:var(--calcite-ui-text-3);margin-inline-end:0px}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;background-color:var(--calcite-ui-foreground-1);opacity:var(--calcite-ui-opacity-disabled)}:host([disabled][active]) .button,:host([disabled][active]) .button:hover,:host([disabled][active]) .button:focus{background-color:var(--calcite-ui-foreground-3);opacity:var(--calcite-ui-opacity-disabled)}:host([appearance=transparent]) .button{background-color:transparent;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.indicator-with-icon{position:relative}.indicator-with-icon::after{content:\"\";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;inset-block-end:-0.275rem;inset-inline-end:-0.275rem;background-color:var(--calcite-action-indicator-color)}.indicator-without-icon{margin-inline:0.25rem;inline-size:1rem;position:relative}.indicator-without-icon::after{content:\"\";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;inset-block-end:-0.275rem;inset-inline-end:-0.275rem;background-color:var(--calcite-action-indicator-color)}.indicator-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}";

const Action = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_5__.c)("mutation", () => (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.forceUpdate)(this));
    this.guid = `calcite-action-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_1__.g)()}`;
    this.indicatorId = `${this.guid}-indicator`;
    this.buttonId = `${this.guid}-button`;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleTooltipSlotChange = (event) => {
      const tooltips = event.target
        .assignedElements({
        flatten: true,
      })
        .filter((el) => el?.matches("calcite-tooltip"));
      const tooltip = tooltips[0];
      if (tooltip) {
        tooltip.referenceElement = this.buttonEl;
      }
    };
    this.active = false;
    this.alignment = undefined;
    this.appearance = "solid";
    this.compact = false;
    this.disabled = false;
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.indicator = false;
    this.label = undefined;
    this.loading = false;
    this.scale = "m";
    this.text = undefined;
    this.textEnabled = false;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = "";
    this.defaultMessages = undefined;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.a)(this);
    if (_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.Build.isBrowser) {
      await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.s)(this);
    }
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    this.mutationObserver?.disconnect();
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    this.buttonEl?.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderTextContainer() {
    const { text, textEnabled } = this;
    const textContainerClasses = {
      [CSS.textContainer]: true,
      [CSS.textContainerVisible]: textEnabled,
    };
    return text ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: textContainerClasses, key: "text-container" }, text)) : null;
  }
  renderIndicatorText() {
    const { indicator, messages, indicatorId, buttonId } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { "aria-labelledby": buttonId, "aria-live": "polite", class: CSS.indicatorText, id: indicatorId, role: "region" }, indicator ? messages.indicator : null));
  }
  renderIconContainer() {
    const { loading, icon, scale, el, iconFlipRtl, indicator } = this;
    const loaderScale = scale === "l" ? "l" : "m";
    const calciteLoaderNode = loading ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("calcite-loader", { inline: true, label: this.messages.loading, scale: loaderScale })) : null;
    const calciteIconNode = icon ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("calcite-icon", { class: { [CSS.indicatorWithIcon]: indicator }, flipRtl: iconFlipRtl, icon: icon, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.scale) })) : null;
    const iconNode = calciteLoaderNode || calciteIconNode;
    const hasIconToDisplay = iconNode || el.children?.length;
    const slotContainerNode = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: {
        [CSS.slotContainer]: true,
        [CSS.slotContainerHidden]: loading,
      } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", null)));
    return hasIconToDisplay ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { "aria-hidden": "true", class: CSS.iconContainer, key: "icon-container" }, iconNode, slotContainerNode)) : null;
  }
  render() {
    const { active, compact, disabled, icon, loading, textEnabled, label, text, indicator, indicatorId, buttonId, messages, } = this;
    const ariaLabel = `${label || text}${indicator ? ` (${messages.indicator})` : ""}`;
    const buttonClasses = {
      [CSS.button]: true,
      [CSS.buttonTextVisible]: textEnabled,
      [CSS.buttonCompact]: compact,
    };
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.Host, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("button", { "aria-busy": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(loading), "aria-controls": indicator ? indicatorId : null, "aria-disabled": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(disabled), "aria-label": ariaLabel, "aria-pressed": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(active), class: buttonClasses, disabled: disabled, id: buttonId,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (buttonEl) => (this.buttonEl = buttonEl) }, this.renderIconContainer(), this.renderTextContainer(), !icon && indicator && (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: CSS.indicatorWithoutIcon, key: "indicator-no-icon" })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", { name: SLOTS.tooltip, onSlotchange: this.handleTooltipSlotChange }), this.renderIndicatorText()));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return actionCss; }
}, [1, "calcite-action", {
    "active": [516],
    "alignment": [513],
    "appearance": [513],
    "compact": [516],
    "disabled": [516],
    "icon": [1],
    "iconFlipRtl": [516, "icon-flip-rtl"],
    "indicator": [516],
    "label": [1],
    "loading": [516],
    "scale": [513],
    "text": [1],
    "textEnabled": [516, "text-enabled"],
    "messages": [1040],
    "messageOverrides": [1040],
    "effectiveLocale": [32],
    "defaultMessages": [32],
    "setFocus": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-action", "calcite-icon", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-action":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Action);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_9__.d)();
      }
      break;
  } });
}
defineCustomElement();




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

/***/ "./node_modules/@esri/calcite-components/dist/components/loader.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/loader.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ Loader),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const loaderCss = "@charset \"UTF-8\";@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-ui-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem)}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--2);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem}:host([no-padding]){padding-block:0px}:host{display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{position:absolute;display:block;text-align:center;color:var(--calcite-ui-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);line-height:0.25;transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.66 / var(--calcite-internal-duration-factor));animation-name:loader-clockwise}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear}@supports (display: grid){.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}}:host([type=determinate]){animation:none;stroke:var(--calcite-ui-border-3)}:host([type=determinate]) .loader__svgs{animation:none}:host([type=determinate]) .loader__svg--3{animation:none;stroke:var(--calcite-ui-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-ui-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 4.8 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-83.7757333333}100%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:-279.2524444444}}.loader__svg--2{stroke-dasharray:55.8504888889 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.4 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-97.7383555556}100%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:-279.2524444444}}.loader__svg--3{stroke-dasharray:13.9626222222 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 7.734 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-76.7944222222}100%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:-279.2524444444}}@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@keyframes loader-clockwise{100%{transform:rotate(360deg)}}:host([hidden]){display:none}[hidden]{display:none}";

const Loader = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.inline = false;
    this.label = undefined;
    this.scale = "m";
    this.type = undefined;
    this.value = 0;
    this.text = "";
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const { el, inline, label, scale, text, type, value } = this;
    const id = el.id || (0,_guid_js__WEBPACK_IMPORTED_MODULE_0__.g)();
    const radiusRatio = 0.45;
    const size = inline ? this.getInlineSize(scale) : this.getSize(scale);
    const radius = size * radiusRatio;
    const viewbox = `0 0 ${size} ${size}`;
    const isDeterminate = type === "determinate";
    const circumference = 2 * radius * Math.PI;
    const progress = (value / 100) * circumference;
    const remaining = circumference - progress;
    const valueNow = Math.floor(value);
    const hostAttributes = {
      "aria-valuenow": valueNow,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      complete: valueNow === 100,
    };
    const svgAttributes = { r: radius, cx: size / 2, cy: size / 2 };
    const determinateStyle = { "stroke-dasharray": `${progress} ${remaining}` };
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.Host, { "aria-label": label, id: id, role: "progressbar", ...(isDeterminate ? hostAttributes : {}) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: "loader__svgs" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg", { "aria-hidden": "true", class: "loader__svg loader__svg--1", viewBox: viewbox }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("circle", { ...svgAttributes })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg", { "aria-hidden": "true", class: "loader__svg loader__svg--2", viewBox: viewbox }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("circle", { ...svgAttributes })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg", { "aria-hidden": "true", class: "loader__svg loader__svg--3", viewBox: viewbox, ...(isDeterminate ? { style: determinateStyle } : {}) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("circle", { ...svgAttributes }))), text && (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: "loader__text" }, text), isDeterminate && (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: "loader__percentage" }, value)));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Return the proper sizes based on the scale property
   *
   * @param scale
   */
  getSize(scale) {
    return {
      s: 32,
      m: 56,
      l: 80,
    }[scale];
  }
  getInlineSize(scale) {
    return {
      s: 12,
      m: 16,
      l: 20,
    }[scale];
  }
  get el() { return this; }
  static get style() { return loaderCss; }
}, [1, "calcite-loader", {
    "inline": [516],
    "label": [1],
    "scale": [513],
    "type": [513],
    "value": [2],
    "text": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Loader);
      }
      break;
  } });
}
defineCustomElement();




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMWI4ZTg3MmQ0NWZlY2ZiNGZkOGY4MDNmNjU2MjdjM2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0g7QUFDeEU7QUFDUjtBQUM2RTtBQUNMO0FBQ2hDO0FBQ3pCO0FBQ0Y7QUFDK0Q7QUFDM0Q7QUFDRTs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLHNCQUFzQixnREFBZ0QsK0JBQStCLHNDQUFzQyxRQUFRLHNCQUFzQixrQkFBa0IsZUFBZSx5QkFBeUIsaUJBQWlCLDJDQUEyQyxtREFBbUQsb0JBQW9CLE1BQU0sYUFBYSw2QkFBNkIseURBQXlELHlHQUF5RyxVQUFVLFFBQVEsa0JBQWtCLFdBQVcsYUFBYSxpQkFBaUIsZUFBZSxtQkFBbUIsMkJBQTJCLGtCQUFrQixnREFBZ0QsOEJBQThCLHVDQUF1QyxzQ0FBc0MsaUJBQWlCLDhDQUE4QywrQkFBK0IsMEJBQTBCLGlCQUFpQixjQUFjLGNBQWMsZ0RBQWdELDhCQUE4QiwrQkFBK0IsY0FBYyxnREFBZ0QsOEJBQThCLCtCQUErQix5RUFBeUUscVBBQXFQLGVBQWUsZ0RBQWdELHdCQUF3QixvQkFBb0IsV0FBVyxhQUFhLG1CQUFtQix1QkFBdUIscUJBQXFCLG9CQUFvQix3QkFBd0IsV0FBVyxnQkFBZ0IsZ0JBQWdCLHVCQUF1QixtQkFBbUIsbUJBQW1CLFVBQVUsNEJBQTRCLDBCQUEwQix3REFBd0QsMkJBQTJCLGdDQUFnQyxpQ0FBaUMsaUJBQWlCLGNBQWMsVUFBVSx5QkFBeUIsc0JBQXNCLHNCQUFzQixzQ0FBc0MsaUJBQWlCLDhDQUE4Qyx1REFBdUQseUJBQXlCLHlCQUF5QixvQkFBb0Isc0JBQXNCLHNDQUFzQyxpQkFBaUIsOENBQThDLHVEQUF1RCwwQkFBMEIseUJBQXlCLGdC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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlFQUFLO0FBQ1o7QUFDQTtBQUNBLFVBQVUsS0FBSztBQUNmO0FBQ0E7QUFDQSwwQkFBMEIsNkNBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2FjdGlvbi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9pY29uLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9pbnRlcmFjdGl2ZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvbG9hZGVyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy90OW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgZm9yY2VVcGRhdGUsIEJ1aWxkLCBoLCBIb3N0IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgZyBhcyBndWlkIH0gZnJvbSAnLi9ndWlkLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLmpzJztcbmltcG9ydCB7IGEgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgcyBhcyBzZXRDb21wb25lbnRMb2FkZWQsIGMgYXMgY29tcG9uZW50Rm9jdXNhYmxlIH0gZnJvbSAnLi9sb2FkYWJsZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldEljb25TY2FsZSB9IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlTWVzc2FnZXMsIGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzIH0gZnJvbSAnLi90OW4uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL2ljb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDEgfSBmcm9tICcuL2xvYWRlci5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgYnV0dG9uOiBcImJ1dHRvblwiLFxuICBidXR0b25UZXh0VmlzaWJsZTogXCJidXR0b24tLXRleHQtdmlzaWJsZVwiLFxuICBidXR0b25Db21wYWN0OiBcImJ1dHRvbi0tY29tcGFjdFwiLFxuICBpbmRpY2F0b3JUZXh0OiBcImluZGljYXRvci10ZXh0XCIsXG4gIGljb25Db250YWluZXI6IFwiaWNvbi1jb250YWluZXJcIixcbiAgc2xvdENvbnRhaW5lcjogXCJzbG90LWNvbnRhaW5lclwiLFxuICBzbG90Q29udGFpbmVySGlkZGVuOiBcInNsb3QtY29udGFpbmVyLS1oaWRkZW5cIixcbiAgdGV4dENvbnRhaW5lcjogXCJ0ZXh0LWNvbnRhaW5lclwiLFxuICB0ZXh0Q29udGFpbmVyVmlzaWJsZTogXCJ0ZXh0LWNvbnRhaW5lci0tdmlzaWJsZVwiLFxuICBpbmRpY2F0b3JXaXRoSWNvbjogXCJpbmRpY2F0b3Itd2l0aC1pY29uXCIsXG4gIGluZGljYXRvcldpdGhvdXRJY29uOiBcImluZGljYXRvci13aXRob3V0LWljb25cIixcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgdG9vbHRpcDogXCJ0b29sdGlwXCIsXG59O1xuXG5jb25zdCBhY3Rpb25Dc3MgPSBcIjpob3N0e2JveC1zaXppbmc6Ym9yZGVyLWJveDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKX06aG9zdCAqe2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmZsZXg7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDstLWNhbGNpdGUtYWN0aW9uLWluZGljYXRvci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9LmJ1dHRvbntwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MHB4O2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZTphdXRvO2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtib3JkZXItc3R5bGU6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtmaWxsOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTtmb250LWZhbWlseTp2YXIoLS1jYWxjaXRlLXNhbnMtZmFtaWx5KTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW07Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O3RleHQtYWxpZ246dW5zZXQ7ZmxleDoxIDAgYXV0b30uYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpO2ZpbGw6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0uYnV0dG9uOmZvY3Vze2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpO2ZpbGw6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTtvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9LmJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyl9LmJ1dHRvbiAuaWNvbi1jb250YWluZXJ7cG9pbnRlci1ldmVudHM6bm9uZTttYXJnaW46MHB4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttaW4taW5saW5lLXNpemU6MXJlbTttaW4tYmxvY2stc2l6ZToxcmVtfS5idXR0b24gLnRleHQtY29udGFpbmVye21hcmdpbjowcHg7aW5saW5lLXNpemU6MHB4O292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtsaW5lLWhlaWdodDoxLjVyZW07b3BhY2l0eTowO3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eTt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNpdGlvbi1wcm9wZXJ0eTptYXJnaW47dHJhbnNpdGlvbi1wcm9wZXJ0eTppbmxpbmUtc2l6ZX0uYnV0dG9uIC50ZXh0LWNvbnRhaW5lci0tdmlzaWJsZXtpbmxpbmUtc2l6ZTphdXRvO2ZsZXg6MSAxIGF1dG87b3BhY2l0eToxfTpob3N0KFtzY2FsZT1zXSkgLmJ1dHRvbntwYWRkaW5nLWlubGluZTowLjVyZW07cGFkZGluZy1ibG9jazowLjI1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCl9Omhvc3QoW3NjYWxlPXNdKSAuYnV0dG9uLS10ZXh0LXZpc2libGUgLmljb24tY29udGFpbmVye21hcmdpbi1pbmxpbmUtZW5kOjAuNXJlbX06aG9zdChbc2NhbGU9bV0pIC5idXR0b257cGFkZGluZy1pbmxpbmU6MXJlbTtwYWRkaW5nLWJsb2NrOjAuNzVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbm9ybWFsKX06aG9zdChbc2NhbGU9bV0pIC5idXR0b24tLXRleHQtdmlzaWJsZSAuaWNvbi1jb250YWluZXJ7bWFyZ2luLWlubGluZS1lbmQ6MC43NXJlbX06aG9zdChbc2NhbGU9bF0pIC5idXR0b257cGFkZGluZzoxLjI1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbm9ybWFsKX06aG9zdChbc2NhbGU9bF0pIC5idXR0b24tLXRleHQtdmlzaWJsZSAuaWNvbi1jb250YWluZXJ7bWFyZ2luLWlubGluZS1lbmQ6MXJlbX06aG9zdChbYWxpZ25tZW50PWNlbnRlcl0pIC5idXR0b257anVzdGlmeS1jb250ZW50OmNlbnRlcn06aG9zdChbYWxpZ25tZW50PWVuZF0pIC5idXR0b257anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfTpob3N0KFthbGlnbm1lbnQ9Y2VudGVyXSkgLmJ1dHRvbiAudGV4dC1jb250YWluZXItLXZpc2libGUsOmhvc3QoW2FsaWdubWVudD1lbmRdKSAuYnV0dG9uIC50ZXh0LWNvbnRhaW5lci0tdmlzaWJsZXtmbGV4OjAgMSBhdXRvfTpob3N0KFtzY2FsZT1zXVtjb21wYWN0XSkgLmJ1dHRvbiw6aG9zdChbc2NhbGU9bV1bY29tcGFjdF0pIC5idXR0b24sOmhvc3QoW3NjYWxlPWxdW2NvbXBhY3RdKSAuYnV0dG9ue3BhZGRpbmctaW5saW5lOjBweH0uc2xvdC1jb250YWluZXJ7ZGlzcGxheTpmbGV4fS5zbG90LWNvbnRhaW5lci0taGlkZGVue2Rpc3BsYXk6bm9uZX0uYnV0dG9uLS10ZXh0LXZpc2libGV7aW5saW5lLXNpemU6MTAwJX06aG9zdChbYWN0aXZlXSkgLmJ1dHRvbiw6aG9zdChbYWN0aXZlXSkgLmJ1dHRvbjpob3Zlciw6aG9zdChbYWN0aXZlXSkgLmJ1dHRvbjpmb2N1cyw6aG9zdChbYWN0aXZlXVtsb2FkaW5nXSkgLmJ1dHRvbntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKTtmaWxsOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW2FjdGl2ZV0pIC5idXR0b246YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XSkgLmJ1dHRvbntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fTpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XVthY3RpdmVdKSAuYnV0dG9uLDpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XSkgLmJ1dHRvbjpob3Zlciw6aG9zdChbYXBwZWFyYW5jZT10cmFuc3BhcmVudF0pIC5idXR0b246Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLWJ1dHRvbi10cmFuc3BhcmVudC1ob3Zlcil9Omhvc3QoW2FwcGVhcmFuY2U9dHJhbnNwYXJlbnRdKSAuYnV0dG9uOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtYnV0dG9uLXRyYW5zcGFyZW50LXByZXNzKX06aG9zdChbYXBwZWFyYW5jZT10cmFuc3BhcmVudF1bZGlzYWJsZWRdKSAuYnV0dG9ue2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Omhvc3QoW2xvYWRpbmddW2FwcGVhcmFuY2U9c29saWRdKSAuYnV0dG9uLDpob3N0KFtsb2FkaW5nXVthcHBlYXJhbmNlPXNvbGlkXSkgLmJ1dHRvbjpob3Zlciw6aG9zdChbbG9hZGluZ11bYXBwZWFyYW5jZT1zb2xpZF0pIC5idXR0b246Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW2xvYWRpbmddW2FwcGVhcmFuY2U9c29saWRdKSAuYnV0dG9uIC50ZXh0LWNvbnRhaW5lciw6aG9zdChbbG9hZGluZ11bYXBwZWFyYW5jZT1zb2xpZF0pIC5idXR0b246aG92ZXIgLnRleHQtY29udGFpbmVyLDpob3N0KFtsb2FkaW5nXVthcHBlYXJhbmNlPXNvbGlkXSkgLmJ1dHRvbjpmb2N1cyAudGV4dC1jb250YWluZXJ7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtsb2FkaW5nXSkgY2FsY2l0ZS1sb2FkZXJbaW5saW5lXXtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7bWFyZ2luLWlubGluZS1lbmQ6MHB4fTpob3N0KFtkaXNhYmxlZF0pIC5idXR0b24sOmhvc3QoW2Rpc2FibGVkXSkgLmJ1dHRvbjpob3Zlciw6aG9zdChbZGlzYWJsZWRdKSAuYnV0dG9uOmZvY3Vze2N1cnNvcjpkZWZhdWx0O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdW2FjdGl2ZV0pIC5idXR0b24sOmhvc3QoW2Rpc2FibGVkXVthY3RpdmVdKSAuYnV0dG9uOmhvdmVyLDpob3N0KFtkaXNhYmxlZF1bYWN0aXZlXSkgLmJ1dHRvbjpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2FwcGVhcmFuY2U9dHJhbnNwYXJlbnRdKSAuYnV0dG9ue2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbi1wcm9wZXJ0eTpib3gtc2hhZG93O3RyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKX0uaW5kaWNhdG9yLXdpdGgtaWNvbntwb3NpdGlvbjpyZWxhdGl2ZX0uaW5kaWNhdG9yLXdpdGgtaWNvbjo6YWZ0ZXJ7Y29udGVudDpcXFwiXFxcIjtwb3NpdGlvbjphYnNvbHV0ZTtibG9jay1zaXplOjAuNXJlbTtpbmxpbmUtc2l6ZTowLjVyZW07Ym9yZGVyLXJhZGl1czo5OTk5cHg7aW5zZXQtYmxvY2stZW5kOi0wLjI3NXJlbTtpbnNldC1pbmxpbmUtZW5kOi0wLjI3NXJlbTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtYWN0aW9uLWluZGljYXRvci1jb2xvcil9LmluZGljYXRvci13aXRob3V0LWljb257bWFyZ2luLWlubGluZTowLjI1cmVtO2lubGluZS1zaXplOjFyZW07cG9zaXRpb246cmVsYXRpdmV9LmluZGljYXRvci13aXRob3V0LWljb246OmFmdGVye2NvbnRlbnQ6XFxcIlxcXCI7cG9zaXRpb246YWJzb2x1dGU7YmxvY2stc2l6ZTowLjVyZW07aW5saW5lLXNpemU6MC41cmVtO2JvcmRlci1yYWRpdXM6OTk5OXB4O2luc2V0LWJsb2NrLWVuZDotMC4yNzVyZW07aW5zZXQtaW5saW5lLWVuZDotMC4yNzVyZW07YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLWFjdGlvbi1pbmRpY2F0b3ItY29sb3IpfS5pbmRpY2F0b3ItdGV4dHtwb3NpdGlvbjphYnNvbHV0ZTtpbmxpbmUtc2l6ZToxcHg7YmxvY2stc2l6ZToxcHg7cGFkZGluZzowO21hcmdpbjotMXB4O292ZXJmbG93OmhpZGRlbjtjbGlwOnJlY3QoMCwgMCwgMCwgMCk7d2hpdGUtc3BhY2U6bm93cmFwO2JvcmRlci13aWR0aDowfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBBY3Rpb24gPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgKCkgPT4gZm9yY2VVcGRhdGUodGhpcykpO1xuICAgIHRoaXMuZ3VpZCA9IGBjYWxjaXRlLWFjdGlvbi0ke2d1aWQoKX1gO1xuICAgIHRoaXMuaW5kaWNhdG9ySWQgPSBgJHt0aGlzLmd1aWR9LWluZGljYXRvcmA7XG4gICAgdGhpcy5idXR0b25JZCA9IGAke3RoaXMuZ3VpZH0tYnV0dG9uYDtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmhhbmRsZVRvb2x0aXBTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0b29sdGlwcyA9IGV2ZW50LnRhcmdldFxuICAgICAgICAuYXNzaWduZWRFbGVtZW50cyh7XG4gICAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgICB9KVxuICAgICAgICAuZmlsdGVyKChlbCkgPT4gZWw/Lm1hdGNoZXMoXCJjYWxjaXRlLXRvb2x0aXBcIikpO1xuICAgICAgY29uc3QgdG9vbHRpcCA9IHRvb2x0aXBzWzBdO1xuICAgICAgaWYgKHRvb2x0aXApIHtcbiAgICAgICAgdG9vbHRpcC5yZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5idXR0b25FbDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5hbGlnbm1lbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hcHBlYXJhbmNlID0gXCJzb2xpZFwiO1xuICAgIHRoaXMuY29tcGFjdCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmljb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pY29uRmxpcFJ0bCA9IGZhbHNlO1xuICAgIHRoaXMuaW5kaWNhdG9yID0gZmFsc2U7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy50ZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudGV4dEVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgaWYgKEJ1aWxkLmlzQnJvd3Nlcikge1xuICAgICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIHRoaXMuYnV0dG9uRWw/LmZvY3VzKCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlclRleHRDb250YWluZXIoKSB7XG4gICAgY29uc3QgeyB0ZXh0LCB0ZXh0RW5hYmxlZCB9ID0gdGhpcztcbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyQ2xhc3NlcyA9IHtcbiAgICAgIFtDU1MudGV4dENvbnRhaW5lcl06IHRydWUsXG4gICAgICBbQ1NTLnRleHRDb250YWluZXJWaXNpYmxlXTogdGV4dEVuYWJsZWQsXG4gICAgfTtcbiAgICByZXR1cm4gdGV4dCA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IHRleHRDb250YWluZXJDbGFzc2VzLCBrZXk6IFwidGV4dC1jb250YWluZXJcIiB9LCB0ZXh0KSkgOiBudWxsO1xuICB9XG4gIHJlbmRlckluZGljYXRvclRleHQoKSB7XG4gICAgY29uc3QgeyBpbmRpY2F0b3IsIG1lc3NhZ2VzLCBpbmRpY2F0b3JJZCwgYnV0dG9uSWQgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgXCJhcmlhLWxhYmVsbGVkYnlcIjogYnV0dG9uSWQsIFwiYXJpYS1saXZlXCI6IFwicG9saXRlXCIsIGNsYXNzOiBDU1MuaW5kaWNhdG9yVGV4dCwgaWQ6IGluZGljYXRvcklkLCByb2xlOiBcInJlZ2lvblwiIH0sIGluZGljYXRvciA/IG1lc3NhZ2VzLmluZGljYXRvciA6IG51bGwpKTtcbiAgfVxuICByZW5kZXJJY29uQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IHsgbG9hZGluZywgaWNvbiwgc2NhbGUsIGVsLCBpY29uRmxpcFJ0bCwgaW5kaWNhdG9yIH0gPSB0aGlzO1xuICAgIGNvbnN0IGxvYWRlclNjYWxlID0gc2NhbGUgPT09IFwibFwiID8gXCJsXCIgOiBcIm1cIjtcbiAgICBjb25zdCBjYWxjaXRlTG9hZGVyTm9kZSA9IGxvYWRpbmcgPyAoaChcImNhbGNpdGUtbG9hZGVyXCIsIHsgaW5saW5lOiB0cnVlLCBsYWJlbDogdGhpcy5tZXNzYWdlcy5sb2FkaW5nLCBzY2FsZTogbG9hZGVyU2NhbGUgfSkpIDogbnVsbDtcbiAgICBjb25zdCBjYWxjaXRlSWNvbk5vZGUgPSBpY29uID8gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogeyBbQ1NTLmluZGljYXRvcldpdGhJY29uXTogaW5kaWNhdG9yIH0sIGZsaXBSdGw6IGljb25GbGlwUnRsLCBpY29uOiBpY29uLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKSA6IG51bGw7XG4gICAgY29uc3QgaWNvbk5vZGUgPSBjYWxjaXRlTG9hZGVyTm9kZSB8fCBjYWxjaXRlSWNvbk5vZGU7XG4gICAgY29uc3QgaGFzSWNvblRvRGlzcGxheSA9IGljb25Ob2RlIHx8IGVsLmNoaWxkcmVuPy5sZW5ndGg7XG4gICAgY29uc3Qgc2xvdENvbnRhaW5lck5vZGUgPSAoaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtDU1Muc2xvdENvbnRhaW5lcl06IHRydWUsXG4gICAgICAgIFtDU1Muc2xvdENvbnRhaW5lckhpZGRlbl06IGxvYWRpbmcsXG4gICAgICB9IH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gICAgcmV0dXJuIGhhc0ljb25Ub0Rpc3BsYXkgPyAoaChcImRpdlwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBDU1MuaWNvbkNvbnRhaW5lciwga2V5OiBcImljb24tY29udGFpbmVyXCIgfSwgaWNvbk5vZGUsIHNsb3RDb250YWluZXJOb2RlKSkgOiBudWxsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGl2ZSwgY29tcGFjdCwgZGlzYWJsZWQsIGljb24sIGxvYWRpbmcsIHRleHRFbmFibGVkLCBsYWJlbCwgdGV4dCwgaW5kaWNhdG9yLCBpbmRpY2F0b3JJZCwgYnV0dG9uSWQsIG1lc3NhZ2VzLCB9ID0gdGhpcztcbiAgICBjb25zdCBhcmlhTGFiZWwgPSBgJHtsYWJlbCB8fCB0ZXh0fSR7aW5kaWNhdG9yID8gYCAoJHttZXNzYWdlcy5pbmRpY2F0b3J9KWAgOiBcIlwifWA7XG4gICAgY29uc3QgYnV0dG9uQ2xhc3NlcyA9IHtcbiAgICAgIFtDU1MuYnV0dG9uXTogdHJ1ZSxcbiAgICAgIFtDU1MuYnV0dG9uVGV4dFZpc2libGVdOiB0ZXh0RW5hYmxlZCxcbiAgICAgIFtDU1MuYnV0dG9uQ29tcGFjdF06IGNvbXBhY3QsXG4gICAgfTtcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcImJ1dHRvblwiLCB7IFwiYXJpYS1idXN5XCI6IHRvQXJpYUJvb2xlYW4obG9hZGluZyksIFwiYXJpYS1jb250cm9sc1wiOiBpbmRpY2F0b3IgPyBpbmRpY2F0b3JJZCA6IG51bGwsIFwiYXJpYS1kaXNhYmxlZFwiOiB0b0FyaWFCb29sZWFuKGRpc2FibGVkKSwgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbCwgXCJhcmlhLXByZXNzZWRcIjogdG9BcmlhQm9vbGVhbihhY3RpdmUpLCBjbGFzczogYnV0dG9uQ2xhc3NlcywgZGlzYWJsZWQ6IGRpc2FibGVkLCBpZDogYnV0dG9uSWQsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiAoYnV0dG9uRWwpID0+ICh0aGlzLmJ1dHRvbkVsID0gYnV0dG9uRWwpIH0sIHRoaXMucmVuZGVySWNvbkNvbnRhaW5lcigpLCB0aGlzLnJlbmRlclRleHRDb250YWluZXIoKSwgIWljb24gJiYgaW5kaWNhdG9yICYmIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmluZGljYXRvcldpdGhvdXRJY29uLCBrZXk6IFwiaW5kaWNhdG9yLW5vLWljb25cIiB9KSksIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMudG9vbHRpcCwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZVRvb2x0aXBTbG90Q2hhbmdlIH0pLCB0aGlzLnJlbmRlckluZGljYXRvclRleHQoKSkpO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIGFjdGlvbkNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1hY3Rpb25cIiwge1xuICAgIFwiYWN0aXZlXCI6IFs1MTZdLFxuICAgIFwiYWxpZ25tZW50XCI6IFs1MTNdLFxuICAgIFwiYXBwZWFyYW5jZVwiOiBbNTEzXSxcbiAgICBcImNvbXBhY3RcIjogWzUxNl0sXG4gICAgXCJkaXNhYmxlZFwiOiBbNTE2XSxcbiAgICBcImljb25cIjogWzFdLFxuICAgIFwiaWNvbkZsaXBSdGxcIjogWzUxNiwgXCJpY29uLWZsaXAtcnRsXCJdLFxuICAgIFwiaW5kaWNhdG9yXCI6IFs1MTZdLFxuICAgIFwibGFiZWxcIjogWzFdLFxuICAgIFwibG9hZGluZ1wiOiBbNTE2XSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwidGV4dFwiOiBbMV0sXG4gICAgXCJ0ZXh0RW5hYmxlZFwiOiBbNTE2LCBcInRleHQtZW5hYmxlZFwiXSxcbiAgICBcIm1lc3NhZ2VzXCI6IFsxMDQwXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogWzEwNDBdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFszMl0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1hY3Rpb25cIiwgXCJjYWxjaXRlLWljb25cIiwgXCJjYWxjaXRlLWxvYWRlclwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1hY3Rpb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBBY3Rpb24pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IEFjdGlvbiBhcyBBLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmZ1bmN0aW9uIGdldEljb25TY2FsZShjb21wb25lbnRTY2FsZSkge1xuICByZXR1cm4gY29tcG9uZW50U2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIjtcbn1cblxuZXhwb3J0IHsgZ2V0SWNvblNjYWxlIGFzIGcgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGdldEFzc2V0UGF0aCwgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgaCwgSG9zdCwgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldEVsZW1lbnREaXIsIHQgYXMgdG9BcmlhQm9vbGVhbiB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgaWNvbjogXCJpY29uXCIsXG4gIGZsaXBSdGw6IFwiZmxpcC1ydGxcIixcbn07XG5cbi8qKlxuICogSWNvbiBkYXRhIGNhY2hlLlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgaWNvbkNhY2hlID0ge307XG4vKipcbiAqIEljb24gcmVxdWVzdCBjYWNoZS5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IHJlcXVlc3RDYWNoZSA9IHt9O1xuY29uc3Qgc2NhbGVUb1B4ID0ge1xuICBzOiAxNixcbiAgbTogMjQsXG4gIGw6IDMyLFxufTtcbmFzeW5jIGZ1bmN0aW9uIGZldGNoSWNvbih7IGljb24sIHNjYWxlIH0pIHtcbiAgY29uc3Qgc2l6ZSA9IHNjYWxlVG9QeFtzY2FsZV07XG4gIGNvbnN0IG5hbWUgPSBub3JtYWxpemVJY29uTmFtZShpY29uKTtcbiAgY29uc3QgZmlsbGVkID0gbmFtZS5jaGFyQXQobmFtZS5sZW5ndGggLSAxKSA9PT0gXCJGXCI7XG4gIGNvbnN0IGljb25OYW1lID0gZmlsbGVkID8gbmFtZS5zdWJzdHJpbmcoMCwgbmFtZS5sZW5ndGggLSAxKSA6IG5hbWU7XG4gIGNvbnN0IGlkID0gYCR7aWNvbk5hbWV9JHtzaXplfSR7ZmlsbGVkID8gXCJGXCIgOiBcIlwifWA7XG4gIGlmIChpY29uQ2FjaGVbaWRdKSB7XG4gICAgcmV0dXJuIGljb25DYWNoZVtpZF07XG4gIH1cbiAgaWYgKCFyZXF1ZXN0Q2FjaGVbaWRdKSB7XG4gICAgcmVxdWVzdENhY2hlW2lkXSA9IGZldGNoKGdldEFzc2V0UGF0aChgLi9hc3NldHMvaWNvbi8ke2lkfS5qc29uYCkpXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihgXCIke2lkfVwiIGlzIG5vdCBhIHZhbGlkIGNhbGNpdGUtdWktaWNvbiBuYW1lYCk7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBwYXRoID0gYXdhaXQgcmVxdWVzdENhY2hlW2lkXTtcbiAgaWNvbkNhY2hlW2lkXSA9IHBhdGg7XG4gIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGljb24gbmFtZSB0byBtYXRjaCB0aGUgcGF0aCBkYXRhIG1vZHVsZSBleHBvcnRzLlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKlxuICogQHBhcmFtIG5hbWUg4oCTIGFuIGljb24gbmFtZSB0aGF0IGNhbiBiZSBlaXRoZXIga2ViYWIgb3IgY2FtZWwtY2FzZWRcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUljb25OYW1lKG5hbWUpIHtcbiAgY29uc3QgbnVtYmVyTGVhZGluZ05hbWUgPSAhaXNOYU4oTnVtYmVyKG5hbWUuY2hhckF0KDApKSk7XG4gIGNvbnN0IHBhcnRzID0gbmFtZS5zcGxpdChcIi1cIik7XG4gIGNvbnN0IGtlYmFiQ2FzZWQgPSBwYXJ0cy5sZW5ndGggPiAwO1xuICBpZiAoa2ViYWJDYXNlZCkge1xuICAgIGNvbnN0IGZpcnN0Tm9uRGlnaXRJblBhcnRQYXR0ZXJuID0gL1thLXpdL2k7XG4gICAgbmFtZSA9IHBhcnRzXG4gICAgICAubWFwKChwYXJ0LCBwYXJ0SW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBwYXJ0LnJlcGxhY2UoZmlyc3ROb25EaWdpdEluUGFydFBhdHRlcm4sIGZ1bmN0aW9uIHJlcGxhY2VyKG1hdGNoLCBvZmZzZXQpIHtcbiAgICAgICAgY29uc3QgaXNGaXJzdENoYXJJbk5hbWUgPSBwYXJ0SW5kZXggPT09IDAgJiYgb2Zmc2V0ID09PSAwO1xuICAgICAgICBpZiAoaXNGaXJzdENoYXJJbk5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KTtcbiAgICB9KVxuICAgICAgLmpvaW4oXCJcIik7XG4gIH1cbiAgcmV0dXJuIG51bWJlckxlYWRpbmdOYW1lID8gYGkke25hbWV9YCA6IG5hbWU7XG59XG5cbmNvbnN0IGljb25Dc3MgPSBcIjpob3N0e2Rpc3BsYXk6aW5saW5lLWZsZXg7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1pY29uLWNvbG9yKX06aG9zdChbc2NhbGU9c10pe2lubGluZS1zaXplOjE2cHg7YmxvY2stc2l6ZToxNnB4O21pbi1pbmxpbmUtc2l6ZToxNnB4O21pbi1ibG9jay1zaXplOjE2cHh9Omhvc3QoW3NjYWxlPW1dKXtpbmxpbmUtc2l6ZToyNHB4O2Jsb2NrLXNpemU6MjRweDttaW4taW5saW5lLXNpemU6MjRweDttaW4tYmxvY2stc2l6ZToyNHB4fTpob3N0KFtzY2FsZT1sXSl7aW5saW5lLXNpemU6MzJweDtibG9jay1zaXplOjMycHg7bWluLWlubGluZS1zaXplOjMycHg7bWluLWJsb2NrLXNpemU6MzJweH0uZmxpcC1ydGx7dHJhbnNmb3JtOnNjYWxlWCgtMSl9LnN2Z3tkaXNwbGF5OmJsb2NrfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBJY29uID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmljb24gPSBudWxsO1xuICAgIHRoaXMuZmxpcFJ0bCA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnRleHRMYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBhdGhEYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMud2FpdFVudGlsVmlzaWJsZSgoKSA9PiB7XG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgdGhpcy5sb2FkSWNvblBhdGhEYXRhKCk7XG4gICAgfSk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBudWxsO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMubG9hZEljb25QYXRoRGF0YSgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVsLCBmbGlwUnRsLCBwYXRoRGF0YSwgc2NhbGUsIHRleHRMYWJlbCB9ID0gdGhpcztcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKGVsKTtcbiAgICBjb25zdCBzaXplID0gc2NhbGVUb1B4W3NjYWxlXTtcbiAgICBjb25zdCBzZW1hbnRpYyA9ICEhdGV4dExhYmVsO1xuICAgIGNvbnN0IHBhdGhzID0gW10uY29uY2F0KHBhdGhEYXRhIHx8IFwiXCIpO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1oaWRkZW5cIjogdG9BcmlhQm9vbGVhbighc2VtYW50aWMpLCBcImFyaWEtbGFiZWxcIjogc2VtYW50aWMgPyB0ZXh0TGFiZWwgOiBudWxsLCByb2xlOiBzZW1hbnRpYyA/IFwiaW1nXCIgOiBudWxsIH0sIGgoXCJzdmdcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmZsaXBSdGxdOiBkaXIgPT09IFwicnRsXCIgJiYgZmxpcFJ0bCxcbiAgICAgICAgc3ZnOiB0cnVlLFxuICAgICAgfSwgZmlsbDogXCJjdXJyZW50Q29sb3JcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgdmlld0JveDogYDAgMCAke3NpemV9ICR7c2l6ZX1gLCB3aWR0aDogXCIxMDAlXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSwgcGF0aHMubWFwKChwYXRoKSA9PiB0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIiA/IChoKFwicGF0aFwiLCB7IGQ6IHBhdGggfSkpIDogKGgoXCJwYXRoXCIsIHsgZDogcGF0aC5kLCBvcGFjaXR5OiBcIm9wYWNpdHlcIiBpbiBwYXRoID8gcGF0aC5vcGFjaXR5IDogMSB9KSkpKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFzeW5jIGxvYWRJY29uUGF0aERhdGEoKSB7XG4gICAgY29uc3QgeyBpY29uLCBzY2FsZSwgdmlzaWJsZSB9ID0gdGhpcztcbiAgICBpZiAoIUJ1aWxkLmlzQnJvd3NlciB8fCAhaWNvbiB8fCAhdmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXRoRGF0YSA9IGF3YWl0IGZldGNoSWNvbih7IGljb24sIHNjYWxlIH0pO1xuICAgIC8vIFdoaWxlIHRoZSBmZXRjaEljb24gbWV0aG9kIGlzIGF3YWl0aW5nIHJlc3BvbnNlLCB0aGUgaWNvbiByZXF1ZXN0ZWQgY2FuIGNoYW5nZS4gVGhpcyBjaGVjayBpcyB0byB2ZXJpZnkgdGhlIHJlc3BvbnNlIHJlY2VpdmVkIGJlbG9uZ3MgdG8gdGhlIGN1cnJlbnQgaWNvbi5cbiAgICBpZiAoaWNvbiAhPT0gdGhpcy5pY29uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGF0aERhdGEgPSBwYXRoRGF0YTtcbiAgfVxuICB3YWl0VW50aWxWaXNpYmxlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwiaW50ZXJzZWN0aW9uXCIsIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIHsgcm9vdE1hcmdpbjogXCI1MHB4XCIgfSk7XG4gICAgaWYgKCF0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbCk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImljb25cIjogW1wibG9hZEljb25QYXRoRGF0YVwiXSxcbiAgICBcInNjYWxlXCI6IFtcImxvYWRJY29uUGF0aERhdGFcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gaWNvbkNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1pY29uXCIsIHtcbiAgICBcImljb25cIjogWzUxM10sXG4gICAgXCJmbGlwUnRsXCI6IFs1MTYsIFwiZmxpcC1ydGxcIl0sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcInRleHRMYWJlbFwiOiBbMSwgXCJ0ZXh0LWxhYmVsXCJdLFxuICAgIFwicGF0aERhdGFcIjogWzMyXSxcbiAgICBcInZpc2libGVcIjogWzMyXVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWljb25cIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIEljb24pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IEljb24gYXMgSSwgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBCdWlsZCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuZnVuY3Rpb24gZ2V0VXNlckFnZW50RGF0YSgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnREYXRhO1xufVxuZnVuY3Rpb24gZ2V0VXNlckFnZW50U3RyaW5nKCkge1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIGNvbnN0IHVhRGF0YSA9IGdldFVzZXJBZ2VudERhdGEoKTtcbiAgcmV0dXJuIHVhRGF0YT8uYnJhbmRzXG4gICAgPyB1YURhdGEuYnJhbmRzLm1hcCgoeyBicmFuZCwgdmVyc2lvbiB9KSA9PiBgJHticmFuZH0vJHt2ZXJzaW9ufWApLmpvaW4oXCIgXCIpXG4gICAgOiBuYXZpZ2F0b3IudXNlckFnZW50O1xufVxuXG4vLyDimqDvuI8gYnJvd3Nlci1zbmlmZmluZyBpcyBub3QgYSBiZXN0IHByYWN0aWNlIGFuZCBzaG91bGQgYmUgYXZvaWRlZCDimqDvuI9cbmNvbnN0IGlzRmlyZWZveCA9IC9maXJlZm94L2kudGVzdChnZXRVc2VyQWdlbnRTdHJpbmcoKSk7XG5jb25zdCBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudCA9IGlzRmlyZWZveFxuICA/IG5ldyBXZWFrTWFwKClcbiAgOiBudWxsO1xuZnVuY3Rpb24gaW50ZXJjZXB0ZWRDbGljaygpIHtcbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdGhpcztcbiAgaWYgKCFkaXNhYmxlZCkge1xuICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljay5jYWxsKHRoaXMpO1xuICB9XG59XG5mdW5jdGlvbiBvblBvaW50ZXJEb3duKGV2ZW50KSB7XG4gIGNvbnN0IGludGVyYWN0aXZlRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgaWYgKGlzRmlyZWZveCAmJiAhaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGludGVyYWN0aXZlRWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gaW50ZXJhY3RpdmVFbGVtZW50O1xuICBpZiAoZGlzYWJsZWQpIHtcbiAgICAvLyBwcmV2ZW50IGNsaWNrIGZyb20gbW92aW5nIGZvY3VzIG9uIGhvc3RcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5jb25zdCBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzID0gW1wibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcImNsaWNrXCJdO1xuZnVuY3Rpb24gb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQoZXZlbnQpIHtcbiAgaWYgKGlzRmlyZWZveCAmJiAhaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGV2ZW50LnRhcmdldCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gZXZlbnQudGFyZ2V0O1xuICAvLyBwcmV2ZW50IGRpc2FsbG93ZWQgbW91c2UgZXZlbnRzIGZyb20gYmVpbmcgZW1pdHRlZCBvbiB0aGUgZGlzYWJsZWQgaG9zdCAocGVyIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvaHRtbC9pc3N1ZXMvNTg4NilcbiAgLy/imqAgd2UgZ2VuZXJhbGx5IGF2b2lkIHN0b3BwaW5nIHByb3BhZ2F0aW9uIG9mIGV2ZW50cywgYnV0IHRoaXMgaXMgbmVlZGVkIHRvIGFkaGVyZSB0byB0aGUgaW50ZW5kZWQgc3BlYyBjaGFuZ2VzIGFib3ZlIOKaoFxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5jb25zdCBjYXB0dXJlT25seU9wdGlvbnMgPSB7IGNhcHR1cmU6IHRydWUgfTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXBkYXRlcyB0aGUgaG9zdCBlbGVtZW50IHRvIHByZXZlbnQga2V5Ym9hcmQgaW50ZXJhY3Rpb24gb24gaXRzIHN1YnRyZWUgYW5kIHNldHMgdGhlIGFwcHJvcHJpYXRlIGFyaWEgYXR0cmlidXRlIGZvciBhY2Nlc3NpYmlsaXR5LlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRSZW5kZXJgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqICoqTm90ZXMqKlxuICpcbiAqIHRoaXMgdXRpbCBpcyBub3QgbmVlZGVkIGZvciBzaW1wbGUgY29tcG9uZW50cyB3aG9zZSByb290IGVsZW1lbnQgb3IgZWxlbWVudHMgYXJlIGFuIGludGVyYWN0aXZlIGNvbXBvbmVudCAoY3VzdG9tIGVsZW1lbnQgb3IgbmF0aXZlIGNvbnRyb2wpLiBGb3IgdGhvc2UgY2FzZXMsIHNldCB0aGUgYGRpc2FibGVkYCBwcm9wcyBvbiB0aGUgcm9vdCBjb21wb25lbnRzIGluc3RlYWQuXG4gKiB0ZWNobmljYWxseSwgdXNlcnMgY2FuIG92ZXJyaWRlIGB0YWJpbmRleGAgYW5kIHJlc3RvcmUga2V5Ym9hcmQgbmF2aWdhdGlvbiwgYnV0IHRoaXMgd2lsbCBiZSBjb25zaWRlcmVkIHVzZXIgZXJyb3JcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gaG9zdElzVGFiYmFibGUg4oCTIHdoZW4gc2V0IHRvIHRydWUgb3IgaXRzIHByZWRpY2F0ZSByZXR1cm5zIHRydWUsIHRoZSBob3N0IGlzIHRhYmJhYmxlIGFuZCB3aWxsIGJlIG1hbmFnZWQgYnkgdGhlIGhlbHBlci4gU2V0IHRvIFwibWFuYWdlZFwiIGZvciBjYXNlcyB3aGVyZSBhIGNvbXBvbmVudCdzIHBhcmVudCBkZXRlcm1pbmVzIHdoaWNoIGl0ZW0gaXMgdGFiYmFibGUgKGkuZS4sIHNldHMgYHRhYmluZGV4YCB0byBhbGxvdyB0YWJiaW5nKS5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlSG9zdEludGVyYWN0aW9uKGNvbXBvbmVudCwgaG9zdElzVGFiYmFibGUgPSBmYWxzZSkge1xuICBpZiAoY29tcG9uZW50LmRpc2FibGVkKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xuICAgIGlmIChjb21wb25lbnQuZWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgICBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpO1xuICBpZiAodHlwZW9mIGhvc3RJc1RhYmJhYmxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgaG9zdElzVGFiYmFibGUuY2FsbChjb21wb25lbnQpID8gXCIwXCIgOiBcIi0xXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSB0cnVlKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gZmFsc2UpIHtcbiAgICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gIH1cbiAgZWxzZSA7XG4gIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIpO1xufVxuZnVuY3Rpb24gYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmVsLmNsaWNrID0gaW50ZXJjZXB0ZWRDbGljaztcbiAgYWRkSW50ZXJhY3Rpb25MaXN0ZW5lcnMoaXNGaXJlZm94ID8gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIDogY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIGFkZEludGVyYWN0aW9uTGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgLy8gdGhpcyBwYXRoIGlzIG9ubHkgYXBwbGljYWJsZSB0byBGaXJlZm94XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG9uUG9pbnRlckRvd24sIGNhcHR1cmVPbmx5T3B0aW9ucyk7XG4gIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xufVxuZnVuY3Rpb24gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIHtcbiAgcmV0dXJuIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCkge1xuICBkZWxldGUgY29tcG9uZW50LmVsLmNsaWNrOyAvLyBmYWxsYmFjayBvbiBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2tcbiAgcmVtb3ZlSW50ZXJhY3Rpb25MaXN0ZW5lcnMoaXNGaXJlZm94ID8gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIDogY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUludGVyYWN0aW9uTGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgLy8gdGhpcyBwYXRoIGlzIG9ubHkgYXBwbGljYWJsZSB0byBGaXJlZm94XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG9uUG9pbnRlckRvd24sIGNhcHR1cmVPbmx5T3B0aW9ucyk7XG4gIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgaGVscHMgZGlzYWJsZSBjb21wb25lbnRzIGNvbnNpc3RlbnRseSBpbiBGaXJlZm94LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgIGFuZCBpcyBvbmx5IG5lZWRlZCBmb3IgRmlyZWZveCBhcyBpdCBkb2VzIG5vdCBjYWxsIGNhcHR1cmUgZXZlbnQgbGlzdGVuZXJzIGJlZm9yZSBub24tY2FwdHVyZSBvbmVzIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTczMTUwNCkuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0SW50ZXJhY3RpdmUoY29tcG9uZW50KSB7XG4gIGlmICghY29tcG9uZW50LmRpc2FibGVkIHx8ICFpc0ZpcmVmb3gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcGFyZW50ID0gY29tcG9uZW50LmVsLnBhcmVudEVsZW1lbnQgfHwgY29tcG9uZW50LmVsOyAvKiBhc3N1bWUgZWxlbWVudCBpcyBob3N0IGlmIGl0IGhhcyBubyBwYXJlbnQgd2hlbiBjb25uZWN0ZWQgKi9cbiAgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuc2V0KGNvbXBvbmVudC5lbCwgcGFyZW50KTtcbiAgYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgcmVzdG9yZXMgaW50ZXJhY3Rpdml0eSB0byBkaXNhYmxlZCBjb21wb25lbnRzIGNvbnNpc3RlbnRseSBpbiBGaXJlZm94LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2tgIGFuZCBpcyBvbmx5IG5lZWRlZCBmb3IgRmlyZWZveCBhcyBpdCBkb2VzIG5vdCBjYWxsIGNhcHR1cmUgZXZlbnQgbGlzdGVuZXJzIGJlZm9yZSBub24tY2FwdHVyZSBvbmVzIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTczMTUwNCkuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0SW50ZXJhY3RpdmUoY29tcG9uZW50KSB7XG4gIGlmICghaXNGaXJlZm94KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFsd2F5cyByZW1vdmUgb24gZGlzY29ubmVjdCBhcyByZW5kZXIgb3IgY29ubmVjdCB3aWxsIHJlc3RvcmUgaXRcbiAgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZGVsZXRlKGNvbXBvbmVudC5lbCk7XG4gIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpO1xufVxuXG5leHBvcnQgeyBjb25uZWN0SW50ZXJhY3RpdmUgYXMgYywgZGlzY29ubmVjdEludGVyYWN0aXZlIGFzIGQsIGdldFVzZXJBZ2VudFN0cmluZyBhcyBnLCB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gYXMgdSB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC5qcyc7XG5cbmNvbnN0IGxvYWRlckNzcyA9IFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtAbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowfX06aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4taW5saW5lOmF1dG87ZGlzcGxheTpub25lO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO29wYWNpdHk6MTttaW4tYmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItZm9udC1zaXplKTtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7c3Ryb2tlLXdpZHRoOjM7ZmlsbDpub25lO3RyYW5zZm9ybTpzY2FsZSgxLCAxKTthbmltYXRpb246bG9hZGVyLWNvbG9yLXNoaWZ0IGNhbGModmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpICogMiAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSkgYWx0ZXJuYXRlLXJldmVyc2UgaW5maW5pdGUgbGluZWFyO3BhZGRpbmctYmxvY2s6dmFyKC0tY2FsY2l0ZS1sb2FkZXItcGFkZGluZywgNHJlbSl9Omhvc3QoW3NjYWxlPXNdKXstLWNhbGNpdGUtbG9hZGVyLWZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7LS1jYWxjaXRlLWxvYWRlci1zaXplOjJyZW07LS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZTowLjc1cmVtfTpob3N0KFtzY2FsZT1tXSl7LS1jYWxjaXRlLWxvYWRlci1mb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7LS1jYWxjaXRlLWxvYWRlci1zaXplOjRyZW07LS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZToxcmVtfTpob3N0KFtzY2FsZT1sXSl7LS1jYWxjaXRlLWxvYWRlci1mb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMik7LS1jYWxjaXRlLWxvYWRlci1zaXplOjZyZW07LS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZToxLjVyZW19Omhvc3QoW25vLXBhZGRpbmddKXtwYWRkaW5nLWJsb2NrOjBweH06aG9zdHtkaXNwbGF5OmZsZXh9LmxvYWRlcl9fdGV4dHtkaXNwbGF5OmJsb2NrO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7bWFyZ2luLWJsb2NrLXN0YXJ0OmNhbGModmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSkgKyAxLjVyZW0pfS5sb2FkZXJfX3BlcmNlbnRhZ2V7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jazt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLWZvbnQtc2l6ZSk7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSk7aW5zZXQtaW5saW5lLXN0YXJ0OjUwJTttYXJnaW4taW5saW5lLXN0YXJ0OmNhbGModmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSkgLyAyICogLTEpO2xpbmUtaGVpZ2h0OjAuMjU7dHJhbnNmb3JtOnNjYWxlKDEsIDEpfS5sb2FkZXJfX3N2Z3N7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3c6dmlzaWJsZTtvcGFjaXR5OjE7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSk7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKTtpbnNldC1pbmxpbmUtc3RhcnQ6NTAlO21hcmdpbi1pbmxpbmUtc3RhcnQ6Y2FsYyh2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKSAvIDIgKiAtMSk7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdykgLyB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikgKiA2LjY2IC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTthbmltYXRpb24tbmFtZTpsb2FkZXItY2xvY2t3aXNlfS5sb2FkZXJfX3N2Z3twb3NpdGlvbjphYnNvbHV0ZTtpbnNldC1ibG9jay1zdGFydDowcHg7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7b3ZlcmZsb3c6dmlzaWJsZTtpbnNldC1pbmxpbmUtc3RhcnQ6MDtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKTtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUpO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXJ9QHN1cHBvcnRzIChkaXNwbGF5OiBncmlkKXsubG9hZGVyX19zdmctLTF7YW5pbWF0aW9uLW5hbWU6bG9hZGVyLW9mZnNldC0xfS5sb2FkZXJfX3N2Zy0tMnthbmltYXRpb24tbmFtZTpsb2FkZXItb2Zmc2V0LTJ9LmxvYWRlcl9fc3ZnLS0ze2FuaW1hdGlvbi1uYW1lOmxvYWRlci1vZmZzZXQtM319Omhvc3QoW3R5cGU9ZGV0ZXJtaW5hdGVdKXthbmltYXRpb246bm9uZTtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9Omhvc3QoW3R5cGU9ZGV0ZXJtaW5hdGVdKSAubG9hZGVyX19zdmdze2FuaW1hdGlvbjpub25lfTpob3N0KFt0eXBlPWRldGVybWluYXRlXSkgLmxvYWRlcl9fc3ZnLS0ze2FuaW1hdGlvbjpub25lO3N0cm9rZTp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTtzdHJva2UtZGFzaGFycmF5OjE1MC43OTYzMjt0cmFuc2Zvcm06cm90YXRlKC05MGRlZyk7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3QpIGxpbmVhcn06aG9zdChbaW5saW5lXSl7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjBweDthbmltYXRpb246bm9uZTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDoyO3BhZGRpbmctYmxvY2s6MHB4O2Jsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmUpO21pbi1ibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKTtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSk7bWFyZ2luLWlubGluZS1lbmQ6Y2FsYyh2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSkgKiAwLjUpO3ZlcnRpY2FsLWFsaWduOmNhbGModmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmUpICogLTEgKiAwLjIpfTpob3N0KFtpbmxpbmVdKSAubG9hZGVyX19zdmdze2luc2V0LWJsb2NrLXN0YXJ0OjBweDttYXJnaW46MHB4O2luc2V0LWlubGluZS1zdGFydDowO2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKTtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKX06aG9zdChbaW5saW5lXSkgLmxvYWRlcl9fc3Zne2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKTtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKX06aG9zdChbY29tcGxldGVdKXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlKDAuNzUsIDAuNzUpO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zaXRpb246b3BhY2l0eSB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSBsaW5lYXIgMTAwMG1zLCB0cmFuc2Zvcm0gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bSkgbGluZWFyIDEwMDBtc306aG9zdChbY29tcGxldGVdKSAubG9hZGVyX19zdmdze29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUoMC43NSwgMC43NSk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNpdGlvbjpvcGFjaXR5IGNhbGMoMTgwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpIGxpbmVhciA4MDBtcywgdHJhbnNmb3JtIGNhbGMoMTgwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpIGxpbmVhciA4MDBtc306aG9zdChbY29tcGxldGVdKSAubG9hZGVyX19wZXJjZW50YWdle2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO3RyYW5zZm9ybTpzY2FsZSgxLjA1LCAxLjA1KTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2l0aW9uOmNvbG9yIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGxpbmVhciwgdHJhbnNmb3JtIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGxpbmVhcn0ubG9hZGVyX19zdmctLTF7c3Ryb2tlLWRhc2hhcnJheToyNy45MjUyNDQ0NDQ0IDEzOS42MjYyMjIyMjIyO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSAqIDQuOCAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9QGtleWZyYW1lcyBsb2FkZXItb2Zmc2V0LTF7MCV7c3Ryb2tlLWRhc2hhcnJheToyNy45MjUyNDQ0NDQ0IDI1MS4zMjcyO3N0cm9rZS1kYXNob2Zmc2V0OjB9NTAle3N0cm9rZS1kYXNoYXJyYXk6MTM5LjYyNjIyMjIyMjIgMTM5LjYyNjIyMjIyMjI7c3Ryb2tlLWRhc2hvZmZzZXQ6LTgzLjc3NTczMzMzMzN9MTAwJXtzdHJva2UtZGFzaGFycmF5OjI3LjkyNTI0NDQ0NDQgMjUxLjMyNzI7c3Ryb2tlLWRhc2hvZmZzZXQ6LTI3OS4yNTI0NDQ0NDQ0fX0ubG9hZGVyX19zdmctLTJ7c3Ryb2tlLWRhc2hhcnJheTo1NS44NTA0ODg4ODg5IDEzOS42MjYyMjIyMjIyO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSAqIDYuNCAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9QGtleWZyYW1lcyBsb2FkZXItb2Zmc2V0LTJ7MCV7c3Ryb2tlLWRhc2hhcnJheTo1NS44NTA0ODg4ODg5IDIyMy40MDE5NTU1NTU2O3N0cm9rZS1kYXNob2Zmc2V0OjB9NTAle3N0cm9rZS1kYXNoYXJyYXk6MTM5LjYyNjIyMjIyMjIgMTM5LjYyNjIyMjIyMjI7c3Ryb2tlLWRhc2hvZmZzZXQ6LTk3LjczODM1NTU1NTZ9MTAwJXtzdHJva2UtZGFzaGFycmF5OjU1Ljg1MDQ4ODg4ODkgMjIzLjQwMTk1NTU1NTY7c3Ryb2tlLWRhc2hvZmZzZXQ6LTI3OS4yNTI0NDQ0NDQ0fX0ubG9hZGVyX19zdmctLTN7c3Ryb2tlLWRhc2hhcnJheToxMy45NjI2MjIyMjIyIDEzOS42MjYyMjIyMjIyO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSAqIDcuNzM0IC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX1Aa2V5ZnJhbWVzIGxvYWRlci1vZmZzZXQtM3swJXtzdHJva2UtZGFzaGFycmF5OjEzLjk2MjYyMjIyMjIgMjY1LjI4OTgyMjIyMjI7c3Ryb2tlLWRhc2hvZmZzZXQ6MH01MCV7c3Ryb2tlLWRhc2hhcnJheToxMzkuNjI2MjIyMjIyMiAxMzkuNjI2MjIyMjIyMjtzdHJva2UtZGFzaG9mZnNldDotNzYuNzk0NDIyMjIyMn0xMDAle3N0cm9rZS1kYXNoYXJyYXk6MTMuOTYyNjIyMjIyMiAyNjUuMjg5ODIyMjIyMjtzdHJva2UtZGFzaG9mZnNldDotMjc5LjI1MjQ0NDQ0NDR9fUBrZXlmcmFtZXMgbG9hZGVyLWNvbG9yLXNoaWZ0ezAle3N0cm9rZTp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX0zMyV7c3Ryb2tlOnZhcigtLWNhbGNpdGUtdWktYnJhbmQtcHJlc3MpfTY2JXtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1icmFuZC1ob3Zlcil9MTAwJXtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9fUBrZXlmcmFtZXMgbG9hZGVyLWNsb2Nrd2lzZXsxMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IExvYWRlciA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5pbmxpbmUgPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnR5cGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52YWx1ZSA9IDA7XG4gICAgdGhpcy50ZXh0ID0gXCJcIjtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbCwgaW5saW5lLCBsYWJlbCwgc2NhbGUsIHRleHQsIHR5cGUsIHZhbHVlIH0gPSB0aGlzO1xuICAgIGNvbnN0IGlkID0gZWwuaWQgfHwgZ3VpZCgpO1xuICAgIGNvbnN0IHJhZGl1c1JhdGlvID0gMC40NTtcbiAgICBjb25zdCBzaXplID0gaW5saW5lID8gdGhpcy5nZXRJbmxpbmVTaXplKHNjYWxlKSA6IHRoaXMuZ2V0U2l6ZShzY2FsZSk7XG4gICAgY29uc3QgcmFkaXVzID0gc2l6ZSAqIHJhZGl1c1JhdGlvO1xuICAgIGNvbnN0IHZpZXdib3ggPSBgMCAwICR7c2l6ZX0gJHtzaXplfWA7XG4gICAgY29uc3QgaXNEZXRlcm1pbmF0ZSA9IHR5cGUgPT09IFwiZGV0ZXJtaW5hdGVcIjtcbiAgICBjb25zdCBjaXJjdW1mZXJlbmNlID0gMiAqIHJhZGl1cyAqIE1hdGguUEk7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSAodmFsdWUgLyAxMDApICogY2lyY3VtZmVyZW5jZTtcbiAgICBjb25zdCByZW1haW5pbmcgPSBjaXJjdW1mZXJlbmNlIC0gcHJvZ3Jlc3M7XG4gICAgY29uc3QgdmFsdWVOb3cgPSBNYXRoLmZsb29yKHZhbHVlKTtcbiAgICBjb25zdCBob3N0QXR0cmlidXRlcyA9IHtcbiAgICAgIFwiYXJpYS12YWx1ZW5vd1wiOiB2YWx1ZU5vdyxcbiAgICAgIFwiYXJpYS12YWx1ZW1pblwiOiAwLFxuICAgICAgXCJhcmlhLXZhbHVlbWF4XCI6IDEwMCxcbiAgICAgIGNvbXBsZXRlOiB2YWx1ZU5vdyA9PT0gMTAwLFxuICAgIH07XG4gICAgY29uc3Qgc3ZnQXR0cmlidXRlcyA9IHsgcjogcmFkaXVzLCBjeDogc2l6ZSAvIDIsIGN5OiBzaXplIC8gMiB9O1xuICAgIGNvbnN0IGRldGVybWluYXRlU3R5bGUgPSB7IFwic3Ryb2tlLWRhc2hhcnJheVwiOiBgJHtwcm9ncmVzc30gJHtyZW1haW5pbmd9YCB9O1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1sYWJlbFwiOiBsYWJlbCwgaWQ6IGlkLCByb2xlOiBcInByb2dyZXNzYmFyXCIsIC4uLihpc0RldGVybWluYXRlID8gaG9zdEF0dHJpYnV0ZXMgOiB7fSkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImxvYWRlcl9fc3Znc1wiIH0sIGgoXCJzdmdcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogXCJsb2FkZXJfX3N2ZyBsb2FkZXJfX3N2Zy0tMVwiLCB2aWV3Qm94OiB2aWV3Ym94IH0sIGgoXCJjaXJjbGVcIiwgeyAuLi5zdmdBdHRyaWJ1dGVzIH0pKSwgaChcInN2Z1wiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBcImxvYWRlcl9fc3ZnIGxvYWRlcl9fc3ZnLS0yXCIsIHZpZXdCb3g6IHZpZXdib3ggfSwgaChcImNpcmNsZVwiLCB7IC4uLnN2Z0F0dHJpYnV0ZXMgfSkpLCBoKFwic3ZnXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IFwibG9hZGVyX19zdmcgbG9hZGVyX19zdmctLTNcIiwgdmlld0JveDogdmlld2JveCwgLi4uKGlzRGV0ZXJtaW5hdGUgPyB7IHN0eWxlOiBkZXRlcm1pbmF0ZVN0eWxlIH0gOiB7fSkgfSwgaChcImNpcmNsZVwiLCB7IC4uLnN2Z0F0dHJpYnV0ZXMgfSkpKSwgdGV4dCAmJiBoKFwiZGl2XCIsIHsgY2xhc3M6IFwibG9hZGVyX190ZXh0XCIgfSwgdGV4dCksIGlzRGV0ZXJtaW5hdGUgJiYgaChcImRpdlwiLCB7IGNsYXNzOiBcImxvYWRlcl9fcGVyY2VudGFnZVwiIH0sIHZhbHVlKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHByb3BlciBzaXplcyBiYXNlZCBvbiB0aGUgc2NhbGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHNjYWxlXG4gICAqL1xuICBnZXRTaXplKHNjYWxlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHM6IDMyLFxuICAgICAgbTogNTYsXG4gICAgICBsOiA4MCxcbiAgICB9W3NjYWxlXTtcbiAgfVxuICBnZXRJbmxpbmVTaXplKHNjYWxlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHM6IDEyLFxuICAgICAgbTogMTYsXG4gICAgICBsOiAyMCxcbiAgICB9W3NjYWxlXTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBsb2FkZXJDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtbG9hZGVyXCIsIHtcbiAgICBcImlubGluZVwiOiBbNTE2XSxcbiAgICBcImxhYmVsXCI6IFsxXSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwidHlwZVwiOiBbNTEzXSxcbiAgICBcInZhbHVlXCI6IFsyXSxcbiAgICBcInRleHRcIjogWzFdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtbG9hZGVyXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWxvYWRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIExvYWRlcik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgTG9hZGVyIGFzIEwsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgQnVpbGQsIGdldEFzc2V0UGF0aCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U3VwcG9ydGVkTG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuXG5jb25zdCBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGUgPSB7fTtcbmFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VCdW5kbGUobGFuZywgY29tcG9uZW50KSB7XG4gIGNvbnN0IGtleSA9IGAke2NvbXBvbmVudH1fJHtsYW5nfWA7XG4gIGlmIChjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XSkge1xuICAgIHJldHVybiBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XTtcbiAgfVxuICBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XSA9IGZldGNoKGdldEFzc2V0UGF0aChgLi9hc3NldHMvJHtjb21wb25lbnR9L3Q5bi9tZXNzYWdlc18ke2xhbmd9Lmpzb25gKSlcbiAgICAudGhlbigocmVzcCkgPT4ge1xuICAgIGlmICghcmVzcC5vaykge1xuICAgICAgdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcC5qc29uKCk7XG4gIH0pXG4gICAgLmNhdGNoKCgpID0+IHRocm93TWVzc2FnZUZldGNoRXJyb3IoKSk7XG4gIHJldHVybiBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XTtcbn1cbmZ1bmN0aW9uIHRocm93TWVzc2FnZUZldGNoRXJyb3IoKSB7XG4gIHRocm93IG5ldyBFcnJvcihcImNvdWxkIG5vdCBmZXRjaCBjb21wb25lbnQgbWVzc2FnZSBidW5kbGVcIik7XG59XG5mdW5jdGlvbiBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQubWVzc2FnZXMgPSB7XG4gICAgLi4uY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyxcbiAgICAuLi5jb21wb25lbnQubWVzc2FnZU92ZXJyaWRlcyxcbiAgfTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgdGhlIG1lc3NhZ2VzIHVzZWQgYnkgdGhlIGNvbXBvbmVudC4gSXQgc2hvdWxkIGJlIGF3YWl0ZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5hc3luYyBmdW5jdGlvbiBzZXRVcE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGNvbXBvbmVudC5lZmZlY3RpdmVMb2NhbGUpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG5hc3luYyBmdW5jdGlvbiBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBjb25zdCB7IGVsIH0gPSBjb21wb25lbnQ7XG4gIGNvbnN0IHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IHRhZy5yZXBsYWNlKFwiY2FsY2l0ZS1cIiwgXCJcIik7XG4gIHJldHVybiBnZXRNZXNzYWdlQnVuZGxlKGdldFN1cHBvcnRlZExvY2FsZShsYW5nLCBcInQ5blwiKSwgY29tcG9uZW50TmFtZSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBtdXN0IGJlIHNldCB1cCBmb3IgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIGRlZmF1bHQgbWVzc2FnZSBidW5kbGUgaWYgdGhlIGxvY2FsZSBjaGFuZ2VzLlxuICpcbiAqIEl0IGNhbiBiZSBzZXQgdXAgaW4gKiplaXRoZXIqKiBvZiB0aGUgZm9sbG93aW5nIHdheXM6XG4gKlxuICogMS4gY2FsbGVkIGZyb20gYExvY2FsaXplZENvbXBvbmVudGAncyBgb25Mb2NhbGVDaGFuZ2VgIG1ldGhvZCBvclxuICogMi4gY2FsbGVkIGZyb20gYSB3YXRjaGVyIGNvbmZpZ3VyZWQgdG8gd2F0Y2ggYExvY2FsaXplZENvbXBvbmVudGAncyBgZWZmZWN0aXZlTG9jYWxlYCBwcm9wXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGxhbmdcbiAqL1xuYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZyk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogKipOb3RlKio6IHRoaXMgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgYExvY2FsaXplZENvbXBvbmVudGAncyBgY29ubmVjdExvY2FsaXplZGAgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgdGVhcnMgZG93biBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgbWVyZ2VNZXNzYWdlcyh0aGlzKTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdE1lc3NhZ2VzIGFzIGMsIGRpc2Nvbm5lY3RNZXNzYWdlcyBhcyBkLCBzZXRVcE1lc3NhZ2VzIGFzIHMsIHVwZGF0ZU1lc3NhZ2VzIGFzIHUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==