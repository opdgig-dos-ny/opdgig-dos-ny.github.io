"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-list_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-list.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-list.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteList: () => (/* binding */ CalciteList),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _utils3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils3.js */ "./node_modules/@esri/calcite-components/dist/components/utils3.js");
/* harmony import */ var _sortableComponent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sortableComponent.js */ "./node_modules/@esri/calcite-components/dist/components/sortableComponent.js");
/* harmony import */ var _stack_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stack.js */ "./node_modules/@esri/calcite-components/dist/components/stack.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter.js */ "./node_modules/@esri/calcite-components/dist/components/filter.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./input.js */ "./node_modules/@esri/calcite-components/dist/components/input.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./progress.js */ "./node_modules/@esri/calcite-components/dist/components/progress.js");
/* harmony import */ var _scrim_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scrim.js */ "./node_modules/@esri/calcite-components/dist/components/scrim.js");
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./debounce.js */ "./node_modules/@esri/calcite-components/dist/components/debounce.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
















const CSS = {
  container: "container",
  table: "table",
  scrim: "scrim",
  stack: "stack",
  tableContainer: "table-container",
  sticky: "sticky-pos",
  assistiveText: "assistive-text",
};
const debounceTimeout = 0;
const SLOTS = {
  filterActionsStart: "filter-actions-start",
  filterActionsEnd: "filter-actions-end",
};

const listCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{position:relative}.table-container{box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;background-color:transparent}.table-container *{box-sizing:border-box}.table{inline-size:100%;border-collapse:collapse}.stack{--calcite-stack-padding-inline:0;--calcite-stack-padding-block:0}::slotted(calcite-list-item){--tw-shadow:0 -1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 -1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);margin-block-start:1px}::slotted(calcite-list-item:first-of-type){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}::slotted(calcite-list-item[data-filter]){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);margin-block-start:0px}.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-app-z-index-sticky);background-color:var(--calcite-ui-foreground-1)}.sticky-pos th{padding:0px}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}";

const listItemSelector = "calcite-list-item";
const listItemSelectorDirect = `:scope > calcite-list-item`;
const parentSelector = "calcite-list-item-group, calcite-list-item";
const List = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteListChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.createEvent)(this, "calciteListChange", 6);
    this.calciteListFilter = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.createEvent)(this, "calciteListFilter", 6);
    this.calciteListOrderChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.createEvent)(this, "calciteListOrderChange", 6);
    this.calciteInternalListDefaultSlotChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.createEvent)(this, "calciteInternalListDefaultSlotChange", 6);
    this.dragSelector = "calcite-list-item";
    this.enabledListItems = [];
    this.handleSelector = "calcite-handle";
    this.listItems = [];
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_2__.c)("mutation", () => this.updateListItems());
    this.handleDefaultSlotChange = (event) => {
      (0,_utils3_js__WEBPACK_IMPORTED_MODULE_3__.u)((0,_utils3_js__WEBPACK_IMPORTED_MODULE_3__.g)(event.target));
      if (this.parentListEl) {
        this.calciteInternalListDefaultSlotChange.emit();
      }
    };
    this.handleFilterActionsStartSlotChange = (event) => {
      this.hasFilterActionsStart = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.handleFilterActionsEndSlotChange = (event) => {
      this.hasFilterActionsEnd = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.setActiveListItem = () => {
      const { enabledListItems } = this;
      if (!enabledListItems.some((item) => item.active)) {
        if (enabledListItems[0]) {
          enabledListItems[0].active = true;
        }
      }
    };
    this.updateSelectedItems = (emit = false) => {
      this.selectedItems = this.enabledListItems.filter((item) => item.selected);
      if (emit) {
        this.calciteListChange.emit();
      }
    };
    this.updateFilteredItems = (emit = false) => {
      const { listItems, filteredData, filterText } = this;
      const values = filteredData.map((item) => item.value);
      const lastDescendantItems = listItems?.filter((listItem) => listItems.every((li) => li === listItem || !listItem.contains(li)));
      const filteredItems = listItems.filter((item) => !filterText || values.includes(item.value)) || [];
      const visibleParents = new WeakSet();
      lastDescendantItems.forEach((listItem) => this.filterElements({ el: listItem, filteredItems, visibleParents }));
      if (filteredItems.length > 0) {
        this.findAncestorOfFirstFilteredItem(filteredItems);
      }
      this.filteredItems = filteredItems;
      if (emit) {
        this.calciteListFilter.emit();
      }
    };
    this.setFilterEl = (el) => {
      this.filterEl = el;
      this.performFilter();
    };
    this.handleFilterChange = (event) => {
      event.stopPropagation();
      const { value } = event.currentTarget;
      this.filterText = value;
      this.updateFilteredData(true);
    };
    this.getItemData = () => {
      return this.listItems.map((item) => ({
        label: item.label,
        description: item.description,
        metadata: item.metadata,
        value: item.value,
      }));
    };
    this.updateListItems = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_13__.d)((emit = false) => {
      const { selectionAppearance, selectionMode, dragEnabled } = this;
      if (!!this.parentListEl) {
        const items = this.queryListItems(true);
        items.forEach((item) => {
          item.dragHandle = dragEnabled;
        });
        this.setUpSorting();
        return;
      }
      const items = this.queryListItems();
      items.forEach((item) => {
        item.selectionAppearance = selectionAppearance;
        item.selectionMode = selectionMode;
      });
      const dragItems = this.queryListItems(true);
      dragItems.forEach((item) => {
        item.dragHandle = dragEnabled;
      });
      this.listItems = items;
      if (this.filterEnabled) {
        this.dataForFilter = this.getItemData();
        if (this.filterEl) {
          this.filterEl.items = this.dataForFilter;
        }
      }
      this.updateFilteredItems(emit);
      this.enabledListItems = this.filteredItems.filter((item) => !item.disabled && !item.closed);
      this.setActiveListItem();
      this.updateSelectedItems(emit);
      this.setUpSorting();
    }, debounceTimeout);
    this.queryListItems = (direct = false) => {
      return Array.from(this.el.querySelectorAll(direct ? listItemSelectorDirect : listItemSelector));
    };
    this.focusRow = (focusEl) => {
      const { enabledListItems } = this;
      if (!focusEl) {
        return;
      }
      enabledListItems.forEach((listItem) => (listItem.active = listItem === focusEl));
      focusEl.setFocus();
    };
    this.isNavigable = (listItem) => {
      const parentListItemEl = listItem.parentElement?.closest(listItemSelector);
      if (!parentListItemEl) {
        return true;
      }
      return parentListItemEl.open && this.isNavigable(parentListItemEl);
    };
    this.handleListKeydown = (event) => {
      if (event.defaultPrevented || !!this.parentListEl) {
        return;
      }
      const { key } = event;
      const filteredItems = this.enabledListItems.filter((listItem) => this.isNavigable(listItem));
      const currentIndex = filteredItems.findIndex((listItem) => listItem.active);
      if (key === "ArrowDown") {
        event.preventDefault();
        const nextIndex = event.target === this.filterEl ? 0 : currentIndex + 1;
        if (filteredItems[nextIndex]) {
          this.focusRow(filteredItems[nextIndex]);
        }
      }
      else if (key === "ArrowUp") {
        event.preventDefault();
        if (currentIndex === 0 && this.filterEnabled) {
          this.filterEl?.setFocus();
          return;
        }
        const prevIndex = currentIndex - 1;
        if (filteredItems[prevIndex]) {
          this.focusRow(filteredItems[prevIndex]);
        }
      }
      else if (key === "Home") {
        event.preventDefault();
        const homeItem = filteredItems[0];
        if (homeItem) {
          this.focusRow(homeItem);
        }
      }
      else if (key === "End") {
        event.preventDefault();
        const endItem = filteredItems[filteredItems.length - 1];
        if (endItem) {
          this.focusRow(endItem);
        }
      }
    };
    this.findAncestorOfFirstFilteredItem = (filteredItems) => {
      this.ancestorOfFirstFilteredItem?.removeAttribute("data-filter");
      filteredItems.forEach((item) => {
        item.removeAttribute("data-filter");
      });
      this.ancestorOfFirstFilteredItem = this.getTopLevelAncestorItemElement(filteredItems[0]);
      filteredItems[0].setAttribute("data-filter", "0");
      this.ancestorOfFirstFilteredItem?.setAttribute("data-filter", "0");
    };
    this.getTopLevelAncestorItemElement = (el) => {
      let closestParent = el.parentElement.closest("calcite-list-item");
      while (closestParent) {
        const closestListItemAncestor = closestParent.parentElement.closest("calcite-list-item");
        if (closestListItemAncestor) {
          closestParent = closestListItemAncestor;
        }
        else {
          return closestParent;
        }
      }
      return null;
    };
    this.disabled = false;
    this.canPull = undefined;
    this.canPut = undefined;
    this.dragEnabled = false;
    this.group = undefined;
    this.filterEnabled = false;
    this.filteredItems = [];
    this.filteredData = [];
    this.filterPlaceholder = undefined;
    this.filterText = undefined;
    this.label = undefined;
    this.loading = false;
    this.openable = false;
    this.selectedItems = [];
    this.selectionMode = "none";
    this.selectionAppearance = "icon";
    this.assistiveText = undefined;
    this.dataForFilter = [];
    this.hasFilterActionsEnd = false;
    this.hasFilterActionsStart = false;
  }
  async handleFilterTextChange() {
    this.performFilter();
  }
  handleListItemChange() {
    this.updateListItems();
  }
  handleCalciteInternalFocusPreviousItem(event) {
    if (this.parentListEl) {
      return;
    }
    event.stopPropagation();
    const { enabledListItems } = this;
    const currentIndex = enabledListItems.findIndex((listItem) => listItem.active);
    const prevIndex = currentIndex - 1;
    if (enabledListItems[prevIndex]) {
      this.focusRow(enabledListItems[prevIndex]);
    }
  }
  handleCalciteInternalListItemActive(event) {
    if (!!this.parentListEl) {
      return;
    }
    event.stopPropagation();
    const target = event.target;
    const { listItems } = this;
    listItems.forEach((listItem) => {
      listItem.active = listItem === target;
    });
  }
  handleCalciteListItemSelect() {
    if (!!this.parentListEl) {
      return;
    }
    this.updateSelectedItems(true);
  }
  handleCalciteInternalHandleChange(event) {
    this.assistiveText = event.detail.message;
    event.stopPropagation();
  }
  handleCalciteHandleNudge(event) {
    if (!!this.parentListEl) {
      return;
    }
    this.handleNudgeEvent(event);
  }
  handleCalciteInternalListItemSelect(event) {
    if (!!this.parentListEl) {
      return;
    }
    event.stopPropagation();
    const target = event.target;
    const { listItems, selectionMode } = this;
    if (target.selected && (selectionMode === "single" || selectionMode === "single-persist")) {
      listItems.forEach((listItem) => (listItem.selected = listItem === target));
    }
    this.updateSelectedItems();
  }
  handleCalciteInternalListItemChange(event) {
    if (!!this.parentListEl) {
      return;
    }
    event.stopPropagation();
    this.updateListItems();
  }
  handleCalciteInternalListItemGroupDefaultSlotChange(event) {
    event.stopPropagation();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    if ((0,_sortableComponent_js__WEBPACK_IMPORTED_MODULE_4__.d)(this)) {
      return;
    }
    this.connectObserver();
    this.updateListItems();
    this.setUpSorting();
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    this.setParentList();
  }
  disconnectedCallback() {
    if ((0,_sortableComponent_js__WEBPACK_IMPORTED_MODULE_4__.d)(this)) {
      return;
    }
    this.disconnectObserver();
    (0,_sortableComponent_js__WEBPACK_IMPORTED_MODULE_4__.a)(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_6__.a)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Sets focus on the component's first focusable element.
   *
   * @returns {Promise<void>}
   */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    if (this.filterEnabled) {
      return this.filterEl?.setFocus();
    }
    return this.enabledListItems.find((listItem) => listItem.active)?.setFocus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { loading, label, disabled, dataForFilter, filterEnabled, filterPlaceholder, filterText, hasFilterActionsStart, hasFilterActionsEnd, } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.h)("div", { class: CSS.container }, this.dragEnabled ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.h)("span", { "aria-live": "assertive", class: CSS.assistiveText }, this.assistiveText)) : null, loading ? (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.h)("calcite-scrim", { class: CSS.scrim, loading: loading }) : null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.h)("table", { "aria-busy": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(loading), "aria-label": label || "", class: CSS.table, onKeyDown: this.handleListKeydown, role: "treegrid" }, filterEnabled || hasFilterActionsStart || hasFilterActionsEnd ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.h)("thead", null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.h)("tr", { class: { [CSS.sticky]: true } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.h)("th", { colSpan: _utils3_js__WEBPACK_IMPORTED_MODULE_3__.M }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.h)("calcite-stack", { class: CSS.stack }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.h)("slot", { name: SLOTS.filterActionsStart, onSlotchange: this.handleFilterActionsStartSlotChange, slot: _stack_js__WEBPACK_IMPORTED_MODULE_5__.S.actionsStart }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.h)("calcite-filter", { "aria-label": filterPlaceholder, disabled: loading || disabled, items: dataForFilter, onCalciteFilterChange: this.handleFilterChange, placeholder: filterPlaceholder, value: filterText,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setFilterEl }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.h)("slot", { name: SLOTS.filterActionsEnd, onSlotchange: this.handleFilterActionsEndSlotChange, slot: _stack_js__WEBPACK_IMPORTED_MODULE_5__.S.actionsEnd })))))) : null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.h)("tbody", { class: CSS.tableContainer }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.h)("slot", { onSlotchange: this.handleDefaultSlotChange })))));
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  connectObserver() {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
  }
  disconnectObserver() {
    this.mutationObserver?.disconnect();
  }
  setUpSorting() {
    const { dragEnabled } = this;
    if (!dragEnabled) {
      return;
    }
    (0,_sortableComponent_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
  }
  onDragStart() {
    this.disconnectObserver();
  }
  onDragEnd() {
    this.connectObserver();
  }
  onDragSort(detail) {
    this.setParentList();
    this.updateListItems();
    this.calciteListOrderChange.emit(detail);
  }
  setParentList() {
    this.parentListEl = this.el.parentElement?.closest("calcite-list");
  }
  filterElements({ el, filteredItems, visibleParents, }) {
    const hidden = !visibleParents.has(el) && !filteredItems.includes(el);
    el.hidden = hidden;
    const closestParent = el.parentElement.closest(parentSelector);
    if (!closestParent) {
      return;
    }
    if (!hidden) {
      visibleParents.add(closestParent);
    }
    this.filterElements({
      el: closestParent,
      filteredItems,
      visibleParents,
    });
  }
  updateFilteredData(emit = false) {
    const { filterEl } = this;
    if (!filterEl) {
      return;
    }
    if (filterEl.filteredItems) {
      this.filteredData = filterEl.filteredItems;
    }
    this.updateListItems(emit);
  }
  async performFilter() {
    const { filterEl, filterText } = this;
    if (!filterEl) {
      return;
    }
    filterEl.value = filterText;
    await filterEl.filter(filterText);
    this.updateFilteredData();
  }
  handleNudgeEvent(event) {
    const { direction } = event.detail;
    const composedPath = event.composedPath();
    const handle = composedPath.find((el) => el.tagName === "CALCITE-HANDLE");
    const sortItem = composedPath.find((el) => el.tagName === "CALCITE-LIST-ITEM");
    const parentEl = sortItem?.parentElement;
    if (!parentEl) {
      return;
    }
    const { enabledListItems } = this;
    const sameParentItems = enabledListItems.filter((item) => item.parentElement === parentEl);
    const lastIndex = sameParentItems.length - 1;
    const oldIndex = sameParentItems.indexOf(sortItem);
    let appendInstead = false;
    let newIndex;
    if (direction === "up") {
      if (oldIndex === 0) {
        appendInstead = true;
        newIndex = lastIndex;
      }
      else {
        newIndex = oldIndex - 1;
      }
    }
    else {
      if (oldIndex === lastIndex) {
        newIndex = 0;
      }
      else if (oldIndex === lastIndex - 1) {
        appendInstead = true;
        newIndex = lastIndex;
      }
      else {
        newIndex = oldIndex + 2;
      }
    }
    this.disconnectObserver();
    if (appendInstead) {
      parentEl.appendChild(sortItem);
    }
    else {
      parentEl.insertBefore(sortItem, sameParentItems[newIndex]);
    }
    this.updateListItems();
    this.connectObserver();
    this.calciteListOrderChange.emit({
      dragEl: sortItem,
      fromEl: parentEl,
      toEl: parentEl,
      newIndex,
      oldIndex,
    });
    handle.setFocus().then(() => {
      handle.activated = true;
    });
  }
  get el() { return this; }
  static get watchers() { return {
    "filterText": ["handleFilterTextChange"],
    "filterEnabled": ["handleListItemChange"],
    "group": ["handleListItemChange"],
    "dragEnabled": ["handleListItemChange"],
    "selectionMode": ["handleListItemChange"],
    "selectionAppearance": ["handleListItemChange"]
  }; }
  static get style() { return listCss; }
}, [1, "calcite-list", {
    "disabled": [516],
    "canPull": [16],
    "canPut": [16],
    "dragEnabled": [516, "drag-enabled"],
    "group": [513],
    "filterEnabled": [516, "filter-enabled"],
    "filteredItems": [1040],
    "filteredData": [1040],
    "filterPlaceholder": [513, "filter-placeholder"],
    "filterText": [1537, "filter-text"],
    "label": [1],
    "loading": [516],
    "openable": [4],
    "selectedItems": [1040],
    "selectionMode": [513, "selection-mode"],
    "selectionAppearance": [513, "selection-appearance"],
    "assistiveText": [32],
    "dataForFilter": [32],
    "hasFilterActionsEnd": [32],
    "hasFilterActionsStart": [32],
    "setFocus": [64]
  }, [[0, "calciteInternalFocusPreviousItem", "handleCalciteInternalFocusPreviousItem"], [0, "calciteInternalListItemActive", "handleCalciteInternalListItemActive"], [0, "calciteListItemSelect", "handleCalciteListItemSelect"], [0, "calciteInternalHandleChange", "handleCalciteInternalHandleChange"], [0, "calciteHandleNudge", "handleCalciteHandleNudge"], [0, "calciteInternalListItemSelect", "handleCalciteInternalListItemSelect"], [0, "calciteInternalListItemChange", "handleCalciteInternalListItemChange"], [0, "calciteInternalListItemGroupDefaultSlotChange", "handleCalciteInternalListItemGroupDefaultSlotChange"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-list", "calcite-filter", "calcite-icon", "calcite-input", "calcite-loader", "calcite-progress", "calcite-scrim", "calcite-stack"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-list":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, List);
      }
      break;
    case "calcite-filter":
      if (!customElements.get(tagName)) {
        (0,_filter_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
    case "calcite-input":
      if (!customElements.get(tagName)) {
        (0,_input_js__WEBPACK_IMPORTED_MODULE_9__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_10__.d)();
      }
      break;
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        (0,_progress_js__WEBPACK_IMPORTED_MODULE_11__.d)();
      }
      break;
    case "calcite-scrim":
      if (!customElements.get(tagName)) {
        (0,_scrim_js__WEBPACK_IMPORTED_MODULE_12__.d)();
      }
      break;
    case "calcite-stack":
      if (!customElements.get(tagName)) {
        (0,_stack_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteList = List;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/filter.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/filter.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ Filter),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _filter2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter2.js */ "./node_modules/@esri/calcite-components/dist/components/filter2.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input.js */ "./node_modules/@esri/calcite-components/dist/components/input.js");
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./progress.js */ "./node_modules/@esri/calcite-components/dist/components/progress.js");
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./debounce.js */ "./node_modules/@esri/calcite-components/dist/components/debounce.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */











const CSS = {
  container: "container",
  searchIcon: "search-icon",
};
const ICONS = {
  search: "search",
  close: "x",
};
const DEBOUNCE_TIMEOUT = 250;

const filterCss = ":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;inline-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{display:flex;inline-size:100%;padding:0.5rem}label{position:relative;margin-inline:0.25rem;margin-block:0px;display:flex;inline-size:100%;align-items:center;overflow:hidden}input[type=text]{margin-block-end:0.25rem;inline-size:100%;border-style:none;background-color:transparent;padding-block:0.25rem;font-family:inherit;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);padding-inline-end:0.25rem;padding-inline-start:1.5rem;transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}input[type=text]::-ms-clear{display:none}calcite-input{inline-size:100%}.search-icon{position:absolute;display:flex;color:var(--calcite-ui-text-2);inset-inline-start:0;transition:inset-inline-start var(--calcite-animation-timing), inset-inline-end var(--calcite-animation-timing), opacity var(--calcite-animation-timing)}input[type=text]:focus{border-color:var(--calcite-ui-brand);outline:2px solid transparent;outline-offset:2px;padding-inline:0.25rem}input[type=text]:focus~.search-icon{inset-inline-start:calc(1rem * -1);opacity:0}.clear-button{display:flex;cursor:pointer;align-items:center;border-width:0px;background-color:transparent;color:var(--calcite-ui-text-2)}.clear-button:hover,.clear-button:focus{color:var(--calcite-ui-text-1)}:host([hidden]){display:none}[hidden]{display:none}";

const Filter = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteFilterChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteFilterChange", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.filterDebounced = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_8__.d)((value, emit = false, onFilter) => this.updateFiltered((0,_filter2_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.items, value), emit, onFilter), DEBOUNCE_TIMEOUT);
    this.inputHandler = (event) => {
      const target = event.target;
      this.value = target.value;
      this.filterDebounced(target.value, true);
    };
    this.keyDownHandler = (event) => {
      if (event.key === "Escape") {
        this.clear();
        event.preventDefault();
      }
      if (event.key === "Enter") {
        event.preventDefault();
      }
    };
    this.clear = () => {
      this.value = "";
      this.filterDebounced("", true);
      this.setFocus();
    };
    this.items = [];
    this.disabled = false;
    this.filteredItems = [];
    this.placeholder = undefined;
    this.scale = "m";
    this.value = "";
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  watchItemsHandler() {
    this.filterDebounced(this.value);
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  valueHandler(value) {
    this.filterDebounced(value);
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.u)(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
    this.updateFiltered((0,_filter2_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.items, this.value));
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    this.filterDebounced.cancel();
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Performs a filter on the component.
   *
   * This method can be useful because filtering is delayed and asynchronous.
   *
   * @param {string} value - The filter text value.
   * @returns {Promise<void>}
   */
  async filter(value = this.value) {
    return new Promise((resolve) => {
      this.value = value;
      this.filterDebounced(value, false, resolve);
    });
  }
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.el?.focus();
  }
  updateFiltered(filtered, emit = false, callback) {
    this.filteredItems = filtered;
    if (emit) {
      this.calciteFilterChange.emit();
    }
    callback?.();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { disabled, scale } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.Fragment, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: CSS.container }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("label", null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-input", { clearable: true, disabled: disabled, icon: ICONS.search, label: this.messages.label, messageOverrides: { clear: this.messages.clear }, onCalciteInputInput: this.inputHandler, onKeyDown: this.keyDownHandler, placeholder: this.placeholder, scale: scale, type: "text", value: this.value,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => {
        this.textInput = el;
      } })))));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "items": ["watchItemsHandler"],
    "messageOverrides": ["onMessagesChange"],
    "value": ["valueHandler"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return filterCss; }
}, [17, "calcite-filter", {
    "items": [16],
    "disabled": [516],
    "filteredItems": [1040],
    "placeholder": [1],
    "scale": [513],
    "value": [1025],
    "messages": [1040],
    "messageOverrides": [1040],
    "effectiveLocale": [32],
    "defaultMessages": [32],
    "filter": [64],
    "setFocus": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-filter", "calcite-icon", "calcite-input", "calcite-progress"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-filter":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Filter);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
    case "calcite-input":
      if (!customElements.get(tagName)) {
        (0,_input_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        (0,_progress_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
  } });
}
defineCustomElement();




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

