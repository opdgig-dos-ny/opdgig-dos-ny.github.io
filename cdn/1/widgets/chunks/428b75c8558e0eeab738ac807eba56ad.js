"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_dom_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/dom.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/dom.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ focusable),
/* harmony export */   B: () => (/* binding */ isTabbable),
/* harmony export */   C: () => (/* binding */ CSS_UTILITY),
/* harmony export */   D: () => (/* binding */ getTabIndex),
/* harmony export */   E: () => (/* binding */ isFocusable),
/* harmony export */   F: () => (/* binding */ tabbableOptions),
/* harmony export */   a: () => (/* binding */ autoMode),
/* harmony export */   b: () => (/* binding */ getElementDir),
/* harmony export */   c: () => (/* binding */ closestElementCrossShadowBoundary),
/* harmony export */   d: () => (/* binding */ darkMode),
/* harmony export */   e: () => (/* binding */ slotChangeHasAssignedElement),
/* harmony export */   f: () => (/* binding */ focusFirstTabbable),
/* harmony export */   g: () => (/* binding */ getSlotted),
/* harmony export */   h: () => (/* binding */ setRequestedIcon),
/* harmony export */   i: () => (/* binding */ focusElementInGroup),
/* harmony export */   j: () => (/* binding */ isPrimaryPointerButton),
/* harmony export */   k: () => (/* binding */ focusElement),
/* harmony export */   l: () => (/* binding */ intersects),
/* harmony export */   m: () => (/* binding */ ensureId),
/* harmony export */   n: () => (/* binding */ getShadowRootNode),
/* harmony export */   o: () => (/* binding */ nodeListToArray),
/* harmony export */   p: () => (/* binding */ filterDirectChildren),
/* harmony export */   q: () => (/* binding */ queryElementRoots),
/* harmony export */   r: () => (/* binding */ getModeName),
/* harmony export */   s: () => (/* binding */ slotChangeGetAssignedElements),
/* harmony export */   t: () => (/* binding */ toAriaBoolean),
/* harmony export */   u: () => (/* binding */ getElementWidth),
/* harmony export */   v: () => (/* binding */ getTextWidth),
/* harmony export */   w: () => (/* binding */ slotChangeHasContent),
/* harmony export */   x: () => (/* binding */ containsCrossShadowBoundary),
/* harmony export */   y: () => (/* binding */ isBefore),
/* harmony export */   z: () => (/* binding */ tabbable)
/* harmony export */ });
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const autoMode = "calcite-mode-auto";
const darkMode = "calcite-mode-dark";
const lightMode = "calcite-mode-light";
const CSS_UTILITY = {
  autoMode,
  darkMode,
  lightMode,
  rtl: "calcite--rtl",
  calciteAnimate: "calcite-animate",
  calciteAnimateIn: "calcite-animate__in",
  calciteAnimateInUp: "calcite-animate__in-up",
  calciteAnimateInDown: "calcite-animate__in-down",
  calciteAnimateInRight: "calcite-animate__in-right",
  calciteAnimateInLeft: "calcite-animate__in-left",
  calciteAnimateInScale: "calcite-animate__in-scale",
};

/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
// NOTE: separate `:not()` selectors has broader browser support than the newer
//  `:not([inert], [inert] *)` (Feb 2023)
// CAREFUL: JSDom does not support `:not([inert] *)` as a selector; using it causes
//  the entire query to fail, resulting in no nodes found, which will break a lot
//  of things... so we have to rely on JS to identify nodes inside an inert container
var candidateSelectors = ['input:not([inert])', 'select:not([inert])', 'textarea:not([inert])', 'a[href]:not([inert])', 'button:not([inert])', '[tabindex]:not(slot):not([inert])', 'audio[controls]:not([inert])', 'video[controls]:not([inert])', '[contenteditable]:not([contenteditable="false"]):not([inert])', 'details>summary:first-of-type:not([inert])', 'details:not([inert])'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode$1 = !NoElement && Element.prototype.getRootNode ? function (element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function (element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};

/**
 * Determines if a node is inert or in an inert ancestor.
 * @param {Element} [node]
 * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
 *  see if any of them are inert. If false, only `node` itself is considered.
 * @returns {boolean} True if inert itself or by way of being in an inert ancestor.
 *  False if `node` is falsy.
 */
var isInert = function isInert(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  // CAREFUL: JSDom does not support inert at all, so we can't use the `HTMLElement.inert`
  //  JS API property; we have to check the attribute, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's an active element
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, 'inert');
  var inert = inertAtt === '' || inertAtt === 'true';

  // NOTE: this could also be handled with `node.matches('[inert], :is([inert] *)')`
  //  if it weren't for `matches()` not being a function on shadow roots; the following
  //  code works for any kind of node
  // CAREFUL: JSDom does not appear to support certain selectors like `:not([inert] *)`
  //  so it likely would not support `:is([inert] *)` either...
  var result = inert || lookUp && node && isInert(node.parentNode); // recursive

  return result;
};

/**
 * Determines if a node's content is editable.
 * @param {Element} [node]
 * @returns True if it's content-editable; false if it's not or `node` is falsy.
 */
var isContentEditable = function isContentEditable(node) {
  var _node$getAttribute2;
  // CAREFUL: JSDom does not support the `HTMLElement.isContentEditable` API so we have
  //  to use the attribute directly to check for this, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's a non-editable element
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, 'contenteditable');
  return attValue === '' || attValue === 'true';
};

/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */
var getCandidates = function getCandidates(el, includeContainer, filter) {
  // even if `includeContainer=false`, we still have to check it for inertness because
  //  if it's inert, all its children are inert
  if (isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};

/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */

/**
 * @callback ShadowRootFilter
 * @param {Element} shadowHostNode the element which contains shadow content
 * @returns {boolean} true if a shadow root could potentially contain valid candidates.
 */

/**
 * @typedef {Object} CandidateScope
 * @property {Element} scopeParent contains inner candidates
 * @property {Element[]} candidates list of candidates found in the scope parent
 */

/**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
 * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
 */

/**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidateScope>}
 */
var getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (isInert(element, false)) {
      // no need to look up since we're drilling down
      // anything inside this container will also be inert
      continue;
    }
    if (element.tagName === 'SLOT') {
      // add shadow dom slot scope (slot itself cannot be focusable)
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      // check candidate element
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }

      // iterate over shadow content if possible
      var shadowRoot = element.shadowRoot ||
      // check for an undisclosed shadow
      typeof options.getShadowRoot === 'function' && options.getShadowRoot(element);

      // no inert look up because we're already drilling down and checking for inertness
      //  on the way down, so all containers to this root node should have already been
      //  vetted as non-inert
      var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
        //  shadow exists, so look at light dom children as fallback BUT create a scope for any
        //  child candidates found because they're likely slotted elements (elements that are
        //  children of the web component element (which has the shadow), in the light dom, but
        //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
        //  _after_ we return from this recursive call
        var _nestedCandidates = getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        // there's not shadow so just dig into the element's (light dom) children
        //  __without__ giving the element special scope treatment
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};

/**
 * @private
 * Determines if the node has an explicitly specified `tabindex` attribute.
 * @param {HTMLElement} node
 * @returns {boolean} True if so; false if not.
 */
var hasTabIndex = function hasTabIndex(node) {
  return !isNaN(parseInt(node.getAttribute('tabindex'), 10));
};

/**
 * Determine the tab index of a given node.
 * @param {HTMLElement} node
 * @returns {number} Tab order (negative, 0, or positive number).
 * @throws {Error} If `node` is falsy.
 */
var getTabIndex = function getTabIndex(node) {
  if (!node) {
    throw new Error('No node provided');
  }
  if (node.tabIndex < 0) {
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    // yet they are still part of the regular tab order; in FF, they get a default
    // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    // order, consider their tab index to be 0.
    // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};

/**
 * Determine the tab index of a given node __for sort order purposes__.
 * @param {HTMLElement} node
 * @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
 *  has tabIndex -1, but needs to be sorted by document order in order for its content to be
 *  inserted into the correct sort position.
 * @returns {number} Tab order (negative, 0, or positive number).
 */
var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};
var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode$1(node);
  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

// determines if a node is ultimately attached to the window's document
var isNodeAttached = function isNodeAttached(node) {
  var _nodeRoot;
  // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
  //  (but NOT _the_ document; see second 'If' comment below for more).
  // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
  //  is attached, and the one we need to check if it's in the document or not (because the
  //  shadow, and all nodes it contains, is never considered in the document since shadows
  //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
  //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
  //  visibility, including all the nodes it contains). The host could be any normal node,
  //  or a custom element (i.e. web component). Either way, that's the one that is considered
  //  part of the document, not the shadow root, nor any of its children (i.e. the node being
  //  tested).
  // To further complicate things, we have to look all the way up until we find a shadow HOST
  //  that is attached (or find none) because the node might be in nested shadows...
  // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
  //  document (per the docs) and while it's a Document-type object, that document does not
  //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
  //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
  //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
  //  node is actually detached.
  // NOTE: If `nodeRootHost` or `node` happens to be the `document` itself (which is possible
  //  if a tabbable/focusable node was quickly added to the DOM, focused, and then removed
  //  from the DOM as in https://github.com/focus-trap/focus-trap-react/issues/905), then
  //  `ownerDocument` will be `null`, hence the optional chaining on it.
  var nodeRoot = node && getRootNode$1(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;

  // in some cases, a detached node will return itself as the root instead of a document or
  //  shadow root object, in which case, we shouldn't try to look further up the host chain
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      // since it's not attached and we have a root host, the node MUST be in a nested shadow DOM,
      //  which means we need to get the host's host and check if that parent host is contained
      //  in (i.e. attached to) the document
      nodeRoot = getRootNode$1(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
    width = _node$getBoundingClie.width,
    height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
  var displayCheck = _ref.displayCheck,
    getShadowRoot = _ref.getShadowRoot;
  // NOTE: visibility will be `undefined` if node is detached from the document
  //  (see notes about this further down), which means we will consider it visible
  //  (this is legacy behavior from a very long way back)
  // NOTE: we check this regardless of `displayCheck="none"` because this is a
  //  _visibility_ check, not a _display_ check
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }
  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }
  if (!displayCheck || displayCheck === 'full' || displayCheck === 'legacy-full') {
    if (typeof getShadowRoot === 'function') {
      // figure out if we should consider the node to be in an undisclosed shadow and use the
      //  'non-zero-area' fallback
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode$1(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
        ) {
          // node has an undisclosed shadow which means we can only treat it as a black box, so we
          //  fall back to a non-zero-area test
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          // iterate up slot
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          // cross shadow boundary
          node = rootNode.host;
        } else {
          // iterate up normal dom
          node = parentElement;
        }
      }
      node = originalNode;
    }
    // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
    //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
    //  it might be a falsy value, which means shadow DOM support is disabled

    // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
    //  now we can just test to see if it would normally be visible or not, provided it's
    //  attached to the main document.
    // NOTE: We must consider case where node is inside a shadow DOM and given directly to
    //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.

    if (isNodeAttached(node)) {
      // this works wherever the node is: if there's at least one client rect, it's
      //  somehow displayed; it also covers the CSS 'display: contents' case where the
      //  node itself is hidden in place of its contents; and there's no need to search
      //  up the hierarchy either
      return !node.getClientRects().length;
    }

    // Else, the node isn't attached to the document, which means the `getClientRects()`
    //  API will __always__ return zero rects (this can happen, for example, if React
    //  is used to render nodes onto a detached tree, as confirmed in this thread:
    //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
    //
    // It also means that even window.getComputedStyle(node).display will return `undefined`
    //  because styles are only computed for nodes that are in the document.
    //
    // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
    //  somehow. Though it was never stated officially, anyone who has ever used tabbable
    //  APIs on nodes in detached containers has actually implicitly used tabbable in what
    //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
    //  considering __everything__ to be visible because of the innability to determine styles.
    //
    // v6.0.0: As of this major release, the default 'full' option __no longer treats detached
    //  nodes as visible with the 'none' fallback.__
    if (displayCheck !== 'legacy-full') {
      return true; // hidden
    }
    // else, fallback to 'none' mode and consider the node visible
  } else if (displayCheck === 'non-zero-area') {
    // NOTE: Even though this tests that the node's client rect is non-zero to determine
    //  whether it's displayed, and that a detached node will __always__ have a zero-area
    //  client rect, we don't special-case for whether the node is attached or not. In
    //  this mode, we do want to consider nodes that have a zero area to be hidden at all
    //  times, and that includes attached or not.
    return isZeroArea(node);
  }

  // visible, as far as we can tell, or per current `displayCheck=none` mode, we assume
  //  it's visible
  return false;
};

// form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    // check if `node` is contained in a disabled <fieldset>
    while (parentNode) {
      if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
        // look for the first <legend> among the children of the disabled <fieldset>
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          // when the first <legend> (in document order) is found
          if (child.tagName === 'LEGEND') {
            // if its parent <fieldset> is not nested in another disabled <fieldset>,
            // return whether `node` is a descendant of its first <legend>
            return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
          }
        }
        // the disabled <fieldset> containing `node` has no <legend>
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }

  // else, node's tabbable/focusable state should not be affected by a fieldset's
  //  enabled/disabled state
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
  if (node.disabled ||
  // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) ||
  // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute('tabindex'), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  // If a custom element has an explicit negative tabindex,
  // browsers will not allow tab targeting said element's children.
  return false;
};

/**
 * @param {Array.<Element|CandidateScope>} candidates
 * @returns Element[]
 */
