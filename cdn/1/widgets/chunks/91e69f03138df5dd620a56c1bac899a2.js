"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_ro_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/ro.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/ro.js ***!
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


// Romanian [ro]
var locale = {
  name: 'ro',
  weekdays: 'Duminică_Luni_Marți_Miercuri_Joi_Vineri_Sâmbătă'.split('_'),
  weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
  weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
  months: 'Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie'.split('_'),
  monthsShort: 'Ian._Febr._Mart._Apr._Mai_Iun._Iul._Aug._Sept._Oct._Nov._Dec.'.split('_'),
  weekStart: 1,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY H:mm',
    LLLL: 'dddd, D MMMM YYYY H:mm'
  },
  relativeTime: {
    future: 'peste %s',
    past: 'acum %s',
    s: 'câteva secunde',
    m: 'un minut',
    mm: '%d minute',
    h: 'o oră',
    hh: '%d ore',
    d: 'o zi',
    dd: '%d zile',
    M: 'o lună',
    MM: '%d luni',
    y: 'un an',
    yy: '%d ani'
  },
  ordinal: function ordinal(n) {
    return n;
  }
};
_calcite_input_time_picker_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOTFlNjlmMDMxMzhkZjVkZDYyMGE1NmMxYmFjODk5YTIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQUs7O0FBRUwsaUVBQWUsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3JvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGQgYXMgZGF5anMgfSBmcm9tICcuL2NhbGNpdGUtaW5wdXQtdGltZS1waWNrZXIuanMnO1xuXG4vLyBSb21hbmlhbiBbcm9dXG52YXIgbG9jYWxlID0ge1xuICBuYW1lOiAncm8nLFxuICB3ZWVrZGF5czogJ0R1bWluaWPEg19MdW5pX01hcsibaV9NaWVyY3VyaV9Kb2lfVmluZXJpX1PDom1ixIN0xIMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdEdW1fTHVuX01hcl9NaWVfSm9pX1Zpbl9Tw6JtJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ0R1X0x1X01hX01pX0pvX1ZpX1PDoicuc3BsaXQoJ18nKSxcbiAgbW9udGhzOiAnSWFudWFyaWVfRmVicnVhcmllX01hcnRpZV9BcHJpbGllX01haV9JdW5pZV9JdWxpZV9BdWd1c3RfU2VwdGVtYnJpZV9PY3RvbWJyaWVfTm9pZW1icmllX0RlY2VtYnJpZScuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdJYW4uX0ZlYnIuX01hcnQuX0Fwci5fTWFpX0l1bi5fSXVsLl9BdWcuX1NlcHQuX09jdC5fTm92Ll9EZWMuJy5zcGxpdCgnXycpLFxuICB3ZWVrU3RhcnQ6IDEsXG4gIGZvcm1hdHM6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkgSDptbSdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAncGVzdGUgJXMnLFxuICAgIHBhc3Q6ICdhY3VtICVzJyxcbiAgICBzOiAnY8OidGV2YSBzZWN1bmRlJyxcbiAgICBtOiAndW4gbWludXQnLFxuICAgIG1tOiAnJWQgbWludXRlJyxcbiAgICBoOiAnbyBvcsSDJyxcbiAgICBoaDogJyVkIG9yZScsXG4gICAgZDogJ28gemknLFxuICAgIGRkOiAnJWQgemlsZScsXG4gICAgTTogJ28gbHVuxIMnLFxuICAgIE1NOiAnJWQgbHVuaScsXG4gICAgeTogJ3VuIGFuJyxcbiAgICB5eTogJyVkIGFuaSdcbiAgfSxcbiAgb3JkaW5hbDogZnVuY3Rpb24gb3JkaW5hbChuKSB7XG4gICAgcmV0dXJuIG47XG4gIH1cbn07XG5kYXlqcy5sb2NhbGUobG9jYWxlLCBudWxsLCB0cnVlKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9jYWxlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9