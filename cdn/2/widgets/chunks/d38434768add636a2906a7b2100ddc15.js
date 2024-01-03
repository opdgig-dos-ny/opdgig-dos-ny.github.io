"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-modal_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-modal.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-modal.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteModal: () => (/* binding */ CalciteModal),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditionalSlot.js */ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focusTrapComponent.js */ "./node_modules/@esri/calcite-components/dist/components/focusTrapComponent.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _openCloseComponent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./openCloseComponent.js */ "./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _scrim_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scrim.js */ "./node_modules/@esri/calcite-components/dist/components/scrim.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */














const CSS = {
  modal: "modal",
  title: "title",
  header: "header",
  footer: "footer",
  scrim: "scrim",
  back: "back",
  close: "close",
  secondary: "secondary",
  primary: "primary",
  container: "container",
  containerOpen: "container--open",
  content: "content",
  contentNoFooter: "content--no-footer",
  contentBottom: "content-bottom",
  contentTop: "content-top",
  slottedInShell: "slotted-in-shell",
  // these classes help apply the animation in phases to only set transform on open/close
  // this helps avoid a positioning issue for any floating-ui-owning children
  openingIdle: "modal--opening-idle",
  openingActive: "modal--opening-active",
  closingIdle: "modal--closing-idle",
  closingActive: "modal--closing-active",
};
const ICONS = {
  close: "x",
};
const SLOTS = {
  content: "content",
  contentBottom: "content-bottom",
  contentTop: "content-top",
  header: "header",
  back: "back",
  secondary: "secondary",
  primary: "primary",
};

const modalCss = ":host{position:absolute;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-scrim-background-internal:rgba(0, 0, 0, 0.85)}.content-top[hidden],.content-bottom[hidden]{display:none}.container{position:fixed;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;align-items:center;justify-content:center;overflow-y:hidden;color:var(--calcite-ui-text-2);opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([scale=s]){--calcite-modal-padding-internal:0.75rem;--calcite-modal-padding-large-internal:1rem;--calcite-modal-title-text-internal:var(--calcite-font-size-1);--calcite-modal-content-text-internal:var(--calcite-font-size--1)}:host([scale=m]){--calcite-modal-padding-internal:1rem;--calcite-modal-padding-large-internal:1.25rem;--calcite-modal-title-text-internal:var(--calcite-font-size-2);--calcite-modal-content-text-internal:var(--calcite-font-size-0)}:host([scale=l]){--calcite-modal-padding-internal:1.25rem;--calcite-modal-padding-large-internal:1.5rem;--calcite-modal-title-text-internal:var(--calcite-font-size-3);--calcite-modal-content-text-internal:var(--calcite-font-size-1)}.scrim{--calcite-scrim-background:var(--calcite-modal-scrim-background, var(--calcite-modal-scrim-background-internal));position:fixed;inset:0px;display:flex;overflow-y:hidden}.modal{pointer-events:none;z-index:var(--calcite-app-z-index-modal);float:none;margin:1.5rem;box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);opacity:0;--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-overflow-scrolling:touch;visibility:hidden;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-hidden-position:translate3d(0, 20px, 0);--calcite-modal-shown-position:translate3d(0, 0, 0)}.modal--opening-idle{transform:var(--calcite-modal-hidden-position)}.modal--opening-active{transform:var(--calcite-modal-shown-position)}.modal--closing-idle{transform:var(--calcite-modal-shown-position)}.modal--closing-active{transform:var(--calcite-modal-hidden-position)}:host([opened]){opacity:1;visibility:visible !important;transition-delay:0ms}.container--open{opacity:1;visibility:visible !important;transition-delay:0ms}.container--open .modal{pointer-events:auto;visibility:visible;opacity:1;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-inline-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-block-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition-delay:0ms}.header{z-index:var(--calcite-app-z-index-header);display:flex;min-inline-size:0px;max-inline-size:100%;border-start-start-radius:0.25rem;border-start-end-radius:0.25rem;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);flex:0 0 auto}.close{order:2;margin:0px;cursor:pointer;appearance:none;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-internal);flex:0 0 auto}.close calcite-icon{pointer-events:none;vertical-align:-2px}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.close:hover,.close:focus,.close:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.title{order:1;display:flex;min-inline-size:0px;align-items:center;flex:1 1 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}slot[name=header]::slotted(*),*::slotted([slot=header]){margin:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1);font-size:var(--calcite-modal-title-text-internal)}.content{position:relative;box-sizing:border-box;display:block;block-size:100%;overflow:auto;padding:0px;background-color:var(--calcite-modal-content-background, var(--calcite-ui-foreground-1));max-block-size:100%;padding:var(--calcite-modal-content-padding, var(--calcite-modal-padding-internal))}.content-top,.content-bottom{z-index:var(--calcite-app-z-index-header);display:flex;border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);flex:0 0 auto;padding:var(--calcite-modal-padding-internal)}.content-top{min-inline-size:0px;max-inline-size:100%;border-block-end-width:1px}.content-bottom{margin-block-start:auto;box-sizing:border-box;inline-size:100%;justify-content:space-between;border-block-start-width:1px}.content-top:not(.header~.content-top){border-start-start-radius:0.25rem;border-start-end-radius:0.25rem}.content-bottom:not(.content-bottom~.footer),.content--no-footer{border-end-end-radius:0.25rem;border-end-start-radius:0.25rem}slot[name=content]::slotted(*),*::slotted([slot=content]){font-size:var(--calcite-modal-context-text-internal)}.footer{z-index:var(--calcite-app-z-index-header);margin-block-start:auto;box-sizing:border-box;display:flex;inline-size:100%;justify-content:space-between;border-end-end-radius:0.25rem;border-end-start-radius:0.25rem;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);flex:0 0 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}.footer--hide-back .back,.footer--hide-secondary .secondary{display:none}.back{display:block;margin-inline-end:auto}.secondary{margin-inline:0.25rem;display:block}slot[name=primary]{display:block}:host([width=small]) .modal{inline-size:auto}:host([width=s]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 32rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 35rem){:host([width=s]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width=s]) .content{flex:1 1 auto;max-block-size:unset}:host([width=s][docked]) .container{align-items:flex-end}}:host([width=m]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 48rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 51rem){:host([width=m]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width=m]) .content{flex:1 1 auto;max-block-size:unset}:host([width=m][docked]) .container{align-items:flex-end}}:host([width=l]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 94rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 97rem){:host([width=l]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width=l]) .content{flex:1 1 auto;max-block-size:unset}:host([width=l][docked]) .container{align-items:flex-end}}:host([fullscreen]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0px;--calcite-modal-hidden-position:translate3D(0, 20px, 0) scale(0.95);--calcite-modal-shown-position:translate3D(0, 0, 0) scale(1)}:host([fullscreen]) .content{max-block-size:100%;flex:1 1 auto}:host([opened][fullscreen]) .header,:host([opened][fullscreen]) .footer,:host([opened][fullscreen]) .content-top,:host([opened][fullscreen]) .content-bottom{border-radius:0}:host([docked]) .modal{block-size:var(--calcite-modal-height, auto)}:host([docked]) .content{block-size:auto;flex:1 1 auto}:host([kind=brand]) .modal{border-color:var(--calcite-ui-brand)}:host([kind=danger]) .modal{border-color:var(--calcite-ui-danger)}:host([kind=info]) .modal{border-color:var(--calcite-ui-info)}:host([kind=success]) .modal{border-color:var(--calcite-ui-success)}:host([kind=warning]) .modal{border-color:var(--calcite-ui-warning)}:host([kind=brand]) .modal,:host([kind=danger]) .modal,:host([kind=info]) .modal,:host([kind=success]) .modal,:host([kind=warning]) .modal{border-width:0px;border-block-start-width:4px;border-style:solid}:host([kind=brand]) .header,:host([kind=brand]) .content-top,:host([kind=danger]) .header,:host([kind=danger]) .content-top,:host([kind=info]) .header,:host([kind=info]) .content-top,:host([kind=success]) .header,:host([kind=success]) .content-top,:host([kind=warning]) .header,:host([kind=warning]) .content-top{border-radius:0.25rem;border-end-end-radius:0px;border-end-start-radius:0px}@media screen and (max-width: 860px){* slot[name=header]::slotted(content-top),* content-top::slotted([slot=header]){font-size:var(--calcite-font-size-1)}.footer,.content-bottom{position:sticky;inset-block-end:0px}}@media screen and (max-width: 480px){.footer,.content-bottom{flex-direction:column}.back,.secondary{margin:0px;margin-block-end:0.25rem}}.container.slotted-in-shell{position:absolute;pointer-events:auto}.container.slotted-in-shell calcite-scrim{position:absolute}:host([hidden]){display:none}[hidden]{display:none}";

