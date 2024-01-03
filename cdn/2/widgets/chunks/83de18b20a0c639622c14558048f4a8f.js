"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-meter_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-meter.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-meter.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteMeter: () => (/* binding */ CalciteMeter),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ "./node_modules/@esri/calcite-components/dist/components/form.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */







const CSS = {
  container: "container",
  fill: "fill",
  stepLine: "step-line",
  label: "label",
  labelHidden: "label-hidden",
  labelRange: "label-range",
  labelValue: "label-value",
  unitLabel: "unit-label",
  stepsVisible: "steps-visible",
  valueVisible: "value-visible",
  success: "fill-success",
  warning: "fill-warning",
  danger: "fill-danger",
};

const meterCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host{display:flex;--calcite-meter-space-internal:0.125rem;--calcite-meter-height-internal:1rem;--calcite-meter-font-size-internal:var(--calcite-font-size--1)}:host([scale=s]){--calcite-meter-height-internal:0.75rem;--calcite-meter-font-size-internal:var(--calcite-font-size--2)}:host([scale=l]){--calcite-meter-height-internal:1.5rem;--calcite-meter-font-size-internal:var(--calcite-font-size-0)}.container{position:relative;margin:0px;display:flex;inline-size:100%;align-items:center;block-size:var(--calcite-meter-height-internal);background-color:var(--calcite-ui-foreground-2);border:1px solid var(--calcite-ui-border-3);border-radius:var(--calcite-meter-height-internal)}.solid{border:1px solid var(--calcite-ui-foreground-3);background-color:var(--calcite-ui-foreground-3)}.outline{background-color:transparent}.value-visible{margin-block-start:1.5rem}.steps-visible{margin-block-end:1.5rem}.step-line{position:absolute;inset-block:0px;display:block;inline-size:var(--calcite-meter-space-internal);background-color:var(--calcite-ui-border-3)}.label{position:absolute;font-size:var(--calcite-meter-font-size-internal)}.label-hidden{visibility:hidden;opacity:0}.label-value{inset-block-end:calc(100% + 0.5em);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-1)}.label-range{color:var(--calcite-ui-text-3);inset-block-start:calc(100% + 0.5em)}.unit-label{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-3)}.label-value .unit-label{font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2)}.fill{position:absolute;z-index:var(--calcite-app-z-index);display:block;background-color:var(--calcite-ui-brand);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);inset-inline-start:var(--calcite-meter-space-internal);inset-block:var(--calcite-meter-space-internal);border-radius:var(--calcite-meter-height-internal);max-inline-size:calc(100% - var(--calcite-meter-space-internal) * 2);min-inline-size:calc(var(--calcite-meter-height-internal) - var(--calcite-meter-space-internal) * 2);transition-property:inline-size, background-color, box-shadow}.fill-danger{background-color:var(--calcite-ui-danger)}.fill-success{background-color:var(--calcite-ui-success)}.fill-warning{background-color:var(--calcite-ui-warning)}.solid .fill{inset-block:0;inset-inline-start:0;max-inline-size:100%;min-inline-size:calc(var(--calcite-meter-height-internal));box-shadow:0 0 0 1px var(--calcite-ui-brand)}.solid .fill-danger{box-shadow:0 0 0 1px var(--calcite-ui-danger)}.solid .fill-success{box-shadow:0 0 0 1px var(--calcite-ui-success)}.solid .fill-warning{box-shadow:0 0 0 1px var(--calcite-ui-warning)}";

