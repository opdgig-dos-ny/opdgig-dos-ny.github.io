"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-inline-editable_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-inline-editable.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-inline-editable.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteInlineEditable: () => (/* binding */ CalciteInlineEditable),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _label2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./label2.js */ "./node_modules/@esri/calcite-components/dist/components/label2.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./button.js */ "./node_modules/@esri/calcite-components/dist/components/button.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */












const CSS = {
  wrapper: "wrapper",
  confirmChangesButton: "confirm-changes-button",
  cancelEditingButton: "cancel-editing-button",
  inputWrapper: "input-wrapper",
  cancelEditingButtonWrapper: "cancel-editing-button-wrapper",
  enableEditingButton: "enable-editing-button",
  controlsWrapper: "controls-wrapper",
};

const inlineEditableCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) .controls-wrapper{block-size:1.5rem}:host([scale=m]) .controls-wrapper{block-size:2rem}:host([scale=l]) .controls-wrapper{block-size:2.75rem}:host(:not([editing-enabled]):not([disabled])) .wrapper:hover{background-color:var(--calcite-ui-foreground-2)}.wrapper{box-sizing:border-box;display:flex;justify-content:space-between;background-color:var(--calcite-ui-foreground-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.wrapper .input-wrapper{flex:1 1 0%}.controls-wrapper{display:flex}:host([disabled]) .cancel-editing-button-wrapper{border-color:var(--calcite-ui-border-2)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}";

const InlineEditable = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInlineEditableEditCancel = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteInlineEditableEditCancel", 6);
    this.calciteInlineEditableEditConfirm = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteInlineEditableEditConfirm", 6);
    this.calciteInternalInlineEditableEnableEditingChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.createEvent)(this, "calciteInternalInlineEditableEnableEditingChange", 6);
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_5__.c)("mutation", () => this.mutationObserverCallback());
    this.enableEditing = () => {
      this.valuePriorToEditing = this.inputElement?.value;
      this.editingEnabled = true;
      this.inputElement?.setFocus();
      this.calciteInternalInlineEditableEnableEditingChange.emit();
    };
    this.disableEditing = () => {
      this.editingEnabled = false;
    };
    this.cancelEditing = () => {
      if (this.inputElement) {
        this.inputElement.value = this.valuePriorToEditing;
      }
      this.disableEditing();
      this.enableEditingButton.setFocus();
      if (!this.editingEnabled && !!this.shouldEmitCancel) {
        this.calciteInlineEditableEditCancel.emit();
      }
    };
    this.escapeKeyHandler = async (event) => {
      if (event.defaultPrevented) {
        return;
      }
      if (event.key === "Escape") {
        event.preventDefault();
        this.cancelEditing();
      }
      if (event.key === "Tab" && this.shouldShowControls) {
        if (!event.shiftKey && event.target === this.inputElement) {
          event.preventDefault();
          this.cancelEditingButton.setFocus();
        }
        if (!!event.shiftKey && event.target === this.cancelEditingButton) {
          event.preventDefault();
          this.inputElement?.setFocus();
        }
      }
    };
    this.cancelEditingHandler = async (event) => {
      event.preventDefault();
      this.cancelEditing();
    };
    this.enableEditingHandler = async (event) => {
      if (this.disabled ||
        event.target === this.cancelEditingButton ||
        event.target === this.confirmEditingButton) {
        return;
      }
      event.preventDefault();
      if (!this.editingEnabled) {
        this.enableEditing();
      }
    };
    this.confirmChangesHandler = async (event) => {
      event.preventDefault();
      this.calciteInlineEditableEditConfirm.emit();
      try {
        if (this.afterConfirm) {
          this.loading = true;
          await this.afterConfirm();
          this.disableEditing();
          this.enableEditingButton.setFocus();
        }
      }
      catch (error) {
      }
      finally {
        this.loading = false;
      }
    };
    this.disabled = false;
    this.editingEnabled = false;
    this.loading = false;
    this.controls = false;
    this.scale = undefined;
    this.afterConfirm = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = undefined;
  }
  disabledWatcher(disabled) {
    if (this.inputElement) {
      this.inputElement.disabled = disabled;
    }
  }
  editingEnabledWatcher(newValue, oldValue) {
    if (this.inputElement) {
      this.inputElement.editingEnabled = newValue;
    }
    if (!newValue && !!oldValue) {
      this.shouldEmitCancel = true;
    }
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    this.mutationObserver?.observe(this.el, { childList: true });
    this.mutationObserverCallback();
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.a)(this);
    await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
  }
  disconnectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    this.mutationObserver?.disconnect();
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: CSS.wrapper, onClick: this.enableEditingHandler, onKeyDown: this.escapeKeyHandler }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: CSS.inputWrapper }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot", null)), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: CSS.controlsWrapper }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("calcite-button", { appearance: "transparent", class: CSS.enableEditingButton, disabled: this.disabled, iconStart: "pencil", kind: "neutral", label: this.messages.enableEditing, onClick: this.enableEditingHandler, scale: this.scale, style: {
        opacity: this.editingEnabled ? "0" : "1",
        width: this.editingEnabled ? "0" : "inherit",
      }, type: "button",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.enableEditingButton = el) }), this.shouldShowControls && [
      (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("div", { class: CSS.cancelEditingButtonWrapper }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("calcite-button", { appearance: "transparent", class: CSS.cancelEditingButton, disabled: this.disabled, iconStart: "x", kind: "neutral", label: this.messages.cancelEditing, onClick: this.cancelEditingHandler, scale: this.scale, type: "button",
        // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
        ref: (el) => (this.cancelEditingButton = el) })),
      (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_10__.h)("calcite-button", { appearance: "solid", class: CSS.confirmChangesButton, disabled: this.disabled, iconStart: "check", kind: "brand", label: this.messages.confirmChanges, loading: this.loading, onClick: this.confirmChangesHandler, scale: this.scale, type: "button",
        // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
        ref: (el) => (this.confirmEditingButton = el) }),
    ])));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  blurHandler() {
    if (!this.controls) {
      this.disableEditing();
    }
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_6__.u)(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    this.el?.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  mutationObserverCallback() {
    this.updateSlottedInput();
    this.scale = this.scale || this.inputElement?.scale;
  }
  onLabelClick() {
    this.setFocus();
  }
  updateSlottedInput() {
    const inputElement = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.g)(this.el, {
      matches: "calcite-input",
    });
    this.inputElement = inputElement;
    if (!inputElement) {
      return;
    }
    this.inputElement.disabled = this.disabled;
    this.inputElement.label = this.inputElement.label || (0,_label2_js__WEBPACK_IMPORTED_MODULE_2__.g)(this);
  }
  get shouldShowControls() {
    return this.editingEnabled && this.controls;
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "disabled": ["disabledWatcher"],
    "editingEnabled": ["editingEnabledWatcher"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return inlineEditableCss; }
}, [17, "calcite-inline-editable", {
    "disabled": [516],
    "editingEnabled": [1540, "editing-enabled"],
    "loading": [1540],
    "controls": [516],
    "scale": [1537],
    "afterConfirm": [16],
    "messages": [1040],
    "messageOverrides": [1040],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "setFocus": [64]
  }, [[0, "calciteInternalInputBlur", "blurHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-inline-editable", "calcite-button", "calcite-icon", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-inline-editable":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, InlineEditable);
      }
      break;
    case "calcite-button":
      if (!customElements.get(tagName)) {
        (0,_button_js__WEBPACK_IMPORTED_MODULE_7__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_8__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_9__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteInlineEditable = InlineEditable;
const defineCustomElement = defineCustomElement$1;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvY2ZiYzA3YzczOTMzNDE1YTYwMzliMTZlMTQ5NzMxOTQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDeUc7QUFDOUQ7QUFDd0U7QUFDMUI7QUFDcUI7QUFDaEM7QUFDekI7QUFDNkQ7QUFDekQ7QUFDRjtBQUNFOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTZDLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGNBQWMsbUNBQW1DLGtCQUFrQixtQ0FBbUMsZ0JBQWdCLG1DQUFtQyxtQkFBbUIsOERBQThELGdEQUFnRCxTQUFTLHNCQUFzQixhQUFhLDhCQUE4QixnREFBZ0QsNkZBQTZGLHdCQUF3QixZQUFZLGtCQUFrQixhQUFhLGlEQUFpRCx3Q0FBd0MseUdBQXlHLFVBQVUsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUVqaEMscUNBQXFDLDJGQUFrQixlQUFlLGdGQUFXO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG9GQUFXO0FBQ3RELDRDQUE0QyxvRkFBVztBQUN2RCw0REFBNEQsb0ZBQVc7QUFDdkUsNEJBQTRCLGdEQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBa0I7QUFDdEIsSUFBSSw2Q0FBWTtBQUNoQixJQUFJLDZDQUFnQjtBQUNwQixJQUFJLDBDQUFlO0FBQ25CLDhDQUE4QyxpQkFBaUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBc0I7QUFDMUIsVUFBVSwwQ0FBYTtBQUN2QjtBQUNBO0FBQ0EsSUFBSSwrQ0FBa0I7QUFDdEI7QUFDQTtBQUNBLElBQUksa0RBQXFCO0FBQ3pCLElBQUksNkNBQWU7QUFDbkIsSUFBSSw2Q0FBbUI7QUFDdkIsSUFBSSwwQ0FBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBcUI7QUFDekI7QUFDQTtBQUNBLFlBQVksMEVBQUMsVUFBVSwwRkFBMEYsRUFBRSwwRUFBQyxVQUFVLHlCQUF5QixFQUFFLDBFQUFDLGlCQUFpQiwwRUFBQyxVQUFVLDRCQUE0QixFQUFFLDBFQUFDLHFCQUFxQjtBQUMxTztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0Esb0RBQW9EO0FBQ3BELE1BQU0sMEVBQUMsVUFBVSx1Q0FBdUMsRUFBRSwwRUFBQyxxQkFBcUI7QUFDaEY7QUFDQSxzREFBc0Q7QUFDdEQsTUFBTSwwRUFBQyxxQkFBcUI7QUFDNUI7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBDQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtDQUFrQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMENBQVU7QUFDbkM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCw2Q0FBWTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyw0QkFBNEI7QUFDNUIsYUFBYTtBQUNiLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZDQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkNBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2Q0FBcUI7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRXNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NhbGNpdGUtaW5saW5lLWVkaXRhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTbG90dGVkIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0SW50ZXJhY3RpdmUsIGQgYXMgZGlzY29ubmVjdEludGVyYWN0aXZlLCB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TGFiZWwsIGQgYXMgZGlzY29ubmVjdExhYmVsLCBnIGFzIGdldExhYmVsVGV4dCB9IGZyb20gJy4vbGFiZWwyLmpzJztcbmltcG9ydCB7IGEgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgcyBhcyBzZXRDb21wb25lbnRMb2FkZWQsIGMgYXMgY29tcG9uZW50Rm9jdXNhYmxlIH0gZnJvbSAnLi9sb2FkYWJsZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcywgdSBhcyB1cGRhdGVNZXNzYWdlcyB9IGZyb20gJy4vdDluLmpzJztcbmltcG9ydCB7IGQgYXMgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0IH0gZnJvbSAnLi9idXR0b24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDMgfSBmcm9tICcuL2ljb24uanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL2xvYWRlci5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgd3JhcHBlcjogXCJ3cmFwcGVyXCIsXG4gIGNvbmZpcm1DaGFuZ2VzQnV0dG9uOiBcImNvbmZpcm0tY2hhbmdlcy1idXR0b25cIixcbiAgY2FuY2VsRWRpdGluZ0J1dHRvbjogXCJjYW5jZWwtZWRpdGluZy1idXR0b25cIixcbiAgaW5wdXRXcmFwcGVyOiBcImlucHV0LXdyYXBwZXJcIixcbiAgY2FuY2VsRWRpdGluZ0J1dHRvbldyYXBwZXI6IFwiY2FuY2VsLWVkaXRpbmctYnV0dG9uLXdyYXBwZXJcIixcbiAgZW5hYmxlRWRpdGluZ0J1dHRvbjogXCJlbmFibGUtZWRpdGluZy1idXR0b25cIixcbiAgY29udHJvbHNXcmFwcGVyOiBcImNvbnRyb2xzLXdyYXBwZXJcIixcbn07XG5cbmNvbnN0IGlubGluZUVkaXRhYmxlQ3NzID0gXCI6aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmJsb2NrfTpob3N0KFtzY2FsZT1zXSkgLmNvbnRyb2xzLXdyYXBwZXJ7YmxvY2stc2l6ZToxLjVyZW19Omhvc3QoW3NjYWxlPW1dKSAuY29udHJvbHMtd3JhcHBlcntibG9jay1zaXplOjJyZW19Omhvc3QoW3NjYWxlPWxdKSAuY29udHJvbHMtd3JhcHBlcntibG9jay1zaXplOjIuNzVyZW19Omhvc3QoOm5vdChbZWRpdGluZy1lbmFibGVkXSk6bm90KFtkaXNhYmxlZF0pKSAud3JhcHBlcjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX0ud3JhcHBlcntib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzfS53cmFwcGVyIC5pbnB1dC13cmFwcGVye2ZsZXg6MSAxIDAlfS5jb250cm9scy13cmFwcGVye2Rpc3BsYXk6ZmxleH06aG9zdChbZGlzYWJsZWRdKSAuY2FuY2VsLWVkaXRpbmctYnV0dG9uLXdyYXBwZXJ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTIpfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgSW5saW5lRWRpdGFibGUgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5fX2F0dGFjaFNoYWRvdygpO1xuICAgIHRoaXMuY2FsY2l0ZUlubGluZUVkaXRhYmxlRWRpdENhbmNlbCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUlubGluZUVkaXRhYmxlRWRpdENhbmNlbFwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbmxpbmVFZGl0YWJsZUVkaXRDb25maXJtID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5saW5lRWRpdGFibGVFZGl0Q29uZmlybVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbElubGluZUVkaXRhYmxlRW5hYmxlRWRpdGluZ0NoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsSW5saW5lRWRpdGFibGVFbmFibGVFZGl0aW5nQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgKCkgPT4gdGhpcy5tdXRhdGlvbk9ic2VydmVyQ2FsbGJhY2soKSk7XG4gICAgdGhpcy5lbmFibGVFZGl0aW5nID0gKCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZVByaW9yVG9FZGl0aW5nID0gdGhpcy5pbnB1dEVsZW1lbnQ/LnZhbHVlO1xuICAgICAgdGhpcy5lZGl0aW5nRW5hYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudD8uc2V0Rm9jdXMoKTtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsSW5saW5lRWRpdGFibGVFbmFibGVFZGl0aW5nQ2hhbmdlLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuZGlzYWJsZUVkaXRpbmcgPSAoKSA9PiB7XG4gICAgICB0aGlzLmVkaXRpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgfTtcbiAgICB0aGlzLmNhbmNlbEVkaXRpbmcgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSB0aGlzLnZhbHVlUHJpb3JUb0VkaXRpbmc7XG4gICAgICB9XG4gICAgICB0aGlzLmRpc2FibGVFZGl0aW5nKCk7XG4gICAgICB0aGlzLmVuYWJsZUVkaXRpbmdCdXR0b24uc2V0Rm9jdXMoKTtcbiAgICAgIGlmICghdGhpcy5lZGl0aW5nRW5hYmxlZCAmJiAhIXRoaXMuc2hvdWxkRW1pdENhbmNlbCkge1xuICAgICAgICB0aGlzLmNhbGNpdGVJbmxpbmVFZGl0YWJsZUVkaXRDYW5jZWwuZW1pdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5lc2NhcGVLZXlIYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2FuY2VsRWRpdGluZygpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJUYWJcIiAmJiB0aGlzLnNob3VsZFNob3dDb250cm9scykge1xuICAgICAgICBpZiAoIWV2ZW50LnNoaWZ0S2V5ICYmIGV2ZW50LnRhcmdldCA9PT0gdGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuY2FuY2VsRWRpdGluZ0J1dHRvbi5zZXRGb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghIWV2ZW50LnNoaWZ0S2V5ICYmIGV2ZW50LnRhcmdldCA9PT0gdGhpcy5jYW5jZWxFZGl0aW5nQnV0dG9uKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudD8uc2V0Rm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jYW5jZWxFZGl0aW5nSGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuY2FuY2VsRWRpdGluZygpO1xuICAgIH07XG4gICAgdGhpcy5lbmFibGVFZGl0aW5nSGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHxcbiAgICAgICAgZXZlbnQudGFyZ2V0ID09PSB0aGlzLmNhbmNlbEVkaXRpbmdCdXR0b24gfHxcbiAgICAgICAgZXZlbnQudGFyZ2V0ID09PSB0aGlzLmNvbmZpcm1FZGl0aW5nQnV0dG9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoIXRoaXMuZWRpdGluZ0VuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbmFibGVFZGl0aW5nKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmNvbmZpcm1DaGFuZ2VzSGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuY2FsY2l0ZUlubGluZUVkaXRhYmxlRWRpdENvbmZpcm0uZW1pdCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMuYWZ0ZXJDb25maXJtKSB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLmFmdGVyQ29uZmlybSgpO1xuICAgICAgICAgIHRoaXMuZGlzYWJsZUVkaXRpbmcoKTtcbiAgICAgICAgICB0aGlzLmVuYWJsZUVkaXRpbmdCdXR0b24uc2V0Rm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICB9XG4gICAgICBmaW5hbGx5IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5lZGl0aW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuY29udHJvbHMgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWZ0ZXJDb25maXJtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gdW5kZWZpbmVkO1xuICB9XG4gIGRpc2FibGVkV2F0Y2hlcihkaXNhYmxlZCkge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICB9XG4gIH1cbiAgZWRpdGluZ0VuYWJsZWRXYXRjaGVyKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQuZWRpdGluZ0VuYWJsZWQgPSBuZXdWYWx1ZTtcbiAgICB9XG4gICAgaWYgKCFuZXdWYWx1ZSAmJiAhIW9sZFZhbHVlKSB7XG4gICAgICB0aGlzLnNob3VsZEVtaXRDYW5jZWwgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGNvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/Lm9ic2VydmUodGhpcy5lbCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyQ2FsbGJhY2soKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLndyYXBwZXIsIG9uQ2xpY2s6IHRoaXMuZW5hYmxlRWRpdGluZ0hhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5lc2NhcGVLZXlIYW5kbGVyIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmlucHV0V3JhcHBlciB9LCBoKFwic2xvdFwiLCBudWxsKSksIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbnRyb2xzV3JhcHBlciB9LCBoKFwiY2FsY2l0ZS1idXR0b25cIiwgeyBhcHBlYXJhbmNlOiBcInRyYW5zcGFyZW50XCIsIGNsYXNzOiBDU1MuZW5hYmxlRWRpdGluZ0J1dHRvbiwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsIGljb25TdGFydDogXCJwZW5jaWxcIiwga2luZDogXCJuZXV0cmFsXCIsIGxhYmVsOiB0aGlzLm1lc3NhZ2VzLmVuYWJsZUVkaXRpbmcsIG9uQ2xpY2s6IHRoaXMuZW5hYmxlRWRpdGluZ0hhbmRsZXIsIHNjYWxlOiB0aGlzLnNjYWxlLCBzdHlsZToge1xuICAgICAgICBvcGFjaXR5OiB0aGlzLmVkaXRpbmdFbmFibGVkID8gXCIwXCIgOiBcIjFcIixcbiAgICAgICAgd2lkdGg6IHRoaXMuZWRpdGluZ0VuYWJsZWQgPyBcIjBcIiA6IFwiaW5oZXJpdFwiLFxuICAgICAgfSwgdHlwZTogXCJidXR0b25cIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMuZW5hYmxlRWRpdGluZ0J1dHRvbiA9IGVsKSB9KSwgdGhpcy5zaG91bGRTaG93Q29udHJvbHMgJiYgW1xuICAgICAgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY2FuY2VsRWRpdGluZ0J1dHRvbldyYXBwZXIgfSwgaChcImNhbGNpdGUtYnV0dG9uXCIsIHsgYXBwZWFyYW5jZTogXCJ0cmFuc3BhcmVudFwiLCBjbGFzczogQ1NTLmNhbmNlbEVkaXRpbmdCdXR0b24sIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBpY29uU3RhcnQ6IFwieFwiLCBraW5kOiBcIm5ldXRyYWxcIiwgbGFiZWw6IHRoaXMubWVzc2FnZXMuY2FuY2VsRWRpdGluZywgb25DbGljazogdGhpcy5jYW5jZWxFZGl0aW5nSGFuZGxlciwgc2NhbGU6IHRoaXMuc2NhbGUsIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5jYW5jZWxFZGl0aW5nQnV0dG9uID0gZWwpIH0pKSxcbiAgICAgIGgoXCJjYWxjaXRlLWJ1dHRvblwiLCB7IGFwcGVhcmFuY2U6IFwic29saWRcIiwgY2xhc3M6IENTUy5jb25maXJtQ2hhbmdlc0J1dHRvbiwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsIGljb25TdGFydDogXCJjaGVja1wiLCBraW5kOiBcImJyYW5kXCIsIGxhYmVsOiB0aGlzLm1lc3NhZ2VzLmNvbmZpcm1DaGFuZ2VzLCBsb2FkaW5nOiB0aGlzLmxvYWRpbmcsIG9uQ2xpY2s6IHRoaXMuY29uZmlybUNoYW5nZXNIYW5kbGVyLCBzY2FsZTogdGhpcy5zY2FsZSwgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzIC0tIHJlZiBzaG91bGQgYmUgbGFzdCBzbyBub2RlIGF0dHJzL3Byb3BzIGFyZSBpbiBzeW5jIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL3B1bGwvNjUzMClcbiAgICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLmNvbmZpcm1FZGl0aW5nQnV0dG9uID0gZWwpIH0pLFxuICAgIF0pKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYmx1ckhhbmRsZXIoKSB7XG4gICAgaWYgKCF0aGlzLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLmRpc2FibGVFZGl0aW5nKCk7XG4gICAgfVxuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRGb2N1c2FibGUodGhpcyk7XG4gICAgdGhpcy5lbD8uZm9jdXMoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBtdXRhdGlvbk9ic2VydmVyQ2FsbGJhY2soKSB7XG4gICAgdGhpcy51cGRhdGVTbG90dGVkSW5wdXQoKTtcbiAgICB0aGlzLnNjYWxlID0gdGhpcy5zY2FsZSB8fCB0aGlzLmlucHV0RWxlbWVudD8uc2NhbGU7XG4gIH1cbiAgb25MYWJlbENsaWNrKCkge1xuICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgfVxuICB1cGRhdGVTbG90dGVkSW5wdXQoKSB7XG4gICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZ2V0U2xvdHRlZCh0aGlzLmVsLCB7XG4gICAgICBtYXRjaGVzOiBcImNhbGNpdGUtaW5wdXRcIixcbiAgICB9KTtcbiAgICB0aGlzLmlucHV0RWxlbWVudCA9IGlucHV0RWxlbWVudDtcbiAgICBpZiAoIWlucHV0RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlucHV0RWxlbWVudC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubGFiZWwgPSB0aGlzLmlucHV0RWxlbWVudC5sYWJlbCB8fCBnZXRMYWJlbFRleHQodGhpcyk7XG4gIH1cbiAgZ2V0IHNob3VsZFNob3dDb250cm9scygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0aW5nRW5hYmxlZCAmJiB0aGlzLmNvbnRyb2xzO1xuICB9XG4gIHN0YXRpYyBnZXQgZGVsZWdhdGVzRm9jdXMoKSB7IHJldHVybiB0cnVlOyB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZFdhdGNoZXJcIl0sXG4gICAgXCJlZGl0aW5nRW5hYmxlZFwiOiBbXCJlZGl0aW5nRW5hYmxlZFdhdGNoZXJcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIGlubGluZUVkaXRhYmxlQ3NzOyB9XG59LCBbMTcsIFwiY2FsY2l0ZS1pbmxpbmUtZWRpdGFibGVcIiwge1xuICAgIFwiZGlzYWJsZWRcIjogWzUxNl0sXG4gICAgXCJlZGl0aW5nRW5hYmxlZFwiOiBbMTU0MCwgXCJlZGl0aW5nLWVuYWJsZWRcIl0sXG4gICAgXCJsb2FkaW5nXCI6IFsxNTQwXSxcbiAgICBcImNvbnRyb2xzXCI6IFs1MTZdLFxuICAgIFwic2NhbGVcIjogWzE1MzddLFxuICAgIFwiYWZ0ZXJDb25maXJtXCI6IFsxNl0sXG4gICAgXCJtZXNzYWdlc1wiOiBbMTA0MF0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFsxMDQwXSxcbiAgICBcImRlZmF1bHRNZXNzYWdlc1wiOiBbMzJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFszMl0sXG4gICAgXCJzZXRGb2N1c1wiOiBbNjRdXG4gIH0sIFtbMCwgXCJjYWxjaXRlSW50ZXJuYWxJbnB1dEJsdXJcIiwgXCJibHVySGFuZGxlclwiXV1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1pbmxpbmUtZWRpdGFibGVcIiwgXCJjYWxjaXRlLWJ1dHRvblwiLCBcImNhbGNpdGUtaWNvblwiLCBcImNhbGNpdGUtbG9hZGVyXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWlubGluZS1lZGl0YWJsZVwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIElubGluZUVkaXRhYmxlKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWJ1dHRvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQ0KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDMoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWxvYWRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQyKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlSW5saW5lRWRpdGFibGUgPSBJbmxpbmVFZGl0YWJsZTtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IENhbGNpdGVJbmxpbmVFZGl0YWJsZSwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9