"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_form_js-node_modules_esri_calcit-e7c5be"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/form.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/form.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ HiddenFormInputSlot),
/* harmony export */   a: () => (/* binding */ afterConnectDefaultValueSet),
/* harmony export */   c: () => (/* binding */ connectForm),
/* harmony export */   d: () => (/* binding */ disconnectForm),
/* harmony export */   f: () => (/* binding */ findAssociatedForm),
/* harmony export */   r: () => (/* binding */ resetForm),
/* harmony export */   s: () => (/* binding */ submitForm)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



/**
 * Exported for testing purposes.
 */
const hiddenFormInputSlotName = "hidden-form-input";
function isCheckable(component) {
  return "checked" in component;
}
const onFormResetMap = new WeakMap();
const formComponentSet = new WeakSet();
/**
 * This helps determine if our form component is part of a composite form-associated component.
 *
 * @param form
 * @param formComponentEl
 */
function hasRegisteredFormComponentParent(form, formComponentEl) {
  // if we have a parent component using the form ID attribute, we assume it is form-associated
  const hasParentComponentWithFormIdSet = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.c)(formComponentEl.parentElement, "[form]");
  if (hasParentComponentWithFormIdSet) {
    return true;
  }
  // we use events as a way to test for nested form-associated components across shadow bounds
  const formComponentRegisterEventName = "calciteInternalFormComponentRegister";
  let hasRegisteredFormComponentParent = false;
  form.addEventListener(formComponentRegisterEventName, (event) => {
    hasRegisteredFormComponentParent = event
      .composedPath()
      .some((element) => formComponentSet.has(element));
    event.stopPropagation();
  }, { once: true });
  formComponentEl.dispatchEvent(new CustomEvent(formComponentRegisterEventName, {
    bubbles: true,
    composed: true,
  }));
  return hasRegisteredFormComponentParent;
}
/**
 * Helper to submit a form.
 *
 * @param component
 * @returns true if its associated form was submitted, false otherwise.
 */
function submitForm(component) {
  const { formEl } = component;
  if (!formEl) {
    return false;
  }
  formEl.requestSubmit();
  return true;
}
/**
 * Helper to reset a form.
 *
 * @param component
 */
function resetForm(component) {
  component.formEl?.reset();
}
/**
 * Helper to set up form interactions on connectedCallback.
 *
 * @param component
 */
function connectForm(component) {
  const { el, value } = component;
  const associatedForm = findAssociatedForm(component);
  if (!associatedForm || hasRegisteredFormComponentParent(associatedForm, el)) {
    return;
  }
  component.formEl = associatedForm;
  component.defaultValue = value;
  if (isCheckable(component)) {
    component.defaultChecked = component.checked;
  }
  const boundOnFormReset = (component.onFormReset || onFormReset).bind(component);
  associatedForm.addEventListener("reset", boundOnFormReset);
  onFormResetMap.set(component.el, boundOnFormReset);
  formComponentSet.add(el);
}
/**
 * Utility method to find a form-component's associated form element.
 *
 * @param component
 */
function findAssociatedForm(component) {
  const { el, form } = component;
  return form
    ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.q)(el, { id: form })
    : (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, "form");
}
function onFormReset() {
  if (isCheckable(this)) {
    this.checked = this.defaultChecked;
    return;
  }
  this.value = this.defaultValue;
}
/**
 * Helper to tear down form interactions on disconnectedCallback.
 *
 * @param component
 */
function disconnectForm(component) {
  const { el, formEl } = component;
  if (!formEl) {
    return;
  }
  const boundOnFormReset = onFormResetMap.get(el);
  formEl.removeEventListener("reset", boundOnFormReset);
  onFormResetMap.delete(el);
  component.formEl = null;
  formComponentSet.delete(el);
}
/**
 * Helper for setting the default value on initialization after connectedCallback.
 *
 * Note that this is only needed if the default value cannot be determined on connectedCallback.
 *
 * @param component
 * @param value
 */
function afterConnectDefaultValueSet(component, value) {
  component.defaultValue = value;
}
const hiddenInputChangeHandler = (event) => {
  event.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange", { bubbles: true }));
};
const removeHiddenInputChangeEventListener = (input) => input.removeEventListener("change", hiddenInputChangeHandler);
/**
 * Helper for maintaining a form-associated's hidden input in sync with the component.
 *
 * Based on Ionic's approach: https://github.com/ionic-team/ionic-framework/blob/e4bf052794af9aac07f887013b9250d2a045eba3/core/src/utils/helpers.ts#L198
 *
 * @param component
 */
