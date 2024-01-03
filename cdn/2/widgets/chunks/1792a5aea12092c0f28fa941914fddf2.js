"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_component_js-node_modules_esri_c-801372"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/component.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/component.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getIconScale)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
function getIconScale(componentScale) {
  return componentScale === "l" ? "m" : "s";
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/filter2.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/filter2.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ "./node_modules/@esri/calcite-components/dist/components/debounce.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _debounce_js__WEBPACK_IMPORTED_MODULE_0__.S ? _debounce_js__WEBPACK_IMPORTED_MODULE_0__.S.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if ((0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.a)(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!(0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.i)(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.b)(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$3;

  return value === proto;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.c)(value) && (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.b)(value) == argsTag$1;
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.c)(value) && hasOwnProperty$2.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

/** Built-in value references. */
var Buffer = moduleExports$1 ? _debounce_js__WEBPACK_IMPORTED_MODULE_0__.r.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.c)(value) &&
    isLength(value.length) && !!typedArrayTags[(0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.b)(value)];
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _debounce_js__WEBPACK_IMPORTED_MODULE_0__.f.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!(0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.i)(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
    reHasRegExpChar = RegExp(reRegExpChar.source);

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */
function escapeRegExp(string) {
  string = toString(string);
  return (string && reHasRegExpChar.test(string))
    ? string.replace(reRegExpChar, '\\$&')
    : string;
}

/**
 * Iterates over own and inherited enumerable string keyed properties of an
 * object and invokes `iteratee` for each property. The iteratee is invoked
 * with three arguments: (value, key, object). Iteratee functions may exit
 * iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forInRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forIn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
 */
function forIn(object, iteratee) {
  return object == null
    ? object
    : baseFor(object, castFunction(iteratee), keysIn);
}

const filter = (data, value) => {
  const escapedValue = escapeRegExp(value);
  const regex = new RegExp(escapedValue, "i");
  if (data.length === 0) {
    console.warn(`No data was passed to the filter function.
    The data argument should be an array of objects`);
  }
  const find = (input, RE) => {
    if (input?.constant || input?.filterDisabled) {
      return true;
    }
    let found = false;
    forIn(input, (val) => {
      if (typeof val === "function" || val == null /* intentional == to catch undefined */) {
        return;
      }
      if (Array.isArray(val) || (typeof val === "object" && val !== null)) {
        if (find(val, RE)) {
          found = true;
        }
      }
      else if (RE.test(val)) {
        found = true;
      }
    });
    return found;
  };
  const result = data.filter((item) => {
    return find(item, regex);
  });
  return result;
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/icon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/icon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ Icon),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */




const CSS = {
  icon: "icon",
  flipRtl: "flip-rtl",
};

/**
 * Icon data cache.
 * Exported for testing purposes.
 *
 * @private
 */
const iconCache = {};
/**
 * Icon request cache.
 * Exported for testing purposes.
 *
 * @private
 */
const requestCache = {};
const scaleToPx = {
  s: 16,
  m: 24,
  l: 32,
};
async function fetchIcon({ icon, scale }) {
  const size = scaleToPx[scale];
  const name = normalizeIconName(icon);
  const filled = name.charAt(name.length - 1) === "F";
  const iconName = filled ? name.substring(0, name.length - 1) : name;
  const id = `${iconName}${size}${filled ? "F" : ""}`;
  if (iconCache[id]) {
    return iconCache[id];
  }
  if (!requestCache[id]) {
    requestCache[id] = fetch((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.getAssetPath)(`./assets/icon/${id}.json`))
      .then((resp) => resp.json())
      .catch(() => {
      console.error(`"${id}" is not a valid calcite-ui-icon name`);
      return "";
    });
  }
  const path = await requestCache[id];
  iconCache[id] = path;
  return path;
}
/**
 * Normalize the icon name to match the path data module exports.
 * Exported for testing purposes.
 *
 * @param name – an icon name that can be either kebab or camel-cased
 * @private
 */
function normalizeIconName(name) {
  const numberLeadingName = !isNaN(Number(name.charAt(0)));
  const parts = name.split("-");
  const kebabCased = parts.length > 0;
  if (kebabCased) {
    const firstNonDigitInPartPattern = /[a-z]/i;
    name = parts
      .map((part, partIndex) => {
      return part.replace(firstNonDigitInPartPattern, function replacer(match, offset) {
        const isFirstCharInName = partIndex === 0 && offset === 0;
        if (isFirstCharInName) {
          return match;
        }
        return match.toUpperCase();
      });
    })
      .join("");
  }
  return numberLeadingName ? `i${name}` : name;
}

const iconCss = ":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}";

const Icon = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.icon = null;
    this.flipRtl = false;
    this.scale = "m";
    this.textLabel = undefined;
    this.pathData = undefined;
    this.visible = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.waitUntilVisible(() => {
      this.visible = true;
      this.loadIconPathData();
    });
  }
  disconnectedCallback() {
    this.intersectionObserver?.disconnect();
    this.intersectionObserver = null;
  }
  async componentWillLoad() {
    this.loadIconPathData();
  }
  render() {
    const { el, flipRtl, pathData, scale, textLabel } = this;
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(el);
    const size = scaleToPx[scale];
    const semantic = !!textLabel;
    const paths = [].concat(pathData || "");
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Host, { "aria-hidden": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(!semantic), "aria-label": semantic ? textLabel : null, role: semantic ? "img" : null }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("svg", { "aria-hidden": "true", class: {
        [CSS.flipRtl]: dir === "rtl" && flipRtl,
        svg: true,
      }, fill: "currentColor", height: "100%", viewBox: `0 0 ${size} ${size}`, width: "100%", xmlns: "http://www.w3.org/2000/svg" }, paths.map((path) => typeof path === "string" ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { d: path })) : ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { d: path.d, opacity: "opacity" in path ? path.opacity : 1 }))))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  async loadIconPathData() {
    const { icon, scale, visible } = this;
    if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Build.isBrowser || !icon || !visible) {
      return;
    }
    const pathData = await fetchIcon({ icon, scale });
    // While the fetchIcon method is awaiting response, the icon requested can change. This check is to verify the response received belongs to the current icon.
    if (icon !== this.icon) {
      return;
    }
    this.pathData = pathData;
  }
  waitUntilVisible(callback) {
    this.intersectionObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_1__.c)("intersection", (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.intersectionObserver.disconnect();
          this.intersectionObserver = null;
          callback();
        }
      });
    }, { rootMargin: "50px" });
    if (!this.intersectionObserver) {
      callback();
      return;
    }
    this.intersectionObserver.observe(this.el);
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "icon": ["loadIconPathData"],
    "scale": ["loadIconPathData"]
  }; }
  static get style() { return iconCss; }
}, [1, "calcite-icon", {
    "icon": [513],
    "flipRtl": [516, "flip-rtl"],
    "scale": [513],
    "textLabel": [1, "text-label"],
    "pathData": [32],
    "visible": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Icon);
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/interactive.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/interactive.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ connectInteractive),
/* harmony export */   d: () => (/* binding */ disconnectInteractive),
/* harmony export */   g: () => (/* binding */ getUserAgentString),
/* harmony export */   u: () => (/* binding */ updateHostInteraction)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


function getUserAgentData() {
  return navigator.userAgentData;
}
function getUserAgentString() {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.Build.isBrowser) {
    return "";
  }
  const uaData = getUserAgentData();
  return uaData?.brands
    ? uaData.brands.map(({ brand, version }) => `${brand}/${version}`).join(" ")
    : navigator.userAgent;
}

