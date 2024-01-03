"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_tr_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/tr.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/tr.js ***!
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


// Turkish [tr]
var locale = {
  name: 'tr',
  weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
  weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
  weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
  months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
  monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
  weekStart: 1,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  },
  relativeTime: {
    future: '%s sonra',
    past: '%s önce',
    s: 'birkaç saniye',
    m: 'bir dakika',
    mm: '%d dakika',
    h: 'bir saat',
    hh: '%d saat',
    d: 'bir gün',
    dd: '%d gün',
    M: 'bir ay',
    MM: '%d ay',
    y: 'bir yıl',
    yy: '%d yıl'
  },
  ordinal: function ordinal(n) {
    return n + ".";
  }
};
_calcite_input_time_picker_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZTE4NWY5OGNlNTY0ZTFmMDI5NTNlOWQxYWNkYmZlNDMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQUs7O0FBRUwsaUVBQWUsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3RyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGQgYXMgZGF5anMgfSBmcm9tICcuL2NhbGNpdGUtaW5wdXQtdGltZS1waWNrZXIuanMnO1xuXG4vLyBUdXJraXNoIFt0cl1cbnZhciBsb2NhbGUgPSB7XG4gIG5hbWU6ICd0cicsXG4gIHdlZWtkYXlzOiAnUGF6YXJfUGF6YXJ0ZXNpX1NhbMSxX8OHYXLFn2FtYmFfUGVyxZ9lbWJlX0N1bWFfQ3VtYXJ0ZXNpJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnUGF6X1B0c19TYWxfw4dhcl9QZXJfQ3VtX0N0cycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdQel9QdF9TYV/Dh2FfUGVfQ3VfQ3QnLnNwbGl0KCdfJyksXG4gIG1vbnRoczogJ09jYWtfxZ51YmF0X01hcnRfTmlzYW5fTWF5xLFzX0hhemlyYW5fVGVtbXV6X0HEn3VzdG9zX0V5bMO8bF9Fa2ltX0thc8SxbV9BcmFsxLFrJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ09jYV/FnnViX01hcl9OaXNfTWF5X0hhel9UZW1fQcSfdV9FeWxfRWtpX0thc19BcmEnLnNwbGl0KCdfJyksXG4gIHdlZWtTdGFydDogMSxcbiAgZm9ybWF0czoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnJXMgc29ucmEnLFxuICAgIHBhc3Q6ICclcyDDtm5jZScsXG4gICAgczogJ2Jpcmthw6cgc2FuaXllJyxcbiAgICBtOiAnYmlyIGRha2lrYScsXG4gICAgbW06ICclZCBkYWtpa2EnLFxuICAgIGg6ICdiaXIgc2FhdCcsXG4gICAgaGg6ICclZCBzYWF0JyxcbiAgICBkOiAnYmlyIGfDvG4nLFxuICAgIGRkOiAnJWQgZ8O8bicsXG4gICAgTTogJ2JpciBheScsXG4gICAgTU06ICclZCBheScsXG4gICAgeTogJ2JpciB5xLFsJyxcbiAgICB5eTogJyVkIHnEsWwnXG4gIH0sXG4gIG9yZGluYWw6IGZ1bmN0aW9uIG9yZGluYWwobikge1xuICAgIHJldHVybiBuICsgXCIuXCI7XG4gIH1cbn07XG5kYXlqcy5sb2NhbGUobG9jYWxlLCBudWxsLCB0cnVlKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9jYWxlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9