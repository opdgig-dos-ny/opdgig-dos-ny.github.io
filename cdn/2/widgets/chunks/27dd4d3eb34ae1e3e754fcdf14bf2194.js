"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_cs_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/cs.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/cs.js ***!
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


// Czech [cs]

function plural(n) {
  return n > 1 && n < 5 && ~~(n / 10) !== 1; // eslint-disable-line
}
/* eslint-disable */


function translate(number, withoutSuffix, key, isFuture) {
  var result = number + " ";

  switch (key) {
    case 's':
      // a few seconds / in a few seconds / a few seconds ago
      return withoutSuffix || isFuture ? 'pár sekund' : 'pár sekundami';

    case 'm':
      // a minute / in a minute / a minute ago
      return withoutSuffix ? 'minuta' : isFuture ? 'minutu' : 'minutou';

    case 'mm':
      // 9 minutes / in 9 minutes / 9 minutes ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'minuty' : 'minut');
      }

      return result + "minutami";

    case 'h':
      // an hour / in an hour / an hour ago
      return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';

    case 'hh':
      // 9 hours / in 9 hours / 9 hours ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'hodiny' : 'hodin');
      }

      return result + "hodinami";

    case 'd':
      // a day / in a day / a day ago
      return withoutSuffix || isFuture ? 'den' : 'dnem';

    case 'dd':
      // 9 days / in 9 days / 9 days ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'dny' : 'dní');
      }

      return result + "dny";

    case 'M':
      // a month / in a month / a month ago
      return withoutSuffix || isFuture ? 'měsíc' : 'měsícem';

    case 'MM':
      // 9 months / in 9 months / 9 months ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'měsíce' : 'měsíců');
      }

      return result + "m\u011Bs\xEDci";

    case 'y':
      // a year / in a year / a year ago
      return withoutSuffix || isFuture ? 'rok' : 'rokem';

    case 'yy':
      // 9 years / in 9 years / 9 years ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'roky' : 'let');
      }

      return result + "lety";
  }
}
/* eslint-enable */


