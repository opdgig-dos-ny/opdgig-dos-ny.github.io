"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-input-time-picker_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-input-time-picker.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-input-time-picker.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteInputTimePicker: () => (/* binding */ CalciteInputTimePicker),
/* harmony export */   d: () => (/* binding */ dayjs),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ "./node_modules/@esri/calcite-components/dist/components/form.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _label2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./label2.js */ "./node_modules/@esri/calcite-components/dist/components/label2.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./focusTrapComponent.js */ "./node_modules/@esri/calcite-components/dist/components/focusTrapComponent.js");
/* harmony import */ var _time_picker_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./time-picker.js */ "./node_modules/@esri/calcite-components/dist/components/time-picker.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _openCloseComponent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./openCloseComponent.js */ "./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./math.js */ "./node_modules/@esri/calcite-components/dist/components/math.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _input_text_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./input-text.js */ "./node_modules/@esri/calcite-components/dist/components/input-text.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _popover_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./popover.js */ "./node_modules/@esri/calcite-components/dist/components/popover.js");
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./progress.js */ "./node_modules/@esri/calcite-components/dist/components/progress.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */





















const CSS = {
  toggleIcon: "toggle-icon",
};

var SECONDS_A_MINUTE = 60;
var SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
var SECONDS_A_DAY = SECONDS_A_HOUR * 24;
var SECONDS_A_WEEK = SECONDS_A_DAY * 7;
var MILLISECONDS_A_SECOND = 1e3;
var MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND; // English locales

var MS = 'millisecond';
var S = 'second';
var MIN = 'minute';
var H = 'hour';
var D = 'day';
var W = 'week';
var M = 'month';
var Q = 'quarter';
var Y = 'year';
var DATE = 'date';
var FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ssZ';
var INVALID_DATE_STRING = 'Invalid Date'; // regex

var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
var REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;

// English [en]
// We don't need weekdaysShort, weekdaysMin, monthsShort in en.js locale
const en = {
  name: 'en',
  weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
  ordinal: function ordinal(n) {
    var s = ['th', 'st', 'nd', 'rd'];
    var v = n % 100;
    return "[" + n + (s[(v - 20) % 10] || s[v] || s[0]) + "]";
  }
};

const en$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': en
});

var padStart = function padStart(string, length, pad) {
  var s = String(string);
  if (!s || s.length >= length) return string;
  return "" + Array(length + 1 - s.length).join(pad) + string;
};

var padZoneStr = function padZoneStr(instance) {
  var negMinutes = -instance.utcOffset();
  var minutes = Math.abs(negMinutes);
  var hourOffset = Math.floor(minutes / 60);
  var minuteOffset = minutes % 60;
  return "" + (negMinutes <= 0 ? '+' : '-') + padStart(hourOffset, 2, '0') + ":" + padStart(minuteOffset, 2, '0');
};

var monthDiff = function monthDiff(a, b) {
  // function from moment.js in order to keep the same result
  if (a.date() < b.date()) return -monthDiff(b, a);
  var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
  var anchor = a.clone().add(wholeMonthDiff, M);
  var c = b - anchor < 0;
  var anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), M);
  return +(-(wholeMonthDiff + (b - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)) || 0);
};

var absFloor = function absFloor(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
};

var prettyUnit = function prettyUnit(u) {
  var special = {
    M: M,
    y: Y,
    w: W,
    d: D,
    D: DATE,
    h: H,
    m: MIN,
    s: S,
    ms: MS,
    Q: Q
  };
  return special[u] || String(u || '').toLowerCase().replace(/s$/, '');
};

var isUndefined = function isUndefined(s) {
  return s === undefined;
};

const U = {
  s: padStart,
  z: padZoneStr,
  m: monthDiff,
  a: absFloor,
  p: prettyUnit,
  u: isUndefined
};

var L = 'en'; // global locale

var Ls = {}; // global loaded locale

Ls[L] = en;
var IS_DAYJS = '$isDayjsObject'; // eslint-disable-next-line no-use-before-define

var isDayjs = function isDayjs(d) {
  return d instanceof Dayjs || !!(d && d[IS_DAYJS]);
};

var parseLocale = function parseLocale(preset, object, isLocal) {
  var l;
  if (!preset) return L;

  if (typeof preset === 'string') {
    var presetLower = preset.toLowerCase();

    if (Ls[presetLower]) {
      l = presetLower;
    }

    if (object) {
      Ls[presetLower] = object;
      l = presetLower;
    }

    var presetSplit = preset.split('-');

    if (!l && presetSplit.length > 1) {
      return parseLocale(presetSplit[0]);
    }
  } else {
    var name = preset.name;
    Ls[name] = preset;
    l = name;
  }

  if (!isLocal && l) L = l;
  return l || !isLocal && L;
};

var dayjs = function dayjs(date, c) {
  if (isDayjs(date)) {
    return date.clone();
  } // eslint-disable-next-line no-nested-ternary


  var cfg = typeof c === 'object' ? c : {};
  cfg.date = date;
  cfg.args = arguments; // eslint-disable-line prefer-rest-params

  return new Dayjs(cfg); // eslint-disable-line no-use-before-define
};

var wrapper = function wrapper(date, instance) {
  return dayjs(date, {
    locale: instance.$L,
    utc: instance.$u,
    x: instance.$x,
    $offset: instance.$offset // todo: refactor; do not use this.$offset in you code

  });
};

var Utils = U; // for plugin use

Utils.l = parseLocale;
Utils.i = isDayjs;
Utils.w = wrapper;

var parseDate = function parseDate(cfg) {
  var date = cfg.date,
      utc = cfg.utc;
  if (date === null) return new Date(NaN); // null is invalid

  if (Utils.u(date)) return new Date(); // today

  if (date instanceof Date) return new Date(date);

  if (typeof date === 'string' && !/Z$/i.test(date)) {
    var d = date.match(REGEX_PARSE);

    if (d) {
      var m = d[2] - 1 || 0;
      var ms = (d[7] || '0').substring(0, 3);

      if (utc) {
        return new Date(Date.UTC(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms));
      }

      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }

  return new Date(date); // everything else
};

var Dayjs = /*#__PURE__*/function () {
  function Dayjs(cfg) {
    this.$L = parseLocale(cfg.locale, null, true);
    this.parse(cfg); // for plugin

    this.$x = this.$x || cfg.x || {};
    this[IS_DAYJS] = true;
  }

  var _proto = Dayjs.prototype;

  _proto.parse = function parse(cfg) {
    this.$d = parseDate(cfg);
    this.init();
  };

  _proto.init = function init() {
    var $d = this.$d;
    this.$y = $d.getFullYear();
    this.$M = $d.getMonth();
    this.$D = $d.getDate();
    this.$W = $d.getDay();
    this.$H = $d.getHours();
    this.$m = $d.getMinutes();
    this.$s = $d.getSeconds();
    this.$ms = $d.getMilliseconds();
  } // eslint-disable-next-line class-methods-use-this
  ;

  _proto.$utils = function $utils() {
    return Utils;
  };

  _proto.isValid = function isValid() {
    return !(this.$d.toString() === INVALID_DATE_STRING);
  };

  _proto.isSame = function isSame(that, units) {
    var other = dayjs(that);
    return this.startOf(units) <= other && other <= this.endOf(units);
  };

  _proto.isAfter = function isAfter(that, units) {
    return dayjs(that) < this.startOf(units);
  };

  _proto.isBefore = function isBefore(that, units) {
    return this.endOf(units) < dayjs(that);
  };

  _proto.$g = function $g(input, get, set) {
    if (Utils.u(input)) return this[get];
    return this.set(set, input);
  };

  _proto.unix = function unix() {
    return Math.floor(this.valueOf() / 1000);
  };

  _proto.valueOf = function valueOf() {
    // timezone(hour) * 60 * 60 * 1000 => ms
    return this.$d.getTime();
  };

  _proto.startOf = function startOf(units, _startOf) {
    var _this = this;

    // startOf -> endOf
    var isStartOf = !Utils.u(_startOf) ? _startOf : true;
    var unit = Utils.p(units);

    var instanceFactory = function instanceFactory(d, m) {
      var ins = Utils.w(_this.$u ? Date.UTC(_this.$y, m, d) : new Date(_this.$y, m, d), _this);
      return isStartOf ? ins : ins.endOf(D);
    };

    var instanceFactorySet = function instanceFactorySet(method, slice) {
      var argumentStart = [0, 0, 0, 0];
      var argumentEnd = [23, 59, 59, 999];
      return Utils.w(_this.toDate()[method].apply( // eslint-disable-line prefer-spread
      _this.toDate('s'), (isStartOf ? argumentStart : argumentEnd).slice(slice)), _this);
    };

    var $W = this.$W,
        $M = this.$M,
        $D = this.$D;
    var utcPad = "set" + (this.$u ? 'UTC' : '');

    switch (unit) {
      case Y:
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);

      case M:
        return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);

      case W:
        {
          var weekStart = this.$locale().weekStart || 0;
          var gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
          return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
        }

      case D:
      case DATE:
        return instanceFactorySet(utcPad + "Hours", 0);

      case H:
        return instanceFactorySet(utcPad + "Minutes", 1);

      case MIN:
        return instanceFactorySet(utcPad + "Seconds", 2);

      case S:
        return instanceFactorySet(utcPad + "Milliseconds", 3);

      default:
        return this.clone();
    }
  };

  _proto.endOf = function endOf(arg) {
    return this.startOf(arg, false);
  };

  _proto.$set = function $set(units, _int) {
    var _C$D$C$DATE$C$M$C$Y$C;

    // private set
    var unit = Utils.p(units);
    var utcPad = "set" + (this.$u ? 'UTC' : '');
    var name = (_C$D$C$DATE$C$M$C$Y$C = {}, _C$D$C$DATE$C$M$C$Y$C[D] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[DATE] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[M] = utcPad + "Month", _C$D$C$DATE$C$M$C$Y$C[Y] = utcPad + "FullYear", _C$D$C$DATE$C$M$C$Y$C[H] = utcPad + "Hours", _C$D$C$DATE$C$M$C$Y$C[MIN] = utcPad + "Minutes", _C$D$C$DATE$C$M$C$Y$C[S] = utcPad + "Seconds", _C$D$C$DATE$C$M$C$Y$C[MS] = utcPad + "Milliseconds", _C$D$C$DATE$C$M$C$Y$C)[unit];
    var arg = unit === D ? this.$D + (_int - this.$W) : _int;

    if (unit === M || unit === Y) {
      // clone is for badMutable plugin
      var date = this.clone().set(DATE, 1);
      date.$d[name](arg);
      date.init();
      this.$d = date.set(DATE, Math.min(this.$D, date.daysInMonth())).$d;
    } else if (name) this.$d[name](arg);

    this.init();
    return this;
  };

  _proto.set = function set(string, _int2) {
    return this.clone().$set(string, _int2);
  };

  _proto.get = function get(unit) {
    return this[Utils.p(unit)]();
  };

  _proto.add = function add(number, units) {
    var _this2 = this,
        _C$MIN$C$H$C$S$unit;

    number = Number(number); // eslint-disable-line no-param-reassign

    var unit = Utils.p(units);

    var instanceFactorySet = function instanceFactorySet(n) {
      var d = dayjs(_this2);
      return Utils.w(d.date(d.date() + Math.round(n * number)), _this2);
    };

    if (unit === M) {
      return this.set(M, this.$M + number);
    }

    if (unit === Y) {
      return this.set(Y, this.$y + number);
    }

    if (unit === D) {
      return instanceFactorySet(1);
    }

    if (unit === W) {
      return instanceFactorySet(7);
    }

    var step = (_C$MIN$C$H$C$S$unit = {}, _C$MIN$C$H$C$S$unit[MIN] = MILLISECONDS_A_MINUTE, _C$MIN$C$H$C$S$unit[H] = MILLISECONDS_A_HOUR, _C$MIN$C$H$C$S$unit[S] = MILLISECONDS_A_SECOND, _C$MIN$C$H$C$S$unit)[unit] || 1; // ms

    var nextTimeStamp = this.$d.getTime() + number * step;
    return Utils.w(nextTimeStamp, this);
  };

  _proto.subtract = function subtract(number, string) {
    return this.add(number * -1, string);
  };

  _proto.format = function format(formatStr) {
    var _this3 = this;

    var locale = this.$locale();
    if (!this.isValid()) return locale.invalidDate || INVALID_DATE_STRING;
    var str = formatStr || FORMAT_DEFAULT;
    var zoneStr = Utils.z(this);
    var $H = this.$H,
        $m = this.$m,
        $M = this.$M;
    var weekdays = locale.weekdays,
        months = locale.months,
        meridiem = locale.meridiem;

    var getShort = function getShort(arr, index, full, length) {
      return arr && (arr[index] || arr(_this3, str)) || full[index].slice(0, length);
    };

    var get$H = function get$H(num) {
      return Utils.s($H % 12 || 12, num, '0');
    };

    var meridiemFunc = meridiem || function (hour, minute, isLowercase) {
      var m = hour < 12 ? 'AM' : 'PM';
      return isLowercase ? m.toLowerCase() : m;
    };

    var matches = function matches(match) {
      switch (match) {
        case 'YY':
          return String(_this3.$y).slice(-2);

        case 'YYYY':
          return Utils.s(_this3.$y, 4, '0');

        case 'M':
          return $M + 1;

        case 'MM':
          return Utils.s($M + 1, 2, '0');

        case 'MMM':
          return getShort(locale.monthsShort, $M, months, 3);

        case 'MMMM':
          return getShort(months, $M);

        case 'D':
          return _this3.$D;

        case 'DD':
          return Utils.s(_this3.$D, 2, '0');

        case 'd':
          return String(_this3.$W);

        case 'dd':
          return getShort(locale.weekdaysMin, _this3.$W, weekdays, 2);

        case 'ddd':
          return getShort(locale.weekdaysShort, _this3.$W, weekdays, 3);

        case 'dddd':
          return weekdays[_this3.$W];

        case 'H':
          return String($H);

        case 'HH':
          return Utils.s($H, 2, '0');

        case 'h':
          return get$H(1);

        case 'hh':
          return get$H(2);

        case 'a':
          return meridiemFunc($H, $m, true);

        case 'A':
          return meridiemFunc($H, $m, false);

        case 'm':
          return String($m);

        case 'mm':
          return Utils.s($m, 2, '0');

        case 's':
          return String(_this3.$s);

        case 'ss':
          return Utils.s(_this3.$s, 2, '0');

        case 'SSS':
          return Utils.s(_this3.$ms, 3, '0');

        case 'Z':
          return zoneStr;
      }

      return null;
    };

    return str.replace(REGEX_FORMAT, function (match, $1) {
      return $1 || matches(match) || zoneStr.replace(':', '');
    }); // 'ZZ'
  };

  _proto.utcOffset = function utcOffset() {
    // Because a bug at FF24, we're rounding the timezone offset around 15 minutes
    // https://github.com/moment/moment/pull/1871
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  };

  _proto.diff = function diff(input, units, _float) {
    var _this4 = this;

    var unit = Utils.p(units);
    var that = dayjs(input);
    var zoneDelta = (that.utcOffset() - this.utcOffset()) * MILLISECONDS_A_MINUTE;
    var diff = this - that;

    var getMonth = function getMonth() {
      return Utils.m(_this4, that);
    };

    var result;

    switch (unit) {
      case Y:
        result = getMonth() / 12;
        break;

      case M:
        result = getMonth();
        break;

      case Q:
        result = getMonth() / 3;
        break;

      case W:
        result = (diff - zoneDelta) / MILLISECONDS_A_WEEK;
        break;

      case D:
        result = (diff - zoneDelta) / MILLISECONDS_A_DAY;
        break;

      case H:
        result = diff / MILLISECONDS_A_HOUR;
        break;

      case MIN:
        result = diff / MILLISECONDS_A_MINUTE;
        break;

      case S:
        result = diff / MILLISECONDS_A_SECOND;
        break;

      default:
        result = diff; // milliseconds

        break;
    }

    return _float ? result : Utils.a(result);
  };

  _proto.daysInMonth = function daysInMonth() {
    return this.endOf(M).$D;
  };

  _proto.$locale = function $locale() {
    // get locale object
    return Ls[this.$L];
  };

  _proto.locale = function locale(preset, object) {
    if (!preset) return this.$L;
    var that = this.clone();
    var nextLocaleName = parseLocale(preset, object, true);
    if (nextLocaleName) that.$L = nextLocaleName;
    return that;
  };

  _proto.clone = function clone() {
    return Utils.w(this.$d, this);
  };

  _proto.toDate = function toDate() {
    return new Date(this.valueOf());
  };

  _proto.toJSON = function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  };

  _proto.toISOString = function toISOString() {
    // ie 8 return
    // new Dayjs(this.valueOf() + this.$d.getTimezoneOffset() * 60000)
    // .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
    return this.$d.toISOString();
  };

  _proto.toString = function toString() {
    return this.$d.toUTCString();
  };

  return Dayjs;
}();

var proto = Dayjs.prototype;
dayjs.prototype = proto;
[['$ms', MS], ['$s', S], ['$m', MIN], ['$H', H], ['$W', D], ['$M', M], ['$y', Y], ['$D', DATE]].forEach(function (g) {
  proto[g[1]] = function (input) {
    return this.$g(input, g[0], g[1]);
  };
});

dayjs.extend = function (plugin, option) {
  if (!plugin.$i) {
    // install plugin only once
    plugin(option, Dayjs, dayjs);
    plugin.$i = true;
  }

  return dayjs;
};

dayjs.locale = parseLocale;
dayjs.isDayjs = isDayjs;

dayjs.unix = function (timestamp) {
  return dayjs(timestamp * 1e3);
};

dayjs.en = Ls[L];
dayjs.Ls = Ls;
dayjs.p = {};

// eslint-disable-next-line import/prefer-default-export
var t = function t(format) {
  return format.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (_, a, b) {
    return a || b.slice(1);
  });
};
var englishFormats = {
  LTS: 'h:mm:ss A',
  LT: 'h:mm A',
  L: 'MM/DD/YYYY',
  LL: 'MMMM D, YYYY',
  LLL: 'MMMM D, YYYY h:mm A',
  LLLL: 'dddd, MMMM D, YYYY h:mm A'
};
var u = function u(formatStr, formats) {
  return formatStr.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (_, a, b) {
    var B = b && b.toUpperCase();
    return a || formats[b] || englishFormats[b] || t(formats[B]);
  });
};

var formattingTokens = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g;
var match1 = /\d/; // 0 - 9

var match2 = /\d\d/; // 00 - 99

var match3 = /\d{3}/; // 000 - 999

var match4 = /\d{4}/; // 0000 - 9999

var match1to2 = /\d\d?/; // 0 - 99

var matchSigned = /[+-]?\d+/; // -inf - inf

var matchOffset = /[+-]\d\d:?(\d\d)?|Z/; // +00:00 -00:00 +0000 or -0000 +00 or Z

var matchWord = /\d*[^-_:/,()\s\d]+/; // Word

var locale = {};

var parseTwoDigitYear = function parseTwoDigitYear(input) {
  input = +input;
  return input + (input > 68 ? 1900 : 2000);
};

function offsetFromString(string) {
  if (!string) return 0;
  if (string === 'Z') return 0;
  var parts = string.match(/([+-]|\d\d)/g);
  var minutes = +(parts[1] * 60) + (+parts[2] || 0);
  return minutes === 0 ? 0 : parts[0] === '+' ? -minutes : minutes; // eslint-disable-line no-nested-ternary
}

var addInput = function addInput(property) {
  return function (input) {
    this[property] = +input;
  };
};

var zoneExpressions = [matchOffset, function (input) {
  var zone = this.zone || (this.zone = {});
  zone.offset = offsetFromString(input);
}];

var getLocalePart = function getLocalePart(name) {
  var part = locale[name];
  return part && (part.indexOf ? part : part.s.concat(part.f));
};

var meridiemMatch = function meridiemMatch(input, isLowerCase) {
  var isAfternoon;
  var _locale = locale,
      meridiem = _locale.meridiem;

  if (!meridiem) {
    isAfternoon = input === (isLowerCase ? 'pm' : 'PM');
  } else {
    for (var i = 1; i <= 24; i += 1) {
      // todo: fix input === meridiem(i, 0, isLowerCase)
      if (input.indexOf(meridiem(i, 0, isLowerCase)) > -1) {
        isAfternoon = i > 12;
        break;
      }
    }
  }

  return isAfternoon;
};

var expressions = {
  A: [matchWord, function (input) {
    this.afternoon = meridiemMatch(input, false);
  }],
  a: [matchWord, function (input) {
    this.afternoon = meridiemMatch(input, true);
  }],
  S: [match1, function (input) {
    this.milliseconds = +input * 100;
  }],
  SS: [match2, function (input) {
    this.milliseconds = +input * 10;
  }],
  SSS: [match3, function (input) {
    this.milliseconds = +input;
  }],
  s: [match1to2, addInput('seconds')],
  ss: [match1to2, addInput('seconds')],
  m: [match1to2, addInput('minutes')],
  mm: [match1to2, addInput('minutes')],
  H: [match1to2, addInput('hours')],
  h: [match1to2, addInput('hours')],
  HH: [match1to2, addInput('hours')],
  hh: [match1to2, addInput('hours')],
  D: [match1to2, addInput('day')],
  DD: [match2, addInput('day')],
  Do: [matchWord, function (input) {
    var _locale2 = locale,
        ordinal = _locale2.ordinal;

    var _input$match = input.match(/\d+/);

    this.day = _input$match[0];
    if (!ordinal) return;

    for (var i = 1; i <= 31; i += 1) {
      if (ordinal(i).replace(/\[|\]/g, '') === input) {
        this.day = i;
      }
    }
  }],
  M: [match1to2, addInput('month')],
  MM: [match2, addInput('month')],
  MMM: [matchWord, function (input) {
    var months = getLocalePart('months');
    var monthsShort = getLocalePart('monthsShort');
    var matchIndex = (monthsShort || months.map(function (_) {
      return _.slice(0, 3);
    })).indexOf(input) + 1;

    if (matchIndex < 1) {
      throw new Error();
    }

    this.month = matchIndex % 12 || matchIndex;
  }],
  MMMM: [matchWord, function (input) {
    var months = getLocalePart('months');
    var matchIndex = months.indexOf(input) + 1;

    if (matchIndex < 1) {
      throw new Error();
    }

    this.month = matchIndex % 12 || matchIndex;
  }],
  Y: [matchSigned, addInput('year')],
  YY: [match2, function (input) {
    this.year = parseTwoDigitYear(input);
  }],
  YYYY: [match4, addInput('year')],
  Z: zoneExpressions,
  ZZ: zoneExpressions
};

function correctHours(time) {
  var afternoon = time.afternoon;

  if (afternoon !== undefined) {
    var hours = time.hours;

    if (afternoon) {
      if (hours < 12) {
        time.hours += 12;
      }
    } else if (hours === 12) {
      time.hours = 0;
    }

    delete time.afternoon;
  }
}

function makeParser(format) {
  format = u(format, locale && locale.formats);
  var array = format.match(formattingTokens);
  var length = array.length;

  for (var i = 0; i < length; i += 1) {
    var token = array[i];
    var parseTo = expressions[token];
    var regex = parseTo && parseTo[0];
    var parser = parseTo && parseTo[1];

    if (parser) {
      array[i] = {
        regex: regex,
        parser: parser
      };
    } else {
      array[i] = token.replace(/^\[|\]$/g, '');
    }
  }

  return function (input) {
    var time = {};

    for (var _i = 0, start = 0; _i < length; _i += 1) {
      var _token = array[_i];

      if (typeof _token === 'string') {
        start += _token.length;
      } else {
        var _regex = _token.regex,
            _parser = _token.parser;
        var part = input.slice(start);

        var match = _regex.exec(part);

        var value = match[0];

        _parser.call(time, value);

        input = input.replace(value, '');
      }
    }

    correctHours(time);
    return time;
  };
}

var parseFormattedInput = function parseFormattedInput(input, format, utc) {
  try {
    if (['x', 'X'].indexOf(format) > -1) return new Date((format === 'X' ? 1000 : 1) * input);
    var parser = makeParser(format);

    var _parser2 = parser(input),
        year = _parser2.year,
        month = _parser2.month,
        day = _parser2.day,
        hours = _parser2.hours,
        minutes = _parser2.minutes,
        seconds = _parser2.seconds,
        milliseconds = _parser2.milliseconds,
        zone = _parser2.zone;

    var now = new Date();
    var d = day || (!year && !month ? now.getDate() : 1);
    var y = year || now.getFullYear();
    var M = 0;

    if (!(year && !month)) {
      M = month > 0 ? month - 1 : now.getMonth();
    }

    var h = hours || 0;
    var m = minutes || 0;
    var s = seconds || 0;
    var ms = milliseconds || 0;

    if (zone) {
      return new Date(Date.UTC(y, M, d, h, m, s, ms + zone.offset * 60 * 1000));
    }

    if (utc) {
      return new Date(Date.UTC(y, M, d, h, m, s, ms));
    }

    return new Date(y, M, d, h, m, s, ms);
  } catch (e) {
    return new Date(''); // Invalid Date
  }
};

const customParseFormat = (function (o, C, d) {
  d.p.customParseFormat = true;

  if (o && o.parseTwoDigitYear) {
    parseTwoDigitYear = o.parseTwoDigitYear;
  }

  var proto = C.prototype;
  var oldParse = proto.parse;

  proto.parse = function (cfg) {
    var date = cfg.date,
        utc = cfg.utc,
        args = cfg.args;
    this.$u = utc;
    var format = args[1];

    if (typeof format === 'string') {
      var isStrictWithoutLocale = args[2] === true;
      var isStrictWithLocale = args[3] === true;
      var isStrict = isStrictWithoutLocale || isStrictWithLocale;
      var pl = args[2];

      if (isStrictWithLocale) {
        pl = args[2];
      }

      locale = this.$locale();

      if (!isStrictWithoutLocale && pl) {
        locale = d.Ls[pl];
      }

      this.$d = parseFormattedInput(date, format, utc);
      this.init();
      if (pl && pl !== true) this.$L = this.locale(pl).$L; // use != to treat
      // input number 1410715640579 and format string '1410715640579' equal
      // eslint-disable-next-line eqeqeq

      if (isStrict && date != this.format(format)) {
        this.$d = new Date('');
      } // reset global locale to make parallel unit test


      locale = {};
    } else if (format instanceof Array) {
      var len = format.length;

      for (var i = 1; i <= len; i += 1) {
        args[1] = format[i - 1];
        var result = d.apply(this, args);

        if (result.isValid()) {
          this.$d = result.$d;
          this.$L = result.$L;
          this.init();
          break;
        }

        if (i === len) this.$d = new Date('');
      }
    } else {
      oldParse.call(this, cfg);
    }
  };
});

const localeData = (function (o, c, dayjs) {
  // locale needed later
  var proto = c.prototype;

  var getLocalePart = function getLocalePart(part) {
    return part && (part.indexOf ? part : part.s);
  };

  var getShort = function getShort(ins, target, full, num, localeOrder) {
    var locale = ins.name ? ins : ins.$locale();
    var targetLocale = getLocalePart(locale[target]);
    var fullLocale = getLocalePart(locale[full]);
    var result = targetLocale || fullLocale.map(function (f) {
      return f.slice(0, num);
    });
    if (!localeOrder) return result;
    var weekStart = locale.weekStart;
    return result.map(function (_, index) {
      return result[(index + (weekStart || 0)) % 7];
    });
  };

  var getDayjsLocaleObject = function getDayjsLocaleObject() {
    return dayjs.Ls[dayjs.locale()];
  };

  var getLongDateFormat = function getLongDateFormat(l, format) {
    return l.formats[format] || t(l.formats[format.toUpperCase()]);
  };

  var localeData = function localeData() {
    var _this = this;

    return {
      months: function months(instance) {
        return instance ? instance.format('MMMM') : getShort(_this, 'months');
      },
      monthsShort: function monthsShort(instance) {
        return instance ? instance.format('MMM') : getShort(_this, 'monthsShort', 'months', 3);
      },
      firstDayOfWeek: function firstDayOfWeek() {
        return _this.$locale().weekStart || 0;
      },
      weekdays: function weekdays(instance) {
        return instance ? instance.format('dddd') : getShort(_this, 'weekdays');
      },
      weekdaysMin: function weekdaysMin(instance) {
        return instance ? instance.format('dd') : getShort(_this, 'weekdaysMin', 'weekdays', 2);
      },
      weekdaysShort: function weekdaysShort(instance) {
        return instance ? instance.format('ddd') : getShort(_this, 'weekdaysShort', 'weekdays', 3);
      },
      longDateFormat: function longDateFormat(format) {
        return getLongDateFormat(_this.$locale(), format);
      },
      meridiem: this.$locale().meridiem,
      ordinal: this.$locale().ordinal
    };
  };

  proto.localeData = function () {
    return localeData.bind(this)();
  };

  dayjs.localeData = function () {
    var localeObject = getDayjsLocaleObject();
    return {
      firstDayOfWeek: function firstDayOfWeek() {
        return localeObject.weekStart || 0;
      },
      weekdays: function weekdays() {
        return dayjs.weekdays();
      },
      weekdaysShort: function weekdaysShort() {
        return dayjs.weekdaysShort();
      },
      weekdaysMin: function weekdaysMin() {
        return dayjs.weekdaysMin();
      },
      months: function months() {
        return dayjs.months();
      },
      monthsShort: function monthsShort() {
        return dayjs.monthsShort();
      },
      longDateFormat: function longDateFormat(format) {
        return getLongDateFormat(localeObject, format);
      },
      meridiem: localeObject.meridiem,
      ordinal: localeObject.ordinal
    };
  };

  dayjs.months = function () {
    return getShort(getDayjsLocaleObject(), 'months');
  };

  dayjs.monthsShort = function () {
    return getShort(getDayjsLocaleObject(), 'monthsShort', 'months', 3);
  };

  dayjs.weekdays = function (localeOrder) {
    return getShort(getDayjsLocaleObject(), 'weekdays', null, null, localeOrder);
  };

  dayjs.weekdaysShort = function (localeOrder) {
    return getShort(getDayjsLocaleObject(), 'weekdaysShort', 'weekdays', 3, localeOrder);
  };

  dayjs.weekdaysMin = function (localeOrder) {
    return getShort(getDayjsLocaleObject(), 'weekdaysMin', 'weekdays', 2, localeOrder);
  };
});

