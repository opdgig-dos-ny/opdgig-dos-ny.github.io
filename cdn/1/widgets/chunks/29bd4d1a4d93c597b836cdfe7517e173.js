"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_pt-br_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/pt-br.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/pt-br.js ***!
  \************************************************************************/
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


// Portuguese (Brazil) [pt-br]
var locale = {
  name: 'pt-br',
  weekdays: 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
  weekdaysShort: 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
  weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
  months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
  monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
  ordinal: function ordinal(n) {
    return n + "\xBA";
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D [de] MMMM [de] YYYY',
    LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
    LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
  },
  relativeTime: {
    future: 'em %s',
    past: 'há %s',
    s: 'poucos segundos',
    m: 'um minuto',
    mm: '%d minutos',
    h: 'uma hora',
    hh: '%d horas',
    d: 'um dia',
    dd: '%d dias',
    M: 'um mês',
    MM: '%d meses',
    y: 'um ano',
    yy: '%d anos'
  }
};
_calcite_input_time_picker_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMjliZDRkMWE0ZDkzYzU5N2I4MzZjZGZlNzUxN2UxNzMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUFLOztBQUVMLGlFQUFlLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9wdC1ici5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBkIGFzIGRheWpzIH0gZnJvbSAnLi9jYWxjaXRlLWlucHV0LXRpbWUtcGlja2VyLmpzJztcblxuLy8gUG9ydHVndWVzZSAoQnJhemlsKSBbcHQtYnJdXG52YXIgbG9jYWxlID0ge1xuICBuYW1lOiAncHQtYnInLFxuICB3ZWVrZGF5czogJ2RvbWluZ29fc2VndW5kYS1mZWlyYV90ZXLDp2EtZmVpcmFfcXVhcnRhLWZlaXJhX3F1aW50YS1mZWlyYV9zZXh0YS1mZWlyYV9zw6FiYWRvJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnZG9tX3NlZ190ZXJfcXVhX3F1aV9zZXhfc8OhYicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdEb18ywqpfM8KqXzTCql81wqpfNsKqX1PDoScuc3BsaXQoJ18nKSxcbiAgbW9udGhzOiAnamFuZWlyb19mZXZlcmVpcm9fbWFyw6dvX2FicmlsX21haW9fanVuaG9fanVsaG9fYWdvc3RvX3NldGVtYnJvX291dHVicm9fbm92ZW1icm9fZGV6ZW1icm8nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnamFuX2Zldl9tYXJfYWJyX21haV9qdW5fanVsX2Fnb19zZXRfb3V0X25vdl9kZXonLnNwbGl0KCdfJyksXG4gIG9yZGluYWw6IGZ1bmN0aW9uIG9yZGluYWwobikge1xuICAgIHJldHVybiBuICsgXCJcXHhCQVwiO1xuICB9LFxuICBmb3JtYXRzOiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWScsXG4gICAgTExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZIFvDoHNdIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBbZGVdIE1NTU0gW2RlXSBZWVlZIFvDoHNdIEhIOm1tJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdlbSAlcycsXG4gICAgcGFzdDogJ2jDoSAlcycsXG4gICAgczogJ3BvdWNvcyBzZWd1bmRvcycsXG4gICAgbTogJ3VtIG1pbnV0bycsXG4gICAgbW06ICclZCBtaW51dG9zJyxcbiAgICBoOiAndW1hIGhvcmEnLFxuICAgIGhoOiAnJWQgaG9yYXMnLFxuICAgIGQ6ICd1bSBkaWEnLFxuICAgIGRkOiAnJWQgZGlhcycsXG4gICAgTTogJ3VtIG3DqnMnLFxuICAgIE1NOiAnJWQgbWVzZXMnLFxuICAgIHk6ICd1bSBhbm8nLFxuICAgIHl5OiAnJWQgYW5vcydcbiAgfVxufTtcbmRheWpzLmxvY2FsZShsb2NhbGUsIG51bGwsIHRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=