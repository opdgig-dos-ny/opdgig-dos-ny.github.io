"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_sl_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/sl.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/sl.js ***!
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


// Slovenian [sl]

function dual(n) {
  return n % 100 == 2; // eslint-disable-line
}

function threeFour(n) {
  return n % 100 == 3 || n % 100 == 4; // eslint-disable-line
}
/* eslint-disable */


function translate(number, withoutSuffix, key, isFuture) {
  var result = number + " ";

  switch (key) {
    case 's':
      // a few seconds / in a few seconds / a few seconds ago
      return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';

    case 'm':
      // a minute / in a minute / a minute ago
      return withoutSuffix ? 'ena minuta' : 'eno minuto';

    case 'mm':
      // 9 minutes / in 9 minutes / 9 minutes ago
      if (dual(number)) {
        return result + (withoutSuffix || isFuture ? 'minuti' : 'minutama');
      }

      if (threeFour(number)) {
        return result + (withoutSuffix || isFuture ? 'minute' : 'minutami');
      }

      return result + (withoutSuffix || isFuture ? 'minut' : 'minutami');

    case 'h':
      // an hour / in an hour / an hour ago
      return withoutSuffix ? 'ena ura' : isFuture ? 'eno uro' : 'eno uro';

    case 'hh':
      // 9 hours / in 9 hours / 9 hours ago
      if (dual(number)) {
        return result + (withoutSuffix || isFuture ? 'uri' : 'urama');
      }

      if (threeFour(number)) {
        return result + (withoutSuffix || isFuture ? 'ure' : 'urami');
      }

      return result + (withoutSuffix || isFuture ? 'ur' : 'urami');

    case 'd':
      // a day / in a day / a day ago
      return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';

    case 'dd':
      // 9 days / in 9 days / 9 days ago
      if (dual(number)) {
        return result + (withoutSuffix || isFuture ? 'dneva' : 'dnevoma');
      }

      return result + (withoutSuffix || isFuture ? 'dni' : 'dnevi');

    case 'M':
      // a month / in a month / a month ago
      return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';

    case 'MM':
      // 9 months / in 9 months / 9 months ago
      if (dual(number)) {
        // 2 minutes / in 2 minutes
        return result + (withoutSuffix || isFuture ? 'meseca' : 'mesecema');
      }

      if (threeFour(number)) {
        return result + (withoutSuffix || isFuture ? 'mesece' : 'meseci');
      }

      return result + (withoutSuffix || isFuture ? 'mesecev' : 'meseci');

    case 'y':
      // a year / in a year / a year ago
      return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';

    case 'yy':
      // 9 years / in 9 years / 9 years ago
      if (dual(number)) {
        // 2 minutes / in 2 minutes
        return result + (withoutSuffix || isFuture ? 'leti' : 'letoma');
      }

      if (threeFour(number)) {
        return result + (withoutSuffix || isFuture ? 'leta' : 'leti');
      }

      return result + (withoutSuffix || isFuture ? 'let' : 'leti');
  }
}
/* eslint-enable */


