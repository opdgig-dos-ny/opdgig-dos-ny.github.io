"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_de-at_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/de-at.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/de-at.js ***!
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


// German (Austria) [de-at]
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
  name: 'de-at',
  weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
  weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
  weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
  months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
  monthsShort: 'Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
  ordinal: function ordinal(n) {
    return n + ".";
  },
  weekStart: 1,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMDcxOGM4YjA2MDlmNDkzODY1YmI0OTJhY2U1OWRjMTYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBSzs7QUFFTCxpRUFBZSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvZGUtYXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZCBhcyBkYXlqcyB9IGZyb20gJy4vY2FsY2l0ZS1pbnB1dC10aW1lLXBpY2tlci5qcyc7XG5cbi8vIEdlcm1hbiAoQXVzdHJpYSkgW2RlLWF0XVxudmFyIHRleHRzID0ge1xuICBzOiAnZWluIHBhYXIgU2VrdW5kZW4nLFxuICBtOiBbJ2VpbmUgTWludXRlJywgJ2VpbmVyIE1pbnV0ZSddLFxuICBtbTogJyVkIE1pbnV0ZW4nLFxuICBoOiBbJ2VpbmUgU3R1bmRlJywgJ2VpbmVyIFN0dW5kZSddLFxuICBoaDogJyVkIFN0dW5kZW4nLFxuICBkOiBbJ2VpbiBUYWcnLCAnZWluZW0gVGFnJ10sXG4gIGRkOiBbJyVkIFRhZ2UnLCAnJWQgVGFnZW4nXSxcbiAgTTogWydlaW4gTW9uYXQnLCAnZWluZW0gTW9uYXQnXSxcbiAgTU06IFsnJWQgTW9uYXRlJywgJyVkIE1vbmF0ZW4nXSxcbiAgeTogWydlaW4gSmFocicsICdlaW5lbSBKYWhyJ10sXG4gIHl5OiBbJyVkIEphaHJlJywgJyVkIEphaHJlbiddXG59O1xuXG5mdW5jdGlvbiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIobnVtYmVyLCB3aXRob3V0U3VmZml4LCBrZXkpIHtcbiAgdmFyIGwgPSB0ZXh0c1trZXldO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGwpKSB7XG4gICAgbCA9IGxbd2l0aG91dFN1ZmZpeCA/IDAgOiAxXTtcbiAgfVxuXG4gIHJldHVybiBsLnJlcGxhY2UoJyVkJywgbnVtYmVyKTtcbn1cblxudmFyIGxvY2FsZSA9IHtcbiAgbmFtZTogJ2RlLWF0JyxcbiAgd2Vla2RheXM6ICdTb25udGFnX01vbnRhZ19EaWVuc3RhZ19NaXR0d29jaF9Eb25uZXJzdGFnX0ZyZWl0YWdfU2Ftc3RhZycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ1NvLl9Nby5fRGkuX01pLl9Eby5fRnIuX1NhLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdTb19Nb19EaV9NaV9Eb19Gcl9TYScuc3BsaXQoJ18nKSxcbiAgbW9udGhzOiAnSsOkbm5lcl9GZWJydWFyX03DpHJ6X0FwcmlsX01haV9KdW5pX0p1bGlfQXVndXN0X1NlcHRlbWJlcl9Pa3RvYmVyX05vdmVtYmVyX0RlemVtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ0rDpG4uX0ZlYi5fTcOkcnpfQXByLl9NYWlfSnVuaV9KdWxpX0F1Zy5fU2VwLl9Pa3QuX05vdi5fRGV6Licuc3BsaXQoJ18nKSxcbiAgb3JkaW5hbDogZnVuY3Rpb24gb3JkaW5hbChuKSB7XG4gICAgcmV0dXJuIG4gKyBcIi5cIjtcbiAgfSxcbiAgd2Vla1N0YXJ0OiAxLFxuICBmb3JtYXRzOiB7XG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIExUOiAnSEg6bW0nLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QuIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRC4gTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRC4gTU1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdpbiAlcycsXG4gICAgcGFzdDogJ3ZvciAlcycsXG4gICAgczogcmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIG06IHJlbGF0aXZlVGltZUZvcm1hdHRlcixcbiAgICBtbTogcmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIGg6IHJlbGF0aXZlVGltZUZvcm1hdHRlcixcbiAgICBoaDogcmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIGQ6IHJlbGF0aXZlVGltZUZvcm1hdHRlcixcbiAgICBkZDogcmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIE06IHJlbGF0aXZlVGltZUZvcm1hdHRlcixcbiAgICBNTTogcmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIHk6IHJlbGF0aXZlVGltZUZvcm1hdHRlcixcbiAgICB5eTogcmVsYXRpdmVUaW1lRm9ybWF0dGVyXG4gIH1cbn07XG5kYXlqcy5sb2NhbGUobG9jYWxlLCBudWxsLCB0cnVlKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9jYWxlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9