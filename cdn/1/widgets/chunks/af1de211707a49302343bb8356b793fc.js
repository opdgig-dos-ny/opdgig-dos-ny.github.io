"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-alert_js-node_modules_es-e0aef6"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-alert.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-alert.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteAlert: () => (/* binding */ CalciteAlert),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _openCloseComponent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./openCloseComponent.js */ "./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _resources_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources.js */ "./node_modules/@esri/calcite-components/dist/components/resources.js");
/* harmony import */ var _chip_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chip.js */ "./node_modules/@esri/calcite-components/dist/components/chip.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */











const DURATIONS = {
  slow: 14000,
  medium: 10000,
  fast: 6000,
};
const SLOTS = {
  actionsEnd: "actions-end",
  title: "title",
  message: "message",
  link: "link",
};
const CSS = {
  actionsEnd: "actions-end",
  close: "close",
  container: "container",
  containerBottom: "container--bottom",
  containerBottomEnd: "container--bottom-end",
  containerBottomStart: "container--bottom-start",
  containerQueued: "container--queued",
  containerTop: "container--top",
  containerTopEnd: "container--top-end",
  containerTopStart: "container--top-start",
  content: "content",
  contentContainer: "content-container",
  dismissProgress: "dismiss-progress",
  footer: "footer",
  icon: "icon",
  containerSlottedInShell: "container--slotted-in-shell",
  queueCount: "queue-count",
  queueCountActive: "queue-count--active",
  textContainer: "text-container",
};

const alertCss = ":host{--calcite-alert-edge-distance:2rem;display:block}.container{pointer-events:none;position:fixed;z-index:var(--calcite-app-z-index-toast);margin-inline:auto;margin-block:0px;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:min-content;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);text-align:start;opacity:0;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);container:responsive-container/inline-size;border-radius:var(--calcite-border-radius);border-block-start:0 solid transparent;border-inline:1px solid var(--calcite-ui-border-3);border-block-end:1px solid var(--calcite-ui-border-3);inline-size:var(--calcite-alert-width);max-inline-size:calc(100% - var(--calcite-alert-edge-distance) * 2);transition:var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out}.container--bottom,.container--top{inset-inline-end:0;inset-inline-start:0}.container[class*=bottom]{transform:translate3d(0, var(--calcite-alert-edge-distance), 0);inset-block-end:var(--calcite-alert-edge-distance)}.container[class*=top]{transform:translate3d(0, calc(-1 * var(--calcite-alert-edge-distance)), 0);inset-block-start:var(--calcite-alert-edge-distance)}.container[class*=start]{inset-inline-start:var(--calcite-alert-edge-distance);inset-inline-end:auto}.container[class*=end]{inset-inline-end:var(--calcite-alert-edge-distance);inset-inline-start:auto}.icon{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0px;margin-block:auto;margin-inline-end:auto;padding-inline-start:var(--calcite-alert-spacing-token-large)}.close{display:flex;cursor:pointer;align-items:center;justify-content:flex-end;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;-webkit-appearance:none;padding:var(--calcite-alert-spacing-token-large);outline-color:transparent}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.close:hover,.close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.close:active{background-color:var(--calcite-ui-foreground-3)}.queue-count{visibility:hidden;display:flex;min-inline-size:min-content;cursor:default;align-items:center;justify-content:space-around;align-self:stretch;overflow:hidden;background-color:var(--calcite-ui-foreground-1);text-align:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline:0 solid transparent;border-start-end-radius:0}.queue-count--active{visibility:visible;opacity:1}.dismiss-progress{position:absolute;display:block;inline-size:100%;overflow:hidden;inset-inline:0;inset-block-start:-2px;block-size:2px;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}.dismiss-progress:after{position:absolute;inset-block-start:0px;display:block;block-size:2px;content:\"\";background-color:var(--calcite-alert-dismiss-progress-background);inset-inline-end:0}.actions-end{display:flex;align-self:stretch}.text-container{box-sizing:border-box;display:flex;min-inline-size:0px;flex:1 1 auto;flex-direction:column;overflow-wrap:break-word;padding-block:var(--calcite-alert-spacing-token-small);padding-inline:var(--calcite-alert-spacing-token-large) var(--calcite-alert-spacing-token-small)}.footer{position:relative;display:flex;inline-size:auto;justify-content:flex-end;align-self:stretch;padding-block-start:1px;block-size:inherit}:host([scale=s]){--calcite-alert-width:40em;--calcite-alert-spacing-token-small:0.5rem;--calcite-alert-spacing-token-large:0.75rem;--calcite-alert-footer-height:2rem;--calcite-alert-footer-divider-gap:0.125rem}:host([scale=s]) slot[name=title]::slotted(*),:host([scale=s]) *::slotted([slot=title]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) slot[name=message]::slotted(*),:host([scale=s]) *::slotted([slot=message]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) slot[name=link]::slotted(*),:host([scale=s]) *::slotted([slot=link]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .queue-count{margin-inline:0.5rem}:host([scale=s]) .container{--calcite-alert-min-height:3.5rem}:host([scale=m]){--calcite-alert-width:50em;--calcite-alert-spacing-token-small:0.75rem;--calcite-alert-spacing-token-large:1rem;--calcite-alert-footer-height:3rem;--calcite-alert-footer-divider-gap:0.25rem}:host([scale=m]) slot[name=title]::slotted(*),:host([scale=m]) *::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) slot[name=message]::slotted(*),:host([scale=m]) *::slotted([slot=message]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) slot[name=link]::slotted(*),:host([scale=m]) *::slotted([slot=link]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .queue-count{margin-inline:0.75rem}:host([scale=m]) .container{--calcite-alert-min-height:4.1875rem}:host([scale=l]){--calcite-alert-width:60em;--calcite-alert-spacing-token-small:1rem;--calcite-alert-spacing-token-large:1.25rem;--calcite-alert-footer-height:4rem;--calcite-alert-footer-divider-gap:0.5rem}:host([scale=l]) slot[name=title]::slotted(*),:host([scale=l]) *::slotted([slot=title]){margin-block-end:0.25rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) slot[name=message]::slotted(*),:host([scale=l]) *::slotted([slot=message]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) slot[name=link]::slotted(*),:host([scale=l]) *::slotted([slot=link]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .queue-count{margin-inline:1rem}:host([scale=l]) .container{--calcite-alert-min-height:5.625rem}:host([open]) .container:not(.container--queued){border-block-start-width:2px;opacity:1;pointer-events:initial}:host([open]) .container:not(.container--queued)[class*=bottom]{transform:translate3d(0, calc(-1 * var(--calcite-alert-edge-distance)), inherit)}:host([open]) .container:not(.container--queued)[class*=top]{transform:translate3d(0, var(--calcite-alert-edge-distance), inherit)}:host([auto-close])>.queue-count{border-inline-end:0 solid transparent}slot[name=title]::slotted(*),*::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}slot[name=message]::slotted(*),*::slotted([slot=message]){margin:0px;display:inline;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-inline-end:0.5rem}slot[name=link]::slotted(*),*::slotted([slot=link]){display:inline-flex;color:var(--calcite-ui-text-link)}:host([kind=brand]) .container{border-block-start-color:var(--calcite-ui-brand)}:host([kind=brand]) .container .icon{color:var(--calcite-ui-brand)}:host([kind=info]) .container{border-block-start-color:var(--calcite-ui-info)}:host([kind=info]) .container .icon{color:var(--calcite-ui-info)}:host([kind=danger]) .container{border-block-start-color:var(--calcite-ui-danger)}:host([kind=danger]) .container .icon{color:var(--calcite-ui-danger)}:host([kind=success]) .container{border-block-start-color:var(--calcite-ui-success)}:host([kind=success]) .container .icon{color:var(--calcite-ui-success)}:host([kind=warning]) .container{border-block-start-color:var(--calcite-ui-warning)}:host([kind=warning]) .container .icon{color:var(--calcite-ui-warning)}:host([auto-close-duration=fast]) .dismiss-progress:after{animation:dismissProgress 6000ms ease-out}:host(:hover[auto-close-duration=fast]) .dismiss-progress:after{animation-play-state:paused}:host([auto-close-duration=medium]) .dismiss-progress:after{animation:dismissProgress 10000ms ease-out}:host(:hover[auto-close-duration=medium]) .dismiss-progress:after{animation-play-state:paused}:host([auto-close-duration=slow]) .dismiss-progress:after{animation:dismissProgress 14000ms ease-out}:host(:hover[auto-close-duration=slow]) .dismiss-progress:after{animation-play-state:paused}@keyframes dismissProgress{0%{inline-size:0px;opacity:0.75}100%{inline-size:100%;opacity:1}}.container--slotted-in-shell{position:absolute}:host([hidden]){display:none}[hidden]{display:none}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}";

