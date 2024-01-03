"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_de_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/de.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/de.js ***!
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


// German [de]
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
  name: 'de',
  weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
  weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
  weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
  months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
  monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.'.split('_'),
  ordinal: function ordinal(n) {
    return n + ".";
  },
  weekStart: 1,
  yearStart: 4,
  formats: {
    LTS: 'HH:mm:ss',
    LT: 'HH:mm',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNGNmMjA1NmVhYjM4M2Y2NmQzNjBkNDgyN2UzYTg5ZjguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUFLOztBQUVMLGlFQUFlLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBkIGFzIGRheWpzIH0gZnJvbSAnLi9jYWxjaXRlLWlucHV0LXRpbWUtcGlja2VyLmpzJztcblxuLy8gR2VybWFuIFtkZV1cbnZhciB0ZXh0cyA9IHtcbiAgczogJ2VpbiBwYWFyIFNla3VuZGVuJyxcbiAgbTogWydlaW5lIE1pbnV0ZScsICdlaW5lciBNaW51dGUnXSxcbiAgbW06ICclZCBNaW51dGVuJyxcbiAgaDogWydlaW5lIFN0dW5kZScsICdlaW5lciBTdHVuZGUnXSxcbiAgaGg6ICclZCBTdHVuZGVuJyxcbiAgZDogWydlaW4gVGFnJywgJ2VpbmVtIFRhZyddLFxuICBkZDogWyclZCBUYWdlJywgJyVkIFRhZ2VuJ10sXG4gIE06IFsnZWluIE1vbmF0JywgJ2VpbmVtIE1vbmF0J10sXG4gIE1NOiBbJyVkIE1vbmF0ZScsICclZCBNb25hdGVuJ10sXG4gIHk6IFsnZWluIEphaHInLCAnZWluZW0gSmFociddLFxuICB5eTogWyclZCBKYWhyZScsICclZCBKYWhyZW4nXVxufTtcblxuZnVuY3Rpb24gcmVsYXRpdmVUaW1lRm9ybWF0dGVyKG51bWJlciwgd2l0aG91dFN1ZmZpeCwga2V5KSB7XG4gIHZhciBsID0gdGV4dHNba2V5XTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShsKSkge1xuICAgIGwgPSBsW3dpdGhvdXRTdWZmaXggPyAwIDogMV07XG4gIH1cblxuICByZXR1cm4gbC5yZXBsYWNlKCclZCcsIG51bWJlcik7XG59XG5cbnZhciBsb2NhbGUgPSB7XG4gIG5hbWU6ICdkZScsXG4gIHdlZWtkYXlzOiAnU29ubnRhZ19Nb250YWdfRGllbnN0YWdfTWl0dHdvY2hfRG9ubmVyc3RhZ19GcmVpdGFnX1NhbXN0YWcnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdTby5fTW8uX0RpLl9NaS5fRG8uX0ZyLl9TYS4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnU29fTW9fRGlfTWlfRG9fRnJfU2EnLnNwbGl0KCdfJyksXG4gIG1vbnRoczogJ0phbnVhcl9GZWJydWFyX03DpHJ6X0FwcmlsX01haV9KdW5pX0p1bGlfQXVndXN0X1NlcHRlbWJlcl9Pa3RvYmVyX05vdmVtYmVyX0RlemVtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ0phbi5fRmViLl9Nw6Ryel9BcHIuX01haV9KdW5pX0p1bGlfQXVnLl9TZXB0Ll9Pa3QuX05vdi5fRGV6Licuc3BsaXQoJ18nKSxcbiAgb3JkaW5hbDogZnVuY3Rpb24gb3JkaW5hbChuKSB7XG4gICAgcmV0dXJuIG4gKyBcIi5cIjtcbiAgfSxcbiAgd2Vla1N0YXJ0OiAxLFxuICB5ZWFyU3RhcnQ6IDQsXG4gIGZvcm1hdHM6IHtcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTFQ6ICdISDptbScsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdELiBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBELiBNTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ2luICVzJyxcbiAgICBwYXN0OiAndm9yICVzJyxcbiAgICBzOiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgbTogcmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIG1tOiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgaDogcmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIGhoOiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgZDogcmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIGRkOiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgTTogcmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIE1NOiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgeTogcmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIHl5OiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXJcbiAgfVxufTtcbmRheWpzLmxvY2FsZShsb2NhbGUsIG51bGwsIHRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=