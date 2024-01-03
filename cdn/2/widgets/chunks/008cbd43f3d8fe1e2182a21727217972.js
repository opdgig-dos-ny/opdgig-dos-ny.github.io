"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-value-list_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-value-list.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-value-list.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteValueList: () => (/* binding */ CalciteValueList),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared-list-render.js */ "./node_modules/@esri/calcite-components/dist/components/shared-list-render.js");
/* harmony import */ var _sortableComponent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sortableComponent.js */ "./node_modules/@esri/calcite-components/dist/components/sortableComponent.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter.js */ "./node_modules/@esri/calcite-components/dist/components/filter.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./input.js */ "./node_modules/@esri/calcite-components/dist/components/input.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./progress.js */ "./node_modules/@esri/calcite-components/dist/components/progress.js");
/* harmony import */ var _scrim_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scrim.js */ "./node_modules/@esri/calcite-components/dist/components/scrim.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
















const CSS = {
  container: "container",
  handle: "handle",
};
var ICON_TYPES;
(function (ICON_TYPES) {
  ICON_TYPES["grip"] = "grip";
})(ICON_TYPES || (ICON_TYPES = {}));

function getScreenReaderText(item, status, valueList) {
  const { items, messages } = valueList;
  const total = items.length;
  const position = (0,_shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.q)(valueList, item) + 1;
  const template = status === "idle"
    ? messages.dragHandleIdle
    : status === "active"
      ? messages.dragHandleActive
      : status === "change"
        ? messages.dragHandleChange
        : messages.dragHandleCommit;
  return replacePlaceholders(template, item.label, position, total);
}
function getHandleAndItemElement(event) {
  const handle = event
    .composedPath()
    .find((item) => item.dataset?.jsHandle !== undefined);
  const item = event
    .composedPath()
    .find((item) => item.tagName?.toLowerCase() === "calcite-value-list-item");
  return { handle, item };
}
function replacePlaceholders(text, label, position, total) {
  const replacePosition = text.replace("{position}", position.toString());
  const replaceLabel = replacePosition.replace("{itemLabel}", label);
  return replaceLabel.replace("{total}", total.toString());
}

const valueListCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;box-sizing:border-box;display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}calcite-value-list-item:last-of-type{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header{margin-block-end:0.25rem;display:flex;align-items:center;justify-content:flex-end;background-color:var(--calcite-ui-foreground-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-app-z-index-sticky)}calcite-filter{margin-block-end:1px}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}";

