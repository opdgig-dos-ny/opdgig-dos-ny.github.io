"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_floating-ui_js-node_modules_esri-bc759c"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/floating-ui.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/floating-ui.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ FloatingCSS),
/* harmony export */   a: () => (/* binding */ disconnectFloatingUI),
/* harmony export */   b: () => (/* binding */ defaultOffsetDistance),
/* harmony export */   c: () => (/* binding */ connectFloatingUI),
/* harmony export */   d: () => (/* binding */ defaultMenuPlacement),
/* harmony export */   f: () => (/* binding */ filterComputedPlacements),
/* harmony export */   r: () => (/* binding */ reposition)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce.js */ "./node_modules/@esri/calcite-components/dist/components/debounce.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */




const sides = ['top', 'right', 'bottom', 'left'];
const alignments = ['start', 'end'];
const placements = /*#__PURE__*/sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = clamp(min$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. To ensure `shift()` continues to take action,
    // a single reset is performed when this is true.
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center != offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});

function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = placements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const placements$1 = alignment !== undefined || allowedPlacements === placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements$1[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const alignmentSides = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));

      // Make `computeCoords` start from the right place.
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements$1[0]
          }
        };
      }
      const currentOverflows = [overflow[getSide(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
      const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements$1[currentIndex + 1];

      // There are more placements to check.
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map(d => {
        const alignment = getAlignment(d.placement);
        return [d.placement, alignment && crossAxis ?
        // Check along the mainAxis and main crossAxis side.
        d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
        // Check only the mainAxis.
        d.overflows[0], d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
      // Aligned placements should not check their opposite crossAxis
      // side.
      getAlignment(d[0]) ? 2 : 3).every(v => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$map$so;
                const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = 'referenceHidden',
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === 'y';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      const {
        x,
        y
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};

function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle$1(element);

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  return getCssDimensions(element);
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const window = getWindow(element);
  if (!isHTMLElement(element)) {
    return window;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}

const getElementRects = async function (_ref) {
  let {
    reference,
    floating,
    strategy
  } = _ref;
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
    floating: {
      x: 0,
      y: 0,
      ...(await getDimensionsFn(floating))
    }
  };
};

function isRTL(element) {
  return getComputedStyle$1(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          resizeObserver && resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

/* eslint-disable @typescript-eslint/ban-types */
function offsetParent(element) {
    return offsetParentPolyfill(element);
}
function flatTreeParent(element) {
    if (element.assignedSlot) {
        return element.assignedSlot;
    }
    if (element.parentNode instanceof ShadowRoot) {
        return element.parentNode.host;
    }
    return element.parentNode;
}
function offsetParentPolyfill(element) {
    // Do an initial walk to check for display:none ancestors.
    for (let ancestor = element; ancestor; ancestor = flatTreeParent(ancestor)) {
        if (!(ancestor instanceof Element)) {
            continue;
        }
        if (getComputedStyle(ancestor).display === 'none') {
            return null;
        }
    }
    for (let ancestor = flatTreeParent(element); ancestor; ancestor = flatTreeParent(ancestor)) {
        if (!(ancestor instanceof Element)) {
            continue;
        }
        const style = getComputedStyle(ancestor);
        // Display:contents nodes aren't in the layout tree so they should be skipped.
        if (style.display === 'contents') {
            continue;
        }
        if (style.position !== 'static' || style.filter !== 'none') {
            return ancestor;
        }
        if (ancestor.tagName === 'BODY') {
            return ancestor;
        }
    }
    return null;
}

(function setUpFloatingUiForShadowDomPositioning() {
  if (_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Build.isBrowser) {
    const originalGetOffsetParent = platform.getOffsetParent;
    platform.getOffsetParent = (element) => originalGetOffsetParent(element, offsetParent);
  }
})();
/**
 * Positions the floating element relative to the reference element.
 *
 * **Note:** exported for testing purposes only
 *
 * @param root0
 * @param root0.referenceEl
 * @param root0.floatingEl
 * @param root0.overlayPositioning
 * @param root0.placement
 * @param root0.flipDisabled
 * @param root0.flipPlacements
 * @param root0.offsetDistance
 * @param root0.offsetSkidding
 * @param root0.arrowEl
 * @param root0.type
 * @param component
 * @param root0.referenceEl.referenceEl
 * @param root0.referenceEl.floatingEl
 * @param root0.referenceEl.overlayPositioning
 * @param root0.referenceEl.placement
 * @param root0.referenceEl.flipDisabled
 * @param root0.referenceEl.flipPlacements
 * @param root0.referenceEl.offsetDistance
 * @param root0.referenceEl.offsetSkidding
 * @param root0.referenceEl.arrowEl
 * @param root0.referenceEl.type
 * @param component.referenceEl
 * @param component.floatingEl
 * @param component.overlayPositioning
 * @param component.placement
 * @param component.flipDisabled
 * @param component.flipPlacements
 * @param component.offsetDistance
 * @param component.offsetSkidding
 * @param component.arrowEl
 * @param component.type
 */
const positionFloatingUI = 
/* we export arrow function to allow us to spy on it during testing */
async (component, { referenceEl, floatingEl, overlayPositioning = "absolute", placement, flipDisabled, flipPlacements, offsetDistance, offsetSkidding, arrowEl, type, }) => {
  if (!referenceEl || !floatingEl) {
    return null;
  }
  const { x, y, placement: effectivePlacement, strategy: position, middlewareData, } = await computePosition(referenceEl, floatingEl, {
    strategy: overlayPositioning,
    placement: placement === "auto" || placement === "auto-start" || placement === "auto-end"
      ? undefined
      : getEffectivePlacement(floatingEl, placement),
    middleware: getMiddleware({
      placement,
      flipDisabled,
      flipPlacements,
      offsetDistance,
      offsetSkidding,
      arrowEl,
      type,
    }),
  });
  if (arrowEl && middlewareData.arrow) {
    const { x, y } = middlewareData.arrow;
    const side = effectivePlacement.split("-")[0];
    const alignment = x != null ? "left" : "top";
    const transform = ARROW_CSS_TRANSFORM[side];
    const reset = { left: "", top: "", bottom: "", right: "" };
    if ("floatingLayout" in component) {
      component.floatingLayout = side === "left" || side === "right" ? "horizontal" : "vertical";
    }
    Object.assign(arrowEl.style, {
      ...reset,
      [alignment]: `${alignment == "left" ? x : y}px`,
      [side]: "100%",
      transform,
    });
  }
  const referenceHidden = middlewareData.hide?.referenceHidden;
  const visibility = referenceHidden ? "hidden" : null;
  const pointerEvents = visibility ? "none" : null;
  floatingEl.setAttribute(placementDataAttribute, effectivePlacement);
  const transform = `translate(${Math.round(x)}px,${Math.round(y)}px)`;
  Object.assign(floatingEl.style, {
    visibility,
    pointerEvents,
    position,
    top: "0",
    left: "0",
    transform,
  });
};
/**
 * Exported for testing purposes only
 */
const placementDataAttribute = "data-placement";
/**
 * Exported for testing purposes only
 */
const repositionDebounceTimeout = 100;
const effectivePlacements = [
  "top",
  "bottom",
  "right",
  "left",
  "top-start",
  "top-end",
  "bottom-start",
  "bottom-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
];
const defaultMenuPlacement = "bottom-start";
const FloatingCSS = {
  animation: "calcite-floating-ui-anim",
  animationActive: "calcite-floating-ui-anim--active",
};
function getMiddleware({ placement, flipDisabled, flipPlacements, offsetDistance, offsetSkidding, arrowEl, type, }) {
  const defaultMiddleware = [shift(), hide()];
  if (type === "menu") {
    return [
      ...defaultMiddleware,
      flip({
        fallbackPlacements: flipPlacements || ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"],
      }),
    ];
  }
  if (type === "popover" || type === "tooltip") {
    const middleware = [
      ...defaultMiddleware,
      offset({
        mainAxis: typeof offsetDistance === "number" ? offsetDistance : 0,
        crossAxis: typeof offsetSkidding === "number" ? offsetSkidding : 0,
      }),
    ];
    if (placement === "auto" || placement === "auto-start" || placement === "auto-end") {
      middleware.push(autoPlacement({ alignment: placement === "auto-start" ? "start" : placement === "auto-end" ? "end" : null }));
    }
    else if (!flipDisabled) {
      middleware.push(flip(flipPlacements ? { fallbackPlacements: flipPlacements } : {}));
    }
    if (arrowEl) {
      middleware.push(arrow({
        element: arrowEl,
      }));
    }
    return middleware;
  }
  return [];
}
function filterComputedPlacements(placements, el) {
  const filteredPlacements = placements.filter((placement) => effectivePlacements.includes(placement));
  if (filteredPlacements.length !== placements.length) {
    console.warn(`${el.tagName}: Invalid value found in: flipPlacements. Try any of these: ${effectivePlacements
      .map((placement) => `"${placement}"`)
      .join(", ")
      .trim()}`, { el });
  }
  return filteredPlacements;
}
function getEffectivePlacement(floatingEl, placement) {
  const placements = ["left", "right"];
  if ((0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(floatingEl) === "rtl") {
    placements.reverse();
  }
  return placement.replace(/leading/gi, placements[0]).replace(/trailing/gi, placements[1]);
}
/**
 * Convenience function to manage `reposition` calls for FloatingUIComponents that use `positionFloatingUI.
 *
 * Note: this is not needed for components that use `calcite-popover`.
 *
 * @param component - A floating-ui component.
 * @param options - Reposition parameters.
 * @param options.referenceEl - The `referenceElement` used to position the component according to its `placement` value.
 * @param options.floatingEl - The `floatingElement` containing the floating ui.
 * @param options.overlayPositioning - type of positioning to use for the overlaid content.
 * @param options.placement - Determines where the component will be positioned relative to the `referenceElement`.
 * @param options.flipDisabled - Prevents flipping the component's placement when overlapping its `referenceElement`.
 * @param options.flipPlacements - Defines the available placements that can be used when a flip occurs.
 * @param options.offsetDistance - Offsets the position of the popover away from the `referenceElement`.
 * @param options.offsetSkidding - Offsets the position of the component along the `referenceElement`.
 * @param options.arrowEl - A customizable arrow element.
 * @param options.type - The type of floating UI.
 * @param delayed - Reposition the component after a delay.
 * @returns {Promise<void>}
 */
async function reposition(component, options, delayed = false) {
  const positionFunction = delayed ? getDebouncedReposition(component) : positionFloatingUI;
  return positionFunction(component, options);
}
function getDebouncedReposition(component) {
  let debounced = componentToDebouncedRepositionMap.get(component);
  if (debounced) {
    return debounced;
  }
  debounced = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_1__.d)(positionFloatingUI, repositionDebounceTimeout, {
    leading: true,
    maxWait: repositionDebounceTimeout,
  });
  componentToDebouncedRepositionMap.set(component, debounced);
  return debounced;
}
const ARROW_CSS_TRANSFORM = {
  top: "",
  left: "rotate(-90deg)",
  bottom: "rotate(180deg)",
  right: "rotate(90deg)",
};
/**
 * Exported for testing purposes only
 *
 * @internal
 */
const cleanupMap = new WeakMap();
const componentToDebouncedRepositionMap = new WeakMap();
/**
 * Helper to set up floating element interactions on connectedCallback.
 *
 * @param component - A floating-ui component.
 * @param referenceEl - The `referenceElement` used to position the component according to its `placement` value.
 * @param floatingEl - The `floatingElement` containing the floating ui.
 */
function connectFloatingUI(component, referenceEl, floatingEl) {
  if (!floatingEl || !referenceEl) {
    return;
  }
  disconnectFloatingUI(component, referenceEl, floatingEl);
  Object.assign(floatingEl.style, {
    visibility: "hidden",
    pointerEvents: "none",
    // initial positioning based on https://floating-ui.com/docs/computePosition#initial-layout
    position: component.overlayPositioning,
    top: "0",
    left: "0",
  });
  const runAutoUpdate = _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Build.isBrowser
    ? autoUpdate
    : (_refEl, _floatingEl, updateCallback) => {
      updateCallback();
      return () => {
        /* noop */
      };
    };
  cleanupMap.set(component, runAutoUpdate(referenceEl, floatingEl, () => component.reposition()));
}
/**
 * Helper to tear down floating element interactions on disconnectedCallback.
 *
 * @param component - A floating-ui component.
 * @param referenceEl - The `referenceElement` used to position the component according to its `placement` value.
 * @param floatingEl - The `floatingElement` containing the floating ui.
 */
function disconnectFloatingUI(component, referenceEl, floatingEl) {
  if (!floatingEl || !referenceEl) {
    return;
  }
  cleanupMap.get(component)?.();
  cleanupMap.delete(component);
  componentToDebouncedRepositionMap.get(component)?.cancel();
  componentToDebouncedRepositionMap.delete(component);
}
const visiblePointerSize = 4;
/**
 * Default offset the position of the floating element away from the reference element.
 *
 * @default 6
 */
const defaultOffsetDistance = Math.ceil(Math.hypot(visiblePointerSize, visiblePointerSize));




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ onToggleOpenCloseComponent)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


function isOpen(component) {
  return "opened" in component ? component.opened : component.open;
}
function emitImmediately(component, nonOpenCloseComponent = false) {
  (nonOpenCloseComponent ? component[component.transitionProp] : isOpen(component))
    ? component.onBeforeOpen()
    : component.onBeforeClose();
  (nonOpenCloseComponent ? component[component.transitionProp] : isOpen(component))
    ? component.onOpen()
    : component.onClose();
}
/**
 * Helper to determine globally set transition duration on the given openTransitionProp, which is imported and set in the @Watch("open").
 * Used to emit (before)open/close events both for when the opacity transition is present and when there is none (transition-duration is set to 0).
 *
 * @example
 * import { onToggleOpenCloseComponent, OpenCloseComponent } from "../../utils/openCloseComponent";
 *
 * async componentWillLoad() {
 * // When component initially renders, if `open` was set we need to trigger on load as watcher doesn't fire.
 * if (this.open) {
 *    onToggleOpenCloseComponent(this);
 * }
 * @Watch("open")
 * async toggleModal(value: boolean): Promise<void> {
 *    onToggleOpenCloseComponent(this);
 * }
 *
 * @param component - OpenCloseComponent uses `open` prop to emit (before)open/close.
 * @param nonOpenCloseComponent - OpenCloseComponent uses `expanded` prop to emit (before)open/close.
 */
function onToggleOpenCloseComponent(component, nonOpenCloseComponent = false) {
  (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.readTask)(() => {
    if (component.transitionEl) {
      const { transitionDuration: allDurations, transitionProperty: allProps } = getComputedStyle(component.transitionEl);
      const allTransitionDurationsArray = allDurations.split(",");
      const allTransitionPropsArray = allProps.split(",");
      const openTransitionPropIndex = allTransitionPropsArray.indexOf(component.openTransitionProp);
      const transitionDuration = allTransitionDurationsArray[openTransitionPropIndex] ??
        /* Safari will have a single transition value if multiple props share it,
        so we fall back to it if there's no matching prop duration */
        allTransitionDurationsArray[0];
      if (transitionDuration === "0s") {
        emitImmediately(component, nonOpenCloseComponent);
        return;
      }
      const fallbackTimeoutId = setTimeout(() => {
        component.transitionEl.removeEventListener("transitionstart", onStart);
        component.transitionEl.removeEventListener("transitionend", onEndOrCancel);
        component.transitionEl.removeEventListener("transitioncancel", onEndOrCancel);
        emitImmediately(component, nonOpenCloseComponent);
      }, parseFloat(transitionDuration) * 1000);
      component.transitionEl.addEventListener("transitionstart", onStart);
      component.transitionEl.addEventListener("transitionend", onEndOrCancel);
      component.transitionEl.addEventListener("transitioncancel", onEndOrCancel);
      function onStart(event) {
        if (event.propertyName === component.openTransitionProp && event.target === component.transitionEl) {
          clearTimeout(fallbackTimeoutId);
          component.transitionEl.removeEventListener("transitionstart", onStart);
          (nonOpenCloseComponent ? component[component.transitionProp] : isOpen(component))
            ? component.onBeforeOpen()
            : component.onBeforeClose();
        }
      }
      function onEndOrCancel(event) {
        if (event.propertyName === component.openTransitionProp && event.target === component.transitionEl) {
          (nonOpenCloseComponent ? component[component.transitionProp] : isOpen(component))
            ? component.onOpen()
            : component.onClose();
          component.transitionEl.removeEventListener("transitionend", onEndOrCancel);
          component.transitionEl.removeEventListener("transitioncancel", onEndOrCancel);
        }
      }
    }
  });
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOTgxYzI4ZWEyOWJkYTY0NWRkNjU2OWNkMzc5YTk0OTAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0Q7QUFDakI7QUFDQTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNEJBQTRCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFVBQVU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsVUFBVTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSx5RUFBSztBQUNYO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtSkFBbUo7QUFDdks7QUFDQTtBQUNBO0FBQ0EsVUFBVSwyRUFBMkU7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGNBQWMsS0FBSyxjQUFjO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlGQUF5RjtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esc0NBQXNDLDJGQUEyRjtBQUNqSTtBQUNBO0FBQ0EsOENBQThDLHFDQUFxQyxJQUFJO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVyw4REFBOEQ7QUFDN0YsOEJBQThCLFVBQVU7QUFDeEM7QUFDQSxjQUFjLEtBQUssSUFBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwQ0FBYTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsK0NBQVE7QUFDdEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHdCQUF3Qix5RUFBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzTDs7Ozs7Ozs7Ozs7Ozs7OztBQ3YyRHRMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0U7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpREFBaUQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnRkFBUTtBQUNWO0FBQ0EsY0FBYyxpRUFBaUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRTJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2Zsb2F0aW5nLXVpLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9vcGVuQ2xvc2VDb21wb25lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldEVsZW1lbnREaXIgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlYm91bmNlIH0gZnJvbSAnLi9kZWJvdW5jZS5qcyc7XG5cbmNvbnN0IHNpZGVzID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXTtcbmNvbnN0IGFsaWdubWVudHMgPSBbJ3N0YXJ0JywgJ2VuZCddO1xuY29uc3QgcGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9zaWRlcy5yZWR1Y2UoKGFjYywgc2lkZSkgPT4gYWNjLmNvbmNhdChzaWRlLCBzaWRlICsgXCItXCIgKyBhbGlnbm1lbnRzWzBdLCBzaWRlICsgXCItXCIgKyBhbGlnbm1lbnRzWzFdKSwgW10pO1xuY29uc3QgbWluID0gTWF0aC5taW47XG5jb25zdCBtYXggPSBNYXRoLm1heDtcbmNvbnN0IHJvdW5kID0gTWF0aC5yb3VuZDtcbmNvbnN0IGZsb29yID0gTWF0aC5mbG9vcjtcbmNvbnN0IGNyZWF0ZUNvb3JkcyA9IHYgPT4gKHtcbiAgeDogdixcbiAgeTogdlxufSk7XG5jb25zdCBvcHBvc2l0ZVNpZGVNYXAgPSB7XG4gIGxlZnQ6ICdyaWdodCcsXG4gIHJpZ2h0OiAnbGVmdCcsXG4gIGJvdHRvbTogJ3RvcCcsXG4gIHRvcDogJ2JvdHRvbSdcbn07XG5jb25zdCBvcHBvc2l0ZUFsaWdubWVudE1hcCA9IHtcbiAgc3RhcnQ6ICdlbmQnLFxuICBlbmQ6ICdzdGFydCdcbn07XG5mdW5jdGlvbiBjbGFtcChzdGFydCwgdmFsdWUsIGVuZCkge1xuICByZXR1cm4gbWF4KHN0YXJ0LCBtaW4odmFsdWUsIGVuZCkpO1xufVxuZnVuY3Rpb24gZXZhbHVhdGUodmFsdWUsIHBhcmFtKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZShwYXJhbSkgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGdldFNpZGUocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbn1cbmZ1bmN0aW9uIGdldEFsaWdubWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xufVxuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVBeGlzKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09ICd4JyA/ICd5JyA6ICd4Jztcbn1cbmZ1bmN0aW9uIGdldEF4aXNMZW5ndGgoYXhpcykge1xuICByZXR1cm4gYXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xufVxuZnVuY3Rpb24gZ2V0U2lkZUF4aXMocGxhY2VtZW50KSB7XG4gIHJldHVybiBbJ3RvcCcsICdib3R0b20nXS5pbmNsdWRlcyhnZXRTaWRlKHBsYWNlbWVudCkpID8gJ3knIDogJ3gnO1xufVxuZnVuY3Rpb24gZ2V0QWxpZ25tZW50QXhpcyhwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGdldE9wcG9zaXRlQXhpcyhnZXRTaWRlQXhpcyhwbGFjZW1lbnQpKTtcbn1cbmZ1bmN0aW9uIGdldEFsaWdubWVudFNpZGVzKHBsYWNlbWVudCwgcmVjdHMsIHJ0bCkge1xuICBpZiAocnRsID09PSB2b2lkIDApIHtcbiAgICBydGwgPSBmYWxzZTtcbiAgfVxuICBjb25zdCBhbGlnbm1lbnQgPSBnZXRBbGlnbm1lbnQocGxhY2VtZW50KTtcbiAgY29uc3QgYWxpZ25tZW50QXhpcyA9IGdldEFsaWdubWVudEF4aXMocGxhY2VtZW50KTtcbiAgY29uc3QgbGVuZ3RoID0gZ2V0QXhpc0xlbmd0aChhbGlnbm1lbnRBeGlzKTtcbiAgbGV0IG1haW5BbGlnbm1lbnRTaWRlID0gYWxpZ25tZW50QXhpcyA9PT0gJ3gnID8gYWxpZ25tZW50ID09PSAocnRsID8gJ2VuZCcgOiAnc3RhcnQnKSA/ICdyaWdodCcgOiAnbGVmdCcgOiBhbGlnbm1lbnQgPT09ICdzdGFydCcgPyAnYm90dG9tJyA6ICd0b3AnO1xuICBpZiAocmVjdHMucmVmZXJlbmNlW2xlbmd0aF0gPiByZWN0cy5mbG9hdGluZ1tsZW5ndGhdKSB7XG4gICAgbWFpbkFsaWdubWVudFNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluQWxpZ25tZW50U2lkZSk7XG4gIH1cbiAgcmV0dXJuIFttYWluQWxpZ25tZW50U2lkZSwgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpbkFsaWdubWVudFNpZGUpXTtcbn1cbmZ1bmN0aW9uIGdldEV4cGFuZGVkUGxhY2VtZW50cyhwbGFjZW1lbnQpIHtcbiAgY29uc3Qgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICByZXR1cm4gW2dldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xufVxuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvc3RhcnR8ZW5kL2csIGFsaWdubWVudCA9PiBvcHBvc2l0ZUFsaWdubWVudE1hcFthbGlnbm1lbnRdKTtcbn1cbmZ1bmN0aW9uIGdldFNpZGVMaXN0KHNpZGUsIGlzU3RhcnQsIHJ0bCkge1xuICBjb25zdCBsciA9IFsnbGVmdCcsICdyaWdodCddO1xuICBjb25zdCBybCA9IFsncmlnaHQnLCAnbGVmdCddO1xuICBjb25zdCB0YiA9IFsndG9wJywgJ2JvdHRvbSddO1xuICBjb25zdCBidCA9IFsnYm90dG9tJywgJ3RvcCddO1xuICBzd2l0Y2ggKHNpZGUpIHtcbiAgICBjYXNlICd0b3AnOlxuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICBpZiAocnRsKSByZXR1cm4gaXNTdGFydCA/IHJsIDogbHI7XG4gICAgICByZXR1cm4gaXNTdGFydCA/IGxyIDogcmw7XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgY2FzZSAncmlnaHQnOlxuICAgICAgcmV0dXJuIGlzU3RhcnQgPyB0YiA6IGJ0O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gW107XG4gIH1cbn1cbmZ1bmN0aW9uIGdldE9wcG9zaXRlQXhpc1BsYWNlbWVudHMocGxhY2VtZW50LCBmbGlwQWxpZ25tZW50LCBkaXJlY3Rpb24sIHJ0bCkge1xuICBjb25zdCBhbGlnbm1lbnQgPSBnZXRBbGlnbm1lbnQocGxhY2VtZW50KTtcbiAgbGV0IGxpc3QgPSBnZXRTaWRlTGlzdChnZXRTaWRlKHBsYWNlbWVudCksIGRpcmVjdGlvbiA9PT0gJ3N0YXJ0JywgcnRsKTtcbiAgaWYgKGFsaWdubWVudCkge1xuICAgIGxpc3QgPSBsaXN0Lm1hcChzaWRlID0+IHNpZGUgKyBcIi1cIiArIGFsaWdubWVudCk7XG4gICAgaWYgKGZsaXBBbGlnbm1lbnQpIHtcbiAgICAgIGxpc3QgPSBsaXN0LmNvbmNhdChsaXN0Lm1hcChnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudCkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbGlzdDtcbn1cbmZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBzaWRlID0+IG9wcG9zaXRlU2lkZU1hcFtzaWRlXSk7XG59XG5mdW5jdGlvbiBleHBhbmRQYWRkaW5nT2JqZWN0KHBhZGRpbmcpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgLi4ucGFkZGluZ1xuICB9O1xufVxuZnVuY3Rpb24gZ2V0UGFkZGluZ09iamVjdChwYWRkaW5nKSB7XG4gIHJldHVybiB0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBleHBhbmRQYWRkaW5nT2JqZWN0KHBhZGRpbmcpIDoge1xuICAgIHRvcDogcGFkZGluZyxcbiAgICByaWdodDogcGFkZGluZyxcbiAgICBib3R0b206IHBhZGRpbmcsXG4gICAgbGVmdDogcGFkZGluZ1xuICB9O1xufVxuZnVuY3Rpb24gcmVjdFRvQ2xpZW50UmVjdChyZWN0KSB7XG4gIHJldHVybiB7XG4gICAgLi4ucmVjdCxcbiAgICB0b3A6IHJlY3QueSxcbiAgICBsZWZ0OiByZWN0LngsXG4gICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICB9O1xufVxuXG5mdW5jdGlvbiBjb21wdXRlQ29vcmRzRnJvbVBsYWNlbWVudChfcmVmLCBwbGFjZW1lbnQsIHJ0bCkge1xuICBsZXQge1xuICAgIHJlZmVyZW5jZSxcbiAgICBmbG9hdGluZ1xuICB9ID0gX3JlZjtcbiAgY29uc3Qgc2lkZUF4aXMgPSBnZXRTaWRlQXhpcyhwbGFjZW1lbnQpO1xuICBjb25zdCBhbGlnbm1lbnRBeGlzID0gZ2V0QWxpZ25tZW50QXhpcyhwbGFjZW1lbnQpO1xuICBjb25zdCBhbGlnbkxlbmd0aCA9IGdldEF4aXNMZW5ndGgoYWxpZ25tZW50QXhpcyk7XG4gIGNvbnN0IHNpZGUgPSBnZXRTaWRlKHBsYWNlbWVudCk7XG4gIGNvbnN0IGlzVmVydGljYWwgPSBzaWRlQXhpcyA9PT0gJ3knO1xuICBjb25zdCBjb21tb25YID0gcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGggLyAyIC0gZmxvYXRpbmcud2lkdGggLyAyO1xuICBjb25zdCBjb21tb25ZID0gcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0IC8gMiAtIGZsb2F0aW5nLmhlaWdodCAvIDI7XG4gIGNvbnN0IGNvbW1vbkFsaWduID0gcmVmZXJlbmNlW2FsaWduTGVuZ3RoXSAvIDIgLSBmbG9hdGluZ1thbGlnbkxlbmd0aF0gLyAyO1xuICBsZXQgY29vcmRzO1xuICBzd2l0Y2ggKHNpZGUpIHtcbiAgICBjYXNlICd0b3AnOlxuICAgICAgY29vcmRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSAtIGZsb2F0aW5nLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIGNvb3JkcyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlICdsZWZ0JzpcbiAgICAgIGNvb3JkcyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggLSBmbG9hdGluZy53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54LFxuICAgICAgICB5OiByZWZlcmVuY2UueVxuICAgICAgfTtcbiAgfVxuICBzd2l0Y2ggKGdldEFsaWdubWVudChwbGFjZW1lbnQpKSB7XG4gICAgY2FzZSAnc3RhcnQnOlxuICAgICAgY29vcmRzW2FsaWdubWVudEF4aXNdIC09IGNvbW1vbkFsaWduICogKHJ0bCAmJiBpc1ZlcnRpY2FsID8gLTEgOiAxKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2VuZCc6XG4gICAgICBjb29yZHNbYWxpZ25tZW50QXhpc10gKz0gY29tbW9uQWxpZ24gKiAocnRsICYmIGlzVmVydGljYWwgPyAtMSA6IDEpO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgYHhgIGFuZCBgeWAgY29vcmRpbmF0ZXMgdGhhdCB3aWxsIHBsYWNlIHRoZSBmbG9hdGluZyBlbGVtZW50XG4gKiBuZXh0IHRvIGEgcmVmZXJlbmNlIGVsZW1lbnQgd2hlbiBpdCBpcyBnaXZlbiBhIGNlcnRhaW4gcG9zaXRpb25pbmcgc3RyYXRlZ3kuXG4gKlxuICogVGhpcyBleHBvcnQgZG9lcyBub3QgaGF2ZSBhbnkgYHBsYXRmb3JtYCBpbnRlcmZhY2UgbG9naWMuIFlvdSB3aWxsIG5lZWQgdG9cbiAqIHdyaXRlIG9uZSBmb3IgdGhlIHBsYXRmb3JtIHlvdSBhcmUgdXNpbmcgRmxvYXRpbmcgVUkgd2l0aC5cbiAqL1xuY29uc3QgY29tcHV0ZVBvc2l0aW9uJDEgPSBhc3luYyAocmVmZXJlbmNlLCBmbG9hdGluZywgY29uZmlnKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwbGFjZW1lbnQgPSAnYm90dG9tJyxcbiAgICBzdHJhdGVneSA9ICdhYnNvbHV0ZScsXG4gICAgbWlkZGxld2FyZSA9IFtdLFxuICAgIHBsYXRmb3JtXG4gIH0gPSBjb25maWc7XG4gIGNvbnN0IHZhbGlkTWlkZGxld2FyZSA9IG1pZGRsZXdhcmUuZmlsdGVyKEJvb2xlYW4pO1xuICBjb25zdCBydGwgPSBhd2FpdCAocGxhdGZvcm0uaXNSVEwgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtLmlzUlRMKGZsb2F0aW5nKSk7XG4gIGxldCByZWN0cyA9IGF3YWl0IHBsYXRmb3JtLmdldEVsZW1lbnRSZWN0cyh7XG4gICAgcmVmZXJlbmNlLFxuICAgIGZsb2F0aW5nLFxuICAgIHN0cmF0ZWd5XG4gIH0pO1xuICBsZXQge1xuICAgIHgsXG4gICAgeVxuICB9ID0gY29tcHV0ZUNvb3Jkc0Zyb21QbGFjZW1lbnQocmVjdHMsIHBsYWNlbWVudCwgcnRsKTtcbiAgbGV0IHN0YXRlZnVsUGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICBsZXQgbWlkZGxld2FyZURhdGEgPSB7fTtcbiAgbGV0IHJlc2V0Q291bnQgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbGlkTWlkZGxld2FyZS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBmblxuICAgIH0gPSB2YWxpZE1pZGRsZXdhcmVbaV07XG4gICAgY29uc3Qge1xuICAgICAgeDogbmV4dFgsXG4gICAgICB5OiBuZXh0WSxcbiAgICAgIGRhdGEsXG4gICAgICByZXNldFxuICAgIH0gPSBhd2FpdCBmbih7XG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIGluaXRpYWxQbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudDogc3RhdGVmdWxQbGFjZW1lbnQsXG4gICAgICBzdHJhdGVneSxcbiAgICAgIG1pZGRsZXdhcmVEYXRhLFxuICAgICAgcmVjdHMsXG4gICAgICBwbGF0Zm9ybSxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHJlZmVyZW5jZSxcbiAgICAgICAgZmxvYXRpbmdcbiAgICAgIH1cbiAgICB9KTtcbiAgICB4ID0gbmV4dFggIT0gbnVsbCA/IG5leHRYIDogeDtcbiAgICB5ID0gbmV4dFkgIT0gbnVsbCA/IG5leHRZIDogeTtcbiAgICBtaWRkbGV3YXJlRGF0YSA9IHtcbiAgICAgIC4uLm1pZGRsZXdhcmVEYXRhLFxuICAgICAgW25hbWVdOiB7XG4gICAgICAgIC4uLm1pZGRsZXdhcmVEYXRhW25hbWVdLFxuICAgICAgICAuLi5kYXRhXG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAocmVzZXQgJiYgcmVzZXRDb3VudCA8PSA1MCkge1xuICAgICAgcmVzZXRDb3VudCsrO1xuICAgICAgaWYgKHR5cGVvZiByZXNldCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKHJlc2V0LnBsYWNlbWVudCkge1xuICAgICAgICAgIHN0YXRlZnVsUGxhY2VtZW50ID0gcmVzZXQucGxhY2VtZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNldC5yZWN0cykge1xuICAgICAgICAgIHJlY3RzID0gcmVzZXQucmVjdHMgPT09IHRydWUgPyBhd2FpdCBwbGF0Zm9ybS5nZXRFbGVtZW50UmVjdHMoe1xuICAgICAgICAgICAgcmVmZXJlbmNlLFxuICAgICAgICAgICAgZmxvYXRpbmcsXG4gICAgICAgICAgICBzdHJhdGVneVxuICAgICAgICAgIH0pIDogcmVzZXQucmVjdHM7XG4gICAgICAgIH1cbiAgICAgICAgKHtcbiAgICAgICAgICB4LFxuICAgICAgICAgIHlcbiAgICAgICAgfSA9IGNvbXB1dGVDb29yZHNGcm9tUGxhY2VtZW50KHJlY3RzLCBzdGF0ZWZ1bFBsYWNlbWVudCwgcnRsKSk7XG4gICAgICB9XG4gICAgICBpID0gLTE7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4LFxuICAgIHksXG4gICAgcGxhY2VtZW50OiBzdGF0ZWZ1bFBsYWNlbWVudCxcbiAgICBzdHJhdGVneSxcbiAgICBtaWRkbGV3YXJlRGF0YVxuICB9O1xufTtcblxuLyoqXG4gKiBSZXNvbHZlcyB3aXRoIGFuIG9iamVjdCBvZiBvdmVyZmxvdyBzaWRlIG9mZnNldHMgdGhhdCBkZXRlcm1pbmUgaG93IG11Y2ggdGhlXG4gKiBlbGVtZW50IGlzIG92ZXJmbG93aW5nIGEgZ2l2ZW4gY2xpcHBpbmcgYm91bmRhcnkgb24gZWFjaCBzaWRlLlxuICogLSBwb3NpdGl2ZSA9IG92ZXJmbG93aW5nIHRoZSBib3VuZGFyeSBieSB0aGF0IG51bWJlciBvZiBwaXhlbHNcbiAqIC0gbmVnYXRpdmUgPSBob3cgbWFueSBwaXhlbHMgbGVmdCBiZWZvcmUgaXQgd2lsbCBvdmVyZmxvd1xuICogLSAwID0gbGllcyBmbHVzaCB3aXRoIHRoZSBib3VuZGFyeVxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2RldGVjdE92ZXJmbG93XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gIHZhciBfYXdhaXQkcGxhdGZvcm0kaXNFbGU7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgY29uc3Qge1xuICAgIHgsXG4gICAgeSxcbiAgICBwbGF0Zm9ybSxcbiAgICByZWN0cyxcbiAgICBlbGVtZW50cyxcbiAgICBzdHJhdGVneVxuICB9ID0gc3RhdGU7XG4gIGNvbnN0IHtcbiAgICBib3VuZGFyeSA9ICdjbGlwcGluZ0FuY2VzdG9ycycsXG4gICAgcm9vdEJvdW5kYXJ5ID0gJ3ZpZXdwb3J0JyxcbiAgICBlbGVtZW50Q29udGV4dCA9ICdmbG9hdGluZycsXG4gICAgYWx0Qm91bmRhcnkgPSBmYWxzZSxcbiAgICBwYWRkaW5nID0gMFxuICB9ID0gZXZhbHVhdGUob3B0aW9ucywgc3RhdGUpO1xuICBjb25zdCBwYWRkaW5nT2JqZWN0ID0gZ2V0UGFkZGluZ09iamVjdChwYWRkaW5nKTtcbiAgY29uc3QgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSAnZmxvYXRpbmcnID8gJ3JlZmVyZW5jZScgOiAnZmxvYXRpbmcnO1xuICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICBjb25zdCBjbGlwcGluZ0NsaWVudFJlY3QgPSByZWN0VG9DbGllbnRSZWN0KGF3YWl0IHBsYXRmb3JtLmdldENsaXBwaW5nUmVjdCh7XG4gICAgZWxlbWVudDogKChfYXdhaXQkcGxhdGZvcm0kaXNFbGUgPSBhd2FpdCAocGxhdGZvcm0uaXNFbGVtZW50ID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybS5pc0VsZW1lbnQoZWxlbWVudCkpKSAhPSBudWxsID8gX2F3YWl0JHBsYXRmb3JtJGlzRWxlIDogdHJ1ZSkgPyBlbGVtZW50IDogZWxlbWVudC5jb250ZXh0RWxlbWVudCB8fCAoYXdhaXQgKHBsYXRmb3JtLmdldERvY3VtZW50RWxlbWVudCA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0uZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnRzLmZsb2F0aW5nKSkpLFxuICAgIGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeSxcbiAgICBzdHJhdGVneVxuICB9KSk7XG4gIGNvbnN0IHJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gJ2Zsb2F0aW5nJyA/IHtcbiAgICAuLi5yZWN0cy5mbG9hdGluZyxcbiAgICB4LFxuICAgIHlcbiAgfSA6IHJlY3RzLnJlZmVyZW5jZTtcbiAgY29uc3Qgb2Zmc2V0UGFyZW50ID0gYXdhaXQgKHBsYXRmb3JtLmdldE9mZnNldFBhcmVudCA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0uZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnRzLmZsb2F0aW5nKSk7XG4gIGNvbnN0IG9mZnNldFNjYWxlID0gKGF3YWl0IChwbGF0Zm9ybS5pc0VsZW1lbnQgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtLmlzRWxlbWVudChvZmZzZXRQYXJlbnQpKSkgPyAoYXdhaXQgKHBsYXRmb3JtLmdldFNjYWxlID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybS5nZXRTY2FsZShvZmZzZXRQYXJlbnQpKSkgfHwge1xuICAgIHg6IDEsXG4gICAgeTogMVxuICB9IDoge1xuICAgIHg6IDEsXG4gICAgeTogMVxuICB9O1xuICBjb25zdCBlbGVtZW50Q2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QocGxhdGZvcm0uY29udmVydE9mZnNldFBhcmVudFJlbGF0aXZlUmVjdFRvVmlld3BvcnRSZWxhdGl2ZVJlY3QgPyBhd2FpdCBwbGF0Zm9ybS5jb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdCh7XG4gICAgcmVjdCxcbiAgICBvZmZzZXRQYXJlbnQsXG4gICAgc3RyYXRlZ3lcbiAgfSkgOiByZWN0KTtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IChjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3ApIC8gb2Zmc2V0U2NhbGUueSxcbiAgICBib3R0b206IChlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20pIC8gb2Zmc2V0U2NhbGUueSxcbiAgICBsZWZ0OiAoY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0KSAvIG9mZnNldFNjYWxlLngsXG4gICAgcmlnaHQ6IChlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHQpIC8gb2Zmc2V0U2NhbGUueFxuICB9O1xufVxuXG4vKipcbiAqIFByb3ZpZGVzIGRhdGEgdG8gcG9zaXRpb24gYW4gaW5uZXIgZWxlbWVudCBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBzbyB0aGF0IGl0XG4gKiBhcHBlYXJzIGNlbnRlcmVkIHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9hcnJvd1xuICovXG5jb25zdCBhcnJvdyA9IG9wdGlvbnMgPT4gKHtcbiAgbmFtZTogJ2Fycm93JyxcbiAgb3B0aW9ucyxcbiAgYXN5bmMgZm4oc3RhdGUpIHtcbiAgICBjb25zdCB7XG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIHJlY3RzLFxuICAgICAgcGxhdGZvcm0sXG4gICAgICBlbGVtZW50cyxcbiAgICAgIG1pZGRsZXdhcmVEYXRhXG4gICAgfSA9IHN0YXRlO1xuICAgIC8vIFNpbmNlIGBlbGVtZW50YCBpcyByZXF1aXJlZCwgd2UgZG9uJ3QgUGFydGlhbDw+IHRoZSB0eXBlLlxuICAgIGNvbnN0IHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBwYWRkaW5nID0gMFxuICAgIH0gPSBldmFsdWF0ZShvcHRpb25zLCBzdGF0ZSkgfHwge307XG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCBwYWRkaW5nT2JqZWN0ID0gZ2V0UGFkZGluZ09iamVjdChwYWRkaW5nKTtcbiAgICBjb25zdCBjb29yZHMgPSB7XG4gICAgICB4LFxuICAgICAgeVxuICAgIH07XG4gICAgY29uc3QgYXhpcyA9IGdldEFsaWdubWVudEF4aXMocGxhY2VtZW50KTtcbiAgICBjb25zdCBsZW5ndGggPSBnZXRBeGlzTGVuZ3RoKGF4aXMpO1xuICAgIGNvbnN0IGFycm93RGltZW5zaW9ucyA9IGF3YWl0IHBsYXRmb3JtLmdldERpbWVuc2lvbnMoZWxlbWVudCk7XG4gICAgY29uc3QgaXNZQXhpcyA9IGF4aXMgPT09ICd5JztcbiAgICBjb25zdCBtaW5Qcm9wID0gaXNZQXhpcyA/ICd0b3AnIDogJ2xlZnQnO1xuICAgIGNvbnN0IG1heFByb3AgPSBpc1lBeGlzID8gJ2JvdHRvbScgOiAncmlnaHQnO1xuICAgIGNvbnN0IGNsaWVudFByb3AgPSBpc1lBeGlzID8gJ2NsaWVudEhlaWdodCcgOiAnY2xpZW50V2lkdGgnO1xuICAgIGNvbnN0IGVuZERpZmYgPSByZWN0cy5yZWZlcmVuY2VbbGVuZ3RoXSArIHJlY3RzLnJlZmVyZW5jZVtheGlzXSAtIGNvb3Jkc1theGlzXSAtIHJlY3RzLmZsb2F0aW5nW2xlbmd0aF07XG4gICAgY29uc3Qgc3RhcnREaWZmID0gY29vcmRzW2F4aXNdIC0gcmVjdHMucmVmZXJlbmNlW2F4aXNdO1xuICAgIGNvbnN0IGFycm93T2Zmc2V0UGFyZW50ID0gYXdhaXQgKHBsYXRmb3JtLmdldE9mZnNldFBhcmVudCA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0uZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpKTtcbiAgICBsZXQgY2xpZW50U2l6ZSA9IGFycm93T2Zmc2V0UGFyZW50ID8gYXJyb3dPZmZzZXRQYXJlbnRbY2xpZW50UHJvcF0gOiAwO1xuXG4gICAgLy8gRE9NIHBsYXRmb3JtIGNhbiByZXR1cm4gYHdpbmRvd2AgYXMgdGhlIGBvZmZzZXRQYXJlbnRgLlxuICAgIGlmICghY2xpZW50U2l6ZSB8fCAhKGF3YWl0IChwbGF0Zm9ybS5pc0VsZW1lbnQgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtLmlzRWxlbWVudChhcnJvd09mZnNldFBhcmVudCkpKSkge1xuICAgICAgY2xpZW50U2l6ZSA9IGVsZW1lbnRzLmZsb2F0aW5nW2NsaWVudFByb3BdIHx8IHJlY3RzLmZsb2F0aW5nW2xlbmd0aF07XG4gICAgfVxuICAgIGNvbnN0IGNlbnRlclRvUmVmZXJlbmNlID0gZW5kRGlmZiAvIDIgLSBzdGFydERpZmYgLyAyO1xuXG4gICAgLy8gSWYgdGhlIHBhZGRpbmcgaXMgbGFyZ2UgZW5vdWdoIHRoYXQgaXQgY2F1c2VzIHRoZSBhcnJvdyB0byBubyBsb25nZXIgYmVcbiAgICAvLyBjZW50ZXJlZCwgbW9kaWZ5IHRoZSBwYWRkaW5nIHNvIHRoYXQgaXQgaXMgY2VudGVyZWQuXG4gICAgY29uc3QgbGFyZ2VzdFBvc3NpYmxlUGFkZGluZyA9IGNsaWVudFNpemUgLyAyIC0gYXJyb3dEaW1lbnNpb25zW2xlbmd0aF0gLyAyIC0gMTtcbiAgICBjb25zdCBtaW5QYWRkaW5nID0gbWluKHBhZGRpbmdPYmplY3RbbWluUHJvcF0sIGxhcmdlc3RQb3NzaWJsZVBhZGRpbmcpO1xuICAgIGNvbnN0IG1heFBhZGRpbmcgPSBtaW4ocGFkZGluZ09iamVjdFttYXhQcm9wXSwgbGFyZ2VzdFBvc3NpYmxlUGFkZGluZyk7XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhlIGFycm93IGRvZXNuJ3Qgb3ZlcmZsb3cgdGhlIGZsb2F0aW5nIGVsZW1lbnQgaWYgdGhlIGNlbnRlclxuICAgIC8vIHBvaW50IGlzIG91dHNpZGUgdGhlIGZsb2F0aW5nIGVsZW1lbnQncyBib3VuZHMuXG4gICAgY29uc3QgbWluJDEgPSBtaW5QYWRkaW5nO1xuICAgIGNvbnN0IG1heCA9IGNsaWVudFNpemUgLSBhcnJvd0RpbWVuc2lvbnNbbGVuZ3RoXSAtIG1heFBhZGRpbmc7XG4gICAgY29uc3QgY2VudGVyID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd0RpbWVuc2lvbnNbbGVuZ3RoXSAvIDIgKyBjZW50ZXJUb1JlZmVyZW5jZTtcbiAgICBjb25zdCBvZmZzZXQgPSBjbGFtcChtaW4kMSwgY2VudGVyLCBtYXgpO1xuXG4gICAgLy8gSWYgdGhlIHJlZmVyZW5jZSBpcyBzbWFsbCBlbm91Z2ggdGhhdCB0aGUgYXJyb3cncyBwYWRkaW5nIGNhdXNlcyBpdCB0b1xuICAgIC8vIHRvIHBvaW50IHRvIG5vdGhpbmcgZm9yIGFuIGFsaWduZWQgcGxhY2VtZW50LCBhZGp1c3QgdGhlIG9mZnNldCBvZiB0aGVcbiAgICAvLyBmbG9hdGluZyBlbGVtZW50IGl0c2VsZi4gVG8gZW5zdXJlIGBzaGlmdCgpYCBjb250aW51ZXMgdG8gdGFrZSBhY3Rpb24sXG4gICAgLy8gYSBzaW5nbGUgcmVzZXQgaXMgcGVyZm9ybWVkIHdoZW4gdGhpcyBpcyB0cnVlLlxuICAgIGNvbnN0IHNob3VsZEFkZE9mZnNldCA9ICFtaWRkbGV3YXJlRGF0YS5hcnJvdyAmJiBnZXRBbGlnbm1lbnQocGxhY2VtZW50KSAhPSBudWxsICYmIGNlbnRlciAhPSBvZmZzZXQgJiYgcmVjdHMucmVmZXJlbmNlW2xlbmd0aF0gLyAyIC0gKGNlbnRlciA8IG1pbiQxID8gbWluUGFkZGluZyA6IG1heFBhZGRpbmcpIC0gYXJyb3dEaW1lbnNpb25zW2xlbmd0aF0gLyAyIDwgMDtcbiAgICBjb25zdCBhbGlnbm1lbnRPZmZzZXQgPSBzaG91bGRBZGRPZmZzZXQgPyBjZW50ZXIgPCBtaW4kMSA/IGNlbnRlciAtIG1pbiQxIDogY2VudGVyIC0gbWF4IDogMDtcbiAgICByZXR1cm4ge1xuICAgICAgW2F4aXNdOiBjb29yZHNbYXhpc10gKyBhbGlnbm1lbnRPZmZzZXQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIFtheGlzXTogb2Zmc2V0LFxuICAgICAgICBjZW50ZXJPZmZzZXQ6IGNlbnRlciAtIG9mZnNldCAtIGFsaWdubWVudE9mZnNldCxcbiAgICAgICAgLi4uKHNob3VsZEFkZE9mZnNldCAmJiB7XG4gICAgICAgICAgYWxpZ25tZW50T2Zmc2V0XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgcmVzZXQ6IHNob3VsZEFkZE9mZnNldFxuICAgIH07XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBnZXRQbGFjZW1lbnRMaXN0KGFsaWdubWVudCwgYXV0b0FsaWdubWVudCwgYWxsb3dlZFBsYWNlbWVudHMpIHtcbiAgY29uc3QgYWxsb3dlZFBsYWNlbWVudHNTb3J0ZWRCeUFsaWdubWVudCA9IGFsaWdubWVudCA/IFsuLi5hbGxvd2VkUGxhY2VtZW50cy5maWx0ZXIocGxhY2VtZW50ID0+IGdldEFsaWdubWVudChwbGFjZW1lbnQpID09PSBhbGlnbm1lbnQpLCAuLi5hbGxvd2VkUGxhY2VtZW50cy5maWx0ZXIocGxhY2VtZW50ID0+IGdldEFsaWdubWVudChwbGFjZW1lbnQpICE9PSBhbGlnbm1lbnQpXSA6IGFsbG93ZWRQbGFjZW1lbnRzLmZpbHRlcihwbGFjZW1lbnQgPT4gZ2V0U2lkZShwbGFjZW1lbnQpID09PSBwbGFjZW1lbnQpO1xuICByZXR1cm4gYWxsb3dlZFBsYWNlbWVudHNTb3J0ZWRCeUFsaWdubWVudC5maWx0ZXIocGxhY2VtZW50ID0+IHtcbiAgICBpZiAoYWxpZ25tZW50KSB7XG4gICAgICByZXR1cm4gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCkgPT09IGFsaWdubWVudCB8fCAoYXV0b0FsaWdubWVudCA/IGdldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50KHBsYWNlbWVudCkgIT09IHBsYWNlbWVudCA6IGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufVxuLyoqXG4gKiBPcHRpbWl6ZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGZsb2F0aW5nIGVsZW1lbnQgYnkgY2hvb3NpbmcgdGhlIHBsYWNlbWVudFxuICogdGhhdCBoYXMgdGhlIG1vc3Qgc3BhY2UgYXZhaWxhYmxlIGF1dG9tYXRpY2FsbHksIHdpdGhvdXQgbmVlZGluZyB0byBzcGVjaWZ5IGFcbiAqIHByZWZlcnJlZCBwbGFjZW1lbnQuIEFsdGVybmF0aXZlIHRvIGBmbGlwYC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9hdXRvUGxhY2VtZW50XG4gKi9cbmNvbnN0IGF1dG9QbGFjZW1lbnQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ2F1dG9QbGFjZW1lbnQnLFxuICAgIG9wdGlvbnMsXG4gICAgYXN5bmMgZm4oc3RhdGUpIHtcbiAgICAgIHZhciBfbWlkZGxld2FyZURhdGEkYXV0b1AsIF9taWRkbGV3YXJlRGF0YSRhdXRvUDIsIF9wbGFjZW1lbnRzVGhhdEZpdE9uRTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcmVjdHMsXG4gICAgICAgIG1pZGRsZXdhcmVEYXRhLFxuICAgICAgICBwbGFjZW1lbnQsXG4gICAgICAgIHBsYXRmb3JtLFxuICAgICAgICBlbGVtZW50c1xuICAgICAgfSA9IHN0YXRlO1xuICAgICAgY29uc3Qge1xuICAgICAgICBjcm9zc0F4aXMgPSBmYWxzZSxcbiAgICAgICAgYWxpZ25tZW50LFxuICAgICAgICBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMsXG4gICAgICAgIGF1dG9BbGlnbm1lbnQgPSB0cnVlLFxuICAgICAgICAuLi5kZXRlY3RPdmVyZmxvd09wdGlvbnNcbiAgICAgIH0gPSBldmFsdWF0ZShvcHRpb25zLCBzdGF0ZSk7XG4gICAgICBjb25zdCBwbGFjZW1lbnRzJDEgPSBhbGlnbm1lbnQgIT09IHVuZGVmaW5lZCB8fCBhbGxvd2VkUGxhY2VtZW50cyA9PT0gcGxhY2VtZW50cyA/IGdldFBsYWNlbWVudExpc3QoYWxpZ25tZW50IHx8IG51bGwsIGF1dG9BbGlnbm1lbnQsIGFsbG93ZWRQbGFjZW1lbnRzKSA6IGFsbG93ZWRQbGFjZW1lbnRzO1xuICAgICAgY29uc3Qgb3ZlcmZsb3cgPSBhd2FpdCBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgZGV0ZWN0T3ZlcmZsb3dPcHRpb25zKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9ICgoX21pZGRsZXdhcmVEYXRhJGF1dG9QID0gbWlkZGxld2FyZURhdGEuYXV0b1BsYWNlbWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9taWRkbGV3YXJlRGF0YSRhdXRvUC5pbmRleCkgfHwgMDtcbiAgICAgIGNvbnN0IGN1cnJlbnRQbGFjZW1lbnQgPSBwbGFjZW1lbnRzJDFbY3VycmVudEluZGV4XTtcbiAgICAgIGlmIChjdXJyZW50UGxhY2VtZW50ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuICAgICAgY29uc3QgYWxpZ25tZW50U2lkZXMgPSBnZXRBbGlnbm1lbnRTaWRlcyhjdXJyZW50UGxhY2VtZW50LCByZWN0cywgYXdhaXQgKHBsYXRmb3JtLmlzUlRMID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybS5pc1JUTChlbGVtZW50cy5mbG9hdGluZykpKTtcblxuICAgICAgLy8gTWFrZSBgY29tcHV0ZUNvb3Jkc2Agc3RhcnQgZnJvbSB0aGUgcmlnaHQgcGxhY2UuXG4gICAgICBpZiAocGxhY2VtZW50ICE9PSBjdXJyZW50UGxhY2VtZW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVzZXQ6IHtcbiAgICAgICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50cyQxWzBdXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgY29uc3QgY3VycmVudE92ZXJmbG93cyA9IFtvdmVyZmxvd1tnZXRTaWRlKGN1cnJlbnRQbGFjZW1lbnQpXSwgb3ZlcmZsb3dbYWxpZ25tZW50U2lkZXNbMF1dLCBvdmVyZmxvd1thbGlnbm1lbnRTaWRlc1sxXV1dO1xuICAgICAgY29uc3QgYWxsT3ZlcmZsb3dzID0gWy4uLigoKF9taWRkbGV3YXJlRGF0YSRhdXRvUDIgPSBtaWRkbGV3YXJlRGF0YS5hdXRvUGxhY2VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX21pZGRsZXdhcmVEYXRhJGF1dG9QMi5vdmVyZmxvd3MpIHx8IFtdKSwge1xuICAgICAgICBwbGFjZW1lbnQ6IGN1cnJlbnRQbGFjZW1lbnQsXG4gICAgICAgIG92ZXJmbG93czogY3VycmVudE92ZXJmbG93c1xuICAgICAgfV07XG4gICAgICBjb25zdCBuZXh0UGxhY2VtZW50ID0gcGxhY2VtZW50cyQxW2N1cnJlbnRJbmRleCArIDFdO1xuXG4gICAgICAvLyBUaGVyZSBhcmUgbW9yZSBwbGFjZW1lbnRzIHRvIGNoZWNrLlxuICAgICAgaWYgKG5leHRQbGFjZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBpbmRleDogY3VycmVudEluZGV4ICsgMSxcbiAgICAgICAgICAgIG92ZXJmbG93czogYWxsT3ZlcmZsb3dzXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXNldDoge1xuICAgICAgICAgICAgcGxhY2VtZW50OiBuZXh0UGxhY2VtZW50XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgY29uc3QgcGxhY2VtZW50c1NvcnRlZEJ5TW9zdFNwYWNlID0gYWxsT3ZlcmZsb3dzLm1hcChkID0+IHtcbiAgICAgICAgY29uc3QgYWxpZ25tZW50ID0gZ2V0QWxpZ25tZW50KGQucGxhY2VtZW50KTtcbiAgICAgICAgcmV0dXJuIFtkLnBsYWNlbWVudCwgYWxpZ25tZW50ICYmIGNyb3NzQXhpcyA/XG4gICAgICAgIC8vIENoZWNrIGFsb25nIHRoZSBtYWluQXhpcyBhbmQgbWFpbiBjcm9zc0F4aXMgc2lkZS5cbiAgICAgICAgZC5vdmVyZmxvd3Muc2xpY2UoMCwgMikucmVkdWNlKChhY2MsIHYpID0+IGFjYyArIHYsIDApIDpcbiAgICAgICAgLy8gQ2hlY2sgb25seSB0aGUgbWFpbkF4aXMuXG4gICAgICAgIGQub3ZlcmZsb3dzWzBdLCBkLm92ZXJmbG93c107XG4gICAgICB9KS5zb3J0KChhLCBiKSA9PiBhWzFdIC0gYlsxXSk7XG4gICAgICBjb25zdCBwbGFjZW1lbnRzVGhhdEZpdE9uRWFjaFNpZGUgPSBwbGFjZW1lbnRzU29ydGVkQnlNb3N0U3BhY2UuZmlsdGVyKGQgPT4gZFsyXS5zbGljZSgwLFxuICAgICAgLy8gQWxpZ25lZCBwbGFjZW1lbnRzIHNob3VsZCBub3QgY2hlY2sgdGhlaXIgb3Bwb3NpdGUgY3Jvc3NBeGlzXG4gICAgICAvLyBzaWRlLlxuICAgICAgZ2V0QWxpZ25tZW50KGRbMF0pID8gMiA6IDMpLmV2ZXJ5KHYgPT4gdiA8PSAwKSk7XG4gICAgICBjb25zdCByZXNldFBsYWNlbWVudCA9ICgoX3BsYWNlbWVudHNUaGF0Rml0T25FID0gcGxhY2VtZW50c1RoYXRGaXRPbkVhY2hTaWRlWzBdKSA9PSBudWxsID8gdm9pZCAwIDogX3BsYWNlbWVudHNUaGF0Rml0T25FWzBdKSB8fCBwbGFjZW1lbnRzU29ydGVkQnlNb3N0U3BhY2VbMF1bMF07XG4gICAgICBpZiAocmVzZXRQbGFjZW1lbnQgIT09IHBsYWNlbWVudCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGluZGV4OiBjdXJyZW50SW5kZXggKyAxLFxuICAgICAgICAgICAgb3ZlcmZsb3dzOiBhbGxPdmVyZmxvd3NcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc2V0OiB7XG4gICAgICAgICAgICBwbGFjZW1lbnQ6IHJlc2V0UGxhY2VtZW50XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxuICogT3B0aW1pemVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IGJ5IGZsaXBwaW5nIHRoZSBgcGxhY2VtZW50YFxuICogaW4gb3JkZXIgdG8ga2VlcCBpdCBpbiB2aWV3IHdoZW4gdGhlIHByZWZlcnJlZCBwbGFjZW1lbnQocykgd2lsbCBvdmVyZmxvdyB0aGVcbiAqIGNsaXBwaW5nIGJvdW5kYXJ5LiBBbHRlcm5hdGl2ZSB0byBgYXV0b1BsYWNlbWVudGAuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvZmxpcFxuICovXG5jb25zdCBmbGlwID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdmbGlwJyxcbiAgICBvcHRpb25zLFxuICAgIGFzeW5jIGZuKHN0YXRlKSB7XG4gICAgICB2YXIgX21pZGRsZXdhcmVEYXRhJGFycm93LCBfbWlkZGxld2FyZURhdGEkZmxpcDtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICBtaWRkbGV3YXJlRGF0YSxcbiAgICAgICAgcmVjdHMsXG4gICAgICAgIGluaXRpYWxQbGFjZW1lbnQsXG4gICAgICAgIHBsYXRmb3JtLFxuICAgICAgICBlbGVtZW50c1xuICAgICAgfSA9IHN0YXRlO1xuICAgICAgY29uc3Qge1xuICAgICAgICBtYWluQXhpczogY2hlY2tNYWluQXhpcyA9IHRydWUsXG4gICAgICAgIGNyb3NzQXhpczogY2hlY2tDcm9zc0F4aXMgPSB0cnVlLFxuICAgICAgICBmYWxsYmFja1BsYWNlbWVudHM6IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyxcbiAgICAgICAgZmFsbGJhY2tTdHJhdGVneSA9ICdiZXN0Rml0JyxcbiAgICAgICAgZmFsbGJhY2tBeGlzU2lkZURpcmVjdGlvbiA9ICdub25lJyxcbiAgICAgICAgZmxpcEFsaWdubWVudCA9IHRydWUsXG4gICAgICAgIC4uLmRldGVjdE92ZXJmbG93T3B0aW9uc1xuICAgICAgfSA9IGV2YWx1YXRlKG9wdGlvbnMsIHN0YXRlKTtcblxuICAgICAgLy8gSWYgYSByZXNldCBieSB0aGUgYXJyb3cgd2FzIGNhdXNlZCBkdWUgdG8gYW4gYWxpZ25tZW50IG9mZnNldCBiZWluZ1xuICAgICAgLy8gYWRkZWQsIHdlIHNob3VsZCBza2lwIGFueSBsb2dpYyBub3cgc2luY2UgYGZsaXAoKWAgaGFzIGFscmVhZHkgZG9uZSBpdHNcbiAgICAgIC8vIHdvcmsuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmxvYXRpbmctdWkvZmxvYXRpbmctdWkvaXNzdWVzLzI1NDkjaXNzdWVjb21tZW50LTE3MTk2MDE2NDNcbiAgICAgIGlmICgoX21pZGRsZXdhcmVEYXRhJGFycm93ID0gbWlkZGxld2FyZURhdGEuYXJyb3cpICE9IG51bGwgJiYgX21pZGRsZXdhcmVEYXRhJGFycm93LmFsaWdubWVudE9mZnNldCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgICBjb25zdCBzaWRlID0gZ2V0U2lkZShwbGFjZW1lbnQpO1xuICAgICAgY29uc3QgaXNCYXNlUGxhY2VtZW50ID0gZ2V0U2lkZShpbml0aWFsUGxhY2VtZW50KSA9PT0gaW5pdGlhbFBsYWNlbWVudDtcbiAgICAgIGNvbnN0IHJ0bCA9IGF3YWl0IChwbGF0Zm9ybS5pc1JUTCA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0uaXNSVEwoZWxlbWVudHMuZmxvYXRpbmcpKTtcbiAgICAgIGNvbnN0IGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwQWxpZ25tZW50ID8gW2dldE9wcG9zaXRlUGxhY2VtZW50KGluaXRpYWxQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkUGxhY2VtZW50cyhpbml0aWFsUGxhY2VtZW50KSk7XG4gICAgICBpZiAoIXNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyAmJiBmYWxsYmFja0F4aXNTaWRlRGlyZWN0aW9uICE9PSAnbm9uZScpIHtcbiAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzLnB1c2goLi4uZ2V0T3Bwb3NpdGVBeGlzUGxhY2VtZW50cyhpbml0aWFsUGxhY2VtZW50LCBmbGlwQWxpZ25tZW50LCBmYWxsYmFja0F4aXNTaWRlRGlyZWN0aW9uLCBydGwpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBsYWNlbWVudHMgPSBbaW5pdGlhbFBsYWNlbWVudCwgLi4uZmFsbGJhY2tQbGFjZW1lbnRzXTtcbiAgICAgIGNvbnN0IG92ZXJmbG93ID0gYXdhaXQgZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIGRldGVjdE92ZXJmbG93T3B0aW9ucyk7XG4gICAgICBjb25zdCBvdmVyZmxvd3MgPSBbXTtcbiAgICAgIGxldCBvdmVyZmxvd3NEYXRhID0gKChfbWlkZGxld2FyZURhdGEkZmxpcCA9IG1pZGRsZXdhcmVEYXRhLmZsaXApID09IG51bGwgPyB2b2lkIDAgOiBfbWlkZGxld2FyZURhdGEkZmxpcC5vdmVyZmxvd3MpIHx8IFtdO1xuICAgICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgICAgb3ZlcmZsb3dzLnB1c2gob3ZlcmZsb3dbc2lkZV0pO1xuICAgICAgfVxuICAgICAgaWYgKGNoZWNrQ3Jvc3NBeGlzKSB7XG4gICAgICAgIGNvbnN0IHNpZGVzID0gZ2V0QWxpZ25tZW50U2lkZXMocGxhY2VtZW50LCByZWN0cywgcnRsKTtcbiAgICAgICAgb3ZlcmZsb3dzLnB1c2gob3ZlcmZsb3dbc2lkZXNbMF1dLCBvdmVyZmxvd1tzaWRlc1sxXV0pO1xuICAgICAgfVxuICAgICAgb3ZlcmZsb3dzRGF0YSA9IFsuLi5vdmVyZmxvd3NEYXRhLCB7XG4gICAgICAgIHBsYWNlbWVudCxcbiAgICAgICAgb3ZlcmZsb3dzXG4gICAgICB9XTtcblxuICAgICAgLy8gT25lIG9yIG1vcmUgc2lkZXMgaXMgb3ZlcmZsb3dpbmcuXG4gICAgICBpZiAoIW92ZXJmbG93cy5ldmVyeShzaWRlID0+IHNpZGUgPD0gMCkpIHtcbiAgICAgICAgdmFyIF9taWRkbGV3YXJlRGF0YSRmbGlwMiwgX292ZXJmbG93c0RhdGEkZmlsdGVyO1xuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSAoKChfbWlkZGxld2FyZURhdGEkZmxpcDIgPSBtaWRkbGV3YXJlRGF0YS5mbGlwKSA9PSBudWxsID8gdm9pZCAwIDogX21pZGRsZXdhcmVEYXRhJGZsaXAyLmluZGV4KSB8fCAwKSArIDE7XG4gICAgICAgIGNvbnN0IG5leHRQbGFjZW1lbnQgPSBwbGFjZW1lbnRzW25leHRJbmRleF07XG4gICAgICAgIGlmIChuZXh0UGxhY2VtZW50KSB7XG4gICAgICAgICAgLy8gVHJ5IG5leHQgcGxhY2VtZW50IGFuZCByZS1ydW4gdGhlIGxpZmVjeWNsZS5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBpbmRleDogbmV4dEluZGV4LFxuICAgICAgICAgICAgICBvdmVyZmxvd3M6IG92ZXJmbG93c0RhdGFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXNldDoge1xuICAgICAgICAgICAgICBwbGFjZW1lbnQ6IG5leHRQbGFjZW1lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlyc3QsIGZpbmQgdGhlIGNhbmRpZGF0ZXMgdGhhdCBmaXQgb24gdGhlIG1haW5BeGlzIHNpZGUgb2Ygb3ZlcmZsb3csXG4gICAgICAgIC8vIHRoZW4gZmluZCB0aGUgcGxhY2VtZW50IHRoYXQgZml0cyB0aGUgYmVzdCBvbiB0aGUgbWFpbiBjcm9zc0F4aXMgc2lkZS5cbiAgICAgICAgbGV0IHJlc2V0UGxhY2VtZW50ID0gKF9vdmVyZmxvd3NEYXRhJGZpbHRlciA9IG92ZXJmbG93c0RhdGEuZmlsdGVyKGQgPT4gZC5vdmVyZmxvd3NbMF0gPD0gMCkuc29ydCgoYSwgYikgPT4gYS5vdmVyZmxvd3NbMV0gLSBiLm92ZXJmbG93c1sxXSlbMF0pID09IG51bGwgPyB2b2lkIDAgOiBfb3ZlcmZsb3dzRGF0YSRmaWx0ZXIucGxhY2VtZW50O1xuXG4gICAgICAgIC8vIE90aGVyd2lzZSBmYWxsYmFjay5cbiAgICAgICAgaWYgKCFyZXNldFBsYWNlbWVudCkge1xuICAgICAgICAgIHN3aXRjaCAoZmFsbGJhY2tTdHJhdGVneSkge1xuICAgICAgICAgICAgY2FzZSAnYmVzdEZpdCc6XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgX292ZXJmbG93c0RhdGEkbWFwJHNvO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsYWNlbWVudCA9IChfb3ZlcmZsb3dzRGF0YSRtYXAkc28gPSBvdmVyZmxvd3NEYXRhLm1hcChkID0+IFtkLnBsYWNlbWVudCwgZC5vdmVyZmxvd3MuZmlsdGVyKG92ZXJmbG93ID0+IG92ZXJmbG93ID4gMCkucmVkdWNlKChhY2MsIG92ZXJmbG93KSA9PiBhY2MgKyBvdmVyZmxvdywgMCldKS5zb3J0KChhLCBiKSA9PiBhWzFdIC0gYlsxXSlbMF0pID09IG51bGwgPyB2b2lkIDAgOiBfb3ZlcmZsb3dzRGF0YSRtYXAkc29bMF07XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlbWVudCkge1xuICAgICAgICAgICAgICAgICAgcmVzZXRQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdpbml0aWFsUGxhY2VtZW50JzpcbiAgICAgICAgICAgICAgcmVzZXRQbGFjZW1lbnQgPSBpbml0aWFsUGxhY2VtZW50O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYWNlbWVudCAhPT0gcmVzZXRQbGFjZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzZXQ6IHtcbiAgICAgICAgICAgICAgcGxhY2VtZW50OiByZXNldFBsYWNlbWVudFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH07XG59O1xuXG5mdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogb3ZlcmZsb3cudG9wIC0gcmVjdC5oZWlnaHQsXG4gICAgcmlnaHQ6IG92ZXJmbG93LnJpZ2h0IC0gcmVjdC53aWR0aCxcbiAgICBib3R0b206IG92ZXJmbG93LmJvdHRvbSAtIHJlY3QuaGVpZ2h0LFxuICAgIGxlZnQ6IG92ZXJmbG93LmxlZnQgLSByZWN0LndpZHRoXG4gIH07XG59XG5mdW5jdGlvbiBpc0FueVNpZGVGdWxseUNsaXBwZWQob3ZlcmZsb3cpIHtcbiAgcmV0dXJuIHNpZGVzLnNvbWUoc2lkZSA9PiBvdmVyZmxvd1tzaWRlXSA+PSAwKTtcbn1cbi8qKlxuICogUHJvdmlkZXMgZGF0YSB0byBoaWRlIHRoZSBmbG9hdGluZyBlbGVtZW50IGluIGFwcGxpY2FibGUgc2l0dWF0aW9ucywgc3VjaCBhc1xuICogd2hlbiBpdCBpcyBub3QgaW4gdGhlIHNhbWUgY2xpcHBpbmcgY29udGV4dCBhcyB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvaGlkZVxuICovXG5jb25zdCBoaWRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdoaWRlJyxcbiAgICBvcHRpb25zLFxuICAgIGFzeW5jIGZuKHN0YXRlKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHJlY3RzXG4gICAgICB9ID0gc3RhdGU7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHN0cmF0ZWd5ID0gJ3JlZmVyZW5jZUhpZGRlbicsXG4gICAgICAgIC4uLmRldGVjdE92ZXJmbG93T3B0aW9uc1xuICAgICAgfSA9IGV2YWx1YXRlKG9wdGlvbnMsIHN0YXRlKTtcbiAgICAgIHN3aXRjaCAoc3RyYXRlZ3kpIHtcbiAgICAgICAgY2FzZSAncmVmZXJlbmNlSGlkZGVuJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBvdmVyZmxvdyA9IGF3YWl0IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICAgICAgICAgIC4uLmRldGVjdE92ZXJmbG93T3B0aW9ucyxcbiAgICAgICAgICAgICAgZWxlbWVudENvbnRleHQ6ICdyZWZlcmVuY2UnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdHMucmVmZXJlbmNlKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VIaWRkZW5PZmZzZXRzOiBvZmZzZXRzLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZUhpZGRlbjogaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG9mZnNldHMpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICBjYXNlICdlc2NhcGVkJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBvdmVyZmxvdyA9IGF3YWl0IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICAgICAgICAgIC4uLmRldGVjdE92ZXJmbG93T3B0aW9ucyxcbiAgICAgICAgICAgICAgYWx0Qm91bmRhcnk6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0cy5mbG9hdGluZyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgZXNjYXBlZE9mZnNldHM6IG9mZnNldHMsXG4gICAgICAgICAgICAgICAgZXNjYXBlZDogaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG9mZnNldHMpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuLy8gRm9yIHR5cGUgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIHRoZSBgT2Zmc2V0T3B0aW9uc2AgdHlwZSB3YXMgYWxzb1xuLy8gRGVyaXZhYmxlLlxuYXN5bmMgZnVuY3Rpb24gY29udmVydFZhbHVlVG9Db29yZHMoc3RhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIHBsYWNlbWVudCxcbiAgICBwbGF0Zm9ybSxcbiAgICBlbGVtZW50c1xuICB9ID0gc3RhdGU7XG4gIGNvbnN0IHJ0bCA9IGF3YWl0IChwbGF0Zm9ybS5pc1JUTCA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0uaXNSVEwoZWxlbWVudHMuZmxvYXRpbmcpKTtcbiAgY29uc3Qgc2lkZSA9IGdldFNpZGUocGxhY2VtZW50KTtcbiAgY29uc3QgYWxpZ25tZW50ID0gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCk7XG4gIGNvbnN0IGlzVmVydGljYWwgPSBnZXRTaWRlQXhpcyhwbGFjZW1lbnQpID09PSAneSc7XG4gIGNvbnN0IG1haW5BeGlzTXVsdGkgPSBbJ2xlZnQnLCAndG9wJ10uaW5jbHVkZXMoc2lkZSkgPyAtMSA6IDE7XG4gIGNvbnN0IGNyb3NzQXhpc011bHRpID0gcnRsICYmIGlzVmVydGljYWwgPyAtMSA6IDE7XG4gIGNvbnN0IHJhd1ZhbHVlID0gZXZhbHVhdGUob3B0aW9ucywgc3RhdGUpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcbiAgbGV0IHtcbiAgICBtYWluQXhpcyxcbiAgICBjcm9zc0F4aXMsXG4gICAgYWxpZ25tZW50QXhpc1xuICB9ID0gdHlwZW9mIHJhd1ZhbHVlID09PSAnbnVtYmVyJyA/IHtcbiAgICBtYWluQXhpczogcmF3VmFsdWUsXG4gICAgY3Jvc3NBeGlzOiAwLFxuICAgIGFsaWdubWVudEF4aXM6IG51bGxcbiAgfSA6IHtcbiAgICBtYWluQXhpczogMCxcbiAgICBjcm9zc0F4aXM6IDAsXG4gICAgYWxpZ25tZW50QXhpczogbnVsbCxcbiAgICAuLi5yYXdWYWx1ZVxuICB9O1xuICBpZiAoYWxpZ25tZW50ICYmIHR5cGVvZiBhbGlnbm1lbnRBeGlzID09PSAnbnVtYmVyJykge1xuICAgIGNyb3NzQXhpcyA9IGFsaWdubWVudCA9PT0gJ2VuZCcgPyBhbGlnbm1lbnRBeGlzICogLTEgOiBhbGlnbm1lbnRBeGlzO1xuICB9XG4gIHJldHVybiBpc1ZlcnRpY2FsID8ge1xuICAgIHg6IGNyb3NzQXhpcyAqIGNyb3NzQXhpc011bHRpLFxuICAgIHk6IG1haW5BeGlzICogbWFpbkF4aXNNdWx0aVxuICB9IDoge1xuICAgIHg6IG1haW5BeGlzICogbWFpbkF4aXNNdWx0aSxcbiAgICB5OiBjcm9zc0F4aXMgKiBjcm9zc0F4aXNNdWx0aVxuICB9O1xufVxuXG4vKipcbiAqIE1vZGlmaWVzIHRoZSBwbGFjZW1lbnQgYnkgdHJhbnNsYXRpbmcgdGhlIGZsb2F0aW5nIGVsZW1lbnQgYWxvbmcgdGhlXG4gKiBzcGVjaWZpZWQgYXhlcy5cbiAqIEEgbnVtYmVyIChzaG9ydGhhbmQgZm9yIGBtYWluQXhpc2Agb3IgZGlzdGFuY2UpLCBvciBhbiBheGVzIGNvbmZpZ3VyYXRpb25cbiAqIG9iamVjdCBtYXkgYmUgcGFzc2VkLlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL29mZnNldFxuICovXG5jb25zdCBvZmZzZXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IDA7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICBvcHRpb25zLFxuICAgIGFzeW5jIGZuKHN0YXRlKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHgsXG4gICAgICAgIHlcbiAgICAgIH0gPSBzdGF0ZTtcbiAgICAgIGNvbnN0IGRpZmZDb29yZHMgPSBhd2FpdCBjb252ZXJ0VmFsdWVUb0Nvb3JkcyhzdGF0ZSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiB4ICsgZGlmZkNvb3Jkcy54LFxuICAgICAgICB5OiB5ICsgZGlmZkNvb3Jkcy55LFxuICAgICAgICBkYXRhOiBkaWZmQ29vcmRzXG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxuICogT3B0aW1pemVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IGJ5IHNoaWZ0aW5nIGl0IGluIG9yZGVyIHRvXG4gKiBrZWVwIGl0IGluIHZpZXcgd2hlbiBpdCB3aWxsIG92ZXJmbG93IHRoZSBjbGlwcGluZyBib3VuZGFyeS5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9zaGlmdFxuICovXG5jb25zdCBzaGlmdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnc2hpZnQnLFxuICAgIG9wdGlvbnMsXG4gICAgYXN5bmMgZm4oc3RhdGUpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgcGxhY2VtZW50XG4gICAgICB9ID0gc3RhdGU7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1haW5BeGlzOiBjaGVja01haW5BeGlzID0gdHJ1ZSxcbiAgICAgICAgY3Jvc3NBeGlzOiBjaGVja0Nyb3NzQXhpcyA9IGZhbHNlLFxuICAgICAgICBsaW1pdGVyID0ge1xuICAgICAgICAgIGZuOiBfcmVmID0+IHtcbiAgICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgIHlcbiAgICAgICAgICAgIH0gPSBfcmVmO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgeVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC4uLmRldGVjdE92ZXJmbG93T3B0aW9uc1xuICAgICAgfSA9IGV2YWx1YXRlKG9wdGlvbnMsIHN0YXRlKTtcbiAgICAgIGNvbnN0IGNvb3JkcyA9IHtcbiAgICAgICAgeCxcbiAgICAgICAgeVxuICAgICAgfTtcbiAgICAgIGNvbnN0IG92ZXJmbG93ID0gYXdhaXQgZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIGRldGVjdE92ZXJmbG93T3B0aW9ucyk7XG4gICAgICBjb25zdCBjcm9zc0F4aXMgPSBnZXRTaWRlQXhpcyhnZXRTaWRlKHBsYWNlbWVudCkpO1xuICAgICAgY29uc3QgbWFpbkF4aXMgPSBnZXRPcHBvc2l0ZUF4aXMoY3Jvc3NBeGlzKTtcbiAgICAgIGxldCBtYWluQXhpc0Nvb3JkID0gY29vcmRzW21haW5BeGlzXTtcbiAgICAgIGxldCBjcm9zc0F4aXNDb29yZCA9IGNvb3Jkc1tjcm9zc0F4aXNdO1xuICAgICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgICAgY29uc3QgbWluU2lkZSA9IG1haW5BeGlzID09PSAneScgPyAndG9wJyA6ICdsZWZ0JztcbiAgICAgICAgY29uc3QgbWF4U2lkZSA9IG1haW5BeGlzID09PSAneScgPyAnYm90dG9tJyA6ICdyaWdodCc7XG4gICAgICAgIGNvbnN0IG1pbiA9IG1haW5BeGlzQ29vcmQgKyBvdmVyZmxvd1ttaW5TaWRlXTtcbiAgICAgICAgY29uc3QgbWF4ID0gbWFpbkF4aXNDb29yZCAtIG92ZXJmbG93W21heFNpZGVdO1xuICAgICAgICBtYWluQXhpc0Nvb3JkID0gY2xhbXAobWluLCBtYWluQXhpc0Nvb3JkLCBtYXgpO1xuICAgICAgfVxuICAgICAgaWYgKGNoZWNrQ3Jvc3NBeGlzKSB7XG4gICAgICAgIGNvbnN0IG1pblNpZGUgPSBjcm9zc0F4aXMgPT09ICd5JyA/ICd0b3AnIDogJ2xlZnQnO1xuICAgICAgICBjb25zdCBtYXhTaWRlID0gY3Jvc3NBeGlzID09PSAneScgPyAnYm90dG9tJyA6ICdyaWdodCc7XG4gICAgICAgIGNvbnN0IG1pbiA9IGNyb3NzQXhpc0Nvb3JkICsgb3ZlcmZsb3dbbWluU2lkZV07XG4gICAgICAgIGNvbnN0IG1heCA9IGNyb3NzQXhpc0Nvb3JkIC0gb3ZlcmZsb3dbbWF4U2lkZV07XG4gICAgICAgIGNyb3NzQXhpc0Nvb3JkID0gY2xhbXAobWluLCBjcm9zc0F4aXNDb29yZCwgbWF4KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxpbWl0ZWRDb29yZHMgPSBsaW1pdGVyLmZuKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFttYWluQXhpc106IG1haW5BeGlzQ29vcmQsXG4gICAgICAgIFtjcm9zc0F4aXNdOiBjcm9zc0F4aXNDb29yZFxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5saW1pdGVkQ29vcmRzLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgeDogbGltaXRlZENvb3Jkcy54IC0geCxcbiAgICAgICAgICB5OiBsaW1pdGVkQ29vcmRzLnkgLSB5XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9O1xufTtcblxuZnVuY3Rpb24gZ2V0Tm9kZU5hbWUobm9kZSkge1xuICBpZiAoaXNOb2RlKG5vZGUpKSB7XG4gICAgcmV0dXJuIChub2RlLm5vZGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIC8vIE1vY2tlZCBub2RlcyBpbiB0ZXN0aW5nIGVudmlyb25tZW50cyBtYXkgbm90IGJlIGluc3RhbmNlcyBvZiBOb2RlLiBCeVxuICAvLyByZXR1cm5pbmcgYCNkb2N1bWVudGAgYW4gaW5maW5pdGUgbG9vcCB3b24ndCBvY2N1ci5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2Zsb2F0aW5nLXVpL2Zsb2F0aW5nLXVpL2lzc3Vlcy8yMzE3XG4gIHJldHVybiAnI2RvY3VtZW50Jztcbn1cbmZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIHZhciBfbm9kZSRvd25lckRvY3VtZW50O1xuICByZXR1cm4gKG5vZGUgPT0gbnVsbCA/IHZvaWQgMCA6IChfbm9kZSRvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX25vZGUkb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldykgfHwgd2luZG93O1xufVxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRFbGVtZW50KG5vZGUpIHtcbiAgdmFyIF9yZWY7XG4gIHJldHVybiAoX3JlZiA9IChpc05vZGUobm9kZSkgPyBub2RlLm93bmVyRG9jdW1lbnQgOiBub2RlLmRvY3VtZW50KSB8fCB3aW5kb3cuZG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfcmVmLmRvY3VtZW50RWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzTm9kZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBOb2RlIHx8IHZhbHVlIGluc3RhbmNlb2YgZ2V0V2luZG93KHZhbHVlKS5Ob2RlO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgdmFsdWUgaW5zdGFuY2VvZiBnZXRXaW5kb3codmFsdWUpLkVsZW1lbnQ7XG59XG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHZhbHVlIGluc3RhbmNlb2YgZ2V0V2luZG93KHZhbHVlKS5IVE1MRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzU2hhZG93Um9vdCh2YWx1ZSkge1xuICAvLyBCcm93c2VycyB3aXRob3V0IGBTaGFkb3dSb290YCBzdXBwb3J0LlxuICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgfHwgdmFsdWUgaW5zdGFuY2VvZiBnZXRXaW5kb3codmFsdWUpLlNoYWRvd1Jvb3Q7XG59XG5mdW5jdGlvbiBpc092ZXJmbG93RWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IHtcbiAgICBvdmVyZmxvdyxcbiAgICBvdmVyZmxvd1gsXG4gICAgb3ZlcmZsb3dZLFxuICAgIGRpc3BsYXlcbiAgfSA9IGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KTtcbiAgcmV0dXJuIC9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbnxjbGlwLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKSAmJiAhWydpbmxpbmUnLCAnY29udGVudHMnXS5pbmNsdWRlcyhkaXNwbGF5KTtcbn1cbmZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmNsdWRlcyhnZXROb2RlTmFtZShlbGVtZW50KSk7XG59XG5mdW5jdGlvbiBpc0NvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gIGNvbnN0IHdlYmtpdCA9IGlzV2ViS2l0KCk7XG4gIGNvbnN0IGNzcyA9IGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KTtcblxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuICByZXR1cm4gY3NzLnRyYW5zZm9ybSAhPT0gJ25vbmUnIHx8IGNzcy5wZXJzcGVjdGl2ZSAhPT0gJ25vbmUnIHx8IChjc3MuY29udGFpbmVyVHlwZSA/IGNzcy5jb250YWluZXJUeXBlICE9PSAnbm9ybWFsJyA6IGZhbHNlKSB8fCAhd2Via2l0ICYmIChjc3MuYmFja2Ryb3BGaWx0ZXIgPyBjc3MuYmFja2Ryb3BGaWx0ZXIgIT09ICdub25lJyA6IGZhbHNlKSB8fCAhd2Via2l0ICYmIChjc3MuZmlsdGVyID8gY3NzLmZpbHRlciAhPT0gJ25vbmUnIDogZmFsc2UpIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJywgJ2ZpbHRlciddLnNvbWUodmFsdWUgPT4gKGNzcy53aWxsQ2hhbmdlIHx8ICcnKS5pbmNsdWRlcyh2YWx1ZSkpIHx8IFsncGFpbnQnLCAnbGF5b3V0JywgJ3N0cmljdCcsICdjb250ZW50J10uc29tZSh2YWx1ZSA9PiAoY3NzLmNvbnRhaW4gfHwgJycpLmluY2x1ZGVzKHZhbHVlKSk7XG59XG5mdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICBsZXQgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgIWlzTGFzdFRyYXZlcnNhYmxlTm9kZShjdXJyZW50Tm9kZSkpIHtcbiAgICBpZiAoaXNDb250YWluaW5nQmxvY2soY3VycmVudE5vZGUpKSB7XG4gICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShjdXJyZW50Tm9kZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gaXNXZWJLaXQoKSB7XG4gIGlmICh0eXBlb2YgQ1NTID09PSAndW5kZWZpbmVkJyB8fCAhQ1NTLnN1cHBvcnRzKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBDU1Muc3VwcG9ydHMoJy13ZWJraXQtYmFja2Ryb3AtZmlsdGVyJywgJ25vbmUnKTtcbn1cbmZ1bmN0aW9uIGlzTGFzdFRyYXZlcnNhYmxlTm9kZShub2RlKSB7XG4gIHJldHVybiBbJ2h0bWwnLCAnYm9keScsICcjZG9jdW1lbnQnXS5pbmNsdWRlcyhnZXROb2RlTmFtZShub2RlKSk7XG59XG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59XG5mdW5jdGlvbiBnZXROb2RlU2Nyb2xsKGVsZW1lbnQpIHtcbiAgaWYgKGlzRWxlbWVudChlbGVtZW50KSkge1xuICAgIHJldHVybiB7XG4gICAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQucGFnZVhPZmZzZXQsXG4gICAgc2Nyb2xsVG9wOiBlbGVtZW50LnBhZ2VZT2Zmc2V0XG4gIH07XG59XG5mdW5jdGlvbiBnZXRQYXJlbnROb2RlKG5vZGUpIHtcbiAgaWYgKGdldE5vZGVOYW1lKG5vZGUpID09PSAnaHRtbCcpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuICBjb25zdCByZXN1bHQgPVxuICAvLyBTdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZS5cbiAgbm9kZS5hc3NpZ25lZFNsb3QgfHxcbiAgLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWQuXG4gIG5vZGUucGFyZW50Tm9kZSB8fFxuICAvLyBTaGFkb3dSb290IGRldGVjdGVkLlxuICBpc1NoYWRvd1Jvb3Qobm9kZSkgJiYgbm9kZS5ob3N0IHx8XG4gIC8vIEZhbGxiYWNrLlxuICBnZXREb2N1bWVudEVsZW1lbnQobm9kZSk7XG4gIHJldHVybiBpc1NoYWRvd1Jvb3QocmVzdWx0KSA/IHJlc3VsdC5ob3N0IDogcmVzdWx0O1xufVxuZnVuY3Rpb24gZ2V0TmVhcmVzdE92ZXJmbG93QW5jZXN0b3Iobm9kZSkge1xuICBjb25zdCBwYXJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShub2RlKTtcbiAgaWYgKGlzTGFzdFRyYXZlcnNhYmxlTm9kZShwYXJlbnROb2RlKSkge1xuICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQgPyBub2RlLm93bmVyRG9jdW1lbnQuYm9keSA6IG5vZGUuYm9keTtcbiAgfVxuICBpZiAoaXNIVE1MRWxlbWVudChwYXJlbnROb2RlKSAmJiBpc092ZXJmbG93RWxlbWVudChwYXJlbnROb2RlKSkge1xuICAgIHJldHVybiBwYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBnZXROZWFyZXN0T3ZlcmZsb3dBbmNlc3RvcihwYXJlbnROb2RlKTtcbn1cbmZ1bmN0aW9uIGdldE92ZXJmbG93QW5jZXN0b3JzKG5vZGUsIGxpc3QsIHRyYXZlcnNlSWZyYW1lcykge1xuICB2YXIgX25vZGUkb3duZXJEb2N1bWVudDI7XG4gIGlmIChsaXN0ID09PSB2b2lkIDApIHtcbiAgICBsaXN0ID0gW107XG4gIH1cbiAgaWYgKHRyYXZlcnNlSWZyYW1lcyA9PT0gdm9pZCAwKSB7XG4gICAgdHJhdmVyc2VJZnJhbWVzID0gdHJ1ZTtcbiAgfVxuICBjb25zdCBzY3JvbGxhYmxlQW5jZXN0b3IgPSBnZXROZWFyZXN0T3ZlcmZsb3dBbmNlc3Rvcihub2RlKTtcbiAgY29uc3QgaXNCb2R5ID0gc2Nyb2xsYWJsZUFuY2VzdG9yID09PSAoKF9ub2RlJG93bmVyRG9jdW1lbnQyID0gbm9kZS5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX25vZGUkb3duZXJEb2N1bWVudDIuYm9keSk7XG4gIGNvbnN0IHdpbiA9IGdldFdpbmRvdyhzY3JvbGxhYmxlQW5jZXN0b3IpO1xuICBpZiAoaXNCb2R5KSB7XG4gICAgcmV0dXJuIGxpc3QuY29uY2F0KHdpbiwgd2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc092ZXJmbG93RWxlbWVudChzY3JvbGxhYmxlQW5jZXN0b3IpID8gc2Nyb2xsYWJsZUFuY2VzdG9yIDogW10sIHdpbi5mcmFtZUVsZW1lbnQgJiYgdHJhdmVyc2VJZnJhbWVzID8gZ2V0T3ZlcmZsb3dBbmNlc3RvcnMod2luLmZyYW1lRWxlbWVudCkgOiBbXSk7XG4gIH1cbiAgcmV0dXJuIGxpc3QuY29uY2F0KHNjcm9sbGFibGVBbmNlc3RvciwgZ2V0T3ZlcmZsb3dBbmNlc3RvcnMoc2Nyb2xsYWJsZUFuY2VzdG9yLCBbXSwgdHJhdmVyc2VJZnJhbWVzKSk7XG59XG5cbmZ1bmN0aW9uIGdldENzc0RpbWVuc2lvbnMoZWxlbWVudCkge1xuICBjb25zdCBjc3MgPSBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCk7XG4gIC8vIEluIHRlc3RpbmcgZW52aXJvbm1lbnRzLCB0aGUgYHdpZHRoYCBhbmQgYGhlaWdodGAgcHJvcGVydGllcyBhcmUgZW1wdHlcbiAgLy8gc3RyaW5ncyBmb3IgU1ZHIGVsZW1lbnRzLCByZXR1cm5pbmcgTmFOLiBGYWxsYmFjayB0byBgMGAgaW4gdGhpcyBjYXNlLlxuICBsZXQgd2lkdGggPSBwYXJzZUZsb2F0KGNzcy53aWR0aCkgfHwgMDtcbiAgbGV0IGhlaWdodCA9IHBhcnNlRmxvYXQoY3NzLmhlaWdodCkgfHwgMDtcbiAgY29uc3QgaGFzT2Zmc2V0ID0gaXNIVE1MRWxlbWVudChlbGVtZW50KTtcbiAgY29uc3Qgb2Zmc2V0V2lkdGggPSBoYXNPZmZzZXQgPyBlbGVtZW50Lm9mZnNldFdpZHRoIDogd2lkdGg7XG4gIGNvbnN0IG9mZnNldEhlaWdodCA9IGhhc09mZnNldCA/IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IDogaGVpZ2h0O1xuICBjb25zdCBzaG91bGRGYWxsYmFjayA9IHJvdW5kKHdpZHRoKSAhPT0gb2Zmc2V0V2lkdGggfHwgcm91bmQoaGVpZ2h0KSAhPT0gb2Zmc2V0SGVpZ2h0O1xuICBpZiAoc2hvdWxkRmFsbGJhY2spIHtcbiAgICB3aWR0aCA9IG9mZnNldFdpZHRoO1xuICAgIGhlaWdodCA9IG9mZnNldEhlaWdodDtcbiAgfVxuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICAkOiBzaG91bGRGYWxsYmFja1xuICB9O1xufVxuXG5mdW5jdGlvbiB1bndyYXBFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuICFpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50LmNvbnRleHRFbGVtZW50IDogZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZ2V0U2NhbGUoZWxlbWVudCkge1xuICBjb25zdCBkb21FbGVtZW50ID0gdW53cmFwRWxlbWVudChlbGVtZW50KTtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGRvbUVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNvb3JkcygxKTtcbiAgfVxuICBjb25zdCByZWN0ID0gZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3Qge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICAkXG4gIH0gPSBnZXRDc3NEaW1lbnNpb25zKGRvbUVsZW1lbnQpO1xuICBsZXQgeCA9ICgkID8gcm91bmQocmVjdC53aWR0aCkgOiByZWN0LndpZHRoKSAvIHdpZHRoO1xuICBsZXQgeSA9ICgkID8gcm91bmQocmVjdC5oZWlnaHQpIDogcmVjdC5oZWlnaHQpIC8gaGVpZ2h0O1xuXG4gIC8vIDAsIE5hTiwgb3IgSW5maW5pdHkgc2hvdWxkIGFsd2F5cyBmYWxsYmFjayB0byAxLlxuXG4gIGlmICgheCB8fCAhTnVtYmVyLmlzRmluaXRlKHgpKSB7XG4gICAgeCA9IDE7XG4gIH1cbiAgaWYgKCF5IHx8ICFOdW1iZXIuaXNGaW5pdGUoeSkpIHtcbiAgICB5ID0gMTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHgsXG4gICAgeVxuICB9O1xufVxuXG5jb25zdCBub09mZnNldHMgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29vcmRzKDApO1xuZnVuY3Rpb24gZ2V0VmlzdWFsT2Zmc2V0cyhlbGVtZW50KSB7XG4gIGNvbnN0IHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgaWYgKCFpc1dlYktpdCgpIHx8ICF3aW4udmlzdWFsVmlld3BvcnQpIHtcbiAgICByZXR1cm4gbm9PZmZzZXRzO1xuICB9XG4gIHJldHVybiB7XG4gICAgeDogd2luLnZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQsXG4gICAgeTogd2luLnZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcFxuICB9O1xufVxuZnVuY3Rpb24gc2hvdWxkQWRkVmlzdWFsT2Zmc2V0cyhlbGVtZW50LCBpc0ZpeGVkLCBmbG9hdGluZ09mZnNldFBhcmVudCkge1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IGZhbHNlO1xuICB9XG4gIGlmICghZmxvYXRpbmdPZmZzZXRQYXJlbnQgfHwgaXNGaXhlZCAmJiBmbG9hdGluZ09mZnNldFBhcmVudCAhPT0gZ2V0V2luZG93KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBpc0ZpeGVkO1xufVxuXG5mdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgaW5jbHVkZVNjYWxlLCBpc0ZpeGVkU3RyYXRlZ3ksIG9mZnNldFBhcmVudCkge1xuICBpZiAoaW5jbHVkZVNjYWxlID09PSB2b2lkIDApIHtcbiAgICBpbmNsdWRlU2NhbGUgPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNGaXhlZFN0cmF0ZWd5ID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkU3RyYXRlZ3kgPSBmYWxzZTtcbiAgfVxuICBjb25zdCBjbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgZG9tRWxlbWVudCA9IHVud3JhcEVsZW1lbnQoZWxlbWVudCk7XG4gIGxldCBzY2FsZSA9IGNyZWF0ZUNvb3JkcygxKTtcbiAgaWYgKGluY2x1ZGVTY2FsZSkge1xuICAgIGlmIChvZmZzZXRQYXJlbnQpIHtcbiAgICAgIGlmIChpc0VsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgICBzY2FsZSA9IGdldFNjYWxlKG9mZnNldFBhcmVudCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjYWxlID0gZ2V0U2NhbGUoZWxlbWVudCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHZpc3VhbE9mZnNldHMgPSBzaG91bGRBZGRWaXN1YWxPZmZzZXRzKGRvbUVsZW1lbnQsIGlzRml4ZWRTdHJhdGVneSwgb2Zmc2V0UGFyZW50KSA/IGdldFZpc3VhbE9mZnNldHMoZG9tRWxlbWVudCkgOiBjcmVhdGVDb29yZHMoMCk7XG4gIGxldCB4ID0gKGNsaWVudFJlY3QubGVmdCArIHZpc3VhbE9mZnNldHMueCkgLyBzY2FsZS54O1xuICBsZXQgeSA9IChjbGllbnRSZWN0LnRvcCArIHZpc3VhbE9mZnNldHMueSkgLyBzY2FsZS55O1xuICBsZXQgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoIC8gc2NhbGUueDtcbiAgbGV0IGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0IC8gc2NhbGUueTtcbiAgaWYgKGRvbUVsZW1lbnQpIHtcbiAgICBjb25zdCB3aW4gPSBnZXRXaW5kb3coZG9tRWxlbWVudCk7XG4gICAgY29uc3Qgb2Zmc2V0V2luID0gb2Zmc2V0UGFyZW50ICYmIGlzRWxlbWVudChvZmZzZXRQYXJlbnQpID8gZ2V0V2luZG93KG9mZnNldFBhcmVudCkgOiBvZmZzZXRQYXJlbnQ7XG4gICAgbGV0IGN1cnJlbnRJRnJhbWUgPSB3aW4uZnJhbWVFbGVtZW50O1xuICAgIHdoaWxlIChjdXJyZW50SUZyYW1lICYmIG9mZnNldFBhcmVudCAmJiBvZmZzZXRXaW4gIT09IHdpbikge1xuICAgICAgY29uc3QgaWZyYW1lU2NhbGUgPSBnZXRTY2FsZShjdXJyZW50SUZyYW1lKTtcbiAgICAgIGNvbnN0IGlmcmFtZVJlY3QgPSBjdXJyZW50SUZyYW1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZSQxKGN1cnJlbnRJRnJhbWUpO1xuICAgICAgY29uc3QgbGVmdCA9IGlmcmFtZVJlY3QubGVmdCArIChjdXJyZW50SUZyYW1lLmNsaWVudExlZnQgKyBwYXJzZUZsb2F0KGNzcy5wYWRkaW5nTGVmdCkpICogaWZyYW1lU2NhbGUueDtcbiAgICAgIGNvbnN0IHRvcCA9IGlmcmFtZVJlY3QudG9wICsgKGN1cnJlbnRJRnJhbWUuY2xpZW50VG9wICsgcGFyc2VGbG9hdChjc3MucGFkZGluZ1RvcCkpICogaWZyYW1lU2NhbGUueTtcbiAgICAgIHggKj0gaWZyYW1lU2NhbGUueDtcbiAgICAgIHkgKj0gaWZyYW1lU2NhbGUueTtcbiAgICAgIHdpZHRoICo9IGlmcmFtZVNjYWxlLng7XG4gICAgICBoZWlnaHQgKj0gaWZyYW1lU2NhbGUueTtcbiAgICAgIHggKz0gbGVmdDtcbiAgICAgIHkgKz0gdG9wO1xuICAgICAgY3VycmVudElGcmFtZSA9IGdldFdpbmRvdyhjdXJyZW50SUZyYW1lKS5mcmFtZUVsZW1lbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZWN0VG9DbGllbnRSZWN0KHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgeCxcbiAgICB5XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdChfcmVmKSB7XG4gIGxldCB7XG4gICAgcmVjdCxcbiAgICBvZmZzZXRQYXJlbnQsXG4gICAgc3RyYXRlZ3lcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICBjb25zdCBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgaWYgKG9mZnNldFBhcmVudCA9PT0gZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cbiAgbGV0IHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICBsZXQgc2NhbGUgPSBjcmVhdGVDb29yZHMoMSk7XG4gIGNvbnN0IG9mZnNldHMgPSBjcmVhdGVDb29yZHMoMCk7XG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgc3RyYXRlZ3kgIT09ICdmaXhlZCcpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IGlzT3ZlcmZsb3dFbGVtZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgY29uc3Qgb2Zmc2V0UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQpO1xuICAgICAgc2NhbGUgPSBnZXRTY2FsZShvZmZzZXRQYXJlbnQpO1xuICAgICAgb2Zmc2V0cy54ID0gb2Zmc2V0UmVjdC54ICsgb2Zmc2V0UGFyZW50LmNsaWVudExlZnQ7XG4gICAgICBvZmZzZXRzLnkgPSBvZmZzZXRSZWN0LnkgKyBvZmZzZXRQYXJlbnQuY2xpZW50VG9wO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHdpZHRoOiByZWN0LndpZHRoICogc2NhbGUueCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0ICogc2NhbGUueSxcbiAgICB4OiByZWN0LnggKiBzY2FsZS54IC0gc2Nyb2xsLnNjcm9sbExlZnQgKiBzY2FsZS54ICsgb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QueSAqIHNjYWxlLnkgLSBzY3JvbGwuc2Nyb2xsVG9wICogc2NhbGUueSArIG9mZnNldHMueVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0cyhlbGVtZW50KSB7XG4gIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKSk7XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldE5vZGVTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn1cblxuLy8gR2V0cyB0aGUgZW50aXJlIHNpemUgb2YgdGhlIHNjcm9sbGFibGUgZG9jdW1lbnQgYXJlYSwgZXZlbiBleHRlbmRpbmcgb3V0c2lkZVxuLy8gb2YgdGhlIGA8aHRtbD5gIGFuZCBgPGJvZHk+YCByZWN0IGJvdW5kcyBpZiBob3Jpem9udGFsbHkgc2Nyb2xsYWJsZS5cbmZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIGNvbnN0IGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIGNvbnN0IHNjcm9sbCA9IGdldE5vZGVTY3JvbGwoZWxlbWVudCk7XG4gIGNvbnN0IGJvZHkgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keTtcbiAgY29uc3Qgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keS5zY3JvbGxXaWR0aCwgYm9keS5jbGllbnRXaWR0aCk7XG4gIGNvbnN0IGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkuc2Nyb2xsSGVpZ2h0LCBib2R5LmNsaWVudEhlaWdodCk7XG4gIGxldCB4ID0gLXNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgY29uc3QgeSA9IC1zY3JvbGwuc2Nyb2xsVG9wO1xuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSQxKGJvZHkpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5LmNsaWVudFdpZHRoKSAtIHdpZHRoO1xuICB9XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHgsXG4gICAgeVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpIHtcbiAgY29uc3Qgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICBjb25zdCBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICBjb25zdCB2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydDtcbiAgbGV0IHdpZHRoID0gaHRtbC5jbGllbnRXaWR0aDtcbiAgbGV0IGhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICBsZXQgeCA9IDA7XG4gIGxldCB5ID0gMDtcbiAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgd2lkdGggPSB2aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7XG4gICAgY29uc3QgdmlzdWFsVmlld3BvcnRCYXNlZCA9IGlzV2ViS2l0KCk7XG4gICAgaWYgKCF2aXN1YWxWaWV3cG9ydEJhc2VkIHx8IHZpc3VhbFZpZXdwb3J0QmFzZWQgJiYgc3RyYXRlZ3kgPT09ICdmaXhlZCcpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgeCxcbiAgICB5XG4gIH07XG59XG5cbi8vIFJldHVybnMgdGhlIGlubmVyIGNsaWVudCByZWN0LCBzdWJ0cmFjdGluZyBzY3JvbGxiYXJzIGlmIHByZXNlbnQuXG5mdW5jdGlvbiBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xuICBjb25zdCBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIHRydWUsIHN0cmF0ZWd5ID09PSAnZml4ZWQnKTtcbiAgY29uc3QgdG9wID0gY2xpZW50UmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgY29uc3QgbGVmdCA9IGNsaWVudFJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgY29uc3Qgc2NhbGUgPSBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0U2NhbGUoZWxlbWVudCkgOiBjcmVhdGVDb29yZHMoMSk7XG4gIGNvbnN0IHdpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjYWxlLng7XG4gIGNvbnN0IGhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NhbGUueTtcbiAgY29uc3QgeCA9IGxlZnQgKiBzY2FsZS54O1xuICBjb25zdCB5ID0gdG9wICogc2NhbGUueTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgeCxcbiAgICB5XG4gIH07XG59XG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0RnJvbUNsaXBwaW5nQW5jZXN0b3IoZWxlbWVudCwgY2xpcHBpbmdBbmNlc3Rvciwgc3RyYXRlZ3kpIHtcbiAgbGV0IHJlY3Q7XG4gIGlmIChjbGlwcGluZ0FuY2VzdG9yID09PSAndmlld3BvcnQnKSB7XG4gICAgcmVjdCA9IGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSk7XG4gIH0gZWxzZSBpZiAoY2xpcHBpbmdBbmNlc3RvciA9PT0gJ2RvY3VtZW50Jykge1xuICAgIHJlY3QgPSBnZXREb2N1bWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKTtcbiAgfSBlbHNlIGlmIChpc0VsZW1lbnQoY2xpcHBpbmdBbmNlc3RvcikpIHtcbiAgICByZWN0ID0gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdBbmNlc3Rvciwgc3RyYXRlZ3kpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHZpc3VhbE9mZnNldHMgPSBnZXRWaXN1YWxPZmZzZXRzKGVsZW1lbnQpO1xuICAgIHJlY3QgPSB7XG4gICAgICAuLi5jbGlwcGluZ0FuY2VzdG9yLFxuICAgICAgeDogY2xpcHBpbmdBbmNlc3Rvci54IC0gdmlzdWFsT2Zmc2V0cy54LFxuICAgICAgeTogY2xpcHBpbmdBbmNlc3Rvci55IC0gdmlzdWFsT2Zmc2V0cy55XG4gICAgfTtcbiAgfVxuICByZXR1cm4gcmVjdFRvQ2xpZW50UmVjdChyZWN0KTtcbn1cbmZ1bmN0aW9uIGhhc0ZpeGVkUG9zaXRpb25BbmNlc3RvcihlbGVtZW50LCBzdG9wTm9kZSkge1xuICBjb25zdCBwYXJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgaWYgKHBhcmVudE5vZGUgPT09IHN0b3BOb2RlIHx8ICFpc0VsZW1lbnQocGFyZW50Tm9kZSkgfHwgaXNMYXN0VHJhdmVyc2FibGVOb2RlKHBhcmVudE5vZGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlJDEocGFyZW50Tm9kZSkucG9zaXRpb24gPT09ICdmaXhlZCcgfHwgaGFzRml4ZWRQb3NpdGlvbkFuY2VzdG9yKHBhcmVudE5vZGUsIHN0b3BOb2RlKTtcbn1cblxuLy8gQSBcImNsaXBwaW5nIGFuY2VzdG9yXCIgaXMgYW4gYG92ZXJmbG93YCBlbGVtZW50IHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4vLyBjbGlwcGluZyAob3IgaGlkaW5nKSBjaGlsZCBlbGVtZW50cy4gVGhpcyByZXR1cm5zIGFsbCBjbGlwcGluZyBhbmNlc3RvcnNcbi8vIG9mIHRoZSBnaXZlbiBlbGVtZW50IHVwIHRoZSB0cmVlLlxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdFbGVtZW50QW5jZXN0b3JzKGVsZW1lbnQsIGNhY2hlKSB7XG4gIGNvbnN0IGNhY2hlZFJlc3VsdCA9IGNhY2hlLmdldChlbGVtZW50KTtcbiAgaWYgKGNhY2hlZFJlc3VsdCkge1xuICAgIHJldHVybiBjYWNoZWRSZXN1bHQ7XG4gIH1cbiAgbGV0IHJlc3VsdCA9IGdldE92ZXJmbG93QW5jZXN0b3JzKGVsZW1lbnQsIFtdLCBmYWxzZSkuZmlsdGVyKGVsID0+IGlzRWxlbWVudChlbCkgJiYgZ2V0Tm9kZU5hbWUoZWwpICE9PSAnYm9keScpO1xuICBsZXQgY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgPSBudWxsO1xuICBjb25zdCBlbGVtZW50SXNGaXhlZCA9IGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJztcbiAgbGV0IGN1cnJlbnROb2RlID0gZWxlbWVudElzRml4ZWQgPyBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIDogZWxlbWVudDtcblxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuICB3aGlsZSAoaXNFbGVtZW50KGN1cnJlbnROb2RlKSAmJiAhaXNMYXN0VHJhdmVyc2FibGVOb2RlKGN1cnJlbnROb2RlKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlJDEoY3VycmVudE5vZGUpO1xuICAgIGNvbnN0IGN1cnJlbnROb2RlSXNDb250YWluaW5nID0gaXNDb250YWluaW5nQmxvY2soY3VycmVudE5vZGUpO1xuICAgIGlmICghY3VycmVudE5vZGVJc0NvbnRhaW5pbmcgJiYgY29tcHV0ZWRTdHlsZS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgPSBudWxsO1xuICAgIH1cbiAgICBjb25zdCBzaG91bGREcm9wQ3VycmVudE5vZGUgPSBlbGVtZW50SXNGaXhlZCA/ICFjdXJyZW50Tm9kZUlzQ29udGFpbmluZyAmJiAhY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgOiAhY3VycmVudE5vZGVJc0NvbnRhaW5pbmcgJiYgY29tcHV0ZWRTdHlsZS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycgJiYgISFjdXJyZW50Q29udGFpbmluZ0Jsb2NrQ29tcHV0ZWRTdHlsZSAmJiBbJ2Fic29sdXRlJywgJ2ZpeGVkJ10uaW5jbHVkZXMoY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUucG9zaXRpb24pIHx8IGlzT3ZlcmZsb3dFbGVtZW50KGN1cnJlbnROb2RlKSAmJiAhY3VycmVudE5vZGVJc0NvbnRhaW5pbmcgJiYgaGFzRml4ZWRQb3NpdGlvbkFuY2VzdG9yKGVsZW1lbnQsIGN1cnJlbnROb2RlKTtcbiAgICBpZiAoc2hvdWxkRHJvcEN1cnJlbnROb2RlKSB7XG4gICAgICAvLyBEcm9wIG5vbi1jb250YWluaW5nIGJsb2Nrcy5cbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoYW5jZXN0b3IgPT4gYW5jZXN0b3IgIT09IGN1cnJlbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVjb3JkIGxhc3QgY29udGFpbmluZyBibG9jayBmb3IgbmV4dCBpdGVyYXRpb24uXG4gICAgICBjdXJyZW50Q29udGFpbmluZ0Jsb2NrQ29tcHV0ZWRTdHlsZSA9IGNvbXB1dGVkU3R5bGU7XG4gICAgfVxuICAgIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShjdXJyZW50Tm9kZSk7XG4gIH1cbiAgY2FjaGUuc2V0KGVsZW1lbnQsIHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIEdldHMgdGhlIG1heGltdW0gYXJlYSB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gZHVlIHRvIGFueSBudW1iZXIgb2Zcbi8vIGNsaXBwaW5nIGFuY2VzdG9ycy5cbmZ1bmN0aW9uIGdldENsaXBwaW5nUmVjdChfcmVmKSB7XG4gIGxldCB7XG4gICAgZWxlbWVudCxcbiAgICBib3VuZGFyeSxcbiAgICByb290Qm91bmRhcnksXG4gICAgc3RyYXRlZ3lcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGVsZW1lbnRDbGlwcGluZ0FuY2VzdG9ycyA9IGJvdW5kYXJ5ID09PSAnY2xpcHBpbmdBbmNlc3RvcnMnID8gZ2V0Q2xpcHBpbmdFbGVtZW50QW5jZXN0b3JzKGVsZW1lbnQsIHRoaXMuX2MpIDogW10uY29uY2F0KGJvdW5kYXJ5KTtcbiAgY29uc3QgY2xpcHBpbmdBbmNlc3RvcnMgPSBbLi4uZWxlbWVudENsaXBwaW5nQW5jZXN0b3JzLCByb290Qm91bmRhcnldO1xuICBjb25zdCBmaXJzdENsaXBwaW5nQW5jZXN0b3IgPSBjbGlwcGluZ0FuY2VzdG9yc1swXTtcbiAgY29uc3QgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdBbmNlc3RvcnMucmVkdWNlKChhY2NSZWN0LCBjbGlwcGluZ0FuY2VzdG9yKSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGdldENsaWVudFJlY3RGcm9tQ2xpcHBpbmdBbmNlc3RvcihlbGVtZW50LCBjbGlwcGluZ0FuY2VzdG9yLCBzdHJhdGVneSk7XG4gICAgYWNjUmVjdC50b3AgPSBtYXgocmVjdC50b3AsIGFjY1JlY3QudG9wKTtcbiAgICBhY2NSZWN0LnJpZ2h0ID0gbWluKHJlY3QucmlnaHQsIGFjY1JlY3QucmlnaHQpO1xuICAgIGFjY1JlY3QuYm90dG9tID0gbWluKHJlY3QuYm90dG9tLCBhY2NSZWN0LmJvdHRvbSk7XG4gICAgYWNjUmVjdC5sZWZ0ID0gbWF4KHJlY3QubGVmdCwgYWNjUmVjdC5sZWZ0KTtcbiAgICByZXR1cm4gYWNjUmVjdDtcbiAgfSwgZ2V0Q2xpZW50UmVjdEZyb21DbGlwcGluZ0FuY2VzdG9yKGVsZW1lbnQsIGZpcnN0Q2xpcHBpbmdBbmNlc3Rvciwgc3RyYXRlZ3kpKTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogY2xpcHBpbmdSZWN0LnJpZ2h0IC0gY2xpcHBpbmdSZWN0LmxlZnQsXG4gICAgaGVpZ2h0OiBjbGlwcGluZ1JlY3QuYm90dG9tIC0gY2xpcHBpbmdSZWN0LnRvcCxcbiAgICB4OiBjbGlwcGluZ1JlY3QubGVmdCxcbiAgICB5OiBjbGlwcGluZ1JlY3QudG9wXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldERpbWVuc2lvbnMoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0Q3NzRGltZW5zaW9ucyhlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVjdFJlbGF0aXZlVG9PZmZzZXRQYXJlbnQoZWxlbWVudCwgb2Zmc2V0UGFyZW50LCBzdHJhdGVneSkge1xuICBjb25zdCBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIGNvbnN0IGlzRml4ZWQgPSBzdHJhdGVneSA9PT0gJ2ZpeGVkJztcbiAgY29uc3QgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCB0cnVlLCBpc0ZpeGVkLCBvZmZzZXRQYXJlbnQpO1xuICBsZXQgc2Nyb2xsID0ge1xuICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgc2Nyb2xsVG9wOiAwXG4gIH07XG4gIGNvbnN0IG9mZnNldHMgPSBjcmVhdGVDb29yZHMoMCk7XG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IGlzT3ZlcmZsb3dFbGVtZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50KSB7XG4gICAgICBjb25zdCBvZmZzZXRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCwgdHJ1ZSwgaXNGaXhlZCwgb2Zmc2V0UGFyZW50KTtcbiAgICAgIG9mZnNldHMueCA9IG9mZnNldFJlY3QueCArIG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ID0gb2Zmc2V0UmVjdC55ICsgb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgb2Zmc2V0cy54ID0gZ2V0V2luZG93U2Nyb2xsQmFyWChkb2N1bWVudEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCwgcG9seWZpbGwpIHtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChwb2x5ZmlsbCkge1xuICAgIHJldHVybiBwb2x5ZmlsbChlbGVtZW50KTtcbiAgfVxuICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG59XG5cbi8vIEdldHMgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgcG9zaXRpb25lZCBlbGVtZW50LiBIYW5kbGVzIHNvbWUgZWRnZSBjYXNlcyxcbi8vIHN1Y2ggYXMgdGFibGUgYW5jZXN0b3JzIGFuZCBjcm9zcyBicm93c2VyIGJ1Z3MuXG5mdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCwgcG9seWZpbGwpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG4gIGxldCBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQsIHBvbHlmaWxsKTtcbiAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBpc1RhYmxlRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGdldENvbXB1dGVkU3R5bGUkMShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50LCBwb2x5ZmlsbCk7XG4gIH1cbiAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlJDEob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycgJiYgIWlzQ29udGFpbmluZ0Jsb2NrKG9mZnNldFBhcmVudCkpKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3c7XG59XG5cbmNvbnN0IGdldEVsZW1lbnRSZWN0cyA9IGFzeW5jIGZ1bmN0aW9uIChfcmVmKSB7XG4gIGxldCB7XG4gICAgcmVmZXJlbmNlLFxuICAgIGZsb2F0aW5nLFxuICAgIHN0cmF0ZWd5XG4gIH0gPSBfcmVmO1xuICBjb25zdCBnZXRPZmZzZXRQYXJlbnRGbiA9IHRoaXMuZ2V0T2Zmc2V0UGFyZW50IHx8IGdldE9mZnNldFBhcmVudDtcbiAgY29uc3QgZ2V0RGltZW5zaW9uc0ZuID0gdGhpcy5nZXREaW1lbnNpb25zO1xuICByZXR1cm4ge1xuICAgIHJlZmVyZW5jZTogZ2V0UmVjdFJlbGF0aXZlVG9PZmZzZXRQYXJlbnQocmVmZXJlbmNlLCBhd2FpdCBnZXRPZmZzZXRQYXJlbnRGbihmbG9hdGluZyksIHN0cmF0ZWd5KSxcbiAgICBmbG9hdGluZzoge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICAuLi4oYXdhaXQgZ2V0RGltZW5zaW9uc0ZuKGZsb2F0aW5nKSlcbiAgICB9XG4gIH07XG59O1xuXG5mdW5jdGlvbiBpc1JUTChlbGVtZW50KSB7XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCkuZGlyZWN0aW9uID09PSAncnRsJztcbn1cblxuY29uc3QgcGxhdGZvcm0gPSB7XG4gIGNvbnZlcnRPZmZzZXRQYXJlbnRSZWxhdGl2ZVJlY3RUb1ZpZXdwb3J0UmVsYXRpdmVSZWN0LFxuICBnZXREb2N1bWVudEVsZW1lbnQsXG4gIGdldENsaXBwaW5nUmVjdCxcbiAgZ2V0T2Zmc2V0UGFyZW50LFxuICBnZXRFbGVtZW50UmVjdHMsXG4gIGdldENsaWVudFJlY3RzLFxuICBnZXREaW1lbnNpb25zLFxuICBnZXRTY2FsZSxcbiAgaXNFbGVtZW50LFxuICBpc1JUTFxufTtcblxuLy8gaHR0cHM6Ly9zYW10aG9yLmF1LzIwMjEvb2JzZXJ2aW5nLWRvbS9cbmZ1bmN0aW9uIG9ic2VydmVNb3ZlKGVsZW1lbnQsIG9uTW92ZSkge1xuICBsZXQgaW8gPSBudWxsO1xuICBsZXQgdGltZW91dElkO1xuICBjb25zdCByb290ID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIGlvICYmIGlvLmRpc2Nvbm5lY3QoKTtcbiAgICBpbyA9IG51bGw7XG4gIH1cbiAgZnVuY3Rpb24gcmVmcmVzaChza2lwLCB0aHJlc2hvbGQpIHtcbiAgICBpZiAoc2tpcCA9PT0gdm9pZCAwKSB7XG4gICAgICBza2lwID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aHJlc2hvbGQgPT09IHZvaWQgMCkge1xuICAgICAgdGhyZXNob2xkID0gMTtcbiAgICB9XG4gICAgY2xlYW51cCgpO1xuICAgIGNvbnN0IHtcbiAgICAgIGxlZnQsXG4gICAgICB0b3AsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodFxuICAgIH0gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICghc2tpcCkge1xuICAgICAgb25Nb3ZlKCk7XG4gICAgfVxuICAgIGlmICghd2lkdGggfHwgIWhlaWdodCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbnNldFRvcCA9IGZsb29yKHRvcCk7XG4gICAgY29uc3QgaW5zZXRSaWdodCA9IGZsb29yKHJvb3QuY2xpZW50V2lkdGggLSAobGVmdCArIHdpZHRoKSk7XG4gICAgY29uc3QgaW5zZXRCb3R0b20gPSBmbG9vcihyb290LmNsaWVudEhlaWdodCAtICh0b3AgKyBoZWlnaHQpKTtcbiAgICBjb25zdCBpbnNldExlZnQgPSBmbG9vcihsZWZ0KTtcbiAgICBjb25zdCByb290TWFyZ2luID0gLWluc2V0VG9wICsgXCJweCBcIiArIC1pbnNldFJpZ2h0ICsgXCJweCBcIiArIC1pbnNldEJvdHRvbSArIFwicHggXCIgKyAtaW5zZXRMZWZ0ICsgXCJweFwiO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICByb290TWFyZ2luLFxuICAgICAgdGhyZXNob2xkOiBtYXgoMCwgbWluKDEsIHRocmVzaG9sZCkpIHx8IDFcbiAgICB9O1xuICAgIGxldCBpc0ZpcnN0VXBkYXRlID0gdHJ1ZTtcbiAgICBmdW5jdGlvbiBoYW5kbGVPYnNlcnZlKGVudHJpZXMpIHtcbiAgICAgIGNvbnN0IHJhdGlvID0gZW50cmllc1swXS5pbnRlcnNlY3Rpb25SYXRpbztcbiAgICAgIGlmIChyYXRpbyAhPT0gdGhyZXNob2xkKSB7XG4gICAgICAgIGlmICghaXNGaXJzdFVwZGF0ZSkge1xuICAgICAgICAgIHJldHVybiByZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyYXRpbykge1xuICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVmcmVzaChmYWxzZSwgMWUtNyk7XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWZyZXNoKGZhbHNlLCByYXRpbyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlzRmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBPbGRlciBicm93c2VycyBkb24ndCBzdXBwb3J0IGEgYGRvY3VtZW50YCBhcyB0aGUgcm9vdCBhbmQgd2lsbCB0aHJvdyBhblxuICAgIC8vIGVycm9yLlxuICAgIHRyeSB7XG4gICAgICBpbyA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihoYW5kbGVPYnNlcnZlLCB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIC8vIEhhbmRsZSA8aWZyYW1lPnNcbiAgICAgICAgcm9vdDogcm9vdC5vd25lckRvY3VtZW50XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpbyA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihoYW5kbGVPYnNlcnZlLCBvcHRpb25zKTtcbiAgICB9XG4gICAgaW8ub2JzZXJ2ZShlbGVtZW50KTtcbiAgfVxuICByZWZyZXNoKHRydWUpO1xuICByZXR1cm4gY2xlYW51cDtcbn1cblxuLyoqXG4gKiBBdXRvbWF0aWNhbGx5IHVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IHdoZW4gbmVjZXNzYXJ5LlxuICogU2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW4gdGhlIGZsb2F0aW5nIGVsZW1lbnQgaXMgbW91bnRlZCBvbiB0aGUgRE9NIG9yXG4gKiB2aXNpYmxlIG9uIHRoZSBzY3JlZW4uXG4gKiBAcmV0dXJucyBjbGVhbnVwIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIGludm9rZWQgd2hlbiB0aGUgZmxvYXRpbmcgZWxlbWVudCBpc1xuICogcmVtb3ZlZCBmcm9tIHRoZSBET00gb3IgaGlkZGVuIGZyb20gdGhlIHNjcmVlbi5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9hdXRvVXBkYXRlXG4gKi9cbmZ1bmN0aW9uIGF1dG9VcGRhdGUocmVmZXJlbmNlLCBmbG9hdGluZywgdXBkYXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgY29uc3Qge1xuICAgIGFuY2VzdG9yU2Nyb2xsID0gdHJ1ZSxcbiAgICBhbmNlc3RvclJlc2l6ZSA9IHRydWUsXG4gICAgZWxlbWVudFJlc2l6ZSA9IHR5cGVvZiBSZXNpemVPYnNlcnZlciA9PT0gJ2Z1bmN0aW9uJyxcbiAgICBsYXlvdXRTaGlmdCA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciA9PT0gJ2Z1bmN0aW9uJyxcbiAgICBhbmltYXRpb25GcmFtZSA9IGZhbHNlXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCByZWZlcmVuY2VFbCA9IHVud3JhcEVsZW1lbnQocmVmZXJlbmNlKTtcbiAgY29uc3QgYW5jZXN0b3JzID0gYW5jZXN0b3JTY3JvbGwgfHwgYW5jZXN0b3JSZXNpemUgPyBbLi4uKHJlZmVyZW5jZUVsID8gZ2V0T3ZlcmZsb3dBbmNlc3RvcnMocmVmZXJlbmNlRWwpIDogW10pLCAuLi5nZXRPdmVyZmxvd0FuY2VzdG9ycyhmbG9hdGluZyldIDogW107XG4gIGFuY2VzdG9ycy5mb3JFYWNoKGFuY2VzdG9yID0+IHtcbiAgICBhbmNlc3RvclNjcm9sbCAmJiBhbmNlc3Rvci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGUsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgICBhbmNlc3RvclJlc2l6ZSAmJiBhbmNlc3Rvci5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGUpO1xuICB9KTtcbiAgY29uc3QgY2xlYW51cElvID0gcmVmZXJlbmNlRWwgJiYgbGF5b3V0U2hpZnQgPyBvYnNlcnZlTW92ZShyZWZlcmVuY2VFbCwgdXBkYXRlKSA6IG51bGw7XG4gIGxldCByZW9ic2VydmVGcmFtZSA9IC0xO1xuICBsZXQgcmVzaXplT2JzZXJ2ZXIgPSBudWxsO1xuICBpZiAoZWxlbWVudFJlc2l6ZSkge1xuICAgIHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKF9yZWYgPT4ge1xuICAgICAgbGV0IFtmaXJzdEVudHJ5XSA9IF9yZWY7XG4gICAgICBpZiAoZmlyc3RFbnRyeSAmJiBmaXJzdEVudHJ5LnRhcmdldCA9PT0gcmVmZXJlbmNlRWwgJiYgcmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgICAgLy8gUHJldmVudCB1cGRhdGUgbG9vcHMgd2hlbiB1c2luZyB0aGUgYHNpemVgIG1pZGRsZXdhcmUuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mbG9hdGluZy11aS9mbG9hdGluZy11aS9pc3N1ZXMvMTc0MFxuICAgICAgICByZXNpemVPYnNlcnZlci51bm9ic2VydmUoZmxvYXRpbmcpO1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZW9ic2VydmVGcmFtZSk7XG4gICAgICAgIHJlb2JzZXJ2ZUZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICByZXNpemVPYnNlcnZlciAmJiByZXNpemVPYnNlcnZlci5vYnNlcnZlKGZsb2F0aW5nKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcbiAgICBpZiAocmVmZXJlbmNlRWwgJiYgIWFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKHJlZmVyZW5jZUVsKTtcbiAgICB9XG4gICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShmbG9hdGluZyk7XG4gIH1cbiAgbGV0IGZyYW1lSWQ7XG4gIGxldCBwcmV2UmVmUmVjdCA9IGFuaW1hdGlvbkZyYW1lID8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHJlZmVyZW5jZSkgOiBudWxsO1xuICBpZiAoYW5pbWF0aW9uRnJhbWUpIHtcbiAgICBmcmFtZUxvb3AoKTtcbiAgfVxuICBmdW5jdGlvbiBmcmFtZUxvb3AoKSB7XG4gICAgY29uc3QgbmV4dFJlZlJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocmVmZXJlbmNlKTtcbiAgICBpZiAocHJldlJlZlJlY3QgJiYgKG5leHRSZWZSZWN0LnggIT09IHByZXZSZWZSZWN0LnggfHwgbmV4dFJlZlJlY3QueSAhPT0gcHJldlJlZlJlY3QueSB8fCBuZXh0UmVmUmVjdC53aWR0aCAhPT0gcHJldlJlZlJlY3Qud2lkdGggfHwgbmV4dFJlZlJlY3QuaGVpZ2h0ICE9PSBwcmV2UmVmUmVjdC5oZWlnaHQpKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9XG4gICAgcHJldlJlZlJlY3QgPSBuZXh0UmVmUmVjdDtcbiAgICBmcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lTG9vcCk7XG4gIH1cbiAgdXBkYXRlKCk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgYW5jZXN0b3JzLmZvckVhY2goYW5jZXN0b3IgPT4ge1xuICAgICAgYW5jZXN0b3JTY3JvbGwgJiYgYW5jZXN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlKTtcbiAgICAgIGFuY2VzdG9yUmVzaXplICYmIGFuY2VzdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZSk7XG4gICAgfSk7XG4gICAgY2xlYW51cElvICYmIGNsZWFudXBJbygpO1xuICAgIHJlc2l6ZU9ic2VydmVyICYmIHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICByZXNpemVPYnNlcnZlciA9IG51bGw7XG4gICAgaWYgKGFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZUlkKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGB4YCBhbmQgYHlgIGNvb3JkaW5hdGVzIHRoYXQgd2lsbCBwbGFjZSB0aGUgZmxvYXRpbmcgZWxlbWVudFxuICogbmV4dCB0byBhIHJlZmVyZW5jZSBlbGVtZW50IHdoZW4gaXQgaXMgZ2l2ZW4gYSBjZXJ0YWluIENTUyBwb3NpdGlvbmluZ1xuICogc3RyYXRlZ3kuXG4gKi9cbmNvbnN0IGNvbXB1dGVQb3NpdGlvbiA9IChyZWZlcmVuY2UsIGZsb2F0aW5nLCBvcHRpb25zKSA9PiB7XG4gIC8vIFRoaXMgY2FjaGVzIHRoZSBleHBlbnNpdmUgYGdldENsaXBwaW5nRWxlbWVudEFuY2VzdG9yc2AgZnVuY3Rpb24gc28gdGhhdFxuICAvLyBtdWx0aXBsZSBsaWZlY3ljbGUgcmVzZXRzIHJlLXVzZSB0aGUgc2FtZSByZXN1bHQuIEl0IG9ubHkgbGl2ZXMgZm9yIGFcbiAgLy8gc2luZ2xlIGNhbGwuIElmIG90aGVyIGZ1bmN0aW9ucyBiZWNvbWUgZXhwZW5zaXZlLCB3ZSBjYW4gYWRkIHRoZW0gYXMgd2VsbC5cbiAgY29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IG1lcmdlZE9wdGlvbnMgPSB7XG4gICAgcGxhdGZvcm0sXG4gICAgLi4ub3B0aW9uc1xuICB9O1xuICBjb25zdCBwbGF0Zm9ybVdpdGhDYWNoZSA9IHtcbiAgICAuLi5tZXJnZWRPcHRpb25zLnBsYXRmb3JtLFxuICAgIF9jOiBjYWNoZVxuICB9O1xuICByZXR1cm4gY29tcHV0ZVBvc2l0aW9uJDEocmVmZXJlbmNlLCBmbG9hdGluZywge1xuICAgIC4uLm1lcmdlZE9wdGlvbnMsXG4gICAgcGxhdGZvcm06IHBsYXRmb3JtV2l0aENhY2hlXG4gIH0pO1xufTtcblxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlcyAqL1xuZnVuY3Rpb24gb2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gb2Zmc2V0UGFyZW50UG9seWZpbGwoZWxlbWVudCk7XG59XG5mdW5jdGlvbiBmbGF0VHJlZVBhcmVudChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmFzc2lnbmVkU2xvdDtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZS5ob3N0O1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlO1xufVxuZnVuY3Rpb24gb2Zmc2V0UGFyZW50UG9seWZpbGwoZWxlbWVudCkge1xuICAgIC8vIERvIGFuIGluaXRpYWwgd2FsayB0byBjaGVjayBmb3IgZGlzcGxheTpub25lIGFuY2VzdG9ycy5cbiAgICBmb3IgKGxldCBhbmNlc3RvciA9IGVsZW1lbnQ7IGFuY2VzdG9yOyBhbmNlc3RvciA9IGZsYXRUcmVlUGFyZW50KGFuY2VzdG9yKSkge1xuICAgICAgICBpZiAoIShhbmNlc3RvciBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShhbmNlc3RvcikuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBhbmNlc3RvciA9IGZsYXRUcmVlUGFyZW50KGVsZW1lbnQpOyBhbmNlc3RvcjsgYW5jZXN0b3IgPSBmbGF0VHJlZVBhcmVudChhbmNlc3RvcikpIHtcbiAgICAgICAgaWYgKCEoYW5jZXN0b3IgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGFuY2VzdG9yKTtcbiAgICAgICAgLy8gRGlzcGxheTpjb250ZW50cyBub2RlcyBhcmVuJ3QgaW4gdGhlIGxheW91dCB0cmVlIHNvIHRoZXkgc2hvdWxkIGJlIHNraXBwZWQuXG4gICAgICAgIGlmIChzdHlsZS5kaXNwbGF5ID09PSAnY29udGVudHMnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3R5bGUucG9zaXRpb24gIT09ICdzdGF0aWMnIHx8IHN0eWxlLmZpbHRlciAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICByZXR1cm4gYW5jZXN0b3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFuY2VzdG9yLnRhZ05hbWUgPT09ICdCT0RZJykge1xuICAgICAgICAgICAgcmV0dXJuIGFuY2VzdG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG4oZnVuY3Rpb24gc2V0VXBGbG9hdGluZ1VpRm9yU2hhZG93RG9tUG9zaXRpb25pbmcoKSB7XG4gIGlmIChCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICBjb25zdCBvcmlnaW5hbEdldE9mZnNldFBhcmVudCA9IHBsYXRmb3JtLmdldE9mZnNldFBhcmVudDtcbiAgICBwbGF0Zm9ybS5nZXRPZmZzZXRQYXJlbnQgPSAoZWxlbWVudCkgPT4gb3JpZ2luYWxHZXRPZmZzZXRQYXJlbnQoZWxlbWVudCwgb2Zmc2V0UGFyZW50KTtcbiAgfVxufSkoKTtcbi8qKlxuICogUG9zaXRpb25zIHRoZSBmbG9hdGluZyBlbGVtZW50IHJlbGF0aXZlIHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAqXG4gKiAqKk5vdGU6KiogZXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seVxuICpcbiAqIEBwYXJhbSByb290MFxuICogQHBhcmFtIHJvb3QwLnJlZmVyZW5jZUVsXG4gKiBAcGFyYW0gcm9vdDAuZmxvYXRpbmdFbFxuICogQHBhcmFtIHJvb3QwLm92ZXJsYXlQb3NpdGlvbmluZ1xuICogQHBhcmFtIHJvb3QwLnBsYWNlbWVudFxuICogQHBhcmFtIHJvb3QwLmZsaXBEaXNhYmxlZFxuICogQHBhcmFtIHJvb3QwLmZsaXBQbGFjZW1lbnRzXG4gKiBAcGFyYW0gcm9vdDAub2Zmc2V0RGlzdGFuY2VcbiAqIEBwYXJhbSByb290MC5vZmZzZXRTa2lkZGluZ1xuICogQHBhcmFtIHJvb3QwLmFycm93RWxcbiAqIEBwYXJhbSByb290MC50eXBlXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gcm9vdDAucmVmZXJlbmNlRWwucmVmZXJlbmNlRWxcbiAqIEBwYXJhbSByb290MC5yZWZlcmVuY2VFbC5mbG9hdGluZ0VsXG4gKiBAcGFyYW0gcm9vdDAucmVmZXJlbmNlRWwub3ZlcmxheVBvc2l0aW9uaW5nXG4gKiBAcGFyYW0gcm9vdDAucmVmZXJlbmNlRWwucGxhY2VtZW50XG4gKiBAcGFyYW0gcm9vdDAucmVmZXJlbmNlRWwuZmxpcERpc2FibGVkXG4gKiBAcGFyYW0gcm9vdDAucmVmZXJlbmNlRWwuZmxpcFBsYWNlbWVudHNcbiAqIEBwYXJhbSByb290MC5yZWZlcmVuY2VFbC5vZmZzZXREaXN0YW5jZVxuICogQHBhcmFtIHJvb3QwLnJlZmVyZW5jZUVsLm9mZnNldFNraWRkaW5nXG4gKiBAcGFyYW0gcm9vdDAucmVmZXJlbmNlRWwuYXJyb3dFbFxuICogQHBhcmFtIHJvb3QwLnJlZmVyZW5jZUVsLnR5cGVcbiAqIEBwYXJhbSBjb21wb25lbnQucmVmZXJlbmNlRWxcbiAqIEBwYXJhbSBjb21wb25lbnQuZmxvYXRpbmdFbFxuICogQHBhcmFtIGNvbXBvbmVudC5vdmVybGF5UG9zaXRpb25pbmdcbiAqIEBwYXJhbSBjb21wb25lbnQucGxhY2VtZW50XG4gKiBAcGFyYW0gY29tcG9uZW50LmZsaXBEaXNhYmxlZFxuICogQHBhcmFtIGNvbXBvbmVudC5mbGlwUGxhY2VtZW50c1xuICogQHBhcmFtIGNvbXBvbmVudC5vZmZzZXREaXN0YW5jZVxuICogQHBhcmFtIGNvbXBvbmVudC5vZmZzZXRTa2lkZGluZ1xuICogQHBhcmFtIGNvbXBvbmVudC5hcnJvd0VsXG4gKiBAcGFyYW0gY29tcG9uZW50LnR5cGVcbiAqL1xuY29uc3QgcG9zaXRpb25GbG9hdGluZ1VJID0gXG4vKiB3ZSBleHBvcnQgYXJyb3cgZnVuY3Rpb24gdG8gYWxsb3cgdXMgdG8gc3B5IG9uIGl0IGR1cmluZyB0ZXN0aW5nICovXG5hc3luYyAoY29tcG9uZW50LCB7IHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsLCBvdmVybGF5UG9zaXRpb25pbmcgPSBcImFic29sdXRlXCIsIHBsYWNlbWVudCwgZmxpcERpc2FibGVkLCBmbGlwUGxhY2VtZW50cywgb2Zmc2V0RGlzdGFuY2UsIG9mZnNldFNraWRkaW5nLCBhcnJvd0VsLCB0eXBlLCB9KSA9PiB7XG4gIGlmICghcmVmZXJlbmNlRWwgfHwgIWZsb2F0aW5nRWwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB7IHgsIHksIHBsYWNlbWVudDogZWZmZWN0aXZlUGxhY2VtZW50LCBzdHJhdGVneTogcG9zaXRpb24sIG1pZGRsZXdhcmVEYXRhLCB9ID0gYXdhaXQgY29tcHV0ZVBvc2l0aW9uKHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsLCB7XG4gICAgc3RyYXRlZ3k6IG92ZXJsYXlQb3NpdGlvbmluZyxcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCA9PT0gXCJhdXRvXCIgfHwgcGxhY2VtZW50ID09PSBcImF1dG8tc3RhcnRcIiB8fCBwbGFjZW1lbnQgPT09IFwiYXV0by1lbmRcIlxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogZ2V0RWZmZWN0aXZlUGxhY2VtZW50KGZsb2F0aW5nRWwsIHBsYWNlbWVudCksXG4gICAgbWlkZGxld2FyZTogZ2V0TWlkZGxld2FyZSh7XG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBmbGlwRGlzYWJsZWQsXG4gICAgICBmbGlwUGxhY2VtZW50cyxcbiAgICAgIG9mZnNldERpc3RhbmNlLFxuICAgICAgb2Zmc2V0U2tpZGRpbmcsXG4gICAgICBhcnJvd0VsLFxuICAgICAgdHlwZSxcbiAgICB9KSxcbiAgfSk7XG4gIGlmIChhcnJvd0VsICYmIG1pZGRsZXdhcmVEYXRhLmFycm93KSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBtaWRkbGV3YXJlRGF0YS5hcnJvdztcbiAgICBjb25zdCBzaWRlID0gZWZmZWN0aXZlUGxhY2VtZW50LnNwbGl0KFwiLVwiKVswXTtcbiAgICBjb25zdCBhbGlnbm1lbnQgPSB4ICE9IG51bGwgPyBcImxlZnRcIiA6IFwidG9wXCI7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gQVJST1dfQ1NTX1RSQU5TRk9STVtzaWRlXTtcbiAgICBjb25zdCByZXNldCA9IHsgbGVmdDogXCJcIiwgdG9wOiBcIlwiLCBib3R0b206IFwiXCIsIHJpZ2h0OiBcIlwiIH07XG4gICAgaWYgKFwiZmxvYXRpbmdMYXlvdXRcIiBpbiBjb21wb25lbnQpIHtcbiAgICAgIGNvbXBvbmVudC5mbG9hdGluZ0xheW91dCA9IHNpZGUgPT09IFwibGVmdFwiIHx8IHNpZGUgPT09IFwicmlnaHRcIiA/IFwiaG9yaXpvbnRhbFwiIDogXCJ2ZXJ0aWNhbFwiO1xuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKGFycm93RWwuc3R5bGUsIHtcbiAgICAgIC4uLnJlc2V0LFxuICAgICAgW2FsaWdubWVudF06IGAke2FsaWdubWVudCA9PSBcImxlZnRcIiA/IHggOiB5fXB4YCxcbiAgICAgIFtzaWRlXTogXCIxMDAlXCIsXG4gICAgICB0cmFuc2Zvcm0sXG4gICAgfSk7XG4gIH1cbiAgY29uc3QgcmVmZXJlbmNlSGlkZGVuID0gbWlkZGxld2FyZURhdGEuaGlkZT8ucmVmZXJlbmNlSGlkZGVuO1xuICBjb25zdCB2aXNpYmlsaXR5ID0gcmVmZXJlbmNlSGlkZGVuID8gXCJoaWRkZW5cIiA6IG51bGw7XG4gIGNvbnN0IHBvaW50ZXJFdmVudHMgPSB2aXNpYmlsaXR5ID8gXCJub25lXCIgOiBudWxsO1xuICBmbG9hdGluZ0VsLnNldEF0dHJpYnV0ZShwbGFjZW1lbnREYXRhQXR0cmlidXRlLCBlZmZlY3RpdmVQbGFjZW1lbnQpO1xuICBjb25zdCB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7TWF0aC5yb3VuZCh4KX1weCwke01hdGgucm91bmQoeSl9cHgpYDtcbiAgT2JqZWN0LmFzc2lnbihmbG9hdGluZ0VsLnN0eWxlLCB7XG4gICAgdmlzaWJpbGl0eSxcbiAgICBwb2ludGVyRXZlbnRzLFxuICAgIHBvc2l0aW9uLFxuICAgIHRvcDogXCIwXCIsXG4gICAgbGVmdDogXCIwXCIsXG4gICAgdHJhbnNmb3JtLFxuICB9KTtcbn07XG4vKipcbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHlcbiAqL1xuY29uc3QgcGxhY2VtZW50RGF0YUF0dHJpYnV0ZSA9IFwiZGF0YS1wbGFjZW1lbnRcIjtcbi8qKlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seVxuICovXG5jb25zdCByZXBvc2l0aW9uRGVib3VuY2VUaW1lb3V0ID0gMTAwO1xuY29uc3QgZWZmZWN0aXZlUGxhY2VtZW50cyA9IFtcbiAgXCJ0b3BcIixcbiAgXCJib3R0b21cIixcbiAgXCJyaWdodFwiLFxuICBcImxlZnRcIixcbiAgXCJ0b3Atc3RhcnRcIixcbiAgXCJ0b3AtZW5kXCIsXG4gIFwiYm90dG9tLXN0YXJ0XCIsXG4gIFwiYm90dG9tLWVuZFwiLFxuICBcInJpZ2h0LXN0YXJ0XCIsXG4gIFwicmlnaHQtZW5kXCIsXG4gIFwibGVmdC1zdGFydFwiLFxuICBcImxlZnQtZW5kXCIsXG5dO1xuY29uc3QgZGVmYXVsdE1lbnVQbGFjZW1lbnQgPSBcImJvdHRvbS1zdGFydFwiO1xuY29uc3QgRmxvYXRpbmdDU1MgPSB7XG4gIGFuaW1hdGlvbjogXCJjYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW1cIixcbiAgYW5pbWF0aW9uQWN0aXZlOiBcImNhbGNpdGUtZmxvYXRpbmctdWktYW5pbS0tYWN0aXZlXCIsXG59O1xuZnVuY3Rpb24gZ2V0TWlkZGxld2FyZSh7IHBsYWNlbWVudCwgZmxpcERpc2FibGVkLCBmbGlwUGxhY2VtZW50cywgb2Zmc2V0RGlzdGFuY2UsIG9mZnNldFNraWRkaW5nLCBhcnJvd0VsLCB0eXBlLCB9KSB7XG4gIGNvbnN0IGRlZmF1bHRNaWRkbGV3YXJlID0gW3NoaWZ0KCksIGhpZGUoKV07XG4gIGlmICh0eXBlID09PSBcIm1lbnVcIikge1xuICAgIHJldHVybiBbXG4gICAgICAuLi5kZWZhdWx0TWlkZGxld2FyZSxcbiAgICAgIGZsaXAoe1xuICAgICAgICBmYWxsYmFja1BsYWNlbWVudHM6IGZsaXBQbGFjZW1lbnRzIHx8IFtcInRvcC1zdGFydFwiLCBcInRvcFwiLCBcInRvcC1lbmRcIiwgXCJib3R0b20tc3RhcnRcIiwgXCJib3R0b21cIiwgXCJib3R0b20tZW5kXCJdLFxuICAgICAgfSksXG4gICAgXTtcbiAgfVxuICBpZiAodHlwZSA9PT0gXCJwb3BvdmVyXCIgfHwgdHlwZSA9PT0gXCJ0b29sdGlwXCIpIHtcbiAgICBjb25zdCBtaWRkbGV3YXJlID0gW1xuICAgICAgLi4uZGVmYXVsdE1pZGRsZXdhcmUsXG4gICAgICBvZmZzZXQoe1xuICAgICAgICBtYWluQXhpczogdHlwZW9mIG9mZnNldERpc3RhbmNlID09PSBcIm51bWJlclwiID8gb2Zmc2V0RGlzdGFuY2UgOiAwLFxuICAgICAgICBjcm9zc0F4aXM6IHR5cGVvZiBvZmZzZXRTa2lkZGluZyA9PT0gXCJudW1iZXJcIiA/IG9mZnNldFNraWRkaW5nIDogMCxcbiAgICAgIH0pLFxuICAgIF07XG4gICAgaWYgKHBsYWNlbWVudCA9PT0gXCJhdXRvXCIgfHwgcGxhY2VtZW50ID09PSBcImF1dG8tc3RhcnRcIiB8fCBwbGFjZW1lbnQgPT09IFwiYXV0by1lbmRcIikge1xuICAgICAgbWlkZGxld2FyZS5wdXNoKGF1dG9QbGFjZW1lbnQoeyBhbGlnbm1lbnQ6IHBsYWNlbWVudCA9PT0gXCJhdXRvLXN0YXJ0XCIgPyBcInN0YXJ0XCIgOiBwbGFjZW1lbnQgPT09IFwiYXV0by1lbmRcIiA/IFwiZW5kXCIgOiBudWxsIH0pKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWZsaXBEaXNhYmxlZCkge1xuICAgICAgbWlkZGxld2FyZS5wdXNoKGZsaXAoZmxpcFBsYWNlbWVudHMgPyB7IGZhbGxiYWNrUGxhY2VtZW50czogZmxpcFBsYWNlbWVudHMgfSA6IHt9KSk7XG4gICAgfVxuICAgIGlmIChhcnJvd0VsKSB7XG4gICAgICBtaWRkbGV3YXJlLnB1c2goYXJyb3coe1xuICAgICAgICBlbGVtZW50OiBhcnJvd0VsLFxuICAgICAgfSkpO1xuICAgIH1cbiAgICByZXR1cm4gbWlkZGxld2FyZTtcbiAgfVxuICByZXR1cm4gW107XG59XG5mdW5jdGlvbiBmaWx0ZXJDb21wdXRlZFBsYWNlbWVudHMocGxhY2VtZW50cywgZWwpIHtcbiAgY29uc3QgZmlsdGVyZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5maWx0ZXIoKHBsYWNlbWVudCkgPT4gZWZmZWN0aXZlUGxhY2VtZW50cy5pbmNsdWRlcyhwbGFjZW1lbnQpKTtcbiAgaWYgKGZpbHRlcmVkUGxhY2VtZW50cy5sZW5ndGggIT09IHBsYWNlbWVudHMubGVuZ3RoKSB7XG4gICAgY29uc29sZS53YXJuKGAke2VsLnRhZ05hbWV9OiBJbnZhbGlkIHZhbHVlIGZvdW5kIGluOiBmbGlwUGxhY2VtZW50cy4gVHJ5IGFueSBvZiB0aGVzZTogJHtlZmZlY3RpdmVQbGFjZW1lbnRzXG4gICAgICAubWFwKChwbGFjZW1lbnQpID0+IGBcIiR7cGxhY2VtZW50fVwiYClcbiAgICAgIC5qb2luKFwiLCBcIilcbiAgICAgIC50cmltKCl9YCwgeyBlbCB9KTtcbiAgfVxuICByZXR1cm4gZmlsdGVyZWRQbGFjZW1lbnRzO1xufVxuZnVuY3Rpb24gZ2V0RWZmZWN0aXZlUGxhY2VtZW50KGZsb2F0aW5nRWwsIHBsYWNlbWVudCkge1xuICBjb25zdCBwbGFjZW1lbnRzID0gW1wibGVmdFwiLCBcInJpZ2h0XCJdO1xuICBpZiAoZ2V0RWxlbWVudERpcihmbG9hdGluZ0VsKSA9PT0gXCJydGxcIikge1xuICAgIHBsYWNlbWVudHMucmV2ZXJzZSgpO1xuICB9XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVhZGluZy9naSwgcGxhY2VtZW50c1swXSkucmVwbGFjZSgvdHJhaWxpbmcvZ2ksIHBsYWNlbWVudHNbMV0pO1xufVxuLyoqXG4gKiBDb252ZW5pZW5jZSBmdW5jdGlvbiB0byBtYW5hZ2UgYHJlcG9zaXRpb25gIGNhbGxzIGZvciBGbG9hdGluZ1VJQ29tcG9uZW50cyB0aGF0IHVzZSBgcG9zaXRpb25GbG9hdGluZ1VJLlxuICpcbiAqIE5vdGU6IHRoaXMgaXMgbm90IG5lZWRlZCBmb3IgY29tcG9uZW50cyB0aGF0IHVzZSBgY2FsY2l0ZS1wb3BvdmVyYC5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50IC0gQSBmbG9hdGluZy11aSBjb21wb25lbnQuXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFJlcG9zaXRpb24gcGFyYW1ldGVycy5cbiAqIEBwYXJhbSBvcHRpb25zLnJlZmVyZW5jZUVsIC0gVGhlIGByZWZlcmVuY2VFbGVtZW50YCB1c2VkIHRvIHBvc2l0aW9uIHRoZSBjb21wb25lbnQgYWNjb3JkaW5nIHRvIGl0cyBgcGxhY2VtZW50YCB2YWx1ZS5cbiAqIEBwYXJhbSBvcHRpb25zLmZsb2F0aW5nRWwgLSBUaGUgYGZsb2F0aW5nRWxlbWVudGAgY29udGFpbmluZyB0aGUgZmxvYXRpbmcgdWkuXG4gKiBAcGFyYW0gb3B0aW9ucy5vdmVybGF5UG9zaXRpb25pbmcgLSB0eXBlIG9mIHBvc2l0aW9uaW5nIHRvIHVzZSBmb3IgdGhlIG92ZXJsYWlkIGNvbnRlbnQuXG4gKiBAcGFyYW0gb3B0aW9ucy5wbGFjZW1lbnQgLSBEZXRlcm1pbmVzIHdoZXJlIHRoZSBjb21wb25lbnQgd2lsbCBiZSBwb3NpdGlvbmVkIHJlbGF0aXZlIHRvIHRoZSBgcmVmZXJlbmNlRWxlbWVudGAuXG4gKiBAcGFyYW0gb3B0aW9ucy5mbGlwRGlzYWJsZWQgLSBQcmV2ZW50cyBmbGlwcGluZyB0aGUgY29tcG9uZW50J3MgcGxhY2VtZW50IHdoZW4gb3ZlcmxhcHBpbmcgaXRzIGByZWZlcmVuY2VFbGVtZW50YC5cbiAqIEBwYXJhbSBvcHRpb25zLmZsaXBQbGFjZW1lbnRzIC0gRGVmaW5lcyB0aGUgYXZhaWxhYmxlIHBsYWNlbWVudHMgdGhhdCBjYW4gYmUgdXNlZCB3aGVuIGEgZmxpcCBvY2N1cnMuXG4gKiBAcGFyYW0gb3B0aW9ucy5vZmZzZXREaXN0YW5jZSAtIE9mZnNldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BvdmVyIGF3YXkgZnJvbSB0aGUgYHJlZmVyZW5jZUVsZW1lbnRgLlxuICogQHBhcmFtIG9wdGlvbnMub2Zmc2V0U2tpZGRpbmcgLSBPZmZzZXRzIHRoZSBwb3NpdGlvbiBvZiB0aGUgY29tcG9uZW50IGFsb25nIHRoZSBgcmVmZXJlbmNlRWxlbWVudGAuXG4gKiBAcGFyYW0gb3B0aW9ucy5hcnJvd0VsIC0gQSBjdXN0b21pemFibGUgYXJyb3cgZWxlbWVudC5cbiAqIEBwYXJhbSBvcHRpb25zLnR5cGUgLSBUaGUgdHlwZSBvZiBmbG9hdGluZyBVSS5cbiAqIEBwYXJhbSBkZWxheWVkIC0gUmVwb3NpdGlvbiB0aGUgY29tcG9uZW50IGFmdGVyIGEgZGVsYXkuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcmVwb3NpdGlvbihjb21wb25lbnQsIG9wdGlvbnMsIGRlbGF5ZWQgPSBmYWxzZSkge1xuICBjb25zdCBwb3NpdGlvbkZ1bmN0aW9uID0gZGVsYXllZCA/IGdldERlYm91bmNlZFJlcG9zaXRpb24oY29tcG9uZW50KSA6IHBvc2l0aW9uRmxvYXRpbmdVSTtcbiAgcmV0dXJuIHBvc2l0aW9uRnVuY3Rpb24oY29tcG9uZW50LCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGdldERlYm91bmNlZFJlcG9zaXRpb24oY29tcG9uZW50KSB7XG4gIGxldCBkZWJvdW5jZWQgPSBjb21wb25lbnRUb0RlYm91bmNlZFJlcG9zaXRpb25NYXAuZ2V0KGNvbXBvbmVudCk7XG4gIGlmIChkZWJvdW5jZWQpIHtcbiAgICByZXR1cm4gZGVib3VuY2VkO1xuICB9XG4gIGRlYm91bmNlZCA9IGRlYm91bmNlKHBvc2l0aW9uRmxvYXRpbmdVSSwgcmVwb3NpdGlvbkRlYm91bmNlVGltZW91dCwge1xuICAgIGxlYWRpbmc6IHRydWUsXG4gICAgbWF4V2FpdDogcmVwb3NpdGlvbkRlYm91bmNlVGltZW91dCxcbiAgfSk7XG4gIGNvbXBvbmVudFRvRGVib3VuY2VkUmVwb3NpdGlvbk1hcC5zZXQoY29tcG9uZW50LCBkZWJvdW5jZWQpO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuY29uc3QgQVJST1dfQ1NTX1RSQU5TRk9STSA9IHtcbiAgdG9wOiBcIlwiLFxuICBsZWZ0OiBcInJvdGF0ZSgtOTBkZWcpXCIsXG4gIGJvdHRvbTogXCJyb3RhdGUoMTgwZGVnKVwiLFxuICByaWdodDogXCJyb3RhdGUoOTBkZWcpXCIsXG59O1xuLyoqXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5XG4gKlxuICogQGludGVybmFsXG4gKi9cbmNvbnN0IGNsZWFudXBNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgY29tcG9uZW50VG9EZWJvdW5jZWRSZXBvc2l0aW9uTWFwID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogSGVscGVyIHRvIHNldCB1cCBmbG9hdGluZyBlbGVtZW50IGludGVyYWN0aW9ucyBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50IC0gQSBmbG9hdGluZy11aSBjb21wb25lbnQuXG4gKiBAcGFyYW0gcmVmZXJlbmNlRWwgLSBUaGUgYHJlZmVyZW5jZUVsZW1lbnRgIHVzZWQgdG8gcG9zaXRpb24gdGhlIGNvbXBvbmVudCBhY2NvcmRpbmcgdG8gaXRzIGBwbGFjZW1lbnRgIHZhbHVlLlxuICogQHBhcmFtIGZsb2F0aW5nRWwgLSBUaGUgYGZsb2F0aW5nRWxlbWVudGAgY29udGFpbmluZyB0aGUgZmxvYXRpbmcgdWkuXG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RGbG9hdGluZ1VJKGNvbXBvbmVudCwgcmVmZXJlbmNlRWwsIGZsb2F0aW5nRWwpIHtcbiAgaWYgKCFmbG9hdGluZ0VsIHx8ICFyZWZlcmVuY2VFbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBkaXNjb25uZWN0RmxvYXRpbmdVSShjb21wb25lbnQsIHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsKTtcbiAgT2JqZWN0LmFzc2lnbihmbG9hdGluZ0VsLnN0eWxlLCB7XG4gICAgdmlzaWJpbGl0eTogXCJoaWRkZW5cIixcbiAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICAvLyBpbml0aWFsIHBvc2l0aW9uaW5nIGJhc2VkIG9uIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvY29tcHV0ZVBvc2l0aW9uI2luaXRpYWwtbGF5b3V0XG4gICAgcG9zaXRpb246IGNvbXBvbmVudC5vdmVybGF5UG9zaXRpb25pbmcsXG4gICAgdG9wOiBcIjBcIixcbiAgICBsZWZ0OiBcIjBcIixcbiAgfSk7XG4gIGNvbnN0IHJ1bkF1dG9VcGRhdGUgPSBCdWlsZC5pc0Jyb3dzZXJcbiAgICA/IGF1dG9VcGRhdGVcbiAgICA6IChfcmVmRWwsIF9mbG9hdGluZ0VsLCB1cGRhdGVDYWxsYmFjaykgPT4ge1xuICAgICAgdXBkYXRlQ2FsbGJhY2soKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIC8qIG5vb3AgKi9cbiAgICAgIH07XG4gICAgfTtcbiAgY2xlYW51cE1hcC5zZXQoY29tcG9uZW50LCBydW5BdXRvVXBkYXRlKHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsLCAoKSA9PiBjb21wb25lbnQucmVwb3NpdGlvbigpKSk7XG59XG4vKipcbiAqIEhlbHBlciB0byB0ZWFyIGRvd24gZmxvYXRpbmcgZWxlbWVudCBpbnRlcmFjdGlvbnMgb24gZGlzY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudCAtIEEgZmxvYXRpbmctdWkgY29tcG9uZW50LlxuICogQHBhcmFtIHJlZmVyZW5jZUVsIC0gVGhlIGByZWZlcmVuY2VFbGVtZW50YCB1c2VkIHRvIHBvc2l0aW9uIHRoZSBjb21wb25lbnQgYWNjb3JkaW5nIHRvIGl0cyBgcGxhY2VtZW50YCB2YWx1ZS5cbiAqIEBwYXJhbSBmbG9hdGluZ0VsIC0gVGhlIGBmbG9hdGluZ0VsZW1lbnRgIGNvbnRhaW5pbmcgdGhlIGZsb2F0aW5nIHVpLlxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0RmxvYXRpbmdVSShjb21wb25lbnQsIHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsKSB7XG4gIGlmICghZmxvYXRpbmdFbCB8fCAhcmVmZXJlbmNlRWwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY2xlYW51cE1hcC5nZXQoY29tcG9uZW50KT8uKCk7XG4gIGNsZWFudXBNYXAuZGVsZXRlKGNvbXBvbmVudCk7XG4gIGNvbXBvbmVudFRvRGVib3VuY2VkUmVwb3NpdGlvbk1hcC5nZXQoY29tcG9uZW50KT8uY2FuY2VsKCk7XG4gIGNvbXBvbmVudFRvRGVib3VuY2VkUmVwb3NpdGlvbk1hcC5kZWxldGUoY29tcG9uZW50KTtcbn1cbmNvbnN0IHZpc2libGVQb2ludGVyU2l6ZSA9IDQ7XG4vKipcbiAqIERlZmF1bHQgb2Zmc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBhd2F5IGZyb20gdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICpcbiAqIEBkZWZhdWx0IDZcbiAqL1xuY29uc3QgZGVmYXVsdE9mZnNldERpc3RhbmNlID0gTWF0aC5jZWlsKE1hdGguaHlwb3QodmlzaWJsZVBvaW50ZXJTaXplLCB2aXNpYmxlUG9pbnRlclNpemUpKTtcblxuZXhwb3J0IHsgRmxvYXRpbmdDU1MgYXMgRiwgZGlzY29ubmVjdEZsb2F0aW5nVUkgYXMgYSwgZGVmYXVsdE9mZnNldERpc3RhbmNlIGFzIGIsIGNvbm5lY3RGbG9hdGluZ1VJIGFzIGMsIGRlZmF1bHRNZW51UGxhY2VtZW50IGFzIGQsIGZpbHRlckNvbXB1dGVkUGxhY2VtZW50cyBhcyBmLCByZXBvc2l0aW9uIGFzIHIgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHJlYWRUYXNrIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG5mdW5jdGlvbiBpc09wZW4oY29tcG9uZW50KSB7XG4gIHJldHVybiBcIm9wZW5lZFwiIGluIGNvbXBvbmVudCA/IGNvbXBvbmVudC5vcGVuZWQgOiBjb21wb25lbnQub3Blbjtcbn1cbmZ1bmN0aW9uIGVtaXRJbW1lZGlhdGVseShjb21wb25lbnQsIG5vbk9wZW5DbG9zZUNvbXBvbmVudCA9IGZhbHNlKSB7XG4gIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGlzT3Blbihjb21wb25lbnQpKVxuICAgID8gY29tcG9uZW50Lm9uQmVmb3JlT3BlbigpXG4gICAgOiBjb21wb25lbnQub25CZWZvcmVDbG9zZSgpO1xuICAobm9uT3BlbkNsb3NlQ29tcG9uZW50ID8gY29tcG9uZW50W2NvbXBvbmVudC50cmFuc2l0aW9uUHJvcF0gOiBpc09wZW4oY29tcG9uZW50KSlcbiAgICA/IGNvbXBvbmVudC5vbk9wZW4oKVxuICAgIDogY29tcG9uZW50Lm9uQ2xvc2UoKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIGRldGVybWluZSBnbG9iYWxseSBzZXQgdHJhbnNpdGlvbiBkdXJhdGlvbiBvbiB0aGUgZ2l2ZW4gb3BlblRyYW5zaXRpb25Qcm9wLCB3aGljaCBpcyBpbXBvcnRlZCBhbmQgc2V0IGluIHRoZSBAV2F0Y2goXCJvcGVuXCIpLlxuICogVXNlZCB0byBlbWl0IChiZWZvcmUpb3Blbi9jbG9zZSBldmVudHMgYm90aCBmb3Igd2hlbiB0aGUgb3BhY2l0eSB0cmFuc2l0aW9uIGlzIHByZXNlbnQgYW5kIHdoZW4gdGhlcmUgaXMgbm9uZSAodHJhbnNpdGlvbi1kdXJhdGlvbiBpcyBzZXQgdG8gMCkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50LCBPcGVuQ2xvc2VDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvb3BlbkNsb3NlQ29tcG9uZW50XCI7XG4gKlxuICogYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gKiAvLyBXaGVuIGNvbXBvbmVudCBpbml0aWFsbHkgcmVuZGVycywgaWYgYG9wZW5gIHdhcyBzZXQgd2UgbmVlZCB0byB0cmlnZ2VyIG9uIGxvYWQgYXMgd2F0Y2hlciBkb2Vzbid0IGZpcmUuXG4gKiBpZiAodGhpcy5vcGVuKSB7XG4gKiAgICBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqIEBXYXRjaChcIm9wZW5cIilcbiAqIGFzeW5jIHRvZ2dsZU1vZGFsKHZhbHVlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgICBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50IC0gT3BlbkNsb3NlQ29tcG9uZW50IHVzZXMgYG9wZW5gIHByb3AgdG8gZW1pdCAoYmVmb3JlKW9wZW4vY2xvc2UuXG4gKiBAcGFyYW0gbm9uT3BlbkNsb3NlQ29tcG9uZW50IC0gT3BlbkNsb3NlQ29tcG9uZW50IHVzZXMgYGV4cGFuZGVkYCBwcm9wIHRvIGVtaXQgKGJlZm9yZSlvcGVuL2Nsb3NlLlxuICovXG5mdW5jdGlvbiBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudChjb21wb25lbnQsIG5vbk9wZW5DbG9zZUNvbXBvbmVudCA9IGZhbHNlKSB7XG4gIHJlYWRUYXNrKCgpID0+IHtcbiAgICBpZiAoY29tcG9uZW50LnRyYW5zaXRpb25FbCkge1xuICAgICAgY29uc3QgeyB0cmFuc2l0aW9uRHVyYXRpb246IGFsbER1cmF0aW9ucywgdHJhbnNpdGlvblByb3BlcnR5OiBhbGxQcm9wcyB9ID0gZ2V0Q29tcHV0ZWRTdHlsZShjb21wb25lbnQudHJhbnNpdGlvbkVsKTtcbiAgICAgIGNvbnN0IGFsbFRyYW5zaXRpb25EdXJhdGlvbnNBcnJheSA9IGFsbER1cmF0aW9ucy5zcGxpdChcIixcIik7XG4gICAgICBjb25zdCBhbGxUcmFuc2l0aW9uUHJvcHNBcnJheSA9IGFsbFByb3BzLnNwbGl0KFwiLFwiKTtcbiAgICAgIGNvbnN0IG9wZW5UcmFuc2l0aW9uUHJvcEluZGV4ID0gYWxsVHJhbnNpdGlvblByb3BzQXJyYXkuaW5kZXhPZihjb21wb25lbnQub3BlblRyYW5zaXRpb25Qcm9wKTtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IGFsbFRyYW5zaXRpb25EdXJhdGlvbnNBcnJheVtvcGVuVHJhbnNpdGlvblByb3BJbmRleF0gPz9cbiAgICAgICAgLyogU2FmYXJpIHdpbGwgaGF2ZSBhIHNpbmdsZSB0cmFuc2l0aW9uIHZhbHVlIGlmIG11bHRpcGxlIHByb3BzIHNoYXJlIGl0LFxuICAgICAgICBzbyB3ZSBmYWxsIGJhY2sgdG8gaXQgaWYgdGhlcmUncyBubyBtYXRjaGluZyBwcm9wIGR1cmF0aW9uICovXG4gICAgICAgIGFsbFRyYW5zaXRpb25EdXJhdGlvbnNBcnJheVswXTtcbiAgICAgIGlmICh0cmFuc2l0aW9uRHVyYXRpb24gPT09IFwiMHNcIikge1xuICAgICAgICBlbWl0SW1tZWRpYXRlbHkoY29tcG9uZW50LCBub25PcGVuQ2xvc2VDb21wb25lbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBmYWxsYmFja1RpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uc3RhcnRcIiwgb25TdGFydCk7XG4gICAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgb25FbmRPckNhbmNlbCk7XG4gICAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25jYW5jZWxcIiwgb25FbmRPckNhbmNlbCk7XG4gICAgICAgIGVtaXRJbW1lZGlhdGVseShjb21wb25lbnQsIG5vbk9wZW5DbG9zZUNvbXBvbmVudCk7XG4gICAgICB9LCBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKiAxMDAwKTtcbiAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25zdGFydFwiLCBvblN0YXJ0KTtcbiAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgb25FbmRPckNhbmNlbCk7XG4gICAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uY2FuY2VsXCIsIG9uRW5kT3JDYW5jZWwpO1xuICAgICAgZnVuY3Rpb24gb25TdGFydChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQucHJvcGVydHlOYW1lID09PSBjb21wb25lbnQub3BlblRyYW5zaXRpb25Qcm9wICYmIGV2ZW50LnRhcmdldCA9PT0gY29tcG9uZW50LnRyYW5zaXRpb25FbCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChmYWxsYmFja1RpbWVvdXRJZCk7XG4gICAgICAgICAgY29tcG9uZW50LnRyYW5zaXRpb25FbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbnN0YXJ0XCIsIG9uU3RhcnQpO1xuICAgICAgICAgIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGlzT3Blbihjb21wb25lbnQpKVxuICAgICAgICAgICAgPyBjb21wb25lbnQub25CZWZvcmVPcGVuKClcbiAgICAgICAgICAgIDogY29tcG9uZW50Lm9uQmVmb3JlQ2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gb25FbmRPckNhbmNlbChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQucHJvcGVydHlOYW1lID09PSBjb21wb25lbnQub3BlblRyYW5zaXRpb25Qcm9wICYmIGV2ZW50LnRhcmdldCA9PT0gY29tcG9uZW50LnRyYW5zaXRpb25FbCkge1xuICAgICAgICAgIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGlzT3Blbihjb21wb25lbnQpKVxuICAgICAgICAgICAgPyBjb21wb25lbnQub25PcGVuKClcbiAgICAgICAgICAgIDogY29tcG9uZW50Lm9uQ2xvc2UoKTtcbiAgICAgICAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIG9uRW5kT3JDYW5jZWwpO1xuICAgICAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25jYW5jZWxcIiwgb25FbmRPckNhbmNlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudCBhcyBvIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=