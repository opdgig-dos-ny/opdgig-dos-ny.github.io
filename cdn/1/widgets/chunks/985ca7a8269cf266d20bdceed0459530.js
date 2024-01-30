"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_tab-title_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/tab-title.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/tab-title.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TabTitle),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */










const CSS = {
  closeButton: "close-button",
  container: "container",
  content: "content",
  contentHasText: "content--has-text",
  iconEnd: "icon-end",
  iconPresent: "icon-present",
  iconStart: "icon-start",
  titleIcon: "calcite-tab-title--icon",
};
const ICONS = {
  close: "x",
};

const tabTitleCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;outline:2px solid transparent;outline-offset:2px;margin-inline-start:0px}:host([layout=inline]){flex:0 1 auto}:host([layout=center]){flex:1 1 auto}:host([layout=center]) .scale-s,:host([layout=center]) .scale-m,:host([layout=center]) .scale-l{margin-block:0px;text-align:center;flex-basis:12rem}:host([layout=center]) .scale-s .content,:host([layout=center]) .scale-m .content,:host([layout=center]) .scale-l .content{margin:auto}:host([layout=center][closable]) .content{padding-inline-start:32px}:host([layout=center][bordered][closable]) .scale-s .content{padding-inline-start:36px}:host([layout=center][bordered][closable]) .scale-m .content{padding-inline-start:40px}:host([layout=center][closable]) .scale-l .content{padding-inline-start:40px}:host([layout=center][closable][bordered]) .scale-s .content{padding-inline-start:52px}:host([position=bottom]) .container{border-block-end-width:0px;border-block-start-width:2px;border-block-start-color:transparent;border-block-start-style:solid}:host([closed]){display:none}.container{outline-color:transparent}:host(:focus) .container{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host(:focus) .container:focus-within{outline-color:transparent}:host(:active) a,:host(:focus) a,:host(:hover) a{border-color:var(--calcite-ui-border-2);color:var(--calcite-ui-text-1);text-decoration-line:none}:host([selected]) .container{border-color:transparent;color:var(--calcite-ui-text-1)}:host([disabled]) .container{pointer-events:none;opacity:0.5}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.scale-s .content{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}.scale-m .content{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}.scale-l .content{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}.container{box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;align-content:center;justify-content:space-between;border-block-end-width:2px;padding-inline:0px;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-3);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-block-end-color:transparent;border-block-end-style:solid}.content{display:flex;align-items:center;justify-content:center}.calcite-tab-title--icon{position:relative;margin:0px;display:inline-flex;align-self:center}.calcite-tab-title--icon svg{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.content--has-text{padding:0.25rem}.content--has-text .calcite-tab-title--icon.icon-start{margin-inline-end:0.5rem}.content--has-text .calcite-tab-title--icon.icon-end{margin-inline-start:0.5rem}.close-button{display:flex;cursor:pointer;appearance:none;align-content:center;align-items:center;justify-content:center;align-self:center;border-style:none;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;block-size:calc(100% - 2px);background-color:var(--calcite-button-transparent-1);margin-inline-start:auto}.close-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          );outline-offset:-1px}.close-button:focus,.close-button:hover{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-2)}.close-button:active{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3)}.close-button calcite-icon{color:inherit}:host([icon-start][icon-end]) .calcite-tab-title--icon:first-child{margin-inline-end:0.5rem}:host([bordered]){margin-inline-end:0}:host([bordered][selected]){box-shadow:inset 0px -2px var(--calcite-ui-foreground-1)}:host([bordered][selected][position=bottom]){box-shadow:inset 0 2px 0 var(--calcite-ui-foreground-1)}:host([bordered]:hover) .container,:host([bordered]:focus) .container,:host([bordered]:active) .container{position:relative}:host([bordered]:hover) .container{background-color:var(--calcite-button-transparent-hover)}:host([closable]) .container,:host([bordered]) .container{border-inline-start:1px solid transparent;border-inline-end:1px solid transparent}:host([closable]) .container .close-button,:host([bordered]) .container .close-button{margin-inline:0}:host([closable]) .content{box-sizing:border-box;block-size:100%;border-block-end-color:transparent}:host([closable][position=bottom]) .container,:host([bordered][position=bottom]) .container{border-block-start-style:unset}:host([selected][bordered]) .container{border-inline-start-color:var(--calcite-ui-border-1);border-inline-end-color:var(--calcite-ui-border-1)}:host([bordered]) .content{padding-inline:0.75rem}:host([bordered]) .scale-s .content{padding-inline:0.5rem}:host([bordered]) .scale-l .content{padding-inline:1rem}@media (forced-colors: active){:host{outline-width:0;outline-offset:0}:host(:focus) .container{outline-color:highlight}:host([bordered]) .container{border-block-end-style:solid}:host([bordered][position=bottom]) .container{border-block-start-style:solid}:host([bordered][selected]) .container{border-block-end-style:none}:host([bordered][position=bottom][selected]) .container{border-block-start-style:none}.close-button{z-index:var(--calcite-app-z-index)}}:host([hidden]){display:none}[hidden]{display:none}";

