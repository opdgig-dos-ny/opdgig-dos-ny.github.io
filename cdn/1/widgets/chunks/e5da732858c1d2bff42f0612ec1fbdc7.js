"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_pagination_js"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/components/pagination.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/pagination.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ Pagination),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _calcite_headless_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calcite-headless.js */ "./node_modules/@esri/calcite-components/dist/components/calcite-headless.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */









const CSS = {
  page: "page",
  selected: "selected",
  chevron: "chevron",
  disabled: "disabled",
  ellipsis: "ellipsis",
};
const ICONS = {
  next: "chevron-right",
  previous: "chevron-left",
  first: "chevron-start",
  last: "chevron-end",
};

/**
 * A breakpoints lookup object.
 */
const breakpoints = {
  width: {
    large: cssLengthToNumber(_calcite_headless_js__WEBPACK_IMPORTED_MODULE_4__.e),
    medium: cssLengthToNumber(_calcite_headless_js__WEBPACK_IMPORTED_MODULE_4__.a),
    small: cssLengthToNumber(_calcite_headless_js__WEBPACK_IMPORTED_MODULE_4__.b),
    xsmall: cssLengthToNumber(_calcite_headless_js__WEBPACK_IMPORTED_MODULE_4__.c),
    xxsmall: cssLengthToNumber(_calcite_headless_js__WEBPACK_IMPORTED_MODULE_4__.d),
  },
};
function cssLengthToNumber(length) {
  return parseInt(length);
}

const paginationCss = ":host{display:flex;writing-mode:horizontal-tb}:host([scale=s]) .chevron,:host([scale=s]) .page,:host([scale=s]) .ellipsis{block-size:1.5rem;padding-inline:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;min-inline-size:1.5rem}:host([scale=m]) .chevron,:host([scale=m]) .page,:host([scale=m]) .ellipsis{block-size:2rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;min-inline-size:2rem}:host([scale=l]) .chevron,:host([scale=l]) .page,:host([scale=l]) .ellipsis{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-inline-size:2.75rem}:host([scale=l]) .chevron{padding-inline:0.625rem}:host([scale=l]) .page,:host([scale=l]) .ellipsis{padding-inline:0.75rem}:host button{outline-color:transparent}:host button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.chevron,.page,.ellipsis{margin:0px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;border-style:none;--tw-border-opacity:0;background-color:transparent;padding:0px;vertical-align:baseline;font-family:inherit;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-3)}.chevron,.page{cursor:pointer;border-block:2px solid transparent}.chevron:hover,.page:hover{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.page:hover{border-block-end-color:var(--calcite-ui-border-2)}.page.selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);border-block-end-color:var(--calcite-ui-brand)}.chevron:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-brand)}.chevron:active{background-color:var(--calcite-ui-foreground-3)}.chevron.disabled{pointer-events:none;background-color:transparent}.chevron.disabled>calcite-icon{opacity:var(--calcite-ui-opacity-disabled)}:host([hidden]){display:none}[hidden]{display:none}";

