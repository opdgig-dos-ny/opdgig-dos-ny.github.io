"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_color-picker-hex-input_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/color-picker-hex-input.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/color-picker-hex-input.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CSS$1),
/* harmony export */   D: () => (/* binding */ DEFAULT_COLOR$1),
/* harmony export */   H: () => (/* binding */ HSV_LIMITS),
/* harmony export */   O: () => (/* binding */ OPACITY_LIMITS),
/* harmony export */   R: () => (/* binding */ RGB_LIMITS),
/* harmony export */   S: () => (/* binding */ SCOPE_SIZE),
/* harmony export */   a: () => (/* binding */ DIMENSIONS),
/* harmony export */   b: () => (/* binding */ HUE_LIMIT_CONSTRAINED),
/* harmony export */   c: () => (/* binding */ DEFAULT_STORAGE_KEY_PREFIX),
/* harmony export */   d: () => (/* binding */ defineCustomElement),
/* harmony export */   e: () => (/* binding */ ColorPickerHexInput)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@esri/calcite-components/dist/components/utils.js");
/* harmony import */ var _index2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index2.js */ "./node_modules/@esri/calcite-components/dist/components/index2.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _input_number_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-number.js */ "./node_modules/@esri/calcite-components/dist/components/input-number.js");
/* harmony import */ var _input_text_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-text.js */ "./node_modules/@esri/calcite-components/dist/components/input-text.js");
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./progress.js */ "./node_modules/@esri/calcite-components/dist/components/progress.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */










const CSS$1 = {
  channel: "channel",
  channels: "channels",
  colorField: "color-field",
  colorFieldScope: "scope--color-field",
  colorMode: "color-mode",
  colorModeContainer: "color-mode-container",
  container: "container",
  control: "control",
  controlAndScope: "control-and-scope",
  controlSection: "control-section",
  deleteColor: "delete-color",
  header: "header",
  hexAndChannelsGroup: "hex-and-channels-group",
  hexOptions: "color-hex-options",
  hueScope: "scope--hue",
  hueSlider: "hue-slider",
  opacityScope: "scope--opacity",
  opacitySlider: "opacity-slider",
  preview: "preview",
  previewAndSliders: "preview-and-sliders",
  saveColor: "save-color",
  savedColor: "saved-color",
  savedColors: "saved-colors",
  savedColorsButtons: "saved-colors-buttons",
  savedColorsSection: "saved-colors-section",
  scope: "scope",
  section: "section",
  slider: "slider",
  sliders: "sliders",
  splitSection: "section--split",
};
const DEFAULT_COLOR$1 = (0,_index2_js__WEBPACK_IMPORTED_MODULE_1__.c)("#007AC2");
const DEFAULT_STORAGE_KEY_PREFIX = "calcite-color-";
const RGB_LIMITS = {
  r: 255,
  g: 255,
  b: 255,
};
const HSV_LIMITS = {
  h: 360,
  s: 100,
  v: 100,
};
// 0 and 360 represent the same value, so we limit the hue to 359
const HUE_LIMIT_CONSTRAINED = HSV_LIMITS.h - 1;
const OPACITY_LIMITS = {
  min: 0,
  max: 100,
};
const DIMENSIONS = {
  s: {
    slider: {
      height: 12,
      width: 104,
    },
    colorField: {
      height: 80,
      width: 160,
    },
    thumb: {
      radius: 10,
    },
  },
  m: {
    slider: {
      height: 12,
      width: 204,
    },
    colorField: {
      height: 150,
      width: 272,
    },
    thumb: {
      radius: 10,
    },
  },
  l: {
    slider: {
      height: 12,
      width: 384,
    },
    colorField: {
      height: 200,
      width: 464,
    },
    thumb: {
      radius: 10,
    },
  },
};
const SCOPE_SIZE = 1;

const CSS = {
  container: "container",
  hexInput: "hex-input",
  opacityInput: "opacity-input",
};

const colorPickerHexInputCss = ":host{display:block}.container{display:flex;inline-size:100%;flex-wrap:nowrap;align-items:center}.hex-input{flex-grow:1;text-transform:uppercase}.opacity-input{inline-size:68px;margin-inline-start:-1px}:host([scale=s]) .container{flex-wrap:wrap;row-gap:0.125rem}:host([scale=s]) .opacity-input{inline-size:unset;margin-inline-start:unset}:host([scale=l]) .opacity-input{inline-size:88px}:host([hidden]){display:none}[hidden]{display:none}";

