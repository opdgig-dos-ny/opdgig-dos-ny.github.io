"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-tree-item_js-node_module-8d61b6"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-tree-item.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-tree-item.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteTreeItem: () => (/* binding */ CalciteTreeItem),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _conditionalSlot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conditionalSlot.js */ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkbox.js */ "./node_modules/@esri/calcite-components/dist/components/checkbox.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */








const CSS = {
  actionsEnd: "actions-end",
  checkboxLabel: "checkbox-label",
  checkbox: "checkbox",
  chevron: "chevron",
  nodeContainer: "node-container",
  childrenContainer: "children-container",
  bulletPointIcon: "bullet-point",
  checkmarkIcon: "checkmark",
  itemExpanded: "item--expanded",
  iconStart: "icon-start",
  nodeAndActionsContainer: "node-actions-container",
};
const SLOTS = {
  actionsEnd: "actions-end",
  children: "children",
};
const ICONS = {
  bulletPoint: "bullet-point",
  checkmark: "check",
  chevronRight: "chevron-right",
  blank: "blank",
};

const treeItemCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;max-inline-size:100%;cursor:pointer;color:var(--calcite-ui-text-3)}.node-actions-container{display:flex}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .node-actions-container{min-block-size:1.5rem}:host([scale=s]) .node-actions-container .node-container .checkbox,:host([scale=s]) .node-actions-container .node-container .chevron,:host([scale=s]) .node-actions-container .node-container .checkmark,:host([scale=s]) .node-actions-container .node-container .bullet-point{margin-inline:0.25rem}:host([scale=s]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .node-actions-container{min-block-size:2rem}:host([scale=m]) .node-actions-container .node-container .checkbox,:host([scale=m]) .node-actions-container .node-container .chevron,:host([scale=m]) .node-actions-container .node-container .checkmark,:host([scale=m]) .node-actions-container .node-container .bullet-point{margin-inline:0.5rem}:host([scale=m]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .node-actions-container{min-block-size:2.75rem}:host([scale=l]) .node-actions-container .node-container .checkbox,:host([scale=l]) .node-actions-container .node-container .chevron,:host([scale=l]) .node-actions-container .node-container .checkmark,:host([scale=l]) .node-actions-container .node-container .bullet-point{margin-inline:0.75rem}:host([scale=l]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([lines]) .children-container:after{position:absolute;inset-block-start:0px;z-index:var(--calcite-app-z-index);inline-size:1px;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;block-size:96%;content:\"\";background-color:var(--calcite-ui-border-2)}:host(:not([lines])) .node-container:after{display:none}::slotted(*){min-inline-size:0px;max-inline-size:100%;overflow-wrap:break-word;color:inherit;text-decoration:none !important}::slotted(*):hover{text-decoration:none !important}::slotted(a){inline-size:100%;text-decoration-line:none}:host{outline:2px solid transparent;outline-offset:2px}:host .node-container{outline-color:transparent}:host:focus .node-container,:host:active .node-container{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host(:focus:not([disabled])) .node-container{outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.actions-end{display:flex;flex-direction:row;align-items:center;align-self:stretch}.checkbox{line-height:0}.checkbox-label{pointer-events:none;display:flex;align-items:center}.checkbox:focus{outline:2px solid transparent;outline-offset:2px}.children-container{position:relative;block-size:0px;transform-origin:top;overflow:hidden;opacity:0;margin-inline-start:1.25rem;transform:scaleY(0);transition:var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out}.item--expanded>.children-container{overflow:visible;opacity:1;transform:none;block-size:auto}.node-container{position:relative;display:flex;min-inline-size:0px;flex-grow:1;align-items:center}.node-container .checkmark,.node-container .bullet-point{opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;color:var(--calcite-ui-border-1)}.node-container:hover .checkmark,.node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark,:host([selected]) .node-container:hover .bullet-point,:host(:focus:not([disabled])) .node-container .checkmark,:host(:focus:not([disabled])) .node-container .bullet-point{opacity:1}:host([selected]) .node-container,:host([selected]) .node-container:hover{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selected]) .node-container .bullet-point,:host([selected]) .node-container .checkmark,:host([selected]) .node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark{opacity:1;color:var(--calcite-ui-brand)}:host([selection-mode=none]:not([has-children])):host([scale=s]) .node-container{padding-inline-start:0.5rem}:host([selection-mode=none]:not([has-children])):host([scale=m]) .node-container{padding-inline-start:1rem}:host([selection-mode=none]:not([has-children])):host([scale=l]) .node-container{padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=s]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.25rem}:host(:not([has-children])):host([scale=m]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=l]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.75rem}:host([has-children]) .node-container[data-selection-mode=ancestors] .checkbox{margin-inline-start:0}:host([has-children]) .node-container .bullet-point,:host([has-children]) .node-container .checkmark{display:none}.chevron{position:relative;align-self:center;color:var(--calcite-ui-text-3);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;flex:0 0 auto;transform:rotate(0deg)}.calcite--rtl .chevron{transform:rotate(180deg)}.item--expanded .node-container>.chevron{transform:rotate(90deg)}:host([selected]) .checkmark,:host([selected]) .bullet-point{color:var(--calcite-ui-brand)}:host([hidden]){display:none}[hidden]{display:none}";

const TreeItem = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalTreeItemSelect = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.createEvent)(this, "calciteInternalTreeItemSelect", 6);
    this.iconClickHandler = (event) => {
      event.stopPropagation();
      this.expanded = !this.expanded;
    };
    this.childrenClickHandler = (event) => event.stopPropagation();
    this.userChangedValue = false;
    this.updateParentIsExpanded = (el, expanded) => {
      const items = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.g)(el, SLOTS.children, {
        all: true,
        selector: "calcite-tree-item",
      });
      items.forEach((item) => (item.parentExpanded = expanded));
    };
    this.actionsEndSlotChangeHandler = (event) => {
      this.hasEndActions = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(event);
    };
    this.disabled = false;
    this.expanded = false;
    this.iconFlipRtl = undefined;
    this.iconStart = undefined;
    this.selected = false;
    this.parentExpanded = false;
    this.depth = -1;
    this.hasChildren = null;
    this.lines = undefined;
    this.scale = undefined;
    this.indeterminate = false;
    this.selectionMode = undefined;
    this.hasEndActions = false;
    this.updateAfterInitialRender = false;
  }
  expandedHandler(newValue) {
    this.updateParentIsExpanded(this.el, newValue);
  }
  handleSelectedChange(value) {
    if (this.selectionMode === "ancestors" && !this.userChangedValue) {
      if (value) {
        this.indeterminate = false;
      }
      this.calciteInternalTreeItemSelect.emit({
        modifyCurrentSelection: true,
        updateItem: false,
      });
    }
  }
  getSelectionMode() {
    this.isSelectionMultiLike =
      this.selectionMode === "multiple" || this.selectionMode === "multichildren";
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.parentTreeItem = this.el.parentElement?.closest("calcite-tree-item");
    if (this.parentTreeItem) {
      const { expanded } = this.parentTreeItem;
      this.updateParentIsExpanded(this.parentTreeItem, expanded);
    }
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
  }
  componentWillRender() {
    this.hasChildren = !!this.el.querySelector("calcite-tree");
    this.depth = 0;
    let parentTree = this.el.closest("calcite-tree");
    if (!parentTree) {
      return;
    }
    this.selectionMode = parentTree.selectionMode;
    this.scale = parentTree.scale || "m";
    this.lines = parentTree.lines;
    let nextParentTree;
    while (parentTree) {
      nextParentTree = parentTree.parentElement?.closest("calcite-tree");
      if (nextParentTree === parentTree) {
        break;
      }
      else {
        parentTree = nextParentTree;
        this.depth = this.depth + 1;
      }
    }
  }
  componentWillLoad() {
    requestAnimationFrame(() => (this.updateAfterInitialRender = true));
  }
  componentDidLoad() {
    this.updateAncestorTree();
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.u)(this, () => false // programmatically focusable
    );
  }
  render() {
    const rtl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(this.el) === "rtl";
    const showBulletPoint = this.selectionMode === "single" || this.selectionMode === "children";
    const showCheckmark = this.selectionMode === "multiple" || this.selectionMode === "multichildren";
    const showBlank = this.selectionMode === "none" && !this.hasChildren;
    const chevron = this.hasChildren ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("calcite-icon", { class: {
        [CSS.chevron]: true,
        [_dom_js__WEBPACK_IMPORTED_MODULE_0__.C.rtl]: rtl,
      }, "data-test-id": "icon", icon: ICONS.chevronRight, onClick: this.iconClickHandler, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_3__.g)(this.scale) })) : null;
    const defaultSlotNode = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("slot", { key: "default-slot" });
    const checkbox = this.selectionMode === "ancestors" ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("label", { class: CSS.checkboxLabel, key: "checkbox-label" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("calcite-checkbox", { checked: this.selected, class: CSS.checkbox, "data-test-id": "checkbox", indeterminate: this.hasChildren && this.indeterminate, scale: this.scale, tabIndex: -1 }), defaultSlotNode)) : null;
    const selectedIcon = showBulletPoint
      ? ICONS.bulletPoint
      : showCheckmark
        ? ICONS.checkmark
        : showBlank
          ? ICONS.blank
          : null;
    const itemIndicator = selectedIcon ? ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("calcite-icon", { class: {
        [CSS.bulletPointIcon]: selectedIcon === ICONS.bulletPoint,
        [CSS.checkmarkIcon]: selectedIcon === ICONS.checkmark,
        [_dom_js__WEBPACK_IMPORTED_MODULE_0__.C.rtl]: rtl,
      }, icon: selectedIcon, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_3__.g)(this.scale) })) : null;
    const hidden = !(this.parentExpanded || this.depth === 1);
    const isExpanded = this.updateAfterInitialRender && this.expanded;
    const { hasEndActions } = this;
    const slotNode = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("slot", { key: "actionsEndSlot", name: SLOTS.actionsEnd, onSlotchange: this.actionsEndSlotChangeHandler }));
    const iconStartEl = ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("calcite-icon", { class: CSS.iconStart, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_3__.g)(this.scale) }));
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.Host, { "aria-expanded": this.hasChildren ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(isExpanded) : undefined, "aria-hidden": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(hidden), "aria-selected": this.selected ? "true" : showCheckmark ? "false" : undefined, "calcite-hydrated-hidden": hidden, role: "treeitem" }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("div", { class: { [CSS.itemExpanded]: isExpanded } }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("div", { class: CSS.nodeAndActionsContainer }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("div", { class: {
        [CSS.nodeContainer]: true,
        [_dom_js__WEBPACK_IMPORTED_MODULE_0__.C.rtl]: rtl,
      }, "data-selection-mode": this.selectionMode,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.defaultSlotWrapper = el) }, chevron, itemIndicator, this.iconStart ? iconStartEl : null, checkbox ? checkbox : defaultSlotNode), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("div", { class: CSS.actionsEnd, hidden: !hasEndActions, ref: (el) => (this.actionSlotWrapper = el) }, slotNode)), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("div", { class: {
        [CSS.childrenContainer]: true,
        [_dom_js__WEBPACK_IMPORTED_MODULE_0__.C.rtl]: rtl,
      }, "data-test-id": "calcite-tree-children", onClick: this.childrenClickHandler, role: this.hasChildren ? "group" : undefined }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("slot", { name: SLOTS.children })))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onClick(event) {
    if (this.disabled || this.isActionEndEvent(event)) {
      return;
    }
    // Solve for if the item is clicked somewhere outside the slotted anchor.
    // Anchor is triggered anywhere you click
    const [link] = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.p)(this.el, "a");
    if (link && event.composedPath()[0].tagName.toLowerCase() !== "a") {
      const target = link.target === "" ? "_self" : link.target;
      window.open(link.href, target);
    }
    this.calciteInternalTreeItemSelect.emit({
      modifyCurrentSelection: this.selectionMode === "ancestors" || this.isSelectionMultiLike,
      updateItem: true,
    });
    this.userChangedValue = true;
  }
  keyDownHandler(event) {
    if (this.isActionEndEvent(event) || event.defaultPrevented) {
      return;
    }
    switch (event.key) {
      case " ":
        this.userChangedValue = true;
        this.calciteInternalTreeItemSelect.emit({
          modifyCurrentSelection: this.isSelectionMultiLike,
          updateItem: true,
        });
        event.preventDefault();
        break;
      case "Enter":
        // activates a node, i.e., performs its default action. For parent nodes, one possible default action is to open or close the node. In single-select trees where selection does not follow focus (see note below), the default action is typically to select the focused node.
        const link = Array.from(this.el.children).find((el) => el.matches("a"));
        this.userChangedValue = true;
        if (link) {
          link.click();
          this.selected = true;
        }
        else {
          this.calciteInternalTreeItemSelect.emit({
            modifyCurrentSelection: this.isSelectionMultiLike,
            updateItem: true,
          });
        }
        event.preventDefault();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  isActionEndEvent(event) {
    const composedPath = event.composedPath();
    return composedPath.includes(this.actionSlotWrapper);
  }
  /**
   * This is meant to be called in `componentDidLoad` in order to take advantage of the hierarchical component lifecycle
   * and help check for item selection as items are initialized
   *
   * @private
   */
  updateAncestorTree() {
    const parentItem = this.parentTreeItem;
    if (this.selectionMode !== "ancestors" || !parentItem) {
      return;
    }
    if (this.selected) {
      const parentTree = this.el.parentElement;
      const siblings = Array.from(parentTree?.children);
      const selectedSiblings = siblings.filter((child) => child.selected);
      if (siblings.length === selectedSiblings.length) {
        parentItem.selected = true;
        parentItem.indeterminate = false;
      }
      else if (selectedSiblings.length > 0) {
        parentItem.indeterminate = true;
      }
      const childItems = Array.from(this.el.querySelectorAll("calcite-tree-item:not([disabled])"));
      childItems.forEach((item) => {
        item.selected = true;
        item.indeterminate = false;
      });
    }
    else if (this.indeterminate) {
      const parentItem = this.parentTreeItem;
      parentItem.indeterminate = true;
    }
  }
  get el() { return this; }
  static get watchers() { return {
    "expanded": ["expandedHandler"],
    "selected": ["handleSelectedChange"],
    "selectionMode": ["getSelectionMode"]
  }; }
  static get style() { return treeItemCss; }
}, [1, "calcite-tree-item", {
    "disabled": [516],
    "expanded": [1540],
    "iconFlipRtl": [513, "icon-flip-rtl"],
    "iconStart": [513, "icon-start"],
    "selected": [1540],
    "parentExpanded": [4, "parent-expanded"],
    "depth": [1538],
    "hasChildren": [1540, "has-children"],
    "lines": [1540],
    "scale": [1537],
    "indeterminate": [516],
    "selectionMode": [1537, "selection-mode"],
    "hasEndActions": [32],
    "updateAfterInitialRender": [32]
  }, [[0, "click", "onClick"], [0, "keydown", "keyDownHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-tree-item", "calcite-checkbox", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-tree-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TreeItem);
      }
      break;
    case "calcite-checkbox":
      if (!customElements.get(tagName)) {
        (0,_checkbox_js__WEBPACK_IMPORTED_MODULE_4__.d)();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        (0,_icon_js__WEBPACK_IMPORTED_MODULE_5__.d)();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteTreeItem = TreeItem;
const defineCustomElement = defineCustomElement$1;




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

/***/ "./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/conditionalSlot.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ connectConditionalSlotComponent),
/* harmony export */   d: () => (/* binding */ disconnectConditionalSlotComponent)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



const observed = new Set();
let mutationObserver;
const observerOptions = { childList: true };
/**
 * Helper to set up a conditional slot component on connectedCallback.
 *
 * @param component
 * @deprecated Use `onSlotchange` event with `slotChangeHasAssignedElement` DOM utility instead.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 */
function connectConditionalSlotComponent(component) {
  if (!mutationObserver) {
    mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_0__.c)("mutation", processMutations);
  }
  mutationObserver.observe(component.el, observerOptions);
}
/**
 * Helper to tear down a conditional slot component on disconnectedCallback.
 *
 * @param component
 * @deprecated Use `onSlotchange` event with `slotChangeHasAssignedElement` DOM utility instead.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 */
function disconnectConditionalSlotComponent(component) {
  observed.delete(component.el);
  // we explicitly process queued mutations and disconnect and reconnect
  // the observer until MutationObserver gets an `unobserve` method
  // see https://github.com/whatwg/dom/issues/126
  processMutations(mutationObserver.takeRecords());
  mutationObserver.disconnect();
  for (const [element] of observed.entries()) {
    mutationObserver.observe(element, observerOptions);
  }
}
function processMutations(mutations) {
  mutations.forEach(({ target }) => {
    (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.forceUpdate)(target);
  });
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

/***/ "./node_modules/@esri/calcite-components/dist/components/key.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/key.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ isActivationKey),
/* harmony export */   n: () => (/* binding */ numberKeys)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
function isActivationKey(key) {
  return key === "Enter" || key === " ";
}
const numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/observers.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/observers.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createObserver)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */


/**
 * This utility ensures observers are created only for browser contexts.
 *
 * @param type - the type of observer to create
 * @param callback - the observer callback
 * @param options - the observer options
 */
function createObserver(type, callback, options) {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.Build.isBrowser) {
    return undefined;
  }
  const Observer = getObserver(type);
  return new Observer(callback, options);
}
function getObserver(type) {
  // based on https://github.com/whatwg/dom/issues/126#issuecomment-1049814948
  class ExtendedMutationObserver extends window.MutationObserver {
    constructor(callback) {
      super(callback);
      this.observedEntry = [];
      this.callback = callback;
    }
    observe(target, options) {
      this.observedEntry.push({ target, options });
      return super.observe(target, options);
    }
    unobserve(target) {
      const newObservedEntries = this.observedEntry.filter((observed) => observed.target !== target);
      this.observedEntry = [];
      this.callback(super.takeRecords(), this);
      this.disconnect();
      newObservedEntries.forEach((observed) => this.observe(observed.target, observed.options));
    }
  }
  return (function () {
    return (type === "intersection"
      ? window.IntersectionObserver
      : type === "mutation"
        ? ExtendedMutationObserver
        : window.ResizeObserver);
  })();
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMDFiYjczNjNkY2FkYjQ2YmNhOTMyMTgxZmI0MGZkZDUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRztBQUNvRDtBQUM5QztBQUNGO0FBQ2hFO0FBQ1E7QUFDSjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsZUFBZSx5QkFBeUIsaUJBQWlCLDJDQUEyQyxtREFBbUQsb0JBQW9CLE1BQU0sY0FBYyxxQkFBcUIsZUFBZSwrQkFBK0Isd0JBQXdCLGFBQWEsaUNBQWlDLDZCQUE2QixvQkFBb0IseUdBQXlHLFVBQVUsaUJBQWlCLHNDQUFzQyxpQkFBaUIseUNBQXlDLHNCQUFzQixnUkFBZ1Isc0JBQXNCLHFFQUFxRSxzQkFBc0IsaUJBQWlCLHNDQUFzQyxpQkFBaUIseUNBQXlDLG9CQUFvQixnUkFBZ1IscUJBQXFCLHFFQUFxRSxzQkFBc0IsaUJBQWlCLHFDQUFxQyxvQkFBb0IseUNBQXlDLHVCQUF1QixnUkFBZ1Isc0JBQXNCLHFFQUFxRSxzQkFBc0IseUNBQXlDLGtCQUFrQixzQkFBc0IsbUNBQW1DLGdCQUFnQiwrRkFBK0Ysd0RBQXdELDBCQUEwQiw2RkFBNkYsZUFBZSxhQUFhLDRDQUE0QywyQ0FBMkMsYUFBYSxhQUFhLG9CQUFvQixxQkFBcUIseUJBQXlCLGNBQWMsZ0NBQWdDLG1CQUFtQixnQ0FBZ0MsYUFBYSxpQkFBaUIsMEJBQTBCLE1BQU0sOEJBQThCLG1CQUFtQixzQkFBc0IsMEJBQTBCLHlEQUF5RCx5RUFBeUUscVBBQXFQLDhDQUE4Qyw4QkFBOEIsbUJBQW1CLHlFQUF5RSxxUEFBcVAsYUFBYSxhQUFhLG1CQUFtQixtQkFBbUIsbUJBQW1CLFVBQVUsY0FBYyxnQkFB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NUIsYUFBYTtBQUNiLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFK0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1TC9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8seUVBQUs7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlCQUFpQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS10cmVlLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY29uZGl0aW9uYWxTbG90LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9pY29uLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvY29tcG9uZW50cy9rZXkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jb21wb25lbnRzL29ic2VydmVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5pbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U2xvdHRlZCwgZSBhcyBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50LCBiIGFzIGdldEVsZW1lbnREaXIsIEMgYXMgQ1NTX1VUSUxJVFksIHQgYXMgdG9BcmlhQm9vbGVhbiwgcCBhcyBmaWx0ZXJEaXJlY3RDaGlsZHJlbiB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCwgZCBhcyBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IH0gZnJvbSAnLi9jb25kaXRpb25hbFNsb3QuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0SW50ZXJhY3RpdmUsIGQgYXMgZGlzY29ubmVjdEludGVyYWN0aXZlLCB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRJY29uU2NhbGUgfSBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZmluZUN1c3RvbUVsZW1lbnQkMyB9IGZyb20gJy4vY2hlY2tib3guanMnO1xuaW1wb3J0IHsgZCBhcyBkZWZpbmVDdXN0b21FbGVtZW50JDIgfSBmcm9tICcuL2ljb24uanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGFjdGlvbnNFbmQ6IFwiYWN0aW9ucy1lbmRcIixcbiAgY2hlY2tib3hMYWJlbDogXCJjaGVja2JveC1sYWJlbFwiLFxuICBjaGVja2JveDogXCJjaGVja2JveFwiLFxuICBjaGV2cm9uOiBcImNoZXZyb25cIixcbiAgbm9kZUNvbnRhaW5lcjogXCJub2RlLWNvbnRhaW5lclwiLFxuICBjaGlsZHJlbkNvbnRhaW5lcjogXCJjaGlsZHJlbi1jb250YWluZXJcIixcbiAgYnVsbGV0UG9pbnRJY29uOiBcImJ1bGxldC1wb2ludFwiLFxuICBjaGVja21hcmtJY29uOiBcImNoZWNrbWFya1wiLFxuICBpdGVtRXhwYW5kZWQ6IFwiaXRlbS0tZXhwYW5kZWRcIixcbiAgaWNvblN0YXJ0OiBcImljb24tc3RhcnRcIixcbiAgbm9kZUFuZEFjdGlvbnNDb250YWluZXI6IFwibm9kZS1hY3Rpb25zLWNvbnRhaW5lclwiLFxufTtcbmNvbnN0IFNMT1RTID0ge1xuICBhY3Rpb25zRW5kOiBcImFjdGlvbnMtZW5kXCIsXG4gIGNoaWxkcmVuOiBcImNoaWxkcmVuXCIsXG59O1xuY29uc3QgSUNPTlMgPSB7XG4gIGJ1bGxldFBvaW50OiBcImJ1bGxldC1wb2ludFwiLFxuICBjaGVja21hcms6IFwiY2hlY2tcIixcbiAgY2hldnJvblJpZ2h0OiBcImNoZXZyb24tcmlnaHRcIixcbiAgYmxhbms6IFwiYmxhbmtcIixcbn07XG5cbmNvbnN0IHRyZWVJdGVtQ3NzID0gXCI6aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmJsb2NrO21heC1pbmxpbmUtc2l6ZToxMDAlO2N1cnNvcjpwb2ludGVyO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX0ubm9kZS1hY3Rpb25zLWNvbnRhaW5lcntkaXNwbGF5OmZsZXh9Omhvc3QoW2NhbGNpdGUtaHlkcmF0ZWQtaGlkZGVuXSl7dmlzaWJpbGl0eTpoaWRkZW4gIWltcG9ydGFudDtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX06aG9zdChbc2NhbGU9c10pe2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9c10pIC5ub2RlLWFjdGlvbnMtY29udGFpbmVye21pbi1ibG9jay1zaXplOjEuNXJlbX06aG9zdChbc2NhbGU9c10pIC5ub2RlLWFjdGlvbnMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAuY2hlY2tib3gsOmhvc3QoW3NjYWxlPXNdKSAubm9kZS1hY3Rpb25zLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLmNoZXZyb24sOmhvc3QoW3NjYWxlPXNdKSAubm9kZS1hY3Rpb25zLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLmNoZWNrbWFyayw6aG9zdChbc2NhbGU9c10pIC5ub2RlLWFjdGlvbnMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAuYnVsbGV0LXBvaW50e21hcmdpbi1pbmxpbmU6MC4yNXJlbX06aG9zdChbc2NhbGU9c10pIC5ub2RlLWFjdGlvbnMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAuaWNvbi1zdGFydHttYXJnaW4taW5saW5lOjAuNzVyZW19Omhvc3QoW3NjYWxlPW1dKXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPW1dKSAubm9kZS1hY3Rpb25zLWNvbnRhaW5lcnttaW4tYmxvY2stc2l6ZToycmVtfTpob3N0KFtzY2FsZT1tXSkgLm5vZGUtYWN0aW9ucy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5jaGVja2JveCw6aG9zdChbc2NhbGU9bV0pIC5ub2RlLWFjdGlvbnMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAuY2hldnJvbiw6aG9zdChbc2NhbGU9bV0pIC5ub2RlLWFjdGlvbnMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAuY2hlY2ttYXJrLDpob3N0KFtzY2FsZT1tXSkgLm5vZGUtYWN0aW9ucy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5idWxsZXQtcG9pbnR7bWFyZ2luLWlubGluZTowLjVyZW19Omhvc3QoW3NjYWxlPW1dKSAubm9kZS1hY3Rpb25zLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLmljb24tc3RhcnR7bWFyZ2luLWlubGluZTowLjc1cmVtfTpob3N0KFtzY2FsZT1sXSl7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW19Omhvc3QoW3NjYWxlPWxdKSAubm9kZS1hY3Rpb25zLWNvbnRhaW5lcnttaW4tYmxvY2stc2l6ZToyLjc1cmVtfTpob3N0KFtzY2FsZT1sXSkgLm5vZGUtYWN0aW9ucy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5jaGVja2JveCw6aG9zdChbc2NhbGU9bF0pIC5ub2RlLWFjdGlvbnMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAuY2hldnJvbiw6aG9zdChbc2NhbGU9bF0pIC5ub2RlLWFjdGlvbnMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAuY2hlY2ttYXJrLDpob3N0KFtzY2FsZT1sXSkgLm5vZGUtYWN0aW9ucy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5idWxsZXQtcG9pbnR7bWFyZ2luLWlubGluZTowLjc1cmVtfTpob3N0KFtzY2FsZT1sXSkgLm5vZGUtYWN0aW9ucy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5pY29uLXN0YXJ0e21hcmdpbi1pbmxpbmU6MC43NXJlbX06aG9zdChbbGluZXNdKSAuY2hpbGRyZW4tY29udGFpbmVyOmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2luc2V0LWJsb2NrLXN0YXJ0OjBweDt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2lubGluZS1zaXplOjFweDt0cmFuc2l0aW9uLXByb3BlcnR5OmNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNpdGlvbi1kdXJhdGlvbjoxNTBtczt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwcztibG9jay1zaXplOjk2JTtjb250ZW50OlxcXCJcXFwiO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMil9Omhvc3QoOm5vdChbbGluZXNdKSkgLm5vZGUtY29udGFpbmVyOmFmdGVye2Rpc3BsYXk6bm9uZX06OnNsb3R0ZWQoKil7bWluLWlubGluZS1zaXplOjBweDttYXgtaW5saW5lLXNpemU6MTAwJTtvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7Y29sb3I6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246bm9uZSAhaW1wb3J0YW50fTo6c2xvdHRlZCgqKTpob3Zlcnt0ZXh0LWRlY29yYXRpb246bm9uZSAhaW1wb3J0YW50fTo6c2xvdHRlZChhKXtpbmxpbmUtc2l6ZToxMDAlO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmV9Omhvc3R7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4fTpob3N0IC5ub2RlLWNvbnRhaW5lcntvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fTpob3N0OmZvY3VzIC5ub2RlLWNvbnRhaW5lciw6aG9zdDphY3RpdmUgLm5vZGUtY29udGFpbmVye291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX06aG9zdCg6Zm9jdXM6bm90KFtkaXNhYmxlZF0pKSAubm9kZS1jb250YWluZXJ7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4O291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX0uYWN0aW9ucy1lbmR7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tc2VsZjpzdHJldGNofS5jaGVja2JveHtsaW5lLWhlaWdodDowfS5jaGVja2JveC1sYWJlbHtwb2ludGVyLWV2ZW50czpub25lO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXJ9LmNoZWNrYm94OmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweH0uY2hpbGRyZW4tY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO2Jsb2NrLXNpemU6MHB4O3RyYW5zZm9ybS1vcmlnaW46dG9wO292ZXJmbG93OmhpZGRlbjtvcGFjaXR5OjA7bWFyZ2luLWlubGluZS1zdGFydDoxLjI1cmVtO3RyYW5zZm9ybTpzY2FsZVkoMCk7dHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGN1YmljLWJlemllcigwLjIxNSwgMC40NCwgMC40MiwgMC44OCksIG9wYWNpdHkgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNDQsIDAuNDIsIDAuODgpLCBhbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dH0uaXRlbS0tZXhwYW5kZWQ+LmNoaWxkcmVuLWNvbnRhaW5lcntvdmVyZmxvdzp2aXNpYmxlO29wYWNpdHk6MTt0cmFuc2Zvcm06bm9uZTtibG9jay1zaXplOmF1dG99Lm5vZGUtY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDttaW4taW5saW5lLXNpemU6MHB4O2ZsZXgtZ3JvdzoxO2FsaWduLWl0ZW1zOmNlbnRlcn0ubm9kZS1jb250YWluZXIgLmNoZWNrbWFyaywubm9kZS1jb250YWluZXIgLmJ1bGxldC1wb2ludHtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSl9Lm5vZGUtY29udGFpbmVyOmhvdmVyIC5jaGVja21hcmssLm5vZGUtY29udGFpbmVyOmhvdmVyIC5idWxsZXQtcG9pbnQsOmhvc3QoW3NlbGVjdGVkXSkgLm5vZGUtY29udGFpbmVyOmhvdmVyIC5jaGVja21hcmssOmhvc3QoW3NlbGVjdGVkXSkgLm5vZGUtY29udGFpbmVyOmhvdmVyIC5idWxsZXQtcG9pbnQsOmhvc3QoOmZvY3VzOm5vdChbZGlzYWJsZWRdKSkgLm5vZGUtY29udGFpbmVyIC5jaGVja21hcmssOmhvc3QoOmZvY3VzOm5vdChbZGlzYWJsZWRdKSkgLm5vZGUtY29udGFpbmVyIC5idWxsZXQtcG9pbnR7b3BhY2l0eToxfTpob3N0KFtzZWxlY3RlZF0pIC5ub2RlLWNvbnRhaW5lciw6aG9zdChbc2VsZWN0ZWRdKSAubm9kZS1jb250YWluZXI6aG92ZXJ7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdChbc2VsZWN0ZWRdKSAubm9kZS1jb250YWluZXIgLmJ1bGxldC1wb2ludCw6aG9zdChbc2VsZWN0ZWRdKSAubm9kZS1jb250YWluZXIgLmNoZWNrbWFyayw6aG9zdChbc2VsZWN0ZWRdKSAubm9kZS1jb250YWluZXI6aG92ZXIgLmJ1bGxldC1wb2ludCw6aG9zdChbc2VsZWN0ZWRdKSAubm9kZS1jb250YWluZXI6aG92ZXIgLmNoZWNrbWFya3tvcGFjaXR5OjE7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoW3NlbGVjdGlvbi1tb2RlPW5vbmVdOm5vdChbaGFzLWNoaWxkcmVuXSkpOmhvc3QoW3NjYWxlPXNdKSAubm9kZS1jb250YWluZXJ7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MC41cmVtfTpob3N0KFtzZWxlY3Rpb24tbW9kZT1ub25lXTpub3QoW2hhcy1jaGlsZHJlbl0pKTpob3N0KFtzY2FsZT1tXSkgLm5vZGUtY29udGFpbmVye3BhZGRpbmctaW5saW5lLXN0YXJ0OjFyZW19Omhvc3QoW3NlbGVjdGlvbi1tb2RlPW5vbmVdOm5vdChbaGFzLWNoaWxkcmVuXSkpOmhvc3QoW3NjYWxlPWxdKSAubm9kZS1jb250YWluZXJ7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MS41cmVtfTpob3N0KDpub3QoW2hhcy1jaGlsZHJlbl0pKTpob3N0KFtzY2FsZT1zXSkgLm5vZGUtY29udGFpbmVyW2RhdGEtc2VsZWN0aW9uLW1vZGU9YW5jZXN0b3JzXSAuY2hlY2tib3h7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MS4yNXJlbX06aG9zdCg6bm90KFtoYXMtY2hpbGRyZW5dKSk6aG9zdChbc2NhbGU9bV0pIC5ub2RlLWNvbnRhaW5lcltkYXRhLXNlbGVjdGlvbi1tb2RlPWFuY2VzdG9yc10gLmNoZWNrYm94e3BhZGRpbmctaW5saW5lLXN0YXJ0OjEuNXJlbX06aG9zdCg6bm90KFtoYXMtY2hpbGRyZW5dKSk6aG9zdChbc2NhbGU9bF0pIC5ub2RlLWNvbnRhaW5lcltkYXRhLXNlbGVjdGlvbi1tb2RlPWFuY2VzdG9yc10gLmNoZWNrYm94e3BhZGRpbmctaW5saW5lLXN0YXJ0OjEuNzVyZW19Omhvc3QoW2hhcy1jaGlsZHJlbl0pIC5ub2RlLWNvbnRhaW5lcltkYXRhLXNlbGVjdGlvbi1tb2RlPWFuY2VzdG9yc10gLmNoZWNrYm94e21hcmdpbi1pbmxpbmUtc3RhcnQ6MH06aG9zdChbaGFzLWNoaWxkcmVuXSkgLm5vZGUtY29udGFpbmVyIC5idWxsZXQtcG9pbnQsOmhvc3QoW2hhcy1jaGlsZHJlbl0pIC5ub2RlLWNvbnRhaW5lciAuY2hlY2ttYXJre2Rpc3BsYXk6bm9uZX0uY2hldnJvbntwb3NpdGlvbjpyZWxhdGl2ZTthbGlnbi1zZWxmOmNlbnRlcjtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7ZmxleDowIDAgYXV0bzt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfS5jYWxjaXRlLS1ydGwgLmNoZXZyb257dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfS5pdGVtLS1leHBhbmRlZCAubm9kZS1jb250YWluZXI+LmNoZXZyb257dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9Omhvc3QoW3NlbGVjdGVkXSkgLmNoZWNrbWFyayw6aG9zdChbc2VsZWN0ZWRdKSAuYnVsbGV0LXBvaW50e2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBUcmVlSXRlbSA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLl9fYXR0YWNoU2hhZG93KCk7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUcmVlSXRlbVNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsVHJlZUl0ZW1TZWxlY3RcIiwgNik7XG4gICAgdGhpcy5pY29uQ2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcbiAgICB9O1xuICAgIHRoaXMuY2hpbGRyZW5DbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlUGFyZW50SXNFeHBhbmRlZCA9IChlbCwgZXhwYW5kZWQpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1zID0gZ2V0U2xvdHRlZChlbCwgU0xPVFMuY2hpbGRyZW4sIHtcbiAgICAgICAgYWxsOiB0cnVlLFxuICAgICAgICBzZWxlY3RvcjogXCJjYWxjaXRlLXRyZWUtaXRlbVwiLFxuICAgICAgfSk7XG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5wYXJlbnRFeHBhbmRlZCA9IGV4cGFuZGVkKSk7XG4gICAgfTtcbiAgICB0aGlzLmFjdGlvbnNFbmRTbG90Q2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNFbmRBY3Rpb25zID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaWNvbkZsaXBSdGwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pY29uU3RhcnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMucGFyZW50RXhwYW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlcHRoID0gLTE7XG4gICAgdGhpcy5oYXNDaGlsZHJlbiA9IG51bGw7XG4gICAgdGhpcy5saW5lcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNjYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0aW9uTW9kZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhhc0VuZEFjdGlvbnMgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUFmdGVySW5pdGlhbFJlbmRlciA9IGZhbHNlO1xuICB9XG4gIGV4cGFuZGVkSGFuZGxlcihuZXdWYWx1ZSkge1xuICAgIHRoaXMudXBkYXRlUGFyZW50SXNFeHBhbmRlZCh0aGlzLmVsLCBuZXdWYWx1ZSk7XG4gIH1cbiAgaGFuZGxlU2VsZWN0ZWRDaGFuZ2UodmFsdWUpIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcImFuY2VzdG9yc1wiICYmICF0aGlzLnVzZXJDaGFuZ2VkVmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVHJlZUl0ZW1TZWxlY3QuZW1pdCh7XG4gICAgICAgIG1vZGlmeUN1cnJlbnRTZWxlY3Rpb246IHRydWUsXG4gICAgICAgIHVwZGF0ZUl0ZW06IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGdldFNlbGVjdGlvbk1vZGUoKSB7XG4gICAgdGhpcy5pc1NlbGVjdGlvbk11bHRpTGlrZSA9XG4gICAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGlwbGVcIiB8fCB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGljaGlsZHJlblwiO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucGFyZW50VHJlZUl0ZW0gPSB0aGlzLmVsLnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoXCJjYWxjaXRlLXRyZWUtaXRlbVwiKTtcbiAgICBpZiAodGhpcy5wYXJlbnRUcmVlSXRlbSkge1xuICAgICAgY29uc3QgeyBleHBhbmRlZCB9ID0gdGhpcy5wYXJlbnRUcmVlSXRlbTtcbiAgICAgIHRoaXMudXBkYXRlUGFyZW50SXNFeHBhbmRlZCh0aGlzLnBhcmVudFRyZWVJdGVtLCBleHBhbmRlZCk7XG4gICAgfVxuICAgIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZW5kZXIoKSB7XG4gICAgdGhpcy5oYXNDaGlsZHJlbiA9ICEhdGhpcy5lbC5xdWVyeVNlbGVjdG9yKFwiY2FsY2l0ZS10cmVlXCIpO1xuICAgIHRoaXMuZGVwdGggPSAwO1xuICAgIGxldCBwYXJlbnRUcmVlID0gdGhpcy5lbC5jbG9zZXN0KFwiY2FsY2l0ZS10cmVlXCIpO1xuICAgIGlmICghcGFyZW50VHJlZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPSBwYXJlbnRUcmVlLnNlbGVjdGlvbk1vZGU7XG4gICAgdGhpcy5zY2FsZSA9IHBhcmVudFRyZWUuc2NhbGUgfHwgXCJtXCI7XG4gICAgdGhpcy5saW5lcyA9IHBhcmVudFRyZWUubGluZXM7XG4gICAgbGV0IG5leHRQYXJlbnRUcmVlO1xuICAgIHdoaWxlIChwYXJlbnRUcmVlKSB7XG4gICAgICBuZXh0UGFyZW50VHJlZSA9IHBhcmVudFRyZWUucGFyZW50RWxlbWVudD8uY2xvc2VzdChcImNhbGNpdGUtdHJlZVwiKTtcbiAgICAgIGlmIChuZXh0UGFyZW50VHJlZSA9PT0gcGFyZW50VHJlZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBwYXJlbnRUcmVlID0gbmV4dFBhcmVudFRyZWU7XG4gICAgICAgIHRoaXMuZGVwdGggPSB0aGlzLmRlcHRoICsgMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+ICh0aGlzLnVwZGF0ZUFmdGVySW5pdGlhbFJlbmRlciA9IHRydWUpKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHRoaXMudXBkYXRlQW5jZXN0b3JUcmVlKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzLCAoKSA9PiBmYWxzZSAvLyBwcm9ncmFtbWF0aWNhbGx5IGZvY3VzYWJsZVxuICAgICk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHJ0bCA9IGdldEVsZW1lbnREaXIodGhpcy5lbCkgPT09IFwicnRsXCI7XG4gICAgY29uc3Qgc2hvd0J1bGxldFBvaW50ID0gdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcInNpbmdsZVwiIHx8IHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJjaGlsZHJlblwiO1xuICAgIGNvbnN0IHNob3dDaGVja21hcmsgPSB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGlwbGVcIiB8fCB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGljaGlsZHJlblwiO1xuICAgIGNvbnN0IHNob3dCbGFuayA9IHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJub25lXCIgJiYgIXRoaXMuaGFzQ2hpbGRyZW47XG4gICAgY29uc3QgY2hldnJvbiA9IHRoaXMuaGFzQ2hpbGRyZW4gPyAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtDU1MuY2hldnJvbl06IHRydWUsXG4gICAgICAgIFtDU1NfVVRJTElUWS5ydGxdOiBydGwsXG4gICAgICB9LCBcImRhdGEtdGVzdC1pZFwiOiBcImljb25cIiwgaWNvbjogSUNPTlMuY2hldnJvblJpZ2h0LCBvbkNsaWNrOiB0aGlzLmljb25DbGlja0hhbmRsZXIsIHNjYWxlOiBnZXRJY29uU2NhbGUodGhpcy5zY2FsZSkgfSkpIDogbnVsbDtcbiAgICBjb25zdCBkZWZhdWx0U2xvdE5vZGUgPSBoKFwic2xvdFwiLCB7IGtleTogXCJkZWZhdWx0LXNsb3RcIiB9KTtcbiAgICBjb25zdCBjaGVja2JveCA9IHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJhbmNlc3RvcnNcIiA/IChoKFwibGFiZWxcIiwgeyBjbGFzczogQ1NTLmNoZWNrYm94TGFiZWwsIGtleTogXCJjaGVja2JveC1sYWJlbFwiIH0sIGgoXCJjYWxjaXRlLWNoZWNrYm94XCIsIHsgY2hlY2tlZDogdGhpcy5zZWxlY3RlZCwgY2xhc3M6IENTUy5jaGVja2JveCwgXCJkYXRhLXRlc3QtaWRcIjogXCJjaGVja2JveFwiLCBpbmRldGVybWluYXRlOiB0aGlzLmhhc0NoaWxkcmVuICYmIHRoaXMuaW5kZXRlcm1pbmF0ZSwgc2NhbGU6IHRoaXMuc2NhbGUsIHRhYkluZGV4OiAtMSB9KSwgZGVmYXVsdFNsb3ROb2RlKSkgOiBudWxsO1xuICAgIGNvbnN0IHNlbGVjdGVkSWNvbiA9IHNob3dCdWxsZXRQb2ludFxuICAgICAgPyBJQ09OUy5idWxsZXRQb2ludFxuICAgICAgOiBzaG93Q2hlY2ttYXJrXG4gICAgICAgID8gSUNPTlMuY2hlY2ttYXJrXG4gICAgICAgIDogc2hvd0JsYW5rXG4gICAgICAgICAgPyBJQ09OUy5ibGFua1xuICAgICAgICAgIDogbnVsbDtcbiAgICBjb25zdCBpdGVtSW5kaWNhdG9yID0gc2VsZWN0ZWRJY29uID8gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLmJ1bGxldFBvaW50SWNvbl06IHNlbGVjdGVkSWNvbiA9PT0gSUNPTlMuYnVsbGV0UG9pbnQsXG4gICAgICAgIFtDU1MuY2hlY2ttYXJrSWNvbl06IHNlbGVjdGVkSWNvbiA9PT0gSUNPTlMuY2hlY2ttYXJrLFxuICAgICAgICBbQ1NTX1VUSUxJVFkucnRsXTogcnRsLFxuICAgICAgfSwgaWNvbjogc2VsZWN0ZWRJY29uLCBzY2FsZTogZ2V0SWNvblNjYWxlKHRoaXMuc2NhbGUpIH0pKSA6IG51bGw7XG4gICAgY29uc3QgaGlkZGVuID0gISh0aGlzLnBhcmVudEV4cGFuZGVkIHx8IHRoaXMuZGVwdGggPT09IDEpO1xuICAgIGNvbnN0IGlzRXhwYW5kZWQgPSB0aGlzLnVwZGF0ZUFmdGVySW5pdGlhbFJlbmRlciAmJiB0aGlzLmV4cGFuZGVkO1xuICAgIGNvbnN0IHsgaGFzRW5kQWN0aW9ucyB9ID0gdGhpcztcbiAgICBjb25zdCBzbG90Tm9kZSA9IChoKFwic2xvdFwiLCB7IGtleTogXCJhY3Rpb25zRW5kU2xvdFwiLCBuYW1lOiBTTE9UUy5hY3Rpb25zRW5kLCBvblNsb3RjaGFuZ2U6IHRoaXMuYWN0aW9uc0VuZFNsb3RDaGFuZ2VIYW5kbGVyIH0pKTtcbiAgICBjb25zdCBpY29uU3RhcnRFbCA9IChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IENTUy5pY29uU3RhcnQsIGZsaXBSdGw6IHRoaXMuaWNvbkZsaXBSdGwgPT09IFwic3RhcnRcIiB8fCB0aGlzLmljb25GbGlwUnRsID09PSBcImJvdGhcIiwgaWNvbjogdGhpcy5pY29uU3RhcnQsIHNjYWxlOiBnZXRJY29uU2NhbGUodGhpcy5zY2FsZSkgfSkpO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1leHBhbmRlZFwiOiB0aGlzLmhhc0NoaWxkcmVuID8gdG9BcmlhQm9vbGVhbihpc0V4cGFuZGVkKSA6IHVuZGVmaW5lZCwgXCJhcmlhLWhpZGRlblwiOiB0b0FyaWFCb29sZWFuKGhpZGRlbiksIFwiYXJpYS1zZWxlY3RlZFwiOiB0aGlzLnNlbGVjdGVkID8gXCJ0cnVlXCIgOiBzaG93Q2hlY2ttYXJrID8gXCJmYWxzZVwiIDogdW5kZWZpbmVkLCBcImNhbGNpdGUtaHlkcmF0ZWQtaGlkZGVuXCI6IGhpZGRlbiwgcm9sZTogXCJ0cmVlaXRlbVwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTLml0ZW1FeHBhbmRlZF06IGlzRXhwYW5kZWQgfSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5ub2RlQW5kQWN0aW9uc0NvbnRhaW5lciB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5ub2RlQ29udGFpbmVyXTogdHJ1ZSxcbiAgICAgICAgW0NTU19VVElMSVRZLnJ0bF06IHJ0bCxcbiAgICAgIH0sIFwiZGF0YS1zZWxlY3Rpb24tbW9kZVwiOiB0aGlzLnNlbGVjdGlvbk1vZGUsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHMgLS0gcmVmIHNob3VsZCBiZSBsYXN0IHNvIG5vZGUgYXR0cnMvcHJvcHMgYXJlIGluIHN5bmMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vcHVsbC82NTMwKVxuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLmRlZmF1bHRTbG90V3JhcHBlciA9IGVsKSB9LCBjaGV2cm9uLCBpdGVtSW5kaWNhdG9yLCB0aGlzLmljb25TdGFydCA/IGljb25TdGFydEVsIDogbnVsbCwgY2hlY2tib3ggPyBjaGVja2JveCA6IGRlZmF1bHRTbG90Tm9kZSksIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmFjdGlvbnNFbmQsIGhpZGRlbjogIWhhc0VuZEFjdGlvbnMsIHJlZjogKGVsKSA9PiAodGhpcy5hY3Rpb25TbG90V3JhcHBlciA9IGVsKSB9LCBzbG90Tm9kZSkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5jaGlsZHJlbkNvbnRhaW5lcl06IHRydWUsXG4gICAgICAgIFtDU1NfVVRJTElUWS5ydGxdOiBydGwsXG4gICAgICB9LCBcImRhdGEtdGVzdC1pZFwiOiBcImNhbGNpdGUtdHJlZS1jaGlsZHJlblwiLCBvbkNsaWNrOiB0aGlzLmNoaWxkcmVuQ2xpY2tIYW5kbGVyLCByb2xlOiB0aGlzLmhhc0NoaWxkcmVuID8gXCJncm91cFwiIDogdW5kZWZpbmVkIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuY2hpbGRyZW4gfSkpKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmlzQWN0aW9uRW5kRXZlbnQoZXZlbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFNvbHZlIGZvciBpZiB0aGUgaXRlbSBpcyBjbGlja2VkIHNvbWV3aGVyZSBvdXRzaWRlIHRoZSBzbG90dGVkIGFuY2hvci5cbiAgICAvLyBBbmNob3IgaXMgdHJpZ2dlcmVkIGFueXdoZXJlIHlvdSBjbGlja1xuICAgIGNvbnN0IFtsaW5rXSA9IGZpbHRlckRpcmVjdENoaWxkcmVuKHRoaXMuZWwsIFwiYVwiKTtcbiAgICBpZiAobGluayAmJiBldmVudC5jb21wb3NlZFBhdGgoKVswXS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09IFwiYVwiKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBsaW5rLnRhcmdldCA9PT0gXCJcIiA/IFwiX3NlbGZcIiA6IGxpbmsudGFyZ2V0O1xuICAgICAgd2luZG93Lm9wZW4obGluay5ocmVmLCB0YXJnZXQpO1xuICAgIH1cbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRyZWVJdGVtU2VsZWN0LmVtaXQoe1xuICAgICAgbW9kaWZ5Q3VycmVudFNlbGVjdGlvbjogdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcImFuY2VzdG9yc1wiIHx8IHRoaXMuaXNTZWxlY3Rpb25NdWx0aUxpa2UsXG4gICAgICB1cGRhdGVJdGVtOiB0cnVlLFxuICAgIH0pO1xuICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IHRydWU7XG4gIH1cbiAga2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5pc0FjdGlvbkVuZEV2ZW50KGV2ZW50KSB8fCBldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlIFwiIFwiOlxuICAgICAgICB0aGlzLnVzZXJDaGFuZ2VkVmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRyZWVJdGVtU2VsZWN0LmVtaXQoe1xuICAgICAgICAgIG1vZGlmeUN1cnJlbnRTZWxlY3Rpb246IHRoaXMuaXNTZWxlY3Rpb25NdWx0aUxpa2UsXG4gICAgICAgICAgdXBkYXRlSXRlbTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkVudGVyXCI6XG4gICAgICAgIC8vIGFjdGl2YXRlcyBhIG5vZGUsIGkuZS4sIHBlcmZvcm1zIGl0cyBkZWZhdWx0IGFjdGlvbi4gRm9yIHBhcmVudCBub2Rlcywgb25lIHBvc3NpYmxlIGRlZmF1bHQgYWN0aW9uIGlzIHRvIG9wZW4gb3IgY2xvc2UgdGhlIG5vZGUuIEluIHNpbmdsZS1zZWxlY3QgdHJlZXMgd2hlcmUgc2VsZWN0aW9uIGRvZXMgbm90IGZvbGxvdyBmb2N1cyAoc2VlIG5vdGUgYmVsb3cpLCB0aGUgZGVmYXVsdCBhY3Rpb24gaXMgdHlwaWNhbGx5IHRvIHNlbGVjdCB0aGUgZm9jdXNlZCBub2RlLlxuICAgICAgICBjb25zdCBsaW5rID0gQXJyYXkuZnJvbSh0aGlzLmVsLmNoaWxkcmVuKS5maW5kKChlbCkgPT4gZWwubWF0Y2hlcyhcImFcIikpO1xuICAgICAgICB0aGlzLnVzZXJDaGFuZ2VkVmFsdWUgPSB0cnVlO1xuICAgICAgICBpZiAobGluaykge1xuICAgICAgICAgIGxpbmsuY2xpY2soKTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRyZWVJdGVtU2VsZWN0LmVtaXQoe1xuICAgICAgICAgICAgbW9kaWZ5Q3VycmVudFNlbGVjdGlvbjogdGhpcy5pc1NlbGVjdGlvbk11bHRpTGlrZSxcbiAgICAgICAgICAgIHVwZGF0ZUl0ZW06IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNBY3Rpb25FbmRFdmVudChldmVudCkge1xuICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgIHJldHVybiBjb21wb3NlZFBhdGguaW5jbHVkZXModGhpcy5hY3Rpb25TbG90V3JhcHBlcik7XG4gIH1cbiAgLyoqXG4gICAqIFRoaXMgaXMgbWVhbnQgdG8gYmUgY2FsbGVkIGluIGBjb21wb25lbnREaWRMb2FkYCBpbiBvcmRlciB0byB0YWtlIGFkdmFudGFnZSBvZiB0aGUgaGllcmFyY2hpY2FsIGNvbXBvbmVudCBsaWZlY3ljbGVcbiAgICogYW5kIGhlbHAgY2hlY2sgZm9yIGl0ZW0gc2VsZWN0aW9uIGFzIGl0ZW1zIGFyZSBpbml0aWFsaXplZFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdXBkYXRlQW5jZXN0b3JUcmVlKCkge1xuICAgIGNvbnN0IHBhcmVudEl0ZW0gPSB0aGlzLnBhcmVudFRyZWVJdGVtO1xuICAgIGlmICh0aGlzLnNlbGVjdGlvbk1vZGUgIT09IFwiYW5jZXN0b3JzXCIgfHwgIXBhcmVudEl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHBhcmVudFRyZWUgPSB0aGlzLmVsLnBhcmVudEVsZW1lbnQ7XG4gICAgICBjb25zdCBzaWJsaW5ncyA9IEFycmF5LmZyb20ocGFyZW50VHJlZT8uY2hpbGRyZW4pO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRTaWJsaW5ncyA9IHNpYmxpbmdzLmZpbHRlcigoY2hpbGQpID0+IGNoaWxkLnNlbGVjdGVkKTtcbiAgICAgIGlmIChzaWJsaW5ncy5sZW5ndGggPT09IHNlbGVjdGVkU2libGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIHBhcmVudEl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICBwYXJlbnRJdGVtLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHNlbGVjdGVkU2libGluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICBwYXJlbnRJdGVtLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgY2hpbGRJdGVtcyA9IEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS10cmVlLWl0ZW06bm90KFtkaXNhYmxlZF0pXCIpKTtcbiAgICAgIGNoaWxkSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgaXRlbS5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5pbmRldGVybWluYXRlKSB7XG4gICAgICBjb25zdCBwYXJlbnRJdGVtID0gdGhpcy5wYXJlbnRUcmVlSXRlbTtcbiAgICAgIHBhcmVudEl0ZW0uaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgfVxuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImV4cGFuZGVkXCI6IFtcImV4cGFuZGVkSGFuZGxlclwiXSxcbiAgICBcInNlbGVjdGVkXCI6IFtcImhhbmRsZVNlbGVjdGVkQ2hhbmdlXCJdLFxuICAgIFwic2VsZWN0aW9uTW9kZVwiOiBbXCJnZXRTZWxlY3Rpb25Nb2RlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIHRyZWVJdGVtQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLXRyZWUtaXRlbVwiLCB7XG4gICAgXCJkaXNhYmxlZFwiOiBbNTE2XSxcbiAgICBcImV4cGFuZGVkXCI6IFsxNTQwXSxcbiAgICBcImljb25GbGlwUnRsXCI6IFs1MTMsIFwiaWNvbi1mbGlwLXJ0bFwiXSxcbiAgICBcImljb25TdGFydFwiOiBbNTEzLCBcImljb24tc3RhcnRcIl0sXG4gICAgXCJzZWxlY3RlZFwiOiBbMTU0MF0sXG4gICAgXCJwYXJlbnRFeHBhbmRlZFwiOiBbNCwgXCJwYXJlbnQtZXhwYW5kZWRcIl0sXG4gICAgXCJkZXB0aFwiOiBbMTUzOF0sXG4gICAgXCJoYXNDaGlsZHJlblwiOiBbMTU0MCwgXCJoYXMtY2hpbGRyZW5cIl0sXG4gICAgXCJsaW5lc1wiOiBbMTU0MF0sXG4gICAgXCJzY2FsZVwiOiBbMTUzN10sXG4gICAgXCJpbmRldGVybWluYXRlXCI6IFs1MTZdLFxuICAgIFwic2VsZWN0aW9uTW9kZVwiOiBbMTUzNywgXCJzZWxlY3Rpb24tbW9kZVwiXSxcbiAgICBcImhhc0VuZEFjdGlvbnNcIjogWzMyXSxcbiAgICBcInVwZGF0ZUFmdGVySW5pdGlhbFJlbmRlclwiOiBbMzJdXG4gIH0sIFtbMCwgXCJjbGlja1wiLCBcIm9uQ2xpY2tcIl0sIFswLCBcImtleWRvd25cIiwgXCJrZXlEb3duSGFuZGxlclwiXV1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wiY2FsY2l0ZS10cmVlLWl0ZW1cIiwgXCJjYWxjaXRlLWNoZWNrYm94XCIsIFwiY2FsY2l0ZS1pY29uXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJjYWxjaXRlLXRyZWUtaXRlbVwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIFRyZWVJdGVtKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWNoZWNrYm94XCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBkZWZpbmVDdXN0b21FbGVtZW50JDMoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjaXRlLWljb25cIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnQkMigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50JDEoKTtcblxuY29uc3QgQ2FsY2l0ZVRyZWVJdGVtID0gVHJlZUl0ZW07XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gZGVmaW5lQ3VzdG9tRWxlbWVudCQxO1xuXG5leHBvcnQgeyBDYWxjaXRlVHJlZUl0ZW0sIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmZ1bmN0aW9uIGdldEljb25TY2FsZShjb21wb25lbnRTY2FsZSkge1xuICByZXR1cm4gY29tcG9uZW50U2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIjtcbn1cblxuZXhwb3J0IHsgZ2V0SWNvblNjYWxlIGFzIGcgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGZvcmNlVXBkYXRlIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLmpzJztcblxuY29uc3Qgb2JzZXJ2ZWQgPSBuZXcgU2V0KCk7XG5sZXQgbXV0YXRpb25PYnNlcnZlcjtcbmNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHsgY2hpbGRMaXN0OiB0cnVlIH07XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgaWYgKCFtdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgcHJvY2Vzc011dGF0aW9ucyk7XG4gIH1cbiAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGNvbXBvbmVudC5lbCwgb2JzZXJ2ZXJPcHRpb25zKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHRlYXIgZG93biBhIGNvbmRpdGlvbmFsIHNsb3QgY29tcG9uZW50IG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBkZXByZWNhdGVkIFVzZSBgb25TbG90Y2hhbmdlYCBldmVudCB3aXRoIGBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50YCBET00gdXRpbGl0eSBpbnN0ZWFkLlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpfSAvPn1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBvYnNlcnZlZC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgLy8gd2UgZXhwbGljaXRseSBwcm9jZXNzIHF1ZXVlZCBtdXRhdGlvbnMgYW5kIGRpc2Nvbm5lY3QgYW5kIHJlY29ubmVjdFxuICAvLyB0aGUgb2JzZXJ2ZXIgdW50aWwgTXV0YXRpb25PYnNlcnZlciBnZXRzIGFuIGB1bm9ic2VydmVgIG1ldGhvZFxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNlxuICBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICBmb3IgKGNvbnN0IFtlbGVtZW50XSBvZiBvYnNlcnZlZC5lbnRyaWVzKCkpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcbiAgfVxufVxuZnVuY3Rpb24gcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgbXV0YXRpb25zLmZvckVhY2goKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBmb3JjZVVwZGF0ZSh0YXJnZXQpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBjLCBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IGdldEFzc2V0UGF0aCwgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgaCwgSG9zdCwgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldEVsZW1lbnREaXIsIHQgYXMgdG9BcmlhQm9vbGVhbiB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgaWNvbjogXCJpY29uXCIsXG4gIGZsaXBSdGw6IFwiZmxpcC1ydGxcIixcbn07XG5cbi8qKlxuICogSWNvbiBkYXRhIGNhY2hlLlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgaWNvbkNhY2hlID0ge307XG4vKipcbiAqIEljb24gcmVxdWVzdCBjYWNoZS5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IHJlcXVlc3RDYWNoZSA9IHt9O1xuY29uc3Qgc2NhbGVUb1B4ID0ge1xuICBzOiAxNixcbiAgbTogMjQsXG4gIGw6IDMyLFxufTtcbmFzeW5jIGZ1bmN0aW9uIGZldGNoSWNvbih7IGljb24sIHNjYWxlIH0pIHtcbiAgY29uc3Qgc2l6ZSA9IHNjYWxlVG9QeFtzY2FsZV07XG4gIGNvbnN0IG5hbWUgPSBub3JtYWxpemVJY29uTmFtZShpY29uKTtcbiAgY29uc3QgZmlsbGVkID0gbmFtZS5jaGFyQXQobmFtZS5sZW5ndGggLSAxKSA9PT0gXCJGXCI7XG4gIGNvbnN0IGljb25OYW1lID0gZmlsbGVkID8gbmFtZS5zdWJzdHJpbmcoMCwgbmFtZS5sZW5ndGggLSAxKSA6IG5hbWU7XG4gIGNvbnN0IGlkID0gYCR7aWNvbk5hbWV9JHtzaXplfSR7ZmlsbGVkID8gXCJGXCIgOiBcIlwifWA7XG4gIGlmIChpY29uQ2FjaGVbaWRdKSB7XG4gICAgcmV0dXJuIGljb25DYWNoZVtpZF07XG4gIH1cbiAgaWYgKCFyZXF1ZXN0Q2FjaGVbaWRdKSB7XG4gICAgcmVxdWVzdENhY2hlW2lkXSA9IGZldGNoKGdldEFzc2V0UGF0aChgLi9hc3NldHMvaWNvbi8ke2lkfS5qc29uYCkpXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihgXCIke2lkfVwiIGlzIG5vdCBhIHZhbGlkIGNhbGNpdGUtdWktaWNvbiBuYW1lYCk7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBwYXRoID0gYXdhaXQgcmVxdWVzdENhY2hlW2lkXTtcbiAgaWNvbkNhY2hlW2lkXSA9IHBhdGg7XG4gIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGljb24gbmFtZSB0byBtYXRjaCB0aGUgcGF0aCBkYXRhIG1vZHVsZSBleHBvcnRzLlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKlxuICogQHBhcmFtIG5hbWUg4oCTIGFuIGljb24gbmFtZSB0aGF0IGNhbiBiZSBlaXRoZXIga2ViYWIgb3IgY2FtZWwtY2FzZWRcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUljb25OYW1lKG5hbWUpIHtcbiAgY29uc3QgbnVtYmVyTGVhZGluZ05hbWUgPSAhaXNOYU4oTnVtYmVyKG5hbWUuY2hhckF0KDApKSk7XG4gIGNvbnN0IHBhcnRzID0gbmFtZS5zcGxpdChcIi1cIik7XG4gIGNvbnN0IGtlYmFiQ2FzZWQgPSBwYXJ0cy5sZW5ndGggPiAwO1xuICBpZiAoa2ViYWJDYXNlZCkge1xuICAgIGNvbnN0IGZpcnN0Tm9uRGlnaXRJblBhcnRQYXR0ZXJuID0gL1thLXpdL2k7XG4gICAgbmFtZSA9IHBhcnRzXG4gICAgICAubWFwKChwYXJ0LCBwYXJ0SW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBwYXJ0LnJlcGxhY2UoZmlyc3ROb25EaWdpdEluUGFydFBhdHRlcm4sIGZ1bmN0aW9uIHJlcGxhY2VyKG1hdGNoLCBvZmZzZXQpIHtcbiAgICAgICAgY29uc3QgaXNGaXJzdENoYXJJbk5hbWUgPSBwYXJ0SW5kZXggPT09IDAgJiYgb2Zmc2V0ID09PSAwO1xuICAgICAgICBpZiAoaXNGaXJzdENoYXJJbk5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KTtcbiAgICB9KVxuICAgICAgLmpvaW4oXCJcIik7XG4gIH1cbiAgcmV0dXJuIG51bWJlckxlYWRpbmdOYW1lID8gYGkke25hbWV9YCA6IG5hbWU7XG59XG5cbmNvbnN0IGljb25Dc3MgPSBcIjpob3N0e2Rpc3BsYXk6aW5saW5lLWZsZXg7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1pY29uLWNvbG9yKX06aG9zdChbc2NhbGU9c10pe2lubGluZS1zaXplOjE2cHg7YmxvY2stc2l6ZToxNnB4O21pbi1pbmxpbmUtc2l6ZToxNnB4O21pbi1ibG9jay1zaXplOjE2cHh9Omhvc3QoW3NjYWxlPW1dKXtpbmxpbmUtc2l6ZToyNHB4O2Jsb2NrLXNpemU6MjRweDttaW4taW5saW5lLXNpemU6MjRweDttaW4tYmxvY2stc2l6ZToyNHB4fTpob3N0KFtzY2FsZT1sXSl7aW5saW5lLXNpemU6MzJweDtibG9jay1zaXplOjMycHg7bWluLWlubGluZS1zaXplOjMycHg7bWluLWJsb2NrLXNpemU6MzJweH0uZmxpcC1ydGx7dHJhbnNmb3JtOnNjYWxlWCgtMSl9LnN2Z3tkaXNwbGF5OmJsb2NrfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBJY29uID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmljb24gPSBudWxsO1xuICAgIHRoaXMuZmxpcFJ0bCA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnRleHRMYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBhdGhEYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMud2FpdFVudGlsVmlzaWJsZSgoKSA9PiB7XG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgdGhpcy5sb2FkSWNvblBhdGhEYXRhKCk7XG4gICAgfSk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBudWxsO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMubG9hZEljb25QYXRoRGF0YSgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVsLCBmbGlwUnRsLCBwYXRoRGF0YSwgc2NhbGUsIHRleHRMYWJlbCB9ID0gdGhpcztcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKGVsKTtcbiAgICBjb25zdCBzaXplID0gc2NhbGVUb1B4W3NjYWxlXTtcbiAgICBjb25zdCBzZW1hbnRpYyA9ICEhdGV4dExhYmVsO1xuICAgIGNvbnN0IHBhdGhzID0gW10uY29uY2F0KHBhdGhEYXRhIHx8IFwiXCIpO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1oaWRkZW5cIjogdG9BcmlhQm9vbGVhbighc2VtYW50aWMpLCBcImFyaWEtbGFiZWxcIjogc2VtYW50aWMgPyB0ZXh0TGFiZWwgOiBudWxsLCByb2xlOiBzZW1hbnRpYyA/IFwiaW1nXCIgOiBudWxsIH0sIGgoXCJzdmdcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmZsaXBSdGxdOiBkaXIgPT09IFwicnRsXCIgJiYgZmxpcFJ0bCxcbiAgICAgICAgc3ZnOiB0cnVlLFxuICAgICAgfSwgZmlsbDogXCJjdXJyZW50Q29sb3JcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgdmlld0JveDogYDAgMCAke3NpemV9ICR7c2l6ZX1gLCB3aWR0aDogXCIxMDAlXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSwgcGF0aHMubWFwKChwYXRoKSA9PiB0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIiA/IChoKFwicGF0aFwiLCB7IGQ6IHBhdGggfSkpIDogKGgoXCJwYXRoXCIsIHsgZDogcGF0aC5kLCBvcGFjaXR5OiBcIm9wYWNpdHlcIiBpbiBwYXRoID8gcGF0aC5vcGFjaXR5IDogMSB9KSkpKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFzeW5jIGxvYWRJY29uUGF0aERhdGEoKSB7XG4gICAgY29uc3QgeyBpY29uLCBzY2FsZSwgdmlzaWJsZSB9ID0gdGhpcztcbiAgICBpZiAoIUJ1aWxkLmlzQnJvd3NlciB8fCAhaWNvbiB8fCAhdmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXRoRGF0YSA9IGF3YWl0IGZldGNoSWNvbih7IGljb24sIHNjYWxlIH0pO1xuICAgIC8vIFdoaWxlIHRoZSBmZXRjaEljb24gbWV0aG9kIGlzIGF3YWl0aW5nIHJlc3BvbnNlLCB0aGUgaWNvbiByZXF1ZXN0ZWQgY2FuIGNoYW5nZS4gVGhpcyBjaGVjayBpcyB0byB2ZXJpZnkgdGhlIHJlc3BvbnNlIHJlY2VpdmVkIGJlbG9uZ3MgdG8gdGhlIGN1cnJlbnQgaWNvbi5cbiAgICBpZiAoaWNvbiAhPT0gdGhpcy5pY29uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGF0aERhdGEgPSBwYXRoRGF0YTtcbiAgfVxuICB3YWl0VW50aWxWaXNpYmxlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwiaW50ZXJzZWN0aW9uXCIsIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIHsgcm9vdE1hcmdpbjogXCI1MHB4XCIgfSk7XG4gICAgaWYgKCF0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbCk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImljb25cIjogW1wibG9hZEljb25QYXRoRGF0YVwiXSxcbiAgICBcInNjYWxlXCI6IFtcImxvYWRJY29uUGF0aERhdGFcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gaWNvbkNzczsgfVxufSwgWzEsIFwiY2FsY2l0ZS1pY29uXCIsIHtcbiAgICBcImljb25cIjogWzUxM10sXG4gICAgXCJmbGlwUnRsXCI6IFs1MTYsIFwiZmxpcC1ydGxcIl0sXG4gICAgXCJzY2FsZVwiOiBbNTEzXSxcbiAgICBcInRleHRMYWJlbFwiOiBbMSwgXCJ0ZXh0LWxhYmVsXCJdLFxuICAgIFwicGF0aERhdGFcIjogWzMyXSxcbiAgICBcInZpc2libGVcIjogWzMyXVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJjYWxjaXRlLWljb25cIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcImNhbGNpdGUtaWNvblwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIEljb24pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5kZWZpbmVDdXN0b21FbGVtZW50KCk7XG5cbmV4cG9ydCB7IEljb24gYXMgSSwgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1kZXNpZ24tc3lzdGVtL2Jsb2IvbWFpbi9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuMTEuMFxuICovXG5mdW5jdGlvbiBpc0FjdGl2YXRpb25LZXkoa2V5KSB7XG4gIHJldHVybiBrZXkgPT09IFwiRW50ZXJcIiB8fCBrZXkgPT09IFwiIFwiO1xufVxuY29uc3QgbnVtYmVyS2V5cyA9IFtcIjBcIiwgXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIl07XG5cbmV4cG9ydCB7IGlzQWN0aXZhdGlvbktleSBhcyBpLCBudW1iZXJLZXlzIGFzIG4gfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IEJ1aWxkIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuXG4vKipcbiAqIFRoaXMgdXRpbGl0eSBlbnN1cmVzIG9ic2VydmVycyBhcmUgY3JlYXRlZCBvbmx5IGZvciBicm93c2VyIGNvbnRleHRzLlxuICpcbiAqIEBwYXJhbSB0eXBlIC0gdGhlIHR5cGUgb2Ygb2JzZXJ2ZXIgdG8gY3JlYXRlXG4gKiBAcGFyYW0gY2FsbGJhY2sgLSB0aGUgb2JzZXJ2ZXIgY2FsbGJhY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gdGhlIG9ic2VydmVyIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgaWYgKCFCdWlsZC5pc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGNvbnN0IE9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIodHlwZSk7XG4gIHJldHVybiBuZXcgT2JzZXJ2ZXIoY2FsbGJhY2ssIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIodHlwZSkge1xuICAvLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2RvbS9pc3N1ZXMvMTI2I2lzc3VlY29tbWVudC0xMDQ5ODE0OTQ4XG4gIGNsYXNzIEV4dGVuZGVkTXV0YXRpb25PYnNlcnZlciBleHRlbmRzIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjaykge1xuICAgICAgc3VwZXIoY2FsbGJhY2spO1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5ID0gW107XG4gICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuICAgIG9ic2VydmUodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkucHVzaCh7IHRhcmdldCwgb3B0aW9ucyB9KTtcbiAgICAgIHJldHVybiBzdXBlci5vYnNlcnZlKHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHVub2JzZXJ2ZSh0YXJnZXQpIHtcbiAgICAgIGNvbnN0IG5ld09ic2VydmVkRW50cmllcyA9IHRoaXMub2JzZXJ2ZWRFbnRyeS5maWx0ZXIoKG9ic2VydmVkKSA9PiBvYnNlcnZlZC50YXJnZXQgIT09IHRhcmdldCk7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkgPSBbXTtcbiAgICAgIHRoaXMuY2FsbGJhY2soc3VwZXIudGFrZVJlY29yZHMoKSwgdGhpcyk7XG4gICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAgIG5ld09ic2VydmVkRW50cmllcy5mb3JFYWNoKChvYnNlcnZlZCkgPT4gdGhpcy5vYnNlcnZlKG9ic2VydmVkLnRhcmdldCwgb2JzZXJ2ZWQub3B0aW9ucykpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHR5cGUgPT09IFwiaW50ZXJzZWN0aW9uXCJcbiAgICAgID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyXG4gICAgICA6IHR5cGUgPT09IFwibXV0YXRpb25cIlxuICAgICAgICA/IEV4dGVuZGVkTXV0YXRpb25PYnNlcnZlclxuICAgICAgICA6IHdpbmRvdy5SZXNpemVPYnNlcnZlcik7XG4gIH0pKCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU9ic2VydmVyIGFzIGMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==