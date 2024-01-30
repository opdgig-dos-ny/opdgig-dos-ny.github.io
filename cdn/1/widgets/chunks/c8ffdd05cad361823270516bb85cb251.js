"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_date-picker-month_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/date-picker-month.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/date-picker-month.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ DatePickerMonth),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.js */ "./node_modules/@esri/calcite-components/dist/components/date.js");
/* harmony import */ var _date_picker_day_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-picker-day.js */ "./node_modules/@esri/calcite-components/dist/components/date-picker-day.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */




const datePickerMonthCss = ":host([hidden]){display:none}[hidden]{display:none}.calendar{margin-block-end:0.25rem}.week-headers{display:flex;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-block:0px;padding-inline:0.25rem}.week-header{text-align:center;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-3);inline-size:14.2857142857%}.day{display:flex;min-inline-size:0px;justify-content:center;inline-size:14.2857142857%}.day calcite-date-picker-day{inline-size:100%}:host([scale=s]) .week-header{padding-inline:0px;padding-block:0.5rem 0.75rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) .week-header{padding-inline:0px;padding-block:0.75rem 1rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]) .week-header{padding-inline:0px;padding-block:1rem 1.25rem;font-size:var(--calcite-font-size--1);line-height:1rem}.week-days{display:flex;flex-direction:row;padding-block:0px;padding-inline:6px}.week-days:focus{outline:2px solid transparent;outline-offset:2px}";