const Alert = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteAlertBeforeClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteAlertBeforeClose", 6);
    this.calciteAlertClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteAlertClose", 6);
    this.calciteAlertBeforeOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteAlertBeforeOpen", 6);
    this.calciteAlertOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteAlertOpen", 6);
    this.calciteInternalAlertSync = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteInternalAlertSync", 6);
    this.calciteInternalAlertRegister = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteInternalAlertRegister", 6);
    this.autoCloseTimeoutId = null;
    this.totalOpenTime = 0;
    this.totalHoverTime = 0;
    this.openTransitionProp = "opacity";
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
    };
    /** close and emit calciteInternalAlertSync event with the updated queue payload */
    this.closeAlert = () => {
      this.autoCloseTimeoutId = null;
      this.queued = false;
      this.open = false;
      this.queue = this.queue.filter((el) => el !== this.el);
      this.determineActiveAlert();
      this.calciteInternalAlertSync.emit({ queue: this.queue });
    };
    this.actionsEndSlotChangeHandler = (event) => {
      this.hasEndActions = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleMouseOver = () => {
      window.clearTimeout(this.autoCloseTimeoutId);
      this.totalOpenTime = Date.now() - this.initialOpenTime;
      this.lastMouseOverBegin = Date.now();
    };
    this.handleMouseLeave = () => {
      const hoverDuration = Date.now() - this.lastMouseOverBegin;
      const timeRemaining = DURATIONS[this.autoCloseDuration] - this.totalOpenTime + this.totalHoverTime;
      this.totalHoverTime = this.totalHoverTime ? hoverDuration + this.totalHoverTime : hoverDuration;
      this.autoCloseTimeoutId = window.setTimeout(() => this.closeAlert(), timeRemaining);
    };
    this.open = false;
    this.autoClose = false;
    this.autoCloseDuration = "medium";
    this.kind = "brand";
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.label = undefined;
    this.numberingSystem = undefined;
    this.placement = "bottom";
    this.scale = "m";
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.slottedInShell = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.hasEndActions = false;
    this.queue = [];
    this.queueLength = 0;
    this.queued = false;
  }
  openHandler() {
    (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_4__.o)(this);
    if (this.open && !this.queued) {
      this.calciteInternalAlertRegister.emit();
    }
    if (!this.open) {
      this.queue = this.queue.filter((el) => el !== this.el);
      this.calciteInternalAlertSync.emit({ queue: this.queue });
    }
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  updateDuration() {
    if (this.autoClose && this.autoCloseTimeoutId) {
      window.clearTimeout(this.autoCloseTimeoutId);
      this.autoCloseTimeoutId = window.setTimeout(() => this.closeAlert(), DURATIONS[this.autoCloseDuration]);
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    const open = this.open;
    if (open && !this.queued) {
      this.calciteInternalAlertRegister.emit();
    }
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
    if (this.open) {
      (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_4__.o)(this);
    }
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  disconnectedCallback() {
    window.dispatchEvent(new CustomEvent("calciteInternalAlertUnregister", {
      detail: { alert: this.el },
    }));
    window.clearTimeout(this.autoCloseTimeoutId);
    window.clearTimeout(this.queueTimeout);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    this.slottedInShell = false;
  }
  render() {
    _locale_js__WEBPACK_IMPORTED_MODULE_3__.n.numberFormatOptions = {
      locale: this.effectiveLocale,
      numberingSystem: this.numberingSystem,
      signDisplay: "always",
    };
    const { open, autoClose, label, placement, queued } = this;
    const role = autoClose ? "alert" : "alertdialog";
    const hidden = !open;
    const effectiveIcon = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.h)(_resources_js__WEBPACK_IMPORTED_MODULE_6__.K, this.icon, this.kind);
    const hasQueuedAlerts = this.queueLength > 1;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.Host, { "aria-hidden": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(hidden), "aria-label": label, "calcite-hydrated-hidden": hidden, role: role }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: {
        [CSS.container]: true,
        [CSS.containerQueued]: queued,
        [`${CSS.container}--${placement}`]: true,
        [CSS.containerSlottedInShell]: this.slottedInShell,
      }, onPointerEnter: this.autoClose && this.autoCloseTimeoutId ? this.handleMouseOver : null, onPointerLeave: this.autoClose && this.autoCloseTimeoutId ? this.handleMouseLeave : null,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setTransitionEl }, effectiveIcon && this.renderIcon(effectiveIcon), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: CSS.textContainer }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: SLOTS.title }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: SLOTS.message }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: SLOTS.link })), this.renderActionsEnd(), hasQueuedAlerts ? this.renderQueueCount() : null, this.renderCloseButton(), open && !queued && autoClose ? (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: CSS.dismissProgress }) : null)));
  }
  renderCloseButton() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("button", { "aria-label": this.messages.close, class: CSS.close, key: "close", onClick: this.closeAlert, type: "button",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.closeButton = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-icon", { icon: "x", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.scale) })));
  }
  renderQueueCount() {
    const queueNumber = this.queueLength > 2 ? this.queueLength - 1 : 1;
    const queueText = _locale_js__WEBPACK_IMPORTED_MODULE_3__.n.numberFormatter.format(queueNumber);
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: {
        [CSS.queueCount]: true,
        [CSS.queueCountActive]: this.queueLength > 1,
      }, key: "queue-count" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-chip", { scale: this.scale, value: queueText }, queueText)));
  }
  renderActionsEnd() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: CSS.actionsEnd }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: SLOTS.actionsEnd, onSlotchange: this.actionsEndSlotChangeHandler })));
  }
  renderIcon(icon) {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: CSS.icon }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-icon", { flipRtl: this.iconFlipRtl, icon: icon, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.scale) })));
  }
  // when an alert is opened or closed, update queue and determine active alert
  alertSync(event) {
    if (this.queue !== event.detail.queue) {
      this.queue = event.detail.queue;
    }
    this.queueLength = this.queue.length;
    this.determineActiveAlert();
    event.stopPropagation();
  }
  // when an alert is first registered, trigger a queue sync
  alertRegister() {
    if (this.open && !this.queue.includes(this.el)) {
      this.queued = true;
      this.queue.push(this.el);
    }
    this.calciteInternalAlertSync.emit({ queue: this.queue });
    this.determineActiveAlert();
  }
  // Event is dispatched on the window because the element is not in the DOM so bubbling won't occur.
  alertUnregister(event) {
    const queue = this.queue.filter((el) => el !== event.detail.alert);
    this.queue = queue;
    window.dispatchEvent(new CustomEvent("calciteInternalAlertSync", {
      detail: { queue },
    }));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's "close" button (the first focusable item). */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    const alertLinkEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.g)(this.el, { selector: "calcite-link" });
    if (!this.closeButton && !alertLinkEl) {
      return;
    }
    else if (alertLinkEl) {
      return alertLinkEl.setFocus();
    }
    else if (this.closeButton) {
      this.closeButton.focus();
    }
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_5__.u)(this, this.effectiveLocale);
  }
  /** determine which alert is active */
  determineActiveAlert() {
    if (this.queue?.[0] === this.el) {
      this.openAlert();
      if (this.autoClose && !this.autoCloseTimeoutId) {
        this.initialOpenTime = Date.now();
        this.autoCloseTimeoutId = window.setTimeout(() => this.closeAlert(), DURATIONS[this.autoCloseDuration]);
      }
    }
    else {
      return;
    }
  }
  onBeforeOpen() {
    this.calciteAlertBeforeOpen.emit();
  }
  onOpen() {
    this.calciteAlertOpen.emit();
  }
  onBeforeClose() {
    this.calciteAlertBeforeClose.emit();
  }
  onClose() {
    this.calciteAlertClose.emit();
  }
  /** remove queued class after animation completes */
  openAlert() {
    window.clearTimeout(this.queueTimeout);
    this.queueTimeout = window.setTimeout(() => (this.queued = false), 300);
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "open": ["openHandler"],
    "messageOverrides": ["onMessagesChange"],
    "autoCloseDuration": ["updateDuration"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return alertCss; }
}, [1, "calcite-alert", {
    "open": [1540],
    "autoClose": [516, "auto-close"],
    "autoCloseDuration": [513, "auto-close-duration"],
    "kind": [513],
    "icon": [520],
    "iconFlipRtl": [516, "icon-flip-rtl"],
    "label": [1],
    "numberingSystem": [513, "numbering-system"],
    "placement": [513],
    "scale": [513],
    "messages": [1040],
    "messageOverrides": [1040],
    "slottedInShell": [1028, "slotted-in-shell"],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "hasEndActions": [32],
    "queue": [32],
    "queueLength": [32],
    "queued": [32],
    "setFocus": [64]
  }, [[8, "calciteInternalAlertSync", "alertSync"], [8, "calciteInternalAlertRegister", "alertRegister"], [8, "calciteInternalAlertUnregister", "alertUnregister"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-alert", "calcite-chip", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-alert":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Alert);
      }
      break;
    case "calcite-chip":
      if (!customElements.get(tagName)) {
        (0,_chip_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteAlert = Alert;
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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYWYxZGUyMTE3MDdhNDkzMDIzNDNiYjgzNTZiNzkzZmMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRztBQUNVO0FBQ3RFO0FBQzJEO0FBQ0o7QUFDaEM7QUFDd0M7QUFDbEU7QUFDTztBQUNBOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixtQ0FBbUMsY0FBYyxXQUFXLG9CQUFvQixlQUFlLHlDQUF5QyxtQkFBbUIsaUJBQWlCLHNCQUFzQixhQUFhLGlCQUFpQiw0QkFBNEIsbUJBQW1CLHVCQUF1QixnREFBZ0QsaUJBQWlCLFVBQVUsb0ZBQW9GLG1HQUFtRyx1R0FBdUcsMkNBQTJDLDJDQUEyQyx1Q0FBdUMsbURBQW1ELHNEQUFzRCx1Q0FBdUMsb0VBQW9FLDZPQUE2TyxtQ0FBbUMsbUJBQW1CLHFCQUFxQiwwQkFBMEIsZ0VBQWdFLG1EQUFtRCx1QkFBdUIsMkVBQTJFLHFEQUFxRCx5QkFBeUIsc0RBQXNELHNCQUFzQix1QkFBdUIsb0RBQW9ELHdCQUF3QixNQUFNLGFBQWEsc0JBQXNCLG1CQUFtQix1QkFBdUIsWUFBWSxrQkFBa0IsdUJBQXVCLDhEQUE4RCxPQUFPLGFBQWEsZUFBZSxtQkFBbUIseUJBQXlCLG1CQUFtQixrQkFBa0IsNkJBQTZCLCtCQUErQiw4QkFBOEIsbUJBQW1CLHdCQUF3QixpREFBaUQsMEJBQTBCLGFBQWEseUVBQXlFLHFQQUFxUCwwQkFBMEIsZ0RBQWdELCtCQUErQixjQUFjLGdEQUFnRCxhQUFhLGtCQUFrQixhQUFhLDRCQUE0QixlQUFlLG1CQUFtQiw2QkFBNkIs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O0FBQ0E7QUFDQTtBQUNBOztBQUVvSCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLWFsZXJ0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9pbnRlcmFjdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGUgYXMgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudCwgdCBhcyB0b0FyaWFCb29sZWFuLCBnIGFzIGdldFNsb3R0ZWQsIGggYXMgc2V0UmVxdWVzdGVkSWNvbiB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0SWNvblNjYWxlIH0gZnJvbSAnLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHsgYSBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBzIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRGb2N1c2FibGUgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkLCBuIGFzIG51bWJlclN0cmluZ0Zvcm1hdHRlciB9IGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCB7IG8gYXMgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQgfSBmcm9tICcuL29wZW5DbG9zZUNvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcywgdSBhcyB1cGRhdGVNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IEsgYXMgS2luZEljb25zIH0gZnJvbSAnLi9yZXNvdXJjZXMuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDMgfSBmcm9tICcuL2NoaXAuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL2ljb24uanMnO1xuXG5jb25zdCBEVVJBVElPTlMgPSB7XG4gIHNsb3c6IDE0MDAwLFxuICBtZWRpdW06IDEwMDAwLFxuICBmYXN0OiA2MDAwLFxufTtcbmNvbnN0IFNMT1RTID0ge1xuICBhY3Rpb25zRW5kOiBcImFjdGlvbnMtZW5kXCIsXG4gIHRpdGxlOiBcInRpdGxlXCIsXG4gIG1lc3NhZ2U6IFwibWVzc2FnZVwiLFxuICBsaW5rOiBcImxpbmtcIixcbn07XG5jb25zdCBDU1MgPSB7XG4gIGFjdGlvbnNFbmQ6IFwiYWN0aW9ucy1lbmRcIixcbiAgY2xvc2U6IFwiY2xvc2VcIixcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuICBjb250YWluZXJCb3R0b206IFwiY29udGFpbmVyLS1ib3R0b21cIixcbiAgY29udGFpbmVyQm90dG9tRW5kOiBcImNvbnRhaW5lci0tYm90dG9tLWVuZFwiLFxuICBjb250YWluZXJCb3R0b21TdGFydDogXCJjb250YWluZXItLWJvdHRvbS1zdGFydFwiLFxuICBjb250YWluZXJRdWV1ZWQ6IFwiY29udGFpbmVyLS1xdWV1ZWRcIixcbiAgY29udGFpbmVyVG9wOiBcImNvbnRhaW5lci0tdG9wXCIsXG4gIGNvbnRhaW5lclRvcEVuZDogXCJjb250YWluZXItLXRvcC1lbmRcIixcbiAgY29udGFpbmVyVG9wU3RhcnQ6IFwiY29udGFpbmVyLS10b3Atc3RhcnRcIixcbiAgY29udGVudDogXCJjb250ZW50XCIsXG4gIGNvbnRlbnRDb250YWluZXI6IFwiY29udGVudC1jb250YWluZXJcIixcbiAgZGlzbWlzc1Byb2dyZXNzOiBcImRpc21pc3MtcHJvZ3Jlc3NcIixcbiAgZm9vdGVyOiBcImZvb3RlclwiLFxuICBpY29uOiBcImljb25cIixcbiAgY29udGFpbmVyU2xvdHRlZEluU2hlbGw6IFwiY29udGFpbmVyLS1zbG90dGVkLWluLXNoZWxsXCIsXG4gIHF1ZXVlQ291bnQ6IFwicXVldWUtY291bnRcIixcbiAgcXVldWVDb3VudEFjdGl2ZTogXCJxdWV1ZS1jb3VudC0tYWN0aXZlXCIsXG4gIHRleHRDb250YWluZXI6IFwidGV4dC1jb250YWluZXJcIixcbn07XG5cbmNvbnN0IGFsZXJ0Q3NzID0gXCI6aG9zdHstLWNhbGNpdGUtYWxlcnQtZWRnZS1kaXN0YW5jZToycmVtO2Rpc3BsYXk6YmxvY2t9LmNvbnRhaW5lcntwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC10b2FzdCk7bWFyZ2luLWlubGluZTphdXRvO21hcmdpbi1ibG9jazowcHg7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO21pbi1pbmxpbmUtc2l6ZTptaW4tY29udGVudDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTt0ZXh0LWFsaWduOnN0YXJ0O29wYWNpdHk6MDstLXR3LXNoYWRvdzowIDZweCAyMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDRweCAxMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA4KTstLXR3LXNoYWRvdy1jb2xvcmVkOjAgNnB4IDIwcHggLTRweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDRweCAxMnB4IC0ycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7Y29udGFpbmVyOnJlc3BvbnNpdmUtY29udGFpbmVyL2lubGluZS1zaXplO2JvcmRlci1yYWRpdXM6dmFyKC0tY2FsY2l0ZS1ib3JkZXItcmFkaXVzKTtib3JkZXItYmxvY2stc3RhcnQ6MCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItaW5saW5lOjFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTtib3JkZXItYmxvY2stZW5kOjFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWFsZXJ0LXdpZHRoKTttYXgtaW5saW5lLXNpemU6Y2FsYygxMDAlIC0gdmFyKC0tY2FsY2l0ZS1hbGVydC1lZGdlLWRpc3RhbmNlKSAqIDIpO3RyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIGN1YmljLWJlemllcigwLjIxNSwgMC40NCwgMC40MiwgMC44OCksIG9wYWNpdHkgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIGN1YmljLWJlemllcigwLjIxNSwgMC40NCwgMC40MiwgMC44OCksIGFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0fS5jb250YWluZXItLWJvdHRvbSwuY29udGFpbmVyLS10b3B7aW5zZXQtaW5saW5lLWVuZDowO2luc2V0LWlubGluZS1zdGFydDowfS5jb250YWluZXJbY2xhc3MqPWJvdHRvbV17dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIHZhcigtLWNhbGNpdGUtYWxlcnQtZWRnZS1kaXN0YW5jZSksIDApO2luc2V0LWJsb2NrLWVuZDp2YXIoLS1jYWxjaXRlLWFsZXJ0LWVkZ2UtZGlzdGFuY2UpfS5jb250YWluZXJbY2xhc3MqPXRvcF17dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIGNhbGMoLTEgKiB2YXIoLS1jYWxjaXRlLWFsZXJ0LWVkZ2UtZGlzdGFuY2UpKSwgMCk7aW5zZXQtYmxvY2stc3RhcnQ6dmFyKC0tY2FsY2l0ZS1hbGVydC1lZGdlLWRpc3RhbmNlKX0uY29udGFpbmVyW2NsYXNzKj1zdGFydF17aW5zZXQtaW5saW5lLXN0YXJ0OnZhcigtLWNhbGNpdGUtYWxlcnQtZWRnZS1kaXN0YW5jZSk7aW5zZXQtaW5saW5lLWVuZDphdXRvfS5jb250YWluZXJbY2xhc3MqPWVuZF17aW5zZXQtaW5saW5lLWVuZDp2YXIoLS1jYWxjaXRlLWFsZXJ0LWVkZ2UtZGlzdGFuY2UpO2luc2V0LWlubGluZS1zdGFydDphdXRvfS5pY29ue2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzowcHg7bWFyZ2luLWJsb2NrOmF1dG87bWFyZ2luLWlubGluZS1lbmQ6YXV0bztwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1jYWxjaXRlLWFsZXJ0LXNwYWNpbmctdG9rZW4tbGFyZ2UpfS5jbG9zZXtkaXNwbGF5OmZsZXg7Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDthbGlnbi1zZWxmOnN0cmV0Y2g7Ym9yZGVyLXN0eWxlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lO3BhZGRpbmc6dmFyKC0tY2FsY2l0ZS1hbGVydC1zcGFjaW5nLXRva2VuLWxhcmdlKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fS5jbG9zZTpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9LmNsb3NlOmhvdmVyLC5jbG9zZTpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmNsb3NlOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKX0ucXVldWUtY291bnR7dmlzaWJpbGl0eTpoaWRkZW47ZGlzcGxheTpmbGV4O21pbi1pbmxpbmUtc2l6ZTptaW4tY29udGVudDtjdXJzb3I6ZGVmYXVsdDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDthbGlnbi1zZWxmOnN0cmV0Y2g7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7b3BhY2l0eTowO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO2JvcmRlci1pbmxpbmU6MCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItc3RhcnQtZW5kLXJhZGl1czowfS5xdWV1ZS1jb3VudC0tYWN0aXZle3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjF9LmRpc21pc3MtcHJvZ3Jlc3N7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jaztpbmxpbmUtc2l6ZToxMDAlO292ZXJmbG93OmhpZGRlbjtpbnNldC1pbmxpbmU6MDtpbnNldC1ibG9jay1zdGFydDotMnB4O2Jsb2NrLXNpemU6MnB4O2JvcmRlci1yYWRpdXM6dmFyKC0tY2FsY2l0ZS1ib3JkZXItcmFkaXVzKSB2YXIoLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMpIDAgMH0uZGlzbWlzcy1wcm9ncmVzczphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTtpbnNldC1ibG9jay1zdGFydDowcHg7ZGlzcGxheTpibG9jaztibG9jay1zaXplOjJweDtjb250ZW50OlxcXCJcXFwiO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS1hbGVydC1kaXNtaXNzLXByb2dyZXNzLWJhY2tncm91bmQpO2luc2V0LWlubGluZS1lbmQ6MH0uYWN0aW9ucy1lbmR7ZGlzcGxheTpmbGV4O2FsaWduLXNlbGY6c3RyZXRjaH0udGV4dC1jb250YWluZXJ7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDttaW4taW5saW5lLXNpemU6MHB4O2ZsZXg6MSAxIGF1dG87ZmxleC1kaXJlY3Rpb246Y29sdW1uO292ZXJmbG93LXdyYXA6YnJlYWstd29yZDtwYWRkaW5nLWJsb2NrOnZhcigtLWNhbGNpdGUtYWxlcnQtc3BhY2luZy10b2tlbi1zbWFsbCk7cGFkZGluZy1pbmxpbmU6dmFyKC0tY2FsY2l0ZS1hbGVydC1zcGFjaW5nLXRva2VuLWxhcmdlKSB2YXIoLS1jYWxjaXRlLWFsZXJ0LXNwYWNpbmctdG9rZW4tc21hbGwpfS5mb290ZXJ7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOmF1dG87anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2FsaWduLXNlbGY6c3RyZXRjaDtwYWRkaW5nLWJsb2NrLXN0YXJ0OjFweDtibG9jay1zaXplOmluaGVyaXR9Omhvc3QoW3NjYWxlPXNdKXstLWNhbGNpdGUtYWxlcnQtd2lkdGg6NDBlbTstLWNhbGNpdGUtYWxlcnQtc3BhY2luZy10b2tlbi1zbWFsbDowLjVyZW07LS1jYWxjaXRlLWFsZXJ0LXNwYWNpbmctdG9rZW4tbGFyZ2U6MC43NXJlbTstLWNhbGNpdGUtYWxlcnQtZm9vdGVyLWhlaWdodDoycmVtOy0tY2FsY2l0ZS1hbGVydC1mb290ZXItZGl2aWRlci1nYXA6MC4xMjVyZW19Omhvc3QoW3NjYWxlPXNdKSBzbG90W25hbWU9dGl0bGVdOjpzbG90dGVkKCopLDpob3N0KFtzY2FsZT1zXSkgKjo6c2xvdHRlZChbc2xvdD10aXRsZV0pe2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3QoW3NjYWxlPXNdKSBzbG90W25hbWU9bWVzc2FnZV06OnNsb3R0ZWQoKiksOmhvc3QoW3NjYWxlPXNdKSAqOjpzbG90dGVkKFtzbG90PW1lc3NhZ2VdKXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjEuMzc1fTpob3N0KFtzY2FsZT1zXSkgc2xvdFtuYW1lPWxpbmtdOjpzbG90dGVkKCopLDpob3N0KFtzY2FsZT1zXSkgKjo6c2xvdHRlZChbc2xvdD1saW5rXSl7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxLjM3NX06aG9zdChbc2NhbGU9c10pIC5xdWV1ZS1jb3VudHttYXJnaW4taW5saW5lOjAuNXJlbX06aG9zdChbc2NhbGU9c10pIC5jb250YWluZXJ7LS1jYWxjaXRlLWFsZXJ0LW1pbi1oZWlnaHQ6My41cmVtfTpob3N0KFtzY2FsZT1tXSl7LS1jYWxjaXRlLWFsZXJ0LXdpZHRoOjUwZW07LS1jYWxjaXRlLWFsZXJ0LXNwYWNpbmctdG9rZW4tc21hbGw6MC43NXJlbTstLWNhbGNpdGUtYWxlcnQtc3BhY2luZy10b2tlbi1sYXJnZToxcmVtOy0tY2FsY2l0ZS1hbGVydC1mb290ZXItaGVpZ2h0OjNyZW07LS1jYWxjaXRlLWFsZXJ0LWZvb3Rlci1kaXZpZGVyLWdhcDowLjI1cmVtfTpob3N0KFtzY2FsZT1tXSkgc2xvdFtuYW1lPXRpdGxlXTo6c2xvdHRlZCgqKSw6aG9zdChbc2NhbGU9bV0pICo6OnNsb3R0ZWQoW3Nsb3Q9dGl0bGVdKXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3QoW3NjYWxlPW1dKSBzbG90W25hbWU9bWVzc2FnZV06OnNsb3R0ZWQoKiksOmhvc3QoW3NjYWxlPW1dKSAqOjpzbG90dGVkKFtzbG90PW1lc3NhZ2VdKXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjEuMzc1fTpob3N0KFtzY2FsZT1tXSkgc2xvdFtuYW1lPWxpbmtdOjpzbG90dGVkKCopLDpob3N0KFtzY2FsZT1tXSkgKjo6c2xvdHRlZChbc2xvdD1saW5rXSl7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxLjM3NX06aG9zdChbc2NhbGU9bV0pIC5xdWV1ZS1jb3VudHttYXJnaW4taW5saW5lOjAuNzVyZW19Omhvc3QoW3NjYWxlPW1dKSAuY29udGFpbmVyey0tY2FsY2l0ZS1hbGVydC1taW4taGVpZ2h0OjQuMTg3NXJlbX06aG9zdChbc2NhbGU9bF0pey0tY2FsY2l0ZS1hbGVydC13aWR0aDo2MGVtOy0tY2FsY2l0ZS1hbGVydC1zcGFjaW5nLXRva2VuLXNtYWxsOjFyZW07LS1jYWxjaXRlLWFsZXJ0LXNwYWNpbmctdG9rZW4tbGFyZ2U6MS4yNXJlbTstLWNhbGNpdGUtYWxlcnQtZm9vdGVyLWhlaWdodDo0cmVtOy0tY2FsY2l0ZS1hbGVydC1mb290ZXItZGl2aWRlci1nYXA6MC41cmVtfTpob3N0KFtzY2FsZT1sXSkgc2xvdFtuYW1lPXRpdGxlXTo6c2xvdHRlZCgqKSw6aG9zdChbc2NhbGU9bF0pICo6OnNsb3R0ZWQoW3Nsb3Q9dGl0bGVdKXttYXJnaW4tYmxvY2stZW5kOjAuMjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTEpO2xpbmUtaGVpZ2h0OjEuMzc1fTpob3N0KFtzY2FsZT1sXSkgc2xvdFtuYW1lPW1lc3NhZ2VdOjpzbG90dGVkKCopLDpob3N0KFtzY2FsZT1sXSkgKjo6c2xvdHRlZChbc2xvdD1tZXNzYWdlXSl7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMzc1fTpob3N0KFtzY2FsZT1sXSkgc2xvdFtuYW1lPWxpbmtdOjpzbG90dGVkKCopLDpob3N0KFtzY2FsZT1sXSkgKjo6c2xvdHRlZChbc2xvdD1saW5rXSl7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMzc1fTpob3N0KFtzY2FsZT1sXSkgLnF1ZXVlLWNvdW50e21hcmdpbi1pbmxpbmU6MXJlbX06aG9zdChbc2NhbGU9bF0pIC5jb250YWluZXJ7LS1jYWxjaXRlLWFsZXJ0LW1pbi1oZWlnaHQ6NS42MjVyZW19Omhvc3QoW29wZW5dKSAuY29udGFpbmVyOm5vdCguY29udGFpbmVyLS1xdWV1ZWQpe2JvcmRlci1ibG9jay1zdGFydC13aWR0aDoycHg7b3BhY2l0eToxO3BvaW50ZXItZXZlbnRzOmluaXRpYWx9Omhvc3QoW29wZW5dKSAuY29udGFpbmVyOm5vdCguY29udGFpbmVyLS1xdWV1ZWQpW2NsYXNzKj1ib3R0b21de3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCBjYWxjKC0xICogdmFyKC0tY2FsY2l0ZS1hbGVydC1lZGdlLWRpc3RhbmNlKSksIGluaGVyaXQpfTpob3N0KFtvcGVuXSkgLmNvbnRhaW5lcjpub3QoLmNvbnRhaW5lci0tcXVldWVkKVtjbGFzcyo9dG9wXXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgdmFyKC0tY2FsY2l0ZS1hbGVydC1lZGdlLWRpc3RhbmNlKSwgaW5oZXJpdCl9Omhvc3QoW2F1dG8tY2xvc2VdKT4ucXVldWUtY291bnR7Ym9yZGVyLWlubGluZS1lbmQ6MCBzb2xpZCB0cmFuc3BhcmVudH1zbG90W25hbWU9dGl0bGVdOjpzbG90dGVkKCopLCo6OnNsb3R0ZWQoW3Nsb3Q9dGl0bGVdKXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4zNzU7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX1zbG90W25hbWU9bWVzc2FnZV06OnNsb3R0ZWQoKiksKjo6c2xvdHRlZChbc2xvdD1tZXNzYWdlXSl7bWFyZ2luOjBweDtkaXNwbGF5OmlubGluZTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjEuMzc1O2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbm9ybWFsKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7bWFyZ2luLWlubGluZS1lbmQ6MC41cmVtfXNsb3RbbmFtZT1saW5rXTo6c2xvdHRlZCgqKSwqOjpzbG90dGVkKFtzbG90PWxpbmtdKXtkaXNwbGF5OmlubGluZS1mbGV4O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC1saW5rKX06aG9zdChba2luZD1icmFuZF0pIC5jb250YWluZXJ7Ym9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFtraW5kPWJyYW5kXSkgLmNvbnRhaW5lciAuaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChba2luZD1pbmZvXSkgLmNvbnRhaW5lcntib3JkZXItYmxvY2stc3RhcnQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1pbmZvKX06aG9zdChba2luZD1pbmZvXSkgLmNvbnRhaW5lciAuaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWluZm8pfTpob3N0KFtraW5kPWRhbmdlcl0pIC5jb250YWluZXJ7Ym9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyKX06aG9zdChba2luZD1kYW5nZXJdKSAuY29udGFpbmVyIC5pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyKX06aG9zdChba2luZD1zdWNjZXNzXSkgLmNvbnRhaW5lcntib3JkZXItYmxvY2stc3RhcnQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1zdWNjZXNzKX06aG9zdChba2luZD1zdWNjZXNzXSkgLmNvbnRhaW5lciAuaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXN1Y2Nlc3MpfTpob3N0KFtraW5kPXdhcm5pbmddKSAuY29udGFpbmVye2JvcmRlci1ibG9jay1zdGFydC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXdhcm5pbmcpfTpob3N0KFtraW5kPXdhcm5pbmddKSAuY29udGFpbmVyIC5pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktd2FybmluZyl9Omhvc3QoW2F1dG8tY2xvc2UtZHVyYXRpb249ZmFzdF0pIC5kaXNtaXNzLXByb2dyZXNzOmFmdGVye2FuaW1hdGlvbjpkaXNtaXNzUHJvZ3Jlc3MgNjAwMG1zIGVhc2Utb3V0fTpob3N0KDpob3ZlclthdXRvLWNsb3NlLWR1cmF0aW9uPWZhc3RdKSAuZGlzbWlzcy1wcm9ncmVzczphZnRlcnthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWR9Omhvc3QoW2F1dG8tY2xvc2UtZHVyYXRpb249bWVkaXVtXSkgLmRpc21pc3MtcHJvZ3Jlc3M6YWZ0ZXJ7YW5pbWF0aW9uOmRpc21pc3NQcm9ncmVzcyAxMDAwMG1zIGVhc2Utb3V0fTpob3N0KDpob3ZlclthdXRvLWNsb3NlLWR1cmF0aW9uPW1lZGl1bV0pIC5kaXNtaXNzLXByb2dyZXNzOmFmdGVye2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZH06aG9zdChbYXV0by1jbG9zZS1kdXJhdGlvbj1zbG93XSkgLmRpc21pc3MtcHJvZ3Jlc3M6YWZ0ZXJ7YW5pbWF0aW9uOmRpc21pc3NQcm9ncmVzcyAxNDAwMG1zIGVhc2Utb3V0fTpob3N0KDpob3ZlclthdXRvLWNsb3NlLWR1cmF0aW9uPXNsb3ddKSAuZGlzbWlzcy1wcm9ncmVzczphZnRlcnthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWR9QGtleWZyYW1lcyBkaXNtaXNzUHJvZ3Jlc3N7MCV7aW5saW5lLXNpemU6MHB4O29wYWNpdHk6MC43NX0xMDAle2lubGluZS1zaXplOjEwMCU7b3BhY2l0eToxfX0uY29udGFpbmVyLS1zbG90dGVkLWluLXNoZWxse3Bvc2l0aW9uOmFic29sdXRlfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfTpob3N0KFtjYWxjaXRlLWh5ZHJhdGVkLWhpZGRlbl0pe3Zpc2liaWxpdHk6aGlkZGVuICFpbXBvcnRhbnQ7cG9pbnRlci1ldmVudHM6bm9uZX1cIjtcblxuY29uc3QgQWxlcnQgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZUFsZXJ0QmVmb3JlQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVBbGVydEJlZm9yZUNsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUFsZXJ0Q2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVBbGVydENsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUFsZXJ0QmVmb3JlT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUFsZXJ0QmVmb3JlT3BlblwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVBbGVydE9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVBbGVydE9wZW5cIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxBbGVydFN5bmMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbEFsZXJ0U3luY1wiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbEFsZXJ0UmVnaXN0ZXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbEFsZXJ0UmVnaXN0ZXJcIiwgNik7XG4gICAgdGhpcy5hdXRvQ2xvc2VUaW1lb3V0SWQgPSBudWxsO1xuICAgIHRoaXMudG90YWxPcGVuVGltZSA9IDA7XG4gICAgdGhpcy50b3RhbEhvdmVyVGltZSA9IDA7XG4gICAgdGhpcy5vcGVuVHJhbnNpdGlvblByb3AgPSBcIm9wYWNpdHlcIjtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbkVsID0gZWw7XG4gICAgfTtcbiAgICAvKiogY2xvc2UgYW5kIGVtaXQgY2FsY2l0ZUludGVybmFsQWxlcnRTeW5jIGV2ZW50IHdpdGggdGhlIHVwZGF0ZWQgcXVldWUgcGF5bG9hZCAqL1xuICAgIHRoaXMuY2xvc2VBbGVydCA9ICgpID0+IHtcbiAgICAgIHRoaXMuYXV0b0Nsb3NlVGltZW91dElkID0gbnVsbDtcbiAgICAgIHRoaXMucXVldWVkID0gZmFsc2U7XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMucXVldWUgPSB0aGlzLnF1ZXVlLmZpbHRlcigoZWwpID0+IGVsICE9PSB0aGlzLmVsKTtcbiAgICAgIHRoaXMuZGV0ZXJtaW5lQWN0aXZlQWxlcnQoKTtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsQWxlcnRTeW5jLmVtaXQoeyBxdWV1ZTogdGhpcy5xdWV1ZSB9KTtcbiAgICB9O1xuICAgIHRoaXMuYWN0aW9uc0VuZFNsb3RDaGFuZ2VIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc0VuZEFjdGlvbnMgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlTW91c2VPdmVyID0gKCkgPT4ge1xuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLmF1dG9DbG9zZVRpbWVvdXRJZCk7XG4gICAgICB0aGlzLnRvdGFsT3BlblRpbWUgPSBEYXRlLm5vdygpIC0gdGhpcy5pbml0aWFsT3BlblRpbWU7XG4gICAgICB0aGlzLmxhc3RNb3VzZU92ZXJCZWdpbiA9IERhdGUubm93KCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBob3ZlckR1cmF0aW9uID0gRGF0ZS5ub3coKSAtIHRoaXMubGFzdE1vdXNlT3ZlckJlZ2luO1xuICAgICAgY29uc3QgdGltZVJlbWFpbmluZyA9IERVUkFUSU9OU1t0aGlzLmF1dG9DbG9zZUR1cmF0aW9uXSAtIHRoaXMudG90YWxPcGVuVGltZSArIHRoaXMudG90YWxIb3ZlclRpbWU7XG4gICAgICB0aGlzLnRvdGFsSG92ZXJUaW1lID0gdGhpcy50b3RhbEhvdmVyVGltZSA/IGhvdmVyRHVyYXRpb24gKyB0aGlzLnRvdGFsSG92ZXJUaW1lIDogaG92ZXJEdXJhdGlvbjtcbiAgICAgIHRoaXMuYXV0b0Nsb3NlVGltZW91dElkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5jbG9zZUFsZXJ0KCksIHRpbWVSZW1haW5pbmcpO1xuICAgIH07XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5hdXRvQ2xvc2UgPSBmYWxzZTtcbiAgICB0aGlzLmF1dG9DbG9zZUR1cmF0aW9uID0gXCJtZWRpdW1cIjtcbiAgICB0aGlzLmtpbmQgPSBcImJyYW5kXCI7XG4gICAgdGhpcy5pY29uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvbkZsaXBSdGwgPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGxhY2VtZW50ID0gXCJib3R0b21cIjtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zbG90dGVkSW5TaGVsbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gICAgdGhpcy5oYXNFbmRBY3Rpb25zID0gZmFsc2U7XG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgIHRoaXMucXVldWVMZW5ndGggPSAwO1xuICAgIHRoaXMucXVldWVkID0gZmFsc2U7XG4gIH1cbiAgb3BlbkhhbmRsZXIoKSB7XG4gICAgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gICAgaWYgKHRoaXMub3BlbiAmJiAhdGhpcy5xdWV1ZWQpIHtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsQWxlcnRSZWdpc3Rlci5lbWl0KCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICB0aGlzLnF1ZXVlID0gdGhpcy5xdWV1ZS5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gdGhpcy5lbCk7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbEFsZXJ0U3luYy5lbWl0KHsgcXVldWU6IHRoaXMucXVldWUgfSk7XG4gICAgfVxuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICB1cGRhdGVEdXJhdGlvbigpIHtcbiAgICBpZiAodGhpcy5hdXRvQ2xvc2UgJiYgdGhpcy5hdXRvQ2xvc2VUaW1lb3V0SWQpIHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5hdXRvQ2xvc2VUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5hdXRvQ2xvc2VUaW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLmNsb3NlQWxlcnQoKSwgRFVSQVRJT05TW3RoaXMuYXV0b0Nsb3NlRHVyYXRpb25dKTtcbiAgICB9XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgY29uc3Qgb3BlbiA9IHRoaXMub3BlbjtcbiAgICBpZiAob3BlbiAmJiAhdGhpcy5xdWV1ZWQpIHtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsQWxlcnRSZWdpc3Rlci5lbWl0KCk7XG4gICAgfVxuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2FsY2l0ZUludGVybmFsQWxlcnRVbnJlZ2lzdGVyXCIsIHtcbiAgICAgIGRldGFpbDogeyBhbGVydDogdGhpcy5lbCB9LFxuICAgIH0pKTtcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuYXV0b0Nsb3NlVGltZW91dElkKTtcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucXVldWVUaW1lb3V0KTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLnNsb3R0ZWRJblNoZWxsID0gZmFsc2U7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICBzaWduRGlzcGxheTogXCJhbHdheXNcIixcbiAgICB9O1xuICAgIGNvbnN0IHsgb3BlbiwgYXV0b0Nsb3NlLCBsYWJlbCwgcGxhY2VtZW50LCBxdWV1ZWQgfSA9IHRoaXM7XG4gICAgY29uc3Qgcm9sZSA9IGF1dG9DbG9zZSA/IFwiYWxlcnRcIiA6IFwiYWxlcnRkaWFsb2dcIjtcbiAgICBjb25zdCBoaWRkZW4gPSAhb3BlbjtcbiAgICBjb25zdCBlZmZlY3RpdmVJY29uID0gc2V0UmVxdWVzdGVkSWNvbihLaW5kSWNvbnMsIHRoaXMuaWNvbiwgdGhpcy5raW5kKTtcbiAgICBjb25zdCBoYXNRdWV1ZWRBbGVydHMgPSB0aGlzLnF1ZXVlTGVuZ3RoID4gMTtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtaGlkZGVuXCI6IHRvQXJpYUJvb2xlYW4oaGlkZGVuKSwgXCJhcmlhLWxhYmVsXCI6IGxhYmVsLCBcImNhbGNpdGUtaHlkcmF0ZWQtaGlkZGVuXCI6IGhpZGRlbiwgcm9sZTogcm9sZSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5jb250YWluZXJdOiB0cnVlLFxuICAgICAgICBbQ1NTLmNvbnRhaW5lclF1ZXVlZF06IHF1ZXVlZCxcbiAgICAgICAgW2Ake0NTUy5jb250YWluZXJ9LS0ke3BsYWNlbWVudH1gXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5jb250YWluZXJTbG90dGVkSW5TaGVsbF06IHRoaXMuc2xvdHRlZEluU2hlbGwsXG4gICAgICB9LCBvblBvaW50ZXJFbnRlcjogdGhpcy5hdXRvQ2xvc2UgJiYgdGhpcy5hdXRvQ2xvc2VUaW1lb3V0SWQgPyB0aGlzLmhhbmRsZU1vdXNlT3ZlciA6IG51bGwsIG9uUG9pbnRlckxlYXZlOiB0aGlzLmF1dG9DbG9zZSAmJiB0aGlzLmF1dG9DbG9zZVRpbWVvdXRJZCA/IHRoaXMuaGFuZGxlTW91c2VMZWF2ZSA6IG51bGwsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiB0aGlzLnNldFRyYW5zaXRpb25FbCB9LCBlZmZlY3RpdmVJY29uICYmIHRoaXMucmVuZGVySWNvbihlZmZlY3RpdmVJY29uKSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MudGV4dENvbnRhaW5lciB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLnRpdGxlIH0pLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLm1lc3NhZ2UgfSksIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMubGluayB9KSksIHRoaXMucmVuZGVyQWN0aW9uc0VuZCgpLCBoYXNRdWV1ZWRBbGVydHMgPyB0aGlzLnJlbmRlclF1ZXVlQ291bnQoKSA6IG51bGwsIHRoaXMucmVuZGVyQ2xvc2VCdXR0b24oKSwgb3BlbiAmJiAhcXVldWVkICYmIGF1dG9DbG9zZSA/IGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmRpc21pc3NQcm9ncmVzcyB9KSA6IG51bGwpKSk7XG4gIH1cbiAgcmVuZGVyQ2xvc2VCdXR0b24oKSB7XG4gICAgcmV0dXJuIChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMuY2xvc2UsIGNsYXNzOiBDU1MuY2xvc2UsIGtleTogXCJjbG9zZVwiLCBvbkNsaWNrOiB0aGlzLmNsb3NlQWxlcnQsIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLmNsb3NlQnV0dG9uID0gZWwpIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBcInhcIiwgc2NhbGU6IGdldEljb25TY2FsZSh0aGlzLnNjYWxlKSB9KSkpO1xuICB9XG4gIHJlbmRlclF1ZXVlQ291bnQoKSB7XG4gICAgY29uc3QgcXVldWVOdW1iZXIgPSB0aGlzLnF1ZXVlTGVuZ3RoID4gMiA/IHRoaXMucXVldWVMZW5ndGggLSAxIDogMTtcbiAgICBjb25zdCBxdWV1ZVRleHQgPSBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0dGVyLmZvcm1hdChxdWV1ZU51bWJlcik7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5xdWV1ZUNvdW50XTogdHJ1ZSxcbiAgICAgICAgW0NTUy5xdWV1ZUNvdW50QWN0aXZlXTogdGhpcy5xdWV1ZUxlbmd0aCA+IDEsXG4gICAgICB9LCBrZXk6IFwicXVldWUtY291bnRcIiB9LCBoKFwiY2FsY2l0ZS1jaGlwXCIsIHsgc2NhbGU6IHRoaXMuc2NhbGUsIHZhbHVlOiBxdWV1ZVRleHQgfSwgcXVldWVUZXh0KSkpO1xuICB9XG4gIHJlbmRlckFjdGlvbnNFbmQoKSB7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5hY3Rpb25zRW5kIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuYWN0aW9uc0VuZCwgb25TbG90Y2hhbmdlOiB0aGlzLmFjdGlvbnNFbmRTbG90Q2hhbmdlSGFuZGxlciB9KSkpO1xuICB9XG4gIHJlbmRlckljb24oaWNvbikge1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuaWNvbiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgZmxpcFJ0bDogdGhpcy5pY29uRmxpcFJ0bCwgaWNvbjogaWNvbiwgc2NhbGU6IGdldEljb25TY2FsZSh0aGlzLnNjYWxlKSB9KSkpO1xuICB9XG4gIC8vIHdoZW4gYW4gYWxlcnQgaXMgb3BlbmVkIG9yIGNsb3NlZCwgdXBkYXRlIHF1ZXVlIGFuZCBkZXRlcm1pbmUgYWN0aXZlIGFsZXJ0XG4gIGFsZXJ0U3luYyhldmVudCkge1xuICAgIGlmICh0aGlzLnF1ZXVlICE9PSBldmVudC5kZXRhaWwucXVldWUpIHtcbiAgICAgIHRoaXMucXVldWUgPSBldmVudC5kZXRhaWwucXVldWU7XG4gICAgfVxuICAgIHRoaXMucXVldWVMZW5ndGggPSB0aGlzLnF1ZXVlLmxlbmd0aDtcbiAgICB0aGlzLmRldGVybWluZUFjdGl2ZUFsZXJ0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgLy8gd2hlbiBhbiBhbGVydCBpcyBmaXJzdCByZWdpc3RlcmVkLCB0cmlnZ2VyIGEgcXVldWUgc3luY1xuICBhbGVydFJlZ2lzdGVyKCkge1xuICAgIGlmICh0aGlzLm9wZW4gJiYgIXRoaXMucXVldWUuaW5jbHVkZXModGhpcy5lbCkpIHtcbiAgICAgIHRoaXMucXVldWVkID0gdHJ1ZTtcbiAgICAgIHRoaXMucXVldWUucHVzaCh0aGlzLmVsKTtcbiAgICB9XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxBbGVydFN5bmMuZW1pdCh7IHF1ZXVlOiB0aGlzLnF1ZXVlIH0pO1xuICAgIHRoaXMuZGV0ZXJtaW5lQWN0aXZlQWxlcnQoKTtcbiAgfVxuICAvLyBFdmVudCBpcyBkaXNwYXRjaGVkIG9uIHRoZSB3aW5kb3cgYmVjYXVzZSB0aGUgZWxlbWVudCBpcyBub3QgaW4gdGhlIERPTSBzbyBidWJibGluZyB3b24ndCBvY2N1ci5cbiAgYWxlcnRVbnJlZ2lzdGVyKGV2ZW50KSB7XG4gICAgY29uc3QgcXVldWUgPSB0aGlzLnF1ZXVlLmZpbHRlcigoZWwpID0+IGVsICE9PSBldmVudC5kZXRhaWwuYWxlcnQpO1xuICAgIHRoaXMucXVldWUgPSBxdWV1ZTtcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjYWxjaXRlSW50ZXJuYWxBbGVydFN5bmNcIiwge1xuICAgICAgZGV0YWlsOiB7IHF1ZXVlIH0sXG4gICAgfSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIFwiY2xvc2VcIiBidXR0b24gKHRoZSBmaXJzdCBmb2N1c2FibGUgaXRlbSkuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAgICBjb25zdCBhbGVydExpbmtFbCA9IGdldFNsb3R0ZWQodGhpcy5lbCwgeyBzZWxlY3RvcjogXCJjYWxjaXRlLWxpbmtcIiB9KTtcbiAgICBpZiAoIXRoaXMuY2xvc2VCdXR0b24gJiYgIWFsZXJ0TGlua0VsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2UgaWYgKGFsZXJ0TGlua0VsKSB7XG4gICAgICByZXR1cm4gYWxlcnRMaW5rRWwuc2V0Rm9jdXMoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5jbG9zZUJ1dHRvbikge1xuICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5mb2N1cygpO1xuICAgIH1cbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8qKiBkZXRlcm1pbmUgd2hpY2ggYWxlcnQgaXMgYWN0aXZlICovXG4gIGRldGVybWluZUFjdGl2ZUFsZXJ0KCkge1xuICAgIGlmICh0aGlzLnF1ZXVlPy5bMF0gPT09IHRoaXMuZWwpIHtcbiAgICAgIHRoaXMub3BlbkFsZXJ0KCk7XG4gICAgICBpZiAodGhpcy5hdXRvQ2xvc2UgJiYgIXRoaXMuYXV0b0Nsb3NlVGltZW91dElkKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbE9wZW5UaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5hdXRvQ2xvc2VUaW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLmNsb3NlQWxlcnQoKSwgRFVSQVRJT05TW3RoaXMuYXV0b0Nsb3NlRHVyYXRpb25dKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIG9uQmVmb3JlT3BlbigpIHtcbiAgICB0aGlzLmNhbGNpdGVBbGVydEJlZm9yZU9wZW4uZW1pdCgpO1xuICB9XG4gIG9uT3BlbigpIHtcbiAgICB0aGlzLmNhbGNpdGVBbGVydE9wZW4uZW1pdCgpO1xuICB9XG4gIG9uQmVmb3JlQ2xvc2UoKSB7XG4gICAgdGhpcy5jYWxjaXRlQWxlcnRCZWZvcmVDbG9zZS5lbWl0KCk7XG4gIH1cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNhbGNpdGVBbGVydENsb3NlLmVtaXQoKTtcbiAgfVxuICAvKiogcmVtb3ZlIHF1ZXVlZCBjbGFzcyBhZnRlciBhbmltYXRpb24gY29tcGxldGVzICovXG4gIG9wZW5BbGVydCgpIHtcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucXVldWVUaW1lb3V0KTtcbiAgICB0aGlzLnF1ZXVlVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+ICh0aGlzLnF1ZXVlZCA9IGZhbHNlKSwgMzAwKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwib3BlblwiOiBbXCJvcGVuSGFuZGxlclwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImF1dG9DbG9zZUR1cmF0aW9uXCI6IFtcInVwZGF0ZUR1cmF0aW9uXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBhbGVydENzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1hbGVydFwiLCB7XG4gICAgXCJvcGVuXCI6IFsxNTQwXSxcbiAgICBcImF1dG9DbG9zZVwiOiBbNTE2LCBcImF1dG8tY2xvc2VcIl0sXG4gICAgXCJhdXRvQ2xvc2VEdXJhdGlvblwiOiBbNTEzLCBcImF1dG8tY2xvc2UtZHVyYXRpb25cIl0sXG4gICAgXCJraW5kXCI6IFs1MTNdLFxuICAgIFwiaWNvblwiOiBbNTIwXSxcbiAgICBcImljb25GbGlwUnRsXCI6IFs1MTYsIFwiaWNvbi1mbGlwLXJ0bFwiXSxcbiAgICBcImxhYmVsXCI6IFsxXSxcbiAgICBcIm51bWJlcmluZ1N5c3RlbVwiOiBbNTEzLCBcIm51bWJlcmluZy1zeXN0ZW1cIl0sXG4gICAgXCJwbGFjZW1lbnRcIjogWzUxM10sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcIm1lc3NhZ2VzXCI6IFsxMDQwXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogWzEwNDBdLFxuICAgIFwic2xvdHRlZEluU2hlbGxcIjogWzEwMjgsIFwic2xvdHRlZC1pbi1zaGVsbFwiXSxcbiAgICBcImRlZmF1bHRNZXNzYWdlc1wiOiBbMzJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFszMl0sXG4gICAgXCJoYXNFbmRBY3Rpb25zXCI6IFszMl0sXG4gICAgXCJxdWV1ZVwiOiBbMzJdLFxuICAgIFwicXVldWVMZW5ndGhcIjogWzMyXSxcbiAgICBcInF1ZXVlZFwiOiBbMzJdLFxuICAgIFwic2V0Rm9jdXNcIjogWzY0XVxuICB9LCBbWzgsIFwiY2FsY2l0ZUludGVybmFsQWxlcnRTeW5jXCIsIFwiYWxlcnRTeW5jXCJdLCBbOCwgXCJjYWxjaXRlSW50ZXJuYWxBbGVydFJlZ2lzdGVyXCIsIFwiYWxlcnRSZWdpc3RlclwiXSwgWzgsIFwiY2FsY2l0ZUludGVybmFsQWxlcnRVbnJlZ2lzdGVyXCIsIFwiYWxlcnRVbnJlZ2lzdGVyXCJdXV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWFsZXJ0XCIsIFwiY2FsY2l0ZS1jaGlwXCIsIFwiY2FsY2l0ZS1pY29uXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWFsZXJ0XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgQWxlcnQpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtY2hpcFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQzKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDIoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG5cbmNvbnN0IENhbGNpdGVBbGVydCA9IEFsZXJ0O1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IGRlZmluZUN1c3RvbUVsZW1lbnQkMTtcblxuZXhwb3J0IHsgQ2FsY2l0ZUFsZXJ0LCBkZWZpbmVDdXN0b21FbGVtZW50IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBCdWlsZCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuZnVuY3Rpb24gZ2V0VXNlckFnZW50RGF0YSgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnREYXRhO1xufVxuZnVuY3Rpb24gZ2V0VXNlckFnZW50U3RyaW5nKCkge1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIGNvbnN0IHVhRGF0YSA9IGdldFVzZXJBZ2VudERhdGEoKTtcbiAgcmV0dXJuIHVhRGF0YT8uYnJhbmRzXG4gICAgPyB1YURhdGEuYnJhbmRzLm1hcCgoeyBicmFuZCwgdmVyc2lvbiB9KSA9PiBgJHticmFuZH0vJHt2ZXJzaW9ufWApLmpvaW4oXCIgXCIpXG4gICAgOiBuYXZpZ2F0b3IudXNlckFnZW50O1xufVxuXG4vLyDimqDvuI8gYnJvd3Nlci1zbmlmZmluZyBpcyBub3QgYSBiZXN0IHByYWN0aWNlIGFuZCBzaG91bGQgYmUgYXZvaWRlZCDimqDvuI9cbmNvbnN0IGlzRmlyZWZveCA9IC9maXJlZm94L2kudGVzdChnZXRVc2VyQWdlbnRTdHJpbmcoKSk7XG5jb25zdCBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudCA9IGlzRmlyZWZveFxuICA/IG5ldyBXZWFrTWFwKClcbiAgOiBudWxsO1xuZnVuY3Rpb24gaW50ZXJjZXB0ZWRDbGljaygpIHtcbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdGhpcztcbiAgaWYgKCFkaXNhYmxlZCkge1xuICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljay5jYWxsKHRoaXMpO1xuICB9XG59XG5mdW5jdGlvbiBvblBvaW50ZXJEb3duKGV2ZW50KSB7XG4gIGNvbnN0IGludGVyYWN0aXZlRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgaWYgKGlzRmlyZWZveCAmJiAhaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGludGVyYWN0aXZlRWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gaW50ZXJhY3RpdmVFbGVtZW50O1xuICBpZiAoZGlzYWJsZWQpIHtcbiAgICAvLyBwcmV2ZW50IGNsaWNrIGZyb20gbW92aW5nIGZvY3VzIG9uIGhvc3RcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5jb25zdCBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzID0gW1wibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcImNsaWNrXCJdO1xuZnVuY3Rpb24gb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQoZXZlbnQpIHtcbiAgaWYgKGlzRmlyZWZveCAmJiAhaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGV2ZW50LnRhcmdldCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gZXZlbnQudGFyZ2V0O1xuICAvLyBwcmV2ZW50IGRpc2FsbG93ZWQgbW91c2UgZXZlbnRzIGZyb20gYmVpbmcgZW1pdHRlZCBvbiB0aGUgZGlzYWJsZWQgaG9zdCAocGVyIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvaHRtbC9pc3N1ZXMvNTg4NilcbiAgLy/imqAgd2UgZ2VuZXJhbGx5IGF2b2lkIHN0b3BwaW5nIHByb3BhZ2F0aW9uIG9mIGV2ZW50cywgYnV0IHRoaXMgaXMgbmVlZGVkIHRvIGFkaGVyZSB0byB0aGUgaW50ZW5kZWQgc3BlYyBjaGFuZ2VzIGFib3ZlIOKaoFxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5jb25zdCBjYXB0dXJlT25seU9wdGlvbnMgPSB7IGNhcHR1cmU6IHRydWUgfTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXBkYXRlcyB0aGUgaG9zdCBlbGVtZW50IHRvIHByZXZlbnQga2V5Ym9hcmQgaW50ZXJhY3Rpb24gb24gaXRzIHN1YnRyZWUgYW5kIHNldHMgdGhlIGFwcHJvcHJpYXRlIGFyaWEgYXR0cmlidXRlIGZvciBhY2Nlc3NpYmlsaXR5LlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRSZW5kZXJgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqICoqTm90ZXMqKlxuICpcbiAqIHRoaXMgdXRpbCBpcyBub3QgbmVlZGVkIGZvciBzaW1wbGUgY29tcG9uZW50cyB3aG9zZSByb290IGVsZW1lbnQgb3IgZWxlbWVudHMgYXJlIGFuIGludGVyYWN0aXZlIGNvbXBvbmVudCAoY3VzdG9tIGVsZW1lbnQgb3IgbmF0aXZlIGNvbnRyb2wpLiBGb3IgdGhvc2UgY2FzZXMsIHNldCB0aGUgYGRpc2FibGVkYCBwcm9wcyBvbiB0aGUgcm9vdCBjb21wb25lbnRzIGluc3RlYWQuXG4gKiB0ZWNobmljYWxseSwgdXNlcnMgY2FuIG92ZXJyaWRlIGB0YWJpbmRleGAgYW5kIHJlc3RvcmUga2V5Ym9hcmQgbmF2aWdhdGlvbiwgYnV0IHRoaXMgd2lsbCBiZSBjb25zaWRlcmVkIHVzZXIgZXJyb3JcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gaG9zdElzVGFiYmFibGUg4oCTIHdoZW4gc2V0IHRvIHRydWUgb3IgaXRzIHByZWRpY2F0ZSByZXR1cm5zIHRydWUsIHRoZSBob3N0IGlzIHRhYmJhYmxlIGFuZCB3aWxsIGJlIG1hbmFnZWQgYnkgdGhlIGhlbHBlci4gU2V0IHRvIFwibWFuYWdlZFwiIGZvciBjYXNlcyB3aGVyZSBhIGNvbXBvbmVudCdzIHBhcmVudCBkZXRlcm1pbmVzIHdoaWNoIGl0ZW0gaXMgdGFiYmFibGUgKGkuZS4sIHNldHMgYHRhYmluZGV4YCB0byBhbGxvdyB0YWJiaW5nKS5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlSG9zdEludGVyYWN0aW9uKGNvbXBvbmVudCwgaG9zdElzVGFiYmFibGUgPSBmYWxzZSkge1xuICBpZiAoY29tcG9uZW50LmRpc2FibGVkKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xuICAgIGlmIChjb21wb25lbnQuZWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgICBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpO1xuICBpZiAodHlwZW9mIGhvc3RJc1RhYmJhYmxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgaG9zdElzVGFiYmFibGUuY2FsbChjb21wb25lbnQpID8gXCIwXCIgOiBcIi0xXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSB0cnVlKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gZmFsc2UpIHtcbiAgICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gIH1cbiAgZWxzZSA7XG4gIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIpO1xufVxuZnVuY3Rpb24gYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmVsLmNsaWNrID0gaW50ZXJjZXB0ZWRDbGljaztcbiAgYWRkSW50ZXJhY3Rpb25MaXN0ZW5lcnMoaXNGaXJlZm94ID8gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIDogY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIGFkZEludGVyYWN0aW9uTGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgLy8gdGhpcyBwYXRoIGlzIG9ubHkgYXBwbGljYWJsZSB0byBGaXJlZm94XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG9uUG9pbnRlckRvd24sIGNhcHR1cmVPbmx5T3B0aW9ucyk7XG4gIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xufVxuZnVuY3Rpb24gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIHtcbiAgcmV0dXJuIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCkge1xuICBkZWxldGUgY29tcG9uZW50LmVsLmNsaWNrOyAvLyBmYWxsYmFjayBvbiBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2tcbiAgcmVtb3ZlSW50ZXJhY3Rpb25MaXN0ZW5lcnMoaXNGaXJlZm94ID8gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIDogY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUludGVyYWN0aW9uTGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgLy8gdGhpcyBwYXRoIGlzIG9ubHkgYXBwbGljYWJsZSB0byBGaXJlZm94XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG9uUG9pbnRlckRvd24sIGNhcHR1cmVPbmx5T3B0aW9ucyk7XG4gIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgaGVscHMgZGlzYWJsZSBjb21wb25lbnRzIGNvbnNpc3RlbnRseSBpbiBGaXJlZm94LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgIGFuZCBpcyBvbmx5IG5lZWRlZCBmb3IgRmlyZWZveCBhcyBpdCBkb2VzIG5vdCBjYWxsIGNhcHR1cmUgZXZlbnQgbGlzdGVuZXJzIGJlZm9yZSBub24tY2FwdHVyZSBvbmVzIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTczMTUwNCkuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0SW50ZXJhY3RpdmUoY29tcG9uZW50KSB7XG4gIGlmICghY29tcG9uZW50LmRpc2FibGVkIHx8ICFpc0ZpcmVmb3gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcGFyZW50ID0gY29tcG9uZW50LmVsLnBhcmVudEVsZW1lbnQgfHwgY29tcG9uZW50LmVsOyAvKiBhc3N1bWUgZWxlbWVudCBpcyBob3N0IGlmIGl0IGhhcyBubyBwYXJlbnQgd2hlbiBjb25uZWN0ZWQgKi9cbiAgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuc2V0KGNvbXBvbmVudC5lbCwgcGFyZW50KTtcbiAgYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgcmVzdG9yZXMgaW50ZXJhY3Rpdml0eSB0byBkaXNhYmxlZCBjb21wb25lbnRzIGNvbnNpc3RlbnRseSBpbiBGaXJlZm94LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2tgIGFuZCBpcyBvbmx5IG5lZWRlZCBmb3IgRmlyZWZveCBhcyBpdCBkb2VzIG5vdCBjYWxsIGNhcHR1cmUgZXZlbnQgbGlzdGVuZXJzIGJlZm9yZSBub24tY2FwdHVyZSBvbmVzIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTczMTUwNCkuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0SW50ZXJhY3RpdmUoY29tcG9uZW50KSB7XG4gIGlmICghaXNGaXJlZm94KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFsd2F5cyByZW1vdmUgb24gZGlzY29ubmVjdCBhcyByZW5kZXIgb3IgY29ubmVjdCB3aWxsIHJlc3RvcmUgaXRcbiAgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZGVsZXRlKGNvbXBvbmVudC5lbCk7XG4gIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpO1xufVxuXG5leHBvcnQgeyBjb25uZWN0SW50ZXJhY3RpdmUgYXMgYywgZGlzY29ubmVjdEludGVyYWN0aXZlIGFzIGQsIGdldFVzZXJBZ2VudFN0cmluZyBhcyBnLCB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gYXMgdSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9