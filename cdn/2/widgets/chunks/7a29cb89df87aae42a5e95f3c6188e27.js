"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_focusTrapComponent_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/focusTrapComponent.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/focusTrapComponent.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ activateFocusTrap),
/* harmony export */   c: () => (/* binding */ connectFocusTrap),
/* harmony export */   d: () => (/* binding */ deactivateFocusTrap),
/* harmony export */   u: () => (/* binding */ updateFocusTrapElements)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var activeFocusTraps = {
  activateTrap: function activateTrap(trapStack, trap) {
    if (trapStack.length > 0) {
      var activeTrap = trapStack[trapStack.length - 1];
      if (activeTrap !== trap) {
        activeTrap.pause();
      }
    }
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex === -1) {
      trapStack.push(trap);
    } else {
      // move this existing trap to the front of the queue
      trapStack.splice(trapIndex, 1);
      trapStack.push(trap);
    }
  },
  deactivateTrap: function deactivateTrap(trapStack, trap) {
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex !== -1) {
      trapStack.splice(trapIndex, 1);
    }
    if (trapStack.length > 0) {
      trapStack[trapStack.length - 1].unpause();
    }
  }
};
var isSelectableInput = function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
};
var isEscapeEvent = function isEscapeEvent(e) {
  return (e === null || e === void 0 ? void 0 : e.key) === 'Escape' || (e === null || e === void 0 ? void 0 : e.key) === 'Esc' || (e === null || e === void 0 ? void 0 : e.keyCode) === 27;
};
var isTabEvent = function isTabEvent(e) {
  return (e === null || e === void 0 ? void 0 : e.key) === 'Tab' || (e === null || e === void 0 ? void 0 : e.keyCode) === 9;
};

// checks for TAB by default
var isKeyForward = function isKeyForward(e) {
  return isTabEvent(e) && !e.shiftKey;
};

// checks for SHIFT+TAB by default
var isKeyBackward = function isKeyBackward(e) {
  return isTabEvent(e) && e.shiftKey;
};
var delay = function delay(fn) {
  return setTimeout(fn, 0);
};

// Array.find/findIndex() are not supported on IE; this replicates enough
//  of Array.findIndex() for our needs
var findIndex = function findIndex(arr, fn) {
  var idx = -1;
  arr.every(function (value, i) {
    if (fn(value)) {
      idx = i;
      return false; // break
    }

    return true; // next
  });

  return idx;
};

/**
 * Get an option's value when it could be a plain value, or a handler that provides
 *  the value.
 * @param {*} value Option's value to check.
 * @param {...*} [params] Any parameters to pass to the handler, if `value` is a function.
 * @returns {*} The `value`, or the handler's returned value.
 */
var valueOrHandler = function valueOrHandler(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }
  return typeof value === 'function' ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget(event) {
  // NOTE: If the trap is _inside_ a shadow DOM, event.target will always be the
  //  shadow host. However, event.target.composedPath() will be an array of
  //  nodes "clicked" from inner-most (the actual element inside the shadow) to
  //  outer-most (the host HTML document). If we have access to composedPath(),
  //  then use its first element; otherwise, fall back to event.target (and
  //  this only works for an _open_ shadow DOM; otherwise,
  //  composedPath()[0] === event.target always).
  return event.target.shadowRoot && typeof event.composedPath === 'function' ? event.composedPath()[0] : event.target;
};

// NOTE: this must be _outside_ `createFocusTrap()` to make sure all traps in this
//  current instance use the same stack if `userOptions.trapStack` isn't specified
var internalTrapStack = [];
var createFocusTrap = function createFocusTrap(elements, userOptions) {
  // SSR: a live trap shouldn't be created in this type of environment so this
  //  should be safe code to execute if the `document` option isn't specified
  var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
  var trapStack = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.trapStack) || internalTrapStack;
  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true,
    isKeyForward: isKeyForward,
    isKeyBackward: isKeyBackward
  }, userOptions);
  var state = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list

    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: undefined,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: undefined
  };
  var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

  /**
   * Gets a configuration option value.
   * @param {Object|undefined} configOverrideOptions If true, and option is defined in this set,
   *  value will be taken from this object. Otherwise, value will be taken from base configuration.
   * @param {string} optionName Name of the option whose value is sought.
   * @param {string|undefined} [configOptionName] Name of option to use __instead of__ `optionName`
   *  IIF `configOverrideOptions` is not defined. Otherwise, `optionName` is used.
   */
  var getOption = function getOption(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== undefined ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  };

  /**
   * Finds the index of the container that contains the element.
   * @param {HTMLElement} element
   * @param {Event} [event] If available, and `element` isn't directly found in any container,
   *  the event's composed path is used to see if includes any known trap containers in the
   *  case where the element is inside a Shadow DOM.
   * @returns {number} Index of the container in either `state.containers` or
   *  `state.containerGroups` (the order/length of these lists are the same); -1
   *  if the element isn't found.
   */
  var findContainerIndex = function findContainerIndex(element, event) {
    var composedPath = typeof (event === null || event === void 0 ? void 0 : event.composedPath) === 'function' ? event.composedPath() : undefined;
    // NOTE: search `containerGroups` because it's possible a group contains no tabbable
    //  nodes, but still contains focusable nodes (e.g. if they all have `tabindex=-1`)
    //  and we still need to find the element in there
    return state.containerGroups.findIndex(function (_ref) {
      var container = _ref.container,
        tabbableNodes = _ref.tabbableNodes;
      return container.contains(element) || ( // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      composedPath === null || composedPath === void 0 ? void 0 : composedPath.includes(container)) || tabbableNodes.find(function (node) {
        return node === element;
      });
    });
  };

  /**
   * Gets the node for the given option, which is expected to be an option that
   *  can be either a DOM node, a string that is a selector to get a node, `false`
   *  (if a node is explicitly NOT given), or a function that returns any of these
   *  values.
   * @param {string} optionName
   * @returns {undefined | false | HTMLElement | SVGElement} Returns
   *  `undefined` if the option is not specified; `false` if the option
   *  resolved to `false` (node explicitly not given); otherwise, the resolved
   *  DOM node.
   * @throws {Error} If the option is set, not `false`, and is not, or does not
   *  resolve to a node.
   */
  var getNodeForOption = function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    if (typeof optionValue === 'function') {
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }
      optionValue = optionValue.apply(void 0, params);
    }
    if (optionValue === true) {
      optionValue = undefined; // use default value
    }

    if (!optionValue) {
      if (optionValue === undefined || optionValue === false) {
        return optionValue;
      }
      // else, empty string (invalid), null (invalid), 0 (invalid)

      throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
    }
    var node = optionValue; // could be HTMLElement, SVGElement, or non-empty string at this point

    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue); // resolve to node, or null if fails
      if (!node) {
        throw new Error("`".concat(optionName, "` as selector refers to no known node"));
      }
    }
    return node;
  };
  var getInitialFocusNode = function getInitialFocusNode() {
    var node = getNodeForOption('initialFocus');

    // false explicitly indicates we want no initialFocus at all
    if (node === false) {
      return false;
    }
    if (node === undefined || !(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.E)(node, config.tabbableOptions)) {
      // option not specified nor focusable: use fallback options
      if (findContainerIndex(doc.activeElement) >= 0) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;

        // NOTE: `fallbackFocus` option function cannot return `false` (not supported)
        node = firstTabbableNode || getNodeForOption('fallbackFocus');
      }
    }
    if (!node) {
      throw new Error('Your focus-trap needs to have at least one focusable element');
    }
    return node;
  };
  var updateTabbableNodes = function updateTabbableNodes() {
    state.containerGroups = state.containers.map(function (container) {
      var tabbableNodes = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.z)(container, config.tabbableOptions);

      // NOTE: if we have tabbable nodes, we must have focusable nodes; focusable nodes
      //  are a superset of tabbable nodes since nodes with negative `tabindex` attributes
      //  are focusable but not tabbable
      var focusableNodes = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.A)(container, config.tabbableOptions);
      var firstTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[0] : undefined;
      var lastTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : undefined;
      var firstDomTabbableNode = focusableNodes.find(function (node) {
        return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.B)(node);
      });
      var lastDomTabbableNode = focusableNodes.slice().reverse().find(function (node) {
        return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.B)(node);
      });
      var posTabIndexesFound = !!tabbableNodes.find(function (node) {
        return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.D)(node) > 0;
      });
      return {
        container: container,
        tabbableNodes: tabbableNodes,
        focusableNodes: focusableNodes,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: posTabIndexesFound,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: firstTabbableNode,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: lastTabbableNode,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: firstDomTabbableNode,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: lastDomTabbableNode,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function nextTabbableNode(node) {
          var forward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var nodeIdx = tabbableNodes.indexOf(node);
          if (nodeIdx < 0) {
            // either not tabbable nor focusable, or was focused but not tabbable (negative tabindex):
            //  since `node` should at least have been focusable, we assume that's the case and mimic
            //  what browsers do, which is set focus to the next node in __document position order__,
            //  regardless of positive tabindexes, if any -- and for reasons explained in the NOTE
            //  above related to `firstDomTabbable` and `lastDomTabbable` properties, we fall back to
            //  basic DOM order
            if (forward) {
              return focusableNodes.slice(focusableNodes.indexOf(node) + 1).find(function (el) {
                return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.B)(el);
              });
            }
            return focusableNodes.slice(0, focusableNodes.indexOf(node)).reverse().find(function (el) {
              return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.B)(el);
            });
          }
          return tabbableNodes[nodeIdx + (forward ? 1 : -1)];
        }
      };
    });
    state.tabbableGroups = state.containerGroups.filter(function (group) {
      return group.tabbableNodes.length > 0;
    });

    // throw if no groups have tabbable nodes and we don't have a fallback focus node either
    if (state.tabbableGroups.length <= 0 && !getNodeForOption('fallbackFocus') // returning false not supported for this option
    ) {
      throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
    }

    // NOTE: Positive tabindexes are only properly supported in single-container traps because
    //  doing it across multiple containers where tabindexes could be all over the place
    //  would require Tabbable to support multiple containers, would require additional
    //  specialized Shadow DOM support, and would require Tabbable's multi-container support
    //  to look at those containers in document position order rather than user-provided
    //  order (as they are treated in Focus-trap, for legacy reasons). See discussion on
    //  https://github.com/focus-trap/focus-trap/issues/375 for more details.
    if (state.containerGroups.find(function (g) {
      return g.posTabIndexesFound;
    }) && state.containerGroups.length > 1) {
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
    }
  };

  /**
   * Gets the current activeElement. If it's a web-component and has open shadow-root
   * it will recursively search inside shadow roots for the "true" activeElement.
   *
   * @param {Document | ShadowRoot} el
   *
   * @returns {HTMLElement} The element that currently has the focus
   **/
  var getActiveElement = function getActiveElement(el) {
    var activeElement = el.activeElement;
    if (!activeElement) {
      return;
    }
    if (activeElement.shadowRoot && activeElement.shadowRoot.activeElement !== null) {
      return getActiveElement(activeElement.shadowRoot);
    }
    return activeElement;
  };
  var tryFocus = function tryFocus(node) {
    if (node === false) {
      return;
    }
    if (node === getActiveElement(document)) {
      return;
    }
    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }
    node.focus({
      preventScroll: !!config.preventScroll
    });
    // NOTE: focus() API does not trigger focusIn event so set MRU node manually
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  };
  var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus', previousActiveElement);
    return node ? node : node === false ? false : previousActiveElement;
  };

  /**
   * Finds the next node (in either direction) where focus should move according to a
   *  keyboard focus-in event.
   * @param {Object} params
   * @param {Node} [params.target] Known target __from which__ to navigate, if any.
   * @param {KeyboardEvent|FocusEvent} [params.event] Event to use if `target` isn't known (event
   *  will be used to determine the `target`). Ignored if `target` is specified.
   * @param {boolean} [params.isBackward] True if focus should move backward.
   * @returns {Node|undefined} The next node, or `undefined` if a next node couldn't be
   *  determined given the current state of the trap.
   */
  var findNextNavNode = function findNextNavNode(_ref2) {
    var target = _ref2.target,
      event = _ref2.event,
      _ref2$isBackward = _ref2.isBackward,
      isBackward = _ref2$isBackward === void 0 ? false : _ref2$isBackward;
    target = target || getActualTarget(event);
    updateTabbableNodes();
    var destinationNode = null;
    if (state.tabbableGroups.length > 0) {
      // make sure the target is actually contained in a group
      // NOTE: the target may also be the container itself if it's focusable
      //  with tabIndex='-1' and was given initial focus
      var containerIndex = findContainerIndex(target, event);
      var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : undefined;
      if (containerIndex < 0) {
        // target not found in any group: quite possible focus has escaped the trap,
        //  so bring it back into...
        if (isBackward) {
          // ...the last node in the last group
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          // ...the first node in the first group
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (isBackward) {
        // REVERSE

        // is the target the first tabbable node in a group?
        var startOfGroupIndex = findIndex(state.tabbableGroups, function (_ref3) {
          var firstTabbableNode = _ref3.firstTabbableNode;
          return target === firstTabbableNode;
        });
        if (startOfGroupIndex < 0 && (containerGroup.container === target || (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.E)(target, config.tabbableOptions) && !(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.B)(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
          // an exception case where the target is either the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle shift+tab as if focus were on the container's
          //  first tabbable node, and go to the last tabbable node of the LAST group
          startOfGroupIndex = containerIndex;
        }
        if (startOfGroupIndex >= 0) {
          // YES: then shift+tab should go to the last tabbable node in the
          //  previous group (and wrap around to the last tabbable node of
          //  the LAST group if it's the first tabbable node of the FIRST group)
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.D)(target) >= 0 ? destinationGroup.lastTabbableNode : destinationGroup.lastDomTabbableNode;
        } else if (!isTabEvent(event)) {
          // user must have customized the nav keys so we have to move focus manually _within_
          //  the active group: do this based on the order determined by tabbable()
          destinationNode = containerGroup.nextTabbableNode(target, false);
        }
      } else {
        // FORWARD

        // is the target the last tabbable node in a group?
        var lastOfGroupIndex = findIndex(state.tabbableGroups, function (_ref4) {
          var lastTabbableNode = _ref4.lastTabbableNode;
          return target === lastTabbableNode;
        });
        if (lastOfGroupIndex < 0 && (containerGroup.container === target || (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.E)(target, config.tabbableOptions) && !(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.B)(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
          // an exception case where the target is the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle tab as if focus were on the container's
          //  last tabbable node, and go to the first tabbable node of the FIRST group
          lastOfGroupIndex = containerIndex;
        }
        if (lastOfGroupIndex >= 0) {
          // YES: then tab should go to the first tabbable node in the next
          //  group (and wrap around to the first tabbable node of the FIRST
          //  group if it's the last tabbable node of the LAST group)
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.D)(target) >= 0 ? _destinationGroup.firstTabbableNode : _destinationGroup.firstDomTabbableNode;
        } else if (!isTabEvent(event)) {
          // user must have customized the nav keys so we have to move focus manually _within_
          //  the active group: do this based on the order determined by tabbable()
          destinationNode = containerGroup.nextTabbableNode(target);
        }
      }
    } else {
      // no groups available
      // NOTE: the fallbackFocus option does not support returning false to opt-out
      destinationNode = getNodeForOption('fallbackFocus');
    }
    return destinationNode;
  };

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  var checkPointerDown = function checkPointerDown(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      // allow the click since it ocurred inside the trap
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      // immediately deactivate the trap
      trap.deactivate({
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked (and if not focusable, to "nothing"); by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node), whether the
        //  outside click was on a focusable node or not
        returnFocus: config.returnFocusOnDeactivate
      });
      return;
    }

    // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)
    if (valueOrHandler(config.allowOutsideClick, e)) {
      // allow the click outside the trap to take place
      return;
    }

    // otherwise, prevent the click
    e.preventDefault();
  };

  // In case focus escapes the trap for some strange reason, pull it back in.
  // NOTE: the focusIn event is NOT cancelable, so if focus escapes, it may cause unexpected
  //  scrolling if the node that got focused was out of view; there's nothing we can do to
  //  prevent that from happening by the time we discover that focus escaped
  var checkFocusIn = function checkFocusIn(event) {
    var target = getActualTarget(event);
    var targetContained = findContainerIndex(target, event) >= 0;

    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (targetContained || target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = target;
      }
    } else {
      // escaped! pull it back in to where it just left
      event.stopImmediatePropagation();

      // focus will escape if the MRU node had a positive tab index and user tried to nav forward;
      //  it will also escape if the MRU node had a 0 tab index and user tried to nav backward
      //  toward a node with a positive tab index
      var nextNode; // next node to focus, if we find one
      var navAcrossContainers = true;
      if (state.mostRecentlyFocusedNode) {
        if ((0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.D)(state.mostRecentlyFocusedNode) > 0) {
          // MRU container index must be >=0 otherwise we wouldn't have it as an MRU node...
          var mruContainerIdx = findContainerIndex(state.mostRecentlyFocusedNode);
          // there MAY not be any tabbable nodes in the container if there are at least 2 containers
          //  and the MRU node is focusable but not tabbable (focus-trap requires at least 1 container
          //  with at least one tabbable node in order to function, so this could be the other container
          //  with nothing tabbable in it)
          var tabbableNodes = state.containerGroups[mruContainerIdx].tabbableNodes;
          if (tabbableNodes.length > 0) {
            // MRU tab index MAY not be found if the MRU node is focusable but not tabbable
            var mruTabIdx = tabbableNodes.findIndex(function (node) {
              return node === state.mostRecentlyFocusedNode;
            });
            if (mruTabIdx >= 0) {
              if (config.isKeyForward(state.recentNavEvent)) {
                if (mruTabIdx + 1 < tabbableNodes.length) {
                  nextNode = tabbableNodes[mruTabIdx + 1];
                  navAcrossContainers = false;
                }
                // else, don't wrap within the container as focus should move to next/previous
                //  container
              } else {
                if (mruTabIdx - 1 >= 0) {
                  nextNode = tabbableNodes[mruTabIdx - 1];
                  navAcrossContainers = false;
                }
                // else, don't wrap within the container as focus should move to next/previous
                //  container
              }
              // else, don't find in container order without considering direction too
            }
          }
          // else, no tabbable nodes in that container (which means we must have at least one other
          //  container with at least one tabbable node in it, otherwise focus-trap would've thrown
          //  an error the last time updateTabbableNodes() was run): find next node among all known
          //  containers
        } else {
          // check to see if there's at least one tabbable node with a positive tab index inside
          //  the trap because focus seems to escape when navigating backward from a tabbable node
          //  with tabindex=0 when this is the case (instead of wrapping to the tabbable node with
          //  the greatest positive tab index like it should)
          if (!state.containerGroups.some(function (g) {
            return g.tabbableNodes.some(function (n) {
              return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.D)(n) > 0;
            });
          })) {
            // no containers with tabbable nodes with positive tab indexes which means the focus
            //  escaped for some other reason and we should just execute the fallback to the
            //  MRU node or initial focus node, if any
            navAcrossContainers = false;
          }
        }
      } else {
        // no MRU node means we're likely in some initial condition when the trap has just
        //  been activated and initial focus hasn't been given yet, in which case we should
        //  fall through to trying to focus the initial focus node, which is what should
        //  happen below at this point in the logic
        navAcrossContainers = false;
      }
      if (navAcrossContainers) {
        nextNode = findNextNavNode({
          // move FROM the MRU node, not event-related node (which will be the node that is
          //  outside the trap causing the focus escape we're trying to fix)
          target: state.mostRecentlyFocusedNode,
          isBackward: config.isKeyBackward(state.recentNavEvent)
        });
      }
      if (nextNode) {
        tryFocus(nextNode);
      } else {
        tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
      }
    }
    state.recentNavEvent = undefined; // clear
  };

  // Hijack key nav events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  var checkKeyNav = function checkKeyNav(event) {
    var isBackward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    state.recentNavEvent = event;
    var destinationNode = findNextNavNode({
      event: event,
      isBackward: isBackward
    });
    if (destinationNode) {
      if (isTabEvent(event)) {
        // since tab natively moves focus, we wouldn't have a destination node unless we
        //  were on the edge of a container and had to move to the next/previous edge, in
        //  which case we want to prevent default to keep the browser from moving focus
        //  to where it normally would
        event.preventDefault();
      }
      tryFocus(destinationNode);
    }
    // else, let the browser take care of [shift+]tab and move the focus
  };

  var checkKey = function checkKey(event) {
    if (isEscapeEvent(event) && valueOrHandler(config.escapeDeactivates, event) !== false) {
      event.preventDefault();
      trap.deactivate();
      return;
    }
    if (config.isKeyForward(event) || config.isKeyBackward(event)) {
      checkKeyNav(event, config.isKeyBackward(event));
    }
  };
  var checkClick = function checkClick(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
  };

  //
  // EVENT LISTENERS
  //

  var addListeners = function addListeners() {
    if (!state.active) {
      return;
    }

    // There can be only one listening focus trap at a time
    activeFocusTraps.activateTrap(trapStack, trap);

    // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.
    state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function () {
      tryFocus(getInitialFocusNode());
    }) : tryFocus(getInitialFocusNode());
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  };
  var removeListeners = function removeListeners() {
    if (!state.active) {
      return;
    }
    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);
    return trap;
  };

  //
  // MUTATION OBSERVER
  //

  var checkDomRemoval = function checkDomRemoval(mutations) {
    var isFocusedNodeRemoved = mutations.some(function (mutation) {
      var removedNodes = Array.from(mutation.removedNodes);
      return removedNodes.some(function (node) {
        return node === state.mostRecentlyFocusedNode;
      });
    });

    // If the currently focused is removed then browsers will move focus to the
    // <body> element. If this happens, try to move focus back into the trap.
    if (isFocusedNodeRemoved) {
      tryFocus(getInitialFocusNode());
    }
  };

  // Use MutationObserver - if supported - to detect if focused node is removed
  // from the DOM.
  var mutationObserver = typeof window !== 'undefined' && 'MutationObserver' in window ? new MutationObserver(checkDomRemoval) : undefined;
  var updateObservedNodes = function updateObservedNodes() {
    if (!mutationObserver) {
      return;
    }
    mutationObserver.disconnect();
    if (state.active && !state.paused) {
      state.containers.map(function (container) {
        mutationObserver.observe(container, {
          subtree: true,
          childList: true
        });
      });
    }
  };

  //
  // TRAP DEFINITION
  //

  trap = {
    get active() {
      return state.active;
    },
    get paused() {
      return state.paused;
    },
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }
      var onActivate = getOption(activateOptions, 'onActivate');
      var onPostActivate = getOption(activateOptions, 'onPostActivate');
      var checkCanFocusTrap = getOption(activateOptions, 'checkCanFocusTrap');
      if (!checkCanFocusTrap) {
        updateTabbableNodes();
      }
      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;
      onActivate === null || onActivate === void 0 || onActivate();
      var finishActivation = function finishActivation() {
        if (checkCanFocusTrap) {
          updateTabbableNodes();
        }
        addListeners();
        updateObservedNodes();
        onPostActivate === null || onPostActivate === void 0 || onPostActivate();
      };
      if (checkCanFocusTrap) {
        checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
        return this;
      }
      finishActivation();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }
      var options = _objectSpread2({
        onDeactivate: config.onDeactivate,
        onPostDeactivate: config.onPostDeactivate,
        checkCanReturnFocus: config.checkCanReturnFocus
      }, deactivateOptions);
      clearTimeout(state.delayInitialFocusTimer); // noop if undefined
      state.delayInitialFocusTimer = undefined;
      removeListeners();
      state.active = false;
      state.paused = false;
      updateObservedNodes();
      activeFocusTraps.deactivateTrap(trapStack, trap);
      var onDeactivate = getOption(options, 'onDeactivate');
      var onPostDeactivate = getOption(options, 'onPostDeactivate');
      var checkCanReturnFocus = getOption(options, 'checkCanReturnFocus');
      var returnFocus = getOption(options, 'returnFocus', 'returnFocusOnDeactivate');
      onDeactivate === null || onDeactivate === void 0 || onDeactivate();
      var finishDeactivation = function finishDeactivation() {
        delay(function () {
          if (returnFocus) {
            tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
          }
          onPostDeactivate === null || onPostDeactivate === void 0 || onPostDeactivate();
        });
      };
      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }
      finishDeactivation();
      return this;
    },
    pause: function pause(pauseOptions) {
      if (state.paused || !state.active) {
        return this;
      }
      var onPause = getOption(pauseOptions, 'onPause');
      var onPostPause = getOption(pauseOptions, 'onPostPause');
      state.paused = true;
      onPause === null || onPause === void 0 || onPause();
      removeListeners();
      updateObservedNodes();
      onPostPause === null || onPostPause === void 0 || onPostPause();
      return this;
    },
    unpause: function unpause(unpauseOptions) {
      if (!state.paused || !state.active) {
        return this;
      }
      var onUnpause = getOption(unpauseOptions, 'onUnpause');
      var onPostUnpause = getOption(unpauseOptions, 'onPostUnpause');
      state.paused = false;
      onUnpause === null || onUnpause === void 0 || onUnpause();
      updateTabbableNodes();
      addListeners();
      updateObservedNodes();
      onPostUnpause === null || onPostUnpause === void 0 || onPostUnpause();
      return this;
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function (element) {
        return typeof element === 'string' ? doc.querySelector(element) : element;
      });
      if (state.active) {
        updateTabbableNodes();
      }
      updateObservedNodes();
      return this;
    }
  };

  // initialize container elements
  trap.updateContainerElements(elements);
  return trap;
};

