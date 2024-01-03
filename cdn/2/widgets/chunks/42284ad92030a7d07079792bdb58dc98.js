"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-table_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-table.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-table.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteTable: () => (/* binding */ CalciteTable),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button.js */ "./node_modules/@esri/calcite-components/dist/components/button.js");
/* harmony import */ var _chip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chip.js */ "./node_modules/@esri/calcite-components/dist/components/chip.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _pagination_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pagination.js */ "./node_modules/@esri/calcite-components/dist/components/pagination.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */











const CSS = {
  bordered: "bordered",
  zebra: "zebra",
  selectionArea: "selection-area",
  paginationArea: "pagination-area",
  container: "container",
  tableContainer: "table-container",
  tableFixed: "table--fixed",
  assistiveText: "assistive-text",
  selectionActions: "selection-actions",
};
const SLOTS = {
  selectionActions: "selection-actions",
  tableHeader: "table-header",
  tableFooter: "table-footer",
};

const tableCss = ":host([scale=s]){--calcite-internal-table-cell-padding:0.25rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size--2);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--3)}:host([scale=m]){--calcite-internal-table-cell-padding:0.5rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size--1);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--2)}:host([scale=l]){--calcite-internal-table-cell-padding:1rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size-0);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--1)}:host{display:table}.container{max-inline-size:100vw;inline-size:100%}.table-container{overflow-x:auto;white-space:nowrap}.table-container:not(.bordered){border-block-end:1px solid var(--calcite-ui-border-3)}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}table{inline-size:100%;border-collapse:collapse;overflow-x:scroll;border-block-start:1px solid var(--calcite-ui-border-3);border-inline-start:1px solid var(--calcite-ui-border-3);border-block-end:1px solid var(--calcite-ui-border-3)}tbody{border-block-end:1px solid var(--calcite-ui-border-3)}.table--fixed{table-layout:fixed}.bordered ::slotted(calcite-table-row){--calcite-table-row-border-color:var(--calcite-ui-border-3)}.zebra ::slotted(calcite-table-row:nth-child(2n+1)){--calcite-table-row-background:var(--calcite-ui-foreground-2)}.selection-actions{display:flex;flex-direction:row;margin-inline-start:auto}.selection-area{display:flex;flex-direction:row;align-items:center;padding-block:var(--calcite-internal-table-cell-padding)}.selection-area calcite-chip:last-of-type{margin-inline-end:0.5rem}.selection-area calcite-chip:last-of-type:not(:first-of-type){margin-inline-start:0.5rem}.selection-area calcite-button{margin-inline-end:1rem}.pagination-area{display:flex;inline-size:100%;flex-direction:row;justify-content:center;padding-block:var(--calcite-internal-table-cell-padding)}calcite-pagination{flex:1;justify-content:center}:host([hidden]){display:none}[hidden]{display:none}";

