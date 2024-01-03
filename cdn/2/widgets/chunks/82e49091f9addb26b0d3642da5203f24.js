"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_hr_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/hr.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/hr.js ***!
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


// Croatian [hr]
var monthFormat = 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_');
var monthStandalone = 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_');
var MONTHS_IN_FORMAT = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;

var months = function months(dayjsInstance, format) {
  if (MONTHS_IN_FORMAT.test(format)) {
    return monthFormat[dayjsInstance.month()];
  }

  return monthStandalone[dayjsInstance.month()];
};

months.s = monthStandalone;
months.f = monthFormat;
var locale = {
  name: 'hr',
  weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
  weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
  weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
  months: months,
  monthsShort: 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
  weekStart: 1,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd, D. MMMM YYYY H:mm'
  },
  relativeTime: {
    future: 'za %s',
    past: 'prije %s',
    s: 'sekunda',
    m: 'minuta',
    mm: '%d minuta',
    h: 'sat',
    hh: '%d sati',
    d: 'dan',
    dd: '%d dana',
    M: 'mjesec',
    MM: '%d mjeseci',
    y: 'godina',
    yy: '%d godine'
  },
  ordinal: function ordinal(n) {
    return n + ".";
  }
};
_calcite_input_time_picker_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvODJlNDkwOTFmOWFkZGIyNmIwZDM2NDJkYTUyMDNmMjQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUFLOztBQUVMLGlFQUFlLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9oci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBkIGFzIGRheWpzIH0gZnJvbSAnLi9jYWxjaXRlLWlucHV0LXRpbWUtcGlja2VyLmpzJztcblxuLy8gQ3JvYXRpYW4gW2hyXVxudmFyIG1vbnRoRm9ybWF0ID0gJ3NpamXEjW5qYV92ZWxqYcSNZV9vxb51amthX3RyYXZuamFfc3ZpYm5qYV9saXBuamFfc3JwbmphX2tvbG92b3phX3J1am5hX2xpc3RvcGFkYV9zdHVkZW5vZ2FfcHJvc2luY2EnLnNwbGl0KCdfJyk7XG52YXIgbW9udGhTdGFuZGFsb25lID0gJ3NpamXEjWFual92ZWxqYcSNYV9vxb51amFrX3RyYXZhbmpfc3ZpYmFual9saXBhbmpfc3JwYW5qX2tvbG92b3pfcnVqYW5fbGlzdG9wYWRfc3R1ZGVuaV9wcm9zaW5hYycuc3BsaXQoJ18nKTtcbnZhciBNT05USFNfSU5fRk9STUFUID0gL0Rbb0RdPyhcXFtbXltcXF1dKlxcXXxcXHMpK01NTU0/LztcblxudmFyIG1vbnRocyA9IGZ1bmN0aW9uIG1vbnRocyhkYXlqc0luc3RhbmNlLCBmb3JtYXQpIHtcbiAgaWYgKE1PTlRIU19JTl9GT1JNQVQudGVzdChmb3JtYXQpKSB7XG4gICAgcmV0dXJuIG1vbnRoRm9ybWF0W2RheWpzSW5zdGFuY2UubW9udGgoKV07XG4gIH1cblxuICByZXR1cm4gbW9udGhTdGFuZGFsb25lW2RheWpzSW5zdGFuY2UubW9udGgoKV07XG59O1xuXG5tb250aHMucyA9IG1vbnRoU3RhbmRhbG9uZTtcbm1vbnRocy5mID0gbW9udGhGb3JtYXQ7XG52YXIgbG9jYWxlID0ge1xuICBuYW1lOiAnaHInLFxuICB3ZWVrZGF5czogJ25lZGplbGphX3BvbmVkamVsamFrX3V0b3Jha19zcmlqZWRhX8SNZXR2cnRha19wZXRha19zdWJvdGEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICduZWQuX3Bvbi5fdXRvLl9zcmkuX8SNZXQuX3BldC5fc3ViLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICduZV9wb191dF9zcl/EjWVfcGVfc3UnLnNwbGl0KCdfJyksXG4gIG1vbnRoczogbW9udGhzLFxuICBtb250aHNTaG9ydDogJ3Npai5fdmVsai5fb8W+dS5fdHJhLl9zdmkuX2xpcC5fc3JwLl9rb2wuX3J1ai5fbGlzLl9zdHUuX3Byby4nLnNwbGl0KCdfJyksXG4gIHdlZWtTdGFydDogMSxcbiAgZm9ybWF0czoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdELiBNTU1NIFlZWVkgSDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQuIE1NTU0gWVlZWSBIOm1tJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICd6YSAlcycsXG4gICAgcGFzdDogJ3ByaWplICVzJyxcbiAgICBzOiAnc2VrdW5kYScsXG4gICAgbTogJ21pbnV0YScsXG4gICAgbW06ICclZCBtaW51dGEnLFxuICAgIGg6ICdzYXQnLFxuICAgIGhoOiAnJWQgc2F0aScsXG4gICAgZDogJ2RhbicsXG4gICAgZGQ6ICclZCBkYW5hJyxcbiAgICBNOiAnbWplc2VjJyxcbiAgICBNTTogJyVkIG1qZXNlY2knLFxuICAgIHk6ICdnb2RpbmEnLFxuICAgIHl5OiAnJWQgZ29kaW5lJ1xuICB9LFxuICBvcmRpbmFsOiBmdW5jdGlvbiBvcmRpbmFsKG4pIHtcbiAgICByZXR1cm4gbiArIFwiLlwiO1xuICB9XG59O1xuZGF5anMubG9jYWxlKGxvY2FsZSwgbnVsbCwgdHJ1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==