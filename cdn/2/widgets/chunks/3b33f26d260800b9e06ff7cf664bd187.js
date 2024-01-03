"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_pt_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/pt.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/pt.js ***!
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


// Portuguese [pt]
var locale = {
  name: 'pt',
  weekdays: 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
  weekdaysShort: 'dom_seg_ter_qua_qui_sex_sab'.split('_'),
  weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sa'.split('_'),
  months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
  monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
  ordinal: function ordinal(n) {
    return n + "\xBA";
  },
  weekStart: 1,
  yearStart: 4,
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
    s: 'alguns segundos',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvM2IzM2YyNmQyNjA4MDBiOWUwNmZmN2NmNjY0YmQxODcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBSzs7QUFFTCxpRUFBZSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZCBhcyBkYXlqcyB9IGZyb20gJy4vY2FsY2l0ZS1pbnB1dC10aW1lLXBpY2tlci5qcyc7XG5cbi8vIFBvcnR1Z3Vlc2UgW3B0XVxudmFyIGxvY2FsZSA9IHtcbiAgbmFtZTogJ3B0JyxcbiAgd2Vla2RheXM6ICdkb21pbmdvX3NlZ3VuZGEtZmVpcmFfdGVyw6dhLWZlaXJhX3F1YXJ0YS1mZWlyYV9xdWludGEtZmVpcmFfc2V4dGEtZmVpcmFfc8OhYmFkbycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ2RvbV9zZWdfdGVyX3F1YV9xdWlfc2V4X3NhYicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdEb18ywqpfM8KqXzTCql81wqpfNsKqX1NhJy5zcGxpdCgnXycpLFxuICBtb250aHM6ICdqYW5laXJvX2ZldmVyZWlyb19tYXLDp29fYWJyaWxfbWFpb19qdW5ob19qdWxob19hZ29zdG9fc2V0ZW1icm9fb3V0dWJyb19ub3ZlbWJyb19kZXplbWJybycuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdqYW5fZmV2X21hcl9hYnJfbWFpX2p1bl9qdWxfYWdvX3NldF9vdXRfbm92X2Rleicuc3BsaXQoJ18nKSxcbiAgb3JkaW5hbDogZnVuY3Rpb24gb3JkaW5hbChuKSB7XG4gICAgcmV0dXJuIG4gKyBcIlxceEJBXCI7XG4gIH0sXG4gIHdlZWtTdGFydDogMSxcbiAgeWVhclN0YXJ0OiA0LFxuICBmb3JtYXRzOiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWScsXG4gICAgTExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZIFvDoHNdIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBbZGVdIE1NTU0gW2RlXSBZWVlZIFvDoHNdIEhIOm1tJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdlbSAlcycsXG4gICAgcGFzdDogJ2jDoSAlcycsXG4gICAgczogJ2FsZ3VucyBzZWd1bmRvcycsXG4gICAgbTogJ3VtIG1pbnV0bycsXG4gICAgbW06ICclZCBtaW51dG9zJyxcbiAgICBoOiAndW1hIGhvcmEnLFxuICAgIGhoOiAnJWQgaG9yYXMnLFxuICAgIGQ6ICd1bSBkaWEnLFxuICAgIGRkOiAnJWQgZGlhcycsXG4gICAgTTogJ3VtIG3DqnMnLFxuICAgIE1NOiAnJWQgbWVzZXMnLFxuICAgIHk6ICd1bSBhbm8nLFxuICAgIHl5OiAnJWQgYW5vcydcbiAgfVxufTtcbmRheWpzLmxvY2FsZShsb2NhbGUsIG51bGwsIHRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=