/***/ "./node_modules/@esri/calcite-components/dist/components/stack.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/stack.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ SLOTS),
/* harmony export */   a: () => (/* binding */ Stack),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const CSS = {
  container: "container",
  actionsStart: "actions-start",
  contentStart: "content-start",
  content: "content",
  contentEnd: "content-end",
  actionsEnd: "actions-end",
};
const SLOTS = {
  actionsStart: "actions-start",
  contentStart: "content-start",
  contentEnd: "content-end",
  actionsEnd: "actions-end",
};

const stackCss = ":host([disabled]) .content{cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) .content *,:host([disabled]) .content ::slotted(*){pointer-events:none}:host{display:flex;flex:1 1 0%;flex-direction:column}.container{display:flex;flex:1 1 auto;align-items:stretch;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}.content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;font-size:var(--calcite-font-size--2);line-height:1.375;padding-inline:var(--calcite-stack-padding-inline, 0.75rem);padding-block:var(--calcite-stack-padding-block, 0.5rem)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:0 1 auto}.actions-start,.actions-end,.content-start,.content-end{display:flex;align-items:center}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}:host([hidden]){display:none}[hidden]{display:none}";

const Stack = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
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
    this.disabled = false;
    this.hasActionsStart = false;
    this.hasActionsEnd = false;
    this.hasContentStart = false;
    this.hasContentEnd = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderActionsStart() {
    const { hasActionsStart } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: CSS.actionsStart, hidden: !hasActionsStart, key: "actions-start-container" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", { name: SLOTS.actionsStart, onSlotchange: this.handleActionsStartSlotChange })));
  }
  renderActionsEnd() {
    const { hasActionsEnd } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: CSS.actionsEnd, hidden: !hasActionsEnd, key: "actions-end-container" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", { name: SLOTS.actionsEnd, onSlotchange: this.handleActionsEndSlotChange })));
  }
  renderContentStart() {
    const { hasContentStart } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: CSS.contentStart, hidden: !hasContentStart }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", { name: SLOTS.contentStart, onSlotchange: this.handleContentStartSlotChange })));
  }
  renderDefaultContent() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: CSS.content }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null)));
  }
  renderContentEnd() {
    const { hasContentEnd } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: CSS.contentEnd, hidden: !hasContentEnd }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", { name: SLOTS.contentEnd, onSlotchange: this.handleContentEndSlotChange })));
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.Host, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: CSS.container }, this.renderActionsStart(), this.renderContentStart(), this.renderDefaultContent(), this.renderContentEnd(), this.renderActionsEnd())));
  }
  static get style() { return stackCss; }
}, [1, "calcite-stack", {
    "disabled": [516],
    "hasActionsStart": [32],
    "hasActionsEnd": [32],
    "hasContentStart": [32],
    "hasContentEnd": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-stack"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-stack":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Stack);
      }
      break;
  } });
}
defineCustomElement();




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMzJhMjMyMDFkOWI1ZDFiYTU1NzMwMDE3OWFiMDNkZDAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lHO0FBQ3hCO0FBQ2tDO0FBQzlEO0FBQ2lEO0FBQ29CO0FBQ3BEO0FBQ3dDO0FBQ3JEO0FBQ0Y7QUFDQztBQUNDO0FBQ0U7QUFDSDtBQUNWOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQyxlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxjQUFjLHlHQUF5RyxVQUFVLFdBQVcsa0JBQWtCLGlCQUFpQixzQkFBc0IsYUFBYSxpQkFBaUIsc0JBQXNCLDZCQUE2QixtQkFBbUIsc0JBQXNCLE9BQU8saUJBQWlCLHlCQUF5QixPQUFPLGlDQUFpQyxnQ0FBZ0MsNkJBQTZCLGdEQUFnRCxvREFBb0QsdUdBQXVHLHVCQUF1QiwyQ0FBMkMsc0JBQXNCLDhCQUE4Qix1R0FBdUcsMENBQTBDLHNCQUFzQiw4QkFBOEIsdUdBQXVHLHVCQUF1QixZQUFZLGdCQUFnQixzQkFBc0IsMENBQTBDLGdEQUFnRCxlQUFlLFlBQVksZ0JBQWdCLGtCQUFrQixnQkFBZ0IsZUFBZSxVQUFVLFlBQVksZ0JBQWdCLHNCQUFzQixtQkFBbUIsZUFBZSxnQkFBZ0IsYUFBYSxTQUFTLGFBQWE7O0FBRXRxRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkZBQWtCLGVBQWUsZ0ZBQVc7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsb0ZBQVc7QUFDeEMsNkJBQTZCLG9GQUFXO0FBQ3hDLGtDQUFrQyxvRkFBVztBQUM3QyxnREFBZ0Qsb0ZBQVc7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0RBQWM7QUFDMUM7QUFDQSxNQUFNLDZD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LG9CQUFvQixFQUFFLHlFQUFDO0FBQzlDO0FBQ0E7QUFDQSxZQUFZLGdCQUFnQjtBQUM1QixZQUFZLHlFQUFDLFVBQVUsK0NBQStDLEVBQUUseUVBQUMsV0FBVyx1RUFBdUU7QUFDM0o7QUFDQTtBQUNBLFlBQVkseUVBQUMsQ0FBQyx3RUFBSSxRQUFRLHlFQUFDLFVBQVUsc0JBQXNCO0FBQzNEO0FBQ0EsdUJBQXVCO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUU0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGVBQWU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLE9BQU8seUVBQUs7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVvSSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLWxpc3QuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvbG9hZGVyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9zY3JpbS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvc3RhY2suanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3V0aWxzMy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGUgYXMgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudCwgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0SW50ZXJhY3RpdmUsIGQgYXMgZGlzY29ubmVjdEludGVyYWN0aXZlLCB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlTGlzdEl0ZW1DaGlsZHJlbiwgZyBhcyBnZXRMaXN0SXRlbUNoaWxkcmVuLCBNIGFzIE1BWF9DT0xVTU5TIH0gZnJvbSAnLi91dGlsczMuanMnO1xuaW1wb3J0IHsgZCBhcyBkcmFnQWN0aXZlLCBhIGFzIGRpc2Nvbm5lY3RTb3J0YWJsZUNvbXBvbmVudCwgYyBhcyBjb25uZWN0U29ydGFibGVDb21wb25lbnQgfSBmcm9tICcuL3NvcnRhYmxlQ29tcG9uZW50LmpzJztcbmltcG9ydCB7IFMgYXMgU0xPVFMkMSwgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL3N0YWNrLmpzJztcbmltcG9ydCB7IGEgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgcyBhcyBzZXRDb21wb25lbnRMb2FkZWQsIGMgYXMgY29tcG9uZW50Rm9jdXNhYmxlIH0gZnJvbSAnLi9sb2FkYWJsZS5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkOCB9IGZyb20gJy4vZmlsdGVyLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ3IH0gZnJvbSAnLi9pY29uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ2IH0gZnJvbSAnLi9pbnB1dC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNSB9IGZyb20gJy4vbG9hZGVyLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0IH0gZnJvbSAnLi9wcm9ncmVzcy5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMyB9IGZyb20gJy4vc2NyaW0uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWJvdW5jZSB9IGZyb20gJy4vZGVib3VuY2UuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgdGFibGU6IFwidGFibGVcIixcbiAgc2NyaW06IFwic2NyaW1cIixcbiAgc3RhY2s6IFwic3RhY2tcIixcbiAgdGFibGVDb250YWluZXI6IFwidGFibGUtY29udGFpbmVyXCIsXG4gIHN0aWNreTogXCJzdGlja3ktcG9zXCIsXG4gIGFzc2lzdGl2ZVRleHQ6IFwiYXNzaXN0aXZlLXRleHRcIixcbn07XG5jb25zdCBkZWJvdW5jZVRpbWVvdXQgPSAwO1xuY29uc3QgU0xPVFMgPSB7XG4gIGZpbHRlckFjdGlvbnNTdGFydDogXCJmaWx0ZXItYWN0aW9ucy1zdGFydFwiLFxuICBmaWx0ZXJBY3Rpb25zRW5kOiBcImZpbHRlci1hY3Rpb25zLWVuZFwiLFxufTtcblxuY29uc3QgbGlzdENzcyA9IFwiOmhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7ZGlzcGxheTpibG9ja306aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9LmNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZX0udGFibGUtY29udGFpbmVye2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0udGFibGUtY29udGFpbmVyICp7Ym94LXNpemluZzpib3JkZXItYm94fS50YWJsZXtpbmxpbmUtc2l6ZToxMDAlO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZX0uc3RhY2t7LS1jYWxjaXRlLXN0YWNrLXBhZGRpbmctaW5saW5lOjA7LS1jYWxjaXRlLXN0YWNrLXBhZGRpbmctYmxvY2s6MH06OnNsb3R0ZWQoY2FsY2l0ZS1saXN0LWl0ZW0pey0tdHctc2hhZG93OjAgLTFweCAwIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpOy0tdHctc2hhZG93LWNvbG9yZWQ6MCAtMXB4IDAgdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7bWFyZ2luLWJsb2NrLXN0YXJ0OjFweH06OnNsb3R0ZWQoY2FsY2l0ZS1saXN0LWl0ZW06Zmlyc3Qtb2YtdHlwZSl7LS10dy1zaGFkb3c6MCAwICMwMDAwOy0tdHctc2hhZG93LWNvbG9yZWQ6MCAwICMwMDAwO2JveC1zaGFkb3c6dmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KX06OnNsb3R0ZWQoY2FsY2l0ZS1saXN0LWl0ZW1bZGF0YS1maWx0ZXJdKXstLXR3LXNoYWRvdzowIDAgIzAwMDA7LS10dy1zaGFkb3ctY29sb3JlZDowIDAgIzAwMDA7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO21hcmdpbi1ibG9jay1zdGFydDowcHh9LnN0aWNreS1wb3N7cG9zaXRpb246c3RpY2t5O2luc2V0LWJsb2NrLXN0YXJ0OjBweDt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtc3RpY2t5KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX0uc3RpY2t5LXBvcyB0aHtwYWRkaW5nOjBweH0uYXNzaXN0aXZlLXRleHR7cG9zaXRpb246YWJzb2x1dGU7aW5saW5lLXNpemU6MXB4O2Jsb2NrLXNpemU6MXB4O3BhZGRpbmc6MDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47Y2xpcDpyZWN0KDAsIDAsIDAsIDApO3doaXRlLXNwYWNlOm5vd3JhcDtib3JkZXItd2lkdGg6MH06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgbGlzdEl0ZW1TZWxlY3RvciA9IFwiY2FsY2l0ZS1saXN0LWl0ZW1cIjtcbmNvbnN0IGxpc3RJdGVtU2VsZWN0b3JEaXJlY3QgPSBgOnNjb3BlID4gY2FsY2l0ZS1saXN0LWl0ZW1gO1xuY29uc3QgcGFyZW50U2VsZWN0b3IgPSBcImNhbGNpdGUtbGlzdC1pdGVtLWdyb3VwLCBjYWxjaXRlLWxpc3QtaXRlbVwiO1xuY29uc3QgTGlzdCA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlTGlzdENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUxpc3RDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlTGlzdEZpbHRlciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUxpc3RGaWx0ZXJcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlTGlzdE9yZGVyQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlTGlzdE9yZGVyQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsTGlzdERlZmF1bHRTbG90Q2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxMaXN0RGVmYXVsdFNsb3RDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5kcmFnU2VsZWN0b3IgPSBcImNhbGNpdGUtbGlzdC1pdGVtXCI7XG4gICAgdGhpcy5lbmFibGVkTGlzdEl0ZW1zID0gW107XG4gICAgdGhpcy5oYW5kbGVTZWxlY3RvciA9IFwiY2FsY2l0ZS1oYW5kbGVcIjtcbiAgICB0aGlzLmxpc3RJdGVtcyA9IFtdO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgKCkgPT4gdGhpcy51cGRhdGVMaXN0SXRlbXMoKSk7XG4gICAgdGhpcy5oYW5kbGVEZWZhdWx0U2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdXBkYXRlTGlzdEl0ZW1DaGlsZHJlbihnZXRMaXN0SXRlbUNoaWxkcmVuKGV2ZW50LnRhcmdldCkpO1xuICAgICAgaWYgKHRoaXMucGFyZW50TGlzdEVsKSB7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsTGlzdERlZmF1bHRTbG90Q2hhbmdlLmVtaXQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyQWN0aW9uc1N0YXJ0U2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNGaWx0ZXJBY3Rpb25zU3RhcnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyQWN0aW9uc0VuZFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzRmlsdGVyQWN0aW9uc0VuZCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5zZXRBY3RpdmVMaXN0SXRlbSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZW5hYmxlZExpc3RJdGVtcyB9ID0gdGhpcztcbiAgICAgIGlmICghZW5hYmxlZExpc3RJdGVtcy5zb21lKChpdGVtKSA9PiBpdGVtLmFjdGl2ZSkpIHtcbiAgICAgICAgaWYgKGVuYWJsZWRMaXN0SXRlbXNbMF0pIHtcbiAgICAgICAgICBlbmFibGVkTGlzdEl0ZW1zWzBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRJdGVtcyA9IChlbWl0ID0gZmFsc2UpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IHRoaXMuZW5hYmxlZExpc3RJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc2VsZWN0ZWQpO1xuICAgICAgaWYgKGVtaXQpIHtcbiAgICAgICAgdGhpcy5jYWxjaXRlTGlzdENoYW5nZS5lbWl0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcmVkSXRlbXMgPSAoZW1pdCA9IGZhbHNlKSA9PiB7XG4gICAgICBjb25zdCB7IGxpc3RJdGVtcywgZmlsdGVyZWREYXRhLCBmaWx0ZXJUZXh0IH0gPSB0aGlzO1xuICAgICAgY29uc3QgdmFsdWVzID0gZmlsdGVyZWREYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSk7XG4gICAgICBjb25zdCBsYXN0RGVzY2VuZGFudEl0ZW1zID0gbGlzdEl0ZW1zPy5maWx0ZXIoKGxpc3RJdGVtKSA9PiBsaXN0SXRlbXMuZXZlcnkoKGxpKSA9PiBsaSA9PT0gbGlzdEl0ZW0gfHwgIWxpc3RJdGVtLmNvbnRhaW5zKGxpKSkpO1xuICAgICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IGxpc3RJdGVtcy5maWx0ZXIoKGl0ZW0pID0+ICFmaWx0ZXJUZXh0IHx8IHZhbHVlcy5pbmNsdWRlcyhpdGVtLnZhbHVlKSkgfHwgW107XG4gICAgICBjb25zdCB2aXNpYmxlUGFyZW50cyA9IG5ldyBXZWFrU2V0KCk7XG4gICAgICBsYXN0RGVzY2VuZGFudEl0ZW1zLmZvckVhY2goKGxpc3RJdGVtKSA9PiB0aGlzLmZpbHRlckVsZW1lbnRzKHsgZWw6IGxpc3RJdGVtLCBmaWx0ZXJlZEl0ZW1zLCB2aXNpYmxlUGFyZW50cyB9KSk7XG4gICAgICBpZiAoZmlsdGVyZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuZmluZEFuY2VzdG9yT2ZGaXJzdEZpbHRlcmVkSXRlbShmaWx0ZXJlZEl0ZW1zKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IGZpbHRlcmVkSXRlbXM7XG4gICAgICBpZiAoZW1pdCkge1xuICAgICAgICB0aGlzLmNhbGNpdGVMaXN0RmlsdGVyLmVtaXQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2V0RmlsdGVyRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuZmlsdGVyRWwgPSBlbDtcbiAgICAgIHRoaXMucGVyZm9ybUZpbHRlcigpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIHRoaXMuZmlsdGVyVGV4dCA9IHZhbHVlO1xuICAgICAgdGhpcy51cGRhdGVGaWx0ZXJlZERhdGEodHJ1ZSk7XG4gICAgfTtcbiAgICB0aGlzLmdldEl0ZW1EYXRhID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMubGlzdEl0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgICAgbGFiZWw6IGl0ZW0ubGFiZWwsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLFxuICAgICAgICBtZXRhZGF0YTogaXRlbS5tZXRhZGF0YSxcbiAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXG4gICAgICB9KSk7XG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUxpc3RJdGVtcyA9IGRlYm91bmNlKChlbWl0ID0gZmFsc2UpID0+IHtcbiAgICAgIGNvbnN0IHsgc2VsZWN0aW9uQXBwZWFyYW5jZSwgc2VsZWN0aW9uTW9kZSwgZHJhZ0VuYWJsZWQgfSA9IHRoaXM7XG4gICAgICBpZiAoISF0aGlzLnBhcmVudExpc3RFbCkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMucXVlcnlMaXN0SXRlbXModHJ1ZSk7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBpdGVtLmRyYWdIYW5kbGUgPSBkcmFnRW5hYmxlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0VXBTb3J0aW5nKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5xdWVyeUxpc3RJdGVtcygpO1xuICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLnNlbGVjdGlvbkFwcGVhcmFuY2UgPSBzZWxlY3Rpb25BcHBlYXJhbmNlO1xuICAgICAgICBpdGVtLnNlbGVjdGlvbk1vZGUgPSBzZWxlY3Rpb25Nb2RlO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBkcmFnSXRlbXMgPSB0aGlzLnF1ZXJ5TGlzdEl0ZW1zKHRydWUpO1xuICAgICAgZHJhZ0l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5kcmFnSGFuZGxlID0gZHJhZ0VuYWJsZWQ7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlzdEl0ZW1zID0gaXRlbXM7XG4gICAgICBpZiAodGhpcy5maWx0ZXJFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuZGF0YUZvckZpbHRlciA9IHRoaXMuZ2V0SXRlbURhdGEoKTtcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyRWwpIHtcbiAgICAgICAgICB0aGlzLmZpbHRlckVsLml0ZW1zID0gdGhpcy5kYXRhRm9yRmlsdGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZUZpbHRlcmVkSXRlbXMoZW1pdCk7XG4gICAgICB0aGlzLmVuYWJsZWRMaXN0SXRlbXMgPSB0aGlzLmZpbHRlcmVkSXRlbXMuZmlsdGVyKChpdGVtKSA9PiAhaXRlbS5kaXNhYmxlZCAmJiAhaXRlbS5jbG9zZWQpO1xuICAgICAgdGhpcy5zZXRBY3RpdmVMaXN0SXRlbSgpO1xuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZEl0ZW1zKGVtaXQpO1xuICAgICAgdGhpcy5zZXRVcFNvcnRpbmcoKTtcbiAgICB9LCBkZWJvdW5jZVRpbWVvdXQpO1xuICAgIHRoaXMucXVlcnlMaXN0SXRlbXMgPSAoZGlyZWN0ID0gZmFsc2UpID0+IHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChkaXJlY3QgPyBsaXN0SXRlbVNlbGVjdG9yRGlyZWN0IDogbGlzdEl0ZW1TZWxlY3RvcikpO1xuICAgIH07XG4gICAgdGhpcy5mb2N1c1JvdyA9IChmb2N1c0VsKSA9PiB7XG4gICAgICBjb25zdCB7IGVuYWJsZWRMaXN0SXRlbXMgfSA9IHRoaXM7XG4gICAgICBpZiAoIWZvY3VzRWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZW5hYmxlZExpc3RJdGVtcy5mb3JFYWNoKChsaXN0SXRlbSkgPT4gKGxpc3RJdGVtLmFjdGl2ZSA9IGxpc3RJdGVtID09PSBmb2N1c0VsKSk7XG4gICAgICBmb2N1c0VsLnNldEZvY3VzKCk7XG4gICAgfTtcbiAgICB0aGlzLmlzTmF2aWdhYmxlID0gKGxpc3RJdGVtKSA9PiB7XG4gICAgICBjb25zdCBwYXJlbnRMaXN0SXRlbUVsID0gbGlzdEl0ZW0ucGFyZW50RWxlbWVudD8uY2xvc2VzdChsaXN0SXRlbVNlbGVjdG9yKTtcbiAgICAgIGlmICghcGFyZW50TGlzdEl0ZW1FbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXJlbnRMaXN0SXRlbUVsLm9wZW4gJiYgdGhpcy5pc05hdmlnYWJsZShwYXJlbnRMaXN0SXRlbUVsKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlTGlzdEtleWRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkIHx8ICEhdGhpcy5wYXJlbnRMaXN0RWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHRoaXMuZW5hYmxlZExpc3RJdGVtcy5maWx0ZXIoKGxpc3RJdGVtKSA9PiB0aGlzLmlzTmF2aWdhYmxlKGxpc3RJdGVtKSk7XG4gICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBmaWx0ZXJlZEl0ZW1zLmZpbmRJbmRleCgobGlzdEl0ZW0pID0+IGxpc3RJdGVtLmFjdGl2ZSk7XG4gICAgICBpZiAoa2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGV2ZW50LnRhcmdldCA9PT0gdGhpcy5maWx0ZXJFbCA/IDAgOiBjdXJyZW50SW5kZXggKyAxO1xuICAgICAgICBpZiAoZmlsdGVyZWRJdGVtc1tuZXh0SW5kZXhdKSB7XG4gICAgICAgICAgdGhpcy5mb2N1c1JvdyhmaWx0ZXJlZEl0ZW1zW25leHRJbmRleF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPT09IDAgJiYgdGhpcy5maWx0ZXJFbmFibGVkKSB7XG4gICAgICAgICAgdGhpcy5maWx0ZXJFbD8uc2V0Rm9jdXMoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcbiAgICAgICAgaWYgKGZpbHRlcmVkSXRlbXNbcHJldkluZGV4XSkge1xuICAgICAgICAgIHRoaXMuZm9jdXNSb3coZmlsdGVyZWRJdGVtc1twcmV2SW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoa2V5ID09PSBcIkhvbWVcIikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBob21lSXRlbSA9IGZpbHRlcmVkSXRlbXNbMF07XG4gICAgICAgIGlmIChob21lSXRlbSkge1xuICAgICAgICAgIHRoaXMuZm9jdXNSb3coaG9tZUl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT09IFwiRW5kXCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZW5kSXRlbSA9IGZpbHRlcmVkSXRlbXNbZmlsdGVyZWRJdGVtcy5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGVuZEl0ZW0pIHtcbiAgICAgICAgICB0aGlzLmZvY3VzUm93KGVuZEl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmZpbmRBbmNlc3Rvck9mRmlyc3RGaWx0ZXJlZEl0ZW0gPSAoZmlsdGVyZWRJdGVtcykgPT4ge1xuICAgICAgdGhpcy5hbmNlc3Rvck9mRmlyc3RGaWx0ZXJlZEl0ZW0/LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtZmlsdGVyXCIpO1xuICAgICAgZmlsdGVyZWRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1maWx0ZXJcIik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYW5jZXN0b3JPZkZpcnN0RmlsdGVyZWRJdGVtID0gdGhpcy5nZXRUb3BMZXZlbEFuY2VzdG9ySXRlbUVsZW1lbnQoZmlsdGVyZWRJdGVtc1swXSk7XG4gICAgICBmaWx0ZXJlZEl0ZW1zWzBdLnNldEF0dHJpYnV0ZShcImRhdGEtZmlsdGVyXCIsIFwiMFwiKTtcbiAgICAgIHRoaXMuYW5jZXN0b3JPZkZpcnN0RmlsdGVyZWRJdGVtPy5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZpbHRlclwiLCBcIjBcIik7XG4gICAgfTtcbiAgICB0aGlzLmdldFRvcExldmVsQW5jZXN0b3JJdGVtRWxlbWVudCA9IChlbCkgPT4ge1xuICAgICAgbGV0IGNsb3Nlc3RQYXJlbnQgPSBlbC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoXCJjYWxjaXRlLWxpc3QtaXRlbVwiKTtcbiAgICAgIHdoaWxlIChjbG9zZXN0UGFyZW50KSB7XG4gICAgICAgIGNvbnN0IGNsb3Nlc3RMaXN0SXRlbUFuY2VzdG9yID0gY2xvc2VzdFBhcmVudC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoXCJjYWxjaXRlLWxpc3QtaXRlbVwiKTtcbiAgICAgICAgaWYgKGNsb3Nlc3RMaXN0SXRlbUFuY2VzdG9yKSB7XG4gICAgICAgICAgY2xvc2VzdFBhcmVudCA9IGNsb3Nlc3RMaXN0SXRlbUFuY2VzdG9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJldHVybiBjbG9zZXN0UGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNhblB1bGwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jYW5QdXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ3JvdXAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5maWx0ZXJFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gW107XG4gICAgdGhpcy5maWx0ZXJlZERhdGEgPSBbXTtcbiAgICB0aGlzLmZpbHRlclBsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZmlsdGVyVGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMub3BlbmFibGUgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPSBcIm5vbmVcIjtcbiAgICB0aGlzLnNlbGVjdGlvbkFwcGVhcmFuY2UgPSBcImljb25cIjtcbiAgICB0aGlzLmFzc2lzdGl2ZVRleHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kYXRhRm9yRmlsdGVyID0gW107XG4gICAgdGhpcy5oYXNGaWx0ZXJBY3Rpb25zRW5kID0gZmFsc2U7XG4gICAgdGhpcy5oYXNGaWx0ZXJBY3Rpb25zU3RhcnQgPSBmYWxzZTtcbiAgfVxuICBhc3luYyBoYW5kbGVGaWx0ZXJUZXh0Q2hhbmdlKCkge1xuICAgIHRoaXMucGVyZm9ybUZpbHRlcigpO1xuICB9XG4gIGhhbmRsZUxpc3RJdGVtQ2hhbmdlKCkge1xuICAgIHRoaXMudXBkYXRlTGlzdEl0ZW1zKCk7XG4gIH1cbiAgaGFuZGxlQ2FsY2l0ZUludGVybmFsRm9jdXNQcmV2aW91c0l0ZW0oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5wYXJlbnRMaXN0RWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgeyBlbmFibGVkTGlzdEl0ZW1zIH0gPSB0aGlzO1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGVuYWJsZWRMaXN0SXRlbXMuZmluZEluZGV4KChsaXN0SXRlbSkgPT4gbGlzdEl0ZW0uYWN0aXZlKTtcbiAgICBjb25zdCBwcmV2SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xuICAgIGlmIChlbmFibGVkTGlzdEl0ZW1zW3ByZXZJbmRleF0pIHtcbiAgICAgIHRoaXMuZm9jdXNSb3coZW5hYmxlZExpc3RJdGVtc1twcmV2SW5kZXhdKTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlQ2FsY2l0ZUludGVybmFsTGlzdEl0ZW1BY3RpdmUoZXZlbnQpIHtcbiAgICBpZiAoISF0aGlzLnBhcmVudExpc3RFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgeyBsaXN0SXRlbXMgfSA9IHRoaXM7XG4gICAgbGlzdEl0ZW1zLmZvckVhY2goKGxpc3RJdGVtKSA9PiB7XG4gICAgICBsaXN0SXRlbS5hY3RpdmUgPSBsaXN0SXRlbSA9PT0gdGFyZ2V0O1xuICAgIH0pO1xuICB9XG4gIGhhbmRsZUNhbGNpdGVMaXN0SXRlbVNlbGVjdCgpIHtcbiAgICBpZiAoISF0aGlzLnBhcmVudExpc3RFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkSXRlbXModHJ1ZSk7XG4gIH1cbiAgaGFuZGxlQ2FsY2l0ZUludGVybmFsSGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5hc3Npc3RpdmVUZXh0ID0gZXZlbnQuZGV0YWlsLm1lc3NhZ2U7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgaGFuZGxlQ2FsY2l0ZUhhbmRsZU51ZGdlKGV2ZW50KSB7XG4gICAgaWYgKCEhdGhpcy5wYXJlbnRMaXN0RWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVOdWRnZUV2ZW50KGV2ZW50KTtcbiAgfVxuICBoYW5kbGVDYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVNlbGVjdChldmVudCkge1xuICAgIGlmICghIXRoaXMucGFyZW50TGlzdEVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCB7IGxpc3RJdGVtcywgc2VsZWN0aW9uTW9kZSB9ID0gdGhpcztcbiAgICBpZiAodGFyZ2V0LnNlbGVjdGVkICYmIChzZWxlY3Rpb25Nb2RlID09PSBcInNpbmdsZVwiIHx8IHNlbGVjdGlvbk1vZGUgPT09IFwic2luZ2xlLXBlcnNpc3RcIikpIHtcbiAgICAgIGxpc3RJdGVtcy5mb3JFYWNoKChsaXN0SXRlbSkgPT4gKGxpc3RJdGVtLnNlbGVjdGVkID0gbGlzdEl0ZW0gPT09IHRhcmdldCkpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkSXRlbXMoKTtcbiAgfVxuICBoYW5kbGVDYWxjaXRlSW50ZXJuYWxMaXN0SXRlbUNoYW5nZShldmVudCkge1xuICAgIGlmICghIXRoaXMucGFyZW50TGlzdEVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMudXBkYXRlTGlzdEl0ZW1zKCk7XG4gIH1cbiAgaGFuZGxlQ2FsY2l0ZUludGVybmFsTGlzdEl0ZW1Hcm91cERlZmF1bHRTbG90Q2hhbmdlKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKGRyYWdBY3RpdmUodGhpcykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb25uZWN0T2JzZXJ2ZXIoKTtcbiAgICB0aGlzLnVwZGF0ZUxpc3RJdGVtcygpO1xuICAgIHRoaXMuc2V0VXBTb3J0aW5nKCk7XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIHRoaXMuc2V0UGFyZW50TGlzdCgpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmIChkcmFnQWN0aXZlKHRoaXMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGlzY29ubmVjdE9ic2VydmVyKCk7XG4gICAgZGlzY29ubmVjdFNvcnRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgfVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQncyBmaXJzdCBmb2N1c2FibGUgZWxlbWVudC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRGb2N1c2FibGUodGhpcyk7XG4gICAgaWYgKHRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyRWw/LnNldEZvY3VzKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVuYWJsZWRMaXN0SXRlbXMuZmluZCgobGlzdEl0ZW0pID0+IGxpc3RJdGVtLmFjdGl2ZSk/LnNldEZvY3VzKCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxvYWRpbmcsIGxhYmVsLCBkaXNhYmxlZCwgZGF0YUZvckZpbHRlciwgZmlsdGVyRW5hYmxlZCwgZmlsdGVyUGxhY2Vob2xkZXIsIGZpbHRlclRleHQsIGhhc0ZpbHRlckFjdGlvbnNTdGFydCwgaGFzRmlsdGVyQWN0aW9uc0VuZCwgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250YWluZXIgfSwgdGhpcy5kcmFnRW5hYmxlZCA/IChoKFwic3BhblwiLCB7IFwiYXJpYS1saXZlXCI6IFwiYXNzZXJ0aXZlXCIsIGNsYXNzOiBDU1MuYXNzaXN0aXZlVGV4dCB9LCB0aGlzLmFzc2lzdGl2ZVRleHQpKSA6IG51bGwsIGxvYWRpbmcgPyBoKFwiY2FsY2l0ZS1zY3JpbVwiLCB7IGNsYXNzOiBDU1Muc2NyaW0sIGxvYWRpbmc6IGxvYWRpbmcgfSkgOiBudWxsLCBoKFwidGFibGVcIiwgeyBcImFyaWEtYnVzeVwiOiB0b0FyaWFCb29sZWFuKGxvYWRpbmcpLCBcImFyaWEtbGFiZWxcIjogbGFiZWwgfHwgXCJcIiwgY2xhc3M6IENTUy50YWJsZSwgb25LZXlEb3duOiB0aGlzLmhhbmRsZUxpc3RLZXlkb3duLCByb2xlOiBcInRyZWVncmlkXCIgfSwgZmlsdGVyRW5hYmxlZCB8fCBoYXNGaWx0ZXJBY3Rpb25zU3RhcnQgfHwgaGFzRmlsdGVyQWN0aW9uc0VuZCA/IChoKFwidGhlYWRcIiwgbnVsbCwgaChcInRyXCIsIHsgY2xhc3M6IHsgW0NTUy5zdGlja3ldOiB0cnVlIH0gfSwgaChcInRoXCIsIHsgY29sU3BhbjogTUFYX0NPTFVNTlMgfSwgaChcImNhbGNpdGUtc3RhY2tcIiwgeyBjbGFzczogQ1NTLnN0YWNrIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuZmlsdGVyQWN0aW9uc1N0YXJ0LCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlRmlsdGVyQWN0aW9uc1N0YXJ0U2xvdENoYW5nZSwgc2xvdDogU0xPVFMkMS5hY3Rpb25zU3RhcnQgfSksIGgoXCJjYWxjaXRlLWZpbHRlclwiLCB7IFwiYXJpYS1sYWJlbFwiOiBmaWx0ZXJQbGFjZWhvbGRlciwgZGlzYWJsZWQ6IGxvYWRpbmcgfHwgZGlzYWJsZWQsIGl0ZW1zOiBkYXRhRm9yRmlsdGVyLCBvbkNhbGNpdGVGaWx0ZXJDaGFuZ2U6IHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlLCBwbGFjZWhvbGRlcjogZmlsdGVyUGxhY2Vob2xkZXIsIHZhbHVlOiBmaWx0ZXJUZXh0LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zZXRGaWx0ZXJFbCB9KSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5maWx0ZXJBY3Rpb25zRW5kLCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlRmlsdGVyQWN0aW9uc0VuZFNsb3RDaGFuZ2UsIHNsb3Q6IFNMT1RTJDEuYWN0aW9uc0VuZCB9KSkpKSkpIDogbnVsbCwgaChcInRib2R5XCIsIHsgY2xhc3M6IENTUy50YWJsZUNvbnRhaW5lciB9LCBoKFwic2xvdFwiLCB7IG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVEZWZhdWx0U2xvdENoYW5nZSB9KSkpKSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0T2JzZXJ2ZXIoKSB7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICB9XG4gIGRpc2Nvbm5lY3RPYnNlcnZlcigpIHtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgfVxuICBzZXRVcFNvcnRpbmcoKSB7XG4gICAgY29uc3QgeyBkcmFnRW5hYmxlZCB9ID0gdGhpcztcbiAgICBpZiAoIWRyYWdFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbm5lY3RTb3J0YWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBvbkRyYWdTdGFydCgpIHtcbiAgICB0aGlzLmRpc2Nvbm5lY3RPYnNlcnZlcigpO1xuICB9XG4gIG9uRHJhZ0VuZCgpIHtcbiAgICB0aGlzLmNvbm5lY3RPYnNlcnZlcigpO1xuICB9XG4gIG9uRHJhZ1NvcnQoZGV0YWlsKSB7XG4gICAgdGhpcy5zZXRQYXJlbnRMaXN0KCk7XG4gICAgdGhpcy51cGRhdGVMaXN0SXRlbXMoKTtcbiAgICB0aGlzLmNhbGNpdGVMaXN0T3JkZXJDaGFuZ2UuZW1pdChkZXRhaWwpO1xuICB9XG4gIHNldFBhcmVudExpc3QoKSB7XG4gICAgdGhpcy5wYXJlbnRMaXN0RWwgPSB0aGlzLmVsLnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoXCJjYWxjaXRlLWxpc3RcIik7XG4gIH1cbiAgZmlsdGVyRWxlbWVudHMoeyBlbCwgZmlsdGVyZWRJdGVtcywgdmlzaWJsZVBhcmVudHMsIH0pIHtcbiAgICBjb25zdCBoaWRkZW4gPSAhdmlzaWJsZVBhcmVudHMuaGFzKGVsKSAmJiAhZmlsdGVyZWRJdGVtcy5pbmNsdWRlcyhlbCk7XG4gICAgZWwuaGlkZGVuID0gaGlkZGVuO1xuICAgIGNvbnN0IGNsb3Nlc3RQYXJlbnQgPSBlbC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QocGFyZW50U2VsZWN0b3IpO1xuICAgIGlmICghY2xvc2VzdFBhcmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWhpZGRlbikge1xuICAgICAgdmlzaWJsZVBhcmVudHMuYWRkKGNsb3Nlc3RQYXJlbnQpO1xuICAgIH1cbiAgICB0aGlzLmZpbHRlckVsZW1lbnRzKHtcbiAgICAgIGVsOiBjbG9zZXN0UGFyZW50LFxuICAgICAgZmlsdGVyZWRJdGVtcyxcbiAgICAgIHZpc2libGVQYXJlbnRzLFxuICAgIH0pO1xuICB9XG4gIHVwZGF0ZUZpbHRlcmVkRGF0YShlbWl0ID0gZmFsc2UpIHtcbiAgICBjb25zdCB7IGZpbHRlckVsIH0gPSB0aGlzO1xuICAgIGlmICghZmlsdGVyRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGZpbHRlckVsLmZpbHRlcmVkSXRlbXMpIHtcbiAgICAgIHRoaXMuZmlsdGVyZWREYXRhID0gZmlsdGVyRWwuZmlsdGVyZWRJdGVtcztcbiAgICB9XG4gICAgdGhpcy51cGRhdGVMaXN0SXRlbXMoZW1pdCk7XG4gIH1cbiAgYXN5bmMgcGVyZm9ybUZpbHRlcigpIHtcbiAgICBjb25zdCB7IGZpbHRlckVsLCBmaWx0ZXJUZXh0IH0gPSB0aGlzO1xuICAgIGlmICghZmlsdGVyRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmlsdGVyRWwudmFsdWUgPSBmaWx0ZXJUZXh0O1xuICAgIGF3YWl0IGZpbHRlckVsLmZpbHRlcihmaWx0ZXJUZXh0KTtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcmVkRGF0YSgpO1xuICB9XG4gIGhhbmRsZU51ZGdlRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IGRpcmVjdGlvbiB9ID0gZXZlbnQuZGV0YWlsO1xuICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgIGNvbnN0IGhhbmRsZSA9IGNvbXBvc2VkUGF0aC5maW5kKChlbCkgPT4gZWwudGFnTmFtZSA9PT0gXCJDQUxDSVRFLUhBTkRMRVwiKTtcbiAgICBjb25zdCBzb3J0SXRlbSA9IGNvbXBvc2VkUGF0aC5maW5kKChlbCkgPT4gZWwudGFnTmFtZSA9PT0gXCJDQUxDSVRFLUxJU1QtSVRFTVwiKTtcbiAgICBjb25zdCBwYXJlbnRFbCA9IHNvcnRJdGVtPy5wYXJlbnRFbGVtZW50O1xuICAgIGlmICghcGFyZW50RWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBlbmFibGVkTGlzdEl0ZW1zIH0gPSB0aGlzO1xuICAgIGNvbnN0IHNhbWVQYXJlbnRJdGVtcyA9IGVuYWJsZWRMaXN0SXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnBhcmVudEVsZW1lbnQgPT09IHBhcmVudEVsKTtcbiAgICBjb25zdCBsYXN0SW5kZXggPSBzYW1lUGFyZW50SXRlbXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBvbGRJbmRleCA9IHNhbWVQYXJlbnRJdGVtcy5pbmRleE9mKHNvcnRJdGVtKTtcbiAgICBsZXQgYXBwZW5kSW5zdGVhZCA9IGZhbHNlO1xuICAgIGxldCBuZXdJbmRleDtcbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpIHtcbiAgICAgIGlmIChvbGRJbmRleCA9PT0gMCkge1xuICAgICAgICBhcHBlbmRJbnN0ZWFkID0gdHJ1ZTtcbiAgICAgICAgbmV3SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV3SW5kZXggPSBvbGRJbmRleCAtIDE7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKG9sZEluZGV4ID09PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgbmV3SW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAob2xkSW5kZXggPT09IGxhc3RJbmRleCAtIDEpIHtcbiAgICAgICAgYXBwZW5kSW5zdGVhZCA9IHRydWU7XG4gICAgICAgIG5ld0luZGV4ID0gbGFzdEluZGV4O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5ld0luZGV4ID0gb2xkSW5kZXggKyAyO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmRpc2Nvbm5lY3RPYnNlcnZlcigpO1xuICAgIGlmIChhcHBlbmRJbnN0ZWFkKSB7XG4gICAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZChzb3J0SXRlbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcGFyZW50RWwuaW5zZXJ0QmVmb3JlKHNvcnRJdGVtLCBzYW1lUGFyZW50SXRlbXNbbmV3SW5kZXhdKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVMaXN0SXRlbXMoKTtcbiAgICB0aGlzLmNvbm5lY3RPYnNlcnZlcigpO1xuICAgIHRoaXMuY2FsY2l0ZUxpc3RPcmRlckNoYW5nZS5lbWl0KHtcbiAgICAgIGRyYWdFbDogc29ydEl0ZW0sXG4gICAgICBmcm9tRWw6IHBhcmVudEVsLFxuICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICBuZXdJbmRleCxcbiAgICAgIG9sZEluZGV4LFxuICAgIH0pO1xuICAgIGhhbmRsZS5zZXRGb2N1cygpLnRoZW4oKCkgPT4ge1xuICAgICAgaGFuZGxlLmFjdGl2YXRlZCA9IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiZmlsdGVyVGV4dFwiOiBbXCJoYW5kbGVGaWx0ZXJUZXh0Q2hhbmdlXCJdLFxuICAgIFwiZmlsdGVyRW5hYmxlZFwiOiBbXCJoYW5kbGVMaXN0SXRlbUNoYW5nZVwiXSxcbiAgICBcImdyb3VwXCI6IFtcImhhbmRsZUxpc3RJdGVtQ2hhbmdlXCJdLFxuICAgIFwiZHJhZ0VuYWJsZWRcIjogW1wiaGFuZGxlTGlzdEl0ZW1DaGFuZ2VcIl0sXG4gICAgXCJzZWxlY3Rpb25Nb2RlXCI6IFtcImhhbmRsZUxpc3RJdGVtQ2hhbmdlXCJdLFxuICAgIFwic2VsZWN0aW9uQXBwZWFyYW5jZVwiOiBbXCJoYW5kbGVMaXN0SXRlbUNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBsaXN0Q3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWxpc3RcIiwge1xuICAgIFwiZGlzYWJsZWRcIjogWzUxNl0sXG4gICAgXCJjYW5QdWxsXCI6IFsxNl0sXG4gICAgXCJjYW5QdXRcIjogWzE2XSxcbiAgICBcImRyYWdFbmFibGVkXCI6IFs1MTYsIFwiZHJhZy1lbmFibGVkXCJdLFxuICAgIFwiZ3JvdXBcIjogWzUxM10sXG4gICAgXCJmaWx0ZXJFbmFibGVkXCI6IFs1MTYsIFwiZmlsdGVyLWVuYWJsZWRcIl0sXG4gICAgXCJmaWx0ZXJlZEl0ZW1zXCI6IFsxMDQwXSxcbiAgICBcImZpbHRlcmVkRGF0YVwiOiBbMTA0MF0sXG4gICAgXCJmaWx0ZXJQbGFjZWhvbGRlclwiOiBbNTEzLCBcImZpbHRlci1wbGFjZWhvbGRlclwiXSxcbiAgICBcImZpbHRlclRleHRcIjogWzE1MzcsIFwiZmlsdGVyLXRleHRcIl0sXG4gICAgXCJsYWJlbFwiOiBbMV0sXG4gICAgXCJsb2FkaW5nXCI6IFs1MTZdLFxuICAgIFwib3BlbmFibGVcIjogWzRdLFxuICAgIFwic2VsZWN0ZWRJdGVtc1wiOiBbMTA0MF0sXG4gICAgXCJzZWxlY3Rpb25Nb2RlXCI6IFs1MTMsIFwic2VsZWN0aW9uLW1vZGVcIl0sXG4gICAgXCJzZWxlY3Rpb25BcHBlYXJhbmNlXCI6IFs1MTMsIFwic2VsZWN0aW9uLWFwcGVhcmFuY2VcIl0sXG4gICAgXCJhc3Npc3RpdmVUZXh0XCI6IFszMl0sXG4gICAgXCJkYXRhRm9yRmlsdGVyXCI6IFszMl0sXG4gICAgXCJoYXNGaWx0ZXJBY3Rpb25zRW5kXCI6IFszMl0sXG4gICAgXCJoYXNGaWx0ZXJBY3Rpb25zU3RhcnRcIjogWzMyXSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF1cbiAgfSwgW1swLCBcImNhbGNpdGVJbnRlcm5hbEZvY3VzUHJldmlvdXNJdGVtXCIsIFwiaGFuZGxlQ2FsY2l0ZUludGVybmFsRm9jdXNQcmV2aW91c0l0ZW1cIl0sIFswLCBcImNhbGNpdGVJbnRlcm5hbExpc3RJdGVtQWN0aXZlXCIsIFwiaGFuZGxlQ2FsY2l0ZUludGVybmFsTGlzdEl0ZW1BY3RpdmVcIl0sIFswLCBcImNhbGNpdGVMaXN0SXRlbVNlbGVjdFwiLCBcImhhbmRsZUNhbGNpdGVMaXN0SXRlbVNlbGVjdFwiXSwgWzAsIFwiY2FsY2l0ZUludGVybmFsSGFuZGxlQ2hhbmdlXCIsIFwiaGFuZGxlQ2FsY2l0ZUludGVybmFsSGFuZGxlQ2hhbmdlXCJdLCBbMCwgXCJjYWxjaXRlSGFuZGxlTnVkZ2VcIiwgXCJoYW5kbGVDYWxjaXRlSGFuZGxlTnVkZ2VcIl0sIFswLCBcImNhbGNpdGVJbnRlcm5hbExpc3RJdGVtU2VsZWN0XCIsIFwiaGFuZGxlQ2FsY2l0ZUludGVybmFsTGlzdEl0ZW1TZWxlY3RcIl0sIFswLCBcImNhbGNpdGVJbnRlcm5hbExpc3RJdGVtQ2hhbmdlXCIsIFwiaGFuZGxlQ2FsY2l0ZUludGVybmFsTGlzdEl0ZW1DaGFuZ2VcIl0sIFswLCBcImNhbGNpdGVJbnRlcm5hbExpc3RJdGVtR3JvdXBEZWZhdWx0U2xvdENoYW5nZVwiLCBcImhhbmRsZUNhbGNpdGVJbnRlcm5hbExpc3RJdGVtR3JvdXBEZWZhdWx0U2xvdENoYW5nZVwiXV1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1saXN0XCIsIFwiY2FsY2l0ZS1maWx0ZXJcIiwgXCJjYWxjaXRlLWljb25cIiwgXCJjYWxjaXRlLWlucHV0XCIsIFwiY2FsY2l0ZS1sb2FkZXJcIiwgXCJjYWxjaXRlLXByb2dyZXNzXCIsIFwiY2FsY2l0ZS1zY3JpbVwiLCBcImNhbGNpdGUtc3RhY2tcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtbGlzdFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIExpc3QpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtZmlsdGVyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDgoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWljb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaW5wdXRcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtbG9hZGVyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDUoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLXByb2dyZXNzXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDQoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLXNjcmltXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDMoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLXN0YWNrXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDIoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG5cbmNvbnN0IENhbGNpdGVMaXN0ID0gTGlzdDtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVMaXN0LCBkZWZpbmVDdXN0b21FbGVtZW50IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgRnJhZ21lbnQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBmIGFzIGZpbHRlciB9IGZyb20gJy4vZmlsdGVyMi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24sIGQgYXMgZGlzY29ubmVjdEludGVyYWN0aXZlIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS5qcyc7XG5pbXBvcnQgeyBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudEZvY3VzYWJsZSB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQzIH0gZnJvbSAnLi9pY29uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9pbnB1dC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMSB9IGZyb20gJy4vcHJvZ3Jlc3MuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWJvdW5jZSB9IGZyb20gJy4vZGVib3VuY2UuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgc2VhcmNoSWNvbjogXCJzZWFyY2gtaWNvblwiLFxufTtcbmNvbnN0IElDT05TID0ge1xuICBzZWFyY2g6IFwic2VhcmNoXCIsXG4gIGNsb3NlOiBcInhcIixcbn07XG5jb25zdCBERUJPVU5DRV9USU1FT1VUID0gMjUwO1xuXG5jb25zdCBmaWx0ZXJDc3MgPSBcIjpob3N0e2JveC1zaXppbmc6Ym9yZGVyLWJveDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKX06aG9zdCAqe2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9LmNvbnRhaW5lcntkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTtwYWRkaW5nOjAuNXJlbX1sYWJlbHtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4taW5saW5lOjAuMjVyZW07bWFyZ2luLWJsb2NrOjBweDtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTthbGlnbi1pdGVtczpjZW50ZXI7b3ZlcmZsb3c6aGlkZGVufWlucHV0W3R5cGU9dGV4dF17bWFyZ2luLWJsb2NrLWVuZDowLjI1cmVtO2lubGluZS1zaXplOjEwMCU7Ym9yZGVyLXN0eWxlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtwYWRkaW5nLWJsb2NrOjAuMjVyZW07Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW07Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO3BhZGRpbmctaW5saW5lLWVuZDowLjI1cmVtO3BhZGRpbmctaW5saW5lLXN0YXJ0OjEuNXJlbTt0cmFuc2l0aW9uOnBhZGRpbmcgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSwgYm94LXNoYWRvdyB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfWlucHV0W3R5cGU9dGV4dF06Oi1tcy1jbGVhcntkaXNwbGF5Om5vbmV9Y2FsY2l0ZS1pbnB1dHtpbmxpbmUtc2l6ZToxMDAlfS5zZWFyY2gtaWNvbntwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmZsZXg7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO2luc2V0LWlubGluZS1zdGFydDowO3RyYW5zaXRpb246aW5zZXQtaW5saW5lLXN0YXJ0IHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyksIGluc2V0LWlubGluZS1lbmQgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSwgb3BhY2l0eSB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfWlucHV0W3R5cGU9dGV4dF06Zm9jdXN7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweDtwYWRkaW5nLWlubGluZTowLjI1cmVtfWlucHV0W3R5cGU9dGV4dF06Zm9jdXN+LnNlYXJjaC1pY29ue2luc2V0LWlubGluZS1zdGFydDpjYWxjKDFyZW0gKiAtMSk7b3BhY2l0eTowfS5jbGVhci1idXR0b257ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXItd2lkdGg6MHB4O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS5jbGVhci1idXR0b246aG92ZXIsLmNsZWFyLWJ1dHRvbjpmb2N1c3tjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IEZpbHRlciA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlRmlsdGVyQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlRmlsdGVyQ2hhbmdlXCIsIDYpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuZmlsdGVyRGVib3VuY2VkID0gZGVib3VuY2UoKHZhbHVlLCBlbWl0ID0gZmFsc2UsIG9uRmlsdGVyKSA9PiB0aGlzLnVwZGF0ZUZpbHRlcmVkKGZpbHRlcih0aGlzLml0ZW1zLCB2YWx1ZSksIGVtaXQsIG9uRmlsdGVyKSwgREVCT1VOQ0VfVElNRU9VVCk7XG4gICAgdGhpcy5pbnB1dEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHRoaXMudmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLmZpbHRlckRlYm91bmNlZCh0YXJnZXQudmFsdWUsIHRydWUpO1xuICAgIH07XG4gICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY2xlYXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnZhbHVlID0gXCJcIjtcbiAgICAgIHRoaXMuZmlsdGVyRGVib3VuY2VkKFwiXCIsIHRydWUpO1xuICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgIH07XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBbXTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnZhbHVlID0gXCJcIjtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICB3YXRjaEl0ZW1zSGFuZGxlcigpIHtcbiAgICB0aGlzLmZpbHRlckRlYm91bmNlZCh0aGlzLnZhbHVlKTtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgdmFsdWVIYW5kbGVyKHZhbHVlKSB7XG4gICAgdGhpcy5maWx0ZXJEZWJvdW5jZWQodmFsdWUpO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcmVkKGZpbHRlcih0aGlzLml0ZW1zLCB0aGlzLnZhbHVlKSk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5maWx0ZXJEZWJvdW5jZWQuY2FuY2VsKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGZpbHRlciBvbiB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZnVsIGJlY2F1c2UgZmlsdGVyaW5nIGlzIGRlbGF5ZWQgYW5kIGFzeW5jaHJvbm91cy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIGZpbHRlciB0ZXh0IHZhbHVlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIGFzeW5jIGZpbHRlcih2YWx1ZSA9IHRoaXMudmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZmlsdGVyRGVib3VuY2VkKHZhbHVlLCBmYWxzZSwgcmVzb2x2ZSk7XG4gICAgfSk7XG4gIH1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIHRoaXMuZWw/LmZvY3VzKCk7XG4gIH1cbiAgdXBkYXRlRmlsdGVyZWQoZmlsdGVyZWQsIGVtaXQgPSBmYWxzZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBmaWx0ZXJlZDtcbiAgICBpZiAoZW1pdCkge1xuICAgICAgdGhpcy5jYWxjaXRlRmlsdGVyQ2hhbmdlLmVtaXQoKTtcbiAgICB9XG4gICAgY2FsbGJhY2s/LigpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCwgc2NhbGUgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKEZyYWdtZW50LCBudWxsLCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250YWluZXIgfSwgaChcImxhYmVsXCIsIG51bGwsIGgoXCJjYWxjaXRlLWlucHV0XCIsIHsgY2xlYXJhYmxlOiB0cnVlLCBkaXNhYmxlZDogZGlzYWJsZWQsIGljb246IElDT05TLnNlYXJjaCwgbGFiZWw6IHRoaXMubWVzc2FnZXMubGFiZWwsIG1lc3NhZ2VPdmVycmlkZXM6IHsgY2xlYXI6IHRoaXMubWVzc2FnZXMuY2xlYXIgfSwgb25DYWxjaXRlSW5wdXRJbnB1dDogdGhpcy5pbnB1dEhhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlciwgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsIHNjYWxlOiBzY2FsZSwgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogKGVsKSA9PiB7XG4gICAgICAgIHRoaXMudGV4dElucHV0ID0gZWw7XG4gICAgICB9IH0pKSkpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGRlbGVnYXRlc0ZvY3VzKCkgeyByZXR1cm4gdHJ1ZTsgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiaXRlbXNcIjogW1wid2F0Y2hJdGVtc0hhbmRsZXJcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJ2YWx1ZVwiOiBbXCJ2YWx1ZUhhbmRsZXJcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIGZpbHRlckNzczsgfVxufSwgWzE3LCBcImNhbGNpdGUtZmlsdGVyXCIsIHtcbiAgICBcIml0ZW1zXCI6IFsxNl0sXG4gICAgXCJkaXNhYmxlZFwiOiBbNTE2XSxcbiAgICBcImZpbHRlcmVkSXRlbXNcIjogWzEwNDBdLFxuICAgIFwicGxhY2Vob2xkZXJcIjogWzFdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJ2YWx1ZVwiOiBbMTAyNV0sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFsxMDQwXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJmaWx0ZXJcIjogWzY0XSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1maWx0ZXJcIiwgXCJjYWxjaXRlLWljb25cIiwgXCJjYWxjaXRlLWlucHV0XCIsIFwiY2FsY2l0ZS1wcm9ncmVzc1wiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1maWx0ZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBGaWx0ZXIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQzKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pbnB1dFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1wcm9ncmVzc1wiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgRmlsdGVyIGFzIEYsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC5qcyc7XG5cbmNvbnN0IGxvYWRlckNzcyA9IFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtAbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowfX06aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4taW5saW5lOmF1dG87ZGlzcGxheTpub25lO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO29wYWNpdHk6MTttaW4tYmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItZm9udC1zaXplKTtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7c3Ryb2tlLXdpZHRoOjM7ZmlsbDpub25lO3RyYW5zZm9ybTpzY2FsZSgxLCAxKTthbmltYXRpb246bG9hZGVyLWNvbG9yLXNoaWZ0IGNhbGModmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpICogMiAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSkgYWx0ZXJuYXRlLXJldmVyc2UgaW5maW5pdGUgbGluZWFyO3BhZGRpbmctYmxvY2s6dmFyKC0tY2FsY2l0ZS1sb2FkZXItcGFkZGluZywgNHJlbSl9Omhvc3QoW3NjYWxlPXNdKXstLWNhbGNpdGUtbG9hZGVyLWZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7LS1jYWxjaXRlLWxvYWRlci1zaXplOjJyZW07LS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZTowLjc1cmVtfTpob3N0KFtzY2FsZT1tXSl7LS1jYWxjaXRlLWxvYWRlci1mb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7LS1jYWxjaXRlLWxvYWRlci1zaXplOjRyZW07LS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZToxcmVtfTpob3N0KFtzY2FsZT1sXSl7LS1jYWxjaXRlLWxvYWRlci1mb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMik7LS1jYWxjaXRlLWxvYWRlci1zaXplOjZyZW07LS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZToxLjVyZW19Omhvc3QoW25vLXBhZGRpbmddKXtwYWRkaW5nLWJsb2NrOjBweH06aG9zdHtkaXNwbGF5OmZsZXh9LmxvYWRlcl9fdGV4dHtkaXNwbGF5OmJsb2NrO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7bWFyZ2luLWJsb2NrLXN0YXJ0OmNhbGModmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSkgKyAxLjVyZW0pfS5sb2FkZXJfX3BlcmNlbnRhZ2V7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jazt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLWZvbnQtc2l6ZSk7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSk7aW5zZXQtaW5saW5lLXN0YXJ0OjUwJTttYXJnaW4taW5saW5lLXN0YXJ0OmNhbGModmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSkgLyAyICogLTEpO2xpbmUtaGVpZ2h0OjAuMjU7dHJhbnNmb3JtOnNjYWxlKDEsIDEpfS5sb2FkZXJfX3N2Z3N7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3c6dmlzaWJsZTtvcGFjaXR5OjE7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSk7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKTtpbnNldC1pbmxpbmUtc3RhcnQ6NTAlO21hcmdpbi1pbmxpbmUtc3RhcnQ6Y2FsYyh2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKSAvIDIgKiAtMSk7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdykgLyB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikgKiA2LjY2IC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTthbmltYXRpb24tbmFtZTpsb2FkZXItY2xvY2t3aXNlfS5sb2FkZXJfX3N2Z3twb3NpdGlvbjphYnNvbHV0ZTtpbnNldC1ibG9jay1zdGFydDowcHg7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7b3ZlcmZsb3c6dmlzaWJsZTtpbnNldC1pbmxpbmUtc3RhcnQ6MDtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKTtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUpO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXJ9QHN1cHBvcnRzIChkaXNwbGF5OiBncmlkKXsubG9hZGVyX19zdmctLTF7YW5pbWF0aW9uLW5hbWU6bG9hZGVyLW9mZnNldC0xfS5sb2FkZXJfX3N2Zy0tMnthbmltYXRpb24tbmFtZTpsb2FkZXItb2Zmc2V0LTJ9LmxvYWRlcl9fc3ZnLS0ze2FuaW1hdGlvbi1uYW1lOmxvYWRlci1vZmZzZXQtM319Omhvc3QoW3R5cGU9ZGV0ZXJtaW5hdGVdKXthbmltYXRpb246bm9uZTtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9Omhvc3QoW3R5cGU9ZGV0ZXJtaW5hdGVdKSAubG9hZGVyX19zdmdze2FuaW1hdGlvbjpub25lfTpob3N0KFt0eXBlPWRldGVybWluYXRlXSkgLmxvYWRlcl9fc3ZnLS0ze2FuaW1hdGlvbjpub25lO3N0cm9rZTp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTtzdHJva2UtZGFzaGFycmF5OjE1MC43OTYzMjt0cmFuc2Zvcm06cm90YXRlKC05MGRlZyk7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3QpIGxpbmVhcn06aG9zdChbaW5saW5lXSl7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjBweDthbmltYXRpb246bm9uZTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDoyO3BhZGRpbmctYmxvY2s6MHB4O2Jsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmUpO21pbi1ibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKTtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSk7bWFyZ2luLWlubGluZS1lbmQ6Y2FsYyh2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSkgKiAwLjUpO3ZlcnRpY2FsLWFsaWduOmNhbGModmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmUpICogLTEgKiAwLjIpfTpob3N0KFtpbmxpbmVdKSAubG9hZGVyX19zdmdze2luc2V0LWJsb2NrLXN0YXJ0OjBweDttYXJnaW46MHB4O2luc2V0LWlubGluZS1zdGFydDowO2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKTtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKX06aG9zdChbaW5saW5lXSkgLmxvYWRlcl9fc3Zne2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKTtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKX06aG9zdChbY29tcGxldGVdKXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlKDAuNzUsIDAuNzUpO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zaXRpb246b3BhY2l0eSB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSBsaW5lYXIgMTAwMG1zLCB0cmFuc2Zvcm0gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bSkgbGluZWFyIDEwMDBtc306aG9zdChbY29tcGxldGVdKSAubG9hZGVyX19zdmdze29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUoMC43NSwgMC43NSk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNpdGlvbjpvcGFjaXR5IGNhbGMoMTgwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpIGxpbmVhciA4MDBtcywgdHJhbnNmb3JtIGNhbGMoMTgwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpIGxpbmVhciA4MDBtc306aG9zdChbY29tcGxldGVdKSAubG9hZGVyX19wZXJjZW50YWdle2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO3RyYW5zZm9ybTpzY2FsZSgxLjA1LCAxLjA1KTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2l0aW9uOmNvbG9yIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGxpbmVhciwgdHJhbnNmb3JtIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGxpbmVhcn0ubG9hZGVyX19zdmctLTF7c3Ryb2tlLWRhc2hhcnJheToyNy45MjUyNDQ0NDQ0IDEzOS42MjYyMjIyMjIyO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSAqIDQuOCAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9QGtleWZyYW1lcyBsb2FkZXItb2Zmc2V0LTF7MCV7c3Ryb2tlLWRhc2hhcnJheToyNy45MjUyNDQ0NDQ0IDI1MS4zMjcyO3N0cm9rZS1kYXNob2Zmc2V0OjB9NTAle3N0cm9rZS1kYXNoYXJyYXk6MTM5LjYyNjIyMjIyMjIgMTM5LjYyNjIyMjIyMjI7c3Ryb2tlLWRhc2hvZmZzZXQ6LTgzLjc3NTczMzMzMzN9MTAwJXtzdHJva2UtZGFzaGFycmF5OjI3LjkyNTI0NDQ0NDQgMjUxLjMyNzI7c3Ryb2tlLWRhc2hvZmZzZXQ6LTI3OS4yNTI0NDQ0NDQ0fX0ubG9hZGVyX19zdmctLTJ7c3Ryb2tlLWRhc2hhcnJheTo1NS44NTA0ODg4ODg5IDEzOS42MjYyMjIyMjIyO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSAqIDYuNCAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9QGtleWZyYW1lcyBsb2FkZXItb2Zmc2V0LTJ7MCV7c3Ryb2tlLWRhc2hhcnJheTo1NS44NTA0ODg4ODg5IDIyMy40MDE5NTU1NTU2O3N0cm9rZS1kYXNob2Zmc2V0OjB9NTAle3N0cm9rZS1kYXNoYXJyYXk6MTM5LjYyNjIyMjIyMjIgMTM5LjYyNjIyMjIyMjI7c3Ryb2tlLWRhc2hvZmZzZXQ6LTk3LjczODM1NTU1NTZ9MTAwJXtzdHJva2UtZGFzaGFycmF5OjU1Ljg1MDQ4ODg4ODkgMjIzLjQwMTk1NTU1NTY7c3Ryb2tlLWRhc2hvZmZzZXQ6LTI3OS4yNTI0NDQ0NDQ0fX0ubG9hZGVyX19zdmctLTN7c3Ryb2tlLWRhc2hhcnJheToxMy45NjI2MjIyMjIyIDEzOS42MjYyMjIyMjIyO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSAqIDcuNzM0IC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX1Aa2V5ZnJhbWVzIGxvYWRlci1vZmZzZXQtM3swJXtzdHJva2UtZGFzaGFycmF5OjEzLjk2MjYyMjIyMjIgMjY1LjI4OTgyMjIyMjI7c3Ryb2tlLWRhc2hvZmZzZXQ6MH01MCV7c3Ryb2tlLWRhc2hhcnJheToxMzkuNjI2MjIyMjIyMiAxMzkuNjI2MjIyMjIyMjtzdHJva2UtZGFzaG9mZnNldDotNzYuNzk0NDIyMjIyMn0xMDAle3N0cm9rZS1kYXNoYXJyYXk6MTMuOTYyNjIyMjIyMiAyNjUuMjg5ODIyMjIyMjtzdHJva2UtZGFzaG9mZnNldDotMjc5LjI1MjQ0NDQ0NDR9fUBrZXlmcmFtZXMgbG9hZGVyLWNvbG9yLXNoaWZ0ezAle3N0cm9rZTp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX0zMyV7c3Ryb2tlOnZhcigtLWNhbGNpdGUtdWktYnJhbmQtcHJlc3MpfTY2JXtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1icmFuZC1ob3Zlcil9MTAwJXtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9fUBrZXlmcmFtZXMgbG9hZGVyLWNsb2Nrd2lzZXsxMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IExvYWRlciA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5pbmxpbmUgPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnR5cGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52YWx1ZSA9IDA7XG4gICAgdGhpcy50ZXh0ID0gXCJcIjtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbCwgaW5saW5lLCBsYWJlbCwgc2NhbGUsIHRleHQsIHR5cGUsIHZhbHVlIH0gPSB0aGlzO1xuICAgIGNvbnN0IGlkID0gZWwuaWQgfHwgZ3VpZCgpO1xuICAgIGNvbnN0IHJhZGl1c1JhdGlvID0gMC40NTtcbiAgICBjb25zdCBzaXplID0gaW5saW5lID8gdGhpcy5nZXRJbmxpbmVTaXplKHNjYWxlKSA6IHRoaXMuZ2V0U2l6ZShzY2FsZSk7XG4gICAgY29uc3QgcmFkaXVzID0gc2l6ZSAqIHJhZGl1c1JhdGlvO1xuICAgIGNvbnN0IHZpZXdib3ggPSBgMCAwICR7c2l6ZX0gJHtzaXplfWA7XG4gICAgY29uc3QgaXNEZXRlcm1pbmF0ZSA9IHR5cGUgPT09IFwiZGV0ZXJtaW5hdGVcIjtcbiAgICBjb25zdCBjaXJjdW1mZXJlbmNlID0gMiAqIHJhZGl1cyAqIE1hdGguUEk7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSAodmFsdWUgLyAxMDApICogY2lyY3VtZmVyZW5jZTtcbiAgICBjb25zdCByZW1haW5pbmcgPSBjaXJjdW1mZXJlbmNlIC0gcHJvZ3Jlc3M7XG4gICAgY29uc3QgdmFsdWVOb3cgPSBNYXRoLmZsb29yKHZhbHVlKTtcbiAgICBjb25zdCBob3N0QXR0cmlidXRlcyA9IHtcbiAgICAgIFwiYXJpYS12YWx1ZW5vd1wiOiB2YWx1ZU5vdyxcbiAgICAgIFwiYXJpYS12YWx1ZW1pblwiOiAwLFxuICAgICAgXCJhcmlhLXZhbHVlbWF4XCI6IDEwMCxcbiAgICAgIGNvbXBsZXRlOiB2YWx1ZU5vdyA9PT0gMTAwLFxuICAgIH07XG4gICAgY29uc3Qgc3ZnQXR0cmlidXRlcyA9IHsgcjogcmFkaXVzLCBjeDogc2l6ZSAvIDIsIGN5OiBzaXplIC8gMiB9O1xuICAgIGNvbnN0IGRldGVybWluYXRlU3R5bGUgPSB7IFwic3Ryb2tlLWRhc2hhcnJheVwiOiBgJHtwcm9ncmVzc30gJHtyZW1haW5pbmd9YCB9O1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1sYWJlbFwiOiBsYWJlbCwgaWQ6IGlkLCByb2xlOiBcInByb2dyZXNzYmFyXCIsIC4uLihpc0RldGVybWluYXRlID8gaG9zdEF0dHJpYnV0ZXMgOiB7fSkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImxvYWRlcl9fc3Znc1wiIH0sIGgoXCJzdmdcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogXCJsb2FkZXJfX3N2ZyBsb2FkZXJfX3N2Zy0tMVwiLCB2aWV3Qm94OiB2aWV3Ym94IH0sIGgoXCJjaXJjbGVcIiwgeyAuLi5zdmdBdHRyaWJ1dGVzIH0pKSwgaChcInN2Z1wiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBcImxvYWRlcl9fc3ZnIGxvYWRlcl9fc3ZnLS0yXCIsIHZpZXdCb3g6IHZpZXdib3ggfSwgaChcImNpcmNsZVwiLCB7IC4uLnN2Z0F0dHJpYnV0ZXMgfSkpLCBoKFwic3ZnXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IFwibG9hZGVyX19zdmcgbG9hZGVyX19zdmctLTNcIiwgdmlld0JveDogdmlld2JveCwgLi4uKGlzRGV0ZXJtaW5hdGUgPyB7IHN0eWxlOiBkZXRlcm1pbmF0ZVN0eWxlIH0gOiB7fSkgfSwgaChcImNpcmNsZVwiLCB7IC4uLnN2Z0F0dHJpYnV0ZXMgfSkpKSwgdGV4dCAmJiBoKFwiZGl2XCIsIHsgY2xhc3M6IFwibG9hZGVyX190ZXh0XCIgfSwgdGV4dCksIGlzRGV0ZXJtaW5hdGUgJiYgaChcImRpdlwiLCB7IGNsYXNzOiBcImxvYWRlcl9fcGVyY2VudGFnZVwiIH0sIHZhbHVlKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHByb3BlciBzaXplcyBiYXNlZCBvbiB0aGUgc2NhbGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHNjYWxlXG4gICAqL1xuICBnZXRTaXplKHNjYWxlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHM6IDMyLFxuICAgICAgbTogNTYsXG4gICAgICBsOiA4MCxcbiAgICB9W3NjYWxlXTtcbiAgfVxuICBnZXRJbmxpbmVTaXplKHNjYWxlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHM6IDEyLFxuICAgICAgbTogMTYsXG4gICAgICBsOiAyMCxcbiAgICB9W3NjYWxlXTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBsb2FkZXJDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtbG9hZGVyXCIsIHtcbiAgICBcImlubGluZVwiOiBbNTE2XSxcbiAgICBcImxhYmVsXCI6IFsxXSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwidHlwZVwiOiBbNTEzXSxcbiAgICBcInZhbHVlXCI6IFsyXSxcbiAgICBcInRleHRcIjogWzFdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtbG9hZGVyXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWxvYWRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIExvYWRlcik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgTG9hZGVyIGFzIEwsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgaCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuaW1wb3J0IHsgdyBhcyBzbG90Q2hhbmdlSGFzQ29udGVudCB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQxIH0gZnJvbSAnLi9sb2FkZXIuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIHNjcmltOiBcInNjcmltXCIsXG4gIGNvbnRlbnQ6IFwiY29udGVudFwiLFxufTtcbmNvbnN0IEJSRUFLUE9JTlRTID0ge1xuICBzOiA3MixcbiAgLy8gbWVkaXVtIGlzIGFzc3VtZWQgZGVmYXVsdC5cbiAgbDogNDgwLCAvLyBHcmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gNDgwcHguXG59O1xuXG5jb25zdCBzY3JpbUNzcyA9IFwiOmhvc3R7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQ6MHB4O3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1vdmVybGF5KTtkaXNwbGF5OmZsZXg7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOnN0cmV0Y2h9QGtleWZyYW1lcyBjYWxjaXRlLXNjcmltLWZhZGUtaW57MCV7LS10dy1iZy1vcGFjaXR5OjB9MTAwJXstLXR3LXRleHQtb3BhY2l0eToxfX0uc2NyaW17cG9zaXRpb246YWJzb2x1dGU7aW5zZXQ6MHB4O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24tY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7b3ZlcmZsb3c6aGlkZGVuO2FuaW1hdGlvbjpjYWxjaXRlLXNjcmltLWZhZGUtaW4gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bSkgZWFzZS1pbi1vdXQ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXNjcmltLWJhY2tncm91bmQsIHZhcigtLWNhbGNpdGUtc2NyaW0tYmFja2dyb3VuZC1pbnRlcm5hbCkpfS5jb250ZW50e3BhZGRpbmc6MXJlbX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgU2NyaW0gPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcInJlc2l6ZVwiLCAoKSA9PiB0aGlzLmhhbmRsZVJlc2l6ZSgpKTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmhhbmRsZURlZmF1bHRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc0NvbnRlbnQgPSBzbG90Q2hhbmdlSGFzQ29udGVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLnN0b3JlTG9hZGVyRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMubG9hZGVyRWwgPSBlbDtcbiAgICAgIHRoaXMuaGFuZGxlUmVzaXplKCk7XG4gICAgfTtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvYWRlclNjYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgICB0aGlzLmhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGhhc0NvbnRlbnQsIGxvYWRpbmcsIG1lc3NhZ2VzIH0gPSB0aGlzO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1Muc2NyaW0gfSwgbG9hZGluZyA/IChoKFwiY2FsY2l0ZS1sb2FkZXJcIiwgeyBsYWJlbDogbWVzc2FnZXMubG9hZGluZywgc2NhbGU6IHRoaXMubG9hZGVyU2NhbGUsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiB0aGlzLnN0b3JlTG9hZGVyRWwgfSkpIDogbnVsbCwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGVudCwgaGlkZGVuOiAhaGFzQ29udGVudCB9LCBoKFwic2xvdFwiLCB7IG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVEZWZhdWx0U2xvdENoYW5nZSB9KSkpKTtcbiAgfVxuICBnZXRTY2FsZShzaXplKSB7XG4gICAgaWYgKHNpemUgPCBCUkVBS1BPSU5UUy5zKSB7XG4gICAgICByZXR1cm4gXCJzXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNpemUgPj0gQlJFQUtQT0lOVFMubCkge1xuICAgICAgcmV0dXJuIFwibFwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBcIm1cIjtcbiAgICB9XG4gIH1cbiAgaGFuZGxlUmVzaXplKCkge1xuICAgIGNvbnN0IHsgbG9hZGVyRWwsIGVsIH0gPSB0aGlzO1xuICAgIGlmICghbG9hZGVyRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5sb2FkZXJTY2FsZSA9IHRoaXMuZ2V0U2NhbGUoTWF0aC5taW4oZWwuY2xpZW50SGVpZ2h0LCBlbC5jbGllbnRXaWR0aCkgPz8gMCk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gc2NyaW1Dc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtc2NyaW1cIiwge1xuICAgIFwibG9hZGluZ1wiOiBbNTE2XSxcbiAgICBcIm1lc3NhZ2VzXCI6IFsxMDQwXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogWzEwNDBdLFxuICAgIFwibG9hZGVyU2NhbGVcIjogWzMyXSxcbiAgICBcImRlZmF1bHRNZXNzYWdlc1wiOiBbMzJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFszMl0sXG4gICAgXCJoYXNDb250ZW50XCI6IFszMl1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1zY3JpbVwiLCBcImNhbGNpdGUtbG9hZGVyXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLXNjcmltXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgU2NyaW0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtbG9hZGVyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBTY3JpbSBhcyBTLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGgsIEhvc3QgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBlIGFzIHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQgfSBmcm9tICcuL2RvbS5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuICBhY3Rpb25zU3RhcnQ6IFwiYWN0aW9ucy1zdGFydFwiLFxuICBjb250ZW50U3RhcnQ6IFwiY29udGVudC1zdGFydFwiLFxuICBjb250ZW50OiBcImNvbnRlbnRcIixcbiAgY29udGVudEVuZDogXCJjb250ZW50LWVuZFwiLFxuICBhY3Rpb25zRW5kOiBcImFjdGlvbnMtZW5kXCIsXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIGFjdGlvbnNTdGFydDogXCJhY3Rpb25zLXN0YXJ0XCIsXG4gIGNvbnRlbnRTdGFydDogXCJjb250ZW50LXN0YXJ0XCIsXG4gIGNvbnRlbnRFbmQ6IFwiY29udGVudC1lbmRcIixcbiAgYWN0aW9uc0VuZDogXCJhY3Rpb25zLWVuZFwiLFxufTtcblxuY29uc3Qgc3RhY2tDc3MgPSBcIjpob3N0KFtkaXNhYmxlZF0pIC5jb250ZW50e2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAuY29udGVudCAqLDpob3N0KFtkaXNhYmxlZF0pIC5jb250ZW50IDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSAwJTtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LmNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleDoxIDEgYXV0bzthbGlnbi1pdGVtczpzdHJldGNoO2ZvbnQtZmFtaWx5OnZhcigtLWNhbGNpdGUtc2Fucy1mYW1pbHkpO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbm9ybWFsKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMil9LmNvbnRlbnR7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIGF1dG87ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXI7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxLjM3NTtwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLXN0YWNrLXBhZGRpbmctaW5saW5lLCAwLjc1cmVtKTtwYWRkaW5nLWJsb2NrOnZhcigtLWNhbGNpdGUtc3RhY2stcGFkZGluZy1ibG9jaywgMC41cmVtKX0uY29udGVudC1zdGFydHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0uY29udGVudC1lbmR7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5jb250ZW50LXN0YXJ0LC5jb250ZW50LWVuZHtmbGV4OjAgMSBhdXRvfS5hY3Rpb25zLXN0YXJ0LC5hY3Rpb25zLWVuZCwuY29udGVudC1zdGFydCwuY29udGVudC1lbmR7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcn0uY29udGVudC1zdGFydCA6OnNsb3R0ZWQoY2FsY2l0ZS1pY29uKSwuY29udGVudC1lbmQgOjpzbG90dGVkKGNhbGNpdGUtaWNvbil7bWFyZ2luLWlubGluZTowLjc1cmVtO2FsaWduLXNlbGY6Y2VudGVyfS5hY3Rpb25zLXN0YXJ0IDo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbiksLmFjdGlvbnMtc3RhcnQgOjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uLW1lbnUpLC5hY3Rpb25zLXN0YXJ0IDo6c2xvdHRlZChjYWxjaXRlLWhhbmRsZSksLmFjdGlvbnMtc3RhcnQgOjpzbG90dGVkKGNhbGNpdGUtZHJvcGRvd24pLC5hY3Rpb25zLWVuZCA6OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24pLC5hY3Rpb25zLWVuZCA6OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24tbWVudSksLmFjdGlvbnMtZW5kIDo6c2xvdHRlZChjYWxjaXRlLWhhbmRsZSksLmFjdGlvbnMtZW5kIDo6c2xvdHRlZChjYWxjaXRlLWRyb3Bkb3duKXthbGlnbi1zZWxmOnN0cmV0Y2g7Y29sb3I6aW5oZXJpdH06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgU3RhY2sgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuaGFuZGxlQWN0aW9uc1N0YXJ0U2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNBY3Rpb25zU3RhcnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQWN0aW9uc0VuZFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzQWN0aW9uc0VuZCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDb250ZW50U3RhcnRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc0NvbnRlbnRTdGFydCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDb250ZW50RW5kU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNDb250ZW50RW5kID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5oYXNBY3Rpb25zU3RhcnQgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0FjdGlvbnNFbmQgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0NvbnRlbnRTdGFydCA9IGZhbHNlO1xuICAgIHRoaXMuaGFzQ29udGVudEVuZCA9IGZhbHNlO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJBY3Rpb25zU3RhcnQoKSB7XG4gICAgY29uc3QgeyBoYXNBY3Rpb25zU3RhcnQgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5hY3Rpb25zU3RhcnQsIGhpZGRlbjogIWhhc0FjdGlvbnNTdGFydCwga2V5OiBcImFjdGlvbnMtc3RhcnQtY29udGFpbmVyXCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5hY3Rpb25zU3RhcnQsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVBY3Rpb25zU3RhcnRTbG90Q2hhbmdlIH0pKSk7XG4gIH1cbiAgcmVuZGVyQWN0aW9uc0VuZCgpIHtcbiAgICBjb25zdCB7IGhhc0FjdGlvbnNFbmQgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5hY3Rpb25zRW5kLCBoaWRkZW46ICFoYXNBY3Rpb25zRW5kLCBrZXk6IFwiYWN0aW9ucy1lbmQtY29udGFpbmVyXCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5hY3Rpb25zRW5kLCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlQWN0aW9uc0VuZFNsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICByZW5kZXJDb250ZW50U3RhcnQoKSB7XG4gICAgY29uc3QgeyBoYXNDb250ZW50U3RhcnQgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250ZW50U3RhcnQsIGhpZGRlbjogIWhhc0NvbnRlbnRTdGFydCB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmNvbnRlbnRTdGFydCwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZUNvbnRlbnRTdGFydFNsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICByZW5kZXJEZWZhdWx0Q29udGVudCgpIHtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbnRlbnQgfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgfVxuICByZW5kZXJDb250ZW50RW5kKCkge1xuICAgIGNvbnN0IHsgaGFzQ29udGVudEVuZCB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbnRlbnRFbmQsIGhpZGRlbjogIWhhc0NvbnRlbnRFbmQgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5jb250ZW50RW5kLCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlQ29udGVudEVuZFNsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbnRhaW5lciB9LCB0aGlzLnJlbmRlckFjdGlvbnNTdGFydCgpLCB0aGlzLnJlbmRlckNvbnRlbnRTdGFydCgpLCB0aGlzLnJlbmRlckRlZmF1bHRDb250ZW50KCksIHRoaXMucmVuZGVyQ29udGVudEVuZCgpLCB0aGlzLnJlbmRlckFjdGlvbnNFbmQoKSkpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gc3RhY2tDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtc3RhY2tcIiwge1xuICAgIFwiZGlzYWJsZWRcIjogWzUxNl0sXG4gICAgXCJoYXNBY3Rpb25zU3RhcnRcIjogWzMyXSxcbiAgICBcImhhc0FjdGlvbnNFbmRcIjogWzMyXSxcbiAgICBcImhhc0NvbnRlbnRTdGFydFwiOiBbMzJdLFxuICAgIFwiaGFzQ29udGVudEVuZFwiOiBbMzJdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtc3RhY2tcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtc3RhY2tcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBTdGFjayk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgU0xPVFMgYXMgUywgU3RhY2sgYXMgYSwgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBCdWlsZCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGNvbnRhaW5lckJvcmRlclNlbGVjdGVkOiBcImNvbnRhaW5lci0tYm9yZGVyLXNlbGVjdGVkXCIsXG4gIGNvbnRhaW5lckJvcmRlclVuc2VsZWN0ZWQ6IFwiY29udGFpbmVyLS1ib3JkZXItdW5zZWxlY3RlZFwiLFxuICBjb250ZW50Q29udGFpbmVyOiBcImNvbnRlbnQtY29udGFpbmVyXCIsXG4gIGNvbnRlbnRDb250YWluZXJTZWxlY3RhYmxlOiBcImNvbnRlbnQtY29udGFpbmVyLS1zZWxlY3RhYmxlXCIsXG4gIGNvbnRlbnRDb250YWluZXJIYXNDZW50ZXJDb250ZW50OiBcImNvbnRlbnQtY29udGFpbmVyLS1oYXMtY2VudGVyLWNvbnRlbnRcIixcbiAgbmVzdGVkQ29udGFpbmVyOiBcIm5lc3RlZC1jb250YWluZXJcIixcbiAgbmVzdGVkQ29udGFpbmVySGlkZGVuOiBcIm5lc3RlZC1jb250YWluZXItLWhpZGRlblwiLFxuICBjb250ZW50OiBcImNvbnRlbnRcIixcbiAgY3VzdG9tQ29udGVudDogXCJjdXN0b20tY29udGVudFwiLFxuICBhY3Rpb25zU3RhcnQ6IFwiYWN0aW9ucy1zdGFydFwiLFxuICBjb250ZW50U3RhcnQ6IFwiY29udGVudC1zdGFydFwiLFxuICBsYWJlbDogXCJsYWJlbFwiLFxuICBkZXNjcmlwdGlvbjogXCJkZXNjcmlwdGlvblwiLFxuICBjb250ZW50RW5kOiBcImNvbnRlbnQtZW5kXCIsXG4gIGNvbnRlbnRCb3R0b206IFwiY29udGVudC1ib3R0b21cIixcbiAgYWN0aW9uc0VuZDogXCJhY3Rpb25zLWVuZFwiLFxuICBzZWxlY3Rpb25Db250YWluZXI6IFwic2VsZWN0aW9uLWNvbnRhaW5lclwiLFxuICBvcGVuQ29udGFpbmVyOiBcIm9wZW4tY29udGFpbmVyXCIsXG4gIGRyYWdDb250YWluZXI6IFwiZHJhZy1jb250YWluZXJcIixcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgYWN0aW9uc1N0YXJ0OiBcImFjdGlvbnMtc3RhcnRcIixcbiAgY29udGVudFN0YXJ0OiBcImNvbnRlbnQtc3RhcnRcIixcbiAgY29udGVudDogXCJjb250ZW50XCIsXG4gIGNvbnRlbnRCb3R0b206IFwiY29udGVudC1ib3R0b21cIixcbiAgY29udGVudEVuZDogXCJjb250ZW50LWVuZFwiLFxuICBhY3Rpb25zRW5kOiBcImFjdGlvbnMtZW5kXCIsXG59O1xuLy8gU2V0IHRvIHplcm8gdG8gZXh0ZW5kIHVudGlsIHRoZSBlbmQgb2YgdGhlIHRhYmxlIHNlY3Rpb24uXG5jb25zdCBNQVhfQ09MVU1OUyA9IDA7XG5jb25zdCBJQ09OUyA9IHtcbiAgc2VsZWN0ZWRNdWx0aXBsZTogXCJjaGVjay1jaXJjbGUtZlwiLFxuICBzZWxlY3RlZFNpbmdsZTogXCJjaXJjbGUtZlwiLFxuICB1bnNlbGVjdGVkOiBcImJsYW5rXCIsXG4gIGNsb3NlZExUUjogXCJjYXJldC1yaWdodFwiLFxuICBjbG9zZWRSVEw6IFwiY2FyZXQtbGVmdFwiLFxuICBvcGVuOiBcImNhcmV0LWRvd25cIixcbiAgYmxhbms6IFwiYmxhbmtcIixcbiAgY2xvc2U6IFwieFwiLFxufTtcblxuY29uc3QgbGlzdFNlbGVjdG9yID0gXCJjYWxjaXRlLWxpc3RcIjtcbmNvbnN0IGxpc3RJdGVtR3JvdXBTZWxlY3RvciA9IFwiY2FsY2l0ZS1saXN0LWl0ZW0tZ3JvdXBcIjtcbmNvbnN0IGxpc3RJdGVtU2VsZWN0b3IgPSBcImNhbGNpdGUtbGlzdC1pdGVtXCI7XG5mdW5jdGlvbiBnZXRMaXN0SXRlbUNoaWxkcmVuKHNsb3RFbCkge1xuICBjb25zdCBhc3NpZ25lZEVsZW1lbnRzID0gc2xvdEVsLmFzc2lnbmVkRWxlbWVudHMoeyBmbGF0dGVuOiB0cnVlIH0pO1xuICBjb25zdCBsaXN0SXRlbUdyb3VwQ2hpbGRyZW4gPSBhc3NpZ25lZEVsZW1lbnRzLmZpbHRlcigoZWwpID0+IGVsPy5tYXRjaGVzKGxpc3RJdGVtR3JvdXBTZWxlY3RvcikpXG4gICAgLm1hcCgoZ3JvdXApID0+IEFycmF5LmZyb20oZ3JvdXAucXVlcnlTZWxlY3RvckFsbChsaXN0SXRlbVNlbGVjdG9yKSkpXG4gICAgLnJlZHVjZSgocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSA9PiBbLi4ucHJldmlvdXNWYWx1ZSwgLi4uY3VycmVudFZhbHVlXSwgW10pO1xuICBjb25zdCBsaXN0SXRlbUNoaWxkcmVuID0gYXNzaWduZWRFbGVtZW50cy5maWx0ZXIoKGVsKSA9PiBlbD8ubWF0Y2hlcyhsaXN0SXRlbVNlbGVjdG9yKSk7XG4gIGNvbnN0IGxpc3RJdGVtTGlzdENoaWxkcmVuID0gYXNzaWduZWRFbGVtZW50cy5maWx0ZXIoKGVsKSA9PiBlbD8ubWF0Y2hlcyhsaXN0U2VsZWN0b3IpKVxuICAgIC5tYXAoKGxpc3QpID0+IEFycmF5LmZyb20obGlzdC5xdWVyeVNlbGVjdG9yQWxsKGxpc3RJdGVtU2VsZWN0b3IpKSlcbiAgICAucmVkdWNlKChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpID0+IFsuLi5wcmV2aW91c1ZhbHVlLCAuLi5jdXJyZW50VmFsdWVdLCBbXSk7XG4gIHJldHVybiBbLi4ubGlzdEl0ZW1MaXN0Q2hpbGRyZW4sIC4uLmxpc3RJdGVtR3JvdXBDaGlsZHJlbiwgLi4ubGlzdEl0ZW1DaGlsZHJlbl07XG59XG5mdW5jdGlvbiB1cGRhdGVMaXN0SXRlbUNoaWxkcmVuKGxpc3RJdGVtQ2hpbGRyZW4pIHtcbiAgbGlzdEl0ZW1DaGlsZHJlbi5mb3JFYWNoKChsaXN0SXRlbSkgPT4ge1xuICAgIGxpc3RJdGVtLnNldFBvc2l0aW9uID0gbGlzdEl0ZW1DaGlsZHJlbi5pbmRleE9mKGxpc3RJdGVtKSArIDE7XG4gICAgbGlzdEl0ZW0uc2V0U2l6ZSA9IGxpc3RJdGVtQ2hpbGRyZW4ubGVuZ3RoO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGdldERlcHRoKGVsZW1lbnQsIGluY2x1ZGVHcm91cCA9IGZhbHNlKSB7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgY29uc3QgZXhwcmVzc2lvbiA9IGluY2x1ZGVHcm91cFxuICAgID8gXCJhbmNlc3Rvcjo6Y2FsY2l0ZS1saXN0LWl0ZW0gfCBhbmNlc3Rvcjo6Y2FsY2l0ZS1saXN0LWl0ZW0tZ3JvdXBcIlxuICAgIDogXCJhbmNlc3Rvcjo6Y2FsY2l0ZS1saXN0LWl0ZW1cIjtcbiAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZXZhbHVhdGUoZXhwcmVzc2lvbiwgZWxlbWVudCwgbnVsbCwgWFBhdGhSZXN1bHQuVU5PUkRFUkVEX05PREVfU05BUFNIT1RfVFlQRSwgbnVsbCk7XG4gIHJldHVybiByZXN1bHQuc25hcHNob3RMZW5ndGg7XG59XG5cbmV4cG9ydCB7IENTUyBhcyBDLCBJQ09OUyBhcyBJLCBNQVhfQ09MVU1OUyBhcyBNLCBTTE9UUyBhcyBTLCBnZXREZXB0aCBhcyBhLCBnZXRMaXN0SXRlbUNoaWxkcmVuIGFzIGcsIHVwZGF0ZUxpc3RJdGVtQ2hpbGRyZW4gYXMgdSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9