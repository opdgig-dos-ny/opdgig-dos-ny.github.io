"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_button_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/button.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/button.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ Button),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ "./node_modules/@esri/calcite-components/dist/components/form.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _label2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./label2.js */ "./node_modules/@esri/calcite-components/dist/components/label2.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _globalAttributes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./globalAttributes.js */ "./node_modules/@esri/calcite-components/dist/components/globalAttributes.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */













const CSS = {
  buttonLoader: "calcite-button--loader",
  content: "content",
  contentSlotted: "content--slotted",
  icon: "icon",
  iconStart: "icon--start",
  iconEnd: "icon--end",
  loadingIn: "loading-in",
  loadingOut: "loading-out",
  iconStartEmpty: "icon-start-empty",
  iconEndEmpty: "icon-end-empty",
  buttonPadding: "button-padding",
  buttonPaddingShrunk: "button-padding--shrunk",
};

const buttonCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([loading]:not([disabled])) *,:host([disabled]) *,:host([loading]:not([disabled])) ::slotted(*),:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;inline-size:auto;vertical-align:middle}:host([round]){border-radius:50px}:host([round]) a,:host([round]) button{border-radius:50px}:host button,:host a{outline-color:transparent}:host button:focus,:host a:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host button,:host a{--calcite-button-content-margin-internal:0.5rem;--calcite-button-padding-x-internal:7px;--calcite-button-padding-y-internal:3px;padding-block:var(--calcite-button-padding-y-internal);padding-inline:var(--calcite-button-padding-x-internal);position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;-webkit-user-select:none;user-select:none;appearance:none;align-items:center;justify-content:center;border-radius:0px;border-style:none;text-align:center;font-family:inherit;font-weight:var(--calcite-font-weight-normal);text-decoration-line:none;transition:color var(--calcite-animation-timing) ease-in-out, background-color var(--calcite-animation-timing) ease-in-out, box-shadow var(--calcite-animation-timing) ease-in-out, outline-color var(--calcite-internal-animation-timing-fast) ease-in-out}:host button:hover,:host a:hover{text-decoration-line:none}:host button span,:host a span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.content{margin-inline:var(--calcite-button-content-margin-internal)}.icon-start-empty .content{margin-inline-start:unset}.icon-end-empty .content{margin-inline-end:unset}:host([scale=m]) button,:host([scale=m]) a{--calcite-button-content-margin-internal:0.75rem}:host([scale=l]) button,:host([scale=l]) a{--calcite-button-content-margin-internal:1rem}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}:host([alignment=center]:not([width=auto])) a,:host([alignment=center]:not([width=auto])) button{justify-content:center}:host([alignment=start]:not([width=auto])) a,:host([alignment=start]:not([width=auto])) button{justify-content:flex-start}:host([alignment=end]:not([width=auto])) a,:host([alignment=end]:not([width=auto])) button{justify-content:flex-end}:host([alignment*=space-between]:not([width=auto])) a,:host([alignment*=space-between]:not([width=auto])) button{justify-content:space-between}:host([alignment=icon-start-space-between]:not([width=auto])) .icon--start{margin-inline-end:auto}:host([alignment=icon-start-space-between]:not([width=auto])) a,:host([alignment=icon-start-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=icon-end-space-between]:not([width=auto])) .icon--end{margin-inline-start:auto}:host([alignment=icon-end-space-between]:not([width=auto])) a,:host([alignment=icon-end-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=center]) a:not(.content--slotted) .icon--start+.icon--end,:host([alignment=center]) button:not(.content--slotted) .icon--start+.icon--end{margin-inline-start:var(--calcite-button-content-margin-internal)}.icon{position:relative;margin:0px;display:inline-flex;font-weight:var(--calcite-font-weight-normal);line-height:inherit}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([loading]:not([disabled])) button,:host([loading]:not([disabled])) a{opacity:var(--calcite-ui-opacity-disabled)}@keyframes loader-in{0%{inline-size:0;opacity:0;transform:scale(0.5)}100%{inline-size:1em;opacity:1;transform:scale(1)}}@keyframes loader-out{0%{inline-size:1em;opacity:1;transform:scale(1)}100%{inline-size:0;opacity:0;transform:scale(0.5)}}.calcite-button--loader{display:flex}.calcite-button--loader calcite-loader{margin:0px;transition:inline-size var(--calcite-internal-animation-timing-slow) ease-in-out, opacity var(--calcite-internal-animation-timing-slow) ease-in-out, transform var(--calcite-internal-animation-timing-slow) ease-in-out}.calcite-button--loader calcite-loader.loading-in{animation-name:loader-in;animation-duration:var(--calcite-internal-animation-timing-slow)}.calcite-button--loader calcite-loader.loading-out{animation-name:loader-out;animation-duration:var(--calcite-internal-animation-timing-slow)}:host([loading]) button.content--slotted .calcite-button--loader calcite-loader,:host([loading]) a.content--slotted .calcite-button--loader calcite-loader{margin-inline-end:var(--calcite-button-content-margin-internal)}:host([loading]) button:not(.content--slotted) .icon--start,:host([loading]) button:not(.content--slotted) .icon--end,:host([loading]) a:not(.content--slotted) .icon--start,:host([loading]) a:not(.content--slotted) .icon--end{display:none}:host([appearance]) button,:host([appearance]) a{border-width:1px;border-style:solid;border-color:transparent}:host([kind=brand]) button,:host([kind=brand]) a{background-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-inverse)}:host([kind=brand]) button:hover,:host([kind=brand]) button:focus,:host([kind=brand]) a:hover,:host([kind=brand]) a:focus{background-color:var(--calcite-ui-brand-hover)}:host([kind=brand]) button:active,:host([kind=brand]) a:active{background-color:var(--calcite-ui-brand-press)}:host([kind=brand]) button calcite-loader,:host([kind=brand]) a calcite-loader{color:var(--calcite-ui-text-inverse)}:host([kind=danger]) button,:host([kind=danger]) a{background-color:var(--calcite-ui-danger);color:var(--calcite-ui-text-inverse)}:host([kind=danger]) button:hover,:host([kind=danger]) button:focus,:host([kind=danger]) a:hover,:host([kind=danger]) a:focus{background-color:var(--calcite-ui-danger-hover)}:host([kind=danger]) button:active,:host([kind=danger]) a:active{background-color:var(--calcite-ui-danger-press)}:host([kind=danger]) button calcite-loader,:host([kind=danger]) a calcite-loader{color:var(--calcite-ui-text-inverse)}:host([kind=neutral]) button,:host([kind=neutral]) a{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}:host([kind=neutral]) button:hover,:host([kind=neutral]) button:focus,:host([kind=neutral]) a:hover,:host([kind=neutral]) a:focus{background-color:var(--calcite-ui-foreground-2)}:host([kind=neutral]) button:active,:host([kind=neutral]) a:active{background-color:var(--calcite-ui-foreground-1)}:host([kind=neutral]) button calcite-loader,:host([kind=neutral]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([kind=inverse]) button,:host([kind=inverse]) a{color:var(--calcite-ui-text-inverse);background-color:var(--calcite-ui-inverse)}:host([kind=inverse]) button:hover,:host([kind=inverse]) button:focus,:host([kind=inverse]) a:hover,:host([kind=inverse]) a:focus{background-color:var(--calcite-ui-inverse-hover)}:host([kind=inverse]) button:active,:host([kind=inverse]) a:active{background-color:var(--calcite-ui-inverse-press)}:host([kind=inverse]) button calcite-loader,:host([kind=inverse]) a calcite-loader{color:var(--calcite-ui-text-inverse)}:host([appearance=outline-fill]) button,:host([appearance=outline-fill]) a{border-width:1px;border-style:solid;background-color:var(--calcite-ui-foreground-1);box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline-fill][kind=brand]) button,:host([appearance=outline-fill][kind=brand]) a{border-color:var(--calcite-ui-brand);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-brand)}:host([appearance=outline-fill][kind=brand]) button:hover,:host([appearance=outline-fill][kind=brand]) a:hover{border-color:var(--calcite-ui-brand-hover);color:var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}:host([appearance=outline-fill][kind=brand]) button:focus,:host([appearance=outline-fill][kind=brand]) a:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([appearance=outline-fill][kind=brand]) button:active,:host([appearance=outline-fill][kind=brand]) a:active{border-color:var(--calcite-ui-brand-press);color:var(--calcite-ui-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press)}:host([appearance=outline-fill][kind=brand]) button calcite-loader,:host([appearance=outline-fill][kind=brand]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=outline-fill][kind=danger]) button,:host([appearance=outline-fill][kind=danger]) a{border-color:var(--calcite-ui-danger);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-danger)}:host([appearance=outline-fill][kind=danger]) button:hover,:host([appearance=outline-fill][kind=danger]) a:hover{border-color:var(--calcite-ui-danger-hover);color:var(--calcite-ui-danger-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-danger-hover)}:host([appearance=outline-fill][kind=danger]) button:focus,:host([appearance=outline-fill][kind=danger]) a:focus{border-color:var(--calcite-ui-danger);color:var(--calcite-ui-danger);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger)}:host([appearance=outline-fill][kind=danger]) button:active,:host([appearance=outline-fill][kind=danger]) a:active{border-color:var(--calcite-ui-danger-press);color:var(--calcite-ui-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press)}:host([appearance=outline-fill][kind=danger]) button calcite-loader,:host([appearance=outline-fill][kind=danger]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=outline-fill][kind=neutral]) button,:host([appearance=outline-fill][kind=neutral]) a{background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-border-1)}:host([appearance=outline-fill][kind=neutral]) button:hover,:host([appearance=outline-fill][kind=neutral]) a:hover{box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=outline-fill][kind=neutral]) button:focus,:host([appearance=outline-fill][kind=neutral]) a:focus{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=outline-fill][kind=neutral]) button:active,:host([appearance=outline-fill][kind=neutral]) a:active{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=outline-fill][kind=neutral]) button calcite-loader,:host([appearance=outline-fill][kind=neutral]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=outline-fill][kind=inverse]) button,:host([appearance=outline-fill][kind=inverse]) a{background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-inverse)}:host([appearance=outline-fill][kind=inverse]) button:hover,:host([appearance=outline-fill][kind=inverse]) a:hover{border-color:var(--calcite-ui-inverse-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-inverse-hover)}:host([appearance=outline-fill][kind=inverse]) button:focus,:host([appearance=outline-fill][kind=inverse]) a:focus{border-color:var(--calcite-ui-inverse);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse)}:host([appearance=outline-fill][kind=inverse]) button:active,:host([appearance=outline-fill][kind=inverse]) a:active{border-color:var(--calcite-ui-inverse-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse-press)}:host([appearance=outline-fill][kind=inverse]) button calcite-loader,:host([appearance=outline-fill][kind=inverse]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=outline]) button,:host([appearance=outline]) a{border-width:1px;border-style:solid;background-color:transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][kind=brand]) button,:host([appearance=outline][kind=brand]) a{border-color:var(--calcite-ui-brand);background-color:transparent;color:var(--calcite-ui-brand)}:host([appearance=outline][kind=brand]) button:hover,:host([appearance=outline][kind=brand]) a:hover{border-color:var(--calcite-ui-brand-hover);color:var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}:host([appearance=outline][kind=brand]) button:focus,:host([appearance=outline][kind=brand]) a:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([appearance=outline][kind=brand]) button:active,:host([appearance=outline][kind=brand]) a:active{border-color:var(--calcite-ui-brand-press);color:var(--calcite-ui-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press)}:host([appearance=outline][kind=brand]) button calcite-loader,:host([appearance=outline][kind=brand]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=outline][kind=danger]) button,:host([appearance=outline][kind=danger]) a{border-color:var(--calcite-ui-danger);background-color:transparent;color:var(--calcite-ui-danger)}:host([appearance=outline][kind=danger]) button:hover,:host([appearance=outline][kind=danger]) a:hover{border-color:var(--calcite-ui-danger-hover);color:var(--calcite-ui-danger-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-danger-hover)}:host([appearance=outline][kind=danger]) button:focus,:host([appearance=outline][kind=danger]) a:focus{border-color:var(--calcite-ui-danger);color:var(--calcite-ui-danger);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger)}:host([appearance=outline][kind=danger]) button:active,:host([appearance=outline][kind=danger]) a:active{border-color:var(--calcite-ui-danger-press);color:var(--calcite-ui-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press)}:host([appearance=outline][kind=danger]) button calcite-loader,:host([appearance=outline][kind=danger]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=outline][kind=neutral]) button,:host([appearance=outline][kind=neutral]) a{background-color:transparent;color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-border-1)}:host([appearance=outline][kind=neutral]) button:hover,:host([appearance=outline][kind=neutral]) a:hover{box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=outline][kind=neutral]) button:focus,:host([appearance=outline][kind=neutral]) a:focus{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=outline][kind=neutral]) button:active,:host([appearance=outline][kind=neutral]) a:active{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=outline][kind=neutral]) button calcite-loader,:host([appearance=outline][kind=neutral]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=outline][kind=inverse]) button,:host([appearance=outline][kind=inverse]) a{background-color:transparent;color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-inverse)}:host([appearance=outline][kind=inverse]) button:hover,:host([appearance=outline][kind=inverse]) a:hover{border-color:var(--calcite-ui-inverse-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-inverse-hover)}:host([appearance=outline][kind=inverse]) button:focus,:host([appearance=outline][kind=inverse]) a:focus{border-color:var(--calcite-ui-inverse);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse)}:host([appearance=outline][kind=inverse]) button:active,:host([appearance=outline][kind=inverse]) a:active{border-color:var(--calcite-ui-inverse-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse-press)}:host([appearance=outline][kind=inverse]) button calcite-loader,:host([appearance=outline][kind=inverse]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=outline-fill][split-child=primary]) button,:host([appearance=outline][split-child=primary]) button{border-inline-end-width:0;border-inline-start-width:1px}:host([appearance=outline-fill][split-child=secondary]) button,:host([appearance=outline][split-child=secondary]) button{border-inline-start-width:0;border-inline-end-width:1px}:host([appearance=transparent]:not(.enable-editing-button)) button,:host([appearance=transparent]:not(.enable-editing-button)) a{background-color:transparent}:host([appearance=transparent]:not(.enable-editing-button)) button:hover,:host([appearance=transparent]:not(.enable-editing-button)) button:focus,:host([appearance=transparent]:not(.enable-editing-button)) a:hover,:host([appearance=transparent]:not(.enable-editing-button)) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent]:not(.enable-editing-button)) button:active,:host([appearance=transparent]:not(.enable-editing-button)) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][kind=brand]) button,:host([appearance=transparent][kind=brand]) a{color:var(--calcite-ui-brand)}:host([appearance=transparent][kind=brand]) button:hover,:host([appearance=transparent][kind=brand]) a:hover{color:var(--calcite-ui-brand-hover)}:host([appearance=transparent][kind=brand]) button:focus,:host([appearance=transparent][kind=brand]) a:focus{color:var(--calcite-ui-brand)}:host([appearance=transparent][kind=brand]) button:active,:host([appearance=transparent][kind=brand]) a:active{color:var(--calcite-ui-brand-press)}:host([appearance=transparent][kind=brand]) button calcite-loader,:host([appearance=transparent][kind=brand]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=transparent][kind=danger]) button,:host([appearance=transparent][kind=danger]) a{color:var(--calcite-ui-danger)}:host([appearance=transparent][kind=danger]) button:hover,:host([appearance=transparent][kind=danger]) a:hover{color:var(--calcite-ui-danger-hover)}:host([appearance=transparent][kind=danger]) button:focus,:host([appearance=transparent][kind=danger]) a:focus{color:var(--calcite-ui-danger)}:host([appearance=transparent][kind=danger]) button:active,:host([appearance=transparent][kind=danger]) a:active{color:var(--calcite-ui-danger-press)}:host([appearance=transparent][kind=danger]) button calcite-loader,:host([appearance=transparent][kind=danger]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=transparent][kind=neutral]:not(.cancel-editing-button)) button,:host([appearance=transparent][kind=neutral]:not(.cancel-editing-button)) a,:host([appearance=transparent][kind=neutral]:not(.cancel-editing-button)) calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=transparent][kind=neutral].cancel-editing-button) button{border-block-start-width:1px;border-block-end-width:1px;color:var(--calcite-ui-text-3);border-block-start-color:var(--calcite-ui-border-input);border-block-end-color:var(--calcite-ui-border-input);border-block-style:solid}:host([appearance=transparent][kind=neutral].cancel-editing-button) button:not(.content--slotted){--calcite-button-padding-y-internal:0}:host([appearance=transparent][kind=neutral].cancel-editing-button) button:hover{color:var(--calcite-ui-text-1)}:host([appearance=transparent][kind=neutral].enable-editing-button) button{background-color:transparent}:host(.confirm-changes-button) button:focus,:host(.cancel-editing-button) button:focus,:host(.enable-editing-button) button:focus{outline-offset:-2px}:host([appearance=transparent][kind=inverse]) button,:host([appearance=transparent][kind=inverse]) a,:host([appearance=transparent][kind=inverse]) calcite-loader{color:var(--calcite-ui-text-inverse)}:host([scale=s]) button.content--slotted,:host([scale=s]) a.content--slotted{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s][appearance=transparent]) button.content--slotted,:host([scale=s][appearance=transparent]) a.content--slotted{--calcite-button-padding-x-internal:0.5rem}:host([scale=s]) button,:host([scale=s]) a{--calcite-button-padding-y-internal:3px}:host([scale=m]) button.content--slotted,:host([scale=m]) a.content--slotted{--calcite-button-padding-x-internal:11px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) button,:host([scale=m]) a{--calcite-button-padding-y-internal:7px}:host([scale=m][appearance=transparent]) button.content--slotted,:host([scale=m][appearance=transparent]) a.content--slotted{--calcite-button-padding-x-internal:0.75rem}:host([scale=l]) button.content--slotted,:host([scale=l]) a.content--slotted{--calcite-button-padding-x-internal:15px;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .button-padding{--calcite-button-padding-x-internal:1rem;--calcite-button-padding-y-internal:11px}:host([scale=l]) .button-padding--shrunk{--calcite-button-padding-y-internal:9px}:host([scale=s]) button:not(.content--slotted),:host([scale=s]) a:not(.content--slotted){--calcite-button-padding-x-internal:0.125rem;--calcite-button-padding-y-internal:3px;inline-size:1.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:1.5rem}:host([scale=m]) button:not(.content--slotted),:host([scale=m]) a:not(.content--slotted){--calcite-button-padding-x-internal:0.125rem;--calcite-button-padding-y-internal:7px;inline-size:2rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:2rem}:host([scale=l]) button:not(.content--slotted),:host([scale=l]) a:not(.content--slotted){--calcite-button-padding-x-internal:0.125rem;--calcite-button-padding-y-internal:9px;inline-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:2.75rem}:host([scale=l][appearance=transparent]) button:not(.content--slotted),:host([scale=l][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-y-internal:0.625rem}:host([scale=s][icon-start][icon-end]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x-internal:23px;block-size:1.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=s][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x-internal:1.5rem}:host([scale=m][icon-start][icon-end]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x-internal:2rem;block-size:2rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x-internal:33px}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x-internal:43px;block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted) .icon--start+.icon--end,:host([scale=l][icon-start][icon-end]) a:not(.content--slotted) .icon--start+.icon--end{margin-inline-start:1rem}:host([scale=l][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x-internal:2.75rem}:host([hidden]){display:none}[hidden]{display:none}";

const Button = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /** watches for changing text content */
    this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_5__.c)("mutation", () => this.updateHasContent());
    this.resizeObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_5__.c)("resize", () => this.setTooltipText());
    // act on a requested or nearby form based on type
    this.handleClick = () => {
      const { type } = this;
      if (this.href) {
        return;
      }
      // this.type refers to type attribute, not child element type
      if (type === "submit") {
        (0,_form_js__WEBPACK_IMPORTED_MODULE_0__.s)(this);
      }
      else if (type === "reset") {
        (0,_form_js__WEBPACK_IMPORTED_MODULE_0__.r)(this);
      }
    };
    this.setTooltipText = () => {
      const { contentEl } = this;
      if (contentEl) {
        this.tooltipText = contentEl.offsetWidth < contentEl.scrollWidth ? this.el.innerText : null;
      }
    };
    this.setChildEl = (el) => {
      this.childEl = el;
      if (el) {
        this.resizeObserver?.observe(el);
      }
    };
    this.alignment = "center";
    this.appearance = "solid";
    this.label = undefined;
    this.kind = "brand";
    this.disabled = false;
    this.form = undefined;
    this.href = undefined;
    this.iconEnd = undefined;
    this.iconFlipRtl = undefined;
    this.iconStart = undefined;
    this.loading = false;
    this.name = undefined;
    this.rel = undefined;
    this.round = false;
    this.scale = "m";
    this.splitChild = false;
    this.target = undefined;
    this.type = "button";
    this.width = "auto";
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.hasContent = false;
    this.hasLoader = false;
    this.effectiveLocale = "";
    this.defaultMessages = undefined;
    this.tooltipText = undefined;
    this.globalAttributes = {
      ariaExpanded: undefined,
    };
  }
  loadingChanged(newValue, oldValue) {
    if (!!newValue && !oldValue) {
      this.hasLoader = true;
    }
    if (!newValue && !!oldValue) {
      window.setTimeout(() => {
        this.hasLoader = false;
      }, 300);
    }
  }
  onMessagesChange() {
    /** referred in t9n util */
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  async connectedCallback() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    (0,_globalAttributes_js__WEBPACK_IMPORTED_MODULE_8__.w)(this, ["aria-expanded"]);
    this.hasLoader = this.loading;
    this.setupTextContentObserver();
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.formEl = (0,_form_js__WEBPACK_IMPORTED_MODULE_0__.f)(this);
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_label2_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    this.resizeObserver?.disconnect();
    this.formEl = null;
    (0,_globalAttributes_js__WEBPACK_IMPORTED_MODULE_8__.u)(this);
  }
  async componentWillLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.a)(this);
    if (_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.Build.isBrowser) {
      this.updateHasContent();
      await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.s)(this);
    }
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
    this.setTooltipText();
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  render() {
    const childElType = this.href ? "a" : "button";
    const Tag = childElType;
    const loaderNode = this.hasLoader ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("div", { class: CSS.buttonLoader }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("calcite-loader", { class: this.loading ? CSS.loadingIn : CSS.loadingOut, inline: true, label: this.messages.loading, scale: this.scale === "l" ? "m" : "s" }))) : null;
    const noStartEndIcons = !this.iconStart && !this.iconEnd;
    const iconStartEl = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("calcite-icon", { class: { [CSS.icon]: true, [CSS.iconStart]: true }, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.scale) }));
    const iconEndEl = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("calcite-icon", { class: { [CSS.icon]: true, [CSS.iconEnd]: true }, flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.scale) }));
    const contentEl = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("span", { class: CSS.content, ref: (el) => (this.contentEl = el) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)("slot", null)));
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_11__.h)(Tag, { "aria-label": !this.loading ? (0,_label2_js__WEBPACK_IMPORTED_MODULE_2__.g)(this) : this.messages.loading, "aria-live": "polite", class: {
        [CSS.buttonPadding]: noStartEndIcons,
        [CSS.buttonPaddingShrunk]: !noStartEndIcons,
        [CSS.contentSlotted]: this.hasContent,
        [CSS.iconStartEmpty]: !this.iconStart,
        [CSS.iconEndEmpty]: !this.iconEnd,
      }, disabled: this.disabled || this.loading, href: childElType === "a" && this.href, name: childElType === "button" && this.name, onClick: this.handleClick, rel: childElType === "a" && this.rel, tabIndex: this.disabled || this.loading ? -1 : null, target: childElType === "a" && this.target, title: this.tooltipText, type: childElType === "button" && this.type, ...this.globalAttributes,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setChildEl }, loaderNode, this.iconStart ? iconStartEl : null, this.hasContent ? contentEl : null, this.iconEnd ? iconEndEl : null));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    this.childEl?.focus();
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.u)(this, this.effectiveLocale);
  }
  updateHasContent() {
    const slottedContent = this.el.textContent.trim().length > 0 || this.el.childNodes.length > 0;
    this.hasContent =
      this.el.childNodes.length === 1 && this.el.childNodes[0]?.nodeName === "#text"
        ? this.el.textContent?.trim().length > 0
        : slottedContent;
  }
  setupTextContentObserver() {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onLabelClick() {
    this.handleClick();
    this.setFocus();
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "loading": ["loadingChanged"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return buttonCss; }
}, [1, "calcite-button", {
    "alignment": [513],
    "appearance": [513],
    "label": [1],
    "kind": [513],
    "disabled": [516],
    "form": [513],
    "href": [513],
    "iconEnd": [513, "icon-end"],
    "iconFlipRtl": [513, "icon-flip-rtl"],
    "iconStart": [513, "icon-start"],
    "loading": [516],
    "name": [513],
    "rel": [513],
    "round": [516],
    "scale": [513],
    "splitChild": [520, "split-child"],
    "target": [513],
    "type": [513],
    "width": [513],
    "messages": [1040],
    "messageOverrides": [1040],
    "hasContent": [32],
    "hasLoader": [32],
    "effectiveLocale": [32],
    "defaultMessages": [32],
    "tooltipText": [32],
    "globalAttributes": [32],
    "setFocus": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-button", "calcite-icon", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Button);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_9__.d)();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_10__.d)();
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/component.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/component.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getIconScale)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
function getIconScale(componentScale) {
  return componentScale === "l" ? "m" : "s";
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/globalAttributes.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/globalAttributes.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ unwatchGlobalAttributes),
/* harmony export */   w: () => (/* binding */ watchGlobalAttributes)
/* harmony export */ });
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