// ⚠️ browser-sniffing is not a best practice and should be avoided ⚠️
const isFirefox = /firefox/i.test(getUserAgentString());
const interactiveElementToParent = isFirefox
  ? new WeakMap()
  : null;
function interceptedClick() {
  const { disabled } = this;
  if (!disabled) {
    HTMLElement.prototype.click.call(this);
  }
}
function onPointerDown(event) {
  const interactiveElement = event.target;
  if (isFirefox && !interactiveElementToParent.get(interactiveElement)) {
    return;
  }
  const { disabled } = interactiveElement;
  if (disabled) {
    // prevent click from moving focus on host
    event.preventDefault();
  }
}
const nonBubblingWhenDisabledMouseEvents = ["mousedown", "mouseup", "click"];
function onNonBubblingWhenDisabledMouseEvent(event) {
  if (isFirefox && !interactiveElementToParent.get(event.target)) {
    return;
  }
  const { disabled } = event.target;
  // prevent disallowed mouse events from being emitted on the disabled host (per https://github.com/whatwg/html/issues/5886)
  //⚠ we generally avoid stopping propagation of events, but this is needed to adhere to the intended spec changes above ⚠
  if (disabled) {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
}
const captureOnlyOptions = { capture: true };
/**
 * This helper updates the host element to prevent keyboard interaction on its subtree and sets the appropriate aria attribute for accessibility.
 *
 * This should be used in the `componentDidRender` lifecycle hook.
 *
 * **Notes**
 *
 * this util is not needed for simple components whose root element or elements are an interactive component (custom element or native control). For those cases, set the `disabled` props on the root components instead.
 * technically, users can override `tabindex` and restore keyboard navigation, but this will be considered user error
 *
 * @param component
 * @param hostIsTabbable – when set to true or its predicate returns true, the host is tabbable and will be managed by the helper. Set to "managed" for cases where a component's parent determines which item is tabbable (i.e., sets `tabindex` to allow tabbing).
 */
function updateHostInteraction(component, hostIsTabbable = false) {
  if (component.disabled) {
    component.el.setAttribute("tabindex", "-1");
    component.el.setAttribute("aria-disabled", "true");
    if (component.el.contains(document.activeElement)) {
      document.activeElement.blur();
    }
    blockInteraction(component);
    return;
  }
  restoreInteraction(component);
  if (typeof hostIsTabbable === "function") {
    component.el.setAttribute("tabindex", hostIsTabbable.call(component) ? "0" : "-1");
  }
  else if (hostIsTabbable === true) {
    component.el.setAttribute("tabindex", "0");
  }
  else if (hostIsTabbable === false) {
    component.el.removeAttribute("tabindex");
  }
  else ;
  component.el.removeAttribute("aria-disabled");
}
function blockInteraction(component) {
  component.el.click = interceptedClick;
  addInteractionListeners(isFirefox ? getParentElement(component) : component.el);
}
function addInteractionListeners(element) {
  if (!element) {
    // this path is only applicable to Firefox
    return;
  }
  element.addEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => element.addEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
}
function getParentElement(component) {
  return interactiveElementToParent.get(component.el);
}
function restoreInteraction(component) {
  delete component.el.click; // fallback on HTMLElement.prototype.click
  removeInteractionListeners(isFirefox ? getParentElement(component) : component.el);
}
function removeInteractionListeners(element) {
  if (!element) {
    // this path is only applicable to Firefox
    return;
  }
  element.removeEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => element.removeEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
}
/**
 * This utility helps disable components consistently in Firefox.
 *
 * It needs to be called in `connectedCallback` and is only needed for Firefox as it does not call capture event listeners before non-capture ones (see https://bugzilla.mozilla.org/show_bug.cgi?id=1731504).
 *
 * @param component
 */
function connectInteractive(component) {
  if (!component.disabled || !isFirefox) {
    return;
  }
  const parent = component.el.parentElement || component.el; /* assume element is host if it has no parent when connected */
  interactiveElementToParent.set(component.el, parent);
  blockInteraction(component);
}
/**
 * This utility restores interactivity to disabled components consistently in Firefox.
 *
 * It needs to be called in `disconnectedCallback` and is only needed for Firefox as it does not call capture event listeners before non-capture ones (see https://bugzilla.mozilla.org/show_bug.cgi?id=1731504).
 *
 * @param component
 */
function disconnectInteractive(component) {
  if (!isFirefox) {
    return;
  }
  // always remove on disconnect as render or connect will restore it
  interactiveElementToParent.delete(component.el);
  restoreInteraction(component);
}




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




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/t9n.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/t9n.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ connectMessages),
/* harmony export */   d: () => (/* binding */ disconnectMessages),
/* harmony export */   s: () => (/* binding */ setUpMessages),
/* harmony export */   u: () => (/* binding */ updateMessages)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const componentLangToMessageBundleCache = {};
async function getMessageBundle(lang, component) {
  const key = `${component}_${lang}`;
  if (componentLangToMessageBundleCache[key]) {
    return componentLangToMessageBundleCache[key];
  }
  componentLangToMessageBundleCache[key] = fetch((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.getAssetPath)(`./assets/${component}/t9n/messages_${lang}.json`))
    .then((resp) => {
    if (!resp.ok) {
      throwMessageFetchError();
    }
    return resp.json();
  })
    .catch(() => throwMessageFetchError());
  return componentLangToMessageBundleCache[key];
}
function throwMessageFetchError() {
  throw new Error("could not fetch component message bundle");
}
function mergeMessages(component) {
  component.messages = {
    ...component.defaultMessages,
    ...component.messageOverrides,
  };
}
/**
 * This utility sets up the messages used by the component. It should be awaited in the `componentWillLoad` lifecycle hook.
 *
 * @param component
 */
async function setUpMessages(component) {
  component.defaultMessages = await fetchMessages(component, component.effectiveLocale);
  mergeMessages(component);
}
async function fetchMessages(component, lang) {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.Build.isBrowser) {
    return {};
  }
  const { el } = component;
  const tag = el.tagName.toLowerCase();
  const componentName = tag.replace("calcite-", "");
  return getMessageBundle((0,_locale_js__WEBPACK_IMPORTED_MODULE_0__.g)(lang, "t9n"), componentName);
}
/**
 * This utility must be set up for the component to update its default message bundle if the locale changes.
 *
 * It can be set up in **either** of the following ways:
 *
 * 1. called from `LocalizedComponent`'s `onLocaleChange` method or
 * 2. called from a watcher configured to watch `LocalizedComponent`'s `effectiveLocale` prop
 *
 * @param component
 * @param lang
 */