const ValueList = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteListChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.createEvent)(this, "calciteListChange", 6);
    this.calciteListOrderChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.createEvent)(this, "calciteListOrderChange", 6);
    this.calciteListFilter = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.createEvent)(this, "calciteListFilter", 6);
    this.lastSelectedItem = null;
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_3__.c)("mutation", _shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.m.bind(this));
    this.handleSelector = `.${CSS.handle}`;
    this.dragSelector = "calcite-value-list-item";
    this.setFilterEl = (el) => {
      this.filterEl = el;
    };
    this.setFilteredItems = (filteredItems) => {
      this.filteredItems = filteredItems;
    };
    this.deselectRemovedItems = _shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.d.bind(this);
    this.deselectSiblingItems = _shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.a.bind(this);
    this.selectSiblings = _shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.s.bind(this);
    this.handleFilter = _shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.h.bind(this);
    this.handleFilterEvent = _shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.b.bind(this);
    this.getItemData = _shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.g.bind(this);
    this.keyDownHandler = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      const { handle, item } = getHandleAndItemElement(event);
      if (handle && !item.handleActivated && event.key === " ") {
        this.updateScreenReaderText(getScreenReaderText(item, "commit", this));
      }
      if (!handle || !item.handleActivated) {
        _shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.k.call(this, event);
        return;
      }
      event.preventDefault();
      const { items } = this;
      if (event.key === " ") {
        this.updateScreenReaderText(getScreenReaderText(item, "active", this));
      }
      if ((event.key !== "ArrowUp" && event.key !== "ArrowDown") || items.length <= 1) {
        return;
      }
      const { el } = this;
      const nextIndex = (0,_shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.t)(this, item, event.key === "ArrowUp" ? "up" : "down");
      if (nextIndex === items.length - 1) {
        el.appendChild(item);
      }
      else {
        const itemAtNextIndex = el.children[nextIndex];
        const insertionReferenceItem = itemAtNextIndex === item.nextElementSibling
          ? itemAtNextIndex.nextElementSibling
          : itemAtNextIndex;
        el.insertBefore(item, insertionReferenceItem);
      }
      this.items = this.getItems();
      this.calciteListOrderChange.emit(this.items.map(({ value }) => value));
      requestAnimationFrame(() => (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.k)(handle));
      item.handleActivated = true;
      this.updateHandleAriaLabel(handle, getScreenReaderText(item, "change", this));
    };
    this.storeAssistiveEl = (el) => {
      this.assistiveTextEl = el;
    };
    this.handleFocusIn = (event) => {
      const { handle, item } = getHandleAndItemElement(event);
      if (!item?.handleActivated && item && handle) {
        this.updateHandleAriaLabel(handle, getScreenReaderText(item, "idle", this));
      }
    };
    this.disabled = false;
    this.canPull = undefined;
    this.canPut = undefined;
    this.dragEnabled = false;
    this.filteredItems = [];
    this.filteredData = [];
    this.filterEnabled = false;
    this.filterPlaceholder = undefined;
    this.filterText = undefined;
    this.group = undefined;
    this.loading = false;
    this.multiple = false;
    this.selectionFollowsFocus = false;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.dataForFilter = [];
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.selectedValues = new Map();
  }
  onMessagesChange() {
    /* wired up by t9n util */
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
    if ((0,_sortableComponent_js__WEBPACK_IMPORTED_MODULE_6__.d)(this)) {
      return;
    }
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.i.call(this);
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.c.call(this);
    this.setUpSorting();
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.s)(this);
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.f.call(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_0__.u)(this);
  }
  disconnectedCallback() {
    if ((0,_sortableComponent_js__WEBPACK_IMPORTED_MODULE_6__.d)(this)) {
      return;
    }
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    (0,_sortableComponent_js__WEBPACK_IMPORTED_MODULE_6__.a)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.e.call(this);
  }
  calciteListFocusOutHandler(event) {
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.n.call(this, event);
  }
  calciteListItemRemoveHandler(event) {
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.r.call(this, event);
  }
  calciteListItemChangeHandler(event) {
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.j.call(this, event);
  }
  calciteInternalListItemPropsChangeHandler(event) {
    event.stopPropagation();
    this.setUpFilter();
  }
  calciteInternalListItemValueChangeHandler(event) {
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.l.call(this, event);
    event.stopPropagation();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  onDragStart() {
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.e.call(this);
  }
  onDragEnd() {
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.c.call(this);
  }
  onDragSort() {
    this.items = Array.from(this.el.querySelectorAll("calcite-value-list-item"));
    const values = this.items.map((item) => item.value);
    this.calciteListOrderChange.emit(values);
  }
  getItems() {
    return Array.from(this.el.querySelectorAll("calcite-value-list-item"));
  }
  setUpItems() {
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.o.call(this, "calcite-value-list-item");
    this.setUpSorting();
  }
  setUpFilter() {
    if (this.filterEnabled) {
      this.dataForFilter = this.getItemData();
    }
  }
  setUpSorting() {
    const { dragEnabled } = this;
    if (!dragEnabled) {
      return;
    }
    (0,_sortableComponent_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
  }
  handleBlur() {
    if (this.dragEnabled) {
      this.updateScreenReaderText("");
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Returns the currently selected items */
  async getSelectedItems() {
    return this.selectedValues;
  }
  /**
   * Sets focus on the component's first focusable element.
   *
   * @param focusId
   */
  async setFocus(focusId) {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    return _shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.p.call(this, focusId);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  getIconType() {
    let type = null;
    if (this.dragEnabled) {
      type = ICON_TYPES.grip;
    }
    return type;
  }
  updateScreenReaderText(text) {
    this.assistiveTextEl.textContent = text;
  }
  updateHandleAriaLabel(handleElement, text) {
    handleElement.ariaLabel = text;
  }
  handleValueListItemBlur(event) {
    const { item, handle } = event.detail;
    if (!item?.handleActivated && item) {
      this.updateHandleAriaLabel(handle, getScreenReaderText(item, "idle", this));
    }
    event.stopPropagation();
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_14__.h)(_shared_list_render_js__WEBPACK_IMPORTED_MODULE_5__.L, { onBlur: this.handleBlur, onFocusin: this.handleFocusIn, onKeyDown: this.keyDownHandler, props: this }));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return valueListCss; }
}, [1, "calcite-value-list", {
    "disabled": [516],
    "canPull": [16],
    "canPut": [16],
    "dragEnabled": [516, "drag-enabled"],
    "filteredItems": [1040],
    "filteredData": [1040],
    "filterEnabled": [516, "filter-enabled"],
    "filterPlaceholder": [513, "filter-placeholder"],
    "filterText": [1537, "filter-text"],
    "group": [513],
    "loading": [516],
    "multiple": [516],
    "selectionFollowsFocus": [516, "selection-follows-focus"],
    "messageOverrides": [1040],
    "messages": [1040],
    "dataForFilter": [32],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "selectedValues": [32],
    "getSelectedItems": [64],
    "setFocus": [64]
  }, [[0, "focusout", "calciteListFocusOutHandler"], [0, "calciteListItemRemove", "calciteListItemRemoveHandler"], [0, "calciteListItemChange", "calciteListItemChangeHandler"], [0, "calciteInternalListItemPropsChange", "calciteInternalListItemPropsChangeHandler"], [0, "calciteInternalListItemValueChange", "calciteInternalListItemValueChangeHandler"], [0, "calciteValueListItemDragHandleBlur", "handleValueListItemBlur"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-value-list", "calcite-filter", "calcite-icon", "calcite-input", "calcite-loader", "calcite-progress", "calcite-scrim"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-value-list":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ValueList);
      }
      break;
    case "calcite-filter":
      if (!customElements.get(tagName)) {
        (0,_filter_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_9__.d)();
      }
      break;
    case "calcite-input":
      if (!customElements.get(tagName)) {
        (0,_input_js__WEBPACK_IMPORTED_MODULE_10__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_11__.d)();
      }
      break;
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        (0,_progress_js__WEBPACK_IMPORTED_MODULE_12__.d)();
      }
      break;
    case "calcite-scrim":
      if (!customElements.get(tagName)) {
        (0,_scrim_js__WEBPACK_IMPORTED_MODULE_13__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteValueList = ValueList;
const defineCustomElement = defineCustomElement$1;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMDA4Y2JkNDNmM2Q4ZmUxZTIxODJhMjE3MjcyMTc5NzIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lHO0FBQ1U7QUFDTDtBQUNoQztBQUN6QjtBQUM2RDtBQUNvYTtBQUM1WjtBQUM3RTtBQUNZO0FBQ0Y7QUFDQztBQUNDO0FBQ0U7QUFDSDs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQzs7QUFFakM7QUFDQSxVQUFVLGtCQUFrQjtBQUM1QjtBQUNBLG1CQUFtQix5REFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQsaURBQWlELFVBQVU7QUFDM0QsZ0NBQWdDLE1BQU07QUFDdEM7O0FBRUEsd0NBQXdDLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGtCQUFrQixzQkFBc0IsYUFBYSxjQUFjLFlBQVksc0JBQXNCLG9CQUFvQiw2QkFBNkIsc0NBQXNDLCtCQUErQixRQUFRLHNCQUFzQix5R0FBeUcsVUFBVSxxQ0FBcUMsc0JBQXNCLDhCQUE4Qix1R0FBdUcsK0JBQStCLHlCQUF5QixhQUFhLG1CQUFtQix5QkFBeUIsZ0RBQWdELCtDQUErQyxtREFBbUQsdUdBQXVHLDBDQUEwQyxnQkFBZ0Isc0JBQXNCLDBDQUEwQyxlQUFlLHFCQUFxQixnQkFBZ0Isa0JBQWtCLGdCQUFnQixlQUFlLFVBQVUsWUFBWSxnQkFBZ0Isc0JBQXNCLG1CQUFtQixlQUFlLGdCQUFnQixhQUFhLFNBQVMsYUFBYTs7QUFFLzlDLGdDQUFnQywyRkFBa0IsZUFBZSxnRkFBVztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixvRkFBVztBQUN4QyxrQ0FBa0Msb0ZBQVc7QUFDN0MsNkJBQTZCLG9GQUFXO0FBQ3hDO0FBQ0EsNEJBQTRCLGdEQUFjLGFBQWEscURBQXdCO0FBQy9FLDhCQUE4QixXQUFXO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFEQUFvQjtBQUNwRCxnQ0FBZ0MscURBQW9CO0FBQ3BELDBCQUEwQixxREFBYztBQUN4Qyx3QkFBd0IscURBQVk7QUFDcEMsNkJBQTZCLHFEQUFpQjtBQUM5Qyx1QkFBdUIscURBQVc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGVBQWU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLEtBQUs7QUFDbkIsd0JBQXdCLHlEQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsT0FBTztBQUNoRSxrQ0FBa0MsMENBQVk7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGVBQWU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBDQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBVTtBQUNsQjtBQUNBO0FBQ0EsSUFBSSxrREFBa0I7QUFDdEIsSUFBSSw2Q0FBZ0I7QUFDcEIsSUFBSSwwQ0FBZTtBQUNuQixJQUFJLHFEQUFVO0FBQ2QsSUFBSSxxREFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBc0I7QUFDMUIsVUFBVSwwQ0FBYTtBQUN2QjtBQUNBO0FBQ0EsSUFBSSwrQ0FBa0I7QUFDdEIsSUFBSSxxREFBbUI7QUFDdkI7QUFDQTtBQUNBLElBQUksa0RBQXFCO0FBQ3pCO0FBQ0E7QUFDQSxRQUFRLHdEQUFVO0FBQ2xCO0FBQ0E7QUFDQSxJQUFJLGtEQUFxQjtBQUN6QixJQUFJLHdEQUEyQjtBQUMvQixJQUFJLDZDQUFtQjtBQUN2QixJQUFJLDBDQUFrQjtBQUN0QixJQUFJLHFEQUFlO0FBQ25CO0FBQ0E7QUFDQSxJQUFJLHFEQUEwQjtBQUM5QjtBQUNBO0FBQ0EsSUFBSSxxREFBVTtBQUNkO0FBQ0E7QUFDQSxJQUFJLHFEQUE0QjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUF5QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBZTtBQUNuQjtBQUNBO0FBQ0EsSUFBSSxxREFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUF3QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtDQUFrQjtBQUM1QixXQUFXLHFEQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwRUFBQyxDQUFDLHFEQUFJLElBQUkscUdBQXFHO0FBQzNIO0FBQ0EsNEJBQTRCO0FBQzVCLGFBQWE7QUFDYiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkNBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZDQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOENBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnREFBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZDQUFxQjtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFaUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS12YWx1ZS1saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSB9IGZyb20gJy4vaW50ZXJhY3RpdmUuanMnO1xuaW1wb3J0IHsgYSBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBzIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRGb2N1c2FibGUgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlTWVzc2FnZXMsIGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzIH0gZnJvbSAnLi90OW4uanMnO1xuaW1wb3J0IHsgcSBhcyBnZXRJdGVtSW5kZXgsIG0gYXMgbXV0YXRpb25PYnNlcnZlckNhbGxiYWNrLCBkIGFzIGRlc2VsZWN0UmVtb3ZlZEl0ZW1zLCBhIGFzIGRlc2VsZWN0U2libGluZ0l0ZW1zLCBzIGFzIHNlbGVjdFNpYmxpbmdzLCBoIGFzIGhhbmRsZUZpbHRlciwgYiBhcyBoYW5kbGVGaWx0ZXJFdmVudCwgZyBhcyBnZXRJdGVtRGF0YSwgayBhcyBrZXlEb3duSGFuZGxlciwgdCBhcyBtb3ZlSXRlbUluZGV4LCBpIGFzIGluaXRpYWxpemUsIGMgYXMgaW5pdGlhbGl6ZU9ic2VydmVyLCBmIGFzIGhhbmRsZUluaXRpYWxGaWx0ZXIsIGUgYXMgY2xlYW5VcE9ic2VydmVyLCBuIGFzIGNhbGNpdGVMaXN0Rm9jdXNPdXRIYW5kbGVyLCByIGFzIHJlbW92ZUl0ZW0sIGogYXMgY2FsY2l0ZUxpc3RJdGVtQ2hhbmdlSGFuZGxlciwgbCBhcyBjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVZhbHVlQ2hhbmdlSGFuZGxlciwgbyBhcyBzZXRVcEl0ZW1zLCBwIGFzIHNldEZvY3VzLCBMIGFzIExpc3QgfSBmcm9tICcuL3NoYXJlZC1saXN0LXJlbmRlci5qcyc7XG5pbXBvcnQgeyBkIGFzIGRyYWdBY3RpdmUsIGEgYXMgZGlzY29ubmVjdFNvcnRhYmxlQ29tcG9uZW50LCBjIGFzIGNvbm5lY3RTb3J0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vc29ydGFibGVDb21wb25lbnQuanMnO1xuaW1wb3J0IHsgayBhcyBmb2N1c0VsZW1lbnQgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNyB9IGZyb20gJy4vZmlsdGVyLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ2IH0gZnJvbSAnLi9pY29uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ1IH0gZnJvbSAnLi9pbnB1dC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNCB9IGZyb20gJy4vbG9hZGVyLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQzIH0gZnJvbSAnLi9wcm9ncmVzcy5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMiB9IGZyb20gJy4vc2NyaW0uanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgaGFuZGxlOiBcImhhbmRsZVwiLFxufTtcbnZhciBJQ09OX1RZUEVTO1xuKGZ1bmN0aW9uIChJQ09OX1RZUEVTKSB7XG4gIElDT05fVFlQRVNbXCJncmlwXCJdID0gXCJncmlwXCI7XG59KShJQ09OX1RZUEVTIHx8IChJQ09OX1RZUEVTID0ge30pKTtcblxuZnVuY3Rpb24gZ2V0U2NyZWVuUmVhZGVyVGV4dChpdGVtLCBzdGF0dXMsIHZhbHVlTGlzdCkge1xuICBjb25zdCB7IGl0ZW1zLCBtZXNzYWdlcyB9ID0gdmFsdWVMaXN0O1xuICBjb25zdCB0b3RhbCA9IGl0ZW1zLmxlbmd0aDtcbiAgY29uc3QgcG9zaXRpb24gPSBnZXRJdGVtSW5kZXgodmFsdWVMaXN0LCBpdGVtKSArIDE7XG4gIGNvbnN0IHRlbXBsYXRlID0gc3RhdHVzID09PSBcImlkbGVcIlxuICAgID8gbWVzc2FnZXMuZHJhZ0hhbmRsZUlkbGVcbiAgICA6IHN0YXR1cyA9PT0gXCJhY3RpdmVcIlxuICAgICAgPyBtZXNzYWdlcy5kcmFnSGFuZGxlQWN0aXZlXG4gICAgICA6IHN0YXR1cyA9PT0gXCJjaGFuZ2VcIlxuICAgICAgICA/IG1lc3NhZ2VzLmRyYWdIYW5kbGVDaGFuZ2VcbiAgICAgICAgOiBtZXNzYWdlcy5kcmFnSGFuZGxlQ29tbWl0O1xuICByZXR1cm4gcmVwbGFjZVBsYWNlaG9sZGVycyh0ZW1wbGF0ZSwgaXRlbS5sYWJlbCwgcG9zaXRpb24sIHRvdGFsKTtcbn1cbmZ1bmN0aW9uIGdldEhhbmRsZUFuZEl0ZW1FbGVtZW50KGV2ZW50KSB7XG4gIGNvbnN0IGhhbmRsZSA9IGV2ZW50XG4gICAgLmNvbXBvc2VkUGF0aCgpXG4gICAgLmZpbmQoKGl0ZW0pID0+IGl0ZW0uZGF0YXNldD8uanNIYW5kbGUgIT09IHVuZGVmaW5lZCk7XG4gIGNvbnN0IGl0ZW0gPSBldmVudFxuICAgIC5jb21wb3NlZFBhdGgoKVxuICAgIC5maW5kKChpdGVtKSA9PiBpdGVtLnRhZ05hbWU/LnRvTG93ZXJDYXNlKCkgPT09IFwiY2FsY2l0ZS12YWx1ZS1saXN0LWl0ZW1cIik7XG4gIHJldHVybiB7IGhhbmRsZSwgaXRlbSB9O1xufVxuZnVuY3Rpb24gcmVwbGFjZVBsYWNlaG9sZGVycyh0ZXh0LCBsYWJlbCwgcG9zaXRpb24sIHRvdGFsKSB7XG4gIGNvbnN0IHJlcGxhY2VQb3NpdGlvbiA9IHRleHQucmVwbGFjZShcIntwb3NpdGlvbn1cIiwgcG9zaXRpb24udG9TdHJpbmcoKSk7XG4gIGNvbnN0IHJlcGxhY2VMYWJlbCA9IHJlcGxhY2VQb3NpdGlvbi5yZXBsYWNlKFwie2l0ZW1MYWJlbH1cIiwgbGFiZWwpO1xuICByZXR1cm4gcmVwbGFjZUxhYmVsLnJlcGxhY2UoXCJ7dG90YWx9XCIsIHRvdGFsLnRvU3RyaW5nKCkpO1xufVxuXG5jb25zdCB2YWx1ZUxpc3RDc3MgPSBcIjpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7ZmxleC1zaHJpbms6MDtmbGV4LWdyb3c6MDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6c3RyZXRjaDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfTpob3N0ICp7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX1jYWxjaXRlLXZhbHVlLWxpc3QtaXRlbTpsYXN0LW9mLXR5cGV7LS10dy1zaGFkb3c6MCAwICMwMDAwOy0tdHctc2hhZG93LWNvbG9yZWQ6MCAwICMwMDAwO2JveC1zaGFkb3c6dmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KX06aG9zdChbZmlsdGVyLWVuYWJsZWRdKSBoZWFkZXJ7bWFyZ2luLWJsb2NrLWVuZDowLjI1cmVtO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpOy0tdHctc2hhZG93OjAgMXB4IDAgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7LS10dy1zaGFkb3ctY29sb3JlZDowIDFweCAwIHZhcigtLXR3LXNoYWRvdy1jb2xvcik7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfTpob3N0KFtmaWx0ZXItZW5hYmxlZF0pIGhlYWRlci5zdGlja3ktcG9ze3Bvc2l0aW9uOnN0aWNreTtpbnNldC1ibG9jay1zdGFydDowcHg7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LXN0aWNreSl9Y2FsY2l0ZS1maWx0ZXJ7bWFyZ2luLWJsb2NrLWVuZDoxcHh9LmFzc2lzdGl2ZS10ZXh0e3Bvc2l0aW9uOmFic29sdXRlO2lubGluZS1zaXplOjFweDtibG9jay1zaXplOjFweDtwYWRkaW5nOjA7bWFyZ2luOi0xcHg7b3ZlcmZsb3c6aGlkZGVuO2NsaXA6cmVjdCgwLCAwLCAwLCAwKTt3aGl0ZS1zcGFjZTpub3dyYXA7Ym9yZGVyLXdpZHRoOjB9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IFZhbHVlTGlzdCA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlTGlzdENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUxpc3RDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlTGlzdE9yZGVyQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlTGlzdE9yZGVyQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUxpc3RGaWx0ZXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVMaXN0RmlsdGVyXCIsIDYpO1xuICAgIHRoaXMubGFzdFNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCBtdXRhdGlvbk9ic2VydmVyQ2FsbGJhY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy5oYW5kbGVTZWxlY3RvciA9IGAuJHtDU1MuaGFuZGxlfWA7XG4gICAgdGhpcy5kcmFnU2VsZWN0b3IgPSBcImNhbGNpdGUtdmFsdWUtbGlzdC1pdGVtXCI7XG4gICAgdGhpcy5zZXRGaWx0ZXJFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5maWx0ZXJFbCA9IGVsO1xuICAgIH07XG4gICAgdGhpcy5zZXRGaWx0ZXJlZEl0ZW1zID0gKGZpbHRlcmVkSXRlbXMpID0+IHtcbiAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IGZpbHRlcmVkSXRlbXM7XG4gICAgfTtcbiAgICB0aGlzLmRlc2VsZWN0UmVtb3ZlZEl0ZW1zID0gZGVzZWxlY3RSZW1vdmVkSXRlbXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlc2VsZWN0U2libGluZ0l0ZW1zID0gZGVzZWxlY3RTaWJsaW5nSXRlbXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbGVjdFNpYmxpbmdzID0gc2VsZWN0U2libGluZ3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUZpbHRlciA9IGhhbmRsZUZpbHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyRXZlbnQgPSBoYW5kbGVGaWx0ZXJFdmVudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0SXRlbURhdGEgPSBnZXRJdGVtRGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgaGFuZGxlLCBpdGVtIH0gPSBnZXRIYW5kbGVBbmRJdGVtRWxlbWVudChldmVudCk7XG4gICAgICBpZiAoaGFuZGxlICYmICFpdGVtLmhhbmRsZUFjdGl2YXRlZCAmJiBldmVudC5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU2NyZWVuUmVhZGVyVGV4dChnZXRTY3JlZW5SZWFkZXJUZXh0KGl0ZW0sIFwiY29tbWl0XCIsIHRoaXMpKTtcbiAgICAgIH1cbiAgICAgIGlmICghaGFuZGxlIHx8ICFpdGVtLmhhbmRsZUFjdGl2YXRlZCkge1xuICAgICAgICBrZXlEb3duSGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXM7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIiBcIikge1xuICAgICAgICB0aGlzLnVwZGF0ZVNjcmVlblJlYWRlclRleHQoZ2V0U2NyZWVuUmVhZGVyVGV4dChpdGVtLCBcImFjdGl2ZVwiLCB0aGlzKSk7XG4gICAgICB9XG4gICAgICBpZiAoKGV2ZW50LmtleSAhPT0gXCJBcnJvd1VwXCIgJiYgZXZlbnQua2V5ICE9PSBcIkFycm93RG93blwiKSB8fCBpdGVtcy5sZW5ndGggPD0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7IGVsIH0gPSB0aGlzO1xuICAgICAgY29uc3QgbmV4dEluZGV4ID0gbW92ZUl0ZW1JbmRleCh0aGlzLCBpdGVtLCBldmVudC5rZXkgPT09IFwiQXJyb3dVcFwiID8gXCJ1cFwiIDogXCJkb3duXCIpO1xuICAgICAgaWYgKG5leHRJbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBpdGVtQXROZXh0SW5kZXggPSBlbC5jaGlsZHJlbltuZXh0SW5kZXhdO1xuICAgICAgICBjb25zdCBpbnNlcnRpb25SZWZlcmVuY2VJdGVtID0gaXRlbUF0TmV4dEluZGV4ID09PSBpdGVtLm5leHRFbGVtZW50U2libGluZ1xuICAgICAgICAgID8gaXRlbUF0TmV4dEluZGV4Lm5leHRFbGVtZW50U2libGluZ1xuICAgICAgICAgIDogaXRlbUF0TmV4dEluZGV4O1xuICAgICAgICBlbC5pbnNlcnRCZWZvcmUoaXRlbSwgaW5zZXJ0aW9uUmVmZXJlbmNlSXRlbSk7XG4gICAgICB9XG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xuICAgICAgdGhpcy5jYWxjaXRlTGlzdE9yZGVyQ2hhbmdlLmVtaXQodGhpcy5pdGVtcy5tYXAoKHsgdmFsdWUgfSkgPT4gdmFsdWUpKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBmb2N1c0VsZW1lbnQoaGFuZGxlKSk7XG4gICAgICBpdGVtLmhhbmRsZUFjdGl2YXRlZCA9IHRydWU7XG4gICAgICB0aGlzLnVwZGF0ZUhhbmRsZUFyaWFMYWJlbChoYW5kbGUsIGdldFNjcmVlblJlYWRlclRleHQoaXRlbSwgXCJjaGFuZ2VcIiwgdGhpcykpO1xuICAgIH07XG4gICAgdGhpcy5zdG9yZUFzc2lzdGl2ZUVsID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmFzc2lzdGl2ZVRleHRFbCA9IGVsO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVGb2N1c0luID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGhhbmRsZSwgaXRlbSB9ID0gZ2V0SGFuZGxlQW5kSXRlbUVsZW1lbnQoZXZlbnQpO1xuICAgICAgaWYgKCFpdGVtPy5oYW5kbGVBY3RpdmF0ZWQgJiYgaXRlbSAmJiBoYW5kbGUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVIYW5kbGVBcmlhTGFiZWwoaGFuZGxlLCBnZXRTY3JlZW5SZWFkZXJUZXh0KGl0ZW0sIFwiaWRsZVwiLCB0aGlzKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5jYW5QdWxsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY2FuUHV0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBbXTtcbiAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IFtdO1xuICAgIHRoaXMuZmlsdGVyRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZmlsdGVyUGxhY2Vob2xkZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5maWx0ZXJUZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZ3JvdXAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5tdWx0aXBsZSA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0aW9uRm9sbG93c0ZvY3VzID0gZmFsc2U7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kYXRhRm9yRmlsdGVyID0gW107XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPSBuZXcgTWFwKCk7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoZHJhZ0FjdGl2ZSh0aGlzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgaW5pdGlhbGl6ZS5jYWxsKHRoaXMpO1xuICAgIGluaXRpYWxpemVPYnNlcnZlci5jYWxsKHRoaXMpO1xuICAgIHRoaXMuc2V0VXBTb3J0aW5nKCk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIGhhbmRsZUluaXRpYWxGaWx0ZXIuY2FsbCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmIChkcmFnQWN0aXZlKHRoaXMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBkaXNjb25uZWN0U29ydGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgY2xlYW5VcE9ic2VydmVyLmNhbGwodGhpcyk7XG4gIH1cbiAgY2FsY2l0ZUxpc3RGb2N1c091dEhhbmRsZXIoZXZlbnQpIHtcbiAgICBjYWxjaXRlTGlzdEZvY3VzT3V0SGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgfVxuICBjYWxjaXRlTGlzdEl0ZW1SZW1vdmVIYW5kbGVyKGV2ZW50KSB7XG4gICAgcmVtb3ZlSXRlbS5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgfVxuICBjYWxjaXRlTGlzdEl0ZW1DaGFuZ2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgY2FsY2l0ZUxpc3RJdGVtQ2hhbmdlSGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgfVxuICBjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVByb3BzQ2hhbmdlSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuc2V0VXBGaWx0ZXIoKTtcbiAgfVxuICBjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVZhbHVlQ2hhbmdlSGFuZGxlcihldmVudCkge1xuICAgIGNhbGNpdGVJbnRlcm5hbExpc3RJdGVtVmFsdWVDaGFuZ2VIYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgb25EcmFnU3RhcnQoKSB7XG4gICAgY2xlYW5VcE9ic2VydmVyLmNhbGwodGhpcyk7XG4gIH1cbiAgb25EcmFnRW5kKCkge1xuICAgIGluaXRpYWxpemVPYnNlcnZlci5jYWxsKHRoaXMpO1xuICB9XG4gIG9uRHJhZ1NvcnQoKSB7XG4gICAgdGhpcy5pdGVtcyA9IEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS12YWx1ZS1saXN0LWl0ZW1cIikpO1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuaXRlbXMubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKTtcbiAgICB0aGlzLmNhbGNpdGVMaXN0T3JkZXJDaGFuZ2UuZW1pdCh2YWx1ZXMpO1xuICB9XG4gIGdldEl0ZW1zKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtdmFsdWUtbGlzdC1pdGVtXCIpKTtcbiAgfVxuICBzZXRVcEl0ZW1zKCkge1xuICAgIHNldFVwSXRlbXMuY2FsbCh0aGlzLCBcImNhbGNpdGUtdmFsdWUtbGlzdC1pdGVtXCIpO1xuICAgIHRoaXMuc2V0VXBTb3J0aW5nKCk7XG4gIH1cbiAgc2V0VXBGaWx0ZXIoKSB7XG4gICAgaWYgKHRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5kYXRhRm9yRmlsdGVyID0gdGhpcy5nZXRJdGVtRGF0YSgpO1xuICAgIH1cbiAgfVxuICBzZXRVcFNvcnRpbmcoKSB7XG4gICAgY29uc3QgeyBkcmFnRW5hYmxlZCB9ID0gdGhpcztcbiAgICBpZiAoIWRyYWdFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbm5lY3RTb3J0YWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBoYW5kbGVCbHVyKCkge1xuICAgIGlmICh0aGlzLmRyYWdFbmFibGVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNjcmVlblJlYWRlclRleHQoXCJcIik7XG4gICAgfVxuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogUmV0dXJucyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW1zICovXG4gIGFzeW5jIGdldFNlbGVjdGVkSXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRWYWx1ZXM7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gZm9jdXNJZFxuICAgKi9cbiAgYXN5bmMgc2V0Rm9jdXMoZm9jdXNJZCkge1xuICAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAgICByZXR1cm4gc2V0Rm9jdXMuY2FsbCh0aGlzLCBmb2N1c0lkKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0SWNvblR5cGUoKSB7XG4gICAgbGV0IHR5cGUgPSBudWxsO1xuICAgIGlmICh0aGlzLmRyYWdFbmFibGVkKSB7XG4gICAgICB0eXBlID0gSUNPTl9UWVBFUy5ncmlwO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuICB1cGRhdGVTY3JlZW5SZWFkZXJUZXh0KHRleHQpIHtcbiAgICB0aGlzLmFzc2lzdGl2ZVRleHRFbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIH1cbiAgdXBkYXRlSGFuZGxlQXJpYUxhYmVsKGhhbmRsZUVsZW1lbnQsIHRleHQpIHtcbiAgICBoYW5kbGVFbGVtZW50LmFyaWFMYWJlbCA9IHRleHQ7XG4gIH1cbiAgaGFuZGxlVmFsdWVMaXN0SXRlbUJsdXIoZXZlbnQpIHtcbiAgICBjb25zdCB7IGl0ZW0sIGhhbmRsZSB9ID0gZXZlbnQuZGV0YWlsO1xuICAgIGlmICghaXRlbT8uaGFuZGxlQWN0aXZhdGVkICYmIGl0ZW0pIHtcbiAgICAgIHRoaXMudXBkYXRlSGFuZGxlQXJpYUxhYmVsKGhhbmRsZSwgZ2V0U2NyZWVuUmVhZGVyVGV4dChpdGVtLCBcImlkbGVcIiwgdGhpcykpO1xuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKExpc3QsIHsgb25CbHVyOiB0aGlzLmhhbmRsZUJsdXIsIG9uRm9jdXNpbjogdGhpcy5oYW5kbGVGb2N1c0luLCBvbktleURvd246IHRoaXMua2V5RG93bkhhbmRsZXIsIHByb3BzOiB0aGlzIH0pKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiB2YWx1ZUxpc3RDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtdmFsdWUtbGlzdFwiLCB7XG4gICAgXCJkaXNhYmxlZFwiOiBbNTE2XSxcbiAgICBcImNhblB1bGxcIjogWzE2XSxcbiAgICBcImNhblB1dFwiOiBbMTZdLFxuICAgIFwiZHJhZ0VuYWJsZWRcIjogWzUxNiwgXCJkcmFnLWVuYWJsZWRcIl0sXG4gICAgXCJmaWx0ZXJlZEl0ZW1zXCI6IFsxMDQwXSxcbiAgICBcImZpbHRlcmVkRGF0YVwiOiBbMTA0MF0sXG4gICAgXCJmaWx0ZXJFbmFibGVkXCI6IFs1MTYsIFwiZmlsdGVyLWVuYWJsZWRcIl0sXG4gICAgXCJmaWx0ZXJQbGFjZWhvbGRlclwiOiBbNTEzLCBcImZpbHRlci1wbGFjZWhvbGRlclwiXSxcbiAgICBcImZpbHRlclRleHRcIjogWzE1MzcsIFwiZmlsdGVyLXRleHRcIl0sXG4gICAgXCJncm91cFwiOiBbNTEzXSxcbiAgICBcImxvYWRpbmdcIjogWzUxNl0sXG4gICAgXCJtdWx0aXBsZVwiOiBbNTE2XSxcbiAgICBcInNlbGVjdGlvbkZvbGxvd3NGb2N1c1wiOiBbNTE2LCBcInNlbGVjdGlvbi1mb2xsb3dzLWZvY3VzXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJkYXRhRm9yRmlsdGVyXCI6IFszMl0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwic2VsZWN0ZWRWYWx1ZXNcIjogWzMyXSxcbiAgICBcImdldFNlbGVjdGVkSXRlbXNcIjogWzY0XSxcbiAgICBcInNldEZvY3VzXCI6IFs2NF1cbiAgfSwgW1swLCBcImZvY3Vzb3V0XCIsIFwiY2FsY2l0ZUxpc3RGb2N1c091dEhhbmRsZXJcIl0sIFswLCBcImNhbGNpdGVMaXN0SXRlbVJlbW92ZVwiLCBcImNhbGNpdGVMaXN0SXRlbVJlbW92ZUhhbmRsZXJcIl0sIFswLCBcImNhbGNpdGVMaXN0SXRlbUNoYW5nZVwiLCBcImNhbGNpdGVMaXN0SXRlbUNoYW5nZUhhbmRsZXJcIl0sIFswLCBcImNhbGNpdGVJbnRlcm5hbExpc3RJdGVtUHJvcHNDaGFuZ2VcIiwgXCJjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVByb3BzQ2hhbmdlSGFuZGxlclwiXSwgWzAsIFwiY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1WYWx1ZUNoYW5nZVwiLCBcImNhbGNpdGVJbnRlcm5hbExpc3RJdGVtVmFsdWVDaGFuZ2VIYW5kbGVyXCJdLCBbMCwgXCJjYWxjaXRlVmFsdWVMaXN0SXRlbURyYWdIYW5kbGVCbHVyXCIsIFwiaGFuZGxlVmFsdWVMaXN0SXRlbUJsdXJcIl1dXSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50JDEoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtdmFsdWUtbGlzdFwiLCBcImNhbGNpdGUtZmlsdGVyXCIsIFwiY2FsY2l0ZS1pY29uXCIsIFwiY2FsY2l0ZS1pbnB1dFwiLCBcImNhbGNpdGUtbG9hZGVyXCIsIFwiY2FsY2l0ZS1wcm9ncmVzc1wiLCBcImNhbGNpdGUtc2NyaW1cIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtdmFsdWUtbGlzdFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIFZhbHVlTGlzdCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1maWx0ZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ2KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pbnB1dFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ1KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNCgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtcHJvZ3Jlc3NcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtc2NyaW1cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcblxuY29uc3QgQ2FsY2l0ZVZhbHVlTGlzdCA9IFZhbHVlTGlzdDtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVWYWx1ZUxpc3QsIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==