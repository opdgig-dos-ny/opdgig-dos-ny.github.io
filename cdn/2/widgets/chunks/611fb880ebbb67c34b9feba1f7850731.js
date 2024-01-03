"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-color-picker_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-color-picker.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-color-picker.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteColorPicker: () => (/* binding */ CalciteColorPicker),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _index2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index2.js */ "./node_modules/@esri/calcite-components/dist/components/index2.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-picker-hex-input.js */ "./node_modules/@esri/calcite-components/dist/components/color-picker-hex-input.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@esri/calcite-components/dist/components/utils.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./math.js */ "./node_modules/@esri/calcite-components/dist/components/math.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./button.js */ "./node_modules/@esri/calcite-components/dist/components/button.js");
/* harmony import */ var _color_picker_swatch_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./color-picker-swatch.js */ "./node_modules/@esri/calcite-components/dist/components/color-picker-swatch.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _input_number_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./input-number.js */ "./node_modules/@esri/calcite-components/dist/components/input-number.js");
/* harmony import */ var _input_text_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./input-text.js */ "./node_modules/@esri/calcite-components/dist/components/input-text.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./progress.js */ "./node_modules/@esri/calcite-components/dist/components/progress.js");
/* harmony import */ var _tab_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tab.js */ "./node_modules/@esri/calcite-components/dist/components/tab.js");
/* harmony import */ var _tab_nav_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tab-nav.js */ "./node_modules/@esri/calcite-components/dist/components/tab-nav.js");
/* harmony import */ var _tab_title_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tab-title.js */ "./node_modules/@esri/calcite-components/dist/components/tab-title.js");
/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tabs.js */ "./node_modules/@esri/calcite-components/dist/components/tabs.js");
/* harmony import */ var _throttle_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./throttle.js */ "./node_modules/@esri/calcite-components/dist/components/throttle.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
























const colorPickerCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){--calcite-color-picker-spacing:8px}:host([scale=s]) .container{inline-size:160px}:host([scale=s]) .saved-colors{gap:0.25rem;grid-template-columns:repeat(auto-fill, 20px)}:host([scale=m]){--calcite-color-picker-spacing:12px}:host([scale=m]) .container{inline-size:272px}:host([scale=l]){--calcite-color-picker-spacing:16px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) .container{inline-size:464px}:host([scale=l]) .section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}:host([scale=l]) .saved-colors{grid-template-columns:repeat(auto-fill, 32px)}:host([scale=l]) .control-section{flex-wrap:nowrap;align-items:baseline;flex-wrap:wrap}:host([scale=l]) .color-hex-options{display:flex;flex-shrink:1;flex-direction:column;justify-content:space-around}:host([scale=l]) .color-mode-container{flex-shrink:3}.container{background-color:var(--calcite-ui-foreground-1);display:inline-block;border:1px solid var(--calcite-ui-border-1)}.control-and-scope{position:relative;display:flex;cursor:pointer;touch-action:none}.scope{pointer-events:none;position:absolute;z-index:var(--calcite-app-z-index);block-size:1px;inline-size:1px;border-radius:9999px;background-color:transparent;font-size:var(--calcite-font-size--1);outline-color:transparent}.scope:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          );outline-offset:11px}.hex-and-channels-group{inline-size:100%}.hex-and-channels-group,.control-section{display:flex;flex-direction:row;flex-wrap:wrap}.section{padding-block:0 var(--calcite-color-picker-spacing);padding-inline:var(--calcite-color-picker-spacing)}.section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}.sliders{display:flex;flex-direction:column;justify-content:space-between;margin-inline-start:var(--calcite-color-picker-spacing)}.preview-and-sliders{display:flex;align-items:center;padding:var(--calcite-color-picker-spacing)}.color-hex-options,.section--split{flex-grow:1}.header{display:flex;align-items:center;justify-content:space-between;color:var(--calcite-ui-text-1)}.color-mode-container{padding-block-start:var(--calcite-color-picker-spacing)}.channels{display:flex;row-gap:0.125rem}.channel[data-channel-index=\"3\"]{inline-size:159px}:host([scale=s]) .channels{flex-wrap:wrap}:host([scale=s]) .channel{flex-basis:30%;flex-grow:1}:host([scale=s]) .channel[data-channel-index=\"3\"]{inline-size:unset;margin-inline-start:unset}:host([scale=l]) .channel[data-channel-index=\"3\"]{inline-size:131px}.saved-colors{display:grid;gap:0.5rem;padding-block-start:var(--calcite-color-picker-spacing);grid-template-columns:repeat(auto-fill, 24px)}.saved-colors-buttons{display:flex}.saved-color{outline-offset:0;outline-color:transparent;cursor:pointer}.saved-color:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.saved-color:hover{transition:outline-color var(--calcite-internal-animation-timing-fast) ease-in-out;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}";

const throttleFor60FpsInMs = 16;
const ColorPicker = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteColorPickerChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.createEvent)(this, "calciteColorPickerChange", 6);
    this.calciteColorPickerInput = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.createEvent)(this, "calciteColorPickerInput", 6);
    this.internalColorUpdateContext = null;
    this.mode = _utils_js__WEBPACK_IMPORTED_MODULE_3__.C.HEX;
    this.shiftKeyChannelAdjustment = 0;
    this.handleTabActivate = (event) => {
      this.channelMode = event.currentTarget.getAttribute("data-color-mode");
      this.updateChannelsFromColor(this.color);
    };
    this.handleColorFieldScopeKeyDown = (event) => {
      const { key } = event;
      const arrowKeyToXYOffset = {
        ArrowUp: { x: 0, y: -10 },
        ArrowRight: { x: 10, y: 0 },
        ArrowDown: { x: 0, y: 10 },
        ArrowLeft: { x: -10, y: 0 },
      };
      if (arrowKeyToXYOffset[key]) {
        event.preventDefault();
        this.scopeOrientation = key === "ArrowDown" || key === "ArrowUp" ? "vertical" : "horizontal";
        this.captureColorFieldColor(this.colorFieldScopeLeft + arrowKeyToXYOffset[key].x || 0, this.colorFieldScopeTop + arrowKeyToXYOffset[key].y || 0, false);
      }
    };
    this.handleHueScopeKeyDown = (event) => {
      const modifier = event.shiftKey ? 10 : 1;
      const { key } = event;
      const arrowKeyToXOffset = {
        ArrowUp: 1,
        ArrowRight: 1,
        ArrowDown: -1,
        ArrowLeft: -1,
      };
      if (arrowKeyToXOffset[key]) {
        event.preventDefault();
        const delta = arrowKeyToXOffset[key] * modifier;
        const hue = this.baseColorFieldColor.hue();
        const color = this.baseColorFieldColor.hue(hue + delta);
        this.internalColorSet(color, false);
      }
    };
    this.handleHexInputChange = (event) => {
      event.stopPropagation();
      const { allowEmpty, color: color$1 } = this;
      const input = event.target;
      const hex = input.value;
      if (allowEmpty && !hex) {
        this.internalColorSet(null);
        return;
      }
      const normalizedHex = color$1 && (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.n)((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.h)(color$1, (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.a)(this.mode)));
      if (hex !== normalizedHex) {
        this.internalColorSet((0,_index2_js__WEBPACK_IMPORTED_MODULE_0__.c)(hex));
      }
    };
    this.handleSavedColorSelect = (event) => {
      const swatch = event.currentTarget;
      this.internalColorSet((0,_index2_js__WEBPACK_IMPORTED_MODULE_0__.c)(swatch.color));
    };
    this.handleChannelInput = (event) => {
      const input = event.currentTarget;
      const channelIndex = Number(input.getAttribute("data-channel-index"));
      const isAlphaChannel = channelIndex === 3;
      const limit = isAlphaChannel
        ? _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.O.max
        : this.channelMode === "rgb"
          ? _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.R[Object.keys(_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.R)[channelIndex]]
          : _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.H[Object.keys(_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.H)[channelIndex]];
      let inputValue;
      if (this.allowEmpty && !input.value) {
        inputValue = "";
      }
      else {
        const value = Number(input.value);
        const adjustedValue = value + this.shiftKeyChannelAdjustment;
        const clamped = (0,_math_js__WEBPACK_IMPORTED_MODULE_8__.c)(adjustedValue, 0, limit);
        inputValue = clamped.toString();
      }
      input.value = inputValue;
    };
    this.handleChannelChange = (event) => {
      const input = event.currentTarget;
      const channelIndex = Number(input.getAttribute("data-channel-index"));
      const channels = [...this.channels];
      const shouldClearChannels = this.allowEmpty && !input.value;
      if (shouldClearChannels) {
        this.channels = [null, null, null, null];
        this.internalColorSet(null);
        return;
      }
      const isAlphaChannel = channelIndex === 3;
      const value = Number(input.value);
      channels[channelIndex] = isAlphaChannel ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.o)(value) : value;
      this.updateColorFromChannels(channels);
    };
    this.handleSavedColorKeyDown = (event) => {
      if ((0,_key_js__WEBPACK_IMPORTED_MODULE_5__.i)(event.key)) {
        event.preventDefault();
        this.handleSavedColorSelect(event);
      }
    };
    this.handleColorFieldPointerDown = (event) => {
      if (!(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.j)(event)) {
        return;
      }
      const { offsetX, offsetY } = event;
      document.addEventListener("pointermove", this.globalPointerMoveHandler);
      document.addEventListener("pointerup", this.globalPointerUpHandler, { once: true });
      this.activeCanvasInfo = {
        context: this.colorFieldRenderingContext,
        bounds: this.colorFieldRenderingContext.canvas.getBoundingClientRect(),
      };
      this.captureColorFieldColor(offsetX, offsetY);
      this.colorFieldScopeNode.focus();
    };
    this.handleHueSliderPointerDown = (event) => {
      if (!(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.j)(event)) {
        return;
      }
      const { offsetX } = event;
      document.addEventListener("pointermove", this.globalPointerMoveHandler);
      document.addEventListener("pointerup", this.globalPointerUpHandler, { once: true });
      this.activeCanvasInfo = {
        context: this.hueSliderRenderingContext,
        bounds: this.hueSliderRenderingContext.canvas.getBoundingClientRect(),
      };
      this.captureHueSliderColor(offsetX);
      this.hueScopeNode.focus();
    };
    this.handleOpacitySliderPointerDown = (event) => {
      if (!(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.j)(event)) {
        return;
      }
      const { offsetX } = event;
      document.addEventListener("pointermove", this.globalPointerMoveHandler);
      document.addEventListener("pointerup", this.globalPointerUpHandler, { once: true });
      this.activeCanvasInfo = {
        context: this.opacitySliderRenderingContext,
        bounds: this.opacitySliderRenderingContext.canvas.getBoundingClientRect(),
      };
      this.captureOpacitySliderValue(offsetX);
      this.opacityScopeNode.focus();
    };
    this.globalPointerUpHandler = (event) => {
      if (!(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.j)(event)) {
        return;
      }
      const previouslyDragging = this.activeCanvasInfo;
      this.activeCanvasInfo = null;
      this.drawColorControls();
      if (previouslyDragging) {
        this.calciteColorPickerChange.emit();
      }
    };
    this.globalPointerMoveHandler = (event) => {
      const { activeCanvasInfo, el } = this;
      if (!el.isConnected || !activeCanvasInfo) {
        return;
      }
      const { context, bounds } = activeCanvasInfo;
      let samplingX;
      let samplingY;
      const { clientX, clientY } = event;
      if (context.canvas.matches(":hover")) {
        samplingX = clientX - bounds.x;
        samplingY = clientY - bounds.y;
      }
      else {
        // snap x and y to the closest edge
        if (clientX < bounds.x + bounds.width && clientX > bounds.x) {
          samplingX = clientX - bounds.x;
        }
        else if (clientX < bounds.x) {
          samplingX = 0;
        }
        else {
          samplingX = bounds.width;
        }
        if (clientY < bounds.y + bounds.height && clientY > bounds.y) {
          samplingY = clientY - bounds.y;
        }
        else if (clientY < bounds.y) {
          samplingY = 0;
        }
        else {
          samplingY = bounds.height;
        }
      }
      if (context === this.colorFieldRenderingContext) {
        this.captureColorFieldColor(samplingX, samplingY, false);
      }
      else if (context === this.hueSliderRenderingContext) {
        this.captureHueSliderColor(samplingX);
      }
      else if (context === this.opacitySliderRenderingContext) {
        this.captureOpacitySliderValue(samplingX);
      }
    };
    this.storeColorFieldScope = (node) => {
      this.colorFieldScopeNode = node;
    };
    this.storeHueScope = (node) => {
      this.hueScopeNode = node;
    };
    this.renderChannelsTabTitle = (channelMode) => {
      const { channelMode: activeChannelMode, messages } = this;
      const selected = channelMode === activeChannelMode;
      const label = channelMode === "rgb" ? messages.rgb : messages.hsv;
      return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("calcite-tab-title", { class: _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.colorMode, "data-color-mode": channelMode, key: channelMode, onCalciteTabsActivate: this.handleTabActivate, selected: selected }, label));
    };
    this.renderChannelsTab = (channelMode) => {
      const { allowEmpty, channelMode: activeChannelMode, channels, messages, alphaChannel } = this;
      const selected = channelMode === activeChannelMode;
      const isRgb = channelMode === "rgb";
      const channelAriaLabels = isRgb
        ? [messages.red, messages.green, messages.blue]
        : [messages.hue, messages.saturation, messages.value];
      const direction = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.el);
      const channelsToRender = alphaChannel ? channels : channels.slice(0, 3);
      return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("calcite-tab", { class: _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.control, key: channelMode, selected: selected }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("div", { class: _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.channels, dir: "ltr" }, channelsToRender.map((channelValue, index) => {
        const isAlphaChannel = index === 3;
        if (isAlphaChannel) {
          channelValue =
            allowEmpty && !channelValue ? channelValue : (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.b)(channelValue);
        }
        /* the channel container is ltr, so we apply the host's direction */
        return this.renderChannel(channelValue, index, channelAriaLabels[index], direction, isAlphaChannel ? "%" : "");
      }))));
    };
    this.renderChannel = (value, index, ariaLabel, direction, suffix) => {
      return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("calcite-input-number", { class: _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.channel, "data-channel-index": index, dir: direction, key: index, label: ariaLabel, lang: this.effectiveLocale, numberButtonType: "none", numberingSystem: this.numberingSystem, onCalciteInputNumberChange: this.handleChannelChange, onCalciteInputNumberInput: this.handleChannelInput, onKeyDown: this.handleKeyDown, scale: this.scale === "l" ? "m" : "s",
        // workaround to ensure input borders overlap as desired
        // this is because the build transforms margin-left to its
        // logical-prop, which is undesired as channels are always ltr
        style: {
          marginLeft: index > 0 && !(this.scale === "s" && this.alphaChannel && index === 3) ? "-1px" : "",
        }, suffixText: suffix, value: value?.toString() }));
    };
    this.deleteColor = () => {
      const colorToDelete = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.h)(this.color, this.alphaChannel);
      const inStorage = this.savedColors.indexOf(colorToDelete) > -1;
      if (!inStorage) {
        return;
      }
      const savedColors = this.savedColors.filter((color) => color !== colorToDelete);
      this.savedColors = savedColors;
      const storageKey = `${_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.c}${this.storageId}`;
      if (this.storageId) {
        localStorage.setItem(storageKey, JSON.stringify(savedColors));
      }
    };
    this.saveColor = () => {
      const colorToSave = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.h)(this.color, this.alphaChannel);
      const alreadySaved = this.savedColors.indexOf(colorToSave) > -1;
      if (alreadySaved) {
        return;
      }
      const savedColors = [...this.savedColors, colorToSave];
      this.savedColors = savedColors;
      const storageKey = `${_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.c}${this.storageId}`;
      if (this.storageId) {
        localStorage.setItem(storageKey, JSON.stringify(savedColors));
      }
    };
    this.drawColorControls = (0,_throttle_js__WEBPACK_IMPORTED_MODULE_21__.t)((type = "all") => {
      if ((type === "all" || type === "color-field") && this.colorFieldRenderingContext) {
        this.drawColorField();
      }
      if ((type === "all" || type === "hue-slider") && this.hueSliderRenderingContext) {
        this.drawHueSlider();
      }
      if (this.alphaChannel &&
        (type === "all" || type === "opacity-slider") &&
        this.opacitySliderRenderingContext) {
        this.drawOpacitySlider();
      }
    }, throttleFor60FpsInMs);
    this.captureColorFieldColor = (x, y, skipEqual = true) => {
      const { dimensions: { colorField: { height, width }, }, } = this;
      const saturation = Math.round((_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.H.s / width) * x);
      const value = Math.round((_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.H.v / height) * (height - y));
      this.internalColorSet(this.baseColorFieldColor.hsv().saturationv(saturation).value(value), skipEqual);
    };
    this.initColorField = (canvas) => {
      this.colorFieldRenderingContext = canvas.getContext("2d");
      this.updateCanvasSize("color-field");
      this.drawColorControls();
    };
    this.initHueSlider = (canvas) => {
      this.hueSliderRenderingContext = canvas.getContext("2d");
      this.updateCanvasSize("hue-slider");
      this.drawHueSlider();
    };
    this.initOpacitySlider = (canvas) => {
      if (!canvas) {
        return;
      }
      this.opacitySliderRenderingContext = canvas.getContext("2d");
      this.updateCanvasSize("opacity-slider");
      this.drawOpacitySlider();
    };
    this.storeOpacityScope = (node) => {
      this.opacityScopeNode = node;
    };
    this.handleOpacityScopeKeyDown = (event) => {
      const modifier = event.shiftKey ? 10 : 1;
      const { key } = event;
      const arrowKeyToXOffset = {
        ArrowUp: 0.01,
        ArrowRight: 0.01,
        ArrowDown: -0.01,
        ArrowLeft: -0.01,
      };
      if (arrowKeyToXOffset[key]) {
        event.preventDefault();
        const delta = arrowKeyToXOffset[key] * modifier;
        const alpha = this.baseColorFieldColor.alpha();
        const color = this.baseColorFieldColor.alpha(alpha + delta);
        this.internalColorSet(color, false);
      }
    };
    this.allowEmpty = false;
    this.alphaChannel = false;
    this.channelsDisabled = false;
    this.color = _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.D;
    this.disabled = false;
    this.format = "auto";
    this.hideChannels = false;
    this.hexDisabled = false;
    this.hideHex = false;
    this.hideSaved = false;
    this.savedDisabled = false;
    this.scale = "m";
    this.storageId = undefined;
    this.messageOverrides = undefined;
    this.numberingSystem = undefined;
    this.value = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.n)((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.h)(_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.D, this.alphaChannel));
    this.defaultMessages = undefined;
    this.channelMode = "rgb";
    this.channels = this.toChannels(_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.D);
    this.dimensions = _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.a.m;
    this.effectiveLocale = "";
    this.messages = undefined;
    this.savedColors = [];
    this.colorFieldScopeTop = undefined;
    this.colorFieldScopeLeft = undefined;
    this.hueScopeLeft = undefined;
    this.opacityScopeLeft = undefined;
    this.scopeOrientation = undefined;
  }
  handleAlphaChannelChange(alphaChannel) {
    const { format } = this;
    if (alphaChannel && format !== "auto" && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.a)(format)) {
      console.warn(`ignoring alphaChannel as the current format (${format}) does not support alpha`);
      this.alphaChannel = false;
    }
  }
  handleColorChange(color, oldColor) {
    this.drawColorControls();
    this.updateChannelsFromColor(color);
    this.previousColor = oldColor;
  }
  handleFormatOrAlphaChannelChange() {
    this.setMode(this.format);
    this.internalColorSet(this.color, false, "internal");
  }
  handleScaleChange(scale = "m") {
    this.updateDimensions(scale);
    this.updateCanvasSize("all");
    this.drawColorControls();
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  handleValueChange(value, oldValue) {
    const { allowEmpty, format } = this;
    const checkMode = !allowEmpty || value;
    let modeChanged = false;
    if (checkMode) {
      const nextMode = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.p)(value);
      if (!nextMode || (format !== "auto" && nextMode !== format)) {
        this.showIncompatibleColorWarning(value, format);
        this.value = oldValue;
        return;
      }
      modeChanged = this.mode !== nextMode;
      this.setMode(nextMode, this.internalColorUpdateContext === null);
    }
    const dragging = this.activeCanvasInfo;
    if (this.internalColorUpdateContext === "initial") {
      return;
    }
    if (this.internalColorUpdateContext === "user-interaction") {
      this.calciteColorPickerInput.emit();
      if (!dragging) {
        this.calciteColorPickerChange.emit();
      }
      return;
    }
    const color$1 = allowEmpty && !value
      ? null
      : (0,_index2_js__WEBPACK_IMPORTED_MODULE_0__.c)(value != null && typeof value === "object" && (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.a)(this.mode)
        ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.e)(value)
        : value);
    const colorChanged = !(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.c)(color$1, this.color);
    if (modeChanged || colorChanged) {
      this.internalColorSet(color$1, this.alphaChannel && !(this.mode.endsWith("a") || this.mode.endsWith("a-css")), "internal");
    }
  }
  get baseColorFieldColor() {
    return this.color || this.previousColor || _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.D;
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_9__.u)(this, this.effectiveLocale);
  }
  // using @Listen as a workaround for VDOM listener not firing
  handleChannelKeyUpOrDown(event) {
    this.shiftKeyChannelAdjustment = 0;
    const { key } = event;
    if ((key !== "ArrowUp" && key !== "ArrowDown") ||
      !event.composedPath().some((node) => node.classList?.contains(_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.channel))) {
      return;
    }
    const { shiftKey } = event;
    event.preventDefault();
    if (!this.color) {
      this.internalColorSet(this.previousColor);
      event.stopPropagation();
      return;
    }
    // this gets applied to the input's up/down arrow increment/decrement
    const complementaryBump = 9;
    this.shiftKeyChannelAdjustment =
      key === "ArrowUp" && shiftKey
        ? complementaryBump
        : key === "ArrowDown" && shiftKey
          ? -complementaryBump
          : 0;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    this.el.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_6__.a)(this);
    const { allowEmpty, color: color$1, format, value } = this;
    const willSetNoColor = allowEmpty && !value;
    const parsedMode = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.p)(value);
    const valueIsCompatible = willSetNoColor || (format === "auto" && parsedMode) || format === parsedMode;
    const initialColor = willSetNoColor ? null : valueIsCompatible ? (0,_index2_js__WEBPACK_IMPORTED_MODULE_0__.c)(value) : color$1;
    if (!valueIsCompatible) {
      this.showIncompatibleColorWarning(value, format);
    }
    this.setMode(format, false);
    this.internalColorSet(initialColor, false, "initial");
    this.updateDimensions(this.scale);
    const storageKey = `${_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.c}${this.storageId}`;
    if (this.storageId && localStorage.getItem(storageKey)) {
      this.savedColors = JSON.parse(localStorage.getItem(storageKey));
    }
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_9__.s)(this);
  }
  connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_9__.c)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
  }
  disconnectedCallback() {
    document.removeEventListener("pointermove", this.globalPointerMoveHandler);
    document.removeEventListener("pointerup", this.globalPointerUpHandler);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_9__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_4__.u)(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  render() {
    const { allowEmpty, channelsDisabled, color, colorFieldScopeLeft, colorFieldScopeTop, dimensions: { slider: { width: sliderWidth }, thumb: { radius: thumbRadius }, }, hexDisabled, hideChannels, hideHex, hideSaved, hueScopeLeft, messages, alphaChannel, opacityScopeLeft, savedColors, savedDisabled, scale, scopeOrientation, } = this;
    const selectedColorInHex = color ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.h)(color, alphaChannel) : null;
    const hueTop = thumbRadius;
    const hueLeft = hueScopeLeft ?? (sliderWidth * _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.D.hue()) / _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.H.h;
    const opacityTop = thumbRadius;
    const opacityLeft = opacityScopeLeft ??
      (sliderWidth * (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.b)(_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.D.alpha())) / _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.O.max;
    const noColor = color === null;
    const vertical = scopeOrientation === "vertical";
    const noHex = hexDisabled || hideHex;
    const noChannels = channelsDisabled || hideChannels;
    const noSaved = savedDisabled || hideSaved;
    const [adjustedColorFieldScopeLeft, adjustedColorFieldScopeTop] = this.getAdjustedScopePosition(colorFieldScopeLeft, colorFieldScopeTop);
    const [adjustedHueScopeLeft, adjustedHueScopeTop] = this.getAdjustedScopePosition(hueLeft, hueTop);
    const [adjustedOpacityScopeLeft, adjustedOpacityScopeTop] = this.getAdjustedScopePosition(opacityLeft, opacityTop);
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("div", { class: _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.container }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("div", { class: _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.controlAndScope }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("canvas", { class: _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.colorField, onPointerDown: this.handleColorFieldPointerDown,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.initColorField }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("div", { "aria-label": vertical ? messages.value : messages.saturation, "aria-valuemax": vertical ? _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.H.v : _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.H.s, "aria-valuemin": "0", "aria-valuenow": (vertical ? color?.saturationv() : color?.value()) || "0", class: { [_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.scope]: true, [_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.colorFieldScope]: true }, onKeyDown: this.handleColorFieldScopeKeyDown, role: "slider", style: {
        top: `${adjustedColorFieldScopeTop || 0}px`,
        left: `${adjustedColorFieldScopeLeft || 0}px`,
      }, tabindex: "0",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.storeColorFieldScope })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("div", { class: _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.previewAndSliders }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("calcite-color-picker-swatch", { class: _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.preview, color: selectedColorInHex, scale: "l" }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("div", { class: _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.sliders }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("div", { class: _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.controlAndScope }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("canvas", { class: { [_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.slider]: true, [_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.hueSlider]: true }, onPointerDown: this.handleHueSliderPointerDown,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.initHueSlider }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("div", { "aria-label": messages.hue, "aria-valuemax": _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.H.h, "aria-valuemin": "0", "aria-valuenow": color?.round().hue() || _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.D.round().hue(), class: { [_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.scope]: true, [_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.hueScope]: true }, onKeyDown: this.handleHueScopeKeyDown, role: "slider", style: {
        top: `${adjustedHueScopeTop}px`,
        left: `${adjustedHueScopeLeft}px`,
      }, tabindex: "0",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.storeHueScope })), alphaChannel ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("div", { class: _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.controlAndScope }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("canvas", { class: { [_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.slider]: true, [_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.opacitySlider]: true }, onPointerDown: this.handleOpacitySliderPointerDown,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.initOpacitySlider }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("div", { "aria-label": messages.opacity, "aria-valuemax": _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.O.max, "aria-valuemin": _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.O.min, "aria-valuenow": (color || _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.D).round().alpha(), class: { [_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.scope]: true, [_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.opacityScope]: true }, onKeyDown: this.handleOpacityScopeKeyDown, role: "slider", style: {
        top: `${adjustedOpacityScopeTop}px`,
        left: `${adjustedOpacityScopeLeft}px`,
      }, tabindex: "0",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.storeOpacityScope }))) : null)), noHex && noChannels ? null : ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("div", { class: {
        [_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.controlSection]: true,
        [_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.section]: true,
      } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("div", { class: _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.hexAndChannelsGroup }, noHex ? null : ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("div", { class: _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.hexOptions }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("calcite-color-picker-hex-input", { allowEmpty: allowEmpty, alphaChannel: alphaChannel, class: _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.control, messages: messages, numberingSystem: this.numberingSystem, onCalciteColorPickerHexInputChange: this.handleHexInputChange, scale: scale, value: selectedColorInHex }))), noChannels ? null : ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("calcite-tabs", { class: {
        [_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.colorModeContainer]: true,
        [_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.splitSection]: true,
      }, scale: scale === "l" ? "m" : "s" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("calcite-tab-nav", { slot: "title-group" }, this.renderChannelsTabTitle("rgb"), this.renderChannelsTabTitle("hsv")), this.renderChannelsTab("rgb"), this.renderChannelsTab("hsv")))))), noSaved ? null : ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("div", { class: { [_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.savedColorsSection]: true, [_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.section]: true } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("div", { class: _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.header }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("label", null, messages.saved), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("div", { class: _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.savedColorsButtons }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("calcite-button", { appearance: "transparent", class: _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.deleteColor, disabled: noColor, iconStart: "minus", kind: "neutral", label: messages.deleteColor, onClick: this.deleteColor, scale: scale, type: "button" }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("calcite-button", { appearance: "transparent", class: _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.saveColor, disabled: noColor, iconStart: "plus", kind: "neutral", label: messages.saveColor, onClick: this.saveColor, scale: scale, type: "button" }))), savedColors.length > 0 ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("div", { class: _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.savedColors }, [
      ...savedColors.map((color) => ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_22__.h)("calcite-color-picker-swatch", { class: _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.C.savedColor, color: color, key: color, onClick: this.handleSavedColorSelect, onKeyDown: this.handleSavedColorKeyDown, scale: scale, tabIndex: 0 }))),
    ])) : null))));
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }
  showIncompatibleColorWarning(value, format) {
    console.warn(`ignoring color value (${value}) as it is not compatible with the current format (${format})`);
  }
  setMode(format, warn = true) {
    const mode = format === "auto" ? this.mode : format;
    this.mode = this.ensureCompatibleMode(mode, warn);
  }
  ensureCompatibleMode(mode, warn) {
    const { alphaChannel } = this;
    const isAlphaCompatible = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.a)(mode);
    if (alphaChannel && !isAlphaCompatible) {
      const alphaMode = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.f)(mode);
      if (warn) {
        console.warn(`setting format to (${alphaMode}) as the provided one (${mode}) does not support alpha`);
      }
      return alphaMode;
    }
    if (!alphaChannel && isAlphaCompatible) {
      const nonAlphaMode = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.t)(mode);
      if (warn) {
        console.warn(`setting format to (${nonAlphaMode}) as the provided one (${mode}) does not support alpha`);
      }
      return nonAlphaMode;
    }
    return mode;
  }
  captureHueSliderColor(x) {
    const { dimensions: { slider: { width }, }, } = this;
    const hue = (_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.b / width) * x;
    this.internalColorSet(this.baseColorFieldColor.hue(hue), false);
  }
  captureOpacitySliderValue(x) {
    const { dimensions: { slider: { width }, }, } = this;
    const alpha = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.o)((_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.O.max / width) * x);
    this.internalColorSet(this.baseColorFieldColor.alpha(alpha), false);
  }
  internalColorSet(color, skipEqual = true, context = "user-interaction") {
    if (skipEqual && (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.c)(color, this.color)) {
      return;
    }
    this.internalColorUpdateContext = context;
    this.color = color;
    this.value = this.toValue(color);
    this.internalColorUpdateContext = null;
  }
  toValue(color, format = this.mode) {
    if (!color) {
      return null;
    }
    const hexMode = "hex";
    if (format.includes(hexMode)) {
      const hasAlpha = format === _utils_js__WEBPACK_IMPORTED_MODULE_3__.C.HEXA;
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.n)((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.h)(color.round(), hasAlpha), hasAlpha);
    }
    if (format.includes("-css")) {
      const value = color[format.replace("-css", "").replace("a", "")]().round().string();
      // Color omits alpha values when alpha is 1
      const needToInjectAlpha = (format.endsWith("a") || format.endsWith("a-css")) && color.alpha() === 1;
      if (needToInjectAlpha) {
        const model = value.slice(0, 3);
        const values = value.slice(4, -1);
        return `${model}a(${values}, ${color.alpha()})`;
      }
      return value;
    }
    const colorObject = 
    /* Color() does not support hsva, hsla nor rgba, so we use the non-alpha mode */
    color[(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.t)(format)]().round().object();
    if (format.endsWith("a")) {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.d)(colorObject);
    }
    return colorObject;
  }
  getSliderCapSpacing() {
    const { dimensions: { slider: { height }, thumb: { radius }, }, } = this;
    return radius * 2 - height;
  }
  updateDimensions(scale = "m") {
    this.dimensions = _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.a[scale];
  }
  drawColorField() {
    const context = this.colorFieldRenderingContext;
    const { dimensions: { colorField: { height, width }, }, } = this;
    context.fillStyle = this.baseColorFieldColor
      .hsv()
      .saturationv(100)
      .value(100)
      .alpha(1)
      .string();
    context.fillRect(0, 0, width, height);
    const whiteGradient = context.createLinearGradient(0, 0, width, 0);
    whiteGradient.addColorStop(0, "rgba(255,255,255,1)");
    whiteGradient.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = whiteGradient;
    context.fillRect(0, 0, width, height);
    const blackGradient = context.createLinearGradient(0, 0, 0, height);
    blackGradient.addColorStop(0, "rgba(0,0,0,0)");
    blackGradient.addColorStop(1, "rgba(0,0,0,1)");
    context.fillStyle = blackGradient;
    context.fillRect(0, 0, width, height);
    this.drawActiveColorFieldColor();
  }
  setCanvasContextSize(canvas, { height, width }) {
    if (!canvas) {
      return;
    }
    const devicePixelRatio = window.devicePixelRatio || 1;
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    canvas.style.height = `${height}px`;
    canvas.style.width = `${width}px`;
    const context = canvas.getContext("2d");
    context.scale(devicePixelRatio, devicePixelRatio);
  }
  updateCanvasSize(context = "all") {
    const { dimensions } = this;
    if (context === "all" || context === "color-field") {
      this.setCanvasContextSize(this.colorFieldRenderingContext?.canvas, dimensions.colorField);
    }
    const adjustedSliderDimensions = {
      width: dimensions.slider.width,
      height: dimensions.slider.height + (dimensions.thumb.radius - dimensions.slider.height / 2) * 2,
    };
    if (context === "all" || context === "hue-slider") {
      this.setCanvasContextSize(this.hueSliderRenderingContext?.canvas, adjustedSliderDimensions);
    }
    if (context === "all" || context === "opacity-slider") {
      this.setCanvasContextSize(this.opacitySliderRenderingContext?.canvas, adjustedSliderDimensions);
    }
  }
  drawActiveColorFieldColor() {
    const { color } = this;
    if (!color) {
      return;
    }
    const hsvColor = color.hsv();
    const { dimensions: { colorField: { height, width }, thumb: { radius }, }, } = this;
    const x = hsvColor.saturationv() / (_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.H.s / width);
    const y = height - hsvColor.value() / (_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.H.v / height);
    requestAnimationFrame(() => {
      this.colorFieldScopeLeft = x;
      this.colorFieldScopeTop = y;
    });
    this.drawThumb(this.colorFieldRenderingContext, radius, x, y, hsvColor);
  }
  drawThumb(context, radius, x, y, color) {
    const startAngle = 0;
    const endAngle = 2 * Math.PI;
    const outlineWidth = 1;
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle);
    context.fillStyle = "#fff";
    context.fill();
    context.strokeStyle = "rgba(0,0,0,0.3)";
    context.lineWidth = outlineWidth;
    context.stroke();
    context.beginPath();
    context.arc(x, y, radius - 3, startAngle, endAngle);
    context.fillStyle = color.rgb().alpha(1).string();
    context.fill();
  }
  drawActiveHueSliderColor() {
    const { color } = this;
    if (!color) {
      return;
    }
    const hsvColor = color.hsv().saturationv(100).value(100);
    const { dimensions: { slider: { width }, thumb: { radius }, }, } = this;
    const x = hsvColor.hue() / (_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.b / width);
    const y = radius;
    const sliderBoundX = this.getSliderBoundX(x, width, radius);
    requestAnimationFrame(() => {
      this.hueScopeLeft = sliderBoundX;
    });
    this.drawThumb(this.hueSliderRenderingContext, radius, sliderBoundX, y, hsvColor);
  }
  drawHueSlider() {
    const context = this.hueSliderRenderingContext;
    const { dimensions: { slider: { height, width }, thumb: { radius: thumbRadius }, }, } = this;
    const x = 0;
    const y = thumbRadius - height / 2;
    const gradient = context.createLinearGradient(0, 0, width, 0);
    const hueSliderColorStopKeywords = [
      "red",
      "yellow",
      "lime",
      "cyan",
      "blue",
      "magenta",
      "#ff0004" /* 1 unit less than #ff0 to avoid duplicate values within range */,
    ];
    const offset = 1 / (hueSliderColorStopKeywords.length - 1);
    let currentOffset = 0;
    hueSliderColorStopKeywords.forEach((keyword) => {
      gradient.addColorStop(currentOffset, (0,_index2_js__WEBPACK_IMPORTED_MODULE_0__.c)(keyword).string());
      currentOffset += offset;
    });
    context.clearRect(0, 0, width, height + this.getSliderCapSpacing() * 2);
    this.drawSliderPath(context, height, width, x, y);
    context.fillStyle = gradient;
    context.fill();
    context.strokeStyle = "rgba(0,0,0,0.3)";
    context.lineWidth = 1;
    context.stroke();
    this.drawActiveHueSliderColor();
  }
  drawOpacitySlider() {
    const context = this.opacitySliderRenderingContext;
    const { baseColorFieldColor: previousColor, dimensions: { slider: { height, width }, thumb: { radius: thumbRadius }, }, } = this;
    const x = 0;
    const y = thumbRadius - height / 2;
    context.clearRect(0, 0, width, height + this.getSliderCapSpacing() * 2);
    const gradient = context.createLinearGradient(0, y, width, 0);
    const startColor = previousColor.rgb().alpha(0);
    const midColor = previousColor.rgb().alpha(0.5);
    const endColor = previousColor.rgb().alpha(1);
    gradient.addColorStop(0, startColor.string());
    gradient.addColorStop(0.5, midColor.string());
    gradient.addColorStop(1, endColor.string());
    this.drawSliderPath(context, height, width, x, y);
    const pattern = context.createPattern(this.getCheckeredBackgroundPattern(), "repeat");
    context.fillStyle = pattern;
    context.fill();
    context.fillStyle = gradient;
    context.fill();
    context.strokeStyle = "rgba(0,0,0,0.3)";
    context.lineWidth = 1;
    context.stroke();
    this.drawActiveOpacitySliderColor();
  }
  drawSliderPath(context, height, width, x, y) {
    const radius = height / 2 + 1;
    context.beginPath();
    context.moveTo(x + radius, y);
    context.lineTo(x + width - radius, y);
    context.quadraticCurveTo(x + width, y, x + width, y + radius);
    context.lineTo(x + width, y + height - radius);
    context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    context.lineTo(x + radius, y + height);
    context.quadraticCurveTo(x, y + height, x, y + height - radius);
    context.lineTo(x, y + radius);
    context.quadraticCurveTo(x, y, x + radius, y);
    context.closePath();
  }
  getCheckeredBackgroundPattern() {
    if (this.checkerPattern) {
      return this.checkerPattern;
    }
    const pattern = document.createElement("canvas");
    pattern.width = 10;
    pattern.height = 10;
    const patternContext = pattern.getContext("2d");
    patternContext.fillStyle = "#ccc";
    patternContext.fillRect(0, 0, 10, 10);
    patternContext.fillStyle = "#fff";
    patternContext.fillRect(0, 0, 5, 5);
    patternContext.fillRect(5, 5, 5, 5);
    this.checkerPattern = pattern;
    return pattern;
  }
  drawActiveOpacitySliderColor() {
    const { color } = this;
    if (!color) {
      return;
    }
    const hsvColor = color;
    const { dimensions: { slider: { width }, thumb: { radius }, }, } = this;
    const x = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.b)(hsvColor.alpha()) / (_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.O.max / width);
    const y = radius;
    const sliderBoundX = this.getSliderBoundX(x, width, radius);
    requestAnimationFrame(() => {
      this.opacityScopeLeft = sliderBoundX;
    });
    this.drawThumb(this.opacitySliderRenderingContext, radius, sliderBoundX, y, hsvColor);
  }
  getSliderBoundX(x, width, radius) {
    const closeToEdge = (0,_math_js__WEBPACK_IMPORTED_MODULE_8__.a)(x, width, radius);
    return closeToEdge === 0
      ? x
      : closeToEdge === -1
        ? (0,_math_js__WEBPACK_IMPORTED_MODULE_8__.r)(x, 0, width, radius, radius * 2)
        : (0,_math_js__WEBPACK_IMPORTED_MODULE_8__.r)(x, 0, width, width - radius * 2, width - radius);
  }
  updateColorFromChannels(channels) {
    this.internalColorSet((0,_index2_js__WEBPACK_IMPORTED_MODULE_0__.c)(channels, this.channelMode));
  }
  updateChannelsFromColor(color) {
    this.channels = color ? this.toChannels(color) : [null, null, null, null];
  }
  toChannels(color) {
    const { channelMode } = this;
    const channels = color[channelMode]()
      .array()
      .map((value, index) => {
      const isAlpha = index === 3;
      return isAlpha ? value : Math.floor(value);
    });
    if (channels.length === 3) {
      channels.push(1); // Color omits alpha when 1
    }
    return channels;
  }
  getAdjustedScopePosition(left, top) {
    return [left - _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.S / 2, top - _color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.S / 2];
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "alphaChannel": ["handleAlphaChannelChange", "handleFormatOrAlphaChannelChange"],
    "color": ["handleColorChange"],
    "format": ["handleFormatOrAlphaChannelChange"],
    "scale": ["handleScaleChange"],
    "messageOverrides": ["onMessagesChange"],
    "value": ["handleValueChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return colorPickerCss; }
}, [17, "calcite-color-picker", {
    "allowEmpty": [516, "allow-empty"],
    "alphaChannel": [4, "alpha-channel"],
    "channelsDisabled": [4, "channels-disabled"],
    "color": [1040],
    "disabled": [516],
    "format": [513],
    "hideChannels": [516, "hide-channels"],
    "hexDisabled": [4, "hex-disabled"],
    "hideHex": [516, "hide-hex"],
    "hideSaved": [516, "hide-saved"],
    "savedDisabled": [516, "saved-disabled"],
    "scale": [513],
    "storageId": [513, "storage-id"],
    "messageOverrides": [1040],
    "numberingSystem": [513, "numbering-system"],
    "value": [1025],
    "messages": [1040],
    "defaultMessages": [32],
    "channelMode": [32],
    "channels": [32],
    "dimensions": [32],
    "effectiveLocale": [32],
    "savedColors": [32],
    "colorFieldScopeTop": [32],
    "colorFieldScopeLeft": [32],
    "hueScopeLeft": [32],
    "opacityScopeLeft": [32],
    "scopeOrientation": [32],
    "setFocus": [64]
  }, [[2, "keydown", "handleChannelKeyUpOrDown"], [2, "keyup", "handleChannelKeyUpOrDown"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-color-picker", "calcite-button", "calcite-color-picker-hex-input", "calcite-color-picker-swatch", "calcite-icon", "calcite-input-number", "calcite-input-text", "calcite-loader", "calcite-progress", "calcite-tab", "calcite-tab-nav", "calcite-tab-title", "calcite-tabs"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-color-picker":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ColorPicker);
      }
      break;
    case "calcite-button":
      if (!customElements.get(tagName)) {
        (0,_button_js__WEBPACK_IMPORTED_MODULE_10__.d)();
      }
      break;
    case "calcite-color-picker-hex-input":
      if (!customElements.get(tagName)) {
        (0,_color_picker_hex_input_js__WEBPACK_IMPORTED_MODULE_2__.d)();
      }
      break;
    case "calcite-color-picker-swatch":
      if (!customElements.get(tagName)) {
        (0,_color_picker_swatch_js__WEBPACK_IMPORTED_MODULE_11__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_12__.d)();
      }
      break;
    case "calcite-input-number":
      if (!customElements.get(tagName)) {
        (0,_input_number_js__WEBPACK_IMPORTED_MODULE_13__.d)();
      }
      break;
    case "calcite-input-text":
      if (!customElements.get(tagName)) {
        (0,_input_text_js__WEBPACK_IMPORTED_MODULE_14__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_15__.d)();
      }
      break;
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        (0,_progress_js__WEBPACK_IMPORTED_MODULE_16__.d)();
      }
      break;
    case "calcite-tab":
      if (!customElements.get(tagName)) {
        (0,_tab_js__WEBPACK_IMPORTED_MODULE_17__.d)();
      }
      break;
    case "calcite-tab-nav":
      if (!customElements.get(tagName)) {
        (0,_tab_nav_js__WEBPACK_IMPORTED_MODULE_18__.d)();
      }
      break;
    case "calcite-tab-title":
      if (!customElements.get(tagName)) {
        (0,_tab_title_js__WEBPACK_IMPORTED_MODULE_19__.d)();
      }
      break;
    case "calcite-tabs":
      if (!customElements.get(tagName)) {
        (0,_tabs_js__WEBPACK_IMPORTED_MODULE_20__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteColorPicker = ColorPicker;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/color-picker-swatch.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/color-picker-swatch.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ ColorPickerSwatch),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _index2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index2.js */ "./node_modules/@esri/calcite-components/dist/components/index2.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@esri/calcite-components/dist/components/utils.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */





const CSS = {
  swatch: "swatch",
  noColorSwatch: "swatch--no-color",
  checker: "checker",
};
const COLORS = {
  borderLight: "rgba(0, 0, 0, 0.3)",
  borderDark: "rgba(255, 255, 255, 0.15)",
};
const checkerSquareSize = 4;
const CHECKER_DIMENSIONS = {
  squareSize: checkerSquareSize,
  size: checkerSquareSize * 2,
};

const colorPickerSwatchCss = ":host{position:relative;display:inline-flex}:host([scale=s]){block-size:1.25rem;inline-size:1.25rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem}.swatch{overflow:hidden;block-size:inherit;inline-size:inherit}.swatch rect{transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.swatch--no-color rect{fill:var(--calcite-ui-foreground-1)}.swatch--no-color line{stroke:var(--calcite-ui-danger)}.checker{fill:#cacaca}:host([hidden]){display:none}[hidden]{display:none}";

const ColorPickerSwatch = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.active = false;
    this.color = undefined;
    this.scale = "m";
  }
  handleColorChange(color$1) {
    this.internalColor = color$1 ? (0,_index2_js__WEBPACK_IMPORTED_MODULE_0__.c)(color$1) : null;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.handleColorChange(this.color);
  }
  render() {
    const isEmpty = !this.internalColor;
    const classes = {
      [CSS.swatch]: true,
      [CSS.noColorSwatch]: isEmpty,
    };
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("svg", { class: classes, xmlns: "http://www.w3.org/2000/svg" }, this.renderSwatch()));
  }
  renderSwatch() {
    const { active, el, internalColor } = this;
    const borderRadius = active ? "100%" : "0";
    const theme = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.r)(el);
    const borderColor = theme === "light" ? COLORS.borderLight : COLORS.borderDark;
    const commonSwatchProps = {
      height: "100%",
      rx: borderRadius,
      stroke: borderColor,
      // stroke-width and clip-path are needed to hide overflowing portion of stroke
      // see https://stackoverflow.com/a/7273346/194216
      // using attribute to work around Stencil using the prop name vs the attribute when rendering
      ["stroke-width"]: "2",
      width: "100%",
    };
    const isEmpty = !internalColor;
    if (isEmpty) {
      return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("clipPath", { id: "shape" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("rect", { height: "100%", rx: borderRadius, width: "100%" })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("rect", { "clip-path": `inset(0 round ${borderRadius})`, rx: borderRadius, ...commonSwatchProps }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("line", { "clip-path": "url(#shape)", "stroke-width": "3", x1: "100%", x2: "0", y1: "0", y2: "100%" })));
    }
    const alpha = internalColor.alpha();
    const hex = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.h)(internalColor);
    const hexa = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.h)(internalColor, alpha < 1);
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("title", null, hexa), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("defs", null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("pattern", { height: CHECKER_DIMENSIONS.size, id: "checker", patternUnits: "userSpaceOnUse", width: CHECKER_DIMENSIONS.size, x: "0", y: "0" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("rect", { class: CSS.checker, height: CHECKER_DIMENSIONS.squareSize, width: CHECKER_DIMENSIONS.squareSize, x: "0", y: "0" }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("rect", { class: CSS.checker, height: CHECKER_DIMENSIONS.squareSize, width: CHECKER_DIMENSIONS.squareSize, x: CHECKER_DIMENSIONS.squareSize, y: CHECKER_DIMENSIONS.squareSize }))), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("rect", { fill: "url(#checker)", height: "100%", rx: borderRadius, width: "100%" }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("rect", { fill: hex, style: {
        "clip-path": alpha < 1 ? "polygon(100% 0, 0 0, 0 100%)" : `inset(0 round ${borderRadius})`,
      }, ...commonSwatchProps }), alpha < 1 ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_3__.h)("rect", { fill: hexa, key: "opacity-fill", style: { "clip-path": "polygon(100% 0, 100% 100%, 0 100%)" }, ...commonSwatchProps })) : null));
  }
  get el() { return this; }
  static get watchers() { return {
    "color": ["handleColorChange"]
  }; }
  static get style() { return colorPickerSwatchCss; }
}, [1, "calcite-color-picker-swatch", {
    "active": [516],
    "color": [1],
    "scale": [513]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-color-picker-swatch"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-color-picker-swatch":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ColorPickerSwatch);
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/math.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/math.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ closeToRangeEdge),
/* harmony export */   c: () => (/* binding */ clamp),
/* harmony export */   d: () => (/* binding */ decimalPlaces),
/* harmony export */   g: () => (/* binding */ getDecimals),
/* harmony export */   r: () => (/* binding */ remap)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const clamp = (value, min, max) => Math.max(min, Math.min(value, max));
const decimalNumberRegex = new RegExp(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
/**
 * Returns the quantity of real decimal places for a number, which excludes trailing zeros.
 *
 * Adapted from {@link https://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number}.
 *
 * @param decimal - decimal value
 * @param value
 * @returns {number} the amount of decimal places in a number
 */
const decimalPlaces = (value) => {
  const match = ("" + value).match(decimalNumberRegex);
  if (!match || parseInt(match[1]) === 0) {
    return 0;
  }
  return Math.max(0, 
  // Number of digits right of decimal point.
  (match[1] ? match[1].length : 0) -
    // Adjust for scientific notation.
    (match[2] ? +match[2] : 0));
};
function getDecimals(value) {
  if (decimalPlaces(value) > 0 && value > 0) {
    return parseFloat(`0.${value.toString().split(".")[1]}`);
  }
  return value;
}
function remap(value, fromMin, fromMax, toMin, toMax) {
  return ((value - fromMin) * (toMax - toMin)) / (fromMax - fromMin) + toMin;
}
/**
 * Helper to determine if a value is close to the edge of a range within a threshold.
 *
 * @param value
 * @param range
 * @param threshold
 * @returns -1 if close to lower edge, 1 if close to upper edge, 0 otherwise.
 */
function closeToRangeEdge(value, range, threshold) {
  return value < threshold ? -1 : value > range - threshold ? 1 : 0;
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/tab.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/tab.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ Tab),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */




const CSS = {
  container: "container",
  content: "content",
};

const tabCss = ":host([selected]) section,:host([selected]) .container{display:block}:host{display:none;block-size:100%;inline-size:100%}:host([selected]){display:block;block-size:100%;inline-size:100%;overflow:auto}.scale-s .content{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}.scale-m .content{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}.scale-l .content{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}section,.container{display:none;block-size:100%;inline-size:100%}:host([hidden]){display:none}[hidden]{display:none}";

const Tab = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalTabRegister = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.createEvent)(this, "calciteInternalTabRegister", 6);
    this.guid = `calcite-tab-title-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_1__.g)()}`;
    this.tab = undefined;
    this.selected = false;
    this.scale = "m";
    this.labeledBy = undefined;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const id = this.el.id || this.guid;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Host, { "aria-labelledby": this.labeledBy, id: id }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", { class: { [CSS.container]: true, [`scale-${this.scale}`]: true }, role: "tabpanel", tabIndex: this.selected ? 0 : -1 }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("section", { class: CSS.content }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", null)))));
  }
  connectedCallback() {
    this.parentTabsEl = this.el.closest("calcite-tabs");
  }
  componentDidLoad() {
    this.calciteInternalTabRegister.emit();
  }
  disconnectedCallback() {
    // Dispatching to body in order to be listened by other elements that are still connected to the DOM.
    document.body?.dispatchEvent(new CustomEvent("calciteTabUnregister", {
      detail: this.el,
    }));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  internalTabChangeHandler(event) {
    const targetTabsEl = event
      .composedPath()
      .find((el) => el.tagName === "CALCITE-TABS");
    // to allow `<calcite-tabs>` to be nested we need to make sure this
    // `calciteTabChange` event was actually fired from a within the same
    // `<calcite-tabs>` that is the a parent of this tab.
    if (targetTabsEl !== this.parentTabsEl) {
      return;
    }
    if (this.tab) {
      this.selected = this.tab === event.detail.tab;
    }
    else {
      this.getTabIndex().then((index) => {
        this.selected = index === event.detail.tab;
      });
    }
    event.stopPropagation();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Returns the index of the component item within the tab array.
   */
  async getTabIndex() {
    return Array.prototype.indexOf.call((0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.o)(this.el.parentElement.children).filter((el) => el.matches("calcite-tab")), this.el);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   * @param tabIds
   * @param titleIds
   * @internal
   */
  async updateAriaInfo(tabIds = [], titleIds = []) {
    this.labeledBy = titleIds[tabIds.indexOf(this.el.id)] || null;
  }
  get el() { return this; }
  static get style() { return tabCss; }
}, [1, "calcite-tab", {
    "tab": [513],
    "selected": [1540],
    "scale": [1],
    "labeledBy": [32],
    "getTabIndex": [64],
    "updateAriaInfo": [64]
  }, [[16, "calciteInternalTabChange", "internalTabChangeHandler"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-tab"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-tab":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Tab);
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/tabs.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/tabs.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ Tabs),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const SLOTS = {
  titleGroup: "title-group",
};

const tabsCss = ":host{display:flex;flex-direction:column}:host([bordered]){box-shadow:inset 0 1px 0 var(--calcite-ui-border-1);background-color:var(--calcite-ui-foreground-1)}:host([bordered]:not([position=bottom])) ::slotted(calcite-tab-nav){margin-block-end:-1px}:host([bordered][position=bottom]){box-shadow:inset 0 1px 0 var(--calcite-ui-border-1), inset 0 -1px 0 var(--calcite-ui-border-1)}:host([bordered]) section{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1)}:host([bordered][scale=s]) section{padding:0.75rem}:host([bordered][scale=m]) section{padding:0.5rem}:host([bordered][scale=l]) section{padding:1rem}:host([position=bottom]){flex-direction:column-reverse}section{display:flex;flex-grow:1;overflow:hidden;border-block-start-width:1px;border-block-start-color:var(--calcite-ui-border-1);border-block-start-style:solid}:host([position=bottom]) section{flex-direction:column-reverse;border-block-start-width:0px;border-block-end-width:1px;border-block-end-color:var(--calcite-ui-border-1)}:host([position=bottom]:not([bordered])) section{border-block-end-style:solid}@media (forced-colors: active){:host([bordered]) section{border-block-start-width:0px;border-block-end-width:1px}:host([position=bottom][bordered]) section{border-block-start-width:1px;border-block-end-width:0px}}:host([hidden]){display:none}[hidden]{display:none}";

const Tabs = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_0__.c)("mutation", (mutationsList) => {
      for (const mutation of mutationsList) {
        const target = mutation.target;
        if (target.nodeName === "CALCITE-TAB-NAV" ||
          target.nodeName === "CALCITE-TAB-TITLE" ||
          target.nodeName === "CALCITE-TAB") {
          this.updateItems();
        }
      }
    });
    this.layout = "inline";
    this.position = "top";
    this.scale = "m";
    this.bordered = false;
    this.titles = [];
    this.tabs = [];
  }
  handleInheritableProps() {
    this.updateItems();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.mutationObserver.observe(this.el, { childList: true });
    this.updateItems();
  }
  async componentWillLoad() {
    this.updateItems();
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", { name: SLOTS.titleGroup }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("section", null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  /**
   * @param event
   * @internal
   */
  calciteInternalTabTitleRegister(event) {
    this.titles = [...this.titles, event.target];
    this.registryHandler();
    event.stopPropagation();
  }
  /**
   * @param event
   * @internal
   */
  calciteTabTitleUnregister(event) {
    this.titles = this.titles.filter((el) => el !== event.detail);
    this.registryHandler();
    event.stopPropagation();
  }
  /**
   * @param event
   * @internal
   */
  calciteInternalTabRegister(event) {
    this.tabs = [...this.tabs, event.target];
    this.registryHandler();
    event.stopPropagation();
  }
  /**
   * @param event
   * @internal
   */
  calciteTabUnregister(event) {
    this.tabs = this.tabs.filter((el) => el !== event.detail);
    this.registryHandler();
    event.stopPropagation();
  }
  updateItems() {
    const { position, scale } = this;
    const nav = this.el.querySelector("calcite-tab-nav");
    if (nav) {
      nav.position = position;
      nav.scale = scale;
    }
    Array.from(this.el.querySelectorAll("calcite-tab")).forEach((tab) => {
      if (tab.parentElement === this.el) {
        tab.scale = scale;
      }
    });
    Array.from(this.el.querySelectorAll("calcite-tab-nav > calcite-tab-title")).forEach((title) => {
      title.position = position;
      title.scale = scale;
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   *
   * Matches up elements from the internal `tabs` and `titles` to automatically
   * update the ARIA attributes and link `<calcite-tab>` and
   * `<calcite-tab-title>` components.
   */
  async registryHandler() {
    let tabIds;
    let titleIds;
    // determine if we are using `tab` based or `index` based tab identifiers.
    if (this.tabs.some((el) => el.tab) || this.titles.some((el) => el.tab)) {
      // if we are using `tab` based identifiers sort by `tab` to account for
      // possible out of order tabs and get the id of each tab
      tabIds = this.tabs.sort((a, b) => a.tab.localeCompare(b.tab)).map((el) => el.id);
      titleIds = this.titles.sort((a, b) => a.tab.localeCompare(b.tab)).map((el) => el.id);
    }
    else {
      // if we are using index based tabs then the `<calcite-tab>` and
      // `<calcite-tab-title>` might have been rendered out of order so the
      // order of `this.tabs` and `this.titles` might not reflect the DOM state,
      // and might not match each other so we need to get the index of all the
      // tabs and titles in the DOM order to match them up as a source of truth
      const tabDomIndexes = await Promise.all(this.tabs.map((el) => el.getTabIndex()));
      const titleDomIndexes = await Promise.all(this.titles.map((el) => el.getTabIndex()));
      // once we have the DOM order as a source of truth we can build the
      // matching tabIds and titleIds arrays
      tabIds = tabDomIndexes.reduce((ids, indexInDOM, registryIndex) => {
        ids[indexInDOM] = this.tabs[registryIndex].id;
        return ids;
      }, []);
      titleIds = titleDomIndexes.reduce((ids, indexInDOM, registryIndex) => {
        ids[indexInDOM] = this.titles[registryIndex].id;
        return ids;
      }, []);
    }
    // pass all our new aria information to each `<calcite-tab>` and
    // `<calcite-tab-title>` which will check if they can update their internal
    // `controlled` or `labeledBy` states and re-render if necessary
    this.tabs.forEach((el) => el.updateAriaInfo(tabIds, titleIds));
    this.titles.forEach((el) => el.updateAriaInfo(tabIds, titleIds));
  }
  get el() { return this; }
  static get watchers() { return {
    "position": ["handleInheritableProps"],
    "scale": ["handleInheritableProps"]
  }; }
  static get style() { return tabsCss; }
}, [1, "calcite-tabs", {
    "layout": [513],
    "position": [513],
    "scale": [513],
    "bordered": [4],
    "titles": [32],
    "tabs": [32]
  }, [[0, "calciteInternalTabTitleRegister", "calciteInternalTabTitleRegister"], [16, "calciteTabTitleUnregister", "calciteTabTitleUnregister"], [0, "calciteInternalTabRegister", "calciteInternalTabRegister"], [16, "calciteTabUnregister", "calciteTabUnregister"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-tabs"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-tabs":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Tabs);
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/throttle.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/throttle.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ "./node_modules/@esri/calcite-components/dist/components/debounce.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if ((0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.i)(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.d)(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNjExZmI4ODBlYmJiNjdjMzRiOWZlYmExZjc4NTA3MzEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDeUc7QUFDaEU7QUFDa0M7QUFDa0w7QUFDSTtBQUM5STtBQUNuRTtBQUM4RDtBQUNoQztBQUNKO0FBQ3dDO0FBQ3pEO0FBQ2E7QUFDZjtBQUNRO0FBQ0Y7QUFDSjtBQUNFO0FBQ0w7QUFDSTtBQUNFO0FBQ0w7QUFDVDs7QUFFOUMsMENBQTBDLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLHFCQUFxQixzQ0FBc0MsaUJBQWlCLDhDQUE4Qyx5R0FBeUcsVUFBVSxpQkFBaUIsbUNBQW1DLDRCQUE0QixrQkFBa0IsK0JBQStCLFlBQVksOENBQThDLGlCQUFpQixvQ0FBb0MsNEJBQTRCLGtCQUFrQixpQkFBaUIsb0NBQW9DLHNDQUFzQyxpQkFBaUIsNEJBQTRCLGtCQUFrQix3Q0FBd0Msd0RBQXdELCtCQUErQiw4Q0FBOEMsa0NBQWtDLGlCQUFpQixxQkFBcUIsZUFBZSxvQ0FBb0MsYUFBYSxjQUFjLHNCQUFzQiw2QkFBNkIsdUNBQXVDLGNBQWMsV0FBVyxnREFBZ0QscUJBQXFCLDRDQUE0QyxtQkFBbUIsa0JBQWtCLGFBQWEsZUFBZSxrQkFBa0IsT0FBTyxvQkFBb0Isa0JBQWtCLG1DQUFtQyxlQUFlLGdCQUFnQixxQkFBcUIsNkJBQTZCLHNDQUFzQywwQkFBMEIsYUFBYSx5RUFBeUUsb1BBQW9QLG9CQUFvQix3QkFBd0IsaUJBQWlCLHlDQUF5QyxhQUFhLG1CQUFtQixlQUFlLFNBQVMsb0RBQW9ELG1EQUFtRCx1QkFBdUIsd0RBQXdELFNBQVMsYUFBYSxzQkFBc0IsOEJBQThCLHdEQUF3RCxxQkFBcUIsYUFBYSxtQkFBbUIsNENBQTRDLG1DQUFtQyxZQUFZLFFBQVEsYUFBYSxtQkFBbUIsOEJBQThCLCtCQUErQixzQkFBc0Isd0RBQXdELFVBQVUsYUFBYSxpQkFBaUIsbUNBQW1DLGtCQUFrQiwyQkFBMkIsZUFBZSwwQkFBMEIsZUFBZSxZQUFZLG9EQUFvRCxrQkFBa0IsMEJBQTBCLG9EQUFvRCxrQkFBa0IsY0FBYyxhQUFhLFdBQVcsd0RBQXdELDhDQUE4QyxzQkFBc0IsYUFBYSxhQUFhLGlCQUFpQiwwQkFBMEIsZUFBZSxtQkFBbUIsMENBQTBDLG1CQUFtQixtQkFBbUIsbUZBQW1GLDZDQUE2QyxtQkFBbUIsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUUvckg7QUFDQSxrQ0FBa0MsMkZBQWtCLGVBQWUsZ0ZBQVc7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0ZBQVc7QUFDL0MsbUNBQW1DLG9GQUFXO0FBQzlDO0FBQ0EsZ0JBQWdCLHdDQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDLHNCQUFzQixhQUFhO0FBQ25DLHFCQUFxQixhQUFhO0FBQ2xDLHFCQUFxQixjQUFjO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkJBQTZCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyw0Q0FBWSxDQUFDLDRDQUFNLFVBQVUsNENBQWU7QUFDbkY7QUFDQSw4QkFBOEIsNkNBQUs7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkNBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx5REFBYztBQUN4QjtBQUNBLFlBQVkseURBQVUsYUFBYSx5REFBVTtBQUM3QyxZQUFZLHlEQUFVLGFBQWEseURBQVU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkNBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsNENBQWM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsVUFBVSwwQ0FBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywwQ0FBc0I7QUFDakM7QUFDQTtBQUNBLGNBQWMsbUJBQW1CO0FBQ2pDO0FBQ0EsNEVBQTRFLFlBQVk7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMENBQXNCO0FBQ2pDO0FBQ0E7QUFDQSxjQUFjLFVBQVU7QUFDeEI7QUFDQSw0RUFBNEUsWUFBWTtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywwQ0FBc0I7QUFDakM7QUFDQTtBQUNBLGNBQWMsVUFBVTtBQUN4QjtBQUNBLDRFQUE0RSxZQUFZO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDBDQUFzQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsdUJBQXVCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGNBQWMsa0JBQWtCO0FBQ2hDO0FBQ0E7QUFDQSxjQUFjLG1CQUFtQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDJDQUEyQztBQUN6RDtBQUNBO0FBQ0EsY0FBYywwRUFBQyx3QkFBd0IsT0FBTyx5REFBRyxpSUFBaUk7QUFDbEw7QUFDQTtBQUNBLGNBQWMsK0VBQStFO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMENBQWE7QUFDckM7QUFDQSxjQUFjLDBFQUFDLGtCQUFrQixPQUFPLHlEQUFHLGdEQUFnRCxFQUFFLDBFQUFDLFVBQVUsT0FBTyx5REFBRyx1QkFBdUI7QUFDekk7QUFDQTtBQUNBO0FBQ0EseURBQXlELDRDQUFjO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsY0FBYywwRUFBQywyQkFBMkIsT0FBTyx5REFBRztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxnREFBZ0Q7QUFDekQ7QUFDQTtBQUNBLDRCQUE0Qiw0Q0FBTTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseURBQTBCLENBQUMsRUFBRSxlQUFlO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNENBQU07QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHlEQUEwQixDQUFDLEVBQUUsZUFBZTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixnREFBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsY0FBYyxjQUFjLGNBQWMsZUFBZSxHQUFHLElBQUk7QUFDaEUscUNBQXFDLHlEQUFVO0FBQy9DLGdDQUFnQyx5REFBVTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHlEQUFhO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNENBQVksQ0FBQyw0Q0FBTSxDQUFDLHlEQUFhO0FBQ2xEO0FBQ0E7QUFDQSxvQ0FBb0MseURBQWE7QUFDakQsc0JBQXNCLHlEQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLDhDQUE4Qyw0Q0FBZTtBQUM3RCxtRUFBbUUsT0FBTztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNENBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2Q0FBSywrQ0FBK0MsNENBQWU7QUFDM0UsVUFBVSw0Q0FBYztBQUN4QjtBQUNBLDBCQUEwQiw0Q0FBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHlEQUFhO0FBQzVEO0FBQ0E7QUFDQSxJQUFJLDBDQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCO0FBQ0Esb0VBQW9FLHlEQUFHO0FBQ3ZFO0FBQ0E7QUFDQSxZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtDQUFrQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBc0I7QUFDMUIsWUFBWSw0Q0FBNEM7QUFDeEQ7QUFDQSx1QkFBdUIsNENBQVM7QUFDaEM7QUFDQSxxRUFBcUUsNkNBQUs7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlEQUEwQixDQUFDLEVBQUUsZUFBZTtBQUN0RTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDBDQUFhO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJLGtEQUFrQjtBQUN0QixJQUFJLDZDQUFnQjtBQUNwQixJQUFJLDBDQUFlO0FBQ25CO0FBQ0E7QUFDQSxJQUFJLCtDQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQXFCO0FBQ3pCLElBQUksNkNBQW1CO0FBQ3ZCLElBQUksMENBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxJQUFJLGtEQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNEZBQTRGLFVBQVUsb0JBQW9CLFdBQVcscUJBQXFCLEdBQUcsZ0tBQWdLO0FBQ3pVLHVDQUF1Qyw0Q0FBTTtBQUM3QztBQUNBLG1EQUFtRCx5REFBYSxVQUFVLHlEQUFVO0FBQ3BGO0FBQ0E7QUFDQSxxQkFBcUIsNENBQWMsQ0FBQyx5REFBYSxhQUFhLHlEQUFjO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBFQUFDLFVBQVUsT0FBTyx5REFBRyxZQUFZLEVBQUUsMEVBQUMsVUFBVSxPQUFPLHlEQUFHLGtCQUFrQixFQUFFLDBFQUFDLGFBQWEsT0FBTyx5REFBRztBQUNoSDtBQUNBLGdDQUFnQyxHQUFHLDBFQUFDLFVBQVUsMkZBQTJGLHlEQUFVLEtBQUsseURBQVUsK0dBQStHLENBQUMseURBQUcsZ0JBQWdCLHlEQUFHLHlCQUF5QjtBQUNqVSxnQkFBZ0IsZ0NBQWdDO0FBQ2hELGlCQUFpQixpQ0FBaUM7QUFDbEQsT0FBTztBQUNQO0FBQ0Esc0NBQXNDLElBQUksMEVBQUMsVUFBVSxPQUFPLHlEQUFHLG9CQUFvQixFQUFFLDBFQUFDLGtDQUFrQyxPQUFPLHlEQUFHLGlEQUFpRCxHQUFHLDBFQUFDLFVBQVUsT0FBTyx5REFBRyxVQUFVLEVBQUUsMEVBQUMsVUFBVSxPQUFPLHlEQUFHLGtCQUFrQixFQUFFLDBFQUFDLGFBQWEsU0FBUyxDQUFDLHlEQUFHLGlCQUFpQix5REFBRyxtQkFBbUI7QUFDbFU7QUFDQSwrQkFBK0IsR0FBRywwRUFBQyxVQUFVLDZDQUE2Qyx5REFBVSxtRUFBbUUseURBQWEseUJBQXlCLENBQUMseURBQUcsZ0JBQWdCLHlEQUFHLGtCQUFrQjtBQUN0UCxnQkFBZ0Isb0JBQW9CO0FBQ3BDLGlCQUFpQixxQkFBcUI7QUFDdEMsT0FBTztBQUNQO0FBQ0EsK0JBQStCLG9CQUFvQiwwRUFBQyxVQUFVLE9BQU8seURBQUcsa0JBQWtCLEVBQUUsMEVBQUMsYUFBYSxTQUFTLENBQUMseURBQUcsaUJBQWlCLHlEQUFHLHVCQUF1QjtBQUNsSztBQUNBLG1DQUFtQyxHQUFHLDBFQUFDLFVBQVUsaURBQWlELHlEQUFjLHVCQUF1Qix5REFBYyxpQ0FBaUMseURBQWEsNEJBQTRCLENBQUMseURBQUcsZ0JBQWdCLHlEQUFHLHNCQUFzQjtBQUM1USxnQkFBZ0Isd0JBQXdCO0FBQ3hDLGlCQUFpQix5QkFBeUI7QUFDMUMsT0FBTztBQUNQO0FBQ0EsbUNBQW1DLDRDQUE0QywwRUFBQyxVQUFVO0FBQzFGLFNBQVMseURBQUc7QUFDWixTQUFTLHlEQUFHO0FBQ1osU0FBUyxFQUFFLDBFQUFDLFVBQVUsT0FBTyx5REFBRyxzQkFBc0Isa0JBQWtCLDBFQUFDLFVBQVUsT0FBTyx5REFBRyxhQUFhLEVBQUUsMEVBQUMscUNBQXFDLDJEQUEyRCx5REFBRyw2S0FBNkssMEJBQTBCLDBFQUFDLG1CQUFtQjtBQUMzYSxTQUFTLHlEQUFHO0FBQ1osU0FBUyx5REFBRztBQUNaLE9BQU8sb0NBQW9DLEVBQUUsMEVBQUMsc0JBQXNCLHFCQUFxQixnS0FBZ0ssMEVBQUMsVUFBVSxTQUFTLENBQUMseURBQUcsNkJBQTZCLHlEQUFHLG1CQUFtQixFQUFFLDBFQUFDLFVBQVUsT0FBTyx5REFBRyxTQUFTLEVBQUUsMEVBQUMsaUNBQWlDLDBFQUFDLFVBQVUsT0FBTyx5REFBRyxxQkFBcUIsRUFBRSwwRUFBQyxxQkFBcUIsa0NBQWtDLHlEQUFHLDRKQUE0SixHQUFHLDBFQUFDLHFCQUFxQixrQ0FBa0MseURBQUcscUpBQXFKLCtCQUErQiwwRUFBQyxVQUFVLE9BQU8seURBQUcsY0FBYztBQUNoNkIscUNBQXFDLDBFQUFDLGtDQUFrQyxPQUFPLHlEQUFHLGlKQUFpSjtBQUNuTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxNQUFNLHFEQUFxRCxPQUFPO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZUFBZTtBQUMzQiw4QkFBOEIsNENBQWU7QUFDN0M7QUFDQSx3QkFBd0IsNENBQVc7QUFDbkM7QUFDQSwyQ0FBMkMsVUFBVSx5QkFBeUIsS0FBSztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw0Q0FBYztBQUN6QztBQUNBLDJDQUEyQyxhQUFhLHlCQUF5QixLQUFLO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYyxVQUFVLE9BQU8sR0FBRyxJQUFJO0FBQ2xELGlCQUFpQix5REFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjLFVBQVUsT0FBTyxHQUFHLElBQUk7QUFDbEQsa0JBQWtCLDRDQUFjLEVBQUUseURBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRDQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHdDQUFZO0FBQzlDLGFBQWEsNENBQVksQ0FBQyw0Q0FBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE1BQU0sSUFBSSxPQUFPLElBQUksY0FBYztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw0Q0FBYztBQUN4QjtBQUNBLGFBQWEsNENBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWMsVUFBVSxRQUFRLFdBQVcsUUFBUSxHQUFHLElBQUk7QUFDdEU7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlEQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYyxjQUFjLGVBQWUsR0FBRyxJQUFJO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEMsNEJBQTRCLE1BQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjLGNBQWMsZUFBZSxXQUFXLFFBQVEsR0FBRyxJQUFJO0FBQ2pGLHdDQUF3Qyx5REFBVTtBQUNsRCwyQ0FBMkMseURBQVU7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjLFVBQVUsT0FBTyxXQUFXLFFBQVEsR0FBRyxJQUFJO0FBQ3JFLGdDQUFnQyx5REFBcUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWMsVUFBVSxlQUFlLFdBQVcscUJBQXFCLEdBQUcsSUFBSTtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsNkNBQUs7QUFDaEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0RBQWtELFVBQVUsZUFBZSxXQUFXLHFCQUFxQixHQUFHLElBQUk7QUFDOUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWMsVUFBVSxPQUFPLFdBQVcsUUFBUSxHQUFHLElBQUk7QUFDckUsY0FBYyw0Q0FBYyxzQkFBc0IseURBQWM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJDQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxVQUFVLDJDQUFLO0FBQ2YsVUFBVSwyQ0FBSztBQUNmO0FBQ0E7QUFDQSwwQkFBMEIsNkNBQUs7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlEQUFVLFlBQVkseURBQVU7QUFDbkQ7QUFDQSxnQ0FBZ0M7QUFDaEMsNEJBQTRCO0FBQzVCLGFBQWE7QUFDYiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0Q0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdEQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkNBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNENBQXFCO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4L0JuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NHO0FBQzdEO0FBQ0c7QUFDSDs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0Msa0JBQWtCLG9CQUFvQixpQkFBaUIsbUJBQW1CLG9CQUFvQixpQkFBaUIsa0JBQWtCLG1CQUFtQixpQkFBaUIsZ0JBQWdCLGlCQUFpQixRQUFRLGdCQUFnQixtQkFBbUIsb0JBQW9CLGFBQWEsd0JBQXdCLDBCQUEwQix3REFBd0QsdUJBQXVCLG9DQUFvQyx1QkFBdUIsZ0NBQWdDLFNBQVMsYUFBYSxnQkFBZ0IsYUFBYSxTQUFTLGFBQWE7O0FBRTNsQix3Q0FBd0MsMEZBQWtCLGVBQWUsK0VBQVc7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDZDQUFLO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseUVBQUMsVUFBVSxxREFBcUQ7QUFDNUU7QUFDQTtBQUNBLFlBQVksNEJBQTRCO0FBQ3hDO0FBQ0Esa0JBQWtCLDBDQUFXO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx5RUFBQyxDQUFDLDRFQUFRLFFBQVEseUVBQUMsZUFBZSxhQUFhLEVBQUUseUVBQUMsV0FBVyxpREFBaUQsSUFBSSx5RUFBQyxXQUFXLDhCQUE4QixhQUFhLDRDQUE0QyxHQUFHLHlFQUFDLFdBQVcsMkZBQTJGO0FBQzdVO0FBQ0E7QUFDQSxnQkFBZ0IsNENBQU07QUFDdEIsaUJBQWlCLDRDQUFNO0FBQ3ZCLFlBQVkseUVBQUMsQ0FBQyw0RUFBUSxRQUFRLHlFQUFDLHVCQUF1Qix5RUFBQyxlQUFlLHlFQUFDLGNBQWMsZ0lBQWdJLEVBQUUseUVBQUMsV0FBVyxpSEFBaUgsR0FBRyx5RUFBQyxXQUFXLHFLQUFxSyxLQUFLLHlFQUFDLFdBQVcsd0VBQXdFLEdBQUcseUVBQUMsV0FBVztBQUNobkIsbUZBQW1GLGFBQWE7QUFDaEcsT0FBTyx3QkFBd0IsZ0JBQWdCLHlFQUFDLFdBQVcsMENBQTBDLG1EQUFtRCx3QkFBd0I7QUFDaEw7QUFDQSxhQUFhO0FBQ2IsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFNEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdIQUF3SDtBQUN6STtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrQkFBK0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFK0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRC9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0c7QUFDL0Q7QUFDVjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUVBQXVFLGNBQWMsTUFBTSxhQUFhLGdCQUFnQixpQkFBaUIsa0JBQWtCLGNBQWMsZ0JBQWdCLGlCQUFpQixjQUFjLGtCQUFrQixzQkFBc0Isc0NBQXNDLGlCQUFpQixrQkFBa0IscUJBQXFCLHNDQUFzQyxpQkFBaUIsa0JBQWtCLHVCQUF1QixxQ0FBcUMsb0JBQW9CLG1CQUFtQixhQUFhLGdCQUFnQixpQkFBaUIsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUUzbUIsMEJBQTBCLDBGQUFrQixlQUFlLCtFQUFXO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLG1GQUFXO0FBQ2pELHFDQUFxQywyQ0FBSSxHQUFHO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseUVBQUMsQ0FBQyx3RUFBSSxJQUFJLDJDQUEyQyxFQUFFLHlFQUFDLFVBQVUsU0FBUyxpQ0FBaUMsV0FBVyxVQUFVLHNEQUFzRCxFQUFFLHlFQUFDLGNBQWMsb0JBQW9CLEVBQUUseUVBQUM7QUFDM087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsMENBQWU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFOEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNIOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzRztBQUNqRDs7QUFFckQ7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixhQUFhLHNCQUFzQixrQkFBa0Isb0RBQW9ELGdEQUFnRCxvRUFBb0Usc0JBQXNCLG1DQUFtQywrRkFBK0YsMEJBQTBCLGlCQUFpQixtQkFBbUIsd0NBQXdDLG1DQUFtQyxnQkFBZ0IsbUNBQW1DLGVBQWUsbUNBQW1DLGFBQWEseUJBQXlCLDhCQUE4QixRQUFRLGFBQWEsWUFBWSxnQkFBZ0IsNkJBQTZCLG9EQUFvRCwrQkFBK0IsaUNBQWlDLDhCQUE4Qiw2QkFBNkIsMkJBQTJCLGtEQUFrRCxpREFBaUQsNkJBQTZCLCtCQUErQiwwQkFBMEIsNkJBQTZCLDJCQUEyQiwyQ0FBMkMsNkJBQTZCLDRCQUE0QixnQkFBZ0IsYUFBYSxTQUFTLGFBQWE7O0FBRTkxQywyQkFBMkIsMEZBQWtCLGVBQWUsK0VBQVc7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0RBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxpQkFBaUI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5RUFBQyxDQUFDLDRFQUFRLFFBQVEseUVBQUMsV0FBVyx3QkFBd0IsR0FBRyx5RUFBQyxrQkFBa0IseUVBQUM7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFK0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5TC9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkQ7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVEsV0FBVztBQUM5QixXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELG1CQUFtQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0NBQVE7QUFDZDtBQUNBO0FBQ0E7QUFDQSxTQUFTLCtDQUFRO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS1jb2xvci1waWNrZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NvbG9yLXBpY2tlci1zd2F0Y2guanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL21hdGguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL3RhYi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvdGFicy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvdGhyb3R0bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbG9yIH0gZnJvbSAnLi9pbmRleDIuanMnO1xuaW1wb3J0IHsgaiBhcyBpc1ByaW1hcnlQb2ludGVyQnV0dG9uLCBiIGFzIGdldEVsZW1lbnREaXIgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBDIGFzIENTUywgRCBhcyBERUZBVUxUX0NPTE9SLCBhIGFzIERJTUVOU0lPTlMsIEggYXMgSFNWX0xJTUlUUywgTyBhcyBPUEFDSVRZX0xJTUlUUywgYiBhcyBIVUVfTElNSVRfQ09OU1RSQUlORUQsIFMgYXMgU0NPUEVfU0laRSwgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JGMsIGMgYXMgREVGQVVMVF9TVE9SQUdFX0tFWV9QUkVGSVgsIFIgYXMgUkdCX0xJTUlUUyB9IGZyb20gJy4vY29sb3ItcGlja2VyLWhleC1pbnB1dC5qcyc7XG5pbXBvcnQgeyBDIGFzIENTU0NvbG9yTW9kZSwgbiBhcyBub3JtYWxpemVIZXgsIGggYXMgaGV4aWZ5LCBhIGFzIGFscGhhQ29tcGF0aWJsZSwgbyBhcyBvcGFjaXR5VG9BbHBoYSwgYiBhcyBhbHBoYVRvT3BhY2l0eSwgcCBhcyBwYXJzZU1vZGUsIGMgYXMgY29sb3JFcXVhbCwgdCBhcyB0b05vbkFscGhhTW9kZSwgZCBhcyBub3JtYWxpemVBbHBoYSwgZSBhcyBub3JtYWxpemVDb2xvciwgZiBhcyB0b0FscGhhTW9kZSB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0SW50ZXJhY3RpdmUsIGQgYXMgZGlzY29ubmVjdEludGVyYWN0aXZlLCB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUuanMnO1xuaW1wb3J0IHsgaSBhcyBpc0FjdGl2YXRpb25LZXkgfSBmcm9tICcuL2tleS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbXBvbmVudEZvY3VzYWJsZSwgYSBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBzIGFzIHNldENvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyByIGFzIHJlbWFwLCBjIGFzIGNsYW1wLCBhIGFzIGNsb3NlVG9SYW5nZUVkZ2UgfSBmcm9tICcuL21hdGguanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkZCB9IGZyb20gJy4vYnV0dG9uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCRiIH0gZnJvbSAnLi9jb2xvci1waWNrZXItc3dhdGNoLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCRhIH0gZnJvbSAnLi9pY29uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ5IH0gZnJvbSAnLi9pbnB1dC1udW1iZXIuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDggfSBmcm9tICcuL2lucHV0LXRleHQuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDcgfSBmcm9tICcuL2xvYWRlci5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNiB9IGZyb20gJy4vcHJvZ3Jlc3MuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDUgfSBmcm9tICcuL3RhYi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNCB9IGZyb20gJy4vdGFiLW5hdi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMyB9IGZyb20gJy4vdGFiLXRpdGxlLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQyIH0gZnJvbSAnLi90YWJzLmpzJztcbmltcG9ydCB7IHQgYXMgdGhyb3R0bGUgfSBmcm9tICcuL3Rocm90dGxlLmpzJztcblxuY29uc3QgY29sb3JQaWNrZXJDc3MgPSBcIjpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCl9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfTpob3N0KFtzY2FsZT1zXSl7LS1jYWxjaXRlLWNvbG9yLXBpY2tlci1zcGFjaW5nOjhweH06aG9zdChbc2NhbGU9c10pIC5jb250YWluZXJ7aW5saW5lLXNpemU6MTYwcHh9Omhvc3QoW3NjYWxlPXNdKSAuc2F2ZWQtY29sb3Jze2dhcDowLjI1cmVtO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoYXV0by1maWxsLCAyMHB4KX06aG9zdChbc2NhbGU9bV0pey0tY2FsY2l0ZS1jb2xvci1waWNrZXItc3BhY2luZzoxMnB4fTpob3N0KFtzY2FsZT1tXSkgLmNvbnRhaW5lcntpbmxpbmUtc2l6ZToyNzJweH06aG9zdChbc2NhbGU9bF0pey0tY2FsY2l0ZS1jb2xvci1waWNrZXItc3BhY2luZzoxNnB4O2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9bF0pIC5jb250YWluZXJ7aW5saW5lLXNpemU6NDY0cHh9Omhvc3QoW3NjYWxlPWxdKSAuc2VjdGlvbjpmaXJzdC1vZi10eXBle3BhZGRpbmctYmxvY2stc3RhcnQ6dmFyKC0tY2FsY2l0ZS1jb2xvci1waWNrZXItc3BhY2luZyl9Omhvc3QoW3NjYWxlPWxdKSAuc2F2ZWQtY29sb3Jze2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoYXV0by1maWxsLCAzMnB4KX06aG9zdChbc2NhbGU9bF0pIC5jb250cm9sLXNlY3Rpb257ZmxleC13cmFwOm5vd3JhcDthbGlnbi1pdGVtczpiYXNlbGluZTtmbGV4LXdyYXA6d3JhcH06aG9zdChbc2NhbGU9bF0pIC5jb2xvci1oZXgtb3B0aW9uc3tkaXNwbGF5OmZsZXg7ZmxleC1zaHJpbms6MTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZH06aG9zdChbc2NhbGU9bF0pIC5jb2xvci1tb2RlLWNvbnRhaW5lcntmbGV4LXNocmluazozfS5jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKX0uY29udHJvbC1hbmQtc2NvcGV7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO3RvdWNoLWFjdGlvbjpub25lfS5zY29wZXtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleCk7YmxvY2stc2l6ZToxcHg7aW5saW5lLXNpemU6MXB4O2JvcmRlci1yYWRpdXM6OTk5OXB4O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fS5zY29wZTpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKTtvdXRsaW5lLW9mZnNldDoxMXB4fS5oZXgtYW5kLWNoYW5uZWxzLWdyb3Vwe2lubGluZS1zaXplOjEwMCV9LmhleC1hbmQtY2hhbm5lbHMtZ3JvdXAsLmNvbnRyb2wtc2VjdGlvbntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtd3JhcDp3cmFwfS5zZWN0aW9ue3BhZGRpbmctYmxvY2s6MCB2YXIoLS1jYWxjaXRlLWNvbG9yLXBpY2tlci1zcGFjaW5nKTtwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLWNvbG9yLXBpY2tlci1zcGFjaW5nKX0uc2VjdGlvbjpmaXJzdC1vZi10eXBle3BhZGRpbmctYmxvY2stc3RhcnQ6dmFyKC0tY2FsY2l0ZS1jb2xvci1waWNrZXItc3BhY2luZyl9LnNsaWRlcnN7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjttYXJnaW4taW5saW5lLXN0YXJ0OnZhcigtLWNhbGNpdGUtY29sb3ItcGlja2VyLXNwYWNpbmcpfS5wcmV2aWV3LWFuZC1zbGlkZXJze2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzp2YXIoLS1jYWxjaXRlLWNvbG9yLXBpY2tlci1zcGFjaW5nKX0uY29sb3ItaGV4LW9wdGlvbnMsLnNlY3Rpb24tLXNwbGl0e2ZsZXgtZ3JvdzoxfS5oZWFkZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmNvbG9yLW1vZGUtY29udGFpbmVye3BhZGRpbmctYmxvY2stc3RhcnQ6dmFyKC0tY2FsY2l0ZS1jb2xvci1waWNrZXItc3BhY2luZyl9LmNoYW5uZWxze2Rpc3BsYXk6ZmxleDtyb3ctZ2FwOjAuMTI1cmVtfS5jaGFubmVsW2RhdGEtY2hhbm5lbC1pbmRleD1cXFwiM1xcXCJde2lubGluZS1zaXplOjE1OXB4fTpob3N0KFtzY2FsZT1zXSkgLmNoYW5uZWxze2ZsZXgtd3JhcDp3cmFwfTpob3N0KFtzY2FsZT1zXSkgLmNoYW5uZWx7ZmxleC1iYXNpczozMCU7ZmxleC1ncm93OjF9Omhvc3QoW3NjYWxlPXNdKSAuY2hhbm5lbFtkYXRhLWNoYW5uZWwtaW5kZXg9XFxcIjNcXFwiXXtpbmxpbmUtc2l6ZTp1bnNldDttYXJnaW4taW5saW5lLXN0YXJ0OnVuc2V0fTpob3N0KFtzY2FsZT1sXSkgLmNoYW5uZWxbZGF0YS1jaGFubmVsLWluZGV4PVxcXCIzXFxcIl17aW5saW5lLXNpemU6MTMxcHh9LnNhdmVkLWNvbG9yc3tkaXNwbGF5OmdyaWQ7Z2FwOjAuNXJlbTtwYWRkaW5nLWJsb2NrLXN0YXJ0OnZhcigtLWNhbGNpdGUtY29sb3ItcGlja2VyLXNwYWNpbmcpO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoYXV0by1maWxsLCAyNHB4KX0uc2F2ZWQtY29sb3JzLWJ1dHRvbnN7ZGlzcGxheTpmbGV4fS5zYXZlZC1jb2xvcntvdXRsaW5lLW9mZnNldDowO291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXJ9LnNhdmVkLWNvbG9yOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpO291dGxpbmUtb2Zmc2V0OjJweH0uc2F2ZWQtY29sb3I6aG92ZXJ7dHJhbnNpdGlvbjpvdXRsaW5lLWNvbG9yIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0KSBlYXNlLWluLW91dDtvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0yKTtvdXRsaW5lLW9mZnNldDoycHh9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IHRocm90dGxlRm9yNjBGcHNJbk1zID0gMTY7XG5jb25zdCBDb2xvclBpY2tlciA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlQ29sb3JQaWNrZXJDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVDb2xvclBpY2tlckNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVDb2xvclBpY2tlcklucHV0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlQ29sb3JQaWNrZXJJbnB1dFwiLCA2KTtcbiAgICB0aGlzLmludGVybmFsQ29sb3JVcGRhdGVDb250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLm1vZGUgPSBDU1NDb2xvck1vZGUuSEVYO1xuICAgIHRoaXMuc2hpZnRLZXlDaGFubmVsQWRqdXN0bWVudCA9IDA7XG4gICAgdGhpcy5oYW5kbGVUYWJBY3RpdmF0ZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5jaGFubmVsTW9kZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xvci1tb2RlXCIpO1xuICAgICAgdGhpcy51cGRhdGVDaGFubmVsc0Zyb21Db2xvcih0aGlzLmNvbG9yKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ29sb3JGaWVsZFNjb3BlS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgICAgY29uc3QgYXJyb3dLZXlUb1hZT2Zmc2V0ID0ge1xuICAgICAgICBBcnJvd1VwOiB7IHg6IDAsIHk6IC0xMCB9LFxuICAgICAgICBBcnJvd1JpZ2h0OiB7IHg6IDEwLCB5OiAwIH0sXG4gICAgICAgIEFycm93RG93bjogeyB4OiAwLCB5OiAxMCB9LFxuICAgICAgICBBcnJvd0xlZnQ6IHsgeDogLTEwLCB5OiAwIH0sXG4gICAgICB9O1xuICAgICAgaWYgKGFycm93S2V5VG9YWU9mZnNldFtrZXldKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2NvcGVPcmllbnRhdGlvbiA9IGtleSA9PT0gXCJBcnJvd0Rvd25cIiB8fCBrZXkgPT09IFwiQXJyb3dVcFwiID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XG4gICAgICAgIHRoaXMuY2FwdHVyZUNvbG9yRmllbGRDb2xvcih0aGlzLmNvbG9yRmllbGRTY29wZUxlZnQgKyBhcnJvd0tleVRvWFlPZmZzZXRba2V5XS54IHx8IDAsIHRoaXMuY29sb3JGaWVsZFNjb3BlVG9wICsgYXJyb3dLZXlUb1hZT2Zmc2V0W2tleV0ueSB8fCAwLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUh1ZVNjb3BlS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgbW9kaWZpZXIgPSBldmVudC5zaGlmdEtleSA/IDEwIDogMTtcbiAgICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcbiAgICAgIGNvbnN0IGFycm93S2V5VG9YT2Zmc2V0ID0ge1xuICAgICAgICBBcnJvd1VwOiAxLFxuICAgICAgICBBcnJvd1JpZ2h0OiAxLFxuICAgICAgICBBcnJvd0Rvd246IC0xLFxuICAgICAgICBBcnJvd0xlZnQ6IC0xLFxuICAgICAgfTtcbiAgICAgIGlmIChhcnJvd0tleVRvWE9mZnNldFtrZXldKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gYXJyb3dLZXlUb1hPZmZzZXRba2V5XSAqIG1vZGlmaWVyO1xuICAgICAgICBjb25zdCBodWUgPSB0aGlzLmJhc2VDb2xvckZpZWxkQ29sb3IuaHVlKCk7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5iYXNlQ29sb3JGaWVsZENvbG9yLmh1ZShodWUgKyBkZWx0YSk7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxDb2xvclNldChjb2xvciwgZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVIZXhJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCB7IGFsbG93RW1wdHksIGNvbG9yOiBjb2xvciQxIH0gPSB0aGlzO1xuICAgICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQ7XG4gICAgICBjb25zdCBoZXggPSBpbnB1dC52YWx1ZTtcbiAgICAgIGlmIChhbGxvd0VtcHR5ICYmICFoZXgpIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbENvbG9yU2V0KG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBub3JtYWxpemVkSGV4ID0gY29sb3IkMSAmJiBub3JtYWxpemVIZXgoaGV4aWZ5KGNvbG9yJDEsIGFscGhhQ29tcGF0aWJsZSh0aGlzLm1vZGUpKSk7XG4gICAgICBpZiAoaGV4ICE9PSBub3JtYWxpemVkSGV4KSB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxDb2xvclNldChjb2xvcihoZXgpKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU2F2ZWRDb2xvclNlbGVjdCA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgc3dhdGNoID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIHRoaXMuaW50ZXJuYWxDb2xvclNldChjb2xvcihzd2F0Y2guY29sb3IpKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbm5lbElucHV0ID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBjaGFubmVsSW5kZXggPSBOdW1iZXIoaW5wdXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jaGFubmVsLWluZGV4XCIpKTtcbiAgICAgIGNvbnN0IGlzQWxwaGFDaGFubmVsID0gY2hhbm5lbEluZGV4ID09PSAzO1xuICAgICAgY29uc3QgbGltaXQgPSBpc0FscGhhQ2hhbm5lbFxuICAgICAgICA/IE9QQUNJVFlfTElNSVRTLm1heFxuICAgICAgICA6IHRoaXMuY2hhbm5lbE1vZGUgPT09IFwicmdiXCJcbiAgICAgICAgICA/IFJHQl9MSU1JVFNbT2JqZWN0LmtleXMoUkdCX0xJTUlUUylbY2hhbm5lbEluZGV4XV1cbiAgICAgICAgICA6IEhTVl9MSU1JVFNbT2JqZWN0LmtleXMoSFNWX0xJTUlUUylbY2hhbm5lbEluZGV4XV07XG4gICAgICBsZXQgaW5wdXRWYWx1ZTtcbiAgICAgIGlmICh0aGlzLmFsbG93RW1wdHkgJiYgIWlucHV0LnZhbHVlKSB7XG4gICAgICAgIGlucHV0VmFsdWUgPSBcIlwiO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGlucHV0LnZhbHVlKTtcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRWYWx1ZSA9IHZhbHVlICsgdGhpcy5zaGlmdEtleUNoYW5uZWxBZGp1c3RtZW50O1xuICAgICAgICBjb25zdCBjbGFtcGVkID0gY2xhbXAoYWRqdXN0ZWRWYWx1ZSwgMCwgbGltaXQpO1xuICAgICAgICBpbnB1dFZhbHVlID0gY2xhbXBlZC50b1N0cmluZygpO1xuICAgICAgfVxuICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dFZhbHVlO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFubmVsQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBjaGFubmVsSW5kZXggPSBOdW1iZXIoaW5wdXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jaGFubmVsLWluZGV4XCIpKTtcbiAgICAgIGNvbnN0IGNoYW5uZWxzID0gWy4uLnRoaXMuY2hhbm5lbHNdO1xuICAgICAgY29uc3Qgc2hvdWxkQ2xlYXJDaGFubmVscyA9IHRoaXMuYWxsb3dFbXB0eSAmJiAhaW5wdXQudmFsdWU7XG4gICAgICBpZiAoc2hvdWxkQ2xlYXJDaGFubmVscykge1xuICAgICAgICB0aGlzLmNoYW5uZWxzID0gW251bGwsIG51bGwsIG51bGwsIG51bGxdO1xuICAgICAgICB0aGlzLmludGVybmFsQ29sb3JTZXQobnVsbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQWxwaGFDaGFubmVsID0gY2hhbm5lbEluZGV4ID09PSAzO1xuICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoaW5wdXQudmFsdWUpO1xuICAgICAgY2hhbm5lbHNbY2hhbm5lbEluZGV4XSA9IGlzQWxwaGFDaGFubmVsID8gb3BhY2l0eVRvQWxwaGEodmFsdWUpIDogdmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZUNvbG9yRnJvbUNoYW5uZWxzKGNoYW5uZWxzKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU2F2ZWRDb2xvcktleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChpc0FjdGl2YXRpb25LZXkoZXZlbnQua2V5KSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmhhbmRsZVNhdmVkQ29sb3JTZWxlY3QoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDb2xvckZpZWxkUG9pbnRlckRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNQcmltYXJ5UG9pbnRlckJ1dHRvbihldmVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBvZmZzZXRYLCBvZmZzZXRZIH0gPSBldmVudDtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCB0aGlzLmdsb2JhbFBvaW50ZXJNb3ZlSGFuZGxlcik7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIHRoaXMuZ2xvYmFsUG9pbnRlclVwSGFuZGxlciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgdGhpcy5hY3RpdmVDYW52YXNJbmZvID0ge1xuICAgICAgICBjb250ZXh0OiB0aGlzLmNvbG9yRmllbGRSZW5kZXJpbmdDb250ZXh0LFxuICAgICAgICBib3VuZHM6IHRoaXMuY29sb3JGaWVsZFJlbmRlcmluZ0NvbnRleHQuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgfTtcbiAgICAgIHRoaXMuY2FwdHVyZUNvbG9yRmllbGRDb2xvcihvZmZzZXRYLCBvZmZzZXRZKTtcbiAgICAgIHRoaXMuY29sb3JGaWVsZFNjb3BlTm9kZS5mb2N1cygpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVIdWVTbGlkZXJQb2ludGVyRG93biA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCFpc1ByaW1hcnlQb2ludGVyQnV0dG9uKGV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7IG9mZnNldFggfSA9IGV2ZW50O1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIHRoaXMuZ2xvYmFsUG9pbnRlck1vdmVIYW5kbGVyKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgdGhpcy5nbG9iYWxQb2ludGVyVXBIYW5kbGVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICB0aGlzLmFjdGl2ZUNhbnZhc0luZm8gPSB7XG4gICAgICAgIGNvbnRleHQ6IHRoaXMuaHVlU2xpZGVyUmVuZGVyaW5nQ29udGV4dCxcbiAgICAgICAgYm91bmRzOiB0aGlzLmh1ZVNsaWRlclJlbmRlcmluZ0NvbnRleHQuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgfTtcbiAgICAgIHRoaXMuY2FwdHVyZUh1ZVNsaWRlckNvbG9yKG9mZnNldFgpO1xuICAgICAgdGhpcy5odWVTY29wZU5vZGUuZm9jdXMoKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlT3BhY2l0eVNsaWRlclBvaW50ZXJEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgb2Zmc2V0WCB9ID0gZXZlbnQ7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgdGhpcy5nbG9iYWxQb2ludGVyTW92ZUhhbmRsZXIpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCB0aGlzLmdsb2JhbFBvaW50ZXJVcEhhbmRsZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgIHRoaXMuYWN0aXZlQ2FudmFzSW5mbyA9IHtcbiAgICAgICAgY29udGV4dDogdGhpcy5vcGFjaXR5U2xpZGVyUmVuZGVyaW5nQ29udGV4dCxcbiAgICAgICAgYm91bmRzOiB0aGlzLm9wYWNpdHlTbGlkZXJSZW5kZXJpbmdDb250ZXh0LmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIH07XG4gICAgICB0aGlzLmNhcHR1cmVPcGFjaXR5U2xpZGVyVmFsdWUob2Zmc2V0WCk7XG4gICAgICB0aGlzLm9wYWNpdHlTY29wZU5vZGUuZm9jdXMoKTtcbiAgICB9O1xuICAgIHRoaXMuZ2xvYmFsUG9pbnRlclVwSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCFpc1ByaW1hcnlQb2ludGVyQnV0dG9uKGV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBwcmV2aW91c2x5RHJhZ2dpbmcgPSB0aGlzLmFjdGl2ZUNhbnZhc0luZm87XG4gICAgICB0aGlzLmFjdGl2ZUNhbnZhc0luZm8gPSBudWxsO1xuICAgICAgdGhpcy5kcmF3Q29sb3JDb250cm9scygpO1xuICAgICAgaWYgKHByZXZpb3VzbHlEcmFnZ2luZykge1xuICAgICAgICB0aGlzLmNhbGNpdGVDb2xvclBpY2tlckNoYW5nZS5lbWl0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmdsb2JhbFBvaW50ZXJNb3ZlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBhY3RpdmVDYW52YXNJbmZvLCBlbCB9ID0gdGhpcztcbiAgICAgIGlmICghZWwuaXNDb25uZWN0ZWQgfHwgIWFjdGl2ZUNhbnZhc0luZm8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBjb250ZXh0LCBib3VuZHMgfSA9IGFjdGl2ZUNhbnZhc0luZm87XG4gICAgICBsZXQgc2FtcGxpbmdYO1xuICAgICAgbGV0IHNhbXBsaW5nWTtcbiAgICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQ7XG4gICAgICBpZiAoY29udGV4dC5jYW52YXMubWF0Y2hlcyhcIjpob3ZlclwiKSkge1xuICAgICAgICBzYW1wbGluZ1ggPSBjbGllbnRYIC0gYm91bmRzLng7XG4gICAgICAgIHNhbXBsaW5nWSA9IGNsaWVudFkgLSBib3VuZHMueTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBzbmFwIHggYW5kIHkgdG8gdGhlIGNsb3Nlc3QgZWRnZVxuICAgICAgICBpZiAoY2xpZW50WCA8IGJvdW5kcy54ICsgYm91bmRzLndpZHRoICYmIGNsaWVudFggPiBib3VuZHMueCkge1xuICAgICAgICAgIHNhbXBsaW5nWCA9IGNsaWVudFggLSBib3VuZHMueDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjbGllbnRYIDwgYm91bmRzLngpIHtcbiAgICAgICAgICBzYW1wbGluZ1ggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNhbXBsaW5nWCA9IGJvdW5kcy53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xpZW50WSA8IGJvdW5kcy55ICsgYm91bmRzLmhlaWdodCAmJiBjbGllbnRZID4gYm91bmRzLnkpIHtcbiAgICAgICAgICBzYW1wbGluZ1kgPSBjbGllbnRZIC0gYm91bmRzLnk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2xpZW50WSA8IGJvdW5kcy55KSB7XG4gICAgICAgICAgc2FtcGxpbmdZID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzYW1wbGluZ1kgPSBib3VuZHMuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY29udGV4dCA9PT0gdGhpcy5jb2xvckZpZWxkUmVuZGVyaW5nQ29udGV4dCkge1xuICAgICAgICB0aGlzLmNhcHR1cmVDb2xvckZpZWxkQ29sb3Ioc2FtcGxpbmdYLCBzYW1wbGluZ1ksIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGNvbnRleHQgPT09IHRoaXMuaHVlU2xpZGVyUmVuZGVyaW5nQ29udGV4dCkge1xuICAgICAgICB0aGlzLmNhcHR1cmVIdWVTbGlkZXJDb2xvcihzYW1wbGluZ1gpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoY29udGV4dCA9PT0gdGhpcy5vcGFjaXR5U2xpZGVyUmVuZGVyaW5nQ29udGV4dCkge1xuICAgICAgICB0aGlzLmNhcHR1cmVPcGFjaXR5U2xpZGVyVmFsdWUoc2FtcGxpbmdYKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc3RvcmVDb2xvckZpZWxkU2NvcGUgPSAobm9kZSkgPT4ge1xuICAgICAgdGhpcy5jb2xvckZpZWxkU2NvcGVOb2RlID0gbm9kZTtcbiAgICB9O1xuICAgIHRoaXMuc3RvcmVIdWVTY29wZSA9IChub2RlKSA9PiB7XG4gICAgICB0aGlzLmh1ZVNjb3BlTm9kZSA9IG5vZGU7XG4gICAgfTtcbiAgICB0aGlzLnJlbmRlckNoYW5uZWxzVGFiVGl0bGUgPSAoY2hhbm5lbE1vZGUpID0+IHtcbiAgICAgIGNvbnN0IHsgY2hhbm5lbE1vZGU6IGFjdGl2ZUNoYW5uZWxNb2RlLCBtZXNzYWdlcyB9ID0gdGhpcztcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gY2hhbm5lbE1vZGUgPT09IGFjdGl2ZUNoYW5uZWxNb2RlO1xuICAgICAgY29uc3QgbGFiZWwgPSBjaGFubmVsTW9kZSA9PT0gXCJyZ2JcIiA/IG1lc3NhZ2VzLnJnYiA6IG1lc3NhZ2VzLmhzdjtcbiAgICAgIHJldHVybiAoaChcImNhbGNpdGUtdGFiLXRpdGxlXCIsIHsgY2xhc3M6IENTUy5jb2xvck1vZGUsIFwiZGF0YS1jb2xvci1tb2RlXCI6IGNoYW5uZWxNb2RlLCBrZXk6IGNoYW5uZWxNb2RlLCBvbkNhbGNpdGVUYWJzQWN0aXZhdGU6IHRoaXMuaGFuZGxlVGFiQWN0aXZhdGUsIHNlbGVjdGVkOiBzZWxlY3RlZCB9LCBsYWJlbCkpO1xuICAgIH07XG4gICAgdGhpcy5yZW5kZXJDaGFubmVsc1RhYiA9IChjaGFubmVsTW9kZSkgPT4ge1xuICAgICAgY29uc3QgeyBhbGxvd0VtcHR5LCBjaGFubmVsTW9kZTogYWN0aXZlQ2hhbm5lbE1vZGUsIGNoYW5uZWxzLCBtZXNzYWdlcywgYWxwaGFDaGFubmVsIH0gPSB0aGlzO1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBjaGFubmVsTW9kZSA9PT0gYWN0aXZlQ2hhbm5lbE1vZGU7XG4gICAgICBjb25zdCBpc1JnYiA9IGNoYW5uZWxNb2RlID09PSBcInJnYlwiO1xuICAgICAgY29uc3QgY2hhbm5lbEFyaWFMYWJlbHMgPSBpc1JnYlxuICAgICAgICA/IFttZXNzYWdlcy5yZWQsIG1lc3NhZ2VzLmdyZWVuLCBtZXNzYWdlcy5ibHVlXVxuICAgICAgICA6IFttZXNzYWdlcy5odWUsIG1lc3NhZ2VzLnNhdHVyYXRpb24sIG1lc3NhZ2VzLnZhbHVlXTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGdldEVsZW1lbnREaXIodGhpcy5lbCk7XG4gICAgICBjb25zdCBjaGFubmVsc1RvUmVuZGVyID0gYWxwaGFDaGFubmVsID8gY2hhbm5lbHMgOiBjaGFubmVscy5zbGljZSgwLCAzKTtcbiAgICAgIHJldHVybiAoaChcImNhbGNpdGUtdGFiXCIsIHsgY2xhc3M6IENTUy5jb250cm9sLCBrZXk6IGNoYW5uZWxNb2RlLCBzZWxlY3RlZDogc2VsZWN0ZWQgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY2hhbm5lbHMsIGRpcjogXCJsdHJcIiB9LCBjaGFubmVsc1RvUmVuZGVyLm1hcCgoY2hhbm5lbFZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpc0FscGhhQ2hhbm5lbCA9IGluZGV4ID09PSAzO1xuICAgICAgICBpZiAoaXNBbHBoYUNoYW5uZWwpIHtcbiAgICAgICAgICBjaGFubmVsVmFsdWUgPVxuICAgICAgICAgICAgYWxsb3dFbXB0eSAmJiAhY2hhbm5lbFZhbHVlID8gY2hhbm5lbFZhbHVlIDogYWxwaGFUb09wYWNpdHkoY2hhbm5lbFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICAvKiB0aGUgY2hhbm5lbCBjb250YWluZXIgaXMgbHRyLCBzbyB3ZSBhcHBseSB0aGUgaG9zdCdzIGRpcmVjdGlvbiAqL1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDaGFubmVsKGNoYW5uZWxWYWx1ZSwgaW5kZXgsIGNoYW5uZWxBcmlhTGFiZWxzW2luZGV4XSwgZGlyZWN0aW9uLCBpc0FscGhhQ2hhbm5lbCA/IFwiJVwiIDogXCJcIik7XG4gICAgICB9KSkpKTtcbiAgICB9O1xuICAgIHRoaXMucmVuZGVyQ2hhbm5lbCA9ICh2YWx1ZSwgaW5kZXgsIGFyaWFMYWJlbCwgZGlyZWN0aW9uLCBzdWZmaXgpID0+IHtcbiAgICAgIHJldHVybiAoaChcImNhbGNpdGUtaW5wdXQtbnVtYmVyXCIsIHsgY2xhc3M6IENTUy5jaGFubmVsLCBcImRhdGEtY2hhbm5lbC1pbmRleFwiOiBpbmRleCwgZGlyOiBkaXJlY3Rpb24sIGtleTogaW5kZXgsIGxhYmVsOiBhcmlhTGFiZWwsIGxhbmc6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLCBudW1iZXJCdXR0b25UeXBlOiBcIm5vbmVcIiwgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSwgb25DYWxjaXRlSW5wdXROdW1iZXJDaGFuZ2U6IHRoaXMuaGFuZGxlQ2hhbm5lbENoYW5nZSwgb25DYWxjaXRlSW5wdXROdW1iZXJJbnB1dDogdGhpcy5oYW5kbGVDaGFubmVsSW5wdXQsIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiLFxuICAgICAgICAvLyB3b3JrYXJvdW5kIHRvIGVuc3VyZSBpbnB1dCBib3JkZXJzIG92ZXJsYXAgYXMgZGVzaXJlZFxuICAgICAgICAvLyB0aGlzIGlzIGJlY2F1c2UgdGhlIGJ1aWxkIHRyYW5zZm9ybXMgbWFyZ2luLWxlZnQgdG8gaXRzXG4gICAgICAgIC8vIGxvZ2ljYWwtcHJvcCwgd2hpY2ggaXMgdW5kZXNpcmVkIGFzIGNoYW5uZWxzIGFyZSBhbHdheXMgbHRyXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgbWFyZ2luTGVmdDogaW5kZXggPiAwICYmICEodGhpcy5zY2FsZSA9PT0gXCJzXCIgJiYgdGhpcy5hbHBoYUNoYW5uZWwgJiYgaW5kZXggPT09IDMpID8gXCItMXB4XCIgOiBcIlwiLFxuICAgICAgICB9LCBzdWZmaXhUZXh0OiBzdWZmaXgsIHZhbHVlOiB2YWx1ZT8udG9TdHJpbmcoKSB9KSk7XG4gICAgfTtcbiAgICB0aGlzLmRlbGV0ZUNvbG9yID0gKCkgPT4ge1xuICAgICAgY29uc3QgY29sb3JUb0RlbGV0ZSA9IGhleGlmeSh0aGlzLmNvbG9yLCB0aGlzLmFscGhhQ2hhbm5lbCk7XG4gICAgICBjb25zdCBpblN0b3JhZ2UgPSB0aGlzLnNhdmVkQ29sb3JzLmluZGV4T2YoY29sb3JUb0RlbGV0ZSkgPiAtMTtcbiAgICAgIGlmICghaW5TdG9yYWdlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNhdmVkQ29sb3JzID0gdGhpcy5zYXZlZENvbG9ycy5maWx0ZXIoKGNvbG9yKSA9PiBjb2xvciAhPT0gY29sb3JUb0RlbGV0ZSk7XG4gICAgICB0aGlzLnNhdmVkQ29sb3JzID0gc2F2ZWRDb2xvcnM7XG4gICAgICBjb25zdCBzdG9yYWdlS2V5ID0gYCR7REVGQVVMVF9TVE9SQUdFX0tFWV9QUkVGSVh9JHt0aGlzLnN0b3JhZ2VJZH1gO1xuICAgICAgaWYgKHRoaXMuc3RvcmFnZUlkKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHNhdmVkQ29sb3JzKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNhdmVDb2xvciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbG9yVG9TYXZlID0gaGV4aWZ5KHRoaXMuY29sb3IsIHRoaXMuYWxwaGFDaGFubmVsKTtcbiAgICAgIGNvbnN0IGFscmVhZHlTYXZlZCA9IHRoaXMuc2F2ZWRDb2xvcnMuaW5kZXhPZihjb2xvclRvU2F2ZSkgPiAtMTtcbiAgICAgIGlmIChhbHJlYWR5U2F2ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2F2ZWRDb2xvcnMgPSBbLi4udGhpcy5zYXZlZENvbG9ycywgY29sb3JUb1NhdmVdO1xuICAgICAgdGhpcy5zYXZlZENvbG9ycyA9IHNhdmVkQ29sb3JzO1xuICAgICAgY29uc3Qgc3RvcmFnZUtleSA9IGAke0RFRkFVTFRfU1RPUkFHRV9LRVlfUFJFRklYfSR7dGhpcy5zdG9yYWdlSWR9YDtcbiAgICAgIGlmICh0aGlzLnN0b3JhZ2VJZCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShzYXZlZENvbG9ycykpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5kcmF3Q29sb3JDb250cm9scyA9IHRocm90dGxlKCh0eXBlID0gXCJhbGxcIikgPT4ge1xuICAgICAgaWYgKCh0eXBlID09PSBcImFsbFwiIHx8IHR5cGUgPT09IFwiY29sb3ItZmllbGRcIikgJiYgdGhpcy5jb2xvckZpZWxkUmVuZGVyaW5nQ29udGV4dCkge1xuICAgICAgICB0aGlzLmRyYXdDb2xvckZpZWxkKCk7XG4gICAgICB9XG4gICAgICBpZiAoKHR5cGUgPT09IFwiYWxsXCIgfHwgdHlwZSA9PT0gXCJodWUtc2xpZGVyXCIpICYmIHRoaXMuaHVlU2xpZGVyUmVuZGVyaW5nQ29udGV4dCkge1xuICAgICAgICB0aGlzLmRyYXdIdWVTbGlkZXIoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFscGhhQ2hhbm5lbCAmJlxuICAgICAgICAodHlwZSA9PT0gXCJhbGxcIiB8fCB0eXBlID09PSBcIm9wYWNpdHktc2xpZGVyXCIpICYmXG4gICAgICAgIHRoaXMub3BhY2l0eVNsaWRlclJlbmRlcmluZ0NvbnRleHQpIHtcbiAgICAgICAgdGhpcy5kcmF3T3BhY2l0eVNsaWRlcigpO1xuICAgICAgfVxuICAgIH0sIHRocm90dGxlRm9yNjBGcHNJbk1zKTtcbiAgICB0aGlzLmNhcHR1cmVDb2xvckZpZWxkQ29sb3IgPSAoeCwgeSwgc2tpcEVxdWFsID0gdHJ1ZSkgPT4ge1xuICAgICAgY29uc3QgeyBkaW1lbnNpb25zOiB7IGNvbG9yRmllbGQ6IHsgaGVpZ2h0LCB3aWR0aCB9LCB9LCB9ID0gdGhpcztcbiAgICAgIGNvbnN0IHNhdHVyYXRpb24gPSBNYXRoLnJvdW5kKChIU1ZfTElNSVRTLnMgLyB3aWR0aCkgKiB4KTtcbiAgICAgIGNvbnN0IHZhbHVlID0gTWF0aC5yb3VuZCgoSFNWX0xJTUlUUy52IC8gaGVpZ2h0KSAqIChoZWlnaHQgLSB5KSk7XG4gICAgICB0aGlzLmludGVybmFsQ29sb3JTZXQodGhpcy5iYXNlQ29sb3JGaWVsZENvbG9yLmhzdigpLnNhdHVyYXRpb252KHNhdHVyYXRpb24pLnZhbHVlKHZhbHVlKSwgc2tpcEVxdWFsKTtcbiAgICB9O1xuICAgIHRoaXMuaW5pdENvbG9yRmllbGQgPSAoY2FudmFzKSA9PiB7XG4gICAgICB0aGlzLmNvbG9yRmllbGRSZW5kZXJpbmdDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIHRoaXMudXBkYXRlQ2FudmFzU2l6ZShcImNvbG9yLWZpZWxkXCIpO1xuICAgICAgdGhpcy5kcmF3Q29sb3JDb250cm9scygpO1xuICAgIH07XG4gICAgdGhpcy5pbml0SHVlU2xpZGVyID0gKGNhbnZhcykgPT4ge1xuICAgICAgdGhpcy5odWVTbGlkZXJSZW5kZXJpbmdDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIHRoaXMudXBkYXRlQ2FudmFzU2l6ZShcImh1ZS1zbGlkZXJcIik7XG4gICAgICB0aGlzLmRyYXdIdWVTbGlkZXIoKTtcbiAgICB9O1xuICAgIHRoaXMuaW5pdE9wYWNpdHlTbGlkZXIgPSAoY2FudmFzKSA9PiB7XG4gICAgICBpZiAoIWNhbnZhcykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm9wYWNpdHlTbGlkZXJSZW5kZXJpbmdDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIHRoaXMudXBkYXRlQ2FudmFzU2l6ZShcIm9wYWNpdHktc2xpZGVyXCIpO1xuICAgICAgdGhpcy5kcmF3T3BhY2l0eVNsaWRlcigpO1xuICAgIH07XG4gICAgdGhpcy5zdG9yZU9wYWNpdHlTY29wZSA9IChub2RlKSA9PiB7XG4gICAgICB0aGlzLm9wYWNpdHlTY29wZU5vZGUgPSBub2RlO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVPcGFjaXR5U2NvcGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBtb2RpZmllciA9IGV2ZW50LnNoaWZ0S2V5ID8gMTAgOiAxO1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgICAgY29uc3QgYXJyb3dLZXlUb1hPZmZzZXQgPSB7XG4gICAgICAgIEFycm93VXA6IDAuMDEsXG4gICAgICAgIEFycm93UmlnaHQ6IDAuMDEsXG4gICAgICAgIEFycm93RG93bjogLTAuMDEsXG4gICAgICAgIEFycm93TGVmdDogLTAuMDEsXG4gICAgICB9O1xuICAgICAgaWYgKGFycm93S2V5VG9YT2Zmc2V0W2tleV0pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBhcnJvd0tleVRvWE9mZnNldFtrZXldICogbW9kaWZpZXI7XG4gICAgICAgIGNvbnN0IGFscGhhID0gdGhpcy5iYXNlQ29sb3JGaWVsZENvbG9yLmFscGhhKCk7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5iYXNlQ29sb3JGaWVsZENvbG9yLmFscGhhKGFscGhhICsgZGVsdGEpO1xuICAgICAgICB0aGlzLmludGVybmFsQ29sb3JTZXQoY29sb3IsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuYWxsb3dFbXB0eSA9IGZhbHNlO1xuICAgIHRoaXMuYWxwaGFDaGFubmVsID0gZmFsc2U7XG4gICAgdGhpcy5jaGFubmVsc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5jb2xvciA9IERFRkFVTFRfQ09MT1I7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybWF0ID0gXCJhdXRvXCI7XG4gICAgdGhpcy5oaWRlQ2hhbm5lbHMgPSBmYWxzZTtcbiAgICB0aGlzLmhleERpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5oaWRlSGV4ID0gZmFsc2U7XG4gICAgdGhpcy5oaWRlU2F2ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNhdmVkRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5zdG9yYWdlSWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmFsdWUgPSBub3JtYWxpemVIZXgoaGV4aWZ5KERFRkFVTFRfQ09MT1IsIHRoaXMuYWxwaGFDaGFubmVsKSk7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jaGFubmVsTW9kZSA9IFwicmdiXCI7XG4gICAgdGhpcy5jaGFubmVscyA9IHRoaXMudG9DaGFubmVscyhERUZBVUxUX0NPTE9SKTtcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSBESU1FTlNJT05TLm07XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zYXZlZENvbG9ycyA9IFtdO1xuICAgIHRoaXMuY29sb3JGaWVsZFNjb3BlVG9wID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY29sb3JGaWVsZFNjb3BlTGVmdCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmh1ZVNjb3BlTGVmdCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9wYWNpdHlTY29wZUxlZnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY29wZU9yaWVudGF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIGhhbmRsZUFscGhhQ2hhbm5lbENoYW5nZShhbHBoYUNoYW5uZWwpIHtcbiAgICBjb25zdCB7IGZvcm1hdCB9ID0gdGhpcztcbiAgICBpZiAoYWxwaGFDaGFubmVsICYmIGZvcm1hdCAhPT0gXCJhdXRvXCIgJiYgIWFscGhhQ29tcGF0aWJsZShmb3JtYXQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oYGlnbm9yaW5nIGFscGhhQ2hhbm5lbCBhcyB0aGUgY3VycmVudCBmb3JtYXQgKCR7Zm9ybWF0fSkgZG9lcyBub3Qgc3VwcG9ydCBhbHBoYWApO1xuICAgICAgdGhpcy5hbHBoYUNoYW5uZWwgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlQ29sb3JDaGFuZ2UoY29sb3IsIG9sZENvbG9yKSB7XG4gICAgdGhpcy5kcmF3Q29sb3JDb250cm9scygpO1xuICAgIHRoaXMudXBkYXRlQ2hhbm5lbHNGcm9tQ29sb3IoY29sb3IpO1xuICAgIHRoaXMucHJldmlvdXNDb2xvciA9IG9sZENvbG9yO1xuICB9XG4gIGhhbmRsZUZvcm1hdE9yQWxwaGFDaGFubmVsQ2hhbmdlKCkge1xuICAgIHRoaXMuc2V0TW9kZSh0aGlzLmZvcm1hdCk7XG4gICAgdGhpcy5pbnRlcm5hbENvbG9yU2V0KHRoaXMuY29sb3IsIGZhbHNlLCBcImludGVybmFsXCIpO1xuICB9XG4gIGhhbmRsZVNjYWxlQ2hhbmdlKHNjYWxlID0gXCJtXCIpIHtcbiAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoc2NhbGUpO1xuICAgIHRoaXMudXBkYXRlQ2FudmFzU2l6ZShcImFsbFwiKTtcbiAgICB0aGlzLmRyYXdDb2xvckNvbnRyb2xzKCk7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIGhhbmRsZVZhbHVlQ2hhbmdlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGNvbnN0IHsgYWxsb3dFbXB0eSwgZm9ybWF0IH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoZWNrTW9kZSA9ICFhbGxvd0VtcHR5IHx8IHZhbHVlO1xuICAgIGxldCBtb2RlQ2hhbmdlZCA9IGZhbHNlO1xuICAgIGlmIChjaGVja01vZGUpIHtcbiAgICAgIGNvbnN0IG5leHRNb2RlID0gcGFyc2VNb2RlKHZhbHVlKTtcbiAgICAgIGlmICghbmV4dE1vZGUgfHwgKGZvcm1hdCAhPT0gXCJhdXRvXCIgJiYgbmV4dE1vZGUgIT09IGZvcm1hdCkpIHtcbiAgICAgICAgdGhpcy5zaG93SW5jb21wYXRpYmxlQ29sb3JXYXJuaW5nKHZhbHVlLCBmb3JtYXQpO1xuICAgICAgICB0aGlzLnZhbHVlID0gb2xkVmFsdWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG1vZGVDaGFuZ2VkID0gdGhpcy5tb2RlICE9PSBuZXh0TW9kZTtcbiAgICAgIHRoaXMuc2V0TW9kZShuZXh0TW9kZSwgdGhpcy5pbnRlcm5hbENvbG9yVXBkYXRlQ29udGV4dCA9PT0gbnVsbCk7XG4gICAgfVxuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5hY3RpdmVDYW52YXNJbmZvO1xuICAgIGlmICh0aGlzLmludGVybmFsQ29sb3JVcGRhdGVDb250ZXh0ID09PSBcImluaXRpYWxcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbnRlcm5hbENvbG9yVXBkYXRlQ29udGV4dCA9PT0gXCJ1c2VyLWludGVyYWN0aW9uXCIpIHtcbiAgICAgIHRoaXMuY2FsY2l0ZUNvbG9yUGlja2VySW5wdXQuZW1pdCgpO1xuICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICB0aGlzLmNhbGNpdGVDb2xvclBpY2tlckNoYW5nZS5lbWl0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbG9yJDEgPSBhbGxvd0VtcHR5ICYmICF2YWx1ZVxuICAgICAgPyBudWxsXG4gICAgICA6IGNvbG9yKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIGFscGhhQ29tcGF0aWJsZSh0aGlzLm1vZGUpXG4gICAgICAgID8gbm9ybWFsaXplQ29sb3IodmFsdWUpXG4gICAgICAgIDogdmFsdWUpO1xuICAgIGNvbnN0IGNvbG9yQ2hhbmdlZCA9ICFjb2xvckVxdWFsKGNvbG9yJDEsIHRoaXMuY29sb3IpO1xuICAgIGlmIChtb2RlQ2hhbmdlZCB8fCBjb2xvckNoYW5nZWQpIHtcbiAgICAgIHRoaXMuaW50ZXJuYWxDb2xvclNldChjb2xvciQxLCB0aGlzLmFscGhhQ2hhbm5lbCAmJiAhKHRoaXMubW9kZS5lbmRzV2l0aChcImFcIikgfHwgdGhpcy5tb2RlLmVuZHNXaXRoKFwiYS1jc3NcIikpLCBcImludGVybmFsXCIpO1xuICAgIH1cbiAgfVxuICBnZXQgYmFzZUNvbG9yRmllbGRDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvciB8fCB0aGlzLnByZXZpb3VzQ29sb3IgfHwgREVGQVVMVF9DT0xPUjtcbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vIHVzaW5nIEBMaXN0ZW4gYXMgYSB3b3JrYXJvdW5kIGZvciBWRE9NIGxpc3RlbmVyIG5vdCBmaXJpbmdcbiAgaGFuZGxlQ2hhbm5lbEtleVVwT3JEb3duKGV2ZW50KSB7XG4gICAgdGhpcy5zaGlmdEtleUNoYW5uZWxBZGp1c3RtZW50ID0gMDtcbiAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG4gICAgaWYgKChrZXkgIT09IFwiQXJyb3dVcFwiICYmIGtleSAhPT0gXCJBcnJvd0Rvd25cIikgfHxcbiAgICAgICFldmVudC5jb21wb3NlZFBhdGgoKS5zb21lKChub2RlKSA9PiBub2RlLmNsYXNzTGlzdD8uY29udGFpbnMoQ1NTLmNoYW5uZWwpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IHNoaWZ0S2V5IH0gPSBldmVudDtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5jb2xvcikge1xuICAgICAgdGhpcy5pbnRlcm5hbENvbG9yU2V0KHRoaXMucHJldmlvdXNDb2xvcik7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gdGhpcyBnZXRzIGFwcGxpZWQgdG8gdGhlIGlucHV0J3MgdXAvZG93biBhcnJvdyBpbmNyZW1lbnQvZGVjcmVtZW50XG4gICAgY29uc3QgY29tcGxlbWVudGFyeUJ1bXAgPSA5O1xuICAgIHRoaXMuc2hpZnRLZXlDaGFubmVsQWRqdXN0bWVudCA9XG4gICAgICBrZXkgPT09IFwiQXJyb3dVcFwiICYmIHNoaWZ0S2V5XG4gICAgICAgID8gY29tcGxlbWVudGFyeUJ1bXBcbiAgICAgICAgOiBrZXkgPT09IFwiQXJyb3dEb3duXCIgJiYgc2hpZnRLZXlcbiAgICAgICAgICA/IC1jb21wbGVtZW50YXJ5QnVtcFxuICAgICAgICAgIDogMDtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQncyBmaXJzdCBmb2N1c2FibGUgZWxlbWVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIGNvbnN0IHsgYWxsb3dFbXB0eSwgY29sb3I6IGNvbG9yJDEsIGZvcm1hdCwgdmFsdWUgfSA9IHRoaXM7XG4gICAgY29uc3Qgd2lsbFNldE5vQ29sb3IgPSBhbGxvd0VtcHR5ICYmICF2YWx1ZTtcbiAgICBjb25zdCBwYXJzZWRNb2RlID0gcGFyc2VNb2RlKHZhbHVlKTtcbiAgICBjb25zdCB2YWx1ZUlzQ29tcGF0aWJsZSA9IHdpbGxTZXROb0NvbG9yIHx8IChmb3JtYXQgPT09IFwiYXV0b1wiICYmIHBhcnNlZE1vZGUpIHx8IGZvcm1hdCA9PT0gcGFyc2VkTW9kZTtcbiAgICBjb25zdCBpbml0aWFsQ29sb3IgPSB3aWxsU2V0Tm9Db2xvciA/IG51bGwgOiB2YWx1ZUlzQ29tcGF0aWJsZSA/IGNvbG9yKHZhbHVlKSA6IGNvbG9yJDE7XG4gICAgaWYgKCF2YWx1ZUlzQ29tcGF0aWJsZSkge1xuICAgICAgdGhpcy5zaG93SW5jb21wYXRpYmxlQ29sb3JXYXJuaW5nKHZhbHVlLCBmb3JtYXQpO1xuICAgIH1cbiAgICB0aGlzLnNldE1vZGUoZm9ybWF0LCBmYWxzZSk7XG4gICAgdGhpcy5pbnRlcm5hbENvbG9yU2V0KGluaXRpYWxDb2xvciwgZmFsc2UsIFwiaW5pdGlhbFwiKTtcbiAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnModGhpcy5zY2FsZSk7XG4gICAgY29uc3Qgc3RvcmFnZUtleSA9IGAke0RFRkFVTFRfU1RPUkFHRV9LRVlfUFJFRklYfSR7dGhpcy5zdG9yYWdlSWR9YDtcbiAgICBpZiAodGhpcy5zdG9yYWdlSWQgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSkpIHtcbiAgICAgIHRoaXMuc2F2ZWRDb2xvcnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpKTtcbiAgICB9XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIHRoaXMuZ2xvYmFsUG9pbnRlck1vdmVIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIHRoaXMuZ2xvYmFsUG9pbnRlclVwSGFuZGxlcik7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhbGxvd0VtcHR5LCBjaGFubmVsc0Rpc2FibGVkLCBjb2xvciwgY29sb3JGaWVsZFNjb3BlTGVmdCwgY29sb3JGaWVsZFNjb3BlVG9wLCBkaW1lbnNpb25zOiB7IHNsaWRlcjogeyB3aWR0aDogc2xpZGVyV2lkdGggfSwgdGh1bWI6IHsgcmFkaXVzOiB0aHVtYlJhZGl1cyB9LCB9LCBoZXhEaXNhYmxlZCwgaGlkZUNoYW5uZWxzLCBoaWRlSGV4LCBoaWRlU2F2ZWQsIGh1ZVNjb3BlTGVmdCwgbWVzc2FnZXMsIGFscGhhQ2hhbm5lbCwgb3BhY2l0eVNjb3BlTGVmdCwgc2F2ZWRDb2xvcnMsIHNhdmVkRGlzYWJsZWQsIHNjYWxlLCBzY29wZU9yaWVudGF0aW9uLCB9ID0gdGhpcztcbiAgICBjb25zdCBzZWxlY3RlZENvbG9ySW5IZXggPSBjb2xvciA/IGhleGlmeShjb2xvciwgYWxwaGFDaGFubmVsKSA6IG51bGw7XG4gICAgY29uc3QgaHVlVG9wID0gdGh1bWJSYWRpdXM7XG4gICAgY29uc3QgaHVlTGVmdCA9IGh1ZVNjb3BlTGVmdCA/PyAoc2xpZGVyV2lkdGggKiBERUZBVUxUX0NPTE9SLmh1ZSgpKSAvIEhTVl9MSU1JVFMuaDtcbiAgICBjb25zdCBvcGFjaXR5VG9wID0gdGh1bWJSYWRpdXM7XG4gICAgY29uc3Qgb3BhY2l0eUxlZnQgPSBvcGFjaXR5U2NvcGVMZWZ0ID8/XG4gICAgICAoc2xpZGVyV2lkdGggKiBhbHBoYVRvT3BhY2l0eShERUZBVUxUX0NPTE9SLmFscGhhKCkpKSAvIE9QQUNJVFlfTElNSVRTLm1heDtcbiAgICBjb25zdCBub0NvbG9yID0gY29sb3IgPT09IG51bGw7XG4gICAgY29uc3QgdmVydGljYWwgPSBzY29wZU9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCI7XG4gICAgY29uc3Qgbm9IZXggPSBoZXhEaXNhYmxlZCB8fCBoaWRlSGV4O1xuICAgIGNvbnN0IG5vQ2hhbm5lbHMgPSBjaGFubmVsc0Rpc2FibGVkIHx8IGhpZGVDaGFubmVscztcbiAgICBjb25zdCBub1NhdmVkID0gc2F2ZWREaXNhYmxlZCB8fCBoaWRlU2F2ZWQ7XG4gICAgY29uc3QgW2FkanVzdGVkQ29sb3JGaWVsZFNjb3BlTGVmdCwgYWRqdXN0ZWRDb2xvckZpZWxkU2NvcGVUb3BdID0gdGhpcy5nZXRBZGp1c3RlZFNjb3BlUG9zaXRpb24oY29sb3JGaWVsZFNjb3BlTGVmdCwgY29sb3JGaWVsZFNjb3BlVG9wKTtcbiAgICBjb25zdCBbYWRqdXN0ZWRIdWVTY29wZUxlZnQsIGFkanVzdGVkSHVlU2NvcGVUb3BdID0gdGhpcy5nZXRBZGp1c3RlZFNjb3BlUG9zaXRpb24oaHVlTGVmdCwgaHVlVG9wKTtcbiAgICBjb25zdCBbYWRqdXN0ZWRPcGFjaXR5U2NvcGVMZWZ0LCBhZGp1c3RlZE9wYWNpdHlTY29wZVRvcF0gPSB0aGlzLmdldEFkanVzdGVkU2NvcGVQb3NpdGlvbihvcGFjaXR5TGVmdCwgb3BhY2l0eVRvcCk7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250YWluZXIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udHJvbEFuZFNjb3BlIH0sIGgoXCJjYW52YXNcIiwgeyBjbGFzczogQ1NTLmNvbG9yRmllbGQsIG9uUG9pbnRlckRvd246IHRoaXMuaGFuZGxlQ29sb3JGaWVsZFBvaW50ZXJEb3duLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5pbml0Q29sb3JGaWVsZCB9KSwgaChcImRpdlwiLCB7IFwiYXJpYS1sYWJlbFwiOiB2ZXJ0aWNhbCA/IG1lc3NhZ2VzLnZhbHVlIDogbWVzc2FnZXMuc2F0dXJhdGlvbiwgXCJhcmlhLXZhbHVlbWF4XCI6IHZlcnRpY2FsID8gSFNWX0xJTUlUUy52IDogSFNWX0xJTUlUUy5zLCBcImFyaWEtdmFsdWVtaW5cIjogXCIwXCIsIFwiYXJpYS12YWx1ZW5vd1wiOiAodmVydGljYWwgPyBjb2xvcj8uc2F0dXJhdGlvbnYoKSA6IGNvbG9yPy52YWx1ZSgpKSB8fCBcIjBcIiwgY2xhc3M6IHsgW0NTUy5zY29wZV06IHRydWUsIFtDU1MuY29sb3JGaWVsZFNjb3BlXTogdHJ1ZSB9LCBvbktleURvd246IHRoaXMuaGFuZGxlQ29sb3JGaWVsZFNjb3BlS2V5RG93biwgcm9sZTogXCJzbGlkZXJcIiwgc3R5bGU6IHtcbiAgICAgICAgdG9wOiBgJHthZGp1c3RlZENvbG9yRmllbGRTY29wZVRvcCB8fCAwfXB4YCxcbiAgICAgICAgbGVmdDogYCR7YWRqdXN0ZWRDb2xvckZpZWxkU2NvcGVMZWZ0IHx8IDB9cHhgLFxuICAgICAgfSwgdGFiaW5kZXg6IFwiMFwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogdGhpcy5zdG9yZUNvbG9yRmllbGRTY29wZSB9KSksIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLnByZXZpZXdBbmRTbGlkZXJzIH0sIGgoXCJjYWxjaXRlLWNvbG9yLXBpY2tlci1zd2F0Y2hcIiwgeyBjbGFzczogQ1NTLnByZXZpZXcsIGNvbG9yOiBzZWxlY3RlZENvbG9ySW5IZXgsIHNjYWxlOiBcImxcIiB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1Muc2xpZGVycyB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250cm9sQW5kU2NvcGUgfSwgaChcImNhbnZhc1wiLCB7IGNsYXNzOiB7IFtDU1Muc2xpZGVyXTogdHJ1ZSwgW0NTUy5odWVTbGlkZXJdOiB0cnVlIH0sIG9uUG9pbnRlckRvd246IHRoaXMuaGFuZGxlSHVlU2xpZGVyUG9pbnRlckRvd24sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiB0aGlzLmluaXRIdWVTbGlkZXIgfSksIGgoXCJkaXZcIiwgeyBcImFyaWEtbGFiZWxcIjogbWVzc2FnZXMuaHVlLCBcImFyaWEtdmFsdWVtYXhcIjogSFNWX0xJTUlUUy5oLCBcImFyaWEtdmFsdWVtaW5cIjogXCIwXCIsIFwiYXJpYS12YWx1ZW5vd1wiOiBjb2xvcj8ucm91bmQoKS5odWUoKSB8fCBERUZBVUxUX0NPTE9SLnJvdW5kKCkuaHVlKCksIGNsYXNzOiB7IFtDU1Muc2NvcGVdOiB0cnVlLCBbQ1NTLmh1ZVNjb3BlXTogdHJ1ZSB9LCBvbktleURvd246IHRoaXMuaGFuZGxlSHVlU2NvcGVLZXlEb3duLCByb2xlOiBcInNsaWRlclwiLCBzdHlsZToge1xuICAgICAgICB0b3A6IGAke2FkanVzdGVkSHVlU2NvcGVUb3B9cHhgLFxuICAgICAgICBsZWZ0OiBgJHthZGp1c3RlZEh1ZVNjb3BlTGVmdH1weGAsXG4gICAgICB9LCB0YWJpbmRleDogXCIwXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiB0aGlzLnN0b3JlSHVlU2NvcGUgfSkpLCBhbHBoYUNoYW5uZWwgPyAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udHJvbEFuZFNjb3BlIH0sIGgoXCJjYW52YXNcIiwgeyBjbGFzczogeyBbQ1NTLnNsaWRlcl06IHRydWUsIFtDU1Mub3BhY2l0eVNsaWRlcl06IHRydWUgfSwgb25Qb2ludGVyRG93bjogdGhpcy5oYW5kbGVPcGFjaXR5U2xpZGVyUG9pbnRlckRvd24sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiB0aGlzLmluaXRPcGFjaXR5U2xpZGVyIH0pLCBoKFwiZGl2XCIsIHsgXCJhcmlhLWxhYmVsXCI6IG1lc3NhZ2VzLm9wYWNpdHksIFwiYXJpYS12YWx1ZW1heFwiOiBPUEFDSVRZX0xJTUlUUy5tYXgsIFwiYXJpYS12YWx1ZW1pblwiOiBPUEFDSVRZX0xJTUlUUy5taW4sIFwiYXJpYS12YWx1ZW5vd1wiOiAoY29sb3IgfHwgREVGQVVMVF9DT0xPUikucm91bmQoKS5hbHBoYSgpLCBjbGFzczogeyBbQ1NTLnNjb3BlXTogdHJ1ZSwgW0NTUy5vcGFjaXR5U2NvcGVdOiB0cnVlIH0sIG9uS2V5RG93bjogdGhpcy5oYW5kbGVPcGFjaXR5U2NvcGVLZXlEb3duLCByb2xlOiBcInNsaWRlclwiLCBzdHlsZToge1xuICAgICAgICB0b3A6IGAke2FkanVzdGVkT3BhY2l0eVNjb3BlVG9wfXB4YCxcbiAgICAgICAgbGVmdDogYCR7YWRqdXN0ZWRPcGFjaXR5U2NvcGVMZWZ0fXB4YCxcbiAgICAgIH0sIHRhYmluZGV4OiBcIjBcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IHRoaXMuc3RvcmVPcGFjaXR5U2NvcGUgfSkpKSA6IG51bGwpKSwgbm9IZXggJiYgbm9DaGFubmVscyA/IG51bGwgOiAoaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtDU1MuY29udHJvbFNlY3Rpb25dOiB0cnVlLFxuICAgICAgICBbQ1NTLnNlY3Rpb25dOiB0cnVlLFxuICAgICAgfSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5oZXhBbmRDaGFubmVsc0dyb3VwIH0sIG5vSGV4ID8gbnVsbCA6IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5oZXhPcHRpb25zIH0sIGgoXCJjYWxjaXRlLWNvbG9yLXBpY2tlci1oZXgtaW5wdXRcIiwgeyBhbGxvd0VtcHR5OiBhbGxvd0VtcHR5LCBhbHBoYUNoYW5uZWw6IGFscGhhQ2hhbm5lbCwgY2xhc3M6IENTUy5jb250cm9sLCBtZXNzYWdlczogbWVzc2FnZXMsIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sIG9uQ2FsY2l0ZUNvbG9yUGlja2VySGV4SW5wdXRDaGFuZ2U6IHRoaXMuaGFuZGxlSGV4SW5wdXRDaGFuZ2UsIHNjYWxlOiBzY2FsZSwgdmFsdWU6IHNlbGVjdGVkQ29sb3JJbkhleCB9KSkpLCBub0NoYW5uZWxzID8gbnVsbCA6IChoKFwiY2FsY2l0ZS10YWJzXCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5jb2xvck1vZGVDb250YWluZXJdOiB0cnVlLFxuICAgICAgICBbQ1NTLnNwbGl0U2VjdGlvbl06IHRydWUsXG4gICAgICB9LCBzY2FsZTogc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9LCBoKFwiY2FsY2l0ZS10YWItbmF2XCIsIHsgc2xvdDogXCJ0aXRsZS1ncm91cFwiIH0sIHRoaXMucmVuZGVyQ2hhbm5lbHNUYWJUaXRsZShcInJnYlwiKSwgdGhpcy5yZW5kZXJDaGFubmVsc1RhYlRpdGxlKFwiaHN2XCIpKSwgdGhpcy5yZW5kZXJDaGFubmVsc1RhYihcInJnYlwiKSwgdGhpcy5yZW5kZXJDaGFubmVsc1RhYihcImhzdlwiKSkpKSkpLCBub1NhdmVkID8gbnVsbCA6IChoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUy5zYXZlZENvbG9yc1NlY3Rpb25dOiB0cnVlLCBbQ1NTLnNlY3Rpb25dOiB0cnVlIH0gfSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuaGVhZGVyIH0sIGgoXCJsYWJlbFwiLCBudWxsLCBtZXNzYWdlcy5zYXZlZCksIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLnNhdmVkQ29sb3JzQnV0dG9ucyB9LCBoKFwiY2FsY2l0ZS1idXR0b25cIiwgeyBhcHBlYXJhbmNlOiBcInRyYW5zcGFyZW50XCIsIGNsYXNzOiBDU1MuZGVsZXRlQ29sb3IsIGRpc2FibGVkOiBub0NvbG9yLCBpY29uU3RhcnQ6IFwibWludXNcIiwga2luZDogXCJuZXV0cmFsXCIsIGxhYmVsOiBtZXNzYWdlcy5kZWxldGVDb2xvciwgb25DbGljazogdGhpcy5kZWxldGVDb2xvciwgc2NhbGU6IHNjYWxlLCB0eXBlOiBcImJ1dHRvblwiIH0pLCBoKFwiY2FsY2l0ZS1idXR0b25cIiwgeyBhcHBlYXJhbmNlOiBcInRyYW5zcGFyZW50XCIsIGNsYXNzOiBDU1Muc2F2ZUNvbG9yLCBkaXNhYmxlZDogbm9Db2xvciwgaWNvblN0YXJ0OiBcInBsdXNcIiwga2luZDogXCJuZXV0cmFsXCIsIGxhYmVsOiBtZXNzYWdlcy5zYXZlQ29sb3IsIG9uQ2xpY2s6IHRoaXMuc2F2ZUNvbG9yLCBzY2FsZTogc2NhbGUsIHR5cGU6IFwiYnV0dG9uXCIgfSkpKSwgc2F2ZWRDb2xvcnMubGVuZ3RoID4gMCA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5zYXZlZENvbG9ycyB9LCBbXG4gICAgICAuLi5zYXZlZENvbG9ycy5tYXAoKGNvbG9yKSA9PiAoaChcImNhbGNpdGUtY29sb3ItcGlja2VyLXN3YXRjaFwiLCB7IGNsYXNzOiBDU1Muc2F2ZWRDb2xvciwgY29sb3I6IGNvbG9yLCBrZXk6IGNvbG9yLCBvbkNsaWNrOiB0aGlzLmhhbmRsZVNhdmVkQ29sb3JTZWxlY3QsIG9uS2V5RG93bjogdGhpcy5oYW5kbGVTYXZlZENvbG9yS2V5RG93biwgc2NhbGU6IHNjYWxlLCB0YWJJbmRleDogMCB9KSkpLFxuICAgIF0pKSA6IG51bGwpKSkpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuICBzaG93SW5jb21wYXRpYmxlQ29sb3JXYXJuaW5nKHZhbHVlLCBmb3JtYXQpIHtcbiAgICBjb25zb2xlLndhcm4oYGlnbm9yaW5nIGNvbG9yIHZhbHVlICgke3ZhbHVlfSkgYXMgaXQgaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgY3VycmVudCBmb3JtYXQgKCR7Zm9ybWF0fSlgKTtcbiAgfVxuICBzZXRNb2RlKGZvcm1hdCwgd2FybiA9IHRydWUpIHtcbiAgICBjb25zdCBtb2RlID0gZm9ybWF0ID09PSBcImF1dG9cIiA/IHRoaXMubW9kZSA6IGZvcm1hdDtcbiAgICB0aGlzLm1vZGUgPSB0aGlzLmVuc3VyZUNvbXBhdGlibGVNb2RlKG1vZGUsIHdhcm4pO1xuICB9XG4gIGVuc3VyZUNvbXBhdGlibGVNb2RlKG1vZGUsIHdhcm4pIHtcbiAgICBjb25zdCB7IGFscGhhQ2hhbm5lbCB9ID0gdGhpcztcbiAgICBjb25zdCBpc0FscGhhQ29tcGF0aWJsZSA9IGFscGhhQ29tcGF0aWJsZShtb2RlKTtcbiAgICBpZiAoYWxwaGFDaGFubmVsICYmICFpc0FscGhhQ29tcGF0aWJsZSkge1xuICAgICAgY29uc3QgYWxwaGFNb2RlID0gdG9BbHBoYU1vZGUobW9kZSk7XG4gICAgICBpZiAod2Fybikge1xuICAgICAgICBjb25zb2xlLndhcm4oYHNldHRpbmcgZm9ybWF0IHRvICgke2FscGhhTW9kZX0pIGFzIHRoZSBwcm92aWRlZCBvbmUgKCR7bW9kZX0pIGRvZXMgbm90IHN1cHBvcnQgYWxwaGFgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbHBoYU1vZGU7XG4gICAgfVxuICAgIGlmICghYWxwaGFDaGFubmVsICYmIGlzQWxwaGFDb21wYXRpYmxlKSB7XG4gICAgICBjb25zdCBub25BbHBoYU1vZGUgPSB0b05vbkFscGhhTW9kZShtb2RlKTtcbiAgICAgIGlmICh3YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2Fybihgc2V0dGluZyBmb3JtYXQgdG8gKCR7bm9uQWxwaGFNb2RlfSkgYXMgdGhlIHByb3ZpZGVkIG9uZSAoJHttb2RlfSkgZG9lcyBub3Qgc3VwcG9ydCBhbHBoYWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5vbkFscGhhTW9kZTtcbiAgICB9XG4gICAgcmV0dXJuIG1vZGU7XG4gIH1cbiAgY2FwdHVyZUh1ZVNsaWRlckNvbG9yKHgpIHtcbiAgICBjb25zdCB7IGRpbWVuc2lvbnM6IHsgc2xpZGVyOiB7IHdpZHRoIH0sIH0sIH0gPSB0aGlzO1xuICAgIGNvbnN0IGh1ZSA9IChIVUVfTElNSVRfQ09OU1RSQUlORUQgLyB3aWR0aCkgKiB4O1xuICAgIHRoaXMuaW50ZXJuYWxDb2xvclNldCh0aGlzLmJhc2VDb2xvckZpZWxkQ29sb3IuaHVlKGh1ZSksIGZhbHNlKTtcbiAgfVxuICBjYXB0dXJlT3BhY2l0eVNsaWRlclZhbHVlKHgpIHtcbiAgICBjb25zdCB7IGRpbWVuc2lvbnM6IHsgc2xpZGVyOiB7IHdpZHRoIH0sIH0sIH0gPSB0aGlzO1xuICAgIGNvbnN0IGFscGhhID0gb3BhY2l0eVRvQWxwaGEoKE9QQUNJVFlfTElNSVRTLm1heCAvIHdpZHRoKSAqIHgpO1xuICAgIHRoaXMuaW50ZXJuYWxDb2xvclNldCh0aGlzLmJhc2VDb2xvckZpZWxkQ29sb3IuYWxwaGEoYWxwaGEpLCBmYWxzZSk7XG4gIH1cbiAgaW50ZXJuYWxDb2xvclNldChjb2xvciwgc2tpcEVxdWFsID0gdHJ1ZSwgY29udGV4dCA9IFwidXNlci1pbnRlcmFjdGlvblwiKSB7XG4gICAgaWYgKHNraXBFcXVhbCAmJiBjb2xvckVxdWFsKGNvbG9yLCB0aGlzLmNvbG9yKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmludGVybmFsQ29sb3JVcGRhdGVDb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudG9WYWx1ZShjb2xvcik7XG4gICAgdGhpcy5pbnRlcm5hbENvbG9yVXBkYXRlQ29udGV4dCA9IG51bGw7XG4gIH1cbiAgdG9WYWx1ZShjb2xvciwgZm9ybWF0ID0gdGhpcy5tb2RlKSB7XG4gICAgaWYgKCFjb2xvcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGhleE1vZGUgPSBcImhleFwiO1xuICAgIGlmIChmb3JtYXQuaW5jbHVkZXMoaGV4TW9kZSkpIHtcbiAgICAgIGNvbnN0IGhhc0FscGhhID0gZm9ybWF0ID09PSBDU1NDb2xvck1vZGUuSEVYQTtcbiAgICAgIHJldHVybiBub3JtYWxpemVIZXgoaGV4aWZ5KGNvbG9yLnJvdW5kKCksIGhhc0FscGhhKSwgaGFzQWxwaGEpO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0LmluY2x1ZGVzKFwiLWNzc1wiKSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBjb2xvcltmb3JtYXQucmVwbGFjZShcIi1jc3NcIiwgXCJcIikucmVwbGFjZShcImFcIiwgXCJcIildKCkucm91bmQoKS5zdHJpbmcoKTtcbiAgICAgIC8vIENvbG9yIG9taXRzIGFscGhhIHZhbHVlcyB3aGVuIGFscGhhIGlzIDFcbiAgICAgIGNvbnN0IG5lZWRUb0luamVjdEFscGhhID0gKGZvcm1hdC5lbmRzV2l0aChcImFcIikgfHwgZm9ybWF0LmVuZHNXaXRoKFwiYS1jc3NcIikpICYmIGNvbG9yLmFscGhhKCkgPT09IDE7XG4gICAgICBpZiAobmVlZFRvSW5qZWN0QWxwaGEpIHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSB2YWx1ZS5zbGljZSgwLCAzKTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWUuc2xpY2UoNCwgLTEpO1xuICAgICAgICByZXR1cm4gYCR7bW9kZWx9YSgke3ZhbHVlc30sICR7Y29sb3IuYWxwaGEoKX0pYDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgY29sb3JPYmplY3QgPSBcbiAgICAvKiBDb2xvcigpIGRvZXMgbm90IHN1cHBvcnQgaHN2YSwgaHNsYSBub3IgcmdiYSwgc28gd2UgdXNlIHRoZSBub24tYWxwaGEgbW9kZSAqL1xuICAgIGNvbG9yW3RvTm9uQWxwaGFNb2RlKGZvcm1hdCldKCkucm91bmQoKS5vYmplY3QoKTtcbiAgICBpZiAoZm9ybWF0LmVuZHNXaXRoKFwiYVwiKSkge1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZUFscGhhKGNvbG9yT2JqZWN0KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9yT2JqZWN0O1xuICB9XG4gIGdldFNsaWRlckNhcFNwYWNpbmcoKSB7XG4gICAgY29uc3QgeyBkaW1lbnNpb25zOiB7IHNsaWRlcjogeyBoZWlnaHQgfSwgdGh1bWI6IHsgcmFkaXVzIH0sIH0sIH0gPSB0aGlzO1xuICAgIHJldHVybiByYWRpdXMgKiAyIC0gaGVpZ2h0O1xuICB9XG4gIHVwZGF0ZURpbWVuc2lvbnMoc2NhbGUgPSBcIm1cIikge1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IERJTUVOU0lPTlNbc2NhbGVdO1xuICB9XG4gIGRyYXdDb2xvckZpZWxkKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbG9yRmllbGRSZW5kZXJpbmdDb250ZXh0O1xuICAgIGNvbnN0IHsgZGltZW5zaW9uczogeyBjb2xvckZpZWxkOiB7IGhlaWdodCwgd2lkdGggfSwgfSwgfSA9IHRoaXM7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmJhc2VDb2xvckZpZWxkQ29sb3JcbiAgICAgIC5oc3YoKVxuICAgICAgLnNhdHVyYXRpb252KDEwMClcbiAgICAgIC52YWx1ZSgxMDApXG4gICAgICAuYWxwaGEoMSlcbiAgICAgIC5zdHJpbmcoKTtcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnN0IHdoaXRlR3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHdpZHRoLCAwKTtcbiAgICB3aGl0ZUdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIik7XG4gICAgd2hpdGVHcmFkaWVudC5hZGRDb2xvclN0b3AoMSwgXCJyZ2JhKDI1NSwyNTUsMjU1LDApXCIpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gd2hpdGVHcmFkaWVudDtcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnN0IGJsYWNrR3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGhlaWdodCk7XG4gICAgYmxhY2tHcmFkaWVudC5hZGRDb2xvclN0b3AoMCwgXCJyZ2JhKDAsMCwwLDApXCIpO1xuICAgIGJsYWNrR3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIFwicmdiYSgwLDAsMCwxKVwiKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGJsYWNrR3JhZGllbnQ7XG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLmRyYXdBY3RpdmVDb2xvckZpZWxkQ29sb3IoKTtcbiAgfVxuICBzZXRDYW52YXNDb250ZXh0U2l6ZShjYW52YXMsIHsgaGVpZ2h0LCB3aWR0aCB9KSB7XG4gICAgaWYgKCFjYW52YXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gICAgY2FudmFzLndpZHRoID0gd2lkdGggKiBkZXZpY2VQaXhlbFJhdGlvO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgKiBkZXZpY2VQaXhlbFJhdGlvO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjb250ZXh0LnNjYWxlKGRldmljZVBpeGVsUmF0aW8sIGRldmljZVBpeGVsUmF0aW8pO1xuICB9XG4gIHVwZGF0ZUNhbnZhc1NpemUoY29udGV4dCA9IFwiYWxsXCIpIHtcbiAgICBjb25zdCB7IGRpbWVuc2lvbnMgfSA9IHRoaXM7XG4gICAgaWYgKGNvbnRleHQgPT09IFwiYWxsXCIgfHwgY29udGV4dCA9PT0gXCJjb2xvci1maWVsZFwiKSB7XG4gICAgICB0aGlzLnNldENhbnZhc0NvbnRleHRTaXplKHRoaXMuY29sb3JGaWVsZFJlbmRlcmluZ0NvbnRleHQ/LmNhbnZhcywgZGltZW5zaW9ucy5jb2xvckZpZWxkKTtcbiAgICB9XG4gICAgY29uc3QgYWRqdXN0ZWRTbGlkZXJEaW1lbnNpb25zID0ge1xuICAgICAgd2lkdGg6IGRpbWVuc2lvbnMuc2xpZGVyLndpZHRoLFxuICAgICAgaGVpZ2h0OiBkaW1lbnNpb25zLnNsaWRlci5oZWlnaHQgKyAoZGltZW5zaW9ucy50aHVtYi5yYWRpdXMgLSBkaW1lbnNpb25zLnNsaWRlci5oZWlnaHQgLyAyKSAqIDIsXG4gICAgfTtcbiAgICBpZiAoY29udGV4dCA9PT0gXCJhbGxcIiB8fCBjb250ZXh0ID09PSBcImh1ZS1zbGlkZXJcIikge1xuICAgICAgdGhpcy5zZXRDYW52YXNDb250ZXh0U2l6ZSh0aGlzLmh1ZVNsaWRlclJlbmRlcmluZ0NvbnRleHQ/LmNhbnZhcywgYWRqdXN0ZWRTbGlkZXJEaW1lbnNpb25zKTtcbiAgICB9XG4gICAgaWYgKGNvbnRleHQgPT09IFwiYWxsXCIgfHwgY29udGV4dCA9PT0gXCJvcGFjaXR5LXNsaWRlclwiKSB7XG4gICAgICB0aGlzLnNldENhbnZhc0NvbnRleHRTaXplKHRoaXMub3BhY2l0eVNsaWRlclJlbmRlcmluZ0NvbnRleHQ/LmNhbnZhcywgYWRqdXN0ZWRTbGlkZXJEaW1lbnNpb25zKTtcbiAgICB9XG4gIH1cbiAgZHJhd0FjdGl2ZUNvbG9yRmllbGRDb2xvcigpIHtcbiAgICBjb25zdCB7IGNvbG9yIH0gPSB0aGlzO1xuICAgIGlmICghY29sb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaHN2Q29sb3IgPSBjb2xvci5oc3YoKTtcbiAgICBjb25zdCB7IGRpbWVuc2lvbnM6IHsgY29sb3JGaWVsZDogeyBoZWlnaHQsIHdpZHRoIH0sIHRodW1iOiB7IHJhZGl1cyB9LCB9LCB9ID0gdGhpcztcbiAgICBjb25zdCB4ID0gaHN2Q29sb3Iuc2F0dXJhdGlvbnYoKSAvIChIU1ZfTElNSVRTLnMgLyB3aWR0aCk7XG4gICAgY29uc3QgeSA9IGhlaWdodCAtIGhzdkNvbG9yLnZhbHVlKCkgLyAoSFNWX0xJTUlUUy52IC8gaGVpZ2h0KTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5jb2xvckZpZWxkU2NvcGVMZWZ0ID0geDtcbiAgICAgIHRoaXMuY29sb3JGaWVsZFNjb3BlVG9wID0geTtcbiAgICB9KTtcbiAgICB0aGlzLmRyYXdUaHVtYih0aGlzLmNvbG9yRmllbGRSZW5kZXJpbmdDb250ZXh0LCByYWRpdXMsIHgsIHksIGhzdkNvbG9yKTtcbiAgfVxuICBkcmF3VGh1bWIoY29udGV4dCwgcmFkaXVzLCB4LCB5LCBjb2xvcikge1xuICAgIGNvbnN0IHN0YXJ0QW5nbGUgPSAwO1xuICAgIGNvbnN0IGVuZEFuZ2xlID0gMiAqIE1hdGguUEk7XG4gICAgY29uc3Qgb3V0bGluZVdpZHRoID0gMTtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQuYXJjKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCIjZmZmXCI7XG4gICAgY29udGV4dC5maWxsKCk7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjMpXCI7XG4gICAgY29udGV4dC5saW5lV2lkdGggPSBvdXRsaW5lV2lkdGg7XG4gICAgY29udGV4dC5zdHJva2UoKTtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQuYXJjKHgsIHksIHJhZGl1cyAtIDMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yLnJnYigpLmFscGhhKDEpLnN0cmluZygpO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICB9XG4gIGRyYXdBY3RpdmVIdWVTbGlkZXJDb2xvcigpIHtcbiAgICBjb25zdCB7IGNvbG9yIH0gPSB0aGlzO1xuICAgIGlmICghY29sb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaHN2Q29sb3IgPSBjb2xvci5oc3YoKS5zYXR1cmF0aW9udigxMDApLnZhbHVlKDEwMCk7XG4gICAgY29uc3QgeyBkaW1lbnNpb25zOiB7IHNsaWRlcjogeyB3aWR0aCB9LCB0aHVtYjogeyByYWRpdXMgfSwgfSwgfSA9IHRoaXM7XG4gICAgY29uc3QgeCA9IGhzdkNvbG9yLmh1ZSgpIC8gKEhVRV9MSU1JVF9DT05TVFJBSU5FRCAvIHdpZHRoKTtcbiAgICBjb25zdCB5ID0gcmFkaXVzO1xuICAgIGNvbnN0IHNsaWRlckJvdW5kWCA9IHRoaXMuZ2V0U2xpZGVyQm91bmRYKHgsIHdpZHRoLCByYWRpdXMpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmh1ZVNjb3BlTGVmdCA9IHNsaWRlckJvdW5kWDtcbiAgICB9KTtcbiAgICB0aGlzLmRyYXdUaHVtYih0aGlzLmh1ZVNsaWRlclJlbmRlcmluZ0NvbnRleHQsIHJhZGl1cywgc2xpZGVyQm91bmRYLCB5LCBoc3ZDb2xvcik7XG4gIH1cbiAgZHJhd0h1ZVNsaWRlcigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5odWVTbGlkZXJSZW5kZXJpbmdDb250ZXh0O1xuICAgIGNvbnN0IHsgZGltZW5zaW9uczogeyBzbGlkZXI6IHsgaGVpZ2h0LCB3aWR0aCB9LCB0aHVtYjogeyByYWRpdXM6IHRodW1iUmFkaXVzIH0sIH0sIH0gPSB0aGlzO1xuICAgIGNvbnN0IHggPSAwO1xuICAgIGNvbnN0IHkgPSB0aHVtYlJhZGl1cyAtIGhlaWdodCAvIDI7XG4gICAgY29uc3QgZ3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHdpZHRoLCAwKTtcbiAgICBjb25zdCBodWVTbGlkZXJDb2xvclN0b3BLZXl3b3JkcyA9IFtcbiAgICAgIFwicmVkXCIsXG4gICAgICBcInllbGxvd1wiLFxuICAgICAgXCJsaW1lXCIsXG4gICAgICBcImN5YW5cIixcbiAgICAgIFwiYmx1ZVwiLFxuICAgICAgXCJtYWdlbnRhXCIsXG4gICAgICBcIiNmZjAwMDRcIiAvKiAxIHVuaXQgbGVzcyB0aGFuICNmZjAgdG8gYXZvaWQgZHVwbGljYXRlIHZhbHVlcyB3aXRoaW4gcmFuZ2UgKi8sXG4gICAgXTtcbiAgICBjb25zdCBvZmZzZXQgPSAxIC8gKGh1ZVNsaWRlckNvbG9yU3RvcEtleXdvcmRzLmxlbmd0aCAtIDEpO1xuICAgIGxldCBjdXJyZW50T2Zmc2V0ID0gMDtcbiAgICBodWVTbGlkZXJDb2xvclN0b3BLZXl3b3Jkcy5mb3JFYWNoKChrZXl3b3JkKSA9PiB7XG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoY3VycmVudE9mZnNldCwgY29sb3Ioa2V5d29yZCkuc3RyaW5nKCkpO1xuICAgICAgY3VycmVudE9mZnNldCArPSBvZmZzZXQ7XG4gICAgfSk7XG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCArIHRoaXMuZ2V0U2xpZGVyQ2FwU3BhY2luZygpICogMik7XG4gICAgdGhpcy5kcmF3U2xpZGVyUGF0aChjb250ZXh0LCBoZWlnaHQsIHdpZHRoLCB4LCB5KTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcInJnYmEoMCwwLDAsMC4zKVwiO1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIHRoaXMuZHJhd0FjdGl2ZUh1ZVNsaWRlckNvbG9yKCk7XG4gIH1cbiAgZHJhd09wYWNpdHlTbGlkZXIoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMub3BhY2l0eVNsaWRlclJlbmRlcmluZ0NvbnRleHQ7XG4gICAgY29uc3QgeyBiYXNlQ29sb3JGaWVsZENvbG9yOiBwcmV2aW91c0NvbG9yLCBkaW1lbnNpb25zOiB7IHNsaWRlcjogeyBoZWlnaHQsIHdpZHRoIH0sIHRodW1iOiB7IHJhZGl1czogdGh1bWJSYWRpdXMgfSwgfSwgfSA9IHRoaXM7XG4gICAgY29uc3QgeCA9IDA7XG4gICAgY29uc3QgeSA9IHRodW1iUmFkaXVzIC0gaGVpZ2h0IC8gMjtcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0ICsgdGhpcy5nZXRTbGlkZXJDYXBTcGFjaW5nKCkgKiAyKTtcbiAgICBjb25zdCBncmFkaWVudCA9IGNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeSwgd2lkdGgsIDApO1xuICAgIGNvbnN0IHN0YXJ0Q29sb3IgPSBwcmV2aW91c0NvbG9yLnJnYigpLmFscGhhKDApO1xuICAgIGNvbnN0IG1pZENvbG9yID0gcHJldmlvdXNDb2xvci5yZ2IoKS5hbHBoYSgwLjUpO1xuICAgIGNvbnN0IGVuZENvbG9yID0gcHJldmlvdXNDb2xvci5yZ2IoKS5hbHBoYSgxKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgc3RhcnRDb2xvci5zdHJpbmcoKSk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuNSwgbWlkQ29sb3Iuc3RyaW5nKCkpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBlbmRDb2xvci5zdHJpbmcoKSk7XG4gICAgdGhpcy5kcmF3U2xpZGVyUGF0aChjb250ZXh0LCBoZWlnaHQsIHdpZHRoLCB4LCB5KTtcbiAgICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVQYXR0ZXJuKHRoaXMuZ2V0Q2hlY2tlcmVkQmFja2dyb3VuZFBhdHRlcm4oKSwgXCJyZXBlYXRcIik7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBwYXR0ZXJuO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgY29udGV4dC5maWxsKCk7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjMpXCI7XG4gICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgdGhpcy5kcmF3QWN0aXZlT3BhY2l0eVNsaWRlckNvbG9yKCk7XG4gIH1cbiAgZHJhd1NsaWRlclBhdGgoY29udGV4dCwgaGVpZ2h0LCB3aWR0aCwgeCwgeSkge1xuICAgIGNvbnN0IHJhZGl1cyA9IGhlaWdodCAvIDIgKyAxO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5tb3ZlVG8oeCArIHJhZGl1cywgeSk7XG4gICAgY29udGV4dC5saW5lVG8oeCArIHdpZHRoIC0gcmFkaXVzLCB5KTtcbiAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByYWRpdXMpO1xuICAgIGNvbnRleHQubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgY29udGV4dC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCwgeCArIHdpZHRoIC0gcmFkaXVzLCB5ICsgaGVpZ2h0KTtcbiAgICBjb250ZXh0LmxpbmVUbyh4ICsgcmFkaXVzLCB5ICsgaGVpZ2h0KTtcbiAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgY29udGV4dC5saW5lVG8oeCwgeSArIHJhZGl1cyk7XG4gICAgY29udGV4dC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpdXMsIHkpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gIH1cbiAgZ2V0Q2hlY2tlcmVkQmFja2dyb3VuZFBhdHRlcm4oKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tlclBhdHRlcm4pIHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrZXJQYXR0ZXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXR0ZXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICBwYXR0ZXJuLndpZHRoID0gMTA7XG4gICAgcGF0dGVybi5oZWlnaHQgPSAxMDtcbiAgICBjb25zdCBwYXR0ZXJuQ29udGV4dCA9IHBhdHRlcm4uZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHBhdHRlcm5Db250ZXh0LmZpbGxTdHlsZSA9IFwiI2NjY1wiO1xuICAgIHBhdHRlcm5Db250ZXh0LmZpbGxSZWN0KDAsIDAsIDEwLCAxMCk7XG4gICAgcGF0dGVybkNvbnRleHQuZmlsbFN0eWxlID0gXCIjZmZmXCI7XG4gICAgcGF0dGVybkNvbnRleHQuZmlsbFJlY3QoMCwgMCwgNSwgNSk7XG4gICAgcGF0dGVybkNvbnRleHQuZmlsbFJlY3QoNSwgNSwgNSwgNSk7XG4gICAgdGhpcy5jaGVja2VyUGF0dGVybiA9IHBhdHRlcm47XG4gICAgcmV0dXJuIHBhdHRlcm47XG4gIH1cbiAgZHJhd0FjdGl2ZU9wYWNpdHlTbGlkZXJDb2xvcigpIHtcbiAgICBjb25zdCB7IGNvbG9yIH0gPSB0aGlzO1xuICAgIGlmICghY29sb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaHN2Q29sb3IgPSBjb2xvcjtcbiAgICBjb25zdCB7IGRpbWVuc2lvbnM6IHsgc2xpZGVyOiB7IHdpZHRoIH0sIHRodW1iOiB7IHJhZGl1cyB9LCB9LCB9ID0gdGhpcztcbiAgICBjb25zdCB4ID0gYWxwaGFUb09wYWNpdHkoaHN2Q29sb3IuYWxwaGEoKSkgLyAoT1BBQ0lUWV9MSU1JVFMubWF4IC8gd2lkdGgpO1xuICAgIGNvbnN0IHkgPSByYWRpdXM7XG4gICAgY29uc3Qgc2xpZGVyQm91bmRYID0gdGhpcy5nZXRTbGlkZXJCb3VuZFgoeCwgd2lkdGgsIHJhZGl1cyk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMub3BhY2l0eVNjb3BlTGVmdCA9IHNsaWRlckJvdW5kWDtcbiAgICB9KTtcbiAgICB0aGlzLmRyYXdUaHVtYih0aGlzLm9wYWNpdHlTbGlkZXJSZW5kZXJpbmdDb250ZXh0LCByYWRpdXMsIHNsaWRlckJvdW5kWCwgeSwgaHN2Q29sb3IpO1xuICB9XG4gIGdldFNsaWRlckJvdW5kWCh4LCB3aWR0aCwgcmFkaXVzKSB7XG4gICAgY29uc3QgY2xvc2VUb0VkZ2UgPSBjbG9zZVRvUmFuZ2VFZGdlKHgsIHdpZHRoLCByYWRpdXMpO1xuICAgIHJldHVybiBjbG9zZVRvRWRnZSA9PT0gMFxuICAgICAgPyB4XG4gICAgICA6IGNsb3NlVG9FZGdlID09PSAtMVxuICAgICAgICA/IHJlbWFwKHgsIDAsIHdpZHRoLCByYWRpdXMsIHJhZGl1cyAqIDIpXG4gICAgICAgIDogcmVtYXAoeCwgMCwgd2lkdGgsIHdpZHRoIC0gcmFkaXVzICogMiwgd2lkdGggLSByYWRpdXMpO1xuICB9XG4gIHVwZGF0ZUNvbG9yRnJvbUNoYW5uZWxzKGNoYW5uZWxzKSB7XG4gICAgdGhpcy5pbnRlcm5hbENvbG9yU2V0KGNvbG9yKGNoYW5uZWxzLCB0aGlzLmNoYW5uZWxNb2RlKSk7XG4gIH1cbiAgdXBkYXRlQ2hhbm5lbHNGcm9tQ29sb3IoY29sb3IpIHtcbiAgICB0aGlzLmNoYW5uZWxzID0gY29sb3IgPyB0aGlzLnRvQ2hhbm5lbHMoY29sb3IpIDogW251bGwsIG51bGwsIG51bGwsIG51bGxdO1xuICB9XG4gIHRvQ2hhbm5lbHMoY29sb3IpIHtcbiAgICBjb25zdCB7IGNoYW5uZWxNb2RlIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYW5uZWxzID0gY29sb3JbY2hhbm5lbE1vZGVdKClcbiAgICAgIC5hcnJheSgpXG4gICAgICAubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGlzQWxwaGEgPSBpbmRleCA9PT0gMztcbiAgICAgIHJldHVybiBpc0FscGhhID8gdmFsdWUgOiBNYXRoLmZsb29yKHZhbHVlKTtcbiAgICB9KTtcbiAgICBpZiAoY2hhbm5lbHMubGVuZ3RoID09PSAzKSB7XG4gICAgICBjaGFubmVscy5wdXNoKDEpOyAvLyBDb2xvciBvbWl0cyBhbHBoYSB3aGVuIDFcbiAgICB9XG4gICAgcmV0dXJuIGNoYW5uZWxzO1xuICB9XG4gIGdldEFkanVzdGVkU2NvcGVQb3NpdGlvbihsZWZ0LCB0b3ApIHtcbiAgICByZXR1cm4gW2xlZnQgLSBTQ09QRV9TSVpFIC8gMiwgdG9wIC0gU0NPUEVfU0laRSAvIDJdO1xuICB9XG4gIHN0YXRpYyBnZXQgZGVsZWdhdGVzRm9jdXMoKSB7IHJldHVybiB0cnVlOyB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJhbHBoYUNoYW5uZWxcIjogW1wiaGFuZGxlQWxwaGFDaGFubmVsQ2hhbmdlXCIsIFwiaGFuZGxlRm9ybWF0T3JBbHBoYUNoYW5uZWxDaGFuZ2VcIl0sXG4gICAgXCJjb2xvclwiOiBbXCJoYW5kbGVDb2xvckNoYW5nZVwiXSxcbiAgICBcImZvcm1hdFwiOiBbXCJoYW5kbGVGb3JtYXRPckFscGhhQ2hhbm5lbENoYW5nZVwiXSxcbiAgICBcInNjYWxlXCI6IFtcImhhbmRsZVNjYWxlQ2hhbmdlXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwidmFsdWVcIjogW1wiaGFuZGxlVmFsdWVDaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIGNvbG9yUGlja2VyQ3NzOyB9XG59LCBbMTcsIFwiY2FsY2l0ZS1jb2xvci1waWNrZXJcIiwge1xuICAgIFwiYWxsb3dFbXB0eVwiOiBbNTE2LCBcImFsbG93LWVtcHR5XCJdLFxuICAgIFwiYWxwaGFDaGFubmVsXCI6IFs0LCBcImFscGhhLWNoYW5uZWxcIl0sXG4gICAgXCJjaGFubmVsc0Rpc2FibGVkXCI6IFs0LCBcImNoYW5uZWxzLWRpc2FibGVkXCJdLFxuICAgIFwiY29sb3JcIjogWzEwNDBdLFxuICAgIFwiZGlzYWJsZWRcIjogWzUxNl0sXG4gICAgXCJmb3JtYXRcIjogWzUxM10sXG4gICAgXCJoaWRlQ2hhbm5lbHNcIjogWzUxNiwgXCJoaWRlLWNoYW5uZWxzXCJdLFxuICAgIFwiaGV4RGlzYWJsZWRcIjogWzQsIFwiaGV4LWRpc2FibGVkXCJdLFxuICAgIFwiaGlkZUhleFwiOiBbNTE2LCBcImhpZGUtaGV4XCJdLFxuICAgIFwiaGlkZVNhdmVkXCI6IFs1MTYsIFwiaGlkZS1zYXZlZFwiXSxcbiAgICBcInNhdmVkRGlzYWJsZWRcIjogWzUxNiwgXCJzYXZlZC1kaXNhYmxlZFwiXSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwic3RvcmFnZUlkXCI6IFs1MTMsIFwic3RvcmFnZS1pZFwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogWzEwNDBdLFxuICAgIFwibnVtYmVyaW5nU3lzdGVtXCI6IFs1MTMsIFwibnVtYmVyaW5nLXN5c3RlbVwiXSxcbiAgICBcInZhbHVlXCI6IFsxMDI1XSxcbiAgICBcIm1lc3NhZ2VzXCI6IFsxMDQwXSxcbiAgICBcImRlZmF1bHRNZXNzYWdlc1wiOiBbMzJdLFxuICAgIFwiY2hhbm5lbE1vZGVcIjogWzMyXSxcbiAgICBcImNoYW5uZWxzXCI6IFszMl0sXG4gICAgXCJkaW1lbnNpb25zXCI6IFszMl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogWzMyXSxcbiAgICBcInNhdmVkQ29sb3JzXCI6IFszMl0sXG4gICAgXCJjb2xvckZpZWxkU2NvcGVUb3BcIjogWzMyXSxcbiAgICBcImNvbG9yRmllbGRTY29wZUxlZnRcIjogWzMyXSxcbiAgICBcImh1ZVNjb3BlTGVmdFwiOiBbMzJdLFxuICAgIFwib3BhY2l0eVNjb3BlTGVmdFwiOiBbMzJdLFxuICAgIFwic2NvcGVPcmllbnRhdGlvblwiOiBbMzJdLFxuICAgIFwic2V0Rm9jdXNcIjogWzY0XVxuICB9LCBbWzIsIFwia2V5ZG93blwiLCBcImhhbmRsZUNoYW5uZWxLZXlVcE9yRG93blwiXSwgWzIsIFwia2V5dXBcIiwgXCJoYW5kbGVDaGFubmVsS2V5VXBPckRvd25cIl1dXSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50JDEoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtY29sb3ItcGlja2VyXCIsIFwiY2FsY2l0ZS1idXR0b25cIiwgXCJjYWxjaXRlLWNvbG9yLXBpY2tlci1oZXgtaW5wdXRcIiwgXCJjYWxjaXRlLWNvbG9yLXBpY2tlci1zd2F0Y2hcIiwgXCJjYWxjaXRlLWljb25cIiwgXCJjYWxjaXRlLWlucHV0LW51bWJlclwiLCBcImNhbGNpdGUtaW5wdXQtdGV4dFwiLCBcImNhbGNpdGUtbG9hZGVyXCIsIFwiY2FsY2l0ZS1wcm9ncmVzc1wiLCBcImNhbGNpdGUtdGFiXCIsIFwiY2FsY2l0ZS10YWItbmF2XCIsIFwiY2FsY2l0ZS10YWItdGl0bGVcIiwgXCJjYWxjaXRlLXRhYnNcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtY29sb3ItcGlja2VyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgQ29sb3JQaWNrZXIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtYnV0dG9uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JGQoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWNvbG9yLXBpY2tlci1oZXgtaW5wdXRcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkYygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtY29sb3ItcGlja2VyLXN3YXRjaFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCRiKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JGEoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWlucHV0LW51bWJlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ5KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pbnB1dC10ZXh0XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDgoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWxvYWRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ3KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1wcm9ncmVzc1wiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ2KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS10YWJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtdGFiLW5hdlwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS10YWItdGl0bGVcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMygpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtdGFic1wiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlQ29sb3JQaWNrZXIgPSBDb2xvclBpY2tlcjtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVDb2xvclBpY2tlciwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgaCwgRnJhZ21lbnQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbG9yIH0gZnJvbSAnLi9pbmRleDIuanMnO1xuaW1wb3J0IHsgciBhcyBnZXRNb2RlTmFtZSB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGggYXMgaGV4aWZ5IH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgc3dhdGNoOiBcInN3YXRjaFwiLFxuICBub0NvbG9yU3dhdGNoOiBcInN3YXRjaC0tbm8tY29sb3JcIixcbiAgY2hlY2tlcjogXCJjaGVja2VyXCIsXG59O1xuY29uc3QgQ09MT1JTID0ge1xuICBib3JkZXJMaWdodDogXCJyZ2JhKDAsIDAsIDAsIDAuMylcIixcbiAgYm9yZGVyRGFyazogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpXCIsXG59O1xuY29uc3QgY2hlY2tlclNxdWFyZVNpemUgPSA0O1xuY29uc3QgQ0hFQ0tFUl9ESU1FTlNJT05TID0ge1xuICBzcXVhcmVTaXplOiBjaGVja2VyU3F1YXJlU2l6ZSxcbiAgc2l6ZTogY2hlY2tlclNxdWFyZVNpemUgKiAyLFxufTtcblxuY29uc3QgY29sb3JQaWNrZXJTd2F0Y2hDc3MgPSBcIjpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWZsZXh9Omhvc3QoW3NjYWxlPXNdKXtibG9jay1zaXplOjEuMjVyZW07aW5saW5lLXNpemU6MS4yNXJlbX06aG9zdChbc2NhbGU9bV0pe2Jsb2NrLXNpemU6MS41cmVtO2lubGluZS1zaXplOjEuNXJlbX06aG9zdChbc2NhbGU9bF0pe2Jsb2NrLXNpemU6MnJlbTtpbmxpbmUtc2l6ZToycmVtfS5zd2F0Y2h7b3ZlcmZsb3c6aGlkZGVuO2Jsb2NrLXNpemU6aW5oZXJpdDtpbmxpbmUtc2l6ZTppbmhlcml0fS5zd2F0Y2ggcmVjdHt0cmFuc2l0aW9uLXByb3BlcnR5OmFsbDt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSl9LnN3YXRjaC0tbm8tY29sb3IgcmVjdHtmaWxsOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX0uc3dhdGNoLS1uby1jb2xvciBsaW5le3N0cm9rZTp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcil9LmNoZWNrZXJ7ZmlsbDojY2FjYWNhfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBDb2xvclBpY2tlclN3YXRjaCA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmNvbG9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgfVxuICBoYW5kbGVDb2xvckNoYW5nZShjb2xvciQxKSB7XG4gICAgdGhpcy5pbnRlcm5hbENvbG9yID0gY29sb3IkMSA/IGNvbG9yKGNvbG9yJDEpIDogbnVsbDtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICB0aGlzLmhhbmRsZUNvbG9yQ2hhbmdlKHRoaXMuY29sb3IpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpc0VtcHR5ID0gIXRoaXMuaW50ZXJuYWxDb2xvcjtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgW0NTUy5zd2F0Y2hdOiB0cnVlLFxuICAgICAgW0NTUy5ub0NvbG9yU3dhdGNoXTogaXNFbXB0eSxcbiAgICB9O1xuICAgIHJldHVybiAoaChcInN2Z1wiLCB7IGNsYXNzOiBjbGFzc2VzLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIH0sIHRoaXMucmVuZGVyU3dhdGNoKCkpKTtcbiAgfVxuICByZW5kZXJTd2F0Y2goKSB7XG4gICAgY29uc3QgeyBhY3RpdmUsIGVsLCBpbnRlcm5hbENvbG9yIH0gPSB0aGlzO1xuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IGFjdGl2ZSA/IFwiMTAwJVwiIDogXCIwXCI7XG4gICAgY29uc3QgdGhlbWUgPSBnZXRNb2RlTmFtZShlbCk7XG4gICAgY29uc3QgYm9yZGVyQ29sb3IgPSB0aGVtZSA9PT0gXCJsaWdodFwiID8gQ09MT1JTLmJvcmRlckxpZ2h0IDogQ09MT1JTLmJvcmRlckRhcms7XG4gICAgY29uc3QgY29tbW9uU3dhdGNoUHJvcHMgPSB7XG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgcng6IGJvcmRlclJhZGl1cyxcbiAgICAgIHN0cm9rZTogYm9yZGVyQ29sb3IsXG4gICAgICAvLyBzdHJva2Utd2lkdGggYW5kIGNsaXAtcGF0aCBhcmUgbmVlZGVkIHRvIGhpZGUgb3ZlcmZsb3dpbmcgcG9ydGlvbiBvZiBzdHJva2VcbiAgICAgIC8vIHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzI3MzM0Ni8xOTQyMTZcbiAgICAgIC8vIHVzaW5nIGF0dHJpYnV0ZSB0byB3b3JrIGFyb3VuZCBTdGVuY2lsIHVzaW5nIHRoZSBwcm9wIG5hbWUgdnMgdGhlIGF0dHJpYnV0ZSB3aGVuIHJlbmRlcmluZ1xuICAgICAgW1wic3Ryb2tlLXdpZHRoXCJdOiBcIjJcIixcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB9O1xuICAgIGNvbnN0IGlzRW1wdHkgPSAhaW50ZXJuYWxDb2xvcjtcbiAgICBpZiAoaXNFbXB0eSkge1xuICAgICAgcmV0dXJuIChoKEZyYWdtZW50LCBudWxsLCBoKFwiY2xpcFBhdGhcIiwgeyBpZDogXCJzaGFwZVwiIH0sIGgoXCJyZWN0XCIsIHsgaGVpZ2h0OiBcIjEwMCVcIiwgcng6IGJvcmRlclJhZGl1cywgd2lkdGg6IFwiMTAwJVwiIH0pKSwgaChcInJlY3RcIiwgeyBcImNsaXAtcGF0aFwiOiBgaW5zZXQoMCByb3VuZCAke2JvcmRlclJhZGl1c30pYCwgcng6IGJvcmRlclJhZGl1cywgLi4uY29tbW9uU3dhdGNoUHJvcHMgfSksIGgoXCJsaW5lXCIsIHsgXCJjbGlwLXBhdGhcIjogXCJ1cmwoI3NoYXBlKVwiLCBcInN0cm9rZS13aWR0aFwiOiBcIjNcIiwgeDE6IFwiMTAwJVwiLCB4MjogXCIwXCIsIHkxOiBcIjBcIiwgeTI6IFwiMTAwJVwiIH0pKSk7XG4gICAgfVxuICAgIGNvbnN0IGFscGhhID0gaW50ZXJuYWxDb2xvci5hbHBoYSgpO1xuICAgIGNvbnN0IGhleCA9IGhleGlmeShpbnRlcm5hbENvbG9yKTtcbiAgICBjb25zdCBoZXhhID0gaGV4aWZ5KGludGVybmFsQ29sb3IsIGFscGhhIDwgMSk7XG4gICAgcmV0dXJuIChoKEZyYWdtZW50LCBudWxsLCBoKFwidGl0bGVcIiwgbnVsbCwgaGV4YSksIGgoXCJkZWZzXCIsIG51bGwsIGgoXCJwYXR0ZXJuXCIsIHsgaGVpZ2h0OiBDSEVDS0VSX0RJTUVOU0lPTlMuc2l6ZSwgaWQ6IFwiY2hlY2tlclwiLCBwYXR0ZXJuVW5pdHM6IFwidXNlclNwYWNlT25Vc2VcIiwgd2lkdGg6IENIRUNLRVJfRElNRU5TSU9OUy5zaXplLCB4OiBcIjBcIiwgeTogXCIwXCIgfSwgaChcInJlY3RcIiwgeyBjbGFzczogQ1NTLmNoZWNrZXIsIGhlaWdodDogQ0hFQ0tFUl9ESU1FTlNJT05TLnNxdWFyZVNpemUsIHdpZHRoOiBDSEVDS0VSX0RJTUVOU0lPTlMuc3F1YXJlU2l6ZSwgeDogXCIwXCIsIHk6IFwiMFwiIH0pLCBoKFwicmVjdFwiLCB7IGNsYXNzOiBDU1MuY2hlY2tlciwgaGVpZ2h0OiBDSEVDS0VSX0RJTUVOU0lPTlMuc3F1YXJlU2l6ZSwgd2lkdGg6IENIRUNLRVJfRElNRU5TSU9OUy5zcXVhcmVTaXplLCB4OiBDSEVDS0VSX0RJTUVOU0lPTlMuc3F1YXJlU2l6ZSwgeTogQ0hFQ0tFUl9ESU1FTlNJT05TLnNxdWFyZVNpemUgfSkpKSwgaChcInJlY3RcIiwgeyBmaWxsOiBcInVybCgjY2hlY2tlcilcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcng6IGJvcmRlclJhZGl1cywgd2lkdGg6IFwiMTAwJVwiIH0pLCBoKFwicmVjdFwiLCB7IGZpbGw6IGhleCwgc3R5bGU6IHtcbiAgICAgICAgXCJjbGlwLXBhdGhcIjogYWxwaGEgPCAxID8gXCJwb2x5Z29uKDEwMCUgMCwgMCAwLCAwIDEwMCUpXCIgOiBgaW5zZXQoMCByb3VuZCAke2JvcmRlclJhZGl1c30pYCxcbiAgICAgIH0sIC4uLmNvbW1vblN3YXRjaFByb3BzIH0pLCBhbHBoYSA8IDEgPyAoaChcInJlY3RcIiwgeyBmaWxsOiBoZXhhLCBrZXk6IFwib3BhY2l0eS1maWxsXCIsIHN0eWxlOiB7IFwiY2xpcC1wYXRoXCI6IFwicG9seWdvbigxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKVwiIH0sIC4uLmNvbW1vblN3YXRjaFByb3BzIH0pKSA6IG51bGwpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJjb2xvclwiOiBbXCJoYW5kbGVDb2xvckNoYW5nZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBjb2xvclBpY2tlclN3YXRjaENzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1jb2xvci1waWNrZXItc3dhdGNoXCIsIHtcbiAgICBcImFjdGl2ZVwiOiBbNTE2XSxcbiAgICBcImNvbG9yXCI6IFsxXSxcbiAgICBcInNjYWxlXCI6IFs1MTNdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtY29sb3ItcGlja2VyLXN3YXRjaFwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1jb2xvci1waWNrZXItc3dhdGNoXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgQ29sb3JQaWNrZXJTd2F0Y2gpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IENvbG9yUGlja2VyU3dhdGNoIGFzIEMsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuY29uc3QgY2xhbXAgPSAodmFsdWUsIG1pbiwgbWF4KSA9PiBNYXRoLm1heChtaW4sIE1hdGgubWluKHZhbHVlLCBtYXgpKTtcbmNvbnN0IGRlY2ltYWxOdW1iZXJSZWdleCA9IG5ldyBSZWdFeHAoLyg/OlxcLihcXGQrKSk/KD86W2VFXShbKy1dP1xcZCspKT8kLyk7XG4vKipcbiAqIFJldHVybnMgdGhlIHF1YW50aXR5IG9mIHJlYWwgZGVjaW1hbCBwbGFjZXMgZm9yIGEgbnVtYmVyLCB3aGljaCBleGNsdWRlcyB0cmFpbGluZyB6ZXJvcy5cbiAqXG4gKiBBZGFwdGVkIGZyb20ge0BsaW5rIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNDU0NTE4L2phdmFzY3JpcHQtaG93LXRvLXJldHJpZXZlLXRoZS1udW1iZXItb2YtZGVjaW1hbHMtb2YtYS1zdHJpbmctbnVtYmVyfS5cbiAqXG4gKiBAcGFyYW0gZGVjaW1hbCAtIGRlY2ltYWwgdmFsdWVcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnMge251bWJlcn0gdGhlIGFtb3VudCBvZiBkZWNpbWFsIHBsYWNlcyBpbiBhIG51bWJlclxuICovXG5jb25zdCBkZWNpbWFsUGxhY2VzID0gKHZhbHVlKSA9PiB7XG4gIGNvbnN0IG1hdGNoID0gKFwiXCIgKyB2YWx1ZSkubWF0Y2goZGVjaW1hbE51bWJlclJlZ2V4KTtcbiAgaWYgKCFtYXRjaCB8fCBwYXJzZUludChtYXRjaFsxXSkgPT09IDApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICByZXR1cm4gTWF0aC5tYXgoMCwgXG4gIC8vIE51bWJlciBvZiBkaWdpdHMgcmlnaHQgb2YgZGVjaW1hbCBwb2ludC5cbiAgKG1hdGNoWzFdID8gbWF0Y2hbMV0ubGVuZ3RoIDogMCkgLVxuICAgIC8vIEFkanVzdCBmb3Igc2NpZW50aWZpYyBub3RhdGlvbi5cbiAgICAobWF0Y2hbMl0gPyArbWF0Y2hbMl0gOiAwKSk7XG59O1xuZnVuY3Rpb24gZ2V0RGVjaW1hbHModmFsdWUpIHtcbiAgaWYgKGRlY2ltYWxQbGFjZXModmFsdWUpID4gMCAmJiB2YWx1ZSA+IDApIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChgMC4ke3ZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdfWApO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHJlbWFwKHZhbHVlLCBmcm9tTWluLCBmcm9tTWF4LCB0b01pbiwgdG9NYXgpIHtcbiAgcmV0dXJuICgodmFsdWUgLSBmcm9tTWluKSAqICh0b01heCAtIHRvTWluKSkgLyAoZnJvbU1heCAtIGZyb21NaW4pICsgdG9NaW47XG59XG4vKipcbiAqIEhlbHBlciB0byBkZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBjbG9zZSB0byB0aGUgZWRnZSBvZiBhIHJhbmdlIHdpdGhpbiBhIHRocmVzaG9sZC5cbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSByYW5nZVxuICogQHBhcmFtIHRocmVzaG9sZFxuICogQHJldHVybnMgLTEgaWYgY2xvc2UgdG8gbG93ZXIgZWRnZSwgMSBpZiBjbG9zZSB0byB1cHBlciBlZGdlLCAwIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gY2xvc2VUb1JhbmdlRWRnZSh2YWx1ZSwgcmFuZ2UsIHRocmVzaG9sZCkge1xuICByZXR1cm4gdmFsdWUgPCB0aHJlc2hvbGQgPyAtMSA6IHZhbHVlID4gcmFuZ2UgLSB0aHJlc2hvbGQgPyAxIDogMDtcbn1cblxuZXhwb3J0IHsgY2xvc2VUb1JhbmdlRWRnZSBhcyBhLCBjbGFtcCBhcyBjLCBkZWNpbWFsUGxhY2VzIGFzIGQsIGdldERlY2ltYWxzIGFzIGcsIHJlbWFwIGFzIHIgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoLCBIb3N0IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgbyBhcyBub2RlTGlzdFRvQXJyYXkgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgY29udGVudDogXCJjb250ZW50XCIsXG59O1xuXG5jb25zdCB0YWJDc3MgPSBcIjpob3N0KFtzZWxlY3RlZF0pIHNlY3Rpb24sOmhvc3QoW3NlbGVjdGVkXSkgLmNvbnRhaW5lcntkaXNwbGF5OmJsb2NrfTpob3N0e2Rpc3BsYXk6bm9uZTtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJX06aG9zdChbc2VsZWN0ZWRdKXtkaXNwbGF5OmJsb2NrO2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO292ZXJmbG93OmF1dG99LnNjYWxlLXMgLmNvbnRlbnR7cGFkZGluZy1ibG9jazowLjI1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbX0uc2NhbGUtbSAuY29udGVudHtwYWRkaW5nLWJsb2NrOjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW19LnNjYWxlLWwgLmNvbnRlbnR7cGFkZGluZy1ibG9jazowLjYyNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbX1zZWN0aW9uLC5jb250YWluZXJ7ZGlzcGxheTpub25lO2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBUYWIgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFiUmVnaXN0ZXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFRhYlJlZ2lzdGVyXCIsIDYpO1xuICAgIHRoaXMuZ3VpZCA9IGBjYWxjaXRlLXRhYi10aXRsZS0ke2d1aWQoKX1gO1xuICAgIHRoaXMudGFiID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5sYWJlbGVkQnkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5lbC5pZCB8fCB0aGlzLmd1aWQ7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWxhYmVsbGVkYnlcIjogdGhpcy5sYWJlbGVkQnksIGlkOiBpZCB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUy5jb250YWluZXJdOiB0cnVlLCBbYHNjYWxlLSR7dGhpcy5zY2FsZX1gXTogdHJ1ZSB9LCByb2xlOiBcInRhYnBhbmVsXCIsIHRhYkluZGV4OiB0aGlzLnNlbGVjdGVkID8gMCA6IC0xIH0sIGgoXCJzZWN0aW9uXCIsIHsgY2xhc3M6IENTUy5jb250ZW50IH0sIGgoXCJzbG90XCIsIG51bGwpKSkpKTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnBhcmVudFRhYnNFbCA9IHRoaXMuZWwuY2xvc2VzdChcImNhbGNpdGUtdGFic1wiKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFiUmVnaXN0ZXIuZW1pdCgpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIC8vIERpc3BhdGNoaW5nIHRvIGJvZHkgaW4gb3JkZXIgdG8gYmUgbGlzdGVuZWQgYnkgb3RoZXIgZWxlbWVudHMgdGhhdCBhcmUgc3RpbGwgY29ubmVjdGVkIHRvIHRoZSBET00uXG4gICAgZG9jdW1lbnQuYm9keT8uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjYWxjaXRlVGFiVW5yZWdpc3RlclwiLCB7XG4gICAgICBkZXRhaWw6IHRoaXMuZWwsXG4gICAgfSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGludGVybmFsVGFiQ2hhbmdlSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IHRhcmdldFRhYnNFbCA9IGV2ZW50XG4gICAgICAuY29tcG9zZWRQYXRoKClcbiAgICAgIC5maW5kKChlbCkgPT4gZWwudGFnTmFtZSA9PT0gXCJDQUxDSVRFLVRBQlNcIik7XG4gICAgLy8gdG8gYWxsb3cgYDxjYWxjaXRlLXRhYnM+YCB0byBiZSBuZXN0ZWQgd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhpc1xuICAgIC8vIGBjYWxjaXRlVGFiQ2hhbmdlYCBldmVudCB3YXMgYWN0dWFsbHkgZmlyZWQgZnJvbSBhIHdpdGhpbiB0aGUgc2FtZVxuICAgIC8vIGA8Y2FsY2l0ZS10YWJzPmAgdGhhdCBpcyB0aGUgYSBwYXJlbnQgb2YgdGhpcyB0YWIuXG4gICAgaWYgKHRhcmdldFRhYnNFbCAhPT0gdGhpcy5wYXJlbnRUYWJzRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMudGFiKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy50YWIgPT09IGV2ZW50LmRldGFpbC50YWI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5nZXRUYWJJbmRleCgpLnRoZW4oKGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBpbmRleCA9PT0gZXZlbnQuZGV0YWlsLnRhYjtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgY29tcG9uZW50IGl0ZW0gd2l0aGluIHRoZSB0YWIgYXJyYXkuXG4gICAqL1xuICBhc3luYyBnZXRUYWJJbmRleCgpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChub2RlTGlzdFRvQXJyYXkodGhpcy5lbC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKS5maWx0ZXIoKGVsKSA9PiBlbC5tYXRjaGVzKFwiY2FsY2l0ZS10YWJcIikpLCB0aGlzLmVsKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogQHBhcmFtIHRhYklkc1xuICAgKiBAcGFyYW0gdGl0bGVJZHNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyB1cGRhdGVBcmlhSW5mbyh0YWJJZHMgPSBbXSwgdGl0bGVJZHMgPSBbXSkge1xuICAgIHRoaXMubGFiZWxlZEJ5ID0gdGl0bGVJZHNbdGFiSWRzLmluZGV4T2YodGhpcy5lbC5pZCldIHx8IG51bGw7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gdGFiQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLXRhYlwiLCB7XG4gICAgXCJ0YWJcIjogWzUxM10sXG4gICAgXCJzZWxlY3RlZFwiOiBbMTU0MF0sXG4gICAgXCJzY2FsZVwiOiBbMV0sXG4gICAgXCJsYWJlbGVkQnlcIjogWzMyXSxcbiAgICBcImdldFRhYkluZGV4XCI6IFs2NF0sXG4gICAgXCJ1cGRhdGVBcmlhSW5mb1wiOiBbNjRdXG4gIH0sIFtbMTYsIFwiY2FsY2l0ZUludGVybmFsVGFiQ2hhbmdlXCIsIFwiaW50ZXJuYWxUYWJDaGFuZ2VIYW5kbGVyXCJdXV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS10YWJcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtdGFiXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgVGFiKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBUYWIgYXMgVCwgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBoLCBGcmFnbWVudCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5cbmNvbnN0IFNMT1RTID0ge1xuICB0aXRsZUdyb3VwOiBcInRpdGxlLWdyb3VwXCIsXG59O1xuXG5jb25zdCB0YWJzQ3NzID0gXCI6aG9zdHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1ufTpob3N0KFtib3JkZXJlZF0pe2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbYm9yZGVyZWRdOm5vdChbcG9zaXRpb249Ym90dG9tXSkpIDo6c2xvdHRlZChjYWxjaXRlLXRhYi1uYXYpe21hcmdpbi1ibG9jay1lbmQ6LTFweH06aG9zdChbYm9yZGVyZWRdW3Bvc2l0aW9uPWJvdHRvbV0pe2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKSwgaW5zZXQgMCAtMXB4IDAgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSl9Omhvc3QoW2JvcmRlcmVkXSkgc2VjdGlvbntib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSl9Omhvc3QoW2JvcmRlcmVkXVtzY2FsZT1zXSkgc2VjdGlvbntwYWRkaW5nOjAuNzVyZW19Omhvc3QoW2JvcmRlcmVkXVtzY2FsZT1tXSkgc2VjdGlvbntwYWRkaW5nOjAuNXJlbX06aG9zdChbYm9yZGVyZWRdW3NjYWxlPWxdKSBzZWN0aW9ue3BhZGRpbmc6MXJlbX06aG9zdChbcG9zaXRpb249Ym90dG9tXSl7ZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2V9c2VjdGlvbntkaXNwbGF5OmZsZXg7ZmxleC1ncm93OjE7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlci1ibG9jay1zdGFydC13aWR0aDoxcHg7Ym9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpO2JvcmRlci1ibG9jay1zdGFydC1zdHlsZTpzb2xpZH06aG9zdChbcG9zaXRpb249Ym90dG9tXSkgc2VjdGlvbntmbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZTtib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6MHB4O2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MXB4O2JvcmRlci1ibG9jay1lbmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSl9Omhvc3QoW3Bvc2l0aW9uPWJvdHRvbV06bm90KFtib3JkZXJlZF0pKSBzZWN0aW9ue2JvcmRlci1ibG9jay1lbmQtc3R5bGU6c29saWR9QG1lZGlhIChmb3JjZWQtY29sb3JzOiBhY3RpdmUpezpob3N0KFtib3JkZXJlZF0pIHNlY3Rpb257Ym9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOjBweDtib3JkZXItYmxvY2stZW5kLXdpZHRoOjFweH06aG9zdChbcG9zaXRpb249Ym90dG9tXVtib3JkZXJlZF0pIHNlY3Rpb257Ym9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOjFweDtib3JkZXItYmxvY2stZW5kLXdpZHRoOjBweH19Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IFRhYnMgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgKG11dGF0aW9uc0xpc3QpID0+IHtcbiAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zTGlzdCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgIGlmICh0YXJnZXQubm9kZU5hbWUgPT09IFwiQ0FMQ0lURS1UQUItTkFWXCIgfHxcbiAgICAgICAgICB0YXJnZXQubm9kZU5hbWUgPT09IFwiQ0FMQ0lURS1UQUItVElUTEVcIiB8fFxuICAgICAgICAgIHRhcmdldC5ub2RlTmFtZSA9PT0gXCJDQUxDSVRFLVRBQlwiKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVJdGVtcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5sYXlvdXQgPSBcImlubGluZVwiO1xuICAgIHRoaXMucG9zaXRpb24gPSBcInRvcFwiO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLmJvcmRlcmVkID0gZmFsc2U7XG4gICAgdGhpcy50aXRsZXMgPSBbXTtcbiAgICB0aGlzLnRhYnMgPSBbXTtcbiAgfVxuICBoYW5kbGVJbmhlcml0YWJsZVByb3BzKCkge1xuICAgIHRoaXMudXBkYXRlSXRlbXMoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsLCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy51cGRhdGVJdGVtcygpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoRnJhZ21lbnQsIG51bGwsIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMudGl0bGVHcm91cCB9KSwgaChcInNlY3Rpb25cIiwgbnVsbCwgaChcInNsb3RcIiwgbnVsbCkpKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIEBwYXJhbSBldmVudFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGNhbGNpdGVJbnRlcm5hbFRhYlRpdGxlUmVnaXN0ZXIoZXZlbnQpIHtcbiAgICB0aGlzLnRpdGxlcyA9IFsuLi50aGlzLnRpdGxlcywgZXZlbnQudGFyZ2V0XTtcbiAgICB0aGlzLnJlZ2lzdHJ5SGFuZGxlcigpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBjYWxjaXRlVGFiVGl0bGVVbnJlZ2lzdGVyKGV2ZW50KSB7XG4gICAgdGhpcy50aXRsZXMgPSB0aGlzLnRpdGxlcy5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gZXZlbnQuZGV0YWlsKTtcbiAgICB0aGlzLnJlZ2lzdHJ5SGFuZGxlcigpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBjYWxjaXRlSW50ZXJuYWxUYWJSZWdpc3RlcihldmVudCkge1xuICAgIHRoaXMudGFicyA9IFsuLi50aGlzLnRhYnMsIGV2ZW50LnRhcmdldF07XG4gICAgdGhpcy5yZWdpc3RyeUhhbmRsZXIoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgY2FsY2l0ZVRhYlVucmVnaXN0ZXIoZXZlbnQpIHtcbiAgICB0aGlzLnRhYnMgPSB0aGlzLnRhYnMuZmlsdGVyKChlbCkgPT4gZWwgIT09IGV2ZW50LmRldGFpbCk7XG4gICAgdGhpcy5yZWdpc3RyeUhhbmRsZXIoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICB1cGRhdGVJdGVtcygpIHtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCBzY2FsZSB9ID0gdGhpcztcbiAgICBjb25zdCBuYXYgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoXCJjYWxjaXRlLXRhYi1uYXZcIik7XG4gICAgaWYgKG5hdikge1xuICAgICAgbmF2LnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICBuYXYuc2NhbGUgPSBzY2FsZTtcbiAgICB9XG4gICAgQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLXRhYlwiKSkuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICBpZiAodGFiLnBhcmVudEVsZW1lbnQgPT09IHRoaXMuZWwpIHtcbiAgICAgICAgdGFiLnNjYWxlID0gc2NhbGU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLXRhYi1uYXYgPiBjYWxjaXRlLXRhYi10aXRsZVwiKSkuZm9yRWFjaCgodGl0bGUpID0+IHtcbiAgICAgIHRpdGxlLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICB0aXRsZS5zY2FsZSA9IHNjYWxlO1xuICAgIH0pO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKlxuICAgKiBNYXRjaGVzIHVwIGVsZW1lbnRzIGZyb20gdGhlIGludGVybmFsIGB0YWJzYCBhbmQgYHRpdGxlc2AgdG8gYXV0b21hdGljYWxseVxuICAgKiB1cGRhdGUgdGhlIEFSSUEgYXR0cmlidXRlcyBhbmQgbGluayBgPGNhbGNpdGUtdGFiPmAgYW5kXG4gICAqIGA8Y2FsY2l0ZS10YWItdGl0bGU+YCBjb21wb25lbnRzLlxuICAgKi9cbiAgYXN5bmMgcmVnaXN0cnlIYW5kbGVyKCkge1xuICAgIGxldCB0YWJJZHM7XG4gICAgbGV0IHRpdGxlSWRzO1xuICAgIC8vIGRldGVybWluZSBpZiB3ZSBhcmUgdXNpbmcgYHRhYmAgYmFzZWQgb3IgYGluZGV4YCBiYXNlZCB0YWIgaWRlbnRpZmllcnMuXG4gICAgaWYgKHRoaXMudGFicy5zb21lKChlbCkgPT4gZWwudGFiKSB8fCB0aGlzLnRpdGxlcy5zb21lKChlbCkgPT4gZWwudGFiKSkge1xuICAgICAgLy8gaWYgd2UgYXJlIHVzaW5nIGB0YWJgIGJhc2VkIGlkZW50aWZpZXJzIHNvcnQgYnkgYHRhYmAgdG8gYWNjb3VudCBmb3JcbiAgICAgIC8vIHBvc3NpYmxlIG91dCBvZiBvcmRlciB0YWJzIGFuZCBnZXQgdGhlIGlkIG9mIGVhY2ggdGFiXG4gICAgICB0YWJJZHMgPSB0aGlzLnRhYnMuc29ydCgoYSwgYikgPT4gYS50YWIubG9jYWxlQ29tcGFyZShiLnRhYikpLm1hcCgoZWwpID0+IGVsLmlkKTtcbiAgICAgIHRpdGxlSWRzID0gdGhpcy50aXRsZXMuc29ydCgoYSwgYikgPT4gYS50YWIubG9jYWxlQ29tcGFyZShiLnRhYikpLm1hcCgoZWwpID0+IGVsLmlkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBpZiB3ZSBhcmUgdXNpbmcgaW5kZXggYmFzZWQgdGFicyB0aGVuIHRoZSBgPGNhbGNpdGUtdGFiPmAgYW5kXG4gICAgICAvLyBgPGNhbGNpdGUtdGFiLXRpdGxlPmAgbWlnaHQgaGF2ZSBiZWVuIHJlbmRlcmVkIG91dCBvZiBvcmRlciBzbyB0aGVcbiAgICAgIC8vIG9yZGVyIG9mIGB0aGlzLnRhYnNgIGFuZCBgdGhpcy50aXRsZXNgIG1pZ2h0IG5vdCByZWZsZWN0IHRoZSBET00gc3RhdGUsXG4gICAgICAvLyBhbmQgbWlnaHQgbm90IG1hdGNoIGVhY2ggb3RoZXIgc28gd2UgbmVlZCB0byBnZXQgdGhlIGluZGV4IG9mIGFsbCB0aGVcbiAgICAgIC8vIHRhYnMgYW5kIHRpdGxlcyBpbiB0aGUgRE9NIG9yZGVyIHRvIG1hdGNoIHRoZW0gdXAgYXMgYSBzb3VyY2Ugb2YgdHJ1dGhcbiAgICAgIGNvbnN0IHRhYkRvbUluZGV4ZXMgPSBhd2FpdCBQcm9taXNlLmFsbCh0aGlzLnRhYnMubWFwKChlbCkgPT4gZWwuZ2V0VGFiSW5kZXgoKSkpO1xuICAgICAgY29uc3QgdGl0bGVEb21JbmRleGVzID0gYXdhaXQgUHJvbWlzZS5hbGwodGhpcy50aXRsZXMubWFwKChlbCkgPT4gZWwuZ2V0VGFiSW5kZXgoKSkpO1xuICAgICAgLy8gb25jZSB3ZSBoYXZlIHRoZSBET00gb3JkZXIgYXMgYSBzb3VyY2Ugb2YgdHJ1dGggd2UgY2FuIGJ1aWxkIHRoZVxuICAgICAgLy8gbWF0Y2hpbmcgdGFiSWRzIGFuZCB0aXRsZUlkcyBhcnJheXNcbiAgICAgIHRhYklkcyA9IHRhYkRvbUluZGV4ZXMucmVkdWNlKChpZHMsIGluZGV4SW5ET00sIHJlZ2lzdHJ5SW5kZXgpID0+IHtcbiAgICAgICAgaWRzW2luZGV4SW5ET01dID0gdGhpcy50YWJzW3JlZ2lzdHJ5SW5kZXhdLmlkO1xuICAgICAgICByZXR1cm4gaWRzO1xuICAgICAgfSwgW10pO1xuICAgICAgdGl0bGVJZHMgPSB0aXRsZURvbUluZGV4ZXMucmVkdWNlKChpZHMsIGluZGV4SW5ET00sIHJlZ2lzdHJ5SW5kZXgpID0+IHtcbiAgICAgICAgaWRzW2luZGV4SW5ET01dID0gdGhpcy50aXRsZXNbcmVnaXN0cnlJbmRleF0uaWQ7XG4gICAgICAgIHJldHVybiBpZHM7XG4gICAgICB9LCBbXSk7XG4gICAgfVxuICAgIC8vIHBhc3MgYWxsIG91ciBuZXcgYXJpYSBpbmZvcm1hdGlvbiB0byBlYWNoIGA8Y2FsY2l0ZS10YWI+YCBhbmRcbiAgICAvLyBgPGNhbGNpdGUtdGFiLXRpdGxlPmAgd2hpY2ggd2lsbCBjaGVjayBpZiB0aGV5IGNhbiB1cGRhdGUgdGhlaXIgaW50ZXJuYWxcbiAgICAvLyBgY29udHJvbGxlZGAgb3IgYGxhYmVsZWRCeWAgc3RhdGVzIGFuZCByZS1yZW5kZXIgaWYgbmVjZXNzYXJ5XG4gICAgdGhpcy50YWJzLmZvckVhY2goKGVsKSA9PiBlbC51cGRhdGVBcmlhSW5mbyh0YWJJZHMsIHRpdGxlSWRzKSk7XG4gICAgdGhpcy50aXRsZXMuZm9yRWFjaCgoZWwpID0+IGVsLnVwZGF0ZUFyaWFJbmZvKHRhYklkcywgdGl0bGVJZHMpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJwb3NpdGlvblwiOiBbXCJoYW5kbGVJbmhlcml0YWJsZVByb3BzXCJdLFxuICAgIFwic2NhbGVcIjogW1wiaGFuZGxlSW5oZXJpdGFibGVQcm9wc1wiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiB0YWJzQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLXRhYnNcIiwge1xuICAgIFwibGF5b3V0XCI6IFs1MTNdLFxuICAgIFwicG9zaXRpb25cIjogWzUxM10sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcImJvcmRlcmVkXCI6IFs0XSxcbiAgICBcInRpdGxlc1wiOiBbMzJdLFxuICAgIFwidGFic1wiOiBbMzJdXG4gIH0sIFtbMCwgXCJjYWxjaXRlSW50ZXJuYWxUYWJUaXRsZVJlZ2lzdGVyXCIsIFwiY2FsY2l0ZUludGVybmFsVGFiVGl0bGVSZWdpc3RlclwiXSwgWzE2LCBcImNhbGNpdGVUYWJUaXRsZVVucmVnaXN0ZXJcIiwgXCJjYWxjaXRlVGFiVGl0bGVVbnJlZ2lzdGVyXCJdLCBbMCwgXCJjYWxjaXRlSW50ZXJuYWxUYWJSZWdpc3RlclwiLCBcImNhbGNpdGVJbnRlcm5hbFRhYlJlZ2lzdGVyXCJdLCBbMTYsIFwiY2FsY2l0ZVRhYlVucmVnaXN0ZXJcIiwgXCJjYWxjaXRlVGFiVW5yZWdpc3RlclwiXV1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtdGFic1wiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS10YWJzXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgVGFicyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgVGFicyBhcyBULCBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGQgYXMgZGVib3VuY2UsIGkgYXMgaXNPYmplY3QgfSBmcm9tICcuL2RlYm91bmNlLmpzJztcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgdGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgb25seSBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyXG4gKiBldmVyeSBgd2FpdGAgbWlsbGlzZWNvbmRzLiBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYFxuICogbWV0aG9kIHRvIGNhbmNlbCBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0b1xuICogaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgXG4gKiB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlXG4gKiB0aHJvdHRsZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIHRocm90dGxlZCBmdW5jdGlvbiByZXR1cm4gdGhlXG4gKiByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8udGhyb3R0bGVgIGFuZCBgXy5kZWJvdW5jZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGV4Y2Vzc2l2ZWx5IHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB3aGlsZSBzY3JvbGxpbmcuXG4gKiBqUXVlcnkod2luZG93KS5vbignc2Nyb2xsJywgXy50aHJvdHRsZSh1cGRhdGVQb3NpdGlvbiwgMTAwKSk7XG4gKlxuICogLy8gSW52b2tlIGByZW5ld1Rva2VuYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSA1IG1pbnV0ZXMuXG4gKiB2YXIgdGhyb3R0bGVkID0gXy50aHJvdHRsZShyZW5ld1Rva2VuLCAzMDAwMDAsIHsgJ3RyYWlsaW5nJzogZmFsc2UgfSk7XG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgdGhyb3R0bGVkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIHRocm90dGxlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhyb3R0bGVkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZShmdW5jLCB3YWl0LCB7XG4gICAgJ2xlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICAndHJhaWxpbmcnOiB0cmFpbGluZ1xuICB9KTtcbn1cblxuZXhwb3J0IHsgdGhyb3R0bGUgYXMgdCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9