async function updateMessages(component, lang) {
  component.defaultMessages = await fetchMessages(component, lang);
  mergeMessages(component);
}
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback`
 *
 * **Note**: this must be called after `LocalizedComponent`'s `connectLocalized` method.
 *
 * @param component
 */
function connectMessages(component) {
  component.onMessagesChange = defaultOnMessagesChange;
}
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
function disconnectMessages(component) {
  component.onMessagesChange = undefined;
}
function defaultOnMessagesChange() {
  mergeMessages(this);
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMTc5MmE1YWVhMTIwOTJjMGYyOGZhOTQxOTE0ZmRkZjIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZCOzs7Ozs7Ozs7Ozs7Ozs7O0FDVDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEk7O0FBRTFJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxVQUFVO0FBQ3JCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsMkNBQU0sR0FBRywyQ0FBTTtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrQ0FBUTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBSztBQUNaO0FBQ0E7QUFDQSxVQUFVLEtBQUs7QUFDZjtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFrQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2ZpbHRlcjIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2ljb24uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2ludGVyYWN0aXZlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9sYWJlbDIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3Q5bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5mdW5jdGlvbiBnZXRJY29uU2NhbGUoY29tcG9uZW50U2NhbGUpIHtcbiAgcmV0dXJuIGNvbXBvbmVudFNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCI7XG59XG5cbmV4cG9ydCB7IGdldEljb25TY2FsZSBhcyBnIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBhIGFzIGlzU3ltYm9sLCBTIGFzIFN5bWJvbCwgaSBhcyBpc09iamVjdCwgYiBhcyBiYXNlR2V0VGFnLCBjIGFzIGlzT2JqZWN0TGlrZSwgciBhcyByb290LCBmIGFzIGZyZWVHbG9iYWwgfSBmcm9tICcuL2RlYm91bmNlLmpzJztcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnJDEgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnJDEgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSJDEgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSJDEgOiBsZW5ndGg7XG5cbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGUgPT0gJ251bWJlcicgfHxcbiAgICAgICh0eXBlICE9ICdzeW1ib2wnICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSkgJiZcbiAgICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8kMyA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG8kMztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyQxID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWckMTtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvJDIgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSQyID0gb2JqZWN0UHJvdG8kMi5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90byQyLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eSQyLmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMkMSA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUkMSA9IGZyZWVFeHBvcnRzJDEgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyQxID0gZnJlZU1vZHVsZSQxICYmIGZyZWVNb2R1bGUkMS5leHBvcnRzID09PSBmcmVlRXhwb3J0cyQxO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzJDEgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvJDEgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSQxID0gb2JqZWN0UHJvdG8kMS5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eSQxLmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlXG4gKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBleGNlcHQgdGhhdCBpdCBpbmNsdWRlcyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNJbmAgd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5c0luKG9iamVjdCk7XG4gIH1cbiAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBiYXNlIGZ1bmN0aW9uIGZvciBtZXRob2RzIGxpa2UgYF8uZm9ySW5gIGFuZCBgXy5mb3JPd25gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VGb3IoZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzRnVuYykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBpdGVyYWJsZSA9IE9iamVjdChvYmplY3QpLFxuICAgICAgICBwcm9wcyA9IGtleXNGdW5jKG9iamVjdCksXG4gICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgdmFyIGtleSA9IHByb3BzW2Zyb21SaWdodCA/IGxlbmd0aCA6ICsraW5kZXhdO1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2tleV0sIGtleSwgaXRlcmFibGUpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYmFzZUZvck93bmAgd2hpY2ggaXRlcmF0ZXMgb3ZlciBgb2JqZWN0YFxuICogcHJvcGVydGllcyByZXR1cm5lZCBieSBga2V5c0Z1bmNgIGFuZCBpbnZva2VzIGBpdGVyYXRlZWAgZm9yIGVhY2ggcHJvcGVydHkuXG4gKiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYGlkZW50aXR5YCBpZiBpdCdzIG5vdCBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGNhc3QgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNhc3RGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicgPyB2YWx1ZSA6IGlkZW50aXR5O1xufVxuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nLFxuICAgIHJlSGFzUmVnRXhwQ2hhciA9IFJlZ0V4cChyZVJlZ0V4cENoYXIuc291cmNlKTtcblxuLyoqXG4gKiBFc2NhcGVzIHRoZSBgUmVnRXhwYCBzcGVjaWFsIGNoYXJhY3RlcnMgXCJeXCIsIFwiJFwiLCBcIlxcXCIsIFwiLlwiLCBcIipcIiwgXCIrXCIsXG4gKiBcIj9cIiwgXCIoXCIsIFwiKVwiLCBcIltcIiwgXCJdXCIsIFwie1wiLCBcIn1cIiwgYW5kIFwifFwiIGluIGBzdHJpbmdgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGVzY2FwZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGVzY2FwZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmVzY2FwZVJlZ0V4cCgnW2xvZGFzaF0oaHR0cHM6Ly9sb2Rhc2guY29tLyknKTtcbiAqIC8vID0+ICdcXFtsb2Rhc2hcXF1cXChodHRwczovL2xvZGFzaFxcLmNvbS9cXCknXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHJpbmcpIHtcbiAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgcmV0dXJuIChzdHJpbmcgJiYgcmVIYXNSZWdFeHBDaGFyLnRlc3Qoc3RyaW5nKSlcbiAgICA/IHN0cmluZy5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gICAgOiBzdHJpbmc7XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgb3ZlciBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0aWVzIG9mIGFuXG4gKiBvYmplY3QgYW5kIGludm9rZXMgYGl0ZXJhdGVlYCBmb3IgZWFjaCBwcm9wZXJ0eS4gVGhlIGl0ZXJhdGVlIGlzIGludm9rZWRcbiAqIHdpdGggdGhyZWUgYXJndW1lbnRzOiAodmFsdWUsIGtleSwgb2JqZWN0KS4gSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0XG4gKiBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICogQHNlZSBfLmZvckluUmlnaHRcbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5mb3JJbihuZXcgRm9vLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gKiAgIGNvbnNvbGUubG9nKGtleSk7XG4gKiB9KTtcbiAqIC8vID0+IExvZ3MgJ2EnLCAnYicsIHRoZW4gJ2MnIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpLlxuICovXG5mdW5jdGlvbiBmb3JJbihvYmplY3QsIGl0ZXJhdGVlKSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbFxuICAgID8gb2JqZWN0XG4gICAgOiBiYXNlRm9yKG9iamVjdCwgY2FzdEZ1bmN0aW9uKGl0ZXJhdGVlKSwga2V5c0luKTtcbn1cblxuY29uc3QgZmlsdGVyID0gKGRhdGEsIHZhbHVlKSA9PiB7XG4gIGNvbnN0IGVzY2FwZWRWYWx1ZSA9IGVzY2FwZVJlZ0V4cCh2YWx1ZSk7XG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChlc2NhcGVkVmFsdWUsIFwiaVwiKTtcbiAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc29sZS53YXJuKGBObyBkYXRhIHdhcyBwYXNzZWQgdG8gdGhlIGZpbHRlciBmdW5jdGlvbi5cbiAgICBUaGUgZGF0YSBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXkgb2Ygb2JqZWN0c2ApO1xuICB9XG4gIGNvbnN0IGZpbmQgPSAoaW5wdXQsIFJFKSA9PiB7XG4gICAgaWYgKGlucHV0Py5jb25zdGFudCB8fCBpbnB1dD8uZmlsdGVyRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICBmb3JJbihpbnB1dCwgKHZhbCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwiZnVuY3Rpb25cIiB8fCB2YWwgPT0gbnVsbCAvKiBpbnRlbnRpb25hbCA9PSB0byBjYXRjaCB1bmRlZmluZWQgKi8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSB8fCAodHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIiAmJiB2YWwgIT09IG51bGwpKSB7XG4gICAgICAgIGlmIChmaW5kKHZhbCwgUkUpKSB7XG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChSRS50ZXN0KHZhbCkpIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmb3VuZDtcbiAgfTtcbiAgY29uc3QgcmVzdWx0ID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gZmluZChpdGVtLCByZWdleCk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHsgZmlsdGVyIGFzIGYgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGdldEFzc2V0UGF0aCwgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgaCwgSG9zdCwgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldEVsZW1lbnREaXIsIHQgYXMgdG9BcmlhQm9vbGVhbiB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgaWNvbjogXCJpY29uXCIsXG4gIGZsaXBSdGw6IFwiZmxpcC1ydGxcIixcbn07XG5cbi8qKlxuICogSWNvbiBkYXRhIGNhY2hlLlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgaWNvbkNhY2hlID0ge307XG4vKipcbiAqIEljb24gcmVxdWVzdCBjYWNoZS5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IHJlcXVlc3RDYWNoZSA9IHt9O1xuY29uc3Qgc2NhbGVUb1B4ID0ge1xuICBzOiAxNixcbiAgbTogMjQsXG4gIGw6IDMyLFxufTtcbmFzeW5jIGZ1bmN0aW9uIGZldGNoSWNvbih7IGljb24sIHNjYWxlIH0pIHtcbiAgY29uc3Qgc2l6ZSA9IHNjYWxlVG9QeFtzY2FsZV07XG4gIGNvbnN0IG5hbWUgPSBub3JtYWxpemVJY29uTmFtZShpY29uKTtcbiAgY29uc3QgZmlsbGVkID0gbmFtZS5jaGFyQXQobmFtZS5sZW5ndGggLSAxKSA9PT0gXCJGXCI7XG4gIGNvbnN0IGljb25OYW1lID0gZmlsbGVkID8gbmFtZS5zdWJzdHJpbmcoMCwgbmFtZS5sZW5ndGggLSAxKSA6IG5hbWU7XG4gIGNvbnN0IGlkID0gYCR7aWNvbk5hbWV9JHtzaXplfSR7ZmlsbGVkID8gXCJGXCIgOiBcIlwifWA7XG4gIGlmIChpY29uQ2FjaGVbaWRdKSB7XG4gICAgcmV0dXJuIGljb25DYWNoZVtpZF07XG4gIH1cbiAgaWYgKCFyZXF1ZXN0Q2FjaGVbaWRdKSB7XG4gICAgcmVxdWVzdENhY2hlW2lkXSA9IGZldGNoKGdldEFzc2V0UGF0aChgLi9hc3NldHMvaWNvbi8ke2lkfS5qc29uYCkpXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihgXCIke2lkfVwiIGlzIG5vdCBhIHZhbGlkIGNhbGNpdGUtdWktaWNvbiBuYW1lYCk7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBwYXRoID0gYXdhaXQgcmVxdWVzdENhY2hlW2lkXTtcbiAgaWNvbkNhY2hlW2lkXSA9IHBhdGg7XG4gIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGljb24gbmFtZSB0byBtYXRjaCB0aGUgcGF0aCBkYXRhIG1vZHVsZSBleHBvcnRzLlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKlxuICogQHBhcmFtIG5hbWUg4oCTIGFuIGljb24gbmFtZSB0aGF0IGNhbiBiZSBlaXRoZXIga2ViYWIgb3IgY2FtZWwtY2FzZWRcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUljb25OYW1lKG5hbWUpIHtcbiAgY29uc3QgbnVtYmVyTGVhZGluZ05hbWUgPSAhaXNOYU4oTnVtYmVyKG5hbWUuY2hhckF0KDApKSk7XG4gIGNvbnN0IHBhcnRzID0gbmFtZS5zcGxpdChcIi1cIik7XG4gIGNvbnN0IGtlYmFiQ2FzZWQgPSBwYXJ0cy5sZW5ndGggPiAwO1xuICBpZiAoa2ViYWJDYXNlZCkge1xuICAgIGNvbnN0IGZpcnN0Tm9uRGlnaXRJblBhcnRQYXR0ZXJuID0gL1thLXpdL2k7XG4gICAgbmFtZSA9IHBhcnRzXG4gICAgICAubWFwKChwYXJ0LCBwYXJ0SW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBwYXJ0LnJlcGxhY2UoZmlyc3ROb25EaWdpdEluUGFydFBhdHRlcm4sIGZ1bmN0aW9uIHJlcGxhY2VyKG1hdGNoLCBvZmZzZXQpIHtcbiAgICAgICAgY29uc3QgaXNGaXJzdENoYXJJbk5hbWUgPSBwYXJ0SW5kZXggPT09IDAgJiYgb2Zmc2V0ID09PSAwO1xuICAgICAgICBpZiAoaXNGaXJzdENoYXJJbk5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KTtcbiAgICB9KVxuICAgICAgLmpvaW4oXCJcIik7XG4gIH1cbiAgcmV0dXJuIG51bWJlckxlYWRpbmdOYW1lID8gYGkke25hbWV9YCA6IG5hbWU7XG59XG5cbmNvbnN0IGljb25Dc3MgPSBcIjpob3N0e2Rpc3BsYXk6aW5saW5lLWZsZXg7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1pY29uLWNvbG9yKX06aG9zdChbc2NhbGU9c10pe2lubGluZS1zaXplOjE2cHg7YmxvY2stc2l6ZToxNnB4O21pbi1pbmxpbmUtc2l6ZToxNnB4O21pbi1ibG9jay1zaXplOjE2cHh9Omhvc3QoW3NjYWxlPW1dKXtpbmxpbmUtc2l6ZToyNHB4O2Jsb2NrLXNpemU6MjRweDttaW4taW5saW5lLXNpemU6MjRweDttaW4tYmxvY2stc2l6ZToyNHB4fTpob3N0KFtzY2FsZT1sXSl7aW5saW5lLXNpemU6MzJweDtibG9jay1zaXplOjMycHg7bWluLWlubGluZS1zaXplOjMycHg7bWluLWJsb2NrLXNpemU6MzJweH0uZmxpcC1ydGx7dHJhbnNmb3JtOnNjYWxlWCgtMSl9LnN2Z3tkaXNwbGF5OmJsb2NrfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBJY29uID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmljb24gPSBudWxsO1xuICAgIHRoaXMuZmxpcFJ0bCA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnRleHRMYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBhdGhEYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMud2FpdFVudGlsVmlzaWJsZSgoKSA9PiB7XG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgdGhpcy5sb2FkSWNvblBhdGhEYXRhKCk7XG4gICAgfSk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBudWxsO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMubG9hZEljb25QYXRoRGF0YSgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVsLCBmbGlwUnRsLCBwYXRoRGF0YSwgc2NhbGUsIHRleHRMYWJlbCB9ID0gdGhpcztcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKGVsKTtcbiAgICBjb25zdCBzaXplID0gc2NhbGVUb1B4W3NjYWxlXTtcbiAgICBjb25zdCBzZW1hbnRpYyA9ICEhdGV4dExhYmVsO1xuICAgIGNvbnN0IHBhdGhzID0gW10uY29uY2F0KHBhdGhEYXRhIHx8IFwiXCIpO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1oaWRkZW5cIjogdG9BcmlhQm9vbGVhbighc2VtYW50aWMpLCBcImFyaWEtbGFiZWxcIjogc2VtYW50aWMgPyB0ZXh0TGFiZWwgOiBudWxsLCByb2xlOiBzZW1hbnRpYyA/IFwiaW1nXCIgOiBudWxsIH0sIGgoXCJzdmdcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmZsaXBSdGxdOiBkaXIgPT09IFwicnRsXCIgJiYgZmxpcFJ0bCxcbiAgICAgICAgc3ZnOiB0cnVlLFxuICAgICAgfSwgZmlsbDogXCJjdXJyZW50Q29sb3JcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgdmlld0JveDogYDAgMCAke3NpemV9ICR7c2l6ZX1gLCB3aWR0aDogXCIxMDAlXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSwgcGF0aHMubWFwKChwYXRoKSA9PiB0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIiA/IChoKFwicGF0aFwiLCB7IGQ6IHBhdGggfSkpIDogKGgoXCJwYXRoXCIsIHsgZDogcGF0aC5kLCBvcGFjaXR5OiBcIm9wYWNpdHlcIiBpbiBwYXRoID8gcGF0aC5vcGFjaXR5IDogMSB9KSkpKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFzeW5jIGxvYWRJY29uUGF0aERhdGEoKSB7XG4gICAgY29uc3QgeyBpY29uLCBzY2FsZSwgdmlzaWJsZSB9ID0gdGhpcztcbiAgICBpZiAoIUJ1aWxkLmlzQnJvd3NlciB8fCAhaWNvbiB8fCAhdmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXRoRGF0YSA9IGF3YWl0IGZldGNoSWNvbih7IGljb24sIHNjYWxlIH0pO1xuICAgIC8vIFdoaWxlIHRoZSBmZXRjaEljb24gbWV0aG9kIGlzIGF3YWl0aW5nIHJlc3BvbnNlLCB0aGUgaWNvbiByZXF1ZXN0ZWQgY2FuIGNoYW5nZS4gVGhpcyBjaGVjayBpcyB0byB2ZXJpZnkgdGhlIHJlc3BvbnNlIHJlY2VpdmVkIGJlbG9uZ3MgdG8gdGhlIGN1cnJlbnQgaWNvbi5cbiAgICBpZiAoaWNvbiAhPT0gdGhpcy5pY29uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGF0aERhdGEgPSBwYXRoRGF0YTtcbiAgfVxuICB3YWl0VW50aWxWaXNpYmxlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwiaW50ZXJzZWN0aW9uXCIsIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIHsgcm9vdE1hcmdpbjogXCI1MHB4XCIgfSk7XG4gICAgaWYgKCF0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbCk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImljb25cIjogW1wibG9hZEljb25QYXRoRGF0YVwiXSxcbiAgICBcInNjYWxlXCI6IFtcImxvYWRJY29uUGF0aERhdGFcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gaWNvbkNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1pY29uXCIsIHtcbiAgICBcImljb25cIjogWzUxM10sXG4gICAgXCJmbGlwUnRsXCI6IFs1MTYsIFwiZmxpcC1ydGxcIl0sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcInRleHRMYWJlbFwiOiBbMSwgXCJ0ZXh0LWxhYmVsXCJdLFxuICAgIFwicGF0aERhdGFcIjogWzMyXSxcbiAgICBcInZpc2libGVcIjogWzMyXVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWljb25cIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIEljb24pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IEljb24gYXMgSSwgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBCdWlsZCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuZnVuY3Rpb24gZ2V0VXNlckFnZW50RGF0YSgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnREYXRhO1xufVxuZnVuY3Rpb24gZ2V0VXNlckFnZW50U3RyaW5nKCkge1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIGNvbnN0IHVhRGF0YSA9IGdldFVzZXJBZ2VudERhdGEoKTtcbiAgcmV0dXJuIHVhRGF0YT8uYnJhbmRzXG4gICAgPyB1YURhdGEuYnJhbmRzLm1hcCgoeyBicmFuZCwgdmVyc2lvbiB9KSA9PiBgJHticmFuZH0vJHt2ZXJzaW9ufWApLmpvaW4oXCIgXCIpXG4gICAgOiBuYXZpZ2F0b3IudXNlckFnZW50O1xufVxuXG4vLyDimqDvuI8gYnJvd3Nlci1zbmlmZmluZyBpcyBub3QgYSBiZXN0IHByYWN0aWNlIGFuZCBzaG91bGQgYmUgYXZvaWRlZCDimqDvuI9cbmNvbnN0IGlzRmlyZWZveCA9IC9maXJlZm94L2kudGVzdChnZXRVc2VyQWdlbnRTdHJpbmcoKSk7XG5jb25zdCBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudCA9IGlzRmlyZWZveFxuICA/IG5ldyBXZWFrTWFwKClcbiAgOiBudWxsO1xuZnVuY3Rpb24gaW50ZXJjZXB0ZWRDbGljaygpIHtcbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdGhpcztcbiAgaWYgKCFkaXNhYmxlZCkge1xuICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljay5jYWxsKHRoaXMpO1xuICB9XG59XG5mdW5jdGlvbiBvblBvaW50ZXJEb3duKGV2ZW50KSB7XG4gIGNvbnN0IGludGVyYWN0aXZlRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgaWYgKGlzRmlyZWZveCAmJiAhaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGludGVyYWN0aXZlRWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gaW50ZXJhY3RpdmVFbGVtZW50O1xuICBpZiAoZGlzYWJsZWQpIHtcbiAgICAvLyBwcmV2ZW50IGNsaWNrIGZyb20gbW92aW5nIGZvY3VzIG9uIGhvc3RcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5jb25zdCBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzID0gW1wibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcImNsaWNrXCJdO1xuZnVuY3Rpb24gb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQoZXZlbnQpIHtcbiAgaWYgKGlzRmlyZWZveCAmJiAhaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGV2ZW50LnRhcmdldCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gZXZlbnQudGFyZ2V0O1xuICAvLyBwcmV2ZW50IGRpc2FsbG93ZWQgbW91c2UgZXZlbnRzIGZyb20gYmVpbmcgZW1pdHRlZCBvbiB0aGUgZGlzYWJsZWQgaG9zdCAocGVyIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvaHRtbC9pc3N1ZXMvNTg4NilcbiAgLy/imqAgd2UgZ2VuZXJhbGx5IGF2b2lkIHN0b3BwaW5nIHByb3BhZ2F0aW9uIG9mIGV2ZW50cywgYnV0IHRoaXMgaXMgbmVlZGVkIHRvIGFkaGVyZSB0byB0aGUgaW50ZW5kZWQgc3BlYyBjaGFuZ2VzIGFib3ZlIOKaoFxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5jb25zdCBjYXB0dXJlT25seU9wdGlvbnMgPSB7IGNhcHR1cmU6IHRydWUgfTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXBkYXRlcyB0aGUgaG9zdCBlbGVtZW50IHRvIHByZXZlbnQga2V5Ym9hcmQgaW50ZXJhY3Rpb24gb24gaXRzIHN1YnRyZWUgYW5kIHNldHMgdGhlIGFwcHJvcHJpYXRlIGFyaWEgYXR0cmlidXRlIGZvciBhY2Nlc3NpYmlsaXR5LlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRSZW5kZXJgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqICoqTm90ZXMqKlxuICpcbiAqIHRoaXMgdXRpbCBpcyBub3QgbmVlZGVkIGZvciBzaW1wbGUgY29tcG9uZW50cyB3aG9zZSByb290IGVsZW1lbnQgb3IgZWxlbWVudHMgYXJlIGFuIGludGVyYWN0aXZlIGNvbXBvbmVudCAoY3VzdG9tIGVsZW1lbnQgb3IgbmF0aXZlIGNvbnRyb2wpLiBGb3IgdGhvc2UgY2FzZXMsIHNldCB0aGUgYGRpc2FibGVkYCBwcm9wcyBvbiB0aGUgcm9vdCBjb21wb25lbnRzIGluc3RlYWQuXG4gKiB0ZWNobmljYWxseSwgdXNlcnMgY2FuIG92ZXJyaWRlIGB0YWJpbmRleGAgYW5kIHJlc3RvcmUga2V5Ym9hcmQgbmF2aWdhdGlvbiwgYnV0IHRoaXMgd2lsbCBiZSBjb25zaWRlcmVkIHVzZXIgZXJyb3JcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gaG9zdElzVGFiYmFibGUg4oCTIHdoZW4gc2V0IHRvIHRydWUgb3IgaXRzIHByZWRpY2F0ZSByZXR1cm5zIHRydWUsIHRoZSBob3N0IGlzIHRhYmJhYmxlIGFuZCB3aWxsIGJlIG1hbmFnZWQgYnkgdGhlIGhlbHBlci4gU2V0IHRvIFwibWFuYWdlZFwiIGZvciBjYXNlcyB3aGVyZSBhIGNvbXBvbmVudCdzIHBhcmVudCBkZXRlcm1pbmVzIHdoaWNoIGl0ZW0gaXMgdGFiYmFibGUgKGkuZS4sIHNldHMgYHRhYmluZGV4YCB0byBhbGxvdyB0YWJiaW5nKS5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlSG9zdEludGVyYWN0aW9uKGNvbXBvbmVudCwgaG9zdElzVGFiYmFibGUgPSBmYWxzZSkge1xuICBpZiAoY29tcG9uZW50LmRpc2FibGVkKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xuICAgIGlmIChjb21wb25lbnQuZWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgICBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpO1xuICBpZiAodHlwZW9mIGhvc3RJc1RhYmJhYmxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgaG9zdElzVGFiYmFibGUuY2FsbChjb21wb25lbnQpID8gXCIwXCIgOiBcIi0xXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSB0cnVlKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gZmFsc2UpIHtcbiAgICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gIH1cbiAgZWxzZSA7XG4gIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIpO1xufVxuZnVuY3Rpb24gYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmVsLmNsaWNrID0gaW50ZXJjZXB0ZWRDbGljaztcbiAgYWRkSW50ZXJhY3Rpb25MaXN0ZW5lcnMoaXNGaXJlZm94ID8gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIDogY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIGFkZEludGVyYWN0aW9uTGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgLy8gdGhpcyBwYXRoIGlzIG9ubHkgYXBwbGljYWJsZSB0byBGaXJlZm94XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG9uUG9pbnRlckRvd24sIGNhcHR1cmVPbmx5T3B0aW9ucyk7XG4gIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xufVxuZnVuY3Rpb24gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIHtcbiAgcmV0dXJuIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCkge1xuICBkZWxldGUgY29tcG9uZW50LmVsLmNsaWNrOyAvLyBmYWxsYmFjayBvbiBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2tcbiAgcmVtb3ZlSW50ZXJhY3Rpb25MaXN0ZW5lcnMoaXNGaXJlZm94ID8gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIDogY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUludGVyYWN0aW9uTGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgLy8gdGhpcyBwYXRoIGlzIG9ubHkgYXBwbGljYWJsZSB0byBGaXJlZm94XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG9uUG9pbnRlckRvd24sIGNhcHR1cmVPbmx5T3B0aW9ucyk7XG4gIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgaGVscHMgZGlzYWJsZSBjb21wb25lbnRzIGNvbnNpc3RlbnRseSBpbiBGaXJlZm94LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgIGFuZCBpcyBvbmx5IG5lZWRlZCBmb3IgRmlyZWZveCBhcyBpdCBkb2VzIG5vdCBjYWxsIGNhcHR1cmUgZXZlbnQgbGlzdGVuZXJzIGJlZm9yZSBub24tY2FwdHVyZSBvbmVzIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTczMTUwNCkuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0SW50ZXJhY3RpdmUoY29tcG9uZW50KSB7XG4gIGlmICghY29tcG9uZW50LmRpc2FibGVkIHx8ICFpc0ZpcmVmb3gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcGFyZW50ID0gY29tcG9uZW50LmVsLnBhcmVudEVsZW1lbnQgfHwgY29tcG9uZW50LmVsOyAvKiBhc3N1bWUgZWxlbWVudCBpcyBob3N0IGlmIGl0IGhhcyBubyBwYXJlbnQgd2hlbiBjb25uZWN0ZWQgKi9cbiAgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuc2V0KGNvbXBvbmVudC5lbCwgcGFyZW50KTtcbiAgYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgcmVzdG9yZXMgaW50ZXJhY3Rpdml0eSB0byBkaXNhYmxlZCBjb21wb25lbnRzIGNvbnNpc3RlbnRseSBpbiBGaXJlZm94LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2tgIGFuZCBpcyBvbmx5IG5lZWRlZCBmb3IgRmlyZWZveCBhcyBpdCBkb2VzIG5vdCBjYWxsIGNhcHR1cmUgZXZlbnQgbGlzdGVuZXJzIGJlZm9yZSBub24tY2FwdHVyZSBvbmVzIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTczMTUwNCkuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0SW50ZXJhY3RpdmUoY29tcG9uZW50KSB7XG4gIGlmICghaXNGaXJlZm94KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFsd2F5cyByZW1vdmUgb24gZGlzY29ubmVjdCBhcyByZW5kZXIgb3IgY29ubmVjdCB3aWxsIHJlc3RvcmUgaXRcbiAgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZGVsZXRlKGNvbXBvbmVudC5lbCk7XG4gIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpO1xufVxuXG5leHBvcnQgeyBjb25uZWN0SW50ZXJhY3RpdmUgYXMgYywgZGlzY29ubmVjdEludGVyYWN0aXZlIGFzIGQsIGdldFVzZXJBZ2VudFN0cmluZyBhcyBnLCB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gYXMgdSB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgeSBhcyBpc0JlZm9yZSwgcSBhcyBxdWVyeUVsZW1lbnRSb290cywgYyBhcyBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkgfSBmcm9tICcuL2RvbS5qcyc7XG5cbi8qKlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seVxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5jb25zdCBsYWJlbENsaWNrRXZlbnQgPSBcImNhbGNpdGVJbnRlcm5hbExhYmVsQ2xpY2tcIjtcbmNvbnN0IGxhYmVsQ29ubmVjdGVkRXZlbnQgPSBcImNhbGNpdGVJbnRlcm5hbExhYmVsQ29ubmVjdGVkXCI7XG5jb25zdCBsYWJlbERpc2Nvbm5lY3RlZEV2ZW50ID0gXCJjYWxjaXRlSW50ZXJuYWxMYWJlbERpc2Nvbm5lY3RlZFwiO1xuY29uc3QgbGFiZWxUYWdOYW1lID0gXCJjYWxjaXRlLWxhYmVsXCI7XG5jb25zdCBsYWJlbFRvTGFiZWxhYmxlcyA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBvbkxhYmVsQ2xpY2tNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3Qgb25MYWJlbENvbm5lY3RlZE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBvbkxhYmVsRGlzY29ubmVjdGVkTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHVubGFiZWxlZENvbXBvbmVudHMgPSBuZXcgV2Vha1NldCgpO1xuY29uc3QgZmluZExhYmVsRm9yQ29tcG9uZW50ID0gKGNvbXBvbmVudEVsKSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IGNvbXBvbmVudEVsO1xuICBjb25zdCBmb3JMYWJlbCA9IGlkICYmIHF1ZXJ5RWxlbWVudFJvb3RzKGNvbXBvbmVudEVsLCB7IHNlbGVjdG9yOiBgJHtsYWJlbFRhZ05hbWV9W2Zvcj1cIiR7aWR9XCJdYCB9KTtcbiAgaWYgKGZvckxhYmVsKSB7XG4gICAgcmV0dXJuIGZvckxhYmVsO1xuICB9XG4gIGNvbnN0IHBhcmVudExhYmVsID0gY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5KGNvbXBvbmVudEVsLCBsYWJlbFRhZ05hbWUpO1xuICBpZiAoIXBhcmVudExhYmVsIHx8XG4gICAgLy8gbGFiZWxhYmxlIGNvbXBvbmVudHMgd2l0aGluIG90aGVyIGN1c3RvbSBlbGVtZW50cyBhcmUgbm90IGNvbnNpZGVyZWQgbGFiZWxhYmxlXG4gICAgaGFzQW5jZXN0b3JDdXN0b21FbGVtZW50cyhwYXJlbnRMYWJlbCwgY29tcG9uZW50RWwpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHBhcmVudExhYmVsO1xufTtcbmZ1bmN0aW9uIGhhc0FuY2VzdG9yQ3VzdG9tRWxlbWVudHMobGFiZWwsIGNvbXBvbmVudEVsKSB7XG4gIGxldCB0cmF2ZXJzZWRFbGVtZW50cztcbiAgY29uc3QgY3VzdG9tRWxlbWVudEFuY2VzdG9yQ2hlY2tFdmVudFR5cGUgPSBcImN1c3RvbS1lbGVtZW50LWFuY2VzdG9yLWNoZWNrXCI7XG4gIGNvbnN0IGxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG4gICAgdHJhdmVyc2VkRWxlbWVudHMgPSBjb21wb3NlZFBhdGguc2xpY2UoY29tcG9zZWRQYXRoLmluZGV4T2YoY29tcG9uZW50RWwpLCBjb21wb3NlZFBhdGguaW5kZXhPZihsYWJlbCkpO1xuICB9O1xuICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKGN1c3RvbUVsZW1lbnRBbmNlc3RvckNoZWNrRXZlbnRUeXBlLCBsaXN0ZW5lciwgeyBvbmNlOiB0cnVlIH0pO1xuICBjb21wb25lbnRFbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChjdXN0b21FbGVtZW50QW5jZXN0b3JDaGVja0V2ZW50VHlwZSwgeyBjb21wb3NlZDogdHJ1ZSwgYnViYmxlczogdHJ1ZSB9KSk7XG4gIGxhYmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoY3VzdG9tRWxlbWVudEFuY2VzdG9yQ2hlY2tFdmVudFR5cGUsIGxpc3RlbmVyKTtcbiAgY29uc3QgYW5jZXN0b3JDdXN0b21FbGVtZW50cyA9IHRyYXZlcnNlZEVsZW1lbnRzXG4gICAgLmZpbHRlcigoZWwpID0+IGVsICE9PSBjb21wb25lbnRFbCAmJiBlbCAhPT0gbGFiZWwpXG4gICAgLmZpbHRlcigoZWwpID0+IGVsLnRhZ05hbWU/LmluY2x1ZGVzKFwiLVwiKSk7XG4gIHJldHVybiBhbmNlc3RvckN1c3RvbUVsZW1lbnRzLmxlbmd0aCA+IDA7XG59XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgbGFiZWwgaW50ZXJhY3Rpb25zIG9uIGNvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdExhYmVsKGNvbXBvbmVudCkge1xuICBjb25zdCBsYWJlbEVsID0gZmluZExhYmVsRm9yQ29tcG9uZW50KGNvbXBvbmVudC5lbCk7XG4gIGlmICgob25MYWJlbENsaWNrTWFwLmhhcyhsYWJlbEVsKSAmJiBsYWJlbEVsID09PSBjb21wb25lbnQubGFiZWxFbCkgfHxcbiAgICAoIWxhYmVsRWwgJiYgdW5sYWJlbGVkQ29tcG9uZW50cy5oYXMoY29tcG9uZW50KSkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgYm91bmRPbkxhYmVsRGlzY29ubmVjdGVkID0gb25MYWJlbERpc2Nvbm5lY3RlZC5iaW5kKGNvbXBvbmVudCk7XG4gIGlmIChsYWJlbEVsKSB7XG4gICAgY29tcG9uZW50LmxhYmVsRWwgPSBsYWJlbEVsO1xuICAgIGNvbnN0IGxhYmVsYWJsZXMgPSBsYWJlbFRvTGFiZWxhYmxlcy5nZXQobGFiZWxFbCkgfHwgW107XG4gICAgbGFiZWxhYmxlcy5wdXNoKGNvbXBvbmVudCk7XG4gICAgbGFiZWxUb0xhYmVsYWJsZXMuc2V0KGxhYmVsRWwsIGxhYmVsYWJsZXMuc29ydChzb3J0QnlET01PcmRlcikpO1xuICAgIGlmICghb25MYWJlbENsaWNrTWFwLmhhcyhjb21wb25lbnQubGFiZWxFbCkpIHtcbiAgICAgIG9uTGFiZWxDbGlja01hcC5zZXQoY29tcG9uZW50LmxhYmVsRWwsIG9uTGFiZWxDbGljayk7XG4gICAgICBjb21wb25lbnQubGFiZWxFbC5hZGRFdmVudExpc3RlbmVyKGxhYmVsQ2xpY2tFdmVudCwgb25MYWJlbENsaWNrKTtcbiAgICB9XG4gICAgdW5sYWJlbGVkQ29tcG9uZW50cy5kZWxldGUoY29tcG9uZW50KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsQ29ubmVjdGVkRXZlbnQsIG9uTGFiZWxDb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICAgIG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAuc2V0KGNvbXBvbmVudCwgYm91bmRPbkxhYmVsRGlzY29ubmVjdGVkKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGxhYmVsRGlzY29ubmVjdGVkRXZlbnQsIGJvdW5kT25MYWJlbERpc2Nvbm5lY3RlZCk7XG4gIH1cbiAgZWxzZSBpZiAoIXVubGFiZWxlZENvbXBvbmVudHMuaGFzKGNvbXBvbmVudCkpIHtcbiAgICBib3VuZE9uTGFiZWxEaXNjb25uZWN0ZWQoKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsRGlzY29ubmVjdGVkRXZlbnQsIG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICB9XG59XG4vKipcbiAqIEhlbHBlciB0byB0ZWFyIGRvd24gbGFiZWwgaW50ZXJhY3Rpb25zIG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrIG9uIGxhYmVsYWJsZSBjb21wb25lbnRzLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdExhYmVsKGNvbXBvbmVudCkge1xuICB1bmxhYmVsZWRDb21wb25lbnRzLmRlbGV0ZShjb21wb25lbnQpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsQ29ubmVjdGVkRXZlbnQsIG9uTGFiZWxDb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsRGlzY29ubmVjdGVkRXZlbnQsIG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICBvbkxhYmVsQ29ubmVjdGVkTWFwLmRlbGV0ZShjb21wb25lbnQpO1xuICBvbkxhYmVsRGlzY29ubmVjdGVkTWFwLmRlbGV0ZShjb21wb25lbnQpO1xuICBpZiAoIWNvbXBvbmVudC5sYWJlbEVsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGxhYmVsYWJsZXMgPSBsYWJlbFRvTGFiZWxhYmxlcy5nZXQoY29tcG9uZW50LmxhYmVsRWwpO1xuICBpZiAobGFiZWxhYmxlcy5sZW5ndGggPT09IDEpIHtcbiAgICBjb21wb25lbnQubGFiZWxFbC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsQ2xpY2tFdmVudCwgb25MYWJlbENsaWNrTWFwLmdldChjb21wb25lbnQubGFiZWxFbCkpO1xuICAgIG9uTGFiZWxDbGlja01hcC5kZWxldGUoY29tcG9uZW50LmxhYmVsRWwpO1xuICB9XG4gIGxhYmVsVG9MYWJlbGFibGVzLnNldChjb21wb25lbnQubGFiZWxFbCwgbGFiZWxhYmxlcy5maWx0ZXIoKGxhYmVsYWJsZSkgPT4gbGFiZWxhYmxlICE9PSBjb21wb25lbnQpLnNvcnQoc29ydEJ5RE9NT3JkZXIpKTtcbiAgY29tcG9uZW50LmxhYmVsRWwgPSBudWxsO1xufVxuZnVuY3Rpb24gc29ydEJ5RE9NT3JkZXIoYSwgYikge1xuICByZXR1cm4gaXNCZWZvcmUoYS5lbCwgYi5lbCkgPyAtMSA6IDE7XG59XG4vKipcbiAqIEhlbHBlciB0byBnZXQgdGhlIGxhYmVsIHRleHQgZnJvbSBhIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGdldExhYmVsVGV4dChjb21wb25lbnQpIHtcbiAgcmV0dXJuIGNvbXBvbmVudC5sYWJlbCB8fCBjb21wb25lbnQubGFiZWxFbD8udGV4dENvbnRlbnQ/LnRyaW0oKSB8fCBcIlwiO1xufVxuZnVuY3Rpb24gb25MYWJlbENsaWNrKGV2ZW50KSB7XG4gIGNvbnN0IGxhYmVsQ2xpY2tUYXJnZXQgPSBldmVudC5kZXRhaWwuc291cmNlRXZlbnQudGFyZ2V0O1xuICBjb25zdCBsYWJlbGFibGVzID0gbGFiZWxUb0xhYmVsYWJsZXMuZ2V0KHRoaXMpO1xuICBjb25zdCBjbGlja2VkTGFiZWxhYmxlID0gbGFiZWxhYmxlcy5maW5kKChsYWJlbGFibGUpID0+IGxhYmVsYWJsZS5lbCA9PT0gbGFiZWxDbGlja1RhcmdldCk7XG4gIGNvbnN0IGxhYmVsYWJsZUNoaWxkQ2xpY2tlZCA9IGxhYmVsYWJsZXMuaW5jbHVkZXMoY2xpY2tlZExhYmVsYWJsZSk7XG4gIGlmIChsYWJlbGFibGVDaGlsZENsaWNrZWQpIHtcbiAgICAvLyBubyBuZWVkIHRvIGZvcndhcmQgY2xpY2sgYXMgbGFiZWxhYmxlIHdpbGwgcmVjZWl2ZSBmb2N1c1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBmaXJzdExhYmVsYWJsZSA9IGxhYmVsYWJsZXNbMF07XG4gIGlmIChmaXJzdExhYmVsYWJsZS5kaXNhYmxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBmaXJzdExhYmVsYWJsZS5vbkxhYmVsQ2xpY2soZXZlbnQpO1xufVxuZnVuY3Rpb24gb25MYWJlbENvbm5lY3RlZCgpIHtcbiAgaWYgKHVubGFiZWxlZENvbXBvbmVudHMuaGFzKHRoaXMpKSB7XG4gICAgY29ubmVjdExhYmVsKHRoaXMpO1xuICB9XG59XG5mdW5jdGlvbiBvbkxhYmVsRGlzY29ubmVjdGVkKCkge1xuICB1bmxhYmVsZWRDb21wb25lbnRzLmFkZCh0aGlzKTtcbiAgY29uc3QgYm91bmRPbkxhYmVsQ29ubmVjdGVkID0gb25MYWJlbENvbm5lY3RlZE1hcC5nZXQodGhpcykgfHwgb25MYWJlbENvbm5lY3RlZC5iaW5kKHRoaXMpO1xuICBvbkxhYmVsQ29ubmVjdGVkTWFwLnNldCh0aGlzLCBib3VuZE9uTGFiZWxDb25uZWN0ZWQpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGxhYmVsQ29ubmVjdGVkRXZlbnQsIGJvdW5kT25MYWJlbENvbm5lY3RlZCk7XG59XG5cbmV4cG9ydCB7IGxhYmVsRGlzY29ubmVjdGVkRXZlbnQgYXMgYSwgY29ubmVjdExhYmVsIGFzIGMsIGRpc2Nvbm5lY3RMYWJlbCBhcyBkLCBnZXRMYWJlbFRleHQgYXMgZywgbGFiZWxDb25uZWN0ZWRFdmVudCBhcyBsIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBCdWlsZCwgZ2V0QXNzZXRQYXRoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTdXBwb3J0ZWRMb2NhbGUgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5cbmNvbnN0IGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZSA9IHt9O1xuYXN5bmMgZnVuY3Rpb24gZ2V0TWVzc2FnZUJ1bmRsZShsYW5nLCBjb21wb25lbnQpIHtcbiAgY29uc3Qga2V5ID0gYCR7Y29tcG9uZW50fV8ke2xhbmd9YDtcbiAgaWYgKGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xuICB9XG4gIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldID0gZmV0Y2goZ2V0QXNzZXRQYXRoKGAuL2Fzc2V0cy8ke2NvbXBvbmVudH0vdDluL21lc3NhZ2VzXyR7bGFuZ30uanNvbmApKVxuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgfSlcbiAgICAuY2F0Y2goKCkgPT4gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpKTtcbiAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xufVxuZnVuY3Rpb24gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY291bGQgbm90IGZldGNoIGNvbXBvbmVudCBtZXNzYWdlIGJ1bmRsZVwiKTtcbn1cbmZ1bmN0aW9uIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5tZXNzYWdlcyA9IHtcbiAgICAuLi5jb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzLFxuICAgIC4uLmNvbXBvbmVudC5tZXNzYWdlT3ZlcnJpZGVzLFxuICB9O1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCB0aGUgbWVzc2FnZXMgdXNlZCBieSB0aGUgY29tcG9uZW50LiBJdCBzaG91bGQgYmUgYXdhaXRlZCBpbiB0aGUgYGNvbXBvbmVudFdpbGxMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldFVwTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgY29tcG9uZW50LmVmZmVjdGl2ZUxvY2FsZSk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIGNvbnN0IHsgZWwgfSA9IGNvbXBvbmVudDtcbiAgY29uc3QgdGFnID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBjb21wb25lbnROYW1lID0gdGFnLnJlcGxhY2UoXCJjYWxjaXRlLVwiLCBcIlwiKTtcbiAgcmV0dXJuIGdldE1lc3NhZ2VCdW5kbGUoZ2V0U3VwcG9ydGVkTG9jYWxlKGxhbmcsIFwidDluXCIpLCBjb21wb25lbnROYW1lKTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IG11c3QgYmUgc2V0IHVwIGZvciB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZSBpdHMgZGVmYXVsdCBtZXNzYWdlIGJ1bmRsZSBpZiB0aGUgbG9jYWxlIGNoYW5nZXMuXG4gKlxuICogSXQgY2FuIGJlIHNldCB1cCBpbiAqKmVpdGhlcioqIG9mIHRoZSBmb2xsb3dpbmcgd2F5czpcbiAqXG4gKiAxLiBjYWxsZWQgZnJvbSBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBvbkxvY2FsZUNoYW5nZWAgbWV0aG9kIG9yXG4gKiAyLiBjYWxsZWQgZnJvbSBhIHdhdGNoZXIgY29uZmlndXJlZCB0byB3YXRjaCBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBlZmZlY3RpdmVMb2NhbGVgIHByb3BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gbGFuZ1xuICovXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpIHtcbiAgY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyA9IGF3YWl0IGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKTtcbiAgbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiAqKk5vdGUqKjogdGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBjb25uZWN0TG9jYWxpemVkYCBtZXRob2QuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0TWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5vbk1lc3NhZ2VzQ2hhbmdlID0gZGVmYXVsdE9uTWVzc2FnZXNDaGFuZ2U7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSB0ZWFycyBkb3duIGludGVybmFscyBmb3IgbWVzc2FnZXMgc3VwcG9ydC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICBtZXJnZU1lc3NhZ2VzKHRoaXMpO1xufVxuXG5leHBvcnQgeyBjb25uZWN0TWVzc2FnZXMgYXMgYywgZGlzY29ubmVjdE1lc3NhZ2VzIGFzIGQsIHNldFVwTWVzc2FnZXMgYXMgcywgdXBkYXRlTWVzc2FnZXMgYXMgdSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9