"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_ca_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/ca.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/ca.js ***!
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


// Catalan [ca]
var locale = {
  name: 'ca',
  weekdays: 'Diumenge_Dilluns_Dimarts_Dimecres_Dijous_Divendres_Dissabte'.split('_'),
  weekdaysShort: 'Dg._Dl._Dt._Dc._Dj._Dv._Ds.'.split('_'),
  weekdaysMin: 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
  months: 'Gener_Febrer_Març_Abril_Maig_Juny_Juliol_Agost_Setembre_Octubre_Novembre_Desembre'.split('_'),
  monthsShort: 'Gen._Febr._Març_Abr._Maig_Juny_Jul._Ag._Set._Oct._Nov._Des.'.split('_'),
  weekStart: 1,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM [de] YYYY',
    LLL: 'D MMMM [de] YYYY [a les] H:mm',
    LLLL: 'dddd D MMMM [de] YYYY [a les] H:mm',
    ll: 'D MMM YYYY',
    lll: 'D MMM YYYY, H:mm',
    llll: 'ddd D MMM YYYY, H:mm'
  },
  relativeTime: {
    future: 'd\'aquí %s',
    past: 'fa %s',
    s: 'uns segons',
    m: 'un minut',
    mm: '%d minuts',
    h: 'una hora',
    hh: '%d hores',
    d: 'un dia',
    dd: '%d dies',
    M: 'un mes',
    MM: '%d mesos',
    y: 'un any',
    yy: '%d anys'
  },
  ordinal: function ordinal(n) {
    var ord;
    if (n === 1 || n === 3) ord = 'r';else if (n === 2) ord = 'n';else if (n === 4) ord = 't';else ord = 'è';
    return "" + n + ord;
  }
};
_calcite_input_time_picker_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNzMwZWE0ZmFhZWI3ZDQwZTczYTQ1ZTUzMjU3Y2I0YTguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQ0FBc0MsNEJBQTRCLDRCQUE0QjtBQUM5RjtBQUNBO0FBQ0E7QUFDQSw0REFBSzs7QUFFTCxpRUFBZSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2EuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZCBhcyBkYXlqcyB9IGZyb20gJy4vY2FsY2l0ZS1pbnB1dC10aW1lLXBpY2tlci5qcyc7XG5cbi8vIENhdGFsYW4gW2NhXVxudmFyIGxvY2FsZSA9IHtcbiAgbmFtZTogJ2NhJyxcbiAgd2Vla2RheXM6ICdEaXVtZW5nZV9EaWxsdW5zX0RpbWFydHNfRGltZWNyZXNfRGlqb3VzX0RpdmVuZHJlc19EaXNzYWJ0ZScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ0RnLl9EbC5fRHQuX0RjLl9Eai5fRHYuX0RzLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdEZ19EbF9EdF9EY19Eal9Edl9Ecycuc3BsaXQoJ18nKSxcbiAgbW9udGhzOiAnR2VuZXJfRmVicmVyX01hcsOnX0FicmlsX01haWdfSnVueV9KdWxpb2xfQWdvc3RfU2V0ZW1icmVfT2N0dWJyZV9Ob3ZlbWJyZV9EZXNlbWJyZScuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdHZW4uX0ZlYnIuX01hcsOnX0Fici5fTWFpZ19KdW55X0p1bC5fQWcuX1NldC5fT2N0Ll9Ob3YuX0Rlcy4nLnNwbGl0KCdfJyksXG4gIHdlZWtTdGFydDogMSxcbiAgZm9ybWF0czoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBNTU1NIFtkZV0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFtkZV0gWVlZWSBbYSBsZXNdIEg6bW0nLFxuICAgIExMTEw6ICdkZGRkIEQgTU1NTSBbZGVdIFlZWVkgW2EgbGVzXSBIOm1tJyxcbiAgICBsbDogJ0QgTU1NIFlZWVknLFxuICAgIGxsbDogJ0QgTU1NIFlZWVksIEg6bW0nLFxuICAgIGxsbGw6ICdkZGQgRCBNTU0gWVlZWSwgSDptbSdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnZFxcJ2FxdcOtICVzJyxcbiAgICBwYXN0OiAnZmEgJXMnLFxuICAgIHM6ICd1bnMgc2Vnb25zJyxcbiAgICBtOiAndW4gbWludXQnLFxuICAgIG1tOiAnJWQgbWludXRzJyxcbiAgICBoOiAndW5hIGhvcmEnLFxuICAgIGhoOiAnJWQgaG9yZXMnLFxuICAgIGQ6ICd1biBkaWEnLFxuICAgIGRkOiAnJWQgZGllcycsXG4gICAgTTogJ3VuIG1lcycsXG4gICAgTU06ICclZCBtZXNvcycsXG4gICAgeTogJ3VuIGFueScsXG4gICAgeXk6ICclZCBhbnlzJ1xuICB9LFxuICBvcmRpbmFsOiBmdW5jdGlvbiBvcmRpbmFsKG4pIHtcbiAgICB2YXIgb3JkO1xuICAgIGlmIChuID09PSAxIHx8IG4gPT09IDMpIG9yZCA9ICdyJztlbHNlIGlmIChuID09PSAyKSBvcmQgPSAnbic7ZWxzZSBpZiAobiA9PT0gNCkgb3JkID0gJ3QnO2Vsc2Ugb3JkID0gJ8OoJztcbiAgICByZXR1cm4gXCJcIiArIG4gKyBvcmQ7XG4gIH1cbn07XG5kYXlqcy5sb2NhbGUobG9jYWxlLCBudWxsLCB0cnVlKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9jYWxlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9