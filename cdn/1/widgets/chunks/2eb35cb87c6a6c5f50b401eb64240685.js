"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_pl_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/pl.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/pl.js ***!
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


// Polish [pl]

function plural(n) {
  return n % 10 < 5 && n % 10 > 1 && ~~(n / 10) % 10 !== 1; // eslint-disable-line
}
/* eslint-disable */


function translate(number, withoutSuffix, key) {
  var result = number + " ";

  switch (key) {
    case 'm':
      return withoutSuffix ? 'minuta' : 'minutę';

    case 'mm':
      return result + (plural(number) ? 'minuty' : 'minut');

    case 'h':
      return withoutSuffix ? 'godzina' : 'godzinę';

    case 'hh':
      return result + (plural(number) ? 'godziny' : 'godzin');

    case 'MM':
      return result + (plural(number) ? 'miesiące' : 'miesięcy');

    case 'yy':
      return result + (plural(number) ? 'lata' : 'lat');
  }
}
/* eslint-enable */


var monthFormat = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
var monthStandalone = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_');
var MONTHS_IN_FORMAT = /D MMMM/;

var months = function months(dayjsInstance, format) {
  if (MONTHS_IN_FORMAT.test(format)) {
    return monthFormat[dayjsInstance.month()];
  }

  return monthStandalone[dayjsInstance.month()];
};

months.s = monthStandalone;
months.f = monthFormat;
var locale = {
  name: 'pl',
  weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
  weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
  weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
  months: months,
  monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
  ordinal: function ordinal(n) {
    return n + ".";
  },
  weekStart: 1,
  yearStart: 4,
  relativeTime: {
    future: 'za %s',
    past: '%s temu',
    s: 'kilka sekund',
    m: translate,
    mm: translate,
    h: translate,
    hh: translate,
    d: '1 dzień',
    dd: '%d dni',
    M: 'miesiąc',
    MM: translate,
    y: 'rok',
    yy: translate
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  }
};
_calcite_input_time_picker_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMmViMzVjYjg3YzZhNmM1ZjUwYjQwMWViNjQyNDA2ODUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDs7QUFFQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQUs7O0FBRUwsaUVBQWUsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3BsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGQgYXMgZGF5anMgfSBmcm9tICcuL2NhbGNpdGUtaW5wdXQtdGltZS1waWNrZXIuanMnO1xuXG4vLyBQb2xpc2ggW3BsXVxuXG5mdW5jdGlvbiBwbHVyYWwobikge1xuICByZXR1cm4gbiAlIDEwIDwgNSAmJiBuICUgMTAgPiAxICYmIH5+KG4gLyAxMCkgJSAxMCAhPT0gMTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufVxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuXG5mdW5jdGlvbiB0cmFuc2xhdGUobnVtYmVyLCB3aXRob3V0U3VmZml4LCBrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IG51bWJlciArIFwiIFwiO1xuXG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdtaW51dGEnIDogJ21pbnV0xJknO1xuXG4gICAgY2FzZSAnbW0nOlxuICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtYmVyKSA/ICdtaW51dHknIDogJ21pbnV0Jyk7XG5cbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ2dvZHppbmEnIDogJ2dvZHppbsSZJztcblxuICAgIGNhc2UgJ2hoJzpcbiAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bWJlcikgPyAnZ29kemlueScgOiAnZ29kemluJyk7XG5cbiAgICBjYXNlICdNTSc6XG4gICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW1iZXIpID8gJ21pZXNpxIVjZScgOiAnbWllc2nEmWN5Jyk7XG5cbiAgICBjYXNlICd5eSc6XG4gICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW1iZXIpID8gJ2xhdGEnIDogJ2xhdCcpO1xuICB9XG59XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cblxudmFyIG1vbnRoRm9ybWF0ID0gJ3N0eWN6bmlhX2x1dGVnb19tYXJjYV9rd2lldG5pYV9tYWphX2N6ZXJ3Y2FfbGlwY2Ffc2llcnBuaWFfd3J6ZcWbbmlhX3Bhxbpkemllcm5pa2FfbGlzdG9wYWRhX2dydWRuaWEnLnNwbGl0KCdfJyk7XG52YXIgbW9udGhTdGFuZGFsb25lID0gJ3N0eWN6ZcWEX2x1dHlfbWFyemVjX2t3aWVjaWXFhF9tYWpfY3plcndpZWNfbGlwaWVjX3NpZXJwaWXFhF93cnplc2llxYRfcGHFumR6aWVybmlrX2xpc3RvcGFkX2dydWR6aWXFhCcuc3BsaXQoJ18nKTtcbnZhciBNT05USFNfSU5fRk9STUFUID0gL0QgTU1NTS87XG5cbnZhciBtb250aHMgPSBmdW5jdGlvbiBtb250aHMoZGF5anNJbnN0YW5jZSwgZm9ybWF0KSB7XG4gIGlmIChNT05USFNfSU5fRk9STUFULnRlc3QoZm9ybWF0KSkge1xuICAgIHJldHVybiBtb250aEZvcm1hdFtkYXlqc0luc3RhbmNlLm1vbnRoKCldO1xuICB9XG5cbiAgcmV0dXJuIG1vbnRoU3RhbmRhbG9uZVtkYXlqc0luc3RhbmNlLm1vbnRoKCldO1xufTtcblxubW9udGhzLnMgPSBtb250aFN0YW5kYWxvbmU7XG5tb250aHMuZiA9IG1vbnRoRm9ybWF0O1xudmFyIGxvY2FsZSA9IHtcbiAgbmFtZTogJ3BsJyxcbiAgd2Vla2RheXM6ICduaWVkemllbGFfcG9uaWVkemlhxYJla193dG9yZWtfxZtyb2RhX2N6d2FydGVrX3BpxIV0ZWtfc29ib3RhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnbmR6X3Bvbl93dF/Fm3JfY3p3X3B0X3NvYicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdOZF9Qbl9XdF/FmnJfQ3pfUHRfU28nLnNwbGl0KCdfJyksXG4gIG1vbnRoczogbW9udGhzLFxuICBtb250aHNTaG9ydDogJ3N0eV9sdXRfbWFyX2t3aV9tYWpfY3plX2xpcF9zaWVfd3J6X3BhxbpfbGlzX2dydScuc3BsaXQoJ18nKSxcbiAgb3JkaW5hbDogZnVuY3Rpb24gb3JkaW5hbChuKSB7XG4gICAgcmV0dXJuIG4gKyBcIi5cIjtcbiAgfSxcbiAgd2Vla1N0YXJ0OiAxLFxuICB5ZWFyU3RhcnQ6IDQsXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ3phICVzJyxcbiAgICBwYXN0OiAnJXMgdGVtdScsXG4gICAgczogJ2tpbGthIHNla3VuZCcsXG4gICAgbTogdHJhbnNsYXRlLFxuICAgIG1tOiB0cmFuc2xhdGUsXG4gICAgaDogdHJhbnNsYXRlLFxuICAgIGhoOiB0cmFuc2xhdGUsXG4gICAgZDogJzEgZHppZcWEJyxcbiAgICBkZDogJyVkIGRuaScsXG4gICAgTTogJ21pZXNpxIVjJyxcbiAgICBNTTogdHJhbnNsYXRlLFxuICAgIHk6ICdyb2snLFxuICAgIHl5OiB0cmFuc2xhdGVcbiAgfSxcbiAgZm9ybWF0czoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSBISDptbSdcbiAgfVxufTtcbmRheWpzLmxvY2FsZShsb2NhbGUsIG51bGwsIHRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=