const firstAndLastPageCount = 2;
const ellipsisCount = 2;
const maxItemBreakpoints = {
  large: 11,
  medium: 9,
  small: 7,
  xsmall: 5,
  xxsmall: 1,
};
const Pagination = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calcitePaginationChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.createEvent)(this, "calcitePaginationChange", 6);
    this.resizeObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_3__.c)("resize", (entries) => entries.forEach(this.resizeHandler));
    this.resizeHandler = ({ contentRect: { width } }) => this.setMaxItemsToBreakpoint(width);
    this.firstClicked = () => {
      this.startItem = 1;
      this.emitUpdate();
    };
    this.lastClicked = () => {
      this.startItem = this.lastStartItem;
      this.emitUpdate();
    };
    this.previousClicked = async () => {
      await this.previousPage();
      this.emitUpdate();
    };
    this.nextClicked = async () => {
      await this.nextPage();
      this.emitUpdate();
    };
    this.handlePageClick = (event) => {
      const target = event.target;
      this.startItem = parseInt(target.value, 10);
      this.emitUpdate();
    };
    this.groupSeparator = false;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.numberingSystem = undefined;
    this.pageSize = 20;
    this.scale = "m";
    this.startItem = 1;
    this.totalItems = 0;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.maxItems = maxItemBreakpoints.xxsmall;
    this.totalPages = undefined;
    this.lastStartItem = undefined;
    this.isXXSmall = undefined;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  handleTotalPages() {
    if (this.pageSize < 1) {
      this.pageSize = 1;
    }
    this.totalPages = this.totalItems / this.pageSize;
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_2__.u)(this, this.effectiveLocale);
  }
  effectiveLocaleWatcher() {
    _locale_js__WEBPACK_IMPORTED_MODULE_1__.n.numberFormatOptions = {
      locale: this.effectiveLocale,
      numberingSystem: this.numberingSystem,
      useGrouping: this.groupSeparator,
    };
  }
  handleLastStartItemChange() {
    const { totalItems, pageSize, totalPages } = this;
    this.lastStartItem =
      (totalItems % pageSize === 0 ? totalItems - pageSize : Math.floor(totalPages) * pageSize) + 1;
  }
  handleIsXXSmall() {
    this.isXXSmall = this.maxItems === maxItemBreakpoints.xxsmall;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.resizeObserver?.observe(this.el);
  }
  async componentWillLoad() {
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_0__.a)(this);
    this.handleTotalPages();
    this.handleLastStartItemChange();
    this.handleIsXXSmall();
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_0__.s)(this);
    this.setMaxItemsToBreakpoint(this.el.clientWidth);
  }
  disconnectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    this.resizeObserver?.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    this.el.focus();
  }
  /** Go to the next page of results. */
  async nextPage() {
    this.startItem = Math.min(this.lastStartItem, this.startItem + this.pageSize);
  }
  /** Go to the previous page of results. */
  async previousPage() {
    this.startItem = Math.max(1, this.startItem - this.pageSize);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  setMaxItemsToBreakpoint(width) {
    if (!breakpoints || !width) {
      return;
    }
    if (width >= breakpoints.width.medium) {
      this.maxItems = maxItemBreakpoints.large;
      return;
    }
    if (width >= breakpoints.width.small) {
      this.maxItems = maxItemBreakpoints.medium;
      return;
    }
    if (width >= breakpoints.width.xsmall) {
      this.maxItems = maxItemBreakpoints.small;
      return;
    }
    if (width >= breakpoints.width.xxsmall) {
      this.maxItems = maxItemBreakpoints.xsmall;
      return;
    }
    this.maxItems = maxItemBreakpoints.xxsmall;
  }
  showStartEllipsis() {
    return (this.totalPages > this.maxItems &&
      Math.floor(this.startItem / this.pageSize) >
        this.maxItems - firstAndLastPageCount - ellipsisCount);
  }
  showEndEllipsis() {
    return (this.totalPages > this.maxItems &&
      (this.totalItems - this.startItem) / this.pageSize >
        this.maxItems - firstAndLastPageCount - (ellipsisCount - 1));
  }
  emitUpdate() {
    this.calcitePaginationChange.emit();
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderEllipsis(type) {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", { class: CSS.ellipsis, "data-test-ellipsis": type, key: type }, "\u2026"));
  }
  renderItems() {
    const { totalItems, pageSize, startItem, maxItems, totalPages, lastStartItem, isXXSmall } = this;
    const items = [];
    if (isXXSmall) {
      items.push(this.renderPage(startItem));
      return items;
    }
    const renderFirstPage = totalItems > pageSize;
    const renderStartEllipsis = this.showStartEllipsis();
    const renderEndEllipsis = this.showEndEllipsis();
    if (renderFirstPage) {
      items.push(this.renderPage(1));
    }
    if (renderStartEllipsis) {
      items.push(this.renderEllipsis("start"));
    }
    const remainingItems = maxItems -
      firstAndLastPageCount -
      (renderEndEllipsis ? 1 : 0) -
      (renderStartEllipsis ? 1 : 0);
    let end;
    let nextStart;
    // if we don't need ellipses render the whole set
    if (totalPages - 1 <= remainingItems) {
      nextStart = 1 + pageSize;
      end = lastStartItem - pageSize;
    }
    else {
      // if we're within max pages of page 1
      if (startItem / pageSize < remainingItems) {
        nextStart = 1 + pageSize;
        end = 1 + remainingItems * pageSize;
      }
      else {
        // if we're within max pages of last page
        if (startItem + remainingItems * pageSize >= totalItems) {
          nextStart = lastStartItem - remainingItems * pageSize;
          end = lastStartItem - pageSize;
        }
        else {
          // if we're within the center pages
          nextStart = startItem - pageSize * ((remainingItems - 1) / 2);
          end = startItem + pageSize * ((remainingItems - 1) / 2);
        }
      }
    }
    for (let i = 0; i < remainingItems && nextStart <= end; i++) {
      items.push(this.renderPage(nextStart));
      nextStart = nextStart + pageSize;
    }
    if (renderEndEllipsis) {
      items.push(this.renderEllipsis("end"));
    }
    items.push(this.renderPage(lastStartItem));
    return items;
  }
  renderPage(start) {
    const { pageSize } = this;
    const page = Math.floor(start / pageSize) + (pageSize === 1 ? 0 : 1);
    _locale_js__WEBPACK_IMPORTED_MODULE_1__.n.numberFormatOptions = {
      locale: this.effectiveLocale,
      numberingSystem: this.numberingSystem,
      useGrouping: this.groupSeparator,
    };
    const displayedPage = _locale_js__WEBPACK_IMPORTED_MODULE_1__.n.localize(page.toString());
    const selected = start === this.startItem;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("button", { "aria-current": selected ? "page" : "false", class: {
        [CSS.page]: true,
        [CSS.selected]: selected,
      }, onClick: this.handlePageClick, value: start }, displayedPage));
  }
  renderPreviousChevron() {
    const { pageSize, startItem, messages } = this;
    const disabled = pageSize === 1 ? startItem <= pageSize : startItem < pageSize;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("button", { "aria-label": messages.previous, class: {
        [CSS.chevron]: true,
        [CSS.disabled]: disabled,
      }, "data-test-chevron": "previous", disabled: disabled, key: "previous", onClick: this.previousClicked }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { flipRtl: true, icon: ICONS.previous, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_5__.g)(this.scale) })));
  }
  renderNextChevron() {
    const { totalItems, pageSize, startItem, messages } = this;
    const disabled = pageSize === 1 ? startItem + pageSize > totalItems : startItem + pageSize > totalItems;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("button", { "aria-label": messages.next, class: {
        [CSS.chevron]: true,
        [CSS.disabled]: disabled,
      }, "data-test-chevron": "next", disabled: disabled, key: "next-button", onClick: this.nextClicked }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { flipRtl: true, icon: ICONS.next, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_5__.g)(this.scale) })));
  }
  renderFirstChevron() {
    const { messages, startItem, isXXSmall } = this;
    const disabled = startItem === 1;
    return isXXSmall ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("button", { "aria-label": messages.first, class: {
        [CSS.chevron]: true,
        [CSS.disabled]: disabled,
      }, disabled: disabled, key: "first-button", onClick: this.firstClicked }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { flipRtl: true, icon: ICONS.first, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_5__.g)(this.scale) }))) : null;
  }
  renderLastChevron() {
    const { messages, startItem, isXXSmall, lastStartItem } = this;
    const disabled = startItem === lastStartItem;
    return isXXSmall ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("button", { "aria-label": messages.last, class: {
        [CSS.chevron]: true,
        [CSS.disabled]: disabled,
      }, disabled: disabled, key: "last-button", onClick: this.lastClicked }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", { flipRtl: true, icon: ICONS.last, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_5__.g)(this.scale) }))) : null;
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, this.renderFirstChevron(), this.renderPreviousChevron(), this.renderItems(), this.renderNextChevron(), this.renderLastChevron()));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "totalItems": ["handleTotalPages", "handleLastStartItemChange"],
    "pageSize": ["handleTotalPages", "handleLastStartItemChange"],
    "effectiveLocale": ["effectiveLocaleChange", "effectiveLocaleWatcher"],
    "totalPages": ["handleLastStartItemChange"],
    "maxItems": ["handleIsXXSmall"]
  }; }
  static get style() { return paginationCss; }
}, [17, "calcite-pagination", {
    "groupSeparator": [516, "group-separator"],
    "messages": [1040],
    "messageOverrides": [1040],
    "numberingSystem": [1, "numbering-system"],
    "pageSize": [1538, "page-size"],
    "scale": [513],
    "startItem": [1538, "start-item"],
    "totalItems": [514, "total-items"],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "maxItems": [32],
    "totalPages": [32],
    "lastStartItem": [32],
    "isXXSmall": [32],
    "setFocus": [64],
    "nextPage": [64],
    "previousPage": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-pagination", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-pagination":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Pagination);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZTVkYTczMjg1OGMxZDJiZmY0MmYwNjEyZWMxZmJkYzcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2TTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEI3TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21IO0FBQ0w7QUFDSjtBQUNRO0FBQzdEO0FBQ2tLO0FBQ3BLO0FBQ0k7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsbURBQTRCO0FBQ3pELDhCQUE4QixtREFBNEI7QUFDMUQsNkJBQTZCLG1EQUE0QjtBQUN6RCw4QkFBOEIsbURBQTRCO0FBQzFELCtCQUErQixtREFBNkI7QUFDNUQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixhQUFhLDJCQUEyQiw0RUFBNEUsa0JBQWtCLHVCQUF1QixzQ0FBc0MsaUJBQWlCLHVCQUF1Qiw0RUFBNEUsZ0JBQWdCLHNCQUFzQixzQ0FBc0MsaUJBQWlCLHFCQUFxQiw0RUFBNEUsbUJBQW1CLHFDQUFxQyxvQkFBb0Isd0JBQXdCLDBCQUEwQix3QkFBd0Isa0RBQWtELHVCQUF1QixhQUFhLDBCQUEwQixtQkFBbUIseUVBQXlFLHFQQUFxUCx5QkFBeUIsV0FBVyxzQkFBc0IsYUFBYSxtQkFBbUIsdUJBQXVCLGtCQUFrQixzQkFBc0IsNkJBQTZCLFlBQVksd0JBQXdCLG9CQUFvQixxQ0FBcUMsb0JBQW9CLCtCQUErQixlQUFlLGVBQWUsbUNBQW1DLDJCQUEyQiwrQkFBK0IsNkZBQTZGLFlBQVksa0RBQWtELGVBQWUsOENBQThDLCtCQUErQiwrQ0FBK0MsZUFBZSxnREFBZ0QsOEJBQThC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QTtBQUNBLE9BQU8sa0dBQWtHLEVBQUUseUVBQUMsbUJBQW1CLHdDQUF3QyxnREFBWSxjQUFjO0FBQ2pNO0FBQ0E7QUFDQSxZQUFZLGlDQUFpQztBQUM3QztBQUNBLHdCQUF3Qix5RUFBQyxhQUFhO0FBQ3RDO0FBQ0E7QUFDQSxPQUFPLHVFQUF1RSxFQUFFLHlFQUFDLG1CQUFtQix5Q0FBeUMsZ0RBQVksY0FBYztBQUN2SztBQUNBO0FBQ0EsWUFBWSxnREFBZ0Q7QUFDNUQ7QUFDQSx3QkFBd0IseUVBQUMsYUFBYTtBQUN0QztBQUNBO0FBQ0EsT0FBTyxxRUFBcUUsRUFBRSx5RUFBQyxtQkFBbUIsd0NBQXdDLGdEQUFZLGNBQWM7QUFDcEs7QUFDQTtBQUNBLFlBQVkseUVBQUMsQ0FBQyw0RUFBUTtBQUN0QjtBQUNBLGdDQUFnQztBQUNoQyw0QkFBNEI7QUFDNUIsYUFBYTtBQUNiLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBcUI7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVxRCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLWhlYWRsZXNzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9wYWdpbmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbi8qKlxuICogRG8gbm90IGVkaXQgZGlyZWN0bHlcbiAqIEdlbmVyYXRlZCBvbiBUdWUsIDIxIE5vdiAyMDIzIDIyOjUyOjEzIEdNVFxuICovXG5jb25zdCBDb3JlU2l6aW5nMTUgPSBcIjQ4cHhcIjtcbmNvbnN0IENvcmVCcmVha3BvaW50V2lkdGhEZWZhdWx0WHhzID0gXCIzMjBweFwiO1xuY29uc3QgQ29yZUJyZWFrcG9pbnRXaWR0aERlZmF1bHRYcyA9IFwiNDc2cHhcIjtcbmNvbnN0IENvcmVCcmVha3BvaW50V2lkdGhEZWZhdWx0U20gPSBcIjc2OHB4XCI7XG5jb25zdCBDb3JlQnJlYWtwb2ludFdpZHRoRGVmYXVsdE1kID0gXCIxMTUycHhcIjtcbmNvbnN0IENvcmVCcmVha3BvaW50V2lkdGhEZWZhdWx0TGcgPSBcIjE0NDBweFwiO1xuXG5leHBvcnQgeyBDb3JlU2l6aW5nMTUgYXMgQywgQ29yZUJyZWFrcG9pbnRXaWR0aERlZmF1bHRNZCBhcyBhLCBDb3JlQnJlYWtwb2ludFdpZHRoRGVmYXVsdFNtIGFzIGIsIENvcmVCcmVha3BvaW50V2lkdGhEZWZhdWx0WHMgYXMgYywgQ29yZUJyZWFrcG9pbnRXaWR0aERlZmF1bHRYeHMgYXMgZCwgQ29yZUJyZWFrcG9pbnRXaWR0aERlZmF1bHRMZyBhcyBlIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgRnJhZ21lbnQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudEZvY3VzYWJsZSB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgbiBhcyBudW1iZXJTdHJpbmdGb3JtYXR0ZXIsIGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuaW1wb3J0IHsgYSBhcyBDb3JlQnJlYWtwb2ludFdpZHRoRGVmYXVsdE1kLCBiIGFzIENvcmVCcmVha3BvaW50V2lkdGhEZWZhdWx0U20sIGMgYXMgQ29yZUJyZWFrcG9pbnRXaWR0aERlZmF1bHRYcywgZCBhcyBDb3JlQnJlYWtwb2ludFdpZHRoRGVmYXVsdFh4cywgZSBhcyBDb3JlQnJlYWtwb2ludFdpZHRoRGVmYXVsdExnIH0gZnJvbSAnLi9jYWxjaXRlLWhlYWRsZXNzLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0SWNvblNjYWxlIH0gZnJvbSAnLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDEgfSBmcm9tICcuL2ljb24uanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIHBhZ2U6IFwicGFnZVwiLFxuICBzZWxlY3RlZDogXCJzZWxlY3RlZFwiLFxuICBjaGV2cm9uOiBcImNoZXZyb25cIixcbiAgZGlzYWJsZWQ6IFwiZGlzYWJsZWRcIixcbiAgZWxsaXBzaXM6IFwiZWxsaXBzaXNcIixcbn07XG5jb25zdCBJQ09OUyA9IHtcbiAgbmV4dDogXCJjaGV2cm9uLXJpZ2h0XCIsXG4gIHByZXZpb3VzOiBcImNoZXZyb24tbGVmdFwiLFxuICBmaXJzdDogXCJjaGV2cm9uLXN0YXJ0XCIsXG4gIGxhc3Q6IFwiY2hldnJvbi1lbmRcIixcbn07XG5cbi8qKlxuICogQSBicmVha3BvaW50cyBsb29rdXAgb2JqZWN0LlxuICovXG5jb25zdCBicmVha3BvaW50cyA9IHtcbiAgd2lkdGg6IHtcbiAgICBsYXJnZTogY3NzTGVuZ3RoVG9OdW1iZXIoQ29yZUJyZWFrcG9pbnRXaWR0aERlZmF1bHRMZyksXG4gICAgbWVkaXVtOiBjc3NMZW5ndGhUb051bWJlcihDb3JlQnJlYWtwb2ludFdpZHRoRGVmYXVsdE1kKSxcbiAgICBzbWFsbDogY3NzTGVuZ3RoVG9OdW1iZXIoQ29yZUJyZWFrcG9pbnRXaWR0aERlZmF1bHRTbSksXG4gICAgeHNtYWxsOiBjc3NMZW5ndGhUb051bWJlcihDb3JlQnJlYWtwb2ludFdpZHRoRGVmYXVsdFhzKSxcbiAgICB4eHNtYWxsOiBjc3NMZW5ndGhUb051bWJlcihDb3JlQnJlYWtwb2ludFdpZHRoRGVmYXVsdFh4cyksXG4gIH0sXG59O1xuZnVuY3Rpb24gY3NzTGVuZ3RoVG9OdW1iZXIobGVuZ3RoKSB7XG4gIHJldHVybiBwYXJzZUludChsZW5ndGgpO1xufVxuXG5jb25zdCBwYWdpbmF0aW9uQ3NzID0gXCI6aG9zdHtkaXNwbGF5OmZsZXg7d3JpdGluZy1tb2RlOmhvcml6b250YWwtdGJ9Omhvc3QoW3NjYWxlPXNdKSAuY2hldnJvbiw6aG9zdChbc2NhbGU9c10pIC5wYWdlLDpob3N0KFtzY2FsZT1zXSkgLmVsbGlwc2lze2Jsb2NrLXNpemU6MS41cmVtO3BhZGRpbmctaW5saW5lOjAuMjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtO21pbi1pbmxpbmUtc2l6ZToxLjVyZW19Omhvc3QoW3NjYWxlPW1dKSAuY2hldnJvbiw6aG9zdChbc2NhbGU9bV0pIC5wYWdlLDpob3N0KFtzY2FsZT1tXSkgLmVsbGlwc2lze2Jsb2NrLXNpemU6MnJlbTtwYWRkaW5nLWlubGluZTowLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtO21pbi1pbmxpbmUtc2l6ZToycmVtfTpob3N0KFtzY2FsZT1sXSkgLmNoZXZyb24sOmhvc3QoW3NjYWxlPWxdKSAucGFnZSw6aG9zdChbc2NhbGU9bF0pIC5lbGxpcHNpc3tibG9jay1zaXplOjIuNzVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW07bWluLWlubGluZS1zaXplOjIuNzVyZW19Omhvc3QoW3NjYWxlPWxdKSAuY2hldnJvbntwYWRkaW5nLWlubGluZTowLjYyNXJlbX06aG9zdChbc2NhbGU9bF0pIC5wYWdlLDpob3N0KFtzY2FsZT1sXSkgLmVsbGlwc2lze3BhZGRpbmctaW5saW5lOjAuNzVyZW19Omhvc3QgYnV0dG9ue291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnR9Omhvc3QgYnV0dG9uOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX0uY2hldnJvbiwucGFnZSwuZWxsaXBzaXN7bWFyZ2luOjBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JvcmRlci1zdHlsZTpub25lOy0tdHctYm9yZGVyLW9wYWNpdHk6MDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O3BhZGRpbmc6MHB4O3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW07Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfS5jaGV2cm9uLC5wYWdle2N1cnNvcjpwb2ludGVyO2JvcmRlci1ibG9jazoycHggc29saWQgdHJhbnNwYXJlbnR9LmNoZXZyb246aG92ZXIsLnBhZ2U6aG92ZXJ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzfS5wYWdlOmhvdmVye2JvcmRlci1ibG9jay1lbmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMil9LnBhZ2Uuc2VsZWN0ZWR7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTtib3JkZXItYmxvY2stZW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS5jaGV2cm9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS5jaGV2cm9uOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKX0uY2hldnJvbi5kaXNhYmxlZHtwb2ludGVyLWV2ZW50czpub25lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LmNoZXZyb24uZGlzYWJsZWQ+Y2FsY2l0ZS1pY29ue29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgZmlyc3RBbmRMYXN0UGFnZUNvdW50ID0gMjtcbmNvbnN0IGVsbGlwc2lzQ291bnQgPSAyO1xuY29uc3QgbWF4SXRlbUJyZWFrcG9pbnRzID0ge1xuICBsYXJnZTogMTEsXG4gIG1lZGl1bTogOSxcbiAgc21hbGw6IDcsXG4gIHhzbWFsbDogNSxcbiAgeHhzbWFsbDogMSxcbn07XG5jb25zdCBQYWdpbmF0aW9uID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVQYWdpbmF0aW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlUGFnaW5hdGlvbkNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJyZXNpemVcIiwgKGVudHJpZXMpID0+IGVudHJpZXMuZm9yRWFjaCh0aGlzLnJlc2l6ZUhhbmRsZXIpKTtcbiAgICB0aGlzLnJlc2l6ZUhhbmRsZXIgPSAoeyBjb250ZW50UmVjdDogeyB3aWR0aCB9IH0pID0+IHRoaXMuc2V0TWF4SXRlbXNUb0JyZWFrcG9pbnQod2lkdGgpO1xuICAgIHRoaXMuZmlyc3RDbGlja2VkID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdGFydEl0ZW0gPSAxO1xuICAgICAgdGhpcy5lbWl0VXBkYXRlKCk7XG4gICAgfTtcbiAgICB0aGlzLmxhc3RDbGlja2VkID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdGFydEl0ZW0gPSB0aGlzLmxhc3RTdGFydEl0ZW07XG4gICAgICB0aGlzLmVtaXRVcGRhdGUoKTtcbiAgICB9O1xuICAgIHRoaXMucHJldmlvdXNDbGlja2VkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgdGhpcy5wcmV2aW91c1BhZ2UoKTtcbiAgICAgIHRoaXMuZW1pdFVwZGF0ZSgpO1xuICAgIH07XG4gICAgdGhpcy5uZXh0Q2xpY2tlZCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHRoaXMubmV4dFBhZ2UoKTtcbiAgICAgIHRoaXMuZW1pdFVwZGF0ZSgpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVQYWdlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHRoaXMuc3RhcnRJdGVtID0gcGFyc2VJbnQodGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgICB0aGlzLmVtaXRVcGRhdGUoKTtcbiAgICB9O1xuICAgIHRoaXMuZ3JvdXBTZXBhcmF0b3IgPSBmYWxzZTtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBhZ2VTaXplID0gMjA7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMuc3RhcnRJdGVtID0gMTtcbiAgICB0aGlzLnRvdGFsSXRlbXMgPSAwO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgICB0aGlzLm1heEl0ZW1zID0gbWF4SXRlbUJyZWFrcG9pbnRzLnh4c21hbGw7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGFzdFN0YXJ0SXRlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlzWFhTbWFsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgaGFuZGxlVG90YWxQYWdlcygpIHtcbiAgICBpZiAodGhpcy5wYWdlU2l6ZSA8IDEpIHtcbiAgICAgIHRoaXMucGFnZVNpemUgPSAxO1xuICAgIH1cbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLnBhZ2VTaXplO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlV2F0Y2hlcigpIHtcbiAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgdXNlR3JvdXBpbmc6IHRoaXMuZ3JvdXBTZXBhcmF0b3IsXG4gICAgfTtcbiAgfVxuICBoYW5kbGVMYXN0U3RhcnRJdGVtQ2hhbmdlKCkge1xuICAgIGNvbnN0IHsgdG90YWxJdGVtcywgcGFnZVNpemUsIHRvdGFsUGFnZXMgfSA9IHRoaXM7XG4gICAgdGhpcy5sYXN0U3RhcnRJdGVtID1cbiAgICAgICh0b3RhbEl0ZW1zICUgcGFnZVNpemUgPT09IDAgPyB0b3RhbEl0ZW1zIC0gcGFnZVNpemUgOiBNYXRoLmZsb29yKHRvdGFsUGFnZXMpICogcGFnZVNpemUpICsgMTtcbiAgfVxuICBoYW5kbGVJc1hYU21hbGwoKSB7XG4gICAgdGhpcy5pc1hYU21hbGwgPSB0aGlzLm1heEl0ZW1zID09PSBtYXhJdGVtQnJlYWtwb2ludHMueHhzbWFsbDtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/Lm9ic2VydmUodGhpcy5lbCk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlVG90YWxQYWdlcygpO1xuICAgIHRoaXMuaGFuZGxlTGFzdFN0YXJ0SXRlbUNoYW5nZSgpO1xuICAgIHRoaXMuaGFuZGxlSXNYWFNtYWxsKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy5zZXRNYXhJdGVtc1RvQnJlYWtwb2ludCh0aGlzLmVsLmNsaWVudFdpZHRoKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQncyBmaXJzdCBmb2N1c2FibGUgZWxlbWVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxuICAvKiogR28gdG8gdGhlIG5leHQgcGFnZSBvZiByZXN1bHRzLiAqL1xuICBhc3luYyBuZXh0UGFnZSgpIHtcbiAgICB0aGlzLnN0YXJ0SXRlbSA9IE1hdGgubWluKHRoaXMubGFzdFN0YXJ0SXRlbSwgdGhpcy5zdGFydEl0ZW0gKyB0aGlzLnBhZ2VTaXplKTtcbiAgfVxuICAvKiogR28gdG8gdGhlIHByZXZpb3VzIHBhZ2Ugb2YgcmVzdWx0cy4gKi9cbiAgYXN5bmMgcHJldmlvdXNQYWdlKCkge1xuICAgIHRoaXMuc3RhcnRJdGVtID0gTWF0aC5tYXgoMSwgdGhpcy5zdGFydEl0ZW0gLSB0aGlzLnBhZ2VTaXplKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldE1heEl0ZW1zVG9CcmVha3BvaW50KHdpZHRoKSB7XG4gICAgaWYgKCFicmVha3BvaW50cyB8fCAhd2lkdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdpZHRoID49IGJyZWFrcG9pbnRzLndpZHRoLm1lZGl1bSkge1xuICAgICAgdGhpcy5tYXhJdGVtcyA9IG1heEl0ZW1CcmVha3BvaW50cy5sYXJnZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdpZHRoID49IGJyZWFrcG9pbnRzLndpZHRoLnNtYWxsKSB7XG4gICAgICB0aGlzLm1heEl0ZW1zID0gbWF4SXRlbUJyZWFrcG9pbnRzLm1lZGl1bTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdpZHRoID49IGJyZWFrcG9pbnRzLndpZHRoLnhzbWFsbCkge1xuICAgICAgdGhpcy5tYXhJdGVtcyA9IG1heEl0ZW1CcmVha3BvaW50cy5zbWFsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdpZHRoID49IGJyZWFrcG9pbnRzLndpZHRoLnh4c21hbGwpIHtcbiAgICAgIHRoaXMubWF4SXRlbXMgPSBtYXhJdGVtQnJlYWtwb2ludHMueHNtYWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm1heEl0ZW1zID0gbWF4SXRlbUJyZWFrcG9pbnRzLnh4c21hbGw7XG4gIH1cbiAgc2hvd1N0YXJ0RWxsaXBzaXMoKSB7XG4gICAgcmV0dXJuICh0aGlzLnRvdGFsUGFnZXMgPiB0aGlzLm1heEl0ZW1zICYmXG4gICAgICBNYXRoLmZsb29yKHRoaXMuc3RhcnRJdGVtIC8gdGhpcy5wYWdlU2l6ZSkgPlxuICAgICAgICB0aGlzLm1heEl0ZW1zIC0gZmlyc3RBbmRMYXN0UGFnZUNvdW50IC0gZWxsaXBzaXNDb3VudCk7XG4gIH1cbiAgc2hvd0VuZEVsbGlwc2lzKCkge1xuICAgIHJldHVybiAodGhpcy50b3RhbFBhZ2VzID4gdGhpcy5tYXhJdGVtcyAmJlxuICAgICAgKHRoaXMudG90YWxJdGVtcyAtIHRoaXMuc3RhcnRJdGVtKSAvIHRoaXMucGFnZVNpemUgPlxuICAgICAgICB0aGlzLm1heEl0ZW1zIC0gZmlyc3RBbmRMYXN0UGFnZUNvdW50IC0gKGVsbGlwc2lzQ291bnQgLSAxKSk7XG4gIH1cbiAgZW1pdFVwZGF0ZSgpIHtcbiAgICB0aGlzLmNhbGNpdGVQYWdpbmF0aW9uQ2hhbmdlLmVtaXQoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlckVsbGlwc2lzKHR5cGUpIHtcbiAgICByZXR1cm4gKGgoXCJzcGFuXCIsIHsgY2xhc3M6IENTUy5lbGxpcHNpcywgXCJkYXRhLXRlc3QtZWxsaXBzaXNcIjogdHlwZSwga2V5OiB0eXBlIH0sIFwiXFx1MjAyNlwiKSk7XG4gIH1cbiAgcmVuZGVySXRlbXMoKSB7XG4gICAgY29uc3QgeyB0b3RhbEl0ZW1zLCBwYWdlU2l6ZSwgc3RhcnRJdGVtLCBtYXhJdGVtcywgdG90YWxQYWdlcywgbGFzdFN0YXJ0SXRlbSwgaXNYWFNtYWxsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgaWYgKGlzWFhTbWFsbCkge1xuICAgICAgaXRlbXMucHVzaCh0aGlzLnJlbmRlclBhZ2Uoc3RhcnRJdGVtKSk7XG4gICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlckZpcnN0UGFnZSA9IHRvdGFsSXRlbXMgPiBwYWdlU2l6ZTtcbiAgICBjb25zdCByZW5kZXJTdGFydEVsbGlwc2lzID0gdGhpcy5zaG93U3RhcnRFbGxpcHNpcygpO1xuICAgIGNvbnN0IHJlbmRlckVuZEVsbGlwc2lzID0gdGhpcy5zaG93RW5kRWxsaXBzaXMoKTtcbiAgICBpZiAocmVuZGVyRmlyc3RQYWdlKSB7XG4gICAgICBpdGVtcy5wdXNoKHRoaXMucmVuZGVyUGFnZSgxKSk7XG4gICAgfVxuICAgIGlmIChyZW5kZXJTdGFydEVsbGlwc2lzKSB7XG4gICAgICBpdGVtcy5wdXNoKHRoaXMucmVuZGVyRWxsaXBzaXMoXCJzdGFydFwiKSk7XG4gICAgfVxuICAgIGNvbnN0IHJlbWFpbmluZ0l0ZW1zID0gbWF4SXRlbXMgLVxuICAgICAgZmlyc3RBbmRMYXN0UGFnZUNvdW50IC1cbiAgICAgIChyZW5kZXJFbmRFbGxpcHNpcyA/IDEgOiAwKSAtXG4gICAgICAocmVuZGVyU3RhcnRFbGxpcHNpcyA/IDEgOiAwKTtcbiAgICBsZXQgZW5kO1xuICAgIGxldCBuZXh0U3RhcnQ7XG4gICAgLy8gaWYgd2UgZG9uJ3QgbmVlZCBlbGxpcHNlcyByZW5kZXIgdGhlIHdob2xlIHNldFxuICAgIGlmICh0b3RhbFBhZ2VzIC0gMSA8PSByZW1haW5pbmdJdGVtcykge1xuICAgICAgbmV4dFN0YXJ0ID0gMSArIHBhZ2VTaXplO1xuICAgICAgZW5kID0gbGFzdFN0YXJ0SXRlbSAtIHBhZ2VTaXplO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIGlmIHdlJ3JlIHdpdGhpbiBtYXggcGFnZXMgb2YgcGFnZSAxXG4gICAgICBpZiAoc3RhcnRJdGVtIC8gcGFnZVNpemUgPCByZW1haW5pbmdJdGVtcykge1xuICAgICAgICBuZXh0U3RhcnQgPSAxICsgcGFnZVNpemU7XG4gICAgICAgIGVuZCA9IDEgKyByZW1haW5pbmdJdGVtcyAqIHBhZ2VTaXplO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIGlmIHdlJ3JlIHdpdGhpbiBtYXggcGFnZXMgb2YgbGFzdCBwYWdlXG4gICAgICAgIGlmIChzdGFydEl0ZW0gKyByZW1haW5pbmdJdGVtcyAqIHBhZ2VTaXplID49IHRvdGFsSXRlbXMpIHtcbiAgICAgICAgICBuZXh0U3RhcnQgPSBsYXN0U3RhcnRJdGVtIC0gcmVtYWluaW5nSXRlbXMgKiBwYWdlU2l6ZTtcbiAgICAgICAgICBlbmQgPSBsYXN0U3RhcnRJdGVtIC0gcGFnZVNpemU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy8gaWYgd2UncmUgd2l0aGluIHRoZSBjZW50ZXIgcGFnZXNcbiAgICAgICAgICBuZXh0U3RhcnQgPSBzdGFydEl0ZW0gLSBwYWdlU2l6ZSAqICgocmVtYWluaW5nSXRlbXMgLSAxKSAvIDIpO1xuICAgICAgICAgIGVuZCA9IHN0YXJ0SXRlbSArIHBhZ2VTaXplICogKChyZW1haW5pbmdJdGVtcyAtIDEpIC8gMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1haW5pbmdJdGVtcyAmJiBuZXh0U3RhcnQgPD0gZW5kOyBpKyspIHtcbiAgICAgIGl0ZW1zLnB1c2godGhpcy5yZW5kZXJQYWdlKG5leHRTdGFydCkpO1xuICAgICAgbmV4dFN0YXJ0ID0gbmV4dFN0YXJ0ICsgcGFnZVNpemU7XG4gICAgfVxuICAgIGlmIChyZW5kZXJFbmRFbGxpcHNpcykge1xuICAgICAgaXRlbXMucHVzaCh0aGlzLnJlbmRlckVsbGlwc2lzKFwiZW5kXCIpKTtcbiAgICB9XG4gICAgaXRlbXMucHVzaCh0aGlzLnJlbmRlclBhZ2UobGFzdFN0YXJ0SXRlbSkpO1xuICAgIHJldHVybiBpdGVtcztcbiAgfVxuICByZW5kZXJQYWdlKHN0YXJ0KSB7XG4gICAgY29uc3QgeyBwYWdlU2l6ZSB9ID0gdGhpcztcbiAgICBjb25zdCBwYWdlID0gTWF0aC5mbG9vcihzdGFydCAvIHBhZ2VTaXplKSArIChwYWdlU2l6ZSA9PT0gMSA/IDAgOiAxKTtcbiAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgdXNlR3JvdXBpbmc6IHRoaXMuZ3JvdXBTZXBhcmF0b3IsXG4gICAgfTtcbiAgICBjb25zdCBkaXNwbGF5ZWRQYWdlID0gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmxvY2FsaXplKHBhZ2UudG9TdHJpbmcoKSk7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBzdGFydCA9PT0gdGhpcy5zdGFydEl0ZW07XG4gICAgcmV0dXJuIChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWN1cnJlbnRcIjogc2VsZWN0ZWQgPyBcInBhZ2VcIiA6IFwiZmFsc2VcIiwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5wYWdlXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5zZWxlY3RlZF06IHNlbGVjdGVkLFxuICAgICAgfSwgb25DbGljazogdGhpcy5oYW5kbGVQYWdlQ2xpY2ssIHZhbHVlOiBzdGFydCB9LCBkaXNwbGF5ZWRQYWdlKSk7XG4gIH1cbiAgcmVuZGVyUHJldmlvdXNDaGV2cm9uKCkge1xuICAgIGNvbnN0IHsgcGFnZVNpemUsIHN0YXJ0SXRlbSwgbWVzc2FnZXMgfSA9IHRoaXM7XG4gICAgY29uc3QgZGlzYWJsZWQgPSBwYWdlU2l6ZSA9PT0gMSA/IHN0YXJ0SXRlbSA8PSBwYWdlU2l6ZSA6IHN0YXJ0SXRlbSA8IHBhZ2VTaXplO1xuICAgIHJldHVybiAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1sYWJlbFwiOiBtZXNzYWdlcy5wcmV2aW91cywgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5jaGV2cm9uXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5kaXNhYmxlZF06IGRpc2FibGVkLFxuICAgICAgfSwgXCJkYXRhLXRlc3QtY2hldnJvblwiOiBcInByZXZpb3VzXCIsIGRpc2FibGVkOiBkaXNhYmxlZCwga2V5OiBcInByZXZpb3VzXCIsIG9uQ2xpY2s6IHRoaXMucHJldmlvdXNDbGlja2VkIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBmbGlwUnRsOiB0cnVlLCBpY29uOiBJQ09OUy5wcmV2aW91cywgc2NhbGU6IGdldEljb25TY2FsZSh0aGlzLnNjYWxlKSB9KSkpO1xuICB9XG4gIHJlbmRlck5leHRDaGV2cm9uKCkge1xuICAgIGNvbnN0IHsgdG90YWxJdGVtcywgcGFnZVNpemUsIHN0YXJ0SXRlbSwgbWVzc2FnZXMgfSA9IHRoaXM7XG4gICAgY29uc3QgZGlzYWJsZWQgPSBwYWdlU2l6ZSA9PT0gMSA/IHN0YXJ0SXRlbSArIHBhZ2VTaXplID4gdG90YWxJdGVtcyA6IHN0YXJ0SXRlbSArIHBhZ2VTaXplID4gdG90YWxJdGVtcztcbiAgICByZXR1cm4gKGgoXCJidXR0b25cIiwgeyBcImFyaWEtbGFiZWxcIjogbWVzc2FnZXMubmV4dCwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5jaGV2cm9uXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5kaXNhYmxlZF06IGRpc2FibGVkLFxuICAgICAgfSwgXCJkYXRhLXRlc3QtY2hldnJvblwiOiBcIm5leHRcIiwgZGlzYWJsZWQ6IGRpc2FibGVkLCBrZXk6IFwibmV4dC1idXR0b25cIiwgb25DbGljazogdGhpcy5uZXh0Q2xpY2tlZCB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgZmxpcFJ0bDogdHJ1ZSwgaWNvbjogSUNPTlMubmV4dCwgc2NhbGU6IGdldEljb25TY2FsZSh0aGlzLnNjYWxlKSB9KSkpO1xuICB9XG4gIHJlbmRlckZpcnN0Q2hldnJvbigpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzLCBzdGFydEl0ZW0sIGlzWFhTbWFsbCB9ID0gdGhpcztcbiAgICBjb25zdCBkaXNhYmxlZCA9IHN0YXJ0SXRlbSA9PT0gMTtcbiAgICByZXR1cm4gaXNYWFNtYWxsID8gKGgoXCJidXR0b25cIiwgeyBcImFyaWEtbGFiZWxcIjogbWVzc2FnZXMuZmlyc3QsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuY2hldnJvbl06IHRydWUsXG4gICAgICAgIFtDU1MuZGlzYWJsZWRdOiBkaXNhYmxlZCxcbiAgICAgIH0sIGRpc2FibGVkOiBkaXNhYmxlZCwga2V5OiBcImZpcnN0LWJ1dHRvblwiLCBvbkNsaWNrOiB0aGlzLmZpcnN0Q2xpY2tlZCB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgZmxpcFJ0bDogdHJ1ZSwgaWNvbjogSUNPTlMuZmlyc3QsIHNjYWxlOiBnZXRJY29uU2NhbGUodGhpcy5zY2FsZSkgfSkpKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyTGFzdENoZXZyb24oKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlcywgc3RhcnRJdGVtLCBpc1hYU21hbGwsIGxhc3RTdGFydEl0ZW0gfSA9IHRoaXM7XG4gICAgY29uc3QgZGlzYWJsZWQgPSBzdGFydEl0ZW0gPT09IGxhc3RTdGFydEl0ZW07XG4gICAgcmV0dXJuIGlzWFhTbWFsbCA/IChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IG1lc3NhZ2VzLmxhc3QsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuY2hldnJvbl06IHRydWUsXG4gICAgICAgIFtDU1MuZGlzYWJsZWRdOiBkaXNhYmxlZCxcbiAgICAgIH0sIGRpc2FibGVkOiBkaXNhYmxlZCwga2V5OiBcImxhc3QtYnV0dG9uXCIsIG9uQ2xpY2s6IHRoaXMubGFzdENsaWNrZWQgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGZsaXBSdGw6IHRydWUsIGljb246IElDT05TLmxhc3QsIHNjYWxlOiBnZXRJY29uU2NhbGUodGhpcy5zY2FsZSkgfSkpKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoaChGcmFnbWVudCwgbnVsbCwgdGhpcy5yZW5kZXJGaXJzdENoZXZyb24oKSwgdGhpcy5yZW5kZXJQcmV2aW91c0NoZXZyb24oKSwgdGhpcy5yZW5kZXJJdGVtcygpLCB0aGlzLnJlbmRlck5leHRDaGV2cm9uKCksIHRoaXMucmVuZGVyTGFzdENoZXZyb24oKSkpO1xuICB9XG4gIHN0YXRpYyBnZXQgZGVsZWdhdGVzRm9jdXMoKSB7IHJldHVybiB0cnVlOyB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJ0b3RhbEl0ZW1zXCI6IFtcImhhbmRsZVRvdGFsUGFnZXNcIiwgXCJoYW5kbGVMYXN0U3RhcnRJdGVtQ2hhbmdlXCJdLFxuICAgIFwicGFnZVNpemVcIjogW1wiaGFuZGxlVG90YWxQYWdlc1wiLCBcImhhbmRsZUxhc3RTdGFydEl0ZW1DaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCIsIFwiZWZmZWN0aXZlTG9jYWxlV2F0Y2hlclwiXSxcbiAgICBcInRvdGFsUGFnZXNcIjogW1wiaGFuZGxlTGFzdFN0YXJ0SXRlbUNoYW5nZVwiXSxcbiAgICBcIm1heEl0ZW1zXCI6IFtcImhhbmRsZUlzWFhTbWFsbFwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBwYWdpbmF0aW9uQ3NzOyB9XG59LCBbMTcsIFwiY2FsY2l0ZS1wYWdpbmF0aW9uXCIsIHtcbiAgICBcImdyb3VwU2VwYXJhdG9yXCI6IFs1MTYsIFwiZ3JvdXAtc2VwYXJhdG9yXCJdLFxuICAgIFwibWVzc2FnZXNcIjogWzEwNDBdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJudW1iZXJpbmdTeXN0ZW1cIjogWzEsIFwibnVtYmVyaW5nLXN5c3RlbVwiXSxcbiAgICBcInBhZ2VTaXplXCI6IFsxNTM4LCBcInBhZ2Utc2l6ZVwiXSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwic3RhcnRJdGVtXCI6IFsxNTM4LCBcInN0YXJ0LWl0ZW1cIl0sXG4gICAgXCJ0b3RhbEl0ZW1zXCI6IFs1MTQsIFwidG90YWwtaXRlbXNcIl0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwibWF4SXRlbXNcIjogWzMyXSxcbiAgICBcInRvdGFsUGFnZXNcIjogWzMyXSxcbiAgICBcImxhc3RTdGFydEl0ZW1cIjogWzMyXSxcbiAgICBcImlzWFhTbWFsbFwiOiBbMzJdLFxuICAgIFwic2V0Rm9jdXNcIjogWzY0XSxcbiAgICBcIm5leHRQYWdlXCI6IFs2NF0sXG4gICAgXCJwcmV2aW91c1BhZ2VcIjogWzY0XVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLXBhZ2luYXRpb25cIiwgXCJjYWxjaXRlLWljb25cIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtcGFnaW5hdGlvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIFBhZ2luYXRpb24pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgUGFnaW5hdGlvbiBhcyBQLCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==