const TabTitle = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteTabsActivate = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteTabsActivate", 6);
    this.calciteInternalTabsActivate = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteInternalTabsActivate", 6);
    this.calciteTabsClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteTabsClose", 6);
    this.calciteInternalTabsClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteInternalTabsClose", 6);
    this.calciteInternalTabsFocusNext = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteInternalTabsFocusNext", 6);
    this.calciteInternalTabsFocusPrevious = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteInternalTabsFocusPrevious", 6);
    this.calciteInternalTabsFocusFirst = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteInternalTabsFocusFirst", 6);
    this.calciteInternalTabsFocusLast = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteInternalTabsFocusLast", 6);
    this.calciteInternalTabTitleRegister = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteInternalTabTitleRegister", 6);
    this.calciteInternalTabIconChanged = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteInternalTabIconChanged", 6);
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.closeClickHandler = () => {
      this.closeTabTitleAndNotify();
    };
    /** watches for changing text content */
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_3__.c)("mutation", () => this.updateHasText());
    this.resizeObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_3__.c)("resize", () => {
      this.calciteInternalTabIconChanged.emit();
    });
    this.guid = `calcite-tab-title-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_1__.g)()}`;
    this.selected = false;
    this.closable = false;
    this.closed = false;
    this.disabled = false;
    this.iconEnd = undefined;
    this.iconFlipRtl = undefined;
    this.iconStart = undefined;
    this.layout = undefined;
    this.position = "top";
    this.scale = "m";
    this.bordered = false;
    this.tab = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.controls = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = undefined;
    this.hasText = false;
  }
  selectedHandler() {
    if (this.selected) {
      this.emitActiveTab(false);
    }
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    this.setupTextContentObserver();
    this.parentTabNavEl = this.el.closest("calcite-tab-nav");
    this.parentTabsEl = this.el.closest("calcite-tabs");
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
    // Dispatching to body in order to be listened by other elements that are still connected to the DOM.
    document.body?.dispatchEvent(new CustomEvent("calciteTabTitleUnregister", {
      detail: this.el,
    }));
    this.resizeObserver?.disconnect();
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
  }
  async componentWillLoad() {
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
    if (_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.Build.isBrowser) {
      this.updateHasText();
    }
    if (this.tab && this.selected) {
      this.emitActiveTab(false);
    }
  }
  componentWillRender() {
    if (this.parentTabsEl) {
      this.layout = this.parentTabsEl.layout;
      this.bordered = this.parentTabsEl.bordered;
    }
  }
  render() {
    const { el, closed } = this;
    const id = el.id || this.guid;
    const iconStartEl = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-icon", { class: { [CSS.titleIcon]: true, [CSS.iconStart]: true }, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.scale) }));
    const iconEndEl = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-icon", { class: { [CSS.titleIcon]: true, [CSS.iconEnd]: true }, flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.scale) }));
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.Host, { "aria-controls": this.controls, "aria-selected": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.selected), id: id, role: "tab", tabIndex: this.selected ? 0 : -1 }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("div", { class: {
        container: true,
        [CSS.iconPresent]: !!this.iconStart || !!this.iconEnd,
        [`scale-${this.scale}`]: true,
      }, hidden: closed,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => this.resizeObserver?.observe(el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("div", { class: { [CSS.content]: true, [CSS.contentHasText]: this.hasText } }, this.iconStart ? iconStartEl : null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot", null), this.iconEnd ? iconEndEl : null), this.renderCloseButton())));
  }
  renderCloseButton() {
    const { closable, messages } = this;
    return closable ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("button", { "aria-label": messages.close, class: CSS.closeButton, disabled: false, key: CSS.closeButton, onClick: this.closeClickHandler, title: messages.close, type: "button",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.closeButtonEl = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-icon", { icon: ICONS.close, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.scale) }))) : null;
  }
  async componentDidLoad() {
    this.calciteInternalTabTitleRegister.emit(await this.getTabIdentifier());
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.u)(this, () => {
      return this.selected;
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  internalTabChangeHandler(event) {
    const targetTabsEl = event
      .composedPath()
      .find((el) => el.tagName === "CALCITE-TABS");
    if (targetTabsEl !== this.parentTabsEl) {
      return;
    }
    if (this.tab) {
      this.selected = this.tab === event.detail.tab;
    }
    else {
      this.getTabIndex().then((index) => {
        this.selected = index === event.detail.tab;
      });
    }
    event.stopPropagation();
  }
  onClick() {
    if (this.disabled) {
      return;
    }
    this.emitActiveTab();
  }
  keyDownHandler(event) {
    switch (event.key) {
      case " ":
      case "Enter":
        if (!event.composedPath().includes(this.closeButtonEl)) {
          this.emitActiveTab();
          event.preventDefault();
        }
        break;
      case "ArrowRight":
        event.preventDefault();
        if ((0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(this.el) === "ltr") {
          this.calciteInternalTabsFocusNext.emit();
        }
        else {
          this.calciteInternalTabsFocusPrevious.emit();
        }
        break;
      case "ArrowLeft":
        event.preventDefault();
        if ((0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(this.el) === "ltr") {
          this.calciteInternalTabsFocusPrevious.emit();
        }
        else {
          this.calciteInternalTabsFocusNext.emit();
        }
        break;
      case "Home":
        event.preventDefault();
        this.calciteInternalTabsFocusFirst.emit();
        break;
      case "End":
        event.preventDefault();
        this.calciteInternalTabsFocusLast.emit();
        break;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Returns the index of the title within the `calcite-tab-nav`.
   */
  async getTabIndex() {
    return Array.prototype.indexOf.call((0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.o)(this.el.parentElement.children).filter((el) => el.matches("calcite-tab-title")), this.el);
  }
  /**
   * @internal
   */
  async getTabIdentifier() {
    return this.tab ? this.tab : this.getTabIndex();
  }
  /**
   * @param tabIds
   * @param titleIds
   * @internal
   */
  async updateAriaInfo(tabIds = [], titleIds = []) {
    this.controls = tabIds[titleIds.indexOf(this.el.id)] || null;
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_5__.u)(this, this.effectiveLocale);
  }
  updateHasText() {
    this.hasText = this.el.textContent.trim().length > 0;
  }
  setupTextContentObserver() {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
  }
  emitActiveTab(userTriggered = true) {
    if (this.disabled || this.closed) {
      return;
    }
    const payload = { tab: this.tab };
    this.calciteInternalTabsActivate.emit(payload);
    if (userTriggered) {
      // emit in the next frame to let internal events sync up
      requestAnimationFrame(() => this.calciteTabsActivate.emit());
    }
  }
  closeTabTitleAndNotify() {
    this.closed = true;
    this.calciteInternalTabsClose.emit({ tab: this.tab });
    this.calciteTabsClose.emit();
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "selected": ["selectedHandler"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return tabTitleCss; }
}, [1, "calcite-tab-title", {
    "selected": [1540],
    "closable": [516],
    "closed": [1540],
    "disabled": [516],
    "iconEnd": [513, "icon-end"],
    "iconFlipRtl": [513, "icon-flip-rtl"],
    "iconStart": [513, "icon-start"],
    "layout": [1537],
    "position": [1],
    "scale": [1],
    "bordered": [1540],
    "tab": [513],
    "messages": [1040],
    "messageOverrides": [1040],
    "controls": [32],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "hasText": [32],
    "getTabIndex": [64],
    "getTabIdentifier": [64],
    "updateAriaInfo": [64]
  }, [[16, "calciteInternalTabChange", "internalTabChangeHandler"], [0, "click", "onClick"], [0, "keydown", "keyDownHandler"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-tab-title", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-tab-title":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TabTitle);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOTg1Y2E3YTgyNjljZjI2NmQyMGJkY2VlZDA0NTk1MzAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NIO0FBQzlCO0FBQ2xEO0FBQzZFO0FBQzlEO0FBQ3lCO0FBQ29DO0FBQy9EO0FBQ0k7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxjQUFjLDhCQUE4QixtQkFBbUIsd0JBQXdCLHVCQUF1QixjQUFjLHVCQUF1QixjQUFjLGdHQUFnRyxpQkFBaUIsa0JBQWtCLGlCQUFpQiwySEFBMkgsWUFBWSwwQ0FBMEMsMEJBQTBCLDZEQUE2RCwwQkFBMEIsNkRBQTZELDBCQUEwQixtREFBbUQsMEJBQTBCLDZEQUE2RCwwQkFBMEIsb0NBQW9DLDJCQUEyQiw2QkFBNkIscUNBQXFDLCtCQUErQixnQkFBZ0IsYUFBYSxXQUFXLDBCQUEwQix5QkFBeUIseUVBQXlFLHFQQUFxUCxzQ0FBc0MsMEJBQTBCLGlEQUFpRCx3Q0FBd0MsK0JBQStCLDBCQUEwQiw2QkFBNkIseUJBQXlCLCtCQUErQiw2QkFBNkIsb0JBQW9CLFlBQVkseUdBQXlHLFVBQVUsa0JBQWtCLHNCQUFzQixzQ0FBc0MsaUJBQWlCLGtCQUFrQixxQkFBcUIsc0NBQXNDLGlCQUFpQixrQkFBa0IsdUJBQXVCLHFDQUFxQyxvQkFBb0IsV0FBVyxzQkFBc0IsYUFBYSxnQkFBZ0IsaUJBQWlCLGVBQWUscUJBQXFCLDhCQUE4QiwyQkFBMkIsbUJBQW1CLHNDQUFzQyxpQkFBaUIsK0JBQStCLDZGQUE2RixtQ0FBbUMsNkJBQTZCLFNBQVMsYUFBYSxtQkFBbUIsdUJBQXVCLHlCQUF5QixrQkFBa0IsV0FBVyxvQkFBb0Isa0JBQWtCLDZCQUE2Qiw2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QUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBcUI7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVtRCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy90YWItdGl0bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIEJ1aWxkLCBoLCBIb3N0IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgdCBhcyB0b0FyaWFCb29sZWFuLCBiIGFzIGdldEVsZW1lbnREaXIsIG8gYXMgbm9kZUxpc3RUb0FycmF5IH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgZyBhcyBndWlkIH0gZnJvbSAnLi9ndWlkLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCB1IGFzIHVwZGF0ZU1lc3NhZ2VzIH0gZnJvbSAnLi90OW4uanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRJY29uU2NhbGUgfSBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMSB9IGZyb20gJy4vaWNvbi5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgY2xvc2VCdXR0b246IFwiY2xvc2UtYnV0dG9uXCIsXG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgY29udGVudDogXCJjb250ZW50XCIsXG4gIGNvbnRlbnRIYXNUZXh0OiBcImNvbnRlbnQtLWhhcy10ZXh0XCIsXG4gIGljb25FbmQ6IFwiaWNvbi1lbmRcIixcbiAgaWNvblByZXNlbnQ6IFwiaWNvbi1wcmVzZW50XCIsXG4gIGljb25TdGFydDogXCJpY29uLXN0YXJ0XCIsXG4gIHRpdGxlSWNvbjogXCJjYWxjaXRlLXRhYi10aXRsZS0taWNvblwiLFxufTtcbmNvbnN0IElDT05TID0ge1xuICBjbG9zZTogXCJ4XCIsXG59O1xuXG5jb25zdCB0YWJUaXRsZUNzcyA9IFwiOmhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7ZGlzcGxheTpibG9jaztvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHg7bWFyZ2luLWlubGluZS1zdGFydDowcHh9Omhvc3QoW2xheW91dD1pbmxpbmVdKXtmbGV4OjAgMSBhdXRvfTpob3N0KFtsYXlvdXQ9Y2VudGVyXSl7ZmxleDoxIDEgYXV0b306aG9zdChbbGF5b3V0PWNlbnRlcl0pIC5zY2FsZS1zLDpob3N0KFtsYXlvdXQ9Y2VudGVyXSkgLnNjYWxlLW0sOmhvc3QoW2xheW91dD1jZW50ZXJdKSAuc2NhbGUtbHttYXJnaW4tYmxvY2s6MHB4O3RleHQtYWxpZ246Y2VudGVyO2ZsZXgtYmFzaXM6MTJyZW19Omhvc3QoW2xheW91dD1jZW50ZXJdKSAuc2NhbGUtcyAuY29udGVudCw6aG9zdChbbGF5b3V0PWNlbnRlcl0pIC5zY2FsZS1tIC5jb250ZW50LDpob3N0KFtsYXlvdXQ9Y2VudGVyXSkgLnNjYWxlLWwgLmNvbnRlbnR7bWFyZ2luOmF1dG99Omhvc3QoW2xheW91dD1jZW50ZXJdW2Nsb3NhYmxlXSkgLmNvbnRlbnR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MzJweH06aG9zdChbbGF5b3V0PWNlbnRlcl1bYm9yZGVyZWRdW2Nsb3NhYmxlXSkgLnNjYWxlLXMgLmNvbnRlbnR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MzZweH06aG9zdChbbGF5b3V0PWNlbnRlcl1bYm9yZGVyZWRdW2Nsb3NhYmxlXSkgLnNjYWxlLW0gLmNvbnRlbnR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6NDBweH06aG9zdChbbGF5b3V0PWNlbnRlcl1bY2xvc2FibGVdKSAuc2NhbGUtbCAuY29udGVudHtwYWRkaW5nLWlubGluZS1zdGFydDo0MHB4fTpob3N0KFtsYXlvdXQ9Y2VudGVyXVtjbG9zYWJsZV1bYm9yZGVyZWRdKSAuc2NhbGUtcyAuY29udGVudHtwYWRkaW5nLWlubGluZS1zdGFydDo1MnB4fTpob3N0KFtwb3NpdGlvbj1ib3R0b21dKSAuY29udGFpbmVye2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MHB4O2JvcmRlci1ibG9jay1zdGFydC13aWR0aDoycHg7Ym9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1ibG9jay1zdGFydC1zdHlsZTpzb2xpZH06aG9zdChbY2xvc2VkXSl7ZGlzcGxheTpub25lfS5jb250YWluZXJ7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH06aG9zdCg6Zm9jdXMpIC5jb250YWluZXJ7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfTpob3N0KDpmb2N1cykgLmNvbnRhaW5lcjpmb2N1cy13aXRoaW57b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH06aG9zdCg6YWN0aXZlKSBhLDpob3N0KDpmb2N1cykgYSw6aG9zdCg6aG92ZXIpIGF7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTIpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lfTpob3N0KFtzZWxlY3RlZF0pIC5jb250YWluZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdChbZGlzYWJsZWRdKSAuY29udGFpbmVye3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowLjV9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfS5zY2FsZS1zIC5jb250ZW50e3BhZGRpbmctYmxvY2s6MC4yNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW19LnNjYWxlLW0gLmNvbnRlbnR7cGFkZGluZy1ibG9jazowLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtfS5zY2FsZS1sIC5jb250ZW50e3BhZGRpbmctYmxvY2s6MC42MjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW19LmNvbnRhaW5lcntib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO2N1cnNvcjpwb2ludGVyO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MnB4O3BhZGRpbmctaW5saW5lOjBweDtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW07Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO2JvcmRlci1ibG9jay1lbmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWJsb2NrLWVuZC1zdHlsZTpzb2xpZH0uY29udGVudHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmNhbGNpdGUtdGFiLXRpdGxlLS1pY29ue3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbjowcHg7ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1zZWxmOmNlbnRlcn0uY2FsY2l0ZS10YWItdGl0bGUtLWljb24gc3Zne3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzfS5jb250ZW50LS1oYXMtdGV4dHtwYWRkaW5nOjAuMjVyZW19LmNvbnRlbnQtLWhhcy10ZXh0IC5jYWxjaXRlLXRhYi10aXRsZS0taWNvbi5pY29uLXN0YXJ0e21hcmdpbi1pbmxpbmUtZW5kOjAuNXJlbX0uY29udGVudC0taGFzLXRleHQgLmNhbGNpdGUtdGFiLXRpdGxlLS1pY29uLmljb24tZW5ke21hcmdpbi1pbmxpbmUtc3RhcnQ6MC41cmVtfS5jbG9zZS1idXR0b257ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO2FwcGVhcmFuY2U6bm9uZTthbGlnbi1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1zZWxmOmNlbnRlcjtib3JkZXItc3R5bGU6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudDt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwcztibG9jay1zaXplOmNhbGMoMTAwJSAtIDJweCk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLWJ1dHRvbi10cmFuc3BhcmVudC0xKTttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG99LmNsb3NlLWJ1dHRvbjpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICk7b3V0bGluZS1vZmZzZXQ6LTFweH0uY2xvc2UtYnV0dG9uOmZvY3VzLC5jbG9zZS1idXR0b246aG92ZXJ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfS5jbG9zZS1idXR0b246YWN0aXZle2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKX0uY2xvc2UtYnV0dG9uIGNhbGNpdGUtaWNvbntjb2xvcjppbmhlcml0fTpob3N0KFtpY29uLXN0YXJ0XVtpY29uLWVuZF0pIC5jYWxjaXRlLXRhYi10aXRsZS0taWNvbjpmaXJzdC1jaGlsZHttYXJnaW4taW5saW5lLWVuZDowLjVyZW19Omhvc3QoW2JvcmRlcmVkXSl7bWFyZ2luLWlubGluZS1lbmQ6MH06aG9zdChbYm9yZGVyZWRdW3NlbGVjdGVkXSl7Ym94LXNoYWRvdzppbnNldCAwcHggLTJweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW2JvcmRlcmVkXVtzZWxlY3RlZF1bcG9zaXRpb249Ym90dG9tXSl7Ym94LXNoYWRvdzppbnNldCAwIDJweCAwIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbYm9yZGVyZWRdOmhvdmVyKSAuY29udGFpbmVyLDpob3N0KFtib3JkZXJlZF06Zm9jdXMpIC5jb250YWluZXIsOmhvc3QoW2JvcmRlcmVkXTphY3RpdmUpIC5jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmV9Omhvc3QoW2JvcmRlcmVkXTpob3ZlcikgLmNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtYnV0dG9uLXRyYW5zcGFyZW50LWhvdmVyKX06aG9zdChbY2xvc2FibGVdKSAuY29udGFpbmVyLDpob3N0KFtib3JkZXJlZF0pIC5jb250YWluZXJ7Ym9yZGVyLWlubGluZS1zdGFydDoxcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWlubGluZS1lbmQ6MXB4IHNvbGlkIHRyYW5zcGFyZW50fTpob3N0KFtjbG9zYWJsZV0pIC5jb250YWluZXIgLmNsb3NlLWJ1dHRvbiw6aG9zdChbYm9yZGVyZWRdKSAuY29udGFpbmVyIC5jbG9zZS1idXR0b257bWFyZ2luLWlubGluZTowfTpob3N0KFtjbG9zYWJsZV0pIC5jb250ZW50e2JveC1zaXppbmc6Ym9yZGVyLWJveDtibG9jay1zaXplOjEwMCU7Ym9yZGVyLWJsb2NrLWVuZC1jb2xvcjp0cmFuc3BhcmVudH06aG9zdChbY2xvc2FibGVdW3Bvc2l0aW9uPWJvdHRvbV0pIC5jb250YWluZXIsOmhvc3QoW2JvcmRlcmVkXVtwb3NpdGlvbj1ib3R0b21dKSAuY29udGFpbmVye2JvcmRlci1ibG9jay1zdGFydC1zdHlsZTp1bnNldH06aG9zdChbc2VsZWN0ZWRdW2JvcmRlcmVkXSkgLmNvbnRhaW5lcntib3JkZXItaW5saW5lLXN0YXJ0LWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpO2JvcmRlci1pbmxpbmUtZW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpfTpob3N0KFtib3JkZXJlZF0pIC5jb250ZW50e3BhZGRpbmctaW5saW5lOjAuNzVyZW19Omhvc3QoW2JvcmRlcmVkXSkgLnNjYWxlLXMgLmNvbnRlbnR7cGFkZGluZy1pbmxpbmU6MC41cmVtfTpob3N0KFtib3JkZXJlZF0pIC5zY2FsZS1sIC5jb250ZW50e3BhZGRpbmctaW5saW5lOjFyZW19QG1lZGlhIChmb3JjZWQtY29sb3JzOiBhY3RpdmUpezpob3N0e291dGxpbmUtd2lkdGg6MDtvdXRsaW5lLW9mZnNldDowfTpob3N0KDpmb2N1cykgLmNvbnRhaW5lcntvdXRsaW5lLWNvbG9yOmhpZ2hsaWdodH06aG9zdChbYm9yZGVyZWRdKSAuY29udGFpbmVye2JvcmRlci1ibG9jay1lbmQtc3R5bGU6c29saWR9Omhvc3QoW2JvcmRlcmVkXVtwb3NpdGlvbj1ib3R0b21dKSAuY29udGFpbmVye2JvcmRlci1ibG9jay1zdGFydC1zdHlsZTpzb2xpZH06aG9zdChbYm9yZGVyZWRdW3NlbGVjdGVkXSkgLmNvbnRhaW5lcntib3JkZXItYmxvY2stZW5kLXN0eWxlOm5vbmV9Omhvc3QoW2JvcmRlcmVkXVtwb3NpdGlvbj1ib3R0b21dW3NlbGVjdGVkXSkgLmNvbnRhaW5lcntib3JkZXItYmxvY2stc3RhcnQtc3R5bGU6bm9uZX0uY2xvc2UtYnV0dG9ue3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleCl9fTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBUYWJUaXRsZSA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlVGFic0FjdGl2YXRlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlVGFic0FjdGl2YXRlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0FjdGl2YXRlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxUYWJzQWN0aXZhdGVcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlVGFic0Nsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlVGFic0Nsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0Nsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxUYWJzQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJzRm9jdXNOZXh0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxUYWJzRm9jdXNOZXh0XCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzUHJldmlvdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFRhYnNGb2N1c1ByZXZpb3VzXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzRmlyc3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFRhYnNGb2N1c0ZpcnN0XCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzTGFzdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzTGFzdFwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYlRpdGxlUmVnaXN0ZXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFRhYlRpdGxlUmVnaXN0ZXJcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJJY29uQ2hhbmdlZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsVGFiSWNvbkNoYW5nZWRcIiwgNik7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuY2xvc2VDbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlVGFiVGl0bGVBbmROb3RpZnkoKTtcbiAgICB9O1xuICAgIC8qKiB3YXRjaGVzIGZvciBjaGFuZ2luZyB0ZXh0IGNvbnRlbnQgKi9cbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsICgpID0+IHRoaXMudXBkYXRlSGFzVGV4dCgpKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJJY29uQ2hhbmdlZC5lbWl0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5ndWlkID0gYGNhbGNpdGUtdGFiLXRpdGxlLSR7Z3VpZCgpfWA7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2FibGUgPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmljb25FbmQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pY29uRmxpcFJ0bCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25TdGFydCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxheW91dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBvc2l0aW9uID0gXCJ0b3BcIjtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5ib3JkZXJlZCA9IGZhbHNlO1xuICAgIHRoaXMudGFiID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY29udHJvbHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oYXNUZXh0ID0gZmFsc2U7XG4gIH1cbiAgc2VsZWN0ZWRIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmVtaXRBY3RpdmVUYWIoZmFsc2UpO1xuICAgIH1cbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMuc2V0dXBUZXh0Q29udGVudE9ic2VydmVyKCk7XG4gICAgdGhpcy5wYXJlbnRUYWJOYXZFbCA9IHRoaXMuZWwuY2xvc2VzdChcImNhbGNpdGUtdGFiLW5hdlwiKTtcbiAgICB0aGlzLnBhcmVudFRhYnNFbCA9IHRoaXMuZWwuY2xvc2VzdChcImNhbGNpdGUtdGFic1wiKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICAvLyBEaXNwYXRjaGluZyB0byBib2R5IGluIG9yZGVyIHRvIGJlIGxpc3RlbmVkIGJ5IG90aGVyIGVsZW1lbnRzIHRoYXQgYXJlIHN0aWxsIGNvbm5lY3RlZCB0byB0aGUgRE9NLlxuICAgIGRvY3VtZW50LmJvZHk/LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2FsY2l0ZVRhYlRpdGxlVW5yZWdpc3RlclwiLCB7XG4gICAgICBkZXRhaWw6IHRoaXMuZWwsXG4gICAgfSkpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgICBpZiAoQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnVwZGF0ZUhhc1RleHQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudGFiICYmIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuZW1pdEFjdGl2ZVRhYihmYWxzZSk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxSZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucGFyZW50VGFic0VsKSB7XG4gICAgICB0aGlzLmxheW91dCA9IHRoaXMucGFyZW50VGFic0VsLmxheW91dDtcbiAgICAgIHRoaXMuYm9yZGVyZWQgPSB0aGlzLnBhcmVudFRhYnNFbC5ib3JkZXJlZDtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWwsIGNsb3NlZCB9ID0gdGhpcztcbiAgICBjb25zdCBpZCA9IGVsLmlkIHx8IHRoaXMuZ3VpZDtcbiAgICBjb25zdCBpY29uU3RhcnRFbCA9IChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IHsgW0NTUy50aXRsZUljb25dOiB0cnVlLCBbQ1NTLmljb25TdGFydF06IHRydWUgfSwgZmxpcFJ0bDogdGhpcy5pY29uRmxpcFJ0bCA9PT0gXCJzdGFydFwiIHx8IHRoaXMuaWNvbkZsaXBSdGwgPT09IFwiYm90aFwiLCBpY29uOiB0aGlzLmljb25TdGFydCwgc2NhbGU6IGdldEljb25TY2FsZSh0aGlzLnNjYWxlKSB9KSk7XG4gICAgY29uc3QgaWNvbkVuZEVsID0gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogeyBbQ1NTLnRpdGxlSWNvbl06IHRydWUsIFtDU1MuaWNvbkVuZF06IHRydWUgfSwgZmxpcFJ0bDogdGhpcy5pY29uRmxpcFJ0bCA9PT0gXCJlbmRcIiB8fCB0aGlzLmljb25GbGlwUnRsID09PSBcImJvdGhcIiwgaWNvbjogdGhpcy5pY29uRW5kLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKTtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtY29udHJvbHNcIjogdGhpcy5jb250cm9scywgXCJhcmlhLXNlbGVjdGVkXCI6IHRvQXJpYUJvb2xlYW4odGhpcy5zZWxlY3RlZCksIGlkOiBpZCwgcm9sZTogXCJ0YWJcIiwgdGFiSW5kZXg6IHRoaXMuc2VsZWN0ZWQgPyAwIDogLTEgfSwgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICAgICAgW0NTUy5pY29uUHJlc2VudF06ICEhdGhpcy5pY29uU3RhcnQgfHwgISF0aGlzLmljb25FbmQsXG4gICAgICAgIFtgc2NhbGUtJHt0aGlzLnNjYWxlfWBdOiB0cnVlLFxuICAgICAgfSwgaGlkZGVuOiBjbG9zZWQsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiAoZWwpID0+IHRoaXMucmVzaXplT2JzZXJ2ZXI/Lm9ic2VydmUoZWwpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTLmNvbnRlbnRdOiB0cnVlLCBbQ1NTLmNvbnRlbnRIYXNUZXh0XTogdGhpcy5oYXNUZXh0IH0gfSwgdGhpcy5pY29uU3RhcnQgPyBpY29uU3RhcnRFbCA6IG51bGwsIGgoXCJzbG90XCIsIG51bGwpLCB0aGlzLmljb25FbmQgPyBpY29uRW5kRWwgOiBudWxsKSwgdGhpcy5yZW5kZXJDbG9zZUJ1dHRvbigpKSkpO1xuICB9XG4gIHJlbmRlckNsb3NlQnV0dG9uKCkge1xuICAgIGNvbnN0IHsgY2xvc2FibGUsIG1lc3NhZ2VzIH0gPSB0aGlzO1xuICAgIHJldHVybiBjbG9zYWJsZSA/IChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IG1lc3NhZ2VzLmNsb3NlLCBjbGFzczogQ1NTLmNsb3NlQnV0dG9uLCBkaXNhYmxlZDogZmFsc2UsIGtleTogQ1NTLmNsb3NlQnV0dG9uLCBvbkNsaWNrOiB0aGlzLmNsb3NlQ2xpY2tIYW5kbGVyLCB0aXRsZTogbWVzc2FnZXMuY2xvc2UsIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLmNsb3NlQnV0dG9uRWwgPSBlbCkgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IElDT05TLmNsb3NlLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKSkgOiBudWxsO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJUaXRsZVJlZ2lzdGVyLmVtaXQoYXdhaXQgdGhpcy5nZXRUYWJJZGVudGlmaWVyKCkpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcywgKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQ7XG4gICAgfSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaW50ZXJuYWxUYWJDaGFuZ2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0VGFic0VsID0gZXZlbnRcbiAgICAgIC5jb21wb3NlZFBhdGgoKVxuICAgICAgLmZpbmQoKGVsKSA9PiBlbC50YWdOYW1lID09PSBcIkNBTENJVEUtVEFCU1wiKTtcbiAgICBpZiAodGFyZ2V0VGFic0VsICE9PSB0aGlzLnBhcmVudFRhYnNFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy50YWIpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnRhYiA9PT0gZXZlbnQuZGV0YWlsLnRhYjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmdldFRhYkluZGV4KCkudGhlbigoaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGluZGV4ID09PSBldmVudC5kZXRhaWwudGFiO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIG9uQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbWl0QWN0aXZlVGFiKCk7XG4gIH1cbiAga2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSBcIiBcIjpcbiAgICAgIGNhc2UgXCJFbnRlclwiOlxuICAgICAgICBpZiAoIWV2ZW50LmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKHRoaXMuY2xvc2VCdXR0b25FbCkpIHtcbiAgICAgICAgICB0aGlzLmVtaXRBY3RpdmVUYWIoKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGdldEVsZW1lbnREaXIodGhpcy5lbCkgPT09IFwibHRyXCIpIHtcbiAgICAgICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYnNGb2N1c05leHQuZW1pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzUHJldmlvdXMuZW1pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZ2V0RWxlbWVudERpcih0aGlzLmVsKSA9PT0gXCJsdHJcIikge1xuICAgICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzUHJldmlvdXMuZW1pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzTmV4dC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYnNGb2N1c0ZpcnN0LmVtaXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiRW5kXCI6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzTGFzdC5lbWl0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgdGl0bGUgd2l0aGluIHRoZSBgY2FsY2l0ZS10YWItbmF2YC5cbiAgICovXG4gIGFzeW5jIGdldFRhYkluZGV4KCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKG5vZGVMaXN0VG9BcnJheSh0aGlzLmVsLnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pLmZpbHRlcigoZWwpID0+IGVsLm1hdGNoZXMoXCJjYWxjaXRlLXRhYi10aXRsZVwiKSksIHRoaXMuZWwpO1xuICB9XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFzeW5jIGdldFRhYklkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFiID8gdGhpcy50YWIgOiB0aGlzLmdldFRhYkluZGV4KCk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB0YWJJZHNcbiAgICogQHBhcmFtIHRpdGxlSWRzXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgdXBkYXRlQXJpYUluZm8odGFiSWRzID0gW10sIHRpdGxlSWRzID0gW10pIHtcbiAgICB0aGlzLmNvbnRyb2xzID0gdGFiSWRzW3RpdGxlSWRzLmluZGV4T2YodGhpcy5lbC5pZCldIHx8IG51bGw7XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICB1cGRhdGVIYXNUZXh0KCkge1xuICAgIHRoaXMuaGFzVGV4dCA9IHRoaXMuZWwudGV4dENvbnRlbnQudHJpbSgpLmxlbmd0aCA+IDA7XG4gIH1cbiAgc2V0dXBUZXh0Q29udGVudE9ic2VydmVyKCkge1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8ub2JzZXJ2ZSh0aGlzLmVsLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgfVxuICBlbWl0QWN0aXZlVGFiKHVzZXJUcmlnZ2VyZWQgPSB0cnVlKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5jbG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGF5bG9hZCA9IHsgdGFiOiB0aGlzLnRhYiB9O1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0FjdGl2YXRlLmVtaXQocGF5bG9hZCk7XG4gICAgaWYgKHVzZXJUcmlnZ2VyZWQpIHtcbiAgICAgIC8vIGVtaXQgaW4gdGhlIG5leHQgZnJhbWUgdG8gbGV0IGludGVybmFsIGV2ZW50cyBzeW5jIHVwXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5jYWxjaXRlVGFic0FjdGl2YXRlLmVtaXQoKSk7XG4gICAgfVxuICB9XG4gIGNsb3NlVGFiVGl0bGVBbmROb3RpZnkoKSB7XG4gICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0Nsb3NlLmVtaXQoeyB0YWI6IHRoaXMudGFiIH0pO1xuICAgIHRoaXMuY2FsY2l0ZVRhYnNDbG9zZS5lbWl0KCk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcInNlbGVjdGVkXCI6IFtcInNlbGVjdGVkSGFuZGxlclwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gdGFiVGl0bGVDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtdGFiLXRpdGxlXCIsIHtcbiAgICBcInNlbGVjdGVkXCI6IFsxNTQwXSxcbiAgICBcImNsb3NhYmxlXCI6IFs1MTZdLFxuICAgIFwiY2xvc2VkXCI6IFsxNTQwXSxcbiAgICBcImRpc2FibGVkXCI6IFs1MTZdLFxuICAgIFwiaWNvbkVuZFwiOiBbNTEzLCBcImljb24tZW5kXCJdLFxuICAgIFwiaWNvbkZsaXBSdGxcIjogWzUxMywgXCJpY29uLWZsaXAtcnRsXCJdLFxuICAgIFwiaWNvblN0YXJ0XCI6IFs1MTMsIFwiaWNvbi1zdGFydFwiXSxcbiAgICBcImxheW91dFwiOiBbMTUzN10sXG4gICAgXCJwb3NpdGlvblwiOiBbMV0sXG4gICAgXCJzY2FsZVwiOiBbMV0sXG4gICAgXCJib3JkZXJlZFwiOiBbMTU0MF0sXG4gICAgXCJ0YWJcIjogWzUxM10sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFsxMDQwXSxcbiAgICBcImNvbnRyb2xzXCI6IFszMl0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwiaGFzVGV4dFwiOiBbMzJdLFxuICAgIFwiZ2V0VGFiSW5kZXhcIjogWzY0XSxcbiAgICBcImdldFRhYklkZW50aWZpZXJcIjogWzY0XSxcbiAgICBcInVwZGF0ZUFyaWFJbmZvXCI6IFs2NF1cbiAgfSwgW1sxNiwgXCJjYWxjaXRlSW50ZXJuYWxUYWJDaGFuZ2VcIiwgXCJpbnRlcm5hbFRhYkNoYW5nZUhhbmRsZXJcIl0sIFswLCBcImNsaWNrXCIsIFwib25DbGlja1wiXSwgWzAsIFwia2V5ZG93blwiLCBcImtleURvd25IYW5kbGVyXCJdXV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS10YWItdGl0bGVcIiwgXCJjYWxjaXRlLWljb25cIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtdGFiLXRpdGxlXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgVGFiVGl0bGUpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgVGFiVGl0bGUgYXMgVCwgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=