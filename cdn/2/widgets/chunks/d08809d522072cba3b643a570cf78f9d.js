"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_combobox_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-headless.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-headless.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CoreSizing15),
/* harmony export */   a: () => (/* binding */ CoreBreakpointWidthDefaultMd),
/* harmony export */   b: () => (/* binding */ CoreBreakpointWidthDefaultSm),
/* harmony export */   c: () => (/* binding */ CoreBreakpointWidthDefaultXs),
/* harmony export */   d: () => (/* binding */ CoreBreakpointWidthDefaultXxs),
/* harmony export */   e: () => (/* binding */ CoreBreakpointWidthDefaultLg)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
/**
 * Do not edit directly
 * Generated on Tue, 21 Nov 2023 22:52:13 GMT
 */
const CoreSizing15 = "48px";
const CoreBreakpointWidthDefaultXxs = "320px";
const CoreBreakpointWidthDefaultXs = "476px";
const CoreBreakpointWidthDefaultSm = "768px";
const CoreBreakpointWidthDefaultMd = "1152px";
const CoreBreakpointWidthDefaultLg = "1440px";




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/combobox.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/combobox.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ Combobox),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _filter2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter2.js */ "./node_modules/@esri/calcite-components/dist/components/filter2.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _floating_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./floating-ui.js */ "./node_modules/@esri/calcite-components/dist/components/floating-ui.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.js */ "./node_modules/@esri/calcite-components/dist/components/form.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _label2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./label2.js */ "./node_modules/@esri/calcite-components/dist/components/label2.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _openCloseComponent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./openCloseComponent.js */ "./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _utils2_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils2.js */ "./node_modules/@esri/calcite-components/dist/components/utils2.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _calcite_headless_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./calcite-headless.js */ "./node_modules/@esri/calcite-components/dist/components/calcite-headless.js");
/* harmony import */ var _chip_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chip.js */ "./node_modules/@esri/calcite-components/dist/components/chip.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./debounce.js */ "./node_modules/@esri/calcite-components/dist/components/debounce.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */




















const CSS = {
  button: "x-button",
};
function XButton({ disabled, key, label, onClick, ref, scale, }) {
  return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("button", { "aria-label": label, class: CSS.button, disabled: disabled, key: key, onClick: onClick, tabIndex: -1, type: "button", 
    // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
    ref: ref },
    (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("calcite-icon", { icon: "x", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_13__.g)(scale) })));
}

const comboboxCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]) .x-button{inline-size:1rem;block-size:1rem}:host([scale=m]) .x-button{inline-size:1.5rem;block-size:1.5rem}:host([scale=l]) .x-button{inline-size:2rem;block-size:2rem}.x-button{margin:0px;display:flex;cursor:pointer;appearance:none;align-content:center;align-items:center;justify-content:center;align-self:center;border-width:2px;background-color:transparent;color:var(--calcite-ui-text-3);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-radius:50%;border-color:transparent;background-color:var(--calcite-ui-foreground-2)}.x-button:active,.x-button:hover{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3)}.x-button:active{border-style:solid;border-color:var(--calcite-ui-brand)}.x-button calcite-icon{color:inherit}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-input-height:1rem;--calcite-internal-combobox-input-margin-block:calc(0.25rem - 1px)}:host([scale=s]) .x-button{margin-inline:0.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-input-height:1rem;--calcite-internal-combobox-input-margin-block:calc(0.5rem - 1px)}:host([scale=m]) .x-button{margin-inline-end:0.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-input-height:1.5rem;--calcite-internal-combobox-input-margin-block:calc(0.625rem - 1px)}:host([scale=l]) .x-button{margin-inline-end:1rem}.wrapper{display:flex;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);outline-color:transparent;padding-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host(:focus-within) .wrapper,.wrapper--active{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.wrapper--single{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l);cursor:pointer;flex-wrap:nowrap}.grid-input{position:relative;display:flex;flex-grow:1;flex-wrap:wrap;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px;gap:var(--calcite-combobox-item-spacing-unit-s)}.grid-input.selection-display-fit,.grid-input.selection-display-single{flex-wrap:nowrap;overflow:hidden}.input{flex-grow:1;appearance:none;text-overflow:ellipsis;border-style:none;background-color:transparent;padding:0px;font-family:inherit;color:var(--calcite-ui-text-1);font-size:inherit;block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);inline-size:100%;margin-block-end:var(--calcite-combobox-item-spacing-unit-s);min-inline-size:4.8125rem}.input:focus{outline:2px solid transparent;outline-offset:2px}.input:placeholder-shown{text-overflow:ellipsis}.input--transparent{opacity:0}.input--single{padding:0px;margin-block:var(--calcite-internal-combobox-input-margin-block)}.wrapper--active .input-single{cursor:text}.input--hidden{pointer-events:none;inline-size:0px;min-inline-size:0px;opacity:0}.input--icon{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-s)}:host([scale=m]) .input--icon,:host([scale=l]) .input--icon{padding-inline:0.25rem}.input-wrap{display:flex;flex-grow:1;align-items:center}.input-wrap--single{flex:1 1 0%;overflow:hidden}.label{pointer-events:none;display:flex;max-inline-size:100%;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px;font-weight:var(--calcite-font-weight-normal);block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height)}.label--icon{padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon-end,.icon-start{display:flex;cursor:pointer;align-items:center}.icon-end{flex:none}.floating-ui-container{--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.floating-ui-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}.floating-ui-container[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.floating-ui-container[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.floating-ui-container[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.floating-ui-container[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.floating-ui-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}.floating-ui-container--active{visibility:visible}@media (forced-colors: active){.wrapper,.floating-ui-container--active{border:1px solid canvasText}}.screen-readers-only{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.list-container{max-block-size:45vh;overflow-y:auto;background-color:var(--calcite-ui-foreground-1);inline-size:var(--calcite-dropdown-width)}.list{margin:0px;display:block;padding:0px}.list--hide{block-size:0px;overflow:hidden}calcite-chip{--calcite-animation-timing:0}.chip{margin-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);max-inline-size:100%}.chip--active{background-color:var(--calcite-ui-foreground-3)}.chip--invisible{visibility:hidden;position:absolute}.item{display:block}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}::slotted(calcite-combobox-item-group:not(:first-child)){padding-block-start:var(--calcite-combobox-item-spacing-unit-l)}";

const isGroup = (el) => el.tagName === _utils2_js__WEBPACK_IMPORTED_MODULE_12__.f;
const itemUidPrefix = "combobox-item-";
const chipUidPrefix = "combobox-chip-";
const labelUidPrefix = "combobox-label-";
const listboxUidPrefix = "combobox-listbox-";
const inputUidPrefix = "combobox-input-";
const Combobox = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteComboboxChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.createEvent)(this, "calciteComboboxChange", 6);
    this.calciteComboboxFilterChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.createEvent)(this, "calciteComboboxFilterChange", 6);
    this.calciteComboboxChipClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.createEvent)(this, "calciteComboboxChipClose", 6);
    this.calciteComboboxBeforeClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.createEvent)(this, "calciteComboboxBeforeClose", 6);
    this.calciteComboboxClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.createEvent)(this, "calciteComboboxClose", 6);
    this.calciteComboboxBeforeOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.createEvent)(this, "calciteComboboxBeforeOpen", 6);
    this.calciteComboboxOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.createEvent)(this, "calciteComboboxOpen", 6);
    this.placement = _floating_ui_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.internalValueChangeFlag = false;
    this.textInput = null;
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_9__.c)("mutation", () => this.updateItems());
    this.resizeObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_9__.c)("resize", () => {
      this.setMaxScrollerHeight();
      this.refreshSelectionDisplay();
    });
    this.guid = (0,_guid_js__WEBPACK_IMPORTED_MODULE_4__.g)();
    this.inputHeight = 0;
    this.ignoreSelectedEventsFlag = false;
    this.openTransitionProp = "opacity";
    this.setFilteredPlacements = () => {
      const { el, flipPlacements } = this;
      this.filteredFlipPlacements = flipPlacements
        ? (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_2__.f)(flipPlacements, el)
        : null;
    };
    this.getValue = () => {
      const items = this.selectedItems.map((item) => item?.value?.toString());
      return items?.length ? (items.length > 1 ? items : items[0]) : "";
    };
    this.onLabelClick = () => {
      this.setFocus();
    };
    this.keyDownHandler = (event) => {
      const { key } = event;
      switch (key) {
        case "Tab":
          this.activeChipIndex = -1;
          this.activeItemIndex = -1;
          if (this.allowCustomValues && this.text) {
            this.addCustomChip(this.text, true);
            event.preventDefault();
          }
          else if (this.open) {
            this.open = false;
            event.preventDefault();
          }
          else if (!this.allowCustomValues && this.text) {
            this.clearInputValue();
            this.filterItems("");
            this.updateActiveItemIndex(-1);
          }
          break;
        case "ArrowLeft":
          this.previousChip();
          event.preventDefault();
          break;
        case "ArrowRight":
          this.nextChip();
          event.preventDefault();
          break;
        case "ArrowUp":
          event.preventDefault();
          if (this.open) {
            this.shiftActiveItemIndex(-1);
          }
          if (!this.comboboxInViewport()) {
            this.el.scrollIntoView();
          }
          break;
        case "ArrowDown":
          event.preventDefault();
          if (this.open) {
            this.shiftActiveItemIndex(1);
          }
          else {
            this.open = true;
            this.ensureRecentSelectedItemIsActive();
          }
          if (!this.comboboxInViewport()) {
            this.el.scrollIntoView();
          }
          break;
        case " ":
          if (!this.textInput.value) {
            if (!this.open) {
              this.open = true;
              this.shiftActiveItemIndex(1);
            }
            event.preventDefault();
          }
          break;
        case "Home":
          if (!this.open) {
            return;
          }
          event.preventDefault();
          this.updateActiveItemIndex(0);
          this.scrollToActiveItem();
          if (!this.comboboxInViewport()) {
            this.el.scrollIntoView();
          }
          break;
        case "End":
          if (!this.open) {
            return;
          }
          event.preventDefault();
          this.updateActiveItemIndex(this.filteredItems.length - 1);
          this.scrollToActiveItem();
          if (!this.comboboxInViewport()) {
            this.el.scrollIntoView();
          }
          break;
        case "Escape":
          if (!this.clearDisabled && !this.open) {
            this.clearValue();
          }
          this.open = false;
          event.preventDefault();
          break;
        case "Enter":
          if (this.activeItemIndex > -1) {
            this.toggleSelection(this.filteredItems[this.activeItemIndex]);
            event.preventDefault();
          }
          else if (this.activeChipIndex > -1) {
            this.removeActiveChip();
            event.preventDefault();
          }
          else if (this.allowCustomValues && this.text) {
            this.addCustomChip(this.text, true);
            event.preventDefault();
          }
          else if (!event.defaultPrevented) {
            if ((0,_form_js__WEBPACK_IMPORTED_MODULE_3__.s)(this)) {
              event.preventDefault();
            }
          }
          break;
        case "Delete":
        case "Backspace":
          if (this.activeChipIndex > -1) {
            event.preventDefault();
            this.removeActiveChip();
          }
          else if (!this.text && this.isMulti()) {
            event.preventDefault();
            this.removeLastChip();
          }
          break;
      }
    };
    this.toggleCloseEnd = () => {
      this.open = false;
      this.el.removeEventListener("calciteComboboxClose", this.toggleCloseEnd);
    };
    this.toggleOpenEnd = () => {
      this.open = false;
      this.el.removeEventListener("calciteComboboxOpen", this.toggleOpenEnd);
    };
    this.setMaxScrollerHeight = async () => {
      const { listContainerEl, open, referenceEl } = this;
      if (!listContainerEl || !open) {
        return;
      }
      await this.reposition(true);
      const maxScrollerHeight = this.getMaxScrollerHeight();
      listContainerEl.style.maxHeight = maxScrollerHeight > 0 ? `${maxScrollerHeight}px` : "";
      listContainerEl.style.minWidth = `${referenceEl.clientWidth}px`;
      await this.reposition(true);
    };
    this.calciteChipCloseHandler = (comboboxItem) => {
      this.open = false;
      const selection = this.items.find((item) => item === comboboxItem);
      if (selection) {
        this.toggleSelection(selection, false);
      }
      this.calciteComboboxChipClose.emit();
    };
    this.clickHandler = (event) => {
      const composedPath = event.composedPath();
      if (composedPath.some((node) => node.tagName === "CALCITE-CHIP")) {
        this.open = false;
        event.preventDefault();
        return;
      }
      if (composedPath.some((node) => node.classList?.contains(CSS.button))) {
        this.clearValue();
        event.preventDefault();
        return;
      }
      this.open = !this.open;
      this.ensureRecentSelectedItemIsActive();
    };
    this.refreshSelectionDisplay = async () => {
      await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_7__.b)(this);
      if ((0,_utils2_js__WEBPACK_IMPORTED_MODULE_12__.i)(this.selectionMode)) {
        return;
      }
      if (!this.textInput) {
        return;
      }
      const { allSelectedIndicatorChipEl, chipContainerEl, selectionDisplay, placeholder, selectedIndicatorChipEl, textInput, } = this;
      const chipContainerElGap = parseInt(getComputedStyle(chipContainerEl).gap.replace("px", ""));
      const chipContainerElWidth = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.u)(chipContainerEl);
      const { fontSize, fontFamily } = getComputedStyle(textInput);
      const inputTextWidth = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.v)(placeholder, `${fontSize} ${fontFamily}`);
      const inputWidth = (inputTextWidth || parseInt(_calcite_headless_js__WEBPACK_IMPORTED_MODULE_14__.C)) + chipContainerElGap;
      const allSelectedIndicatorChipElWidth = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.u)(allSelectedIndicatorChipEl);
      const selectedIndicatorChipElWidth = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.u)(selectedIndicatorChipEl);
      const largestSelectedIndicatorChipWidth = Math.max(allSelectedIndicatorChipElWidth, selectedIndicatorChipElWidth);
      this.setCompactSelectionDisplay({
        chipContainerElGap,
        chipContainerElWidth,
        inputWidth,
        largestSelectedIndicatorChipWidth,
      });
      if (selectionDisplay === "fit") {
        const chipEls = Array.from(this.el.shadowRoot.querySelectorAll("calcite-chip")).filter((chipEl) => chipEl.closable);
        const availableHorizontalChipElSpace = Math.round(chipContainerElWidth -
          ((this.selectedHiddenChipsCount > 0 ? selectedIndicatorChipElWidth : 0) +
            chipContainerElGap +
            inputWidth +
            chipContainerElGap));
        this.refreshChipDisplay({ availableHorizontalChipElSpace, chipContainerElGap, chipEls });
        this.setVisibleAndHiddenChips(chipEls);
      }
    };
    this.setFloatingEl = (el) => {
      this.floatingEl = el;
      (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_2__.c)(this, this.referenceEl, this.floatingEl);
    };
    this.setContainerEl = (el) => {
      this.resizeObserver.observe(el);
      this.listContainerEl = el;
      this.transitionEl = el;
    };
    this.setChipContainerEl = (el) => {
      this.resizeObserver.observe(el);
      this.chipContainerEl = el;
    };
    this.setReferenceEl = (el) => {
      this.referenceEl = el;
      (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_2__.c)(this, this.referenceEl, this.floatingEl);
    };
    this.setAllSelectedIndicatorChipEl = (el) => {
      this.allSelectedIndicatorChipEl = el;
    };
    this.setSelectedIndicatorChipEl = (el) => {
      this.selectedIndicatorChipEl = el;
    };
    this.inputHandler = (event) => {
      const value = event.target.value;
      this.text = value;
      this.filterItems(value);
      if (value) {
        this.activeChipIndex = -1;
      }
    };
    this.filterItems = (() => {
      const find = (item, filteredData) => item &&
        filteredData.some(({ label, value }) => isGroup(item) ? label === item.label : value === item.value && label === item.textLabel);
      return (0,_debounce_js__WEBPACK_IMPORTED_MODULE_17__.d)((text) => {
        const filteredData = (0,_filter2_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.data, text);
        const itemsAndGroups = this.getItemsAndGroups();
        itemsAndGroups.forEach((item) => {
          const hidden = !find(item, filteredData);
          item.hidden = hidden;
          const [parent, grandparent] = item.ancestors;
          if (find(parent, filteredData) || find(grandparent, filteredData)) {
            item.hidden = false;
          }
          if (!hidden) {
            item.ancestors.forEach((ancestor) => (ancestor.hidden = false));
          }
        });
        this.filteredItems = this.getFilteredItems();
        this.calciteComboboxFilterChange.emit();
      }, 100);
    })();
    this.internalComboboxChangeEvent = () => {
      this.calciteComboboxChange.emit();
    };
    this.emitComboboxChange = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_17__.d)(this.internalComboboxChangeEvent, 0);
    this.getSelectedItems = () => {
      if (!this.isMulti()) {
        const match = this.items.find(({ selected }) => selected);
        return match ? [match] : [];
      }
      return (this.items
        .filter((item) => item.selected && (this.selectionMode !== "ancestors" || !(0,_utils2_js__WEBPACK_IMPORTED_MODULE_12__.h)(item)))
        /** Preserve order of entered tags */
        .sort((a, b) => {
        const aIdx = this.selectedItems.indexOf(a);
        const bIdx = this.selectedItems.indexOf(b);
        if (aIdx > -1 && bIdx > -1) {
          return aIdx - bIdx;
        }
        return bIdx - aIdx;
      }));
    };
    this.updateItems = () => {
      this.items = this.getItems();
      this.groupItems = this.getGroupItems();
      this.data = this.getData();
      this.selectedItems = this.getSelectedItems();
      this.filteredItems = this.getFilteredItems();
      this.needsIcon = this.getNeedsIcon();
      this.items.forEach((item) => {
        item.selectionMode = this.selectionMode;
        item.scale = this.scale;
      });
      if (!this.allowCustomValues) {
        this.setMaxScrollerHeight();
      }
      this.groupItems.forEach((groupItem, index, items) => {
        if (index === 0) {
          groupItem.afterEmptyGroup = false;
        }
        const nextGroupItem = items[index + 1];
        if (nextGroupItem) {
          nextGroupItem.afterEmptyGroup = groupItem.children.length === 0;
        }
      });
    };
    this.scrollToActiveItem = () => {
      const activeItem = this.filteredItems[this.activeItemIndex];
      if (!activeItem) {
        return;
      }
      const height = this.calculateSingleItemHeight(activeItem);
      const { offsetHeight, scrollTop } = this.listContainerEl;
      if (offsetHeight + scrollTop < activeItem.offsetTop + height) {
        this.listContainerEl.scrollTop = activeItem.offsetTop - offsetHeight + height;
      }
      else if (activeItem.offsetTop < scrollTop) {
        this.listContainerEl.scrollTop = activeItem.offsetTop;
      }
    };
    this.comboboxFocusHandler = () => {
      if (this.disabled) {
        return;
      }
      this.textInput?.focus();
    };
    this.clearDisabled = false;
    this.selectionDisplay = "all";
    this.open = false;
    this.disabled = false;
    this.form = undefined;
    this.label = undefined;
    this.placeholder = undefined;
    this.placeholderIcon = undefined;
    this.placeholderIconFlipRtl = false;
    this.maxItems = 0;
    this.name = undefined;
    this.allowCustomValues = undefined;
    this.overlayPositioning = "absolute";
    this.required = false;
    this.selectionMode = "multiple";
    this.scale = "m";
    this.value = null;
    this.flipPlacements = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.selectedItems = [];
    this.filteredItems = [];
    this.items = [];
    this.groupItems = [];
    this.needsIcon = undefined;
    this.activeItemIndex = -1;
    this.activeChipIndex = -1;
    this.activeDescendant = "";
    this.compactSelectionDisplay = false;
    this.selectedHiddenChipsCount = 0;
    this.selectedVisibleChipsCount = 0;
    this.text = "";
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  openHandler() {
    (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_10__.o)(this);
    if (this.disabled) {
      this.open = false;
      return;
    }
    this.setMaxScrollerHeight();
  }
  handleDisabledChange(value) {
    if (!value) {
      this.open = false;
    }
  }
  maxItemsHandler() {
    this.setMaxScrollerHeight();
  }
  overlayPositioningHandler() {
    this.reposition(true);
  }
  handlePropsChange() {
    this.updateItems();
  }
  valueHandler(value) {
    if (!this.internalValueChangeFlag) {
      const items = this.getItems();
      if (Array.isArray(value)) {
        items.forEach((item) => (item.selected = value.includes(item.value)));
      }
      else if (value) {
        items.forEach((item) => (item.selected = value === item.value));
      }
      else {
        items.forEach((item) => (item.selected = false));
      }
      this.updateItems();
    }
  }
  onMessagesChange() {
    /*  wired up by t9n util */
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements();
    this.reposition(true);
  }
  selectedItemsHandler() {
    this.internalValueChangeFlag = true;
    this.value = this.getValue();
    this.internalValueChangeFlag = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  documentClickHandler(event) {
    if (this.disabled || !(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.j)(event)) {
      return;
    }
    const composedPath = event.composedPath();
    if (composedPath.includes(this.el) || composedPath.includes(this.referenceEl)) {
      return;
    }
    if (!this.allowCustomValues && this.textInput.value) {
      this.clearInputValue();
      this.filterItems("");
      this.updateActiveItemIndex(-1);
    }
    if (this.allowCustomValues && this.text.trim().length) {
      this.addCustomChip(this.text);
    }
    this.open = false;
  }
  calciteComboboxItemChangeHandler(event) {
    if (this.ignoreSelectedEventsFlag) {
      return;
    }
    const target = event.target;
    const newIndex = this.filteredItems.indexOf(target);
    this.updateActiveItemIndex(newIndex);
    this.toggleSelection(target, target.selected);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Updates the position of the component.
   *
   * @param delayed Reposition the component after a delay
   * @returns Promise
   */
  async reposition(delayed = false) {
    const { floatingEl, referenceEl, placement, overlayPositioning, filteredFlipPlacements } = this;
    return (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_2__.r)(this, {
      floatingEl,
      referenceEl,
      overlayPositioning,
      placement,
      flipPlacements: filteredFlipPlacements,
      type: "menu",
    }, delayed);
  }
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    this.textInput?.focus();
    this.activeChipIndex = -1;
    this.activeItemIndex = -1;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_11__.c)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    this.internalValueChangeFlag = true;
    this.value = this.getValue();
    this.internalValueChangeFlag = false;
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
    this.updateItems();
    this.setFilteredPlacements();
    this.reposition(true);
    if (this.open) {
      this.openHandler();
      (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_10__.o)(this);
    }
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_7__.a)(this);
    this.updateItems();
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_11__.s)(this);
  }
  componentDidLoad() {
    (0,_form_js__WEBPACK_IMPORTED_MODULE_3__.a)(this, this.getValue());
    this.reposition(true);
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_7__.s)(this);
  }
  componentDidRender() {
    if (this.el.offsetHeight !== this.inputHeight) {
      this.reposition(true);
      this.inputHeight = this.el.offsetHeight;
    }
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_5__.u)(this);
  }
  componentDidUpdate() {
    this.refreshSelectionDisplay();
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
    this.resizeObserver?.disconnect();
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, this.referenceEl, this.floatingEl);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_8__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_11__.d)(this);
  }
  /** when search text is cleared, reset active to  */
  textHandler() {
    this.updateActiveItemIndex(-1);
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_11__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  clearValue() {
    this.ignoreSelectedEventsFlag = true;
    this.items.forEach((el) => (el.selected = false));
    this.ignoreSelectedEventsFlag = false;
    this.selectedItems = [];
    this.emitComboboxChange();
    this.open = false;
    this.updateActiveItemIndex(-1);
    this.resetText();
    this.filterItems("");
    this.setFocus();
  }
  clearInputValue() {
    this.textInput.value = "";
    this.text = "";
  }
  comboboxInViewport() {
    const bounding = this.el.getBoundingClientRect();
    return (bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight));
  }
  onBeforeOpen() {
    this.scrollToActiveItem();
    this.calciteComboboxBeforeOpen.emit();
  }
  onOpen() {
    this.calciteComboboxOpen.emit();
  }
  onBeforeClose() {
    this.calciteComboboxBeforeClose.emit();
  }
  onClose() {
    this.calciteComboboxClose.emit();
  }
  ensureRecentSelectedItemIsActive() {
    const { selectedItems } = this;
    const targetIndex = selectedItems.length === 0 ? 0 : this.items.indexOf(selectedItems[selectedItems.length - 1]);
    this.updateActiveItemIndex(targetIndex);
  }
  hideChip(chipEl) {
    chipEl.classList.add(_utils2_js__WEBPACK_IMPORTED_MODULE_12__.C.chipInvisible);
  }
  showChip(chipEl) {
    chipEl.classList.remove(_utils2_js__WEBPACK_IMPORTED_MODULE_12__.C.chipInvisible);
  }
  refreshChipDisplay({ chipEls, availableHorizontalChipElSpace, chipContainerElGap, }) {
    chipEls.forEach((chipEl) => {
      if (!chipEl.selected) {
        this.hideChip(chipEl);
      }
      else {
        const chipElWidth = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.u)(chipEl);
        if (chipElWidth && chipElWidth < availableHorizontalChipElSpace) {
          availableHorizontalChipElSpace -= chipElWidth + chipContainerElGap;
          this.showChip(chipEl);
          return;
        }
      }
      this.hideChip(chipEl);
    });
  }
  setCompactSelectionDisplay({ chipContainerElGap, chipContainerElWidth, inputWidth, largestSelectedIndicatorChipWidth, }) {
    const newCompactBreakpoint = Math.round(largestSelectedIndicatorChipWidth + chipContainerElGap + inputWidth);
    if (!this.maxCompactBreakpoint || this.maxCompactBreakpoint < newCompactBreakpoint) {
      this.maxCompactBreakpoint = newCompactBreakpoint;
    }
    this.compactSelectionDisplay = chipContainerElWidth < this.maxCompactBreakpoint;
  }
  setVisibleAndHiddenChips(chipEls) {
    let newSelectedVisibleChipsCount = 0;
    chipEls.forEach((chipEl) => {
      if (chipEl.selected && !chipEl.classList.contains(_utils2_js__WEBPACK_IMPORTED_MODULE_12__.C.chipInvisible)) {
        newSelectedVisibleChipsCount++;
      }
    });
    if (newSelectedVisibleChipsCount !== this.selectedVisibleChipsCount) {
      this.selectedVisibleChipsCount = newSelectedVisibleChipsCount;
    }
    const newSelectedHiddenChipsCount = this.getSelectedItems().length - newSelectedVisibleChipsCount;
    if (newSelectedHiddenChipsCount !== this.selectedHiddenChipsCount) {
      this.selectedHiddenChipsCount = newSelectedHiddenChipsCount;
    }
  }
  getMaxScrollerHeight() {
    const items = this.getItemsAndGroups().filter((item) => !item.hidden);
    const { maxItems } = this;
    let itemsToProcess = 0;
    let maxScrollerHeight = 0;
    if (items.length > maxItems) {
      items.forEach((item) => {
        if (itemsToProcess < maxItems && maxItems > 0) {
          const height = this.calculateSingleItemHeight(item);
          if (height > 0) {
            maxScrollerHeight += height;
            itemsToProcess++;
          }
        }
      });
    }
    return maxScrollerHeight;
  }
  calculateSingleItemHeight(item) {
    if (!item) {
      return;
    }
    let height = item.offsetHeight;
    // if item has children items, don't count their height twice
    const children = Array.from(item.querySelectorAll(_utils2_js__WEBPACK_IMPORTED_MODULE_12__.b));
    children
      .map((child) => child?.offsetHeight)
      .forEach((offsetHeight) => {
      height -= offsetHeight;
    });
    return height;
  }
  getItemsAndGroups() {
    return [...this.groupItems, ...this.items];
  }
  toggleSelection(item, value = !item.selected) {
    if (!item ||
      (this.selectionMode === "single-persist" && item.selected && item.value === this.value)) {
      return;
    }
    if (this.isMulti()) {
      item.selected = value;
      this.updateAncestors(item);
      this.selectedItems = this.getSelectedItems();
      this.emitComboboxChange();
      this.resetText();
      this.filterItems("");
    }
    else {
      this.ignoreSelectedEventsFlag = true;
      this.items.forEach((el) => (el.selected = el === item ? value : false));
      this.ignoreSelectedEventsFlag = false;
      this.selectedItems = this.getSelectedItems();
      this.emitComboboxChange();
      if (this.textInput) {
        this.textInput.value = item.textLabel;
      }
      this.open = false;
      this.updateActiveItemIndex(-1);
      this.resetText();
      this.filterItems("");
    }
  }
  updateAncestors(item) {
    if (this.selectionMode !== "ancestors") {
      return;
    }
    const ancestors = (0,_utils2_js__WEBPACK_IMPORTED_MODULE_12__.c)(item);
    const children = (0,_utils2_js__WEBPACK_IMPORTED_MODULE_12__.d)(item);
    if (item.selected) {
      ancestors.forEach((el) => {
        el.selected = true;
      });
    }
    else {
      children.forEach((el) => (el.selected = false));
      [...ancestors].forEach((el) => {
        if (!(0,_utils2_js__WEBPACK_IMPORTED_MODULE_12__.h)(el)) {
          el.selected = false;
        }
      });
    }
  }
  getFilteredItems() {
    return this.items.filter((item) => !item.hidden);
  }
  getData() {
    return this.items.map((item) => ({
      filterDisabled: item.filterDisabled,
      value: item.value,
      label: item.textLabel,
    }));
  }
  getNeedsIcon() {
    return (0,_utils2_js__WEBPACK_IMPORTED_MODULE_12__.i)(this.selectionMode) && this.items.some((item) => item.icon);
  }
  resetText() {
    if (this.textInput) {
      this.textInput.value = "";
    }
    this.text = "";
  }
  getItems() {
    const items = Array.from(this.el.querySelectorAll(_utils2_js__WEBPACK_IMPORTED_MODULE_12__.e));
    return items.filter((item) => !item.disabled);
  }
  getGroupItems() {
    return Array.from(this.el.querySelectorAll(_utils2_js__WEBPACK_IMPORTED_MODULE_12__.f));
  }
  addCustomChip(value, focus) {
    const existingItem = this.items.find((el) => el.textLabel === value);
    if (existingItem) {
      this.toggleSelection(existingItem, true);
    }
    else {
      if (!this.isMulti()) {
        this.toggleSelection(this.selectedItems[this.selectedItems.length - 1], false);
      }
      const item = document.createElement(_utils2_js__WEBPACK_IMPORTED_MODULE_12__.e);
      item.value = value;
      item.textLabel = value;
      item.selected = true;
      this.el.appendChild(item);
      this.resetText();
      if (focus) {
        this.setFocus();
      }
      this.updateItems();
      this.filterItems("");
      this.emitComboboxChange();
    }
  }
  removeActiveChip() {
    this.toggleSelection(this.selectedItems[this.activeChipIndex], false);
    this.setFocus();
  }
  removeLastChip() {
    this.toggleSelection(this.selectedItems[this.selectedItems.length - 1], false);
    this.setFocus();
  }
  previousChip() {
    if (this.text) {
      return;
    }
    const length = this.selectedItems.length - 1;
    const active = this.activeChipIndex;
    this.activeChipIndex = active === -1 ? length : Math.max(active - 1, 0);
    this.updateActiveItemIndex(-1);
    this.focusChip();
  }
  nextChip() {
    if (this.text || this.activeChipIndex === -1) {
      return;
    }
    const last = this.selectedItems.length - 1;
    const newIndex = this.activeChipIndex + 1;
    if (newIndex > last) {
      this.activeChipIndex = -1;
      this.setFocus();
    }
    else {
      this.activeChipIndex = newIndex;
      this.focusChip();
    }
    this.updateActiveItemIndex(-1);
  }
  focusChip() {
    const guid = this.selectedItems[this.activeChipIndex]?.guid;
    const chip = guid
      ? this.referenceEl.querySelector(`#${chipUidPrefix}${guid}`)
      : null;
    chip?.setFocus();
  }
  shiftActiveItemIndex(delta) {
    const { length } = this.filteredItems;
    const newIndex = (this.activeItemIndex + length + delta) % length;
    this.updateActiveItemIndex(newIndex);
    this.scrollToActiveItem();
  }
  updateActiveItemIndex(index) {
    this.activeItemIndex = index;
    let activeDescendant = null;
    this.filteredItems.forEach((el, i) => {
      if (i === index) {
        el.active = true;
        activeDescendant = `${itemUidPrefix}${el.guid}`;
      }
      else {
        el.active = false;
      }
    });
    this.activeDescendant = activeDescendant;
    if (this.activeItemIndex > -1) {
      this.activeChipIndex = -1;
    }
  }
  isAllSelected() {
    return this.getItems().length === this.getSelectedItems().length;
  }
  isMulti() {
    return !(0,_utils2_js__WEBPACK_IMPORTED_MODULE_12__.i)(this.selectionMode);
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderChips() {
    const { activeChipIndex, scale, selectionMode, messages } = this;
    return this.selectedItems.map((item, i) => {
      const chipClasses = {
        chip: true,
        "chip--active": activeChipIndex === i,
      };
      const ancestors = [...(0,_utils2_js__WEBPACK_IMPORTED_MODULE_12__.c)(item)].reverse();
      const pathLabel = [...ancestors, item].map((el) => el.textLabel);
      const label = selectionMode !== "ancestors" ? item.textLabel : pathLabel.join(" / ");
      return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("calcite-chip", { class: chipClasses, closable: true, icon: item.icon, iconFlipRtl: item.iconFlipRtl, id: item.guid ? `${chipUidPrefix}${item.guid}` : null, key: item.textLabel, messageOverrides: { dismissLabel: messages.removeTag }, onCalciteChipClose: () => this.calciteChipCloseHandler(item), scale: scale, selected: item.selected, title: label, value: item.value }, label));
    });
  }
  renderAllSelectedIndicatorChip() {
    const { compactSelectionDisplay, scale, selectedVisibleChipsCount, setAllSelectedIndicatorChipEl, } = this;
    const label = this.messages.allSelected;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("calcite-chip", { class: {
        chip: true,
        [_utils2_js__WEBPACK_IMPORTED_MODULE_12__.C.chipInvisible]: !(this.isAllSelected() &&
          !selectedVisibleChipsCount &&
          !compactSelectionDisplay),
      }, scale: scale, title: label, value: "",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: setAllSelectedIndicatorChipEl }, label));
  }
  renderAllSelectedIndicatorChipCompact() {
    const { compactSelectionDisplay, scale, selectedVisibleChipsCount } = this;
    const label = this.messages.all || "All";
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("calcite-chip", { class: {
        chip: true,
        [_utils2_js__WEBPACK_IMPORTED_MODULE_12__.C.chipInvisible]: !(this.isAllSelected() &&
          !selectedVisibleChipsCount &&
          compactSelectionDisplay),
      }, scale: scale, title: label, value: "" }, label));
  }
  renderSelectedIndicatorChip() {
    const { compactSelectionDisplay, selectionDisplay, getSelectedItems, scale, selectedHiddenChipsCount, selectedVisibleChipsCount, setSelectedIndicatorChipEl, } = this;
    let chipInvisible;
    let label;
    if (compactSelectionDisplay) {
      chipInvisible = true;
    }
    else {
      if (selectionDisplay === "single") {
        const selectedItemsCount = getSelectedItems().length;
        if (this.isAllSelected()) {
          chipInvisible = true;
        }
        else if (selectedItemsCount > 0) {
          chipInvisible = false;
        }
        else {
          chipInvisible = true;
        }
        label = `${selectedItemsCount} ${this.messages.selected}`;
      }
      else if (selectionDisplay === "fit") {
        chipInvisible = !!((this.isAllSelected() && selectedVisibleChipsCount === 0) ||
          selectedHiddenChipsCount === 0);
        label =
          selectedVisibleChipsCount > 0
            ? `+${selectedHiddenChipsCount}`
            : `${selectedHiddenChipsCount} ${this.messages.selected}`;
      }
    }
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("calcite-chip", { class: {
        chip: true,
        [_utils2_js__WEBPACK_IMPORTED_MODULE_12__.C.chipInvisible]: chipInvisible,
      }, scale: scale, title: label, value: "",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: setSelectedIndicatorChipEl }, label));
  }
  renderSelectedIndicatorChipCompact() {
    const { compactSelectionDisplay, selectionDisplay, getSelectedItems, scale, selectedHiddenChipsCount, } = this;
    let chipInvisible;
    let label;
    if (compactSelectionDisplay) {
      const selectedItemsCount = getSelectedItems().length;
      if (this.isAllSelected()) {
        chipInvisible = true;
      }
      else if (selectionDisplay === "fit") {
        chipInvisible = !(selectedHiddenChipsCount > 0);
        label = `${selectedHiddenChipsCount || 0}`;
      }
      else if (selectionDisplay === "single") {
        chipInvisible = !(selectedItemsCount > 0);
        label = `${selectedItemsCount}`;
      }
    }
    else {
      chipInvisible = true;
    }
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("calcite-chip", { class: {
        chip: true,
        [_utils2_js__WEBPACK_IMPORTED_MODULE_12__.C.chipInvisible]: chipInvisible,
      }, scale: scale, title: label, value: "" }, label));
  }
  renderInput() {
    const { guid, disabled, placeholder, selectionMode, selectedItems, open } = this;
    const single = (0,_utils2_js__WEBPACK_IMPORTED_MODULE_12__.i)(selectionMode);
    const selectedItem = selectedItems[0];
    const showLabel = !open && single && !!selectedItem;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("span", { class: {
        "input-wrap": true,
        "input-wrap--single": single,
      } }, showLabel && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("span", { class: {
        label: true,
        "label--icon": !!selectedItem?.icon,
      }, key: "label" }, selectedItem.textLabel)), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("input", { "aria-activedescendant": this.activeDescendant, "aria-autocomplete": "list", "aria-controls": `${listboxUidPrefix}${guid}`, "aria-label": (0,_label2_js__WEBPACK_IMPORTED_MODULE_6__.g)(this), class: {
        input: true,
        "input--single": true,
        "input--transparent": this.activeChipIndex > -1,
        "input--hidden": showLabel,
        "input--icon": !!this.placeholderIcon,
      }, disabled: disabled, id: `${inputUidPrefix}${guid}`, key: "input", onFocus: this.comboboxFocusHandler, onInput: this.inputHandler, placeholder: placeholder, type: "text",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.textInput = el) })));
  }
  renderListBoxOptions() {
    return this.filteredItems.map((item) => ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("li", { "aria-selected": (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.t)(item.selected), id: item.guid ? `${itemUidPrefix}${item.guid}` : null, role: "option", tabindex: "-1" }, item.textLabel)));
  }
  renderFloatingUIContainer() {
    const { setFloatingEl, setContainerEl, open } = this;
    const classes = {
      [_utils2_js__WEBPACK_IMPORTED_MODULE_12__.C.listContainer]: true,
      [_floating_ui_js__WEBPACK_IMPORTED_MODULE_2__.F.animation]: true,
      [_floating_ui_js__WEBPACK_IMPORTED_MODULE_2__.F.animationActive]: open,
    };
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("div", { "aria-hidden": "true", class: {
        "floating-ui-container": true,
        "floating-ui-container--active": open,
      },
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: setFloatingEl }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("div", { class: classes,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: setContainerEl }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("ul", { class: { list: true, "list--hide": !open } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("slot", null)))));
  }
  renderIconStart() {
    const { selectedItems, placeholderIcon, selectionMode, placeholderIconFlipRtl } = this;
    const selectedItem = selectedItems[0];
    const selectedIcon = selectedItem?.icon;
    const singleSelectionMode = (0,_utils2_js__WEBPACK_IMPORTED_MODULE_12__.i)(selectionMode);
    const iconAtStart = !this.open && selectedItem
      ? !!selectedIcon && singleSelectionMode
      : !!this.placeholderIcon && (!selectedItem || singleSelectionMode);
    return (iconAtStart && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("span", { class: "icon-start" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("calcite-icon", { class: "selected-icon", flipRtl: this.open && selectedItem ? selectedItem.iconFlipRtl : placeholderIconFlipRtl, icon: !this.open && selectedItem ? selectedIcon : placeholderIcon, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_13__.g)(this.scale) }))));
  }
  renderIconEnd() {
    const { open } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("span", { class: "icon-end" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("calcite-icon", { icon: open ? "chevron-up" : "chevron-down", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_13__.g)(this.scale) })));
  }
  render() {
    const { selectionDisplay, guid, label, open } = this;
    const singleSelectionMode = (0,_utils2_js__WEBPACK_IMPORTED_MODULE_12__.i)(this.selectionMode);
    const allSelectionDisplay = selectionDisplay === "all";
    const singleSelectionDisplay = selectionDisplay === "single";
    const fitSelectionDisplay = !singleSelectionMode && selectionDisplay === "fit";
    const isClearable = !this.clearDisabled && this.value?.length > 0;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.Host, { onClick: this.comboboxFocusHandler }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("div", { "aria-autocomplete": "list", "aria-controls": `${listboxUidPrefix}${guid}`, "aria-expanded": (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.t)(open), "aria-haspopup": "listbox", "aria-label": (0,_label2_js__WEBPACK_IMPORTED_MODULE_6__.g)(this), "aria-live": "polite", "aria-owns": `${listboxUidPrefix}${guid}`, class: {
        wrapper: true,
        "wrapper--single": singleSelectionMode || !this.selectedItems.length,
        "wrapper--active": open,
      }, onClick: this.clickHandler, onKeyDown: this.keyDownHandler, role: "combobox",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setReferenceEl }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("div", { class: {
        "grid-input": true,
        [_utils2_js__WEBPACK_IMPORTED_MODULE_12__.C.selectionDisplayFit]: fitSelectionDisplay,
        [_utils2_js__WEBPACK_IMPORTED_MODULE_12__.C.selectionDisplaySingle]: singleSelectionDisplay,
      }, ref: this.setChipContainerEl }, this.renderIconStart(), !singleSelectionMode && !singleSelectionDisplay && this.renderChips(), !singleSelectionMode &&
      !allSelectionDisplay && [
      this.renderSelectedIndicatorChip(),
      this.renderSelectedIndicatorChipCompact(),
      this.renderAllSelectedIndicatorChip(),
      this.renderAllSelectedIndicatorChipCompact(),
    ], (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("label", { class: "screen-readers-only", htmlFor: `${inputUidPrefix}${guid}`, id: `${labelUidPrefix}${guid}` }, label), this.renderInput()), isClearable ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)(XButton, { disabled: this.disabled, key: "close-button", label: this.messages.clear, scale: this.scale })) : null, this.renderIconEnd()), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)("ul", { "aria-labelledby": `${labelUidPrefix}${guid}`, "aria-multiselectable": "true", class: "screen-readers-only", id: `${listboxUidPrefix}${guid}`, role: "listbox", tabIndex: -1 }, this.renderListBoxOptions()), this.renderFloatingUIContainer(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_18__.h)(_form_js__WEBPACK_IMPORTED_MODULE_3__.H, { component: this })));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "open": ["openHandler"],
    "disabled": ["handleDisabledChange"],
    "maxItems": ["maxItemsHandler"],
    "overlayPositioning": ["overlayPositioningHandler"],
    "selectionMode": ["handlePropsChange"],
    "scale": ["handlePropsChange"],
    "value": ["valueHandler"],
    "messageOverrides": ["onMessagesChange"],
    "flipPlacements": ["flipPlacementsHandler"],
    "selectedItems": ["selectedItemsHandler"],
    "text": ["textHandler"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return comboboxCss; }
}, [1, "calcite-combobox", {
    "clearDisabled": [516, "clear-disabled"],
    "selectionDisplay": [513, "selection-display"],
    "open": [1540],
    "disabled": [516],
    "form": [513],
    "label": [1],
    "placeholder": [1],
    "placeholderIcon": [513, "placeholder-icon"],
    "placeholderIconFlipRtl": [516, "placeholder-icon-flip-rtl"],
    "maxItems": [514, "max-items"],
    "name": [513],
    "allowCustomValues": [516, "allow-custom-values"],
    "overlayPositioning": [513, "overlay-positioning"],
    "required": [516],
    "selectionMode": [513, "selection-mode"],
    "scale": [513],
    "value": [1025],
    "flipPlacements": [16],
    "messages": [1040],
    "messageOverrides": [1040],
    "selectedItems": [1040],
    "filteredItems": [1040],
    "items": [32],
    "groupItems": [32],
    "needsIcon": [32],
    "activeItemIndex": [32],
    "activeChipIndex": [32],
    "activeDescendant": [32],
    "compactSelectionDisplay": [32],
    "selectedHiddenChipsCount": [32],
    "selectedVisibleChipsCount": [32],
    "text": [32],
    "effectiveLocale": [32],
    "defaultMessages": [32],
    "reposition": [64],
    "setFocus": [64]
  }, [[5, "pointerdown", "documentClickHandler"], [0, "calciteComboboxItemChange", "calciteComboboxItemChangeHandler"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-combobox", "calcite-chip", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-combobox":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Combobox);
      }
      break;
    case "calcite-chip":
      if (!customElements.get(tagName)) {
        (0,_chip_js__WEBPACK_IMPORTED_MODULE_15__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_16__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/utils2.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/utils2.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CSS),
/* harmony export */   a: () => (/* binding */ getDepth),
/* harmony export */   b: () => (/* binding */ ComboboxChildSelector),
/* harmony export */   c: () => (/* binding */ getItemAncestors),
/* harmony export */   d: () => (/* binding */ getItemChildren),
/* harmony export */   e: () => (/* binding */ ComboboxItem),
/* harmony export */   f: () => (/* binding */ ComboboxItemGroup),
/* harmony export */   g: () => (/* binding */ getAncestors),
/* harmony export */   h: () => (/* binding */ hasActiveChildren),
/* harmony export */   i: () => (/* binding */ isSingleLike)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const ComboboxItem = "CALCITE-COMBOBOX-ITEM";
const ComboboxItemGroup = "CALCITE-COMBOBOX-ITEM-GROUP";
const ComboboxChildSelector = `${ComboboxItem}, ${ComboboxItemGroup}`;
const CSS = {
  chipInvisible: "chip--invisible",
  selectionDisplayFit: "selection-display-fit",
  selectionDisplaySingle: "selection-display-single",
  listContainer: "list-container",
};

function getAncestors(element) {
  const parent = element.parentElement?.closest(ComboboxChildSelector);
  const grandparent = parent?.parentElement?.closest(ComboboxChildSelector);
  return [parent, grandparent].filter((el) => el);
}
function getItemAncestors(item) {
  return (item.ancestors?.filter((el) => el.nodeName === "CALCITE-COMBOBOX-ITEM") || []);
}
function getItemChildren(item) {
  return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.o)(item.querySelectorAll("calcite-combobox-item"));
}
function hasActiveChildren(node) {
  const items = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.o)(node.querySelectorAll("calcite-combobox-item"));
  return items.filter((item) => item.selected).length > 0;
}
function getDepth(element) {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.Build.isBrowser) {
    return 0;
  }
  const result = document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group", element, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  return result.snapshotLength;
}
function isSingleLike(selectionMode) {
  return selectionMode.includes("single");
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZDA4ODA5ZDUyMjA3MmNiYTNiNjQzYTU3MGNmNzhmOWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2TTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQjdNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0c7QUFDcEU7QUFDeUU7QUFDOEQ7QUFDbkM7QUFDekc7QUFDNkU7QUFDMUI7QUFDMkM7QUFDdEQ7QUFDekI7QUFDcUI7QUFDd0M7QUFDc0Y7QUFDcko7QUFDTztBQUNIO0FBQ0E7QUFDVDs7QUFFOUM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRDQUE0QztBQUMvRCxVQUFVLDBFQUFDLGFBQWE7QUFDeEI7QUFDQSxjQUFjO0FBQ2QsSUFBSSwwRUFBQyxtQkFBbUIsa0JBQWtCLGlEQUFZLFNBQVM7QUFDL0Q7O0FBRUEsdUNBQXVDLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGtCQUFrQixjQUFjLHlHQUF5RyxVQUFVLDJCQUEyQixpQkFBaUIsZ0JBQWdCLDJCQUEyQixtQkFBbUIsa0JBQWtCLDJCQUEyQixpQkFBaUIsZ0JBQWdCLFVBQVUsV0FBVyxhQUFhLGVBQWUsZ0JBQWdCLHFCQUFxQixtQkFBbUIsdUJBQXVCLGtCQUFrQixpQkFBaUIsNkJBQTZCLCtCQUErQiwwQkFBMEIsNkZBQTZGLGtCQUFrQix5QkFBeUIsZ0RBQWdELGlDQUFpQywrQkFBK0IsZ0RBQWdELGlCQUFpQixtQkFBbUIscUNBQXFDLHVCQUF1QixjQUFjLGlCQUFpQixzQ0FBc0MsOENBQThDLCtDQUErQyxxQ0FBcUMsbUVBQW1FLDJCQUEyQixxQkFBcUIsaUJBQWlCLHNDQUFzQywrQ0FBK0MsOENBQThDLHFDQUFxQyxrRUFBa0UsMkJBQTJCLDBCQUEwQixp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Q2IsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNENBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0Q0FBcUI7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNob0NuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dEO0FBQ2U7O0FBRS9EO0FBQ0E7QUFDQSxpQ0FBaUMsYUFBYSxJQUFJLGtCQUFrQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywwQ0FBZTtBQUN4QjtBQUNBO0FBQ0EsZ0JBQWdCLDBDQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLE9BQU8seUVBQUs7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxTiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLWhlYWRsZXNzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jb21ib2JveC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvdXRpbHMyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbi8qKlxuICogRG8gbm90IGVkaXQgZGlyZWN0bHlcbiAqIEdlbmVyYXRlZCBvbiBUdWUsIDIxIE5vdiAyMDIzIDIyOjUyOjEzIEdNVFxuICovXG5jb25zdCBDb3JlU2l6aW5nMTUgPSBcIjQ4cHhcIjtcbmNvbnN0IENvcmVCcmVha3BvaW50V2lkdGhEZWZhdWx0WHhzID0gXCIzMjBweFwiO1xuY29uc3QgQ29yZUJyZWFrcG9pbnRXaWR0aERlZmF1bHRYcyA9IFwiNDc2cHhcIjtcbmNvbnN0IENvcmVCcmVha3BvaW50V2lkdGhEZWZhdWx0U20gPSBcIjc2OHB4XCI7XG5jb25zdCBDb3JlQnJlYWtwb2ludFdpZHRoRGVmYXVsdE1kID0gXCIxMTUycHhcIjtcbmNvbnN0IENvcmVCcmVha3BvaW50V2lkdGhEZWZhdWx0TGcgPSBcIjE0NDBweFwiO1xuXG5leHBvcnQgeyBDb3JlU2l6aW5nMTUgYXMgQywgQ29yZUJyZWFrcG9pbnRXaWR0aERlZmF1bHRNZCBhcyBhLCBDb3JlQnJlYWtwb2ludFdpZHRoRGVmYXVsdFNtIGFzIGIsIENvcmVCcmVha3BvaW50V2lkdGhEZWZhdWx0WHMgYXMgYywgQ29yZUJyZWFrcG9pbnRXaWR0aERlZmF1bHRYeHMgYXMgZCwgQ29yZUJyZWFrcG9pbnRXaWR0aERlZmF1bHRMZyBhcyBlIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBoLCBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGYgYXMgZmlsdGVyIH0gZnJvbSAnLi9maWx0ZXIyLmpzJztcbmltcG9ydCB7IHUgYXMgZ2V0RWxlbWVudFdpZHRoLCB2IGFzIGdldFRleHRXaWR0aCwgaiBhcyBpc1ByaW1hcnlQb2ludGVyQnV0dG9uLCB0IGFzIHRvQXJpYUJvb2xlYW4gfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmF1bHRNZW51UGxhY2VtZW50LCBmIGFzIGZpbHRlckNvbXB1dGVkUGxhY2VtZW50cywgYyBhcyBjb25uZWN0RmxvYXRpbmdVSSwgciBhcyByZXBvc2l0aW9uLCBhIGFzIGRpc2Nvbm5lY3RGbG9hdGluZ1VJLCBGIGFzIEZsb2F0aW5nQ1NTIH0gZnJvbSAnLi9mbG9hdGluZy11aS5qcyc7XG5pbXBvcnQgeyBzIGFzIHN1Ym1pdEZvcm0sIGMgYXMgY29ubmVjdEZvcm0sIGEgYXMgYWZ0ZXJDb25uZWN0RGVmYXVsdFZhbHVlU2V0LCBkIGFzIGRpc2Nvbm5lY3RGb3JtLCBIIGFzIEhpZGRlbkZvcm1JbnB1dFNsb3QgfSBmcm9tICcuL2Zvcm0uanMnO1xuaW1wb3J0IHsgZyBhcyBndWlkIH0gZnJvbSAnLi9ndWlkLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUgfSBmcm9tICcuL2ludGVyYWN0aXZlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExhYmVsLCBkIGFzIGRpc2Nvbm5lY3RMYWJlbCwgZyBhcyBnZXRMYWJlbFRleHQgfSBmcm9tICcuL2xhYmVsMi5qcyc7XG5pbXBvcnQgeyBiIGFzIGNvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRGb2N1c2FibGUsIGEgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgcyBhcyBzZXRDb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcbmltcG9ydCB7IG8gYXMgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQgfSBmcm9tICcuL29wZW5DbG9zZUNvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcywgdSBhcyB1cGRhdGVNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IGkgYXMgaXNTaW5nbGVMaWtlLCBoIGFzIGhhc0FjdGl2ZUNoaWxkcmVuLCBDIGFzIENTUyQxLCBiIGFzIENvbWJvYm94Q2hpbGRTZWxlY3RvciwgYyBhcyBnZXRJdGVtQW5jZXN0b3JzLCBkIGFzIGdldEl0ZW1DaGlsZHJlbiwgZSBhcyBDb21ib2JveEl0ZW0sIGYgYXMgQ29tYm9ib3hJdGVtR3JvdXAgfSBmcm9tICcuL3V0aWxzMi5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldEljb25TY2FsZSB9IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCB7IEMgYXMgQ29yZVNpemluZzE1IH0gZnJvbSAnLi9jYWxjaXRlLWhlYWRsZXNzLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9jaGlwLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQxIH0gZnJvbSAnLi9pY29uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVib3VuY2UgfSBmcm9tICcuL2RlYm91bmNlLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBidXR0b246IFwieC1idXR0b25cIixcbn07XG5mdW5jdGlvbiBYQnV0dG9uKHsgZGlzYWJsZWQsIGtleSwgbGFiZWwsIG9uQ2xpY2ssIHJlZiwgc2NhbGUsIH0pIHtcbiAgcmV0dXJuIChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IGxhYmVsLCBjbGFzczogQ1NTLmJ1dHRvbiwgZGlzYWJsZWQ6IGRpc2FibGVkLCBrZXk6IGtleSwgb25DbGljazogb25DbGljaywgdGFiSW5kZXg6IC0xLCB0eXBlOiBcImJ1dHRvblwiLCBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgIHJlZjogcmVmIH0sXG4gICAgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwieFwiLCBzY2FsZTogZ2V0SWNvblNjYWxlKHNjYWxlKSB9KSkpO1xufVxuXG5jb25zdCBjb21ib2JveENzcyA9IFwiOmhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9ja306aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9Omhvc3QoW3NjYWxlPXNdKSAueC1idXR0b257aW5saW5lLXNpemU6MXJlbTtibG9jay1zaXplOjFyZW19Omhvc3QoW3NjYWxlPW1dKSAueC1idXR0b257aW5saW5lLXNpemU6MS41cmVtO2Jsb2NrLXNpemU6MS41cmVtfTpob3N0KFtzY2FsZT1sXSkgLngtYnV0dG9ue2lubGluZS1zaXplOjJyZW07YmxvY2stc2l6ZToycmVtfS54LWJ1dHRvbnttYXJnaW46MHB4O2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjthcHBlYXJhbmNlOm5vbmU7YWxpZ24tY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24tc2VsZjpjZW50ZXI7Ym9yZGVyLXdpZHRoOjJweDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO2JvcmRlci1yYWRpdXM6NTAlO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX0ueC1idXR0b246YWN0aXZlLC54LWJ1dHRvbjpob3Zlcntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyl9LngtYnV0dG9uOmFjdGl2ZXtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS54LWJ1dHRvbiBjYWxjaXRlLWljb257Y29sb3I6aW5oZXJpdH06aG9zdChbc2NhbGU9c10pe2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWw6MC41cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1zOjAuMjVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWlucHV0LWhlaWdodDoxcmVtOy0tY2FsY2l0ZS1pbnRlcm5hbC1jb21ib2JveC1pbnB1dC1tYXJnaW4tYmxvY2s6Y2FsYygwLjI1cmVtIC0gMXB4KX06aG9zdChbc2NhbGU9c10pIC54LWJ1dHRvbnttYXJnaW4taW5saW5lOjAuNXJlbX06aG9zdChbc2NhbGU9bV0pe2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWw6MC43NXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtczowLjVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWlucHV0LWhlaWdodDoxcmVtOy0tY2FsY2l0ZS1pbnRlcm5hbC1jb21ib2JveC1pbnB1dC1tYXJnaW4tYmxvY2s6Y2FsYygwLjVyZW0gLSAxcHgpfTpob3N0KFtzY2FsZT1tXSkgLngtYnV0dG9ue21hcmdpbi1pbmxpbmUtZW5kOjAuNzVyZW19Omhvc3QoW3NjYWxlPWxdKXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWw6MXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtczowLjc1cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pbnB1dC1oZWlnaHQ6MS41cmVtOy0tY2FsY2l0ZS1pbnRlcm5hbC1jb21ib2JveC1pbnB1dC1tYXJnaW4tYmxvY2s6Y2FsYygwLjYyNXJlbSAtIDFweCl9Omhvc3QoW3NjYWxlPWxdKSAueC1idXR0b257bWFyZ2luLWlubGluZS1lbmQ6MXJlbX0ud3JhcHBlcntkaXNwbGF5OmZsZXg7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudDtwYWRkaW5nLWJsb2NrOmNhbGModmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1zKSAvIDQpO3BhZGRpbmctaW5saW5lOnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtbCl9Omhvc3QoOmZvY3VzLXdpdGhpbikgLndyYXBwZXIsLndyYXBwZXItLWFjdGl2ZXtvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9LndyYXBwZXItLXNpbmdsZXtwYWRkaW5nLWJsb2NrOjA7cGFkZGluZy1pbmxpbmU6dmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1sKTtjdXJzb3I6cG9pbnRlcjtmbGV4LXdyYXA6bm93cmFwfS5ncmlkLWlucHV0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtmbGV4LWdyb3c6MTtmbGV4LXdyYXA6d3JhcDthbGlnbi1pdGVtczpjZW50ZXI7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO3BhZGRpbmc6MHB4O2dhcDp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LXMpfS5ncmlkLWlucHV0LnNlbGVjdGlvbi1kaXNwbGF5LWZpdCwuZ3JpZC1pbnB1dC5zZWxlY3Rpb24tZGlzcGxheS1zaW5nbGV7ZmxleC13cmFwOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW59LmlucHV0e2ZsZXgtZ3JvdzoxO2FwcGVhcmFuY2U6bm9uZTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2JvcmRlci1zdHlsZTpub25lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7cGFkZGluZzowcHg7Zm9udC1mYW1pbHk6aW5oZXJpdDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7Zm9udC1zaXplOmluaGVyaXQ7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWlucHV0LWhlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pbnB1dC1oZWlnaHQpO2lubGluZS1zaXplOjEwMCU7bWFyZ2luLWJsb2NrLWVuZDp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LXMpO21pbi1pbmxpbmUtc2l6ZTo0LjgxMjVyZW19LmlucHV0OmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweH0uaW5wdXQ6cGxhY2Vob2xkZXItc2hvd257dGV4dC1vdmVyZmxvdzplbGxpcHNpc30uaW5wdXQtLXRyYW5zcGFyZW50e29wYWNpdHk6MH0uaW5wdXQtLXNpbmdsZXtwYWRkaW5nOjBweDttYXJnaW4tYmxvY2s6dmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1jb21ib2JveC1pbnB1dC1tYXJnaW4tYmxvY2spfS53cmFwcGVyLS1hY3RpdmUgLmlucHV0LXNpbmdsZXtjdXJzb3I6dGV4dH0uaW5wdXQtLWhpZGRlbntwb2ludGVyLWV2ZW50czpub25lO2lubGluZS1zaXplOjBweDttaW4taW5saW5lLXNpemU6MHB4O29wYWNpdHk6MH0uaW5wdXQtLWljb257cGFkZGluZy1ibG9jazowO3BhZGRpbmctaW5saW5lOnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtcyl9Omhvc3QoW3NjYWxlPW1dKSAuaW5wdXQtLWljb24sOmhvc3QoW3NjYWxlPWxdKSAuaW5wdXQtLWljb257cGFkZGluZy1pbmxpbmU6MC4yNXJlbX0uaW5wdXQtd3JhcHtkaXNwbGF5OmZsZXg7ZmxleC1ncm93OjE7YWxpZ24taXRlbXM6Y2VudGVyfS5pbnB1dC13cmFwLS1zaW5nbGV7ZmxleDoxIDEgMCU7b3ZlcmZsb3c6aGlkZGVufS5sYWJlbHtwb2ludGVyLWV2ZW50czpub25lO2Rpc3BsYXk6ZmxleDttYXgtaW5saW5lLXNpemU6MTAwJTtmbGV4OjEgMSBhdXRvO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtwYWRkaW5nOjBweDtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCk7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWlucHV0LWhlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pbnB1dC1oZWlnaHQpfS5sYWJlbC0taWNvbntwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWwpfS5pY29uLWVuZCwuaWNvbi1zdGFydHtkaXNwbGF5OmZsZXg7Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5pY29uLWVuZHtmbGV4Om5vbmV9LmZsb2F0aW5nLXVpLWNvbnRhaW5lcnstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4KTt2aXNpYmlsaXR5OmhpZGRlbn0uZmxvYXRpbmctdWktY29udGFpbmVyIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLCB2aXNpYmlsaXR5LCBvcGFjaXR5O29wYWNpdHk6MDtib3gtc2hhZG93OjAgMCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2JvcmRlci1yYWRpdXM6MC4yNXJlbX0uZmxvYXRpbmctdWktY29udGFpbmVyW2RhdGEtcGxhY2VtZW50Xj1ib3R0b21dIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTVweCl9LmZsb2F0aW5nLXVpLWNvbnRhaW5lcltkYXRhLXBsYWNlbWVudF49dG9wXSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVZKDVweCl9LmZsb2F0aW5nLXVpLWNvbnRhaW5lcltkYXRhLXBsYWNlbWVudF49bGVmdF0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWCg1cHgpfS5mbG9hdGluZy11aS1jb250YWluZXJbZGF0YS1wbGFjZW1lbnRePXJpZ2h0XSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01cHgpfS5mbG9hdGluZy11aS1jb250YWluZXJbZGF0YS1wbGFjZW1lbnRdIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW0tLWFjdGl2ZXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwKX0uZmxvYXRpbmctdWktY29udGFpbmVyLS1hY3RpdmV7dmlzaWJpbGl0eTp2aXNpYmxlfUBtZWRpYSAoZm9yY2VkLWNvbG9yczogYWN0aXZlKXsud3JhcHBlciwuZmxvYXRpbmctdWktY29udGFpbmVyLS1hY3RpdmV7Ym9yZGVyOjFweCBzb2xpZCBjYW52YXNUZXh0fX0uc2NyZWVuLXJlYWRlcnMtb25seXtwb3NpdGlvbjphYnNvbHV0ZTtpbmxpbmUtc2l6ZToxcHg7YmxvY2stc2l6ZToxcHg7cGFkZGluZzowO21hcmdpbjotMXB4O292ZXJmbG93OmhpZGRlbjtjbGlwOnJlY3QoMCwgMCwgMCwgMCk7d2hpdGUtc3BhY2U6bm93cmFwO2JvcmRlci13aWR0aDowfS5saXN0LWNvbnRhaW5lcnttYXgtYmxvY2stc2l6ZTo0NXZoO292ZXJmbG93LXk6YXV0bztiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWRyb3Bkb3duLXdpZHRoKX0ubGlzdHttYXJnaW46MHB4O2Rpc3BsYXk6YmxvY2s7cGFkZGluZzowcHh9Lmxpc3QtLWhpZGV7YmxvY2stc2l6ZTowcHg7b3ZlcmZsb3c6aGlkZGVufWNhbGNpdGUtY2hpcHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzowfS5jaGlwe21hcmdpbi1ibG9jazpjYWxjKHZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtcykgLyA0KTttYXgtaW5saW5lLXNpemU6MTAwJX0uY2hpcC0tYWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfS5jaGlwLS1pbnZpc2libGV7dmlzaWJpbGl0eTpoaWRkZW47cG9zaXRpb246YWJzb2x1dGV9Lml0ZW17ZGlzcGxheTpibG9ja306OnNsb3R0ZWQoaW5wdXRbc2xvdD1oaWRkZW4tZm9ybS1pbnB1dF0pe21hcmdpbjowICFpbXBvcnRhbnQ7b3BhY2l0eTowICFpbXBvcnRhbnQ7b3V0bGluZTpub25lICFpbXBvcnRhbnQ7cGFkZGluZzowICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtpbnNldDowICFpbXBvcnRhbnQ7dHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZSAhaW1wb3J0YW50O3otaW5kZXg6LTEgIWltcG9ydGFudH06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX06OnNsb3R0ZWQoY2FsY2l0ZS1jb21ib2JveC1pdGVtLWdyb3VwOm5vdCg6Zmlyc3QtY2hpbGQpKXtwYWRkaW5nLWJsb2NrLXN0YXJ0OnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtbCl9XCI7XG5cbmNvbnN0IGlzR3JvdXAgPSAoZWwpID0+IGVsLnRhZ05hbWUgPT09IENvbWJvYm94SXRlbUdyb3VwO1xuY29uc3QgaXRlbVVpZFByZWZpeCA9IFwiY29tYm9ib3gtaXRlbS1cIjtcbmNvbnN0IGNoaXBVaWRQcmVmaXggPSBcImNvbWJvYm94LWNoaXAtXCI7XG5jb25zdCBsYWJlbFVpZFByZWZpeCA9IFwiY29tYm9ib3gtbGFiZWwtXCI7XG5jb25zdCBsaXN0Ym94VWlkUHJlZml4ID0gXCJjb21ib2JveC1saXN0Ym94LVwiO1xuY29uc3QgaW5wdXRVaWRQcmVmaXggPSBcImNvbWJvYm94LWlucHV0LVwiO1xuY29uc3QgQ29tYm9ib3ggPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZUNvbWJvYm94Q2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlQ29tYm9ib3hDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hGaWx0ZXJDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVDb21ib2JveEZpbHRlckNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVDb21ib2JveENoaXBDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUNvbWJvYm94Q2hpcENsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUNvbWJvYm94QmVmb3JlQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVDb21ib2JveEJlZm9yZUNsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUNvbWJvYm94Q2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVDb21ib2JveENsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUNvbWJvYm94QmVmb3JlT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUNvbWJvYm94QmVmb3JlT3BlblwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVDb21ib2JveE9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVDb21ib2JveE9wZW5cIiwgNik7XG4gICAgdGhpcy5wbGFjZW1lbnQgPSBkZWZhdWx0TWVudVBsYWNlbWVudDtcbiAgICB0aGlzLmludGVybmFsVmFsdWVDaGFuZ2VGbGFnID0gZmFsc2U7XG4gICAgdGhpcy50ZXh0SW5wdXQgPSBudWxsO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgKCkgPT4gdGhpcy51cGRhdGVJdGVtcygpKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRNYXhTY3JvbGxlckhlaWdodCgpO1xuICAgICAgdGhpcy5yZWZyZXNoU2VsZWN0aW9uRGlzcGxheSgpO1xuICAgIH0pO1xuICAgIHRoaXMuZ3VpZCA9IGd1aWQoKTtcbiAgICB0aGlzLmlucHV0SGVpZ2h0ID0gMDtcbiAgICB0aGlzLmlnbm9yZVNlbGVjdGVkRXZlbnRzRmxhZyA9IGZhbHNlO1xuICAgIHRoaXMub3BlblRyYW5zaXRpb25Qcm9wID0gXCJvcGFjaXR5XCI7XG4gICAgdGhpcy5zZXRGaWx0ZXJlZFBsYWNlbWVudHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGVsLCBmbGlwUGxhY2VtZW50cyB9ID0gdGhpcztcbiAgICAgIHRoaXMuZmlsdGVyZWRGbGlwUGxhY2VtZW50cyA9IGZsaXBQbGFjZW1lbnRzXG4gICAgICAgID8gZmlsdGVyQ29tcHV0ZWRQbGFjZW1lbnRzKGZsaXBQbGFjZW1lbnRzLCBlbClcbiAgICAgICAgOiBudWxsO1xuICAgIH07XG4gICAgdGhpcy5nZXRWYWx1ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5zZWxlY3RlZEl0ZW1zLm1hcCgoaXRlbSkgPT4gaXRlbT8udmFsdWU/LnRvU3RyaW5nKCkpO1xuICAgICAgcmV0dXJuIGl0ZW1zPy5sZW5ndGggPyAoaXRlbXMubGVuZ3RoID4gMSA/IGl0ZW1zIDogaXRlbXNbMF0pIDogXCJcIjtcbiAgICB9O1xuICAgIHRoaXMub25MYWJlbENsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgIH07XG4gICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSBcIlRhYlwiOlxuICAgICAgICAgIHRoaXMuYWN0aXZlQ2hpcEluZGV4ID0gLTE7XG4gICAgICAgICAgdGhpcy5hY3RpdmVJdGVtSW5kZXggPSAtMTtcbiAgICAgICAgICBpZiAodGhpcy5hbGxvd0N1c3RvbVZhbHVlcyAmJiB0aGlzLnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ3VzdG9tQ2hpcCh0aGlzLnRleHQsIHRydWUpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAodGhpcy5vcGVuKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKCF0aGlzLmFsbG93Q3VzdG9tVmFsdWVzICYmIHRoaXMudGV4dCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhcklucHV0VmFsdWUoKTtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVySXRlbXMoXCJcIik7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUl0ZW1JbmRleCgtMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgdGhpcy5wcmV2aW91c0NoaXAoKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgIHRoaXMubmV4dENoaXAoKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICAgICAgdGhpcy5zaGlmdEFjdGl2ZUl0ZW1JbmRleCgtMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGhpcy5jb21ib2JveEluVmlld3BvcnQoKSkge1xuICAgICAgICAgICAgdGhpcy5lbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICAgICAgdGhpcy5zaGlmdEFjdGl2ZUl0ZW1JbmRleCgxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5lbnN1cmVSZWNlbnRTZWxlY3RlZEl0ZW1Jc0FjdGl2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRoaXMuY29tYm9ib3hJblZpZXdwb3J0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIgXCI6XG4gICAgICAgICAgaWYgKCF0aGlzLnRleHRJbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm9wZW4pIHtcbiAgICAgICAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5zaGlmdEFjdGl2ZUl0ZW1JbmRleCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVJdGVtSW5kZXgoMCk7XG4gICAgICAgICAgdGhpcy5zY3JvbGxUb0FjdGl2ZUl0ZW0oKTtcbiAgICAgICAgICBpZiAoIXRoaXMuY29tYm9ib3hJblZpZXdwb3J0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJFbmRcIjpcbiAgICAgICAgICBpZiAoIXRoaXMub3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMudXBkYXRlQWN0aXZlSXRlbUluZGV4KHRoaXMuZmlsdGVyZWRJdGVtcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvQWN0aXZlSXRlbSgpO1xuICAgICAgICAgIGlmICghdGhpcy5jb21ib2JveEluVmlld3BvcnQoKSkge1xuICAgICAgICAgICAgdGhpcy5lbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkVzY2FwZVwiOlxuICAgICAgICAgIGlmICghdGhpcy5jbGVhckRpc2FibGVkICYmICF0aGlzLm9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJWYWx1ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiRW50ZXJcIjpcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24odGhpcy5maWx0ZXJlZEl0ZW1zW3RoaXMuYWN0aXZlSXRlbUluZGV4XSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmICh0aGlzLmFjdGl2ZUNoaXBJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFjdGl2ZUNoaXAoKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYWxsb3dDdXN0b21WYWx1ZXMgJiYgdGhpcy50ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmFkZEN1c3RvbUNoaXAodGhpcy50ZXh0LCB0cnVlKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICBpZiAoc3VibWl0Rm9ybSh0aGlzKSkge1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkRlbGV0ZVwiOlxuICAgICAgICBjYXNlIFwiQmFja3NwYWNlXCI6XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQ2hpcEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFjdGl2ZUNoaXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoIXRoaXMudGV4dCAmJiB0aGlzLmlzTXVsdGkoKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlTGFzdENoaXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnRvZ2dsZUNsb3NlRW5kID0gKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjYWxjaXRlQ29tYm9ib3hDbG9zZVwiLCB0aGlzLnRvZ2dsZUNsb3NlRW5kKTtcbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlT3BlbkVuZCA9ICgpID0+IHtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2FsY2l0ZUNvbWJvYm94T3BlblwiLCB0aGlzLnRvZ2dsZU9wZW5FbmQpO1xuICAgIH07XG4gICAgdGhpcy5zZXRNYXhTY3JvbGxlckhlaWdodCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgbGlzdENvbnRhaW5lckVsLCBvcGVuLCByZWZlcmVuY2VFbCB9ID0gdGhpcztcbiAgICAgIGlmICghbGlzdENvbnRhaW5lckVsIHx8ICFvcGVuKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICAgIGNvbnN0IG1heFNjcm9sbGVySGVpZ2h0ID0gdGhpcy5nZXRNYXhTY3JvbGxlckhlaWdodCgpO1xuICAgICAgbGlzdENvbnRhaW5lckVsLnN0eWxlLm1heEhlaWdodCA9IG1heFNjcm9sbGVySGVpZ2h0ID4gMCA/IGAke21heFNjcm9sbGVySGVpZ2h0fXB4YCA6IFwiXCI7XG4gICAgICBsaXN0Q29udGFpbmVyRWwuc3R5bGUubWluV2lkdGggPSBgJHtyZWZlcmVuY2VFbC5jbGllbnRXaWR0aH1weGA7XG4gICAgICBhd2FpdCB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gICAgfTtcbiAgICB0aGlzLmNhbGNpdGVDaGlwQ2xvc2VIYW5kbGVyID0gKGNvbWJvYm94SXRlbSkgPT4ge1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLml0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0gPT09IGNvbWJvYm94SXRlbSk7XG4gICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHNlbGVjdGlvbiwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hDaGlwQ2xvc2UuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgICAgaWYgKGNvbXBvc2VkUGF0aC5zb21lKChub2RlKSA9PiBub2RlLnRhZ05hbWUgPT09IFwiQ0FMQ0lURS1DSElQXCIpKSB7XG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoY29tcG9zZWRQYXRoLnNvbWUoKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0Py5jb250YWlucyhDU1MuYnV0dG9uKSkpIHtcbiAgICAgICAgdGhpcy5jbGVhclZhbHVlKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gICAgICB0aGlzLmVuc3VyZVJlY2VudFNlbGVjdGVkSXRlbUlzQWN0aXZlKCk7XG4gICAgfTtcbiAgICB0aGlzLnJlZnJlc2hTZWxlY3Rpb25EaXNwbGF5ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgICAgaWYgKGlzU2luZ2xlTGlrZSh0aGlzLnNlbGVjdGlvbk1vZGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy50ZXh0SW5wdXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBhbGxTZWxlY3RlZEluZGljYXRvckNoaXBFbCwgY2hpcENvbnRhaW5lckVsLCBzZWxlY3Rpb25EaXNwbGF5LCBwbGFjZWhvbGRlciwgc2VsZWN0ZWRJbmRpY2F0b3JDaGlwRWwsIHRleHRJbnB1dCwgfSA9IHRoaXM7XG4gICAgICBjb25zdCBjaGlwQ29udGFpbmVyRWxHYXAgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGNoaXBDb250YWluZXJFbCkuZ2FwLnJlcGxhY2UoXCJweFwiLCBcIlwiKSk7XG4gICAgICBjb25zdCBjaGlwQ29udGFpbmVyRWxXaWR0aCA9IGdldEVsZW1lbnRXaWR0aChjaGlwQ29udGFpbmVyRWwpO1xuICAgICAgY29uc3QgeyBmb250U2l6ZSwgZm9udEZhbWlseSB9ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0ZXh0SW5wdXQpO1xuICAgICAgY29uc3QgaW5wdXRUZXh0V2lkdGggPSBnZXRUZXh0V2lkdGgocGxhY2Vob2xkZXIsIGAke2ZvbnRTaXplfSAke2ZvbnRGYW1pbHl9YCk7XG4gICAgICBjb25zdCBpbnB1dFdpZHRoID0gKGlucHV0VGV4dFdpZHRoIHx8IHBhcnNlSW50KENvcmVTaXppbmcxNSkpICsgY2hpcENvbnRhaW5lckVsR2FwO1xuICAgICAgY29uc3QgYWxsU2VsZWN0ZWRJbmRpY2F0b3JDaGlwRWxXaWR0aCA9IGdldEVsZW1lbnRXaWR0aChhbGxTZWxlY3RlZEluZGljYXRvckNoaXBFbCk7XG4gICAgICBjb25zdCBzZWxlY3RlZEluZGljYXRvckNoaXBFbFdpZHRoID0gZ2V0RWxlbWVudFdpZHRoKHNlbGVjdGVkSW5kaWNhdG9yQ2hpcEVsKTtcbiAgICAgIGNvbnN0IGxhcmdlc3RTZWxlY3RlZEluZGljYXRvckNoaXBXaWR0aCA9IE1hdGgubWF4KGFsbFNlbGVjdGVkSW5kaWNhdG9yQ2hpcEVsV2lkdGgsIHNlbGVjdGVkSW5kaWNhdG9yQ2hpcEVsV2lkdGgpO1xuICAgICAgdGhpcy5zZXRDb21wYWN0U2VsZWN0aW9uRGlzcGxheSh7XG4gICAgICAgIGNoaXBDb250YWluZXJFbEdhcCxcbiAgICAgICAgY2hpcENvbnRhaW5lckVsV2lkdGgsXG4gICAgICAgIGlucHV0V2lkdGgsXG4gICAgICAgIGxhcmdlc3RTZWxlY3RlZEluZGljYXRvckNoaXBXaWR0aCxcbiAgICAgIH0pO1xuICAgICAgaWYgKHNlbGVjdGlvbkRpc3BsYXkgPT09IFwiZml0XCIpIHtcbiAgICAgICAgY29uc3QgY2hpcEVscyA9IEFycmF5LmZyb20odGhpcy5lbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWNoaXBcIikpLmZpbHRlcigoY2hpcEVsKSA9PiBjaGlwRWwuY2xvc2FibGUpO1xuICAgICAgICBjb25zdCBhdmFpbGFibGVIb3Jpem9udGFsQ2hpcEVsU3BhY2UgPSBNYXRoLnJvdW5kKGNoaXBDb250YWluZXJFbFdpZHRoIC1cbiAgICAgICAgICAoKHRoaXMuc2VsZWN0ZWRIaWRkZW5DaGlwc0NvdW50ID4gMCA/IHNlbGVjdGVkSW5kaWNhdG9yQ2hpcEVsV2lkdGggOiAwKSArXG4gICAgICAgICAgICBjaGlwQ29udGFpbmVyRWxHYXAgK1xuICAgICAgICAgICAgaW5wdXRXaWR0aCArXG4gICAgICAgICAgICBjaGlwQ29udGFpbmVyRWxHYXApKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoQ2hpcERpc3BsYXkoeyBhdmFpbGFibGVIb3Jpem9udGFsQ2hpcEVsU3BhY2UsIGNoaXBDb250YWluZXJFbEdhcCwgY2hpcEVscyB9KTtcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlQW5kSGlkZGVuQ2hpcHMoY2hpcEVscyk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNldEZsb2F0aW5nRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuZmxvYXRpbmdFbCA9IGVsO1xuICAgICAgY29ubmVjdEZsb2F0aW5nVUkodGhpcywgdGhpcy5yZWZlcmVuY2VFbCwgdGhpcy5mbG9hdGluZ0VsKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0Q29udGFpbmVyRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbCk7XG4gICAgICB0aGlzLmxpc3RDb250YWluZXJFbCA9IGVsO1xuICAgICAgdGhpcy50cmFuc2l0aW9uRWwgPSBlbDtcbiAgICB9O1xuICAgIHRoaXMuc2V0Q2hpcENvbnRhaW5lckVsID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWwpO1xuICAgICAgdGhpcy5jaGlwQ29udGFpbmVyRWwgPSBlbDtcbiAgICB9O1xuICAgIHRoaXMuc2V0UmVmZXJlbmNlRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMucmVmZXJlbmNlRWwgPSBlbDtcbiAgICAgIGNvbm5lY3RGbG9hdGluZ1VJKHRoaXMsIHRoaXMucmVmZXJlbmNlRWwsIHRoaXMuZmxvYXRpbmdFbCk7XG4gICAgfTtcbiAgICB0aGlzLnNldEFsbFNlbGVjdGVkSW5kaWNhdG9yQ2hpcEVsID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmFsbFNlbGVjdGVkSW5kaWNhdG9yQ2hpcEVsID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLnNldFNlbGVjdGVkSW5kaWNhdG9yQ2hpcEVsID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kaWNhdG9yQ2hpcEVsID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLmlucHV0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLnRleHQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZmlsdGVySXRlbXModmFsdWUpO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQ2hpcEluZGV4ID0gLTE7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmZpbHRlckl0ZW1zID0gKCgpID0+IHtcbiAgICAgIGNvbnN0IGZpbmQgPSAoaXRlbSwgZmlsdGVyZWREYXRhKSA9PiBpdGVtICYmXG4gICAgICAgIGZpbHRlcmVkRGF0YS5zb21lKCh7IGxhYmVsLCB2YWx1ZSB9KSA9PiBpc0dyb3VwKGl0ZW0pID8gbGFiZWwgPT09IGl0ZW0ubGFiZWwgOiB2YWx1ZSA9PT0gaXRlbS52YWx1ZSAmJiBsYWJlbCA9PT0gaXRlbS50ZXh0TGFiZWwpO1xuICAgICAgcmV0dXJuIGRlYm91bmNlKCh0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGZpbHRlcih0aGlzLmRhdGEsIHRleHQpO1xuICAgICAgICBjb25zdCBpdGVtc0FuZEdyb3VwcyA9IHRoaXMuZ2V0SXRlbXNBbmRHcm91cHMoKTtcbiAgICAgICAgaXRlbXNBbmRHcm91cHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGhpZGRlbiA9ICFmaW5kKGl0ZW0sIGZpbHRlcmVkRGF0YSk7XG4gICAgICAgICAgaXRlbS5oaWRkZW4gPSBoaWRkZW47XG4gICAgICAgICAgY29uc3QgW3BhcmVudCwgZ3JhbmRwYXJlbnRdID0gaXRlbS5hbmNlc3RvcnM7XG4gICAgICAgICAgaWYgKGZpbmQocGFyZW50LCBmaWx0ZXJlZERhdGEpIHx8IGZpbmQoZ3JhbmRwYXJlbnQsIGZpbHRlcmVkRGF0YSkpIHtcbiAgICAgICAgICAgIGl0ZW0uaGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgICAgICBpdGVtLmFuY2VzdG9ycy5mb3JFYWNoKChhbmNlc3RvcikgPT4gKGFuY2VzdG9yLmhpZGRlbiA9IGZhbHNlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gdGhpcy5nZXRGaWx0ZXJlZEl0ZW1zKCk7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUNvbWJvYm94RmlsdGVyQ2hhbmdlLmVtaXQoKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSkoKTtcbiAgICB0aGlzLmludGVybmFsQ29tYm9ib3hDaGFuZ2VFdmVudCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2FsY2l0ZUNvbWJvYm94Q2hhbmdlLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuZW1pdENvbWJvYm94Q2hhbmdlID0gZGVib3VuY2UodGhpcy5pbnRlcm5hbENvbWJvYm94Q2hhbmdlRXZlbnQsIDApO1xuICAgIHRoaXMuZ2V0U2VsZWN0ZWRJdGVtcyA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc011bHRpKCkpIHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLml0ZW1zLmZpbmQoKHsgc2VsZWN0ZWQgfSkgPT4gc2VsZWN0ZWQpO1xuICAgICAgICByZXR1cm4gbWF0Y2ggPyBbbWF0Y2hdIDogW107XG4gICAgICB9XG4gICAgICByZXR1cm4gKHRoaXMuaXRlbXNcbiAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zZWxlY3RlZCAmJiAodGhpcy5zZWxlY3Rpb25Nb2RlICE9PSBcImFuY2VzdG9yc1wiIHx8ICFoYXNBY3RpdmVDaGlsZHJlbihpdGVtKSkpXG4gICAgICAgIC8qKiBQcmVzZXJ2ZSBvcmRlciBvZiBlbnRlcmVkIHRhZ3MgKi9cbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgYUlkeCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKGEpO1xuICAgICAgICBjb25zdCBiSWR4ID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoYik7XG4gICAgICAgIGlmIChhSWR4ID4gLTEgJiYgYklkeCA+IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGFJZHggLSBiSWR4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiSWR4IC0gYUlkeDtcbiAgICAgIH0pKTtcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlSXRlbXMgPSAoKSA9PiB7XG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xuICAgICAgdGhpcy5ncm91cEl0ZW1zID0gdGhpcy5nZXRHcm91cEl0ZW1zKCk7XG4gICAgICB0aGlzLmRhdGEgPSB0aGlzLmdldERhdGEoKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IHRoaXMuZ2V0U2VsZWN0ZWRJdGVtcygpO1xuICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gdGhpcy5nZXRGaWx0ZXJlZEl0ZW1zKCk7XG4gICAgICB0aGlzLm5lZWRzSWNvbiA9IHRoaXMuZ2V0TmVlZHNJY29uKCk7XG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25Nb2RlID0gdGhpcy5zZWxlY3Rpb25Nb2RlO1xuICAgICAgICBpdGVtLnNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKCF0aGlzLmFsbG93Q3VzdG9tVmFsdWVzKSB7XG4gICAgICAgIHRoaXMuc2V0TWF4U2Nyb2xsZXJIZWlnaHQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZ3JvdXBJdGVtcy5mb3JFYWNoKChncm91cEl0ZW0sIGluZGV4LCBpdGVtcykgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBncm91cEl0ZW0uYWZ0ZXJFbXB0eUdyb3VwID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV4dEdyb3VwSXRlbSA9IGl0ZW1zW2luZGV4ICsgMV07XG4gICAgICAgIGlmIChuZXh0R3JvdXBJdGVtKSB7XG4gICAgICAgICAgbmV4dEdyb3VwSXRlbS5hZnRlckVtcHR5R3JvdXAgPSBncm91cEl0ZW0uY2hpbGRyZW4ubGVuZ3RoID09PSAwO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuc2Nyb2xsVG9BY3RpdmVJdGVtID0gKCkgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlSXRlbSA9IHRoaXMuZmlsdGVyZWRJdGVtc1t0aGlzLmFjdGl2ZUl0ZW1JbmRleF07XG4gICAgICBpZiAoIWFjdGl2ZUl0ZW0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jYWxjdWxhdGVTaW5nbGVJdGVtSGVpZ2h0KGFjdGl2ZUl0ZW0pO1xuICAgICAgY29uc3QgeyBvZmZzZXRIZWlnaHQsIHNjcm9sbFRvcCB9ID0gdGhpcy5saXN0Q29udGFpbmVyRWw7XG4gICAgICBpZiAob2Zmc2V0SGVpZ2h0ICsgc2Nyb2xsVG9wIDwgYWN0aXZlSXRlbS5vZmZzZXRUb3AgKyBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5saXN0Q29udGFpbmVyRWwuc2Nyb2xsVG9wID0gYWN0aXZlSXRlbS5vZmZzZXRUb3AgLSBvZmZzZXRIZWlnaHQgKyBoZWlnaHQ7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhY3RpdmVJdGVtLm9mZnNldFRvcCA8IHNjcm9sbFRvcCkge1xuICAgICAgICB0aGlzLmxpc3RDb250YWluZXJFbC5zY3JvbGxUb3AgPSBhY3RpdmVJdGVtLm9mZnNldFRvcDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY29tYm9ib3hGb2N1c0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnRleHRJbnB1dD8uZm9jdXMoKTtcbiAgICB9O1xuICAgIHRoaXMuY2xlYXJEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0aW9uRGlzcGxheSA9IFwiYWxsXCI7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wbGFjZWhvbGRlckljb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wbGFjZWhvbGRlckljb25GbGlwUnRsID0gZmFsc2U7XG4gICAgdGhpcy5tYXhJdGVtcyA9IDA7XG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWxsb3dDdXN0b21WYWx1ZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vdmVybGF5UG9zaXRpb25pbmcgPSBcImFic29sdXRlXCI7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0aW9uTW9kZSA9IFwibXVsdGlwbGVcIjtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5mbGlwUGxhY2VtZW50cyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBbXTtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5ncm91cEl0ZW1zID0gW107XG4gICAgdGhpcy5uZWVkc0ljb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hY3RpdmVJdGVtSW5kZXggPSAtMTtcbiAgICB0aGlzLmFjdGl2ZUNoaXBJbmRleCA9IC0xO1xuICAgIHRoaXMuYWN0aXZlRGVzY2VuZGFudCA9IFwiXCI7XG4gICAgdGhpcy5jb21wYWN0U2VsZWN0aW9uRGlzcGxheSA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0ZWRIaWRkZW5DaGlwc0NvdW50ID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkVmlzaWJsZUNoaXBzQ291bnQgPSAwO1xuICAgIHRoaXMudGV4dCA9IFwiXCI7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgb3BlbkhhbmRsZXIoKSB7XG4gICAgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldE1heFNjcm9sbGVySGVpZ2h0KCk7XG4gIH1cbiAgaGFuZGxlRGlzYWJsZWRDaGFuZ2UodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgbWF4SXRlbXNIYW5kbGVyKCkge1xuICAgIHRoaXMuc2V0TWF4U2Nyb2xsZXJIZWlnaHQoKTtcbiAgfVxuICBvdmVybGF5UG9zaXRpb25pbmdIYW5kbGVyKCkge1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICBoYW5kbGVQcm9wc0NoYW5nZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XG4gIH1cbiAgdmFsdWVIYW5kbGVyKHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmludGVybmFsVmFsdWVDaGFuZ2VGbGFnKSB7XG4gICAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5zZWxlY3RlZCA9IHZhbHVlLmluY2x1ZGVzKGl0ZW0udmFsdWUpKSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5zZWxlY3RlZCA9IHZhbHVlID09PSBpdGVtLnZhbHVlKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0uc2VsZWN0ZWQgPSBmYWxzZSkpO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVJdGVtcygpO1xuICAgIH1cbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qICB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIGZsaXBQbGFjZW1lbnRzSGFuZGxlcigpIHtcbiAgICB0aGlzLnNldEZpbHRlcmVkUGxhY2VtZW50cygpO1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICBzZWxlY3RlZEl0ZW1zSGFuZGxlcigpIHtcbiAgICB0aGlzLmludGVybmFsVmFsdWVDaGFuZ2VGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgIHRoaXMuaW50ZXJuYWxWYWx1ZUNoYW5nZUZsYWcgPSBmYWxzZTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkb2N1bWVudENsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICFpc1ByaW1hcnlQb2ludGVyQnV0dG9uKGV2ZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICBpZiAoY29tcG9zZWRQYXRoLmluY2x1ZGVzKHRoaXMuZWwpIHx8IGNvbXBvc2VkUGF0aC5pbmNsdWRlcyh0aGlzLnJlZmVyZW5jZUVsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuYWxsb3dDdXN0b21WYWx1ZXMgJiYgdGhpcy50ZXh0SW5wdXQudmFsdWUpIHtcbiAgICAgIHRoaXMuY2xlYXJJbnB1dFZhbHVlKCk7XG4gICAgICB0aGlzLmZpbHRlckl0ZW1zKFwiXCIpO1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmVJdGVtSW5kZXgoLTEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hbGxvd0N1c3RvbVZhbHVlcyAmJiB0aGlzLnRleHQudHJpbSgpLmxlbmd0aCkge1xuICAgICAgdGhpcy5hZGRDdXN0b21DaGlwKHRoaXMudGV4dCk7XG4gICAgfVxuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICB9XG4gIGNhbGNpdGVDb21ib2JveEl0ZW1DaGFuZ2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuaWdub3JlU2VsZWN0ZWRFdmVudHNGbGFnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMuZmlsdGVyZWRJdGVtcy5pbmRleE9mKHRhcmdldCk7XG4gICAgdGhpcy51cGRhdGVBY3RpdmVJdGVtSW5kZXgobmV3SW5kZXgpO1xuICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHRhcmdldCwgdGFyZ2V0LnNlbGVjdGVkKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcGFyYW0gZGVsYXllZCBSZXBvc2l0aW9uIHRoZSBjb21wb25lbnQgYWZ0ZXIgYSBkZWxheVxuICAgKiBAcmV0dXJucyBQcm9taXNlXG4gICAqL1xuICBhc3luYyByZXBvc2l0aW9uKGRlbGF5ZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHsgZmxvYXRpbmdFbCwgcmVmZXJlbmNlRWwsIHBsYWNlbWVudCwgb3ZlcmxheVBvc2l0aW9uaW5nLCBmaWx0ZXJlZEZsaXBQbGFjZW1lbnRzIH0gPSB0aGlzO1xuICAgIHJldHVybiByZXBvc2l0aW9uKHRoaXMsIHtcbiAgICAgIGZsb2F0aW5nRWwsXG4gICAgICByZWZlcmVuY2VFbCxcbiAgICAgIG92ZXJsYXlQb3NpdGlvbmluZyxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIGZsaXBQbGFjZW1lbnRzOiBmaWx0ZXJlZEZsaXBQbGFjZW1lbnRzLFxuICAgICAgdHlwZTogXCJtZW51XCIsXG4gICAgfSwgZGVsYXllZCk7XG4gIH1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIHRoaXMudGV4dElucHV0Py5mb2N1cygpO1xuICAgIHRoaXMuYWN0aXZlQ2hpcEluZGV4ID0gLTE7XG4gICAgdGhpcy5hY3RpdmVJdGVtSW5kZXggPSAtMTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgY29ubmVjdEZvcm0odGhpcyk7XG4gICAgdGhpcy5pbnRlcm5hbFZhbHVlQ2hhbmdlRmxhZyA9IHRydWU7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICB0aGlzLmludGVybmFsVmFsdWVDaGFuZ2VGbGFnID0gZmFsc2U7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgIHRoaXMudXBkYXRlSXRlbXMoKTtcbiAgICB0aGlzLnNldEZpbHRlcmVkUGxhY2VtZW50cygpO1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICB0aGlzLm9wZW5IYW5kbGVyKCk7XG4gICAgICBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIGFmdGVyQ29ubmVjdERlZmF1bHRWYWx1ZVNldCh0aGlzLCB0aGlzLmdldFZhbHVlKCkpO1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmVsLm9mZnNldEhlaWdodCAhPT0gdGhpcy5pbnB1dEhlaWdodCkge1xuICAgICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICAgICAgdGhpcy5pbnB1dEhlaWdodCA9IHRoaXMuZWwub2Zmc2V0SGVpZ2h0O1xuICAgIH1cbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMucmVmcmVzaFNlbGVjdGlvbkRpc3BsYXkoKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBkaXNjb25uZWN0Rm9ybSh0aGlzKTtcbiAgICBkaXNjb25uZWN0RmxvYXRpbmdVSSh0aGlzLCB0aGlzLnJlZmVyZW5jZUVsLCB0aGlzLmZsb2F0aW5nRWwpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIC8qKiB3aGVuIHNlYXJjaCB0ZXh0IGlzIGNsZWFyZWQsIHJlc2V0IGFjdGl2ZSB0byAgKi9cbiAgdGV4dEhhbmRsZXIoKSB7XG4gICAgdGhpcy51cGRhdGVBY3RpdmVJdGVtSW5kZXgoLTEpO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjbGVhclZhbHVlKCkge1xuICAgIHRoaXMuaWdub3JlU2VsZWN0ZWRFdmVudHNGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goKGVsKSA9PiAoZWwuc2VsZWN0ZWQgPSBmYWxzZSkpO1xuICAgIHRoaXMuaWdub3JlU2VsZWN0ZWRFdmVudHNGbGFnID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgdGhpcy5lbWl0Q29tYm9ib3hDaGFuZ2UoKTtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUFjdGl2ZUl0ZW1JbmRleCgtMSk7XG4gICAgdGhpcy5yZXNldFRleHQoKTtcbiAgICB0aGlzLmZpbHRlckl0ZW1zKFwiXCIpO1xuICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgfVxuICBjbGVhcklucHV0VmFsdWUoKSB7XG4gICAgdGhpcy50ZXh0SW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIHRoaXMudGV4dCA9IFwiXCI7XG4gIH1cbiAgY29tYm9ib3hJblZpZXdwb3J0KCkge1xuICAgIGNvbnN0IGJvdW5kaW5nID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gKGJvdW5kaW5nLnRvcCA+PSAwICYmXG4gICAgICBib3VuZGluZy5sZWZ0ID49IDAgJiZcbiAgICAgIGJvdW5kaW5nLnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpICYmXG4gICAgICBib3VuZGluZy5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSk7XG4gIH1cbiAgb25CZWZvcmVPcGVuKCkge1xuICAgIHRoaXMuc2Nyb2xsVG9BY3RpdmVJdGVtKCk7XG4gICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hCZWZvcmVPcGVuLmVtaXQoKTtcbiAgfVxuICBvbk9wZW4oKSB7XG4gICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hPcGVuLmVtaXQoKTtcbiAgfVxuICBvbkJlZm9yZUNsb3NlKCkge1xuICAgIHRoaXMuY2FsY2l0ZUNvbWJvYm94QmVmb3JlQ2xvc2UuZW1pdCgpO1xuICB9XG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hDbG9zZS5lbWl0KCk7XG4gIH1cbiAgZW5zdXJlUmVjZW50U2VsZWN0ZWRJdGVtSXNBY3RpdmUoKSB7XG4gICAgY29uc3QgeyBzZWxlY3RlZEl0ZW1zIH0gPSB0aGlzO1xuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gc2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IDAgPyAwIDogdGhpcy5pdGVtcy5pbmRleE9mKHNlbGVjdGVkSXRlbXNbc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxXSk7XG4gICAgdGhpcy51cGRhdGVBY3RpdmVJdGVtSW5kZXgodGFyZ2V0SW5kZXgpO1xuICB9XG4gIGhpZGVDaGlwKGNoaXBFbCkge1xuICAgIGNoaXBFbC5jbGFzc0xpc3QuYWRkKENTUyQxLmNoaXBJbnZpc2libGUpO1xuICB9XG4gIHNob3dDaGlwKGNoaXBFbCkge1xuICAgIGNoaXBFbC5jbGFzc0xpc3QucmVtb3ZlKENTUyQxLmNoaXBJbnZpc2libGUpO1xuICB9XG4gIHJlZnJlc2hDaGlwRGlzcGxheSh7IGNoaXBFbHMsIGF2YWlsYWJsZUhvcml6b250YWxDaGlwRWxTcGFjZSwgY2hpcENvbnRhaW5lckVsR2FwLCB9KSB7XG4gICAgY2hpcEVscy5mb3JFYWNoKChjaGlwRWwpID0+IHtcbiAgICAgIGlmICghY2hpcEVsLnNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuaGlkZUNoaXAoY2hpcEVsKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBjaGlwRWxXaWR0aCA9IGdldEVsZW1lbnRXaWR0aChjaGlwRWwpO1xuICAgICAgICBpZiAoY2hpcEVsV2lkdGggJiYgY2hpcEVsV2lkdGggPCBhdmFpbGFibGVIb3Jpem9udGFsQ2hpcEVsU3BhY2UpIHtcbiAgICAgICAgICBhdmFpbGFibGVIb3Jpem9udGFsQ2hpcEVsU3BhY2UgLT0gY2hpcEVsV2lkdGggKyBjaGlwQ29udGFpbmVyRWxHYXA7XG4gICAgICAgICAgdGhpcy5zaG93Q2hpcChjaGlwRWwpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5oaWRlQ2hpcChjaGlwRWwpO1xuICAgIH0pO1xuICB9XG4gIHNldENvbXBhY3RTZWxlY3Rpb25EaXNwbGF5KHsgY2hpcENvbnRhaW5lckVsR2FwLCBjaGlwQ29udGFpbmVyRWxXaWR0aCwgaW5wdXRXaWR0aCwgbGFyZ2VzdFNlbGVjdGVkSW5kaWNhdG9yQ2hpcFdpZHRoLCB9KSB7XG4gICAgY29uc3QgbmV3Q29tcGFjdEJyZWFrcG9pbnQgPSBNYXRoLnJvdW5kKGxhcmdlc3RTZWxlY3RlZEluZGljYXRvckNoaXBXaWR0aCArIGNoaXBDb250YWluZXJFbEdhcCArIGlucHV0V2lkdGgpO1xuICAgIGlmICghdGhpcy5tYXhDb21wYWN0QnJlYWtwb2ludCB8fCB0aGlzLm1heENvbXBhY3RCcmVha3BvaW50IDwgbmV3Q29tcGFjdEJyZWFrcG9pbnQpIHtcbiAgICAgIHRoaXMubWF4Q29tcGFjdEJyZWFrcG9pbnQgPSBuZXdDb21wYWN0QnJlYWtwb2ludDtcbiAgICB9XG4gICAgdGhpcy5jb21wYWN0U2VsZWN0aW9uRGlzcGxheSA9IGNoaXBDb250YWluZXJFbFdpZHRoIDwgdGhpcy5tYXhDb21wYWN0QnJlYWtwb2ludDtcbiAgfVxuICBzZXRWaXNpYmxlQW5kSGlkZGVuQ2hpcHMoY2hpcEVscykge1xuICAgIGxldCBuZXdTZWxlY3RlZFZpc2libGVDaGlwc0NvdW50ID0gMDtcbiAgICBjaGlwRWxzLmZvckVhY2goKGNoaXBFbCkgPT4ge1xuICAgICAgaWYgKGNoaXBFbC5zZWxlY3RlZCAmJiAhY2hpcEVsLmNsYXNzTGlzdC5jb250YWlucyhDU1MkMS5jaGlwSW52aXNpYmxlKSkge1xuICAgICAgICBuZXdTZWxlY3RlZFZpc2libGVDaGlwc0NvdW50Kys7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKG5ld1NlbGVjdGVkVmlzaWJsZUNoaXBzQ291bnQgIT09IHRoaXMuc2VsZWN0ZWRWaXNpYmxlQ2hpcHNDb3VudCkge1xuICAgICAgdGhpcy5zZWxlY3RlZFZpc2libGVDaGlwc0NvdW50ID0gbmV3U2VsZWN0ZWRWaXNpYmxlQ2hpcHNDb3VudDtcbiAgICB9XG4gICAgY29uc3QgbmV3U2VsZWN0ZWRIaWRkZW5DaGlwc0NvdW50ID0gdGhpcy5nZXRTZWxlY3RlZEl0ZW1zKCkubGVuZ3RoIC0gbmV3U2VsZWN0ZWRWaXNpYmxlQ2hpcHNDb3VudDtcbiAgICBpZiAobmV3U2VsZWN0ZWRIaWRkZW5DaGlwc0NvdW50ICE9PSB0aGlzLnNlbGVjdGVkSGlkZGVuQ2hpcHNDb3VudCkge1xuICAgICAgdGhpcy5zZWxlY3RlZEhpZGRlbkNoaXBzQ291bnQgPSBuZXdTZWxlY3RlZEhpZGRlbkNoaXBzQ291bnQ7XG4gICAgfVxuICB9XG4gIGdldE1heFNjcm9sbGVySGVpZ2h0KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtc0FuZEdyb3VwcygpLmZpbHRlcigoaXRlbSkgPT4gIWl0ZW0uaGlkZGVuKTtcbiAgICBjb25zdCB7IG1heEl0ZW1zIH0gPSB0aGlzO1xuICAgIGxldCBpdGVtc1RvUHJvY2VzcyA9IDA7XG4gICAgbGV0IG1heFNjcm9sbGVySGVpZ2h0ID0gMDtcbiAgICBpZiAoaXRlbXMubGVuZ3RoID4gbWF4SXRlbXMpIHtcbiAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW1zVG9Qcm9jZXNzIDwgbWF4SXRlbXMgJiYgbWF4SXRlbXMgPiAwKSB7XG4gICAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jYWxjdWxhdGVTaW5nbGVJdGVtSGVpZ2h0KGl0ZW0pO1xuICAgICAgICAgIGlmIChoZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICBtYXhTY3JvbGxlckhlaWdodCArPSBoZWlnaHQ7XG4gICAgICAgICAgICBpdGVtc1RvUHJvY2VzcysrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtYXhTY3JvbGxlckhlaWdodDtcbiAgfVxuICBjYWxjdWxhdGVTaW5nbGVJdGVtSGVpZ2h0KGl0ZW0pIHtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGhlaWdodCA9IGl0ZW0ub2Zmc2V0SGVpZ2h0O1xuICAgIC8vIGlmIGl0ZW0gaGFzIGNoaWxkcmVuIGl0ZW1zLCBkb24ndCBjb3VudCB0aGVpciBoZWlnaHQgdHdpY2VcbiAgICBjb25zdCBjaGlsZHJlbiA9IEFycmF5LmZyb20oaXRlbS5xdWVyeVNlbGVjdG9yQWxsKENvbWJvYm94Q2hpbGRTZWxlY3RvcikpO1xuICAgIGNoaWxkcmVuXG4gICAgICAubWFwKChjaGlsZCkgPT4gY2hpbGQ/Lm9mZnNldEhlaWdodClcbiAgICAgIC5mb3JFYWNoKChvZmZzZXRIZWlnaHQpID0+IHtcbiAgICAgIGhlaWdodCAtPSBvZmZzZXRIZWlnaHQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuICBnZXRJdGVtc0FuZEdyb3VwcygpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuZ3JvdXBJdGVtcywgLi4udGhpcy5pdGVtc107XG4gIH1cbiAgdG9nZ2xlU2VsZWN0aW9uKGl0ZW0sIHZhbHVlID0gIWl0ZW0uc2VsZWN0ZWQpIHtcbiAgICBpZiAoIWl0ZW0gfHxcbiAgICAgICh0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwic2luZ2xlLXBlcnNpc3RcIiAmJiBpdGVtLnNlbGVjdGVkICYmIGl0ZW0udmFsdWUgPT09IHRoaXMudmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmlzTXVsdGkoKSkge1xuICAgICAgaXRlbS5zZWxlY3RlZCA9IHZhbHVlO1xuICAgICAgdGhpcy51cGRhdGVBbmNlc3RvcnMoaXRlbSk7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSB0aGlzLmdldFNlbGVjdGVkSXRlbXMoKTtcbiAgICAgIHRoaXMuZW1pdENvbWJvYm94Q2hhbmdlKCk7XG4gICAgICB0aGlzLnJlc2V0VGV4dCgpO1xuICAgICAgdGhpcy5maWx0ZXJJdGVtcyhcIlwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlnbm9yZVNlbGVjdGVkRXZlbnRzRmxhZyA9IHRydWU7XG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGVsKSA9PiAoZWwuc2VsZWN0ZWQgPSBlbCA9PT0gaXRlbSA/IHZhbHVlIDogZmFsc2UpKTtcbiAgICAgIHRoaXMuaWdub3JlU2VsZWN0ZWRFdmVudHNGbGFnID0gZmFsc2U7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSB0aGlzLmdldFNlbGVjdGVkSXRlbXMoKTtcbiAgICAgIHRoaXMuZW1pdENvbWJvYm94Q2hhbmdlKCk7XG4gICAgICBpZiAodGhpcy50ZXh0SW5wdXQpIHtcbiAgICAgICAgdGhpcy50ZXh0SW5wdXQudmFsdWUgPSBpdGVtLnRleHRMYWJlbDtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmVJdGVtSW5kZXgoLTEpO1xuICAgICAgdGhpcy5yZXNldFRleHQoKTtcbiAgICAgIHRoaXMuZmlsdGVySXRlbXMoXCJcIik7XG4gICAgfVxuICB9XG4gIHVwZGF0ZUFuY2VzdG9ycyhpdGVtKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uTW9kZSAhPT0gXCJhbmNlc3RvcnNcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhbmNlc3RvcnMgPSBnZXRJdGVtQW5jZXN0b3JzKGl0ZW0pO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZ2V0SXRlbUNoaWxkcmVuKGl0ZW0pO1xuICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICBhbmNlc3RvcnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoZWwpID0+IChlbC5zZWxlY3RlZCA9IGZhbHNlKSk7XG4gICAgICBbLi4uYW5jZXN0b3JzXS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBpZiAoIWhhc0FjdGl2ZUNoaWxkcmVuKGVsKSkge1xuICAgICAgICAgIGVsLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBnZXRGaWx0ZXJlZEl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcigoaXRlbSkgPT4gIWl0ZW0uaGlkZGVuKTtcbiAgfVxuICBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgIGZpbHRlckRpc2FibGVkOiBpdGVtLmZpbHRlckRpc2FibGVkLFxuICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXG4gICAgICBsYWJlbDogaXRlbS50ZXh0TGFiZWwsXG4gICAgfSkpO1xuICB9XG4gIGdldE5lZWRzSWNvbigpIHtcbiAgICByZXR1cm4gaXNTaW5nbGVMaWtlKHRoaXMuc2VsZWN0aW9uTW9kZSkgJiYgdGhpcy5pdGVtcy5zb21lKChpdGVtKSA9PiBpdGVtLmljb24pO1xuICB9XG4gIHJlc2V0VGV4dCgpIHtcbiAgICBpZiAodGhpcy50ZXh0SW5wdXQpIHtcbiAgICAgIHRoaXMudGV4dElucHV0LnZhbHVlID0gXCJcIjtcbiAgICB9XG4gICAgdGhpcy50ZXh0ID0gXCJcIjtcbiAgfVxuICBnZXRJdGVtcygpIHtcbiAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKENvbWJvYm94SXRlbSkpO1xuICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLmRpc2FibGVkKTtcbiAgfVxuICBnZXRHcm91cEl0ZW1zKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChDb21ib2JveEl0ZW1Hcm91cCkpO1xuICB9XG4gIGFkZEN1c3RvbUNoaXAodmFsdWUsIGZvY3VzKSB7XG4gICAgY29uc3QgZXhpc3RpbmdJdGVtID0gdGhpcy5pdGVtcy5maW5kKChlbCkgPT4gZWwudGV4dExhYmVsID09PSB2YWx1ZSk7XG4gICAgaWYgKGV4aXN0aW5nSXRlbSkge1xuICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24oZXhpc3RpbmdJdGVtLCB0cnVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aSgpKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHRoaXMuc2VsZWN0ZWRJdGVtc1t0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMV0sIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KENvbWJvYm94SXRlbSk7XG4gICAgICBpdGVtLnZhbHVlID0gdmFsdWU7XG4gICAgICBpdGVtLnRleHRMYWJlbCA9IHZhbHVlO1xuICAgICAgaXRlbS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgdGhpcy5yZXNldFRleHQoKTtcbiAgICAgIGlmIChmb2N1cykge1xuICAgICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XG4gICAgICB0aGlzLmZpbHRlckl0ZW1zKFwiXCIpO1xuICAgICAgdGhpcy5lbWl0Q29tYm9ib3hDaGFuZ2UoKTtcbiAgICB9XG4gIH1cbiAgcmVtb3ZlQWN0aXZlQ2hpcCgpIHtcbiAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbih0aGlzLnNlbGVjdGVkSXRlbXNbdGhpcy5hY3RpdmVDaGlwSW5kZXhdLCBmYWxzZSk7XG4gICAgdGhpcy5zZXRGb2N1cygpO1xuICB9XG4gIHJlbW92ZUxhc3RDaGlwKCkge1xuICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHRoaXMuc2VsZWN0ZWRJdGVtc1t0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMV0sIGZhbHNlKTtcbiAgICB0aGlzLnNldEZvY3VzKCk7XG4gIH1cbiAgcHJldmlvdXNDaGlwKCkge1xuICAgIGlmICh0aGlzLnRleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5hY3RpdmVDaGlwSW5kZXg7XG4gICAgdGhpcy5hY3RpdmVDaGlwSW5kZXggPSBhY3RpdmUgPT09IC0xID8gbGVuZ3RoIDogTWF0aC5tYXgoYWN0aXZlIC0gMSwgMCk7XG4gICAgdGhpcy51cGRhdGVBY3RpdmVJdGVtSW5kZXgoLTEpO1xuICAgIHRoaXMuZm9jdXNDaGlwKCk7XG4gIH1cbiAgbmV4dENoaXAoKSB7XG4gICAgaWYgKHRoaXMudGV4dCB8fCB0aGlzLmFjdGl2ZUNoaXBJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGFzdCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5hY3RpdmVDaGlwSW5kZXggKyAxO1xuICAgIGlmIChuZXdJbmRleCA+IGxhc3QpIHtcbiAgICAgIHRoaXMuYWN0aXZlQ2hpcEluZGV4ID0gLTE7XG4gICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVDaGlwSW5kZXggPSBuZXdJbmRleDtcbiAgICAgIHRoaXMuZm9jdXNDaGlwKCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQWN0aXZlSXRlbUluZGV4KC0xKTtcbiAgfVxuICBmb2N1c0NoaXAoKSB7XG4gICAgY29uc3QgZ3VpZCA9IHRoaXMuc2VsZWN0ZWRJdGVtc1t0aGlzLmFjdGl2ZUNoaXBJbmRleF0/Lmd1aWQ7XG4gICAgY29uc3QgY2hpcCA9IGd1aWRcbiAgICAgID8gdGhpcy5yZWZlcmVuY2VFbC5xdWVyeVNlbGVjdG9yKGAjJHtjaGlwVWlkUHJlZml4fSR7Z3VpZH1gKVxuICAgICAgOiBudWxsO1xuICAgIGNoaXA/LnNldEZvY3VzKCk7XG4gIH1cbiAgc2hpZnRBY3RpdmVJdGVtSW5kZXgoZGVsdGEpIHtcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gdGhpcy5maWx0ZXJlZEl0ZW1zO1xuICAgIGNvbnN0IG5ld0luZGV4ID0gKHRoaXMuYWN0aXZlSXRlbUluZGV4ICsgbGVuZ3RoICsgZGVsdGEpICUgbGVuZ3RoO1xuICAgIHRoaXMudXBkYXRlQWN0aXZlSXRlbUluZGV4KG5ld0luZGV4KTtcbiAgICB0aGlzLnNjcm9sbFRvQWN0aXZlSXRlbSgpO1xuICB9XG4gIHVwZGF0ZUFjdGl2ZUl0ZW1JbmRleChpbmRleCkge1xuICAgIHRoaXMuYWN0aXZlSXRlbUluZGV4ID0gaW5kZXg7XG4gICAgbGV0IGFjdGl2ZURlc2NlbmRhbnQgPSBudWxsO1xuICAgIHRoaXMuZmlsdGVyZWRJdGVtcy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgaWYgKGkgPT09IGluZGV4KSB7XG4gICAgICAgIGVsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGFjdGl2ZURlc2NlbmRhbnQgPSBgJHtpdGVtVWlkUHJlZml4fSR7ZWwuZ3VpZH1gO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuYWN0aXZlRGVzY2VuZGFudCA9IGFjdGl2ZURlc2NlbmRhbnQ7XG4gICAgaWYgKHRoaXMuYWN0aXZlSXRlbUluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuYWN0aXZlQ2hpcEluZGV4ID0gLTE7XG4gICAgfVxuICB9XG4gIGlzQWxsU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SXRlbXMoKS5sZW5ndGggPT09IHRoaXMuZ2V0U2VsZWN0ZWRJdGVtcygpLmxlbmd0aDtcbiAgfVxuICBpc011bHRpKCkge1xuICAgIHJldHVybiAhaXNTaW5nbGVMaWtlKHRoaXMuc2VsZWN0aW9uTW9kZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJDaGlwcygpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUNoaXBJbmRleCwgc2NhbGUsIHNlbGVjdGlvbk1vZGUsIG1lc3NhZ2VzIH0gPSB0aGlzO1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICBjb25zdCBjaGlwQ2xhc3NlcyA9IHtcbiAgICAgICAgY2hpcDogdHJ1ZSxcbiAgICAgICAgXCJjaGlwLS1hY3RpdmVcIjogYWN0aXZlQ2hpcEluZGV4ID09PSBpLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IGFuY2VzdG9ycyA9IFsuLi5nZXRJdGVtQW5jZXN0b3JzKGl0ZW0pXS5yZXZlcnNlKCk7XG4gICAgICBjb25zdCBwYXRoTGFiZWwgPSBbLi4uYW5jZXN0b3JzLCBpdGVtXS5tYXAoKGVsKSA9PiBlbC50ZXh0TGFiZWwpO1xuICAgICAgY29uc3QgbGFiZWwgPSBzZWxlY3Rpb25Nb2RlICE9PSBcImFuY2VzdG9yc1wiID8gaXRlbS50ZXh0TGFiZWwgOiBwYXRoTGFiZWwuam9pbihcIiAvIFwiKTtcbiAgICAgIHJldHVybiAoaChcImNhbGNpdGUtY2hpcFwiLCB7IGNsYXNzOiBjaGlwQ2xhc3NlcywgY2xvc2FibGU6IHRydWUsIGljb246IGl0ZW0uaWNvbiwgaWNvbkZsaXBSdGw6IGl0ZW0uaWNvbkZsaXBSdGwsIGlkOiBpdGVtLmd1aWQgPyBgJHtjaGlwVWlkUHJlZml4fSR7aXRlbS5ndWlkfWAgOiBudWxsLCBrZXk6IGl0ZW0udGV4dExhYmVsLCBtZXNzYWdlT3ZlcnJpZGVzOiB7IGRpc21pc3NMYWJlbDogbWVzc2FnZXMucmVtb3ZlVGFnIH0sIG9uQ2FsY2l0ZUNoaXBDbG9zZTogKCkgPT4gdGhpcy5jYWxjaXRlQ2hpcENsb3NlSGFuZGxlcihpdGVtKSwgc2NhbGU6IHNjYWxlLCBzZWxlY3RlZDogaXRlbS5zZWxlY3RlZCwgdGl0bGU6IGxhYmVsLCB2YWx1ZTogaXRlbS52YWx1ZSB9LCBsYWJlbCkpO1xuICAgIH0pO1xuICB9XG4gIHJlbmRlckFsbFNlbGVjdGVkSW5kaWNhdG9yQ2hpcCgpIHtcbiAgICBjb25zdCB7IGNvbXBhY3RTZWxlY3Rpb25EaXNwbGF5LCBzY2FsZSwgc2VsZWN0ZWRWaXNpYmxlQ2hpcHNDb3VudCwgc2V0QWxsU2VsZWN0ZWRJbmRpY2F0b3JDaGlwRWwsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5tZXNzYWdlcy5hbGxTZWxlY3RlZDtcbiAgICByZXR1cm4gKGgoXCJjYWxjaXRlLWNoaXBcIiwgeyBjbGFzczoge1xuICAgICAgICBjaGlwOiB0cnVlLFxuICAgICAgICBbQ1NTJDEuY2hpcEludmlzaWJsZV06ICEodGhpcy5pc0FsbFNlbGVjdGVkKCkgJiZcbiAgICAgICAgICAhc2VsZWN0ZWRWaXNpYmxlQ2hpcHNDb3VudCAmJlxuICAgICAgICAgICFjb21wYWN0U2VsZWN0aW9uRGlzcGxheSksXG4gICAgICB9LCBzY2FsZTogc2NhbGUsIHRpdGxlOiBsYWJlbCwgdmFsdWU6IFwiXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiBzZXRBbGxTZWxlY3RlZEluZGljYXRvckNoaXBFbCB9LCBsYWJlbCkpO1xuICB9XG4gIHJlbmRlckFsbFNlbGVjdGVkSW5kaWNhdG9yQ2hpcENvbXBhY3QoKSB7XG4gICAgY29uc3QgeyBjb21wYWN0U2VsZWN0aW9uRGlzcGxheSwgc2NhbGUsIHNlbGVjdGVkVmlzaWJsZUNoaXBzQ291bnQgfSA9IHRoaXM7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLm1lc3NhZ2VzLmFsbCB8fCBcIkFsbFwiO1xuICAgIHJldHVybiAoaChcImNhbGNpdGUtY2hpcFwiLCB7IGNsYXNzOiB7XG4gICAgICAgIGNoaXA6IHRydWUsXG4gICAgICAgIFtDU1MkMS5jaGlwSW52aXNpYmxlXTogISh0aGlzLmlzQWxsU2VsZWN0ZWQoKSAmJlxuICAgICAgICAgICFzZWxlY3RlZFZpc2libGVDaGlwc0NvdW50ICYmXG4gICAgICAgICAgY29tcGFjdFNlbGVjdGlvbkRpc3BsYXkpLFxuICAgICAgfSwgc2NhbGU6IHNjYWxlLCB0aXRsZTogbGFiZWwsIHZhbHVlOiBcIlwiIH0sIGxhYmVsKSk7XG4gIH1cbiAgcmVuZGVyU2VsZWN0ZWRJbmRpY2F0b3JDaGlwKCkge1xuICAgIGNvbnN0IHsgY29tcGFjdFNlbGVjdGlvbkRpc3BsYXksIHNlbGVjdGlvbkRpc3BsYXksIGdldFNlbGVjdGVkSXRlbXMsIHNjYWxlLCBzZWxlY3RlZEhpZGRlbkNoaXBzQ291bnQsIHNlbGVjdGVkVmlzaWJsZUNoaXBzQ291bnQsIHNldFNlbGVjdGVkSW5kaWNhdG9yQ2hpcEVsLCB9ID0gdGhpcztcbiAgICBsZXQgY2hpcEludmlzaWJsZTtcbiAgICBsZXQgbGFiZWw7XG4gICAgaWYgKGNvbXBhY3RTZWxlY3Rpb25EaXNwbGF5KSB7XG4gICAgICBjaGlwSW52aXNpYmxlID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoc2VsZWN0aW9uRGlzcGxheSA9PT0gXCJzaW5nbGVcIikge1xuICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW1zQ291bnQgPSBnZXRTZWxlY3RlZEl0ZW1zKCkubGVuZ3RoO1xuICAgICAgICBpZiAodGhpcy5pc0FsbFNlbGVjdGVkKCkpIHtcbiAgICAgICAgICBjaGlwSW52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWxlY3RlZEl0ZW1zQ291bnQgPiAwKSB7XG4gICAgICAgICAgY2hpcEludmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNoaXBJbnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsID0gYCR7c2VsZWN0ZWRJdGVtc0NvdW50fSAke3RoaXMubWVzc2FnZXMuc2VsZWN0ZWR9YDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHNlbGVjdGlvbkRpc3BsYXkgPT09IFwiZml0XCIpIHtcbiAgICAgICAgY2hpcEludmlzaWJsZSA9ICEhKCh0aGlzLmlzQWxsU2VsZWN0ZWQoKSAmJiBzZWxlY3RlZFZpc2libGVDaGlwc0NvdW50ID09PSAwKSB8fFxuICAgICAgICAgIHNlbGVjdGVkSGlkZGVuQ2hpcHNDb3VudCA9PT0gMCk7XG4gICAgICAgIGxhYmVsID1cbiAgICAgICAgICBzZWxlY3RlZFZpc2libGVDaGlwc0NvdW50ID4gMFxuICAgICAgICAgICAgPyBgKyR7c2VsZWN0ZWRIaWRkZW5DaGlwc0NvdW50fWBcbiAgICAgICAgICAgIDogYCR7c2VsZWN0ZWRIaWRkZW5DaGlwc0NvdW50fSAke3RoaXMubWVzc2FnZXMuc2VsZWN0ZWR9YDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChoKFwiY2FsY2l0ZS1jaGlwXCIsIHsgY2xhc3M6IHtcbiAgICAgICAgY2hpcDogdHJ1ZSxcbiAgICAgICAgW0NTUyQxLmNoaXBJbnZpc2libGVdOiBjaGlwSW52aXNpYmxlLFxuICAgICAgfSwgc2NhbGU6IHNjYWxlLCB0aXRsZTogbGFiZWwsIHZhbHVlOiBcIlwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogc2V0U2VsZWN0ZWRJbmRpY2F0b3JDaGlwRWwgfSwgbGFiZWwpKTtcbiAgfVxuICByZW5kZXJTZWxlY3RlZEluZGljYXRvckNoaXBDb21wYWN0KCkge1xuICAgIGNvbnN0IHsgY29tcGFjdFNlbGVjdGlvbkRpc3BsYXksIHNlbGVjdGlvbkRpc3BsYXksIGdldFNlbGVjdGVkSXRlbXMsIHNjYWxlLCBzZWxlY3RlZEhpZGRlbkNoaXBzQ291bnQsIH0gPSB0aGlzO1xuICAgIGxldCBjaGlwSW52aXNpYmxlO1xuICAgIGxldCBsYWJlbDtcbiAgICBpZiAoY29tcGFjdFNlbGVjdGlvbkRpc3BsYXkpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXNDb3VudCA9IGdldFNlbGVjdGVkSXRlbXMoKS5sZW5ndGg7XG4gICAgICBpZiAodGhpcy5pc0FsbFNlbGVjdGVkKCkpIHtcbiAgICAgICAgY2hpcEludmlzaWJsZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChzZWxlY3Rpb25EaXNwbGF5ID09PSBcImZpdFwiKSB7XG4gICAgICAgIGNoaXBJbnZpc2libGUgPSAhKHNlbGVjdGVkSGlkZGVuQ2hpcHNDb3VudCA+IDApO1xuICAgICAgICBsYWJlbCA9IGAke3NlbGVjdGVkSGlkZGVuQ2hpcHNDb3VudCB8fCAwfWA7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChzZWxlY3Rpb25EaXNwbGF5ID09PSBcInNpbmdsZVwiKSB7XG4gICAgICAgIGNoaXBJbnZpc2libGUgPSAhKHNlbGVjdGVkSXRlbXNDb3VudCA+IDApO1xuICAgICAgICBsYWJlbCA9IGAke3NlbGVjdGVkSXRlbXNDb3VudH1gO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNoaXBJbnZpc2libGUgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gKGgoXCJjYWxjaXRlLWNoaXBcIiwgeyBjbGFzczoge1xuICAgICAgICBjaGlwOiB0cnVlLFxuICAgICAgICBbQ1NTJDEuY2hpcEludmlzaWJsZV06IGNoaXBJbnZpc2libGUsXG4gICAgICB9LCBzY2FsZTogc2NhbGUsIHRpdGxlOiBsYWJlbCwgdmFsdWU6IFwiXCIgfSwgbGFiZWwpKTtcbiAgfVxuICByZW5kZXJJbnB1dCgpIHtcbiAgICBjb25zdCB7IGd1aWQsIGRpc2FibGVkLCBwbGFjZWhvbGRlciwgc2VsZWN0aW9uTW9kZSwgc2VsZWN0ZWRJdGVtcywgb3BlbiB9ID0gdGhpcztcbiAgICBjb25zdCBzaW5nbGUgPSBpc1NpbmdsZUxpa2Uoc2VsZWN0aW9uTW9kZSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gc2VsZWN0ZWRJdGVtc1swXTtcbiAgICBjb25zdCBzaG93TGFiZWwgPSAhb3BlbiAmJiBzaW5nbGUgJiYgISFzZWxlY3RlZEl0ZW07XG4gICAgcmV0dXJuIChoKFwic3BhblwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFwiaW5wdXQtd3JhcFwiOiB0cnVlLFxuICAgICAgICBcImlucHV0LXdyYXAtLXNpbmdsZVwiOiBzaW5nbGUsXG4gICAgICB9IH0sIHNob3dMYWJlbCAmJiAoaChcInNwYW5cIiwgeyBjbGFzczoge1xuICAgICAgICBsYWJlbDogdHJ1ZSxcbiAgICAgICAgXCJsYWJlbC0taWNvblwiOiAhIXNlbGVjdGVkSXRlbT8uaWNvbixcbiAgICAgIH0sIGtleTogXCJsYWJlbFwiIH0sIHNlbGVjdGVkSXRlbS50ZXh0TGFiZWwpKSwgaChcImlucHV0XCIsIHsgXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIjogdGhpcy5hY3RpdmVEZXNjZW5kYW50LCBcImFyaWEtYXV0b2NvbXBsZXRlXCI6IFwibGlzdFwiLCBcImFyaWEtY29udHJvbHNcIjogYCR7bGlzdGJveFVpZFByZWZpeH0ke2d1aWR9YCwgXCJhcmlhLWxhYmVsXCI6IGdldExhYmVsVGV4dCh0aGlzKSwgY2xhc3M6IHtcbiAgICAgICAgaW5wdXQ6IHRydWUsXG4gICAgICAgIFwiaW5wdXQtLXNpbmdsZVwiOiB0cnVlLFxuICAgICAgICBcImlucHV0LS10cmFuc3BhcmVudFwiOiB0aGlzLmFjdGl2ZUNoaXBJbmRleCA+IC0xLFxuICAgICAgICBcImlucHV0LS1oaWRkZW5cIjogc2hvd0xhYmVsLFxuICAgICAgICBcImlucHV0LS1pY29uXCI6ICEhdGhpcy5wbGFjZWhvbGRlckljb24sXG4gICAgICB9LCBkaXNhYmxlZDogZGlzYWJsZWQsIGlkOiBgJHtpbnB1dFVpZFByZWZpeH0ke2d1aWR9YCwga2V5OiBcImlucHV0XCIsIG9uRm9jdXM6IHRoaXMuY29tYm9ib3hGb2N1c0hhbmRsZXIsIG9uSW5wdXQ6IHRoaXMuaW5wdXRIYW5kbGVyLCBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsIHR5cGU6IFwidGV4dFwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy50ZXh0SW5wdXQgPSBlbCkgfSkpKTtcbiAgfVxuICByZW5kZXJMaXN0Qm94T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJlZEl0ZW1zLm1hcCgoaXRlbSkgPT4gKGgoXCJsaVwiLCB7IFwiYXJpYS1zZWxlY3RlZFwiOiB0b0FyaWFCb29sZWFuKGl0ZW0uc2VsZWN0ZWQpLCBpZDogaXRlbS5ndWlkID8gYCR7aXRlbVVpZFByZWZpeH0ke2l0ZW0uZ3VpZH1gIDogbnVsbCwgcm9sZTogXCJvcHRpb25cIiwgdGFiaW5kZXg6IFwiLTFcIiB9LCBpdGVtLnRleHRMYWJlbCkpKTtcbiAgfVxuICByZW5kZXJGbG9hdGluZ1VJQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IHsgc2V0RmxvYXRpbmdFbCwgc2V0Q29udGFpbmVyRWwsIG9wZW4gfSA9IHRoaXM7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgIFtDU1MkMS5saXN0Q29udGFpbmVyXTogdHJ1ZSxcbiAgICAgIFtGbG9hdGluZ0NTUy5hbmltYXRpb25dOiB0cnVlLFxuICAgICAgW0Zsb2F0aW5nQ1NTLmFuaW1hdGlvbkFjdGl2ZV06IG9wZW4sXG4gICAgfTtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczoge1xuICAgICAgICBcImZsb2F0aW5nLXVpLWNvbnRhaW5lclwiOiB0cnVlLFxuICAgICAgICBcImZsb2F0aW5nLXVpLWNvbnRhaW5lci0tYWN0aXZlXCI6IG9wZW4sXG4gICAgICB9LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogc2V0RmxvYXRpbmdFbCB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IGNsYXNzZXMsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiBzZXRDb250YWluZXJFbCB9LCBoKFwidWxcIiwgeyBjbGFzczogeyBsaXN0OiB0cnVlLCBcImxpc3QtLWhpZGVcIjogIW9wZW4gfSB9LCBoKFwic2xvdFwiLCBudWxsKSkpKSk7XG4gIH1cbiAgcmVuZGVySWNvblN0YXJ0KCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRJdGVtcywgcGxhY2Vob2xkZXJJY29uLCBzZWxlY3Rpb25Nb2RlLCBwbGFjZWhvbGRlckljb25GbGlwUnRsIH0gPSB0aGlzO1xuICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHNlbGVjdGVkSXRlbXNbMF07XG4gICAgY29uc3Qgc2VsZWN0ZWRJY29uID0gc2VsZWN0ZWRJdGVtPy5pY29uO1xuICAgIGNvbnN0IHNpbmdsZVNlbGVjdGlvbk1vZGUgPSBpc1NpbmdsZUxpa2Uoc2VsZWN0aW9uTW9kZSk7XG4gICAgY29uc3QgaWNvbkF0U3RhcnQgPSAhdGhpcy5vcGVuICYmIHNlbGVjdGVkSXRlbVxuICAgICAgPyAhIXNlbGVjdGVkSWNvbiAmJiBzaW5nbGVTZWxlY3Rpb25Nb2RlXG4gICAgICA6ICEhdGhpcy5wbGFjZWhvbGRlckljb24gJiYgKCFzZWxlY3RlZEl0ZW0gfHwgc2luZ2xlU2VsZWN0aW9uTW9kZSk7XG4gICAgcmV0dXJuIChpY29uQXRTdGFydCAmJiAoaChcInNwYW5cIiwgeyBjbGFzczogXCJpY29uLXN0YXJ0XCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiBcInNlbGVjdGVkLWljb25cIiwgZmxpcFJ0bDogdGhpcy5vcGVuICYmIHNlbGVjdGVkSXRlbSA/IHNlbGVjdGVkSXRlbS5pY29uRmxpcFJ0bCA6IHBsYWNlaG9sZGVySWNvbkZsaXBSdGwsIGljb246ICF0aGlzLm9wZW4gJiYgc2VsZWN0ZWRJdGVtID8gc2VsZWN0ZWRJY29uIDogcGxhY2Vob2xkZXJJY29uLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKSkpO1xuICB9XG4gIHJlbmRlckljb25FbmQoKSB7XG4gICAgY29uc3QgeyBvcGVuIH0gPSB0aGlzO1xuICAgIHJldHVybiAoaChcInNwYW5cIiwgeyBjbGFzczogXCJpY29uLWVuZFwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBvcGVuID8gXCJjaGV2cm9uLXVwXCIgOiBcImNoZXZyb24tZG93blwiLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0aW9uRGlzcGxheSwgZ3VpZCwgbGFiZWwsIG9wZW4gfSA9IHRoaXM7XG4gICAgY29uc3Qgc2luZ2xlU2VsZWN0aW9uTW9kZSA9IGlzU2luZ2xlTGlrZSh0aGlzLnNlbGVjdGlvbk1vZGUpO1xuICAgIGNvbnN0IGFsbFNlbGVjdGlvbkRpc3BsYXkgPSBzZWxlY3Rpb25EaXNwbGF5ID09PSBcImFsbFwiO1xuICAgIGNvbnN0IHNpbmdsZVNlbGVjdGlvbkRpc3BsYXkgPSBzZWxlY3Rpb25EaXNwbGF5ID09PSBcInNpbmdsZVwiO1xuICAgIGNvbnN0IGZpdFNlbGVjdGlvbkRpc3BsYXkgPSAhc2luZ2xlU2VsZWN0aW9uTW9kZSAmJiBzZWxlY3Rpb25EaXNwbGF5ID09PSBcImZpdFwiO1xuICAgIGNvbnN0IGlzQ2xlYXJhYmxlID0gIXRoaXMuY2xlYXJEaXNhYmxlZCAmJiB0aGlzLnZhbHVlPy5sZW5ndGggPiAwO1xuICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMuY29tYm9ib3hGb2N1c0hhbmRsZXIgfSwgaChcImRpdlwiLCB7IFwiYXJpYS1hdXRvY29tcGxldGVcIjogXCJsaXN0XCIsIFwiYXJpYS1jb250cm9sc1wiOiBgJHtsaXN0Ym94VWlkUHJlZml4fSR7Z3VpZH1gLCBcImFyaWEtZXhwYW5kZWRcIjogdG9BcmlhQm9vbGVhbihvcGVuKSwgXCJhcmlhLWhhc3BvcHVwXCI6IFwibGlzdGJveFwiLCBcImFyaWEtbGFiZWxcIjogZ2V0TGFiZWxUZXh0KHRoaXMpLCBcImFyaWEtbGl2ZVwiOiBcInBvbGl0ZVwiLCBcImFyaWEtb3duc1wiOiBgJHtsaXN0Ym94VWlkUHJlZml4fSR7Z3VpZH1gLCBjbGFzczoge1xuICAgICAgICB3cmFwcGVyOiB0cnVlLFxuICAgICAgICBcIndyYXBwZXItLXNpbmdsZVwiOiBzaW5nbGVTZWxlY3Rpb25Nb2RlIHx8ICF0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoLFxuICAgICAgICBcIndyYXBwZXItLWFjdGl2ZVwiOiBvcGVuLFxuICAgICAgfSwgb25DbGljazogdGhpcy5jbGlja0hhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlciwgcm9sZTogXCJjb21ib2JveFwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zZXRSZWZlcmVuY2VFbCB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgXCJncmlkLWlucHV0XCI6IHRydWUsXG4gICAgICAgIFtDU1MkMS5zZWxlY3Rpb25EaXNwbGF5Rml0XTogZml0U2VsZWN0aW9uRGlzcGxheSxcbiAgICAgICAgW0NTUyQxLnNlbGVjdGlvbkRpc3BsYXlTaW5nbGVdOiBzaW5nbGVTZWxlY3Rpb25EaXNwbGF5LFxuICAgICAgfSwgcmVmOiB0aGlzLnNldENoaXBDb250YWluZXJFbCB9LCB0aGlzLnJlbmRlckljb25TdGFydCgpLCAhc2luZ2xlU2VsZWN0aW9uTW9kZSAmJiAhc2luZ2xlU2VsZWN0aW9uRGlzcGxheSAmJiB0aGlzLnJlbmRlckNoaXBzKCksICFzaW5nbGVTZWxlY3Rpb25Nb2RlICYmXG4gICAgICAhYWxsU2VsZWN0aW9uRGlzcGxheSAmJiBbXG4gICAgICB0aGlzLnJlbmRlclNlbGVjdGVkSW5kaWNhdG9yQ2hpcCgpLFxuICAgICAgdGhpcy5yZW5kZXJTZWxlY3RlZEluZGljYXRvckNoaXBDb21wYWN0KCksXG4gICAgICB0aGlzLnJlbmRlckFsbFNlbGVjdGVkSW5kaWNhdG9yQ2hpcCgpLFxuICAgICAgdGhpcy5yZW5kZXJBbGxTZWxlY3RlZEluZGljYXRvckNoaXBDb21wYWN0KCksXG4gICAgXSwgaChcImxhYmVsXCIsIHsgY2xhc3M6IFwic2NyZWVuLXJlYWRlcnMtb25seVwiLCBodG1sRm9yOiBgJHtpbnB1dFVpZFByZWZpeH0ke2d1aWR9YCwgaWQ6IGAke2xhYmVsVWlkUHJlZml4fSR7Z3VpZH1gIH0sIGxhYmVsKSwgdGhpcy5yZW5kZXJJbnB1dCgpKSwgaXNDbGVhcmFibGUgPyAoaChYQnV0dG9uLCB7IGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBrZXk6IFwiY2xvc2UtYnV0dG9uXCIsIGxhYmVsOiB0aGlzLm1lc3NhZ2VzLmNsZWFyLCBzY2FsZTogdGhpcy5zY2FsZSB9KSkgOiBudWxsLCB0aGlzLnJlbmRlckljb25FbmQoKSksIGgoXCJ1bFwiLCB7IFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGAke2xhYmVsVWlkUHJlZml4fSR7Z3VpZH1gLCBcImFyaWEtbXVsdGlzZWxlY3RhYmxlXCI6IFwidHJ1ZVwiLCBjbGFzczogXCJzY3JlZW4tcmVhZGVycy1vbmx5XCIsIGlkOiBgJHtsaXN0Ym94VWlkUHJlZml4fSR7Z3VpZH1gLCByb2xlOiBcImxpc3Rib3hcIiwgdGFiSW5kZXg6IC0xIH0sIHRoaXMucmVuZGVyTGlzdEJveE9wdGlvbnMoKSksIHRoaXMucmVuZGVyRmxvYXRpbmdVSUNvbnRhaW5lcigpLCBoKEhpZGRlbkZvcm1JbnB1dFNsb3QsIHsgY29tcG9uZW50OiB0aGlzIH0pKSk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcIm9wZW5cIjogW1wib3BlbkhhbmRsZXJcIl0sXG4gICAgXCJkaXNhYmxlZFwiOiBbXCJoYW5kbGVEaXNhYmxlZENoYW5nZVwiXSxcbiAgICBcIm1heEl0ZW1zXCI6IFtcIm1heEl0ZW1zSGFuZGxlclwiXSxcbiAgICBcIm92ZXJsYXlQb3NpdGlvbmluZ1wiOiBbXCJvdmVybGF5UG9zaXRpb25pbmdIYW5kbGVyXCJdLFxuICAgIFwic2VsZWN0aW9uTW9kZVwiOiBbXCJoYW5kbGVQcm9wc0NoYW5nZVwiXSxcbiAgICBcInNjYWxlXCI6IFtcImhhbmRsZVByb3BzQ2hhbmdlXCJdLFxuICAgIFwidmFsdWVcIjogW1widmFsdWVIYW5kbGVyXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZmxpcFBsYWNlbWVudHNcIjogW1wiZmxpcFBsYWNlbWVudHNIYW5kbGVyXCJdLFxuICAgIFwic2VsZWN0ZWRJdGVtc1wiOiBbXCJzZWxlY3RlZEl0ZW1zSGFuZGxlclwiXSxcbiAgICBcInRleHRcIjogW1widGV4dEhhbmRsZXJcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIGNvbWJvYm94Q3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWNvbWJvYm94XCIsIHtcbiAgICBcImNsZWFyRGlzYWJsZWRcIjogWzUxNiwgXCJjbGVhci1kaXNhYmxlZFwiXSxcbiAgICBcInNlbGVjdGlvbkRpc3BsYXlcIjogWzUxMywgXCJzZWxlY3Rpb24tZGlzcGxheVwiXSxcbiAgICBcIm9wZW5cIjogWzE1NDBdLFxuICAgIFwiZGlzYWJsZWRcIjogWzUxNl0sXG4gICAgXCJmb3JtXCI6IFs1MTNdLFxuICAgIFwibGFiZWxcIjogWzFdLFxuICAgIFwicGxhY2Vob2xkZXJcIjogWzFdLFxuICAgIFwicGxhY2Vob2xkZXJJY29uXCI6IFs1MTMsIFwicGxhY2Vob2xkZXItaWNvblwiXSxcbiAgICBcInBsYWNlaG9sZGVySWNvbkZsaXBSdGxcIjogWzUxNiwgXCJwbGFjZWhvbGRlci1pY29uLWZsaXAtcnRsXCJdLFxuICAgIFwibWF4SXRlbXNcIjogWzUxNCwgXCJtYXgtaXRlbXNcIl0sXG4gICAgXCJuYW1lXCI6IFs1MTNdLFxuICAgIFwiYWxsb3dDdXN0b21WYWx1ZXNcIjogWzUxNiwgXCJhbGxvdy1jdXN0b20tdmFsdWVzXCJdLFxuICAgIFwib3ZlcmxheVBvc2l0aW9uaW5nXCI6IFs1MTMsIFwib3ZlcmxheS1wb3NpdGlvbmluZ1wiXSxcbiAgICBcInJlcXVpcmVkXCI6IFs1MTZdLFxuICAgIFwic2VsZWN0aW9uTW9kZVwiOiBbNTEzLCBcInNlbGVjdGlvbi1tb2RlXCJdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJ2YWx1ZVwiOiBbMTAyNV0sXG4gICAgXCJmbGlwUGxhY2VtZW50c1wiOiBbMTZdLFxuICAgIFwibWVzc2FnZXNcIjogWzEwNDBdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJzZWxlY3RlZEl0ZW1zXCI6IFsxMDQwXSxcbiAgICBcImZpbHRlcmVkSXRlbXNcIjogWzEwNDBdLFxuICAgIFwiaXRlbXNcIjogWzMyXSxcbiAgICBcImdyb3VwSXRlbXNcIjogWzMyXSxcbiAgICBcIm5lZWRzSWNvblwiOiBbMzJdLFxuICAgIFwiYWN0aXZlSXRlbUluZGV4XCI6IFszMl0sXG4gICAgXCJhY3RpdmVDaGlwSW5kZXhcIjogWzMyXSxcbiAgICBcImFjdGl2ZURlc2NlbmRhbnRcIjogWzMyXSxcbiAgICBcImNvbXBhY3RTZWxlY3Rpb25EaXNwbGF5XCI6IFszMl0sXG4gICAgXCJzZWxlY3RlZEhpZGRlbkNoaXBzQ291bnRcIjogWzMyXSxcbiAgICBcInNlbGVjdGVkVmlzaWJsZUNoaXBzQ291bnRcIjogWzMyXSxcbiAgICBcInRleHRcIjogWzMyXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJyZXBvc2l0aW9uXCI6IFs2NF0sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdXG4gIH0sIFtbNSwgXCJwb2ludGVyZG93blwiLCBcImRvY3VtZW50Q2xpY2tIYW5kbGVyXCJdLCBbMCwgXCJjYWxjaXRlQ29tYm9ib3hJdGVtQ2hhbmdlXCIsIFwiY2FsY2l0ZUNvbWJvYm94SXRlbUNoYW5nZUhhbmRsZXJcIl1dXSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWNvbWJvYm94XCIsIFwiY2FsY2l0ZS1jaGlwXCIsIFwiY2FsY2l0ZS1pY29uXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWNvbWJvYm94XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgQ29tYm9ib3gpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtY2hpcFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBDb21ib2JveCBhcyBDLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IG8gYXMgbm9kZUxpc3RUb0FycmF5IH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5cbmNvbnN0IENvbWJvYm94SXRlbSA9IFwiQ0FMQ0lURS1DT01CT0JPWC1JVEVNXCI7XG5jb25zdCBDb21ib2JveEl0ZW1Hcm91cCA9IFwiQ0FMQ0lURS1DT01CT0JPWC1JVEVNLUdST1VQXCI7XG5jb25zdCBDb21ib2JveENoaWxkU2VsZWN0b3IgPSBgJHtDb21ib2JveEl0ZW19LCAke0NvbWJvYm94SXRlbUdyb3VwfWA7XG5jb25zdCBDU1MgPSB7XG4gIGNoaXBJbnZpc2libGU6IFwiY2hpcC0taW52aXNpYmxlXCIsXG4gIHNlbGVjdGlvbkRpc3BsYXlGaXQ6IFwic2VsZWN0aW9uLWRpc3BsYXktZml0XCIsXG4gIHNlbGVjdGlvbkRpc3BsYXlTaW5nbGU6IFwic2VsZWN0aW9uLWRpc3BsYXktc2luZ2xlXCIsXG4gIGxpc3RDb250YWluZXI6IFwibGlzdC1jb250YWluZXJcIixcbn07XG5cbmZ1bmN0aW9uIGdldEFuY2VzdG9ycyhlbGVtZW50KSB7XG4gIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudD8uY2xvc2VzdChDb21ib2JveENoaWxkU2VsZWN0b3IpO1xuICBjb25zdCBncmFuZHBhcmVudCA9IHBhcmVudD8ucGFyZW50RWxlbWVudD8uY2xvc2VzdChDb21ib2JveENoaWxkU2VsZWN0b3IpO1xuICByZXR1cm4gW3BhcmVudCwgZ3JhbmRwYXJlbnRdLmZpbHRlcigoZWwpID0+IGVsKTtcbn1cbmZ1bmN0aW9uIGdldEl0ZW1BbmNlc3RvcnMoaXRlbSkge1xuICByZXR1cm4gKGl0ZW0uYW5jZXN0b3JzPy5maWx0ZXIoKGVsKSA9PiBlbC5ub2RlTmFtZSA9PT0gXCJDQUxDSVRFLUNPTUJPQk9YLUlURU1cIikgfHwgW10pO1xufVxuZnVuY3Rpb24gZ2V0SXRlbUNoaWxkcmVuKGl0ZW0pIHtcbiAgcmV0dXJuIG5vZGVMaXN0VG9BcnJheShpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWNvbWJvYm94LWl0ZW1cIikpO1xufVxuZnVuY3Rpb24gaGFzQWN0aXZlQ2hpbGRyZW4obm9kZSkge1xuICBjb25zdCBpdGVtcyA9IG5vZGVMaXN0VG9BcnJheShub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWNvbWJvYm94LWl0ZW1cIikpO1xuICByZXR1cm4gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnNlbGVjdGVkKS5sZW5ndGggPiAwO1xufVxuZnVuY3Rpb24gZ2V0RGVwdGgoZWxlbWVudCkge1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmV2YWx1YXRlKFwiYW5jZXN0b3I6OmNhbGNpdGUtY29tYm9ib3gtaXRlbSB8IGFuY2VzdG9yOjpjYWxjaXRlLWNvbWJvYm94LWl0ZW0tZ3JvdXBcIiwgZWxlbWVudCwgbnVsbCwgWFBhdGhSZXN1bHQuVU5PUkRFUkVEX05PREVfU05BUFNIT1RfVFlQRSwgbnVsbCk7XG4gIHJldHVybiByZXN1bHQuc25hcHNob3RMZW5ndGg7XG59XG5mdW5jdGlvbiBpc1NpbmdsZUxpa2Uoc2VsZWN0aW9uTW9kZSkge1xuICByZXR1cm4gc2VsZWN0aW9uTW9kZS5pbmNsdWRlcyhcInNpbmdsZVwiKTtcbn1cblxuZXhwb3J0IHsgQ1NTIGFzIEMsIGdldERlcHRoIGFzIGEsIENvbWJvYm94Q2hpbGRTZWxlY3RvciBhcyBiLCBnZXRJdGVtQW5jZXN0b3JzIGFzIGMsIGdldEl0ZW1DaGlsZHJlbiBhcyBkLCBDb21ib2JveEl0ZW0gYXMgZSwgQ29tYm9ib3hJdGVtR3JvdXAgYXMgZiwgZ2V0QW5jZXN0b3JzIGFzIGcsIGhhc0FjdGl2ZUNoaWxkcmVuIGFzIGgsIGlzU2luZ2xlTGlrZSBhcyBpIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=