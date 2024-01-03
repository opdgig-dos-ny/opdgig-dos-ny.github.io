"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_ru_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/ru.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/ru.js ***!
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


// Russian [ru]
var monthFormat = 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_');
var monthStandalone = 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_');
var monthShortFormat = 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_');
var monthShortStandalone = 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_');
var MONTHS_IN_FORMAT = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;

function plural(word, num) {
  var forms = word.split('_');
  return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]; // eslint-disable-line
}

function relativeTimeWithPlural(number, withoutSuffix, key) {
  var format = {
    mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
    hh: 'час_часа_часов',
    dd: 'день_дня_дней',
    MM: 'месяц_месяца_месяцев',
    yy: 'год_года_лет'
  };

  if (key === 'm') {
    return withoutSuffix ? 'минута' : 'минуту';
  }

  return number + " " + plural(format[key], +number);
}

var months = function months(dayjsInstance, format) {
  if (MONTHS_IN_FORMAT.test(format)) {
    return monthFormat[dayjsInstance.month()];
  }

  return monthStandalone[dayjsInstance.month()];
};

months.s = monthStandalone;
months.f = monthFormat;

var monthsShort = function monthsShort(dayjsInstance, format) {
  if (MONTHS_IN_FORMAT.test(format)) {
    return monthShortFormat[dayjsInstance.month()];
  }

  return monthShortStandalone[dayjsInstance.month()];
};