const Meter = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.labelFlipMax = 0.8;
    this.labelFlipProximity = 0.15;
    this.maxPercent = 100;
    this.minPercent = 0;
    this.resizeObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_4__.c)("resize", () => this.resizeHandler());
    this.formatLabel = (value, labelType) => {
      if (labelType === "percent") {
        if (!this.percentFormatting) {
          const locale = (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.effectiveLocale);
          const formatter = new Intl.NumberFormat(locale, {
            useGrouping: this.groupSeparator,
            style: "percent",
          });
          this.percentFormatting = { formatter, locale };
        }
        return this.percentFormatting.formatter.format(value);
      }
      else {
        _locale_js__WEBPACK_IMPORTED_MODULE_2__.n.numberFormatOptions = {
          locale: this.effectiveLocale,
          numberingSystem: this.numberingSystem,
          useGrouping: this.groupSeparator,
        };
        return _locale_js__WEBPACK_IMPORTED_MODULE_2__.n.localize(value.toString());
      }
    };
    this.appearance = "outline-fill";
    this.disabled = false;
    this.fillType = "range";
    this.form = undefined;
    this.groupSeparator = false;
    this.high = undefined;
    this.label = undefined;
    this.low = undefined;
    this.max = 100;
    this.min = 0;
    this.name = undefined;
    this.numberingSystem = undefined;
    this.rangeLabels = false;
    this.rangeLabelType = "percent";
    this.scale = "m";
    this.unitLabel = "";
    this.value = undefined;
    this.valueLabel = false;
    this.valueLabelType = "percent";
    this.currentPercent = undefined;
    this.effectiveLocale = undefined;
    this.highActive = undefined;
    this.highPercent = undefined;
    this.lowActive = undefined;
    this.lowPercent = undefined;
  }
  handleRangeChange() {
    this.calculateValues();
    this.updateLabels();
  }
  handleLabelChange() {
    this.updateLabels();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_0__.a)(this);
    this.calculateValues();
    (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.a)(this, this.value);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_0__.s)(this);
    this.updateLabels();
  }
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    this.resizeObserver?.observe(this.el);
  }
  disconnectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    this.resizeObserver?.disconnect();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  resizeHandler() {
    this.updateLabels();
  }
  updateLabels() {
    if (this.valueLabelEl) {
      this.determineValueLabelPosition();
    }
    if (this.rangeLabels) {
      this.determineVisibleLabels();
    }
  }
  calculateValues() {
    const { min, max, low, high, value } = this;
    const lowPercent = (100 * (low - min)) / (max - min);
    const highPercent = (100 * (high - min)) / (max - min);
    const currentPercent = (100 * (value - min)) / (max - min);
    if (!low || low < min || low > high || low > max) {
      this.low = min;
    }
    if (!high || high > max || high < low || high < min) {
      this.high = max;
    }
    if (!value) {
      this.value = min;
    }
    this.lowPercent = lowPercent;
    this.highPercent = highPercent;
    this.currentPercent = value ? currentPercent : 0;
    this.lowActive = !!low && low > min && (!value || low > value) && (!high || low < high);
    this.highActive =
      !!high && min <= high && high < max && (!value || high > value) && (!low || high > low);
  }
  getMeterKindCssClass() {
    const { low, high, min, max, value } = this;
    const lowest = low ? low : min;
    const highest = high ? high : max;
    const aboveLowest = value >= lowest;
    const belowLowest = value < lowest;
    const aboveHighest = value >= highest;
    const belowHighest = value < highest;
    if (!value || (!low && belowHighest) || belowLowest) {
      return CSS.success;
    }
    else if (aboveLowest && belowHighest) {
      return CSS.warning;
    }
    else if (aboveHighest) {
      return CSS.danger;
    }
    else {
      return CSS.success;
    }
  }
  intersects(el1, el2) {
    return el1 && el2 && (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.l)(el1.getBoundingClientRect(), el2.getBoundingClientRect());
  }
  determineVisibleLabels() {
    const { minLabelEl, lowLabelEl, highLabelEl, maxLabelEl } = this;
    const highMaxOverlap = this.intersects(highLabelEl, maxLabelEl);
    const lowHighOverlap = this.intersects(lowLabelEl, highLabelEl);
    const lowMaxOverlap = this.intersects(lowLabelEl, maxLabelEl);
    const minHighOverlap = this.intersects(minLabelEl, highLabelEl);
    const minLowOverlap = this.intersects(minLabelEl, lowLabelEl);
    const minMaxOverlap = this.intersects(minLabelEl, maxLabelEl);
    const hiddenClass = CSS.labelHidden;
    if (lowLabelEl) {
      if (minLowOverlap || lowMaxOverlap || lowHighOverlap) {
        lowLabelEl.classList.add(hiddenClass);
      }
      else {
        lowLabelEl.classList.remove(hiddenClass);
      }
    }
    if (highLabelEl) {
      if (minHighOverlap || lowMaxOverlap || highMaxOverlap) {
        highLabelEl.classList.add(hiddenClass);
      }
      else {
        highLabelEl.classList.remove(hiddenClass);
      }
    }
    if (minLabelEl && maxLabelEl) {
      if (minMaxOverlap) {
        maxLabelEl.classList.add(hiddenClass);
      }
      else {
        maxLabelEl.classList.remove(hiddenClass);
      }
    }
  }
  determineValueLabelPosition() {
    const { valueLabelEl, meterContainerEl, currentPercent } = this;
    const valuePosition = currentPercent > 100 ? 100 : currentPercent > 0 ? currentPercent : 0;
    const valueLabelWidth = valueLabelEl.getBoundingClientRect().width;
    const containerWidth = meterContainerEl.getBoundingClientRect().width;
    const labelWidthPercent = (100 * (valueLabelWidth - 0)) / (containerWidth - 0);
    if (valuePosition + labelWidthPercent >= 100) {
      valueLabelEl.style.insetInlineEnd = "0%";
      valueLabelEl.style.removeProperty("inset-inline-start");
    }
    else {
      valueLabelEl.style.insetInlineStart = `${valuePosition}% `;
      valueLabelEl.style.removeProperty("inset-inline-end");
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderMeterFill() {
    const { currentPercent, fillType } = this;
    const kindClass = this.getMeterKindCssClass();
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: { [CSS.fill]: true, [kindClass]: fillType !== "single" }, style: { width: `${currentPercent}%` } }));
  }
  renderRangeLine(position) {
    const style = { insetInlineStart: `${position}%` };
    return (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: CSS.stepLine, style: style });
  }
  renderValueLabel() {
    const { currentPercent, valueLabelType, unitLabel, value } = this;
    const label = this.formatLabel(valueLabelType === "percent" ? currentPercent / 100 : value || 0, valueLabelType);
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: { [CSS.label]: true, [CSS.labelValue]: true }, key: "low-label-line",
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.valueLabelEl = el) }, label, unitLabel && valueLabelType !== "percent" && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("span", { class: CSS.unitLabel }, "\u00A0", unitLabel))));
  }
  renderMinLabel() {
    const { rangeLabelType, min, minPercent, unitLabel } = this;
    const style = { insetInlineStart: `${minPercent}%` };
    const labelMin = this.formatLabel(rangeLabelType === "percent" ? minPercent : min, rangeLabelType);
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: { [CSS.label]: true, [CSS.labelRange]: true }, key: "min-label-line", style: style,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.minLabelEl = el) }, labelMin, unitLabel && rangeLabelType !== "percent" && ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("span", { class: CSS.unitLabel }, "\u00A0", unitLabel))));
  }
  renderLowLabel() {
    const { rangeLabelType, low, lowPercent, highPercent, labelFlipProximity } = this;
    const label = low
      ? this.formatLabel(rangeLabelType === "percent" ? lowPercent / 100 : low, rangeLabelType)
      : "";
    const styleDefault = { insetInlineStart: `${lowPercent}%` };
    const styleFlipped = { insetInlineEnd: `${100 - lowPercent}%` };
    const style = (highPercent - lowPercent) / 100 < labelFlipProximity ? styleFlipped : styleDefault;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: { [CSS.label]: true, [CSS.labelRange]: true }, key: "low-label-line", style: style,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.lowLabelEl = el) }, label));
  }
  renderHighLabel() {
    const { rangeLabelType, high, highPercent, labelFlipMax } = this;
    const label = high
      ? this.formatLabel(rangeLabelType === "percent" ? highPercent / 100 : high, rangeLabelType)
      : "";
    const styleDefault = { insetInlineStart: `${highPercent}%` };
    const styleFlipped = { insetInlineEnd: `${100 - highPercent}%` };
    const style = highPercent / 100 >= labelFlipMax ? styleFlipped : styleDefault;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: { [CSS.label]: true, [CSS.labelRange]: true }, key: "high-label-line", style: style,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.highLabelEl = el) }, label));
  }
  renderMaxLabel() {
    const { rangeLabelType, max, maxPercent } = this;
    const style = { insetInlineEnd: `${100 - maxPercent}%` };
    const labelMax = this.formatLabel(rangeLabelType === "percent" ? maxPercent / 100 : max, rangeLabelType);
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { class: { [CSS.label]: true, [CSS.labelRange]: true }, key: "max-label-line", style: style,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.maxLabelEl = el) }, labelMax));
  }
  render() {
    const { appearance, currentPercent, highActive, highPercent, label, lowActive, lowPercent, max, maxPercent, min, minPercent, rangeLabels, rangeLabelType, unitLabel, value, valueLabel, valueLabelType, } = this;
    const textPercentLabelWithPercent = this.formatLabel(currentPercent / 100, "percent");
    const textUnitLabel = `${value} ${unitLabel}`;
    const valueText = valueLabelType === "percent"
      ? textPercentLabelWithPercent
      : unitLabel
        ? textUnitLabel
        : undefined;
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.Host, null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", { "aria-label": label, "aria-valuemax": rangeLabelType === "percent" ? maxPercent : max, "aria-valuemin": rangeLabelType === "percent" ? minPercent : min, "aria-valuenow": valueLabelType === "percent" ? currentPercent : value, "aria-valuetext": valueText, class: {
        [CSS.container]: true,
        [CSS.stepsVisible]: rangeLabels,
        [CSS.valueVisible]: valueLabel,
        [appearance]: appearance !== "outline-fill",
      }, role: "meter",
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.meterContainerEl = el) }, this.renderMeterFill(), valueLabel && this.renderValueLabel(), lowActive && this.renderRangeLine(lowPercent), highActive && this.renderRangeLine(highPercent), rangeLabels && this.renderMinLabel(), rangeLabels && lowActive && this.renderLowLabel(), rangeLabels && highActive && this.renderHighLabel(), rangeLabels && this.renderMaxLabel())));
  }
  get el() { return this; }
  static get watchers() { return {
    "min": ["handleRangeChange"],
    "max": ["handleRangeChange"],
    "low": ["handleRangeChange"],
    "high": ["handleRangeChange"],
    "value": ["handleRangeChange"],
    "rangeLabels": ["handleLabelChange"],
    "rangeLabelType": ["handleLabelChange"],
    "unitLabel": ["handleLabelChange"],
    "valueLabel": ["handleLabelChange"],
    "valueLabelType": ["handleLabelChange"]
  }; }
  static get style() { return meterCss; }
}, [1, "calcite-meter", {
    "appearance": [513],
    "disabled": [516],
    "fillType": [513, "fill-type"],
    "form": [513],
    "groupSeparator": [516, "group-separator"],
    "high": [1538],
    "label": [1],
    "low": [1538],
    "max": [514],
    "min": [514],
    "name": [513],
    "numberingSystem": [1, "numbering-system"],
    "rangeLabels": [516, "range-labels"],
    "rangeLabelType": [513, "range-label-type"],
    "scale": [513],
    "unitLabel": [1, "unit-label"],
    "value": [1026],
    "valueLabel": [516, "value-label"],
    "valueLabelType": [513, "value-label-type"],
    "currentPercent": [32],
    "effectiveLocale": [32],
    "highActive": [32],
    "highPercent": [32],
    "lowActive": [32],
    "lowPercent": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-meter"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-meter":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Meter);
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteMeter = Meter;
const defineCustomElement = defineCustomElement$1;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvODNkZTE4YjIwYTBjNjM5NjIyYzE0NTU4MDQ4ZjRhOGYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tHO0FBQ2I7QUFDZTtBQUMrQjtBQUN4RjtBQUNVOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixnQkFBZ0IsYUFBYSxTQUFTLGFBQWEseUdBQXlHLFVBQVUsTUFBTSxhQUFhLHdDQUF3QyxxQ0FBcUMsK0RBQStELGlCQUFpQix3Q0FBd0MsK0RBQStELGlCQUFpQix1Q0FBdUMsOERBQThELFdBQVcsa0JBQWtCLFdBQVcsYUFBYSxpQkFBaUIsbUJBQW1CLGdEQUFnRCxnREFBZ0QsNENBQTRDLG1EQUFtRCxPQUFPLGdEQUFnRCxnREFBZ0QsU0FBUyw2QkFBNkIsZUFBZSwwQkFBMEIsZUFBZSx3QkFBd0IsV0FBVyxrQkFBa0IsZ0JBQWdCLGNBQWMsZ0RBQWdELDRDQUE0QyxPQUFPLGtCQUFrQixrREFBa0QsY0FBYyxrQkFBa0IsVUFBVSxhQUFhLG1DQUFtQyw0Q0FBNEMsK0JBQStCLGFBQWEsK0JBQStCLHFDQUFxQyxZQUFZLDhDQUE4QywrQkFBK0IseUJBQXlCLDRDQUE0QywrQkFBK0IsTUFBTSxrQkFBa0IsbUNBQW1DLGNBQWMseUNBQXlDLDBCQUEwQix3REFBd0QsdURBQXVELGdEQUFnRCxtREFBbUQscUVBQXFFLHFHQUFxRyw4REFBOEQsYUFBYSwwQ0FBMEMsY0FBYywyQ0FBMkMsY0FBYywyQ0FBMkMsYUFBYSxjQUFjLHFCQUFxQixxQkFBcUIsMkRBQTJELDZDQUE2QyxvQkFBb0IsOENBQThDLHFCQUFxQiwrQ0FBK0MscUJBQXFCLCtDQUErQzs7QUFFbC9GLDRCQUE0QiwwRkFB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QztBQUMzQztBQUNBO0FBQ0EsWUFBWSxrREFBa0Q7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQixZQUFZO0FBQzVELDJCQUEyQixtQkFBbUIsa0JBQWtCO0FBQ2hFO0FBQ0EsWUFBWSx5RUFBQyxVQUFVLFNBQVMsMkNBQTJDO0FBQzNFO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQSxZQUFZLGtDQUFrQztBQUM5QyxvQkFBb0IsbUJBQW1CLGlCQUFpQjtBQUN4RDtBQUNBLFlBQVkseUVBQUMsVUFBVSxTQUFTLDJDQUEyQztBQUMzRTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0EsWUFBWSxrTUFBa007QUFDOU07QUFDQSw2QkFBNkIsT0FBTyxFQUFFLFVBQVU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseUVBQUMsQ0FBQyx3RUFBSSxRQUFRLHlFQUFDLFVBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQSxhQUFhO0FBQ2IsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRTZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtbWV0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGEgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgcyBhcyBzZXRDb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IGEgYXMgYWZ0ZXJDb25uZWN0RGVmYXVsdFZhbHVlU2V0LCBjIGFzIGNvbm5lY3RGb3JtLCBkIGFzIGRpc2Nvbm5lY3RGb3JtIH0gZnJvbSAnLi9mb3JtLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U3VwcG9ydGVkTG9jYWxlLCBuIGFzIG51bWJlclN0cmluZ0Zvcm1hdHRlciwgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5pbXBvcnQgeyBsIGFzIGludGVyc2VjdHMgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgZmlsbDogXCJmaWxsXCIsXG4gIHN0ZXBMaW5lOiBcInN0ZXAtbGluZVwiLFxuICBsYWJlbDogXCJsYWJlbFwiLFxuICBsYWJlbEhpZGRlbjogXCJsYWJlbC1oaWRkZW5cIixcbiAgbGFiZWxSYW5nZTogXCJsYWJlbC1yYW5nZVwiLFxuICBsYWJlbFZhbHVlOiBcImxhYmVsLXZhbHVlXCIsXG4gIHVuaXRMYWJlbDogXCJ1bml0LWxhYmVsXCIsXG4gIHN0ZXBzVmlzaWJsZTogXCJzdGVwcy12aXNpYmxlXCIsXG4gIHZhbHVlVmlzaWJsZTogXCJ2YWx1ZS12aXNpYmxlXCIsXG4gIHN1Y2Nlc3M6IFwiZmlsbC1zdWNjZXNzXCIsXG4gIHdhcm5pbmc6IFwiZmlsbC13YXJuaW5nXCIsXG4gIGRhbmdlcjogXCJmaWxsLWRhbmdlclwiLFxufTtcblxuY29uc3QgbWV0ZXJDc3MgPSBcIjpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX06aG9zdHtkaXNwbGF5OmZsZXg7LS1jYWxjaXRlLW1ldGVyLXNwYWNlLWludGVybmFsOjAuMTI1cmVtOy0tY2FsY2l0ZS1tZXRlci1oZWlnaHQtaW50ZXJuYWw6MXJlbTstLWNhbGNpdGUtbWV0ZXItZm9udC1zaXplLWludGVybmFsOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKX06aG9zdChbc2NhbGU9c10pey0tY2FsY2l0ZS1tZXRlci1oZWlnaHQtaW50ZXJuYWw6MC43NXJlbTstLWNhbGNpdGUtbWV0ZXItZm9udC1zaXplLWludGVybmFsOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKX06aG9zdChbc2NhbGU9bF0pey0tY2FsY2l0ZS1tZXRlci1oZWlnaHQtaW50ZXJuYWw6MS41cmVtOy0tY2FsY2l0ZS1tZXRlci1mb250LXNpemUtaW50ZXJuYWw6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCl9LmNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MHB4O2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO2FsaWduLWl0ZW1zOmNlbnRlcjtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbWV0ZXItaGVpZ2h0LWludGVybmFsKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpO2JvcmRlci1yYWRpdXM6dmFyKC0tY2FsY2l0ZS1tZXRlci1oZWlnaHQtaW50ZXJuYWwpfS5zb2xpZHtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKX0ub3V0bGluZXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS52YWx1ZS12aXNpYmxle21hcmdpbi1ibG9jay1zdGFydDoxLjVyZW19LnN0ZXBzLXZpc2libGV7bWFyZ2luLWJsb2NrLWVuZDoxLjVyZW19LnN0ZXAtbGluZXtwb3NpdGlvbjphYnNvbHV0ZTtpbnNldC1ibG9jazowcHg7ZGlzcGxheTpibG9jaztpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLW1ldGVyLXNwYWNlLWludGVybmFsKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfS5sYWJlbHtwb3NpdGlvbjphYnNvbHV0ZTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1tZXRlci1mb250LXNpemUtaW50ZXJuYWwpfS5sYWJlbC1oaWRkZW57dmlzaWJpbGl0eTpoaWRkZW47b3BhY2l0eTowfS5sYWJlbC12YWx1ZXtpbnNldC1ibG9jay1lbmQ6Y2FsYygxMDAlICsgMC41ZW0pO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtYm9sZCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5sYWJlbC1yYW5nZXtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7aW5zZXQtYmxvY2stc3RhcnQ6Y2FsYygxMDAlICsgMC41ZW0pfS51bml0LWxhYmVse2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9LmxhYmVsLXZhbHVlIC51bml0LWxhYmVse2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtYm9sZCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS5maWxse3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleCk7ZGlzcGxheTpibG9jaztiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO3RyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtpbnNldC1pbmxpbmUtc3RhcnQ6dmFyKC0tY2FsY2l0ZS1tZXRlci1zcGFjZS1pbnRlcm5hbCk7aW5zZXQtYmxvY2s6dmFyKC0tY2FsY2l0ZS1tZXRlci1zcGFjZS1pbnRlcm5hbCk7Ym9yZGVyLXJhZGl1czp2YXIoLS1jYWxjaXRlLW1ldGVyLWhlaWdodC1pbnRlcm5hbCk7bWF4LWlubGluZS1zaXplOmNhbGMoMTAwJSAtIHZhcigtLWNhbGNpdGUtbWV0ZXItc3BhY2UtaW50ZXJuYWwpICogMik7bWluLWlubGluZS1zaXplOmNhbGModmFyKC0tY2FsY2l0ZS1tZXRlci1oZWlnaHQtaW50ZXJuYWwpIC0gdmFyKC0tY2FsY2l0ZS1tZXRlci1zcGFjZS1pbnRlcm5hbCkgKiAyKTt0cmFuc2l0aW9uLXByb3BlcnR5OmlubGluZS1zaXplLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93fS5maWxsLWRhbmdlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyKX0uZmlsbC1zdWNjZXNze2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1zdWNjZXNzKX0uZmlsbC13YXJuaW5ne2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS13YXJuaW5nKX0uc29saWQgLmZpbGx7aW5zZXQtYmxvY2s6MDtpbnNldC1pbmxpbmUtc3RhcnQ6MDttYXgtaW5saW5lLXNpemU6MTAwJTttaW4taW5saW5lLXNpemU6Y2FsYyh2YXIoLS1jYWxjaXRlLW1ldGVyLWhlaWdodC1pbnRlcm5hbCkpO2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS5zb2xpZCAuZmlsbC1kYW5nZXJ7Ym94LXNoYWRvdzowIDAgMCAxcHggdmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfS5zb2xpZCAuZmlsbC1zdWNjZXNze2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLWNhbGNpdGUtdWktc3VjY2Vzcyl9LnNvbGlkIC5maWxsLXdhcm5pbmd7Ym94LXNoYWRvdzowIDAgMCAxcHggdmFyKC0tY2FsY2l0ZS11aS13YXJuaW5nKX1cIjtcblxuY29uc3QgTWV0ZXIgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMubGFiZWxGbGlwTWF4ID0gMC44O1xuICAgIHRoaXMubGFiZWxGbGlwUHJveGltaXR5ID0gMC4xNTtcbiAgICB0aGlzLm1heFBlcmNlbnQgPSAxMDA7XG4gICAgdGhpcy5taW5QZXJjZW50ID0gMDtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJyZXNpemVcIiwgKCkgPT4gdGhpcy5yZXNpemVIYW5kbGVyKCkpO1xuICAgIHRoaXMuZm9ybWF0TGFiZWwgPSAodmFsdWUsIGxhYmVsVHlwZSkgPT4ge1xuICAgICAgaWYgKGxhYmVsVHlwZSA9PT0gXCJwZXJjZW50XCIpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBlcmNlbnRGb3JtYXR0aW5nKSB7XG4gICAgICAgICAgY29uc3QgbG9jYWxlID0gZ2V0U3VwcG9ydGVkTG9jYWxlKHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgICAgICAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG9jYWxlLCB7XG4gICAgICAgICAgICB1c2VHcm91cGluZzogdGhpcy5ncm91cFNlcGFyYXRvcixcbiAgICAgICAgICAgIHN0eWxlOiBcInBlcmNlbnRcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnBlcmNlbnRGb3JtYXR0aW5nID0geyBmb3JtYXR0ZXIsIGxvY2FsZSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBlcmNlbnRGb3JtYXR0aW5nLmZvcm1hdHRlci5mb3JtYXQodmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgICB1c2VHcm91cGluZzogdGhpcy5ncm91cFNlcGFyYXRvcixcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG51bWJlclN0cmluZ0Zvcm1hdHRlci5sb2NhbGl6ZSh2YWx1ZS50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuYXBwZWFyYW5jZSA9IFwib3V0bGluZS1maWxsXCI7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZmlsbFR5cGUgPSBcInJhbmdlXCI7XG4gICAgdGhpcy5mb3JtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZ3JvdXBTZXBhcmF0b3IgPSBmYWxzZTtcbiAgICB0aGlzLmhpZ2ggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvdyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1heCA9IDEwMDtcbiAgICB0aGlzLm1pbiA9IDA7XG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmFuZ2VMYWJlbHMgPSBmYWxzZTtcbiAgICB0aGlzLnJhbmdlTGFiZWxUeXBlID0gXCJwZXJjZW50XCI7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMudW5pdExhYmVsID0gXCJcIjtcbiAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmFsdWVMYWJlbCA9IGZhbHNlO1xuICAgIHRoaXMudmFsdWVMYWJlbFR5cGUgPSBcInBlcmNlbnRcIjtcbiAgICB0aGlzLmN1cnJlbnRQZXJjZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGlnaEFjdGl2ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhpZ2hQZXJjZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG93QWN0aXZlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG93UGVyY2VudCA9IHVuZGVmaW5lZDtcbiAgfVxuICBoYW5kbGVSYW5nZUNoYW5nZSgpIHtcbiAgICB0aGlzLmNhbGN1bGF0ZVZhbHVlcygpO1xuICAgIHRoaXMudXBkYXRlTGFiZWxzKCk7XG4gIH1cbiAgaGFuZGxlTGFiZWxDaGFuZ2UoKSB7XG4gICAgdGhpcy51cGRhdGVMYWJlbHMoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIHRoaXMuY2FsY3VsYXRlVmFsdWVzKCk7XG4gICAgYWZ0ZXJDb25uZWN0RGVmYXVsdFZhbHVlU2V0KHRoaXMsIHRoaXMudmFsdWUpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlTGFiZWxzKCk7XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0Rm9ybSh0aGlzKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdEZvcm0odGhpcyk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlc2l6ZUhhbmRsZXIoKSB7XG4gICAgdGhpcy51cGRhdGVMYWJlbHMoKTtcbiAgfVxuICB1cGRhdGVMYWJlbHMoKSB7XG4gICAgaWYgKHRoaXMudmFsdWVMYWJlbEVsKSB7XG4gICAgICB0aGlzLmRldGVybWluZVZhbHVlTGFiZWxQb3NpdGlvbigpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yYW5nZUxhYmVscykge1xuICAgICAgdGhpcy5kZXRlcm1pbmVWaXNpYmxlTGFiZWxzKCk7XG4gICAgfVxuICB9XG4gIGNhbGN1bGF0ZVZhbHVlcygpIHtcbiAgICBjb25zdCB7IG1pbiwgbWF4LCBsb3csIGhpZ2gsIHZhbHVlIH0gPSB0aGlzO1xuICAgIGNvbnN0IGxvd1BlcmNlbnQgPSAoMTAwICogKGxvdyAtIG1pbikpIC8gKG1heCAtIG1pbik7XG4gICAgY29uc3QgaGlnaFBlcmNlbnQgPSAoMTAwICogKGhpZ2ggLSBtaW4pKSAvIChtYXggLSBtaW4pO1xuICAgIGNvbnN0IGN1cnJlbnRQZXJjZW50ID0gKDEwMCAqICh2YWx1ZSAtIG1pbikpIC8gKG1heCAtIG1pbik7XG4gICAgaWYgKCFsb3cgfHwgbG93IDwgbWluIHx8IGxvdyA+IGhpZ2ggfHwgbG93ID4gbWF4KSB7XG4gICAgICB0aGlzLmxvdyA9IG1pbjtcbiAgICB9XG4gICAgaWYgKCFoaWdoIHx8IGhpZ2ggPiBtYXggfHwgaGlnaCA8IGxvdyB8fCBoaWdoIDwgbWluKSB7XG4gICAgICB0aGlzLmhpZ2ggPSBtYXg7XG4gICAgfVxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBtaW47XG4gICAgfVxuICAgIHRoaXMubG93UGVyY2VudCA9IGxvd1BlcmNlbnQ7XG4gICAgdGhpcy5oaWdoUGVyY2VudCA9IGhpZ2hQZXJjZW50O1xuICAgIHRoaXMuY3VycmVudFBlcmNlbnQgPSB2YWx1ZSA/IGN1cnJlbnRQZXJjZW50IDogMDtcbiAgICB0aGlzLmxvd0FjdGl2ZSA9ICEhbG93ICYmIGxvdyA+IG1pbiAmJiAoIXZhbHVlIHx8IGxvdyA+IHZhbHVlKSAmJiAoIWhpZ2ggfHwgbG93IDwgaGlnaCk7XG4gICAgdGhpcy5oaWdoQWN0aXZlID1cbiAgICAgICEhaGlnaCAmJiBtaW4gPD0gaGlnaCAmJiBoaWdoIDwgbWF4ICYmICghdmFsdWUgfHwgaGlnaCA+IHZhbHVlKSAmJiAoIWxvdyB8fCBoaWdoID4gbG93KTtcbiAgfVxuICBnZXRNZXRlcktpbmRDc3NDbGFzcygpIHtcbiAgICBjb25zdCB7IGxvdywgaGlnaCwgbWluLCBtYXgsIHZhbHVlIH0gPSB0aGlzO1xuICAgIGNvbnN0IGxvd2VzdCA9IGxvdyA/IGxvdyA6IG1pbjtcbiAgICBjb25zdCBoaWdoZXN0ID0gaGlnaCA/IGhpZ2ggOiBtYXg7XG4gICAgY29uc3QgYWJvdmVMb3dlc3QgPSB2YWx1ZSA+PSBsb3dlc3Q7XG4gICAgY29uc3QgYmVsb3dMb3dlc3QgPSB2YWx1ZSA8IGxvd2VzdDtcbiAgICBjb25zdCBhYm92ZUhpZ2hlc3QgPSB2YWx1ZSA+PSBoaWdoZXN0O1xuICAgIGNvbnN0IGJlbG93SGlnaGVzdCA9IHZhbHVlIDwgaGlnaGVzdDtcbiAgICBpZiAoIXZhbHVlIHx8ICghbG93ICYmIGJlbG93SGlnaGVzdCkgfHwgYmVsb3dMb3dlc3QpIHtcbiAgICAgIHJldHVybiBDU1Muc3VjY2VzcztcbiAgICB9XG4gICAgZWxzZSBpZiAoYWJvdmVMb3dlc3QgJiYgYmVsb3dIaWdoZXN0KSB7XG4gICAgICByZXR1cm4gQ1NTLndhcm5pbmc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFib3ZlSGlnaGVzdCkge1xuICAgICAgcmV0dXJuIENTUy5kYW5nZXI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIENTUy5zdWNjZXNzO1xuICAgIH1cbiAgfVxuICBpbnRlcnNlY3RzKGVsMSwgZWwyKSB7XG4gICAgcmV0dXJuIGVsMSAmJiBlbDIgJiYgaW50ZXJzZWN0cyhlbDEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIGVsMi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG4gIH1cbiAgZGV0ZXJtaW5lVmlzaWJsZUxhYmVscygpIHtcbiAgICBjb25zdCB7IG1pbkxhYmVsRWwsIGxvd0xhYmVsRWwsIGhpZ2hMYWJlbEVsLCBtYXhMYWJlbEVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGhpZ2hNYXhPdmVybGFwID0gdGhpcy5pbnRlcnNlY3RzKGhpZ2hMYWJlbEVsLCBtYXhMYWJlbEVsKTtcbiAgICBjb25zdCBsb3dIaWdoT3ZlcmxhcCA9IHRoaXMuaW50ZXJzZWN0cyhsb3dMYWJlbEVsLCBoaWdoTGFiZWxFbCk7XG4gICAgY29uc3QgbG93TWF4T3ZlcmxhcCA9IHRoaXMuaW50ZXJzZWN0cyhsb3dMYWJlbEVsLCBtYXhMYWJlbEVsKTtcbiAgICBjb25zdCBtaW5IaWdoT3ZlcmxhcCA9IHRoaXMuaW50ZXJzZWN0cyhtaW5MYWJlbEVsLCBoaWdoTGFiZWxFbCk7XG4gICAgY29uc3QgbWluTG93T3ZlcmxhcCA9IHRoaXMuaW50ZXJzZWN0cyhtaW5MYWJlbEVsLCBsb3dMYWJlbEVsKTtcbiAgICBjb25zdCBtaW5NYXhPdmVybGFwID0gdGhpcy5pbnRlcnNlY3RzKG1pbkxhYmVsRWwsIG1heExhYmVsRWwpO1xuICAgIGNvbnN0IGhpZGRlbkNsYXNzID0gQ1NTLmxhYmVsSGlkZGVuO1xuICAgIGlmIChsb3dMYWJlbEVsKSB7XG4gICAgICBpZiAobWluTG93T3ZlcmxhcCB8fCBsb3dNYXhPdmVybGFwIHx8IGxvd0hpZ2hPdmVybGFwKSB7XG4gICAgICAgIGxvd0xhYmVsRWwuY2xhc3NMaXN0LmFkZChoaWRkZW5DbGFzcyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbG93TGFiZWxFbC5jbGFzc0xpc3QucmVtb3ZlKGhpZGRlbkNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhpZ2hMYWJlbEVsKSB7XG4gICAgICBpZiAobWluSGlnaE92ZXJsYXAgfHwgbG93TWF4T3ZlcmxhcCB8fCBoaWdoTWF4T3ZlcmxhcCkge1xuICAgICAgICBoaWdoTGFiZWxFbC5jbGFzc0xpc3QuYWRkKGhpZGRlbkNsYXNzKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBoaWdoTGFiZWxFbC5jbGFzc0xpc3QucmVtb3ZlKGhpZGRlbkNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1pbkxhYmVsRWwgJiYgbWF4TGFiZWxFbCkge1xuICAgICAgaWYgKG1pbk1heE92ZXJsYXApIHtcbiAgICAgICAgbWF4TGFiZWxFbC5jbGFzc0xpc3QuYWRkKGhpZGRlbkNsYXNzKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBtYXhMYWJlbEVsLmNsYXNzTGlzdC5yZW1vdmUoaGlkZGVuQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBkZXRlcm1pbmVWYWx1ZUxhYmVsUG9zaXRpb24oKSB7XG4gICAgY29uc3QgeyB2YWx1ZUxhYmVsRWwsIG1ldGVyQ29udGFpbmVyRWwsIGN1cnJlbnRQZXJjZW50IH0gPSB0aGlzO1xuICAgIGNvbnN0IHZhbHVlUG9zaXRpb24gPSBjdXJyZW50UGVyY2VudCA+IDEwMCA/IDEwMCA6IGN1cnJlbnRQZXJjZW50ID4gMCA/IGN1cnJlbnRQZXJjZW50IDogMDtcbiAgICBjb25zdCB2YWx1ZUxhYmVsV2lkdGggPSB2YWx1ZUxhYmVsRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSBtZXRlckNvbnRhaW5lckVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIGNvbnN0IGxhYmVsV2lkdGhQZXJjZW50ID0gKDEwMCAqICh2YWx1ZUxhYmVsV2lkdGggLSAwKSkgLyAoY29udGFpbmVyV2lkdGggLSAwKTtcbiAgICBpZiAodmFsdWVQb3NpdGlvbiArIGxhYmVsV2lkdGhQZXJjZW50ID49IDEwMCkge1xuICAgICAgdmFsdWVMYWJlbEVsLnN0eWxlLmluc2V0SW5saW5lRW5kID0gXCIwJVwiO1xuICAgICAgdmFsdWVMYWJlbEVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiaW5zZXQtaW5saW5lLXN0YXJ0XCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhbHVlTGFiZWxFbC5zdHlsZS5pbnNldElubGluZVN0YXJ0ID0gYCR7dmFsdWVQb3NpdGlvbn0lIGA7XG4gICAgICB2YWx1ZUxhYmVsRWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJpbnNldC1pbmxpbmUtZW5kXCIpO1xuICAgIH1cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlck1ldGVyRmlsbCgpIHtcbiAgICBjb25zdCB7IGN1cnJlbnRQZXJjZW50LCBmaWxsVHlwZSB9ID0gdGhpcztcbiAgICBjb25zdCBraW5kQ2xhc3MgPSB0aGlzLmdldE1ldGVyS2luZENzc0NsYXNzKCk7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUy5maWxsXTogdHJ1ZSwgW2tpbmRDbGFzc106IGZpbGxUeXBlICE9PSBcInNpbmdsZVwiIH0sIHN0eWxlOiB7IHdpZHRoOiBgJHtjdXJyZW50UGVyY2VudH0lYCB9IH0pKTtcbiAgfVxuICByZW5kZXJSYW5nZUxpbmUocG9zaXRpb24pIHtcbiAgICBjb25zdCBzdHlsZSA9IHsgaW5zZXRJbmxpbmVTdGFydDogYCR7cG9zaXRpb259JWAgfTtcbiAgICByZXR1cm4gaChcImRpdlwiLCB7IGNsYXNzOiBDU1Muc3RlcExpbmUsIHN0eWxlOiBzdHlsZSB9KTtcbiAgfVxuICByZW5kZXJWYWx1ZUxhYmVsKCkge1xuICAgIGNvbnN0IHsgY3VycmVudFBlcmNlbnQsIHZhbHVlTGFiZWxUeXBlLCB1bml0TGFiZWwsIHZhbHVlIH0gPSB0aGlzO1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5mb3JtYXRMYWJlbCh2YWx1ZUxhYmVsVHlwZSA9PT0gXCJwZXJjZW50XCIgPyBjdXJyZW50UGVyY2VudCAvIDEwMCA6IHZhbHVlIHx8IDAsIHZhbHVlTGFiZWxUeXBlKTtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTLmxhYmVsXTogdHJ1ZSwgW0NTUy5sYWJlbFZhbHVlXTogdHJ1ZSB9LCBrZXk6IFwibG93LWxhYmVsLWxpbmVcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLnZhbHVlTGFiZWxFbCA9IGVsKSB9LCBsYWJlbCwgdW5pdExhYmVsICYmIHZhbHVlTGFiZWxUeXBlICE9PSBcInBlcmNlbnRcIiAmJiAoaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLnVuaXRMYWJlbCB9LCBcIlxcdTAwQTBcIiwgdW5pdExhYmVsKSkpKTtcbiAgfVxuICByZW5kZXJNaW5MYWJlbCgpIHtcbiAgICBjb25zdCB7IHJhbmdlTGFiZWxUeXBlLCBtaW4sIG1pblBlcmNlbnQsIHVuaXRMYWJlbCB9ID0gdGhpcztcbiAgICBjb25zdCBzdHlsZSA9IHsgaW5zZXRJbmxpbmVTdGFydDogYCR7bWluUGVyY2VudH0lYCB9O1xuICAgIGNvbnN0IGxhYmVsTWluID0gdGhpcy5mb3JtYXRMYWJlbChyYW5nZUxhYmVsVHlwZSA9PT0gXCJwZXJjZW50XCIgPyBtaW5QZXJjZW50IDogbWluLCByYW5nZUxhYmVsVHlwZSk7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUy5sYWJlbF06IHRydWUsIFtDU1MubGFiZWxSYW5nZV06IHRydWUgfSwga2V5OiBcIm1pbi1sYWJlbC1saW5lXCIsIHN0eWxlOiBzdHlsZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLm1pbkxhYmVsRWwgPSBlbCkgfSwgbGFiZWxNaW4sIHVuaXRMYWJlbCAmJiByYW5nZUxhYmVsVHlwZSAhPT0gXCJwZXJjZW50XCIgJiYgKGgoXCJzcGFuXCIsIHsgY2xhc3M6IENTUy51bml0TGFiZWwgfSwgXCJcXHUwMEEwXCIsIHVuaXRMYWJlbCkpKSk7XG4gIH1cbiAgcmVuZGVyTG93TGFiZWwoKSB7XG4gICAgY29uc3QgeyByYW5nZUxhYmVsVHlwZSwgbG93LCBsb3dQZXJjZW50LCBoaWdoUGVyY2VudCwgbGFiZWxGbGlwUHJveGltaXR5IH0gPSB0aGlzO1xuICAgIGNvbnN0IGxhYmVsID0gbG93XG4gICAgICA/IHRoaXMuZm9ybWF0TGFiZWwocmFuZ2VMYWJlbFR5cGUgPT09IFwicGVyY2VudFwiID8gbG93UGVyY2VudCAvIDEwMCA6IGxvdywgcmFuZ2VMYWJlbFR5cGUpXG4gICAgICA6IFwiXCI7XG4gICAgY29uc3Qgc3R5bGVEZWZhdWx0ID0geyBpbnNldElubGluZVN0YXJ0OiBgJHtsb3dQZXJjZW50fSVgIH07XG4gICAgY29uc3Qgc3R5bGVGbGlwcGVkID0geyBpbnNldElubGluZUVuZDogYCR7MTAwIC0gbG93UGVyY2VudH0lYCB9O1xuICAgIGNvbnN0IHN0eWxlID0gKGhpZ2hQZXJjZW50IC0gbG93UGVyY2VudCkgLyAxMDAgPCBsYWJlbEZsaXBQcm94aW1pdHkgPyBzdHlsZUZsaXBwZWQgOiBzdHlsZURlZmF1bHQ7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUy5sYWJlbF06IHRydWUsIFtDU1MubGFiZWxSYW5nZV06IHRydWUgfSwga2V5OiBcImxvdy1sYWJlbC1saW5lXCIsIHN0eWxlOiBzdHlsZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLmxvd0xhYmVsRWwgPSBlbCkgfSwgbGFiZWwpKTtcbiAgfVxuICByZW5kZXJIaWdoTGFiZWwoKSB7XG4gICAgY29uc3QgeyByYW5nZUxhYmVsVHlwZSwgaGlnaCwgaGlnaFBlcmNlbnQsIGxhYmVsRmxpcE1heCB9ID0gdGhpcztcbiAgICBjb25zdCBsYWJlbCA9IGhpZ2hcbiAgICAgID8gdGhpcy5mb3JtYXRMYWJlbChyYW5nZUxhYmVsVHlwZSA9PT0gXCJwZXJjZW50XCIgPyBoaWdoUGVyY2VudCAvIDEwMCA6IGhpZ2gsIHJhbmdlTGFiZWxUeXBlKVxuICAgICAgOiBcIlwiO1xuICAgIGNvbnN0IHN0eWxlRGVmYXVsdCA9IHsgaW5zZXRJbmxpbmVTdGFydDogYCR7aGlnaFBlcmNlbnR9JWAgfTtcbiAgICBjb25zdCBzdHlsZUZsaXBwZWQgPSB7IGluc2V0SW5saW5lRW5kOiBgJHsxMDAgLSBoaWdoUGVyY2VudH0lYCB9O1xuICAgIGNvbnN0IHN0eWxlID0gaGlnaFBlcmNlbnQgLyAxMDAgPj0gbGFiZWxGbGlwTWF4ID8gc3R5bGVGbGlwcGVkIDogc3R5bGVEZWZhdWx0O1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiB7IFtDU1MubGFiZWxdOiB0cnVlLCBbQ1NTLmxhYmVsUmFuZ2VdOiB0cnVlIH0sIGtleTogXCJoaWdoLWxhYmVsLWxpbmVcIiwgc3R5bGU6IHN0eWxlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMuaGlnaExhYmVsRWwgPSBlbCkgfSwgbGFiZWwpKTtcbiAgfVxuICByZW5kZXJNYXhMYWJlbCgpIHtcbiAgICBjb25zdCB7IHJhbmdlTGFiZWxUeXBlLCBtYXgsIG1heFBlcmNlbnQgfSA9IHRoaXM7XG4gICAgY29uc3Qgc3R5bGUgPSB7IGluc2V0SW5saW5lRW5kOiBgJHsxMDAgLSBtYXhQZXJjZW50fSVgIH07XG4gICAgY29uc3QgbGFiZWxNYXggPSB0aGlzLmZvcm1hdExhYmVsKHJhbmdlTGFiZWxUeXBlID09PSBcInBlcmNlbnRcIiA/IG1heFBlcmNlbnQgLyAxMDAgOiBtYXgsIHJhbmdlTGFiZWxUeXBlKTtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTLmxhYmVsXTogdHJ1ZSwgW0NTUy5sYWJlbFJhbmdlXTogdHJ1ZSB9LCBrZXk6IFwibWF4LWxhYmVsLWxpbmVcIiwgc3R5bGU6IHN0eWxlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMubWF4TGFiZWxFbCA9IGVsKSB9LCBsYWJlbE1heCkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFwcGVhcmFuY2UsIGN1cnJlbnRQZXJjZW50LCBoaWdoQWN0aXZlLCBoaWdoUGVyY2VudCwgbGFiZWwsIGxvd0FjdGl2ZSwgbG93UGVyY2VudCwgbWF4LCBtYXhQZXJjZW50LCBtaW4sIG1pblBlcmNlbnQsIHJhbmdlTGFiZWxzLCByYW5nZUxhYmVsVHlwZSwgdW5pdExhYmVsLCB2YWx1ZSwgdmFsdWVMYWJlbCwgdmFsdWVMYWJlbFR5cGUsIH0gPSB0aGlzO1xuICAgIGNvbnN0IHRleHRQZXJjZW50TGFiZWxXaXRoUGVyY2VudCA9IHRoaXMuZm9ybWF0TGFiZWwoY3VycmVudFBlcmNlbnQgLyAxMDAsIFwicGVyY2VudFwiKTtcbiAgICBjb25zdCB0ZXh0VW5pdExhYmVsID0gYCR7dmFsdWV9ICR7dW5pdExhYmVsfWA7XG4gICAgY29uc3QgdmFsdWVUZXh0ID0gdmFsdWVMYWJlbFR5cGUgPT09IFwicGVyY2VudFwiXG4gICAgICA/IHRleHRQZXJjZW50TGFiZWxXaXRoUGVyY2VudFxuICAgICAgOiB1bml0TGFiZWxcbiAgICAgICAgPyB0ZXh0VW5pdExhYmVsXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwiZGl2XCIsIHsgXCJhcmlhLWxhYmVsXCI6IGxhYmVsLCBcImFyaWEtdmFsdWVtYXhcIjogcmFuZ2VMYWJlbFR5cGUgPT09IFwicGVyY2VudFwiID8gbWF4UGVyY2VudCA6IG1heCwgXCJhcmlhLXZhbHVlbWluXCI6IHJhbmdlTGFiZWxUeXBlID09PSBcInBlcmNlbnRcIiA/IG1pblBlcmNlbnQgOiBtaW4sIFwiYXJpYS12YWx1ZW5vd1wiOiB2YWx1ZUxhYmVsVHlwZSA9PT0gXCJwZXJjZW50XCIgPyBjdXJyZW50UGVyY2VudCA6IHZhbHVlLCBcImFyaWEtdmFsdWV0ZXh0XCI6IHZhbHVlVGV4dCwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5jb250YWluZXJdOiB0cnVlLFxuICAgICAgICBbQ1NTLnN0ZXBzVmlzaWJsZV06IHJhbmdlTGFiZWxzLFxuICAgICAgICBbQ1NTLnZhbHVlVmlzaWJsZV06IHZhbHVlTGFiZWwsXG4gICAgICAgIFthcHBlYXJhbmNlXTogYXBwZWFyYW5jZSAhPT0gXCJvdXRsaW5lLWZpbGxcIixcbiAgICAgIH0sIHJvbGU6IFwibWV0ZXJcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLm1ldGVyQ29udGFpbmVyRWwgPSBlbCkgfSwgdGhpcy5yZW5kZXJNZXRlckZpbGwoKSwgdmFsdWVMYWJlbCAmJiB0aGlzLnJlbmRlclZhbHVlTGFiZWwoKSwgbG93QWN0aXZlICYmIHRoaXMucmVuZGVyUmFuZ2VMaW5lKGxvd1BlcmNlbnQpLCBoaWdoQWN0aXZlICYmIHRoaXMucmVuZGVyUmFuZ2VMaW5lKGhpZ2hQZXJjZW50KSwgcmFuZ2VMYWJlbHMgJiYgdGhpcy5yZW5kZXJNaW5MYWJlbCgpLCByYW5nZUxhYmVscyAmJiBsb3dBY3RpdmUgJiYgdGhpcy5yZW5kZXJMb3dMYWJlbCgpLCByYW5nZUxhYmVscyAmJiBoaWdoQWN0aXZlICYmIHRoaXMucmVuZGVySGlnaExhYmVsKCksIHJhbmdlTGFiZWxzICYmIHRoaXMucmVuZGVyTWF4TGFiZWwoKSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJtaW5cIjogW1wiaGFuZGxlUmFuZ2VDaGFuZ2VcIl0sXG4gICAgXCJtYXhcIjogW1wiaGFuZGxlUmFuZ2VDaGFuZ2VcIl0sXG4gICAgXCJsb3dcIjogW1wiaGFuZGxlUmFuZ2VDaGFuZ2VcIl0sXG4gICAgXCJoaWdoXCI6IFtcImhhbmRsZVJhbmdlQ2hhbmdlXCJdLFxuICAgIFwidmFsdWVcIjogW1wiaGFuZGxlUmFuZ2VDaGFuZ2VcIl0sXG4gICAgXCJyYW5nZUxhYmVsc1wiOiBbXCJoYW5kbGVMYWJlbENoYW5nZVwiXSxcbiAgICBcInJhbmdlTGFiZWxUeXBlXCI6IFtcImhhbmRsZUxhYmVsQ2hhbmdlXCJdLFxuICAgIFwidW5pdExhYmVsXCI6IFtcImhhbmRsZUxhYmVsQ2hhbmdlXCJdLFxuICAgIFwidmFsdWVMYWJlbFwiOiBbXCJoYW5kbGVMYWJlbENoYW5nZVwiXSxcbiAgICBcInZhbHVlTGFiZWxUeXBlXCI6IFtcImhhbmRsZUxhYmVsQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIG1ldGVyQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLW1ldGVyXCIsIHtcbiAgICBcImFwcGVhcmFuY2VcIjogWzUxM10sXG4gICAgXCJkaXNhYmxlZFwiOiBbNTE2XSxcbiAgICBcImZpbGxUeXBlXCI6IFs1MTMsIFwiZmlsbC10eXBlXCJdLFxuICAgIFwiZm9ybVwiOiBbNTEzXSxcbiAgICBcImdyb3VwU2VwYXJhdG9yXCI6IFs1MTYsIFwiZ3JvdXAtc2VwYXJhdG9yXCJdLFxuICAgIFwiaGlnaFwiOiBbMTUzOF0sXG4gICAgXCJsYWJlbFwiOiBbMV0sXG4gICAgXCJsb3dcIjogWzE1MzhdLFxuICAgIFwibWF4XCI6IFs1MTRdLFxuICAgIFwibWluXCI6IFs1MTRdLFxuICAgIFwibmFtZVwiOiBbNTEzXSxcbiAgICBcIm51bWJlcmluZ1N5c3RlbVwiOiBbMSwgXCJudW1iZXJpbmctc3lzdGVtXCJdLFxuICAgIFwicmFuZ2VMYWJlbHNcIjogWzUxNiwgXCJyYW5nZS1sYWJlbHNcIl0sXG4gICAgXCJyYW5nZUxhYmVsVHlwZVwiOiBbNTEzLCBcInJhbmdlLWxhYmVsLXR5cGVcIl0sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcInVuaXRMYWJlbFwiOiBbMSwgXCJ1bml0LWxhYmVsXCJdLFxuICAgIFwidmFsdWVcIjogWzEwMjZdLFxuICAgIFwidmFsdWVMYWJlbFwiOiBbNTE2LCBcInZhbHVlLWxhYmVsXCJdLFxuICAgIFwidmFsdWVMYWJlbFR5cGVcIjogWzUxMywgXCJ2YWx1ZS1sYWJlbC10eXBlXCJdLFxuICAgIFwiY3VycmVudFBlcmNlbnRcIjogWzMyXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwiaGlnaEFjdGl2ZVwiOiBbMzJdLFxuICAgIFwiaGlnaFBlcmNlbnRcIjogWzMyXSxcbiAgICBcImxvd0FjdGl2ZVwiOiBbMzJdLFxuICAgIFwibG93UGVyY2VudFwiOiBbMzJdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1tZXRlclwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1tZXRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIE1ldGVyKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG5cbmNvbnN0IENhbGNpdGVNZXRlciA9IE1ldGVyO1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IGRlZmluZUN1c3RvbUVsZW1lbnQkMTtcblxuZXhwb3J0IHsgQ2FsY2l0ZU1ldGVyLCBkZWZpbmVDdXN0b21FbGVtZW50IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=