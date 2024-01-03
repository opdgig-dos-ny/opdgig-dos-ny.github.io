"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_da_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/da.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/da.js ***!
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


// Danish [da]
var locale = {
  name: 'da',
  weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
  weekdaysShort: 'søn._man._tirs._ons._tors._fre._lør.'.split('_'),
  weekdaysMin: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
  months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
  monthsShort: 'jan._feb._mar._apr._maj_juni_juli_aug._sept._okt._nov._dec.'.split('_'),
  weekStart: 1,
  ordinal: function ordinal(n) {
    return n + ".";
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY HH:mm',
    LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
  },
  relativeTime: {
    future: 'om %s',
    past: '%s siden',
    s: 'få sekunder',
    m: 'et minut',
    mm: '%d minutter',
    h: 'en time',
    hh: '%d timer',
    d: 'en dag',
    dd: '%d dage',
    M: 'en måned',
    MM: '%d måneder',
    y: 'et år',
    yy: '%d år'
  }
};
_calcite_input_time_picker_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMzMzYmY2ZjBjMjk1YmM2NTFmMWM3NDE4M2FlM2FhZGMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQUs7O0FBRUwsaUVBQWUsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2RhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGQgYXMgZGF5anMgfSBmcm9tICcuL2NhbGNpdGUtaW5wdXQtdGltZS1waWNrZXIuanMnO1xuXG4vLyBEYW5pc2ggW2RhXVxudmFyIGxvY2FsZSA9IHtcbiAgbmFtZTogJ2RhJyxcbiAgd2Vla2RheXM6ICdzw7huZGFnX21hbmRhZ190aXJzZGFnX29uc2RhZ190b3JzZGFnX2ZyZWRhZ19sw7hyZGFnJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnc8O4bi5fbWFuLl90aXJzLl9vbnMuX3RvcnMuX2ZyZS5fbMO4ci4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnc8O4Ll9tYS5fdGkuX29uLl90by5fZnIuX2zDuC4nLnNwbGl0KCdfJyksXG4gIG1vbnRoczogJ2phbnVhcl9mZWJydWFyX21hcnRzX2FwcmlsX21hal9qdW5pX2p1bGlfYXVndXN0X3NlcHRlbWJlcl9va3RvYmVyX25vdmVtYmVyX2RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ2phbi5fZmViLl9tYXIuX2Fwci5fbWFqX2p1bmlfanVsaV9hdWcuX3NlcHQuX29rdC5fbm92Ll9kZWMuJy5zcGxpdCgnXycpLFxuICB3ZWVrU3RhcnQ6IDEsXG4gIG9yZGluYWw6IGZ1bmN0aW9uIG9yZGluYWwobikge1xuICAgIHJldHVybiBuICsgXCIuXCI7XG4gIH0sXG4gIGZvcm1hdHM6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdELiBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkIFtkLl0gRC4gTU1NTSBZWVlZIFtrbC5dIEhIOm1tJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdvbSAlcycsXG4gICAgcGFzdDogJyVzIHNpZGVuJyxcbiAgICBzOiAnZsOlIHNla3VuZGVyJyxcbiAgICBtOiAnZXQgbWludXQnLFxuICAgIG1tOiAnJWQgbWludXR0ZXInLFxuICAgIGg6ICdlbiB0aW1lJyxcbiAgICBoaDogJyVkIHRpbWVyJyxcbiAgICBkOiAnZW4gZGFnJyxcbiAgICBkZDogJyVkIGRhZ2UnLFxuICAgIE06ICdlbiBtw6VuZWQnLFxuICAgIE1NOiAnJWQgbcOlbmVkZXInLFxuICAgIHk6ICdldCDDpXInLFxuICAgIHl5OiAnJWQgw6VyJ1xuICB9XG59O1xuZGF5anMubG9jYWxlKGxvY2FsZSwgbnVsbCwgdHJ1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==