var sortByOrder = function sortByOrder(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function (item, i) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element, isScope);
    var elements = isScope ? sortByOrder(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item: item,
        isScope: isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function (acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var focusable = function focusable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');
var isFocusable = function isFocusable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};

/**
 * The default `focus-trap/tabbable` options.
 *
 * See https://github.com/focus-trap/tabbable#tabbable
 */
const tabbableOptions = {
  getShadowRoot: true,
};
/**
 * This helper will guarantee an ID on the provided element.
 *
 * If it already has an ID, it will be preserved, otherwise a unique one will be generated and assigned.
 *
 * @param {Element} el An element.
 * @returns {string} The element's ID.
 */
function ensureId(el) {
  if (!el) {
    return "";
  }
  return (el.id = el.id || `${el.tagName.toLowerCase()}-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_0__.g)()}`);
}
/**
 * This helper returns an array from a NodeList.
 *
 * @param {NodeList} nodeList A NodeList.
 * @returns {Element[]} An array of elements.
 */
function nodeListToArray(nodeList) {
  return Array.isArray(nodeList) ? nodeList : Array.from(nodeList);
}
/**
 * This helper returns the Calcite "mode" of an element.
 *
 * @param {HTMLElement} el An element.
 * @returns {"light"|"dark"} The Calcite mode.
 */
function getModeName(el) {
  const closestElWithMode = closestElementCrossShadowBoundary(el, `.${CSS_UTILITY.darkMode}, .${CSS_UTILITY.lightMode}`);
  return closestElWithMode?.classList.contains("calcite-mode-dark") ? "dark" : "light";
}
/**
 * This helper returns the direction of a HTML element.
 *
 * @param {HTMLElement} el An element.
 * @returns {Direction} The direction.
 */
function getElementDir(el) {
  const prop = "dir";
  const selector = `[${prop}]`;
  const closest = closestElementCrossShadowBoundary(el, selector);
  return closest ? closest.getAttribute(prop) : "ltr";
}
/**
 * This helper returns the computed width in pixels of a rendered HTMLElement.
 *
 * @param {HTMLElement} el An element.
 * @returns {number} The element's width.
 */
function getElementWidth(el) {
  if (!el) {
    return 0;
  }
  return parseFloat(getComputedStyle(el).inlineSize);
}
/**
 * This helper returns the rootNode of an element.
 *
 * @param {Element} el An element.
 * @returns {Document|ShadowRoot} The element's root node.
 */
function getRootNode(el) {
  return el.getRootNode();
}
/**
 * This helper returns the node's shadowRoot root node if it exists.
 *
 * @param {Element} el The element.
 * @returns {ShadowRoot|null} The element's root node ShadowRoot.
 */
function getShadowRootNode(el) {
  const rootNode = getRootNode(el);
  return "host" in rootNode ? rootNode : null;
}
/**
 * This helper returns the computed width in pixels a given text string takes up on screen.
 *
 * See https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript
 *
 * @param {string} text The string of text to measure.
 * @param {string} font The CSS font attribute's value, which should include size and face, e.g. "12px Arial".
 */
function getTextWidth(text, font) {
  if (!text) {
    return 0;
  }
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  return context.measureText(text).width;
}
/**
 * This helper returns the host of a ShadowRoot.
 *
 * @param {Document | ShadowRoot} root A root element.
 * @returns {Element | null} The host element.
 */
function getHost(root) {
  return root.host || null;
}
/**
 * This helper queries an element's rootNode and any ancestor rootNodes.
 *
 * If both an 'id' and 'selector' are supplied, 'id' will take precedence over 'selector'.
 *
 * @param {Element} element An element.
 * @param root0
 * @param root0.selector
 * @param root0.id
 * @returns {Element} An element.
 */
function queryElementRoots(element, { selector, id, }) {
  // Gets the rootNode and any ancestor rootNodes (shadowRoot or document) of an element and queries them for a selector.
  // Based on: https://stackoverflow.com/q/54520554/194216
  function queryFrom(el) {
    if (!el) {
      return null;
    }
    if (el.assignedSlot) {
      el = el.assignedSlot;
    }
    const rootNode = getRootNode(el);
    const found = id
      ? "getElementById" in rootNode
        ? /*
          Check to make sure 'getElementById' exists in cases where element is no longer connected to the DOM and getRootNode() returns the element.
          https://github.com/Esri/calcite-design-system/pull/4280
           */
          rootNode.getElementById(id)
        : null
      : selector
        ? rootNode.querySelector(selector)
        : null;
    const host = getHost(rootNode);
    return found ? found : host ? queryFrom(host) : null;
  }
  return queryFrom(element);
}
/**
 * This helper returns the closest element matching the selector by crossing he shadow boundary if necessary.
 *
 * @param {Element} element The starting element.
 * @param {string} selector The selector.
 * @returns {Element} The targeted element.
 */
function closestElementCrossShadowBoundary(element, selector) {
  // based on https://stackoverflow.com/q/54520554/194216
  function closestFrom(el) {
    return el ? el.closest(selector) || closestFrom(getHost(getRootNode(el))) : null;
  }
  return closestFrom(element);
}
/**
 * This utility helps invoke a callback as it traverses a node and its ancestors until reaching the root document.
 *
 * Returning early or undefined in `onVisit` will continue traversing up the DOM tree. Otherwise, traversal will halt with the returned value as the result of the function
 *
 * @param {Element} element An element.
 * @param {(node: Node) => Element} onVisit The callback.
 * @returns {Element} The result.
 */
function walkUpAncestry(element, onVisit) {
  return visit(element, onVisit);
}
function visit(node, onVisit) {
  if (!node) {
    return;
  }
  const result = onVisit(node);
  if (result !== undefined) {
    return result;
  }
  const { parentNode } = node;
  return visit(parentNode instanceof ShadowRoot ? parentNode.host : parentNode, onVisit);
}
/**
 * This helper returns true when an element has the descendant in question.
 *
 * @param {Element} element The starting element.
 * @param {Element} maybeDescendant The descendant.
 * @returns {boolean} The result.
 */
function containsCrossShadowBoundary(element, maybeDescendant) {
  return !!walkUpAncestry(maybeDescendant, (node) => (node === element ? true : undefined));
}
/**
 * This helper returns true when an element has a setFocus method.
 *
 * @param {Element} el An element.
 * @returns {boolean} The result.
 */
function isCalciteFocusable(el) {
  return typeof el?.setFocus === "function";
}
/**
 * This helper focuses an element using the `setFocus` method if available and falls back to using the `focus` method if not available.
 *
 * @param {Element} el An element.
 */
async function focusElement(el) {
  if (!el) {
    return;
  }
  return isCalciteFocusable(el) ? el.setFocus() : el.focus();
}
/**
 * Helper to focus the first tabbable element.
 *
 * @param {HTMLElement} element The html element containing tabbable elements.
 */
function focusFirstTabbable(element) {
  if (!element) {
    return;
  }
  (tabbable(element, tabbableOptions)[0] || element).focus();
}
const defaultSlotSelector = ":not([slot])";
function getSlotted(element, slotName, options) {
  if (slotName && !Array.isArray(slotName) && typeof slotName !== "string") {
    options = slotName;
    slotName = null;
  }
  const slotSelector = slotName
    ? Array.isArray(slotName)
      ? slotName.map((name) => `[slot="${name}"]`).join(",")
      : `[slot="${slotName}"]`
    : defaultSlotSelector;
  if (options?.all) {
    return queryMultiple(element, slotSelector, options);
  }
  return querySingle(element, slotSelector, options);
}
function getDirectChildren(el, selector) {
  return el ? Array.from(el.children || []).filter((child) => child?.matches(selector)) : [];
}
function queryMultiple(element, slotSelector, options) {
  let matches = slotSelector === defaultSlotSelector
    ? getDirectChildren(element, defaultSlotSelector)
    : Array.from(element.querySelectorAll(slotSelector));
  matches = options && options.direct === false ? matches : matches.filter((el) => el.parentElement === element);
  matches = options?.matches ? matches.filter((el) => el?.matches(options.matches)) : matches;
  const selector = options?.selector;
  return selector
    ? matches
      .map((item) => Array.from(item.querySelectorAll(selector)))
      .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], [])
      .filter((match) => !!match)
    : matches;
}
function querySingle(element, slotSelector, options) {
  let match = slotSelector === defaultSlotSelector
    ? getDirectChildren(element, defaultSlotSelector)[0] || null
    : element.querySelector(slotSelector);
  match = options && options.direct === false ? match : match?.parentElement === element ? match : null;
  match = options?.matches ? (match?.matches(options.matches) ? match : null) : match;
  const selector = options?.selector;
  return selector ? match?.querySelector(selector) : match;
}
/**
 * Filters direct children.
 *
 * @param {Element} el An element.
 * @param {string} selector The selector.
 * @returns {Element[]} An array of elements.
 */
function filterDirectChildren(el, selector) {
  return Array.from(el.children).filter((child) => child.matches(selector));
}
/**
 * Set a default icon from a defined set or allow an override with an icon name string
 *
 * @param {Record<string, string>} iconObject The icon object.
 * @param {string | boolean} iconValue The icon value.
 * @param {string} matchedValue The matched value.
 * @returns {string|undefined} The resulting icon value.
 */
function setRequestedIcon(iconObject, iconValue, matchedValue) {
  if (typeof iconValue === "string" && iconValue !== "") {
    return iconValue;
  }
  else if (iconValue === "") {
    return iconObject[matchedValue];
  }
}
/**
 * This helper returns true when two rectangles intersect.
 *
 * @param {DOMRect} rect1 The first rectangle.
 * @param {DOMRect} rect2 The second rectangle.
 * @returns {boolean} The result.
 */
function intersects(rect1, rect2) {
  return !(rect2.left > rect1.right ||
    rect2.right < rect1.left ||
    rect2.top > rect1.bottom ||
    rect2.bottom < rect1.top);
}
/**
 * This helper makes sure that boolean aria attributes are properly converted to a string.
 *
 * It should only be used for aria attributes that require a string value of "true" or "false".
 *
 * @param {boolean} value The value.
 * @returns {string} The string conversion of a boolean value ("true" | "false").
 */
function toAriaBoolean(value) {
  return Boolean(value).toString();
}
/**
 * This helper returns `true` if the target `slot` element from the `onSlotchange` event has any content (text or elements).
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasContent = slotChangeHasContent(event)} />}
 * ```
 *
 * @param {Event} event The event.
 * @returns {boolean} Whether the slot has any content.
 */
function slotChangeHasContent(event) {
  return slotChangeHasAssignedElement(event) || slotChangeHasTextContent(event);
}
/**
 * This helper returns a string of textContent if the target `slot` element from the `onSlotchange` event has any text content.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotText = slotChangeGetTextContent(event)} />}
 * ```
 *
 * @param {Event} event The event.
 * @returns {string} The slots text.
 */
function slotChangeGetTextContent(event) {
  return slotChangeGetAssignedNodes(event)
    .filter((node) => node.nodeType === Node.TEXT_NODE)
    .map((node) => node.textContent)
    .join("")
    .trim();
}
/**
 * This helper returns `true` if the target `slot` element from the `onSlotchange` event has any text content.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasTextContent = slotChangeHasTextContent(event)} />}
 * ```
 *
 * @param {Event} event The event.
 * @returns {boolean} Whether the slot has any text content.
 */
function slotChangeHasTextContent(event) {
  return !!slotChangeGetTextContent(event);
}
/**
 * This helper returns the assigned nodes on a `slot` element from the `onSlotchange` event.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotNodes = slotChangeGetAssignedNodes(event)} />}
 * ```
 *
 * @param {Event} event The event.
 * @returns {boolean} Whether the slot has any assigned nodes.
 */
function slotChangeGetAssignedNodes(event) {
  return event.target.assignedNodes({
    flatten: true,
  });
}
/**
 * This helper returns `true` if the target `slot` element from the `onSlotchange` event has an assigned element.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 *
 * @param {Event} event The event.
 * @returns {boolean} Whether the slot has any assigned elements.
 */
function slotChangeHasAssignedElement(event) {
  return !!slotChangeGetAssignedElements(event).length;
}
/**
 * This helper returns the assigned elements on a `slot` element from the `onSlotchange` event.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotElements = slotChangeGetAssignedElements(event)} />}
 * ```
 *
 * @param {Event} event The event.
 * @returns {boolean} Whether the slot has any assigned elements.
 */
function slotChangeGetAssignedElements(event) {
  return event.target.assignedElements({
    flatten: true,
  });
}
/**
 * This helper returns true if the pointer event fired from the primary button of the device.
 *
 * See https://www.w3.org/TR/pointerevents/#the-button-property.
 *
 * @param {PointerEvent} event The pointer event.
 * @returns {boolean} The value.
 */
function isPrimaryPointerButton(event) {
  return !!(event.isPrimary && event.button === 0);
}
/**
 * This helper sets focus on and returns a destination element from within a group of provided elements.
 *
 * @param {Element[]} elements An array of elements.
 * @param {Element} currentElement The current element.
 * @param {FocusElementInGroupDestination} destination The target destination element to focus.
 * @param {boolean} cycle Should navigation cycle through elements or stop at extent - defaults to true.
 * @returns {Element} The focused element
 */
const focusElementInGroup = (elements, currentElement, destination, cycle = true) => {
  const currentIndex = elements.indexOf(currentElement);
  const isFirstItem = currentIndex === 0;
  const isLastItem = currentIndex === elements.length - 1;
  if (cycle) {
    destination =
      destination === "previous" && isFirstItem ? "last" : destination === "next" && isLastItem ? "first" : destination;
  }
  let focusTarget;
  if (destination === "previous") {
    focusTarget = elements[currentIndex - 1] || elements[cycle ? elements.length - 1 : currentIndex];
  }
  else if (destination === "next") {
    focusTarget = elements[currentIndex + 1] || elements[cycle ? 0 : currentIndex];
  }
  else if (destination === "last") {
    focusTarget = elements[elements.length - 1];
  }
  else {
    focusTarget = elements[0];
  }
  focusElement(focusTarget);
  return focusTarget;
};
/**
 * This helper determines if an element is before another element in the DOM.
 *
 * @param a the reference element to compare
 * @param b the element to compare against
 *
 * @returns true when a is before b in the DOM
 */