const allowedGlobalAttributes = ["lang", "role", "aria-expanded"];
const elementToComponentAndObserverOptionsMap = new Map();
let mutationObserver;
function updateGlobalAttributes(component, attributeFilter, reuseAttributes = false) {
  const { el } = component;
  const updatedAttributes = reuseAttributes ? component.globalAttributes : {};
  attributeFilter
    .filter((attr) => !!allowedGlobalAttributes.includes(attr) && !!el.hasAttribute(attr))
    .forEach((attr) => {
    const value = el.getAttribute(attr);
    if (value !== null) {
      updatedAttributes[attr] = value;
    }
  });
  component.globalAttributes = updatedAttributes;
}
function processMutations(mutations) {
  mutations.forEach(({ target }) => {
    const [component, options] = elementToComponentAndObserverOptionsMap.get(target);
    updateGlobalAttributes(component, options.attributeFilter);
  });
}
/**
 * Helper to set up listening for changes to global attributes.
 *
 * render(): VNode {
 * return (<Host>
 * <ul {...this.globalAttributes}></div>
 * </Host>);
 * }
 *
 * @param component
 * @param attributeFilter
 */
function watchGlobalAttributes(component, attributeFilter) {
  const { el } = component;
  const observerOptions = { attributeFilter };
  elementToComponentAndObserverOptionsMap.set(el, [component, observerOptions]);
  updateGlobalAttributes(component, attributeFilter, true);
  if (!mutationObserver) {
    mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_0__.c)("mutation", processMutations);
  }
  mutationObserver.observe(el, observerOptions);
}
/**
 * Helper remove listening for changes to inherited attributes.
 *
 * @param component
 */
function unwatchGlobalAttributes(component) {
  elementToComponentAndObserverOptionsMap.delete(component.el);
  // we explicitly process queued mutations and disconnect and reconnect
  // the observer until MutationObserver gets an `unobserve` method
  // see https://github.com/whatwg/dom/issues/126
  processMutations(mutationObserver.takeRecords());
  mutationObserver.disconnect();
  for (const [element, [, observerOptions]] of elementToComponentAndObserverOptionsMap.entries()) {
    mutationObserver.observe(element, observerOptions);
  }
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/icon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/icon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ Icon),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */




const CSS = {
  icon: "icon",
  flipRtl: "flip-rtl",
};

/**
 * Icon data cache.
 * Exported for testing purposes.
 *
 * @private
 */
const iconCache = {};
/**
 * Icon request cache.
 * Exported for testing purposes.
 *
 * @private
 */
const requestCache = {};
const scaleToPx = {
  s: 16,
  m: 24,
  l: 32,
};
async function fetchIcon({ icon, scale }) {
  const size = scaleToPx[scale];
  const name = normalizeIconName(icon);
  const filled = name.charAt(name.length - 1) === "F";
  const iconName = filled ? name.substring(0, name.length - 1) : name;
  const id = `${iconName}${size}${filled ? "F" : ""}`;
  if (iconCache[id]) {
    return iconCache[id];
  }
  if (!requestCache[id]) {
    requestCache[id] = fetch((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.getAssetPath)(`./assets/icon/${id}.json`))
      .then((resp) => resp.json())
      .catch(() => {
      console.error(`"${id}" is not a valid calcite-ui-icon name`);
      return "";
    });
  }
  const path = await requestCache[id];
  iconCache[id] = path;
  return path;
}
/**
 * Normalize the icon name to match the path data module exports.
 * Exported for testing purposes.
 *
 * @param name – an icon name that can be either kebab or camel-cased
 * @private
 */
function normalizeIconName(name) {
  const numberLeadingName = !isNaN(Number(name.charAt(0)));
  const parts = name.split("-");
  const kebabCased = parts.length > 0;
  if (kebabCased) {
    const firstNonDigitInPartPattern = /[a-z]/i;
    name = parts
      .map((part, partIndex) => {
      return part.replace(firstNonDigitInPartPattern, function replacer(match, offset) {
        const isFirstCharInName = partIndex === 0 && offset === 0;
        if (isFirstCharInName) {
          return match;
        }
        return match.toUpperCase();
      });
    })
      .join("");
  }
  return numberLeadingName ? `i${name}` : name;
}

const iconCss = ":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}";

const Icon = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.icon = null;
    this.flipRtl = false;
    this.scale = "m";
    this.textLabel = undefined;
    this.pathData = undefined;
    this.visible = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.waitUntilVisible(() => {
      this.visible = true;
      this.loadIconPathData();
    });
  }
  disconnectedCallback() {
    this.intersectionObserver?.disconnect();
    this.intersectionObserver = null;
  }
  async componentWillLoad() {
    this.loadIconPathData();
  }
  render() {
    const { el, flipRtl, pathData, scale, textLabel } = this;
    const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(el);
    const size = scaleToPx[scale];
    const semantic = !!textLabel;
    const paths = [].concat(pathData || "");
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Host, { "aria-hidden": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(!semantic), "aria-label": semantic ? textLabel : null, role: semantic ? "img" : null }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("svg", { "aria-hidden": "true", class: {
        [CSS.flipRtl]: dir === "rtl" && flipRtl,
        svg: true,
      }, fill: "currentColor", height: "100%", viewBox: `0 0 ${size} ${size}`, width: "100%", xmlns: "http://www.w3.org/2000/svg" }, paths.map((path) => typeof path === "string" ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { d: path })) : ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.h)("path", { d: path.d, opacity: "opacity" in path ? path.opacity : 1 }))))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  async loadIconPathData() {
    const { icon, scale, visible } = this;
    if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_2__.Build.isBrowser || !icon || !visible) {
      return;
    }
    const pathData = await fetchIcon({ icon, scale });
    // While the fetchIcon method is awaiting response, the icon requested can change. This check is to verify the response received belongs to the current icon.
    if (icon !== this.icon) {
      return;
    }
    this.pathData = pathData;
  }
  waitUntilVisible(callback) {
    this.intersectionObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_1__.c)("intersection", (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.intersectionObserver.disconnect();
          this.intersectionObserver = null;
          callback();
        }
      });
    }, { rootMargin: "50px" });
    if (!this.intersectionObserver) {
      callback();
      return;
    }
    this.intersectionObserver.observe(this.el);
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "icon": ["loadIconPathData"],
    "scale": ["loadIconPathData"]
  }; }
  static get style() { return iconCss; }
}, [1, "calcite-icon", {
    "icon": [513],
    "flipRtl": [516, "flip-rtl"],
    "scale": [513],
    "textLabel": [1, "text-label"],
    "pathData": [32],
    "visible": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Icon);
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

/***/ "./node_modules/@esri/calcite-components/dist/components/loader.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/loader.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ Loader),
/* harmony export */   d: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const loaderCss = "@charset \"UTF-8\";@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-ui-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem)}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--2);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem}:host([no-padding]){padding-block:0px}:host{display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{position:absolute;display:block;text-align:center;color:var(--calcite-ui-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);line-height:0.25;transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.66 / var(--calcite-internal-duration-factor));animation-name:loader-clockwise}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear}@supports (display: grid){.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}}:host([type=determinate]){animation:none;stroke:var(--calcite-ui-border-3)}:host([type=determinate]) .loader__svgs{animation:none}:host([type=determinate]) .loader__svg--3{animation:none;stroke:var(--calcite-ui-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-ui-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 4.8 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-83.7757333333}100%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:-279.2524444444}}.loader__svg--2{stroke-dasharray:55.8504888889 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.4 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-97.7383555556}100%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:-279.2524444444}}.loader__svg--3{stroke-dasharray:13.9626222222 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 7.734 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-76.7944222222}100%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:-279.2524444444}}@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@keyframes loader-clockwise{100%{transform:rotate(360deg)}}:host([hidden]){display:none}[hidden]{display:none}";

const Loader = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.inline = false;
    this.label = undefined;
    this.scale = "m";
    this.type = undefined;
    this.value = 0;
    this.text = "";
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const { el, inline, label, scale, text, type, value } = this;
    const id = el.id || (0,_guid_js__WEBPACK_IMPORTED_MODULE_0__.g)();
    const radiusRatio = 0.45;
    const size = inline ? this.getInlineSize(scale) : this.getSize(scale);
    const radius = size * radiusRatio;
    const viewbox = `0 0 ${size} ${size}`;
    const isDeterminate = type === "determinate";
    const circumference = 2 * radius * Math.PI;
    const progress = (value / 100) * circumference;
    const remaining = circumference - progress;
    const valueNow = Math.floor(value);
    const hostAttributes = {
      "aria-valuenow": valueNow,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      complete: valueNow === 100,
    };
    const svgAttributes = { r: radius, cx: size / 2, cy: size / 2 };
    const determinateStyle = { "stroke-dasharray": `${progress} ${remaining}` };
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.Host, { "aria-label": label, id: id, role: "progressbar", ...(isDeterminate ? hostAttributes : {}) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: "loader__svgs" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg", { "aria-hidden": "true", class: "loader__svg loader__svg--1", viewBox: viewbox }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("circle", { ...svgAttributes })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg", { "aria-hidden": "true", class: "loader__svg loader__svg--2", viewBox: viewbox }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("circle", { ...svgAttributes })), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg", { "aria-hidden": "true", class: "loader__svg loader__svg--3", viewBox: viewbox, ...(isDeterminate ? { style: determinateStyle } : {}) }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("circle", { ...svgAttributes }))), text && (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: "loader__text" }, text), isDeterminate && (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", { class: "loader__percentage" }, value)));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Return the proper sizes based on the scale property
   *
   * @param scale
   */
  getSize(scale) {
    return {
      s: 32,
      m: 56,
      l: 80,
    }[scale];
  }
  getInlineSize(scale) {
    return {
      s: 12,
      m: 16,
      l: 20,
    }[scale];
  }
  get el() { return this; }
  static get style() { return loaderCss; }
}, [1, "calcite-loader", {
    "inline": [516],
    "label": [1],
    "scale": [513],
    "type": [513],
    "value": [2],
    "text": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Loader);
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/t9n.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/t9n.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ connectMessages),
/* harmony export */   d: () => (/* binding */ disconnectMessages),
/* harmony export */   s: () => (/* binding */ setUpMessages),
/* harmony export */   u: () => (/* binding */ updateMessages)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const componentLangToMessageBundleCache = {};
async function getMessageBundle(lang, component) {
  const key = `${component}_${lang}`;
  if (componentLangToMessageBundleCache[key]) {
    return componentLangToMessageBundleCache[key];
  }
  componentLangToMessageBundleCache[key] = fetch((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.getAssetPath)(`./assets/${component}/t9n/messages_${lang}.json`))
    .then((resp) => {
    if (!resp.ok) {
      throwMessageFetchError();
    }
    return resp.json();
  })
    .catch(() => throwMessageFetchError());
  return componentLangToMessageBundleCache[key];
}
function throwMessageFetchError() {
  throw new Error("could not fetch component message bundle");
}
function mergeMessages(component) {
  component.messages = {
    ...component.defaultMessages,
    ...component.messageOverrides,
  };
}
/**
 * This utility sets up the messages used by the component. It should be awaited in the `componentWillLoad` lifecycle hook.
 *
 * @param component
 */
async function setUpMessages(component) {
  component.defaultMessages = await fetchMessages(component, component.effectiveLocale);
  mergeMessages(component);
}
async function fetchMessages(component, lang) {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.Build.isBrowser) {
    return {};
  }
  const { el } = component;
  const tag = el.tagName.toLowerCase();
  const componentName = tag.replace("calcite-", "");
  return getMessageBundle((0,_locale_js__WEBPACK_IMPORTED_MODULE_0__.g)(lang, "t9n"), componentName);
}
/**
 * This utility must be set up for the component to update its default message bundle if the locale changes.
 *
 * It can be set up in **either** of the following ways:
 *
 * 1. called from `LocalizedComponent`'s `onLocaleChange` method or
 * 2. called from a watcher configured to watch `LocalizedComponent`'s `effectiveLocale` prop
 *
 * @param component
 * @param lang
 */