const localizedFormat = (function (o, c, d) {
  var proto = c.prototype;
  var oldFormat = proto.format;
  d.en.formats = englishFormats;

  proto.format = function (formatStr) {
    if (formatStr === void 0) {
      formatStr = FORMAT_DEFAULT;
    }

    var _this$$locale = this.$locale(),
        _this$$locale$formats = _this$$locale.formats,
        formats = _this$$locale$formats === void 0 ? {} : _this$$locale$formats;

    var result = u(formatStr, formats);
    return oldFormat.call(this, result);
  };
});

// Plugin template from https://day.js.org/docs/en/plugin/plugin
const preParsePostFormat = (function (option, dayjsClass) {
  var oldParse = dayjsClass.prototype.parse;

  dayjsClass.prototype.parse = function (cfg) {
    if (typeof cfg.date === 'string') {
      var locale = this.$locale();
      cfg.date = locale && locale.preparse ? locale.preparse(cfg.date) : cfg.date;
    } // original parse result


    return oldParse.bind(this)(cfg);
  }; // // overriding existing API
  // // e.g. extend dayjs().format()


  var oldFormat = dayjsClass.prototype.format;

  dayjsClass.prototype.format = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // original format result
    var result = oldFormat.call.apply(oldFormat, [this].concat(args)); // return modified result

    var locale = this.$locale();
    return locale && locale.postformat ? locale.postformat(result) : result;
  };

  var oldFromTo = dayjsClass.prototype.fromToBase;

  if (oldFromTo) {
    dayjsClass.prototype.fromToBase = function (input, withoutSuffix, instance, isFrom) {
      var locale = this.$locale() || instance.$locale(); // original format result

      return oldFromTo.call(this, input, withoutSuffix, instance, isFrom, locale && locale.postformat);
    };
  }
});

const updateLocale = (function (option, Dayjs, dayjs) {
  dayjs.updateLocale = function (locale, customConfig) {
    var localeList = dayjs.Ls;
    var localeConfig = localeList[locale];
    if (!localeConfig) return;
    var customConfigKeys = customConfig ? Object.keys(customConfig) : [];
    customConfigKeys.forEach(function (c) {
      localeConfig[c] = customConfig[c];
    });
    return localeConfig; // eslint-disable-line consistent-return
  };
});

const inputTimePickerCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;-webkit-user-select:none;user-select:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([scale=s]){--calcite-toggle-spacing:0.5rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 1rem)}:host([scale=m]){--calcite-toggle-spacing:0.75rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 1.5rem)}:host([scale=l]){--calcite-toggle-spacing:1rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 2rem)}.input-wrapper{position:relative}.toggle-icon{position:absolute;display:flex;cursor:pointer;align-items:center;inset-inline-end:0;inset-block:0;padding-inline:var(--calcite-toggle-spacing)}:host([hidden]){display:none}[hidden]{display:none}";

