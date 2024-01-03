"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-sheet_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-sheet.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-sheet.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteSheet: () => (/* binding */ CalciteSheet),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusTrapComponent.js */ "./node_modules/@esri/calcite-components/dist/components/focusTrapComponent.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _openCloseComponent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./openCloseComponent.js */ "./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _scrim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scrim.js */ "./node_modules/@esri/calcite-components/dist/components/scrim.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */









const CSS = {
  scrim: "scrim",
  container: "container",
  containerOpen: "container--open",
  content: "content",
  containerSlottedInShell: "container--slotted-in-shell",
};

const sheetCss = ":host{position:absolute;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;visibility:hidden !important;--calcite-sheet-scrim-background-internal:rgba(0, 0, 0, 0.85);--calcite-scrim-shadow-block-start-internal:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-block-end-internal:0 -4px 8px -1px rgba(0, 0, 0, 0.08), 0 -2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-inline-start-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08), 2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-inline-end-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08), -2px 0 4px -1px rgba(0, 0, 0, 0.04)}.calcite--rtl{--calcite-scrim-shadow-inline-start-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08), -2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-inline-end-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08), 2px 0 4px -1px rgba(0, 0, 0, 0.04)}.container{visibility:hidden;position:fixed;z-index:var(--calcite-app-z-index-overlay);display:flex;overflow-y:hidden;color:var(--calcite-ui-text-2);opacity:0;transition:visibility 0ms linear var(--calcite-internal-animation-timing-medium), opacity var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([position=inline-start]) .container{justify-content:flex-start;inset-block:0;inset-inline:0 auto;--calcite-sheet-hidden-position-internal:translate3d(-1rem, 0, 0)}:host([position=inline-end]) .container{justify-content:flex-end;inset-block:0;inset-inline:auto 0;--calcite-sheet-hidden-position-internal:translate3d(1rem, 0, 0)}:host([position=block-start]) .container{align-items:flex-start;inset-block:0 auto;inset-inline:0;--calcite-sheet-hidden-position-internal:translate3d(0, -1rem, 0)}:host([position=block-end]) .container{align-items:flex-end;inset-block:auto 0;inset-inline:0;--calcite-sheet-hidden-position-internal:translate3d(0, 1rem, 0)}:host([display-mode=float]) .content{--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([display-mode=overlay][position=inline-start]) .container{box-shadow:var(--calcite-scrim-shadow-inline-start-internal)}:host([display-mode=overlay][position=inline-end]) .container{box-shadow:var(--calcite-scrim-shadow-inline-end-internal)}:host([display-mode=overlay][position=block-start]) .container{box-shadow:var(--calcite-scrim-shadow-block-start-internal)}:host([display-mode=overlay][position=block-end]) .container{box-shadow:var(--calcite-scrim-shadow-block-end-internal)}:host([position^=inline]) .container,:host([position^=inline]) .content{inline-size:var(--calcite-sheet-width-internal);max-inline-size:var(--calcite-sheet-max-width-internal);min-inline-size:var(--calcite-sheet-min-width-internal)}:host([position^=block]) .container,:host([position^=block]) .content{block-size:var(--calcite-sheet-height-internal);max-block-size:var(--calcite-sheet-max-height-internal);min-block-size:var(--calcite-sheet-min-height-internal)}:host([display-mode=float][position^=inline]) .container{block-size:calc(100% - 1.5rem);max-block-size:calc(100% - 1.5rem);min-block-size:calc(100% - 1.5rem)}:host([display-mode=float][position^=block]) .container{inline-size:calc(100% - 1.5rem);max-inline-size:calc(100% - 1.5rem);min-inline-size:calc(100% - 1.5rem)}:host([position^=inline][width-scale=s]){--calcite-sheet-width-internal:var(--calcite-sheet-width, 15vw);--calcite-sheet-max-width-internal:var(--calcite-sheet-max-width, 360px);--calcite-sheet-min-width-internal:var(--calcite-sheet-min-width, 260px)}:host([position^=inline][width-scale=m]){--calcite-sheet-width-internal:var(--calcite-sheet-width, 25vw);--calcite-sheet-max-width-internal:var(--calcite-sheet-max-width, 420px);--calcite-sheet-min-width-internal:var(--calcite-sheet-min-width, 300px)}:host([position^=inline][width-scale=l]){--calcite-sheet-width-internal:var(--calcite-sheet-width, 45vw);--calcite-sheet-max-width-internal:var(--calcite-sheet-max-width, 680px);--calcite-sheet-min-width-internal:var(--calcite-sheet-min-width, 340px)}:host([position^=block][height-scale=s]){--calcite-sheet-min-height-internal:var(--calcite-sheet-min-height, 160px);--calcite-sheet-height-internal:var(--calcite-sheet-height, 30vh);--calcite-sheet-max-height-internal:var(--calcite-sheet-max-height, 30vh)}:host([position^=block][height-scale=m]){--calcite-sheet-min-height-internal:var(--calcite-sheet-min-height, 200px);--calcite-sheet-height-internal:var(--calcite-sheet-height, 45vh);--calcite-sheet-max-height-internal:var(--calcite-sheet-max-height, 50vh)}:host([position^=block][height-scale=l]){--calcite-sheet-min-height-internal:var(--calcite-sheet-min-height, 240px);--calcite-sheet-height-internal:var(--calcite-sheet-height, 60vh);--calcite-sheet-max-height-internal:var(--calcite-sheet-max-height, 70vh)}.scrim{--calcite-scrim-background:var(--calcite-sheet-scrim-background, var(--calcite-sheet-scrim-background-internal));position:fixed;inset:0px;display:flex;overflow-y:hidden}:host([opened]){visibility:visible !important}.content{position:relative;z-index:var(--calcite-app-z-index-modal);box-sizing:border-box;display:block;max-block-size:100%;max-inline-size:100%;overflow-y:hidden;padding:0px;background-color:var(--calcite-ui-foreground-1);max-block-size:100%;visibility:hidden;transition:transform var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear var(--calcite-internal-animation-timing-medium), opacity var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88);transform:var(--calcite-sheet-hidden-position-internal)}.container--open .content{transform:translate3d(0, 0, 0)}:host([display-mode=float]) .content,:host([display-mode=float]) .container{border-radius:0.25rem}:host([display-mode=float]) .container{padding:0.75rem}.container--open{visibility:visible;opacity:1;transition-delay:0ms}.container--open .content{pointer-events:auto;visibility:visible;opacity:1;transition:transform var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-inline-size var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-block-size var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition-delay:0ms}:host([position=inline-start]) .content,:host([position=inline-end]) .content{block-size:100%}:host([position=block-start]) .content,:host([position=block-end]) .content{inline-size:100%}:host([position]) .container--slotted-in-shell{pointer-events:auto;position:absolute;inline-size:100%;max-inline-size:100%;min-inline-size:100%;block-size:100%;max-block-size:100%;min-block-size:100%}:host([position]) .container--slotted-in-shell calcite-scrim{position:absolute}:host([hidden]){display:none}[hidden]{display:none}";