async function updateMessages(component, lang) {
  component.defaultMessages = await fetchMessages(component, lang);
  mergeMessages(component);
}
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback`
 *
 * **Note**: this must be called after `LocalizedComponent`'s `connectLocalized` method.
 *
 * @param component
 */
function connectMessages(component) {
  component.onMessagesChange = defaultOnMessagesChange;
}
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
function disconnectMessages(component) {
  component.onMessagesChange = undefined;
}
function defaultOnMessagesChange() {
  mergeMessages(this);
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZGQxNjAwMjdmY2RiMGQ3YjE2YjA5ZTFlNGQ5NDNiZDguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21HO0FBQ2Q7QUFDOEI7QUFDMUI7QUFDcUI7QUFDaEM7QUFDekI7QUFDRjtBQUMrRDtBQUNqQjtBQUMxQztBQUNFOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG9JQUFvSSxvQkFBb0IsTUFBTSxxQkFBcUIsaUJBQWlCLHNCQUFzQixlQUFlLG1CQUFtQix1Q0FBdUMsbUJBQW1CLHFCQUFxQiwwQkFBMEIsaUNBQWlDLHlFQUF5RSxvUEFBb1AscUJBQXFCLGdEQUFnRCx3Q0FBd0Msd0NBQXdDLHVEQUF1RCx3REFBd0Qsa0JBQWtCLHNCQUFzQixhQUFhLGdCQUFnQixpQkFBaUIsZUFBZSx5QkFBeUIsaUJBQWlCLGdCQUFnQixtQkFBbUIsdUJBQXVCLGtCQUFrQixrQkFBa0Isa0JBQWtCLG9CQUFvQiw4Q0FBOEMsMEJBQTBCLDRQQUE0UCxpQ0FBaUMsMEJBQTBCLCtCQUErQixnQkFBZ0IsdUJBQXVCLG1CQUFtQixTQUFTLDREQUE0RCwyQkFBMkIsMEJBQTBCLHlCQUF5Qix3QkFBd0IsMkNBQTJDLGlEQUFpRCwyQ0FBMkMsOENBQThDLG9CQUFvQixpQkFBaUIsb0JBQW9CLGdCQUFnQixvQkFBb0IsaUJBQWlCLGlHQUFpRyx1QkFBdUIsK0ZBQStGLDJCQUEyQiwyRkFBMkYseUJBQXlCLGlIQUFpSCw4QkFBOEIsMkVBQTJFLHVCQUF1QixxSUFBcUksaUJBQWlCLHVFQUF1RSx5QkFBeUIsaUlBQWlJLGlCQUFpQiwySkFBMkosa0VBQWtFLE1BQU0sa0JBQWtCLFdBQVcsb0JBQW9CLDhDQUE4QyxvQkFBb0IseUdB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QUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0JBQWdCLFFBQVEsTUFBTSxHQUFHLFFBQVE7QUFDcEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9IOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5Rzs7QUFFekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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YTtBQUNiLHVCQUF1QjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkU7QUFDdkI7O0FBRXREO0FBQ0E7QUFDQSxpQkFBaUIsVUFBVSxHQUFHLEtBQUs7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsaURBQWlELG9GQUFZLGFBQWEsVUFBVSxnQkFBZ0IsS0FBSztBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBSztBQUNaO0FBQ0E7QUFDQSxVQUFVLEtBQUs7QUFDZjtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFrQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvZ2xvYmFsQXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvaWNvbi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvaW50ZXJhY3RpdmUuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2xhYmVsMi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvbG9hZGVyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy90OW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgQnVpbGQsIGggfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBzIGFzIHN1Ym1pdEZvcm0sIHIgYXMgcmVzZXRGb3JtLCBmIGFzIGZpbmRBc3NvY2lhdGVkRm9ybSB9IGZyb20gJy4vZm9ybS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMYWJlbCwgZCBhcyBkaXNjb25uZWN0TGFiZWwsIGcgYXMgZ2V0TGFiZWxUZXh0IH0gZnJvbSAnLi9sYWJlbDIuanMnO1xuaW1wb3J0IHsgYSBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBzIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRGb2N1c2FibGUgfSBmcm9tICcuL2xvYWRhYmxlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0SWNvblNjYWxlIH0gZnJvbSAnLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIHUgYXMgdXBkYXRlTWVzc2FnZXMgfSBmcm9tICcuL3Q5bi5qcyc7XG5pbXBvcnQgeyB3IGFzIHdhdGNoR2xvYmFsQXR0cmlidXRlcywgdSBhcyB1bndhdGNoR2xvYmFsQXR0cmlidXRlcyB9IGZyb20gJy4vZ2xvYmFsQXR0cmlidXRlcy5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMiB9IGZyb20gJy4vaWNvbi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMSB9IGZyb20gJy4vbG9hZGVyLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBidXR0b25Mb2FkZXI6IFwiY2FsY2l0ZS1idXR0b24tLWxvYWRlclwiLFxuICBjb250ZW50OiBcImNvbnRlbnRcIixcbiAgY29udGVudFNsb3R0ZWQ6IFwiY29udGVudC0tc2xvdHRlZFwiLFxuICBpY29uOiBcImljb25cIixcbiAgaWNvblN0YXJ0OiBcImljb24tLXN0YXJ0XCIsXG4gIGljb25FbmQ6IFwiaWNvbi0tZW5kXCIsXG4gIGxvYWRpbmdJbjogXCJsb2FkaW5nLWluXCIsXG4gIGxvYWRpbmdPdXQ6IFwibG9hZGluZy1vdXRcIixcbiAgaWNvblN0YXJ0RW1wdHk6IFwiaWNvbi1zdGFydC1lbXB0eVwiLFxuICBpY29uRW5kRW1wdHk6IFwiaWNvbi1lbmQtZW1wdHlcIixcbiAgYnV0dG9uUGFkZGluZzogXCJidXR0b24tcGFkZGluZ1wiLFxuICBidXR0b25QYWRkaW5nU2hydW5rOiBcImJ1dHRvbi1wYWRkaW5nLS1zaHJ1bmtcIixcbn07XG5cbmNvbnN0IGJ1dHRvbkNzcyA9IFwiOmhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtsb2FkaW5nXTpub3QoW2Rpc2FibGVkXSkpICosOmhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbbG9hZGluZ106bm90KFtkaXNhYmxlZF0pKSA6OnNsb3R0ZWQoKiksOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7aW5saW5lLXNpemU6YXV0bzt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Omhvc3QoW3JvdW5kXSl7Ym9yZGVyLXJhZGl1czo1MHB4fTpob3N0KFtyb3VuZF0pIGEsOmhvc3QoW3JvdW5kXSkgYnV0dG9ue2JvcmRlci1yYWRpdXM6NTBweH06aG9zdCBidXR0b24sOmhvc3QgYXtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fTpob3N0IGJ1dHRvbjpmb2N1cyw6aG9zdCBhOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIDJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfTpob3N0IGJ1dHRvbiw6aG9zdCBhey0tY2FsY2l0ZS1idXR0b24tY29udGVudC1tYXJnaW4taW50ZXJuYWw6MC41cmVtOy0tY2FsY2l0ZS1idXR0b24tcGFkZGluZy14LWludGVybmFsOjdweDstLWNhbGNpdGUtYnV0dG9uLXBhZGRpbmcteS1pbnRlcm5hbDozcHg7cGFkZGluZy1ibG9jazp2YXIoLS1jYWxjaXRlLWJ1dHRvbi1wYWRkaW5nLXktaW50ZXJuYWwpO3BhZGRpbmctaW5saW5lOnZhcigtLWNhbGNpdGUtYnV0dG9uLXBhZGRpbmcteC1pbnRlcm5hbCk7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTthcHBlYXJhbmNlOm5vbmU7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyLXJhZGl1czowcHg7Ym9yZGVyLXN0eWxlOm5vbmU7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCk7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0cmFuc2l0aW9uOmNvbG9yIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCwgYm94LXNoYWRvdyB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0LCBvdXRsaW5lLWNvbG9yIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0KSBlYXNlLWluLW91dH06aG9zdCBidXR0b246aG92ZXIsOmhvc3QgYTpob3Zlcnt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lfTpob3N0IGJ1dHRvbiBzcGFuLDpob3N0IGEgc3BhbntvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXB9LmNvbnRlbnR7bWFyZ2luLWlubGluZTp2YXIoLS1jYWxjaXRlLWJ1dHRvbi1jb250ZW50LW1hcmdpbi1pbnRlcm5hbCl9Lmljb24tc3RhcnQtZW1wdHkgLmNvbnRlbnR7bWFyZ2luLWlubGluZS1zdGFydDp1bnNldH0uaWNvbi1lbmQtZW1wdHkgLmNvbnRlbnR7bWFyZ2luLWlubGluZS1lbmQ6dW5zZXR9Omhvc3QoW3NjYWxlPW1dKSBidXR0b24sOmhvc3QoW3NjYWxlPW1dKSBhey0tY2FsY2l0ZS1idXR0b24tY29udGVudC1tYXJnaW4taW50ZXJuYWw6MC43NXJlbX06aG9zdChbc2NhbGU9bF0pIGJ1dHRvbiw6aG9zdChbc2NhbGU9bF0pIGF7LS1jYWxjaXRlLWJ1dHRvbi1jb250ZW50LW1hcmdpbi1pbnRlcm5hbDoxcmVtfTpob3N0KFt3aWR0aD1hdXRvXSl7aW5saW5lLXNpemU6YXV0b306aG9zdChbd2lkdGg9aGFsZl0pe2lubGluZS1zaXplOjUwJX06aG9zdChbd2lkdGg9ZnVsbF0pe2lubGluZS1zaXplOjEwMCV9Omhvc3QoW2FsaWdubWVudD1jZW50ZXJdOm5vdChbd2lkdGg9YXV0b10pKSBhLDpob3N0KFthbGlnbm1lbnQ9Y2VudGVyXTpub3QoW3dpZHRoPWF1dG9dKSkgYnV0dG9ue2p1c3RpZnktY29udGVudDpjZW50ZXJ9Omhvc3QoW2FsaWdubWVudD1zdGFydF06bm90KFt3aWR0aD1hdXRvXSkpIGEsOmhvc3QoW2FsaWdubWVudD1zdGFydF06bm90KFt3aWR0aD1hdXRvXSkpIGJ1dHRvbntqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH06aG9zdChbYWxpZ25tZW50PWVuZF06bm90KFt3aWR0aD1hdXRvXSkpIGEsOmhvc3QoW2FsaWdubWVudD1lbmRdOm5vdChbd2lkdGg9YXV0b10pKSBidXR0b257anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfTpob3N0KFthbGlnbm1lbnQqPXNwYWNlLWJldHdlZW5dOm5vdChbd2lkdGg9YXV0b10pKSBhLDpob3N0KFthbGlnbm1lbnQqPXNwYWNlLWJldHdlZW5dOm5vdChbd2lkdGg9YXV0b10pKSBidXR0b257anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Omhvc3QoW2FsaWdubWVudD1pY29uLXN0YXJ0LXNwYWNlLWJldHdlZW5dOm5vdChbd2lkdGg9YXV0b10pKSAuaWNvbi0tc3RhcnR7bWFyZ2luLWlubGluZS1lbmQ6YXV0b306aG9zdChbYWxpZ25tZW50PWljb24tc3RhcnQtc3BhY2UtYmV0d2Vlbl06bm90KFt3aWR0aD1hdXRvXSkpIGEsOmhvc3QoW2FsaWdubWVudD1pY29uLXN0YXJ0LXNwYWNlLWJldHdlZW5dOm5vdChbd2lkdGg9YXV0b10pKSBidXR0b257dGV4dC1hbGlnbjp1bnNldH06aG9zdChbYWxpZ25tZW50PWljb24tZW5kLXNwYWNlLWJldHdlZW5dOm5vdChbd2lkdGg9YXV0b10pKSAuaWNvbi0tZW5ke21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0b306aG9zdChbYWxpZ25tZW50PWljb24tZW5kLXNwYWNlLWJldHdlZW5dOm5vdChbd2lkdGg9YXV0b10pKSBhLDpob3N0KFthbGlnbm1lbnQ9aWNvbi1lbmQtc3BhY2UtYmV0d2Vlbl06bm90KFt3aWR0aD1hdXRvXSkpIGJ1dHRvbnt0ZXh0LWFsaWduOnVuc2V0fTpob3N0KFthbGlnbm1lbnQ9Y2VudGVyXSkgYTpub3QoLmNvbnRlbnQtLXNsb3R0ZWQpIC5pY29uLS1zdGFydCsuaWNvbi0tZW5kLDpob3N0KFthbGlnbm1lbnQ9Y2VudGVyXSkgYnV0dG9uOm5vdCguY29udGVudC0tc2xvdHRlZCkgLmljb24tLXN0YXJ0Ky5pY29uLS1lbmR7bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1jYWxjaXRlLWJ1dHRvbi1jb250ZW50LW1hcmdpbi1pbnRlcm5hbCl9Lmljb257cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjBweDtkaXNwbGF5OmlubGluZS1mbGV4O2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbm9ybWFsKTtsaW5lLWhlaWdodDppbmhlcml0fTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX06aG9zdChbbG9hZGluZ106bm90KFtkaXNhYmxlZF0pKSBidXR0b24sOmhvc3QoW2xvYWRpbmddOm5vdChbZGlzYWJsZWRdKSkgYXtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9QGtleWZyYW1lcyBsb2FkZXItaW57MCV7aW5saW5lLXNpemU6MDtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlKDAuNSl9MTAwJXtpbmxpbmUtc2l6ZToxZW07b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBsb2FkZXItb3V0ezAle2lubGluZS1zaXplOjFlbTtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlKDEpfTEwMCV7aW5saW5lLXNpemU6MDtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlKDAuNSl9fS5jYWxjaXRlLWJ1dHRvbi0tbG9hZGVye2Rpc3BsYXk6ZmxleH0uY2FsY2l0ZS1idXR0b24tLWxvYWRlciBjYWxjaXRlLWxvYWRlcnttYXJnaW46MHB4O3RyYW5zaXRpb246aW5saW5lLXNpemUgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIGVhc2UtaW4tb3V0LCBvcGFjaXR5IHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSBlYXNlLWluLW91dCwgdHJhbnNmb3JtIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSBlYXNlLWluLW91dH0uY2FsY2l0ZS1idXR0b24tLWxvYWRlciBjYWxjaXRlLWxvYWRlci5sb2FkaW5nLWlue2FuaW1hdGlvbi1uYW1lOmxvYWRlci1pbjthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpfS5jYWxjaXRlLWJ1dHRvbi0tbG9hZGVyIGNhbGNpdGUtbG9hZGVyLmxvYWRpbmctb3V0e2FuaW1hdGlvbi1uYW1lOmxvYWRlci1vdXQ7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KX06aG9zdChbbG9hZGluZ10pIGJ1dHRvbi5jb250ZW50LS1zbG90dGVkIC5jYWxjaXRlLWJ1dHRvbi0tbG9hZGVyIGNhbGNpdGUtbG9hZGVyLDpob3N0KFtsb2FkaW5nXSkgYS5jb250ZW50LS1zbG90dGVkIC5jYWxjaXRlLWJ1dHRvbi0tbG9hZGVyIGNhbGNpdGUtbG9hZGVye21hcmdpbi1pbmxpbmUtZW5kOnZhcigtLWNhbGNpdGUtYnV0dG9uLWNvbnRlbnQtbWFyZ2luLWludGVybmFsKX06aG9zdChbbG9hZGluZ10pIGJ1dHRvbjpub3QoLmNvbnRlbnQtLXNsb3R0ZWQpIC5pY29uLS1zdGFydCw6aG9zdChbbG9hZGluZ10pIGJ1dHRvbjpub3QoLmNvbnRlbnQtLXNsb3R0ZWQpIC5pY29uLS1lbmQsOmhvc3QoW2xvYWRpbmddKSBhOm5vdCguY29udGVudC0tc2xvdHRlZCkgLmljb24tLXN0YXJ0LDpob3N0KFtsb2FkaW5nXSkgYTpub3QoLmNvbnRlbnQtLXNsb3R0ZWQpIC5pY29uLS1lbmR7ZGlzcGxheTpub25lfTpob3N0KFthcHBlYXJhbmNlXSkgYnV0dG9uLDpob3N0KFthcHBlYXJhbmNlXSkgYXtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnR9Omhvc3QoW2tpbmQ9YnJhbmRdKSBidXR0b24sOmhvc3QoW2tpbmQ9YnJhbmRdKSBhe2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LWludmVyc2UpfTpob3N0KFtraW5kPWJyYW5kXSkgYnV0dG9uOmhvdmVyLDpob3N0KFtraW5kPWJyYW5kXSkgYnV0dG9uOmZvY3VzLDpob3N0KFtraW5kPWJyYW5kXSkgYTpob3Zlciw6aG9zdChba2luZD1icmFuZF0pIGE6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kLWhvdmVyKX06aG9zdChba2luZD1icmFuZF0pIGJ1dHRvbjphY3RpdmUsOmhvc3QoW2tpbmQ9YnJhbmRdKSBhOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQtcHJlc3MpfTpob3N0KFtraW5kPWJyYW5kXSkgYnV0dG9uIGNhbGNpdGUtbG9hZGVyLDpob3N0KFtraW5kPWJyYW5kXSkgYSBjYWxjaXRlLWxvYWRlcntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtaW52ZXJzZSl9Omhvc3QoW2tpbmQ9ZGFuZ2VyXSkgYnV0dG9uLDpob3N0KFtraW5kPWRhbmdlcl0pIGF7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcik7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LWludmVyc2UpfTpob3N0KFtraW5kPWRhbmdlcl0pIGJ1dHRvbjpob3Zlciw6aG9zdChba2luZD1kYW5nZXJdKSBidXR0b246Zm9jdXMsOmhvc3QoW2tpbmQ9ZGFuZ2VyXSkgYTpob3Zlciw6aG9zdChba2luZD1kYW5nZXJdKSBhOmZvY3Vze2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXItaG92ZXIpfTpob3N0KFtraW5kPWRhbmdlcl0pIGJ1dHRvbjphY3RpdmUsOmhvc3QoW2tpbmQ9ZGFuZ2VyXSkgYTphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlci1wcmVzcyl9Omhvc3QoW2tpbmQ9ZGFuZ2VyXSkgYnV0dG9uIGNhbGNpdGUtbG9hZGVyLDpob3N0KFtraW5kPWRhbmdlcl0pIGEgY2FsY2l0ZS1sb2FkZXJ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LWludmVyc2UpfTpob3N0KFtraW5kPW5ldXRyYWxdKSBidXR0b24sOmhvc3QoW2tpbmQ9bmV1dHJhbF0pIGF7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFtraW5kPW5ldXRyYWxdKSBidXR0b246aG92ZXIsOmhvc3QoW2tpbmQ9bmV1dHJhbF0pIGJ1dHRvbjpmb2N1cyw6aG9zdChba2luZD1uZXV0cmFsXSkgYTpob3Zlciw6aG9zdChba2luZD1uZXV0cmFsXSkgYTpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX06aG9zdChba2luZD1uZXV0cmFsXSkgYnV0dG9uOmFjdGl2ZSw6aG9zdChba2luZD1uZXV0cmFsXSkgYTphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW2tpbmQ9bmV1dHJhbF0pIGJ1dHRvbiBjYWxjaXRlLWxvYWRlciw6aG9zdChba2luZD1uZXV0cmFsXSkgYSBjYWxjaXRlLWxvYWRlcntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW2tpbmQ9aW52ZXJzZV0pIGJ1dHRvbiw6aG9zdChba2luZD1pbnZlcnNlXSkgYXtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtaW52ZXJzZSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWludmVyc2UpfTpob3N0KFtraW5kPWludmVyc2VdKSBidXR0b246aG92ZXIsOmhvc3QoW2tpbmQ9aW52ZXJzZV0pIGJ1dHRvbjpmb2N1cyw6aG9zdChba2luZD1pbnZlcnNlXSkgYTpob3Zlciw6aG9zdChba2luZD1pbnZlcnNlXSkgYTpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktaW52ZXJzZS1ob3Zlcil9Omhvc3QoW2tpbmQ9aW52ZXJzZV0pIGJ1dHRvbjphY3RpdmUsOmhvc3QoW2tpbmQ9aW52ZXJzZV0pIGE6YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1pbnZlcnNlLXByZXNzKX06aG9zdChba2luZD1pbnZlcnNlXSkgYnV0dG9uIGNhbGNpdGUtbG9hZGVyLDpob3N0KFtraW5kPWludmVyc2VdKSBhIGNhbGNpdGUtbG9hZGVye2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC1pbnZlcnNlKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdKSBidXR0b24sOmhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXSkgYXtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCB0cmFuc3BhcmVudH06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdW2tpbmQ9YnJhbmRdKSBidXR0b24sOmhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXVtraW5kPWJyYW5kXSkgYXtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXVtraW5kPWJyYW5kXSkgYnV0dG9uOmhvdmVyLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmUtZmlsbF1ba2luZD1icmFuZF0pIGE6aG92ZXJ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQtaG92ZXIpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQtaG92ZXIpO2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4IHZhcigtLWNhbGNpdGUtdWktYnJhbmQtaG92ZXIpfTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmUtZmlsbF1ba2luZD1icmFuZF0pIGJ1dHRvbjpmb2N1cyw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdW2tpbmQ9YnJhbmRdKSBhOmZvY3Vze2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTtib3gtc2hhZG93Omluc2V0IDAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdW2tpbmQ9YnJhbmRdKSBidXR0b246YWN0aXZlLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmUtZmlsbF1ba2luZD1icmFuZF0pIGE6YWN0aXZle2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kLXByZXNzKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kLXByZXNzKTtib3gtc2hhZG93Omluc2V0IDAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kLXByZXNzKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdW2tpbmQ9YnJhbmRdKSBidXR0b24gY2FsY2l0ZS1sb2FkZXIsOmhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXVtraW5kPWJyYW5kXSkgYSBjYWxjaXRlLWxvYWRlcntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdW2tpbmQ9ZGFuZ2VyXSkgYnV0dG9uLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmUtZmlsbF1ba2luZD1kYW5nZXJdKSBhe2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcik7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmUtZmlsbF1ba2luZD1kYW5nZXJdKSBidXR0b246aG92ZXIsOmhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXVtraW5kPWRhbmdlcl0pIGE6aG92ZXJ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyLWhvdmVyKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlci1ob3Zlcik7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggdmFyKC0tY2FsY2l0ZS11aS1kYW5nZXItaG92ZXIpfTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmUtZmlsbF1ba2luZD1kYW5nZXJdKSBidXR0b246Zm9jdXMsOmhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXVtraW5kPWRhbmdlcl0pIGE6Zm9jdXN7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcik7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAycHggdmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmUtZmlsbF1ba2luZD1kYW5nZXJdKSBidXR0b246YWN0aXZlLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmUtZmlsbF1ba2luZD1kYW5nZXJdKSBhOmFjdGl2ZXtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXItcHJlc3MpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyLXByZXNzKTtib3gtc2hhZG93Omluc2V0IDAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWRhbmdlci1wcmVzcyl9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXVtraW5kPWRhbmdlcl0pIGJ1dHRvbiBjYWxjaXRlLWxvYWRlciw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdW2tpbmQ9ZGFuZ2VyXSkgYSBjYWxjaXRlLWxvYWRlcntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcil9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXVtraW5kPW5ldXRyYWxdKSBidXR0b24sOmhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXVtraW5kPW5ldXRyYWxdKSBhe2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSl9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXVtraW5kPW5ldXRyYWxdKSBidXR0b246aG92ZXIsOmhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXVtraW5kPW5ldXRyYWxdKSBhOmhvdmVye2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdW2tpbmQ9bmV1dHJhbF0pIGJ1dHRvbjpmb2N1cyw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdW2tpbmQ9bmV1dHJhbF0pIGE6Zm9jdXN7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAycHggdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmUtZmlsbF1ba2luZD1uZXV0cmFsXSkgYnV0dG9uOmFjdGl2ZSw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdW2tpbmQ9bmV1dHJhbF0pIGE6YWN0aXZle2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdW2tpbmQ9bmV1dHJhbF0pIGJ1dHRvbiBjYWxjaXRlLWxvYWRlciw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdW2tpbmQ9bmV1dHJhbF0pIGEgY2FsY2l0ZS1sb2FkZXJ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmUtZmlsbF1ba2luZD1pbnZlcnNlXSkgYnV0dG9uLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmUtZmlsbF1ba2luZD1pbnZlcnNlXSkgYXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktaW52ZXJzZSl9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXVtraW5kPWludmVyc2VdKSBidXR0b246aG92ZXIsOmhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXVtraW5kPWludmVyc2VdKSBhOmhvdmVye2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWludmVyc2UtaG92ZXIpO2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4IHZhcigtLWNhbGNpdGUtdWktaW52ZXJzZS1ob3Zlcil9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXVtraW5kPWludmVyc2VdKSBidXR0b246Zm9jdXMsOmhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXVtraW5kPWludmVyc2VdKSBhOmZvY3Vze2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWludmVyc2UpO2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktaW52ZXJzZSl9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXVtraW5kPWludmVyc2VdKSBidXR0b246YWN0aXZlLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmUtZmlsbF1ba2luZD1pbnZlcnNlXSkgYTphY3RpdmV7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktaW52ZXJzZS1wcmVzcyk7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAycHggdmFyKC0tY2FsY2l0ZS11aS1pbnZlcnNlLXByZXNzKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdW2tpbmQ9aW52ZXJzZV0pIGJ1dHRvbiBjYWxjaXRlLWxvYWRlciw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdW2tpbmQ9aW52ZXJzZV0pIGEgY2FsY2l0ZS1sb2FkZXJ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdKSBidXR0b24sOmhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZV0pIGF7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCB0cmFuc3BhcmVudH06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXVtraW5kPWJyYW5kXSkgYnV0dG9uLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdW2tpbmQ9YnJhbmRdKSBhe2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdW2tpbmQ9YnJhbmRdKSBidXR0b246aG92ZXIsOmhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZV1ba2luZD1icmFuZF0pIGE6aG92ZXJ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQtaG92ZXIpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQtaG92ZXIpO2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4IHZhcigtLWNhbGNpdGUtdWktYnJhbmQtaG92ZXIpfTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdW2tpbmQ9YnJhbmRdKSBidXR0b246Zm9jdXMsOmhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZV1ba2luZD1icmFuZF0pIGE6Zm9jdXN7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdW2tpbmQ9YnJhbmRdKSBidXR0b246YWN0aXZlLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdW2tpbmQ9YnJhbmRdKSBhOmFjdGl2ZXtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZC1wcmVzcyk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZC1wcmVzcyk7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAycHggdmFyKC0tY2FsY2l0ZS11aS1icmFuZC1wcmVzcyl9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZV1ba2luZD1icmFuZF0pIGJ1dHRvbiBjYWxjaXRlLWxvYWRlciw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXVtraW5kPWJyYW5kXSkgYSBjYWxjaXRlLWxvYWRlcntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXVtraW5kPWRhbmdlcl0pIGJ1dHRvbiw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXVtraW5kPWRhbmdlcl0pIGF7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyKTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXVtraW5kPWRhbmdlcl0pIGJ1dHRvbjpob3Zlciw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXVtraW5kPWRhbmdlcl0pIGE6aG92ZXJ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyLWhvdmVyKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlci1ob3Zlcik7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggdmFyKC0tY2FsY2l0ZS11aS1kYW5nZXItaG92ZXIpfTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdW2tpbmQ9ZGFuZ2VyXSkgYnV0dG9uOmZvY3VzLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdW2tpbmQ9ZGFuZ2VyXSkgYTpmb2N1c3tib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyKTtib3gtc2hhZG93Omluc2V0IDAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcil9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZV1ba2luZD1kYW5nZXJdKSBidXR0b246YWN0aXZlLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdW2tpbmQ9ZGFuZ2VyXSkgYTphY3RpdmV7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyLXByZXNzKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlci1wcmVzcyk7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAycHggdmFyKC0tY2FsY2l0ZS11aS1kYW5nZXItcHJlc3MpfTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdW2tpbmQ9ZGFuZ2VyXSkgYnV0dG9uIGNhbGNpdGUtbG9hZGVyLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdW2tpbmQ9ZGFuZ2VyXSkgYSBjYWxjaXRlLWxvYWRlcntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcil9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZV1ba2luZD1uZXV0cmFsXSkgYnV0dG9uLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdW2tpbmQ9bmV1dHJhbF0pIGF7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpfTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdW2tpbmQ9bmV1dHJhbF0pIGJ1dHRvbjpob3Zlciw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXVtraW5kPW5ldXRyYWxdKSBhOmhvdmVye2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXVtraW5kPW5ldXRyYWxdKSBidXR0b246Zm9jdXMsOmhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZV1ba2luZD1uZXV0cmFsXSkgYTpmb2N1c3tib3gtc2hhZG93Omluc2V0IDAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyl9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZV1ba2luZD1uZXV0cmFsXSkgYnV0dG9uOmFjdGl2ZSw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXVtraW5kPW5ldXRyYWxdKSBhOmFjdGl2ZXtib3gtc2hhZG93Omluc2V0IDAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyl9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZV1ba2luZD1uZXV0cmFsXSkgYnV0dG9uIGNhbGNpdGUtbG9hZGVyLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdW2tpbmQ9bmV1dHJhbF0pIGEgY2FsY2l0ZS1sb2FkZXJ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdW2tpbmQ9aW52ZXJzZV0pIGJ1dHRvbiw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXVtraW5kPWludmVyc2VdKSBhe2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWludmVyc2UpfTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdW2tpbmQ9aW52ZXJzZV0pIGJ1dHRvbjpob3Zlciw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXVtraW5kPWludmVyc2VdKSBhOmhvdmVye2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWludmVyc2UtaG92ZXIpO2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4IHZhcigtLWNhbGNpdGUtdWktaW52ZXJzZS1ob3Zlcil9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZV1ba2luZD1pbnZlcnNlXSkgYnV0dG9uOmZvY3VzLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdW2tpbmQ9aW52ZXJzZV0pIGE6Zm9jdXN7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktaW52ZXJzZSk7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAycHggdmFyKC0tY2FsY2l0ZS11aS1pbnZlcnNlKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXVtraW5kPWludmVyc2VdKSBidXR0b246YWN0aXZlLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdW2tpbmQ9aW52ZXJzZV0pIGE6YWN0aXZle2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWludmVyc2UtcHJlc3MpO2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktaW52ZXJzZS1wcmVzcyl9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZV1ba2luZD1pbnZlcnNlXSkgYnV0dG9uIGNhbGNpdGUtbG9hZGVyLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdW2tpbmQ9aW52ZXJzZV0pIGEgY2FsY2l0ZS1sb2FkZXJ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmUtZmlsbF1bc3BsaXQtY2hpbGQ9cHJpbWFyeV0pIGJ1dHRvbiw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXVtzcGxpdC1jaGlsZD1wcmltYXJ5XSkgYnV0dG9ue2JvcmRlci1pbmxpbmUtZW5kLXdpZHRoOjA7Ym9yZGVyLWlubGluZS1zdGFydC13aWR0aDoxcHh9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXVtzcGxpdC1jaGlsZD1zZWNvbmRhcnldKSBidXR0b24sOmhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZV1bc3BsaXQtY2hpbGQ9c2Vjb25kYXJ5XSkgYnV0dG9ue2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6MDtib3JkZXItaW5saW5lLWVuZC13aWR0aDoxcHh9Omhvc3QoW2FwcGVhcmFuY2U9dHJhbnNwYXJlbnRdOm5vdCguZW5hYmxlLWVkaXRpbmctYnV0dG9uKSkgYnV0dG9uLDpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XTpub3QoLmVuYWJsZS1lZGl0aW5nLWJ1dHRvbikpIGF7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH06aG9zdChbYXBwZWFyYW5jZT10cmFuc3BhcmVudF06bm90KC5lbmFibGUtZWRpdGluZy1idXR0b24pKSBidXR0b246aG92ZXIsOmhvc3QoW2FwcGVhcmFuY2U9dHJhbnNwYXJlbnRdOm5vdCguZW5hYmxlLWVkaXRpbmctYnV0dG9uKSkgYnV0dG9uOmZvY3VzLDpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XTpub3QoLmVuYWJsZS1lZGl0aW5nLWJ1dHRvbikpIGE6aG92ZXIsOmhvc3QoW2FwcGVhcmFuY2U9dHJhbnNwYXJlbnRdOm5vdCguZW5hYmxlLWVkaXRpbmctYnV0dG9uKSkgYTpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtYnV0dG9uLXRyYW5zcGFyZW50LWhvdmVyKX06aG9zdChbYXBwZWFyYW5jZT10cmFuc3BhcmVudF06bm90KC5lbmFibGUtZWRpdGluZy1idXR0b24pKSBidXR0b246YWN0aXZlLDpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XTpub3QoLmVuYWJsZS1lZGl0aW5nLWJ1dHRvbikpIGE6YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS1idXR0b24tdHJhbnNwYXJlbnQtcHJlc3MpfTpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XVtraW5kPWJyYW5kXSkgYnV0dG9uLDpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XVtraW5kPWJyYW5kXSkgYXtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChbYXBwZWFyYW5jZT10cmFuc3BhcmVudF1ba2luZD1icmFuZF0pIGJ1dHRvbjpob3Zlciw6aG9zdChbYXBwZWFyYW5jZT10cmFuc3BhcmVudF1ba2luZD1icmFuZF0pIGE6aG92ZXJ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZC1ob3Zlcil9Omhvc3QoW2FwcGVhcmFuY2U9dHJhbnNwYXJlbnRdW2tpbmQ9YnJhbmRdKSBidXR0b246Zm9jdXMsOmhvc3QoW2FwcGVhcmFuY2U9dHJhbnNwYXJlbnRdW2tpbmQ9YnJhbmRdKSBhOmZvY3Vze2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XVtraW5kPWJyYW5kXSkgYnV0dG9uOmFjdGl2ZSw6aG9zdChbYXBwZWFyYW5jZT10cmFuc3BhcmVudF1ba2luZD1icmFuZF0pIGE6YWN0aXZle2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQtcHJlc3MpfTpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XVtraW5kPWJyYW5kXSkgYnV0dG9uIGNhbGNpdGUtbG9hZGVyLDpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XVtraW5kPWJyYW5kXSkgYSBjYWxjaXRlLWxvYWRlcntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChbYXBwZWFyYW5jZT10cmFuc3BhcmVudF1ba2luZD1kYW5nZXJdKSBidXR0b24sOmhvc3QoW2FwcGVhcmFuY2U9dHJhbnNwYXJlbnRdW2tpbmQ9ZGFuZ2VyXSkgYXtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcil9Omhvc3QoW2FwcGVhcmFuY2U9dHJhbnNwYXJlbnRdW2tpbmQ9ZGFuZ2VyXSkgYnV0dG9uOmhvdmVyLDpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XVtraW5kPWRhbmdlcl0pIGE6aG92ZXJ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXItaG92ZXIpfTpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XVtraW5kPWRhbmdlcl0pIGJ1dHRvbjpmb2N1cyw6aG9zdChbYXBwZWFyYW5jZT10cmFuc3BhcmVudF1ba2luZD1kYW5nZXJdKSBhOmZvY3Vze2NvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyKX06aG9zdChbYXBwZWFyYW5jZT10cmFuc3BhcmVudF1ba2luZD1kYW5nZXJdKSBidXR0b246YWN0aXZlLDpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XVtraW5kPWRhbmdlcl0pIGE6YWN0aXZle2NvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyLXByZXNzKX06aG9zdChbYXBwZWFyYW5jZT10cmFuc3BhcmVudF1ba2luZD1kYW5nZXJdKSBidXR0b24gY2FsY2l0ZS1sb2FkZXIsOmhvc3QoW2FwcGVhcmFuY2U9dHJhbnNwYXJlbnRdW2tpbmQ9ZGFuZ2VyXSkgYSBjYWxjaXRlLWxvYWRlcntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcil9Omhvc3QoW2FwcGVhcmFuY2U9dHJhbnNwYXJlbnRdW2tpbmQ9bmV1dHJhbF06bm90KC5jYW5jZWwtZWRpdGluZy1idXR0b24pKSBidXR0b24sOmhvc3QoW2FwcGVhcmFuY2U9dHJhbnNwYXJlbnRdW2tpbmQ9bmV1dHJhbF06bm90KC5jYW5jZWwtZWRpdGluZy1idXR0b24pKSBhLDpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XVtraW5kPW5ldXRyYWxdOm5vdCguY2FuY2VsLWVkaXRpbmctYnV0dG9uKSkgY2FsY2l0ZS1sb2FkZXJ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XVtraW5kPW5ldXRyYWxdLmNhbmNlbC1lZGl0aW5nLWJ1dHRvbikgYnV0dG9ue2JvcmRlci1ibG9jay1zdGFydC13aWR0aDoxcHg7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDoxcHg7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO2JvcmRlci1ibG9jay1zdGFydC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7Ym9yZGVyLWJsb2NrLWVuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7Ym9yZGVyLWJsb2NrLXN0eWxlOnNvbGlkfTpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XVtraW5kPW5ldXRyYWxdLmNhbmNlbC1lZGl0aW5nLWJ1dHRvbikgYnV0dG9uOm5vdCguY29udGVudC0tc2xvdHRlZCl7LS1jYWxjaXRlLWJ1dHRvbi1wYWRkaW5nLXktaW50ZXJuYWw6MH06aG9zdChbYXBwZWFyYW5jZT10cmFuc3BhcmVudF1ba2luZD1uZXV0cmFsXS5jYW5jZWwtZWRpdGluZy1idXR0b24pIGJ1dHRvbjpob3Zlcntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW2FwcGVhcmFuY2U9dHJhbnNwYXJlbnRdW2tpbmQ9bmV1dHJhbF0uZW5hYmxlLWVkaXRpbmctYnV0dG9uKSBidXR0b257YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH06aG9zdCguY29uZmlybS1jaGFuZ2VzLWJ1dHRvbikgYnV0dG9uOmZvY3VzLDpob3N0KC5jYW5jZWwtZWRpdGluZy1idXR0b24pIGJ1dHRvbjpmb2N1cyw6aG9zdCguZW5hYmxlLWVkaXRpbmctYnV0dG9uKSBidXR0b246Zm9jdXN7b3V0bGluZS1vZmZzZXQ6LTJweH06aG9zdChbYXBwZWFyYW5jZT10cmFuc3BhcmVudF1ba2luZD1pbnZlcnNlXSkgYnV0dG9uLDpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XVtraW5kPWludmVyc2VdKSBhLDpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XVtraW5kPWludmVyc2VdKSBjYWxjaXRlLWxvYWRlcntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtaW52ZXJzZSl9Omhvc3QoW3NjYWxlPXNdKSBidXR0b24uY29udGVudC0tc2xvdHRlZCw6aG9zdChbc2NhbGU9c10pIGEuY29udGVudC0tc2xvdHRlZHtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPXNdW2FwcGVhcmFuY2U9dHJhbnNwYXJlbnRdKSBidXR0b24uY29udGVudC0tc2xvdHRlZCw6aG9zdChbc2NhbGU9c11bYXBwZWFyYW5jZT10cmFuc3BhcmVudF0pIGEuY29udGVudC0tc2xvdHRlZHstLWNhbGNpdGUtYnV0dG9uLXBhZGRpbmcteC1pbnRlcm5hbDowLjVyZW19Omhvc3QoW3NjYWxlPXNdKSBidXR0b24sOmhvc3QoW3NjYWxlPXNdKSBhey0tY2FsY2l0ZS1idXR0b24tcGFkZGluZy15LWludGVybmFsOjNweH06aG9zdChbc2NhbGU9bV0pIGJ1dHRvbi5jb250ZW50LS1zbG90dGVkLDpob3N0KFtzY2FsZT1tXSkgYS5jb250ZW50LS1zbG90dGVkey0tY2FsY2l0ZS1idXR0b24tcGFkZGluZy14LWludGVybmFsOjExcHg7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1tXSkgYnV0dG9uLDpob3N0KFtzY2FsZT1tXSkgYXstLWNhbGNpdGUtYnV0dG9uLXBhZGRpbmcteS1pbnRlcm5hbDo3cHh9Omhvc3QoW3NjYWxlPW1dW2FwcGVhcmFuY2U9dHJhbnNwYXJlbnRdKSBidXR0b24uY29udGVudC0tc2xvdHRlZCw6aG9zdChbc2NhbGU9bV1bYXBwZWFyYW5jZT10cmFuc3BhcmVudF0pIGEuY29udGVudC0tc2xvdHRlZHstLWNhbGNpdGUtYnV0dG9uLXBhZGRpbmcteC1pbnRlcm5hbDowLjc1cmVtfTpob3N0KFtzY2FsZT1sXSkgYnV0dG9uLmNvbnRlbnQtLXNsb3R0ZWQsOmhvc3QoW3NjYWxlPWxdKSBhLmNvbnRlbnQtLXNsb3R0ZWR7LS1jYWxjaXRlLWJ1dHRvbi1wYWRkaW5nLXgtaW50ZXJuYWw6MTVweDtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbX06aG9zdChbc2NhbGU9bF0pIC5idXR0b24tcGFkZGluZ3stLWNhbGNpdGUtYnV0dG9uLXBhZGRpbmcteC1pbnRlcm5hbDoxcmVtOy0tY2FsY2l0ZS1idXR0b24tcGFkZGluZy15LWludGVybmFsOjExcHh9Omhvc3QoW3NjYWxlPWxdKSAuYnV0dG9uLXBhZGRpbmctLXNocnVua3stLWNhbGNpdGUtYnV0dG9uLXBhZGRpbmcteS1pbnRlcm5hbDo5cHh9Omhvc3QoW3NjYWxlPXNdKSBidXR0b246bm90KC5jb250ZW50LS1zbG90dGVkKSw6aG9zdChbc2NhbGU9c10pIGE6bm90KC5jb250ZW50LS1zbG90dGVkKXstLWNhbGNpdGUtYnV0dG9uLXBhZGRpbmcteC1pbnRlcm5hbDowLjEyNXJlbTstLWNhbGNpdGUtYnV0dG9uLXBhZGRpbmcteS1pbnRlcm5hbDozcHg7aW5saW5lLXNpemU6MS41cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtO21pbi1ibG9jay1zaXplOjEuNXJlbX06aG9zdChbc2NhbGU9bV0pIGJ1dHRvbjpub3QoLmNvbnRlbnQtLXNsb3R0ZWQpLDpob3N0KFtzY2FsZT1tXSkgYTpub3QoLmNvbnRlbnQtLXNsb3R0ZWQpey0tY2FsY2l0ZS1idXR0b24tcGFkZGluZy14LWludGVybmFsOjAuMTI1cmVtOy0tY2FsY2l0ZS1idXR0b24tcGFkZGluZy15LWludGVybmFsOjdweDtpbmxpbmUtc2l6ZToycmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtO21pbi1ibG9jay1zaXplOjJyZW19Omhvc3QoW3NjYWxlPWxdKSBidXR0b246bm90KC5jb250ZW50LS1zbG90dGVkKSw6aG9zdChbc2NhbGU9bF0pIGE6bm90KC5jb250ZW50LS1zbG90dGVkKXstLWNhbGNpdGUtYnV0dG9uLXBhZGRpbmcteC1pbnRlcm5hbDowLjEyNXJlbTstLWNhbGNpdGUtYnV0dG9uLXBhZGRpbmcteS1pbnRlcm5hbDo5cHg7aW5saW5lLXNpemU6Mi43NXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbTttaW4tYmxvY2stc2l6ZToyLjc1cmVtfTpob3N0KFtzY2FsZT1sXVthcHBlYXJhbmNlPXRyYW5zcGFyZW50XSkgYnV0dG9uOm5vdCguY29udGVudC0tc2xvdHRlZCksOmhvc3QoW3NjYWxlPWxdW2FwcGVhcmFuY2U9dHJhbnNwYXJlbnRdKSBhOm5vdCguY29udGVudC0tc2xvdHRlZCl7LS1jYWxjaXRlLWJ1dHRvbi1wYWRkaW5nLXktaW50ZXJuYWw6MC42MjVyZW19Omhvc3QoW3NjYWxlPXNdW2ljb24tc3RhcnRdW2ljb24tZW5kXSkgYnV0dG9uOm5vdCguY29udGVudC0tc2xvdHRlZCksOmhvc3QoW3NjYWxlPXNdW2ljb24tc3RhcnRdW2ljb24tZW5kXSkgYTpub3QoLmNvbnRlbnQtLXNsb3R0ZWQpey0tY2FsY2l0ZS1idXR0b24tcGFkZGluZy14LWludGVybmFsOjIzcHg7YmxvY2stc2l6ZToxLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW19Omhvc3QoW3NjYWxlPXNdW2ljb24tc3RhcnRdW2ljb24tZW5kXVthcHBlYXJhbmNlPXRyYW5zcGFyZW50XSkgYnV0dG9uOm5vdCguY29udGVudC0tc2xvdHRlZCksOmhvc3QoW3NjYWxlPXNdW2ljb24tc3RhcnRdW2ljb24tZW5kXVthcHBlYXJhbmNlPXRyYW5zcGFyZW50XSkgYTpub3QoLmNvbnRlbnQtLXNsb3R0ZWQpey0tY2FsY2l0ZS1idXR0b24tcGFkZGluZy14LWludGVybmFsOjEuNXJlbX06aG9zdChbc2NhbGU9bV1baWNvbi1zdGFydF1baWNvbi1lbmRdKSBidXR0b246bm90KC5jb250ZW50LS1zbG90dGVkKSw6aG9zdChbc2NhbGU9bV1baWNvbi1zdGFydF1baWNvbi1lbmRdKSBhOm5vdCguY29udGVudC0tc2xvdHRlZCl7LS1jYWxjaXRlLWJ1dHRvbi1wYWRkaW5nLXgtaW50ZXJuYWw6MnJlbTtibG9jay1zaXplOjJyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW19Omhvc3QoW3NjYWxlPW1dW2ljb24tc3RhcnRdW2ljb24tZW5kXVthcHBlYXJhbmNlPXRyYW5zcGFyZW50XSkgYnV0dG9uOm5vdCguY29udGVudC0tc2xvdHRlZCksOmhvc3QoW3NjYWxlPW1dW2ljb24tc3RhcnRdW2ljb24tZW5kXVthcHBlYXJhbmNlPXRyYW5zcGFyZW50XSkgYTpub3QoLmNvbnRlbnQtLXNsb3R0ZWQpey0tY2FsY2l0ZS1idXR0b24tcGFkZGluZy14LWludGVybmFsOjMzcHh9Omhvc3QoW3NjYWxlPWxdW2ljb24tc3RhcnRdW2ljb24tZW5kXSkgYnV0dG9uOm5vdCguY29udGVudC0tc2xvdHRlZCksOmhvc3QoW3NjYWxlPWxdW2ljb24tc3RhcnRdW2ljb24tZW5kXSkgYTpub3QoLmNvbnRlbnQtLXNsb3R0ZWQpey0tY2FsY2l0ZS1idXR0b24tcGFkZGluZy14LWludGVybmFsOjQzcHg7YmxvY2stc2l6ZToyLjc1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtfTpob3N0KFtzY2FsZT1sXVtpY29uLXN0YXJ0XVtpY29uLWVuZF0pIGJ1dHRvbjpub3QoLmNvbnRlbnQtLXNsb3R0ZWQpIC5pY29uLS1zdGFydCsuaWNvbi0tZW5kLDpob3N0KFtzY2FsZT1sXVtpY29uLXN0YXJ0XVtpY29uLWVuZF0pIGE6bm90KC5jb250ZW50LS1zbG90dGVkKSAuaWNvbi0tc3RhcnQrLmljb24tLWVuZHttYXJnaW4taW5saW5lLXN0YXJ0OjFyZW19Omhvc3QoW3NjYWxlPWxdW2ljb24tc3RhcnRdW2ljb24tZW5kXVthcHBlYXJhbmNlPXRyYW5zcGFyZW50XSkgYnV0dG9uOm5vdCguY29udGVudC0tc2xvdHRlZCksOmhvc3QoW3NjYWxlPWxdW2ljb24tc3RhcnRdW2ljb24tZW5kXVthcHBlYXJhbmNlPXRyYW5zcGFyZW50XSkgYTpub3QoLmNvbnRlbnQtLXNsb3R0ZWQpey0tY2FsY2l0ZS1idXR0b24tcGFkZGluZy14LWludGVybmFsOjIuNzVyZW19Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IEJ1dHRvbiA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgLyoqIHdhdGNoZXMgZm9yIGNoYW5naW5nIHRleHQgY29udGVudCAqL1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgKCkgPT4gdGhpcy51cGRhdGVIYXNDb250ZW50KCkpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcInJlc2l6ZVwiLCAoKSA9PiB0aGlzLnNldFRvb2x0aXBUZXh0KCkpO1xuICAgIC8vIGFjdCBvbiBhIHJlcXVlc3RlZCBvciBuZWFyYnkgZm9ybSBiYXNlZCBvbiB0eXBlXG4gICAgdGhpcy5oYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcztcbiAgICAgIGlmICh0aGlzLmhyZWYpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gdGhpcy50eXBlIHJlZmVycyB0byB0eXBlIGF0dHJpYnV0ZSwgbm90IGNoaWxkIGVsZW1lbnQgdHlwZVxuICAgICAgaWYgKHR5cGUgPT09IFwic3VibWl0XCIpIHtcbiAgICAgICAgc3VibWl0Rm9ybSh0aGlzKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwicmVzZXRcIikge1xuICAgICAgICByZXNldEZvcm0odGhpcyk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNldFRvb2x0aXBUZXh0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXM7XG4gICAgICBpZiAoY29udGVudEVsKSB7XG4gICAgICAgIHRoaXMudG9vbHRpcFRleHQgPSBjb250ZW50RWwub2Zmc2V0V2lkdGggPCBjb250ZW50RWwuc2Nyb2xsV2lkdGggPyB0aGlzLmVsLmlubmVyVGV4dCA6IG51bGw7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNldENoaWxkRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuY2hpbGRFbCA9IGVsO1xuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/Lm9ic2VydmUoZWwpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5hbGlnbm1lbnQgPSBcImNlbnRlclwiO1xuICAgIHRoaXMuYXBwZWFyYW5jZSA9IFwic29saWRcIjtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMua2luZCA9IFwiYnJhbmRcIjtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb3JtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaHJlZiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25FbmQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pY29uRmxpcFJ0bCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25TdGFydCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yb3VuZCA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnNwbGl0Q2hpbGQgPSBmYWxzZTtcbiAgICB0aGlzLnRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIHRoaXMud2lkdGggPSBcImF1dG9cIjtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0xvYWRlciA9IGZhbHNlO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRvb2x0aXBUZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZ2xvYmFsQXR0cmlidXRlcyA9IHtcbiAgICAgIGFyaWFFeHBhbmRlZDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cbiAgbG9hZGluZ0NoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgaWYgKCEhbmV3VmFsdWUgJiYgIW9sZFZhbHVlKSB7XG4gICAgICB0aGlzLmhhc0xvYWRlciA9IHRydWU7XG4gICAgfVxuICAgIGlmICghbmV3VmFsdWUgJiYgISFvbGRWYWx1ZSkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhhc0xvYWRlciA9IGZhbHNlO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiogcmVmZXJyZWQgaW4gdDluIHV0aWwgKi9cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgd2F0Y2hHbG9iYWxBdHRyaWJ1dGVzKHRoaXMsIFtcImFyaWEtZXhwYW5kZWRcIl0pO1xuICAgIHRoaXMuaGFzTG9hZGVyID0gdGhpcy5sb2FkaW5nO1xuICAgIHRoaXMuc2V0dXBUZXh0Q29udGVudE9ic2VydmVyKCk7XG4gICAgY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIHRoaXMuZm9ybUVsID0gZmluZEFzc29jaWF0ZWRGb3JtKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBkaXNjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuZm9ybUVsID0gbnVsbDtcbiAgICB1bndhdGNoR2xvYmFsQXR0cmlidXRlcyh0aGlzKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIGlmIChCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMudXBkYXRlSGFzQ29udGVudCgpO1xuICAgICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy5zZXRUb29sdGlwVGV4dCgpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNoaWxkRWxUeXBlID0gdGhpcy5ocmVmID8gXCJhXCIgOiBcImJ1dHRvblwiO1xuICAgIGNvbnN0IFRhZyA9IGNoaWxkRWxUeXBlO1xuICAgIGNvbnN0IGxvYWRlck5vZGUgPSB0aGlzLmhhc0xvYWRlciA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5idXR0b25Mb2FkZXIgfSwgaChcImNhbGNpdGUtbG9hZGVyXCIsIHsgY2xhc3M6IHRoaXMubG9hZGluZyA/IENTUy5sb2FkaW5nSW4gOiBDU1MubG9hZGluZ091dCwgaW5saW5lOiB0cnVlLCBsYWJlbDogdGhpcy5tZXNzYWdlcy5sb2FkaW5nLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSkgOiBudWxsO1xuICAgIGNvbnN0IG5vU3RhcnRFbmRJY29ucyA9ICF0aGlzLmljb25TdGFydCAmJiAhdGhpcy5pY29uRW5kO1xuICAgIGNvbnN0IGljb25TdGFydEVsID0gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogeyBbQ1NTLmljb25dOiB0cnVlLCBbQ1NTLmljb25TdGFydF06IHRydWUgfSwgZmxpcFJ0bDogdGhpcy5pY29uRmxpcFJ0bCA9PT0gXCJzdGFydFwiIHx8IHRoaXMuaWNvbkZsaXBSdGwgPT09IFwiYm90aFwiLCBpY29uOiB0aGlzLmljb25TdGFydCwgc2NhbGU6IGdldEljb25TY2FsZSh0aGlzLnNjYWxlKSB9KSk7XG4gICAgY29uc3QgaWNvbkVuZEVsID0gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogeyBbQ1NTLmljb25dOiB0cnVlLCBbQ1NTLmljb25FbmRdOiB0cnVlIH0sIGZsaXBSdGw6IHRoaXMuaWNvbkZsaXBSdGwgPT09IFwiZW5kXCIgfHwgdGhpcy5pY29uRmxpcFJ0bCA9PT0gXCJib3RoXCIsIGljb246IHRoaXMuaWNvbkVuZCwgc2NhbGU6IGdldEljb25TY2FsZSh0aGlzLnNjYWxlKSB9KSk7XG4gICAgY29uc3QgY29udGVudEVsID0gKGgoXCJzcGFuXCIsIHsgY2xhc3M6IENTUy5jb250ZW50LCByZWY6IChlbCkgPT4gKHRoaXMuY29udGVudEVsID0gZWwpIH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gICAgcmV0dXJuIChoKFRhZywgeyBcImFyaWEtbGFiZWxcIjogIXRoaXMubG9hZGluZyA/IGdldExhYmVsVGV4dCh0aGlzKSA6IHRoaXMubWVzc2FnZXMubG9hZGluZywgXCJhcmlhLWxpdmVcIjogXCJwb2xpdGVcIiwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5idXR0b25QYWRkaW5nXTogbm9TdGFydEVuZEljb25zLFxuICAgICAgICBbQ1NTLmJ1dHRvblBhZGRpbmdTaHJ1bmtdOiAhbm9TdGFydEVuZEljb25zLFxuICAgICAgICBbQ1NTLmNvbnRlbnRTbG90dGVkXTogdGhpcy5oYXNDb250ZW50LFxuICAgICAgICBbQ1NTLmljb25TdGFydEVtcHR5XTogIXRoaXMuaWNvblN0YXJ0LFxuICAgICAgICBbQ1NTLmljb25FbmRFbXB0eV06ICF0aGlzLmljb25FbmQsXG4gICAgICB9LCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCB8fCB0aGlzLmxvYWRpbmcsIGhyZWY6IGNoaWxkRWxUeXBlID09PSBcImFcIiAmJiB0aGlzLmhyZWYsIG5hbWU6IGNoaWxkRWxUeXBlID09PSBcImJ1dHRvblwiICYmIHRoaXMubmFtZSwgb25DbGljazogdGhpcy5oYW5kbGVDbGljaywgcmVsOiBjaGlsZEVsVHlwZSA9PT0gXCJhXCIgJiYgdGhpcy5yZWwsIHRhYkluZGV4OiB0aGlzLmRpc2FibGVkIHx8IHRoaXMubG9hZGluZyA/IC0xIDogbnVsbCwgdGFyZ2V0OiBjaGlsZEVsVHlwZSA9PT0gXCJhXCIgJiYgdGhpcy50YXJnZXQsIHRpdGxlOiB0aGlzLnRvb2x0aXBUZXh0LCB0eXBlOiBjaGlsZEVsVHlwZSA9PT0gXCJidXR0b25cIiAmJiB0aGlzLnR5cGUsIC4uLnRoaXMuZ2xvYmFsQXR0cmlidXRlcyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wcyAtLSByZWYgc2hvdWxkIGJlIGxhc3Qgc28gbm9kZSBhdHRycy9wcm9wcyBhcmUgaW4gc3luYyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9wdWxsLzY1MzApXG4gICAgICByZWY6IHRoaXMuc2V0Q2hpbGRFbCB9LCBsb2FkZXJOb2RlLCB0aGlzLmljb25TdGFydCA/IGljb25TdGFydEVsIDogbnVsbCwgdGhpcy5oYXNDb250ZW50ID8gY29udGVudEVsIDogbnVsbCwgdGhpcy5pY29uRW5kID8gaWNvbkVuZEVsIDogbnVsbCkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50Rm9jdXNhYmxlKHRoaXMpO1xuICAgIHRoaXMuY2hpbGRFbD8uZm9jdXMoKTtcbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIHVwZGF0ZUhhc0NvbnRlbnQoKSB7XG4gICAgY29uc3Qgc2xvdHRlZENvbnRlbnQgPSB0aGlzLmVsLnRleHRDb250ZW50LnRyaW0oKS5sZW5ndGggPiAwIHx8IHRoaXMuZWwuY2hpbGROb2Rlcy5sZW5ndGggPiAwO1xuICAgIHRoaXMuaGFzQ29udGVudCA9XG4gICAgICB0aGlzLmVsLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxICYmIHRoaXMuZWwuY2hpbGROb2Rlc1swXT8ubm9kZU5hbWUgPT09IFwiI3RleHRcIlxuICAgICAgICA/IHRoaXMuZWwudGV4dENvbnRlbnQ/LnRyaW0oKS5sZW5ndGggPiAwXG4gICAgICAgIDogc2xvdHRlZENvbnRlbnQ7XG4gIH1cbiAgc2V0dXBUZXh0Q29udGVudE9ic2VydmVyKCkge1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8ub2JzZXJ2ZSh0aGlzLmVsLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBvbkxhYmVsQ2xpY2soKSB7XG4gICAgdGhpcy5oYW5kbGVDbGljaygpO1xuICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibG9hZGluZ1wiOiBbXCJsb2FkaW5nQ2hhbmdlZFwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gYnV0dG9uQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLWJ1dHRvblwiLCB7XG4gICAgXCJhbGlnbm1lbnRcIjogWzUxM10sXG4gICAgXCJhcHBlYXJhbmNlXCI6IFs1MTNdLFxuICAgIFwibGFiZWxcIjogWzFdLFxuICAgIFwia2luZFwiOiBbNTEzXSxcbiAgICBcImRpc2FibGVkXCI6IFs1MTZdLFxuICAgIFwiZm9ybVwiOiBbNTEzXSxcbiAgICBcImhyZWZcIjogWzUxM10sXG4gICAgXCJpY29uRW5kXCI6IFs1MTMsIFwiaWNvbi1lbmRcIl0sXG4gICAgXCJpY29uRmxpcFJ0bFwiOiBbNTEzLCBcImljb24tZmxpcC1ydGxcIl0sXG4gICAgXCJpY29uU3RhcnRcIjogWzUxMywgXCJpY29uLXN0YXJ0XCJdLFxuICAgIFwibG9hZGluZ1wiOiBbNTE2XSxcbiAgICBcIm5hbWVcIjogWzUxM10sXG4gICAgXCJyZWxcIjogWzUxM10sXG4gICAgXCJyb3VuZFwiOiBbNTE2XSxcbiAgICBcInNjYWxlXCI6IFs1MTNdLFxuICAgIFwic3BsaXRDaGlsZFwiOiBbNTIwLCBcInNwbGl0LWNoaWxkXCJdLFxuICAgIFwidGFyZ2V0XCI6IFs1MTNdLFxuICAgIFwidHlwZVwiOiBbNTEzXSxcbiAgICBcIndpZHRoXCI6IFs1MTNdLFxuICAgIFwibWVzc2FnZXNcIjogWzEwNDBdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbMTA0MF0sXG4gICAgXCJoYXNDb250ZW50XCI6IFszMl0sXG4gICAgXCJoYXNMb2FkZXJcIjogWzMyXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbMzJdLFxuICAgIFwiZGVmYXVsdE1lc3NhZ2VzXCI6IFszMl0sXG4gICAgXCJ0b29sdGlwVGV4dFwiOiBbMzJdLFxuICAgIFwiZ2xvYmFsQXR0cmlidXRlc1wiOiBbMzJdLFxuICAgIFwic2V0Rm9jdXNcIjogWzY0XVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWJ1dHRvblwiLCBcImNhbGNpdGUtaWNvblwiLCBcImNhbGNpdGUtbG9hZGVyXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLWJ1dHRvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIEJ1dHRvbik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY2FsY2l0ZS1pY29uXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDIoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWxvYWRlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQoKTtcblxuZXhwb3J0IHsgQnV0dG9uIGFzIEIsIGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuZnVuY3Rpb24gZ2V0SWNvblNjYWxlKGNvbXBvbmVudFNjYWxlKSB7XG4gIHJldHVybiBjb21wb25lbnRTY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiO1xufVxuXG5leHBvcnQgeyBnZXRJY29uU2NhbGUgYXMgZyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcblxuY29uc3QgYWxsb3dlZEdsb2JhbEF0dHJpYnV0ZXMgPSBbXCJsYW5nXCIsIFwicm9sZVwiLCBcImFyaWEtZXhwYW5kZWRcIl07XG5jb25zdCBlbGVtZW50VG9Db21wb25lbnRBbmRPYnNlcnZlck9wdGlvbnNNYXAgPSBuZXcgTWFwKCk7XG5sZXQgbXV0YXRpb25PYnNlcnZlcjtcbmZ1bmN0aW9uIHVwZGF0ZUdsb2JhbEF0dHJpYnV0ZXMoY29tcG9uZW50LCBhdHRyaWJ1dGVGaWx0ZXIsIHJldXNlQXR0cmlidXRlcyA9IGZhbHNlKSB7XG4gIGNvbnN0IHsgZWwgfSA9IGNvbXBvbmVudDtcbiAgY29uc3QgdXBkYXRlZEF0dHJpYnV0ZXMgPSByZXVzZUF0dHJpYnV0ZXMgPyBjb21wb25lbnQuZ2xvYmFsQXR0cmlidXRlcyA6IHt9O1xuICBhdHRyaWJ1dGVGaWx0ZXJcbiAgICAuZmlsdGVyKChhdHRyKSA9PiAhIWFsbG93ZWRHbG9iYWxBdHRyaWJ1dGVzLmluY2x1ZGVzKGF0dHIpICYmICEhZWwuaGFzQXR0cmlidXRlKGF0dHIpKVxuICAgIC5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlbC5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB1cGRhdGVkQXR0cmlidXRlc1thdHRyXSA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG4gIGNvbXBvbmVudC5nbG9iYWxBdHRyaWJ1dGVzID0gdXBkYXRlZEF0dHJpYnV0ZXM7XG59XG5mdW5jdGlvbiBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9ucykge1xuICBtdXRhdGlvbnMuZm9yRWFjaCgoeyB0YXJnZXQgfSkgPT4ge1xuICAgIGNvbnN0IFtjb21wb25lbnQsIG9wdGlvbnNdID0gZWxlbWVudFRvQ29tcG9uZW50QW5kT2JzZXJ2ZXJPcHRpb25zTWFwLmdldCh0YXJnZXQpO1xuICAgIHVwZGF0ZUdsb2JhbEF0dHJpYnV0ZXMoY29tcG9uZW50LCBvcHRpb25zLmF0dHJpYnV0ZUZpbHRlcik7XG4gIH0pO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gc2V0IHVwIGxpc3RlbmluZyBmb3IgY2hhbmdlcyB0byBnbG9iYWwgYXR0cmlidXRlcy5cbiAqXG4gKiByZW5kZXIoKTogVk5vZGUge1xuICogcmV0dXJuICg8SG9zdD5cbiAqIDx1bCB7Li4udGhpcy5nbG9iYWxBdHRyaWJ1dGVzfT48L2Rpdj5cbiAqIDwvSG9zdD4pO1xuICogfVxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBhdHRyaWJ1dGVGaWx0ZXJcbiAqL1xuZnVuY3Rpb24gd2F0Y2hHbG9iYWxBdHRyaWJ1dGVzKGNvbXBvbmVudCwgYXR0cmlidXRlRmlsdGVyKSB7XG4gIGNvbnN0IHsgZWwgfSA9IGNvbXBvbmVudDtcbiAgY29uc3Qgb2JzZXJ2ZXJPcHRpb25zID0geyBhdHRyaWJ1dGVGaWx0ZXIgfTtcbiAgZWxlbWVudFRvQ29tcG9uZW50QW5kT2JzZXJ2ZXJPcHRpb25zTWFwLnNldChlbCwgW2NvbXBvbmVudCwgb2JzZXJ2ZXJPcHRpb25zXSk7XG4gIHVwZGF0ZUdsb2JhbEF0dHJpYnV0ZXMoY29tcG9uZW50LCBhdHRyaWJ1dGVGaWx0ZXIsIHRydWUpO1xuICBpZiAoIW11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCBwcm9jZXNzTXV0YXRpb25zKTtcbiAgfVxuICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZWwsIG9ic2VydmVyT3B0aW9ucyk7XG59XG4vKipcbiAqIEhlbHBlciByZW1vdmUgbGlzdGVuaW5nIGZvciBjaGFuZ2VzIHRvIGluaGVyaXRlZCBhdHRyaWJ1dGVzLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gdW53YXRjaEdsb2JhbEF0dHJpYnV0ZXMoY29tcG9uZW50KSB7XG4gIGVsZW1lbnRUb0NvbXBvbmVudEFuZE9ic2VydmVyT3B0aW9uc01hcC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgLy8gd2UgZXhwbGljaXRseSBwcm9jZXNzIHF1ZXVlZCBtdXRhdGlvbnMgYW5kIGRpc2Nvbm5lY3QgYW5kIHJlY29ubmVjdFxuICAvLyB0aGUgb2JzZXJ2ZXIgdW50aWwgTXV0YXRpb25PYnNlcnZlciBnZXRzIGFuIGB1bm9ic2VydmVgIG1ldGhvZFxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNlxuICBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICBmb3IgKGNvbnN0IFtlbGVtZW50LCBbLCBvYnNlcnZlck9wdGlvbnNdXSBvZiBlbGVtZW50VG9Db21wb25lbnRBbmRPYnNlcnZlck9wdGlvbnNNYXAuZW50cmllcygpKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9ic2VydmVyT3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IHsgdW53YXRjaEdsb2JhbEF0dHJpYnV0ZXMgYXMgdSwgd2F0Y2hHbG9iYWxBdHRyaWJ1dGVzIGFzIHcgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGdldEFzc2V0UGF0aCwgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgaCwgSG9zdCwgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldEVsZW1lbnREaXIsIHQgYXMgdG9BcmlhQm9vbGVhbiB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgaWNvbjogXCJpY29uXCIsXG4gIGZsaXBSdGw6IFwiZmxpcC1ydGxcIixcbn07XG5cbi8qKlxuICogSWNvbiBkYXRhIGNhY2hlLlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgaWNvbkNhY2hlID0ge307XG4vKipcbiAqIEljb24gcmVxdWVzdCBjYWNoZS5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IHJlcXVlc3RDYWNoZSA9IHt9O1xuY29uc3Qgc2NhbGVUb1B4ID0ge1xuICBzOiAxNixcbiAgbTogMjQsXG4gIGw6IDMyLFxufTtcbmFzeW5jIGZ1bmN0aW9uIGZldGNoSWNvbih7IGljb24sIHNjYWxlIH0pIHtcbiAgY29uc3Qgc2l6ZSA9IHNjYWxlVG9QeFtzY2FsZV07XG4gIGNvbnN0IG5hbWUgPSBub3JtYWxpemVJY29uTmFtZShpY29uKTtcbiAgY29uc3QgZmlsbGVkID0gbmFtZS5jaGFyQXQobmFtZS5sZW5ndGggLSAxKSA9PT0gXCJGXCI7XG4gIGNvbnN0IGljb25OYW1lID0gZmlsbGVkID8gbmFtZS5zdWJzdHJpbmcoMCwgbmFtZS5sZW5ndGggLSAxKSA6IG5hbWU7XG4gIGNvbnN0IGlkID0gYCR7aWNvbk5hbWV9JHtzaXplfSR7ZmlsbGVkID8gXCJGXCIgOiBcIlwifWA7XG4gIGlmIChpY29uQ2FjaGVbaWRdKSB7XG4gICAgcmV0dXJuIGljb25DYWNoZVtpZF07XG4gIH1cbiAgaWYgKCFyZXF1ZXN0Q2FjaGVbaWRdKSB7XG4gICAgcmVxdWVzdENhY2hlW2lkXSA9IGZldGNoKGdldEFzc2V0UGF0aChgLi9hc3NldHMvaWNvbi8ke2lkfS5qc29uYCkpXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihgXCIke2lkfVwiIGlzIG5vdCBhIHZhbGlkIGNhbGNpdGUtdWktaWNvbiBuYW1lYCk7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBwYXRoID0gYXdhaXQgcmVxdWVzdENhY2hlW2lkXTtcbiAgaWNvbkNhY2hlW2lkXSA9IHBhdGg7XG4gIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGljb24gbmFtZSB0byBtYXRjaCB0aGUgcGF0aCBkYXRhIG1vZHVsZSBleHBvcnRzLlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKlxuICogQHBhcmFtIG5hbWUg4oCTIGFuIGljb24gbmFtZSB0aGF0IGNhbiBiZSBlaXRoZXIga2ViYWIgb3IgY2FtZWwtY2FzZWRcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUljb25OYW1lKG5hbWUpIHtcbiAgY29uc3QgbnVtYmVyTGVhZGluZ05hbWUgPSAhaXNOYU4oTnVtYmVyKG5hbWUuY2hhckF0KDApKSk7XG4gIGNvbnN0IHBhcnRzID0gbmFtZS5zcGxpdChcIi1cIik7XG4gIGNvbnN0IGtlYmFiQ2FzZWQgPSBwYXJ0cy5sZW5ndGggPiAwO1xuICBpZiAoa2ViYWJDYXNlZCkge1xuICAgIGNvbnN0IGZpcnN0Tm9uRGlnaXRJblBhcnRQYXR0ZXJuID0gL1thLXpdL2k7XG4gICAgbmFtZSA9IHBhcnRzXG4gICAgICAubWFwKChwYXJ0LCBwYXJ0SW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBwYXJ0LnJlcGxhY2UoZmlyc3ROb25EaWdpdEluUGFydFBhdHRlcm4sIGZ1bmN0aW9uIHJlcGxhY2VyKG1hdGNoLCBvZmZzZXQpIHtcbiAgICAgICAgY29uc3QgaXNGaXJzdENoYXJJbk5hbWUgPSBwYXJ0SW5kZXggPT09IDAgJiYgb2Zmc2V0ID09PSAwO1xuICAgICAgICBpZiAoaXNGaXJzdENoYXJJbk5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KTtcbiAgICB9KVxuICAgICAgLmpvaW4oXCJcIik7XG4gIH1cbiAgcmV0dXJuIG51bWJlckxlYWRpbmdOYW1lID8gYGkke25hbWV9YCA6IG5hbWU7XG59XG5cbmNvbnN0IGljb25Dc3MgPSBcIjpob3N0e2Rpc3BsYXk6aW5saW5lLWZsZXg7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1pY29uLWNvbG9yKX06aG9zdChbc2NhbGU9c10pe2lubGluZS1zaXplOjE2cHg7YmxvY2stc2l6ZToxNnB4O21pbi1pbmxpbmUtc2l6ZToxNnB4O21pbi1ibG9jay1zaXplOjE2cHh9Omhvc3QoW3NjYWxlPW1dKXtpbmxpbmUtc2l6ZToyNHB4O2Jsb2NrLXNpemU6MjRweDttaW4taW5saW5lLXNpemU6MjRweDttaW4tYmxvY2stc2l6ZToyNHB4fTpob3N0KFtzY2FsZT1sXSl7aW5saW5lLXNpemU6MzJweDtibG9jay1zaXplOjMycHg7bWluLWlubGluZS1zaXplOjMycHg7bWluLWJsb2NrLXNpemU6MzJweH0uZmxpcC1ydGx7dHJhbnNmb3JtOnNjYWxlWCgtMSl9LnN2Z3tkaXNwbGF5OmJsb2NrfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBJY29uID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmljb24gPSBudWxsO1xuICAgIHRoaXMuZmxpcFJ0bCA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnRleHRMYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBhdGhEYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMud2FpdFVudGlsVmlzaWJsZSgoKSA9PiB7XG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgdGhpcy5sb2FkSWNvblBhdGhEYXRhKCk7XG4gICAgfSk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBudWxsO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMubG9hZEljb25QYXRoRGF0YSgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVsLCBmbGlwUnRsLCBwYXRoRGF0YSwgc2NhbGUsIHRleHRMYWJlbCB9ID0gdGhpcztcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKGVsKTtcbiAgICBjb25zdCBzaXplID0gc2NhbGVUb1B4W3NjYWxlXTtcbiAgICBjb25zdCBzZW1hbnRpYyA9ICEhdGV4dExhYmVsO1xuICAgIGNvbnN0IHBhdGhzID0gW10uY29uY2F0KHBhdGhEYXRhIHx8IFwiXCIpO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1oaWRkZW5cIjogdG9BcmlhQm9vbGVhbighc2VtYW50aWMpLCBcImFyaWEtbGFiZWxcIjogc2VtYW50aWMgPyB0ZXh0TGFiZWwgOiBudWxsLCByb2xlOiBzZW1hbnRpYyA/IFwiaW1nXCIgOiBudWxsIH0sIGgoXCJzdmdcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmZsaXBSdGxdOiBkaXIgPT09IFwicnRsXCIgJiYgZmxpcFJ0bCxcbiAgICAgICAgc3ZnOiB0cnVlLFxuICAgICAgfSwgZmlsbDogXCJjdXJyZW50Q29sb3JcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgdmlld0JveDogYDAgMCAke3NpemV9ICR7c2l6ZX1gLCB3aWR0aDogXCIxMDAlXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSwgcGF0aHMubWFwKChwYXRoKSA9PiB0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIiA/IChoKFwicGF0aFwiLCB7IGQ6IHBhdGggfSkpIDogKGgoXCJwYXRoXCIsIHsgZDogcGF0aC5kLCBvcGFjaXR5OiBcIm9wYWNpdHlcIiBpbiBwYXRoID8gcGF0aC5vcGFjaXR5IDogMSB9KSkpKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFzeW5jIGxvYWRJY29uUGF0aERhdGEoKSB7XG4gICAgY29uc3QgeyBpY29uLCBzY2FsZSwgdmlzaWJsZSB9ID0gdGhpcztcbiAgICBpZiAoIUJ1aWxkLmlzQnJvd3NlciB8fCAhaWNvbiB8fCAhdmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXRoRGF0YSA9IGF3YWl0IGZldGNoSWNvbih7IGljb24sIHNjYWxlIH0pO1xuICAgIC8vIFdoaWxlIHRoZSBmZXRjaEljb24gbWV0aG9kIGlzIGF3YWl0aW5nIHJlc3BvbnNlLCB0aGUgaWNvbiByZXF1ZXN0ZWQgY2FuIGNoYW5nZS4gVGhpcyBjaGVjayBpcyB0byB2ZXJpZnkgdGhlIHJlc3BvbnNlIHJlY2VpdmVkIGJlbG9uZ3MgdG8gdGhlIGN1cnJlbnQgaWNvbi5cbiAgICBpZiAoaWNvbiAhPT0gdGhpcy5pY29uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGF0aERhdGEgPSBwYXRoRGF0YTtcbiAgfVxuICB3YWl0VW50aWxWaXNpYmxlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwiaW50ZXJzZWN0aW9uXCIsIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIHsgcm9vdE1hcmdpbjogXCI1MHB4XCIgfSk7XG4gICAgaWYgKCF0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbCk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImljb25cIjogW1wibG9hZEljb25QYXRoRGF0YVwiXSxcbiAgICBcInNjYWxlXCI6IFtcImxvYWRJY29uUGF0aERhdGFcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gaWNvbkNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1pY29uXCIsIHtcbiAgICBcImljb25cIjogWzUxM10sXG4gICAgXCJmbGlwUnRsXCI6IFs1MTYsIFwiZmxpcC1ydGxcIl0sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcInRleHRMYWJlbFwiOiBbMSwgXCJ0ZXh0LWxhYmVsXCJdLFxuICAgIFwicGF0aERhdGFcIjogWzMyXSxcbiAgICBcInZpc2libGVcIjogWzMyXVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWljb25cIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIEljb24pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IEljb24gYXMgSSwgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBCdWlsZCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcblxuZnVuY3Rpb24gZ2V0VXNlckFnZW50RGF0YSgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnREYXRhO1xufVxuZnVuY3Rpb24gZ2V0VXNlckFnZW50U3RyaW5nKCkge1xuICBpZiAoIUJ1aWxkLmlzQnJvd3Nlcikge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIGNvbnN0IHVhRGF0YSA9IGdldFVzZXJBZ2VudERhdGEoKTtcbiAgcmV0dXJuIHVhRGF0YT8uYnJhbmRzXG4gICAgPyB1YURhdGEuYnJhbmRzLm1hcCgoeyBicmFuZCwgdmVyc2lvbiB9KSA9PiBgJHticmFuZH0vJHt2ZXJzaW9ufWApLmpvaW4oXCIgXCIpXG4gICAgOiBuYXZpZ2F0b3IudXNlckFnZW50O1xufVxuXG4vLyDimqDvuI8gYnJvd3Nlci1zbmlmZmluZyBpcyBub3QgYSBiZXN0IHByYWN0aWNlIGFuZCBzaG91bGQgYmUgYXZvaWRlZCDimqDvuI9cbmNvbnN0IGlzRmlyZWZveCA9IC9maXJlZm94L2kudGVzdChnZXRVc2VyQWdlbnRTdHJpbmcoKSk7XG5jb25zdCBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudCA9IGlzRmlyZWZveFxuICA/IG5ldyBXZWFrTWFwKClcbiAgOiBudWxsO1xuZnVuY3Rpb24gaW50ZXJjZXB0ZWRDbGljaygpIHtcbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdGhpcztcbiAgaWYgKCFkaXNhYmxlZCkge1xuICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljay5jYWxsKHRoaXMpO1xuICB9XG59XG5mdW5jdGlvbiBvblBvaW50ZXJEb3duKGV2ZW50KSB7XG4gIGNvbnN0IGludGVyYWN0aXZlRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgaWYgKGlzRmlyZWZveCAmJiAhaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGludGVyYWN0aXZlRWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gaW50ZXJhY3RpdmVFbGVtZW50O1xuICBpZiAoZGlzYWJsZWQpIHtcbiAgICAvLyBwcmV2ZW50IGNsaWNrIGZyb20gbW92aW5nIGZvY3VzIG9uIGhvc3RcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5jb25zdCBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzID0gW1wibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcImNsaWNrXCJdO1xuZnVuY3Rpb24gb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQoZXZlbnQpIHtcbiAgaWYgKGlzRmlyZWZveCAmJiAhaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGV2ZW50LnRhcmdldCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gZXZlbnQudGFyZ2V0O1xuICAvLyBwcmV2ZW50IGRpc2FsbG93ZWQgbW91c2UgZXZlbnRzIGZyb20gYmVpbmcgZW1pdHRlZCBvbiB0aGUgZGlzYWJsZWQgaG9zdCAocGVyIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvaHRtbC9pc3N1ZXMvNTg4NilcbiAgLy/imqAgd2UgZ2VuZXJhbGx5IGF2b2lkIHN0b3BwaW5nIHByb3BhZ2F0aW9uIG9mIGV2ZW50cywgYnV0IHRoaXMgaXMgbmVlZGVkIHRvIGFkaGVyZSB0byB0aGUgaW50ZW5kZWQgc3BlYyBjaGFuZ2VzIGFib3ZlIOKaoFxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5jb25zdCBjYXB0dXJlT25seU9wdGlvbnMgPSB7IGNhcHR1cmU6IHRydWUgfTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXBkYXRlcyB0aGUgaG9zdCBlbGVtZW50IHRvIHByZXZlbnQga2V5Ym9hcmQgaW50ZXJhY3Rpb24gb24gaXRzIHN1YnRyZWUgYW5kIHNldHMgdGhlIGFwcHJvcHJpYXRlIGFyaWEgYXR0cmlidXRlIGZvciBhY2Nlc3NpYmlsaXR5LlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRSZW5kZXJgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqICoqTm90ZXMqKlxuICpcbiAqIHRoaXMgdXRpbCBpcyBub3QgbmVlZGVkIGZvciBzaW1wbGUgY29tcG9uZW50cyB3aG9zZSByb290IGVsZW1lbnQgb3IgZWxlbWVudHMgYXJlIGFuIGludGVyYWN0aXZlIGNvbXBvbmVudCAoY3VzdG9tIGVsZW1lbnQgb3IgbmF0aXZlIGNvbnRyb2wpLiBGb3IgdGhvc2UgY2FzZXMsIHNldCB0aGUgYGRpc2FibGVkYCBwcm9wcyBvbiB0aGUgcm9vdCBjb21wb25lbnRzIGluc3RlYWQuXG4gKiB0ZWNobmljYWxseSwgdXNlcnMgY2FuIG92ZXJyaWRlIGB0YWJpbmRleGAgYW5kIHJlc3RvcmUga2V5Ym9hcmQgbmF2aWdhdGlvbiwgYnV0IHRoaXMgd2lsbCBiZSBjb25zaWRlcmVkIHVzZXIgZXJyb3JcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gaG9zdElzVGFiYmFibGUg4oCTIHdoZW4gc2V0IHRvIHRydWUgb3IgaXRzIHByZWRpY2F0ZSByZXR1cm5zIHRydWUsIHRoZSBob3N0IGlzIHRhYmJhYmxlIGFuZCB3aWxsIGJlIG1hbmFnZWQgYnkgdGhlIGhlbHBlci4gU2V0IHRvIFwibWFuYWdlZFwiIGZvciBjYXNlcyB3aGVyZSBhIGNvbXBvbmVudCdzIHBhcmVudCBkZXRlcm1pbmVzIHdoaWNoIGl0ZW0gaXMgdGFiYmFibGUgKGkuZS4sIHNldHMgYHRhYmluZGV4YCB0byBhbGxvdyB0YWJiaW5nKS5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlSG9zdEludGVyYWN0aW9uKGNvbXBvbmVudCwgaG9zdElzVGFiYmFibGUgPSBmYWxzZSkge1xuICBpZiAoY29tcG9uZW50LmRpc2FibGVkKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xuICAgIGlmIChjb21wb25lbnQuZWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgICBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpO1xuICBpZiAodHlwZW9mIGhvc3RJc1RhYmJhYmxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgaG9zdElzVGFiYmFibGUuY2FsbChjb21wb25lbnQpID8gXCIwXCIgOiBcIi0xXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSB0cnVlKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gZmFsc2UpIHtcbiAgICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gIH1cbiAgZWxzZSA7XG4gIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIpO1xufVxuZnVuY3Rpb24gYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmVsLmNsaWNrID0gaW50ZXJjZXB0ZWRDbGljaztcbiAgYWRkSW50ZXJhY3Rpb25MaXN0ZW5lcnMoaXNGaXJlZm94ID8gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIDogY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIGFkZEludGVyYWN0aW9uTGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgLy8gdGhpcyBwYXRoIGlzIG9ubHkgYXBwbGljYWJsZSB0byBGaXJlZm94XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG9uUG9pbnRlckRvd24sIGNhcHR1cmVPbmx5T3B0aW9ucyk7XG4gIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xufVxuZnVuY3Rpb24gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIHtcbiAgcmV0dXJuIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCkge1xuICBkZWxldGUgY29tcG9uZW50LmVsLmNsaWNrOyAvLyBmYWxsYmFjayBvbiBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2tcbiAgcmVtb3ZlSW50ZXJhY3Rpb25MaXN0ZW5lcnMoaXNGaXJlZm94ID8gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIDogY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUludGVyYWN0aW9uTGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgLy8gdGhpcyBwYXRoIGlzIG9ubHkgYXBwbGljYWJsZSB0byBGaXJlZm94XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG9uUG9pbnRlckRvd24sIGNhcHR1cmVPbmx5T3B0aW9ucyk7XG4gIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgaGVscHMgZGlzYWJsZSBjb21wb25lbnRzIGNvbnNpc3RlbnRseSBpbiBGaXJlZm94LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgIGFuZCBpcyBvbmx5IG5lZWRlZCBmb3IgRmlyZWZveCBhcyBpdCBkb2VzIG5vdCBjYWxsIGNhcHR1cmUgZXZlbnQgbGlzdGVuZXJzIGJlZm9yZSBub24tY2FwdHVyZSBvbmVzIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTczMTUwNCkuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0SW50ZXJhY3RpdmUoY29tcG9uZW50KSB7XG4gIGlmICghY29tcG9uZW50LmRpc2FibGVkIHx8ICFpc0ZpcmVmb3gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcGFyZW50ID0gY29tcG9uZW50LmVsLnBhcmVudEVsZW1lbnQgfHwgY29tcG9uZW50LmVsOyAvKiBhc3N1bWUgZWxlbWVudCBpcyBob3N0IGlmIGl0IGhhcyBubyBwYXJlbnQgd2hlbiBjb25uZWN0ZWQgKi9cbiAgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuc2V0KGNvbXBvbmVudC5lbCwgcGFyZW50KTtcbiAgYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgcmVzdG9yZXMgaW50ZXJhY3Rpdml0eSB0byBkaXNhYmxlZCBjb21wb25lbnRzIGNvbnNpc3RlbnRseSBpbiBGaXJlZm94LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2tgIGFuZCBpcyBvbmx5IG5lZWRlZCBmb3IgRmlyZWZveCBhcyBpdCBkb2VzIG5vdCBjYWxsIGNhcHR1cmUgZXZlbnQgbGlzdGVuZXJzIGJlZm9yZSBub24tY2FwdHVyZSBvbmVzIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTczMTUwNCkuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0SW50ZXJhY3RpdmUoY29tcG9uZW50KSB7XG4gIGlmICghaXNGaXJlZm94KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFsd2F5cyByZW1vdmUgb24gZGlzY29ubmVjdCBhcyByZW5kZXIgb3IgY29ubmVjdCB3aWxsIHJlc3RvcmUgaXRcbiAgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZGVsZXRlKGNvbXBvbmVudC5lbCk7XG4gIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpO1xufVxuXG5leHBvcnQgeyBjb25uZWN0SW50ZXJhY3RpdmUgYXMgYywgZGlzY29ubmVjdEludGVyYWN0aXZlIGFzIGQsIGdldFVzZXJBZ2VudFN0cmluZyBhcyBnLCB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gYXMgdSB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtZGVzaWduLXN5c3RlbS9ibG9iL21haW4vTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjExLjBcbiAqL1xuaW1wb3J0IHsgeSBhcyBpc0JlZm9yZSwgcSBhcyBxdWVyeUVsZW1lbnRSb290cywgYyBhcyBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkgfSBmcm9tICcuL2RvbS5qcyc7XG5cbi8qKlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seVxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5jb25zdCBsYWJlbENsaWNrRXZlbnQgPSBcImNhbGNpdGVJbnRlcm5hbExhYmVsQ2xpY2tcIjtcbmNvbnN0IGxhYmVsQ29ubmVjdGVkRXZlbnQgPSBcImNhbGNpdGVJbnRlcm5hbExhYmVsQ29ubmVjdGVkXCI7XG5jb25zdCBsYWJlbERpc2Nvbm5lY3RlZEV2ZW50ID0gXCJjYWxjaXRlSW50ZXJuYWxMYWJlbERpc2Nvbm5lY3RlZFwiO1xuY29uc3QgbGFiZWxUYWdOYW1lID0gXCJjYWxjaXRlLWxhYmVsXCI7XG5jb25zdCBsYWJlbFRvTGFiZWxhYmxlcyA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBvbkxhYmVsQ2xpY2tNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3Qgb25MYWJlbENvbm5lY3RlZE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBvbkxhYmVsRGlzY29ubmVjdGVkTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHVubGFiZWxlZENvbXBvbmVudHMgPSBuZXcgV2Vha1NldCgpO1xuY29uc3QgZmluZExhYmVsRm9yQ29tcG9uZW50ID0gKGNvbXBvbmVudEVsKSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IGNvbXBvbmVudEVsO1xuICBjb25zdCBmb3JMYWJlbCA9IGlkICYmIHF1ZXJ5RWxlbWVudFJvb3RzKGNvbXBvbmVudEVsLCB7IHNlbGVjdG9yOiBgJHtsYWJlbFRhZ05hbWV9W2Zvcj1cIiR7aWR9XCJdYCB9KTtcbiAgaWYgKGZvckxhYmVsKSB7XG4gICAgcmV0dXJuIGZvckxhYmVsO1xuICB9XG4gIGNvbnN0IHBhcmVudExhYmVsID0gY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5KGNvbXBvbmVudEVsLCBsYWJlbFRhZ05hbWUpO1xuICBpZiAoIXBhcmVudExhYmVsIHx8XG4gICAgLy8gbGFiZWxhYmxlIGNvbXBvbmVudHMgd2l0aGluIG90aGVyIGN1c3RvbSBlbGVtZW50cyBhcmUgbm90IGNvbnNpZGVyZWQgbGFiZWxhYmxlXG4gICAgaGFzQW5jZXN0b3JDdXN0b21FbGVtZW50cyhwYXJlbnRMYWJlbCwgY29tcG9uZW50RWwpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHBhcmVudExhYmVsO1xufTtcbmZ1bmN0aW9uIGhhc0FuY2VzdG9yQ3VzdG9tRWxlbWVudHMobGFiZWwsIGNvbXBvbmVudEVsKSB7XG4gIGxldCB0cmF2ZXJzZWRFbGVtZW50cztcbiAgY29uc3QgY3VzdG9tRWxlbWVudEFuY2VzdG9yQ2hlY2tFdmVudFR5cGUgPSBcImN1c3RvbS1lbGVtZW50LWFuY2VzdG9yLWNoZWNrXCI7XG4gIGNvbnN0IGxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG4gICAgdHJhdmVyc2VkRWxlbWVudHMgPSBjb21wb3NlZFBhdGguc2xpY2UoY29tcG9zZWRQYXRoLmluZGV4T2YoY29tcG9uZW50RWwpLCBjb21wb3NlZFBhdGguaW5kZXhPZihsYWJlbCkpO1xuICB9O1xuICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKGN1c3RvbUVsZW1lbnRBbmNlc3RvckNoZWNrRXZlbnRUeXBlLCBsaXN0ZW5lciwgeyBvbmNlOiB0cnVlIH0pO1xuICBjb21wb25lbnRFbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChjdXN0b21FbGVtZW50QW5jZXN0b3JDaGVja0V2ZW50VHlwZSwgeyBjb21wb3NlZDogdHJ1ZSwgYnViYmxlczogdHJ1ZSB9KSk7XG4gIGxhYmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoY3VzdG9tRWxlbWVudEFuY2VzdG9yQ2hlY2tFdmVudFR5cGUsIGxpc3RlbmVyKTtcbiAgY29uc3QgYW5jZXN0b3JDdXN0b21FbGVtZW50cyA9IHRyYXZlcnNlZEVsZW1lbnRzXG4gICAgLmZpbHRlcigoZWwpID0+IGVsICE9PSBjb21wb25lbnRFbCAmJiBlbCAhPT0gbGFiZWwpXG4gICAgLmZpbHRlcigoZWwpID0+IGVsLnRhZ05hbWU/LmluY2x1ZGVzKFwiLVwiKSk7XG4gIHJldHVybiBhbmNlc3RvckN1c3RvbUVsZW1lbnRzLmxlbmd0aCA+IDA7XG59XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgbGFiZWwgaW50ZXJhY3Rpb25zIG9uIGNvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdExhYmVsKGNvbXBvbmVudCkge1xuICBjb25zdCBsYWJlbEVsID0gZmluZExhYmVsRm9yQ29tcG9uZW50KGNvbXBvbmVudC5lbCk7XG4gIGlmICgob25MYWJlbENsaWNrTWFwLmhhcyhsYWJlbEVsKSAmJiBsYWJlbEVsID09PSBjb21wb25lbnQubGFiZWxFbCkgfHxcbiAgICAoIWxhYmVsRWwgJiYgdW5sYWJlbGVkQ29tcG9uZW50cy5oYXMoY29tcG9uZW50KSkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgYm91bmRPbkxhYmVsRGlzY29ubmVjdGVkID0gb25MYWJlbERpc2Nvbm5lY3RlZC5iaW5kKGNvbXBvbmVudCk7XG4gIGlmIChsYWJlbEVsKSB7XG4gICAgY29tcG9uZW50LmxhYmVsRWwgPSBsYWJlbEVsO1xuICAgIGNvbnN0IGxhYmVsYWJsZXMgPSBsYWJlbFRvTGFiZWxhYmxlcy5nZXQobGFiZWxFbCkgfHwgW107XG4gICAgbGFiZWxhYmxlcy5wdXNoKGNvbXBvbmVudCk7XG4gICAgbGFiZWxUb0xhYmVsYWJsZXMuc2V0KGxhYmVsRWwsIGxhYmVsYWJsZXMuc29ydChzb3J0QnlET01PcmRlcikpO1xuICAgIGlmICghb25MYWJlbENsaWNrTWFwLmhhcyhjb21wb25lbnQubGFiZWxFbCkpIHtcbiAgICAgIG9uTGFiZWxDbGlja01hcC5zZXQoY29tcG9uZW50LmxhYmVsRWwsIG9uTGFiZWxDbGljayk7XG4gICAgICBjb21wb25lbnQubGFiZWxFbC5hZGRFdmVudExpc3RlbmVyKGxhYmVsQ2xpY2tFdmVudCwgb25MYWJlbENsaWNrKTtcbiAgICB9XG4gICAgdW5sYWJlbGVkQ29tcG9uZW50cy5kZWxldGUoY29tcG9uZW50KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsQ29ubmVjdGVkRXZlbnQsIG9uTGFiZWxDb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICAgIG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAuc2V0KGNvbXBvbmVudCwgYm91bmRPbkxhYmVsRGlzY29ubmVjdGVkKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGxhYmVsRGlzY29ubmVjdGVkRXZlbnQsIGJvdW5kT25MYWJlbERpc2Nvbm5lY3RlZCk7XG4gIH1cbiAgZWxzZSBpZiAoIXVubGFiZWxlZENvbXBvbmVudHMuaGFzKGNvbXBvbmVudCkpIHtcbiAgICBib3VuZE9uTGFiZWxEaXNjb25uZWN0ZWQoKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsRGlzY29ubmVjdGVkRXZlbnQsIG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICB9XG59XG4vKipcbiAqIEhlbHBlciB0byB0ZWFyIGRvd24gbGFiZWwgaW50ZXJhY3Rpb25zIG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrIG9uIGxhYmVsYWJsZSBjb21wb25lbnRzLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdExhYmVsKGNvbXBvbmVudCkge1xuICB1bmxhYmVsZWRDb21wb25lbnRzLmRlbGV0ZShjb21wb25lbnQpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsQ29ubmVjdGVkRXZlbnQsIG9uTGFiZWxDb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsRGlzY29ubmVjdGVkRXZlbnQsIG9uTGFiZWxEaXNjb25uZWN0ZWRNYXAuZ2V0KGNvbXBvbmVudCkpO1xuICBvbkxhYmVsQ29ubmVjdGVkTWFwLmRlbGV0ZShjb21wb25lbnQpO1xuICBvbkxhYmVsRGlzY29ubmVjdGVkTWFwLmRlbGV0ZShjb21wb25lbnQpO1xuICBpZiAoIWNvbXBvbmVudC5sYWJlbEVsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGxhYmVsYWJsZXMgPSBsYWJlbFRvTGFiZWxhYmxlcy5nZXQoY29tcG9uZW50LmxhYmVsRWwpO1xuICBpZiAobGFiZWxhYmxlcy5sZW5ndGggPT09IDEpIHtcbiAgICBjb21wb25lbnQubGFiZWxFbC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsQ2xpY2tFdmVudCwgb25MYWJlbENsaWNrTWFwLmdldChjb21wb25lbnQubGFiZWxFbCkpO1xuICAgIG9uTGFiZWxDbGlja01hcC5kZWxldGUoY29tcG9uZW50LmxhYmVsRWwpO1xuICB9XG4gIGxhYmVsVG9MYWJlbGFibGVzLnNldChjb21wb25lbnQubGFiZWxFbCwgbGFiZWxhYmxlcy5maWx0ZXIoKGxhYmVsYWJsZSkgPT4gbGFiZWxhYmxlICE9PSBjb21wb25lbnQpLnNvcnQoc29ydEJ5RE9NT3JkZXIpKTtcbiAgY29tcG9uZW50LmxhYmVsRWwgPSBudWxsO1xufVxuZnVuY3Rpb24gc29ydEJ5RE9NT3JkZXIoYSwgYikge1xuICByZXR1cm4gaXNCZWZvcmUoYS5lbCwgYi5lbCkgPyAtMSA6IDE7XG59XG4vKipcbiAqIEhlbHBlciB0byBnZXQgdGhlIGxhYmVsIHRleHQgZnJvbSBhIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGdldExhYmVsVGV4dChjb21wb25lbnQpIHtcbiAgcmV0dXJuIGNvbXBvbmVudC5sYWJlbCB8fCBjb21wb25lbnQubGFiZWxFbD8udGV4dENvbnRlbnQ/LnRyaW0oKSB8fCBcIlwiO1xufVxuZnVuY3Rpb24gb25MYWJlbENsaWNrKGV2ZW50KSB7XG4gIGNvbnN0IGxhYmVsQ2xpY2tUYXJnZXQgPSBldmVudC5kZXRhaWwuc291cmNlRXZlbnQudGFyZ2V0O1xuICBjb25zdCBsYWJlbGFibGVzID0gbGFiZWxUb0xhYmVsYWJsZXMuZ2V0KHRoaXMpO1xuICBjb25zdCBjbGlja2VkTGFiZWxhYmxlID0gbGFiZWxhYmxlcy5maW5kKChsYWJlbGFibGUpID0+IGxhYmVsYWJsZS5lbCA9PT0gbGFiZWxDbGlja1RhcmdldCk7XG4gIGNvbnN0IGxhYmVsYWJsZUNoaWxkQ2xpY2tlZCA9IGxhYmVsYWJsZXMuaW5jbHVkZXMoY2xpY2tlZExhYmVsYWJsZSk7XG4gIGlmIChsYWJlbGFibGVDaGlsZENsaWNrZWQpIHtcbiAgICAvLyBubyBuZWVkIHRvIGZvcndhcmQgY2xpY2sgYXMgbGFiZWxhYmxlIHdpbGwgcmVjZWl2ZSBmb2N1c1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBmaXJzdExhYmVsYWJsZSA9IGxhYmVsYWJsZXNbMF07XG4gIGlmIChmaXJzdExhYmVsYWJsZS5kaXNhYmxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBmaXJzdExhYmVsYWJsZS5vbkxhYmVsQ2xpY2soZXZlbnQpO1xufVxuZnVuY3Rpb24gb25MYWJlbENvbm5lY3RlZCgpIHtcbiAgaWYgKHVubGFiZWxlZENvbXBvbmVudHMuaGFzKHRoaXMpKSB7XG4gICAgY29ubmVjdExhYmVsKHRoaXMpO1xuICB9XG59XG5mdW5jdGlvbiBvbkxhYmVsRGlzY29ubmVjdGVkKCkge1xuICB1bmxhYmVsZWRDb21wb25lbnRzLmFkZCh0aGlzKTtcbiAgY29uc3QgYm91bmRPbkxhYmVsQ29ubmVjdGVkID0gb25MYWJlbENvbm5lY3RlZE1hcC5nZXQodGhpcykgfHwgb25MYWJlbENvbm5lY3RlZC5iaW5kKHRoaXMpO1xuICBvbkxhYmVsQ29ubmVjdGVkTWFwLnNldCh0aGlzLCBib3VuZE9uTGFiZWxDb25uZWN0ZWQpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGxhYmVsQ29ubmVjdGVkRXZlbnQsIGJvdW5kT25MYWJlbENvbm5lY3RlZCk7XG59XG5cbmV4cG9ydCB7IGxhYmVsRGlzY29ubmVjdGVkRXZlbnQgYXMgYSwgY29ubmVjdExhYmVsIGFzIGMsIGRpc2Nvbm5lY3RMYWJlbCBhcyBkLCBnZXRMYWJlbFRleHQgYXMgZywgbGFiZWxDb25uZWN0ZWRFdmVudCBhcyBsIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBoLCBIb3N0IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgZyBhcyBndWlkIH0gZnJvbSAnLi9ndWlkLmpzJztcblxuY29uc3QgbG9hZGVyQ3NzID0gXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO0BtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjB9fTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbi1pbmxpbmU6YXV0bztkaXNwbGF5Om5vbmU7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7b3BhY2l0eToxO21pbi1ibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1mb250LXNpemUpO3N0cm9rZTp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTtzdHJva2Utd2lkdGg6MztmaWxsOm5vbmU7dHJhbnNmb3JtOnNjYWxlKDEsIDEpO2FuaW1hdGlvbjpsb2FkZXItY29sb3Itc2hpZnQgY2FsYyh2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdykgLyB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikgKiAyIC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKSBhbHRlcm5hdGUtcmV2ZXJzZSBpbmZpbml0ZSBsaW5lYXI7cGFkZGluZy1ibG9jazp2YXIoLS1jYWxjaXRlLWxvYWRlci1wYWRkaW5nLCA0cmVtKX06aG9zdChbc2NhbGU9c10pey0tY2FsY2l0ZS1sb2FkZXItZm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTstLWNhbGNpdGUtbG9hZGVyLXNpemU6MnJlbTstLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lOjAuNzVyZW19Omhvc3QoW3NjYWxlPW1dKXstLWNhbGNpdGUtbG9hZGVyLWZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTstLWNhbGNpdGUtbG9hZGVyLXNpemU6NHJlbTstLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lOjFyZW19Omhvc3QoW3NjYWxlPWxdKXstLWNhbGNpdGUtbG9hZGVyLWZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0yKTstLWNhbGNpdGUtbG9hZGVyLXNpemU6NnJlbTstLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lOjEuNXJlbX06aG9zdChbbm8tcGFkZGluZ10pe3BhZGRpbmctYmxvY2s6MHB4fTpob3N0e2Rpc3BsYXk6ZmxleH0ubG9hZGVyX190ZXh0e2Rpc3BsYXk6YmxvY2s7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTttYXJnaW4tYmxvY2stc3RhcnQ6Y2FsYyh2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKSArIDEuNXJlbSl9LmxvYWRlcl9fcGVyY2VudGFnZXtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItZm9udC1zaXplKTtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKTtpbnNldC1pbmxpbmUtc3RhcnQ6NTAlO21hcmdpbi1pbmxpbmUtc3RhcnQ6Y2FsYyh2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKSAvIDIgKiAtMSk7bGluZS1oZWlnaHQ6MC4yNTt0cmFuc2Zvcm06c2NhbGUoMSwgMSl9LmxvYWRlcl9fc3Znc3twb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdzp2aXNpYmxlO29wYWNpdHk6MTtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplKTtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUpO2luc2V0LWlubGluZS1zdGFydDo1MCU7bWFyZ2luLWlubGluZS1zdGFydDpjYWxjKHZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUpIC8gMiAqIC0xKTthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSAvIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSAqIDYuNjYgLyB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpO2FuaW1hdGlvbi1uYW1lOmxvYWRlci1jbG9ja3dpc2V9LmxvYWRlcl9fc3Zne3Bvc2l0aW9uOmFic29sdXRlO2luc2V0LWJsb2NrLXN0YXJ0OjBweDt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjtvdmVyZmxvdzp2aXNpYmxlO2luc2V0LWlubGluZS1zdGFydDowO2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUpO2Jsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZSk7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcn1Ac3VwcG9ydHMgKGRpc3BsYXk6IGdyaWQpey5sb2FkZXJfX3N2Zy0tMXthbmltYXRpb24tbmFtZTpsb2FkZXItb2Zmc2V0LTF9LmxvYWRlcl9fc3ZnLS0ye2FuaW1hdGlvbi1uYW1lOmxvYWRlci1vZmZzZXQtMn0ubG9hZGVyX19zdmctLTN7YW5pbWF0aW9uLW5hbWU6bG9hZGVyLW9mZnNldC0zfX06aG9zdChbdHlwZT1kZXRlcm1pbmF0ZV0pe2FuaW1hdGlvbjpub25lO3N0cm9rZTp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKX06aG9zdChbdHlwZT1kZXRlcm1pbmF0ZV0pIC5sb2FkZXJfX3N2Z3N7YW5pbWF0aW9uOm5vbmV9Omhvc3QoW3R5cGU9ZGV0ZXJtaW5hdGVdKSAubG9hZGVyX19zdmctLTN7YW5pbWF0aW9uOm5vbmU7c3Ryb2tlOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO3N0cm9rZS1kYXNoYXJyYXk6MTUwLjc5NjMyO3RyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKTt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdCkgbGluZWFyfTpob3N0KFtpbmxpbmVdKXtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MHB4O2FuaW1hdGlvbjpub25lO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjI7cGFkZGluZy1ibG9jazowcHg7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSk7bWluLWJsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmUpO2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKTttYXJnaW4taW5saW5lLWVuZDpjYWxjKHZhcigtLWNhbGNpdGUtbG9hZGVyLXNpemUtaW5saW5lKSAqIDAuNSk7dmVydGljYWwtYWxpZ246Y2FsYyh2YXIoLS1jYWxjaXRlLWxvYWRlci1zaXplLWlubGluZSkgKiAtMSAqIDAuMil9Omhvc3QoW2lubGluZV0pIC5sb2FkZXJfX3N2Z3N7aW5zZXQtYmxvY2stc3RhcnQ6MHB4O21hcmdpbjowcHg7aW5zZXQtaW5saW5lLXN0YXJ0OjA7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmUpO2Jsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmUpfTpob3N0KFtpbmxpbmVdKSAubG9hZGVyX19zdmd7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmUpO2Jsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1sb2FkZXItc2l6ZS1pbmxpbmUpfTpob3N0KFtjb21wbGV0ZV0pe29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUoMC43NSwgMC43NSk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNpdGlvbjpvcGFjaXR5IHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGxpbmVhciAxMDAwbXMsIHRyYW5zZm9ybSB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSBsaW5lYXIgMTAwMG1zfTpob3N0KFtjb21wbGV0ZV0pIC5sb2FkZXJfX3N2Z3N7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZSgwLjc1LCAwLjc1KTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2l0aW9uOm9wYWNpdHkgY2FsYygxODBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSkgbGluZWFyIDgwMG1zLCB0cmFuc2Zvcm0gY2FsYygxODBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSkgbGluZWFyIDgwMG1zfTpob3N0KFtjb21wbGV0ZV0pIC5sb2FkZXJfX3BlcmNlbnRhZ2V7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7dHJhbnNmb3JtOnNjYWxlKDEuMDUsIDEuMDUpO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zaXRpb246Y29sb3IgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bSkgbGluZWFyLCB0cmFuc2Zvcm0gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bSkgbGluZWFyfS5sb2FkZXJfX3N2Zy0tMXtzdHJva2UtZGFzaGFycmF5OjI3LjkyNTI0NDQ0NDQgMTM5LjYyNjIyMjIyMjI7YW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpICogNC44IC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX1Aa2V5ZnJhbWVzIGxvYWRlci1vZmZzZXQtMXswJXtzdHJva2UtZGFzaGFycmF5OjI3LjkyNTI0NDQ0NDQgMjUxLjMyNzI7c3Ryb2tlLWRhc2hvZmZzZXQ6MH01MCV7c3Ryb2tlLWRhc2hhcnJheToxMzkuNjI2MjIyMjIyMiAxMzkuNjI2MjIyMjIyMjtzdHJva2UtZGFzaG9mZnNldDotODMuNzc1NzMzMzMzM30xMDAle3N0cm9rZS1kYXNoYXJyYXk6MjcuOTI1MjQ0NDQ0NCAyNTEuMzI3MjtzdHJva2UtZGFzaG9mZnNldDotMjc5LjI1MjQ0NDQ0NDR9fS5sb2FkZXJfX3N2Zy0tMntzdHJva2UtZGFzaGFycmF5OjU1Ljg1MDQ4ODg4ODkgMTM5LjYyNjIyMjIyMjI7YW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpICogNi40IC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX1Aa2V5ZnJhbWVzIGxvYWRlci1vZmZzZXQtMnswJXtzdHJva2UtZGFzaGFycmF5OjU1Ljg1MDQ4ODg4ODkgMjIzLjQwMTk1NTU1NTY7c3Ryb2tlLWRhc2hvZmZzZXQ6MH01MCV7c3Ryb2tlLWRhc2hhcnJheToxMzkuNjI2MjIyMjIyMiAxMzkuNjI2MjIyMjIyMjtzdHJva2UtZGFzaG9mZnNldDotOTcuNzM4MzU1NTU1Nn0xMDAle3N0cm9rZS1kYXNoYXJyYXk6NTUuODUwNDg4ODg4OSAyMjMuNDAxOTU1NTU1NjtzdHJva2UtZGFzaG9mZnNldDotMjc5LjI1MjQ0NDQ0NDR9fS5sb2FkZXJfX3N2Zy0tM3tzdHJva2UtZGFzaGFycmF5OjEzLjk2MjYyMjIyMjIgMTM5LjYyNjIyMjIyMjI7YW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIC8gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpICogNy43MzQgLyB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfUBrZXlmcmFtZXMgbG9hZGVyLW9mZnNldC0zezAle3N0cm9rZS1kYXNoYXJyYXk6MTMuOTYyNjIyMjIyMiAyNjUuMjg5ODIyMjIyMjtzdHJva2UtZGFzaG9mZnNldDowfTUwJXtzdHJva2UtZGFzaGFycmF5OjEzOS42MjYyMjIyMjIyIDEzOS42MjYyMjIyMjIyO3N0cm9rZS1kYXNob2Zmc2V0Oi03Ni43OTQ0MjIyMjIyfTEwMCV7c3Ryb2tlLWRhc2hhcnJheToxMy45NjI2MjIyMjIyIDI2NS4yODk4MjIyMjIyO3N0cm9rZS1kYXNob2Zmc2V0Oi0yNzkuMjUyNDQ0NDQ0NH19QGtleWZyYW1lcyBsb2FkZXItY29sb3Itc2hpZnR7MCV7c3Ryb2tlOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTMzJXtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1icmFuZC1wcmVzcyl9NjYle3N0cm9rZTp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kLWhvdmVyKX0xMDAle3N0cm9rZTp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX19QGtleWZyYW1lcyBsb2FkZXItY2xvY2t3aXNlezEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgTG9hZGVyID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmlubGluZSA9IGZhbHNlO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMudHlwZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZhbHVlID0gMDtcbiAgICB0aGlzLnRleHQgPSBcIlwiO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVsLCBpbmxpbmUsIGxhYmVsLCBzY2FsZSwgdGV4dCwgdHlwZSwgdmFsdWUgfSA9IHRoaXM7XG4gICAgY29uc3QgaWQgPSBlbC5pZCB8fCBndWlkKCk7XG4gICAgY29uc3QgcmFkaXVzUmF0aW8gPSAwLjQ1O1xuICAgIGNvbnN0IHNpemUgPSBpbmxpbmUgPyB0aGlzLmdldElubGluZVNpemUoc2NhbGUpIDogdGhpcy5nZXRTaXplKHNjYWxlKTtcbiAgICBjb25zdCByYWRpdXMgPSBzaXplICogcmFkaXVzUmF0aW87XG4gICAgY29uc3Qgdmlld2JveCA9IGAwIDAgJHtzaXplfSAke3NpemV9YDtcbiAgICBjb25zdCBpc0RldGVybWluYXRlID0gdHlwZSA9PT0gXCJkZXRlcm1pbmF0ZVwiO1xuICAgIGNvbnN0IGNpcmN1bWZlcmVuY2UgPSAyICogcmFkaXVzICogTWF0aC5QSTtcbiAgICBjb25zdCBwcm9ncmVzcyA9ICh2YWx1ZSAvIDEwMCkgKiBjaXJjdW1mZXJlbmNlO1xuICAgIGNvbnN0IHJlbWFpbmluZyA9IGNpcmN1bWZlcmVuY2UgLSBwcm9ncmVzcztcbiAgICBjb25zdCB2YWx1ZU5vdyA9IE1hdGguZmxvb3IodmFsdWUpO1xuICAgIGNvbnN0IGhvc3RBdHRyaWJ1dGVzID0ge1xuICAgICAgXCJhcmlhLXZhbHVlbm93XCI6IHZhbHVlTm93LFxuICAgICAgXCJhcmlhLXZhbHVlbWluXCI6IDAsXG4gICAgICBcImFyaWEtdmFsdWVtYXhcIjogMTAwLFxuICAgICAgY29tcGxldGU6IHZhbHVlTm93ID09PSAxMDAsXG4gICAgfTtcbiAgICBjb25zdCBzdmdBdHRyaWJ1dGVzID0geyByOiByYWRpdXMsIGN4OiBzaXplIC8gMiwgY3k6IHNpemUgLyAyIH07XG4gICAgY29uc3QgZGV0ZXJtaW5hdGVTdHlsZSA9IHsgXCJzdHJva2UtZGFzaGFycmF5XCI6IGAke3Byb2dyZXNzfSAke3JlbWFpbmluZ31gIH07XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWxhYmVsXCI6IGxhYmVsLCBpZDogaWQsIHJvbGU6IFwicHJvZ3Jlc3NiYXJcIiwgLi4uKGlzRGV0ZXJtaW5hdGUgPyBob3N0QXR0cmlidXRlcyA6IHt9KSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwibG9hZGVyX19zdmdzXCIgfSwgaChcInN2Z1wiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBcImxvYWRlcl9fc3ZnIGxvYWRlcl9fc3ZnLS0xXCIsIHZpZXdCb3g6IHZpZXdib3ggfSwgaChcImNpcmNsZVwiLCB7IC4uLnN2Z0F0dHJpYnV0ZXMgfSkpLCBoKFwic3ZnXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IFwibG9hZGVyX19zdmcgbG9hZGVyX19zdmctLTJcIiwgdmlld0JveDogdmlld2JveCB9LCBoKFwiY2lyY2xlXCIsIHsgLi4uc3ZnQXR0cmlidXRlcyB9KSksIGgoXCJzdmdcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogXCJsb2FkZXJfX3N2ZyBsb2FkZXJfX3N2Zy0tM1wiLCB2aWV3Qm94OiB2aWV3Ym94LCAuLi4oaXNEZXRlcm1pbmF0ZSA/IHsgc3R5bGU6IGRldGVybWluYXRlU3R5bGUgfSA6IHt9KSB9LCBoKFwiY2lyY2xlXCIsIHsgLi4uc3ZnQXR0cmlidXRlcyB9KSkpLCB0ZXh0ICYmIGgoXCJkaXZcIiwgeyBjbGFzczogXCJsb2FkZXJfX3RleHRcIiB9LCB0ZXh0KSwgaXNEZXRlcm1pbmF0ZSAmJiBoKFwiZGl2XCIsIHsgY2xhc3M6IFwibG9hZGVyX19wZXJjZW50YWdlXCIgfSwgdmFsdWUpKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgcHJvcGVyIHNpemVzIGJhc2VkIG9uIHRoZSBzY2FsZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0gc2NhbGVcbiAgICovXG4gIGdldFNpemUoc2NhbGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgczogMzIsXG4gICAgICBtOiA1NixcbiAgICAgIGw6IDgwLFxuICAgIH1bc2NhbGVdO1xuICB9XG4gIGdldElubGluZVNpemUoc2NhbGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgczogMTIsXG4gICAgICBtOiAxNixcbiAgICAgIGw6IDIwLFxuICAgIH1bc2NhbGVdO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIGxvYWRlckNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1sb2FkZXJcIiwge1xuICAgIFwiaW5saW5lXCI6IFs1MTZdLFxuICAgIFwibGFiZWxcIjogWzFdLFxuICAgIFwic2NhbGVcIjogWzUxM10sXG4gICAgXCJ0eXBlXCI6IFs1MTNdLFxuICAgIFwidmFsdWVcIjogWzJdLFxuICAgIFwidGV4dFwiOiBbMV1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS1sb2FkZXJcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtbG9hZGVyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgTG9hZGVyKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuZGVmaW5lQ3VzdG9tRWxlbWVudCgpO1xuXG5leHBvcnQgeyBMb2FkZXIgYXMgTCwgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBCdWlsZCwgZ2V0QXNzZXRQYXRoIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTdXBwb3J0ZWRMb2NhbGUgfSBmcm9tICcuL2xvY2FsZS5qcyc7XG5cbmNvbnN0IGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZSA9IHt9O1xuYXN5bmMgZnVuY3Rpb24gZ2V0TWVzc2FnZUJ1bmRsZShsYW5nLCBjb21wb25lbnQpIHtcbiAgY29uc3Qga2V5ID0gYCR7Y29tcG9uZW50fV8ke2xhbmd9YDtcbiAgaWYgKGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xuICB9XG4gIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldID0gZmV0Y2goZ2V0QXNzZXRQYXRoKGAuL2Fzc2V0cy8ke2NvbXBvbmVudH0vdDluL21lc3NhZ2VzXyR7bGFuZ30uanNvbmApKVxuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgfSlcbiAgICAuY2F0Y2goKCkgPT4gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpKTtcbiAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xufVxuZnVuY3Rpb24gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY291bGQgbm90IGZldGNoIGNvbXBvbmVudCBtZXNzYWdlIGJ1bmRsZVwiKTtcbn1cbmZ1bmN0aW9uIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5tZXNzYWdlcyA9IHtcbiAgICAuLi5jb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzLFxuICAgIC4uLmNvbXBvbmVudC5tZXNzYWdlT3ZlcnJpZGVzLFxuICB9O1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCB0aGUgbWVzc2FnZXMgdXNlZCBieSB0aGUgY29tcG9uZW50LiBJdCBzaG91bGQgYmUgYXdhaXRlZCBpbiB0aGUgYGNvbXBvbmVudFdpbGxMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldFVwTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgY29tcG9uZW50LmVmZmVjdGl2ZUxvY2FsZSk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGlmICghQnVpbGQuaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIGNvbnN0IHsgZWwgfSA9IGNvbXBvbmVudDtcbiAgY29uc3QgdGFnID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBjb21wb25lbnROYW1lID0gdGFnLnJlcGxhY2UoXCJjYWxjaXRlLVwiLCBcIlwiKTtcbiAgcmV0dXJuIGdldE1lc3NhZ2VCdW5kbGUoZ2V0U3VwcG9ydGVkTG9jYWxlKGxhbmcsIFwidDluXCIpLCBjb21wb25lbnROYW1lKTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IG11c3QgYmUgc2V0IHVwIGZvciB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZSBpdHMgZGVmYXVsdCBtZXNzYWdlIGJ1bmRsZSBpZiB0aGUgbG9jYWxlIGNoYW5nZXMuXG4gKlxuICogSXQgY2FuIGJlIHNldCB1cCBpbiAqKmVpdGhlcioqIG9mIHRoZSBmb2xsb3dpbmcgd2F5czpcbiAqXG4gKiAxLiBjYWxsZWQgZnJvbSBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBvbkxvY2FsZUNoYW5nZWAgbWV0aG9kIG9yXG4gKiAyLiBjYWxsZWQgZnJvbSBhIHdhdGNoZXIgY29uZmlndXJlZCB0byB3YXRjaCBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBlZmZlY3RpdmVMb2NhbGVgIHByb3BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gbGFuZ1xuICovXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpIHtcbiAgY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyA9IGF3YWl0IGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKTtcbiAgbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiAqKk5vdGUqKjogdGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBjb25uZWN0TG9jYWxpemVkYCBtZXRob2QuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0TWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5vbk1lc3NhZ2VzQ2hhbmdlID0gZGVmYXVsdE9uTWVzc2FnZXNDaGFuZ2U7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSB0ZWFycyBkb3duIGludGVybmFscyBmb3IgbWVzc2FnZXMgc3VwcG9ydC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICBtZXJnZU1lc3NhZ2VzKHRoaXMpO1xufVxuXG5leHBvcnQgeyBjb25uZWN0TWVzc2FnZXMgYXMgYywgZGlzY29ubmVjdE1lc3NhZ2VzIGFzIGQsIHNldFVwTWVzc2FnZXMgYXMgcywgdXBkYXRlTWVzc2FnZXMgYXMgdSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9