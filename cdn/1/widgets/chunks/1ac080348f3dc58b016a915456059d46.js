"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_de-ch_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/de-ch.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/de-ch.js ***!
  \************************************************************************/
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


// German (Switzerland) [de-ch]
var texts = {
  s: 'ein paar Sekunden',
  m: ['eine Minute', 'einer Minute'],
  mm: '%d Minuten',
  h: ['eine Stunde', 'einer Stunde'],
  hh: '%d Stunden',
  d: ['ein Tag', 'einem Tag'],
  dd: ['%d Tage', '%d Tagen'],
  M: ['ein Monat', 'einem Monat'],
  MM: ['%d Monate', '%d Monaten'],
  y: ['ein Jahr', 'einem Jahr'],
  yy: ['%d Jahre', '%d Jahren']
};

function relativeTimeFormatter(number, withoutSuffix, key) {
  var l = texts[key];

  if (Array.isArray(l)) {
    l = l[withoutSuffix ? 0 : 1];
  }

  return l.replace('%d', number);
}

var locale = {
  name: 'de-ch',
  weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
  weekdaysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
  weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
  months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
  monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
  ordinal: function ordinal(n) {
    return n + ".";
  },
  weekStart: 1,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY HH:mm',
    LLLL: 'dddd, D. MMMM YYYY HH:mm'
  },
  relativeTime: {
    future: 'in %s',
    past: 'vor %s',
    s: relativeTimeFormatter,
    m: relativeTimeFormatter,
    mm: relativeTimeFormatter,
    h: relativeTimeFormatter,
    hh: relativeTimeFormatter,
    d: relativeTimeFormatter,
    dd: relativeTimeFormatter,
    M: relativeTimeFormatter,
    MM: relativeTimeFormatter,
    y: relativeTimeFormatter,
    yy: relativeTimeFormatter
  }
};
_calcite_input_time_picker_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMWFjMDgwMzQ4ZjNkYzU4YjAxNmE5MTU0NTYwNTlkNDYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBSzs7QUFFTCxpRUFBZSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvZGUtY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZCBhcyBkYXlqcyB9IGZyb20gJy4vY2FsY2l0ZS1pbnB1dC10aW1lLXBpY2tlci5qcyc7XG5cbi8vIEdlcm1hbiAoU3dpdHplcmxhbmQpIFtkZS1jaF1cbnZhciB0ZXh0cyA9IHtcbiAgczogJ2VpbiBwYWFyIFNla3VuZGVuJyxcbiAgbTogWydlaW5lIE1pbnV0ZScsICdlaW5lciBNaW51dGUnXSxcbiAgbW06ICclZCBNaW51dGVuJyxcbiAgaDogWydlaW5lIFN0dW5kZScsICdlaW5lciBTdHVuZGUnXSxcbiAgaGg6ICclZCBTdHVuZGVuJyxcbiAgZDogWydlaW4gVGFnJywgJ2VpbmVtIFRhZyddLFxuICBkZDogWyclZCBUYWdlJywgJyVkIFRhZ2VuJ10sXG4gIE06IFsnZWluIE1vbmF0JywgJ2VpbmVtIE1vbmF0J10sXG4gIE1NOiBbJyVkIE1vbmF0ZScsICclZCBNb25hdGVuJ10sXG4gIHk6IFsnZWluIEphaHInLCAnZWluZW0gSmFociddLFxuICB5eTogWyclZCBKYWhyZScsICclZCBKYWhyZW4nXVxufTtcblxuZnVuY3Rpb24gcmVsYXRpdmVUaW1lRm9ybWF0dGVyKG51bWJlciwgd2l0aG91dFN1ZmZpeCwga2V5KSB7XG4gIHZhciBsID0gdGV4dHNba2V5XTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShsKSkge1xuICAgIGwgPSBsW3dpdGhvdXRTdWZmaXggPyAwIDogMV07XG4gIH1cblxuICByZXR1cm4gbC5yZXBsYWNlKCclZCcsIG51bWJlcik7XG59XG5cbnZhciBsb2NhbGUgPSB7XG4gIG5hbWU6ICdkZS1jaCcsXG4gIHdlZWtkYXlzOiAnU29ubnRhZ19Nb250YWdfRGllbnN0YWdfTWl0dHdvY2hfRG9ubmVyc3RhZ19GcmVpdGFnX1NhbXN0YWcnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdTb19Nb19EaV9NaV9Eb19Gcl9TYScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdTb19Nb19EaV9NaV9Eb19Gcl9TYScuc3BsaXQoJ18nKSxcbiAgbW9udGhzOiAnSmFudWFyX0ZlYnJ1YXJfTcOkcnpfQXByaWxfTWFpX0p1bmlfSnVsaV9BdWd1c3RfU2VwdGVtYmVyX09rdG9iZXJfTm92ZW1iZXJfRGV6ZW1iZXInLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnSmFuLl9GZWIuX03DpHJ6X0Fwci5fTWFpX0p1bmlfSnVsaV9BdWcuX1NlcC5fT2t0Ll9Ob3YuX0Rlei4nLnNwbGl0KCdfJyksXG4gIG9yZGluYWw6IGZ1bmN0aW9uIG9yZGluYWwobikge1xuICAgIHJldHVybiBuICsgXCIuXCI7XG4gIH0sXG4gIHdlZWtTdGFydDogMSxcbiAgZm9ybWF0czoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdELiBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QuIE1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQuIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnaW4gJXMnLFxuICAgIHBhc3Q6ICd2b3IgJXMnLFxuICAgIHM6IHJlbGF0aXZlVGltZUZvcm1hdHRlcixcbiAgICBtOiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgbW06IHJlbGF0aXZlVGltZUZvcm1hdHRlcixcbiAgICBoOiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgaGg6IHJlbGF0aXZlVGltZUZvcm1hdHRlcixcbiAgICBkOiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgZGQ6IHJlbGF0aXZlVGltZUZvcm1hdHRlcixcbiAgICBNOiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgTU06IHJlbGF0aXZlVGltZUZvcm1hdHRlcixcbiAgICB5OiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgeXk6IHJlbGF0aXZlVGltZUZvcm1hdHRlclxuICB9XG59O1xuZGF5anMubG9jYWxlKGxvY2FsZSwgbnVsbCwgdHJ1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==