function syncHiddenFormInput(component) {
  const { el, formEl, name, value } = component;
  const { ownerDocument } = el;
  const inputs = el.querySelectorAll(`input[slot="${hiddenFormInputSlotName}"]`);
  if (!formEl || !name) {
    inputs.forEach((input) => {
      removeHiddenInputChangeEventListener(input);
      input.remove();
    });
    return;
  }
  const values = Array.isArray(value) ? value : [value];
  const extra = [];
  const seen = new Set();
  inputs.forEach((input) => {
    const valueMatch = values.find((val) => 
    /* intentional non-strict equality check */
    val == input.value);
    if (valueMatch != null) {
      seen.add(valueMatch);
      defaultSyncHiddenFormInput(component, input, valueMatch);
    }
    else {
      extra.push(input);
    }
  });
  let docFrag;
  values.forEach((value) => {
    if (seen.has(value)) {
      return;
    }
    let input = extra.pop();
    if (!input) {
      input = ownerDocument.createElement("input");
      input.slot = hiddenFormInputSlotName;
    }
    if (!docFrag) {
      docFrag = ownerDocument.createDocumentFragment();
    }
    docFrag.append(input);
    // emits when hidden input is autofilled
    input.addEventListener("change", hiddenInputChangeHandler);
    defaultSyncHiddenFormInput(component, input, value);
  });
  if (docFrag) {
    el.append(docFrag);
  }
  extra.forEach((input) => {
    removeHiddenInputChangeEventListener(input);
    input.remove();
  });
}
function defaultSyncHiddenFormInput(component, input, value) {
  const { defaultValue, disabled, form, name, required } = component;
  // keep in sync to prevent losing reset value
  input.defaultValue = defaultValue;
  input.disabled = disabled;
  input.name = name;
  input.required = required;
  input.tabIndex = -1;
  // we set the attr as the prop is read-only
  if (form) {
    input.setAttribute("form", form);
  }
  else {
    input.removeAttribute("form");
  }
  if (isCheckable(component)) {
    input.checked = component.checked;
    // keep in sync to prevent losing reset value
    input.defaultChecked = component.defaultChecked;
    // heuristic to support default/on mode from https://html.spec.whatwg.org/multipage/input.html#dom-input-value-default-on
    input.value = component.checked ? value || "on" : "";
  }
  else {
    input.value = value || "";
  }
  component.syncHiddenFormInput?.(input);
}
/**
 * Helper to render the slot for form-associated component's hidden input.
 *
 * If the component has a default slot, this must be placed at the bottom of the component's root container to ensure it is the last child.
 *
 * render(): VNode {
 *   <Host>
 *     <div class={CSS.container}>
 *     // ...
 *     <HiddenFormInputSlot component={this} />
 *     </div>
 *   </Host>
 * }
 *
 * Note that the hidden-form-input Sass mixin must be added to the component's style to apply specific styles.
 *
 * @param root0
 * @param root0.component
 */
