"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-table-row_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-table-row.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-table-row.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteTableRow: () => (/* binding */ CalciteTableRow),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _table_cell_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table-cell.js */ "./node_modules/@esri/calcite-components/dist/components/table-cell.js");
/* harmony import */ var _table_header_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table-header.js */ "./node_modules/@esri/calcite-components/dist/components/table-header.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */









const tableRowCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-internal-table-row-background:var(--calcite-table-row-background, var(--calcite-ui-foreground-1));--calcite-internal-table-row-border-color:var(--calcite-table-row-border-color, transparent);display:contents}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) tr{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}tr{border-block-end:1px solid var(--calcite-internal-table-row-border-color);background-color:var(--calcite-internal-table-row-background)}";

const TableRow = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteTableRowSelect = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.createEvent)(this, "calciteTableRowSelect", 6);
    this.calciteInternalTableRowFocusRequest = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.createEvent)(this, "calciteInternalTableRowFocusRequest", 6);
    this.rowCells = [];
    this.emitTableRowFocusRequest = (cellPosition, rowPosition, destination, lastCell) => {
      this.calciteInternalTableRowFocusRequest.emit({
        cellPosition,
        rowPosition,
        destination,
        lastCell,
      });
    };
    this.updateCells = () => {
      const slottedCells = this.tableRowSlotEl
        ?.assignedElements({ flatten: true })
        ?.filter((el) => el.matches("calcite-table-cell") || el.matches("calcite-table-header"));
      const renderedCells = Array.from(this.tableRowEl?.querySelectorAll("calcite-table-header, calcite-table-cell"))?.filter((el) => el.numberCell || el.selectionCell);
      const cells = renderedCells ? renderedCells.concat(slottedCells) : slottedCells;
      if (cells.length > 0) {
        cells?.forEach((cell, index) => {
          cell.positionInRow = index + 1;
          cell.parentRowType = this.rowType;
          cell.scale = this.scale;
          if (cell.nodeName === "CALCITE-TABLE-CELL") {
            cell.readCellContentsToAT = this.readCellContentsToAT;
            cell.disabled = this.disabled;
            cell.parentRowIsSelected = this.selected;
          }
        });
      }
      this.rowCells =
        cells || [];
      this.cellCount = cells?.length;
    };
    this.handleSelectionOfRow = () => {
      this.calciteTableRowSelect.emit();
    };
    this.handleKeyboardSelection = (event) => {
      if ((0,_key_js__WEBPACK_IMPORTED_MODULE_1__.i)(event.key)) {
        if (event.key === " ") {
          event.preventDefault();
        }
        this.handleSelectionOfRow();
      }
    };
    this.disabled = false;
    this.selected = false;
    this.cellCount = undefined;
    this.rowType = undefined;
    this.numbered = false;
    this.positionSection = undefined;
    this.positionSectionLocalized = undefined;
    this.positionAll = undefined;
    this.readCellContentsToAT = undefined;
    this.scale = undefined;
    this.selectionMode = "none";
    this.selectedRowCount = undefined;
    this.selectedRowCountLocalized = undefined;
    this.bodyRowCount = undefined;
    this.effectiveLocale = "";
  }
  handleCellChanges() {
    if (this.tableRowEl && this.rowCells.length > 0) {
      this.updateCells();
    }
  }
  handleDelayedCellChanges() {
    if (this.tableRowEl && this.rowCells.length > 0) {
      requestAnimationFrame(() => this.updateCells());
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentDidLoad() {
    if (this.tableRowEl && this.rowCells.length > 0) {
      this.updateCells();
    }
  }
  connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  calciteInternalTableRowFocusChangeHandler(event) {
    if (event.target.contains(this.el)) {
      const position = event.detail.cellPosition;
      const rowPosition = event.detail.rowPosition;
      const destination = event.detail.destination;
      const lastCell = event.detail.lastCell;
      if (rowPosition === this.positionAll) {
        if (this.disabled) {
          const deflectDirection = destination === "last" ? "previous" : destination === "first" ? "next" : destination;
          this.emitTableRowFocusRequest(position, this.positionAll, deflectDirection);
          return;
        }
        const cellPosition = lastCell
          ? this.rowCells[this.rowCells.length - 1]
          : this.rowCells?.find((_, index) => index + 1 === position);
        if (cellPosition) {
          cellPosition.setFocus();
        }
      }
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  keyDownHandler(event) {
    const el = event.target;
    const key = event.key;
    const isControl = event.ctrlKey;
    const cells = this.rowCells;
    if (el.matches("calcite-table-cell") || el.matches("calcite-table-header")) {
      switch (key) {
        case "ArrowUp":
          this.emitTableRowFocusRequest(el.positionInRow, this.positionAll, "previous");
          event.preventDefault();
          break;
        case "ArrowDown":
          this.emitTableRowFocusRequest(el.positionInRow, this.positionAll, "next");
          event.preventDefault();
          break;
        case "PageUp":
          this.emitTableRowFocusRequest(el.positionInRow, this.positionAll, "first");
          event.preventDefault();
          break;
        case "PageDown":
          this.emitTableRowFocusRequest(el.positionInRow, this.positionAll, "last");
          event.preventDefault();
          break;
        case "ArrowLeft":
          (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.i)(cells, el, "previous", false);
          event.preventDefault();
          break;
        case "ArrowRight":
          (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.i)(cells, el, "next", false);
          event.preventDefault();
          break;
        case "Home":
          if (isControl) {
            this.emitTableRowFocusRequest(1, this.positionAll, "first");
            event.preventDefault();
          }
          else {
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.i)(cells, el, "first", false);
            event.preventDefault();
          }
          break;
        case "End":
          if (isControl) {
            this.emitTableRowFocusRequest(this.rowCells?.length, this.positionAll, "last", true);
            event.preventDefault();
          }
          else {
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.i)(cells, el, "last", false);
            event.preventDefault();
          }
          break;
      }
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderSelectionIcon() {
    const icon = this.selectionMode === "multiple" && this.selected
      ? "check-square-f"
      : this.selectionMode === "multiple"
        ? "square"
        : this.selected
          ? "circle-f"
          : "circle";
    return (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { icon: icon, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_3__.g)(this.scale) });
  }
  renderSelectableCell() {
    return this.rowType === "head" ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-table-header", { alignment: "center", bodyRowCount: this.bodyRowCount, key: "selection-head", onClick: this.selectionMode === "multiple" && this.handleSelectionOfRow, onKeyDown: this.selectionMode === "multiple" && this.handleKeyboardSelection, selectedRowCount: this.selectedRowCount, selectedRowCountLocalized: this.selectedRowCountLocalized, selectionCell: true, selectionMode: this.selectionMode })) : this.rowType === "body" ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-table-cell", { alignment: "center", key: "selection-body", onClick: this.handleSelectionOfRow, onKeyDown: this.handleKeyboardSelection, parentRowIsSelected: this.selected, parentRowPositionLocalized: this.positionSectionLocalized, selectionCell: true }, this.renderSelectionIcon())) : ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-table-cell", { alignment: "center", key: "selection-foot", selectionCell: true }));
  }
  renderNumberedCell() {
    return this.rowType === "head" ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-table-header", { alignment: "center", key: "numbered-head", numberCell: true })) : this.rowType === "body" ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-table-cell", { alignment: "center", key: "numbered-body", numberCell: true }, this.positionSectionLocalized)) : ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-table-cell", { alignment: "center", key: "numbered-foot", numberCell: true }));
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.Host, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("tr", { "aria-disabled": this.disabled, "aria-rowindex": this.positionAll + 1, "aria-selected": this.selected, onKeyDown: (event) => this.keyDownHandler(event),
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.tableRowEl = el) }, this.numbered && this.renderNumberedCell(), this.selectionMode !== "none" && this.renderSelectableCell(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot", { onSlotchange: this.updateCells, ref: (el) => (this.tableRowSlotEl = el) }))));
  }
  get el() { return this; }
  static get watchers() { return {
    "bodyRowCount": ["handleCellChanges"],
    "scale": ["handleCellChanges"],
    "selected": ["handleCellChanges"],
    "selectedRowCount": ["handleCellChanges"],
    "numbered": ["handleDelayedCellChanges"],
    "selectionMode": ["handleDelayedCellChanges"]
  }; }
  static get style() { return tableRowCss; }
}, [1, "calcite-table-row", {
    "disabled": [516],
    "selected": [516],
    "cellCount": [1026, "cell-count"],
    "rowType": [1, "row-type"],
    "numbered": [4],
    "positionSection": [2, "position-section"],
    "positionSectionLocalized": [1, "position-section-localized"],
    "positionAll": [2, "position-all"],
    "readCellContentsToAT": [4, "read-cell-contents-to-a-t"],
    "scale": [1],
    "selectionMode": [1, "selection-mode"],
    "selectedRowCount": [2, "selected-row-count"],
    "selectedRowCountLocalized": [1, "selected-row-count-localized"],
    "bodyRowCount": [2, "body-row-count"],
    "effectiveLocale": [32]
  }, [[4, "calciteInternalTableRowFocusChange", "calciteInternalTableRowFocusChangeHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-table-row", "calcite-icon", "calcite-table-cell", "calcite-table-header"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-table-row":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TableRow);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_4__.d)();
      }
      break;
    case "calcite-table-cell":
      if (!customElements.get(tagName)) {
        (0,_table_cell_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
    case "calcite-table-header":
      if (!customElements.get(tagName)) {
        (0,_table_header_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteTableRow = TableRow;
const defineCustomElement = defineCustomElement$1;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMzk2M2FlNzFkNWY2ODA0NGMyM2JjNTBlMTg2YzRlMTYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0c7QUFDM0Q7QUFDSjtBQUNtRTtBQUNoRTtBQUNJO0FBQ007QUFDRTs7QUFFL0QsdUNBQXVDLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLDRHQUE0Ryw2RkFBNkYsaUJBQWlCLGdCQUFnQixhQUFhLFNBQVMsYUFBYSxxQkFBcUIsb0JBQW9CLDJDQUEyQyx5R0FBeUcsVUFBVSxHQUFHLDBFQUEwRSw4REFBOEQ7O0FBRXZ6QiwrQkFBK0IsMEZBQWtCLGVBQWUsK0VBQVc7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUZBQVc7QUFDNUMsK0NBQStDLG1GQUFXO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixlQUFlO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMENBQWU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFrQjtBQUN0QjtBQUNBO0FBQ0EsSUFBSSxrREFBcUI7QUFDekI7QUFDQTtBQUNBLElBQUksa0RBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDBDQUFtQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxVQUFVLDBDQUFtQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwQ0FBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwQ0FBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlFQUFDLG1CQUFtQixtQkFBbUIsZ0RBQVksY0FBYztBQUM1RTtBQUNBO0FBQ0Esc0NBQXNDLHlFQUFDLDJCQUEyQixnWUFBZ1ksZ0NBQWdDLHlFQUFDLHlCQUF5Qiw2T0FBNk8sa0NBQWtDLHlFQUFDLHlCQUF5QixpRUFBaUU7QUFDdDJCO0FBQ0E7QUFDQSxzQ0FBc0MseUVBQUMsMkJBQTJCLDZEQUE2RCxnQ0FBZ0MseUVBQUMseUJBQXlCLDZEQUE2RCxxQ0FBcUMseUVBQUMseUJBQXlCLDZEQUE2RDtBQUNsWDtBQUNBO0FBQ0EsWUFBWSx5RUFBQyxDQUFDLHdFQUFJLFFBQVEseUVBQUMsU0FBUztBQUNwQztBQUNBLDJDQUEyQyw0R0FBNEcseUVBQUMsV0FBVyx5RUFBeUU7QUFDNU87QUFDQSxhQUFhO0FBQ2IsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkNBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFxQjtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS10YWJsZS1yb3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGgsIEhvc3QgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBpIGFzIGZvY3VzRWxlbWVudEluR3JvdXAgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzQWN0aXZhdGlvbktleSB9IGZyb20gJy4va2V5LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUgfSBmcm9tICcuL2ludGVyYWN0aXZlLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0SWNvblNjYWxlIH0gZnJvbSAnLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDQgfSBmcm9tICcuL2ljb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDMgfSBmcm9tICcuL3RhYmxlLWNlbGwuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL3RhYmxlLWhlYWRlci5qcyc7XG5cbmNvbnN0IHRhYmxlUm93Q3NzID0gXCI6aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHstLWNhbGNpdGUtaW50ZXJuYWwtdGFibGUtcm93LWJhY2tncm91bmQ6dmFyKC0tY2FsY2l0ZS10YWJsZS1yb3ctYmFja2dyb3VuZCwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpKTstLWNhbGNpdGUtaW50ZXJuYWwtdGFibGUtcm93LWJvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXRhYmxlLXJvdy1ib3JkZXItY29sb3IsIHRyYW5zcGFyZW50KTtkaXNwbGF5OmNvbnRlbnRzfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pIHRye3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX10cntib3JkZXItYmxvY2stZW5kOjFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLWludGVybmFsLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC10YWJsZS1yb3ctYmFja2dyb3VuZCl9XCI7XG5cbmNvbnN0IFRhYmxlUm93ID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVUYWJsZVJvd1NlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVRhYmxlUm93U2VsZWN0XCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFibGVSb3dGb2N1c1JlcXVlc3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFRhYmxlUm93Rm9jdXNSZXF1ZXN0XCIsIDYpO1xuICAgIHRoaXMucm93Q2VsbHMgPSBbXTtcbiAgICB0aGlzLmVtaXRUYWJsZVJvd0ZvY3VzUmVxdWVzdCA9IChjZWxsUG9zaXRpb24sIHJvd1Bvc2l0aW9uLCBkZXN0aW5hdGlvbiwgbGFzdENlbGwpID0+IHtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFibGVSb3dGb2N1c1JlcXVlc3QuZW1pdCh7XG4gICAgICAgIGNlbGxQb3NpdGlvbixcbiAgICAgICAgcm93UG9zaXRpb24sXG4gICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICBsYXN0Q2VsbCxcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy51cGRhdGVDZWxscyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNsb3R0ZWRDZWxscyA9IHRoaXMudGFibGVSb3dTbG90RWxcbiAgICAgICAgPy5hc3NpZ25lZEVsZW1lbnRzKHsgZmxhdHRlbjogdHJ1ZSB9KVxuICAgICAgICA/LmZpbHRlcigoZWwpID0+IGVsLm1hdGNoZXMoXCJjYWxjaXRlLXRhYmxlLWNlbGxcIikgfHwgZWwubWF0Y2hlcyhcImNhbGNpdGUtdGFibGUtaGVhZGVyXCIpKTtcbiAgICAgIGNvbnN0IHJlbmRlcmVkQ2VsbHMgPSBBcnJheS5mcm9tKHRoaXMudGFibGVSb3dFbD8ucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtdGFibGUtaGVhZGVyLCBjYWxjaXRlLXRhYmxlLWNlbGxcIikpPy5maWx0ZXIoKGVsKSA9PiBlbC5udW1iZXJDZWxsIHx8IGVsLnNlbGVjdGlvbkNlbGwpO1xuICAgICAgY29uc3QgY2VsbHMgPSByZW5kZXJlZENlbGxzID8gcmVuZGVyZWRDZWxscy5jb25jYXQoc2xvdHRlZENlbGxzKSA6IHNsb3R0ZWRDZWxscztcbiAgICAgIGlmIChjZWxscy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNlbGxzPy5mb3JFYWNoKChjZWxsLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNlbGwucG9zaXRpb25JblJvdyA9IGluZGV4ICsgMTtcbiAgICAgICAgICBjZWxsLnBhcmVudFJvd1R5cGUgPSB0aGlzLnJvd1R5cGU7XG4gICAgICAgICAgY2VsbC5zY2FsZSA9IHRoaXMuc2NhbGU7XG4gICAgICAgICAgaWYgKGNlbGwubm9kZU5hbWUgPT09IFwiQ0FMQ0lURS1UQUJMRS1DRUxMXCIpIHtcbiAgICAgICAgICAgIGNlbGwucmVhZENlbGxDb250ZW50c1RvQVQgPSB0aGlzLnJlYWRDZWxsQ29udGVudHNUb0FUO1xuICAgICAgICAgICAgY2VsbC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgICAgICAgICBjZWxsLnBhcmVudFJvd0lzU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJvd0NlbGxzID1cbiAgICAgICAgY2VsbHMgfHwgW107XG4gICAgICB0aGlzLmNlbGxDb3VudCA9IGNlbGxzPy5sZW5ndGg7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVNlbGVjdGlvbk9mUm93ID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjaXRlVGFibGVSb3dTZWxlY3QuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVLZXlib2FyZFNlbGVjdGlvbiA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGlzQWN0aXZhdGlvbktleShldmVudC5rZXkpKSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdGlvbk9mUm93KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2VsbENvdW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucm93VHlwZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm51bWJlcmVkID0gZmFsc2U7XG4gICAgdGhpcy5wb3NpdGlvblNlY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wb3NpdGlvblNlY3Rpb25Mb2NhbGl6ZWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wb3NpdGlvbkFsbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlYWRDZWxsQ29udGVudHNUb0FUID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWxlY3Rpb25Nb2RlID0gXCJub25lXCI7XG4gICAgdGhpcy5zZWxlY3RlZFJvd0NvdW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VsZWN0ZWRSb3dDb3VudExvY2FsaXplZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmJvZHlSb3dDb3VudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gIH1cbiAgaGFuZGxlQ2VsbENoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMudGFibGVSb3dFbCAmJiB0aGlzLnJvd0NlbGxzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMudXBkYXRlQ2VsbHMoKTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlRGVsYXllZENlbGxDaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLnRhYmxlUm93RWwgJiYgdGhpcy5yb3dDZWxscy5sZW5ndGggPiAwKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy51cGRhdGVDZWxscygpKTtcbiAgICB9XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBpZiAodGhpcy50YWJsZVJvd0VsICYmIHRoaXMucm93Q2VsbHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy51cGRhdGVDZWxscygpO1xuICAgIH1cbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY2FsY2l0ZUludGVybmFsVGFibGVSb3dGb2N1c0NoYW5nZUhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNvbnRhaW5zKHRoaXMuZWwpKSB7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGV2ZW50LmRldGFpbC5jZWxsUG9zaXRpb247XG4gICAgICBjb25zdCByb3dQb3NpdGlvbiA9IGV2ZW50LmRldGFpbC5yb3dQb3NpdGlvbjtcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gZXZlbnQuZGV0YWlsLmRlc3RpbmF0aW9uO1xuICAgICAgY29uc3QgbGFzdENlbGwgPSBldmVudC5kZXRhaWwubGFzdENlbGw7XG4gICAgICBpZiAocm93UG9zaXRpb24gPT09IHRoaXMucG9zaXRpb25BbGwpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBkZWZsZWN0RGlyZWN0aW9uID0gZGVzdGluYXRpb24gPT09IFwibGFzdFwiID8gXCJwcmV2aW91c1wiIDogZGVzdGluYXRpb24gPT09IFwiZmlyc3RcIiA/IFwibmV4dFwiIDogZGVzdGluYXRpb247XG4gICAgICAgICAgdGhpcy5lbWl0VGFibGVSb3dGb2N1c1JlcXVlc3QocG9zaXRpb24sIHRoaXMucG9zaXRpb25BbGwsIGRlZmxlY3REaXJlY3Rpb24pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjZWxsUG9zaXRpb24gPSBsYXN0Q2VsbFxuICAgICAgICAgID8gdGhpcy5yb3dDZWxsc1t0aGlzLnJvd0NlbGxzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgOiB0aGlzLnJvd0NlbGxzPy5maW5kKChfLCBpbmRleCkgPT4gaW5kZXggKyAxID09PSBwb3NpdGlvbik7XG4gICAgICAgIGlmIChjZWxsUG9zaXRpb24pIHtcbiAgICAgICAgICBjZWxsUG9zaXRpb24uc2V0Rm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBrZXlEb3duSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGVsID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleTtcbiAgICBjb25zdCBpc0NvbnRyb2wgPSBldmVudC5jdHJsS2V5O1xuICAgIGNvbnN0IGNlbGxzID0gdGhpcy5yb3dDZWxscztcbiAgICBpZiAoZWwubWF0Y2hlcyhcImNhbGNpdGUtdGFibGUtY2VsbFwiKSB8fCBlbC5tYXRjaGVzKFwiY2FsY2l0ZS10YWJsZS1oZWFkZXJcIikpIHtcbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgdGhpcy5lbWl0VGFibGVSb3dGb2N1c1JlcXVlc3QoZWwucG9zaXRpb25JblJvdywgdGhpcy5wb3NpdGlvbkFsbCwgXCJwcmV2aW91c1wiKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgdGhpcy5lbWl0VGFibGVSb3dGb2N1c1JlcXVlc3QoZWwucG9zaXRpb25JblJvdywgdGhpcy5wb3NpdGlvbkFsbCwgXCJuZXh0XCIpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJQYWdlVXBcIjpcbiAgICAgICAgICB0aGlzLmVtaXRUYWJsZVJvd0ZvY3VzUmVxdWVzdChlbC5wb3NpdGlvbkluUm93LCB0aGlzLnBvc2l0aW9uQWxsLCBcImZpcnN0XCIpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJQYWdlRG93blwiOlxuICAgICAgICAgIHRoaXMuZW1pdFRhYmxlUm93Rm9jdXNSZXF1ZXN0KGVsLnBvc2l0aW9uSW5Sb3csIHRoaXMucG9zaXRpb25BbGwsIFwibGFzdFwiKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgZm9jdXNFbGVtZW50SW5Hcm91cChjZWxscywgZWwsIFwicHJldmlvdXNcIiwgZmFsc2UpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgZm9jdXNFbGVtZW50SW5Hcm91cChjZWxscywgZWwsIFwibmV4dFwiLCBmYWxzZSk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkhvbWVcIjpcbiAgICAgICAgICBpZiAoaXNDb250cm9sKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRUYWJsZVJvd0ZvY3VzUmVxdWVzdCgxLCB0aGlzLnBvc2l0aW9uQWxsLCBcImZpcnN0XCIpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb2N1c0VsZW1lbnRJbkdyb3VwKGNlbGxzLCBlbCwgXCJmaXJzdFwiLCBmYWxzZSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkVuZFwiOlxuICAgICAgICAgIGlmIChpc0NvbnRyb2wpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdFRhYmxlUm93Rm9jdXNSZXF1ZXN0KHRoaXMucm93Q2VsbHM/Lmxlbmd0aCwgdGhpcy5wb3NpdGlvbkFsbCwgXCJsYXN0XCIsIHRydWUpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb2N1c0VsZW1lbnRJbkdyb3VwKGNlbGxzLCBlbCwgXCJsYXN0XCIsIGZhbHNlKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlclNlbGVjdGlvbkljb24oKSB7XG4gICAgY29uc3QgaWNvbiA9IHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJtdWx0aXBsZVwiICYmIHRoaXMuc2VsZWN0ZWRcbiAgICAgID8gXCJjaGVjay1zcXVhcmUtZlwiXG4gICAgICA6IHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJtdWx0aXBsZVwiXG4gICAgICAgID8gXCJzcXVhcmVcIlxuICAgICAgICA6IHRoaXMuc2VsZWN0ZWRcbiAgICAgICAgICA/IFwiY2lyY2xlLWZcIlxuICAgICAgICAgIDogXCJjaXJjbGVcIjtcbiAgICByZXR1cm4gaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IGljb24sIHNjYWxlOiBnZXRJY29uU2NhbGUodGhpcy5zY2FsZSkgfSk7XG4gIH1cbiAgcmVuZGVyU2VsZWN0YWJsZUNlbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucm93VHlwZSA9PT0gXCJoZWFkXCIgPyAoaChcImNhbGNpdGUtdGFibGUtaGVhZGVyXCIsIHsgYWxpZ25tZW50OiBcImNlbnRlclwiLCBib2R5Um93Q291bnQ6IHRoaXMuYm9keVJvd0NvdW50LCBrZXk6IFwic2VsZWN0aW9uLWhlYWRcIiwgb25DbGljazogdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm11bHRpcGxlXCIgJiYgdGhpcy5oYW5kbGVTZWxlY3Rpb25PZlJvdywgb25LZXlEb3duOiB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGlwbGVcIiAmJiB0aGlzLmhhbmRsZUtleWJvYXJkU2VsZWN0aW9uLCBzZWxlY3RlZFJvd0NvdW50OiB0aGlzLnNlbGVjdGVkUm93Q291bnQsIHNlbGVjdGVkUm93Q291bnRMb2NhbGl6ZWQ6IHRoaXMuc2VsZWN0ZWRSb3dDb3VudExvY2FsaXplZCwgc2VsZWN0aW9uQ2VsbDogdHJ1ZSwgc2VsZWN0aW9uTW9kZTogdGhpcy5zZWxlY3Rpb25Nb2RlIH0pKSA6IHRoaXMucm93VHlwZSA9PT0gXCJib2R5XCIgPyAoaChcImNhbGNpdGUtdGFibGUtY2VsbFwiLCB7IGFsaWdubWVudDogXCJjZW50ZXJcIiwga2V5OiBcInNlbGVjdGlvbi1ib2R5XCIsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlU2VsZWN0aW9uT2ZSb3csIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlib2FyZFNlbGVjdGlvbiwgcGFyZW50Um93SXNTZWxlY3RlZDogdGhpcy5zZWxlY3RlZCwgcGFyZW50Um93UG9zaXRpb25Mb2NhbGl6ZWQ6IHRoaXMucG9zaXRpb25TZWN0aW9uTG9jYWxpemVkLCBzZWxlY3Rpb25DZWxsOiB0cnVlIH0sIHRoaXMucmVuZGVyU2VsZWN0aW9uSWNvbigpKSkgOiAoaChcImNhbGNpdGUtdGFibGUtY2VsbFwiLCB7IGFsaWdubWVudDogXCJjZW50ZXJcIiwga2V5OiBcInNlbGVjdGlvbi1mb290XCIsIHNlbGVjdGlvbkNlbGw6IHRydWUgfSkpO1xuICB9XG4gIHJlbmRlck51bWJlcmVkQ2VsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5yb3dUeXBlID09PSBcImhlYWRcIiA/IChoKFwiY2FsY2l0ZS10YWJsZS1oZWFkZXJcIiwgeyBhbGlnbm1lbnQ6IFwiY2VudGVyXCIsIGtleTogXCJudW1iZXJlZC1oZWFkXCIsIG51bWJlckNlbGw6IHRydWUgfSkpIDogdGhpcy5yb3dUeXBlID09PSBcImJvZHlcIiA/IChoKFwiY2FsY2l0ZS10YWJsZS1jZWxsXCIsIHsgYWxpZ25tZW50OiBcImNlbnRlclwiLCBrZXk6IFwibnVtYmVyZWQtYm9keVwiLCBudW1iZXJDZWxsOiB0cnVlIH0sIHRoaXMucG9zaXRpb25TZWN0aW9uTG9jYWxpemVkKSkgOiAoaChcImNhbGNpdGUtdGFibGUtY2VsbFwiLCB7IGFsaWdubWVudDogXCJjZW50ZXJcIiwga2V5OiBcIm51bWJlcmVkLWZvb3RcIiwgbnVtYmVyQ2VsbDogdHJ1ZSB9KSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwidHJcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogdGhpcy5kaXNhYmxlZCwgXCJhcmlhLXJvd2luZGV4XCI6IHRoaXMucG9zaXRpb25BbGwgKyAxLCBcImFyaWEtc2VsZWN0ZWRcIjogdGhpcy5zZWxlY3RlZCwgb25LZXlEb3duOiAoZXZlbnQpID0+IHRoaXMua2V5RG93bkhhbmRsZXIoZXZlbnQpLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy50YWJsZVJvd0VsID0gZWwpIH0sIHRoaXMubnVtYmVyZWQgJiYgdGhpcy5yZW5kZXJOdW1iZXJlZENlbGwoKSwgdGhpcy5zZWxlY3Rpb25Nb2RlICE9PSBcIm5vbmVcIiAmJiB0aGlzLnJlbmRlclNlbGVjdGFibGVDZWxsKCksIGgoXCJzbG90XCIsIHsgb25TbG90Y2hhbmdlOiB0aGlzLnVwZGF0ZUNlbGxzLCByZWY6IChlbCkgPT4gKHRoaXMudGFibGVSb3dTbG90RWwgPSBlbCkgfSkpKSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiYm9keVJvd0NvdW50XCI6IFtcImhhbmRsZUNlbGxDaGFuZ2VzXCJdLFxuICAgIFwic2NhbGVcIjogW1wiaGFuZGxlQ2VsbENoYW5nZXNcIl0sXG4gICAgXCJzZWxlY3RlZFwiOiBbXCJoYW5kbGVDZWxsQ2hhbmdlc1wiXSxcbiAgICBcInNlbGVjdGVkUm93Q291bnRcIjogW1wiaGFuZGxlQ2VsbENoYW5nZXNcIl0sXG4gICAgXCJudW1iZXJlZFwiOiBbXCJoYW5kbGVEZWxheWVkQ2VsbENoYW5nZXNcIl0sXG4gICAgXCJzZWxlY3Rpb25Nb2RlXCI6IFtcImhhbmRsZURlbGF5ZWRDZWxsQ2hhbmdlc1wiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiB0YWJsZVJvd0NzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS10YWJsZS1yb3dcIiwge1xuICAgIFwiZGlzYWJsZWRcIjogWzUxNl0sXG4gICAgXCJzZWxlY3RlZFwiOiBbNTE2XSxcbiAgICBcImNlbGxDb3VudFwiOiBbMTAyNiwgXCJjZWxsLWNvdW50XCJdLFxuICAgIFwicm93VHlwZVwiOiBbMSwgXCJyb3ctdHlwZVwiXSxcbiAgICBcIm51bWJlcmVkXCI6IFs0XSxcbiAgICBcInBvc2l0aW9uU2VjdGlvblwiOiBbMiwgXCJwb3NpdGlvbi1zZWN0aW9uXCJdLFxuICAgIFwicG9zaXRpb25TZWN0aW9uTG9jYWxpemVkXCI6IFsxLCBcInBvc2l0aW9uLXNlY3Rpb24tbG9jYWxpemVkXCJdLFxuICAgIFwicG9zaXRpb25BbGxcIjogWzIsIFwicG9zaXRpb24tYWxsXCJdLFxuICAgIFwicmVhZENlbGxDb250ZW50c1RvQVRcIjogWzQsIFwicmVhZC1jZWxsLWNvbnRlbnRzLXRvLWEtdFwiXSxcbiAgICBcInNjYWxlXCI6IFsxXSxcbiAgICBcInNlbGVjdGlvbk1vZGVcIjogWzEsIFwic2VsZWN0aW9uLW1vZGVcIl0sXG4gICAgXCJzZWxlY3RlZFJvd0NvdW50XCI6IFsyLCBcInNlbGVjdGVkLXJvdy1jb3VudFwiXSxcbiAgICBcInNlbGVjdGVkUm93Q291bnRMb2NhbGl6ZWRcIjogWzEsIFwic2VsZWN0ZWQtcm93LWNvdW50LWxvY2FsaXplZFwiXSxcbiAgICBcImJvZHlSb3dDb3VudFwiOiBbMiwgXCJib2R5LXJvdy1jb3VudFwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdXG4gIH0sIFtbNCwgXCJjYWxjaXRlSW50ZXJuYWxUYWJsZVJvd0ZvY3VzQ2hhbmdlXCIsIFwiY2FsY2l0ZUludGVybmFsVGFibGVSb3dGb2N1c0NoYW5nZUhhbmRsZXJcIl1dXSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50JDEoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtdGFibGUtcm93XCIsIFwiY2FsY2l0ZS1pY29uXCIsIFwiY2FsY2l0ZS10YWJsZS1jZWxsXCIsIFwiY2FsY2l0ZS10YWJsZS1oZWFkZXJcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtdGFibGUtcm93XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgVGFibGVSb3cpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS10YWJsZS1jZWxsXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDMoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLXRhYmxlLWhlYWRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlVGFibGVSb3cgPSBUYWJsZVJvdztcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVUYWJsZVJvdywgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9