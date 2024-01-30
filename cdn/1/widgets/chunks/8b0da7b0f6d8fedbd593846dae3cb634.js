"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_components_calcite-tree_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-tree.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-tree.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteTree: () => (/* binding */ CalciteTree),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */



function isTreeItem(element) {
  return element?.tagName === "CALCITE-TREE-ITEM";
}
function getTraversableItems(root) {
  return Array.from(root.querySelectorAll("calcite-tree-item:not([disabled])")).filter((item) => {
    let currentItem = item;
    while (currentItem !== root && currentItem !== undefined) {
      const parent = currentItem.parentElement;
      const traversable = !isTreeItem(parent) || !parent.hasChildren || parent.expanded;
      if (!traversable) {
        return false;
      }
      currentItem = currentItem.parentElement;
    }
    return true;
  });
}

const treeCss = ":host{display:block}:host(:focus){outline:2px solid transparent;outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}";

const Tree = /*@__PURE__*/ (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteTreeSelect = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.createEvent)(this, "calciteTreeSelect", 6);
    this.keyDownHandler = (event) => {
      if (this.child) {
        return;
      }
      const root = this.el;
      const target = event.target;
      const supportedKeys = ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End", "Tab"];
      if (!(isTreeItem(target) && this.el.contains(target)) || !supportedKeys.includes(event.key)) {
        return;
      }
      const traversableItems = getTraversableItems(root);
      if (event.key === "Tab") {
        // root tabindex will be restored when blurred/focused
        traversableItems.forEach((item) => (item.tabIndex = -1));
        return;
      }
      if (event.key === "ArrowDown") {
        const currentItemIndex = traversableItems.indexOf(target);
        const nextItem = traversableItems[currentItemIndex + 1];
        nextItem?.focus();
        event.preventDefault();
        return;
      }
      if (event.key === "ArrowUp") {
        const currentItemIndex = traversableItems.indexOf(target);
        const previousItem = traversableItems[currentItemIndex - 1];
        previousItem?.focus();
        event.preventDefault();
        return;
      }
      if (event.key === "ArrowLeft") {
        if (target.hasChildren && target.expanded) {
          target.expanded = false;
          event.preventDefault();
          return;
        }
        const rootToItemPath = traversableItems.slice(0, traversableItems.indexOf(target)).reverse();
        const parentItem = rootToItemPath.find((item) => item.depth === target.depth - 1);
        parentItem?.focus();
        event.preventDefault();
        return;
      }
      if (event.key === "ArrowRight") {
        if (!target.disabled && target.hasChildren) {
          if (!target.expanded) {
            target.expanded = true;
            event.preventDefault();
          }
          else {
            const currentItemIndex = traversableItems.indexOf(target);
            const nextItem = traversableItems[currentItemIndex + 1];
            nextItem?.focus();
            event.preventDefault();
          }
        }
        return;
      }
      if (event.key === "Home") {
        const firstNode = traversableItems.shift();
        if (firstNode) {
          firstNode.focus();
          event.preventDefault();
        }
        return;
      }
      if (event.key === "End") {
        const lastNode = traversableItems.pop();
        if (lastNode) {
          lastNode.focus();
          event.preventDefault();
        }
        return;
      }
    };
    this.lines = false;
    this.child = undefined;
    this.scale = "m";
    this.selectionMode = "single";
    this.selectedItems = [];
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillRender() {
    const parent = this.el.parentElement?.closest("calcite-tree");
    this.lines = parent ? parent.lines : this.lines;
    this.scale = parent ? parent.scale : this.scale;
    this.selectionMode = parent ? parent.selectionMode : this.selectionMode;
    this.child = !!parent;
  }
  render() {
    return ((0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.Host, { "aria-multiselectable": this.child
        ? undefined
        : (this.selectionMode === "multiple" || this.selectionMode === "multichildren").toString(), onKeyDown: this.keyDownHandler, role: !this.child ? "tree" : undefined, tabIndex: this.getRootTabIndex() }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null)));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onFocus() {
    if (!this.child) {
      const focusTarget = this.el.querySelector("calcite-tree-item[selected]:not([disabled])") || this.el.querySelector("calcite-tree-item:not([disabled])");
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.k)(focusTarget);
    }
  }
  onFocusIn(event) {
    const focusedFromRootOrOutsideTree = event.relatedTarget === this.el || !this.el.contains(event.relatedTarget);
    if (focusedFromRootOrOutsideTree) {
      // gives user the ability to tab into external elements (modifying tabindex property will not work in firefox)
      this.el.removeAttribute("tabindex");
    }
  }
  onFocusOut(event) {
    const willFocusOutsideTree = !this.el.contains(event.relatedTarget);
    if (willFocusOutsideTree) {
      this.el.tabIndex = this.getRootTabIndex();
    }
  }
  onInternalTreeItemSelect(event) {
    if (this.child) {
      return;
    }
    const target = event.target;
    const childItems = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.o)(target.querySelectorAll("calcite-tree-item"));
    event.preventDefault();
    event.stopPropagation();
    if (this.selectionMode === "ancestors") {
      this.updateAncestorTree(event);
      return;
    }
    const isNoneSelectionMode = this.selectionMode === "none";
    const shouldSelect = this.selectionMode !== null &&
      (!target.hasChildren ||
        (target.hasChildren &&
          (this.selectionMode === "children" || this.selectionMode === "multichildren")));
    const shouldDeselectAllChildren = this.selectionMode === "multichildren" && target.hasChildren;
    const shouldModifyToCurrentSelection = !isNoneSelectionMode &&
      event.detail.modifyCurrentSelection &&
      (this.selectionMode === "multiple" || this.selectionMode === "multichildren");
    const shouldClearCurrentSelection = !shouldModifyToCurrentSelection &&
      (((this.selectionMode === "single" || this.selectionMode === "multiple") &&
        childItems.length <= 0) ||
        this.selectionMode === "children" ||
        this.selectionMode === "multichildren");
    const shouldUpdateExpand = ["multiple", "none", "single", "single-persist"].includes(this.selectionMode) &&
      target.hasChildren;
    const targetItems = [];
    if (shouldSelect) {
      targetItems.push(target);
    }
    if (shouldClearCurrentSelection) {
      const selectedItems = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.o)(this.el.querySelectorAll("calcite-tree-item[selected]"));
      selectedItems.forEach((treeItem) => {
        if (!targetItems.includes(treeItem)) {
          treeItem.selected = false;
        }
      });
    }
    if (shouldUpdateExpand &&
      ["multiple", "none", "single", "single-persist"].includes(this.selectionMode)) {
      target.expanded = !target.expanded;
    }
    if (shouldDeselectAllChildren) {
      childItems.forEach((item) => {
        item.selected = false;
        if (item.hasChildren) {
          item.expanded = false;
        }
      });
    }
    if (shouldModifyToCurrentSelection) {
      window.getSelection().removeAllRanges();
    }
    if (shouldModifyToCurrentSelection && target.selected) {
      targetItems.forEach((treeItem) => {
        if (!treeItem.disabled) {
          treeItem.selected = false;
        }
      });
    }
    else if (!isNoneSelectionMode) {
      targetItems.forEach((treeItem) => {
        if (!treeItem.disabled) {
          treeItem.selected = true;
        }
      });
    }
    this.selectedItems = isNoneSelectionMode
      ? []
      : (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.o)(this.el.querySelectorAll("calcite-tree-item")).filter((i) => i.selected);
    this.calciteTreeSelect.emit();
    event.stopPropagation();
  }
  updateAncestorTree(event) {
    const item = event.target;
    const updateItem = event.detail.updateItem;
    if (item.disabled || (item.indeterminate && !updateItem)) {
      return;
    }
    const ancestors = [];
    let parent = item.parentElement.closest("calcite-tree-item");
    while (parent) {
      ancestors.push(parent);
      parent = parent.parentElement.closest("calcite-tree-item");
    }
    const childItems = Array.from(item.querySelectorAll("calcite-tree-item:not([disabled])"));
    const childItemsWithNoChildren = childItems.filter((child) => !child.hasChildren);
    const childItemsWithChildren = childItems.filter((child) => child.hasChildren);
    let futureSelected;
    if (updateItem) {
      futureSelected = item.hasChildren ? !(item.selected || item.indeterminate) : !item.selected;
    }
    else {
      futureSelected = item.selected;
    }
    childItemsWithNoChildren.forEach((el) => {
      el.selected = futureSelected;
      el.indeterminate = false;
    });
    function updateItemState(childItems, item) {
      const selected = childItems.filter((child) => child.selected);
      const unselected = childItems.filter((child) => !child.selected);
      item.selected = selected.length === childItems.length;
      item.indeterminate = selected.length > 0 && unselected.length > 0;
    }
    childItemsWithChildren.reverse().forEach((el) => {
      const directChildItems = Array.from(el.querySelectorAll(":scope > calcite-tree > calcite-tree-item"));
      updateItemState(directChildItems, el);
    });
    if (updateItem) {
      if (item.hasChildren) {
        updateItemState(childItems, item);
      }
      else {
        item.selected = futureSelected;
        item.indeterminate = false;
      }
    }
    ancestors.forEach((ancestor) => {
      const descendants = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.o)(ancestor.querySelectorAll("calcite-tree-item"));
      const activeDescendants = descendants.filter((el) => el.selected);
      if (activeDescendants.length === 0) {
        ancestor.selected = false;
        ancestor.indeterminate = false;
        return;
      }
      const indeterminate = activeDescendants.length < descendants.length;
      ancestor.indeterminate = indeterminate;
      ancestor.selected = !indeterminate;
    });
    this.selectedItems = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.o)(this.el.querySelectorAll("calcite-tree-item")).filter((i) => i.selected);
    if (updateItem) {
      this.calciteTreeSelect.emit();
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  getRootTabIndex() {
    return !this.child ? 0 : -1;
  }
  get el() { return this; }
  static get style() { return treeCss; }
}, [1, "calcite-tree", {
    "lines": [1540],
    "child": [1540],
    "scale": [1537],
    "selectionMode": [1537, "selection-mode"],
    "selectedItems": [1040]
  }, [[0, "focus", "onFocus"], [0, "focusin", "onFocusIn"], [0, "focusout", "onFocusOut"], [0, "calciteInternalTreeItemSelect", "onInternalTreeItemSelect"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-tree"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-tree":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Tree);
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteTree = Tree;
const defineCustomElement = defineCustomElement$1;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOGIwZGE3YjBmNmQ4ZmVkYmQ1OTM4NDZkYWUzY2I2MzQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0c7QUFDNUM7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSx1QkFBdUIsY0FBYyxjQUFjLDhCQUE4QixtQkFBbUIsZ0JBQWdCLGFBQWEsU0FBUyxhQUFhOztBQUV2SiwyQkFBMkIsMEZBQWtCLGVBQWUsK0VBQVc7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsbUZBQVc7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5RUFBQyxDQUFDLHdFQUFJLElBQUk7QUFDdEI7QUFDQSw4TUFBOE0sRUFBRSx5RUFBQztBQUNqTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBDQUFZO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMENBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBDQUFlO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBDQUFlO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQ0FBZTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wseUJBQXlCLDBDQUFlO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFNEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY2FsY2l0ZS10cmVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoLCBIb3N0IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0IHsgayBhcyBmb2N1c0VsZW1lbnQsIG8gYXMgbm9kZUxpc3RUb0FycmF5IH0gZnJvbSAnLi9kb20uanMnO1xuXG5mdW5jdGlvbiBpc1RyZWVJdGVtKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQ/LnRhZ05hbWUgPT09IFwiQ0FMQ0lURS1UUkVFLUlURU1cIjtcbn1cbmZ1bmN0aW9uIGdldFRyYXZlcnNhYmxlSXRlbXMocm9vdCkge1xuICByZXR1cm4gQXJyYXkuZnJvbShyb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLXRyZWUtaXRlbTpub3QoW2Rpc2FibGVkXSlcIikpLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgIGxldCBjdXJyZW50SXRlbSA9IGl0ZW07XG4gICAgd2hpbGUgKGN1cnJlbnRJdGVtICE9PSByb290ICYmIGN1cnJlbnRJdGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGN1cnJlbnRJdGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICBjb25zdCB0cmF2ZXJzYWJsZSA9ICFpc1RyZWVJdGVtKHBhcmVudCkgfHwgIXBhcmVudC5oYXNDaGlsZHJlbiB8fCBwYXJlbnQuZXhwYW5kZWQ7XG4gICAgICBpZiAoIXRyYXZlcnNhYmxlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRJdGVtID0gY3VycmVudEl0ZW0ucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufVxuXG5jb25zdCB0cmVlQ3NzID0gXCI6aG9zdHtkaXNwbGF5OmJsb2NrfTpob3N0KDpmb2N1cyl7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4fTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBUcmVlID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuX19hdHRhY2hTaGFkb3coKTtcbiAgICB0aGlzLmNhbGNpdGVUcmVlU2VsZWN0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlVHJlZVNlbGVjdFwiLCA2KTtcbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5jaGlsZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCByb290ID0gdGhpcy5lbDtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGNvbnN0IHN1cHBvcnRlZEtleXMgPSBbXCJBcnJvd1JpZ2h0XCIsIFwiQXJyb3dEb3duXCIsIFwiQXJyb3dMZWZ0XCIsIFwiQXJyb3dVcFwiLCBcIkhvbWVcIiwgXCJFbmRcIiwgXCJUYWJcIl07XG4gICAgICBpZiAoIShpc1RyZWVJdGVtKHRhcmdldCkgJiYgdGhpcy5lbC5jb250YWlucyh0YXJnZXQpKSB8fCAhc3VwcG9ydGVkS2V5cy5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRyYXZlcnNhYmxlSXRlbXMgPSBnZXRUcmF2ZXJzYWJsZUl0ZW1zKHJvb3QpO1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJUYWJcIikge1xuICAgICAgICAvLyByb290IHRhYmluZGV4IHdpbGwgYmUgcmVzdG9yZWQgd2hlbiBibHVycmVkL2ZvY3VzZWRcbiAgICAgICAgdHJhdmVyc2FibGVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS50YWJJbmRleCA9IC0xKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgY29uc3QgY3VycmVudEl0ZW1JbmRleCA9IHRyYXZlcnNhYmxlSXRlbXMuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgICBjb25zdCBuZXh0SXRlbSA9IHRyYXZlcnNhYmxlSXRlbXNbY3VycmVudEl0ZW1JbmRleCArIDFdO1xuICAgICAgICBuZXh0SXRlbT8uZm9jdXMoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgY29uc3QgY3VycmVudEl0ZW1JbmRleCA9IHRyYXZlcnNhYmxlSXRlbXMuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgICBjb25zdCBwcmV2aW91c0l0ZW0gPSB0cmF2ZXJzYWJsZUl0ZW1zW2N1cnJlbnRJdGVtSW5kZXggLSAxXTtcbiAgICAgICAgcHJldmlvdXNJdGVtPy5mb2N1cygpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgIGlmICh0YXJnZXQuaGFzQ2hpbGRyZW4gJiYgdGFyZ2V0LmV4cGFuZGVkKSB7XG4gICAgICAgICAgdGFyZ2V0LmV4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm9vdFRvSXRlbVBhdGggPSB0cmF2ZXJzYWJsZUl0ZW1zLnNsaWNlKDAsIHRyYXZlcnNhYmxlSXRlbXMuaW5kZXhPZih0YXJnZXQpKS5yZXZlcnNlKCk7XG4gICAgICAgIGNvbnN0IHBhcmVudEl0ZW0gPSByb290VG9JdGVtUGF0aC5maW5kKChpdGVtKSA9PiBpdGVtLmRlcHRoID09PSB0YXJnZXQuZGVwdGggLSAxKTtcbiAgICAgICAgcGFyZW50SXRlbT8uZm9jdXMoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgaWYgKCF0YXJnZXQuZGlzYWJsZWQgJiYgdGFyZ2V0Lmhhc0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKCF0YXJnZXQuZXhwYW5kZWQpIHtcbiAgICAgICAgICAgIHRhcmdldC5leHBhbmRlZCA9IHRydWU7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtSW5kZXggPSB0cmF2ZXJzYWJsZUl0ZW1zLmluZGV4T2YodGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IG5leHRJdGVtID0gdHJhdmVyc2FibGVJdGVtc1tjdXJyZW50SXRlbUluZGV4ICsgMV07XG4gICAgICAgICAgICBuZXh0SXRlbT8uZm9jdXMoKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiSG9tZVwiKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Tm9kZSA9IHRyYXZlcnNhYmxlSXRlbXMuc2hpZnQoKTtcbiAgICAgICAgaWYgKGZpcnN0Tm9kZSkge1xuICAgICAgICAgIGZpcnN0Tm9kZS5mb2N1cygpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbmRcIikge1xuICAgICAgICBjb25zdCBsYXN0Tm9kZSA9IHRyYXZlcnNhYmxlSXRlbXMucG9wKCk7XG4gICAgICAgIGlmIChsYXN0Tm9kZSkge1xuICAgICAgICAgIGxhc3ROb2RlLmZvY3VzKCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmxpbmVzID0gZmFsc2U7XG4gICAgdGhpcy5jaGlsZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5zZWxlY3Rpb25Nb2RlID0gXCJzaW5nbGVcIjtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb21wb25lbnRXaWxsUmVuZGVyKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZWwucGFyZW50RWxlbWVudD8uY2xvc2VzdChcImNhbGNpdGUtdHJlZVwiKTtcbiAgICB0aGlzLmxpbmVzID0gcGFyZW50ID8gcGFyZW50LmxpbmVzIDogdGhpcy5saW5lcztcbiAgICB0aGlzLnNjYWxlID0gcGFyZW50ID8gcGFyZW50LnNjYWxlIDogdGhpcy5zY2FsZTtcbiAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPSBwYXJlbnQgPyBwYXJlbnQuc2VsZWN0aW9uTW9kZSA6IHRoaXMuc2VsZWN0aW9uTW9kZTtcbiAgICB0aGlzLmNoaWxkID0gISFwYXJlbnQ7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1tdWx0aXNlbGVjdGFibGVcIjogdGhpcy5jaGlsZFxuICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICA6ICh0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGlwbGVcIiB8fCB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGljaGlsZHJlblwiKS50b1N0cmluZygpLCBvbktleURvd246IHRoaXMua2V5RG93bkhhbmRsZXIsIHJvbGU6ICF0aGlzLmNoaWxkID8gXCJ0cmVlXCIgOiB1bmRlZmluZWQsIHRhYkluZGV4OiB0aGlzLmdldFJvb3RUYWJJbmRleCgpIH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgb25Gb2N1cygpIHtcbiAgICBpZiAoIXRoaXMuY2hpbGQpIHtcbiAgICAgIGNvbnN0IGZvY3VzVGFyZ2V0ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKFwiY2FsY2l0ZS10cmVlLWl0ZW1bc2VsZWN0ZWRdOm5vdChbZGlzYWJsZWRdKVwiKSB8fCB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoXCJjYWxjaXRlLXRyZWUtaXRlbTpub3QoW2Rpc2FibGVkXSlcIik7XG4gICAgICBmb2N1c0VsZW1lbnQoZm9jdXNUYXJnZXQpO1xuICAgIH1cbiAgfVxuICBvbkZvY3VzSW4oZXZlbnQpIHtcbiAgICBjb25zdCBmb2N1c2VkRnJvbVJvb3RPck91dHNpZGVUcmVlID0gZXZlbnQucmVsYXRlZFRhcmdldCA9PT0gdGhpcy5lbCB8fCAhdGhpcy5lbC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KTtcbiAgICBpZiAoZm9jdXNlZEZyb21Sb290T3JPdXRzaWRlVHJlZSkge1xuICAgICAgLy8gZ2l2ZXMgdXNlciB0aGUgYWJpbGl0eSB0byB0YWIgaW50byBleHRlcm5hbCBlbGVtZW50cyAobW9kaWZ5aW5nIHRhYmluZGV4IHByb3BlcnR5IHdpbGwgbm90IHdvcmsgaW4gZmlyZWZveClcbiAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gICAgfVxuICB9XG4gIG9uRm9jdXNPdXQoZXZlbnQpIHtcbiAgICBjb25zdCB3aWxsRm9jdXNPdXRzaWRlVHJlZSA9ICF0aGlzLmVsLmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpO1xuICAgIGlmICh3aWxsRm9jdXNPdXRzaWRlVHJlZSkge1xuICAgICAgdGhpcy5lbC50YWJJbmRleCA9IHRoaXMuZ2V0Um9vdFRhYkluZGV4KCk7XG4gICAgfVxuICB9XG4gIG9uSW50ZXJuYWxUcmVlSXRlbVNlbGVjdChldmVudCkge1xuICAgIGlmICh0aGlzLmNoaWxkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCBjaGlsZEl0ZW1zID0gbm9kZUxpc3RUb0FycmF5KHRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS10cmVlLWl0ZW1cIikpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJhbmNlc3RvcnNcIikge1xuICAgICAgdGhpcy51cGRhdGVBbmNlc3RvclRyZWUoZXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpc05vbmVTZWxlY3Rpb25Nb2RlID0gdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm5vbmVcIjtcbiAgICBjb25zdCBzaG91bGRTZWxlY3QgPSB0aGlzLnNlbGVjdGlvbk1vZGUgIT09IG51bGwgJiZcbiAgICAgICghdGFyZ2V0Lmhhc0NoaWxkcmVuIHx8XG4gICAgICAgICh0YXJnZXQuaGFzQ2hpbGRyZW4gJiZcbiAgICAgICAgICAodGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcImNoaWxkcmVuXCIgfHwgdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm11bHRpY2hpbGRyZW5cIikpKTtcbiAgICBjb25zdCBzaG91bGREZXNlbGVjdEFsbENoaWxkcmVuID0gdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm11bHRpY2hpbGRyZW5cIiAmJiB0YXJnZXQuaGFzQ2hpbGRyZW47XG4gICAgY29uc3Qgc2hvdWxkTW9kaWZ5VG9DdXJyZW50U2VsZWN0aW9uID0gIWlzTm9uZVNlbGVjdGlvbk1vZGUgJiZcbiAgICAgIGV2ZW50LmRldGFpbC5tb2RpZnlDdXJyZW50U2VsZWN0aW9uICYmXG4gICAgICAodGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm11bHRpcGxlXCIgfHwgdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm11bHRpY2hpbGRyZW5cIik7XG4gICAgY29uc3Qgc2hvdWxkQ2xlYXJDdXJyZW50U2VsZWN0aW9uID0gIXNob3VsZE1vZGlmeVRvQ3VycmVudFNlbGVjdGlvbiAmJlxuICAgICAgKCgodGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcInNpbmdsZVwiIHx8IHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJtdWx0aXBsZVwiKSAmJlxuICAgICAgICBjaGlsZEl0ZW1zLmxlbmd0aCA8PSAwKSB8fFxuICAgICAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwiY2hpbGRyZW5cIiB8fFxuICAgICAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGljaGlsZHJlblwiKTtcbiAgICBjb25zdCBzaG91bGRVcGRhdGVFeHBhbmQgPSBbXCJtdWx0aXBsZVwiLCBcIm5vbmVcIiwgXCJzaW5nbGVcIiwgXCJzaW5nbGUtcGVyc2lzdFwiXS5pbmNsdWRlcyh0aGlzLnNlbGVjdGlvbk1vZGUpICYmXG4gICAgICB0YXJnZXQuaGFzQ2hpbGRyZW47XG4gICAgY29uc3QgdGFyZ2V0SXRlbXMgPSBbXTtcbiAgICBpZiAoc2hvdWxkU2VsZWN0KSB7XG4gICAgICB0YXJnZXRJdGVtcy5wdXNoKHRhcmdldCk7XG4gICAgfVxuICAgIGlmIChzaG91bGRDbGVhckN1cnJlbnRTZWxlY3Rpb24pIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSBub2RlTGlzdFRvQXJyYXkodGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS10cmVlLWl0ZW1bc2VsZWN0ZWRdXCIpKTtcbiAgICAgIHNlbGVjdGVkSXRlbXMuZm9yRWFjaCgodHJlZUl0ZW0pID0+IHtcbiAgICAgICAgaWYgKCF0YXJnZXRJdGVtcy5pbmNsdWRlcyh0cmVlSXRlbSkpIHtcbiAgICAgICAgICB0cmVlSXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHNob3VsZFVwZGF0ZUV4cGFuZCAmJlxuICAgICAgW1wibXVsdGlwbGVcIiwgXCJub25lXCIsIFwic2luZ2xlXCIsIFwic2luZ2xlLXBlcnNpc3RcIl0uaW5jbHVkZXModGhpcy5zZWxlY3Rpb25Nb2RlKSkge1xuICAgICAgdGFyZ2V0LmV4cGFuZGVkID0gIXRhcmdldC5leHBhbmRlZDtcbiAgICB9XG4gICAgaWYgKHNob3VsZERlc2VsZWN0QWxsQ2hpbGRyZW4pIHtcbiAgICAgIGNoaWxkSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChpdGVtLmhhc0NoaWxkcmVuKSB7XG4gICAgICAgICAgaXRlbS5leHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHNob3VsZE1vZGlmeVRvQ3VycmVudFNlbGVjdGlvbikge1xuICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIH1cbiAgICBpZiAoc2hvdWxkTW9kaWZ5VG9DdXJyZW50U2VsZWN0aW9uICYmIHRhcmdldC5zZWxlY3RlZCkge1xuICAgICAgdGFyZ2V0SXRlbXMuZm9yRWFjaCgodHJlZUl0ZW0pID0+IHtcbiAgICAgICAgaWYgKCF0cmVlSXRlbS5kaXNhYmxlZCkge1xuICAgICAgICAgIHRyZWVJdGVtLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmICghaXNOb25lU2VsZWN0aW9uTW9kZSkge1xuICAgICAgdGFyZ2V0SXRlbXMuZm9yRWFjaCgodHJlZUl0ZW0pID0+IHtcbiAgICAgICAgaWYgKCF0cmVlSXRlbS5kaXNhYmxlZCkge1xuICAgICAgICAgIHRyZWVJdGVtLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IGlzTm9uZVNlbGVjdGlvbk1vZGVcbiAgICAgID8gW11cbiAgICAgIDogbm9kZUxpc3RUb0FycmF5KHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtdHJlZS1pdGVtXCIpKS5maWx0ZXIoKGkpID0+IGkuc2VsZWN0ZWQpO1xuICAgIHRoaXMuY2FsY2l0ZVRyZWVTZWxlY3QuZW1pdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIHVwZGF0ZUFuY2VzdG9yVHJlZShldmVudCkge1xuICAgIGNvbnN0IGl0ZW0gPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgdXBkYXRlSXRlbSA9IGV2ZW50LmRldGFpbC51cGRhdGVJdGVtO1xuICAgIGlmIChpdGVtLmRpc2FibGVkIHx8IChpdGVtLmluZGV0ZXJtaW5hdGUgJiYgIXVwZGF0ZUl0ZW0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGFuY2VzdG9ycyA9IFtdO1xuICAgIGxldCBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQuY2xvc2VzdChcImNhbGNpdGUtdHJlZS1pdGVtXCIpO1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgIGFuY2VzdG9ycy5wdXNoKHBhcmVudCk7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudC5jbG9zZXN0KFwiY2FsY2l0ZS10cmVlLWl0ZW1cIik7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkSXRlbXMgPSBBcnJheS5mcm9tKGl0ZW0ucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtdHJlZS1pdGVtOm5vdChbZGlzYWJsZWRdKVwiKSk7XG4gICAgY29uc3QgY2hpbGRJdGVtc1dpdGhOb0NoaWxkcmVuID0gY2hpbGRJdGVtcy5maWx0ZXIoKGNoaWxkKSA9PiAhY2hpbGQuaGFzQ2hpbGRyZW4pO1xuICAgIGNvbnN0IGNoaWxkSXRlbXNXaXRoQ2hpbGRyZW4gPSBjaGlsZEl0ZW1zLmZpbHRlcigoY2hpbGQpID0+IGNoaWxkLmhhc0NoaWxkcmVuKTtcbiAgICBsZXQgZnV0dXJlU2VsZWN0ZWQ7XG4gICAgaWYgKHVwZGF0ZUl0ZW0pIHtcbiAgICAgIGZ1dHVyZVNlbGVjdGVkID0gaXRlbS5oYXNDaGlsZHJlbiA/ICEoaXRlbS5zZWxlY3RlZCB8fCBpdGVtLmluZGV0ZXJtaW5hdGUpIDogIWl0ZW0uc2VsZWN0ZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZnV0dXJlU2VsZWN0ZWQgPSBpdGVtLnNlbGVjdGVkO1xuICAgIH1cbiAgICBjaGlsZEl0ZW1zV2l0aE5vQ2hpbGRyZW4uZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLnNlbGVjdGVkID0gZnV0dXJlU2VsZWN0ZWQ7XG4gICAgICBlbC5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gdXBkYXRlSXRlbVN0YXRlKGNoaWxkSXRlbXMsIGl0ZW0pIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gY2hpbGRJdGVtcy5maWx0ZXIoKGNoaWxkKSA9PiBjaGlsZC5zZWxlY3RlZCk7XG4gICAgICBjb25zdCB1bnNlbGVjdGVkID0gY2hpbGRJdGVtcy5maWx0ZXIoKGNoaWxkKSA9PiAhY2hpbGQuc2VsZWN0ZWQpO1xuICAgICAgaXRlbS5zZWxlY3RlZCA9IHNlbGVjdGVkLmxlbmd0aCA9PT0gY2hpbGRJdGVtcy5sZW5ndGg7XG4gICAgICBpdGVtLmluZGV0ZXJtaW5hdGUgPSBzZWxlY3RlZC5sZW5ndGggPiAwICYmIHVuc2VsZWN0ZWQubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgY2hpbGRJdGVtc1dpdGhDaGlsZHJlbi5yZXZlcnNlKCkuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGNvbnN0IGRpcmVjdENoaWxkSXRlbXMgPSBBcnJheS5mcm9tKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6c2NvcGUgPiBjYWxjaXRlLXRyZWUgPiBjYWxjaXRlLXRyZWUtaXRlbVwiKSk7XG4gICAgICB1cGRhdGVJdGVtU3RhdGUoZGlyZWN0Q2hpbGRJdGVtcywgZWwpO1xuICAgIH0pO1xuICAgIGlmICh1cGRhdGVJdGVtKSB7XG4gICAgICBpZiAoaXRlbS5oYXNDaGlsZHJlbikge1xuICAgICAgICB1cGRhdGVJdGVtU3RhdGUoY2hpbGRJdGVtcywgaXRlbSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGZ1dHVyZVNlbGVjdGVkO1xuICAgICAgICBpdGVtLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgYW5jZXN0b3JzLmZvckVhY2goKGFuY2VzdG9yKSA9PiB7XG4gICAgICBjb25zdCBkZXNjZW5kYW50cyA9IG5vZGVMaXN0VG9BcnJheShhbmNlc3Rvci5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS10cmVlLWl0ZW1cIikpO1xuICAgICAgY29uc3QgYWN0aXZlRGVzY2VuZGFudHMgPSBkZXNjZW5kYW50cy5maWx0ZXIoKGVsKSA9PiBlbC5zZWxlY3RlZCk7XG4gICAgICBpZiAoYWN0aXZlRGVzY2VuZGFudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFuY2VzdG9yLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGFuY2VzdG9yLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaW5kZXRlcm1pbmF0ZSA9IGFjdGl2ZURlc2NlbmRhbnRzLmxlbmd0aCA8IGRlc2NlbmRhbnRzLmxlbmd0aDtcbiAgICAgIGFuY2VzdG9yLmluZGV0ZXJtaW5hdGUgPSBpbmRldGVybWluYXRlO1xuICAgICAgYW5jZXN0b3Iuc2VsZWN0ZWQgPSAhaW5kZXRlcm1pbmF0ZTtcbiAgICB9KTtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBub2RlTGlzdFRvQXJyYXkodGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS10cmVlLWl0ZW1cIikpLmZpbHRlcigoaSkgPT4gaS5zZWxlY3RlZCk7XG4gICAgaWYgKHVwZGF0ZUl0ZW0pIHtcbiAgICAgIHRoaXMuY2FsY2l0ZVRyZWVTZWxlY3QuZW1pdCgpO1xuICAgIH1cbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0Um9vdFRhYkluZGV4KCkge1xuICAgIHJldHVybiAhdGhpcy5jaGlsZCA/IDAgOiAtMTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiB0cmVlQ3NzOyB9XG59LCBbMSwgXCJjYWxjaXRlLXRyZWVcIiwge1xuICAgIFwibGluZXNcIjogWzE1NDBdLFxuICAgIFwiY2hpbGRcIjogWzE1NDBdLFxuICAgIFwic2NhbGVcIjogWzE1MzddLFxuICAgIFwic2VsZWN0aW9uTW9kZVwiOiBbMTUzNywgXCJzZWxlY3Rpb24tbW9kZVwiXSxcbiAgICBcInNlbGVjdGVkSXRlbXNcIjogWzEwNDBdXG4gIH0sIFtbMCwgXCJmb2N1c1wiLCBcIm9uRm9jdXNcIl0sIFswLCBcImZvY3VzaW5cIiwgXCJvbkZvY3VzSW5cIl0sIFswLCBcImZvY3Vzb3V0XCIsIFwib25Gb2N1c091dFwiXSwgWzAsIFwiY2FsY2l0ZUludGVybmFsVHJlZUl0ZW1TZWxlY3RcIiwgXCJvbkludGVybmFsVHJlZUl0ZW1TZWxlY3RcIl1dXSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50JDEoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcImNhbGNpdGUtdHJlZVwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwiY2FsY2l0ZS10cmVlXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgVHJlZSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cbmRlZmluZUN1c3RvbUVsZW1lbnQkMSgpO1xuXG5jb25zdCBDYWxjaXRlVHJlZSA9IFRyZWU7XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gZGVmaW5lQ3VzdG9tRWxlbWVudCQxO1xuXG5leHBvcnQgeyBDYWxjaXRlVHJlZSwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9