const DEFAULT_COLOR = (0,_index2_js__WEBPACK_IMPORTED_MODULE_1__.c)();
const ColorPickerHexInput = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteColorPickerHexInputChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.createEvent)(this, "calciteColorPickerHexInputChange", 6);
    this.onHexInputBlur = () => {
      const node = this.hexInputNode;
      const inputValue = node.value;
      const hex = `#${inputValue}`;
      const { allowEmpty, internalColor } = this;
      const willClearValue = allowEmpty && !inputValue;
      const isLonghand = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.j)(hex);
      // ensure modified pasted hex values are committed since we prevent default to remove the # char.
      this.onHexInputChange();
      if (willClearValue || ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.i)(hex) && isLonghand)) {
        return;
      }
      // manipulating DOM directly since rerender doesn't update input value
      node.value =
        allowEmpty && !internalColor
          ? ""
          : this.formatHexForInternalInput((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.r)(
          // always display hex input in RRGGBB format
          internalColor.object()));
    };
    this.onOpacityInputBlur = () => {
      const node = this.opacityInputNode;
      const inputValue = node.value;
      const { allowEmpty, internalColor } = this;
      const willClearValue = allowEmpty && !inputValue;
      if (willClearValue) {
        return;
      }
      // manipulating DOM directly since rerender doesn't update input value
      node.value =
        allowEmpty && !internalColor ? "" : this.formatOpacityForInternalInput(internalColor);
    };
    this.onHexInputChange = () => {
      const nodeValue = this.hexInputNode.value;
      let value = nodeValue;
      if (value) {
        const normalized = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.n)(value, false);
        const preserveExistingAlpha = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.i)(normalized) && this.alphaChannel;
        if (preserveExistingAlpha && this.internalColor) {
          const alphaHex = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.n)(this.internalColor.hexa(), true).slice(-2);
          value = `${normalized + alphaHex}`;
        }
      }
      this.internalSetValue(value, this.value);
    };
    this.onOpacityInputChange = () => {
      const node = this.opacityInputNode;
      let value;
      if (!node.value) {
        value = node.value;
      }
      else {
        const alpha = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.o)(Number(node.value));
        value = this.internalColor?.alpha(alpha).hexa();
      }
      this.internalSetValue(value, this.value);
    };
    this.onInputKeyDown = (event) => {
      const { altKey, ctrlKey, metaKey, shiftKey } = event;
      const { alphaChannel, hexInputNode, internalColor, value } = this;
      const { key } = event;
      const composedPath = event.composedPath();
      if (key === "Tab" || key === "Enter") {
        if (composedPath.includes(hexInputNode)) {
          this.onHexInputChange();
        }
        else {
          this.onOpacityInputChange();
        }
        if (key === "Enter") {
          event.preventDefault();
        }
        return;
      }
      const isNudgeKey = key === "ArrowDown" || key === "ArrowUp";
      const oldValue = this.value;
      if (isNudgeKey) {
        if (!value) {
          this.internalSetValue(this.previousNonNullValue, oldValue);
          event.preventDefault();
          return;
        }
        const direction = key === "ArrowUp" ? 1 : -1;
        const bump = shiftKey ? 10 : 1;
        this.internalSetValue((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.h)(this.nudgeRGBChannels(internalColor, bump * direction, composedPath.includes(hexInputNode) ? "rgb" : "a"), alphaChannel), oldValue);
        event.preventDefault();
        return;
      }
      const withModifiers = altKey || ctrlKey || metaKey;
      const singleChar = key.length === 1;
      const validHexChar = _utils_js__WEBPACK_IMPORTED_MODULE_0__.k.test(key);
      if (singleChar && !withModifiers && !validHexChar) {
        event.preventDefault();
      }
    };
    this.onHexInputPaste = (event) => {
      const hex = event.clipboardData.getData("text");
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.i)(hex)) {
        event.preventDefault();
        this.hexInputNode.value = hex.slice(1);
      }
    };
    this.previousNonNullValue = this.value;
    this.storeHexInputRef = (node) => {
      this.hexInputNode = node;
    };
    this.storeOpacityInputRef = (node) => {
      this.opacityInputNode = node;
    };
    this.allowEmpty = false;
    this.alphaChannel = false;
    this.hexLabel = "Hex";
    this.messages = undefined;
    this.numberingSystem = undefined;
    this.scale = "m";
    this.value = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.n)((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.h)(DEFAULT_COLOR, this.alphaChannel), this.alphaChannel, true);
    this.internalColor = DEFAULT_COLOR;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    const { allowEmpty, alphaChannel, value } = this;
    if (value) {
      const normalized = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.n)(value, alphaChannel);
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.i)(normalized, alphaChannel)) {
        this.internalSetValue(normalized, normalized, false);
      }
      return;
    }
    if (allowEmpty) {
      this.internalSetValue(null, null, false);
    }
  }
  componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.a)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
  }
  handleValueChange(value, oldValue) {
    this.internalSetValue(value, oldValue, false);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const { alphaChannel, hexLabel, internalColor, messages, scale, value } = this;
    const hexInputValue = this.formatHexForInternalInput(value);
    const opacityInputValue = this.formatOpacityForInternalInput(internalColor);
    const inputScale = scale === "l" ? "m" : "s";
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("div", { class: CSS.container }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-input-text", { class: CSS.hexInput, label: messages?.hex || hexLabel, maxLength: 6, onCalciteInputTextChange: this.onHexInputChange, onCalciteInternalInputTextBlur: this.onHexInputBlur, onKeyDown: this.onInputKeyDown, onPaste: this.onHexInputPaste, prefixText: "#", scale: inputScale, value: hexInputValue,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.storeHexInputRef }), alphaChannel ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_8__.h)("calcite-input-number", { class: CSS.opacityInput, key: "opacity-input", label: messages?.opacity, max: OPACITY_LIMITS.max, maxLength: 3, min: OPACITY_LIMITS.min, numberButtonType: "none", numberingSystem: this.numberingSystem, onCalciteInputNumberChange: this.onOpacityInputChange, onCalciteInternalInputNumberBlur: this.onOpacityInputBlur, onKeyDown: this.onInputKeyDown, scale: inputScale, suffixText: "%", value: opacityInputValue,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.storeOpacityInputRef })) : null));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    return (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.k)(this.hexInputNode);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  internalSetValue(value, oldValue, emit = true) {
    if (value) {
      const { alphaChannel } = this;
      const normalized = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.n)(value, alphaChannel, alphaChannel);
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.i)(normalized, alphaChannel)) {
        const { internalColor: currentColor } = this;
        const nextColor = (0,_index2_js__WEBPACK_IMPORTED_MODULE_1__.c)(normalized);
        const normalizedLonghand = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.n)((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.h)(nextColor, alphaChannel), alphaChannel);
        const changed = !currentColor ||
          normalizedLonghand !== (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.n)((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.h)(currentColor, alphaChannel), alphaChannel);
        this.internalColor = nextColor;
        this.previousNonNullValue = normalizedLonghand;
        this.value = normalizedLonghand;
        if (changed && emit) {
          this.calciteColorPickerHexInputChange.emit();
        }
        return;
      }
    }
    else if (this.allowEmpty) {
      this.internalColor = null;
      this.value = null;
      if (emit) {
        this.calciteColorPickerHexInputChange.emit();
      }
      return;
    }
    this.value = oldValue;
  }
  formatHexForInternalInput(hex) {
    return hex ? hex.replace("#", "").slice(0, 6) : "";
  }
  formatOpacityForInternalInput(color) {
    return color ? `${(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.b)(color.alpha())}` : "";
  }
  nudgeRGBChannels(color$1, amount, context) {
    let nudgedChannels;
    const channels = color$1.array();
    const rgbChannels = channels.slice(0, 3);
    if (context === "rgb") {
      const nudgedRGBChannels = rgbChannels.map((channel) => channel + amount);
      nudgedChannels = [
        ...nudgedRGBChannels,
        this.alphaChannel ? channels[3] : undefined,
      ];
    }
    else {
      const nudgedAlpha = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.o)((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.b)(color$1.alpha()) + amount);
      nudgedChannels = [...rgbChannels, nudgedAlpha];
    }
    return (0,_index2_js__WEBPACK_IMPORTED_MODULE_1__.c)(nudgedChannels);
  }
  get el() { return this; }
  static get watchers() { return {
    "value": ["handleValueChange"]
  }; }
  static get style() { return colorPickerHexInputCss; }
}, [1, "calcite-color-picker-hex-input", {
    "allowEmpty": [4, "allow-empty"],
    "alphaChannel": [4, "alpha-channel"],
    "hexLabel": [1, "hex-label"],
    "messages": [16],
    "numberingSystem": [1, "numbering-system"],
    "scale": [513],
    "value": [1537],
    "internalColor": [32],
    "setFocus": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-color-picker-hex-input", "calcite-icon", "calcite-input-number", "calcite-input-text", "calcite-progress"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-color-picker-hex-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ColorPickerHexInput);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_4__.d)();
      }
      break;
    case "calcite-input-number":
      if (!customElements.get(tagName)) {
        (0,_input_number_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
    case "calcite-input-text":
      if (!customElements.get(tagName)) {
        (0,_input_text_js__WEBPACK_IMPORTED_MODULE_6__.d)();
      }
      break;
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        (0,_progress_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNWNhOTVhNzg0M2Y3MjY2MzZjZThhYWU4OTc2ZDBjZWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lHO0FBQytEO0FBQy9IO0FBQ0k7QUFDaUU7QUFDdkQ7QUFDUTtBQUNGO0FBQ0Y7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkNBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQyxjQUFjLFdBQVcsYUFBYSxpQkFBaUIsaUJBQWlCLG1CQUFtQixXQUFXLFlBQVkseUJBQXlCLGVBQWUsaUJBQWlCLHlCQUF5Qiw0QkFBNEIsZUFBZSxpQkFBaUIsZ0NBQWdDLGtCQUFrQiwwQkFBMEIsZ0NBQWdDLGlCQUFpQixnQkFBZ0Is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QUEwQiw0Q0FBYyxDQUFDLDRDQUFjO0FBQ3ZEO0FBQ0E7QUFDQSxXQUFXLDZDQUFLO0FBQ2hCO0FBQ0EsYUFBYTtBQUNiLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkNBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtREFBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQXFCO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFc1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY29sb3ItcGlja2VyLWhleC1pbnB1dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGogYXMgaXNMb25naGFuZEhleCwgaSBhcyBpc1ZhbGlkSGV4LCByIGFzIHJnYlRvSGV4LCBuIGFzIG5vcm1hbGl6ZUhleCwgbyBhcyBvcGFjaXR5VG9BbHBoYSwgaCBhcyBoZXhpZnksIGsgYXMgaGV4Q2hhciwgYiBhcyBhbHBoYVRvT3BhY2l0eSB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgYyBhcyBjb2xvciB9IGZyb20gJy4vaW5kZXgyLmpzJztcbmltcG9ydCB7IGsgYXMgZm9jdXNFbGVtZW50IH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYSBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBzIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRGb2N1c2FibGUgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0IH0gZnJvbSAnLi9pY29uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQzIH0gZnJvbSAnLi9pbnB1dC1udW1iZXIuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL2lucHV0LXRleHQuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDEgfSBmcm9tICcuL3Byb2dyZXNzLmpzJztcblxuY29uc3QgQ1NTJDEgPSB7XG4gIGNoYW5uZWw6IFwiY2hhbm5lbFwiLFxuICBjaGFubmVsczogXCJjaGFubmVsc1wiLFxuICBjb2xvckZpZWxkOiBcImNvbG9yLWZpZWxkXCIsXG4gIGNvbG9yRmllbGRTY29wZTogXCJzY29wZS0tY29sb3ItZmllbGRcIixcbiAgY29sb3JNb2RlOiBcImNvbG9yLW1vZGVcIixcbiAgY29sb3JNb2RlQ29udGFpbmVyOiBcImNvbG9yLW1vZGUtY29udGFpbmVyXCIsXG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgY29udHJvbDogXCJjb250cm9sXCIsXG4gIGNvbnRyb2xBbmRTY29wZTogXCJjb250cm9sLWFuZC1zY29wZVwiLFxuICBjb250cm9sU2VjdGlvbjogXCJjb250cm9sLXNlY3Rpb25cIixcbiAgZGVsZXRlQ29sb3I6IFwiZGVsZXRlLWNvbG9yXCIsXG4gIGhlYWRlcjogXCJoZWFkZXJcIixcbiAgaGV4QW5kQ2hhbm5lbHNHcm91cDogXCJoZXgtYW5kLWNoYW5uZWxzLWdyb3VwXCIsXG4gIGhleE9wdGlvbnM6IFwiY29sb3ItaGV4LW9wdGlvbnNcIixcbiAgaHVlU2NvcGU6IFwic2NvcGUtLWh1ZVwiLFxuICBodWVTbGlkZXI6IFwiaHVlLXNsaWRlclwiLFxuICBvcGFjaXR5U2NvcGU6IFwic2NvcGUtLW9wYWNpdHlcIixcbiAgb3BhY2l0eVNsaWRlcjogXCJvcGFjaXR5LXNsaWRlclwiLFxuICBwcmV2aWV3OiBcInByZXZpZXdcIixcbiAgcHJldmlld0FuZFNsaWRlcnM6IFwicHJldmlldy1hbmQtc2xpZGVyc1wiLFxuICBzYXZlQ29sb3I6IFwic2F2ZS1jb2xvclwiLFxuICBzYXZlZENvbG9yOiBcInNhdmVkLWNvbG9yXCIsXG4gIHNhdmVkQ29sb3JzOiBcInNhdmVkLWNvbG9yc1wiLFxuICBzYXZlZENvbG9yc0J1dHRvbnM6IFwic2F2ZWQtY29sb3JzLWJ1dHRvbnNcIixcbiAgc2F2ZWRDb2xvcnNTZWN0aW9uOiBcInNhdmVkLWNvbG9ycy1zZWN0aW9uXCIsXG4gIHNjb3BlOiBcInNjb3BlXCIsXG4gIHNlY3Rpb246IFwic2VjdGlvblwiLFxuICBzbGlkZXI6IFwic2xpZGVyXCIsXG4gIHNsaWRlcnM6IFwic2xpZGVyc1wiLFxuICBzcGxpdFNlY3Rpb246IFwic2VjdGlvbi0tc3BsaXRcIixcbn07XG5jb25zdCBERUZBVUxUX0NPTE9SJDEgPSBjb2xvcihcIiMwMDdBQzJcIik7XG5jb25zdCBERUZBVUxUX1NUT1JBR0VfS0VZX1BSRUZJWCA9IFwiY2FsY2l0ZS1jb2xvci1cIjtcbmNvbnN0IFJHQl9MSU1JVFMgPSB7XG4gIHI6IDI1NSxcbiAgZzogMjU1LFxuICBiOiAyNTUsXG59O1xuY29uc3QgSFNWX0xJTUlUUyA9IHtcbiAgaDogMzYwLFxuICBzOiAxMDAsXG4gIHY6IDEwMCxcbn07XG4vLyAwIGFuZCAzNjAgcmVwcmVzZW50IHRoZSBzYW1lIHZhbHVlLCBzbyB3ZSBsaW1pdCB0aGUgaHVlIHRvIDM1OVxuY29uc3QgSFVFX0xJTUlUX0NPTlNUUkFJTkVEID0gSFNWX0xJTUlUUy5oIC0gMTtcbmNvbnN0IE9QQUNJVFlfTElNSVRTID0ge1xuICBtaW46IDAsXG4gIG1heDogMTAwLFxufTtcbmNvbnN0IERJTUVOU0lPTlMgPSB7XG4gIHM6IHtcbiAgICBzbGlkZXI6IHtcbiAgICAgIGhlaWdodDogMTIsXG4gICAgICB3aWR0aDogMTA0LFxuICAgIH0sXG4gICAgY29sb3JGaWVsZDoge1xuICAgICAgaGVpZ2h0OiA4MCxcbiAgICAgIHdpZHRoOiAxNjAsXG4gICAgfSxcbiAgICB0aHVtYjoge1xuICAgICAgcmFkaXVzOiAxMCxcbiAgICB9LFxuICB9LFxuICBtOiB7XG4gICAgc2xpZGVyOiB7XG4gICAgICBoZWlnaHQ6IDEyLFxuICAgICAgd2lkdGg6IDIwNCxcbiAgICB9LFxuICAgIGNvbG9yRmllbGQ6IHtcbiAgICAgIGhlaWdodDogMTUwLFxuICAgICAgd2lkdGg6IDI3MixcbiAgICB9LFxuICAgIHRodW1iOiB7XG4gICAgICByYWRpdXM6IDEwLFxuICAgIH0sXG4gIH0sXG4gIGw6IHtcbiAgICBzbGlkZXI6IHtcbiAgICAgIGhlaWdodDogMTIsXG4gICAgICB3aWR0aDogMzg0LFxuICAgIH0sXG4gICAgY29sb3JGaWVsZDoge1xuICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICB3aWR0aDogNDY0LFxuICAgIH0sXG4gICAgdGh1bWI6IHtcbiAgICAgIHJhZGl1czogMTAsXG4gICAgfSxcbiAgfSxcbn07XG5jb25zdCBTQ09QRV9TSVpFID0gMTtcblxuY29uc3QgQ1NTID0ge1xuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGhleElucHV0OiBcImhleC1pbnB1dFwiLFxuICBvcGFjaXR5SW5wdXQ6IFwib3BhY2l0eS1pbnB1dFwiLFxufTtcblxuY29uc3QgY29sb3JQaWNrZXJIZXhJbnB1dENzcyA9IFwiOmhvc3R7ZGlzcGxheTpibG9ja30uY29udGFpbmVye2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO2ZsZXgtd3JhcDpub3dyYXA7YWxpZ24taXRlbXM6Y2VudGVyfS5oZXgtaW5wdXR7ZmxleC1ncm93OjE7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfS5vcGFjaXR5LWlucHV0e2lubGluZS1zaXplOjY4cHg7bWFyZ2luLWlubGluZS1zdGFydDotMXB4fTpob3N0KFtzY2FsZT1zXSkgLmNvbnRhaW5lcntmbGV4LXdyYXA6d3JhcDtyb3ctZ2FwOjAuMTI1cmVtfTpob3N0KFtzY2FsZT1zXSkgLm9wYWNpdHktaW5wdXR7aW5saW5lLXNpemU6dW5zZXQ7bWFyZ2luLWlubGluZS1zdGFydDp1bnNldH06aG9zdChbc2NhbGU9bF0pIC5vcGFjaXR5LWlucHV0e2lubGluZS1zaXplOjg4cHh9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IERFRkFVTFRfQ09MT1IgPSBjb2xvcigpO1xuY29uc3QgQ29sb3JQaWNrZXJIZXhJbnB1dCA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlQ29sb3JQaWNrZXJIZXhJbnB1dENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUNvbG9yUGlja2VySGV4SW5wdXRDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5vbkhleElucHV0Qmx1ciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmhleElucHV0Tm9kZTtcbiAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBub2RlLnZhbHVlO1xuICAgICAgY29uc3QgaGV4ID0gYCMke2lucHV0VmFsdWV9YDtcbiAgICAgIGNvbnN0IHsgYWxsb3dFbXB0eSwgaW50ZXJuYWxDb2xvciB9ID0gdGhpcztcbiAgICAgIGNvbnN0IHdpbGxDbGVhclZhbHVlID0gYWxsb3dFbXB0eSAmJiAhaW5wdXRWYWx1ZTtcbiAgICAgIGNvbnN0IGlzTG9uZ2hhbmQgPSBpc0xvbmdoYW5kSGV4KGhleCk7XG4gICAgICAvLyBlbnN1cmUgbW9kaWZpZWQgcGFzdGVkIGhleCB2YWx1ZXMgYXJlIGNvbW1pdHRlZCBzaW5jZSB3ZSBwcmV2ZW50IGRlZmF1bHQgdG8gcmVtb3ZlIHRoZSAjIGNoYXIuXG4gICAgICB0aGlzLm9uSGV4SW5wdXRDaGFuZ2UoKTtcbiAgICAgIGlmICh3aWxsQ2xlYXJWYWx1ZSB8fCAoaXNWYWxpZEhleChoZXgpICYmIGlzTG9uZ2hhbmQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIG1hbmlwdWxhdGluZyBET00gZGlyZWN0bHkgc2luY2UgcmVyZW5kZXIgZG9lc24ndCB1cGRhdGUgaW5wdXQgdmFsdWVcbiAgICAgIG5vZGUudmFsdWUgPVxuICAgICAgICBhbGxvd0VtcHR5ICYmICFpbnRlcm5hbENvbG9yXG4gICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgOiB0aGlzLmZvcm1hdEhleEZvckludGVybmFsSW5wdXQocmdiVG9IZXgoXG4gICAgICAgICAgLy8gYWx3YXlzIGRpc3BsYXkgaGV4IGlucHV0IGluIFJSR0dCQiBmb3JtYXRcbiAgICAgICAgICBpbnRlcm5hbENvbG9yLm9iamVjdCgpKSk7XG4gICAgfTtcbiAgICB0aGlzLm9uT3BhY2l0eUlucHV0Qmx1ciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLm9wYWNpdHlJbnB1dE5vZGU7XG4gICAgICBjb25zdCBpbnB1dFZhbHVlID0gbm9kZS52YWx1ZTtcbiAgICAgIGNvbnN0IHsgYWxsb3dFbXB0eSwgaW50ZXJuYWxDb2xvciB9ID0gdGhpcztcbiAgICAgIGNvbnN0IHdpbGxDbGVhclZhbHVlID0gYWxsb3dFbXB0eSAmJiAhaW5wdXRWYWx1ZTtcbiAgICAgIGlmICh3aWxsQ2xlYXJWYWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBtYW5pcHVsYXRpbmcgRE9NIGRpcmVjdGx5IHNpbmNlIHJlcmVuZGVyIGRvZXNuJ3QgdXBkYXRlIGlucHV0IHZhbHVlXG4gICAgICBub2RlLnZhbHVlID1cbiAgICAgICAgYWxsb3dFbXB0eSAmJiAhaW50ZXJuYWxDb2xvciA/IFwiXCIgOiB0aGlzLmZvcm1hdE9wYWNpdHlGb3JJbnRlcm5hbElucHV0KGludGVybmFsQ29sb3IpO1xuICAgIH07XG4gICAgdGhpcy5vbkhleElucHV0Q2hhbmdlID0gKCkgPT4ge1xuICAgICAgY29uc3Qgbm9kZVZhbHVlID0gdGhpcy5oZXhJbnB1dE5vZGUudmFsdWU7XG4gICAgICBsZXQgdmFsdWUgPSBub2RlVmFsdWU7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUhleCh2YWx1ZSwgZmFsc2UpO1xuICAgICAgICBjb25zdCBwcmVzZXJ2ZUV4aXN0aW5nQWxwaGEgPSBpc1ZhbGlkSGV4KG5vcm1hbGl6ZWQpICYmIHRoaXMuYWxwaGFDaGFubmVsO1xuICAgICAgICBpZiAocHJlc2VydmVFeGlzdGluZ0FscGhhICYmIHRoaXMuaW50ZXJuYWxDb2xvcikge1xuICAgICAgICAgIGNvbnN0IGFscGhhSGV4ID0gbm9ybWFsaXplSGV4KHRoaXMuaW50ZXJuYWxDb2xvci5oZXhhKCksIHRydWUpLnNsaWNlKC0yKTtcbiAgICAgICAgICB2YWx1ZSA9IGAke25vcm1hbGl6ZWQgKyBhbHBoYUhleH1gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmludGVybmFsU2V0VmFsdWUodmFsdWUsIHRoaXMudmFsdWUpO1xuICAgIH07XG4gICAgdGhpcy5vbk9wYWNpdHlJbnB1dENoYW5nZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLm9wYWNpdHlJbnB1dE5vZGU7XG4gICAgICBsZXQgdmFsdWU7XG4gICAgICBpZiAoIW5vZGUudmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBub2RlLnZhbHVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGFscGhhID0gb3BhY2l0eVRvQWxwaGEoTnVtYmVyKG5vZGUudmFsdWUpKTtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmludGVybmFsQ29sb3I/LmFscGhhKGFscGhhKS5oZXhhKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmludGVybmFsU2V0VmFsdWUodmFsdWUsIHRoaXMudmFsdWUpO1xuICAgIH07XG4gICAgdGhpcy5vbklucHV0S2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBhbHRLZXksIGN0cmxLZXksIG1ldGFLZXksIHNoaWZ0S2V5IH0gPSBldmVudDtcbiAgICAgIGNvbnN0IHsgYWxwaGFDaGFubmVsLCBoZXhJbnB1dE5vZGUsIGludGVybmFsQ29sb3IsIHZhbHVlIH0gPSB0aGlzO1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG4gICAgICBpZiAoa2V5ID09PSBcIlRhYlwiIHx8IGtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGlmIChjb21wb3NlZFBhdGguaW5jbHVkZXMoaGV4SW5wdXROb2RlKSkge1xuICAgICAgICAgIHRoaXMub25IZXhJbnB1dENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMub25PcGFjaXR5SW5wdXRDaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzTnVkZ2VLZXkgPSBrZXkgPT09IFwiQXJyb3dEb3duXCIgfHwga2V5ID09PSBcIkFycm93VXBcIjtcbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIGlmIChpc051ZGdlS2V5KSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmludGVybmFsU2V0VmFsdWUodGhpcy5wcmV2aW91c05vbk51bGxWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGtleSA9PT0gXCJBcnJvd1VwXCIgPyAxIDogLTE7XG4gICAgICAgIGNvbnN0IGJ1bXAgPSBzaGlmdEtleSA/IDEwIDogMTtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFNldFZhbHVlKGhleGlmeSh0aGlzLm51ZGdlUkdCQ2hhbm5lbHMoaW50ZXJuYWxDb2xvciwgYnVtcCAqIGRpcmVjdGlvbiwgY29tcG9zZWRQYXRoLmluY2x1ZGVzKGhleElucHV0Tm9kZSkgPyBcInJnYlwiIDogXCJhXCIpLCBhbHBoYUNoYW5uZWwpLCBvbGRWYWx1ZSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHdpdGhNb2RpZmllcnMgPSBhbHRLZXkgfHwgY3RybEtleSB8fCBtZXRhS2V5O1xuICAgICAgY29uc3Qgc2luZ2xlQ2hhciA9IGtleS5sZW5ndGggPT09IDE7XG4gICAgICBjb25zdCB2YWxpZEhleENoYXIgPSBoZXhDaGFyLnRlc3Qoa2V5KTtcbiAgICAgIGlmIChzaW5nbGVDaGFyICYmICF3aXRoTW9kaWZpZXJzICYmICF2YWxpZEhleENoYXIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMub25IZXhJbnB1dFBhc3RlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBoZXggPSBldmVudC5jbGlwYm9hcmREYXRhLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgICAgaWYgKGlzVmFsaWRIZXgoaGV4KSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmhleElucHV0Tm9kZS52YWx1ZSA9IGhleC5zbGljZSgxKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucHJldmlvdXNOb25OdWxsVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIHRoaXMuc3RvcmVIZXhJbnB1dFJlZiA9IChub2RlKSA9PiB7XG4gICAgICB0aGlzLmhleElucHV0Tm9kZSA9IG5vZGU7XG4gICAgfTtcbiAgICB0aGlzLnN0b3JlT3BhY2l0eUlucHV0UmVmID0gKG5vZGUpID0+IHtcbiAgICAgIHRoaXMub3BhY2l0eUlucHV0Tm9kZSA9IG5vZGU7XG4gICAgfTtcbiAgICB0aGlzLmFsbG93RW1wdHkgPSBmYWxzZTtcbiAgICB0aGlzLmFscGhhQ2hhbm5lbCA9IGZhbHNlO1xuICAgIHRoaXMuaGV4TGFiZWwgPSBcIkhleFwiO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMudmFsdWUgPSBub3JtYWxpemVIZXgoaGV4aWZ5KERFRkFVTFRfQ09MT1IsIHRoaXMuYWxwaGFDaGFubmVsKSwgdGhpcy5hbHBoYUNoYW5uZWwsIHRydWUpO1xuICAgIHRoaXMuaW50ZXJuYWxDb2xvciA9IERFRkFVTFRfQ09MT1I7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29uc3QgeyBhbGxvd0VtcHR5LCBhbHBoYUNoYW5uZWwsIHZhbHVlIH0gPSB0aGlzO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUhleCh2YWx1ZSwgYWxwaGFDaGFubmVsKTtcbiAgICAgIGlmIChpc1ZhbGlkSGV4KG5vcm1hbGl6ZWQsIGFscGhhQ2hhbm5lbCkpIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFNldFZhbHVlKG5vcm1hbGl6ZWQsIG5vcm1hbGl6ZWQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGFsbG93RW1wdHkpIHtcbiAgICAgIHRoaXMuaW50ZXJuYWxTZXRWYWx1ZShudWxsLCBudWxsLCBmYWxzZSk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgaGFuZGxlVmFsdWVDaGFuZ2UodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgdGhpcy5pbnRlcm5hbFNldFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgZmFsc2UpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFscGhhQ2hhbm5lbCwgaGV4TGFiZWwsIGludGVybmFsQ29sb3IsIG1lc3NhZ2VzLCBzY2FsZSwgdmFsdWUgfSA9IHRoaXM7XG4gICAgY29uc3QgaGV4SW5wdXRWYWx1ZSA9IHRoaXMuZm9ybWF0SGV4Rm9ySW50ZXJuYWxJbnB1dCh2YWx1ZSk7XG4gICAgY29uc3Qgb3BhY2l0eUlucHV0VmFsdWUgPSB0aGlzLmZvcm1hdE9wYWNpdHlGb3JJbnRlcm5hbElucHV0KGludGVybmFsQ29sb3IpO1xuICAgIGNvbnN0IGlucHV0U2NhbGUgPSBzY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGFpbmVyIH0sIGgoXCJjYWxjaXRlLWlucHV0LXRleHRcIiwgeyBjbGFzczogQ1NTLmhleElucHV0LCBsYWJlbDogbWVzc2FnZXM/LmhleCB8fCBoZXhMYWJlbCwgbWF4TGVuZ3RoOiA2LCBvbkNhbGNpdGVJbnB1dFRleHRDaGFuZ2U6IHRoaXMub25IZXhJbnB1dENoYW5nZSwgb25DYWxjaXRlSW50ZXJuYWxJbnB1dFRleHRCbHVyOiB0aGlzLm9uSGV4SW5wdXRCbHVyLCBvbktleURvd246IHRoaXMub25JbnB1dEtleURvd24sIG9uUGFzdGU6IHRoaXMub25IZXhJbnB1dFBhc3RlLCBwcmVmaXhUZXh0OiBcIiNcIiwgc2NhbGU6IGlucHV0U2NhbGUsIHZhbHVlOiBoZXhJbnB1dFZhbHVlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zdG9yZUhleElucHV0UmVmIH0pLCBhbHBoYUNoYW5uZWwgPyAoaChcImNhbGNpdGUtaW5wdXQtbnVtYmVyXCIsIHsgY2xhc3M6IENTUy5vcGFjaXR5SW5wdXQsIGtleTogXCJvcGFjaXR5LWlucHV0XCIsIGxhYmVsOiBtZXNzYWdlcz8ub3BhY2l0eSwgbWF4OiBPUEFDSVRZX0xJTUlUUy5tYXgsIG1heExlbmd0aDogMywgbWluOiBPUEFDSVRZX0xJTUlUUy5taW4sIG51bWJlckJ1dHRvblR5cGU6IFwibm9uZVwiLCBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLCBvbkNhbGNpdGVJbnB1dE51bWJlckNoYW5nZTogdGhpcy5vbk9wYWNpdHlJbnB1dENoYW5nZSwgb25DYWxjaXRlSW50ZXJuYWxJbnB1dE51bWJlckJsdXI6IHRoaXMub25PcGFjaXR5SW5wdXRCbHVyLCBvbktleURvd246IHRoaXMub25JbnB1dEtleURvd24sIHNjYWxlOiBpbnB1dFNjYWxlLCBzdWZmaXhUZXh0OiBcIiVcIiwgdmFsdWU6IG9wYWNpdHlJbnB1dFZhbHVlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zdG9yZU9wYWNpdHlJbnB1dFJlZiB9KSkgOiBudWxsKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRGb2N1c2FibGUodGhpcyk7XG4gICAgcmV0dXJuIGZvY3VzRWxlbWVudCh0aGlzLmhleElucHV0Tm9kZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaW50ZXJuYWxTZXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsIGVtaXQgPSB0cnVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCB7IGFscGhhQ2hhbm5lbCB9ID0gdGhpcztcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVIZXgodmFsdWUsIGFscGhhQ2hhbm5lbCwgYWxwaGFDaGFubmVsKTtcbiAgICAgIGlmIChpc1ZhbGlkSGV4KG5vcm1hbGl6ZWQsIGFscGhhQ2hhbm5lbCkpIHtcbiAgICAgICAgY29uc3QgeyBpbnRlcm5hbENvbG9yOiBjdXJyZW50Q29sb3IgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG5leHRDb2xvciA9IGNvbG9yKG5vcm1hbGl6ZWQpO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkTG9uZ2hhbmQgPSBub3JtYWxpemVIZXgoaGV4aWZ5KG5leHRDb2xvciwgYWxwaGFDaGFubmVsKSwgYWxwaGFDaGFubmVsKTtcbiAgICAgICAgY29uc3QgY2hhbmdlZCA9ICFjdXJyZW50Q29sb3IgfHxcbiAgICAgICAgICBub3JtYWxpemVkTG9uZ2hhbmQgIT09IG5vcm1hbGl6ZUhleChoZXhpZnkoY3VycmVudENvbG9yLCBhbHBoYUNoYW5uZWwpLCBhbHBoYUNoYW5uZWwpO1xuICAgICAgICB0aGlzLmludGVybmFsQ29sb3IgPSBuZXh0Q29sb3I7XG4gICAgICAgIHRoaXMucHJldmlvdXNOb25OdWxsVmFsdWUgPSBub3JtYWxpemVkTG9uZ2hhbmQ7XG4gICAgICAgIHRoaXMudmFsdWUgPSBub3JtYWxpemVkTG9uZ2hhbmQ7XG4gICAgICAgIGlmIChjaGFuZ2VkICYmIGVtaXQpIHtcbiAgICAgICAgICB0aGlzLmNhbGNpdGVDb2xvclBpY2tlckhleElucHV0Q2hhbmdlLmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuYWxsb3dFbXB0eSkge1xuICAgICAgdGhpcy5pbnRlcm5hbENvbG9yID0gbnVsbDtcbiAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgaWYgKGVtaXQpIHtcbiAgICAgICAgdGhpcy5jYWxjaXRlQ29sb3JQaWNrZXJIZXhJbnB1dENoYW5nZS5lbWl0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSBvbGRWYWx1ZTtcbiAgfVxuICBmb3JtYXRIZXhGb3JJbnRlcm5hbElucHV0KGhleCkge1xuICAgIHJldHVybiBoZXggPyBoZXgucmVwbGFjZShcIiNcIiwgXCJcIikuc2xpY2UoMCwgNikgOiBcIlwiO1xuICB9XG4gIGZvcm1hdE9wYWNpdHlGb3JJbnRlcm5hbElucHV0KGNvbG9yKSB7XG4gICAgcmV0dXJuIGNvbG9yID8gYCR7YWxwaGFUb09wYWNpdHkoY29sb3IuYWxwaGEoKSl9YCA6IFwiXCI7XG4gIH1cbiAgbnVkZ2VSR0JDaGFubmVscyhjb2xvciQxLCBhbW91bnQsIGNvbnRleHQpIHtcbiAgICBsZXQgbnVkZ2VkQ2hhbm5lbHM7XG4gICAgY29uc3QgY2hhbm5lbHMgPSBjb2xvciQxLmFycmF5KCk7XG4gICAgY29uc3QgcmdiQ2hhbm5lbHMgPSBjaGFubmVscy5zbGljZSgwLCAzKTtcbiAgICBpZiAoY29udGV4dCA9PT0gXCJyZ2JcIikge1xuICAgICAgY29uc3QgbnVkZ2VkUkdCQ2hhbm5lbHMgPSByZ2JDaGFubmVscy5tYXAoKGNoYW5uZWwpID0+IGNoYW5uZWwgKyBhbW91bnQpO1xuICAgICAgbnVkZ2VkQ2hhbm5lbHMgPSBbXG4gICAgICAgIC4uLm51ZGdlZFJHQkNoYW5uZWxzLFxuICAgICAgICB0aGlzLmFscGhhQ2hhbm5lbCA/IGNoYW5uZWxzWzNdIDogdW5kZWZpbmVkLFxuICAgICAgXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBudWRnZWRBbHBoYSA9IG9wYWNpdHlUb0FscGhhKGFscGhhVG9PcGFjaXR5KGNvbG9yJDEuYWxwaGEoKSkgKyBhbW91bnQpO1xuICAgICAgbnVkZ2VkQ2hhbm5lbHMgPSBbLi4ucmdiQ2hhbm5lbHMsIG51ZGdlZEFscGhhXTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9yKG51ZGdlZENoYW5uZWxzKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJ2YWx1ZVwiOiBbXCJoYW5kbGVWYWx1ZUNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBjb2xvclBpY2tlckhleElucHV0Q3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWNvbG9yLXBpY2tlci1oZXgtaW5wdXRcIiwge1xuICAgIFwiYWxsb3dFbXB0eVwiOiBbNCwgXCJhbGxvdy1lbXB0eVwiXSxcbiAgICBcImFscGhhQ2hhbm5lbFwiOiBbNCwgXCJhbHBoYS1jaGFubmVsXCJdLFxuICAgIFwiaGV4TGFiZWxcIjogWzEsIFwiaGV4LWxhYmVsXCJdLFxuICAgIFwibWVzc2FnZXNcIjogWzE2XSxcbiAgICBcIm51bWJlcmluZ1N5c3RlbVwiOiBbMSwgXCJudW1iZXJpbmctc3lzdGVtXCJdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJ2YWx1ZVwiOiBbMTUzN10sXG4gICAgXCJpbnRlcm5hbENvbG9yXCI6IFszMl0sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtY29sb3ItcGlja2VyLWhleC1pbnB1dFwiLCBcImNhbGNpdGUtaWNvblwiLCBcImNhbGNpdGUtaW5wdXQtbnVtYmVyXCIsIFwiY2FsY2l0ZS1pbnB1dC10ZXh0XCIsIFwiY2FsY2l0ZS1wcm9ncmVzc1wiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1jb2xvci1waWNrZXItaGV4LWlucHV0XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgQ29sb3JQaWNrZXJIZXhJbnB1dCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDQoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWlucHV0LW51bWJlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQzKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pbnB1dC10ZXh0XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDIoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLXByb2dyZXNzXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBDU1MkMSBhcyBDLCBERUZBVUxUX0NPTE9SJDEgYXMgRCwgSFNWX0xJTUlUUyBhcyBILCBPUEFDSVRZX0xJTUlUUyBhcyBPLCBSR0JfTElNSVRTIGFzIFIsIFNDT1BFX1NJWkUgYXMgUywgRElNRU5TSU9OUyBhcyBhLCBIVUVfTElNSVRfQ09OU1RSQUlORUQgYXMgYiwgREVGQVVMVF9TVE9SQUdFX0tFWV9QUkVGSVggYXMgYywgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkLCBDb2xvclBpY2tlckhleElucHV0IGFzIGUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==