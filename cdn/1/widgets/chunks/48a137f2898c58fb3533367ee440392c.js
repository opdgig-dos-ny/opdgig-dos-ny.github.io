"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_el_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/el.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/el.js ***!
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


// Greek [el]
var locale = {
  name: 'el',
  weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
  weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
  weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
  months: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
  monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαι_Ιουν_Ιουλ_Αυγ_Σεπτ_Οκτ_Νοε_Δεκ'.split('_'),
  ordinal: function ordinal(n) {
    return n;
  },
  weekStart: 1,
  relativeTime: {
    future: 'σε %s',
    past: 'πριν %s',
    s: 'μερικά δευτερόλεπτα',
    m: 'ένα λεπτό',
    mm: '%d λεπτά',
    h: 'μία ώρα',
    hh: '%d ώρες',
    d: 'μία μέρα',
    dd: '%d μέρες',
    M: 'ένα μήνα',
    MM: '%d μήνες',
    y: 'ένα χρόνο',
    yy: '%d χρόνια'
  },
  formats: {
    LT: 'h:mm A',
    LTS: 'h:mm:ss A',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY h:mm A',
    LLLL: 'dddd, D MMMM YYYY h:mm A'
  }
};
_calcite_input_time_picker_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNDhhMTM3ZjI4OThjNThmYjM1MzMzNjdlZTQ0MDM5MmMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQUs7O0FBRUwsaUVBQWUsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2VsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGQgYXMgZGF5anMgfSBmcm9tICcuL2NhbGNpdGUtaW5wdXQtdGltZS1waWNrZXIuanMnO1xuXG4vLyBHcmVlayBbZWxdXG52YXIgbG9jYWxlID0ge1xuICBuYW1lOiAnZWwnLFxuICB3ZWVrZGF5czogJ86az4XPgc65zrHOus6uX86UzrXPhc+Ezq3Pgc6xX86kz4HOr8+EzrdfzqTOtc+EzqzPgc+EzrdfzqDOrc68z4DPhM63X86gzrHPgc6xz4POus61z4XOrl/Oo86szrLOss6xz4TOvycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ86az4XPgV/OlM61z4VfzqTPgc65X86kzrXPhF/OoM61zrxfzqDOsc+BX86jzrHOsicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICfOms+FX86UzrVfzqTPgV/OpM61X86gzrVfzqDOsV/Oo86xJy5zcGxpdCgnXycpLFxuICBtb250aHM6ICfOmc6xzr3Ov8+FzqzPgc65zr/Pgl/Ops61zrLPgc6/z4XOrM+BzrnOv8+CX86czqzPgc+EzrnOv8+CX86Rz4DPgc6vzrvOuc6/z4JfzpzOrM65zr/Pgl/Omc6/z43Ovc65zr/Pgl/Omc6/z43Ou865zr/Pgl/Okc+NzrPOv8+Fz4PPhM6/z4JfzqPOtc+Az4TOrc68zrLPgc65zr/Pgl/On866z4TPjs6yz4HOuc6/z4Jfzp3Ov86tzrzOss+BzrnOv8+CX86UzrXOus6tzrzOss+BzrnOv8+CJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ86ZzrHOvV/Ops61zrJfzpzOsc+BX86Rz4DPgV/OnM6xzrlfzpnOv8+Fzr1fzpnOv8+FzrtfzpHPhc6zX86jzrXPgM+EX86fzrrPhF/Onc6/zrVfzpTOtc66Jy5zcGxpdCgnXycpLFxuICBvcmRpbmFsOiBmdW5jdGlvbiBvcmRpbmFsKG4pIHtcbiAgICByZXR1cm4gbjtcbiAgfSxcbiAgd2Vla1N0YXJ0OiAxLFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICfPg861ICVzJyxcbiAgICBwYXN0OiAnz4DPgc65zr0gJXMnLFxuICAgIHM6ICfOvM61z4HOuc66zqwgzrTOtc+Fz4TOtc+Bz4zOu861z4DPhM6xJyxcbiAgICBtOiAnzq3Ovc6xIM67zrXPgM+Ez4wnLFxuICAgIG1tOiAnJWQgzrvOtc+Az4TOrCcsXG4gICAgaDogJ868zq/OsSDPjs+BzrEnLFxuICAgIGhoOiAnJWQgz47Pgc61z4InLFxuICAgIGQ6ICfOvM6vzrEgzrzOrc+BzrEnLFxuICAgIGRkOiAnJWQgzrzOrc+BzrXPgicsXG4gICAgTTogJ86tzr3OsSDOvM6uzr3OsScsXG4gICAgTU06ICclZCDOvM6uzr3Otc+CJyxcbiAgICB5OiAnzq3Ovc6xIM+Hz4HPjM69zr8nLFxuICAgIHl5OiAnJWQgz4fPgc+Mzr3Ouc6xJ1xuICB9LFxuICBmb3JtYXRzOiB7XG4gICAgTFQ6ICdoOm1tIEEnLFxuICAgIExUUzogJ2g6bW06c3MgQScsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIGg6bW0gQScsXG4gICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZIGg6bW0gQSdcbiAgfVxufTtcbmRheWpzLmxvY2FsZShsb2NhbGUsIG51bGwsIHRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=