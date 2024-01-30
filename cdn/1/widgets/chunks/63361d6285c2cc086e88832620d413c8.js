"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_ar_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/ar.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/ar.js ***!
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


// Arabic [ar]
var months = 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_');
var symbolMap = {
  1: '١',
  2: '٢',
  3: '٣',
  4: '٤',
  5: '٥',
  6: '٦',
  7: '٧',
  8: '٨',
  9: '٩',
  0: '٠'
};
var numberMap = {
  '١': '1',
  '٢': '2',
  '٣': '3',
  '٤': '4',
  '٥': '5',
  '٦': '6',
  '٧': '7',
  '٨': '8',
  '٩': '9',
  '٠': '0'
};
var locale = {
  name: 'ar',
  weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
  weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
  weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
  months: months,
  monthsShort: months,
  weekStart: 6,
  meridiem: function meridiem(hour) {
    return hour > 12 ? 'م' : 'ص';
  },
  relativeTime: {
    future: 'بعد %s',
    past: 'منذ %s',
    s: 'ثانية واحدة',
    m: 'دقيقة واحدة',
    mm: '%d دقائق',
    h: 'ساعة واحدة',
    hh: '%d ساعات',
    d: 'يوم واحد',
    dd: '%d أيام',
    M: 'شهر واحد',
    MM: '%d أشهر',
    y: 'عام واحد',
    yy: '%d أعوام'
  },
  preparse: function preparse(string) {
    return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
      return numberMap[match];
    }).replace(/،/g, ',');
  },
  postformat: function postformat(string) {
    return string.replace(/\d/g, function (match) {
      return symbolMap[match];
    }).replace(/,/g, '،');
  },
  ordinal: function ordinal(n) {
    return n;
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'D/‏M/‏YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  }
};
_calcite_input_time_picker_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNjMzNjFkNjI4NWMyY2MwODZlODg4MzI2MjBkNDEzYzguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBSzs7QUFFTCxpRUFBZSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZCBhcyBkYXlqcyB9IGZyb20gJy4vY2FsY2l0ZS1pbnB1dC10aW1lLXBpY2tlci5qcyc7XG5cbi8vIEFyYWJpYyBbYXJdXG52YXIgbW9udGhzID0gJ9mK2YbYp9mK2LFf2YHYqNix2KfZitixX9mF2KfYsdizX9ij2KjYsdmK2YRf2YXYp9mK2Yhf2YrZiNmG2YrZiF/ZitmI2YTZitmIX9ij2LrYs9i32LNf2LPYqNiq2YXYqNixX9ij2YPYqtmI2KjYsV/ZhtmI2YHZhdio2LFf2K/Zitiz2YXYqNixJy5zcGxpdCgnXycpO1xudmFyIHN5bWJvbE1hcCA9IHtcbiAgMTogJ9mhJyxcbiAgMjogJ9miJyxcbiAgMzogJ9mjJyxcbiAgNDogJ9mkJyxcbiAgNTogJ9mlJyxcbiAgNjogJ9mmJyxcbiAgNzogJ9mnJyxcbiAgODogJ9moJyxcbiAgOTogJ9mpJyxcbiAgMDogJ9mgJ1xufTtcbnZhciBudW1iZXJNYXAgPSB7XG4gICfZoSc6ICcxJyxcbiAgJ9miJzogJzInLFxuICAn2aMnOiAnMycsXG4gICfZpCc6ICc0JyxcbiAgJ9mlJzogJzUnLFxuICAn2aYnOiAnNicsXG4gICfZpyc6ICc3JyxcbiAgJ9moJzogJzgnLFxuICAn2aknOiAnOScsXG4gICfZoCc6ICcwJ1xufTtcbnZhciBsb2NhbGUgPSB7XG4gIG5hbWU6ICdhcicsXG4gIHdlZWtkYXlzOiAn2KfZhNij2K3Yr1/Yp9mE2KXYq9mG2YrZhl/Yp9mE2KvZhNin2KvYp9ihX9in2YTYo9ix2KjYudin2KFf2KfZhNiu2YXZitizX9in2YTYrNmF2LnYqV/Yp9mE2LPYqNiqJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAn2KPYrdivX9il2KvZhtmK2YZf2KvZhNin2KvYp9ihX9ij2LHYqNi52KfYoV/YrtmF2YrYs1/YrNmF2LnYqV/Ys9io2KonLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAn2K1f2YZf2Ktf2LFf2K5f2Kxf2LMnLnNwbGl0KCdfJyksXG4gIG1vbnRoczogbW9udGhzLFxuICBtb250aHNTaG9ydDogbW9udGhzLFxuICB3ZWVrU3RhcnQ6IDYsXG4gIG1lcmlkaWVtOiBmdW5jdGlvbiBtZXJpZGllbShob3VyKSB7XG4gICAgcmV0dXJuIGhvdXIgPiAxMiA/ICfZhScgOiAn2LUnO1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICfYqNi52K8gJXMnLFxuICAgIHBhc3Q6ICfZhdmG2LAgJXMnLFxuICAgIHM6ICfYq9in2YbZitipINmI2KfYrdiv2KknLFxuICAgIG06ICfYr9mC2YrZgtipINmI2KfYrdiv2KknLFxuICAgIG1tOiAnJWQg2K/Zgtin2KbZgicsXG4gICAgaDogJ9iz2KfYudipINmI2KfYrdiv2KknLFxuICAgIGhoOiAnJWQg2LPYp9i52KfYqicsXG4gICAgZDogJ9mK2YjZhSDZiNin2K3YrycsXG4gICAgZGQ6ICclZCDYo9mK2KfZhScsXG4gICAgTTogJ9i02YfYsSDZiNin2K3YrycsXG4gICAgTU06ICclZCDYo9i02YfYsScsXG4gICAgeTogJ9i52KfZhSDZiNin2K3YrycsXG4gICAgeXk6ICclZCDYo9i52YjYp9mFJ1xuICB9LFxuICBwcmVwYXJzZTogZnVuY3Rpb24gcHJlcGFyc2Uoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9b2aHZotmj2aTZpdmm2afZqNmp2aBdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIG51bWJlck1hcFttYXRjaF07XG4gICAgfSkucmVwbGFjZSgv2IwvZywgJywnKTtcbiAgfSxcbiAgcG9zdGZvcm1hdDogZnVuY3Rpb24gcG9zdGZvcm1hdChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1xcZC9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiBzeW1ib2xNYXBbbWF0Y2hdO1xuICAgIH0pLnJlcGxhY2UoLywvZywgJ9iMJyk7XG4gIH0sXG4gIG9yZGluYWw6IGZ1bmN0aW9uIG9yZGluYWwobikge1xuICAgIHJldHVybiBuO1xuICB9LFxuICBmb3JtYXRzOiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdEL+KAj00v4oCPWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICB9XG59O1xuZGF5anMubG9jYWxlKGxvY2FsZSwgbnVsbCwgdHJ1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==