const Modal = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteModalBeforeClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteModalBeforeClose", 6);
    this.calciteModalClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteModalClose", 6);
    this.calciteModalBeforeOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteModalBeforeOpen", 6);
    this.calciteModalOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteModalOpen", 6);
    //--------------------------------------------------------------------------
    //
    //  Private Properties/ State
    //
    //--------------------------------------------------------------------------
    this.ignoreOpenChange = false;
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_4__.c)("mutation", () => this.handleMutationObserver());
    this.cssVarObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_4__.c)("mutation", () => {
      this.updateSizeCssVars();
    });
    this.openTransitionProp = "opacity";
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
    };
    this.openEnd = () => {
      this.setFocus();
      this.el.removeEventListener("calciteModalOpen", this.openEnd);
    };
    this.handleCloseClick = () => {
      this.open = false;
    };
    this.handleOutsideClose = () => {
      if (this.outsideCloseDisabled) {
        return;
      }
      this.open = false;
    };
    this.closeModal = async () => {
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
    this.handleMutationObserver = () => {
      this.updateFooterVisibility();
      this.updateFocusTrapElements();
    };
    this.updateFooterVisibility = () => {
      this.hasFooter = !!(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.el, [SLOTS.back, SLOTS.primary, SLOTS.secondary]);
    };
    this.updateSizeCssVars = () => {
      this.cssWidth = getComputedStyle(this.el).getPropertyValue("--calcite-modal-width");
      this.cssHeight = getComputedStyle(this.el).getPropertyValue("--calcite-modal-height");
    };
    this.contentTopSlotChangeHandler = (event) => {
      this.hasContentTop = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.e)(event);
    };
    this.contentBottomSlotChangeHandler = (event) => {
      this.hasContentBottom = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.e)(event);
    };
    this.open = false;
    this.opened = false;
    this.beforeClose = undefined;
    this.closeButtonDisabled = false;
    this.focusTrapDisabled = false;
    this.outsideCloseDisabled = false;
    this.docked = undefined;
    this.escapeDisabled = false;
    this.scale = "m";
    this.width = "m";
    this.fullscreen = undefined;
    this.kind = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.slottedInShell = undefined;
    this.cssWidth = undefined;
    this.cssHeight = undefined;
    this.hasFooter = true;
    this.hasContentTop = false;
    this.hasContentBottom = false;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  handleFocusTrapDisabled(focusTrapDisabled) {
    if (!this.open) {
      return;
    }
    focusTrapDisabled ? (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_2__.d)(this) : (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  async componentWillLoad() {
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.s)(this);
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.a)(this);
    // when modal initially renders, if active was set we need to open as watcher doesn't fire
    if (this.open) {
      requestAnimationFrame(() => this.openModal());
    }
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
  }
  connectedCallback() {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
    this.cssVarObserver?.observe(this.el, { attributeFilter: ["style"] });
    this.updateSizeCssVars();
    this.updateFooterVisibility();
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
  }
  disconnectedCallback() {
    this.removeOverflowHiddenClass();
    this.mutationObserver?.disconnect();
    this.cssVarObserver?.disconnect();
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    this.slottedInShell = false;
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.Host, { "aria-describedby": this.contentId, "aria-labelledby": this.titleId, "aria-modal": "true", role: "dialog" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: {
        [CSS.container]: true,
        [CSS.containerOpen]: this.opened,
        [CSS.slottedInShell]: this.slottedInShell,
      } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("calcite-scrim", { class: CSS.scrim, onClick: this.handleOutsideClose }), this.renderStyle(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: {
        [CSS.modal]: true,
      },
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setTransitionEl }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: CSS.header }, this.renderCloseButton(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("header", { class: CSS.title }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { name: CSS.header }))), this.renderContentTop(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: {
        [CSS.content]: true,
        [CSS.contentNoFooter]: !this.hasFooter,
      },
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.modalContent = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { name: SLOTS.content })), this.renderContentBottom(), this.renderFooter()))));
  }
  renderFooter() {
    return this.hasFooter ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: CSS.footer, key: "footer" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("span", { class: CSS.back }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { name: SLOTS.back })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("span", { class: CSS.secondary }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { name: SLOTS.secondary })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("span", { class: CSS.primary }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { name: SLOTS.primary })))) : null;
  }
  renderContentTop() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: CSS.contentTop, hidden: !this.hasContentTop }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { name: SLOTS.contentTop, onSlotchange: this.contentTopSlotChangeHandler })));
  }
  renderContentBottom() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("div", { class: CSS.contentBottom, hidden: !this.hasContentBottom }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { name: SLOTS.contentBottom, onSlotchange: this.contentBottomSlotChangeHandler })));
  }
  renderCloseButton() {
    return !this.closeButtonDisabled ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("button", { "aria-label": this.messages.close, class: CSS.close, key: "button", onClick: this.handleCloseClick, title: this.messages.close,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.closeButtonEl = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("calcite-icon", { icon: ICONS.close, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_8__.g)(this.scale) }))) : null;
  }
  renderStyle() {
    if (!this.fullscreen && (this.cssWidth || this.cssHeight)) {
      return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_12__.h)("style", null, `.${CSS.container} {
              ${this.docked && this.cssWidth ? `align-items: center !important;` : ""}
            }
            .${CSS.modal} {
              block-size: ${this.cssHeight ? this.cssHeight : "auto"} !important;
              ${this.cssWidth ? `inline-size: ${this.cssWidth} !important;` : ""}
              ${this.cssWidth ? `max-inline-size: ${this.cssWidth} !important;` : ""}
              ${this.docked ? `border-radius: var(--calcite-border-radius) !important;` : ""}
            }
            @media screen and (max-width: ${this.cssWidth}) {
              .${CSS.container} {
                ${this.docked ? `align-items: flex-end !important;` : ""}
              }
              .${CSS.modal} {
                max-block-size: 100% !important;
                inline-size: 100% !important;
                max-inline-size: 100% !important;
                min-inline-size: 100% !important;
                margin: 0 !important;
                ${!this.docked ? `block-size: 100% !important;` : ""}
                ${!this.docked ? `border-radius: 0 !important;` : ""}
                ${this.docked
        ? `border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0 !important;`
        : ""}
              }
            }
          `));
    }
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.u)(this, this.effectiveLocale);
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
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.el);
  }
  /**
   * Updates the element(s) that are used within the focus-trap of the component.
   */
  async updateFocusTrapElements() {
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  /**
   * Sets the scroll top of the component's content.
   *
   * @param top
   * @param left
   */
  async scrollContent(top = 0, left = 0) {
    if (this.modalContent) {
      if (this.modalContent.scrollTo) {
        this.modalContent.scrollTo({ top, left, behavior: "smooth" });
      }
      else {
        this.modalContent.scrollTop = top;
        this.modalContent.scrollLeft = left;
      }
    }
  }
  onBeforeOpen() {
    this.transitionEl.classList.add(CSS.openingActive);
    this.calciteModalBeforeOpen.emit();
  }
  onOpen() {
    this.transitionEl.classList.remove(CSS.openingIdle, CSS.openingActive);
    this.calciteModalOpen.emit();
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  onBeforeClose() {
    this.transitionEl.classList.add(CSS.closingActive);
    this.calciteModalBeforeClose.emit();
  }
  onClose() {
    this.transitionEl.classList.remove(CSS.closingIdle, CSS.closingActive);
    this.calciteModalClose.emit();
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
  }
  toggleModal(value) {
    if (this.ignoreOpenChange) {
      return;
    }
    if (value) {
      this.openModal();
    }
    else {
      this.closeModal();
    }
  }
  handleOpenedChange(value) {
    (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_5__.o)(this);
    if (value) {
      this.transitionEl?.classList.add(CSS.openingIdle);
    }
    else {
      this.transitionEl?.classList.add(CSS.closingIdle);
    }
  }
  openModal() {
    this.el.addEventListener("calciteModalOpen", this.openEnd);
    this.opened = true;
    const titleEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.el, SLOTS.header);
    const contentEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.el, SLOTS.content);
    this.titleId = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.m)(titleEl);
    this.contentId = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.m)(contentEl);
    if (!this.slottedInShell) {
      this.initialOverflowCSS = document.documentElement.style.overflow;
      // use an inline style instead of a utility class to avoid global class declarations.
      document.documentElement.style.setProperty("overflow", "hidden");
    }
  }
  removeOverflowHiddenClass() {
    document.documentElement.style.setProperty("overflow", this.initialOverflowCSS);
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "focusTrapDisabled": ["handleFocusTrapDisabled"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"],
    "open": ["toggleModal"],
    "opened": ["handleOpenedChange"]
  }; }
  static get style() { return modalCss; }
}, [1, "calcite-modal", {
    "open": [1540],
    "opened": [1540],
    "beforeClose": [16],
    "closeButtonDisabled": [516, "close-button-disabled"],
    "focusTrapDisabled": [516, "focus-trap-disabled"],
    "outsideCloseDisabled": [516, "outside-close-disabled"],
    "docked": [516],
    "escapeDisabled": [516, "escape-disabled"],
    "scale": [513],
    "width": [513],
    "fullscreen": [516],
    "kind": [513],
    "messages": [1040],
    "messageOverrides": [1040],
    "slottedInShell": [1028, "slotted-in-shell"],
    "cssWidth": [32],
    "cssHeight": [32],
    "hasFooter": [32],
    "hasContentTop": [32],
    "hasContentBottom": [32],
    "effectiveLocale": [32],
    "defaultMessages": [32],
    "setFocus": [64],
    "updateFocusTrapElements": [64],
    "scrollContent": [64]
  }, [[8, "keydown", "handleEscape"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-modal", "calcite-icon", "calcite-loader", "calcite-scrim"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-modal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Modal);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_9__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_10__.d)();
      }
      break;
    case "calcite-scrim":
      if (!customElements.get(tagName)) {
        (0,_scrim_js__WEBPACK_IMPORTED_MODULE_11__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteModal = Modal;
const defineCustomElement = defineCustomElement$1;




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

/***/ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ connectConditionalSlotComponent),
/* harmony export */   d: () => (/* binding */ disconnectConditionalSlotComponent)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const observed = new Set();
let mutationObserver;
const observerOptions = { childList: true };
/**
 * Helper to set up a conditional slot component on connectedCallback.
 *
 * @param component
 * @deprecated Use `onSlotchange` event with `slotChangeHasAssignedElement` DOM utility instead.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 */
function connectConditionalSlotComponent(component) {
  if (!mutationObserver) {
    mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_0__.c)("mutation", processMutations);
  }
  mutationObserver.observe(component.el, observerOptions);
}
/**
 * Helper to tear down a conditional slot component on disconnectedCallback.
 *
 * @param component
 * @deprecated Use `onSlotchange` event with `slotChangeHasAssignedElement` DOM utility instead.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 */
function disconnectConditionalSlotComponent(component) {
  observed.delete(component.el);
  // we explicitly process queued mutations and disconnect and reconnect
  // the observer until MutationObserver gets an `unobserve` method
  // see https://github.com/whatwg/dom/issues/126
  processMutations(mutationObserver.takeRecords());
  mutationObserver.disconnect();
  for (const [element] of observed.entries()) {
    mutationObserver.observe(element, observerOptions);
  }
}
function processMutations(mutations) {
  mutations.forEach(({ target }) => {
    (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.forceUpdate)(target);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZDM4NDM0NzY4YWRkNjM2YTI5MDZhN2IyMTAwZGRjMTUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRztBQUNNO0FBQ0M7QUFDMEI7QUFDbEM7QUFDekQ7QUFDcUI7QUFDSTtBQUNvQztBQUMvRDtBQUNJO0FBQ0U7QUFDRDs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixrQkFBa0IsVUFBVSwyQ0FBMkMsYUFBYSxVQUFVLDZCQUE2Qiw0S0FBNEssOERBQThELDZDQUE2QyxhQUFhLFdBQVcsZUFBZSxVQUFVLDJDQUEyQyxhQUFhLG1CQUFtQix1QkFBdUIsa0JBQWtCLCtCQUErQixVQUFVLDZCQUE2Qiw0S0FBNEssaUJBQWlCLHlDQUF5Qyw0Q0FBNEMsK0RBQStELGtFQUFrRSxpQkFBaUIsc0NBQXNDLCtDQUErQywrREFBK0QsaUVBQWlFLGlCQUFpQix5Q0FBeUMsOENBQThDLCtEQUErRCxpRUFBaUUsT0FBTyxpSEFBaUgsZUFBZSxVQUFVLGFBQWEsa0JBQWtCLE9BQU8sb0JBQW9CLHlDQUF5QyxXQUFXLGNBQWMsc0JBQXNCLGFBQWEsaUJBQWlCLHNCQUFzQixnQkFBZ0Isc0JBQXNCLGdEQUFnRCxVQUFVLG1GQUFtRixrR0FBa0csdUdBQXVHLGlDQUFpQyxrQkFBa0IsMlFBQTJRLHdEQUF3RCxvREFBb0QscUJBQXFCLCtDQUErQyx1QkFBdUIsOENBQThDLHFCQUFxQiw4Q0FBOEMsdUJBQXVCLCtDQUErQyxnQkFBZ0IsVUFBVSw4QkFBOEIscUJBQXFCLGlC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Q0E7QUFDQTs7QUFFa0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS1tb2RhbC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jb25kaXRpb25hbFNsb3QuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2ljb24uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2xvYWRhYmxlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL29wZW5DbG9zZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvc2NyaW0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3Q5bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCwgZCBhcyBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IH0gZnJvbSAnLi9jb25kaXRpb25hbFNsb3QuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTbG90dGVkLCBlIGFzIHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQsIGYgYXMgZm9jdXNGaXJzdFRhYmJhYmxlLCBtIGFzIGVuc3VyZUlkIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWFjdGl2YXRlRm9jdXNUcmFwLCBhIGFzIGFjdGl2YXRlRm9jdXNUcmFwLCBjIGFzIGNvbm5lY3RGb2N1c1RyYXAsIHUgYXMgdXBkYXRlRm9jdXNUcmFwRWxlbWVudHMgfSBmcm9tICcuL2ZvY3VzVHJhcENvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudEZvY3VzYWJsZSB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcbmltcG9ydCB7IG8gYXMgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQgfSBmcm9tICcuL29wZW5DbG9zZUNvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCB7IHMgYXMgc2V0VXBNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzLCB1IGFzIHVwZGF0ZU1lc3NhZ2VzIH0gZnJvbSAnLi90OW4uanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRJY29uU2NhbGUgfSBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNCB9IGZyb20gJy4vaWNvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMyB9IGZyb20gJy4vbG9hZGVyLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9zY3JpbS5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgbW9kYWw6IFwibW9kYWxcIixcbiAgdGl0bGU6IFwidGl0bGVcIixcbiAgaGVhZGVyOiBcImhlYWRlclwiLFxuICBmb290ZXI6IFwiZm9vdGVyXCIsXG4gIHNjcmltOiBcInNjcmltXCIsXG4gIGJhY2s6IFwiYmFja1wiLFxuICBjbG9zZTogXCJjbG9zZVwiLFxuICBzZWNvbmRhcnk6IFwic2Vjb25kYXJ5XCIsXG4gIHByaW1hcnk6IFwicHJpbWFyeVwiLFxuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGNvbnRhaW5lck9wZW46IFwiY29udGFpbmVyLS1vcGVuXCIsXG4gIGNvbnRlbnQ6IFwiY29udGVudFwiLFxuICBjb250ZW50Tm9Gb290ZXI6IFwiY29udGVudC0tbm8tZm9vdGVyXCIsXG4gIGNvbnRlbnRCb3R0b206IFwiY29udGVudC1ib3R0b21cIixcbiAgY29udGVudFRvcDogXCJjb250ZW50LXRvcFwiLFxuICBzbG90dGVkSW5TaGVsbDogXCJzbG90dGVkLWluLXNoZWxsXCIsXG4gIC8vIHRoZXNlIGNsYXNzZXMgaGVscCBhcHBseSB0aGUgYW5pbWF0aW9uIGluIHBoYXNlcyB0byBvbmx5IHNldCB0cmFuc2Zvcm0gb24gb3Blbi9jbG9zZVxuICAvLyB0aGlzIGhlbHBzIGF2b2lkIGEgcG9zaXRpb25pbmcgaXNzdWUgZm9yIGFueSBmbG9hdGluZy11aS1vd25pbmcgY2hpbGRyZW5cbiAgb3BlbmluZ0lkbGU6IFwibW9kYWwtLW9wZW5pbmctaWRsZVwiLFxuICBvcGVuaW5nQWN0aXZlOiBcIm1vZGFsLS1vcGVuaW5nLWFjdGl2ZVwiLFxuICBjbG9zaW5nSWRsZTogXCJtb2RhbC0tY2xvc2luZy1pZGxlXCIsXG4gIGNsb3NpbmdBY3RpdmU6IFwibW9kYWwtLWNsb3NpbmctYWN0aXZlXCIsXG59O1xuY29uc3QgSUNPTlMgPSB7XG4gIGNsb3NlOiBcInhcIixcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgY29udGVudDogXCJjb250ZW50XCIsXG4gIGNvbnRlbnRCb3R0b206IFwiY29udGVudC1ib3R0b21cIixcbiAgY29udGVudFRvcDogXCJjb250ZW50LXRvcFwiLFxuICBoZWFkZXI6IFwiaGVhZGVyXCIsXG4gIGJhY2s6IFwiYmFja1wiLFxuICBzZWNvbmRhcnk6IFwic2Vjb25kYXJ5XCIsXG4gIHByaW1hcnk6IFwicHJpbWFyeVwiLFxufTtcblxuY29uc3QgbW9kYWxDc3MgPSBcIjpob3N0e3Bvc2l0aW9uOmFic29sdXRlO2luc2V0OjBweDt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtb3ZlcmxheSk7ZGlzcGxheTpmbGV4O29wYWNpdHk6MDt2aXNpYmlsaXR5OmhpZGRlbiAhaW1wb3J0YW50O3RyYW5zaXRpb246dmlzaWJpbGl0eSAwbXMgbGluZWFyIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSwgb3BhY2l0eSB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdykgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjQ0LCAwLjQyLCAwLjg4KTstLWNhbGNpdGUtbW9kYWwtc2NyaW0tYmFja2dyb3VuZC1pbnRlcm5hbDpyZ2JhKDAsIDAsIDAsIDAuODUpfS5jb250ZW50LXRvcFtoaWRkZW5dLC5jb250ZW50LWJvdHRvbVtoaWRkZW5de2Rpc3BsYXk6bm9uZX0uY29udGFpbmVye3Bvc2l0aW9uOmZpeGVkO2luc2V0OjBweDt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtb3ZlcmxheSk7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO292ZXJmbG93LXk6aGlkZGVuO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTtvcGFjaXR5OjA7dmlzaWJpbGl0eTpoaWRkZW4gIWltcG9ydGFudDt0cmFuc2l0aW9uOnZpc2liaWxpdHkgMG1zIGxpbmVhciB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdyksIG9wYWNpdHkgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIGN1YmljLWJlemllcigwLjIxNSwgMC40NCwgMC40MiwgMC44OCl9Omhvc3QoW3NjYWxlPXNdKXstLWNhbGNpdGUtbW9kYWwtcGFkZGluZy1pbnRlcm5hbDowLjc1cmVtOy0tY2FsY2l0ZS1tb2RhbC1wYWRkaW5nLWxhcmdlLWludGVybmFsOjFyZW07LS1jYWxjaXRlLW1vZGFsLXRpdGxlLXRleHQtaW50ZXJuYWw6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMSk7LS1jYWxjaXRlLW1vZGFsLWNvbnRlbnQtdGV4dC1pbnRlcm5hbDp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSl9Omhvc3QoW3NjYWxlPW1dKXstLWNhbGNpdGUtbW9kYWwtcGFkZGluZy1pbnRlcm5hbDoxcmVtOy0tY2FsY2l0ZS1tb2RhbC1wYWRkaW5nLWxhcmdlLWludGVybmFsOjEuMjVyZW07LS1jYWxjaXRlLW1vZGFsLXRpdGxlLXRleHQtaW50ZXJuYWw6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMik7LS1jYWxjaXRlLW1vZGFsLWNvbnRlbnQtdGV4dC1pbnRlcm5hbDp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKX06aG9zdChbc2NhbGU9bF0pey0tY2FsY2l0ZS1tb2RhbC1wYWRkaW5nLWludGVybmFsOjEuMjVyZW07LS1jYWxjaXRlLW1vZGFsLXBhZGRpbmctbGFyZ2UtaW50ZXJuYWw6MS41cmVtOy0tY2FsY2l0ZS1tb2RhbC10aXRsZS10ZXh0LWludGVybmFsOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTMpOy0tY2FsY2l0ZS1tb2RhbC1jb250ZW50LXRleHQtaW50ZXJuYWw6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMSl9LnNjcmltey0tY2FsY2l0ZS1zY3JpbS1iYWNrZ3JvdW5kOnZhcigtLWNhbGNpdGUtbW9kYWwtc2NyaW0tYmFja2dyb3VuZCwgdmFyKC0tY2FsY2l0ZS1tb2RhbC1zY3JpbS1iYWNrZ3JvdW5kLWludGVybmFsKSk7cG9zaXRpb246Zml4ZWQ7aW5zZXQ6MHB4O2Rpc3BsYXk6ZmxleDtvdmVyZmxvdy15OmhpZGRlbn0ubW9kYWx7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtbW9kYWwpO2Zsb2F0Om5vbmU7bWFyZ2luOjEuNXJlbTtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCU7ZmxleC1kaXJlY3Rpb246Y29sdW1uO292ZXJmbG93OmhpZGRlbjtib3JkZXItcmFkaXVzOjAuMjVyZW07YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7b3BhY2l0eTowOy0tdHctc2hhZG93OjAgMnB4IDEycHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7LS10dy1zaGFkb3ctY29sb3JlZDowIDJweCAxMnB4IC00cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMCAycHggNHB4IC0ycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7dmlzaWJpbGl0eTpoaWRkZW47dHJhbnNpdGlvbjp0cmFuc2Zvcm0gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIGN1YmljLWJlemllcigwLjIxNSwgMC40NCwgMC40MiwgMC44OCksIHZpc2liaWxpdHkgMG1zIGxpbmVhciB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdyksIG9wYWNpdHkgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIGN1YmljLWJlemllcigwLjIxNSwgMC40NCwgMC40MiwgMC44OCk7LS1jYWxjaXRlLW1vZGFsLWhpZGRlbi1wb3NpdGlvbjp0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKTstLWNhbGNpdGUtbW9kYWwtc2hvd24tcG9zaXRpb246dHJhbnNsYXRlM2QoMCwgMCwgMCl9Lm1vZGFsLS1vcGVuaW5nLWlkbGV7dHJhbnNmb3JtOnZhcigtLWNhbGNpdGUtbW9kYWwtaGlkZGVuLXBvc2l0aW9uKX0ubW9kYWwtLW9wZW5pbmctYWN0aXZle3RyYW5zZm9ybTp2YXIoLS1jYWxjaXRlLW1vZGFsLXNob3duLXBvc2l0aW9uKX0ubW9kYWwtLWNsb3NpbmctaWRsZXt0cmFuc2Zvcm06dmFyKC0tY2FsY2l0ZS1tb2RhbC1zaG93bi1wb3NpdGlvbil9Lm1vZGFsLS1jbG9zaW5nLWFjdGl2ZXt0cmFuc2Zvcm06dmFyKC0tY2FsY2l0ZS1tb2RhbC1oaWRkZW4tcG9zaXRpb24pfTpob3N0KFtvcGVuZWRdKXtvcGFjaXR5OjE7dmlzaWJpbGl0eTp2aXNpYmxlICFpbXBvcnRhbnQ7dHJhbnNpdGlvbi1kZWxheTowbXN9LmNvbnRhaW5lci0tb3BlbntvcGFjaXR5OjE7dmlzaWJpbGl0eTp2aXNpYmxlICFpbXBvcnRhbnQ7dHJhbnNpdGlvbi1kZWxheTowbXN9LmNvbnRhaW5lci0tb3BlbiAubW9kYWx7cG9pbnRlci1ldmVudHM6YXV0bzt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO3RyYW5zaXRpb246dHJhbnNmb3JtIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNDQsIDAuNDIsIDAuODgpLCB2aXNpYmlsaXR5IDBtcyBsaW5lYXIsIG9wYWNpdHkgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIGN1YmljLWJlemllcigwLjIxNSwgMC40NCwgMC40MiwgMC44OCksIG1heC1pbmxpbmUtc2l6ZSB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdykgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjQ0LCAwLjQyLCAwLjg4KSwgbWF4LWJsb2NrLXNpemUgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIGN1YmljLWJlemllcigwLjIxNSwgMC40NCwgMC40MiwgMC44OCk7dHJhbnNpdGlvbi1kZWxheTowbXN9LmhlYWRlcnt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtaGVhZGVyKTtkaXNwbGF5OmZsZXg7bWluLWlubGluZS1zaXplOjBweDttYXgtaW5saW5lLXNpemU6MTAwJTtib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzOjAuMjVyZW07Ym9yZGVyLXN0YXJ0LWVuZC1yYWRpdXM6MC4yNXJlbTtib3JkZXItd2lkdGg6MHB4O2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7ZmxleDowIDAgYXV0b30uY2xvc2V7b3JkZXI6MjttYXJnaW46MHB4O2N1cnNvcjpwb2ludGVyO2FwcGVhcmFuY2U6bm9uZTtib3JkZXItc3R5bGU6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO3BhZGRpbmctYmxvY2s6dmFyKC0tY2FsY2l0ZS1tb2RhbC1wYWRkaW5nLWludGVybmFsKTtwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLW1vZGFsLXBhZGRpbmctaW50ZXJuYWwpO2ZsZXg6MCAwIGF1dG99LmNsb3NlIGNhbGNpdGUtaWNvbntwb2ludGVyLWV2ZW50czpub25lO3ZlcnRpY2FsLWFsaWduOi0ycHh9LmNsb3NlOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX0uY2xvc2U6aG92ZXIsLmNsb3NlOmZvY3VzLC5jbG9zZTphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS50aXRsZXtvcmRlcjoxO2Rpc3BsYXk6ZmxleDttaW4taW5saW5lLXNpemU6MHB4O2FsaWduLWl0ZW1zOmNlbnRlcjtmbGV4OjEgMSBhdXRvO3BhZGRpbmctYmxvY2s6dmFyKC0tY2FsY2l0ZS1tb2RhbC1wYWRkaW5nLWludGVybmFsKTtwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLW1vZGFsLXBhZGRpbmctbGFyZ2UtaW50ZXJuYWwpfXNsb3RbbmFtZT1oZWFkZXJdOjpzbG90dGVkKCopLCo6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSl7bWFyZ2luOjBweDtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLW1vZGFsLXRpdGxlLXRleHQtaW50ZXJuYWwpfS5jb250ZW50e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmJsb2NrO2Jsb2NrLXNpemU6MTAwJTtvdmVyZmxvdzphdXRvO3BhZGRpbmc6MHB4O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS1tb2RhbC1jb250ZW50LWJhY2tncm91bmQsIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKSk7bWF4LWJsb2NrLXNpemU6MTAwJTtwYWRkaW5nOnZhcigtLWNhbGNpdGUtbW9kYWwtY29udGVudC1wYWRkaW5nLCB2YXIoLS1jYWxjaXRlLW1vZGFsLXBhZGRpbmctaW50ZXJuYWwpKX0uY29udGVudC10b3AsLmNvbnRlbnQtYm90dG9te3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1oZWFkZXIpO2Rpc3BsYXk6ZmxleDtib3JkZXItd2lkdGg6MHB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7ZmxleDowIDAgYXV0bztwYWRkaW5nOnZhcigtLWNhbGNpdGUtbW9kYWwtcGFkZGluZy1pbnRlcm5hbCl9LmNvbnRlbnQtdG9we21pbi1pbmxpbmUtc2l6ZTowcHg7bWF4LWlubGluZS1zaXplOjEwMCU7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDoxcHh9LmNvbnRlbnQtYm90dG9te21hcmdpbi1ibG9jay1zdGFydDphdXRvO2JveC1zaXppbmc6Ym9yZGVyLWJveDtpbmxpbmUtc2l6ZToxMDAlO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2JvcmRlci1ibG9jay1zdGFydC13aWR0aDoxcHh9LmNvbnRlbnQtdG9wOm5vdCguaGVhZGVyfi5jb250ZW50LXRvcCl7Ym9yZGVyLXN0YXJ0LXN0YXJ0LXJhZGl1czowLjI1cmVtO2JvcmRlci1zdGFydC1lbmQtcmFkaXVzOjAuMjVyZW19LmNvbnRlbnQtYm90dG9tOm5vdCguY29udGVudC1ib3R0b21+LmZvb3RlciksLmNvbnRlbnQtLW5vLWZvb3Rlcntib3JkZXItZW5kLWVuZC1yYWRpdXM6MC4yNXJlbTtib3JkZXItZW5kLXN0YXJ0LXJhZGl1czowLjI1cmVtfXNsb3RbbmFtZT1jb250ZW50XTo6c2xvdHRlZCgqKSwqOjpzbG90dGVkKFtzbG90PWNvbnRlbnRdKXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1tb2RhbC1jb250ZXh0LXRleHQtaW50ZXJuYWwpfS5mb290ZXJ7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWhlYWRlcik7bWFyZ2luLWJsb2NrLXN0YXJ0OmF1dG87Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2JvcmRlci1lbmQtZW5kLXJhZGl1czowLjI1cmVtO2JvcmRlci1lbmQtc3RhcnQtcmFkaXVzOjAuMjVyZW07Ym9yZGVyLXdpZHRoOjBweDtib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7ZmxleDowIDAgYXV0bztwYWRkaW5nLWJsb2NrOnZhcigtLWNhbGNpdGUtbW9kYWwtcGFkZGluZy1pbnRlcm5hbCk7cGFkZGluZy1pbmxpbmU6dmFyKC0tY2FsY2l0ZS1tb2RhbC1wYWRkaW5nLWxhcmdlLWludGVybmFsKX0uZm9vdGVyLS1oaWRlLWJhY2sgLmJhY2ssLmZvb3Rlci0taGlkZS1zZWNvbmRhcnkgLnNlY29uZGFyeXtkaXNwbGF5Om5vbmV9LmJhY2t7ZGlzcGxheTpibG9jazttYXJnaW4taW5saW5lLWVuZDphdXRvfS5zZWNvbmRhcnl7bWFyZ2luLWlubGluZTowLjI1cmVtO2Rpc3BsYXk6YmxvY2t9c2xvdFtuYW1lPXByaW1hcnlde2Rpc3BsYXk6YmxvY2t9Omhvc3QoW3dpZHRoPXNtYWxsXSkgLm1vZGFse2lubGluZS1zaXplOmF1dG99Omhvc3QoW3dpZHRoPXNdKSAubW9kYWx7bWF4LWJsb2NrLXNpemU6MTAwJTttYXgtaW5saW5lLXNpemU6MTAwJTtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLW1vZGFsLXdpZHRoLCAzMnJlbSk7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLW1vZGFsLWhlaWdodCwgYXV0byl9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzVyZW0pezpob3N0KFt3aWR0aD1zXSkgLm1vZGFse21hcmdpbjowcHg7YmxvY2stc2l6ZToxMDAlO21heC1ibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTttYXgtaW5saW5lLXNpemU6MTAwJX06aG9zdChbd2lkdGg9c10pIC5jb250ZW50e2ZsZXg6MSAxIGF1dG87bWF4LWJsb2NrLXNpemU6dW5zZXR9Omhvc3QoW3dpZHRoPXNdW2RvY2tlZF0pIC5jb250YWluZXJ7YWxpZ24taXRlbXM6ZmxleC1lbmR9fTpob3N0KFt3aWR0aD1tXSkgLm1vZGFse21heC1ibG9jay1zaXplOjEwMCU7bWF4LWlubGluZS1zaXplOjEwMCU7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1tb2RhbC13aWR0aCwgNDhyZW0pO2Jsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1tb2RhbC1oZWlnaHQsIGF1dG8pfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUxcmVtKXs6aG9zdChbd2lkdGg9bV0pIC5tb2RhbHttYXJnaW46MHB4O2Jsb2NrLXNpemU6MTAwJTttYXgtYmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7bWF4LWlubGluZS1zaXplOjEwMCV9Omhvc3QoW3dpZHRoPW1dKSAuY29udGVudHtmbGV4OjEgMSBhdXRvO21heC1ibG9jay1zaXplOnVuc2V0fTpob3N0KFt3aWR0aD1tXVtkb2NrZWRdKSAuY29udGFpbmVye2FsaWduLWl0ZW1zOmZsZXgtZW5kfX06aG9zdChbd2lkdGg9bF0pIC5tb2RhbHttYXgtYmxvY2stc2l6ZToxMDAlO21heC1pbmxpbmUtc2l6ZToxMDAlO2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtbW9kYWwtd2lkdGgsIDk0cmVtKTtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbW9kYWwtaGVpZ2h0LCBhdXRvKX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5N3JlbSl7Omhvc3QoW3dpZHRoPWxdKSAubW9kYWx7bWFyZ2luOjBweDtibG9jay1zaXplOjEwMCU7bWF4LWJsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO21heC1pbmxpbmUtc2l6ZToxMDAlfTpob3N0KFt3aWR0aD1sXSkgLmNvbnRlbnR7ZmxleDoxIDEgYXV0bzttYXgtYmxvY2stc2l6ZTp1bnNldH06aG9zdChbd2lkdGg9bF1bZG9ja2VkXSkgLmNvbnRhaW5lcnthbGlnbi1pdGVtczpmbGV4LWVuZH19Omhvc3QoW2Z1bGxzY3JlZW5dKSAubW9kYWx7bWFyZ2luOjBweDtibG9jay1zaXplOjEwMCU7bWF4LWJsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO21heC1pbmxpbmUtc2l6ZToxMDAlO2JvcmRlci1yYWRpdXM6MHB4Oy0tY2FsY2l0ZS1tb2RhbC1oaWRkZW4tcG9zaXRpb246dHJhbnNsYXRlM0QoMCwgMjBweCwgMCkgc2NhbGUoMC45NSk7LS1jYWxjaXRlLW1vZGFsLXNob3duLXBvc2l0aW9uOnRyYW5zbGF0ZTNEKDAsIDAsIDApIHNjYWxlKDEpfTpob3N0KFtmdWxsc2NyZWVuXSkgLmNvbnRlbnR7bWF4LWJsb2NrLXNpemU6MTAwJTtmbGV4OjEgMSBhdXRvfTpob3N0KFtvcGVuZWRdW2Z1bGxzY3JlZW5dKSAuaGVhZGVyLDpob3N0KFtvcGVuZWRdW2Z1bGxzY3JlZW5dKSAuZm9vdGVyLDpob3N0KFtvcGVuZWRdW2Z1bGxzY3JlZW5dKSAuY29udGVudC10b3AsOmhvc3QoW29wZW5lZF1bZnVsbHNjcmVlbl0pIC5jb250ZW50LWJvdHRvbXtib3JkZXItcmFkaXVzOjB9Omhvc3QoW2RvY2tlZF0pIC5tb2RhbHtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbW9kYWwtaGVpZ2h0LCBhdXRvKX06aG9zdChbZG9ja2VkXSkgLmNvbnRlbnR7YmxvY2stc2l6ZTphdXRvO2ZsZXg6MSAxIGF1dG99Omhvc3QoW2tpbmQ9YnJhbmRdKSAubW9kYWx7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFtraW5kPWRhbmdlcl0pIC5tb2RhbHtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfTpob3N0KFtraW5kPWluZm9dKSAubW9kYWx7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktaW5mbyl9Omhvc3QoW2tpbmQ9c3VjY2Vzc10pIC5tb2RhbHtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1zdWNjZXNzKX06aG9zdChba2luZD13YXJuaW5nXSkgLm1vZGFse2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXdhcm5pbmcpfTpob3N0KFtraW5kPWJyYW5kXSkgLm1vZGFsLDpob3N0KFtraW5kPWRhbmdlcl0pIC5tb2RhbCw6aG9zdChba2luZD1pbmZvXSkgLm1vZGFsLDpob3N0KFtraW5kPXN1Y2Nlc3NdKSAubW9kYWwsOmhvc3QoW2tpbmQ9d2FybmluZ10pIC5tb2RhbHtib3JkZXItd2lkdGg6MHB4O2JvcmRlci1ibG9jay1zdGFydC13aWR0aDo0cHg7Ym9yZGVyLXN0eWxlOnNvbGlkfTpob3N0KFtraW5kPWJyYW5kXSkgLmhlYWRlciw6aG9zdChba2luZD1icmFuZF0pIC5jb250ZW50LXRvcCw6aG9zdChba2luZD1kYW5nZXJdKSAuaGVhZGVyLDpob3N0KFtraW5kPWRhbmdlcl0pIC5jb250ZW50LXRvcCw6aG9zdChba2luZD1pbmZvXSkgLmhlYWRlciw6aG9zdChba2luZD1pbmZvXSkgLmNvbnRlbnQtdG9wLDpob3N0KFtraW5kPXN1Y2Nlc3NdKSAuaGVhZGVyLDpob3N0KFtraW5kPXN1Y2Nlc3NdKSAuY29udGVudC10b3AsOmhvc3QoW2tpbmQ9d2FybmluZ10pIC5oZWFkZXIsOmhvc3QoW2tpbmQ9d2FybmluZ10pIC5jb250ZW50LXRvcHtib3JkZXItcmFkaXVzOjAuMjVyZW07Ym9yZGVyLWVuZC1lbmQtcmFkaXVzOjBweDtib3JkZXItZW5kLXN0YXJ0LXJhZGl1czowcHh9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODYwcHgpeyogc2xvdFtuYW1lPWhlYWRlcl06OnNsb3R0ZWQoY29udGVudC10b3ApLCogY29udGVudC10b3A6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSl7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTEpfS5mb290ZXIsLmNvbnRlbnQtYm90dG9te3Bvc2l0aW9uOnN0aWNreTtpbnNldC1ibG9jay1lbmQ6MHB4fX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7LmZvb3RlciwuY29udGVudC1ib3R0b217ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5iYWNrLC5zZWNvbmRhcnl7bWFyZ2luOjBweDttYXJnaW4tYmxvY2stZW5kOjAuMjVyZW19fS5jb250YWluZXIuc2xvdHRlZC1pbi1zaGVsbHtwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czphdXRvfS5jb250YWluZXIuc2xvdHRlZC1pbi1zaGVsbCBjYWxjaXRlLXNjcmlte3Bvc2l0aW9uOmFic29sdXRlfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBNb2RhbCA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlTW9kYWxCZWZvcmVDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZU1vZGFsQmVmb3JlQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlTW9kYWxDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZU1vZGFsQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlTW9kYWxCZWZvcmVPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlTW9kYWxCZWZvcmVPcGVuXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZU1vZGFsT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZU1vZGFsT3BlblwiLCA2KTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBQcm9wZXJ0aWVzLyBTdGF0ZVxuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuaWdub3JlT3BlbkNoYW5nZSA9IGZhbHNlO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgKCkgPT4gdGhpcy5oYW5kbGVNdXRhdGlvbk9ic2VydmVyKCkpO1xuICAgIHRoaXMuY3NzVmFyT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsICgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlU2l6ZUNzc1ZhcnMoKTtcbiAgICB9KTtcbiAgICB0aGlzLm9wZW5UcmFuc2l0aW9uUHJvcCA9IFwib3BhY2l0eVwiO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnNldFRyYW5zaXRpb25FbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy50cmFuc2l0aW9uRWwgPSBlbDtcbiAgICB9O1xuICAgIHRoaXMub3BlbkVuZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNhbGNpdGVNb2RhbE9wZW5cIiwgdGhpcy5vcGVuRW5kKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2xvc2VDbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVPdXRzaWRlQ2xvc2UgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vdXRzaWRlQ2xvc2VEaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB9O1xuICAgIHRoaXMuY2xvc2VNb2RhbCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmJlZm9yZUNsb3NlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5iZWZvcmVDbG9zZSh0aGlzLmVsKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICAgICAgLy8gY2xvc2UgcHJldmVudGVkXG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaWdub3JlT3BlbkNoYW5nZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pZ25vcmVPcGVuQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZW1vdmVPdmVyZmxvd0hpZGRlbkNsYXNzKCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZU11dGF0aW9uT2JzZXJ2ZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUZvb3RlclZpc2liaWxpdHkoKTtcbiAgICAgIHRoaXMudXBkYXRlRm9jdXNUcmFwRWxlbWVudHMoKTtcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlRm9vdGVyVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICAgIHRoaXMuaGFzRm9vdGVyID0gISFnZXRTbG90dGVkKHRoaXMuZWwsIFtTTE9UUy5iYWNrLCBTTE9UUy5wcmltYXJ5LCBTTE9UUy5zZWNvbmRhcnldKTtcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlU2l6ZUNzc1ZhcnMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNzc1dpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1jYWxjaXRlLW1vZGFsLXdpZHRoXCIpO1xuICAgICAgdGhpcy5jc3NIZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmdldFByb3BlcnR5VmFsdWUoXCItLWNhbGNpdGUtbW9kYWwtaGVpZ2h0XCIpO1xuICAgIH07XG4gICAgdGhpcy5jb250ZW50VG9wU2xvdENoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzQ29udGVudFRvcCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5jb250ZW50Qm90dG9tU2xvdENoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzQ29udGVudEJvdHRvbSA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLmJlZm9yZUNsb3NlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY2xvc2VCdXR0b25EaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9jdXNUcmFwRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLm91dHNpZGVDbG9zZURpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5kb2NrZWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lc2NhcGVEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLndpZHRoID0gXCJtXCI7XG4gICAgdGhpcy5mdWxsc2NyZWVuID0gdW5kZWZpbmVkO1xuICAgIHRoaXMua2luZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNsb3R0ZWRJblNoZWxsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY3NzV2lkdGggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jc3NIZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oYXNGb290ZXIgPSB0cnVlO1xuICAgIHRoaXMuaGFzQ29udGVudFRvcCA9IGZhbHNlO1xuICAgIHRoaXMuaGFzQ29udGVudEJvdHRvbSA9IGZhbHNlO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIGhhbmRsZUZvY3VzVHJhcERpc2FibGVkKGZvY3VzVHJhcERpc2FibGVkKSB7XG4gICAgaWYgKCF0aGlzLm9wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9jdXNUcmFwRGlzYWJsZWQgPyBkZWFjdGl2YXRlRm9jdXNUcmFwKHRoaXMpIDogYWN0aXZhdGVGb2N1c1RyYXAodGhpcyk7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICAvLyB3aGVuIG1vZGFsIGluaXRpYWxseSByZW5kZXJzLCBpZiBhY3RpdmUgd2FzIHNldCB3ZSBuZWVkIHRvIG9wZW4gYXMgd2F0Y2hlciBkb2Vzbid0IGZpcmVcbiAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5vcGVuTW9kYWwoKSk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8ub2JzZXJ2ZSh0aGlzLmVsLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICB0aGlzLmNzc1Zhck9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwsIHsgYXR0cmlidXRlRmlsdGVyOiBbXCJzdHlsZVwiXSB9KTtcbiAgICB0aGlzLnVwZGF0ZVNpemVDc3NWYXJzKCk7XG4gICAgdGhpcy51cGRhdGVGb290ZXJWaXNpYmlsaXR5KCk7XG4gICAgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBjb25uZWN0Rm9jdXNUcmFwKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucmVtb3ZlT3ZlcmZsb3dIaWRkZW5DbGFzcygpO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuY3NzVmFyT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICAgIGRlYWN0aXZhdGVGb2N1c1RyYXAodGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5zbG90dGVkSW5TaGVsbCA9IGZhbHNlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtZGVzY3JpYmVkYnlcIjogdGhpcy5jb250ZW50SWQsIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IHRoaXMudGl0bGVJZCwgXCJhcmlhLW1vZGFsXCI6IFwidHJ1ZVwiLCByb2xlOiBcImRpYWxvZ1wiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLmNvbnRhaW5lcl06IHRydWUsXG4gICAgICAgIFtDU1MuY29udGFpbmVyT3Blbl06IHRoaXMub3BlbmVkLFxuICAgICAgICBbQ1NTLnNsb3R0ZWRJblNoZWxsXTogdGhpcy5zbG90dGVkSW5TaGVsbCxcbiAgICAgIH0gfSwgaChcImNhbGNpdGUtc2NyaW1cIiwgeyBjbGFzczogQ1NTLnNjcmltLCBvbkNsaWNrOiB0aGlzLmhhbmRsZU91dHNpZGVDbG9zZSB9KSwgdGhpcy5yZW5kZXJTdHlsZSgpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5tb2RhbF06IHRydWUsXG4gICAgICB9LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zZXRUcmFuc2l0aW9uRWwgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuaGVhZGVyIH0sIHRoaXMucmVuZGVyQ2xvc2VCdXR0b24oKSwgaChcImhlYWRlclwiLCB7IGNsYXNzOiBDU1MudGl0bGUgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBDU1MuaGVhZGVyIH0pKSksIHRoaXMucmVuZGVyQ29udGVudFRvcCgpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5jb250ZW50XTogdHJ1ZSxcbiAgICAgICAgW0NTUy5jb250ZW50Tm9Gb290ZXJdOiAhdGhpcy5oYXNGb290ZXIsXG4gICAgICB9LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5tb2RhbENvbnRlbnQgPSBlbCkgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5jb250ZW50IH0pKSwgdGhpcy5yZW5kZXJDb250ZW50Qm90dG9tKCksIHRoaXMucmVuZGVyRm9vdGVyKCkpKSkpO1xuICB9XG4gIHJlbmRlckZvb3RlcigpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNGb290ZXIgPyAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuZm9vdGVyLCBrZXk6IFwiZm9vdGVyXCIgfSwgaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLmJhY2sgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5iYWNrIH0pKSwgaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLnNlY29uZGFyeSB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLnNlY29uZGFyeSB9KSksIGgoXCJzcGFuXCIsIHsgY2xhc3M6IENTUy5wcmltYXJ5IH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMucHJpbWFyeSB9KSkpKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyQ29udGVudFRvcCgpIHtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbnRlbnRUb3AsIGhpZGRlbjogIXRoaXMuaGFzQ29udGVudFRvcCB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmNvbnRlbnRUb3AsIG9uU2xvdGNoYW5nZTogdGhpcy5jb250ZW50VG9wU2xvdENoYW5nZUhhbmRsZXIgfSkpKTtcbiAgfVxuICByZW5kZXJDb250ZW50Qm90dG9tKCkge1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGVudEJvdHRvbSwgaGlkZGVuOiAhdGhpcy5oYXNDb250ZW50Qm90dG9tIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuY29udGVudEJvdHRvbSwgb25TbG90Y2hhbmdlOiB0aGlzLmNvbnRlbnRCb3R0b21TbG90Q2hhbmdlSGFuZGxlciB9KSkpO1xuICB9XG4gIHJlbmRlckNsb3NlQnV0dG9uKCkge1xuICAgIHJldHVybiAhdGhpcy5jbG9zZUJ1dHRvbkRpc2FibGVkID8gKGgoXCJidXR0b25cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5jbG9zZSwgY2xhc3M6IENTUy5jbG9zZSwga2V5OiBcImJ1dHRvblwiLCBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsb3NlQ2xpY2ssIHRpdGxlOiB0aGlzLm1lc3NhZ2VzLmNsb3NlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5jbG9zZUJ1dHRvbkVsID0gZWwpIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBJQ09OUy5jbG9zZSwgc2NhbGU6IGdldEljb25TY2FsZSh0aGlzLnNjYWxlKSB9KSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXJTdHlsZSgpIHtcbiAgICBpZiAoIXRoaXMuZnVsbHNjcmVlbiAmJiAodGhpcy5jc3NXaWR0aCB8fCB0aGlzLmNzc0hlaWdodCkpIHtcbiAgICAgIHJldHVybiAoaChcInN0eWxlXCIsIG51bGwsIGAuJHtDU1MuY29udGFpbmVyfSB7XG4gICAgICAgICAgICAgICR7dGhpcy5kb2NrZWQgJiYgdGhpcy5jc3NXaWR0aCA/IGBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7YCA6IFwiXCJ9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuJHtDU1MubW9kYWx9IHtcbiAgICAgICAgICAgICAgYmxvY2stc2l6ZTogJHt0aGlzLmNzc0hlaWdodCA/IHRoaXMuY3NzSGVpZ2h0IDogXCJhdXRvXCJ9ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICR7dGhpcy5jc3NXaWR0aCA/IGBpbmxpbmUtc2l6ZTogJHt0aGlzLmNzc1dpZHRofSAhaW1wb3J0YW50O2AgOiBcIlwifVxuICAgICAgICAgICAgICAke3RoaXMuY3NzV2lkdGggPyBgbWF4LWlubGluZS1zaXplOiAke3RoaXMuY3NzV2lkdGh9ICFpbXBvcnRhbnQ7YCA6IFwiXCJ9XG4gICAgICAgICAgICAgICR7dGhpcy5kb2NrZWQgPyBgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FsY2l0ZS1ib3JkZXItcmFkaXVzKSAhaW1wb3J0YW50O2AgOiBcIlwifVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHt0aGlzLmNzc1dpZHRofSkge1xuICAgICAgICAgICAgICAuJHtDU1MuY29udGFpbmVyfSB7XG4gICAgICAgICAgICAgICAgJHt0aGlzLmRvY2tlZCA/IGBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtgIDogXCJcIn1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuJHtDU1MubW9kYWx9IHtcbiAgICAgICAgICAgICAgICBtYXgtYmxvY2stc2l6ZTogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGlubGluZS1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWF4LWlubGluZS1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWluLWlubGluZS1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgJHshdGhpcy5kb2NrZWQgPyBgYmxvY2stc2l6ZTogMTAwJSAhaW1wb3J0YW50O2AgOiBcIlwifVxuICAgICAgICAgICAgICAgICR7IXRoaXMuZG9ja2VkID8gYGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAke3RoaXMuZG9ja2VkXG4gICAgICAgID8gYGJvcmRlci1yYWRpdXM6IHZhcigtLWNhbGNpdGUtYm9yZGVyLXJhZGl1cykgdmFyKC0tY2FsY2l0ZS1ib3JkZXItcmFkaXVzKSAwIDAgIWltcG9ydGFudDtgXG4gICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGApKTtcbiAgICB9XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoYW5kbGVFc2NhcGUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5vcGVuICYmICF0aGlzLmVzY2FwZURpc2FibGVkICYmIGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIiAmJiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQncyBcImNsb3NlXCIgYnV0dG9uICh0aGUgZmlyc3QgZm9jdXNhYmxlIGl0ZW0pLlxuICAgKlxuICAgKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIGZvY3VzRmlyc3RUYWJiYWJsZSh0aGlzLmVsKTtcbiAgfVxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgZWxlbWVudChzKSB0aGF0IGFyZSB1c2VkIHdpdGhpbiB0aGUgZm9jdXMtdHJhcCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgYXN5bmMgdXBkYXRlRm9jdXNUcmFwRWxlbWVudHMoKSB7XG4gICAgdXBkYXRlRm9jdXNUcmFwRWxlbWVudHModGhpcyk7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgdGhlIHNjcm9sbCB0b3Agb2YgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB0b3BcbiAgICogQHBhcmFtIGxlZnRcbiAgICovXG4gIGFzeW5jIHNjcm9sbENvbnRlbnQodG9wID0gMCwgbGVmdCA9IDApIHtcbiAgICBpZiAodGhpcy5tb2RhbENvbnRlbnQpIHtcbiAgICAgIGlmICh0aGlzLm1vZGFsQ29udGVudC5zY3JvbGxUbykge1xuICAgICAgICB0aGlzLm1vZGFsQ29udGVudC5zY3JvbGxUbyh7IHRvcCwgbGVmdCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5tb2RhbENvbnRlbnQuc2Nyb2xsVG9wID0gdG9wO1xuICAgICAgICB0aGlzLm1vZGFsQ29udGVudC5zY3JvbGxMZWZ0ID0gbGVmdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25CZWZvcmVPcGVuKCkge1xuICAgIHRoaXMudHJhbnNpdGlvbkVsLmNsYXNzTGlzdC5hZGQoQ1NTLm9wZW5pbmdBY3RpdmUpO1xuICAgIHRoaXMuY2FsY2l0ZU1vZGFsQmVmb3JlT3Blbi5lbWl0KCk7XG4gIH1cbiAgb25PcGVuKCkge1xuICAgIHRoaXMudHJhbnNpdGlvbkVsLmNsYXNzTGlzdC5yZW1vdmUoQ1NTLm9wZW5pbmdJZGxlLCBDU1Mub3BlbmluZ0FjdGl2ZSk7XG4gICAgdGhpcy5jYWxjaXRlTW9kYWxPcGVuLmVtaXQoKTtcbiAgICBhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzKTtcbiAgfVxuICBvbkJlZm9yZUNsb3NlKCkge1xuICAgIHRoaXMudHJhbnNpdGlvbkVsLmNsYXNzTGlzdC5hZGQoQ1NTLmNsb3NpbmdBY3RpdmUpO1xuICAgIHRoaXMuY2FsY2l0ZU1vZGFsQmVmb3JlQ2xvc2UuZW1pdCgpO1xuICB9XG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy50cmFuc2l0aW9uRWwuY2xhc3NMaXN0LnJlbW92ZShDU1MuY2xvc2luZ0lkbGUsIENTUy5jbG9zaW5nQWN0aXZlKTtcbiAgICB0aGlzLmNhbGNpdGVNb2RhbENsb3NlLmVtaXQoKTtcbiAgICBkZWFjdGl2YXRlRm9jdXNUcmFwKHRoaXMpO1xuICB9XG4gIHRvZ2dsZU1vZGFsKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaWdub3JlT3BlbkNoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMub3Blbk1vZGFsKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9XG4gIGhhbmRsZU9wZW5lZENoYW5nZSh2YWx1ZSkge1xuICAgIG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy50cmFuc2l0aW9uRWw/LmNsYXNzTGlzdC5hZGQoQ1NTLm9wZW5pbmdJZGxlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnRyYW5zaXRpb25FbD8uY2xhc3NMaXN0LmFkZChDU1MuY2xvc2luZ0lkbGUpO1xuICAgIH1cbiAgfVxuICBvcGVuTW9kYWwoKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2FsY2l0ZU1vZGFsT3BlblwiLCB0aGlzLm9wZW5FbmQpO1xuICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICBjb25zdCB0aXRsZUVsID0gZ2V0U2xvdHRlZCh0aGlzLmVsLCBTTE9UUy5oZWFkZXIpO1xuICAgIGNvbnN0IGNvbnRlbnRFbCA9IGdldFNsb3R0ZWQodGhpcy5lbCwgU0xPVFMuY29udGVudCk7XG4gICAgdGhpcy50aXRsZUlkID0gZW5zdXJlSWQodGl0bGVFbCk7XG4gICAgdGhpcy5jb250ZW50SWQgPSBlbnN1cmVJZChjb250ZW50RWwpO1xuICAgIGlmICghdGhpcy5zbG90dGVkSW5TaGVsbCkge1xuICAgICAgdGhpcy5pbml0aWFsT3ZlcmZsb3dDU1MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3c7XG4gICAgICAvLyB1c2UgYW4gaW5saW5lIHN0eWxlIGluc3RlYWQgb2YgYSB1dGlsaXR5IGNsYXNzIHRvIGF2b2lkIGdsb2JhbCBjbGFzcyBkZWNsYXJhdGlvbnMuXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJvdmVyZmxvd1wiLCBcImhpZGRlblwiKTtcbiAgICB9XG4gIH1cbiAgcmVtb3ZlT3ZlcmZsb3dIaWRkZW5DbGFzcygpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJvdmVyZmxvd1wiLCB0aGlzLmluaXRpYWxPdmVyZmxvd0NTUyk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImZvY3VzVHJhcERpc2FibGVkXCI6IFtcImhhbmRsZUZvY3VzVHJhcERpc2FibGVkXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXSxcbiAgICBcIm9wZW5cIjogW1widG9nZ2xlTW9kYWxcIl0sXG4gICAgXCJvcGVuZWRcIjogW1wiaGFuZGxlT3BlbmVkQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIG1vZGFsQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLW1vZGFsXCIsIHtcbiAgICBcIm9wZW5cIjogWzE1NDBdLFxuICAgIFwib3BlbmVkXCI6IFsxNTQwXSxcbiAgICBcImJlZm9yZUNsb3NlXCI6IFsxNl0sXG4gICAgXCJjbG9zZUJ1dHRvbkRpc2FibGVkXCI6IFs1MTYsIFwiY2xvc2UtYnV0dG9uLWRpc2FibGVkXCJdLFxuICAgIFwiZm9jdXNUcmFwRGlzYWJsZWRcIjogWzUxNiwgXCJmb2N1cy10cmFwLWRpc2FibGVkXCJdLFxuICAgIFwib3V0c2lkZUNsb3NlRGlzYWJsZWRcIjogWzUxNiwgXCJvdXRzaWRlLWNsb3NlLWRpc2FibGVkXCJdLFxuICAgIFwiZG9ja2VkXCI6IFs1MTZdLFxuICAgIFwiZXNjYXBlRGlzYWJsZWRcIjogWzUxNiwgXCJlc2NhcGUtZGlzYWJsZWRcIl0sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcIndpZHRoXCI6IFs1MTNdLFxuICAgIFwiZnVsbHNjcmVlblwiOiBbNTE2XSxcbiAgICBcImtpbmRcIjogWzUxM10sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFsxMDQwXSxcbiAgICBcInNsb3R0ZWRJblNoZWxsXCI6IFsxMDI4LCBcInNsb3R0ZWQtaW4tc2hlbGxcIl0sXG4gICAgXCJjc3NXaWR0aFwiOiBbMzJdLFxuICAgIFwiY3NzSGVpZ2h0XCI6IFszMl0sXG4gICAgXCJoYXNGb290ZXJcIjogWzMyXSxcbiAgICBcImhhc0NvbnRlbnRUb3BcIjogWzMyXSxcbiAgICBcImhhc0NvbnRlbnRCb3R0b21cIjogWzMyXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdLFxuICAgIFwidXBkYXRlRm9jdXNUcmFwRWxlbWVudHNcIjogWzY0XSxcbiAgICBcInNjcm9sbENvbnRlbnRcIjogWzY0XVxuICB9LCBbWzgsIFwia2V5ZG93blwiLCBcImhhbmRsZUVzY2FwZVwiXV1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1tb2RhbFwiLCBcImNhbGNpdGUtaWNvblwiLCBcImNhbGNpdGUtbG9hZGVyXCIsIFwiY2FsY2l0ZS1zY3JpbVwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1tb2RhbFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIE1vZGFsKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWljb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNCgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtbG9hZGVyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDMoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLXNjcmltXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDIoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG5cbmNvbnN0IENhbGNpdGVNb2RhbCA9IE1vZGFsO1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IGRlZmluZUN1c3RvbUVsZW1lbnQkMTtcblxuZXhwb3J0IHsgQ2FsY2l0ZU1vZGFsLCBkZWZpbmVDdXN0b21FbGVtZW50IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5mdW5jdGlvbiBnZXRJY29uU2NhbGUoY29tcG9uZW50U2NhbGUpIHtcbiAgcmV0dXJuIGNvbXBvbmVudFNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCI7XG59XG5cbmV4cG9ydCB7IGdldEljb25TY2FsZSBhcyBnIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBmb3JjZVVwZGF0ZSB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5cbmNvbnN0IG9ic2VydmVkID0gbmV3IFNldCgpO1xubGV0IG11dGF0aW9uT2JzZXJ2ZXI7XG5jb25zdCBvYnNlcnZlck9wdGlvbnMgPSB7IGNoaWxkTGlzdDogdHJ1ZSB9O1xuLyoqXG4gKiBIZWxwZXIgdG8gc2V0IHVwIGEgY29uZGl0aW9uYWwgc2xvdCBjb21wb25lbnQgb24gY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQGRlcHJlY2F0ZWQgVXNlIGBvblNsb3RjaGFuZ2VgIGV2ZW50IHdpdGggYHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnRgIERPTSB1dGlsaXR5IGluc3RlYWQuXG4gKlxuICogYGBgXG4gKiA8c2xvdCBvblNsb3RjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5teVNsb3RIYXNFbGVtZW50ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCl9IC8+fVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIGlmICghbXV0YXRpb25PYnNlcnZlcikge1xuICAgIG11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsIHByb2Nlc3NNdXRhdGlvbnMpO1xuICB9XG4gIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShjb21wb25lbnQuZWwsIG9ic2VydmVyT3B0aW9ucyk7XG59XG4vKipcbiAqIEhlbHBlciB0byB0ZWFyIGRvd24gYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBkaXNjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgb2JzZXJ2ZWQuZGVsZXRlKGNvbXBvbmVudC5lbCk7XG4gIC8vIHdlIGV4cGxpY2l0bHkgcHJvY2VzcyBxdWV1ZWQgbXV0YXRpb25zIGFuZCBkaXNjb25uZWN0IGFuZCByZWNvbm5lY3RcbiAgLy8gdGhlIG9ic2VydmVyIHVudGlsIE11dGF0aW9uT2JzZXJ2ZXIgZ2V0cyBhbiBgdW5vYnNlcnZlYCBtZXRob2RcbiAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvZG9tL2lzc3Vlcy8xMjZcbiAgcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbk9ic2VydmVyLnRha2VSZWNvcmRzKCkpO1xuICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgZm9yIChjb25zdCBbZWxlbWVudF0gb2Ygb2JzZXJ2ZWQuZW50cmllcygpKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9ic2VydmVyT3B0aW9ucyk7XG4gIH1cbn1cbmZ1bmN0aW9uIHByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gIG11dGF0aW9ucy5mb3JFYWNoKCh7IHRhcmdldCB9KSA9PiB7XG4gICAgZm9yY2VVcGRhdGUodGFyZ2V0KTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgYXMgYywgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBnZXRBc3NldFBhdGgsIHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGgsIEhvc3QsIEJ1aWxkIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRFbGVtZW50RGlyLCB0IGFzIHRvQXJpYUJvb2xlYW4gfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGljb246IFwiaWNvblwiLFxuICBmbGlwUnRsOiBcImZsaXAtcnRsXCIsXG59O1xuXG4vKipcbiAqIEljb24gZGF0YSBjYWNoZS5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGljb25DYWNoZSA9IHt9O1xuLyoqXG4gKiBJY29uIHJlcXVlc3QgY2FjaGUuXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCByZXF1ZXN0Q2FjaGUgPSB7fTtcbmNvbnN0IHNjYWxlVG9QeCA9IHtcbiAgczogMTYsXG4gIG06IDI0LFxuICBsOiAzMixcbn07XG5hc3luYyBmdW5jdGlvbiBmZXRjaEljb24oeyBpY29uLCBzY2FsZSB9KSB7XG4gIGNvbnN0IHNpemUgPSBzY2FsZVRvUHhbc2NhbGVdO1xuICBjb25zdCBuYW1lID0gbm9ybWFsaXplSWNvbk5hbWUoaWNvbik7XG4gIGNvbnN0IGZpbGxlZCA9IG5hbWUuY2hhckF0KG5hbWUubGVuZ3RoIC0gMSkgPT09IFwiRlwiO1xuICBjb25zdCBpY29uTmFtZSA9IGZpbGxlZCA/IG5hbWUuc3Vic3RyaW5nKDAsIG5hbWUubGVuZ3RoIC0gMSkgOiBuYW1lO1xuICBjb25zdCBpZCA9IGAke2ljb25OYW1lfSR7c2l6ZX0ke2ZpbGxlZCA/IFwiRlwiIDogXCJcIn1gO1xuICBpZiAoaWNvbkNhY2hlW2lkXSkge1xuICAgIHJldHVybiBpY29uQ2FjaGVbaWRdO1xuICB9XG4gIGlmICghcmVxdWVzdENhY2hlW2lkXSkge1xuICAgIHJlcXVlc3RDYWNoZVtpZF0gPSBmZXRjaChnZXRBc3NldFBhdGgoYC4vYXNzZXRzL2ljb24vJHtpZH0uanNvbmApKVxuICAgICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFwiJHtpZH1cIiBpcyBub3QgYSB2YWxpZCBjYWxjaXRlLXVpLWljb24gbmFtZWApO1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgcGF0aCA9IGF3YWl0IHJlcXVlc3RDYWNoZVtpZF07XG4gIGljb25DYWNoZVtpZF0gPSBwYXRoO1xuICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogTm9ybWFsaXplIHRoZSBpY29uIG5hbWUgdG8gbWF0Y2ggdGhlIHBhdGggZGF0YSBtb2R1bGUgZXhwb3J0cy5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICpcbiAqIEBwYXJhbSBuYW1lIOKAkyBhbiBpY29uIG5hbWUgdGhhdCBjYW4gYmUgZWl0aGVyIGtlYmFiIG9yIGNhbWVsLWNhc2VkXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVJY29uTmFtZShuYW1lKSB7XG4gIGNvbnN0IG51bWJlckxlYWRpbmdOYW1lID0gIWlzTmFOKE51bWJlcihuYW1lLmNoYXJBdCgwKSkpO1xuICBjb25zdCBwYXJ0cyA9IG5hbWUuc3BsaXQoXCItXCIpO1xuICBjb25zdCBrZWJhYkNhc2VkID0gcGFydHMubGVuZ3RoID4gMDtcbiAgaWYgKGtlYmFiQ2FzZWQpIHtcbiAgICBjb25zdCBmaXJzdE5vbkRpZ2l0SW5QYXJ0UGF0dGVybiA9IC9bYS16XS9pO1xuICAgIG5hbWUgPSBwYXJ0c1xuICAgICAgLm1hcCgocGFydCwgcGFydEluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gcGFydC5yZXBsYWNlKGZpcnN0Tm9uRGlnaXRJblBhcnRQYXR0ZXJuLCBmdW5jdGlvbiByZXBsYWNlcihtYXRjaCwgb2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IGlzRmlyc3RDaGFySW5OYW1lID0gcGFydEluZGV4ID09PSAwICYmIG9mZnNldCA9PT0gMDtcbiAgICAgICAgaWYgKGlzRmlyc3RDaGFySW5OYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXRjaC50b1VwcGVyQ2FzZSgpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAgIC5qb2luKFwiXCIpO1xuICB9XG4gIHJldHVybiBudW1iZXJMZWFkaW5nTmFtZSA/IGBpJHtuYW1lfWAgOiBuYW1lO1xufVxuXG5jb25zdCBpY29uQ3NzID0gXCI6aG9zdHtkaXNwbGF5OmlubGluZS1mbGV4O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktaWNvbi1jb2xvcil9Omhvc3QoW3NjYWxlPXNdKXtpbmxpbmUtc2l6ZToxNnB4O2Jsb2NrLXNpemU6MTZweDttaW4taW5saW5lLXNpemU6MTZweDttaW4tYmxvY2stc2l6ZToxNnB4fTpob3N0KFtzY2FsZT1tXSl7aW5saW5lLXNpemU6MjRweDtibG9jay1zaXplOjI0cHg7bWluLWlubGluZS1zaXplOjI0cHg7bWluLWJsb2NrLXNpemU6MjRweH06aG9zdChbc2NhbGU9bF0pe2lubGluZS1zaXplOjMycHg7YmxvY2stc2l6ZTozMnB4O21pbi1pbmxpbmUtc2l6ZTozMnB4O21pbi1ibG9jay1zaXplOjMycHh9LmZsaXAtcnRse3RyYW5zZm9ybTpzY2FsZVgoLTEpfS5zdmd7ZGlzcGxheTpibG9ja306aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgSWNvbiA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5pY29uID0gbnVsbDtcbiAgICB0aGlzLmZsaXBSdGwgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy50ZXh0TGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYXRoRGF0YSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLndhaXRVbnRpbFZpc2libGUoKCkgPT4ge1xuICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMubG9hZEljb25QYXRoRGF0YSgpO1xuICAgIH0pO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gbnVsbDtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICB0aGlzLmxvYWRJY29uUGF0aERhdGEoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbCwgZmxpcFJ0bCwgcGF0aERhdGEsIHNjYWxlLCB0ZXh0TGFiZWwgfSA9IHRoaXM7XG4gICAgY29uc3QgZGlyID0gZ2V0RWxlbWVudERpcihlbCk7XG4gICAgY29uc3Qgc2l6ZSA9IHNjYWxlVG9QeFtzY2FsZV07XG4gICAgY29uc3Qgc2VtYW50aWMgPSAhIXRleHRMYWJlbDtcbiAgICBjb25zdCBwYXRocyA9IFtdLmNvbmNhdChwYXRoRGF0YSB8fCBcIlwiKTtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtaGlkZGVuXCI6IHRvQXJpYUJvb2xlYW4oIXNlbWFudGljKSwgXCJhcmlhLWxhYmVsXCI6IHNlbWFudGljID8gdGV4dExhYmVsIDogbnVsbCwgcm9sZTogc2VtYW50aWMgPyBcImltZ1wiIDogbnVsbCB9LCBoKFwic3ZnXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5mbGlwUnRsXTogZGlyID09PSBcInJ0bFwiICYmIGZsaXBSdGwsXG4gICAgICAgIHN2ZzogdHJ1ZSxcbiAgICAgIH0sIGZpbGw6IFwiY3VycmVudENvbG9yXCIsIGhlaWdodDogXCIxMDAlXCIsIHZpZXdCb3g6IGAwIDAgJHtzaXplfSAke3NpemV9YCwgd2lkdGg6IFwiMTAwJVwiLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIH0sIHBhdGhzLm1hcCgocGF0aCkgPT4gdHlwZW9mIHBhdGggPT09IFwic3RyaW5nXCIgPyAoaChcInBhdGhcIiwgeyBkOiBwYXRoIH0pKSA6IChoKFwicGF0aFwiLCB7IGQ6IHBhdGguZCwgb3BhY2l0eTogXCJvcGFjaXR5XCIgaW4gcGF0aCA/IHBhdGgub3BhY2l0eSA6IDEgfSkpKSkpKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhc3luYyBsb2FkSWNvblBhdGhEYXRhKCkge1xuICAgIGNvbnN0IHsgaWNvbiwgc2NhbGUsIHZpc2libGUgfSA9IHRoaXM7XG4gICAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIgfHwgIWljb24gfHwgIXZpc2libGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGF0aERhdGEgPSBhd2FpdCBmZXRjaEljb24oeyBpY29uLCBzY2FsZSB9KTtcbiAgICAvLyBXaGlsZSB0aGUgZmV0Y2hJY29uIG1ldGhvZCBpcyBhd2FpdGluZyByZXNwb25zZSwgdGhlIGljb24gcmVxdWVzdGVkIGNhbiBjaGFuZ2UuIFRoaXMgY2hlY2sgaXMgdG8gdmVyaWZ5IHRoZSByZXNwb25zZSByZWNlaXZlZCBiZWxvbmdzIHRvIHRoZSBjdXJyZW50IGljb24uXG4gICAgaWYgKGljb24gIT09IHRoaXMuaWNvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBhdGhEYXRhID0gcGF0aERhdGE7XG4gIH1cbiAgd2FpdFVudGlsVmlzaWJsZShjYWxsYmFjaykge1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcImludGVyc2VjdGlvblwiLCAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCB7IHJvb3RNYXJnaW46IFwiNTBweFwiIH0pO1xuICAgIGlmICghdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWwpO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJpY29uXCI6IFtcImxvYWRJY29uUGF0aERhdGFcIl0sXG4gICAgXCJzY2FsZVwiOiBbXCJsb2FkSWNvblBhdGhEYXRhXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIGljb25Dc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtaWNvblwiLCB7XG4gICAgXCJpY29uXCI6IFs1MTNdLFxuICAgIFwiZmxpcFJ0bFwiOiBbNTE2LCBcImZsaXAtcnRsXCJdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJ0ZXh0TGFiZWxcIjogWzEsIFwidGV4dC1sYWJlbFwiXSxcbiAgICBcInBhdGhEYXRhXCI6IFszMl0sXG4gICAgXCJ2aXNpYmxlXCI6IFszMl1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1pY29uXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWljb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBJY29uKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBJY29uIGFzIEksIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgQnVpbGQsIGZvcmNlVXBkYXRlIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG5jb25zdCByZXNvbHZlTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIHNldHMgdXAgdGhlIGNvbXBvbmVudCBmb3IgdGhlIGFiaWxpdHkgdG8ga25vdyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnRXaWxsTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0VXBMb2FkYWJsZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgcHJvbWlzZU1hcC5zZXQoY29tcG9uZW50LCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZU1hcC5zZXQoY29tcG9uZW50LCByZXNvbHZlKSkpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGxldHMgdGhlIGxvYWRhYmxlIGNvbXBvbmVudCBrbm93IHRoYXQgaXQgaXMgbm93IGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnREaWRMb2FkKCk6IHZvaWQge1xuICogICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldENvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmVzb2x2ZU1hcC5nZXQoY29tcG9uZW50KSgpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyZSBhIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBTdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkKS5cbiAqXG4gKiBSZXF1aXJlcyByZXF1aXJlcyBgTG9hZGFibGVDb21wb25lbnRgIHRvIGJlIGltcGxlbWVudGVkLlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QuXG4gKlxuICogYGBgXG4gKiBhc3luYyBteU1ldGhvZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAqICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICovXG5mdW5jdGlvbiBjb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJldHVybiBwcm9taXNlTWFwLmdldChjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyaW5nIHRoZSBjb21wb25lbnQgaXMgbG9hZGVkIGFuZCByZW5kZXJlZCBieSB0aGUgYnJvd3NlciAoVGhlIFwiY29tcG9uZW50RGlkTG9hZFwiIFN0ZW5jaWwgbGlmZWN5Y2xlIG1ldGhvZCBoYXMgYmVlbiBjYWxsZWQgYW5kIGFueSBpbnRlcm5hbCBlbGVtZW50cyBhcmUgZm9jdXNhYmxlKS5cbiAqXG4gKiBSZXF1aXJlcyByZXF1aXJlcyBgTG9hZGFibGVDb21wb25lbnRgIHRvIGJlIGltcGxlbWVudGVkLlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QgYW5kIHRoZW4gYW4gaW50ZXJuYWwgZWxlbWVudCBiZSBmb2N1c2VkLlxuICpcbiAqIGBgYFxuICogYXN5bmMgc2V0Rm9jdXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAqICAgdGhpcy5pbnRlcm5hbEVsZW1lbnQ/LmZvY3VzKCk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNvbXBvbmVudEZvY3VzYWJsZShjb21wb25lbnQpIHtcbiAgYXdhaXQgY29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCk7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvcmNlVXBkYXRlKGNvbXBvbmVudCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHJlc29sdmUoKSkpO1xufVxuXG5leHBvcnQgeyBzZXRVcExvYWRhYmxlQ29tcG9uZW50IGFzIGEsIGNvbXBvbmVudExvYWRlZCBhcyBiLCBjb21wb25lbnRGb2N1c2FibGUgYXMgYywgc2V0Q29tcG9uZW50TG9hZGVkIGFzIHMgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGgsIEhvc3QgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQuanMnO1xuXG5jb25zdCBsb2FkZXJDc3MgPSBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MH19Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLWlubGluZTphdXRvO2Rpc3BsYXk6bm9uZTthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtvcGFjaXR5OjE7bWluLWJsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSk7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLWZvbnQtc2l6ZSk7c3Ryb2tlOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO3N0cm9rZS13aWR0aDozO2ZpbGw6bm9uZTt0cmFuc2Zvcm06c2NhbGUoMSwgMSk7YW5pbWF0aW9uOmxvYWRlci1jb2xvci1zaGlmdCBjYWxjKHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSAqIDIgLyB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpIGFsdGVybmF0ZS1yZXZlcnNlIGluZmluaXRlIGxpbmVhcjtwYWRkaW5nLWJsb2NrOnZhcigtLWNhbGNpdGUtbG9hZGVyLXBhZGRpbmcsIDRyZW0pfTpob3N0KFtzY2FsZT1zXSl7LS1jYWxjaXRlLWxvYWRlci1mb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpOy0tY2FsY2l0ZS1sb2FkZXItc2l6ZToycmVtOy0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmU6MC43NXJlbX06aG9zdChbc2NhbGU9bV0pey0tY2FsY2l0ZS1sb2FkZXItZm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApOy0tY2FsY2l0ZS1sb2FkZXItc2l6ZTo0cmVtOy0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmU6MXJlbX06aG9zdChbc2NhbGU9bF0pey0tY2FsY2l0ZS1sb2FkZXItZm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTIpOy0tY2FsY2l0ZS1sb2FkZXItc2l6ZTo2cmVtOy0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmU6MS41cmVtfTpob3N0KFtuby1wYWRkaW5nXSl7cGFkZGluZy1ibG9jazowcHh9Omhvc3R7ZGlzcGxheTpmbGV4fS5sb2FkZXJfX3RleHR7ZGlzcGxheTpibG9jazt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW07Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO21hcmdpbi1ibG9jay1zdGFydDpjYWxjKHZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUpICsgMS41cmVtKX0ubG9hZGVyX19wZXJjZW50YWdle3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6YmxvY2s7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1mb250LXNpemUpO2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUpO2luc2V0LWlubGluZS1zdGFydDo1MCU7bWFyZ2luLWlubGluZS1zdGFydDpjYWxjKHZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUpIC8gMiAqIC0xKTtsaW5lLWhlaWdodDowLjI1O3RyYW5zZm9ybTpzY2FsZSgxLCAxKX0ubG9hZGVyX19zdmdze3Bvc2l0aW9uOmFic29sdXRlO292ZXJmbG93OnZpc2libGU7b3BhY2l0eToxO2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUpO2Jsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSk7aW5zZXQtaW5saW5lLXN0YXJ0OjUwJTttYXJnaW4taW5saW5lLXN0YXJ0OmNhbGModmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSkgLyAyICogLTEpO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7YW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpICogNi42NiAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7YW5pbWF0aW9uLW5hbWU6bG9hZGVyLWNsb2Nrd2lzZX0ubG9hZGVyX19zdmd7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQtYmxvY2stc3RhcnQ6MHB4O3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyO292ZXJmbG93OnZpc2libGU7aW5zZXQtaW5saW5lLXN0YXJ0OjA7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSk7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKTthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyfUBzdXBwb3J0cyAoZGlzcGxheTogZ3JpZCl7LmxvYWRlcl9fc3ZnLS0xe2FuaW1hdGlvbi1uYW1lOmxvYWRlci1vZmZzZXQtMX0ubG9hZGVyX19zdmctLTJ7YW5pbWF0aW9uLW5hbWU6bG9hZGVyLW9mZnNldC0yfS5sb2FkZXJfX3N2Zy0tM3thbmltYXRpb24tbmFtZTpsb2FkZXItb2Zmc2V0LTN9fTpob3N0KFt0eXBlPWRldGVybWluYXRlXSl7YW5pbWF0aW9uOm5vbmU7c3Ryb2tlOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfTpob3N0KFt0eXBlPWRldGVybWluYXRlXSkgLmxvYWRlcl9fc3Znc3thbmltYXRpb246bm9uZX06aG9zdChbdHlwZT1kZXRlcm1pbmF0ZV0pIC5sb2FkZXJfX3N2Zy0tM3thbmltYXRpb246bm9uZTtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7c3Ryb2tlLWRhc2hhcnJheToxNTAuNzk2MzI7dHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0KSBsaW5lYXJ9Omhvc3QoW2lubGluZV0pe3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbjowcHg7YW5pbWF0aW9uOm5vbmU7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MjtwYWRkaW5nLWJsb2NrOjBweDtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKTttaW4tYmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSk7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmUpO21hcmdpbi1pbmxpbmUtZW5kOmNhbGModmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmUpICogMC41KTt2ZXJ0aWNhbC1hbGlnbjpjYWxjKHZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKSAqIC0xICogMC4yKX06aG9zdChbaW5saW5lXSkgLmxvYWRlcl9fc3Znc3tpbnNldC1ibG9jay1zdGFydDowcHg7bWFyZ2luOjBweDtpbnNldC1pbmxpbmUtc3RhcnQ6MDtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSk7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSl9Omhvc3QoW2lubGluZV0pIC5sb2FkZXJfX3N2Z3tpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSk7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSl9Omhvc3QoW2NvbXBsZXRlXSl7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZSgwLjc1LCAwLjc1KTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2l0aW9uOm9wYWNpdHkgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bSkgbGluZWFyIDEwMDBtcywgdHJhbnNmb3JtIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGxpbmVhciAxMDAwbXN9Omhvc3QoW2NvbXBsZXRlXSkgLmxvYWRlcl9fc3Znc3tvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlKDAuNzUsIDAuNzUpO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zaXRpb246b3BhY2l0eSBjYWxjKDE4MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKSBsaW5lYXIgODAwbXMsIHRyYW5zZm9ybSBjYWxjKDE4MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKSBsaW5lYXIgODAwbXN9Omhvc3QoW2NvbXBsZXRlXSkgLmxvYWRlcl9fcGVyY2VudGFnZXtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTt0cmFuc2Zvcm06c2NhbGUoMS4wNSwgMS4wNSk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNpdGlvbjpjb2xvciB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSBsaW5lYXIsIHRyYW5zZm9ybSB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSBsaW5lYXJ9LmxvYWRlcl9fc3ZnLS0xe3N0cm9rZS1kYXNoYXJyYXk6MjcuOTI1MjQ0NDQ0NCAxMzkuNjI2MjIyMjIyMjthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdykgLyB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikgKiA0LjggLyB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfUBrZXlmcmFtZXMgbG9hZGVyLW9mZnNldC0xezAle3N0cm9rZS1kYXNoYXJyYXk6MjcuOTI1MjQ0NDQ0NCAyNTEuMzI3MjtzdHJva2UtZGFzaG9mZnNldDowfTUwJXtzdHJva2UtZGFzaGFycmF5OjEzOS42MjYyMjIyMjIyIDEzOS42MjYyMjIyMjIyO3N0cm9rZS1kYXNob2Zmc2V0Oi04My43NzU3MzMzMzMzfTEwMCV7c3Ryb2tlLWRhc2hhcnJheToyNy45MjUyNDQ0NDQ0IDI1MS4zMjcyO3N0cm9rZS1kYXNob2Zmc2V0Oi0yNzkuMjUyNDQ0NDQ0NH19LmxvYWRlcl9fc3ZnLS0ye3N0cm9rZS1kYXNoYXJyYXk6NTUuODUwNDg4ODg4OSAxMzkuNjI2MjIyMjIyMjthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdykgLyB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikgKiA2LjQgLyB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfUBrZXlmcmFtZXMgbG9hZGVyLW9mZnNldC0yezAle3N0cm9rZS1kYXNoYXJyYXk6NTUuODUwNDg4ODg4OSAyMjMuNDAxOTU1NTU1NjtzdHJva2UtZGFzaG9mZnNldDowfTUwJXtzdHJva2UtZGFzaGFycmF5OjEzOS42MjYyMjIyMjIyIDEzOS42MjYyMjIyMjIyO3N0cm9rZS1kYXNob2Zmc2V0Oi05Ny43MzgzNTU1NTU2fTEwMCV7c3Ryb2tlLWRhc2hhcnJheTo1NS44NTA0ODg4ODg5IDIyMy40MDE5NTU1NTU2O3N0cm9rZS1kYXNob2Zmc2V0Oi0yNzkuMjUyNDQ0NDQ0NH19LmxvYWRlcl9fc3ZnLS0ze3N0cm9rZS1kYXNoYXJyYXk6MTMuOTYyNjIyMjIyMiAxMzkuNjI2MjIyMjIyMjthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdykgLyB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikgKiA3LjczNCAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9QGtleWZyYW1lcyBsb2FkZXItb2Zmc2V0LTN7MCV7c3Ryb2tlLWRhc2hhcnJheToxMy45NjI2MjIyMjIyIDI2NS4yODk4MjIyMjIyO3N0cm9rZS1kYXNob2Zmc2V0OjB9NTAle3N0cm9rZS1kYXNoYXJyYXk6MTM5LjYyNjIyMjIyMjIgMTM5LjYyNjIyMjIyMjI7c3Ryb2tlLWRhc2hvZmZzZXQ6LTc2Ljc5NDQyMjIyMjJ9MTAwJXtzdHJva2UtZGFzaGFycmF5OjEzLjk2MjYyMjIyMjIgMjY1LjI4OTgyMjIyMjI7c3Ryb2tlLWRhc2hvZmZzZXQ6LTI3OS4yNTI0NDQ0NDQ0fX1Aa2V5ZnJhbWVzIGxvYWRlci1jb2xvci1zaGlmdHswJXtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9MzMle3N0cm9rZTp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kLXByZXNzKX02NiV7c3Ryb2tlOnZhcigtLWNhbGNpdGUtdWktYnJhbmQtaG92ZXIpfTEwMCV7c3Ryb2tlOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfX1Aa2V5ZnJhbWVzIGxvYWRlci1jbG9ja3dpc2V7MTAwJXt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBMb2FkZXIgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuaW5saW5lID0gZmFsc2U7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy50eXBlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmFsdWUgPSAwO1xuICAgIHRoaXMudGV4dCA9IFwiXCI7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWwsIGlubGluZSwgbGFiZWwsIHNjYWxlLCB0ZXh0LCB0eXBlLCB2YWx1ZSB9ID0gdGhpcztcbiAgICBjb25zdCBpZCA9IGVsLmlkIHx8IGd1aWQoKTtcbiAgICBjb25zdCByYWRpdXNSYXRpbyA9IDAuNDU7XG4gICAgY29uc3Qgc2l6ZSA9IGlubGluZSA/IHRoaXMuZ2V0SW5saW5lU2l6ZShzY2FsZSkgOiB0aGlzLmdldFNpemUoc2NhbGUpO1xuICAgIGNvbnN0IHJhZGl1cyA9IHNpemUgKiByYWRpdXNSYXRpbztcbiAgICBjb25zdCB2aWV3Ym94ID0gYDAgMCAke3NpemV9ICR7c2l6ZX1gO1xuICAgIGNvbnN0IGlzRGV0ZXJtaW5hdGUgPSB0eXBlID09PSBcImRldGVybWluYXRlXCI7XG4gICAgY29uc3QgY2lyY3VtZmVyZW5jZSA9IDIgKiByYWRpdXMgKiBNYXRoLlBJO1xuICAgIGNvbnN0IHByb2dyZXNzID0gKHZhbHVlIC8gMTAwKSAqIGNpcmN1bWZlcmVuY2U7XG4gICAgY29uc3QgcmVtYWluaW5nID0gY2lyY3VtZmVyZW5jZSAtIHByb2dyZXNzO1xuICAgIGNvbnN0IHZhbHVlTm93ID0gTWF0aC5mbG9vcih2YWx1ZSk7XG4gICAgY29uc3QgaG9zdEF0dHJpYnV0ZXMgPSB7XG4gICAgICBcImFyaWEtdmFsdWVub3dcIjogdmFsdWVOb3csXG4gICAgICBcImFyaWEtdmFsdWVtaW5cIjogMCxcbiAgICAgIFwiYXJpYS12YWx1ZW1heFwiOiAxMDAsXG4gICAgICBjb21wbGV0ZTogdmFsdWVOb3cgPT09IDEwMCxcbiAgICB9O1xuICAgIGNvbnN0IHN2Z0F0dHJpYnV0ZXMgPSB7IHI6IHJhZGl1cywgY3g6IHNpemUgLyAyLCBjeTogc2l6ZSAvIDIgfTtcbiAgICBjb25zdCBkZXRlcm1pbmF0ZVN0eWxlID0geyBcInN0cm9rZS1kYXNoYXJyYXlcIjogYCR7cHJvZ3Jlc3N9ICR7cmVtYWluaW5nfWAgfTtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtbGFiZWxcIjogbGFiZWwsIGlkOiBpZCwgcm9sZTogXCJwcm9ncmVzc2JhclwiLCAuLi4oaXNEZXRlcm1pbmF0ZSA/IGhvc3RBdHRyaWJ1dGVzIDoge30pIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJsb2FkZXJfX3N2Z3NcIiB9LCBoKFwic3ZnXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IFwibG9hZGVyX19zdmcgbG9hZGVyX19zdmctLTFcIiwgdmlld0JveDogdmlld2JveCB9LCBoKFwiY2lyY2xlXCIsIHsgLi4uc3ZnQXR0cmlidXRlcyB9KSksIGgoXCJzdmdcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogXCJsb2FkZXJfX3N2ZyBsb2FkZXJfX3N2Zy0tMlwiLCB2aWV3Qm94OiB2aWV3Ym94IH0sIGgoXCJjaXJjbGVcIiwgeyAuLi5zdmdBdHRyaWJ1dGVzIH0pKSwgaChcInN2Z1wiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBcImxvYWRlcl9fc3ZnIGxvYWRlcl9fc3ZnLS0zXCIsIHZpZXdCb3g6IHZpZXdib3gsIC4uLihpc0RldGVybWluYXRlID8geyBzdHlsZTogZGV0ZXJtaW5hdGVTdHlsZSB9IDoge30pIH0sIGgoXCJjaXJjbGVcIiwgeyAuLi5zdmdBdHRyaWJ1dGVzIH0pKSksIHRleHQgJiYgaChcImRpdlwiLCB7IGNsYXNzOiBcImxvYWRlcl9fdGV4dFwiIH0sIHRleHQpLCBpc0RldGVybWluYXRlICYmIGgoXCJkaXZcIiwgeyBjbGFzczogXCJsb2FkZXJfX3BlcmNlbnRhZ2VcIiB9LCB2YWx1ZSkpKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogUmV0dXJuIHRoZSBwcm9wZXIgc2l6ZXMgYmFzZWQgb24gdGhlIHNjYWxlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSBzY2FsZVxuICAgKi9cbiAgZ2V0U2l6ZShzY2FsZSkge1xuICAgIHJldHVybiB7XG4gICAgICBzOiAzMixcbiAgICAgIG06IDU2LFxuICAgICAgbDogODAsXG4gICAgfVtzY2FsZV07XG4gIH1cbiAgZ2V0SW5saW5lU2l6ZShzY2FsZSkge1xuICAgIHJldHVybiB7XG4gICAgICBzOiAxMixcbiAgICAgIG06IDE2LFxuICAgICAgbDogMjAsXG4gICAgfVtzY2FsZV07XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gbG9hZGVyQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWxvYWRlclwiLCB7XG4gICAgXCJpbmxpbmVcIjogWzUxNl0sXG4gICAgXCJsYWJlbFwiOiBbMV0sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcInR5cGVcIjogWzUxM10sXG4gICAgXCJ2YWx1ZVwiOiBbMl0sXG4gICAgXCJ0ZXh0XCI6IFsxXVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWxvYWRlclwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBMb2FkZXIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IExvYWRlciBhcyBMLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHJlYWRUYXNrIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG5mdW5jdGlvbiBpc09wZW4oY29tcG9uZW50KSB7XG4gIHJldHVybiBcIm9wZW5lZFwiIGluIGNvbXBvbmVudCA/IGNvbXBvbmVudC5vcGVuZWQgOiBjb21wb25lbnQub3Blbjtcbn1cbmZ1bmN0aW9uIGVtaXRJbW1lZGlhdGVseShjb21wb25lbnQsIG5vbk9wZW5DbG9zZUNvbXBvbmVudCA9IGZhbHNlKSB7XG4gIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGlzT3Blbihjb21wb25lbnQpKVxuICAgID8gY29tcG9uZW50Lm9uQmVmb3JlT3BlbigpXG4gICAgOiBjb21wb25lbnQub25CZWZvcmVDbG9zZSgpO1xuICAobm9uT3BlbkNsb3NlQ29tcG9uZW50ID8gY29tcG9uZW50W2NvbXBvbmVudC50cmFuc2l0aW9uUHJvcF0gOiBpc09wZW4oY29tcG9uZW50KSlcbiAgICA/IGNvbXBvbmVudC5vbk9wZW4oKVxuICAgIDogY29tcG9uZW50Lm9uQ2xvc2UoKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIGRldGVybWluZSBnbG9iYWxseSBzZXQgdHJhbnNpdGlvbiBkdXJhdGlvbiBvbiB0aGUgZ2l2ZW4gb3BlblRyYW5zaXRpb25Qcm9wLCB3aGljaCBpcyBpbXBvcnRlZCBhbmQgc2V0IGluIHRoZSBAV2F0Y2goXCJvcGVuXCIpLlxuICogVXNlZCB0byBlbWl0IChiZWZvcmUpb3Blbi9jbG9zZSBldmVudHMgYm90aCBmb3Igd2hlbiB0aGUgb3BhY2l0eSB0cmFuc2l0aW9uIGlzIHByZXNlbnQgYW5kIHdoZW4gdGhlcmUgaXMgbm9uZSAodHJhbnNpdGlvbi1kdXJhdGlvbiBpcyBzZXQgdG8gMCkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50LCBPcGVuQ2xvc2VDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvb3BlbkNsb3NlQ29tcG9uZW50XCI7XG4gKlxuICogYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gKiAvLyBXaGVuIGNvbXBvbmVudCBpbml0aWFsbHkgcmVuZGVycywgaWYgYG9wZW5gIHdhcyBzZXQgd2UgbmVlZCB0byB0cmlnZ2VyIG9uIGxvYWQgYXMgd2F0Y2hlciBkb2Vzbid0IGZpcmUuXG4gKiBpZiAodGhpcy5vcGVuKSB7XG4gKiAgICBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqIEBXYXRjaChcIm9wZW5cIilcbiAqIGFzeW5jIHRvZ2dsZU1vZGFsKHZhbHVlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgICBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50IC0gT3BlbkNsb3NlQ29tcG9uZW50IHVzZXMgYG9wZW5gIHByb3AgdG8gZW1pdCAoYmVmb3JlKW9wZW4vY2xvc2UuXG4gKiBAcGFyYW0gbm9uT3BlbkNsb3NlQ29tcG9uZW50IC0gT3BlbkNsb3NlQ29tcG9uZW50IHVzZXMgYGV4cGFuZGVkYCBwcm9wIHRvIGVtaXQgKGJlZm9yZSlvcGVuL2Nsb3NlLlxuICovXG5mdW5jdGlvbiBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudChjb21wb25lbnQsIG5vbk9wZW5DbG9zZUNvbXBvbmVudCA9IGZhbHNlKSB7XG4gIHJlYWRUYXNrKCgpID0+IHtcbiAgICBpZiAoY29tcG9uZW50LnRyYW5zaXRpb25FbCkge1xuICAgICAgY29uc3QgeyB0cmFuc2l0aW9uRHVyYXRpb246IGFsbER1cmF0aW9ucywgdHJhbnNpdGlvblByb3BlcnR5OiBhbGxQcm9wcyB9ID0gZ2V0Q29tcHV0ZWRTdHlsZShjb21wb25lbnQudHJhbnNpdGlvbkVsKTtcbiAgICAgIGNvbnN0IGFsbFRyYW5zaXRpb25EdXJhdGlvbnNBcnJheSA9IGFsbER1cmF0aW9ucy5zcGxpdChcIixcIik7XG4gICAgICBjb25zdCBhbGxUcmFuc2l0aW9uUHJvcHNBcnJheSA9IGFsbFByb3BzLnNwbGl0KFwiLFwiKTtcbiAgICAgIGNvbnN0IG9wZW5UcmFuc2l0aW9uUHJvcEluZGV4ID0gYWxsVHJhbnNpdGlvblByb3BzQXJyYXkuaW5kZXhPZihjb21wb25lbnQub3BlblRyYW5zaXRpb25Qcm9wKTtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IGFsbFRyYW5zaXRpb25EdXJhdGlvbnNBcnJheVtvcGVuVHJhbnNpdGlvblByb3BJbmRleF0gPz9cbiAgICAgICAgLyogU2FmYXJpIHdpbGwgaGF2ZSBhIHNpbmdsZSB0cmFuc2l0aW9uIHZhbHVlIGlmIG11bHRpcGxlIHByb3BzIHNoYXJlIGl0LFxuICAgICAgICBzbyB3ZSBmYWxsIGJhY2sgdG8gaXQgaWYgdGhlcmUncyBubyBtYXRjaGluZyBwcm9wIGR1cmF0aW9uICovXG4gICAgICAgIGFsbFRyYW5zaXRpb25EdXJhdGlvbnNBcnJheVswXTtcbiAgICAgIGlmICh0cmFuc2l0aW9uRHVyYXRpb24gPT09IFwiMHNcIikge1xuICAgICAgICBlbWl0SW1tZWRpYXRlbHkoY29tcG9uZW50LCBub25PcGVuQ2xvc2VDb21wb25lbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBmYWxsYmFja1RpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uc3RhcnRcIiwgb25TdGFydCk7XG4gICAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgb25FbmRPckNhbmNlbCk7XG4gICAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25jYW5jZWxcIiwgb25FbmRPckNhbmNlbCk7XG4gICAgICAgIGVtaXRJbW1lZGlhdGVseShjb21wb25lbnQsIG5vbk9wZW5DbG9zZUNvbXBvbmVudCk7XG4gICAgICB9LCBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKiAxMDAwKTtcbiAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25zdGFydFwiLCBvblN0YXJ0KTtcbiAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgb25FbmRPckNhbmNlbCk7XG4gICAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uY2FuY2VsXCIsIG9uRW5kT3JDYW5jZWwpO1xuICAgICAgZnVuY3Rpb24gb25TdGFydChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQucHJvcGVydHlOYW1lID09PSBjb21wb25lbnQub3BlblRyYW5zaXRpb25Qcm9wICYmIGV2ZW50LnRhcmdldCA9PT0gY29tcG9uZW50LnRyYW5zaXRpb25FbCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChmYWxsYmFja1RpbWVvdXRJZCk7XG4gICAgICAgICAgY29tcG9uZW50LnRyYW5zaXRpb25FbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbnN0YXJ0XCIsIG9uU3RhcnQpO1xuICAgICAgICAgIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGlzT3Blbihjb21wb25lbnQpKVxuICAgICAgICAgICAgPyBjb21wb25lbnQub25CZWZvcmVPcGVuKClcbiAgICAgICAgICAgIDogY29tcG9uZW50Lm9uQmVmb3JlQ2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gb25FbmRPckNhbmNlbChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQucHJvcGVydHlOYW1lID09PSBjb21wb25lbnQub3BlblRyYW5zaXRpb25Qcm9wICYmIGV2ZW50LnRhcmdldCA9PT0gY29tcG9uZW50LnRyYW5zaXRpb25FbCkge1xuICAgICAgICAgIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGlzT3Blbihjb21wb25lbnQpKVxuICAgICAgICAgICAgPyBjb21wb25lbnQub25PcGVuKClcbiAgICAgICAgICAgIDogY29tcG9uZW50Lm9uQ2xvc2UoKTtcbiAgICAgICAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIG9uRW5kT3JDYW5jZWwpO1xuICAgICAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25jYW5jZWxcIiwgb25FbmRPckNhbmNlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudCBhcyBvIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5pbXBvcnQgeyB3IGFzIHNsb3RDaGFuZ2VIYXNDb250ZW50IH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDEgfSBmcm9tICcuL2xvYWRlci5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgc2NyaW06IFwic2NyaW1cIixcbiAgY29udGVudDogXCJjb250ZW50XCIsXG59O1xuY29uc3QgQlJFQUtQT0lOVFMgPSB7XG4gIHM6IDcyLFxuICAvLyBtZWRpdW0gaXMgYXNzdW1lZCBkZWZhdWx0LlxuICBsOiA0ODAsIC8vIEdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byA0ODBweC5cbn07XG5cbmNvbnN0IHNjcmltQ3NzID0gXCI6aG9zdHtwb3NpdGlvbjphYnNvbHV0ZTtpbnNldDowcHg7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LW92ZXJsYXkpO2Rpc3BsYXk6ZmxleDtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6c3RyZXRjaH1Aa2V5ZnJhbWVzIGNhbGNpdGUtc2NyaW0tZmFkZS1pbnswJXstLXR3LWJnLW9wYWNpdHk6MH0xMDAley0tdHctdGV4dC1vcGFjaXR5OjF9fS5zY3JpbXtwb3NpdGlvbjphYnNvbHV0ZTtpbnNldDowcHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtvdmVyZmxvdzpoaWRkZW47YW5pbWF0aW9uOmNhbGNpdGUtc2NyaW0tZmFkZS1pbiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSBlYXNlLWluLW91dDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtc2NyaW0tYmFja2dyb3VuZCwgdmFyKC0tY2FsY2l0ZS1zY3JpbS1iYWNrZ3JvdW5kLWludGVybmFsKSl9LmNvbnRlbnR7cGFkZGluZzoxcmVtfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBTY3JpbSA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwicmVzaXplXCIsICgpID0+IHRoaXMuaGFuZGxlUmVzaXplKCkpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuaGFuZGxlRGVmYXVsdFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzQ29udGVudCA9IHNsb3RDaGFuZ2VIYXNDb250ZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuc3RvcmVMb2FkZXJFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5sb2FkZXJFbCA9IGVsO1xuICAgICAgdGhpcy5oYW5kbGVSZXNpemUoKTtcbiAgICB9O1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9hZGVyU2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuaGFzQ29udGVudCA9IGZhbHNlO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/Lm9ic2VydmUodGhpcy5lbCk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaGFzQ29udGVudCwgbG9hZGluZywgbWVzc2FnZXMgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5zY3JpbSB9LCBsb2FkaW5nID8gKGgoXCJjYWxjaXRlLWxvYWRlclwiLCB7IGxhYmVsOiBtZXNzYWdlcy5sb2FkaW5nLCBzY2FsZTogdGhpcy5sb2FkZXJTY2FsZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IHRoaXMuc3RvcmVMb2FkZXJFbCB9KSkgOiBudWxsLCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250ZW50LCBoaWRkZW46ICFoYXNDb250ZW50IH0sIGgoXCJzbG90XCIsIHsgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZURlZmF1bHRTbG90Q2hhbmdlIH0pKSkpO1xuICB9XG4gIGdldFNjYWxlKHNpemUpIHtcbiAgICBpZiAoc2l6ZSA8IEJSRUFLUE9JTlRTLnMpIHtcbiAgICAgIHJldHVybiBcInNcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2l6ZSA+PSBCUkVBS1BPSU5UUy5sKSB7XG4gICAgICByZXR1cm4gXCJsXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIFwibVwiO1xuICAgIH1cbiAgfVxuICBoYW5kbGVSZXNpemUoKSB7XG4gICAgY29uc3QgeyBsb2FkZXJFbCwgZWwgfSA9IHRoaXM7XG4gICAgaWYgKCFsb2FkZXJFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmxvYWRlclNjYWxlID0gdGhpcy5nZXRTY2FsZShNYXRoLm1pbihlbC5jbGllbnRIZWlnaHQsIGVsLmNsaWVudFdpZHRoKSA/PyAwKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBzY3JpbUNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1zY3JpbVwiLCB7XG4gICAgXCJsb2FkaW5nXCI6IFs1MTZdLFxuICAgIFwibWVzc2FnZXNcIjogWzEwNDBdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJsb2FkZXJTY2FsZVwiOiBbMzJdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogWzMyXSxcbiAgICBcImhhc0NvbnRlbnRcIjogWzMyXVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXNjcmltXCIsIFwiY2FsY2l0ZS1sb2FkZXJcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtc2NyaW1cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBTY3JpbSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IFNjcmltIGFzIFMsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgQnVpbGQsIGdldEFzc2V0UGF0aCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U3VwcG9ydGVkTG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuXG5jb25zdCBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGUgPSB7fTtcbmFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VCdW5kbGUobGFuZywgY29tcG9uZW50KSB7XG4gIGNvbnN0IGtleSA9IGAke2NvbXBvbmVudH1fJHtsYW5nfWA7XG4gIGlmIChjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XSkge1xuICAgIHJldHVybiBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XTtcbiAgfVxuICBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XSA9IGZldGNoKGdldEFzc2V0UGF0aChgLi9hc3NldHMvJHtjb21wb25lbnR9L3Q5bi9tZXNzYWdlc18ke2xhbmd9Lmpzb25gKSlcbiAgICAudGhlbigocmVzcCkgPT4ge1xuICAgIGlmICghcmVzcC5vaykge1xuICAgICAgdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcC5qc29uKCk7XG4gIH0pXG4gICAgLmNhdGNoKCgpID0+IHRocm93TWVzc2FnZUZldGNoRXJyb3IoKSk7XG4gIHJldHVybiBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XTtcbn1cbmZ1bmN0aW9uIHRocm93TWVzc2FnZUZldGNoRXJyb3IoKSB7XG4gIHRocm93IG5ldyBFcnJvcihcImNvdWxkIG5vdCBmZXRjaCBjb21wb25lbnQgbWVzc2FnZSBidW5kbGVcIik7XG59XG5mdW5jdGlvbiBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQubWVzc2FnZXMgPSB7XG4gICAgLi4uY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyxcbiAgICAuLi5jb21wb25lbnQubWVzc2FnZU92ZXJyaWRlcyxcbiAgfTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgdGhlIG1lc3NhZ2VzIHVzZWQgYnkgdGhlIGNvbXBvbmVudC4gSXQgc2hvdWxkIGJlIGF3YWl0ZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5hc3luYyBmdW5jdGlvbiBzZXRVcE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGNvbXBvbmVudC5lZmZlY3RpdmVMb2NhbGUpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG5hc3luYyBmdW5jdGlvbiBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBjb25zdCB7IGVsIH0gPSBjb21wb25lbnQ7XG4gIGNvbnN0IHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IHRhZy5yZXBsYWNlKFwiY2FsY2l0ZS1cIiwgXCJcIik7XG4gIHJldHVybiBnZXRNZXNzYWdlQnVuZGxlKGdldFN1cHBvcnRlZExvY2FsZShsYW5nLCBcInQ5blwiKSwgY29tcG9uZW50TmFtZSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBtdXN0IGJlIHNldCB1cCBmb3IgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIGRlZmF1bHQgbWVzc2FnZSBidW5kbGUgaWYgdGhlIGxvY2FsZSBjaGFuZ2VzLlxuICpcbiAqIEl0IGNhbiBiZSBzZXQgdXAgaW4gKiplaXRoZXIqKiBvZiB0aGUgZm9sbG93aW5nIHdheXM6XG4gKlxuICogMS4gY2FsbGVkIGZyb20gYExvY2FsaXplZENvbXBvbmVudGAncyBgb25Mb2NhbGVDaGFuZ2VgIG1ldGhvZCBvclxuICogMi4gY2FsbGVkIGZyb20gYSB3YXRjaGVyIGNvbmZpZ3VyZWQgdG8gd2F0Y2ggYExvY2FsaXplZENvbXBvbmVudGAncyBgZWZmZWN0aXZlTG9jYWxlYCBwcm9wXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGxhbmdcbiAqL1xuYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZyk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogKipOb3RlKio6IHRoaXMgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgYExvY2FsaXplZENvbXBvbmVudGAncyBgY29ubmVjdExvY2FsaXplZGAgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgdGVhcnMgZG93biBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgbWVyZ2VNZXNzYWdlcyh0aGlzKTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdE1lc3NhZ2VzIGFzIGMsIGRpc2Nvbm5lY3RNZXNzYWdlcyBhcyBkLCBzZXRVcE1lc3NhZ2VzIGFzIHMsIHVwZGF0ZU1lc3NhZ2VzIGFzIHUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==