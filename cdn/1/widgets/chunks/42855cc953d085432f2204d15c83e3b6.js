"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-slider_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-slider.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-slider.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteSlider: () => (/* binding */ CalciteSlider),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.js */ "./node_modules/@esri/calcite-components/dist/components/form.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _label2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./label2.js */ "./node_modules/@esri/calcite-components/dist/components/label2.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./math.js */ "./node_modules/@esri/calcite-components/dist/components/math.js");
/* harmony import */ var _graph_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./graph.js */ "./node_modules/@esri/calcite-components/dist/components/graph.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */












const CSS = {
  handleLabel: "handle__label",
  handleLabelMinValue: "handle__label--minValue",
  handleLabelValue: "handle__label--value",
  tickMin: "tick__label--min",
  tickMax: "tick__label--max",
};
const maxTickElementThreshold = 250;

const sliderCss = "@charset \"UTF-8\";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}.scale--s{--calcite-slider-handle-size:0.625rem;--calcite-slider-handle-extension-height:0.4rem;--calcite-slider-container-font-size:var(--calcite-font-size--3)}.scale--s .handle__label,.scale--s .tick__label{line-height:.75rem}.scale--m{--calcite-slider-handle-size:0.875rem;--calcite-slider-handle-extension-height:0.5rem;--calcite-slider-container-font-size:var(--calcite-font-size--2)}.scale--m .handle__label,.scale--m .tick__label{line-height:1rem}.scale--l{--calcite-slider-handle-size:1rem;--calcite-slider-handle-extension-height:0.65rem;--calcite-slider-container-font-size:var(--calcite-font-size--1)}.scale--l .handle__label,.scale--l .tick__label{line-height:1rem}.handle__label,.tick__label{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);font-size:var(--calcite-slider-container-font-size)}:host{display:block}.container{position:relative;display:block;overflow-wrap:normal;word-break:normal;padding-inline:calc(var(--calcite-slider-handle-size) * 0.5);padding-block:calc(var(--calcite-slider-handle-size) * 0.5);margin-block:calc(var(--calcite-slider-handle-size) * 0.5);margin-inline:0;--calcite-slider-full-handle-height:calc(\n    var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height)\n  );touch-action:none}:host([disabled]) .track__range,:host([disabled]) .tick--active{background-color:var(--calcite-ui-text-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.375rem}.scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.5rem}.scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.55rem}:host([precise]:not([has-histogram])) .container .thumb--value{--calcite-slider-thumb-y-offset:calc(var(--calcite-slider-full-handle-height) * -1)}.thumb-container{position:relative;max-inline-size:100%}.thumb{--calcite-slider-thumb-x-offset:calc(var(--calcite-slider-handle-size) * 0.5);position:absolute;margin:0px;display:flex;cursor:pointer;flex-direction:column;align-items:center;border-style:none;background-color:transparent;padding:0px;font-family:inherit;outline:2px solid transparent;outline-offset:2px;transform:translate(var(--calcite-slider-thumb-x-offset), var(--calcite-slider-thumb-y-offset))}.thumb .handle__label.static,.thumb .handle__label.transformed{position:absolute;inset-block:0px;opacity:0}.thumb .handle__label.hyphen::after{content:\"—\";display:inline-block;inline-size:1em}.thumb .handle__label.hyphen--wrap{display:flex}.thumb .handle{box-sizing:border-box;border-radius:9999px;background-color:var(--calcite-ui-foreground-1);outline-color:transparent;block-size:var(--calcite-slider-handle-size);inline-size:var(--calcite-slider-handle-size);box-shadow:0 0 0 2px var(--calcite-ui-text-3) inset;transition:border var(--calcite-internal-animation-timing-medium) ease, background-color var(--calcite-internal-animation-timing-medium) ease, box-shadow var(--calcite-animation-timing) ease}.thumb .handle-extension{inline-size:0.125rem;block-size:var(--calcite-slider-handle-extension-height);background-color:var(--calcite-ui-text-3)}.thumb:hover .handle{box-shadow:0 0 0 3px var(--calcite-ui-brand) inset}.thumb:hover .handle-extension{background-color:var(--calcite-ui-brand)}.thumb:focus .handle{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.thumb:focus .handle-extension{background-color:var(--calcite-ui-brand)}.thumb.thumb--minValue{transform:translate(calc(var(--calcite-slider-thumb-x-offset) * -1), var(--calcite-slider-thumb-y-offset))}.thumb.thumb--precise{--calcite-slider-thumb-y-offset:-0.125rem}:host([label-handles]) .thumb{--calcite-slider-thumb-x-offset:50%}:host([label-handles]):host(:not([has-histogram])) .scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-1.4375rem}:host([label-handles]):host(:not([has-histogram])) .scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-1.875rem}:host([label-handles]):host(:not([has-histogram])) .scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-2rem}:host([has-histogram][label-handles]) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--minValue.thumb--precise .handle__label{margin-block-start:0.5em}:host(:not([has-histogram]):not([precise])) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--value .handle__label{margin-block-end:0.5em}:host([label-handles][precise]):host(:not([has-histogram])) .scale--s .thumb--value{--calcite-slider-thumb-y-offset:-2.075rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--m .thumb--value{--calcite-slider-thumb-y-offset:-2.75rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--l .thumb--value{--calcite-slider-thumb-y-offset:-3.0625rem}.thumb:focus .handle,.thumb--active .handle{background-color:var(--calcite-ui-brand);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16)}.thumb:hover.thumb--precise:after,.thumb:focus.thumb--precise:after,.thumb--active.thumb--precise:after{background-color:var(--calcite-ui-brand)}.track{position:relative;block-size:0.125rem;border-radius:0px;background-color:var(--calcite-ui-border-2);transition:all var(--calcite-internal-animation-timing-medium) ease-in}.track__range{position:absolute;inset-block-start:0px;block-size:0.125rem;background-color:var(--calcite-ui-brand)}.container--range .track__range:hover{cursor:ew-resize}.container--range .track__range:after{position:absolute;inline-size:100%;content:\"\";inset-block-start:calc(var(--calcite-slider-full-handle-height) * 0.5 * -1);block-size:calc(var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height))}@media (forced-colors: active){.thumb{outline-width:0;outline-offset:0}.handle{outline:2px solid transparent;outline-offset:2px}.thumb:focus .handle,.thumb .handle-extension,.thumb:hover .handle-extension,.thumb:focus .handle-extension,.thumb:active .handle-extension{background-color:canvasText}.track{background-color:canvasText}.track__range{background-color:highlight}}.tick{position:absolute;block-size:0.25rem;inline-size:0.125rem;border-width:1px;border-style:solid;background-color:var(--calcite-ui-border-input);border-color:var(--calcite-ui-foreground-1);inset-block-start:-2px;pointer-events:none;margin-inline-start:calc(-1 * 0.125rem)}.tick--active{background-color:var(--calcite-ui-brand)}.tick__label{pointer-events:none;margin-block-start:0.875rem;display:flex;justify-content:center}.tick__label--min{transition:opacity var(--calcite-animation-timing)}.tick__label--max{transition:opacity var(--calcite-internal-animation-timing-fast)}:host([has-histogram][label-handles]) .tick__label--min,:host([has-histogram][label-handles]) .tick__label--max,:host([has-histogram][precise]) .tick__label--min,:host([has-histogram][precise]) .tick__label--max{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}.graph{color:var(--calcite-ui-foreground-3);block-size:48px}:host([label-ticks][ticks]) .container{padding-block-end:calc(0.875rem + var(--calcite-slider-container-font-size))}:host([has-histogram]):host([precise][label-handles]) .container{padding-block-end:calc(var(--calcite-slider-full-handle-height) + 1em)}:host([has-histogram]):host([label-handles]:not([precise])) .container{padding-block-end:calc(var(--calcite-slider-handle-size) * 0.5 + 1em)}:host([has-histogram]):host([precise]:not([label-handles])) .container{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container{padding-block-start:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container--range{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([label-handles]:not([precise])) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container--range{padding-block-end:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";