const HiddenFormInputSlot = ({ component, }) => {
  syncHiddenFormInput(component);
  return (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", { name: hiddenFormInputSlotName });
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/loadable.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/loadable.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ setUpLoadableComponent),
/* harmony export */   b: () => (/* binding */ componentLoaded),
/* harmony export */   c: () => (/* binding */ componentFocusable),
/* harmony export */   s: () => (/* binding */ setComponentLoaded)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const resolveMap = new WeakMap();
const promiseMap = new WeakMap();
/**
 * This helper util sets up the component for the ability to know when the component has been loaded.
 *
 * This should be used in the `componentWillLoad` lifecycle hook.
 *
 * ```
 * componentWillLoad(): void {
 *   setUpLoadableComponent(this);
 * }
 * ```
 *
 * @param component
 */
function setUpLoadableComponent(component) {
  promiseMap.set(component, new Promise((resolve) => resolveMap.set(component, resolve)));
}
/**
 * This helper util lets the loadable component know that it is now loaded.
 *
 * This should be used in the `componentDidLoad` lifecycle hook.
 *
 * ```
 * componentDidLoad(): void {
 *   setComponentLoaded(this);
 * }
 * ```
 *
 * @param component
 */
function setComponentLoaded(component) {
  resolveMap.get(component)();
}
/**
 * This helper util can be used to ensure a component has been loaded (The "componentDidLoad" Stencil lifecycle method has been called).
 *
 * Requires requires `LoadableComponent` to be implemented.
 *
 * A component developer can await this method before proceeding with any logic that requires a component to be loaded first.
 *
 * ```
 * async myMethod(): Promise<void> {
 *   await componentLoaded(this);
 * }
 * ```
 *
 * @param component
 * @returns Promise<void>
 */
function componentLoaded(component) {
  return promiseMap.get(component);
}
/**
 * This helper util can be used to ensuring the component is loaded and rendered by the browser (The "componentDidLoad" Stencil lifecycle method has been called and any internal elements are focusable).
 *
 * Requires requires `LoadableComponent` to be implemented.
 *
 * A component developer can await this method before proceeding with any logic that requires a component to be loaded first and then an internal element be focused.
 *
 * ```
 * async setFocus(): Promise<void> {
 *   await componentFocusable(this);
 *   this.internalElement?.focus();
 * }
 * ```
 *
 * @param component
 * @returns Promise<void>
 */
async function componentFocusable(component) {
  await componentLoaded(component);
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.Build.isBrowser) {
    return;
  }
  (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.forceUpdate)(component);
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYjUyN2U1YjJkZDFlZDU0MmQwNTFlNjcxYzNiZWY2YjUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMwRjtBQUMvQjs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywwQ0FBaUM7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSSxZQUFZO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFNBQVM7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsWUFBWTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCO0FBQ0EsTUFBTSwwQ0FBaUIsT0FBTyxVQUFVO0FBQ3hDLE1BQU0sMENBQWlDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGFBQWE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GLGVBQWU7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLGdCQUFnQjtBQUMxQixvREFBb0Qsd0JBQXdCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxVQUFVLCtDQUErQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQSx1Q0FBdUMsTUFBTTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQztBQUNBLFNBQVMseUVBQUMsV0FBVywrQkFBK0I7QUFDcEQ7O0FBRXVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFB2SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzRFOztBQUU1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlFQUFLO0FBQ1o7QUFDQTtBQUNBLEVBQUUsbUZBQVc7QUFDYjtBQUNBOztBQUUrRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9mb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9sb2FkYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBxIGFzIHF1ZXJ5RWxlbWVudFJvb3RzLCBjIGFzIGNsb3Nlc3RFbGVtZW50Q3Jvc3NTaGFkb3dCb3VuZGFyeSB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5cbi8qKlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKi9cbmNvbnN0IGhpZGRlbkZvcm1JbnB1dFNsb3ROYW1lID0gXCJoaWRkZW4tZm9ybS1pbnB1dFwiO1xuZnVuY3Rpb24gaXNDaGVja2FibGUoY29tcG9uZW50KSB7XG4gIHJldHVybiBcImNoZWNrZWRcIiBpbiBjb21wb25lbnQ7XG59XG5jb25zdCBvbkZvcm1SZXNldE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBmb3JtQ29tcG9uZW50U2V0ID0gbmV3IFdlYWtTZXQoKTtcbi8qKlxuICogVGhpcyBoZWxwcyBkZXRlcm1pbmUgaWYgb3VyIGZvcm0gY29tcG9uZW50IGlzIHBhcnQgb2YgYSBjb21wb3NpdGUgZm9ybS1hc3NvY2lhdGVkIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0gZm9ybVxuICogQHBhcmFtIGZvcm1Db21wb25lbnRFbFxuICovXG5mdW5jdGlvbiBoYXNSZWdpc3RlcmVkRm9ybUNvbXBvbmVudFBhcmVudChmb3JtLCBmb3JtQ29tcG9uZW50RWwpIHtcbiAgLy8gaWYgd2UgaGF2ZSBhIHBhcmVudCBjb21wb25lbnQgdXNpbmcgdGhlIGZvcm0gSUQgYXR0cmlidXRlLCB3ZSBhc3N1bWUgaXQgaXMgZm9ybS1hc3NvY2lhdGVkXG4gIGNvbnN0IGhhc1BhcmVudENvbXBvbmVudFdpdGhGb3JtSWRTZXQgPSBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkoZm9ybUNvbXBvbmVudEVsLnBhcmVudEVsZW1lbnQsIFwiW2Zvcm1dXCIpO1xuICBpZiAoaGFzUGFyZW50Q29tcG9uZW50V2l0aEZvcm1JZFNldCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8vIHdlIHVzZSBldmVudHMgYXMgYSB3YXkgdG8gdGVzdCBmb3IgbmVzdGVkIGZvcm0tYXNzb2NpYXRlZCBjb21wb25lbnRzIGFjcm9zcyBzaGFkb3cgYm91bmRzXG4gIGNvbnN0IGZvcm1Db21wb25lbnRSZWdpc3RlckV2ZW50TmFtZSA9IFwiY2FsY2l0ZUludGVybmFsRm9ybUNvbXBvbmVudFJlZ2lzdGVyXCI7XG4gIGxldCBoYXNSZWdpc3RlcmVkRm9ybUNvbXBvbmVudFBhcmVudCA9IGZhbHNlO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoZm9ybUNvbXBvbmVudFJlZ2lzdGVyRXZlbnROYW1lLCAoZXZlbnQpID0+IHtcbiAgICBoYXNSZWdpc3RlcmVkRm9ybUNvbXBvbmVudFBhcmVudCA9IGV2ZW50XG4gICAgICAuY29tcG9zZWRQYXRoKClcbiAgICAgIC5zb21lKChlbGVtZW50KSA9PiBmb3JtQ29tcG9uZW50U2V0LmhhcyhlbGVtZW50KSk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgZm9ybUNvbXBvbmVudEVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGZvcm1Db21wb25lbnRSZWdpc3RlckV2ZW50TmFtZSwge1xuICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgY29tcG9zZWQ6IHRydWUsXG4gIH0pKTtcbiAgcmV0dXJuIGhhc1JlZ2lzdGVyZWRGb3JtQ29tcG9uZW50UGFyZW50O1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gc3VibWl0IGEgZm9ybS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcmV0dXJucyB0cnVlIGlmIGl0cyBhc3NvY2lhdGVkIGZvcm0gd2FzIHN1Ym1pdHRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBzdWJtaXRGb3JtKGNvbXBvbmVudCkge1xuICBjb25zdCB7IGZvcm1FbCB9ID0gY29tcG9uZW50O1xuICBpZiAoIWZvcm1FbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmb3JtRWwucmVxdWVzdFN1Ym1pdCgpO1xuICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHJlc2V0IGEgZm9ybS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHJlc2V0Rm9ybShjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmZvcm1FbD8ucmVzZXQoKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHNldCB1cCBmb3JtIGludGVyYWN0aW9ucyBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RGb3JtKGNvbXBvbmVudCkge1xuICBjb25zdCB7IGVsLCB2YWx1ZSB9ID0gY29tcG9uZW50O1xuICBjb25zdCBhc3NvY2lhdGVkRm9ybSA9IGZpbmRBc3NvY2lhdGVkRm9ybShjb21wb25lbnQpO1xuICBpZiAoIWFzc29jaWF0ZWRGb3JtIHx8IGhhc1JlZ2lzdGVyZWRGb3JtQ29tcG9uZW50UGFyZW50KGFzc29jaWF0ZWRGb3JtLCBlbCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29tcG9uZW50LmZvcm1FbCA9IGFzc29jaWF0ZWRGb3JtO1xuICBjb21wb25lbnQuZGVmYXVsdFZhbHVlID0gdmFsdWU7XG4gIGlmIChpc0NoZWNrYWJsZShjb21wb25lbnQpKSB7XG4gICAgY29tcG9uZW50LmRlZmF1bHRDaGVja2VkID0gY29tcG9uZW50LmNoZWNrZWQ7XG4gIH1cbiAgY29uc3QgYm91bmRPbkZvcm1SZXNldCA9IChjb21wb25lbnQub25Gb3JtUmVzZXQgfHwgb25Gb3JtUmVzZXQpLmJpbmQoY29tcG9uZW50KTtcbiAgYXNzb2NpYXRlZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInJlc2V0XCIsIGJvdW5kT25Gb3JtUmVzZXQpO1xuICBvbkZvcm1SZXNldE1hcC5zZXQoY29tcG9uZW50LmVsLCBib3VuZE9uRm9ybVJlc2V0KTtcbiAgZm9ybUNvbXBvbmVudFNldC5hZGQoZWwpO1xufVxuLyoqXG4gKiBVdGlsaXR5IG1ldGhvZCB0byBmaW5kIGEgZm9ybS1jb21wb25lbnQncyBhc3NvY2lhdGVkIGZvcm0gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGZpbmRBc3NvY2lhdGVkRm9ybShjb21wb25lbnQpIHtcbiAgY29uc3QgeyBlbCwgZm9ybSB9ID0gY29tcG9uZW50O1xuICByZXR1cm4gZm9ybVxuICAgID8gcXVlcnlFbGVtZW50Um9vdHMoZWwsIHsgaWQ6IGZvcm0gfSlcbiAgICA6IGNsb3Nlc3RFbGVtZW50Q3Jvc3NTaGFkb3dCb3VuZGFyeShlbCwgXCJmb3JtXCIpO1xufVxuZnVuY3Rpb24gb25Gb3JtUmVzZXQoKSB7XG4gIGlmIChpc0NoZWNrYWJsZSh0aGlzKSkge1xuICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMuZGVmYXVsdENoZWNrZWQ7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMudmFsdWUgPSB0aGlzLmRlZmF1bHRWYWx1ZTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHRlYXIgZG93biBmb3JtIGludGVyYWN0aW9ucyBvbiBkaXNjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RGb3JtKGNvbXBvbmVudCkge1xuICBjb25zdCB7IGVsLCBmb3JtRWwgfSA9IGNvbXBvbmVudDtcbiAgaWYgKCFmb3JtRWwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgYm91bmRPbkZvcm1SZXNldCA9IG9uRm9ybVJlc2V0TWFwLmdldChlbCk7XG4gIGZvcm1FbC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzZXRcIiwgYm91bmRPbkZvcm1SZXNldCk7XG4gIG9uRm9ybVJlc2V0TWFwLmRlbGV0ZShlbCk7XG4gIGNvbXBvbmVudC5mb3JtRWwgPSBudWxsO1xuICBmb3JtQ29tcG9uZW50U2V0LmRlbGV0ZShlbCk7XG59XG4vKipcbiAqIEhlbHBlciBmb3Igc2V0dGluZyB0aGUgZGVmYXVsdCB2YWx1ZSBvbiBpbml0aWFsaXphdGlvbiBhZnRlciBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBpcyBvbmx5IG5lZWRlZCBpZiB0aGUgZGVmYXVsdCB2YWx1ZSBjYW5ub3QgYmUgZGV0ZXJtaW5lZCBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gdmFsdWVcbiAqL1xuZnVuY3Rpb24gYWZ0ZXJDb25uZWN0RGVmYXVsdFZhbHVlU2V0KGNvbXBvbmVudCwgdmFsdWUpIHtcbiAgY29tcG9uZW50LmRlZmF1bHRWYWx1ZSA9IHZhbHVlO1xufVxuY29uc3QgaGlkZGVuSW5wdXRDaGFuZ2VIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNhbGNpdGVJbnRlcm5hbEhpZGRlbklucHV0Q2hhbmdlXCIsIHsgYnViYmxlczogdHJ1ZSB9KSk7XG59O1xuY29uc3QgcmVtb3ZlSGlkZGVuSW5wdXRDaGFuZ2VFdmVudExpc3RlbmVyID0gKGlucHV0KSA9PiBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhpZGRlbklucHV0Q2hhbmdlSGFuZGxlcik7XG4vKipcbiAqIEhlbHBlciBmb3IgbWFpbnRhaW5pbmcgYSBmb3JtLWFzc29jaWF0ZWQncyBoaWRkZW4gaW5wdXQgaW4gc3luYyB3aXRoIHRoZSBjb21wb25lbnQuXG4gKlxuICogQmFzZWQgb24gSW9uaWMncyBhcHByb2FjaDogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvZTRiZjA1Mjc5NGFmOWFhYzA3Zjg4NzAxM2I5MjUwZDJhMDQ1ZWJhMy9jb3JlL3NyYy91dGlscy9oZWxwZXJzLnRzI0wxOThcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHN5bmNIaWRkZW5Gb3JtSW5wdXQoY29tcG9uZW50KSB7XG4gIGNvbnN0IHsgZWwsIGZvcm1FbCwgbmFtZSwgdmFsdWUgfSA9IGNvbXBvbmVudDtcbiAgY29uc3QgeyBvd25lckRvY3VtZW50IH0gPSBlbDtcbiAgY29uc3QgaW5wdXRzID0gZWwucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbc2xvdD1cIiR7aGlkZGVuRm9ybUlucHV0U2xvdE5hbWV9XCJdYCk7XG4gIGlmICghZm9ybUVsIHx8ICFuYW1lKSB7XG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICByZW1vdmVIaWRkZW5JbnB1dENoYW5nZUV2ZW50TGlzdGVuZXIoaW5wdXQpO1xuICAgICAgaW5wdXQucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHZhbHVlcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xuICBjb25zdCBleHRyYSA9IFtdO1xuICBjb25zdCBzZWVuID0gbmV3IFNldCgpO1xuICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBjb25zdCB2YWx1ZU1hdGNoID0gdmFsdWVzLmZpbmQoKHZhbCkgPT4gXG4gICAgLyogaW50ZW50aW9uYWwgbm9uLXN0cmljdCBlcXVhbGl0eSBjaGVjayAqL1xuICAgIHZhbCA9PSBpbnB1dC52YWx1ZSk7XG4gICAgaWYgKHZhbHVlTWF0Y2ggIT0gbnVsbCkge1xuICAgICAgc2Vlbi5hZGQodmFsdWVNYXRjaCk7XG4gICAgICBkZWZhdWx0U3luY0hpZGRlbkZvcm1JbnB1dChjb21wb25lbnQsIGlucHV0LCB2YWx1ZU1hdGNoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBleHRyYS5wdXNoKGlucHV0KTtcbiAgICB9XG4gIH0pO1xuICBsZXQgZG9jRnJhZztcbiAgdmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgaWYgKHNlZW4uaGFzKHZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaW5wdXQgPSBleHRyYS5wb3AoKTtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICBpbnB1dCA9IG93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgaW5wdXQuc2xvdCA9IGhpZGRlbkZvcm1JbnB1dFNsb3ROYW1lO1xuICAgIH1cbiAgICBpZiAoIWRvY0ZyYWcpIHtcbiAgICAgIGRvY0ZyYWcgPSBvd25lckRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICB9XG4gICAgZG9jRnJhZy5hcHBlbmQoaW5wdXQpO1xuICAgIC8vIGVtaXRzIHdoZW4gaGlkZGVuIGlucHV0IGlzIGF1dG9maWxsZWRcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhpZGRlbklucHV0Q2hhbmdlSGFuZGxlcik7XG4gICAgZGVmYXVsdFN5bmNIaWRkZW5Gb3JtSW5wdXQoY29tcG9uZW50LCBpbnB1dCwgdmFsdWUpO1xuICB9KTtcbiAgaWYgKGRvY0ZyYWcpIHtcbiAgICBlbC5hcHBlbmQoZG9jRnJhZyk7XG4gIH1cbiAgZXh0cmEuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICByZW1vdmVIaWRkZW5JbnB1dENoYW5nZUV2ZW50TGlzdGVuZXIoaW5wdXQpO1xuICAgIGlucHV0LnJlbW92ZSgpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRTeW5jSGlkZGVuRm9ybUlucHV0KGNvbXBvbmVudCwgaW5wdXQsIHZhbHVlKSB7XG4gIGNvbnN0IHsgZGVmYXVsdFZhbHVlLCBkaXNhYmxlZCwgZm9ybSwgbmFtZSwgcmVxdWlyZWQgfSA9IGNvbXBvbmVudDtcbiAgLy8ga2VlcCBpbiBzeW5jIHRvIHByZXZlbnQgbG9zaW5nIHJlc2V0IHZhbHVlXG4gIGlucHV0LmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgaW5wdXQuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgaW5wdXQubmFtZSA9IG5hbWU7XG4gIGlucHV0LnJlcXVpcmVkID0gcmVxdWlyZWQ7XG4gIGlucHV0LnRhYkluZGV4ID0gLTE7XG4gIC8vIHdlIHNldCB0aGUgYXR0ciBhcyB0aGUgcHJvcCBpcyByZWFkLW9ubHlcbiAgaWYgKGZvcm0pIHtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJmb3JtXCIsIGZvcm0pO1xuICB9XG4gIGVsc2Uge1xuICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZShcImZvcm1cIik7XG4gIH1cbiAgaWYgKGlzQ2hlY2thYmxlKGNvbXBvbmVudCkpIHtcbiAgICBpbnB1dC5jaGVja2VkID0gY29tcG9uZW50LmNoZWNrZWQ7XG4gICAgLy8ga2VlcCBpbiBzeW5jIHRvIHByZXZlbnQgbG9zaW5nIHJlc2V0IHZhbHVlXG4gICAgaW5wdXQuZGVmYXVsdENoZWNrZWQgPSBjb21wb25lbnQuZGVmYXVsdENoZWNrZWQ7XG4gICAgLy8gaGV1cmlzdGljIHRvIHN1cHBvcnQgZGVmYXVsdC9vbiBtb2RlIGZyb20gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5wdXQuaHRtbCNkb20taW5wdXQtdmFsdWUtZGVmYXVsdC1vblxuICAgIGlucHV0LnZhbHVlID0gY29tcG9uZW50LmNoZWNrZWQgPyB2YWx1ZSB8fCBcIm9uXCIgOiBcIlwiO1xuICB9XG4gIGVsc2Uge1xuICAgIGlucHV0LnZhbHVlID0gdmFsdWUgfHwgXCJcIjtcbiAgfVxuICBjb21wb25lbnQuc3luY0hpZGRlbkZvcm1JbnB1dD8uKGlucHV0KTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHJlbmRlciB0aGUgc2xvdCBmb3IgZm9ybS1hc3NvY2lhdGVkIGNvbXBvbmVudCdzIGhpZGRlbiBpbnB1dC5cbiAqXG4gKiBJZiB0aGUgY29tcG9uZW50IGhhcyBhIGRlZmF1bHQgc2xvdCwgdGhpcyBtdXN0IGJlIHBsYWNlZCBhdCB0aGUgYm90dG9tIG9mIHRoZSBjb21wb25lbnQncyByb290IGNvbnRhaW5lciB0byBlbnN1cmUgaXQgaXMgdGhlIGxhc3QgY2hpbGQuXG4gKlxuICogcmVuZGVyKCk6IFZOb2RlIHtcbiAqICAgPEhvc3Q+XG4gKiAgICAgPGRpdiBjbGFzcz17Q1NTLmNvbnRhaW5lcn0+XG4gKiAgICAgLy8gLi4uXG4gKiAgICAgPEhpZGRlbkZvcm1JbnB1dFNsb3QgY29tcG9uZW50PXt0aGlzfSAvPlxuICogICAgIDwvZGl2PlxuICogICA8L0hvc3Q+XG4gKiB9XG4gKlxuICogTm90ZSB0aGF0IHRoZSBoaWRkZW4tZm9ybS1pbnB1dCBTYXNzIG1peGluIG11c3QgYmUgYWRkZWQgdG8gdGhlIGNvbXBvbmVudCdzIHN0eWxlIHRvIGFwcGx5IHNwZWNpZmljIHN0eWxlcy5cbiAqXG4gKiBAcGFyYW0gcm9vdDBcbiAqIEBwYXJhbSByb290MC5jb21wb25lbnRcbiAqL1xuY29uc3QgSGlkZGVuRm9ybUlucHV0U2xvdCA9ICh7IGNvbXBvbmVudCwgfSkgPT4ge1xuICBzeW5jSGlkZGVuRm9ybUlucHV0KGNvbXBvbmVudCk7XG4gIHJldHVybiBoKFwic2xvdFwiLCB7IG5hbWU6IGhpZGRlbkZvcm1JbnB1dFNsb3ROYW1lIH0pO1xufTtcblxuZXhwb3J0IHsgSGlkZGVuRm9ybUlucHV0U2xvdCBhcyBILCBhZnRlckNvbm5lY3REZWZhdWx0VmFsdWVTZXQgYXMgYSwgY29ubmVjdEZvcm0gYXMgYywgZGlzY29ubmVjdEZvcm0gYXMgZCwgZmluZEFzc29jaWF0ZWRGb3JtIGFzIGYsIHJlc2V0Rm9ybSBhcyByLCBzdWJtaXRGb3JtIGFzIHMgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IEJ1aWxkLCBmb3JjZVVwZGF0ZSB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuY29uc3QgcmVzb2x2ZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBwcm9taXNlTWFwID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBzZXRzIHVwIHRoZSBjb21wb25lbnQgZm9yIHRoZSBhYmlsaXR5IHRvIGtub3cgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50V2lsbExvYWQoKTogdm9pZCB7XG4gKiAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldFVwTG9hZGFibGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIHByb21pc2VNYXAuc2V0KGNvbXBvbmVudCwgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmVNYXAuc2V0KGNvbXBvbmVudCwgcmVzb2x2ZSkpKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBsZXRzIHRoZSBsb2FkYWJsZSBjb21wb25lbnQga25vdyB0aGF0IGl0IGlzIG5vdyBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50RGlkTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRDb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJlc29sdmVNYXAuZ2V0KGNvbXBvbmVudCkoKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBjYW4gYmUgdXNlZCB0byBlbnN1cmUgYSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkIChUaGUgXCJjb21wb25lbnREaWRMb2FkXCIgU3RlbmNpbCBsaWZlY3ljbGUgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCkuXG4gKlxuICogUmVxdWlyZXMgcmVxdWlyZXMgYExvYWRhYmxlQ29tcG9uZW50YCB0byBiZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBBIGNvbXBvbmVudCBkZXZlbG9wZXIgY2FuIGF3YWl0IHRoaXMgbWV0aG9kIGJlZm9yZSBwcm9jZWVkaW5nIHdpdGggYW55IGxvZ2ljIHRoYXQgcmVxdWlyZXMgYSBjb21wb25lbnQgdG8gYmUgbG9hZGVkIGZpcnN0LlxuICpcbiAqIGBgYFxuICogYXN5bmMgbXlNZXRob2QoKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cbiAqL1xuZnVuY3Rpb24gY29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXR1cm4gcHJvbWlzZU1hcC5nZXQoY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBjYW4gYmUgdXNlZCB0byBlbnN1cmluZyB0aGUgY29tcG9uZW50IGlzIGxvYWRlZCBhbmQgcmVuZGVyZWQgYnkgdGhlIGJyb3dzZXIgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBTdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkIGFuZCBhbnkgaW50ZXJuYWwgZWxlbWVudHMgYXJlIGZvY3VzYWJsZSkuXG4gKlxuICogUmVxdWlyZXMgcmVxdWlyZXMgYExvYWRhYmxlQ29tcG9uZW50YCB0byBiZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBBIGNvbXBvbmVudCBkZXZlbG9wZXIgY2FuIGF3YWl0IHRoaXMgbWV0aG9kIGJlZm9yZSBwcm9jZWVkaW5nIHdpdGggYW55IGxvZ2ljIHRoYXQgcmVxdWlyZXMgYSBjb21wb25lbnQgdG8gYmUgbG9hZGVkIGZpcnN0IGFuZCB0aGVuIGFuIGludGVybmFsIGVsZW1lbnQgYmUgZm9jdXNlZC5cbiAqXG4gKiBgYGBcbiAqIGFzeW5jIHNldEZvY3VzKCk6IFByb21pc2U8dm9pZD4ge1xuICogICBhd2FpdCBjb21wb25lbnRGb2N1c2FibGUodGhpcyk7XG4gKiAgIHRoaXMuaW50ZXJuYWxFbGVtZW50Py5mb2N1cygpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICovXG5hc3luYyBmdW5jdGlvbiBjb21wb25lbnRGb2N1c2FibGUoY29tcG9uZW50KSB7XG4gIGF3YWl0IGNvbXBvbmVudExvYWRlZChjb21wb25lbnQpO1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybjtcbiAgfVxuICBmb3JjZVVwZGF0ZShjb21wb25lbnQpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiByZXNvbHZlKCkpKTtcbn1cblxuZXhwb3J0IHsgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCBhcyBhLCBjb21wb25lbnRMb2FkZWQgYXMgYiwgY29tcG9uZW50Rm9jdXNhYmxlIGFzIGMsIHNldENvbXBvbmVudExvYWRlZCBhcyBzIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=