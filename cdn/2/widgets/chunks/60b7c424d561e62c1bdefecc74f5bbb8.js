"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-shell-panel_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-shell-panel.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-shell-panel.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteShellPanel: () => (/* binding */ CalciteShellPanel),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditionalSlot.js */ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math.js */ "./node_modules/@esri/calcite-components/dist/components/math.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */







const CSS = {
  container: "container",
  content: "content",
  contentHeader: "content__header",
  contentBody: "content__body",
  contentFloat: "content--float",
  contentOverlay: "content--overlay",
  separator: "separator",
};
const SLOTS = {
  actionBar: "action-bar",
  header: "header",
};

const shellPanelCss = ":host{pointer-events:none;position:relative;display:flex;flex:0 1 auto;align-items:stretch;z-index:var(--calcite-shell-panel-z-index, var(--calcite-app-z-index));--calcite-shell-panel-detached-max-height:unset;--calcite-shell-panel-max-height:unset;--calcite-shell-panel-shadow-block-start-internal:0 4px 8px -1px rgba(0, 0, 0, 0.08),\n    0 2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-shell-panel-shadow-block-end-internal:0 -4px 8px -1px rgba(0, 0, 0, 0.08),\n    0 -2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-shell-panel-shadow-inline-start-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08),\n    2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-shell-panel-shadow-inline-end-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08),\n    -2px 0 4px -1px rgba(0, 0, 0, 0.04)}.calcite--rtl.content--overlay{--calcite-shell-panel-shadow-inline-start-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08),\n    -2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-shell-panel-shadow-inline-end-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08),\n    2px 0 4px -1px rgba(0, 0, 0, 0.04)}:host([layout=vertical]){z-index:var(--calcite-shell-panel-z-index, calc(var(--calcite-app-z-index) + 1))}:host([layout=vertical][display-mode=overlay]){z-index:var(--calcite-shell-panel-z-index, calc(var(--calcite-app-z-index-header) + 1))}:host([layout=vertical][width-scale=s]) .content{--calcite-shell-panel-width-internal:var(--calcite-shell-panel-width, 12vw);--calcite-shell-panel-max-width-internal:var(--calcite-shell-panel-max-width, 300px);--calcite-shell-panel-min-width-internal:var(--calcite-shell-panel-min-width, 150px)}:host([layout=vertical][width-scale=m]) .content{--calcite-shell-panel-width-internal:var(--calcite-shell-panel-width, 20vw);--calcite-shell-panel-max-width-internal:var(--calcite-shell-panel-max-width, 420px);--calcite-shell-panel-min-width-internal:var(--calcite-shell-panel-min-width, 240px)}:host([layout=vertical][width-scale=l]) .content{--calcite-shell-panel-width-internal:var(--calcite-shell-panel-width, 45vw);--calcite-shell-panel-max-width-internal:var(--calcite-shell-panel-max-width, 680px);--calcite-shell-panel-min-width-internal:var(--calcite-shell-panel-min-width, 340px)}:host([layout=horizontal][height-scale=s]) .content{--calcite-shell-panel-max-height-internal:var(\n    --calcite-shell-panel-max-height,\n    var(--calcite-shell-panel-detached-max-height, 20vh)\n  )}:host([layout=horizontal]) .content{--calcite-shell-panel-min-height-internal:var(--calcite-shell-panel-min-height, 5vh);--calcite-shell-panel-max-height-internal:var(\n    --calcite-shell-panel-max-height,\n    var(--calcite-shell-panel-detached-max-height, 30vh)\n  )}:host([layout=horizontal][height-scale=l]) .content{--calcite-shell-panel-max-height-internal:var(\n    --calcite-shell-panel-max-height,\n    var(--calcite-shell-panel-detached-max-height, 40vh)\n  )}.container{pointer-events:none;box-sizing:border-box;display:flex;flex:1 1 auto;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}.container *{box-sizing:border-box}:host([layout=horizontal]) .container{flex-direction:column}:host(:hover) .separator:not(:hover):not(:focus),:host(:focus-within) .separator:not(:hover):not(:focus){opacity:1;background-color:var(--calcite-ui-border-3)}.separator{pointer-events:auto;position:absolute;display:flex;background-color:transparent;opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;cursor:col-resize;outline:none}.separator:hover{opacity:1;background-color:var(--calcite-ui-border-2)}.separator:focus{background-color:var(--calcite-ui-brand);opacity:1}:host([layout=vertical]) .separator{inset-block:0px;block-size:100%;inline-size:0.125rem;cursor:col-resize}:host([layout=horizontal][position=start]) .separator{inset-block-end:0px}:host([layout=horizontal][position=end]) .separator{inset-block-start:0px}:host([layout=horizontal]) .separator{inset-inline-end:0px;block-size:0.125rem;inline-size:100%;cursor:row-resize}:host([layout=vertical][position=start]) .separator{inset-inline-end:-2px}:host([layout=horizontal][position=start]) .separator{inset-block-end:-2px}:host([layout=vertical][position=end]) .separator{inset-inline-start:-2px}:host([layout=horizontal][position=end]) .separator{inset-block-start:-2px}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%;inline-size:100%;flex:1 1 auto;max-block-size:unset;max-inline-size:unset}::slotted(.calcite-match-height){display:flex;flex:1 1 auto;overflow:hidden}.content{pointer-events:auto;display:flex;flex-direction:column;flex-wrap:nowrap;align-items:stretch;align-self:stretch;background-color:var(--calcite-ui-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), max-inline-size var(--calcite-animation-timing)}:host([layout=vertical]) .content{inline-size:var(--calcite-shell-panel-width-internal);max-inline-size:var(--calcite-shell-panel-max-width-internal);min-inline-size:var(--calcite-shell-panel-min-width-internal)}:host([layout=horizontal]) .content{block-size:var(--calcite-shell-panel-height-internal);max-block-size:var(--calcite-shell-panel-max-height-internal);min-block-size:var(--calcite-shell-panel-min-height-internal)}.content__header{display:flex;flex:0 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch}.content__body{display:flex;flex:1 1 auto;flex-direction:column;overflow:hidden}.content--overlay{position:absolute;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([layout=vertical]) .content--overlay{inset-block-start:0px;block-size:100%}:host([layout=horizontal]) .content--overlay{inset-inline-start:0px;inline-size:100%}:host([layout=vertical][position=start]) .content--overlay{inset-inline-start:100%;box-shadow:var(--calcite-shell-panel-shadow-inline-start-internal)}:host([layout=vertical][position=end]) .content--overlay{inset-inline-end:100%;box-shadow:var(--calcite-shell-panel-shadow-inline-end-internal)}:host([layout=horizontal][position=start]) .content--overlay{inset-block-start:100%;box-shadow:var(--calcite-shell-panel-shadow-block-start-internal)}:host([layout=horizontal][position=end]) .content--overlay{inset-block-end:100%;box-shadow:var(--calcite-shell-panel-shadow-block-end-internal)}.content--float{margin-inline:0.5rem;margin-block:0.5rem auto;block-size:auto;overflow:hidden;border-radius:0.25rem;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);max-block-size:var(--calcite-shell-panel-max-height-internal, calc(100% - 1rem))}.content--float ::slotted(calcite-panel),.content--float ::slotted(calcite-flow){max-block-size:unset}:host([layout=horizontal]) .content--float{margin-block:0.5rem}:host([position=start]) .content--float ::slotted(calcite-panel),:host([position=start]) .content--float ::slotted(calcite-flow),:host([position=end]) .content--float ::slotted(calcite-panel),:host([position=end]) .content--float ::slotted(calcite-flow){border-style:none}.content[hidden]{display:none}slot[name=action-bar]::slotted(calcite-action-bar),.content ::slotted(calcite-flow),.content ::slotted(calcite-panel:not([closed])){border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}:host([position=start]) slot[name=action-bar]::slotted(calcite-action-bar),:host([position=start]) .content ::slotted(calcite-flow),:host([position=start]) .content ::slotted(calcite-panel){border-inline-start:none}:host([position=end]) slot[name=action-bar]::slotted(calcite-action-bar),:host([position=end]) .content ::slotted(calcite-flow),:host([position=end]) .content ::slotted(calcite-panel){border-inline-end:none}:host([layout=horizontal]) slot[name=action-bar]::slotted(calcite-action-bar){border-inline:0}:host([layout=horizontal][position=start]) .content ::slotted(calcite-flow),:host([layout=horizontal][position=start]) .content ::slotted(calcite-panel){border-inline:0;border-block-start:0}:host([layout=horizontal][position=end]) .content ::slotted(calcite-flow),:host([layout=horizontal][position=end]) .content ::slotted(calcite-panel){border-inline:0;border-block-end:0}:host([hidden]){display:none}[hidden]{display:none}";

