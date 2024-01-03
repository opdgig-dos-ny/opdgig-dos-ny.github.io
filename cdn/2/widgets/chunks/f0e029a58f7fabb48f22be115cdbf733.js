"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-list-item_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-list-item.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-list-item.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteListItem: () => (/* binding */ CalciteListItem),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _utils3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils3.js */ "./node_modules/@esri/calcite-components/dist/components/utils3.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _handle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./handle.js */ "./node_modules/@esri/calcite-components/dist/components/handle.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */












const listItemCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;--calcite-list-item-icon-color:var(--calcite-ui-brand);--calcite-list-item-spacing-indent:1rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.container *{box-sizing:border-box}.container:hover{cursor:pointer;background-color:var(--calcite-ui-foreground-2)}.container:active{background-color:var(--calcite-ui-foreground-1)}.container--border-selected{border-inline-start:4px solid var(--calcite-ui-brand)}.container--border-unselected{border-inline-start:4px solid transparent}.nested-container{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1)}.nested-container--hidden{display:none}.content-container{display:flex;flex:1 1 auto;align-items:stretch;padding:0px;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}tr,td{outline-color:transparent}tr:focus,td:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description,.content-bottom{font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child,.content-bottom:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-ui-text-1)}.description{margin-block-start:0.125rem;color:var(--calcite-ui-text-3)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-bottom{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-inline:0.75rem;color:var(--calcite-list-item-icon-color)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.drag-container,.open-container{display:flex;align-items:center}.open-container,.selection-container{cursor:pointer}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}::slotted(calcite-list-item){border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}:host([hidden]){display:none}[hidden]{display:none}";

const focusMap = new Map();
const listSelector = "calcite-list";
const ListItem = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteListItemSelect = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteListItemSelect", 6);
    this.calciteListItemClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteListItemClose", 6);
    this.calciteInternalListItemSelect = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteInternalListItemSelect", 6);
    this.calciteInternalListItemActive = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteInternalListItemActive", 6);
    this.calciteInternalFocusPreviousItem = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteInternalFocusPreviousItem", 6);
    this.calciteInternalListItemChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteInternalListItemChange", 6);
    this.closeClickHandler = () => {
      this.closed = true;
      this.calciteListItemClose.emit();
    };
    this.handleContentSlotChange = (event) => {
      this.hasCustomContent = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleActionsStartSlotChange = (event) => {
      this.hasActionsStart = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleActionsEndSlotChange = (event) => {
      this.hasActionsEnd = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleContentStartSlotChange = (event) => {
      this.hasContentStart = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleContentEndSlotChange = (event) => {
      this.hasContentEnd = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleContentBottomSlotChange = (event) => {
      this.hasContentBottom = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleDefaultSlotChange = (event) => {
      this.handleOpenableChange(event.target);
    };
    this.toggleOpen = () => {
      this.open = !this.open;
    };
    this.itemClicked = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      this.toggleSelected();
      this.calciteInternalListItemActive.emit();
    };
    this.toggleSelected = () => {
      const { selectionMode, selected } = this;
      if (this.disabled) {
        return;
      }
      if (selectionMode === "multiple" || selectionMode === "single") {
        this.selected = !selected;
      }
      else if (selectionMode === "single-persist") {
        this.selected = true;
      }
      this.calciteListItemSelect.emit();
    };
    this.handleItemKeyDown = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      const { key } = event;
      const composedPath = event.composedPath();
      const { containerEl, contentEl, actionsStartEl, actionsEndEl, open, openable } = this;
      const cells = [actionsStartEl, contentEl, actionsEndEl].filter(Boolean);
      const currentIndex = cells.findIndex((cell) => composedPath.includes(cell));
      if (key === "Enter" &&
        !composedPath.includes(actionsStartEl) &&
        !composedPath.includes(actionsEndEl)) {
        event.preventDefault();
        this.toggleSelected();
      }
      else if (key === "ArrowRight") {
        event.preventDefault();
        const nextIndex = currentIndex + 1;
        if (currentIndex === -1) {
          if (!open && openable) {
            this.open = true;
            this.focusCell(null);
          }
          else if (cells[0]) {
            this.focusCell(cells[0]);
          }
        }
        else if (cells[currentIndex] && cells[nextIndex]) {
          this.focusCell(cells[nextIndex]);
        }
      }
      else if (key === "ArrowLeft") {
        event.preventDefault();
        const prevIndex = currentIndex - 1;
        if (currentIndex === -1) {
          this.focusCell(null);
          if (open && openable) {
            this.open = false;
          }
          else {
            this.calciteInternalFocusPreviousItem.emit();
          }
        }
        else if (currentIndex === 0) {
          this.focusCell(null);
          containerEl.focus();
        }
        else if (cells[currentIndex] && cells[prevIndex]) {
          this.focusCell(cells[prevIndex]);
        }
      }
    };
    this.focusCellNull = () => {
      this.focusCell(null);
    };
    this.focusCell = (focusEl, saveFocusIndex = true) => {
      const { contentEl, actionsStartEl, actionsEndEl, parentListEl } = this;
      if (saveFocusIndex) {
        focusMap.set(parentListEl, null);
      }
      [actionsStartEl, contentEl, actionsEndEl].filter(Boolean).forEach((tableCell, cellIndex) => {
        const tabIndexAttr = "tabindex";
        if (tableCell === focusEl) {
          tableCell.setAttribute(tabIndexAttr, "0");
          saveFocusIndex && focusMap.set(parentListEl, cellIndex);
        }
        else {
          tableCell.removeAttribute(tabIndexAttr);
        }
      });
      focusEl?.focus();
    };
    this.active = false;
    this.closable = false;
    this.closed = false;
    this.description = undefined;
    this.disabled = false;
    this.dragHandle = false;
    this.label = undefined;
    this.metadata = undefined;
    this.open = false;
    this.setSize = null;
    this.setPosition = null;
    this.selected = false;
    this.value = undefined;
    this.selectionMode = null;
    this.selectionAppearance = null;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.effectiveLocale = "";
    this.defaultMessages = undefined;
    this.level = null;
    this.visualLevel = null;
    this.parentListEl = undefined;
    this.openable = false;
    this.hasActionsStart = false;
    this.hasActionsEnd = false;
    this.hasCustomContent = false;
    this.hasContentStart = false;
    this.hasContentEnd = false;
    this.hasContentBottom = false;
  }
  activeHandler(active) {
    if (!active) {
      this.focusCell(null, false);
    }
  }
  handleClosedChange() {
    this.emitCalciteInternalListItemChange();
  }
  handleDisabledChange() {
    this.emitCalciteInternalListItemChange();
  }
  handleSelectedChange() {
    this.calciteInternalListItemSelect.emit();
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  handleCalciteInternalListDefaultSlotChanges(event) {
    event.stopPropagation();
    this.handleOpenableChange(this.defaultSlotEl);
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    const { el } = this;
    this.parentListEl = el.closest(listSelector);
    this.level = (0,_utils3_js__WEBPACK_IMPORTED_MODULE_2__.a)(el) + 1;
    this.visualLevel = (0,_utils3_js__WEBPACK_IMPORTED_MODULE_2__.a)(el, true);
    this.setSelectionDefaults();
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.a)(this);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    const { containerEl, contentEl, actionsStartEl, actionsEndEl, parentListEl } = this;
    const focusIndex = focusMap.get(parentListEl);
    if (typeof focusIndex === "number") {
      const cells = [actionsStartEl, contentEl, actionsEndEl].filter(Boolean);
      if (cells[focusIndex]) {
        this.focusCell(cells[focusIndex]);
      }
      else {
        containerEl?.focus();
      }
      return;
    }
    containerEl?.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderSelected() {
    const { selected, selectionMode, selectionAppearance } = this;
    if (selectionMode === "none" || selectionAppearance === "border") {
      return null;
    }
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("td", { class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.selectionContainer, key: "selection-container", onClick: this.itemClicked }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("calcite-icon", { icon: selected
        ? selectionMode === "multiple"
          ? _utils3_js__WEBPACK_IMPORTED_MODULE_2__.I.selectedMultiple
          : _utils3_js__WEBPACK_IMPORTED_MODULE_2__.I.selectedSingle
        : _utils3_js__WEBPACK_IMPORTED_MODULE_2__.I.unselected, scale: "s" })));
  }
  renderDragHandle() {
    return this.dragHandle ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("td", { class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.dragContainer, key: "drag-handle-container" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("calcite-handle", { label: this.label, setPosition: this.setPosition, setSize: this.setSize }))) : null;
  }
  renderOpen() {
    const { el, open, openable, parentListEl } = this;
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(el);
    const icon = openable
      ? open
        ? _utils3_js__WEBPACK_IMPORTED_MODULE_2__.I.open
        : dir === "rtl"
          ? _utils3_js__WEBPACK_IMPORTED_MODULE_2__.I.closedRTL
          : _utils3_js__WEBPACK_IMPORTED_MODULE_2__.I.closedLTR
      : _utils3_js__WEBPACK_IMPORTED_MODULE_2__.I.blank;
    const clickHandler = openable ? this.toggleOpen : this.itemClicked;
    return openable || parentListEl?.openable ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("td", { class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.openContainer, key: "open-container", onClick: clickHandler }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("calcite-icon", { icon: icon, key: icon, scale: "s" }))) : null;
  }
  renderActionsStart() {
    const { label, hasActionsStart } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("td", { "aria-label": label, class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.actionsStart, hidden: !hasActionsStart, key: "actions-start-container", role: "gridcell",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.actionsStartEl = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", { name: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.S.actionsStart, onSlotchange: this.handleActionsStartSlotChange })));
  }
  renderActionsEnd() {
    const { label, hasActionsEnd, closable, messages } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("td", { "aria-label": label, class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.actionsEnd, hidden: !(hasActionsEnd || closable), key: "actions-end-container", role: "gridcell",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.actionsEndEl = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", { name: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.S.actionsEnd, onSlotchange: this.handleActionsEndSlotChange }), closable ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("calcite-action", { appearance: "transparent", icon: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.I.close, key: "close-action", label: messages.close, onClick: this.closeClickHandler, text: messages.close })) : null));
  }
  renderContentStart() {
    const { hasContentStart } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.contentStart, hidden: !hasContentStart }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", { name: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.S.contentStart, onSlotchange: this.handleContentStartSlotChange })));
  }
  renderCustomContent() {
    const { hasCustomContent } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.customContent, hidden: !hasCustomContent }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", { name: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.S.content, onSlotchange: this.handleContentSlotChange })));
  }
  renderContentEnd() {
    const { hasContentEnd } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.contentEnd, hidden: !hasContentEnd }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", { name: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.S.contentEnd, onSlotchange: this.handleContentEndSlotChange })));
  }
  renderContentBottom() {
    const { hasContentBottom, visualLevel } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.contentBottom, hidden: !hasContentBottom, style: { "--calcite-list-item-spacing-indent-multiplier": `${visualLevel}` } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", { name: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.S.contentBottom, onSlotchange: this.handleContentBottomSlotChange })));
  }
  renderDefaultContainer() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: {
        [_utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.nestedContainer]: true,
        [_utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.nestedContainerHidden]: this.openable && !this.open,
      } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", { onSlotchange: this.handleDefaultSlotChange, ref: (el) => (this.defaultSlotEl = el) })));
  }
  renderContentProperties() {
    const { label, description, hasCustomContent } = this;
    return !hasCustomContent && (!!label || !!description) ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.content, key: "content" }, label ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.label, key: "label" }, label)) : null, description ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: _utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.description, key: "description" }, description)) : null)) : null;
  }
  renderContentContainer() {
    const { description, label, selectionMode, hasCustomContent } = this;
    const hasCenterContent = hasCustomContent || !!label || !!description;
    const content = [
      this.renderContentStart(),
      this.renderCustomContent(),
      this.renderContentProperties(),
      this.renderContentEnd(),
    ];
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("td", { "aria-label": label, class: {
        [_utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.contentContainer]: true,
        [_utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.contentContainerSelectable]: selectionMode !== "none",
        [_utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.contentContainerHasCenterContent]: hasCenterContent,
      }, key: "content-container", onClick: this.itemClicked, role: "gridcell",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.contentEl = el) }, content));
  }
  render() {
    const { openable, open, level, setPosition, setSize, active, label, selected, selectionAppearance, selectionMode, closed, visualLevel, } = this;
    const showBorder = selectionMode !== "none" && selectionAppearance === "border";
    const borderSelected = showBorder && selected;
    const borderUnselected = showBorder && !selected;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.Host, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("tr", { "aria-expanded": openable ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(open) : null, "aria-label": label, "aria-level": level, "aria-posinset": setPosition, "aria-selected": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(selected), "aria-setsize": setSize, class: {
        [_utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.container]: true,
        [_utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.containerBorderSelected]: borderSelected,
        [_utils3_js__WEBPACK_IMPORTED_MODULE_2__.C.containerBorderUnselected]: borderUnselected,
      }, hidden: closed, onFocus: this.focusCellNull, onKeyDown: this.handleItemKeyDown, role: "row", style: { "--calcite-list-item-spacing-indent-multiplier": `${visualLevel}` }, tabIndex: active ? 0 : -1,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.containerEl = el) }, this.renderDragHandle(), this.renderSelected(), this.renderOpen(), this.renderActionsStart(), this.renderContentContainer(), this.renderActionsEnd()), this.renderContentBottom(), this.renderDefaultContainer()));
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  emitCalciteInternalListItemChange() {
    this.calciteInternalListItemChange.emit();
  }
  setSelectionDefaults() {
    const { parentListEl, selectionMode, selectionAppearance } = this;
    if (!parentListEl) {
      return;
    }
    if (!selectionMode) {
      this.selectionMode = parentListEl.selectionMode;
    }
    if (!selectionAppearance) {
      this.selectionAppearance = parentListEl.selectionAppearance;
    }
  }
  handleOpenableChange(slotEl) {
    if (!slotEl) {
      return;
    }
    const { parentListEl } = this;
    const listItemChildren = (0,_utils3_js__WEBPACK_IMPORTED_MODULE_2__.g)(slotEl);
    (0,_utils3_js__WEBPACK_IMPORTED_MODULE_2__.u)(listItemChildren);
    const openable = !!listItemChildren.length;
    if (openable && parentListEl && !parentListEl.openable) {
      parentListEl.openable = true;
    }
    this.openable = openable;
    if (!openable) {
      this.open = false;
    }
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "active": ["activeHandler"],
    "closed": ["handleClosedChange"],
    "disabled": ["handleDisabledChange"],
    "selected": ["handleSelectedChange"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return listItemCss; }
}, [1, "calcite-list-item", {
    "active": [4],
    "closable": [516],
    "closed": [1540],
    "description": [1],
    "disabled": [516],
    "dragHandle": [4, "drag-handle"],
    "label": [1],
    "metadata": [16],
    "open": [1540],
    "setSize": [2, "set-size"],
    "setPosition": [2, "set-position"],
    "selected": [1540],
    "value": [8],
    "selectionMode": [1025, "selection-mode"],
    "selectionAppearance": [1025, "selection-appearance"],
    "messageOverrides": [1040],
    "messages": [1040],
    "effectiveLocale": [32],
    "defaultMessages": [32],
    "level": [32],
    "visualLevel": [32],
    "parentListEl": [32],
    "openable": [32],
    "hasActionsStart": [32],
    "hasActionsEnd": [32],
    "hasCustomContent": [32],
    "hasContentStart": [32],
    "hasContentEnd": [32],
    "hasContentBottom": [32],
    "setFocus": [64]
  }, [[0, "calciteInternalListItemGroupDefaultSlotChange", "handleCalciteInternalListDefaultSlotChanges"], [0, "calciteInternalListDefaultSlotChange", "handleCalciteInternalListDefaultSlotChanges"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-list-item", "calcite-action", "calcite-handle", "calcite-icon", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-list-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ListItem);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        (0,_action_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
    case "calcite-handle":
      if (!customElements.get(tagName)) {
        (0,_handle_js__WEBPACK_IMPORTED_MODULE_7__.d)();
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
defineCustomElement$1();

const CalciteListItem = ListItem;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/handle.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/handle.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ Handle),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */







const CSS = {
  handle: "handle",
  handleActivated: "handle--activated",
};
const ICONS = {
  drag: "drag",
};

const handleCss = ":host{display:flex}.handle{display:flex;cursor:move;align-items:center;justify-content:center;align-self:stretch;border-style:none;background-color:transparent;outline-color:transparent;color:var(--calcite-ui-border-input);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{color:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}:host([hidden]){display:none}[hidden]{display:none}";

const Handle = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteHandleNudge = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.createEvent)(this, "calciteHandleNudge", 6);
    this.calciteInternalHandleChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.createEvent)(this, "calciteInternalHandleChange", 6);
    this.handleKeyDown = (event) => {
      switch (event.key) {
        case " ":
          this.activated = !this.activated;
          event.preventDefault();
          break;
        case "ArrowUp":
          if (!this.activated) {
            return;
          }
          event.preventDefault();
          this.calciteHandleNudge.emit({ direction: "up" });
          break;
        case "ArrowDown":
          if (!this.activated) {
            return;
          }
          event.preventDefault();
          this.calciteHandleNudge.emit({ direction: "down" });
          break;
      }
    };
    this.handleBlur = () => {
      this.activated = false;
    };
    this.activated = false;
    this.dragHandle = undefined;
    this.messages = undefined;
    this.setPosition = undefined;
    this.setSize = undefined;
    this.label = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  handleAriaTextChange() {
    const message = this.getAriaText("live");
    if (message) {
      this.calciteInternalHandleChange.emit({
        message,
      });
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
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.s)(this);
  }
  disconnectedCallback() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_3__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    this.handleButton?.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  getAriaText(type) {
    const { setPosition, setSize, label, messages, activated } = this;
    if (!messages || !label || typeof setSize !== "number" || typeof setPosition !== "number") {
      return null;
    }
    const text = type === "label"
      ? activated
        ? messages.dragHandleChange
        : messages.dragHandleIdle
      : activated
        ? messages.dragHandleActive
        : messages.dragHandleCommit;
    const replacePosition = text.replace("{position}", setPosition.toString());
    const replaceLabel = replacePosition.replace("{itemLabel}", label);
    return replaceLabel.replace("{total}", setSize.toString());
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return (
    // Needs to be a span because of https://github.com/SortableJS/Sortable/issues/1486
    (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("span", { "aria-label": this.getAriaText("label"), "aria-pressed": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.activated), class: { [CSS.handle]: true, [CSS.handleActivated]: this.activated }, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, role: "button", tabindex: "0", title: this.messages?.dragHandle,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => {
        this.handleButton = el;
      } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("calcite-icon", { icon: ICONS.drag, scale: "s" })));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messages": ["handleAriaTextChange"],
    "label": ["handleAriaTextChange"],
    "activated": ["handleAriaTextChange"],
    "setPosition": ["handleAriaTextChange"],
    "setSize": ["handleAriaTextChange"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return handleCss; }
}, [1, "calcite-handle", {
    "activated": [1540],
    "dragHandle": [513, "drag-handle"],
    "messages": [16],
    "setPosition": [2, "set-position"],
    "setSize": [2, "set-size"],
    "label": [1],
    "messageOverrides": [16],
    "effectiveLocale": [32],
    "defaultMessages": [32],
    "setFocus": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-handle", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-handle":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Handle);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_4__.d)();
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

/***/ "./node_modules/@esri/calcite-components/dist/components/utils3.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/utils3.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CSS),
/* harmony export */   I: () => (/* binding */ ICONS),
/* harmony export */   M: () => (/* binding */ MAX_COLUMNS),
/* harmony export */   S: () => (/* binding */ SLOTS),
/* harmony export */   a: () => (/* binding */ getDepth),
/* harmony export */   g: () => (/* binding */ getListItemChildren),
/* harmony export */   u: () => (/* binding */ updateListItemChildren)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const CSS = {
  container: "container",
  containerBorderSelected: "container--border-selected",
  containerBorderUnselected: "container--border-unselected",
  contentContainer: "content-container",
  contentContainerSelectable: "content-container--selectable",
  contentContainerHasCenterContent: "content-container--has-center-content",
  nestedContainer: "nested-container",
  nestedContainerHidden: "nested-container--hidden",
  content: "content",
  customContent: "custom-content",
  actionsStart: "actions-start",
  contentStart: "content-start",
  label: "label",
  description: "description",
  contentEnd: "content-end",
  contentBottom: "content-bottom",
  actionsEnd: "actions-end",
  selectionContainer: "selection-container",
  openContainer: "open-container",
  dragContainer: "drag-container",
};
const SLOTS = {
  actionsStart: "actions-start",
  contentStart: "content-start",
  content: "content",
  contentBottom: "content-bottom",
  contentEnd: "content-end",
  actionsEnd: "actions-end",
};
// Set to zero to extend until the end of the table section.
const MAX_COLUMNS = 0;
const ICONS = {
  selectedMultiple: "check-circle-f",
  selectedSingle: "circle-f",
  unselected: "blank",
  closedLTR: "caret-right",
  closedRTL: "caret-left",
  open: "caret-down",
  blank: "blank",
  close: "x",
};

const listSelector = "calcite-list";
const listItemGroupSelector = "calcite-list-item-group";
const listItemSelector = "calcite-list-item";
function getListItemChildren(slotEl) {
  const assignedElements = slotEl.assignedElements({ flatten: true });
  const listItemGroupChildren = assignedElements.filter((el) => el?.matches(listItemGroupSelector))
    .map((group) => Array.from(group.querySelectorAll(listItemSelector)))
    .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);
  const listItemChildren = assignedElements.filter((el) => el?.matches(listItemSelector));
  const listItemListChildren = assignedElements.filter((el) => el?.matches(listSelector))
    .map((list) => Array.from(list.querySelectorAll(listItemSelector)))
    .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);
  return [...listItemListChildren, ...listItemGroupChildren, ...listItemChildren];
}
function updateListItemChildren(listItemChildren) {
  listItemChildren.forEach((listItem) => {
    listItem.setPosition = listItemChildren.indexOf(listItem) + 1;
    listItem.setSize = listItemChildren.length;
  });
}
function getDepth(element, includeGroup = false) {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.Build.isBrowser) {
    return 0;
  }
  const expression = includeGroup
    ? "ancestor::calcite-list-item | ancestor::calcite-list-item-group"
    : "ancestor::calcite-list-item";
  const result = document.evaluate(expression, element, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  return result.snapshotLength;
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZjBlMDI5YTU4ZjdmYWJiNDhmMjJiZTExNWNkYmY3MzMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0c7QUFDVjtBQUNjO0FBQ2tCO0FBQ3ZEO0FBQ29DO0FBQ0o7QUFDckQ7QUFDQTtBQUNGO0FBQ0U7O0FBRXpELHVDQUF1QyxlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxhQUFhLHNCQUFzQix1REFBdUQsd0NBQXdDLHlHQUF5RyxVQUFVLFdBQVcsc0JBQXNCLGFBQWEsWUFBWSxnREFBZ0QsdUNBQXVDLHdIQUF3SCxhQUFhLHNCQUFzQixpQkFBaUIsZUFBZSxnREFBZ0Qsa0JBQWtCLGdEQUFnRCw0QkFBNEIsc0RBQXNELDhCQUE4QiwwQ0FBMEMsa0JBQWtCLGFBQWEsc0JBQXNCLGdEQUFnRCwwQkFBMEIsYUFBYSxtQkFBbUIsYUFBYSxjQUFjLG9CQUFvQixZQUFZLHVDQUF1Qyw4Q0FBOEMsK0JBQStCLE1BQU0sMEJBQTBCLGtCQUFrQix5RUFBeUUscVBBQXFQLHlCQUF5QixhQUFhLGNBQWMsc0JBQXNCLHVCQUF1Qix1QkFBdUIscUJBQXFCLHNDQUFzQyxrQkFBa0Isb0NBQW9DLHVDQUF1QyxzQ0FBc0MsOENBQThDLHFCQUFxQixzQkFBc0IscUVBQXFFLFdBQVcsc0JBQXNCLE9BQU8sK0JBQStCLGFBQWEsNEJBQTRCLCtCQUErQixlQUFlLDJCQUEyQixhQUFhLHlCQUF5Qiw0QkFBNEIsY0FBYyxnQkFBZ0IsYUFBYSxzQkFBc0IsZ0RBQWdELHdIQUF3SCwwR0FBMEcsY0FBYyxxQkFBcUIsYUFBYSx1QkFBdUIsMENBQTBDLDZHQUE2RyxhQUFhLG1CQUFtQixxQ0FBcUMsZUFBZSw0RUFBNEUsc0JBQXNCLGtCQUFrQiw4VUFBOFUsbUJBQW1CLGNBQWMsNkJBQTZCLGlCQUFpQiw2QkFBNkIsbUJBQW1CLHdDQUF3QyxnQkFBZ0Is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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGVBQWU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLE9BQU8seUVBQUs7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVvSSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLWxpc3QtaXRlbS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvaGFuZGxlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9sb2FkYWJsZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvdXRpbHMzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoLCBIb3N0IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgZSBhcyBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50LCBiIGFzIGdldEVsZW1lbnREaXIsIHQgYXMgdG9BcmlhQm9vbGVhbiB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUgfSBmcm9tICcuL2ludGVyYWN0aXZlLmpzJztcbmltcG9ydCB7IGEgYXMgZ2V0RGVwdGgsIEMgYXMgQ1NTLCBJIGFzIElDT05TLCBTIGFzIFNMT1RTLCBnIGFzIGdldExpc3RJdGVtQ2hpbGRyZW4sIHUgYXMgdXBkYXRlTGlzdEl0ZW1DaGlsZHJlbiB9IGZyb20gJy4vdXRpbHMzLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi5qcyc7XG5pbXBvcnQgeyBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudEZvY3VzYWJsZSB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDUgfSBmcm9tICcuL2FjdGlvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNCB9IGZyb20gJy4vaGFuZGxlLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQzIH0gZnJvbSAnLi9pY29uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9sb2FkZXIuanMnO1xuXG5jb25zdCBsaXN0SXRlbUNzcyA9IFwiOmhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstLWNhbGNpdGUtbGlzdC1pdGVtLWljb24tY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7LS1jYWxjaXRlLWxpc3QtaXRlbS1zcGFjaW5nLWluZGVudDoxcmVtfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX0uY29udGFpbmVye2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7ZmxleDoxIDEgMCU7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Zm9udC1mYW1pbHk6dmFyKC0tY2FsY2l0ZS1zYW5zLWZhbWlseSk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6Y2FsYyh2YXIoLS1jYWxjaXRlLWxpc3QtaXRlbS1zcGFjaW5nLWluZGVudCkgKiB2YXIoLS1jYWxjaXRlLWxpc3QtaXRlbS1zcGFjaW5nLWluZGVudC1tdWx0aXBsaWVyKSl9LmNvbnRhaW5lciAqe2JveC1zaXppbmc6Ym9yZGVyLWJveH0uY29udGFpbmVyOmhvdmVye2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfS5jb250YWluZXI6YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfS5jb250YWluZXItLWJvcmRlci1zZWxlY3RlZHtib3JkZXItaW5saW5lLXN0YXJ0OjRweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX0uY29udGFpbmVyLS1ib3JkZXItdW5zZWxlY3RlZHtib3JkZXItaW5saW5lLXN0YXJ0OjRweCBzb2xpZCB0cmFuc3BhcmVudH0ubmVzdGVkLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfS5uZXN0ZWQtY29udGFpbmVyLS1oaWRkZW57ZGlzcGxheTpub25lfS5jb250ZW50LWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleDoxIDEgYXV0bzthbGlnbi1pdGVtczpzdHJldGNoO3BhZGRpbmc6MHB4O2ZvbnQtZmFtaWx5OnZhcigtLWNhbGNpdGUtc2Fucy1mYW1pbHkpO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbm9ybWFsKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMil9dHIsdGR7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH10cjpmb2N1cyx0ZDpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9LmNvbnRlbnQsLmN1c3RvbS1jb250ZW50e2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSBhdXRvO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmctaW5saW5lOjAuNzVyZW07cGFkZGluZy1ibG9jazowLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxLjM3NX0ubGFiZWwsLmRlc2NyaXB0aW9uLC5jb250ZW50LWJvdHRvbXtmb250LWZhbWlseTp2YXIoLS1jYWxjaXRlLXNhbnMtZmFtaWx5KTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbm9ybWFsKTt3b3JkLXdyYXA6YnJlYWstd29yZDt3b3JkLWJyZWFrOmJyZWFrLXdvcmR9LmxhYmVsOm9ubHktY2hpbGQsLmRlc2NyaXB0aW9uOm9ubHktY2hpbGQsLmNvbnRlbnQtYm90dG9tOm9ubHktY2hpbGR7bWFyZ2luOjBweDtwYWRkaW5nLWJsb2NrOjAuMjVyZW19LmxhYmVse2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0uZGVzY3JpcHRpb257bWFyZ2luLWJsb2NrLXN0YXJ0OjAuMTI1cmVtO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX0uY29udGVudC1zdGFydHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0uY29udGVudC1lbmR7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5jb250ZW50LXN0YXJ0LC5jb250ZW50LWVuZHtmbGV4OjEgMSBhdXRvfS5jb250ZW50LWJvdHRvbXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO3BhZGRpbmctaW5saW5lLXN0YXJ0OmNhbGModmFyKC0tY2FsY2l0ZS1saXN0LWl0ZW0tc3BhY2luZy1pbmRlbnQpICogdmFyKC0tY2FsY2l0ZS1saXN0LWl0ZW0tc3BhY2luZy1pbmRlbnQtbXVsdGlwbGllcikpfS5jb250ZW50LWNvbnRhaW5lci0taGFzLWNlbnRlci1jb250ZW50IC5jb250ZW50LXN0YXJ0LC5jb250ZW50LWNvbnRhaW5lci0taGFzLWNlbnRlci1jb250ZW50IC5jb250ZW50LWVuZHtmbGV4OjAgMSBhdXRvfS5zZWxlY3Rpb24tY29udGFpbmVye2Rpc3BsYXk6ZmxleDtwYWRkaW5nLWlubGluZTowLjc1cmVtO2NvbG9yOnZhcigtLWNhbGNpdGUtbGlzdC1pdGVtLWljb24tY29sb3IpfS5hY3Rpb25zLXN0YXJ0LC5hY3Rpb25zLWVuZCwuY29udGVudC1zdGFydCwuY29udGVudC1lbmQsLnNlbGVjdGlvbi1jb250YWluZXIsLmRyYWctY29udGFpbmVyLC5vcGVuLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfS5vcGVuLWNvbnRhaW5lciwuc2VsZWN0aW9uLWNvbnRhaW5lcntjdXJzb3I6cG9pbnRlcn0uY29udGVudC1zdGFydCA6OnNsb3R0ZWQoY2FsY2l0ZS1pY29uKSwuY29udGVudC1lbmQgOjpzbG90dGVkKGNhbGNpdGUtaWNvbil7bWFyZ2luLWlubGluZTowLjc1cmVtO2FsaWduLXNlbGY6Y2VudGVyfS5hY3Rpb25zLXN0YXJ0IDo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbiksLmFjdGlvbnMtc3RhcnQgOjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uLW1lbnUpLC5hY3Rpb25zLXN0YXJ0IDo6c2xvdHRlZChjYWxjaXRlLWhhbmRsZSksLmFjdGlvbnMtc3RhcnQgOjpzbG90dGVkKGNhbGNpdGUtZHJvcGRvd24pLC5hY3Rpb25zLWVuZCA6OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24pLC5hY3Rpb25zLWVuZCA6OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24tbWVudSksLmFjdGlvbnMtZW5kIDo6c2xvdHRlZChjYWxjaXRlLWhhbmRsZSksLmFjdGlvbnMtZW5kIDo6c2xvdHRlZChjYWxjaXRlLWRyb3Bkb3duKXthbGlnbi1zZWxmOnN0cmV0Y2g7Y29sb3I6aW5oZXJpdH06OnNsb3R0ZWQoY2FsY2l0ZS1saXN0LWl0ZW0pe2JvcmRlci13aWR0aDowcHg7Ym9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBmb2N1c01hcCA9IG5ldyBNYXAoKTtcbmNvbnN0IGxpc3RTZWxlY3RvciA9IFwiY2FsY2l0ZS1saXN0XCI7XG5jb25zdCBMaXN0SXRlbSA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlTGlzdEl0ZW1TZWxlY3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVMaXN0SXRlbVNlbGVjdFwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVMaXN0SXRlbUNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlTGlzdEl0ZW1DbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbExpc3RJdGVtU2VsZWN0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVNlbGVjdFwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbExpc3RJdGVtQWN0aXZlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbUFjdGl2ZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbEZvY3VzUHJldmlvdXNJdGVtID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxGb2N1c1ByZXZpb3VzSXRlbVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbExpc3RJdGVtQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbUNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNsb3NlQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jYWxjaXRlTGlzdEl0ZW1DbG9zZS5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNvbnRlbnRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc0N1c3RvbUNvbnRlbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQWN0aW9uc1N0YXJ0U2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNBY3Rpb25zU3RhcnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQWN0aW9uc0VuZFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzQWN0aW9uc0VuZCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDb250ZW50U3RhcnRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc0NvbnRlbnRTdGFydCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDb250ZW50RW5kU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNDb250ZW50RW5kID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNvbnRlbnRCb3R0b21TbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc0NvbnRlbnRCb3R0b20gPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRGVmYXVsdFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlT3BlbmFibGVDaGFuZ2UoZXZlbnQudGFyZ2V0KTtcbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlT3BlbiA9ICgpID0+IHtcbiAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gICAgfTtcbiAgICB0aGlzLml0ZW1DbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnRvZ2dsZVNlbGVjdGVkKCk7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbExpc3RJdGVtQWN0aXZlLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlU2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IHNlbGVjdGlvbk1vZGUsIHNlbGVjdGVkIH0gPSB0aGlzO1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGlwbGVcIiB8fCBzZWxlY3Rpb25Nb2RlID09PSBcInNpbmdsZVwiKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAhc2VsZWN0ZWQ7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChzZWxlY3Rpb25Nb2RlID09PSBcInNpbmdsZS1wZXJzaXN0XCIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLmNhbGNpdGVMaXN0SXRlbVNlbGVjdC5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUl0ZW1LZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG4gICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICAgIGNvbnN0IHsgY29udGFpbmVyRWwsIGNvbnRlbnRFbCwgYWN0aW9uc1N0YXJ0RWwsIGFjdGlvbnNFbmRFbCwgb3Blbiwgb3BlbmFibGUgfSA9IHRoaXM7XG4gICAgICBjb25zdCBjZWxscyA9IFthY3Rpb25zU3RhcnRFbCwgY29udGVudEVsLCBhY3Rpb25zRW5kRWxdLmZpbHRlcihCb29sZWFuKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGNlbGxzLmZpbmRJbmRleCgoY2VsbCkgPT4gY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNlbGwpKTtcbiAgICAgIGlmIChrZXkgPT09IFwiRW50ZXJcIiAmJlxuICAgICAgICAhY29tcG9zZWRQYXRoLmluY2x1ZGVzKGFjdGlvbnNTdGFydEVsKSAmJlxuICAgICAgICAhY29tcG9zZWRQYXRoLmluY2x1ZGVzKGFjdGlvbnNFbmRFbCkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVTZWxlY3RlZCgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoa2V5ID09PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xuICAgICAgICBpZiAoY3VycmVudEluZGV4ID09PSAtMSkge1xuICAgICAgICAgIGlmICghb3BlbiAmJiBvcGVuYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNDZWxsKG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChjZWxsc1swXSkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c0NlbGwoY2VsbHNbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjZWxsc1tjdXJyZW50SW5kZXhdICYmIGNlbGxzW25leHRJbmRleF0pIHtcbiAgICAgICAgICB0aGlzLmZvY3VzQ2VsbChjZWxsc1tuZXh0SW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoa2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHByZXZJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5mb2N1c0NlbGwobnVsbCk7XG4gICAgICAgICAgaWYgKG9wZW4gJiYgb3BlbmFibGUpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRm9jdXNQcmV2aW91c0l0ZW0uZW1pdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjdXJyZW50SW5kZXggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmZvY3VzQ2VsbChudWxsKTtcbiAgICAgICAgICBjb250YWluZXJFbC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNlbGxzW2N1cnJlbnRJbmRleF0gJiYgY2VsbHNbcHJldkluZGV4XSkge1xuICAgICAgICAgIHRoaXMuZm9jdXNDZWxsKGNlbGxzW3ByZXZJbmRleF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmZvY3VzQ2VsbE51bGwgPSAoKSA9PiB7XG4gICAgICB0aGlzLmZvY3VzQ2VsbChudWxsKTtcbiAgICB9O1xuICAgIHRoaXMuZm9jdXNDZWxsID0gKGZvY3VzRWwsIHNhdmVGb2N1c0luZGV4ID0gdHJ1ZSkgPT4ge1xuICAgICAgY29uc3QgeyBjb250ZW50RWwsIGFjdGlvbnNTdGFydEVsLCBhY3Rpb25zRW5kRWwsIHBhcmVudExpc3RFbCB9ID0gdGhpcztcbiAgICAgIGlmIChzYXZlRm9jdXNJbmRleCkge1xuICAgICAgICBmb2N1c01hcC5zZXQocGFyZW50TGlzdEVsLCBudWxsKTtcbiAgICAgIH1cbiAgICAgIFthY3Rpb25zU3RhcnRFbCwgY29udGVudEVsLCBhY3Rpb25zRW5kRWxdLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKCh0YWJsZUNlbGwsIGNlbGxJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0YWJJbmRleEF0dHIgPSBcInRhYmluZGV4XCI7XG4gICAgICAgIGlmICh0YWJsZUNlbGwgPT09IGZvY3VzRWwpIHtcbiAgICAgICAgICB0YWJsZUNlbGwuc2V0QXR0cmlidXRlKHRhYkluZGV4QXR0ciwgXCIwXCIpO1xuICAgICAgICAgIHNhdmVGb2N1c0luZGV4ICYmIGZvY3VzTWFwLnNldChwYXJlbnRMaXN0RWwsIGNlbGxJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGFibGVDZWxsLnJlbW92ZUF0dHJpYnV0ZSh0YWJJbmRleEF0dHIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGZvY3VzRWw/LmZvY3VzKCk7XG4gICAgfTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2FibGUgPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZHJhZ0hhbmRsZSA9IGZhbHNlO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXRhZGF0YSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLnNldFNpemUgPSBudWxsO1xuICAgIHRoaXMuc2V0UG9zaXRpb24gPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VsZWN0aW9uTW9kZSA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3Rpb25BcHBlYXJhbmNlID0gbnVsbDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sZXZlbCA9IG51bGw7XG4gICAgdGhpcy52aXN1YWxMZXZlbCA9IG51bGw7XG4gICAgdGhpcy5wYXJlbnRMaXN0RWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vcGVuYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuaGFzQWN0aW9uc1N0YXJ0ID0gZmFsc2U7XG4gICAgdGhpcy5oYXNBY3Rpb25zRW5kID0gZmFsc2U7XG4gICAgdGhpcy5oYXNDdXN0b21Db250ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5oYXNDb250ZW50U3RhcnQgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0NvbnRlbnRFbmQgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0NvbnRlbnRCb3R0b20gPSBmYWxzZTtcbiAgfVxuICBhY3RpdmVIYW5kbGVyKGFjdGl2ZSkge1xuICAgIGlmICghYWN0aXZlKSB7XG4gICAgICB0aGlzLmZvY3VzQ2VsbChudWxsLCBmYWxzZSk7XG4gICAgfVxuICB9XG4gIGhhbmRsZUNsb3NlZENoYW5nZSgpIHtcbiAgICB0aGlzLmVtaXRDYWxjaXRlSW50ZXJuYWxMaXN0SXRlbUNoYW5nZSgpO1xuICB9XG4gIGhhbmRsZURpc2FibGVkQ2hhbmdlKCkge1xuICAgIHRoaXMuZW1pdENhbGNpdGVJbnRlcm5hbExpc3RJdGVtQ2hhbmdlKCk7XG4gIH1cbiAgaGFuZGxlU2VsZWN0ZWRDaGFuZ2UoKSB7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVNlbGVjdC5lbWl0KCk7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIGhhbmRsZUNhbGNpdGVJbnRlcm5hbExpc3REZWZhdWx0U2xvdENoYW5nZXMoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmhhbmRsZU9wZW5hYmxlQ2hhbmdlKHRoaXMuZGVmYXVsdFNsb3RFbCk7XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBjb25zdCB7IGVsIH0gPSB0aGlzO1xuICAgIHRoaXMucGFyZW50TGlzdEVsID0gZWwuY2xvc2VzdChsaXN0U2VsZWN0b3IpO1xuICAgIHRoaXMubGV2ZWwgPSBnZXREZXB0aChlbCkgKyAxO1xuICAgIHRoaXMudmlzdWFsTGV2ZWwgPSBnZXREZXB0aChlbCwgdHJ1ZSk7XG4gICAgdGhpcy5zZXRTZWxlY3Rpb25EZWZhdWx0cygpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIGNvbnN0IHsgY29udGFpbmVyRWwsIGNvbnRlbnRFbCwgYWN0aW9uc1N0YXJ0RWwsIGFjdGlvbnNFbmRFbCwgcGFyZW50TGlzdEVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGZvY3VzSW5kZXggPSBmb2N1c01hcC5nZXQocGFyZW50TGlzdEVsKTtcbiAgICBpZiAodHlwZW9mIGZvY3VzSW5kZXggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGNvbnN0IGNlbGxzID0gW2FjdGlvbnNTdGFydEVsLCBjb250ZW50RWwsIGFjdGlvbnNFbmRFbF0uZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgaWYgKGNlbGxzW2ZvY3VzSW5kZXhdKSB7XG4gICAgICAgIHRoaXMuZm9jdXNDZWxsKGNlbGxzW2ZvY3VzSW5kZXhdKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb250YWluZXJFbD8uZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29udGFpbmVyRWw/LmZvY3VzKCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlclNlbGVjdGVkKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQsIHNlbGVjdGlvbk1vZGUsIHNlbGVjdGlvbkFwcGVhcmFuY2UgfSA9IHRoaXM7XG4gICAgaWYgKHNlbGVjdGlvbk1vZGUgPT09IFwibm9uZVwiIHx8IHNlbGVjdGlvbkFwcGVhcmFuY2UgPT09IFwiYm9yZGVyXCIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKGgoXCJ0ZFwiLCB7IGNsYXNzOiBDU1Muc2VsZWN0aW9uQ29udGFpbmVyLCBrZXk6IFwic2VsZWN0aW9uLWNvbnRhaW5lclwiLCBvbkNsaWNrOiB0aGlzLml0ZW1DbGlja2VkIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBzZWxlY3RlZFxuICAgICAgICA/IHNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGlwbGVcIlxuICAgICAgICAgID8gSUNPTlMuc2VsZWN0ZWRNdWx0aXBsZVxuICAgICAgICAgIDogSUNPTlMuc2VsZWN0ZWRTaW5nbGVcbiAgICAgICAgOiBJQ09OUy51bnNlbGVjdGVkLCBzY2FsZTogXCJzXCIgfSkpKTtcbiAgfVxuICByZW5kZXJEcmFnSGFuZGxlKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdIYW5kbGUgPyAoaChcInRkXCIsIHsgY2xhc3M6IENTUy5kcmFnQ29udGFpbmVyLCBrZXk6IFwiZHJhZy1oYW5kbGUtY29udGFpbmVyXCIgfSwgaChcImNhbGNpdGUtaGFuZGxlXCIsIHsgbGFiZWw6IHRoaXMubGFiZWwsIHNldFBvc2l0aW9uOiB0aGlzLnNldFBvc2l0aW9uLCBzZXRTaXplOiB0aGlzLnNldFNpemUgfSkpKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyT3BlbigpIHtcbiAgICBjb25zdCB7IGVsLCBvcGVuLCBvcGVuYWJsZSwgcGFyZW50TGlzdEVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIoZWwpO1xuICAgIGNvbnN0IGljb24gPSBvcGVuYWJsZVxuICAgICAgPyBvcGVuXG4gICAgICAgID8gSUNPTlMub3BlblxuICAgICAgICA6IGRpciA9PT0gXCJydGxcIlxuICAgICAgICAgID8gSUNPTlMuY2xvc2VkUlRMXG4gICAgICAgICAgOiBJQ09OUy5jbG9zZWRMVFJcbiAgICAgIDogSUNPTlMuYmxhbms7XG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gb3BlbmFibGUgPyB0aGlzLnRvZ2dsZU9wZW4gOiB0aGlzLml0ZW1DbGlja2VkO1xuICAgIHJldHVybiBvcGVuYWJsZSB8fCBwYXJlbnRMaXN0RWw/Lm9wZW5hYmxlID8gKGgoXCJ0ZFwiLCB7IGNsYXNzOiBDU1Mub3BlbkNvbnRhaW5lciwga2V5OiBcIm9wZW4tY29udGFpbmVyXCIsIG9uQ2xpY2s6IGNsaWNrSGFuZGxlciB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogaWNvbiwga2V5OiBpY29uLCBzY2FsZTogXCJzXCIgfSkpKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyQWN0aW9uc1N0YXJ0KCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIGhhc0FjdGlvbnNTdGFydCB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoXCJ0ZFwiLCB7IFwiYXJpYS1sYWJlbFwiOiBsYWJlbCwgY2xhc3M6IENTUy5hY3Rpb25zU3RhcnQsIGhpZGRlbjogIWhhc0FjdGlvbnNTdGFydCwga2V5OiBcImFjdGlvbnMtc3RhcnQtY29udGFpbmVyXCIsIHJvbGU6IFwiZ3JpZGNlbGxcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMuYWN0aW9uc1N0YXJ0RWwgPSBlbCkgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5hY3Rpb25zU3RhcnQsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVBY3Rpb25zU3RhcnRTbG90Q2hhbmdlIH0pKSk7XG4gIH1cbiAgcmVuZGVyQWN0aW9uc0VuZCgpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBoYXNBY3Rpb25zRW5kLCBjbG9zYWJsZSwgbWVzc2FnZXMgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKFwidGRcIiwgeyBcImFyaWEtbGFiZWxcIjogbGFiZWwsIGNsYXNzOiBDU1MuYWN0aW9uc0VuZCwgaGlkZGVuOiAhKGhhc0FjdGlvbnNFbmQgfHwgY2xvc2FibGUpLCBrZXk6IFwiYWN0aW9ucy1lbmQtY29udGFpbmVyXCIsIHJvbGU6IFwiZ3JpZGNlbGxcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMuYWN0aW9uc0VuZEVsID0gZWwpIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuYWN0aW9uc0VuZCwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZUFjdGlvbnNFbmRTbG90Q2hhbmdlIH0pLCBjbG9zYWJsZSA/IChoKFwiY2FsY2l0ZS1hY3Rpb25cIiwgeyBhcHBlYXJhbmNlOiBcInRyYW5zcGFyZW50XCIsIGljb246IElDT05TLmNsb3NlLCBrZXk6IFwiY2xvc2UtYWN0aW9uXCIsIGxhYmVsOiBtZXNzYWdlcy5jbG9zZSwgb25DbGljazogdGhpcy5jbG9zZUNsaWNrSGFuZGxlciwgdGV4dDogbWVzc2FnZXMuY2xvc2UgfSkpIDogbnVsbCkpO1xuICB9XG4gIHJlbmRlckNvbnRlbnRTdGFydCgpIHtcbiAgICBjb25zdCB7IGhhc0NvbnRlbnRTdGFydCB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbnRlbnRTdGFydCwgaGlkZGVuOiAhaGFzQ29udGVudFN0YXJ0IH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuY29udGVudFN0YXJ0LCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlQ29udGVudFN0YXJ0U2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlckN1c3RvbUNvbnRlbnQoKSB7XG4gICAgY29uc3QgeyBoYXNDdXN0b21Db250ZW50IH0gPSB0aGlzO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY3VzdG9tQ29udGVudCwgaGlkZGVuOiAhaGFzQ3VzdG9tQ29udGVudCB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmNvbnRlbnQsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVDb250ZW50U2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlckNvbnRlbnRFbmQoKSB7XG4gICAgY29uc3QgeyBoYXNDb250ZW50RW5kIH0gPSB0aGlzO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGVudEVuZCwgaGlkZGVuOiAhaGFzQ29udGVudEVuZCB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmNvbnRlbnRFbmQsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVDb250ZW50RW5kU2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlckNvbnRlbnRCb3R0b20oKSB7XG4gICAgY29uc3QgeyBoYXNDb250ZW50Qm90dG9tLCB2aXN1YWxMZXZlbCB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbnRlbnRCb3R0b20sIGhpZGRlbjogIWhhc0NvbnRlbnRCb3R0b20sIHN0eWxlOiB7IFwiLS1jYWxjaXRlLWxpc3QtaXRlbS1zcGFjaW5nLWluZGVudC1tdWx0aXBsaWVyXCI6IGAke3Zpc3VhbExldmVsfWAgfSB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmNvbnRlbnRCb3R0b20sIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVDb250ZW50Qm90dG9tU2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlckRlZmF1bHRDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5uZXN0ZWRDb250YWluZXJdOiB0cnVlLFxuICAgICAgICBbQ1NTLm5lc3RlZENvbnRhaW5lckhpZGRlbl06IHRoaXMub3BlbmFibGUgJiYgIXRoaXMub3BlbixcbiAgICAgIH0gfSwgaChcInNsb3RcIiwgeyBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlRGVmYXVsdFNsb3RDaGFuZ2UsIHJlZjogKGVsKSA9PiAodGhpcy5kZWZhdWx0U2xvdEVsID0gZWwpIH0pKSk7XG4gIH1cbiAgcmVuZGVyQ29udGVudFByb3BlcnRpZXMoKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgZGVzY3JpcHRpb24sIGhhc0N1c3RvbUNvbnRlbnQgfSA9IHRoaXM7XG4gICAgcmV0dXJuICFoYXNDdXN0b21Db250ZW50ICYmICghIWxhYmVsIHx8ICEhZGVzY3JpcHRpb24pID8gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbnRlbnQsIGtleTogXCJjb250ZW50XCIgfSwgbGFiZWwgPyAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MubGFiZWwsIGtleTogXCJsYWJlbFwiIH0sIGxhYmVsKSkgOiBudWxsLCBkZXNjcmlwdGlvbiA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5kZXNjcmlwdGlvbiwga2V5OiBcImRlc2NyaXB0aW9uXCIgfSwgZGVzY3JpcHRpb24pKSA6IG51bGwpKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyQ29udGVudENvbnRhaW5lcigpIHtcbiAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCBsYWJlbCwgc2VsZWN0aW9uTW9kZSwgaGFzQ3VzdG9tQ29udGVudCB9ID0gdGhpcztcbiAgICBjb25zdCBoYXNDZW50ZXJDb250ZW50ID0gaGFzQ3VzdG9tQ29udGVudCB8fCAhIWxhYmVsIHx8ICEhZGVzY3JpcHRpb247XG4gICAgY29uc3QgY29udGVudCA9IFtcbiAgICAgIHRoaXMucmVuZGVyQ29udGVudFN0YXJ0KCksXG4gICAgICB0aGlzLnJlbmRlckN1c3RvbUNvbnRlbnQoKSxcbiAgICAgIHRoaXMucmVuZGVyQ29udGVudFByb3BlcnRpZXMoKSxcbiAgICAgIHRoaXMucmVuZGVyQ29udGVudEVuZCgpLFxuICAgIF07XG4gICAgcmV0dXJuIChoKFwidGRcIiwgeyBcImFyaWEtbGFiZWxcIjogbGFiZWwsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuY29udGVudENvbnRhaW5lcl06IHRydWUsXG4gICAgICAgIFtDU1MuY29udGVudENvbnRhaW5lclNlbGVjdGFibGVdOiBzZWxlY3Rpb25Nb2RlICE9PSBcIm5vbmVcIixcbiAgICAgICAgW0NTUy5jb250ZW50Q29udGFpbmVySGFzQ2VudGVyQ29udGVudF06IGhhc0NlbnRlckNvbnRlbnQsXG4gICAgICB9LCBrZXk6IFwiY29udGVudC1jb250YWluZXJcIiwgb25DbGljazogdGhpcy5pdGVtQ2xpY2tlZCwgcm9sZTogXCJncmlkY2VsbFwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5jb250ZW50RWwgPSBlbCkgfSwgY29udGVudCkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW5hYmxlLCBvcGVuLCBsZXZlbCwgc2V0UG9zaXRpb24sIHNldFNpemUsIGFjdGl2ZSwgbGFiZWwsIHNlbGVjdGVkLCBzZWxlY3Rpb25BcHBlYXJhbmNlLCBzZWxlY3Rpb25Nb2RlLCBjbG9zZWQsIHZpc3VhbExldmVsLCB9ID0gdGhpcztcbiAgICBjb25zdCBzaG93Qm9yZGVyID0gc2VsZWN0aW9uTW9kZSAhPT0gXCJub25lXCIgJiYgc2VsZWN0aW9uQXBwZWFyYW5jZSA9PT0gXCJib3JkZXJcIjtcbiAgICBjb25zdCBib3JkZXJTZWxlY3RlZCA9IHNob3dCb3JkZXIgJiYgc2VsZWN0ZWQ7XG4gICAgY29uc3QgYm9yZGVyVW5zZWxlY3RlZCA9IHNob3dCb3JkZXIgJiYgIXNlbGVjdGVkO1xuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwidHJcIiwgeyBcImFyaWEtZXhwYW5kZWRcIjogb3BlbmFibGUgPyB0b0FyaWFCb29sZWFuKG9wZW4pIDogbnVsbCwgXCJhcmlhLWxhYmVsXCI6IGxhYmVsLCBcImFyaWEtbGV2ZWxcIjogbGV2ZWwsIFwiYXJpYS1wb3NpbnNldFwiOiBzZXRQb3NpdGlvbiwgXCJhcmlhLXNlbGVjdGVkXCI6IHRvQXJpYUJvb2xlYW4oc2VsZWN0ZWQpLCBcImFyaWEtc2V0c2l6ZVwiOiBzZXRTaXplLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmNvbnRhaW5lcl06IHRydWUsXG4gICAgICAgIFtDU1MuY29udGFpbmVyQm9yZGVyU2VsZWN0ZWRdOiBib3JkZXJTZWxlY3RlZCxcbiAgICAgICAgW0NTUy5jb250YWluZXJCb3JkZXJVbnNlbGVjdGVkXTogYm9yZGVyVW5zZWxlY3RlZCxcbiAgICAgIH0sIGhpZGRlbjogY2xvc2VkLCBvbkZvY3VzOiB0aGlzLmZvY3VzQ2VsbE51bGwsIG9uS2V5RG93bjogdGhpcy5oYW5kbGVJdGVtS2V5RG93biwgcm9sZTogXCJyb3dcIiwgc3R5bGU6IHsgXCItLWNhbGNpdGUtbGlzdC1pdGVtLXNwYWNpbmctaW5kZW50LW11bHRpcGxpZXJcIjogYCR7dmlzdWFsTGV2ZWx9YCB9LCB0YWJJbmRleDogYWN0aXZlID8gMCA6IC0xLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5jb250YWluZXJFbCA9IGVsKSB9LCB0aGlzLnJlbmRlckRyYWdIYW5kbGUoKSwgdGhpcy5yZW5kZXJTZWxlY3RlZCgpLCB0aGlzLnJlbmRlck9wZW4oKSwgdGhpcy5yZW5kZXJBY3Rpb25zU3RhcnQoKSwgdGhpcy5yZW5kZXJDb250ZW50Q29udGFpbmVyKCksIHRoaXMucmVuZGVyQWN0aW9uc0VuZCgpKSwgdGhpcy5yZW5kZXJDb250ZW50Qm90dG9tKCksIHRoaXMucmVuZGVyRGVmYXVsdENvbnRhaW5lcigpKSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBlbWl0Q2FsY2l0ZUludGVybmFsTGlzdEl0ZW1DaGFuZ2UoKSB7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxMaXN0SXRlbUNoYW5nZS5lbWl0KCk7XG4gIH1cbiAgc2V0U2VsZWN0aW9uRGVmYXVsdHMoKSB7XG4gICAgY29uc3QgeyBwYXJlbnRMaXN0RWwsIHNlbGVjdGlvbk1vZGUsIHNlbGVjdGlvbkFwcGVhcmFuY2UgfSA9IHRoaXM7XG4gICAgaWYgKCFwYXJlbnRMaXN0RWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFzZWxlY3Rpb25Nb2RlKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPSBwYXJlbnRMaXN0RWwuc2VsZWN0aW9uTW9kZTtcbiAgICB9XG4gICAgaWYgKCFzZWxlY3Rpb25BcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbkFwcGVhcmFuY2UgPSBwYXJlbnRMaXN0RWwuc2VsZWN0aW9uQXBwZWFyYW5jZTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlT3BlbmFibGVDaGFuZ2Uoc2xvdEVsKSB7XG4gICAgaWYgKCFzbG90RWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBwYXJlbnRMaXN0RWwgfSA9IHRoaXM7XG4gICAgY29uc3QgbGlzdEl0ZW1DaGlsZHJlbiA9IGdldExpc3RJdGVtQ2hpbGRyZW4oc2xvdEVsKTtcbiAgICB1cGRhdGVMaXN0SXRlbUNoaWxkcmVuKGxpc3RJdGVtQ2hpbGRyZW4pO1xuICAgIGNvbnN0IG9wZW5hYmxlID0gISFsaXN0SXRlbUNoaWxkcmVuLmxlbmd0aDtcbiAgICBpZiAob3BlbmFibGUgJiYgcGFyZW50TGlzdEVsICYmICFwYXJlbnRMaXN0RWwub3BlbmFibGUpIHtcbiAgICAgIHBhcmVudExpc3RFbC5vcGVuYWJsZSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMub3BlbmFibGUgPSBvcGVuYWJsZTtcbiAgICBpZiAoIW9wZW5hYmxlKSB7XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImFjdGl2ZVwiOiBbXCJhY3RpdmVIYW5kbGVyXCJdLFxuICAgIFwiY2xvc2VkXCI6IFtcImhhbmRsZUNsb3NlZENoYW5nZVwiXSxcbiAgICBcImRpc2FibGVkXCI6IFtcImhhbmRsZURpc2FibGVkQ2hhbmdlXCJdLFxuICAgIFwic2VsZWN0ZWRcIjogW1wiaGFuZGxlU2VsZWN0ZWRDaGFuZ2VcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIGxpc3RJdGVtQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWxpc3QtaXRlbVwiLCB7XG4gICAgXCJhY3RpdmVcIjogWzRdLFxuICAgIFwiY2xvc2FibGVcIjogWzUxNl0sXG4gICAgXCJjbG9zZWRcIjogWzE1NDBdLFxuICAgIFwiZGVzY3JpcHRpb25cIjogWzFdLFxuICAgIFwiZGlzYWJsZWRcIjogWzUxNl0sXG4gICAgXCJkcmFnSGFuZGxlXCI6IFs0LCBcImRyYWctaGFuZGxlXCJdLFxuICAgIFwibGFiZWxcIjogWzFdLFxuICAgIFwibWV0YWRhdGFcIjogWzE2XSxcbiAgICBcIm9wZW5cIjogWzE1NDBdLFxuICAgIFwic2V0U2l6ZVwiOiBbMiwgXCJzZXQtc2l6ZVwiXSxcbiAgICBcInNldFBvc2l0aW9uXCI6IFsyLCBcInNldC1wb3NpdGlvblwiXSxcbiAgICBcInNlbGVjdGVkXCI6IFsxNTQwXSxcbiAgICBcInZhbHVlXCI6IFs4XSxcbiAgICBcInNlbGVjdGlvbk1vZGVcIjogWzEwMjUsIFwic2VsZWN0aW9uLW1vZGVcIl0sXG4gICAgXCJzZWxlY3Rpb25BcHBlYXJhbmNlXCI6IFsxMDI1LCBcInNlbGVjdGlvbi1hcHBlYXJhbmNlXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogWzMyXSxcbiAgICBcImRlZmF1bHRNZXNzYWdlc1wiOiBbMzJdLFxuICAgIFwibGV2ZWxcIjogWzMyXSxcbiAgICBcInZpc3VhbExldmVsXCI6IFszMl0sXG4gICAgXCJwYXJlbnRMaXN0RWxcIjogWzMyXSxcbiAgICBcIm9wZW5hYmxlXCI6IFszMl0sXG4gICAgXCJoYXNBY3Rpb25zU3RhcnRcIjogWzMyXSxcbiAgICBcImhhc0FjdGlvbnNFbmRcIjogWzMyXSxcbiAgICBcImhhc0N1c3RvbUNvbnRlbnRcIjogWzMyXSxcbiAgICBcImhhc0NvbnRlbnRTdGFydFwiOiBbMzJdLFxuICAgIFwiaGFzQ29udGVudEVuZFwiOiBbMzJdLFxuICAgIFwiaGFzQ29udGVudEJvdHRvbVwiOiBbMzJdLFxuICAgIFwic2V0Rm9jdXNcIjogWzY0XVxuICB9LCBbWzAsIFwiY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1Hcm91cERlZmF1bHRTbG90Q2hhbmdlXCIsIFwiaGFuZGxlQ2FsY2l0ZUludGVybmFsTGlzdERlZmF1bHRTbG90Q2hhbmdlc1wiXSwgWzAsIFwiY2FsY2l0ZUludGVybmFsTGlzdERlZmF1bHRTbG90Q2hhbmdlXCIsIFwiaGFuZGxlQ2FsY2l0ZUludGVybmFsTGlzdERlZmF1bHRTbG90Q2hhbmdlc1wiXV1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1saXN0LWl0ZW1cIiwgXCJjYWxjaXRlLWFjdGlvblwiLCBcImNhbGNpdGUtaGFuZGxlXCIsIFwiY2FsY2l0ZS1pY29uXCIsIFwiY2FsY2l0ZS1sb2FkZXJcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtbGlzdC1pdGVtXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgTGlzdEl0ZW0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtYWN0aW9uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDUoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWhhbmRsZVwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDMoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWxvYWRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlTGlzdEl0ZW0gPSBMaXN0SXRlbTtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVMaXN0SXRlbSwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyB0IGFzIHRvQXJpYUJvb2xlYW4gfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudEZvY3VzYWJsZSB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcywgdSBhcyB1cGRhdGVNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQxIH0gZnJvbSAnLi9pY29uLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBoYW5kbGU6IFwiaGFuZGxlXCIsXG4gIGhhbmRsZUFjdGl2YXRlZDogXCJoYW5kbGUtLWFjdGl2YXRlZFwiLFxufTtcbmNvbnN0IElDT05TID0ge1xuICBkcmFnOiBcImRyYWdcIixcbn07XG5cbmNvbnN0IGhhbmRsZUNzcyA9IFwiOmhvc3R7ZGlzcGxheTpmbGV4fS5oYW5kbGV7ZGlzcGxheTpmbGV4O2N1cnNvcjptb3ZlO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLXNlbGY6c3RyZXRjaDtib3JkZXItc3R5bGU6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO3BhZGRpbmctYmxvY2s6MC43NXJlbTtwYWRkaW5nLWlubGluZTowLjI1cmVtO2xpbmUtaGVpZ2h0OjB9LmhhbmRsZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmhhbmRsZTpmb2N1c3tjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS5oYW5kbGUtLWFjdGl2YXRlZHtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmhhbmRsZSBjYWxjaXRlLWljb257Y29sb3I6aW5oZXJpdH06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgSGFuZGxlID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVIYW5kbGVOdWRnZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUhhbmRsZU51ZGdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsSGFuZGxlQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxIYW5kbGVDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5oYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICBjYXNlIFwiIFwiOlxuICAgICAgICAgIHRoaXMuYWN0aXZhdGVkID0gIXRoaXMuYWN0aXZhdGVkO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgaWYgKCF0aGlzLmFjdGl2YXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuY2FsY2l0ZUhhbmRsZU51ZGdlLmVtaXQoeyBkaXJlY3Rpb246IFwidXBcIiB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgIGlmICghdGhpcy5hY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmNhbGNpdGVIYW5kbGVOdWRnZS5lbWl0KHsgZGlyZWN0aW9uOiBcImRvd25cIiB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZhdGVkID0gZmFsc2U7XG4gICAgfTtcbiAgICB0aGlzLmFjdGl2YXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuZHJhZ0hhbmRsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2V0UG9zaXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZXRTaXplID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIGhhbmRsZUFyaWFUZXh0Q2hhbmdlKCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmdldEFyaWFUZXh0KFwibGl2ZVwiKTtcbiAgICBpZiAobWVzc2FnZSkge1xuICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxIYW5kbGVDaGFuZ2UuZW1pdCh7XG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUJ1dHRvbj8uZm9jdXMoKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldEFyaWFUZXh0KHR5cGUpIHtcbiAgICBjb25zdCB7IHNldFBvc2l0aW9uLCBzZXRTaXplLCBsYWJlbCwgbWVzc2FnZXMsIGFjdGl2YXRlZCB9ID0gdGhpcztcbiAgICBpZiAoIW1lc3NhZ2VzIHx8ICFsYWJlbCB8fCB0eXBlb2Ygc2V0U2l6ZSAhPT0gXCJudW1iZXJcIiB8fCB0eXBlb2Ygc2V0UG9zaXRpb24gIT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB0ZXh0ID0gdHlwZSA9PT0gXCJsYWJlbFwiXG4gICAgICA/IGFjdGl2YXRlZFxuICAgICAgICA/IG1lc3NhZ2VzLmRyYWdIYW5kbGVDaGFuZ2VcbiAgICAgICAgOiBtZXNzYWdlcy5kcmFnSGFuZGxlSWRsZVxuICAgICAgOiBhY3RpdmF0ZWRcbiAgICAgICAgPyBtZXNzYWdlcy5kcmFnSGFuZGxlQWN0aXZlXG4gICAgICAgIDogbWVzc2FnZXMuZHJhZ0hhbmRsZUNvbW1pdDtcbiAgICBjb25zdCByZXBsYWNlUG9zaXRpb24gPSB0ZXh0LnJlcGxhY2UoXCJ7cG9zaXRpb259XCIsIHNldFBvc2l0aW9uLnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IHJlcGxhY2VMYWJlbCA9IHJlcGxhY2VQb3NpdGlvbi5yZXBsYWNlKFwie2l0ZW1MYWJlbH1cIiwgbGFiZWwpO1xuICAgIHJldHVybiByZXBsYWNlTGFiZWwucmVwbGFjZShcInt0b3RhbH1cIiwgc2V0U2l6ZS50b1N0cmluZygpKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgLy8gTmVlZHMgdG8gYmUgYSBzcGFuIGJlY2F1c2Ugb2YgaHR0cHM6Ly9naXRodWIuY29tL1NvcnRhYmxlSlMvU29ydGFibGUvaXNzdWVzLzE0ODZcbiAgICBoKFwic3BhblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLmdldEFyaWFUZXh0KFwibGFiZWxcIiksIFwiYXJpYS1wcmVzc2VkXCI6IHRvQXJpYUJvb2xlYW4odGhpcy5hY3RpdmF0ZWQpLCBjbGFzczogeyBbQ1NTLmhhbmRsZV06IHRydWUsIFtDU1MuaGFuZGxlQWN0aXZhdGVkXTogdGhpcy5hY3RpdmF0ZWQgfSwgb25CbHVyOiB0aGlzLmhhbmRsZUJsdXIsIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLCByb2xlOiBcImJ1dHRvblwiLCB0YWJpbmRleDogXCIwXCIsIHRpdGxlOiB0aGlzLm1lc3NhZ2VzPy5kcmFnSGFuZGxlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogKGVsKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlQnV0dG9uID0gZWw7XG4gICAgICB9IH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBJQ09OUy5kcmFnLCBzY2FsZTogXCJzXCIgfSkpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibWVzc2FnZXNcIjogW1wiaGFuZGxlQXJpYVRleHRDaGFuZ2VcIl0sXG4gICAgXCJsYWJlbFwiOiBbXCJoYW5kbGVBcmlhVGV4dENoYW5nZVwiXSxcbiAgICBcImFjdGl2YXRlZFwiOiBbXCJoYW5kbGVBcmlhVGV4dENoYW5nZVwiXSxcbiAgICBcInNldFBvc2l0aW9uXCI6IFtcImhhbmRsZUFyaWFUZXh0Q2hhbmdlXCJdLFxuICAgIFwic2V0U2l6ZVwiOiBbXCJoYW5kbGVBcmlhVGV4dENoYW5nZVwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gaGFuZGxlQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWhhbmRsZVwiLCB7XG4gICAgXCJhY3RpdmF0ZWRcIjogWzE1NDBdLFxuICAgIFwiZHJhZ0hhbmRsZVwiOiBbNTEzLCBcImRyYWctaGFuZGxlXCJdLFxuICAgIFwibWVzc2FnZXNcIjogWzE2XSxcbiAgICBcInNldFBvc2l0aW9uXCI6IFsyLCBcInNldC1wb3NpdGlvblwiXSxcbiAgICBcInNldFNpemVcIjogWzIsIFwic2V0LXNpemVcIl0sXG4gICAgXCJsYWJlbFwiOiBbMV0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFsxNl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogWzMyXSxcbiAgICBcImRlZmF1bHRNZXNzYWdlc1wiOiBbMzJdLFxuICAgIFwic2V0Rm9jdXNcIjogWzY0XVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWhhbmRsZVwiLCBcImNhbGNpdGUtaWNvblwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1oYW5kbGVcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBIYW5kbGUpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgSGFuZGxlIGFzIEgsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgQnVpbGQsIGZvcmNlVXBkYXRlIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG5jb25zdCByZXNvbHZlTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIHNldHMgdXAgdGhlIGNvbXBvbmVudCBmb3IgdGhlIGFiaWxpdHkgdG8ga25vdyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnRXaWxsTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0VXBMb2FkYWJsZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgcHJvbWlzZU1hcC5zZXQoY29tcG9uZW50LCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZU1hcC5zZXQoY29tcG9uZW50LCByZXNvbHZlKSkpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGxldHMgdGhlIGxvYWRhYmxlIGNvbXBvbmVudCBrbm93IHRoYXQgaXQgaXMgbm93IGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnREaWRMb2FkKCk6IHZvaWQge1xuICogICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldENvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmVzb2x2ZU1hcC5nZXQoY29tcG9uZW50KSgpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyZSBhIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBTdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkKS5cbiAqXG4gKiBSZXF1aXJlcyByZXF1aXJlcyBgTG9hZGFibGVDb21wb25lbnRgIHRvIGJlIGltcGxlbWVudGVkLlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QuXG4gKlxuICogYGBgXG4gKiBhc3luYyBteU1ldGhvZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAqICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICovXG5mdW5jdGlvbiBjb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJldHVybiBwcm9taXNlTWFwLmdldChjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyaW5nIHRoZSBjb21wb25lbnQgaXMgbG9hZGVkIGFuZCByZW5kZXJlZCBieSB0aGUgYnJvd3NlciAoVGhlIFwiY29tcG9uZW50RGlkTG9hZFwiIFN0ZW5jaWwgbGlmZWN5Y2xlIG1ldGhvZCBoYXMgYmVlbiBjYWxsZWQgYW5kIGFueSBpbnRlcm5hbCBlbGVtZW50cyBhcmUgZm9jdXNhYmxlKS5cbiAqXG4gKiBSZXF1aXJlcyByZXF1aXJlcyBgTG9hZGFibGVDb21wb25lbnRgIHRvIGJlIGltcGxlbWVudGVkLlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QgYW5kIHRoZW4gYW4gaW50ZXJuYWwgZWxlbWVudCBiZSBmb2N1c2VkLlxuICpcbiAqIGBgYFxuICogYXN5bmMgc2V0Rm9jdXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAqICAgdGhpcy5pbnRlcm5hbEVsZW1lbnQ/LmZvY3VzKCk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNvbXBvbmVudEZvY3VzYWJsZShjb21wb25lbnQpIHtcbiAgYXdhaXQgY29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCk7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvcmNlVXBkYXRlKGNvbXBvbmVudCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHJlc29sdmUoKSkpO1xufVxuXG5leHBvcnQgeyBzZXRVcExvYWRhYmxlQ29tcG9uZW50IGFzIGEsIGNvbXBvbmVudExvYWRlZCBhcyBiLCBjb21wb25lbnRGb2N1c2FibGUgYXMgYywgc2V0Q29tcG9uZW50TG9hZGVkIGFzIHMgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IEJ1aWxkIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgY29udGFpbmVyQm9yZGVyU2VsZWN0ZWQ6IFwiY29udGFpbmVyLS1ib3JkZXItc2VsZWN0ZWRcIixcbiAgY29udGFpbmVyQm9yZGVyVW5zZWxlY3RlZDogXCJjb250YWluZXItLWJvcmRlci11bnNlbGVjdGVkXCIsXG4gIGNvbnRlbnRDb250YWluZXI6IFwiY29udGVudC1jb250YWluZXJcIixcbiAgY29udGVudENvbnRhaW5lclNlbGVjdGFibGU6IFwiY29udGVudC1jb250YWluZXItLXNlbGVjdGFibGVcIixcbiAgY29udGVudENvbnRhaW5lckhhc0NlbnRlckNvbnRlbnQ6IFwiY29udGVudC1jb250YWluZXItLWhhcy1jZW50ZXItY29udGVudFwiLFxuICBuZXN0ZWRDb250YWluZXI6IFwibmVzdGVkLWNvbnRhaW5lclwiLFxuICBuZXN0ZWRDb250YWluZXJIaWRkZW46IFwibmVzdGVkLWNvbnRhaW5lci0taGlkZGVuXCIsXG4gIGNvbnRlbnQ6IFwiY29udGVudFwiLFxuICBjdXN0b21Db250ZW50OiBcImN1c3RvbS1jb250ZW50XCIsXG4gIGFjdGlvbnNTdGFydDogXCJhY3Rpb25zLXN0YXJ0XCIsXG4gIGNvbnRlbnRTdGFydDogXCJjb250ZW50LXN0YXJ0XCIsXG4gIGxhYmVsOiBcImxhYmVsXCIsXG4gIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uXCIsXG4gIGNvbnRlbnRFbmQ6IFwiY29udGVudC1lbmRcIixcbiAgY29udGVudEJvdHRvbTogXCJjb250ZW50LWJvdHRvbVwiLFxuICBhY3Rpb25zRW5kOiBcImFjdGlvbnMtZW5kXCIsXG4gIHNlbGVjdGlvbkNvbnRhaW5lcjogXCJzZWxlY3Rpb24tY29udGFpbmVyXCIsXG4gIG9wZW5Db250YWluZXI6IFwib3Blbi1jb250YWluZXJcIixcbiAgZHJhZ0NvbnRhaW5lcjogXCJkcmFnLWNvbnRhaW5lclwiLFxufTtcbmNvbnN0IFNMT1RTID0ge1xuICBhY3Rpb25zU3RhcnQ6IFwiYWN0aW9ucy1zdGFydFwiLFxuICBjb250ZW50U3RhcnQ6IFwiY29udGVudC1zdGFydFwiLFxuICBjb250ZW50OiBcImNvbnRlbnRcIixcbiAgY29udGVudEJvdHRvbTogXCJjb250ZW50LWJvdHRvbVwiLFxuICBjb250ZW50RW5kOiBcImNvbnRlbnQtZW5kXCIsXG4gIGFjdGlvbnNFbmQ6IFwiYWN0aW9ucy1lbmRcIixcbn07XG4vLyBTZXQgdG8gemVybyB0byBleHRlbmQgdW50aWwgdGhlIGVuZCBvZiB0aGUgdGFibGUgc2VjdGlvbi5cbmNvbnN0IE1BWF9DT0xVTU5TID0gMDtcbmNvbnN0IElDT05TID0ge1xuICBzZWxlY3RlZE11bHRpcGxlOiBcImNoZWNrLWNpcmNsZS1mXCIsXG4gIHNlbGVjdGVkU2luZ2xlOiBcImNpcmNsZS1mXCIsXG4gIHVuc2VsZWN0ZWQ6IFwiYmxhbmtcIixcbiAgY2xvc2VkTFRSOiBcImNhcmV0LXJpZ2h0XCIsXG4gIGNsb3NlZFJUTDogXCJjYXJldC1sZWZ0XCIsXG4gIG9wZW46IFwiY2FyZXQtZG93blwiLFxuICBibGFuazogXCJibGFua1wiLFxuICBjbG9zZTogXCJ4XCIsXG59O1xuXG5jb25zdCBsaXN0U2VsZWN0b3IgPSBcImNhbGNpdGUtbGlzdFwiO1xuY29uc3QgbGlzdEl0ZW1Hcm91cFNlbGVjdG9yID0gXCJjYWxjaXRlLWxpc3QtaXRlbS1ncm91cFwiO1xuY29uc3QgbGlzdEl0ZW1TZWxlY3RvciA9IFwiY2FsY2l0ZS1saXN0LWl0ZW1cIjtcbmZ1bmN0aW9uIGdldExpc3RJdGVtQ2hpbGRyZW4oc2xvdEVsKSB7XG4gIGNvbnN0IGFzc2lnbmVkRWxlbWVudHMgPSBzbG90RWwuYXNzaWduZWRFbGVtZW50cyh7IGZsYXR0ZW46IHRydWUgfSk7XG4gIGNvbnN0IGxpc3RJdGVtR3JvdXBDaGlsZHJlbiA9IGFzc2lnbmVkRWxlbWVudHMuZmlsdGVyKChlbCkgPT4gZWw/Lm1hdGNoZXMobGlzdEl0ZW1Hcm91cFNlbGVjdG9yKSlcbiAgICAubWFwKChncm91cCkgPT4gQXJyYXkuZnJvbShncm91cC5xdWVyeVNlbGVjdG9yQWxsKGxpc3RJdGVtU2VsZWN0b3IpKSlcbiAgICAucmVkdWNlKChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpID0+IFsuLi5wcmV2aW91c1ZhbHVlLCAuLi5jdXJyZW50VmFsdWVdLCBbXSk7XG4gIGNvbnN0IGxpc3RJdGVtQ2hpbGRyZW4gPSBhc3NpZ25lZEVsZW1lbnRzLmZpbHRlcigoZWwpID0+IGVsPy5tYXRjaGVzKGxpc3RJdGVtU2VsZWN0b3IpKTtcbiAgY29uc3QgbGlzdEl0ZW1MaXN0Q2hpbGRyZW4gPSBhc3NpZ25lZEVsZW1lbnRzLmZpbHRlcigoZWwpID0+IGVsPy5tYXRjaGVzKGxpc3RTZWxlY3RvcikpXG4gICAgLm1hcCgobGlzdCkgPT4gQXJyYXkuZnJvbShsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwobGlzdEl0ZW1TZWxlY3RvcikpKVxuICAgIC5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT4gWy4uLnByZXZpb3VzVmFsdWUsIC4uLmN1cnJlbnRWYWx1ZV0sIFtdKTtcbiAgcmV0dXJuIFsuLi5saXN0SXRlbUxpc3RDaGlsZHJlbiwgLi4ubGlzdEl0ZW1Hcm91cENoaWxkcmVuLCAuLi5saXN0SXRlbUNoaWxkcmVuXTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUxpc3RJdGVtQ2hpbGRyZW4obGlzdEl0ZW1DaGlsZHJlbikge1xuICBsaXN0SXRlbUNoaWxkcmVuLmZvckVhY2goKGxpc3RJdGVtKSA9PiB7XG4gICAgbGlzdEl0ZW0uc2V0UG9zaXRpb24gPSBsaXN0SXRlbUNoaWxkcmVuLmluZGV4T2YobGlzdEl0ZW0pICsgMTtcbiAgICBsaXN0SXRlbS5zZXRTaXplID0gbGlzdEl0ZW1DaGlsZHJlbi5sZW5ndGg7XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0RGVwdGgoZWxlbWVudCwgaW5jbHVkZUdyb3VwID0gZmFsc2UpIHtcbiAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBjb25zdCBleHByZXNzaW9uID0gaW5jbHVkZUdyb3VwXG4gICAgPyBcImFuY2VzdG9yOjpjYWxjaXRlLWxpc3QtaXRlbSB8IGFuY2VzdG9yOjpjYWxjaXRlLWxpc3QtaXRlbS1ncm91cFwiXG4gICAgOiBcImFuY2VzdG9yOjpjYWxjaXRlLWxpc3QtaXRlbVwiO1xuICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5ldmFsdWF0ZShleHByZXNzaW9uLCBlbGVtZW50LCBudWxsLCBYUGF0aFJlc3VsdC5VTk9SREVSRURfTk9ERV9TTkFQU0hPVF9UWVBFLCBudWxsKTtcbiAgcmV0dXJuIHJlc3VsdC5zbmFwc2hvdExlbmd0aDtcbn1cblxuZXhwb3J0IHsgQ1NTIGFzIEMsIElDT05TIGFzIEksIE1BWF9DT0xVTU5TIGFzIE0sIFNMT1RTIGFzIFMsIGdldERlcHRoIGFzIGEsIGdldExpc3RJdGVtQ2hpbGRyZW4gYXMgZywgdXBkYXRlTGlzdEl0ZW1DaGlsZHJlbiBhcyB1IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=