// some bundlers (e.g., Webpack) need dynamic import paths to be static
const supportedDayjsLocaleToLocaleConfigImport = new Map([
  ["ar", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_ar_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ar.js */ "./node_modules/@esri/calcite-components/dist/components/ar.js"))],
  ["bg", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_bg_js").then(__webpack_require__.bind(__webpack_require__, /*! ./bg.js */ "./node_modules/@esri/calcite-components/dist/components/bg.js"))],
  ["bs", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_bs_js").then(__webpack_require__.bind(__webpack_require__, /*! ./bs.js */ "./node_modules/@esri/calcite-components/dist/components/bs.js"))],
  ["ca", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_ca_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ca.js */ "./node_modules/@esri/calcite-components/dist/components/ca.js"))],
  ["cs", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_cs_js").then(__webpack_require__.bind(__webpack_require__, /*! ./cs.js */ "./node_modules/@esri/calcite-components/dist/components/cs.js"))],
  ["da", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_da_js").then(__webpack_require__.bind(__webpack_require__, /*! ./da.js */ "./node_modules/@esri/calcite-components/dist/components/da.js"))],
  ["de", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_de_js").then(__webpack_require__.bind(__webpack_require__, /*! ./de.js */ "./node_modules/@esri/calcite-components/dist/components/de.js"))],
  ["de-at", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_de-at_js").then(__webpack_require__.bind(__webpack_require__, /*! ./de-at.js */ "./node_modules/@esri/calcite-components/dist/components/de-at.js"))],
  ["de-ch", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_de-ch_js").then(__webpack_require__.bind(__webpack_require__, /*! ./de-ch.js */ "./node_modules/@esri/calcite-components/dist/components/de-ch.js"))],
  ["el", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_el_js").then(__webpack_require__.bind(__webpack_require__, /*! ./el.js */ "./node_modules/@esri/calcite-components/dist/components/el.js"))],
  ["en", () => Promise.resolve().then(function () { return en$1; })],
  ["en-au", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_en-au_js").then(__webpack_require__.bind(__webpack_require__, /*! ./en-au.js */ "./node_modules/@esri/calcite-components/dist/components/en-au.js"))],
  ["en-ca", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_en-ca_js").then(__webpack_require__.bind(__webpack_require__, /*! ./en-ca.js */ "./node_modules/@esri/calcite-components/dist/components/en-ca.js"))],
  ["en-gb", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_en-gb_js").then(__webpack_require__.bind(__webpack_require__, /*! ./en-gb.js */ "./node_modules/@esri/calcite-components/dist/components/en-gb.js"))],
  ["es", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_es_js").then(__webpack_require__.bind(__webpack_require__, /*! ./es.js */ "./node_modules/@esri/calcite-components/dist/components/es.js"))],
  ["es-mx", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_es-mx_js").then(__webpack_require__.bind(__webpack_require__, /*! ./es-mx.js */ "./node_modules/@esri/calcite-components/dist/components/es-mx.js"))],
  ["et", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_et_js").then(__webpack_require__.bind(__webpack_require__, /*! ./et.js */ "./node_modules/@esri/calcite-components/dist/components/et.js"))],
  ["fi", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_fi_js").then(__webpack_require__.bind(__webpack_require__, /*! ./fi.js */ "./node_modules/@esri/calcite-components/dist/components/fi.js"))],
  ["fr", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_fr_js").then(__webpack_require__.bind(__webpack_require__, /*! ./fr.js */ "./node_modules/@esri/calcite-components/dist/components/fr.js"))],
  ["fr-ch", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_fr-ch_js").then(__webpack_require__.bind(__webpack_require__, /*! ./fr-ch.js */ "./node_modules/@esri/calcite-components/dist/components/fr-ch.js"))],
  ["he", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_he_js").then(__webpack_require__.bind(__webpack_require__, /*! ./he.js */ "./node_modules/@esri/calcite-components/dist/components/he.js"))],
  ["hi", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_hi_js").then(__webpack_require__.bind(__webpack_require__, /*! ./hi.js */ "./node_modules/@esri/calcite-components/dist/components/hi.js"))],
  ["hr", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_hr_js").then(__webpack_require__.bind(__webpack_require__, /*! ./hr.js */ "./node_modules/@esri/calcite-components/dist/components/hr.js"))],
  ["hu", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_hu_js").then(__webpack_require__.bind(__webpack_require__, /*! ./hu.js */ "./node_modules/@esri/calcite-components/dist/components/hu.js"))],
  ["id", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_id_js").then(__webpack_require__.bind(__webpack_require__, /*! ./id.js */ "./node_modules/@esri/calcite-components/dist/components/id.js"))],
  ["it", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_it_js").then(__webpack_require__.bind(__webpack_require__, /*! ./it.js */ "./node_modules/@esri/calcite-components/dist/components/it.js"))],
  ["it-ch", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_it-ch_js").then(__webpack_require__.bind(__webpack_require__, /*! ./it-ch.js */ "./node_modules/@esri/calcite-components/dist/components/it-ch.js"))],
  ["ja", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_ja_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ja.js */ "./node_modules/@esri/calcite-components/dist/components/ja.js"))],
  ["ko", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_ko_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ko.js */ "./node_modules/@esri/calcite-components/dist/components/ko.js"))],
  ["lt", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_lt_js").then(__webpack_require__.bind(__webpack_require__, /*! ./lt.js */ "./node_modules/@esri/calcite-components/dist/components/lt.js"))],
  ["lv", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_lv_js").then(__webpack_require__.bind(__webpack_require__, /*! ./lv.js */ "./node_modules/@esri/calcite-components/dist/components/lv.js"))],
  ["mk", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_mk_js").then(__webpack_require__.bind(__webpack_require__, /*! ./mk.js */ "./node_modules/@esri/calcite-components/dist/components/mk.js"))],
  ["nl", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_nl_js").then(__webpack_require__.bind(__webpack_require__, /*! ./nl.js */ "./node_modules/@esri/calcite-components/dist/components/nl.js"))],
  ["nb", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_nb_js").then(__webpack_require__.bind(__webpack_require__, /*! ./nb.js */ "./node_modules/@esri/calcite-components/dist/components/nb.js"))],
  ["pl", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_pl_js").then(__webpack_require__.bind(__webpack_require__, /*! ./pl.js */ "./node_modules/@esri/calcite-components/dist/components/pl.js"))],
  ["pt", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_pt_js").then(__webpack_require__.bind(__webpack_require__, /*! ./pt.js */ "./node_modules/@esri/calcite-components/dist/components/pt.js"))],
  ["pt-br", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_pt-br_js").then(__webpack_require__.bind(__webpack_require__, /*! ./pt-br.js */ "./node_modules/@esri/calcite-components/dist/components/pt-br.js"))],
  ["ro", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_ro_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ro.js */ "./node_modules/@esri/calcite-components/dist/components/ro.js"))],
  ["ru", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_ru_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ru.js */ "./node_modules/@esri/calcite-components/dist/components/ru.js"))],
  ["sk", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_sk_js").then(__webpack_require__.bind(__webpack_require__, /*! ./sk.js */ "./node_modules/@esri/calcite-components/dist/components/sk.js"))],
  ["sl", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_sl_js").then(__webpack_require__.bind(__webpack_require__, /*! ./sl.js */ "./node_modules/@esri/calcite-components/dist/components/sl.js"))],
  ["sr", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_sr_js").then(__webpack_require__.bind(__webpack_require__, /*! ./sr.js */ "./node_modules/@esri/calcite-components/dist/components/sr.js"))],
  ["sv", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_sv_js").then(__webpack_require__.bind(__webpack_require__, /*! ./sv.js */ "./node_modules/@esri/calcite-components/dist/components/sv.js"))],
  ["th", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_th_js").then(__webpack_require__.bind(__webpack_require__, /*! ./th.js */ "./node_modules/@esri/calcite-components/dist/components/th.js"))],
  ["tr", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_tr_js").then(__webpack_require__.bind(__webpack_require__, /*! ./tr.js */ "./node_modules/@esri/calcite-components/dist/components/tr.js"))],
  ["uk", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_uk_js").then(__webpack_require__.bind(__webpack_require__, /*! ./uk.js */ "./node_modules/@esri/calcite-components/dist/components/uk.js"))],
  ["vi", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_vi_js").then(__webpack_require__.bind(__webpack_require__, /*! ./vi.js */ "./node_modules/@esri/calcite-components/dist/components/vi.js"))],
  ["zh-cn", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_zh-cn_js").then(__webpack_require__.bind(__webpack_require__, /*! ./zh-cn.js */ "./node_modules/@esri/calcite-components/dist/components/zh-cn.js"))],
  ["zh-hk", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_zh-hk_js").then(__webpack_require__.bind(__webpack_require__, /*! ./zh-hk.js */ "./node_modules/@esri/calcite-components/dist/components/zh-hk.js"))],
  ["zh-tw", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_components_zh-tw_js").then(__webpack_require__.bind(__webpack_require__, /*! ./zh-tw.js */ "./node_modules/@esri/calcite-components/dist/components/zh-tw.js"))],
]);
dayjs.extend(customParseFormat);
dayjs.extend(localeData);
dayjs.extend(localizedFormat);
dayjs.extend(preParsePostFormat);
dayjs.extend(updateLocale);
const InputTimePicker = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_19__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_19__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInputTimePickerBeforeClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_19__.createEvent)(this, "calciteInputTimePickerBeforeClose", 6);
    this.calciteInputTimePickerBeforeOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_19__.createEvent)(this, "calciteInputTimePickerBeforeOpen", 6);
    this.calciteInputTimePickerChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_19__.createEvent)(this, "calciteInputTimePickerChange", 7);
    this.calciteInputTimePickerClose = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_19__.createEvent)(this, "calciteInputTimePickerClose", 6);
    this.calciteInputTimePickerOpen = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_19__.createEvent)(this, "calciteInputTimePickerOpen", 6);
    this.focusOnOpen = false;
    this.dialogId = `time-picker-dialog--${(0,_guid_js__WEBPACK_IMPORTED_MODULE_1__.g)()}`;
    /** whether the value of the input was changed as a result of user typing or not */
    this.userChangedValue = false;
    this.referenceElementId = `input-time-picker-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_1__.g)()}`;
    this.openTransitionProp = "opacity";
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    this.hostBlurHandler = () => {
      const inputValue = this.calciteInputEl.value;
      const delocalizedInputValue = this.delocalizeTimeString(inputValue);
      if (!delocalizedInputValue) {
        this.setValue("");
        return;
      }
      if (delocalizedInputValue !== this.value) {
        this.setValue(delocalizedInputValue);
      }
      const localizedTimeString = (0,_time_picker_js__WEBPACK_IMPORTED_MODULE_8__.l)({
        value: this.value,
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        includeSeconds: this.shouldIncludeSeconds(),
        fractionalSecondDigits: (0,_math_js__WEBPACK_IMPORTED_MODULE_11__.d)(this.step),
      });
      if (localizedTimeString !== inputValue) {
        this.setInputValue(localizedTimeString);
      }
      this.deactivate();
    };
    this.calciteInternalInputFocusHandler = (event) => {
      if (!this.readOnly) {
        event.stopPropagation();
      }
    };
    this.calciteInternalInputInputHandler = (event) => {
      const { effectiveLocale: locale, numberingSystem } = this;
      if (numberingSystem && numberingSystem !== "latn") {
        const target = event.target;
        _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.numberFormatOptions = {
          locale,
          numberingSystem,
          useGrouping: false,
        };
        const valueInNumberingSystem = _locale_js__WEBPACK_IMPORTED_MODULE_6__.n
          .delocalize(target.value)
          .split("")
          .map((char) => _key_js__WEBPACK_IMPORTED_MODULE_3__.n.includes(char)
          ? _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.numberFormatter.format(Number(char))
          : char)
          .join("");
        this.setInputValue(valueInNumberingSystem);
      }
    };
    this.timePickerChangeHandler = (event) => {
      event.stopPropagation();
      const target = event.target;
      const value = target.value;
      const includeSeconds = this.shouldIncludeSeconds();
      this.setValue((0,_time_picker_js__WEBPACK_IMPORTED_MODULE_8__.t)(value, includeSeconds));
      this.setInputValue((0,_time_picker_js__WEBPACK_IMPORTED_MODULE_8__.l)({
        value,
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        includeSeconds,
        fractionalSecondDigits: (0,_math_js__WEBPACK_IMPORTED_MODULE_11__.d)(this.step),
      }));
    };
    this.popoverCloseHandler = () => {
      (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_7__.d)(this, {
        onDeactivate: () => {
          this.calciteInputEl.setFocus();
          this.focusOnOpen = false;
        },
      });
      this.open = false;
    };
    this.popoverOpenHandler = () => {
      (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_7__.a)(this, {
        onActivate: () => {
          if (this.focusOnOpen) {
            this.calciteTimePickerEl.setFocus();
            this.focusOnOpen = false;
          }
        },
      });
    };
    this.keyDownHandler = (event) => {
      const { defaultPrevented, key } = event;
      if (defaultPrevented) {
        return;
      }
      if (key === "Enter") {
        if ((0,_form_js__WEBPACK_IMPORTED_MODULE_0__.s)(this)) {
          event.preventDefault();
          this.calciteInputEl.setFocus();
        }
        if (event.composedPath().includes(this.calciteTimePickerEl)) {
          return;
        }
        const newValue = this.delocalizeTimeString(this.calciteInputEl.value);
        if ((0,_time_picker_js__WEBPACK_IMPORTED_MODULE_8__.i)(newValue)) {
          this.setValue(newValue);
          const localizedTimeString = (0,_time_picker_js__WEBPACK_IMPORTED_MODULE_8__.l)({
            value: this.value,
            locale: this.effectiveLocale,
            numberingSystem: this.numberingSystem,
            includeSeconds: this.shouldIncludeSeconds(),
            fractionalSecondDigits: (0,_math_js__WEBPACK_IMPORTED_MODULE_11__.d)(this.step),
          });
          if (newValue && this.calciteInputEl.value !== localizedTimeString) {
            this.setInputValue(localizedTimeString);
          }
        }
      }
      else if (key === "ArrowDown") {
        this.open = true;
        this.focusOnOpen = true;
        event.preventDefault();
      }
      else if (key === "Escape" && this.open) {
        this.open = false;
        event.preventDefault();
        this.calciteInputEl.setFocus();
      }
    };
    this.setCalcitePopoverEl = (el) => {
      this.popoverEl = el;
    };
    this.setInputAndTransitionEl = (el) => {
      this.calciteInputEl = el;
      this.transitionEl = el;
    };
    this.setCalciteTimePickerEl = (el) => {
      this.calciteTimePickerEl = el;
      (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_7__.c)(this, {
        focusTrapEl: el,
        focusTrapOptions: {
          initialFocus: false,
          setReturnFocus: false,
        },
      });
    };
    this.setInputValue = (newInputValue) => {
      if (!this.calciteInputEl) {
        return;
      }
      this.calciteInputEl.value = newInputValue;
    };
    /**
     * Sets the value and emits a change event.
     * This is used to update the value as a result of user interaction.
     *
     * @param value
     */
    this.setValue = (value) => {
      const oldValue = this.value;
      const newValue = (0,_time_picker_js__WEBPACK_IMPORTED_MODULE_8__.f)(value) || "";
      if (newValue === oldValue) {
        return;
      }
      this.userChangedValue = true;
      this.value = newValue || "";
      const changeEvent = this.calciteInputTimePickerChange.emit();
      if (changeEvent.defaultPrevented) {
        this.userChangedValue = false;
        this.value = oldValue;
        this.setInputValue((0,_time_picker_js__WEBPACK_IMPORTED_MODULE_8__.l)({
          value: oldValue,
          locale: this.effectiveLocale,
          numberingSystem: this.numberingSystem,
          includeSeconds: this.shouldIncludeSeconds(),
          fractionalSecondDigits: (0,_math_js__WEBPACK_IMPORTED_MODULE_11__.d)(this.step),
        }));
      }
    };
    /**
     * Sets the value directly without emitting a change event.
     * This is used to update the value on initial load and when props change that are not the result of user interaction.
     *
     * @param value
     */
    this.setValueDirectly = (value) => {
      const includeSeconds = this.shouldIncludeSeconds();
      this.value = (0,_time_picker_js__WEBPACK_IMPORTED_MODULE_8__.t)(value, includeSeconds);
      this.setInputValue(this.value
        ? (0,_time_picker_js__WEBPACK_IMPORTED_MODULE_8__.l)({
          value: this.value,
          includeSeconds,
          locale: this.effectiveLocale,
          numberingSystem: this.numberingSystem,
          fractionalSecondDigits: (0,_math_js__WEBPACK_IMPORTED_MODULE_11__.d)(this.step),
        })
        : "");
    };
    this.onInputWrapperClick = () => {
      this.open = !this.open;
    };
    this.deactivate = () => {
      this.open = false;
    };
    this.open = false;
    this.disabled = false;
    this.focusTrapDisabled = false;
    this.form = undefined;
    this.readOnly = false;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.name = undefined;
    this.numberingSystem = undefined;
    this.required = false;
    this.scale = "m";
    this.status = "idle";
    this.overlayPositioning = "absolute";
    this.placement = "auto";
    this.step = 60;
    this.value = null;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
  }
  openHandler(open) {
    (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_10__.o)(this);
    if (this.disabled || this.readOnly) {
      this.open = false;
      return;
    }
    if (open) {
      this.reposition(true);
    }
  }
  handleFocusTrapDisabled(focusTrapDisabled) {
    if (!this.open) {
      return;
    }
    focusTrapDisabled ? (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_7__.d)(this) : (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_7__.a)(this);
  }
  handleDisabledAndReadOnlyChange(value) {
    if (!value) {
      this.open = false;
    }
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  numberingSystemWatcher(numberingSystem) {
    this.setInputValue((0,_time_picker_js__WEBPACK_IMPORTED_MODULE_8__.l)({
      value: this.value,
      locale: this.effectiveLocale,
      numberingSystem,
      includeSeconds: this.shouldIncludeSeconds(),
      fractionalSecondDigits: (0,_math_js__WEBPACK_IMPORTED_MODULE_11__.d)(this.step),
    }));
  }
  stepWatcher(newStep, oldStep) {
    if ((oldStep >= 60 && newStep > 0 && newStep < 60) ||
      (newStep >= 60 && oldStep > 0 && oldStep < 60)) {
      this.setValueDirectly(this.value);
    }
  }
  valueWatcher(newValue) {
    if (!this.userChangedValue) {
      this.setValueDirectly(newValue);
    }
    this.userChangedValue = false;
  }
  async effectiveLocaleWatcher(locale) {
    await this.loadDateTimeLocaleData();
    this.setInputValue((0,_time_picker_js__WEBPACK_IMPORTED_MODULE_8__.l)({
      value: this.value,
      locale,
      numberingSystem: this.numberingSystem,
      includeSeconds: this.shouldIncludeSeconds(),
      fractionalSecondDigits: (0,_math_js__WEBPACK_IMPORTED_MODULE_11__.d)(this.step),
    }));
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    this.el.focus();
  }
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(delayed = false) {
    this.popoverEl?.reposition(delayed);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  onBeforeOpen() {
    this.calciteInputTimePickerBeforeOpen.emit();
  }
  onOpen() {
    this.calciteInputTimePickerOpen.emit();
  }
  onBeforeClose() {
    this.calciteInputTimePickerBeforeClose.emit();
  }
  onClose() {
    this.calciteInputTimePickerClose.emit();
  }
  delocalizeTimeString(value) {
    // we need to set the corresponding locale before parsing, otherwise it defaults to English (possible dayjs bug)
    dayjs.locale(this.effectiveLocale.toLowerCase());
    const nonFractionalSecondParts = this.delocalizeTimeStringToParts(value);
    let delocalizedTimeString;
    if (this.shouldIncludeFractionalSeconds()) {
      const stepPrecision = (0,_math_js__WEBPACK_IMPORTED_MODULE_11__.d)(this.step);
      const centisecondParts = this.delocalizeTimeStringToParts(value, "S");
      if (stepPrecision === 1) {
        delocalizedTimeString =
          centisecondParts.millisecond !== 0
            ? this.getTimeStringFromParts(centisecondParts)
            : this.getTimeStringFromParts(nonFractionalSecondParts);
      }
      else {
        const decisecondParts = this.delocalizeTimeStringToParts(value, "SS");
        if (stepPrecision === 2) {
          if (decisecondParts.millisecond !== 0) {
            delocalizedTimeString = this.getTimeStringFromParts(decisecondParts);
          }
          else if (centisecondParts.millisecond !== 0) {
            delocalizedTimeString = this.getTimeStringFromParts(centisecondParts);
          }
          else {
            delocalizedTimeString = this.getTimeStringFromParts(nonFractionalSecondParts);
          }
        }
        else if (stepPrecision >= 3) {
          const millisecondParts = this.delocalizeTimeStringToParts(value, "SSS");
          if (millisecondParts.millisecond !== 0) {
            delocalizedTimeString = this.getTimeStringFromParts(millisecondParts);
          }
          else if (decisecondParts.millisecond !== 0) {
            delocalizedTimeString = this.getTimeStringFromParts(decisecondParts);
          }
          else if (centisecondParts.millisecond !== 0) {
            delocalizedTimeString = this.getTimeStringFromParts(centisecondParts);
          }
          else {
            delocalizedTimeString = this.getTimeStringFromParts(nonFractionalSecondParts);
          }
        }
      }
    }
    else {
      delocalizedTimeString = this.getTimeStringFromParts(nonFractionalSecondParts);
    }
    return delocalizedTimeString;
  }
  delocalizeTimeStringToParts(localizedTimeString, fractionalSecondFormatToken) {
    const ltsFormatString = this.localeConfig?.formats?.LTS;
    const fractionalSecondTokenMatch = ltsFormatString.match(/ss\.*(S+)/g);
    if (fractionalSecondFormatToken && this.shouldIncludeFractionalSeconds()) {
      const secondFormatToken = `ss.${fractionalSecondFormatToken}`;
      this.localeConfig.formats.LTS = fractionalSecondTokenMatch
        ? ltsFormatString.replace(fractionalSecondTokenMatch[0], secondFormatToken)
        : ltsFormatString.replace("ss", secondFormatToken);
    }
    else if (fractionalSecondTokenMatch) {
      this.localeConfig.formats.LTS = ltsFormatString.replace(fractionalSecondTokenMatch[0], "ss");
    }
    dayjs.updateLocale(this.getSupportedDayjsLocale((0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.effectiveLocale)), this.localeConfig);
    const dayjsParseResult = dayjs(localizedTimeString, ["LTS", "LT"]);
    if (dayjsParseResult.isValid()) {
      return {
        hour: dayjsParseResult.get("hour"),
        minute: dayjsParseResult.get("minute"),
        second: dayjsParseResult.get("second"),
        millisecond: dayjsParseResult.get("millisecond"),
      };
    }
    return {
      hour: null,
      minute: null,
      second: null,
      millisecond: null,
    };
  }
  getTimeStringFromParts(parts) {
    let timeString = "";
    if (!parts) {
      return timeString;
    }
    if (parts.hour !== null && parts.minute !== null) {
      timeString = `${(0,_time_picker_js__WEBPACK_IMPORTED_MODULE_8__.a)(parts.hour)}:${(0,_time_picker_js__WEBPACK_IMPORTED_MODULE_8__.a)(parts.minute)}`;
      if (this.shouldIncludeSeconds() && parts.second !== null) {
        timeString += `:${(0,_time_picker_js__WEBPACK_IMPORTED_MODULE_8__.a)(parts.second)}`;
        if (this.shouldIncludeFractionalSeconds() && parts.millisecond !== null) {
          const second = (parts.millisecond * 0.001).toFixed((0,_math_js__WEBPACK_IMPORTED_MODULE_11__.d)(this.step));
          timeString += `.${second.toString().replace("0.", "")}`;
        }
      }
    }
    return timeString;
  }
  getSupportedDayjsLocale(locale) {
    const dayjsLocale = locale.toLowerCase();
    if (dayjsLocale === "no") {
      return "nb";
    }
    if (dayjsLocale === "pt-pt") {
      return "pt";
    }
    return dayjsLocale;
  }
  async loadDateTimeLocaleData() {
    let supportedLocale = (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.effectiveLocale).toLowerCase();
    supportedLocale = this.getSupportedDayjsLocale(supportedLocale);
    const { default: localeConfig } = await supportedDayjsLocaleToLocaleConfigImport.get(supportedLocale)();
    this.localeConfig = localeConfig;
    dayjs.locale(this.localeConfig, null, true);
    dayjs.updateLocale(supportedLocale, this.getExtendedLocaleConfig(supportedLocale));
  }
  getExtendedLocaleConfig(locale) {
    if (locale === "ar") {
      return {
        meridiem: (hour) => (hour > 12 ? "م" : "ص"),
        formats: {
          LT: "HH:mm A",
          LTS: "HH:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm A",
          LLLL: "dddd D MMMM YYYY HH:mm A",
        },
      };
    }
    if (locale === "en-au") {
      return {
        meridiem: (hour) => (hour > 12 ? "pm" : "am"),
      };
    }
    if (locale === "en-ca") {
      return {
        meridiem: (hour) => (hour > 12 ? "p.m." : "a.m."),
      };
    }
    if (locale === "el") {
      return {
        meridiem: (hour) => (hour > 12 ? "μ.μ." : "π.μ."),
      };
    }
    if (locale === "hi") {
      return {
        formats: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, h:mm A",
          LLLL: "dddd, D MMMM YYYY, h:mm A",
        },
        meridiem: (hour) => (hour > 12 ? "pm" : "am"),
      };
    }
    if (locale === "ko") {
      return {
        meridiem: (hour) => (hour > 12 ? "오후" : "오전"),
      };
    }
    if (locale === "zh-tw") {
      return {
        formats: {
          LT: "AHH:mm",
          LTS: "AHH:mm:ss",
        },
      };
    }
    if (locale === "zh-hk") {
      return {
        formats: {
          LT: "AHH:mm",
          LTS: "AHH:mm:ss",
        },
        meridiem: (hour) => (hour > 12 ? "下午" : "上午"),
      };
    }
  }
  onLabelClick() {
    this.setFocus();
  }
  shouldIncludeSeconds() {
    return this.step < 60;
  }
  shouldIncludeFractionalSeconds() {
    return (0,_math_js__WEBPACK_IMPORTED_MODULE_11__.d)(this.step) > 0;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    if ((0,_time_picker_js__WEBPACK_IMPORTED_MODULE_8__.i)(this.value)) {
      this.setValueDirectly(this.value);
    }
    else {
      this.value = undefined;
    }
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_9__.c)(this);
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.a)(this);
    await Promise.all([(0,_t9n_js__WEBPACK_IMPORTED_MODULE_9__.s)(this), this.loadDateTimeLocaleData()]);
    if (this.open) {
      (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_10__.o)(this);
    }
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
    if ((0,_time_picker_js__WEBPACK_IMPORTED_MODULE_8__.i)(this.value)) {
      this.setInputValue((0,_time_picker_js__WEBPACK_IMPORTED_MODULE_8__.l)({
        value: this.value,
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        includeSeconds: this.shouldIncludeSeconds(),
        fractionalSecondDigits: (0,_math_js__WEBPACK_IMPORTED_MODULE_11__.d)(this.step),
      }));
    }
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_9__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { disabled, messages, readOnly, dialogId } = this;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_19__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_19__.Host, { onBlur: this.hostBlurHandler, onKeyDown: this.keyDownHandler }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_19__.h)("div", { class: "input-wrapper", onClick: this.onInputWrapperClick }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_19__.h)("calcite-input-text", { "aria-autocomplete": "none", "aria-haspopup": "dialog", disabled: disabled, icon: "clock", id: this.referenceElementId, label: (0,_label2_js__WEBPACK_IMPORTED_MODULE_4__.g)(this), lang: this.effectiveLocale, onCalciteInputTextInput: this.calciteInternalInputInputHandler, onCalciteInternalInputTextFocus: this.calciteInternalInputFocusHandler, readOnly: readOnly, role: "combobox", scale: this.scale, status: this.status,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setInputAndTransitionEl }), !this.readOnly && this.renderToggleIcon(this.open)), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_19__.h)("calcite-popover", { focusTrapDisabled: true, id: dialogId, label: messages.chooseTime, lang: this.effectiveLocale, onCalcitePopoverClose: this.popoverCloseHandler, onCalcitePopoverOpen: this.popoverOpenHandler, open: this.open, overlayPositioning: this.overlayPositioning, placement: this.placement, referenceElement: this.referenceElementId, triggerDisabled: true,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setCalcitePopoverEl }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_19__.h)("calcite-time-picker", { lang: this.effectiveLocale, messageOverrides: this.messageOverrides, numberingSystem: this.numberingSystem, onCalciteInternalTimePickerChange: this.timePickerChangeHandler, scale: this.scale, step: this.step, tabIndex: this.open ? undefined : -1, value: this.value,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setCalciteTimePickerEl })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_19__.h)(_form_js__WEBPACK_IMPORTED_MODULE_0__.H, { component: this })));
  }
  renderToggleIcon(open) {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_19__.h)("span", { class: CSS.toggleIcon }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_19__.h)("calcite-icon", { icon: open ? "chevron-up" : "chevron-down", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_12__.g)(this.scale) })));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "open": ["openHandler"],
    "focusTrapDisabled": ["handleFocusTrapDisabled"],
    "disabled": ["handleDisabledAndReadOnlyChange"],
    "readOnly": ["handleDisabledAndReadOnlyChange"],
    "messageOverrides": ["onMessagesChange"],
    "numberingSystem": ["numberingSystemWatcher"],
    "step": ["stepWatcher"],
    "value": ["valueWatcher"],
    "effectiveLocale": ["effectiveLocaleWatcher"]
  }; }
  static get style() { return inputTimePickerCss; }
}, [17, "calcite-input-time-picker", {
    "open": [1540],
    "disabled": [516],
    "focusTrapDisabled": [516, "focus-trap-disabled"],
    "form": [513],
    "readOnly": [516, "read-only"],
    "messageOverrides": [1040],
    "messages": [1040],
    "name": [1],
    "numberingSystem": [1, "numbering-system"],
    "required": [516],
    "scale": [513],
    "status": [513],
    "overlayPositioning": [1, "overlay-positioning"],
    "placement": [513],
    "step": [2],
    "value": [1025],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "setFocus": [64],
    "reposition": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-input-time-picker", "calcite-action", "calcite-icon", "calcite-input-text", "calcite-loader", "calcite-popover", "calcite-progress", "calcite-time-picker"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-input-time-picker":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, InputTimePicker);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        (0,_action_js__WEBPACK_IMPORTED_MODULE_13__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_14__.d)();
      }
      break;
    case "calcite-input-text":
      if (!customElements.get(tagName)) {
        (0,_input_text_js__WEBPACK_IMPORTED_MODULE_15__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_16__.d)();
      }
      break;
    case "calcite-popover":
      if (!customElements.get(tagName)) {
        (0,_popover_js__WEBPACK_IMPORTED_MODULE_17__.d)();
      }
      break;
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        (0,_progress_js__WEBPACK_IMPORTED_MODULE_18__.d)();
      }
      break;
    case "calcite-time-picker":
      if (!customElements.get(tagName)) {
        (0,_time_picker_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteInputTimePicker = InputTimePicker;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/label2.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/label2.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ labelDisconnectedEvent),
/* harmony export */   c: () => (/* binding */ connectLabel),
/* harmony export */   d: () => (/* binding */ disconnectLabel),
/* harmony export */   g: () => (/* binding */ getLabelText),
/* harmony export */   l: () => (/* binding */ labelConnectedEvent)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


/**
 * Exported for testing purposes only
 *
 * @internal
 */
const labelClickEvent = "calciteInternalLabelClick";
const labelConnectedEvent = "calciteInternalLabelConnected";
const labelDisconnectedEvent = "calciteInternalLabelDisconnected";
const labelTagName = "calcite-label";
const labelToLabelables = new WeakMap();
const onLabelClickMap = new WeakMap();
const onLabelConnectedMap = new WeakMap();
const onLabelDisconnectedMap = new WeakMap();
const unlabeledComponents = new WeakSet();
const findLabelForComponent = (componentEl) => {
  const { id } = componentEl;
  const forLabel = id && (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.q)(componentEl, { selector: `${labelTagName}[for="${id}"]` });
  if (forLabel) {
    return forLabel;
  }
  const parentLabel = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.c)(componentEl, labelTagName);
  if (!parentLabel ||
    // labelable components within other custom elements are not considered labelable
    hasAncestorCustomElements(parentLabel, componentEl)) {
    return null;
  }
  return parentLabel;
};
function hasAncestorCustomElements(label, componentEl) {
  let traversedElements;
  const customElementAncestorCheckEventType = "custom-element-ancestor-check";
  const listener = (event) => {
    event.stopImmediatePropagation();
    const composedPath = event.composedPath();
    traversedElements = composedPath.slice(composedPath.indexOf(componentEl), composedPath.indexOf(label));
  };
  label.addEventListener(customElementAncestorCheckEventType, listener, { once: true });
  componentEl.dispatchEvent(new CustomEvent(customElementAncestorCheckEventType, { composed: true, bubbles: true }));
  label.removeEventListener(customElementAncestorCheckEventType, listener);
  const ancestorCustomElements = traversedElements
    .filter((el) => el !== componentEl && el !== label)
    .filter((el) => el.tagName?.includes("-"));
  return ancestorCustomElements.length > 0;
}
/**
 * Helper to set up label interactions on connectedCallback.
 *
 * @param component
 */
function connectLabel(component) {
  const labelEl = findLabelForComponent(component.el);
  if ((onLabelClickMap.has(labelEl) && labelEl === component.labelEl) ||
    (!labelEl && unlabeledComponents.has(component))) {
    return;
  }
  const boundOnLabelDisconnected = onLabelDisconnected.bind(component);
  if (labelEl) {
    component.labelEl = labelEl;
    const labelables = labelToLabelables.get(labelEl) || [];
    labelables.push(component);
    labelToLabelables.set(labelEl, labelables.sort(sortByDOMOrder));
    if (!onLabelClickMap.has(component.labelEl)) {
      onLabelClickMap.set(component.labelEl, onLabelClick);
      component.labelEl.addEventListener(labelClickEvent, onLabelClick);
    }
    unlabeledComponents.delete(component);
    document.removeEventListener(labelConnectedEvent, onLabelConnectedMap.get(component));
    onLabelDisconnectedMap.set(component, boundOnLabelDisconnected);
    document.addEventListener(labelDisconnectedEvent, boundOnLabelDisconnected);
  }
  else if (!unlabeledComponents.has(component)) {
    boundOnLabelDisconnected();
    document.removeEventListener(labelDisconnectedEvent, onLabelDisconnectedMap.get(component));
  }
}
/**
 * Helper to tear down label interactions on disconnectedCallback on labelable components.
 *
 * @param component
 */
function disconnectLabel(component) {
  unlabeledComponents.delete(component);
  document.removeEventListener(labelConnectedEvent, onLabelConnectedMap.get(component));
  document.removeEventListener(labelDisconnectedEvent, onLabelDisconnectedMap.get(component));
  onLabelConnectedMap.delete(component);
  onLabelDisconnectedMap.delete(component);
  if (!component.labelEl) {
    return;
  }
  const labelables = labelToLabelables.get(component.labelEl);
  if (labelables.length === 1) {
    component.labelEl.removeEventListener(labelClickEvent, onLabelClickMap.get(component.labelEl));
    onLabelClickMap.delete(component.labelEl);
  }
  labelToLabelables.set(component.labelEl, labelables.filter((labelable) => labelable !== component).sort(sortByDOMOrder));
  component.labelEl = null;
}
function sortByDOMOrder(a, b) {
  return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.y)(a.el, b.el) ? -1 : 1;
}
/**
 * Helper to get the label text from a component.
 *
 * @param component
 */
function getLabelText(component) {
  return component.label || component.labelEl?.textContent?.trim() || "";
}
function onLabelClick(event) {
  const labelClickTarget = event.detail.sourceEvent.target;
  const labelables = labelToLabelables.get(this);
  const clickedLabelable = labelables.find((labelable) => labelable.el === labelClickTarget);
  const labelableChildClicked = labelables.includes(clickedLabelable);
  if (labelableChildClicked) {
    // no need to forward click as labelable will receive focus
    return;
  }
  const firstLabelable = labelables[0];
  if (firstLabelable.disabled) {
    return;
  }
  firstLabelable.onLabelClick(event);
}
function onLabelConnected() {
  if (unlabeledComponents.has(this)) {
    connectLabel(this);
  }
}
function onLabelDisconnected() {
  unlabeledComponents.add(this);
  const boundOnLabelConnected = onLabelConnectedMap.get(this) || onLabelConnected.bind(this);
  onLabelConnectedMap.set(this, boundOnLabelConnected);
  document.addEventListener(labelConnectedEvent, boundOnLabelConnected);
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYTkwNmU4NGZhZDBlODdhYWFlNWQwZjM5OTYzMjlhN2EuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytHO0FBQ0Y7QUFDdkU7QUFDNkU7QUFDeEU7QUFDOEM7QUFDcUI7QUFDcUI7QUFDakI7QUFDeUQ7QUFDOUU7QUFDbkI7QUFDM0I7QUFDSTtBQUNNO0FBQ0Y7QUFDTTtBQUNKO0FBQ0M7QUFDQzs7QUFFM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDLHdCQUF3QixFQUFFLFVBQVUsSUFBSSxXQUFXLElBQUksWUFBWSxJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUk7QUFDL0Ysa0NBQWtDLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxPQUFPLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSTs7QUFFbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjOztBQUVkLGFBQWE7O0FBRWI7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4Qix5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDs7QUFFakQsR0FBRztBQUNIOztBQUVBLGVBQWU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0Msd0NBQXdDOztBQUV4Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkI7O0FBRTdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0MsbUxBQW1MOztBQUUzTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLEdBQUc7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0EsTUFBTTtBQUNOOztBQUVBLHNCQUFzQixVQUFVO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBd0Q7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQSxLQUFLO0FBQ0w7OztBQUdBOztBQUVBO0FBQ0Esd0VBQXdFLGFBQWE7QUFDckY7QUFDQTs7QUFFQTtBQUNBLHVFQUF1RTs7QUFFdkU7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx5QkFBeUI7QUFDekI7QUFDQSxDQUFDOztBQUVELDhDQUE4QyxlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxxQkFBcUIseUJBQXlCLGlCQUFpQix5R0FBeUcsVUFBVSx5Q0FBeUMsb0JBQW9CLHFCQUFxQix3QkFBd0IscUJBQXFCLDZCQUE2QixtQkFBbUIsMEJBQTBCLG1DQUFtQyxzQkFBc0IsaUJBQWlCLGdDQUFnQyxrR0FBa0csaUJBQWlCLGlDQUFpQyxvR0FBb0csaUJBQWlCLDhCQUE4QixrR0FBa0csZUFBZSxrQkFBa0IsYUFBYSxrQkFBa0IsYUFBYSxlQUFlLG1CQUFtQixtQkFBbUIsY0FBYyw2Q0FBNkMsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUU3ekM7QUFDQTtBQUNBLGVBQWUsdU9BQWlCO0FBQ2hDLGVBQWUsdU9BQWlCO0FBQ2hDLGVBQWUsdU9BQWlCO0FBQ2hDLGVBQWUsdU9BQWlCO0FBQ2hDLGVBQWUsdU9BQWlCO0FBQ2hDLGVBQWUsdU9BQWlCO0FBQ2hDLGVBQWUsdU9BQWlCO0FBQ2hDLGtCQUFrQixnUEFBb0I7QUFDdEMsa0JBQWtCLGdQQUFvQjtBQUN0QyxlQUFlLHVPQUFpQjtBQUNoQyxvREFBb0QsY0FBYztBQUNsRSxrQkFBa0IsZ1BBQW9CO0FBQ3RDLGtCQUFrQixnUEFBb0I7QUFDdEMsa0JBQWtCLGdQQUFvQjtBQUN0QyxlQUFlLHVPQUFpQjtBQUNoQyxrQkFBa0IsZ1BBQW9CO0FBQ3RDLGVBQWUsdU9BQWlCO0FBQ2hDLGVBQWUsdU9BQWlCO0FBQ2hDLGVBQWUsdU9BQWlCO0FBQ2hDLGtCQUFrQixnUEFBb0I7QUFDdEMsZUFBZSx1T0FBaUI7QUFDaEMsZUFBZSx1T0FBaUI7QUFDaEMsZUFBZSx1T0FBaUI7QUFDaEMsZUFBZSx1T0FBaUI7QUFDaEMsZUFBZSx1T0FBaUI7QUFDaEMsZUFBZSx1T0FBaUI7QUFDaEMsa0JBQWtCLGdQQUFvQjtBQUN0QyxlQUFlLHVPQUFpQjtBQUNoQyxlQUFlLHVPQUFpQjtBQUNoQyxlQUFlLHVPQUFpQjtBQUNoQyxlQUFlLHVPQUFpQjtBQUNoQyxlQUFlLHVPQUFpQjtBQUNoQyxlQUFlLHVPQUFpQjtBQUNoQyxlQUFlLHVPQUFpQjtBQUNoQyxlQUFlLHVPQUFpQjtBQUNoQyxlQUFlLHVPQUFpQjtBQUNoQyxrQkFBa0IsZ1BBQW9CO0FBQ3RDLGVBQWUsdU9BQWlCO0FBQ2hDLGVBQWUsdU9BQWlCO0FBQ2hDLGVBQWUsdU9BQWlCO0FBQ2hDLGVBQWUsdU9BQWlCO0FBQ2hDLGVBQWUsdU9BQWlCO0FBQ2hDLGVBQWUsdU9BQWlCO0FBQ2hDLGVBQWUsdU9BQWlCO0FBQ2hDLGVBQWUsdU9BQWlCO0FBQ2hDLGVBQWUsdU9BQWlCO0FBQ2hDLGVBQWUsdU9BQWlCO0FBQ2hDLGtCQUFrQixnUEFBb0I7QUFDdEMsa0JBQWtCLGdQQUFvQjtBQUN0QyxrQkFBa0IsZ1BBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywyRkFBa0IsZUFBZSxnRkFBVztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxvRkFBVztBQUN4RCw0Q0FBNEMsb0ZBQVc7QUFDdkQsd0NBQXdDLG9GQUFXO0FBQ25ELHVDQUF1QyxvRkFBVztBQUNsRCxzQ0FBc0Msb0ZBQVc7QUFDakQ7QUFDQSwyQ0FBMkMsMkNBQUksR0FBRztBQUNsRDtBQUNBO0FBQ0EsbURBQW1ELDJDQUFJLEdBQUc7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0RBQWtCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDRDQUFhO0FBQzdDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywyQ0FBMkM7QUFDekQ7QUFDQTtBQUNBLFFBQVEseUNBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHlDQUFxQjtBQUM1RDtBQUNBO0FBQ0EseUJBQXlCLHNDQUFVO0FBQ25DLFlBQVkseUNBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtEQUFlO0FBQ25DLHlCQUF5QixrREFBa0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNENBQWE7QUFDN0MsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNLHlEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQU0seURBQWlCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxjQUFjLHdCQUF3QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkNBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtEQUFXO0FBQ3ZCO0FBQ0Esc0NBQXNDLGtEQUFrQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyw0Q0FBYTtBQUNqRCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlEQUFnQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtEQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0RBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDRDQUFhO0FBQy9DLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrREFBZTtBQUNsQztBQUNBLFVBQVUsa0RBQWtCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDRDQUFhO0FBQy9DLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQTBCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5REFBbUIsU0FBUyx5REFBaUI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0RBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDRDQUFhO0FBQzNDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0RBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDRDQUFhO0FBQzNDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwrQ0FBa0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDRDQUFhO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDRCQUE0QjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCw2Q0FBa0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0RBQWMsYUFBYSxHQUFHLGtEQUFjLGVBQWU7QUFDakY7QUFDQSwwQkFBMEIsa0RBQWMsZUFBZTtBQUN2RDtBQUNBLDZEQUE2RCw0Q0FBYTtBQUMxRSw0QkFBNEIsb0NBQW9DO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFrQjtBQUM1QztBQUNBLFlBQVksd0JBQXdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDRDQUFhO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBa0I7QUFDdEIsSUFBSSw2Q0FBZ0I7QUFDcEIsUUFBUSxrREFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2Q0FBWTtBQUNoQixJQUFJLDJDQUFXO0FBQ2YsSUFBSSwwQ0FBZTtBQUNuQjtBQUNBO0FBQ0EsSUFBSSwrQ0FBc0I7QUFDMUIsdUJBQXVCLDBDQUFhO0FBQ3BDO0FBQ0EsTUFBTSwwREFBMEI7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBa0I7QUFDdEIsUUFBUSxrREFBVztBQUNuQix5QkFBeUIsa0RBQWtCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDRDQUFhO0FBQzdDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFxQjtBQUN6QixJQUFJLDZDQUFlO0FBQ25CLElBQUksMkNBQWM7QUFDbEIsSUFBSSw2Q0FBbUI7QUFDdkIsSUFBSSx5REFBbUI7QUFDdkIsSUFBSSwwQ0FBa0I7QUFDdEI7QUFDQTtBQUNBLElBQUksa0RBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5Q0FBeUM7QUFDckQsWUFBWSwwRUFBQyxDQUFDLHlFQUFJLElBQUksOERBQThELEVBQUUsMEVBQUMsVUFBVSwyREFBMkQsRUFBRSwwRUFBQyx5QkFBeUIsK0hBQStILDZDQUFZO0FBQ25VO0FBQ0EseUNBQXlDLHdEQUF3RCwwRUFBQyxzQkFBc0I7QUFDeEg7QUFDQSxxQ0FBcUMsRUFBRSwwRUFBQywwQkFBMEI7QUFDbEU7QUFDQSx3Q0FBd0MsSUFBSSwwRUFBQyxDQUFDLHVDQUFtQixJQUFJLGlCQUFpQjtBQUN0RjtBQUNBO0FBQ0EsWUFBWSwwRUFBQyxXQUFXLHVCQUF1QixFQUFFLDBFQUFDLG1CQUFtQixtREFBbUQsaURBQVksY0FBYztBQUNsSjtBQUNBLGdDQUFnQztBQUNoQyw0QkFBNEI7QUFDNUIsYUFBYTtBQUNiLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDRDQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0RBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrREFBcUI7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRW1FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy8zRG5FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDeUc7O0FBRXpHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBSztBQUNmLHlCQUF5QiwwQ0FBaUIsZ0JBQWdCLGFBQWEsYUFBYSxRQUFRLEdBQUcsS0FBSztBQUNwRztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMENBQWlDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxZQUFZO0FBQ3RGLG1GQUFtRiwrQkFBK0I7QUFDbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywwQ0FBUTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLWlucHV0LXRpbWUtcGlja2VyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9sYWJlbDIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGgsIEhvc3QgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBzIGFzIHN1Ym1pdEZvcm0sIGMgYXMgY29ubmVjdEZvcm0sIGQgYXMgZGlzY29ubmVjdEZvcm0sIEggYXMgSGlkZGVuRm9ybUlucHV0U2xvdCB9IGZyb20gJy4vZm9ybS5qcyc7XG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0SW50ZXJhY3RpdmUsIGQgYXMgZGlzY29ubmVjdEludGVyYWN0aXZlLCB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUuanMnO1xuaW1wb3J0IHsgbiBhcyBudW1iZXJLZXlzIH0gZnJvbSAnLi9rZXkuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TGFiZWwsIGQgYXMgZGlzY29ubmVjdExhYmVsLCBnIGFzIGdldExhYmVsVGV4dCB9IGZyb20gJy4vbGFiZWwyLmpzJztcbmltcG9ydCB7IGMgYXMgY29tcG9uZW50Rm9jdXNhYmxlLCBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS5qcyc7XG5pbXBvcnQgeyBuIGFzIG51bWJlclN0cmluZ0Zvcm1hdHRlciwgZyBhcyBnZXRTdXBwb3J0ZWRMb2NhbGUsIGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWFjdGl2YXRlRm9jdXNUcmFwLCBhIGFzIGFjdGl2YXRlRm9jdXNUcmFwLCBjIGFzIGNvbm5lY3RGb2N1c1RyYXAgfSBmcm9tICcuL2ZvY3VzVHJhcENvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBsIGFzIGxvY2FsaXplVGltZVN0cmluZywgdCBhcyB0b0lTT1RpbWVTdHJpbmcsIGkgYXMgaXNWYWxpZFRpbWUsIGYgYXMgZm9ybWF0VGltZVN0cmluZywgYSBhcyBmb3JtYXRUaW1lUGFydCwgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL3RpbWUtcGlja2VyLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzIH0gZnJvbSAnLi90OW4uanMnO1xuaW1wb3J0IHsgbyBhcyBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudCB9IGZyb20gJy4vb3BlbkNsb3NlQ29tcG9uZW50LmpzJztcbmltcG9ydCB7IGQgYXMgZGVjaW1hbFBsYWNlcyB9IGZyb20gJy4vbWF0aC5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldEljb25TY2FsZSB9IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ4IH0gZnJvbSAnLi9hY3Rpb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDcgfSBmcm9tICcuL2ljb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDYgfSBmcm9tICcuL2lucHV0LXRleHQuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDUgfSBmcm9tICcuL2xvYWRlci5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNCB9IGZyb20gJy4vcG9wb3Zlci5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMyB9IGZyb20gJy4vcHJvZ3Jlc3MuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIHRvZ2dsZUljb246IFwidG9nZ2xlLWljb25cIixcbn07XG5cbnZhciBTRUNPTkRTX0FfTUlOVVRFID0gNjA7XG52YXIgU0VDT05EU19BX0hPVVIgPSBTRUNPTkRTX0FfTUlOVVRFICogNjA7XG52YXIgU0VDT05EU19BX0RBWSA9IFNFQ09ORFNfQV9IT1VSICogMjQ7XG52YXIgU0VDT05EU19BX1dFRUsgPSBTRUNPTkRTX0FfREFZICogNztcbnZhciBNSUxMSVNFQ09ORFNfQV9TRUNPTkQgPSAxZTM7XG52YXIgTUlMTElTRUNPTkRTX0FfTUlOVVRFID0gU0VDT05EU19BX01JTlVURSAqIE1JTExJU0VDT05EU19BX1NFQ09ORDtcbnZhciBNSUxMSVNFQ09ORFNfQV9IT1VSID0gU0VDT05EU19BX0hPVVIgKiBNSUxMSVNFQ09ORFNfQV9TRUNPTkQ7XG52YXIgTUlMTElTRUNPTkRTX0FfREFZID0gU0VDT05EU19BX0RBWSAqIE1JTExJU0VDT05EU19BX1NFQ09ORDtcbnZhciBNSUxMSVNFQ09ORFNfQV9XRUVLID0gU0VDT05EU19BX1dFRUsgKiBNSUxMSVNFQ09ORFNfQV9TRUNPTkQ7IC8vIEVuZ2xpc2ggbG9jYWxlc1xuXG52YXIgTVMgPSAnbWlsbGlzZWNvbmQnO1xudmFyIFMgPSAnc2Vjb25kJztcbnZhciBNSU4gPSAnbWludXRlJztcbnZhciBIID0gJ2hvdXInO1xudmFyIEQgPSAnZGF5JztcbnZhciBXID0gJ3dlZWsnO1xudmFyIE0gPSAnbW9udGgnO1xudmFyIFEgPSAncXVhcnRlcic7XG52YXIgWSA9ICd5ZWFyJztcbnZhciBEQVRFID0gJ2RhdGUnO1xudmFyIEZPUk1BVF9ERUZBVUxUID0gJ1lZWVktTU0tRERUSEg6bW06c3NaJztcbnZhciBJTlZBTElEX0RBVEVfU1RSSU5HID0gJ0ludmFsaWQgRGF0ZSc7IC8vIHJlZ2V4XG5cbnZhciBSRUdFWF9QQVJTRSA9IC9eKFxcZHs0fSlbLS9dPyhcXGR7MSwyfSk/Wy0vXT8oXFxkezAsMn0pW1R0XFxzXSooXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Wy46XT8oXFxkKyk/JC87XG52YXIgUkVHRVhfRk9STUFUID0gL1xcWyhbXlxcXV0rKV18WXsxLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nO1xuXG4vLyBFbmdsaXNoIFtlbl1cbi8vIFdlIGRvbid0IG5lZWQgd2Vla2RheXNTaG9ydCwgd2Vla2RheXNNaW4sIG1vbnRoc1Nob3J0IGluIGVuLmpzIGxvY2FsZVxuY29uc3QgZW4gPSB7XG4gIG5hbWU6ICdlbicsXG4gIHdlZWtkYXlzOiAnU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXknLnNwbGl0KCdfJyksXG4gIG1vbnRoczogJ0phbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KCdfJyksXG4gIG9yZGluYWw6IGZ1bmN0aW9uIG9yZGluYWwobikge1xuICAgIHZhciBzID0gWyd0aCcsICdzdCcsICduZCcsICdyZCddO1xuICAgIHZhciB2ID0gbiAlIDEwMDtcbiAgICByZXR1cm4gXCJbXCIgKyBuICsgKHNbKHYgLSAyMCkgJSAxMF0gfHwgc1t2XSB8fCBzWzBdKSArIFwiXVwiO1xuICB9XG59O1xuXG5jb25zdCBlbiQxID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBfX3Byb3RvX186IG51bGwsXG4gICdkZWZhdWx0JzogZW5cbn0pO1xuXG52YXIgcGFkU3RhcnQgPSBmdW5jdGlvbiBwYWRTdGFydChzdHJpbmcsIGxlbmd0aCwgcGFkKSB7XG4gIHZhciBzID0gU3RyaW5nKHN0cmluZyk7XG4gIGlmICghcyB8fCBzLmxlbmd0aCA+PSBsZW5ndGgpIHJldHVybiBzdHJpbmc7XG4gIHJldHVybiBcIlwiICsgQXJyYXkobGVuZ3RoICsgMSAtIHMubGVuZ3RoKS5qb2luKHBhZCkgKyBzdHJpbmc7XG59O1xuXG52YXIgcGFkWm9uZVN0ciA9IGZ1bmN0aW9uIHBhZFpvbmVTdHIoaW5zdGFuY2UpIHtcbiAgdmFyIG5lZ01pbnV0ZXMgPSAtaW5zdGFuY2UudXRjT2Zmc2V0KCk7XG4gIHZhciBtaW51dGVzID0gTWF0aC5hYnMobmVnTWludXRlcyk7XG4gIHZhciBob3VyT2Zmc2V0ID0gTWF0aC5mbG9vcihtaW51dGVzIC8gNjApO1xuICB2YXIgbWludXRlT2Zmc2V0ID0gbWludXRlcyAlIDYwO1xuICByZXR1cm4gXCJcIiArIChuZWdNaW51dGVzIDw9IDAgPyAnKycgOiAnLScpICsgcGFkU3RhcnQoaG91ck9mZnNldCwgMiwgJzAnKSArIFwiOlwiICsgcGFkU3RhcnQobWludXRlT2Zmc2V0LCAyLCAnMCcpO1xufTtcblxudmFyIG1vbnRoRGlmZiA9IGZ1bmN0aW9uIG1vbnRoRGlmZihhLCBiKSB7XG4gIC8vIGZ1bmN0aW9uIGZyb20gbW9tZW50LmpzIGluIG9yZGVyIHRvIGtlZXAgdGhlIHNhbWUgcmVzdWx0XG4gIGlmIChhLmRhdGUoKSA8IGIuZGF0ZSgpKSByZXR1cm4gLW1vbnRoRGlmZihiLCBhKTtcbiAgdmFyIHdob2xlTW9udGhEaWZmID0gKGIueWVhcigpIC0gYS55ZWFyKCkpICogMTIgKyAoYi5tb250aCgpIC0gYS5tb250aCgpKTtcbiAgdmFyIGFuY2hvciA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYsIE0pO1xuICB2YXIgYyA9IGIgLSBhbmNob3IgPCAwO1xuICB2YXIgYW5jaG9yMiA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYgKyAoYyA/IC0xIDogMSksIE0pO1xuICByZXR1cm4gKygtKHdob2xlTW9udGhEaWZmICsgKGIgLSBhbmNob3IpIC8gKGMgPyBhbmNob3IgLSBhbmNob3IyIDogYW5jaG9yMiAtIGFuY2hvcikpIHx8IDApO1xufTtcblxudmFyIGFic0Zsb29yID0gZnVuY3Rpb24gYWJzRmxvb3Iobikge1xuICByZXR1cm4gbiA8IDAgPyBNYXRoLmNlaWwobikgfHwgMCA6IE1hdGguZmxvb3Iobik7XG59O1xuXG52YXIgcHJldHR5VW5pdCA9IGZ1bmN0aW9uIHByZXR0eVVuaXQodSkge1xuICB2YXIgc3BlY2lhbCA9IHtcbiAgICBNOiBNLFxuICAgIHk6IFksXG4gICAgdzogVyxcbiAgICBkOiBELFxuICAgIEQ6IERBVEUsXG4gICAgaDogSCxcbiAgICBtOiBNSU4sXG4gICAgczogUyxcbiAgICBtczogTVMsXG4gICAgUTogUVxuICB9O1xuICByZXR1cm4gc3BlY2lhbFt1XSB8fCBTdHJpbmcodSB8fCAnJykudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9zJC8sICcnKTtcbn07XG5cbnZhciBpc1VuZGVmaW5lZCA9IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHMpIHtcbiAgcmV0dXJuIHMgPT09IHVuZGVmaW5lZDtcbn07XG5cbmNvbnN0IFUgPSB7XG4gIHM6IHBhZFN0YXJ0LFxuICB6OiBwYWRab25lU3RyLFxuICBtOiBtb250aERpZmYsXG4gIGE6IGFic0Zsb29yLFxuICBwOiBwcmV0dHlVbml0LFxuICB1OiBpc1VuZGVmaW5lZFxufTtcblxudmFyIEwgPSAnZW4nOyAvLyBnbG9iYWwgbG9jYWxlXG5cbnZhciBMcyA9IHt9OyAvLyBnbG9iYWwgbG9hZGVkIGxvY2FsZVxuXG5Mc1tMXSA9IGVuO1xudmFyIElTX0RBWUpTID0gJyRpc0RheWpzT2JqZWN0JzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG5cbnZhciBpc0RheWpzID0gZnVuY3Rpb24gaXNEYXlqcyhkKSB7XG4gIHJldHVybiBkIGluc3RhbmNlb2YgRGF5anMgfHwgISEoZCAmJiBkW0lTX0RBWUpTXSk7XG59O1xuXG52YXIgcGFyc2VMb2NhbGUgPSBmdW5jdGlvbiBwYXJzZUxvY2FsZShwcmVzZXQsIG9iamVjdCwgaXNMb2NhbCkge1xuICB2YXIgbDtcbiAgaWYgKCFwcmVzZXQpIHJldHVybiBMO1xuXG4gIGlmICh0eXBlb2YgcHJlc2V0ID09PSAnc3RyaW5nJykge1xuICAgIHZhciBwcmVzZXRMb3dlciA9IHByZXNldC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKExzW3ByZXNldExvd2VyXSkge1xuICAgICAgbCA9IHByZXNldExvd2VyO1xuICAgIH1cblxuICAgIGlmIChvYmplY3QpIHtcbiAgICAgIExzW3ByZXNldExvd2VyXSA9IG9iamVjdDtcbiAgICAgIGwgPSBwcmVzZXRMb3dlcjtcbiAgICB9XG5cbiAgICB2YXIgcHJlc2V0U3BsaXQgPSBwcmVzZXQuc3BsaXQoJy0nKTtcblxuICAgIGlmICghbCAmJiBwcmVzZXRTcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gcGFyc2VMb2NhbGUocHJlc2V0U3BsaXRbMF0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgbmFtZSA9IHByZXNldC5uYW1lO1xuICAgIExzW25hbWVdID0gcHJlc2V0O1xuICAgIGwgPSBuYW1lO1xuICB9XG5cbiAgaWYgKCFpc0xvY2FsICYmIGwpIEwgPSBsO1xuICByZXR1cm4gbCB8fCAhaXNMb2NhbCAmJiBMO1xufTtcblxudmFyIGRheWpzID0gZnVuY3Rpb24gZGF5anMoZGF0ZSwgYykge1xuICBpZiAoaXNEYXlqcyhkYXRlKSkge1xuICAgIHJldHVybiBkYXRlLmNsb25lKCk7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG5cblxuICB2YXIgY2ZnID0gdHlwZW9mIGMgPT09ICdvYmplY3QnID8gYyA6IHt9O1xuICBjZmcuZGF0ZSA9IGRhdGU7XG4gIGNmZy5hcmdzID0gYXJndW1lbnRzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuXG4gIHJldHVybiBuZXcgRGF5anMoY2ZnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxufTtcblxudmFyIHdyYXBwZXIgPSBmdW5jdGlvbiB3cmFwcGVyKGRhdGUsIGluc3RhbmNlKSB7XG4gIHJldHVybiBkYXlqcyhkYXRlLCB7XG4gICAgbG9jYWxlOiBpbnN0YW5jZS4kTCxcbiAgICB1dGM6IGluc3RhbmNlLiR1LFxuICAgIHg6IGluc3RhbmNlLiR4LFxuICAgICRvZmZzZXQ6IGluc3RhbmNlLiRvZmZzZXQgLy8gdG9kbzogcmVmYWN0b3I7IGRvIG5vdCB1c2UgdGhpcy4kb2Zmc2V0IGluIHlvdSBjb2RlXG5cbiAgfSk7XG59O1xuXG52YXIgVXRpbHMgPSBVOyAvLyBmb3IgcGx1Z2luIHVzZVxuXG5VdGlscy5sID0gcGFyc2VMb2NhbGU7XG5VdGlscy5pID0gaXNEYXlqcztcblV0aWxzLncgPSB3cmFwcGVyO1xuXG52YXIgcGFyc2VEYXRlID0gZnVuY3Rpb24gcGFyc2VEYXRlKGNmZykge1xuICB2YXIgZGF0ZSA9IGNmZy5kYXRlLFxuICAgICAgdXRjID0gY2ZnLnV0YztcbiAgaWYgKGRhdGUgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pOyAvLyBudWxsIGlzIGludmFsaWRcblxuICBpZiAoVXRpbHMudShkYXRlKSkgcmV0dXJuIG5ldyBEYXRlKCk7IC8vIHRvZGF5XG5cbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gbmV3IERhdGUoZGF0ZSk7XG5cbiAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyAmJiAhL1okL2kudGVzdChkYXRlKSkge1xuICAgIHZhciBkID0gZGF0ZS5tYXRjaChSRUdFWF9QQVJTRSk7XG5cbiAgICBpZiAoZCkge1xuICAgICAgdmFyIG0gPSBkWzJdIC0gMSB8fCAwO1xuICAgICAgdmFyIG1zID0gKGRbN10gfHwgJzAnKS5zdWJzdHJpbmcoMCwgMyk7XG5cbiAgICAgIGlmICh1dGMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKGRbMV0sIG0sIGRbM10gfHwgMSwgZFs0XSB8fCAwLCBkWzVdIHx8IDAsIGRbNl0gfHwgMCwgbXMpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBEYXRlKGRbMV0sIG0sIGRbM10gfHwgMSwgZFs0XSB8fCAwLCBkWzVdIHx8IDAsIGRbNl0gfHwgMCwgbXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZShkYXRlKTsgLy8gZXZlcnl0aGluZyBlbHNlXG59O1xuXG52YXIgRGF5anMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEYXlqcyhjZmcpIHtcbiAgICB0aGlzLiRMID0gcGFyc2VMb2NhbGUoY2ZnLmxvY2FsZSwgbnVsbCwgdHJ1ZSk7XG4gICAgdGhpcy5wYXJzZShjZmcpOyAvLyBmb3IgcGx1Z2luXG5cbiAgICB0aGlzLiR4ID0gdGhpcy4keCB8fCBjZmcueCB8fCB7fTtcbiAgICB0aGlzW0lTX0RBWUpTXSA9IHRydWU7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRGF5anMucHJvdG90eXBlO1xuXG4gIF9wcm90by5wYXJzZSA9IGZ1bmN0aW9uIHBhcnNlKGNmZykge1xuICAgIHRoaXMuJGQgPSBwYXJzZURhdGUoY2ZnKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfTtcblxuICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyICRkID0gdGhpcy4kZDtcbiAgICB0aGlzLiR5ID0gJGQuZ2V0RnVsbFllYXIoKTtcbiAgICB0aGlzLiRNID0gJGQuZ2V0TW9udGgoKTtcbiAgICB0aGlzLiREID0gJGQuZ2V0RGF0ZSgpO1xuICAgIHRoaXMuJFcgPSAkZC5nZXREYXkoKTtcbiAgICB0aGlzLiRIID0gJGQuZ2V0SG91cnMoKTtcbiAgICB0aGlzLiRtID0gJGQuZ2V0TWludXRlcygpO1xuICAgIHRoaXMuJHMgPSAkZC5nZXRTZWNvbmRzKCk7XG4gICAgdGhpcy4kbXMgPSAkZC5nZXRNaWxsaXNlY29uZHMoKTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICA7XG5cbiAgX3Byb3RvLiR1dGlscyA9IGZ1bmN0aW9uICR1dGlscygpIHtcbiAgICByZXR1cm4gVXRpbHM7XG4gIH07XG5cbiAgX3Byb3RvLmlzVmFsaWQgPSBmdW5jdGlvbiBpc1ZhbGlkKCkge1xuICAgIHJldHVybiAhKHRoaXMuJGQudG9TdHJpbmcoKSA9PT0gSU5WQUxJRF9EQVRFX1NUUklORyk7XG4gIH07XG5cbiAgX3Byb3RvLmlzU2FtZSA9IGZ1bmN0aW9uIGlzU2FtZSh0aGF0LCB1bml0cykge1xuICAgIHZhciBvdGhlciA9IGRheWpzKHRoYXQpO1xuICAgIHJldHVybiB0aGlzLnN0YXJ0T2YodW5pdHMpIDw9IG90aGVyICYmIG90aGVyIDw9IHRoaXMuZW5kT2YodW5pdHMpO1xuICB9O1xuXG4gIF9wcm90by5pc0FmdGVyID0gZnVuY3Rpb24gaXNBZnRlcih0aGF0LCB1bml0cykge1xuICAgIHJldHVybiBkYXlqcyh0aGF0KSA8IHRoaXMuc3RhcnRPZih1bml0cyk7XG4gIH07XG5cbiAgX3Byb3RvLmlzQmVmb3JlID0gZnVuY3Rpb24gaXNCZWZvcmUodGhhdCwgdW5pdHMpIHtcbiAgICByZXR1cm4gdGhpcy5lbmRPZih1bml0cykgPCBkYXlqcyh0aGF0KTtcbiAgfTtcblxuICBfcHJvdG8uJGcgPSBmdW5jdGlvbiAkZyhpbnB1dCwgZ2V0LCBzZXQpIHtcbiAgICBpZiAoVXRpbHMudShpbnB1dCkpIHJldHVybiB0aGlzW2dldF07XG4gICAgcmV0dXJuIHRoaXMuc2V0KHNldCwgaW5wdXQpO1xuICB9O1xuXG4gIF9wcm90by51bml4ID0gZnVuY3Rpb24gdW5peCgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKSAvIDEwMDApO1xuICB9O1xuXG4gIF9wcm90by52YWx1ZU9mID0gZnVuY3Rpb24gdmFsdWVPZigpIHtcbiAgICAvLyB0aW1lem9uZShob3VyKSAqIDYwICogNjAgKiAxMDAwID0+IG1zXG4gICAgcmV0dXJuIHRoaXMuJGQuZ2V0VGltZSgpO1xuICB9O1xuXG4gIF9wcm90by5zdGFydE9mID0gZnVuY3Rpb24gc3RhcnRPZih1bml0cywgX3N0YXJ0T2YpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy8gc3RhcnRPZiAtPiBlbmRPZlxuICAgIHZhciBpc1N0YXJ0T2YgPSAhVXRpbHMudShfc3RhcnRPZikgPyBfc3RhcnRPZiA6IHRydWU7XG4gICAgdmFyIHVuaXQgPSBVdGlscy5wKHVuaXRzKTtcblxuICAgIHZhciBpbnN0YW5jZUZhY3RvcnkgPSBmdW5jdGlvbiBpbnN0YW5jZUZhY3RvcnkoZCwgbSkge1xuICAgICAgdmFyIGlucyA9IFV0aWxzLncoX3RoaXMuJHUgPyBEYXRlLlVUQyhfdGhpcy4keSwgbSwgZCkgOiBuZXcgRGF0ZShfdGhpcy4keSwgbSwgZCksIF90aGlzKTtcbiAgICAgIHJldHVybiBpc1N0YXJ0T2YgPyBpbnMgOiBpbnMuZW5kT2YoRCk7XG4gICAgfTtcblxuICAgIHZhciBpbnN0YW5jZUZhY3RvcnlTZXQgPSBmdW5jdGlvbiBpbnN0YW5jZUZhY3RvcnlTZXQobWV0aG9kLCBzbGljZSkge1xuICAgICAgdmFyIGFyZ3VtZW50U3RhcnQgPSBbMCwgMCwgMCwgMF07XG4gICAgICB2YXIgYXJndW1lbnRFbmQgPSBbMjMsIDU5LCA1OSwgOTk5XTtcbiAgICAgIHJldHVybiBVdGlscy53KF90aGlzLnRvRGF0ZSgpW21ldGhvZF0uYXBwbHkoIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgICAgX3RoaXMudG9EYXRlKCdzJyksIChpc1N0YXJ0T2YgPyBhcmd1bWVudFN0YXJ0IDogYXJndW1lbnRFbmQpLnNsaWNlKHNsaWNlKSksIF90aGlzKTtcbiAgICB9O1xuXG4gICAgdmFyICRXID0gdGhpcy4kVyxcbiAgICAgICAgJE0gPSB0aGlzLiRNLFxuICAgICAgICAkRCA9IHRoaXMuJEQ7XG4gICAgdmFyIHV0Y1BhZCA9IFwic2V0XCIgKyAodGhpcy4kdSA/ICdVVEMnIDogJycpO1xuXG4gICAgc3dpdGNoICh1bml0KSB7XG4gICAgICBjYXNlIFk6XG4gICAgICAgIHJldHVybiBpc1N0YXJ0T2YgPyBpbnN0YW5jZUZhY3RvcnkoMSwgMCkgOiBpbnN0YW5jZUZhY3RvcnkoMzEsIDExKTtcblxuICAgICAgY2FzZSBNOlxuICAgICAgICByZXR1cm4gaXNTdGFydE9mID8gaW5zdGFuY2VGYWN0b3J5KDEsICRNKSA6IGluc3RhbmNlRmFjdG9yeSgwLCAkTSArIDEpO1xuXG4gICAgICBjYXNlIFc6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgd2Vla1N0YXJ0ID0gdGhpcy4kbG9jYWxlKCkud2Vla1N0YXJ0IHx8IDA7XG4gICAgICAgICAgdmFyIGdhcCA9ICgkVyA8IHdlZWtTdGFydCA/ICRXICsgNyA6ICRXKSAtIHdlZWtTdGFydDtcbiAgICAgICAgICByZXR1cm4gaW5zdGFuY2VGYWN0b3J5KGlzU3RhcnRPZiA/ICREIC0gZ2FwIDogJEQgKyAoNiAtIGdhcCksICRNKTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIEQ6XG4gICAgICBjYXNlIERBVEU6XG4gICAgICAgIHJldHVybiBpbnN0YW5jZUZhY3RvcnlTZXQodXRjUGFkICsgXCJIb3Vyc1wiLCAwKTtcblxuICAgICAgY2FzZSBIOlxuICAgICAgICByZXR1cm4gaW5zdGFuY2VGYWN0b3J5U2V0KHV0Y1BhZCArIFwiTWludXRlc1wiLCAxKTtcblxuICAgICAgY2FzZSBNSU46XG4gICAgICAgIHJldHVybiBpbnN0YW5jZUZhY3RvcnlTZXQodXRjUGFkICsgXCJTZWNvbmRzXCIsIDIpO1xuXG4gICAgICBjYXNlIFM6XG4gICAgICAgIHJldHVybiBpbnN0YW5jZUZhY3RvcnlTZXQodXRjUGFkICsgXCJNaWxsaXNlY29uZHNcIiwgMyk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5lbmRPZiA9IGZ1bmN0aW9uIGVuZE9mKGFyZykge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0T2YoYXJnLCBmYWxzZSk7XG4gIH07XG5cbiAgX3Byb3RvLiRzZXQgPSBmdW5jdGlvbiAkc2V0KHVuaXRzLCBfaW50KSB7XG4gICAgdmFyIF9DJEQkQyREQVRFJEMkTSRDJFkkQztcblxuICAgIC8vIHByaXZhdGUgc2V0XG4gICAgdmFyIHVuaXQgPSBVdGlscy5wKHVuaXRzKTtcbiAgICB2YXIgdXRjUGFkID0gXCJzZXRcIiArICh0aGlzLiR1ID8gJ1VUQycgOiAnJyk7XG4gICAgdmFyIG5hbWUgPSAoX0MkRCRDJERBVEUkQyRNJEMkWSRDID0ge30sIF9DJEQkQyREQVRFJEMkTSRDJFkkQ1tEXSA9IHV0Y1BhZCArIFwiRGF0ZVwiLCBfQyREJEMkREFURSRDJE0kQyRZJENbREFURV0gPSB1dGNQYWQgKyBcIkRhdGVcIiwgX0MkRCRDJERBVEUkQyRNJEMkWSRDW01dID0gdXRjUGFkICsgXCJNb250aFwiLCBfQyREJEMkREFURSRDJE0kQyRZJENbWV0gPSB1dGNQYWQgKyBcIkZ1bGxZZWFyXCIsIF9DJEQkQyREQVRFJEMkTSRDJFkkQ1tIXSA9IHV0Y1BhZCArIFwiSG91cnNcIiwgX0MkRCRDJERBVEUkQyRNJEMkWSRDW01JTl0gPSB1dGNQYWQgKyBcIk1pbnV0ZXNcIiwgX0MkRCRDJERBVEUkQyRNJEMkWSRDW1NdID0gdXRjUGFkICsgXCJTZWNvbmRzXCIsIF9DJEQkQyREQVRFJEMkTSRDJFkkQ1tNU10gPSB1dGNQYWQgKyBcIk1pbGxpc2Vjb25kc1wiLCBfQyREJEMkREFURSRDJE0kQyRZJEMpW3VuaXRdO1xuICAgIHZhciBhcmcgPSB1bml0ID09PSBEID8gdGhpcy4kRCArIChfaW50IC0gdGhpcy4kVykgOiBfaW50O1xuXG4gICAgaWYgKHVuaXQgPT09IE0gfHwgdW5pdCA9PT0gWSkge1xuICAgICAgLy8gY2xvbmUgaXMgZm9yIGJhZE11dGFibGUgcGx1Z2luXG4gICAgICB2YXIgZGF0ZSA9IHRoaXMuY2xvbmUoKS5zZXQoREFURSwgMSk7XG4gICAgICBkYXRlLiRkW25hbWVdKGFyZyk7XG4gICAgICBkYXRlLmluaXQoKTtcbiAgICAgIHRoaXMuJGQgPSBkYXRlLnNldChEQVRFLCBNYXRoLm1pbih0aGlzLiRELCBkYXRlLmRheXNJbk1vbnRoKCkpKS4kZDtcbiAgICB9IGVsc2UgaWYgKG5hbWUpIHRoaXMuJGRbbmFtZV0oYXJnKTtcblxuICAgIHRoaXMuaW5pdCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5zZXQgPSBmdW5jdGlvbiBzZXQoc3RyaW5nLCBfaW50Mikge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkuJHNldChzdHJpbmcsIF9pbnQyKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0ID0gZnVuY3Rpb24gZ2V0KHVuaXQpIHtcbiAgICByZXR1cm4gdGhpc1tVdGlscy5wKHVuaXQpXSgpO1xuICB9O1xuXG4gIF9wcm90by5hZGQgPSBmdW5jdGlvbiBhZGQobnVtYmVyLCB1bml0cykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzLFxuICAgICAgICBfQyRNSU4kQyRIJEMkUyR1bml0O1xuXG4gICAgbnVtYmVyID0gTnVtYmVyKG51bWJlcik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblxuICAgIHZhciB1bml0ID0gVXRpbHMucCh1bml0cyk7XG5cbiAgICB2YXIgaW5zdGFuY2VGYWN0b3J5U2V0ID0gZnVuY3Rpb24gaW5zdGFuY2VGYWN0b3J5U2V0KG4pIHtcbiAgICAgIHZhciBkID0gZGF5anMoX3RoaXMyKTtcbiAgICAgIHJldHVybiBVdGlscy53KGQuZGF0ZShkLmRhdGUoKSArIE1hdGgucm91bmQobiAqIG51bWJlcikpLCBfdGhpczIpO1xuICAgIH07XG5cbiAgICBpZiAodW5pdCA9PT0gTSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KE0sIHRoaXMuJE0gKyBudW1iZXIpO1xuICAgIH1cblxuICAgIGlmICh1bml0ID09PSBZKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoWSwgdGhpcy4keSArIG51bWJlcik7XG4gICAgfVxuXG4gICAgaWYgKHVuaXQgPT09IEQpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZUZhY3RvcnlTZXQoMSk7XG4gICAgfVxuXG4gICAgaWYgKHVuaXQgPT09IFcpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZUZhY3RvcnlTZXQoNyk7XG4gICAgfVxuXG4gICAgdmFyIHN0ZXAgPSAoX0MkTUlOJEMkSCRDJFMkdW5pdCA9IHt9LCBfQyRNSU4kQyRIJEMkUyR1bml0W01JTl0gPSBNSUxMSVNFQ09ORFNfQV9NSU5VVEUsIF9DJE1JTiRDJEgkQyRTJHVuaXRbSF0gPSBNSUxMSVNFQ09ORFNfQV9IT1VSLCBfQyRNSU4kQyRIJEMkUyR1bml0W1NdID0gTUlMTElTRUNPTkRTX0FfU0VDT05ELCBfQyRNSU4kQyRIJEMkUyR1bml0KVt1bml0XSB8fCAxOyAvLyBtc1xuXG4gICAgdmFyIG5leHRUaW1lU3RhbXAgPSB0aGlzLiRkLmdldFRpbWUoKSArIG51bWJlciAqIHN0ZXA7XG4gICAgcmV0dXJuIFV0aWxzLncobmV4dFRpbWVTdGFtcCwgdGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLnN1YnRyYWN0ID0gZnVuY3Rpb24gc3VidHJhY3QobnVtYmVyLCBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5hZGQobnVtYmVyICogLTEsIHN0cmluZyk7XG4gIH07XG5cbiAgX3Byb3RvLmZvcm1hdCA9IGZ1bmN0aW9uIGZvcm1hdChmb3JtYXRTdHIpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBsb2NhbGUgPSB0aGlzLiRsb2NhbGUoKTtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSByZXR1cm4gbG9jYWxlLmludmFsaWREYXRlIHx8IElOVkFMSURfREFURV9TVFJJTkc7XG4gICAgdmFyIHN0ciA9IGZvcm1hdFN0ciB8fCBGT1JNQVRfREVGQVVMVDtcbiAgICB2YXIgem9uZVN0ciA9IFV0aWxzLnoodGhpcyk7XG4gICAgdmFyICRIID0gdGhpcy4kSCxcbiAgICAgICAgJG0gPSB0aGlzLiRtLFxuICAgICAgICAkTSA9IHRoaXMuJE07XG4gICAgdmFyIHdlZWtkYXlzID0gbG9jYWxlLndlZWtkYXlzLFxuICAgICAgICBtb250aHMgPSBsb2NhbGUubW9udGhzLFxuICAgICAgICBtZXJpZGllbSA9IGxvY2FsZS5tZXJpZGllbTtcblxuICAgIHZhciBnZXRTaG9ydCA9IGZ1bmN0aW9uIGdldFNob3J0KGFyciwgaW5kZXgsIGZ1bGwsIGxlbmd0aCkge1xuICAgICAgcmV0dXJuIGFyciAmJiAoYXJyW2luZGV4XSB8fCBhcnIoX3RoaXMzLCBzdHIpKSB8fCBmdWxsW2luZGV4XS5zbGljZSgwLCBsZW5ndGgpO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0JEggPSBmdW5jdGlvbiBnZXQkSChudW0pIHtcbiAgICAgIHJldHVybiBVdGlscy5zKCRIICUgMTIgfHwgMTIsIG51bSwgJzAnKTtcbiAgICB9O1xuXG4gICAgdmFyIG1lcmlkaWVtRnVuYyA9IG1lcmlkaWVtIHx8IGZ1bmN0aW9uIChob3VyLCBtaW51dGUsIGlzTG93ZXJjYXNlKSB7XG4gICAgICB2YXIgbSA9IGhvdXIgPCAxMiA/ICdBTScgOiAnUE0nO1xuICAgICAgcmV0dXJuIGlzTG93ZXJjYXNlID8gbS50b0xvd2VyQ2FzZSgpIDogbTtcbiAgICB9O1xuXG4gICAgdmFyIG1hdGNoZXMgPSBmdW5jdGlvbiBtYXRjaGVzKG1hdGNoKSB7XG4gICAgICBzd2l0Y2ggKG1hdGNoKSB7XG4gICAgICAgIGNhc2UgJ1lZJzpcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKF90aGlzMy4keSkuc2xpY2UoLTIpO1xuXG4gICAgICAgIGNhc2UgJ1lZWVknOlxuICAgICAgICAgIHJldHVybiBVdGlscy5zKF90aGlzMy4keSwgNCwgJzAnKTtcblxuICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICByZXR1cm4gJE0gKyAxO1xuXG4gICAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgICByZXR1cm4gVXRpbHMucygkTSArIDEsIDIsICcwJyk7XG5cbiAgICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgICByZXR1cm4gZ2V0U2hvcnQobG9jYWxlLm1vbnRoc1Nob3J0LCAkTSwgbW9udGhzLCAzKTtcblxuICAgICAgICBjYXNlICdNTU1NJzpcbiAgICAgICAgICByZXR1cm4gZ2V0U2hvcnQobW9udGhzLCAkTSk7XG5cbiAgICAgICAgY2FzZSAnRCc6XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy4kRDtcblxuICAgICAgICBjYXNlICdERCc6XG4gICAgICAgICAgcmV0dXJuIFV0aWxzLnMoX3RoaXMzLiRELCAyLCAnMCcpO1xuXG4gICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgIHJldHVybiBTdHJpbmcoX3RoaXMzLiRXKTtcblxuICAgICAgICBjYXNlICdkZCc6XG4gICAgICAgICAgcmV0dXJuIGdldFNob3J0KGxvY2FsZS53ZWVrZGF5c01pbiwgX3RoaXMzLiRXLCB3ZWVrZGF5cywgMik7XG5cbiAgICAgICAgY2FzZSAnZGRkJzpcbiAgICAgICAgICByZXR1cm4gZ2V0U2hvcnQobG9jYWxlLndlZWtkYXlzU2hvcnQsIF90aGlzMy4kVywgd2Vla2RheXMsIDMpO1xuXG4gICAgICAgIGNhc2UgJ2RkZGQnOlxuICAgICAgICAgIHJldHVybiB3ZWVrZGF5c1tfdGhpczMuJFddO1xuXG4gICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgIHJldHVybiBTdHJpbmcoJEgpO1xuXG4gICAgICAgIGNhc2UgJ0hIJzpcbiAgICAgICAgICByZXR1cm4gVXRpbHMucygkSCwgMiwgJzAnKTtcblxuICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICByZXR1cm4gZ2V0JEgoMSk7XG5cbiAgICAgICAgY2FzZSAnaGgnOlxuICAgICAgICAgIHJldHVybiBnZXQkSCgyKTtcblxuICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICByZXR1cm4gbWVyaWRpZW1GdW5jKCRILCAkbSwgdHJ1ZSk7XG5cbiAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgcmV0dXJuIG1lcmlkaWVtRnVuYygkSCwgJG0sIGZhbHNlKTtcblxuICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKCRtKTtcblxuICAgICAgICBjYXNlICdtbSc6XG4gICAgICAgICAgcmV0dXJuIFV0aWxzLnMoJG0sIDIsICcwJyk7XG5cbiAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyhfdGhpczMuJHMpO1xuXG4gICAgICAgIGNhc2UgJ3NzJzpcbiAgICAgICAgICByZXR1cm4gVXRpbHMucyhfdGhpczMuJHMsIDIsICcwJyk7XG5cbiAgICAgICAgY2FzZSAnU1NTJzpcbiAgICAgICAgICByZXR1cm4gVXRpbHMucyhfdGhpczMuJG1zLCAzLCAnMCcpO1xuXG4gICAgICAgIGNhc2UgJ1onOlxuICAgICAgICAgIHJldHVybiB6b25lU3RyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKFJFR0VYX0ZPUk1BVCwgZnVuY3Rpb24gKG1hdGNoLCAkMSkge1xuICAgICAgcmV0dXJuICQxIHx8IG1hdGNoZXMobWF0Y2gpIHx8IHpvbmVTdHIucmVwbGFjZSgnOicsICcnKTtcbiAgICB9KTsgLy8gJ1paJ1xuICB9O1xuXG4gIF9wcm90by51dGNPZmZzZXQgPSBmdW5jdGlvbiB1dGNPZmZzZXQoKSB7XG4gICAgLy8gQmVjYXVzZSBhIGJ1ZyBhdCBGRjI0LCB3ZSdyZSByb3VuZGluZyB0aGUgdGltZXpvbmUgb2Zmc2V0IGFyb3VuZCAxNSBtaW51dGVzXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvcHVsbC8xODcxXG4gICAgcmV0dXJuIC1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDE1KSAqIDE1O1xuICB9O1xuXG4gIF9wcm90by5kaWZmID0gZnVuY3Rpb24gZGlmZihpbnB1dCwgdW5pdHMsIF9mbG9hdCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIHVuaXQgPSBVdGlscy5wKHVuaXRzKTtcbiAgICB2YXIgdGhhdCA9IGRheWpzKGlucHV0KTtcbiAgICB2YXIgem9uZURlbHRhID0gKHRoYXQudXRjT2Zmc2V0KCkgLSB0aGlzLnV0Y09mZnNldCgpKSAqIE1JTExJU0VDT05EU19BX01JTlVURTtcbiAgICB2YXIgZGlmZiA9IHRoaXMgLSB0aGF0O1xuXG4gICAgdmFyIGdldE1vbnRoID0gZnVuY3Rpb24gZ2V0TW9udGgoKSB7XG4gICAgICByZXR1cm4gVXRpbHMubShfdGhpczQsIHRoYXQpO1xuICAgIH07XG5cbiAgICB2YXIgcmVzdWx0O1xuXG4gICAgc3dpdGNoICh1bml0KSB7XG4gICAgICBjYXNlIFk6XG4gICAgICAgIHJlc3VsdCA9IGdldE1vbnRoKCkgLyAxMjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTTpcbiAgICAgICAgcmVzdWx0ID0gZ2V0TW9udGgoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgUTpcbiAgICAgICAgcmVzdWx0ID0gZ2V0TW9udGgoKSAvIDM7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFc6XG4gICAgICAgIHJlc3VsdCA9IChkaWZmIC0gem9uZURlbHRhKSAvIE1JTExJU0VDT05EU19BX1dFRUs7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEQ6XG4gICAgICAgIHJlc3VsdCA9IChkaWZmIC0gem9uZURlbHRhKSAvIE1JTExJU0VDT05EU19BX0RBWTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgSDpcbiAgICAgICAgcmVzdWx0ID0gZGlmZiAvIE1JTExJU0VDT05EU19BX0hPVVI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE1JTjpcbiAgICAgICAgcmVzdWx0ID0gZGlmZiAvIE1JTExJU0VDT05EU19BX01JTlVURTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgUzpcbiAgICAgICAgcmVzdWx0ID0gZGlmZiAvIE1JTExJU0VDT05EU19BX1NFQ09ORDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlc3VsdCA9IGRpZmY7IC8vIG1pbGxpc2Vjb25kc1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBfZmxvYXQgPyByZXN1bHQgOiBVdGlscy5hKHJlc3VsdCk7XG4gIH07XG5cbiAgX3Byb3RvLmRheXNJbk1vbnRoID0gZnVuY3Rpb24gZGF5c0luTW9udGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5kT2YoTSkuJEQ7XG4gIH07XG5cbiAgX3Byb3RvLiRsb2NhbGUgPSBmdW5jdGlvbiAkbG9jYWxlKCkge1xuICAgIC8vIGdldCBsb2NhbGUgb2JqZWN0XG4gICAgcmV0dXJuIExzW3RoaXMuJExdO1xuICB9O1xuXG4gIF9wcm90by5sb2NhbGUgPSBmdW5jdGlvbiBsb2NhbGUocHJlc2V0LCBvYmplY3QpIHtcbiAgICBpZiAoIXByZXNldCkgcmV0dXJuIHRoaXMuJEw7XG4gICAgdmFyIHRoYXQgPSB0aGlzLmNsb25lKCk7XG4gICAgdmFyIG5leHRMb2NhbGVOYW1lID0gcGFyc2VMb2NhbGUocHJlc2V0LCBvYmplY3QsIHRydWUpO1xuICAgIGlmIChuZXh0TG9jYWxlTmFtZSkgdGhhdC4kTCA9IG5leHRMb2NhbGVOYW1lO1xuICAgIHJldHVybiB0aGF0O1xuICB9O1xuXG4gIF9wcm90by5jbG9uZSA9IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgIHJldHVybiBVdGlscy53KHRoaXMuJGQsIHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by50b0RhdGUgPSBmdW5jdGlvbiB0b0RhdGUoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKTtcbiAgfTtcblxuICBfcHJvdG8udG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMudG9JU09TdHJpbmcoKSA6IG51bGw7XG4gIH07XG5cbiAgX3Byb3RvLnRvSVNPU3RyaW5nID0gZnVuY3Rpb24gdG9JU09TdHJpbmcoKSB7XG4gICAgLy8gaWUgOCByZXR1cm5cbiAgICAvLyBuZXcgRGF5anModGhpcy52YWx1ZU9mKCkgKyB0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMClcbiAgICAvLyAuZm9ybWF0KCdZWVlZLU1NLUREVEhIOm1tOnNzLlNTU1taXScpXG4gICAgcmV0dXJuIHRoaXMuJGQudG9JU09TdHJpbmcoKTtcbiAgfTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpO1xuICB9O1xuXG4gIHJldHVybiBEYXlqcztcbn0oKTtcblxudmFyIHByb3RvID0gRGF5anMucHJvdG90eXBlO1xuZGF5anMucHJvdG90eXBlID0gcHJvdG87XG5bWyckbXMnLCBNU10sIFsnJHMnLCBTXSwgWyckbScsIE1JTl0sIFsnJEgnLCBIXSwgWyckVycsIERdLCBbJyRNJywgTV0sIFsnJHknLCBZXSwgWyckRCcsIERBVEVdXS5mb3JFYWNoKGZ1bmN0aW9uIChnKSB7XG4gIHByb3RvW2dbMV1dID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuJGcoaW5wdXQsIGdbMF0sIGdbMV0pO1xuICB9O1xufSk7XG5cbmRheWpzLmV4dGVuZCA9IGZ1bmN0aW9uIChwbHVnaW4sIG9wdGlvbikge1xuICBpZiAoIXBsdWdpbi4kaSkge1xuICAgIC8vIGluc3RhbGwgcGx1Z2luIG9ubHkgb25jZVxuICAgIHBsdWdpbihvcHRpb24sIERheWpzLCBkYXlqcyk7XG4gICAgcGx1Z2luLiRpID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBkYXlqcztcbn07XG5cbmRheWpzLmxvY2FsZSA9IHBhcnNlTG9jYWxlO1xuZGF5anMuaXNEYXlqcyA9IGlzRGF5anM7XG5cbmRheWpzLnVuaXggPSBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gIHJldHVybiBkYXlqcyh0aW1lc3RhbXAgKiAxZTMpO1xufTtcblxuZGF5anMuZW4gPSBMc1tMXTtcbmRheWpzLkxzID0gTHM7XG5kYXlqcy5wID0ge307XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG52YXIgdCA9IGZ1bmN0aW9uIHQoZm9ybWF0KSB7XG4gIHJldHVybiBmb3JtYXQucmVwbGFjZSgvKFxcW1teXFxdXStdKXwoTU1NTXxNTXxERHxkZGRkKS9nLCBmdW5jdGlvbiAoXywgYSwgYikge1xuICAgIHJldHVybiBhIHx8IGIuc2xpY2UoMSk7XG4gIH0pO1xufTtcbnZhciBlbmdsaXNoRm9ybWF0cyA9IHtcbiAgTFRTOiAnaDptbTpzcyBBJyxcbiAgTFQ6ICdoOm1tIEEnLFxuICBMOiAnTU0vREQvWVlZWScsXG4gIExMOiAnTU1NTSBELCBZWVlZJyxcbiAgTExMOiAnTU1NTSBELCBZWVlZIGg6bW0gQScsXG4gIExMTEw6ICdkZGRkLCBNTU1NIEQsIFlZWVkgaDptbSBBJ1xufTtcbnZhciB1ID0gZnVuY3Rpb24gdShmb3JtYXRTdHIsIGZvcm1hdHMpIHtcbiAgcmV0dXJuIGZvcm1hdFN0ci5yZXBsYWNlKC8oXFxbW15cXF1dK10pfChMVFM/fGx7MSw0fXxMezEsNH0pL2csIGZ1bmN0aW9uIChfLCBhLCBiKSB7XG4gICAgdmFyIEIgPSBiICYmIGIudG9VcHBlckNhc2UoKTtcbiAgICByZXR1cm4gYSB8fCBmb3JtYXRzW2JdIHx8IGVuZ2xpc2hGb3JtYXRzW2JdIHx8IHQoZm9ybWF0c1tCXSk7XG4gIH0pO1xufTtcblxudmFyIGZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teW10qXFxdKXwoWy1fOi8uLCgpXFxzXSspfChBfGF8WVlZWXxZWT98TU0/TT9NP3xEb3xERD98aGg/fEhIP3xtbT98c3M/fFN7MSwzfXx6fFpaPykvZztcbnZhciBtYXRjaDEgPSAvXFxkLzsgLy8gMCAtIDlcblxudmFyIG1hdGNoMiA9IC9cXGRcXGQvOyAvLyAwMCAtIDk5XG5cbnZhciBtYXRjaDMgPSAvXFxkezN9LzsgLy8gMDAwIC0gOTk5XG5cbnZhciBtYXRjaDQgPSAvXFxkezR9LzsgLy8gMDAwMCAtIDk5OTlcblxudmFyIG1hdGNoMXRvMiA9IC9cXGRcXGQ/LzsgLy8gMCAtIDk5XG5cbnZhciBtYXRjaFNpZ25lZCA9IC9bKy1dP1xcZCsvOyAvLyAtaW5mIC0gaW5mXG5cbnZhciBtYXRjaE9mZnNldCA9IC9bKy1dXFxkXFxkOj8oXFxkXFxkKT98Wi87IC8vICswMDowMCAtMDA6MDAgKzAwMDAgb3IgLTAwMDAgKzAwIG9yIFpcblxudmFyIG1hdGNoV29yZCA9IC9cXGQqW14tXzovLCgpXFxzXFxkXSsvOyAvLyBXb3JkXG5cbnZhciBsb2NhbGUgPSB7fTtcblxudmFyIHBhcnNlVHdvRGlnaXRZZWFyID0gZnVuY3Rpb24gcGFyc2VUd29EaWdpdFllYXIoaW5wdXQpIHtcbiAgaW5wdXQgPSAraW5wdXQ7XG4gIHJldHVybiBpbnB1dCArIChpbnB1dCA+IDY4ID8gMTkwMCA6IDIwMDApO1xufTtcblxuZnVuY3Rpb24gb2Zmc2V0RnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgaWYgKCFzdHJpbmcpIHJldHVybiAwO1xuICBpZiAoc3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgcGFydHMgPSBzdHJpbmcubWF0Y2goLyhbKy1dfFxcZFxcZCkvZyk7XG4gIHZhciBtaW51dGVzID0gKyhwYXJ0c1sxXSAqIDYwKSArICgrcGFydHNbMl0gfHwgMCk7XG4gIHJldHVybiBtaW51dGVzID09PSAwID8gMCA6IHBhcnRzWzBdID09PSAnKycgPyAtbWludXRlcyA6IG1pbnV0ZXM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbn1cblxudmFyIGFkZElucHV0ID0gZnVuY3Rpb24gYWRkSW5wdXQocHJvcGVydHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHRoaXNbcHJvcGVydHldID0gK2lucHV0O1xuICB9O1xufTtcblxudmFyIHpvbmVFeHByZXNzaW9ucyA9IFttYXRjaE9mZnNldCwgZnVuY3Rpb24gKGlucHV0KSB7XG4gIHZhciB6b25lID0gdGhpcy56b25lIHx8ICh0aGlzLnpvbmUgPSB7fSk7XG4gIHpvbmUub2Zmc2V0ID0gb2Zmc2V0RnJvbVN0cmluZyhpbnB1dCk7XG59XTtcblxudmFyIGdldExvY2FsZVBhcnQgPSBmdW5jdGlvbiBnZXRMb2NhbGVQYXJ0KG5hbWUpIHtcbiAgdmFyIHBhcnQgPSBsb2NhbGVbbmFtZV07XG4gIHJldHVybiBwYXJ0ICYmIChwYXJ0LmluZGV4T2YgPyBwYXJ0IDogcGFydC5zLmNvbmNhdChwYXJ0LmYpKTtcbn07XG5cbnZhciBtZXJpZGllbU1hdGNoID0gZnVuY3Rpb24gbWVyaWRpZW1NYXRjaChpbnB1dCwgaXNMb3dlckNhc2UpIHtcbiAgdmFyIGlzQWZ0ZXJub29uO1xuICB2YXIgX2xvY2FsZSA9IGxvY2FsZSxcbiAgICAgIG1lcmlkaWVtID0gX2xvY2FsZS5tZXJpZGllbTtcblxuICBpZiAoIW1lcmlkaWVtKSB7XG4gICAgaXNBZnRlcm5vb24gPSBpbnB1dCA9PT0gKGlzTG93ZXJDYXNlID8gJ3BtJyA6ICdQTScpO1xuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IDI0OyBpICs9IDEpIHtcbiAgICAgIC8vIHRvZG86IGZpeCBpbnB1dCA9PT0gbWVyaWRpZW0oaSwgMCwgaXNMb3dlckNhc2UpXG4gICAgICBpZiAoaW5wdXQuaW5kZXhPZihtZXJpZGllbShpLCAwLCBpc0xvd2VyQ2FzZSkpID4gLTEpIHtcbiAgICAgICAgaXNBZnRlcm5vb24gPSBpID4gMTI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0FmdGVybm9vbjtcbn07XG5cbnZhciBleHByZXNzaW9ucyA9IHtcbiAgQTogW21hdGNoV29yZCwgZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdGhpcy5hZnRlcm5vb24gPSBtZXJpZGllbU1hdGNoKGlucHV0LCBmYWxzZSk7XG4gIH1dLFxuICBhOiBbbWF0Y2hXb3JkLCBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICB0aGlzLmFmdGVybm9vbiA9IG1lcmlkaWVtTWF0Y2goaW5wdXQsIHRydWUpO1xuICB9XSxcbiAgUzogW21hdGNoMSwgZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdGhpcy5taWxsaXNlY29uZHMgPSAraW5wdXQgKiAxMDA7XG4gIH1dLFxuICBTUzogW21hdGNoMiwgZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdGhpcy5taWxsaXNlY29uZHMgPSAraW5wdXQgKiAxMDtcbiAgfV0sXG4gIFNTUzogW21hdGNoMywgZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdGhpcy5taWxsaXNlY29uZHMgPSAraW5wdXQ7XG4gIH1dLFxuICBzOiBbbWF0Y2gxdG8yLCBhZGRJbnB1dCgnc2Vjb25kcycpXSxcbiAgc3M6IFttYXRjaDF0bzIsIGFkZElucHV0KCdzZWNvbmRzJyldLFxuICBtOiBbbWF0Y2gxdG8yLCBhZGRJbnB1dCgnbWludXRlcycpXSxcbiAgbW06IFttYXRjaDF0bzIsIGFkZElucHV0KCdtaW51dGVzJyldLFxuICBIOiBbbWF0Y2gxdG8yLCBhZGRJbnB1dCgnaG91cnMnKV0sXG4gIGg6IFttYXRjaDF0bzIsIGFkZElucHV0KCdob3VycycpXSxcbiAgSEg6IFttYXRjaDF0bzIsIGFkZElucHV0KCdob3VycycpXSxcbiAgaGg6IFttYXRjaDF0bzIsIGFkZElucHV0KCdob3VycycpXSxcbiAgRDogW21hdGNoMXRvMiwgYWRkSW5wdXQoJ2RheScpXSxcbiAgREQ6IFttYXRjaDIsIGFkZElucHV0KCdkYXknKV0sXG4gIERvOiBbbWF0Y2hXb3JkLCBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICB2YXIgX2xvY2FsZTIgPSBsb2NhbGUsXG4gICAgICAgIG9yZGluYWwgPSBfbG9jYWxlMi5vcmRpbmFsO1xuXG4gICAgdmFyIF9pbnB1dCRtYXRjaCA9IGlucHV0Lm1hdGNoKC9cXGQrLyk7XG5cbiAgICB0aGlzLmRheSA9IF9pbnB1dCRtYXRjaFswXTtcbiAgICBpZiAoIW9yZGluYWwpIHJldHVybjtcblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IDMxOyBpICs9IDEpIHtcbiAgICAgIGlmIChvcmRpbmFsKGkpLnJlcGxhY2UoL1xcW3xcXF0vZywgJycpID09PSBpbnB1dCkge1xuICAgICAgICB0aGlzLmRheSA9IGk7XG4gICAgICB9XG4gICAgfVxuICB9XSxcbiAgTTogW21hdGNoMXRvMiwgYWRkSW5wdXQoJ21vbnRoJyldLFxuICBNTTogW21hdGNoMiwgYWRkSW5wdXQoJ21vbnRoJyldLFxuICBNTU06IFttYXRjaFdvcmQsIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHZhciBtb250aHMgPSBnZXRMb2NhbGVQYXJ0KCdtb250aHMnKTtcbiAgICB2YXIgbW9udGhzU2hvcnQgPSBnZXRMb2NhbGVQYXJ0KCdtb250aHNTaG9ydCcpO1xuICAgIHZhciBtYXRjaEluZGV4ID0gKG1vbnRoc1Nob3J0IHx8IG1vbnRocy5tYXAoZnVuY3Rpb24gKF8pIHtcbiAgICAgIHJldHVybiBfLnNsaWNlKDAsIDMpO1xuICAgIH0pKS5pbmRleE9mKGlucHV0KSArIDE7XG5cbiAgICBpZiAobWF0Y2hJbmRleCA8IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cblxuICAgIHRoaXMubW9udGggPSBtYXRjaEluZGV4ICUgMTIgfHwgbWF0Y2hJbmRleDtcbiAgfV0sXG4gIE1NTU06IFttYXRjaFdvcmQsIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHZhciBtb250aHMgPSBnZXRMb2NhbGVQYXJ0KCdtb250aHMnKTtcbiAgICB2YXIgbWF0Y2hJbmRleCA9IG1vbnRocy5pbmRleE9mKGlucHV0KSArIDE7XG5cbiAgICBpZiAobWF0Y2hJbmRleCA8IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cblxuICAgIHRoaXMubW9udGggPSBtYXRjaEluZGV4ICUgMTIgfHwgbWF0Y2hJbmRleDtcbiAgfV0sXG4gIFk6IFttYXRjaFNpZ25lZCwgYWRkSW5wdXQoJ3llYXInKV0sXG4gIFlZOiBbbWF0Y2gyLCBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICB0aGlzLnllYXIgPSBwYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCk7XG4gIH1dLFxuICBZWVlZOiBbbWF0Y2g0LCBhZGRJbnB1dCgneWVhcicpXSxcbiAgWjogem9uZUV4cHJlc3Npb25zLFxuICBaWjogem9uZUV4cHJlc3Npb25zXG59O1xuXG5mdW5jdGlvbiBjb3JyZWN0SG91cnModGltZSkge1xuICB2YXIgYWZ0ZXJub29uID0gdGltZS5hZnRlcm5vb247XG5cbiAgaWYgKGFmdGVybm9vbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGhvdXJzID0gdGltZS5ob3VycztcblxuICAgIGlmIChhZnRlcm5vb24pIHtcbiAgICAgIGlmIChob3VycyA8IDEyKSB7XG4gICAgICAgIHRpbWUuaG91cnMgKz0gMTI7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIHRpbWUuaG91cnMgPSAwO1xuICAgIH1cblxuICAgIGRlbGV0ZSB0aW1lLmFmdGVybm9vbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlUGFyc2VyKGZvcm1hdCkge1xuICBmb3JtYXQgPSB1KGZvcm1hdCwgbG9jYWxlICYmIGxvY2FsZS5mb3JtYXRzKTtcbiAgdmFyIGFycmF5ID0gZm9ybWF0Lm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpO1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgdG9rZW4gPSBhcnJheVtpXTtcbiAgICB2YXIgcGFyc2VUbyA9IGV4cHJlc3Npb25zW3Rva2VuXTtcbiAgICB2YXIgcmVnZXggPSBwYXJzZVRvICYmIHBhcnNlVG9bMF07XG4gICAgdmFyIHBhcnNlciA9IHBhcnNlVG8gJiYgcGFyc2VUb1sxXTtcblxuICAgIGlmIChwYXJzZXIpIHtcbiAgICAgIGFycmF5W2ldID0ge1xuICAgICAgICByZWdleDogcmVnZXgsXG4gICAgICAgIHBhcnNlcjogcGFyc2VyXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBhcnJheVtpXSA9IHRva2VuLnJlcGxhY2UoL15cXFt8XFxdJC9nLCAnJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHZhciB0aW1lID0ge307XG5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHN0YXJ0ID0gMDsgX2kgPCBsZW5ndGg7IF9pICs9IDEpIHtcbiAgICAgIHZhciBfdG9rZW4gPSBhcnJheVtfaV07XG5cbiAgICAgIGlmICh0eXBlb2YgX3Rva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICBzdGFydCArPSBfdG9rZW4ubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF9yZWdleCA9IF90b2tlbi5yZWdleCxcbiAgICAgICAgICAgIF9wYXJzZXIgPSBfdG9rZW4ucGFyc2VyO1xuICAgICAgICB2YXIgcGFydCA9IGlucHV0LnNsaWNlKHN0YXJ0KTtcblxuICAgICAgICB2YXIgbWF0Y2ggPSBfcmVnZXguZXhlYyhwYXJ0KTtcblxuICAgICAgICB2YXIgdmFsdWUgPSBtYXRjaFswXTtcblxuICAgICAgICBfcGFyc2VyLmNhbGwodGltZSwgdmFsdWUpO1xuXG4gICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSh2YWx1ZSwgJycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvcnJlY3RIb3Vycyh0aW1lKTtcbiAgICByZXR1cm4gdGltZTtcbiAgfTtcbn1cblxudmFyIHBhcnNlRm9ybWF0dGVkSW5wdXQgPSBmdW5jdGlvbiBwYXJzZUZvcm1hdHRlZElucHV0KGlucHV0LCBmb3JtYXQsIHV0Yykge1xuICB0cnkge1xuICAgIGlmIChbJ3gnLCAnWCddLmluZGV4T2YoZm9ybWF0KSA+IC0xKSByZXR1cm4gbmV3IERhdGUoKGZvcm1hdCA9PT0gJ1gnID8gMTAwMCA6IDEpICogaW5wdXQpO1xuICAgIHZhciBwYXJzZXIgPSBtYWtlUGFyc2VyKGZvcm1hdCk7XG5cbiAgICB2YXIgX3BhcnNlcjIgPSBwYXJzZXIoaW5wdXQpLFxuICAgICAgICB5ZWFyID0gX3BhcnNlcjIueWVhcixcbiAgICAgICAgbW9udGggPSBfcGFyc2VyMi5tb250aCxcbiAgICAgICAgZGF5ID0gX3BhcnNlcjIuZGF5LFxuICAgICAgICBob3VycyA9IF9wYXJzZXIyLmhvdXJzLFxuICAgICAgICBtaW51dGVzID0gX3BhcnNlcjIubWludXRlcyxcbiAgICAgICAgc2Vjb25kcyA9IF9wYXJzZXIyLnNlY29uZHMsXG4gICAgICAgIG1pbGxpc2Vjb25kcyA9IF9wYXJzZXIyLm1pbGxpc2Vjb25kcyxcbiAgICAgICAgem9uZSA9IF9wYXJzZXIyLnpvbmU7XG5cbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgZCA9IGRheSB8fCAoIXllYXIgJiYgIW1vbnRoID8gbm93LmdldERhdGUoKSA6IDEpO1xuICAgIHZhciB5ID0geWVhciB8fCBub3cuZ2V0RnVsbFllYXIoKTtcbiAgICB2YXIgTSA9IDA7XG5cbiAgICBpZiAoISh5ZWFyICYmICFtb250aCkpIHtcbiAgICAgIE0gPSBtb250aCA+IDAgPyBtb250aCAtIDEgOiBub3cuZ2V0TW9udGgoKTtcbiAgICB9XG5cbiAgICB2YXIgaCA9IGhvdXJzIHx8IDA7XG4gICAgdmFyIG0gPSBtaW51dGVzIHx8IDA7XG4gICAgdmFyIHMgPSBzZWNvbmRzIHx8IDA7XG4gICAgdmFyIG1zID0gbWlsbGlzZWNvbmRzIHx8IDA7XG5cbiAgICBpZiAoem9uZSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKHksIE0sIGQsIGgsIG0sIHMsIG1zICsgem9uZS5vZmZzZXQgKiA2MCAqIDEwMDApKTtcbiAgICB9XG5cbiAgICBpZiAodXRjKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoeSwgTSwgZCwgaCwgbSwgcywgbXMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoeSwgTSwgZCwgaCwgbSwgcywgbXMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCcnKTsgLy8gSW52YWxpZCBEYXRlXG4gIH1cbn07XG5cbmNvbnN0IGN1c3RvbVBhcnNlRm9ybWF0ID0gKGZ1bmN0aW9uIChvLCBDLCBkKSB7XG4gIGQucC5jdXN0b21QYXJzZUZvcm1hdCA9IHRydWU7XG5cbiAgaWYgKG8gJiYgby5wYXJzZVR3b0RpZ2l0WWVhcikge1xuICAgIHBhcnNlVHdvRGlnaXRZZWFyID0gby5wYXJzZVR3b0RpZ2l0WWVhcjtcbiAgfVxuXG4gIHZhciBwcm90byA9IEMucHJvdG90eXBlO1xuICB2YXIgb2xkUGFyc2UgPSBwcm90by5wYXJzZTtcblxuICBwcm90by5wYXJzZSA9IGZ1bmN0aW9uIChjZmcpIHtcbiAgICB2YXIgZGF0ZSA9IGNmZy5kYXRlLFxuICAgICAgICB1dGMgPSBjZmcudXRjLFxuICAgICAgICBhcmdzID0gY2ZnLmFyZ3M7XG4gICAgdGhpcy4kdSA9IHV0YztcbiAgICB2YXIgZm9ybWF0ID0gYXJnc1sxXTtcblxuICAgIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGlzU3RyaWN0V2l0aG91dExvY2FsZSA9IGFyZ3NbMl0gPT09IHRydWU7XG4gICAgICB2YXIgaXNTdHJpY3RXaXRoTG9jYWxlID0gYXJnc1szXSA9PT0gdHJ1ZTtcbiAgICAgIHZhciBpc1N0cmljdCA9IGlzU3RyaWN0V2l0aG91dExvY2FsZSB8fCBpc1N0cmljdFdpdGhMb2NhbGU7XG4gICAgICB2YXIgcGwgPSBhcmdzWzJdO1xuXG4gICAgICBpZiAoaXNTdHJpY3RXaXRoTG9jYWxlKSB7XG4gICAgICAgIHBsID0gYXJnc1syXTtcbiAgICAgIH1cblxuICAgICAgbG9jYWxlID0gdGhpcy4kbG9jYWxlKCk7XG5cbiAgICAgIGlmICghaXNTdHJpY3RXaXRob3V0TG9jYWxlICYmIHBsKSB7XG4gICAgICAgIGxvY2FsZSA9IGQuTHNbcGxdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiRkID0gcGFyc2VGb3JtYXR0ZWRJbnB1dChkYXRlLCBmb3JtYXQsIHV0Yyk7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIGlmIChwbCAmJiBwbCAhPT0gdHJ1ZSkgdGhpcy4kTCA9IHRoaXMubG9jYWxlKHBsKS4kTDsgLy8gdXNlICE9IHRvIHRyZWF0XG4gICAgICAvLyBpbnB1dCBudW1iZXIgMTQxMDcxNTY0MDU3OSBhbmQgZm9ybWF0IHN0cmluZyAnMTQxMDcxNTY0MDU3OScgZXF1YWxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblxuICAgICAgaWYgKGlzU3RyaWN0ICYmIGRhdGUgIT0gdGhpcy5mb3JtYXQoZm9ybWF0KSkge1xuICAgICAgICB0aGlzLiRkID0gbmV3IERhdGUoJycpO1xuICAgICAgfSAvLyByZXNldCBnbG9iYWwgbG9jYWxlIHRvIG1ha2UgcGFyYWxsZWwgdW5pdCB0ZXN0XG5cblxuICAgICAgbG9jYWxlID0ge307XG4gICAgfSBlbHNlIGlmIChmb3JtYXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgdmFyIGxlbiA9IGZvcm1hdC5sZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGFyZ3NbMV0gPSBmb3JtYXRbaSAtIDFdO1xuICAgICAgICB2YXIgcmVzdWx0ID0gZC5hcHBseSh0aGlzLCBhcmdzKTtcblxuICAgICAgICBpZiAocmVzdWx0LmlzVmFsaWQoKSkge1xuICAgICAgICAgIHRoaXMuJGQgPSByZXN1bHQuJGQ7XG4gICAgICAgICAgdGhpcy4kTCA9IHJlc3VsdC4kTDtcbiAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpID09PSBsZW4pIHRoaXMuJGQgPSBuZXcgRGF0ZSgnJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9sZFBhcnNlLmNhbGwodGhpcywgY2ZnKTtcbiAgICB9XG4gIH07XG59KTtcblxuY29uc3QgbG9jYWxlRGF0YSA9IChmdW5jdGlvbiAobywgYywgZGF5anMpIHtcbiAgLy8gbG9jYWxlIG5lZWRlZCBsYXRlclxuICB2YXIgcHJvdG8gPSBjLnByb3RvdHlwZTtcblxuICB2YXIgZ2V0TG9jYWxlUGFydCA9IGZ1bmN0aW9uIGdldExvY2FsZVBhcnQocGFydCkge1xuICAgIHJldHVybiBwYXJ0ICYmIChwYXJ0LmluZGV4T2YgPyBwYXJ0IDogcGFydC5zKTtcbiAgfTtcblxuICB2YXIgZ2V0U2hvcnQgPSBmdW5jdGlvbiBnZXRTaG9ydChpbnMsIHRhcmdldCwgZnVsbCwgbnVtLCBsb2NhbGVPcmRlcikge1xuICAgIHZhciBsb2NhbGUgPSBpbnMubmFtZSA/IGlucyA6IGlucy4kbG9jYWxlKCk7XG4gICAgdmFyIHRhcmdldExvY2FsZSA9IGdldExvY2FsZVBhcnQobG9jYWxlW3RhcmdldF0pO1xuICAgIHZhciBmdWxsTG9jYWxlID0gZ2V0TG9jYWxlUGFydChsb2NhbGVbZnVsbF0pO1xuICAgIHZhciByZXN1bHQgPSB0YXJnZXRMb2NhbGUgfHwgZnVsbExvY2FsZS5tYXAoZnVuY3Rpb24gKGYpIHtcbiAgICAgIHJldHVybiBmLnNsaWNlKDAsIG51bSk7XG4gICAgfSk7XG4gICAgaWYgKCFsb2NhbGVPcmRlcikgcmV0dXJuIHJlc3VsdDtcbiAgICB2YXIgd2Vla1N0YXJ0ID0gbG9jYWxlLndlZWtTdGFydDtcbiAgICByZXR1cm4gcmVzdWx0Lm1hcChmdW5jdGlvbiAoXywgaW5kZXgpIHtcbiAgICAgIHJldHVybiByZXN1bHRbKGluZGV4ICsgKHdlZWtTdGFydCB8fCAwKSkgJSA3XTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZ2V0RGF5anNMb2NhbGVPYmplY3QgPSBmdW5jdGlvbiBnZXREYXlqc0xvY2FsZU9iamVjdCgpIHtcbiAgICByZXR1cm4gZGF5anMuTHNbZGF5anMubG9jYWxlKCldO1xuICB9O1xuXG4gIHZhciBnZXRMb25nRGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIGdldExvbmdEYXRlRm9ybWF0KGwsIGZvcm1hdCkge1xuICAgIHJldHVybiBsLmZvcm1hdHNbZm9ybWF0XSB8fCB0KGwuZm9ybWF0c1tmb3JtYXQudG9VcHBlckNhc2UoKV0pO1xuICB9O1xuXG4gIHZhciBsb2NhbGVEYXRhID0gZnVuY3Rpb24gbG9jYWxlRGF0YSgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1vbnRoczogZnVuY3Rpb24gbW9udGhzKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZSA/IGluc3RhbmNlLmZvcm1hdCgnTU1NTScpIDogZ2V0U2hvcnQoX3RoaXMsICdtb250aHMnKTtcbiAgICAgIH0sXG4gICAgICBtb250aHNTaG9ydDogZnVuY3Rpb24gbW9udGhzU2hvcnQoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlID8gaW5zdGFuY2UuZm9ybWF0KCdNTU0nKSA6IGdldFNob3J0KF90aGlzLCAnbW9udGhzU2hvcnQnLCAnbW9udGhzJywgMyk7XG4gICAgICB9LFxuICAgICAgZmlyc3REYXlPZldlZWs6IGZ1bmN0aW9uIGZpcnN0RGF5T2ZXZWVrKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuJGxvY2FsZSgpLndlZWtTdGFydCB8fCAwO1xuICAgICAgfSxcbiAgICAgIHdlZWtkYXlzOiBmdW5jdGlvbiB3ZWVrZGF5cyhpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UgPyBpbnN0YW5jZS5mb3JtYXQoJ2RkZGQnKSA6IGdldFNob3J0KF90aGlzLCAnd2Vla2RheXMnKTtcbiAgICAgIH0sXG4gICAgICB3ZWVrZGF5c01pbjogZnVuY3Rpb24gd2Vla2RheXNNaW4oaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlID8gaW5zdGFuY2UuZm9ybWF0KCdkZCcpIDogZ2V0U2hvcnQoX3RoaXMsICd3ZWVrZGF5c01pbicsICd3ZWVrZGF5cycsIDIpO1xuICAgICAgfSxcbiAgICAgIHdlZWtkYXlzU2hvcnQ6IGZ1bmN0aW9uIHdlZWtkYXlzU2hvcnQoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlID8gaW5zdGFuY2UuZm9ybWF0KCdkZGQnKSA6IGdldFNob3J0KF90aGlzLCAnd2Vla2RheXNTaG9ydCcsICd3ZWVrZGF5cycsIDMpO1xuICAgICAgfSxcbiAgICAgIGxvbmdEYXRlRm9ybWF0OiBmdW5jdGlvbiBsb25nRGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIGdldExvbmdEYXRlRm9ybWF0KF90aGlzLiRsb2NhbGUoKSwgZm9ybWF0KTtcbiAgICAgIH0sXG4gICAgICBtZXJpZGllbTogdGhpcy4kbG9jYWxlKCkubWVyaWRpZW0sXG4gICAgICBvcmRpbmFsOiB0aGlzLiRsb2NhbGUoKS5vcmRpbmFsXG4gICAgfTtcbiAgfTtcblxuICBwcm90by5sb2NhbGVEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBsb2NhbGVEYXRhLmJpbmQodGhpcykoKTtcbiAgfTtcblxuICBkYXlqcy5sb2NhbGVEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsb2NhbGVPYmplY3QgPSBnZXREYXlqc0xvY2FsZU9iamVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICBmaXJzdERheU9mV2VlazogZnVuY3Rpb24gZmlyc3REYXlPZldlZWsoKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGVPYmplY3Qud2Vla1N0YXJ0IHx8IDA7XG4gICAgICB9LFxuICAgICAgd2Vla2RheXM6IGZ1bmN0aW9uIHdlZWtkYXlzKCkge1xuICAgICAgICByZXR1cm4gZGF5anMud2Vla2RheXMoKTtcbiAgICAgIH0sXG4gICAgICB3ZWVrZGF5c1Nob3J0OiBmdW5jdGlvbiB3ZWVrZGF5c1Nob3J0KCkge1xuICAgICAgICByZXR1cm4gZGF5anMud2Vla2RheXNTaG9ydCgpO1xuICAgICAgfSxcbiAgICAgIHdlZWtkYXlzTWluOiBmdW5jdGlvbiB3ZWVrZGF5c01pbigpIHtcbiAgICAgICAgcmV0dXJuIGRheWpzLndlZWtkYXlzTWluKCk7XG4gICAgICB9LFxuICAgICAgbW9udGhzOiBmdW5jdGlvbiBtb250aHMoKSB7XG4gICAgICAgIHJldHVybiBkYXlqcy5tb250aHMoKTtcbiAgICAgIH0sXG4gICAgICBtb250aHNTaG9ydDogZnVuY3Rpb24gbW9udGhzU2hvcnQoKSB7XG4gICAgICAgIHJldHVybiBkYXlqcy5tb250aHNTaG9ydCgpO1xuICAgICAgfSxcbiAgICAgIGxvbmdEYXRlRm9ybWF0OiBmdW5jdGlvbiBsb25nRGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIGdldExvbmdEYXRlRm9ybWF0KGxvY2FsZU9iamVjdCwgZm9ybWF0KTtcbiAgICAgIH0sXG4gICAgICBtZXJpZGllbTogbG9jYWxlT2JqZWN0Lm1lcmlkaWVtLFxuICAgICAgb3JkaW5hbDogbG9jYWxlT2JqZWN0Lm9yZGluYWxcbiAgICB9O1xuICB9O1xuXG4gIGRheWpzLm1vbnRocyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0U2hvcnQoZ2V0RGF5anNMb2NhbGVPYmplY3QoKSwgJ21vbnRocycpO1xuICB9O1xuXG4gIGRheWpzLm1vbnRoc1Nob3J0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnZXRTaG9ydChnZXREYXlqc0xvY2FsZU9iamVjdCgpLCAnbW9udGhzU2hvcnQnLCAnbW9udGhzJywgMyk7XG4gIH07XG5cbiAgZGF5anMud2Vla2RheXMgPSBmdW5jdGlvbiAobG9jYWxlT3JkZXIpIHtcbiAgICByZXR1cm4gZ2V0U2hvcnQoZ2V0RGF5anNMb2NhbGVPYmplY3QoKSwgJ3dlZWtkYXlzJywgbnVsbCwgbnVsbCwgbG9jYWxlT3JkZXIpO1xuICB9O1xuXG4gIGRheWpzLndlZWtkYXlzU2hvcnQgPSBmdW5jdGlvbiAobG9jYWxlT3JkZXIpIHtcbiAgICByZXR1cm4gZ2V0U2hvcnQoZ2V0RGF5anNMb2NhbGVPYmplY3QoKSwgJ3dlZWtkYXlzU2hvcnQnLCAnd2Vla2RheXMnLCAzLCBsb2NhbGVPcmRlcik7XG4gIH07XG5cbiAgZGF5anMud2Vla2RheXNNaW4gPSBmdW5jdGlvbiAobG9jYWxlT3JkZXIpIHtcbiAgICByZXR1cm4gZ2V0U2hvcnQoZ2V0RGF5anNMb2NhbGVPYmplY3QoKSwgJ3dlZWtkYXlzTWluJywgJ3dlZWtkYXlzJywgMiwgbG9jYWxlT3JkZXIpO1xuICB9O1xufSk7XG5cbmNvbnN0IGxvY2FsaXplZEZvcm1hdCA9IChmdW5jdGlvbiAobywgYywgZCkge1xuICB2YXIgcHJvdG8gPSBjLnByb3RvdHlwZTtcbiAgdmFyIG9sZEZvcm1hdCA9IHByb3RvLmZvcm1hdDtcbiAgZC5lbi5mb3JtYXRzID0gZW5nbGlzaEZvcm1hdHM7XG5cbiAgcHJvdG8uZm9ybWF0ID0gZnVuY3Rpb24gKGZvcm1hdFN0cikge1xuICAgIGlmIChmb3JtYXRTdHIgPT09IHZvaWQgMCkge1xuICAgICAgZm9ybWF0U3RyID0gRk9STUFUX0RFRkFVTFQ7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJCRsb2NhbGUgPSB0aGlzLiRsb2NhbGUoKSxcbiAgICAgICAgX3RoaXMkJGxvY2FsZSRmb3JtYXRzID0gX3RoaXMkJGxvY2FsZS5mb3JtYXRzLFxuICAgICAgICBmb3JtYXRzID0gX3RoaXMkJGxvY2FsZSRmb3JtYXRzID09PSB2b2lkIDAgPyB7fSA6IF90aGlzJCRsb2NhbGUkZm9ybWF0cztcblxuICAgIHZhciByZXN1bHQgPSB1KGZvcm1hdFN0ciwgZm9ybWF0cyk7XG4gICAgcmV0dXJuIG9sZEZvcm1hdC5jYWxsKHRoaXMsIHJlc3VsdCk7XG4gIH07XG59KTtcblxuLy8gUGx1Z2luIHRlbXBsYXRlIGZyb20gaHR0cHM6Ly9kYXkuanMub3JnL2RvY3MvZW4vcGx1Z2luL3BsdWdpblxuY29uc3QgcHJlUGFyc2VQb3N0Rm9ybWF0ID0gKGZ1bmN0aW9uIChvcHRpb24sIGRheWpzQ2xhc3MpIHtcbiAgdmFyIG9sZFBhcnNlID0gZGF5anNDbGFzcy5wcm90b3R5cGUucGFyc2U7XG5cbiAgZGF5anNDbGFzcy5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoY2ZnKSB7XG4gICAgaWYgKHR5cGVvZiBjZmcuZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBsb2NhbGUgPSB0aGlzLiRsb2NhbGUoKTtcbiAgICAgIGNmZy5kYXRlID0gbG9jYWxlICYmIGxvY2FsZS5wcmVwYXJzZSA/IGxvY2FsZS5wcmVwYXJzZShjZmcuZGF0ZSkgOiBjZmcuZGF0ZTtcbiAgICB9IC8vIG9yaWdpbmFsIHBhcnNlIHJlc3VsdFxuXG5cbiAgICByZXR1cm4gb2xkUGFyc2UuYmluZCh0aGlzKShjZmcpO1xuICB9OyAvLyAvLyBvdmVycmlkaW5nIGV4aXN0aW5nIEFQSVxuICAvLyAvLyBlLmcuIGV4dGVuZCBkYXlqcygpLmZvcm1hdCgpXG5cblxuICB2YXIgb2xkRm9ybWF0ID0gZGF5anNDbGFzcy5wcm90b3R5cGUuZm9ybWF0O1xuXG4gIGRheWpzQ2xhc3MucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgLy8gb3JpZ2luYWwgZm9ybWF0IHJlc3VsdFxuICAgIHZhciByZXN1bHQgPSBvbGRGb3JtYXQuY2FsbC5hcHBseShvbGRGb3JtYXQsIFt0aGlzXS5jb25jYXQoYXJncykpOyAvLyByZXR1cm4gbW9kaWZpZWQgcmVzdWx0XG5cbiAgICB2YXIgbG9jYWxlID0gdGhpcy4kbG9jYWxlKCk7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUucG9zdGZvcm1hdCA/IGxvY2FsZS5wb3N0Zm9ybWF0KHJlc3VsdCkgOiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIG9sZEZyb21UbyA9IGRheWpzQ2xhc3MucHJvdG90eXBlLmZyb21Ub0Jhc2U7XG5cbiAgaWYgKG9sZEZyb21Ubykge1xuICAgIGRheWpzQ2xhc3MucHJvdG90eXBlLmZyb21Ub0Jhc2UgPSBmdW5jdGlvbiAoaW5wdXQsIHdpdGhvdXRTdWZmaXgsIGluc3RhbmNlLCBpc0Zyb20pIHtcbiAgICAgIHZhciBsb2NhbGUgPSB0aGlzLiRsb2NhbGUoKSB8fCBpbnN0YW5jZS4kbG9jYWxlKCk7IC8vIG9yaWdpbmFsIGZvcm1hdCByZXN1bHRcblxuICAgICAgcmV0dXJuIG9sZEZyb21Uby5jYWxsKHRoaXMsIGlucHV0LCB3aXRob3V0U3VmZml4LCBpbnN0YW5jZSwgaXNGcm9tLCBsb2NhbGUgJiYgbG9jYWxlLnBvc3Rmb3JtYXQpO1xuICAgIH07XG4gIH1cbn0pO1xuXG5jb25zdCB1cGRhdGVMb2NhbGUgPSAoZnVuY3Rpb24gKG9wdGlvbiwgRGF5anMsIGRheWpzKSB7XG4gIGRheWpzLnVwZGF0ZUxvY2FsZSA9IGZ1bmN0aW9uIChsb2NhbGUsIGN1c3RvbUNvbmZpZykge1xuICAgIHZhciBsb2NhbGVMaXN0ID0gZGF5anMuTHM7XG4gICAgdmFyIGxvY2FsZUNvbmZpZyA9IGxvY2FsZUxpc3RbbG9jYWxlXTtcbiAgICBpZiAoIWxvY2FsZUNvbmZpZykgcmV0dXJuO1xuICAgIHZhciBjdXN0b21Db25maWdLZXlzID0gY3VzdG9tQ29uZmlnID8gT2JqZWN0LmtleXMoY3VzdG9tQ29uZmlnKSA6IFtdO1xuICAgIGN1c3RvbUNvbmZpZ0tleXMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgbG9jYWxlQ29uZmlnW2NdID0gY3VzdG9tQ29uZmlnW2NdO1xuICAgIH0pO1xuICAgIHJldHVybiBsb2NhbGVDb25maWc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgfTtcbn0pO1xuXG5jb25zdCBpbnB1dFRpbWVQaWNrZXJDc3MgPSBcIjpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX06OnNsb3R0ZWQoaW5wdXRbc2xvdD1oaWRkZW4tZm9ybS1pbnB1dF0pe21hcmdpbjowICFpbXBvcnRhbnQ7b3BhY2l0eTowICFpbXBvcnRhbnQ7b3V0bGluZTpub25lICFpbXBvcnRhbnQ7cGFkZGluZzowICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtpbnNldDowICFpbXBvcnRhbnQ7dHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZSAhaW1wb3J0YW50O3otaW5kZXg6LTEgIWltcG9ydGFudH06aG9zdChbc2NhbGU9c10pey0tY2FsY2l0ZS10b2dnbGUtc3BhY2luZzowLjVyZW07LS1jYWxjaXRlLWludGVybmFsLWlucHV0LXRleHQtaW5wdXQtcGFkZGluZy1pbmxpbmUtZW5kOmNhbGModmFyKC0tY2FsY2l0ZS10b2dnbGUtc3BhY2luZykgKyAxcmVtKX06aG9zdChbc2NhbGU9bV0pey0tY2FsY2l0ZS10b2dnbGUtc3BhY2luZzowLjc1cmVtOy0tY2FsY2l0ZS1pbnRlcm5hbC1pbnB1dC10ZXh0LWlucHV0LXBhZGRpbmctaW5saW5lLWVuZDpjYWxjKHZhcigtLWNhbGNpdGUtdG9nZ2xlLXNwYWNpbmcpICsgMS41cmVtKX06aG9zdChbc2NhbGU9bF0pey0tY2FsY2l0ZS10b2dnbGUtc3BhY2luZzoxcmVtOy0tY2FsY2l0ZS1pbnRlcm5hbC1pbnB1dC10ZXh0LWlucHV0LXBhZGRpbmctaW5saW5lLWVuZDpjYWxjKHZhcigtLWNhbGNpdGUtdG9nZ2xlLXNwYWNpbmcpICsgMnJlbSl9LmlucHV0LXdyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmV9LnRvZ2dsZS1pY29ue3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7aW5zZXQtaW5saW5lLWVuZDowO2luc2V0LWJsb2NrOjA7cGFkZGluZy1pbmxpbmU6dmFyKC0tY2FsY2l0ZS10b2dnbGUtc3BhY2luZyl9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbi8vIHNvbWUgYnVuZGxlcnMgKGUuZy4sIFdlYnBhY2spIG5lZWQgZHluYW1pYyBpbXBvcnQgcGF0aHMgdG8gYmUgc3RhdGljXG5jb25zdCBzdXBwb3J0ZWREYXlqc0xvY2FsZVRvTG9jYWxlQ29uZmlnSW1wb3J0ID0gbmV3IE1hcChbXG4gIFtcImFyXCIsICgpID0+IGltcG9ydCgnLi9hci5qcycpXSxcbiAgW1wiYmdcIiwgKCkgPT4gaW1wb3J0KCcuL2JnLmpzJyldLFxuICBbXCJic1wiLCAoKSA9PiBpbXBvcnQoJy4vYnMuanMnKV0sXG4gIFtcImNhXCIsICgpID0+IGltcG9ydCgnLi9jYS5qcycpXSxcbiAgW1wiY3NcIiwgKCkgPT4gaW1wb3J0KCcuL2NzLmpzJyldLFxuICBbXCJkYVwiLCAoKSA9PiBpbXBvcnQoJy4vZGEuanMnKV0sXG4gIFtcImRlXCIsICgpID0+IGltcG9ydCgnLi9kZS5qcycpXSxcbiAgW1wiZGUtYXRcIiwgKCkgPT4gaW1wb3J0KCcuL2RlLWF0LmpzJyldLFxuICBbXCJkZS1jaFwiLCAoKSA9PiBpbXBvcnQoJy4vZGUtY2guanMnKV0sXG4gIFtcImVsXCIsICgpID0+IGltcG9ydCgnLi9lbC5qcycpXSxcbiAgW1wiZW5cIiwgKCkgPT4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBlbiQxOyB9KV0sXG4gIFtcImVuLWF1XCIsICgpID0+IGltcG9ydCgnLi9lbi1hdS5qcycpXSxcbiAgW1wiZW4tY2FcIiwgKCkgPT4gaW1wb3J0KCcuL2VuLWNhLmpzJyldLFxuICBbXCJlbi1nYlwiLCAoKSA9PiBpbXBvcnQoJy4vZW4tZ2IuanMnKV0sXG4gIFtcImVzXCIsICgpID0+IGltcG9ydCgnLi9lcy5qcycpXSxcbiAgW1wiZXMtbXhcIiwgKCkgPT4gaW1wb3J0KCcuL2VzLW14LmpzJyldLFxuICBbXCJldFwiLCAoKSA9PiBpbXBvcnQoJy4vZXQuanMnKV0sXG4gIFtcImZpXCIsICgpID0+IGltcG9ydCgnLi9maS5qcycpXSxcbiAgW1wiZnJcIiwgKCkgPT4gaW1wb3J0KCcuL2ZyLmpzJyldLFxuICBbXCJmci1jaFwiLCAoKSA9PiBpbXBvcnQoJy4vZnItY2guanMnKV0sXG4gIFtcImhlXCIsICgpID0+IGltcG9ydCgnLi9oZS5qcycpXSxcbiAgW1wiaGlcIiwgKCkgPT4gaW1wb3J0KCcuL2hpLmpzJyldLFxuICBbXCJoclwiLCAoKSA9PiBpbXBvcnQoJy4vaHIuanMnKV0sXG4gIFtcImh1XCIsICgpID0+IGltcG9ydCgnLi9odS5qcycpXSxcbiAgW1wiaWRcIiwgKCkgPT4gaW1wb3J0KCcuL2lkLmpzJyldLFxuICBbXCJpdFwiLCAoKSA9PiBpbXBvcnQoJy4vaXQuanMnKV0sXG4gIFtcIml0LWNoXCIsICgpID0+IGltcG9ydCgnLi9pdC1jaC5qcycpXSxcbiAgW1wiamFcIiwgKCkgPT4gaW1wb3J0KCcuL2phLmpzJyldLFxuICBbXCJrb1wiLCAoKSA9PiBpbXBvcnQoJy4va28uanMnKV0sXG4gIFtcImx0XCIsICgpID0+IGltcG9ydCgnLi9sdC5qcycpXSxcbiAgW1wibHZcIiwgKCkgPT4gaW1wb3J0KCcuL2x2LmpzJyldLFxuICBbXCJta1wiLCAoKSA9PiBpbXBvcnQoJy4vbWsuanMnKV0sXG4gIFtcIm5sXCIsICgpID0+IGltcG9ydCgnLi9ubC5qcycpXSxcbiAgW1wibmJcIiwgKCkgPT4gaW1wb3J0KCcuL25iLmpzJyldLFxuICBbXCJwbFwiLCAoKSA9PiBpbXBvcnQoJy4vcGwuanMnKV0sXG4gIFtcInB0XCIsICgpID0+IGltcG9ydCgnLi9wdC5qcycpXSxcbiAgW1wicHQtYnJcIiwgKCkgPT4gaW1wb3J0KCcuL3B0LWJyLmpzJyldLFxuICBbXCJyb1wiLCAoKSA9PiBpbXBvcnQoJy4vcm8uanMnKV0sXG4gIFtcInJ1XCIsICgpID0+IGltcG9ydCgnLi9ydS5qcycpXSxcbiAgW1wic2tcIiwgKCkgPT4gaW1wb3J0KCcuL3NrLmpzJyldLFxuICBbXCJzbFwiLCAoKSA9PiBpbXBvcnQoJy4vc2wuanMnKV0sXG4gIFtcInNyXCIsICgpID0+IGltcG9ydCgnLi9zci5qcycpXSxcbiAgW1wic3ZcIiwgKCkgPT4gaW1wb3J0KCcuL3N2LmpzJyldLFxuICBbXCJ0aFwiLCAoKSA9PiBpbXBvcnQoJy4vdGguanMnKV0sXG4gIFtcInRyXCIsICgpID0+IGltcG9ydCgnLi90ci5qcycpXSxcbiAgW1widWtcIiwgKCkgPT4gaW1wb3J0KCcuL3VrLmpzJyldLFxuICBbXCJ2aVwiLCAoKSA9PiBpbXBvcnQoJy4vdmkuanMnKV0sXG4gIFtcInpoLWNuXCIsICgpID0+IGltcG9ydCgnLi96aC1jbi5qcycpXSxcbiAgW1wiemgtaGtcIiwgKCkgPT4gaW1wb3J0KCcuL3poLWhrLmpzJyldLFxuICBbXCJ6aC10d1wiLCAoKSA9PiBpbXBvcnQoJy4vemgtdHcuanMnKV0sXG5dKTtcbmRheWpzLmV4dGVuZChjdXN0b21QYXJzZUZvcm1hdCk7XG5kYXlqcy5leHRlbmQobG9jYWxlRGF0YSk7XG5kYXlqcy5leHRlbmQobG9jYWxpemVkRm9ybWF0KTtcbmRheWpzLmV4dGVuZChwcmVQYXJzZVBvc3RGb3JtYXQpO1xuZGF5anMuZXh0ZW5kKHVwZGF0ZUxvY2FsZSk7XG5jb25zdCBJbnB1dFRpbWVQaWNrZXIgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0VGltZVBpY2tlckJlZm9yZUNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXRUaW1lUGlja2VyQmVmb3JlQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXRUaW1lUGlja2VyQmVmb3JlT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUlucHV0VGltZVBpY2tlckJlZm9yZU9wZW5cIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXRUaW1lUGlja2VyQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXRUaW1lUGlja2VyQ2hhbmdlXCIsIDcpO1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0VGltZVBpY2tlckNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXRUaW1lUGlja2VyQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXRUaW1lUGlja2VyT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUlucHV0VGltZVBpY2tlck9wZW5cIiwgNik7XG4gICAgdGhpcy5mb2N1c09uT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuZGlhbG9nSWQgPSBgdGltZS1waWNrZXItZGlhbG9nLS0ke2d1aWQoKX1gO1xuICAgIC8qKiB3aGV0aGVyIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgd2FzIGNoYW5nZWQgYXMgYSByZXN1bHQgb2YgdXNlciB0eXBpbmcgb3Igbm90ICovXG4gICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gZmFsc2U7XG4gICAgdGhpcy5yZWZlcmVuY2VFbGVtZW50SWQgPSBgaW5wdXQtdGltZS1waWNrZXItJHtndWlkKCl9YDtcbiAgICB0aGlzLm9wZW5UcmFuc2l0aW9uUHJvcCA9IFwib3BhY2l0eVwiO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmhvc3RCbHVySGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0aGlzLmNhbGNpdGVJbnB1dEVsLnZhbHVlO1xuICAgICAgY29uc3QgZGVsb2NhbGl6ZWRJbnB1dFZhbHVlID0gdGhpcy5kZWxvY2FsaXplVGltZVN0cmluZyhpbnB1dFZhbHVlKTtcbiAgICAgIGlmICghZGVsb2NhbGl6ZWRJbnB1dFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoXCJcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChkZWxvY2FsaXplZElucHV0VmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShkZWxvY2FsaXplZElucHV0VmFsdWUpO1xuICAgICAgfVxuICAgICAgY29uc3QgbG9jYWxpemVkVGltZVN0cmluZyA9IGxvY2FsaXplVGltZVN0cmluZyh7XG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBpbmNsdWRlU2Vjb25kczogdGhpcy5zaG91bGRJbmNsdWRlU2Vjb25kcygpLFxuICAgICAgICBmcmFjdGlvbmFsU2Vjb25kRGlnaXRzOiBkZWNpbWFsUGxhY2VzKHRoaXMuc3RlcCksXG4gICAgICB9KTtcbiAgICAgIGlmIChsb2NhbGl6ZWRUaW1lU3RyaW5nICE9PSBpbnB1dFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShsb2NhbGl6ZWRUaW1lU3RyaW5nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xuICAgIH07XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dEZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dElucHV0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBlZmZlY3RpdmVMb2NhbGU6IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtIH0gPSB0aGlzO1xuICAgICAgaWYgKG51bWJlcmluZ1N5c3RlbSAmJiBudW1iZXJpbmdTeXN0ZW0gIT09IFwibGF0blwiKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgIG51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgICB1c2VHcm91cGluZzogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHZhbHVlSW5OdW1iZXJpbmdTeXN0ZW0gPSBudW1iZXJTdHJpbmdGb3JtYXR0ZXJcbiAgICAgICAgICAuZGVsb2NhbGl6ZSh0YXJnZXQudmFsdWUpXG4gICAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgICAgLm1hcCgoY2hhcikgPT4gbnVtYmVyS2V5cy5pbmNsdWRlcyhjaGFyKVxuICAgICAgICAgID8gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKGNoYXIpKVxuICAgICAgICAgIDogY2hhcilcbiAgICAgICAgICAuam9pbihcIlwiKTtcbiAgICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKHZhbHVlSW5OdW1iZXJpbmdTeXN0ZW0pO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy50aW1lUGlja2VyQ2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICAgIGNvbnN0IGluY2x1ZGVTZWNvbmRzID0gdGhpcy5zaG91bGRJbmNsdWRlU2Vjb25kcygpO1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0b0lTT1RpbWVTdHJpbmcodmFsdWUsIGluY2x1ZGVTZWNvbmRzKSk7XG4gICAgICB0aGlzLnNldElucHV0VmFsdWUobG9jYWxpemVUaW1lU3RyaW5nKHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIGluY2x1ZGVTZWNvbmRzLFxuICAgICAgICBmcmFjdGlvbmFsU2Vjb25kRGlnaXRzOiBkZWNpbWFsUGxhY2VzKHRoaXMuc3RlcCksXG4gICAgICB9KSk7XG4gICAgfTtcbiAgICB0aGlzLnBvcG92ZXJDbG9zZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBkZWFjdGl2YXRlRm9jdXNUcmFwKHRoaXMsIHtcbiAgICAgICAgb25EZWFjdGl2YXRlOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jYWxjaXRlSW5wdXRFbC5zZXRGb2N1cygpO1xuICAgICAgICAgIHRoaXMuZm9jdXNPbk9wZW4gPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgfTtcbiAgICB0aGlzLnBvcG92ZXJPcGVuSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGFjdGl2YXRlRm9jdXNUcmFwKHRoaXMsIHtcbiAgICAgICAgb25BY3RpdmF0ZTogKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmZvY3VzT25PcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGNpdGVUaW1lUGlja2VyRWwuc2V0Rm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNPbk9wZW4gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgZGVmYXVsdFByZXZlbnRlZCwga2V5IH0gPSBldmVudDtcbiAgICAgIGlmIChkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBpZiAoc3VibWl0Rm9ybSh0aGlzKSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5jYWxjaXRlSW5wdXRFbC5zZXRGb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyh0aGlzLmNhbGNpdGVUaW1lUGlja2VyRWwpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5kZWxvY2FsaXplVGltZVN0cmluZyh0aGlzLmNhbGNpdGVJbnB1dEVsLnZhbHVlKTtcbiAgICAgICAgaWYgKGlzVmFsaWRUaW1lKG5ld1ZhbHVlKSkge1xuICAgICAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICAgIGNvbnN0IGxvY2FsaXplZFRpbWVTdHJpbmcgPSBsb2NhbGl6ZVRpbWVTdHJpbmcoe1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgICAgIGluY2x1ZGVTZWNvbmRzOiB0aGlzLnNob3VsZEluY2x1ZGVTZWNvbmRzKCksXG4gICAgICAgICAgICBmcmFjdGlvbmFsU2Vjb25kRGlnaXRzOiBkZWNpbWFsUGxhY2VzKHRoaXMuc3RlcCksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKG5ld1ZhbHVlICYmIHRoaXMuY2FsY2l0ZUlucHV0RWwudmFsdWUgIT09IGxvY2FsaXplZFRpbWVTdHJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShsb2NhbGl6ZWRUaW1lU3RyaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmZvY3VzT25PcGVuID0gdHJ1ZTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJFc2NhcGVcIiAmJiB0aGlzLm9wZW4pIHtcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUlucHV0RWwuc2V0Rm9jdXMoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2V0Q2FsY2l0ZVBvcG92ZXJFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5wb3BvdmVyRWwgPSBlbDtcbiAgICB9O1xuICAgIHRoaXMuc2V0SW5wdXRBbmRUcmFuc2l0aW9uRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuY2FsY2l0ZUlucHV0RWwgPSBlbDtcbiAgICAgIHRoaXMudHJhbnNpdGlvbkVsID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLnNldENhbGNpdGVUaW1lUGlja2VyRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuY2FsY2l0ZVRpbWVQaWNrZXJFbCA9IGVsO1xuICAgICAgY29ubmVjdEZvY3VzVHJhcCh0aGlzLCB7XG4gICAgICAgIGZvY3VzVHJhcEVsOiBlbCxcbiAgICAgICAgZm9jdXNUcmFwT3B0aW9uczoge1xuICAgICAgICAgIGluaXRpYWxGb2N1czogZmFsc2UsXG4gICAgICAgICAgc2V0UmV0dXJuRm9jdXM6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLnNldElucHV0VmFsdWUgPSAobmV3SW5wdXRWYWx1ZSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNhbGNpdGVJbnB1dEVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2FsY2l0ZUlucHV0RWwudmFsdWUgPSBuZXdJbnB1dFZhbHVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgYW5kIGVtaXRzIGEgY2hhbmdlIGV2ZW50LlxuICAgICAqIFRoaXMgaXMgdXNlZCB0byB1cGRhdGUgdGhlIHZhbHVlIGFzIGEgcmVzdWx0IG9mIHVzZXIgaW50ZXJhY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICB0aGlzLnNldFZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGZvcm1hdFRpbWVTdHJpbmcodmFsdWUpIHx8IFwiXCI7XG4gICAgICBpZiAobmV3VmFsdWUgPT09IG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IHRydWU7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWUgfHwgXCJcIjtcbiAgICAgIGNvbnN0IGNoYW5nZUV2ZW50ID0gdGhpcy5jYWxjaXRlSW5wdXRUaW1lUGlja2VyQ2hhbmdlLmVtaXQoKTtcbiAgICAgIGlmIChjaGFuZ2VFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZhbHVlID0gb2xkVmFsdWU7XG4gICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShsb2NhbGl6ZVRpbWVTdHJpbmcoe1xuICAgICAgICAgIHZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgICAgaW5jbHVkZVNlY29uZHM6IHRoaXMuc2hvdWxkSW5jbHVkZVNlY29uZHMoKSxcbiAgICAgICAgICBmcmFjdGlvbmFsU2Vjb25kRGlnaXRzOiBkZWNpbWFsUGxhY2VzKHRoaXMuc3RlcCksXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIGRpcmVjdGx5IHdpdGhvdXQgZW1pdHRpbmcgYSBjaGFuZ2UgZXZlbnQuXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIHVwZGF0ZSB0aGUgdmFsdWUgb24gaW5pdGlhbCBsb2FkIGFuZCB3aGVuIHByb3BzIGNoYW5nZSB0aGF0IGFyZSBub3QgdGhlIHJlc3VsdCBvZiB1c2VyIGludGVyYWN0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgdGhpcy5zZXRWYWx1ZURpcmVjdGx5ID0gKHZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlU2Vjb25kcyA9IHRoaXMuc2hvdWxkSW5jbHVkZVNlY29uZHMoKTtcbiAgICAgIHRoaXMudmFsdWUgPSB0b0lTT1RpbWVTdHJpbmcodmFsdWUsIGluY2x1ZGVTZWNvbmRzKTtcbiAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSh0aGlzLnZhbHVlXG4gICAgICAgID8gbG9jYWxpemVUaW1lU3RyaW5nKHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICBpbmNsdWRlU2Vjb25kcyxcbiAgICAgICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgICAgZnJhY3Rpb25hbFNlY29uZERpZ2l0czogZGVjaW1hbFBsYWNlcyh0aGlzLnN0ZXApLFxuICAgICAgICB9KVxuICAgICAgICA6IFwiXCIpO1xuICAgIH07XG4gICAgdGhpcy5vbklucHV0V3JhcHBlckNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgICB9O1xuICAgIHRoaXMuZGVhY3RpdmF0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIH07XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9jdXNUcmFwRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWFkT25seSA9IGZhbHNlO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlcXVpcmVkID0gZmFsc2U7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMuc3RhdHVzID0gXCJpZGxlXCI7XG4gICAgdGhpcy5vdmVybGF5UG9zaXRpb25pbmcgPSBcImFic29sdXRlXCI7XG4gICAgdGhpcy5wbGFjZW1lbnQgPSBcImF1dG9cIjtcbiAgICB0aGlzLnN0ZXAgPSA2MDtcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gIH1cbiAgb3BlbkhhbmRsZXIob3Blbikge1xuICAgIG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHkpIHtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob3Blbikge1xuICAgICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVGb2N1c1RyYXBEaXNhYmxlZChmb2N1c1RyYXBEaXNhYmxlZCkge1xuICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvY3VzVHJhcERpc2FibGVkID8gZGVhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzKSA6IGFjdGl2YXRlRm9jdXNUcmFwKHRoaXMpO1xuICB9XG4gIGhhbmRsZURpc2FibGVkQW5kUmVhZE9ubHlDaGFuZ2UodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIG51bWJlcmluZ1N5c3RlbVdhdGNoZXIobnVtYmVyaW5nU3lzdGVtKSB7XG4gICAgdGhpcy5zZXRJbnB1dFZhbHVlKGxvY2FsaXplVGltZVN0cmluZyh7XG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW0sXG4gICAgICBpbmNsdWRlU2Vjb25kczogdGhpcy5zaG91bGRJbmNsdWRlU2Vjb25kcygpLFxuICAgICAgZnJhY3Rpb25hbFNlY29uZERpZ2l0czogZGVjaW1hbFBsYWNlcyh0aGlzLnN0ZXApLFxuICAgIH0pKTtcbiAgfVxuICBzdGVwV2F0Y2hlcihuZXdTdGVwLCBvbGRTdGVwKSB7XG4gICAgaWYgKChvbGRTdGVwID49IDYwICYmIG5ld1N0ZXAgPiAwICYmIG5ld1N0ZXAgPCA2MCkgfHxcbiAgICAgIChuZXdTdGVwID49IDYwICYmIG9sZFN0ZXAgPiAwICYmIG9sZFN0ZXAgPCA2MCkpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWVEaXJlY3RseSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cbiAgdmFsdWVXYXRjaGVyKG5ld1ZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLnVzZXJDaGFuZ2VkVmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWVEaXJlY3RseShuZXdWYWx1ZSk7XG4gICAgfVxuICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IGZhbHNlO1xuICB9XG4gIGFzeW5jIGVmZmVjdGl2ZUxvY2FsZVdhdGNoZXIobG9jYWxlKSB7XG4gICAgYXdhaXQgdGhpcy5sb2FkRGF0ZVRpbWVMb2NhbGVEYXRhKCk7XG4gICAgdGhpcy5zZXRJbnB1dFZhbHVlKGxvY2FsaXplVGltZVN0cmluZyh7XG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIGxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICBpbmNsdWRlU2Vjb25kczogdGhpcy5zaG91bGRJbmNsdWRlU2Vjb25kcygpLFxuICAgICAgZnJhY3Rpb25hbFNlY29uZERpZ2l0czogZGVjaW1hbFBsYWNlcyh0aGlzLnN0ZXApLFxuICAgIH0pKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIGRlbGF5ZWRcbiAgICovXG4gIGFzeW5jIHJlcG9zaXRpb24oZGVsYXllZCA9IGZhbHNlKSB7XG4gICAgdGhpcy5wb3BvdmVyRWw/LnJlcG9zaXRpb24oZGVsYXllZCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBvbkJlZm9yZU9wZW4oKSB7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXRUaW1lUGlja2VyQmVmb3JlT3Blbi5lbWl0KCk7XG4gIH1cbiAgb25PcGVuKCkge1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0VGltZVBpY2tlck9wZW4uZW1pdCgpO1xuICB9XG4gIG9uQmVmb3JlQ2xvc2UoKSB7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXRUaW1lUGlja2VyQmVmb3JlQ2xvc2UuZW1pdCgpO1xuICB9XG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXRUaW1lUGlja2VyQ2xvc2UuZW1pdCgpO1xuICB9XG4gIGRlbG9jYWxpemVUaW1lU3RyaW5nKHZhbHVlKSB7XG4gICAgLy8gd2UgbmVlZCB0byBzZXQgdGhlIGNvcnJlc3BvbmRpbmcgbG9jYWxlIGJlZm9yZSBwYXJzaW5nLCBvdGhlcndpc2UgaXQgZGVmYXVsdHMgdG8gRW5nbGlzaCAocG9zc2libGUgZGF5anMgYnVnKVxuICAgIGRheWpzLmxvY2FsZSh0aGlzLmVmZmVjdGl2ZUxvY2FsZS50b0xvd2VyQ2FzZSgpKTtcbiAgICBjb25zdCBub25GcmFjdGlvbmFsU2Vjb25kUGFydHMgPSB0aGlzLmRlbG9jYWxpemVUaW1lU3RyaW5nVG9QYXJ0cyh2YWx1ZSk7XG4gICAgbGV0IGRlbG9jYWxpemVkVGltZVN0cmluZztcbiAgICBpZiAodGhpcy5zaG91bGRJbmNsdWRlRnJhY3Rpb25hbFNlY29uZHMoKSkge1xuICAgICAgY29uc3Qgc3RlcFByZWNpc2lvbiA9IGRlY2ltYWxQbGFjZXModGhpcy5zdGVwKTtcbiAgICAgIGNvbnN0IGNlbnRpc2Vjb25kUGFydHMgPSB0aGlzLmRlbG9jYWxpemVUaW1lU3RyaW5nVG9QYXJ0cyh2YWx1ZSwgXCJTXCIpO1xuICAgICAgaWYgKHN0ZXBQcmVjaXNpb24gPT09IDEpIHtcbiAgICAgICAgZGVsb2NhbGl6ZWRUaW1lU3RyaW5nID1cbiAgICAgICAgICBjZW50aXNlY29uZFBhcnRzLm1pbGxpc2Vjb25kICE9PSAwXG4gICAgICAgICAgICA/IHRoaXMuZ2V0VGltZVN0cmluZ0Zyb21QYXJ0cyhjZW50aXNlY29uZFBhcnRzKVxuICAgICAgICAgICAgOiB0aGlzLmdldFRpbWVTdHJpbmdGcm9tUGFydHMobm9uRnJhY3Rpb25hbFNlY29uZFBhcnRzKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBkZWNpc2Vjb25kUGFydHMgPSB0aGlzLmRlbG9jYWxpemVUaW1lU3RyaW5nVG9QYXJ0cyh2YWx1ZSwgXCJTU1wiKTtcbiAgICAgICAgaWYgKHN0ZXBQcmVjaXNpb24gPT09IDIpIHtcbiAgICAgICAgICBpZiAoZGVjaXNlY29uZFBhcnRzLm1pbGxpc2Vjb25kICE9PSAwKSB7XG4gICAgICAgICAgICBkZWxvY2FsaXplZFRpbWVTdHJpbmcgPSB0aGlzLmdldFRpbWVTdHJpbmdGcm9tUGFydHMoZGVjaXNlY29uZFBhcnRzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoY2VudGlzZWNvbmRQYXJ0cy5taWxsaXNlY29uZCAhPT0gMCkge1xuICAgICAgICAgICAgZGVsb2NhbGl6ZWRUaW1lU3RyaW5nID0gdGhpcy5nZXRUaW1lU3RyaW5nRnJvbVBhcnRzKGNlbnRpc2Vjb25kUGFydHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbG9jYWxpemVkVGltZVN0cmluZyA9IHRoaXMuZ2V0VGltZVN0cmluZ0Zyb21QYXJ0cyhub25GcmFjdGlvbmFsU2Vjb25kUGFydHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGVwUHJlY2lzaW9uID49IDMpIHtcbiAgICAgICAgICBjb25zdCBtaWxsaXNlY29uZFBhcnRzID0gdGhpcy5kZWxvY2FsaXplVGltZVN0cmluZ1RvUGFydHModmFsdWUsIFwiU1NTXCIpO1xuICAgICAgICAgIGlmIChtaWxsaXNlY29uZFBhcnRzLm1pbGxpc2Vjb25kICE9PSAwKSB7XG4gICAgICAgICAgICBkZWxvY2FsaXplZFRpbWVTdHJpbmcgPSB0aGlzLmdldFRpbWVTdHJpbmdGcm9tUGFydHMobWlsbGlzZWNvbmRQYXJ0cyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGRlY2lzZWNvbmRQYXJ0cy5taWxsaXNlY29uZCAhPT0gMCkge1xuICAgICAgICAgICAgZGVsb2NhbGl6ZWRUaW1lU3RyaW5nID0gdGhpcy5nZXRUaW1lU3RyaW5nRnJvbVBhcnRzKGRlY2lzZWNvbmRQYXJ0cyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGNlbnRpc2Vjb25kUGFydHMubWlsbGlzZWNvbmQgIT09IDApIHtcbiAgICAgICAgICAgIGRlbG9jYWxpemVkVGltZVN0cmluZyA9IHRoaXMuZ2V0VGltZVN0cmluZ0Zyb21QYXJ0cyhjZW50aXNlY29uZFBhcnRzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWxvY2FsaXplZFRpbWVTdHJpbmcgPSB0aGlzLmdldFRpbWVTdHJpbmdGcm9tUGFydHMobm9uRnJhY3Rpb25hbFNlY29uZFBhcnRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkZWxvY2FsaXplZFRpbWVTdHJpbmcgPSB0aGlzLmdldFRpbWVTdHJpbmdGcm9tUGFydHMobm9uRnJhY3Rpb25hbFNlY29uZFBhcnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlbG9jYWxpemVkVGltZVN0cmluZztcbiAgfVxuICBkZWxvY2FsaXplVGltZVN0cmluZ1RvUGFydHMobG9jYWxpemVkVGltZVN0cmluZywgZnJhY3Rpb25hbFNlY29uZEZvcm1hdFRva2VuKSB7XG4gICAgY29uc3QgbHRzRm9ybWF0U3RyaW5nID0gdGhpcy5sb2NhbGVDb25maWc/LmZvcm1hdHM/LkxUUztcbiAgICBjb25zdCBmcmFjdGlvbmFsU2Vjb25kVG9rZW5NYXRjaCA9IGx0c0Zvcm1hdFN0cmluZy5tYXRjaCgvc3NcXC4qKFMrKS9nKTtcbiAgICBpZiAoZnJhY3Rpb25hbFNlY29uZEZvcm1hdFRva2VuICYmIHRoaXMuc2hvdWxkSW5jbHVkZUZyYWN0aW9uYWxTZWNvbmRzKCkpIHtcbiAgICAgIGNvbnN0IHNlY29uZEZvcm1hdFRva2VuID0gYHNzLiR7ZnJhY3Rpb25hbFNlY29uZEZvcm1hdFRva2VufWA7XG4gICAgICB0aGlzLmxvY2FsZUNvbmZpZy5mb3JtYXRzLkxUUyA9IGZyYWN0aW9uYWxTZWNvbmRUb2tlbk1hdGNoXG4gICAgICAgID8gbHRzRm9ybWF0U3RyaW5nLnJlcGxhY2UoZnJhY3Rpb25hbFNlY29uZFRva2VuTWF0Y2hbMF0sIHNlY29uZEZvcm1hdFRva2VuKVxuICAgICAgICA6IGx0c0Zvcm1hdFN0cmluZy5yZXBsYWNlKFwic3NcIiwgc2Vjb25kRm9ybWF0VG9rZW4pO1xuICAgIH1cbiAgICBlbHNlIGlmIChmcmFjdGlvbmFsU2Vjb25kVG9rZW5NYXRjaCkge1xuICAgICAgdGhpcy5sb2NhbGVDb25maWcuZm9ybWF0cy5MVFMgPSBsdHNGb3JtYXRTdHJpbmcucmVwbGFjZShmcmFjdGlvbmFsU2Vjb25kVG9rZW5NYXRjaFswXSwgXCJzc1wiKTtcbiAgICB9XG4gICAgZGF5anMudXBkYXRlTG9jYWxlKHRoaXMuZ2V0U3VwcG9ydGVkRGF5anNMb2NhbGUoZ2V0U3VwcG9ydGVkTG9jYWxlKHRoaXMuZWZmZWN0aXZlTG9jYWxlKSksIHRoaXMubG9jYWxlQ29uZmlnKTtcbiAgICBjb25zdCBkYXlqc1BhcnNlUmVzdWx0ID0gZGF5anMobG9jYWxpemVkVGltZVN0cmluZywgW1wiTFRTXCIsIFwiTFRcIl0pO1xuICAgIGlmIChkYXlqc1BhcnNlUmVzdWx0LmlzVmFsaWQoKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaG91cjogZGF5anNQYXJzZVJlc3VsdC5nZXQoXCJob3VyXCIpLFxuICAgICAgICBtaW51dGU6IGRheWpzUGFyc2VSZXN1bHQuZ2V0KFwibWludXRlXCIpLFxuICAgICAgICBzZWNvbmQ6IGRheWpzUGFyc2VSZXN1bHQuZ2V0KFwic2Vjb25kXCIpLFxuICAgICAgICBtaWxsaXNlY29uZDogZGF5anNQYXJzZVJlc3VsdC5nZXQoXCJtaWxsaXNlY29uZFwiKSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBob3VyOiBudWxsLFxuICAgICAgbWludXRlOiBudWxsLFxuICAgICAgc2Vjb25kOiBudWxsLFxuICAgICAgbWlsbGlzZWNvbmQ6IG51bGwsXG4gICAgfTtcbiAgfVxuICBnZXRUaW1lU3RyaW5nRnJvbVBhcnRzKHBhcnRzKSB7XG4gICAgbGV0IHRpbWVTdHJpbmcgPSBcIlwiO1xuICAgIGlmICghcGFydHMpIHtcbiAgICAgIHJldHVybiB0aW1lU3RyaW5nO1xuICAgIH1cbiAgICBpZiAocGFydHMuaG91ciAhPT0gbnVsbCAmJiBwYXJ0cy5taW51dGUgIT09IG51bGwpIHtcbiAgICAgIHRpbWVTdHJpbmcgPSBgJHtmb3JtYXRUaW1lUGFydChwYXJ0cy5ob3VyKX06JHtmb3JtYXRUaW1lUGFydChwYXJ0cy5taW51dGUpfWA7XG4gICAgICBpZiAodGhpcy5zaG91bGRJbmNsdWRlU2Vjb25kcygpICYmIHBhcnRzLnNlY29uZCAhPT0gbnVsbCkge1xuICAgICAgICB0aW1lU3RyaW5nICs9IGA6JHtmb3JtYXRUaW1lUGFydChwYXJ0cy5zZWNvbmQpfWA7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZEluY2x1ZGVGcmFjdGlvbmFsU2Vjb25kcygpICYmIHBhcnRzLm1pbGxpc2Vjb25kICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc2Vjb25kID0gKHBhcnRzLm1pbGxpc2Vjb25kICogMC4wMDEpLnRvRml4ZWQoZGVjaW1hbFBsYWNlcyh0aGlzLnN0ZXApKTtcbiAgICAgICAgICB0aW1lU3RyaW5nICs9IGAuJHtzZWNvbmQudG9TdHJpbmcoKS5yZXBsYWNlKFwiMC5cIiwgXCJcIil9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGltZVN0cmluZztcbiAgfVxuICBnZXRTdXBwb3J0ZWREYXlqc0xvY2FsZShsb2NhbGUpIHtcbiAgICBjb25zdCBkYXlqc0xvY2FsZSA9IGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChkYXlqc0xvY2FsZSA9PT0gXCJub1wiKSB7XG4gICAgICByZXR1cm4gXCJuYlwiO1xuICAgIH1cbiAgICBpZiAoZGF5anNMb2NhbGUgPT09IFwicHQtcHRcIikge1xuICAgICAgcmV0dXJuIFwicHRcIjtcbiAgICB9XG4gICAgcmV0dXJuIGRheWpzTG9jYWxlO1xuICB9XG4gIGFzeW5jIGxvYWREYXRlVGltZUxvY2FsZURhdGEoKSB7XG4gICAgbGV0IHN1cHBvcnRlZExvY2FsZSA9IGdldFN1cHBvcnRlZExvY2FsZSh0aGlzLmVmZmVjdGl2ZUxvY2FsZSkudG9Mb3dlckNhc2UoKTtcbiAgICBzdXBwb3J0ZWRMb2NhbGUgPSB0aGlzLmdldFN1cHBvcnRlZERheWpzTG9jYWxlKHN1cHBvcnRlZExvY2FsZSk7XG4gICAgY29uc3QgeyBkZWZhdWx0OiBsb2NhbGVDb25maWcgfSA9IGF3YWl0IHN1cHBvcnRlZERheWpzTG9jYWxlVG9Mb2NhbGVDb25maWdJbXBvcnQuZ2V0KHN1cHBvcnRlZExvY2FsZSkoKTtcbiAgICB0aGlzLmxvY2FsZUNvbmZpZyA9IGxvY2FsZUNvbmZpZztcbiAgICBkYXlqcy5sb2NhbGUodGhpcy5sb2NhbGVDb25maWcsIG51bGwsIHRydWUpO1xuICAgIGRheWpzLnVwZGF0ZUxvY2FsZShzdXBwb3J0ZWRMb2NhbGUsIHRoaXMuZ2V0RXh0ZW5kZWRMb2NhbGVDb25maWcoc3VwcG9ydGVkTG9jYWxlKSk7XG4gIH1cbiAgZ2V0RXh0ZW5kZWRMb2NhbGVDb25maWcobG9jYWxlKSB7XG4gICAgaWYgKGxvY2FsZSA9PT0gXCJhclwiKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXJpZGllbTogKGhvdXIpID0+IChob3VyID4gMTIgPyBcItmFXCIgOiBcIti1XCIpLFxuICAgICAgICBmb3JtYXRzOiB7XG4gICAgICAgICAgTFQ6IFwiSEg6bW0gQVwiLFxuICAgICAgICAgIExUUzogXCJISDptbTpzcyBBXCIsXG4gICAgICAgICAgTDogXCJERC9NTS9ZWVlZXCIsXG4gICAgICAgICAgTEw6IFwiRCBNTU1NIFlZWVlcIixcbiAgICAgICAgICBMTEw6IFwiRCBNTU1NIFlZWVkgSEg6bW0gQVwiLFxuICAgICAgICAgIExMTEw6IFwiZGRkZCBEIE1NTU0gWVlZWSBISDptbSBBXCIsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAobG9jYWxlID09PSBcImVuLWF1XCIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lcmlkaWVtOiAoaG91cikgPT4gKGhvdXIgPiAxMiA/IFwicG1cIiA6IFwiYW1cIiksXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAobG9jYWxlID09PSBcImVuLWNhXCIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lcmlkaWVtOiAoaG91cikgPT4gKGhvdXIgPiAxMiA/IFwicC5tLlwiIDogXCJhLm0uXCIpLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGxvY2FsZSA9PT0gXCJlbFwiKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXJpZGllbTogKGhvdXIpID0+IChob3VyID4gMTIgPyBcIs68Ls68LlwiIDogXCLPgC7OvC5cIiksXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAobG9jYWxlID09PSBcImhpXCIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdHM6IHtcbiAgICAgICAgICBMVDogXCJoOm1tIEFcIixcbiAgICAgICAgICBMVFM6IFwiaDptbTpzcyBBXCIsXG4gICAgICAgICAgTDogXCJERC9NTS9ZWVlZXCIsXG4gICAgICAgICAgTEw6IFwiRCBNTU1NIFlZWVlcIixcbiAgICAgICAgICBMTEw6IFwiRCBNTU1NIFlZWVksIGg6bW0gQVwiLFxuICAgICAgICAgIExMTEw6IFwiZGRkZCwgRCBNTU1NIFlZWVksIGg6bW0gQVwiLFxuICAgICAgICB9LFxuICAgICAgICBtZXJpZGllbTogKGhvdXIpID0+IChob3VyID4gMTIgPyBcInBtXCIgOiBcImFtXCIpLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGxvY2FsZSA9PT0gXCJrb1wiKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXJpZGllbTogKGhvdXIpID0+IChob3VyID4gMTIgPyBcIuyYpO2bhFwiIDogXCLsmKTsoIRcIiksXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAobG9jYWxlID09PSBcInpoLXR3XCIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdHM6IHtcbiAgICAgICAgICBMVDogXCJBSEg6bW1cIixcbiAgICAgICAgICBMVFM6IFwiQUhIOm1tOnNzXCIsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAobG9jYWxlID09PSBcInpoLWhrXCIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdHM6IHtcbiAgICAgICAgICBMVDogXCJBSEg6bW1cIixcbiAgICAgICAgICBMVFM6IFwiQUhIOm1tOnNzXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG1lcmlkaWVtOiAoaG91cikgPT4gKGhvdXIgPiAxMiA/IFwi5LiL5Y2IXCIgOiBcIuS4iuWNiFwiKSxcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIG9uTGFiZWxDbGljaygpIHtcbiAgICB0aGlzLnNldEZvY3VzKCk7XG4gIH1cbiAgc2hvdWxkSW5jbHVkZVNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcCA8IDYwO1xuICB9XG4gIHNob3VsZEluY2x1ZGVGcmFjdGlvbmFsU2Vjb25kcygpIHtcbiAgICByZXR1cm4gZGVjaW1hbFBsYWNlcyh0aGlzLnN0ZXApID4gMDtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBpZiAoaXNWYWxpZFRpbWUodGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWVEaXJlY3RseSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgY29ubmVjdEZvcm0odGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3NldFVwTWVzc2FnZXModGhpcyksIHRoaXMubG9hZERhdGVUaW1lTG9jYWxlRGF0YSgpXSk7XG4gICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIGlmIChpc1ZhbGlkVGltZSh0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKGxvY2FsaXplVGltZVN0cmluZyh7XG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBpbmNsdWRlU2Vjb25kczogdGhpcy5zaG91bGRJbmNsdWRlU2Vjb25kcygpLFxuICAgICAgICBmcmFjdGlvbmFsU2Vjb25kRGlnaXRzOiBkZWNpbWFsUGxhY2VzKHRoaXMuc3RlcCksXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBkaXNjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgZGlzY29ubmVjdEZvcm0odGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkZWFjdGl2YXRlRm9jdXNUcmFwKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCwgbWVzc2FnZXMsIHJlYWRPbmx5LCBkaWFsb2dJZCB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkJsdXI6IHRoaXMuaG9zdEJsdXJIYW5kbGVyLCBvbktleURvd246IHRoaXMua2V5RG93bkhhbmRsZXIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImlucHV0LXdyYXBwZXJcIiwgb25DbGljazogdGhpcy5vbklucHV0V3JhcHBlckNsaWNrIH0sIGgoXCJjYWxjaXRlLWlucHV0LXRleHRcIiwgeyBcImFyaWEtYXV0b2NvbXBsZXRlXCI6IFwibm9uZVwiLCBcImFyaWEtaGFzcG9wdXBcIjogXCJkaWFsb2dcIiwgZGlzYWJsZWQ6IGRpc2FibGVkLCBpY29uOiBcImNsb2NrXCIsIGlkOiB0aGlzLnJlZmVyZW5jZUVsZW1lbnRJZCwgbGFiZWw6IGdldExhYmVsVGV4dCh0aGlzKSwgbGFuZzogdGhpcy5lZmZlY3RpdmVMb2NhbGUsIG9uQ2FsY2l0ZUlucHV0VGV4dElucHV0OiB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0SW5wdXRIYW5kbGVyLCBvbkNhbGNpdGVJbnRlcm5hbElucHV0VGV4dEZvY3VzOiB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0Rm9jdXNIYW5kbGVyLCByZWFkT25seTogcmVhZE9ubHksIHJvbGU6IFwiY29tYm9ib3hcIiwgc2NhbGU6IHRoaXMuc2NhbGUsIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiB0aGlzLnNldElucHV0QW5kVHJhbnNpdGlvbkVsIH0pLCAhdGhpcy5yZWFkT25seSAmJiB0aGlzLnJlbmRlclRvZ2dsZUljb24odGhpcy5vcGVuKSksIGgoXCJjYWxjaXRlLXBvcG92ZXJcIiwgeyBmb2N1c1RyYXBEaXNhYmxlZDogdHJ1ZSwgaWQ6IGRpYWxvZ0lkLCBsYWJlbDogbWVzc2FnZXMuY2hvb3NlVGltZSwgbGFuZzogdGhpcy5lZmZlY3RpdmVMb2NhbGUsIG9uQ2FsY2l0ZVBvcG92ZXJDbG9zZTogdGhpcy5wb3BvdmVyQ2xvc2VIYW5kbGVyLCBvbkNhbGNpdGVQb3BvdmVyT3BlbjogdGhpcy5wb3BvdmVyT3BlbkhhbmRsZXIsIG9wZW46IHRoaXMub3Blbiwgb3ZlcmxheVBvc2l0aW9uaW5nOiB0aGlzLm92ZXJsYXlQb3NpdGlvbmluZywgcGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudCwgcmVmZXJlbmNlRWxlbWVudDogdGhpcy5yZWZlcmVuY2VFbGVtZW50SWQsIHRyaWdnZXJEaXNhYmxlZDogdHJ1ZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IHRoaXMuc2V0Q2FsY2l0ZVBvcG92ZXJFbCB9LCBoKFwiY2FsY2l0ZS10aW1lLXBpY2tlclwiLCB7IGxhbmc6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLCBtZXNzYWdlT3ZlcnJpZGVzOiB0aGlzLm1lc3NhZ2VPdmVycmlkZXMsIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sIG9uQ2FsY2l0ZUludGVybmFsVGltZVBpY2tlckNoYW5nZTogdGhpcy50aW1lUGlja2VyQ2hhbmdlSGFuZGxlciwgc2NhbGU6IHRoaXMuc2NhbGUsIHN0ZXA6IHRoaXMuc3RlcCwgdGFiSW5kZXg6IHRoaXMub3BlbiA/IHVuZGVmaW5lZCA6IC0xLCB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IHRoaXMuc2V0Q2FsY2l0ZVRpbWVQaWNrZXJFbCB9KSksIGgoSGlkZGVuRm9ybUlucHV0U2xvdCwgeyBjb21wb25lbnQ6IHRoaXMgfSkpKTtcbiAgfVxuICByZW5kZXJUb2dnbGVJY29uKG9wZW4pIHtcbiAgICByZXR1cm4gKGgoXCJzcGFuXCIsIHsgY2xhc3M6IENTUy50b2dnbGVJY29uIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBvcGVuID8gXCJjaGV2cm9uLXVwXCIgOiBcImNoZXZyb24tZG93blwiLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKSk7XG4gIH1cbiAgc3RhdGljIGdldCBkZWxlZ2F0ZXNGb2N1cygpIHsgcmV0dXJuIHRydWU7IH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcIm9wZW5cIjogW1wib3BlbkhhbmRsZXJcIl0sXG4gICAgXCJmb2N1c1RyYXBEaXNhYmxlZFwiOiBbXCJoYW5kbGVGb2N1c1RyYXBEaXNhYmxlZFwiXSxcbiAgICBcImRpc2FibGVkXCI6IFtcImhhbmRsZURpc2FibGVkQW5kUmVhZE9ubHlDaGFuZ2VcIl0sXG4gICAgXCJyZWFkT25seVwiOiBbXCJoYW5kbGVEaXNhYmxlZEFuZFJlYWRPbmx5Q2hhbmdlXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwibnVtYmVyaW5nU3lzdGVtXCI6IFtcIm51bWJlcmluZ1N5c3RlbVdhdGNoZXJcIl0sXG4gICAgXCJzdGVwXCI6IFtcInN0ZXBXYXRjaGVyXCJdLFxuICAgIFwidmFsdWVcIjogW1widmFsdWVXYXRjaGVyXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZVdhdGNoZXJcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gaW5wdXRUaW1lUGlja2VyQ3NzOyB9XG59LCBbMTcsIFwiY2FsY2l0ZS1pbnB1dC10aW1lLXBpY2tlclwiLCB7XG4gICAgXCJvcGVuXCI6IFsxNTQwXSxcbiAgICBcImRpc2FibGVkXCI6IFs1MTZdLFxuICAgIFwiZm9jdXNUcmFwRGlzYWJsZWRcIjogWzUxNiwgXCJmb2N1cy10cmFwLWRpc2FibGVkXCJdLFxuICAgIFwiZm9ybVwiOiBbNTEzXSxcbiAgICBcInJlYWRPbmx5XCI6IFs1MTYsIFwicmVhZC1vbmx5XCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJuYW1lXCI6IFsxXSxcbiAgICBcIm51bWJlcmluZ1N5c3RlbVwiOiBbMSwgXCJudW1iZXJpbmctc3lzdGVtXCJdLFxuICAgIFwicmVxdWlyZWRcIjogWzUxNl0sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcInN0YXR1c1wiOiBbNTEzXSxcbiAgICBcIm92ZXJsYXlQb3NpdGlvbmluZ1wiOiBbMSwgXCJvdmVybGF5LXBvc2l0aW9uaW5nXCJdLFxuICAgIFwicGxhY2VtZW50XCI6IFs1MTNdLFxuICAgIFwic3RlcFwiOiBbMl0sXG4gICAgXCJ2YWx1ZVwiOiBbMTAyNV0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogWzMyXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwic2V0Rm9jdXNcIjogWzY0XSxcbiAgICBcInJlcG9zaXRpb25cIjogWzY0XVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50JDEoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtaW5wdXQtdGltZS1waWNrZXJcIiwgXCJjYWxjaXRlLWFjdGlvblwiLCBcImNhbGNpdGUtaWNvblwiLCBcImNhbGNpdGUtaW5wdXQtdGV4dFwiLCBcImNhbGNpdGUtbG9hZGVyXCIsIFwiY2FsY2l0ZS1wb3BvdmVyXCIsIFwiY2FsY2l0ZS1wcm9ncmVzc1wiLCBcImNhbGNpdGUtdGltZS1waWNrZXJcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtaW5wdXQtdGltZS1waWNrZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBJbnB1dFRpbWVQaWNrZXIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtYWN0aW9uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDgoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWljb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaW5wdXQtdGV4dFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ2KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtcG9wb3ZlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1wcm9ncmVzc1wiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQzKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS10aW1lLXBpY2tlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlSW5wdXRUaW1lUGlja2VyID0gSW5wdXRUaW1lUGlja2VyO1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IGRlZmluZUN1c3RvbUVsZW1lbnQkMTtcblxuZXhwb3J0IHsgQ2FsY2l0ZUlucHV0VGltZVBpY2tlciwgZGF5anMgYXMgZCwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgeSBhcyBpc0JlZm9yZSwgcSBhcyBxdWVyeUVsZW1lbnRSb290cywgYyBhcyBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkgfSBmcm9tICcuL2RvbS5qcyc7XG5cbi8qKlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seVxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5jb25zdCBsYWJlbENsaWNrRXZlbnQgPSBcImNhbGNpdGVJbnRlcm5hbExhYmVsQ2xpY2tcIjtcbmNvbnN0IGxhYmVsQ29ubmVjdGVkRXZlbnQgPSBcImNhbGNpdGVJbnRlcm5hbExhYmVsQ29ubmVjdGVkXCI7XG5jb25zdCBsYWJlbERpc2Nvbm5lY3RlZEV2ZW50ID0gXCJjYWxjaXRlSW50ZXJuYWxMYWJlbERpc2Nvbm5lY3RlZFwiO1xuY29uc3QgbGFiZWxUYWdOYW1lID0gXCJjYWxjaXRlLWxhYmVsXCI7XG5jb25zdCBsYWJlbFRvTGFiZWxhYmxlcyA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBvbkxhYmVsQ2xpY2tNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3Qgb25MYWJlbENvbm5lY3RlZE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBvbkxhYmVsRGlzY29ubmVjdGVkTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHVubGFiZWxlZENvbXBvbmVudHMgPSBuZXcgV2Vha1NldCgpO1xuY29uc3QgZmluZExhYmVsRm9yQ29tcG9uZW50ID0gKGNvbXBvbmVudEVsKSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IGNvbXBvbmVudEVsO1xuICBjb25zdCBmb3JMYWJlbCA9IGlkICYmIHF1ZXJ5RWxlbWVudFJvb3RzKGNvbXBvbmVudEVsLCB7IHNlbGVjdG9yOiBgJHtsYWJlbFRhZ05hbWV9W2Zvcj1cIiR7aWR9XCJdYCB9KTtcbiAgaWYgKGZvckxhYmVsKSB7XG4gICAgcmV0dXJuIGZvckxhYmVsO1xuICB9XG4gIGNvbnN0IHBhcmVudExhYmVsID0gY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5KGNvbXBvbmVudEVsLCBsYWJlbFRhZ05hbWUpO1xuICBpZiAoIXBhcmVudExhYmVsIHx8XG4gICAgLy8gbGFiZWxhYmxlIGNvbXBvbmVudHMgd2l0aGluIG90aGVyIGN1c3RvbSBlbGVtZW50cyBhcmUgbm90IGNvbnNpZGVyZWQgbGFiZWxhYmxlXG4gICAgaGFzQW5jZXN0b3JDdXN0b21FbGVtZW50cyhwYXJlbnRMYWJlbCwgY29tcG9uZW50RWwpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHBhcmVudExhYmVsO1xufTtcbmZ1bmN0aW9uIGhhc0FuY2VzdG9yQ3VzdG9tRWxlbWVudHMobGFiZWwsIGNvbXBvbmVudEVsKSB7XG4gIGxldCB0cmF2ZXJzZWRFbGVtZW50cztcbiAgY29uc3QgY3VzdG9tRWxlbWVudEFuY2VzdG9yQ2hlY2tFdmVudFR5cGUgPSBcImN1c3RvbS1lbGVtZW50LWFuY2VzdG9yLWNoZWNrXCI7XG4gIGNvbnN0IGxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG4gICAgdHJhdmVyc2VkRWxlbWVudHMgPSBjb21wb3NlZFBhdGguc2xpY2UoY29tcG9zZWRQYXRoLmluZGV4T2YoY29tcG9uZW50RWwpLCBjb21wb3NlZFBhdGguaW5kZXhPZihsYWJlbCkpO1xuICB9O1xuICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKGN1c3RvbUVsZW1lbnRBbmNlc3RvckNoZWNrRXZlbnRUeXBlLCBsaXN0ZW5lciwgeyBvbmNlOiB0cnVlIH0pO1xuICBjb21wb25lbnRFbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChjdXN0b21FbGVtZW50QW5jZXN0b3JDaGVja0V2ZW50VHlwZSwgeyBjb21wb3NlZDogdHJ1ZSwgYnViYmxlczogdHJ1ZSB9KSk7XG4gIGxhYmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoY3VzdG9tRWxlbWVudEFuY2VzdG9yQ2hlY2tFdmVudFR5cGUsIGxpc3RlbmVyKTtcbiAgY29uc3QgYW5jZXN0b3JDdXN0b21FbGVtZW50cyA9IHRyYXZlcnNlZEVsZW1lbnRzXG4gICAgLmZpbHRlcigoZWwpID0+IGVsICE9PSBjb21wb25lbnRFbCAmJiBlbCAhPT0gbGFiZWwpXG4gICAgLmZpbHRlcigoZWwpID0+IGVsLnRhZ05hbWU/LmluY2x1ZGVzKFwiLVwiKSk7XG4gIHJldHVybiBhbmNlc3RvckN1c3RvbUVsZW1lbnRzLmxlbmd0aCA+IDA7XG59XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgbGFiZWwgaW50ZXJhY3Rpb25zIG9uIGNvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdExhYmVsKGNvbXBvbmVudCkge1xuICBjb25zdCBsYWJlbEVsID0gZmluZExhYmVsRm9yQ29tcG9uZW50KGNvbXBvbmVudC5lbCk7XG4gIGlmICgob25MYWJlbENsaWNrTWFwLmhhcyhsYWJlbEVsKSAmJiBsYWJlbEVsID09PSBjb21wb25lbnQubGFiZWxFbCkgfHxcbiAgICAoIWxhYmVsRWwgJiYgdW5sYWJlbGVkQ29tcG9uZW50cy5oYXMoY29tcG9uZW50KSkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgYm91bmRPbkxhYmVsRGlzY29ubmVjdGVkID0gb25MYWJlbERpc2Nvbm5lY3RlZC5iaW5kKGNvbXBvbmVudCk7XG4gIGlmIChsYWJlbEVsKSB7XG4gICAgY29tcG9uZW50LmxhYmVsRWwgPSBsYWJlbEVsO1xuICAgIGNvbnN0IGxhYmVsYWJsZXMgPSBsYWJlbFRvTGFiZWxhYmxlcy5nZXQobGFiZWxFbCkgfHwgW107XG4gICAgbGFiZWxhYmxlcy5wdXNoKGNvbXBvbmVudCk7XG4gICAgbGFiZWxUb0xhYmVsYWJsZXMuc2V0KGxhYmVsRWwsIGxhYmVsYWJsZXMuc29ydChzb3J0QnlET01PcmRlcikpO1xuICAgIGlmICghb25MYWJlbENsaWNrTWFwLmhhcyhjb21wb25lbnQubGFiZWxFbCkpIHtcbiAgICAgIG9uTGFiZWxDbGlja01hcC5zZXQoY29tcG9uZW50LmxhYmVsRWwsIG9uTGFiZWxDbGljayk7XG4gICAgICBjb21wb25lbnQubGFiZWxFbC5hZGRFdmVudExpc3RlbmVyKGxhYmVsQ2xpY2tFdmVudCwgb25MYWJlbENsaWNrKTtcbiAgICB9XG4gICAgdW5sYWJlbGVkQ29tcG9uZW50cy5kZWxldGUoY29tcG9uZW50KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsQ29ubmVjdGVkRXZlbnQsIG9uTGFiZWxDb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICAgIG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAuc2V0KGNvbXBvbmVudCwgYm91bmRPbkxhYmVsRGlzY29ubmVjdGVkKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGxhYmVsRGlzY29ubmVjdGVkRXZlbnQsIGJvdW5kT25MYWJlbERpc2Nvbm5lY3RlZCk7XG4gIH1cbiAgZWxzZSBpZiAoIXVubGFiZWxlZENvbXBvbmVudHMuaGFzKGNvbXBvbmVudCkpIHtcbiAgICBib3VuZE9uTGFiZWxEaXNjb25uZWN0ZWQoKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsRGlzY29ubmVjdGVkRXZlbnQsIG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICB9XG59XG4vKipcbiAqIEhlbHBlciB0byB0ZWFyIGRvd24gbGFiZWwgaW50ZXJhY3Rpb25zIG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrIG9uIGxhYmVsYWJsZSBjb21wb25lbnRzLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdExhYmVsKGNvbXBvbmVudCkge1xuICB1bmxhYmVsZWRDb21wb25lbnRzLmRlbGV0ZShjb21wb25lbnQpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsQ29ubmVjdGVkRXZlbnQsIG9uTGFiZWxDb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsRGlzY29ubmVjdGVkRXZlbnQsIG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICBvbkxhYmVsQ29ubmVjdGVkTWFwLmRlbGV0ZShjb21wb25lbnQpO1xuICBvbkxhYmVsRGlzY29ubmVjdGVkTWFwLmRlbGV0ZShjb21wb25lbnQpO1xuICBpZiAoIWNvbXBvbmVudC5sYWJlbEVsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGxhYmVsYWJsZXMgPSBsYWJlbFRvTGFiZWxhYmxlcy5nZXQoY29tcG9uZW50LmxhYmVsRWwpO1xuICBpZiAobGFiZWxhYmxlcy5sZW5ndGggPT09IDEpIHtcbiAgICBjb21wb25lbnQubGFiZWxFbC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsQ2xpY2tFdmVudCwgb25MYWJlbENsaWNrTWFwLmdldChjb21wb25lbnQubGFiZWxFbCkpO1xuICAgIG9uTGFiZWxDbGlja01hcC5kZWxldGUoY29tcG9uZW50LmxhYmVsRWwpO1xuICB9XG4gIGxhYmVsVG9MYWJlbGFibGVzLnNldChjb21wb25lbnQubGFiZWxFbCwgbGFiZWxhYmxlcy5maWx0ZXIoKGxhYmVsYWJsZSkgPT4gbGFiZWxhYmxlICE9PSBjb21wb25lbnQpLnNvcnQoc29ydEJ5RE9NT3JkZXIpKTtcbiAgY29tcG9uZW50LmxhYmVsRWwgPSBudWxsO1xufVxuZnVuY3Rpb24gc29ydEJ5RE9NT3JkZXIoYSwgYikge1xuICByZXR1cm4gaXNCZWZvcmUoYS5lbCwgYi5lbCkgPyAtMSA6IDE7XG59XG4vKipcbiAqIEhlbHBlciB0byBnZXQgdGhlIGxhYmVsIHRleHQgZnJvbSBhIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGdldExhYmVsVGV4dChjb21wb25lbnQpIHtcbiAgcmV0dXJuIGNvbXBvbmVudC5sYWJlbCB8fCBjb21wb25lbnQubGFiZWxFbD8udGV4dENvbnRlbnQ/LnRyaW0oKSB8fCBcIlwiO1xufVxuZnVuY3Rpb24gb25MYWJlbENsaWNrKGV2ZW50KSB7XG4gIGNvbnN0IGxhYmVsQ2xpY2tUYXJnZXQgPSBldmVudC5kZXRhaWwuc291cmNlRXZlbnQudGFyZ2V0O1xuICBjb25zdCBsYWJlbGFibGVzID0gbGFiZWxUb0xhYmVsYWJsZXMuZ2V0KHRoaXMpO1xuICBjb25zdCBjbGlja2VkTGFiZWxhYmxlID0gbGFiZWxhYmxlcy5maW5kKChsYWJlbGFibGUpID0+IGxhYmVsYWJsZS5lbCA9PT0gbGFiZWxDbGlja1RhcmdldCk7XG4gIGNvbnN0IGxhYmVsYWJsZUNoaWxkQ2xpY2tlZCA9IGxhYmVsYWJsZXMuaW5jbHVkZXMoY2xpY2tlZExhYmVsYWJsZSk7XG4gIGlmIChsYWJlbGFibGVDaGlsZENsaWNrZWQpIHtcbiAgICAvLyBubyBuZWVkIHRvIGZvcndhcmQgY2xpY2sgYXMgbGFiZWxhYmxlIHdpbGwgcmVjZWl2ZSBmb2N1c1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBmaXJzdExhYmVsYWJsZSA9IGxhYmVsYWJsZXNbMF07XG4gIGlmIChmaXJzdExhYmVsYWJsZS5kaXNhYmxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBmaXJzdExhYmVsYWJsZS5vbkxhYmVsQ2xpY2soZXZlbnQpO1xufVxuZnVuY3Rpb24gb25MYWJlbENvbm5lY3RlZCgpIHtcbiAgaWYgKHVubGFiZWxlZENvbXBvbmVudHMuaGFzKHRoaXMpKSB7XG4gICAgY29ubmVjdExhYmVsKHRoaXMpO1xuICB9XG59XG5mdW5jdGlvbiBvbkxhYmVsRGlzY29ubmVjdGVkKCkge1xuICB1bmxhYmVsZWRDb21wb25lbnRzLmFkZCh0aGlzKTtcbiAgY29uc3QgYm91bmRPbkxhYmVsQ29ubmVjdGVkID0gb25MYWJlbENvbm5lY3RlZE1hcC5nZXQodGhpcykgfHwgb25MYWJlbENvbm5lY3RlZC5iaW5kKHRoaXMpO1xuICBvbkxhYmVsQ29ubmVjdGVkTWFwLnNldCh0aGlzLCBib3VuZE9uTGFiZWxDb25uZWN0ZWQpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGxhYmVsQ29ubmVjdGVkRXZlbnQsIGJvdW5kT25MYWJlbENvbm5lY3RlZCk7XG59XG5cbmV4cG9ydCB7IGxhYmVsRGlzY29ubmVjdGVkRXZlbnQgYXMgYSwgY29ubmVjdExhYmVsIGFzIGMsIGRpc2Nvbm5lY3RMYWJlbCBhcyBkLCBnZXRMYWJlbFRleHQgYXMgZywgbGFiZWxDb25uZWN0ZWRFdmVudCBhcyBsIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=