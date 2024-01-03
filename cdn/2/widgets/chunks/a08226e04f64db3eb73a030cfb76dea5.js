"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_sr_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/sr.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/sr.js ***!
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


// Serbian [sr]
var translator = {
  words: {
    m: ['jedan minut', 'jednog minuta'],
    mm: ['%d minut', '%d minuta', '%d minuta'],
    h: ['jedan sat', 'jednog sata'],
    hh: ['%d sat', '%d sata', '%d sati'],
    d: ['jedan dan', 'jednog dana'],
    dd: ['%d dan', '%d dana', '%d dana'],
    M: ['jedan mesec', 'jednog meseca'],
    MM: ['%d mesec', '%d meseca', '%d meseci'],
    y: ['jednu godinu', 'jedne godine'],
    yy: ['%d godinu', '%d godine', '%d godina']
  },
  correctGrammarCase: function correctGrammarCase(number, wordKey) {
    if (number % 10 >= 1 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
      return number % 10 === 1 ? wordKey[0] : wordKey[1];
    }

    return wordKey[2];
  },
  relativeTimeFormatter: function relativeTimeFormatter(number, withoutSuffix, key, isFuture) {
    var wordKey = translator.words[key];

    if (key.length === 1) {
      // Nominativ
      if (key === 'y' && withoutSuffix) return 'jedna godina';
      return isFuture || withoutSuffix ? wordKey[0] : wordKey[1];
    }

    var word = translator.correctGrammarCase(number, wordKey); // Nominativ

    if (key === 'yy' && withoutSuffix && word === '%d godinu') return number + " godina";
    return word.replace('%d', number);
  }
};
var locale = {
  name: 'sr',
  weekdays: 'Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota'.split('_'),
  weekdaysShort: 'Ned._Pon._Uto._Sre._Čet._Pet._Sub.'.split('_'),
  weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
  months: 'Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar'.split('_'),
  monthsShort: 'Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.'.split('_'),
  weekStart: 1,
  relativeTime: {
    future: 'za %s',
    past: 'pre %s',
    s: 'nekoliko sekundi',
    m: translator.relativeTimeFormatter,
    mm: translator.relativeTimeFormatter,
    h: translator.relativeTimeFormatter,
    hh: translator.relativeTimeFormatter,
    d: translator.relativeTimeFormatter,
    dd: translator.relativeTimeFormatter,
    M: translator.relativeTimeFormatter,
    MM: translator.relativeTimeFormatter,
    y: translator.relativeTimeFormatter,
    yy: translator.relativeTimeFormatter
  },
  ordinal: function ordinal(n) {
    return n + ".";
  },
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'D. M. YYYY.',
    LL: 'D. MMMM YYYY.',
    LLL: 'D. MMMM YYYY. H:mm',
    LLLL: 'dddd, D. MMMM YYYY. H:mm'
  }
};
_calcite_input_time_picker_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYTA4MjI2ZTA0ZjY0ZGIzZWI3M2EwMzBjZmI3NmRlYTUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQStEOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQUs7O0FBRUwsaUVBQWUsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3NyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGQgYXMgZGF5anMgfSBmcm9tICcuL2NhbGNpdGUtaW5wdXQtdGltZS1waWNrZXIuanMnO1xuXG4vLyBTZXJiaWFuIFtzcl1cbnZhciB0cmFuc2xhdG9yID0ge1xuICB3b3Jkczoge1xuICAgIG06IFsnamVkYW4gbWludXQnLCAnamVkbm9nIG1pbnV0YSddLFxuICAgIG1tOiBbJyVkIG1pbnV0JywgJyVkIG1pbnV0YScsICclZCBtaW51dGEnXSxcbiAgICBoOiBbJ2plZGFuIHNhdCcsICdqZWRub2cgc2F0YSddLFxuICAgIGhoOiBbJyVkIHNhdCcsICclZCBzYXRhJywgJyVkIHNhdGknXSxcbiAgICBkOiBbJ2plZGFuIGRhbicsICdqZWRub2cgZGFuYSddLFxuICAgIGRkOiBbJyVkIGRhbicsICclZCBkYW5hJywgJyVkIGRhbmEnXSxcbiAgICBNOiBbJ2plZGFuIG1lc2VjJywgJ2plZG5vZyBtZXNlY2EnXSxcbiAgICBNTTogWyclZCBtZXNlYycsICclZCBtZXNlY2EnLCAnJWQgbWVzZWNpJ10sXG4gICAgeTogWydqZWRudSBnb2RpbnUnLCAnamVkbmUgZ29kaW5lJ10sXG4gICAgeXk6IFsnJWQgZ29kaW51JywgJyVkIGdvZGluZScsICclZCBnb2RpbmEnXVxuICB9LFxuICBjb3JyZWN0R3JhbW1hckNhc2U6IGZ1bmN0aW9uIGNvcnJlY3RHcmFtbWFyQ2FzZShudW1iZXIsIHdvcmRLZXkpIHtcbiAgICBpZiAobnVtYmVyICUgMTAgPj0gMSAmJiBudW1iZXIgJSAxMCA8PSA0ICYmIChudW1iZXIgJSAxMDAgPCAxMCB8fCBudW1iZXIgJSAxMDAgPj0gMjApKSB7XG4gICAgICByZXR1cm4gbnVtYmVyICUgMTAgPT09IDEgPyB3b3JkS2V5WzBdIDogd29yZEtleVsxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gd29yZEtleVsyXTtcbiAgfSxcbiAgcmVsYXRpdmVUaW1lRm9ybWF0dGVyOiBmdW5jdGlvbiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIobnVtYmVyLCB3aXRob3V0U3VmZml4LCBrZXksIGlzRnV0dXJlKSB7XG4gICAgdmFyIHdvcmRLZXkgPSB0cmFuc2xhdG9yLndvcmRzW2tleV07XG5cbiAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gTm9taW5hdGl2XG4gICAgICBpZiAoa2V5ID09PSAneScgJiYgd2l0aG91dFN1ZmZpeCkgcmV0dXJuICdqZWRuYSBnb2RpbmEnO1xuICAgICAgcmV0dXJuIGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyB3b3JkS2V5WzBdIDogd29yZEtleVsxXTtcbiAgICB9XG5cbiAgICB2YXIgd29yZCA9IHRyYW5zbGF0b3IuY29ycmVjdEdyYW1tYXJDYXNlKG51bWJlciwgd29yZEtleSk7IC8vIE5vbWluYXRpdlxuXG4gICAgaWYgKGtleSA9PT0gJ3l5JyAmJiB3aXRob3V0U3VmZml4ICYmIHdvcmQgPT09ICclZCBnb2RpbnUnKSByZXR1cm4gbnVtYmVyICsgXCIgZ29kaW5hXCI7XG4gICAgcmV0dXJuIHdvcmQucmVwbGFjZSgnJWQnLCBudW1iZXIpO1xuICB9XG59O1xudmFyIGxvY2FsZSA9IHtcbiAgbmFtZTogJ3NyJyxcbiAgd2Vla2RheXM6ICdOZWRlbGphX1BvbmVkZWxqYWtfVXRvcmFrX1NyZWRhX8SMZXR2cnRha19QZXRha19TdWJvdGEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdOZWQuX1Bvbi5fVXRvLl9TcmUuX8SMZXQuX1BldC5fU3ViLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICduZV9wb191dF9zcl/EjWVfcGVfc3UnLnNwbGl0KCdfJyksXG4gIG1vbnRoczogJ0phbnVhcl9GZWJydWFyX01hcnRfQXByaWxfTWFqX0p1bl9KdWxfQXZndXN0X1NlcHRlbWJhcl9Pa3RvYmFyX05vdmVtYmFyX0RlY2VtYmFyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ0phbi5fRmViLl9NYXIuX0Fwci5fTWFqX0p1bl9KdWxfQXZnLl9TZXAuX09rdC5fTm92Ll9EZWMuJy5zcGxpdCgnXycpLFxuICB3ZWVrU3RhcnQ6IDEsXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ3phICVzJyxcbiAgICBwYXN0OiAncHJlICVzJyxcbiAgICBzOiAnbmVrb2xpa28gc2VrdW5kaScsXG4gICAgbTogdHJhbnNsYXRvci5yZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgbW06IHRyYW5zbGF0b3IucmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIGg6IHRyYW5zbGF0b3IucmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIGhoOiB0cmFuc2xhdG9yLnJlbGF0aXZlVGltZUZvcm1hdHRlcixcbiAgICBkOiB0cmFuc2xhdG9yLnJlbGF0aXZlVGltZUZvcm1hdHRlcixcbiAgICBkZDogdHJhbnNsYXRvci5yZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgTTogdHJhbnNsYXRvci5yZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgTU06IHRyYW5zbGF0b3IucmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIHk6IHRyYW5zbGF0b3IucmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIHl5OiB0cmFuc2xhdG9yLnJlbGF0aXZlVGltZUZvcm1hdHRlclxuICB9LFxuICBvcmRpbmFsOiBmdW5jdGlvbiBvcmRpbmFsKG4pIHtcbiAgICByZXR1cm4gbiArIFwiLlwiO1xuICB9LFxuICBmb3JtYXRzOiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnRC4gTS4gWVlZWS4nLFxuICAgIExMOiAnRC4gTU1NTSBZWVlZLicsXG4gICAgTExMOiAnRC4gTU1NTSBZWVlZLiBIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRC4gTU1NTSBZWVlZLiBIOm1tJ1xuICB9XG59O1xuZGF5anMubG9jYWxlKGxvY2FsZSwgbnVsbCwgdHJ1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==