/**
 * This module allows custom configuration for components.
 */
const customConfig = globalThis["calciteConfig"];
const focusTrapStack = customConfig?.focusTrapStack || [];

/**
 * Helper to set up the FocusTrap component.
 *
 * @param {FocusTrapComponent} component The FocusTrap component.
 * @param options
 */
function connectFocusTrap(component, options) {
  const { el } = component;
  const focusTrapNode = options?.focusTrapEl || el;
  if (!focusTrapNode) {
    return;
  }
  const focusTrapOptions = {
    clickOutsideDeactivates: true,
    escapeDeactivates: false,
    fallbackFocus: focusTrapNode,
    setReturnFocus: (el) => {
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.k)(el);
      return false;
    },
    ...options?.focusTrapOptions,
    // the following options are not overridable
    document: el.ownerDocument,
    tabbableOptions: _dom_js__WEBPACK_IMPORTED_MODULE_0__.F,
    trapStack: focusTrapStack,
  };
  component.focusTrap = createFocusTrap(focusTrapNode, focusTrapOptions);
}
/**
 * Helper to activate the FocusTrap component.
 *
 * @param {FocusTrapComponent} component The FocusTrap component.
 * @param [options] The FocusTrap activate options.
 */
function activateFocusTrap(component, options) {
  if (!component.focusTrapDisabled) {
    component.focusTrap?.activate(options);
  }
}
/**
 * Helper to deactivate the FocusTrap component.
 *
 * @param {FocusTrapComponent} component The FocusTrap component.
 * @param [options] The FocusTrap deactivate options.
 */
function deactivateFocusTrap(component, options) {
  component.focusTrap?.deactivate(options);
}
/**
 * Helper to update the element(s) that are used within the FocusTrap component.
 *
 * @param {FocusTrapComponent} component The FocusTrap component.
 * @example
 * const modal = document.querySelector("calcite-modal");
 * const input = document.createElement("calcite-input");
 * content.appendChild(input);
 * await input.componentOnReady();
 * await modal.updateFocusTrapElements();
 * requestAnimationFrame(() => input.setFocus());
 */
