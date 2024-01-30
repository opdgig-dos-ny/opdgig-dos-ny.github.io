"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_fi_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/fi.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/fi.js ***!
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


// Finnish [fi]

function relativeTimeFormatter(number, withoutSuffix, key, isFuture) {
  var past = {
    s: 'muutama sekunti',
    m: 'minuutti',
    mm: '%d minuuttia',
    h: 'tunti',
    hh: '%d tuntia',
    d: 'päivä',
    dd: '%d päivää',
    M: 'kuukausi',
    MM: '%d kuukautta',
    y: 'vuosi',
    yy: '%d vuotta',
    numbers: 'nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän'.split('_')
  };
  var future = {
    s: 'muutaman sekunnin',
    m: 'minuutin',
    mm: '%d minuutin',
    h: 'tunnin',
    hh: '%d tunnin',
    d: 'päivän',
    dd: '%d päivän',
    M: 'kuukauden',
    MM: '%d kuukauden',
    y: 'vuoden',
    yy: '%d vuoden',
    numbers: 'nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän'.split('_')
  };
  var words = isFuture && !withoutSuffix ? future : past;
  var result = words[key];

  if (number < 10) {
    return result.replace('%d', words.numbers[number]);
  }

  return result.replace('%d', number);
}

var locale = {
  name: 'fi',
  // Finnish
  weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
  // Note weekdays are not capitalized in Finnish
  weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
  // There is no short form of weekdays in Finnish except this 2 letter format so it is used for both 'weekdaysShort' and 'weekdaysMin'
  weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
  months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
  // Note month names are not capitalized in Finnish
  monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
  ordinal: function ordinal(n) {
    return n + ".";
  },
  weekStart: 1,
  yearStart: 4,
  relativeTime: {
    future: '%s päästä',
    past: '%s sitten',
    s: relativeTimeFormatter,
    m: relativeTimeFormatter,
    mm: relativeTimeFormatter,
    h: relativeTimeFormatter,
    hh: relativeTimeFormatter,
    d: relativeTimeFormatter,
    dd: relativeTimeFormatter,
    M: relativeTimeFormatter,
    MM: relativeTimeFormatter,
    y: relativeTimeFormatter,
    yy: relativeTimeFormatter
  },
  formats: {
    LT: 'HH.mm',
    LTS: 'HH.mm.ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM[ta] YYYY',
    LLL: 'D. MMMM[ta] YYYY, [klo] HH.mm',
    LLLL: 'dddd, D. MMMM[ta] YYYY, [klo] HH.mm',
    l: 'D.M.YYYY',
    ll: 'D. MMM YYYY',
    lll: 'D. MMM YYYY, [klo] HH.mm',
    llll: 'ddd, D. MMM YYYY, [klo] HH.mm'
  }
};
_calcite_input_time_picker_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMjFjNGIyZWZiZmJjMTgwMmIwMTIwYzViYmFmNDhiMGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREOztBQUU1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUFLOztBQUVMLGlFQUFlLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9maS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBkIGFzIGRheWpzIH0gZnJvbSAnLi9jYWxjaXRlLWlucHV0LXRpbWUtcGlja2VyLmpzJztcblxuLy8gRmlubmlzaCBbZmldXG5cbmZ1bmN0aW9uIHJlbGF0aXZlVGltZUZvcm1hdHRlcihudW1iZXIsIHdpdGhvdXRTdWZmaXgsIGtleSwgaXNGdXR1cmUpIHtcbiAgdmFyIHBhc3QgPSB7XG4gICAgczogJ211dXRhbWEgc2VrdW50aScsXG4gICAgbTogJ21pbnV1dHRpJyxcbiAgICBtbTogJyVkIG1pbnV1dHRpYScsXG4gICAgaDogJ3R1bnRpJyxcbiAgICBoaDogJyVkIHR1bnRpYScsXG4gICAgZDogJ3DDpGl2w6QnLFxuICAgIGRkOiAnJWQgcMOkaXbDpMOkJyxcbiAgICBNOiAna3V1a2F1c2knLFxuICAgIE1NOiAnJWQga3V1a2F1dHRhJyxcbiAgICB5OiAndnVvc2knLFxuICAgIHl5OiAnJWQgdnVvdHRhJyxcbiAgICBudW1iZXJzOiAnbm9sbGFfeWtzaV9rYWtzaV9rb2xtZV9uZWxqw6Rfdmlpc2lfa3V1c2lfc2VpdHNlbcOkbl9rYWhkZWtzYW5feWhkZWtzw6RuJy5zcGxpdCgnXycpXG4gIH07XG4gIHZhciBmdXR1cmUgPSB7XG4gICAgczogJ211dXRhbWFuIHNla3VubmluJyxcbiAgICBtOiAnbWludXV0aW4nLFxuICAgIG1tOiAnJWQgbWludXV0aW4nLFxuICAgIGg6ICd0dW5uaW4nLFxuICAgIGhoOiAnJWQgdHVubmluJyxcbiAgICBkOiAncMOkaXbDpG4nLFxuICAgIGRkOiAnJWQgcMOkaXbDpG4nLFxuICAgIE06ICdrdXVrYXVkZW4nLFxuICAgIE1NOiAnJWQga3V1a2F1ZGVuJyxcbiAgICB5OiAndnVvZGVuJyxcbiAgICB5eTogJyVkIHZ1b2RlbicsXG4gICAgbnVtYmVyczogJ25vbGxhbl95aGRlbl9rYWhkZW5fa29sbWVuX25lbGrDpG5fdmlpZGVuX2t1dWRlbl9zZWl0c2Vtw6RuX2thaGRla3Nhbl95aGRla3PDpG4nLnNwbGl0KCdfJylcbiAgfTtcbiAgdmFyIHdvcmRzID0gaXNGdXR1cmUgJiYgIXdpdGhvdXRTdWZmaXggPyBmdXR1cmUgOiBwYXN0O1xuICB2YXIgcmVzdWx0ID0gd29yZHNba2V5XTtcblxuICBpZiAobnVtYmVyIDwgMTApIHtcbiAgICByZXR1cm4gcmVzdWx0LnJlcGxhY2UoJyVkJywgd29yZHMubnVtYmVyc1tudW1iZXJdKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQucmVwbGFjZSgnJWQnLCBudW1iZXIpO1xufVxuXG52YXIgbG9jYWxlID0ge1xuICBuYW1lOiAnZmknLFxuICAvLyBGaW5uaXNoXG4gIHdlZWtkYXlzOiAnc3VubnVudGFpX21hYW5hbnRhaV90aWlzdGFpX2tlc2tpdmlpa2tvX3RvcnN0YWlfcGVyamFudGFpX2xhdWFudGFpJy5zcGxpdCgnXycpLFxuICAvLyBOb3RlIHdlZWtkYXlzIGFyZSBub3QgY2FwaXRhbGl6ZWQgaW4gRmlubmlzaFxuICB3ZWVrZGF5c1Nob3J0OiAnc3VfbWFfdGlfa2VfdG9fcGVfbGEnLnNwbGl0KCdfJyksXG4gIC8vIFRoZXJlIGlzIG5vIHNob3J0IGZvcm0gb2Ygd2Vla2RheXMgaW4gRmlubmlzaCBleGNlcHQgdGhpcyAyIGxldHRlciBmb3JtYXQgc28gaXQgaXMgdXNlZCBmb3IgYm90aCAnd2Vla2RheXNTaG9ydCcgYW5kICd3ZWVrZGF5c01pbidcbiAgd2Vla2RheXNNaW46ICdzdV9tYV90aV9rZV90b19wZV9sYScuc3BsaXQoJ18nKSxcbiAgbW9udGhzOiAndGFtbWlrdXVfaGVsbWlrdXVfbWFhbGlza3V1X2h1aHRpa3V1X3RvdWtva3V1X2tlc8Oka3V1X2hlaW7DpGt1dV9lbG9rdXVfc3l5c2t1dV9sb2tha3V1X21hcnJhc2t1dV9qb3VsdWt1dScuc3BsaXQoJ18nKSxcbiAgLy8gTm90ZSBtb250aCBuYW1lcyBhcmUgbm90IGNhcGl0YWxpemVkIGluIEZpbm5pc2hcbiAgbW9udGhzU2hvcnQ6ICd0YW1taV9oZWxtaV9tYWFsaXNfaHVodGlfdG91a29fa2Vzw6RfaGVpbsOkX2Vsb19zeXlzX2xva2FfbWFycmFzX2pvdWx1Jy5zcGxpdCgnXycpLFxuICBvcmRpbmFsOiBmdW5jdGlvbiBvcmRpbmFsKG4pIHtcbiAgICByZXR1cm4gbiArIFwiLlwiO1xuICB9LFxuICB3ZWVrU3RhcnQ6IDEsXG4gIHllYXJTdGFydDogNCxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnJXMgcMOkw6RzdMOkJyxcbiAgICBwYXN0OiAnJXMgc2l0dGVuJyxcbiAgICBzOiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgbTogcmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIG1tOiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgaDogcmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIGhoOiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgZDogcmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIGRkOiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgTTogcmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIE1NOiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgeTogcmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIHl5OiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXJcbiAgfSxcbiAgZm9ybWF0czoge1xuICAgIExUOiAnSEgubW0nLFxuICAgIExUUzogJ0hILm1tLnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdELiBNTU1NW3RhXSBZWVlZJyxcbiAgICBMTEw6ICdELiBNTU1NW3RhXSBZWVlZLCBba2xvXSBISC5tbScsXG4gICAgTExMTDogJ2RkZGQsIEQuIE1NTU1bdGFdIFlZWVksIFtrbG9dIEhILm1tJyxcbiAgICBsOiAnRC5NLllZWVknLFxuICAgIGxsOiAnRC4gTU1NIFlZWVknLFxuICAgIGxsbDogJ0QuIE1NTSBZWVlZLCBba2xvXSBISC5tbScsXG4gICAgbGxsbDogJ2RkZCwgRC4gTU1NIFlZWVksIFtrbG9dIEhILm1tJ1xuICB9XG59O1xuZGF5anMubG9jYWxlKGxvY2FsZSwgbnVsbCwgdHJ1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==