var locale = {
  name: 'cs',
  weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
  weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
  weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
  months: 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
  monthsShort: 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_'),
  weekStart: 1,
  yearStart: 4,
  ordinal: function ordinal(n) {
    return n + ".";
  },
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd D. MMMM YYYY H:mm',
    l: 'D. M. YYYY'
  },
  relativeTime: {
    future: 'za %s',
    past: 'před %s',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMjdkZDRkM2ViMzRhZTFlM2U3NTRmY2RmMTRiZjIxOTQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDs7QUFFQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBSzs7QUFFTCxpRUFBZSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZCBhcyBkYXlqcyB9IGZyb20gJy4vY2FsY2l0ZS1pbnB1dC10aW1lLXBpY2tlci5qcyc7XG5cbi8vIEN6ZWNoIFtjc11cblxuZnVuY3Rpb24gcGx1cmFsKG4pIHtcbiAgcmV0dXJuIG4gPiAxICYmIG4gPCA1ICYmIH5+KG4gLyAxMCkgIT09IDE7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbn1cbi8qIGVzbGludC1kaXNhYmxlICovXG5cblxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bWJlciwgd2l0aG91dFN1ZmZpeCwga2V5LCBpc0Z1dHVyZSkge1xuICB2YXIgcmVzdWx0ID0gbnVtYmVyICsgXCIgXCI7XG5cbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdzJzpcbiAgICAgIC8vIGEgZmV3IHNlY29uZHMgLyBpbiBhIGZldyBzZWNvbmRzIC8gYSBmZXcgc2Vjb25kcyBhZ29cbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ3DDoXIgc2VrdW5kJyA6ICdww6FyIHNla3VuZGFtaSc7XG5cbiAgICBjYXNlICdtJzpcbiAgICAgIC8vIGEgbWludXRlIC8gaW4gYSBtaW51dGUgLyBhIG1pbnV0ZSBhZ29cbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ21pbnV0YScgOiBpc0Z1dHVyZSA/ICdtaW51dHUnIDogJ21pbnV0b3UnO1xuXG4gICAgY2FzZSAnbW0nOlxuICAgICAgLy8gOSBtaW51dGVzIC8gaW4gOSBtaW51dGVzIC8gOSBtaW51dGVzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtYmVyKSA/ICdtaW51dHknIDogJ21pbnV0Jyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQgKyBcIm1pbnV0YW1pXCI7XG5cbiAgICBjYXNlICdoJzpcbiAgICAgIC8vIGFuIGhvdXIgLyBpbiBhbiBob3VyIC8gYW4gaG91ciBhZ29cbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ2hvZGluYScgOiBpc0Z1dHVyZSA/ICdob2RpbnUnIDogJ2hvZGlub3UnO1xuXG4gICAgY2FzZSAnaGgnOlxuICAgICAgLy8gOSBob3VycyAvIGluIDkgaG91cnMgLyA5IGhvdXJzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtYmVyKSA/ICdob2RpbnknIDogJ2hvZGluJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQgKyBcImhvZGluYW1pXCI7XG5cbiAgICBjYXNlICdkJzpcbiAgICAgIC8vIGEgZGF5IC8gaW4gYSBkYXkgLyBhIGRheSBhZ29cbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2RlbicgOiAnZG5lbSc7XG5cbiAgICBjYXNlICdkZCc6XG4gICAgICAvLyA5IGRheXMgLyBpbiA5IGRheXMgLyA5IGRheXMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW1iZXIpID8gJ2RueScgOiAnZG7DrScpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0ICsgXCJkbnlcIjtcblxuICAgIGNhc2UgJ00nOlxuICAgICAgLy8gYSBtb250aCAvIGluIGEgbW9udGggLyBhIG1vbnRoIGFnb1xuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbcSbc8OtYycgOiAnbcSbc8OtY2VtJztcblxuICAgIGNhc2UgJ01NJzpcbiAgICAgIC8vIDkgbW9udGhzIC8gaW4gOSBtb250aHMgLyA5IG1vbnRocyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bWJlcikgPyAnbcSbc8OtY2UnIDogJ23Em3PDrWPFrycpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0ICsgXCJtXFx1MDExQnNcXHhFRGNpXCI7XG5cbiAgICBjYXNlICd5JzpcbiAgICAgIC8vIGEgeWVhciAvIGluIGEgeWVhciAvIGEgeWVhciBhZ29cbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ3JvaycgOiAncm9rZW0nO1xuXG4gICAgY2FzZSAneXknOlxuICAgICAgLy8gOSB5ZWFycyAvIGluIDkgeWVhcnMgLyA5IHllYXJzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtYmVyKSA/ICdyb2t5JyA6ICdsZXQnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdCArIFwibGV0eVwiO1xuICB9XG59XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cblxudmFyIGxvY2FsZSA9IHtcbiAgbmFtZTogJ2NzJyxcbiAgd2Vla2RheXM6ICduZWTEm2xlX3BvbmTEm2zDrV/DunRlcsO9X3N0xZllZGFfxI10dnJ0ZWtfcMOhdGVrX3NvYm90YScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ25lX3BvX8O6dF9zdF/EjXRfcMOhX3NvJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ25lX3BvX8O6dF9zdF/EjXRfcMOhX3NvJy5zcGxpdCgnXycpLFxuICBtb250aHM6ICdsZWRlbl/Dum5vcl9ixZllemVuX2R1YmVuX2t2xJt0ZW5fxI1lcnZlbl/EjWVydmVuZWNfc3JwZW5fesOhxZnDrV/FmcOtamVuX2xpc3RvcGFkX3Byb3NpbmVjJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ2xlZF/Dum5vX2LFmWVfZHViX2t2xJtfxI12bl/EjXZjX3NycF96w6HFmV/FmcOtal9saXNfcHJvJy5zcGxpdCgnXycpLFxuICB3ZWVrU3RhcnQ6IDEsXG4gIHllYXJTdGFydDogNCxcbiAgb3JkaW5hbDogZnVuY3Rpb24gb3JkaW5hbChuKSB7XG4gICAgcmV0dXJuIG4gKyBcIi5cIjtcbiAgfSxcbiAgZm9ybWF0czoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdELiBNTU1NIFlZWVkgSDptbScsXG4gICAgTExMTDogJ2RkZGQgRC4gTU1NTSBZWVlZIEg6bW0nLFxuICAgIGw6ICdELiBNLiBZWVlZJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICd6YSAlcycsXG4gICAgcGFzdDogJ3DFmWVkICVzJyxcbiAgICBzOiB0cmFuc2xhdGUsXG4gICAgbTogdHJhbnNsYXRlLFxuICAgIG1tOiB0cmFuc2xhdGUsXG4gICAgaDogdHJhbnNsYXRlLFxuICAgIGhoOiB0cmFuc2xhdGUsXG4gICAgZDogdHJhbnNsYXRlLFxuICAgIGRkOiB0cmFuc2xhdGUsXG4gICAgTTogdHJhbnNsYXRlLFxuICAgIE1NOiB0cmFuc2xhdGUsXG4gICAgeTogdHJhbnNsYXRlLFxuICAgIHl5OiB0cmFuc2xhdGVcbiAgfVxufTtcbmRheWpzLmxvY2FsZShsb2NhbGUsIG51bGwsIHRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=