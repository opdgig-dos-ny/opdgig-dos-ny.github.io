"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_hi_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/hi.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/hi.js ***!
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


// Hindi [hi]
var locale = {
  name: 'hi',
  weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
  months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
  weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
  monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
  weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
  ordinal: function ordinal(n) {
    return n;
  },
  formats: {
    LT: 'A h:mm बजे',
    LTS: 'A h:mm:ss बजे',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY, A h:mm बजे',
    LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
  },
  relativeTime: {
    future: '%s में',
    past: '%s पहले',
    s: 'कुछ ही क्षण',
    m: 'एक मिनट',
    mm: '%d मिनट',
    h: 'एक घंटा',
    hh: '%d घंटे',
    d: 'एक दिन',
    dd: '%d दिन',
    M: 'एक महीने',
    MM: '%d महीने',
    y: 'एक वर्ष',
    yy: '%d वर्ष'
  }
};
_calcite_input_time_picker_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNDZkNTVhN2FiZGUzM2VhYzdkMjYxNGQzYTFhZTgxMTEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUFLOztBQUVMLGlFQUFlLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9oaS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBkIGFzIGRheWpzIH0gZnJvbSAnLi9jYWxjaXRlLWlucHV0LXRpbWUtcGlja2VyLmpzJztcblxuLy8gSGluZGkgW2hpXVxudmFyIGxvY2FsZSA9IHtcbiAgbmFtZTogJ2hpJyxcbiAgd2Vla2RheXM6ICfgpLDgpLXgpL/gpLXgpL7gpLBf4KS44KWL4KSu4KS14KS+4KSwX+CkruCkguCkl+CksuCkteCkvuCksF/gpKzgpYHgpKfgpLXgpL7gpLBf4KSX4KWB4KSw4KWC4KS14KS+4KSwX+CktuClgeCkleCljeCksOCkteCkvuCksF/gpLbgpKjgpL/gpLXgpL7gpLAnLnNwbGl0KCdfJyksXG4gIG1vbnRoczogJ+CknOCkqOCkteCksOClgF/gpKvgpLzgpLDgpLXgpLDgpYBf4KSu4KS+4KSw4KWN4KSaX+CkheCkquCljeCksOCliOCksl/gpK7gpIhf4KSc4KWC4KSoX+CknOClgeCksuCkvuCkiF/gpIXgpJfgpLjgpY3gpKRf4KS44KS/4KSk4KSu4KWN4KSs4KSwX+CkheCkleCljeCkn+ClguCkrOCksF/gpKjgpLXgpK7gpY3gpKzgpLBf4KSm4KS/4KS44KSu4KWN4KSs4KSwJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAn4KSw4KS14KS/X+CkuOCli+Ckrl/gpK7gpILgpJfgpLJf4KSs4KWB4KSnX+Ckl+ClgeCksOClgl/gpLbgpYHgpJXgpY3gpLBf4KS24KSo4KS/Jy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ+CknOCkqC5f4KSr4KS84KSwLl/gpK7gpL7gpLDgpY3gpJpf4KSF4KSq4KWN4KSw4KWILl/gpK7gpIhf4KSc4KWC4KSoX+CknOClgeCksi5f4KSF4KSXLl/gpLjgpL/gpKQuX+CkheCkleCljeCkn+Clgi5f4KSo4KS1Ll/gpKbgpL/gpLguJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ+CksF/gpLjgpYtf4KSu4KSCX+CkrOClgV/gpJfgpYFf4KS24KWBX+Ckticuc3BsaXQoJ18nKSxcbiAgb3JkaW5hbDogZnVuY3Rpb24gb3JkaW5hbChuKSB7XG4gICAgcmV0dXJuIG47XG4gIH0sXG4gIGZvcm1hdHM6IHtcbiAgICBMVDogJ0EgaDptbSDgpKzgpJzgpYcnLFxuICAgIExUUzogJ0EgaDptbTpzcyDgpKzgpJzgpYcnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSwgQSBoOm1tIOCkrOCknOClhycsXG4gICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZLCBBIGg6bW0g4KSs4KSc4KWHJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICclcyDgpK7gpYfgpIInLFxuICAgIHBhc3Q6ICclcyDgpKrgpLngpLLgpYcnLFxuICAgIHM6ICfgpJXgpYHgpJsg4KS54KWAIOCkleCljeCkt+CkoycsXG4gICAgbTogJ+Ckj+CklSDgpK7gpL/gpKjgpJ8nLFxuICAgIG1tOiAnJWQg4KSu4KS/4KSo4KSfJyxcbiAgICBoOiAn4KSP4KSVIOCkmOCkguCkn+CkvicsXG4gICAgaGg6ICclZCDgpJjgpILgpJ/gpYcnLFxuICAgIGQ6ICfgpI/gpJUg4KSm4KS/4KSoJyxcbiAgICBkZDogJyVkIOCkpuCkv+CkqCcsXG4gICAgTTogJ+Ckj+CklSDgpK7gpLngpYDgpKjgpYcnLFxuICAgIE1NOiAnJWQg4KSu4KS54KWA4KSo4KWHJyxcbiAgICB5OiAn4KSP4KSVIOCkteCksOCljeCktycsXG4gICAgeXk6ICclZCDgpLXgpLDgpY3gpLcnXG4gIH1cbn07XG5kYXlqcy5sb2NhbGUobG9jYWxlLCBudWxsLCB0cnVlKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9jYWxlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9