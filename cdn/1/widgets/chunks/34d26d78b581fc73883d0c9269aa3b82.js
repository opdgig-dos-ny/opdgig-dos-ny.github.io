"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-split-button_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-split-button.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-split-button.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteSplitButton: () => (/* binding */ CalciteSplitButton),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.js */ "./node_modules/@esri/calcite-components/dist/components/button.js");
/* harmony import */ var _dropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown.js */ "./node_modules/@esri/calcite-components/dist/components/dropdown.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */








const CSS = {
  container: "container",
  dividerContainer: "divider-container",
  divider: "divider",
  widthAuto: "width-auto",
  widthHalf: "width-half",
  widthFull: "width-full",
};

const splitButtonCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}:host:host([kind=brand]){--calcite-split-button-background:var(--calcite-ui-brand);--calcite-split-button-divider:var(--calcite-ui-foreground-1)}:host:host([kind=danger]){--calcite-split-button-background:var(--calcite-ui-danger);--calcite-split-button-divider:var(--calcite-ui-foreground-1)}:host:host([kind=neutral]){--calcite-split-button-background:var(--calcite-ui-foreground-3);--calcite-split-button-divider:var(--calcite-ui-text-1)}:host:host([kind=inverse]){--calcite-split-button-background:var(--calcite-ui-inverse);--calcite-split-button-divider:var(--calcite-ui-foreground-1)}:host([appearance=transparent]):host([kind=brand]){--calcite-split-button-divider:var(--calcite-ui-brand);--calcite-split-button-background:transparent}:host([appearance=transparent]):host([kind=danger]){--calcite-split-button-divider:var(--calcite-ui-danger);--calcite-split-button-background:transparent}:host([appearance=transparent]):host([kind=neutral]){--calcite-split-button-divider:var(--calcite-ui-text-1);--calcite-split-button-background:transparent}:host([appearance=transparent]):host([kind=inverse]){--calcite-split-button-divider:var(--calcite-ui-foreground-1);--calcite-split-button-background:transparent}:host([appearance=outline]){--calcite-split-button-background:transparent}:host([appearance=outline-fill]){--calcite-split-button-background:var(--calcite-ui-foreground-1)}:host([appearance=outline]):host([kind=brand]),:host([appearance=outline-fill]):host([kind=brand]){--calcite-split-button-divider:var(--calcite-ui-brand)}:host([appearance=outline]):host([kind=danger]),:host([appearance=outline-fill]):host([kind=danger]){--calcite-split-button-divider:var(--calcite-ui-danger)}:host([appearance=outline]):host([kind=neutral]),:host([appearance=outline-fill]):host([kind=neutral]){--calcite-split-button-divider:var(--calcite-ui-border-1);--calcite-split-button-background:var(--calcite-ui-border-1)}:host([appearance=outline]):host([kind=inverse]),:host([appearance=outline-fill]):host([kind=inverse]){--calcite-split-button-divider:var(--calcite-ui-inverse)}.container{display:flex;align-items:stretch}.container>calcite-dropdown>calcite-button{block-size:100%;vertical-align:top}.divider-container{display:flex;inline-size:1px;align-items:stretch;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background-color:var(--calcite-split-button-background)}.divider{margin-block:0.25rem;display:inline-block;inline-size:1px;background-color:var(--calcite-split-button-divider)}:host([appearance=outline-fill]) .divider-container,:host([appearance=outline]) .divider-container{border-block:1px solid var(--calcite-split-button-divider)}:host([appearance=outline-fill]):hover .divider-container,:host([appearance=outline]):hover .divider-container{background-color:var(--calcite-split-button-divider)}:host([appearance=outline-fill]:hover) .divider-container,:host([appearance=outline]:hover) .divider-container{background-color:var(--calcite-split-button-divider)}:host([appearance=outline-fill]:focus-within):host([kind=brand]),:host([appearance=outline]:focus-within):host([kind=brand]){--calcite-split-button-divider:var(--calcite-ui-brand-press)}:host([appearance=outline-fill]:focus-within):host([kind=danger]),:host([appearance=outline]:focus-within):host([kind=danger]){--calcite-split-button-divider:var(--calcite-ui-danger-press)}:host([appearance=outline-fill]:focus-within) .divider-container,:host([appearance=outline]:focus-within) .divider-container{background-color:var(--calcite-split-button-divider)}:host([disabled]) .divider-container{opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) calcite-dropdown>calcite-button{pointer-events:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}";