const DAYS_PER_WEEK = 7;
const DAYS_MAXIMUM_INDEX = 6;
const DatePickerMonth = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalDatePickerSelect = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.createEvent)(this, "calciteInternalDatePickerSelect", 6);
    this.calciteInternalDatePickerHover = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.createEvent)(this, "calciteInternalDatePickerHover", 6);
    this.calciteInternalDatePickerActiveDateChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.createEvent)(this, "calciteInternalDatePickerActiveDateChange", 6);
    this.calciteInternalDatePickerMouseOut = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.createEvent)(this, "calciteInternalDatePickerMouseOut", 6);
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    this.keyDownHandler = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      const isRTL = this.el.dir === "rtl";
      switch (event.key) {
        case "ArrowUp":
          event.preventDefault();
          this.addDays(-7);
          break;
        case "ArrowRight":
          event.preventDefault();
          this.addDays(isRTL ? -1 : 1);
          break;
        case "ArrowDown":
          event.preventDefault();
          this.addDays(7);
          break;
        case "ArrowLeft":
          event.preventDefault();
          this.addDays(isRTL ? 1 : -1);
          break;
        case "PageUp":
          event.preventDefault();
          this.addMonths(-1);
          break;
        case "PageDown":
          event.preventDefault();
          this.addMonths(1);
          break;
        case "Home":
          event.preventDefault();
          this.activeDate.setDate(1);
          this.addDays();
          break;
        case "End":
          event.preventDefault();
          this.activeDate.setDate(new Date(this.activeDate.getFullYear(), this.activeDate.getMonth() + 1, 0).getDate());
          this.addDays();
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          break;
        case "Tab":
          this.activeFocus = false;
      }
    };
    /**
     * Once user is not interacting via keyboard,
     * disable auto focusing of active date
     */
    this.disableActiveFocus = () => {
      this.activeFocus = false;
    };
    this.dayHover = (event) => {
      const target = event.target;
      if (target.disabled) {
        this.calciteInternalDatePickerMouseOut.emit();
      }
      else {
        this.calciteInternalDatePickerHover.emit(target.value);
      }
      event.stopPropagation();
    };
    this.daySelect = (event) => {
      const target = event.target;
      this.calciteInternalDatePickerSelect.emit(target.value);
    };
    this.dateTimeFormat = undefined;
    this.selectedDate = undefined;
    this.activeDate = new Date();
    this.startDate = undefined;
    this.endDate = undefined;
    this.min = undefined;
    this.max = undefined;
    this.scale = undefined;
    this.localeData = undefined;
    this.hoverRange = undefined;
  }
  pointerOutHandler() {
    this.calciteInternalDatePickerMouseOut.emit();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const month = this.activeDate.getMonth();
    const year = this.activeDate.getFullYear();
    const startOfWeek = this.localeData.weekStart % 7;
    const { abbreviated, short, narrow } = this.localeData.days;
    const weekDays = this.scale === "s" ? narrow || short || abbreviated : short || abbreviated || narrow;
    const adjustedWeekDays = [...weekDays.slice(startOfWeek, 7), ...weekDays.slice(0, startOfWeek)];
    const curMonDays = this.getCurrentMonthDays(month, year);
    const prevMonDays = this.getPreviousMonthDays(month, year, startOfWeek);
    const nextMonDays = this.getNextMonthDays(month, year, startOfWeek);
    let dayInWeek = 0;
    const getDayInWeek = () => dayInWeek++ % 7;
    const days = [
      ...prevMonDays.map((day) => {
        return {
          active: false,
          day,
          dayInWeek: getDayInWeek(),
          date: new Date(year, month - 1, day),
        };
      }),
      ...curMonDays.map((day) => {
        const date = new Date(year, month, day);
        const active = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.h)(date, this.activeDate);
        return {
          active,
          currentMonth: true,
          day,
          dayInWeek: getDayInWeek(),
          date,
          ref: true,
        };
      }),
      ...nextMonDays.map((day) => {
        return {
          active: false,
          day,
          dayInWeek: getDayInWeek(),
          date: new Date(year, month + 1, day),
        };
      }),
    ];
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Host, { onFocusOut: this.disableActiveFocus, onKeyDown: this.keyDownHandler }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", { class: "calendar", role: "grid" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", { class: "week-headers", role: "row" }, adjustedWeekDays.map((weekday) => ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("span", { class: "week-header", role: "columnheader" }, weekday)))), weeks.map((days) => ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", { class: "week-days", role: "row" }, days.map((day) => this.renderDateDay(day))))))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Add n months to the current month
   *
   * @param step
   */
  addMonths(step) {
    const nextDate = new Date(this.activeDate);
    nextDate.setMonth(this.activeDate.getMonth() + step);
    this.calciteInternalDatePickerActiveDateChange.emit((0,_date_js__WEBPACK_IMPORTED_MODULE_0__.f)(nextDate, this.min, this.max));
    this.activeFocus = true;
  }
  /**
   * Add n days to the current date
   *
   * @param step
   */
  addDays(step = 0) {
    const nextDate = new Date(this.activeDate);
    nextDate.setDate(this.activeDate.getDate() + step);
    this.calciteInternalDatePickerActiveDateChange.emit((0,_date_js__WEBPACK_IMPORTED_MODULE_0__.f)(nextDate, this.min, this.max));
    this.activeFocus = true;
  }
  /**
   * Get dates for last days of the previous month
   *
   * @param month
   * @param year
   * @param startOfWeek
   */
  getPreviousMonthDays(month, year, startOfWeek) {
    const lastDate = new Date(year, month, 0);
    const date = lastDate.getDate();
    const startDay = lastDate.getDay();
    const days = [];
    if (startDay === (startOfWeek + DAYS_MAXIMUM_INDEX) % DAYS_PER_WEEK) {
      return days;
    }
    if (startDay === startOfWeek) {
      return [date];
    }
    for (let i = (DAYS_PER_WEEK + startDay - startOfWeek) % DAYS_PER_WEEK; i >= 0; i--) {
      days.push(date - i);
    }
    return days;
  }
  /**
   * Get dates for the current month
   *
   * @param month
   * @param year
   */
  getCurrentMonthDays(month, year) {
    const num = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let i = 0; i < num; i++) {
      days.push(i + 1);
    }
    return days;
  }
  /**
   * Get dates for first days of the next month
   *
   * @param month
   * @param year
   * @param startOfWeek
   */
  getNextMonthDays(month, year, startOfWeek) {
    const endDay = new Date(year, month + 1, 0).getDay();
    const days = [];
    if (endDay === (startOfWeek + DAYS_MAXIMUM_INDEX) % DAYS_PER_WEEK) {
      return days;
    }
    for (let i = 0; i < (DAYS_MAXIMUM_INDEX - (endDay - startOfWeek)) % DAYS_PER_WEEK; i++) {
      days.push(i + 1);
    }
    return days;
  }
  /**
   * Determine if the date is in between the start and end dates
   *
   * @param date
   */
  betweenSelectedRange(date) {
    return !!(this.startDate &&
      this.endDate &&
      date > this.startDate &&
      date < this.endDate &&
      !this.isRangeHover(date));
  }
  /**
   * Determine if the date should be in selected state
   *
   * @param date
   */
  isSelected(date) {
    return !!((0,_date_js__WEBPACK_IMPORTED_MODULE_0__.h)(date, this.selectedDate) ||
      (this.startDate && (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.h)(date, this.startDate)) ||
      (this.endDate && (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.h)(date, this.endDate)));
  }
  /**
   * Determine if the date is the start of the date range
   *
   * @param date
   */
  isStartOfRange(date) {
    return !!(this.startDate &&
      !(0,_date_js__WEBPACK_IMPORTED_MODULE_0__.h)(this.startDate, this.endDate) &&
      (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.h)(this.startDate, date) &&
      !this.isEndOfRange(date));
  }
  isEndOfRange(date) {
    return !!((this.endDate && !(0,_date_js__WEBPACK_IMPORTED_MODULE_0__.h)(this.startDate, this.endDate) && (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.h)(this.endDate, date)) ||
      (!this.endDate &&
        this.hoverRange &&
        (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.h)(this.startDate, this.hoverRange.end) &&
        (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.h)(date, this.hoverRange.end)));
  }
  /**
   * Render calcite-date-picker-day
   *
   * @param active.active
   * @param active
   * @param day
   * @param dayInWeek
   * @param date
   * @param currentMonth
   * @param ref
   * @param active.currentMonth
   * @param active.date
   * @param active.day
   * @param active.dayInWeek
   * @param active.ref
   */
  renderDateDay({ active, currentMonth, date, day, dayInWeek, ref }) {
    const isFocusedOnStart = this.isFocusedOnStart();
    const isHoverInRange = this.isHoverInRange() ||
      (!this.endDate && this.hoverRange && (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.h)(this.hoverRange?.end, this.startDate));
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", { class: "day", key: date.toDateString(), role: "gridcell" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("calcite-date-picker-day", { active: active, class: {
        "hover--inside-range": this.startDate && isHoverInRange,
        "hover--outside-range": this.startDate && !isHoverInRange,
        "focused--start": isFocusedOnStart,
        "focused--end": !isFocusedOnStart,
      }, currentMonth: currentMonth, dateTimeFormat: this.dateTimeFormat, day: day, disabled: !(0,_date_js__WEBPACK_IMPORTED_MODULE_0__.i)(date, this.min, this.max), endOfRange: this.isEndOfRange(date), highlighted: this.betweenSelectedRange(date), onCalciteDaySelect: this.daySelect, onCalciteInternalDayHover: this.dayHover, range: !!this.startDate && !!this.endDate && !(0,_date_js__WEBPACK_IMPORTED_MODULE_0__.h)(this.startDate, this.endDate), rangeEdge: dayInWeek === 0 ? "start" : dayInWeek === 6 ? "end" : undefined, rangeHover: this.isRangeHover(date), scale: this.scale, selected: this.isSelected(date), startOfRange: this.isStartOfRange(date), value: date,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => {
        // when moving via keyboard, focus must be updated on active date
        if (ref && active && this.activeFocus) {
          el?.focus();
        }
      } })));
  }
  isFocusedOnStart() {
    return this.hoverRange?.focused === "start";
  }
  isHoverInRange() {
    if (!this.hoverRange) {
      return false;
    }
    const { start, end } = this.hoverRange;
    return !!((!this.isFocusedOnStart() && this.startDate && (!this.endDate || end < this.endDate)) ||
      (this.isFocusedOnStart() && this.startDate && start > this.startDate));
  }
  isRangeHover(date) {
    if (!this.hoverRange) {
      return false;
    }
    const { start, end } = this.hoverRange;
    const isStart = this.isFocusedOnStart();
    const insideRange = this.isHoverInRange();
    const cond1 = insideRange &&
      ((!isStart && date > this.startDate && (date < end || (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.h)(date, end))) ||
        (isStart && date < this.endDate && (date > start || (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.h)(date, start))));
    const cond2 = !insideRange &&
      ((!isStart && date >= this.endDate && (date < end || (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.h)(date, end))) ||
        (isStart &&
          ((this.startDate && date < this.startDate) ||
            (this.endDate && (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.h)(date, this.startDate))) &&
          ((start && date > start) || (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.h)(date, start))));
    return cond1 || cond2;
  }
  get el() { return this; }
  static get style() { return datePickerMonthCss; }
}, [1, "calcite-date-picker-month", {
    "dateTimeFormat": [16],
    "selectedDate": [16],
    "activeDate": [16],
    "startDate": [16],
    "endDate": [16],
    "min": [16],
    "max": [16],
    "scale": [513],
    "localeData": [16],
    "hoverRange": [16]
  }, [[1, "pointerout", "pointerOutHandler"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-date-picker-month", "calcite-date-picker-day"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-date-picker-month":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DatePickerMonth);
      }
      break;
    case "calcite-date-picker-day":
      if (!customElements.get(tagName)) {
        (0,_date_picker_day_js__WEBPACK_IMPORTED_MODULE_1__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYzhmZmRkMDVjYWQzNjE4MjMyNzA1MTZiYjg1Y2IyNTEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytHO0FBQ25DO0FBQ1Y7O0FBRWxFLDRDQUE0QyxhQUFhLFNBQVMsYUFBYSxVQUFVLHlCQUF5QixjQUFjLGFBQWEsaUJBQWlCLDZCQUE2QixtQkFBbUIsd0NBQXdDLGtCQUFrQix1QkFBdUIsYUFBYSxrQkFBa0IsNENBQTRDLCtCQUErQiwyQkFBMkIsS0FBSyxhQUFhLG9CQUFvQix1QkFBdUIsMkJBQTJCLDZCQUE2QixpQkFBaUIsOEJBQThCLG1CQUFtQiw2QkFBNkIsc0NBQXNDLGlCQUFpQiw4QkFBOEIsbUJBQW1CLDJCQUEyQixzQ0FBc0MsaUJBQWlCLDhCQUE4QixtQkFBbUIsMkJBQTJCLHNDQUFzQyxpQkFBaUIsV0FBVyxhQUFhLG1CQUFtQixrQkFBa0IsbUJBQW1CLGlCQUFpQiw4QkFBOEIsbUJBQW1COztBQUV2a0M7QUFDQTtBQUNBLHNDQUFzQywwRkFBa0IsZUFBZSwrRUFBVztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtRkFBVztBQUN0RCwwQ0FBMEMsbUZBQVc7QUFDckQscURBQXFELG1GQUFXO0FBQ2hFLDZDQUE2QyxtRkFBVztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTRELDJDQUFRO0FBQ3BFLDREQUE0RCwyQ0FBUTtBQUNwRTtBQUNBLDJEQUEyRCwyQ0FBUTtBQUNuRTtBQUNBO0FBQ0EsNkJBQTZCLDJDQUFRO0FBQ3JDLHNDQUFzQywyQ0FBUTtBQUM5QztBQUNBO0FBQ0EsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXFCO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFMEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvZGF0ZS1waWNrZXItbW9udGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGgsIEhvc3QgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBoIGFzIHNhbWVEYXRlLCBmIGFzIGRhdGVGcm9tUmFuZ2UsIGkgYXMgaW5SYW5nZSB9IGZyb20gJy4vZGF0ZS5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMSB9IGZyb20gJy4vZGF0ZS1waWNrZXItZGF5LmpzJztcblxuY29uc3QgZGF0ZVBpY2tlck1vbnRoQ3NzID0gXCI6aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX0uY2FsZW5kYXJ7bWFyZ2luLWJsb2NrLWVuZDowLjI1cmVtfS53ZWVrLWhlYWRlcnN7ZGlzcGxheTpmbGV4O2JvcmRlci13aWR0aDowcHg7Ym9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpO3BhZGRpbmctYmxvY2s6MHB4O3BhZGRpbmctaW5saW5lOjAuMjVyZW19LndlZWstaGVhZGVye3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtYm9sZCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO2lubGluZS1zaXplOjE0LjI4NTcxNDI4NTclfS5kYXl7ZGlzcGxheTpmbGV4O21pbi1pbmxpbmUtc2l6ZTowcHg7anVzdGlmeS1jb250ZW50OmNlbnRlcjtpbmxpbmUtc2l6ZToxNC4yODU3MTQyODU3JX0uZGF5IGNhbGNpdGUtZGF0ZS1waWNrZXItZGF5e2lubGluZS1zaXplOjEwMCV9Omhvc3QoW3NjYWxlPXNdKSAud2Vlay1oZWFkZXJ7cGFkZGluZy1pbmxpbmU6MHB4O3BhZGRpbmctYmxvY2s6MC41cmVtIDAuNzVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1tXSkgLndlZWstaGVhZGVye3BhZGRpbmctaW5saW5lOjBweDtwYWRkaW5nLWJsb2NrOjAuNzVyZW0gMXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPWxdKSAud2Vlay1oZWFkZXJ7cGFkZGluZy1pbmxpbmU6MHB4O3BhZGRpbmctYmxvY2s6MXJlbSAxLjI1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbX0ud2Vlay1kYXlze2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7cGFkZGluZy1ibG9jazowcHg7cGFkZGluZy1pbmxpbmU6NnB4fS53ZWVrLWRheXM6Zm9jdXN7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4fVwiO1xuXG5jb25zdCBEQVlTX1BFUl9XRUVLID0gNztcbmNvbnN0IERBWVNfTUFYSU1VTV9JTkRFWCA9IDY7XG5jb25zdCBEYXRlUGlja2VyTW9udGggPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlclNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlclNlbGVjdFwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJIb3ZlciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlckhvdmVyXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlckFjdGl2ZURhdGVDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJBY3RpdmVEYXRlQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlck1vdXNlT3V0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyTW91c2VPdXRcIiwgNik7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzUlRMID0gdGhpcy5lbC5kaXIgPT09IFwicnRsXCI7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5hZGREYXlzKC03KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuYWRkRGF5cyhpc1JUTCA/IC0xIDogMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuYWRkRGF5cyg3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5hZGREYXlzKGlzUlRMID8gMSA6IC0xKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlBhZ2VVcFwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5hZGRNb250aHMoLTEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiUGFnZURvd25cIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuYWRkTW9udGhzKDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5hY3RpdmVEYXRlLnNldERhdGUoMSk7XG4gICAgICAgICAgdGhpcy5hZGREYXlzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJFbmRcIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuYWN0aXZlRGF0ZS5zZXREYXRlKG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpLCB0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSArIDEsIDApLmdldERhdGUoKSk7XG4gICAgICAgICAgdGhpcy5hZGREYXlzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJFbnRlclwiOlxuICAgICAgICBjYXNlIFwiIFwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJUYWJcIjpcbiAgICAgICAgICB0aGlzLmFjdGl2ZUZvY3VzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBPbmNlIHVzZXIgaXMgbm90IGludGVyYWN0aW5nIHZpYSBrZXlib2FyZCxcbiAgICAgKiBkaXNhYmxlIGF1dG8gZm9jdXNpbmcgb2YgYWN0aXZlIGRhdGVcbiAgICAgKi9cbiAgICB0aGlzLmRpc2FibGVBY3RpdmVGb2N1cyA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlRm9jdXMgPSBmYWxzZTtcbiAgICB9O1xuICAgIHRoaXMuZGF5SG92ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGlmICh0YXJnZXQuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyTW91c2VPdXQuZW1pdCgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlckhvdmVyLmVtaXQodGFyZ2V0LnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgdGhpcy5kYXlTZWxlY3QgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlclNlbGVjdC5lbWl0KHRhcmdldC52YWx1ZSk7XG4gICAgfTtcbiAgICB0aGlzLmRhdGVUaW1lRm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5zdGFydERhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lbmREYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWluID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWF4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2NhbGVEYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaG92ZXJSYW5nZSA9IHVuZGVmaW5lZDtcbiAgfVxuICBwb2ludGVyT3V0SGFuZGxlcigpIHtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJNb3VzZU91dC5lbWl0KCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vbnRoID0gdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgeWVhciA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IHN0YXJ0T2ZXZWVrID0gdGhpcy5sb2NhbGVEYXRhLndlZWtTdGFydCAlIDc7XG4gICAgY29uc3QgeyBhYmJyZXZpYXRlZCwgc2hvcnQsIG5hcnJvdyB9ID0gdGhpcy5sb2NhbGVEYXRhLmRheXM7XG4gICAgY29uc3Qgd2Vla0RheXMgPSB0aGlzLnNjYWxlID09PSBcInNcIiA/IG5hcnJvdyB8fCBzaG9ydCB8fCBhYmJyZXZpYXRlZCA6IHNob3J0IHx8IGFiYnJldmlhdGVkIHx8IG5hcnJvdztcbiAgICBjb25zdCBhZGp1c3RlZFdlZWtEYXlzID0gWy4uLndlZWtEYXlzLnNsaWNlKHN0YXJ0T2ZXZWVrLCA3KSwgLi4ud2Vla0RheXMuc2xpY2UoMCwgc3RhcnRPZldlZWspXTtcbiAgICBjb25zdCBjdXJNb25EYXlzID0gdGhpcy5nZXRDdXJyZW50TW9udGhEYXlzKG1vbnRoLCB5ZWFyKTtcbiAgICBjb25zdCBwcmV2TW9uRGF5cyA9IHRoaXMuZ2V0UHJldmlvdXNNb250aERheXMobW9udGgsIHllYXIsIHN0YXJ0T2ZXZWVrKTtcbiAgICBjb25zdCBuZXh0TW9uRGF5cyA9IHRoaXMuZ2V0TmV4dE1vbnRoRGF5cyhtb250aCwgeWVhciwgc3RhcnRPZldlZWspO1xuICAgIGxldCBkYXlJbldlZWsgPSAwO1xuICAgIGNvbnN0IGdldERheUluV2VlayA9ICgpID0+IGRheUluV2VlaysrICUgNztcbiAgICBjb25zdCBkYXlzID0gW1xuICAgICAgLi4ucHJldk1vbkRheXMubWFwKChkYXkpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIGRheSxcbiAgICAgICAgICBkYXlJbldlZWs6IGdldERheUluV2VlaygpLFxuICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KSxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICAgLi4uY3VyTW9uRGF5cy5tYXAoKGRheSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IHNhbWVEYXRlKGRhdGUsIHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgIGN1cnJlbnRNb250aDogdHJ1ZSxcbiAgICAgICAgICBkYXksXG4gICAgICAgICAgZGF5SW5XZWVrOiBnZXREYXlJbldlZWsoKSxcbiAgICAgICAgICBkYXRlLFxuICAgICAgICAgIHJlZjogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICAgLi4ubmV4dE1vbkRheXMubWFwKChkYXkpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIGRheSxcbiAgICAgICAgICBkYXlJbldlZWs6IGdldERheUluV2VlaygpLFxuICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgZGF5KSxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgIF07XG4gICAgY29uc3Qgd2Vla3MgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRheXMubGVuZ3RoOyBpICs9IDcpIHtcbiAgICAgIHdlZWtzLnB1c2goZGF5cy5zbGljZShpLCBpICsgNykpO1xuICAgIH1cbiAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkZvY3VzT3V0OiB0aGlzLmRpc2FibGVBY3RpdmVGb2N1cywgb25LZXlEb3duOiB0aGlzLmtleURvd25IYW5kbGVyIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJjYWxlbmRhclwiLCByb2xlOiBcImdyaWRcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwid2Vlay1oZWFkZXJzXCIsIHJvbGU6IFwicm93XCIgfSwgYWRqdXN0ZWRXZWVrRGF5cy5tYXAoKHdlZWtkYXkpID0+IChoKFwic3BhblwiLCB7IGNsYXNzOiBcIndlZWstaGVhZGVyXCIsIHJvbGU6IFwiY29sdW1uaGVhZGVyXCIgfSwgd2Vla2RheSkpKSksIHdlZWtzLm1hcCgoZGF5cykgPT4gKGgoXCJkaXZcIiwgeyBjbGFzczogXCJ3ZWVrLWRheXNcIiwgcm9sZTogXCJyb3dcIiB9LCBkYXlzLm1hcCgoZGF5KSA9PiB0aGlzLnJlbmRlckRhdGVEYXkoZGF5KSkpKSkpKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIEFkZCBuIG1vbnRocyB0byB0aGUgY3VycmVudCBtb250aFxuICAgKlxuICAgKiBAcGFyYW0gc3RlcFxuICAgKi9cbiAgYWRkTW9udGhzKHN0ZXApIHtcbiAgICBjb25zdCBuZXh0RGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgbmV4dERhdGUuc2V0TW9udGgodGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCkgKyBzdGVwKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJBY3RpdmVEYXRlQ2hhbmdlLmVtaXQoZGF0ZUZyb21SYW5nZShuZXh0RGF0ZSwgdGhpcy5taW4sIHRoaXMubWF4KSk7XG4gICAgdGhpcy5hY3RpdmVGb2N1cyA9IHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBuIGRheXMgdG8gdGhlIGN1cnJlbnQgZGF0ZVxuICAgKlxuICAgKiBAcGFyYW0gc3RlcFxuICAgKi9cbiAgYWRkRGF5cyhzdGVwID0gMCkge1xuICAgIGNvbnN0IG5leHREYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlKTtcbiAgICBuZXh0RGF0ZS5zZXREYXRlKHRoaXMuYWN0aXZlRGF0ZS5nZXREYXRlKCkgKyBzdGVwKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJBY3RpdmVEYXRlQ2hhbmdlLmVtaXQoZGF0ZUZyb21SYW5nZShuZXh0RGF0ZSwgdGhpcy5taW4sIHRoaXMubWF4KSk7XG4gICAgdGhpcy5hY3RpdmVGb2N1cyA9IHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBkYXRlcyBmb3IgbGFzdCBkYXlzIG9mIHRoZSBwcmV2aW91cyBtb250aFxuICAgKlxuICAgKiBAcGFyYW0gbW9udGhcbiAgICogQHBhcmFtIHllYXJcbiAgICogQHBhcmFtIHN0YXJ0T2ZXZWVrXG4gICAqL1xuICBnZXRQcmV2aW91c01vbnRoRGF5cyhtb250aCwgeWVhciwgc3RhcnRPZldlZWspIHtcbiAgICBjb25zdCBsYXN0RGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKTtcbiAgICBjb25zdCBkYXRlID0gbGFzdERhdGUuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IHN0YXJ0RGF5ID0gbGFzdERhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgZGF5cyA9IFtdO1xuICAgIGlmIChzdGFydERheSA9PT0gKHN0YXJ0T2ZXZWVrICsgREFZU19NQVhJTVVNX0lOREVYKSAlIERBWVNfUEVSX1dFRUspIHtcbiAgICAgIHJldHVybiBkYXlzO1xuICAgIH1cbiAgICBpZiAoc3RhcnREYXkgPT09IHN0YXJ0T2ZXZWVrKSB7XG4gICAgICByZXR1cm4gW2RhdGVdO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gKERBWVNfUEVSX1dFRUsgKyBzdGFydERheSAtIHN0YXJ0T2ZXZWVrKSAlIERBWVNfUEVSX1dFRUs7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBkYXlzLnB1c2goZGF0ZSAtIGkpO1xuICAgIH1cbiAgICByZXR1cm4gZGF5cztcbiAgfVxuICAvKipcbiAgICogR2V0IGRhdGVzIGZvciB0aGUgY3VycmVudCBtb250aFxuICAgKlxuICAgKiBAcGFyYW0gbW9udGhcbiAgICogQHBhcmFtIHllYXJcbiAgICovXG4gIGdldEN1cnJlbnRNb250aERheXMobW9udGgsIHllYXIpIHtcbiAgICBjb25zdCBudW0gPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApLmdldERhdGUoKTtcbiAgICBjb25zdCBkYXlzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgZGF5cy5wdXNoKGkgKyAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGRheXM7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBkYXRlcyBmb3IgZmlyc3QgZGF5cyBvZiB0aGUgbmV4dCBtb250aFxuICAgKlxuICAgKiBAcGFyYW0gbW9udGhcbiAgICogQHBhcmFtIHllYXJcbiAgICogQHBhcmFtIHN0YXJ0T2ZXZWVrXG4gICAqL1xuICBnZXROZXh0TW9udGhEYXlzKG1vbnRoLCB5ZWFyLCBzdGFydE9mV2Vlaykge1xuICAgIGNvbnN0IGVuZERheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMCkuZ2V0RGF5KCk7XG4gICAgY29uc3QgZGF5cyA9IFtdO1xuICAgIGlmIChlbmREYXkgPT09IChzdGFydE9mV2VlayArIERBWVNfTUFYSU1VTV9JTkRFWCkgJSBEQVlTX1BFUl9XRUVLKSB7XG4gICAgICByZXR1cm4gZGF5cztcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoREFZU19NQVhJTVVNX0lOREVYIC0gKGVuZERheSAtIHN0YXJ0T2ZXZWVrKSkgJSBEQVlTX1BFUl9XRUVLOyBpKyspIHtcbiAgICAgIGRheXMucHVzaChpICsgMSk7XG4gICAgfVxuICAgIHJldHVybiBkYXlzO1xuICB9XG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIGRhdGUgaXMgaW4gYmV0d2VlbiB0aGUgc3RhcnQgYW5kIGVuZCBkYXRlc1xuICAgKlxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKi9cbiAgYmV0d2VlblNlbGVjdGVkUmFuZ2UoZGF0ZSkge1xuICAgIHJldHVybiAhISh0aGlzLnN0YXJ0RGF0ZSAmJlxuICAgICAgdGhpcy5lbmREYXRlICYmXG4gICAgICBkYXRlID4gdGhpcy5zdGFydERhdGUgJiZcbiAgICAgIGRhdGUgPCB0aGlzLmVuZERhdGUgJiZcbiAgICAgICF0aGlzLmlzUmFuZ2VIb3ZlcihkYXRlKSk7XG4gIH1cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGUgZGF0ZSBzaG91bGQgYmUgaW4gc2VsZWN0ZWQgc3RhdGVcbiAgICpcbiAgICogQHBhcmFtIGRhdGVcbiAgICovXG4gIGlzU2VsZWN0ZWQoZGF0ZSkge1xuICAgIHJldHVybiAhIShzYW1lRGF0ZShkYXRlLCB0aGlzLnNlbGVjdGVkRGF0ZSkgfHxcbiAgICAgICh0aGlzLnN0YXJ0RGF0ZSAmJiBzYW1lRGF0ZShkYXRlLCB0aGlzLnN0YXJ0RGF0ZSkpIHx8XG4gICAgICAodGhpcy5lbmREYXRlICYmIHNhbWVEYXRlKGRhdGUsIHRoaXMuZW5kRGF0ZSkpKTtcbiAgfVxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoZSBkYXRlIGlzIHRoZSBzdGFydCBvZiB0aGUgZGF0ZSByYW5nZVxuICAgKlxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKi9cbiAgaXNTdGFydE9mUmFuZ2UoZGF0ZSkge1xuICAgIHJldHVybiAhISh0aGlzLnN0YXJ0RGF0ZSAmJlxuICAgICAgIXNhbWVEYXRlKHRoaXMuc3RhcnREYXRlLCB0aGlzLmVuZERhdGUpICYmXG4gICAgICBzYW1lRGF0ZSh0aGlzLnN0YXJ0RGF0ZSwgZGF0ZSkgJiZcbiAgICAgICF0aGlzLmlzRW5kT2ZSYW5nZShkYXRlKSk7XG4gIH1cbiAgaXNFbmRPZlJhbmdlKGRhdGUpIHtcbiAgICByZXR1cm4gISEoKHRoaXMuZW5kRGF0ZSAmJiAhc2FtZURhdGUodGhpcy5zdGFydERhdGUsIHRoaXMuZW5kRGF0ZSkgJiYgc2FtZURhdGUodGhpcy5lbmREYXRlLCBkYXRlKSkgfHxcbiAgICAgICghdGhpcy5lbmREYXRlICYmXG4gICAgICAgIHRoaXMuaG92ZXJSYW5nZSAmJlxuICAgICAgICBzYW1lRGF0ZSh0aGlzLnN0YXJ0RGF0ZSwgdGhpcy5ob3ZlclJhbmdlLmVuZCkgJiZcbiAgICAgICAgc2FtZURhdGUoZGF0ZSwgdGhpcy5ob3ZlclJhbmdlLmVuZCkpKTtcbiAgfVxuICAvKipcbiAgICogUmVuZGVyIGNhbGNpdGUtZGF0ZS1waWNrZXItZGF5XG4gICAqXG4gICAqIEBwYXJhbSBhY3RpdmUuYWN0aXZlXG4gICAqIEBwYXJhbSBhY3RpdmVcbiAgICogQHBhcmFtIGRheVxuICAgKiBAcGFyYW0gZGF5SW5XZWVrXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEBwYXJhbSBjdXJyZW50TW9udGhcbiAgICogQHBhcmFtIHJlZlxuICAgKiBAcGFyYW0gYWN0aXZlLmN1cnJlbnRNb250aFxuICAgKiBAcGFyYW0gYWN0aXZlLmRhdGVcbiAgICogQHBhcmFtIGFjdGl2ZS5kYXlcbiAgICogQHBhcmFtIGFjdGl2ZS5kYXlJbldlZWtcbiAgICogQHBhcmFtIGFjdGl2ZS5yZWZcbiAgICovXG4gIHJlbmRlckRhdGVEYXkoeyBhY3RpdmUsIGN1cnJlbnRNb250aCwgZGF0ZSwgZGF5LCBkYXlJbldlZWssIHJlZiB9KSB7XG4gICAgY29uc3QgaXNGb2N1c2VkT25TdGFydCA9IHRoaXMuaXNGb2N1c2VkT25TdGFydCgpO1xuICAgIGNvbnN0IGlzSG92ZXJJblJhbmdlID0gdGhpcy5pc0hvdmVySW5SYW5nZSgpIHx8XG4gICAgICAoIXRoaXMuZW5kRGF0ZSAmJiB0aGlzLmhvdmVyUmFuZ2UgJiYgc2FtZURhdGUodGhpcy5ob3ZlclJhbmdlPy5lbmQsIHRoaXMuc3RhcnREYXRlKSk7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwiZGF5XCIsIGtleTogZGF0ZS50b0RhdGVTdHJpbmcoKSwgcm9sZTogXCJncmlkY2VsbFwiIH0sIGgoXCJjYWxjaXRlLWRhdGUtcGlja2VyLWRheVwiLCB7IGFjdGl2ZTogYWN0aXZlLCBjbGFzczoge1xuICAgICAgICBcImhvdmVyLS1pbnNpZGUtcmFuZ2VcIjogdGhpcy5zdGFydERhdGUgJiYgaXNIb3ZlckluUmFuZ2UsXG4gICAgICAgIFwiaG92ZXItLW91dHNpZGUtcmFuZ2VcIjogdGhpcy5zdGFydERhdGUgJiYgIWlzSG92ZXJJblJhbmdlLFxuICAgICAgICBcImZvY3VzZWQtLXN0YXJ0XCI6IGlzRm9jdXNlZE9uU3RhcnQsXG4gICAgICAgIFwiZm9jdXNlZC0tZW5kXCI6ICFpc0ZvY3VzZWRPblN0YXJ0LFxuICAgICAgfSwgY3VycmVudE1vbnRoOiBjdXJyZW50TW9udGgsIGRhdGVUaW1lRm9ybWF0OiB0aGlzLmRhdGVUaW1lRm9ybWF0LCBkYXk6IGRheSwgZGlzYWJsZWQ6ICFpblJhbmdlKGRhdGUsIHRoaXMubWluLCB0aGlzLm1heCksIGVuZE9mUmFuZ2U6IHRoaXMuaXNFbmRPZlJhbmdlKGRhdGUpLCBoaWdobGlnaHRlZDogdGhpcy5iZXR3ZWVuU2VsZWN0ZWRSYW5nZShkYXRlKSwgb25DYWxjaXRlRGF5U2VsZWN0OiB0aGlzLmRheVNlbGVjdCwgb25DYWxjaXRlSW50ZXJuYWxEYXlIb3ZlcjogdGhpcy5kYXlIb3ZlciwgcmFuZ2U6ICEhdGhpcy5zdGFydERhdGUgJiYgISF0aGlzLmVuZERhdGUgJiYgIXNhbWVEYXRlKHRoaXMuc3RhcnREYXRlLCB0aGlzLmVuZERhdGUpLCByYW5nZUVkZ2U6IGRheUluV2VlayA9PT0gMCA/IFwic3RhcnRcIiA6IGRheUluV2VlayA9PT0gNiA/IFwiZW5kXCIgOiB1bmRlZmluZWQsIHJhbmdlSG92ZXI6IHRoaXMuaXNSYW5nZUhvdmVyKGRhdGUpLCBzY2FsZTogdGhpcy5zY2FsZSwgc2VsZWN0ZWQ6IHRoaXMuaXNTZWxlY3RlZChkYXRlKSwgc3RhcnRPZlJhbmdlOiB0aGlzLmlzU3RhcnRPZlJhbmdlKGRhdGUpLCB2YWx1ZTogZGF0ZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IChlbCkgPT4ge1xuICAgICAgICAvLyB3aGVuIG1vdmluZyB2aWEga2V5Ym9hcmQsIGZvY3VzIG11c3QgYmUgdXBkYXRlZCBvbiBhY3RpdmUgZGF0ZVxuICAgICAgICBpZiAocmVmICYmIGFjdGl2ZSAmJiB0aGlzLmFjdGl2ZUZvY3VzKSB7XG4gICAgICAgICAgZWw/LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0gfSkpKTtcbiAgfVxuICBpc0ZvY3VzZWRPblN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLmhvdmVyUmFuZ2U/LmZvY3VzZWQgPT09IFwic3RhcnRcIjtcbiAgfVxuICBpc0hvdmVySW5SYW5nZSgpIHtcbiAgICBpZiAoIXRoaXMuaG92ZXJSYW5nZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IHRoaXMuaG92ZXJSYW5nZTtcbiAgICByZXR1cm4gISEoKCF0aGlzLmlzRm9jdXNlZE9uU3RhcnQoKSAmJiB0aGlzLnN0YXJ0RGF0ZSAmJiAoIXRoaXMuZW5kRGF0ZSB8fCBlbmQgPCB0aGlzLmVuZERhdGUpKSB8fFxuICAgICAgKHRoaXMuaXNGb2N1c2VkT25TdGFydCgpICYmIHRoaXMuc3RhcnREYXRlICYmIHN0YXJ0ID4gdGhpcy5zdGFydERhdGUpKTtcbiAgfVxuICBpc1JhbmdlSG92ZXIoZGF0ZSkge1xuICAgIGlmICghdGhpcy5ob3ZlclJhbmdlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gdGhpcy5ob3ZlclJhbmdlO1xuICAgIGNvbnN0IGlzU3RhcnQgPSB0aGlzLmlzRm9jdXNlZE9uU3RhcnQoKTtcbiAgICBjb25zdCBpbnNpZGVSYW5nZSA9IHRoaXMuaXNIb3ZlckluUmFuZ2UoKTtcbiAgICBjb25zdCBjb25kMSA9IGluc2lkZVJhbmdlICYmXG4gICAgICAoKCFpc1N0YXJ0ICYmIGRhdGUgPiB0aGlzLnN0YXJ0RGF0ZSAmJiAoZGF0ZSA8IGVuZCB8fCBzYW1lRGF0ZShkYXRlLCBlbmQpKSkgfHxcbiAgICAgICAgKGlzU3RhcnQgJiYgZGF0ZSA8IHRoaXMuZW5kRGF0ZSAmJiAoZGF0ZSA+IHN0YXJ0IHx8IHNhbWVEYXRlKGRhdGUsIHN0YXJ0KSkpKTtcbiAgICBjb25zdCBjb25kMiA9ICFpbnNpZGVSYW5nZSAmJlxuICAgICAgKCghaXNTdGFydCAmJiBkYXRlID49IHRoaXMuZW5kRGF0ZSAmJiAoZGF0ZSA8IGVuZCB8fCBzYW1lRGF0ZShkYXRlLCBlbmQpKSkgfHxcbiAgICAgICAgKGlzU3RhcnQgJiZcbiAgICAgICAgICAoKHRoaXMuc3RhcnREYXRlICYmIGRhdGUgPCB0aGlzLnN0YXJ0RGF0ZSkgfHxcbiAgICAgICAgICAgICh0aGlzLmVuZERhdGUgJiYgc2FtZURhdGUoZGF0ZSwgdGhpcy5zdGFydERhdGUpKSkgJiZcbiAgICAgICAgICAoKHN0YXJ0ICYmIGRhdGUgPiBzdGFydCkgfHwgc2FtZURhdGUoZGF0ZSwgc3RhcnQpKSkpO1xuICAgIHJldHVybiBjb25kMSB8fCBjb25kMjtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBkYXRlUGlja2VyTW9udGhDc3M7IH1cbn0sIFsxLCBcImNhbGNpdGUtZGF0ZS1waWNrZXItbW9udGhcIiwge1xuICAgIFwiZGF0ZVRpbWVGb3JtYXRcIjogWzE2XSxcbiAgICBcInNlbGVjdGVkRGF0ZVwiOiBbMTZdLFxuICAgIFwiYWN0aXZlRGF0ZVwiOiBbMTZdLFxuICAgIFwic3RhcnREYXRlXCI6IFsxNl0sXG4gICAgXCJlbmREYXRlXCI6IFsxNl0sXG4gICAgXCJtaW5cIjogWzE2XSxcbiAgICBcIm1heFwiOiBbMTZdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJsb2NhbGVEYXRhXCI6IFsxNl0sXG4gICAgXCJob3ZlclJhbmdlXCI6IFsxNl1cbiAgfSwgW1sxLCBcInBvaW50ZXJvdXRcIiwgXCJwb2ludGVyT3V0SGFuZGxlclwiXV1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtZGF0ZS1waWNrZXItbW9udGhcIiwgXCJjYWxjaXRlLWRhdGUtcGlja2VyLWRheVwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1kYXRlLXBpY2tlci1tb250aFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIERhdGVQaWNrZXJNb250aCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1kYXRlLXBpY2tlci1kYXlcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IERhdGVQaWNrZXJNb250aCBhcyBELCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==