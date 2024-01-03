"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_tab-nav_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/tab-nav.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/tab-nav.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TabNav),
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
  container: "tab-nav",
};

const tabNavCss = ":host{position:relative;display:flex}.scale-s{min-block-size:1.5rem}.scale-m{min-block-size:2rem}.scale-l{min-block-size:2.75rem}:host([layout=center]:not([bordered])){padding-inline:1.25rem}:host([layout=center]:not([bordered])) .tab-nav ::slotted(calcite-tab-title:last-child){margin-inline-end:0px}:host(:not([bordered])) .scale-l ::slotted(calcite-tab-title){margin-inline-end:1.5rem}:host(:not([bordered])) .scale-m ::slotted(calcite-tab-title){margin-inline-end:1.25rem}:host(:not([bordered])) .scale-s ::slotted(calcite-tab-title){margin-inline-end:1rem}.tab-nav{display:flex;inline-size:100%;justify-content:flex-start;overflow:auto}.tab-nav-active-indicator-container{position:absolute;inset-inline:0px;inset-block-end:0px;block-size:0.125rem;inline-size:100%;overflow:hidden}.tab-nav-active-indicator{position:absolute;inset-block-end:0px;display:block;block-size:0.125rem;background-color:var(--calcite-ui-brand);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0, 0, 0.2, 1)}:host([layout=center]) .tab-nav{justify-content:space-evenly}:host .position-bottom .tab-nav-active-indicator{inset-block-end:unset;inset-block-start:0px}:host .position-bottom .tab-nav-active-indicator-container{inset-block-end:unset;inset-block-start:0px}:host([bordered]) .tab-nav-active-indicator-container{inset-block-end:unset}:host([bordered]) .position-bottom .tab-nav-active-indicator-container{inset-block-end:0;inset-block-start:unset}@media (forced-colors: active){.tab-nav-active-indicator{background-color:highlight}}:host([hidden]){display:none}[hidden]{display:none}";

