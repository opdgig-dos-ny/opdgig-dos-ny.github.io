"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_et_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/et.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/et.js ***!
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


// Estonian [et]

function relativeTimeWithTense(number, withoutSuffix, key, isFuture) {
  var format = {
    s: ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
    m: ['ühe minuti', 'üks minut'],
    mm: ['%d minuti', '%d minutit'],
    h: ['ühe tunni', 'tund aega', 'üks tund'],
    hh: ['%d tunni', '%d tundi'],
    d: ['ühe päeva', 'üks päev'],
    M: ['kuu aja', 'kuu aega', 'üks kuu'],
    MM: ['%d kuu', '%d kuud'],
    y: ['ühe aasta', 'aasta', 'üks aasta'],
    yy: ['%d aasta', '%d aastat']
  };

  if (withoutSuffix) {
    return (format[key][2] ? format[key][2] : format[key][1]).replace('%d', number);
  }

  return (isFuture ? format[key][0] : format[key][1]).replace('%d', number);
}

var locale = {
  name: 'et',
  // Estonian
  weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
  // Note weekdays are not capitalized in Estonian
  weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
  // There is no short form of weekdays in Estonian except this 1 letter format so it is used for both 'weekdaysShort' and 'weekdaysMin'
  weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
  months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
  // Note month names are not capitalized in Estonian
  monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
  ordinal: function ordinal(n) {
    return n + ".";
  },
  weekStart: 1,
  relativeTime: {
    future: '%s pärast',
    past: '%s tagasi',
    s: relativeTimeWithTense,
    m: relativeTimeWithTense,
    mm: relativeTimeWithTense,
    h: relativeTimeWithTense,
    hh: relativeTimeWithTense,
    d: relativeTimeWithTense,
    dd: '%d päeva',
    M: relativeTimeWithTense,
    MM: relativeTimeWithTense,
    y: relativeTimeWithTense,
    yy: relativeTimeWithTense
  },
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd, D. MMMM YYYY H:mm'
  }
};
_calcite_input_time_picker_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNDIwZmI1OGNjODI4OTI1YmI0YzU5NjRmYjA4ZjJkOWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQUs7O0FBRUwsaUVBQWUsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGQgYXMgZGF5anMgfSBmcm9tICcuL2NhbGNpdGUtaW5wdXQtdGltZS1waWNrZXIuanMnO1xuXG4vLyBFc3RvbmlhbiBbZXRdXG5cbmZ1bmN0aW9uIHJlbGF0aXZlVGltZVdpdGhUZW5zZShudW1iZXIsIHdpdGhvdXRTdWZmaXgsIGtleSwgaXNGdXR1cmUpIHtcbiAgdmFyIGZvcm1hdCA9IHtcbiAgICBzOiBbJ23DtW5lIHNla3VuZGknLCAnbcO1bmkgc2VrdW5kJywgJ3BhYXIgc2VrdW5kaXQnXSxcbiAgICBtOiBbJ8O8aGUgbWludXRpJywgJ8O8a3MgbWludXQnXSxcbiAgICBtbTogWyclZCBtaW51dGknLCAnJWQgbWludXRpdCddLFxuICAgIGg6IFsnw7xoZSB0dW5uaScsICd0dW5kIGFlZ2EnLCAnw7xrcyB0dW5kJ10sXG4gICAgaGg6IFsnJWQgdHVubmknLCAnJWQgdHVuZGknXSxcbiAgICBkOiBbJ8O8aGUgcMOkZXZhJywgJ8O8a3MgcMOkZXYnXSxcbiAgICBNOiBbJ2t1dSBhamEnLCAna3V1IGFlZ2EnLCAnw7xrcyBrdXUnXSxcbiAgICBNTTogWyclZCBrdXUnLCAnJWQga3V1ZCddLFxuICAgIHk6IFsnw7xoZSBhYXN0YScsICdhYXN0YScsICfDvGtzIGFhc3RhJ10sXG4gICAgeXk6IFsnJWQgYWFzdGEnLCAnJWQgYWFzdGF0J11cbiAgfTtcblxuICBpZiAod2l0aG91dFN1ZmZpeCkge1xuICAgIHJldHVybiAoZm9ybWF0W2tleV1bMl0gPyBmb3JtYXRba2V5XVsyXSA6IGZvcm1hdFtrZXldWzFdKS5yZXBsYWNlKCclZCcsIG51bWJlcik7XG4gIH1cblxuICByZXR1cm4gKGlzRnV0dXJlID8gZm9ybWF0W2tleV1bMF0gOiBmb3JtYXRba2V5XVsxXSkucmVwbGFjZSgnJWQnLCBudW1iZXIpO1xufVxuXG52YXIgbG9jYWxlID0ge1xuICBuYW1lOiAnZXQnLFxuICAvLyBFc3RvbmlhblxuICB3ZWVrZGF5czogJ3DDvGhhcMOkZXZfZXNtYXNww6Rldl90ZWlzaXDDpGV2X2tvbG1hcMOkZXZfbmVsamFww6Rldl9yZWVkZV9sYXVww6Rldicuc3BsaXQoJ18nKSxcbiAgLy8gTm90ZSB3ZWVrZGF5cyBhcmUgbm90IGNhcGl0YWxpemVkIGluIEVzdG9uaWFuXG4gIHdlZWtkYXlzU2hvcnQ6ICdQX0VfVF9LX05fUl9MJy5zcGxpdCgnXycpLFxuICAvLyBUaGVyZSBpcyBubyBzaG9ydCBmb3JtIG9mIHdlZWtkYXlzIGluIEVzdG9uaWFuIGV4Y2VwdCB0aGlzIDEgbGV0dGVyIGZvcm1hdCBzbyBpdCBpcyB1c2VkIGZvciBib3RoICd3ZWVrZGF5c1Nob3J0JyBhbmQgJ3dlZWtkYXlzTWluJ1xuICB3ZWVrZGF5c01pbjogJ1BfRV9UX0tfTl9SX0wnLnNwbGl0KCdfJyksXG4gIG1vbnRoczogJ2phYW51YXJfdmVlYnJ1YXJfbcOkcnRzX2FwcmlsbF9tYWlfanV1bmlfanV1bGlfYXVndXN0X3NlcHRlbWJlcl9va3Rvb2Jlcl9ub3ZlbWJlcl9kZXRzZW1iZXInLnNwbGl0KCdfJyksXG4gIC8vIE5vdGUgbW9udGggbmFtZXMgYXJlIG5vdCBjYXBpdGFsaXplZCBpbiBFc3RvbmlhblxuICBtb250aHNTaG9ydDogJ2phYW5fdmVlYnJfbcOkcnRzX2Fwcl9tYWlfanV1bmlfanV1bGlfYXVnX3NlcHRfb2t0X25vdl9kZXRzJy5zcGxpdCgnXycpLFxuICBvcmRpbmFsOiBmdW5jdGlvbiBvcmRpbmFsKG4pIHtcbiAgICByZXR1cm4gbiArIFwiLlwiO1xuICB9LFxuICB3ZWVrU3RhcnQ6IDEsXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJyVzIHDDpHJhc3QnLFxuICAgIHBhc3Q6ICclcyB0YWdhc2knLFxuICAgIHM6IHJlbGF0aXZlVGltZVdpdGhUZW5zZSxcbiAgICBtOiByZWxhdGl2ZVRpbWVXaXRoVGVuc2UsXG4gICAgbW06IHJlbGF0aXZlVGltZVdpdGhUZW5zZSxcbiAgICBoOiByZWxhdGl2ZVRpbWVXaXRoVGVuc2UsXG4gICAgaGg6IHJlbGF0aXZlVGltZVdpdGhUZW5zZSxcbiAgICBkOiByZWxhdGl2ZVRpbWVXaXRoVGVuc2UsXG4gICAgZGQ6ICclZCBww6RldmEnLFxuICAgIE06IHJlbGF0aXZlVGltZVdpdGhUZW5zZSxcbiAgICBNTTogcmVsYXRpdmVUaW1lV2l0aFRlbnNlLFxuICAgIHk6IHJlbGF0aXZlVGltZVdpdGhUZW5zZSxcbiAgICB5eTogcmVsYXRpdmVUaW1lV2l0aFRlbnNlXG4gIH0sXG4gIGZvcm1hdHM6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QuIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRC4gTU1NTSBZWVlZIEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBELiBNTU1NIFlZWVkgSDptbSdcbiAgfVxufTtcbmRheWpzLmxvY2FsZShsb2NhbGUsIG51bGwsIHRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=