const SplitButton = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteSplitButtonPrimaryClick = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.createEvent)(this, "calciteSplitButtonPrimaryClick", 6);
    this.calciteSplitButtonSecondaryClick = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.createEvent)(this, "calciteSplitButtonSecondaryClick", 6);
    this.calciteSplitButtonPrimaryClickHandler = () => this.calciteSplitButtonPrimaryClick.emit();
    this.calciteSplitButtonSecondaryClickHandler = () => this.calciteSplitButtonSecondaryClick.emit();
    this.appearance = "solid";
    this.kind = "brand";
    this.disabled = false;
    this.active = false;
    this.dropdownIconType = "chevron";
    this.dropdownLabel = undefined;
    this.loading = false;
    this.overlayPositioning = "absolute";
    this.primaryIconEnd = undefined;
    this.primaryIconFlipRtl = undefined;
    this.primaryIconStart = undefined;
    this.primaryLabel = undefined;
    this.primaryText = undefined;
    this.scale = "m";
    this.width = "auto";
  }
  handleDisabledChange(value) {
    if (!value) {
      this.active = false;
    }
  }
  activeHandler() {
    if (this.disabled) {
      this.active = false;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    this.el.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
  }
  componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.s)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_0__.u)(this);
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
  }
  render() {
    const buttonWidth = this.width === "auto" ? "auto" : "full";
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("div", { class: CSS.container }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("calcite-button", { appearance: this.appearance, disabled: this.disabled, "icon-end": this.primaryIconEnd ? this.primaryIconEnd : null, "icon-start": this.primaryIconStart ? this.primaryIconStart : null, iconFlipRtl: this.primaryIconFlipRtl ? this.primaryIconFlipRtl : null, kind: this.kind, label: this.primaryLabel, loading: this.loading, onClick: this.calciteSplitButtonPrimaryClickHandler, scale: this.scale, splitChild: "primary", type: "button", width: buttonWidth }, this.primaryText), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("div", { class: CSS.dividerContainer }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("div", { class: CSS.divider })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("calcite-dropdown", { disabled: this.disabled, onClick: this.calciteSplitButtonSecondaryClickHandler, open: this.active, overlayPositioning: this.overlayPositioning, placement: "bottom-end", scale: this.scale, width: this.scale }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("calcite-button", { appearance: this.appearance, disabled: this.disabled, "icon-start": this.dropdownIcon, kind: this.kind, label: this.dropdownLabel, scale: this.scale, slot: "trigger", splitChild: "secondary", type: "button" }), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("slot", null))));
  }
  get dropdownIcon() {
    return this.dropdownIconType === "chevron"
      ? "chevronDown"
      : this.dropdownIconType === "caret"
        ? "caretDown"
        : this.dropdownIconType === "ellipsis"
          ? "ellipsis"
          : "handle-vertical";
  }
  static get delegatesFocus() { return true; }
  get el() { return this; }
  static get watchers() { return {
    "disabled": ["handleDisabledChange"],
    "active": ["activeHandler"]
  }; }
  static get style() { return splitButtonCss; }
}, [17, "calcite-split-button", {
    "appearance": [513],
    "kind": [513],
    "disabled": [516],
    "active": [1540],
    "dropdownIconType": [513, "dropdown-icon-type"],
    "dropdownLabel": [513, "dropdown-label"],
    "loading": [516],
    "overlayPositioning": [513, "overlay-positioning"],
    "primaryIconEnd": [513, "primary-icon-end"],
    "primaryIconFlipRtl": [513, "primary-icon-flip-rtl"],
    "primaryIconStart": [513, "primary-icon-start"],
    "primaryLabel": [513, "primary-label"],
    "primaryText": [513, "primary-text"],
    "scale": [513],
    "width": [513],
    "setFocus": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-split-button", "calcite-button", "calcite-dropdown", "calcite-icon", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-split-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SplitButton);
      }
      break;
    case "calcite-button":
      if (!customElements.get(tagName)) {
        (0,_button_js__WEBPACK_IMPORTED_MODULE_2__.d)();
      }
      break;
    case "calcite-dropdown":
      if (!customElements.get(tagName)) {
        (0,_dropdown_js__WEBPACK_IMPORTED_MODULE_3__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_4__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteSplitButton = SplitButton;
const defineCustomElement = defineCustomElement$1;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMzRkMjZkNzhiNTgxZmM3Mzg4M2QwYzkyNjlhYTNiODIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RztBQUNVO0FBQ0w7QUFDckQ7QUFDRTtBQUNKO0FBQ0U7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLHFCQUFxQixvQkFBb0IsaUJBQWlCLG9CQUFvQixnQkFBZ0Isb0JBQW9CLGlCQUFpQix5QkFBeUIsMERBQTBELDhEQUE4RCwwQkFBMEIsMkRBQTJELDhEQUE4RCwyQkFBMkIsaUVBQWlFLHdEQUF3RCwyQkFBMkIsNERBQTRELDhEQUE4RCxtREFBbUQsdURBQXVELDhDQUE4QyxvREFBb0Qsd0RBQXdELDhDQUE4QyxxREFBcUQsd0RBQXdELDhDQUE4QyxxREFBcUQsOERBQThELDhDQUE4Qyw0QkFBNEIsOENBQThDLGlDQUFpQyxpRUFBaUUsbUdBQW1HLHVEQUF1RCxxR0FBcUcsd0RBQXdELHVHQUF1RywwREFBMEQsNkRBQTZELHVHQUF1Ryx5REFBeUQsV0FBVyxhQUFhLG9CQUFvQiwyQ0FBMkMsZ0JBQWdCLG1CQUFtQixtQkFBbUIsYUFBYSxnQkFBZ0Isb0JBQW9CLDZGQUE2Rix3REFBd0QsU0FBUyxxQkFBcUIscUJBQXFCLGdCQUFnQixxREFBcUQsbUdBQW1HLDJEQUEyRCwrR0FBK0cscURBQXFELCtHQUErRyxxREFBcUQsNkhBQTZILDZEQUE2RCwrSEFBK0gsOERBQThELDZIQUE2SCxxREFBcUQscUNBQXFDLDJDQUEyQyxrREFBa0Qsb0JBQW9CLHlHQUF5RyxVQUFVLGdCQUFnQixhQUFhLFNBQVMsYUFBYTs7QUFFaHBJLGtDQUFrQywwRkFBa0IsZUFBZSwrRUFBVztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxtRkFBVztBQUNyRCw0Q0FBNEMsbUZBQVc7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK0NBQWtCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFrQjtBQUN0QjtBQUNBO0FBQ0EsSUFBSSwrQ0FBc0I7QUFDMUI7QUFDQTtBQUNBLElBQUksK0NBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxJQUFJLGtEQUFxQjtBQUN6QjtBQUNBO0FBQ0EsSUFBSSxrREFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5RUFBQyxVQUFVLHNCQUFzQixFQUFFLHlFQUFDLHFCQUFxQixvY0FBb2MscUJBQXFCLHlFQUFDLFVBQVUsNkJBQTZCLEVBQUUseUVBQUMsVUFBVSxvQkFBb0IsSUFBSSx5RUFBQyx1QkFBdUIsK01BQStNLEVBQUUseUVBQUMscUJBQXFCLGdOQUFnTixHQUFHLHlFQUFDO0FBQzlqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyxhQUFhO0FBQ2IsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkNBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJDQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkNBQXFCO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVtRCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9jYWxjaXRlLXNwbGl0LWJ1dHRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUgfSBmcm9tICcuL2ludGVyYWN0aXZlLmpzJztcbmltcG9ydCB7IGMgYXMgY29tcG9uZW50Rm9jdXNhYmxlLCBhIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIHMgYXMgc2V0Q29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkNSB9IGZyb20gJy4vYnV0dG9uLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0IH0gZnJvbSAnLi9kcm9wZG93bi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMyB9IGZyb20gJy4vaWNvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMiB9IGZyb20gJy4vbG9hZGVyLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGRpdmlkZXJDb250YWluZXI6IFwiZGl2aWRlci1jb250YWluZXJcIixcbiAgZGl2aWRlcjogXCJkaXZpZGVyXCIsXG4gIHdpZHRoQXV0bzogXCJ3aWR0aC1hdXRvXCIsXG4gIHdpZHRoSGFsZjogXCJ3aWR0aC1oYWxmXCIsXG4gIHdpZHRoRnVsbDogXCJ3aWR0aC1mdWxsXCIsXG59O1xuXG5jb25zdCBzcGxpdEJ1dHRvbkNzcyA9IFwiOmhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2t9Omhvc3QoW3dpZHRoPWF1dG9dKXtpbmxpbmUtc2l6ZTphdXRvfTpob3N0KFt3aWR0aD1oYWxmXSl7aW5saW5lLXNpemU6NTAlfTpob3N0KFt3aWR0aD1mdWxsXSl7aW5saW5lLXNpemU6MTAwJX06aG9zdDpob3N0KFtraW5kPWJyYW5kXSl7LS1jYWxjaXRlLXNwbGl0LWJ1dHRvbi1iYWNrZ3JvdW5kOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpOy0tY2FsY2l0ZS1zcGxpdC1idXR0b24tZGl2aWRlcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3Q6aG9zdChba2luZD1kYW5nZXJdKXstLWNhbGNpdGUtc3BsaXQtYnV0dG9uLWJhY2tncm91bmQ6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpOy0tY2FsY2l0ZS1zcGxpdC1idXR0b24tZGl2aWRlcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3Q6aG9zdChba2luZD1uZXV0cmFsXSl7LS1jYWxjaXRlLXNwbGl0LWJ1dHRvbi1iYWNrZ3JvdW5kOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKTstLWNhbGNpdGUtc3BsaXQtYnV0dG9uLWRpdmlkZXI6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0Omhvc3QoW2tpbmQ9aW52ZXJzZV0pey0tY2FsY2l0ZS1zcGxpdC1idXR0b24tYmFja2dyb3VuZDp2YXIoLS1jYWxjaXRlLXVpLWludmVyc2UpOy0tY2FsY2l0ZS1zcGxpdC1idXR0b24tZGl2aWRlcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW2FwcGVhcmFuY2U9dHJhbnNwYXJlbnRdKTpob3N0KFtraW5kPWJyYW5kXSl7LS1jYWxjaXRlLXNwbGl0LWJ1dHRvbi1kaXZpZGVyOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpOy0tY2FsY2l0ZS1zcGxpdC1idXR0b24tYmFja2dyb3VuZDp0cmFuc3BhcmVudH06aG9zdChbYXBwZWFyYW5jZT10cmFuc3BhcmVudF0pOmhvc3QoW2tpbmQ9ZGFuZ2VyXSl7LS1jYWxjaXRlLXNwbGl0LWJ1dHRvbi1kaXZpZGVyOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyKTstLWNhbGNpdGUtc3BsaXQtYnV0dG9uLWJhY2tncm91bmQ6dHJhbnNwYXJlbnR9Omhvc3QoW2FwcGVhcmFuY2U9dHJhbnNwYXJlbnRdKTpob3N0KFtraW5kPW5ldXRyYWxdKXstLWNhbGNpdGUtc3BsaXQtYnV0dG9uLWRpdmlkZXI6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpOy0tY2FsY2l0ZS1zcGxpdC1idXR0b24tYmFja2dyb3VuZDp0cmFuc3BhcmVudH06aG9zdChbYXBwZWFyYW5jZT10cmFuc3BhcmVudF0pOmhvc3QoW2tpbmQ9aW52ZXJzZV0pey0tY2FsY2l0ZS1zcGxpdC1idXR0b24tZGl2aWRlcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7LS1jYWxjaXRlLXNwbGl0LWJ1dHRvbi1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50fTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdKXstLWNhbGNpdGUtc3BsaXQtYnV0dG9uLWJhY2tncm91bmQ6dHJhbnNwYXJlbnR9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXSl7LS1jYWxjaXRlLXNwbGl0LWJ1dHRvbi1iYWNrZ3JvdW5kOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXSk6aG9zdChba2luZD1icmFuZF0pLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmUtZmlsbF0pOmhvc3QoW2tpbmQ9YnJhbmRdKXstLWNhbGNpdGUtc3BsaXQtYnV0dG9uLWRpdmlkZXI6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZV0pOmhvc3QoW2tpbmQ9ZGFuZ2VyXSksOmhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXSk6aG9zdChba2luZD1kYW5nZXJdKXstLWNhbGNpdGUtc3BsaXQtYnV0dG9uLWRpdmlkZXI6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdKTpob3N0KFtraW5kPW5ldXRyYWxdKSw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdKTpob3N0KFtraW5kPW5ldXRyYWxdKXstLWNhbGNpdGUtc3BsaXQtYnV0dG9uLWRpdmlkZXI6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSk7LS1jYWxjaXRlLXNwbGl0LWJ1dHRvbi1iYWNrZ3JvdW5kOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpfTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdKTpob3N0KFtraW5kPWludmVyc2VdKSw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdKTpob3N0KFtraW5kPWludmVyc2VdKXstLWNhbGNpdGUtc3BsaXQtYnV0dG9uLWRpdmlkZXI6dmFyKC0tY2FsY2l0ZS11aS1pbnZlcnNlKX0uY29udGFpbmVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpzdHJldGNofS5jb250YWluZXI+Y2FsY2l0ZS1kcm9wZG93bj5jYWxjaXRlLWJ1dHRvbntibG9jay1zaXplOjEwMCU7dmVydGljYWwtYWxpZ246dG9wfS5kaXZpZGVyLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MXB4O2FsaWduLWl0ZW1zOnN0cmV0Y2g7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXNwbGl0LWJ1dHRvbi1iYWNrZ3JvdW5kKX0uZGl2aWRlcnttYXJnaW4tYmxvY2s6MC4yNXJlbTtkaXNwbGF5OmlubGluZS1ibG9jaztpbmxpbmUtc2l6ZToxcHg7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXNwbGl0LWJ1dHRvbi1kaXZpZGVyKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdKSAuZGl2aWRlci1jb250YWluZXIsOmhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZV0pIC5kaXZpZGVyLWNvbnRhaW5lcntib3JkZXItYmxvY2s6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtc3BsaXQtYnV0dG9uLWRpdmlkZXIpfTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmUtZmlsbF0pOmhvdmVyIC5kaXZpZGVyLWNvbnRhaW5lciw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXSk6aG92ZXIgLmRpdmlkZXItY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS1zcGxpdC1idXR0b24tZGl2aWRlcil9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXTpob3ZlcikgLmRpdmlkZXItY29udGFpbmVyLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdOmhvdmVyKSAuZGl2aWRlci1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXNwbGl0LWJ1dHRvbi1kaXZpZGVyKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdOmZvY3VzLXdpdGhpbik6aG9zdChba2luZD1icmFuZF0pLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdOmZvY3VzLXdpdGhpbik6aG9zdChba2luZD1icmFuZF0pey0tY2FsY2l0ZS1zcGxpdC1idXR0b24tZGl2aWRlcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kLXByZXNzKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdOmZvY3VzLXdpdGhpbik6aG9zdChba2luZD1kYW5nZXJdKSw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXTpmb2N1cy13aXRoaW4pOmhvc3QoW2tpbmQ9ZGFuZ2VyXSl7LS1jYWxjaXRlLXNwbGl0LWJ1dHRvbi1kaXZpZGVyOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyLXByZXNzKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdOmZvY3VzLXdpdGhpbikgLmRpdmlkZXItY29udGFpbmVyLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdOmZvY3VzLXdpdGhpbikgLmRpdmlkZXItY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS1zcGxpdC1idXR0b24tZGl2aWRlcil9Omhvc3QoW2Rpc2FibGVkXSkgLmRpdmlkZXItY29udGFpbmVye29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSBjYWxjaXRlLWRyb3Bkb3duPmNhbGNpdGUtYnV0dG9ue3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBTcGxpdEJ1dHRvbiA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlU3BsaXRCdXR0b25QcmltYXJ5Q2xpY2sgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVTcGxpdEJ1dHRvblByaW1hcnlDbGlja1wiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVTcGxpdEJ1dHRvblNlY29uZGFyeUNsaWNrID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlU3BsaXRCdXR0b25TZWNvbmRhcnlDbGlja1wiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVTcGxpdEJ1dHRvblByaW1hcnlDbGlja0hhbmRsZXIgPSAoKSA9PiB0aGlzLmNhbGNpdGVTcGxpdEJ1dHRvblByaW1hcnlDbGljay5lbWl0KCk7XG4gICAgdGhpcy5jYWxjaXRlU3BsaXRCdXR0b25TZWNvbmRhcnlDbGlja0hhbmRsZXIgPSAoKSA9PiB0aGlzLmNhbGNpdGVTcGxpdEJ1dHRvblNlY29uZGFyeUNsaWNrLmVtaXQoKTtcbiAgICB0aGlzLmFwcGVhcmFuY2UgPSBcInNvbGlkXCI7XG4gICAgdGhpcy5raW5kID0gXCJicmFuZFwiO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuZHJvcGRvd25JY29uVHlwZSA9IFwiY2hldnJvblwiO1xuICAgIHRoaXMuZHJvcGRvd25MYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm92ZXJsYXlQb3NpdGlvbmluZyA9IFwiYWJzb2x1dGVcIjtcbiAgICB0aGlzLnByaW1hcnlJY29uRW5kID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucHJpbWFyeUljb25GbGlwUnRsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucHJpbWFyeUljb25TdGFydCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnByaW1hcnlMYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnByaW1hcnlUZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLndpZHRoID0gXCJhdXRvXCI7XG4gIH1cbiAgaGFuZGxlRGlzYWJsZWRDaGFuZ2UodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBhY3RpdmVIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQncyBmaXJzdCBmb2N1c2FibGUgZWxlbWVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uV2lkdGggPSB0aGlzLndpZHRoID09PSBcImF1dG9cIiA/IFwiYXV0b1wiIDogXCJmdWxsXCI7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250YWluZXIgfSwgaChcImNhbGNpdGUtYnV0dG9uXCIsIHsgYXBwZWFyYW5jZTogdGhpcy5hcHBlYXJhbmNlLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgXCJpY29uLWVuZFwiOiB0aGlzLnByaW1hcnlJY29uRW5kID8gdGhpcy5wcmltYXJ5SWNvbkVuZCA6IG51bGwsIFwiaWNvbi1zdGFydFwiOiB0aGlzLnByaW1hcnlJY29uU3RhcnQgPyB0aGlzLnByaW1hcnlJY29uU3RhcnQgOiBudWxsLCBpY29uRmxpcFJ0bDogdGhpcy5wcmltYXJ5SWNvbkZsaXBSdGwgPyB0aGlzLnByaW1hcnlJY29uRmxpcFJ0bCA6IG51bGwsIGtpbmQ6IHRoaXMua2luZCwgbGFiZWw6IHRoaXMucHJpbWFyeUxhYmVsLCBsb2FkaW5nOiB0aGlzLmxvYWRpbmcsIG9uQ2xpY2s6IHRoaXMuY2FsY2l0ZVNwbGl0QnV0dG9uUHJpbWFyeUNsaWNrSGFuZGxlciwgc2NhbGU6IHRoaXMuc2NhbGUsIHNwbGl0Q2hpbGQ6IFwicHJpbWFyeVwiLCB0eXBlOiBcImJ1dHRvblwiLCB3aWR0aDogYnV0dG9uV2lkdGggfSwgdGhpcy5wcmltYXJ5VGV4dCksIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmRpdmlkZXJDb250YWluZXIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuZGl2aWRlciB9KSksIGgoXCJjYWxjaXRlLWRyb3Bkb3duXCIsIHsgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsIG9uQ2xpY2s6IHRoaXMuY2FsY2l0ZVNwbGl0QnV0dG9uU2Vjb25kYXJ5Q2xpY2tIYW5kbGVyLCBvcGVuOiB0aGlzLmFjdGl2ZSwgb3ZlcmxheVBvc2l0aW9uaW5nOiB0aGlzLm92ZXJsYXlQb3NpdGlvbmluZywgcGxhY2VtZW50OiBcImJvdHRvbS1lbmRcIiwgc2NhbGU6IHRoaXMuc2NhbGUsIHdpZHRoOiB0aGlzLnNjYWxlIH0sIGgoXCJjYWxjaXRlLWJ1dHRvblwiLCB7IGFwcGVhcmFuY2U6IHRoaXMuYXBwZWFyYW5jZSwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsIFwiaWNvbi1zdGFydFwiOiB0aGlzLmRyb3Bkb3duSWNvbiwga2luZDogdGhpcy5raW5kLCBsYWJlbDogdGhpcy5kcm9wZG93bkxhYmVsLCBzY2FsZTogdGhpcy5zY2FsZSwgc2xvdDogXCJ0cmlnZ2VyXCIsIHNwbGl0Q2hpbGQ6IFwic2Vjb25kYXJ5XCIsIHR5cGU6IFwiYnV0dG9uXCIgfSksIGgoXCJzbG90XCIsIG51bGwpKSkpO1xuICB9XG4gIGdldCBkcm9wZG93bkljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJvcGRvd25JY29uVHlwZSA9PT0gXCJjaGV2cm9uXCJcbiAgICAgID8gXCJjaGV2cm9uRG93blwiXG4gICAgICA6IHRoaXMuZHJvcGRvd25JY29uVHlwZSA9PT0gXCJjYXJldFwiXG4gICAgICAgID8gXCJjYXJldERvd25cIlxuICAgICAgICA6IHRoaXMuZHJvcGRvd25JY29uVHlwZSA9PT0gXCJlbGxpcHNpc1wiXG4gICAgICAgICAgPyBcImVsbGlwc2lzXCJcbiAgICAgICAgICA6IFwiaGFuZGxlLXZlcnRpY2FsXCI7XG4gIH1cbiAgc3RhdGljIGdldCBkZWxlZ2F0ZXNGb2N1cygpIHsgcmV0dXJuIHRydWU7IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiZGlzYWJsZWRcIjogW1wiaGFuZGxlRGlzYWJsZWRDaGFuZ2VcIl0sXG4gICAgXCJhY3RpdmVcIjogW1wiYWN0aXZlSGFuZGxlclwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBzcGxpdEJ1dHRvbkNzczsgfVxufSwgWzE3LCBcImNhbGNpdGUtc3BsaXQtYnV0dG9uXCIsIHtcbiAgICBcImFwcGVhcmFuY2VcIjogWzUxM10sXG4gICAgXCJraW5kXCI6IFs1MTNdLFxuICAgIFwiZGlzYWJsZWRcIjogWzUxNl0sXG4gICAgXCJhY3RpdmVcIjogWzE1NDBdLFxuICAgIFwiZHJvcGRvd25JY29uVHlwZVwiOiBbNTEzLCBcImRyb3Bkb3duLWljb24tdHlwZVwiXSxcbiAgICBcImRyb3Bkb3duTGFiZWxcIjogWzUxMywgXCJkcm9wZG93bi1sYWJlbFwiXSxcbiAgICBcImxvYWRpbmdcIjogWzUxNl0sXG4gICAgXCJvdmVybGF5UG9zaXRpb25pbmdcIjogWzUxMywgXCJvdmVybGF5LXBvc2l0aW9uaW5nXCJdLFxuICAgIFwicHJpbWFyeUljb25FbmRcIjogWzUxMywgXCJwcmltYXJ5LWljb24tZW5kXCJdLFxuICAgIFwicHJpbWFyeUljb25GbGlwUnRsXCI6IFs1MTMsIFwicHJpbWFyeS1pY29uLWZsaXAtcnRsXCJdLFxuICAgIFwicHJpbWFyeUljb25TdGFydFwiOiBbNTEzLCBcInByaW1hcnktaWNvbi1zdGFydFwiXSxcbiAgICBcInByaW1hcnlMYWJlbFwiOiBbNTEzLCBcInByaW1hcnktbGFiZWxcIl0sXG4gICAgXCJwcmltYXJ5VGV4dFwiOiBbNTEzLCBcInByaW1hcnktdGV4dFwiXSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwid2lkdGhcIjogWzUxM10sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1zcGxpdC1idXR0b25cIiwgXCJjYWxjaXRlLWJ1dHRvblwiLCBcImNhbGNpdGUtZHJvcGRvd25cIiwgXCJjYWxjaXRlLWljb25cIiwgXCJjYWxjaXRlLWxvYWRlclwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS1zcGxpdC1idXR0b25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBTcGxpdEJ1dHRvbik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1idXR0b25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtZHJvcGRvd25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkNCgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQzKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1sb2FkZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcblxuY29uc3QgQ2FsY2l0ZVNwbGl0QnV0dG9uID0gU3BsaXRCdXR0b247XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gZGVmaW5lQ3VzdG9tRWxlbWVudCQxO1xuXG5leHBvcnQgeyBDYWxjaXRlU3BsaXRCdXR0b24sIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==