const Table = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteTableSelect = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteTableSelect", 6);
    this.calciteTablePageChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteTablePageChange", 6);
    this.calciteInternalTableRowFocusChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteInternalTableRowFocusChange", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.getSlottedRows = (el) => {
      return el
        ?.assignedElements({ flatten: true })
        ?.filter((el) => el?.matches("calcite-table-row"));
    };
    this.updateRows = () => {
      const headRows = this.getSlottedRows(this.tableHeadSlotEl) || [];
      const bodyRows = this.getSlottedRows(this.tableBodySlotEl) || [];
      const footRows = this.getSlottedRows(this.tableFootSlotEl) || [];
      const allRows = [...headRows, ...bodyRows, ...footRows];
      headRows?.forEach((row) => {
        const position = headRows?.indexOf(row);
        row.rowType = "head";
        row.positionSection = position;
        row.positionSectionLocalized = this.localizeNumber((position + 1).toString());
      });
      bodyRows?.forEach((row) => {
        const position = bodyRows?.indexOf(row);
        row.rowType = "body";
        row.positionSection = position;
        row.positionSectionLocalized = this.localizeNumber((position + 1).toString());
      });
      footRows?.forEach((row) => {
        const position = footRows?.indexOf(row);
        row.rowType = "foot";
        row.positionSection = position;
        row.positionSectionLocalized = this.localizeNumber((position + 1).toString());
      });
      allRows?.forEach((row) => {
        row.selectionMode = this.selectionMode;
        row.bodyRowCount = bodyRows?.length;
        row.positionAll = allRows?.indexOf(row);
        row.numbered = this.numbered;
        row.scale = this.scale;
        row.readCellContentsToAT = this.readCellContentsToAT;
      });
      const colCount = headRows[0]?.cellCount || headRows[0]?.querySelectorAll("calcite-table-header")?.length;
      this.colCount = colCount;
      this.headRows = headRows;
      this.bodyRows = bodyRows;
      this.footRows = footRows;
      this.allRows = allRows;
      this.updateSelectedItems();
      this.paginateRows();
    };
    this.handlePaginationChange = () => {
      const requestedItem = this.paginationEl?.startItem;
      this.pageStartRow = requestedItem || 1;
      this.calciteTablePageChange.emit();
      this.updateRows();
    };
    this.paginateRows = () => {
      this.bodyRows?.forEach((row) => {
        const rowPos = row.positionSection + 1;
        const inView = rowPos >= this.pageStartRow && rowPos < this.pageStartRow + this.pageSize;
        row.hidden = this.pageSize > 0 && !inView && !this.footRows.includes(row);
      });
    };
    this.updateSelectedItems = (emit) => {
      const selectedItems = this.bodyRows?.filter((el) => el.selected);
      this.selectedItems = selectedItems;
      this.selectedCount = selectedItems?.length;
      this.allRows?.forEach((row) => {
        row.selectedRowCount = this.selectedCount;
        row.selectedRowCountLocalized = this.localizeNumber(this.selectedCount);
      });
      if (emit) {
        this.calciteTableSelect.emit();
      }
    };
    this.handleDeselectAllRows = () => {
      this.bodyRows?.forEach((row) => {
        row.selected = false;
      });
      this.updateSelectedItems(true);
    };
    this.setSelectedItems = (elToMatch) => {
      this.bodyRows?.forEach((el) => {
        if (elToMatch?.rowType === "head") {
          el.selected = this.selectedCount !== this.bodyRows?.length;
        }
        else {
          el.selected =
            elToMatch === el ? !el.selected : this.selectionMode === "multiple" ? el.selected : false;
        }
      });
      this.updateSelectedItems(true);
    };
    this.localizeNumber = (value) => {
      _locale_js__WEBPACK_IMPORTED_MODULE_2__.n.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator,
      };
      return _locale_js__WEBPACK_IMPORTED_MODULE_2__.n.localize(value.toString());
    };
    this.bordered = false;
    this.caption = undefined;
    this.groupSeparator = false;
    this.layout = "auto";
    this.numbered = false;
    this.numberingSystem = undefined;
    this.pageSize = 0;
    this.scale = "m";
    this.selectionMode = "none";
    this.zebra = false;
    this.selectedItems = [];
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.colCount = 0;
    this.pageStartRow = 1;
    this.selectedCount = 0;
    this.readCellContentsToAT = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
  }
  handleNumberedChange() {
    this.updateRows();
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
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_0__.a)(this);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.s)(this);
    this.readCellContentsToAT = /safari/i.test((0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.g)());
    this.updateRows();
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_0__.s)(this);
  }
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
  }
  disconnectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  calciteChipSelectListener(event) {
    if (event.composedPath().includes(this.el)) {
      this.setSelectedItems(event.target);
    }
  }
  calciteInternalTableRowFocusEvent(event) {
    const cellPosition = event["detail"].cellPosition;
    const rowPos = event["detail"].rowPosition;
    const destination = event["detail"].destination;
    const lastCell = event["detail"].lastCell;
    const visibleBody = this.bodyRows?.filter((row) => !row.hidden);
    const visibleAll = this.allRows?.filter((row) => !row.hidden);
    const lastHeadRow = this.headRows[this.headRows.length - 1]?.positionAll;
    const firstBodyRow = visibleBody[0]?.positionAll;
    const lastBodyRow = visibleBody[visibleBody.length - 1]?.positionAll;
    const firstFootRow = this.footRows[0]?.positionAll;
    const lastTableRow = visibleAll[visibleAll.length - 1]?.positionAll;
    const leavingHeader = destination === "next" && rowPos === lastHeadRow;
    const leavingFooter = destination === "previous" && rowPos === firstFootRow;
    const enteringHeader = destination === "previous" && rowPos === firstBodyRow;
    const enteringFooter = destination === "next" && rowPos === lastBodyRow;
    let rowPosition;
    switch (destination) {
      case "first":
        rowPosition = 0;
        break;
      case "last":
        rowPosition = lastTableRow;
        break;
      case "next":
        rowPosition = leavingHeader ? firstBodyRow : enteringFooter ? firstFootRow : rowPos + 1;
        break;
      case "previous":
        rowPosition = leavingFooter ? lastBodyRow : enteringHeader ? lastHeadRow : rowPos - 1;
        break;
    }
    const destinationCount = this.allRows?.find((row) => row.positionAll === rowPosition)?.cellCount;
    const adjustedPos = cellPosition > destinationCount ? destinationCount : cellPosition;
    if (rowPosition !== undefined) {
      this.calciteInternalTableRowFocusChange.emit({
        cellPosition: adjustedPos,
        rowPosition,
        destination,
        lastCell,
      });
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderSelectionArea() {
    const outOfViewCount = this.selectedItems?.filter((el) => el.hidden)?.length;
    const localizedOutOfView = this.localizeNumber(outOfViewCount?.toString());
    const localizedSelectedCount = this.localizeNumber(this.selectedCount?.toString());
    const selectionText = `${localizedSelectedCount} ${this.messages.selected}`;
    const outOfView = `${localizedOutOfView} ${this.messages.hiddenSelected}`;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: CSS.selectionArea }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-chip", { kind: this.selectedCount > 0 ? "brand" : "neutral", scale: this.scale, value: selectionText }, selectionText), outOfViewCount > 0 && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-chip", { icon: "hide-empty", scale: this.scale, title: outOfView, value: outOfView }, localizedOutOfView)), this.selectedCount > 0 && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-button", { "icon-start": "x", kind: "neutral", onClick: this.handleDeselectAllRows, round: true, scale: this.scale, title: `${this.messages.clear} ${selectionText} ${this.messages.row}` }, this.messages.clear)), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: CSS.selectionActions }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: SLOTS.selectionActions }))));
  }
  renderPaginationArea() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: CSS.paginationArea }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-pagination", { groupSeparator: this.groupSeparator, numberingSystem: this.numberingSystem, onCalcitePaginationChange: this.handlePaginationChange, pageSize: this.pageSize, scale: this.scale, startItem: 1, totalItems: this.bodyRows?.length,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.paginationEl = el) })));
  }
  renderTHead() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("thead", null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: SLOTS.tableHeader, onSlotchange: this.updateRows, ref: (el) => (this.tableHeadSlotEl = el) })));
  }
  renderTBody() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("tbody", null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { onSlotchange: this.updateRows, ref: (el) => (this.tableBodySlotEl = el) })));
  }
  renderTFoot() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("tfoot", null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: SLOTS.tableFooter, onSlotchange: this.updateRows, ref: (el) => (this.tableFootSlotEl = el) })));
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.Host, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: CSS.container }, this.selectionMode !== "none" && this.renderSelectionArea(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: {
        [CSS.bordered]: this.bordered,
        [CSS.zebra]: this.zebra,
        [CSS.tableContainer]: true,
      } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("table", { "aria-colcount": this.colCount, "aria-multiselectable": this.selectionMode === "multiple", "aria-readonly": true, "aria-rowcount": this.allRows?.length, class: { [CSS.tableFixed]: this.layout === "fixed" }, role: "grid" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_9__.h)("caption", { class: CSS.assistiveText }, this.caption), this.renderTHead(), this.renderTBody(), this.renderTFoot())), this.pageSize > 0 && this.renderPaginationArea())));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "groupSeparator": ["handleNumberedChange"],
    "numbered": ["handleNumberedChange"],
    "numberingSystem": ["handleNumberedChange"],
    "pageSize": ["handleNumberedChange"],
    "scale": ["handleNumberedChange"],
    "selectionMode": ["handleNumberedChange"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return tableCss; }
}, [1, "calcite-table", {
    "bordered": [516],
    "caption": [1],
    "groupSeparator": [516, "group-separator"],
    "layout": [513],
    "numbered": [516],
    "numberingSystem": [513, "numbering-system"],
    "pageSize": [514, "page-size"],
    "scale": [513],
    "selectionMode": [513, "selection-mode"],
    "zebra": [516],
    "selectedItems": [1040],
    "messages": [1040],
    "messageOverrides": [1040],
    "colCount": [32],
    "pageStartRow": [32],
    "selectedCount": [32],
    "readCellContentsToAT": [32],
    "defaultMessages": [32],
    "effectiveLocale": [32]
  }, [[0, "calciteTableRowSelect", "calciteChipSelectListener"], [0, "calciteInternalTableRowFocusRequest", "calciteInternalTableRowFocusEvent"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-table", "calcite-button", "calcite-chip", "calcite-icon", "calcite-loader", "calcite-pagination"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-table":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Table);
      }
      break;
    case "calcite-button":
      if (!customElements.get(tagName)) {
        (0,_button_js__WEBPACK_IMPORTED_MODULE_4__.d)();
      }
      break;
    case "calcite-chip":
      if (!customElements.get(tagName)) {
        (0,_chip_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
    case "calcite-pagination":
      if (!customElements.get(tagName)) {
        (0,_pagination_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteTable = Table;
const defineCustomElement = defineCustomElement$1;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNDIyODRhZDkyMDMwYTdkMDcwNzk3OTJiZGI1OGRjOTguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRztBQUMxQjtBQUM2QjtBQUNSO0FBQy9DO0FBQ0Y7QUFDRjtBQUNBO0FBQ0U7QUFDSTs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLDhDQUE4QyxvRUFBb0UsOEVBQThFLGlCQUFpQiw2Q0FBNkMsb0VBQW9FLDhFQUE4RSxpQkFBaUIsMkNBQTJDLG1FQUFtRSw4RUFBOEUsTUFBTSxjQUFjLFdBQVcsc0JBQXNCLGlCQUFpQixpQkFBaUIsZ0JBQWdCLG1CQUFtQixnQ0FBZ0Msc0RBQXNELGdCQUFnQixrQkFBa0IsZ0JBQWdCLGVBQWUsVUFBVSxZQUFZLGdCQUFnQixzQkFBc0IsbUJBQW1CLGVBQWUsTUFBTSxpQkFBaUIseUJBQXlCLGtCQUFrQix3REFBd0QseURBQXlELHNEQUFzRCxNQUFNLHNEQUFzRCxjQUFjLG1CQUFtQix1Q0FBdUMsNERBQTRELG9EQUFvRCw4REFBOEQsbUJBQW1CLGFBQWEsbUJBQW1CLHlCQUF5QixnQkFBZ0IsYUFBYSxtQkFBbUIsbUJBQW1CLHlEQUF5RCwwQ0FBMEMseUJBQXlCLDhEQUE4RCwyQkFBMkIsK0JBQStCLHVCQUF1QixpQkFBaUIsYUFBYSxpQkFBaUIsbUJBQW1CLHVCQUF1Qix5REFBeUQsbUJBQW1CLE9BQU8sdUJBQXVCLGdCQUFnQixhQUFhLFNBQVMsYUFBYTs7QUFFMXBFLDRCQUE0QiwwRkFBa0IsZUFBZSwrRUFBVztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtRkFBVztBQUN6QyxrQ0FBa0MsbUZBQVc7QUFDN0MsOENBQThDLG1GQUFXO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FB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QyxVQUFVO0FBQ3JJO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRUFBRSx5RUFBQyxZQUFZLGtLQUFrSywyQ0FBMkMsZ0JBQWdCLEVBQUUseUVBQUMsY0FBYywwQkFBMEI7QUFDaFM7QUFDQSw0QkFBNEI7QUFDNUIsYUFBYTtBQUNiLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZDQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkNBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZDQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQXFCO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUU2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLXRhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoLCBIb3N0IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYSBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBzIGFzIHNldENvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi5qcyc7XG5pbXBvcnQgeyBuIGFzIG51bWJlclN0cmluZ0Zvcm1hdHRlciwgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFVzZXJBZ2VudFN0cmluZyB9IGZyb20gJy4vaW50ZXJhY3RpdmUuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDYgfSBmcm9tICcuL2J1dHRvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNSB9IGZyb20gJy4vY2hpcC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNCB9IGZyb20gJy4vaWNvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMyB9IGZyb20gJy4vbG9hZGVyLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi9wYWdpbmF0aW9uLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBib3JkZXJlZDogXCJib3JkZXJlZFwiLFxuICB6ZWJyYTogXCJ6ZWJyYVwiLFxuICBzZWxlY3Rpb25BcmVhOiBcInNlbGVjdGlvbi1hcmVhXCIsXG4gIHBhZ2luYXRpb25BcmVhOiBcInBhZ2luYXRpb24tYXJlYVwiLFxuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIHRhYmxlQ29udGFpbmVyOiBcInRhYmxlLWNvbnRhaW5lclwiLFxuICB0YWJsZUZpeGVkOiBcInRhYmxlLS1maXhlZFwiLFxuICBhc3Npc3RpdmVUZXh0OiBcImFzc2lzdGl2ZS10ZXh0XCIsXG4gIHNlbGVjdGlvbkFjdGlvbnM6IFwic2VsZWN0aW9uLWFjdGlvbnNcIixcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgc2VsZWN0aW9uQWN0aW9uczogXCJzZWxlY3Rpb24tYWN0aW9uc1wiLFxuICB0YWJsZUhlYWRlcjogXCJ0YWJsZS1oZWFkZXJcIixcbiAgdGFibGVGb290ZXI6IFwidGFibGUtZm9vdGVyXCIsXG59O1xuXG5jb25zdCB0YWJsZUNzcyA9IFwiOmhvc3QoW3NjYWxlPXNdKXstLWNhbGNpdGUtaW50ZXJuYWwtdGFibGUtY2VsbC1wYWRkaW5nOjAuMjVyZW07LS1jYWxjaXRlLWludGVybmFsLXRhYmxlLWNlbGwtZm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTstLWNhbGNpdGUtaW50ZXJuYWwtdGFibGUtY2VsbC1mb250LXNpemUtc2Vjb25kYXJ5OnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0zKX06aG9zdChbc2NhbGU9bV0pey0tY2FsY2l0ZS1pbnRlcm5hbC10YWJsZS1jZWxsLXBhZGRpbmc6MC41cmVtOy0tY2FsY2l0ZS1pbnRlcm5hbC10YWJsZS1jZWxsLWZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7LS1jYWxjaXRlLWludGVybmFsLXRhYmxlLWNlbGwtZm9udC1zaXplLXNlY29uZGFyeTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMil9Omhvc3QoW3NjYWxlPWxdKXstLWNhbGNpdGUtaW50ZXJuYWwtdGFibGUtY2VsbC1wYWRkaW5nOjFyZW07LS1jYWxjaXRlLWludGVybmFsLXRhYmxlLWNlbGwtZm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApOy0tY2FsY2l0ZS1pbnRlcm5hbC10YWJsZS1jZWxsLWZvbnQtc2l6ZS1zZWNvbmRhcnk6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpfTpob3N0e2Rpc3BsYXk6dGFibGV9LmNvbnRhaW5lcnttYXgtaW5saW5lLXNpemU6MTAwdnc7aW5saW5lLXNpemU6MTAwJX0udGFibGUtY29udGFpbmVye292ZXJmbG93LXg6YXV0bzt3aGl0ZS1zcGFjZTpub3dyYXB9LnRhYmxlLWNvbnRhaW5lcjpub3QoLmJvcmRlcmVkKXtib3JkZXItYmxvY2stZW5kOjFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKX0uYXNzaXN0aXZlLXRleHR7cG9zaXRpb246YWJzb2x1dGU7aW5saW5lLXNpemU6MXB4O2Jsb2NrLXNpemU6MXB4O3BhZGRpbmc6MDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47Y2xpcDpyZWN0KDAsIDAsIDAsIDApO3doaXRlLXNwYWNlOm5vd3JhcDtib3JkZXItd2lkdGg6MH10YWJsZXtpbmxpbmUtc2l6ZToxMDAlO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtvdmVyZmxvdy14OnNjcm9sbDtib3JkZXItYmxvY2stc3RhcnQ6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpO2JvcmRlci1pbmxpbmUtc3RhcnQ6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpO2JvcmRlci1ibG9jay1lbmQ6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfXRib2R5e2JvcmRlci1ibG9jay1lbmQ6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfS50YWJsZS0tZml4ZWR7dGFibGUtbGF5b3V0OmZpeGVkfS5ib3JkZXJlZCA6OnNsb3R0ZWQoY2FsY2l0ZS10YWJsZS1yb3cpey0tY2FsY2l0ZS10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfS56ZWJyYSA6OnNsb3R0ZWQoY2FsY2l0ZS10YWJsZS1yb3c6bnRoLWNoaWxkKDJuKzEpKXstLWNhbGNpdGUtdGFibGUtcm93LWJhY2tncm91bmQ6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfS5zZWxlY3Rpb24tYWN0aW9uc3tkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0b30uc2VsZWN0aW9uLWFyZWF7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZy1ibG9jazp2YXIoLS1jYWxjaXRlLWludGVybmFsLXRhYmxlLWNlbGwtcGFkZGluZyl9LnNlbGVjdGlvbi1hcmVhIGNhbGNpdGUtY2hpcDpsYXN0LW9mLXR5cGV7bWFyZ2luLWlubGluZS1lbmQ6MC41cmVtfS5zZWxlY3Rpb24tYXJlYSBjYWxjaXRlLWNoaXA6bGFzdC1vZi10eXBlOm5vdCg6Zmlyc3Qtb2YtdHlwZSl7bWFyZ2luLWlubGluZS1zdGFydDowLjVyZW19LnNlbGVjdGlvbi1hcmVhIGNhbGNpdGUtYnV0dG9ue21hcmdpbi1pbmxpbmUtZW5kOjFyZW19LnBhZ2luYXRpb24tYXJlYXtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nLWJsb2NrOnZhcigtLWNhbGNpdGUtaW50ZXJuYWwtdGFibGUtY2VsbC1wYWRkaW5nKX1jYWxjaXRlLXBhZ2luYXRpb257ZmxleDoxO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IFRhYmxlID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVUYWJsZVNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVRhYmxlU2VsZWN0XCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZVRhYmxlUGFnZUNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVRhYmxlUGFnZUNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYmxlUm93Rm9jdXNDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFRhYmxlUm93Rm9jdXNDaGFuZ2VcIiwgNik7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5nZXRTbG90dGVkUm93cyA9IChlbCkgPT4ge1xuICAgICAgcmV0dXJuIGVsXG4gICAgICAgID8uYXNzaWduZWRFbGVtZW50cyh7IGZsYXR0ZW46IHRydWUgfSlcbiAgICAgICAgPy5maWx0ZXIoKGVsKSA9PiBlbD8ubWF0Y2hlcyhcImNhbGNpdGUtdGFibGUtcm93XCIpKTtcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlUm93cyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhlYWRSb3dzID0gdGhpcy5nZXRTbG90dGVkUm93cyh0aGlzLnRhYmxlSGVhZFNsb3RFbCkgfHwgW107XG4gICAgICBjb25zdCBib2R5Um93cyA9IHRoaXMuZ2V0U2xvdHRlZFJvd3ModGhpcy50YWJsZUJvZHlTbG90RWwpIHx8IFtdO1xuICAgICAgY29uc3QgZm9vdFJvd3MgPSB0aGlzLmdldFNsb3R0ZWRSb3dzKHRoaXMudGFibGVGb290U2xvdEVsKSB8fCBbXTtcbiAgICAgIGNvbnN0IGFsbFJvd3MgPSBbLi4uaGVhZFJvd3MsIC4uLmJvZHlSb3dzLCAuLi5mb290Um93c107XG4gICAgICBoZWFkUm93cz8uZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gaGVhZFJvd3M/LmluZGV4T2Yocm93KTtcbiAgICAgICAgcm93LnJvd1R5cGUgPSBcImhlYWRcIjtcbiAgICAgICAgcm93LnBvc2l0aW9uU2VjdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICByb3cucG9zaXRpb25TZWN0aW9uTG9jYWxpemVkID0gdGhpcy5sb2NhbGl6ZU51bWJlcigocG9zaXRpb24gKyAxKS50b1N0cmluZygpKTtcbiAgICAgIH0pO1xuICAgICAgYm9keVJvd3M/LmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGJvZHlSb3dzPy5pbmRleE9mKHJvdyk7XG4gICAgICAgIHJvdy5yb3dUeXBlID0gXCJib2R5XCI7XG4gICAgICAgIHJvdy5wb3NpdGlvblNlY3Rpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgcm93LnBvc2l0aW9uU2VjdGlvbkxvY2FsaXplZCA9IHRoaXMubG9jYWxpemVOdW1iZXIoKHBvc2l0aW9uICsgMSkudG9TdHJpbmcoKSk7XG4gICAgICB9KTtcbiAgICAgIGZvb3RSb3dzPy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBmb290Um93cz8uaW5kZXhPZihyb3cpO1xuICAgICAgICByb3cucm93VHlwZSA9IFwiZm9vdFwiO1xuICAgICAgICByb3cucG9zaXRpb25TZWN0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHJvdy5wb3NpdGlvblNlY3Rpb25Mb2NhbGl6ZWQgPSB0aGlzLmxvY2FsaXplTnVtYmVyKChwb3NpdGlvbiArIDEpLnRvU3RyaW5nKCkpO1xuICAgICAgfSk7XG4gICAgICBhbGxSb3dzPy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgcm93LnNlbGVjdGlvbk1vZGUgPSB0aGlzLnNlbGVjdGlvbk1vZGU7XG4gICAgICAgIHJvdy5ib2R5Um93Q291bnQgPSBib2R5Um93cz8ubGVuZ3RoO1xuICAgICAgICByb3cucG9zaXRpb25BbGwgPSBhbGxSb3dzPy5pbmRleE9mKHJvdyk7XG4gICAgICAgIHJvdy5udW1iZXJlZCA9IHRoaXMubnVtYmVyZWQ7XG4gICAgICAgIHJvdy5zY2FsZSA9IHRoaXMuc2NhbGU7XG4gICAgICAgIHJvdy5yZWFkQ2VsbENvbnRlbnRzVG9BVCA9IHRoaXMucmVhZENlbGxDb250ZW50c1RvQVQ7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGNvbENvdW50ID0gaGVhZFJvd3NbMF0/LmNlbGxDb3VudCB8fCBoZWFkUm93c1swXT8ucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtdGFibGUtaGVhZGVyXCIpPy5sZW5ndGg7XG4gICAgICB0aGlzLmNvbENvdW50ID0gY29sQ291bnQ7XG4gICAgICB0aGlzLmhlYWRSb3dzID0gaGVhZFJvd3M7XG4gICAgICB0aGlzLmJvZHlSb3dzID0gYm9keVJvd3M7XG4gICAgICB0aGlzLmZvb3RSb3dzID0gZm9vdFJvd3M7XG4gICAgICB0aGlzLmFsbFJvd3MgPSBhbGxSb3dzO1xuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZEl0ZW1zKCk7XG4gICAgICB0aGlzLnBhZ2luYXRlUm93cygpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVQYWdpbmF0aW9uQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdGVkSXRlbSA9IHRoaXMucGFnaW5hdGlvbkVsPy5zdGFydEl0ZW07XG4gICAgICB0aGlzLnBhZ2VTdGFydFJvdyA9IHJlcXVlc3RlZEl0ZW0gfHwgMTtcbiAgICAgIHRoaXMuY2FsY2l0ZVRhYmxlUGFnZUNoYW5nZS5lbWl0KCk7XG4gICAgICB0aGlzLnVwZGF0ZVJvd3MoKTtcbiAgICB9O1xuICAgIHRoaXMucGFnaW5hdGVSb3dzID0gKCkgPT4ge1xuICAgICAgdGhpcy5ib2R5Um93cz8uZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgIGNvbnN0IHJvd1BvcyA9IHJvdy5wb3NpdGlvblNlY3Rpb24gKyAxO1xuICAgICAgICBjb25zdCBpblZpZXcgPSByb3dQb3MgPj0gdGhpcy5wYWdlU3RhcnRSb3cgJiYgcm93UG9zIDwgdGhpcy5wYWdlU3RhcnRSb3cgKyB0aGlzLnBhZ2VTaXplO1xuICAgICAgICByb3cuaGlkZGVuID0gdGhpcy5wYWdlU2l6ZSA+IDAgJiYgIWluVmlldyAmJiAhdGhpcy5mb290Um93cy5pbmNsdWRlcyhyb3cpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkSXRlbXMgPSAoZW1pdCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IHRoaXMuYm9keVJvd3M/LmZpbHRlcigoZWwpID0+IGVsLnNlbGVjdGVkKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IHNlbGVjdGVkSXRlbXM7XG4gICAgICB0aGlzLnNlbGVjdGVkQ291bnQgPSBzZWxlY3RlZEl0ZW1zPy5sZW5ndGg7XG4gICAgICB0aGlzLmFsbFJvd3M/LmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICByb3cuc2VsZWN0ZWRSb3dDb3VudCA9IHRoaXMuc2VsZWN0ZWRDb3VudDtcbiAgICAgICAgcm93LnNlbGVjdGVkUm93Q291bnRMb2NhbGl6ZWQgPSB0aGlzLmxvY2FsaXplTnVtYmVyKHRoaXMuc2VsZWN0ZWRDb3VudCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChlbWl0KSB7XG4gICAgICAgIHRoaXMuY2FsY2l0ZVRhYmxlU2VsZWN0LmVtaXQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRGVzZWxlY3RBbGxSb3dzID0gKCkgPT4ge1xuICAgICAgdGhpcy5ib2R5Um93cz8uZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgIHJvdy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkSXRlbXModHJ1ZSk7XG4gICAgfTtcbiAgICB0aGlzLnNldFNlbGVjdGVkSXRlbXMgPSAoZWxUb01hdGNoKSA9PiB7XG4gICAgICB0aGlzLmJvZHlSb3dzPy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBpZiAoZWxUb01hdGNoPy5yb3dUeXBlID09PSBcImhlYWRcIikge1xuICAgICAgICAgIGVsLnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZENvdW50ICE9PSB0aGlzLmJvZHlSb3dzPy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZWwuc2VsZWN0ZWQgPVxuICAgICAgICAgICAgZWxUb01hdGNoID09PSBlbCA/ICFlbC5zZWxlY3RlZCA6IHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJtdWx0aXBsZVwiID8gZWwuc2VsZWN0ZWQgOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkSXRlbXModHJ1ZSk7XG4gICAgfTtcbiAgICB0aGlzLmxvY2FsaXplTnVtYmVyID0gKHZhbHVlKSA9PiB7XG4gICAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgdXNlR3JvdXBpbmc6IHRoaXMuZ3JvdXBTZXBhcmF0b3IsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIG51bWJlclN0cmluZ0Zvcm1hdHRlci5sb2NhbGl6ZSh2YWx1ZS50b1N0cmluZygpKTtcbiAgICB9O1xuICAgIHRoaXMuYm9yZGVyZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNhcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ncm91cFNlcGFyYXRvciA9IGZhbHNlO1xuICAgIHRoaXMubGF5b3V0ID0gXCJhdXRvXCI7XG4gICAgdGhpcy5udW1iZXJlZCA9IGZhbHNlO1xuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGFnZVNpemUgPSAwO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPSBcIm5vbmVcIjtcbiAgICB0aGlzLnplYnJhID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb2xDb3VudCA9IDA7XG4gICAgdGhpcy5wYWdlU3RhcnRSb3cgPSAxO1xuICAgIHRoaXMuc2VsZWN0ZWRDb3VudCA9IDA7XG4gICAgdGhpcy5yZWFkQ2VsbENvbnRlbnRzVG9BVCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gIH1cbiAgaGFuZGxlTnVtYmVyZWRDaGFuZ2UoKSB7XG4gICAgdGhpcy51cGRhdGVSb3dzKCk7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMucmVhZENlbGxDb250ZW50c1RvQVQgPSAvc2FmYXJpL2kudGVzdChnZXRVc2VyQWdlbnRTdHJpbmcoKSk7XG4gICAgdGhpcy51cGRhdGVSb3dzKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY2FsY2l0ZUNoaXBTZWxlY3RMaXN0ZW5lcihldmVudCkge1xuICAgIGlmIChldmVudC5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyh0aGlzLmVsKSkge1xuICAgICAgdGhpcy5zZXRTZWxlY3RlZEl0ZW1zKGV2ZW50LnRhcmdldCk7XG4gICAgfVxuICB9XG4gIGNhbGNpdGVJbnRlcm5hbFRhYmxlUm93Rm9jdXNFdmVudChldmVudCkge1xuICAgIGNvbnN0IGNlbGxQb3NpdGlvbiA9IGV2ZW50W1wiZGV0YWlsXCJdLmNlbGxQb3NpdGlvbjtcbiAgICBjb25zdCByb3dQb3MgPSBldmVudFtcImRldGFpbFwiXS5yb3dQb3NpdGlvbjtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IGV2ZW50W1wiZGV0YWlsXCJdLmRlc3RpbmF0aW9uO1xuICAgIGNvbnN0IGxhc3RDZWxsID0gZXZlbnRbXCJkZXRhaWxcIl0ubGFzdENlbGw7XG4gICAgY29uc3QgdmlzaWJsZUJvZHkgPSB0aGlzLmJvZHlSb3dzPy5maWx0ZXIoKHJvdykgPT4gIXJvdy5oaWRkZW4pO1xuICAgIGNvbnN0IHZpc2libGVBbGwgPSB0aGlzLmFsbFJvd3M/LmZpbHRlcigocm93KSA9PiAhcm93LmhpZGRlbik7XG4gICAgY29uc3QgbGFzdEhlYWRSb3cgPSB0aGlzLmhlYWRSb3dzW3RoaXMuaGVhZFJvd3MubGVuZ3RoIC0gMV0/LnBvc2l0aW9uQWxsO1xuICAgIGNvbnN0IGZpcnN0Qm9keVJvdyA9IHZpc2libGVCb2R5WzBdPy5wb3NpdGlvbkFsbDtcbiAgICBjb25zdCBsYXN0Qm9keVJvdyA9IHZpc2libGVCb2R5W3Zpc2libGVCb2R5Lmxlbmd0aCAtIDFdPy5wb3NpdGlvbkFsbDtcbiAgICBjb25zdCBmaXJzdEZvb3RSb3cgPSB0aGlzLmZvb3RSb3dzWzBdPy5wb3NpdGlvbkFsbDtcbiAgICBjb25zdCBsYXN0VGFibGVSb3cgPSB2aXNpYmxlQWxsW3Zpc2libGVBbGwubGVuZ3RoIC0gMV0/LnBvc2l0aW9uQWxsO1xuICAgIGNvbnN0IGxlYXZpbmdIZWFkZXIgPSBkZXN0aW5hdGlvbiA9PT0gXCJuZXh0XCIgJiYgcm93UG9zID09PSBsYXN0SGVhZFJvdztcbiAgICBjb25zdCBsZWF2aW5nRm9vdGVyID0gZGVzdGluYXRpb24gPT09IFwicHJldmlvdXNcIiAmJiByb3dQb3MgPT09IGZpcnN0Rm9vdFJvdztcbiAgICBjb25zdCBlbnRlcmluZ0hlYWRlciA9IGRlc3RpbmF0aW9uID09PSBcInByZXZpb3VzXCIgJiYgcm93UG9zID09PSBmaXJzdEJvZHlSb3c7XG4gICAgY29uc3QgZW50ZXJpbmdGb290ZXIgPSBkZXN0aW5hdGlvbiA9PT0gXCJuZXh0XCIgJiYgcm93UG9zID09PSBsYXN0Qm9keVJvdztcbiAgICBsZXQgcm93UG9zaXRpb247XG4gICAgc3dpdGNoIChkZXN0aW5hdGlvbikge1xuICAgICAgY2FzZSBcImZpcnN0XCI6XG4gICAgICAgIHJvd1Bvc2l0aW9uID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibGFzdFwiOlxuICAgICAgICByb3dQb3NpdGlvbiA9IGxhc3RUYWJsZVJvdztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibmV4dFwiOlxuICAgICAgICByb3dQb3NpdGlvbiA9IGxlYXZpbmdIZWFkZXIgPyBmaXJzdEJvZHlSb3cgOiBlbnRlcmluZ0Zvb3RlciA/IGZpcnN0Rm9vdFJvdyA6IHJvd1BvcyArIDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInByZXZpb3VzXCI6XG4gICAgICAgIHJvd1Bvc2l0aW9uID0gbGVhdmluZ0Zvb3RlciA/IGxhc3RCb2R5Um93IDogZW50ZXJpbmdIZWFkZXIgPyBsYXN0SGVhZFJvdyA6IHJvd1BvcyAtIDE7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb25zdCBkZXN0aW5hdGlvbkNvdW50ID0gdGhpcy5hbGxSb3dzPy5maW5kKChyb3cpID0+IHJvdy5wb3NpdGlvbkFsbCA9PT0gcm93UG9zaXRpb24pPy5jZWxsQ291bnQ7XG4gICAgY29uc3QgYWRqdXN0ZWRQb3MgPSBjZWxsUG9zaXRpb24gPiBkZXN0aW5hdGlvbkNvdW50ID8gZGVzdGluYXRpb25Db3VudCA6IGNlbGxQb3NpdGlvbjtcbiAgICBpZiAocm93UG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJsZVJvd0ZvY3VzQ2hhbmdlLmVtaXQoe1xuICAgICAgICBjZWxsUG9zaXRpb246IGFkanVzdGVkUG9zLFxuICAgICAgICByb3dQb3NpdGlvbixcbiAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgIGxhc3RDZWxsLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJTZWxlY3Rpb25BcmVhKCkge1xuICAgIGNvbnN0IG91dE9mVmlld0NvdW50ID0gdGhpcy5zZWxlY3RlZEl0ZW1zPy5maWx0ZXIoKGVsKSA9PiBlbC5oaWRkZW4pPy5sZW5ndGg7XG4gICAgY29uc3QgbG9jYWxpemVkT3V0T2ZWaWV3ID0gdGhpcy5sb2NhbGl6ZU51bWJlcihvdXRPZlZpZXdDb3VudD8udG9TdHJpbmcoKSk7XG4gICAgY29uc3QgbG9jYWxpemVkU2VsZWN0ZWRDb3VudCA9IHRoaXMubG9jYWxpemVOdW1iZXIodGhpcy5zZWxlY3RlZENvdW50Py50b1N0cmluZygpKTtcbiAgICBjb25zdCBzZWxlY3Rpb25UZXh0ID0gYCR7bG9jYWxpemVkU2VsZWN0ZWRDb3VudH0gJHt0aGlzLm1lc3NhZ2VzLnNlbGVjdGVkfWA7XG4gICAgY29uc3Qgb3V0T2ZWaWV3ID0gYCR7bG9jYWxpemVkT3V0T2ZWaWV3fSAke3RoaXMubWVzc2FnZXMuaGlkZGVuU2VsZWN0ZWR9YDtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLnNlbGVjdGlvbkFyZWEgfSwgaChcImNhbGNpdGUtY2hpcFwiLCB7IGtpbmQ6IHRoaXMuc2VsZWN0ZWRDb3VudCA+IDAgPyBcImJyYW5kXCIgOiBcIm5ldXRyYWxcIiwgc2NhbGU6IHRoaXMuc2NhbGUsIHZhbHVlOiBzZWxlY3Rpb25UZXh0IH0sIHNlbGVjdGlvblRleHQpLCBvdXRPZlZpZXdDb3VudCA+IDAgJiYgKGgoXCJjYWxjaXRlLWNoaXBcIiwgeyBpY29uOiBcImhpZGUtZW1wdHlcIiwgc2NhbGU6IHRoaXMuc2NhbGUsIHRpdGxlOiBvdXRPZlZpZXcsIHZhbHVlOiBvdXRPZlZpZXcgfSwgbG9jYWxpemVkT3V0T2ZWaWV3KSksIHRoaXMuc2VsZWN0ZWRDb3VudCA+IDAgJiYgKGgoXCJjYWxjaXRlLWJ1dHRvblwiLCB7IFwiaWNvbi1zdGFydFwiOiBcInhcIiwga2luZDogXCJuZXV0cmFsXCIsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlRGVzZWxlY3RBbGxSb3dzLCByb3VuZDogdHJ1ZSwgc2NhbGU6IHRoaXMuc2NhbGUsIHRpdGxlOiBgJHt0aGlzLm1lc3NhZ2VzLmNsZWFyfSAke3NlbGVjdGlvblRleHR9ICR7dGhpcy5tZXNzYWdlcy5yb3d9YCB9LCB0aGlzLm1lc3NhZ2VzLmNsZWFyKSksIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLnNlbGVjdGlvbkFjdGlvbnMgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5zZWxlY3Rpb25BY3Rpb25zIH0pKSkpO1xuICB9XG4gIHJlbmRlclBhZ2luYXRpb25BcmVhKCkge1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MucGFnaW5hdGlvbkFyZWEgfSwgaChcImNhbGNpdGUtcGFnaW5hdGlvblwiLCB7IGdyb3VwU2VwYXJhdG9yOiB0aGlzLmdyb3VwU2VwYXJhdG9yLCBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLCBvbkNhbGNpdGVQYWdpbmF0aW9uQ2hhbmdlOiB0aGlzLmhhbmRsZVBhZ2luYXRpb25DaGFuZ2UsIHBhZ2VTaXplOiB0aGlzLnBhZ2VTaXplLCBzY2FsZTogdGhpcy5zY2FsZSwgc3RhcnRJdGVtOiAxLCB0b3RhbEl0ZW1zOiB0aGlzLmJvZHlSb3dzPy5sZW5ndGgsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLnBhZ2luYXRpb25FbCA9IGVsKSB9KSkpO1xuICB9XG4gIHJlbmRlclRIZWFkKCkge1xuICAgIHJldHVybiAoaChcInRoZWFkXCIsIG51bGwsIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMudGFibGVIZWFkZXIsIG9uU2xvdGNoYW5nZTogdGhpcy51cGRhdGVSb3dzLCByZWY6IChlbCkgPT4gKHRoaXMudGFibGVIZWFkU2xvdEVsID0gZWwpIH0pKSk7XG4gIH1cbiAgcmVuZGVyVEJvZHkoKSB7XG4gICAgcmV0dXJuIChoKFwidGJvZHlcIiwgbnVsbCwgaChcInNsb3RcIiwgeyBvblNsb3RjaGFuZ2U6IHRoaXMudXBkYXRlUm93cywgcmVmOiAoZWwpID0+ICh0aGlzLnRhYmxlQm9keVNsb3RFbCA9IGVsKSB9KSkpO1xuICB9XG4gIHJlbmRlclRGb290KCkge1xuICAgIHJldHVybiAoaChcInRmb290XCIsIG51bGwsIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMudGFibGVGb290ZXIsIG9uU2xvdGNoYW5nZTogdGhpcy51cGRhdGVSb3dzLCByZWY6IChlbCkgPT4gKHRoaXMudGFibGVGb290U2xvdEVsID0gZWwpIH0pKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250YWluZXIgfSwgdGhpcy5zZWxlY3Rpb25Nb2RlICE9PSBcIm5vbmVcIiAmJiB0aGlzLnJlbmRlclNlbGVjdGlvbkFyZWEoKSwgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtDU1MuYm9yZGVyZWRdOiB0aGlzLmJvcmRlcmVkLFxuICAgICAgICBbQ1NTLnplYnJhXTogdGhpcy56ZWJyYSxcbiAgICAgICAgW0NTUy50YWJsZUNvbnRhaW5lcl06IHRydWUsXG4gICAgICB9IH0sIGgoXCJ0YWJsZVwiLCB7IFwiYXJpYS1jb2xjb3VudFwiOiB0aGlzLmNvbENvdW50LCBcImFyaWEtbXVsdGlzZWxlY3RhYmxlXCI6IHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJtdWx0aXBsZVwiLCBcImFyaWEtcmVhZG9ubHlcIjogdHJ1ZSwgXCJhcmlhLXJvd2NvdW50XCI6IHRoaXMuYWxsUm93cz8ubGVuZ3RoLCBjbGFzczogeyBbQ1NTLnRhYmxlRml4ZWRdOiB0aGlzLmxheW91dCA9PT0gXCJmaXhlZFwiIH0sIHJvbGU6IFwiZ3JpZFwiIH0sIGgoXCJjYXB0aW9uXCIsIHsgY2xhc3M6IENTUy5hc3Npc3RpdmVUZXh0IH0sIHRoaXMuY2FwdGlvbiksIHRoaXMucmVuZGVyVEhlYWQoKSwgdGhpcy5yZW5kZXJUQm9keSgpLCB0aGlzLnJlbmRlclRGb290KCkpKSwgdGhpcy5wYWdlU2l6ZSA+IDAgJiYgdGhpcy5yZW5kZXJQYWdpbmF0aW9uQXJlYSgpKSkpO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJncm91cFNlcGFyYXRvclwiOiBbXCJoYW5kbGVOdW1iZXJlZENoYW5nZVwiXSxcbiAgICBcIm51bWJlcmVkXCI6IFtcImhhbmRsZU51bWJlcmVkQ2hhbmdlXCJdLFxuICAgIFwibnVtYmVyaW5nU3lzdGVtXCI6IFtcImhhbmRsZU51bWJlcmVkQ2hhbmdlXCJdLFxuICAgIFwicGFnZVNpemVcIjogW1wiaGFuZGxlTnVtYmVyZWRDaGFuZ2VcIl0sXG4gICAgXCJzY2FsZVwiOiBbXCJoYW5kbGVOdW1iZXJlZENoYW5nZVwiXSxcbiAgICBcInNlbGVjdGlvbk1vZGVcIjogW1wiaGFuZGxlTnVtYmVyZWRDaGFuZ2VcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIHRhYmxlQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLXRhYmxlXCIsIHtcbiAgICBcImJvcmRlcmVkXCI6IFs1MTZdLFxuICAgIFwiY2FwdGlvblwiOiBbMV0sXG4gICAgXCJncm91cFNlcGFyYXRvclwiOiBbNTE2LCBcImdyb3VwLXNlcGFyYXRvclwiXSxcbiAgICBcImxheW91dFwiOiBbNTEzXSxcbiAgICBcIm51bWJlcmVkXCI6IFs1MTZdLFxuICAgIFwibnVtYmVyaW5nU3lzdGVtXCI6IFs1MTMsIFwibnVtYmVyaW5nLXN5c3RlbVwiXSxcbiAgICBcInBhZ2VTaXplXCI6IFs1MTQsIFwicGFnZS1zaXplXCJdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJzZWxlY3Rpb25Nb2RlXCI6IFs1MTMsIFwic2VsZWN0aW9uLW1vZGVcIl0sXG4gICAgXCJ6ZWJyYVwiOiBbNTE2XSxcbiAgICBcInNlbGVjdGVkSXRlbXNcIjogWzEwNDBdLFxuICAgIFwibWVzc2FnZXNcIjogWzEwNDBdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJjb2xDb3VudFwiOiBbMzJdLFxuICAgIFwicGFnZVN0YXJ0Um93XCI6IFszMl0sXG4gICAgXCJzZWxlY3RlZENvdW50XCI6IFszMl0sXG4gICAgXCJyZWFkQ2VsbENvbnRlbnRzVG9BVFwiOiBbMzJdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogWzMyXVxuICB9LCBbWzAsIFwiY2FsY2l0ZVRhYmxlUm93U2VsZWN0XCIsIFwiY2FsY2l0ZUNoaXBTZWxlY3RMaXN0ZW5lclwiXSwgWzAsIFwiY2FsY2l0ZUludGVybmFsVGFibGVSb3dGb2N1c1JlcXVlc3RcIiwgXCJjYWxjaXRlSW50ZXJuYWxUYWJsZVJvd0ZvY3VzRXZlbnRcIl1dXSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50JDEoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtdGFibGVcIiwgXCJjYWxjaXRlLWJ1dHRvblwiLCBcImNhbGNpdGUtY2hpcFwiLCBcImNhbGNpdGUtaWNvblwiLCBcImNhbGNpdGUtbG9hZGVyXCIsIFwiY2FsY2l0ZS1wYWdpbmF0aW9uXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLXRhYmxlXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgVGFibGUpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtYnV0dG9uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDYoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWNoaXBcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtcGFnaW5hdGlvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlVGFibGUgPSBUYWJsZTtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVUYWJsZSwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9