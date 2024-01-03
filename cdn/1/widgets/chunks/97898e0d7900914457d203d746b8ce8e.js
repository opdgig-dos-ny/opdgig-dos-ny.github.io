"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_ja_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/ja.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/ja.js ***!
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


// Japanese [ja]
var locale = {
  name: 'ja',
  weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
  weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
  weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
  months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
  monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
  ordinal: function ordinal(n) {
    return n + "\u65E5";
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY/MM/DD',
    LL: 'YYYY年M月D日',
    LLL: 'YYYY年M月D日 HH:mm',
    LLLL: 'YYYY年M月D日 dddd HH:mm',
    l: 'YYYY/MM/DD',
    ll: 'YYYY年M月D日',
    lll: 'YYYY年M月D日 HH:mm',
    llll: 'YYYY年M月D日(ddd) HH:mm'
  },
  meridiem: function meridiem(hour) {
    return hour < 12 ? '午前' : '午後';
  },
  relativeTime: {
    future: '%s後',
    past: '%s前',
    s: '数秒',
    m: '1分',
    mm: '%d分',
    h: '1時間',
    hh: '%d時間',
    d: '1日',
    dd: '%d日',
    M: '1ヶ月',
    MM: '%dヶ月',
    y: '1年',
    yy: '%d年'
  }
};
_calcite_input_time_picker_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOTc4OThlMGQ3OTAwOTE0NDU3ZDIwM2Q3NDZiOGNlOGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBSzs7QUFFTCxpRUFBZSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvamEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZCBhcyBkYXlqcyB9IGZyb20gJy4vY2FsY2l0ZS1pbnB1dC10aW1lLXBpY2tlci5qcyc7XG5cbi8vIEphcGFuZXNlIFtqYV1cbnZhciBsb2NhbGUgPSB7XG4gIG5hbWU6ICdqYScsXG4gIHdlZWtkYXlzOiAn5pel5puc5pelX+aciOabnOaXpV/ngavmm5zml6Vf5rC05puc5pelX+acqOabnOaXpV/ph5Hmm5zml6Vf5Zyf5puc5pelJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAn5pelX+aciF/ngatf5rC0X+acqF/ph5Ff5ZyfJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ+aXpV/mnIhf54GrX+awtF/mnKhf6YeRX+Wcnycuc3BsaXQoJ18nKSxcbiAgbW9udGhzOiAnMeaciF8y5pyIXzPmnIhfNOaciF815pyIXzbmnIhfN+aciF845pyIXznmnIhfMTDmnIhfMTHmnIhfMTLmnIgnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnMeaciF8y5pyIXzPmnIhfNOaciF815pyIXzbmnIhfN+aciF845pyIXznmnIhfMTDmnIhfMTHmnIhfMTLmnIgnLnNwbGl0KCdfJyksXG4gIG9yZGluYWw6IGZ1bmN0aW9uIG9yZGluYWwobikge1xuICAgIHJldHVybiBuICsgXCJcXHU2NUU1XCI7XG4gIH0sXG4gIGZvcm1hdHM6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ1lZWVkvTU0vREQnLFxuICAgIExMOiAnWVlZWeW5tE3mnIhE5pelJyxcbiAgICBMTEw6ICdZWVlZ5bm0TeaciETml6UgSEg6bW0nLFxuICAgIExMTEw6ICdZWVlZ5bm0TeaciETml6UgZGRkZCBISDptbScsXG4gICAgbDogJ1lZWVkvTU0vREQnLFxuICAgIGxsOiAnWVlZWeW5tE3mnIhE5pelJyxcbiAgICBsbGw6ICdZWVlZ5bm0TeaciETml6UgSEg6bW0nLFxuICAgIGxsbGw6ICdZWVlZ5bm0TeaciETml6UoZGRkKSBISDptbSdcbiAgfSxcbiAgbWVyaWRpZW06IGZ1bmN0aW9uIG1lcmlkaWVtKGhvdXIpIHtcbiAgICByZXR1cm4gaG91ciA8IDEyID8gJ+WNiOWJjScgOiAn5Y2I5b6MJztcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnJXPlvownLFxuICAgIHBhc3Q6ICclc+WJjScsXG4gICAgczogJ+aVsOenkicsXG4gICAgbTogJzHliIYnLFxuICAgIG1tOiAnJWTliIYnLFxuICAgIGg6ICcx5pmC6ZaTJyxcbiAgICBoaDogJyVk5pmC6ZaTJyxcbiAgICBkOiAnMeaXpScsXG4gICAgZGQ6ICclZOaXpScsXG4gICAgTTogJzHjg7bmnIgnLFxuICAgIE1NOiAnJWTjg7bmnIgnLFxuICAgIHk6ICcx5bm0JyxcbiAgICB5eTogJyVk5bm0J1xuICB9XG59O1xuZGF5anMubG9jYWxlKGxvY2FsZSwgbnVsbCwgdHJ1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==