function isRange(value) {
  return Array.isArray(value);
}
const Slider = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteSliderInput = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteSliderInput", 6);
    this.calciteSliderChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteSliderChange", 6);
    this.activeProp = "value";
    this.guid = `calcite-slider-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_0__.g)()}`;
    this.dragUpdate = (event) => {
      if (this.disabled) {
        return;
      }
      event.preventDefault();
      if (this.dragProp) {
        const value = this.translate(event.clientX || event.pageX);
        if (isRange(this.value) && this.dragProp === "minMaxValue") {
          if (this.minValueDragRange && this.maxValueDragRange && this.minMaxValueRange) {
            const newMinValue = value - this.minValueDragRange;
            const newMaxValue = value + this.maxValueDragRange;
            if (newMaxValue <= this.max &&
              newMinValue >= this.min &&
              newMaxValue - newMinValue === this.minMaxValueRange) {
              this.setValue({
                minValue: this.clamp(newMinValue, "minValue"),
                maxValue: this.clamp(newMaxValue, "maxValue"),
              });
            }
          }
          else {
            this.minValueDragRange = value - this.minValue;
            this.maxValueDragRange = this.maxValue - value;
            this.minMaxValueRange = this.maxValue - this.minValue;
          }
        }
        else {
          this.setValue({ [this.dragProp]: this.clamp(value, this.dragProp) });
        }
      }
    };
    this.pointerUpDragEnd = (event) => {
      if (this.disabled || !(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.j)(event)) {
        return;
      }
      this.dragEnd(event);
    };
    this.dragEnd = (event) => {
      if (this.disabled) {
        return;
      }
      this.removeDragListeners();
      this.focusActiveHandle(event.clientX);
      if (this.lastDragPropValue != this[this.dragProp]) {
        this.emitChange();
      }
      this.dragProp = null;
      this.lastDragPropValue = null;
      this.minValueDragRange = null;
      this.maxValueDragRange = null;
      this.minMaxValueRange = null;
    };
    /**
     * Set the reference of the track Element
     *
     * @internal
     * @param node
     */
    this.storeTrackRef = (node) => {
      this.trackEl = node;
    };
    /**
     * Returns a string representing the localized label value based if the groupSeparator prop is parsed.
     *
     * @param value
     */
    this.determineGroupSeparator = (value) => {
      if (typeof value === "number") {
        _locale_js__WEBPACK_IMPORTED_MODULE_7__.n.numberFormatOptions = {
          locale: this.effectiveLocale,
          numberingSystem: this.numberingSystem,
          useGrouping: this.groupSeparator,
        };
        return _locale_js__WEBPACK_IMPORTED_MODULE_7__.n.localize(value.toString());
      }
    };
    this.disabled = false;
    this.form = undefined;
    this.groupSeparator = false;
    this.hasHistogram = false;
    this.histogram = undefined;
    this.histogramStops = undefined;
    this.labelHandles = false;
    this.labelTicks = false;
    this.max = 100;
    this.maxLabel = undefined;
    this.maxValue = undefined;
    this.min = 0;
    this.minLabel = undefined;
    this.minValue = undefined;
    this.mirrored = false;
    this.name = undefined;
    this.numberingSystem = undefined;
    this.pageStep = undefined;
    this.precise = false;
    this.required = false;
    this.snap = false;
    this.step = 1;
    this.ticks = undefined;
    this.value = 0;
    this.scale = "m";
    this.effectiveLocale = "";
    this.minMaxValueRange = null;
    this.minValueDragRange = null;
    this.maxValueDragRange = null;
    this.tickValues = [];
  }
  histogramWatcher(newHistogram) {
    this.hasHistogram = !!newHistogram;
  }
  ticksWatcher() {
    this.tickValues = this.generateTickValues();
  }
  valueHandler() {
    this.setMinMaxFromValue();
  }
  minMaxValueHandler() {
    this.setValueFromMinMax();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    this.setMinMaxFromValue();
    this.setValueFromMinMax();
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    this.removeDragListeners();
  }
  componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_6__.a)(this);
    if (!isRange(this.value)) {
      this.value = this.snap ? this.getClosestStep(this.value) : this.clamp(this.value);
    }
    this.ticksWatcher();
    this.histogramWatcher(this.histogram);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, this.value);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
  }
  componentDidRender() {
    if (this.labelHandles) {
      this.adjustHostObscuredHandleLabel("value");
      if (isRange(this.value)) {
        this.adjustHostObscuredHandleLabel("minValue");
        if (!(this.precise && !this.hasHistogram)) {
          this.hyphenateCollidingRangeHandleLabels();
        }
      }
    }
    this.hideObscuredBoundingTickLabels();
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.u)(this);
  }
  render() {
    const id = this.el.id || this.guid;
    const maxProp = isRange(this.value) ? "maxValue" : "value";
    const value = isRange(this.value) ? this.maxValue : this.value;
    const displayedValue = this.determineGroupSeparator(value);
    const displayedMinValue = this.determineGroupSeparator(this.minValue);
    const min = this.minValue || this.min;
    const useMinValue = this.shouldUseMinValue();
    const minInterval = this.getUnitInterval(useMinValue ? this.minValue : min) * 100;
    const maxInterval = this.getUnitInterval(value) * 100;
    const mirror = this.shouldMirror();
    const leftThumbOffset = `${mirror ? 100 - minInterval : minInterval}%`;
    const rightThumbOffset = `${mirror ? maxInterval : 100 - maxInterval}%`;
    const valueIsRange = isRange(this.value);
    const handleLabelMinValueClasses = `${CSS.handleLabel} ${CSS.handleLabelMinValue}`;
    const handleLabelValueClasses = `${CSS.handleLabel} ${CSS.handleLabelValue}`;
    const handle = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: (event) => this.pointerDownDragStart(event, maxProp), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.maxHandle = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "handle" })));
    const labeledHandle = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: (event) => this.pointerDownDragStart(event, maxProp), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.maxHandle = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": "true", class: handleLabelValueClasses }, displayedValue), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} static` }, displayedValue), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} transformed` }, displayedValue), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "handle" })));
    const histogramLabeledHandle = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: (event) => this.pointerDownDragStart(event, maxProp), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.maxHandle = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "handle" }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": "true", class: handleLabelValueClasses }, displayedValue), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} static` }, displayedValue), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} transformed` }, displayedValue)));
    const preciseHandle = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
        "thumb--precise": true,
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: (event) => this.pointerDownDragStart(event, maxProp), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.maxHandle = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "handle" }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "handle-extension" })));
    const histogramPreciseHandle = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
        "thumb--precise": true,
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: (event) => this.pointerDownDragStart(event, maxProp), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.maxHandle = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "handle-extension" }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "handle" })));
    const labeledPreciseHandle = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
        "thumb--precise": true,
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: (event) => this.pointerDownDragStart(event, maxProp), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.maxHandle = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": "true", class: handleLabelValueClasses }, displayedValue), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} static` }, displayedValue), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} transformed` }, displayedValue), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "handle" }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "handle-extension" })));
    const histogramLabeledPreciseHandle = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
        "thumb--precise": true,
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: (event) => this.pointerDownDragStart(event, maxProp), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.maxHandle = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "handle-extension" }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "handle" }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": "true", class: handleLabelValueClasses }, displayedValue), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} static` }, displayedValue), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} transformed` }, displayedValue)));
    const minHandle = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { "aria-disabled": this.disabled, "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue",
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: (event) => this.pointerDownDragStart(event, "minValue"), role: "slider", style: { left: leftThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.minHandle = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "handle" })));
    const minLabeledHandle = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { "aria-disabled": this.disabled, "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue",
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: (event) => this.pointerDownDragStart(event, "minValue"), role: "slider", style: { left: leftThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.minHandle = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": "true", class: handleLabelMinValueClasses }, displayedMinValue), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": "true", class: `${handleLabelMinValueClasses} static` }, displayedMinValue), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": "true", class: `${handleLabelMinValueClasses} transformed` }, displayedMinValue), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "handle" })));
    const minHistogramLabeledHandle = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { "aria-disabled": this.disabled, "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue",
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: (event) => this.pointerDownDragStart(event, "minValue"), role: "slider", style: { left: leftThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.minHandle = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "handle" }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": "true", class: handleLabelMinValueClasses }, displayedMinValue), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": "true", class: `${handleLabelMinValueClasses} static` }, displayedMinValue), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": "true", class: `${handleLabelMinValueClasses} transformed` }, displayedMinValue)));
    const minPreciseHandle = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { "aria-disabled": this.disabled, "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue",
        "thumb--precise": true,
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: (event) => this.pointerDownDragStart(event, "minValue"), role: "slider", style: { left: leftThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.minHandle = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "handle-extension" }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "handle" })));
    const minLabeledPreciseHandle = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { "aria-disabled": this.disabled, "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue",
        "thumb--precise": true,
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: (event) => this.pointerDownDragStart(event, "minValue"), role: "slider", style: { left: leftThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.minHandle = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "handle-extension" }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "handle" }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": "true", class: handleLabelMinValueClasses }, displayedMinValue), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": "true", class: `${handleLabelMinValueClasses} static` }, displayedMinValue), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { "aria-hidden": "true", class: `${handleLabelMinValueClasses} transformed` }, displayedMinValue)));
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.Host, { id: id, onTouchStart: this.handleTouchStart }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { "aria-label": (0,_label2_js__WEBPACK_IMPORTED_MODULE_5__.g)(this), class: {
        ["container"]: true,
        ["container--range"]: valueIsRange,
        [`scale--${this.scale}`]: true,
      } }, this.renderGraph(), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "track",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.storeTrackRef }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "track__range", onPointerDown: (event) => this.pointerDownDragStart(event, "minMaxValue"), style: {
        left: `${mirror ? 100 - maxInterval : minInterval}%`,
        right: `${mirror ? minInterval : 100 - maxInterval}%`,
      } }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "ticks" }, this.tickValues.map((tick) => {
      const tickOffset = `${this.getUnitInterval(tick) * 100}%`;
      let activeTicks = tick >= min && tick <= value;
      if (useMinValue) {
        activeTicks = tick >= this.minValue && tick <= this.maxValue;
      }
      return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { class: {
          tick: true,
          "tick--active": activeTicks,
        }, style: {
          left: mirror ? "" : tickOffset,
          right: mirror ? tickOffset : "",
        } }, this.renderTickLabel(tick)));
    }))), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: "thumb-container" }, !this.precise && !this.labelHandles && valueIsRange && minHandle, !this.hasHistogram &&
      !this.precise &&
      this.labelHandles &&
      valueIsRange &&
      minLabeledHandle, this.precise && !this.labelHandles && valueIsRange && minPreciseHandle, this.precise && this.labelHandles && valueIsRange && minLabeledPreciseHandle, this.hasHistogram &&
      !this.precise &&
      this.labelHandles &&
      valueIsRange &&
      minHistogramLabeledHandle, !this.precise && !this.labelHandles && handle, !this.hasHistogram && !this.precise && this.labelHandles && labeledHandle, !this.hasHistogram && this.precise && !this.labelHandles && preciseHandle, this.hasHistogram && this.precise && !this.labelHandles && histogramPreciseHandle, !this.hasHistogram && this.precise && this.labelHandles && labeledPreciseHandle, this.hasHistogram && !this.precise && this.labelHandles && histogramLabeledHandle, this.hasHistogram &&
      this.precise &&
      this.labelHandles &&
      histogramLabeledPreciseHandle, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)(_form_js__WEBPACK_IMPORTED_MODULE_2__.H, { component: this })))));
  }
  renderGraph() {
    return this.histogram ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("calcite-graph", { class: "graph", colorStops: this.histogramStops, data: this.histogram, highlightMax: isRange(this.value) ? this.maxValue : this.value, highlightMin: isRange(this.value) ? this.minValue : this.min, max: this.max, min: this.min })) : null;
  }
  renderTickLabel(tick) {
    const valueIsRange = isRange(this.value);
    const isMinTickLabel = tick === this.min;
    const isMaxTickLabel = tick === this.max;
    const displayedTickValue = this.determineGroupSeparator(tick);
    const tickLabel = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("span", { class: {
        tick__label: true,
        [CSS.tickMin]: isMinTickLabel,
        [CSS.tickMax]: isMaxTickLabel,
      } }, displayedTickValue));
    if (this.labelTicks && !this.hasHistogram && !valueIsRange) {
      return tickLabel;
    }
    if (this.labelTicks &&
      !this.hasHistogram &&
      valueIsRange &&
      !this.precise &&
      !this.labelHandles) {
      return tickLabel;
    }
    if (this.labelTicks &&
      !this.hasHistogram &&
      valueIsRange &&
      !this.precise &&
      this.labelHandles) {
      return tickLabel;
    }
    if (this.labelTicks &&
      !this.hasHistogram &&
      valueIsRange &&
      this.precise &&
      (isMinTickLabel || isMaxTickLabel)) {
      return tickLabel;
    }
    if (this.labelTicks && this.hasHistogram && !this.precise && !this.labelHandles) {
      return tickLabel;
    }
    if (this.labelTicks &&
      this.hasHistogram &&
      this.precise &&
      !this.labelHandles &&
      (isMinTickLabel || isMaxTickLabel)) {
      return tickLabel;
    }
    if (this.labelTicks &&
      this.hasHistogram &&
      !this.precise &&
      this.labelHandles &&
      (isMinTickLabel || isMaxTickLabel)) {
      return tickLabel;
    }
    if (this.labelTicks &&
      this.hasHistogram &&
      this.precise &&
      this.labelHandles &&
      (isMinTickLabel || isMaxTickLabel)) {
      return tickLabel;
    }
    return null;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  keyDownHandler(event) {
    const mirror = this.shouldMirror();
    const { activeProp, max, min, pageStep, step } = this;
    const value = this[activeProp];
    const { key } = event;
    if ((0,_key_js__WEBPACK_IMPORTED_MODULE_4__.i)(key)) {
      event.preventDefault();
      return;
    }
    let adjustment;
    if (key === "ArrowUp" || key === "ArrowRight") {
      const directionFactor = mirror && key === "ArrowRight" ? -1 : 1;
      adjustment = value + step * directionFactor;
    }
    else if (key === "ArrowDown" || key === "ArrowLeft") {
      const directionFactor = mirror && key === "ArrowLeft" ? -1 : 1;
      adjustment = value - step * directionFactor;
    }
    else if (key === "PageUp") {
      if (pageStep) {
        adjustment = value + pageStep;
      }
    }
    else if (key === "PageDown") {
      if (pageStep) {
        adjustment = value - pageStep;
      }
    }
    else if (key === "Home") {
      adjustment = min;
    }
    else if (key === "End") {
      adjustment = max;
    }
    if (isNaN(adjustment)) {
      return;
    }
    event.preventDefault();
    const fixedDecimalAdjustment = Number(adjustment.toFixed((0,_math_js__WEBPACK_IMPORTED_MODULE_8__.d)(step)));
    this.setValue({
      [activeProp]: this.clamp(fixedDecimalAdjustment, activeProp),
    });
  }
  pointerDownHandler(event) {
    if (this.disabled || !(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.j)(event)) {
      return;
    }
    const x = event.clientX || event.pageX;
    const position = this.translate(x);
    let prop = "value";
    if (isRange(this.value)) {
      const inRange = position >= this.minValue && position <= this.maxValue;
      if (inRange && this.lastDragProp === "minMaxValue") {
        prop = "minMaxValue";
      }
      else {
        const closerToMax = Math.abs(this.maxValue - position) < Math.abs(this.minValue - position);
        prop = closerToMax || position > this.maxValue ? "maxValue" : "minValue";
      }
    }
    this.lastDragPropValue = this[prop];
    this.dragStart(prop);
    const isThumbActive = this.el.shadowRoot.querySelector(".thumb:active");
    if (!isThumbActive) {
      this.setValue({ [prop]: this.clamp(position, prop) });
    }
    this.focusActiveHandle(x);
  }
  handleTouchStart(event) {
    // needed to prevent extra click at the end of a handle drag
    event.preventDefault();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    const handle = this.minHandle ? this.minHandle : this.maxHandle;
    handle?.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  setValueFromMinMax() {
    const { minValue, maxValue } = this;
    if (typeof minValue === "number" && typeof maxValue === "number") {
      this.value = [minValue, maxValue];
    }
  }
  setMinMaxFromValue() {
    const { value } = this;
    if (isRange(value)) {
      this.minValue = value[0];
      this.maxValue = value[1];
    }
  }
  onLabelClick() {
    this.setFocus();
  }
  shouldMirror() {
    return this.mirrored && !this.hasHistogram;
  }
  shouldUseMinValue() {
    if (!isRange(this.value)) {
      return false;
    }
    return ((this.hasHistogram && this.maxValue === 0) || (!this.hasHistogram && this.minValue === 0));
  }
  getTickDensity() {
    const density = (this.max - this.min) / this.ticks / maxTickElementThreshold;
    return density < 1 ? 1 : density;
  }
  generateTickValues() {
    const tickInterval = this.ticks ?? 0;
    if (tickInterval <= 0) {
      return [];
    }
    const ticks = [this.min];
    const density = this.getTickDensity();
    const tickOffset = tickInterval * density;
    let current = this.min;
    while (current < this.max) {
      current += tickOffset;
      ticks.push(Math.min(current, this.max));
    }
    if (!ticks.includes(this.max)) {
      ticks.push(this.max);
    }
    return ticks;
  }
  pointerDownDragStart(event, prop) {
    if (!(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.j)(event)) {
      return;
    }
    this.dragStart(prop);
  }
  dragStart(prop) {
    this.dragProp = prop;
    this.lastDragProp = this.dragProp;
    this.activeProp = prop;
    document.addEventListener("pointermove", this.dragUpdate);
    document.addEventListener("pointerup", this.pointerUpDragEnd);
    document.addEventListener("pointercancel", this.dragEnd);
  }
  focusActiveHandle(valueX) {
    switch (this.dragProp) {
      case "minValue":
        this.minHandle.focus();
        break;
      case "maxValue":
      case "value":
        this.maxHandle.focus();
        break;
      case "minMaxValue":
        this.getClosestHandle(valueX).focus();
        break;
    }
  }
  emitInput() {
    this.calciteSliderInput.emit();
  }
  emitChange() {
    this.calciteSliderChange.emit();
  }
  removeDragListeners() {
    document.removeEventListener("pointermove", this.dragUpdate);
    document.removeEventListener("pointerup", this.pointerUpDragEnd);
    document.removeEventListener("pointercancel", this.dragEnd);
  }
  /**
   * Set prop value(s) if changed at the component level
   *
   * @param {object} values - a set of key/value pairs delineating what properties in the component to update
   */
  setValue(values) {
    let valueChanged;
    Object.keys(values).forEach((propName) => {
      const newValue = values[propName];
      if (!valueChanged) {
        const oldValue = this[propName];
        valueChanged = oldValue !== newValue;
      }
      this[propName] = newValue;
    });
    if (!valueChanged) {
      return;
    }
    const dragging = this.dragProp;
    if (!dragging) {
      this.emitChange();
    }
    this.emitInput();
  }
  /**
   * If number is outside range, constrain to min or max
   *
   * @param value
   * @param prop
   * @internal
   */
  clamp(value, prop) {
    value = (0,_math_js__WEBPACK_IMPORTED_MODULE_8__.c)(value, this.min, this.max);
    // ensure that maxValue and minValue don't swap positions
    if (prop === "maxValue") {
      value = Math.max(value, this.minValue);
    }
    if (prop === "minValue") {
      value = Math.min(value, this.maxValue);
    }
    return value;
  }
  /**
   * Translate a pixel position to value along the range
   *
   * @param x
   * @internal
   */
  translate(x) {
    const range = this.max - this.min;
    const { left, width } = this.trackEl.getBoundingClientRect();
    const percent = (x - left) / width;
    const mirror = this.shouldMirror();
    const clampedValue = this.clamp(this.min + range * (mirror ? 1 - percent : percent));
    let value = Number(clampedValue.toFixed((0,_math_js__WEBPACK_IMPORTED_MODULE_8__.d)(this.step)));
    if (this.snap && this.step) {
      value = this.getClosestStep(value);
    }
    return value;
  }
  /**
   * Get closest allowed value along stepped values
   *
   * @param num
   * @internal
   */
  getClosestStep(num) {
    num = Number(this.clamp(num).toFixed((0,_math_js__WEBPACK_IMPORTED_MODULE_8__.d)(this.step)));
    if (this.step) {
      const step = Math.round(num / this.step) * this.step;
      num = Number(this.clamp(step).toFixed((0,_math_js__WEBPACK_IMPORTED_MODULE_8__.d)(this.step)));
    }
    return num;
  }
  getClosestHandle(valueX) {
    return this.getDistanceX(this.maxHandle, valueX) > this.getDistanceX(this.minHandle, valueX)
      ? this.minHandle
      : this.maxHandle;
  }
  getDistanceX(el, valueX) {
    return Math.abs(el.getBoundingClientRect().left - valueX);
  }
  getFontSizeForElement(element) {
    return Number(window.getComputedStyle(element).getPropertyValue("font-size").match(/\d+/)[0]);
  }
  /**
   * Get position of value along range as fractional value
   *
   * @param num
   * @return {number} number in the unit interval [0,1]
   * @internal
   */
  getUnitInterval(num) {
    num = this.clamp(num);
    const range = this.max - this.min;
    return (num - this.min) / range;
  }
  adjustHostObscuredHandleLabel(name) {
    const label = this.el.shadowRoot.querySelector(`.handle__label--${name}`);
    const labelStatic = this.el.shadowRoot.querySelector(`.handle__label--${name}.static`);
    const labelTransformed = this.el.shadowRoot.querySelector(`.handle__label--${name}.transformed`);
    const labelStaticBounds = labelStatic.getBoundingClientRect();
    const labelStaticOffset = this.getHostOffset(labelStaticBounds.left, labelStaticBounds.right);
    label.style.transform = `translateX(${labelStaticOffset}px)`;
    labelTransformed.style.transform = `translateX(${labelStaticOffset}px)`;
  }
  hyphenateCollidingRangeHandleLabels() {
    const { shadowRoot } = this.el;
    const mirror = this.shouldMirror();
    const leftModifier = mirror ? "value" : "minValue";
    const rightModifier = mirror ? "minValue" : "value";
    const leftValueLabel = shadowRoot.querySelector(`.handle__label--${leftModifier}`);
    const leftValueLabelStatic = shadowRoot.querySelector(`.handle__label--${leftModifier}.static`);
    const leftValueLabelTransformed = shadowRoot.querySelector(`.handle__label--${leftModifier}.transformed`);
    const leftValueLabelStaticHostOffset = this.getHostOffset(leftValueLabelStatic.getBoundingClientRect().left, leftValueLabelStatic.getBoundingClientRect().right);
    const rightValueLabel = shadowRoot.querySelector(`.handle__label--${rightModifier}`);
    const rightValueLabelStatic = shadowRoot.querySelector(`.handle__label--${rightModifier}.static`);
    const rightValueLabelTransformed = shadowRoot.querySelector(`.handle__label--${rightModifier}.transformed`);
    const rightValueLabelStaticHostOffset = this.getHostOffset(rightValueLabelStatic.getBoundingClientRect().left, rightValueLabelStatic.getBoundingClientRect().right);
    const labelFontSize = this.getFontSizeForElement(leftValueLabel);
    const labelTransformedOverlap = this.getRangeLabelOverlap(leftValueLabelTransformed, rightValueLabelTransformed);
    const hyphenLabel = leftValueLabel;
    const labelOffset = labelFontSize / 2;
    if (labelTransformedOverlap > 0) {
      hyphenLabel.classList.add("hyphen", "hyphen--wrap");
      if (rightValueLabelStaticHostOffset === 0 && leftValueLabelStaticHostOffset === 0) {
        // Neither handle overlaps the host boundary
        let leftValueLabelTranslate = labelTransformedOverlap / 2 - labelOffset;
        leftValueLabelTranslate =
          Math.sign(leftValueLabelTranslate) === -1
            ? Math.abs(leftValueLabelTranslate)
            : -leftValueLabelTranslate;
        const leftValueLabelTransformedHostOffset = this.getHostOffset(leftValueLabelTransformed.getBoundingClientRect().left +
          leftValueLabelTranslate -
          labelOffset, leftValueLabelTransformed.getBoundingClientRect().right +
          leftValueLabelTranslate -
          labelOffset);
        let rightValueLabelTranslate = labelTransformedOverlap / 2;
        const rightValueLabelTransformedHostOffset = this.getHostOffset(rightValueLabelTransformed.getBoundingClientRect().left + rightValueLabelTranslate, rightValueLabelTransformed.getBoundingClientRect().right + rightValueLabelTranslate);
        if (leftValueLabelTransformedHostOffset !== 0) {
          leftValueLabelTranslate += leftValueLabelTransformedHostOffset;
          rightValueLabelTranslate += leftValueLabelTransformedHostOffset;
        }
        if (rightValueLabelTransformedHostOffset !== 0) {
          leftValueLabelTranslate += rightValueLabelTransformedHostOffset;
          rightValueLabelTranslate += rightValueLabelTransformedHostOffset;
        }
        leftValueLabel.style.transform = `translateX(${leftValueLabelTranslate}px)`;
        leftValueLabelTransformed.style.transform = `translateX(${leftValueLabelTranslate - labelOffset}px)`;
        rightValueLabel.style.transform = `translateX(${rightValueLabelTranslate}px)`;
        rightValueLabelTransformed.style.transform = `translateX(${rightValueLabelTranslate}px)`;
      }
      else if (leftValueLabelStaticHostOffset > 0 || rightValueLabelStaticHostOffset > 0) {
        // labels overlap host boundary on the left side
        leftValueLabel.style.transform = `translateX(${leftValueLabelStaticHostOffset + labelOffset}px)`;
        rightValueLabel.style.transform = `translateX(${labelTransformedOverlap + rightValueLabelStaticHostOffset}px)`;
        rightValueLabelTransformed.style.transform = `translateX(${labelTransformedOverlap + rightValueLabelStaticHostOffset}px)`;
      }
      else if (leftValueLabelStaticHostOffset < 0 || rightValueLabelStaticHostOffset < 0) {
        // labels overlap host boundary on the right side
        let leftValueLabelTranslate = Math.abs(leftValueLabelStaticHostOffset) + labelTransformedOverlap - labelOffset;
        leftValueLabelTranslate =
          Math.sign(leftValueLabelTranslate) === -1
            ? Math.abs(leftValueLabelTranslate)
            : -leftValueLabelTranslate;
        leftValueLabel.style.transform = `translateX(${leftValueLabelTranslate}px)`;
        leftValueLabelTransformed.style.transform = `translateX(${leftValueLabelTranslate - labelOffset}px)`;
      }
    }
    else {
      hyphenLabel.classList.remove("hyphen", "hyphen--wrap");
      leftValueLabel.style.transform = `translateX(${leftValueLabelStaticHostOffset}px)`;
      leftValueLabelTransformed.style.transform = `translateX(${leftValueLabelStaticHostOffset}px)`;
      rightValueLabel.style.transform = `translateX(${rightValueLabelStaticHostOffset}px)`;
      rightValueLabelTransformed.style.transform = `translateX(${rightValueLabelStaticHostOffset}px)`;
    }
  }
  /**
   * Hides bounding tick labels that are obscured by either handle.
   */
  hideObscuredBoundingTickLabels() {
    const valueIsRange = isRange(this.value);
    if (!this.hasHistogram && !valueIsRange && !this.labelHandles && !this.precise) {
      return;
    }
    if (!this.hasHistogram && !valueIsRange && this.labelHandles && !this.precise) {
      return;
    }
    if (!this.hasHistogram && !valueIsRange && !this.labelHandles && this.precise) {
      return;
    }
    if (!this.hasHistogram && !valueIsRange && this.labelHandles && this.precise) {
      return;
    }
    if (!this.hasHistogram && valueIsRange && !this.precise) {
      return;
    }
    if (this.hasHistogram && !this.precise && !this.labelHandles) {
      return;
    }
    const minHandle = this.el.shadowRoot.querySelector(".thumb--minValue");
    const maxHandle = this.el.shadowRoot.querySelector(".thumb--value");
    const minTickLabel = this.el.shadowRoot.querySelector(".tick__label--min");
    const maxTickLabel = this.el.shadowRoot.querySelector(".tick__label--max");
    if (!minHandle && maxHandle && minTickLabel && maxTickLabel) {
      minTickLabel.style.opacity = this.isMinTickLabelObscured(minTickLabel, maxHandle) ? "0" : "1";
      maxTickLabel.style.opacity = this.isMaxTickLabelObscured(maxTickLabel, maxHandle) ? "0" : "1";
    }
    if (minHandle && maxHandle && minTickLabel && maxTickLabel) {
      minTickLabel.style.opacity =
        this.isMinTickLabelObscured(minTickLabel, minHandle) ||
          this.isMinTickLabelObscured(minTickLabel, maxHandle)
          ? "0"
          : "1";
      maxTickLabel.style.opacity =
        this.isMaxTickLabelObscured(maxTickLabel, minHandle) ||
          (this.isMaxTickLabelObscured(maxTickLabel, maxHandle) && this.hasHistogram)
          ? "0"
          : "1";
    }
  }
  /**
   * Returns an integer representing the number of pixels to offset on the left or right side based on desired position behavior.
   *
   * @param leftBounds
   * @param rightBounds
   * @internal
   */
  getHostOffset(leftBounds, rightBounds) {
    const hostBounds = this.el.getBoundingClientRect();
    const buffer = 7;
    if (leftBounds + buffer < hostBounds.left) {
      return hostBounds.left - leftBounds - buffer;
    }
    if (rightBounds - buffer > hostBounds.right) {
      return -(rightBounds - hostBounds.right) + buffer;
    }
    return 0;
  }
  /**
   * Returns an integer representing the number of pixels that the two given span elements are overlapping, taking into account
   * a space in between the two spans equal to the font-size set on them to account for the space needed to render a hyphen.
   *
   * @param leftLabel
   * @param rightLabel
   */
  getRangeLabelOverlap(leftLabel, rightLabel) {
    const leftLabelBounds = leftLabel.getBoundingClientRect();
    const rightLabelBounds = rightLabel.getBoundingClientRect();
    const leftLabelFontSize = this.getFontSizeForElement(leftLabel);
    const rangeLabelOverlap = leftLabelBounds.right + leftLabelFontSize - rightLabelBounds.left;
    return Math.max(rangeLabelOverlap, 0);
  }
  /**
   * Returns a boolean value representing if the minLabel span element is obscured (being overlapped) by the given handle div element.
   *
   * @param minLabel
   * @param handle
   */
  isMinTickLabelObscured(minLabel, handle) {
    const minLabelBounds = minLabel.getBoundingClientRect();
    const handleBounds = handle.getBoundingClientRect();
    return (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.l)(minLabelBounds, handleBounds);
  }
  /**
   * Returns a boolean value representing if the maxLabel span element is obscured (being overlapped) by the given handle div element.
   *
   * @param maxLabel
   * @param handle
   */
  isMaxTickLabelObscured(maxLabel, handle) {
    const maxLabelBounds = maxLabel.getBoundingClientRect();
    const handleBounds = handle.getBoundingClientRect();
    return (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.l)(maxLabelBounds, handleBounds);
  }
  static get delegatesFocus() { return true; }
  get el() { return this; }
  static get watchers() { return {
    "histogram": ["histogramWatcher"],
    "ticks": ["ticksWatcher"],
    "value": ["valueHandler"],
    "minValue": ["minMaxValueHandler"],
    "maxValue": ["minMaxValueHandler"]
  }; }
  static get style() { return sliderCss; }
}, [17, "calcite-slider", {
    "disabled": [516],
    "form": [513],
    "groupSeparator": [516, "group-separator"],
    "hasHistogram": [1540, "has-histogram"],
    "histogram": [16],
    "histogramStops": [16],
    "labelHandles": [516, "label-handles"],
    "labelTicks": [516, "label-ticks"],
    "max": [514],
    "maxLabel": [1, "max-label"],
    "maxValue": [1026, "max-value"],
    "min": [514],
    "minLabel": [1, "min-label"],
    "minValue": [1026, "min-value"],
    "mirrored": [516],
    "name": [513],
    "numberingSystem": [1, "numbering-system"],
    "pageStep": [514, "page-step"],
    "precise": [516],
    "required": [516],
    "snap": [516],
    "step": [514],
    "ticks": [514],
    "value": [1538],
    "scale": [513],
    "effectiveLocale": [32],
    "minMaxValueRange": [32],
    "minValueDragRange": [32],
    "maxValueDragRange": [32],
    "tickValues": [32],
    "setFocus": [64]
  }, [[0, "keydown", "keyDownHandler"], [1, "pointerdown", "pointerDownHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-slider", "calcite-graph"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-slider":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Slider);
      }
      break;
    case "calcite-graph":
      if (!customElements.get(tagName)) {
        (0,_graph_js__WEBPACK_IMPORTED_MODULE_9__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteSlider = Slider;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/graph.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/graph.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ Graph),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */




/**
 * Calculate slope of the tangents
 * uses Steffen interpolation as it's monotonic
 * http://jrwalsh1.github.io/posts/interpolations/
 *
 * @param p0
 * @param p1
 * @param p2
 */
function slope(p0, p1, p2) {
  const dx = p1[0] - p0[0];
  const dx1 = p2[0] - p1[0];
  const dy = p1[1] - p0[1];
  const dy1 = p2[1] - p1[1];
  const m = dy / (dx || (dx1 < 0 && 0));
  const m1 = dy1 / (dx1 || (dx < 0 && 0));
  const p = (m * dx1 + m1 * dx) / (dx + dx1);
  return (Math.sign(m) + Math.sign(m1)) * Math.min(Math.abs(m), Math.abs(m1), 0.5 * Math.abs(p)) || 0;
}
/**
 * Calculate slope for just one tangent (single-sided)
 *
 * @param p0
 * @param p1
 * @param m
 */
function slopeSingle(p0, p1, m) {
  const dx = p1[0] - p0[0];
  const dy = p1[1] - p0[1];
  return dx ? ((3 * dy) / dx - m) / 2 : m;
}
/**
 * Given two points and their tangent slopes,
 * calculate the bezier handle coordinates and return draw command.
 *
 * Translates Hermite Spline to Bézier curve:
 * https://stackoverflow.com/questions/42574940/
 *
 * @param p0
 * @param p1
 * @param m0
 * @param m1
 * @param t
 */
function bezier(p0, p1, m0, m1, t) {
  const [x0, y0] = p0;
  const [x1, y1] = p1;
  const dx = (x1 - x0) / 3;
  const h1 = t([x0 + dx, y0 + dx * m0]).join(",");
  const h2 = t([x1 - dx, y1 - dx * m1]).join(",");
  const p = t([x1, y1]).join(",");
  return `C ${h1} ${h2} ${p}`;
}
/**
 * Generate a function which will translate a point
 * from the data coordinate space to svg viewbox oriented pixels
 *
 * @param root0
 * @param root0.width
 * @param root0.height
 * @param root0.min
 * @param root0.max
 */
function translate({ width, height, min, max }) {
  const rangeX = max[0] - min[0];
  const rangeY = max[1] - min[1];
  return (point) => {
    const x = ((point[0] - min[0]) / rangeX) * width;
    const y = height - (point[1] / rangeY) * height;
    return [x, y];
  };
}
/**
 * Get the min and max values from the dataset
 *
 * @param data
 */
function range(data) {
  const [startX, startY] = data[0];
  const min = [startX, startY];
  const max = [startX, startY];
  return data.reduce(({ min, max }, [x, y]) => ({
    min: [Math.min(min[0], x), Math.min(min[1], y)],
    max: [Math.max(max[0], x), Math.max(max[1], y)],
  }), { min, max });
}
/**
 * Generate drawing commands for an area graph
 * returns a string can can be passed directly to a path element's `d` attribute
 *
 * @param root0
 * @param root0.data
 * @param root0.min
 * @param root0.max
 * @param root0.t
 */
function area({ data, min, max, t }) {
  if (data.length === 0) {
    return "";
  }
  // important points for beginning and ending the path
  const [startX, startY] = t(data[0]);
  const [minX, minY] = t(min);
  const [maxX] = t(max);
  // keep track of previous slope/points
  let m;
  let p0;
  let p1;
  // iterate over data points, calculating command for each
  const commands = data.reduce((acc, point, i) => {
    p0 = data[i - 2];
    p1 = data[i - 1];
    if (i > 1) {
      const m1 = slope(p0, p1, point);
      const m0 = m === undefined ? slopeSingle(p0, p1, m1) : m;
      const command = bezier(p0, p1, m0, m1, t);
      m = m1;
      return `${acc} ${command}`;
    }
    return acc;
  }, `M ${minX},${minY} L ${minX},${startY} L ${startX},${startY}`);
  // close the path
  const last = data[data.length - 1];
  const end = bezier(p1, last, m, slopeSingle(p1, last, m), t);
  return `${commands} ${end} L ${maxX},${minY} Z`;
}

const graphCss = ":host{display:block;block-size:100%}.svg{fill:currentColor;stroke:transparent;margin:0px;display:block;block-size:100%;inline-size:100%;padding:0px}.svg .graph-path--highlight{fill:var(--calcite-ui-brand);opacity:0.5}:host([hidden]){display:none}[hidden]{display:none}";

const Graph = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.graphId = `calcite-graph-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_0__.g)()}`;
    this.resizeObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_1__.c)("resize", () => (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.forceUpdate)(this));
    this.data = [];
    this.colorStops = undefined;
    this.highlightMin = undefined;
    this.highlightMax = undefined;
    this.min = undefined;
    this.max = undefined;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.resizeObserver?.observe(this.el);
  }
  disconnectedCallback() {
    this.resizeObserver?.disconnect();
  }
  render() {
    const { data, colorStops, el, highlightMax, highlightMin, min, max } = this;
    const id = this.graphId;
    const { clientHeight: height, clientWidth: width } = el;
    // if we have no data, return empty svg
    if (!data || data.length === 0) {
      return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("svg", { "aria-hidden": "true", class: "svg", height: height, preserveAspectRatio: "none", viewBox: `0 0 ${width} ${height}`, width: width }));
    }
    const { min: rangeMin, max: rangeMax } = range(data);
    let currentMin = rangeMin;
    let currentMax = rangeMax;
    if (min < rangeMin[0] || min > rangeMin[0]) {
      currentMin = [min, 0];
    }
    if (max > rangeMax[0] || max < rangeMax[0]) {
      currentMax = [max, rangeMax[1]];
    }
    const t = translate({ min: currentMin, max: currentMax, width, height });
    const [hMinX] = t([highlightMin, currentMax[1]]);
    const [hMaxX] = t([highlightMax, currentMax[1]]);
    const areaPath = area({ data, min: rangeMin, max: rangeMax, t });
    const fill = colorStops ? `url(#linear-gradient-${id})` : undefined;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("svg", { "aria-hidden": "true", class: "svg", height: height, preserveAspectRatio: "none", viewBox: `0 0 ${width} ${height}`, width: width }, colorStops ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("defs", null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("linearGradient", { id: `linear-gradient-${id}`, x1: "0", x2: "1", y1: "0", y2: "0" }, colorStops.map(({ offset, color, opacity }) => ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("stop", { offset: `${offset * 100}%`, "stop-color": color, "stop-opacity": opacity })))))) : null, highlightMin !== undefined ? ([
      (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("mask", { height: "100%", id: `${id}1`, width: "100%", x: "0%", y: "0%" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { d: `
            M 0,0
            L ${hMinX - 1},0
            L ${hMinX - 1},${height}
            L 0,${height}
            Z
          `, fill: "white" })),
      (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("mask", { height: "100%", id: `${id}2`, width: "100%", x: "0%", y: "0%" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { d: `
            M ${hMinX + 1},0
            L ${hMaxX - 1},0
            L ${hMaxX - 1},${height}
            L ${hMinX + 1}, ${height}
            Z
          `, fill: "white" })),
      (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("mask", { height: "100%", id: `${id}3`, width: "100%", x: "0%", y: "0%" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { d: `
                M ${hMaxX + 1},0
                L ${width},0
                L ${width},${height}
                L ${hMaxX + 1}, ${height}
                Z
              `, fill: "white" })),
      (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { class: "graph-path", d: areaPath, fill: fill, mask: `url(#${id}1)` }),
      (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { class: "graph-path--highlight", d: areaPath, fill: fill, mask: `url(#${id}2)` }),
      (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { class: "graph-path", d: areaPath, fill: fill, mask: `url(#${id}3)` }),
    ]) : ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { class: "graph-path", d: areaPath, fill: fill }))));
  }
  get el() { return this; }
  static get style() { return graphCss; }
}, [1, "calcite-graph", {
    "data": [16],
    "colorStops": [16],
    "highlightMin": [2, "highlight-min"],
    "highlightMax": [2, "highlight-max"],
    "min": [514],
    "max": [514]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-graph"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-graph":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Graph);
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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNDI4NTVjYzk1M2QwODU0MzJmMjIwNGQxNWM4M2UzYjYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0c7QUFDekU7QUFDa0M7QUFDc0Q7QUFDWDtBQUNuRTtBQUN5QztBQUNxQjtBQUNKO0FBQy9DO0FBQ0g7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLGtCQUFrQixlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsVUFBVSxzQ0FBc0MsZ0RBQWdELGlFQUFpRSxnREFBZ0QsbUJBQW1CLFVBQVUsc0NBQXNDLGdEQUFnRCxpRUFBaUUsZ0RBQWdELGlCQUFpQixVQUFVLGtDQUFrQyxpREFBaUQsaUVBQWlFLGdEQUFnRCxpQkFBaUIsNEJBQTRCLDhDQUE4QywrQkFBK0Isb0RBQW9ELE1BQU0sY0FBYyxXQUFXLGtCQUFrQixjQUFjLHFCQUFxQixrQkFBa0IsNkRBQTZELDREQUE0RCwyREFBMkQsZ0JBQWdCLHNJQUFzSSxrQkFBa0IsZ0VBQWdFLDBDQUEwQyx5R0FBeUcsVUFBVSxzQ0FBc0MsMENBQTBDLHNDQUFzQyx3Q0FBd0Msc0NBQXNDLHlDQUF5QywrREFBK0Qsb0ZBQW9GLGlCQUFpQixrQkFBa0IscUJBQXFCLE9BQU8sOEVBQThFLGtCQUFrQixXQUFXLGFBQWEsZUFBZSxzQkFBc0IsbUJBQW1CLGtCQUFrQiw2QkFBNkIsWUFBWSxvQkFBb0IsOEJBQThCLG1CQUFtQixnR0FBZ0csK0RBQStELGtCQUFrQixnQkFBZ0IsVUFBVSxvQ0FBb0MsY0FBYyxxQkFBcUIsZ0JBQWdCLG1DQUFtQyxhQUFhLGVBQWUsc0JBQXNCLHFCQUFxQixnREFBZ0QsMEJBQTBCLDZDQUE2Qyw4Q0FBOEMsb0RBQW9ELCtMQUErTCx5QkFBeUIscUJBQXFCLHlEQUF5RCwwQ0FBMEMscUJBQXFCLG1EQUFtRCwrQkFB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O0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDBCQUEwQiwwQ0FBc0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0NBQW9DO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtDQUFrQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywwQ0FBc0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRStGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtc2xpZGVyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9ncmFwaC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvaW50ZXJhY3RpdmUuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2xhYmVsMi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvbWF0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC5qcyc7XG5pbXBvcnQgeyBqIGFzIGlzUHJpbWFyeVBvaW50ZXJCdXR0b24sIGwgYXMgaW50ZXJzZWN0cyB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEZvcm0sIGQgYXMgZGlzY29ubmVjdEZvcm0sIGEgYXMgYWZ0ZXJDb25uZWN0RGVmYXVsdFZhbHVlU2V0LCBIIGFzIEhpZGRlbkZvcm1JbnB1dFNsb3QgfSBmcm9tICcuL2Zvcm0uanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0SW50ZXJhY3RpdmUsIGQgYXMgZGlzY29ubmVjdEludGVyYWN0aXZlLCB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUuanMnO1xuaW1wb3J0IHsgaSBhcyBpc0FjdGl2YXRpb25LZXkgfSBmcm9tICcuL2tleS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMYWJlbCwgZCBhcyBkaXNjb25uZWN0TGFiZWwsIGcgYXMgZ2V0TGFiZWxUZXh0IH0gZnJvbSAnLi9sYWJlbDIuanMnO1xuaW1wb3J0IHsgYSBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBzIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRGb2N1c2FibGUgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IG4gYXMgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLCBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCB7IGQgYXMgZGVjaW1hbFBsYWNlcywgYyBhcyBjbGFtcCB9IGZyb20gJy4vbWF0aC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMiB9IGZyb20gJy4vZ3JhcGguanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGhhbmRsZUxhYmVsOiBcImhhbmRsZV9fbGFiZWxcIixcbiAgaGFuZGxlTGFiZWxNaW5WYWx1ZTogXCJoYW5kbGVfX2xhYmVsLS1taW5WYWx1ZVwiLFxuICBoYW5kbGVMYWJlbFZhbHVlOiBcImhhbmRsZV9fbGFiZWwtLXZhbHVlXCIsXG4gIHRpY2tNaW46IFwidGlja19fbGFiZWwtLW1pblwiLFxuICB0aWNrTWF4OiBcInRpY2tfX2xhYmVsLS1tYXhcIixcbn07XG5jb25zdCBtYXhUaWNrRWxlbWVudFRocmVzaG9sZCA9IDI1MDtcblxuY29uc3Qgc2xpZGVyQ3NzID0gXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiOzpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfS5zY2FsZS0tc3stLWNhbGNpdGUtc2xpZGVyLWhhbmRsZS1zaXplOjAuNjI1cmVtOy0tY2FsY2l0ZS1zbGlkZXItaGFuZGxlLWV4dGVuc2lvbi1oZWlnaHQ6MC40cmVtOy0tY2FsY2l0ZS1zbGlkZXItY29udGFpbmVyLWZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMyl9LnNjYWxlLS1zIC5oYW5kbGVfX2xhYmVsLC5zY2FsZS0tcyAudGlja19fbGFiZWx7bGluZS1oZWlnaHQ6Ljc1cmVtfS5zY2FsZS0tbXstLWNhbGNpdGUtc2xpZGVyLWhhbmRsZS1zaXplOjAuODc1cmVtOy0tY2FsY2l0ZS1zbGlkZXItaGFuZGxlLWV4dGVuc2lvbi1oZWlnaHQ6MC41cmVtOy0tY2FsY2l0ZS1zbGlkZXItY29udGFpbmVyLWZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMil9LnNjYWxlLS1tIC5oYW5kbGVfX2xhYmVsLC5zY2FsZS0tbSAudGlja19fbGFiZWx7bGluZS1oZWlnaHQ6MXJlbX0uc2NhbGUtLWx7LS1jYWxjaXRlLXNsaWRlci1oYW5kbGUtc2l6ZToxcmVtOy0tY2FsY2l0ZS1zbGlkZXItaGFuZGxlLWV4dGVuc2lvbi1oZWlnaHQ6MC42NXJlbTstLWNhbGNpdGUtc2xpZGVyLWNvbnRhaW5lci1mb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpfS5zY2FsZS0tbCAuaGFuZGxlX19sYWJlbCwuc2NhbGUtLWwgLnRpY2tfX2xhYmVse2xpbmUtaGVpZ2h0OjFyZW19LmhhbmRsZV9fbGFiZWwsLnRpY2tfX2xhYmVse2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtc2xpZGVyLWNvbnRhaW5lci1mb250LXNpemUpfTpob3N0e2Rpc3BsYXk6YmxvY2t9LmNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO292ZXJmbG93LXdyYXA6bm9ybWFsO3dvcmQtYnJlYWs6bm9ybWFsO3BhZGRpbmctaW5saW5lOmNhbGModmFyKC0tY2FsY2l0ZS1zbGlkZXItaGFuZGxlLXNpemUpICogMC41KTtwYWRkaW5nLWJsb2NrOmNhbGModmFyKC0tY2FsY2l0ZS1zbGlkZXItaGFuZGxlLXNpemUpICogMC41KTttYXJnaW4tYmxvY2s6Y2FsYyh2YXIoLS1jYWxjaXRlLXNsaWRlci1oYW5kbGUtc2l6ZSkgKiAwLjUpO21hcmdpbi1pbmxpbmU6MDstLWNhbGNpdGUtc2xpZGVyLWZ1bGwtaGFuZGxlLWhlaWdodDpjYWxjKFxcbiAgICB2YXIoLS1jYWxjaXRlLXNsaWRlci1oYW5kbGUtc2l6ZSkgKyB2YXIoLS1jYWxjaXRlLXNsaWRlci1oYW5kbGUtZXh0ZW5zaW9uLWhlaWdodClcXG4gICk7dG91Y2gtYWN0aW9uOm5vbmV9Omhvc3QoW2Rpc2FibGVkXSkgLnRyYWNrX19yYW5nZSw6aG9zdChbZGlzYWJsZWRdKSAudGljay0tYWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX0uc2NhbGUtLXMgLnRodW1iOm5vdCgudGh1bWItLXByZWNpc2Upey0tY2FsY2l0ZS1zbGlkZXItdGh1bWIteS1vZmZzZXQ6LTAuMzc1cmVtfS5zY2FsZS0tbSAudGh1bWI6bm90KC50aHVtYi0tcHJlY2lzZSl7LS1jYWxjaXRlLXNsaWRlci10aHVtYi15LW9mZnNldDotMC41cmVtfS5zY2FsZS0tbCAudGh1bWI6bm90KC50aHVtYi0tcHJlY2lzZSl7LS1jYWxjaXRlLXNsaWRlci10aHVtYi15LW9mZnNldDotMC41NXJlbX06aG9zdChbcHJlY2lzZV06bm90KFtoYXMtaGlzdG9ncmFtXSkpIC5jb250YWluZXIgLnRodW1iLS12YWx1ZXstLWNhbGNpdGUtc2xpZGVyLXRodW1iLXktb2Zmc2V0OmNhbGModmFyKC0tY2FsY2l0ZS1zbGlkZXItZnVsbC1oYW5kbGUtaGVpZ2h0KSAqIC0xKX0udGh1bWItY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO21heC1pbmxpbmUtc2l6ZToxMDAlfS50aHVtYnstLWNhbGNpdGUtc2xpZGVyLXRodW1iLXgtb2Zmc2V0OmNhbGModmFyKC0tY2FsY2l0ZS1zbGlkZXItaGFuZGxlLXNpemUpICogMC41KTtwb3NpdGlvbjphYnNvbHV0ZTttYXJnaW46MHB4O2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO2JvcmRlci1zdHlsZTpub25lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7cGFkZGluZzowcHg7Zm9udC1mYW1pbHk6aW5oZXJpdDtvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHg7dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1jYWxjaXRlLXNsaWRlci10aHVtYi14LW9mZnNldCksIHZhcigtLWNhbGNpdGUtc2xpZGVyLXRodW1iLXktb2Zmc2V0KSl9LnRodW1iIC5oYW5kbGVfX2xhYmVsLnN0YXRpYywudGh1bWIgLmhhbmRsZV9fbGFiZWwudHJhbnNmb3JtZWR7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQtYmxvY2s6MHB4O29wYWNpdHk6MH0udGh1bWIgLmhhbmRsZV9fbGFiZWwuaHlwaGVuOjphZnRlcntjb250ZW50OlxcXCLigJRcXFwiO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2lubGluZS1zaXplOjFlbX0udGh1bWIgLmhhbmRsZV9fbGFiZWwuaHlwaGVuLS13cmFwe2Rpc3BsYXk6ZmxleH0udGh1bWIgLmhhbmRsZXtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyLXJhZGl1czo5OTk5cHg7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudDtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtc2xpZGVyLWhhbmRsZS1zaXplKTtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLXNsaWRlci1oYW5kbGUtc2l6ZSk7Ym94LXNoYWRvdzowIDAgMCAycHggdmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpIGluc2V0O3RyYW5zaXRpb246Ym9yZGVyIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGVhc2UsIGJhY2tncm91bmQtY29sb3IgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bSkgZWFzZSwgYm94LXNoYWRvdyB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2V9LnRodW1iIC5oYW5kbGUtZXh0ZW5zaW9ue2lubGluZS1zaXplOjAuMTI1cmVtO2Jsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1zbGlkZXItaGFuZGxlLWV4dGVuc2lvbi1oZWlnaHQpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfS50aHVtYjpob3ZlciAuaGFuZGxle2JveC1zaGFkb3c6MCAwIDAgM3B4IHZhcigtLWNhbGNpdGUtdWktYnJhbmQpIGluc2V0fS50aHVtYjpob3ZlciAuaGFuZGxlLWV4dGVuc2lvbntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS50aHVtYjpmb2N1cyAuaGFuZGxle291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIDJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS50aHVtYjpmb2N1cyAuaGFuZGxlLWV4dGVuc2lvbntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS50aHVtYi50aHVtYi0tbWluVmFsdWV7dHJhbnNmb3JtOnRyYW5zbGF0ZShjYWxjKHZhcigtLWNhbGNpdGUtc2xpZGVyLXRodW1iLXgtb2Zmc2V0KSAqIC0xKSwgdmFyKC0tY2FsY2l0ZS1zbGlkZXItdGh1bWIteS1vZmZzZXQpKX0udGh1bWIudGh1bWItLXByZWNpc2V7LS1jYWxjaXRlLXNsaWRlci10aHVtYi15LW9mZnNldDotMC4xMjVyZW19Omhvc3QoW2xhYmVsLWhhbmRsZXNdKSAudGh1bWJ7LS1jYWxjaXRlLXNsaWRlci10aHVtYi14LW9mZnNldDo1MCV9Omhvc3QoW2xhYmVsLWhhbmRsZXNdKTpob3N0KDpub3QoW2hhcy1oaXN0b2dyYW1dKSkgLnNjYWxlLS1zIC50aHVtYjpub3QoLnRodW1iLS1wcmVjaXNlKXstLWNhbGNpdGUtc2xpZGVyLXRodW1iLXktb2Zmc2V0Oi0xLjQzNzVyZW19Omhvc3QoW2xhYmVsLWhhbmRsZXNdKTpob3N0KDpub3QoW2hhcy1oaXN0b2dyYW1dKSkgLnNjYWxlLS1tIC50aHVtYjpub3QoLnRodW1iLS1wcmVjaXNlKXstLWNhbGNpdGUtc2xpZGVyLXRodW1iLXktb2Zmc2V0Oi0xLjg3NXJlbX06aG9zdChbbGFiZWwtaGFuZGxlc10pOmhvc3QoOm5vdChbaGFzLWhpc3RvZ3JhbV0pKSAuc2NhbGUtLWwgLnRodW1iOm5vdCgudGh1bWItLXByZWNpc2Upey0tY2FsY2l0ZS1zbGlkZXItdGh1bWIteS1vZmZzZXQ6LTJyZW19Omhvc3QoW2hhcy1oaXN0b2dyYW1dW2xhYmVsLWhhbmRsZXNdKSAuaGFuZGxlX19sYWJlbCw6aG9zdChbbGFiZWwtaGFuZGxlc106bm90KFtoYXMtaGlzdG9ncmFtXSkpIC50aHVtYi0tbWluVmFsdWUudGh1bWItLXByZWNpc2UgLmhhbmRsZV9fbGFiZWx7bWFyZ2luLWJsb2NrLXN0YXJ0OjAuNWVtfTpob3N0KDpub3QoW2hhcy1oaXN0b2dyYW1dKTpub3QoW3ByZWNpc2VdKSkgLmhhbmRsZV9fbGFiZWwsOmhvc3QoW2xhYmVsLWhhbmRsZXNdOm5vdChbaGFzLWhpc3RvZ3JhbV0pKSAudGh1bWItLXZhbHVlIC5oYW5kbGVfX2xhYmVse21hcmdpbi1ibG9jay1lbmQ6MC41ZW19Omhvc3QoW2xhYmVsLWhhbmRsZXNdW3ByZWNpc2VdKTpob3N0KDpub3QoW2hhcy1oaXN0b2dyYW1dKSkgLnNjYWxlLS1zIC50aHVtYi0tdmFsdWV7LS1jYWxjaXRlLXNsaWRlci10aHVtYi15LW9mZnNldDotMi4wNzVyZW19Omhvc3QoW2xhYmVsLWhhbmRsZXNdW3ByZWNpc2VdKTpob3N0KDpub3QoW2hhcy1oaXN0b2dyYW1dKSkgLnNjYWxlLS1tIC50aHVtYi0tdmFsdWV7LS1jYWxjaXRlLXNsaWRlci10aHVtYi15LW9mZnNldDotMi43NXJlbX06aG9zdChbbGFiZWwtaGFuZGxlc11bcHJlY2lzZV0pOmhvc3QoOm5vdChbaGFzLWhpc3RvZ3JhbV0pKSAuc2NhbGUtLWwgLnRodW1iLS12YWx1ZXstLWNhbGNpdGUtc2xpZGVyLXRodW1iLXktb2Zmc2V0Oi0zLjA2MjVyZW19LnRodW1iOmZvY3VzIC5oYW5kbGUsLnRodW1iLS1hY3RpdmUgLmhhbmRsZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO2JveC1zaGFkb3c6MCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xNil9LnRodW1iOmhvdmVyLnRodW1iLS1wcmVjaXNlOmFmdGVyLC50aHVtYjpmb2N1cy50aHVtYi0tcHJlY2lzZTphZnRlciwudGh1bWItLWFjdGl2ZS50aHVtYi0tcHJlY2lzZTphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS50cmFja3twb3NpdGlvbjpyZWxhdGl2ZTtibG9jay1zaXplOjAuMTI1cmVtO2JvcmRlci1yYWRpdXM6MHB4O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMik7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bSkgZWFzZS1pbn0udHJhY2tfX3Jhbmdle3Bvc2l0aW9uOmFic29sdXRlO2luc2V0LWJsb2NrLXN0YXJ0OjBweDtibG9jay1zaXplOjAuMTI1cmVtO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9LmNvbnRhaW5lci0tcmFuZ2UgLnRyYWNrX19yYW5nZTpob3ZlcntjdXJzb3I6ZXctcmVzaXplfS5jb250YWluZXItLXJhbmdlIC50cmFja19fcmFuZ2U6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7aW5saW5lLXNpemU6MTAwJTtjb250ZW50OlxcXCJcXFwiO2luc2V0LWJsb2NrLXN0YXJ0OmNhbGModmFyKC0tY2FsY2l0ZS1zbGlkZXItZnVsbC1oYW5kbGUtaGVpZ2h0KSAqIDAuNSAqIC0xKTtibG9jay1zaXplOmNhbGModmFyKC0tY2FsY2l0ZS1zbGlkZXItaGFuZGxlLXNpemUpICsgdmFyKC0tY2FsY2l0ZS1zbGlkZXItaGFuZGxlLWV4dGVuc2lvbi1oZWlnaHQpKX1AbWVkaWEgKGZvcmNlZC1jb2xvcnM6IGFjdGl2ZSl7LnRodW1ie291dGxpbmUtd2lkdGg6MDtvdXRsaW5lLW9mZnNldDowfS5oYW5kbGV7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4fS50aHVtYjpmb2N1cyAuaGFuZGxlLC50aHVtYiAuaGFuZGxlLWV4dGVuc2lvbiwudGh1bWI6aG92ZXIgLmhhbmRsZS1leHRlbnNpb24sLnRodW1iOmZvY3VzIC5oYW5kbGUtZXh0ZW5zaW9uLC50aHVtYjphY3RpdmUgLmhhbmRsZS1leHRlbnNpb257YmFja2dyb3VuZC1jb2xvcjpjYW52YXNUZXh0fS50cmFja3tiYWNrZ3JvdW5kLWNvbG9yOmNhbnZhc1RleHR9LnRyYWNrX19yYW5nZXtiYWNrZ3JvdW5kLWNvbG9yOmhpZ2hsaWdodH19LnRpY2t7cG9zaXRpb246YWJzb2x1dGU7YmxvY2stc2l6ZTowLjI1cmVtO2lubGluZS1zaXplOjAuMTI1cmVtO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7aW5zZXQtYmxvY2stc3RhcnQ6LTJweDtwb2ludGVyLWV2ZW50czpub25lO21hcmdpbi1pbmxpbmUtc3RhcnQ6Y2FsYygtMSAqIDAuMTI1cmVtKX0udGljay0tYWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9LnRpY2tfX2xhYmVse3BvaW50ZXItZXZlbnRzOm5vbmU7bWFyZ2luLWJsb2NrLXN0YXJ0OjAuODc1cmVtO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS50aWNrX19sYWJlbC0tbWlue3RyYW5zaXRpb246b3BhY2l0eSB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS50aWNrX19sYWJlbC0tbWF4e3RyYW5zaXRpb246b3BhY2l0eSB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdCl9Omhvc3QoW2hhcy1oaXN0b2dyYW1dW2xhYmVsLWhhbmRsZXNdKSAudGlja19fbGFiZWwtLW1pbiw6aG9zdChbaGFzLWhpc3RvZ3JhbV1bbGFiZWwtaGFuZGxlc10pIC50aWNrX19sYWJlbC0tbWF4LDpob3N0KFtoYXMtaGlzdG9ncmFtXVtwcmVjaXNlXSkgLnRpY2tfX2xhYmVsLS1taW4sOmhvc3QoW2hhcy1oaXN0b2dyYW1dW3ByZWNpc2VdKSAudGlja19fbGFiZWwtLW1heHtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfS5ncmFwaHtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyk7YmxvY2stc2l6ZTo0OHB4fTpob3N0KFtsYWJlbC10aWNrc11bdGlja3NdKSAuY29udGFpbmVye3BhZGRpbmctYmxvY2stZW5kOmNhbGMoMC44NzVyZW0gKyB2YXIoLS1jYWxjaXRlLXNsaWRlci1jb250YWluZXItZm9udC1zaXplKSl9Omhvc3QoW2hhcy1oaXN0b2dyYW1dKTpob3N0KFtwcmVjaXNlXVtsYWJlbC1oYW5kbGVzXSkgLmNvbnRhaW5lcntwYWRkaW5nLWJsb2NrLWVuZDpjYWxjKHZhcigtLWNhbGNpdGUtc2xpZGVyLWZ1bGwtaGFuZGxlLWhlaWdodCkgKyAxZW0pfTpob3N0KFtoYXMtaGlzdG9ncmFtXSk6aG9zdChbbGFiZWwtaGFuZGxlc106bm90KFtwcmVjaXNlXSkpIC5jb250YWluZXJ7cGFkZGluZy1ibG9jay1lbmQ6Y2FsYyh2YXIoLS1jYWxjaXRlLXNsaWRlci1oYW5kbGUtc2l6ZSkgKiAwLjUgKyAxZW0pfTpob3N0KFtoYXMtaGlzdG9ncmFtXSk6aG9zdChbcHJlY2lzZV06bm90KFtsYWJlbC1oYW5kbGVzXSkpIC5jb250YWluZXJ7cGFkZGluZy1ibG9jay1lbmQ6dmFyKC0tY2FsY2l0ZS1zbGlkZXItZnVsbC1oYW5kbGUtaGVpZ2h0KX06aG9zdCg6bm90KFtoYXMtaGlzdG9ncmFtXSkpOmhvc3QoW3ByZWNpc2VdOm5vdChbbGFiZWwtaGFuZGxlc10pKSAuY29udGFpbmVye3BhZGRpbmctYmxvY2stc3RhcnQ6dmFyKC0tY2FsY2l0ZS1zbGlkZXItZnVsbC1oYW5kbGUtaGVpZ2h0KX06aG9zdCg6bm90KFtoYXMtaGlzdG9ncmFtXSkpOmhvc3QoW3ByZWNpc2VdOm5vdChbbGFiZWwtaGFuZGxlc10pKSAuY29udGFpbmVyLS1yYW5nZXtwYWRkaW5nLWJsb2NrLWVuZDp2YXIoLS1jYWxjaXRlLXNsaWRlci1mdWxsLWhhbmRsZS1oZWlnaHQpfTpob3N0KDpub3QoW2hhcy1oaXN0b2dyYW1dKSk6aG9zdChbbGFiZWwtaGFuZGxlc106bm90KFtwcmVjaXNlXSkpIC5jb250YWluZXJ7cGFkZGluZy1ibG9jay1zdGFydDpjYWxjKHZhcigtLWNhbGNpdGUtc2xpZGVyLWZ1bGwtaGFuZGxlLWhlaWdodCkgKyA0cHgpfTpob3N0KDpub3QoW2hhcy1oaXN0b2dyYW1dKSk6aG9zdChbbGFiZWwtaGFuZGxlc11bcHJlY2lzZV0pIC5jb250YWluZXJ7cGFkZGluZy1ibG9jay1zdGFydDpjYWxjKHZhcigtLWNhbGNpdGUtc2xpZGVyLWZ1bGwtaGFuZGxlLWhlaWdodCkgKyB2YXIoLS1jYWxjaXRlLXNsaWRlci1jb250YWluZXItZm9udC1zaXplKSArIDRweCl9Omhvc3QoOm5vdChbaGFzLWhpc3RvZ3JhbV0pKTpob3N0KFtsYWJlbC1oYW5kbGVzXVtwcmVjaXNlXSkgLmNvbnRhaW5lci0tcmFuZ2V7cGFkZGluZy1ibG9jay1lbmQ6Y2FsYyh2YXIoLS1jYWxjaXRlLXNsaWRlci1mdWxsLWhhbmRsZS1oZWlnaHQpICsgdmFyKC0tY2FsY2l0ZS1zbGlkZXItY29udGFpbmVyLWZvbnQtc2l6ZSkgKyA0cHgpfTo6c2xvdHRlZChpbnB1dFtzbG90PWhpZGRlbi1mb3JtLWlucHV0XSl7bWFyZ2luOjAgIWltcG9ydGFudDtvcGFjaXR5OjAgIWltcG9ydGFudDtvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtwYWRkaW5nOjAgIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50O2luc2V0OjAgIWltcG9ydGFudDt0cmFuc2Zvcm06bm9uZSAhaW1wb3J0YW50Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lICFpbXBvcnRhbnQ7ei1pbmRleDotMSAhaW1wb3J0YW50fTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5mdW5jdGlvbiBpc1JhbmdlKHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKTtcbn1cbmNvbnN0IFNsaWRlciA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlU2xpZGVySW5wdXQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVTbGlkZXJJbnB1dFwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVTbGlkZXJDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVTbGlkZXJDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5hY3RpdmVQcm9wID0gXCJ2YWx1ZVwiO1xuICAgIHRoaXMuZ3VpZCA9IGBjYWxjaXRlLXNsaWRlci0ke2d1aWQoKX1gO1xuICAgIHRoaXMuZHJhZ1VwZGF0ZSA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLmRyYWdQcm9wKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy50cmFuc2xhdGUoZXZlbnQuY2xpZW50WCB8fCBldmVudC5wYWdlWCk7XG4gICAgICAgIGlmIChpc1JhbmdlKHRoaXMudmFsdWUpICYmIHRoaXMuZHJhZ1Byb3AgPT09IFwibWluTWF4VmFsdWVcIikge1xuICAgICAgICAgIGlmICh0aGlzLm1pblZhbHVlRHJhZ1JhbmdlICYmIHRoaXMubWF4VmFsdWVEcmFnUmFuZ2UgJiYgdGhpcy5taW5NYXhWYWx1ZVJhbmdlKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdNaW5WYWx1ZSA9IHZhbHVlIC0gdGhpcy5taW5WYWx1ZURyYWdSYW5nZTtcbiAgICAgICAgICAgIGNvbnN0IG5ld01heFZhbHVlID0gdmFsdWUgKyB0aGlzLm1heFZhbHVlRHJhZ1JhbmdlO1xuICAgICAgICAgICAgaWYgKG5ld01heFZhbHVlIDw9IHRoaXMubWF4ICYmXG4gICAgICAgICAgICAgIG5ld01pblZhbHVlID49IHRoaXMubWluICYmXG4gICAgICAgICAgICAgIG5ld01heFZhbHVlIC0gbmV3TWluVmFsdWUgPT09IHRoaXMubWluTWF4VmFsdWVSYW5nZSkge1xuICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZTogdGhpcy5jbGFtcChuZXdNaW5WYWx1ZSwgXCJtaW5WYWx1ZVwiKSxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZTogdGhpcy5jbGFtcChuZXdNYXhWYWx1ZSwgXCJtYXhWYWx1ZVwiKSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5taW5WYWx1ZURyYWdSYW5nZSA9IHZhbHVlIC0gdGhpcy5taW5WYWx1ZTtcbiAgICAgICAgICAgIHRoaXMubWF4VmFsdWVEcmFnUmFuZ2UgPSB0aGlzLm1heFZhbHVlIC0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm1pbk1heFZhbHVlUmFuZ2UgPSB0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRWYWx1ZSh7IFt0aGlzLmRyYWdQcm9wXTogdGhpcy5jbGFtcCh2YWx1ZSwgdGhpcy5kcmFnUHJvcCkgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucG9pbnRlclVwRHJhZ0VuZCA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZHJhZ0VuZChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmRyYWdFbmQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVtb3ZlRHJhZ0xpc3RlbmVycygpO1xuICAgICAgdGhpcy5mb2N1c0FjdGl2ZUhhbmRsZShldmVudC5jbGllbnRYKTtcbiAgICAgIGlmICh0aGlzLmxhc3REcmFnUHJvcFZhbHVlICE9IHRoaXNbdGhpcy5kcmFnUHJvcF0pIHtcbiAgICAgICAgdGhpcy5lbWl0Q2hhbmdlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmRyYWdQcm9wID0gbnVsbDtcbiAgICAgIHRoaXMubGFzdERyYWdQcm9wVmFsdWUgPSBudWxsO1xuICAgICAgdGhpcy5taW5WYWx1ZURyYWdSYW5nZSA9IG51bGw7XG4gICAgICB0aGlzLm1heFZhbHVlRHJhZ1JhbmdlID0gbnVsbDtcbiAgICAgIHRoaXMubWluTWF4VmFsdWVSYW5nZSA9IG51bGw7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHJlZmVyZW5jZSBvZiB0aGUgdHJhY2sgRWxlbWVudFxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICogQHBhcmFtIG5vZGVcbiAgICAgKi9cbiAgICB0aGlzLnN0b3JlVHJhY2tSZWYgPSAobm9kZSkgPT4ge1xuICAgICAgdGhpcy50cmFja0VsID0gbm9kZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBsb2NhbGl6ZWQgbGFiZWwgdmFsdWUgYmFzZWQgaWYgdGhlIGdyb3VwU2VwYXJhdG9yIHByb3AgaXMgcGFyc2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgdGhpcy5kZXRlcm1pbmVHcm91cFNlcGFyYXRvciA9ICh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgICAgdXNlR3JvdXBpbmc6IHRoaXMuZ3JvdXBTZXBhcmF0b3IsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubG9jYWxpemUodmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb3JtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZ3JvdXBTZXBhcmF0b3IgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0hpc3RvZ3JhbSA9IGZhbHNlO1xuICAgIHRoaXMuaGlzdG9ncmFtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGlzdG9ncmFtU3RvcHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYWJlbEhhbmRsZXMgPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsVGlja3MgPSBmYWxzZTtcbiAgICB0aGlzLm1heCA9IDEwMDtcbiAgICB0aGlzLm1heExhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWF4VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW4gPSAwO1xuICAgIHRoaXMubWluTGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW5WYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1pcnJvcmVkID0gZmFsc2U7XG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGFnZVN0ZXAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wcmVjaXNlID0gZmFsc2U7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuc25hcCA9IGZhbHNlO1xuICAgIHRoaXMuc3RlcCA9IDE7XG4gICAgdGhpcy50aWNrcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZhbHVlID0gMDtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMubWluTWF4VmFsdWVSYW5nZSA9IG51bGw7XG4gICAgdGhpcy5taW5WYWx1ZURyYWdSYW5nZSA9IG51bGw7XG4gICAgdGhpcy5tYXhWYWx1ZURyYWdSYW5nZSA9IG51bGw7XG4gICAgdGhpcy50aWNrVmFsdWVzID0gW107XG4gIH1cbiAgaGlzdG9ncmFtV2F0Y2hlcihuZXdIaXN0b2dyYW0pIHtcbiAgICB0aGlzLmhhc0hpc3RvZ3JhbSA9ICEhbmV3SGlzdG9ncmFtO1xuICB9XG4gIHRpY2tzV2F0Y2hlcigpIHtcbiAgICB0aGlzLnRpY2tWYWx1ZXMgPSB0aGlzLmdlbmVyYXRlVGlja1ZhbHVlcygpO1xuICB9XG4gIHZhbHVlSGFuZGxlcigpIHtcbiAgICB0aGlzLnNldE1pbk1heEZyb21WYWx1ZSgpO1xuICB9XG4gIG1pbk1heFZhbHVlSGFuZGxlcigpIHtcbiAgICB0aGlzLnNldFZhbHVlRnJvbU1pbk1heCgpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIHRoaXMuc2V0TWluTWF4RnJvbVZhbHVlKCk7XG4gICAgdGhpcy5zZXRWYWx1ZUZyb21NaW5NYXgoKTtcbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgY29ubmVjdEZvcm0odGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBkaXNjb25uZWN0Rm9ybSh0aGlzKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlRHJhZ0xpc3RlbmVycygpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgaWYgKCFpc1JhbmdlKHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5zbmFwID8gdGhpcy5nZXRDbG9zZXN0U3RlcCh0aGlzLnZhbHVlKSA6IHRoaXMuY2xhbXAodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMudGlja3NXYXRjaGVyKCk7XG4gICAgdGhpcy5oaXN0b2dyYW1XYXRjaGVyKHRoaXMuaGlzdG9ncmFtKTtcbiAgICBhZnRlckNvbm5lY3REZWZhdWx0VmFsdWVTZXQodGhpcywgdGhpcy52YWx1ZSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmxhYmVsSGFuZGxlcykge1xuICAgICAgdGhpcy5hZGp1c3RIb3N0T2JzY3VyZWRIYW5kbGVMYWJlbChcInZhbHVlXCIpO1xuICAgICAgaWYgKGlzUmFuZ2UodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5hZGp1c3RIb3N0T2JzY3VyZWRIYW5kbGVMYWJlbChcIm1pblZhbHVlXCIpO1xuICAgICAgICBpZiAoISh0aGlzLnByZWNpc2UgJiYgIXRoaXMuaGFzSGlzdG9ncmFtKSkge1xuICAgICAgICAgIHRoaXMuaHlwaGVuYXRlQ29sbGlkaW5nUmFuZ2VIYW5kbGVMYWJlbHMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmhpZGVPYnNjdXJlZEJvdW5kaW5nVGlja0xhYmVscygpO1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLmVsLmlkIHx8IHRoaXMuZ3VpZDtcbiAgICBjb25zdCBtYXhQcm9wID0gaXNSYW5nZSh0aGlzLnZhbHVlKSA/IFwibWF4VmFsdWVcIiA6IFwidmFsdWVcIjtcbiAgICBjb25zdCB2YWx1ZSA9IGlzUmFuZ2UodGhpcy52YWx1ZSkgPyB0aGlzLm1heFZhbHVlIDogdGhpcy52YWx1ZTtcbiAgICBjb25zdCBkaXNwbGF5ZWRWYWx1ZSA9IHRoaXMuZGV0ZXJtaW5lR3JvdXBTZXBhcmF0b3IodmFsdWUpO1xuICAgIGNvbnN0IGRpc3BsYXllZE1pblZhbHVlID0gdGhpcy5kZXRlcm1pbmVHcm91cFNlcGFyYXRvcih0aGlzLm1pblZhbHVlKTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLm1pblZhbHVlIHx8IHRoaXMubWluO1xuICAgIGNvbnN0IHVzZU1pblZhbHVlID0gdGhpcy5zaG91bGRVc2VNaW5WYWx1ZSgpO1xuICAgIGNvbnN0IG1pbkludGVydmFsID0gdGhpcy5nZXRVbml0SW50ZXJ2YWwodXNlTWluVmFsdWUgPyB0aGlzLm1pblZhbHVlIDogbWluKSAqIDEwMDtcbiAgICBjb25zdCBtYXhJbnRlcnZhbCA9IHRoaXMuZ2V0VW5pdEludGVydmFsKHZhbHVlKSAqIDEwMDtcbiAgICBjb25zdCBtaXJyb3IgPSB0aGlzLnNob3VsZE1pcnJvcigpO1xuICAgIGNvbnN0IGxlZnRUaHVtYk9mZnNldCA9IGAke21pcnJvciA/IDEwMCAtIG1pbkludGVydmFsIDogbWluSW50ZXJ2YWx9JWA7XG4gICAgY29uc3QgcmlnaHRUaHVtYk9mZnNldCA9IGAke21pcnJvciA/IG1heEludGVydmFsIDogMTAwIC0gbWF4SW50ZXJ2YWx9JWA7XG4gICAgY29uc3QgdmFsdWVJc1JhbmdlID0gaXNSYW5nZSh0aGlzLnZhbHVlKTtcbiAgICBjb25zdCBoYW5kbGVMYWJlbE1pblZhbHVlQ2xhc3NlcyA9IGAke0NTUy5oYW5kbGVMYWJlbH0gJHtDU1MuaGFuZGxlTGFiZWxNaW5WYWx1ZX1gO1xuICAgIGNvbnN0IGhhbmRsZUxhYmVsVmFsdWVDbGFzc2VzID0gYCR7Q1NTLmhhbmRsZUxhYmVsfSAke0NTUy5oYW5kbGVMYWJlbFZhbHVlfWA7XG4gICAgY29uc3QgaGFuZGxlID0gKGgoXCJkaXZcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogdGhpcy5kaXNhYmxlZCwgXCJhcmlhLWxhYmVsXCI6IHZhbHVlSXNSYW5nZSA/IHRoaXMubWF4TGFiZWwgOiB0aGlzLm1pbkxhYmVsLCBcImFyaWEtb3JpZW50YXRpb25cIjogXCJob3Jpem9udGFsXCIsIFwiYXJpYS12YWx1ZW1heFwiOiB0aGlzLm1heCwgXCJhcmlhLXZhbHVlbWluXCI6IHRoaXMubWluLCBcImFyaWEtdmFsdWVub3dcIjogdmFsdWUsIGNsYXNzOiB7XG4gICAgICAgIHRodW1iOiB0cnVlLFxuICAgICAgICBcInRodW1iLS12YWx1ZVwiOiB0cnVlLFxuICAgICAgICBcInRodW1iLS1hY3RpdmVcIjogdGhpcy5sYXN0RHJhZ1Byb3AgIT09IFwibWluTWF4VmFsdWVcIiAmJiB0aGlzLmRyYWdQcm9wID09PSBtYXhQcm9wLFxuICAgICAgfSwgb25CbHVyOiAoKSA9PiAodGhpcy5hY3RpdmVQcm9wID0gbnVsbCksIG9uRm9jdXM6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBtYXhQcm9wKSwgb25Qb2ludGVyRG93bjogKGV2ZW50KSA9PiB0aGlzLnBvaW50ZXJEb3duRHJhZ1N0YXJ0KGV2ZW50LCBtYXhQcm9wKSwgcm9sZTogXCJzbGlkZXJcIiwgc3R5bGU6IHsgcmlnaHQ6IHJpZ2h0VGh1bWJPZmZzZXQgfSwgdGFiSW5kZXg6IDAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLm1heEhhbmRsZSA9IGVsKSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaGFuZGxlXCIgfSkpKTtcbiAgICBjb25zdCBsYWJlbGVkSGFuZGxlID0gKGgoXCJkaXZcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogdGhpcy5kaXNhYmxlZCwgXCJhcmlhLWxhYmVsXCI6IHZhbHVlSXNSYW5nZSA/IHRoaXMubWF4TGFiZWwgOiB0aGlzLm1pbkxhYmVsLCBcImFyaWEtb3JpZW50YXRpb25cIjogXCJob3Jpem9udGFsXCIsIFwiYXJpYS12YWx1ZW1heFwiOiB0aGlzLm1heCwgXCJhcmlhLXZhbHVlbWluXCI6IHRoaXMubWluLCBcImFyaWEtdmFsdWVub3dcIjogdmFsdWUsIGNsYXNzOiB7XG4gICAgICAgIHRodW1iOiB0cnVlLFxuICAgICAgICBcInRodW1iLS12YWx1ZVwiOiB0cnVlLFxuICAgICAgICBcInRodW1iLS1hY3RpdmVcIjogdGhpcy5sYXN0RHJhZ1Byb3AgIT09IFwibWluTWF4VmFsdWVcIiAmJiB0aGlzLmRyYWdQcm9wID09PSBtYXhQcm9wLFxuICAgICAgfSwgb25CbHVyOiAoKSA9PiAodGhpcy5hY3RpdmVQcm9wID0gbnVsbCksIG9uRm9jdXM6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBtYXhQcm9wKSwgb25Qb2ludGVyRG93bjogKGV2ZW50KSA9PiB0aGlzLnBvaW50ZXJEb3duRHJhZ1N0YXJ0KGV2ZW50LCBtYXhQcm9wKSwgcm9sZTogXCJzbGlkZXJcIiwgc3R5bGU6IHsgcmlnaHQ6IHJpZ2h0VGh1bWJPZmZzZXQgfSwgdGFiSW5kZXg6IDAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLm1heEhhbmRsZSA9IGVsKSB9LCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBoYW5kbGVMYWJlbFZhbHVlQ2xhc3NlcyB9LCBkaXNwbGF5ZWRWYWx1ZSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IGAke2hhbmRsZUxhYmVsVmFsdWVDbGFzc2VzfSBzdGF0aWNgIH0sIGRpc3BsYXllZFZhbHVlKSwgaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogYCR7aGFuZGxlTGFiZWxWYWx1ZUNsYXNzZXN9IHRyYW5zZm9ybWVkYCB9LCBkaXNwbGF5ZWRWYWx1ZSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGVcIiB9KSkpO1xuICAgIGNvbnN0IGhpc3RvZ3JhbUxhYmVsZWRIYW5kbGUgPSAoaChcImRpdlwiLCB7IFwiYXJpYS1kaXNhYmxlZFwiOiB0aGlzLmRpc2FibGVkLCBcImFyaWEtbGFiZWxcIjogdmFsdWVJc1JhbmdlID8gdGhpcy5tYXhMYWJlbCA6IHRoaXMubWluTGFiZWwsIFwiYXJpYS1vcmllbnRhdGlvblwiOiBcImhvcml6b250YWxcIiwgXCJhcmlhLXZhbHVlbWF4XCI6IHRoaXMubWF4LCBcImFyaWEtdmFsdWVtaW5cIjogdGhpcy5taW4sIFwiYXJpYS12YWx1ZW5vd1wiOiB2YWx1ZSwgY2xhc3M6IHtcbiAgICAgICAgdGh1bWI6IHRydWUsXG4gICAgICAgIFwidGh1bWItLXZhbHVlXCI6IHRydWUsXG4gICAgICAgIFwidGh1bWItLWFjdGl2ZVwiOiB0aGlzLmxhc3REcmFnUHJvcCAhPT0gXCJtaW5NYXhWYWx1ZVwiICYmIHRoaXMuZHJhZ1Byb3AgPT09IG1heFByb3AsXG4gICAgICB9LCBvbkJsdXI6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBudWxsKSwgb25Gb2N1czogKCkgPT4gKHRoaXMuYWN0aXZlUHJvcCA9IG1heFByb3ApLCBvblBvaW50ZXJEb3duOiAoZXZlbnQpID0+IHRoaXMucG9pbnRlckRvd25EcmFnU3RhcnQoZXZlbnQsIG1heFByb3ApLCByb2xlOiBcInNsaWRlclwiLCBzdHlsZTogeyByaWdodDogcmlnaHRUaHVtYk9mZnNldCB9LCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMubWF4SGFuZGxlID0gZWwpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGVcIiB9KSwgaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogaGFuZGxlTGFiZWxWYWx1ZUNsYXNzZXMgfSwgZGlzcGxheWVkVmFsdWUpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBgJHtoYW5kbGVMYWJlbFZhbHVlQ2xhc3Nlc30gc3RhdGljYCB9LCBkaXNwbGF5ZWRWYWx1ZSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IGAke2hhbmRsZUxhYmVsVmFsdWVDbGFzc2VzfSB0cmFuc2Zvcm1lZGAgfSwgZGlzcGxheWVkVmFsdWUpKSk7XG4gICAgY29uc3QgcHJlY2lzZUhhbmRsZSA9IChoKFwiZGl2XCIsIHsgXCJhcmlhLWRpc2FibGVkXCI6IHRoaXMuZGlzYWJsZWQsIFwiYXJpYS1sYWJlbFwiOiB2YWx1ZUlzUmFuZ2UgPyB0aGlzLm1heExhYmVsIDogdGhpcy5taW5MYWJlbCwgXCJhcmlhLW9yaWVudGF0aW9uXCI6IFwiaG9yaXpvbnRhbFwiLCBcImFyaWEtdmFsdWVtYXhcIjogdGhpcy5tYXgsIFwiYXJpYS12YWx1ZW1pblwiOiB0aGlzLm1pbiwgXCJhcmlhLXZhbHVlbm93XCI6IHZhbHVlLCBjbGFzczoge1xuICAgICAgICB0aHVtYjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tdmFsdWVcIjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tYWN0aXZlXCI6IHRoaXMubGFzdERyYWdQcm9wICE9PSBcIm1pbk1heFZhbHVlXCIgJiYgdGhpcy5kcmFnUHJvcCA9PT0gbWF4UHJvcCxcbiAgICAgICAgXCJ0aHVtYi0tcHJlY2lzZVwiOiB0cnVlLFxuICAgICAgfSwgb25CbHVyOiAoKSA9PiAodGhpcy5hY3RpdmVQcm9wID0gbnVsbCksIG9uRm9jdXM6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBtYXhQcm9wKSwgb25Qb2ludGVyRG93bjogKGV2ZW50KSA9PiB0aGlzLnBvaW50ZXJEb3duRHJhZ1N0YXJ0KGV2ZW50LCBtYXhQcm9wKSwgcm9sZTogXCJzbGlkZXJcIiwgc3R5bGU6IHsgcmlnaHQ6IHJpZ2h0VGh1bWJPZmZzZXQgfSwgdGFiSW5kZXg6IDAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLm1heEhhbmRsZSA9IGVsKSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaGFuZGxlXCIgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGUtZXh0ZW5zaW9uXCIgfSkpKTtcbiAgICBjb25zdCBoaXN0b2dyYW1QcmVjaXNlSGFuZGxlID0gKGgoXCJkaXZcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogdGhpcy5kaXNhYmxlZCwgXCJhcmlhLWxhYmVsXCI6IHZhbHVlSXNSYW5nZSA/IHRoaXMubWF4TGFiZWwgOiB0aGlzLm1pbkxhYmVsLCBcImFyaWEtb3JpZW50YXRpb25cIjogXCJob3Jpem9udGFsXCIsIFwiYXJpYS12YWx1ZW1heFwiOiB0aGlzLm1heCwgXCJhcmlhLXZhbHVlbWluXCI6IHRoaXMubWluLCBcImFyaWEtdmFsdWVub3dcIjogdmFsdWUsIGNsYXNzOiB7XG4gICAgICAgIHRodW1iOiB0cnVlLFxuICAgICAgICBcInRodW1iLS12YWx1ZVwiOiB0cnVlLFxuICAgICAgICBcInRodW1iLS1hY3RpdmVcIjogdGhpcy5sYXN0RHJhZ1Byb3AgIT09IFwibWluTWF4VmFsdWVcIiAmJiB0aGlzLmRyYWdQcm9wID09PSBtYXhQcm9wLFxuICAgICAgICBcInRodW1iLS1wcmVjaXNlXCI6IHRydWUsXG4gICAgICB9LCBvbkJsdXI6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBudWxsKSwgb25Gb2N1czogKCkgPT4gKHRoaXMuYWN0aXZlUHJvcCA9IG1heFByb3ApLCBvblBvaW50ZXJEb3duOiAoZXZlbnQpID0+IHRoaXMucG9pbnRlckRvd25EcmFnU3RhcnQoZXZlbnQsIG1heFByb3ApLCByb2xlOiBcInNsaWRlclwiLCBzdHlsZTogeyByaWdodDogcmlnaHRUaHVtYk9mZnNldCB9LCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMubWF4SGFuZGxlID0gZWwpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGUtZXh0ZW5zaW9uXCIgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGVcIiB9KSkpO1xuICAgIGNvbnN0IGxhYmVsZWRQcmVjaXNlSGFuZGxlID0gKGgoXCJkaXZcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogdGhpcy5kaXNhYmxlZCwgXCJhcmlhLWxhYmVsXCI6IHZhbHVlSXNSYW5nZSA/IHRoaXMubWF4TGFiZWwgOiB0aGlzLm1pbkxhYmVsLCBcImFyaWEtb3JpZW50YXRpb25cIjogXCJob3Jpem9udGFsXCIsIFwiYXJpYS12YWx1ZW1heFwiOiB0aGlzLm1heCwgXCJhcmlhLXZhbHVlbWluXCI6IHRoaXMubWluLCBcImFyaWEtdmFsdWVub3dcIjogdmFsdWUsIGNsYXNzOiB7XG4gICAgICAgIHRodW1iOiB0cnVlLFxuICAgICAgICBcInRodW1iLS12YWx1ZVwiOiB0cnVlLFxuICAgICAgICBcInRodW1iLS1hY3RpdmVcIjogdGhpcy5sYXN0RHJhZ1Byb3AgIT09IFwibWluTWF4VmFsdWVcIiAmJiB0aGlzLmRyYWdQcm9wID09PSBtYXhQcm9wLFxuICAgICAgICBcInRodW1iLS1wcmVjaXNlXCI6IHRydWUsXG4gICAgICB9LCBvbkJsdXI6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBudWxsKSwgb25Gb2N1czogKCkgPT4gKHRoaXMuYWN0aXZlUHJvcCA9IG1heFByb3ApLCBvblBvaW50ZXJEb3duOiAoZXZlbnQpID0+IHRoaXMucG9pbnRlckRvd25EcmFnU3RhcnQoZXZlbnQsIG1heFByb3ApLCByb2xlOiBcInNsaWRlclwiLCBzdHlsZTogeyByaWdodDogcmlnaHRUaHVtYk9mZnNldCB9LCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMubWF4SGFuZGxlID0gZWwpIH0sIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IGhhbmRsZUxhYmVsVmFsdWVDbGFzc2VzIH0sIGRpc3BsYXllZFZhbHVlKSwgaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogYCR7aGFuZGxlTGFiZWxWYWx1ZUNsYXNzZXN9IHN0YXRpY2AgfSwgZGlzcGxheWVkVmFsdWUpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBgJHtoYW5kbGVMYWJlbFZhbHVlQ2xhc3Nlc30gdHJhbnNmb3JtZWRgIH0sIGRpc3BsYXllZFZhbHVlKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImhhbmRsZVwiIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaGFuZGxlLWV4dGVuc2lvblwiIH0pKSk7XG4gICAgY29uc3QgaGlzdG9ncmFtTGFiZWxlZFByZWNpc2VIYW5kbGUgPSAoaChcImRpdlwiLCB7IFwiYXJpYS1kaXNhYmxlZFwiOiB0aGlzLmRpc2FibGVkLCBcImFyaWEtbGFiZWxcIjogdmFsdWVJc1JhbmdlID8gdGhpcy5tYXhMYWJlbCA6IHRoaXMubWluTGFiZWwsIFwiYXJpYS1vcmllbnRhdGlvblwiOiBcImhvcml6b250YWxcIiwgXCJhcmlhLXZhbHVlbWF4XCI6IHRoaXMubWF4LCBcImFyaWEtdmFsdWVtaW5cIjogdGhpcy5taW4sIFwiYXJpYS12YWx1ZW5vd1wiOiB2YWx1ZSwgY2xhc3M6IHtcbiAgICAgICAgdGh1bWI6IHRydWUsXG4gICAgICAgIFwidGh1bWItLXZhbHVlXCI6IHRydWUsXG4gICAgICAgIFwidGh1bWItLWFjdGl2ZVwiOiB0aGlzLmxhc3REcmFnUHJvcCAhPT0gXCJtaW5NYXhWYWx1ZVwiICYmIHRoaXMuZHJhZ1Byb3AgPT09IG1heFByb3AsXG4gICAgICAgIFwidGh1bWItLXByZWNpc2VcIjogdHJ1ZSxcbiAgICAgIH0sIG9uQmx1cjogKCkgPT4gKHRoaXMuYWN0aXZlUHJvcCA9IG51bGwpLCBvbkZvY3VzOiAoKSA9PiAodGhpcy5hY3RpdmVQcm9wID0gbWF4UHJvcCksIG9uUG9pbnRlckRvd246IChldmVudCkgPT4gdGhpcy5wb2ludGVyRG93bkRyYWdTdGFydChldmVudCwgbWF4UHJvcCksIHJvbGU6IFwic2xpZGVyXCIsIHN0eWxlOiB7IHJpZ2h0OiByaWdodFRodW1iT2Zmc2V0IH0sIHRhYkluZGV4OiAwLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5tYXhIYW5kbGUgPSBlbCkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImhhbmRsZS1leHRlbnNpb25cIiB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImhhbmRsZVwiIH0pLCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBoYW5kbGVMYWJlbFZhbHVlQ2xhc3NlcyB9LCBkaXNwbGF5ZWRWYWx1ZSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IGAke2hhbmRsZUxhYmVsVmFsdWVDbGFzc2VzfSBzdGF0aWNgIH0sIGRpc3BsYXllZFZhbHVlKSwgaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogYCR7aGFuZGxlTGFiZWxWYWx1ZUNsYXNzZXN9IHRyYW5zZm9ybWVkYCB9LCBkaXNwbGF5ZWRWYWx1ZSkpKTtcbiAgICBjb25zdCBtaW5IYW5kbGUgPSAoaChcImRpdlwiLCB7IFwiYXJpYS1kaXNhYmxlZFwiOiB0aGlzLmRpc2FibGVkLCBcImFyaWEtbGFiZWxcIjogdGhpcy5taW5MYWJlbCwgXCJhcmlhLW9yaWVudGF0aW9uXCI6IFwiaG9yaXpvbnRhbFwiLCBcImFyaWEtdmFsdWVtYXhcIjogdGhpcy5tYXgsIFwiYXJpYS12YWx1ZW1pblwiOiB0aGlzLm1pbiwgXCJhcmlhLXZhbHVlbm93XCI6IHRoaXMubWluVmFsdWUsIGNsYXNzOiB7XG4gICAgICAgIHRodW1iOiB0cnVlLFxuICAgICAgICBcInRodW1iLS1taW5WYWx1ZVwiOiB0cnVlLFxuICAgICAgICBcInRodW1iLS1hY3RpdmVcIjogdGhpcy5kcmFnUHJvcCA9PT0gXCJtaW5WYWx1ZVwiLFxuICAgICAgfSwgb25CbHVyOiAoKSA9PiAodGhpcy5hY3RpdmVQcm9wID0gbnVsbCksIG9uRm9jdXM6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBcIm1pblZhbHVlXCIpLCBvblBvaW50ZXJEb3duOiAoZXZlbnQpID0+IHRoaXMucG9pbnRlckRvd25EcmFnU3RhcnQoZXZlbnQsIFwibWluVmFsdWVcIiksIHJvbGU6IFwic2xpZGVyXCIsIHN0eWxlOiB7IGxlZnQ6IGxlZnRUaHVtYk9mZnNldCB9LCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMubWluSGFuZGxlID0gZWwpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGVcIiB9KSkpO1xuICAgIGNvbnN0IG1pbkxhYmVsZWRIYW5kbGUgPSAoaChcImRpdlwiLCB7IFwiYXJpYS1kaXNhYmxlZFwiOiB0aGlzLmRpc2FibGVkLCBcImFyaWEtbGFiZWxcIjogdGhpcy5taW5MYWJlbCwgXCJhcmlhLW9yaWVudGF0aW9uXCI6IFwiaG9yaXpvbnRhbFwiLCBcImFyaWEtdmFsdWVtYXhcIjogdGhpcy5tYXgsIFwiYXJpYS12YWx1ZW1pblwiOiB0aGlzLm1pbiwgXCJhcmlhLXZhbHVlbm93XCI6IHRoaXMubWluVmFsdWUsIGNsYXNzOiB7XG4gICAgICAgIHRodW1iOiB0cnVlLFxuICAgICAgICBcInRodW1iLS1taW5WYWx1ZVwiOiB0cnVlLFxuICAgICAgICBcInRodW1iLS1hY3RpdmVcIjogdGhpcy5kcmFnUHJvcCA9PT0gXCJtaW5WYWx1ZVwiLFxuICAgICAgfSwgb25CbHVyOiAoKSA9PiAodGhpcy5hY3RpdmVQcm9wID0gbnVsbCksIG9uRm9jdXM6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBcIm1pblZhbHVlXCIpLCBvblBvaW50ZXJEb3duOiAoZXZlbnQpID0+IHRoaXMucG9pbnRlckRvd25EcmFnU3RhcnQoZXZlbnQsIFwibWluVmFsdWVcIiksIHJvbGU6IFwic2xpZGVyXCIsIHN0eWxlOiB7IGxlZnQ6IGxlZnRUaHVtYk9mZnNldCB9LCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMubWluSGFuZGxlID0gZWwpIH0sIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IGhhbmRsZUxhYmVsTWluVmFsdWVDbGFzc2VzIH0sIGRpc3BsYXllZE1pblZhbHVlKSwgaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogYCR7aGFuZGxlTGFiZWxNaW5WYWx1ZUNsYXNzZXN9IHN0YXRpY2AgfSwgZGlzcGxheWVkTWluVmFsdWUpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBgJHtoYW5kbGVMYWJlbE1pblZhbHVlQ2xhc3Nlc30gdHJhbnNmb3JtZWRgIH0sIGRpc3BsYXllZE1pblZhbHVlKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImhhbmRsZVwiIH0pKSk7XG4gICAgY29uc3QgbWluSGlzdG9ncmFtTGFiZWxlZEhhbmRsZSA9IChoKFwiZGl2XCIsIHsgXCJhcmlhLWRpc2FibGVkXCI6IHRoaXMuZGlzYWJsZWQsIFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1pbkxhYmVsLCBcImFyaWEtb3JpZW50YXRpb25cIjogXCJob3Jpem9udGFsXCIsIFwiYXJpYS12YWx1ZW1heFwiOiB0aGlzLm1heCwgXCJhcmlhLXZhbHVlbWluXCI6IHRoaXMubWluLCBcImFyaWEtdmFsdWVub3dcIjogdGhpcy5taW5WYWx1ZSwgY2xhc3M6IHtcbiAgICAgICAgdGh1bWI6IHRydWUsXG4gICAgICAgIFwidGh1bWItLW1pblZhbHVlXCI6IHRydWUsXG4gICAgICAgIFwidGh1bWItLWFjdGl2ZVwiOiB0aGlzLmRyYWdQcm9wID09PSBcIm1pblZhbHVlXCIsXG4gICAgICB9LCBvbkJsdXI6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBudWxsKSwgb25Gb2N1czogKCkgPT4gKHRoaXMuYWN0aXZlUHJvcCA9IFwibWluVmFsdWVcIiksIG9uUG9pbnRlckRvd246IChldmVudCkgPT4gdGhpcy5wb2ludGVyRG93bkRyYWdTdGFydChldmVudCwgXCJtaW5WYWx1ZVwiKSwgcm9sZTogXCJzbGlkZXJcIiwgc3R5bGU6IHsgbGVmdDogbGVmdFRodW1iT2Zmc2V0IH0sIHRhYkluZGV4OiAwLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5taW5IYW5kbGUgPSBlbCkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImhhbmRsZVwiIH0pLCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBoYW5kbGVMYWJlbE1pblZhbHVlQ2xhc3NlcyB9LCBkaXNwbGF5ZWRNaW5WYWx1ZSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IGAke2hhbmRsZUxhYmVsTWluVmFsdWVDbGFzc2VzfSBzdGF0aWNgIH0sIGRpc3BsYXllZE1pblZhbHVlKSwgaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogYCR7aGFuZGxlTGFiZWxNaW5WYWx1ZUNsYXNzZXN9IHRyYW5zZm9ybWVkYCB9LCBkaXNwbGF5ZWRNaW5WYWx1ZSkpKTtcbiAgICBjb25zdCBtaW5QcmVjaXNlSGFuZGxlID0gKGgoXCJkaXZcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogdGhpcy5kaXNhYmxlZCwgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWluTGFiZWwsIFwiYXJpYS1vcmllbnRhdGlvblwiOiBcImhvcml6b250YWxcIiwgXCJhcmlhLXZhbHVlbWF4XCI6IHRoaXMubWF4LCBcImFyaWEtdmFsdWVtaW5cIjogdGhpcy5taW4sIFwiYXJpYS12YWx1ZW5vd1wiOiB0aGlzLm1pblZhbHVlLCBjbGFzczoge1xuICAgICAgICB0aHVtYjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tbWluVmFsdWVcIjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tYWN0aXZlXCI6IHRoaXMuZHJhZ1Byb3AgPT09IFwibWluVmFsdWVcIixcbiAgICAgICAgXCJ0aHVtYi0tcHJlY2lzZVwiOiB0cnVlLFxuICAgICAgfSwgb25CbHVyOiAoKSA9PiAodGhpcy5hY3RpdmVQcm9wID0gbnVsbCksIG9uRm9jdXM6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBcIm1pblZhbHVlXCIpLCBvblBvaW50ZXJEb3duOiAoZXZlbnQpID0+IHRoaXMucG9pbnRlckRvd25EcmFnU3RhcnQoZXZlbnQsIFwibWluVmFsdWVcIiksIHJvbGU6IFwic2xpZGVyXCIsIHN0eWxlOiB7IGxlZnQ6IGxlZnRUaHVtYk9mZnNldCB9LCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMubWluSGFuZGxlID0gZWwpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGUtZXh0ZW5zaW9uXCIgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGVcIiB9KSkpO1xuICAgIGNvbnN0IG1pbkxhYmVsZWRQcmVjaXNlSGFuZGxlID0gKGgoXCJkaXZcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogdGhpcy5kaXNhYmxlZCwgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWluTGFiZWwsIFwiYXJpYS1vcmllbnRhdGlvblwiOiBcImhvcml6b250YWxcIiwgXCJhcmlhLXZhbHVlbWF4XCI6IHRoaXMubWF4LCBcImFyaWEtdmFsdWVtaW5cIjogdGhpcy5taW4sIFwiYXJpYS12YWx1ZW5vd1wiOiB0aGlzLm1pblZhbHVlLCBjbGFzczoge1xuICAgICAgICB0aHVtYjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tbWluVmFsdWVcIjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tYWN0aXZlXCI6IHRoaXMuZHJhZ1Byb3AgPT09IFwibWluVmFsdWVcIixcbiAgICAgICAgXCJ0aHVtYi0tcHJlY2lzZVwiOiB0cnVlLFxuICAgICAgfSwgb25CbHVyOiAoKSA9PiAodGhpcy5hY3RpdmVQcm9wID0gbnVsbCksIG9uRm9jdXM6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBcIm1pblZhbHVlXCIpLCBvblBvaW50ZXJEb3duOiAoZXZlbnQpID0+IHRoaXMucG9pbnRlckRvd25EcmFnU3RhcnQoZXZlbnQsIFwibWluVmFsdWVcIiksIHJvbGU6IFwic2xpZGVyXCIsIHN0eWxlOiB7IGxlZnQ6IGxlZnRUaHVtYk9mZnNldCB9LCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMubWluSGFuZGxlID0gZWwpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGUtZXh0ZW5zaW9uXCIgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGVcIiB9KSwgaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogaGFuZGxlTGFiZWxNaW5WYWx1ZUNsYXNzZXMgfSwgZGlzcGxheWVkTWluVmFsdWUpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBgJHtoYW5kbGVMYWJlbE1pblZhbHVlQ2xhc3Nlc30gc3RhdGljYCB9LCBkaXNwbGF5ZWRNaW5WYWx1ZSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IGAke2hhbmRsZUxhYmVsTWluVmFsdWVDbGFzc2VzfSB0cmFuc2Zvcm1lZGAgfSwgZGlzcGxheWVkTWluVmFsdWUpKSk7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgaWQ6IGlkLCBvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCB9LCBoKFwiZGl2XCIsIHsgXCJhcmlhLWxhYmVsXCI6IGdldExhYmVsVGV4dCh0aGlzKSwgY2xhc3M6IHtcbiAgICAgICAgW1wiY29udGFpbmVyXCJdOiB0cnVlLFxuICAgICAgICBbXCJjb250YWluZXItLXJhbmdlXCJdOiB2YWx1ZUlzUmFuZ2UsXG4gICAgICAgIFtgc2NhbGUtLSR7dGhpcy5zY2FsZX1gXTogdHJ1ZSxcbiAgICAgIH0gfSwgdGhpcy5yZW5kZXJHcmFwaCgpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidHJhY2tcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IHRoaXMuc3RvcmVUcmFja1JlZiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidHJhY2tfX3JhbmdlXCIsIG9uUG9pbnRlckRvd246IChldmVudCkgPT4gdGhpcy5wb2ludGVyRG93bkRyYWdTdGFydChldmVudCwgXCJtaW5NYXhWYWx1ZVwiKSwgc3R5bGU6IHtcbiAgICAgICAgbGVmdDogYCR7bWlycm9yID8gMTAwIC0gbWF4SW50ZXJ2YWwgOiBtaW5JbnRlcnZhbH0lYCxcbiAgICAgICAgcmlnaHQ6IGAke21pcnJvciA/IG1pbkludGVydmFsIDogMTAwIC0gbWF4SW50ZXJ2YWx9JWAsXG4gICAgICB9IH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidGlja3NcIiB9LCB0aGlzLnRpY2tWYWx1ZXMubWFwKCh0aWNrKSA9PiB7XG4gICAgICBjb25zdCB0aWNrT2Zmc2V0ID0gYCR7dGhpcy5nZXRVbml0SW50ZXJ2YWwodGljaykgKiAxMDB9JWA7XG4gICAgICBsZXQgYWN0aXZlVGlja3MgPSB0aWNrID49IG1pbiAmJiB0aWNrIDw9IHZhbHVlO1xuICAgICAgaWYgKHVzZU1pblZhbHVlKSB7XG4gICAgICAgIGFjdGl2ZVRpY2tzID0gdGljayA+PSB0aGlzLm1pblZhbHVlICYmIHRpY2sgPD0gdGhpcy5tYXhWYWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoaChcInNwYW5cIiwgeyBjbGFzczoge1xuICAgICAgICAgIHRpY2s6IHRydWUsXG4gICAgICAgICAgXCJ0aWNrLS1hY3RpdmVcIjogYWN0aXZlVGlja3MsXG4gICAgICAgIH0sIHN0eWxlOiB7XG4gICAgICAgICAgbGVmdDogbWlycm9yID8gXCJcIiA6IHRpY2tPZmZzZXQsXG4gICAgICAgICAgcmlnaHQ6IG1pcnJvciA/IHRpY2tPZmZzZXQgOiBcIlwiLFxuICAgICAgICB9IH0sIHRoaXMucmVuZGVyVGlja0xhYmVsKHRpY2spKSk7XG4gICAgfSkpKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInRodW1iLWNvbnRhaW5lclwiIH0sICF0aGlzLnByZWNpc2UgJiYgIXRoaXMubGFiZWxIYW5kbGVzICYmIHZhbHVlSXNSYW5nZSAmJiBtaW5IYW5kbGUsICF0aGlzLmhhc0hpc3RvZ3JhbSAmJlxuICAgICAgIXRoaXMucHJlY2lzZSAmJlxuICAgICAgdGhpcy5sYWJlbEhhbmRsZXMgJiZcbiAgICAgIHZhbHVlSXNSYW5nZSAmJlxuICAgICAgbWluTGFiZWxlZEhhbmRsZSwgdGhpcy5wcmVjaXNlICYmICF0aGlzLmxhYmVsSGFuZGxlcyAmJiB2YWx1ZUlzUmFuZ2UgJiYgbWluUHJlY2lzZUhhbmRsZSwgdGhpcy5wcmVjaXNlICYmIHRoaXMubGFiZWxIYW5kbGVzICYmIHZhbHVlSXNSYW5nZSAmJiBtaW5MYWJlbGVkUHJlY2lzZUhhbmRsZSwgdGhpcy5oYXNIaXN0b2dyYW0gJiZcbiAgICAgICF0aGlzLnByZWNpc2UgJiZcbiAgICAgIHRoaXMubGFiZWxIYW5kbGVzICYmXG4gICAgICB2YWx1ZUlzUmFuZ2UgJiZcbiAgICAgIG1pbkhpc3RvZ3JhbUxhYmVsZWRIYW5kbGUsICF0aGlzLnByZWNpc2UgJiYgIXRoaXMubGFiZWxIYW5kbGVzICYmIGhhbmRsZSwgIXRoaXMuaGFzSGlzdG9ncmFtICYmICF0aGlzLnByZWNpc2UgJiYgdGhpcy5sYWJlbEhhbmRsZXMgJiYgbGFiZWxlZEhhbmRsZSwgIXRoaXMuaGFzSGlzdG9ncmFtICYmIHRoaXMucHJlY2lzZSAmJiAhdGhpcy5sYWJlbEhhbmRsZXMgJiYgcHJlY2lzZUhhbmRsZSwgdGhpcy5oYXNIaXN0b2dyYW0gJiYgdGhpcy5wcmVjaXNlICYmICF0aGlzLmxhYmVsSGFuZGxlcyAmJiBoaXN0b2dyYW1QcmVjaXNlSGFuZGxlLCAhdGhpcy5oYXNIaXN0b2dyYW0gJiYgdGhpcy5wcmVjaXNlICYmIHRoaXMubGFiZWxIYW5kbGVzICYmIGxhYmVsZWRQcmVjaXNlSGFuZGxlLCB0aGlzLmhhc0hpc3RvZ3JhbSAmJiAhdGhpcy5wcmVjaXNlICYmIHRoaXMubGFiZWxIYW5kbGVzICYmIGhpc3RvZ3JhbUxhYmVsZWRIYW5kbGUsIHRoaXMuaGFzSGlzdG9ncmFtICYmXG4gICAgICB0aGlzLnByZWNpc2UgJiZcbiAgICAgIHRoaXMubGFiZWxIYW5kbGVzICYmXG4gICAgICBoaXN0b2dyYW1MYWJlbGVkUHJlY2lzZUhhbmRsZSwgaChIaWRkZW5Gb3JtSW5wdXRTbG90LCB7IGNvbXBvbmVudDogdGhpcyB9KSkpKSk7XG4gIH1cbiAgcmVuZGVyR3JhcGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGlzdG9ncmFtID8gKGgoXCJjYWxjaXRlLWdyYXBoXCIsIHsgY2xhc3M6IFwiZ3JhcGhcIiwgY29sb3JTdG9wczogdGhpcy5oaXN0b2dyYW1TdG9wcywgZGF0YTogdGhpcy5oaXN0b2dyYW0sIGhpZ2hsaWdodE1heDogaXNSYW5nZSh0aGlzLnZhbHVlKSA/IHRoaXMubWF4VmFsdWUgOiB0aGlzLnZhbHVlLCBoaWdobGlnaHRNaW46IGlzUmFuZ2UodGhpcy52YWx1ZSkgPyB0aGlzLm1pblZhbHVlIDogdGhpcy5taW4sIG1heDogdGhpcy5tYXgsIG1pbjogdGhpcy5taW4gfSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXJUaWNrTGFiZWwodGljaykge1xuICAgIGNvbnN0IHZhbHVlSXNSYW5nZSA9IGlzUmFuZ2UodGhpcy52YWx1ZSk7XG4gICAgY29uc3QgaXNNaW5UaWNrTGFiZWwgPSB0aWNrID09PSB0aGlzLm1pbjtcbiAgICBjb25zdCBpc01heFRpY2tMYWJlbCA9IHRpY2sgPT09IHRoaXMubWF4O1xuICAgIGNvbnN0IGRpc3BsYXllZFRpY2tWYWx1ZSA9IHRoaXMuZGV0ZXJtaW5lR3JvdXBTZXBhcmF0b3IodGljayk7XG4gICAgY29uc3QgdGlja0xhYmVsID0gKGgoXCJzcGFuXCIsIHsgY2xhc3M6IHtcbiAgICAgICAgdGlja19fbGFiZWw6IHRydWUsXG4gICAgICAgIFtDU1MudGlja01pbl06IGlzTWluVGlja0xhYmVsLFxuICAgICAgICBbQ1NTLnRpY2tNYXhdOiBpc01heFRpY2tMYWJlbCxcbiAgICAgIH0gfSwgZGlzcGxheWVkVGlja1ZhbHVlKSk7XG4gICAgaWYgKHRoaXMubGFiZWxUaWNrcyAmJiAhdGhpcy5oYXNIaXN0b2dyYW0gJiYgIXZhbHVlSXNSYW5nZSkge1xuICAgICAgcmV0dXJuIHRpY2tMYWJlbDtcbiAgICB9XG4gICAgaWYgKHRoaXMubGFiZWxUaWNrcyAmJlxuICAgICAgIXRoaXMuaGFzSGlzdG9ncmFtICYmXG4gICAgICB2YWx1ZUlzUmFuZ2UgJiZcbiAgICAgICF0aGlzLnByZWNpc2UgJiZcbiAgICAgICF0aGlzLmxhYmVsSGFuZGxlcykge1xuICAgICAgcmV0dXJuIHRpY2tMYWJlbDtcbiAgICB9XG4gICAgaWYgKHRoaXMubGFiZWxUaWNrcyAmJlxuICAgICAgIXRoaXMuaGFzSGlzdG9ncmFtICYmXG4gICAgICB2YWx1ZUlzUmFuZ2UgJiZcbiAgICAgICF0aGlzLnByZWNpc2UgJiZcbiAgICAgIHRoaXMubGFiZWxIYW5kbGVzKSB7XG4gICAgICByZXR1cm4gdGlja0xhYmVsO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYWJlbFRpY2tzICYmXG4gICAgICAhdGhpcy5oYXNIaXN0b2dyYW0gJiZcbiAgICAgIHZhbHVlSXNSYW5nZSAmJlxuICAgICAgdGhpcy5wcmVjaXNlICYmXG4gICAgICAoaXNNaW5UaWNrTGFiZWwgfHwgaXNNYXhUaWNrTGFiZWwpKSB7XG4gICAgICByZXR1cm4gdGlja0xhYmVsO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYWJlbFRpY2tzICYmIHRoaXMuaGFzSGlzdG9ncmFtICYmICF0aGlzLnByZWNpc2UgJiYgIXRoaXMubGFiZWxIYW5kbGVzKSB7XG4gICAgICByZXR1cm4gdGlja0xhYmVsO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYWJlbFRpY2tzICYmXG4gICAgICB0aGlzLmhhc0hpc3RvZ3JhbSAmJlxuICAgICAgdGhpcy5wcmVjaXNlICYmXG4gICAgICAhdGhpcy5sYWJlbEhhbmRsZXMgJiZcbiAgICAgIChpc01pblRpY2tMYWJlbCB8fCBpc01heFRpY2tMYWJlbCkpIHtcbiAgICAgIHJldHVybiB0aWNrTGFiZWw7XG4gICAgfVxuICAgIGlmICh0aGlzLmxhYmVsVGlja3MgJiZcbiAgICAgIHRoaXMuaGFzSGlzdG9ncmFtICYmXG4gICAgICAhdGhpcy5wcmVjaXNlICYmXG4gICAgICB0aGlzLmxhYmVsSGFuZGxlcyAmJlxuICAgICAgKGlzTWluVGlja0xhYmVsIHx8IGlzTWF4VGlja0xhYmVsKSkge1xuICAgICAgcmV0dXJuIHRpY2tMYWJlbDtcbiAgICB9XG4gICAgaWYgKHRoaXMubGFiZWxUaWNrcyAmJlxuICAgICAgdGhpcy5oYXNIaXN0b2dyYW0gJiZcbiAgICAgIHRoaXMucHJlY2lzZSAmJlxuICAgICAgdGhpcy5sYWJlbEhhbmRsZXMgJiZcbiAgICAgIChpc01pblRpY2tMYWJlbCB8fCBpc01heFRpY2tMYWJlbCkpIHtcbiAgICAgIHJldHVybiB0aWNrTGFiZWw7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgbWlycm9yID0gdGhpcy5zaG91bGRNaXJyb3IoKTtcbiAgICBjb25zdCB7IGFjdGl2ZVByb3AsIG1heCwgbWluLCBwYWdlU3RlcCwgc3RlcCB9ID0gdGhpcztcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXNbYWN0aXZlUHJvcF07XG4gICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgIGlmIChpc0FjdGl2YXRpb25LZXkoa2V5KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGFkanVzdG1lbnQ7XG4gICAgaWYgKGtleSA9PT0gXCJBcnJvd1VwXCIgfHwga2V5ID09PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgY29uc3QgZGlyZWN0aW9uRmFjdG9yID0gbWlycm9yICYmIGtleSA9PT0gXCJBcnJvd1JpZ2h0XCIgPyAtMSA6IDE7XG4gICAgICBhZGp1c3RtZW50ID0gdmFsdWUgKyBzdGVwICogZGlyZWN0aW9uRmFjdG9yO1xuICAgIH1cbiAgICBlbHNlIGlmIChrZXkgPT09IFwiQXJyb3dEb3duXCIgfHwga2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb25GYWN0b3IgPSBtaXJyb3IgJiYga2V5ID09PSBcIkFycm93TGVmdFwiID8gLTEgOiAxO1xuICAgICAgYWRqdXN0bWVudCA9IHZhbHVlIC0gc3RlcCAqIGRpcmVjdGlvbkZhY3RvcjtcbiAgICB9XG4gICAgZWxzZSBpZiAoa2V5ID09PSBcIlBhZ2VVcFwiKSB7XG4gICAgICBpZiAocGFnZVN0ZXApIHtcbiAgICAgICAgYWRqdXN0bWVudCA9IHZhbHVlICsgcGFnZVN0ZXA7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleSA9PT0gXCJQYWdlRG93blwiKSB7XG4gICAgICBpZiAocGFnZVN0ZXApIHtcbiAgICAgICAgYWRqdXN0bWVudCA9IHZhbHVlIC0gcGFnZVN0ZXA7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleSA9PT0gXCJIb21lXCIpIHtcbiAgICAgIGFkanVzdG1lbnQgPSBtaW47XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleSA9PT0gXCJFbmRcIikge1xuICAgICAgYWRqdXN0bWVudCA9IG1heDtcbiAgICB9XG4gICAgaWYgKGlzTmFOKGFkanVzdG1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZml4ZWREZWNpbWFsQWRqdXN0bWVudCA9IE51bWJlcihhZGp1c3RtZW50LnRvRml4ZWQoZGVjaW1hbFBsYWNlcyhzdGVwKSkpO1xuICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgW2FjdGl2ZVByb3BdOiB0aGlzLmNsYW1wKGZpeGVkRGVjaW1hbEFkanVzdG1lbnQsIGFjdGl2ZVByb3ApLFxuICAgIH0pO1xuICB9XG4gIHBvaW50ZXJEb3duSGFuZGxlcihldmVudCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICFpc1ByaW1hcnlQb2ludGVyQnV0dG9uKGV2ZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCB8fCBldmVudC5wYWdlWDtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMudHJhbnNsYXRlKHgpO1xuICAgIGxldCBwcm9wID0gXCJ2YWx1ZVwiO1xuICAgIGlmIChpc1JhbmdlKHRoaXMudmFsdWUpKSB7XG4gICAgICBjb25zdCBpblJhbmdlID0gcG9zaXRpb24gPj0gdGhpcy5taW5WYWx1ZSAmJiBwb3NpdGlvbiA8PSB0aGlzLm1heFZhbHVlO1xuICAgICAgaWYgKGluUmFuZ2UgJiYgdGhpcy5sYXN0RHJhZ1Byb3AgPT09IFwibWluTWF4VmFsdWVcIikge1xuICAgICAgICBwcm9wID0gXCJtaW5NYXhWYWx1ZVwiO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGNsb3NlclRvTWF4ID0gTWF0aC5hYnModGhpcy5tYXhWYWx1ZSAtIHBvc2l0aW9uKSA8IE1hdGguYWJzKHRoaXMubWluVmFsdWUgLSBwb3NpdGlvbik7XG4gICAgICAgIHByb3AgPSBjbG9zZXJUb01heCB8fCBwb3NpdGlvbiA+IHRoaXMubWF4VmFsdWUgPyBcIm1heFZhbHVlXCIgOiBcIm1pblZhbHVlXCI7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubGFzdERyYWdQcm9wVmFsdWUgPSB0aGlzW3Byb3BdO1xuICAgIHRoaXMuZHJhZ1N0YXJ0KHByb3ApO1xuICAgIGNvbnN0IGlzVGh1bWJBY3RpdmUgPSB0aGlzLmVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi50aHVtYjphY3RpdmVcIik7XG4gICAgaWYgKCFpc1RodW1iQWN0aXZlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHsgW3Byb3BdOiB0aGlzLmNsYW1wKHBvc2l0aW9uLCBwcm9wKSB9KTtcbiAgICB9XG4gICAgdGhpcy5mb2N1c0FjdGl2ZUhhbmRsZSh4KTtcbiAgfVxuICBoYW5kbGVUb3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgLy8gbmVlZGVkIHRvIHByZXZlbnQgZXh0cmEgY2xpY2sgYXQgdGhlIGVuZCBvZiBhIGhhbmRsZSBkcmFnXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudEZvY3VzYWJsZSh0aGlzKTtcbiAgICBjb25zdCBoYW5kbGUgPSB0aGlzLm1pbkhhbmRsZSA/IHRoaXMubWluSGFuZGxlIDogdGhpcy5tYXhIYW5kbGU7XG4gICAgaGFuZGxlPy5mb2N1cygpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldFZhbHVlRnJvbU1pbk1heCgpIHtcbiAgICBjb25zdCB7IG1pblZhbHVlLCBtYXhWYWx1ZSB9ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIG1pblZhbHVlID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBtYXhWYWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgdGhpcy52YWx1ZSA9IFttaW5WYWx1ZSwgbWF4VmFsdWVdO1xuICAgIH1cbiAgfVxuICBzZXRNaW5NYXhGcm9tVmFsdWUoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcztcbiAgICBpZiAoaXNSYW5nZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMubWluVmFsdWUgPSB2YWx1ZVswXTtcbiAgICAgIHRoaXMubWF4VmFsdWUgPSB2YWx1ZVsxXTtcbiAgICB9XG4gIH1cbiAgb25MYWJlbENsaWNrKCkge1xuICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgfVxuICBzaG91bGRNaXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlycm9yZWQgJiYgIXRoaXMuaGFzSGlzdG9ncmFtO1xuICB9XG4gIHNob3VsZFVzZU1pblZhbHVlKCkge1xuICAgIGlmICghaXNSYW5nZSh0aGlzLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gKCh0aGlzLmhhc0hpc3RvZ3JhbSAmJiB0aGlzLm1heFZhbHVlID09PSAwKSB8fCAoIXRoaXMuaGFzSGlzdG9ncmFtICYmIHRoaXMubWluVmFsdWUgPT09IDApKTtcbiAgfVxuICBnZXRUaWNrRGVuc2l0eSgpIHtcbiAgICBjb25zdCBkZW5zaXR5ID0gKHRoaXMubWF4IC0gdGhpcy5taW4pIC8gdGhpcy50aWNrcyAvIG1heFRpY2tFbGVtZW50VGhyZXNob2xkO1xuICAgIHJldHVybiBkZW5zaXR5IDwgMSA/IDEgOiBkZW5zaXR5O1xuICB9XG4gIGdlbmVyYXRlVGlja1ZhbHVlcygpIHtcbiAgICBjb25zdCB0aWNrSW50ZXJ2YWwgPSB0aGlzLnRpY2tzID8/IDA7XG4gICAgaWYgKHRpY2tJbnRlcnZhbCA8PSAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHRpY2tzID0gW3RoaXMubWluXTtcbiAgICBjb25zdCBkZW5zaXR5ID0gdGhpcy5nZXRUaWNrRGVuc2l0eSgpO1xuICAgIGNvbnN0IHRpY2tPZmZzZXQgPSB0aWNrSW50ZXJ2YWwgKiBkZW5zaXR5O1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5taW47XG4gICAgd2hpbGUgKGN1cnJlbnQgPCB0aGlzLm1heCkge1xuICAgICAgY3VycmVudCArPSB0aWNrT2Zmc2V0O1xuICAgICAgdGlja3MucHVzaChNYXRoLm1pbihjdXJyZW50LCB0aGlzLm1heCkpO1xuICAgIH1cbiAgICBpZiAoIXRpY2tzLmluY2x1ZGVzKHRoaXMubWF4KSkge1xuICAgICAgdGlja3MucHVzaCh0aGlzLm1heCk7XG4gICAgfVxuICAgIHJldHVybiB0aWNrcztcbiAgfVxuICBwb2ludGVyRG93bkRyYWdTdGFydChldmVudCwgcHJvcCkge1xuICAgIGlmICghaXNQcmltYXJ5UG9pbnRlckJ1dHRvbihldmVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kcmFnU3RhcnQocHJvcCk7XG4gIH1cbiAgZHJhZ1N0YXJ0KHByb3ApIHtcbiAgICB0aGlzLmRyYWdQcm9wID0gcHJvcDtcbiAgICB0aGlzLmxhc3REcmFnUHJvcCA9IHRoaXMuZHJhZ1Byb3A7XG4gICAgdGhpcy5hY3RpdmVQcm9wID0gcHJvcDtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgdGhpcy5kcmFnVXBkYXRlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIHRoaXMucG9pbnRlclVwRHJhZ0VuZCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgdGhpcy5kcmFnRW5kKTtcbiAgfVxuICBmb2N1c0FjdGl2ZUhhbmRsZSh2YWx1ZVgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuZHJhZ1Byb3ApIHtcbiAgICAgIGNhc2UgXCJtaW5WYWx1ZVwiOlxuICAgICAgICB0aGlzLm1pbkhhbmRsZS5mb2N1cygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtYXhWYWx1ZVwiOlxuICAgICAgY2FzZSBcInZhbHVlXCI6XG4gICAgICAgIHRoaXMubWF4SGFuZGxlLmZvY3VzKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1pbk1heFZhbHVlXCI6XG4gICAgICAgIHRoaXMuZ2V0Q2xvc2VzdEhhbmRsZSh2YWx1ZVgpLmZvY3VzKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBlbWl0SW5wdXQoKSB7XG4gICAgdGhpcy5jYWxjaXRlU2xpZGVySW5wdXQuZW1pdCgpO1xuICB9XG4gIGVtaXRDaGFuZ2UoKSB7XG4gICAgdGhpcy5jYWxjaXRlU2xpZGVyQ2hhbmdlLmVtaXQoKTtcbiAgfVxuICByZW1vdmVEcmFnTGlzdGVuZXJzKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCB0aGlzLmRyYWdVcGRhdGUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgdGhpcy5wb2ludGVyVXBEcmFnRW5kKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCB0aGlzLmRyYWdFbmQpO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgcHJvcCB2YWx1ZShzKSBpZiBjaGFuZ2VkIGF0IHRoZSBjb21wb25lbnQgbGV2ZWxcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyAtIGEgc2V0IG9mIGtleS92YWx1ZSBwYWlycyBkZWxpbmVhdGluZyB3aGF0IHByb3BlcnRpZXMgaW4gdGhlIGNvbXBvbmVudCB0byB1cGRhdGVcbiAgICovXG4gIHNldFZhbHVlKHZhbHVlcykge1xuICAgIGxldCB2YWx1ZUNoYW5nZWQ7XG4gICAgT2JqZWN0LmtleXModmFsdWVzKS5mb3JFYWNoKChwcm9wTmFtZSkgPT4ge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZXNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCF2YWx1ZUNoYW5nZWQpIHtcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzW3Byb3BOYW1lXTtcbiAgICAgICAgdmFsdWVDaGFuZ2VkID0gb2xkVmFsdWUgIT09IG5ld1ZhbHVlO1xuICAgICAgfVxuICAgICAgdGhpc1twcm9wTmFtZV0gPSBuZXdWYWx1ZTtcbiAgICB9KTtcbiAgICBpZiAoIXZhbHVlQ2hhbmdlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuZHJhZ1Byb3A7XG4gICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgdGhpcy5lbWl0Q2hhbmdlKCk7XG4gICAgfVxuICAgIHRoaXMuZW1pdElucHV0KCk7XG4gIH1cbiAgLyoqXG4gICAqIElmIG51bWJlciBpcyBvdXRzaWRlIHJhbmdlLCBjb25zdHJhaW4gdG8gbWluIG9yIG1heFxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICogQHBhcmFtIHByb3BcbiAgICogQGludGVybmFsXG4gICAqL1xuICBjbGFtcCh2YWx1ZSwgcHJvcCkge1xuICAgIHZhbHVlID0gY2xhbXAodmFsdWUsIHRoaXMubWluLCB0aGlzLm1heCk7XG4gICAgLy8gZW5zdXJlIHRoYXQgbWF4VmFsdWUgYW5kIG1pblZhbHVlIGRvbid0IHN3YXAgcG9zaXRpb25zXG4gICAgaWYgKHByb3AgPT09IFwibWF4VmFsdWVcIikge1xuICAgICAgdmFsdWUgPSBNYXRoLm1heCh2YWx1ZSwgdGhpcy5taW5WYWx1ZSk7XG4gICAgfVxuICAgIGlmIChwcm9wID09PSBcIm1pblZhbHVlXCIpIHtcbiAgICAgIHZhbHVlID0gTWF0aC5taW4odmFsdWUsIHRoaXMubWF4VmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgLyoqXG4gICAqIFRyYW5zbGF0ZSBhIHBpeGVsIHBvc2l0aW9uIHRvIHZhbHVlIGFsb25nIHRoZSByYW5nZVxuICAgKlxuICAgKiBAcGFyYW0geFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHRyYW5zbGF0ZSh4KSB7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLm1heCAtIHRoaXMubWluO1xuICAgIGNvbnN0IHsgbGVmdCwgd2lkdGggfSA9IHRoaXMudHJhY2tFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBwZXJjZW50ID0gKHggLSBsZWZ0KSAvIHdpZHRoO1xuICAgIGNvbnN0IG1pcnJvciA9IHRoaXMuc2hvdWxkTWlycm9yKCk7XG4gICAgY29uc3QgY2xhbXBlZFZhbHVlID0gdGhpcy5jbGFtcCh0aGlzLm1pbiArIHJhbmdlICogKG1pcnJvciA/IDEgLSBwZXJjZW50IDogcGVyY2VudCkpO1xuICAgIGxldCB2YWx1ZSA9IE51bWJlcihjbGFtcGVkVmFsdWUudG9GaXhlZChkZWNpbWFsUGxhY2VzKHRoaXMuc3RlcCkpKTtcbiAgICBpZiAodGhpcy5zbmFwICYmIHRoaXMuc3RlcCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmdldENsb3Nlc3RTdGVwKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBhbGxvd2VkIHZhbHVlIGFsb25nIHN0ZXBwZWQgdmFsdWVzXG4gICAqXG4gICAqIEBwYXJhbSBudW1cbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXRDbG9zZXN0U3RlcChudW0pIHtcbiAgICBudW0gPSBOdW1iZXIodGhpcy5jbGFtcChudW0pLnRvRml4ZWQoZGVjaW1hbFBsYWNlcyh0aGlzLnN0ZXApKSk7XG4gICAgaWYgKHRoaXMuc3RlcCkge1xuICAgICAgY29uc3Qgc3RlcCA9IE1hdGgucm91bmQobnVtIC8gdGhpcy5zdGVwKSAqIHRoaXMuc3RlcDtcbiAgICAgIG51bSA9IE51bWJlcih0aGlzLmNsYW1wKHN0ZXApLnRvRml4ZWQoZGVjaW1hbFBsYWNlcyh0aGlzLnN0ZXApKSk7XG4gICAgfVxuICAgIHJldHVybiBudW07XG4gIH1cbiAgZ2V0Q2xvc2VzdEhhbmRsZSh2YWx1ZVgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXREaXN0YW5jZVgodGhpcy5tYXhIYW5kbGUsIHZhbHVlWCkgPiB0aGlzLmdldERpc3RhbmNlWCh0aGlzLm1pbkhhbmRsZSwgdmFsdWVYKVxuICAgICAgPyB0aGlzLm1pbkhhbmRsZVxuICAgICAgOiB0aGlzLm1heEhhbmRsZTtcbiAgfVxuICBnZXREaXN0YW5jZVgoZWwsIHZhbHVlWCkge1xuICAgIHJldHVybiBNYXRoLmFicyhlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gdmFsdWVYKTtcbiAgfVxuICBnZXRGb250U2l6ZUZvckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHJldHVybiBOdW1iZXIod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc2l6ZVwiKS5tYXRjaCgvXFxkKy8pWzBdKTtcbiAgfVxuICAvKipcbiAgICogR2V0IHBvc2l0aW9uIG9mIHZhbHVlIGFsb25nIHJhbmdlIGFzIGZyYWN0aW9uYWwgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIG51bVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IG51bWJlciBpbiB0aGUgdW5pdCBpbnRlcnZhbCBbMCwxXVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGdldFVuaXRJbnRlcnZhbChudW0pIHtcbiAgICBudW0gPSB0aGlzLmNsYW1wKG51bSk7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLm1heCAtIHRoaXMubWluO1xuICAgIHJldHVybiAobnVtIC0gdGhpcy5taW4pIC8gcmFuZ2U7XG4gIH1cbiAgYWRqdXN0SG9zdE9ic2N1cmVkSGFuZGxlTGFiZWwobmFtZSkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5lbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoYC5oYW5kbGVfX2xhYmVsLS0ke25hbWV9YCk7XG4gICAgY29uc3QgbGFiZWxTdGF0aWMgPSB0aGlzLmVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihgLmhhbmRsZV9fbGFiZWwtLSR7bmFtZX0uc3RhdGljYCk7XG4gICAgY29uc3QgbGFiZWxUcmFuc2Zvcm1lZCA9IHRoaXMuZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGAuaGFuZGxlX19sYWJlbC0tJHtuYW1lfS50cmFuc2Zvcm1lZGApO1xuICAgIGNvbnN0IGxhYmVsU3RhdGljQm91bmRzID0gbGFiZWxTdGF0aWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbGFiZWxTdGF0aWNPZmZzZXQgPSB0aGlzLmdldEhvc3RPZmZzZXQobGFiZWxTdGF0aWNCb3VuZHMubGVmdCwgbGFiZWxTdGF0aWNCb3VuZHMucmlnaHQpO1xuICAgIGxhYmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bGFiZWxTdGF0aWNPZmZzZXR9cHgpYDtcbiAgICBsYWJlbFRyYW5zZm9ybWVkLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bGFiZWxTdGF0aWNPZmZzZXR9cHgpYDtcbiAgfVxuICBoeXBoZW5hdGVDb2xsaWRpbmdSYW5nZUhhbmRsZUxhYmVscygpIHtcbiAgICBjb25zdCB7IHNoYWRvd1Jvb3QgfSA9IHRoaXMuZWw7XG4gICAgY29uc3QgbWlycm9yID0gdGhpcy5zaG91bGRNaXJyb3IoKTtcbiAgICBjb25zdCBsZWZ0TW9kaWZpZXIgPSBtaXJyb3IgPyBcInZhbHVlXCIgOiBcIm1pblZhbHVlXCI7XG4gICAgY29uc3QgcmlnaHRNb2RpZmllciA9IG1pcnJvciA/IFwibWluVmFsdWVcIiA6IFwidmFsdWVcIjtcbiAgICBjb25zdCBsZWZ0VmFsdWVMYWJlbCA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihgLmhhbmRsZV9fbGFiZWwtLSR7bGVmdE1vZGlmaWVyfWApO1xuICAgIGNvbnN0IGxlZnRWYWx1ZUxhYmVsU3RhdGljID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGAuaGFuZGxlX19sYWJlbC0tJHtsZWZ0TW9kaWZpZXJ9LnN0YXRpY2ApO1xuICAgIGNvbnN0IGxlZnRWYWx1ZUxhYmVsVHJhbnNmb3JtZWQgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoYC5oYW5kbGVfX2xhYmVsLS0ke2xlZnRNb2RpZmllcn0udHJhbnNmb3JtZWRgKTtcbiAgICBjb25zdCBsZWZ0VmFsdWVMYWJlbFN0YXRpY0hvc3RPZmZzZXQgPSB0aGlzLmdldEhvc3RPZmZzZXQobGVmdFZhbHVlTGFiZWxTdGF0aWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCwgbGVmdFZhbHVlTGFiZWxTdGF0aWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQpO1xuICAgIGNvbnN0IHJpZ2h0VmFsdWVMYWJlbCA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihgLmhhbmRsZV9fbGFiZWwtLSR7cmlnaHRNb2RpZmllcn1gKTtcbiAgICBjb25zdCByaWdodFZhbHVlTGFiZWxTdGF0aWMgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoYC5oYW5kbGVfX2xhYmVsLS0ke3JpZ2h0TW9kaWZpZXJ9LnN0YXRpY2ApO1xuICAgIGNvbnN0IHJpZ2h0VmFsdWVMYWJlbFRyYW5zZm9ybWVkID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGAuaGFuZGxlX19sYWJlbC0tJHtyaWdodE1vZGlmaWVyfS50cmFuc2Zvcm1lZGApO1xuICAgIGNvbnN0IHJpZ2h0VmFsdWVMYWJlbFN0YXRpY0hvc3RPZmZzZXQgPSB0aGlzLmdldEhvc3RPZmZzZXQocmlnaHRWYWx1ZUxhYmVsU3RhdGljLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQsIHJpZ2h0VmFsdWVMYWJlbFN0YXRpYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodCk7XG4gICAgY29uc3QgbGFiZWxGb250U2l6ZSA9IHRoaXMuZ2V0Rm9udFNpemVGb3JFbGVtZW50KGxlZnRWYWx1ZUxhYmVsKTtcbiAgICBjb25zdCBsYWJlbFRyYW5zZm9ybWVkT3ZlcmxhcCA9IHRoaXMuZ2V0UmFuZ2VMYWJlbE92ZXJsYXAobGVmdFZhbHVlTGFiZWxUcmFuc2Zvcm1lZCwgcmlnaHRWYWx1ZUxhYmVsVHJhbnNmb3JtZWQpO1xuICAgIGNvbnN0IGh5cGhlbkxhYmVsID0gbGVmdFZhbHVlTGFiZWw7XG4gICAgY29uc3QgbGFiZWxPZmZzZXQgPSBsYWJlbEZvbnRTaXplIC8gMjtcbiAgICBpZiAobGFiZWxUcmFuc2Zvcm1lZE92ZXJsYXAgPiAwKSB7XG4gICAgICBoeXBoZW5MYWJlbC5jbGFzc0xpc3QuYWRkKFwiaHlwaGVuXCIsIFwiaHlwaGVuLS13cmFwXCIpO1xuICAgICAgaWYgKHJpZ2h0VmFsdWVMYWJlbFN0YXRpY0hvc3RPZmZzZXQgPT09IDAgJiYgbGVmdFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0ID09PSAwKSB7XG4gICAgICAgIC8vIE5laXRoZXIgaGFuZGxlIG92ZXJsYXBzIHRoZSBob3N0IGJvdW5kYXJ5XG4gICAgICAgIGxldCBsZWZ0VmFsdWVMYWJlbFRyYW5zbGF0ZSA9IGxhYmVsVHJhbnNmb3JtZWRPdmVybGFwIC8gMiAtIGxhYmVsT2Zmc2V0O1xuICAgICAgICBsZWZ0VmFsdWVMYWJlbFRyYW5zbGF0ZSA9XG4gICAgICAgICAgTWF0aC5zaWduKGxlZnRWYWx1ZUxhYmVsVHJhbnNsYXRlKSA9PT0gLTFcbiAgICAgICAgICAgID8gTWF0aC5hYnMobGVmdFZhbHVlTGFiZWxUcmFuc2xhdGUpXG4gICAgICAgICAgICA6IC1sZWZ0VmFsdWVMYWJlbFRyYW5zbGF0ZTtcbiAgICAgICAgY29uc3QgbGVmdFZhbHVlTGFiZWxUcmFuc2Zvcm1lZEhvc3RPZmZzZXQgPSB0aGlzLmdldEhvc3RPZmZzZXQobGVmdFZhbHVlTGFiZWxUcmFuc2Zvcm1lZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICtcbiAgICAgICAgICBsZWZ0VmFsdWVMYWJlbFRyYW5zbGF0ZSAtXG4gICAgICAgICAgbGFiZWxPZmZzZXQsIGxlZnRWYWx1ZUxhYmVsVHJhbnNmb3JtZWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQgK1xuICAgICAgICAgIGxlZnRWYWx1ZUxhYmVsVHJhbnNsYXRlIC1cbiAgICAgICAgICBsYWJlbE9mZnNldCk7XG4gICAgICAgIGxldCByaWdodFZhbHVlTGFiZWxUcmFuc2xhdGUgPSBsYWJlbFRyYW5zZm9ybWVkT3ZlcmxhcCAvIDI7XG4gICAgICAgIGNvbnN0IHJpZ2h0VmFsdWVMYWJlbFRyYW5zZm9ybWVkSG9zdE9mZnNldCA9IHRoaXMuZ2V0SG9zdE9mZnNldChyaWdodFZhbHVlTGFiZWxUcmFuc2Zvcm1lZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgcmlnaHRWYWx1ZUxhYmVsVHJhbnNsYXRlLCByaWdodFZhbHVlTGFiZWxUcmFuc2Zvcm1lZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodCArIHJpZ2h0VmFsdWVMYWJlbFRyYW5zbGF0ZSk7XG4gICAgICAgIGlmIChsZWZ0VmFsdWVMYWJlbFRyYW5zZm9ybWVkSG9zdE9mZnNldCAhPT0gMCkge1xuICAgICAgICAgIGxlZnRWYWx1ZUxhYmVsVHJhbnNsYXRlICs9IGxlZnRWYWx1ZUxhYmVsVHJhbnNmb3JtZWRIb3N0T2Zmc2V0O1xuICAgICAgICAgIHJpZ2h0VmFsdWVMYWJlbFRyYW5zbGF0ZSArPSBsZWZ0VmFsdWVMYWJlbFRyYW5zZm9ybWVkSG9zdE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHRWYWx1ZUxhYmVsVHJhbnNmb3JtZWRIb3N0T2Zmc2V0ICE9PSAwKSB7XG4gICAgICAgICAgbGVmdFZhbHVlTGFiZWxUcmFuc2xhdGUgKz0gcmlnaHRWYWx1ZUxhYmVsVHJhbnNmb3JtZWRIb3N0T2Zmc2V0O1xuICAgICAgICAgIHJpZ2h0VmFsdWVMYWJlbFRyYW5zbGF0ZSArPSByaWdodFZhbHVlTGFiZWxUcmFuc2Zvcm1lZEhvc3RPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgbGVmdFZhbHVlTGFiZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtsZWZ0VmFsdWVMYWJlbFRyYW5zbGF0ZX1weClgO1xuICAgICAgICBsZWZ0VmFsdWVMYWJlbFRyYW5zZm9ybWVkLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bGVmdFZhbHVlTGFiZWxUcmFuc2xhdGUgLSBsYWJlbE9mZnNldH1weClgO1xuICAgICAgICByaWdodFZhbHVlTGFiZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtyaWdodFZhbHVlTGFiZWxUcmFuc2xhdGV9cHgpYDtcbiAgICAgICAgcmlnaHRWYWx1ZUxhYmVsVHJhbnNmb3JtZWQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtyaWdodFZhbHVlTGFiZWxUcmFuc2xhdGV9cHgpYDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGxlZnRWYWx1ZUxhYmVsU3RhdGljSG9zdE9mZnNldCA+IDAgfHwgcmlnaHRWYWx1ZUxhYmVsU3RhdGljSG9zdE9mZnNldCA+IDApIHtcbiAgICAgICAgLy8gbGFiZWxzIG92ZXJsYXAgaG9zdCBib3VuZGFyeSBvbiB0aGUgbGVmdCBzaWRlXG4gICAgICAgIGxlZnRWYWx1ZUxhYmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bGVmdFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0ICsgbGFiZWxPZmZzZXR9cHgpYDtcbiAgICAgICAgcmlnaHRWYWx1ZUxhYmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bGFiZWxUcmFuc2Zvcm1lZE92ZXJsYXAgKyByaWdodFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0fXB4KWA7XG4gICAgICAgIHJpZ2h0VmFsdWVMYWJlbFRyYW5zZm9ybWVkLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bGFiZWxUcmFuc2Zvcm1lZE92ZXJsYXAgKyByaWdodFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0fXB4KWA7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChsZWZ0VmFsdWVMYWJlbFN0YXRpY0hvc3RPZmZzZXQgPCAwIHx8IHJpZ2h0VmFsdWVMYWJlbFN0YXRpY0hvc3RPZmZzZXQgPCAwKSB7XG4gICAgICAgIC8vIGxhYmVscyBvdmVybGFwIGhvc3QgYm91bmRhcnkgb24gdGhlIHJpZ2h0IHNpZGVcbiAgICAgICAgbGV0IGxlZnRWYWx1ZUxhYmVsVHJhbnNsYXRlID0gTWF0aC5hYnMobGVmdFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0KSArIGxhYmVsVHJhbnNmb3JtZWRPdmVybGFwIC0gbGFiZWxPZmZzZXQ7XG4gICAgICAgIGxlZnRWYWx1ZUxhYmVsVHJhbnNsYXRlID1cbiAgICAgICAgICBNYXRoLnNpZ24obGVmdFZhbHVlTGFiZWxUcmFuc2xhdGUpID09PSAtMVxuICAgICAgICAgICAgPyBNYXRoLmFicyhsZWZ0VmFsdWVMYWJlbFRyYW5zbGF0ZSlcbiAgICAgICAgICAgIDogLWxlZnRWYWx1ZUxhYmVsVHJhbnNsYXRlO1xuICAgICAgICBsZWZ0VmFsdWVMYWJlbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2xlZnRWYWx1ZUxhYmVsVHJhbnNsYXRlfXB4KWA7XG4gICAgICAgIGxlZnRWYWx1ZUxhYmVsVHJhbnNmb3JtZWQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtsZWZ0VmFsdWVMYWJlbFRyYW5zbGF0ZSAtIGxhYmVsT2Zmc2V0fXB4KWA7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaHlwaGVuTGFiZWwuY2xhc3NMaXN0LnJlbW92ZShcImh5cGhlblwiLCBcImh5cGhlbi0td3JhcFwiKTtcbiAgICAgIGxlZnRWYWx1ZUxhYmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bGVmdFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0fXB4KWA7XG4gICAgICBsZWZ0VmFsdWVMYWJlbFRyYW5zZm9ybWVkLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bGVmdFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0fXB4KWA7XG4gICAgICByaWdodFZhbHVlTGFiZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtyaWdodFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0fXB4KWA7XG4gICAgICByaWdodFZhbHVlTGFiZWxUcmFuc2Zvcm1lZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3JpZ2h0VmFsdWVMYWJlbFN0YXRpY0hvc3RPZmZzZXR9cHgpYDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEhpZGVzIGJvdW5kaW5nIHRpY2sgbGFiZWxzIHRoYXQgYXJlIG9ic2N1cmVkIGJ5IGVpdGhlciBoYW5kbGUuXG4gICAqL1xuICBoaWRlT2JzY3VyZWRCb3VuZGluZ1RpY2tMYWJlbHMoKSB7XG4gICAgY29uc3QgdmFsdWVJc1JhbmdlID0gaXNSYW5nZSh0aGlzLnZhbHVlKTtcbiAgICBpZiAoIXRoaXMuaGFzSGlzdG9ncmFtICYmICF2YWx1ZUlzUmFuZ2UgJiYgIXRoaXMubGFiZWxIYW5kbGVzICYmICF0aGlzLnByZWNpc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmhhc0hpc3RvZ3JhbSAmJiAhdmFsdWVJc1JhbmdlICYmIHRoaXMubGFiZWxIYW5kbGVzICYmICF0aGlzLnByZWNpc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmhhc0hpc3RvZ3JhbSAmJiAhdmFsdWVJc1JhbmdlICYmICF0aGlzLmxhYmVsSGFuZGxlcyAmJiB0aGlzLnByZWNpc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmhhc0hpc3RvZ3JhbSAmJiAhdmFsdWVJc1JhbmdlICYmIHRoaXMubGFiZWxIYW5kbGVzICYmIHRoaXMucHJlY2lzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaGFzSGlzdG9ncmFtICYmIHZhbHVlSXNSYW5nZSAmJiAhdGhpcy5wcmVjaXNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmhhc0hpc3RvZ3JhbSAmJiAhdGhpcy5wcmVjaXNlICYmICF0aGlzLmxhYmVsSGFuZGxlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtaW5IYW5kbGUgPSB0aGlzLmVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi50aHVtYi0tbWluVmFsdWVcIik7XG4gICAgY29uc3QgbWF4SGFuZGxlID0gdGhpcy5lbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIudGh1bWItLXZhbHVlXCIpO1xuICAgIGNvbnN0IG1pblRpY2tMYWJlbCA9IHRoaXMuZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnRpY2tfX2xhYmVsLS1taW5cIik7XG4gICAgY29uc3QgbWF4VGlja0xhYmVsID0gdGhpcy5lbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIudGlja19fbGFiZWwtLW1heFwiKTtcbiAgICBpZiAoIW1pbkhhbmRsZSAmJiBtYXhIYW5kbGUgJiYgbWluVGlja0xhYmVsICYmIG1heFRpY2tMYWJlbCkge1xuICAgICAgbWluVGlja0xhYmVsLnN0eWxlLm9wYWNpdHkgPSB0aGlzLmlzTWluVGlja0xhYmVsT2JzY3VyZWQobWluVGlja0xhYmVsLCBtYXhIYW5kbGUpID8gXCIwXCIgOiBcIjFcIjtcbiAgICAgIG1heFRpY2tMYWJlbC5zdHlsZS5vcGFjaXR5ID0gdGhpcy5pc01heFRpY2tMYWJlbE9ic2N1cmVkKG1heFRpY2tMYWJlbCwgbWF4SGFuZGxlKSA/IFwiMFwiIDogXCIxXCI7XG4gICAgfVxuICAgIGlmIChtaW5IYW5kbGUgJiYgbWF4SGFuZGxlICYmIG1pblRpY2tMYWJlbCAmJiBtYXhUaWNrTGFiZWwpIHtcbiAgICAgIG1pblRpY2tMYWJlbC5zdHlsZS5vcGFjaXR5ID1cbiAgICAgICAgdGhpcy5pc01pblRpY2tMYWJlbE9ic2N1cmVkKG1pblRpY2tMYWJlbCwgbWluSGFuZGxlKSB8fFxuICAgICAgICAgIHRoaXMuaXNNaW5UaWNrTGFiZWxPYnNjdXJlZChtaW5UaWNrTGFiZWwsIG1heEhhbmRsZSlcbiAgICAgICAgICA/IFwiMFwiXG4gICAgICAgICAgOiBcIjFcIjtcbiAgICAgIG1heFRpY2tMYWJlbC5zdHlsZS5vcGFjaXR5ID1cbiAgICAgICAgdGhpcy5pc01heFRpY2tMYWJlbE9ic2N1cmVkKG1heFRpY2tMYWJlbCwgbWluSGFuZGxlKSB8fFxuICAgICAgICAgICh0aGlzLmlzTWF4VGlja0xhYmVsT2JzY3VyZWQobWF4VGlja0xhYmVsLCBtYXhIYW5kbGUpICYmIHRoaXMuaGFzSGlzdG9ncmFtKVxuICAgICAgICAgID8gXCIwXCJcbiAgICAgICAgICA6IFwiMVwiO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgbnVtYmVyIG9mIHBpeGVscyB0byBvZmZzZXQgb24gdGhlIGxlZnQgb3IgcmlnaHQgc2lkZSBiYXNlZCBvbiBkZXNpcmVkIHBvc2l0aW9uIGJlaGF2aW9yLlxuICAgKlxuICAgKiBAcGFyYW0gbGVmdEJvdW5kc1xuICAgKiBAcGFyYW0gcmlnaHRCb3VuZHNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXRIb3N0T2Zmc2V0KGxlZnRCb3VuZHMsIHJpZ2h0Qm91bmRzKSB7XG4gICAgY29uc3QgaG9zdEJvdW5kcyA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYnVmZmVyID0gNztcbiAgICBpZiAobGVmdEJvdW5kcyArIGJ1ZmZlciA8IGhvc3RCb3VuZHMubGVmdCkge1xuICAgICAgcmV0dXJuIGhvc3RCb3VuZHMubGVmdCAtIGxlZnRCb3VuZHMgLSBidWZmZXI7XG4gICAgfVxuICAgIGlmIChyaWdodEJvdW5kcyAtIGJ1ZmZlciA+IGhvc3RCb3VuZHMucmlnaHQpIHtcbiAgICAgIHJldHVybiAtKHJpZ2h0Qm91bmRzIC0gaG9zdEJvdW5kcy5yaWdodCkgKyBidWZmZXI7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBudW1iZXIgb2YgcGl4ZWxzIHRoYXQgdGhlIHR3byBnaXZlbiBzcGFuIGVsZW1lbnRzIGFyZSBvdmVybGFwcGluZywgdGFraW5nIGludG8gYWNjb3VudFxuICAgKiBhIHNwYWNlIGluIGJldHdlZW4gdGhlIHR3byBzcGFucyBlcXVhbCB0byB0aGUgZm9udC1zaXplIHNldCBvbiB0aGVtIHRvIGFjY291bnQgZm9yIHRoZSBzcGFjZSBuZWVkZWQgdG8gcmVuZGVyIGEgaHlwaGVuLlxuICAgKlxuICAgKiBAcGFyYW0gbGVmdExhYmVsXG4gICAqIEBwYXJhbSByaWdodExhYmVsXG4gICAqL1xuICBnZXRSYW5nZUxhYmVsT3ZlcmxhcChsZWZ0TGFiZWwsIHJpZ2h0TGFiZWwpIHtcbiAgICBjb25zdCBsZWZ0TGFiZWxCb3VuZHMgPSBsZWZ0TGFiZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgcmlnaHRMYWJlbEJvdW5kcyA9IHJpZ2h0TGFiZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbGVmdExhYmVsRm9udFNpemUgPSB0aGlzLmdldEZvbnRTaXplRm9yRWxlbWVudChsZWZ0TGFiZWwpO1xuICAgIGNvbnN0IHJhbmdlTGFiZWxPdmVybGFwID0gbGVmdExhYmVsQm91bmRzLnJpZ2h0ICsgbGVmdExhYmVsRm9udFNpemUgLSByaWdodExhYmVsQm91bmRzLmxlZnQ7XG4gICAgcmV0dXJuIE1hdGgubWF4KHJhbmdlTGFiZWxPdmVybGFwLCAwKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIGJvb2xlYW4gdmFsdWUgcmVwcmVzZW50aW5nIGlmIHRoZSBtaW5MYWJlbCBzcGFuIGVsZW1lbnQgaXMgb2JzY3VyZWQgKGJlaW5nIG92ZXJsYXBwZWQpIGJ5IHRoZSBnaXZlbiBoYW5kbGUgZGl2IGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBtaW5MYWJlbFxuICAgKiBAcGFyYW0gaGFuZGxlXG4gICAqL1xuICBpc01pblRpY2tMYWJlbE9ic2N1cmVkKG1pbkxhYmVsLCBoYW5kbGUpIHtcbiAgICBjb25zdCBtaW5MYWJlbEJvdW5kcyA9IG1pbkxhYmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGhhbmRsZUJvdW5kcyA9IGhhbmRsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gaW50ZXJzZWN0cyhtaW5MYWJlbEJvdW5kcywgaGFuZGxlQm91bmRzKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIGJvb2xlYW4gdmFsdWUgcmVwcmVzZW50aW5nIGlmIHRoZSBtYXhMYWJlbCBzcGFuIGVsZW1lbnQgaXMgb2JzY3VyZWQgKGJlaW5nIG92ZXJsYXBwZWQpIGJ5IHRoZSBnaXZlbiBoYW5kbGUgZGl2IGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBtYXhMYWJlbFxuICAgKiBAcGFyYW0gaGFuZGxlXG4gICAqL1xuICBpc01heFRpY2tMYWJlbE9ic2N1cmVkKG1heExhYmVsLCBoYW5kbGUpIHtcbiAgICBjb25zdCBtYXhMYWJlbEJvdW5kcyA9IG1heExhYmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGhhbmRsZUJvdW5kcyA9IGhhbmRsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gaW50ZXJzZWN0cyhtYXhMYWJlbEJvdW5kcywgaGFuZGxlQm91bmRzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGRlbGVnYXRlc0ZvY3VzKCkgeyByZXR1cm4gdHJ1ZTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJoaXN0b2dyYW1cIjogW1wiaGlzdG9ncmFtV2F0Y2hlclwiXSxcbiAgICBcInRpY2tzXCI6IFtcInRpY2tzV2F0Y2hlclwiXSxcbiAgICBcInZhbHVlXCI6IFtcInZhbHVlSGFuZGxlclwiXSxcbiAgICBcIm1pblZhbHVlXCI6IFtcIm1pbk1heFZhbHVlSGFuZGxlclwiXSxcbiAgICBcIm1heFZhbHVlXCI6IFtcIm1pbk1heFZhbHVlSGFuZGxlclwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBzbGlkZXJDc3M7IH1cbn0sIFsxNywgXCJjYWxjaXRlLXNsaWRlclwiLCB7XG4gICAgXCJkaXNhYmxlZFwiOiBbNTE2XSxcbiAgICBcImZvcm1cIjogWzUxM10sXG4gICAgXCJncm91cFNlcGFyYXRvclwiOiBbNTE2LCBcImdyb3VwLXNlcGFyYXRvclwiXSxcbiAgICBcImhhc0hpc3RvZ3JhbVwiOiBbMTU0MCwgXCJoYXMtaGlzdG9ncmFtXCJdLFxuICAgIFwiaGlzdG9ncmFtXCI6IFsxNl0sXG4gICAgXCJoaXN0b2dyYW1TdG9wc1wiOiBbMTZdLFxuICAgIFwibGFiZWxIYW5kbGVzXCI6IFs1MTYsIFwibGFiZWwtaGFuZGxlc1wiXSxcbiAgICBcImxhYmVsVGlja3NcIjogWzUxNiwgXCJsYWJlbC10aWNrc1wiXSxcbiAgICBcIm1heFwiOiBbNTE0XSxcbiAgICBcIm1heExhYmVsXCI6IFsxLCBcIm1heC1sYWJlbFwiXSxcbiAgICBcIm1heFZhbHVlXCI6IFsxMDI2LCBcIm1heC12YWx1ZVwiXSxcbiAgICBcIm1pblwiOiBbNTE0XSxcbiAgICBcIm1pbkxhYmVsXCI6IFsxLCBcIm1pbi1sYWJlbFwiXSxcbiAgICBcIm1pblZhbHVlXCI6IFsxMDI2LCBcIm1pbi12YWx1ZVwiXSxcbiAgICBcIm1pcnJvcmVkXCI6IFs1MTZdLFxuICAgIFwibmFtZVwiOiBbNTEzXSxcbiAgICBcIm51bWJlcmluZ1N5c3RlbVwiOiBbMSwgXCJudW1iZXJpbmctc3lzdGVtXCJdLFxuICAgIFwicGFnZVN0ZXBcIjogWzUxNCwgXCJwYWdlLXN0ZXBcIl0sXG4gICAgXCJwcmVjaXNlXCI6IFs1MTZdLFxuICAgIFwicmVxdWlyZWRcIjogWzUxNl0sXG4gICAgXCJzbmFwXCI6IFs1MTZdLFxuICAgIFwic3RlcFwiOiBbNTE0XSxcbiAgICBcInRpY2tzXCI6IFs1MTRdLFxuICAgIFwidmFsdWVcIjogWzE1MzhdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogWzMyXSxcbiAgICBcIm1pbk1heFZhbHVlUmFuZ2VcIjogWzMyXSxcbiAgICBcIm1pblZhbHVlRHJhZ1JhbmdlXCI6IFszMl0sXG4gICAgXCJtYXhWYWx1ZURyYWdSYW5nZVwiOiBbMzJdLFxuICAgIFwidGlja1ZhbHVlc1wiOiBbMzJdLFxuICAgIFwic2V0Rm9jdXNcIjogWzY0XVxuICB9LCBbWzAsIFwia2V5ZG93blwiLCBcImtleURvd25IYW5kbGVyXCJdLCBbMSwgXCJwb2ludGVyZG93blwiLCBcInBvaW50ZXJEb3duSGFuZGxlclwiXV1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1zbGlkZXJcIiwgXCJjYWxjaXRlLWdyYXBoXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLXNsaWRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIFNsaWRlcik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1ncmFwaFwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlU2xpZGVyID0gU2xpZGVyO1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IGRlZmluZUN1c3RvbUVsZW1lbnQkMTtcblxuZXhwb3J0IHsgQ2FsY2l0ZVNsaWRlciwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgZm9yY2VVcGRhdGUsIGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcblxuLyoqXG4gKiBDYWxjdWxhdGUgc2xvcGUgb2YgdGhlIHRhbmdlbnRzXG4gKiB1c2VzIFN0ZWZmZW4gaW50ZXJwb2xhdGlvbiBhcyBpdCdzIG1vbm90b25pY1xuICogaHR0cDovL2pyd2Fsc2gxLmdpdGh1Yi5pby9wb3N0cy9pbnRlcnBvbGF0aW9ucy9cbiAqXG4gKiBAcGFyYW0gcDBcbiAqIEBwYXJhbSBwMVxuICogQHBhcmFtIHAyXG4gKi9cbmZ1bmN0aW9uIHNsb3BlKHAwLCBwMSwgcDIpIHtcbiAgY29uc3QgZHggPSBwMVswXSAtIHAwWzBdO1xuICBjb25zdCBkeDEgPSBwMlswXSAtIHAxWzBdO1xuICBjb25zdCBkeSA9IHAxWzFdIC0gcDBbMV07XG4gIGNvbnN0IGR5MSA9IHAyWzFdIC0gcDFbMV07XG4gIGNvbnN0IG0gPSBkeSAvIChkeCB8fCAoZHgxIDwgMCAmJiAwKSk7XG4gIGNvbnN0IG0xID0gZHkxIC8gKGR4MSB8fCAoZHggPCAwICYmIDApKTtcbiAgY29uc3QgcCA9IChtICogZHgxICsgbTEgKiBkeCkgLyAoZHggKyBkeDEpO1xuICByZXR1cm4gKE1hdGguc2lnbihtKSArIE1hdGguc2lnbihtMSkpICogTWF0aC5taW4oTWF0aC5hYnMobSksIE1hdGguYWJzKG0xKSwgMC41ICogTWF0aC5hYnMocCkpIHx8IDA7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBzbG9wZSBmb3IganVzdCBvbmUgdGFuZ2VudCAoc2luZ2xlLXNpZGVkKVxuICpcbiAqIEBwYXJhbSBwMFxuICogQHBhcmFtIHAxXG4gKiBAcGFyYW0gbVxuICovXG5mdW5jdGlvbiBzbG9wZVNpbmdsZShwMCwgcDEsIG0pIHtcbiAgY29uc3QgZHggPSBwMVswXSAtIHAwWzBdO1xuICBjb25zdCBkeSA9IHAxWzFdIC0gcDBbMV07XG4gIHJldHVybiBkeCA/ICgoMyAqIGR5KSAvIGR4IC0gbSkgLyAyIDogbTtcbn1cbi8qKlxuICogR2l2ZW4gdHdvIHBvaW50cyBhbmQgdGhlaXIgdGFuZ2VudCBzbG9wZXMsXG4gKiBjYWxjdWxhdGUgdGhlIGJlemllciBoYW5kbGUgY29vcmRpbmF0ZXMgYW5kIHJldHVybiBkcmF3IGNvbW1hbmQuXG4gKlxuICogVHJhbnNsYXRlcyBIZXJtaXRlIFNwbGluZSB0byBCw6l6aWVyIGN1cnZlOlxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDI1NzQ5NDAvXG4gKlxuICogQHBhcmFtIHAwXG4gKiBAcGFyYW0gcDFcbiAqIEBwYXJhbSBtMFxuICogQHBhcmFtIG0xXG4gKiBAcGFyYW0gdFxuICovXG5mdW5jdGlvbiBiZXppZXIocDAsIHAxLCBtMCwgbTEsIHQpIHtcbiAgY29uc3QgW3gwLCB5MF0gPSBwMDtcbiAgY29uc3QgW3gxLCB5MV0gPSBwMTtcbiAgY29uc3QgZHggPSAoeDEgLSB4MCkgLyAzO1xuICBjb25zdCBoMSA9IHQoW3gwICsgZHgsIHkwICsgZHggKiBtMF0pLmpvaW4oXCIsXCIpO1xuICBjb25zdCBoMiA9IHQoW3gxIC0gZHgsIHkxIC0gZHggKiBtMV0pLmpvaW4oXCIsXCIpO1xuICBjb25zdCBwID0gdChbeDEsIHkxXSkuam9pbihcIixcIik7XG4gIHJldHVybiBgQyAke2gxfSAke2gyfSAke3B9YDtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBmdW5jdGlvbiB3aGljaCB3aWxsIHRyYW5zbGF0ZSBhIHBvaW50XG4gKiBmcm9tIHRoZSBkYXRhIGNvb3JkaW5hdGUgc3BhY2UgdG8gc3ZnIHZpZXdib3ggb3JpZW50ZWQgcGl4ZWxzXG4gKlxuICogQHBhcmFtIHJvb3QwXG4gKiBAcGFyYW0gcm9vdDAud2lkdGhcbiAqIEBwYXJhbSByb290MC5oZWlnaHRcbiAqIEBwYXJhbSByb290MC5taW5cbiAqIEBwYXJhbSByb290MC5tYXhcbiAqL1xuZnVuY3Rpb24gdHJhbnNsYXRlKHsgd2lkdGgsIGhlaWdodCwgbWluLCBtYXggfSkge1xuICBjb25zdCByYW5nZVggPSBtYXhbMF0gLSBtaW5bMF07XG4gIGNvbnN0IHJhbmdlWSA9IG1heFsxXSAtIG1pblsxXTtcbiAgcmV0dXJuIChwb2ludCkgPT4ge1xuICAgIGNvbnN0IHggPSAoKHBvaW50WzBdIC0gbWluWzBdKSAvIHJhbmdlWCkgKiB3aWR0aDtcbiAgICBjb25zdCB5ID0gaGVpZ2h0IC0gKHBvaW50WzFdIC8gcmFuZ2VZKSAqIGhlaWdodDtcbiAgICByZXR1cm4gW3gsIHldO1xuICB9O1xufVxuLyoqXG4gKiBHZXQgdGhlIG1pbiBhbmQgbWF4IHZhbHVlcyBmcm9tIHRoZSBkYXRhc2V0XG4gKlxuICogQHBhcmFtIGRhdGFcbiAqL1xuZnVuY3Rpb24gcmFuZ2UoZGF0YSkge1xuICBjb25zdCBbc3RhcnRYLCBzdGFydFldID0gZGF0YVswXTtcbiAgY29uc3QgbWluID0gW3N0YXJ0WCwgc3RhcnRZXTtcbiAgY29uc3QgbWF4ID0gW3N0YXJ0WCwgc3RhcnRZXTtcbiAgcmV0dXJuIGRhdGEucmVkdWNlKCh7IG1pbiwgbWF4IH0sIFt4LCB5XSkgPT4gKHtcbiAgICBtaW46IFtNYXRoLm1pbihtaW5bMF0sIHgpLCBNYXRoLm1pbihtaW5bMV0sIHkpXSxcbiAgICBtYXg6IFtNYXRoLm1heChtYXhbMF0sIHgpLCBNYXRoLm1heChtYXhbMV0sIHkpXSxcbiAgfSksIHsgbWluLCBtYXggfSk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGRyYXdpbmcgY29tbWFuZHMgZm9yIGFuIGFyZWEgZ3JhcGhcbiAqIHJldHVybnMgYSBzdHJpbmcgY2FuIGNhbiBiZSBwYXNzZWQgZGlyZWN0bHkgdG8gYSBwYXRoIGVsZW1lbnQncyBgZGAgYXR0cmlidXRlXG4gKlxuICogQHBhcmFtIHJvb3QwXG4gKiBAcGFyYW0gcm9vdDAuZGF0YVxuICogQHBhcmFtIHJvb3QwLm1pblxuICogQHBhcmFtIHJvb3QwLm1heFxuICogQHBhcmFtIHJvb3QwLnRcbiAqL1xuZnVuY3Rpb24gYXJlYSh7IGRhdGEsIG1pbiwgbWF4LCB0IH0pIHtcbiAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgLy8gaW1wb3J0YW50IHBvaW50cyBmb3IgYmVnaW5uaW5nIGFuZCBlbmRpbmcgdGhlIHBhdGhcbiAgY29uc3QgW3N0YXJ0WCwgc3RhcnRZXSA9IHQoZGF0YVswXSk7XG4gIGNvbnN0IFttaW5YLCBtaW5ZXSA9IHQobWluKTtcbiAgY29uc3QgW21heFhdID0gdChtYXgpO1xuICAvLyBrZWVwIHRyYWNrIG9mIHByZXZpb3VzIHNsb3BlL3BvaW50c1xuICBsZXQgbTtcbiAgbGV0IHAwO1xuICBsZXQgcDE7XG4gIC8vIGl0ZXJhdGUgb3ZlciBkYXRhIHBvaW50cywgY2FsY3VsYXRpbmcgY29tbWFuZCBmb3IgZWFjaFxuICBjb25zdCBjb21tYW5kcyA9IGRhdGEucmVkdWNlKChhY2MsIHBvaW50LCBpKSA9PiB7XG4gICAgcDAgPSBkYXRhW2kgLSAyXTtcbiAgICBwMSA9IGRhdGFbaSAtIDFdO1xuICAgIGlmIChpID4gMSkge1xuICAgICAgY29uc3QgbTEgPSBzbG9wZShwMCwgcDEsIHBvaW50KTtcbiAgICAgIGNvbnN0IG0wID0gbSA9PT0gdW5kZWZpbmVkID8gc2xvcGVTaW5nbGUocDAsIHAxLCBtMSkgOiBtO1xuICAgICAgY29uc3QgY29tbWFuZCA9IGJlemllcihwMCwgcDEsIG0wLCBtMSwgdCk7XG4gICAgICBtID0gbTE7XG4gICAgICByZXR1cm4gYCR7YWNjfSAke2NvbW1hbmR9YDtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwgYE0gJHttaW5YfSwke21pbll9IEwgJHttaW5YfSwke3N0YXJ0WX0gTCAke3N0YXJ0WH0sJHtzdGFydFl9YCk7XG4gIC8vIGNsb3NlIHRoZSBwYXRoXG4gIGNvbnN0IGxhc3QgPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV07XG4gIGNvbnN0IGVuZCA9IGJlemllcihwMSwgbGFzdCwgbSwgc2xvcGVTaW5nbGUocDEsIGxhc3QsIG0pLCB0KTtcbiAgcmV0dXJuIGAke2NvbW1hbmRzfSAke2VuZH0gTCAke21heFh9LCR7bWluWX0gWmA7XG59XG5cbmNvbnN0IGdyYXBoQ3NzID0gXCI6aG9zdHtkaXNwbGF5OmJsb2NrO2Jsb2NrLXNpemU6MTAwJX0uc3Zne2ZpbGw6Y3VycmVudENvbG9yO3N0cm9rZTp0cmFuc3BhcmVudDttYXJnaW46MHB4O2Rpc3BsYXk6YmxvY2s7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7cGFkZGluZzowcHh9LnN2ZyAuZ3JhcGgtcGF0aC0taGlnaGxpZ2h0e2ZpbGw6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7b3BhY2l0eTowLjV9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IEdyYXBoID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmdyYXBoSWQgPSBgY2FsY2l0ZS1ncmFwaC0ke2d1aWQoKX1gO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcInJlc2l6ZVwiLCAoKSA9PiBmb3JjZVVwZGF0ZSh0aGlzKSk7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5jb2xvclN0b3BzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGlnaGxpZ2h0TWluID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGlnaGxpZ2h0TWF4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWluID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWF4ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/Lm9ic2VydmUodGhpcy5lbCk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEsIGNvbG9yU3RvcHMsIGVsLCBoaWdobGlnaHRNYXgsIGhpZ2hsaWdodE1pbiwgbWluLCBtYXggfSA9IHRoaXM7XG4gICAgY29uc3QgaWQgPSB0aGlzLmdyYXBoSWQ7XG4gICAgY29uc3QgeyBjbGllbnRIZWlnaHQ6IGhlaWdodCwgY2xpZW50V2lkdGg6IHdpZHRoIH0gPSBlbDtcbiAgICAvLyBpZiB3ZSBoYXZlIG5vIGRhdGEsIHJldHVybiBlbXB0eSBzdmdcbiAgICBpZiAoIWRhdGEgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAoaChcInN2Z1wiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBcInN2Z1wiLCBoZWlnaHQ6IGhlaWdodCwgcHJlc2VydmVBc3BlY3RSYXRpbzogXCJub25lXCIsIHZpZXdCb3g6IGAwIDAgJHt3aWR0aH0gJHtoZWlnaHR9YCwgd2lkdGg6IHdpZHRoIH0pKTtcbiAgICB9XG4gICAgY29uc3QgeyBtaW46IHJhbmdlTWluLCBtYXg6IHJhbmdlTWF4IH0gPSByYW5nZShkYXRhKTtcbiAgICBsZXQgY3VycmVudE1pbiA9IHJhbmdlTWluO1xuICAgIGxldCBjdXJyZW50TWF4ID0gcmFuZ2VNYXg7XG4gICAgaWYgKG1pbiA8IHJhbmdlTWluWzBdIHx8IG1pbiA+IHJhbmdlTWluWzBdKSB7XG4gICAgICBjdXJyZW50TWluID0gW21pbiwgMF07XG4gICAgfVxuICAgIGlmIChtYXggPiByYW5nZU1heFswXSB8fCBtYXggPCByYW5nZU1heFswXSkge1xuICAgICAgY3VycmVudE1heCA9IFttYXgsIHJhbmdlTWF4WzFdXTtcbiAgICB9XG4gICAgY29uc3QgdCA9IHRyYW5zbGF0ZSh7IG1pbjogY3VycmVudE1pbiwgbWF4OiBjdXJyZW50TWF4LCB3aWR0aCwgaGVpZ2h0IH0pO1xuICAgIGNvbnN0IFtoTWluWF0gPSB0KFtoaWdobGlnaHRNaW4sIGN1cnJlbnRNYXhbMV1dKTtcbiAgICBjb25zdCBbaE1heFhdID0gdChbaGlnaGxpZ2h0TWF4LCBjdXJyZW50TWF4WzFdXSk7XG4gICAgY29uc3QgYXJlYVBhdGggPSBhcmVhKHsgZGF0YSwgbWluOiByYW5nZU1pbiwgbWF4OiByYW5nZU1heCwgdCB9KTtcbiAgICBjb25zdCBmaWxsID0gY29sb3JTdG9wcyA/IGB1cmwoI2xpbmVhci1ncmFkaWVudC0ke2lkfSlgIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiAoaChcInN2Z1wiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBcInN2Z1wiLCBoZWlnaHQ6IGhlaWdodCwgcHJlc2VydmVBc3BlY3RSYXRpbzogXCJub25lXCIsIHZpZXdCb3g6IGAwIDAgJHt3aWR0aH0gJHtoZWlnaHR9YCwgd2lkdGg6IHdpZHRoIH0sIGNvbG9yU3RvcHMgPyAoaChcImRlZnNcIiwgbnVsbCwgaChcImxpbmVhckdyYWRpZW50XCIsIHsgaWQ6IGBsaW5lYXItZ3JhZGllbnQtJHtpZH1gLCB4MTogXCIwXCIsIHgyOiBcIjFcIiwgeTE6IFwiMFwiLCB5MjogXCIwXCIgfSwgY29sb3JTdG9wcy5tYXAoKHsgb2Zmc2V0LCBjb2xvciwgb3BhY2l0eSB9KSA9PiAoaChcInN0b3BcIiwgeyBvZmZzZXQ6IGAke29mZnNldCAqIDEwMH0lYCwgXCJzdG9wLWNvbG9yXCI6IGNvbG9yLCBcInN0b3Atb3BhY2l0eVwiOiBvcGFjaXR5IH0pKSkpKSkgOiBudWxsLCBoaWdobGlnaHRNaW4gIT09IHVuZGVmaW5lZCA/IChbXG4gICAgICBoKFwibWFza1wiLCB7IGhlaWdodDogXCIxMDAlXCIsIGlkOiBgJHtpZH0xYCwgd2lkdGg6IFwiMTAwJVwiLCB4OiBcIjAlXCIsIHk6IFwiMCVcIiB9LCBoKFwicGF0aFwiLCB7IGQ6IGBcbiAgICAgICAgICAgIE0gMCwwXG4gICAgICAgICAgICBMICR7aE1pblggLSAxfSwwXG4gICAgICAgICAgICBMICR7aE1pblggLSAxfSwke2hlaWdodH1cbiAgICAgICAgICAgIEwgMCwke2hlaWdodH1cbiAgICAgICAgICAgIFpcbiAgICAgICAgICBgLCBmaWxsOiBcIndoaXRlXCIgfSkpLFxuICAgICAgaChcIm1hc2tcIiwgeyBoZWlnaHQ6IFwiMTAwJVwiLCBpZDogYCR7aWR9MmAsIHdpZHRoOiBcIjEwMCVcIiwgeDogXCIwJVwiLCB5OiBcIjAlXCIgfSwgaChcInBhdGhcIiwgeyBkOiBgXG4gICAgICAgICAgICBNICR7aE1pblggKyAxfSwwXG4gICAgICAgICAgICBMICR7aE1heFggLSAxfSwwXG4gICAgICAgICAgICBMICR7aE1heFggLSAxfSwke2hlaWdodH1cbiAgICAgICAgICAgIEwgJHtoTWluWCArIDF9LCAke2hlaWdodH1cbiAgICAgICAgICAgIFpcbiAgICAgICAgICBgLCBmaWxsOiBcIndoaXRlXCIgfSkpLFxuICAgICAgaChcIm1hc2tcIiwgeyBoZWlnaHQ6IFwiMTAwJVwiLCBpZDogYCR7aWR9M2AsIHdpZHRoOiBcIjEwMCVcIiwgeDogXCIwJVwiLCB5OiBcIjAlXCIgfSwgaChcInBhdGhcIiwgeyBkOiBgXG4gICAgICAgICAgICAgICAgTSAke2hNYXhYICsgMX0sMFxuICAgICAgICAgICAgICAgIEwgJHt3aWR0aH0sMFxuICAgICAgICAgICAgICAgIEwgJHt3aWR0aH0sJHtoZWlnaHR9XG4gICAgICAgICAgICAgICAgTCAke2hNYXhYICsgMX0sICR7aGVpZ2h0fVxuICAgICAgICAgICAgICAgIFpcbiAgICAgICAgICAgICAgYCwgZmlsbDogXCJ3aGl0ZVwiIH0pKSxcbiAgICAgIGgoXCJwYXRoXCIsIHsgY2xhc3M6IFwiZ3JhcGgtcGF0aFwiLCBkOiBhcmVhUGF0aCwgZmlsbDogZmlsbCwgbWFzazogYHVybCgjJHtpZH0xKWAgfSksXG4gICAgICBoKFwicGF0aFwiLCB7IGNsYXNzOiBcImdyYXBoLXBhdGgtLWhpZ2hsaWdodFwiLCBkOiBhcmVhUGF0aCwgZmlsbDogZmlsbCwgbWFzazogYHVybCgjJHtpZH0yKWAgfSksXG4gICAgICBoKFwicGF0aFwiLCB7IGNsYXNzOiBcImdyYXBoLXBhdGhcIiwgZDogYXJlYVBhdGgsIGZpbGw6IGZpbGwsIG1hc2s6IGB1cmwoIyR7aWR9MylgIH0pLFxuICAgIF0pIDogKGgoXCJwYXRoXCIsIHsgY2xhc3M6IFwiZ3JhcGgtcGF0aFwiLCBkOiBhcmVhUGF0aCwgZmlsbDogZmlsbCB9KSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBncmFwaENzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1ncmFwaFwiLCB7XG4gICAgXCJkYXRhXCI6IFsxNl0sXG4gICAgXCJjb2xvclN0b3BzXCI6IFsxNl0sXG4gICAgXCJoaWdobGlnaHRNaW5cIjogWzIsIFwiaGlnaGxpZ2h0LW1pblwiXSxcbiAgICBcImhpZ2hsaWdodE1heFwiOiBbMiwgXCJoaWdobGlnaHQtbWF4XCJdLFxuICAgIFwibWluXCI6IFs1MTRdLFxuICAgIFwibWF4XCI6IFs1MTRdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtZ3JhcGhcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtZ3JhcGhcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBHcmFwaCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgR3JhcGggYXMgRywgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBCdWlsZCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuZnVuY3Rpb24gZ2V0VXNlckFnZW50RGF0YSgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnREYXRhO1xufVxuZnVuY3Rpb24gZ2V0VXNlckFnZW50U3RyaW5nKCkge1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIGNvbnN0IHVhRGF0YSA9IGdldFVzZXJBZ2VudERhdGEoKTtcbiAgcmV0dXJuIHVhRGF0YT8uYnJhbmRzXG4gICAgPyB1YURhdGEuYnJhbmRzLm1hcCgoeyBicmFuZCwgdmVyc2lvbiB9KSA9PiBgJHticmFuZH0vJHt2ZXJzaW9ufWApLmpvaW4oXCIgXCIpXG4gICAgOiBuYXZpZ2F0b3IudXNlckFnZW50O1xufVxuXG4vLyDimqDvuI8gYnJvd3Nlci1zbmlmZmluZyBpcyBub3QgYSBiZXN0IHByYWN0aWNlIGFuZCBzaG91bGQgYmUgYXZvaWRlZCDimqDvuI9cbmNvbnN0IGlzRmlyZWZveCA9IC9maXJlZm94L2kudGVzdChnZXRVc2VyQWdlbnRTdHJpbmcoKSk7XG5jb25zdCBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudCA9IGlzRmlyZWZveFxuICA/IG5ldyBXZWFrTWFwKClcbiAgOiBudWxsO1xuZnVuY3Rpb24gaW50ZXJjZXB0ZWRDbGljaygpIHtcbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdGhpcztcbiAgaWYgKCFkaXNhYmxlZCkge1xuICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljay5jYWxsKHRoaXMpO1xuICB9XG59XG5mdW5jdGlvbiBvblBvaW50ZXJEb3duKGV2ZW50KSB7XG4gIGNvbnN0IGludGVyYWN0aXZlRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgaWYgKGlzRmlyZWZveCAmJiAhaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGludGVyYWN0aXZlRWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gaW50ZXJhY3RpdmVFbGVtZW50O1xuICBpZiAoZGlzYWJsZWQpIHtcbiAgICAvLyBwcmV2ZW50IGNsaWNrIGZyb20gbW92aW5nIGZvY3VzIG9uIGhvc3RcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5jb25zdCBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzID0gW1wibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcImNsaWNrXCJdO1xuZnVuY3Rpb24gb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQoZXZlbnQpIHtcbiAgaWYgKGlzRmlyZWZveCAmJiAhaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGV2ZW50LnRhcmdldCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gZXZlbnQudGFyZ2V0O1xuICAvLyBwcmV2ZW50IGRpc2FsbG93ZWQgbW91c2UgZXZlbnRzIGZyb20gYmVpbmcgZW1pdHRlZCBvbiB0aGUgZGlzYWJsZWQgaG9zdCAocGVyIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvaHRtbC9pc3N1ZXMvNTg4NilcbiAgLy/imqAgd2UgZ2VuZXJhbGx5IGF2b2lkIHN0b3BwaW5nIHByb3BhZ2F0aW9uIG9mIGV2ZW50cywgYnV0IHRoaXMgaXMgbmVlZGVkIHRvIGFkaGVyZSB0byB0aGUgaW50ZW5kZWQgc3BlYyBjaGFuZ2VzIGFib3ZlIOKaoFxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5jb25zdCBjYXB0dXJlT25seU9wdGlvbnMgPSB7IGNhcHR1cmU6IHRydWUgfTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXBkYXRlcyB0aGUgaG9zdCBlbGVtZW50IHRvIHByZXZlbnQga2V5Ym9hcmQgaW50ZXJhY3Rpb24gb24gaXRzIHN1YnRyZWUgYW5kIHNldHMgdGhlIGFwcHJvcHJpYXRlIGFyaWEgYXR0cmlidXRlIGZvciBhY2Nlc3NpYmlsaXR5LlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRSZW5kZXJgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqICoqTm90ZXMqKlxuICpcbiAqIHRoaXMgdXRpbCBpcyBub3QgbmVlZGVkIGZvciBzaW1wbGUgY29tcG9uZW50cyB3aG9zZSByb290IGVsZW1lbnQgb3IgZWxlbWVudHMgYXJlIGFuIGludGVyYWN0aXZlIGNvbXBvbmVudCAoY3VzdG9tIGVsZW1lbnQgb3IgbmF0aXZlIGNvbnRyb2wpLiBGb3IgdGhvc2UgY2FzZXMsIHNldCB0aGUgYGRpc2FibGVkYCBwcm9wcyBvbiB0aGUgcm9vdCBjb21wb25lbnRzIGluc3RlYWQuXG4gKiB0ZWNobmljYWxseSwgdXNlcnMgY2FuIG92ZXJyaWRlIGB0YWJpbmRleGAgYW5kIHJlc3RvcmUga2V5Ym9hcmQgbmF2aWdhdGlvbiwgYnV0IHRoaXMgd2lsbCBiZSBjb25zaWRlcmVkIHVzZXIgZXJyb3JcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gaG9zdElzVGFiYmFibGUg4oCTIHdoZW4gc2V0IHRvIHRydWUgb3IgaXRzIHByZWRpY2F0ZSByZXR1cm5zIHRydWUsIHRoZSBob3N0IGlzIHRhYmJhYmxlIGFuZCB3aWxsIGJlIG1hbmFnZWQgYnkgdGhlIGhlbHBlci4gU2V0IHRvIFwibWFuYWdlZFwiIGZvciBjYXNlcyB3aGVyZSBhIGNvbXBvbmVudCdzIHBhcmVudCBkZXRlcm1pbmVzIHdoaWNoIGl0ZW0gaXMgdGFiYmFibGUgKGkuZS4sIHNldHMgYHRhYmluZGV4YCB0byBhbGxvdyB0YWJiaW5nKS5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlSG9zdEludGVyYWN0aW9uKGNvbXBvbmVudCwgaG9zdElzVGFiYmFibGUgPSBmYWxzZSkge1xuICBpZiAoY29tcG9uZW50LmRpc2FibGVkKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xuICAgIGlmIChjb21wb25lbnQuZWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgICBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpO1xuICBpZiAodHlwZW9mIGhvc3RJc1RhYmJhYmxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgaG9zdElzVGFiYmFibGUuY2FsbChjb21wb25lbnQpID8gXCIwXCIgOiBcIi0xXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSB0cnVlKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gZmFsc2UpIHtcbiAgICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gIH1cbiAgZWxzZSA7XG4gIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIpO1xufVxuZnVuY3Rpb24gYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmVsLmNsaWNrID0gaW50ZXJjZXB0ZWRDbGljaztcbiAgYWRkSW50ZXJhY3Rpb25MaXN0ZW5lcnMoaXNGaXJlZm94ID8gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIDogY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIGFkZEludGVyYWN0aW9uTGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgLy8gdGhpcyBwYXRoIGlzIG9ubHkgYXBwbGljYWJsZSB0byBGaXJlZm94XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG9uUG9pbnRlckRvd24sIGNhcHR1cmVPbmx5T3B0aW9ucyk7XG4gIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xufVxuZnVuY3Rpb24gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIHtcbiAgcmV0dXJuIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCkge1xuICBkZWxldGUgY29tcG9uZW50LmVsLmNsaWNrOyAvLyBmYWxsYmFjayBvbiBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2tcbiAgcmVtb3ZlSW50ZXJhY3Rpb25MaXN0ZW5lcnMoaXNGaXJlZm94ID8gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIDogY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUludGVyYWN0aW9uTGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgLy8gdGhpcyBwYXRoIGlzIG9ubHkgYXBwbGljYWJsZSB0byBGaXJlZm94XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG9uUG9pbnRlckRvd24sIGNhcHR1cmVPbmx5T3B0aW9ucyk7XG4gIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgaGVscHMgZGlzYWJsZSBjb21wb25lbnRzIGNvbnNpc3RlbnRseSBpbiBGaXJlZm94LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgIGFuZCBpcyBvbmx5IG5lZWRlZCBmb3IgRmlyZWZveCBhcyBpdCBkb2VzIG5vdCBjYWxsIGNhcHR1cmUgZXZlbnQgbGlzdGVuZXJzIGJlZm9yZSBub24tY2FwdHVyZSBvbmVzIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTczMTUwNCkuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0SW50ZXJhY3RpdmUoY29tcG9uZW50KSB7XG4gIGlmICghY29tcG9uZW50LmRpc2FibGVkIHx8ICFpc0ZpcmVmb3gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcGFyZW50ID0gY29tcG9uZW50LmVsLnBhcmVudEVsZW1lbnQgfHwgY29tcG9uZW50LmVsOyAvKiBhc3N1bWUgZWxlbWVudCBpcyBob3N0IGlmIGl0IGhhcyBubyBwYXJlbnQgd2hlbiBjb25uZWN0ZWQgKi9cbiAgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuc2V0KGNvbXBvbmVudC5lbCwgcGFyZW50KTtcbiAgYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgcmVzdG9yZXMgaW50ZXJhY3Rpdml0eSB0byBkaXNhYmxlZCBjb21wb25lbnRzIGNvbnNpc3RlbnRseSBpbiBGaXJlZm94LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2tgIGFuZCBpcyBvbmx5IG5lZWRlZCBmb3IgRmlyZWZveCBhcyBpdCBkb2VzIG5vdCBjYWxsIGNhcHR1cmUgZXZlbnQgbGlzdGVuZXJzIGJlZm9yZSBub24tY2FwdHVyZSBvbmVzIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTczMTUwNCkuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0SW50ZXJhY3RpdmUoY29tcG9uZW50KSB7XG4gIGlmICghaXNGaXJlZm94KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFsd2F5cyByZW1vdmUgb24gZGlzY29ubmVjdCBhcyByZW5kZXIgb3IgY29ubmVjdCB3aWxsIHJlc3RvcmUgaXRcbiAgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZGVsZXRlKGNvbXBvbmVudC5lbCk7XG4gIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpO1xufVxuXG5leHBvcnQgeyBjb25uZWN0SW50ZXJhY3RpdmUgYXMgYywgZGlzY29ubmVjdEludGVyYWN0aXZlIGFzIGQsIGdldFVzZXJBZ2VudFN0cmluZyBhcyBnLCB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gYXMgdSB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgeSBhcyBpc0JlZm9yZSwgcSBhcyBxdWVyeUVsZW1lbnRSb290cywgYyBhcyBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkgfSBmcm9tICcuL2RvbS5qcyc7XG5cbi8qKlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seVxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5jb25zdCBsYWJlbENsaWNrRXZlbnQgPSBcImNhbGNpdGVJbnRlcm5hbExhYmVsQ2xpY2tcIjtcbmNvbnN0IGxhYmVsQ29ubmVjdGVkRXZlbnQgPSBcImNhbGNpdGVJbnRlcm5hbExhYmVsQ29ubmVjdGVkXCI7XG5jb25zdCBsYWJlbERpc2Nvbm5lY3RlZEV2ZW50ID0gXCJjYWxjaXRlSW50ZXJuYWxMYWJlbERpc2Nvbm5lY3RlZFwiO1xuY29uc3QgbGFiZWxUYWdOYW1lID0gXCJjYWxjaXRlLWxhYmVsXCI7XG5jb25zdCBsYWJlbFRvTGFiZWxhYmxlcyA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBvbkxhYmVsQ2xpY2tNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3Qgb25MYWJlbENvbm5lY3RlZE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBvbkxhYmVsRGlzY29ubmVjdGVkTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHVubGFiZWxlZENvbXBvbmVudHMgPSBuZXcgV2Vha1NldCgpO1xuY29uc3QgZmluZExhYmVsRm9yQ29tcG9uZW50ID0gKGNvbXBvbmVudEVsKSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IGNvbXBvbmVudEVsO1xuICBjb25zdCBmb3JMYWJlbCA9IGlkICYmIHF1ZXJ5RWxlbWVudFJvb3RzKGNvbXBvbmVudEVsLCB7IHNlbGVjdG9yOiBgJHtsYWJlbFRhZ05hbWV9W2Zvcj1cIiR7aWR9XCJdYCB9KTtcbiAgaWYgKGZvckxhYmVsKSB7XG4gICAgcmV0dXJuIGZvckxhYmVsO1xuICB9XG4gIGNvbnN0IHBhcmVudExhYmVsID0gY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5KGNvbXBvbmVudEVsLCBsYWJlbFRhZ05hbWUpO1xuICBpZiAoIXBhcmVudExhYmVsIHx8XG4gICAgLy8gbGFiZWxhYmxlIGNvbXBvbmVudHMgd2l0aGluIG90aGVyIGN1c3RvbSBlbGVtZW50cyBhcmUgbm90IGNvbnNpZGVyZWQgbGFiZWxhYmxlXG4gICAgaGFzQW5jZXN0b3JDdXN0b21FbGVtZW50cyhwYXJlbnRMYWJlbCwgY29tcG9uZW50RWwpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHBhcmVudExhYmVsO1xufTtcbmZ1bmN0aW9uIGhhc0FuY2VzdG9yQ3VzdG9tRWxlbWVudHMobGFiZWwsIGNvbXBvbmVudEVsKSB7XG4gIGxldCB0cmF2ZXJzZWRFbGVtZW50cztcbiAgY29uc3QgY3VzdG9tRWxlbWVudEFuY2VzdG9yQ2hlY2tFdmVudFR5cGUgPSBcImN1c3RvbS1lbGVtZW50LWFuY2VzdG9yLWNoZWNrXCI7XG4gIGNvbnN0IGxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG4gICAgdHJhdmVyc2VkRWxlbWVudHMgPSBjb21wb3NlZFBhdGguc2xpY2UoY29tcG9zZWRQYXRoLmluZGV4T2YoY29tcG9uZW50RWwpLCBjb21wb3NlZFBhdGguaW5kZXhPZihsYWJlbCkpO1xuICB9O1xuICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKGN1c3RvbUVsZW1lbnRBbmNlc3RvckNoZWNrRXZlbnRUeXBlLCBsaXN0ZW5lciwgeyBvbmNlOiB0cnVlIH0pO1xuICBjb21wb25lbnRFbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChjdXN0b21FbGVtZW50QW5jZXN0b3JDaGVja0V2ZW50VHlwZSwgeyBjb21wb3NlZDogdHJ1ZSwgYnViYmxlczogdHJ1ZSB9KSk7XG4gIGxhYmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoY3VzdG9tRWxlbWVudEFuY2VzdG9yQ2hlY2tFdmVudFR5cGUsIGxpc3RlbmVyKTtcbiAgY29uc3QgYW5jZXN0b3JDdXN0b21FbGVtZW50cyA9IHRyYXZlcnNlZEVsZW1lbnRzXG4gICAgLmZpbHRlcigoZWwpID0+IGVsICE9PSBjb21wb25lbnRFbCAmJiBlbCAhPT0gbGFiZWwpXG4gICAgLmZpbHRlcigoZWwpID0+IGVsLnRhZ05hbWU/LmluY2x1ZGVzKFwiLVwiKSk7XG4gIHJldHVybiBhbmNlc3RvckN1c3RvbUVsZW1lbnRzLmxlbmd0aCA+IDA7XG59XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgbGFiZWwgaW50ZXJhY3Rpb25zIG9uIGNvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdExhYmVsKGNvbXBvbmVudCkge1xuICBjb25zdCBsYWJlbEVsID0gZmluZExhYmVsRm9yQ29tcG9uZW50KGNvbXBvbmVudC5lbCk7XG4gIGlmICgob25MYWJlbENsaWNrTWFwLmhhcyhsYWJlbEVsKSAmJiBsYWJlbEVsID09PSBjb21wb25lbnQubGFiZWxFbCkgfHxcbiAgICAoIWxhYmVsRWwgJiYgdW5sYWJlbGVkQ29tcG9uZW50cy5oYXMoY29tcG9uZW50KSkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgYm91bmRPbkxhYmVsRGlzY29ubmVjdGVkID0gb25MYWJlbERpc2Nvbm5lY3RlZC5iaW5kKGNvbXBvbmVudCk7XG4gIGlmIChsYWJlbEVsKSB7XG4gICAgY29tcG9uZW50LmxhYmVsRWwgPSBsYWJlbEVsO1xuICAgIGNvbnN0IGxhYmVsYWJsZXMgPSBsYWJlbFRvTGFiZWxhYmxlcy5nZXQobGFiZWxFbCkgfHwgW107XG4gICAgbGFiZWxhYmxlcy5wdXNoKGNvbXBvbmVudCk7XG4gICAgbGFiZWxUb0xhYmVsYWJsZXMuc2V0KGxhYmVsRWwsIGxhYmVsYWJsZXMuc29ydChzb3J0QnlET01PcmRlcikpO1xuICAgIGlmICghb25MYWJlbENsaWNrTWFwLmhhcyhjb21wb25lbnQubGFiZWxFbCkpIHtcbiAgICAgIG9uTGFiZWxDbGlja01hcC5zZXQoY29tcG9uZW50LmxhYmVsRWwsIG9uTGFiZWxDbGljayk7XG4gICAgICBjb21wb25lbnQubGFiZWxFbC5hZGRFdmVudExpc3RlbmVyKGxhYmVsQ2xpY2tFdmVudCwgb25MYWJlbENsaWNrKTtcbiAgICB9XG4gICAgdW5sYWJlbGVkQ29tcG9uZW50cy5kZWxldGUoY29tcG9uZW50KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsQ29ubmVjdGVkRXZlbnQsIG9uTGFiZWxDb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICAgIG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAuc2V0KGNvbXBvbmVudCwgYm91bmRPbkxhYmVsRGlzY29ubmVjdGVkKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGxhYmVsRGlzY29ubmVjdGVkRXZlbnQsIGJvdW5kT25MYWJlbERpc2Nvbm5lY3RlZCk7XG4gIH1cbiAgZWxzZSBpZiAoIXVubGFiZWxlZENvbXBvbmVudHMuaGFzKGNvbXBvbmVudCkpIHtcbiAgICBib3VuZE9uTGFiZWxEaXNjb25uZWN0ZWQoKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsRGlzY29ubmVjdGVkRXZlbnQsIG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICB9XG59XG4vKipcbiAqIEhlbHBlciB0byB0ZWFyIGRvd24gbGFiZWwgaW50ZXJhY3Rpb25zIG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrIG9uIGxhYmVsYWJsZSBjb21wb25lbnRzLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdExhYmVsKGNvbXBvbmVudCkge1xuICB1bmxhYmVsZWRDb21wb25lbnRzLmRlbGV0ZShjb21wb25lbnQpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsQ29ubmVjdGVkRXZlbnQsIG9uTGFiZWxDb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsRGlzY29ubmVjdGVkRXZlbnQsIG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICBvbkxhYmVsQ29ubmVjdGVkTWFwLmRlbGV0ZShjb21wb25lbnQpO1xuICBvbkxhYmVsRGlzY29ubmVjdGVkTWFwLmRlbGV0ZShjb21wb25lbnQpO1xuICBpZiAoIWNvbXBvbmVudC5sYWJlbEVsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGxhYmVsYWJsZXMgPSBsYWJlbFRvTGFiZWxhYmxlcy5nZXQoY29tcG9uZW50LmxhYmVsRWwpO1xuICBpZiAobGFiZWxhYmxlcy5sZW5ndGggPT09IDEpIHtcbiAgICBjb21wb25lbnQubGFiZWxFbC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsQ2xpY2tFdmVudCwgb25MYWJlbENsaWNrTWFwLmdldChjb21wb25lbnQubGFiZWxFbCkpO1xuICAgIG9uTGFiZWxDbGlja01hcC5kZWxldGUoY29tcG9uZW50LmxhYmVsRWwpO1xuICB9XG4gIGxhYmVsVG9MYWJlbGFibGVzLnNldChjb21wb25lbnQubGFiZWxFbCwgbGFiZWxhYmxlcy5maWx0ZXIoKGxhYmVsYWJsZSkgPT4gbGFiZWxhYmxlICE9PSBjb21wb25lbnQpLnNvcnQoc29ydEJ5RE9NT3JkZXIpKTtcbiAgY29tcG9uZW50LmxhYmVsRWwgPSBudWxsO1xufVxuZnVuY3Rpb24gc29ydEJ5RE9NT3JkZXIoYSwgYikge1xuICByZXR1cm4gaXNCZWZvcmUoYS5lbCwgYi5lbCkgPyAtMSA6IDE7XG59XG4vKipcbiAqIEhlbHBlciB0byBnZXQgdGhlIGxhYmVsIHRleHQgZnJvbSBhIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGdldExhYmVsVGV4dChjb21wb25lbnQpIHtcbiAgcmV0dXJuIGNvbXBvbmVudC5sYWJlbCB8fCBjb21wb25lbnQubGFiZWxFbD8udGV4dENvbnRlbnQ/LnRyaW0oKSB8fCBcIlwiO1xufVxuZnVuY3Rpb24gb25MYWJlbENsaWNrKGV2ZW50KSB7XG4gIGNvbnN0IGxhYmVsQ2xpY2tUYXJnZXQgPSBldmVudC5kZXRhaWwuc291cmNlRXZlbnQudGFyZ2V0O1xuICBjb25zdCBsYWJlbGFibGVzID0gbGFiZWxUb0xhYmVsYWJsZXMuZ2V0KHRoaXMpO1xuICBjb25zdCBjbGlja2VkTGFiZWxhYmxlID0gbGFiZWxhYmxlcy5maW5kKChsYWJlbGFibGUpID0+IGxhYmVsYWJsZS5lbCA9PT0gbGFiZWxDbGlja1RhcmdldCk7XG4gIGNvbnN0IGxhYmVsYWJsZUNoaWxkQ2xpY2tlZCA9IGxhYmVsYWJsZXMuaW5jbHVkZXMoY2xpY2tlZExhYmVsYWJsZSk7XG4gIGlmIChsYWJlbGFibGVDaGlsZENsaWNrZWQpIHtcbiAgICAvLyBubyBuZWVkIHRvIGZvcndhcmQgY2xpY2sgYXMgbGFiZWxhYmxlIHdpbGwgcmVjZWl2ZSBmb2N1c1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBmaXJzdExhYmVsYWJsZSA9IGxhYmVsYWJsZXNbMF07XG4gIGlmIChmaXJzdExhYmVsYWJsZS5kaXNhYmxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBmaXJzdExhYmVsYWJsZS5vbkxhYmVsQ2xpY2soZXZlbnQpO1xufVxuZnVuY3Rpb24gb25MYWJlbENvbm5lY3RlZCgpIHtcbiAgaWYgKHVubGFiZWxlZENvbXBvbmVudHMuaGFzKHRoaXMpKSB7XG4gICAgY29ubmVjdExhYmVsKHRoaXMpO1xuICB9XG59XG5mdW5jdGlvbiBvbkxhYmVsRGlzY29ubmVjdGVkKCkge1xuICB1bmxhYmVsZWRDb21wb25lbnRzLmFkZCh0aGlzKTtcbiAgY29uc3QgYm91bmRPbkxhYmVsQ29ubmVjdGVkID0gb25MYWJlbENvbm5lY3RlZE1hcC5nZXQodGhpcykgfHwgb25MYWJlbENvbm5lY3RlZC5iaW5kKHRoaXMpO1xuICBvbkxhYmVsQ29ubmVjdGVkTWFwLnNldCh0aGlzLCBib3VuZE9uTGFiZWxDb25uZWN0ZWQpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGxhYmVsQ29ubmVjdGVkRXZlbnQsIGJvdW5kT25MYWJlbENvbm5lY3RlZCk7XG59XG5cbmV4cG9ydCB7IGxhYmVsRGlzY29ubmVjdGVkRXZlbnQgYXMgYSwgY29ubmVjdExhYmVsIGFzIGMsIGRpc2Nvbm5lY3RMYWJlbCBhcyBkLCBnZXRMYWJlbFRleHQgYXMgZywgbGFiZWxDb25uZWN0ZWRFdmVudCBhcyBsIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5jb25zdCBjbGFtcCA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IE1hdGgubWF4KG1pbiwgTWF0aC5taW4odmFsdWUsIG1heCkpO1xuY29uc3QgZGVjaW1hbE51bWJlclJlZ2V4ID0gbmV3IFJlZ0V4cCgvKD86XFwuKFxcZCspKT8oPzpbZUVdKFsrLV0/XFxkKykpPyQvKTtcbi8qKlxuICogUmV0dXJucyB0aGUgcXVhbnRpdHkgb2YgcmVhbCBkZWNpbWFsIHBsYWNlcyBmb3IgYSBudW1iZXIsIHdoaWNoIGV4Y2x1ZGVzIHRyYWlsaW5nIHplcm9zLlxuICpcbiAqIEFkYXB0ZWQgZnJvbSB7QGxpbmsgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA0NTQ1MTgvamF2YXNjcmlwdC1ob3ctdG8tcmV0cmlldmUtdGhlLW51bWJlci1vZi1kZWNpbWFscy1vZi1hLXN0cmluZy1udW1iZXJ9LlxuICpcbiAqIEBwYXJhbSBkZWNpbWFsIC0gZGVjaW1hbCB2YWx1ZVxuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgYW1vdW50IG9mIGRlY2ltYWwgcGxhY2VzIGluIGEgbnVtYmVyXG4gKi9cbmNvbnN0IGRlY2ltYWxQbGFjZXMgPSAodmFsdWUpID0+IHtcbiAgY29uc3QgbWF0Y2ggPSAoXCJcIiArIHZhbHVlKS5tYXRjaChkZWNpbWFsTnVtYmVyUmVnZXgpO1xuICBpZiAoIW1hdGNoIHx8IHBhcnNlSW50KG1hdGNoWzFdKSA9PT0gMCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHJldHVybiBNYXRoLm1heCgwLCBcbiAgLy8gTnVtYmVyIG9mIGRpZ2l0cyByaWdodCBvZiBkZWNpbWFsIHBvaW50LlxuICAobWF0Y2hbMV0gPyBtYXRjaFsxXS5sZW5ndGggOiAwKSAtXG4gICAgLy8gQWRqdXN0IGZvciBzY2llbnRpZmljIG5vdGF0aW9uLlxuICAgIChtYXRjaFsyXSA/ICttYXRjaFsyXSA6IDApKTtcbn07XG5mdW5jdGlvbiBnZXREZWNpbWFscyh2YWx1ZSkge1xuICBpZiAoZGVjaW1hbFBsYWNlcyh2YWx1ZSkgPiAwICYmIHZhbHVlID4gMCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KGAwLiR7dmFsdWUudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV19YCk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gcmVtYXAodmFsdWUsIGZyb21NaW4sIGZyb21NYXgsIHRvTWluLCB0b01heCkge1xuICByZXR1cm4gKCh2YWx1ZSAtIGZyb21NaW4pICogKHRvTWF4IC0gdG9NaW4pKSAvIChmcm9tTWF4IC0gZnJvbU1pbikgKyB0b01pbjtcbn1cbi8qKlxuICogSGVscGVyIHRvIGRldGVybWluZSBpZiBhIHZhbHVlIGlzIGNsb3NlIHRvIHRoZSBlZGdlIG9mIGEgcmFuZ2Ugd2l0aGluIGEgdGhyZXNob2xkLlxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIHJhbmdlXG4gKiBAcGFyYW0gdGhyZXNob2xkXG4gKiBAcmV0dXJucyAtMSBpZiBjbG9zZSB0byBsb3dlciBlZGdlLCAxIGlmIGNsb3NlIHRvIHVwcGVyIGVkZ2UsIDAgb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBjbG9zZVRvUmFuZ2VFZGdlKHZhbHVlLCByYW5nZSwgdGhyZXNob2xkKSB7XG4gIHJldHVybiB2YWx1ZSA8IHRocmVzaG9sZCA/IC0xIDogdmFsdWUgPiByYW5nZSAtIHRocmVzaG9sZCA/IDEgOiAwO1xufVxuXG5leHBvcnQgeyBjbG9zZVRvUmFuZ2VFZGdlIGFzIGEsIGNsYW1wIGFzIGMsIGRlY2ltYWxQbGFjZXMgYXMgZCwgZ2V0RGVjaW1hbHMgYXMgZywgcmVtYXAgYXMgciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9