const Sheet = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteSheetBeforeClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.createEvent)(this, "calciteSheetBeforeClose", 6);
    this.calciteSheetClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.createEvent)(this, "calciteSheetClose", 6);
    this.calciteSheetBeforeOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.createEvent)(this, "calciteSheetBeforeOpen", 6);
    this.calciteSheetOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.createEvent)(this, "calciteSheetOpen", 6);
    //--------------------------------------------------------------------------
    //
    //  Private Properties/ State
    //
    //--------------------------------------------------------------------------
    this.openTransitionProp = "opacity";
    this.ignoreOpenChange = false;
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_3__.c)("mutation", () => this.handleMutationObserver());
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
      this.contentId = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.m)(el);
    };
    this.openEnd = () => {
      this.setFocus();
      this.el.removeEventListener("calciteSheetOpen", this.openEnd);
    };
    this.handleOutsideClose = () => {
      if (this.outsideCloseDisabled) {
        return;
      }
      this.open = false;
    };
    this.closeSheet = async () => {
      if (this.beforeClose) {
        try {
          await this.beforeClose(this.el);
        }
        catch (_error) {
          // close prevented
          requestAnimationFrame(() => {
            this.ignoreOpenChange = true;
            this.open = true;
            this.ignoreOpenChange = false;
          });
          return;
        }
      }
      this.opened = false;
      this.removeOverflowHiddenClass();
    };
    this.beforeClose = undefined;
    this.displayMode = "overlay";
    this.escapeDisabled = false;
    this.heightScale = "m";
    this.focusTrapDisabled = false;
    this.label = undefined;
    this.open = false;
    this.opened = false;
    this.outsideCloseDisabled = false;
    this.position = "inline-start";
    this.slottedInShell = undefined;
    this.widthScale = "m";
  }
  handleFocusTrapDisabled(focusTrapDisabled) {
    if (!this.open) {
      return;
    }
    focusTrapDisabled ? (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.d)(this) : (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
  }
  toggleSheet(value) {
    if (this.ignoreOpenChange) {
      return;
    }
    if (value) {
      this.openSheet();
    }
    else {
      this.closeSheet();
    }
  }
  handleOpenedChange() {
    (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_4__.o)(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
    // when sheet initially renders, if active was set we need to open as watcher doesn't fire
    if (this.open) {
      requestAnimationFrame(() => this.openSheet());
    }
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  connectedCallback() {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
  }
  disconnectedCallback() {
    this.removeOverflowHiddenClass();
    this.mutationObserver?.disconnect();
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    this.slottedInShell = false;
  }
  render() {
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(this.el);
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.Host, { "aria-describedby": this.contentId, "aria-label": this.label, "aria-modal": "true", role: "dialog" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", { class: {
        [CSS.container]: true,
        [CSS.containerOpen]: this.opened,
        [CSS.containerSlottedInShell]: this.slottedInShell,
        [_dom_js__WEBPACK_IMPORTED_MODULE_0__.C.rtl]: dir === "rtl",
      } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-scrim", { class: CSS.scrim, onClick: this.handleOutsideClose }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", { class: {
        [CSS.content]: true,
      },
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setTransitionEl }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot", null)))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  handleEscape(event) {
    if (this.open && !this.escapeDisabled && event.key === "Escape" && !event.defaultPrevented) {
      this.open = false;
      event.preventDefault();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Sets focus on the component's "close" button (the first focusable item).
   *
   */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.el);
  }
  /**
   * Updates the element(s) that are used within the focus-trap of the component.
   */
  async updateFocusTrapElements() {
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onBeforeOpen() {
    this.calciteSheetBeforeOpen.emit();
  }
  onOpen() {
    this.calciteSheetOpen.emit();
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
  }
  onBeforeClose() {
    this.calciteSheetBeforeClose.emit();
  }
  onClose() {
    this.calciteSheetClose.emit();
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  openSheet() {
    this.el.addEventListener("calciteSheetOpen", this.openEnd);
    this.opened = true;
    if (!this.slottedInShell) {
      this.initialOverflowCSS = document.documentElement.style.overflow;
      // use an inline style instead of a utility class to avoid global class declarations.
      document.documentElement.style.setProperty("overflow", "hidden");
    }
  }
  removeOverflowHiddenClass() {
    document.documentElement.style.setProperty("overflow", this.initialOverflowCSS);
  }
  handleMutationObserver() {
    this.updateFocusTrapElements();
  }
  get el() { return this; }
  static get watchers() { return {
    "focusTrapDisabled": ["handleFocusTrapDisabled"],
    "open": ["toggleSheet"],
    "opened": ["handleOpenedChange"]
  }; }
  static get style() { return sheetCss; }
}, [1, "calcite-sheet", {
    "beforeClose": [16],
    "displayMode": [513, "display-mode"],
    "escapeDisabled": [516, "escape-disabled"],
    "heightScale": [513, "height-scale"],
    "focusTrapDisabled": [516, "focus-trap-disabled"],
    "label": [1],
    "open": [1540],
    "opened": [1540],
    "outsideCloseDisabled": [516, "outside-close-disabled"],
    "position": [513],
    "slottedInShell": [4, "slotted-in-shell"],
    "widthScale": [513, "width-scale"],
    "setFocus": [64],
    "updateFocusTrapElements": [64]
  }, [[8, "keydown", "handleEscape"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-sheet", "calcite-loader", "calcite-scrim"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-sheet":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Sheet);
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
    case "calcite-scrim":
      if (!customElements.get(tagName)) {
        (0,_scrim_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteSheet = Sheet;
const defineCustomElement = defineCustomElement$1;




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

/***/ "./node_modules/@esri/calcite-components/dist/components/scrim.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/scrim.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Scrim),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */







const CSS = {
  scrim: "scrim",
  content: "content",
};
const BREAKPOINTS = {
  s: 72,
  // medium is assumed default.
  l: 480, // Greater than or equal to 480px.
};

const scrimCss = ":host{position:absolute;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-scrim-background-internal))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}";

const Scrim = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.resizeObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_2__.c)("resize", () => this.handleResize());
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleDefaultSlotChange = (event) => {
      this.hasContent = (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.w)(event);
    };
    this.storeLoaderEl = (el) => {
      this.loaderEl = el;
      this.handleResize();
    };
    this.loading = false;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.loaderScale = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.hasContent = false;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.u)(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    this.resizeObserver?.observe(this.el);
  }
  async componentWillLoad() {
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.s)(this);
  }
  disconnectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    this.resizeObserver?.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Method
  //
  // --------------------------------------------------------------------------
  render() {
    const { hasContent, loading, messages } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: CSS.scrim }, loading ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("calcite-loader", { label: messages.loading, scale: this.loaderScale,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.storeLoaderEl })) : null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: CSS.content, hidden: !hasContent }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { onSlotchange: this.handleDefaultSlotChange }))));
  }
  getScale(size) {
    if (size < BREAKPOINTS.s) {
      return "s";
    }
    else if (size >= BREAKPOINTS.l) {
      return "l";
    }
    else {
      return "m";
    }
  }
  handleResize() {
    const { loaderEl, el } = this;
    if (!loaderEl) {
      return;
    }
    this.loaderScale = this.getScale(Math.min(el.clientHeight, el.clientWidth) ?? 0);
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return scrimCss; }
}, [1, "calcite-scrim", {
    "loading": [516],
    "messages": [1040],
    "messageOverrides": [1040],
    "loaderScale": [32],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "hasContent": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-scrim", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-scrim":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Scrim);
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_4__.d)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMGU0OGViYjAzNzZlOGFkYzE3MDc0MGM0ZTBkYTQ2ZTcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0c7QUFDUDtBQUN3QztBQUNsQztBQUN6RDtBQUNxQjtBQUNqQjtBQUNEOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isa0JBQWtCLFVBQVUsMkNBQTJDLGFBQWEsNkJBQTZCLDhEQUE4RCxtSEFBbUgsbUhBQW1ILG9IQUFvSCxvSEFBb0gsY0FBYyxzSEFBc0gsa0hBQWtILFdBQVcsa0JBQWtCLGVBQWUsMkNBQTJDLGFBQWEsa0JBQWtCLCtCQUErQixVQUFVLGdMQUFnTCwwQ0FBMEMsMkJBQTJCLGNBQWMsb0JBQW9CLGtFQUFrRSx3Q0FBd0MseUJBQXlCLGNBQWMsb0JBQW9CLGlFQUFpRSx5Q0FBeUMsdUJBQXVCLG1CQUFtQixlQUFlLGtFQUFrRSx1Q0FBdUMscUJBQXFCLG1CQUFtQixlQUFlLGlFQUFpRSxxQ0FBcUMsbUZBQW1GLGtHQUFrRyx1R0FBdUcsZ0VBQWdFLDZEQUE2RCw4REFBOEQsMkRBQTJELCtEQUErRCw0REFBNEQsNkRBQTZELDBEQUEwRCx3RUFBd0UsZ0RBQWdELHdEQUF3RCx3REFBd0Qsc0VBQXNFLGdEQUFnRCx3REFBd0Qsd0RBQXdELHlEQUF5RCwrQkFBK0IsbUNBQW1DLG1DQUFtQyx3REFBd0QsZ0NBQWdDLG9DQUFvQyxvQ0FBb0MseUNBQXlDLGdFQUFnRSx5RUFBeUUseUVBQXlFLHlDQUF5QyxnRUFBZ0UseUVBQXlFLHlFQUF5RSx5Q0FBeUMsZ0VBQWdFLHlFQUF5RSx5RUFBeUUseUNBQXlDLDJFQUEyRSxrRUFBa0UsMEVBQTBFLHlDQUF5QywyRUFBMkUsa0VBQWtFLDBFQUEwRSx5Q0FBeUMsMkVBQTJFLGtFQUFrRSwwRUFBMEUsT0FBTyxpSEFBaUgsZUFBZSxVQUFVLGFBQWEsa0JBQWtCLGdC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cUI7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVnRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkU7QUFDdkI7O0FBRXREO0FBQ0E7QUFDQSxpQkFBaUIsVUFBVSxHQUFHLEtBQUs7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsaURBQWlELG9GQUFZLGFBQWEsVUFBVSxnQkFBZ0IsS0FBSztBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBSztBQUNaO0FBQ0E7QUFDQSxVQUFVLEtBQUs7QUFDZjtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFrQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLXNoZWV0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9sb2FkYWJsZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvbG9hZGVyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9vcGVuQ2xvc2VDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3NjcmltLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy90OW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGgsIEhvc3QgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBtIGFzIGVuc3VyZUlkLCBiIGFzIGdldEVsZW1lbnREaXIsIEMgYXMgQ1NTX1VUSUxJVFksIGYgYXMgZm9jdXNGaXJzdFRhYmJhYmxlIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWFjdGl2YXRlRm9jdXNUcmFwLCBhIGFzIGFjdGl2YXRlRm9jdXNUcmFwLCBjIGFzIGNvbm5lY3RGb2N1c1RyYXAsIHUgYXMgdXBkYXRlRm9jdXNUcmFwRWxlbWVudHMgfSBmcm9tICcuL2ZvY3VzVHJhcENvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudEZvY3VzYWJsZSB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcbmltcG9ydCB7IG8gYXMgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQgfSBmcm9tICcuL29wZW5DbG9zZUNvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMyB9IGZyb20gJy4vbG9hZGVyLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9zY3JpbS5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgc2NyaW06IFwic2NyaW1cIixcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuICBjb250YWluZXJPcGVuOiBcImNvbnRhaW5lci0tb3BlblwiLFxuICBjb250ZW50OiBcImNvbnRlbnRcIixcbiAgY29udGFpbmVyU2xvdHRlZEluU2hlbGw6IFwiY29udGFpbmVyLS1zbG90dGVkLWluLXNoZWxsXCIsXG59O1xuXG5jb25zdCBzaGVldENzcyA9IFwiOmhvc3R7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQ6MHB4O3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1vdmVybGF5KTtkaXNwbGF5OmZsZXg7dmlzaWJpbGl0eTpoaWRkZW4gIWltcG9ydGFudDstLWNhbGNpdGUtc2hlZXQtc2NyaW0tYmFja2dyb3VuZC1pbnRlcm5hbDpyZ2JhKDAsIDAsIDAsIDAuODUpOy0tY2FsY2l0ZS1zY3JpbS1zaGFkb3ctYmxvY2stc3RhcnQtaW50ZXJuYWw6MCA0cHggOHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA0KTstLWNhbGNpdGUtc2NyaW0tc2hhZG93LWJsb2NrLWVuZC1pbnRlcm5hbDowIC00cHggOHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMCAtMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7LS1jYWxjaXRlLXNjcmltLXNoYWRvdy1pbmxpbmUtc3RhcnQtaW50ZXJuYWw6NHB4IDAgOHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMnB4IDAgNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA0KTstLWNhbGNpdGUtc2NyaW0tc2hhZG93LWlubGluZS1lbmQtaW50ZXJuYWw6LTRweCAwIDhweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIC0ycHggMCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDQpfS5jYWxjaXRlLS1ydGx7LS1jYWxjaXRlLXNjcmltLXNoYWRvdy1pbmxpbmUtc3RhcnQtaW50ZXJuYWw6LTRweCAwIDhweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIC0ycHggMCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDQpOy0tY2FsY2l0ZS1zY3JpbS1zaGFkb3ctaW5saW5lLWVuZC1pbnRlcm5hbDo0cHggMCA4cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAycHggMCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDQpfS5jb250YWluZXJ7dmlzaWJpbGl0eTpoaWRkZW47cG9zaXRpb246Zml4ZWQ7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LW92ZXJsYXkpO2Rpc3BsYXk6ZmxleDtvdmVyZmxvdy15OmhpZGRlbjtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7b3BhY2l0eTowO3RyYW5zaXRpb246dmlzaWJpbGl0eSAwbXMgbGluZWFyIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pLCBvcGFjaXR5IHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGN1YmljLWJlemllcigwLjIxNSwgMC40NCwgMC40MiwgMC44OCl9Omhvc3QoW3Bvc2l0aW9uPWlubGluZS1zdGFydF0pIC5jb250YWluZXJ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7aW5zZXQtYmxvY2s6MDtpbnNldC1pbmxpbmU6MCBhdXRvOy0tY2FsY2l0ZS1zaGVldC1oaWRkZW4tcG9zaXRpb24taW50ZXJuYWw6dHJhbnNsYXRlM2QoLTFyZW0sIDAsIDApfTpob3N0KFtwb3NpdGlvbj1pbmxpbmUtZW5kXSkgLmNvbnRhaW5lcntqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7aW5zZXQtYmxvY2s6MDtpbnNldC1pbmxpbmU6YXV0byAwOy0tY2FsY2l0ZS1zaGVldC1oaWRkZW4tcG9zaXRpb24taW50ZXJuYWw6dHJhbnNsYXRlM2QoMXJlbSwgMCwgMCl9Omhvc3QoW3Bvc2l0aW9uPWJsb2NrLXN0YXJ0XSkgLmNvbnRhaW5lcnthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2luc2V0LWJsb2NrOjAgYXV0bztpbnNldC1pbmxpbmU6MDstLWNhbGNpdGUtc2hlZXQtaGlkZGVuLXBvc2l0aW9uLWludGVybmFsOnRyYW5zbGF0ZTNkKDAsIC0xcmVtLCAwKX06aG9zdChbcG9zaXRpb249YmxvY2stZW5kXSkgLmNvbnRhaW5lcnthbGlnbi1pdGVtczpmbGV4LWVuZDtpbnNldC1ibG9jazphdXRvIDA7aW5zZXQtaW5saW5lOjA7LS1jYWxjaXRlLXNoZWV0LWhpZGRlbi1wb3NpdGlvbi1pbnRlcm5hbDp0cmFuc2xhdGUzZCgwLCAxcmVtLCAwKX06aG9zdChbZGlzcGxheS1tb2RlPWZsb2F0XSkgLmNvbnRlbnR7LS10dy1zaGFkb3c6MCAycHggMTJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggNHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjE2KTstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMnB4IDEycHggLTRweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDJweCA0cHggLTJweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO2JveC1zaGFkb3c6dmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KX06aG9zdChbZGlzcGxheS1tb2RlPW92ZXJsYXldW3Bvc2l0aW9uPWlubGluZS1zdGFydF0pIC5jb250YWluZXJ7Ym94LXNoYWRvdzp2YXIoLS1jYWxjaXRlLXNjcmltLXNoYWRvdy1pbmxpbmUtc3RhcnQtaW50ZXJuYWwpfTpob3N0KFtkaXNwbGF5LW1vZGU9b3ZlcmxheV1bcG9zaXRpb249aW5saW5lLWVuZF0pIC5jb250YWluZXJ7Ym94LXNoYWRvdzp2YXIoLS1jYWxjaXRlLXNjcmltLXNoYWRvdy1pbmxpbmUtZW5kLWludGVybmFsKX06aG9zdChbZGlzcGxheS1tb2RlPW92ZXJsYXldW3Bvc2l0aW9uPWJsb2NrLXN0YXJ0XSkgLmNvbnRhaW5lcntib3gtc2hhZG93OnZhcigtLWNhbGNpdGUtc2NyaW0tc2hhZG93LWJsb2NrLXN0YXJ0LWludGVybmFsKX06aG9zdChbZGlzcGxheS1tb2RlPW92ZXJsYXldW3Bvc2l0aW9uPWJsb2NrLWVuZF0pIC5jb250YWluZXJ7Ym94LXNoYWRvdzp2YXIoLS1jYWxjaXRlLXNjcmltLXNoYWRvdy1ibG9jay1lbmQtaW50ZXJuYWwpfTpob3N0KFtwb3NpdGlvbl49aW5saW5lXSkgLmNvbnRhaW5lciw6aG9zdChbcG9zaXRpb25ePWlubGluZV0pIC5jb250ZW50e2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtc2hlZXQtd2lkdGgtaW50ZXJuYWwpO21heC1pbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLXNoZWV0LW1heC13aWR0aC1pbnRlcm5hbCk7bWluLWlubGluZS1zaXplOnZhcigtLWNhbGNpdGUtc2hlZXQtbWluLXdpZHRoLWludGVybmFsKX06aG9zdChbcG9zaXRpb25ePWJsb2NrXSkgLmNvbnRhaW5lciw6aG9zdChbcG9zaXRpb25ePWJsb2NrXSkgLmNvbnRlbnR7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLXNoZWV0LWhlaWdodC1pbnRlcm5hbCk7bWF4LWJsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1zaGVldC1tYXgtaGVpZ2h0LWludGVybmFsKTttaW4tYmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLXNoZWV0LW1pbi1oZWlnaHQtaW50ZXJuYWwpfTpob3N0KFtkaXNwbGF5LW1vZGU9ZmxvYXRdW3Bvc2l0aW9uXj1pbmxpbmVdKSAuY29udGFpbmVye2Jsb2NrLXNpemU6Y2FsYygxMDAlIC0gMS41cmVtKTttYXgtYmxvY2stc2l6ZTpjYWxjKDEwMCUgLSAxLjVyZW0pO21pbi1ibG9jay1zaXplOmNhbGMoMTAwJSAtIDEuNXJlbSl9Omhvc3QoW2Rpc3BsYXktbW9kZT1mbG9hdF1bcG9zaXRpb25ePWJsb2NrXSkgLmNvbnRhaW5lcntpbmxpbmUtc2l6ZTpjYWxjKDEwMCUgLSAxLjVyZW0pO21heC1pbmxpbmUtc2l6ZTpjYWxjKDEwMCUgLSAxLjVyZW0pO21pbi1pbmxpbmUtc2l6ZTpjYWxjKDEwMCUgLSAxLjVyZW0pfTpob3N0KFtwb3NpdGlvbl49aW5saW5lXVt3aWR0aC1zY2FsZT1zXSl7LS1jYWxjaXRlLXNoZWV0LXdpZHRoLWludGVybmFsOnZhcigtLWNhbGNpdGUtc2hlZXQtd2lkdGgsIDE1dncpOy0tY2FsY2l0ZS1zaGVldC1tYXgtd2lkdGgtaW50ZXJuYWw6dmFyKC0tY2FsY2l0ZS1zaGVldC1tYXgtd2lkdGgsIDM2MHB4KTstLWNhbGNpdGUtc2hlZXQtbWluLXdpZHRoLWludGVybmFsOnZhcigtLWNhbGNpdGUtc2hlZXQtbWluLXdpZHRoLCAyNjBweCl9Omhvc3QoW3Bvc2l0aW9uXj1pbmxpbmVdW3dpZHRoLXNjYWxlPW1dKXstLWNhbGNpdGUtc2hlZXQtd2lkdGgtaW50ZXJuYWw6dmFyKC0tY2FsY2l0ZS1zaGVldC13aWR0aCwgMjV2dyk7LS1jYWxjaXRlLXNoZWV0LW1heC13aWR0aC1pbnRlcm5hbDp2YXIoLS1jYWxjaXRlLXNoZWV0LW1heC13aWR0aCwgNDIwcHgpOy0tY2FsY2l0ZS1zaGVldC1taW4td2lkdGgtaW50ZXJuYWw6dmFyKC0tY2FsY2l0ZS1zaGVldC1taW4td2lkdGgsIDMwMHB4KX06aG9zdChbcG9zaXRpb25ePWlubGluZV1bd2lkdGgtc2NhbGU9bF0pey0tY2FsY2l0ZS1zaGVldC13aWR0aC1pbnRlcm5hbDp2YXIoLS1jYWxjaXRlLXNoZWV0LXdpZHRoLCA0NXZ3KTstLWNhbGNpdGUtc2hlZXQtbWF4LXdpZHRoLWludGVybmFsOnZhcigtLWNhbGNpdGUtc2hlZXQtbWF4LXdpZHRoLCA2ODBweCk7LS1jYWxjaXRlLXNoZWV0LW1pbi13aWR0aC1pbnRlcm5hbDp2YXIoLS1jYWxjaXRlLXNoZWV0LW1pbi13aWR0aCwgMzQwcHgpfTpob3N0KFtwb3NpdGlvbl49YmxvY2tdW2hlaWdodC1zY2FsZT1zXSl7LS1jYWxjaXRlLXNoZWV0LW1pbi1oZWlnaHQtaW50ZXJuYWw6dmFyKC0tY2FsY2l0ZS1zaGVldC1taW4taGVpZ2h0LCAxNjBweCk7LS1jYWxjaXRlLXNoZWV0LWhlaWdodC1pbnRlcm5hbDp2YXIoLS1jYWxjaXRlLXNoZWV0LWhlaWdodCwgMzB2aCk7LS1jYWxjaXRlLXNoZWV0LW1heC1oZWlnaHQtaW50ZXJuYWw6dmFyKC0tY2FsY2l0ZS1zaGVldC1tYXgtaGVpZ2h0LCAzMHZoKX06aG9zdChbcG9zaXRpb25ePWJsb2NrXVtoZWlnaHQtc2NhbGU9bV0pey0tY2FsY2l0ZS1zaGVldC1taW4taGVpZ2h0LWludGVybmFsOnZhcigtLWNhbGNpdGUtc2hlZXQtbWluLWhlaWdodCwgMjAwcHgpOy0tY2FsY2l0ZS1zaGVldC1oZWlnaHQtaW50ZXJuYWw6dmFyKC0tY2FsY2l0ZS1zaGVldC1oZWlnaHQsIDQ1dmgpOy0tY2FsY2l0ZS1zaGVldC1tYXgtaGVpZ2h0LWludGVybmFsOnZhcigtLWNhbGNpdGUtc2hlZXQtbWF4LWhlaWdodCwgNTB2aCl9Omhvc3QoW3Bvc2l0aW9uXj1ibG9ja11baGVpZ2h0LXNjYWxlPWxdKXstLWNhbGNpdGUtc2hlZXQtbWluLWhlaWdodC1pbnRlcm5hbDp2YXIoLS1jYWxjaXRlLXNoZWV0LW1pbi1oZWlnaHQsIDI0MHB4KTstLWNhbGNpdGUtc2hlZXQtaGVpZ2h0LWludGVybmFsOnZhcigtLWNhbGNpdGUtc2hlZXQtaGVpZ2h0LCA2MHZoKTstLWNhbGNpdGUtc2hlZXQtbWF4LWhlaWdodC1pbnRlcm5hbDp2YXIoLS1jYWxjaXRlLXNoZWV0LW1heC1oZWlnaHQsIDcwdmgpfS5zY3JpbXstLWNhbGNpdGUtc2NyaW0tYmFja2dyb3VuZDp2YXIoLS1jYWxjaXRlLXNoZWV0LXNjcmltLWJhY2tncm91bmQsIHZhcigtLWNhbGNpdGUtc2hlZXQtc2NyaW0tYmFja2dyb3VuZC1pbnRlcm5hbCkpO3Bvc2l0aW9uOmZpeGVkO2luc2V0OjBweDtkaXNwbGF5OmZsZXg7b3ZlcmZsb3cteTpoaWRkZW59Omhvc3QoW29wZW5lZF0pe3Zpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50fS5jb250ZW50e3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1tb2RhbCk7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6YmxvY2s7bWF4LWJsb2NrLXNpemU6MTAwJTttYXgtaW5saW5lLXNpemU6MTAwJTtvdmVyZmxvdy15OmhpZGRlbjtwYWRkaW5nOjBweDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTttYXgtYmxvY2stc2l6ZToxMDAlO3Zpc2liaWxpdHk6aGlkZGVuO3RyYW5zaXRpb246dHJhbnNmb3JtIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGN1YmljLWJlemllcigwLjIxNSwgMC40NCwgMC40MiwgMC44OCksIHZpc2liaWxpdHkgMG1zIGxpbmVhciB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSwgb3BhY2l0eSB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNDQsIDAuNDIsIDAuODgpO3RyYW5zZm9ybTp2YXIoLS1jYWxjaXRlLXNoZWV0LWhpZGRlbi1wb3NpdGlvbi1pbnRlcm5hbCl9LmNvbnRhaW5lci0tb3BlbiAuY29udGVudHt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgMCwgMCl9Omhvc3QoW2Rpc3BsYXktbW9kZT1mbG9hdF0pIC5jb250ZW50LDpob3N0KFtkaXNwbGF5LW1vZGU9ZmxvYXRdKSAuY29udGFpbmVye2JvcmRlci1yYWRpdXM6MC4yNXJlbX06aG9zdChbZGlzcGxheS1tb2RlPWZsb2F0XSkgLmNvbnRhaW5lcntwYWRkaW5nOjAuNzVyZW19LmNvbnRhaW5lci0tb3Blbnt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO3RyYW5zaXRpb24tZGVsYXk6MG1zfS5jb250YWluZXItLW9wZW4gLmNvbnRlbnR7cG9pbnRlci1ldmVudHM6YXV0bzt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO3RyYW5zaXRpb246dHJhbnNmb3JtIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGN1YmljLWJlemllcigwLjIxNSwgMC40NCwgMC40MiwgMC44OCksIHZpc2liaWxpdHkgMG1zIGxpbmVhciwgb3BhY2l0eSB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNDQsIDAuNDIsIDAuODgpLCBtYXgtaW5saW5lLXNpemUgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bSkgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjQ0LCAwLjQyLCAwLjg4KSwgbWF4LWJsb2NrLXNpemUgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bSkgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjQ0LCAwLjQyLCAwLjg4KTt0cmFuc2l0aW9uLWRlbGF5OjBtc306aG9zdChbcG9zaXRpb249aW5saW5lLXN0YXJ0XSkgLmNvbnRlbnQsOmhvc3QoW3Bvc2l0aW9uPWlubGluZS1lbmRdKSAuY29udGVudHtibG9jay1zaXplOjEwMCV9Omhvc3QoW3Bvc2l0aW9uPWJsb2NrLXN0YXJ0XSkgLmNvbnRlbnQsOmhvc3QoW3Bvc2l0aW9uPWJsb2NrLWVuZF0pIC5jb250ZW50e2lubGluZS1zaXplOjEwMCV9Omhvc3QoW3Bvc2l0aW9uXSkgLmNvbnRhaW5lci0tc2xvdHRlZC1pbi1zaGVsbHtwb2ludGVyLWV2ZW50czphdXRvO3Bvc2l0aW9uOmFic29sdXRlO2lubGluZS1zaXplOjEwMCU7bWF4LWlubGluZS1zaXplOjEwMCU7bWluLWlubGluZS1zaXplOjEwMCU7YmxvY2stc2l6ZToxMDAlO21heC1ibG9jay1zaXplOjEwMCU7bWluLWJsb2NrLXNpemU6MTAwJX06aG9zdChbcG9zaXRpb25dKSAuY29udGFpbmVyLS1zbG90dGVkLWluLXNoZWxsIGNhbGNpdGUtc2NyaW17cG9zaXRpb246YWJzb2x1dGV9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IFNoZWV0ID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVTaGVldEJlZm9yZUNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlU2hlZXRCZWZvcmVDbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVTaGVldENsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlU2hlZXRDbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVTaGVldEJlZm9yZU9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVTaGVldEJlZm9yZU9wZW5cIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlU2hlZXRPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlU2hlZXRPcGVuXCIsIDYpO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIFByb3BlcnRpZXMvIFN0YXRlXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5vcGVuVHJhbnNpdGlvblByb3AgPSBcIm9wYWNpdHlcIjtcbiAgICB0aGlzLmlnbm9yZU9wZW5DaGFuZ2UgPSBmYWxzZTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsICgpID0+IHRoaXMuaGFuZGxlTXV0YXRpb25PYnNlcnZlcigpKTtcbiAgICB0aGlzLnNldFRyYW5zaXRpb25FbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy50cmFuc2l0aW9uRWwgPSBlbDtcbiAgICAgIHRoaXMuY29udGVudElkID0gZW5zdXJlSWQoZWwpO1xuICAgIH07XG4gICAgdGhpcy5vcGVuRW5kID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2FsY2l0ZVNoZWV0T3BlblwiLCB0aGlzLm9wZW5FbmQpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVPdXRzaWRlQ2xvc2UgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vdXRzaWRlQ2xvc2VEaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB9O1xuICAgIHRoaXMuY2xvc2VTaGVldCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmJlZm9yZUNsb3NlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5iZWZvcmVDbG9zZSh0aGlzLmVsKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICAgICAgLy8gY2xvc2UgcHJldmVudGVkXG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaWdub3JlT3BlbkNoYW5nZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pZ25vcmVPcGVuQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZW1vdmVPdmVyZmxvd0hpZGRlbkNsYXNzKCk7XG4gICAgfTtcbiAgICB0aGlzLmJlZm9yZUNsb3NlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGlzcGxheU1vZGUgPSBcIm92ZXJsYXlcIjtcbiAgICB0aGlzLmVzY2FwZURpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5oZWlnaHRTY2FsZSA9IFwibVwiO1xuICAgIHRoaXMuZm9jdXNUcmFwRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5vdXRzaWRlQ2xvc2VEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMucG9zaXRpb24gPSBcImlubGluZS1zdGFydFwiO1xuICAgIHRoaXMuc2xvdHRlZEluU2hlbGwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy53aWR0aFNjYWxlID0gXCJtXCI7XG4gIH1cbiAgaGFuZGxlRm9jdXNUcmFwRGlzYWJsZWQoZm9jdXNUcmFwRGlzYWJsZWQpIHtcbiAgICBpZiAoIXRoaXMub3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb2N1c1RyYXBEaXNhYmxlZCA/IGRlYWN0aXZhdGVGb2N1c1RyYXAodGhpcykgOiBhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzKTtcbiAgfVxuICB0b2dnbGVTaGVldCh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmlnbm9yZU9wZW5DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLm9wZW5TaGVldCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2VTaGVldCgpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVPcGVuZWRDaGFuZ2UoKSB7XG4gICAgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICAvLyB3aGVuIHNoZWV0IGluaXRpYWxseSByZW5kZXJzLCBpZiBhY3RpdmUgd2FzIHNldCB3ZSBuZWVkIHRvIG9wZW4gYXMgd2F0Y2hlciBkb2Vzbid0IGZpcmVcbiAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5vcGVuU2hlZXQoKSk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8ub2JzZXJ2ZSh0aGlzLmVsLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICBjb25uZWN0Rm9jdXNUcmFwKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucmVtb3ZlT3ZlcmZsb3dIaWRkZW5DbGFzcygpO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIGRlYWN0aXZhdGVGb2N1c1RyYXAodGhpcyk7XG4gICAgdGhpcy5zbG90dGVkSW5TaGVsbCA9IGZhbHNlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKHRoaXMuZWwpO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1kZXNjcmliZWRieVwiOiB0aGlzLmNvbnRlbnRJZCwgXCJhcmlhLWxhYmVsXCI6IHRoaXMubGFiZWwsIFwiYXJpYS1tb2RhbFwiOiBcInRydWVcIiwgcm9sZTogXCJkaWFsb2dcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5jb250YWluZXJdOiB0cnVlLFxuICAgICAgICBbQ1NTLmNvbnRhaW5lck9wZW5dOiB0aGlzLm9wZW5lZCxcbiAgICAgICAgW0NTUy5jb250YWluZXJTbG90dGVkSW5TaGVsbF06IHRoaXMuc2xvdHRlZEluU2hlbGwsXG4gICAgICAgIFtDU1NfVVRJTElUWS5ydGxdOiBkaXIgPT09IFwicnRsXCIsXG4gICAgICB9IH0sIGgoXCJjYWxjaXRlLXNjcmltXCIsIHsgY2xhc3M6IENTUy5zY3JpbSwgb25DbGljazogdGhpcy5oYW5kbGVPdXRzaWRlQ2xvc2UgfSksIGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLmNvbnRlbnRdOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IHRoaXMuc2V0VHJhbnNpdGlvbkVsIH0sIGgoXCJzbG90XCIsIG51bGwpKSkpKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoYW5kbGVFc2NhcGUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5vcGVuICYmICF0aGlzLmVzY2FwZURpc2FibGVkICYmIGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIiAmJiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQncyBcImNsb3NlXCIgYnV0dG9uICh0aGUgZmlyc3QgZm9jdXNhYmxlIGl0ZW0pLlxuICAgKlxuICAgKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIGZvY3VzRmlyc3RUYWJiYWJsZSh0aGlzLmVsKTtcbiAgfVxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgZWxlbWVudChzKSB0aGF0IGFyZSB1c2VkIHdpdGhpbiB0aGUgZm9jdXMtdHJhcCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgYXN5bmMgdXBkYXRlRm9jdXNUcmFwRWxlbWVudHMoKSB7XG4gICAgdXBkYXRlRm9jdXNUcmFwRWxlbWVudHModGhpcyk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgb25CZWZvcmVPcGVuKCkge1xuICAgIHRoaXMuY2FsY2l0ZVNoZWV0QmVmb3JlT3Blbi5lbWl0KCk7XG4gIH1cbiAgb25PcGVuKCkge1xuICAgIHRoaXMuY2FsY2l0ZVNoZWV0T3Blbi5lbWl0KCk7XG4gICAgYWN0aXZhdGVGb2N1c1RyYXAodGhpcyk7XG4gIH1cbiAgb25CZWZvcmVDbG9zZSgpIHtcbiAgICB0aGlzLmNhbGNpdGVTaGVldEJlZm9yZUNsb3NlLmVtaXQoKTtcbiAgfVxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY2FsY2l0ZVNoZWV0Q2xvc2UuZW1pdCgpO1xuICAgIGRlYWN0aXZhdGVGb2N1c1RyYXAodGhpcyk7XG4gIH1cbiAgb3BlblNoZWV0KCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNhbGNpdGVTaGVldE9wZW5cIiwgdGhpcy5vcGVuRW5kKTtcbiAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgaWYgKCF0aGlzLnNsb3R0ZWRJblNoZWxsKSB7XG4gICAgICB0aGlzLmluaXRpYWxPdmVyZmxvd0NTUyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdztcbiAgICAgIC8vIHVzZSBhbiBpbmxpbmUgc3R5bGUgaW5zdGVhZCBvZiBhIHV0aWxpdHkgY2xhc3MgdG8gYXZvaWQgZ2xvYmFsIGNsYXNzIGRlY2xhcmF0aW9ucy5cbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIm92ZXJmbG93XCIsIFwiaGlkZGVuXCIpO1xuICAgIH1cbiAgfVxuICByZW1vdmVPdmVyZmxvd0hpZGRlbkNsYXNzKCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIm92ZXJmbG93XCIsIHRoaXMuaW5pdGlhbE92ZXJmbG93Q1NTKTtcbiAgfVxuICBoYW5kbGVNdXRhdGlvbk9ic2VydmVyKCkge1xuICAgIHRoaXMudXBkYXRlRm9jdXNUcmFwRWxlbWVudHMoKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJmb2N1c1RyYXBEaXNhYmxlZFwiOiBbXCJoYW5kbGVGb2N1c1RyYXBEaXNhYmxlZFwiXSxcbiAgICBcIm9wZW5cIjogW1widG9nZ2xlU2hlZXRcIl0sXG4gICAgXCJvcGVuZWRcIjogW1wiaGFuZGxlT3BlbmVkQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIHNoZWV0Q3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLXNoZWV0XCIsIHtcbiAgICBcImJlZm9yZUNsb3NlXCI6IFsxNl0sXG4gICAgXCJkaXNwbGF5TW9kZVwiOiBbNTEzLCBcImRpc3BsYXktbW9kZVwiXSxcbiAgICBcImVzY2FwZURpc2FibGVkXCI6IFs1MTYsIFwiZXNjYXBlLWRpc2FibGVkXCJdLFxuICAgIFwiaGVpZ2h0U2NhbGVcIjogWzUxMywgXCJoZWlnaHQtc2NhbGVcIl0sXG4gICAgXCJmb2N1c1RyYXBEaXNhYmxlZFwiOiBbNTE2LCBcImZvY3VzLXRyYXAtZGlzYWJsZWRcIl0sXG4gICAgXCJsYWJlbFwiOiBbMV0sXG4gICAgXCJvcGVuXCI6IFsxNTQwXSxcbiAgICBcIm9wZW5lZFwiOiBbMTU0MF0sXG4gICAgXCJvdXRzaWRlQ2xvc2VEaXNhYmxlZFwiOiBbNTE2LCBcIm91dHNpZGUtY2xvc2UtZGlzYWJsZWRcIl0sXG4gICAgXCJwb3NpdGlvblwiOiBbNTEzXSxcbiAgICBcInNsb3R0ZWRJblNoZWxsXCI6IFs0LCBcInNsb3R0ZWQtaW4tc2hlbGxcIl0sXG4gICAgXCJ3aWR0aFNjYWxlXCI6IFs1MTMsIFwid2lkdGgtc2NhbGVcIl0sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdLFxuICAgIFwidXBkYXRlRm9jdXNUcmFwRWxlbWVudHNcIjogWzY0XVxuICB9LCBbWzgsIFwia2V5ZG93blwiLCBcImhhbmRsZUVzY2FwZVwiXV1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1zaGVldFwiLCBcImNhbGNpdGUtbG9hZGVyXCIsIFwiY2FsY2l0ZS1zY3JpbVwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1zaGVldFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIFNoZWV0KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWxvYWRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQzKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1zY3JpbVwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlU2hlZXQgPSBTaGVldDtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVTaGVldCwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgQnVpbGQsIGZvcmNlVXBkYXRlIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG5jb25zdCByZXNvbHZlTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIHNldHMgdXAgdGhlIGNvbXBvbmVudCBmb3IgdGhlIGFiaWxpdHkgdG8ga25vdyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnRXaWxsTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0VXBMb2FkYWJsZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgcHJvbWlzZU1hcC5zZXQoY29tcG9uZW50LCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZU1hcC5zZXQoY29tcG9uZW50LCByZXNvbHZlKSkpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGxldHMgdGhlIGxvYWRhYmxlIGNvbXBvbmVudCBrbm93IHRoYXQgaXQgaXMgbm93IGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnREaWRMb2FkKCk6IHZvaWQge1xuICogICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldENvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmVzb2x2ZU1hcC5nZXQoY29tcG9uZW50KSgpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyZSBhIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBTdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkKS5cbiAqXG4gKiBSZXF1aXJlcyByZXF1aXJlcyBgTG9hZGFibGVDb21wb25lbnRgIHRvIGJlIGltcGxlbWVudGVkLlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QuXG4gKlxuICogYGBgXG4gKiBhc3luYyBteU1ldGhvZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAqICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICovXG5mdW5jdGlvbiBjb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJldHVybiBwcm9taXNlTWFwLmdldChjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyaW5nIHRoZSBjb21wb25lbnQgaXMgbG9hZGVkIGFuZCByZW5kZXJlZCBieSB0aGUgYnJvd3NlciAoVGhlIFwiY29tcG9uZW50RGlkTG9hZFwiIFN0ZW5jaWwgbGlmZWN5Y2xlIG1ldGhvZCBoYXMgYmVlbiBjYWxsZWQgYW5kIGFueSBpbnRlcm5hbCBlbGVtZW50cyBhcmUgZm9jdXNhYmxlKS5cbiAqXG4gKiBSZXF1aXJlcyByZXF1aXJlcyBgTG9hZGFibGVDb21wb25lbnRgIHRvIGJlIGltcGxlbWVudGVkLlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QgYW5kIHRoZW4gYW4gaW50ZXJuYWwgZWxlbWVudCBiZSBmb2N1c2VkLlxuICpcbiAqIGBgYFxuICogYXN5bmMgc2V0Rm9jdXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAqICAgdGhpcy5pbnRlcm5hbEVsZW1lbnQ/LmZvY3VzKCk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNvbXBvbmVudEZvY3VzYWJsZShjb21wb25lbnQpIHtcbiAgYXdhaXQgY29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCk7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvcmNlVXBkYXRlKGNvbXBvbmVudCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHJlc29sdmUoKSkpO1xufVxuXG5leHBvcnQgeyBzZXRVcExvYWRhYmxlQ29tcG9uZW50IGFzIGEsIGNvbXBvbmVudExvYWRlZCBhcyBiLCBjb21wb25lbnRGb2N1c2FibGUgYXMgYywgc2V0Q29tcG9uZW50TG9hZGVkIGFzIHMgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGgsIEhvc3QgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQuanMnO1xuXG5jb25zdCBsb2FkZXJDc3MgPSBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MH19Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLWlubGluZTphdXRvO2Rpc3BsYXk6bm9uZTthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtvcGFjaXR5OjE7bWluLWJsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSk7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLWZvbnQtc2l6ZSk7c3Ryb2tlOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO3N0cm9rZS13aWR0aDozO2ZpbGw6bm9uZTt0cmFuc2Zvcm06c2NhbGUoMSwgMSk7YW5pbWF0aW9uOmxvYWRlci1jb2xvci1zaGlmdCBjYWxjKHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSAqIDIgLyB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpIGFsdGVybmF0ZS1yZXZlcnNlIGluZmluaXRlIGxpbmVhcjtwYWRkaW5nLWJsb2NrOnZhcigtLWNhbGNpdGUtbG9hZGVyLXBhZGRpbmcsIDRyZW0pfTpob3N0KFtzY2FsZT1zXSl7LS1jYWxjaXRlLWxvYWRlci1mb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpOy0tY2FsY2l0ZS1sb2FkZXItc2l6ZToycmVtOy0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmU6MC43NXJlbX06aG9zdChbc2NhbGU9bV0pey0tY2FsY2l0ZS1sb2FkZXItZm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApOy0tY2FsY2l0ZS1sb2FkZXItc2l6ZTo0cmVtOy0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmU6MXJlbX06aG9zdChbc2NhbGU9bF0pey0tY2FsY2l0ZS1sb2FkZXItZm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTIpOy0tY2FsY2l0ZS1sb2FkZXItc2l6ZTo2cmVtOy0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmU6MS41cmVtfTpob3N0KFtuby1wYWRkaW5nXSl7cGFkZGluZy1ibG9jazowcHh9Omhvc3R7ZGlzcGxheTpmbGV4fS5sb2FkZXJfX3RleHR7ZGlzcGxheTpibG9jazt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW07Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO21hcmdpbi1ibG9jay1zdGFydDpjYWxjKHZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUpICsgMS41cmVtKX0ubG9hZGVyX19wZXJjZW50YWdle3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6YmxvY2s7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1mb250LXNpemUpO2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUpO2luc2V0LWlubGluZS1zdGFydDo1MCU7bWFyZ2luLWlubGluZS1zdGFydDpjYWxjKHZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUpIC8gMiAqIC0xKTtsaW5lLWhlaWdodDowLjI1O3RyYW5zZm9ybTpzY2FsZSgxLCAxKX0ubG9hZGVyX19zdmdze3Bvc2l0aW9uOmFic29sdXRlO292ZXJmbG93OnZpc2libGU7b3BhY2l0eToxO2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUpO2Jsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSk7aW5zZXQtaW5saW5lLXN0YXJ0OjUwJTttYXJnaW4taW5saW5lLXN0YXJ0OmNhbGModmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSkgLyAyICogLTEpO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7YW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpICogNi42NiAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7YW5pbWF0aW9uLW5hbWU6bG9hZGVyLWNsb2Nrd2lzZX0ubG9hZGVyX19zdmd7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQtYmxvY2stc3RhcnQ6MHB4O3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyO292ZXJmbG93OnZpc2libGU7aW5zZXQtaW5saW5lLXN0YXJ0OjA7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSk7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKTthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyfUBzdXBwb3J0cyAoZGlzcGxheTogZ3JpZCl7LmxvYWRlcl9fc3ZnLS0xe2FuaW1hdGlvbi1uYW1lOmxvYWRlci1vZmZzZXQtMX0ubG9hZGVyX19zdmctLTJ7YW5pbWF0aW9uLW5hbWU6bG9hZGVyLW9mZnNldC0yfS5sb2FkZXJfX3N2Zy0tM3thbmltYXRpb24tbmFtZTpsb2FkZXItb2Zmc2V0LTN9fTpob3N0KFt0eXBlPWRldGVybWluYXRlXSl7YW5pbWF0aW9uOm5vbmU7c3Ryb2tlOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfTpob3N0KFt0eXBlPWRldGVybWluYXRlXSkgLmxvYWRlcl9fc3Znc3thbmltYXRpb246bm9uZX06aG9zdChbdHlwZT1kZXRlcm1pbmF0ZV0pIC5sb2FkZXJfX3N2Zy0tM3thbmltYXRpb246bm9uZTtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7c3Ryb2tlLWRhc2hhcnJheToxNTAuNzk2MzI7dHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0KSBsaW5lYXJ9Omhvc3QoW2lubGluZV0pe3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbjowcHg7YW5pbWF0aW9uOm5vbmU7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MjtwYWRkaW5nLWJsb2NrOjBweDtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKTttaW4tYmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSk7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmUpO21hcmdpbi1pbmxpbmUtZW5kOmNhbGModmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmUpICogMC41KTt2ZXJ0aWNhbC1hbGlnbjpjYWxjKHZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKSAqIC0xICogMC4yKX06aG9zdChbaW5saW5lXSkgLmxvYWRlcl9fc3Znc3tpbnNldC1ibG9jay1zdGFydDowcHg7bWFyZ2luOjBweDtpbnNldC1pbmxpbmUtc3RhcnQ6MDtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSk7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSl9Omhvc3QoW2lubGluZV0pIC5sb2FkZXJfX3N2Z3tpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSk7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSl9Omhvc3QoW2NvbXBsZXRlXSl7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZSgwLjc1LCAwLjc1KTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2l0aW9uOm9wYWNpdHkgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bSkgbGluZWFyIDEwMDBtcywgdHJhbnNmb3JtIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGxpbmVhciAxMDAwbXN9Omhvc3QoW2NvbXBsZXRlXSkgLmxvYWRlcl9fc3Znc3tvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlKDAuNzUsIDAuNzUpO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zaXRpb246b3BhY2l0eSBjYWxjKDE4MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKSBsaW5lYXIgODAwbXMsIHRyYW5zZm9ybSBjYWxjKDE4MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKSBsaW5lYXIgODAwbXN9Omhvc3QoW2NvbXBsZXRlXSkgLmxvYWRlcl9fcGVyY2VudGFnZXtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTt0cmFuc2Zvcm06c2NhbGUoMS4wNSwgMS4wNSk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNpdGlvbjpjb2xvciB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSBsaW5lYXIsIHRyYW5zZm9ybSB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSBsaW5lYXJ9LmxvYWRlcl9fc3ZnLS0xe3N0cm9rZS1kYXNoYXJyYXk6MjcuOTI1MjQ0NDQ0NCAxMzkuNjI2MjIyMjIyMjthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdykgLyB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikgKiA0LjggLyB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfUBrZXlmcmFtZXMgbG9hZGVyLW9mZnNldC0xezAle3N0cm9rZS1kYXNoYXJyYXk6MjcuOTI1MjQ0NDQ0NCAyNTEuMzI3MjtzdHJva2UtZGFzaG9mZnNldDowfTUwJXtzdHJva2UtZGFzaGFycmF5OjEzOS42MjYyMjIyMjIyIDEzOS42MjYyMjIyMjIyO3N0cm9rZS1kYXNob2Zmc2V0Oi04My43NzU3MzMzMzMzfTEwMCV7c3Ryb2tlLWRhc2hhcnJheToyNy45MjUyNDQ0NDQ0IDI1MS4zMjcyO3N0cm9rZS1kYXNob2Zmc2V0Oi0yNzkuMjUyNDQ0NDQ0NH19LmxvYWRlcl9fc3ZnLS0ye3N0cm9rZS1kYXNoYXJyYXk6NTUuODUwNDg4ODg4OSAxMzkuNjI2MjIyMjIyMjthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdykgLyB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikgKiA2LjQgLyB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfUBrZXlmcmFtZXMgbG9hZGVyLW9mZnNldC0yezAle3N0cm9rZS1kYXNoYXJyYXk6NTUuODUwNDg4ODg4OSAyMjMuNDAxOTU1NTU1NjtzdHJva2UtZGFzaG9mZnNldDowfTUwJXtzdHJva2UtZGFzaGFycmF5OjEzOS42MjYyMjIyMjIyIDEzOS42MjYyMjIyMjIyO3N0cm9rZS1kYXNob2Zmc2V0Oi05Ny43MzgzNTU1NTU2fTEwMCV7c3Ryb2tlLWRhc2hhcnJheTo1NS44NTA0ODg4ODg5IDIyMy40MDE5NTU1NTU2O3N0cm9rZS1kYXNob2Zmc2V0Oi0yNzkuMjUyNDQ0NDQ0NH19LmxvYWRlcl9fc3ZnLS0ze3N0cm9rZS1kYXNoYXJyYXk6MTMuOTYyNjIyMjIyMiAxMzkuNjI2MjIyMjIyMjthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdykgLyB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikgKiA3LjczNCAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9QGtleWZyYW1lcyBsb2FkZXItb2Zmc2V0LTN7MCV7c3Ryb2tlLWRhc2hhcnJheToxMy45NjI2MjIyMjIyIDI2NS4yODk4MjIyMjIyO3N0cm9rZS1kYXNob2Zmc2V0OjB9NTAle3N0cm9rZS1kYXNoYXJyYXk6MTM5LjYyNjIyMjIyMjIgMTM5LjYyNjIyMjIyMjI7c3Ryb2tlLWRhc2hvZmZzZXQ6LTc2Ljc5NDQyMjIyMjJ9MTAwJXtzdHJva2UtZGFzaGFycmF5OjEzLjk2MjYyMjIyMjIgMjY1LjI4OTgyMjIyMjI7c3Ryb2tlLWRhc2hvZmZzZXQ6LTI3OS4yNTI0NDQ0NDQ0fX1Aa2V5ZnJhbWVzIGxvYWRlci1jb2xvci1zaGlmdHswJXtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9MzMle3N0cm9rZTp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kLXByZXNzKX02NiV7c3Ryb2tlOnZhcigtLWNhbGNpdGUtdWktYnJhbmQtaG92ZXIpfTEwMCV7c3Ryb2tlOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfX1Aa2V5ZnJhbWVzIGxvYWRlci1jbG9ja3dpc2V7MTAwJXt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBMb2FkZXIgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuaW5saW5lID0gZmFsc2U7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy50eXBlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmFsdWUgPSAwO1xuICAgIHRoaXMudGV4dCA9IFwiXCI7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWwsIGlubGluZSwgbGFiZWwsIHNjYWxlLCB0ZXh0LCB0eXBlLCB2YWx1ZSB9ID0gdGhpcztcbiAgICBjb25zdCBpZCA9IGVsLmlkIHx8IGd1aWQoKTtcbiAgICBjb25zdCByYWRpdXNSYXRpbyA9IDAuNDU7XG4gICAgY29uc3Qgc2l6ZSA9IGlubGluZSA/IHRoaXMuZ2V0SW5saW5lU2l6ZShzY2FsZSkgOiB0aGlzLmdldFNpemUoc2NhbGUpO1xuICAgIGNvbnN0IHJhZGl1cyA9IHNpemUgKiByYWRpdXNSYXRpbztcbiAgICBjb25zdCB2aWV3Ym94ID0gYDAgMCAke3NpemV9ICR7c2l6ZX1gO1xuICAgIGNvbnN0IGlzRGV0ZXJtaW5hdGUgPSB0eXBlID09PSBcImRldGVybWluYXRlXCI7XG4gICAgY29uc3QgY2lyY3VtZmVyZW5jZSA9IDIgKiByYWRpdXMgKiBNYXRoLlBJO1xuICAgIGNvbnN0IHByb2dyZXNzID0gKHZhbHVlIC8gMTAwKSAqIGNpcmN1bWZlcmVuY2U7XG4gICAgY29uc3QgcmVtYWluaW5nID0gY2lyY3VtZmVyZW5jZSAtIHByb2dyZXNzO1xuICAgIGNvbnN0IHZhbHVlTm93ID0gTWF0aC5mbG9vcih2YWx1ZSk7XG4gICAgY29uc3QgaG9zdEF0dHJpYnV0ZXMgPSB7XG4gICAgICBcImFyaWEtdmFsdWVub3dcIjogdmFsdWVOb3csXG4gICAgICBcImFyaWEtdmFsdWVtaW5cIjogMCxcbiAgICAgIFwiYXJpYS12YWx1ZW1heFwiOiAxMDAsXG4gICAgICBjb21wbGV0ZTogdmFsdWVOb3cgPT09IDEwMCxcbiAgICB9O1xuICAgIGNvbnN0IHN2Z0F0dHJpYnV0ZXMgPSB7IHI6IHJhZGl1cywgY3g6IHNpemUgLyAyLCBjeTogc2l6ZSAvIDIgfTtcbiAgICBjb25zdCBkZXRlcm1pbmF0ZVN0eWxlID0geyBcInN0cm9rZS1kYXNoYXJyYXlcIjogYCR7cHJvZ3Jlc3N9ICR7cmVtYWluaW5nfWAgfTtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtbGFiZWxcIjogbGFiZWwsIGlkOiBpZCwgcm9sZTogXCJwcm9ncmVzc2JhclwiLCAuLi4oaXNEZXRlcm1pbmF0ZSA/IGhvc3RBdHRyaWJ1dGVzIDoge30pIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJsb2FkZXJfX3N2Z3NcIiB9LCBoKFwic3ZnXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IFwibG9hZGVyX19zdmcgbG9hZGVyX19zdmctLTFcIiwgdmlld0JveDogdmlld2JveCB9LCBoKFwiY2lyY2xlXCIsIHsgLi4uc3ZnQXR0cmlidXRlcyB9KSksIGgoXCJzdmdcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogXCJsb2FkZXJfX3N2ZyBsb2FkZXJfX3N2Zy0tMlwiLCB2aWV3Qm94OiB2aWV3Ym94IH0sIGgoXCJjaXJjbGVcIiwgeyAuLi5zdmdBdHRyaWJ1dGVzIH0pKSwgaChcInN2Z1wiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBcImxvYWRlcl9fc3ZnIGxvYWRlcl9fc3ZnLS0zXCIsIHZpZXdCb3g6IHZpZXdib3gsIC4uLihpc0RldGVybWluYXRlID8geyBzdHlsZTogZGV0ZXJtaW5hdGVTdHlsZSB9IDoge30pIH0sIGgoXCJjaXJjbGVcIiwgeyAuLi5zdmdBdHRyaWJ1dGVzIH0pKSksIHRleHQgJiYgaChcImRpdlwiLCB7IGNsYXNzOiBcImxvYWRlcl9fdGV4dFwiIH0sIHRleHQpLCBpc0RldGVybWluYXRlICYmIGgoXCJkaXZcIiwgeyBjbGFzczogXCJsb2FkZXJfX3BlcmNlbnRhZ2VcIiB9LCB2YWx1ZSkpKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogUmV0dXJuIHRoZSBwcm9wZXIgc2l6ZXMgYmFzZWQgb24gdGhlIHNjYWxlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSBzY2FsZVxuICAgKi9cbiAgZ2V0U2l6ZShzY2FsZSkge1xuICAgIHJldHVybiB7XG4gICAgICBzOiAzMixcbiAgICAgIG06IDU2LFxuICAgICAgbDogODAsXG4gICAgfVtzY2FsZV07XG4gIH1cbiAgZ2V0SW5saW5lU2l6ZShzY2FsZSkge1xuICAgIHJldHVybiB7XG4gICAgICBzOiAxMixcbiAgICAgIG06IDE2LFxuICAgICAgbDogMjAsXG4gICAgfVtzY2FsZV07XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gbG9hZGVyQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWxvYWRlclwiLCB7XG4gICAgXCJpbmxpbmVcIjogWzUxNl0sXG4gICAgXCJsYWJlbFwiOiBbMV0sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcInR5cGVcIjogWzUxM10sXG4gICAgXCJ2YWx1ZVwiOiBbMl0sXG4gICAgXCJ0ZXh0XCI6IFsxXVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWxvYWRlclwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBMb2FkZXIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IExvYWRlciBhcyBMLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHJlYWRUYXNrIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG5mdW5jdGlvbiBpc09wZW4oY29tcG9uZW50KSB7XG4gIHJldHVybiBcIm9wZW5lZFwiIGluIGNvbXBvbmVudCA/IGNvbXBvbmVudC5vcGVuZWQgOiBjb21wb25lbnQub3Blbjtcbn1cbmZ1bmN0aW9uIGVtaXRJbW1lZGlhdGVseShjb21wb25lbnQsIG5vbk9wZW5DbG9zZUNvbXBvbmVudCA9IGZhbHNlKSB7XG4gIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGlzT3Blbihjb21wb25lbnQpKVxuICAgID8gY29tcG9uZW50Lm9uQmVmb3JlT3BlbigpXG4gICAgOiBjb21wb25lbnQub25CZWZvcmVDbG9zZSgpO1xuICAobm9uT3BlbkNsb3NlQ29tcG9uZW50ID8gY29tcG9uZW50W2NvbXBvbmVudC50cmFuc2l0aW9uUHJvcF0gOiBpc09wZW4oY29tcG9uZW50KSlcbiAgICA/IGNvbXBvbmVudC5vbk9wZW4oKVxuICAgIDogY29tcG9uZW50Lm9uQ2xvc2UoKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIGRldGVybWluZSBnbG9iYWxseSBzZXQgdHJhbnNpdGlvbiBkdXJhdGlvbiBvbiB0aGUgZ2l2ZW4gb3BlblRyYW5zaXRpb25Qcm9wLCB3aGljaCBpcyBpbXBvcnRlZCBhbmQgc2V0IGluIHRoZSBAV2F0Y2goXCJvcGVuXCIpLlxuICogVXNlZCB0byBlbWl0IChiZWZvcmUpb3Blbi9jbG9zZSBldmVudHMgYm90aCBmb3Igd2hlbiB0aGUgb3BhY2l0eSB0cmFuc2l0aW9uIGlzIHByZXNlbnQgYW5kIHdoZW4gdGhlcmUgaXMgbm9uZSAodHJhbnNpdGlvbi1kdXJhdGlvbiBpcyBzZXQgdG8gMCkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50LCBPcGVuQ2xvc2VDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvb3BlbkNsb3NlQ29tcG9uZW50XCI7XG4gKlxuICogYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gKiAvLyBXaGVuIGNvbXBvbmVudCBpbml0aWFsbHkgcmVuZGVycywgaWYgYG9wZW5gIHdhcyBzZXQgd2UgbmVlZCB0byB0cmlnZ2VyIG9uIGxvYWQgYXMgd2F0Y2hlciBkb2Vzbid0IGZpcmUuXG4gKiBpZiAodGhpcy5vcGVuKSB7XG4gKiAgICBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqIEBXYXRjaChcIm9wZW5cIilcbiAqIGFzeW5jIHRvZ2dsZU1vZGFsKHZhbHVlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgICBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50IC0gT3BlbkNsb3NlQ29tcG9uZW50IHVzZXMgYG9wZW5gIHByb3AgdG8gZW1pdCAoYmVmb3JlKW9wZW4vY2xvc2UuXG4gKiBAcGFyYW0gbm9uT3BlbkNsb3NlQ29tcG9uZW50IC0gT3BlbkNsb3NlQ29tcG9uZW50IHVzZXMgYGV4cGFuZGVkYCBwcm9wIHRvIGVtaXQgKGJlZm9yZSlvcGVuL2Nsb3NlLlxuICovXG5mdW5jdGlvbiBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudChjb21wb25lbnQsIG5vbk9wZW5DbG9zZUNvbXBvbmVudCA9IGZhbHNlKSB7XG4gIHJlYWRUYXNrKCgpID0+IHtcbiAgICBpZiAoY29tcG9uZW50LnRyYW5zaXRpb25FbCkge1xuICAgICAgY29uc3QgeyB0cmFuc2l0aW9uRHVyYXRpb246IGFsbER1cmF0aW9ucywgdHJhbnNpdGlvblByb3BlcnR5OiBhbGxQcm9wcyB9ID0gZ2V0Q29tcHV0ZWRTdHlsZShjb21wb25lbnQudHJhbnNpdGlvbkVsKTtcbiAgICAgIGNvbnN0IGFsbFRyYW5zaXRpb25EdXJhdGlvbnNBcnJheSA9IGFsbER1cmF0aW9ucy5zcGxpdChcIixcIik7XG4gICAgICBjb25zdCBhbGxUcmFuc2l0aW9uUHJvcHNBcnJheSA9IGFsbFByb3BzLnNwbGl0KFwiLFwiKTtcbiAgICAgIGNvbnN0IG9wZW5UcmFuc2l0aW9uUHJvcEluZGV4ID0gYWxsVHJhbnNpdGlvblByb3BzQXJyYXkuaW5kZXhPZihjb21wb25lbnQub3BlblRyYW5zaXRpb25Qcm9wKTtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IGFsbFRyYW5zaXRpb25EdXJhdGlvbnNBcnJheVtvcGVuVHJhbnNpdGlvblByb3BJbmRleF0gPz9cbiAgICAgICAgLyogU2FmYXJpIHdpbGwgaGF2ZSBhIHNpbmdsZSB0cmFuc2l0aW9uIHZhbHVlIGlmIG11bHRpcGxlIHByb3BzIHNoYXJlIGl0LFxuICAgICAgICBzbyB3ZSBmYWxsIGJhY2sgdG8gaXQgaWYgdGhlcmUncyBubyBtYXRjaGluZyBwcm9wIGR1cmF0aW9uICovXG4gICAgICAgIGFsbFRyYW5zaXRpb25EdXJhdGlvbnNBcnJheVswXTtcbiAgICAgIGlmICh0cmFuc2l0aW9uRHVyYXRpb24gPT09IFwiMHNcIikge1xuICAgICAgICBlbWl0SW1tZWRpYXRlbHkoY29tcG9uZW50LCBub25PcGVuQ2xvc2VDb21wb25lbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBmYWxsYmFja1RpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uc3RhcnRcIiwgb25TdGFydCk7XG4gICAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgb25FbmRPckNhbmNlbCk7XG4gICAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25jYW5jZWxcIiwgb25FbmRPckNhbmNlbCk7XG4gICAgICAgIGVtaXRJbW1lZGlhdGVseShjb21wb25lbnQsIG5vbk9wZW5DbG9zZUNvbXBvbmVudCk7XG4gICAgICB9LCBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKiAxMDAwKTtcbiAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25zdGFydFwiLCBvblN0YXJ0KTtcbiAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgb25FbmRPckNhbmNlbCk7XG4gICAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uY2FuY2VsXCIsIG9uRW5kT3JDYW5jZWwpO1xuICAgICAgZnVuY3Rpb24gb25TdGFydChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQucHJvcGVydHlOYW1lID09PSBjb21wb25lbnQub3BlblRyYW5zaXRpb25Qcm9wICYmIGV2ZW50LnRhcmdldCA9PT0gY29tcG9uZW50LnRyYW5zaXRpb25FbCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChmYWxsYmFja1RpbWVvdXRJZCk7XG4gICAgICAgICAgY29tcG9uZW50LnRyYW5zaXRpb25FbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbnN0YXJ0XCIsIG9uU3RhcnQpO1xuICAgICAgICAgIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGlzT3Blbihjb21wb25lbnQpKVxuICAgICAgICAgICAgPyBjb21wb25lbnQub25CZWZvcmVPcGVuKClcbiAgICAgICAgICAgIDogY29tcG9uZW50Lm9uQmVmb3JlQ2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gb25FbmRPckNhbmNlbChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQucHJvcGVydHlOYW1lID09PSBjb21wb25lbnQub3BlblRyYW5zaXRpb25Qcm9wICYmIGV2ZW50LnRhcmdldCA9PT0gY29tcG9uZW50LnRyYW5zaXRpb25FbCkge1xuICAgICAgICAgIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGlzT3Blbihjb21wb25lbnQpKVxuICAgICAgICAgICAgPyBjb21wb25lbnQub25PcGVuKClcbiAgICAgICAgICAgIDogY29tcG9uZW50Lm9uQ2xvc2UoKTtcbiAgICAgICAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIG9uRW5kT3JDYW5jZWwpO1xuICAgICAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25jYW5jZWxcIiwgb25FbmRPckNhbmNlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudCBhcyBvIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5pbXBvcnQgeyB3IGFzIHNsb3RDaGFuZ2VIYXNDb250ZW50IH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDEgfSBmcm9tICcuL2xvYWRlci5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgc2NyaW06IFwic2NyaW1cIixcbiAgY29udGVudDogXCJjb250ZW50XCIsXG59O1xuY29uc3QgQlJFQUtQT0lOVFMgPSB7XG4gIHM6IDcyLFxuICAvLyBtZWRpdW0gaXMgYXNzdW1lZCBkZWZhdWx0LlxuICBsOiA0ODAsIC8vIEdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byA0ODBweC5cbn07XG5cbmNvbnN0IHNjcmltQ3NzID0gXCI6aG9zdHtwb3NpdGlvbjphYnNvbHV0ZTtpbnNldDowcHg7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LW92ZXJsYXkpO2Rpc3BsYXk6ZmxleDtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6c3RyZXRjaH1Aa2V5ZnJhbWVzIGNhbGNpdGUtc2NyaW0tZmFkZS1pbnswJXstLXR3LWJnLW9wYWNpdHk6MH0xMDAley0tdHctdGV4dC1vcGFjaXR5OjF9fS5zY3JpbXtwb3NpdGlvbjphYnNvbHV0ZTtpbnNldDowcHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtvdmVyZmxvdzpoaWRkZW47YW5pbWF0aW9uOmNhbGNpdGUtc2NyaW0tZmFkZS1pbiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSBlYXNlLWluLW91dDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtc2NyaW0tYmFja2dyb3VuZCwgdmFyKC0tY2FsY2l0ZS1zY3JpbS1iYWNrZ3JvdW5kLWludGVybmFsKSl9LmNvbnRlbnR7cGFkZGluZzoxcmVtfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBTY3JpbSA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwicmVzaXplXCIsICgpID0+IHRoaXMuaGFuZGxlUmVzaXplKCkpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuaGFuZGxlRGVmYXVsdFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzQ29udGVudCA9IHNsb3RDaGFuZ2VIYXNDb250ZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuc3RvcmVMb2FkZXJFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5sb2FkZXJFbCA9IGVsO1xuICAgICAgdGhpcy5oYW5kbGVSZXNpemUoKTtcbiAgICB9O1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9hZGVyU2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuaGFzQ29udGVudCA9IGZhbHNlO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/Lm9ic2VydmUodGhpcy5lbCk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaGFzQ29udGVudCwgbG9hZGluZywgbWVzc2FnZXMgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5zY3JpbSB9LCBsb2FkaW5nID8gKGgoXCJjYWxjaXRlLWxvYWRlclwiLCB7IGxhYmVsOiBtZXNzYWdlcy5sb2FkaW5nLCBzY2FsZTogdGhpcy5sb2FkZXJTY2FsZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IHRoaXMuc3RvcmVMb2FkZXJFbCB9KSkgOiBudWxsLCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250ZW50LCBoaWRkZW46ICFoYXNDb250ZW50IH0sIGgoXCJzbG90XCIsIHsgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZURlZmF1bHRTbG90Q2hhbmdlIH0pKSkpO1xuICB9XG4gIGdldFNjYWxlKHNpemUpIHtcbiAgICBpZiAoc2l6ZSA8IEJSRUFLUE9JTlRTLnMpIHtcbiAgICAgIHJldHVybiBcInNcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2l6ZSA+PSBCUkVBS1BPSU5UUy5sKSB7XG4gICAgICByZXR1cm4gXCJsXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIFwibVwiO1xuICAgIH1cbiAgfVxuICBoYW5kbGVSZXNpemUoKSB7XG4gICAgY29uc3QgeyBsb2FkZXJFbCwgZWwgfSA9IHRoaXM7XG4gICAgaWYgKCFsb2FkZXJFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmxvYWRlclNjYWxlID0gdGhpcy5nZXRTY2FsZShNYXRoLm1pbihlbC5jbGllbnRIZWlnaHQsIGVsLmNsaWVudFdpZHRoKSA/PyAwKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBzY3JpbUNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1zY3JpbVwiLCB7XG4gICAgXCJsb2FkaW5nXCI6IFs1MTZdLFxuICAgIFwibWVzc2FnZXNcIjogWzEwNDBdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJsb2FkZXJTY2FsZVwiOiBbMzJdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogWzMyXSxcbiAgICBcImhhc0NvbnRlbnRcIjogWzMyXVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXNjcmltXCIsIFwiY2FsY2l0ZS1sb2FkZXJcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtc2NyaW1cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBTY3JpbSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IFNjcmltIGFzIFMsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgQnVpbGQsIGdldEFzc2V0UGF0aCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U3VwcG9ydGVkTG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuXG5jb25zdCBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGUgPSB7fTtcbmFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VCdW5kbGUobGFuZywgY29tcG9uZW50KSB7XG4gIGNvbnN0IGtleSA9IGAke2NvbXBvbmVudH1fJHtsYW5nfWA7XG4gIGlmIChjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XSkge1xuICAgIHJldHVybiBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XTtcbiAgfVxuICBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XSA9IGZldGNoKGdldEFzc2V0UGF0aChgLi9hc3NldHMvJHtjb21wb25lbnR9L3Q5bi9tZXNzYWdlc18ke2xhbmd9Lmpzb25gKSlcbiAgICAudGhlbigocmVzcCkgPT4ge1xuICAgIGlmICghcmVzcC5vaykge1xuICAgICAgdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcC5qc29uKCk7XG4gIH0pXG4gICAgLmNhdGNoKCgpID0+IHRocm93TWVzc2FnZUZldGNoRXJyb3IoKSk7XG4gIHJldHVybiBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XTtcbn1cbmZ1bmN0aW9uIHRocm93TWVzc2FnZUZldGNoRXJyb3IoKSB7XG4gIHRocm93IG5ldyBFcnJvcihcImNvdWxkIG5vdCBmZXRjaCBjb21wb25lbnQgbWVzc2FnZSBidW5kbGVcIik7XG59XG5mdW5jdGlvbiBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQubWVzc2FnZXMgPSB7XG4gICAgLi4uY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyxcbiAgICAuLi5jb21wb25lbnQubWVzc2FnZU92ZXJyaWRlcyxcbiAgfTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgdGhlIG1lc3NhZ2VzIHVzZWQgYnkgdGhlIGNvbXBvbmVudC4gSXQgc2hvdWxkIGJlIGF3YWl0ZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5hc3luYyBmdW5jdGlvbiBzZXRVcE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGNvbXBvbmVudC5lZmZlY3RpdmVMb2NhbGUpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG5hc3luYyBmdW5jdGlvbiBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBjb25zdCB7IGVsIH0gPSBjb21wb25lbnQ7XG4gIGNvbnN0IHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IHRhZy5yZXBsYWNlKFwiY2FsY2l0ZS1cIiwgXCJcIik7XG4gIHJldHVybiBnZXRNZXNzYWdlQnVuZGxlKGdldFN1cHBvcnRlZExvY2FsZShsYW5nLCBcInQ5blwiKSwgY29tcG9uZW50TmFtZSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBtdXN0IGJlIHNldCB1cCBmb3IgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIGRlZmF1bHQgbWVzc2FnZSBidW5kbGUgaWYgdGhlIGxvY2FsZSBjaGFuZ2VzLlxuICpcbiAqIEl0IGNhbiBiZSBzZXQgdXAgaW4gKiplaXRoZXIqKiBvZiB0aGUgZm9sbG93aW5nIHdheXM6XG4gKlxuICogMS4gY2FsbGVkIGZyb20gYExvY2FsaXplZENvbXBvbmVudGAncyBgb25Mb2NhbGVDaGFuZ2VgIG1ldGhvZCBvclxuICogMi4gY2FsbGVkIGZyb20gYSB3YXRjaGVyIGNvbmZpZ3VyZWQgdG8gd2F0Y2ggYExvY2FsaXplZENvbXBvbmVudGAncyBgZWZmZWN0aXZlTG9jYWxlYCBwcm9wXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGxhbmdcbiAqL1xuYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZyk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogKipOb3RlKio6IHRoaXMgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgYExvY2FsaXplZENvbXBvbmVudGAncyBgY29ubmVjdExvY2FsaXplZGAgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgdGVhcnMgZG93biBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgbWVyZ2VNZXNzYWdlcyh0aGlzKTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdE1lc3NhZ2VzIGFzIGMsIGRpc2Nvbm5lY3RNZXNzYWdlcyBhcyBkLCBzZXRVcE1lc3NhZ2VzIGFzIHMsIHVwZGF0ZU1lc3NhZ2VzIGFzIHUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==