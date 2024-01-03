"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_ko_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/ko.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/ko.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _calcite_input_time_picker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcite-input-time-picker.js */ "./node_modules/@esri/calcite-components/dist/components/calcite-input-time-picker.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


// Korean [ko]
var locale = {
  name: 'ko',
  weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
  weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
  weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
  months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
  monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
  ordinal: function ordinal(n) {
    return n + "\uC77C";
  },
  formats: {
    LT: 'A h:mm',
    LTS: 'A h:mm:ss',
    L: 'YYYY.MM.DD.',
    LL: 'YYYY년 MMMM D일',
    LLL: 'YYYY년 MMMM D일 A h:mm',
    LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
    l: 'YYYY.MM.DD.',
    ll: 'YYYY년 MMMM D일',
    lll: 'YYYY년 MMMM D일 A h:mm',
    llll: 'YYYY년 MMMM D일 dddd A h:mm'
  },
  meridiem: function meridiem(hour) {
    return hour < 12 ? '오전' : '오후';
  },
  relativeTime: {
    future: '%s 후',
    past: '%s 전',
    s: '몇 초',
    m: '1분',
    mm: '%d분',
    h: '한 시간',
    hh: '%d시간',
    d: '하루',
    dd: '%d일',
    M: '한 달',
    MM: '%d달',
    y: '일 년',
    yy: '%d년'
  }
};
_calcite_input_time_picker_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZDc3ODFmN2U5N2ZlMGQ0YzNhNTM5YzM1OTUyNjViMDYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBSzs7QUFFTCxpRUFBZSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMva28uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZCBhcyBkYXlqcyB9IGZyb20gJy4vY2FsY2l0ZS1pbnB1dC10aW1lLXBpY2tlci5qcyc7XG5cbi8vIEtvcmVhbiBba29dXG52YXIgbG9jYWxlID0ge1xuICBuYW1lOiAna28nLFxuICB3ZWVrZGF5czogJ+ydvOyalOydvF/sm5TsmpTsnbxf7ZmU7JqU7J28X+yImOyalOydvF/rqqnsmpTsnbxf6riI7JqU7J28X+2GoOyalOydvCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ+ydvF/sm5Rf7ZmUX+yImF/rqqlf6riIX+2GoCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICfsnbxf7JuUX+2ZlF/siJhf66qpX+q4iF/thqAnLnNwbGl0KCdfJyksXG4gIG1vbnRoczogJzHsm5RfMuyblF8z7JuUXzTsm5RfNeyblF827JuUXzfsm5RfOOyblF857JuUXzEw7JuUXzEx7JuUXzEy7JuUJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJzHsm5RfMuyblF8z7JuUXzTsm5RfNeyblF827JuUXzfsm5RfOOyblF857JuUXzEw7JuUXzEx7JuUXzEy7JuUJy5zcGxpdCgnXycpLFxuICBvcmRpbmFsOiBmdW5jdGlvbiBvcmRpbmFsKG4pIHtcbiAgICByZXR1cm4gbiArIFwiXFx1Qzc3Q1wiO1xuICB9LFxuICBmb3JtYXRzOiB7XG4gICAgTFQ6ICdBIGg6bW0nLFxuICAgIExUUzogJ0EgaDptbTpzcycsXG4gICAgTDogJ1lZWVkuTU0uREQuJyxcbiAgICBMTDogJ1lZWVnrhYQgTU1NTSBE7J28JyxcbiAgICBMTEw6ICdZWVlZ64WEIE1NTU0gROydvCBBIGg6bW0nLFxuICAgIExMTEw6ICdZWVlZ64WEIE1NTU0gROydvCBkZGRkIEEgaDptbScsXG4gICAgbDogJ1lZWVkuTU0uREQuJyxcbiAgICBsbDogJ1lZWVnrhYQgTU1NTSBE7J28JyxcbiAgICBsbGw6ICdZWVlZ64WEIE1NTU0gROydvCBBIGg6bW0nLFxuICAgIGxsbGw6ICdZWVlZ64WEIE1NTU0gROydvCBkZGRkIEEgaDptbSdcbiAgfSxcbiAgbWVyaWRpZW06IGZ1bmN0aW9uIG1lcmlkaWVtKGhvdXIpIHtcbiAgICByZXR1cm4gaG91ciA8IDEyID8gJ+yYpOyghCcgOiAn7Jik7ZuEJztcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnJXMg7ZuEJyxcbiAgICBwYXN0OiAnJXMg7KCEJyxcbiAgICBzOiAn66qHIOy0iCcsXG4gICAgbTogJzHrtoQnLFxuICAgIG1tOiAnJWTrtoQnLFxuICAgIGg6ICftlZwg7Iuc6rCEJyxcbiAgICBoaDogJyVk7Iuc6rCEJyxcbiAgICBkOiAn7ZWY66OoJyxcbiAgICBkZDogJyVk7J28JyxcbiAgICBNOiAn7ZWcIOuLrCcsXG4gICAgTU06ICclZOuLrCcsXG4gICAgeTogJ+ydvCDrhYQnLFxuICAgIHl5OiAnJWTrhYQnXG4gIH1cbn07XG5kYXlqcy5sb2NhbGUobG9jYWxlLCBudWxsLCB0cnVlKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9jYWxlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9