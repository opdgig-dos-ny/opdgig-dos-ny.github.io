"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_mk_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/mk.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/mk.js ***!
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


// Macedonian [mk]
var locale = {
  name: 'mk',
  weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
  months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
  weekStart: 1,
  weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
  monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
  weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
  ordinal: function ordinal(n) {
    return n;
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
    future: 'после %s',
    past: 'пред %s',
    s: 'неколку секунди',
    m: 'минута',
    mm: '%d минути',
    h: 'час',
    hh: '%d часа',
    d: 'ден',
    dd: '%d дена',
    M: 'месец',
    MM: '%d месеци',
    y: 'година',
    yy: '%d години'
  }
};
_calcite_input_time_picker_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNmZiMzUwYjZiMTM5ZDdjYmJmMDZlZDIwMzVjYmUyZDAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQUs7O0FBRUwsaUVBQWUsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL21rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGQgYXMgZGF5anMgfSBmcm9tICcuL2NhbGNpdGUtaW5wdXQtdGltZS1waWNrZXIuanMnO1xuXG4vLyBNYWNlZG9uaWFuIFtta11cbnZhciBsb2NhbGUgPSB7XG4gIG5hbWU6ICdtaycsXG4gIHdlZWtkYXlzOiAn0L3QtdC00LXQu9CwX9C/0L7QvdC10LTQtdC70L3QuNC6X9Cy0YLQvtGA0L3QuNC6X9GB0YDQtdC00LBf0YfQtdGC0LLRgNGC0L7Qul/Qv9C10YLQvtC6X9GB0LDQsdC+0YLQsCcuc3BsaXQoJ18nKSxcbiAgbW9udGhzOiAn0ZjQsNC90YPQsNGA0Lhf0YTQtdCy0YDRg9Cw0YDQuF/QvNCw0YDRgl/QsNC/0YDQuNC7X9C80LDRmF/RmNGD0L3QuF/RmNGD0LvQuF/QsNCy0LPRg9GB0YJf0YHQtdC/0YLQtdC80LLRgNC4X9C+0LrRgtC+0LzQstGA0Lhf0L3QvtC10LzQstGA0Lhf0LTQtdC60LXQvNCy0YDQuCcuc3BsaXQoJ18nKSxcbiAgd2Vla1N0YXJ0OiAxLFxuICB3ZWVrZGF5c1Nob3J0OiAn0L3QtdC0X9C/0L7QvV/QstGC0L5f0YHRgNC1X9GH0LXRgl/Qv9C10YJf0YHQsNCxJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ9GY0LDQvV/RhNC10LJf0LzQsNGAX9Cw0L/RgF/QvNCw0Zhf0ZjRg9C9X9GY0YPQu1/QsNCy0LNf0YHQtdC/X9C+0LrRgl/QvdC+0LVf0LTQtdC6Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ9C9ZV/Qv29f0LLRgl/RgdGAX9GH0LVf0L/QtV/RgWEnLnNwbGl0KCdfJyksXG4gIG9yZGluYWw6IGZ1bmN0aW9uIG9yZGluYWwobikge1xuICAgIHJldHVybiBuO1xuICB9LFxuICBmb3JtYXRzOiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnRC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkgSDptbSdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAn0L/QvtGB0LvQtSAlcycsXG4gICAgcGFzdDogJ9C/0YDQtdC0ICVzJyxcbiAgICBzOiAn0L3QtdC60L7Qu9C60YMg0YHQtdC60YPQvdC00LgnLFxuICAgIG06ICfQvNC40L3Rg9GC0LAnLFxuICAgIG1tOiAnJWQg0LzQuNC90YPRgtC4JyxcbiAgICBoOiAn0YfQsNGBJyxcbiAgICBoaDogJyVkINGH0LDRgdCwJyxcbiAgICBkOiAn0LTQtdC9JyxcbiAgICBkZDogJyVkINC00LXQvdCwJyxcbiAgICBNOiAn0LzQtdGB0LXRhicsXG4gICAgTU06ICclZCDQvNC10YHQtdGG0LgnLFxuICAgIHk6ICfQs9C+0LTQuNC90LAnLFxuICAgIHl5OiAnJWQg0LPQvtC00LjQvdC4J1xuICB9XG59O1xuZGF5anMubG9jYWxlKGxvY2FsZSwgbnVsbCwgdHJ1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==