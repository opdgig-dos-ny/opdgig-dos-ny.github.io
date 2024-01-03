"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_bg_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/bg.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/bg.js ***!
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


// Bulgarian [bg]
var locale = {
  name: 'bg',
  weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
  weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
  weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
  months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
  monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
  weekStart: 1,
  ordinal: function ordinal(n) {
    var last2Digits = n % 100;

    if (last2Digits > 10 && last2Digits < 20) {
      return n + "-\u0442\u0438";
    }

    var lastDigit = n % 10;

    if (lastDigit === 1) {
      return n + "-\u0432\u0438";
    } else if (lastDigit === 2) {
      return n + "-\u0440\u0438";
    } else if (lastDigit === 7 || lastDigit === 8) {
      return n + "-\u043C\u0438";
    }

    return n + "-\u0442\u0438";
  },
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'D.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY H:mm',
    LLLL: 'dddd, D MMMM YYYY H:mm'
  },
  relativeTime: {
    future: 'след %s',
    past: 'преди %s',
    s: 'няколко секунди',
    m: 'минута',
    mm: '%d минути',
    h: 'час',
    hh: '%d часа',
    d: 'ден',
    dd: '%d дена',
    M: 'месец',
    MM: '%d месеца',
    y: 'година',
    yy: '%d години'
  }
};
_calcite_input_time_picker_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvN2QxYjUxYzhlZmZmZmRlNzM4ZjAwODg1NTNlYTY3YzQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBSzs7QUFFTCxpRUFBZSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvYmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgZCBhcyBkYXlqcyB9IGZyb20gJy4vY2FsY2l0ZS1pbnB1dC10aW1lLXBpY2tlci5qcyc7XG5cbi8vIEJ1bGdhcmlhbiBbYmddXG52YXIgbG9jYWxlID0ge1xuICBuYW1lOiAnYmcnLFxuICB3ZWVrZGF5czogJ9C90LXQtNC10LvRj1/Qv9C+0L3QtdC00LXQu9C90LjQul/QstGC0L7RgNC90LjQul/RgdGA0Y/QtNCwX9GH0LXRgtCy0YrRgNGC0YrQul/Qv9C10YLRitC6X9GB0YrQsdC+0YLQsCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ9C90LXQtF/Qv9C+0L1f0LLRgtC+X9GB0YDRj1/Rh9C10YJf0L/QtdGCX9GB0YrQsScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICfQvdC0X9C/0L1f0LLRgl/RgdGAX9GH0YJf0L/Rgl/RgdCxJy5zcGxpdCgnXycpLFxuICBtb250aHM6ICfRj9C90YPQsNGA0Lhf0YTQtdCy0YDRg9Cw0YDQuF/QvNCw0YDRgl/QsNC/0YDQuNC7X9C80LDQuV/RjtC90Lhf0Y7Qu9C4X9Cw0LLQs9GD0YHRgl/RgdC10L/RgtC10LzQstGA0Lhf0L7QutGC0L7QvNCy0YDQuF/QvdC+0LXQvNCy0YDQuF/QtNC10LrQtdC80LLRgNC4Jy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ9GP0L3RgF/RhNC10LJf0LzQsNGAX9Cw0L/RgF/QvNCw0Llf0Y7QvdC4X9GO0LvQuF/QsNCy0LNf0YHQtdC/X9C+0LrRgl/QvdC+0LVf0LTQtdC6Jy5zcGxpdCgnXycpLFxuICB3ZWVrU3RhcnQ6IDEsXG4gIG9yZGluYWw6IGZ1bmN0aW9uIG9yZGluYWwobikge1xuICAgIHZhciBsYXN0MkRpZ2l0cyA9IG4gJSAxMDA7XG5cbiAgICBpZiAobGFzdDJEaWdpdHMgPiAxMCAmJiBsYXN0MkRpZ2l0cyA8IDIwKSB7XG4gICAgICByZXR1cm4gbiArIFwiLVxcdTA0NDJcXHUwNDM4XCI7XG4gICAgfVxuXG4gICAgdmFyIGxhc3REaWdpdCA9IG4gJSAxMDtcblxuICAgIGlmIChsYXN0RGlnaXQgPT09IDEpIHtcbiAgICAgIHJldHVybiBuICsgXCItXFx1MDQzMlxcdTA0MzhcIjtcbiAgICB9IGVsc2UgaWYgKGxhc3REaWdpdCA9PT0gMikge1xuICAgICAgcmV0dXJuIG4gKyBcIi1cXHUwNDQwXFx1MDQzOFwiO1xuICAgIH0gZWxzZSBpZiAobGFzdERpZ2l0ID09PSA3IHx8IGxhc3REaWdpdCA9PT0gOCkge1xuICAgICAgcmV0dXJuIG4gKyBcIi1cXHUwNDNDXFx1MDQzOFwiO1xuICAgIH1cblxuICAgIHJldHVybiBuICsgXCItXFx1MDQ0MlxcdTA0MzhcIjtcbiAgfSxcbiAgZm9ybWF0czoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0QuTU0uWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZIEg6bW0nXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ9GB0LvQtdC0ICVzJyxcbiAgICBwYXN0OiAn0L/RgNC10LTQuCAlcycsXG4gICAgczogJ9C90Y/QutC+0LvQutC+INGB0LXQutGD0L3QtNC4JyxcbiAgICBtOiAn0LzQuNC90YPRgtCwJyxcbiAgICBtbTogJyVkINC80LjQvdGD0YLQuCcsXG4gICAgaDogJ9GH0LDRgScsXG4gICAgaGg6ICclZCDRh9Cw0YHQsCcsXG4gICAgZDogJ9C00LXQvScsXG4gICAgZGQ6ICclZCDQtNC10L3QsCcsXG4gICAgTTogJ9C80LXRgdC10YYnLFxuICAgIE1NOiAnJWQg0LzQtdGB0LXRhtCwJyxcbiAgICB5OiAn0LPQvtC00LjQvdCwJyxcbiAgICB5eTogJyVkINCz0L7QtNC40L3QuCdcbiAgfVxufTtcbmRheWpzLmxvY2FsZShsb2NhbGUsIG51bGwsIHRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=