function isBefore(a, b) {
  if (a.parentNode !== b.parentNode) {
    return false;
  }
  const children = Array.from(a.parentNode.children);
  return children.indexOf(a) < children.indexOf(b);
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/guid.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/guid.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ guid)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
function gen(counts) {
  return counts
    .map((count) => {
    let out = "";
    for (let i = 0; i < count; i++) {
      out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return out;
  })
    .join("-");
}
const guid = () => gen([2, 1, 1, 1, 3]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNDI4Yjc1Yzg1NThlMGVlYWI3MzhhYzgwN2ViYTU2YWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwRUFBMEU7QUFDMUU7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FOztBQUVwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyw0QkFBNEI7QUFDdkMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhLG9CQUFvQjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsU0FBUztBQUN0Qjs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixjQUFj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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0VBQXdFO0FBQy9GO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUVBQXVFO0FBQzlGO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFdBQVc7QUFDdEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsZ0NBQWdDO0FBQzNDLFdBQVcsU0FBUztBQUNwQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRThzQjs7Ozs7Ozs7Ozs7Ozs7O0FDamlDOXNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2RvbS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvZ3VpZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQuanMnO1xuXG5jb25zdCBhdXRvTW9kZSA9IFwiY2FsY2l0ZS1tb2RlLWF1dG9cIjtcbmNvbnN0IGRhcmtNb2RlID0gXCJjYWxjaXRlLW1vZGUtZGFya1wiO1xuY29uc3QgbGlnaHRNb2RlID0gXCJjYWxjaXRlLW1vZGUtbGlnaHRcIjtcbmNvbnN0IENTU19VVElMSVRZID0ge1xuICBhdXRvTW9kZSxcbiAgZGFya01vZGUsXG4gIGxpZ2h0TW9kZSxcbiAgcnRsOiBcImNhbGNpdGUtLXJ0bFwiLFxuICBjYWxjaXRlQW5pbWF0ZTogXCJjYWxjaXRlLWFuaW1hdGVcIixcbiAgY2FsY2l0ZUFuaW1hdGVJbjogXCJjYWxjaXRlLWFuaW1hdGVfX2luXCIsXG4gIGNhbGNpdGVBbmltYXRlSW5VcDogXCJjYWxjaXRlLWFuaW1hdGVfX2luLXVwXCIsXG4gIGNhbGNpdGVBbmltYXRlSW5Eb3duOiBcImNhbGNpdGUtYW5pbWF0ZV9faW4tZG93blwiLFxuICBjYWxjaXRlQW5pbWF0ZUluUmlnaHQ6IFwiY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodFwiLFxuICBjYWxjaXRlQW5pbWF0ZUluTGVmdDogXCJjYWxjaXRlLWFuaW1hdGVfX2luLWxlZnRcIixcbiAgY2FsY2l0ZUFuaW1hdGVJblNjYWxlOiBcImNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGVcIixcbn07XG5cbi8qIVxuKiB0YWJiYWJsZSA2LjIuMFxuKiBAbGljZW5zZSBNSVQsIGh0dHBzOi8vZ2l0aHViLmNvbS9mb2N1cy10cmFwL3RhYmJhYmxlL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG4vLyBOT1RFOiBzZXBhcmF0ZSBgOm5vdCgpYCBzZWxlY3RvcnMgaGFzIGJyb2FkZXIgYnJvd3NlciBzdXBwb3J0IHRoYW4gdGhlIG5ld2VyXG4vLyAgYDpub3QoW2luZXJ0XSwgW2luZXJ0XSAqKWAgKEZlYiAyMDIzKVxuLy8gQ0FSRUZVTDogSlNEb20gZG9lcyBub3Qgc3VwcG9ydCBgOm5vdChbaW5lcnRdICopYCBhcyBhIHNlbGVjdG9yOyB1c2luZyBpdCBjYXVzZXNcbi8vICB0aGUgZW50aXJlIHF1ZXJ5IHRvIGZhaWwsIHJlc3VsdGluZyBpbiBubyBub2RlcyBmb3VuZCwgd2hpY2ggd2lsbCBicmVhayBhIGxvdFxuLy8gIG9mIHRoaW5ncy4uLiBzbyB3ZSBoYXZlIHRvIHJlbHkgb24gSlMgdG8gaWRlbnRpZnkgbm9kZXMgaW5zaWRlIGFuIGluZXJ0IGNvbnRhaW5lclxudmFyIGNhbmRpZGF0ZVNlbGVjdG9ycyA9IFsnaW5wdXQ6bm90KFtpbmVydF0pJywgJ3NlbGVjdDpub3QoW2luZXJ0XSknLCAndGV4dGFyZWE6bm90KFtpbmVydF0pJywgJ2FbaHJlZl06bm90KFtpbmVydF0pJywgJ2J1dHRvbjpub3QoW2luZXJ0XSknLCAnW3RhYmluZGV4XTpub3Qoc2xvdCk6bm90KFtpbmVydF0pJywgJ2F1ZGlvW2NvbnRyb2xzXTpub3QoW2luZXJ0XSknLCAndmlkZW9bY29udHJvbHNdOm5vdChbaW5lcnRdKScsICdbY29udGVudGVkaXRhYmxlXTpub3QoW2NvbnRlbnRlZGl0YWJsZT1cImZhbHNlXCJdKTpub3QoW2luZXJ0XSknLCAnZGV0YWlscz5zdW1tYXJ5OmZpcnN0LW9mLXR5cGU6bm90KFtpbmVydF0pJywgJ2RldGFpbHM6bm90KFtpbmVydF0pJ107XG52YXIgY2FuZGlkYXRlU2VsZWN0b3IgPSAvKiAjX19QVVJFX18gKi9jYW5kaWRhdGVTZWxlY3RvcnMuam9pbignLCcpO1xudmFyIE5vRWxlbWVudCA9IHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJztcbnZhciBtYXRjaGVzID0gTm9FbGVtZW50ID8gZnVuY3Rpb24gKCkge30gOiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcbnZhciBnZXRSb290Tm9kZSQxID0gIU5vRWxlbWVudCAmJiBFbGVtZW50LnByb3RvdHlwZS5nZXRSb290Tm9kZSA/IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHZhciBfZWxlbWVudCRnZXRSb290Tm9kZTtcbiAgcmV0dXJuIGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9lbGVtZW50JGdldFJvb3ROb2RlID0gZWxlbWVudC5nZXRSb290Tm9kZSkgPT09IG51bGwgfHwgX2VsZW1lbnQkZ2V0Um9vdE5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lbGVtZW50JGdldFJvb3ROb2RlLmNhbGwoZWxlbWVudCk7XG59IDogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbWVudC5vd25lckRvY3VtZW50O1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgbm9kZSBpcyBpbmVydCBvciBpbiBhbiBpbmVydCBhbmNlc3Rvci5cbiAqIEBwYXJhbSB7RWxlbWVudH0gW25vZGVdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtsb29rVXBdIElmIHRydWUgYW5kIGBub2RlYCBpcyBub3QgaW5lcnQsIGxvb2tzIHVwIGF0IGFuY2VzdG9ycyB0b1xuICogIHNlZSBpZiBhbnkgb2YgdGhlbSBhcmUgaW5lcnQuIElmIGZhbHNlLCBvbmx5IGBub2RlYCBpdHNlbGYgaXMgY29uc2lkZXJlZC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIGluZXJ0IGl0c2VsZiBvciBieSB3YXkgb2YgYmVpbmcgaW4gYW4gaW5lcnQgYW5jZXN0b3IuXG4gKiAgRmFsc2UgaWYgYG5vZGVgIGlzIGZhbHN5LlxuICovXG52YXIgaXNJbmVydCA9IGZ1bmN0aW9uIGlzSW5lcnQobm9kZSwgbG9va1VwKSB7XG4gIHZhciBfbm9kZSRnZXRBdHRyaWJ1dGU7XG4gIGlmIChsb29rVXAgPT09IHZvaWQgMCkge1xuICAgIGxvb2tVcCA9IHRydWU7XG4gIH1cbiAgLy8gQ0FSRUZVTDogSlNEb20gZG9lcyBub3Qgc3VwcG9ydCBpbmVydCBhdCBhbGwsIHNvIHdlIGNhbid0IHVzZSB0aGUgYEhUTUxFbGVtZW50LmluZXJ0YFxuICAvLyAgSlMgQVBJIHByb3BlcnR5OyB3ZSBoYXZlIHRvIGNoZWNrIHRoZSBhdHRyaWJ1dGUsIHdoaWNoIGNhbiBlaXRoZXIgYmUgZW1wdHkgb3IgJ3RydWUnO1xuICAvLyAgaWYgaXQncyBgbnVsbGAgKG5vdCBzcGVjaWZpZWQpIG9yICdmYWxzZScsIGl0J3MgYW4gYWN0aXZlIGVsZW1lbnRcbiAgdmFyIGluZXJ0QXR0ID0gbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX25vZGUkZ2V0QXR0cmlidXRlID0gbm9kZS5nZXRBdHRyaWJ1dGUpID09PSBudWxsIHx8IF9ub2RlJGdldEF0dHJpYnV0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25vZGUkZ2V0QXR0cmlidXRlLmNhbGwobm9kZSwgJ2luZXJ0Jyk7XG4gIHZhciBpbmVydCA9IGluZXJ0QXR0ID09PSAnJyB8fCBpbmVydEF0dCA9PT0gJ3RydWUnO1xuXG4gIC8vIE5PVEU6IHRoaXMgY291bGQgYWxzbyBiZSBoYW5kbGVkIHdpdGggYG5vZGUubWF0Y2hlcygnW2luZXJ0XSwgOmlzKFtpbmVydF0gKiknKWBcbiAgLy8gIGlmIGl0IHdlcmVuJ3QgZm9yIGBtYXRjaGVzKClgIG5vdCBiZWluZyBhIGZ1bmN0aW9uIG9uIHNoYWRvdyByb290czsgdGhlIGZvbGxvd2luZ1xuICAvLyAgY29kZSB3b3JrcyBmb3IgYW55IGtpbmQgb2Ygbm9kZVxuICAvLyBDQVJFRlVMOiBKU0RvbSBkb2VzIG5vdCBhcHBlYXIgdG8gc3VwcG9ydCBjZXJ0YWluIHNlbGVjdG9ycyBsaWtlIGA6bm90KFtpbmVydF0gKilgXG4gIC8vICBzbyBpdCBsaWtlbHkgd291bGQgbm90IHN1cHBvcnQgYDppcyhbaW5lcnRdICopYCBlaXRoZXIuLi5cbiAgdmFyIHJlc3VsdCA9IGluZXJ0IHx8IGxvb2tVcCAmJiBub2RlICYmIGlzSW5lcnQobm9kZS5wYXJlbnROb2RlKTsgLy8gcmVjdXJzaXZlXG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIG5vZGUncyBjb250ZW50IGlzIGVkaXRhYmxlLlxuICogQHBhcmFtIHtFbGVtZW50fSBbbm9kZV1cbiAqIEByZXR1cm5zIFRydWUgaWYgaXQncyBjb250ZW50LWVkaXRhYmxlOyBmYWxzZSBpZiBpdCdzIG5vdCBvciBgbm9kZWAgaXMgZmFsc3kuXG4gKi9cbnZhciBpc0NvbnRlbnRFZGl0YWJsZSA9IGZ1bmN0aW9uIGlzQ29udGVudEVkaXRhYmxlKG5vZGUpIHtcbiAgdmFyIF9ub2RlJGdldEF0dHJpYnV0ZTI7XG4gIC8vIENBUkVGVUw6IEpTRG9tIGRvZXMgbm90IHN1cHBvcnQgdGhlIGBIVE1MRWxlbWVudC5pc0NvbnRlbnRFZGl0YWJsZWAgQVBJIHNvIHdlIGhhdmVcbiAgLy8gIHRvIHVzZSB0aGUgYXR0cmlidXRlIGRpcmVjdGx5IHRvIGNoZWNrIGZvciB0aGlzLCB3aGljaCBjYW4gZWl0aGVyIGJlIGVtcHR5IG9yICd0cnVlJztcbiAgLy8gIGlmIGl0J3MgYG51bGxgIChub3Qgc3BlY2lmaWVkKSBvciAnZmFsc2UnLCBpdCdzIGEgbm9uLWVkaXRhYmxlIGVsZW1lbnRcbiAgdmFyIGF0dFZhbHVlID0gbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX25vZGUkZ2V0QXR0cmlidXRlMiA9IG5vZGUuZ2V0QXR0cmlidXRlKSA9PT0gbnVsbCB8fCBfbm9kZSRnZXRBdHRyaWJ1dGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm9kZSRnZXRBdHRyaWJ1dGUyLmNhbGwobm9kZSwgJ2NvbnRlbnRlZGl0YWJsZScpO1xuICByZXR1cm4gYXR0VmFsdWUgPT09ICcnIHx8IGF0dFZhbHVlID09PSAndHJ1ZSc7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWwgY29udGFpbmVyIHRvIGNoZWNrIGluXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVDb250YWluZXIgYWRkIGNvbnRhaW5lciB0byBjaGVja1xuICogQHBhcmFtIHsobm9kZTogRWxlbWVudCkgPT4gYm9vbGVhbn0gZmlsdGVyIGZpbHRlciBjYW5kaWRhdGVzXG4gKiBAcmV0dXJucyB7RWxlbWVudFtdfVxuICovXG52YXIgZ2V0Q2FuZGlkYXRlcyA9IGZ1bmN0aW9uIGdldENhbmRpZGF0ZXMoZWwsIGluY2x1ZGVDb250YWluZXIsIGZpbHRlcikge1xuICAvLyBldmVuIGlmIGBpbmNsdWRlQ29udGFpbmVyPWZhbHNlYCwgd2Ugc3RpbGwgaGF2ZSB0byBjaGVjayBpdCBmb3IgaW5lcnRuZXNzIGJlY2F1c2VcbiAgLy8gIGlmIGl0J3MgaW5lcnQsIGFsbCBpdHMgY2hpbGRyZW4gYXJlIGluZXJ0XG4gIGlmIChpc0luZXJ0KGVsKSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgY2FuZGlkYXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShlbC5xdWVyeVNlbGVjdG9yQWxsKGNhbmRpZGF0ZVNlbGVjdG9yKSk7XG4gIGlmIChpbmNsdWRlQ29udGFpbmVyICYmIG1hdGNoZXMuY2FsbChlbCwgY2FuZGlkYXRlU2VsZWN0b3IpKSB7XG4gICAgY2FuZGlkYXRlcy51bnNoaWZ0KGVsKTtcbiAgfVxuICBjYW5kaWRhdGVzID0gY2FuZGlkYXRlcy5maWx0ZXIoZmlsdGVyKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuXG4vKipcbiAqIEBjYWxsYmFjayBHZXRTaGFkb3dSb290XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgdG8gY2hlY2sgZm9yIHNoYWRvdyByb290XG4gKiBAcmV0dXJucyB7U2hhZG93Um9vdHxib29sZWFufSBTaGFkb3dSb290IGlmIGF2YWlsYWJsZSBvciBib29sZWFuIGluZGljYXRpbmcgaWYgYSBzaGFkb3dSb290IGlzIGF0dGFjaGVkIGJ1dCBub3QgYXZhaWxhYmxlLlxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIFNoYWRvd1Jvb3RGaWx0ZXJcbiAqIEBwYXJhbSB7RWxlbWVudH0gc2hhZG93SG9zdE5vZGUgdGhlIGVsZW1lbnQgd2hpY2ggY29udGFpbnMgc2hhZG93IGNvbnRlbnRcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIGEgc2hhZG93IHJvb3QgY291bGQgcG90ZW50aWFsbHkgY29udGFpbiB2YWxpZCBjYW5kaWRhdGVzLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQ2FuZGlkYXRlU2NvcGVcbiAqIEBwcm9wZXJ0eSB7RWxlbWVudH0gc2NvcGVQYXJlbnQgY29udGFpbnMgaW5uZXIgY2FuZGlkYXRlc1xuICogQHByb3BlcnR5IHtFbGVtZW50W119IGNhbmRpZGF0ZXMgbGlzdCBvZiBjYW5kaWRhdGVzIGZvdW5kIGluIHRoZSBzY29wZSBwYXJlbnRcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEl0ZXJhdGl2ZU9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7R2V0U2hhZG93Um9vdHxib29sZWFufSBnZXRTaGFkb3dSb290IHRydWUgaWYgc2hhZG93IHN1cHBvcnQgaXMgZW5hYmxlZDsgZmFsc3kgaWYgbm90O1xuICogIGlmIGEgZnVuY3Rpb24sIGltcGxpZXMgc2hhZG93IHN1cHBvcnQgaXMgZW5hYmxlZCBhbmQgZWl0aGVyIHJldHVybnMgdGhlIHNoYWRvdyByb290IG9mIGFuIGVsZW1lbnRcbiAqICBvciBhIGJvb2xlYW4gc3RhdGluZyBpZiBpdCBoYXMgYW4gdW5kaXNjbG9zZWQgc2hhZG93IHJvb3RcbiAqIEBwcm9wZXJ0eSB7KG5vZGU6IEVsZW1lbnQpID0+IGJvb2xlYW59IGZpbHRlciBmaWx0ZXIgY2FuZGlkYXRlc1xuICogQHByb3BlcnR5IHtib29sZWFufSBmbGF0dGVuIGlmIHRydWUgdGhlbiByZXN1bHQgd2lsbCBmbGF0dGVuIGFueSBDYW5kaWRhdGVTY29wZSBpbnRvIHRoZSByZXR1cm5lZCBsaXN0XG4gKiBAcHJvcGVydHkge1NoYWRvd1Jvb3RGaWx0ZXJ9IHNoYWRvd1Jvb3RGaWx0ZXIgZmlsdGVyIHNoYWRvdyByb290cztcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudFtdfSBlbGVtZW50cyBsaXN0IG9mIGVsZW1lbnQgY29udGFpbmVycyB0byBtYXRjaCBjYW5kaWRhdGVzIGZyb21cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZUNvbnRhaW5lciBhZGQgY29udGFpbmVyIGxpc3QgdG8gY2hlY2tcbiAqIEBwYXJhbSB7SXRlcmF0aXZlT3B0aW9uc30gb3B0aW9uc1xuICogQHJldHVybnMge0FycmF5LjxFbGVtZW50fENhbmRpZGF0ZVNjb3BlPn1cbiAqL1xudmFyIGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseSA9IGZ1bmN0aW9uIGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseShlbGVtZW50cywgaW5jbHVkZUNvbnRhaW5lciwgb3B0aW9ucykge1xuICB2YXIgY2FuZGlkYXRlcyA9IFtdO1xuICB2YXIgZWxlbWVudHNUb0NoZWNrID0gQXJyYXkuZnJvbShlbGVtZW50cyk7XG4gIHdoaWxlIChlbGVtZW50c1RvQ2hlY2subGVuZ3RoKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50c1RvQ2hlY2suc2hpZnQoKTtcbiAgICBpZiAoaXNJbmVydChlbGVtZW50LCBmYWxzZSkpIHtcbiAgICAgIC8vIG5vIG5lZWQgdG8gbG9vayB1cCBzaW5jZSB3ZSdyZSBkcmlsbGluZyBkb3duXG4gICAgICAvLyBhbnl0aGluZyBpbnNpZGUgdGhpcyBjb250YWluZXIgd2lsbCBhbHNvIGJlIGluZXJ0XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ1NMT1QnKSB7XG4gICAgICAvLyBhZGQgc2hhZG93IGRvbSBzbG90IHNjb3BlIChzbG90IGl0c2VsZiBjYW5ub3QgYmUgZm9jdXNhYmxlKVxuICAgICAgdmFyIGFzc2lnbmVkID0gZWxlbWVudC5hc3NpZ25lZEVsZW1lbnRzKCk7XG4gICAgICB2YXIgY29udGVudCA9IGFzc2lnbmVkLmxlbmd0aCA/IGFzc2lnbmVkIDogZWxlbWVudC5jaGlsZHJlbjtcbiAgICAgIHZhciBuZXN0ZWRDYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KGNvbnRlbnQsIHRydWUsIG9wdGlvbnMpO1xuICAgICAgaWYgKG9wdGlvbnMuZmxhdHRlbikge1xuICAgICAgICBjYW5kaWRhdGVzLnB1c2guYXBwbHkoY2FuZGlkYXRlcywgbmVzdGVkQ2FuZGlkYXRlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW5kaWRhdGVzLnB1c2goe1xuICAgICAgICAgIHNjb3BlUGFyZW50OiBlbGVtZW50LFxuICAgICAgICAgIGNhbmRpZGF0ZXM6IG5lc3RlZENhbmRpZGF0ZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNoZWNrIGNhbmRpZGF0ZSBlbGVtZW50XG4gICAgICB2YXIgdmFsaWRDYW5kaWRhdGUgPSBtYXRjaGVzLmNhbGwoZWxlbWVudCwgY2FuZGlkYXRlU2VsZWN0b3IpO1xuICAgICAgaWYgKHZhbGlkQ2FuZGlkYXRlICYmIG9wdGlvbnMuZmlsdGVyKGVsZW1lbnQpICYmIChpbmNsdWRlQ29udGFpbmVyIHx8ICFlbGVtZW50cy5pbmNsdWRlcyhlbGVtZW50KSkpIHtcbiAgICAgICAgY2FuZGlkYXRlcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICAvLyBpdGVyYXRlIG92ZXIgc2hhZG93IGNvbnRlbnQgaWYgcG9zc2libGVcbiAgICAgIHZhciBzaGFkb3dSb290ID0gZWxlbWVudC5zaGFkb3dSb290IHx8XG4gICAgICAvLyBjaGVjayBmb3IgYW4gdW5kaXNjbG9zZWQgc2hhZG93XG4gICAgICB0eXBlb2Ygb3B0aW9ucy5nZXRTaGFkb3dSb290ID09PSAnZnVuY3Rpb24nICYmIG9wdGlvbnMuZ2V0U2hhZG93Um9vdChlbGVtZW50KTtcblxuICAgICAgLy8gbm8gaW5lcnQgbG9vayB1cCBiZWNhdXNlIHdlJ3JlIGFscmVhZHkgZHJpbGxpbmcgZG93biBhbmQgY2hlY2tpbmcgZm9yIGluZXJ0bmVzc1xuICAgICAgLy8gIG9uIHRoZSB3YXkgZG93biwgc28gYWxsIGNvbnRhaW5lcnMgdG8gdGhpcyByb290IG5vZGUgc2hvdWxkIGhhdmUgYWxyZWFkeSBiZWVuXG4gICAgICAvLyAgdmV0dGVkIGFzIG5vbi1pbmVydFxuICAgICAgdmFyIHZhbGlkU2hhZG93Um9vdCA9ICFpc0luZXJ0KHNoYWRvd1Jvb3QsIGZhbHNlKSAmJiAoIW9wdGlvbnMuc2hhZG93Um9vdEZpbHRlciB8fCBvcHRpb25zLnNoYWRvd1Jvb3RGaWx0ZXIoZWxlbWVudCkpO1xuICAgICAgaWYgKHNoYWRvd1Jvb3QgJiYgdmFsaWRTaGFkb3dSb290KSB7XG4gICAgICAgIC8vIGFkZCBzaGFkb3cgZG9tIHNjb3BlIElJRiBhIHNoYWRvdyByb290IG5vZGUgd2FzIGdpdmVuOyBvdGhlcndpc2UsIGFuIHVuZGlzY2xvc2VkXG4gICAgICAgIC8vICBzaGFkb3cgZXhpc3RzLCBzbyBsb29rIGF0IGxpZ2h0IGRvbSBjaGlsZHJlbiBhcyBmYWxsYmFjayBCVVQgY3JlYXRlIGEgc2NvcGUgZm9yIGFueVxuICAgICAgICAvLyAgY2hpbGQgY2FuZGlkYXRlcyBmb3VuZCBiZWNhdXNlIHRoZXkncmUgbGlrZWx5IHNsb3R0ZWQgZWxlbWVudHMgKGVsZW1lbnRzIHRoYXQgYXJlXG4gICAgICAgIC8vICBjaGlsZHJlbiBvZiB0aGUgd2ViIGNvbXBvbmVudCBlbGVtZW50ICh3aGljaCBoYXMgdGhlIHNoYWRvdyksIGluIHRoZSBsaWdodCBkb20sIGJ1dFxuICAgICAgICAvLyAgc2xvdHRlZCBzb21ld2hlcmUgX2luc2lkZV8gdGhlIHVuZGlzY2xvc2VkIHNoYWRvdykgLS0gdGhlIHNjb3BlIGlzIGNyZWF0ZWQgYmVsb3csXG4gICAgICAgIC8vICBfYWZ0ZXJfIHdlIHJldHVybiBmcm9tIHRoaXMgcmVjdXJzaXZlIGNhbGxcbiAgICAgICAgdmFyIF9uZXN0ZWRDYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KHNoYWRvd1Jvb3QgPT09IHRydWUgPyBlbGVtZW50LmNoaWxkcmVuIDogc2hhZG93Um9vdC5jaGlsZHJlbiwgdHJ1ZSwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChvcHRpb25zLmZsYXR0ZW4pIHtcbiAgICAgICAgICBjYW5kaWRhdGVzLnB1c2guYXBwbHkoY2FuZGlkYXRlcywgX25lc3RlZENhbmRpZGF0ZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbmRpZGF0ZXMucHVzaCh7XG4gICAgICAgICAgICBzY29wZVBhcmVudDogZWxlbWVudCxcbiAgICAgICAgICAgIGNhbmRpZGF0ZXM6IF9uZXN0ZWRDYW5kaWRhdGVzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoZXJlJ3Mgbm90IHNoYWRvdyBzbyBqdXN0IGRpZyBpbnRvIHRoZSBlbGVtZW50J3MgKGxpZ2h0IGRvbSkgY2hpbGRyZW5cbiAgICAgICAgLy8gIF9fd2l0aG91dF9fIGdpdmluZyB0aGUgZWxlbWVudCBzcGVjaWFsIHNjb3BlIHRyZWF0bWVudFxuICAgICAgICBlbGVtZW50c1RvQ2hlY2sudW5zaGlmdC5hcHBseShlbGVtZW50c1RvQ2hlY2ssIGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2FuZGlkYXRlcztcbn07XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIERldGVybWluZXMgaWYgdGhlIG5vZGUgaGFzIGFuIGV4cGxpY2l0bHkgc3BlY2lmaWVkIGB0YWJpbmRleGAgYXR0cmlidXRlLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgc287IGZhbHNlIGlmIG5vdC5cbiAqL1xudmFyIGhhc1RhYkluZGV4ID0gZnVuY3Rpb24gaGFzVGFiSW5kZXgobm9kZSkge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlSW50KG5vZGUuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpLCAxMCkpO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgdGhlIHRhYiBpbmRleCBvZiBhIGdpdmVuIG5vZGUuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUYWIgb3JkZXIgKG5lZ2F0aXZlLCAwLCBvciBwb3NpdGl2ZSBudW1iZXIpLlxuICogQHRocm93cyB7RXJyb3J9IElmIGBub2RlYCBpcyBmYWxzeS5cbiAqL1xudmFyIGdldFRhYkluZGV4ID0gZnVuY3Rpb24gZ2V0VGFiSW5kZXgobm9kZSkge1xuICBpZiAoIW5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgfVxuICBpZiAobm9kZS50YWJJbmRleCA8IDApIHtcbiAgICAvLyBpbiBDaHJvbWUsIDxkZXRhaWxzLz4sIDxhdWRpbyBjb250cm9scy8+IGFuZCA8dmlkZW8gY29udHJvbHMvPiBlbGVtZW50cyBnZXQgYSBkZWZhdWx0XG4gICAgLy8gYHRhYkluZGV4YCBvZiAtMSB3aGVuIHRoZSAndGFiaW5kZXgnIGF0dHJpYnV0ZSBpc24ndCBzcGVjaWZpZWQgaW4gdGhlIERPTSxcbiAgICAvLyB5ZXQgdGhleSBhcmUgc3RpbGwgcGFydCBvZiB0aGUgcmVndWxhciB0YWIgb3JkZXI7IGluIEZGLCB0aGV5IGdldCBhIGRlZmF1bHRcbiAgICAvLyBgdGFiSW5kZXhgIG9mIDA7IHNpbmNlIENocm9tZSBzdGlsbCBwdXRzIHRob3NlIGVsZW1lbnRzIGluIHRoZSByZWd1bGFyIHRhYlxuICAgIC8vIG9yZGVyLCBjb25zaWRlciB0aGVpciB0YWIgaW5kZXggdG8gYmUgMC5cbiAgICAvLyBBbHNvIGJyb3dzZXJzIGRvIG5vdCByZXR1cm4gYHRhYkluZGV4YCBjb3JyZWN0bHkgZm9yIGNvbnRlbnRFZGl0YWJsZSBub2RlcztcbiAgICAvLyBzbyBpZiB0aGV5IGRvbid0IGhhdmUgYSB0YWJpbmRleCBhdHRyaWJ1dGUgc3BlY2lmaWNhbGx5IHNldCwgYXNzdW1lIGl0J3MgMC5cbiAgICBpZiAoKC9eKEFVRElPfFZJREVPfERFVEFJTFMpJC8udGVzdChub2RlLnRhZ05hbWUpIHx8IGlzQ29udGVudEVkaXRhYmxlKG5vZGUpKSAmJiAhaGFzVGFiSW5kZXgobm9kZSkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbm9kZS50YWJJbmRleDtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lIHRoZSB0YWIgaW5kZXggb2YgYSBnaXZlbiBub2RlIF9fZm9yIHNvcnQgb3JkZXIgcHVycG9zZXNfXy5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzU2NvcGVdIFRydWUgZm9yIGEgY3VzdG9tIGVsZW1lbnQgd2l0aCBzaGFkb3cgcm9vdCBvciBzbG90IHRoYXQsIGJ5IGRlZmF1bHQsXG4gKiAgaGFzIHRhYkluZGV4IC0xLCBidXQgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IGRvY3VtZW50IG9yZGVyIGluIG9yZGVyIGZvciBpdHMgY29udGVudCB0byBiZVxuICogIGluc2VydGVkIGludG8gdGhlIGNvcnJlY3Qgc29ydCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRhYiBvcmRlciAobmVnYXRpdmUsIDAsIG9yIHBvc2l0aXZlIG51bWJlcikuXG4gKi9cbnZhciBnZXRTb3J0T3JkZXJUYWJJbmRleCA9IGZ1bmN0aW9uIGdldFNvcnRPcmRlclRhYkluZGV4KG5vZGUsIGlzU2NvcGUpIHtcbiAgdmFyIHRhYkluZGV4ID0gZ2V0VGFiSW5kZXgobm9kZSk7XG4gIGlmICh0YWJJbmRleCA8IDAgJiYgaXNTY29wZSAmJiAhaGFzVGFiSW5kZXgobm9kZSkpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICByZXR1cm4gdGFiSW5kZXg7XG59O1xudmFyIHNvcnRPcmRlcmVkVGFiYmFibGVzID0gZnVuY3Rpb24gc29ydE9yZGVyZWRUYWJiYWJsZXMoYSwgYikge1xuICByZXR1cm4gYS50YWJJbmRleCA9PT0gYi50YWJJbmRleCA/IGEuZG9jdW1lbnRPcmRlciAtIGIuZG9jdW1lbnRPcmRlciA6IGEudGFiSW5kZXggLSBiLnRhYkluZGV4O1xufTtcbnZhciBpc0lucHV0ID0gZnVuY3Rpb24gaXNJbnB1dChub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWUgPT09ICdJTlBVVCc7XG59O1xudmFyIGlzSGlkZGVuSW5wdXQgPSBmdW5jdGlvbiBpc0hpZGRlbklucHV0KG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAnaGlkZGVuJztcbn07XG52YXIgaXNEZXRhaWxzV2l0aFN1bW1hcnkgPSBmdW5jdGlvbiBpc0RldGFpbHNXaXRoU3VtbWFyeShub2RlKSB7XG4gIHZhciByID0gbm9kZS50YWdOYW1lID09PSAnREVUQUlMUycgJiYgQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KG5vZGUuY2hpbGRyZW4pLnNvbWUoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkLnRhZ05hbWUgPT09ICdTVU1NQVJZJztcbiAgfSk7XG4gIHJldHVybiByO1xufTtcbnZhciBnZXRDaGVja2VkUmFkaW8gPSBmdW5jdGlvbiBnZXRDaGVja2VkUmFkaW8obm9kZXMsIGZvcm0pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChub2Rlc1tpXS5jaGVja2VkICYmIG5vZGVzW2ldLmZvcm0gPT09IGZvcm0pIHtcbiAgICAgIHJldHVybiBub2Rlc1tpXTtcbiAgICB9XG4gIH1cbn07XG52YXIgaXNUYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNUYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgaWYgKCFub2RlLm5hbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgcmFkaW9TY29wZSA9IG5vZGUuZm9ybSB8fCBnZXRSb290Tm9kZSQxKG5vZGUpO1xuICB2YXIgcXVlcnlSYWRpb3MgPSBmdW5jdGlvbiBxdWVyeVJhZGlvcyhuYW1lKSB7XG4gICAgcmV0dXJuIHJhZGlvU2NvcGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCInICsgbmFtZSArICdcIl0nKTtcbiAgfTtcbiAgdmFyIHJhZGlvU2V0O1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5DU1MgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuQ1NTLmVzY2FwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJhZGlvU2V0ID0gcXVlcnlSYWRpb3Mod2luZG93LkNTUy5lc2NhcGUobm9kZS5uYW1lKSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHJhZGlvU2V0ID0gcXVlcnlSYWRpb3Mobm9kZS5uYW1lKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKCdMb29rcyBsaWtlIHlvdSBoYXZlIGEgcmFkaW8gYnV0dG9uIHdpdGggYSBuYW1lIGF0dHJpYnV0ZSBjb250YWluaW5nIGludmFsaWQgQ1NTIHNlbGVjdG9yIGNoYXJhY3RlcnMgYW5kIG5lZWQgdGhlIENTUy5lc2NhcGUgcG9seWZpbGw6ICVzJywgZXJyLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB2YXIgY2hlY2tlZCA9IGdldENoZWNrZWRSYWRpbyhyYWRpb1NldCwgbm9kZS5mb3JtKTtcbiAgcmV0dXJuICFjaGVja2VkIHx8IGNoZWNrZWQgPT09IG5vZGU7XG59O1xudmFyIGlzUmFkaW8gPSBmdW5jdGlvbiBpc1JhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAncmFkaW8nO1xufTtcbnZhciBpc05vblRhYmJhYmxlUmFkaW8gPSBmdW5jdGlvbiBpc05vblRhYmJhYmxlUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNSYWRpbyhub2RlKSAmJiAhaXNUYWJiYWJsZVJhZGlvKG5vZGUpO1xufTtcblxuLy8gZGV0ZXJtaW5lcyBpZiBhIG5vZGUgaXMgdWx0aW1hdGVseSBhdHRhY2hlZCB0byB0aGUgd2luZG93J3MgZG9jdW1lbnRcbnZhciBpc05vZGVBdHRhY2hlZCA9IGZ1bmN0aW9uIGlzTm9kZUF0dGFjaGVkKG5vZGUpIHtcbiAgdmFyIF9ub2RlUm9vdDtcbiAgLy8gVGhlIHJvb3Qgbm9kZSBpcyB0aGUgc2hhZG93IHJvb3QgaWYgdGhlIG5vZGUgaXMgaW4gYSBzaGFkb3cgRE9NOyBzb21lIGRvY3VtZW50IG90aGVyd2lzZVxuICAvLyAgKGJ1dCBOT1QgX3RoZV8gZG9jdW1lbnQ7IHNlZSBzZWNvbmQgJ0lmJyBjb21tZW50IGJlbG93IGZvciBtb3JlKS5cbiAgLy8gSWYgcm9vdE5vZGUgaXMgc2hhZG93IHJvb3QsIGl0J2xsIGhhdmUgYSBob3N0LCB3aGljaCBpcyB0aGUgZWxlbWVudCB0byB3aGljaCB0aGUgc2hhZG93XG4gIC8vICBpcyBhdHRhY2hlZCwgYW5kIHRoZSBvbmUgd2UgbmVlZCB0byBjaGVjayBpZiBpdCdzIGluIHRoZSBkb2N1bWVudCBvciBub3QgKGJlY2F1c2UgdGhlXG4gIC8vICBzaGFkb3csIGFuZCBhbGwgbm9kZXMgaXQgY29udGFpbnMsIGlzIG5ldmVyIGNvbnNpZGVyZWQgaW4gdGhlIGRvY3VtZW50IHNpbmNlIHNoYWRvd3NcbiAgLy8gIGJlaGF2ZSBsaWtlIHNlbGYtY29udGFpbmVkIERPTXM7IGJ1dCBpZiB0aGUgc2hhZG93J3MgSE9TVCwgd2hpY2ggaXMgcGFydCBvZiB0aGUgZG9jdW1lbnQsXG4gIC8vICBpcyBoaWRkZW4sIG9yIGlzIG5vdCBpbiB0aGUgZG9jdW1lbnQgaXRzZWxmIGJ1dCBpcyBkZXRhY2hlZCwgaXQgd2lsbCBhZmZlY3QgdGhlIHNoYWRvdydzXG4gIC8vICB2aXNpYmlsaXR5LCBpbmNsdWRpbmcgYWxsIHRoZSBub2RlcyBpdCBjb250YWlucykuIFRoZSBob3N0IGNvdWxkIGJlIGFueSBub3JtYWwgbm9kZSxcbiAgLy8gIG9yIGEgY3VzdG9tIGVsZW1lbnQgKGkuZS4gd2ViIGNvbXBvbmVudCkuIEVpdGhlciB3YXksIHRoYXQncyB0aGUgb25lIHRoYXQgaXMgY29uc2lkZXJlZFxuICAvLyAgcGFydCBvZiB0aGUgZG9jdW1lbnQsIG5vdCB0aGUgc2hhZG93IHJvb3QsIG5vciBhbnkgb2YgaXRzIGNoaWxkcmVuIChpLmUuIHRoZSBub2RlIGJlaW5nXG4gIC8vICB0ZXN0ZWQpLlxuICAvLyBUbyBmdXJ0aGVyIGNvbXBsaWNhdGUgdGhpbmdzLCB3ZSBoYXZlIHRvIGxvb2sgYWxsIHRoZSB3YXkgdXAgdW50aWwgd2UgZmluZCBhIHNoYWRvdyBIT1NUXG4gIC8vICB0aGF0IGlzIGF0dGFjaGVkIChvciBmaW5kIG5vbmUpIGJlY2F1c2UgdGhlIG5vZGUgbWlnaHQgYmUgaW4gbmVzdGVkIHNoYWRvd3MuLi5cbiAgLy8gSWYgcm9vdE5vZGUgaXMgbm90IGEgc2hhZG93IHJvb3QsIGl0IHdvbid0IGhhdmUgYSBob3N0LCBhbmQgc28gcm9vdE5vZGUgc2hvdWxkIGJlIHRoZVxuICAvLyAgZG9jdW1lbnQgKHBlciB0aGUgZG9jcykgYW5kIHdoaWxlIGl0J3MgYSBEb2N1bWVudC10eXBlIG9iamVjdCwgdGhhdCBkb2N1bWVudCBkb2VzIG5vdFxuICAvLyAgYXBwZWFyIHRvIGJlIHRoZSBzYW1lIGFzIHRoZSBub2RlJ3MgYG93bmVyRG9jdW1lbnRgIGZvciBzb21lIHJlYXNvbiwgc28gaXQncyBzYWZlclxuICAvLyAgdG8gaWdub3JlIHRoZSByb290Tm9kZSBhdCB0aGlzIHBvaW50LCBhbmQgdXNlIGBub2RlLm93bmVyRG9jdW1lbnRgLiBPdGhlcndpc2UsXG4gIC8vICB1c2luZyBgcm9vdE5vZGUuY29udGFpbnMobm9kZSlgIHdpbGwgX2Fsd2F5c18gYmUgdHJ1ZSB3ZSdsbCBnZXQgZmFsc2UtcG9zaXRpdmVzIHdoZW5cbiAgLy8gIG5vZGUgaXMgYWN0dWFsbHkgZGV0YWNoZWQuXG4gIC8vIE5PVEU6IElmIGBub2RlUm9vdEhvc3RgIG9yIGBub2RlYCBoYXBwZW5zIHRvIGJlIHRoZSBgZG9jdW1lbnRgIGl0c2VsZiAod2hpY2ggaXMgcG9zc2libGVcbiAgLy8gIGlmIGEgdGFiYmFibGUvZm9jdXNhYmxlIG5vZGUgd2FzIHF1aWNrbHkgYWRkZWQgdG8gdGhlIERPTSwgZm9jdXNlZCwgYW5kIHRoZW4gcmVtb3ZlZFxuICAvLyAgZnJvbSB0aGUgRE9NIGFzIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9mb2N1cy10cmFwL2ZvY3VzLXRyYXAtcmVhY3QvaXNzdWVzLzkwNSksIHRoZW5cbiAgLy8gIGBvd25lckRvY3VtZW50YCB3aWxsIGJlIGBudWxsYCwgaGVuY2UgdGhlIG9wdGlvbmFsIGNoYWluaW5nIG9uIGl0LlxuICB2YXIgbm9kZVJvb3QgPSBub2RlICYmIGdldFJvb3ROb2RlJDEobm9kZSk7XG4gIHZhciBub2RlUm9vdEhvc3QgPSAoX25vZGVSb290ID0gbm9kZVJvb3QpID09PSBudWxsIHx8IF9ub2RlUm9vdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25vZGVSb290Lmhvc3Q7XG5cbiAgLy8gaW4gc29tZSBjYXNlcywgYSBkZXRhY2hlZCBub2RlIHdpbGwgcmV0dXJuIGl0c2VsZiBhcyB0aGUgcm9vdCBpbnN0ZWFkIG9mIGEgZG9jdW1lbnQgb3JcbiAgLy8gIHNoYWRvdyByb290IG9iamVjdCwgaW4gd2hpY2ggY2FzZSwgd2Ugc2hvdWxkbid0IHRyeSB0byBsb29rIGZ1cnRoZXIgdXAgdGhlIGhvc3QgY2hhaW5cbiAgdmFyIGF0dGFjaGVkID0gZmFsc2U7XG4gIGlmIChub2RlUm9vdCAmJiBub2RlUm9vdCAhPT0gbm9kZSkge1xuICAgIHZhciBfbm9kZVJvb3RIb3N0LCBfbm9kZVJvb3RIb3N0JG93bmVyRG8sIF9ub2RlJG93bmVyRG9jdW1lbnQ7XG4gICAgYXR0YWNoZWQgPSAhISgoX25vZGVSb290SG9zdCA9IG5vZGVSb290SG9zdCkgIT09IG51bGwgJiYgX25vZGVSb290SG9zdCAhPT0gdm9pZCAwICYmIChfbm9kZVJvb3RIb3N0JG93bmVyRG8gPSBfbm9kZVJvb3RIb3N0Lm93bmVyRG9jdW1lbnQpICE9PSBudWxsICYmIF9ub2RlUm9vdEhvc3Qkb3duZXJEbyAhPT0gdm9pZCAwICYmIF9ub2RlUm9vdEhvc3Qkb3duZXJEby5jb250YWlucyhub2RlUm9vdEhvc3QpIHx8IG5vZGUgIT09IG51bGwgJiYgbm9kZSAhPT0gdm9pZCAwICYmIChfbm9kZSRvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50KSAhPT0gbnVsbCAmJiBfbm9kZSRvd25lckRvY3VtZW50ICE9PSB2b2lkIDAgJiYgX25vZGUkb3duZXJEb2N1bWVudC5jb250YWlucyhub2RlKSk7XG4gICAgd2hpbGUgKCFhdHRhY2hlZCAmJiBub2RlUm9vdEhvc3QpIHtcbiAgICAgIHZhciBfbm9kZVJvb3QyLCBfbm9kZVJvb3RIb3N0MiwgX25vZGVSb290SG9zdDIkb3duZXJEO1xuICAgICAgLy8gc2luY2UgaXQncyBub3QgYXR0YWNoZWQgYW5kIHdlIGhhdmUgYSByb290IGhvc3QsIHRoZSBub2RlIE1VU1QgYmUgaW4gYSBuZXN0ZWQgc2hhZG93IERPTSxcbiAgICAgIC8vICB3aGljaCBtZWFucyB3ZSBuZWVkIHRvIGdldCB0aGUgaG9zdCdzIGhvc3QgYW5kIGNoZWNrIGlmIHRoYXQgcGFyZW50IGhvc3QgaXMgY29udGFpbmVkXG4gICAgICAvLyAgaW4gKGkuZS4gYXR0YWNoZWQgdG8pIHRoZSBkb2N1bWVudFxuICAgICAgbm9kZVJvb3QgPSBnZXRSb290Tm9kZSQxKG5vZGVSb290SG9zdCk7XG4gICAgICBub2RlUm9vdEhvc3QgPSAoX25vZGVSb290MiA9IG5vZGVSb290KSA9PT0gbnVsbCB8fCBfbm9kZVJvb3QyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm9kZVJvb3QyLmhvc3Q7XG4gICAgICBhdHRhY2hlZCA9ICEhKChfbm9kZVJvb3RIb3N0MiA9IG5vZGVSb290SG9zdCkgIT09IG51bGwgJiYgX25vZGVSb290SG9zdDIgIT09IHZvaWQgMCAmJiAoX25vZGVSb290SG9zdDIkb3duZXJEID0gX25vZGVSb290SG9zdDIub3duZXJEb2N1bWVudCkgIT09IG51bGwgJiYgX25vZGVSb290SG9zdDIkb3duZXJEICE9PSB2b2lkIDAgJiYgX25vZGVSb290SG9zdDIkb3duZXJELmNvbnRhaW5zKG5vZGVSb290SG9zdCkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXR0YWNoZWQ7XG59O1xudmFyIGlzWmVyb0FyZWEgPSBmdW5jdGlvbiBpc1plcm9BcmVhKG5vZGUpIHtcbiAgdmFyIF9ub2RlJGdldEJvdW5kaW5nQ2xpZSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgd2lkdGggPSBfbm9kZSRnZXRCb3VuZGluZ0NsaWUud2lkdGgsXG4gICAgaGVpZ2h0ID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLmhlaWdodDtcbiAgcmV0dXJuIHdpZHRoID09PSAwICYmIGhlaWdodCA9PT0gMDtcbn07XG52YXIgaXNIaWRkZW4gPSBmdW5jdGlvbiBpc0hpZGRlbihub2RlLCBfcmVmKSB7XG4gIHZhciBkaXNwbGF5Q2hlY2sgPSBfcmVmLmRpc3BsYXlDaGVjayxcbiAgICBnZXRTaGFkb3dSb290ID0gX3JlZi5nZXRTaGFkb3dSb290O1xuICAvLyBOT1RFOiB2aXNpYmlsaXR5IHdpbGwgYmUgYHVuZGVmaW5lZGAgaWYgbm9kZSBpcyBkZXRhY2hlZCBmcm9tIHRoZSBkb2N1bWVudFxuICAvLyAgKHNlZSBub3RlcyBhYm91dCB0aGlzIGZ1cnRoZXIgZG93biksIHdoaWNoIG1lYW5zIHdlIHdpbGwgY29uc2lkZXIgaXQgdmlzaWJsZVxuICAvLyAgKHRoaXMgaXMgbGVnYWN5IGJlaGF2aW9yIGZyb20gYSB2ZXJ5IGxvbmcgd2F5IGJhY2spXG4gIC8vIE5PVEU6IHdlIGNoZWNrIHRoaXMgcmVnYXJkbGVzcyBvZiBgZGlzcGxheUNoZWNrPVwibm9uZVwiYCBiZWNhdXNlIHRoaXMgaXMgYVxuICAvLyAgX3Zpc2liaWxpdHlfIGNoZWNrLCBub3QgYSBfZGlzcGxheV8gY2hlY2tcbiAgaWYgKGdldENvbXB1dGVkU3R5bGUobm9kZSkudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgaXNEaXJlY3RTdW1tYXJ5ID0gbWF0Y2hlcy5jYWxsKG5vZGUsICdkZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZScpO1xuICB2YXIgbm9kZVVuZGVyRGV0YWlscyA9IGlzRGlyZWN0U3VtbWFyeSA/IG5vZGUucGFyZW50RWxlbWVudCA6IG5vZGU7XG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZVVuZGVyRGV0YWlscywgJ2RldGFpbHM6bm90KFtvcGVuXSkgKicpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKCFkaXNwbGF5Q2hlY2sgfHwgZGlzcGxheUNoZWNrID09PSAnZnVsbCcgfHwgZGlzcGxheUNoZWNrID09PSAnbGVnYWN5LWZ1bGwnKSB7XG4gICAgaWYgKHR5cGVvZiBnZXRTaGFkb3dSb290ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBmaWd1cmUgb3V0IGlmIHdlIHNob3VsZCBjb25zaWRlciB0aGUgbm9kZSB0byBiZSBpbiBhbiB1bmRpc2Nsb3NlZCBzaGFkb3cgYW5kIHVzZSB0aGVcbiAgICAgIC8vICAnbm9uLXplcm8tYXJlYScgZmFsbGJhY2tcbiAgICAgIHZhciBvcmlnaW5hbE5vZGUgPSBub2RlO1xuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgdmFyIHBhcmVudEVsZW1lbnQgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHZhciByb290Tm9kZSA9IGdldFJvb3ROb2RlJDEobm9kZSk7XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50ICYmICFwYXJlbnRFbGVtZW50LnNoYWRvd1Jvb3QgJiYgZ2V0U2hhZG93Um9vdChwYXJlbnRFbGVtZW50KSA9PT0gdHJ1ZSAvLyBjaGVjayBpZiB0aGVyZSdzIGFuIHVuZGlzY2xvc2VkIHNoYWRvd1xuICAgICAgICApIHtcbiAgICAgICAgICAvLyBub2RlIGhhcyBhbiB1bmRpc2Nsb3NlZCBzaGFkb3cgd2hpY2ggbWVhbnMgd2UgY2FuIG9ubHkgdHJlYXQgaXQgYXMgYSBibGFjayBib3gsIHNvIHdlXG4gICAgICAgICAgLy8gIGZhbGwgYmFjayB0byBhIG5vbi16ZXJvLWFyZWEgdGVzdFxuICAgICAgICAgIHJldHVybiBpc1plcm9BcmVhKG5vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgLy8gaXRlcmF0ZSB1cCBzbG90XG4gICAgICAgICAgbm9kZSA9IG5vZGUuYXNzaWduZWRTbG90O1xuICAgICAgICB9IGVsc2UgaWYgKCFwYXJlbnRFbGVtZW50ICYmIHJvb3ROb2RlICE9PSBub2RlLm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICAvLyBjcm9zcyBzaGFkb3cgYm91bmRhcnlcbiAgICAgICAgICBub2RlID0gcm9vdE5vZGUuaG9zdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpdGVyYXRlIHVwIG5vcm1hbCBkb21cbiAgICAgICAgICBub2RlID0gcGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbm9kZSA9IG9yaWdpbmFsTm9kZTtcbiAgICB9XG4gICAgLy8gZWxzZSwgYGdldFNoYWRvd1Jvb3RgIG1pZ2h0IGJlIHRydWUsIGJ1dCBhbGwgdGhhdCBkb2VzIGlzIGVuYWJsZSBzaGFkb3cgRE9NIHN1cHBvcnRcbiAgICAvLyAgKGkuZS4gaXQgZG9lcyBub3QgYWxzbyBwcmVzdW1lIHRoYXQgYWxsIG5vZGVzIG1pZ2h0IGhhdmUgdW5kaXNjbG9zZWQgc2hhZG93cyk7IG9yXG4gICAgLy8gIGl0IG1pZ2h0IGJlIGEgZmFsc3kgdmFsdWUsIHdoaWNoIG1lYW5zIHNoYWRvdyBET00gc3VwcG9ydCBpcyBkaXNhYmxlZFxuXG4gICAgLy8gU2luY2Ugd2UgZGlkbid0IGZpbmQgaXQgc2l0dGluZyBpbiBhbiB1bmRpc2Nsb3NlZCBzaGFkb3cgKG9yIHNoYWRvd3MgYXJlIGRpc2FibGVkKVxuICAgIC8vICBub3cgd2UgY2FuIGp1c3QgdGVzdCB0byBzZWUgaWYgaXQgd291bGQgbm9ybWFsbHkgYmUgdmlzaWJsZSBvciBub3QsIHByb3ZpZGVkIGl0J3NcbiAgICAvLyAgYXR0YWNoZWQgdG8gdGhlIG1haW4gZG9jdW1lbnQuXG4gICAgLy8gTk9URTogV2UgbXVzdCBjb25zaWRlciBjYXNlIHdoZXJlIG5vZGUgaXMgaW5zaWRlIGEgc2hhZG93IERPTSBhbmQgZ2l2ZW4gZGlyZWN0bHkgdG9cbiAgICAvLyAgYGlzVGFiYmFibGUoKWAgb3IgYGlzRm9jdXNhYmxlKClgIC0tIHJlZ2FyZGxlc3Mgb2YgYGdldFNoYWRvd1Jvb3RgIG9wdGlvbiBzZXR0aW5nLlxuXG4gICAgaWYgKGlzTm9kZUF0dGFjaGVkKG5vZGUpKSB7XG4gICAgICAvLyB0aGlzIHdvcmtzIHdoZXJldmVyIHRoZSBub2RlIGlzOiBpZiB0aGVyZSdzIGF0IGxlYXN0IG9uZSBjbGllbnQgcmVjdCwgaXQnc1xuICAgICAgLy8gIHNvbWVob3cgZGlzcGxheWVkOyBpdCBhbHNvIGNvdmVycyB0aGUgQ1NTICdkaXNwbGF5OiBjb250ZW50cycgY2FzZSB3aGVyZSB0aGVcbiAgICAgIC8vICBub2RlIGl0c2VsZiBpcyBoaWRkZW4gaW4gcGxhY2Ugb2YgaXRzIGNvbnRlbnRzOyBhbmQgdGhlcmUncyBubyBuZWVkIHRvIHNlYXJjaFxuICAgICAgLy8gIHVwIHRoZSBoaWVyYXJjaHkgZWl0aGVyXG4gICAgICByZXR1cm4gIW5vZGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gRWxzZSwgdGhlIG5vZGUgaXNuJ3QgYXR0YWNoZWQgdG8gdGhlIGRvY3VtZW50LCB3aGljaCBtZWFucyB0aGUgYGdldENsaWVudFJlY3RzKClgXG4gICAgLy8gIEFQSSB3aWxsIF9fYWx3YXlzX18gcmV0dXJuIHplcm8gcmVjdHMgKHRoaXMgY2FuIGhhcHBlbiwgZm9yIGV4YW1wbGUsIGlmIFJlYWN0XG4gICAgLy8gIGlzIHVzZWQgdG8gcmVuZGVyIG5vZGVzIG9udG8gYSBkZXRhY2hlZCB0cmVlLCBhcyBjb25maXJtZWQgaW4gdGhpcyB0aHJlYWQ6XG4gICAgLy8gIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvOTExNyNpc3N1ZWNvbW1lbnQtMjg0MjI4ODcwKVxuICAgIC8vXG4gICAgLy8gSXQgYWxzbyBtZWFucyB0aGF0IGV2ZW4gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSkuZGlzcGxheSB3aWxsIHJldHVybiBgdW5kZWZpbmVkYFxuICAgIC8vICBiZWNhdXNlIHN0eWxlcyBhcmUgb25seSBjb21wdXRlZCBmb3Igbm9kZXMgdGhhdCBhcmUgaW4gdGhlIGRvY3VtZW50LlxuICAgIC8vXG4gICAgLy8gTk9URTogVEhJUyBIQVMgQkVFTiBUSEUgQ0FTRSBGT1IgWUVBUlMuIEl0IGlzIG5vdCBuZXcsIG5vciBpcyBpdCBjYXVzZWQgYnkgdGFiYmFibGVcbiAgICAvLyAgc29tZWhvdy4gVGhvdWdoIGl0IHdhcyBuZXZlciBzdGF0ZWQgb2ZmaWNpYWxseSwgYW55b25lIHdobyBoYXMgZXZlciB1c2VkIHRhYmJhYmxlXG4gICAgLy8gIEFQSXMgb24gbm9kZXMgaW4gZGV0YWNoZWQgY29udGFpbmVycyBoYXMgYWN0dWFsbHkgaW1wbGljaXRseSB1c2VkIHRhYmJhYmxlIGluIHdoYXRcbiAgICAvLyAgd2FzIGxhdGVyIChhcyBvZiB2NS4yLjAgb24gQXByIDksIDIwMjEpIGNhbGxlZCBgZGlzcGxheUNoZWNrPVwibm9uZVwiYCBtb2RlIC0tIGVzc2VudGlhbGx5XG4gICAgLy8gIGNvbnNpZGVyaW5nIF9fZXZlcnl0aGluZ19fIHRvIGJlIHZpc2libGUgYmVjYXVzZSBvZiB0aGUgaW5uYWJpbGl0eSB0byBkZXRlcm1pbmUgc3R5bGVzLlxuICAgIC8vXG4gICAgLy8gdjYuMC4wOiBBcyBvZiB0aGlzIG1ham9yIHJlbGVhc2UsIHRoZSBkZWZhdWx0ICdmdWxsJyBvcHRpb24gX19ubyBsb25nZXIgdHJlYXRzIGRldGFjaGVkXG4gICAgLy8gIG5vZGVzIGFzIHZpc2libGUgd2l0aCB0aGUgJ25vbmUnIGZhbGxiYWNrLl9fXG4gICAgaWYgKGRpc3BsYXlDaGVjayAhPT0gJ2xlZ2FjeS1mdWxsJykge1xuICAgICAgcmV0dXJuIHRydWU7IC8vIGhpZGRlblxuICAgIH1cbiAgICAvLyBlbHNlLCBmYWxsYmFjayB0byAnbm9uZScgbW9kZSBhbmQgY29uc2lkZXIgdGhlIG5vZGUgdmlzaWJsZVxuICB9IGVsc2UgaWYgKGRpc3BsYXlDaGVjayA9PT0gJ25vbi16ZXJvLWFyZWEnKSB7XG4gICAgLy8gTk9URTogRXZlbiB0aG91Z2ggdGhpcyB0ZXN0cyB0aGF0IHRoZSBub2RlJ3MgY2xpZW50IHJlY3QgaXMgbm9uLXplcm8gdG8gZGV0ZXJtaW5lXG4gICAgLy8gIHdoZXRoZXIgaXQncyBkaXNwbGF5ZWQsIGFuZCB0aGF0IGEgZGV0YWNoZWQgbm9kZSB3aWxsIF9fYWx3YXlzX18gaGF2ZSBhIHplcm8tYXJlYVxuICAgIC8vICBjbGllbnQgcmVjdCwgd2UgZG9uJ3Qgc3BlY2lhbC1jYXNlIGZvciB3aGV0aGVyIHRoZSBub2RlIGlzIGF0dGFjaGVkIG9yIG5vdC4gSW5cbiAgICAvLyAgdGhpcyBtb2RlLCB3ZSBkbyB3YW50IHRvIGNvbnNpZGVyIG5vZGVzIHRoYXQgaGF2ZSBhIHplcm8gYXJlYSB0byBiZSBoaWRkZW4gYXQgYWxsXG4gICAgLy8gIHRpbWVzLCBhbmQgdGhhdCBpbmNsdWRlcyBhdHRhY2hlZCBvciBub3QuXG4gICAgcmV0dXJuIGlzWmVyb0FyZWEobm9kZSk7XG4gIH1cblxuICAvLyB2aXNpYmxlLCBhcyBmYXIgYXMgd2UgY2FuIHRlbGwsIG9yIHBlciBjdXJyZW50IGBkaXNwbGF5Q2hlY2s9bm9uZWAgbW9kZSwgd2UgYXNzdW1lXG4gIC8vICBpdCdzIHZpc2libGVcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLy8gZm9ybSBmaWVsZHMgKG5lc3RlZCkgaW5zaWRlIGEgZGlzYWJsZWQgZmllbGRzZXQgYXJlIG5vdCBmb2N1c2FibGUvdGFiYmFibGVcbi8vICB1bmxlc3MgdGhleSBhcmUgaW4gdGhlIF9maXJzdF8gPGxlZ2VuZD4gZWxlbWVudCBvZiB0aGUgdG9wLW1vc3QgZGlzYWJsZWRcbi8vICBmaWVsZHNldFxudmFyIGlzRGlzYWJsZWRGcm9tRmllbGRzZXQgPSBmdW5jdGlvbiBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0KG5vZGUpIHtcbiAgaWYgKC9eKElOUFVUfEJVVFRPTnxTRUxFQ1R8VEVYVEFSRUEpJC8udGVzdChub2RlLnRhZ05hbWUpKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgLy8gY2hlY2sgaWYgYG5vZGVgIGlzIGNvbnRhaW5lZCBpbiBhIGRpc2FibGVkIDxmaWVsZHNldD5cbiAgICB3aGlsZSAocGFyZW50Tm9kZSkge1xuICAgICAgaWYgKHBhcmVudE5vZGUudGFnTmFtZSA9PT0gJ0ZJRUxEU0VUJyAmJiBwYXJlbnROb2RlLmRpc2FibGVkKSB7XG4gICAgICAgIC8vIGxvb2sgZm9yIHRoZSBmaXJzdCA8bGVnZW5kPiBhbW9uZyB0aGUgY2hpbGRyZW4gb2YgdGhlIGRpc2FibGVkIDxmaWVsZHNldD5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGNoaWxkID0gcGFyZW50Tm9kZS5jaGlsZHJlbi5pdGVtKGkpO1xuICAgICAgICAgIC8vIHdoZW4gdGhlIGZpcnN0IDxsZWdlbmQ+IChpbiBkb2N1bWVudCBvcmRlcikgaXMgZm91bmRcbiAgICAgICAgICBpZiAoY2hpbGQudGFnTmFtZSA9PT0gJ0xFR0VORCcpIHtcbiAgICAgICAgICAgIC8vIGlmIGl0cyBwYXJlbnQgPGZpZWxkc2V0PiBpcyBub3QgbmVzdGVkIGluIGFub3RoZXIgZGlzYWJsZWQgPGZpZWxkc2V0PixcbiAgICAgICAgICAgIC8vIHJldHVybiB3aGV0aGVyIGBub2RlYCBpcyBhIGRlc2NlbmRhbnQgb2YgaXRzIGZpcnN0IDxsZWdlbmQ+XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlcy5jYWxsKHBhcmVudE5vZGUsICdmaWVsZHNldFtkaXNhYmxlZF0gKicpID8gdHJ1ZSA6ICFjaGlsZC5jb250YWlucyhub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhlIGRpc2FibGVkIDxmaWVsZHNldD4gY29udGFpbmluZyBgbm9kZWAgaGFzIG5vIDxsZWdlbmQ+XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50RWxlbWVudDtcbiAgICB9XG4gIH1cblxuICAvLyBlbHNlLCBub2RlJ3MgdGFiYmFibGUvZm9jdXNhYmxlIHN0YXRlIHNob3VsZCBub3QgYmUgYWZmZWN0ZWQgYnkgYSBmaWVsZHNldCdzXG4gIC8vICBlbmFibGVkL2Rpc2FibGVkIHN0YXRlXG4gIHJldHVybiBmYWxzZTtcbn07XG52YXIgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZSA9IGZ1bmN0aW9uIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSkge1xuICBpZiAobm9kZS5kaXNhYmxlZCB8fFxuICAvLyB3ZSBtdXN0IGRvIGFuIGluZXJ0IGxvb2sgdXAgdG8gZmlsdGVyIG91dCBhbnkgZWxlbWVudHMgaW5zaWRlIGFuIGluZXJ0IGFuY2VzdG9yXG4gIC8vICBiZWNhdXNlIHdlJ3JlIGxpbWl0ZWQgaW4gdGhlIHR5cGUgb2Ygc2VsZWN0b3JzIHdlIGNhbiB1c2UgaW4gSlNEb20gKHNlZSByZWxhdGVkXG4gIC8vICBub3RlIHJlbGF0ZWQgdG8gYGNhbmRpZGF0ZVNlbGVjdG9yc2ApXG4gIGlzSW5lcnQobm9kZSkgfHwgaXNIaWRkZW5JbnB1dChub2RlKSB8fCBpc0hpZGRlbihub2RlLCBvcHRpb25zKSB8fFxuICAvLyBGb3IgYSBkZXRhaWxzIGVsZW1lbnQgd2l0aCBhIHN1bW1hcnksIHRoZSBzdW1tYXJ5IGVsZW1lbnQgZ2V0cyB0aGUgZm9jdXNcbiAgaXNEZXRhaWxzV2l0aFN1bW1hcnkobm9kZSkgfHwgaXNEaXNhYmxlZEZyb21GaWVsZHNldChub2RlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlID0gZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG9wdGlvbnMsIG5vZGUpIHtcbiAgaWYgKGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKSB8fCBnZXRUYWJJbmRleChub2RlKSA8IDAgfHwgIWlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIGlzVmFsaWRTaGFkb3dSb290VGFiYmFibGUgPSBmdW5jdGlvbiBpc1ZhbGlkU2hhZG93Um9vdFRhYmJhYmxlKHNoYWRvd0hvc3ROb2RlKSB7XG4gIHZhciB0YWJJbmRleCA9IHBhcnNlSW50KHNoYWRvd0hvc3ROb2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSwgMTApO1xuICBpZiAoaXNOYU4odGFiSW5kZXgpIHx8IHRhYkluZGV4ID49IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBJZiBhIGN1c3RvbSBlbGVtZW50IGhhcyBhbiBleHBsaWNpdCBuZWdhdGl2ZSB0YWJpbmRleCxcbiAgLy8gYnJvd3NlcnMgd2lsbCBub3QgYWxsb3cgdGFiIHRhcmdldGluZyBzYWlkIGVsZW1lbnQncyBjaGlsZHJlbi5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5LjxFbGVtZW50fENhbmRpZGF0ZVNjb3BlPn0gY2FuZGlkYXRlc1xuICogQHJldHVybnMgRWxlbWVudFtdXG4gKi9cbnZhciBzb3J0QnlPcmRlciA9IGZ1bmN0aW9uIHNvcnRCeU9yZGVyKGNhbmRpZGF0ZXMpIHtcbiAgdmFyIHJlZ3VsYXJUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIG9yZGVyZWRUYWJiYWJsZXMgPSBbXTtcbiAgY2FuZGlkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgdmFyIGlzU2NvcGUgPSAhIWl0ZW0uc2NvcGVQYXJlbnQ7XG4gICAgdmFyIGVsZW1lbnQgPSBpc1Njb3BlID8gaXRlbS5zY29wZVBhcmVudCA6IGl0ZW07XG4gICAgdmFyIGNhbmRpZGF0ZVRhYmluZGV4ID0gZ2V0U29ydE9yZGVyVGFiSW5kZXgoZWxlbWVudCwgaXNTY29wZSk7XG4gICAgdmFyIGVsZW1lbnRzID0gaXNTY29wZSA/IHNvcnRCeU9yZGVyKGl0ZW0uY2FuZGlkYXRlcykgOiBlbGVtZW50O1xuICAgIGlmIChjYW5kaWRhdGVUYWJpbmRleCA9PT0gMCkge1xuICAgICAgaXNTY29wZSA/IHJlZ3VsYXJUYWJiYWJsZXMucHVzaC5hcHBseShyZWd1bGFyVGFiYmFibGVzLCBlbGVtZW50cykgOiByZWd1bGFyVGFiYmFibGVzLnB1c2goZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9yZGVyZWRUYWJiYWJsZXMucHVzaCh7XG4gICAgICAgIGRvY3VtZW50T3JkZXI6IGksXG4gICAgICAgIHRhYkluZGV4OiBjYW5kaWRhdGVUYWJpbmRleCxcbiAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgaXNTY29wZTogaXNTY29wZSxcbiAgICAgICAgY29udGVudDogZWxlbWVudHNcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvcmRlcmVkVGFiYmFibGVzLnNvcnQoc29ydE9yZGVyZWRUYWJiYWJsZXMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzb3J0YWJsZSkge1xuICAgIHNvcnRhYmxlLmlzU2NvcGUgPyBhY2MucHVzaC5hcHBseShhY2MsIHNvcnRhYmxlLmNvbnRlbnQpIDogYWNjLnB1c2goc29ydGFibGUuY29udGVudCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10pLmNvbmNhdChyZWd1bGFyVGFiYmFibGVzKTtcbn07XG52YXIgdGFiYmFibGUgPSBmdW5jdGlvbiB0YWJiYWJsZShjb250YWluZXIsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBjYW5kaWRhdGVzO1xuICBpZiAob3B0aW9ucy5nZXRTaGFkb3dSb290KSB7XG4gICAgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseShbY29udGFpbmVyXSwgb3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyLCB7XG4gICAgICBmaWx0ZXI6IGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpLFxuICAgICAgZmxhdHRlbjogZmFsc2UsXG4gICAgICBnZXRTaGFkb3dSb290OiBvcHRpb25zLmdldFNoYWRvd1Jvb3QsXG4gICAgICBzaGFkb3dSb290RmlsdGVyOiBpc1ZhbGlkU2hhZG93Um9vdFRhYmJhYmxlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXMoY29udGFpbmVyLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgfVxuICByZXR1cm4gc29ydEJ5T3JkZXIoY2FuZGlkYXRlcyk7XG59O1xudmFyIGZvY3VzYWJsZSA9IGZ1bmN0aW9uIGZvY3VzYWJsZShjb250YWluZXIsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBjYW5kaWRhdGVzO1xuICBpZiAob3B0aW9ucy5nZXRTaGFkb3dSb290KSB7XG4gICAgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseShbY29udGFpbmVyXSwgb3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyLCB7XG4gICAgICBmaWx0ZXI6IGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUuYmluZChudWxsLCBvcHRpb25zKSxcbiAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgICBnZXRTaGFkb3dSb290OiBvcHRpb25zLmdldFNoYWRvd1Jvb3RcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlcyhjb250YWluZXIsIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgfVxuICByZXR1cm4gY2FuZGlkYXRlcztcbn07XG52YXIgaXNUYWJiYWJsZSA9IGZ1bmN0aW9uIGlzVGFiYmFibGUobm9kZSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgaWYgKCFub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIH1cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBjYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUob3B0aW9ucywgbm9kZSk7XG59O1xudmFyIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yID0gLyogI19fUFVSRV9fICovY2FuZGlkYXRlU2VsZWN0b3JzLmNvbmNhdCgnaWZyYW1lJykuam9pbignLCcpO1xudmFyIGlzRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNGb2N1c2FibGUobm9kZSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgaWYgKCFub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIH1cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG9wdGlvbnMsIG5vZGUpO1xufTtcblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBgZm9jdXMtdHJhcC90YWJiYWJsZWAgb3B0aW9ucy5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvdGFiYmFibGUjdGFiYmFibGVcbiAqL1xuY29uc3QgdGFiYmFibGVPcHRpb25zID0ge1xuICBnZXRTaGFkb3dSb290OiB0cnVlLFxufTtcbi8qKlxuICogVGhpcyBoZWxwZXIgd2lsbCBndWFyYW50ZWUgYW4gSUQgb24gdGhlIHByb3ZpZGVkIGVsZW1lbnQuXG4gKlxuICogSWYgaXQgYWxyZWFkeSBoYXMgYW4gSUQsIGl0IHdpbGwgYmUgcHJlc2VydmVkLCBvdGhlcndpc2UgYSB1bmlxdWUgb25lIHdpbGwgYmUgZ2VuZXJhdGVkIGFuZCBhc3NpZ25lZC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsIEFuIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZWxlbWVudCdzIElELlxuICovXG5mdW5jdGlvbiBlbnN1cmVJZChlbCkge1xuICBpZiAoIWVsKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgcmV0dXJuIChlbC5pZCA9IGVsLmlkIHx8IGAke2VsLnRhZ05hbWUudG9Mb3dlckNhc2UoKX0tJHtndWlkKCl9YCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHJldHVybnMgYW4gYXJyYXkgZnJvbSBhIE5vZGVMaXN0LlxuICpcbiAqIEBwYXJhbSB7Tm9kZUxpc3R9IG5vZGVMaXN0IEEgTm9kZUxpc3QuXG4gKiBAcmV0dXJucyB7RWxlbWVudFtdfSBBbiBhcnJheSBvZiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gbm9kZUxpc3RUb0FycmF5KG5vZGVMaXN0KSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KG5vZGVMaXN0KSA/IG5vZGVMaXN0IDogQXJyYXkuZnJvbShub2RlTGlzdCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHJldHVybnMgdGhlIENhbGNpdGUgXCJtb2RlXCIgb2YgYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCBBbiBlbGVtZW50LlxuICogQHJldHVybnMge1wibGlnaHRcInxcImRhcmtcIn0gVGhlIENhbGNpdGUgbW9kZS5cbiAqL1xuZnVuY3Rpb24gZ2V0TW9kZU5hbWUoZWwpIHtcbiAgY29uc3QgY2xvc2VzdEVsV2l0aE1vZGUgPSBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkoZWwsIGAuJHtDU1NfVVRJTElUWS5kYXJrTW9kZX0sIC4ke0NTU19VVElMSVRZLmxpZ2h0TW9kZX1gKTtcbiAgcmV0dXJuIGNsb3Nlc3RFbFdpdGhNb2RlPy5jbGFzc0xpc3QuY29udGFpbnMoXCJjYWxjaXRlLW1vZGUtZGFya1wiKSA/IFwiZGFya1wiIDogXCJsaWdodFwiO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciByZXR1cm5zIHRoZSBkaXJlY3Rpb24gb2YgYSBIVE1MIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgQW4gZWxlbWVudC5cbiAqIEByZXR1cm5zIHtEaXJlY3Rpb259IFRoZSBkaXJlY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGdldEVsZW1lbnREaXIoZWwpIHtcbiAgY29uc3QgcHJvcCA9IFwiZGlyXCI7XG4gIGNvbnN0IHNlbGVjdG9yID0gYFske3Byb3B9XWA7XG4gIGNvbnN0IGNsb3Nlc3QgPSBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkoZWwsIHNlbGVjdG9yKTtcbiAgcmV0dXJuIGNsb3Nlc3QgPyBjbG9zZXN0LmdldEF0dHJpYnV0ZShwcm9wKSA6IFwibHRyXCI7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHJldHVybnMgdGhlIGNvbXB1dGVkIHdpZHRoIGluIHBpeGVscyBvZiBhIHJlbmRlcmVkIEhUTUxFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIEFuIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgZWxlbWVudCdzIHdpZHRoLlxuICovXG5mdW5jdGlvbiBnZXRFbGVtZW50V2lkdGgoZWwpIHtcbiAgaWYgKCFlbCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHJldHVybiBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoZWwpLmlubGluZVNpemUpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciByZXR1cm5zIHRoZSByb290Tm9kZSBvZiBhbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWwgQW4gZWxlbWVudC5cbiAqIEByZXR1cm5zIHtEb2N1bWVudHxTaGFkb3dSb290fSBUaGUgZWxlbWVudCdzIHJvb3Qgbm9kZS5cbiAqL1xuZnVuY3Rpb24gZ2V0Um9vdE5vZGUoZWwpIHtcbiAgcmV0dXJuIGVsLmdldFJvb3ROb2RlKCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHJldHVybnMgdGhlIG5vZGUncyBzaGFkb3dSb290IHJvb3Qgbm9kZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbCBUaGUgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtTaGFkb3dSb290fG51bGx9IFRoZSBlbGVtZW50J3Mgcm9vdCBub2RlIFNoYWRvd1Jvb3QuXG4gKi9cbmZ1bmN0aW9uIGdldFNoYWRvd1Jvb3ROb2RlKGVsKSB7XG4gIGNvbnN0IHJvb3ROb2RlID0gZ2V0Um9vdE5vZGUoZWwpO1xuICByZXR1cm4gXCJob3N0XCIgaW4gcm9vdE5vZGUgPyByb290Tm9kZSA6IG51bGw7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHJldHVybnMgdGhlIGNvbXB1dGVkIHdpZHRoIGluIHBpeGVscyBhIGdpdmVuIHRleHQgc3RyaW5nIHRha2VzIHVwIG9uIHNjcmVlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTE4MjQxL2NhbGN1bGF0ZS10ZXh0LXdpZHRoLXdpdGgtamF2YXNjcmlwdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRoZSBzdHJpbmcgb2YgdGV4dCB0byBtZWFzdXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IGZvbnQgVGhlIENTUyBmb250IGF0dHJpYnV0ZSdzIHZhbHVlLCB3aGljaCBzaG91bGQgaW5jbHVkZSBzaXplIGFuZCBmYWNlLCBlLmcuIFwiMTJweCBBcmlhbFwiLlxuICovXG5mdW5jdGlvbiBnZXRUZXh0V2lkdGgodGV4dCwgZm9udCkge1xuICBpZiAoIXRleHQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgY29udGV4dC5mb250ID0gZm9udDtcbiAgcmV0dXJuIGNvbnRleHQubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHJldHVybnMgdGhlIGhvc3Qgb2YgYSBTaGFkb3dSb290LlxuICpcbiAqIEBwYXJhbSB7RG9jdW1lbnQgfCBTaGFkb3dSb290fSByb290IEEgcm9vdCBlbGVtZW50LlxuICogQHJldHVybnMge0VsZW1lbnQgfCBudWxsfSBUaGUgaG9zdCBlbGVtZW50LlxuICovXG5mdW5jdGlvbiBnZXRIb3N0KHJvb3QpIHtcbiAgcmV0dXJuIHJvb3QuaG9zdCB8fCBudWxsO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciBxdWVyaWVzIGFuIGVsZW1lbnQncyByb290Tm9kZSBhbmQgYW55IGFuY2VzdG9yIHJvb3ROb2Rlcy5cbiAqXG4gKiBJZiBib3RoIGFuICdpZCcgYW5kICdzZWxlY3RvcicgYXJlIHN1cHBsaWVkLCAnaWQnIHdpbGwgdGFrZSBwcmVjZWRlbmNlIG92ZXIgJ3NlbGVjdG9yJy5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgQW4gZWxlbWVudC5cbiAqIEBwYXJhbSByb290MFxuICogQHBhcmFtIHJvb3QwLnNlbGVjdG9yXG4gKiBAcGFyYW0gcm9vdDAuaWRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBBbiBlbGVtZW50LlxuICovXG5mdW5jdGlvbiBxdWVyeUVsZW1lbnRSb290cyhlbGVtZW50LCB7IHNlbGVjdG9yLCBpZCwgfSkge1xuICAvLyBHZXRzIHRoZSByb290Tm9kZSBhbmQgYW55IGFuY2VzdG9yIHJvb3ROb2RlcyAoc2hhZG93Um9vdCBvciBkb2N1bWVudCkgb2YgYW4gZWxlbWVudCBhbmQgcXVlcmllcyB0aGVtIGZvciBhIHNlbGVjdG9yLlxuICAvLyBCYXNlZCBvbjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzU0NTIwNTU0LzE5NDIxNlxuICBmdW5jdGlvbiBxdWVyeUZyb20oZWwpIHtcbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGVsLmFzc2lnbmVkU2xvdCkge1xuICAgICAgZWwgPSBlbC5hc3NpZ25lZFNsb3Q7XG4gICAgfVxuICAgIGNvbnN0IHJvb3ROb2RlID0gZ2V0Um9vdE5vZGUoZWwpO1xuICAgIGNvbnN0IGZvdW5kID0gaWRcbiAgICAgID8gXCJnZXRFbGVtZW50QnlJZFwiIGluIHJvb3ROb2RlXG4gICAgICAgID8gLypcbiAgICAgICAgICBDaGVjayB0byBtYWtlIHN1cmUgJ2dldEVsZW1lbnRCeUlkJyBleGlzdHMgaW4gY2FzZXMgd2hlcmUgZWxlbWVudCBpcyBubyBsb25nZXIgY29ubmVjdGVkIHRvIHRoZSBET00gYW5kIGdldFJvb3ROb2RlKCkgcmV0dXJucyB0aGUgZWxlbWVudC5cbiAgICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC80MjgwXG4gICAgICAgICAgICovXG4gICAgICAgICAgcm9vdE5vZGUuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gICAgICAgIDogbnVsbFxuICAgICAgOiBzZWxlY3RvclxuICAgICAgICA/IHJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgIDogbnVsbDtcbiAgICBjb25zdCBob3N0ID0gZ2V0SG9zdChyb290Tm9kZSk7XG4gICAgcmV0dXJuIGZvdW5kID8gZm91bmQgOiBob3N0ID8gcXVlcnlGcm9tKGhvc3QpIDogbnVsbDtcbiAgfVxuICByZXR1cm4gcXVlcnlGcm9tKGVsZW1lbnQpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciByZXR1cm5zIHRoZSBjbG9zZXN0IGVsZW1lbnQgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yIGJ5IGNyb3NzaW5nIGhlIHNoYWRvdyBib3VuZGFyeSBpZiBuZWNlc3NhcnkuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IFRoZSBzdGFydGluZyBlbGVtZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIFRoZSBzZWxlY3Rvci5cbiAqIEByZXR1cm5zIHtFbGVtZW50fSBUaGUgdGFyZ2V0ZWQgZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIC8vIGJhc2VkIG9uIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS81NDUyMDU1NC8xOTQyMTZcbiAgZnVuY3Rpb24gY2xvc2VzdEZyb20oZWwpIHtcbiAgICByZXR1cm4gZWwgPyBlbC5jbG9zZXN0KHNlbGVjdG9yKSB8fCBjbG9zZXN0RnJvbShnZXRIb3N0KGdldFJvb3ROb2RlKGVsKSkpIDogbnVsbDtcbiAgfVxuICByZXR1cm4gY2xvc2VzdEZyb20oZWxlbWVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBoZWxwcyBpbnZva2UgYSBjYWxsYmFjayBhcyBpdCB0cmF2ZXJzZXMgYSBub2RlIGFuZCBpdHMgYW5jZXN0b3JzIHVudGlsIHJlYWNoaW5nIHRoZSByb290IGRvY3VtZW50LlxuICpcbiAqIFJldHVybmluZyBlYXJseSBvciB1bmRlZmluZWQgaW4gYG9uVmlzaXRgIHdpbGwgY29udGludWUgdHJhdmVyc2luZyB1cCB0aGUgRE9NIHRyZWUuIE90aGVyd2lzZSwgdHJhdmVyc2FsIHdpbGwgaGFsdCB3aXRoIHRoZSByZXR1cm5lZCB2YWx1ZSBhcyB0aGUgcmVzdWx0IG9mIHRoZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBBbiBlbGVtZW50LlxuICogQHBhcmFtIHsobm9kZTogTm9kZSkgPT4gRWxlbWVudH0gb25WaXNpdCBUaGUgY2FsbGJhY2suXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gVGhlIHJlc3VsdC5cbiAqL1xuZnVuY3Rpb24gd2Fsa1VwQW5jZXN0cnkoZWxlbWVudCwgb25WaXNpdCkge1xuICByZXR1cm4gdmlzaXQoZWxlbWVudCwgb25WaXNpdCk7XG59XG5mdW5jdGlvbiB2aXNpdChub2RlLCBvblZpc2l0KSB7XG4gIGlmICghbm9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCByZXN1bHQgPSBvblZpc2l0KG5vZGUpO1xuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGNvbnN0IHsgcGFyZW50Tm9kZSB9ID0gbm9kZTtcbiAgcmV0dXJuIHZpc2l0KHBhcmVudE5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcGFyZW50Tm9kZS5ob3N0IDogcGFyZW50Tm9kZSwgb25WaXNpdCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHJldHVybnMgdHJ1ZSB3aGVuIGFuIGVsZW1lbnQgaGFzIHRoZSBkZXNjZW5kYW50IGluIHF1ZXN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBUaGUgc3RhcnRpbmcgZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gbWF5YmVEZXNjZW5kYW50IFRoZSBkZXNjZW5kYW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFRoZSByZXN1bHQuXG4gKi9cbmZ1bmN0aW9uIGNvbnRhaW5zQ3Jvc3NTaGFkb3dCb3VuZGFyeShlbGVtZW50LCBtYXliZURlc2NlbmRhbnQpIHtcbiAgcmV0dXJuICEhd2Fsa1VwQW5jZXN0cnkobWF5YmVEZXNjZW5kYW50LCAobm9kZSkgPT4gKG5vZGUgPT09IGVsZW1lbnQgPyB0cnVlIDogdW5kZWZpbmVkKSk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHJldHVybnMgdHJ1ZSB3aGVuIGFuIGVsZW1lbnQgaGFzIGEgc2V0Rm9jdXMgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWwgQW4gZWxlbWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUaGUgcmVzdWx0LlxuICovXG5mdW5jdGlvbiBpc0NhbGNpdGVGb2N1c2FibGUoZWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBlbD8uc2V0Rm9jdXMgPT09IFwiZnVuY3Rpb25cIjtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgZm9jdXNlcyBhbiBlbGVtZW50IHVzaW5nIHRoZSBgc2V0Rm9jdXNgIG1ldGhvZCBpZiBhdmFpbGFibGUgYW5kIGZhbGxzIGJhY2sgdG8gdXNpbmcgdGhlIGBmb2N1c2AgbWV0aG9kIGlmIG5vdCBhdmFpbGFibGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbCBBbiBlbGVtZW50LlxuICovXG5hc3luYyBmdW5jdGlvbiBmb2N1c0VsZW1lbnQoZWwpIHtcbiAgaWYgKCFlbCkge1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gaXNDYWxjaXRlRm9jdXNhYmxlKGVsKSA/IGVsLnNldEZvY3VzKCkgOiBlbC5mb2N1cygpO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gZm9jdXMgdGhlIGZpcnN0IHRhYmJhYmxlIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgaHRtbCBlbGVtZW50IGNvbnRhaW5pbmcgdGFiYmFibGUgZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIGZvY3VzRmlyc3RUYWJiYWJsZShlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuICAodGFiYmFibGUoZWxlbWVudCwgdGFiYmFibGVPcHRpb25zKVswXSB8fCBlbGVtZW50KS5mb2N1cygpO1xufVxuY29uc3QgZGVmYXVsdFNsb3RTZWxlY3RvciA9IFwiOm5vdChbc2xvdF0pXCI7XG5mdW5jdGlvbiBnZXRTbG90dGVkKGVsZW1lbnQsIHNsb3ROYW1lLCBvcHRpb25zKSB7XG4gIGlmIChzbG90TmFtZSAmJiAhQXJyYXkuaXNBcnJheShzbG90TmFtZSkgJiYgdHlwZW9mIHNsb3ROYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgb3B0aW9ucyA9IHNsb3ROYW1lO1xuICAgIHNsb3ROYW1lID0gbnVsbDtcbiAgfVxuICBjb25zdCBzbG90U2VsZWN0b3IgPSBzbG90TmFtZVxuICAgID8gQXJyYXkuaXNBcnJheShzbG90TmFtZSlcbiAgICAgID8gc2xvdE5hbWUubWFwKChuYW1lKSA9PiBgW3Nsb3Q9XCIke25hbWV9XCJdYCkuam9pbihcIixcIilcbiAgICAgIDogYFtzbG90PVwiJHtzbG90TmFtZX1cIl1gXG4gICAgOiBkZWZhdWx0U2xvdFNlbGVjdG9yO1xuICBpZiAob3B0aW9ucz8uYWxsKSB7XG4gICAgcmV0dXJuIHF1ZXJ5TXVsdGlwbGUoZWxlbWVudCwgc2xvdFNlbGVjdG9yLCBvcHRpb25zKTtcbiAgfVxuICByZXR1cm4gcXVlcnlTaW5nbGUoZWxlbWVudCwgc2xvdFNlbGVjdG9yLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGdldERpcmVjdENoaWxkcmVuKGVsLCBzZWxlY3Rvcikge1xuICByZXR1cm4gZWwgPyBBcnJheS5mcm9tKGVsLmNoaWxkcmVuIHx8IFtdKS5maWx0ZXIoKGNoaWxkKSA9PiBjaGlsZD8ubWF0Y2hlcyhzZWxlY3RvcikpIDogW107XG59XG5mdW5jdGlvbiBxdWVyeU11bHRpcGxlKGVsZW1lbnQsIHNsb3RTZWxlY3Rvciwgb3B0aW9ucykge1xuICBsZXQgbWF0Y2hlcyA9IHNsb3RTZWxlY3RvciA9PT0gZGVmYXVsdFNsb3RTZWxlY3RvclxuICAgID8gZ2V0RGlyZWN0Q2hpbGRyZW4oZWxlbWVudCwgZGVmYXVsdFNsb3RTZWxlY3RvcilcbiAgICA6IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNsb3RTZWxlY3RvcikpO1xuICBtYXRjaGVzID0gb3B0aW9ucyAmJiBvcHRpb25zLmRpcmVjdCA9PT0gZmFsc2UgPyBtYXRjaGVzIDogbWF0Y2hlcy5maWx0ZXIoKGVsKSA9PiBlbC5wYXJlbnRFbGVtZW50ID09PSBlbGVtZW50KTtcbiAgbWF0Y2hlcyA9IG9wdGlvbnM/Lm1hdGNoZXMgPyBtYXRjaGVzLmZpbHRlcigoZWwpID0+IGVsPy5tYXRjaGVzKG9wdGlvbnMubWF0Y2hlcykpIDogbWF0Y2hlcztcbiAgY29uc3Qgc2VsZWN0b3IgPSBvcHRpb25zPy5zZWxlY3RvcjtcbiAgcmV0dXJuIHNlbGVjdG9yXG4gICAgPyBtYXRjaGVzXG4gICAgICAubWFwKChpdGVtKSA9PiBBcnJheS5mcm9tKGl0ZW0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpKVxuICAgICAgLnJlZHVjZSgocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSA9PiBbLi4ucHJldmlvdXNWYWx1ZSwgLi4uY3VycmVudFZhbHVlXSwgW10pXG4gICAgICAuZmlsdGVyKChtYXRjaCkgPT4gISFtYXRjaClcbiAgICA6IG1hdGNoZXM7XG59XG5mdW5jdGlvbiBxdWVyeVNpbmdsZShlbGVtZW50LCBzbG90U2VsZWN0b3IsIG9wdGlvbnMpIHtcbiAgbGV0IG1hdGNoID0gc2xvdFNlbGVjdG9yID09PSBkZWZhdWx0U2xvdFNlbGVjdG9yXG4gICAgPyBnZXREaXJlY3RDaGlsZHJlbihlbGVtZW50LCBkZWZhdWx0U2xvdFNlbGVjdG9yKVswXSB8fCBudWxsXG4gICAgOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2xvdFNlbGVjdG9yKTtcbiAgbWF0Y2ggPSBvcHRpb25zICYmIG9wdGlvbnMuZGlyZWN0ID09PSBmYWxzZSA/IG1hdGNoIDogbWF0Y2g/LnBhcmVudEVsZW1lbnQgPT09IGVsZW1lbnQgPyBtYXRjaCA6IG51bGw7XG4gIG1hdGNoID0gb3B0aW9ucz8ubWF0Y2hlcyA/IChtYXRjaD8ubWF0Y2hlcyhvcHRpb25zLm1hdGNoZXMpID8gbWF0Y2ggOiBudWxsKSA6IG1hdGNoO1xuICBjb25zdCBzZWxlY3RvciA9IG9wdGlvbnM/LnNlbGVjdG9yO1xuICByZXR1cm4gc2VsZWN0b3IgPyBtYXRjaD8ucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBtYXRjaDtcbn1cbi8qKlxuICogRmlsdGVycyBkaXJlY3QgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbCBBbiBlbGVtZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIFRoZSBzZWxlY3Rvci5cbiAqIEByZXR1cm5zIHtFbGVtZW50W119IEFuIGFycmF5IG9mIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBmaWx0ZXJEaXJlY3RDaGlsZHJlbihlbCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oZWwuY2hpbGRyZW4pLmZpbHRlcigoY2hpbGQpID0+IGNoaWxkLm1hdGNoZXMoc2VsZWN0b3IpKTtcbn1cbi8qKlxuICogU2V0IGEgZGVmYXVsdCBpY29uIGZyb20gYSBkZWZpbmVkIHNldCBvciBhbGxvdyBhbiBvdmVycmlkZSB3aXRoIGFuIGljb24gbmFtZSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHN0cmluZz59IGljb25PYmplY3QgVGhlIGljb24gb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmcgfCBib29sZWFufSBpY29uVmFsdWUgVGhlIGljb24gdmFsdWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWF0Y2hlZFZhbHVlIFRoZSBtYXRjaGVkIHZhbHVlLlxuICogQHJldHVybnMge3N0cmluZ3x1bmRlZmluZWR9IFRoZSByZXN1bHRpbmcgaWNvbiB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc2V0UmVxdWVzdGVkSWNvbihpY29uT2JqZWN0LCBpY29uVmFsdWUsIG1hdGNoZWRWYWx1ZSkge1xuICBpZiAodHlwZW9mIGljb25WYWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiBpY29uVmFsdWUgIT09IFwiXCIpIHtcbiAgICByZXR1cm4gaWNvblZhbHVlO1xuICB9XG4gIGVsc2UgaWYgKGljb25WYWx1ZSA9PT0gXCJcIikge1xuICAgIHJldHVybiBpY29uT2JqZWN0W21hdGNoZWRWYWx1ZV07XG4gIH1cbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgcmV0dXJucyB0cnVlIHdoZW4gdHdvIHJlY3RhbmdsZXMgaW50ZXJzZWN0LlxuICpcbiAqIEBwYXJhbSB7RE9NUmVjdH0gcmVjdDEgVGhlIGZpcnN0IHJlY3RhbmdsZS5cbiAqIEBwYXJhbSB7RE9NUmVjdH0gcmVjdDIgVGhlIHNlY29uZCByZWN0YW5nbGUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVGhlIHJlc3VsdC5cbiAqL1xuZnVuY3Rpb24gaW50ZXJzZWN0cyhyZWN0MSwgcmVjdDIpIHtcbiAgcmV0dXJuICEocmVjdDIubGVmdCA+IHJlY3QxLnJpZ2h0IHx8XG4gICAgcmVjdDIucmlnaHQgPCByZWN0MS5sZWZ0IHx8XG4gICAgcmVjdDIudG9wID4gcmVjdDEuYm90dG9tIHx8XG4gICAgcmVjdDIuYm90dG9tIDwgcmVjdDEudG9wKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgbWFrZXMgc3VyZSB0aGF0IGJvb2xlYW4gYXJpYSBhdHRyaWJ1dGVzIGFyZSBwcm9wZXJseSBjb252ZXJ0ZWQgdG8gYSBzdHJpbmcuXG4gKlxuICogSXQgc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3IgYXJpYSBhdHRyaWJ1dGVzIHRoYXQgcmVxdWlyZSBhIHN0cmluZyB2YWx1ZSBvZiBcInRydWVcIiBvciBcImZhbHNlXCIuXG4gKlxuICogQHBhcmFtIHtib29sZWFufSB2YWx1ZSBUaGUgdmFsdWUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc3RyaW5nIGNvbnZlcnNpb24gb2YgYSBib29sZWFuIHZhbHVlIChcInRydWVcIiB8IFwiZmFsc2VcIikuXG4gKi9cbmZ1bmN0aW9uIHRvQXJpYUJvb2xlYW4odmFsdWUpIHtcbiAgcmV0dXJuIEJvb2xlYW4odmFsdWUpLnRvU3RyaW5nKCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHJldHVybnMgYHRydWVgIGlmIHRoZSB0YXJnZXQgYHNsb3RgIGVsZW1lbnQgZnJvbSB0aGUgYG9uU2xvdGNoYW5nZWAgZXZlbnQgaGFzIGFueSBjb250ZW50ICh0ZXh0IG9yIGVsZW1lbnRzKS5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0NvbnRlbnQgPSBzbG90Q2hhbmdlSGFzQ29udGVudChldmVudCl9IC8+fVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIHNsb3QgaGFzIGFueSBjb250ZW50LlxuICovXG5mdW5jdGlvbiBzbG90Q2hhbmdlSGFzQ29udGVudChldmVudCkge1xuICByZXR1cm4gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCkgfHwgc2xvdENoYW5nZUhhc1RleHRDb250ZW50KGV2ZW50KTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgcmV0dXJucyBhIHN0cmluZyBvZiB0ZXh0Q29udGVudCBpZiB0aGUgdGFyZ2V0IGBzbG90YCBlbGVtZW50IGZyb20gdGhlIGBvblNsb3RjaGFuZ2VgIGV2ZW50IGhhcyBhbnkgdGV4dCBjb250ZW50LlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90VGV4dCA9IHNsb3RDaGFuZ2VHZXRUZXh0Q29udGVudChldmVudCl9IC8+fVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50LlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNsb3RzIHRleHQuXG4gKi9cbmZ1bmN0aW9uIHNsb3RDaGFuZ2VHZXRUZXh0Q29udGVudChldmVudCkge1xuICByZXR1cm4gc2xvdENoYW5nZUdldEFzc2lnbmVkTm9kZXMoZXZlbnQpXG4gICAgLmZpbHRlcigobm9kZSkgPT4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpXG4gICAgLm1hcCgobm9kZSkgPT4gbm9kZS50ZXh0Q29udGVudClcbiAgICAuam9pbihcIlwiKVxuICAgIC50cmltKCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHJldHVybnMgYHRydWVgIGlmIHRoZSB0YXJnZXQgYHNsb3RgIGVsZW1lbnQgZnJvbSB0aGUgYG9uU2xvdGNoYW5nZWAgZXZlbnQgaGFzIGFueSB0ZXh0IGNvbnRlbnQuXG4gKlxuICogYGBgXG4gKiA8c2xvdCBvblNsb3RjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5teVNsb3RIYXNUZXh0Q29udGVudCA9IHNsb3RDaGFuZ2VIYXNUZXh0Q29udGVudChldmVudCl9IC8+fVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIHNsb3QgaGFzIGFueSB0ZXh0IGNvbnRlbnQuXG4gKi9cbmZ1bmN0aW9uIHNsb3RDaGFuZ2VIYXNUZXh0Q29udGVudChldmVudCkge1xuICByZXR1cm4gISFzbG90Q2hhbmdlR2V0VGV4dENvbnRlbnQoZXZlbnQpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciByZXR1cm5zIHRoZSBhc3NpZ25lZCBub2RlcyBvbiBhIGBzbG90YCBlbGVtZW50IGZyb20gdGhlIGBvblNsb3RjaGFuZ2VgIGV2ZW50LlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90Tm9kZXMgPSBzbG90Q2hhbmdlR2V0QXNzaWduZWROb2RlcyhldmVudCl9IC8+fVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIHNsb3QgaGFzIGFueSBhc3NpZ25lZCBub2Rlcy5cbiAqL1xuZnVuY3Rpb24gc2xvdENoYW5nZUdldEFzc2lnbmVkTm9kZXMoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LnRhcmdldC5hc3NpZ25lZE5vZGVzKHtcbiAgICBmbGF0dGVuOiB0cnVlLFxuICB9KTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHRhcmdldCBgc2xvdGAgZWxlbWVudCBmcm9tIHRoZSBgb25TbG90Y2hhbmdlYCBldmVudCBoYXMgYW4gYXNzaWduZWQgZWxlbWVudC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0aGUgc2xvdCBoYXMgYW55IGFzc2lnbmVkIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIXNsb3RDaGFuZ2VHZXRBc3NpZ25lZEVsZW1lbnRzKGV2ZW50KS5sZW5ndGg7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHJldHVybnMgdGhlIGFzc2lnbmVkIGVsZW1lbnRzIG9uIGEgYHNsb3RgIGVsZW1lbnQgZnJvbSB0aGUgYG9uU2xvdGNoYW5nZWAgZXZlbnQuXG4gKlxuICogYGBgXG4gKiA8c2xvdCBvblNsb3RjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5teVNsb3RFbGVtZW50cyA9IHNsb3RDaGFuZ2VHZXRBc3NpZ25lZEVsZW1lbnRzKGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0aGUgc2xvdCBoYXMgYW55IGFzc2lnbmVkIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBzbG90Q2hhbmdlR2V0QXNzaWduZWRFbGVtZW50cyhldmVudCkge1xuICByZXR1cm4gZXZlbnQudGFyZ2V0LmFzc2lnbmVkRWxlbWVudHMoe1xuICAgIGZsYXR0ZW46IHRydWUsXG4gIH0pO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciByZXR1cm5zIHRydWUgaWYgdGhlIHBvaW50ZXIgZXZlbnQgZmlyZWQgZnJvbSB0aGUgcHJpbWFyeSBidXR0b24gb2YgdGhlIGRldmljZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3BvaW50ZXJldmVudHMvI3RoZS1idXR0b24tcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtQb2ludGVyRXZlbnR9IGV2ZW50IFRoZSBwb2ludGVyIGV2ZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFRoZSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaXNQcmltYXJ5UG9pbnRlckJ1dHRvbihldmVudCkge1xuICByZXR1cm4gISEoZXZlbnQuaXNQcmltYXJ5ICYmIGV2ZW50LmJ1dHRvbiA9PT0gMCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHNldHMgZm9jdXMgb24gYW5kIHJldHVybnMgYSBkZXN0aW5hdGlvbiBlbGVtZW50IGZyb20gd2l0aGluIGEgZ3JvdXAgb2YgcHJvdmlkZWQgZWxlbWVudHMuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50W119IGVsZW1lbnRzIEFuIGFycmF5IG9mIGVsZW1lbnRzLlxuICogQHBhcmFtIHtFbGVtZW50fSBjdXJyZW50RWxlbWVudCBUaGUgY3VycmVudCBlbGVtZW50LlxuICogQHBhcmFtIHtGb2N1c0VsZW1lbnRJbkdyb3VwRGVzdGluYXRpb259IGRlc3RpbmF0aW9uIFRoZSB0YXJnZXQgZGVzdGluYXRpb24gZWxlbWVudCB0byBmb2N1cy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY3ljbGUgU2hvdWxkIG5hdmlnYXRpb24gY3ljbGUgdGhyb3VnaCBlbGVtZW50cyBvciBzdG9wIGF0IGV4dGVudCAtIGRlZmF1bHRzIHRvIHRydWUuXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gVGhlIGZvY3VzZWQgZWxlbWVudFxuICovXG5jb25zdCBmb2N1c0VsZW1lbnRJbkdyb3VwID0gKGVsZW1lbnRzLCBjdXJyZW50RWxlbWVudCwgZGVzdGluYXRpb24sIGN5Y2xlID0gdHJ1ZSkgPT4ge1xuICBjb25zdCBjdXJyZW50SW5kZXggPSBlbGVtZW50cy5pbmRleE9mKGN1cnJlbnRFbGVtZW50KTtcbiAgY29uc3QgaXNGaXJzdEl0ZW0gPSBjdXJyZW50SW5kZXggPT09IDA7XG4gIGNvbnN0IGlzTGFzdEl0ZW0gPSBjdXJyZW50SW5kZXggPT09IGVsZW1lbnRzLmxlbmd0aCAtIDE7XG4gIGlmIChjeWNsZSkge1xuICAgIGRlc3RpbmF0aW9uID1cbiAgICAgIGRlc3RpbmF0aW9uID09PSBcInByZXZpb3VzXCIgJiYgaXNGaXJzdEl0ZW0gPyBcImxhc3RcIiA6IGRlc3RpbmF0aW9uID09PSBcIm5leHRcIiAmJiBpc0xhc3RJdGVtID8gXCJmaXJzdFwiIDogZGVzdGluYXRpb247XG4gIH1cbiAgbGV0IGZvY3VzVGFyZ2V0O1xuICBpZiAoZGVzdGluYXRpb24gPT09IFwicHJldmlvdXNcIikge1xuICAgIGZvY3VzVGFyZ2V0ID0gZWxlbWVudHNbY3VycmVudEluZGV4IC0gMV0gfHwgZWxlbWVudHNbY3ljbGUgPyBlbGVtZW50cy5sZW5ndGggLSAxIDogY3VycmVudEluZGV4XTtcbiAgfVxuICBlbHNlIGlmIChkZXN0aW5hdGlvbiA9PT0gXCJuZXh0XCIpIHtcbiAgICBmb2N1c1RhcmdldCA9IGVsZW1lbnRzW2N1cnJlbnRJbmRleCArIDFdIHx8IGVsZW1lbnRzW2N5Y2xlID8gMCA6IGN1cnJlbnRJbmRleF07XG4gIH1cbiAgZWxzZSBpZiAoZGVzdGluYXRpb24gPT09IFwibGFzdFwiKSB7XG4gICAgZm9jdXNUYXJnZXQgPSBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXTtcbiAgfVxuICBlbHNlIHtcbiAgICBmb2N1c1RhcmdldCA9IGVsZW1lbnRzWzBdO1xuICB9XG4gIGZvY3VzRWxlbWVudChmb2N1c1RhcmdldCk7XG4gIHJldHVybiBmb2N1c1RhcmdldDtcbn07XG4vKipcbiAqIFRoaXMgaGVscGVyIGRldGVybWluZXMgaWYgYW4gZWxlbWVudCBpcyBiZWZvcmUgYW5vdGhlciBlbGVtZW50IGluIHRoZSBET00uXG4gKlxuICogQHBhcmFtIGEgdGhlIHJlZmVyZW5jZSBlbGVtZW50IHRvIGNvbXBhcmVcbiAqIEBwYXJhbSBiIHRoZSBlbGVtZW50IHRvIGNvbXBhcmUgYWdhaW5zdFxuICpcbiAqIEByZXR1cm5zIHRydWUgd2hlbiBhIGlzIGJlZm9yZSBiIGluIHRoZSBET01cbiAqL1xuZnVuY3Rpb24gaXNCZWZvcmUoYSwgYikge1xuICBpZiAoYS5wYXJlbnROb2RlICE9PSBiLnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKGEucGFyZW50Tm9kZS5jaGlsZHJlbik7XG4gIHJldHVybiBjaGlsZHJlbi5pbmRleE9mKGEpIDwgY2hpbGRyZW4uaW5kZXhPZihiKTtcbn1cblxuZXhwb3J0IHsgZm9jdXNhYmxlIGFzIEEsIGlzVGFiYmFibGUgYXMgQiwgQ1NTX1VUSUxJVFkgYXMgQywgZ2V0VGFiSW5kZXggYXMgRCwgaXNGb2N1c2FibGUgYXMgRSwgdGFiYmFibGVPcHRpb25zIGFzIEYsIGF1dG9Nb2RlIGFzIGEsIGdldEVsZW1lbnREaXIgYXMgYiwgY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5IGFzIGMsIGRhcmtNb2RlIGFzIGQsIHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQgYXMgZSwgZm9jdXNGaXJzdFRhYmJhYmxlIGFzIGYsIGdldFNsb3R0ZWQgYXMgZywgc2V0UmVxdWVzdGVkSWNvbiBhcyBoLCBmb2N1c0VsZW1lbnRJbkdyb3VwIGFzIGksIGlzUHJpbWFyeVBvaW50ZXJCdXR0b24gYXMgaiwgZm9jdXNFbGVtZW50IGFzIGssIGludGVyc2VjdHMgYXMgbCwgZW5zdXJlSWQgYXMgbSwgZ2V0U2hhZG93Um9vdE5vZGUgYXMgbiwgbm9kZUxpc3RUb0FycmF5IGFzIG8sIGZpbHRlckRpcmVjdENoaWxkcmVuIGFzIHAsIHF1ZXJ5RWxlbWVudFJvb3RzIGFzIHEsIGdldE1vZGVOYW1lIGFzIHIsIHNsb3RDaGFuZ2VHZXRBc3NpZ25lZEVsZW1lbnRzIGFzIHMsIHRvQXJpYUJvb2xlYW4gYXMgdCwgZ2V0RWxlbWVudFdpZHRoIGFzIHUsIGdldFRleHRXaWR0aCBhcyB2LCBzbG90Q2hhbmdlSGFzQ29udGVudCBhcyB3LCBjb250YWluc0Nyb3NzU2hhZG93Qm91bmRhcnkgYXMgeCwgaXNCZWZvcmUgYXMgeSwgdGFiYmFibGUgYXMgeiB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuZnVuY3Rpb24gZ2VuKGNvdW50cykge1xuICByZXR1cm4gY291bnRzXG4gICAgLm1hcCgoY291bnQpID0+IHtcbiAgICBsZXQgb3V0ID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIG91dCArPSAoKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKSB8IDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH0pXG4gICAgLmpvaW4oXCItXCIpO1xufVxuY29uc3QgZ3VpZCA9ICgpID0+IGdlbihbMiwgMSwgMSwgMSwgM10pO1xuXG5leHBvcnQgeyBndWlkIGFzIGcgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==