const ShellPanel = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.initialContentWidth = null;
    this.initialContentHeight = null;
    this.initialClientX = null;
    this.initialClientY = null;
    this.contentWidthMax = null;
    this.contentWidthMin = null;
    this.contentHeightMax = null;
    this.contentHeightMin = null;
    this.step = 1;
    this.stepMultiplier = 10;
    this.actionBars = [];
    this.storeContentEl = (contentEl) => {
      this.contentEl = contentEl;
    };
    this.getKeyAdjustedSize = (event) => {
      const { key } = event;
      const { el, step, stepMultiplier, layout, contentWidthMin, contentWidthMax, initialContentWidth, initialContentHeight, contentHeightMin, contentHeightMax, position, } = this;
      const multipliedStep = step * stepMultiplier;
      const MOVEMENT_KEYS = [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "Home",
        "End",
        "PageUp",
        "PageDown",
      ];
      if (MOVEMENT_KEYS.indexOf(key) > -1) {
        event.preventDefault();
      }
      const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.b)(el);
      const horizontalKeys = ["ArrowLeft", "ArrowRight"];
      const verticalKeys = ["ArrowDown", "ArrowUp"];
      const directionFactor = dir === "rtl" && horizontalKeys.includes(key) ? -1 : 1;
      const increaseKeys = layout === "horizontal"
        ? position === "end"
          ? key === verticalKeys[1] || key === horizontalKeys[0]
          : key === verticalKeys[0] || key === horizontalKeys[1]
        : key === verticalKeys[1] ||
          (position === "end" ? key === horizontalKeys[0] : key === horizontalKeys[1]);
      if (increaseKeys) {
        const stepValue = event.shiftKey ? multipliedStep : step;
        return layout === "horizontal"
          ? initialContentHeight + directionFactor * stepValue
          : initialContentWidth + directionFactor * stepValue;
      }
      const decreaseKeys = layout === "horizontal"
        ? position === "end"
          ? key === verticalKeys[0] || key === horizontalKeys[0]
          : key === verticalKeys[1] || key === horizontalKeys[1]
        : key === verticalKeys[0] ||
          (position === "end" ? key === horizontalKeys[1] : key === horizontalKeys[0]);
      if (decreaseKeys) {
        const stepValue = event.shiftKey ? multipliedStep : step;
        return layout === "horizontal"
          ? initialContentHeight - directionFactor * stepValue
          : initialContentWidth - directionFactor * stepValue;
      }
      if (key === "Home" && layout === "horizontal" && typeof contentHeightMin === "number") {
        return contentHeightMin;
      }
      if (key === "Home" && layout === "vertical" && typeof contentWidthMin === "number") {
        return contentWidthMin;
      }
      if (key === "End" && layout === "horizontal" && typeof contentHeightMax === "number") {
        return contentHeightMax;
      }
      if (key === "End" && layout === "vertical" && typeof contentWidthMax === "number") {
        return contentWidthMax;
      }
      if (key === "PageDown") {
        return layout === "horizontal"
          ? initialContentHeight - multipliedStep
          : initialContentWidth - multipliedStep;
      }
      if (key === "PageUp") {
        return layout === "horizontal"
          ? initialContentHeight + multipliedStep
          : initialContentWidth + multipliedStep;
      }
      return null;
    };
    this.initialKeydownWidth = (event) => {
      this.setInitialContentWidth();
      const width = this.getKeyAdjustedSize(event);
      if (typeof width === "number") {
        this.setContentWidth(width);
      }
    };
    this.initialKeydownHeight = (event) => {
      this.setInitialContentHeight();
      const height = this.getKeyAdjustedSize(event);
      if (typeof height === "number") {
        this.setContentHeight(height);
      }
    };
    this.separatorKeyDown = (event) => {
      this.layout === "horizontal"
        ? this.initialKeydownHeight(event)
        : this.initialKeydownWidth(event);
    };
    this.separatorPointerMove = (event) => {
      event.preventDefault();
      const { el, layout, initialContentWidth, initialContentHeight, position, initialClientX, initialClientY, } = this;
      const offset = layout === "horizontal" ? event.clientY - initialClientY : event.clientX - initialClientX;
      const adjustmentDirection = layout === "vertical" && (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.b)(el) === "rtl" ? -1 : 1;
      const adjustedOffset = layout === "horizontal"
        ? position === "end"
          ? -adjustmentDirection * offset
          : adjustmentDirection * offset
        : position === "end"
          ? -adjustmentDirection * offset
          : adjustmentDirection * offset;
      layout === "horizontal"
        ? this.setContentHeight(initialContentHeight + adjustedOffset)
        : this.setContentWidth(initialContentWidth + adjustedOffset);
    };
    this.separatorPointerUp = (event) => {
      if (!(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.j)(event)) {
        return;
      }
      event.preventDefault();
      document.removeEventListener("pointerup", this.separatorPointerUp);
      document.removeEventListener("pointermove", this.separatorPointerMove);
    };
    this.setInitialContentHeight = () => {
      this.initialContentHeight = this.contentEl?.getBoundingClientRect().height;
    };
    this.setInitialContentWidth = () => {
      this.initialContentWidth = this.contentEl?.getBoundingClientRect().width;
    };
    this.separatorPointerDown = (event) => {
      if (!(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.j)(event)) {
        return;
      }
      event.preventDefault();
      const { separatorEl } = this;
      separatorEl && document.activeElement !== separatorEl && separatorEl.focus();
      if (this.layout === "horizontal") {
        this.setInitialContentHeight();
        this.initialClientY = event.clientY;
      }
      else {
        this.setInitialContentWidth();
        this.initialClientX = event.clientX;
      }
      document.addEventListener("pointerup", this.separatorPointerUp);
      document.addEventListener("pointermove", this.separatorPointerMove);
    };
    this.connectSeparator = (separatorEl) => {
      this.disconnectSeparator();
      this.separatorEl = separatorEl;
      separatorEl?.addEventListener("pointerdown", this.separatorPointerDown);
    };
    this.disconnectSeparator = () => {
      this.separatorEl?.removeEventListener("pointerdown", this.separatorPointerDown);
    };
    this.setActionBarsLayout = (actionBars) => {
      actionBars.forEach((actionBar) => (actionBar.layout = this.layout));
    };
    this.handleActionBarSlotChange = (event) => {
      const actionBars = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.s)(event).filter((el) => el?.matches("calcite-action-bar"));
      this.actionBars = actionBars;
      this.setActionBarsLayout(actionBars);
    };
    this.handleHeaderSlotChange = (event) => {
      this.hasHeader = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.e)(event);
    };
    this.collapsed = false;
    this.detached = false;
    this.displayMode = "dock";
    this.detachedHeightScale = undefined;
    this.heightScale = undefined;
    this.widthScale = "m";
    this.layout = "vertical";
    this.position = "start";
    this.resizable = false;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.contentWidth = null;
    this.contentHeight = null;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.hasHeader = false;
  }
  handleDetached(value) {
    if (value) {
      this.displayMode = "float";
    }
    else if (this.displayMode === "float") {
      this.displayMode = "dock";
    }
  }
  handleDisplayMode(value) {
    this.detached = value === "float";
  }
  handleDetachedHeightScale(value) {
    this.heightScale = value;
  }
  handleHeightScale(value) {
    this.detachedHeightScale = value;
  }
  layoutHandler() {
    this.setActionBarsLayout(this.actionBars);
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
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
  }
  async componentWillLoad() {
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    this.disconnectSeparator();
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
  }
  componentDidLoad() {
    this.updateAriaValues();
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderHeader() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: CSS.contentHeader, hidden: !this.hasHeader, key: "header" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { name: SLOTS.header, onSlotchange: this.handleHeaderSlotChange })));
  }
  render() {
    const { collapsed, position, initialContentWidth, initialContentHeight, contentWidth, contentWidthMax, contentWidthMin, contentHeight, contentHeightMax, contentHeightMin, resizable, layout, displayMode, } = this;
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.el);
    const allowResizing = displayMode !== "float" && resizable;
    const style = allowResizing
      ? layout === "horizontal"
        ? contentHeight
          ? { height: `${contentHeight}px` }
          : null
        : contentWidth
          ? { width: `${contentWidth}px` }
          : null
      : null;
    const separatorNode = !collapsed && allowResizing ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { "aria-label": this.messages.resize, "aria-orientation": layout === "horizontal" ? "vertical" : "horizontal", "aria-valuemax": layout == "horizontal" ? contentHeightMax : contentWidthMax, "aria-valuemin": layout == "horizontal" ? contentHeightMin : contentWidthMin, "aria-valuenow": layout == "horizontal"
        ? contentHeight ?? initialContentHeight
        : contentWidth ?? initialContentWidth, class: CSS.separator, key: "separator", onKeyDown: this.separatorKeyDown, role: "separator", tabIndex: 0, "touch-action": "none",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.connectSeparator })) : null;
    const getAnimationDir = () => {
      if (layout === "horizontal") {
        return position === "start"
          ? _dom_js__WEBPACK_IMPORTED_MODULE_1__.C.calciteAnimateInDown
          : _dom_js__WEBPACK_IMPORTED_MODULE_1__.C.calciteAnimateInUp;
      }
      else {
        const isStart = (dir === "ltr" && position === "end") || (dir === "rtl" && position === "start");
        return isStart ? _dom_js__WEBPACK_IMPORTED_MODULE_1__.C.calciteAnimateInLeft : _dom_js__WEBPACK_IMPORTED_MODULE_1__.C.calciteAnimateInRight;
      }
    };
    const contentNode = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: {
        [_dom_js__WEBPACK_IMPORTED_MODULE_1__.C.rtl]: dir === "rtl",
        [CSS.content]: true,
        [CSS.contentOverlay]: displayMode === "overlay",
        [CSS.contentFloat]: displayMode === "float",
        [_dom_js__WEBPACK_IMPORTED_MODULE_1__.C.calciteAnimate]: displayMode === "overlay",
        [getAnimationDir()]: displayMode === "overlay",
      }, hidden: collapsed, key: "content", style: style,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.storeContentEl }, this.renderHeader(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: CSS.contentBody }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", null)), separatorNode));
    const actionBarNode = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { key: "action-bar", name: SLOTS.actionBar, onSlotchange: this.handleActionBarSlotChange }));
    const mainNodes = [actionBarNode, contentNode];
    if (position === "end") {
      mainNodes.reverse();
    }
    return (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: { [CSS.container]: true } }, mainNodes);
  }
  // --------------------------------------------------------------------------
  //
  //  private Methods
  //
  // --------------------------------------------------------------------------
  setContentWidth(width) {
    const { contentWidthMax, contentWidthMin } = this;
    const roundedWidth = Math.round(width);
    this.contentWidth =
      typeof contentWidthMax === "number" && typeof contentWidthMin === "number"
        ? (0,_math_js__WEBPACK_IMPORTED_MODULE_3__.c)(roundedWidth, contentWidthMin, contentWidthMax)
        : roundedWidth;
  }
  updateAriaValues() {
    const { contentEl } = this;
    const computedStyle = contentEl && getComputedStyle(contentEl);
    if (!computedStyle) {
      return;
    }
    this.layout === "horizontal"
      ? this.updateHeights(computedStyle)
      : this.updateWidths(computedStyle);
    (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.forceUpdate)(this);
  }
  setContentHeight(height) {
    const { contentHeightMax, contentHeightMin } = this;
    const roundedWidth = Math.round(height);
    this.contentHeight =
      typeof contentHeightMax === "number" && typeof contentHeightMin === "number"
        ? (0,_math_js__WEBPACK_IMPORTED_MODULE_3__.c)(roundedWidth, contentHeightMin, contentHeightMax)
        : roundedWidth;
  }
  updateWidths(computedStyle) {
    const max = parseInt(computedStyle.getPropertyValue("max-width"), 10);
    const min = parseInt(computedStyle.getPropertyValue("min-width"), 10);
    const valueNow = parseInt(computedStyle.getPropertyValue("width"), 10);
    if (typeof valueNow === "number" && !isNaN(valueNow)) {
      this.initialContentWidth = valueNow;
    }
    if (typeof max === "number" && !isNaN(max)) {
      this.contentWidthMax = max;
    }
    if (typeof min === "number" && !isNaN(min)) {
      this.contentWidthMin = min;
    }
  }
  updateHeights(computedStyle) {
    const max = parseInt(computedStyle.getPropertyValue("max-height"), 10);
    const min = parseInt(computedStyle.getPropertyValue("min-height"), 10);
    const valueNow = parseInt(computedStyle.getPropertyValue("height"), 10);
    if (typeof valueNow === "number" && !isNaN(valueNow)) {
      this.initialContentHeight = valueNow;
    }
    if (typeof max === "number" && !isNaN(max)) {
      this.contentHeightMax = max;
    }
    if (typeof min === "number" && !isNaN(min)) {
      this.contentHeightMin = min;
    }
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "detached": ["handleDetached"],
    "displayMode": ["handleDisplayMode"],
    "detachedHeightScale": ["handleDetachedHeightScale"],
    "heightScale": ["handleHeightScale"],
    "layout": ["layoutHandler"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return shellPanelCss; }
}, [1, "calcite-shell-panel", {
    "collapsed": [516],
    "detached": [516],
    "displayMode": [513, "display-mode"],
    "detachedHeightScale": [513, "detached-height-scale"],
    "heightScale": [513, "height-scale"],
    "widthScale": [513, "width-scale"],
    "layout": [513],
    "position": [513],
    "resizable": [516],
    "messages": [1040],
    "messageOverrides": [1040],
    "contentWidth": [32],
    "contentHeight": [32],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "hasHeader": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-shell-panel"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-shell-panel":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ShellPanel);
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteShellPanel = ShellPanel;
const defineCustomElement = defineCustomElement$1;




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

/***/ "./node_modules/@esri/calcite-components/dist/components/math.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/math.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ closeToRangeEdge),
/* harmony export */   c: () => (/* binding */ clamp),
/* harmony export */   d: () => (/* binding */ decimalPlaces),
/* harmony export */   g: () => (/* binding */ getDecimals),
/* harmony export */   r: () => (/* binding */ remap)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const clamp = (value, min, max) => Math.max(min, Math.min(value, max));
const decimalNumberRegex = new RegExp(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
/**
 * Returns the quantity of real decimal places for a number, which excludes trailing zeros.
 *
 * Adapted from {@link https://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number}.
 *
 * @param decimal - decimal value
 * @param value
 * @returns {number} the amount of decimal places in a number
 */
const decimalPlaces = (value) => {
  const match = ("" + value).match(decimalNumberRegex);
  if (!match || parseInt(match[1]) === 0) {
    return 0;
  }
  return Math.max(0, 
  // Number of digits right of decimal point.
  (match[1] ? match[1].length : 0) -
    // Adjust for scientific notation.
    (match[2] ? +match[2] : 0));
};
function getDecimals(value) {
  if (decimalPlaces(value) > 0 && value > 0) {
    return parseFloat(`0.${value.toString().split(".")[1]}`);
  }
  return value;
}
function remap(value, fromMin, fromMax, toMin, toMax) {
  return ((value - fromMin) * (toMax - toMin)) / (fromMax - fromMin) + toMin;
}
/**
 * Helper to determine if a value is close to the edge of a range within a threshold.
 *
 * @param value
 * @param range
 * @param threshold
 * @returns -1 if close to lower edge, 1 if close to upper edge, 0 otherwise.
 */
function closeToRangeEdge(value, range, threshold) {
  return value < threshold ? -1 : value > range - threshold ? 1 : 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNjBiN2M0MjRkNTYxZTYyYzFiZGVmZWNjNzRmNWJiYjguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lHO0FBQ1k7QUFDK0M7QUFDdEY7QUFDdkM7QUFDMkU7O0FBRWxIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixvQkFBb0Isa0JBQWtCLGFBQWEsY0FBYyxvQkFBb0IsdUVBQXVFLGdEQUFnRCx1Q0FBdUMsOEhBQThILDhIQUE4SCwrSEFBK0gsK0hBQStILCtCQUErQixpSUFBaUksNkhBQTZILHlCQUF5QixpRkFBaUYsK0NBQStDLHdGQUF3RixpREFBaUQsNEVBQTRFLHFGQUFxRixxRkFBcUYsaURBQWlELDRFQUE0RSxxRkFBcUYscUZBQXFGLGlEQUFpRCw0RUFBNEUscUZBQXFGLHFGQUFxRixvREFBb0QscUpBQXFKLG9DQUFvQyxxRkFBcUYscUpBQXFKLG9EQUFvRCxxSkFBcUosV0FBVyxvQkFBb0Isc0JBQXNCLGFBQWEsY0FBYyxvQkFBb0IsNkJBQTZCLHNDQUFzQywrQkFBK0IsYUFBYSxzQkFBc0Isc0NBQXNDLHNCQUFzQix5R0FBeUcsVUFBVSw0Q0FBNEMsV0FBVyxvQkFBb0Isa0JBQWtCLGFBQWEsNkJBQTZCLFVBQVUsNkZBQTZGLGtCQUFrQixhQUFhLGlCQUFpQixVQUFVLDRDQUE0QyxpQkFBaUIseUNBQXlDLFVBQVUsb0NBQW9DLGdCQUFnQixnQkFBZ0IscUJBQXFCLGtCQUFrQixzREFBc0Qsb0JBQW9CLG9EQUFvRCxzQkFBc0Isc0NBQXNDLHFCQUFxQixvQkFBb0IsaUJBQWlCLGtCQUFrQixvREFBb0Qsc0JBQXNCLHNEQUFzRCxxQkFBcUIsa0RBQWtELHdCQUF3QixvREFBb0QsdUJBQXVCLGlEQUFpRCxnQkFBZ0IsaUJBQWlCLGNBQWMscUJBQXFCLHNCQUFzQixpQ0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtc2hlbGwtcGFuZWwuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NvbmRpdGlvbmFsU2xvdC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvbWF0aC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvdDluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGgsIGZvcmNlVXBkYXRlIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50LCBkIGFzIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgfSBmcm9tICcuL2NvbmRpdGlvbmFsU2xvdC5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldEVsZW1lbnREaXIsIGogYXMgaXNQcmltYXJ5UG9pbnRlckJ1dHRvbiwgcyBhcyBzbG90Q2hhbmdlR2V0QXNzaWduZWRFbGVtZW50cywgZSBhcyBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50LCBDIGFzIENTU19VVElMSVRZIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNsYW1wIH0gZnJvbSAnLi9tYXRoLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzLCB1IGFzIHVwZGF0ZU1lc3NhZ2VzIH0gZnJvbSAnLi90OW4uanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgY29udGVudDogXCJjb250ZW50XCIsXG4gIGNvbnRlbnRIZWFkZXI6IFwiY29udGVudF9faGVhZGVyXCIsXG4gIGNvbnRlbnRCb2R5OiBcImNvbnRlbnRfX2JvZHlcIixcbiAgY29udGVudEZsb2F0OiBcImNvbnRlbnQtLWZsb2F0XCIsXG4gIGNvbnRlbnRPdmVybGF5OiBcImNvbnRlbnQtLW92ZXJsYXlcIixcbiAgc2VwYXJhdG9yOiBcInNlcGFyYXRvclwiLFxufTtcbmNvbnN0IFNMT1RTID0ge1xuICBhY3Rpb25CYXI6IFwiYWN0aW9uLWJhclwiLFxuICBoZWFkZXI6IFwiaGVhZGVyXCIsXG59O1xuXG5jb25zdCBzaGVsbFBhbmVsQ3NzID0gXCI6aG9zdHtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtmbGV4OjAgMSBhdXRvO2FsaWduLWl0ZW1zOnN0cmV0Y2g7ei1pbmRleDp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLXotaW5kZXgsIHZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpKTstLWNhbGNpdGUtc2hlbGwtcGFuZWwtZGV0YWNoZWQtbWF4LWhlaWdodDp1bnNldDstLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LWhlaWdodDp1bnNldDstLWNhbGNpdGUtc2hlbGwtcGFuZWwtc2hhZG93LWJsb2NrLXN0YXJ0LWludGVybmFsOjAgNHB4IDhweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCksXFxuICAgIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLXNoYWRvdy1ibG9jay1lbmQtaW50ZXJuYWw6MCAtNHB4IDhweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCksXFxuICAgIDAgLTJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDQpOy0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1zaGFkb3ctaW5saW5lLXN0YXJ0LWludGVybmFsOjRweCAwIDhweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCksXFxuICAgIDJweCAwIDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLXNoYWRvdy1pbmxpbmUtZW5kLWludGVybmFsOi00cHggMCA4cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDgpLFxcbiAgICAtMnB4IDAgNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA0KX0uY2FsY2l0ZS0tcnRsLmNvbnRlbnQtLW92ZXJsYXl7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLXNoYWRvdy1pbmxpbmUtc3RhcnQtaW50ZXJuYWw6LTRweCAwIDhweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCksXFxuICAgIC0ycHggMCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDQpOy0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1zaGFkb3ctaW5saW5lLWVuZC1pbnRlcm5hbDo0cHggMCA4cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDgpLFxcbiAgICAycHggMCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDQpfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdKXt6LWluZGV4OnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtei1pbmRleCwgY2FsYyh2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KSArIDEpKX06aG9zdChbbGF5b3V0PXZlcnRpY2FsXVtkaXNwbGF5LW1vZGU9b3ZlcmxheV0pe3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC16LWluZGV4LCBjYWxjKHZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtaGVhZGVyKSArIDEpKX06aG9zdChbbGF5b3V0PXZlcnRpY2FsXVt3aWR0aC1zY2FsZT1zXSkgLmNvbnRlbnR7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLXdpZHRoLWludGVybmFsOnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtd2lkdGgsIDEydncpOy0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1tYXgtd2lkdGgtaW50ZXJuYWw6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1tYXgtd2lkdGgsIDMwMHB4KTstLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWluLXdpZHRoLWludGVybmFsOnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWluLXdpZHRoLCAxNTBweCl9Omhvc3QoW2xheW91dD12ZXJ0aWNhbF1bd2lkdGgtc2NhbGU9bV0pIC5jb250ZW50ey0tY2FsY2l0ZS1zaGVsbC1wYW5lbC13aWR0aC1pbnRlcm5hbDp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLXdpZHRoLCAyMHZ3KTstLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LXdpZHRoLWludGVybmFsOnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LXdpZHRoLCA0MjBweCk7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1pbi13aWR0aC1pbnRlcm5hbDp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1pbi13aWR0aCwgMjQwcHgpfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdW3dpZHRoLXNjYWxlPWxdKSAuY29udGVudHstLWNhbGNpdGUtc2hlbGwtcGFuZWwtd2lkdGgtaW50ZXJuYWw6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC13aWR0aCwgNDV2dyk7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1heC13aWR0aC1pbnRlcm5hbDp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1heC13aWR0aCwgNjgwcHgpOy0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1taW4td2lkdGgtaW50ZXJuYWw6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1taW4td2lkdGgsIDM0MHB4KX06aG9zdChbbGF5b3V0PWhvcml6b250YWxdW2hlaWdodC1zY2FsZT1zXSkgLmNvbnRlbnR7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1heC1oZWlnaHQtaW50ZXJuYWw6dmFyKFxcbiAgICAtLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LWhlaWdodCxcXG4gICAgdmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1kZXRhY2hlZC1tYXgtaGVpZ2h0LCAyMHZoKVxcbiAgKX06aG9zdChbbGF5b3V0PWhvcml6b250YWxdKSAuY29udGVudHstLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWluLWhlaWdodC1pbnRlcm5hbDp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1pbi1oZWlnaHQsIDV2aCk7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1heC1oZWlnaHQtaW50ZXJuYWw6dmFyKFxcbiAgICAtLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LWhlaWdodCxcXG4gICAgdmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1kZXRhY2hlZC1tYXgtaGVpZ2h0LCAzMHZoKVxcbiAgKX06aG9zdChbbGF5b3V0PWhvcml6b250YWxdW2hlaWdodC1zY2FsZT1sXSkgLmNvbnRlbnR7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1heC1oZWlnaHQtaW50ZXJuYWw6dmFyKFxcbiAgICAtLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LWhlaWdodCxcXG4gICAgdmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1kZXRhY2hlZC1tYXgtaGVpZ2h0LCA0MHZoKVxcbiAgKX0uY29udGFpbmVye3BvaW50ZXItZXZlbnRzOm5vbmU7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSBhdXRvO2FsaWduLWl0ZW1zOnN0cmV0Y2g7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX0uY29udGFpbmVyICp7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF0pIC5jb250YWluZXJ7ZmxleC1kaXJlY3Rpb246Y29sdW1ufTpob3N0KDpob3ZlcikgLnNlcGFyYXRvcjpub3QoOmhvdmVyKTpub3QoOmZvY3VzKSw6aG9zdCg6Zm9jdXMtd2l0aGluKSAuc2VwYXJhdG9yOm5vdCg6aG92ZXIpOm5vdCg6Zm9jdXMpe29wYWNpdHk6MTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfS5zZXBhcmF0b3J7cG9pbnRlci1ldmVudHM6YXV0bztwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmZsZXg7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7Y3Vyc29yOmNvbC1yZXNpemU7b3V0bGluZTpub25lfS5zZXBhcmF0b3I6aG92ZXJ7b3BhY2l0eToxO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMil9LnNlcGFyYXRvcjpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO29wYWNpdHk6MX06aG9zdChbbGF5b3V0PXZlcnRpY2FsXSkgLnNlcGFyYXRvcntpbnNldC1ibG9jazowcHg7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjAuMTI1cmVtO2N1cnNvcjpjb2wtcmVzaXplfTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF1bcG9zaXRpb249c3RhcnRdKSAuc2VwYXJhdG9ye2luc2V0LWJsb2NrLWVuZDowcHh9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXVtwb3NpdGlvbj1lbmRdKSAuc2VwYXJhdG9ye2luc2V0LWJsb2NrLXN0YXJ0OjBweH06aG9zdChbbGF5b3V0PWhvcml6b250YWxdKSAuc2VwYXJhdG9ye2luc2V0LWlubGluZS1lbmQ6MHB4O2Jsb2NrLXNpemU6MC4xMjVyZW07aW5saW5lLXNpemU6MTAwJTtjdXJzb3I6cm93LXJlc2l6ZX06aG9zdChbbGF5b3V0PXZlcnRpY2FsXVtwb3NpdGlvbj1zdGFydF0pIC5zZXBhcmF0b3J7aW5zZXQtaW5saW5lLWVuZDotMnB4fTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF1bcG9zaXRpb249c3RhcnRdKSAuc2VwYXJhdG9ye2luc2V0LWJsb2NrLWVuZDotMnB4fTpob3N0KFtsYXlvdXQ9dmVydGljYWxdW3Bvc2l0aW9uPWVuZF0pIC5zZXBhcmF0b3J7aW5zZXQtaW5saW5lLXN0YXJ0Oi0ycHh9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXVtwb3NpdGlvbj1lbmRdKSAuc2VwYXJhdG9ye2luc2V0LWJsb2NrLXN0YXJ0Oi0ycHh9OjpzbG90dGVkKGNhbGNpdGUtcGFuZWwpLDo6c2xvdHRlZChjYWxjaXRlLWZsb3cpe2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO2ZsZXg6MSAxIGF1dG87bWF4LWJsb2NrLXNpemU6dW5zZXQ7bWF4LWlubGluZS1zaXplOnVuc2V0fTo6c2xvdHRlZCguY2FsY2l0ZS1tYXRjaC1oZWlnaHQpe2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSBhdXRvO292ZXJmbG93OmhpZGRlbn0uY29udGVudHtwb2ludGVyLWV2ZW50czphdXRvO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC13cmFwOm5vd3JhcDthbGlnbi1pdGVtczpzdHJldGNoO2FsaWduLXNlbGY6c3RyZXRjaDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYmFja2dyb3VuZCk7cGFkZGluZzowcHg7dHJhbnNpdGlvbjptYXgtYmxvY2stc2l6ZSB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpLCBtYXgtaW5saW5lLXNpemUgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX06aG9zdChbbGF5b3V0PXZlcnRpY2FsXSkgLmNvbnRlbnR7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC13aWR0aC1pbnRlcm5hbCk7bWF4LWlubGluZS1zaXplOnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LXdpZHRoLWludGVybmFsKTttaW4taW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1taW4td2lkdGgtaW50ZXJuYWwpfTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF0pIC5jb250ZW50e2Jsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1oZWlnaHQtaW50ZXJuYWwpO21heC1ibG9jay1zaXplOnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LWhlaWdodC1pbnRlcm5hbCk7bWluLWJsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1taW4taGVpZ2h0LWludGVybmFsKX0uY29udGVudF9faGVhZGVye2Rpc3BsYXk6ZmxleDtmbGV4OjAgMSBhdXRvO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LXdyYXA6bm93cmFwO2FsaWduLWl0ZW1zOnN0cmV0Y2h9LmNvbnRlbnRfX2JvZHl7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIGF1dG87ZmxleC1kaXJlY3Rpb246Y29sdW1uO292ZXJmbG93OmhpZGRlbn0uY29udGVudC0tb3ZlcmxheXtwb3NpdGlvbjphYnNvbHV0ZTstLXR3LXNoYWRvdzowIDRweCA4cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDQpOy0tdHctc2hhZG93LWNvbG9yZWQ6MCA0cHggOHB4IC0xcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMCAycHggNHB4IC0xcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9Omhvc3QoW2xheW91dD12ZXJ0aWNhbF0pIC5jb250ZW50LS1vdmVybGF5e2luc2V0LWJsb2NrLXN0YXJ0OjBweDtibG9jay1zaXplOjEwMCV9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXSkgLmNvbnRlbnQtLW92ZXJsYXl7aW5zZXQtaW5saW5lLXN0YXJ0OjBweDtpbmxpbmUtc2l6ZToxMDAlfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdW3Bvc2l0aW9uPXN0YXJ0XSkgLmNvbnRlbnQtLW92ZXJsYXl7aW5zZXQtaW5saW5lLXN0YXJ0OjEwMCU7Ym94LXNoYWRvdzp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLXNoYWRvdy1pbmxpbmUtc3RhcnQtaW50ZXJuYWwpfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdW3Bvc2l0aW9uPWVuZF0pIC5jb250ZW50LS1vdmVybGF5e2luc2V0LWlubGluZS1lbmQ6MTAwJTtib3gtc2hhZG93OnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtc2hhZG93LWlubGluZS1lbmQtaW50ZXJuYWwpfTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF1bcG9zaXRpb249c3RhcnRdKSAuY29udGVudC0tb3ZlcmxheXtpbnNldC1ibG9jay1zdGFydDoxMDAlO2JveC1zaGFkb3c6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1zaGFkb3ctYmxvY2stc3RhcnQtaW50ZXJuYWwpfTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF1bcG9zaXRpb249ZW5kXSkgLmNvbnRlbnQtLW92ZXJsYXl7aW5zZXQtYmxvY2stZW5kOjEwMCU7Ym94LXNoYWRvdzp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLXNoYWRvdy1ibG9jay1lbmQtaW50ZXJuYWwpfS5jb250ZW50LS1mbG9hdHttYXJnaW4taW5saW5lOjAuNXJlbTttYXJnaW4tYmxvY2s6MC41cmVtIGF1dG87YmxvY2stc2l6ZTphdXRvO292ZXJmbG93OmhpZGRlbjtib3JkZXItcmFkaXVzOjAuMjVyZW07LS10dy1zaGFkb3c6MCA0cHggOHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA0KTstLXR3LXNoYWRvdy1jb2xvcmVkOjAgNHB4IDhweCAtMXB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgMnB4IDRweCAtMXB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO21heC1ibG9jay1zaXplOnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LWhlaWdodC1pbnRlcm5hbCwgY2FsYygxMDAlIC0gMXJlbSkpfS5jb250ZW50LS1mbG9hdCA6OnNsb3R0ZWQoY2FsY2l0ZS1wYW5lbCksLmNvbnRlbnQtLWZsb2F0IDo6c2xvdHRlZChjYWxjaXRlLWZsb3cpe21heC1ibG9jay1zaXplOnVuc2V0fTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF0pIC5jb250ZW50LS1mbG9hdHttYXJnaW4tYmxvY2s6MC41cmVtfTpob3N0KFtwb3NpdGlvbj1zdGFydF0pIC5jb250ZW50LS1mbG9hdCA6OnNsb3R0ZWQoY2FsY2l0ZS1wYW5lbCksOmhvc3QoW3Bvc2l0aW9uPXN0YXJ0XSkgLmNvbnRlbnQtLWZsb2F0IDo6c2xvdHRlZChjYWxjaXRlLWZsb3cpLDpob3N0KFtwb3NpdGlvbj1lbmRdKSAuY29udGVudC0tZmxvYXQgOjpzbG90dGVkKGNhbGNpdGUtcGFuZWwpLDpob3N0KFtwb3NpdGlvbj1lbmRdKSAuY29udGVudC0tZmxvYXQgOjpzbG90dGVkKGNhbGNpdGUtZmxvdyl7Ym9yZGVyLXN0eWxlOm5vbmV9LmNvbnRlbnRbaGlkZGVuXXtkaXNwbGF5Om5vbmV9c2xvdFtuYW1lPWFjdGlvbi1iYXJdOjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uLWJhciksLmNvbnRlbnQgOjpzbG90dGVkKGNhbGNpdGUtZmxvdyksLmNvbnRlbnQgOjpzbG90dGVkKGNhbGNpdGUtcGFuZWw6bm90KFtjbG9zZWRdKSl7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfTpob3N0KFtwb3NpdGlvbj1zdGFydF0pIHNsb3RbbmFtZT1hY3Rpb24tYmFyXTo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbi1iYXIpLDpob3N0KFtwb3NpdGlvbj1zdGFydF0pIC5jb250ZW50IDo6c2xvdHRlZChjYWxjaXRlLWZsb3cpLDpob3N0KFtwb3NpdGlvbj1zdGFydF0pIC5jb250ZW50IDo6c2xvdHRlZChjYWxjaXRlLXBhbmVsKXtib3JkZXItaW5saW5lLXN0YXJ0Om5vbmV9Omhvc3QoW3Bvc2l0aW9uPWVuZF0pIHNsb3RbbmFtZT1hY3Rpb24tYmFyXTo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbi1iYXIpLDpob3N0KFtwb3NpdGlvbj1lbmRdKSAuY29udGVudCA6OnNsb3R0ZWQoY2FsY2l0ZS1mbG93KSw6aG9zdChbcG9zaXRpb249ZW5kXSkgLmNvbnRlbnQgOjpzbG90dGVkKGNhbGNpdGUtcGFuZWwpe2JvcmRlci1pbmxpbmUtZW5kOm5vbmV9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXSkgc2xvdFtuYW1lPWFjdGlvbi1iYXJdOjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uLWJhcil7Ym9yZGVyLWlubGluZTowfTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF1bcG9zaXRpb249c3RhcnRdKSAuY29udGVudCA6OnNsb3R0ZWQoY2FsY2l0ZS1mbG93KSw6aG9zdChbbGF5b3V0PWhvcml6b250YWxdW3Bvc2l0aW9uPXN0YXJ0XSkgLmNvbnRlbnQgOjpzbG90dGVkKGNhbGNpdGUtcGFuZWwpe2JvcmRlci1pbmxpbmU6MDtib3JkZXItYmxvY2stc3RhcnQ6MH06aG9zdChbbGF5b3V0PWhvcml6b250YWxdW3Bvc2l0aW9uPWVuZF0pIC5jb250ZW50IDo6c2xvdHRlZChjYWxjaXRlLWZsb3cpLDpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF1bcG9zaXRpb249ZW5kXSkgLmNvbnRlbnQgOjpzbG90dGVkKGNhbGNpdGUtcGFuZWwpe2JvcmRlci1pbmxpbmU6MDtib3JkZXItYmxvY2stZW5kOjB9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IFNoZWxsUGFuZWwgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuaW5pdGlhbENvbnRlbnRXaWR0aCA9IG51bGw7XG4gICAgdGhpcy5pbml0aWFsQ29udGVudEhlaWdodCA9IG51bGw7XG4gICAgdGhpcy5pbml0aWFsQ2xpZW50WCA9IG51bGw7XG4gICAgdGhpcy5pbml0aWFsQ2xpZW50WSA9IG51bGw7XG4gICAgdGhpcy5jb250ZW50V2lkdGhNYXggPSBudWxsO1xuICAgIHRoaXMuY29udGVudFdpZHRoTWluID0gbnVsbDtcbiAgICB0aGlzLmNvbnRlbnRIZWlnaHRNYXggPSBudWxsO1xuICAgIHRoaXMuY29udGVudEhlaWdodE1pbiA9IG51bGw7XG4gICAgdGhpcy5zdGVwID0gMTtcbiAgICB0aGlzLnN0ZXBNdWx0aXBsaWVyID0gMTA7XG4gICAgdGhpcy5hY3Rpb25CYXJzID0gW107XG4gICAgdGhpcy5zdG9yZUNvbnRlbnRFbCA9IChjb250ZW50RWwpID0+IHtcbiAgICAgIHRoaXMuY29udGVudEVsID0gY29udGVudEVsO1xuICAgIH07XG4gICAgdGhpcy5nZXRLZXlBZGp1c3RlZFNpemUgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcbiAgICAgIGNvbnN0IHsgZWwsIHN0ZXAsIHN0ZXBNdWx0aXBsaWVyLCBsYXlvdXQsIGNvbnRlbnRXaWR0aE1pbiwgY29udGVudFdpZHRoTWF4LCBpbml0aWFsQ29udGVudFdpZHRoLCBpbml0aWFsQ29udGVudEhlaWdodCwgY29udGVudEhlaWdodE1pbiwgY29udGVudEhlaWdodE1heCwgcG9zaXRpb24sIH0gPSB0aGlzO1xuICAgICAgY29uc3QgbXVsdGlwbGllZFN0ZXAgPSBzdGVwICogc3RlcE11bHRpcGxpZXI7XG4gICAgICBjb25zdCBNT1ZFTUVOVF9LRVlTID0gW1xuICAgICAgICBcIkFycm93VXBcIixcbiAgICAgICAgXCJBcnJvd0Rvd25cIixcbiAgICAgICAgXCJBcnJvd0xlZnRcIixcbiAgICAgICAgXCJBcnJvd1JpZ2h0XCIsXG4gICAgICAgIFwiSG9tZVwiLFxuICAgICAgICBcIkVuZFwiLFxuICAgICAgICBcIlBhZ2VVcFwiLFxuICAgICAgICBcIlBhZ2VEb3duXCIsXG4gICAgICBdO1xuICAgICAgaWYgKE1PVkVNRU5UX0tFWVMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIoZWwpO1xuICAgICAgY29uc3QgaG9yaXpvbnRhbEtleXMgPSBbXCJBcnJvd0xlZnRcIiwgXCJBcnJvd1JpZ2h0XCJdO1xuICAgICAgY29uc3QgdmVydGljYWxLZXlzID0gW1wiQXJyb3dEb3duXCIsIFwiQXJyb3dVcFwiXTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbkZhY3RvciA9IGRpciA9PT0gXCJydGxcIiAmJiBob3Jpem9udGFsS2V5cy5pbmNsdWRlcyhrZXkpID8gLTEgOiAxO1xuICAgICAgY29uc3QgaW5jcmVhc2VLZXlzID0gbGF5b3V0ID09PSBcImhvcml6b250YWxcIlxuICAgICAgICA/IHBvc2l0aW9uID09PSBcImVuZFwiXG4gICAgICAgICAgPyBrZXkgPT09IHZlcnRpY2FsS2V5c1sxXSB8fCBrZXkgPT09IGhvcml6b250YWxLZXlzWzBdXG4gICAgICAgICAgOiBrZXkgPT09IHZlcnRpY2FsS2V5c1swXSB8fCBrZXkgPT09IGhvcml6b250YWxLZXlzWzFdXG4gICAgICAgIDoga2V5ID09PSB2ZXJ0aWNhbEtleXNbMV0gfHxcbiAgICAgICAgICAocG9zaXRpb24gPT09IFwiZW5kXCIgPyBrZXkgPT09IGhvcml6b250YWxLZXlzWzBdIDoga2V5ID09PSBob3Jpem9udGFsS2V5c1sxXSk7XG4gICAgICBpZiAoaW5jcmVhc2VLZXlzKSB7XG4gICAgICAgIGNvbnN0IHN0ZXBWYWx1ZSA9IGV2ZW50LnNoaWZ0S2V5ID8gbXVsdGlwbGllZFN0ZXAgOiBzdGVwO1xuICAgICAgICByZXR1cm4gbGF5b3V0ID09PSBcImhvcml6b250YWxcIlxuICAgICAgICAgID8gaW5pdGlhbENvbnRlbnRIZWlnaHQgKyBkaXJlY3Rpb25GYWN0b3IgKiBzdGVwVmFsdWVcbiAgICAgICAgICA6IGluaXRpYWxDb250ZW50V2lkdGggKyBkaXJlY3Rpb25GYWN0b3IgKiBzdGVwVmFsdWU7XG4gICAgICB9XG4gICAgICBjb25zdCBkZWNyZWFzZUtleXMgPSBsYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiXG4gICAgICAgID8gcG9zaXRpb24gPT09IFwiZW5kXCJcbiAgICAgICAgICA/IGtleSA9PT0gdmVydGljYWxLZXlzWzBdIHx8IGtleSA9PT0gaG9yaXpvbnRhbEtleXNbMF1cbiAgICAgICAgICA6IGtleSA9PT0gdmVydGljYWxLZXlzWzFdIHx8IGtleSA9PT0gaG9yaXpvbnRhbEtleXNbMV1cbiAgICAgICAgOiBrZXkgPT09IHZlcnRpY2FsS2V5c1swXSB8fFxuICAgICAgICAgIChwb3NpdGlvbiA9PT0gXCJlbmRcIiA/IGtleSA9PT0gaG9yaXpvbnRhbEtleXNbMV0gOiBrZXkgPT09IGhvcml6b250YWxLZXlzWzBdKTtcbiAgICAgIGlmIChkZWNyZWFzZUtleXMpIHtcbiAgICAgICAgY29uc3Qgc3RlcFZhbHVlID0gZXZlbnQuc2hpZnRLZXkgPyBtdWx0aXBsaWVkU3RlcCA6IHN0ZXA7XG4gICAgICAgIHJldHVybiBsYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgPyBpbml0aWFsQ29udGVudEhlaWdodCAtIGRpcmVjdGlvbkZhY3RvciAqIHN0ZXBWYWx1ZVxuICAgICAgICAgIDogaW5pdGlhbENvbnRlbnRXaWR0aCAtIGRpcmVjdGlvbkZhY3RvciAqIHN0ZXBWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09IFwiSG9tZVwiICYmIGxheW91dCA9PT0gXCJob3Jpem9udGFsXCIgJiYgdHlwZW9mIGNvbnRlbnRIZWlnaHRNaW4gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRIZWlnaHRNaW47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSBcIkhvbWVcIiAmJiBsYXlvdXQgPT09IFwidmVydGljYWxcIiAmJiB0eXBlb2YgY29udGVudFdpZHRoTWluID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBjb250ZW50V2lkdGhNaW47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSBcIkVuZFwiICYmIGxheW91dCA9PT0gXCJob3Jpem9udGFsXCIgJiYgdHlwZW9mIGNvbnRlbnRIZWlnaHRNYXggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRIZWlnaHRNYXg7XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSBcIkVuZFwiICYmIGxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiICYmIHR5cGVvZiBjb250ZW50V2lkdGhNYXggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRXaWR0aE1heDtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09IFwiUGFnZURvd25cIikge1xuICAgICAgICByZXR1cm4gbGF5b3V0ID09PSBcImhvcml6b250YWxcIlxuICAgICAgICAgID8gaW5pdGlhbENvbnRlbnRIZWlnaHQgLSBtdWx0aXBsaWVkU3RlcFxuICAgICAgICAgIDogaW5pdGlhbENvbnRlbnRXaWR0aCAtIG11bHRpcGxpZWRTdGVwO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gXCJQYWdlVXBcIikge1xuICAgICAgICByZXR1cm4gbGF5b3V0ID09PSBcImhvcml6b250YWxcIlxuICAgICAgICAgID8gaW5pdGlhbENvbnRlbnRIZWlnaHQgKyBtdWx0aXBsaWVkU3RlcFxuICAgICAgICAgIDogaW5pdGlhbENvbnRlbnRXaWR0aCArIG11bHRpcGxpZWRTdGVwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICB0aGlzLmluaXRpYWxLZXlkb3duV2lkdGggPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuc2V0SW5pdGlhbENvbnRlbnRXaWR0aCgpO1xuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldEtleUFkanVzdGVkU2l6ZShldmVudCk7XG4gICAgICBpZiAodHlwZW9mIHdpZHRoID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHRoaXMuc2V0Q29udGVudFdpZHRoKHdpZHRoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaW5pdGlhbEtleWRvd25IZWlnaHQgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuc2V0SW5pdGlhbENvbnRlbnRIZWlnaHQoKTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0S2V5QWRqdXN0ZWRTaXplKGV2ZW50KTtcbiAgICAgIGlmICh0eXBlb2YgaGVpZ2h0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHRoaXMuc2V0Q29udGVudEhlaWdodChoZWlnaHQpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zZXBhcmF0b3JLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmxheW91dCA9PT0gXCJob3Jpem9udGFsXCJcbiAgICAgICAgPyB0aGlzLmluaXRpYWxLZXlkb3duSGVpZ2h0KGV2ZW50KVxuICAgICAgICA6IHRoaXMuaW5pdGlhbEtleWRvd25XaWR0aChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLnNlcGFyYXRvclBvaW50ZXJNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgeyBlbCwgbGF5b3V0LCBpbml0aWFsQ29udGVudFdpZHRoLCBpbml0aWFsQ29udGVudEhlaWdodCwgcG9zaXRpb24sIGluaXRpYWxDbGllbnRYLCBpbml0aWFsQ2xpZW50WSwgfSA9IHRoaXM7XG4gICAgICBjb25zdCBvZmZzZXQgPSBsYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiID8gZXZlbnQuY2xpZW50WSAtIGluaXRpYWxDbGllbnRZIDogZXZlbnQuY2xpZW50WCAtIGluaXRpYWxDbGllbnRYO1xuICAgICAgY29uc3QgYWRqdXN0bWVudERpcmVjdGlvbiA9IGxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiICYmIGdldEVsZW1lbnREaXIoZWwpID09PSBcInJ0bFwiID8gLTEgOiAxO1xuICAgICAgY29uc3QgYWRqdXN0ZWRPZmZzZXQgPSBsYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiXG4gICAgICAgID8gcG9zaXRpb24gPT09IFwiZW5kXCJcbiAgICAgICAgICA/IC1hZGp1c3RtZW50RGlyZWN0aW9uICogb2Zmc2V0XG4gICAgICAgICAgOiBhZGp1c3RtZW50RGlyZWN0aW9uICogb2Zmc2V0XG4gICAgICAgIDogcG9zaXRpb24gPT09IFwiZW5kXCJcbiAgICAgICAgICA/IC1hZGp1c3RtZW50RGlyZWN0aW9uICogb2Zmc2V0XG4gICAgICAgICAgOiBhZGp1c3RtZW50RGlyZWN0aW9uICogb2Zmc2V0O1xuICAgICAgbGF5b3V0ID09PSBcImhvcml6b250YWxcIlxuICAgICAgICA/IHRoaXMuc2V0Q29udGVudEhlaWdodChpbml0aWFsQ29udGVudEhlaWdodCArIGFkanVzdGVkT2Zmc2V0KVxuICAgICAgICA6IHRoaXMuc2V0Q29udGVudFdpZHRoKGluaXRpYWxDb250ZW50V2lkdGggKyBhZGp1c3RlZE9mZnNldCk7XG4gICAgfTtcbiAgICB0aGlzLnNlcGFyYXRvclBvaW50ZXJVcCA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCFpc1ByaW1hcnlQb2ludGVyQnV0dG9uKGV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCB0aGlzLnNlcGFyYXRvclBvaW50ZXJVcCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgdGhpcy5zZXBhcmF0b3JQb2ludGVyTW92ZSk7XG4gICAgfTtcbiAgICB0aGlzLnNldEluaXRpYWxDb250ZW50SGVpZ2h0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5pbml0aWFsQ29udGVudEhlaWdodCA9IHRoaXMuY29udGVudEVsPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgfTtcbiAgICB0aGlzLnNldEluaXRpYWxDb250ZW50V2lkdGggPSAoKSA9PiB7XG4gICAgICB0aGlzLmluaXRpYWxDb250ZW50V2lkdGggPSB0aGlzLmNvbnRlbnRFbD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgfTtcbiAgICB0aGlzLnNlcGFyYXRvclBvaW50ZXJEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB7IHNlcGFyYXRvckVsIH0gPSB0aGlzO1xuICAgICAgc2VwYXJhdG9yRWwgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gc2VwYXJhdG9yRWwgJiYgc2VwYXJhdG9yRWwuZm9jdXMoKTtcbiAgICAgIGlmICh0aGlzLmxheW91dCA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgdGhpcy5zZXRJbml0aWFsQ29udGVudEhlaWdodCgpO1xuICAgICAgICB0aGlzLmluaXRpYWxDbGllbnRZID0gZXZlbnQuY2xpZW50WTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNldEluaXRpYWxDb250ZW50V2lkdGgoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsQ2xpZW50WCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIHRoaXMuc2VwYXJhdG9yUG9pbnRlclVwKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCB0aGlzLnNlcGFyYXRvclBvaW50ZXJNb3ZlKTtcbiAgICB9O1xuICAgIHRoaXMuY29ubmVjdFNlcGFyYXRvciA9IChzZXBhcmF0b3JFbCkgPT4ge1xuICAgICAgdGhpcy5kaXNjb25uZWN0U2VwYXJhdG9yKCk7XG4gICAgICB0aGlzLnNlcGFyYXRvckVsID0gc2VwYXJhdG9yRWw7XG4gICAgICBzZXBhcmF0b3JFbD8uYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHRoaXMuc2VwYXJhdG9yUG9pbnRlckRvd24pO1xuICAgIH07XG4gICAgdGhpcy5kaXNjb25uZWN0U2VwYXJhdG9yID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXBhcmF0b3JFbD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHRoaXMuc2VwYXJhdG9yUG9pbnRlckRvd24pO1xuICAgIH07XG4gICAgdGhpcy5zZXRBY3Rpb25CYXJzTGF5b3V0ID0gKGFjdGlvbkJhcnMpID0+IHtcbiAgICAgIGFjdGlvbkJhcnMuZm9yRWFjaCgoYWN0aW9uQmFyKSA9PiAoYWN0aW9uQmFyLmxheW91dCA9IHRoaXMubGF5b3V0KSk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUFjdGlvbkJhclNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGFjdGlvbkJhcnMgPSBzbG90Q2hhbmdlR2V0QXNzaWduZWRFbGVtZW50cyhldmVudCkuZmlsdGVyKChlbCkgPT4gZWw/Lm1hdGNoZXMoXCJjYWxjaXRlLWFjdGlvbi1iYXJcIikpO1xuICAgICAgdGhpcy5hY3Rpb25CYXJzID0gYWN0aW9uQmFycztcbiAgICAgIHRoaXMuc2V0QWN0aW9uQmFyc0xheW91dChhY3Rpb25CYXJzKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlSGVhZGVyU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNIZWFkZXIgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgdGhpcy5kZXRhY2hlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheU1vZGUgPSBcImRvY2tcIjtcbiAgICB0aGlzLmRldGFjaGVkSGVpZ2h0U2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oZWlnaHRTY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLndpZHRoU2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLmxheW91dCA9IFwidmVydGljYWxcIjtcbiAgICB0aGlzLnBvc2l0aW9uID0gXCJzdGFydFwiO1xuICAgIHRoaXMucmVzaXphYmxlID0gZmFsc2U7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb250ZW50V2lkdGggPSBudWxsO1xuICAgIHRoaXMuY29udGVudEhlaWdodCA9IG51bGw7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuaGFzSGVhZGVyID0gZmFsc2U7XG4gIH1cbiAgaGFuZGxlRGV0YWNoZWQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZGlzcGxheU1vZGUgPSBcImZsb2F0XCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuZGlzcGxheU1vZGUgPT09IFwiZmxvYXRcIikge1xuICAgICAgdGhpcy5kaXNwbGF5TW9kZSA9IFwiZG9ja1wiO1xuICAgIH1cbiAgfVxuICBoYW5kbGVEaXNwbGF5TW9kZSh2YWx1ZSkge1xuICAgIHRoaXMuZGV0YWNoZWQgPSB2YWx1ZSA9PT0gXCJmbG9hdFwiO1xuICB9XG4gIGhhbmRsZURldGFjaGVkSGVpZ2h0U2NhbGUodmFsdWUpIHtcbiAgICB0aGlzLmhlaWdodFNjYWxlID0gdmFsdWU7XG4gIH1cbiAgaGFuZGxlSGVpZ2h0U2NhbGUodmFsdWUpIHtcbiAgICB0aGlzLmRldGFjaGVkSGVpZ2h0U2NhbGUgPSB2YWx1ZTtcbiAgfVxuICBsYXlvdXRIYW5kbGVyKCkge1xuICAgIHRoaXMuc2V0QWN0aW9uQmFyc0xheW91dCh0aGlzLmFjdGlvbkJhcnMpO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLmRpc2Nvbm5lY3RTZXBhcmF0b3IoKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHRoaXMudXBkYXRlQXJpYVZhbHVlcygpO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlckhlYWRlcigpIHtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbnRlbnRIZWFkZXIsIGhpZGRlbjogIXRoaXMuaGFzSGVhZGVyLCBrZXk6IFwiaGVhZGVyXCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5oZWFkZXIsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVIZWFkZXJTbG90Q2hhbmdlIH0pKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29sbGFwc2VkLCBwb3NpdGlvbiwgaW5pdGlhbENvbnRlbnRXaWR0aCwgaW5pdGlhbENvbnRlbnRIZWlnaHQsIGNvbnRlbnRXaWR0aCwgY29udGVudFdpZHRoTWF4LCBjb250ZW50V2lkdGhNaW4sIGNvbnRlbnRIZWlnaHQsIGNvbnRlbnRIZWlnaHRNYXgsIGNvbnRlbnRIZWlnaHRNaW4sIHJlc2l6YWJsZSwgbGF5b3V0LCBkaXNwbGF5TW9kZSwgfSA9IHRoaXM7XG4gICAgY29uc3QgZGlyID0gZ2V0RWxlbWVudERpcih0aGlzLmVsKTtcbiAgICBjb25zdCBhbGxvd1Jlc2l6aW5nID0gZGlzcGxheU1vZGUgIT09IFwiZmxvYXRcIiAmJiByZXNpemFibGU7XG4gICAgY29uc3Qgc3R5bGUgPSBhbGxvd1Jlc2l6aW5nXG4gICAgICA/IGxheW91dCA9PT0gXCJob3Jpem9udGFsXCJcbiAgICAgICAgPyBjb250ZW50SGVpZ2h0XG4gICAgICAgICAgPyB7IGhlaWdodDogYCR7Y29udGVudEhlaWdodH1weGAgfVxuICAgICAgICAgIDogbnVsbFxuICAgICAgICA6IGNvbnRlbnRXaWR0aFxuICAgICAgICAgID8geyB3aWR0aDogYCR7Y29udGVudFdpZHRofXB4YCB9XG4gICAgICAgICAgOiBudWxsXG4gICAgICA6IG51bGw7XG4gICAgY29uc3Qgc2VwYXJhdG9yTm9kZSA9ICFjb2xsYXBzZWQgJiYgYWxsb3dSZXNpemluZyA/IChoKFwiZGl2XCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMucmVzaXplLCBcImFyaWEtb3JpZW50YXRpb25cIjogbGF5b3V0ID09PSBcImhvcml6b250YWxcIiA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiLCBcImFyaWEtdmFsdWVtYXhcIjogbGF5b3V0ID09IFwiaG9yaXpvbnRhbFwiID8gY29udGVudEhlaWdodE1heCA6IGNvbnRlbnRXaWR0aE1heCwgXCJhcmlhLXZhbHVlbWluXCI6IGxheW91dCA9PSBcImhvcml6b250YWxcIiA/IGNvbnRlbnRIZWlnaHRNaW4gOiBjb250ZW50V2lkdGhNaW4sIFwiYXJpYS12YWx1ZW5vd1wiOiBsYXlvdXQgPT0gXCJob3Jpem9udGFsXCJcbiAgICAgICAgPyBjb250ZW50SGVpZ2h0ID8/IGluaXRpYWxDb250ZW50SGVpZ2h0XG4gICAgICAgIDogY29udGVudFdpZHRoID8/IGluaXRpYWxDb250ZW50V2lkdGgsIGNsYXNzOiBDU1Muc2VwYXJhdG9yLCBrZXk6IFwic2VwYXJhdG9yXCIsIG9uS2V5RG93bjogdGhpcy5zZXBhcmF0b3JLZXlEb3duLCByb2xlOiBcInNlcGFyYXRvclwiLCB0YWJJbmRleDogMCwgXCJ0b3VjaC1hY3Rpb25cIjogXCJub25lXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiB0aGlzLmNvbm5lY3RTZXBhcmF0b3IgfSkpIDogbnVsbDtcbiAgICBjb25zdCBnZXRBbmltYXRpb25EaXIgPSAoKSA9PiB7XG4gICAgICBpZiAobGF5b3V0ID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICByZXR1cm4gcG9zaXRpb24gPT09IFwic3RhcnRcIlxuICAgICAgICAgID8gQ1NTX1VUSUxJVFkuY2FsY2l0ZUFuaW1hdGVJbkRvd25cbiAgICAgICAgICA6IENTU19VVElMSVRZLmNhbGNpdGVBbmltYXRlSW5VcDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBpc1N0YXJ0ID0gKGRpciA9PT0gXCJsdHJcIiAmJiBwb3NpdGlvbiA9PT0gXCJlbmRcIikgfHwgKGRpciA9PT0gXCJydGxcIiAmJiBwb3NpdGlvbiA9PT0gXCJzdGFydFwiKTtcbiAgICAgICAgcmV0dXJuIGlzU3RhcnQgPyBDU1NfVVRJTElUWS5jYWxjaXRlQW5pbWF0ZUluTGVmdCA6IENTU19VVElMSVRZLmNhbGNpdGVBbmltYXRlSW5SaWdodDtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGNvbnRlbnROb2RlID0gKGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTX1VUSUxJVFkucnRsXTogZGlyID09PSBcInJ0bFwiLFxuICAgICAgICBbQ1NTLmNvbnRlbnRdOiB0cnVlLFxuICAgICAgICBbQ1NTLmNvbnRlbnRPdmVybGF5XTogZGlzcGxheU1vZGUgPT09IFwib3ZlcmxheVwiLFxuICAgICAgICBbQ1NTLmNvbnRlbnRGbG9hdF06IGRpc3BsYXlNb2RlID09PSBcImZsb2F0XCIsXG4gICAgICAgIFtDU1NfVVRJTElUWS5jYWxjaXRlQW5pbWF0ZV06IGRpc3BsYXlNb2RlID09PSBcIm92ZXJsYXlcIixcbiAgICAgICAgW2dldEFuaW1hdGlvbkRpcigpXTogZGlzcGxheU1vZGUgPT09IFwib3ZlcmxheVwiLFxuICAgICAgfSwgaGlkZGVuOiBjb2xsYXBzZWQsIGtleTogXCJjb250ZW50XCIsIHN0eWxlOiBzdHlsZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IHRoaXMuc3RvcmVDb250ZW50RWwgfSwgdGhpcy5yZW5kZXJIZWFkZXIoKSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGVudEJvZHkgfSwgaChcInNsb3RcIiwgbnVsbCkpLCBzZXBhcmF0b3JOb2RlKSk7XG4gICAgY29uc3QgYWN0aW9uQmFyTm9kZSA9IChoKFwic2xvdFwiLCB7IGtleTogXCJhY3Rpb24tYmFyXCIsIG5hbWU6IFNMT1RTLmFjdGlvbkJhciwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZUFjdGlvbkJhclNsb3RDaGFuZ2UgfSkpO1xuICAgIGNvbnN0IG1haW5Ob2RlcyA9IFthY3Rpb25CYXJOb2RlLCBjb250ZW50Tm9kZV07XG4gICAgaWYgKHBvc2l0aW9uID09PSBcImVuZFwiKSB7XG4gICAgICBtYWluTm9kZXMucmV2ZXJzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gaChcImRpdlwiLCB7IGNsYXNzOiB7IFtDU1MuY29udGFpbmVyXTogdHJ1ZSB9IH0sIG1haW5Ob2Rlcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIHByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRDb250ZW50V2lkdGgod2lkdGgpIHtcbiAgICBjb25zdCB7IGNvbnRlbnRXaWR0aE1heCwgY29udGVudFdpZHRoTWluIH0gPSB0aGlzO1xuICAgIGNvbnN0IHJvdW5kZWRXaWR0aCA9IE1hdGgucm91bmQod2lkdGgpO1xuICAgIHRoaXMuY29udGVudFdpZHRoID1cbiAgICAgIHR5cGVvZiBjb250ZW50V2lkdGhNYXggPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGNvbnRlbnRXaWR0aE1pbiA9PT0gXCJudW1iZXJcIlxuICAgICAgICA/IGNsYW1wKHJvdW5kZWRXaWR0aCwgY29udGVudFdpZHRoTWluLCBjb250ZW50V2lkdGhNYXgpXG4gICAgICAgIDogcm91bmRlZFdpZHRoO1xuICB9XG4gIHVwZGF0ZUFyaWFWYWx1ZXMoKSB7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXM7XG4gICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGNvbnRlbnRFbCAmJiBnZXRDb21wdXRlZFN0eWxlKGNvbnRlbnRFbCk7XG4gICAgaWYgKCFjb21wdXRlZFN0eWxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubGF5b3V0ID09PSBcImhvcml6b250YWxcIlxuICAgICAgPyB0aGlzLnVwZGF0ZUhlaWdodHMoY29tcHV0ZWRTdHlsZSlcbiAgICAgIDogdGhpcy51cGRhdGVXaWR0aHMoY29tcHV0ZWRTdHlsZSk7XG4gICAgZm9yY2VVcGRhdGUodGhpcyk7XG4gIH1cbiAgc2V0Q29udGVudEhlaWdodChoZWlnaHQpIHtcbiAgICBjb25zdCB7IGNvbnRlbnRIZWlnaHRNYXgsIGNvbnRlbnRIZWlnaHRNaW4gfSA9IHRoaXM7XG4gICAgY29uc3Qgcm91bmRlZFdpZHRoID0gTWF0aC5yb3VuZChoZWlnaHQpO1xuICAgIHRoaXMuY29udGVudEhlaWdodCA9XG4gICAgICB0eXBlb2YgY29udGVudEhlaWdodE1heCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgY29udGVudEhlaWdodE1pbiA9PT0gXCJudW1iZXJcIlxuICAgICAgICA/IGNsYW1wKHJvdW5kZWRXaWR0aCwgY29udGVudEhlaWdodE1pbiwgY29udGVudEhlaWdodE1heClcbiAgICAgICAgOiByb3VuZGVkV2lkdGg7XG4gIH1cbiAgdXBkYXRlV2lkdGhzKGNvbXB1dGVkU3R5bGUpIHtcbiAgICBjb25zdCBtYXggPSBwYXJzZUludChjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJtYXgtd2lkdGhcIiksIDEwKTtcbiAgICBjb25zdCBtaW4gPSBwYXJzZUludChjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJtaW4td2lkdGhcIiksIDEwKTtcbiAgICBjb25zdCB2YWx1ZU5vdyA9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpLCAxMCk7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZU5vdyA9PT0gXCJudW1iZXJcIiAmJiAhaXNOYU4odmFsdWVOb3cpKSB7XG4gICAgICB0aGlzLmluaXRpYWxDb250ZW50V2lkdGggPSB2YWx1ZU5vdztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtYXggPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKG1heCkpIHtcbiAgICAgIHRoaXMuY29udGVudFdpZHRoTWF4ID0gbWF4O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG1pbiA9PT0gXCJudW1iZXJcIiAmJiAhaXNOYU4obWluKSkge1xuICAgICAgdGhpcy5jb250ZW50V2lkdGhNaW4gPSBtaW47XG4gICAgfVxuICB9XG4gIHVwZGF0ZUhlaWdodHMoY29tcHV0ZWRTdHlsZSkge1xuICAgIGNvbnN0IG1heCA9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIm1heC1oZWlnaHRcIiksIDEwKTtcbiAgICBjb25zdCBtaW4gPSBwYXJzZUludChjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJtaW4taGVpZ2h0XCIpLCAxMCk7XG4gICAgY29uc3QgdmFsdWVOb3cgPSBwYXJzZUludChjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJoZWlnaHRcIiksIDEwKTtcbiAgICBpZiAodHlwZW9mIHZhbHVlTm93ID09PSBcIm51bWJlclwiICYmICFpc05hTih2YWx1ZU5vdykpIHtcbiAgICAgIHRoaXMuaW5pdGlhbENvbnRlbnRIZWlnaHQgPSB2YWx1ZU5vdztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtYXggPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKG1heCkpIHtcbiAgICAgIHRoaXMuY29udGVudEhlaWdodE1heCA9IG1heDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtaW4gPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKG1pbikpIHtcbiAgICAgIHRoaXMuY29udGVudEhlaWdodE1pbiA9IG1pbjtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImRldGFjaGVkXCI6IFtcImhhbmRsZURldGFjaGVkXCJdLFxuICAgIFwiZGlzcGxheU1vZGVcIjogW1wiaGFuZGxlRGlzcGxheU1vZGVcIl0sXG4gICAgXCJkZXRhY2hlZEhlaWdodFNjYWxlXCI6IFtcImhhbmRsZURldGFjaGVkSGVpZ2h0U2NhbGVcIl0sXG4gICAgXCJoZWlnaHRTY2FsZVwiOiBbXCJoYW5kbGVIZWlnaHRTY2FsZVwiXSxcbiAgICBcImxheW91dFwiOiBbXCJsYXlvdXRIYW5kbGVyXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBzaGVsbFBhbmVsQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLXNoZWxsLXBhbmVsXCIsIHtcbiAgICBcImNvbGxhcHNlZFwiOiBbNTE2XSxcbiAgICBcImRldGFjaGVkXCI6IFs1MTZdLFxuICAgIFwiZGlzcGxheU1vZGVcIjogWzUxMywgXCJkaXNwbGF5LW1vZGVcIl0sXG4gICAgXCJkZXRhY2hlZEhlaWdodFNjYWxlXCI6IFs1MTMsIFwiZGV0YWNoZWQtaGVpZ2h0LXNjYWxlXCJdLFxuICAgIFwiaGVpZ2h0U2NhbGVcIjogWzUxMywgXCJoZWlnaHQtc2NhbGVcIl0sXG4gICAgXCJ3aWR0aFNjYWxlXCI6IFs1MTMsIFwid2lkdGgtc2NhbGVcIl0sXG4gICAgXCJsYXlvdXRcIjogWzUxM10sXG4gICAgXCJwb3NpdGlvblwiOiBbNTEzXSxcbiAgICBcInJlc2l6YWJsZVwiOiBbNTE2XSxcbiAgICBcIm1lc3NhZ2VzXCI6IFsxMDQwXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogWzEwNDBdLFxuICAgIFwiY29udGVudFdpZHRoXCI6IFszMl0sXG4gICAgXCJjb250ZW50SGVpZ2h0XCI6IFszMl0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwiaGFzSGVhZGVyXCI6IFszMl1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXNoZWxsLXBhbmVsXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLXNoZWxsLXBhbmVsXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgU2hlbGxQYW5lbCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlU2hlbGxQYW5lbCA9IFNoZWxsUGFuZWw7XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gZGVmaW5lQ3VzdG9tRWxlbWVudCQxO1xuXG5leHBvcnQgeyBDYWxjaXRlU2hlbGxQYW5lbCwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZm9yY2VVcGRhdGUgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuXG5jb25zdCBvYnNlcnZlZCA9IG5ldyBTZXQoKTtcbmxldCBtdXRhdGlvbk9ic2VydmVyO1xuY29uc3Qgb2JzZXJ2ZXJPcHRpb25zID0geyBjaGlsZExpc3Q6IHRydWUgfTtcbi8qKlxuICogSGVscGVyIHRvIHNldCB1cCBhIGNvbmRpdGlvbmFsIHNsb3QgY29tcG9uZW50IG9uIGNvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBkZXByZWNhdGVkIFVzZSBgb25TbG90Y2hhbmdlYCBldmVudCB3aXRoIGBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50YCBET00gdXRpbGl0eSBpbnN0ZWFkLlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpfSAvPn1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBpZiAoIW11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCBwcm9jZXNzTXV0YXRpb25zKTtcbiAgfVxuICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoY29tcG9uZW50LmVsLCBvYnNlcnZlck9wdGlvbnMpO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gdGVhciBkb3duIGEgY29uZGl0aW9uYWwgc2xvdCBjb21wb25lbnQgb24gZGlzY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQGRlcHJlY2F0ZWQgVXNlIGBvblNsb3RjaGFuZ2VgIGV2ZW50IHdpdGggYHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnRgIERPTSB1dGlsaXR5IGluc3RlYWQuXG4gKlxuICogYGBgXG4gKiA8c2xvdCBvblNsb3RjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5teVNsb3RIYXNFbGVtZW50ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCl9IC8+fVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIG9ic2VydmVkLmRlbGV0ZShjb21wb25lbnQuZWwpO1xuICAvLyB3ZSBleHBsaWNpdGx5IHByb2Nlc3MgcXVldWVkIG11dGF0aW9ucyBhbmQgZGlzY29ubmVjdCBhbmQgcmVjb25uZWN0XG4gIC8vIHRoZSBvYnNlcnZlciB1bnRpbCBNdXRhdGlvbk9ic2VydmVyIGdldHMgYW4gYHVub2JzZXJ2ZWAgbWV0aG9kXG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2RvbS9pc3N1ZXMvMTI2XG4gIHByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25PYnNlcnZlci50YWtlUmVjb3JkcygpKTtcbiAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIGZvciAoY29uc3QgW2VsZW1lbnRdIG9mIG9ic2VydmVkLmVudHJpZXMoKSkge1xuICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCBvYnNlcnZlck9wdGlvbnMpO1xuICB9XG59XG5mdW5jdGlvbiBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9ucykge1xuICBtdXRhdGlvbnMuZm9yRWFjaCgoeyB0YXJnZXQgfSkgPT4ge1xuICAgIGZvcmNlVXBkYXRlKHRhcmdldCk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IGFzIGMsIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuY29uc3QgY2xhbXAgPSAodmFsdWUsIG1pbiwgbWF4KSA9PiBNYXRoLm1heChtaW4sIE1hdGgubWluKHZhbHVlLCBtYXgpKTtcbmNvbnN0IGRlY2ltYWxOdW1iZXJSZWdleCA9IG5ldyBSZWdFeHAoLyg/OlxcLihcXGQrKSk/KD86W2VFXShbKy1dP1xcZCspKT8kLyk7XG4vKipcbiAqIFJldHVybnMgdGhlIHF1YW50aXR5IG9mIHJlYWwgZGVjaW1hbCBwbGFjZXMgZm9yIGEgbnVtYmVyLCB3aGljaCBleGNsdWRlcyB0cmFpbGluZyB6ZXJvcy5cbiAqXG4gKiBBZGFwdGVkIGZyb20ge0BsaW5rIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNDU0NTE4L2phdmFzY3JpcHQtaG93LXRvLXJldHJpZXZlLXRoZS1udW1iZXItb2YtZGVjaW1hbHMtb2YtYS1zdHJpbmctbnVtYmVyfS5cbiAqXG4gKiBAcGFyYW0gZGVjaW1hbCAtIGRlY2ltYWwgdmFsdWVcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnMge251bWJlcn0gdGhlIGFtb3VudCBvZiBkZWNpbWFsIHBsYWNlcyBpbiBhIG51bWJlclxuICovXG5jb25zdCBkZWNpbWFsUGxhY2VzID0gKHZhbHVlKSA9PiB7XG4gIGNvbnN0IG1hdGNoID0gKFwiXCIgKyB2YWx1ZSkubWF0Y2goZGVjaW1hbE51bWJlclJlZ2V4KTtcbiAgaWYgKCFtYXRjaCB8fCBwYXJzZUludChtYXRjaFsxXSkgPT09IDApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICByZXR1cm4gTWF0aC5tYXgoMCwgXG4gIC8vIE51bWJlciBvZiBkaWdpdHMgcmlnaHQgb2YgZGVjaW1hbCBwb2ludC5cbiAgKG1hdGNoWzFdID8gbWF0Y2hbMV0ubGVuZ3RoIDogMCkgLVxuICAgIC8vIEFkanVzdCBmb3Igc2NpZW50aWZpYyBub3RhdGlvbi5cbiAgICAobWF0Y2hbMl0gPyArbWF0Y2hbMl0gOiAwKSk7XG59O1xuZnVuY3Rpb24gZ2V0RGVjaW1hbHModmFsdWUpIHtcbiAgaWYgKGRlY2ltYWxQbGFjZXModmFsdWUpID4gMCAmJiB2YWx1ZSA+IDApIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChgMC4ke3ZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdfWApO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHJlbWFwKHZhbHVlLCBmcm9tTWluLCBmcm9tTWF4LCB0b01pbiwgdG9NYXgpIHtcbiAgcmV0dXJuICgodmFsdWUgLSBmcm9tTWluKSAqICh0b01heCAtIHRvTWluKSkgLyAoZnJvbU1heCAtIGZyb21NaW4pICsgdG9NaW47XG59XG4vKipcbiAqIEhlbHBlciB0byBkZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBjbG9zZSB0byB0aGUgZWRnZSBvZiBhIHJhbmdlIHdpdGhpbiBhIHRocmVzaG9sZC5cbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSByYW5nZVxuICogQHBhcmFtIHRocmVzaG9sZFxuICogQHJldHVybnMgLTEgaWYgY2xvc2UgdG8gbG93ZXIgZWRnZSwgMSBpZiBjbG9zZSB0byB1cHBlciBlZGdlLCAwIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gY2xvc2VUb1JhbmdlRWRnZSh2YWx1ZSwgcmFuZ2UsIHRocmVzaG9sZCkge1xuICByZXR1cm4gdmFsdWUgPCB0aHJlc2hvbGQgPyAtMSA6IHZhbHVlID4gcmFuZ2UgLSB0aHJlc2hvbGQgPyAxIDogMDtcbn1cblxuZXhwb3J0IHsgY2xvc2VUb1JhbmdlRWRnZSBhcyBhLCBjbGFtcCBhcyBjLCBkZWNpbWFsUGxhY2VzIGFzIGQsIGdldERlY2ltYWxzIGFzIGcsIHJlbWFwIGFzIHIgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IEJ1aWxkLCBnZXRBc3NldFBhdGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFN1cHBvcnRlZExvY2FsZSB9IGZyb20gJy4vbG9jYWxlLmpzJztcblxuY29uc3QgY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlID0ge307XG5hc3luYyBmdW5jdGlvbiBnZXRNZXNzYWdlQnVuZGxlKGxhbmcsIGNvbXBvbmVudCkge1xuICBjb25zdCBrZXkgPSBgJHtjb21wb25lbnR9XyR7bGFuZ31gO1xuICBpZiAoY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV0pIHtcbiAgICByZXR1cm4gY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV07XG4gIH1cbiAgY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV0gPSBmZXRjaChnZXRBc3NldFBhdGgoYC4vYXNzZXRzLyR7Y29tcG9uZW50fS90OW4vbWVzc2FnZXNfJHtsYW5nfS5qc29uYCkpXG4gICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICBpZiAoIXJlc3Aub2spIHtcbiAgICAgIHRocm93TWVzc2FnZUZldGNoRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3AuanNvbigpO1xuICB9KVxuICAgIC5jYXRjaCgoKSA9PiB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCkpO1xuICByZXR1cm4gY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV07XG59XG5mdW5jdGlvbiB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJjb3VsZCBub3QgZmV0Y2ggY29tcG9uZW50IG1lc3NhZ2UgYnVuZGxlXCIpO1xufVxuZnVuY3Rpb24gbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm1lc3NhZ2VzID0ge1xuICAgIC4uLmNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMsXG4gICAgLi4uY29tcG9uZW50Lm1lc3NhZ2VPdmVycmlkZXMsXG4gIH07XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBzZXRzIHVwIHRoZSBtZXNzYWdlcyB1c2VkIGJ5IHRoZSBjb21wb25lbnQuIEl0IHNob3VsZCBiZSBhd2FpdGVkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2V0VXBNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyA9IGF3YWl0IGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBjb21wb25lbnQuZWZmZWN0aXZlTG9jYWxlKTtcbiAgbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpO1xufVxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpIHtcbiAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgY29uc3QgeyBlbCB9ID0gY29tcG9uZW50O1xuICBjb25zdCB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGNvbXBvbmVudE5hbWUgPSB0YWcucmVwbGFjZShcImNhbGNpdGUtXCIsIFwiXCIpO1xuICByZXR1cm4gZ2V0TWVzc2FnZUJ1bmRsZShnZXRTdXBwb3J0ZWRMb2NhbGUobGFuZywgXCJ0OW5cIiksIGNvbXBvbmVudE5hbWUpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgbXVzdCBiZSBzZXQgdXAgZm9yIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBkZWZhdWx0IG1lc3NhZ2UgYnVuZGxlIGlmIHRoZSBsb2NhbGUgY2hhbmdlcy5cbiAqXG4gKiBJdCBjYW4gYmUgc2V0IHVwIGluICoqZWl0aGVyKiogb2YgdGhlIGZvbGxvd2luZyB3YXlzOlxuICpcbiAqIDEuIGNhbGxlZCBmcm9tIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYG9uTG9jYWxlQ2hhbmdlYCBtZXRob2Qgb3JcbiAqIDIuIGNhbGxlZCBmcm9tIGEgd2F0Y2hlciBjb25maWd1cmVkIHRvIHdhdGNoIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYGVmZmVjdGl2ZUxvY2FsZWAgcHJvcFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBsYW5nXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBzZXRzIHVwIGludGVybmFscyBmb3IgbWVzc2FnZXMgc3VwcG9ydC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGNvbm5lY3RlZENhbGxiYWNrYFxuICpcbiAqICoqTm90ZSoqOiB0aGlzIG11c3QgYmUgY2FsbGVkIGFmdGVyIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYGNvbm5lY3RMb2NhbGl6ZWRgIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHRlYXJzIGRvd24gaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0TWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5vbk1lc3NhZ2VzQ2hhbmdlID0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdE9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gIG1lcmdlTWVzc2FnZXModGhpcyk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RNZXNzYWdlcyBhcyBjLCBkaXNjb25uZWN0TWVzc2FnZXMgYXMgZCwgc2V0VXBNZXNzYWdlcyBhcyBzLCB1cGRhdGVNZXNzYWdlcyBhcyB1IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=