function updateFocusTrapElements(component) {
  component.focusTrap?.updateContainerElements(component.el);
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvN2EyOWNiODlkZjg3YWFlNDJhNWU5NWYzYzYxODhlMjcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VKOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBLGlCQUFpQjtBQUNqQixHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0EsMkZBQTJGLGFBQWE7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQjtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWUsOENBQThDO0FBQzdELGtEQUFrRDtBQUNsRCx1REFBdUQ7QUFDdkQ7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRyxlQUFlO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBDQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMENBQVE7O0FBRWxDLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0EsMkJBQTJCLDBDQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMENBQVU7QUFDekIsT0FBTztBQUNQO0FBQ0EsZUFBZSwwQ0FBVTtBQUN6QixPQUFPO0FBQ1A7QUFDQSxlQUFlLDBDQUFXO0FBQzFCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQSxpRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixhQUFhO0FBQ2hDLG1CQUFtQixTQUFTLDhDQUE4QztBQUMxRTtBQUNBLHFCQUFxQix1QkFBdUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMENBQVU7QUFDakMsZUFBZTtBQUNmO0FBQ0E7QUFDQSxxQkFBcUIsMENBQVU7QUFDL0IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0EsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxNQUFNO0FBQ25CLGFBQWEsMEJBQTBCO0FBQ3ZDO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGVBQWUsZ0JBQWdCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw2RUFBNkUsMENBQVcscUNBQXFDLDBDQUFVO0FBQ3ZJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMENBQVc7QUFDdkMsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDRFQUE0RSwwQ0FBVyxxQ0FBcUMsMENBQVU7QUFDdEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBVztBQUN2QyxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxZQUFZLDBDQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBVztBQUNoQyxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBSztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMENBQVk7QUFDbEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxvQkFBb0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxvQkFBb0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvZm9jdXNUcmFwQ29tcG9uZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHogYXMgdGFiYmFibGUsIEEgYXMgZm9jdXNhYmxlLCBCIGFzIGlzVGFiYmFibGUsIEQgYXMgZ2V0VGFiSW5kZXgsIEUgYXMgaXNGb2N1c2FibGUsIGsgYXMgZm9jdXNFbGVtZW50LCBGIGFzIHRhYmJhYmxlT3B0aW9ucyB9IGZyb20gJy4vZG9tLmpzJztcblxuLyohXG4qIGZvY3VzLXRyYXAgNy41LjRcbiogQGxpY2Vuc2UgTUlULCBodHRwczovL2dpdGh1Yi5jb20vZm9jdXMtdHJhcC9mb2N1cy10cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG5cbmZ1bmN0aW9uIG93bktleXMoZSwgcikge1xuICB2YXIgdCA9IE9iamVjdC5rZXlzKGUpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtcbiAgICByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7XG4gICAgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7XG4gIH1cbiAgcmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMihlKSB7XG4gIGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7XG4gICAgdmFyIHQgPSBudWxsICE9IGFyZ3VtZW50c1tyXSA/IGFyZ3VtZW50c1tyXSA6IHt9O1xuICAgIHIgJSAyID8gb3duS2V5cyhPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICBfZGVmaW5lUHJvcGVydHkoZSwgciwgdFtyXSk7XG4gICAgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHQpKSA6IG93bktleXMoT2JqZWN0KHQpKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCByKSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGU7XG59XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAodHlwZW9mIHJlcyAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gdHlwZW9mIGtleSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufVxuXG52YXIgYWN0aXZlRm9jdXNUcmFwcyA9IHtcbiAgYWN0aXZhdGVUcmFwOiBmdW5jdGlvbiBhY3RpdmF0ZVRyYXAodHJhcFN0YWNrLCB0cmFwKSB7XG4gICAgaWYgKHRyYXBTdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgYWN0aXZlVHJhcCA9IHRyYXBTdGFja1t0cmFwU3RhY2subGVuZ3RoIC0gMV07XG4gICAgICBpZiAoYWN0aXZlVHJhcCAhPT0gdHJhcCkge1xuICAgICAgICBhY3RpdmVUcmFwLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciB0cmFwSW5kZXggPSB0cmFwU3RhY2suaW5kZXhPZih0cmFwKTtcbiAgICBpZiAodHJhcEluZGV4ID09PSAtMSkge1xuICAgICAgdHJhcFN0YWNrLnB1c2godHJhcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG1vdmUgdGhpcyBleGlzdGluZyB0cmFwIHRvIHRoZSBmcm9udCBvZiB0aGUgcXVldWVcbiAgICAgIHRyYXBTdGFjay5zcGxpY2UodHJhcEluZGV4LCAxKTtcbiAgICAgIHRyYXBTdGFjay5wdXNoKHRyYXApO1xuICAgIH1cbiAgfSxcbiAgZGVhY3RpdmF0ZVRyYXA6IGZ1bmN0aW9uIGRlYWN0aXZhdGVUcmFwKHRyYXBTdGFjaywgdHJhcCkge1xuICAgIHZhciB0cmFwSW5kZXggPSB0cmFwU3RhY2suaW5kZXhPZih0cmFwKTtcbiAgICBpZiAodHJhcEluZGV4ICE9PSAtMSkge1xuICAgICAgdHJhcFN0YWNrLnNwbGljZSh0cmFwSW5kZXgsIDEpO1xuICAgIH1cbiAgICBpZiAodHJhcFN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIHRyYXBTdGFja1t0cmFwU3RhY2subGVuZ3RoIC0gMV0udW5wYXVzZSgpO1xuICAgIH1cbiAgfVxufTtcbnZhciBpc1NlbGVjdGFibGVJbnB1dCA9IGZ1bmN0aW9uIGlzU2VsZWN0YWJsZUlucHV0KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudGFnTmFtZSAmJiBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0JyAmJiB0eXBlb2Ygbm9kZS5zZWxlY3QgPT09ICdmdW5jdGlvbic7XG59O1xudmFyIGlzRXNjYXBlRXZlbnQgPSBmdW5jdGlvbiBpc0VzY2FwZUV2ZW50KGUpIHtcbiAgcmV0dXJuIChlID09PSBudWxsIHx8IGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGUua2V5KSA9PT0gJ0VzY2FwZScgfHwgKGUgPT09IG51bGwgfHwgZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZS5rZXkpID09PSAnRXNjJyB8fCAoZSA9PT0gbnVsbCB8fCBlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlLmtleUNvZGUpID09PSAyNztcbn07XG52YXIgaXNUYWJFdmVudCA9IGZ1bmN0aW9uIGlzVGFiRXZlbnQoZSkge1xuICByZXR1cm4gKGUgPT09IG51bGwgfHwgZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZS5rZXkpID09PSAnVGFiJyB8fCAoZSA9PT0gbnVsbCB8fCBlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlLmtleUNvZGUpID09PSA5O1xufTtcblxuLy8gY2hlY2tzIGZvciBUQUIgYnkgZGVmYXVsdFxudmFyIGlzS2V5Rm9yd2FyZCA9IGZ1bmN0aW9uIGlzS2V5Rm9yd2FyZChlKSB7XG4gIHJldHVybiBpc1RhYkV2ZW50KGUpICYmICFlLnNoaWZ0S2V5O1xufTtcblxuLy8gY2hlY2tzIGZvciBTSElGVCtUQUIgYnkgZGVmYXVsdFxudmFyIGlzS2V5QmFja3dhcmQgPSBmdW5jdGlvbiBpc0tleUJhY2t3YXJkKGUpIHtcbiAgcmV0dXJuIGlzVGFiRXZlbnQoZSkgJiYgZS5zaGlmdEtleTtcbn07XG52YXIgZGVsYXkgPSBmdW5jdGlvbiBkZWxheShmbikge1xuICByZXR1cm4gc2V0VGltZW91dChmbiwgMCk7XG59O1xuXG4vLyBBcnJheS5maW5kL2ZpbmRJbmRleCgpIGFyZSBub3Qgc3VwcG9ydGVkIG9uIElFOyB0aGlzIHJlcGxpY2F0ZXMgZW5vdWdoXG4vLyAgb2YgQXJyYXkuZmluZEluZGV4KCkgZm9yIG91ciBuZWVkc1xudmFyIGZpbmRJbmRleCA9IGZ1bmN0aW9uIGZpbmRJbmRleChhcnIsIGZuKSB7XG4gIHZhciBpZHggPSAtMTtcbiAgYXJyLmV2ZXJ5KGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgIGlmIChmbih2YWx1ZSkpIHtcbiAgICAgIGlkeCA9IGk7XG4gICAgICByZXR1cm4gZmFsc2U7IC8vIGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7IC8vIG5leHRcbiAgfSk7XG5cbiAgcmV0dXJuIGlkeDtcbn07XG5cbi8qKlxuICogR2V0IGFuIG9wdGlvbidzIHZhbHVlIHdoZW4gaXQgY291bGQgYmUgYSBwbGFpbiB2YWx1ZSwgb3IgYSBoYW5kbGVyIHRoYXQgcHJvdmlkZXNcbiAqICB0aGUgdmFsdWUuXG4gKiBAcGFyYW0geyp9IHZhbHVlIE9wdGlvbidzIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHsuLi4qfSBbcGFyYW1zXSBBbnkgcGFyYW1ldGVycyB0byBwYXNzIHRvIHRoZSBoYW5kbGVyLCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7Kn0gVGhlIGB2YWx1ZWAsIG9yIHRoZSBoYW5kbGVyJ3MgcmV0dXJuZWQgdmFsdWUuXG4gKi9cbnZhciB2YWx1ZU9ySGFuZGxlciA9IGZ1bmN0aW9uIHZhbHVlT3JIYW5kbGVyKHZhbHVlKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHBhcmFtc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLmFwcGx5KHZvaWQgMCwgcGFyYW1zKSA6IHZhbHVlO1xufTtcbnZhciBnZXRBY3R1YWxUYXJnZXQgPSBmdW5jdGlvbiBnZXRBY3R1YWxUYXJnZXQoZXZlbnQpIHtcbiAgLy8gTk9URTogSWYgdGhlIHRyYXAgaXMgX2luc2lkZV8gYSBzaGFkb3cgRE9NLCBldmVudC50YXJnZXQgd2lsbCBhbHdheXMgYmUgdGhlXG4gIC8vICBzaGFkb3cgaG9zdC4gSG93ZXZlciwgZXZlbnQudGFyZ2V0LmNvbXBvc2VkUGF0aCgpIHdpbGwgYmUgYW4gYXJyYXkgb2ZcbiAgLy8gIG5vZGVzIFwiY2xpY2tlZFwiIGZyb20gaW5uZXItbW9zdCAodGhlIGFjdHVhbCBlbGVtZW50IGluc2lkZSB0aGUgc2hhZG93KSB0b1xuICAvLyAgb3V0ZXItbW9zdCAodGhlIGhvc3QgSFRNTCBkb2N1bWVudCkuIElmIHdlIGhhdmUgYWNjZXNzIHRvIGNvbXBvc2VkUGF0aCgpLFxuICAvLyAgdGhlbiB1c2UgaXRzIGZpcnN0IGVsZW1lbnQ7IG90aGVyd2lzZSwgZmFsbCBiYWNrIHRvIGV2ZW50LnRhcmdldCAoYW5kXG4gIC8vICB0aGlzIG9ubHkgd29ya3MgZm9yIGFuIF9vcGVuXyBzaGFkb3cgRE9NOyBvdGhlcndpc2UsXG4gIC8vICBjb21wb3NlZFBhdGgoKVswXSA9PT0gZXZlbnQudGFyZ2V0IGFsd2F5cykuXG4gIHJldHVybiBldmVudC50YXJnZXQuc2hhZG93Um9vdCAmJiB0eXBlb2YgZXZlbnQuY29tcG9zZWRQYXRoID09PSAnZnVuY3Rpb24nID8gZXZlbnQuY29tcG9zZWRQYXRoKClbMF0gOiBldmVudC50YXJnZXQ7XG59O1xuXG4vLyBOT1RFOiB0aGlzIG11c3QgYmUgX291dHNpZGVfIGBjcmVhdGVGb2N1c1RyYXAoKWAgdG8gbWFrZSBzdXJlIGFsbCB0cmFwcyBpbiB0aGlzXG4vLyAgY3VycmVudCBpbnN0YW5jZSB1c2UgdGhlIHNhbWUgc3RhY2sgaWYgYHVzZXJPcHRpb25zLnRyYXBTdGFja2AgaXNuJ3Qgc3BlY2lmaWVkXG52YXIgaW50ZXJuYWxUcmFwU3RhY2sgPSBbXTtcbnZhciBjcmVhdGVGb2N1c1RyYXAgPSBmdW5jdGlvbiBjcmVhdGVGb2N1c1RyYXAoZWxlbWVudHMsIHVzZXJPcHRpb25zKSB7XG4gIC8vIFNTUjogYSBsaXZlIHRyYXAgc2hvdWxkbid0IGJlIGNyZWF0ZWQgaW4gdGhpcyB0eXBlIG9mIGVudmlyb25tZW50IHNvIHRoaXNcbiAgLy8gIHNob3VsZCBiZSBzYWZlIGNvZGUgdG8gZXhlY3V0ZSBpZiB0aGUgYGRvY3VtZW50YCBvcHRpb24gaXNuJ3Qgc3BlY2lmaWVkXG4gIHZhciBkb2MgPSAodXNlck9wdGlvbnMgPT09IG51bGwgfHwgdXNlck9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHVzZXJPcHRpb25zLmRvY3VtZW50KSB8fCBkb2N1bWVudDtcbiAgdmFyIHRyYXBTdGFjayA9ICh1c2VyT3B0aW9ucyA9PT0gbnVsbCB8fCB1c2VyT3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdXNlck9wdGlvbnMudHJhcFN0YWNrKSB8fCBpbnRlcm5hbFRyYXBTdGFjaztcbiAgdmFyIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQyKHtcbiAgICByZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTogdHJ1ZSxcbiAgICBlc2NhcGVEZWFjdGl2YXRlczogdHJ1ZSxcbiAgICBkZWxheUluaXRpYWxGb2N1czogdHJ1ZSxcbiAgICBpc0tleUZvcndhcmQ6IGlzS2V5Rm9yd2FyZCxcbiAgICBpc0tleUJhY2t3YXJkOiBpc0tleUJhY2t3YXJkXG4gIH0sIHVzZXJPcHRpb25zKTtcbiAgdmFyIHN0YXRlID0ge1xuICAgIC8vIGNvbnRhaW5lcnMgZ2l2ZW4gdG8gY3JlYXRlRm9jdXNUcmFwKClcbiAgICAvLyBAdHlwZSB7QXJyYXk8SFRNTEVsZW1lbnQ+fVxuICAgIGNvbnRhaW5lcnM6IFtdLFxuICAgIC8vIGxpc3Qgb2Ygb2JqZWN0cyBpZGVudGlmeWluZyB0YWJiYWJsZSBub2RlcyBpbiBgY29udGFpbmVyc2AgaW4gdGhlIHRyYXBcbiAgICAvLyBOT1RFOiBpdCdzIHBvc3NpYmxlIHRoYXQgYSBncm91cCBoYXMgbm8gdGFiYmFibGUgbm9kZXMgaWYgbm9kZXMgZ2V0IHJlbW92ZWQgd2hpbGUgdGhlIHRyYXBcbiAgICAvLyAgaXMgYWN0aXZlLCBidXQgdGhlIHRyYXAgc2hvdWxkIG5ldmVyIGdldCB0byBhIHN0YXRlIHdoZXJlIHRoZXJlIGlzbid0IGF0IGxlYXN0IG9uZSBncm91cFxuICAgIC8vICB3aXRoIGF0IGxlYXN0IG9uZSB0YWJiYWJsZSBub2RlIGluIGl0ICh0aGF0IHdvdWxkIGxlYWQgdG8gYW4gZXJyb3IgY29uZGl0aW9uIHRoYXQgd291bGRcbiAgICAvLyAgcmVzdWx0IGluIGFuIGVycm9yIGJlaW5nIHRocm93bilcbiAgICAvLyBAdHlwZSB7QXJyYXk8e1xuICAgIC8vICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICAvLyAgIHRhYmJhYmxlTm9kZXM6IEFycmF5PEhUTUxFbGVtZW50PiwgLy8gZW1wdHkgaWYgbm9uZVxuICAgIC8vICAgZm9jdXNhYmxlTm9kZXM6IEFycmF5PEhUTUxFbGVtZW50PiwgLy8gZW1wdHkgaWYgbm9uZVxuICAgIC8vICAgcG9zVGFiSW5kZXhlc0ZvdW5kOiBib29sZWFuLFxuICAgIC8vICAgZmlyc3RUYWJiYWJsZU5vZGU6IEhUTUxFbGVtZW50fHVuZGVmaW5lZCxcbiAgICAvLyAgIGxhc3RUYWJiYWJsZU5vZGU6IEhUTUxFbGVtZW50fHVuZGVmaW5lZCxcbiAgICAvLyAgIGZpcnN0RG9tVGFiYmFibGVOb2RlOiBIVE1MRWxlbWVudHx1bmRlZmluZWQsXG4gICAgLy8gICBsYXN0RG9tVGFiYmFibGVOb2RlOiBIVE1MRWxlbWVudHx1bmRlZmluZWQsXG4gICAgLy8gICBuZXh0VGFiYmFibGVOb2RlOiAobm9kZTogSFRNTEVsZW1lbnQsIGZvcndhcmQ6IGJvb2xlYW4pID0+IEhUTUxFbGVtZW50fHVuZGVmaW5lZFxuICAgIC8vIH0+fVxuICAgIGNvbnRhaW5lckdyb3VwczogW10sXG4gICAgLy8gc2FtZSBvcmRlci9sZW5ndGggYXMgYGNvbnRhaW5lcnNgIGxpc3RcblxuICAgIC8vIHJlZmVyZW5jZXMgdG8gb2JqZWN0cyBpbiBgY29udGFpbmVyR3JvdXBzYCwgYnV0IG9ubHkgdGhvc2UgdGhhdCBhY3R1YWxseSBoYXZlXG4gICAgLy8gIHRhYmJhYmxlIG5vZGVzIGluIHRoZW1cbiAgICAvLyBOT1RFOiBzYW1lIG9yZGVyIGFzIGBjb250YWluZXJzYCBhbmQgYGNvbnRhaW5lckdyb3Vwc2AsIGJ1dCBfX25vdCBuZWNlc3NhcmlseV9fXG4gICAgLy8gIHRoZSBzYW1lIGxlbmd0aFxuICAgIHRhYmJhYmxlR3JvdXBzOiBbXSxcbiAgICBub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb246IG51bGwsXG4gICAgbW9zdFJlY2VudGx5Rm9jdXNlZE5vZGU6IG51bGwsXG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBwYXVzZWQ6IGZhbHNlLFxuICAgIC8vIHRpbWVyIElEIGZvciB3aGVuIGRlbGF5SW5pdGlhbEZvY3VzIGlzIHRydWUgYW5kIGluaXRpYWwgZm9jdXMgaW4gdGhpcyB0cmFwXG4gICAgLy8gIGhhcyBiZWVuIGRlbGF5ZWQgZHVyaW5nIGFjdGl2YXRpb25cbiAgICBkZWxheUluaXRpYWxGb2N1c1RpbWVyOiB1bmRlZmluZWQsXG4gICAgLy8gdGhlIG1vc3QgcmVjZW50IEtleWJvYXJkRXZlbnQgZm9yIHRoZSBjb25maWd1cmVkIG5hdiBrZXkgKHR5cGljYWxseSBbU0hJRlQrXVRBQiksIGlmIGFueVxuICAgIHJlY2VudE5hdkV2ZW50OiB1bmRlZmluZWRcbiAgfTtcbiAgdmFyIHRyYXA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLWNvbnN0IC0tIHNvbWUgcHJpdmF0ZSBmdW5jdGlvbnMgcmVmZXJlbmNlIGl0LCBhbmQgaXRzIG1ldGhvZHMgcmVmZXJlbmNlIHByaXZhdGUgZnVuY3Rpb25zLCBzbyB3ZSBtdXN0IGRlY2xhcmUgaGVyZSBhbmQgZGVmaW5lIGxhdGVyXG5cbiAgLyoqXG4gICAqIEdldHMgYSBjb25maWd1cmF0aW9uIG9wdGlvbiB2YWx1ZS5cbiAgICogQHBhcmFtIHtPYmplY3R8dW5kZWZpbmVkfSBjb25maWdPdmVycmlkZU9wdGlvbnMgSWYgdHJ1ZSwgYW5kIG9wdGlvbiBpcyBkZWZpbmVkIGluIHRoaXMgc2V0LFxuICAgKiAgdmFsdWUgd2lsbCBiZSB0YWtlbiBmcm9tIHRoaXMgb2JqZWN0LiBPdGhlcndpc2UsIHZhbHVlIHdpbGwgYmUgdGFrZW4gZnJvbSBiYXNlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25OYW1lIE5hbWUgb2YgdGhlIG9wdGlvbiB3aG9zZSB2YWx1ZSBpcyBzb3VnaHQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gW2NvbmZpZ09wdGlvbk5hbWVdIE5hbWUgb2Ygb3B0aW9uIHRvIHVzZSBfX2luc3RlYWQgb2ZfXyBgb3B0aW9uTmFtZWBcbiAgICogIElJRiBgY29uZmlnT3ZlcnJpZGVPcHRpb25zYCBpcyBub3QgZGVmaW5lZC4gT3RoZXJ3aXNlLCBgb3B0aW9uTmFtZWAgaXMgdXNlZC5cbiAgICovXG4gIHZhciBnZXRPcHRpb24gPSBmdW5jdGlvbiBnZXRPcHRpb24oY29uZmlnT3ZlcnJpZGVPcHRpb25zLCBvcHRpb25OYW1lLCBjb25maWdPcHRpb25OYW1lKSB7XG4gICAgcmV0dXJuIGNvbmZpZ092ZXJyaWRlT3B0aW9ucyAmJiBjb25maWdPdmVycmlkZU9wdGlvbnNbb3B0aW9uTmFtZV0gIT09IHVuZGVmaW5lZCA/IGNvbmZpZ092ZXJyaWRlT3B0aW9uc1tvcHRpb25OYW1lXSA6IGNvbmZpZ1tjb25maWdPcHRpb25OYW1lIHx8IG9wdGlvbk5hbWVdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaW5kcyB0aGUgaW5kZXggb2YgdGhlIGNvbnRhaW5lciB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7RXZlbnR9IFtldmVudF0gSWYgYXZhaWxhYmxlLCBhbmQgYGVsZW1lbnRgIGlzbid0IGRpcmVjdGx5IGZvdW5kIGluIGFueSBjb250YWluZXIsXG4gICAqICB0aGUgZXZlbnQncyBjb21wb3NlZCBwYXRoIGlzIHVzZWQgdG8gc2VlIGlmIGluY2x1ZGVzIGFueSBrbm93biB0cmFwIGNvbnRhaW5lcnMgaW4gdGhlXG4gICAqICBjYXNlIHdoZXJlIHRoZSBlbGVtZW50IGlzIGluc2lkZSBhIFNoYWRvdyBET00uXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IEluZGV4IG9mIHRoZSBjb250YWluZXIgaW4gZWl0aGVyIGBzdGF0ZS5jb250YWluZXJzYCBvclxuICAgKiAgYHN0YXRlLmNvbnRhaW5lckdyb3Vwc2AgKHRoZSBvcmRlci9sZW5ndGggb2YgdGhlc2UgbGlzdHMgYXJlIHRoZSBzYW1lKTsgLTFcbiAgICogIGlmIHRoZSBlbGVtZW50IGlzbid0IGZvdW5kLlxuICAgKi9cbiAgdmFyIGZpbmRDb250YWluZXJJbmRleCA9IGZ1bmN0aW9uIGZpbmRDb250YWluZXJJbmRleChlbGVtZW50LCBldmVudCkge1xuICAgIHZhciBjb21wb3NlZFBhdGggPSB0eXBlb2YgKGV2ZW50ID09PSBudWxsIHx8IGV2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudC5jb21wb3NlZFBhdGgpID09PSAnZnVuY3Rpb24nID8gZXZlbnQuY29tcG9zZWRQYXRoKCkgOiB1bmRlZmluZWQ7XG4gICAgLy8gTk9URTogc2VhcmNoIGBjb250YWluZXJHcm91cHNgIGJlY2F1c2UgaXQncyBwb3NzaWJsZSBhIGdyb3VwIGNvbnRhaW5zIG5vIHRhYmJhYmxlXG4gICAgLy8gIG5vZGVzLCBidXQgc3RpbGwgY29udGFpbnMgZm9jdXNhYmxlIG5vZGVzIChlLmcuIGlmIHRoZXkgYWxsIGhhdmUgYHRhYmluZGV4PS0xYClcbiAgICAvLyAgYW5kIHdlIHN0aWxsIG5lZWQgdG8gZmluZCB0aGUgZWxlbWVudCBpbiB0aGVyZVxuICAgIHJldHVybiBzdGF0ZS5jb250YWluZXJHcm91cHMuZmluZEluZGV4KGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgY29udGFpbmVyID0gX3JlZi5jb250YWluZXIsXG4gICAgICAgIHRhYmJhYmxlTm9kZXMgPSBfcmVmLnRhYmJhYmxlTm9kZXM7XG4gICAgICByZXR1cm4gY29udGFpbmVyLmNvbnRhaW5zKGVsZW1lbnQpIHx8ICggLy8gZmFsbCBiYWNrIHRvIGV4cGxpY2l0IHRhYmJhYmxlIHNlYXJjaCB3aGljaCB3aWxsIHRha2UgaW50byBjb25zaWRlcmF0aW9uIGFueVxuICAgICAgLy8gIHdlYiBjb21wb25lbnRzIGlmIHRoZSBgdGFiYmFibGVPcHRpb25zLmdldFNoYWRvd1Jvb3RgIG9wdGlvbiB3YXMgdXNlZCBmb3JcbiAgICAgIC8vICB0aGUgdHJhcCwgZW5hYmxpbmcgc2hhZG93IERPTSBzdXBwb3J0IGluIHRhYmJhYmxlIChgTm9kZS5jb250YWlucygpYCBkb2Vzbid0XG4gICAgICAvLyAgbG9vayBpbnNpZGUgd2ViIGNvbXBvbmVudHMgZXZlbiBpZiBvcGVuKVxuICAgICAgY29tcG9zZWRQYXRoID09PSBudWxsIHx8IGNvbXBvc2VkUGF0aCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRhaW5lcikpIHx8IHRhYmJhYmxlTm9kZXMuZmluZChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gbm9kZSA9PT0gZWxlbWVudDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBub2RlIGZvciB0aGUgZ2l2ZW4gb3B0aW9uLCB3aGljaCBpcyBleHBlY3RlZCB0byBiZSBhbiBvcHRpb24gdGhhdFxuICAgKiAgY2FuIGJlIGVpdGhlciBhIERPTSBub2RlLCBhIHN0cmluZyB0aGF0IGlzIGEgc2VsZWN0b3IgdG8gZ2V0IGEgbm9kZSwgYGZhbHNlYFxuICAgKiAgKGlmIGEgbm9kZSBpcyBleHBsaWNpdGx5IE5PVCBnaXZlbiksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFueSBvZiB0aGVzZVxuICAgKiAgdmFsdWVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uTmFtZVxuICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkIHwgZmFsc2UgfCBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnR9IFJldHVybnNcbiAgICogIGB1bmRlZmluZWRgIGlmIHRoZSBvcHRpb24gaXMgbm90IHNwZWNpZmllZDsgYGZhbHNlYCBpZiB0aGUgb3B0aW9uXG4gICAqICByZXNvbHZlZCB0byBgZmFsc2VgIChub2RlIGV4cGxpY2l0bHkgbm90IGdpdmVuKTsgb3RoZXJ3aXNlLCB0aGUgcmVzb2x2ZWRcbiAgICogIERPTSBub2RlLlxuICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIG9wdGlvbiBpcyBzZXQsIG5vdCBgZmFsc2VgLCBhbmQgaXMgbm90LCBvciBkb2VzIG5vdFxuICAgKiAgcmVzb2x2ZSB0byBhIG5vZGUuXG4gICAqL1xuICB2YXIgZ2V0Tm9kZUZvck9wdGlvbiA9IGZ1bmN0aW9uIGdldE5vZGVGb3JPcHRpb24ob3B0aW9uTmFtZSkge1xuICAgIHZhciBvcHRpb25WYWx1ZSA9IGNvbmZpZ1tvcHRpb25OYW1lXTtcbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIHBhcmFtc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cbiAgICAgIG9wdGlvblZhbHVlID0gb3B0aW9uVmFsdWUuYXBwbHkodm9pZCAwLCBwYXJhbXMpO1xuICAgIH1cbiAgICBpZiAob3B0aW9uVmFsdWUgPT09IHRydWUpIHtcbiAgICAgIG9wdGlvblZhbHVlID0gdW5kZWZpbmVkOyAvLyB1c2UgZGVmYXVsdCB2YWx1ZVxuICAgIH1cblxuICAgIGlmICghb3B0aW9uVmFsdWUpIHtcbiAgICAgIGlmIChvcHRpb25WYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvblZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gb3B0aW9uVmFsdWU7XG4gICAgICB9XG4gICAgICAvLyBlbHNlLCBlbXB0eSBzdHJpbmcgKGludmFsaWQpLCBudWxsIChpbnZhbGlkKSwgMCAoaW52YWxpZClcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYFwiLmNvbmNhdChvcHRpb25OYW1lLCBcImAgd2FzIHNwZWNpZmllZCBidXQgd2FzIG5vdCBhIG5vZGUsIG9yIGRpZCBub3QgcmV0dXJuIGEgbm9kZVwiKSk7XG4gICAgfVxuICAgIHZhciBub2RlID0gb3B0aW9uVmFsdWU7IC8vIGNvdWxkIGJlIEhUTUxFbGVtZW50LCBTVkdFbGVtZW50LCBvciBub24tZW1wdHkgc3RyaW5nIGF0IHRoaXMgcG9pbnRcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBub2RlID0gZG9jLnF1ZXJ5U2VsZWN0b3Iob3B0aW9uVmFsdWUpOyAvLyByZXNvbHZlIHRvIG5vZGUsIG9yIG51bGwgaWYgZmFpbHNcbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJgXCIuY29uY2F0KG9wdGlvbk5hbWUsIFwiYCBhcyBzZWxlY3RvciByZWZlcnMgdG8gbm8ga25vd24gbm9kZVwiKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuICB2YXIgZ2V0SW5pdGlhbEZvY3VzTm9kZSA9IGZ1bmN0aW9uIGdldEluaXRpYWxGb2N1c05vZGUoKSB7XG4gICAgdmFyIG5vZGUgPSBnZXROb2RlRm9yT3B0aW9uKCdpbml0aWFsRm9jdXMnKTtcblxuICAgIC8vIGZhbHNlIGV4cGxpY2l0bHkgaW5kaWNhdGVzIHdlIHdhbnQgbm8gaW5pdGlhbEZvY3VzIGF0IGFsbFxuICAgIGlmIChub2RlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkIHx8ICFpc0ZvY3VzYWJsZShub2RlLCBjb25maWcudGFiYmFibGVPcHRpb25zKSkge1xuICAgICAgLy8gb3B0aW9uIG5vdCBzcGVjaWZpZWQgbm9yIGZvY3VzYWJsZTogdXNlIGZhbGxiYWNrIG9wdGlvbnNcbiAgICAgIGlmIChmaW5kQ29udGFpbmVySW5kZXgoZG9jLmFjdGl2ZUVsZW1lbnQpID49IDApIHtcbiAgICAgICAgbm9kZSA9IGRvYy5hY3RpdmVFbGVtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGZpcnN0VGFiYmFibGVHcm91cCA9IHN0YXRlLnRhYmJhYmxlR3JvdXBzWzBdO1xuICAgICAgICB2YXIgZmlyc3RUYWJiYWJsZU5vZGUgPSBmaXJzdFRhYmJhYmxlR3JvdXAgJiYgZmlyc3RUYWJiYWJsZUdyb3VwLmZpcnN0VGFiYmFibGVOb2RlO1xuXG4gICAgICAgIC8vIE5PVEU6IGBmYWxsYmFja0ZvY3VzYCBvcHRpb24gZnVuY3Rpb24gY2Fubm90IHJldHVybiBgZmFsc2VgIChub3Qgc3VwcG9ydGVkKVxuICAgICAgICBub2RlID0gZmlyc3RUYWJiYWJsZU5vZGUgfHwgZ2V0Tm9kZUZvck9wdGlvbignZmFsbGJhY2tGb2N1cycpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91ciBmb2N1cy10cmFwIG5lZWRzIHRvIGhhdmUgYXQgbGVhc3Qgb25lIGZvY3VzYWJsZSBlbGVtZW50Jyk7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuICB2YXIgdXBkYXRlVGFiYmFibGVOb2RlcyA9IGZ1bmN0aW9uIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKSB7XG4gICAgc3RhdGUuY29udGFpbmVyR3JvdXBzID0gc3RhdGUuY29udGFpbmVycy5tYXAoZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgICAgdmFyIHRhYmJhYmxlTm9kZXMgPSB0YWJiYWJsZShjb250YWluZXIsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpO1xuXG4gICAgICAvLyBOT1RFOiBpZiB3ZSBoYXZlIHRhYmJhYmxlIG5vZGVzLCB3ZSBtdXN0IGhhdmUgZm9jdXNhYmxlIG5vZGVzOyBmb2N1c2FibGUgbm9kZXNcbiAgICAgIC8vICBhcmUgYSBzdXBlcnNldCBvZiB0YWJiYWJsZSBub2RlcyBzaW5jZSBub2RlcyB3aXRoIG5lZ2F0aXZlIGB0YWJpbmRleGAgYXR0cmlidXRlc1xuICAgICAgLy8gIGFyZSBmb2N1c2FibGUgYnV0IG5vdCB0YWJiYWJsZVxuICAgICAgdmFyIGZvY3VzYWJsZU5vZGVzID0gZm9jdXNhYmxlKGNvbnRhaW5lciwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucyk7XG4gICAgICB2YXIgZmlyc3RUYWJiYWJsZU5vZGUgPSB0YWJiYWJsZU5vZGVzLmxlbmd0aCA+IDAgPyB0YWJiYWJsZU5vZGVzWzBdIDogdW5kZWZpbmVkO1xuICAgICAgdmFyIGxhc3RUYWJiYWJsZU5vZGUgPSB0YWJiYWJsZU5vZGVzLmxlbmd0aCA+IDAgPyB0YWJiYWJsZU5vZGVzW3RhYmJhYmxlTm9kZXMubGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQ7XG4gICAgICB2YXIgZmlyc3REb21UYWJiYWJsZU5vZGUgPSBmb2N1c2FibGVOb2Rlcy5maW5kKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiBpc1RhYmJhYmxlKG5vZGUpO1xuICAgICAgfSk7XG4gICAgICB2YXIgbGFzdERvbVRhYmJhYmxlTm9kZSA9IGZvY3VzYWJsZU5vZGVzLnNsaWNlKCkucmV2ZXJzZSgpLmZpbmQoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGlzVGFiYmFibGUobm9kZSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBwb3NUYWJJbmRleGVzRm91bmQgPSAhIXRhYmJhYmxlTm9kZXMuZmluZChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gZ2V0VGFiSW5kZXgobm9kZSkgPiAwO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgICAgdGFiYmFibGVOb2RlczogdGFiYmFibGVOb2RlcyxcbiAgICAgICAgZm9jdXNhYmxlTm9kZXM6IGZvY3VzYWJsZU5vZGVzLFxuICAgICAgICAvKiogVHJ1ZSBpZiBhdCBsZWFzdCBvbmUgbm9kZSB3aXRoIHBvc2l0aXZlIGB0YWJpbmRleGAgd2FzIGZvdW5kIGluIHRoaXMgY29udGFpbmVyLiAqL1xuICAgICAgICBwb3NUYWJJbmRleGVzRm91bmQ6IHBvc1RhYkluZGV4ZXNGb3VuZCxcbiAgICAgICAgLyoqIEZpcnN0IHRhYmJhYmxlIG5vZGUgaW4gY29udGFpbmVyLCBfX3RhYmluZGV4X18gb3JkZXI7IGB1bmRlZmluZWRgIGlmIG5vbmUuICovXG4gICAgICAgIGZpcnN0VGFiYmFibGVOb2RlOiBmaXJzdFRhYmJhYmxlTm9kZSxcbiAgICAgICAgLyoqIExhc3QgdGFiYmFibGUgbm9kZSBpbiBjb250YWluZXIsIF9fdGFiaW5kZXhfXyBvcmRlcjsgYHVuZGVmaW5lZGAgaWYgbm9uZS4gKi9cbiAgICAgICAgbGFzdFRhYmJhYmxlTm9kZTogbGFzdFRhYmJhYmxlTm9kZSxcbiAgICAgICAgLy8gTk9URTogRE9NIG9yZGVyIGlzIE5PVCBORUNFU1NBUklMWSBcImRvY3VtZW50IHBvc2l0aW9uXCIgb3JkZXIsIGJ1dCBmaWd1cmluZyB0aGF0IG91dFxuICAgICAgICAvLyAgd291bGQgcmVxdWlyZSBtb3JlIHRoYW4ganVzdCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTm9kZS9jb21wYXJlRG9jdW1lbnRQb3NpdGlvblxuICAgICAgICAvLyAgYmVjYXVzZSB0aGF0IEFQSSBkb2Vzbid0IHdvcmsgd2l0aCBTaGFkb3cgRE9NIGFzIHdlbGwgYXMgaXQgc2hvdWxkIChAc2VlXG4gICAgICAgIC8vICBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2RvbS9pc3N1ZXMvMzIwKSBhbmQgc2luY2UgdGhpcyBmaXJzdC9sYXN0IGlzIG9ubHkgbmVlZGVkLCBzbyBmYXIsXG4gICAgICAgIC8vICB0byBhZGRyZXNzIGFuIGVkZ2UgY2FzZSByZWxhdGVkIHRvIHBvc2l0aXZlIHRhYmluZGV4IHN1cHBvcnQsIHRoaXMgc2VlbXMgbGlrZSBhIG11Y2ggZWFzaWVyLFxuICAgICAgICAvLyAgXCJjbG9zZSBlbm91Z2ggbW9zdCBvZiB0aGUgdGltZVwiIGFsdGVybmF0aXZlIGZvciBwb3NpdGl2ZSB0YWJpbmRleGVzIHdoaWNoIHNob3VsZCBnZW5lcmFsbHlcbiAgICAgICAgLy8gIGJlIGF2b2lkZWQgYW55d2F5Li4uXG4gICAgICAgIC8qKiBGaXJzdCB0YWJiYWJsZSBub2RlIGluIGNvbnRhaW5lciwgX19ET01fXyBvcmRlcjsgYHVuZGVmaW5lZGAgaWYgbm9uZS4gKi9cbiAgICAgICAgZmlyc3REb21UYWJiYWJsZU5vZGU6IGZpcnN0RG9tVGFiYmFibGVOb2RlLFxuICAgICAgICAvKiogTGFzdCB0YWJiYWJsZSBub2RlIGluIGNvbnRhaW5lciwgX19ET01fXyBvcmRlcjsgYHVuZGVmaW5lZGAgaWYgbm9uZS4gKi9cbiAgICAgICAgbGFzdERvbVRhYmJhYmxlTm9kZTogbGFzdERvbVRhYmJhYmxlTm9kZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbmRzIHRoZSBfX3RhYmJhYmxlX18gbm9kZSB0aGF0IGZvbGxvd3MgdGhlIGdpdmVuIG5vZGUgaW4gdGhlIHNwZWNpZmllZCBkaXJlY3Rpb24sXG4gICAgICAgICAqICBpbiB0aGlzIGNvbnRhaW5lciwgaWYgYW55LlxuICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcndhcmRdIFRydWUgaWYgZ29pbmcgaW4gZm9yd2FyZCB0YWIgb3JkZXI7IGZhbHNlIGlmIGdvaW5nXG4gICAgICAgICAqICBpbiByZXZlcnNlLlxuICAgICAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8dW5kZWZpbmVkfSBUaGUgbmV4dCB0YWJiYWJsZSBub2RlLCBpZiBhbnkuXG4gICAgICAgICAqL1xuICAgICAgICBuZXh0VGFiYmFibGVOb2RlOiBmdW5jdGlvbiBuZXh0VGFiYmFibGVOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgZm9yd2FyZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcbiAgICAgICAgICB2YXIgbm9kZUlkeCA9IHRhYmJhYmxlTm9kZXMuaW5kZXhPZihub2RlKTtcbiAgICAgICAgICBpZiAobm9kZUlkeCA8IDApIHtcbiAgICAgICAgICAgIC8vIGVpdGhlciBub3QgdGFiYmFibGUgbm9yIGZvY3VzYWJsZSwgb3Igd2FzIGZvY3VzZWQgYnV0IG5vdCB0YWJiYWJsZSAobmVnYXRpdmUgdGFiaW5kZXgpOlxuICAgICAgICAgICAgLy8gIHNpbmNlIGBub2RlYCBzaG91bGQgYXQgbGVhc3QgaGF2ZSBiZWVuIGZvY3VzYWJsZSwgd2UgYXNzdW1lIHRoYXQncyB0aGUgY2FzZSBhbmQgbWltaWNcbiAgICAgICAgICAgIC8vICB3aGF0IGJyb3dzZXJzIGRvLCB3aGljaCBpcyBzZXQgZm9jdXMgdG8gdGhlIG5leHQgbm9kZSBpbiBfX2RvY3VtZW50IHBvc2l0aW9uIG9yZGVyX18sXG4gICAgICAgICAgICAvLyAgcmVnYXJkbGVzcyBvZiBwb3NpdGl2ZSB0YWJpbmRleGVzLCBpZiBhbnkgLS0gYW5kIGZvciByZWFzb25zIGV4cGxhaW5lZCBpbiB0aGUgTk9URVxuICAgICAgICAgICAgLy8gIGFib3ZlIHJlbGF0ZWQgdG8gYGZpcnN0RG9tVGFiYmFibGVgIGFuZCBgbGFzdERvbVRhYmJhYmxlYCBwcm9wZXJ0aWVzLCB3ZSBmYWxsIGJhY2sgdG9cbiAgICAgICAgICAgIC8vICBiYXNpYyBET00gb3JkZXJcbiAgICAgICAgICAgIGlmIChmb3J3YXJkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmb2N1c2FibGVOb2Rlcy5zbGljZShmb2N1c2FibGVOb2Rlcy5pbmRleE9mKG5vZGUpICsgMSkuZmluZChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNUYWJiYWJsZShlbCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZvY3VzYWJsZU5vZGVzLnNsaWNlKDAsIGZvY3VzYWJsZU5vZGVzLmluZGV4T2Yobm9kZSkpLnJldmVyc2UoKS5maW5kKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICByZXR1cm4gaXNUYWJiYWJsZShlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRhYmJhYmxlTm9kZXNbbm9kZUlkeCArIChmb3J3YXJkID8gMSA6IC0xKV07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gICAgc3RhdGUudGFiYmFibGVHcm91cHMgPSBzdGF0ZS5jb250YWluZXJHcm91cHMuZmlsdGVyKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgcmV0dXJuIGdyb3VwLnRhYmJhYmxlTm9kZXMubGVuZ3RoID4gMDtcbiAgICB9KTtcblxuICAgIC8vIHRocm93IGlmIG5vIGdyb3VwcyBoYXZlIHRhYmJhYmxlIG5vZGVzIGFuZCB3ZSBkb24ndCBoYXZlIGEgZmFsbGJhY2sgZm9jdXMgbm9kZSBlaXRoZXJcbiAgICBpZiAoc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoIDw9IDAgJiYgIWdldE5vZGVGb3JPcHRpb24oJ2ZhbGxiYWNrRm9jdXMnKSAvLyByZXR1cm5pbmcgZmFsc2Ugbm90IHN1cHBvcnRlZCBmb3IgdGhpcyBvcHRpb25cbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91ciBmb2N1cy10cmFwIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgY29udGFpbmVyIHdpdGggYXQgbGVhc3Qgb25lIHRhYmJhYmxlIG5vZGUgaW4gaXQgYXQgYWxsIHRpbWVzJyk7XG4gICAgfVxuXG4gICAgLy8gTk9URTogUG9zaXRpdmUgdGFiaW5kZXhlcyBhcmUgb25seSBwcm9wZXJseSBzdXBwb3J0ZWQgaW4gc2luZ2xlLWNvbnRhaW5lciB0cmFwcyBiZWNhdXNlXG4gICAgLy8gIGRvaW5nIGl0IGFjcm9zcyBtdWx0aXBsZSBjb250YWluZXJzIHdoZXJlIHRhYmluZGV4ZXMgY291bGQgYmUgYWxsIG92ZXIgdGhlIHBsYWNlXG4gICAgLy8gIHdvdWxkIHJlcXVpcmUgVGFiYmFibGUgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb250YWluZXJzLCB3b3VsZCByZXF1aXJlIGFkZGl0aW9uYWxcbiAgICAvLyAgc3BlY2lhbGl6ZWQgU2hhZG93IERPTSBzdXBwb3J0LCBhbmQgd291bGQgcmVxdWlyZSBUYWJiYWJsZSdzIG11bHRpLWNvbnRhaW5lciBzdXBwb3J0XG4gICAgLy8gIHRvIGxvb2sgYXQgdGhvc2UgY29udGFpbmVycyBpbiBkb2N1bWVudCBwb3NpdGlvbiBvcmRlciByYXRoZXIgdGhhbiB1c2VyLXByb3ZpZGVkXG4gICAgLy8gIG9yZGVyIChhcyB0aGV5IGFyZSB0cmVhdGVkIGluIEZvY3VzLXRyYXAsIGZvciBsZWdhY3kgcmVhc29ucykuIFNlZSBkaXNjdXNzaW9uIG9uXG4gICAgLy8gIGh0dHBzOi8vZ2l0aHViLmNvbS9mb2N1cy10cmFwL2ZvY3VzLXRyYXAvaXNzdWVzLzM3NSBmb3IgbW9yZSBkZXRhaWxzLlxuICAgIGlmIChzdGF0ZS5jb250YWluZXJHcm91cHMuZmluZChmdW5jdGlvbiAoZykge1xuICAgICAgcmV0dXJuIGcucG9zVGFiSW5kZXhlc0ZvdW5kO1xuICAgIH0pICYmIHN0YXRlLmNvbnRhaW5lckdyb3Vwcy5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdCBsZWFzdCBvbmUgbm9kZSB3aXRoIGEgcG9zaXRpdmUgdGFiaW5kZXggd2FzIGZvdW5kIGluIG9uZSBvZiB5b3VyIGZvY3VzLXRyYXAncyBtdWx0aXBsZSBjb250YWluZXJzLiBQb3NpdGl2ZSB0YWJpbmRleGVzIGFyZSBvbmx5IHN1cHBvcnRlZCBpbiBzaW5nbGUtY29udGFpbmVyIGZvY3VzLXRyYXBzLlwiKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgYWN0aXZlRWxlbWVudC4gSWYgaXQncyBhIHdlYi1jb21wb25lbnQgYW5kIGhhcyBvcGVuIHNoYWRvdy1yb290XG4gICAqIGl0IHdpbGwgcmVjdXJzaXZlbHkgc2VhcmNoIGluc2lkZSBzaGFkb3cgcm9vdHMgZm9yIHRoZSBcInRydWVcIiBhY3RpdmVFbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0RvY3VtZW50IHwgU2hhZG93Um9vdH0gZWxcbiAgICpcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSBUaGUgZWxlbWVudCB0aGF0IGN1cnJlbnRseSBoYXMgdGhlIGZvY3VzXG4gICAqKi9cbiAgdmFyIGdldEFjdGl2ZUVsZW1lbnQgPSBmdW5jdGlvbiBnZXRBY3RpdmVFbGVtZW50KGVsKSB7XG4gICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBlbC5hY3RpdmVFbGVtZW50O1xuICAgIGlmICghYWN0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYWN0aXZlRWxlbWVudC5zaGFkb3dSb290ICYmIGFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZ2V0QWN0aXZlRWxlbWVudChhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3QpO1xuICAgIH1cbiAgICByZXR1cm4gYWN0aXZlRWxlbWVudDtcbiAgfTtcbiAgdmFyIHRyeUZvY3VzID0gZnVuY3Rpb24gdHJ5Rm9jdXMobm9kZSkge1xuICAgIGlmIChub2RlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobm9kZSA9PT0gZ2V0QWN0aXZlRWxlbWVudChkb2N1bWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFub2RlIHx8ICFub2RlLmZvY3VzKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBub2RlLmZvY3VzKHtcbiAgICAgIHByZXZlbnRTY3JvbGw6ICEhY29uZmlnLnByZXZlbnRTY3JvbGxcbiAgICB9KTtcbiAgICAvLyBOT1RFOiBmb2N1cygpIEFQSSBkb2VzIG5vdCB0cmlnZ2VyIGZvY3VzSW4gZXZlbnQgc28gc2V0IE1SVSBub2RlIG1hbnVhbGx5XG4gICAgc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUgPSBub2RlO1xuICAgIGlmIChpc1NlbGVjdGFibGVJbnB1dChub2RlKSkge1xuICAgICAgbm9kZS5zZWxlY3QoKTtcbiAgICB9XG4gIH07XG4gIHZhciBnZXRSZXR1cm5Gb2N1c05vZGUgPSBmdW5jdGlvbiBnZXRSZXR1cm5Gb2N1c05vZGUocHJldmlvdXNBY3RpdmVFbGVtZW50KSB7XG4gICAgdmFyIG5vZGUgPSBnZXROb2RlRm9yT3B0aW9uKCdzZXRSZXR1cm5Gb2N1cycsIHByZXZpb3VzQWN0aXZlRWxlbWVudCk7XG4gICAgcmV0dXJuIG5vZGUgPyBub2RlIDogbm9kZSA9PT0gZmFsc2UgPyBmYWxzZSA6IHByZXZpb3VzQWN0aXZlRWxlbWVudDtcbiAgfTtcblxuICAvKipcbiAgICogRmluZHMgdGhlIG5leHQgbm9kZSAoaW4gZWl0aGVyIGRpcmVjdGlvbikgd2hlcmUgZm9jdXMgc2hvdWxkIG1vdmUgYWNjb3JkaW5nIHRvIGFcbiAgICogIGtleWJvYXJkIGZvY3VzLWluIGV2ZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7Tm9kZX0gW3BhcmFtcy50YXJnZXRdIEtub3duIHRhcmdldCBfX2Zyb20gd2hpY2hfXyB0byBuYXZpZ2F0ZSwgaWYgYW55LlxuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR8Rm9jdXNFdmVudH0gW3BhcmFtcy5ldmVudF0gRXZlbnQgdG8gdXNlIGlmIGB0YXJnZXRgIGlzbid0IGtub3duIChldmVudFxuICAgKiAgd2lsbCBiZSB1c2VkIHRvIGRldGVybWluZSB0aGUgYHRhcmdldGApLiBJZ25vcmVkIGlmIGB0YXJnZXRgIGlzIHNwZWNpZmllZC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbcGFyYW1zLmlzQmFja3dhcmRdIFRydWUgaWYgZm9jdXMgc2hvdWxkIG1vdmUgYmFja3dhcmQuXG4gICAqIEByZXR1cm5zIHtOb2RlfHVuZGVmaW5lZH0gVGhlIG5leHQgbm9kZSwgb3IgYHVuZGVmaW5lZGAgaWYgYSBuZXh0IG5vZGUgY291bGRuJ3QgYmVcbiAgICogIGRldGVybWluZWQgZ2l2ZW4gdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHRyYXAuXG4gICAqL1xuICB2YXIgZmluZE5leHROYXZOb2RlID0gZnVuY3Rpb24gZmluZE5leHROYXZOb2RlKF9yZWYyKSB7XG4gICAgdmFyIHRhcmdldCA9IF9yZWYyLnRhcmdldCxcbiAgICAgIGV2ZW50ID0gX3JlZjIuZXZlbnQsXG4gICAgICBfcmVmMiRpc0JhY2t3YXJkID0gX3JlZjIuaXNCYWNrd2FyZCxcbiAgICAgIGlzQmFja3dhcmQgPSBfcmVmMiRpc0JhY2t3YXJkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJGlzQmFja3dhcmQ7XG4gICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IGdldEFjdHVhbFRhcmdldChldmVudCk7XG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgIHZhciBkZXN0aW5hdGlvbk5vZGUgPSBudWxsO1xuICAgIGlmIChzdGF0ZS50YWJiYWJsZUdyb3Vwcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgdGhlIHRhcmdldCBpcyBhY3R1YWxseSBjb250YWluZWQgaW4gYSBncm91cFxuICAgICAgLy8gTk9URTogdGhlIHRhcmdldCBtYXkgYWxzbyBiZSB0aGUgY29udGFpbmVyIGl0c2VsZiBpZiBpdCdzIGZvY3VzYWJsZVxuICAgICAgLy8gIHdpdGggdGFiSW5kZXg9Jy0xJyBhbmQgd2FzIGdpdmVuIGluaXRpYWwgZm9jdXNcbiAgICAgIHZhciBjb250YWluZXJJbmRleCA9IGZpbmRDb250YWluZXJJbmRleCh0YXJnZXQsIGV2ZW50KTtcbiAgICAgIHZhciBjb250YWluZXJHcm91cCA9IGNvbnRhaW5lckluZGV4ID49IDAgPyBzdGF0ZS5jb250YWluZXJHcm91cHNbY29udGFpbmVySW5kZXhdIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKGNvbnRhaW5lckluZGV4IDwgMCkge1xuICAgICAgICAvLyB0YXJnZXQgbm90IGZvdW5kIGluIGFueSBncm91cDogcXVpdGUgcG9zc2libGUgZm9jdXMgaGFzIGVzY2FwZWQgdGhlIHRyYXAsXG4gICAgICAgIC8vICBzbyBicmluZyBpdCBiYWNrIGludG8uLi5cbiAgICAgICAgaWYgKGlzQmFja3dhcmQpIHtcbiAgICAgICAgICAvLyAuLi50aGUgbGFzdCBub2RlIGluIHRoZSBsYXN0IGdyb3VwXG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gc3RhdGUudGFiYmFibGVHcm91cHNbc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoIC0gMV0ubGFzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyAuLi50aGUgZmlyc3Qgbm9kZSBpbiB0aGUgZmlyc3QgZ3JvdXBcbiAgICAgICAgICBkZXN0aW5hdGlvbk5vZGUgPSBzdGF0ZS50YWJiYWJsZUdyb3Vwc1swXS5maXJzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc0JhY2t3YXJkKSB7XG4gICAgICAgIC8vIFJFVkVSU0VcblxuICAgICAgICAvLyBpcyB0aGUgdGFyZ2V0IHRoZSBmaXJzdCB0YWJiYWJsZSBub2RlIGluIGEgZ3JvdXA/XG4gICAgICAgIHZhciBzdGFydE9mR3JvdXBJbmRleCA9IGZpbmRJbmRleChzdGF0ZS50YWJiYWJsZUdyb3VwcywgZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgICAgdmFyIGZpcnN0VGFiYmFibGVOb2RlID0gX3JlZjMuZmlyc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldCA9PT0gZmlyc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc3RhcnRPZkdyb3VwSW5kZXggPCAwICYmIChjb250YWluZXJHcm91cC5jb250YWluZXIgPT09IHRhcmdldCB8fCBpc0ZvY3VzYWJsZSh0YXJnZXQsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpICYmICFpc1RhYmJhYmxlKHRhcmdldCwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucykgJiYgIWNvbnRhaW5lckdyb3VwLm5leHRUYWJiYWJsZU5vZGUodGFyZ2V0LCBmYWxzZSkpKSB7XG4gICAgICAgICAgLy8gYW4gZXhjZXB0aW9uIGNhc2Ugd2hlcmUgdGhlIHRhcmdldCBpcyBlaXRoZXIgdGhlIGNvbnRhaW5lciBpdHNlbGYsIG9yXG4gICAgICAgICAgLy8gIGEgbm9uLXRhYmJhYmxlIG5vZGUgdGhhdCB3YXMgZ2l2ZW4gZm9jdXMgKGkuZS4gdGFiaW5kZXggaXMgbmVnYXRpdmVcbiAgICAgICAgICAvLyAgYW5kIHVzZXIgY2xpY2tlZCBvbiBpdCBvciBub2RlIHdhcyBwcm9ncmFtbWF0aWNhbGx5IGdpdmVuIGZvY3VzKVxuICAgICAgICAgIC8vICBhbmQgaXMgbm90IGZvbGxvd2VkIGJ5IGFueSBvdGhlciB0YWJiYWJsZSBub2RlLCBpbiB3aGljaFxuICAgICAgICAgIC8vICBjYXNlLCB3ZSBzaG91bGQgaGFuZGxlIHNoaWZ0K3RhYiBhcyBpZiBmb2N1cyB3ZXJlIG9uIHRoZSBjb250YWluZXInc1xuICAgICAgICAgIC8vICBmaXJzdCB0YWJiYWJsZSBub2RlLCBhbmQgZ28gdG8gdGhlIGxhc3QgdGFiYmFibGUgbm9kZSBvZiB0aGUgTEFTVCBncm91cFxuICAgICAgICAgIHN0YXJ0T2ZHcm91cEluZGV4ID0gY29udGFpbmVySW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0T2ZHcm91cEluZGV4ID49IDApIHtcbiAgICAgICAgICAvLyBZRVM6IHRoZW4gc2hpZnQrdGFiIHNob3VsZCBnbyB0byB0aGUgbGFzdCB0YWJiYWJsZSBub2RlIGluIHRoZVxuICAgICAgICAgIC8vICBwcmV2aW91cyBncm91cCAoYW5kIHdyYXAgYXJvdW5kIHRvIHRoZSBsYXN0IHRhYmJhYmxlIG5vZGUgb2ZcbiAgICAgICAgICAvLyAgdGhlIExBU1QgZ3JvdXAgaWYgaXQncyB0aGUgZmlyc3QgdGFiYmFibGUgbm9kZSBvZiB0aGUgRklSU1QgZ3JvdXApXG4gICAgICAgICAgdmFyIGRlc3RpbmF0aW9uR3JvdXBJbmRleCA9IHN0YXJ0T2ZHcm91cEluZGV4ID09PSAwID8gc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoIC0gMSA6IHN0YXJ0T2ZHcm91cEluZGV4IC0gMTtcbiAgICAgICAgICB2YXIgZGVzdGluYXRpb25Hcm91cCA9IHN0YXRlLnRhYmJhYmxlR3JvdXBzW2Rlc3RpbmF0aW9uR3JvdXBJbmRleF07XG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gZ2V0VGFiSW5kZXgodGFyZ2V0KSA+PSAwID8gZGVzdGluYXRpb25Hcm91cC5sYXN0VGFiYmFibGVOb2RlIDogZGVzdGluYXRpb25Hcm91cC5sYXN0RG9tVGFiYmFibGVOb2RlO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc1RhYkV2ZW50KGV2ZW50KSkge1xuICAgICAgICAgIC8vIHVzZXIgbXVzdCBoYXZlIGN1c3RvbWl6ZWQgdGhlIG5hdiBrZXlzIHNvIHdlIGhhdmUgdG8gbW92ZSBmb2N1cyBtYW51YWxseSBfd2l0aGluX1xuICAgICAgICAgIC8vICB0aGUgYWN0aXZlIGdyb3VwOiBkbyB0aGlzIGJhc2VkIG9uIHRoZSBvcmRlciBkZXRlcm1pbmVkIGJ5IHRhYmJhYmxlKClcbiAgICAgICAgICBkZXN0aW5hdGlvbk5vZGUgPSBjb250YWluZXJHcm91cC5uZXh0VGFiYmFibGVOb2RlKHRhcmdldCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGT1JXQVJEXG5cbiAgICAgICAgLy8gaXMgdGhlIHRhcmdldCB0aGUgbGFzdCB0YWJiYWJsZSBub2RlIGluIGEgZ3JvdXA/XG4gICAgICAgIHZhciBsYXN0T2ZHcm91cEluZGV4ID0gZmluZEluZGV4KHN0YXRlLnRhYmJhYmxlR3JvdXBzLCBmdW5jdGlvbiAoX3JlZjQpIHtcbiAgICAgICAgICB2YXIgbGFzdFRhYmJhYmxlTm9kZSA9IF9yZWY0Lmxhc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldCA9PT0gbGFzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChsYXN0T2ZHcm91cEluZGV4IDwgMCAmJiAoY29udGFpbmVyR3JvdXAuY29udGFpbmVyID09PSB0YXJnZXQgfHwgaXNGb2N1c2FibGUodGFyZ2V0LCBjb25maWcudGFiYmFibGVPcHRpb25zKSAmJiAhaXNUYWJiYWJsZSh0YXJnZXQsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpICYmICFjb250YWluZXJHcm91cC5uZXh0VGFiYmFibGVOb2RlKHRhcmdldCkpKSB7XG4gICAgICAgICAgLy8gYW4gZXhjZXB0aW9uIGNhc2Ugd2hlcmUgdGhlIHRhcmdldCBpcyB0aGUgY29udGFpbmVyIGl0c2VsZiwgb3JcbiAgICAgICAgICAvLyAgYSBub24tdGFiYmFibGUgbm9kZSB0aGF0IHdhcyBnaXZlbiBmb2N1cyAoaS5lLiB0YWJpbmRleCBpcyBuZWdhdGl2ZVxuICAgICAgICAgIC8vICBhbmQgdXNlciBjbGlja2VkIG9uIGl0IG9yIG5vZGUgd2FzIHByb2dyYW1tYXRpY2FsbHkgZ2l2ZW4gZm9jdXMpXG4gICAgICAgICAgLy8gIGFuZCBpcyBub3QgZm9sbG93ZWQgYnkgYW55IG90aGVyIHRhYmJhYmxlIG5vZGUsIGluIHdoaWNoXG4gICAgICAgICAgLy8gIGNhc2UsIHdlIHNob3VsZCBoYW5kbGUgdGFiIGFzIGlmIGZvY3VzIHdlcmUgb24gdGhlIGNvbnRhaW5lcidzXG4gICAgICAgICAgLy8gIGxhc3QgdGFiYmFibGUgbm9kZSwgYW5kIGdvIHRvIHRoZSBmaXJzdCB0YWJiYWJsZSBub2RlIG9mIHRoZSBGSVJTVCBncm91cFxuICAgICAgICAgIGxhc3RPZkdyb3VwSW5kZXggPSBjb250YWluZXJJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdE9mR3JvdXBJbmRleCA+PSAwKSB7XG4gICAgICAgICAgLy8gWUVTOiB0aGVuIHRhYiBzaG91bGQgZ28gdG8gdGhlIGZpcnN0IHRhYmJhYmxlIG5vZGUgaW4gdGhlIG5leHRcbiAgICAgICAgICAvLyAgZ3JvdXAgKGFuZCB3cmFwIGFyb3VuZCB0byB0aGUgZmlyc3QgdGFiYmFibGUgbm9kZSBvZiB0aGUgRklSU1RcbiAgICAgICAgICAvLyAgZ3JvdXAgaWYgaXQncyB0aGUgbGFzdCB0YWJiYWJsZSBub2RlIG9mIHRoZSBMQVNUIGdyb3VwKVxuICAgICAgICAgIHZhciBfZGVzdGluYXRpb25Hcm91cEluZGV4ID0gbGFzdE9mR3JvdXBJbmRleCA9PT0gc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoIC0gMSA/IDAgOiBsYXN0T2ZHcm91cEluZGV4ICsgMTtcbiAgICAgICAgICB2YXIgX2Rlc3RpbmF0aW9uR3JvdXAgPSBzdGF0ZS50YWJiYWJsZUdyb3Vwc1tfZGVzdGluYXRpb25Hcm91cEluZGV4XTtcbiAgICAgICAgICBkZXN0aW5hdGlvbk5vZGUgPSBnZXRUYWJJbmRleCh0YXJnZXQpID49IDAgPyBfZGVzdGluYXRpb25Hcm91cC5maXJzdFRhYmJhYmxlTm9kZSA6IF9kZXN0aW5hdGlvbkdyb3VwLmZpcnN0RG9tVGFiYmFibGVOb2RlO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc1RhYkV2ZW50KGV2ZW50KSkge1xuICAgICAgICAgIC8vIHVzZXIgbXVzdCBoYXZlIGN1c3RvbWl6ZWQgdGhlIG5hdiBrZXlzIHNvIHdlIGhhdmUgdG8gbW92ZSBmb2N1cyBtYW51YWxseSBfd2l0aGluX1xuICAgICAgICAgIC8vICB0aGUgYWN0aXZlIGdyb3VwOiBkbyB0aGlzIGJhc2VkIG9uIHRoZSBvcmRlciBkZXRlcm1pbmVkIGJ5IHRhYmJhYmxlKClcbiAgICAgICAgICBkZXN0aW5hdGlvbk5vZGUgPSBjb250YWluZXJHcm91cC5uZXh0VGFiYmFibGVOb2RlKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm8gZ3JvdXBzIGF2YWlsYWJsZVxuICAgICAgLy8gTk9URTogdGhlIGZhbGxiYWNrRm9jdXMgb3B0aW9uIGRvZXMgbm90IHN1cHBvcnQgcmV0dXJuaW5nIGZhbHNlIHRvIG9wdC1vdXRcbiAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IGdldE5vZGVGb3JPcHRpb24oJ2ZhbGxiYWNrRm9jdXMnKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uTm9kZTtcbiAgfTtcblxuICAvLyBUaGlzIG5lZWRzIHRvIGJlIGRvbmUgb24gbW91c2Vkb3duIGFuZCB0b3VjaHN0YXJ0IGluc3RlYWQgb2YgY2xpY2tcbiAgLy8gc28gdGhhdCBpdCBwcmVjZWRlcyB0aGUgZm9jdXMgZXZlbnQuXG4gIHZhciBjaGVja1BvaW50ZXJEb3duID0gZnVuY3Rpb24gY2hlY2tQb2ludGVyRG93bihlKSB7XG4gICAgdmFyIHRhcmdldCA9IGdldEFjdHVhbFRhcmdldChlKTtcbiAgICBpZiAoZmluZENvbnRhaW5lckluZGV4KHRhcmdldCwgZSkgPj0gMCkge1xuICAgICAgLy8gYWxsb3cgdGhlIGNsaWNrIHNpbmNlIGl0IG9jdXJyZWQgaW5zaWRlIHRoZSB0cmFwXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWx1ZU9ySGFuZGxlcihjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMsIGUpKSB7XG4gICAgICAvLyBpbW1lZGlhdGVseSBkZWFjdGl2YXRlIHRoZSB0cmFwXG4gICAgICB0cmFwLmRlYWN0aXZhdGUoe1xuICAgICAgICAvLyBOT1RFOiBieSBzZXR0aW5nIGByZXR1cm5Gb2N1czogZmFsc2VgLCBkZWFjdGl2YXRlKCkgd2lsbCBkbyBub3RoaW5nLFxuICAgICAgICAvLyAgd2hpY2ggd2lsbCByZXN1bHQgaW4gdGhlIG91dHNpZGUgY2xpY2sgc2V0dGluZyBmb2N1cyB0byB0aGUgbm9kZVxuICAgICAgICAvLyAgdGhhdCB3YXMgY2xpY2tlZCAoYW5kIGlmIG5vdCBmb2N1c2FibGUsIHRvIFwibm90aGluZ1wiKTsgYnkgc2V0dGluZ1xuICAgICAgICAvLyAgYHJldHVybkZvY3VzOiB0cnVlYCwgd2UnbGwgYXR0ZW1wdCB0byByZS1mb2N1cyB0aGUgbm9kZSBvcmlnaW5hbGx5LWZvY3VzZWRcbiAgICAgICAgLy8gIG9uIGFjdGl2YXRpb24gKG9yIHRoZSBjb25maWd1cmVkIGBzZXRSZXR1cm5Gb2N1c2Agbm9kZSksIHdoZXRoZXIgdGhlXG4gICAgICAgIC8vICBvdXRzaWRlIGNsaWNrIHdhcyBvbiBhIGZvY3VzYWJsZSBub2RlIG9yIG5vdFxuICAgICAgICByZXR1cm5Gb2N1czogY29uZmlnLnJldHVybkZvY3VzT25EZWFjdGl2YXRlXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGlzIG5lZWRlZCBmb3IgbW9iaWxlIGRldmljZXMuXG4gICAgLy8gKElmIHdlJ2xsIG9ubHkgbGV0IGBjbGlja2AgZXZlbnRzIHRocm91Z2gsXG4gICAgLy8gdGhlbiBvbiBtb2JpbGUgdGhleSB3aWxsIGJlIGJsb2NrZWQgYW55d2F5cyBpZiBgdG91Y2hzdGFydGAgaXMgYmxvY2tlZC4pXG4gICAgaWYgKHZhbHVlT3JIYW5kbGVyKGNvbmZpZy5hbGxvd091dHNpZGVDbGljaywgZSkpIHtcbiAgICAgIC8vIGFsbG93IHRoZSBjbGljayBvdXRzaWRlIHRoZSB0cmFwIHRvIHRha2UgcGxhY2VcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBvdGhlcndpc2UsIHByZXZlbnQgdGhlIGNsaWNrXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIC8vIEluIGNhc2UgZm9jdXMgZXNjYXBlcyB0aGUgdHJhcCBmb3Igc29tZSBzdHJhbmdlIHJlYXNvbiwgcHVsbCBpdCBiYWNrIGluLlxuICAvLyBOT1RFOiB0aGUgZm9jdXNJbiBldmVudCBpcyBOT1QgY2FuY2VsYWJsZSwgc28gaWYgZm9jdXMgZXNjYXBlcywgaXQgbWF5IGNhdXNlIHVuZXhwZWN0ZWRcbiAgLy8gIHNjcm9sbGluZyBpZiB0aGUgbm9kZSB0aGF0IGdvdCBmb2N1c2VkIHdhcyBvdXQgb2YgdmlldzsgdGhlcmUncyBub3RoaW5nIHdlIGNhbiBkbyB0b1xuICAvLyAgcHJldmVudCB0aGF0IGZyb20gaGFwcGVuaW5nIGJ5IHRoZSB0aW1lIHdlIGRpc2NvdmVyIHRoYXQgZm9jdXMgZXNjYXBlZFxuICB2YXIgY2hlY2tGb2N1c0luID0gZnVuY3Rpb24gY2hlY2tGb2N1c0luKGV2ZW50KSB7XG4gICAgdmFyIHRhcmdldCA9IGdldEFjdHVhbFRhcmdldChldmVudCk7XG4gICAgdmFyIHRhcmdldENvbnRhaW5lZCA9IGZpbmRDb250YWluZXJJbmRleCh0YXJnZXQsIGV2ZW50KSA+PSAwO1xuXG4gICAgLy8gSW4gRmlyZWZveCB3aGVuIHlvdSBUYWIgb3V0IG9mIGFuIGlmcmFtZSB0aGUgRG9jdW1lbnQgaXMgYnJpZWZseSBmb2N1c2VkLlxuICAgIGlmICh0YXJnZXRDb250YWluZWQgfHwgdGFyZ2V0IGluc3RhbmNlb2YgRG9jdW1lbnQpIHtcbiAgICAgIGlmICh0YXJnZXRDb250YWluZWQpIHtcbiAgICAgICAgc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUgPSB0YXJnZXQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzY2FwZWQhIHB1bGwgaXQgYmFjayBpbiB0byB3aGVyZSBpdCBqdXN0IGxlZnRcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgICAvLyBmb2N1cyB3aWxsIGVzY2FwZSBpZiB0aGUgTVJVIG5vZGUgaGFkIGEgcG9zaXRpdmUgdGFiIGluZGV4IGFuZCB1c2VyIHRyaWVkIHRvIG5hdiBmb3J3YXJkO1xuICAgICAgLy8gIGl0IHdpbGwgYWxzbyBlc2NhcGUgaWYgdGhlIE1SVSBub2RlIGhhZCBhIDAgdGFiIGluZGV4IGFuZCB1c2VyIHRyaWVkIHRvIG5hdiBiYWNrd2FyZFxuICAgICAgLy8gIHRvd2FyZCBhIG5vZGUgd2l0aCBhIHBvc2l0aXZlIHRhYiBpbmRleFxuICAgICAgdmFyIG5leHROb2RlOyAvLyBuZXh0IG5vZGUgdG8gZm9jdXMsIGlmIHdlIGZpbmQgb25lXG4gICAgICB2YXIgbmF2QWNyb3NzQ29udGFpbmVycyA9IHRydWU7XG4gICAgICBpZiAoc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUpIHtcbiAgICAgICAgaWYgKGdldFRhYkluZGV4KHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlKSA+IDApIHtcbiAgICAgICAgICAvLyBNUlUgY29udGFpbmVyIGluZGV4IG11c3QgYmUgPj0wIG90aGVyd2lzZSB3ZSB3b3VsZG4ndCBoYXZlIGl0IGFzIGFuIE1SVSBub2RlLi4uXG4gICAgICAgICAgdmFyIG1ydUNvbnRhaW5lcklkeCA9IGZpbmRDb250YWluZXJJbmRleChzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSk7XG4gICAgICAgICAgLy8gdGhlcmUgTUFZIG5vdCBiZSBhbnkgdGFiYmFibGUgbm9kZXMgaW4gdGhlIGNvbnRhaW5lciBpZiB0aGVyZSBhcmUgYXQgbGVhc3QgMiBjb250YWluZXJzXG4gICAgICAgICAgLy8gIGFuZCB0aGUgTVJVIG5vZGUgaXMgZm9jdXNhYmxlIGJ1dCBub3QgdGFiYmFibGUgKGZvY3VzLXRyYXAgcmVxdWlyZXMgYXQgbGVhc3QgMSBjb250YWluZXJcbiAgICAgICAgICAvLyAgd2l0aCBhdCBsZWFzdCBvbmUgdGFiYmFibGUgbm9kZSBpbiBvcmRlciB0byBmdW5jdGlvbiwgc28gdGhpcyBjb3VsZCBiZSB0aGUgb3RoZXIgY29udGFpbmVyXG4gICAgICAgICAgLy8gIHdpdGggbm90aGluZyB0YWJiYWJsZSBpbiBpdClcbiAgICAgICAgICB2YXIgdGFiYmFibGVOb2RlcyA9IHN0YXRlLmNvbnRhaW5lckdyb3Vwc1ttcnVDb250YWluZXJJZHhdLnRhYmJhYmxlTm9kZXM7XG4gICAgICAgICAgaWYgKHRhYmJhYmxlTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gTVJVIHRhYiBpbmRleCBNQVkgbm90IGJlIGZvdW5kIGlmIHRoZSBNUlUgbm9kZSBpcyBmb2N1c2FibGUgYnV0IG5vdCB0YWJiYWJsZVxuICAgICAgICAgICAgdmFyIG1ydVRhYklkeCA9IHRhYmJhYmxlTm9kZXMuZmluZEluZGV4KGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBub2RlID09PSBzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKG1ydVRhYklkeCA+PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChjb25maWcuaXNLZXlGb3J3YXJkKHN0YXRlLnJlY2VudE5hdkV2ZW50KSkge1xuICAgICAgICAgICAgICAgIGlmIChtcnVUYWJJZHggKyAxIDwgdGFiYmFibGVOb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIG5leHROb2RlID0gdGFiYmFibGVOb2Rlc1ttcnVUYWJJZHggKyAxXTtcbiAgICAgICAgICAgICAgICAgIG5hdkFjcm9zc0NvbnRhaW5lcnMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZWxzZSwgZG9uJ3Qgd3JhcCB3aXRoaW4gdGhlIGNvbnRhaW5lciBhcyBmb2N1cyBzaG91bGQgbW92ZSB0byBuZXh0L3ByZXZpb3VzXG4gICAgICAgICAgICAgICAgLy8gIGNvbnRhaW5lclxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChtcnVUYWJJZHggLSAxID49IDApIHtcbiAgICAgICAgICAgICAgICAgIG5leHROb2RlID0gdGFiYmFibGVOb2Rlc1ttcnVUYWJJZHggLSAxXTtcbiAgICAgICAgICAgICAgICAgIG5hdkFjcm9zc0NvbnRhaW5lcnMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZWxzZSwgZG9uJ3Qgd3JhcCB3aXRoaW4gdGhlIGNvbnRhaW5lciBhcyBmb2N1cyBzaG91bGQgbW92ZSB0byBuZXh0L3ByZXZpb3VzXG4gICAgICAgICAgICAgICAgLy8gIGNvbnRhaW5lclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIGVsc2UsIGRvbid0IGZpbmQgaW4gY29udGFpbmVyIG9yZGVyIHdpdGhvdXQgY29uc2lkZXJpbmcgZGlyZWN0aW9uIHRvb1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBlbHNlLCBubyB0YWJiYWJsZSBub2RlcyBpbiB0aGF0IGNvbnRhaW5lciAod2hpY2ggbWVhbnMgd2UgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBvdGhlclxuICAgICAgICAgIC8vICBjb250YWluZXIgd2l0aCBhdCBsZWFzdCBvbmUgdGFiYmFibGUgbm9kZSBpbiBpdCwgb3RoZXJ3aXNlIGZvY3VzLXRyYXAgd291bGQndmUgdGhyb3duXG4gICAgICAgICAgLy8gIGFuIGVycm9yIHRoZSBsYXN0IHRpbWUgdXBkYXRlVGFiYmFibGVOb2RlcygpIHdhcyBydW4pOiBmaW5kIG5leHQgbm9kZSBhbW9uZyBhbGwga25vd25cbiAgICAgICAgICAvLyAgY29udGFpbmVyc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSdzIGF0IGxlYXN0IG9uZSB0YWJiYWJsZSBub2RlIHdpdGggYSBwb3NpdGl2ZSB0YWIgaW5kZXggaW5zaWRlXG4gICAgICAgICAgLy8gIHRoZSB0cmFwIGJlY2F1c2UgZm9jdXMgc2VlbXMgdG8gZXNjYXBlIHdoZW4gbmF2aWdhdGluZyBiYWNrd2FyZCBmcm9tIGEgdGFiYmFibGUgbm9kZVxuICAgICAgICAgIC8vICB3aXRoIHRhYmluZGV4PTAgd2hlbiB0aGlzIGlzIHRoZSBjYXNlIChpbnN0ZWFkIG9mIHdyYXBwaW5nIHRvIHRoZSB0YWJiYWJsZSBub2RlIHdpdGhcbiAgICAgICAgICAvLyAgdGhlIGdyZWF0ZXN0IHBvc2l0aXZlIHRhYiBpbmRleCBsaWtlIGl0IHNob3VsZClcbiAgICAgICAgICBpZiAoIXN0YXRlLmNvbnRhaW5lckdyb3Vwcy5zb21lKGZ1bmN0aW9uIChnKSB7XG4gICAgICAgICAgICByZXR1cm4gZy50YWJiYWJsZU5vZGVzLnNvbWUoZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGdldFRhYkluZGV4KG4pID4gMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAvLyBubyBjb250YWluZXJzIHdpdGggdGFiYmFibGUgbm9kZXMgd2l0aCBwb3NpdGl2ZSB0YWIgaW5kZXhlcyB3aGljaCBtZWFucyB0aGUgZm9jdXNcbiAgICAgICAgICAgIC8vICBlc2NhcGVkIGZvciBzb21lIG90aGVyIHJlYXNvbiBhbmQgd2Ugc2hvdWxkIGp1c3QgZXhlY3V0ZSB0aGUgZmFsbGJhY2sgdG8gdGhlXG4gICAgICAgICAgICAvLyAgTVJVIG5vZGUgb3IgaW5pdGlhbCBmb2N1cyBub2RlLCBpZiBhbnlcbiAgICAgICAgICAgIG5hdkFjcm9zc0NvbnRhaW5lcnMgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vIE1SVSBub2RlIG1lYW5zIHdlJ3JlIGxpa2VseSBpbiBzb21lIGluaXRpYWwgY29uZGl0aW9uIHdoZW4gdGhlIHRyYXAgaGFzIGp1c3RcbiAgICAgICAgLy8gIGJlZW4gYWN0aXZhdGVkIGFuZCBpbml0aWFsIGZvY3VzIGhhc24ndCBiZWVuIGdpdmVuIHlldCwgaW4gd2hpY2ggY2FzZSB3ZSBzaG91bGRcbiAgICAgICAgLy8gIGZhbGwgdGhyb3VnaCB0byB0cnlpbmcgdG8gZm9jdXMgdGhlIGluaXRpYWwgZm9jdXMgbm9kZSwgd2hpY2ggaXMgd2hhdCBzaG91bGRcbiAgICAgICAgLy8gIGhhcHBlbiBiZWxvdyBhdCB0aGlzIHBvaW50IGluIHRoZSBsb2dpY1xuICAgICAgICBuYXZBY3Jvc3NDb250YWluZXJzID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAobmF2QWNyb3NzQ29udGFpbmVycykge1xuICAgICAgICBuZXh0Tm9kZSA9IGZpbmROZXh0TmF2Tm9kZSh7XG4gICAgICAgICAgLy8gbW92ZSBGUk9NIHRoZSBNUlUgbm9kZSwgbm90IGV2ZW50LXJlbGF0ZWQgbm9kZSAod2hpY2ggd2lsbCBiZSB0aGUgbm9kZSB0aGF0IGlzXG4gICAgICAgICAgLy8gIG91dHNpZGUgdGhlIHRyYXAgY2F1c2luZyB0aGUgZm9jdXMgZXNjYXBlIHdlJ3JlIHRyeWluZyB0byBmaXgpXG4gICAgICAgICAgdGFyZ2V0OiBzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSxcbiAgICAgICAgICBpc0JhY2t3YXJkOiBjb25maWcuaXNLZXlCYWNrd2FyZChzdGF0ZS5yZWNlbnROYXZFdmVudClcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAobmV4dE5vZGUpIHtcbiAgICAgICAgdHJ5Rm9jdXMobmV4dE5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5Rm9jdXMoc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUgfHwgZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhdGUucmVjZW50TmF2RXZlbnQgPSB1bmRlZmluZWQ7IC8vIGNsZWFyXG4gIH07XG5cbiAgLy8gSGlqYWNrIGtleSBuYXYgZXZlbnRzIG9uIHRoZSBmaXJzdCBhbmQgbGFzdCBmb2N1c2FibGUgbm9kZXMgb2YgdGhlIHRyYXAsXG4gIC8vIGluIG9yZGVyIHRvIHByZXZlbnQgZm9jdXMgZnJvbSBlc2NhcGluZy4gSWYgaXQgZXNjYXBlcyBmb3IgZXZlbiBhXG4gIC8vIG1vbWVudCBpdCBjYW4gZW5kIHVwIHNjcm9sbGluZyB0aGUgcGFnZSBhbmQgY2F1c2luZyBjb25mdXNpb24gc28gd2VcbiAgLy8ga2luZCBvZiBuZWVkIHRvIGNhcHR1cmUgdGhlIGFjdGlvbiBhdCB0aGUga2V5ZG93biBwaGFzZS5cbiAgdmFyIGNoZWNrS2V5TmF2ID0gZnVuY3Rpb24gY2hlY2tLZXlOYXYoZXZlbnQpIHtcbiAgICB2YXIgaXNCYWNrd2FyZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgc3RhdGUucmVjZW50TmF2RXZlbnQgPSBldmVudDtcbiAgICB2YXIgZGVzdGluYXRpb25Ob2RlID0gZmluZE5leHROYXZOb2RlKHtcbiAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgIGlzQmFja3dhcmQ6IGlzQmFja3dhcmRcbiAgICB9KTtcbiAgICBpZiAoZGVzdGluYXRpb25Ob2RlKSB7XG4gICAgICBpZiAoaXNUYWJFdmVudChldmVudCkpIHtcbiAgICAgICAgLy8gc2luY2UgdGFiIG5hdGl2ZWx5IG1vdmVzIGZvY3VzLCB3ZSB3b3VsZG4ndCBoYXZlIGEgZGVzdGluYXRpb24gbm9kZSB1bmxlc3Mgd2VcbiAgICAgICAgLy8gIHdlcmUgb24gdGhlIGVkZ2Ugb2YgYSBjb250YWluZXIgYW5kIGhhZCB0byBtb3ZlIHRvIHRoZSBuZXh0L3ByZXZpb3VzIGVkZ2UsIGluXG4gICAgICAgIC8vICB3aGljaCBjYXNlIHdlIHdhbnQgdG8gcHJldmVudCBkZWZhdWx0IHRvIGtlZXAgdGhlIGJyb3dzZXIgZnJvbSBtb3ZpbmcgZm9jdXNcbiAgICAgICAgLy8gIHRvIHdoZXJlIGl0IG5vcm1hbGx5IHdvdWxkXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICB0cnlGb2N1cyhkZXN0aW5hdGlvbk5vZGUpO1xuICAgIH1cbiAgICAvLyBlbHNlLCBsZXQgdGhlIGJyb3dzZXIgdGFrZSBjYXJlIG9mIFtzaGlmdCtddGFiIGFuZCBtb3ZlIHRoZSBmb2N1c1xuICB9O1xuXG4gIHZhciBjaGVja0tleSA9IGZ1bmN0aW9uIGNoZWNrS2V5KGV2ZW50KSB7XG4gICAgaWYgKGlzRXNjYXBlRXZlbnQoZXZlbnQpICYmIHZhbHVlT3JIYW5kbGVyKGNvbmZpZy5lc2NhcGVEZWFjdGl2YXRlcywgZXZlbnQpICE9PSBmYWxzZSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRyYXAuZGVhY3RpdmF0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmlzS2V5Rm9yd2FyZChldmVudCkgfHwgY29uZmlnLmlzS2V5QmFja3dhcmQoZXZlbnQpKSB7XG4gICAgICBjaGVja0tleU5hdihldmVudCwgY29uZmlnLmlzS2V5QmFja3dhcmQoZXZlbnQpKTtcbiAgICB9XG4gIH07XG4gIHZhciBjaGVja0NsaWNrID0gZnVuY3Rpb24gY2hlY2tDbGljayhlKSB7XG4gICAgdmFyIHRhcmdldCA9IGdldEFjdHVhbFRhcmdldChlKTtcbiAgICBpZiAoZmluZENvbnRhaW5lckluZGV4KHRhcmdldCwgZSkgPj0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsdWVPckhhbmRsZXIoY29uZmlnLmNsaWNrT3V0c2lkZURlYWN0aXZhdGVzLCBlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsdWVPckhhbmRsZXIoY29uZmlnLmFsbG93T3V0c2lkZUNsaWNrLCBlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfTtcblxuICAvL1xuICAvLyBFVkVOVCBMSVNURU5FUlNcbiAgLy9cblxuICB2YXIgYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGhlcmUgY2FuIGJlIG9ubHkgb25lIGxpc3RlbmluZyBmb2N1cyB0cmFwIGF0IGEgdGltZVxuICAgIGFjdGl2ZUZvY3VzVHJhcHMuYWN0aXZhdGVUcmFwKHRyYXBTdGFjaywgdHJhcCk7XG5cbiAgICAvLyBEZWxheSBlbnN1cmVzIHRoYXQgdGhlIGZvY3VzZWQgZWxlbWVudCBkb2Vzbid0IGNhcHR1cmUgdGhlIGV2ZW50XG4gICAgLy8gdGhhdCBjYXVzZWQgdGhlIGZvY3VzIHRyYXAgYWN0aXZhdGlvbi5cbiAgICBzdGF0ZS5kZWxheUluaXRpYWxGb2N1c1RpbWVyID0gY29uZmlnLmRlbGF5SW5pdGlhbEZvY3VzID8gZGVsYXkoZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICB9KSA6IHRyeUZvY3VzKGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBjaGVja0ZvY3VzSW4sIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGVja1BvaW50ZXJEb3duLCB7XG4gICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoZWNrUG9pbnRlckRvd24sIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ2xpY2ssIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hlY2tLZXksIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIHJldHVybiB0cmFwO1xuICB9O1xuICB2YXIgcmVtb3ZlTGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgY2hlY2tGb2N1c0luLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NsaWNrLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoZWNrS2V5LCB0cnVlKTtcbiAgICByZXR1cm4gdHJhcDtcbiAgfTtcblxuICAvL1xuICAvLyBNVVRBVElPTiBPQlNFUlZFUlxuICAvL1xuXG4gIHZhciBjaGVja0RvbVJlbW92YWwgPSBmdW5jdGlvbiBjaGVja0RvbVJlbW92YWwobXV0YXRpb25zKSB7XG4gICAgdmFyIGlzRm9jdXNlZE5vZGVSZW1vdmVkID0gbXV0YXRpb25zLnNvbWUoZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICB2YXIgcmVtb3ZlZE5vZGVzID0gQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMpO1xuICAgICAgcmV0dXJuIHJlbW92ZWROb2Rlcy5zb21lKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiBub2RlID09PSBzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gSWYgdGhlIGN1cnJlbnRseSBmb2N1c2VkIGlzIHJlbW92ZWQgdGhlbiBicm93c2VycyB3aWxsIG1vdmUgZm9jdXMgdG8gdGhlXG4gICAgLy8gPGJvZHk+IGVsZW1lbnQuIElmIHRoaXMgaGFwcGVucywgdHJ5IHRvIG1vdmUgZm9jdXMgYmFjayBpbnRvIHRoZSB0cmFwLlxuICAgIGlmIChpc0ZvY3VzZWROb2RlUmVtb3ZlZCkge1xuICAgICAgdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVXNlIE11dGF0aW9uT2JzZXJ2ZXIgLSBpZiBzdXBwb3J0ZWQgLSB0byBkZXRlY3QgaWYgZm9jdXNlZCBub2RlIGlzIHJlbW92ZWRcbiAgLy8gZnJvbSB0aGUgRE9NLlxuICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cgPyBuZXcgTXV0YXRpb25PYnNlcnZlcihjaGVja0RvbVJlbW92YWwpIDogdW5kZWZpbmVkO1xuICB2YXIgdXBkYXRlT2JzZXJ2ZWROb2RlcyA9IGZ1bmN0aW9uIHVwZGF0ZU9ic2VydmVkTm9kZXMoKSB7XG4gICAgaWYgKCFtdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIGlmIChzdGF0ZS5hY3RpdmUgJiYgIXN0YXRlLnBhdXNlZCkge1xuICAgICAgc3RhdGUuY29udGFpbmVycy5tYXAoZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoY29udGFpbmVyLCB7XG4gICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICBjaGlsZExpc3Q6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy9cbiAgLy8gVFJBUCBERUZJTklUSU9OXG4gIC8vXG5cbiAgdHJhcCA9IHtcbiAgICBnZXQgYWN0aXZlKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLmFjdGl2ZTtcbiAgICB9LFxuICAgIGdldCBwYXVzZWQoKSB7XG4gICAgICByZXR1cm4gc3RhdGUucGF1c2VkO1xuICAgIH0sXG4gICAgYWN0aXZhdGU6IGZ1bmN0aW9uIGFjdGl2YXRlKGFjdGl2YXRlT3B0aW9ucykge1xuICAgICAgaWYgKHN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBvbkFjdGl2YXRlID0gZ2V0T3B0aW9uKGFjdGl2YXRlT3B0aW9ucywgJ29uQWN0aXZhdGUnKTtcbiAgICAgIHZhciBvblBvc3RBY3RpdmF0ZSA9IGdldE9wdGlvbihhY3RpdmF0ZU9wdGlvbnMsICdvblBvc3RBY3RpdmF0ZScpO1xuICAgICAgdmFyIGNoZWNrQ2FuRm9jdXNUcmFwID0gZ2V0T3B0aW9uKGFjdGl2YXRlT3B0aW9ucywgJ2NoZWNrQ2FuRm9jdXNUcmFwJyk7XG4gICAgICBpZiAoIWNoZWNrQ2FuRm9jdXNUcmFwKSB7XG4gICAgICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICAgIH1cbiAgICAgIHN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgIHN0YXRlLm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbiA9IGRvYy5hY3RpdmVFbGVtZW50O1xuICAgICAgb25BY3RpdmF0ZSA9PT0gbnVsbCB8fCBvbkFjdGl2YXRlID09PSB2b2lkIDAgfHwgb25BY3RpdmF0ZSgpO1xuICAgICAgdmFyIGZpbmlzaEFjdGl2YXRpb24gPSBmdW5jdGlvbiBmaW5pc2hBY3RpdmF0aW9uKCkge1xuICAgICAgICBpZiAoY2hlY2tDYW5Gb2N1c1RyYXApIHtcbiAgICAgICAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgICAgIHVwZGF0ZU9ic2VydmVkTm9kZXMoKTtcbiAgICAgICAgb25Qb3N0QWN0aXZhdGUgPT09IG51bGwgfHwgb25Qb3N0QWN0aXZhdGUgPT09IHZvaWQgMCB8fCBvblBvc3RBY3RpdmF0ZSgpO1xuICAgICAgfTtcbiAgICAgIGlmIChjaGVja0NhbkZvY3VzVHJhcCkge1xuICAgICAgICBjaGVja0NhbkZvY3VzVHJhcChzdGF0ZS5jb250YWluZXJzLmNvbmNhdCgpKS50aGVuKGZpbmlzaEFjdGl2YXRpb24sIGZpbmlzaEFjdGl2YXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGZpbmlzaEFjdGl2YXRpb24oKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24gZGVhY3RpdmF0ZShkZWFjdGl2YXRlT3B0aW9ucykge1xuICAgICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB2YXIgb3B0aW9ucyA9IF9vYmplY3RTcHJlYWQyKHtcbiAgICAgICAgb25EZWFjdGl2YXRlOiBjb25maWcub25EZWFjdGl2YXRlLFxuICAgICAgICBvblBvc3REZWFjdGl2YXRlOiBjb25maWcub25Qb3N0RGVhY3RpdmF0ZSxcbiAgICAgICAgY2hlY2tDYW5SZXR1cm5Gb2N1czogY29uZmlnLmNoZWNrQ2FuUmV0dXJuRm9jdXNcbiAgICAgIH0sIGRlYWN0aXZhdGVPcHRpb25zKTtcbiAgICAgIGNsZWFyVGltZW91dChzdGF0ZS5kZWxheUluaXRpYWxGb2N1c1RpbWVyKTsgLy8gbm9vcCBpZiB1bmRlZmluZWRcbiAgICAgIHN0YXRlLmRlbGF5SW5pdGlhbEZvY3VzVGltZXIgPSB1bmRlZmluZWQ7XG4gICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIHN0YXRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgICB1cGRhdGVPYnNlcnZlZE5vZGVzKCk7XG4gICAgICBhY3RpdmVGb2N1c1RyYXBzLmRlYWN0aXZhdGVUcmFwKHRyYXBTdGFjaywgdHJhcCk7XG4gICAgICB2YXIgb25EZWFjdGl2YXRlID0gZ2V0T3B0aW9uKG9wdGlvbnMsICdvbkRlYWN0aXZhdGUnKTtcbiAgICAgIHZhciBvblBvc3REZWFjdGl2YXRlID0gZ2V0T3B0aW9uKG9wdGlvbnMsICdvblBvc3REZWFjdGl2YXRlJyk7XG4gICAgICB2YXIgY2hlY2tDYW5SZXR1cm5Gb2N1cyA9IGdldE9wdGlvbihvcHRpb25zLCAnY2hlY2tDYW5SZXR1cm5Gb2N1cycpO1xuICAgICAgdmFyIHJldHVybkZvY3VzID0gZ2V0T3B0aW9uKG9wdGlvbnMsICdyZXR1cm5Gb2N1cycsICdyZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZScpO1xuICAgICAgb25EZWFjdGl2YXRlID09PSBudWxsIHx8IG9uRGVhY3RpdmF0ZSA9PT0gdm9pZCAwIHx8IG9uRGVhY3RpdmF0ZSgpO1xuICAgICAgdmFyIGZpbmlzaERlYWN0aXZhdGlvbiA9IGZ1bmN0aW9uIGZpbmlzaERlYWN0aXZhdGlvbigpIHtcbiAgICAgICAgZGVsYXkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChyZXR1cm5Gb2N1cykge1xuICAgICAgICAgICAgdHJ5Rm9jdXMoZ2V0UmV0dXJuRm9jdXNOb2RlKHN0YXRlLm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvblBvc3REZWFjdGl2YXRlID09PSBudWxsIHx8IG9uUG9zdERlYWN0aXZhdGUgPT09IHZvaWQgMCB8fCBvblBvc3REZWFjdGl2YXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGlmIChyZXR1cm5Gb2N1cyAmJiBjaGVja0NhblJldHVybkZvY3VzKSB7XG4gICAgICAgIGNoZWNrQ2FuUmV0dXJuRm9jdXMoZ2V0UmV0dXJuRm9jdXNOb2RlKHN0YXRlLm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbikpLnRoZW4oZmluaXNoRGVhY3RpdmF0aW9uLCBmaW5pc2hEZWFjdGl2YXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGZpbmlzaERlYWN0aXZhdGlvbigpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBwYXVzZTogZnVuY3Rpb24gcGF1c2UocGF1c2VPcHRpb25zKSB7XG4gICAgICBpZiAoc3RhdGUucGF1c2VkIHx8ICFzdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB2YXIgb25QYXVzZSA9IGdldE9wdGlvbihwYXVzZU9wdGlvbnMsICdvblBhdXNlJyk7XG4gICAgICB2YXIgb25Qb3N0UGF1c2UgPSBnZXRPcHRpb24ocGF1c2VPcHRpb25zLCAnb25Qb3N0UGF1c2UnKTtcbiAgICAgIHN0YXRlLnBhdXNlZCA9IHRydWU7XG4gICAgICBvblBhdXNlID09PSBudWxsIHx8IG9uUGF1c2UgPT09IHZvaWQgMCB8fCBvblBhdXNlKCk7XG4gICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIHVwZGF0ZU9ic2VydmVkTm9kZXMoKTtcbiAgICAgIG9uUG9zdFBhdXNlID09PSBudWxsIHx8IG9uUG9zdFBhdXNlID09PSB2b2lkIDAgfHwgb25Qb3N0UGF1c2UoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgdW5wYXVzZTogZnVuY3Rpb24gdW5wYXVzZSh1bnBhdXNlT3B0aW9ucykge1xuICAgICAgaWYgKCFzdGF0ZS5wYXVzZWQgfHwgIXN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBvblVucGF1c2UgPSBnZXRPcHRpb24odW5wYXVzZU9wdGlvbnMsICdvblVucGF1c2UnKTtcbiAgICAgIHZhciBvblBvc3RVbnBhdXNlID0gZ2V0T3B0aW9uKHVucGF1c2VPcHRpb25zLCAnb25Qb3N0VW5wYXVzZScpO1xuICAgICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgICBvblVucGF1c2UgPT09IG51bGwgfHwgb25VbnBhdXNlID09PSB2b2lkIDAgfHwgb25VbnBhdXNlKCk7XG4gICAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG4gICAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgICAgIHVwZGF0ZU9ic2VydmVkTm9kZXMoKTtcbiAgICAgIG9uUG9zdFVucGF1c2UgPT09IG51bGwgfHwgb25Qb3N0VW5wYXVzZSA9PT0gdm9pZCAwIHx8IG9uUG9zdFVucGF1c2UoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgdXBkYXRlQ29udGFpbmVyRWxlbWVudHM6IGZ1bmN0aW9uIHVwZGF0ZUNvbnRhaW5lckVsZW1lbnRzKGNvbnRhaW5lckVsZW1lbnRzKSB7XG4gICAgICB2YXIgZWxlbWVudHNBc0FycmF5ID0gW10uY29uY2F0KGNvbnRhaW5lckVsZW1lbnRzKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICBzdGF0ZS5jb250YWluZXJzID0gZWxlbWVudHNBc0FycmF5Lm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnID8gZG9jLnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkgOiBlbGVtZW50O1xuICAgICAgfSk7XG4gICAgICBpZiAoc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZU9ic2VydmVkTm9kZXMoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfTtcblxuICAvLyBpbml0aWFsaXplIGNvbnRhaW5lciBlbGVtZW50c1xuICB0cmFwLnVwZGF0ZUNvbnRhaW5lckVsZW1lbnRzKGVsZW1lbnRzKTtcbiAgcmV0dXJuIHRyYXA7XG59O1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGFsbG93cyBjdXN0b20gY29uZmlndXJhdGlvbiBmb3IgY29tcG9uZW50cy5cbiAqL1xuY29uc3QgY3VzdG9tQ29uZmlnID0gZ2xvYmFsVGhpc1tcImNhbGNpdGVDb25maWdcIl07XG5jb25zdCBmb2N1c1RyYXBTdGFjayA9IGN1c3RvbUNvbmZpZz8uZm9jdXNUcmFwU3RhY2sgfHwgW107XG5cbi8qKlxuICogSGVscGVyIHRvIHNldCB1cCB0aGUgRm9jdXNUcmFwIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge0ZvY3VzVHJhcENvbXBvbmVudH0gY29tcG9uZW50IFRoZSBGb2N1c1RyYXAgY29tcG9uZW50LlxuICogQHBhcmFtIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gY29ubmVjdEZvY3VzVHJhcChjb21wb25lbnQsIG9wdGlvbnMpIHtcbiAgY29uc3QgeyBlbCB9ID0gY29tcG9uZW50O1xuICBjb25zdCBmb2N1c1RyYXBOb2RlID0gb3B0aW9ucz8uZm9jdXNUcmFwRWwgfHwgZWw7XG4gIGlmICghZm9jdXNUcmFwTm9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBmb2N1c1RyYXBPcHRpb25zID0ge1xuICAgIGNsaWNrT3V0c2lkZURlYWN0aXZhdGVzOiB0cnVlLFxuICAgIGVzY2FwZURlYWN0aXZhdGVzOiBmYWxzZSxcbiAgICBmYWxsYmFja0ZvY3VzOiBmb2N1c1RyYXBOb2RlLFxuICAgIHNldFJldHVybkZvY3VzOiAoZWwpID0+IHtcbiAgICAgIGZvY3VzRWxlbWVudChlbCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICAuLi5vcHRpb25zPy5mb2N1c1RyYXBPcHRpb25zLFxuICAgIC8vIHRoZSBmb2xsb3dpbmcgb3B0aW9ucyBhcmUgbm90IG92ZXJyaWRhYmxlXG4gICAgZG9jdW1lbnQ6IGVsLm93bmVyRG9jdW1lbnQsXG4gICAgdGFiYmFibGVPcHRpb25zLFxuICAgIHRyYXBTdGFjazogZm9jdXNUcmFwU3RhY2ssXG4gIH07XG4gIGNvbXBvbmVudC5mb2N1c1RyYXAgPSBjcmVhdGVGb2N1c1RyYXAoZm9jdXNUcmFwTm9kZSwgZm9jdXNUcmFwT3B0aW9ucyk7XG59XG4vKipcbiAqIEhlbHBlciB0byBhY3RpdmF0ZSB0aGUgRm9jdXNUcmFwIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge0ZvY3VzVHJhcENvbXBvbmVudH0gY29tcG9uZW50IFRoZSBGb2N1c1RyYXAgY29tcG9uZW50LlxuICogQHBhcmFtIFtvcHRpb25zXSBUaGUgRm9jdXNUcmFwIGFjdGl2YXRlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGFjdGl2YXRlRm9jdXNUcmFwKGNvbXBvbmVudCwgb3B0aW9ucykge1xuICBpZiAoIWNvbXBvbmVudC5mb2N1c1RyYXBEaXNhYmxlZCkge1xuICAgIGNvbXBvbmVudC5mb2N1c1RyYXA/LmFjdGl2YXRlKG9wdGlvbnMpO1xuICB9XG59XG4vKipcbiAqIEhlbHBlciB0byBkZWFjdGl2YXRlIHRoZSBGb2N1c1RyYXAgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7Rm9jdXNUcmFwQ29tcG9uZW50fSBjb21wb25lbnQgVGhlIEZvY3VzVHJhcCBjb21wb25lbnQuXG4gKiBAcGFyYW0gW29wdGlvbnNdIFRoZSBGb2N1c1RyYXAgZGVhY3RpdmF0ZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBkZWFjdGl2YXRlRm9jdXNUcmFwKGNvbXBvbmVudCwgb3B0aW9ucykge1xuICBjb21wb25lbnQuZm9jdXNUcmFwPy5kZWFjdGl2YXRlKG9wdGlvbnMpO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gdXBkYXRlIHRoZSBlbGVtZW50KHMpIHRoYXQgYXJlIHVzZWQgd2l0aGluIHRoZSBGb2N1c1RyYXAgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7Rm9jdXNUcmFwQ29tcG9uZW50fSBjb21wb25lbnQgVGhlIEZvY3VzVHJhcCBjb21wb25lbnQuXG4gKiBAZXhhbXBsZVxuICogY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FsY2l0ZS1tb2RhbFwiKTtcbiAqIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbGNpdGUtaW5wdXRcIik7XG4gKiBjb250ZW50LmFwcGVuZENoaWxkKGlucHV0KTtcbiAqIGF3YWl0IGlucHV0LmNvbXBvbmVudE9uUmVhZHkoKTtcbiAqIGF3YWl0IG1vZGFsLnVwZGF0ZUZvY3VzVHJhcEVsZW1lbnRzKCk7XG4gKiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gaW5wdXQuc2V0Rm9jdXMoKSk7XG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUZvY3VzVHJhcEVsZW1lbnRzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZm9jdXNUcmFwPy51cGRhdGVDb250YWluZXJFbGVtZW50cyhjb21wb25lbnQuZWwpO1xufVxuXG5leHBvcnQgeyBhY3RpdmF0ZUZvY3VzVHJhcCBhcyBhLCBjb25uZWN0Rm9jdXNUcmFwIGFzIGMsIGRlYWN0aXZhdGVGb2N1c1RyYXAgYXMgZCwgdXBkYXRlRm9jdXNUcmFwRWxlbWVudHMgYXMgdSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9