var locale = {
  name: 'sl',
  weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
  months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
  weekStart: 1,
  weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
  monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
  weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
  ordinal: function ordinal(n) {
    return n + ".";
  },
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd, D. MMMM YYYY H:mm',
    l: 'D. M. YYYY'
  },
  relativeTime: {
    future: 'čez %s',
    past: 'pred %s',
    s: translate,
    m: translate,
    mm: translate,
    h: translate,
    hh: translate,
    d: translate,
    dd: translate,
    M: translate,
    MM: translate,
    y: translate,
    yy: translate
  }
};
_calcite_input_time_picker_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYjZjMTEzYTViZWU2MWZjZDJkYWNmMDcwYTgyZmEwMWEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBSzs7QUFFTCxpRUFBZSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvc2wuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZCBhcyBkYXlqcyB9IGZyb20gJy4vY2FsY2l0ZS1pbnB1dC10aW1lLXBpY2tlci5qcyc7XG5cbi8vIFNsb3ZlbmlhbiBbc2xdXG5cbmZ1bmN0aW9uIGR1YWwobikge1xuICByZXR1cm4gbiAlIDEwMCA9PSAyOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG59XG5cbmZ1bmN0aW9uIHRocmVlRm91cihuKSB7XG4gIHJldHVybiBuICUgMTAwID09IDMgfHwgbiAlIDEwMCA9PSA0OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG59XG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW1iZXIsIHdpdGhvdXRTdWZmaXgsIGtleSwgaXNGdXR1cmUpIHtcbiAgdmFyIHJlc3VsdCA9IG51bWJlciArIFwiIFwiO1xuXG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAncyc6XG4gICAgICAvLyBhIGZldyBzZWNvbmRzIC8gaW4gYSBmZXcgc2Vjb25kcyAvIGEgZmV3IHNlY29uZHMgYWdvXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICduZWthaiBzZWt1bmQnIDogJ25la2FqIHNla3VuZGFtaSc7XG5cbiAgICBjYXNlICdtJzpcbiAgICAgIC8vIGEgbWludXRlIC8gaW4gYSBtaW51dGUgLyBhIG1pbnV0ZSBhZ29cbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ2VuYSBtaW51dGEnIDogJ2VubyBtaW51dG8nO1xuXG4gICAgY2FzZSAnbW0nOlxuICAgICAgLy8gOSBtaW51dGVzIC8gaW4gOSBtaW51dGVzIC8gOSBtaW51dGVzIGFnb1xuICAgICAgaWYgKGR1YWwobnVtYmVyKSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWludXRpJyA6ICdtaW51dGFtYScpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhyZWVGb3VyKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ21pbnV0ZScgOiAnbWludXRhbWknKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdCArICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ21pbnV0JyA6ICdtaW51dGFtaScpO1xuXG4gICAgY2FzZSAnaCc6XG4gICAgICAvLyBhbiBob3VyIC8gaW4gYW4gaG91ciAvIGFuIGhvdXIgYWdvXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdlbmEgdXJhJyA6IGlzRnV0dXJlID8gJ2VubyB1cm8nIDogJ2VubyB1cm8nO1xuXG4gICAgY2FzZSAnaGgnOlxuICAgICAgLy8gOSBob3VycyAvIGluIDkgaG91cnMgLyA5IGhvdXJzIGFnb1xuICAgICAgaWYgKGR1YWwobnVtYmVyKSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAndXJpJyA6ICd1cmFtYScpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhyZWVGb3VyKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ3VyZScgOiAndXJhbWknKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdCArICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ3VyJyA6ICd1cmFtaScpO1xuXG4gICAgY2FzZSAnZCc6XG4gICAgICAvLyBhIGRheSAvIGluIGEgZGF5IC8gYSBkYXkgYWdvXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdlbiBkYW4nIDogJ2VuaW0gZG5lbSc7XG5cbiAgICBjYXNlICdkZCc6XG4gICAgICAvLyA5IGRheXMgLyBpbiA5IGRheXMgLyA5IGRheXMgYWdvXG4gICAgICBpZiAoZHVhbChudW1iZXIpKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdkbmV2YScgOiAnZG5ldm9tYScpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0ICsgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnZG5pJyA6ICdkbmV2aScpO1xuXG4gICAgY2FzZSAnTSc6XG4gICAgICAvLyBhIG1vbnRoIC8gaW4gYSBtb250aCAvIGEgbW9udGggYWdvXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdlbiBtZXNlYycgOiAnZW5pbSBtZXNlY2VtJztcblxuICAgIGNhc2UgJ01NJzpcbiAgICAgIC8vIDkgbW9udGhzIC8gaW4gOSBtb250aHMgLyA5IG1vbnRocyBhZ29cbiAgICAgIGlmIChkdWFsKG51bWJlcikpIHtcbiAgICAgICAgLy8gMiBtaW51dGVzIC8gaW4gMiBtaW51dGVzXG4gICAgICAgIHJldHVybiByZXN1bHQgKyAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtZXNlY2EnIDogJ21lc2VjZW1hJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aHJlZUZvdXIobnVtYmVyKSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWVzZWNlJyA6ICdtZXNlY2knKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdCArICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ21lc2VjZXYnIDogJ21lc2VjaScpO1xuXG4gICAgY2FzZSAneSc6XG4gICAgICAvLyBhIHllYXIgLyBpbiBhIHllYXIgLyBhIHllYXIgYWdvXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdlbm8gbGV0bycgOiAnZW5pbSBsZXRvbSc7XG5cbiAgICBjYXNlICd5eSc6XG4gICAgICAvLyA5IHllYXJzIC8gaW4gOSB5ZWFycyAvIDkgeWVhcnMgYWdvXG4gICAgICBpZiAoZHVhbChudW1iZXIpKSB7XG4gICAgICAgIC8vIDIgbWludXRlcyAvIGluIDIgbWludXRlc1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbGV0aScgOiAnbGV0b21hJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aHJlZUZvdXIobnVtYmVyKSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbGV0YScgOiAnbGV0aScpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0ICsgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbGV0JyA6ICdsZXRpJyk7XG4gIH1cbn1cbi8qIGVzbGludC1lbmFibGUgKi9cblxuXG52YXIgbG9jYWxlID0ge1xuICBuYW1lOiAnc2wnLFxuICB3ZWVrZGF5czogJ25lZGVsamFfcG9uZWRlbGpla190b3Jla19zcmVkYV/EjWV0cnRla19wZXRla19zb2JvdGEnLnNwbGl0KCdfJyksXG4gIG1vbnRoczogJ2phbnVhcl9mZWJydWFyX21hcmVjX2FwcmlsX21hal9qdW5pal9qdWxpal9hdmd1c3Rfc2VwdGVtYmVyX29rdG9iZXJfbm92ZW1iZXJfZGVjZW1iZXInLnNwbGl0KCdfJyksXG4gIHdlZWtTdGFydDogMSxcbiAgd2Vla2RheXNTaG9ydDogJ25lZC5fcG9uLl90b3IuX3NyZS5fxI1ldC5fcGV0Ll9zb2IuJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ2phbi5fZmViLl9tYXIuX2Fwci5fbWFqLl9qdW4uX2p1bC5fYXZnLl9zZXAuX29rdC5fbm92Ll9kZWMuJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ25lX3BvX3RvX3NyX8SNZV9wZV9zbycuc3BsaXQoJ18nKSxcbiAgb3JkaW5hbDogZnVuY3Rpb24gb3JkaW5hbChuKSB7XG4gICAgcmV0dXJuIG4gKyBcIi5cIjtcbiAgfSxcbiAgZm9ybWF0czoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdELiBNTU1NIFlZWVkgSDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQuIE1NTU0gWVlZWSBIOm1tJyxcbiAgICBsOiAnRC4gTS4gWVlZWSdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnxI1leiAlcycsXG4gICAgcGFzdDogJ3ByZWQgJXMnLFxuICAgIHM6IHRyYW5zbGF0ZSxcbiAgICBtOiB0cmFuc2xhdGUsXG4gICAgbW06IHRyYW5zbGF0ZSxcbiAgICBoOiB0cmFuc2xhdGUsXG4gICAgaGg6IHRyYW5zbGF0ZSxcbiAgICBkOiB0cmFuc2xhdGUsXG4gICAgZGQ6IHRyYW5zbGF0ZSxcbiAgICBNOiB0cmFuc2xhdGUsXG4gICAgTU06IHRyYW5zbGF0ZSxcbiAgICB5OiB0cmFuc2xhdGUsXG4gICAgeXk6IHRyYW5zbGF0ZVxuICB9XG59O1xuZGF5anMubG9jYWxlKGxvY2FsZSwgbnVsbCwgdHJ1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==