monthsShort.s = monthShortStandalone;
monthsShort.f = monthShortFormat;
var locale = {
  name: 'ru',
  weekdays: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
  weekdaysShort: 'вск_пнд_втр_срд_чтв_птн_сбт'.split('_'),
  weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
  months: months,
  monthsShort: monthsShort,
  weekStart: 1,
  yearStart: 4,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY г.',
    LLL: 'D MMMM YYYY г., H:mm',
    LLLL: 'dddd, D MMMM YYYY г., H:mm'
  },
  relativeTime: {
    future: 'через %s',
    past: '%s назад',
    s: 'несколько секунд',
    m: relativeTimeWithPlural,
    mm: relativeTimeWithPlural,
    h: 'час',
    hh: relativeTimeWithPlural,
    d: 'день',
    dd: relativeTimeWithPlural,
    M: 'месяц',
    MM: relativeTimeWithPlural,
    y: 'год',
    yy: relativeTimeWithPlural
  },
  ordinal: function ordinal(n) {
    return n;
  },
  meridiem: function meridiem(hour) {
    if (hour < 4) {
      return 'ночи';
    } else if (hour < 12) {
      return 'утра';
    } else if (hour < 17) {
      return 'дня';
    }

    return 'вечера';
  }
};
_calcite_input_time_picker_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYjE4OTI2YzYwNzhhYzgxZTZiNzMxNmZkZTU4ZDcyN2IuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNKQUFzSjtBQUN0Sjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNERBQUs7O0FBRUwsaUVBQWUsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3J1LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGQgYXMgZGF5anMgfSBmcm9tICcuL2NhbGNpdGUtaW5wdXQtdGltZS1waWNrZXIuanMnO1xuXG4vLyBSdXNzaWFuIFtydV1cbnZhciBtb250aEZvcm1hdCA9ICfRj9C90LLQsNGA0Y9f0YTQtdCy0YDQsNC70Y9f0LzQsNGA0YLQsF/QsNC/0YDQtdC70Y9f0LzQsNGPX9C40Y7QvdGPX9C40Y7Qu9GPX9Cw0LLQs9GD0YHRgtCwX9GB0LXQvdGC0Y/QsdGA0Y9f0L7QutGC0Y/QsdGA0Y9f0L3QvtGP0LHRgNGPX9C00LXQutCw0LHRgNGPJy5zcGxpdCgnXycpO1xudmFyIG1vbnRoU3RhbmRhbG9uZSA9ICfRj9C90LLQsNGA0Yxf0YTQtdCy0YDQsNC70Yxf0LzQsNGA0YJf0LDQv9GA0LXQu9GMX9C80LDQuV/QuNGO0L3RjF/QuNGO0LvRjF/QsNCy0LPRg9GB0YJf0YHQtdC90YLRj9Cx0YDRjF/QvtC60YLRj9Cx0YDRjF/QvdC+0Y/QsdGA0Yxf0LTQtdC60LDQsdGA0YwnLnNwbGl0KCdfJyk7XG52YXIgbW9udGhTaG9ydEZvcm1hdCA9ICfRj9C90LIuX9GE0LXQstGALl/QvNCw0YAuX9Cw0L/RgC5f0LzQsNGPX9C40Y7QvdGPX9C40Y7Qu9GPX9Cw0LLQsy5f0YHQtdC90YIuX9C+0LrRgi5f0L3QvtGP0LEuX9C00LXQui4nLnNwbGl0KCdfJyk7XG52YXIgbW9udGhTaG9ydFN0YW5kYWxvbmUgPSAn0Y/QvdCyLl/RhNC10LLRgC5f0LzQsNGA0YJf0LDQv9GALl/QvNCw0Llf0LjRjtC90Yxf0LjRjtC70Yxf0LDQstCzLl/RgdC10L3Rgi5f0L7QutGCLl/QvdC+0Y/QsS5f0LTQtdC6Licuc3BsaXQoJ18nKTtcbnZhciBNT05USFNfSU5fRk9STUFUID0gL0Rbb0RdPyhcXFtbXltcXF1dKlxcXXxcXHMpK01NTU0/LztcblxuZnVuY3Rpb24gcGx1cmFsKHdvcmQsIG51bSkge1xuICB2YXIgZm9ybXMgPSB3b3JkLnNwbGl0KCdfJyk7XG4gIHJldHVybiBudW0gJSAxMCA9PT0gMSAmJiBudW0gJSAxMDAgIT09IDExID8gZm9ybXNbMF0gOiBudW0gJSAxMCA+PSAyICYmIG51bSAlIDEwIDw9IDQgJiYgKG51bSAlIDEwMCA8IDEwIHx8IG51bSAlIDEwMCA+PSAyMCkgPyBmb3Jtc1sxXSA6IGZvcm1zWzJdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG59XG5cbmZ1bmN0aW9uIHJlbGF0aXZlVGltZVdpdGhQbHVyYWwobnVtYmVyLCB3aXRob3V0U3VmZml4LCBrZXkpIHtcbiAgdmFyIGZvcm1hdCA9IHtcbiAgICBtbTogd2l0aG91dFN1ZmZpeCA/ICfQvNC40L3Rg9GC0LBf0LzQuNC90YPRgtGLX9C80LjQvdGD0YInIDogJ9C80LjQvdGD0YLRg1/QvNC40L3Rg9GC0Ytf0LzQuNC90YPRgicsXG4gICAgaGg6ICfRh9Cw0YFf0YfQsNGB0LBf0YfQsNGB0L7QsicsXG4gICAgZGQ6ICfQtNC10L3RjF/QtNC90Y9f0LTQvdC10LknLFxuICAgIE1NOiAn0LzQtdGB0Y/Rhl/QvNC10YHRj9GG0LBf0LzQtdGB0Y/RhtC10LInLFxuICAgIHl5OiAn0LPQvtC0X9Cz0L7QtNCwX9C70LXRgidcbiAgfTtcblxuICBpZiAoa2V5ID09PSAnbScpIHtcbiAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICfQvNC40L3Rg9GC0LAnIDogJ9C80LjQvdGD0YLRgyc7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgXCIgXCIgKyBwbHVyYWwoZm9ybWF0W2tleV0sICtudW1iZXIpO1xufVxuXG52YXIgbW9udGhzID0gZnVuY3Rpb24gbW9udGhzKGRheWpzSW5zdGFuY2UsIGZvcm1hdCkge1xuICBpZiAoTU9OVEhTX0lOX0ZPUk1BVC50ZXN0KGZvcm1hdCkpIHtcbiAgICByZXR1cm4gbW9udGhGb3JtYXRbZGF5anNJbnN0YW5jZS5tb250aCgpXTtcbiAgfVxuXG4gIHJldHVybiBtb250aFN0YW5kYWxvbmVbZGF5anNJbnN0YW5jZS5tb250aCgpXTtcbn07XG5cbm1vbnRocy5zID0gbW9udGhTdGFuZGFsb25lO1xubW9udGhzLmYgPSBtb250aEZvcm1hdDtcblxudmFyIG1vbnRoc1Nob3J0ID0gZnVuY3Rpb24gbW9udGhzU2hvcnQoZGF5anNJbnN0YW5jZSwgZm9ybWF0KSB7XG4gIGlmIChNT05USFNfSU5fRk9STUFULnRlc3QoZm9ybWF0KSkge1xuICAgIHJldHVybiBtb250aFNob3J0Rm9ybWF0W2RheWpzSW5zdGFuY2UubW9udGgoKV07XG4gIH1cblxuICByZXR1cm4gbW9udGhTaG9ydFN0YW5kYWxvbmVbZGF5anNJbnN0YW5jZS5tb250aCgpXTtcbn07XG5cbm1vbnRoc1Nob3J0LnMgPSBtb250aFNob3J0U3RhbmRhbG9uZTtcbm1vbnRoc1Nob3J0LmYgPSBtb250aFNob3J0Rm9ybWF0O1xudmFyIGxvY2FsZSA9IHtcbiAgbmFtZTogJ3J1JyxcbiAgd2Vla2RheXM6ICfQstC+0YHQutGA0LXRgdC10L3RjNC1X9C/0L7QvdC10LTQtdC70YzQvdC40Lpf0LLRgtC+0YDQvdC40Lpf0YHRgNC10LTQsF/Rh9C10YLQstC10YDQs1/Qv9GP0YLQvdC40YbQsF/RgdGD0LHQsdC+0YLQsCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ9Cy0YHQul/Qv9C90LRf0LLRgtGAX9GB0YDQtF/Rh9GC0LJf0L/RgtC9X9GB0LHRgicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICfQstGBX9C/0L1f0LLRgl/RgdGAX9GH0YJf0L/Rgl/RgdCxJy5zcGxpdCgnXycpLFxuICBtb250aHM6IG1vbnRocyxcbiAgbW9udGhzU2hvcnQ6IG1vbnRoc1Nob3J0LFxuICB3ZWVrU3RhcnQ6IDEsXG4gIHllYXJTdGFydDogNCxcbiAgZm9ybWF0czoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVkg0LMuJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSDQsy4sIEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSDQsy4sIEg6bW0nXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ9GH0LXRgNC10LcgJXMnLFxuICAgIHBhc3Q6ICclcyDQvdCw0LfQsNC0JyxcbiAgICBzOiAn0L3QtdGB0LrQvtC70YzQutC+INGB0LXQutGD0L3QtCcsXG4gICAgbTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBtbTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBoOiAn0YfQsNGBJyxcbiAgICBoaDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBkOiAn0LTQtdC90YwnLFxuICAgIGRkOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIE06ICfQvNC10YHRj9GGJyxcbiAgICBNTTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICB5OiAn0LPQvtC0JyxcbiAgICB5eTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbFxuICB9LFxuICBvcmRpbmFsOiBmdW5jdGlvbiBvcmRpbmFsKG4pIHtcbiAgICByZXR1cm4gbjtcbiAgfSxcbiAgbWVyaWRpZW06IGZ1bmN0aW9uIG1lcmlkaWVtKGhvdXIpIHtcbiAgICBpZiAoaG91ciA8IDQpIHtcbiAgICAgIHJldHVybiAn0L3QvtGH0LgnO1xuICAgIH0gZWxzZSBpZiAoaG91ciA8IDEyKSB7XG4gICAgICByZXR1cm4gJ9GD0YLRgNCwJztcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxNykge1xuICAgICAgcmV0dXJuICfQtNC90Y8nO1xuICAgIH1cblxuICAgIHJldHVybiAn0LLQtdGH0LXRgNCwJztcbiAgfVxufTtcbmRheWpzLmxvY2FsZShsb2NhbGUsIG51bGwsIHRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=