const TabNav = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteTabChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.createEvent)(this, "calciteTabChange", 6);
    this.calciteInternalTabChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.createEvent)(this, "calciteInternalTabChange", 6);
    this.animationActiveDuration = 0.3;
    this.resizeObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_1__.c)("resize", () => {
      if (!this.activeIndicatorEl) {
        return;
      }
      // remove active indicator transition duration during resize to prevent wobble
      this.activeIndicatorEl.style.transitionDuration = "0s";
      this.updateActiveWidth();
      this.updateOffsetPosition();
    });
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.handleTabFocus = (event, el, destination) => {
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.i)(this.enabledTabTitles, el, destination);
      event.stopPropagation();
    };
    this.handleContainerScroll = () => {
      // remove active indicator transition duration while container is scrolling to prevent wobble
      this.activeIndicatorEl.style.transitionDuration = "0s";
      this.updateOffsetPosition();
    };
    this.storageId = undefined;
    this.syncId = undefined;
    this.selectedTitle = null;
    this.scale = "m";
    this.layout = "inline";
    this.position = "bottom";
    this.bordered = false;
    this.indicatorOffset = undefined;
    this.indicatorWidth = undefined;
    this.selectedTabId = undefined;
  }
  async selectedTabIdChanged() {
    if (localStorage &&
      this.storageId &&
      this.selectedTabId !== undefined &&
      this.selectedTabId !== null) {
      localStorage.setItem(`calcite-tab-nav-${this.storageId}`, JSON.stringify(this.selectedTabId));
    }
    this.calciteInternalTabChange.emit({
      tab: this.selectedTabId,
    });
    this.selectedTitle = await this.getTabTitleById(this.selectedTabId);
  }
  selectedTitleChanged() {
    this.updateOffsetPosition();
    this.updateActiveWidth();
    // reset the animation time on tab selection
    this.activeIndicatorEl.style.transitionDuration = `${this.animationActiveDuration}s`;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.parentTabsEl = this.el.closest("calcite-tabs");
    this.resizeObserver?.observe(this.el);
  }
  componentWillLoad() {
    const storageKey = `calcite-tab-nav-${this.storageId}`;
    if (localStorage && this.storageId && localStorage.getItem(storageKey)) {
      const storedTab = JSON.parse(localStorage.getItem(storageKey));
      this.selectedTabId = storedTab;
    }
  }
  componentWillRender() {
    const { parentTabsEl } = this;
    this.layout = parentTabsEl?.layout;
    this.bordered = parentTabsEl?.bordered;
    // fix issue with active tab-title not lining up with blue indicator
    if (this.selectedTitle) {
      this.updateOffsetPosition();
    }
  }
  componentDidRender() {
    // if every tab title is active select the first tab.
    if (this.tabTitles.length &&
      this.tabTitles.every((title) => !title.selected) &&
      !this.selectedTabId) {
      this.tabTitles[0].getTabIdentifier().then((tab) => {
        this.calciteInternalTabChange.emit({
          tab,
        });
      });
    }
  }
  disconnectedCallback() {
    this.resizeObserver?.disconnect();
  }
  render() {
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(this.el);
    const width = `${this.indicatorWidth}px`;
    const offset = `${this.indicatorOffset}px`;
    const indicatorStyle = dir !== "rtl" ? { width, left: offset } : { width, right: offset };
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Host, { role: "tablist" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", { class: {
        [CSS.container]: true,
        [`scale-${this.scale}`]: true,
        [`position-${this.position}`]: true,
      }, onScroll: this.handleContainerScroll,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.tabNavEl = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", null), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", { class: "tab-nav-active-indicator-container",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.activeIndicatorContainerEl = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", { class: "tab-nav-active-indicator", style: indicatorStyle,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.activeIndicatorEl = el) })))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  focusPreviousTabHandler(event) {
    this.handleTabFocus(event, event.target, "previous");
  }
  focusNextTabHandler(event) {
    this.handleTabFocus(event, event.target, "next");
  }
  focusFirstTabHandler(event) {
    this.handleTabFocus(event, event.target, "first");
  }
  focusLastTabHandler(event) {
    this.handleTabFocus(event, event.target, "last");
  }
  internalActivateTabHandler(event) {
    this.selectedTabId = event.detail.tab
      ? event.detail.tab
      : this.getIndexOfTabTitle(event.target);
    event.stopPropagation();
  }
  activateTabHandler(event) {
    this.calciteTabChange.emit();
    event.stopPropagation();
  }
  internalCloseTabHandler(event) {
    const closedTabTitleEl = event.target;
    this.handleTabTitleClose(closedTabTitleEl);
    event.stopPropagation();
  }
  /**
   * Check for active tabs on register and update selected
   *
   * @param event
   */
  updateTabTitles(event) {
    if (event.target.selected) {
      this.selectedTabId = event.detail;
    }
  }
  globalInternalTabChangeHandler(event) {
    if (this.syncId &&
      event.target !== this.el &&
      event.target.syncId === this.syncId &&
      this.selectedTabId !== event.detail.tab) {
      this.selectedTabId = event.detail.tab;
    }
    event.stopPropagation();
  }
  iconStartChangeHandler() {
    this.updateActiveWidth();
    this.updateOffsetPosition();
  }
  updateOffsetPosition() {
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(this.el);
    const navWidth = this.activeIndicatorContainerEl?.offsetWidth;
    const tabLeft = this.selectedTitle?.offsetLeft;
    const tabWidth = this.selectedTitle?.offsetWidth;
    const offsetRight = navWidth - (tabLeft + tabWidth);
    this.indicatorOffset =
      dir !== "rtl" ? tabLeft - this.tabNavEl?.scrollLeft : offsetRight + this.tabNavEl?.scrollLeft;
  }
  updateActiveWidth() {
    this.indicatorWidth = this.selectedTitle?.offsetWidth;
  }
  getIndexOfTabTitle(el, tabTitles = this.tabTitles) {
    // In most cases, since these indexes correlate with tab contents, we want to consider all tab titles.
    // However, when doing relative index operations, it makes sense to pass in this.enabledTabTitles as the 2nd arg.
    return tabTitles.indexOf(el);
  }
  async getTabTitleById(id) {
    return Promise.all(this.tabTitles.map((el) => el.getTabIdentifier())).then((ids) => {
      return this.tabTitles[ids.indexOf(id)];
    });
  }
  get tabTitles() {
    return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.p)(this.el, "calcite-tab-title");
  }
  get enabledTabTitles() {
    return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.p)(this.el, "calcite-tab-title:not([disabled])").filter((tabTitle) => !tabTitle.closed);
  }
  handleTabTitleClose(closedTabTitleEl) {
    const { tabTitles } = this;
    const visibleTabTitlesIndices = tabTitles.reduce((tabTitleIndices, tabTitle, index) => !tabTitle.closed ? [...tabTitleIndices, index] : tabTitleIndices, []);
    const totalVisibleTabTitles = visibleTabTitlesIndices.length;
    if (totalVisibleTabTitles === 1 && tabTitles[visibleTabTitlesIndices[0]].closable) {
      tabTitles[visibleTabTitlesIndices[0]].closable = false;
      this.selectedTabId = visibleTabTitlesIndices[0];
    }
    else if (totalVisibleTabTitles > 1) {
      const closedTabTitleIndex = tabTitles.findIndex((el) => el === closedTabTitleEl);
      const nextTabTitleIndex = visibleTabTitlesIndices.find((value) => value > closedTabTitleIndex);
      if (this.selectedTabId === closedTabTitleIndex) {
        this.selectedTabId = nextTabTitleIndex ? nextTabTitleIndex : totalVisibleTabTitles - 1;
      }
    }
    requestAnimationFrame(() => {
      this.updateOffsetPosition();
      this.updateActiveWidth();
      tabTitles[this.selectedTabId].focus();
    });
  }
  get el() { return this; }
  static get watchers() { return {
    "selectedTabId": ["selectedTabIdChanged"],
    "selectedTitle": ["selectedTitleChanged"]
  }; }
  static get style() { return tabNavCss; }
}, [1, "calcite-tab-nav", {
    "storageId": [513, "storage-id"],
    "syncId": [513, "sync-id"],
    "selectedTitle": [1040],
    "scale": [1],
    "layout": [1537],
    "position": [1],
    "bordered": [1540],
    "indicatorOffset": [1026, "indicator-offset"],
    "indicatorWidth": [1026, "indicator-width"],
    "selectedTabId": [32]
  }, [[0, "calciteInternalTabsFocusPrevious", "focusPreviousTabHandler"], [0, "calciteInternalTabsFocusNext", "focusNextTabHandler"], [0, "calciteInternalTabsFocusFirst", "focusFirstTabHandler"], [0, "calciteInternalTabsFocusLast", "focusLastTabHandler"], [0, "calciteInternalTabsActivate", "internalActivateTabHandler"], [0, "calciteTabsActivate", "activateTabHandler"], [0, "calciteInternalTabsClose", "internalCloseTabHandler"], [0, "calciteInternalTabTitleRegister", "updateTabTitles"], [16, "calciteInternalTabChange", "globalInternalTabChangeHandler"], [0, "calciteInternalTabIconChanged", "iconStartChangeHandler"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-tab-nav"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-tab-nav":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TabNav);
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYjA3MmZhYzM3YmQwMTFhZWNkYjEwMjM1MWU2Y2YzYzEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytHO0FBQ1o7QUFDOUM7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsa0JBQWtCLGFBQWEsU0FBUyxzQkFBc0IsU0FBUyxvQkFBb0IsU0FBUyx1QkFBdUIsdUNBQXVDLHVCQUF1Qix3RkFBd0Ysc0JBQXNCLDhEQUE4RCx5QkFBeUIsOERBQThELDBCQUEwQiw4REFBOEQsdUJBQXVCLFNBQVMsYUFBYSxpQkFBaUIsMkJBQTJCLGNBQWMsb0NBQW9DLGtCQUFrQixpQkFBaUIsb0JBQW9CLG9CQUFvQixpQkFBaUIsZ0JBQWdCLDBCQUEwQixrQkFBa0Isb0JBQW9CLGNBQWMsb0JBQW9CLHlDQUF5Qyx3QkFBd0Isd0RBQXdELDBCQUEwQixzREFBc0QsZ0NBQWdDLDZCQUE2QixpREFBaUQsc0JBQXNCLHNCQUFzQiwyREFBMkQsc0JBQXNCLHNCQUFzQixzREFBc0Qsc0JBQXNCLHVFQUF1RSxrQkFBa0Isd0JBQXdCLCtCQUErQiwwQkFBMEIsNEJBQTRCLGdCQUFnQixhQUFhLFNBQVMsYUFBYTs7QUFFcnBELDZCQUE2QiwwRkFBa0IsZUFBZSwrRUFBVztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtRkFBVztBQUN2QyxvQ0FBb0MsbUZBQVc7QUFDL0M7QUFDQSwwQkFBMEIsZ0RBQWM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwQ0FBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxlQUFlO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsNkJBQTZCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZUFBZTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMENBQWE7QUFDN0IscUJBQXFCLG9CQUFvQjtBQUN6QyxzQkFBc0IscUJBQXFCO0FBQzNDLDZDQUE2QyxzQkFBc0IsSUFBSTtBQUN2RSxZQUFZLHlFQUFDLENBQUMsd0VBQUksSUFBSSxpQkFBaUIsRUFBRSx5RUFBQyxVQUFVO0FBQ3BEO0FBQ0Esa0JBQWtCLFdBQVc7QUFDN0IscUJBQXFCLGNBQWM7QUFDbkMsT0FBTztBQUNQO0FBQ0EseUNBQXlDLEVBQUUseUVBQUMsZ0JBQWdCLHlFQUFDLFVBQVU7QUFDdkU7QUFDQSwyREFBMkQsRUFBRSx5RUFBQyxVQUFVO0FBQ3hFO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwQ0FBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFdBQVcsMENBQW9CO0FBQy9CO0FBQ0E7QUFDQSxXQUFXLDBDQUFvQjtBQUMvQjtBQUNBO0FBQ0EsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxhQUFhO0FBQ2IsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRWlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3RhYi1uYXYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGgsIEhvc3QgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBpIGFzIGZvY3VzRWxlbWVudEluR3JvdXAsIGIgYXMgZ2V0RWxlbWVudERpciwgcCBhcyBmaWx0ZXJEaXJlY3RDaGlsZHJlbiB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgY29udGFpbmVyOiBcInRhYi1uYXZcIixcbn07XG5cbmNvbnN0IHRhYk5hdkNzcyA9IFwiOmhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4fS5zY2FsZS1ze21pbi1ibG9jay1zaXplOjEuNXJlbX0uc2NhbGUtbXttaW4tYmxvY2stc2l6ZToycmVtfS5zY2FsZS1se21pbi1ibG9jay1zaXplOjIuNzVyZW19Omhvc3QoW2xheW91dD1jZW50ZXJdOm5vdChbYm9yZGVyZWRdKSl7cGFkZGluZy1pbmxpbmU6MS4yNXJlbX06aG9zdChbbGF5b3V0PWNlbnRlcl06bm90KFtib3JkZXJlZF0pKSAudGFiLW5hdiA6OnNsb3R0ZWQoY2FsY2l0ZS10YWItdGl0bGU6bGFzdC1jaGlsZCl7bWFyZ2luLWlubGluZS1lbmQ6MHB4fTpob3N0KDpub3QoW2JvcmRlcmVkXSkpIC5zY2FsZS1sIDo6c2xvdHRlZChjYWxjaXRlLXRhYi10aXRsZSl7bWFyZ2luLWlubGluZS1lbmQ6MS41cmVtfTpob3N0KDpub3QoW2JvcmRlcmVkXSkpIC5zY2FsZS1tIDo6c2xvdHRlZChjYWxjaXRlLXRhYi10aXRsZSl7bWFyZ2luLWlubGluZS1lbmQ6MS4yNXJlbX06aG9zdCg6bm90KFtib3JkZXJlZF0pKSAuc2NhbGUtcyA6OnNsb3R0ZWQoY2FsY2l0ZS10YWItdGl0bGUpe21hcmdpbi1pbmxpbmUtZW5kOjFyZW19LnRhYi1uYXZ7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCU7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7b3ZlcmZsb3c6YXV0b30udGFiLW5hdi1hY3RpdmUtaW5kaWNhdG9yLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTtpbnNldC1pbmxpbmU6MHB4O2luc2V0LWJsb2NrLWVuZDowcHg7YmxvY2stc2l6ZTowLjEyNXJlbTtpbmxpbmUtc2l6ZToxMDAlO292ZXJmbG93OmhpZGRlbn0udGFiLW5hdi1hY3RpdmUtaW5kaWNhdG9ye3Bvc2l0aW9uOmFic29sdXRlO2luc2V0LWJsb2NrLWVuZDowcHg7ZGlzcGxheTpibG9jaztibG9jay1zaXplOjAuMTI1cmVtO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7dHJhbnNpdGlvbi1wcm9wZXJ0eTphbGw7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpfTpob3N0KFtsYXlvdXQ9Y2VudGVyXSkgLnRhYi1uYXZ7anVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seX06aG9zdCAucG9zaXRpb24tYm90dG9tIC50YWItbmF2LWFjdGl2ZS1pbmRpY2F0b3J7aW5zZXQtYmxvY2stZW5kOnVuc2V0O2luc2V0LWJsb2NrLXN0YXJ0OjBweH06aG9zdCAucG9zaXRpb24tYm90dG9tIC50YWItbmF2LWFjdGl2ZS1pbmRpY2F0b3ItY29udGFpbmVye2luc2V0LWJsb2NrLWVuZDp1bnNldDtpbnNldC1ibG9jay1zdGFydDowcHh9Omhvc3QoW2JvcmRlcmVkXSkgLnRhYi1uYXYtYWN0aXZlLWluZGljYXRvci1jb250YWluZXJ7aW5zZXQtYmxvY2stZW5kOnVuc2V0fTpob3N0KFtib3JkZXJlZF0pIC5wb3NpdGlvbi1ib3R0b20gLnRhYi1uYXYtYWN0aXZlLWluZGljYXRvci1jb250YWluZXJ7aW5zZXQtYmxvY2stZW5kOjA7aW5zZXQtYmxvY2stc3RhcnQ6dW5zZXR9QG1lZGlhIChmb3JjZWQtY29sb3JzOiBhY3RpdmUpey50YWItbmF2LWFjdGl2ZS1pbmRpY2F0b3J7YmFja2dyb3VuZC1jb2xvcjpoaWdobGlnaHR9fTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBUYWJOYXYgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZVRhYkNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVRhYkNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYkNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsVGFiQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuYW5pbWF0aW9uQWN0aXZlRHVyYXRpb24gPSAwLjM7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5hY3RpdmVJbmRpY2F0b3JFbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyByZW1vdmUgYWN0aXZlIGluZGljYXRvciB0cmFuc2l0aW9uIGR1cmF0aW9uIGR1cmluZyByZXNpemUgdG8gcHJldmVudCB3b2JibGVcbiAgICAgIHRoaXMuYWN0aXZlSW5kaWNhdG9yRWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gXCIwc1wiO1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmVXaWR0aCgpO1xuICAgICAgdGhpcy51cGRhdGVPZmZzZXRQb3NpdGlvbigpO1xuICAgIH0pO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmhhbmRsZVRhYkZvY3VzID0gKGV2ZW50LCBlbCwgZGVzdGluYXRpb24pID0+IHtcbiAgICAgIGZvY3VzRWxlbWVudEluR3JvdXAodGhpcy5lbmFibGVkVGFiVGl0bGVzLCBlbCwgZGVzdGluYXRpb24pO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNvbnRhaW5lclNjcm9sbCA9ICgpID0+IHtcbiAgICAgIC8vIHJlbW92ZSBhY3RpdmUgaW5kaWNhdG9yIHRyYW5zaXRpb24gZHVyYXRpb24gd2hpbGUgY29udGFpbmVyIGlzIHNjcm9sbGluZyB0byBwcmV2ZW50IHdvYmJsZVxuICAgICAgdGhpcy5hY3RpdmVJbmRpY2F0b3JFbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBcIjBzXCI7XG4gICAgICB0aGlzLnVwZGF0ZU9mZnNldFBvc2l0aW9uKCk7XG4gICAgfTtcbiAgICB0aGlzLnN0b3JhZ2VJZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN5bmNJZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNlbGVjdGVkVGl0bGUgPSBudWxsO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLmxheW91dCA9IFwiaW5saW5lXCI7XG4gICAgdGhpcy5wb3NpdGlvbiA9IFwiYm90dG9tXCI7XG4gICAgdGhpcy5ib3JkZXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuaW5kaWNhdG9yT2Zmc2V0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaW5kaWNhdG9yV2lkdGggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWxlY3RlZFRhYklkID0gdW5kZWZpbmVkO1xuICB9XG4gIGFzeW5jIHNlbGVjdGVkVGFiSWRDaGFuZ2VkKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UgJiZcbiAgICAgIHRoaXMuc3RvcmFnZUlkICYmXG4gICAgICB0aGlzLnNlbGVjdGVkVGFiSWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdGhpcy5zZWxlY3RlZFRhYklkICE9PSBudWxsKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgY2FsY2l0ZS10YWItbmF2LSR7dGhpcy5zdG9yYWdlSWR9YCwgSlNPTi5zdHJpbmdpZnkodGhpcy5zZWxlY3RlZFRhYklkKSk7XG4gICAgfVxuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFiQ2hhbmdlLmVtaXQoe1xuICAgICAgdGFiOiB0aGlzLnNlbGVjdGVkVGFiSWQsXG4gICAgfSk7XG4gICAgdGhpcy5zZWxlY3RlZFRpdGxlID0gYXdhaXQgdGhpcy5nZXRUYWJUaXRsZUJ5SWQodGhpcy5zZWxlY3RlZFRhYklkKTtcbiAgfVxuICBzZWxlY3RlZFRpdGxlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnVwZGF0ZU9mZnNldFBvc2l0aW9uKCk7XG4gICAgdGhpcy51cGRhdGVBY3RpdmVXaWR0aCgpO1xuICAgIC8vIHJlc2V0IHRoZSBhbmltYXRpb24gdGltZSBvbiB0YWIgc2VsZWN0aW9uXG4gICAgdGhpcy5hY3RpdmVJbmRpY2F0b3JFbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHt0aGlzLmFuaW1hdGlvbkFjdGl2ZUR1cmF0aW9ufXNgO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucGFyZW50VGFic0VsID0gdGhpcy5lbC5jbG9zZXN0KFwiY2FsY2l0ZS10YWJzXCIpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/Lm9ic2VydmUodGhpcy5lbCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgY29uc3Qgc3RvcmFnZUtleSA9IGBjYWxjaXRlLXRhYi1uYXYtJHt0aGlzLnN0b3JhZ2VJZH1gO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UgJiYgdGhpcy5zdG9yYWdlSWQgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSkpIHtcbiAgICAgIGNvbnN0IHN0b3JlZFRhYiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSkpO1xuICAgICAgdGhpcy5zZWxlY3RlZFRhYklkID0gc3RvcmVkVGFiO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsUmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGFyZW50VGFic0VsIH0gPSB0aGlzO1xuICAgIHRoaXMubGF5b3V0ID0gcGFyZW50VGFic0VsPy5sYXlvdXQ7XG4gICAgdGhpcy5ib3JkZXJlZCA9IHBhcmVudFRhYnNFbD8uYm9yZGVyZWQ7XG4gICAgLy8gZml4IGlzc3VlIHdpdGggYWN0aXZlIHRhYi10aXRsZSBub3QgbGluaW5nIHVwIHdpdGggYmx1ZSBpbmRpY2F0b3JcbiAgICBpZiAodGhpcy5zZWxlY3RlZFRpdGxlKSB7XG4gICAgICB0aGlzLnVwZGF0ZU9mZnNldFBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICAvLyBpZiBldmVyeSB0YWIgdGl0bGUgaXMgYWN0aXZlIHNlbGVjdCB0aGUgZmlyc3QgdGFiLlxuICAgIGlmICh0aGlzLnRhYlRpdGxlcy5sZW5ndGggJiZcbiAgICAgIHRoaXMudGFiVGl0bGVzLmV2ZXJ5KCh0aXRsZSkgPT4gIXRpdGxlLnNlbGVjdGVkKSAmJlxuICAgICAgIXRoaXMuc2VsZWN0ZWRUYWJJZCkge1xuICAgICAgdGhpcy50YWJUaXRsZXNbMF0uZ2V0VGFiSWRlbnRpZmllcigpLnRoZW4oKHRhYikgPT4ge1xuICAgICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICB0YWIsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGlyID0gZ2V0RWxlbWVudERpcih0aGlzLmVsKTtcbiAgICBjb25zdCB3aWR0aCA9IGAke3RoaXMuaW5kaWNhdG9yV2lkdGh9cHhgO1xuICAgIGNvbnN0IG9mZnNldCA9IGAke3RoaXMuaW5kaWNhdG9yT2Zmc2V0fXB4YDtcbiAgICBjb25zdCBpbmRpY2F0b3JTdHlsZSA9IGRpciAhPT0gXCJydGxcIiA/IHsgd2lkdGgsIGxlZnQ6IG9mZnNldCB9IDogeyB3aWR0aCwgcmlnaHQ6IG9mZnNldCB9O1xuICAgIHJldHVybiAoaChIb3N0LCB7IHJvbGU6IFwidGFibGlzdFwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLmNvbnRhaW5lcl06IHRydWUsXG4gICAgICAgIFtgc2NhbGUtJHt0aGlzLnNjYWxlfWBdOiB0cnVlLFxuICAgICAgICBbYHBvc2l0aW9uLSR7dGhpcy5wb3NpdGlvbn1gXTogdHJ1ZSxcbiAgICAgIH0sIG9uU2Nyb2xsOiB0aGlzLmhhbmRsZUNvbnRhaW5lclNjcm9sbCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMudGFiTmF2RWwgPSBlbCkgfSwgaChcInNsb3RcIiwgbnVsbCksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0YWItbmF2LWFjdGl2ZS1pbmRpY2F0b3ItY29udGFpbmVyXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLmFjdGl2ZUluZGljYXRvckNvbnRhaW5lckVsID0gZWwpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0YWItbmF2LWFjdGl2ZS1pbmRpY2F0b3JcIiwgc3R5bGU6IGluZGljYXRvclN0eWxlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5hY3RpdmVJbmRpY2F0b3JFbCA9IGVsKSB9KSkpKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZm9jdXNQcmV2aW91c1RhYkhhbmRsZXIoZXZlbnQpIHtcbiAgICB0aGlzLmhhbmRsZVRhYkZvY3VzKGV2ZW50LCBldmVudC50YXJnZXQsIFwicHJldmlvdXNcIik7XG4gIH1cbiAgZm9jdXNOZXh0VGFiSGFuZGxlcihldmVudCkge1xuICAgIHRoaXMuaGFuZGxlVGFiRm9jdXMoZXZlbnQsIGV2ZW50LnRhcmdldCwgXCJuZXh0XCIpO1xuICB9XG4gIGZvY3VzRmlyc3RUYWJIYW5kbGVyKGV2ZW50KSB7XG4gICAgdGhpcy5oYW5kbGVUYWJGb2N1cyhldmVudCwgZXZlbnQudGFyZ2V0LCBcImZpcnN0XCIpO1xuICB9XG4gIGZvY3VzTGFzdFRhYkhhbmRsZXIoZXZlbnQpIHtcbiAgICB0aGlzLmhhbmRsZVRhYkZvY3VzKGV2ZW50LCBldmVudC50YXJnZXQsIFwibGFzdFwiKTtcbiAgfVxuICBpbnRlcm5hbEFjdGl2YXRlVGFiSGFuZGxlcihldmVudCkge1xuICAgIHRoaXMuc2VsZWN0ZWRUYWJJZCA9IGV2ZW50LmRldGFpbC50YWJcbiAgICAgID8gZXZlbnQuZGV0YWlsLnRhYlxuICAgICAgOiB0aGlzLmdldEluZGV4T2ZUYWJUaXRsZShldmVudC50YXJnZXQpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIGFjdGl2YXRlVGFiSGFuZGxlcihldmVudCkge1xuICAgIHRoaXMuY2FsY2l0ZVRhYkNoYW5nZS5lbWl0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgaW50ZXJuYWxDbG9zZVRhYkhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBjbG9zZWRUYWJUaXRsZUVsID0gZXZlbnQudGFyZ2V0O1xuICAgIHRoaXMuaGFuZGxlVGFiVGl0bGVDbG9zZShjbG9zZWRUYWJUaXRsZUVsKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICAvKipcbiAgICogQ2hlY2sgZm9yIGFjdGl2ZSB0YWJzIG9uIHJlZ2lzdGVyIGFuZCB1cGRhdGUgc2VsZWN0ZWRcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICB1cGRhdGVUYWJUaXRsZXMoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkVGFiSWQgPSBldmVudC5kZXRhaWw7XG4gICAgfVxuICB9XG4gIGdsb2JhbEludGVybmFsVGFiQ2hhbmdlSGFuZGxlcihldmVudCkge1xuICAgIGlmICh0aGlzLnN5bmNJZCAmJlxuICAgICAgZXZlbnQudGFyZ2V0ICE9PSB0aGlzLmVsICYmXG4gICAgICBldmVudC50YXJnZXQuc3luY0lkID09PSB0aGlzLnN5bmNJZCAmJlxuICAgICAgdGhpcy5zZWxlY3RlZFRhYklkICE9PSBldmVudC5kZXRhaWwudGFiKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkVGFiSWQgPSBldmVudC5kZXRhaWwudGFiO1xuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICBpY29uU3RhcnRDaGFuZ2VIYW5kbGVyKCkge1xuICAgIHRoaXMudXBkYXRlQWN0aXZlV2lkdGgoKTtcbiAgICB0aGlzLnVwZGF0ZU9mZnNldFBvc2l0aW9uKCk7XG4gIH1cbiAgdXBkYXRlT2Zmc2V0UG9zaXRpb24oKSB7XG4gICAgY29uc3QgZGlyID0gZ2V0RWxlbWVudERpcih0aGlzLmVsKTtcbiAgICBjb25zdCBuYXZXaWR0aCA9IHRoaXMuYWN0aXZlSW5kaWNhdG9yQ29udGFpbmVyRWw/Lm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IHRhYkxlZnQgPSB0aGlzLnNlbGVjdGVkVGl0bGU/Lm9mZnNldExlZnQ7XG4gICAgY29uc3QgdGFiV2lkdGggPSB0aGlzLnNlbGVjdGVkVGl0bGU/Lm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IG9mZnNldFJpZ2h0ID0gbmF2V2lkdGggLSAodGFiTGVmdCArIHRhYldpZHRoKTtcbiAgICB0aGlzLmluZGljYXRvck9mZnNldCA9XG4gICAgICBkaXIgIT09IFwicnRsXCIgPyB0YWJMZWZ0IC0gdGhpcy50YWJOYXZFbD8uc2Nyb2xsTGVmdCA6IG9mZnNldFJpZ2h0ICsgdGhpcy50YWJOYXZFbD8uc2Nyb2xsTGVmdDtcbiAgfVxuICB1cGRhdGVBY3RpdmVXaWR0aCgpIHtcbiAgICB0aGlzLmluZGljYXRvcldpZHRoID0gdGhpcy5zZWxlY3RlZFRpdGxlPy5vZmZzZXRXaWR0aDtcbiAgfVxuICBnZXRJbmRleE9mVGFiVGl0bGUoZWwsIHRhYlRpdGxlcyA9IHRoaXMudGFiVGl0bGVzKSB7XG4gICAgLy8gSW4gbW9zdCBjYXNlcywgc2luY2UgdGhlc2UgaW5kZXhlcyBjb3JyZWxhdGUgd2l0aCB0YWIgY29udGVudHMsIHdlIHdhbnQgdG8gY29uc2lkZXIgYWxsIHRhYiB0aXRsZXMuXG4gICAgLy8gSG93ZXZlciwgd2hlbiBkb2luZyByZWxhdGl2ZSBpbmRleCBvcGVyYXRpb25zLCBpdCBtYWtlcyBzZW5zZSB0byBwYXNzIGluIHRoaXMuZW5hYmxlZFRhYlRpdGxlcyBhcyB0aGUgMm5kIGFyZy5cbiAgICByZXR1cm4gdGFiVGl0bGVzLmluZGV4T2YoZWwpO1xuICB9XG4gIGFzeW5jIGdldFRhYlRpdGxlQnlJZChpZCkge1xuICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLnRhYlRpdGxlcy5tYXAoKGVsKSA9PiBlbC5nZXRUYWJJZGVudGlmaWVyKCkpKS50aGVuKChpZHMpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnRhYlRpdGxlc1tpZHMuaW5kZXhPZihpZCldO1xuICAgIH0pO1xuICB9XG4gIGdldCB0YWJUaXRsZXMoKSB7XG4gICAgcmV0dXJuIGZpbHRlckRpcmVjdENoaWxkcmVuKHRoaXMuZWwsIFwiY2FsY2l0ZS10YWItdGl0bGVcIik7XG4gIH1cbiAgZ2V0IGVuYWJsZWRUYWJUaXRsZXMoKSB7XG4gICAgcmV0dXJuIGZpbHRlckRpcmVjdENoaWxkcmVuKHRoaXMuZWwsIFwiY2FsY2l0ZS10YWItdGl0bGU6bm90KFtkaXNhYmxlZF0pXCIpLmZpbHRlcigodGFiVGl0bGUpID0+ICF0YWJUaXRsZS5jbG9zZWQpO1xuICB9XG4gIGhhbmRsZVRhYlRpdGxlQ2xvc2UoY2xvc2VkVGFiVGl0bGVFbCkge1xuICAgIGNvbnN0IHsgdGFiVGl0bGVzIH0gPSB0aGlzO1xuICAgIGNvbnN0IHZpc2libGVUYWJUaXRsZXNJbmRpY2VzID0gdGFiVGl0bGVzLnJlZHVjZSgodGFiVGl0bGVJbmRpY2VzLCB0YWJUaXRsZSwgaW5kZXgpID0+ICF0YWJUaXRsZS5jbG9zZWQgPyBbLi4udGFiVGl0bGVJbmRpY2VzLCBpbmRleF0gOiB0YWJUaXRsZUluZGljZXMsIFtdKTtcbiAgICBjb25zdCB0b3RhbFZpc2libGVUYWJUaXRsZXMgPSB2aXNpYmxlVGFiVGl0bGVzSW5kaWNlcy5sZW5ndGg7XG4gICAgaWYgKHRvdGFsVmlzaWJsZVRhYlRpdGxlcyA9PT0gMSAmJiB0YWJUaXRsZXNbdmlzaWJsZVRhYlRpdGxlc0luZGljZXNbMF1dLmNsb3NhYmxlKSB7XG4gICAgICB0YWJUaXRsZXNbdmlzaWJsZVRhYlRpdGxlc0luZGljZXNbMF1dLmNsb3NhYmxlID0gZmFsc2U7XG4gICAgICB0aGlzLnNlbGVjdGVkVGFiSWQgPSB2aXNpYmxlVGFiVGl0bGVzSW5kaWNlc1swXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodG90YWxWaXNpYmxlVGFiVGl0bGVzID4gMSkge1xuICAgICAgY29uc3QgY2xvc2VkVGFiVGl0bGVJbmRleCA9IHRhYlRpdGxlcy5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gY2xvc2VkVGFiVGl0bGVFbCk7XG4gICAgICBjb25zdCBuZXh0VGFiVGl0bGVJbmRleCA9IHZpc2libGVUYWJUaXRsZXNJbmRpY2VzLmZpbmQoKHZhbHVlKSA9PiB2YWx1ZSA+IGNsb3NlZFRhYlRpdGxlSW5kZXgpO1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRUYWJJZCA9PT0gY2xvc2VkVGFiVGl0bGVJbmRleCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiSWQgPSBuZXh0VGFiVGl0bGVJbmRleCA/IG5leHRUYWJUaXRsZUluZGV4IDogdG90YWxWaXNpYmxlVGFiVGl0bGVzIC0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlT2Zmc2V0UG9zaXRpb24oKTtcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZlV2lkdGgoKTtcbiAgICAgIHRhYlRpdGxlc1t0aGlzLnNlbGVjdGVkVGFiSWRdLmZvY3VzKCk7XG4gICAgfSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwic2VsZWN0ZWRUYWJJZFwiOiBbXCJzZWxlY3RlZFRhYklkQ2hhbmdlZFwiXSxcbiAgICBcInNlbGVjdGVkVGl0bGVcIjogW1wic2VsZWN0ZWRUaXRsZUNoYW5nZWRcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gdGFiTmF2Q3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLXRhYi1uYXZcIiwge1xuICAgIFwic3RvcmFnZUlkXCI6IFs1MTMsIFwic3RvcmFnZS1pZFwiXSxcbiAgICBcInN5bmNJZFwiOiBbNTEzLCBcInN5bmMtaWRcIl0sXG4gICAgXCJzZWxlY3RlZFRpdGxlXCI6IFsxMDQwXSxcbiAgICBcInNjYWxlXCI6IFsxXSxcbiAgICBcImxheW91dFwiOiBbMTUzN10sXG4gICAgXCJwb3NpdGlvblwiOiBbMV0sXG4gICAgXCJib3JkZXJlZFwiOiBbMTU0MF0sXG4gICAgXCJpbmRpY2F0b3JPZmZzZXRcIjogWzEwMjYsIFwiaW5kaWNhdG9yLW9mZnNldFwiXSxcbiAgICBcImluZGljYXRvcldpZHRoXCI6IFsxMDI2LCBcImluZGljYXRvci13aWR0aFwiXSxcbiAgICBcInNlbGVjdGVkVGFiSWRcIjogWzMyXVxuICB9LCBbWzAsIFwiY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzUHJldmlvdXNcIiwgXCJmb2N1c1ByZXZpb3VzVGFiSGFuZGxlclwiXSwgWzAsIFwiY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzTmV4dFwiLCBcImZvY3VzTmV4dFRhYkhhbmRsZXJcIl0sIFswLCBcImNhbGNpdGVJbnRlcm5hbFRhYnNGb2N1c0ZpcnN0XCIsIFwiZm9jdXNGaXJzdFRhYkhhbmRsZXJcIl0sIFswLCBcImNhbGNpdGVJbnRlcm5hbFRhYnNGb2N1c0xhc3RcIiwgXCJmb2N1c0xhc3RUYWJIYW5kbGVyXCJdLCBbMCwgXCJjYWxjaXRlSW50ZXJuYWxUYWJzQWN0aXZhdGVcIiwgXCJpbnRlcm5hbEFjdGl2YXRlVGFiSGFuZGxlclwiXSwgWzAsIFwiY2FsY2l0ZVRhYnNBY3RpdmF0ZVwiLCBcImFjdGl2YXRlVGFiSGFuZGxlclwiXSwgWzAsIFwiY2FsY2l0ZUludGVybmFsVGFic0Nsb3NlXCIsIFwiaW50ZXJuYWxDbG9zZVRhYkhhbmRsZXJcIl0sIFswLCBcImNhbGNpdGVJbnRlcm5hbFRhYlRpdGxlUmVnaXN0ZXJcIiwgXCJ1cGRhdGVUYWJUaXRsZXNcIl0sIFsxNiwgXCJjYWxjaXRlSW50ZXJuYWxUYWJDaGFuZ2VcIiwgXCJnbG9iYWxJbnRlcm5hbFRhYkNoYW5nZUhhbmRsZXJcIl0sIFswLCBcImNhbGNpdGVJbnRlcm5hbFRhYkljb25DaGFuZ2VkXCIsIFwiaWNvblN0YXJ0Q2hhbmdlSGFuZGxlclwiXV1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtdGFiLW5hdlwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS10YWItbmF2XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgVGFiTmF2KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBUYWJOYXYgYXMgVCwgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=