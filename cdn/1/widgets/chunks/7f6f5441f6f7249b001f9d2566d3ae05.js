"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_stencil_core_internal_client_index_js"],{

/***/ "./node_modules/@stencil/core/internal/client/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BUILD: () => (/* reexport safe */ _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD),
/* harmony export */   Build: () => (/* binding */ Build),
/* harmony export */   CSS: () => (/* binding */ CSS),
/* harmony export */   Context: () => (/* binding */ Context),
/* harmony export */   Env: () => (/* reexport safe */ _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.Env),
/* harmony export */   Fragment: () => (/* binding */ Fragment),
/* harmony export */   H: () => (/* binding */ H),
/* harmony export */   HTMLElement: () => (/* binding */ H),
/* harmony export */   Host: () => (/* binding */ Host),
/* harmony export */   NAMESPACE: () => (/* reexport safe */ _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.NAMESPACE),
/* harmony export */   STENCIL_DEV_MODE: () => (/* binding */ STENCIL_DEV_MODE),
/* harmony export */   addHostEventListeners: () => (/* binding */ addHostEventListeners),
/* harmony export */   bootstrapLazy: () => (/* binding */ bootstrapLazy),
/* harmony export */   cmpModules: () => (/* binding */ cmpModules),
/* harmony export */   connectedCallback: () => (/* binding */ connectedCallback),
/* harmony export */   consoleDevError: () => (/* binding */ consoleDevError),
/* harmony export */   consoleDevInfo: () => (/* binding */ consoleDevInfo),
/* harmony export */   consoleDevWarn: () => (/* binding */ consoleDevWarn),
/* harmony export */   consoleError: () => (/* binding */ consoleError),
/* harmony export */   createEvent: () => (/* binding */ createEvent),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement),
/* harmony export */   disconnectedCallback: () => (/* binding */ disconnectedCallback),
/* harmony export */   doc: () => (/* binding */ doc),
/* harmony export */   forceModeUpdate: () => (/* binding */ forceModeUpdate),
/* harmony export */   forceUpdate: () => (/* binding */ forceUpdate),
/* harmony export */   getAssetPath: () => (/* binding */ getAssetPath),
/* harmony export */   getConnect: () => (/* binding */ getConnect),
/* harmony export */   getContext: () => (/* binding */ getContext),
/* harmony export */   getElement: () => (/* binding */ getElement),
/* harmony export */   getHostRef: () => (/* binding */ getHostRef),
/* harmony export */   getMode: () => (/* binding */ getMode),
/* harmony export */   getRenderingRef: () => (/* binding */ getRenderingRef),
/* harmony export */   getValue: () => (/* binding */ getValue),
/* harmony export */   h: () => (/* binding */ h),
/* harmony export */   insertVdomAnnotations: () => (/* binding */ insertVdomAnnotations),
/* harmony export */   isMemberInElement: () => (/* binding */ isMemberInElement),
/* harmony export */   loadModule: () => (/* binding */ loadModule),
/* harmony export */   modeResolutionChain: () => (/* binding */ modeResolutionChain),
/* harmony export */   nextTick: () => (/* binding */ nextTick),
/* harmony export */   parsePropertyValue: () => (/* binding */ parsePropertyValue),
/* harmony export */   plt: () => (/* binding */ plt),
/* harmony export */   postUpdateComponent: () => (/* binding */ postUpdateComponent),
/* harmony export */   promiseResolve: () => (/* binding */ promiseResolve),
/* harmony export */   proxyComponent: () => (/* binding */ proxyComponent),
/* harmony export */   proxyCustomElement: () => (/* binding */ proxyCustomElement),
/* harmony export */   readTask: () => (/* binding */ readTask),
/* harmony export */   registerHost: () => (/* binding */ registerHost),
/* harmony export */   registerInstance: () => (/* binding */ registerInstance),
/* harmony export */   renderVdom: () => (/* binding */ renderVdom),
/* harmony export */   setAssetPath: () => (/* binding */ setAssetPath),
/* harmony export */   setErrorHandler: () => (/* binding */ setErrorHandler),
/* harmony export */   setMode: () => (/* binding */ setMode),
/* harmony export */   setNonce: () => (/* binding */ setNonce),
/* harmony export */   setPlatformHelpers: () => (/* binding */ setPlatformHelpers),
/* harmony export */   setPlatformOptions: () => (/* binding */ setPlatformOptions),
/* harmony export */   setValue: () => (/* binding */ setValue),
/* harmony export */   styles: () => (/* binding */ styles),
/* harmony export */   supportsConstructableStylesheets: () => (/* binding */ supportsConstructableStylesheets),
/* harmony export */   supportsListenerOptions: () => (/* binding */ supportsListenerOptions),
/* harmony export */   supportsShadow: () => (/* binding */ supportsShadow),
/* harmony export */   win: () => (/* binding */ win),
/* harmony export */   writeTask: () => (/* binding */ writeTask)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/app-data */ "./node_modules/@stencil/core/internal/app-data/index.js");
/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/snabbdom/snabbdom/blob/master/LICENSE
 *
 * Modified for Stencil's renderer and slot projection
 */
let scopeId;
let contentRef;
let hostTagName;
let customError;
let i = 0;
let useNativeShadowDom = false;
let checkSlotFallbackVisibility = false;
let checkSlotRelocate = false;
let isSvgMode = false;
let renderingRef = null;
let queueCongestion = 0;
let queuePending = false;
/*
 Stencil Client Platform v2.22.3 | MIT Licensed | https://stenciljs.com
 */

const Build = {
    isDev: _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev ? true : false,
    isBrowser: true,
    isServer: false,
    isTesting: _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isTesting ? true : false,
};
const Context = {};
const getAssetPath = (path) => {
    const assetUrl = new URL(path, plt.$resourcesUrl$);
    return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
};
const setAssetPath = (path) => (plt.$resourcesUrl$ = path);
const createTime = (fnName, tagName = '') => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.profile && performance.mark) {
        const key = `st:${fnName}:${tagName}:${i++}`;
        // Start
        performance.mark(key);
        // End
        return () => performance.measure(`[Stencil] ${fnName}() <${tagName}>`, key);
    }
    else {
        return () => {
            return;
        };
    }
};
const uniqueTime = (key, measureText) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.profile && performance.mark) {
        if (performance.getEntriesByName(key, 'mark').length === 0) {
            performance.mark(key);
        }
        return () => {
            if (performance.getEntriesByName(measureText, 'measure').length === 0) {
                performance.measure(measureText, key);
            }
        };
    }
    else {
        return () => {
            return;
        };
    }
};
const inspect = (ref) => {
    const hostRef = getHostRef(ref);
    if (!hostRef) {
        return undefined;
    }
    const flags = hostRef.$flags$;
    const hostElement = hostRef.$hostElement$;
    return {
        renderCount: hostRef.$renderCount$,
        flags: {
            hasRendered: !!(flags & 2 /* HOST_FLAGS.hasRendered */),
            hasConnected: !!(flags & 1 /* HOST_FLAGS.hasConnected */),
            isWaitingForChildren: !!(flags & 4 /* HOST_FLAGS.isWaitingForChildren */),
            isConstructingInstance: !!(flags & 8 /* HOST_FLAGS.isConstructingInstance */),
            isQueuedForUpdate: !!(flags & 16 /* HOST_FLAGS.isQueuedForUpdate */),
            hasInitializedComponent: !!(flags & 32 /* HOST_FLAGS.hasInitializedComponent */),
            hasLoadedComponent: !!(flags & 64 /* HOST_FLAGS.hasLoadedComponent */),
            isWatchReady: !!(flags & 128 /* HOST_FLAGS.isWatchReady */),
            isListenReady: !!(flags & 256 /* HOST_FLAGS.isListenReady */),
            needsRerender: !!(flags & 512 /* HOST_FLAGS.needsRerender */),
        },
        instanceValues: hostRef.$instanceValues$,
        ancestorComponent: hostRef.$ancestorComponent$,
        hostElement,
        lazyInstance: hostRef.$lazyInstance$,
        vnode: hostRef.$vnode$,
        modeName: hostRef.$modeName$,
        onReadyPromise: hostRef.$onReadyPromise$,
        onReadyResolve: hostRef.$onReadyResolve$,
        onInstancePromise: hostRef.$onInstancePromise$,
        onInstanceResolve: hostRef.$onInstanceResolve$,
        onRenderResolve: hostRef.$onRenderResolve$,
        queuedListeners: hostRef.$queuedListeners$,
        rmListeners: hostRef.$rmListeners$,
        ['s-id']: hostElement['s-id'],
        ['s-cr']: hostElement['s-cr'],
        ['s-lr']: hostElement['s-lr'],
        ['s-p']: hostElement['s-p'],
        ['s-rc']: hostElement['s-rc'],
        ['s-sc']: hostElement['s-sc'],
    };
};
const installDevTools = () => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.devTools) {
        const stencil = (win.stencil = win.stencil || {});
        const originalInspect = stencil.inspect;
        stencil.inspect = (ref) => {
            let result = inspect(ref);
            if (!result && typeof originalInspect === 'function') {
                result = originalInspect(ref);
            }
            return result;
        };
    }
};
const CONTENT_REF_ID = 'r';
const ORG_LOCATION_ID = 'o';
const SLOT_NODE_ID = 's';
const TEXT_NODE_ID = 't';
const HYDRATE_ID = 's-id';
const HYDRATED_STYLE_ID = 'sty-id';
const HYDRATE_CHILD_ID = 'c-id';
const HYDRATED_CSS = '{visibility:hidden}.hydrated{visibility:inherit}';
const XLINK_NS = 'http://www.w3.org/1999/xlink';
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
const EMPTY_OBJ = {};
/**
 * Namespaces
 */
const SVG_NS = 'http://www.w3.org/2000/svg';
const HTML_NS = 'http://www.w3.org/1999/xhtml';
const isDef = (v) => v != null;
const isComplexType = (o) => {
    // https://jsperf.com/typeof-fn-object/5
    o = typeof o;
    return o === 'object' || o === 'function';
};
/**
 * Helper method for querying a `meta` tag that contains a nonce value
 * out of a DOM's head.
 *
 * @param doc The DOM containing the `head` to query against
 * @returns The content of the meta tag representing the nonce value, or `undefined` if no tag
 * exists or the tag has no content.
 */
function queryNonceMetaTagContent(doc) {
    var _a, _b, _c;
    return (_c = (_b = (_a = doc.head) === null || _a === void 0 ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) === null || _b === void 0 ? void 0 : _b.getAttribute('content')) !== null && _c !== void 0 ? _c : undefined;
}
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
const h = (nodeName, vnodeData, ...children) => {
    let child = null;
    let key = null;
    let slotName = null;
    let simple = false;
    let lastSimple = false;
    const vNodeChildren = [];
    const walk = (c) => {
        for (let i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if ((simple = typeof nodeName !== 'function' && !isComplexType(child))) {
                    child = String(child);
                }
                else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev && typeof nodeName !== 'function' && child.$flags$ === undefined) {
                    consoleDevError(`vNode passed as children has unexpected type.
Make sure it's using the correct h() function.
Empty objects can also be the cause, look for JSX comments that became objects.`);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? newVNode(null, child) : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev && nodeName === 'input') {
            validateInputProperties(vnodeData);
        }
        // normalize class / classname attributes
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomKey && vnodeData.key) {
            key = vnodeData.key;
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && vnodeData.name) {
            slotName = vnodeData.name;
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomClass) {
            const classData = vnodeData.className || vnodeData.class;
            if (classData) {
                vnodeData.class =
                    typeof classData !== 'object'
                        ? classData
                        : Object.keys(classData)
                            .filter((k) => classData[k])
                            .join(' ');
            }
        }
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev && vNodeChildren.some(isHost)) {
        consoleDevError(`The <Host> must be the single root component. Make sure:
- You are NOT using hostData() and <Host> in the same component.
- <Host> is used once, and it's the single root component of the render() function.`);
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomFunctional && typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
    }
    const vnode = newVNode(nodeName, null);
    vnode.$attrs$ = vnodeData;
    if (vNodeChildren.length > 0) {
        vnode.$children$ = vNodeChildren;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomKey) {
        vnode.$key$ = key;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
        vnode.$name$ = slotName;
    }
    return vnode;
};
/**
 * A utility function for creating a virtual DOM node from a tag and some
 * possible text content.
 *
 * @param tag the tag for this element
 * @param text possible text content for the node
 * @returns a newly-minted virtual DOM node
 */
const newVNode = (tag, text) => {
    const vnode = {
        $flags$: 0,
        $tag$: tag,
        $text$: text,
        $elm$: null,
        $children$: null,
    };
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomAttribute) {
        vnode.$attrs$ = null;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomKey) {
        vnode.$key$ = null;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
        vnode.$name$ = null;
    }
    return vnode;
};
const Host = {};
/**
 * Check whether a given node is a Host node or not
 *
 * @param node the virtual DOM node to check
 * @returns whether it's a Host node or not
 */
const isHost = (node) => node && node.$tag$ === Host;
/**
 * Implementation of {@link d.FunctionalUtilities} for Stencil's VDom.
 *
 * Note that these functions convert from {@link d.VNode} to
 * {@link d.ChildNode} to give functional component developers a friendly
 * interface.
 */
const vdomFnUtils = {
    forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
    map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate),
};
/**
 * Convert a {@link d.VNode} to a {@link d.ChildNode} in order to present a
 * friendlier public interface (hence, 'convertToPublic').
 *
 * @param node the virtual DOM node to convert
 * @returns a converted child node
 */
const convertToPublic = (node) => ({
    vattrs: node.$attrs$,
    vchildren: node.$children$,
    vkey: node.$key$,
    vname: node.$name$,
    vtag: node.$tag$,
    vtext: node.$text$,
});
/**
 * Convert a {@link d.ChildNode} back to an equivalent {@link d.VNode} in
 * order to use the resulting object in the virtual DOM. The initial object was
 * likely created as part of presenting a public API, so converting it back
 * involved making it 'private' again (hence, `convertToPrivate`).
 *
 * @param node the child node to convert
 * @returns a converted virtual DOM node
 */
const convertToPrivate = (node) => {
    if (typeof node.vtag === 'function') {
        const vnodeData = Object.assign({}, node.vattrs);
        if (node.vkey) {
            vnodeData.key = node.vkey;
        }
        if (node.vname) {
            vnodeData.name = node.vname;
        }
        return h(node.vtag, vnodeData, ...(node.vchildren || []));
    }
    const vnode = newVNode(node.vtag, node.vtext);
    vnode.$attrs$ = node.vattrs;
    vnode.$children$ = node.vchildren;
    vnode.$key$ = node.vkey;
    vnode.$name$ = node.vname;
    return vnode;
};
/**
 * Validates the ordering of attributes on an input element
 *
 * @param inputElm the element to validate
 */
const validateInputProperties = (inputElm) => {
    const props = Object.keys(inputElm);
    const value = props.indexOf('value');
    if (value === -1) {
        return;
    }
    const typeIndex = props.indexOf('type');
    const minIndex = props.indexOf('min');
    const maxIndex = props.indexOf('max');
    const stepIndex = props.indexOf('step');
    if (value < typeIndex || value < minIndex || value < maxIndex || value < stepIndex) {
        consoleDevWarn(`The "value" prop of <input> should be set after "min", "max", "type" and "step"`);
    }
};
const initializeClientHydrate = (hostElm, tagName, hostId, hostRef) => {
    const endHydrate = createTime('hydrateClient', tagName);
    const shadowRoot = hostElm.shadowRoot;
    const childRenderNodes = [];
    const slotNodes = [];
    const shadowRootNodes = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && shadowRoot ? [] : null;
    const vnode = (hostRef.$vnode$ = newVNode(tagName, null));
    if (!plt.$orgLocNodes$) {
        initializeDocumentHydrate(doc.body, (plt.$orgLocNodes$ = new Map()));
    }
    hostElm[HYDRATE_ID] = hostId;
    hostElm.removeAttribute(HYDRATE_ID);
    clientHydrate(vnode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, hostElm, hostId);
    childRenderNodes.map((c) => {
        const orgLocationId = c.$hostId$ + '.' + c.$nodeId$;
        const orgLocationNode = plt.$orgLocNodes$.get(orgLocationId);
        const node = c.$elm$;
        if (orgLocationNode && supportsShadow && orgLocationNode['s-en'] === '') {
            orgLocationNode.parentNode.insertBefore(node, orgLocationNode.nextSibling);
        }
        if (!shadowRoot) {
            node['s-hn'] = tagName;
            if (orgLocationNode) {
                node['s-ol'] = orgLocationNode;
                node['s-ol']['s-nr'] = node;
            }
        }
        plt.$orgLocNodes$.delete(orgLocationId);
    });
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && shadowRoot) {
        shadowRootNodes.map((shadowRootNode) => {
            if (shadowRootNode) {
                shadowRoot.appendChild(shadowRootNode);
            }
        });
    }
    endHydrate();
};
const clientHydrate = (parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId) => {
    let childNodeType;
    let childIdSplt;
    let childVNode;
    let i;
    if (node.nodeType === 1 /* NODE_TYPE.ElementNode */) {
        childNodeType = node.getAttribute(HYDRATE_CHILD_ID);
        if (childNodeType) {
            // got the node data from the element's attribute
            // `${hostId}.${nodeId}.${depth}.${index}`
            childIdSplt = childNodeType.split('.');
            if (childIdSplt[0] === hostId || childIdSplt[0] === '0') {
                childVNode = {
                    $flags$: 0,
                    $hostId$: childIdSplt[0],
                    $nodeId$: childIdSplt[1],
                    $depth$: childIdSplt[2],
                    $index$: childIdSplt[3],
                    $tag$: node.tagName.toLowerCase(),
                    $elm$: node,
                    $attrs$: null,
                    $children$: null,
                    $key$: null,
                    $name$: null,
                    $text$: null,
                };
                childRenderNodes.push(childVNode);
                node.removeAttribute(HYDRATE_CHILD_ID);
                // this is a new child vnode
                // so ensure its parent vnode has the vchildren array
                if (!parentVNode.$children$) {
                    parentVNode.$children$ = [];
                }
                // add our child vnode to a specific index of the vnode's children
                parentVNode.$children$[childVNode.$index$] = childVNode;
                // this is now the new parent vnode for all the next child checks
                parentVNode = childVNode;
                if (shadowRootNodes && childVNode.$depth$ === '0') {
                    shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                }
            }
        }
        // recursively drill down, end to start so we can remove nodes
        for (i = node.childNodes.length - 1; i >= 0; i--) {
            clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.childNodes[i], hostId);
        }
        if (node.shadowRoot) {
            // keep drilling down through the shadow root nodes
            for (i = node.shadowRoot.childNodes.length - 1; i >= 0; i--) {
                clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.shadowRoot.childNodes[i], hostId);
            }
        }
    }
    else if (node.nodeType === 8 /* NODE_TYPE.CommentNode */) {
        // `${COMMENT_TYPE}.${hostId}.${nodeId}.${depth}.${index}`
        childIdSplt = node.nodeValue.split('.');
        if (childIdSplt[1] === hostId || childIdSplt[1] === '0') {
            // comment node for either the host id or a 0 host id
            childNodeType = childIdSplt[0];
            childVNode = {
                $flags$: 0,
                $hostId$: childIdSplt[1],
                $nodeId$: childIdSplt[2],
                $depth$: childIdSplt[3],
                $index$: childIdSplt[4],
                $elm$: node,
                $attrs$: null,
                $children$: null,
                $key$: null,
                $name$: null,
                $tag$: null,
                $text$: null,
            };
            if (childNodeType === TEXT_NODE_ID) {
                childVNode.$elm$ = node.nextSibling;
                if (childVNode.$elm$ && childVNode.$elm$.nodeType === 3 /* NODE_TYPE.TextNode */) {
                    childVNode.$text$ = childVNode.$elm$.textContent;
                    childRenderNodes.push(childVNode);
                    // remove the text comment since it's no longer needed
                    node.remove();
                    if (!parentVNode.$children$) {
                        parentVNode.$children$ = [];
                    }
                    parentVNode.$children$[childVNode.$index$] = childVNode;
                    if (shadowRootNodes && childVNode.$depth$ === '0') {
                        shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                    }
                }
            }
            else if (childVNode.$hostId$ === hostId) {
                // this comment node is specifcally for this host id
                if (childNodeType === SLOT_NODE_ID) {
                    // `${SLOT_NODE_ID}.${hostId}.${nodeId}.${depth}.${index}.${slotName}`;
                    childVNode.$tag$ = 'slot';
                    if (childIdSplt[5]) {
                        node['s-sn'] = childVNode.$name$ = childIdSplt[5];
                    }
                    else {
                        node['s-sn'] = '';
                    }
                    node['s-sr'] = true;
                    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && shadowRootNodes) {
                        // browser support shadowRoot and this is a shadow dom component
                        // create an actual slot element
                        childVNode.$elm$ = doc.createElement(childVNode.$tag$);
                        if (childVNode.$name$) {
                            // add the slot name attribute
                            childVNode.$elm$.setAttribute('name', childVNode.$name$);
                        }
                        // insert the new slot element before the slot comment
                        node.parentNode.insertBefore(childVNode.$elm$, node);
                        // remove the slot comment since it's not needed for shadow
                        node.remove();
                        if (childVNode.$depth$ === '0') {
                            shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                        }
                    }
                    slotNodes.push(childVNode);
                    if (!parentVNode.$children$) {
                        parentVNode.$children$ = [];
                    }
                    parentVNode.$children$[childVNode.$index$] = childVNode;
                }
                else if (childNodeType === CONTENT_REF_ID) {
                    // `${CONTENT_REF_ID}.${hostId}`;
                    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && shadowRootNodes) {
                        // remove the content ref comment since it's not needed for shadow
                        node.remove();
                    }
                    else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
                        hostElm['s-cr'] = node;
                        node['s-cn'] = true;
                    }
                }
            }
        }
    }
    else if (parentVNode && parentVNode.$tag$ === 'style') {
        const vnode = newVNode(null, node.textContent);
        vnode.$elm$ = node;
        vnode.$index$ = '0';
        parentVNode.$children$ = [vnode];
    }
};
const initializeDocumentHydrate = (node, orgLocNodes) => {
    if (node.nodeType === 1 /* NODE_TYPE.ElementNode */) {
        let i = 0;
        for (; i < node.childNodes.length; i++) {
            initializeDocumentHydrate(node.childNodes[i], orgLocNodes);
        }
        if (node.shadowRoot) {
            for (i = 0; i < node.shadowRoot.childNodes.length; i++) {
                initializeDocumentHydrate(node.shadowRoot.childNodes[i], orgLocNodes);
            }
        }
    }
    else if (node.nodeType === 8 /* NODE_TYPE.CommentNode */) {
        const childIdSplt = node.nodeValue.split('.');
        if (childIdSplt[0] === ORG_LOCATION_ID) {
            orgLocNodes.set(childIdSplt[1] + '.' + childIdSplt[2], node);
            node.nodeValue = '';
            // useful to know if the original location is
            // the root light-dom of a shadow dom component
            node['s-en'] = childIdSplt[3];
        }
    }
};
// Private
const computeMode = (elm) => modeResolutionChain.map((h) => h(elm)).find((m) => !!m);
// Public
const setMode = (handler) => modeResolutionChain.push(handler);
const getMode = (ref) => getHostRef(ref).$modeName$;
/**
 * Parse a new property value for a given property type.
 *
 * While the prop value can reasonably be expected to be of `any` type as far as TypeScript's type checker is concerned,
 * it is not safe to assume that the string returned by evaluating `typeof propValue` matches:
 *   1. `any`, the type given to `propValue` in the function signature
 *   2. the type stored from `propType`.
 *
 * This function provides the capability to parse/coerce a property's value to potentially any other JavaScript type.
 *
 * Property values represented in TSX preserve their type information. In the example below, the number 0 is passed to
 * a component. This `propValue` will preserve its type information (`typeof propValue === 'number'`). Note that is
 * based on the type of the value being passed in, not the type declared of the class member decorated with `@Prop`.
 * ```tsx
 * <my-cmp prop-val={0}></my-cmp>
 * ```
 *
 * HTML prop values on the other hand, will always a string
 *
 * @param propValue the new value to coerce to some type
 * @param propType the type of the prop, expressed as a binary number
 * @returns the parsed/coerced value
 */
const parsePropertyValue = (propValue, propType) => {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.propBoolean && propType & 4 /* MEMBER_FLAGS.Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return propValue === 'false' ? false : propValue === '' || !!propValue;
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.propNumber && propType & 2 /* MEMBER_FLAGS.Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.propString && propType & 1 /* MEMBER_FLAGS.String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
const getElement = (ref) => (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? getHostRef(ref).$hostElement$ : ref);
const createEvent = (ref, name, flags) => {
    const elm = getElement(ref);
    return {
        emit: (detail) => {
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev && !elm.isConnected) {
                consoleDevWarn(`The "${name}" event was emitted, but the dispatcher node is no longer connected to the dom.`);
            }
            return emitEvent(elm, name, {
                bubbles: !!(flags & 4 /* EVENT_FLAGS.Bubbles */),
                composed: !!(flags & 2 /* EVENT_FLAGS.Composed */),
                cancelable: !!(flags & 1 /* EVENT_FLAGS.Cancellable */),
                detail,
            });
        },
    };
};
/**
 * Helper function to create & dispatch a custom Event on a provided target
 * @param elm the target of the Event
 * @param name the name to give the custom Event
 * @param opts options for configuring a custom Event
 * @returns the custom Event
 */
const emitEvent = (elm, name, opts) => {
    const ev = plt.ce(name, opts);
    elm.dispatchEvent(ev);
    return ev;
};
const rootAppliedStyles = /*@__PURE__*/ new WeakMap();
const registerStyle = (scopeId, cssText, allowCS) => {
    let style = styles.get(scopeId);
    if (supportsConstructableStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        if (typeof style === 'string') {
            style = cssText;
        }
        else {
            style.replaceSync(cssText);
        }
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
    var _a;
    let scopeId = getScopeId(cmpMeta, mode);
    const style = styles.get(scopeId);
    if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.attachStyles) {
        return scopeId;
    }
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = styleContainerNode.nodeType === 11 /* NODE_TYPE.DocumentFragment */ ? styleContainerNode : doc;
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            let appliedStyles = rootAppliedStyles.get(styleContainerNode);
            let styleElm;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, (appliedStyles = new Set()));
            }
            if (!appliedStyles.has(scopeId)) {
                if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateClientSide &&
                    styleContainerNode.host &&
                    (styleElm = styleContainerNode.querySelector(`[${HYDRATED_STYLE_ID}="${scopeId}"]`))) {
                    // This is only happening on native shadow-dom, do not needs CSS var shim
                    styleElm.innerHTML = style;
                }
                else {
                    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cssVarShim && plt.$cssShim$) {
                        styleElm = plt.$cssShim$.createHostStyle(hostElm, scopeId, style, !!(cmpMeta.$flags$ & 10 /* CMP_FLAGS.needsScopedEncapsulation */));
                        const newScopeId = styleElm['s-sc'];
                        if (newScopeId) {
                            scopeId = newScopeId;
                            // we don't want to add this styleID to the appliedStyles Set
                            // since the cssVarShim might need to apply several different
                            // stylesheets for the same component
                            appliedStyles = null;
                        }
                    }
                    else {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    // Apply CSP nonce to the style tag if it exists
                    const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
                    if (nonce != null) {
                        styleElm.setAttribute('nonce', nonce);
                    }
                    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hotModuleReplacement) {
                        styleElm.setAttribute(HYDRATED_STYLE_ID, scopeId);
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.constructableCSS && !styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
        }
    }
    return scopeId;
};
const attachStyles = (hostRef) => {
    const cmpMeta = hostRef.$cmpMeta$;
    const elm = hostRef.$hostElement$;
    const flags = cmpMeta.$flags$;
    const endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
    const scopeId = addStyle(_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && supportsShadow && elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta, hostRef.$modeName$, elm);
    if ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scoped) && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cssAnnotations && flags & 10 /* CMP_FLAGS.needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = scopeId;
        elm.classList.add(scopeId + '-h');
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scoped && flags & 2 /* CMP_FLAGS.scopedCssEncapsulation */) {
            elm.classList.add(scopeId + '-s');
        }
    }
    endAttachStyles();
};
const getScopeId = (cmp, mode) => 'sc-' + (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.mode && mode && cmp.$flags$ & 32 /* CMP_FLAGS.hasMode */ ? cmp.$tagName$ + '-' + mode : cmp.$tagName$);
const convertScopedToShadow = (css) => css.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, '$1{');
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
    if (oldValue !== newValue) {
        let isProp = isMemberInElement(elm, memberName);
        let ln = memberName.toLowerCase();
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomClass && memberName === 'class') {
            const classList = elm.classList;
            const oldClasses = parseClassList(oldValue);
            const newClasses = parseClassList(newValue);
            classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
            classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
        }
        else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomStyle && memberName === 'style') {
            // update style attribute, css properties and values
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable) {
                for (const prop in oldValue) {
                    if (!newValue || newValue[prop] == null) {
                        if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide && prop.includes('-')) {
                            elm.style.removeProperty(prop);
                        }
                        else {
                            elm.style[prop] = '';
                        }
                    }
                }
            }
            for (const prop in newValue) {
                if (!oldValue || newValue[prop] !== oldValue[prop]) {
                    if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide && prop.includes('-')) {
                        elm.style.setProperty(prop, newValue[prop]);
                    }
                    else {
                        elm.style[prop] = newValue[prop];
                    }
                }
            }
        }
        else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomKey && memberName === 'key')
            ;
        else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomRef && memberName === 'ref') {
            // minifier will clean this up
            if (newValue) {
                newValue(elm);
            }
        }
        else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomListener &&
            (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? !isProp : !elm.__lookupSetter__(memberName)) &&
            memberName[0] === 'o' &&
            memberName[1] === 'n') {
            // Event Handlers
            // so if the member name starts with "on" and the 3rd characters is
            // a capital letter, and it's not already a member on the element,
            // then we're assuming it's an event listener
            if (memberName[2] === '-') {
                // on- prefixed events
                // allows to be explicit about the dom event to listen without any magic
                // under the hood:
                // <my-cmp on-click> // listens for "click"
                // <my-cmp on-Click> // listens for "Click"
                // <my-cmp on-ionChange> // listens for "ionChange"
                // <my-cmp on-EVENTS> // listens for "EVENTS"
                memberName = memberName.slice(3);
            }
            else if (isMemberInElement(win, ln)) {
                // standard event
                // the JSX attribute could have been "onMouseOver" and the
                // member name "onmouseover" is on the window's prototype
                // so let's add the listener "mouseover", which is all lowercased
                memberName = ln.slice(2);
            }
            else {
                // custom event
                // the JSX attribute could have been "onMyCustomEvent"
                // so let's trim off the "on" prefix and lowercase the first character
                // and add the listener "myCustomEvent"
                // except for the first character, we keep the event name case
                memberName = ln[2] + memberName.slice(3);
            }
            if (oldValue) {
                plt.rel(elm, memberName, oldValue, false);
            }
            if (newValue) {
                plt.ael(elm, memberName, newValue, false);
            }
        }
        else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomPropOrAttr) {
            // Set property if it exists and it's not a SVG
            const isComplex = isComplexType(newValue);
            if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
                try {
                    if (!elm.tagName.includes('-')) {
                        const n = newValue == null ? '' : newValue;
                        // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                        if (memberName === 'list') {
                            isProp = false;
                        }
                        else if (oldValue == null || elm[memberName] != n) {
                            elm[memberName] = n;
                        }
                    }
                    else {
                        elm[memberName] = newValue;
                    }
                }
                catch (e) { }
            }
            /**
             * Need to manually update attribute if:
             * - memberName is not an attribute
             * - if we are rendering the host element in order to reflect attribute
             * - if it's a SVG, since properties might not work in <svg>
             * - if the newValue is null/undefined or 'false'.
             */
            let xlink = false;
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomXlink) {
                if (ln !== (ln = ln.replace(/^xlink\:?/, ''))) {
                    memberName = ln;
                    xlink = true;
                }
            }
            if (newValue == null || newValue === false) {
                if (newValue !== false || elm.getAttribute(memberName) === '') {
                    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomXlink && xlink) {
                        elm.removeAttributeNS(XLINK_NS, memberName);
                    }
                    else {
                        elm.removeAttribute(memberName);
                    }
                }
            }
            else if ((!isProp || flags & 4 /* VNODE_FLAGS.isHost */ || isSvg) && !isComplex) {
                newValue = newValue === true ? '' : newValue;
                if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomXlink && xlink) {
                    elm.setAttributeNS(XLINK_NS, memberName, newValue);
                }
                else {
                    elm.setAttribute(memberName, newValue);
                }
            }
        }
    }
};
const parseClassListRegex = /\s/;
const parseClassList = (value) => (!value ? [] : value.split(parseClassListRegex));
const updateElement = (oldVnode, newVnode, isSvgMode, memberName) => {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    const elm = newVnode.$elm$.nodeType === 11 /* NODE_TYPE.DocumentFragment */ && newVnode.$elm$.host
        ? newVnode.$elm$.host
        : newVnode.$elm$;
    const oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable) {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (!(memberName in newVnodeAttrs)) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
/**
 * Create a DOM Node corresponding to one of the children of a given VNode.
 *
 * @param oldParentVNode the parent VNode from the previous render
 * @param newParentVNode the parent VNode from the current render
 * @param childIndex the index of the VNode, in the _new_ parent node's
 * children, for which we will create a new DOM node
 * @param parentElm the parent DOM node which our new node will be a child of
 * @returns the newly created node
 */
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
    // tslint:disable-next-line: prefer-const
    const newVNode = newParentVNode.$children$[childIndex];
    let i = 0;
    let elm;
    let childNode;
    let oldVNode;
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && !useNativeShadowDom) {
        // remember for later we need to check to relocate nodes
        checkSlotRelocate = true;
        if (newVNode.$tag$ === 'slot') {
            if (scopeId) {
                // scoped css needs to add its scoped id to the parent element
                parentElm.classList.add(scopeId + '-s');
            }
            newVNode.$flags$ |= newVNode.$children$
                ? // slot element has fallback content
                    2 /* VNODE_FLAGS.isSlotFallback */
                : // slot element does not have fallback content
                    1 /* VNODE_FLAGS.isSlotReference */;
        }
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev && newVNode.$elm$) {
        consoleDevError(`The JSX ${newVNode.$text$ !== null ? `"${newVNode.$text$}" text` : `"${newVNode.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`);
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomText && newVNode.$text$ !== null) {
        // create text node
        elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && newVNode.$flags$ & 1 /* VNODE_FLAGS.isSlotReference */) {
        // create a slot reference node
        elm = newVNode.$elm$ =
            _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDebug || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide ? slotReferenceDebugNode(newVNode) : doc.createTextNode('');
    }
    else {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.svg && !isSvgMode) {
            isSvgMode = newVNode.$tag$ === 'svg';
        }
        // create element
        elm = newVNode.$elm$ = (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.svg
            ? doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && newVNode.$flags$ & 2 /* VNODE_FLAGS.isSlotFallback */
                ? 'slot-fb'
                : newVNode.$tag$)
            : doc.createElement(_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && newVNode.$flags$ & 2 /* VNODE_FLAGS.isSlotFallback */
                ? 'slot-fb'
                : newVNode.$tag$));
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.svg && isSvgMode && newVNode.$tag$ === 'foreignObject') {
            isSvgMode = false;
        }
        // add css classes, attrs, props, listeners, etc.
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomAttribute) {
            updateElement(null, newVNode, isSvgMode);
        }
        if ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scoped) && isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i, elm);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.svg) {
            if (newVNode.$tag$ === 'svg') {
                // Only reset the SVG context when we're exiting <svg> element
                isSvgMode = false;
            }
            else if (elm.tagName === 'foreignObject') {
                // Reenter SVG context when we're exiting <foreignObject> element
                isSvgMode = true;
            }
        }
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
        elm['s-hn'] = hostTagName;
        if (newVNode.$flags$ & (2 /* VNODE_FLAGS.isSlotFallback */ | 1 /* VNODE_FLAGS.isSlotReference */)) {
            // remember the content reference comment
            elm['s-sr'] = true;
            // remember the content reference comment
            elm['s-cr'] = contentRef;
            // remember the slot name, or empty string for default slot
            elm['s-sn'] = newVNode.$name$ || '';
            // check if we've got an old vnode for this slot
            oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
            if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
                // we've got an old slot vnode and the wrapper is being replaced
                // so let's move the old slot content back to it's original location
                putBackInOriginalLocation(oldParentVNode.$elm$, false);
            }
        }
    }
    return elm;
};
const putBackInOriginalLocation = (parentElm, recursive) => {
    plt.$flags$ |= 1 /* PLATFORM_FLAGS.isTmpDisconnected */;
    const oldSlotChildNodes = parentElm.childNodes;
    for (let i = oldSlotChildNodes.length - 1; i >= 0; i--) {
        const childNode = oldSlotChildNodes[i];
        if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
            // // this child node in the old element is from another component
            // // remove this node from the old slot's parent
            // childNode.remove();
            // and relocate it back to it's original location
            parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
            // remove the old original location comment entirely
            // later on the patch function will know what to do
            // and move this to the correct spot in need be
            childNode['s-ol'].remove();
            childNode['s-ol'] = undefined;
            checkSlotRelocate = true;
        }
        if (recursive) {
            putBackInOriginalLocation(childNode, recursive);
        }
    }
    plt.$flags$ &= ~1 /* PLATFORM_FLAGS.isTmpDisconnected */;
};
/**
 * Create DOM nodes corresponding to a list of {@link d.Vnode} objects and
 * add them to the DOM in the appropriate place.
 *
 * @param parentElm the DOM node which should be used as a parent for the new
 * DOM nodes
 * @param before a child of the `parentElm` which the new children should be
 * inserted before (optional)
 * @param parentVNode the parent virtual DOM node
 * @param vnodes the new child virtual DOM nodes to produce DOM nodes for
 * @param startIdx the index in the child virtual DOM nodes at which to start
 * creating DOM nodes (inclusive)
 * @param endIdx the index in the child virtual DOM nodes at which to stop
 * creating DOM nodes (inclusive)
 */
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
    let containerElm = ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && parentElm['s-cr'] && parentElm['s-cr'].parentNode) || parentElm);
    let childNode;
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && containerElm.shadowRoot && containerElm.tagName === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx, parentElm);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation ? referenceNode(before) : before);
            }
        }
    }
};
/**
 * Remove the DOM elements corresponding to a list of {@link d.VNode} objects.
 * This can be used to, for instance, clean up after a list of children which
 * should no longer be shown.
 *
 * This function also handles some of Stencil's slot relocation logic.
 *
 * @param vnodes a list of virtual DOM nodes to remove
 * @param startIdx the index at which to start removing nodes (inclusive)
 * @param endIdx the index at which to stop removing nodes (inclusive)
 * @param vnode a VNode
 * @param elm an element
 */
const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
    for (; startIdx <= endIdx; ++startIdx) {
        if ((vnode = vnodes[startIdx])) {
            elm = vnode.$elm$;
            callNodeRefs(vnode);
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
                // we're removing this element
                // so it's possible we need to show slot fallback content now
                checkSlotFallbackVisibility = true;
                if (elm['s-ol']) {
                    // remove the original location comment
                    elm['s-ol'].remove();
                }
                else {
                    // it's possible that child nodes of the node
                    // that's being removed are slot nodes
                    putBackInOriginalLocation(elm, true);
                }
            }
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
/**
 * Reconcile the children of a new VNode with the children of an old VNode by
 * traversing the two collections of children, identifying nodes that are
 * conserved or changed, calling out to `patch` to make any necessary
 * updates to the DOM, and rearranging DOM nodes as needed.
 *
 * The algorithm for reconciling children works by analyzing two 'windows' onto
 * the two arrays of children (`oldCh` and `newCh`). We keep track of the
 * 'windows' by storing start and end indices and references to the
 * corresponding array entries. Initially the two 'windows' are basically equal
 * to the entire array, but we progressively narrow the windows until there are
 * no children left to update by doing the following:
 *
 * 1. Skip any `null` entries at the beginning or end of the two arrays, so
 *    that if we have an initial array like the following we'll end up dealing
 *    only with a window bounded by the highlighted elements:
 *
 *    [null, null, VNode1 , ... , VNode2, null, null]
 *                 ^^^^^^         ^^^^^^
 *
 * 2. Check to see if the elements at the head and tail positions are equal
 *    across the windows. This will basically detect elements which haven't
 *    been added, removed, or changed position, i.e. if you had the following
 *    VNode elements (represented as HTML):
 *
 *    oldVNode: `<div><p><span>HEY</span></p></div>`
 *    newVNode: `<div><p><span>THERE</span></p></div>`
 *
 *    Then when comparing the children of the `<div>` tag we check the equality
 *    of the VNodes corresponding to the `<p>` tags and, since they are the
 *    same tag in the same position, we'd be able to avoid completely
 *    re-rendering the subtree under them with a new DOM element and would just
 *    call out to `patch` to handle reconciling their children and so on.
 *
 * 3. Check, for both windows, to see if the element at the beginning of the
 *    window corresponds to the element at the end of the other window. This is
 *    a heuristic which will let us identify _some_ situations in which
 *    elements have changed position, for instance it _should_ detect that the
 *    children nodes themselves have not changed but merely moved in the
 *    following example:
 *
 *    oldVNode: `<div><element-one /><element-two /></div>`
 *    newVNode: `<div><element-two /><element-one /></div>`
 *
 *    If we find cases like this then we also need to move the concrete DOM
 *    elements corresponding to the moved children to write the re-order to the
 *    DOM.
 *
 * 4. Finally, if VNodes have the `key` attribute set on them we check for any
 *    nodes in the old children which have the same key as the first element in
 *    our window on the new children. If we find such a node we handle calling
 *    out to `patch`, moving relevant DOM nodes, and so on, in accordance with
 *    what we find.
 *
 * Finally, once we've narrowed our 'windows' to the point that either of them
 * collapse (i.e. they have length 0) we then handle any remaining VNode
 * insertion or deletion that needs to happen to get a DOM state that correctly
 * reflects the new child VNodes. If, for instance, after our window on the old
 * children has collapsed we still have more nodes on the new children that
 * we haven't dealt with yet then we need to add them, or if the new children
 * collapse but we still have unhandled _old_ children then we need to make
 * sure the corresponding DOM nodes are removed.
 *
 * @param parentElm the node into which the parent VNode is rendered
 * @param oldCh the old children of the parent node
 * @param newVNode the new VNode which will replace the parent
 * @param newCh the new children of the parent node
 */
const updateChildren = (parentElm, oldCh, newVNode, newCh) => {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let idxInOld = 0;
    let i = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let node;
    let elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // VNode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            // if the start nodes are the same then we should patch the new VNode
            // onto the old one, and increment our `newStartIdx` and `oldStartIdx`
            // indices to reflect that. We don't need to move any DOM Nodes around
            // since things are matched up in order.
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            // likewise, if the end nodes are the same we patch new onto old and
            // decrement our end indices, and also likewise in this case we don't
            // need to move any DOM Nodes.
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            // case: "Vnode moved right"
            //
            // We've found that the last node in our window on the new children is
            // the same VNode as the _first_ node in our window on the old children
            // we're dealing with now. Visually, this is the layout of these two
            // nodes:
            //
            // newCh: [..., newStartVnode , ... , newEndVnode , ...]
            //                                    ^^^^^^^^^^^
            // oldCh: [..., oldStartVnode , ... , oldEndVnode , ...]
            //              ^^^^^^^^^^^^^
            //
            // In this situation we need to patch `newEndVnode` onto `oldStartVnode`
            // and move the DOM element for `oldStartVnode`.
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
            }
            patch(oldStartVnode, newEndVnode);
            // We need to move the element for `oldStartVnode` into a position which
            // will be appropriate for `newEndVnode`. For this we can use
            // `.insertBefore` and `oldEndVnode.$elm$.nextSibling`. If there is a
            // sibling for `oldEndVnode.$elm$` then we want to move the DOM node for
            // `oldStartVnode` between `oldEndVnode` and it's sibling, like so:
            //
            // <old-start-node />
            // <some-intervening-node />
            // <old-end-node />
            // <!-- ->              <-- `oldStartVnode.$elm$` should be inserted here
            // <next-sibling />
            //
            // If instead `oldEndVnode.$elm$` has no sibling then we just want to put
            // the node for `oldStartVnode` at the end of the children of
            // `parentElm`. Luckily, `Node.nextSibling` will return `null` if there
            // aren't any siblings, and passing `null` to `Node.insertBefore` will
            // append it to the children of the parent element.
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            // case: "Vnode moved left"
            //
            // We've found that the first node in our window on the new children is
            // the same VNode as the _last_ node in our window on the old children.
            // Visually, this is the layout of these two nodes:
            //
            // newCh: [..., newStartVnode , ... , newEndVnode , ...]
            //              ^^^^^^^^^^^^^
            // oldCh: [..., oldStartVnode , ... , oldEndVnode , ...]
            //                                    ^^^^^^^^^^^
            //
            // In this situation we need to patch `newStartVnode` onto `oldEndVnode`
            // (which will handle updating any changed attributes, reconciling their
            // children etc) but we also need to move the DOM node to which
            // `oldEndVnode` corresponds.
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
            }
            patch(oldEndVnode, newStartVnode);
            // We've already checked above if `oldStartVnode` and `newStartVnode` are
            // the same node, so since we're here we know that they are not. Thus we
            // can move the element for `oldEndVnode` _before_ the element for
            // `oldStartVnode`, leaving `oldStartVnode` to be reconciled in the
            // future.
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // Here we do some checks to match up old and new nodes based on the
            // `$key$` attribute, which is set by putting a `key="my-key"` attribute
            // in the JSX for a DOM element in the implementation of a Stencil
            // component.
            //
            // First we check to see if there are any nodes in the array of old
            // children which have the same key as the first node in the new
            // children.
            idxInOld = -1;
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomKey) {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomKey && idxInOld >= 0) {
                // We found a node in the old children which matches up with the first
                // node in the new children! So let's deal with that
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    // the tag doesn't match so we'll need a new DOM element
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    // invalidate the matching old node so that we won't try to update it
                    // again later on
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // We either didn't find an element in the old children that matches
                // the key of the first new child OR the build is not using `key`
                // attributes at all. In either case we need to create a new element
                // for the new node.
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                // if we created a new node then handle inserting it to the DOM
                if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
                    parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
                }
                else {
                    oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        // we have some more new nodes to add which don't match up with old nodes
        addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable && newStartIdx > newEndIdx) {
        // there are nodes in the `oldCh` array which no longer correspond to nodes
        // in the new array, so lets remove them (which entails cleaning up the
        // relevant DOM nodes)
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
/**
 * Compare two VNodes to determine if they are the same
 *
 * **NB**: This function is an equality _heuristic_ based on the available
 * information set on the two VNodes and can be misleading under certain
 * circumstances. In particular, if the two nodes do not have `key` attrs
 * (available under `$key$` on VNodes) then the function falls back on merely
 * checking that they have the same tag.
 *
 * So, in other words, if `key` attrs are not set on VNodes which may be
 * changing order within a `children` array or something along those lines then
 * we could obtain a false negative and then have to do needless re-rendering
 * (i.e. we'd say two VNodes aren't equal when in fact they should be).
 *
 * @param leftVNode the first VNode to check
 * @param rightVNode the second VNode to check
 * @returns whether they're equal or not
 */
const isSameVnode = (leftVNode, rightVNode) => {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (leftVNode.$tag$ === rightVNode.$tag$) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && leftVNode.$tag$ === 'slot') {
            return leftVNode.$name$ === rightVNode.$name$;
        }
        // this will be set if components in the build have `key` attrs set on them
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomKey) {
            return leftVNode.$key$ === rightVNode.$key$;
        }
        return true;
    }
    return false;
};
const referenceNode = (node) => {
    // this node was relocated to a new location in the dom
    // because of some other component's slot
    // but we still have an html comment in place of where
    // it's original location was according to it's original vdom
    return (node && node['s-ol']) || node;
};
const parentReferenceNode = (node) => (node['s-ol'] ? node['s-ol'] : node).parentNode;
/**
 * Handle reconciling an outdated VNode with a new one which corresponds to
 * it. This function handles flushing updates to the DOM and reconciling the
 * children of the two nodes (if any).
 *
 * @param oldVNode an old VNode whose DOM element and children we want to update
 * @param newVNode a new VNode representing an updated version of the old one
 */
const patch = (oldVNode, newVNode) => {
    const elm = (newVNode.$elm$ = oldVNode.$elm$);
    const oldChildren = oldVNode.$children$;
    const newChildren = newVNode.$children$;
    const tag = newVNode.$tag$;
    const text = newVNode.$text$;
    let defaultHolder;
    if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomText || text === null) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.svg) {
            // test if we're rendering an svg element, or still rendering nodes inside of one
            // only add this to the when the compiler sees we're using an svg somewhere
            isSvgMode = tag === 'svg' ? true : tag === 'foreignObject' ? false : isSvgMode;
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomAttribute || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.reflect) {
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slot && tag === 'slot')
                ;
            else {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable && oldChildren !== null && newChildren !== null) {
            // looks like there's child vnodes for both the old and new vnodes
            // so we need to call `updateChildren` to reconcile them
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (newChildren !== null) {
            // no old child vnodes, but there are new child vnodes to add
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomText && oldVNode.$text$ !== null) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable && oldChildren !== null) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.svg && isSvgMode && tag === 'svg') {
            isSvgMode = false;
        }
    }
    else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomText && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && (defaultHolder = elm['s-cr'])) {
        // this element has slotted content
        defaultHolder.parentNode.textContent = text;
    }
    else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomText && oldVNode.$text$ !== text) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.data = text;
    }
};
const updateFallbackSlotVisibility = (elm) => {
    // tslint:disable-next-line: prefer-const
    const childNodes = elm.childNodes;
    let childNode;
    let i;
    let ilen;
    let j;
    let slotNameAttr;
    let nodeType;
    for (i = 0, ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode.nodeType === 1 /* NODE_TYPE.ElementNode */) {
            if (childNode['s-sr']) {
                // this is a slot fallback node
                // get the slot name for this slot reference node
                slotNameAttr = childNode['s-sn'];
                // by default always show a fallback slot node
                // then hide it if there are other slots in the light dom
                childNode.hidden = false;
                for (j = 0; j < ilen; j++) {
                    nodeType = childNodes[j].nodeType;
                    if (childNodes[j]['s-hn'] !== childNode['s-hn'] || slotNameAttr !== '') {
                        // this sibling node is from a different component OR is a named fallback slot node
                        if (nodeType === 1 /* NODE_TYPE.ElementNode */ && slotNameAttr === childNodes[j].getAttribute('slot')) {
                            childNode.hidden = true;
                            break;
                        }
                    }
                    else {
                        // this is a default fallback slot node
                        // any element or text node (with content)
                        // should hide the default fallback slot node
                        if (nodeType === 1 /* NODE_TYPE.ElementNode */ ||
                            (nodeType === 3 /* NODE_TYPE.TextNode */ && childNodes[j].textContent.trim() !== '')) {
                            childNode.hidden = true;
                            break;
                        }
                    }
                }
            }
            // keep drilling down
            updateFallbackSlotVisibility(childNode);
        }
    }
};
const relocateNodes = [];
const relocateSlotContent = (elm) => {
    // tslint:disable-next-line: prefer-const
    let childNode;
    let node;
    let hostContentNodes;
    let slotNameAttr;
    let relocateNodeData;
    let j;
    let i = 0;
    const childNodes = elm.childNodes;
    const ilen = childNodes.length;
    for (; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && (node = childNode['s-cr']) && node.parentNode) {
            // first got the content reference comment node
            // then we got it's parent, which is where all the host content is in now
            hostContentNodes = node.parentNode.childNodes;
            slotNameAttr = childNode['s-sn'];
            for (j = hostContentNodes.length - 1; j >= 0; j--) {
                node = hostContentNodes[j];
                if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
                    // let's do some relocating to its new home
                    // but never relocate a content reference node
                    // that is suppose to always represent the original content location
                    if (isNodeLocatedInSlot(node, slotNameAttr)) {
                        // it's possible we've already decided to relocate this node
                        relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                        // made some changes to slots
                        // let's make sure we also double check
                        // fallbacks are correctly hidden or shown
                        checkSlotFallbackVisibility = true;
                        node['s-sn'] = node['s-sn'] || slotNameAttr;
                        if (relocateNodeData) {
                            // previously we never found a slot home for this node
                            // but turns out we did, so let's remember it now
                            relocateNodeData.$slotRefNode$ = childNode;
                        }
                        else {
                            // add to our list of nodes to relocate
                            relocateNodes.push({
                                $slotRefNode$: childNode,
                                $nodeToRelocate$: node,
                            });
                        }
                        if (node['s-sr']) {
                            relocateNodes.map((relocateNode) => {
                                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node['s-sn'])) {
                                    relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                                    if (relocateNodeData && !relocateNode.$slotRefNode$) {
                                        relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                                    }
                                }
                            });
                        }
                    }
                    else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
                        // so far this element does not have a slot home, not setting slotRefNode on purpose
                        // if we never find a home for this element then we'll need to hide it
                        relocateNodes.push({
                            $nodeToRelocate$: node,
                        });
                    }
                }
            }
        }
        if (childNode.nodeType === 1 /* NODE_TYPE.ElementNode */) {
            relocateSlotContent(childNode);
        }
    }
};
const isNodeLocatedInSlot = (nodeToRelocate, slotNameAttr) => {
    if (nodeToRelocate.nodeType === 1 /* NODE_TYPE.ElementNode */) {
        if (nodeToRelocate.getAttribute('slot') === null && slotNameAttr === '') {
            return true;
        }
        if (nodeToRelocate.getAttribute('slot') === slotNameAttr) {
            return true;
        }
        return false;
    }
    if (nodeToRelocate['s-sn'] === slotNameAttr) {
        return true;
    }
    return slotNameAttr === '';
};
const callNodeRefs = (vNode) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomRef) {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
        vNode.$children$ && vNode.$children$.map(callNodeRefs);
    }
};
/**
 * The main entry point for Stencil's virtual DOM-based rendering engine
 *
 * Given a {@link d.HostRef} container and some virtual DOM nodes, this
 * function will handle creating a virtual DOM tree with a single root, patching
 * the current virtual DOM tree onto an old one (if any), dealing with slot
 * relocation, and reflecting attributes.
 *
 * @param hostRef data needed to root and render the virtual DOM tree, such as
 * the DOM node into which it should be rendered.
 * @param renderFnResults the virtual DOM nodes to be rendered
 */
const renderVdom = (hostRef, renderFnResults) => {
    const hostElm = hostRef.$hostElement$;
    const cmpMeta = hostRef.$cmpMeta$;
    const oldVNode = hostRef.$vnode$ || newVNode(null, null);
    const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
    hostTagName = hostElm.tagName;
    // <Host> runtime check
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev && Array.isArray(renderFnResults) && renderFnResults.some(isHost)) {
        throw new Error(`The <Host> must be the single root component.
Looks like the render() function of "${hostTagName.toLowerCase()}" is returning an array that contains the <Host>.

The render() function should look like this instead:

render() {
  // Do not return an array
  return (
    <Host>{content}</Host>
  );
}
  `);
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.reflect && cmpMeta.$attrsToReflect$) {
        rootVnode.$attrs$ = rootVnode.$attrs$ || {};
        cmpMeta.$attrsToReflect$.map(([propName, attribute]) => (rootVnode.$attrs$[attribute] = hostElm[propName]));
    }
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* VNODE_FLAGS.isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom ? hostElm.shadowRoot || hostElm : hostElm);
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scoped || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom) {
        scopeId = hostElm['s-sc'];
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
        contentRef = hostElm['s-cr'];
        useNativeShadowDom = supportsShadow && (cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) !== 0;
        // always reset
        checkSlotFallbackVisibility = false;
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
        // while we're moving nodes around existing nodes, temporarily disable
        // the disconnectCallback from working
        plt.$flags$ |= 1 /* PLATFORM_FLAGS.isTmpDisconnected */;
        if (checkSlotRelocate) {
            relocateSlotContent(rootVnode.$elm$);
            let relocateData;
            let nodeToRelocate;
            let orgLocationNode;
            let parentNodeRef;
            let insertBeforeNode;
            let refNode;
            let i = 0;
            for (; i < relocateNodes.length; i++) {
                relocateData = relocateNodes[i];
                nodeToRelocate = relocateData.$nodeToRelocate$;
                if (!nodeToRelocate['s-ol']) {
                    // add a reference node marking this node's original location
                    // keep a reference to this node for later lookups
                    orgLocationNode =
                        _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDebug || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide
                            ? originalLocationDebugNode(nodeToRelocate)
                            : doc.createTextNode('');
                    orgLocationNode['s-nr'] = nodeToRelocate;
                    nodeToRelocate.parentNode.insertBefore((nodeToRelocate['s-ol'] = orgLocationNode), nodeToRelocate);
                }
            }
            for (i = 0; i < relocateNodes.length; i++) {
                relocateData = relocateNodes[i];
                nodeToRelocate = relocateData.$nodeToRelocate$;
                if (relocateData.$slotRefNode$) {
                    // by default we're just going to insert it directly
                    // after the slot reference node
                    parentNodeRef = relocateData.$slotRefNode$.parentNode;
                    insertBeforeNode = relocateData.$slotRefNode$.nextSibling;
                    orgLocationNode = nodeToRelocate['s-ol'];
                    while ((orgLocationNode = orgLocationNode.previousSibling)) {
                        refNode = orgLocationNode['s-nr'];
                        if (refNode && refNode['s-sn'] === nodeToRelocate['s-sn'] && parentNodeRef === refNode.parentNode) {
                            refNode = refNode.nextSibling;
                            if (!refNode || !refNode['s-nr']) {
                                insertBeforeNode = refNode;
                                break;
                            }
                        }
                    }
                    if ((!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode) ||
                        nodeToRelocate.nextSibling !== insertBeforeNode) {
                        // we've checked that it's worth while to relocate
                        // since that the node to relocate
                        // has a different next sibling or parent relocated
                        if (nodeToRelocate !== insertBeforeNode) {
                            if (!nodeToRelocate['s-hn'] && nodeToRelocate['s-ol']) {
                                // probably a component in the index.html that doesn't have it's hostname set
                                nodeToRelocate['s-hn'] = nodeToRelocate['s-ol'].parentNode.nodeName;
                            }
                            // add it back to the dom but in its new home
                            parentNodeRef.insertBefore(nodeToRelocate, insertBeforeNode);
                        }
                    }
                }
                else {
                    // this node doesn't have a slot home to go to, so let's hide it
                    if (nodeToRelocate.nodeType === 1 /* NODE_TYPE.ElementNode */) {
                        nodeToRelocate.hidden = true;
                    }
                }
            }
        }
        if (checkSlotFallbackVisibility) {
            updateFallbackSlotVisibility(rootVnode.$elm$);
        }
        // done moving nodes around
        // allow the disconnect callback to work again
        plt.$flags$ &= ~1 /* PLATFORM_FLAGS.isTmpDisconnected */;
        // always reset
        relocateNodes.length = 0;
    }
};
// slot comment debug nodes only created with the `--debug` flag
// otherwise these nodes are text nodes w/out content
const slotReferenceDebugNode = (slotVNode) => doc.createComment(`<slot${slotVNode.$name$ ? ' name="' + slotVNode.$name$ + '"' : ''}> (host=${hostTagName.toLowerCase()})`);
const originalLocationDebugNode = (nodeToRelocate) => doc.createComment(`org-location for ` +
    (nodeToRelocate.localName
        ? `<${nodeToRelocate.localName}> (host=${nodeToRelocate['s-hn']})`
        : `[${nodeToRelocate.textContent}]`));
const attachToAncestor = (hostRef, ancestorComponent) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading && ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent['s-p']) {
        ancestorComponent['s-p'].push(new Promise((r) => (hostRef.$onRenderResolve$ = r)));
    }
};
const scheduleUpdate = (hostRef, isInitialLoad) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.taskQueue && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable) {
        hostRef.$flags$ |= 16 /* HOST_FLAGS.isQueuedForUpdate */;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading && hostRef.$flags$ & 4 /* HOST_FLAGS.isWaitingForChildren */) {
        hostRef.$flags$ |= 512 /* HOST_FLAGS.needsRerender */;
        return;
    }
    attachToAncestor(hostRef, hostRef.$ancestorComponent$);
    // there is no ancestor component or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
    return _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.taskQueue ? writeTask(dispatch) : dispatch();
};
const dispatchHooks = (hostRef, isInitialLoad) => {
    const elm = hostRef.$hostElement$;
    const endSchedule = createTime('scheduleUpdate', hostRef.$cmpMeta$.$tagName$);
    const instance = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
    let promise;
    if (isInitialLoad) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListener) {
            hostRef.$flags$ |= 256 /* HOST_FLAGS.isListenReady */;
            if (hostRef.$queuedListeners$) {
                hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event));
                hostRef.$queuedListeners$ = null;
            }
        }
        emitLifecycleEvent(elm, 'componentWillLoad');
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpWillLoad) {
            promise = safeCall(instance, 'componentWillLoad');
        }
    }
    else {
        emitLifecycleEvent(elm, 'componentWillUpdate');
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpWillUpdate) {
            promise = safeCall(instance, 'componentWillUpdate');
        }
    }
    emitLifecycleEvent(elm, 'componentWillRender');
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpWillRender) {
        promise = then(promise, () => safeCall(instance, 'componentWillRender'));
    }
    endSchedule();
    return then(promise, () => updateComponent(hostRef, instance, isInitialLoad));
};
const updateComponent = async (hostRef, instance, isInitialLoad) => {
    // updateComponent
    const elm = hostRef.$hostElement$;
    const endUpdate = createTime('update', hostRef.$cmpMeta$.$tagName$);
    const rc = elm['s-rc'];
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.style && isInitialLoad) {
        // DOM WRITE!
        attachStyles(hostRef);
    }
    const endRender = createTime('render', hostRef.$cmpMeta$.$tagName$);
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
        hostRef.$flags$ |= 1024 /* HOST_FLAGS.devOnRender */;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide) {
        await callRender(hostRef, instance, elm);
    }
    else {
        callRender(hostRef, instance, elm);
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cssVarShim && plt.$cssShim$) {
        plt.$cssShim$.updateHost(elm);
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
        hostRef.$renderCount$++;
        hostRef.$flags$ &= ~1024 /* HOST_FLAGS.devOnRender */;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide) {
        try {
            // manually connected child components during server-side hydrate
            serverSideConnected(elm);
            if (isInitialLoad) {
                // using only during server-side hydrate
                if (hostRef.$cmpMeta$.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) {
                    elm['s-en'] = '';
                }
                else if (hostRef.$cmpMeta$.$flags$ & 2 /* CMP_FLAGS.scopedCssEncapsulation */) {
                    elm['s-en'] = 'c';
                }
            }
        }
        catch (e) {
            consoleError(e, elm);
        }
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading && rc) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        rc.map((cb) => cb());
        elm['s-rc'] = undefined;
    }
    endRender();
    endUpdate();
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading) {
        const childrenPromises = elm['s-p'];
        const postUpdate = () => postUpdateComponent(hostRef);
        if (childrenPromises.length === 0) {
            postUpdate();
        }
        else {
            Promise.all(childrenPromises).then(postUpdate);
            hostRef.$flags$ |= 4 /* HOST_FLAGS.isWaitingForChildren */;
            childrenPromises.length = 0;
        }
    }
    else {
        postUpdateComponent(hostRef);
    }
};
const callRender = (hostRef, instance, elm) => {
    // in order for bundlers to correctly treeshake the BUILD object
    // we need to ensure BUILD is not deoptimized within a try/catch
    // https://rollupjs.org/guide/en/#treeshake tryCatchDeoptimization
    const allRenderFn = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.allRenderFn ? true : false;
    const lazyLoad = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? true : false;
    const taskQueue = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.taskQueue ? true : false;
    const updatable = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable ? true : false;
    try {
        renderingRef = instance;
        instance = allRenderFn ? instance.render() : instance.render && instance.render();
        if (updatable && taskQueue) {
            hostRef.$flags$ &= ~16 /* HOST_FLAGS.isQueuedForUpdate */;
        }
        if (updatable || lazyLoad) {
            hostRef.$flags$ |= 2 /* HOST_FLAGS.hasRendered */;
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hasRenderFn || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.reflect) {
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomRender || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.reflect) {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide) {
                    return Promise.resolve(instance).then((value) => renderVdom(hostRef, value));
                }
                else {
                    renderVdom(hostRef, instance);
                }
            }
            else {
                elm.textContent = instance;
            }
        }
    }
    catch (e) {
        consoleError(e, hostRef.$hostElement$);
    }
    renderingRef = null;
    return null;
};
const getRenderingRef = () => renderingRef;
const postUpdateComponent = (hostRef) => {
    const tagName = hostRef.$cmpMeta$.$tagName$;
    const elm = hostRef.$hostElement$;
    const endPostUpdate = createTime('postUpdate', tagName);
    const instance = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
    const ancestorComponent = hostRef.$ancestorComponent$;
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpDidRender) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
            hostRef.$flags$ |= 1024 /* HOST_FLAGS.devOnRender */;
        }
        safeCall(instance, 'componentDidRender');
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
            hostRef.$flags$ &= ~1024 /* HOST_FLAGS.devOnRender */;
        }
    }
    emitLifecycleEvent(elm, 'componentDidRender');
    if (!(hostRef.$flags$ & 64 /* HOST_FLAGS.hasLoadedComponent */)) {
        hostRef.$flags$ |= 64 /* HOST_FLAGS.hasLoadedComponent */;
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cssAnnotations) {
            // DOM WRITE!
            addHydratedFlag(elm);
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpDidLoad) {
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
                hostRef.$flags$ |= 2048 /* HOST_FLAGS.devOnDidLoad */;
            }
            safeCall(instance, 'componentDidLoad');
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
                hostRef.$flags$ &= ~2048 /* HOST_FLAGS.devOnDidLoad */;
            }
        }
        emitLifecycleEvent(elm, 'componentDidLoad');
        endPostUpdate();
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading) {
            hostRef.$onReadyResolve$(elm);
            if (!ancestorComponent) {
                appDidLoad(tagName);
            }
        }
    }
    else {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpDidUpdate) {
            // we've already loaded this component
            // fire off the user's componentDidUpdate method (if one was provided)
            // componentDidUpdate runs AFTER render() has been called
            // and all child components have finished updating
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
                hostRef.$flags$ |= 1024 /* HOST_FLAGS.devOnRender */;
            }
            safeCall(instance, 'componentDidUpdate');
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
                hostRef.$flags$ &= ~1024 /* HOST_FLAGS.devOnRender */;
            }
        }
        emitLifecycleEvent(elm, 'componentDidUpdate');
        endPostUpdate();
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hotModuleReplacement) {
        elm['s-hmr-load'] && elm['s-hmr-load']();
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.method && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad) {
        hostRef.$onInstanceResolve$(elm);
    }
    // load events fire from bottom to top
    // the deepest elements load first then bubbles up
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading) {
        if (hostRef.$onRenderResolve$) {
            hostRef.$onRenderResolve$();
            hostRef.$onRenderResolve$ = undefined;
        }
        if (hostRef.$flags$ & 512 /* HOST_FLAGS.needsRerender */) {
            nextTick(() => scheduleUpdate(hostRef, false));
        }
        hostRef.$flags$ &= ~(4 /* HOST_FLAGS.isWaitingForChildren */ | 512 /* HOST_FLAGS.needsRerender */);
    }
    // ( •_•)
    // ( •_•)>⌐■-■
    // (⌐■_■)
};
const forceUpdate = (ref) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable) {
        const hostRef = getHostRef(ref);
        const isConnected = hostRef.$hostElement$.isConnected;
        if (isConnected &&
            (hostRef.$flags$ & (2 /* HOST_FLAGS.hasRendered */ | 16 /* HOST_FLAGS.isQueuedForUpdate */)) === 2 /* HOST_FLAGS.hasRendered */) {
            scheduleUpdate(hostRef, false);
        }
        // Returns "true" when the forced update was successfully scheduled
        return isConnected;
    }
    return false;
};
const appDidLoad = (who) => {
    // on appload
    // we have finish the first big initial render
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cssAnnotations) {
        addHydratedFlag(doc.documentElement);
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncQueue) {
        plt.$flags$ |= 2 /* PLATFORM_FLAGS.appLoaded */;
    }
    nextTick(() => emitEvent(win, 'appload', { detail: { namespace: _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.NAMESPACE } }));
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.profile && performance.measure) {
        performance.measure(`[Stencil] ${_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.NAMESPACE} initial load (by ${who})`, 'st:app:start');
    }
};
const safeCall = (instance, method, arg) => {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
const then = (promise, thenFn) => {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
const emitLifecycleEvent = (elm, lifecycleName) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lifecycleDOMEvents) {
        emitEvent(elm, 'stencil_' + lifecycleName, {
            bubbles: true,
            composed: true,
            detail: {
                namespace: _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.NAMESPACE,
            },
        });
    }
};
const addHydratedFlag = (elm) => _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydratedClass
    ? elm.classList.add('hydrated')
    : _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydratedAttribute
        ? elm.setAttribute('hydrated', '')
        : undefined;
const serverSideConnected = (elm) => {
    const children = elm.children;
    if (children != null) {
        for (let i = 0, ii = children.length; i < ii; i++) {
            const childElm = children[i];
            if (typeof childElm.connectedCallback === 'function') {
                childElm.connectedCallback();
            }
            serverSideConnected(childElm);
        }
    }
};
const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta) => {
    // check our new property value against our internal value
    const hostRef = getHostRef(ref);
    const elm = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? hostRef.$hostElement$ : ref;
    const oldVal = hostRef.$instanceValues$.get(propName);
    const flags = hostRef.$flags$;
    const instance = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    // explicitly check for NaN on both sides, as `NaN === NaN` is always false
    const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
    const didValueChange = newVal !== oldVal && !areBothNaN;
    if ((!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad || !(flags & 8 /* HOST_FLAGS.isConstructingInstance */) || oldVal === undefined) && didValueChange) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
            if (hostRef.$flags$ & 1024 /* HOST_FLAGS.devOnRender */) {
                consoleDevWarn(`The state/prop "${propName}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`, '\nElement', elm, '\nNew value', newVal, '\nOld value', oldVal);
            }
            else if (hostRef.$flags$ & 2048 /* HOST_FLAGS.devOnDidLoad */) {
                consoleDevWarn(`The state/prop "${propName}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`, '\nElement', elm, '\nNew value', newVal, '\nOld value', oldVal);
            }
        }
        if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad || instance) {
            // get an array of method names of watch functions to call
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.watchCallback && cmpMeta.$watchers$ && flags & 128 /* HOST_FLAGS.isWatchReady */) {
                const watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.map((watchMethodName) => {
                        try {
                            // fire off each of the watch methods that are watching this property
                            instance[watchMethodName](newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e, elm);
                        }
                    });
                }
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable &&
                (flags & (2 /* HOST_FLAGS.hasRendered */ | 16 /* HOST_FLAGS.isQueuedForUpdate */)) === 2 /* HOST_FLAGS.hasRendered */) {
                if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpShouldUpdate && instance.componentShouldUpdate) {
                    if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
                        return;
                    }
                }
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(hostRef, false);
            }
        }
    }
};
/**
 * Attach a series of runtime constructs to a compiled Stencil component
 * constructor, including getters and setters for the `@Prop` and `@State`
 * decorators, callbacks for when attributes change, and so on.
 *
 * @param Cstr the constructor for a component that we need to process
 * @param cmpMeta metadata collected previously about the component
 * @param flags a number used to store a series of bit flags
 * @returns a reference to the same constructor passed in (but now mutated)
 */
const proxyComponent = (Cstr, cmpMeta, flags) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.member && cmpMeta.$members$) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.watchCallback && Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        const members = Object.entries(cmpMeta.$members$);
        const prototype = Cstr.prototype;
        members.map(([memberName, [memberFlags]]) => {
            if ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.prop || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.state) &&
                (memberFlags & 31 /* MEMBER_FLAGS.Prop */ ||
                    ((!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad || flags & 2 /* PROXY_FLAGS.proxyState */) && memberFlags & 32 /* MEMBER_FLAGS.State */))) {
                // proxyComponent - prop
                Object.defineProperty(prototype, memberName, {
                    get() {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set(newValue) {
                        // only during dev time
                        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
                            const ref = getHostRef(this);
                            if (
                            // we are proxying the instance (not element)
                            (flags & 1 /* PROXY_FLAGS.isElementConstructor */) === 0 &&
                                // the element is not constructing
                                (ref.$flags$ & 8 /* HOST_FLAGS.isConstructingInstance */) === 0 &&
                                // the member is a prop
                                (memberFlags & 31 /* MEMBER_FLAGS.Prop */) !== 0 &&
                                // the member is not mutable
                                (memberFlags & 1024 /* MEMBER_FLAGS.Mutable */) === 0) {
                                consoleDevWarn(`@Prop() "${memberName}" on <${cmpMeta.$tagName$}> is immutable but was modified from within the component.\nMore information: https://stenciljs.com/docs/properties#prop-mutability`);
                            }
                        }
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true,
                });
            }
            else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad &&
                _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.method &&
                flags & 1 /* PROXY_FLAGS.isElementConstructor */ &&
                memberFlags & 64 /* MEMBER_FLAGS.Method */) {
                // proxyComponent - method
                Object.defineProperty(prototype, memberName, {
                    value(...args) {
                        const ref = getHostRef(this);
                        return ref.$onInstancePromise$.then(() => ref.$lazyInstance$[memberName](...args));
                    },
                });
            }
        });
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.observeAttribute && (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad || flags & 1 /* PROXY_FLAGS.isElementConstructor */)) {
            const attrNameToPropName = new Map();
            prototype.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                plt.jmp(() => {
                    const propName = attrNameToPropName.get(attrName);
                    //  In a web component lifecycle the attributeChangedCallback runs prior to connectedCallback
                    //  in the case where an attribute was set inline.
                    //  ```html
                    //    <my-component some-attribute="some-value"></my-component>
                    //  ```
                    //
                    //  There is an edge case where a developer sets the attribute inline on a custom element and then
                    //  programmatically changes it before it has been upgraded as shown below:
                    //
                    //  ```html
                    //    <!-- this component has _not_ been upgraded yet -->
                    //    <my-component id="test" some-attribute="some-value"></my-component>
                    //    <script>
                    //      // grab non-upgraded component
                    //      el = document.querySelector("#test");
                    //      el.someAttribute = "another-value";
                    //      // upgrade component
                    //      customElements.define('my-component', MyComponent);
                    //    </script>
                    //  ```
                    //  In this case if we do not unshadow here and use the value of the shadowing property, attributeChangedCallback
                    //  will be called with `newValue = "some-value"` and will set the shadowed property (this.someAttribute = "another-value")
                    //  to the value that was set inline i.e. "some-value" from above example. When
                    //  the connectedCallback attempts to unshadow it will use "some-value" as the initial value rather than "another-value"
                    //
                    //  The case where the attribute was NOT set inline but was not set programmatically shall be handled/unshadowed
                    //  by connectedCallback as this attributeChangedCallback will not fire.
                    //
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
                    //
                    //  TODO(STENCIL-16) we should think about whether or not we actually want to be reflecting the attributes to
                    //  properties here given that this goes against best practices outlined here
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#avoid-reentrancy
                    if (this.hasOwnProperty(propName)) {
                        newValue = this[propName];
                        delete this[propName];
                    }
                    else if (prototype.hasOwnProperty(propName) &&
                        typeof this[propName] === 'number' &&
                        this[propName] == newValue) {
                        // if the propName exists on the prototype of `Cstr`, this update may be a result of Stencil using native
                        // APIs to reflect props as attributes. Calls to `setAttribute(someElement, propName)` will result in
                        // `propName` to be converted to a `DOMString`, which may not be what we want for other primitive props.
                        return;
                    }
                    this[propName] = newValue === null && typeof this[propName] === 'boolean' ? false : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(([_, m]) => m[0] & 15 /* MEMBER_FLAGS.HasAttribute */) // filter to only keep props that should match attributes
                .map(([propName, m]) => {
                const attrName = m[1] || propName;
                attrNameToPropName.set(attrName, propName);
                if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.reflect && m[0] & 512 /* MEMBER_FLAGS.ReflectAttr */) {
                    cmpMeta.$attrsToReflect$.push([propName, attrName]);
                }
                return attrName;
            });
        }
    }
    return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
    // initializeComponent
    if ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.style) &&
        (hostRef.$flags$ & 32 /* HOST_FLAGS.hasInitializedComponent */) === 0) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateClientSide) {
            // we haven't initialized this element yet
            hostRef.$flags$ |= 32 /* HOST_FLAGS.hasInitializedComponent */;
            // lazy loaded components
            // request the component's implementation to be
            // wired up with the host element
            Cstr = loadModule(cmpMeta, hostRef, hmrVersionId);
            if (Cstr.then) {
                // Await creates a micro-task avoid if possible
                const endLoad = uniqueTime(`st:load:${cmpMeta.$tagName$}:${hostRef.$modeName$}`, `[Stencil] Load module for <${cmpMeta.$tagName$}>`);
                Cstr = await Cstr;
                endLoad();
            }
            if ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDebug) && !Cstr) {
                throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.member && !Cstr.isProxied) {
                // we've never proxied this Constructor before
                // let's add the getters/setters to its prototype before
                // the first time we create an instance of the implementation
                if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.watchCallback) {
                    cmpMeta.$watchers$ = Cstr.watchers;
                }
                proxyComponent(Cstr, cmpMeta, 2 /* PROXY_FLAGS.proxyState */);
                Cstr.isProxied = true;
            }
            const endNewInstance = createTime('createInstance', cmpMeta.$tagName$);
            // ok, time to construct the instance
            // but let's keep track of when we start and stop
            // so that the getters/setters don't incorrectly step on data
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.member) {
                hostRef.$flags$ |= 8 /* HOST_FLAGS.isConstructingInstance */;
            }
            // construct the lazy-loaded component implementation
            // passing the hostRef is very important during
            // construction in order to directly wire together the
            // host element and the lazy-loaded instance
            try {
                new Cstr(hostRef);
            }
            catch (e) {
                consoleError(e);
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.member) {
                hostRef.$flags$ &= ~8 /* HOST_FLAGS.isConstructingInstance */;
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.watchCallback) {
                hostRef.$flags$ |= 128 /* HOST_FLAGS.isWatchReady */;
            }
            endNewInstance();
            fireConnectedCallback(hostRef.$lazyInstance$);
        }
        else {
            // sync constructor component
            Cstr = elm.constructor;
            hostRef.$flags$ |= 32 /* HOST_FLAGS.hasInitializedComponent */;
            // wait for the CustomElementRegistry to mark the component as ready before setting `isWatchReady`. Otherwise,
            // watchers may fire prematurely if `customElements.get()`/`customElements.whenDefined()` resolves _before_
            // Stencil has completed instantiating the component.
            customElements.whenDefined(cmpMeta.$tagName$).then(() => (hostRef.$flags$ |= 128 /* HOST_FLAGS.isWatchReady */));
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.style && Cstr.style) {
            // this component has styles but we haven't registered them yet
            let style = Cstr.style;
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.mode && typeof style !== 'string') {
                style = style[(hostRef.$modeName$ = computeMode(elm))];
                if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide && hostRef.$modeName$) {
                    elm.setAttribute('s-mode', hostRef.$modeName$);
                }
            }
            const scopeId = getScopeId(cmpMeta, hostRef.$modeName$);
            if (!styles.has(scopeId)) {
                const endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);
                if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide &&
                    _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom &&
                    _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDomShim &&
                    cmpMeta.$flags$ & 8 /* CMP_FLAGS.needsShadowDomShim */) {
                    style = await __webpack_require__.e(/*! import() */ "vendors-node_modules_stencil_core_internal_client_shadow-css_js").then(__webpack_require__.bind(__webpack_require__, /*! ./shadow-css.js */ "./node_modules/@stencil/core/internal/client/shadow-css.js")).then((m) => m.scopeCss(style, scopeId, false));
                }
                registerStyle(scopeId, style, !!(cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */));
                endRegisterStyles();
            }
        }
    }
    // we've successfully created a lazy instance
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = () => scheduleUpdate(hostRef, true);
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading && ancestorComponent && ancestorComponent['s-rc']) {
        // this is the initial load and this component it has an ancestor component
        // but the ancestor component has NOT fired its will update lifecycle yet
        // so let's just cool our jets and wait for the ancestor to continue first
        // this will get fired off when the ancestor component
        // finally gets around to rendering its lazy self
        // fire off the initial update
        ancestorComponent['s-rc'].push(schedule);
    }
    else {
        schedule();
    }
};
const fireConnectedCallback = (instance) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.connectedCallback) {
        safeCall(instance, 'connectedCallback');
    }
};
const connectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const cmpMeta = hostRef.$cmpMeta$;
        const endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListenerTargetParent) {
            // only run if we have listeners being attached to a parent
            addHostEventListeners(elm, hostRef, cmpMeta.$listeners$, true);
        }
        if (!(hostRef.$flags$ & 1 /* HOST_FLAGS.hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* HOST_FLAGS.hasConnected */;
            let hostId;
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateClientSide) {
                hostId = elm.getAttribute(HYDRATE_ID);
                if (hostId) {
                    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && supportsShadow && cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) {
                        const scopeId = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.mode
                            ? addStyle(elm.shadowRoot, cmpMeta, elm.getAttribute('s-mode'))
                            : addStyle(elm.shadowRoot, cmpMeta);
                        elm.classList.remove(scopeId + '-h', scopeId + '-s');
                    }
                    initializeClientHydrate(elm, cmpMeta.$tagName$, hostId, hostRef);
                }
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && !hostId) {
                // initUpdate
                // if the slot polyfill is required we'll need to put some nodes
                // in here to act as original content anchors as we move nodes around
                // host element has been connected to the DOM
                if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide ||
                    ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slot || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom) &&
                        cmpMeta.$flags$ & (4 /* CMP_FLAGS.hasSlotRelocation */ | 8 /* CMP_FLAGS.needsShadowDomShim */))) {
                    setContentReference(elm);
                }
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading) {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                let ancestorComponent = elm;
                while ((ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host)) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateClientSide &&
                        ancestorComponent.nodeType === 1 /* NODE_TYPE.ElementNode */ &&
                        ancestorComponent.hasAttribute('s-id') &&
                        ancestorComponent['s-p']) ||
                        ancestorComponent['s-p']) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        attachToAncestor(hostRef, (hostRef.$ancestorComponent$ = ancestorComponent));
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.prop && !_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide && cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
                    if (memberFlags & 31 /* MEMBER_FLAGS.Prop */ && elm.hasOwnProperty(memberName)) {
                        const value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.initializeNextTick) {
                // connectedCallback, taskQueue, initialLoad
                // angular sets attribute AFTER connectCallback
                // https://github.com/angular/angular/issues/18909
                // https://github.com/angular/angular/issues/19940
                nextTick(() => initializeComponent(elm, hostRef, cmpMeta));
            }
            else {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        else {
            // not the first time this has connected
            // reattach any event listeners to the host
            // since they would have been removed when disconnected
            addHostEventListeners(elm, hostRef, cmpMeta.$listeners$, false);
            // fire off connectedCallback() on component instance
            fireConnectedCallback(hostRef.$lazyInstance$);
        }
        endConnected();
    }
};
const setContentReference = (elm) => {
    // only required when we're NOT using native shadow dom (slot)
    // or this browser doesn't support native shadow dom
    // and this host element was NOT created with SSR
    // let's pick out the inner content for slot projection
    // create a node to represent where the original
    // content was first placed, which is useful later on
    const contentRefElm = (elm['s-cr'] = doc.createComment(_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDebug ? `content-ref (host=${elm.localName})` : ''));
    contentRefElm['s-cn'] = true;
    elm.insertBefore(contentRefElm, elm.firstChild);
};
const disconnectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const instance = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListener) {
            if (hostRef.$rmListeners$) {
                hostRef.$rmListeners$.map((rmListener) => rmListener());
                hostRef.$rmListeners$ = undefined;
            }
        }
        // clear CSS var-shim tracking
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cssVarShim && plt.$cssShim$) {
            plt.$cssShim$.removeHost(elm);
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.disconnectedCallback) {
            safeCall(instance, 'disconnectedCallback');
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpDidUnload) {
            safeCall(instance, 'componentDidUnload');
        }
    }
};
const defineCustomElement = (Cstr, compactMeta) => {
    customElements.define(compactMeta[1], proxyCustomElement(Cstr, compactMeta));
};
const proxyCustomElement = (Cstr, compactMeta) => {
    const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
    };
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.member) {
        cmpMeta.$members$ = compactMeta[2];
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListener) {
        cmpMeta.$listeners$ = compactMeta[3];
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.watchCallback) {
        cmpMeta.$watchers$ = Cstr.$watchers$;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.reflect) {
        cmpMeta.$attrsToReflect$ = [];
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && !supportsShadow && cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) {
        cmpMeta.$flags$ |= 8 /* CMP_FLAGS.needsShadowDomShim */;
    }
    const originalConnectedCallback = Cstr.prototype.connectedCallback;
    const originalDisconnectedCallback = Cstr.prototype.disconnectedCallback;
    Object.assign(Cstr.prototype, {
        __registerHost() {
            registerHost(this, cmpMeta);
        },
        connectedCallback() {
            connectedCallback(this);
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.connectedCallback && originalConnectedCallback) {
                originalConnectedCallback.call(this);
            }
        },
        disconnectedCallback() {
            disconnectedCallback(this);
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.disconnectedCallback && originalDisconnectedCallback) {
                originalDisconnectedCallback.call(this);
            }
        },
        __attachShadow() {
            if (supportsShadow) {
                if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDelegatesFocus) {
                    this.attachShadow({
                        mode: 'open',
                        delegatesFocus: !!(cmpMeta.$flags$ & 16 /* CMP_FLAGS.shadowDelegatesFocus */),
                    });
                }
                else {
                    this.attachShadow({ mode: 'open' });
                }
            }
            else {
                this.shadowRoot = this;
            }
        },
    });
    Cstr.is = cmpMeta.$tagName$;
    return proxyComponent(Cstr, cmpMeta, 1 /* PROXY_FLAGS.isElementConstructor */ | 2 /* PROXY_FLAGS.proxyState */);
};
const forceModeUpdate = (elm) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.style && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.mode && !_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad) {
        const mode = computeMode(elm);
        const hostRef = getHostRef(elm);
        if (hostRef.$modeName$ !== mode) {
            const cmpMeta = hostRef.$cmpMeta$;
            const oldScopeId = elm['s-sc'];
            const scopeId = getScopeId(cmpMeta, mode);
            const style = elm.constructor.style[mode];
            const flags = cmpMeta.$flags$;
            if (style) {
                if (!styles.has(scopeId)) {
                    registerStyle(scopeId, style, !!(flags & 1 /* CMP_FLAGS.shadowDomEncapsulation */));
                }
                hostRef.$modeName$ = mode;
                elm.classList.remove(oldScopeId + '-h', oldScopeId + '-s');
                attachStyles(hostRef);
                forceUpdate(elm);
            }
        }
    }
};
const patchCloneNode = (HostElementPrototype) => {
    const orgCloneNode = HostElementPrototype.cloneNode;
    HostElementPrototype.cloneNode = function (deep) {
        const srcNode = this;
        const isShadowDom = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom ? srcNode.shadowRoot && supportsShadow : false;
        const clonedNode = orgCloneNode.call(srcNode, isShadowDom ? deep : false);
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slot && !isShadowDom && deep) {
            let i = 0;
            let slotted, nonStencilNode;
            const stencilPrivates = [
                's-id',
                's-cr',
                's-lr',
                's-rc',
                's-sc',
                's-p',
                's-cn',
                's-sr',
                's-sn',
                's-hn',
                's-ol',
                's-nr',
                's-si',
            ];
            for (; i < srcNode.childNodes.length; i++) {
                slotted = srcNode.childNodes[i]['s-nr'];
                nonStencilNode = stencilPrivates.every((privateField) => !srcNode.childNodes[i][privateField]);
                if (slotted) {
                    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.appendChildSlotFix && clonedNode.__appendChild) {
                        clonedNode.__appendChild(slotted.cloneNode(true));
                    }
                    else {
                        clonedNode.appendChild(slotted.cloneNode(true));
                    }
                }
                if (nonStencilNode) {
                    clonedNode.appendChild(srcNode.childNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};
const patchSlotAppendChild = (HostElementPrototype) => {
    HostElementPrototype.__appendChild = HostElementPrototype.appendChild;
    HostElementPrototype.appendChild = function (newChild) {
        const slotName = (newChild['s-sn'] = getSlotName(newChild));
        const slotNode = getHostSlotNode(this.childNodes, slotName);
        if (slotNode) {
            const slotChildNodes = getHostSlotChildNodes(slotNode, slotName);
            const appendAfter = slotChildNodes[slotChildNodes.length - 1];
            return appendAfter.parentNode.insertBefore(newChild, appendAfter.nextSibling);
        }
        return this.__appendChild(newChild);
    };
};
/**
 * Patches the text content of an unnamed slotted node inside a scoped component
 * @param hostElementPrototype the `Element` to be patched
 * @param cmpMeta component runtime metadata used to determine if the component should be patched or not
 */
const patchTextContent = (hostElementPrototype, cmpMeta) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scoped && cmpMeta.$flags$ & 2 /* CMP_FLAGS.scopedCssEncapsulation */) {
        const descriptor = Object.getOwnPropertyDescriptor(Node.prototype, 'textContent');
        Object.defineProperty(hostElementPrototype, '__textContent', descriptor);
        Object.defineProperty(hostElementPrototype, 'textContent', {
            get() {
                var _a;
                // get the 'default slot', which would be the first slot in a shadow tree (if we were using one), whose name is
                // the empty string
                const slotNode = getHostSlotNode(this.childNodes, '');
                // when a slot node is found, the textContent _may_ be found in the next sibling (text) node, depending on how
                // nodes were reordered during the vdom render. first try to get the text content from the sibling.
                if (((_a = slotNode === null || slotNode === void 0 ? void 0 : slotNode.nextSibling) === null || _a === void 0 ? void 0 : _a.nodeType) === 3 /* NODE_TYPES.TEXT_NODE */) {
                    return slotNode.nextSibling.textContent;
                }
                else if (slotNode) {
                    return slotNode.textContent;
                }
                else {
                    // fallback to the original implementation
                    return this.__textContent;
                }
            },
            set(value) {
                var _a;
                // get the 'default slot', which would be the first slot in a shadow tree (if we were using one), whose name is
                // the empty string
                const slotNode = getHostSlotNode(this.childNodes, '');
                // when a slot node is found, the textContent _may_ need to be placed in the next sibling (text) node,
                // depending on how nodes were reordered during the vdom render. first try to set the text content on the
                // sibling.
                if (((_a = slotNode === null || slotNode === void 0 ? void 0 : slotNode.nextSibling) === null || _a === void 0 ? void 0 : _a.nodeType) === 3 /* NODE_TYPES.TEXT_NODE */) {
                    slotNode.nextSibling.textContent = value;
                }
                else if (slotNode) {
                    slotNode.textContent = value;
                }
                else {
                    // we couldn't find a slot, but that doesn't mean that there isn't one. if this check ran before the DOM
                    // loaded, we could have missed it. check for a content reference element on the scoped component and insert
                    // it there
                    this.__textContent = value;
                    const contentRefElm = this['s-cr'];
                    if (contentRefElm) {
                        this.insertBefore(contentRefElm, this.firstChild);
                    }
                }
            },
        });
    }
};
const patchChildSlotNodes = (elm, cmpMeta) => {
    class FakeNodeList extends Array {
        item(n) {
            return this[n];
        }
    }
    if (cmpMeta.$flags$ & 8 /* CMP_FLAGS.needsShadowDomShim */) {
        const childNodesFn = elm.__lookupGetter__('childNodes');
        Object.defineProperty(elm, 'children', {
            get() {
                return this.childNodes.map((n) => n.nodeType === 1);
            },
        });
        Object.defineProperty(elm, 'childElementCount', {
            get() {
                return elm.children.length;
            },
        });
        Object.defineProperty(elm, 'childNodes', {
            get() {
                const childNodes = childNodesFn.call(this);
                if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0 &&
                    getHostRef(this).$flags$ & 2 /* HOST_FLAGS.hasRendered */) {
                    const result = new FakeNodeList();
                    for (let i = 0; i < childNodes.length; i++) {
                        const slot = childNodes[i]['s-nr'];
                        if (slot) {
                            result.push(slot);
                        }
                    }
                    return result;
                }
                return FakeNodeList.from(childNodes);
            },
        });
    }
};
const getSlotName = (node) => node['s-sn'] || (node.nodeType === 1 && node.getAttribute('slot')) || '';
/**
 * Recursively searches a series of child nodes for a slot with the provided name.
 * @param childNodes the nodes to search for a slot with a specific name.
 * @param slotName the name of the slot to match on.
 * @returns a reference to the slot node that matches the provided name, `null` otherwise
 */
const getHostSlotNode = (childNodes, slotName) => {
    let i = 0;
    let childNode;
    for (; i < childNodes.length; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && childNode['s-sn'] === slotName) {
            return childNode;
        }
        childNode = getHostSlotNode(childNode.childNodes, slotName);
        if (childNode) {
            return childNode;
        }
    }
    return null;
};
const getHostSlotChildNodes = (n, slotName) => {
    const childNodes = [n];
    while ((n = n.nextSibling) && n['s-sn'] === slotName) {
        childNodes.push(n);
    }
    return childNodes;
};
const hmrStart = (elm, cmpMeta, hmrVersionId) => {
    // ¯\_(ツ)_/¯
    const hostRef = getHostRef(elm);
    // reset state flags to only have been connected
    hostRef.$flags$ = 1 /* HOST_FLAGS.hasConnected */;
    // TODO
    // detatch any event listeners that may have been added
    // because we're not passing an exact event name it'll
    // remove all of this element's event, which is good
    // create a callback for when this component finishes hmr
    elm['s-hmr-load'] = () => {
        // finished hmr for this element
        delete elm['s-hmr-load'];
    };
    // re-initialize the component
    initializeComponent(elm, hostRef, cmpMeta, hmrVersionId);
};
const bootstrapLazy = (lazyBundles, options = {}) => {
    var _a;
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.profile && performance.mark) {
        performance.mark('st:app:start');
    }
    installDevTools();
    const endBootstrap = createTime('bootstrapLazy');
    const cmpTags = [];
    const exclude = options.exclude || [];
    const customElements = win.customElements;
    const head = doc.head;
    const metaCharset = /*@__PURE__*/ head.querySelector('meta[charset]');
    const visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    const deferredConnectedCallbacks = [];
    const styles = /*@__PURE__*/ doc.querySelectorAll(`[${HYDRATED_STYLE_ID}]`);
    let appLoadFallback;
    let isBootstrapping = true;
    let i = 0;
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncQueue) {
        if (options.syncQueue) {
            plt.$flags$ |= 4 /* PLATFORM_FLAGS.queueSync */;
        }
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateClientSide) {
        // If the app is already hydrated there is not point to disable the
        // async queue. This will improve the first input delay
        plt.$flags$ |= 2 /* PLATFORM_FLAGS.appLoaded */;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateClientSide && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom) {
        for (; i < styles.length; i++) {
            registerStyle(styles[i].getAttribute(HYDRATED_STYLE_ID), convertScopedToShadow(styles[i].innerHTML), true);
        }
    }
    lazyBundles.map((lazyBundle) => {
        lazyBundle[1].map((compactMeta) => {
            const cmpMeta = {
                $flags$: compactMeta[0],
                $tagName$: compactMeta[1],
                $members$: compactMeta[2],
                $listeners$: compactMeta[3],
            };
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.member) {
                cmpMeta.$members$ = compactMeta[2];
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListener) {
                cmpMeta.$listeners$ = compactMeta[3];
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.reflect) {
                cmpMeta.$attrsToReflect$ = [];
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.watchCallback) {
                cmpMeta.$watchers$ = {};
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && !supportsShadow && cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) {
                cmpMeta.$flags$ |= 8 /* CMP_FLAGS.needsShadowDomShim */;
            }
            const tagName = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.transformTagName && options.transformTagName
                ? options.transformTagName(cmpMeta.$tagName$)
                : cmpMeta.$tagName$;
            const HostElement = class extends HTMLElement {
                // StencilLazyHost
                constructor(self) {
                    // @ts-ignore
                    super(self);
                    self = this;
                    registerHost(self, cmpMeta);
                    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) {
                        // this component is using shadow dom
                        // and this browser supports shadow dom
                        // add the read-only property "shadowRoot" to the host element
                        // adding the shadow root build conditionals to minimize runtime
                        if (supportsShadow) {
                            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDelegatesFocus) {
                                self.attachShadow({
                                    mode: 'open',
                                    delegatesFocus: !!(cmpMeta.$flags$ & 16 /* CMP_FLAGS.shadowDelegatesFocus */),
                                });
                            }
                            else {
                                self.attachShadow({ mode: 'open' });
                            }
                        }
                        else if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide && !('shadowRoot' in self)) {
                            self.shadowRoot = self;
                        }
                    }
                    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotChildNodesFix) {
                        patchChildSlotNodes(self, cmpMeta);
                    }
                }
                connectedCallback() {
                    if (appLoadFallback) {
                        clearTimeout(appLoadFallback);
                        appLoadFallback = null;
                    }
                    if (isBootstrapping) {
                        // connectedCallback will be processed once all components have been registered
                        deferredConnectedCallbacks.push(this);
                    }
                    else {
                        plt.jmp(() => connectedCallback(this));
                    }
                }
                disconnectedCallback() {
                    plt.jmp(() => disconnectedCallback(this));
                }
                componentOnReady() {
                    return getHostRef(this).$onReadyPromise$;
                }
            };
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cloneNodeFix) {
                patchCloneNode(HostElement.prototype);
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.appendChildSlotFix) {
                patchSlotAppendChild(HostElement.prototype);
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hotModuleReplacement) {
                HostElement.prototype['s-hmr'] = function (hmrVersionId) {
                    hmrStart(this, cmpMeta, hmrVersionId);
                };
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scopedSlotTextContentFix) {
                patchTextContent(HostElement.prototype, cmpMeta);
            }
            cmpMeta.$lazyBundleId$ = lazyBundle[0];
            if (!exclude.includes(tagName) && !customElements.get(tagName)) {
                cmpTags.push(tagName);
                customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* PROXY_FLAGS.isElementConstructor */));
            }
        });
    });
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.invisiblePrehydration && (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydratedClass || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydratedAttribute)) {
        visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
        visibilityStyle.setAttribute('data-styles', '');
        // Apply CSP nonce to the style tag if it exists
        const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
        if (nonce != null) {
            visibilityStyle.setAttribute('nonce', nonce);
        }
        head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
    // Process deferred connectedCallbacks now all components have been registered
    isBootstrapping = false;
    if (deferredConnectedCallbacks.length) {
        deferredConnectedCallbacks.map((host) => host.connectedCallback());
    }
    else {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.profile) {
            plt.jmp(() => (appLoadFallback = setTimeout(appDidLoad, 30, 'timeout')));
        }
        else {
            plt.jmp(() => (appLoadFallback = setTimeout(appDidLoad, 30)));
        }
    }
    // Fallback appLoad event
    endBootstrap();
};
const getConnect = (_ref, tagName) => {
    const componentOnReady = () => {
        let elm = doc.querySelector(tagName);
        if (!elm) {
            elm = doc.createElement(tagName);
            doc.body.appendChild(elm);
        }
        return typeof elm.componentOnReady === 'function' ? elm.componentOnReady() : Promise.resolve(elm);
    };
    const create = (...args) => {
        return componentOnReady().then((el) => el.create(...args));
    };
    return {
        create,
        componentOnReady,
    };
};
const getContext = (_elm, context) => {
    if (context in Context) {
        return Context[context];
    }
    else if (context === 'window') {
        return win;
    }
    else if (context === 'document') {
        return doc;
    }
    else if (context === 'isServer' || context === 'isPrerender') {
        return _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide ? true : false;
    }
    else if (context === 'isClient') {
        return _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide ? false : true;
    }
    else if (context === 'resourcesUrl' || context === 'publicPath') {
        return getAssetPath('.');
    }
    else if (context === 'queue') {
        return {
            write: writeTask,
            read: readTask,
            tick: {
                then(cb) {
                    return nextTick(cb);
                },
            },
        };
    }
    return undefined;
};
const Fragment = (_, children) => children;
const addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListener && listeners) {
        // this is called immediately within the element's constructor
        // initialize our event listeners on the host element
        // we do this now so that we can listen to events that may
        // have fired even before the instance is ready
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListenerTargetParent) {
            // this component may have event listeners that should be attached to the parent
            if (attachParentListeners) {
                // this is being ran from within the connectedCallback
                // which is important so that we know the host element actually has a parent element
                // filter out the listeners to only have the ones that ARE being attached to the parent
                listeners = listeners.filter(([flags]) => flags & 32 /* LISTENER_FLAGS.TargetParent */);
            }
            else {
                // this is being ran from within the component constructor
                // everything BUT the parent element listeners should be attached at this time
                // filter out the listeners that are NOT being attached to the parent
                listeners = listeners.filter(([flags]) => !(flags & 32 /* LISTENER_FLAGS.TargetParent */));
            }
        }
        listeners.map(([flags, name, method]) => {
            const target = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListenerTarget ? getHostListenerTarget(elm, flags) : elm;
            const handler = hostListenerProxy(hostRef, method);
            const opts = hostListenerOpts(flags);
            plt.ael(target, name, handler, opts);
            (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
        });
    }
};
const hostListenerProxy = (hostRef, methodName) => (ev) => {
    try {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad) {
            if (hostRef.$flags$ & 256 /* HOST_FLAGS.isListenReady */) {
                // instance is ready, let's call it's member method for this event
                hostRef.$lazyInstance$[methodName](ev);
            }
            else {
                (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
            }
        }
        else {
            hostRef.$hostElement$[methodName](ev);
        }
    }
    catch (e) {
        consoleError(e);
    }
};
const getHostListenerTarget = (elm, flags) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListenerTargetDocument && flags & 4 /* LISTENER_FLAGS.TargetDocument */)
        return doc;
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListenerTargetWindow && flags & 8 /* LISTENER_FLAGS.TargetWindow */)
        return win;
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListenerTargetBody && flags & 16 /* LISTENER_FLAGS.TargetBody */)
        return doc.body;
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListenerTargetParent && flags & 32 /* LISTENER_FLAGS.TargetParent */)
        return elm.parentElement;
    return elm;
};
// prettier-ignore
const hostListenerOpts = (flags) => supportsListenerOptions
    ? ({
        passive: (flags & 1 /* LISTENER_FLAGS.Passive */) !== 0,
        capture: (flags & 2 /* LISTENER_FLAGS.Capture */) !== 0,
    })
    : (flags & 2 /* LISTENER_FLAGS.Capture */) !== 0;
/**
 * Assigns the given value to the nonce property on the runtime platform object.
 * During runtime, this value is used to set the nonce attribute on all dynamically created script and style tags.
 * @param nonce The value to be assigned to the platform nonce property.
 * @returns void
 */
const setNonce = (nonce) => (plt.$nonce$ = nonce);
const setPlatformOptions = (opts) => Object.assign(plt, opts);
const insertVdomAnnotations = (doc, staticComponents) => {
    if (doc != null) {
        const docData = {
            hostIds: 0,
            rootLevelIds: 0,
            staticComponents: new Set(staticComponents),
        };
        const orgLocationNodes = [];
        parseVNodeAnnotations(doc, doc.body, docData, orgLocationNodes);
        orgLocationNodes.forEach((orgLocationNode) => {
            if (orgLocationNode != null) {
                const nodeRef = orgLocationNode['s-nr'];
                let hostId = nodeRef['s-host-id'];
                let nodeId = nodeRef['s-node-id'];
                let childId = `${hostId}.${nodeId}`;
                if (hostId == null) {
                    hostId = 0;
                    docData.rootLevelIds++;
                    nodeId = docData.rootLevelIds;
                    childId = `${hostId}.${nodeId}`;
                    if (nodeRef.nodeType === 1 /* NODE_TYPE.ElementNode */) {
                        nodeRef.setAttribute(HYDRATE_CHILD_ID, childId);
                    }
                    else if (nodeRef.nodeType === 3 /* NODE_TYPE.TextNode */) {
                        if (hostId === 0) {
                            const textContent = nodeRef.nodeValue.trim();
                            if (textContent === '') {
                                // useless whitespace node at the document root
                                orgLocationNode.remove();
                                return;
                            }
                        }
                        const commentBeforeTextNode = doc.createComment(childId);
                        commentBeforeTextNode.nodeValue = `${TEXT_NODE_ID}.${childId}`;
                        nodeRef.parentNode.insertBefore(commentBeforeTextNode, nodeRef);
                    }
                }
                let orgLocationNodeId = `${ORG_LOCATION_ID}.${childId}`;
                const orgLocationParentNode = orgLocationNode.parentElement;
                if (orgLocationParentNode) {
                    if (orgLocationParentNode['s-en'] === '') {
                        // ending with a "." means that the parent element
                        // of this node's original location is a SHADOW dom element
                        // and this node is apart of the root level light dom
                        orgLocationNodeId += `.`;
                    }
                    else if (orgLocationParentNode['s-en'] === 'c') {
                        // ending with a ".c" means that the parent element
                        // of this node's original location is a SCOPED element
                        // and this node is apart of the root level light dom
                        orgLocationNodeId += `.c`;
                    }
                }
                orgLocationNode.nodeValue = orgLocationNodeId;
            }
        });
    }
};
const parseVNodeAnnotations = (doc, node, docData, orgLocationNodes) => {
    if (node == null) {
        return;
    }
    if (node['s-nr'] != null) {
        orgLocationNodes.push(node);
    }
    if (node.nodeType === 1 /* NODE_TYPE.ElementNode */) {
        node.childNodes.forEach((childNode) => {
            const hostRef = getHostRef(childNode);
            if (hostRef != null && !docData.staticComponents.has(childNode.nodeName.toLowerCase())) {
                const cmpData = {
                    nodeIds: 0,
                };
                insertVNodeAnnotations(doc, childNode, hostRef.$vnode$, docData, cmpData);
            }
            parseVNodeAnnotations(doc, childNode, docData, orgLocationNodes);
        });
    }
};
const insertVNodeAnnotations = (doc, hostElm, vnode, docData, cmpData) => {
    if (vnode != null) {
        const hostId = ++docData.hostIds;
        hostElm.setAttribute(HYDRATE_ID, hostId);
        if (hostElm['s-cr'] != null) {
            hostElm['s-cr'].nodeValue = `${CONTENT_REF_ID}.${hostId}`;
        }
        if (vnode.$children$ != null) {
            const depth = 0;
            vnode.$children$.forEach((vnodeChild, index) => {
                insertChildVNodeAnnotations(doc, vnodeChild, cmpData, hostId, depth, index);
            });
        }
        if (hostElm && vnode && vnode.$elm$ && !hostElm.hasAttribute('c-id')) {
            const parent = hostElm.parentElement;
            if (parent && parent.childNodes) {
                const parentChildNodes = Array.from(parent.childNodes);
                const comment = parentChildNodes.find((node) => node.nodeType === 8 /* NODE_TYPE.CommentNode */ && node['s-sr']);
                if (comment) {
                    const index = parentChildNodes.indexOf(hostElm) - 1;
                    vnode.$elm$.setAttribute(HYDRATE_CHILD_ID, `${comment['s-host-id']}.${comment['s-node-id']}.0.${index}`);
                }
            }
        }
    }
};
const insertChildVNodeAnnotations = (doc, vnodeChild, cmpData, hostId, depth, index) => {
    const childElm = vnodeChild.$elm$;
    if (childElm == null) {
        return;
    }
    const nodeId = cmpData.nodeIds++;
    const childId = `${hostId}.${nodeId}.${depth}.${index}`;
    childElm['s-host-id'] = hostId;
    childElm['s-node-id'] = nodeId;
    if (childElm.nodeType === 1 /* NODE_TYPE.ElementNode */) {
        childElm.setAttribute(HYDRATE_CHILD_ID, childId);
    }
    else if (childElm.nodeType === 3 /* NODE_TYPE.TextNode */) {
        const parentNode = childElm.parentNode;
        const nodeName = parentNode.nodeName;
        if (nodeName !== 'STYLE' && nodeName !== 'SCRIPT') {
            const textNodeId = `${TEXT_NODE_ID}.${childId}`;
            const commentBeforeTextNode = doc.createComment(textNodeId);
            parentNode.insertBefore(commentBeforeTextNode, childElm);
        }
    }
    else if (childElm.nodeType === 8 /* NODE_TYPE.CommentNode */) {
        if (childElm['s-sr']) {
            const slotName = childElm['s-sn'] || '';
            const slotNodeId = `${SLOT_NODE_ID}.${childId}.${slotName}`;
            childElm.nodeValue = slotNodeId;
        }
    }
    if (vnodeChild.$children$ != null) {
        const childDepth = depth + 1;
        vnodeChild.$children$.forEach((vnode, index) => {
            insertChildVNodeAnnotations(doc, vnode, cmpData, hostId, childDepth, index);
        });
    }
};
const hostRefs = /*@__PURE__*/ new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef) => hostRefs.set((hostRef.$lazyInstance$ = lazyInstance), hostRef);
const registerHost = (elm, cmpMeta) => {
    const hostRef = {
        $flags$: 0,
        $hostElement$: elm,
        $cmpMeta$: cmpMeta,
        $instanceValues$: new Map(),
    };
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
        hostRef.$renderCount$ = 0;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.method && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad) {
        hostRef.$onInstancePromise$ = new Promise((r) => (hostRef.$onInstanceResolve$ = r));
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading) {
        hostRef.$onReadyPromise$ = new Promise((r) => (hostRef.$onReadyResolve$ = r));
        elm['s-p'] = [];
        elm['s-rc'] = [];
    }
    addHostEventListeners(elm, hostRef, cmpMeta.$listeners$, false);
    return hostRefs.set(elm, hostRef);
};
const isMemberInElement = (elm, memberName) => memberName in elm;
const consoleError = (e, el) => (customError || console.error)(e, el);
const STENCIL_DEV_MODE = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isTesting
    ? ['STENCIL:'] // E2E testing
    : [
        '%cstencil',
        'color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px',
    ];
const consoleDevError = (...m) => console.error(...STENCIL_DEV_MODE, ...m);
const consoleDevWarn = (...m) => console.warn(...STENCIL_DEV_MODE, ...m);
const consoleDevInfo = (...m) => console.info(...STENCIL_DEV_MODE, ...m);
const setErrorHandler = (handler) => (customError = handler);
const cmpModules = /*@__PURE__*/ new Map();
const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
    // loadModuleImport
    const exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    const bundleId = cmpMeta.$lazyBundleId$;
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev && typeof bundleId !== 'string') {
        consoleDevError(`Trying to lazily load component <${cmpMeta.$tagName$}> with style mode "${hostRef.$modeName$}", but it does not exist.`);
        return undefined;
    }
    const module = !_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hotModuleReplacement ? cmpModules.get(bundleId) : false;
    if (module) {
        return module[exportName];
    }
    /*!__STENCIL_STATIC_IMPORT_SWITCH__*/
    return __webpack_require__("./node_modules/@stencil/core/internal/client lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$")(`./${bundleId}.entry.js${_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hotModuleReplacement && hmrVersionId ? '?s-hmr=' + hmrVersionId : ''}`).then((importedModule) => {
        if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hotModuleReplacement) {
            cmpModules.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
const styles = /*@__PURE__*/ new Map();
const modeResolutionChain = [];
const win = typeof window !== 'undefined' ? window : {};
const CSS = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cssVarShim ? win.CSS : null;
const doc = win.document || { head: {} };
const H = (win.HTMLElement || class {
});
const plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (h) => h(),
    raf: (h) => requestAnimationFrame(h),
    ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
    ce: (eventName, opts) => new CustomEvent(eventName, opts),
};
const setPlatformHelpers = (helpers) => {
    Object.assign(plt, helpers);
};
const supportsShadow = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDomShim && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom
    ? /*@__PURE__*/ (() => (doc.head.attachShadow + '').indexOf('[native') > -1)()
    : true;
const supportsListenerOptions = /*@__PURE__*/ (() => {
    let supportsListenerOptions = false;
    try {
        doc.addEventListener('e', null, Object.defineProperty({}, 'passive', {
            get() {
                supportsListenerOptions = true;
            },
        }));
    }
    catch (e) { }
    return supportsListenerOptions;
})();
const promiseResolve = (v) => Promise.resolve(v);
const supportsConstructableStylesheets = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.constructableCSS
    ? /*@__PURE__*/ (() => {
        try {
            new CSSStyleSheet();
            return typeof new CSSStyleSheet().replaceSync === 'function';
        }
        catch (e) { }
        return false;
    })()
    : false;
const queueDomReads = [];
const queueDomWrites = [];
const queueDomWritesLow = [];
const queueTask = (queue, write) => (cb) => {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* PLATFORM_FLAGS.queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
};
const consume = (queue) => {
    for (let i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
const consumeTimeout = (queue, timeout) => {
    let i = 0;
    let ts = 0;
    while (i < queue.length && (ts = performance.now()) < timeout) {
        try {
            queue[i++](ts);
        }
        catch (e) {
            consoleError(e);
        }
    }
    if (i === queue.length) {
        queue.length = 0;
    }
    else if (i !== 0) {
        queue.splice(0, i);
    }
};
const flush = () => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncQueue) {
        queueCongestion++;
    }
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    // DOM WRITES!!!
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncQueue) {
        const timeout = (plt.$flags$ & 6 /* PLATFORM_FLAGS.queueMask */) === 2 /* PLATFORM_FLAGS.appLoaded */
            ? performance.now() + 14 * Math.ceil(queueCongestion * (1.0 / 10.0))
            : Infinity;
        consumeTimeout(queueDomWrites, timeout);
        consumeTimeout(queueDomWritesLow, timeout);
        if (queueDomWrites.length > 0) {
            queueDomWritesLow.push(...queueDomWrites);
            queueDomWrites.length = 0;
        }
        if ((queuePending = queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length > 0)) {
            // still more to do yet, but we've run out of time
            // let's let this thing cool off and try again in the next tick
            plt.raf(flush);
        }
        else {
            queueCongestion = 0;
        }
    }
    else {
        consume(queueDomWrites);
        if ((queuePending = queueDomReads.length > 0)) {
            // still more to do yet, but we've run out of time
            // let's let this thing cool off and try again in the next tick
            plt.raf(flush);
        }
    }
};
const nextTick = /*@__PURE__*/ (cb) => promiseResolve().then(cb);
const readTask = /*@__PURE__*/ queueTask(queueDomReads, false);
const writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);




/***/ }),

/***/ "./node_modules/@stencil/core/internal/app-data/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/app-data/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BUILD: () => (/* binding */ BUILD),
/* harmony export */   Env: () => (/* binding */ Env),
/* harmony export */   NAMESPACE: () => (/* binding */ NAMESPACE)
/* harmony export */ });
const BUILD = {
    allRenderFn: false,
    cmpDidLoad: true,
    cmpDidUnload: false,
    cmpDidUpdate: true,
    cmpDidRender: true,
    cmpWillLoad: true,
    cmpWillUpdate: true,
    cmpWillRender: true,
    connectedCallback: true,
    disconnectedCallback: true,
    element: true,
    event: true,
    hasRenderFn: true,
    lifecycle: true,
    hostListener: true,
    hostListenerTargetWindow: true,
    hostListenerTargetDocument: true,
    hostListenerTargetBody: true,
    hostListenerTargetParent: false,
    hostListenerTarget: true,
    member: true,
    method: true,
    mode: true,
    observeAttribute: true,
    prop: true,
    propMutable: true,
    reflect: true,
    scoped: true,
    shadowDom: true,
    slot: true,
    cssAnnotations: true,
    state: true,
    style: true,
    svg: true,
    updatable: true,
    vdomAttribute: true,
    vdomXlink: true,
    vdomClass: true,
    vdomFunctional: true,
    vdomKey: true,
    vdomListener: true,
    vdomRef: true,
    vdomPropOrAttr: true,
    vdomRender: true,
    vdomStyle: true,
    vdomText: true,
    watchCallback: true,
    taskQueue: true,
    hotModuleReplacement: false,
    isDebug: false,
    isDev: false,
    isTesting: false,
    hydrateServerSide: false,
    hydrateClientSide: false,
    lifecycleDOMEvents: false,
    lazyLoad: false,
    profile: false,
    slotRelocation: true,
    appendChildSlotFix: false,
    cloneNodeFix: false,
    hydratedAttribute: false,
    hydratedClass: true,
    safari10: false,
    scriptDataOpts: false,
    scopedSlotTextContentFix: false,
    shadowDomShim: false,
    slotChildNodesFix: false,
    invisiblePrehydration: true,
    propBoolean: true,
    propNumber: true,
    propString: true,
    cssVarShim: false,
    constructableCSS: true,
    cmpShouldUpdate: true,
    devTools: false,
    dynamicImportShim: false,
    shadowDelegatesFocus: true,
    initializeNextTick: false,
    asyncLoading: false,
    asyncQueue: false,
    transformTagName: false,
    attachStyles: true,
};
const Env = {};
const NAMESPACE = /* default */ 'app';




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvN2Y2ZjU0NDFmNmY3MjQ5YjAwMWY5ZDI1NjZkM2FlMDUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtRTtBQUNuRTtBQUNBLFdBQVcsa0VBQUs7QUFDaEI7QUFDQTtBQUNBLGVBQWUsa0VBQUs7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQUs7QUFDYiwwQkFBMEIsT0FBTyxHQUFHLFFBQVEsR0FBRyxJQUFJO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxPQUFPLE1BQU0sUUFBUTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBSztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFLO0FBQ2Isd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0VBQUs7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0VBQUs7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9hcHAtZGF0YS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFZpcnR1YWwgRE9NIHBhdGNoaW5nIGFsZ29yaXRobSBiYXNlZCBvbiBTbmFiYmRvbSBieVxuICogU2ltb24gRnJpaXMgVmluZHVtIChAcGFsZGVwaW5kKVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc25hYmJkb20vc25hYmJkb20vYmxvYi9tYXN0ZXIvTElDRU5TRVxuICpcbiAqIE1vZGlmaWVkIGZvciBTdGVuY2lsJ3MgcmVuZGVyZXIgYW5kIHNsb3QgcHJvamVjdGlvblxuICovXG5sZXQgc2NvcGVJZDtcbmxldCBjb250ZW50UmVmO1xubGV0IGhvc3RUYWdOYW1lO1xubGV0IGN1c3RvbUVycm9yO1xubGV0IGkgPSAwO1xubGV0IHVzZU5hdGl2ZVNoYWRvd0RvbSA9IGZhbHNlO1xubGV0IGNoZWNrU2xvdEZhbGxiYWNrVmlzaWJpbGl0eSA9IGZhbHNlO1xubGV0IGNoZWNrU2xvdFJlbG9jYXRlID0gZmFsc2U7XG5sZXQgaXNTdmdNb2RlID0gZmFsc2U7XG5sZXQgcmVuZGVyaW5nUmVmID0gbnVsbDtcbmxldCBxdWV1ZUNvbmdlc3Rpb24gPSAwO1xubGV0IHF1ZXVlUGVuZGluZyA9IGZhbHNlO1xuLypcbiBTdGVuY2lsIENsaWVudCBQbGF0Zm9ybSB2Mi4yMi4zIHwgTUlUIExpY2Vuc2VkIHwgaHR0cHM6Ly9zdGVuY2lsanMuY29tXG4gKi9cbmltcG9ydCB7IEJVSUxELCBOQU1FU1BBQ0UgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2FwcC1kYXRhJztcbmNvbnN0IEJ1aWxkID0ge1xuICAgIGlzRGV2OiBCVUlMRC5pc0RldiA/IHRydWUgOiBmYWxzZSxcbiAgICBpc0Jyb3dzZXI6IHRydWUsXG4gICAgaXNTZXJ2ZXI6IGZhbHNlLFxuICAgIGlzVGVzdGluZzogQlVJTEQuaXNUZXN0aW5nID8gdHJ1ZSA6IGZhbHNlLFxufTtcbmNvbnN0IENvbnRleHQgPSB7fTtcbmNvbnN0IGdldEFzc2V0UGF0aCA9IChwYXRoKSA9PiB7XG4gICAgY29uc3QgYXNzZXRVcmwgPSBuZXcgVVJMKHBhdGgsIHBsdC4kcmVzb3VyY2VzVXJsJCk7XG4gICAgcmV0dXJuIGFzc2V0VXJsLm9yaWdpbiAhPT0gd2luLmxvY2F0aW9uLm9yaWdpbiA/IGFzc2V0VXJsLmhyZWYgOiBhc3NldFVybC5wYXRobmFtZTtcbn07XG5jb25zdCBzZXRBc3NldFBhdGggPSAocGF0aCkgPT4gKHBsdC4kcmVzb3VyY2VzVXJsJCA9IHBhdGgpO1xuY29uc3QgY3JlYXRlVGltZSA9IChmbk5hbWUsIHRhZ05hbWUgPSAnJykgPT4ge1xuICAgIGlmIChCVUlMRC5wcm9maWxlICYmIHBlcmZvcm1hbmNlLm1hcmspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYHN0OiR7Zm5OYW1lfToke3RhZ05hbWV9OiR7aSsrfWA7XG4gICAgICAgIC8vIFN0YXJ0XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoa2V5KTtcbiAgICAgICAgLy8gRW5kXG4gICAgICAgIHJldHVybiAoKSA9PiBwZXJmb3JtYW5jZS5tZWFzdXJlKGBbU3RlbmNpbF0gJHtmbk5hbWV9KCkgPCR7dGFnTmFtZX0+YCwga2V5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgfVxufTtcbmNvbnN0IHVuaXF1ZVRpbWUgPSAoa2V5LCBtZWFzdXJlVGV4dCkgPT4ge1xuICAgIGlmIChCVUlMRC5wcm9maWxlICYmIHBlcmZvcm1hbmNlLm1hcmspIHtcbiAgICAgICAgaWYgKHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeU5hbWUoa2V5LCAnbWFyaycpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyayhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5TmFtZShtZWFzdXJlVGV4dCwgJ21lYXN1cmUnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tZWFzdXJlKG1lYXN1cmVUZXh0LCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICB9XG59O1xuY29uc3QgaW5zcGVjdCA9IChyZWYpID0+IHtcbiAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihyZWYpO1xuICAgIGlmICghaG9zdFJlZikge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBmbGFncyA9IGhvc3RSZWYuJGZsYWdzJDtcbiAgICBjb25zdCBob3N0RWxlbWVudCA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJDb3VudDogaG9zdFJlZi4kcmVuZGVyQ291bnQkLFxuICAgICAgICBmbGFnczoge1xuICAgICAgICAgICAgaGFzUmVuZGVyZWQ6ICEhKGZsYWdzICYgMiAvKiBIT1NUX0ZMQUdTLmhhc1JlbmRlcmVkICovKSxcbiAgICAgICAgICAgIGhhc0Nvbm5lY3RlZDogISEoZmxhZ3MgJiAxIC8qIEhPU1RfRkxBR1MuaGFzQ29ubmVjdGVkICovKSxcbiAgICAgICAgICAgIGlzV2FpdGluZ0ZvckNoaWxkcmVuOiAhIShmbGFncyAmIDQgLyogSE9TVF9GTEFHUy5pc1dhaXRpbmdGb3JDaGlsZHJlbiAqLyksXG4gICAgICAgICAgICBpc0NvbnN0cnVjdGluZ0luc3RhbmNlOiAhIShmbGFncyAmIDggLyogSE9TVF9GTEFHUy5pc0NvbnN0cnVjdGluZ0luc3RhbmNlICovKSxcbiAgICAgICAgICAgIGlzUXVldWVkRm9yVXBkYXRlOiAhIShmbGFncyAmIDE2IC8qIEhPU1RfRkxBR1MuaXNRdWV1ZWRGb3JVcGRhdGUgKi8pLFxuICAgICAgICAgICAgaGFzSW5pdGlhbGl6ZWRDb21wb25lbnQ6ICEhKGZsYWdzICYgMzIgLyogSE9TVF9GTEFHUy5oYXNJbml0aWFsaXplZENvbXBvbmVudCAqLyksXG4gICAgICAgICAgICBoYXNMb2FkZWRDb21wb25lbnQ6ICEhKGZsYWdzICYgNjQgLyogSE9TVF9GTEFHUy5oYXNMb2FkZWRDb21wb25lbnQgKi8pLFxuICAgICAgICAgICAgaXNXYXRjaFJlYWR5OiAhIShmbGFncyAmIDEyOCAvKiBIT1NUX0ZMQUdTLmlzV2F0Y2hSZWFkeSAqLyksXG4gICAgICAgICAgICBpc0xpc3RlblJlYWR5OiAhIShmbGFncyAmIDI1NiAvKiBIT1NUX0ZMQUdTLmlzTGlzdGVuUmVhZHkgKi8pLFxuICAgICAgICAgICAgbmVlZHNSZXJlbmRlcjogISEoZmxhZ3MgJiA1MTIgLyogSE9TVF9GTEFHUy5uZWVkc1JlcmVuZGVyICovKSxcbiAgICAgICAgfSxcbiAgICAgICAgaW5zdGFuY2VWYWx1ZXM6IGhvc3RSZWYuJGluc3RhbmNlVmFsdWVzJCxcbiAgICAgICAgYW5jZXN0b3JDb21wb25lbnQ6IGhvc3RSZWYuJGFuY2VzdG9yQ29tcG9uZW50JCxcbiAgICAgICAgaG9zdEVsZW1lbnQsXG4gICAgICAgIGxhenlJbnN0YW5jZTogaG9zdFJlZi4kbGF6eUluc3RhbmNlJCxcbiAgICAgICAgdm5vZGU6IGhvc3RSZWYuJHZub2RlJCxcbiAgICAgICAgbW9kZU5hbWU6IGhvc3RSZWYuJG1vZGVOYW1lJCxcbiAgICAgICAgb25SZWFkeVByb21pc2U6IGhvc3RSZWYuJG9uUmVhZHlQcm9taXNlJCxcbiAgICAgICAgb25SZWFkeVJlc29sdmU6IGhvc3RSZWYuJG9uUmVhZHlSZXNvbHZlJCxcbiAgICAgICAgb25JbnN0YW5jZVByb21pc2U6IGhvc3RSZWYuJG9uSW5zdGFuY2VQcm9taXNlJCxcbiAgICAgICAgb25JbnN0YW5jZVJlc29sdmU6IGhvc3RSZWYuJG9uSW5zdGFuY2VSZXNvbHZlJCxcbiAgICAgICAgb25SZW5kZXJSZXNvbHZlOiBob3N0UmVmLiRvblJlbmRlclJlc29sdmUkLFxuICAgICAgICBxdWV1ZWRMaXN0ZW5lcnM6IGhvc3RSZWYuJHF1ZXVlZExpc3RlbmVycyQsXG4gICAgICAgIHJtTGlzdGVuZXJzOiBob3N0UmVmLiRybUxpc3RlbmVycyQsXG4gICAgICAgIFsncy1pZCddOiBob3N0RWxlbWVudFsncy1pZCddLFxuICAgICAgICBbJ3MtY3InXTogaG9zdEVsZW1lbnRbJ3MtY3InXSxcbiAgICAgICAgWydzLWxyJ106IGhvc3RFbGVtZW50WydzLWxyJ10sXG4gICAgICAgIFsncy1wJ106IGhvc3RFbGVtZW50WydzLXAnXSxcbiAgICAgICAgWydzLXJjJ106IGhvc3RFbGVtZW50WydzLXJjJ10sXG4gICAgICAgIFsncy1zYyddOiBob3N0RWxlbWVudFsncy1zYyddLFxuICAgIH07XG59O1xuY29uc3QgaW5zdGFsbERldlRvb2xzID0gKCkgPT4ge1xuICAgIGlmIChCVUlMRC5kZXZUb29scykge1xuICAgICAgICBjb25zdCBzdGVuY2lsID0gKHdpbi5zdGVuY2lsID0gd2luLnN0ZW5jaWwgfHwge30pO1xuICAgICAgICBjb25zdCBvcmlnaW5hbEluc3BlY3QgPSBzdGVuY2lsLmluc3BlY3Q7XG4gICAgICAgIHN0ZW5jaWwuaW5zcGVjdCA9IChyZWYpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBpbnNwZWN0KHJlZik7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCAmJiB0eXBlb2Ygb3JpZ2luYWxJbnNwZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gb3JpZ2luYWxJbnNwZWN0KHJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgIH1cbn07XG5jb25zdCBDT05URU5UX1JFRl9JRCA9ICdyJztcbmNvbnN0IE9SR19MT0NBVElPTl9JRCA9ICdvJztcbmNvbnN0IFNMT1RfTk9ERV9JRCA9ICdzJztcbmNvbnN0IFRFWFRfTk9ERV9JRCA9ICd0JztcbmNvbnN0IEhZRFJBVEVfSUQgPSAncy1pZCc7XG5jb25zdCBIWURSQVRFRF9TVFlMRV9JRCA9ICdzdHktaWQnO1xuY29uc3QgSFlEUkFURV9DSElMRF9JRCA9ICdjLWlkJztcbmNvbnN0IEhZRFJBVEVEX0NTUyA9ICd7dmlzaWJpbGl0eTpoaWRkZW59Lmh5ZHJhdGVke3Zpc2liaWxpdHk6aW5oZXJpdH0nO1xuY29uc3QgWExJTktfTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc7XG4vKipcbiAqIERlZmF1bHQgc3R5bGUgbW9kZSBpZFxuICovXG4vKipcbiAqIFJldXNhYmxlIGVtcHR5IG9iai9hcnJheVxuICogRG9uJ3QgYWRkIHZhbHVlcyB0byB0aGVzZSEhXG4gKi9cbmNvbnN0IEVNUFRZX09CSiA9IHt9O1xuLyoqXG4gKiBOYW1lc3BhY2VzXG4gKi9cbmNvbnN0IFNWR19OUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5jb25zdCBIVE1MX05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuY29uc3QgaXNEZWYgPSAodikgPT4gdiAhPSBudWxsO1xuY29uc3QgaXNDb21wbGV4VHlwZSA9IChvKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9qc3BlcmYuY29tL3R5cGVvZi1mbi1vYmplY3QvNVxuICAgIG8gPSB0eXBlb2YgbztcbiAgICByZXR1cm4gbyA9PT0gJ29iamVjdCcgfHwgbyA9PT0gJ2Z1bmN0aW9uJztcbn07XG4vKipcbiAqIEhlbHBlciBtZXRob2QgZm9yIHF1ZXJ5aW5nIGEgYG1ldGFgIHRhZyB0aGF0IGNvbnRhaW5zIGEgbm9uY2UgdmFsdWVcbiAqIG91dCBvZiBhIERPTSdzIGhlYWQuXG4gKlxuICogQHBhcmFtIGRvYyBUaGUgRE9NIGNvbnRhaW5pbmcgdGhlIGBoZWFkYCB0byBxdWVyeSBhZ2FpbnN0XG4gKiBAcmV0dXJucyBUaGUgY29udGVudCBvZiB0aGUgbWV0YSB0YWcgcmVwcmVzZW50aW5nIHRoZSBub25jZSB2YWx1ZSwgb3IgYHVuZGVmaW5lZGAgaWYgbm8gdGFnXG4gKiBleGlzdHMgb3IgdGhlIHRhZyBoYXMgbm8gY29udGVudC5cbiAqL1xuZnVuY3Rpb24gcXVlcnlOb25jZU1ldGFUYWdDb250ZW50KGRvYykge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIHJldHVybiAoX2MgPSAoX2IgPSAoX2EgPSBkb2MuaGVhZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcC1ub25jZVwiXScpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZ2V0QXR0cmlidXRlKCdjb250ZW50JykpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IHVuZGVmaW5lZDtcbn1cbi8qKlxuICogUHJvZHVjdGlvbiBoKCkgZnVuY3Rpb24gYmFzZWQgb24gUHJlYWN0IGJ5XG4gKiBKYXNvbiBNaWxsZXIgKEBkZXZlbG9waXQpXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvcHJlYWN0L2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqXG4gKiBNb2RpZmllZCBmb3IgU3RlbmNpbCdzIGNvbXBpbGVyIGFuZCB2ZG9tXG4gKi9cbi8vIGV4cG9ydCBmdW5jdGlvbiBoKG5vZGVOYW1lOiBzdHJpbmcgfCBkLkZ1bmN0aW9uYWxDb21wb25lbnQsIHZub2RlRGF0YTogZC5Qcm9wc1R5cGUsIGNoaWxkPzogZC5DaGlsZFR5cGUpOiBkLlZOb2RlO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGgobm9kZU5hbWU6IHN0cmluZyB8IGQuRnVuY3Rpb25hbENvbXBvbmVudCwgdm5vZGVEYXRhOiBkLlByb3BzVHlwZSwgLi4uY2hpbGRyZW46IGQuQ2hpbGRUeXBlW10pOiBkLlZOb2RlO1xuY29uc3QgaCA9IChub2RlTmFtZSwgdm5vZGVEYXRhLCAuLi5jaGlsZHJlbikgPT4ge1xuICAgIGxldCBjaGlsZCA9IG51bGw7XG4gICAgbGV0IGtleSA9IG51bGw7XG4gICAgbGV0IHNsb3ROYW1lID0gbnVsbDtcbiAgICBsZXQgc2ltcGxlID0gZmFsc2U7XG4gICAgbGV0IGxhc3RTaW1wbGUgPSBmYWxzZTtcbiAgICBjb25zdCB2Tm9kZUNoaWxkcmVuID0gW107XG4gICAgY29uc3Qgd2FsayA9IChjKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2hpbGQgPSBjW2ldO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgd2FsayhjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZCAhPSBudWxsICYmIHR5cGVvZiBjaGlsZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgaWYgKChzaW1wbGUgPSB0eXBlb2Ygbm9kZU5hbWUgIT09ICdmdW5jdGlvbicgJiYgIWlzQ29tcGxleFR5cGUoY2hpbGQpKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IFN0cmluZyhjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKEJVSUxELmlzRGV2ICYmIHR5cGVvZiBub2RlTmFtZSAhPT0gJ2Z1bmN0aW9uJyAmJiBjaGlsZC4kZmxhZ3MkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZURldkVycm9yKGB2Tm9kZSBwYXNzZWQgYXMgY2hpbGRyZW4gaGFzIHVuZXhwZWN0ZWQgdHlwZS5cbk1ha2Ugc3VyZSBpdCdzIHVzaW5nIHRoZSBjb3JyZWN0IGgoKSBmdW5jdGlvbi5cbkVtcHR5IG9iamVjdHMgY2FuIGFsc28gYmUgdGhlIGNhdXNlLCBsb29rIGZvciBKU1ggY29tbWVudHMgdGhhdCBiZWNhbWUgb2JqZWN0cy5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNpbXBsZSAmJiBsYXN0U2ltcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBwcmV2aW91cyBjaGlsZCB3YXMgc2ltcGxlIChzdHJpbmcpLCB3ZSBtZXJnZSBib3RoXG4gICAgICAgICAgICAgICAgICAgIHZOb2RlQ2hpbGRyZW5bdk5vZGVDaGlsZHJlbi5sZW5ndGggLSAxXS4kdGV4dCQgKz0gY2hpbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBBcHBlbmQgYSBuZXcgdk5vZGUsIGlmIGl0J3MgdGV4dCwgd2UgY3JlYXRlIGEgdGV4dCB2Tm9kZVxuICAgICAgICAgICAgICAgICAgICB2Tm9kZUNoaWxkcmVuLnB1c2goc2ltcGxlID8gbmV3Vk5vZGUobnVsbCwgY2hpbGQpIDogY2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYXN0U2ltcGxlID0gc2ltcGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB3YWxrKGNoaWxkcmVuKTtcbiAgICBpZiAodm5vZGVEYXRhKSB7XG4gICAgICAgIGlmIChCVUlMRC5pc0RldiAmJiBub2RlTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgdmFsaWRhdGVJbnB1dFByb3BlcnRpZXModm5vZGVEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBub3JtYWxpemUgY2xhc3MgLyBjbGFzc25hbWUgYXR0cmlidXRlc1xuICAgICAgICBpZiAoQlVJTEQudmRvbUtleSAmJiB2bm9kZURhdGEua2V5KSB7XG4gICAgICAgICAgICBrZXkgPSB2bm9kZURhdGEua2V5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiB2bm9kZURhdGEubmFtZSkge1xuICAgICAgICAgICAgc2xvdE5hbWUgPSB2bm9kZURhdGEubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQlVJTEQudmRvbUNsYXNzKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc0RhdGEgPSB2bm9kZURhdGEuY2xhc3NOYW1lIHx8IHZub2RlRGF0YS5jbGFzcztcbiAgICAgICAgICAgIGlmIChjbGFzc0RhdGEpIHtcbiAgICAgICAgICAgICAgICB2bm9kZURhdGEuY2xhc3MgPVxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgY2xhc3NEYXRhICE9PSAnb2JqZWN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBjbGFzc0RhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIDogT2JqZWN0LmtleXMoY2xhc3NEYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGspID0+IGNsYXNzRGF0YVtrXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignICcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChCVUlMRC5pc0RldiAmJiB2Tm9kZUNoaWxkcmVuLnNvbWUoaXNIb3N0KSkge1xuICAgICAgICBjb25zb2xlRGV2RXJyb3IoYFRoZSA8SG9zdD4gbXVzdCBiZSB0aGUgc2luZ2xlIHJvb3QgY29tcG9uZW50LiBNYWtlIHN1cmU6XG4tIFlvdSBhcmUgTk9UIHVzaW5nIGhvc3REYXRhKCkgYW5kIDxIb3N0PiBpbiB0aGUgc2FtZSBjb21wb25lbnQuXG4tIDxIb3N0PiBpcyB1c2VkIG9uY2UsIGFuZCBpdCdzIHRoZSBzaW5nbGUgcm9vdCBjb21wb25lbnQgb2YgdGhlIHJlbmRlcigpIGZ1bmN0aW9uLmApO1xuICAgIH1cbiAgICBpZiAoQlVJTEQudmRvbUZ1bmN0aW9uYWwgJiYgdHlwZW9mIG5vZGVOYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vZGVOYW1lIGlzIGEgZnVuY3Rpb25hbCBjb21wb25lbnRcbiAgICAgICAgcmV0dXJuIG5vZGVOYW1lKHZub2RlRGF0YSA9PT0gbnVsbCA/IHt9IDogdm5vZGVEYXRhLCB2Tm9kZUNoaWxkcmVuLCB2ZG9tRm5VdGlscyk7XG4gICAgfVxuICAgIGNvbnN0IHZub2RlID0gbmV3Vk5vZGUobm9kZU5hbWUsIG51bGwpO1xuICAgIHZub2RlLiRhdHRycyQgPSB2bm9kZURhdGE7XG4gICAgaWYgKHZOb2RlQ2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICB2bm9kZS4kY2hpbGRyZW4kID0gdk5vZGVDaGlsZHJlbjtcbiAgICB9XG4gICAgaWYgKEJVSUxELnZkb21LZXkpIHtcbiAgICAgICAgdm5vZGUuJGtleSQgPSBrZXk7XG4gICAgfVxuICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbikge1xuICAgICAgICB2bm9kZS4kbmFtZSQgPSBzbG90TmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHZub2RlO1xufTtcbi8qKlxuICogQSB1dGlsaXR5IGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhIHZpcnR1YWwgRE9NIG5vZGUgZnJvbSBhIHRhZyBhbmQgc29tZVxuICogcG9zc2libGUgdGV4dCBjb250ZW50LlxuICpcbiAqIEBwYXJhbSB0YWcgdGhlIHRhZyBmb3IgdGhpcyBlbGVtZW50XG4gKiBAcGFyYW0gdGV4dCBwb3NzaWJsZSB0ZXh0IGNvbnRlbnQgZm9yIHRoZSBub2RlXG4gKiBAcmV0dXJucyBhIG5ld2x5LW1pbnRlZCB2aXJ0dWFsIERPTSBub2RlXG4gKi9cbmNvbnN0IG5ld1ZOb2RlID0gKHRhZywgdGV4dCkgPT4ge1xuICAgIGNvbnN0IHZub2RlID0ge1xuICAgICAgICAkZmxhZ3MkOiAwLFxuICAgICAgICAkdGFnJDogdGFnLFxuICAgICAgICAkdGV4dCQ6IHRleHQsXG4gICAgICAgICRlbG0kOiBudWxsLFxuICAgICAgICAkY2hpbGRyZW4kOiBudWxsLFxuICAgIH07XG4gICAgaWYgKEJVSUxELnZkb21BdHRyaWJ1dGUpIHtcbiAgICAgICAgdm5vZGUuJGF0dHJzJCA9IG51bGw7XG4gICAgfVxuICAgIGlmIChCVUlMRC52ZG9tS2V5KSB7XG4gICAgICAgIHZub2RlLiRrZXkkID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uKSB7XG4gICAgICAgIHZub2RlLiRuYW1lJCA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiB2bm9kZTtcbn07XG5jb25zdCBIb3N0ID0ge307XG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYSBnaXZlbiBub2RlIGlzIGEgSG9zdCBub2RlIG9yIG5vdFxuICpcbiAqIEBwYXJhbSBub2RlIHRoZSB2aXJ0dWFsIERPTSBub2RlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB3aGV0aGVyIGl0J3MgYSBIb3N0IG5vZGUgb3Igbm90XG4gKi9cbmNvbnN0IGlzSG9zdCA9IChub2RlKSA9PiBub2RlICYmIG5vZGUuJHRhZyQgPT09IEhvc3Q7XG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHtAbGluayBkLkZ1bmN0aW9uYWxVdGlsaXRpZXN9IGZvciBTdGVuY2lsJ3MgVkRvbS5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlc2UgZnVuY3Rpb25zIGNvbnZlcnQgZnJvbSB7QGxpbmsgZC5WTm9kZX0gdG9cbiAqIHtAbGluayBkLkNoaWxkTm9kZX0gdG8gZ2l2ZSBmdW5jdGlvbmFsIGNvbXBvbmVudCBkZXZlbG9wZXJzIGEgZnJpZW5kbHlcbiAqIGludGVyZmFjZS5cbiAqL1xuY29uc3QgdmRvbUZuVXRpbHMgPSB7XG4gICAgZm9yRWFjaDogKGNoaWxkcmVuLCBjYikgPT4gY2hpbGRyZW4ubWFwKGNvbnZlcnRUb1B1YmxpYykuZm9yRWFjaChjYiksXG4gICAgbWFwOiAoY2hpbGRyZW4sIGNiKSA9PiBjaGlsZHJlbi5tYXAoY29udmVydFRvUHVibGljKS5tYXAoY2IpLm1hcChjb252ZXJ0VG9Qcml2YXRlKSxcbn07XG4vKipcbiAqIENvbnZlcnQgYSB7QGxpbmsgZC5WTm9kZX0gdG8gYSB7QGxpbmsgZC5DaGlsZE5vZGV9IGluIG9yZGVyIHRvIHByZXNlbnQgYVxuICogZnJpZW5kbGllciBwdWJsaWMgaW50ZXJmYWNlIChoZW5jZSwgJ2NvbnZlcnRUb1B1YmxpYycpLlxuICpcbiAqIEBwYXJhbSBub2RlIHRoZSB2aXJ0dWFsIERPTSBub2RlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIGEgY29udmVydGVkIGNoaWxkIG5vZGVcbiAqL1xuY29uc3QgY29udmVydFRvUHVibGljID0gKG5vZGUpID0+ICh7XG4gICAgdmF0dHJzOiBub2RlLiRhdHRycyQsXG4gICAgdmNoaWxkcmVuOiBub2RlLiRjaGlsZHJlbiQsXG4gICAgdmtleTogbm9kZS4ka2V5JCxcbiAgICB2bmFtZTogbm9kZS4kbmFtZSQsXG4gICAgdnRhZzogbm9kZS4kdGFnJCxcbiAgICB2dGV4dDogbm9kZS4kdGV4dCQsXG59KTtcbi8qKlxuICogQ29udmVydCBhIHtAbGluayBkLkNoaWxkTm9kZX0gYmFjayB0byBhbiBlcXVpdmFsZW50IHtAbGluayBkLlZOb2RlfSBpblxuICogb3JkZXIgdG8gdXNlIHRoZSByZXN1bHRpbmcgb2JqZWN0IGluIHRoZSB2aXJ0dWFsIERPTS4gVGhlIGluaXRpYWwgb2JqZWN0IHdhc1xuICogbGlrZWx5IGNyZWF0ZWQgYXMgcGFydCBvZiBwcmVzZW50aW5nIGEgcHVibGljIEFQSSwgc28gY29udmVydGluZyBpdCBiYWNrXG4gKiBpbnZvbHZlZCBtYWtpbmcgaXQgJ3ByaXZhdGUnIGFnYWluIChoZW5jZSwgYGNvbnZlcnRUb1ByaXZhdGVgKS5cbiAqXG4gKiBAcGFyYW0gbm9kZSB0aGUgY2hpbGQgbm9kZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyBhIGNvbnZlcnRlZCB2aXJ0dWFsIERPTSBub2RlXG4gKi9cbmNvbnN0IGNvbnZlcnRUb1ByaXZhdGUgPSAobm9kZSkgPT4ge1xuICAgIGlmICh0eXBlb2Ygbm9kZS52dGFnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHZub2RlRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIG5vZGUudmF0dHJzKTtcbiAgICAgICAgaWYgKG5vZGUudmtleSkge1xuICAgICAgICAgICAgdm5vZGVEYXRhLmtleSA9IG5vZGUudmtleTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS52bmFtZSkge1xuICAgICAgICAgICAgdm5vZGVEYXRhLm5hbWUgPSBub2RlLnZuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoKG5vZGUudnRhZywgdm5vZGVEYXRhLCAuLi4obm9kZS52Y2hpbGRyZW4gfHwgW10pKTtcbiAgICB9XG4gICAgY29uc3Qgdm5vZGUgPSBuZXdWTm9kZShub2RlLnZ0YWcsIG5vZGUudnRleHQpO1xuICAgIHZub2RlLiRhdHRycyQgPSBub2RlLnZhdHRycztcbiAgICB2bm9kZS4kY2hpbGRyZW4kID0gbm9kZS52Y2hpbGRyZW47XG4gICAgdm5vZGUuJGtleSQgPSBub2RlLnZrZXk7XG4gICAgdm5vZGUuJG5hbWUkID0gbm9kZS52bmFtZTtcbiAgICByZXR1cm4gdm5vZGU7XG59O1xuLyoqXG4gKiBWYWxpZGF0ZXMgdGhlIG9yZGVyaW5nIG9mIGF0dHJpYnV0ZXMgb24gYW4gaW5wdXQgZWxlbWVudFxuICpcbiAqIEBwYXJhbSBpbnB1dEVsbSB0aGUgZWxlbWVudCB0byB2YWxpZGF0ZVxuICovXG5jb25zdCB2YWxpZGF0ZUlucHV0UHJvcGVydGllcyA9IChpbnB1dEVsbSkgPT4ge1xuICAgIGNvbnN0IHByb3BzID0gT2JqZWN0LmtleXMoaW5wdXRFbG0pO1xuICAgIGNvbnN0IHZhbHVlID0gcHJvcHMuaW5kZXhPZigndmFsdWUnKTtcbiAgICBpZiAodmFsdWUgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdHlwZUluZGV4ID0gcHJvcHMuaW5kZXhPZigndHlwZScpO1xuICAgIGNvbnN0IG1pbkluZGV4ID0gcHJvcHMuaW5kZXhPZignbWluJyk7XG4gICAgY29uc3QgbWF4SW5kZXggPSBwcm9wcy5pbmRleE9mKCdtYXgnKTtcbiAgICBjb25zdCBzdGVwSW5kZXggPSBwcm9wcy5pbmRleE9mKCdzdGVwJyk7XG4gICAgaWYgKHZhbHVlIDwgdHlwZUluZGV4IHx8IHZhbHVlIDwgbWluSW5kZXggfHwgdmFsdWUgPCBtYXhJbmRleCB8fCB2YWx1ZSA8IHN0ZXBJbmRleCkge1xuICAgICAgICBjb25zb2xlRGV2V2FybihgVGhlIFwidmFsdWVcIiBwcm9wIG9mIDxpbnB1dD4gc2hvdWxkIGJlIHNldCBhZnRlciBcIm1pblwiLCBcIm1heFwiLCBcInR5cGVcIiBhbmQgXCJzdGVwXCJgKTtcbiAgICB9XG59O1xuY29uc3QgaW5pdGlhbGl6ZUNsaWVudEh5ZHJhdGUgPSAoaG9zdEVsbSwgdGFnTmFtZSwgaG9zdElkLCBob3N0UmVmKSA9PiB7XG4gICAgY29uc3QgZW5kSHlkcmF0ZSA9IGNyZWF0ZVRpbWUoJ2h5ZHJhdGVDbGllbnQnLCB0YWdOYW1lKTtcbiAgICBjb25zdCBzaGFkb3dSb290ID0gaG9zdEVsbS5zaGFkb3dSb290O1xuICAgIGNvbnN0IGNoaWxkUmVuZGVyTm9kZXMgPSBbXTtcbiAgICBjb25zdCBzbG90Tm9kZXMgPSBbXTtcbiAgICBjb25zdCBzaGFkb3dSb290Tm9kZXMgPSBCVUlMRC5zaGFkb3dEb20gJiYgc2hhZG93Um9vdCA/IFtdIDogbnVsbDtcbiAgICBjb25zdCB2bm9kZSA9IChob3N0UmVmLiR2bm9kZSQgPSBuZXdWTm9kZSh0YWdOYW1lLCBudWxsKSk7XG4gICAgaWYgKCFwbHQuJG9yZ0xvY05vZGVzJCkge1xuICAgICAgICBpbml0aWFsaXplRG9jdW1lbnRIeWRyYXRlKGRvYy5ib2R5LCAocGx0LiRvcmdMb2NOb2RlcyQgPSBuZXcgTWFwKCkpKTtcbiAgICB9XG4gICAgaG9zdEVsbVtIWURSQVRFX0lEXSA9IGhvc3RJZDtcbiAgICBob3N0RWxtLnJlbW92ZUF0dHJpYnV0ZShIWURSQVRFX0lEKTtcbiAgICBjbGllbnRIeWRyYXRlKHZub2RlLCBjaGlsZFJlbmRlck5vZGVzLCBzbG90Tm9kZXMsIHNoYWRvd1Jvb3ROb2RlcywgaG9zdEVsbSwgaG9zdEVsbSwgaG9zdElkKTtcbiAgICBjaGlsZFJlbmRlck5vZGVzLm1hcCgoYykgPT4ge1xuICAgICAgICBjb25zdCBvcmdMb2NhdGlvbklkID0gYy4kaG9zdElkJCArICcuJyArIGMuJG5vZGVJZCQ7XG4gICAgICAgIGNvbnN0IG9yZ0xvY2F0aW9uTm9kZSA9IHBsdC4kb3JnTG9jTm9kZXMkLmdldChvcmdMb2NhdGlvbklkKTtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGMuJGVsbSQ7XG4gICAgICAgIGlmIChvcmdMb2NhdGlvbk5vZGUgJiYgc3VwcG9ydHNTaGFkb3cgJiYgb3JnTG9jYXRpb25Ob2RlWydzLWVuJ10gPT09ICcnKSB7XG4gICAgICAgICAgICBvcmdMb2NhdGlvbk5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgb3JnTG9jYXRpb25Ob2RlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgIG5vZGVbJ3MtaG4nXSA9IHRhZ05hbWU7XG4gICAgICAgICAgICBpZiAob3JnTG9jYXRpb25Ob2RlKSB7XG4gICAgICAgICAgICAgICAgbm9kZVsncy1vbCddID0gb3JnTG9jYXRpb25Ob2RlO1xuICAgICAgICAgICAgICAgIG5vZGVbJ3Mtb2wnXVsncy1uciddID0gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwbHQuJG9yZ0xvY05vZGVzJC5kZWxldGUob3JnTG9jYXRpb25JZCk7XG4gICAgfSk7XG4gICAgaWYgKEJVSUxELnNoYWRvd0RvbSAmJiBzaGFkb3dSb290KSB7XG4gICAgICAgIHNoYWRvd1Jvb3ROb2Rlcy5tYXAoKHNoYWRvd1Jvb3ROb2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hhZG93Um9vdE5vZGUpIHtcbiAgICAgICAgICAgICAgICBzaGFkb3dSb290LmFwcGVuZENoaWxkKHNoYWRvd1Jvb3ROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVuZEh5ZHJhdGUoKTtcbn07XG5jb25zdCBjbGllbnRIeWRyYXRlID0gKHBhcmVudFZOb2RlLCBjaGlsZFJlbmRlck5vZGVzLCBzbG90Tm9kZXMsIHNoYWRvd1Jvb3ROb2RlcywgaG9zdEVsbSwgbm9kZSwgaG9zdElkKSA9PiB7XG4gICAgbGV0IGNoaWxkTm9kZVR5cGU7XG4gICAgbGV0IGNoaWxkSWRTcGx0O1xuICAgIGxldCBjaGlsZFZOb2RlO1xuICAgIGxldCBpO1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxIC8qIE5PREVfVFlQRS5FbGVtZW50Tm9kZSAqLykge1xuICAgICAgICBjaGlsZE5vZGVUeXBlID0gbm9kZS5nZXRBdHRyaWJ1dGUoSFlEUkFURV9DSElMRF9JRCk7XG4gICAgICAgIGlmIChjaGlsZE5vZGVUeXBlKSB7XG4gICAgICAgICAgICAvLyBnb3QgdGhlIG5vZGUgZGF0YSBmcm9tIHRoZSBlbGVtZW50J3MgYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBgJHtob3N0SWR9LiR7bm9kZUlkfS4ke2RlcHRofS4ke2luZGV4fWBcbiAgICAgICAgICAgIGNoaWxkSWRTcGx0ID0gY2hpbGROb2RlVHlwZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgaWYgKGNoaWxkSWRTcGx0WzBdID09PSBob3N0SWQgfHwgY2hpbGRJZFNwbHRbMF0gPT09ICcwJykge1xuICAgICAgICAgICAgICAgIGNoaWxkVk5vZGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICRmbGFncyQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICRob3N0SWQkOiBjaGlsZElkU3BsdFswXSxcbiAgICAgICAgICAgICAgICAgICAgJG5vZGVJZCQ6IGNoaWxkSWRTcGx0WzFdLFxuICAgICAgICAgICAgICAgICAgICAkZGVwdGgkOiBjaGlsZElkU3BsdFsyXSxcbiAgICAgICAgICAgICAgICAgICAgJGluZGV4JDogY2hpbGRJZFNwbHRbM10sXG4gICAgICAgICAgICAgICAgICAgICR0YWckOiBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgJGVsbSQ6IG5vZGUsXG4gICAgICAgICAgICAgICAgICAgICRhdHRycyQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICRjaGlsZHJlbiQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICRrZXkkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAkbmFtZSQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICR0ZXh0JDogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNoaWxkUmVuZGVyTm9kZXMucHVzaChjaGlsZFZOb2RlKTtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShIWURSQVRFX0NISUxEX0lEKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGEgbmV3IGNoaWxkIHZub2RlXG4gICAgICAgICAgICAgICAgLy8gc28gZW5zdXJlIGl0cyBwYXJlbnQgdm5vZGUgaGFzIHRoZSB2Y2hpbGRyZW4gYXJyYXlcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmVudFZOb2RlLiRjaGlsZHJlbiQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBhZGQgb3VyIGNoaWxkIHZub2RlIHRvIGEgc3BlY2lmaWMgaW5kZXggb2YgdGhlIHZub2RlJ3MgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICBwYXJlbnRWTm9kZS4kY2hpbGRyZW4kW2NoaWxkVk5vZGUuJGluZGV4JF0gPSBjaGlsZFZOb2RlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgbm93IHRoZSBuZXcgcGFyZW50IHZub2RlIGZvciBhbGwgdGhlIG5leHQgY2hpbGQgY2hlY2tzXG4gICAgICAgICAgICAgICAgcGFyZW50Vk5vZGUgPSBjaGlsZFZOb2RlO1xuICAgICAgICAgICAgICAgIGlmIChzaGFkb3dSb290Tm9kZXMgJiYgY2hpbGRWTm9kZS4kZGVwdGgkID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93Um9vdE5vZGVzW2NoaWxkVk5vZGUuJGluZGV4JF0gPSBjaGlsZFZOb2RlLiRlbG0kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyByZWN1cnNpdmVseSBkcmlsbCBkb3duLCBlbmQgdG8gc3RhcnQgc28gd2UgY2FuIHJlbW92ZSBub2Rlc1xuICAgICAgICBmb3IgKGkgPSBub2RlLmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNsaWVudEh5ZHJhdGUocGFyZW50Vk5vZGUsIGNoaWxkUmVuZGVyTm9kZXMsIHNsb3ROb2Rlcywgc2hhZG93Um9vdE5vZGVzLCBob3N0RWxtLCBub2RlLmNoaWxkTm9kZXNbaV0sIGhvc3RJZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuc2hhZG93Um9vdCkge1xuICAgICAgICAgICAgLy8ga2VlcCBkcmlsbGluZyBkb3duIHRocm91Z2ggdGhlIHNoYWRvdyByb290IG5vZGVzXG4gICAgICAgICAgICBmb3IgKGkgPSBub2RlLnNoYWRvd1Jvb3QuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGNsaWVudEh5ZHJhdGUocGFyZW50Vk5vZGUsIGNoaWxkUmVuZGVyTm9kZXMsIHNsb3ROb2Rlcywgc2hhZG93Um9vdE5vZGVzLCBob3N0RWxtLCBub2RlLnNoYWRvd1Jvb3QuY2hpbGROb2Rlc1tpXSwgaG9zdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIE5PREVfVFlQRS5Db21tZW50Tm9kZSAqLykge1xuICAgICAgICAvLyBgJHtDT01NRU5UX1RZUEV9LiR7aG9zdElkfS4ke25vZGVJZH0uJHtkZXB0aH0uJHtpbmRleH1gXG4gICAgICAgIGNoaWxkSWRTcGx0ID0gbm9kZS5ub2RlVmFsdWUuc3BsaXQoJy4nKTtcbiAgICAgICAgaWYgKGNoaWxkSWRTcGx0WzFdID09PSBob3N0SWQgfHwgY2hpbGRJZFNwbHRbMV0gPT09ICcwJykge1xuICAgICAgICAgICAgLy8gY29tbWVudCBub2RlIGZvciBlaXRoZXIgdGhlIGhvc3QgaWQgb3IgYSAwIGhvc3QgaWRcbiAgICAgICAgICAgIGNoaWxkTm9kZVR5cGUgPSBjaGlsZElkU3BsdFswXTtcbiAgICAgICAgICAgIGNoaWxkVk5vZGUgPSB7XG4gICAgICAgICAgICAgICAgJGZsYWdzJDogMCxcbiAgICAgICAgICAgICAgICAkaG9zdElkJDogY2hpbGRJZFNwbHRbMV0sXG4gICAgICAgICAgICAgICAgJG5vZGVJZCQ6IGNoaWxkSWRTcGx0WzJdLFxuICAgICAgICAgICAgICAgICRkZXB0aCQ6IGNoaWxkSWRTcGx0WzNdLFxuICAgICAgICAgICAgICAgICRpbmRleCQ6IGNoaWxkSWRTcGx0WzRdLFxuICAgICAgICAgICAgICAgICRlbG0kOiBub2RlLFxuICAgICAgICAgICAgICAgICRhdHRycyQ6IG51bGwsXG4gICAgICAgICAgICAgICAgJGNoaWxkcmVuJDogbnVsbCxcbiAgICAgICAgICAgICAgICAka2V5JDogbnVsbCxcbiAgICAgICAgICAgICAgICAkbmFtZSQ6IG51bGwsXG4gICAgICAgICAgICAgICAgJHRhZyQ6IG51bGwsXG4gICAgICAgICAgICAgICAgJHRleHQkOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVUeXBlID09PSBURVhUX05PREVfSUQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFZOb2RlLiRlbG0kID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRWTm9kZS4kZWxtJCAmJiBjaGlsZFZOb2RlLiRlbG0kLm5vZGVUeXBlID09PSAzIC8qIE5PREVfVFlQRS5UZXh0Tm9kZSAqLykge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFZOb2RlLiR0ZXh0JCA9IGNoaWxkVk5vZGUuJGVsbSQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkUmVuZGVyTm9kZXMucHVzaChjaGlsZFZOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSB0ZXh0IGNvbW1lbnQgc2luY2UgaXQncyBubyBsb25nZXIgbmVlZGVkXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFZOb2RlLiRjaGlsZHJlbiRbY2hpbGRWTm9kZS4kaW5kZXgkXSA9IGNoaWxkVk5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dSb290Tm9kZXMgJiYgY2hpbGRWTm9kZS4kZGVwdGgkID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3ROb2Rlc1tjaGlsZFZOb2RlLiRpbmRleCRdID0gY2hpbGRWTm9kZS4kZWxtJDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkVk5vZGUuJGhvc3RJZCQgPT09IGhvc3RJZCkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgY29tbWVudCBub2RlIGlzIHNwZWNpZmNhbGx5IGZvciB0aGlzIGhvc3QgaWRcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlVHlwZSA9PT0gU0xPVF9OT0RFX0lEKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGAke1NMT1RfTk9ERV9JRH0uJHtob3N0SWR9LiR7bm9kZUlkfS4ke2RlcHRofS4ke2luZGV4fS4ke3Nsb3ROYW1lfWA7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVk5vZGUuJHRhZyQgPSAnc2xvdCc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZElkU3BsdFs1XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVsncy1zbiddID0gY2hpbGRWTm9kZS4kbmFtZSQgPSBjaGlsZElkU3BsdFs1XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbJ3Mtc24nXSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5vZGVbJ3Mtc3InXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChCVUlMRC5zaGFkb3dEb20gJiYgc2hhZG93Um9vdE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBicm93c2VyIHN1cHBvcnQgc2hhZG93Um9vdCBhbmQgdGhpcyBpcyBhIHNoYWRvdyBkb20gY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYW4gYWN0dWFsIHNsb3QgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWTm9kZS4kZWxtJCA9IGRvYy5jcmVhdGVFbGVtZW50KGNoaWxkVk5vZGUuJHRhZyQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkVk5vZGUuJG5hbWUkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRoZSBzbG90IG5hbWUgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWTm9kZS4kZWxtJC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBjaGlsZFZOb2RlLiRuYW1lJCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnNlcnQgdGhlIG5ldyBzbG90IGVsZW1lbnQgYmVmb3JlIHRoZSBzbG90IGNvbW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2hpbGRWTm9kZS4kZWxtJCwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIHNsb3QgY29tbWVudCBzaW5jZSBpdCdzIG5vdCBuZWVkZWQgZm9yIHNoYWRvd1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZFZOb2RlLiRkZXB0aCQgPT09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3ROb2Rlc1tjaGlsZFZOb2RlLiRpbmRleCRdID0gY2hpbGRWTm9kZS4kZWxtJDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzbG90Tm9kZXMucHVzaChjaGlsZFZOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRWTm9kZS4kY2hpbGRyZW4kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRWTm9kZS4kY2hpbGRyZW4kID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJFtjaGlsZFZOb2RlLiRpbmRleCRdID0gY2hpbGRWTm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGROb2RlVHlwZSA9PT0gQ09OVEVOVF9SRUZfSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYCR7Q09OVEVOVF9SRUZfSUR9LiR7aG9zdElkfWA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChCVUlMRC5zaGFkb3dEb20gJiYgc2hhZG93Um9vdE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGNvbnRlbnQgcmVmIGNvbW1lbnQgc2luY2UgaXQncyBub3QgbmVlZGVkIGZvciBzaGFkb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3RFbG1bJ3MtY3InXSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlWydzLWNuJ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhcmVudFZOb2RlICYmIHBhcmVudFZOb2RlLiR0YWckID09PSAnc3R5bGUnKSB7XG4gICAgICAgIGNvbnN0IHZub2RlID0gbmV3Vk5vZGUobnVsbCwgbm9kZS50ZXh0Q29udGVudCk7XG4gICAgICAgIHZub2RlLiRlbG0kID0gbm9kZTtcbiAgICAgICAgdm5vZGUuJGluZGV4JCA9ICcwJztcbiAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCA9IFt2bm9kZV07XG4gICAgfVxufTtcbmNvbnN0IGluaXRpYWxpemVEb2N1bWVudEh5ZHJhdGUgPSAobm9kZSwgb3JnTG9jTm9kZXMpID0+IHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKDsgaSA8IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW5pdGlhbGl6ZURvY3VtZW50SHlkcmF0ZShub2RlLmNoaWxkTm9kZXNbaV0sIG9yZ0xvY05vZGVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5zaGFkb3dSb290KSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbm9kZS5zaGFkb3dSb290LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplRG9jdW1lbnRIeWRyYXRlKG5vZGUuc2hhZG93Um9vdC5jaGlsZE5vZGVzW2ldLCBvcmdMb2NOb2Rlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBOT0RFX1RZUEUuQ29tbWVudE5vZGUgKi8pIHtcbiAgICAgICAgY29uc3QgY2hpbGRJZFNwbHQgPSBub2RlLm5vZGVWYWx1ZS5zcGxpdCgnLicpO1xuICAgICAgICBpZiAoY2hpbGRJZFNwbHRbMF0gPT09IE9SR19MT0NBVElPTl9JRCkge1xuICAgICAgICAgICAgb3JnTG9jTm9kZXMuc2V0KGNoaWxkSWRTcGx0WzFdICsgJy4nICsgY2hpbGRJZFNwbHRbMl0sIG5vZGUpO1xuICAgICAgICAgICAgbm9kZS5ub2RlVmFsdWUgPSAnJztcbiAgICAgICAgICAgIC8vIHVzZWZ1bCB0byBrbm93IGlmIHRoZSBvcmlnaW5hbCBsb2NhdGlvbiBpc1xuICAgICAgICAgICAgLy8gdGhlIHJvb3QgbGlnaHQtZG9tIG9mIGEgc2hhZG93IGRvbSBjb21wb25lbnRcbiAgICAgICAgICAgIG5vZGVbJ3MtZW4nXSA9IGNoaWxkSWRTcGx0WzNdO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIFByaXZhdGVcbmNvbnN0IGNvbXB1dGVNb2RlID0gKGVsbSkgPT4gbW9kZVJlc29sdXRpb25DaGFpbi5tYXAoKGgpID0+IGgoZWxtKSkuZmluZCgobSkgPT4gISFtKTtcbi8vIFB1YmxpY1xuY29uc3Qgc2V0TW9kZSA9IChoYW5kbGVyKSA9PiBtb2RlUmVzb2x1dGlvbkNoYWluLnB1c2goaGFuZGxlcik7XG5jb25zdCBnZXRNb2RlID0gKHJlZikgPT4gZ2V0SG9zdFJlZihyZWYpLiRtb2RlTmFtZSQ7XG4vKipcbiAqIFBhcnNlIGEgbmV3IHByb3BlcnR5IHZhbHVlIGZvciBhIGdpdmVuIHByb3BlcnR5IHR5cGUuXG4gKlxuICogV2hpbGUgdGhlIHByb3AgdmFsdWUgY2FuIHJlYXNvbmFibHkgYmUgZXhwZWN0ZWQgdG8gYmUgb2YgYGFueWAgdHlwZSBhcyBmYXIgYXMgVHlwZVNjcmlwdCdzIHR5cGUgY2hlY2tlciBpcyBjb25jZXJuZWQsXG4gKiBpdCBpcyBub3Qgc2FmZSB0byBhc3N1bWUgdGhhdCB0aGUgc3RyaW5nIHJldHVybmVkIGJ5IGV2YWx1YXRpbmcgYHR5cGVvZiBwcm9wVmFsdWVgIG1hdGNoZXM6XG4gKiAgIDEuIGBhbnlgLCB0aGUgdHlwZSBnaXZlbiB0byBgcHJvcFZhbHVlYCBpbiB0aGUgZnVuY3Rpb24gc2lnbmF0dXJlXG4gKiAgIDIuIHRoZSB0eXBlIHN0b3JlZCBmcm9tIGBwcm9wVHlwZWAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBwcm92aWRlcyB0aGUgY2FwYWJpbGl0eSB0byBwYXJzZS9jb2VyY2UgYSBwcm9wZXJ0eSdzIHZhbHVlIHRvIHBvdGVudGlhbGx5IGFueSBvdGhlciBKYXZhU2NyaXB0IHR5cGUuXG4gKlxuICogUHJvcGVydHkgdmFsdWVzIHJlcHJlc2VudGVkIGluIFRTWCBwcmVzZXJ2ZSB0aGVpciB0eXBlIGluZm9ybWF0aW9uLiBJbiB0aGUgZXhhbXBsZSBiZWxvdywgdGhlIG51bWJlciAwIGlzIHBhc3NlZCB0b1xuICogYSBjb21wb25lbnQuIFRoaXMgYHByb3BWYWx1ZWAgd2lsbCBwcmVzZXJ2ZSBpdHMgdHlwZSBpbmZvcm1hdGlvbiAoYHR5cGVvZiBwcm9wVmFsdWUgPT09ICdudW1iZXInYCkuIE5vdGUgdGhhdCBpc1xuICogYmFzZWQgb24gdGhlIHR5cGUgb2YgdGhlIHZhbHVlIGJlaW5nIHBhc3NlZCBpbiwgbm90IHRoZSB0eXBlIGRlY2xhcmVkIG9mIHRoZSBjbGFzcyBtZW1iZXIgZGVjb3JhdGVkIHdpdGggYEBQcm9wYC5cbiAqIGBgYHRzeFxuICogPG15LWNtcCBwcm9wLXZhbD17MH0+PC9teS1jbXA+XG4gKiBgYGBcbiAqXG4gKiBIVE1MIHByb3AgdmFsdWVzIG9uIHRoZSBvdGhlciBoYW5kLCB3aWxsIGFsd2F5cyBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSBwcm9wVmFsdWUgdGhlIG5ldyB2YWx1ZSB0byBjb2VyY2UgdG8gc29tZSB0eXBlXG4gKiBAcGFyYW0gcHJvcFR5cGUgdGhlIHR5cGUgb2YgdGhlIHByb3AsIGV4cHJlc3NlZCBhcyBhIGJpbmFyeSBudW1iZXJcbiAqIEByZXR1cm5zIHRoZSBwYXJzZWQvY29lcmNlZCB2YWx1ZVxuICovXG5jb25zdCBwYXJzZVByb3BlcnR5VmFsdWUgPSAocHJvcFZhbHVlLCBwcm9wVHlwZSkgPT4ge1xuICAgIC8vIGVuc3VyZSB0aGlzIHZhbHVlIGlzIG9mIHRoZSBjb3JyZWN0IHByb3AgdHlwZVxuICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiAhaXNDb21wbGV4VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIGlmIChCVUlMRC5wcm9wQm9vbGVhbiAmJiBwcm9wVHlwZSAmIDQgLyogTUVNQkVSX0ZMQUdTLkJvb2xlYW4gKi8pIHtcbiAgICAgICAgICAgIC8vIHBlciB0aGUgSFRNTCBzcGVjLCBhbnkgc3RyaW5nIHZhbHVlIG1lYW5zIGl0IGlzIGEgYm9vbGVhbiB0cnVlIHZhbHVlXG4gICAgICAgICAgICAvLyBidXQgd2UnbGwgY2hlYXQgaGVyZSBhbmQgc2F5IHRoYXQgdGhlIHN0cmluZyBcImZhbHNlXCIgaXMgdGhlIGJvb2xlYW4gZmFsc2VcbiAgICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUgPT09ICdmYWxzZScgPyBmYWxzZSA6IHByb3BWYWx1ZSA9PT0gJycgfHwgISFwcm9wVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJVSUxELnByb3BOdW1iZXIgJiYgcHJvcFR5cGUgJiAyIC8qIE1FTUJFUl9GTEFHUy5OdW1iZXIgKi8pIHtcbiAgICAgICAgICAgIC8vIGZvcmNlIGl0IHRvIGJlIGEgbnVtYmVyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChwcm9wVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5wcm9wU3RyaW5nICYmIHByb3BUeXBlICYgMSAvKiBNRU1CRVJfRkxBR1MuU3RyaW5nICovKSB7XG4gICAgICAgICAgICAvLyBjb3VsZCBoYXZlIGJlZW4gcGFzc2VkIGFzIGEgbnVtYmVyIG9yIGJvb2xlYW5cbiAgICAgICAgICAgIC8vIGJ1dCB3ZSBzdGlsbCB3YW50IGl0IGFzIGEgc3RyaW5nXG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKHByb3BWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVkdW5kYW50IHJldHVybiBoZXJlIGZvciBiZXR0ZXIgbWluaWZpY2F0aW9uXG4gICAgICAgIHJldHVybiBwcm9wVmFsdWU7XG4gICAgfVxuICAgIC8vIG5vdCBzdXJlIGV4YWN0bHkgd2hhdCB0eXBlIHdlIHdhbnRcbiAgICAvLyBzbyBubyBuZWVkIHRvIGNoYW5nZSB0byBhIGRpZmZlcmVudCB0eXBlXG4gICAgcmV0dXJuIHByb3BWYWx1ZTtcbn07XG5jb25zdCBnZXRFbGVtZW50ID0gKHJlZikgPT4gKEJVSUxELmxhenlMb2FkID8gZ2V0SG9zdFJlZihyZWYpLiRob3N0RWxlbWVudCQgOiByZWYpO1xuY29uc3QgY3JlYXRlRXZlbnQgPSAocmVmLCBuYW1lLCBmbGFncykgPT4ge1xuICAgIGNvbnN0IGVsbSA9IGdldEVsZW1lbnQocmVmKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBlbWl0OiAoZGV0YWlsKSA9PiB7XG4gICAgICAgICAgICBpZiAoQlVJTEQuaXNEZXYgJiYgIWVsbS5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGVEZXZXYXJuKGBUaGUgXCIke25hbWV9XCIgZXZlbnQgd2FzIGVtaXR0ZWQsIGJ1dCB0aGUgZGlzcGF0Y2hlciBub2RlIGlzIG5vIGxvbmdlciBjb25uZWN0ZWQgdG8gdGhlIGRvbS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbWl0RXZlbnQoZWxtLCBuYW1lLCB7XG4gICAgICAgICAgICAgICAgYnViYmxlczogISEoZmxhZ3MgJiA0IC8qIEVWRU5UX0ZMQUdTLkJ1YmJsZXMgKi8pLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAhIShmbGFncyAmIDIgLyogRVZFTlRfRkxBR1MuQ29tcG9zZWQgKi8pLFxuICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6ICEhKGZsYWdzICYgMSAvKiBFVkVOVF9GTEFHUy5DYW5jZWxsYWJsZSAqLyksXG4gICAgICAgICAgICAgICAgZGV0YWlsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgJiBkaXNwYXRjaCBhIGN1c3RvbSBFdmVudCBvbiBhIHByb3ZpZGVkIHRhcmdldFxuICogQHBhcmFtIGVsbSB0aGUgdGFyZ2V0IG9mIHRoZSBFdmVudFxuICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgdG8gZ2l2ZSB0aGUgY3VzdG9tIEV2ZW50XG4gKiBAcGFyYW0gb3B0cyBvcHRpb25zIGZvciBjb25maWd1cmluZyBhIGN1c3RvbSBFdmVudFxuICogQHJldHVybnMgdGhlIGN1c3RvbSBFdmVudFxuICovXG5jb25zdCBlbWl0RXZlbnQgPSAoZWxtLCBuYW1lLCBvcHRzKSA9PiB7XG4gICAgY29uc3QgZXYgPSBwbHQuY2UobmFtZSwgb3B0cyk7XG4gICAgZWxtLmRpc3BhdGNoRXZlbnQoZXYpO1xuICAgIHJldHVybiBldjtcbn07XG5jb25zdCByb290QXBwbGllZFN0eWxlcyA9IC8qQF9fUFVSRV9fKi8gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJlZ2lzdGVyU3R5bGUgPSAoc2NvcGVJZCwgY3NzVGV4dCwgYWxsb3dDUykgPT4ge1xuICAgIGxldCBzdHlsZSA9IHN0eWxlcy5nZXQoc2NvcGVJZCk7XG4gICAgaWYgKHN1cHBvcnRzQ29uc3RydWN0YWJsZVN0eWxlc2hlZXRzICYmIGFsbG93Q1MpIHtcbiAgICAgICAgc3R5bGUgPSAoc3R5bGUgfHwgbmV3IENTU1N0eWxlU2hlZXQoKSk7XG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBzdHlsZSA9IGNzc1RleHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdHlsZS5yZXBsYWNlU3luYyhjc3NUZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3R5bGUgPSBjc3NUZXh0O1xuICAgIH1cbiAgICBzdHlsZXMuc2V0KHNjb3BlSWQsIHN0eWxlKTtcbn07XG5jb25zdCBhZGRTdHlsZSA9IChzdHlsZUNvbnRhaW5lck5vZGUsIGNtcE1ldGEsIG1vZGUsIGhvc3RFbG0pID0+IHtcbiAgICB2YXIgX2E7XG4gICAgbGV0IHNjb3BlSWQgPSBnZXRTY29wZUlkKGNtcE1ldGEsIG1vZGUpO1xuICAgIGNvbnN0IHN0eWxlID0gc3R5bGVzLmdldChzY29wZUlkKTtcbiAgICBpZiAoIUJVSUxELmF0dGFjaFN0eWxlcykge1xuICAgICAgICByZXR1cm4gc2NvcGVJZDtcbiAgICB9XG4gICAgLy8gaWYgYW4gZWxlbWVudCBpcyBOT1QgY29ubmVjdGVkIHRoZW4gZ2V0Um9vdE5vZGUoKSB3aWxsIHJldHVybiB0aGUgd3Jvbmcgcm9vdCBub2RlXG4gICAgLy8gc28gdGhlIGZhbGxiYWNrIGlzIHRvIGFsd2F5cyB1c2UgdGhlIGRvY3VtZW50IGZvciB0aGUgcm9vdCBub2RlIGluIHRob3NlIGNhc2VzXG4gICAgc3R5bGVDb250YWluZXJOb2RlID0gc3R5bGVDb250YWluZXJOb2RlLm5vZGVUeXBlID09PSAxMSAvKiBOT0RFX1RZUEUuRG9jdW1lbnRGcmFnbWVudCAqLyA/IHN0eWxlQ29udGFpbmVyTm9kZSA6IGRvYztcbiAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHN0eWxlQ29udGFpbmVyTm9kZSA9IHN0eWxlQ29udGFpbmVyTm9kZS5oZWFkIHx8IHN0eWxlQ29udGFpbmVyTm9kZTtcbiAgICAgICAgICAgIGxldCBhcHBsaWVkU3R5bGVzID0gcm9vdEFwcGxpZWRTdHlsZXMuZ2V0KHN0eWxlQ29udGFpbmVyTm9kZSk7XG4gICAgICAgICAgICBsZXQgc3R5bGVFbG07XG4gICAgICAgICAgICBpZiAoIWFwcGxpZWRTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICByb290QXBwbGllZFN0eWxlcy5zZXQoc3R5bGVDb250YWluZXJOb2RlLCAoYXBwbGllZFN0eWxlcyA9IG5ldyBTZXQoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhcHBsaWVkU3R5bGVzLmhhcyhzY29wZUlkKSkge1xuICAgICAgICAgICAgICAgIGlmIChCVUlMRC5oeWRyYXRlQ2xpZW50U2lkZSAmJlxuICAgICAgICAgICAgICAgICAgICBzdHlsZUNvbnRhaW5lck5vZGUuaG9zdCAmJlxuICAgICAgICAgICAgICAgICAgICAoc3R5bGVFbG0gPSBzdHlsZUNvbnRhaW5lck5vZGUucXVlcnlTZWxlY3RvcihgWyR7SFlEUkFURURfU1RZTEVfSUR9PVwiJHtzY29wZUlkfVwiXWApKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIG9ubHkgaGFwcGVuaW5nIG9uIG5hdGl2ZSBzaGFkb3ctZG9tLCBkbyBub3QgbmVlZHMgQ1NTIHZhciBzaGltXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlRWxtLmlubmVySFRNTCA9IHN0eWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJVSUxELmNzc1ZhclNoaW0gJiYgcGx0LiRjc3NTaGltJCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVFbG0gPSBwbHQuJGNzc1NoaW0kLmNyZWF0ZUhvc3RTdHlsZShob3N0RWxtLCBzY29wZUlkLCBzdHlsZSwgISEoY21wTWV0YS4kZmxhZ3MkICYgMTAgLyogQ01QX0ZMQUdTLm5lZWRzU2NvcGVkRW5jYXBzdWxhdGlvbiAqLykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U2NvcGVJZCA9IHN0eWxlRWxtWydzLXNjJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3U2NvcGVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlSWQgPSBuZXdTY29wZUlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gYWRkIHRoaXMgc3R5bGVJRCB0byB0aGUgYXBwbGllZFN0eWxlcyBTZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSB0aGUgY3NzVmFyU2hpbSBtaWdodCBuZWVkIHRvIGFwcGx5IHNldmVyYWwgZGlmZmVyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGVzaGVldHMgZm9yIHRoZSBzYW1lIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpZWRTdHlsZXMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVFbG0gPSBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRWxtLmlubmVySFRNTCA9IHN0eWxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIEFwcGx5IENTUCBub25jZSB0byB0aGUgc3R5bGUgdGFnIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub25jZSA9IChfYSA9IHBsdC4kbm9uY2UkKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBxdWVyeU5vbmNlTWV0YVRhZ0NvbnRlbnQoZG9jKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vbmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRWxtLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBub25jZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKEJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlIHx8IEJVSUxELmhvdE1vZHVsZVJlcGxhY2VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUVsbS5zZXRBdHRyaWJ1dGUoSFlEUkFURURfU1RZTEVfSUQsIHNjb3BlSWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlQ29udGFpbmVyTm9kZS5pbnNlcnRCZWZvcmUoc3R5bGVFbG0sIHN0eWxlQ29udGFpbmVyTm9kZS5xdWVyeVNlbGVjdG9yKCdsaW5rJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYXBwbGllZFN0eWxlcykge1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWVkU3R5bGVzLmFkZChzY29wZUlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQlVJTEQuY29uc3RydWN0YWJsZUNTUyAmJiAhc3R5bGVDb250YWluZXJOb2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy5pbmNsdWRlcyhzdHlsZSkpIHtcbiAgICAgICAgICAgIHN0eWxlQ29udGFpbmVyTm9kZS5hZG9wdGVkU3R5bGVTaGVldHMgPSBbLi4uc3R5bGVDb250YWluZXJOb2RlLmFkb3B0ZWRTdHlsZVNoZWV0cywgc3R5bGVdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzY29wZUlkO1xufTtcbmNvbnN0IGF0dGFjaFN0eWxlcyA9IChob3N0UmVmKSA9PiB7XG4gICAgY29uc3QgY21wTWV0YSA9IGhvc3RSZWYuJGNtcE1ldGEkO1xuICAgIGNvbnN0IGVsbSA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgICBjb25zdCBmbGFncyA9IGNtcE1ldGEuJGZsYWdzJDtcbiAgICBjb25zdCBlbmRBdHRhY2hTdHlsZXMgPSBjcmVhdGVUaW1lKCdhdHRhY2hTdHlsZXMnLCBjbXBNZXRhLiR0YWdOYW1lJCk7XG4gICAgY29uc3Qgc2NvcGVJZCA9IGFkZFN0eWxlKEJVSUxELnNoYWRvd0RvbSAmJiBzdXBwb3J0c1NoYWRvdyAmJiBlbG0uc2hhZG93Um9vdCA/IGVsbS5zaGFkb3dSb290IDogZWxtLmdldFJvb3ROb2RlKCksIGNtcE1ldGEsIGhvc3RSZWYuJG1vZGVOYW1lJCwgZWxtKTtcbiAgICBpZiAoKEJVSUxELnNoYWRvd0RvbSB8fCBCVUlMRC5zY29wZWQpICYmIEJVSUxELmNzc0Fubm90YXRpb25zICYmIGZsYWdzICYgMTAgLyogQ01QX0ZMQUdTLm5lZWRzU2NvcGVkRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICAvLyBvbmx5IHJlcXVpcmVkIHdoZW4gd2UncmUgTk9UIHVzaW5nIG5hdGl2ZSBzaGFkb3cgZG9tIChzbG90KVxuICAgICAgICAvLyBvciB0aGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IG5hdGl2ZSBzaGFkb3cgZG9tXG4gICAgICAgIC8vIGFuZCB0aGlzIGhvc3QgZWxlbWVudCB3YXMgTk9UIGNyZWF0ZWQgd2l0aCBTU1JcbiAgICAgICAgLy8gbGV0J3MgcGljayBvdXQgdGhlIGlubmVyIGNvbnRlbnQgZm9yIHNsb3QgcHJvamVjdGlvblxuICAgICAgICAvLyBjcmVhdGUgYSBub2RlIHRvIHJlcHJlc2VudCB3aGVyZSB0aGUgb3JpZ2luYWxcbiAgICAgICAgLy8gY29udGVudCB3YXMgZmlyc3QgcGxhY2VkLCB3aGljaCBpcyB1c2VmdWwgbGF0ZXIgb25cbiAgICAgICAgLy8gRE9NIFdSSVRFISFcbiAgICAgICAgZWxtWydzLXNjJ10gPSBzY29wZUlkO1xuICAgICAgICBlbG0uY2xhc3NMaXN0LmFkZChzY29wZUlkICsgJy1oJyk7XG4gICAgICAgIGlmIChCVUlMRC5zY29wZWQgJiYgZmxhZ3MgJiAyIC8qIENNUF9GTEFHUy5zY29wZWRDc3NFbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgICAgICBlbG0uY2xhc3NMaXN0LmFkZChzY29wZUlkICsgJy1zJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW5kQXR0YWNoU3R5bGVzKCk7XG59O1xuY29uc3QgZ2V0U2NvcGVJZCA9IChjbXAsIG1vZGUpID0+ICdzYy0nICsgKEJVSUxELm1vZGUgJiYgbW9kZSAmJiBjbXAuJGZsYWdzJCAmIDMyIC8qIENNUF9GTEFHUy5oYXNNb2RlICovID8gY21wLiR0YWdOYW1lJCArICctJyArIG1vZGUgOiBjbXAuJHRhZ05hbWUkKTtcbmNvbnN0IGNvbnZlcnRTY29wZWRUb1NoYWRvdyA9IChjc3MpID0+IGNzcy5yZXBsYWNlKC9cXC9cXCohQChbXlxcL10rKVxcKlxcL1teXFx7XStcXHsvZywgJyQxeycpO1xuLyoqXG4gKiBQcm9kdWN0aW9uIHNldEFjY2Vzc29yKCkgZnVuY3Rpb24gYmFzZWQgb24gUHJlYWN0IGJ5XG4gKiBKYXNvbiBNaWxsZXIgKEBkZXZlbG9waXQpXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvcHJlYWN0L2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqXG4gKiBNb2RpZmllZCBmb3IgU3RlbmNpbCdzIGNvbXBpbGVyIGFuZCB2ZG9tXG4gKi9cbmNvbnN0IHNldEFjY2Vzc29yID0gKGVsbSwgbWVtYmVyTmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCBpc1N2ZywgZmxhZ3MpID0+IHtcbiAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIGxldCBpc1Byb3AgPSBpc01lbWJlckluRWxlbWVudChlbG0sIG1lbWJlck5hbWUpO1xuICAgICAgICBsZXQgbG4gPSBtZW1iZXJOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChCVUlMRC52ZG9tQ2xhc3MgJiYgbWVtYmVyTmFtZSA9PT0gJ2NsYXNzJykge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NMaXN0ID0gZWxtLmNsYXNzTGlzdDtcbiAgICAgICAgICAgIGNvbnN0IG9sZENsYXNzZXMgPSBwYXJzZUNsYXNzTGlzdChvbGRWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBuZXdDbGFzc2VzID0gcGFyc2VDbGFzc0xpc3QobmV3VmFsdWUpO1xuICAgICAgICAgICAgY2xhc3NMaXN0LnJlbW92ZSguLi5vbGRDbGFzc2VzLmZpbHRlcigoYykgPT4gYyAmJiAhbmV3Q2xhc3Nlcy5pbmNsdWRlcyhjKSkpO1xuICAgICAgICAgICAgY2xhc3NMaXN0LmFkZCguLi5uZXdDbGFzc2VzLmZpbHRlcigoYykgPT4gYyAmJiAhb2xkQ2xhc3Nlcy5pbmNsdWRlcyhjKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEJVSUxELnZkb21TdHlsZSAmJiBtZW1iZXJOYW1lID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgc3R5bGUgYXR0cmlidXRlLCBjc3MgcHJvcGVydGllcyBhbmQgdmFsdWVzXG4gICAgICAgICAgICBpZiAoQlVJTEQudXBkYXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbmV3VmFsdWUgfHwgbmV3VmFsdWVbcHJvcF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSAmJiBwcm9wLmluY2x1ZGVzKCctJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbG0uc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbG0uc3R5bGVbcHJvcF0gPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICghb2xkVmFsdWUgfHwgbmV3VmFsdWVbcHJvcF0gIT09IG9sZFZhbHVlW3Byb3BdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgJiYgcHJvcC5pbmNsdWRlcygnLScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbG0uc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgbmV3VmFsdWVbcHJvcF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLnN0eWxlW3Byb3BdID0gbmV3VmFsdWVbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQlVJTEQudmRvbUtleSAmJiBtZW1iZXJOYW1lID09PSAna2V5JylcbiAgICAgICAgICAgIDtcbiAgICAgICAgZWxzZSBpZiAoQlVJTEQudmRvbVJlZiAmJiBtZW1iZXJOYW1lID09PSAncmVmJykge1xuICAgICAgICAgICAgLy8gbWluaWZpZXIgd2lsbCBjbGVhbiB0aGlzIHVwXG4gICAgICAgICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZShlbG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEJVSUxELnZkb21MaXN0ZW5lciAmJlxuICAgICAgICAgICAgKEJVSUxELmxhenlMb2FkID8gIWlzUHJvcCA6ICFlbG0uX19sb29rdXBTZXR0ZXJfXyhtZW1iZXJOYW1lKSkgJiZcbiAgICAgICAgICAgIG1lbWJlck5hbWVbMF0gPT09ICdvJyAmJlxuICAgICAgICAgICAgbWVtYmVyTmFtZVsxXSA9PT0gJ24nKSB7XG4gICAgICAgICAgICAvLyBFdmVudCBIYW5kbGVyc1xuICAgICAgICAgICAgLy8gc28gaWYgdGhlIG1lbWJlciBuYW1lIHN0YXJ0cyB3aXRoIFwib25cIiBhbmQgdGhlIDNyZCBjaGFyYWN0ZXJzIGlzXG4gICAgICAgICAgICAvLyBhIGNhcGl0YWwgbGV0dGVyLCBhbmQgaXQncyBub3QgYWxyZWFkeSBhIG1lbWJlciBvbiB0aGUgZWxlbWVudCxcbiAgICAgICAgICAgIC8vIHRoZW4gd2UncmUgYXNzdW1pbmcgaXQncyBhbiBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgaWYgKG1lbWJlck5hbWVbMl0gPT09ICctJykge1xuICAgICAgICAgICAgICAgIC8vIG9uLSBwcmVmaXhlZCBldmVudHNcbiAgICAgICAgICAgICAgICAvLyBhbGxvd3MgdG8gYmUgZXhwbGljaXQgYWJvdXQgdGhlIGRvbSBldmVudCB0byBsaXN0ZW4gd2l0aG91dCBhbnkgbWFnaWNcbiAgICAgICAgICAgICAgICAvLyB1bmRlciB0aGUgaG9vZDpcbiAgICAgICAgICAgICAgICAvLyA8bXktY21wIG9uLWNsaWNrPiAvLyBsaXN0ZW5zIGZvciBcImNsaWNrXCJcbiAgICAgICAgICAgICAgICAvLyA8bXktY21wIG9uLUNsaWNrPiAvLyBsaXN0ZW5zIGZvciBcIkNsaWNrXCJcbiAgICAgICAgICAgICAgICAvLyA8bXktY21wIG9uLWlvbkNoYW5nZT4gLy8gbGlzdGVucyBmb3IgXCJpb25DaGFuZ2VcIlxuICAgICAgICAgICAgICAgIC8vIDxteS1jbXAgb24tRVZFTlRTPiAvLyBsaXN0ZW5zIGZvciBcIkVWRU5UU1wiXG4gICAgICAgICAgICAgICAgbWVtYmVyTmFtZSA9IG1lbWJlck5hbWUuc2xpY2UoMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc01lbWJlckluRWxlbWVudCh3aW4sIGxuKSkge1xuICAgICAgICAgICAgICAgIC8vIHN0YW5kYXJkIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gdGhlIEpTWCBhdHRyaWJ1dGUgY291bGQgaGF2ZSBiZWVuIFwib25Nb3VzZU92ZXJcIiBhbmQgdGhlXG4gICAgICAgICAgICAgICAgLy8gbWVtYmVyIG5hbWUgXCJvbm1vdXNlb3ZlclwiIGlzIG9uIHRoZSB3aW5kb3cncyBwcm90b3R5cGVcbiAgICAgICAgICAgICAgICAvLyBzbyBsZXQncyBhZGQgdGhlIGxpc3RlbmVyIFwibW91c2VvdmVyXCIsIHdoaWNoIGlzIGFsbCBsb3dlcmNhc2VkXG4gICAgICAgICAgICAgICAgbWVtYmVyTmFtZSA9IGxuLnNsaWNlKDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY3VzdG9tIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gdGhlIEpTWCBhdHRyaWJ1dGUgY291bGQgaGF2ZSBiZWVuIFwib25NeUN1c3RvbUV2ZW50XCJcbiAgICAgICAgICAgICAgICAvLyBzbyBsZXQncyB0cmltIG9mZiB0aGUgXCJvblwiIHByZWZpeCBhbmQgbG93ZXJjYXNlIHRoZSBmaXJzdCBjaGFyYWN0ZXJcbiAgICAgICAgICAgICAgICAvLyBhbmQgYWRkIHRoZSBsaXN0ZW5lciBcIm15Q3VzdG9tRXZlbnRcIlxuICAgICAgICAgICAgICAgIC8vIGV4Y2VwdCBmb3IgdGhlIGZpcnN0IGNoYXJhY3Rlciwgd2Uga2VlcCB0aGUgZXZlbnQgbmFtZSBjYXNlXG4gICAgICAgICAgICAgICAgbWVtYmVyTmFtZSA9IGxuWzJdICsgbWVtYmVyTmFtZS5zbGljZSgzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHBsdC5yZWwoZWxtLCBtZW1iZXJOYW1lLCBvbGRWYWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcGx0LmFlbChlbG0sIG1lbWJlck5hbWUsIG5ld1ZhbHVlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQlVJTEQudmRvbVByb3BPckF0dHIpIHtcbiAgICAgICAgICAgIC8vIFNldCBwcm9wZXJ0eSBpZiBpdCBleGlzdHMgYW5kIGl0J3Mgbm90IGEgU1ZHXG4gICAgICAgICAgICBjb25zdCBpc0NvbXBsZXggPSBpc0NvbXBsZXhUeXBlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIGlmICgoaXNQcm9wIHx8IChpc0NvbXBsZXggJiYgbmV3VmFsdWUgIT09IG51bGwpKSAmJiAhaXNTdmcpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsbS50YWdOYW1lLmluY2x1ZGVzKCctJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG4gPSBuZXdWYWx1ZSA9PSBudWxsID8gJycgOiBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdvcmthcm91bmQgZm9yIFNhZmFyaSwgbW92aW5nIHRoZSA8aW5wdXQ+IGNhcmV0IHdoZW4gcmUtYXNzaWduaW5nIHRoZSBzYW1lIHZhbHVlZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lbWJlck5hbWUgPT09ICdsaXN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUHJvcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob2xkVmFsdWUgPT0gbnVsbCB8fCBlbG1bbWVtYmVyTmFtZV0gIT0gbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsbVttZW1iZXJOYW1lXSA9IG47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbG1bbWVtYmVyTmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE5lZWQgdG8gbWFudWFsbHkgdXBkYXRlIGF0dHJpYnV0ZSBpZjpcbiAgICAgICAgICAgICAqIC0gbWVtYmVyTmFtZSBpcyBub3QgYW4gYXR0cmlidXRlXG4gICAgICAgICAgICAgKiAtIGlmIHdlIGFyZSByZW5kZXJpbmcgdGhlIGhvc3QgZWxlbWVudCBpbiBvcmRlciB0byByZWZsZWN0IGF0dHJpYnV0ZVxuICAgICAgICAgICAgICogLSBpZiBpdCdzIGEgU1ZHLCBzaW5jZSBwcm9wZXJ0aWVzIG1pZ2h0IG5vdCB3b3JrIGluIDxzdmc+XG4gICAgICAgICAgICAgKiAtIGlmIHRoZSBuZXdWYWx1ZSBpcyBudWxsL3VuZGVmaW5lZCBvciAnZmFsc2UnLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBsZXQgeGxpbmsgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChCVUlMRC52ZG9tWGxpbmspIHtcbiAgICAgICAgICAgICAgICBpZiAobG4gIT09IChsbiA9IGxuLnJlcGxhY2UoL154bGlua1xcOj8vLCAnJykpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbWJlck5hbWUgPSBsbjtcbiAgICAgICAgICAgICAgICAgICAgeGxpbmsgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PSBudWxsIHx8IG5ld1ZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gZmFsc2UgfHwgZWxtLmdldEF0dHJpYnV0ZShtZW1iZXJOYW1lKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJVSUxELnZkb21YbGluayAmJiB4bGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZU5TKFhMSU5LX05TLCBtZW1iZXJOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUobWVtYmVyTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgoIWlzUHJvcCB8fCBmbGFncyAmIDQgLyogVk5PREVfRkxBR1MuaXNIb3N0ICovIHx8IGlzU3ZnKSAmJiAhaXNDb21wbGV4KSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBuZXdWYWx1ZSA9PT0gdHJ1ZSA/ICcnIDogbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKEJVSUxELnZkb21YbGluayAmJiB4bGluaykge1xuICAgICAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlTlMoWExJTktfTlMsIG1lbWJlck5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUobWVtYmVyTmFtZSwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBwYXJzZUNsYXNzTGlzdFJlZ2V4ID0gL1xccy87XG5jb25zdCBwYXJzZUNsYXNzTGlzdCA9ICh2YWx1ZSkgPT4gKCF2YWx1ZSA/IFtdIDogdmFsdWUuc3BsaXQocGFyc2VDbGFzc0xpc3RSZWdleCkpO1xuY29uc3QgdXBkYXRlRWxlbWVudCA9IChvbGRWbm9kZSwgbmV3Vm5vZGUsIGlzU3ZnTW9kZSwgbWVtYmVyTmFtZSkgPT4ge1xuICAgIC8vIGlmIHRoZSBlbGVtZW50IHBhc3NlZCBpbiBpcyBhIHNoYWRvdyByb290LCB3aGljaCBpcyBhIGRvY3VtZW50IGZyYWdtZW50XG4gICAgLy8gdGhlbiB3ZSB3YW50IHRvIGJlIGFkZGluZyBhdHRycy9wcm9wcyB0byB0aGUgc2hhZG93IHJvb3QncyBcImhvc3RcIiBlbGVtZW50XG4gICAgLy8gaWYgaXQncyBub3QgYSBzaGFkb3cgcm9vdCwgdGhlbiB3ZSBhZGQgYXR0cnMvcHJvcHMgdG8gdGhlIHNhbWUgZWxlbWVudFxuICAgIGNvbnN0IGVsbSA9IG5ld1Zub2RlLiRlbG0kLm5vZGVUeXBlID09PSAxMSAvKiBOT0RFX1RZUEUuRG9jdW1lbnRGcmFnbWVudCAqLyAmJiBuZXdWbm9kZS4kZWxtJC5ob3N0XG4gICAgICAgID8gbmV3Vm5vZGUuJGVsbSQuaG9zdFxuICAgICAgICA6IG5ld1Zub2RlLiRlbG0kO1xuICAgIGNvbnN0IG9sZFZub2RlQXR0cnMgPSAob2xkVm5vZGUgJiYgb2xkVm5vZGUuJGF0dHJzJCkgfHwgRU1QVFlfT0JKO1xuICAgIGNvbnN0IG5ld1Zub2RlQXR0cnMgPSBuZXdWbm9kZS4kYXR0cnMkIHx8IEVNUFRZX09CSjtcbiAgICBpZiAoQlVJTEQudXBkYXRhYmxlKSB7XG4gICAgICAgIC8vIHJlbW92ZSBhdHRyaWJ1dGVzIG5vIGxvbmdlciBwcmVzZW50IG9uIHRoZSB2bm9kZSBieSBzZXR0aW5nIHRoZW0gdG8gdW5kZWZpbmVkXG4gICAgICAgIGZvciAobWVtYmVyTmFtZSBpbiBvbGRWbm9kZUF0dHJzKSB7XG4gICAgICAgICAgICBpZiAoIShtZW1iZXJOYW1lIGluIG5ld1Zub2RlQXR0cnMpKSB7XG4gICAgICAgICAgICAgICAgc2V0QWNjZXNzb3IoZWxtLCBtZW1iZXJOYW1lLCBvbGRWbm9kZUF0dHJzW21lbWJlck5hbWVdLCB1bmRlZmluZWQsIGlzU3ZnTW9kZSwgbmV3Vm5vZGUuJGZsYWdzJCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gYWRkIG5ldyAmIHVwZGF0ZSBjaGFuZ2VkIGF0dHJpYnV0ZXNcbiAgICBmb3IgKG1lbWJlck5hbWUgaW4gbmV3Vm5vZGVBdHRycykge1xuICAgICAgICBzZXRBY2Nlc3NvcihlbG0sIG1lbWJlck5hbWUsIG9sZFZub2RlQXR0cnNbbWVtYmVyTmFtZV0sIG5ld1Zub2RlQXR0cnNbbWVtYmVyTmFtZV0sIGlzU3ZnTW9kZSwgbmV3Vm5vZGUuJGZsYWdzJCk7XG4gICAgfVxufTtcbi8qKlxuICogQ3JlYXRlIGEgRE9NIE5vZGUgY29ycmVzcG9uZGluZyB0byBvbmUgb2YgdGhlIGNoaWxkcmVuIG9mIGEgZ2l2ZW4gVk5vZGUuXG4gKlxuICogQHBhcmFtIG9sZFBhcmVudFZOb2RlIHRoZSBwYXJlbnQgVk5vZGUgZnJvbSB0aGUgcHJldmlvdXMgcmVuZGVyXG4gKiBAcGFyYW0gbmV3UGFyZW50Vk5vZGUgdGhlIHBhcmVudCBWTm9kZSBmcm9tIHRoZSBjdXJyZW50IHJlbmRlclxuICogQHBhcmFtIGNoaWxkSW5kZXggdGhlIGluZGV4IG9mIHRoZSBWTm9kZSwgaW4gdGhlIF9uZXdfIHBhcmVudCBub2RlJ3NcbiAqIGNoaWxkcmVuLCBmb3Igd2hpY2ggd2Ugd2lsbCBjcmVhdGUgYSBuZXcgRE9NIG5vZGVcbiAqIEBwYXJhbSBwYXJlbnRFbG0gdGhlIHBhcmVudCBET00gbm9kZSB3aGljaCBvdXIgbmV3IG5vZGUgd2lsbCBiZSBhIGNoaWxkIG9mXG4gKiBAcmV0dXJucyB0aGUgbmV3bHkgY3JlYXRlZCBub2RlXG4gKi9cbmNvbnN0IGNyZWF0ZUVsbSA9IChvbGRQYXJlbnRWTm9kZSwgbmV3UGFyZW50Vk5vZGUsIGNoaWxkSW5kZXgsIHBhcmVudEVsbSkgPT4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWNvbnN0XG4gICAgY29uc3QgbmV3Vk5vZGUgPSBuZXdQYXJlbnRWTm9kZS4kY2hpbGRyZW4kW2NoaWxkSW5kZXhdO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgZWxtO1xuICAgIGxldCBjaGlsZE5vZGU7XG4gICAgbGV0IG9sZFZOb2RlO1xuICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiAhdXNlTmF0aXZlU2hhZG93RG9tKSB7XG4gICAgICAgIC8vIHJlbWVtYmVyIGZvciBsYXRlciB3ZSBuZWVkIHRvIGNoZWNrIHRvIHJlbG9jYXRlIG5vZGVzXG4gICAgICAgIGNoZWNrU2xvdFJlbG9jYXRlID0gdHJ1ZTtcbiAgICAgICAgaWYgKG5ld1ZOb2RlLiR0YWckID09PSAnc2xvdCcpIHtcbiAgICAgICAgICAgIGlmIChzY29wZUlkKSB7XG4gICAgICAgICAgICAgICAgLy8gc2NvcGVkIGNzcyBuZWVkcyB0byBhZGQgaXRzIHNjb3BlZCBpZCB0byB0aGUgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICAgICAgICBwYXJlbnRFbG0uY2xhc3NMaXN0LmFkZChzY29wZUlkICsgJy1zJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdWTm9kZS4kZmxhZ3MkIHw9IG5ld1ZOb2RlLiRjaGlsZHJlbiRcbiAgICAgICAgICAgICAgICA/IC8vIHNsb3QgZWxlbWVudCBoYXMgZmFsbGJhY2sgY29udGVudFxuICAgICAgICAgICAgICAgICAgICAyIC8qIFZOT0RFX0ZMQUdTLmlzU2xvdEZhbGxiYWNrICovXG4gICAgICAgICAgICAgICAgOiAvLyBzbG90IGVsZW1lbnQgZG9lcyBub3QgaGF2ZSBmYWxsYmFjayBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgIDEgLyogVk5PREVfRkxBR1MuaXNTbG90UmVmZXJlbmNlICovO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChCVUlMRC5pc0RldiAmJiBuZXdWTm9kZS4kZWxtJCkge1xuICAgICAgICBjb25zb2xlRGV2RXJyb3IoYFRoZSBKU1ggJHtuZXdWTm9kZS4kdGV4dCQgIT09IG51bGwgPyBgXCIke25ld1ZOb2RlLiR0ZXh0JH1cIiB0ZXh0YCA6IGBcIiR7bmV3Vk5vZGUuJHRhZyR9XCIgZWxlbWVudGB9IG5vZGUgc2hvdWxkIG5vdCBiZSBzaGFyZWQgd2l0aGluIHRoZSBzYW1lIHJlbmRlcmVyLiBUaGUgcmVuZGVyZXIgY2FjaGVzIGVsZW1lbnQgbG9va3VwcyBpbiBvcmRlciB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLiBIb3dldmVyLCBhIHNpZGUgZWZmZWN0IGZyb20gdGhpcyBpcyB0aGF0IHRoZSBleGFjdCBzYW1lIEpTWCBub2RlIHNob3VsZCBub3QgYmUgcmV1c2VkLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBwbGVhc2Ugc2VlIGh0dHBzOi8vc3RlbmNpbGpzLmNvbS9kb2NzL3RlbXBsYXRpbmctanN4I2F2b2lkLXNoYXJlZC1qc3gtbm9kZXNgKTtcbiAgICB9XG4gICAgaWYgKEJVSUxELnZkb21UZXh0ICYmIG5ld1ZOb2RlLiR0ZXh0JCAhPT0gbnVsbCkge1xuICAgICAgICAvLyBjcmVhdGUgdGV4dCBub2RlXG4gICAgICAgIGVsbSA9IG5ld1ZOb2RlLiRlbG0kID0gZG9jLmNyZWF0ZVRleHROb2RlKG5ld1ZOb2RlLiR0ZXh0JCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uICYmIG5ld1ZOb2RlLiRmbGFncyQgJiAxIC8qIFZOT0RFX0ZMQUdTLmlzU2xvdFJlZmVyZW5jZSAqLykge1xuICAgICAgICAvLyBjcmVhdGUgYSBzbG90IHJlZmVyZW5jZSBub2RlXG4gICAgICAgIGVsbSA9IG5ld1ZOb2RlLiRlbG0kID1cbiAgICAgICAgICAgIEJVSUxELmlzRGVidWcgfHwgQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgPyBzbG90UmVmZXJlbmNlRGVidWdOb2RlKG5ld1ZOb2RlKSA6IGRvYy5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoQlVJTEQuc3ZnICYmICFpc1N2Z01vZGUpIHtcbiAgICAgICAgICAgIGlzU3ZnTW9kZSA9IG5ld1ZOb2RlLiR0YWckID09PSAnc3ZnJztcbiAgICAgICAgfVxuICAgICAgICAvLyBjcmVhdGUgZWxlbWVudFxuICAgICAgICBlbG0gPSBuZXdWTm9kZS4kZWxtJCA9IChCVUlMRC5zdmdcbiAgICAgICAgICAgID8gZG9jLmNyZWF0ZUVsZW1lbnROUyhpc1N2Z01vZGUgPyBTVkdfTlMgOiBIVE1MX05TLCBCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiBuZXdWTm9kZS4kZmxhZ3MkICYgMiAvKiBWTk9ERV9GTEFHUy5pc1Nsb3RGYWxsYmFjayAqL1xuICAgICAgICAgICAgICAgID8gJ3Nsb3QtZmInXG4gICAgICAgICAgICAgICAgOiBuZXdWTm9kZS4kdGFnJClcbiAgICAgICAgICAgIDogZG9jLmNyZWF0ZUVsZW1lbnQoQlVJTEQuc2xvdFJlbG9jYXRpb24gJiYgbmV3Vk5vZGUuJGZsYWdzJCAmIDIgLyogVk5PREVfRkxBR1MuaXNTbG90RmFsbGJhY2sgKi9cbiAgICAgICAgICAgICAgICA/ICdzbG90LWZiJ1xuICAgICAgICAgICAgICAgIDogbmV3Vk5vZGUuJHRhZyQpKTtcbiAgICAgICAgaWYgKEJVSUxELnN2ZyAmJiBpc1N2Z01vZGUgJiYgbmV3Vk5vZGUuJHRhZyQgPT09ICdmb3JlaWduT2JqZWN0Jykge1xuICAgICAgICAgICAgaXNTdmdNb2RlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRkIGNzcyBjbGFzc2VzLCBhdHRycywgcHJvcHMsIGxpc3RlbmVycywgZXRjLlxuICAgICAgICBpZiAoQlVJTEQudmRvbUF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgdXBkYXRlRWxlbWVudChudWxsLCBuZXdWTm9kZSwgaXNTdmdNb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKEJVSUxELnNoYWRvd0RvbSB8fCBCVUlMRC5zY29wZWQpICYmIGlzRGVmKHNjb3BlSWQpICYmIGVsbVsncy1zaSddICE9PSBzY29wZUlkKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHNjb3BlSWQgYW5kIHRoaXMgaXMgdGhlIGluaXRpYWwgcmVuZGVyXG4gICAgICAgICAgICAvLyB0aGVuIGxldCdzIGFkZCB0aGUgc2NvcGVJZCBhcyBhIGNzcyBjbGFzc1xuICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5hZGQoKGVsbVsncy1zaSddID0gc2NvcGVJZCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdWTm9kZS4kY2hpbGRyZW4kKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbmV3Vk5vZGUuJGNoaWxkcmVuJC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgbm9kZVxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNyZWF0ZUVsbShvbGRQYXJlbnRWTm9kZSwgbmV3Vk5vZGUsIGksIGVsbSk7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIG5vZGUgY291bGQgaGF2ZSBiZWVuIG51bGxcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBvdXIgbmV3IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgZWxtLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5zdmcpIHtcbiAgICAgICAgICAgIGlmIChuZXdWTm9kZS4kdGFnJCA9PT0gJ3N2ZycpIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHJlc2V0IHRoZSBTVkcgY29udGV4dCB3aGVuIHdlJ3JlIGV4aXRpbmcgPHN2Zz4gZWxlbWVudFxuICAgICAgICAgICAgICAgIGlzU3ZnTW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZWxtLnRhZ05hbWUgPT09ICdmb3JlaWduT2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIC8vIFJlZW50ZXIgU1ZHIGNvbnRleHQgd2hlbiB3ZSdyZSBleGl0aW5nIDxmb3JlaWduT2JqZWN0PiBlbGVtZW50XG4gICAgICAgICAgICAgICAgaXNTdmdNb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24pIHtcbiAgICAgICAgZWxtWydzLWhuJ10gPSBob3N0VGFnTmFtZTtcbiAgICAgICAgaWYgKG5ld1ZOb2RlLiRmbGFncyQgJiAoMiAvKiBWTk9ERV9GTEFHUy5pc1Nsb3RGYWxsYmFjayAqLyB8IDEgLyogVk5PREVfRkxBR1MuaXNTbG90UmVmZXJlbmNlICovKSkge1xuICAgICAgICAgICAgLy8gcmVtZW1iZXIgdGhlIGNvbnRlbnQgcmVmZXJlbmNlIGNvbW1lbnRcbiAgICAgICAgICAgIGVsbVsncy1zciddID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIHJlbWVtYmVyIHRoZSBjb250ZW50IHJlZmVyZW5jZSBjb21tZW50XG4gICAgICAgICAgICBlbG1bJ3MtY3InXSA9IGNvbnRlbnRSZWY7XG4gICAgICAgICAgICAvLyByZW1lbWJlciB0aGUgc2xvdCBuYW1lLCBvciBlbXB0eSBzdHJpbmcgZm9yIGRlZmF1bHQgc2xvdFxuICAgICAgICAgICAgZWxtWydzLXNuJ10gPSBuZXdWTm9kZS4kbmFtZSQgfHwgJyc7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB3ZSd2ZSBnb3QgYW4gb2xkIHZub2RlIGZvciB0aGlzIHNsb3RcbiAgICAgICAgICAgIG9sZFZOb2RlID0gb2xkUGFyZW50Vk5vZGUgJiYgb2xkUGFyZW50Vk5vZGUuJGNoaWxkcmVuJCAmJiBvbGRQYXJlbnRWTm9kZS4kY2hpbGRyZW4kW2NoaWxkSW5kZXhdO1xuICAgICAgICAgICAgaWYgKG9sZFZOb2RlICYmIG9sZFZOb2RlLiR0YWckID09PSBuZXdWTm9kZS4kdGFnJCAmJiBvbGRQYXJlbnRWTm9kZS4kZWxtJCkge1xuICAgICAgICAgICAgICAgIC8vIHdlJ3ZlIGdvdCBhbiBvbGQgc2xvdCB2bm9kZSBhbmQgdGhlIHdyYXBwZXIgaXMgYmVpbmcgcmVwbGFjZWRcbiAgICAgICAgICAgICAgICAvLyBzbyBsZXQncyBtb3ZlIHRoZSBvbGQgc2xvdCBjb250ZW50IGJhY2sgdG8gaXQncyBvcmlnaW5hbCBsb2NhdGlvblxuICAgICAgICAgICAgICAgIHB1dEJhY2tJbk9yaWdpbmFsTG9jYXRpb24ob2xkUGFyZW50Vk5vZGUuJGVsbSQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxtO1xufTtcbmNvbnN0IHB1dEJhY2tJbk9yaWdpbmFsTG9jYXRpb24gPSAocGFyZW50RWxtLCByZWN1cnNpdmUpID0+IHtcbiAgICBwbHQuJGZsYWdzJCB8PSAxIC8qIFBMQVRGT1JNX0ZMQUdTLmlzVG1wRGlzY29ubmVjdGVkICovO1xuICAgIGNvbnN0IG9sZFNsb3RDaGlsZE5vZGVzID0gcGFyZW50RWxtLmNoaWxkTm9kZXM7XG4gICAgZm9yIChsZXQgaSA9IG9sZFNsb3RDaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IG9sZFNsb3RDaGlsZE5vZGVzW2ldO1xuICAgICAgICBpZiAoY2hpbGROb2RlWydzLWhuJ10gIT09IGhvc3RUYWdOYW1lICYmIGNoaWxkTm9kZVsncy1vbCddKSB7XG4gICAgICAgICAgICAvLyAvLyB0aGlzIGNoaWxkIG5vZGUgaW4gdGhlIG9sZCBlbGVtZW50IGlzIGZyb20gYW5vdGhlciBjb21wb25lbnRcbiAgICAgICAgICAgIC8vIC8vIHJlbW92ZSB0aGlzIG5vZGUgZnJvbSB0aGUgb2xkIHNsb3QncyBwYXJlbnRcbiAgICAgICAgICAgIC8vIGNoaWxkTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIC8vIGFuZCByZWxvY2F0ZSBpdCBiYWNrIHRvIGl0J3Mgb3JpZ2luYWwgbG9jYXRpb25cbiAgICAgICAgICAgIHBhcmVudFJlZmVyZW5jZU5vZGUoY2hpbGROb2RlKS5pbnNlcnRCZWZvcmUoY2hpbGROb2RlLCByZWZlcmVuY2VOb2RlKGNoaWxkTm9kZSkpO1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBvbGQgb3JpZ2luYWwgbG9jYXRpb24gY29tbWVudCBlbnRpcmVseVxuICAgICAgICAgICAgLy8gbGF0ZXIgb24gdGhlIHBhdGNoIGZ1bmN0aW9uIHdpbGwga25vdyB3aGF0IHRvIGRvXG4gICAgICAgICAgICAvLyBhbmQgbW92ZSB0aGlzIHRvIHRoZSBjb3JyZWN0IHNwb3QgaW4gbmVlZCBiZVxuICAgICAgICAgICAgY2hpbGROb2RlWydzLW9sJ10ucmVtb3ZlKCk7XG4gICAgICAgICAgICBjaGlsZE5vZGVbJ3Mtb2wnXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNoZWNrU2xvdFJlbG9jYXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVjdXJzaXZlKSB7XG4gICAgICAgICAgICBwdXRCYWNrSW5PcmlnaW5hbExvY2F0aW9uKGNoaWxkTm9kZSwgcmVjdXJzaXZlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwbHQuJGZsYWdzJCAmPSB+MSAvKiBQTEFURk9STV9GTEFHUy5pc1RtcERpc2Nvbm5lY3RlZCAqLztcbn07XG4vKipcbiAqIENyZWF0ZSBET00gbm9kZXMgY29ycmVzcG9uZGluZyB0byBhIGxpc3Qgb2Yge0BsaW5rIGQuVm5vZGV9IG9iamVjdHMgYW5kXG4gKiBhZGQgdGhlbSB0byB0aGUgRE9NIGluIHRoZSBhcHByb3ByaWF0ZSBwbGFjZS5cbiAqXG4gKiBAcGFyYW0gcGFyZW50RWxtIHRoZSBET00gbm9kZSB3aGljaCBzaG91bGQgYmUgdXNlZCBhcyBhIHBhcmVudCBmb3IgdGhlIG5ld1xuICogRE9NIG5vZGVzXG4gKiBAcGFyYW0gYmVmb3JlIGEgY2hpbGQgb2YgdGhlIGBwYXJlbnRFbG1gIHdoaWNoIHRoZSBuZXcgY2hpbGRyZW4gc2hvdWxkIGJlXG4gKiBpbnNlcnRlZCBiZWZvcmUgKG9wdGlvbmFsKVxuICogQHBhcmFtIHBhcmVudFZOb2RlIHRoZSBwYXJlbnQgdmlydHVhbCBET00gbm9kZVxuICogQHBhcmFtIHZub2RlcyB0aGUgbmV3IGNoaWxkIHZpcnR1YWwgRE9NIG5vZGVzIHRvIHByb2R1Y2UgRE9NIG5vZGVzIGZvclxuICogQHBhcmFtIHN0YXJ0SWR4IHRoZSBpbmRleCBpbiB0aGUgY2hpbGQgdmlydHVhbCBET00gbm9kZXMgYXQgd2hpY2ggdG8gc3RhcnRcbiAqIGNyZWF0aW5nIERPTSBub2RlcyAoaW5jbHVzaXZlKVxuICogQHBhcmFtIGVuZElkeCB0aGUgaW5kZXggaW4gdGhlIGNoaWxkIHZpcnR1YWwgRE9NIG5vZGVzIGF0IHdoaWNoIHRvIHN0b3BcbiAqIGNyZWF0aW5nIERPTSBub2RlcyAoaW5jbHVzaXZlKVxuICovXG5jb25zdCBhZGRWbm9kZXMgPSAocGFyZW50RWxtLCBiZWZvcmUsIHBhcmVudFZOb2RlLCB2bm9kZXMsIHN0YXJ0SWR4LCBlbmRJZHgpID0+IHtcbiAgICBsZXQgY29udGFpbmVyRWxtID0gKChCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiBwYXJlbnRFbG1bJ3MtY3InXSAmJiBwYXJlbnRFbG1bJ3MtY3InXS5wYXJlbnROb2RlKSB8fCBwYXJlbnRFbG0pO1xuICAgIGxldCBjaGlsZE5vZGU7XG4gICAgaWYgKEJVSUxELnNoYWRvd0RvbSAmJiBjb250YWluZXJFbG0uc2hhZG93Um9vdCAmJiBjb250YWluZXJFbG0udGFnTmFtZSA9PT0gaG9zdFRhZ05hbWUpIHtcbiAgICAgICAgY29udGFpbmVyRWxtID0gY29udGFpbmVyRWxtLnNoYWRvd1Jvb3Q7XG4gICAgfVxuICAgIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcbiAgICAgICAgaWYgKHZub2Rlc1tzdGFydElkeF0pIHtcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNyZWF0ZUVsbShudWxsLCBwYXJlbnRWTm9kZSwgc3RhcnRJZHgsIHBhcmVudEVsbSk7XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgdm5vZGVzW3N0YXJ0SWR4XS4kZWxtJCA9IGNoaWxkTm9kZTtcbiAgICAgICAgICAgICAgICBjb250YWluZXJFbG0uaW5zZXJ0QmVmb3JlKGNoaWxkTm9kZSwgQlVJTEQuc2xvdFJlbG9jYXRpb24gPyByZWZlcmVuY2VOb2RlKGJlZm9yZSkgOiBiZWZvcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICogUmVtb3ZlIHRoZSBET00gZWxlbWVudHMgY29ycmVzcG9uZGluZyB0byBhIGxpc3Qgb2Yge0BsaW5rIGQuVk5vZGV9IG9iamVjdHMuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvLCBmb3IgaW5zdGFuY2UsIGNsZWFuIHVwIGFmdGVyIGEgbGlzdCBvZiBjaGlsZHJlbiB3aGljaFxuICogc2hvdWxkIG5vIGxvbmdlciBiZSBzaG93bi5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGFsc28gaGFuZGxlcyBzb21lIG9mIFN0ZW5jaWwncyBzbG90IHJlbG9jYXRpb24gbG9naWMuXG4gKlxuICogQHBhcmFtIHZub2RlcyBhIGxpc3Qgb2YgdmlydHVhbCBET00gbm9kZXMgdG8gcmVtb3ZlXG4gKiBAcGFyYW0gc3RhcnRJZHggdGhlIGluZGV4IGF0IHdoaWNoIHRvIHN0YXJ0IHJlbW92aW5nIG5vZGVzIChpbmNsdXNpdmUpXG4gKiBAcGFyYW0gZW5kSWR4IHRoZSBpbmRleCBhdCB3aGljaCB0byBzdG9wIHJlbW92aW5nIG5vZGVzIChpbmNsdXNpdmUpXG4gKiBAcGFyYW0gdm5vZGUgYSBWTm9kZVxuICogQHBhcmFtIGVsbSBhbiBlbGVtZW50XG4gKi9cbmNvbnN0IHJlbW92ZVZub2RlcyA9ICh2bm9kZXMsIHN0YXJ0SWR4LCBlbmRJZHgsIHZub2RlLCBlbG0pID0+IHtcbiAgICBmb3IgKDsgc3RhcnRJZHggPD0gZW5kSWR4OyArK3N0YXJ0SWR4KSB7XG4gICAgICAgIGlmICgodm5vZGUgPSB2bm9kZXNbc3RhcnRJZHhdKSkge1xuICAgICAgICAgICAgZWxtID0gdm5vZGUuJGVsbSQ7XG4gICAgICAgICAgICBjYWxsTm9kZVJlZnModm5vZGUpO1xuICAgICAgICAgICAgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UncmUgcmVtb3ZpbmcgdGhpcyBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gc28gaXQncyBwb3NzaWJsZSB3ZSBuZWVkIHRvIHNob3cgc2xvdCBmYWxsYmFjayBjb250ZW50IG5vd1xuICAgICAgICAgICAgICAgIGNoZWNrU2xvdEZhbGxiYWNrVmlzaWJpbGl0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGVsbVsncy1vbCddKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgb3JpZ2luYWwgbG9jYXRpb24gY29tbWVudFxuICAgICAgICAgICAgICAgICAgICBlbG1bJ3Mtb2wnXS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCBjaGlsZCBub2RlcyBvZiB0aGUgbm9kZVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGF0J3MgYmVpbmcgcmVtb3ZlZCBhcmUgc2xvdCBub2Rlc1xuICAgICAgICAgICAgICAgICAgICBwdXRCYWNrSW5PcmlnaW5hbExvY2F0aW9uKGVsbSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSB2bm9kZSdzIGVsZW1lbnQgZnJvbSB0aGUgZG9tXG4gICAgICAgICAgICBlbG0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gKiBSZWNvbmNpbGUgdGhlIGNoaWxkcmVuIG9mIGEgbmV3IFZOb2RlIHdpdGggdGhlIGNoaWxkcmVuIG9mIGFuIG9sZCBWTm9kZSBieVxuICogdHJhdmVyc2luZyB0aGUgdHdvIGNvbGxlY3Rpb25zIG9mIGNoaWxkcmVuLCBpZGVudGlmeWluZyBub2RlcyB0aGF0IGFyZVxuICogY29uc2VydmVkIG9yIGNoYW5nZWQsIGNhbGxpbmcgb3V0IHRvIGBwYXRjaGAgdG8gbWFrZSBhbnkgbmVjZXNzYXJ5XG4gKiB1cGRhdGVzIHRvIHRoZSBET00sIGFuZCByZWFycmFuZ2luZyBET00gbm9kZXMgYXMgbmVlZGVkLlxuICpcbiAqIFRoZSBhbGdvcml0aG0gZm9yIHJlY29uY2lsaW5nIGNoaWxkcmVuIHdvcmtzIGJ5IGFuYWx5emluZyB0d28gJ3dpbmRvd3MnIG9udG9cbiAqIHRoZSB0d28gYXJyYXlzIG9mIGNoaWxkcmVuIChgb2xkQ2hgIGFuZCBgbmV3Q2hgKS4gV2Uga2VlcCB0cmFjayBvZiB0aGVcbiAqICd3aW5kb3dzJyBieSBzdG9yaW5nIHN0YXJ0IGFuZCBlbmQgaW5kaWNlcyBhbmQgcmVmZXJlbmNlcyB0byB0aGVcbiAqIGNvcnJlc3BvbmRpbmcgYXJyYXkgZW50cmllcy4gSW5pdGlhbGx5IHRoZSB0d28gJ3dpbmRvd3MnIGFyZSBiYXNpY2FsbHkgZXF1YWxcbiAqIHRvIHRoZSBlbnRpcmUgYXJyYXksIGJ1dCB3ZSBwcm9ncmVzc2l2ZWx5IG5hcnJvdyB0aGUgd2luZG93cyB1bnRpbCB0aGVyZSBhcmVcbiAqIG5vIGNoaWxkcmVuIGxlZnQgdG8gdXBkYXRlIGJ5IGRvaW5nIHRoZSBmb2xsb3dpbmc6XG4gKlxuICogMS4gU2tpcCBhbnkgYG51bGxgIGVudHJpZXMgYXQgdGhlIGJlZ2lubmluZyBvciBlbmQgb2YgdGhlIHR3byBhcnJheXMsIHNvXG4gKiAgICB0aGF0IGlmIHdlIGhhdmUgYW4gaW5pdGlhbCBhcnJheSBsaWtlIHRoZSBmb2xsb3dpbmcgd2UnbGwgZW5kIHVwIGRlYWxpbmdcbiAqICAgIG9ubHkgd2l0aCBhIHdpbmRvdyBib3VuZGVkIGJ5IHRoZSBoaWdobGlnaHRlZCBlbGVtZW50czpcbiAqXG4gKiAgICBbbnVsbCwgbnVsbCwgVk5vZGUxICwgLi4uICwgVk5vZGUyLCBudWxsLCBudWxsXVxuICogICAgICAgICAgICAgICAgIF5eXl5eXiAgICAgICAgIF5eXl5eXlxuICpcbiAqIDIuIENoZWNrIHRvIHNlZSBpZiB0aGUgZWxlbWVudHMgYXQgdGhlIGhlYWQgYW5kIHRhaWwgcG9zaXRpb25zIGFyZSBlcXVhbFxuICogICAgYWNyb3NzIHRoZSB3aW5kb3dzLiBUaGlzIHdpbGwgYmFzaWNhbGx5IGRldGVjdCBlbGVtZW50cyB3aGljaCBoYXZlbid0XG4gKiAgICBiZWVuIGFkZGVkLCByZW1vdmVkLCBvciBjaGFuZ2VkIHBvc2l0aW9uLCBpLmUuIGlmIHlvdSBoYWQgdGhlIGZvbGxvd2luZ1xuICogICAgVk5vZGUgZWxlbWVudHMgKHJlcHJlc2VudGVkIGFzIEhUTUwpOlxuICpcbiAqICAgIG9sZFZOb2RlOiBgPGRpdj48cD48c3Bhbj5IRVk8L3NwYW4+PC9wPjwvZGl2PmBcbiAqICAgIG5ld1ZOb2RlOiBgPGRpdj48cD48c3Bhbj5USEVSRTwvc3Bhbj48L3A+PC9kaXY+YFxuICpcbiAqICAgIFRoZW4gd2hlbiBjb21wYXJpbmcgdGhlIGNoaWxkcmVuIG9mIHRoZSBgPGRpdj5gIHRhZyB3ZSBjaGVjayB0aGUgZXF1YWxpdHlcbiAqICAgIG9mIHRoZSBWTm9kZXMgY29ycmVzcG9uZGluZyB0byB0aGUgYDxwPmAgdGFncyBhbmQsIHNpbmNlIHRoZXkgYXJlIHRoZVxuICogICAgc2FtZSB0YWcgaW4gdGhlIHNhbWUgcG9zaXRpb24sIHdlJ2QgYmUgYWJsZSB0byBhdm9pZCBjb21wbGV0ZWx5XG4gKiAgICByZS1yZW5kZXJpbmcgdGhlIHN1YnRyZWUgdW5kZXIgdGhlbSB3aXRoIGEgbmV3IERPTSBlbGVtZW50IGFuZCB3b3VsZCBqdXN0XG4gKiAgICBjYWxsIG91dCB0byBgcGF0Y2hgIHRvIGhhbmRsZSByZWNvbmNpbGluZyB0aGVpciBjaGlsZHJlbiBhbmQgc28gb24uXG4gKlxuICogMy4gQ2hlY2ssIGZvciBib3RoIHdpbmRvd3MsIHRvIHNlZSBpZiB0aGUgZWxlbWVudCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZVxuICogICAgd2luZG93IGNvcnJlc3BvbmRzIHRvIHRoZSBlbGVtZW50IGF0IHRoZSBlbmQgb2YgdGhlIG90aGVyIHdpbmRvdy4gVGhpcyBpc1xuICogICAgYSBoZXVyaXN0aWMgd2hpY2ggd2lsbCBsZXQgdXMgaWRlbnRpZnkgX3NvbWVfIHNpdHVhdGlvbnMgaW4gd2hpY2hcbiAqICAgIGVsZW1lbnRzIGhhdmUgY2hhbmdlZCBwb3NpdGlvbiwgZm9yIGluc3RhbmNlIGl0IF9zaG91bGRfIGRldGVjdCB0aGF0IHRoZVxuICogICAgY2hpbGRyZW4gbm9kZXMgdGhlbXNlbHZlcyBoYXZlIG5vdCBjaGFuZ2VkIGJ1dCBtZXJlbHkgbW92ZWQgaW4gdGhlXG4gKiAgICBmb2xsb3dpbmcgZXhhbXBsZTpcbiAqXG4gKiAgICBvbGRWTm9kZTogYDxkaXY+PGVsZW1lbnQtb25lIC8+PGVsZW1lbnQtdHdvIC8+PC9kaXY+YFxuICogICAgbmV3Vk5vZGU6IGA8ZGl2PjxlbGVtZW50LXR3byAvPjxlbGVtZW50LW9uZSAvPjwvZGl2PmBcbiAqXG4gKiAgICBJZiB3ZSBmaW5kIGNhc2VzIGxpa2UgdGhpcyB0aGVuIHdlIGFsc28gbmVlZCB0byBtb3ZlIHRoZSBjb25jcmV0ZSBET01cbiAqICAgIGVsZW1lbnRzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIG1vdmVkIGNoaWxkcmVuIHRvIHdyaXRlIHRoZSByZS1vcmRlciB0byB0aGVcbiAqICAgIERPTS5cbiAqXG4gKiA0LiBGaW5hbGx5LCBpZiBWTm9kZXMgaGF2ZSB0aGUgYGtleWAgYXR0cmlidXRlIHNldCBvbiB0aGVtIHdlIGNoZWNrIGZvciBhbnlcbiAqICAgIG5vZGVzIGluIHRoZSBvbGQgY2hpbGRyZW4gd2hpY2ggaGF2ZSB0aGUgc2FtZSBrZXkgYXMgdGhlIGZpcnN0IGVsZW1lbnQgaW5cbiAqICAgIG91ciB3aW5kb3cgb24gdGhlIG5ldyBjaGlsZHJlbi4gSWYgd2UgZmluZCBzdWNoIGEgbm9kZSB3ZSBoYW5kbGUgY2FsbGluZ1xuICogICAgb3V0IHRvIGBwYXRjaGAsIG1vdmluZyByZWxldmFudCBET00gbm9kZXMsIGFuZCBzbyBvbiwgaW4gYWNjb3JkYW5jZSB3aXRoXG4gKiAgICB3aGF0IHdlIGZpbmQuXG4gKlxuICogRmluYWxseSwgb25jZSB3ZSd2ZSBuYXJyb3dlZCBvdXIgJ3dpbmRvd3MnIHRvIHRoZSBwb2ludCB0aGF0IGVpdGhlciBvZiB0aGVtXG4gKiBjb2xsYXBzZSAoaS5lLiB0aGV5IGhhdmUgbGVuZ3RoIDApIHdlIHRoZW4gaGFuZGxlIGFueSByZW1haW5pbmcgVk5vZGVcbiAqIGluc2VydGlvbiBvciBkZWxldGlvbiB0aGF0IG5lZWRzIHRvIGhhcHBlbiB0byBnZXQgYSBET00gc3RhdGUgdGhhdCBjb3JyZWN0bHlcbiAqIHJlZmxlY3RzIHRoZSBuZXcgY2hpbGQgVk5vZGVzLiBJZiwgZm9yIGluc3RhbmNlLCBhZnRlciBvdXIgd2luZG93IG9uIHRoZSBvbGRcbiAqIGNoaWxkcmVuIGhhcyBjb2xsYXBzZWQgd2Ugc3RpbGwgaGF2ZSBtb3JlIG5vZGVzIG9uIHRoZSBuZXcgY2hpbGRyZW4gdGhhdFxuICogd2UgaGF2ZW4ndCBkZWFsdCB3aXRoIHlldCB0aGVuIHdlIG5lZWQgdG8gYWRkIHRoZW0sIG9yIGlmIHRoZSBuZXcgY2hpbGRyZW5cbiAqIGNvbGxhcHNlIGJ1dCB3ZSBzdGlsbCBoYXZlIHVuaGFuZGxlZCBfb2xkXyBjaGlsZHJlbiB0aGVuIHdlIG5lZWQgdG8gbWFrZVxuICogc3VyZSB0aGUgY29ycmVzcG9uZGluZyBET00gbm9kZXMgYXJlIHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIHBhcmVudEVsbSB0aGUgbm9kZSBpbnRvIHdoaWNoIHRoZSBwYXJlbnQgVk5vZGUgaXMgcmVuZGVyZWRcbiAqIEBwYXJhbSBvbGRDaCB0aGUgb2xkIGNoaWxkcmVuIG9mIHRoZSBwYXJlbnQgbm9kZVxuICogQHBhcmFtIG5ld1ZOb2RlIHRoZSBuZXcgVk5vZGUgd2hpY2ggd2lsbCByZXBsYWNlIHRoZSBwYXJlbnRcbiAqIEBwYXJhbSBuZXdDaCB0aGUgbmV3IGNoaWxkcmVuIG9mIHRoZSBwYXJlbnQgbm9kZVxuICovXG5jb25zdCB1cGRhdGVDaGlsZHJlbiA9IChwYXJlbnRFbG0sIG9sZENoLCBuZXdWTm9kZSwgbmV3Q2gpID0+IHtcbiAgICBsZXQgb2xkU3RhcnRJZHggPSAwO1xuICAgIGxldCBuZXdTdGFydElkeCA9IDA7XG4gICAgbGV0IGlkeEluT2xkID0gMDtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IG9sZEVuZElkeCA9IG9sZENoLmxlbmd0aCAtIDE7XG4gICAgbGV0IG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFswXTtcbiAgICBsZXQgb2xkRW5kVm5vZGUgPSBvbGRDaFtvbGRFbmRJZHhdO1xuICAgIGxldCBuZXdFbmRJZHggPSBuZXdDaC5sZW5ndGggLSAxO1xuICAgIGxldCBuZXdTdGFydFZub2RlID0gbmV3Q2hbMF07XG4gICAgbGV0IG5ld0VuZFZub2RlID0gbmV3Q2hbbmV3RW5kSWR4XTtcbiAgICBsZXQgbm9kZTtcbiAgICBsZXQgZWxtVG9Nb3ZlO1xuICAgIHdoaWxlIChvbGRTdGFydElkeCA8PSBvbGRFbmRJZHggJiYgbmV3U3RhcnRJZHggPD0gbmV3RW5kSWR4KSB7XG4gICAgICAgIGlmIChvbGRTdGFydFZub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIFZOb2RlIG1pZ2h0IGhhdmUgYmVlbiBtb3ZlZCBsZWZ0XG4gICAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob2xkRW5kVm5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3U3RhcnRWbm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3RW5kVm5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3RW5kVm5vZGUgPSBuZXdDaFstLW5ld0VuZElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNTYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzdGFydCBub2RlcyBhcmUgdGhlIHNhbWUgdGhlbiB3ZSBzaG91bGQgcGF0Y2ggdGhlIG5ldyBWTm9kZVxuICAgICAgICAgICAgLy8gb250byB0aGUgb2xkIG9uZSwgYW5kIGluY3JlbWVudCBvdXIgYG5ld1N0YXJ0SWR4YCBhbmQgYG9sZFN0YXJ0SWR4YFxuICAgICAgICAgICAgLy8gaW5kaWNlcyB0byByZWZsZWN0IHRoYXQuIFdlIGRvbid0IG5lZWQgdG8gbW92ZSBhbnkgRE9NIE5vZGVzIGFyb3VuZFxuICAgICAgICAgICAgLy8gc2luY2UgdGhpbmdzIGFyZSBtYXRjaGVkIHVwIGluIG9yZGVyLlxuICAgICAgICAgICAgcGF0Y2gob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSk7XG4gICAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNTYW1lVm5vZGUob2xkRW5kVm5vZGUsIG5ld0VuZFZub2RlKSkge1xuICAgICAgICAgICAgLy8gbGlrZXdpc2UsIGlmIHRoZSBlbmQgbm9kZXMgYXJlIHRoZSBzYW1lIHdlIHBhdGNoIG5ldyBvbnRvIG9sZCBhbmRcbiAgICAgICAgICAgIC8vIGRlY3JlbWVudCBvdXIgZW5kIGluZGljZXMsIGFuZCBhbHNvIGxpa2V3aXNlIGluIHRoaXMgY2FzZSB3ZSBkb24ndFxuICAgICAgICAgICAgLy8gbmVlZCB0byBtb3ZlIGFueSBET00gTm9kZXMuXG4gICAgICAgICAgICBwYXRjaChvbGRFbmRWbm9kZSwgbmV3RW5kVm5vZGUpO1xuICAgICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1NhbWVWbm9kZShvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSkpIHtcbiAgICAgICAgICAgIC8vIGNhc2U6IFwiVm5vZGUgbW92ZWQgcmlnaHRcIlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIFdlJ3ZlIGZvdW5kIHRoYXQgdGhlIGxhc3Qgbm9kZSBpbiBvdXIgd2luZG93IG9uIHRoZSBuZXcgY2hpbGRyZW4gaXNcbiAgICAgICAgICAgIC8vIHRoZSBzYW1lIFZOb2RlIGFzIHRoZSBfZmlyc3RfIG5vZGUgaW4gb3VyIHdpbmRvdyBvbiB0aGUgb2xkIGNoaWxkcmVuXG4gICAgICAgICAgICAvLyB3ZSdyZSBkZWFsaW5nIHdpdGggbm93LiBWaXN1YWxseSwgdGhpcyBpcyB0aGUgbGF5b3V0IG9mIHRoZXNlIHR3b1xuICAgICAgICAgICAgLy8gbm9kZXM6XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gbmV3Q2g6IFsuLi4sIG5ld1N0YXJ0Vm5vZGUgLCAuLi4gLCBuZXdFbmRWbm9kZSAsIC4uLl1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXl5eXl5eXl5eXl5cbiAgICAgICAgICAgIC8vIG9sZENoOiBbLi4uLCBvbGRTdGFydFZub2RlICwgLi4uICwgb2xkRW5kVm5vZGUgLCAuLi5dXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgXl5eXl5eXl5eXl5eXlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIEluIHRoaXMgc2l0dWF0aW9uIHdlIG5lZWQgdG8gcGF0Y2ggYG5ld0VuZFZub2RlYCBvbnRvIGBvbGRTdGFydFZub2RlYFxuICAgICAgICAgICAgLy8gYW5kIG1vdmUgdGhlIERPTSBlbGVtZW50IGZvciBgb2xkU3RhcnRWbm9kZWAuXG4gICAgICAgICAgICBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24gJiYgKG9sZFN0YXJ0Vm5vZGUuJHRhZyQgPT09ICdzbG90JyB8fCBuZXdFbmRWbm9kZS4kdGFnJCA9PT0gJ3Nsb3QnKSkge1xuICAgICAgICAgICAgICAgIHB1dEJhY2tJbk9yaWdpbmFsTG9jYXRpb24ob2xkU3RhcnRWbm9kZS4kZWxtJC5wYXJlbnROb2RlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXRjaChvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSk7XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIG1vdmUgdGhlIGVsZW1lbnQgZm9yIGBvbGRTdGFydFZub2RlYCBpbnRvIGEgcG9zaXRpb24gd2hpY2hcbiAgICAgICAgICAgIC8vIHdpbGwgYmUgYXBwcm9wcmlhdGUgZm9yIGBuZXdFbmRWbm9kZWAuIEZvciB0aGlzIHdlIGNhbiB1c2VcbiAgICAgICAgICAgIC8vIGAuaW5zZXJ0QmVmb3JlYCBhbmQgYG9sZEVuZFZub2RlLiRlbG0kLm5leHRTaWJsaW5nYC4gSWYgdGhlcmUgaXMgYVxuICAgICAgICAgICAgLy8gc2libGluZyBmb3IgYG9sZEVuZFZub2RlLiRlbG0kYCB0aGVuIHdlIHdhbnQgdG8gbW92ZSB0aGUgRE9NIG5vZGUgZm9yXG4gICAgICAgICAgICAvLyBgb2xkU3RhcnRWbm9kZWAgYmV0d2VlbiBgb2xkRW5kVm5vZGVgIGFuZCBpdCdzIHNpYmxpbmcsIGxpa2Ugc286XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPG9sZC1zdGFydC1ub2RlIC8+XG4gICAgICAgICAgICAvLyA8c29tZS1pbnRlcnZlbmluZy1ub2RlIC8+XG4gICAgICAgICAgICAvLyA8b2xkLWVuZC1ub2RlIC8+XG4gICAgICAgICAgICAvLyA8IS0tIC0+ICAgICAgICAgICAgICA8LS0gYG9sZFN0YXJ0Vm5vZGUuJGVsbSRgIHNob3VsZCBiZSBpbnNlcnRlZCBoZXJlXG4gICAgICAgICAgICAvLyA8bmV4dC1zaWJsaW5nIC8+XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gSWYgaW5zdGVhZCBgb2xkRW5kVm5vZGUuJGVsbSRgIGhhcyBubyBzaWJsaW5nIHRoZW4gd2UganVzdCB3YW50IHRvIHB1dFxuICAgICAgICAgICAgLy8gdGhlIG5vZGUgZm9yIGBvbGRTdGFydFZub2RlYCBhdCB0aGUgZW5kIG9mIHRoZSBjaGlsZHJlbiBvZlxuICAgICAgICAgICAgLy8gYHBhcmVudEVsbWAuIEx1Y2tpbHksIGBOb2RlLm5leHRTaWJsaW5nYCB3aWxsIHJldHVybiBgbnVsbGAgaWYgdGhlcmVcbiAgICAgICAgICAgIC8vIGFyZW4ndCBhbnkgc2libGluZ3MsIGFuZCBwYXNzaW5nIGBudWxsYCB0byBgTm9kZS5pbnNlcnRCZWZvcmVgIHdpbGxcbiAgICAgICAgICAgIC8vIGFwcGVuZCBpdCB0byB0aGUgY2hpbGRyZW4gb2YgdGhlIHBhcmVudCBlbGVtZW50LlxuICAgICAgICAgICAgcGFyZW50RWxtLmluc2VydEJlZm9yZShvbGRTdGFydFZub2RlLiRlbG0kLCBvbGRFbmRWbm9kZS4kZWxtJC5uZXh0U2libGluZyk7XG4gICAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1NhbWVWbm9kZShvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgICAgICAgIC8vIGNhc2U6IFwiVm5vZGUgbW92ZWQgbGVmdFwiXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gV2UndmUgZm91bmQgdGhhdCB0aGUgZmlyc3Qgbm9kZSBpbiBvdXIgd2luZG93IG9uIHRoZSBuZXcgY2hpbGRyZW4gaXNcbiAgICAgICAgICAgIC8vIHRoZSBzYW1lIFZOb2RlIGFzIHRoZSBfbGFzdF8gbm9kZSBpbiBvdXIgd2luZG93IG9uIHRoZSBvbGQgY2hpbGRyZW4uXG4gICAgICAgICAgICAvLyBWaXN1YWxseSwgdGhpcyBpcyB0aGUgbGF5b3V0IG9mIHRoZXNlIHR3byBub2RlczpcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBuZXdDaDogWy4uLiwgbmV3U3RhcnRWbm9kZSAsIC4uLiAsIG5ld0VuZFZub2RlICwgLi4uXVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgIF5eXl5eXl5eXl5eXl5cbiAgICAgICAgICAgIC8vIG9sZENoOiBbLi4uLCBvbGRTdGFydFZub2RlICwgLi4uICwgb2xkRW5kVm5vZGUgLCAuLi5dXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF5eXl5eXl5eXl5eXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gSW4gdGhpcyBzaXR1YXRpb24gd2UgbmVlZCB0byBwYXRjaCBgbmV3U3RhcnRWbm9kZWAgb250byBgb2xkRW5kVm5vZGVgXG4gICAgICAgICAgICAvLyAod2hpY2ggd2lsbCBoYW5kbGUgdXBkYXRpbmcgYW55IGNoYW5nZWQgYXR0cmlidXRlcywgcmVjb25jaWxpbmcgdGhlaXJcbiAgICAgICAgICAgIC8vIGNoaWxkcmVuIGV0YykgYnV0IHdlIGFsc28gbmVlZCB0byBtb3ZlIHRoZSBET00gbm9kZSB0byB3aGljaFxuICAgICAgICAgICAgLy8gYG9sZEVuZFZub2RlYCBjb3JyZXNwb25kcy5cbiAgICAgICAgICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiAob2xkU3RhcnRWbm9kZS4kdGFnJCA9PT0gJ3Nsb3QnIHx8IG5ld0VuZFZub2RlLiR0YWckID09PSAnc2xvdCcpKSB7XG4gICAgICAgICAgICAgICAgcHV0QmFja0luT3JpZ2luYWxMb2NhdGlvbihvbGRFbmRWbm9kZS4kZWxtJC5wYXJlbnROb2RlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXRjaChvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSk7XG4gICAgICAgICAgICAvLyBXZSd2ZSBhbHJlYWR5IGNoZWNrZWQgYWJvdmUgaWYgYG9sZFN0YXJ0Vm5vZGVgIGFuZCBgbmV3U3RhcnRWbm9kZWAgYXJlXG4gICAgICAgICAgICAvLyB0aGUgc2FtZSBub2RlLCBzbyBzaW5jZSB3ZSdyZSBoZXJlIHdlIGtub3cgdGhhdCB0aGV5IGFyZSBub3QuIFRodXMgd2VcbiAgICAgICAgICAgIC8vIGNhbiBtb3ZlIHRoZSBlbGVtZW50IGZvciBgb2xkRW5kVm5vZGVgIF9iZWZvcmVfIHRoZSBlbGVtZW50IGZvclxuICAgICAgICAgICAgLy8gYG9sZFN0YXJ0Vm5vZGVgLCBsZWF2aW5nIGBvbGRTdGFydFZub2RlYCB0byBiZSByZWNvbmNpbGVkIGluIHRoZVxuICAgICAgICAgICAgLy8gZnV0dXJlLlxuICAgICAgICAgICAgcGFyZW50RWxtLmluc2VydEJlZm9yZShvbGRFbmRWbm9kZS4kZWxtJCwgb2xkU3RhcnRWbm9kZS4kZWxtJCk7XG4gICAgICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEhlcmUgd2UgZG8gc29tZSBjaGVja3MgdG8gbWF0Y2ggdXAgb2xkIGFuZCBuZXcgbm9kZXMgYmFzZWQgb24gdGhlXG4gICAgICAgICAgICAvLyBgJGtleSRgIGF0dHJpYnV0ZSwgd2hpY2ggaXMgc2V0IGJ5IHB1dHRpbmcgYSBga2V5PVwibXkta2V5XCJgIGF0dHJpYnV0ZVxuICAgICAgICAgICAgLy8gaW4gdGhlIEpTWCBmb3IgYSBET00gZWxlbWVudCBpbiB0aGUgaW1wbGVtZW50YXRpb24gb2YgYSBTdGVuY2lsXG4gICAgICAgICAgICAvLyBjb21wb25lbnQuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgdG8gc2VlIGlmIHRoZXJlIGFyZSBhbnkgbm9kZXMgaW4gdGhlIGFycmF5IG9mIG9sZFxuICAgICAgICAgICAgLy8gY2hpbGRyZW4gd2hpY2ggaGF2ZSB0aGUgc2FtZSBrZXkgYXMgdGhlIGZpcnN0IG5vZGUgaW4gdGhlIG5ld1xuICAgICAgICAgICAgLy8gY2hpbGRyZW4uXG4gICAgICAgICAgICBpZHhJbk9sZCA9IC0xO1xuICAgICAgICAgICAgaWYgKEJVSUxELnZkb21LZXkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBvbGRTdGFydElkeDsgaSA8PSBvbGRFbmRJZHg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2xkQ2hbaV0gJiYgb2xkQ2hbaV0uJGtleSQgIT09IG51bGwgJiYgb2xkQ2hbaV0uJGtleSQgPT09IG5ld1N0YXJ0Vm5vZGUuJGtleSQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeEluT2xkID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELnZkb21LZXkgJiYgaWR4SW5PbGQgPj0gMCkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGZvdW5kIGEgbm9kZSBpbiB0aGUgb2xkIGNoaWxkcmVuIHdoaWNoIG1hdGNoZXMgdXAgd2l0aCB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgICAvLyBub2RlIGluIHRoZSBuZXcgY2hpbGRyZW4hIFNvIGxldCdzIGRlYWwgd2l0aCB0aGF0XG4gICAgICAgICAgICAgICAgZWxtVG9Nb3ZlID0gb2xkQ2hbaWR4SW5PbGRdO1xuICAgICAgICAgICAgICAgIGlmIChlbG1Ub01vdmUuJHRhZyQgIT09IG5ld1N0YXJ0Vm5vZGUuJHRhZyQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHRhZyBkb2Vzbid0IG1hdGNoIHNvIHdlJ2xsIG5lZWQgYSBuZXcgRE9NIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGNyZWF0ZUVsbShvbGRDaCAmJiBvbGRDaFtuZXdTdGFydElkeF0sIG5ld1ZOb2RlLCBpZHhJbk9sZCwgcGFyZW50RWxtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoKGVsbVRvTW92ZSwgbmV3U3RhcnRWbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGludmFsaWRhdGUgdGhlIG1hdGNoaW5nIG9sZCBub2RlIHNvIHRoYXQgd2Ugd29uJ3QgdHJ5IHRvIHVwZGF0ZSBpdFxuICAgICAgICAgICAgICAgICAgICAvLyBhZ2FpbiBsYXRlciBvblxuICAgICAgICAgICAgICAgICAgICBvbGRDaFtpZHhJbk9sZF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBlbG1Ub01vdmUuJGVsbSQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFdlIGVpdGhlciBkaWRuJ3QgZmluZCBhbiBlbGVtZW50IGluIHRoZSBvbGQgY2hpbGRyZW4gdGhhdCBtYXRjaGVzXG4gICAgICAgICAgICAgICAgLy8gdGhlIGtleSBvZiB0aGUgZmlyc3QgbmV3IGNoaWxkIE9SIHRoZSBidWlsZCBpcyBub3QgdXNpbmcgYGtleWBcbiAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGVzIGF0IGFsbC4gSW4gZWl0aGVyIGNhc2Ugd2UgbmVlZCB0byBjcmVhdGUgYSBuZXcgZWxlbWVudFxuICAgICAgICAgICAgICAgIC8vIGZvciB0aGUgbmV3IG5vZGUuXG4gICAgICAgICAgICAgICAgbm9kZSA9IGNyZWF0ZUVsbShvbGRDaCAmJiBvbGRDaFtuZXdTdGFydElkeF0sIG5ld1ZOb2RlLCBuZXdTdGFydElkeCwgcGFyZW50RWxtKTtcbiAgICAgICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGNyZWF0ZWQgYSBuZXcgbm9kZSB0aGVuIGhhbmRsZSBpbnNlcnRpbmcgaXQgdG8gdGhlIERPTVxuICAgICAgICAgICAgICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRSZWZlcmVuY2VOb2RlKG9sZFN0YXJ0Vm5vZGUuJGVsbSQpLmluc2VydEJlZm9yZShub2RlLCByZWZlcmVuY2VOb2RlKG9sZFN0YXJ0Vm5vZGUuJGVsbSQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9sZFN0YXJ0Vm5vZGUuJGVsbSQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgb2xkU3RhcnRWbm9kZS4kZWxtJCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvbGRTdGFydElkeCA+IG9sZEVuZElkeCkge1xuICAgICAgICAvLyB3ZSBoYXZlIHNvbWUgbW9yZSBuZXcgbm9kZXMgdG8gYWRkIHdoaWNoIGRvbid0IG1hdGNoIHVwIHdpdGggb2xkIG5vZGVzXG4gICAgICAgIGFkZFZub2RlcyhwYXJlbnRFbG0sIG5ld0NoW25ld0VuZElkeCArIDFdID09IG51bGwgPyBudWxsIDogbmV3Q2hbbmV3RW5kSWR4ICsgMV0uJGVsbSQsIG5ld1ZOb2RlLCBuZXdDaCwgbmV3U3RhcnRJZHgsIG5ld0VuZElkeCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKEJVSUxELnVwZGF0YWJsZSAmJiBuZXdTdGFydElkeCA+IG5ld0VuZElkeCkge1xuICAgICAgICAvLyB0aGVyZSBhcmUgbm9kZXMgaW4gdGhlIGBvbGRDaGAgYXJyYXkgd2hpY2ggbm8gbG9uZ2VyIGNvcnJlc3BvbmQgdG8gbm9kZXNcbiAgICAgICAgLy8gaW4gdGhlIG5ldyBhcnJheSwgc28gbGV0cyByZW1vdmUgdGhlbSAod2hpY2ggZW50YWlscyBjbGVhbmluZyB1cCB0aGVcbiAgICAgICAgLy8gcmVsZXZhbnQgRE9NIG5vZGVzKVxuICAgICAgICByZW1vdmVWbm9kZXMob2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpO1xuICAgIH1cbn07XG4vKipcbiAqIENvbXBhcmUgdHdvIFZOb2RlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgdGhlIHNhbWVcbiAqXG4gKiAqKk5CKio6IFRoaXMgZnVuY3Rpb24gaXMgYW4gZXF1YWxpdHkgX2hldXJpc3RpY18gYmFzZWQgb24gdGhlIGF2YWlsYWJsZVxuICogaW5mb3JtYXRpb24gc2V0IG9uIHRoZSB0d28gVk5vZGVzIGFuZCBjYW4gYmUgbWlzbGVhZGluZyB1bmRlciBjZXJ0YWluXG4gKiBjaXJjdW1zdGFuY2VzLiBJbiBwYXJ0aWN1bGFyLCBpZiB0aGUgdHdvIG5vZGVzIGRvIG5vdCBoYXZlIGBrZXlgIGF0dHJzXG4gKiAoYXZhaWxhYmxlIHVuZGVyIGAka2V5JGAgb24gVk5vZGVzKSB0aGVuIHRoZSBmdW5jdGlvbiBmYWxscyBiYWNrIG9uIG1lcmVseVxuICogY2hlY2tpbmcgdGhhdCB0aGV5IGhhdmUgdGhlIHNhbWUgdGFnLlxuICpcbiAqIFNvLCBpbiBvdGhlciB3b3JkcywgaWYgYGtleWAgYXR0cnMgYXJlIG5vdCBzZXQgb24gVk5vZGVzIHdoaWNoIG1heSBiZVxuICogY2hhbmdpbmcgb3JkZXIgd2l0aGluIGEgYGNoaWxkcmVuYCBhcnJheSBvciBzb21ldGhpbmcgYWxvbmcgdGhvc2UgbGluZXMgdGhlblxuICogd2UgY291bGQgb2J0YWluIGEgZmFsc2UgbmVnYXRpdmUgYW5kIHRoZW4gaGF2ZSB0byBkbyBuZWVkbGVzcyByZS1yZW5kZXJpbmdcbiAqIChpLmUuIHdlJ2Qgc2F5IHR3byBWTm9kZXMgYXJlbid0IGVxdWFsIHdoZW4gaW4gZmFjdCB0aGV5IHNob3VsZCBiZSkuXG4gKlxuICogQHBhcmFtIGxlZnRWTm9kZSB0aGUgZmlyc3QgVk5vZGUgdG8gY2hlY2tcbiAqIEBwYXJhbSByaWdodFZOb2RlIHRoZSBzZWNvbmQgVk5vZGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhleSdyZSBlcXVhbCBvciBub3RcbiAqL1xuY29uc3QgaXNTYW1lVm5vZGUgPSAobGVmdFZOb2RlLCByaWdodFZOb2RlKSA9PiB7XG4gICAgLy8gY29tcGFyZSBpZiB0d28gdm5vZGUgdG8gc2VlIGlmIHRoZXkncmUgXCJ0ZWNobmljYWxseVwiIHRoZSBzYW1lXG4gICAgLy8gbmVlZCB0byBoYXZlIHRoZSBzYW1lIGVsZW1lbnQgdGFnLCBhbmQgc2FtZSBrZXkgdG8gYmUgdGhlIHNhbWVcbiAgICBpZiAobGVmdFZOb2RlLiR0YWckID09PSByaWdodFZOb2RlLiR0YWckKSB7XG4gICAgICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiBsZWZ0Vk5vZGUuJHRhZyQgPT09ICdzbG90Jykge1xuICAgICAgICAgICAgcmV0dXJuIGxlZnRWTm9kZS4kbmFtZSQgPT09IHJpZ2h0Vk5vZGUuJG5hbWUkO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMgd2lsbCBiZSBzZXQgaWYgY29tcG9uZW50cyBpbiB0aGUgYnVpbGQgaGF2ZSBga2V5YCBhdHRycyBzZXQgb24gdGhlbVxuICAgICAgICBpZiAoQlVJTEQudmRvbUtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGxlZnRWTm9kZS4ka2V5JCA9PT0gcmlnaHRWTm9kZS4ka2V5JDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmNvbnN0IHJlZmVyZW5jZU5vZGUgPSAobm9kZSkgPT4ge1xuICAgIC8vIHRoaXMgbm9kZSB3YXMgcmVsb2NhdGVkIHRvIGEgbmV3IGxvY2F0aW9uIGluIHRoZSBkb21cbiAgICAvLyBiZWNhdXNlIG9mIHNvbWUgb3RoZXIgY29tcG9uZW50J3Mgc2xvdFxuICAgIC8vIGJ1dCB3ZSBzdGlsbCBoYXZlIGFuIGh0bWwgY29tbWVudCBpbiBwbGFjZSBvZiB3aGVyZVxuICAgIC8vIGl0J3Mgb3JpZ2luYWwgbG9jYXRpb24gd2FzIGFjY29yZGluZyB0byBpdCdzIG9yaWdpbmFsIHZkb21cbiAgICByZXR1cm4gKG5vZGUgJiYgbm9kZVsncy1vbCddKSB8fCBub2RlO1xufTtcbmNvbnN0IHBhcmVudFJlZmVyZW5jZU5vZGUgPSAobm9kZSkgPT4gKG5vZGVbJ3Mtb2wnXSA/IG5vZGVbJ3Mtb2wnXSA6IG5vZGUpLnBhcmVudE5vZGU7XG4vKipcbiAqIEhhbmRsZSByZWNvbmNpbGluZyBhbiBvdXRkYXRlZCBWTm9kZSB3aXRoIGEgbmV3IG9uZSB3aGljaCBjb3JyZXNwb25kcyB0b1xuICogaXQuIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyBmbHVzaGluZyB1cGRhdGVzIHRvIHRoZSBET00gYW5kIHJlY29uY2lsaW5nIHRoZVxuICogY2hpbGRyZW4gb2YgdGhlIHR3byBub2RlcyAoaWYgYW55KS5cbiAqXG4gKiBAcGFyYW0gb2xkVk5vZGUgYW4gb2xkIFZOb2RlIHdob3NlIERPTSBlbGVtZW50IGFuZCBjaGlsZHJlbiB3ZSB3YW50IHRvIHVwZGF0ZVxuICogQHBhcmFtIG5ld1ZOb2RlIGEgbmV3IFZOb2RlIHJlcHJlc2VudGluZyBhbiB1cGRhdGVkIHZlcnNpb24gb2YgdGhlIG9sZCBvbmVcbiAqL1xuY29uc3QgcGF0Y2ggPSAob2xkVk5vZGUsIG5ld1ZOb2RlKSA9PiB7XG4gICAgY29uc3QgZWxtID0gKG5ld1ZOb2RlLiRlbG0kID0gb2xkVk5vZGUuJGVsbSQpO1xuICAgIGNvbnN0IG9sZENoaWxkcmVuID0gb2xkVk5vZGUuJGNoaWxkcmVuJDtcbiAgICBjb25zdCBuZXdDaGlsZHJlbiA9IG5ld1ZOb2RlLiRjaGlsZHJlbiQ7XG4gICAgY29uc3QgdGFnID0gbmV3Vk5vZGUuJHRhZyQ7XG4gICAgY29uc3QgdGV4dCA9IG5ld1ZOb2RlLiR0ZXh0JDtcbiAgICBsZXQgZGVmYXVsdEhvbGRlcjtcbiAgICBpZiAoIUJVSUxELnZkb21UZXh0IHx8IHRleHQgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKEJVSUxELnN2Zykge1xuICAgICAgICAgICAgLy8gdGVzdCBpZiB3ZSdyZSByZW5kZXJpbmcgYW4gc3ZnIGVsZW1lbnQsIG9yIHN0aWxsIHJlbmRlcmluZyBub2RlcyBpbnNpZGUgb2Ygb25lXG4gICAgICAgICAgICAvLyBvbmx5IGFkZCB0aGlzIHRvIHRoZSB3aGVuIHRoZSBjb21waWxlciBzZWVzIHdlJ3JlIHVzaW5nIGFuIHN2ZyBzb21ld2hlcmVcbiAgICAgICAgICAgIGlzU3ZnTW9kZSA9IHRhZyA9PT0gJ3N2ZycgPyB0cnVlIDogdGFnID09PSAnZm9yZWlnbk9iamVjdCcgPyBmYWxzZSA6IGlzU3ZnTW9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQlVJTEQudmRvbUF0dHJpYnV0ZSB8fCBCVUlMRC5yZWZsZWN0KSB7XG4gICAgICAgICAgICBpZiAoQlVJTEQuc2xvdCAmJiB0YWcgPT09ICdzbG90JylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBlaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgcmVuZGVyIG9mIGFuIGVsZW1lbnQgT1IgaXQncyBhbiB1cGRhdGVcbiAgICAgICAgICAgICAgICAvLyBBTkQgd2UgYWxyZWFkeSBrbm93IGl0J3MgcG9zc2libGUgaXQgY291bGQgaGF2ZSBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgLy8gdGhpcyB1cGRhdGVzIHRoZSBlbGVtZW50J3MgY3NzIGNsYXNzZXMsIGF0dHJzLCBwcm9wcywgbGlzdGVuZXJzLCBldGMuXG4gICAgICAgICAgICAgICAgdXBkYXRlRWxlbWVudChvbGRWTm9kZSwgbmV3Vk5vZGUsIGlzU3ZnTW9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJVSUxELnVwZGF0YWJsZSAmJiBvbGRDaGlsZHJlbiAhPT0gbnVsbCAmJiBuZXdDaGlsZHJlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gbG9va3MgbGlrZSB0aGVyZSdzIGNoaWxkIHZub2RlcyBmb3IgYm90aCB0aGUgb2xkIGFuZCBuZXcgdm5vZGVzXG4gICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIGNhbGwgYHVwZGF0ZUNoaWxkcmVuYCB0byByZWNvbmNpbGUgdGhlbVxuICAgICAgICAgICAgdXBkYXRlQ2hpbGRyZW4oZWxtLCBvbGRDaGlsZHJlbiwgbmV3Vk5vZGUsIG5ld0NoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdDaGlsZHJlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gbm8gb2xkIGNoaWxkIHZub2RlcywgYnV0IHRoZXJlIGFyZSBuZXcgY2hpbGQgdm5vZGVzIHRvIGFkZFxuICAgICAgICAgICAgaWYgKEJVSUxELnVwZGF0YWJsZSAmJiBCVUlMRC52ZG9tVGV4dCAmJiBvbGRWTm9kZS4kdGV4dCQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgb2xkIHZub2RlIHdhcyB0ZXh0LCBzbyBiZSBzdXJlIHRvIGNsZWFyIGl0IG91dFxuICAgICAgICAgICAgICAgIGVsbS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYWRkIHRoZSBuZXcgdm5vZGUgY2hpbGRyZW5cbiAgICAgICAgICAgIGFkZFZub2RlcyhlbG0sIG51bGwsIG5ld1ZOb2RlLCBuZXdDaGlsZHJlbiwgMCwgbmV3Q2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQlVJTEQudXBkYXRhYmxlICYmIG9sZENoaWxkcmVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBubyBuZXcgY2hpbGQgdm5vZGVzLCBidXQgdGhlcmUgYXJlIG9sZCBjaGlsZCB2bm9kZXMgdG8gcmVtb3ZlXG4gICAgICAgICAgICByZW1vdmVWbm9kZXMob2xkQ2hpbGRyZW4sIDAsIG9sZENoaWxkcmVuLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5zdmcgJiYgaXNTdmdNb2RlICYmIHRhZyA9PT0gJ3N2ZycpIHtcbiAgICAgICAgICAgIGlzU3ZnTW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKEJVSUxELnZkb21UZXh0ICYmIEJVSUxELnNsb3RSZWxvY2F0aW9uICYmIChkZWZhdWx0SG9sZGVyID0gZWxtWydzLWNyJ10pKSB7XG4gICAgICAgIC8vIHRoaXMgZWxlbWVudCBoYXMgc2xvdHRlZCBjb250ZW50XG4gICAgICAgIGRlZmF1bHRIb2xkZXIucGFyZW50Tm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKEJVSUxELnZkb21UZXh0ICYmIG9sZFZOb2RlLiR0ZXh0JCAhPT0gdGV4dCkge1xuICAgICAgICAvLyB1cGRhdGUgdGhlIHRleHQgY29udGVudCBmb3IgdGhlIHRleHQgb25seSB2bm9kZVxuICAgICAgICAvLyBhbmQgYWxzbyBvbmx5IGlmIHRoZSB0ZXh0IGlzIGRpZmZlcmVudCB0aGFuIGJlZm9yZVxuICAgICAgICBlbG0uZGF0YSA9IHRleHQ7XG4gICAgfVxufTtcbmNvbnN0IHVwZGF0ZUZhbGxiYWNrU2xvdFZpc2liaWxpdHkgPSAoZWxtKSA9PiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItY29uc3RcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gZWxtLmNoaWxkTm9kZXM7XG4gICAgbGV0IGNoaWxkTm9kZTtcbiAgICBsZXQgaTtcbiAgICBsZXQgaWxlbjtcbiAgICBsZXQgajtcbiAgICBsZXQgc2xvdE5hbWVBdHRyO1xuICAgIGxldCBub2RlVHlwZTtcbiAgICBmb3IgKGkgPSAwLCBpbGVuID0gY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBpbGVuOyBpKyspIHtcbiAgICAgICAgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgaWYgKGNoaWxkTm9kZS5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVbJ3Mtc3InXSkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgYSBzbG90IGZhbGxiYWNrIG5vZGVcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIHNsb3QgbmFtZSBmb3IgdGhpcyBzbG90IHJlZmVyZW5jZSBub2RlXG4gICAgICAgICAgICAgICAgc2xvdE5hbWVBdHRyID0gY2hpbGROb2RlWydzLXNuJ107XG4gICAgICAgICAgICAgICAgLy8gYnkgZGVmYXVsdCBhbHdheXMgc2hvdyBhIGZhbGxiYWNrIHNsb3Qgbm9kZVxuICAgICAgICAgICAgICAgIC8vIHRoZW4gaGlkZSBpdCBpZiB0aGVyZSBhcmUgb3RoZXIgc2xvdHMgaW4gdGhlIGxpZ2h0IGRvbVxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZS5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaWxlbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVUeXBlID0gY2hpbGROb2Rlc1tqXS5ub2RlVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXNbal1bJ3MtaG4nXSAhPT0gY2hpbGROb2RlWydzLWhuJ10gfHwgc2xvdE5hbWVBdHRyICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBzaWJsaW5nIG5vZGUgaXMgZnJvbSBhIGRpZmZlcmVudCBjb21wb25lbnQgT1IgaXMgYSBuYW1lZCBmYWxsYmFjayBzbG90IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8gJiYgc2xvdE5hbWVBdHRyID09PSBjaGlsZE5vZGVzW2pdLmdldEF0dHJpYnV0ZSgnc2xvdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlLmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGEgZGVmYXVsdCBmYWxsYmFjayBzbG90IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFueSBlbGVtZW50IG9yIHRleHQgbm9kZSAod2l0aCBjb250ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvdWxkIGhpZGUgdGhlIGRlZmF1bHQgZmFsbGJhY2sgc2xvdCBub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZVR5cGUgPT09IDEgLyogTk9ERV9UWVBFLkVsZW1lbnROb2RlICovIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5vZGVUeXBlID09PSAzIC8qIE5PREVfVFlQRS5UZXh0Tm9kZSAqLyAmJiBjaGlsZE5vZGVzW2pdLnRleHRDb250ZW50LnRyaW0oKSAhPT0gJycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlLmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBrZWVwIGRyaWxsaW5nIGRvd25cbiAgICAgICAgICAgIHVwZGF0ZUZhbGxiYWNrU2xvdFZpc2liaWxpdHkoY2hpbGROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCByZWxvY2F0ZU5vZGVzID0gW107XG5jb25zdCByZWxvY2F0ZVNsb3RDb250ZW50ID0gKGVsbSkgPT4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWNvbnN0XG4gICAgbGV0IGNoaWxkTm9kZTtcbiAgICBsZXQgbm9kZTtcbiAgICBsZXQgaG9zdENvbnRlbnROb2RlcztcbiAgICBsZXQgc2xvdE5hbWVBdHRyO1xuICAgIGxldCByZWxvY2F0ZU5vZGVEYXRhO1xuICAgIGxldCBqO1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gZWxtLmNoaWxkTm9kZXM7XG4gICAgY29uc3QgaWxlbiA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuICAgIGZvciAoOyBpIDwgaWxlbjsgaSsrKSB7XG4gICAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaV07XG4gICAgICAgIGlmIChjaGlsZE5vZGVbJ3Mtc3InXSAmJiAobm9kZSA9IGNoaWxkTm9kZVsncy1jciddKSAmJiBub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIC8vIGZpcnN0IGdvdCB0aGUgY29udGVudCByZWZlcmVuY2UgY29tbWVudCBub2RlXG4gICAgICAgICAgICAvLyB0aGVuIHdlIGdvdCBpdCdzIHBhcmVudCwgd2hpY2ggaXMgd2hlcmUgYWxsIHRoZSBob3N0IGNvbnRlbnQgaXMgaW4gbm93XG4gICAgICAgICAgICBob3N0Q29udGVudE5vZGVzID0gbm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICBzbG90TmFtZUF0dHIgPSBjaGlsZE5vZGVbJ3Mtc24nXTtcbiAgICAgICAgICAgIGZvciAoaiA9IGhvc3RDb250ZW50Tm9kZXMubGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICBub2RlID0gaG9zdENvbnRlbnROb2Rlc1tqXTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGVbJ3MtY24nXSAmJiAhbm9kZVsncy1uciddICYmIG5vZGVbJ3MtaG4nXSAhPT0gY2hpbGROb2RlWydzLWhuJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0J3MgZG8gc29tZSByZWxvY2F0aW5nIHRvIGl0cyBuZXcgaG9tZVxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgbmV2ZXIgcmVsb2NhdGUgYSBjb250ZW50IHJlZmVyZW5jZSBub2RlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoYXQgaXMgc3VwcG9zZSB0byBhbHdheXMgcmVwcmVzZW50IHRoZSBvcmlnaW5hbCBjb250ZW50IGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05vZGVMb2NhdGVkSW5TbG90KG5vZGUsIHNsb3ROYW1lQXR0cikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0J3MgcG9zc2libGUgd2UndmUgYWxyZWFkeSBkZWNpZGVkIHRvIHJlbG9jYXRlIHRoaXMgbm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2NhdGVOb2RlRGF0YSA9IHJlbG9jYXRlTm9kZXMuZmluZCgocikgPT4gci4kbm9kZVRvUmVsb2NhdGUkID09PSBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hZGUgc29tZSBjaGFuZ2VzIHRvIHNsb3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQncyBtYWtlIHN1cmUgd2UgYWxzbyBkb3VibGUgY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrcyBhcmUgY29ycmVjdGx5IGhpZGRlbiBvciBzaG93blxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tTbG90RmFsbGJhY2tWaXNpYmlsaXR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbJ3Mtc24nXSA9IG5vZGVbJ3Mtc24nXSB8fCBzbG90TmFtZUF0dHI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVsb2NhdGVOb2RlRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzbHkgd2UgbmV2ZXIgZm91bmQgYSBzbG90IGhvbWUgZm9yIHRoaXMgbm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1dCB0dXJucyBvdXQgd2UgZGlkLCBzbyBsZXQncyByZW1lbWJlciBpdCBub3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxvY2F0ZU5vZGVEYXRhLiRzbG90UmVmTm9kZSQgPSBjaGlsZE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdG8gb3VyIGxpc3Qgb2Ygbm9kZXMgdG8gcmVsb2NhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxvY2F0ZU5vZGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2xvdFJlZk5vZGUkOiBjaGlsZE5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRub2RlVG9SZWxvY2F0ZSQ6IG5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZVsncy1zciddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2NhdGVOb2Rlcy5tYXAoKHJlbG9jYXRlTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOb2RlTG9jYXRlZEluU2xvdChyZWxvY2F0ZU5vZGUuJG5vZGVUb1JlbG9jYXRlJCwgbm9kZVsncy1zbiddKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2NhdGVOb2RlRGF0YSA9IHJlbG9jYXRlTm9kZXMuZmluZCgocikgPT4gci4kbm9kZVRvUmVsb2NhdGUkID09PSBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWxvY2F0ZU5vZGVEYXRhICYmICFyZWxvY2F0ZU5vZGUuJHNsb3RSZWZOb2RlJCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbG9jYXRlTm9kZS4kc2xvdFJlZk5vZGUkID0gcmVsb2NhdGVOb2RlRGF0YS4kc2xvdFJlZk5vZGUkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIXJlbG9jYXRlTm9kZXMuc29tZSgocikgPT4gci4kbm9kZVRvUmVsb2NhdGUkID09PSBub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gZmFyIHRoaXMgZWxlbWVudCBkb2VzIG5vdCBoYXZlIGEgc2xvdCBob21lLCBub3Qgc2V0dGluZyBzbG90UmVmTm9kZSBvbiBwdXJwb3NlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB3ZSBuZXZlciBmaW5kIGEgaG9tZSBmb3IgdGhpcyBlbGVtZW50IHRoZW4gd2UnbGwgbmVlZCB0byBoaWRlIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxvY2F0ZU5vZGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRub2RlVG9SZWxvY2F0ZSQ6IG5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGROb2RlLm5vZGVUeXBlID09PSAxIC8qIE5PREVfVFlQRS5FbGVtZW50Tm9kZSAqLykge1xuICAgICAgICAgICAgcmVsb2NhdGVTbG90Q29udGVudChjaGlsZE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IGlzTm9kZUxvY2F0ZWRJblNsb3QgPSAobm9kZVRvUmVsb2NhdGUsIHNsb3ROYW1lQXR0cikgPT4ge1xuICAgIGlmIChub2RlVG9SZWxvY2F0ZS5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgaWYgKG5vZGVUb1JlbG9jYXRlLmdldEF0dHJpYnV0ZSgnc2xvdCcpID09PSBudWxsICYmIHNsb3ROYW1lQXR0ciA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlVG9SZWxvY2F0ZS5nZXRBdHRyaWJ1dGUoJ3Nsb3QnKSA9PT0gc2xvdE5hbWVBdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChub2RlVG9SZWxvY2F0ZVsncy1zbiddID09PSBzbG90TmFtZUF0dHIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBzbG90TmFtZUF0dHIgPT09ICcnO1xufTtcbmNvbnN0IGNhbGxOb2RlUmVmcyA9ICh2Tm9kZSkgPT4ge1xuICAgIGlmIChCVUlMRC52ZG9tUmVmKSB7XG4gICAgICAgIHZOb2RlLiRhdHRycyQgJiYgdk5vZGUuJGF0dHJzJC5yZWYgJiYgdk5vZGUuJGF0dHJzJC5yZWYobnVsbCk7XG4gICAgICAgIHZOb2RlLiRjaGlsZHJlbiQgJiYgdk5vZGUuJGNoaWxkcmVuJC5tYXAoY2FsbE5vZGVSZWZzKTtcbiAgICB9XG59O1xuLyoqXG4gKiBUaGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgU3RlbmNpbCdzIHZpcnR1YWwgRE9NLWJhc2VkIHJlbmRlcmluZyBlbmdpbmVcbiAqXG4gKiBHaXZlbiBhIHtAbGluayBkLkhvc3RSZWZ9IGNvbnRhaW5lciBhbmQgc29tZSB2aXJ0dWFsIERPTSBub2RlcywgdGhpc1xuICogZnVuY3Rpb24gd2lsbCBoYW5kbGUgY3JlYXRpbmcgYSB2aXJ0dWFsIERPTSB0cmVlIHdpdGggYSBzaW5nbGUgcm9vdCwgcGF0Y2hpbmdcbiAqIHRoZSBjdXJyZW50IHZpcnR1YWwgRE9NIHRyZWUgb250byBhbiBvbGQgb25lIChpZiBhbnkpLCBkZWFsaW5nIHdpdGggc2xvdFxuICogcmVsb2NhdGlvbiwgYW5kIHJlZmxlY3RpbmcgYXR0cmlidXRlcy5cbiAqXG4gKiBAcGFyYW0gaG9zdFJlZiBkYXRhIG5lZWRlZCB0byByb290IGFuZCByZW5kZXIgdGhlIHZpcnR1YWwgRE9NIHRyZWUsIHN1Y2ggYXNcbiAqIHRoZSBET00gbm9kZSBpbnRvIHdoaWNoIGl0IHNob3VsZCBiZSByZW5kZXJlZC5cbiAqIEBwYXJhbSByZW5kZXJGblJlc3VsdHMgdGhlIHZpcnR1YWwgRE9NIG5vZGVzIHRvIGJlIHJlbmRlcmVkXG4gKi9cbmNvbnN0IHJlbmRlclZkb20gPSAoaG9zdFJlZiwgcmVuZGVyRm5SZXN1bHRzKSA9PiB7XG4gICAgY29uc3QgaG9zdEVsbSA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgICBjb25zdCBjbXBNZXRhID0gaG9zdFJlZi4kY21wTWV0YSQ7XG4gICAgY29uc3Qgb2xkVk5vZGUgPSBob3N0UmVmLiR2bm9kZSQgfHwgbmV3Vk5vZGUobnVsbCwgbnVsbCk7XG4gICAgY29uc3Qgcm9vdFZub2RlID0gaXNIb3N0KHJlbmRlckZuUmVzdWx0cykgPyByZW5kZXJGblJlc3VsdHMgOiBoKG51bGwsIG51bGwsIHJlbmRlckZuUmVzdWx0cyk7XG4gICAgaG9zdFRhZ05hbWUgPSBob3N0RWxtLnRhZ05hbWU7XG4gICAgLy8gPEhvc3Q+IHJ1bnRpbWUgY2hlY2tcbiAgICBpZiAoQlVJTEQuaXNEZXYgJiYgQXJyYXkuaXNBcnJheShyZW5kZXJGblJlc3VsdHMpICYmIHJlbmRlckZuUmVzdWx0cy5zb21lKGlzSG9zdCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgPEhvc3Q+IG11c3QgYmUgdGhlIHNpbmdsZSByb290IGNvbXBvbmVudC5cbkxvb2tzIGxpa2UgdGhlIHJlbmRlcigpIGZ1bmN0aW9uIG9mIFwiJHtob3N0VGFnTmFtZS50b0xvd2VyQ2FzZSgpfVwiIGlzIHJldHVybmluZyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSA8SG9zdD4uXG5cblRoZSByZW5kZXIoKSBmdW5jdGlvbiBzaG91bGQgbG9vayBsaWtlIHRoaXMgaW5zdGVhZDpcblxucmVuZGVyKCkge1xuICAvLyBEbyBub3QgcmV0dXJuIGFuIGFycmF5XG4gIHJldHVybiAoXG4gICAgPEhvc3Q+e2NvbnRlbnR9PC9Ib3N0PlxuICApO1xufVxuICBgKTtcbiAgICB9XG4gICAgaWYgKEJVSUxELnJlZmxlY3QgJiYgY21wTWV0YS4kYXR0cnNUb1JlZmxlY3QkKSB7XG4gICAgICAgIHJvb3RWbm9kZS4kYXR0cnMkID0gcm9vdFZub2RlLiRhdHRycyQgfHwge307XG4gICAgICAgIGNtcE1ldGEuJGF0dHJzVG9SZWZsZWN0JC5tYXAoKFtwcm9wTmFtZSwgYXR0cmlidXRlXSkgPT4gKHJvb3RWbm9kZS4kYXR0cnMkW2F0dHJpYnV0ZV0gPSBob3N0RWxtW3Byb3BOYW1lXSkpO1xuICAgIH1cbiAgICByb290Vm5vZGUuJHRhZyQgPSBudWxsO1xuICAgIHJvb3RWbm9kZS4kZmxhZ3MkIHw9IDQgLyogVk5PREVfRkxBR1MuaXNIb3N0ICovO1xuICAgIGhvc3RSZWYuJHZub2RlJCA9IHJvb3RWbm9kZTtcbiAgICByb290Vm5vZGUuJGVsbSQgPSBvbGRWTm9kZS4kZWxtJCA9IChCVUlMRC5zaGFkb3dEb20gPyBob3N0RWxtLnNoYWRvd1Jvb3QgfHwgaG9zdEVsbSA6IGhvc3RFbG0pO1xuICAgIGlmIChCVUlMRC5zY29wZWQgfHwgQlVJTEQuc2hhZG93RG9tKSB7XG4gICAgICAgIHNjb3BlSWQgPSBob3N0RWxtWydzLXNjJ107XG4gICAgfVxuICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbikge1xuICAgICAgICBjb250ZW50UmVmID0gaG9zdEVsbVsncy1jciddO1xuICAgICAgICB1c2VOYXRpdmVTaGFkb3dEb20gPSBzdXBwb3J0c1NoYWRvdyAmJiAoY21wTWV0YS4kZmxhZ3MkICYgMSAvKiBDTVBfRkxBR1Muc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykgIT09IDA7XG4gICAgICAgIC8vIGFsd2F5cyByZXNldFxuICAgICAgICBjaGVja1Nsb3RGYWxsYmFja1Zpc2liaWxpdHkgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gc3luY2hyb25vdXMgcGF0Y2hcbiAgICBwYXRjaChvbGRWTm9kZSwgcm9vdFZub2RlKTtcbiAgICBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24pIHtcbiAgICAgICAgLy8gd2hpbGUgd2UncmUgbW92aW5nIG5vZGVzIGFyb3VuZCBleGlzdGluZyBub2RlcywgdGVtcG9yYXJpbHkgZGlzYWJsZVxuICAgICAgICAvLyB0aGUgZGlzY29ubmVjdENhbGxiYWNrIGZyb20gd29ya2luZ1xuICAgICAgICBwbHQuJGZsYWdzJCB8PSAxIC8qIFBMQVRGT1JNX0ZMQUdTLmlzVG1wRGlzY29ubmVjdGVkICovO1xuICAgICAgICBpZiAoY2hlY2tTbG90UmVsb2NhdGUpIHtcbiAgICAgICAgICAgIHJlbG9jYXRlU2xvdENvbnRlbnQocm9vdFZub2RlLiRlbG0kKTtcbiAgICAgICAgICAgIGxldCByZWxvY2F0ZURhdGE7XG4gICAgICAgICAgICBsZXQgbm9kZVRvUmVsb2NhdGU7XG4gICAgICAgICAgICBsZXQgb3JnTG9jYXRpb25Ob2RlO1xuICAgICAgICAgICAgbGV0IHBhcmVudE5vZGVSZWY7XG4gICAgICAgICAgICBsZXQgaW5zZXJ0QmVmb3JlTm9kZTtcbiAgICAgICAgICAgIGxldCByZWZOb2RlO1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgZm9yICg7IGkgPCByZWxvY2F0ZU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVsb2NhdGVEYXRhID0gcmVsb2NhdGVOb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICBub2RlVG9SZWxvY2F0ZSA9IHJlbG9jYXRlRGF0YS4kbm9kZVRvUmVsb2NhdGUkO1xuICAgICAgICAgICAgICAgIGlmICghbm9kZVRvUmVsb2NhdGVbJ3Mtb2wnXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgYSByZWZlcmVuY2Ugbm9kZSBtYXJraW5nIHRoaXMgbm9kZSdzIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhpcyBub2RlIGZvciBsYXRlciBsb29rdXBzXG4gICAgICAgICAgICAgICAgICAgIG9yZ0xvY2F0aW9uTm9kZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBCVUlMRC5pc0RlYnVnIHx8IEJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBvcmlnaW5hbExvY2F0aW9uRGVidWdOb2RlKG5vZGVUb1JlbG9jYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZG9jLmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgb3JnTG9jYXRpb25Ob2RlWydzLW5yJ10gPSBub2RlVG9SZWxvY2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZVRvUmVsb2NhdGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoKG5vZGVUb1JlbG9jYXRlWydzLW9sJ10gPSBvcmdMb2NhdGlvbk5vZGUpLCBub2RlVG9SZWxvY2F0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHJlbG9jYXRlTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZWxvY2F0ZURhdGEgPSByZWxvY2F0ZU5vZGVzW2ldO1xuICAgICAgICAgICAgICAgIG5vZGVUb1JlbG9jYXRlID0gcmVsb2NhdGVEYXRhLiRub2RlVG9SZWxvY2F0ZSQ7XG4gICAgICAgICAgICAgICAgaWYgKHJlbG9jYXRlRGF0YS4kc2xvdFJlZk5vZGUkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJ5IGRlZmF1bHQgd2UncmUganVzdCBnb2luZyB0byBpbnNlcnQgaXQgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICAgICAgLy8gYWZ0ZXIgdGhlIHNsb3QgcmVmZXJlbmNlIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZVJlZiA9IHJlbG9jYXRlRGF0YS4kc2xvdFJlZk5vZGUkLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydEJlZm9yZU5vZGUgPSByZWxvY2F0ZURhdGEuJHNsb3RSZWZOb2RlJC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgb3JnTG9jYXRpb25Ob2RlID0gbm9kZVRvUmVsb2NhdGVbJ3Mtb2wnXTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChvcmdMb2NhdGlvbk5vZGUgPSBvcmdMb2NhdGlvbk5vZGUucHJldmlvdXNTaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmTm9kZSA9IG9yZ0xvY2F0aW9uTm9kZVsncy1uciddO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZk5vZGUgJiYgcmVmTm9kZVsncy1zbiddID09PSBub2RlVG9SZWxvY2F0ZVsncy1zbiddICYmIHBhcmVudE5vZGVSZWYgPT09IHJlZk5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZk5vZGUgPSByZWZOb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVmTm9kZSB8fCAhcmVmTm9kZVsncy1uciddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydEJlZm9yZU5vZGUgPSByZWZOb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCghaW5zZXJ0QmVmb3JlTm9kZSAmJiBwYXJlbnROb2RlUmVmICE9PSBub2RlVG9SZWxvY2F0ZS5wYXJlbnROb2RlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvUmVsb2NhdGUubmV4dFNpYmxpbmcgIT09IGluc2VydEJlZm9yZU5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlJ3ZlIGNoZWNrZWQgdGhhdCBpdCdzIHdvcnRoIHdoaWxlIHRvIHJlbG9jYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSB0aGF0IHRoZSBub2RlIHRvIHJlbG9jYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoYXMgYSBkaWZmZXJlbnQgbmV4dCBzaWJsaW5nIG9yIHBhcmVudCByZWxvY2F0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlVG9SZWxvY2F0ZSAhPT0gaW5zZXJ0QmVmb3JlTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbm9kZVRvUmVsb2NhdGVbJ3MtaG4nXSAmJiBub2RlVG9SZWxvY2F0ZVsncy1vbCddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2JhYmx5IGEgY29tcG9uZW50IGluIHRoZSBpbmRleC5odG1sIHRoYXQgZG9lc24ndCBoYXZlIGl0J3MgaG9zdG5hbWUgc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb1JlbG9jYXRlWydzLWhuJ10gPSBub2RlVG9SZWxvY2F0ZVsncy1vbCddLnBhcmVudE5vZGUubm9kZU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCBpdCBiYWNrIHRvIHRoZSBkb20gYnV0IGluIGl0cyBuZXcgaG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGVSZWYuaW5zZXJ0QmVmb3JlKG5vZGVUb1JlbG9jYXRlLCBpbnNlcnRCZWZvcmVOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBub2RlIGRvZXNuJ3QgaGF2ZSBhIHNsb3QgaG9tZSB0byBnbyB0bywgc28gbGV0J3MgaGlkZSBpdFxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZVRvUmVsb2NhdGUubm9kZVR5cGUgPT09IDEgLyogTk9ERV9UWVBFLkVsZW1lbnROb2RlICovKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlVG9SZWxvY2F0ZS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGVja1Nsb3RGYWxsYmFja1Zpc2liaWxpdHkpIHtcbiAgICAgICAgICAgIHVwZGF0ZUZhbGxiYWNrU2xvdFZpc2liaWxpdHkocm9vdFZub2RlLiRlbG0kKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBkb25lIG1vdmluZyBub2RlcyBhcm91bmRcbiAgICAgICAgLy8gYWxsb3cgdGhlIGRpc2Nvbm5lY3QgY2FsbGJhY2sgdG8gd29yayBhZ2FpblxuICAgICAgICBwbHQuJGZsYWdzJCAmPSB+MSAvKiBQTEFURk9STV9GTEFHUy5pc1RtcERpc2Nvbm5lY3RlZCAqLztcbiAgICAgICAgLy8gYWx3YXlzIHJlc2V0XG4gICAgICAgIHJlbG9jYXRlTm9kZXMubGVuZ3RoID0gMDtcbiAgICB9XG59O1xuLy8gc2xvdCBjb21tZW50IGRlYnVnIG5vZGVzIG9ubHkgY3JlYXRlZCB3aXRoIHRoZSBgLS1kZWJ1Z2AgZmxhZ1xuLy8gb3RoZXJ3aXNlIHRoZXNlIG5vZGVzIGFyZSB0ZXh0IG5vZGVzIHcvb3V0IGNvbnRlbnRcbmNvbnN0IHNsb3RSZWZlcmVuY2VEZWJ1Z05vZGUgPSAoc2xvdFZOb2RlKSA9PiBkb2MuY3JlYXRlQ29tbWVudChgPHNsb3Qke3Nsb3RWTm9kZS4kbmFtZSQgPyAnIG5hbWU9XCInICsgc2xvdFZOb2RlLiRuYW1lJCArICdcIicgOiAnJ30+IChob3N0PSR7aG9zdFRhZ05hbWUudG9Mb3dlckNhc2UoKX0pYCk7XG5jb25zdCBvcmlnaW5hbExvY2F0aW9uRGVidWdOb2RlID0gKG5vZGVUb1JlbG9jYXRlKSA9PiBkb2MuY3JlYXRlQ29tbWVudChgb3JnLWxvY2F0aW9uIGZvciBgICtcbiAgICAobm9kZVRvUmVsb2NhdGUubG9jYWxOYW1lXG4gICAgICAgID8gYDwke25vZGVUb1JlbG9jYXRlLmxvY2FsTmFtZX0+IChob3N0PSR7bm9kZVRvUmVsb2NhdGVbJ3MtaG4nXX0pYFxuICAgICAgICA6IGBbJHtub2RlVG9SZWxvY2F0ZS50ZXh0Q29udGVudH1dYCkpO1xuY29uc3QgYXR0YWNoVG9BbmNlc3RvciA9IChob3N0UmVmLCBhbmNlc3RvckNvbXBvbmVudCkgPT4ge1xuICAgIGlmIChCVUlMRC5hc3luY0xvYWRpbmcgJiYgYW5jZXN0b3JDb21wb25lbnQgJiYgIWhvc3RSZWYuJG9uUmVuZGVyUmVzb2x2ZSQgJiYgYW5jZXN0b3JDb21wb25lbnRbJ3MtcCddKSB7XG4gICAgICAgIGFuY2VzdG9yQ29tcG9uZW50WydzLXAnXS5wdXNoKG5ldyBQcm9taXNlKChyKSA9PiAoaG9zdFJlZi4kb25SZW5kZXJSZXNvbHZlJCA9IHIpKSk7XG4gICAgfVxufTtcbmNvbnN0IHNjaGVkdWxlVXBkYXRlID0gKGhvc3RSZWYsIGlzSW5pdGlhbExvYWQpID0+IHtcbiAgICBpZiAoQlVJTEQudGFza1F1ZXVlICYmIEJVSUxELnVwZGF0YWJsZSkge1xuICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMTYgLyogSE9TVF9GTEFHUy5pc1F1ZXVlZEZvclVwZGF0ZSAqLztcbiAgICB9XG4gICAgaWYgKEJVSUxELmFzeW5jTG9hZGluZyAmJiBob3N0UmVmLiRmbGFncyQgJiA0IC8qIEhPU1RfRkxBR1MuaXNXYWl0aW5nRm9yQ2hpbGRyZW4gKi8pIHtcbiAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDUxMiAvKiBIT1NUX0ZMQUdTLm5lZWRzUmVyZW5kZXIgKi87XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXR0YWNoVG9BbmNlc3Rvcihob3N0UmVmLCBob3N0UmVmLiRhbmNlc3RvckNvbXBvbmVudCQpO1xuICAgIC8vIHRoZXJlIGlzIG5vIGFuY2VzdG9yIGNvbXBvbmVudCBvciB0aGUgYW5jZXN0b3IgY29tcG9uZW50XG4gICAgLy8gaGFzIGFscmVhZHkgZmlyZWQgb2ZmIGl0cyBsaWZlY3ljbGUgdXBkYXRlIHRoZW5cbiAgICAvLyBmaXJlIG9mZiB0aGUgaW5pdGlhbCB1cGRhdGVcbiAgICBjb25zdCBkaXNwYXRjaCA9ICgpID0+IGRpc3BhdGNoSG9va3MoaG9zdFJlZiwgaXNJbml0aWFsTG9hZCk7XG4gICAgcmV0dXJuIEJVSUxELnRhc2tRdWV1ZSA/IHdyaXRlVGFzayhkaXNwYXRjaCkgOiBkaXNwYXRjaCgpO1xufTtcbmNvbnN0IGRpc3BhdGNoSG9va3MgPSAoaG9zdFJlZiwgaXNJbml0aWFsTG9hZCkgPT4ge1xuICAgIGNvbnN0IGVsbSA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgICBjb25zdCBlbmRTY2hlZHVsZSA9IGNyZWF0ZVRpbWUoJ3NjaGVkdWxlVXBkYXRlJywgaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkKTtcbiAgICBjb25zdCBpbnN0YW5jZSA9IEJVSUxELmxhenlMb2FkID8gaG9zdFJlZi4kbGF6eUluc3RhbmNlJCA6IGVsbTtcbiAgICBsZXQgcHJvbWlzZTtcbiAgICBpZiAoaXNJbml0aWFsTG9hZCkge1xuICAgICAgICBpZiAoQlVJTEQubGF6eUxvYWQgJiYgQlVJTEQuaG9zdExpc3RlbmVyKSB7XG4gICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMjU2IC8qIEhPU1RfRkxBR1MuaXNMaXN0ZW5SZWFkeSAqLztcbiAgICAgICAgICAgIGlmIChob3N0UmVmLiRxdWV1ZWRMaXN0ZW5lcnMkKSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kcXVldWVkTGlzdGVuZXJzJC5tYXAoKFttZXRob2ROYW1lLCBldmVudF0pID0+IHNhZmVDYWxsKGluc3RhbmNlLCBtZXRob2ROYW1lLCBldmVudCkpO1xuICAgICAgICAgICAgICAgIGhvc3RSZWYuJHF1ZXVlZExpc3RlbmVycyQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVtaXRMaWZlY3ljbGVFdmVudChlbG0sICdjb21wb25lbnRXaWxsTG9hZCcpO1xuICAgICAgICBpZiAoQlVJTEQuY21wV2lsbExvYWQpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBzYWZlQ2FsbChpbnN0YW5jZSwgJ2NvbXBvbmVudFdpbGxMb2FkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVtaXRMaWZlY3ljbGVFdmVudChlbG0sICdjb21wb25lbnRXaWxsVXBkYXRlJyk7XG4gICAgICAgIGlmIChCVUlMRC5jbXBXaWxsVXBkYXRlKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gc2FmZUNhbGwoaW5zdGFuY2UsICdjb21wb25lbnRXaWxsVXBkYXRlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW1pdExpZmVjeWNsZUV2ZW50KGVsbSwgJ2NvbXBvbmVudFdpbGxSZW5kZXInKTtcbiAgICBpZiAoQlVJTEQuY21wV2lsbFJlbmRlcikge1xuICAgICAgICBwcm9taXNlID0gdGhlbihwcm9taXNlLCAoKSA9PiBzYWZlQ2FsbChpbnN0YW5jZSwgJ2NvbXBvbmVudFdpbGxSZW5kZXInKSk7XG4gICAgfVxuICAgIGVuZFNjaGVkdWxlKCk7XG4gICAgcmV0dXJuIHRoZW4ocHJvbWlzZSwgKCkgPT4gdXBkYXRlQ29tcG9uZW50KGhvc3RSZWYsIGluc3RhbmNlLCBpc0luaXRpYWxMb2FkKSk7XG59O1xuY29uc3QgdXBkYXRlQ29tcG9uZW50ID0gYXN5bmMgKGhvc3RSZWYsIGluc3RhbmNlLCBpc0luaXRpYWxMb2FkKSA9PiB7XG4gICAgLy8gdXBkYXRlQ29tcG9uZW50XG4gICAgY29uc3QgZWxtID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICAgIGNvbnN0IGVuZFVwZGF0ZSA9IGNyZWF0ZVRpbWUoJ3VwZGF0ZScsIGhvc3RSZWYuJGNtcE1ldGEkLiR0YWdOYW1lJCk7XG4gICAgY29uc3QgcmMgPSBlbG1bJ3MtcmMnXTtcbiAgICBpZiAoQlVJTEQuc3R5bGUgJiYgaXNJbml0aWFsTG9hZCkge1xuICAgICAgICAvLyBET00gV1JJVEUhXG4gICAgICAgIGF0dGFjaFN0eWxlcyhob3N0UmVmKTtcbiAgICB9XG4gICAgY29uc3QgZW5kUmVuZGVyID0gY3JlYXRlVGltZSgncmVuZGVyJywgaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkKTtcbiAgICBpZiAoQlVJTEQuaXNEZXYpIHtcbiAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDEwMjQgLyogSE9TVF9GTEFHUy5kZXZPblJlbmRlciAqLztcbiAgICB9XG4gICAgaWYgKEJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlKSB7XG4gICAgICAgIGF3YWl0IGNhbGxSZW5kZXIoaG9zdFJlZiwgaW5zdGFuY2UsIGVsbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjYWxsUmVuZGVyKGhvc3RSZWYsIGluc3RhbmNlLCBlbG0pO1xuICAgIH1cbiAgICBpZiAoQlVJTEQuY3NzVmFyU2hpbSAmJiBwbHQuJGNzc1NoaW0kKSB7XG4gICAgICAgIHBsdC4kY3NzU2hpbSQudXBkYXRlSG9zdChlbG0pO1xuICAgIH1cbiAgICBpZiAoQlVJTEQuaXNEZXYpIHtcbiAgICAgICAgaG9zdFJlZi4kcmVuZGVyQ291bnQkKys7XG4gICAgICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+MTAyNCAvKiBIT1NUX0ZMQUdTLmRldk9uUmVuZGVyICovO1xuICAgIH1cbiAgICBpZiAoQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIG1hbnVhbGx5IGNvbm5lY3RlZCBjaGlsZCBjb21wb25lbnRzIGR1cmluZyBzZXJ2ZXItc2lkZSBoeWRyYXRlXG4gICAgICAgICAgICBzZXJ2ZXJTaWRlQ29ubmVjdGVkKGVsbSk7XG4gICAgICAgICAgICBpZiAoaXNJbml0aWFsTG9hZCkge1xuICAgICAgICAgICAgICAgIC8vIHVzaW5nIG9ubHkgZHVyaW5nIHNlcnZlci1zaWRlIGh5ZHJhdGVcbiAgICAgICAgICAgICAgICBpZiAoaG9zdFJlZi4kY21wTWV0YSQuJGZsYWdzJCAmIDEgLyogQ01QX0ZMQUdTLnNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtWydzLWVuJ10gPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaG9zdFJlZi4kY21wTWV0YSQuJGZsYWdzJCAmIDIgLyogQ01QX0ZMQUdTLnNjb3BlZENzc0VuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtWydzLWVuJ10gPSAnYyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlRXJyb3IoZSwgZWxtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoQlVJTEQuYXN5bmNMb2FkaW5nICYmIHJjKSB7XG4gICAgICAgIC8vIG9rLCBzbyB0dXJucyBvdXQgdGhlcmUgYXJlIHNvbWUgY2hpbGQgaG9zdCBlbGVtZW50c1xuICAgICAgICAvLyB3YWl0aW5nIG9uIHRoaXMgcGFyZW50IGVsZW1lbnQgdG8gbG9hZFxuICAgICAgICAvLyBsZXQncyBmaXJlIG9mZiBhbGwgdXBkYXRlIGNhbGxiYWNrcyB3YWl0aW5nXG4gICAgICAgIHJjLm1hcCgoY2IpID0+IGNiKCkpO1xuICAgICAgICBlbG1bJ3MtcmMnXSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZW5kUmVuZGVyKCk7XG4gICAgZW5kVXBkYXRlKCk7XG4gICAgaWYgKEJVSUxELmFzeW5jTG9hZGluZykge1xuICAgICAgICBjb25zdCBjaGlsZHJlblByb21pc2VzID0gZWxtWydzLXAnXTtcbiAgICAgICAgY29uc3QgcG9zdFVwZGF0ZSA9ICgpID0+IHBvc3RVcGRhdGVDb21wb25lbnQoaG9zdFJlZik7XG4gICAgICAgIGlmIChjaGlsZHJlblByb21pc2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcG9zdFVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY2hpbGRyZW5Qcm9taXNlcykudGhlbihwb3N0VXBkYXRlKTtcbiAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSA0IC8qIEhPU1RfRkxBR1MuaXNXYWl0aW5nRm9yQ2hpbGRyZW4gKi87XG4gICAgICAgICAgICBjaGlsZHJlblByb21pc2VzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHBvc3RVcGRhdGVDb21wb25lbnQoaG9zdFJlZik7XG4gICAgfVxufTtcbmNvbnN0IGNhbGxSZW5kZXIgPSAoaG9zdFJlZiwgaW5zdGFuY2UsIGVsbSkgPT4ge1xuICAgIC8vIGluIG9yZGVyIGZvciBidW5kbGVycyB0byBjb3JyZWN0bHkgdHJlZXNoYWtlIHRoZSBCVUlMRCBvYmplY3RcbiAgICAvLyB3ZSBuZWVkIHRvIGVuc3VyZSBCVUlMRCBpcyBub3QgZGVvcHRpbWl6ZWQgd2l0aGluIGEgdHJ5L2NhdGNoXG4gICAgLy8gaHR0cHM6Ly9yb2xsdXBqcy5vcmcvZ3VpZGUvZW4vI3RyZWVzaGFrZSB0cnlDYXRjaERlb3B0aW1pemF0aW9uXG4gICAgY29uc3QgYWxsUmVuZGVyRm4gPSBCVUlMRC5hbGxSZW5kZXJGbiA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCBsYXp5TG9hZCA9IEJVSUxELmxhenlMb2FkID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNvbnN0IHRhc2tRdWV1ZSA9IEJVSUxELnRhc2tRdWV1ZSA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCB1cGRhdGFibGUgPSBCVUlMRC51cGRhdGFibGUgPyB0cnVlIDogZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVuZGVyaW5nUmVmID0gaW5zdGFuY2U7XG4gICAgICAgIGluc3RhbmNlID0gYWxsUmVuZGVyRm4gPyBpbnN0YW5jZS5yZW5kZXIoKSA6IGluc3RhbmNlLnJlbmRlciAmJiBpbnN0YW5jZS5yZW5kZXIoKTtcbiAgICAgICAgaWYgKHVwZGF0YWJsZSAmJiB0YXNrUXVldWUpIHtcbiAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+MTYgLyogSE9TVF9GTEFHUy5pc1F1ZXVlZEZvclVwZGF0ZSAqLztcbiAgICAgICAgfVxuICAgICAgICBpZiAodXBkYXRhYmxlIHx8IGxhenlMb2FkKSB7XG4gICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMiAvKiBIT1NUX0ZMQUdTLmhhc1JlbmRlcmVkICovO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5oYXNSZW5kZXJGbiB8fCBCVUlMRC5yZWZsZWN0KSB7XG4gICAgICAgICAgICBpZiAoQlVJTEQudmRvbVJlbmRlciB8fCBCVUlMRC5yZWZsZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gbG9va3MgbGlrZSB3ZSd2ZSBnb3QgY2hpbGQgbm9kZXMgdG8gcmVuZGVyIGludG8gdGhpcyBob3N0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAvLyBvciB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgY3NzIGNsYXNzL2F0dHJzIG9uIHRoZSBob3N0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAvLyBET00gV1JJVEUhXG4gICAgICAgICAgICAgICAgaWYgKEJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaW5zdGFuY2UpLnRoZW4oKHZhbHVlKSA9PiByZW5kZXJWZG9tKGhvc3RSZWYsIHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJWZG9tKGhvc3RSZWYsIGluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbG0udGV4dENvbnRlbnQgPSBpbnN0YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlRXJyb3IoZSwgaG9zdFJlZi4kaG9zdEVsZW1lbnQkKTtcbiAgICB9XG4gICAgcmVuZGVyaW5nUmVmID0gbnVsbDtcbiAgICByZXR1cm4gbnVsbDtcbn07XG5jb25zdCBnZXRSZW5kZXJpbmdSZWYgPSAoKSA9PiByZW5kZXJpbmdSZWY7XG5jb25zdCBwb3N0VXBkYXRlQ29tcG9uZW50ID0gKGhvc3RSZWYpID0+IHtcbiAgICBjb25zdCB0YWdOYW1lID0gaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkO1xuICAgIGNvbnN0IGVsbSA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgICBjb25zdCBlbmRQb3N0VXBkYXRlID0gY3JlYXRlVGltZSgncG9zdFVwZGF0ZScsIHRhZ05hbWUpO1xuICAgIGNvbnN0IGluc3RhbmNlID0gQlVJTEQubGF6eUxvYWQgPyBob3N0UmVmLiRsYXp5SW5zdGFuY2UkIDogZWxtO1xuICAgIGNvbnN0IGFuY2VzdG9yQ29tcG9uZW50ID0gaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkO1xuICAgIGlmIChCVUlMRC5jbXBEaWRSZW5kZXIpIHtcbiAgICAgICAgaWYgKEJVSUxELmlzRGV2KSB7XG4gICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMTAyNCAvKiBIT1NUX0ZMQUdTLmRldk9uUmVuZGVyICovO1xuICAgICAgICB9XG4gICAgICAgIHNhZmVDYWxsKGluc3RhbmNlLCAnY29tcG9uZW50RGlkUmVuZGVyJyk7XG4gICAgICAgIGlmIChCVUlMRC5pc0Rldikge1xuICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkICY9IH4xMDI0IC8qIEhPU1RfRkxBR1MuZGV2T25SZW5kZXIgKi87XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW1pdExpZmVjeWNsZUV2ZW50KGVsbSwgJ2NvbXBvbmVudERpZFJlbmRlcicpO1xuICAgIGlmICghKGhvc3RSZWYuJGZsYWdzJCAmIDY0IC8qIEhPU1RfRkxBR1MuaGFzTG9hZGVkQ29tcG9uZW50ICovKSkge1xuICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gNjQgLyogSE9TVF9GTEFHUy5oYXNMb2FkZWRDb21wb25lbnQgKi87XG4gICAgICAgIGlmIChCVUlMRC5hc3luY0xvYWRpbmcgJiYgQlVJTEQuY3NzQW5ub3RhdGlvbnMpIHtcbiAgICAgICAgICAgIC8vIERPTSBXUklURSFcbiAgICAgICAgICAgIGFkZEh5ZHJhdGVkRmxhZyhlbG0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5jbXBEaWRMb2FkKSB7XG4gICAgICAgICAgICBpZiAoQlVJTEQuaXNEZXYpIHtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMjA0OCAvKiBIT1NUX0ZMQUdTLmRldk9uRGlkTG9hZCAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNhZmVDYWxsKGluc3RhbmNlLCAnY29tcG9uZW50RGlkTG9hZCcpO1xuICAgICAgICAgICAgaWYgKEJVSUxELmlzRGV2KSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkICY9IH4yMDQ4IC8qIEhPU1RfRkxBR1MuZGV2T25EaWRMb2FkICovO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVtaXRMaWZlY3ljbGVFdmVudChlbG0sICdjb21wb25lbnREaWRMb2FkJyk7XG4gICAgICAgIGVuZFBvc3RVcGRhdGUoKTtcbiAgICAgICAgaWYgKEJVSUxELmFzeW5jTG9hZGluZykge1xuICAgICAgICAgICAgaG9zdFJlZi4kb25SZWFkeVJlc29sdmUkKGVsbSk7XG4gICAgICAgICAgICBpZiAoIWFuY2VzdG9yQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgYXBwRGlkTG9hZCh0YWdOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKEJVSUxELmNtcERpZFVwZGF0ZSkge1xuICAgICAgICAgICAgLy8gd2UndmUgYWxyZWFkeSBsb2FkZWQgdGhpcyBjb21wb25lbnRcbiAgICAgICAgICAgIC8vIGZpcmUgb2ZmIHRoZSB1c2VyJ3MgY29tcG9uZW50RGlkVXBkYXRlIG1ldGhvZCAoaWYgb25lIHdhcyBwcm92aWRlZClcbiAgICAgICAgICAgIC8vIGNvbXBvbmVudERpZFVwZGF0ZSBydW5zIEFGVEVSIHJlbmRlcigpIGhhcyBiZWVuIGNhbGxlZFxuICAgICAgICAgICAgLy8gYW5kIGFsbCBjaGlsZCBjb21wb25lbnRzIGhhdmUgZmluaXNoZWQgdXBkYXRpbmdcbiAgICAgICAgICAgIGlmIChCVUlMRC5pc0Rldikge1xuICAgICAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAxMDI0IC8qIEhPU1RfRkxBR1MuZGV2T25SZW5kZXIgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzYWZlQ2FsbChpbnN0YW5jZSwgJ2NvbXBvbmVudERpZFVwZGF0ZScpO1xuICAgICAgICAgICAgaWYgKEJVSUxELmlzRGV2KSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkICY9IH4xMDI0IC8qIEhPU1RfRkxBR1MuZGV2T25SZW5kZXIgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZW1pdExpZmVjeWNsZUV2ZW50KGVsbSwgJ2NvbXBvbmVudERpZFVwZGF0ZScpO1xuICAgICAgICBlbmRQb3N0VXBkYXRlKCk7XG4gICAgfVxuICAgIGlmIChCVUlMRC5ob3RNb2R1bGVSZXBsYWNlbWVudCkge1xuICAgICAgICBlbG1bJ3MtaG1yLWxvYWQnXSAmJiBlbG1bJ3MtaG1yLWxvYWQnXSgpO1xuICAgIH1cbiAgICBpZiAoQlVJTEQubWV0aG9kICYmIEJVSUxELmxhenlMb2FkKSB7XG4gICAgICAgIGhvc3RSZWYuJG9uSW5zdGFuY2VSZXNvbHZlJChlbG0pO1xuICAgIH1cbiAgICAvLyBsb2FkIGV2ZW50cyBmaXJlIGZyb20gYm90dG9tIHRvIHRvcFxuICAgIC8vIHRoZSBkZWVwZXN0IGVsZW1lbnRzIGxvYWQgZmlyc3QgdGhlbiBidWJibGVzIHVwXG4gICAgaWYgKEJVSUxELmFzeW5jTG9hZGluZykge1xuICAgICAgICBpZiAoaG9zdFJlZi4kb25SZW5kZXJSZXNvbHZlJCkge1xuICAgICAgICAgICAgaG9zdFJlZi4kb25SZW5kZXJSZXNvbHZlJCgpO1xuICAgICAgICAgICAgaG9zdFJlZi4kb25SZW5kZXJSZXNvbHZlJCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG9zdFJlZi4kZmxhZ3MkICYgNTEyIC8qIEhPU1RfRkxBR1MubmVlZHNSZXJlbmRlciAqLykge1xuICAgICAgICAgICAgbmV4dFRpY2soKCkgPT4gc2NoZWR1bGVVcGRhdGUoaG9zdFJlZiwgZmFsc2UpKTtcbiAgICAgICAgfVxuICAgICAgICBob3N0UmVmLiRmbGFncyQgJj0gfig0IC8qIEhPU1RfRkxBR1MuaXNXYWl0aW5nRm9yQ2hpbGRyZW4gKi8gfCA1MTIgLyogSE9TVF9GTEFHUy5uZWVkc1JlcmVuZGVyICovKTtcbiAgICB9XG4gICAgLy8gKCDigKJf4oCiKVxuICAgIC8vICgg4oCiX+KAoik+4oyQ4pagLeKWoFxuICAgIC8vICjijJDilqBf4pagKVxufTtcbmNvbnN0IGZvcmNlVXBkYXRlID0gKHJlZikgPT4ge1xuICAgIGlmIChCVUlMRC51cGRhdGFibGUpIHtcbiAgICAgICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYocmVmKTtcbiAgICAgICAgY29uc3QgaXNDb25uZWN0ZWQgPSBob3N0UmVmLiRob3N0RWxlbWVudCQuaXNDb25uZWN0ZWQ7XG4gICAgICAgIGlmIChpc0Nvbm5lY3RlZCAmJlxuICAgICAgICAgICAgKGhvc3RSZWYuJGZsYWdzJCAmICgyIC8qIEhPU1RfRkxBR1MuaGFzUmVuZGVyZWQgKi8gfCAxNiAvKiBIT1NUX0ZMQUdTLmlzUXVldWVkRm9yVXBkYXRlICovKSkgPT09IDIgLyogSE9TVF9GTEFHUy5oYXNSZW5kZXJlZCAqLykge1xuICAgICAgICAgICAgc2NoZWR1bGVVcGRhdGUoaG9zdFJlZiwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJldHVybnMgXCJ0cnVlXCIgd2hlbiB0aGUgZm9yY2VkIHVwZGF0ZSB3YXMgc3VjY2Vzc2Z1bGx5IHNjaGVkdWxlZFxuICAgICAgICByZXR1cm4gaXNDb25uZWN0ZWQ7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5jb25zdCBhcHBEaWRMb2FkID0gKHdobykgPT4ge1xuICAgIC8vIG9uIGFwcGxvYWRcbiAgICAvLyB3ZSBoYXZlIGZpbmlzaCB0aGUgZmlyc3QgYmlnIGluaXRpYWwgcmVuZGVyXG4gICAgaWYgKEJVSUxELmNzc0Fubm90YXRpb25zKSB7XG4gICAgICAgIGFkZEh5ZHJhdGVkRmxhZyhkb2MuZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKEJVSUxELmFzeW5jUXVldWUpIHtcbiAgICAgICAgcGx0LiRmbGFncyQgfD0gMiAvKiBQTEFURk9STV9GTEFHUy5hcHBMb2FkZWQgKi87XG4gICAgfVxuICAgIG5leHRUaWNrKCgpID0+IGVtaXRFdmVudCh3aW4sICdhcHBsb2FkJywgeyBkZXRhaWw6IHsgbmFtZXNwYWNlOiBOQU1FU1BBQ0UgfSB9KSk7XG4gICAgaWYgKEJVSUxELnByb2ZpbGUgJiYgcGVyZm9ybWFuY2UubWVhc3VyZSkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tZWFzdXJlKGBbU3RlbmNpbF0gJHtOQU1FU1BBQ0V9IGluaXRpYWwgbG9hZCAoYnkgJHt3aG99KWAsICdzdDphcHA6c3RhcnQnKTtcbiAgICB9XG59O1xuY29uc3Qgc2FmZUNhbGwgPSAoaW5zdGFuY2UsIG1ldGhvZCwgYXJnKSA9PiB7XG4gICAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlW21ldGhvZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZVttZXRob2RdKGFyZyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGVFcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufTtcbmNvbnN0IHRoZW4gPSAocHJvbWlzZSwgdGhlbkZuKSA9PiB7XG4gICAgcmV0dXJuIHByb21pc2UgJiYgcHJvbWlzZS50aGVuID8gcHJvbWlzZS50aGVuKHRoZW5GbikgOiB0aGVuRm4oKTtcbn07XG5jb25zdCBlbWl0TGlmZWN5Y2xlRXZlbnQgPSAoZWxtLCBsaWZlY3ljbGVOYW1lKSA9PiB7XG4gICAgaWYgKEJVSUxELmxpZmVjeWNsZURPTUV2ZW50cykge1xuICAgICAgICBlbWl0RXZlbnQoZWxtLCAnc3RlbmNpbF8nICsgbGlmZWN5Y2xlTmFtZSwge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNvbXBvc2VkOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgbmFtZXNwYWNlOiBOQU1FU1BBQ0UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG59O1xuY29uc3QgYWRkSHlkcmF0ZWRGbGFnID0gKGVsbSkgPT4gQlVJTEQuaHlkcmF0ZWRDbGFzc1xuICAgID8gZWxtLmNsYXNzTGlzdC5hZGQoJ2h5ZHJhdGVkJylcbiAgICA6IEJVSUxELmh5ZHJhdGVkQXR0cmlidXRlXG4gICAgICAgID8gZWxtLnNldEF0dHJpYnV0ZSgnaHlkcmF0ZWQnLCAnJylcbiAgICAgICAgOiB1bmRlZmluZWQ7XG5jb25zdCBzZXJ2ZXJTaWRlQ29ubmVjdGVkID0gKGVsbSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZWxtLmNoaWxkcmVuO1xuICAgIGlmIChjaGlsZHJlbiAhPSBudWxsKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkRWxtID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkRWxtLmNvbm5lY3RlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRFbG0uY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlcnZlclNpZGVDb25uZWN0ZWQoY2hpbGRFbG0pO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IGdldFZhbHVlID0gKHJlZiwgcHJvcE5hbWUpID0+IGdldEhvc3RSZWYocmVmKS4kaW5zdGFuY2VWYWx1ZXMkLmdldChwcm9wTmFtZSk7XG5jb25zdCBzZXRWYWx1ZSA9IChyZWYsIHByb3BOYW1lLCBuZXdWYWwsIGNtcE1ldGEpID0+IHtcbiAgICAvLyBjaGVjayBvdXIgbmV3IHByb3BlcnR5IHZhbHVlIGFnYWluc3Qgb3VyIGludGVybmFsIHZhbHVlXG4gICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYocmVmKTtcbiAgICBjb25zdCBlbG0gPSBCVUlMRC5sYXp5TG9hZCA/IGhvc3RSZWYuJGhvc3RFbGVtZW50JCA6IHJlZjtcbiAgICBjb25zdCBvbGRWYWwgPSBob3N0UmVmLiRpbnN0YW5jZVZhbHVlcyQuZ2V0KHByb3BOYW1lKTtcbiAgICBjb25zdCBmbGFncyA9IGhvc3RSZWYuJGZsYWdzJDtcbiAgICBjb25zdCBpbnN0YW5jZSA9IEJVSUxELmxhenlMb2FkID8gaG9zdFJlZi4kbGF6eUluc3RhbmNlJCA6IGVsbTtcbiAgICBuZXdWYWwgPSBwYXJzZVByb3BlcnR5VmFsdWUobmV3VmFsLCBjbXBNZXRhLiRtZW1iZXJzJFtwcm9wTmFtZV1bMF0pO1xuICAgIC8vIGV4cGxpY2l0bHkgY2hlY2sgZm9yIE5hTiBvbiBib3RoIHNpZGVzLCBhcyBgTmFOID09PSBOYU5gIGlzIGFsd2F5cyBmYWxzZVxuICAgIGNvbnN0IGFyZUJvdGhOYU4gPSBOdW1iZXIuaXNOYU4ob2xkVmFsKSAmJiBOdW1iZXIuaXNOYU4obmV3VmFsKTtcbiAgICBjb25zdCBkaWRWYWx1ZUNoYW5nZSA9IG5ld1ZhbCAhPT0gb2xkVmFsICYmICFhcmVCb3RoTmFOO1xuICAgIGlmICgoIUJVSUxELmxhenlMb2FkIHx8ICEoZmxhZ3MgJiA4IC8qIEhPU1RfRkxBR1MuaXNDb25zdHJ1Y3RpbmdJbnN0YW5jZSAqLykgfHwgb2xkVmFsID09PSB1bmRlZmluZWQpICYmIGRpZFZhbHVlQ2hhbmdlKSB7XG4gICAgICAgIC8vIGdhZHpvb2tzISB0aGUgcHJvcGVydHkncyB2YWx1ZSBoYXMgY2hhbmdlZCEhXG4gICAgICAgIC8vIHNldCBvdXIgbmV3IHZhbHVlIVxuICAgICAgICBob3N0UmVmLiRpbnN0YW5jZVZhbHVlcyQuc2V0KHByb3BOYW1lLCBuZXdWYWwpO1xuICAgICAgICBpZiAoQlVJTEQuaXNEZXYpIHtcbiAgICAgICAgICAgIGlmIChob3N0UmVmLiRmbGFncyQgJiAxMDI0IC8qIEhPU1RfRkxBR1MuZGV2T25SZW5kZXIgKi8pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlRGV2V2FybihgVGhlIHN0YXRlL3Byb3AgXCIke3Byb3BOYW1lfVwiIGNoYW5nZWQgZHVyaW5nIHJlbmRlcmluZy4gVGhpcyBjYW4gcG90ZW50aWFsbHkgbGVhZCB0byBpbmZpbml0ZS1sb29wcyBhbmQgb3RoZXIgYnVncy5gLCAnXFxuRWxlbWVudCcsIGVsbSwgJ1xcbk5ldyB2YWx1ZScsIG5ld1ZhbCwgJ1xcbk9sZCB2YWx1ZScsIG9sZFZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChob3N0UmVmLiRmbGFncyQgJiAyMDQ4IC8qIEhPU1RfRkxBR1MuZGV2T25EaWRMb2FkICovKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZURldldhcm4oYFRoZSBzdGF0ZS9wcm9wIFwiJHtwcm9wTmFtZX1cIiBjaGFuZ2VkIGR1cmluZyBcImNvbXBvbmVudERpZExvYWQoKVwiLCB0aGlzIHRyaWdnZXJzIGV4dHJhIHJlLXJlbmRlcnMsIHRyeSB0byBzZXR1cCBvbiBcImNvbXBvbmVudFdpbGxMb2FkKClcImAsICdcXG5FbGVtZW50JywgZWxtLCAnXFxuTmV3IHZhbHVlJywgbmV3VmFsLCAnXFxuT2xkIHZhbHVlJywgb2xkVmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIUJVSUxELmxhenlMb2FkIHx8IGluc3RhbmNlKSB7XG4gICAgICAgICAgICAvLyBnZXQgYW4gYXJyYXkgb2YgbWV0aG9kIG5hbWVzIG9mIHdhdGNoIGZ1bmN0aW9ucyB0byBjYWxsXG4gICAgICAgICAgICBpZiAoQlVJTEQud2F0Y2hDYWxsYmFjayAmJiBjbXBNZXRhLiR3YXRjaGVycyQgJiYgZmxhZ3MgJiAxMjggLyogSE9TVF9GTEFHUy5pc1dhdGNoUmVhZHkgKi8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YXRjaE1ldGhvZHMgPSBjbXBNZXRhLiR3YXRjaGVycyRbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmICh3YXRjaE1ldGhvZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpbnN0YW5jZSBpcyB3YXRjaGluZyBmb3Igd2hlbiB0aGlzIHByb3BlcnR5IGNoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgd2F0Y2hNZXRob2RzLm1hcCgod2F0Y2hNZXRob2ROYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpcmUgb2ZmIGVhY2ggb2YgdGhlIHdhdGNoIG1ldGhvZHMgdGhhdCBhcmUgd2F0Y2hpbmcgdGhpcyBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlW3dhdGNoTWV0aG9kTmFtZV0obmV3VmFsLCBvbGRWYWwsIHByb3BOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZUVycm9yKGUsIGVsbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC51cGRhdGFibGUgJiZcbiAgICAgICAgICAgICAgICAoZmxhZ3MgJiAoMiAvKiBIT1NUX0ZMQUdTLmhhc1JlbmRlcmVkICovIHwgMTYgLyogSE9TVF9GTEFHUy5pc1F1ZXVlZEZvclVwZGF0ZSAqLykpID09PSAyIC8qIEhPU1RfRkxBR1MuaGFzUmVuZGVyZWQgKi8pIHtcbiAgICAgICAgICAgICAgICBpZiAoQlVJTEQuY21wU2hvdWxkVXBkYXRlICYmIGluc3RhbmNlLmNvbXBvbmVudFNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UuY29tcG9uZW50U2hvdWxkVXBkYXRlKG5ld1ZhbCwgb2xkVmFsLCBwcm9wTmFtZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbG9va3MgbGlrZSB0aGlzIHZhbHVlIGFjdHVhbGx5IGNoYW5nZWQsIHNvIHdlJ3ZlIGdvdCB3b3JrIHRvIGRvIVxuICAgICAgICAgICAgICAgIC8vIGJ1dCBvbmx5IGlmIHdlJ3ZlIGFscmVhZHkgcmVuZGVyZWQsIG90aGVyd2lzZSBqdXN0IGNoaWxsIG91dFxuICAgICAgICAgICAgICAgIC8vIHF1ZXVlIHRoYXQgd2UgbmVlZCB0byBkbyBhbiB1cGRhdGUsIGJ1dCBkb24ndCB3b3JyeSBhYm91dCBxdWV1aW5nXG4gICAgICAgICAgICAgICAgLy8gdXAgbWlsbGlvbnMgY3V6IHRoaXMgZnVuY3Rpb24gZW5zdXJlcyBpdCBvbmx5IHJ1bnMgb25jZVxuICAgICAgICAgICAgICAgIHNjaGVkdWxlVXBkYXRlKGhvc3RSZWYsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAqIEF0dGFjaCBhIHNlcmllcyBvZiBydW50aW1lIGNvbnN0cnVjdHMgdG8gYSBjb21waWxlZCBTdGVuY2lsIGNvbXBvbmVudFxuICogY29uc3RydWN0b3IsIGluY2x1ZGluZyBnZXR0ZXJzIGFuZCBzZXR0ZXJzIGZvciB0aGUgYEBQcm9wYCBhbmQgYEBTdGF0ZWBcbiAqIGRlY29yYXRvcnMsIGNhbGxiYWNrcyBmb3Igd2hlbiBhdHRyaWJ1dGVzIGNoYW5nZSwgYW5kIHNvIG9uLlxuICpcbiAqIEBwYXJhbSBDc3RyIHRoZSBjb25zdHJ1Y3RvciBmb3IgYSBjb21wb25lbnQgdGhhdCB3ZSBuZWVkIHRvIHByb2Nlc3NcbiAqIEBwYXJhbSBjbXBNZXRhIG1ldGFkYXRhIGNvbGxlY3RlZCBwcmV2aW91c2x5IGFib3V0IHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSBmbGFncyBhIG51bWJlciB1c2VkIHRvIHN0b3JlIGEgc2VyaWVzIG9mIGJpdCBmbGFnc1xuICogQHJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIHNhbWUgY29uc3RydWN0b3IgcGFzc2VkIGluIChidXQgbm93IG11dGF0ZWQpXG4gKi9cbmNvbnN0IHByb3h5Q29tcG9uZW50ID0gKENzdHIsIGNtcE1ldGEsIGZsYWdzKSA9PiB7XG4gICAgaWYgKEJVSUxELm1lbWJlciAmJiBjbXBNZXRhLiRtZW1iZXJzJCkge1xuICAgICAgICBpZiAoQlVJTEQud2F0Y2hDYWxsYmFjayAmJiBDc3RyLndhdGNoZXJzKSB7XG4gICAgICAgICAgICBjbXBNZXRhLiR3YXRjaGVycyQgPSBDc3RyLndhdGNoZXJzO1xuICAgICAgICB9XG4gICAgICAgIC8vIEl0J3MgYmV0dGVyIHRvIGhhdmUgYSBjb25zdCB0aGFuIHR3byBPYmplY3QuZW50cmllcygpXG4gICAgICAgIGNvbnN0IG1lbWJlcnMgPSBPYmplY3QuZW50cmllcyhjbXBNZXRhLiRtZW1iZXJzJCk7XG4gICAgICAgIGNvbnN0IHByb3RvdHlwZSA9IENzdHIucHJvdG90eXBlO1xuICAgICAgICBtZW1iZXJzLm1hcCgoW21lbWJlck5hbWUsIFttZW1iZXJGbGFnc11dKSA9PiB7XG4gICAgICAgICAgICBpZiAoKEJVSUxELnByb3AgfHwgQlVJTEQuc3RhdGUpICYmXG4gICAgICAgICAgICAgICAgKG1lbWJlckZsYWdzICYgMzEgLyogTUVNQkVSX0ZMQUdTLlByb3AgKi8gfHxcbiAgICAgICAgICAgICAgICAgICAgKCghQlVJTEQubGF6eUxvYWQgfHwgZmxhZ3MgJiAyIC8qIFBST1hZX0ZMQUdTLnByb3h5U3RhdGUgKi8pICYmIG1lbWJlckZsYWdzICYgMzIgLyogTUVNQkVSX0ZMQUdTLlN0YXRlICovKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBwcm94eUNvbXBvbmVudCAtIHByb3BcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG90eXBlLCBtZW1iZXJOYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb3h5Q29tcG9uZW50LCBnZXQgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRWYWx1ZSh0aGlzLCBtZW1iZXJOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2V0KG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGR1cmluZyBkZXYgdGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEJVSUxELmlzRGV2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmID0gZ2V0SG9zdFJlZih0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgYXJlIHByb3h5aW5nIHRoZSBpbnN0YW5jZSAobm90IGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZsYWdzICYgMSAvKiBQUk9YWV9GTEFHUy5pc0VsZW1lbnRDb25zdHJ1Y3RvciAqLykgPT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGVsZW1lbnQgaXMgbm90IGNvbnN0cnVjdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVmLiRmbGFncyQgJiA4IC8qIEhPU1RfRkxBR1MuaXNDb25zdHJ1Y3RpbmdJbnN0YW5jZSAqLykgPT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG1lbWJlciBpcyBhIHByb3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1lbWJlckZsYWdzICYgMzEgLyogTUVNQkVSX0ZMQUdTLlByb3AgKi8pICE9PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBtZW1iZXIgaXMgbm90IG11dGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1lbWJlckZsYWdzICYgMTAyNCAvKiBNRU1CRVJfRkxBR1MuTXV0YWJsZSAqLykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZURldldhcm4oYEBQcm9wKCkgXCIke21lbWJlck5hbWV9XCIgb24gPCR7Y21wTWV0YS4kdGFnTmFtZSR9PiBpcyBpbW11dGFibGUgYnV0IHdhcyBtb2RpZmllZCBmcm9tIHdpdGhpbiB0aGUgY29tcG9uZW50Llxcbk1vcmUgaW5mb3JtYXRpb246IGh0dHBzOi8vc3RlbmNpbGpzLmNvbS9kb2NzL3Byb3BlcnRpZXMjcHJvcC1tdXRhYmlsaXR5YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJveHlDb21wb25lbnQsIHNldCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUodGhpcywgbWVtYmVyTmFtZSwgbmV3VmFsdWUsIGNtcE1ldGEpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChCVUlMRC5sYXp5TG9hZCAmJlxuICAgICAgICAgICAgICAgIEJVSUxELm1ldGhvZCAmJlxuICAgICAgICAgICAgICAgIGZsYWdzICYgMSAvKiBQUk9YWV9GTEFHUy5pc0VsZW1lbnRDb25zdHJ1Y3RvciAqLyAmJlxuICAgICAgICAgICAgICAgIG1lbWJlckZsYWdzICYgNjQgLyogTUVNQkVSX0ZMQUdTLk1ldGhvZCAqLykge1xuICAgICAgICAgICAgICAgIC8vIHByb3h5Q29tcG9uZW50IC0gbWV0aG9kXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvdHlwZSwgbWVtYmVyTmFtZSwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWYgPSBnZXRIb3N0UmVmKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZi4kb25JbnN0YW5jZVByb21pc2UkLnRoZW4oKCkgPT4gcmVmLiRsYXp5SW5zdGFuY2UkW21lbWJlck5hbWVdKC4uLmFyZ3MpKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChCVUlMRC5vYnNlcnZlQXR0cmlidXRlICYmICghQlVJTEQubGF6eUxvYWQgfHwgZmxhZ3MgJiAxIC8qIFBST1hZX0ZMQUdTLmlzRWxlbWVudENvbnN0cnVjdG9yICovKSkge1xuICAgICAgICAgICAgY29uc3QgYXR0ck5hbWVUb1Byb3BOYW1lID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgcHJvdG90eXBlLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChhdHRyTmFtZSwgX29sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHBsdC5qbXAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IGF0dHJOYW1lVG9Qcm9wTmFtZS5nZXQoYXR0ck5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgSW4gYSB3ZWIgY29tcG9uZW50IGxpZmVjeWNsZSB0aGUgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIHJ1bnMgcHJpb3IgdG8gY29ubmVjdGVkQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgLy8gIGluIHRoZSBjYXNlIHdoZXJlIGFuIGF0dHJpYnV0ZSB3YXMgc2V0IGlubGluZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gIGBgYGh0bWxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgPG15LWNvbXBvbmVudCBzb21lLWF0dHJpYnV0ZT1cInNvbWUtdmFsdWVcIj48L215LWNvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgLy8gIGBgYFxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgVGhlcmUgaXMgYW4gZWRnZSBjYXNlIHdoZXJlIGEgZGV2ZWxvcGVyIHNldHMgdGhlIGF0dHJpYnV0ZSBpbmxpbmUgb24gYSBjdXN0b20gZWxlbWVudCBhbmQgdGhlblxuICAgICAgICAgICAgICAgICAgICAvLyAgcHJvZ3JhbW1hdGljYWxseSBjaGFuZ2VzIGl0IGJlZm9yZSBpdCBoYXMgYmVlbiB1cGdyYWRlZCBhcyBzaG93biBiZWxvdzpcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gIGBgYGh0bWxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgPCEtLSB0aGlzIGNvbXBvbmVudCBoYXMgX25vdF8gYmVlbiB1cGdyYWRlZCB5ZXQgLS0+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIDxteS1jb21wb25lbnQgaWQ9XCJ0ZXN0XCIgc29tZS1hdHRyaWJ1dGU9XCJzb21lLXZhbHVlXCI+PC9teS1jb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIDxzY3JpcHQ+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgLy8gZ3JhYiBub24tdXBncmFkZWQgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rlc3RcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgZWwuc29tZUF0dHJpYnV0ZSA9IFwiYW5vdGhlci12YWx1ZVwiO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIC8vIHVwZ3JhZGUgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1jb21wb25lbnQnLCBNeUNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIDwvc2NyaXB0PlxuICAgICAgICAgICAgICAgICAgICAvLyAgYGBgXG4gICAgICAgICAgICAgICAgICAgIC8vICBJbiB0aGlzIGNhc2UgaWYgd2UgZG8gbm90IHVuc2hhZG93IGhlcmUgYW5kIHVzZSB0aGUgdmFsdWUgb2YgdGhlIHNoYWRvd2luZyBwcm9wZXJ0eSwgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIC8vICB3aWxsIGJlIGNhbGxlZCB3aXRoIGBuZXdWYWx1ZSA9IFwic29tZS12YWx1ZVwiYCBhbmQgd2lsbCBzZXQgdGhlIHNoYWRvd2VkIHByb3BlcnR5ICh0aGlzLnNvbWVBdHRyaWJ1dGUgPSBcImFub3RoZXItdmFsdWVcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gIHRvIHRoZSB2YWx1ZSB0aGF0IHdhcyBzZXQgaW5saW5lIGkuZS4gXCJzb21lLXZhbHVlXCIgZnJvbSBhYm92ZSBleGFtcGxlLiBXaGVuXG4gICAgICAgICAgICAgICAgICAgIC8vICB0aGUgY29ubmVjdGVkQ2FsbGJhY2sgYXR0ZW1wdHMgdG8gdW5zaGFkb3cgaXQgd2lsbCB1c2UgXCJzb21lLXZhbHVlXCIgYXMgdGhlIGluaXRpYWwgdmFsdWUgcmF0aGVyIHRoYW4gXCJhbm90aGVyLXZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gIFRoZSBjYXNlIHdoZXJlIHRoZSBhdHRyaWJ1dGUgd2FzIE5PVCBzZXQgaW5saW5lIGJ1dCB3YXMgbm90IHNldCBwcm9ncmFtbWF0aWNhbGx5IHNoYWxsIGJlIGhhbmRsZWQvdW5zaGFkb3dlZFxuICAgICAgICAgICAgICAgICAgICAvLyAgYnkgY29ubmVjdGVkQ2FsbGJhY2sgYXMgdGhpcyBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgd2lsbCBub3QgZmlyZS5cbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvd2ViLWNvbXBvbmVudHMvYmVzdC1wcmFjdGljZXMjbGF6eS1wcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICBUT0RPKFNURU5DSUwtMTYpIHdlIHNob3VsZCB0aGluayBhYm91dCB3aGV0aGVyIG9yIG5vdCB3ZSBhY3R1YWxseSB3YW50IHRvIGJlIHJlZmxlY3RpbmcgdGhlIGF0dHJpYnV0ZXMgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gIHByb3BlcnRpZXMgaGVyZSBnaXZlbiB0aGF0IHRoaXMgZ29lcyBhZ2FpbnN0IGJlc3QgcHJhY3RpY2VzIG91dGxpbmVkIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvd2ViLWNvbXBvbmVudHMvYmVzdC1wcmFjdGljZXMjYXZvaWQtcmVlbnRyYW5jeVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpc1twcm9wTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpc1twcm9wTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvdG90eXBlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHRoaXNbcHJvcE5hbWVdID09PSAnbnVtYmVyJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1twcm9wTmFtZV0gPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwcm9wTmFtZSBleGlzdHMgb24gdGhlIHByb3RvdHlwZSBvZiBgQ3N0cmAsIHRoaXMgdXBkYXRlIG1heSBiZSBhIHJlc3VsdCBvZiBTdGVuY2lsIHVzaW5nIG5hdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQVBJcyB0byByZWZsZWN0IHByb3BzIGFzIGF0dHJpYnV0ZXMuIENhbGxzIHRvIGBzZXRBdHRyaWJ1dGUoc29tZUVsZW1lbnQsIHByb3BOYW1lKWAgd2lsbCByZXN1bHQgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBwcm9wTmFtZWAgdG8gYmUgY29udmVydGVkIHRvIGEgYERPTVN0cmluZ2AsIHdoaWNoIG1heSBub3QgYmUgd2hhdCB3ZSB3YW50IGZvciBvdGhlciBwcmltaXRpdmUgcHJvcHMuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpc1twcm9wTmFtZV0gPSBuZXdWYWx1ZSA9PT0gbnVsbCAmJiB0eXBlb2YgdGhpc1twcm9wTmFtZV0gPT09ICdib29sZWFuJyA/IGZhbHNlIDogbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGFycmF5IG9mIGF0dHJpYnV0ZXMgdG8gb2JzZXJ2ZVxuICAgICAgICAgICAgLy8gYW5kIGFsc28gY3JlYXRlIGEgbWFwIG9mIGh0bWwgYXR0cmlidXRlIG5hbWUgdG8ganMgcHJvcGVydHkgbmFtZVxuICAgICAgICAgICAgQ3N0ci5vYnNlcnZlZEF0dHJpYnV0ZXMgPSBtZW1iZXJzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoW18sIG1dKSA9PiBtWzBdICYgMTUgLyogTUVNQkVSX0ZMQUdTLkhhc0F0dHJpYnV0ZSAqLykgLy8gZmlsdGVyIHRvIG9ubHkga2VlcCBwcm9wcyB0aGF0IHNob3VsZCBtYXRjaCBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgLm1hcCgoW3Byb3BOYW1lLCBtXSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJOYW1lID0gbVsxXSB8fCBwcm9wTmFtZTtcbiAgICAgICAgICAgICAgICBhdHRyTmFtZVRvUHJvcE5hbWUuc2V0KGF0dHJOYW1lLCBwcm9wTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKEJVSUxELnJlZmxlY3QgJiYgbVswXSAmIDUxMiAvKiBNRU1CRVJfRkxBR1MuUmVmbGVjdEF0dHIgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgY21wTWV0YS4kYXR0cnNUb1JlZmxlY3QkLnB1c2goW3Byb3BOYW1lLCBhdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0ck5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQ3N0cjtcbn07XG5jb25zdCBpbml0aWFsaXplQ29tcG9uZW50ID0gYXN5bmMgKGVsbSwgaG9zdFJlZiwgY21wTWV0YSwgaG1yVmVyc2lvbklkLCBDc3RyKSA9PiB7XG4gICAgLy8gaW5pdGlhbGl6ZUNvbXBvbmVudFxuICAgIGlmICgoQlVJTEQubGF6eUxvYWQgfHwgQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgfHwgQlVJTEQuc3R5bGUpICYmXG4gICAgICAgIChob3N0UmVmLiRmbGFncyQgJiAzMiAvKiBIT1NUX0ZMQUdTLmhhc0luaXRpYWxpemVkQ29tcG9uZW50ICovKSA9PT0gMCkge1xuICAgICAgICBpZiAoQlVJTEQubGF6eUxvYWQgfHwgQlVJTEQuaHlkcmF0ZUNsaWVudFNpZGUpIHtcbiAgICAgICAgICAgIC8vIHdlIGhhdmVuJ3QgaW5pdGlhbGl6ZWQgdGhpcyBlbGVtZW50IHlldFxuICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDMyIC8qIEhPU1RfRkxBR1MuaGFzSW5pdGlhbGl6ZWRDb21wb25lbnQgKi87XG4gICAgICAgICAgICAvLyBsYXp5IGxvYWRlZCBjb21wb25lbnRzXG4gICAgICAgICAgICAvLyByZXF1ZXN0IHRoZSBjb21wb25lbnQncyBpbXBsZW1lbnRhdGlvbiB0byBiZVxuICAgICAgICAgICAgLy8gd2lyZWQgdXAgd2l0aCB0aGUgaG9zdCBlbGVtZW50XG4gICAgICAgICAgICBDc3RyID0gbG9hZE1vZHVsZShjbXBNZXRhLCBob3N0UmVmLCBobXJWZXJzaW9uSWQpO1xuICAgICAgICAgICAgaWYgKENzdHIudGhlbikge1xuICAgICAgICAgICAgICAgIC8vIEF3YWl0IGNyZWF0ZXMgYSBtaWNyby10YXNrIGF2b2lkIGlmIHBvc3NpYmxlXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kTG9hZCA9IHVuaXF1ZVRpbWUoYHN0OmxvYWQ6JHtjbXBNZXRhLiR0YWdOYW1lJH06JHtob3N0UmVmLiRtb2RlTmFtZSR9YCwgYFtTdGVuY2lsXSBMb2FkIG1vZHVsZSBmb3IgPCR7Y21wTWV0YS4kdGFnTmFtZSR9PmApO1xuICAgICAgICAgICAgICAgIENzdHIgPSBhd2FpdCBDc3RyO1xuICAgICAgICAgICAgICAgIGVuZExvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoQlVJTEQuaXNEZXYgfHwgQlVJTEQuaXNEZWJ1ZykgJiYgIUNzdHIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbnN0cnVjdG9yIGZvciBcIiR7Y21wTWV0YS4kdGFnTmFtZSR9IyR7aG9zdFJlZi4kbW9kZU5hbWUkfVwiIHdhcyBub3QgZm91bmRgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC5tZW1iZXIgJiYgIUNzdHIuaXNQcm94aWVkKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UndmUgbmV2ZXIgcHJveGllZCB0aGlzIENvbnN0cnVjdG9yIGJlZm9yZVxuICAgICAgICAgICAgICAgIC8vIGxldCdzIGFkZCB0aGUgZ2V0dGVycy9zZXR0ZXJzIHRvIGl0cyBwcm90b3R5cGUgYmVmb3JlXG4gICAgICAgICAgICAgICAgLy8gdGhlIGZpcnN0IHRpbWUgd2UgY3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBpbXBsZW1lbnRhdGlvblxuICAgICAgICAgICAgICAgIGlmIChCVUlMRC53YXRjaENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNtcE1ldGEuJHdhdGNoZXJzJCA9IENzdHIud2F0Y2hlcnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb3h5Q29tcG9uZW50KENzdHIsIGNtcE1ldGEsIDIgLyogUFJPWFlfRkxBR1MucHJveHlTdGF0ZSAqLyk7XG4gICAgICAgICAgICAgICAgQ3N0ci5pc1Byb3hpZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZW5kTmV3SW5zdGFuY2UgPSBjcmVhdGVUaW1lKCdjcmVhdGVJbnN0YW5jZScsIGNtcE1ldGEuJHRhZ05hbWUkKTtcbiAgICAgICAgICAgIC8vIG9rLCB0aW1lIHRvIGNvbnN0cnVjdCB0aGUgaW5zdGFuY2VcbiAgICAgICAgICAgIC8vIGJ1dCBsZXQncyBrZWVwIHRyYWNrIG9mIHdoZW4gd2Ugc3RhcnQgYW5kIHN0b3BcbiAgICAgICAgICAgIC8vIHNvIHRoYXQgdGhlIGdldHRlcnMvc2V0dGVycyBkb24ndCBpbmNvcnJlY3RseSBzdGVwIG9uIGRhdGFcbiAgICAgICAgICAgIGlmIChCVUlMRC5tZW1iZXIpIHtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gOCAvKiBIT1NUX0ZMQUdTLmlzQ29uc3RydWN0aW5nSW5zdGFuY2UgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zdHJ1Y3QgdGhlIGxhenktbG9hZGVkIGNvbXBvbmVudCBpbXBsZW1lbnRhdGlvblxuICAgICAgICAgICAgLy8gcGFzc2luZyB0aGUgaG9zdFJlZiBpcyB2ZXJ5IGltcG9ydGFudCBkdXJpbmdcbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdGlvbiBpbiBvcmRlciB0byBkaXJlY3RseSB3aXJlIHRvZ2V0aGVyIHRoZVxuICAgICAgICAgICAgLy8gaG9zdCBlbGVtZW50IGFuZCB0aGUgbGF6eS1sb2FkZWQgaW5zdGFuY2VcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbmV3IENzdHIoaG9zdFJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGVFcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC5tZW1iZXIpIHtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgJj0gfjggLyogSE9TVF9GTEFHUy5pc0NvbnN0cnVjdGluZ0luc3RhbmNlICovO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELndhdGNoQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMTI4IC8qIEhPU1RfRkxBR1MuaXNXYXRjaFJlYWR5ICovO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW5kTmV3SW5zdGFuY2UoKTtcbiAgICAgICAgICAgIGZpcmVDb25uZWN0ZWRDYWxsYmFjayhob3N0UmVmLiRsYXp5SW5zdGFuY2UkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHN5bmMgY29uc3RydWN0b3IgY29tcG9uZW50XG4gICAgICAgICAgICBDc3RyID0gZWxtLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDMyIC8qIEhPU1RfRkxBR1MuaGFzSW5pdGlhbGl6ZWRDb21wb25lbnQgKi87XG4gICAgICAgICAgICAvLyB3YWl0IGZvciB0aGUgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5IHRvIG1hcmsgdGhlIGNvbXBvbmVudCBhcyByZWFkeSBiZWZvcmUgc2V0dGluZyBgaXNXYXRjaFJlYWR5YC4gT3RoZXJ3aXNlLFxuICAgICAgICAgICAgLy8gd2F0Y2hlcnMgbWF5IGZpcmUgcHJlbWF0dXJlbHkgaWYgYGN1c3RvbUVsZW1lbnRzLmdldCgpYC9gY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoKWAgcmVzb2x2ZXMgX2JlZm9yZV9cbiAgICAgICAgICAgIC8vIFN0ZW5jaWwgaGFzIGNvbXBsZXRlZCBpbnN0YW50aWF0aW5nIHRoZSBjb21wb25lbnQuXG4gICAgICAgICAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZChjbXBNZXRhLiR0YWdOYW1lJCkudGhlbigoKSA9PiAoaG9zdFJlZi4kZmxhZ3MkIHw9IDEyOCAvKiBIT1NUX0ZMQUdTLmlzV2F0Y2hSZWFkeSAqLykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5zdHlsZSAmJiBDc3RyLnN0eWxlKSB7XG4gICAgICAgICAgICAvLyB0aGlzIGNvbXBvbmVudCBoYXMgc3R5bGVzIGJ1dCB3ZSBoYXZlbid0IHJlZ2lzdGVyZWQgdGhlbSB5ZXRcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IENzdHIuc3R5bGU7XG4gICAgICAgICAgICBpZiAoQlVJTEQubW9kZSAmJiB0eXBlb2Ygc3R5bGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBzdHlsZVsoaG9zdFJlZi4kbW9kZU5hbWUkID0gY29tcHV0ZU1vZGUoZWxtKSldO1xuICAgICAgICAgICAgICAgIGlmIChCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSAmJiBob3N0UmVmLiRtb2RlTmFtZSQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZSgncy1tb2RlJywgaG9zdFJlZi4kbW9kZU5hbWUkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzY29wZUlkID0gZ2V0U2NvcGVJZChjbXBNZXRhLCBob3N0UmVmLiRtb2RlTmFtZSQpO1xuICAgICAgICAgICAgaWYgKCFzdHlsZXMuaGFzKHNjb3BlSWQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kUmVnaXN0ZXJTdHlsZXMgPSBjcmVhdGVUaW1lKCdyZWdpc3RlclN0eWxlcycsIGNtcE1ldGEuJHRhZ05hbWUkKTtcbiAgICAgICAgICAgICAgICBpZiAoIUJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlICYmXG4gICAgICAgICAgICAgICAgICAgIEJVSUxELnNoYWRvd0RvbSAmJlxuICAgICAgICAgICAgICAgICAgICBCVUlMRC5zaGFkb3dEb21TaGltICYmXG4gICAgICAgICAgICAgICAgICAgIGNtcE1ldGEuJGZsYWdzJCAmIDggLyogQ01QX0ZMQUdTLm5lZWRzU2hhZG93RG9tU2hpbSAqLykge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IGF3YWl0IGltcG9ydCgnLi9zaGFkb3ctY3NzLmpzJykudGhlbigobSkgPT4gbS5zY29wZUNzcyhzdHlsZSwgc2NvcGVJZCwgZmFsc2UpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJTdHlsZShzY29wZUlkLCBzdHlsZSwgISEoY21wTWV0YS4kZmxhZ3MkICYgMSAvKiBDTVBfRkxBR1Muc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykpO1xuICAgICAgICAgICAgICAgIGVuZFJlZ2lzdGVyU3R5bGVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd2UndmUgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgYSBsYXp5IGluc3RhbmNlXG4gICAgY29uc3QgYW5jZXN0b3JDb21wb25lbnQgPSBob3N0UmVmLiRhbmNlc3RvckNvbXBvbmVudCQ7XG4gICAgY29uc3Qgc2NoZWR1bGUgPSAoKSA9PiBzY2hlZHVsZVVwZGF0ZShob3N0UmVmLCB0cnVlKTtcbiAgICBpZiAoQlVJTEQuYXN5bmNMb2FkaW5nICYmIGFuY2VzdG9yQ29tcG9uZW50ICYmIGFuY2VzdG9yQ29tcG9uZW50WydzLXJjJ10pIHtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgaW5pdGlhbCBsb2FkIGFuZCB0aGlzIGNvbXBvbmVudCBpdCBoYXMgYW4gYW5jZXN0b3IgY29tcG9uZW50XG4gICAgICAgIC8vIGJ1dCB0aGUgYW5jZXN0b3IgY29tcG9uZW50IGhhcyBOT1QgZmlyZWQgaXRzIHdpbGwgdXBkYXRlIGxpZmVjeWNsZSB5ZXRcbiAgICAgICAgLy8gc28gbGV0J3MganVzdCBjb29sIG91ciBqZXRzIGFuZCB3YWl0IGZvciB0aGUgYW5jZXN0b3IgdG8gY29udGludWUgZmlyc3RcbiAgICAgICAgLy8gdGhpcyB3aWxsIGdldCBmaXJlZCBvZmYgd2hlbiB0aGUgYW5jZXN0b3IgY29tcG9uZW50XG4gICAgICAgIC8vIGZpbmFsbHkgZ2V0cyBhcm91bmQgdG8gcmVuZGVyaW5nIGl0cyBsYXp5IHNlbGZcbiAgICAgICAgLy8gZmlyZSBvZmYgdGhlIGluaXRpYWwgdXBkYXRlXG4gICAgICAgIGFuY2VzdG9yQ29tcG9uZW50WydzLXJjJ10ucHVzaChzY2hlZHVsZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzY2hlZHVsZSgpO1xuICAgIH1cbn07XG5jb25zdCBmaXJlQ29ubmVjdGVkQ2FsbGJhY2sgPSAoaW5zdGFuY2UpID0+IHtcbiAgICBpZiAoQlVJTEQubGF6eUxvYWQgJiYgQlVJTEQuY29ubmVjdGVkQ2FsbGJhY2spIHtcbiAgICAgICAgc2FmZUNhbGwoaW5zdGFuY2UsICdjb25uZWN0ZWRDYWxsYmFjaycpO1xuICAgIH1cbn07XG5jb25zdCBjb25uZWN0ZWRDYWxsYmFjayA9IChlbG0pID0+IHtcbiAgICBpZiAoKHBsdC4kZmxhZ3MkICYgMSAvKiBQTEFURk9STV9GTEFHUy5pc1RtcERpc2Nvbm5lY3RlZCAqLykgPT09IDApIHtcbiAgICAgICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYoZWxtKTtcbiAgICAgICAgY29uc3QgY21wTWV0YSA9IGhvc3RSZWYuJGNtcE1ldGEkO1xuICAgICAgICBjb25zdCBlbmRDb25uZWN0ZWQgPSBjcmVhdGVUaW1lKCdjb25uZWN0ZWRDYWxsYmFjaycsIGNtcE1ldGEuJHRhZ05hbWUkKTtcbiAgICAgICAgaWYgKEJVSUxELmhvc3RMaXN0ZW5lclRhcmdldFBhcmVudCkge1xuICAgICAgICAgICAgLy8gb25seSBydW4gaWYgd2UgaGF2ZSBsaXN0ZW5lcnMgYmVpbmcgYXR0YWNoZWQgdG8gYSBwYXJlbnRcbiAgICAgICAgICAgIGFkZEhvc3RFdmVudExpc3RlbmVycyhlbG0sIGhvc3RSZWYsIGNtcE1ldGEuJGxpc3RlbmVycyQsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGhvc3RSZWYuJGZsYWdzJCAmIDEgLyogSE9TVF9GTEFHUy5oYXNDb25uZWN0ZWQgKi8pKSB7XG4gICAgICAgICAgICAvLyBmaXJzdCB0aW1lIHRoaXMgY29tcG9uZW50IGhhcyBjb25uZWN0ZWRcbiAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAxIC8qIEhPU1RfRkxBR1MuaGFzQ29ubmVjdGVkICovO1xuICAgICAgICAgICAgbGV0IGhvc3RJZDtcbiAgICAgICAgICAgIGlmIChCVUlMRC5oeWRyYXRlQ2xpZW50U2lkZSkge1xuICAgICAgICAgICAgICAgIGhvc3RJZCA9IGVsbS5nZXRBdHRyaWJ1dGUoSFlEUkFURV9JRCk7XG4gICAgICAgICAgICAgICAgaWYgKGhvc3RJZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQlVJTEQuc2hhZG93RG9tICYmIHN1cHBvcnRzU2hhZG93ICYmIGNtcE1ldGEuJGZsYWdzJCAmIDEgLyogQ01QX0ZMQUdTLnNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjb3BlSWQgPSBCVUlMRC5tb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhZGRTdHlsZShlbG0uc2hhZG93Um9vdCwgY21wTWV0YSwgZWxtLmdldEF0dHJpYnV0ZSgncy1tb2RlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhZGRTdHlsZShlbG0uc2hhZG93Um9vdCwgY21wTWV0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbG0uY2xhc3NMaXN0LnJlbW92ZShzY29wZUlkICsgJy1oJywgc2NvcGVJZCArICctcycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxpemVDbGllbnRIeWRyYXRlKGVsbSwgY21wTWV0YS4kdGFnTmFtZSQsIGhvc3RJZCwgaG9zdFJlZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uICYmICFob3N0SWQpIHtcbiAgICAgICAgICAgICAgICAvLyBpbml0VXBkYXRlXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHNsb3QgcG9seWZpbGwgaXMgcmVxdWlyZWQgd2UnbGwgbmVlZCB0byBwdXQgc29tZSBub2Rlc1xuICAgICAgICAgICAgICAgIC8vIGluIGhlcmUgdG8gYWN0IGFzIG9yaWdpbmFsIGNvbnRlbnQgYW5jaG9ycyBhcyB3ZSBtb3ZlIG5vZGVzIGFyb3VuZFxuICAgICAgICAgICAgICAgIC8vIGhvc3QgZWxlbWVudCBoYXMgYmVlbiBjb25uZWN0ZWQgdG8gdGhlIERPTVxuICAgICAgICAgICAgICAgIGlmIChCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSB8fFxuICAgICAgICAgICAgICAgICAgICAoKEJVSUxELnNsb3QgfHwgQlVJTEQuc2hhZG93RG9tKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgY21wTWV0YS4kZmxhZ3MkICYgKDQgLyogQ01QX0ZMQUdTLmhhc1Nsb3RSZWxvY2F0aW9uICovIHwgOCAvKiBDTVBfRkxBR1MubmVlZHNTaGFkb3dEb21TaGltICovKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29udGVudFJlZmVyZW5jZShlbG0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC5hc3luY0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAvLyBmaW5kIHRoZSBmaXJzdCBhbmNlc3RvciBjb21wb25lbnQgKGlmIHRoZXJlIGlzIG9uZSkgYW5kIHJlZ2lzdGVyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb21wb25lbnQgYXMgb25lIG9mIHRoZSBhY3RpdmVseSBsb2FkaW5nIGNoaWxkIGNvbXBvbmVudHMgZm9yIGl0cyBhbmNlc3RvclxuICAgICAgICAgICAgICAgIGxldCBhbmNlc3RvckNvbXBvbmVudCA9IGVsbTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoKGFuY2VzdG9yQ29tcG9uZW50ID0gYW5jZXN0b3JDb21wb25lbnQucGFyZW50Tm9kZSB8fCBhbmNlc3RvckNvbXBvbmVudC5ob3N0KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjbGltYiB1cCB0aGUgYW5jZXN0b3JzIGxvb2tpbmcgZm9yIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgICAgICAvLyBjb21wb25lbnQgdGhhdCBoYXNuJ3QgZmluaXNoZWQgaXRzIGxpZmVjeWNsZSB1cGRhdGUgeWV0XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQlVJTEQuaHlkcmF0ZUNsaWVudFNpZGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2VzdG9yQ29tcG9uZW50Lm5vZGVUeXBlID09PSAxIC8qIE5PREVfVFlQRS5FbGVtZW50Tm9kZSAqLyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYW5jZXN0b3JDb21wb25lbnQuaGFzQXR0cmlidXRlKCdzLWlkJykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2VzdG9yQ29tcG9uZW50WydzLXAnXSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2VzdG9yQ29tcG9uZW50WydzLXAnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZm91bmQgdGhpcyBjb21wb25lbnRzIGZpcnN0IGFuY2VzdG9yIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGlzIGNvbXBvbmVudCdzIGFuY2VzdG9yIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNoVG9BbmNlc3Rvcihob3N0UmVmLCAoaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkID0gYW5jZXN0b3JDb21wb25lbnQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTGF6eSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL3dlYi1jb21wb25lbnRzL2Jlc3QtcHJhY3RpY2VzI2xhenktcHJvcGVydGllc1xuICAgICAgICAgICAgaWYgKEJVSUxELnByb3AgJiYgIUJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlICYmIGNtcE1ldGEuJG1lbWJlcnMkKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY21wTWV0YS4kbWVtYmVycyQpLm1hcCgoW21lbWJlck5hbWUsIFttZW1iZXJGbGFnc11dKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZW1iZXJGbGFncyAmIDMxIC8qIE1FTUJFUl9GTEFHUy5Qcm9wICovICYmIGVsbS5oYXNPd25Qcm9wZXJ0eShtZW1iZXJOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbG1bbWVtYmVyTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZWxtW21lbWJlck5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtW21lbWJlck5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC5pbml0aWFsaXplTmV4dFRpY2spIHtcbiAgICAgICAgICAgICAgICAvLyBjb25uZWN0ZWRDYWxsYmFjaywgdGFza1F1ZXVlLCBpbml0aWFsTG9hZFxuICAgICAgICAgICAgICAgIC8vIGFuZ3VsYXIgc2V0cyBhdHRyaWJ1dGUgQUZURVIgY29ubmVjdENhbGxiYWNrXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTg5MDlcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xOTk0MFxuICAgICAgICAgICAgICAgIG5leHRUaWNrKCgpID0+IGluaXRpYWxpemVDb21wb25lbnQoZWxtLCBob3N0UmVmLCBjbXBNZXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplQ29tcG9uZW50KGVsbSwgaG9zdFJlZiwgY21wTWV0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBub3QgdGhlIGZpcnN0IHRpbWUgdGhpcyBoYXMgY29ubmVjdGVkXG4gICAgICAgICAgICAvLyByZWF0dGFjaCBhbnkgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBob3N0XG4gICAgICAgICAgICAvLyBzaW5jZSB0aGV5IHdvdWxkIGhhdmUgYmVlbiByZW1vdmVkIHdoZW4gZGlzY29ubmVjdGVkXG4gICAgICAgICAgICBhZGRIb3N0RXZlbnRMaXN0ZW5lcnMoZWxtLCBob3N0UmVmLCBjbXBNZXRhLiRsaXN0ZW5lcnMkLCBmYWxzZSk7XG4gICAgICAgICAgICAvLyBmaXJlIG9mZiBjb25uZWN0ZWRDYWxsYmFjaygpIG9uIGNvbXBvbmVudCBpbnN0YW5jZVxuICAgICAgICAgICAgZmlyZUNvbm5lY3RlZENhbGxiYWNrKGhvc3RSZWYuJGxhenlJbnN0YW5jZSQpO1xuICAgICAgICB9XG4gICAgICAgIGVuZENvbm5lY3RlZCgpO1xuICAgIH1cbn07XG5jb25zdCBzZXRDb250ZW50UmVmZXJlbmNlID0gKGVsbSkgPT4ge1xuICAgIC8vIG9ubHkgcmVxdWlyZWQgd2hlbiB3ZSdyZSBOT1QgdXNpbmcgbmF0aXZlIHNoYWRvdyBkb20gKHNsb3QpXG4gICAgLy8gb3IgdGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBuYXRpdmUgc2hhZG93IGRvbVxuICAgIC8vIGFuZCB0aGlzIGhvc3QgZWxlbWVudCB3YXMgTk9UIGNyZWF0ZWQgd2l0aCBTU1JcbiAgICAvLyBsZXQncyBwaWNrIG91dCB0aGUgaW5uZXIgY29udGVudCBmb3Igc2xvdCBwcm9qZWN0aW9uXG4gICAgLy8gY3JlYXRlIGEgbm9kZSB0byByZXByZXNlbnQgd2hlcmUgdGhlIG9yaWdpbmFsXG4gICAgLy8gY29udGVudCB3YXMgZmlyc3QgcGxhY2VkLCB3aGljaCBpcyB1c2VmdWwgbGF0ZXIgb25cbiAgICBjb25zdCBjb250ZW50UmVmRWxtID0gKGVsbVsncy1jciddID0gZG9jLmNyZWF0ZUNvbW1lbnQoQlVJTEQuaXNEZWJ1ZyA/IGBjb250ZW50LXJlZiAoaG9zdD0ke2VsbS5sb2NhbE5hbWV9KWAgOiAnJykpO1xuICAgIGNvbnRlbnRSZWZFbG1bJ3MtY24nXSA9IHRydWU7XG4gICAgZWxtLmluc2VydEJlZm9yZShjb250ZW50UmVmRWxtLCBlbG0uZmlyc3RDaGlsZCk7XG59O1xuY29uc3QgZGlzY29ubmVjdGVkQ2FsbGJhY2sgPSAoZWxtKSA9PiB7XG4gICAgaWYgKChwbHQuJGZsYWdzJCAmIDEgLyogUExBVEZPUk1fRkxBR1MuaXNUbXBEaXNjb25uZWN0ZWQgKi8pID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGhvc3RSZWYgPSBnZXRIb3N0UmVmKGVsbSk7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gQlVJTEQubGF6eUxvYWQgPyBob3N0UmVmLiRsYXp5SW5zdGFuY2UkIDogZWxtO1xuICAgICAgICBpZiAoQlVJTEQuaG9zdExpc3RlbmVyKSB7XG4gICAgICAgICAgICBpZiAoaG9zdFJlZi4kcm1MaXN0ZW5lcnMkKSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kcm1MaXN0ZW5lcnMkLm1hcCgocm1MaXN0ZW5lcikgPT4gcm1MaXN0ZW5lcigpKTtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRybUxpc3RlbmVycyQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2xlYXIgQ1NTIHZhci1zaGltIHRyYWNraW5nXG4gICAgICAgIGlmIChCVUlMRC5jc3NWYXJTaGltICYmIHBsdC4kY3NzU2hpbSQpIHtcbiAgICAgICAgICAgIHBsdC4kY3NzU2hpbSQucmVtb3ZlSG9zdChlbG0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5sYXp5TG9hZCAmJiBCVUlMRC5kaXNjb25uZWN0ZWRDYWxsYmFjaykge1xuICAgICAgICAgICAgc2FmZUNhbGwoaW5zdGFuY2UsICdkaXNjb25uZWN0ZWRDYWxsYmFjaycpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5jbXBEaWRVbmxvYWQpIHtcbiAgICAgICAgICAgIHNhZmVDYWxsKGluc3RhbmNlLCAnY29tcG9uZW50RGlkVW5sb2FkJyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IChDc3RyLCBjb21wYWN0TWV0YSkgPT4ge1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZShjb21wYWN0TWV0YVsxXSwgcHJveHlDdXN0b21FbGVtZW50KENzdHIsIGNvbXBhY3RNZXRhKSk7XG59O1xuY29uc3QgcHJveHlDdXN0b21FbGVtZW50ID0gKENzdHIsIGNvbXBhY3RNZXRhKSA9PiB7XG4gICAgY29uc3QgY21wTWV0YSA9IHtcbiAgICAgICAgJGZsYWdzJDogY29tcGFjdE1ldGFbMF0sXG4gICAgICAgICR0YWdOYW1lJDogY29tcGFjdE1ldGFbMV0sXG4gICAgfTtcbiAgICBpZiAoQlVJTEQubWVtYmVyKSB7XG4gICAgICAgIGNtcE1ldGEuJG1lbWJlcnMkID0gY29tcGFjdE1ldGFbMl07XG4gICAgfVxuICAgIGlmIChCVUlMRC5ob3N0TGlzdGVuZXIpIHtcbiAgICAgICAgY21wTWV0YS4kbGlzdGVuZXJzJCA9IGNvbXBhY3RNZXRhWzNdO1xuICAgIH1cbiAgICBpZiAoQlVJTEQud2F0Y2hDYWxsYmFjaykge1xuICAgICAgICBjbXBNZXRhLiR3YXRjaGVycyQgPSBDc3RyLiR3YXRjaGVycyQ7XG4gICAgfVxuICAgIGlmIChCVUlMRC5yZWZsZWN0KSB7XG4gICAgICAgIGNtcE1ldGEuJGF0dHJzVG9SZWZsZWN0JCA9IFtdO1xuICAgIH1cbiAgICBpZiAoQlVJTEQuc2hhZG93RG9tICYmICFzdXBwb3J0c1NoYWRvdyAmJiBjbXBNZXRhLiRmbGFncyQgJiAxIC8qIENNUF9GTEFHUy5zaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgIGNtcE1ldGEuJGZsYWdzJCB8PSA4IC8qIENNUF9GTEFHUy5uZWVkc1NoYWRvd0RvbVNoaW0gKi87XG4gICAgfVxuICAgIGNvbnN0IG9yaWdpbmFsQ29ubmVjdGVkQ2FsbGJhY2sgPSBDc3RyLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjaztcbiAgICBjb25zdCBvcmlnaW5hbERpc2Nvbm5lY3RlZENhbGxiYWNrID0gQ3N0ci5wcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2s7XG4gICAgT2JqZWN0LmFzc2lnbihDc3RyLnByb3RvdHlwZSwge1xuICAgICAgICBfX3JlZ2lzdGVySG9zdCgpIHtcbiAgICAgICAgICAgIHJlZ2lzdGVySG9zdCh0aGlzLCBjbXBNZXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICBjb25uZWN0ZWRDYWxsYmFjayh0aGlzKTtcbiAgICAgICAgICAgIGlmIChCVUlMRC5jb25uZWN0ZWRDYWxsYmFjayAmJiBvcmlnaW5hbENvbm5lY3RlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxDb25uZWN0ZWRDYWxsYmFjay5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKHRoaXMpO1xuICAgICAgICAgICAgaWYgKEJVSUxELmRpc2Nvbm5lY3RlZENhbGxiYWNrICYmIG9yaWdpbmFsRGlzY29ubmVjdGVkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbERpc2Nvbm5lY3RlZENhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF9fYXR0YWNoU2hhZG93KCkge1xuICAgICAgICAgICAgaWYgKHN1cHBvcnRzU2hhZG93KSB7XG4gICAgICAgICAgICAgICAgaWYgKEJVSUxELnNoYWRvd0RlbGVnYXRlc0ZvY3VzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6ICdvcGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGVnYXRlc0ZvY3VzOiAhIShjbXBNZXRhLiRmbGFncyQgJiAxNiAvKiBDTVBfRkxBR1Muc2hhZG93RGVsZWdhdGVzRm9jdXMgKi8pLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hhZG93Um9vdCA9IHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgQ3N0ci5pcyA9IGNtcE1ldGEuJHRhZ05hbWUkO1xuICAgIHJldHVybiBwcm94eUNvbXBvbmVudChDc3RyLCBjbXBNZXRhLCAxIC8qIFBST1hZX0ZMQUdTLmlzRWxlbWVudENvbnN0cnVjdG9yICovIHwgMiAvKiBQUk9YWV9GTEFHUy5wcm94eVN0YXRlICovKTtcbn07XG5jb25zdCBmb3JjZU1vZGVVcGRhdGUgPSAoZWxtKSA9PiB7XG4gICAgaWYgKEJVSUxELnN0eWxlICYmIEJVSUxELm1vZGUgJiYgIUJVSUxELmxhenlMb2FkKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBjb21wdXRlTW9kZShlbG0pO1xuICAgICAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihlbG0pO1xuICAgICAgICBpZiAoaG9zdFJlZi4kbW9kZU5hbWUkICE9PSBtb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBjbXBNZXRhID0gaG9zdFJlZi4kY21wTWV0YSQ7XG4gICAgICAgICAgICBjb25zdCBvbGRTY29wZUlkID0gZWxtWydzLXNjJ107XG4gICAgICAgICAgICBjb25zdCBzY29wZUlkID0gZ2V0U2NvcGVJZChjbXBNZXRhLCBtb2RlKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZWxtLmNvbnN0cnVjdG9yLnN0eWxlW21vZGVdO1xuICAgICAgICAgICAgY29uc3QgZmxhZ3MgPSBjbXBNZXRhLiRmbGFncyQ7XG4gICAgICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXN0eWxlcy5oYXMoc2NvcGVJZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJTdHlsZShzY29wZUlkLCBzdHlsZSwgISEoZmxhZ3MgJiAxIC8qIENNUF9GTEFHUy5zaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhvc3RSZWYuJG1vZGVOYW1lJCA9IG1vZGU7XG4gICAgICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5yZW1vdmUob2xkU2NvcGVJZCArICctaCcsIG9sZFNjb3BlSWQgKyAnLXMnKTtcbiAgICAgICAgICAgICAgICBhdHRhY2hTdHlsZXMoaG9zdFJlZik7XG4gICAgICAgICAgICAgICAgZm9yY2VVcGRhdGUoZWxtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBwYXRjaENsb25lTm9kZSA9IChIb3N0RWxlbWVudFByb3RvdHlwZSkgPT4ge1xuICAgIGNvbnN0IG9yZ0Nsb25lTm9kZSA9IEhvc3RFbGVtZW50UHJvdG90eXBlLmNsb25lTm9kZTtcbiAgICBIb3N0RWxlbWVudFByb3RvdHlwZS5jbG9uZU5vZGUgPSBmdW5jdGlvbiAoZGVlcCkge1xuICAgICAgICBjb25zdCBzcmNOb2RlID0gdGhpcztcbiAgICAgICAgY29uc3QgaXNTaGFkb3dEb20gPSBCVUlMRC5zaGFkb3dEb20gPyBzcmNOb2RlLnNoYWRvd1Jvb3QgJiYgc3VwcG9ydHNTaGFkb3cgOiBmYWxzZTtcbiAgICAgICAgY29uc3QgY2xvbmVkTm9kZSA9IG9yZ0Nsb25lTm9kZS5jYWxsKHNyY05vZGUsIGlzU2hhZG93RG9tID8gZGVlcCA6IGZhbHNlKTtcbiAgICAgICAgaWYgKEJVSUxELnNsb3QgJiYgIWlzU2hhZG93RG9tICYmIGRlZXApIHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGxldCBzbG90dGVkLCBub25TdGVuY2lsTm9kZTtcbiAgICAgICAgICAgIGNvbnN0IHN0ZW5jaWxQcml2YXRlcyA9IFtcbiAgICAgICAgICAgICAgICAncy1pZCcsXG4gICAgICAgICAgICAgICAgJ3MtY3InLFxuICAgICAgICAgICAgICAgICdzLWxyJyxcbiAgICAgICAgICAgICAgICAncy1yYycsXG4gICAgICAgICAgICAgICAgJ3Mtc2MnLFxuICAgICAgICAgICAgICAgICdzLXAnLFxuICAgICAgICAgICAgICAgICdzLWNuJyxcbiAgICAgICAgICAgICAgICAncy1zcicsXG4gICAgICAgICAgICAgICAgJ3Mtc24nLFxuICAgICAgICAgICAgICAgICdzLWhuJyxcbiAgICAgICAgICAgICAgICAncy1vbCcsXG4gICAgICAgICAgICAgICAgJ3MtbnInLFxuICAgICAgICAgICAgICAgICdzLXNpJyxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBmb3IgKDsgaSA8IHNyY05vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNsb3R0ZWQgPSBzcmNOb2RlLmNoaWxkTm9kZXNbaV1bJ3MtbnInXTtcbiAgICAgICAgICAgICAgICBub25TdGVuY2lsTm9kZSA9IHN0ZW5jaWxQcml2YXRlcy5ldmVyeSgocHJpdmF0ZUZpZWxkKSA9PiAhc3JjTm9kZS5jaGlsZE5vZGVzW2ldW3ByaXZhdGVGaWVsZF0pO1xuICAgICAgICAgICAgICAgIGlmIChzbG90dGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChCVUlMRC5hcHBlbmRDaGlsZFNsb3RGaXggJiYgY2xvbmVkTm9kZS5fX2FwcGVuZENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZWROb2RlLl9fYXBwZW5kQ2hpbGQoc2xvdHRlZC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVkTm9kZS5hcHBlbmRDaGlsZChzbG90dGVkLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vblN0ZW5jaWxOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb25lZE5vZGUuYXBwZW5kQ2hpbGQoc3JjTm9kZS5jaGlsZE5vZGVzW2ldLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbG9uZWROb2RlO1xuICAgIH07XG59O1xuY29uc3QgcGF0Y2hTbG90QXBwZW5kQ2hpbGQgPSAoSG9zdEVsZW1lbnRQcm90b3R5cGUpID0+IHtcbiAgICBIb3N0RWxlbWVudFByb3RvdHlwZS5fX2FwcGVuZENoaWxkID0gSG9zdEVsZW1lbnRQcm90b3R5cGUuYXBwZW5kQ2hpbGQ7XG4gICAgSG9zdEVsZW1lbnRQcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiAobmV3Q2hpbGQpIHtcbiAgICAgICAgY29uc3Qgc2xvdE5hbWUgPSAobmV3Q2hpbGRbJ3Mtc24nXSA9IGdldFNsb3ROYW1lKG5ld0NoaWxkKSk7XG4gICAgICAgIGNvbnN0IHNsb3ROb2RlID0gZ2V0SG9zdFNsb3ROb2RlKHRoaXMuY2hpbGROb2Rlcywgc2xvdE5hbWUpO1xuICAgICAgICBpZiAoc2xvdE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNsb3RDaGlsZE5vZGVzID0gZ2V0SG9zdFNsb3RDaGlsZE5vZGVzKHNsb3ROb2RlLCBzbG90TmFtZSk7XG4gICAgICAgICAgICBjb25zdCBhcHBlbmRBZnRlciA9IHNsb3RDaGlsZE5vZGVzW3Nsb3RDaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgcmV0dXJuIGFwcGVuZEFmdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCBhcHBlbmRBZnRlci5uZXh0U2libGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX19hcHBlbmRDaGlsZChuZXdDaGlsZCk7XG4gICAgfTtcbn07XG4vKipcbiAqIFBhdGNoZXMgdGhlIHRleHQgY29udGVudCBvZiBhbiB1bm5hbWVkIHNsb3R0ZWQgbm9kZSBpbnNpZGUgYSBzY29wZWQgY29tcG9uZW50XG4gKiBAcGFyYW0gaG9zdEVsZW1lbnRQcm90b3R5cGUgdGhlIGBFbGVtZW50YCB0byBiZSBwYXRjaGVkXG4gKiBAcGFyYW0gY21wTWV0YSBjb21wb25lbnQgcnVudGltZSBtZXRhZGF0YSB1c2VkIHRvIGRldGVybWluZSBpZiB0aGUgY29tcG9uZW50IHNob3VsZCBiZSBwYXRjaGVkIG9yIG5vdFxuICovXG5jb25zdCBwYXRjaFRleHRDb250ZW50ID0gKGhvc3RFbGVtZW50UHJvdG90eXBlLCBjbXBNZXRhKSA9PiB7XG4gICAgaWYgKEJVSUxELnNjb3BlZCAmJiBjbXBNZXRhLiRmbGFncyQgJiAyIC8qIENNUF9GTEFHUy5zY29wZWRDc3NFbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5vZGUucHJvdG90eXBlLCAndGV4dENvbnRlbnQnKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGhvc3RFbGVtZW50UHJvdG90eXBlLCAnX190ZXh0Q29udGVudCcsIGRlc2NyaXB0b3IpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaG9zdEVsZW1lbnRQcm90b3R5cGUsICd0ZXh0Q29udGVudCcsIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSAnZGVmYXVsdCBzbG90Jywgd2hpY2ggd291bGQgYmUgdGhlIGZpcnN0IHNsb3QgaW4gYSBzaGFkb3cgdHJlZSAoaWYgd2Ugd2VyZSB1c2luZyBvbmUpLCB3aG9zZSBuYW1lIGlzXG4gICAgICAgICAgICAgICAgLy8gdGhlIGVtcHR5IHN0cmluZ1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsb3ROb2RlID0gZ2V0SG9zdFNsb3ROb2RlKHRoaXMuY2hpbGROb2RlcywgJycpO1xuICAgICAgICAgICAgICAgIC8vIHdoZW4gYSBzbG90IG5vZGUgaXMgZm91bmQsIHRoZSB0ZXh0Q29udGVudCBfbWF5XyBiZSBmb3VuZCBpbiB0aGUgbmV4dCBzaWJsaW5nICh0ZXh0KSBub2RlLCBkZXBlbmRpbmcgb24gaG93XG4gICAgICAgICAgICAgICAgLy8gbm9kZXMgd2VyZSByZW9yZGVyZWQgZHVyaW5nIHRoZSB2ZG9tIHJlbmRlci4gZmlyc3QgdHJ5IHRvIGdldCB0aGUgdGV4dCBjb250ZW50IGZyb20gdGhlIHNpYmxpbmcuXG4gICAgICAgICAgICAgICAgaWYgKCgoX2EgPSBzbG90Tm9kZSA9PT0gbnVsbCB8fCBzbG90Tm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xvdE5vZGUubmV4dFNpYmxpbmcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ub2RlVHlwZSkgPT09IDMgLyogTk9ERV9UWVBFUy5URVhUX05PREUgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNsb3ROb2RlLm5leHRTaWJsaW5nLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzbG90Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2xvdE5vZGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBmYWxsYmFjayB0byB0aGUgb3JpZ2luYWwgaW1wbGVtZW50YXRpb25cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX190ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgJ2RlZmF1bHQgc2xvdCcsIHdoaWNoIHdvdWxkIGJlIHRoZSBmaXJzdCBzbG90IGluIGEgc2hhZG93IHRyZWUgKGlmIHdlIHdlcmUgdXNpbmcgb25lKSwgd2hvc2UgbmFtZSBpc1xuICAgICAgICAgICAgICAgIC8vIHRoZSBlbXB0eSBzdHJpbmdcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90Tm9kZSA9IGdldEhvc3RTbG90Tm9kZSh0aGlzLmNoaWxkTm9kZXMsICcnKTtcbiAgICAgICAgICAgICAgICAvLyB3aGVuIGEgc2xvdCBub2RlIGlzIGZvdW5kLCB0aGUgdGV4dENvbnRlbnQgX21heV8gbmVlZCB0byBiZSBwbGFjZWQgaW4gdGhlIG5leHQgc2libGluZyAodGV4dCkgbm9kZSxcbiAgICAgICAgICAgICAgICAvLyBkZXBlbmRpbmcgb24gaG93IG5vZGVzIHdlcmUgcmVvcmRlcmVkIGR1cmluZyB0aGUgdmRvbSByZW5kZXIuIGZpcnN0IHRyeSB0byBzZXQgdGhlIHRleHQgY29udGVudCBvbiB0aGVcbiAgICAgICAgICAgICAgICAvLyBzaWJsaW5nLlxuICAgICAgICAgICAgICAgIGlmICgoKF9hID0gc2xvdE5vZGUgPT09IG51bGwgfHwgc2xvdE5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsb3ROb2RlLm5leHRTaWJsaW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eubm9kZVR5cGUpID09PSAzIC8qIE5PREVfVFlQRVMuVEVYVF9OT0RFICovKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3ROb2RlLm5leHRTaWJsaW5nLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNsb3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3ROb2RlLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBjb3VsZG4ndCBmaW5kIGEgc2xvdCwgYnV0IHRoYXQgZG9lc24ndCBtZWFuIHRoYXQgdGhlcmUgaXNuJ3Qgb25lLiBpZiB0aGlzIGNoZWNrIHJhbiBiZWZvcmUgdGhlIERPTVxuICAgICAgICAgICAgICAgICAgICAvLyBsb2FkZWQsIHdlIGNvdWxkIGhhdmUgbWlzc2VkIGl0LiBjaGVjayBmb3IgYSBjb250ZW50IHJlZmVyZW5jZSBlbGVtZW50IG9uIHRoZSBzY29wZWQgY29tcG9uZW50IGFuZCBpbnNlcnRcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQgdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRSZWZFbG0gPSB0aGlzWydzLWNyJ107XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50UmVmRWxtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydEJlZm9yZShjb250ZW50UmVmRWxtLCB0aGlzLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmNvbnN0IHBhdGNoQ2hpbGRTbG90Tm9kZXMgPSAoZWxtLCBjbXBNZXRhKSA9PiB7XG4gICAgY2xhc3MgRmFrZU5vZGVMaXN0IGV4dGVuZHMgQXJyYXkge1xuICAgICAgICBpdGVtKG4pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW25dO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjbXBNZXRhLiRmbGFncyQgJiA4IC8qIENNUF9GTEFHUy5uZWVkc1NoYWRvd0RvbVNoaW0gKi8pIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2Rlc0ZuID0gZWxtLl9fbG9va3VwR2V0dGVyX18oJ2NoaWxkTm9kZXMnKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsbSwgJ2NoaWxkcmVuJywge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubWFwKChuKSA9PiBuLm5vZGVUeXBlID09PSAxKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxtLCAnY2hpbGRFbGVtZW50Q291bnQnLCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsbS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsbSwgJ2NoaWxkTm9kZXMnLCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXNGbi5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmICgocGx0LiRmbGFncyQgJiAxIC8qIFBMQVRGT1JNX0ZMQUdTLmlzVG1wRGlzY29ubmVjdGVkICovKSA9PT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICBnZXRIb3N0UmVmKHRoaXMpLiRmbGFncyQgJiAyIC8qIEhPU1RfRkxBR1MuaGFzUmVuZGVyZWQgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZha2VOb2RlTGlzdCgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNsb3QgPSBjaGlsZE5vZGVzW2ldWydzLW5yJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHNsb3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBGYWtlTm9kZUxpc3QuZnJvbShjaGlsZE5vZGVzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5jb25zdCBnZXRTbG90TmFtZSA9IChub2RlKSA9PiBub2RlWydzLXNuJ10gfHwgKG5vZGUubm9kZVR5cGUgPT09IDEgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoJ3Nsb3QnKSkgfHwgJyc7XG4vKipcbiAqIFJlY3Vyc2l2ZWx5IHNlYXJjaGVzIGEgc2VyaWVzIG9mIGNoaWxkIG5vZGVzIGZvciBhIHNsb3Qgd2l0aCB0aGUgcHJvdmlkZWQgbmFtZS5cbiAqIEBwYXJhbSBjaGlsZE5vZGVzIHRoZSBub2RlcyB0byBzZWFyY2ggZm9yIGEgc2xvdCB3aXRoIGEgc3BlY2lmaWMgbmFtZS5cbiAqIEBwYXJhbSBzbG90TmFtZSB0aGUgbmFtZSBvZiB0aGUgc2xvdCB0byBtYXRjaCBvbi5cbiAqIEByZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBzbG90IG5vZGUgdGhhdCBtYXRjaGVzIHRoZSBwcm92aWRlZCBuYW1lLCBgbnVsbGAgb3RoZXJ3aXNlXG4gKi9cbmNvbnN0IGdldEhvc3RTbG90Tm9kZSA9IChjaGlsZE5vZGVzLCBzbG90TmFtZSkgPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgY2hpbGROb2RlO1xuICAgIGZvciAoOyBpIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2ldO1xuICAgICAgICBpZiAoY2hpbGROb2RlWydzLXNyJ10gJiYgY2hpbGROb2RlWydzLXNuJ10gPT09IHNsb3ROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkTm9kZSA9IGdldEhvc3RTbG90Tm9kZShjaGlsZE5vZGUuY2hpbGROb2Rlcywgc2xvdE5hbWUpO1xuICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcbmNvbnN0IGdldEhvc3RTbG90Q2hpbGROb2RlcyA9IChuLCBzbG90TmFtZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBbbl07XG4gICAgd2hpbGUgKChuID0gbi5uZXh0U2libGluZykgJiYgblsncy1zbiddID09PSBzbG90TmFtZSkge1xuICAgICAgICBjaGlsZE5vZGVzLnB1c2gobik7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZE5vZGVzO1xufTtcbmNvbnN0IGhtclN0YXJ0ID0gKGVsbSwgY21wTWV0YSwgaG1yVmVyc2lvbklkKSA9PiB7XG4gICAgLy8gwq9cXF8o44OEKV8vwq9cbiAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihlbG0pO1xuICAgIC8vIHJlc2V0IHN0YXRlIGZsYWdzIHRvIG9ubHkgaGF2ZSBiZWVuIGNvbm5lY3RlZFxuICAgIGhvc3RSZWYuJGZsYWdzJCA9IDEgLyogSE9TVF9GTEFHUy5oYXNDb25uZWN0ZWQgKi87XG4gICAgLy8gVE9ET1xuICAgIC8vIGRldGF0Y2ggYW55IGV2ZW50IGxpc3RlbmVycyB0aGF0IG1heSBoYXZlIGJlZW4gYWRkZWRcbiAgICAvLyBiZWNhdXNlIHdlJ3JlIG5vdCBwYXNzaW5nIGFuIGV4YWN0IGV2ZW50IG5hbWUgaXQnbGxcbiAgICAvLyByZW1vdmUgYWxsIG9mIHRoaXMgZWxlbWVudCdzIGV2ZW50LCB3aGljaCBpcyBnb29kXG4gICAgLy8gY3JlYXRlIGEgY2FsbGJhY2sgZm9yIHdoZW4gdGhpcyBjb21wb25lbnQgZmluaXNoZXMgaG1yXG4gICAgZWxtWydzLWhtci1sb2FkJ10gPSAoKSA9PiB7XG4gICAgICAgIC8vIGZpbmlzaGVkIGhtciBmb3IgdGhpcyBlbGVtZW50XG4gICAgICAgIGRlbGV0ZSBlbG1bJ3MtaG1yLWxvYWQnXTtcbiAgICB9O1xuICAgIC8vIHJlLWluaXRpYWxpemUgdGhlIGNvbXBvbmVudFxuICAgIGluaXRpYWxpemVDb21wb25lbnQoZWxtLCBob3N0UmVmLCBjbXBNZXRhLCBobXJWZXJzaW9uSWQpO1xufTtcbmNvbnN0IGJvb3RzdHJhcExhenkgPSAobGF6eUJ1bmRsZXMsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBpZiAoQlVJTEQucHJvZmlsZSAmJiBwZXJmb3JtYW5jZS5tYXJrKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3N0OmFwcDpzdGFydCcpO1xuICAgIH1cbiAgICBpbnN0YWxsRGV2VG9vbHMoKTtcbiAgICBjb25zdCBlbmRCb290c3RyYXAgPSBjcmVhdGVUaW1lKCdib290c3RyYXBMYXp5Jyk7XG4gICAgY29uc3QgY21wVGFncyA9IFtdO1xuICAgIGNvbnN0IGV4Y2x1ZGUgPSBvcHRpb25zLmV4Y2x1ZGUgfHwgW107XG4gICAgY29uc3QgY3VzdG9tRWxlbWVudHMgPSB3aW4uY3VzdG9tRWxlbWVudHM7XG4gICAgY29uc3QgaGVhZCA9IGRvYy5oZWFkO1xuICAgIGNvbnN0IG1ldGFDaGFyc2V0ID0gLypAX19QVVJFX18qLyBoZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbY2hhcnNldF0nKTtcbiAgICBjb25zdCB2aXNpYmlsaXR5U3R5bGUgPSAvKkBfX1BVUkVfXyovIGRvYy5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNvbnN0IGRlZmVycmVkQ29ubmVjdGVkQ2FsbGJhY2tzID0gW107XG4gICAgY29uc3Qgc3R5bGVzID0gLypAX19QVVJFX18qLyBkb2MucXVlcnlTZWxlY3RvckFsbChgWyR7SFlEUkFURURfU1RZTEVfSUR9XWApO1xuICAgIGxldCBhcHBMb2FkRmFsbGJhY2s7XG4gICAgbGV0IGlzQm9vdHN0cmFwcGluZyA9IHRydWU7XG4gICAgbGV0IGkgPSAwO1xuICAgIE9iamVjdC5hc3NpZ24ocGx0LCBvcHRpb25zKTtcbiAgICBwbHQuJHJlc291cmNlc1VybCQgPSBuZXcgVVJMKG9wdGlvbnMucmVzb3VyY2VzVXJsIHx8ICcuLycsIGRvYy5iYXNlVVJJKS5ocmVmO1xuICAgIGlmIChCVUlMRC5hc3luY1F1ZXVlKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnN5bmNRdWV1ZSkge1xuICAgICAgICAgICAgcGx0LiRmbGFncyQgfD0gNCAvKiBQTEFURk9STV9GTEFHUy5xdWV1ZVN5bmMgKi87XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKEJVSUxELmh5ZHJhdGVDbGllbnRTaWRlKSB7XG4gICAgICAgIC8vIElmIHRoZSBhcHAgaXMgYWxyZWFkeSBoeWRyYXRlZCB0aGVyZSBpcyBub3QgcG9pbnQgdG8gZGlzYWJsZSB0aGVcbiAgICAgICAgLy8gYXN5bmMgcXVldWUuIFRoaXMgd2lsbCBpbXByb3ZlIHRoZSBmaXJzdCBpbnB1dCBkZWxheVxuICAgICAgICBwbHQuJGZsYWdzJCB8PSAyIC8qIFBMQVRGT1JNX0ZMQUdTLmFwcExvYWRlZCAqLztcbiAgICB9XG4gICAgaWYgKEJVSUxELmh5ZHJhdGVDbGllbnRTaWRlICYmIEJVSUxELnNoYWRvd0RvbSkge1xuICAgICAgICBmb3IgKDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVnaXN0ZXJTdHlsZShzdHlsZXNbaV0uZ2V0QXR0cmlidXRlKEhZRFJBVEVEX1NUWUxFX0lEKSwgY29udmVydFNjb3BlZFRvU2hhZG93KHN0eWxlc1tpXS5pbm5lckhUTUwpLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsYXp5QnVuZGxlcy5tYXAoKGxhenlCdW5kbGUpID0+IHtcbiAgICAgICAgbGF6eUJ1bmRsZVsxXS5tYXAoKGNvbXBhY3RNZXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbXBNZXRhID0ge1xuICAgICAgICAgICAgICAgICRmbGFncyQ6IGNvbXBhY3RNZXRhWzBdLFxuICAgICAgICAgICAgICAgICR0YWdOYW1lJDogY29tcGFjdE1ldGFbMV0sXG4gICAgICAgICAgICAgICAgJG1lbWJlcnMkOiBjb21wYWN0TWV0YVsyXSxcbiAgICAgICAgICAgICAgICAkbGlzdGVuZXJzJDogY29tcGFjdE1ldGFbM10sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKEJVSUxELm1lbWJlcikge1xuICAgICAgICAgICAgICAgIGNtcE1ldGEuJG1lbWJlcnMkID0gY29tcGFjdE1ldGFbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQuaG9zdExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgY21wTWV0YS4kbGlzdGVuZXJzJCA9IGNvbXBhY3RNZXRhWzNdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELnJlZmxlY3QpIHtcbiAgICAgICAgICAgICAgICBjbXBNZXRhLiRhdHRyc1RvUmVmbGVjdCQgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC53YXRjaENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY21wTWV0YS4kd2F0Y2hlcnMkID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQuc2hhZG93RG9tICYmICFzdXBwb3J0c1NoYWRvdyAmJiBjbXBNZXRhLiRmbGFncyQgJiAxIC8qIENNUF9GTEFHUy5zaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgICAgICAgICAgY21wTWV0YS4kZmxhZ3MkIHw9IDggLyogQ01QX0ZMQUdTLm5lZWRzU2hhZG93RG9tU2hpbSAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSBCVUlMRC50cmFuc2Zvcm1UYWdOYW1lICYmIG9wdGlvbnMudHJhbnNmb3JtVGFnTmFtZVxuICAgICAgICAgICAgICAgID8gb3B0aW9ucy50cmFuc2Zvcm1UYWdOYW1lKGNtcE1ldGEuJHRhZ05hbWUkKVxuICAgICAgICAgICAgICAgIDogY21wTWV0YS4kdGFnTmFtZSQ7XG4gICAgICAgICAgICBjb25zdCBIb3N0RWxlbWVudCA9IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICAgICAgICAgICAgIC8vIFN0ZW5jaWxMYXp5SG9zdFxuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yKHNlbGYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBzdXBlcihzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVySG9zdChzZWxmLCBjbXBNZXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJVSUxELnNoYWRvd0RvbSAmJiBjbXBNZXRhLiRmbGFncyQgJiAxIC8qIENNUF9GTEFHUy5zaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGNvbXBvbmVudCBpcyB1c2luZyBzaGFkb3cgZG9tXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgdGhpcyBicm93c2VyIHN1cHBvcnRzIHNoYWRvdyBkb21cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgcmVhZC1vbmx5IHByb3BlcnR5IFwic2hhZG93Um9vdFwiIHRvIHRoZSBob3N0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZGluZyB0aGUgc2hhZG93IHJvb3QgYnVpbGQgY29uZGl0aW9uYWxzIHRvIG1pbmltaXplIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdXBwb3J0c1NoYWRvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCVUlMRC5zaGFkb3dEZWxlZ2F0ZXNGb2N1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0dGFjaFNoYWRvdyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiAnb3BlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxlZ2F0ZXNGb2N1czogISEoY21wTWV0YS4kZmxhZ3MkICYgMTYgLyogQ01QX0ZMQUdTLnNoYWRvd0RlbGVnYXRlc0ZvY3VzICovKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgJiYgISgnc2hhZG93Um9vdCcgaW4gc2VsZikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNoYWRvd1Jvb3QgPSBzZWxmO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChCVUlMRC5zbG90Q2hpbGROb2Rlc0ZpeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2hDaGlsZFNsb3ROb2RlcyhzZWxmLCBjbXBNZXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFwcExvYWRGYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFwcExvYWRGYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBMb2FkRmFsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Jvb3RzdHJhcHBpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbm5lY3RlZENhbGxiYWNrIHdpbGwgYmUgcHJvY2Vzc2VkIG9uY2UgYWxsIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHJlZ2lzdGVyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkQ29ubmVjdGVkQ2FsbGJhY2tzLnB1c2godGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHQuam1wKCgpID0+IGNvbm5lY3RlZENhbGxiYWNrKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgICAgICAgICAgcGx0LmptcCgoKSA9PiBkaXNjb25uZWN0ZWRDYWxsYmFjayh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudE9uUmVhZHkoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRIb3N0UmVmKHRoaXMpLiRvblJlYWR5UHJvbWlzZSQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChCVUlMRC5jbG9uZU5vZGVGaXgpIHtcbiAgICAgICAgICAgICAgICBwYXRjaENsb25lTm9kZShIb3N0RWxlbWVudC5wcm90b3R5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELmFwcGVuZENoaWxkU2xvdEZpeCkge1xuICAgICAgICAgICAgICAgIHBhdGNoU2xvdEFwcGVuZENoaWxkKEhvc3RFbGVtZW50LnByb3RvdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQuaG90TW9kdWxlUmVwbGFjZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBIb3N0RWxlbWVudC5wcm90b3R5cGVbJ3MtaG1yJ10gPSBmdW5jdGlvbiAoaG1yVmVyc2lvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhtclN0YXJ0KHRoaXMsIGNtcE1ldGEsIGhtclZlcnNpb25JZCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC5zY29wZWRTbG90VGV4dENvbnRlbnRGaXgpIHtcbiAgICAgICAgICAgICAgICBwYXRjaFRleHRDb250ZW50KEhvc3RFbGVtZW50LnByb3RvdHlwZSwgY21wTWV0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbXBNZXRhLiRsYXp5QnVuZGxlSWQkID0gbGF6eUJ1bmRsZVswXTtcbiAgICAgICAgICAgIGlmICghZXhjbHVkZS5pbmNsdWRlcyh0YWdOYW1lKSAmJiAhY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgY21wVGFncy5wdXNoKHRhZ05hbWUpO1xuICAgICAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBwcm94eUNvbXBvbmVudChIb3N0RWxlbWVudCwgY21wTWV0YSwgMSAvKiBQUk9YWV9GTEFHUy5pc0VsZW1lbnRDb25zdHJ1Y3RvciAqLykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAoQlVJTEQuaW52aXNpYmxlUHJlaHlkcmF0aW9uICYmIChCVUlMRC5oeWRyYXRlZENsYXNzIHx8IEJVSUxELmh5ZHJhdGVkQXR0cmlidXRlKSkge1xuICAgICAgICB2aXNpYmlsaXR5U3R5bGUuaW5uZXJIVE1MID0gY21wVGFncyArIEhZRFJBVEVEX0NTUztcbiAgICAgICAgdmlzaWJpbGl0eVN0eWxlLnNldEF0dHJpYnV0ZSgnZGF0YS1zdHlsZXMnLCAnJyk7XG4gICAgICAgIC8vIEFwcGx5IENTUCBub25jZSB0byB0aGUgc3R5bGUgdGFnIGlmIGl0IGV4aXN0c1xuICAgICAgICBjb25zdCBub25jZSA9IChfYSA9IHBsdC4kbm9uY2UkKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBxdWVyeU5vbmNlTWV0YVRhZ0NvbnRlbnQoZG9jKTtcbiAgICAgICAgaWYgKG5vbmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZpc2liaWxpdHlTdHlsZS5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHZpc2liaWxpdHlTdHlsZSwgbWV0YUNoYXJzZXQgPyBtZXRhQ2hhcnNldC5uZXh0U2libGluZyA6IGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIFByb2Nlc3MgZGVmZXJyZWQgY29ubmVjdGVkQ2FsbGJhY2tzIG5vdyBhbGwgY29tcG9uZW50cyBoYXZlIGJlZW4gcmVnaXN0ZXJlZFxuICAgIGlzQm9vdHN0cmFwcGluZyA9IGZhbHNlO1xuICAgIGlmIChkZWZlcnJlZENvbm5lY3RlZENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgZGVmZXJyZWRDb25uZWN0ZWRDYWxsYmFja3MubWFwKChob3N0KSA9PiBob3N0LmNvbm5lY3RlZENhbGxiYWNrKCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKEJVSUxELnByb2ZpbGUpIHtcbiAgICAgICAgICAgIHBsdC5qbXAoKCkgPT4gKGFwcExvYWRGYWxsYmFjayA9IHNldFRpbWVvdXQoYXBwRGlkTG9hZCwgMzAsICd0aW1lb3V0JykpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBsdC5qbXAoKCkgPT4gKGFwcExvYWRGYWxsYmFjayA9IHNldFRpbWVvdXQoYXBwRGlkTG9hZCwgMzApKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRmFsbGJhY2sgYXBwTG9hZCBldmVudFxuICAgIGVuZEJvb3RzdHJhcCgpO1xufTtcbmNvbnN0IGdldENvbm5lY3QgPSAoX3JlZiwgdGFnTmFtZSkgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudE9uUmVhZHkgPSAoKSA9PiB7XG4gICAgICAgIGxldCBlbG0gPSBkb2MucXVlcnlTZWxlY3Rvcih0YWdOYW1lKTtcbiAgICAgICAgaWYgKCFlbG0pIHtcbiAgICAgICAgICAgIGVsbSA9IGRvYy5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgICAgICAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQoZWxtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHlwZW9mIGVsbS5jb21wb25lbnRPblJlYWR5ID09PSAnZnVuY3Rpb24nID8gZWxtLmNvbXBvbmVudE9uUmVhZHkoKSA6IFByb21pc2UucmVzb2x2ZShlbG0pO1xuICAgIH07XG4gICAgY29uc3QgY3JlYXRlID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudE9uUmVhZHkoKS50aGVuKChlbCkgPT4gZWwuY3JlYXRlKC4uLmFyZ3MpKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZSxcbiAgICAgICAgY29tcG9uZW50T25SZWFkeSxcbiAgICB9O1xufTtcbmNvbnN0IGdldENvbnRleHQgPSAoX2VsbSwgY29udGV4dCkgPT4ge1xuICAgIGlmIChjb250ZXh0IGluIENvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIENvbnRleHRbY29udGV4dF07XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbnRleHQgPT09ICd3aW5kb3cnKSB7XG4gICAgICAgIHJldHVybiB3aW47XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbnRleHQgPT09ICdkb2N1bWVudCcpIHtcbiAgICAgICAgcmV0dXJuIGRvYztcbiAgICB9XG4gICAgZWxzZSBpZiAoY29udGV4dCA9PT0gJ2lzU2VydmVyJyB8fCBjb250ZXh0ID09PSAnaXNQcmVyZW5kZXInKSB7XG4gICAgICAgIHJldHVybiBCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29udGV4dCA9PT0gJ2lzQ2xpZW50Jykge1xuICAgICAgICByZXR1cm4gQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbnRleHQgPT09ICdyZXNvdXJjZXNVcmwnIHx8IGNvbnRleHQgPT09ICdwdWJsaWNQYXRoJykge1xuICAgICAgICByZXR1cm4gZ2V0QXNzZXRQYXRoKCcuJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbnRleHQgPT09ICdxdWV1ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdyaXRlOiB3cml0ZVRhc2ssXG4gICAgICAgICAgICByZWFkOiByZWFkVGFzayxcbiAgICAgICAgICAgIHRpY2s6IHtcbiAgICAgICAgICAgICAgICB0aGVuKGNiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0VGljayhjYik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59O1xuY29uc3QgRnJhZ21lbnQgPSAoXywgY2hpbGRyZW4pID0+IGNoaWxkcmVuO1xuY29uc3QgYWRkSG9zdEV2ZW50TGlzdGVuZXJzID0gKGVsbSwgaG9zdFJlZiwgbGlzdGVuZXJzLCBhdHRhY2hQYXJlbnRMaXN0ZW5lcnMpID0+IHtcbiAgICBpZiAoQlVJTEQuaG9zdExpc3RlbmVyICYmIGxpc3RlbmVycykge1xuICAgICAgICAvLyB0aGlzIGlzIGNhbGxlZCBpbW1lZGlhdGVseSB3aXRoaW4gdGhlIGVsZW1lbnQncyBjb25zdHJ1Y3RvclxuICAgICAgICAvLyBpbml0aWFsaXplIG91ciBldmVudCBsaXN0ZW5lcnMgb24gdGhlIGhvc3QgZWxlbWVudFxuICAgICAgICAvLyB3ZSBkbyB0aGlzIG5vdyBzbyB0aGF0IHdlIGNhbiBsaXN0ZW4gdG8gZXZlbnRzIHRoYXQgbWF5XG4gICAgICAgIC8vIGhhdmUgZmlyZWQgZXZlbiBiZWZvcmUgdGhlIGluc3RhbmNlIGlzIHJlYWR5XG4gICAgICAgIGlmIChCVUlMRC5ob3N0TGlzdGVuZXJUYXJnZXRQYXJlbnQpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgY29tcG9uZW50IG1heSBoYXZlIGV2ZW50IGxpc3RlbmVycyB0aGF0IHNob3VsZCBiZSBhdHRhY2hlZCB0byB0aGUgcGFyZW50XG4gICAgICAgICAgICBpZiAoYXR0YWNoUGFyZW50TGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBiZWluZyByYW4gZnJvbSB3aXRoaW4gdGhlIGNvbm5lY3RlZENhbGxiYWNrXG4gICAgICAgICAgICAgICAgLy8gd2hpY2ggaXMgaW1wb3J0YW50IHNvIHRoYXQgd2Uga25vdyB0aGUgaG9zdCBlbGVtZW50IGFjdHVhbGx5IGhhcyBhIHBhcmVudCBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gZmlsdGVyIG91dCB0aGUgbGlzdGVuZXJzIHRvIG9ubHkgaGF2ZSB0aGUgb25lcyB0aGF0IEFSRSBiZWluZyBhdHRhY2hlZCB0byB0aGUgcGFyZW50XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigoW2ZsYWdzXSkgPT4gZmxhZ3MgJiAzMiAvKiBMSVNURU5FUl9GTEFHUy5UYXJnZXRQYXJlbnQgKi8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBiZWluZyByYW4gZnJvbSB3aXRoaW4gdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgQlVUIHRoZSBwYXJlbnQgZWxlbWVudCBsaXN0ZW5lcnMgc2hvdWxkIGJlIGF0dGFjaGVkIGF0IHRoaXMgdGltZVxuICAgICAgICAgICAgICAgIC8vIGZpbHRlciBvdXQgdGhlIGxpc3RlbmVycyB0aGF0IGFyZSBOT1QgYmVpbmcgYXR0YWNoZWQgdG8gdGhlIHBhcmVudFxuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoKFtmbGFnc10pID0+ICEoZmxhZ3MgJiAzMiAvKiBMSVNURU5FUl9GTEFHUy5UYXJnZXRQYXJlbnQgKi8pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsaXN0ZW5lcnMubWFwKChbZmxhZ3MsIG5hbWUsIG1ldGhvZF0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IEJVSUxELmhvc3RMaXN0ZW5lclRhcmdldCA/IGdldEhvc3RMaXN0ZW5lclRhcmdldChlbG0sIGZsYWdzKSA6IGVsbTtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBob3N0TGlzdGVuZXJQcm94eShob3N0UmVmLCBtZXRob2QpO1xuICAgICAgICAgICAgY29uc3Qgb3B0cyA9IGhvc3RMaXN0ZW5lck9wdHMoZmxhZ3MpO1xuICAgICAgICAgICAgcGx0LmFlbCh0YXJnZXQsIG5hbWUsIGhhbmRsZXIsIG9wdHMpO1xuICAgICAgICAgICAgKGhvc3RSZWYuJHJtTGlzdGVuZXJzJCA9IGhvc3RSZWYuJHJtTGlzdGVuZXJzJCB8fCBbXSkucHVzaCgoKSA9PiBwbHQucmVsKHRhcmdldCwgbmFtZSwgaGFuZGxlciwgb3B0cykpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuY29uc3QgaG9zdExpc3RlbmVyUHJveHkgPSAoaG9zdFJlZiwgbWV0aG9kTmFtZSkgPT4gKGV2KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKEJVSUxELmxhenlMb2FkKSB7XG4gICAgICAgICAgICBpZiAoaG9zdFJlZi4kZmxhZ3MkICYgMjU2IC8qIEhPU1RfRkxBR1MuaXNMaXN0ZW5SZWFkeSAqLykge1xuICAgICAgICAgICAgICAgIC8vIGluc3RhbmNlIGlzIHJlYWR5LCBsZXQncyBjYWxsIGl0J3MgbWVtYmVyIG1ldGhvZCBmb3IgdGhpcyBldmVudFxuICAgICAgICAgICAgICAgIGhvc3RSZWYuJGxhenlJbnN0YW5jZSRbbWV0aG9kTmFtZV0oZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgKGhvc3RSZWYuJHF1ZXVlZExpc3RlbmVycyQgPSBob3N0UmVmLiRxdWV1ZWRMaXN0ZW5lcnMkIHx8IFtdKS5wdXNoKFttZXRob2ROYW1lLCBldl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaG9zdFJlZi4kaG9zdEVsZW1lbnQkW21ldGhvZE5hbWVdKGV2KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgfVxufTtcbmNvbnN0IGdldEhvc3RMaXN0ZW5lclRhcmdldCA9IChlbG0sIGZsYWdzKSA9PiB7XG4gICAgaWYgKEJVSUxELmhvc3RMaXN0ZW5lclRhcmdldERvY3VtZW50ICYmIGZsYWdzICYgNCAvKiBMSVNURU5FUl9GTEFHUy5UYXJnZXREb2N1bWVudCAqLylcbiAgICAgICAgcmV0dXJuIGRvYztcbiAgICBpZiAoQlVJTEQuaG9zdExpc3RlbmVyVGFyZ2V0V2luZG93ICYmIGZsYWdzICYgOCAvKiBMSVNURU5FUl9GTEFHUy5UYXJnZXRXaW5kb3cgKi8pXG4gICAgICAgIHJldHVybiB3aW47XG4gICAgaWYgKEJVSUxELmhvc3RMaXN0ZW5lclRhcmdldEJvZHkgJiYgZmxhZ3MgJiAxNiAvKiBMSVNURU5FUl9GTEFHUy5UYXJnZXRCb2R5ICovKVxuICAgICAgICByZXR1cm4gZG9jLmJvZHk7XG4gICAgaWYgKEJVSUxELmhvc3RMaXN0ZW5lclRhcmdldFBhcmVudCAmJiBmbGFncyAmIDMyIC8qIExJU1RFTkVSX0ZMQUdTLlRhcmdldFBhcmVudCAqLylcbiAgICAgICAgcmV0dXJuIGVsbS5wYXJlbnRFbGVtZW50O1xuICAgIHJldHVybiBlbG07XG59O1xuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBob3N0TGlzdGVuZXJPcHRzID0gKGZsYWdzKSA9PiBzdXBwb3J0c0xpc3RlbmVyT3B0aW9uc1xuICAgID8gKHtcbiAgICAgICAgcGFzc2l2ZTogKGZsYWdzICYgMSAvKiBMSVNURU5FUl9GTEFHUy5QYXNzaXZlICovKSAhPT0gMCxcbiAgICAgICAgY2FwdHVyZTogKGZsYWdzICYgMiAvKiBMSVNURU5FUl9GTEFHUy5DYXB0dXJlICovKSAhPT0gMCxcbiAgICB9KVxuICAgIDogKGZsYWdzICYgMiAvKiBMSVNURU5FUl9GTEFHUy5DYXB0dXJlICovKSAhPT0gMDtcbi8qKlxuICogQXNzaWducyB0aGUgZ2l2ZW4gdmFsdWUgdG8gdGhlIG5vbmNlIHByb3BlcnR5IG9uIHRoZSBydW50aW1lIHBsYXRmb3JtIG9iamVjdC5cbiAqIER1cmluZyBydW50aW1lLCB0aGlzIHZhbHVlIGlzIHVzZWQgdG8gc2V0IHRoZSBub25jZSBhdHRyaWJ1dGUgb24gYWxsIGR5bmFtaWNhbGx5IGNyZWF0ZWQgc2NyaXB0IGFuZCBzdHlsZSB0YWdzLlxuICogQHBhcmFtIG5vbmNlIFRoZSB2YWx1ZSB0byBiZSBhc3NpZ25lZCB0byB0aGUgcGxhdGZvcm0gbm9uY2UgcHJvcGVydHkuXG4gKiBAcmV0dXJucyB2b2lkXG4gKi9cbmNvbnN0IHNldE5vbmNlID0gKG5vbmNlKSA9PiAocGx0LiRub25jZSQgPSBub25jZSk7XG5jb25zdCBzZXRQbGF0Zm9ybU9wdGlvbnMgPSAob3B0cykgPT4gT2JqZWN0LmFzc2lnbihwbHQsIG9wdHMpO1xuY29uc3QgaW5zZXJ0VmRvbUFubm90YXRpb25zID0gKGRvYywgc3RhdGljQ29tcG9uZW50cykgPT4ge1xuICAgIGlmIChkb2MgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkb2NEYXRhID0ge1xuICAgICAgICAgICAgaG9zdElkczogMCxcbiAgICAgICAgICAgIHJvb3RMZXZlbElkczogMCxcbiAgICAgICAgICAgIHN0YXRpY0NvbXBvbmVudHM6IG5ldyBTZXQoc3RhdGljQ29tcG9uZW50cyksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9yZ0xvY2F0aW9uTm9kZXMgPSBbXTtcbiAgICAgICAgcGFyc2VWTm9kZUFubm90YXRpb25zKGRvYywgZG9jLmJvZHksIGRvY0RhdGEsIG9yZ0xvY2F0aW9uTm9kZXMpO1xuICAgICAgICBvcmdMb2NhdGlvbk5vZGVzLmZvckVhY2goKG9yZ0xvY2F0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG9yZ0xvY2F0aW9uTm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZVJlZiA9IG9yZ0xvY2F0aW9uTm9kZVsncy1uciddO1xuICAgICAgICAgICAgICAgIGxldCBob3N0SWQgPSBub2RlUmVmWydzLWhvc3QtaWQnXTtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZUlkID0gbm9kZVJlZlsncy1ub2RlLWlkJ107XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkSWQgPSBgJHtob3N0SWR9LiR7bm9kZUlkfWA7XG4gICAgICAgICAgICAgICAgaWYgKGhvc3RJZCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3RJZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGRvY0RhdGEucm9vdExldmVsSWRzKys7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVJZCA9IGRvY0RhdGEucm9vdExldmVsSWRzO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZElkID0gYCR7aG9zdElkfS4ke25vZGVJZH1gO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZVJlZi5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVSZWYuc2V0QXR0cmlidXRlKEhZRFJBVEVfQ0hJTERfSUQsIGNoaWxkSWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGVSZWYubm9kZVR5cGUgPT09IDMgLyogTk9ERV9UWVBFLlRleHROb2RlICovKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaG9zdElkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBub2RlUmVmLm5vZGVWYWx1ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRDb250ZW50ID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2VsZXNzIHdoaXRlc3BhY2Ugbm9kZSBhdCB0aGUgZG9jdW1lbnQgcm9vdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmdMb2NhdGlvbk5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21tZW50QmVmb3JlVGV4dE5vZGUgPSBkb2MuY3JlYXRlQ29tbWVudChjaGlsZElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRCZWZvcmVUZXh0Tm9kZS5ub2RlVmFsdWUgPSBgJHtURVhUX05PREVfSUR9LiR7Y2hpbGRJZH1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVJlZi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjb21tZW50QmVmb3JlVGV4dE5vZGUsIG5vZGVSZWYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBvcmdMb2NhdGlvbk5vZGVJZCA9IGAke09SR19MT0NBVElPTl9JRH0uJHtjaGlsZElkfWA7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JnTG9jYXRpb25QYXJlbnROb2RlID0gb3JnTG9jYXRpb25Ob2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKG9yZ0xvY2F0aW9uUGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3JnTG9jYXRpb25QYXJlbnROb2RlWydzLWVuJ10gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbmRpbmcgd2l0aCBhIFwiLlwiIG1lYW5zIHRoYXQgdGhlIHBhcmVudCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvZiB0aGlzIG5vZGUncyBvcmlnaW5hbCBsb2NhdGlvbiBpcyBhIFNIQURPVyBkb20gZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHRoaXMgbm9kZSBpcyBhcGFydCBvZiB0aGUgcm9vdCBsZXZlbCBsaWdodCBkb21cbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZ0xvY2F0aW9uTm9kZUlkICs9IGAuYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChvcmdMb2NhdGlvblBhcmVudE5vZGVbJ3MtZW4nXSA9PT0gJ2MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbmRpbmcgd2l0aCBhIFwiLmNcIiBtZWFucyB0aGF0IHRoZSBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2YgdGhpcyBub2RlJ3Mgb3JpZ2luYWwgbG9jYXRpb24gaXMgYSBTQ09QRUQgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHRoaXMgbm9kZSBpcyBhcGFydCBvZiB0aGUgcm9vdCBsZXZlbCBsaWdodCBkb21cbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZ0xvY2F0aW9uTm9kZUlkICs9IGAuY2A7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3JnTG9jYXRpb25Ob2RlLm5vZGVWYWx1ZSA9IG9yZ0xvY2F0aW9uTm9kZUlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuY29uc3QgcGFyc2VWTm9kZUFubm90YXRpb25zID0gKGRvYywgbm9kZSwgZG9jRGF0YSwgb3JnTG9jYXRpb25Ob2RlcykgPT4ge1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobm9kZVsncy1uciddICE9IG51bGwpIHtcbiAgICAgICAgb3JnTG9jYXRpb25Ob2Rlcy5wdXNoKG5vZGUpO1xuICAgIH1cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgbm9kZS5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYoY2hpbGROb2RlKTtcbiAgICAgICAgICAgIGlmIChob3N0UmVmICE9IG51bGwgJiYgIWRvY0RhdGEuc3RhdGljQ29tcG9uZW50cy5oYXMoY2hpbGROb2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY21wRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUlkczogMCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGluc2VydFZOb2RlQW5ub3RhdGlvbnMoZG9jLCBjaGlsZE5vZGUsIGhvc3RSZWYuJHZub2RlJCwgZG9jRGF0YSwgY21wRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJzZVZOb2RlQW5ub3RhdGlvbnMoZG9jLCBjaGlsZE5vZGUsIGRvY0RhdGEsIG9yZ0xvY2F0aW9uTm9kZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuY29uc3QgaW5zZXJ0Vk5vZGVBbm5vdGF0aW9ucyA9IChkb2MsIGhvc3RFbG0sIHZub2RlLCBkb2NEYXRhLCBjbXBEYXRhKSA9PiB7XG4gICAgaWYgKHZub2RlICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgaG9zdElkID0gKytkb2NEYXRhLmhvc3RJZHM7XG4gICAgICAgIGhvc3RFbG0uc2V0QXR0cmlidXRlKEhZRFJBVEVfSUQsIGhvc3RJZCk7XG4gICAgICAgIGlmIChob3N0RWxtWydzLWNyJ10gIT0gbnVsbCkge1xuICAgICAgICAgICAgaG9zdEVsbVsncy1jciddLm5vZGVWYWx1ZSA9IGAke0NPTlRFTlRfUkVGX0lEfS4ke2hvc3RJZH1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2bm9kZS4kY2hpbGRyZW4kICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlcHRoID0gMDtcbiAgICAgICAgICAgIHZub2RlLiRjaGlsZHJlbiQuZm9yRWFjaCgodm5vZGVDaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpbnNlcnRDaGlsZFZOb2RlQW5ub3RhdGlvbnMoZG9jLCB2bm9kZUNoaWxkLCBjbXBEYXRhLCBob3N0SWQsIGRlcHRoLCBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG9zdEVsbSAmJiB2bm9kZSAmJiB2bm9kZS4kZWxtJCAmJiAhaG9zdEVsbS5oYXNBdHRyaWJ1dGUoJ2MtaWQnKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gaG9zdEVsbS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudENoaWxkTm9kZXMgPSBBcnJheS5mcm9tKHBhcmVudC5jaGlsZE5vZGVzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tZW50ID0gcGFyZW50Q2hpbGROb2Rlcy5maW5kKChub2RlKSA9PiBub2RlLm5vZGVUeXBlID09PSA4IC8qIE5PREVfVFlQRS5Db21tZW50Tm9kZSAqLyAmJiBub2RlWydzLXNyJ10pO1xuICAgICAgICAgICAgICAgIGlmIChjb21tZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyZW50Q2hpbGROb2Rlcy5pbmRleE9mKGhvc3RFbG0pIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgdm5vZGUuJGVsbSQuc2V0QXR0cmlidXRlKEhZRFJBVEVfQ0hJTERfSUQsIGAke2NvbW1lbnRbJ3MtaG9zdC1pZCddfS4ke2NvbW1lbnRbJ3Mtbm9kZS1pZCddfS4wLiR7aW5kZXh9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IGluc2VydENoaWxkVk5vZGVBbm5vdGF0aW9ucyA9IChkb2MsIHZub2RlQ2hpbGQsIGNtcERhdGEsIGhvc3RJZCwgZGVwdGgsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY2hpbGRFbG0gPSB2bm9kZUNoaWxkLiRlbG0kO1xuICAgIGlmIChjaGlsZEVsbSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgbm9kZUlkID0gY21wRGF0YS5ub2RlSWRzKys7XG4gICAgY29uc3QgY2hpbGRJZCA9IGAke2hvc3RJZH0uJHtub2RlSWR9LiR7ZGVwdGh9LiR7aW5kZXh9YDtcbiAgICBjaGlsZEVsbVsncy1ob3N0LWlkJ10gPSBob3N0SWQ7XG4gICAgY2hpbGRFbG1bJ3Mtbm9kZS1pZCddID0gbm9kZUlkO1xuICAgIGlmIChjaGlsZEVsbS5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgY2hpbGRFbG0uc2V0QXR0cmlidXRlKEhZRFJBVEVfQ0hJTERfSUQsIGNoaWxkSWQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChjaGlsZEVsbS5ub2RlVHlwZSA9PT0gMyAvKiBOT0RFX1RZUEUuVGV4dE5vZGUgKi8pIHtcbiAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IGNoaWxkRWxtLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IG5vZGVOYW1lID0gcGFyZW50Tm9kZS5ub2RlTmFtZTtcbiAgICAgICAgaWYgKG5vZGVOYW1lICE9PSAnU1RZTEUnICYmIG5vZGVOYW1lICE9PSAnU0NSSVBUJykge1xuICAgICAgICAgICAgY29uc3QgdGV4dE5vZGVJZCA9IGAke1RFWFRfTk9ERV9JRH0uJHtjaGlsZElkfWA7XG4gICAgICAgICAgICBjb25zdCBjb21tZW50QmVmb3JlVGV4dE5vZGUgPSBkb2MuY3JlYXRlQ29tbWVudCh0ZXh0Tm9kZUlkKTtcbiAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvbW1lbnRCZWZvcmVUZXh0Tm9kZSwgY2hpbGRFbG0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGNoaWxkRWxtLm5vZGVUeXBlID09PSA4IC8qIE5PREVfVFlQRS5Db21tZW50Tm9kZSAqLykge1xuICAgICAgICBpZiAoY2hpbGRFbG1bJ3Mtc3InXSkge1xuICAgICAgICAgICAgY29uc3Qgc2xvdE5hbWUgPSBjaGlsZEVsbVsncy1zbiddIHx8ICcnO1xuICAgICAgICAgICAgY29uc3Qgc2xvdE5vZGVJZCA9IGAke1NMT1RfTk9ERV9JRH0uJHtjaGlsZElkfS4ke3Nsb3ROYW1lfWA7XG4gICAgICAgICAgICBjaGlsZEVsbS5ub2RlVmFsdWUgPSBzbG90Tm9kZUlkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh2bm9kZUNoaWxkLiRjaGlsZHJlbiQgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjaGlsZERlcHRoID0gZGVwdGggKyAxO1xuICAgICAgICB2bm9kZUNoaWxkLiRjaGlsZHJlbiQuZm9yRWFjaCgodm5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpbnNlcnRDaGlsZFZOb2RlQW5ub3RhdGlvbnMoZG9jLCB2bm9kZSwgY21wRGF0YSwgaG9zdElkLCBjaGlsZERlcHRoLCBpbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5jb25zdCBob3N0UmVmcyA9IC8qQF9fUFVSRV9fKi8gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IGdldEhvc3RSZWYgPSAocmVmKSA9PiBob3N0UmVmcy5nZXQocmVmKTtcbmNvbnN0IHJlZ2lzdGVySW5zdGFuY2UgPSAobGF6eUluc3RhbmNlLCBob3N0UmVmKSA9PiBob3N0UmVmcy5zZXQoKGhvc3RSZWYuJGxhenlJbnN0YW5jZSQgPSBsYXp5SW5zdGFuY2UpLCBob3N0UmVmKTtcbmNvbnN0IHJlZ2lzdGVySG9zdCA9IChlbG0sIGNtcE1ldGEpID0+IHtcbiAgICBjb25zdCBob3N0UmVmID0ge1xuICAgICAgICAkZmxhZ3MkOiAwLFxuICAgICAgICAkaG9zdEVsZW1lbnQkOiBlbG0sXG4gICAgICAgICRjbXBNZXRhJDogY21wTWV0YSxcbiAgICAgICAgJGluc3RhbmNlVmFsdWVzJDogbmV3IE1hcCgpLFxuICAgIH07XG4gICAgaWYgKEJVSUxELmlzRGV2KSB7XG4gICAgICAgIGhvc3RSZWYuJHJlbmRlckNvdW50JCA9IDA7XG4gICAgfVxuICAgIGlmIChCVUlMRC5tZXRob2QgJiYgQlVJTEQubGF6eUxvYWQpIHtcbiAgICAgICAgaG9zdFJlZi4kb25JbnN0YW5jZVByb21pc2UkID0gbmV3IFByb21pc2UoKHIpID0+IChob3N0UmVmLiRvbkluc3RhbmNlUmVzb2x2ZSQgPSByKSk7XG4gICAgfVxuICAgIGlmIChCVUlMRC5hc3luY0xvYWRpbmcpIHtcbiAgICAgICAgaG9zdFJlZi4kb25SZWFkeVByb21pc2UkID0gbmV3IFByb21pc2UoKHIpID0+IChob3N0UmVmLiRvblJlYWR5UmVzb2x2ZSQgPSByKSk7XG4gICAgICAgIGVsbVsncy1wJ10gPSBbXTtcbiAgICAgICAgZWxtWydzLXJjJ10gPSBbXTtcbiAgICB9XG4gICAgYWRkSG9zdEV2ZW50TGlzdGVuZXJzKGVsbSwgaG9zdFJlZiwgY21wTWV0YS4kbGlzdGVuZXJzJCwgZmFsc2UpO1xuICAgIHJldHVybiBob3N0UmVmcy5zZXQoZWxtLCBob3N0UmVmKTtcbn07XG5jb25zdCBpc01lbWJlckluRWxlbWVudCA9IChlbG0sIG1lbWJlck5hbWUpID0+IG1lbWJlck5hbWUgaW4gZWxtO1xuY29uc3QgY29uc29sZUVycm9yID0gKGUsIGVsKSA9PiAoY3VzdG9tRXJyb3IgfHwgY29uc29sZS5lcnJvcikoZSwgZWwpO1xuY29uc3QgU1RFTkNJTF9ERVZfTU9ERSA9IEJVSUxELmlzVGVzdGluZ1xuICAgID8gWydTVEVOQ0lMOiddIC8vIEUyRSB0ZXN0aW5nXG4gICAgOiBbXG4gICAgICAgICclY3N0ZW5jaWwnLFxuICAgICAgICAnY29sb3I6IHdoaXRlO2JhY2tncm91bmQ6IzRjNDdmZjtmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOjEwcHg7IHBhZGRpbmc6MnB4IDZweDsgYm9yZGVyLXJhZGl1czogNXB4JyxcbiAgICBdO1xuY29uc3QgY29uc29sZURldkVycm9yID0gKC4uLm0pID0+IGNvbnNvbGUuZXJyb3IoLi4uU1RFTkNJTF9ERVZfTU9ERSwgLi4ubSk7XG5jb25zdCBjb25zb2xlRGV2V2FybiA9ICguLi5tKSA9PiBjb25zb2xlLndhcm4oLi4uU1RFTkNJTF9ERVZfTU9ERSwgLi4ubSk7XG5jb25zdCBjb25zb2xlRGV2SW5mbyA9ICguLi5tKSA9PiBjb25zb2xlLmluZm8oLi4uU1RFTkNJTF9ERVZfTU9ERSwgLi4ubSk7XG5jb25zdCBzZXRFcnJvckhhbmRsZXIgPSAoaGFuZGxlcikgPT4gKGN1c3RvbUVycm9yID0gaGFuZGxlcik7XG5jb25zdCBjbXBNb2R1bGVzID0gLypAX19QVVJFX18qLyBuZXcgTWFwKCk7XG5jb25zdCBsb2FkTW9kdWxlID0gKGNtcE1ldGEsIGhvc3RSZWYsIGhtclZlcnNpb25JZCkgPT4ge1xuICAgIC8vIGxvYWRNb2R1bGVJbXBvcnRcbiAgICBjb25zdCBleHBvcnROYW1lID0gY21wTWV0YS4kdGFnTmFtZSQucmVwbGFjZSgvLS9nLCAnXycpO1xuICAgIGNvbnN0IGJ1bmRsZUlkID0gY21wTWV0YS4kbGF6eUJ1bmRsZUlkJDtcbiAgICBpZiAoQlVJTEQuaXNEZXYgJiYgdHlwZW9mIGJ1bmRsZUlkICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlRGV2RXJyb3IoYFRyeWluZyB0byBsYXppbHkgbG9hZCBjb21wb25lbnQgPCR7Y21wTWV0YS4kdGFnTmFtZSR9PiB3aXRoIHN0eWxlIG1vZGUgXCIke2hvc3RSZWYuJG1vZGVOYW1lJH1cIiwgYnV0IGl0IGRvZXMgbm90IGV4aXN0LmApO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBtb2R1bGUgPSAhQlVJTEQuaG90TW9kdWxlUmVwbGFjZW1lbnQgPyBjbXBNb2R1bGVzLmdldChidW5kbGVJZCkgOiBmYWxzZTtcbiAgICBpZiAobW9kdWxlKSB7XG4gICAgICAgIHJldHVybiBtb2R1bGVbZXhwb3J0TmFtZV07XG4gICAgfVxuICAgIC8qIV9fU1RFTkNJTF9TVEFUSUNfSU1QT1JUX1NXSVRDSF9fKi9cbiAgICByZXR1cm4gaW1wb3J0KFxuICAgIC8qIEB2aXRlLWlnbm9yZSAqL1xuICAgIC8qIHdlYnBhY2tJbmNsdWRlOiAvXFwuZW50cnlcXC5qcyQvICovXG4gICAgLyogd2VicGFja0V4Y2x1ZGU6IC9cXC5zeXN0ZW1cXC5lbnRyeVxcLmpzJC8gKi9cbiAgICAvKiB3ZWJwYWNrTW9kZTogXCJsYXp5XCIgKi9cbiAgICBgLi8ke2J1bmRsZUlkfS5lbnRyeS5qcyR7QlVJTEQuaG90TW9kdWxlUmVwbGFjZW1lbnQgJiYgaG1yVmVyc2lvbklkID8gJz9zLWhtcj0nICsgaG1yVmVyc2lvbklkIDogJyd9YCkudGhlbigoaW1wb3J0ZWRNb2R1bGUpID0+IHtcbiAgICAgICAgaWYgKCFCVUlMRC5ob3RNb2R1bGVSZXBsYWNlbWVudCkge1xuICAgICAgICAgICAgY21wTW9kdWxlcy5zZXQoYnVuZGxlSWQsIGltcG9ydGVkTW9kdWxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW1wb3J0ZWRNb2R1bGVbZXhwb3J0TmFtZV07XG4gICAgfSwgY29uc29sZUVycm9yKTtcbn07XG5jb25zdCBzdHlsZXMgPSAvKkBfX1BVUkVfXyovIG5ldyBNYXAoKTtcbmNvbnN0IG1vZGVSZXNvbHV0aW9uQ2hhaW4gPSBbXTtcbmNvbnN0IHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge307XG5jb25zdCBDU1MgPSBCVUlMRC5jc3NWYXJTaGltID8gd2luLkNTUyA6IG51bGw7XG5jb25zdCBkb2MgPSB3aW4uZG9jdW1lbnQgfHwgeyBoZWFkOiB7fSB9O1xuY29uc3QgSCA9ICh3aW4uSFRNTEVsZW1lbnQgfHwgY2xhc3Mge1xufSk7XG5jb25zdCBwbHQgPSB7XG4gICAgJGZsYWdzJDogMCxcbiAgICAkcmVzb3VyY2VzVXJsJDogJycsXG4gICAgam1wOiAoaCkgPT4gaCgpLFxuICAgIHJhZjogKGgpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShoKSxcbiAgICBhZWw6IChlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cykgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCBvcHRzKSxcbiAgICByZWw6IChlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cykgPT4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCBvcHRzKSxcbiAgICBjZTogKGV2ZW50TmFtZSwgb3B0cykgPT4gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgb3B0cyksXG59O1xuY29uc3Qgc2V0UGxhdGZvcm1IZWxwZXJzID0gKGhlbHBlcnMpID0+IHtcbiAgICBPYmplY3QuYXNzaWduKHBsdCwgaGVscGVycyk7XG59O1xuY29uc3Qgc3VwcG9ydHNTaGFkb3cgPSBCVUlMRC5zaGFkb3dEb21TaGltICYmIEJVSUxELnNoYWRvd0RvbVxuICAgID8gLypAX19QVVJFX18qLyAoKCkgPT4gKGRvYy5oZWFkLmF0dGFjaFNoYWRvdyArICcnKS5pbmRleE9mKCdbbmF0aXZlJykgPiAtMSkoKVxuICAgIDogdHJ1ZTtcbmNvbnN0IHN1cHBvcnRzTGlzdGVuZXJPcHRpb25zID0gLypAX19QVVJFX18qLyAoKCkgPT4ge1xuICAgIGxldCBzdXBwb3J0c0xpc3RlbmVyT3B0aW9ucyA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdlJywgbnVsbCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0c0xpc3RlbmVyT3B0aW9ucyA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7IH1cbiAgICByZXR1cm4gc3VwcG9ydHNMaXN0ZW5lck9wdGlvbnM7XG59KSgpO1xuY29uc3QgcHJvbWlzZVJlc29sdmUgPSAodikgPT4gUHJvbWlzZS5yZXNvbHZlKHYpO1xuY29uc3Qgc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldHMgPSBCVUlMRC5jb25zdHJ1Y3RhYmxlQ1NTXG4gICAgPyAvKkBfX1BVUkVfXyovICgoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBuZXcgQ1NTU3R5bGVTaGVldCgpLnJlcGxhY2VTeW5jID09PSAnZnVuY3Rpb24nO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pKClcbiAgICA6IGZhbHNlO1xuY29uc3QgcXVldWVEb21SZWFkcyA9IFtdO1xuY29uc3QgcXVldWVEb21Xcml0ZXMgPSBbXTtcbmNvbnN0IHF1ZXVlRG9tV3JpdGVzTG93ID0gW107XG5jb25zdCBxdWV1ZVRhc2sgPSAocXVldWUsIHdyaXRlKSA9PiAoY2IpID0+IHtcbiAgICBxdWV1ZS5wdXNoKGNiKTtcbiAgICBpZiAoIXF1ZXVlUGVuZGluZykge1xuICAgICAgICBxdWV1ZVBlbmRpbmcgPSB0cnVlO1xuICAgICAgICBpZiAod3JpdGUgJiYgcGx0LiRmbGFncyQgJiA0IC8qIFBMQVRGT1JNX0ZMQUdTLnF1ZXVlU3luYyAqLykge1xuICAgICAgICAgICAgbmV4dFRpY2soZmx1c2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGx0LnJhZihmbHVzaCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgY29uc3VtZSA9IChxdWV1ZSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHF1ZXVlW2ldKHBlcmZvcm1hbmNlLm5vdygpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZUVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG59O1xuY29uc3QgY29uc3VtZVRpbWVvdXQgPSAocXVldWUsIHRpbWVvdXQpID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IHRzID0gMDtcbiAgICB3aGlsZSAoaSA8IHF1ZXVlLmxlbmd0aCAmJiAodHMgPSBwZXJmb3JtYW5jZS5ub3coKSkgPCB0aW1lb3V0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBxdWV1ZVtpKytdKHRzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZUVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpID09PSBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICB9XG4gICAgZWxzZSBpZiAoaSAhPT0gMCkge1xuICAgICAgICBxdWV1ZS5zcGxpY2UoMCwgaSk7XG4gICAgfVxufTtcbmNvbnN0IGZsdXNoID0gKCkgPT4ge1xuICAgIGlmIChCVUlMRC5hc3luY1F1ZXVlKSB7XG4gICAgICAgIHF1ZXVlQ29uZ2VzdGlvbisrO1xuICAgIH1cbiAgICAvLyBhbHdheXMgZm9yY2UgYSBidW5jaCBvZiBtZWRpdW0gY2FsbGJhY2tzIHRvIHJ1biwgYnV0IHN0aWxsIGhhdmVcbiAgICAvLyBhIHRocm90dGxlIG9uIGhvdyBtYW55IGNhbiBydW4gaW4gYSBjZXJ0YWluIHRpbWVcbiAgICAvLyBET00gUkVBRFMhISFcbiAgICBjb25zdW1lKHF1ZXVlRG9tUmVhZHMpO1xuICAgIC8vIERPTSBXUklURVMhISFcbiAgICBpZiAoQlVJTEQuYXN5bmNRdWV1ZSkge1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gKHBsdC4kZmxhZ3MkICYgNiAvKiBQTEFURk9STV9GTEFHUy5xdWV1ZU1hc2sgKi8pID09PSAyIC8qIFBMQVRGT1JNX0ZMQUdTLmFwcExvYWRlZCAqL1xuICAgICAgICAgICAgPyBwZXJmb3JtYW5jZS5ub3coKSArIDE0ICogTWF0aC5jZWlsKHF1ZXVlQ29uZ2VzdGlvbiAqICgxLjAgLyAxMC4wKSlcbiAgICAgICAgICAgIDogSW5maW5pdHk7XG4gICAgICAgIGNvbnN1bWVUaW1lb3V0KHF1ZXVlRG9tV3JpdGVzLCB0aW1lb3V0KTtcbiAgICAgICAgY29uc3VtZVRpbWVvdXQocXVldWVEb21Xcml0ZXNMb3csIHRpbWVvdXQpO1xuICAgICAgICBpZiAocXVldWVEb21Xcml0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcXVldWVEb21Xcml0ZXNMb3cucHVzaCguLi5xdWV1ZURvbVdyaXRlcyk7XG4gICAgICAgICAgICBxdWV1ZURvbVdyaXRlcy5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICgocXVldWVQZW5kaW5nID0gcXVldWVEb21SZWFkcy5sZW5ndGggKyBxdWV1ZURvbVdyaXRlcy5sZW5ndGggKyBxdWV1ZURvbVdyaXRlc0xvdy5sZW5ndGggPiAwKSkge1xuICAgICAgICAgICAgLy8gc3RpbGwgbW9yZSB0byBkbyB5ZXQsIGJ1dCB3ZSd2ZSBydW4gb3V0IG9mIHRpbWVcbiAgICAgICAgICAgIC8vIGxldCdzIGxldCB0aGlzIHRoaW5nIGNvb2wgb2ZmIGFuZCB0cnkgYWdhaW4gaW4gdGhlIG5leHQgdGlja1xuICAgICAgICAgICAgcGx0LnJhZihmbHVzaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBxdWV1ZUNvbmdlc3Rpb24gPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdW1lKHF1ZXVlRG9tV3JpdGVzKTtcbiAgICAgICAgaWYgKChxdWV1ZVBlbmRpbmcgPSBxdWV1ZURvbVJlYWRzLmxlbmd0aCA+IDApKSB7XG4gICAgICAgICAgICAvLyBzdGlsbCBtb3JlIHRvIGRvIHlldCwgYnV0IHdlJ3ZlIHJ1biBvdXQgb2YgdGltZVxuICAgICAgICAgICAgLy8gbGV0J3MgbGV0IHRoaXMgdGhpbmcgY29vbCBvZmYgYW5kIHRyeSBhZ2FpbiBpbiB0aGUgbmV4dCB0aWNrXG4gICAgICAgICAgICBwbHQucmFmKGZsdXNoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBuZXh0VGljayA9IC8qQF9fUFVSRV9fKi8gKGNiKSA9PiBwcm9taXNlUmVzb2x2ZSgpLnRoZW4oY2IpO1xuY29uc3QgcmVhZFRhc2sgPSAvKkBfX1BVUkVfXyovIHF1ZXVlVGFzayhxdWV1ZURvbVJlYWRzLCBmYWxzZSk7XG5jb25zdCB3cml0ZVRhc2sgPSAvKkBfX1BVUkVfXyovIHF1ZXVlVGFzayhxdWV1ZURvbVdyaXRlcywgdHJ1ZSk7XG5leHBvcnQgeyBCVUlMRCwgRW52LCBOQU1FU1BBQ0UgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2FwcC1kYXRhJztcbmV4cG9ydCB7IEJ1aWxkLCBDU1MsIENvbnRleHQsIEZyYWdtZW50LCBILCBIIGFzIEhUTUxFbGVtZW50LCBIb3N0LCBTVEVOQ0lMX0RFVl9NT0RFLCBhZGRIb3N0RXZlbnRMaXN0ZW5lcnMsIGJvb3RzdHJhcExhenksIGNtcE1vZHVsZXMsIGNvbm5lY3RlZENhbGxiYWNrLCBjb25zb2xlRGV2RXJyb3IsIGNvbnNvbGVEZXZJbmZvLCBjb25zb2xlRGV2V2FybiwgY29uc29sZUVycm9yLCBjcmVhdGVFdmVudCwgZGVmaW5lQ3VzdG9tRWxlbWVudCwgZGlzY29ubmVjdGVkQ2FsbGJhY2ssIGRvYywgZm9yY2VNb2RlVXBkYXRlLCBmb3JjZVVwZGF0ZSwgZ2V0QXNzZXRQYXRoLCBnZXRDb25uZWN0LCBnZXRDb250ZXh0LCBnZXRFbGVtZW50LCBnZXRIb3N0UmVmLCBnZXRNb2RlLCBnZXRSZW5kZXJpbmdSZWYsIGdldFZhbHVlLCBoLCBpbnNlcnRWZG9tQW5ub3RhdGlvbnMsIGlzTWVtYmVySW5FbGVtZW50LCBsb2FkTW9kdWxlLCBtb2RlUmVzb2x1dGlvbkNoYWluLCBuZXh0VGljaywgcGFyc2VQcm9wZXJ0eVZhbHVlLCBwbHQsIHBvc3RVcGRhdGVDb21wb25lbnQsIHByb21pc2VSZXNvbHZlLCBwcm94eUNvbXBvbmVudCwgcHJveHlDdXN0b21FbGVtZW50LCByZWFkVGFzaywgcmVnaXN0ZXJIb3N0LCByZWdpc3Rlckluc3RhbmNlLCByZW5kZXJWZG9tLCBzZXRBc3NldFBhdGgsIHNldEVycm9ySGFuZGxlciwgc2V0TW9kZSwgc2V0Tm9uY2UsIHNldFBsYXRmb3JtSGVscGVycywgc2V0UGxhdGZvcm1PcHRpb25zLCBzZXRWYWx1ZSwgc3R5bGVzLCBzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0cywgc3VwcG9ydHNMaXN0ZW5lck9wdGlvbnMsIHN1cHBvcnRzU2hhZG93LCB3aW4sIHdyaXRlVGFzayB9O1xuIiwiY29uc3QgQlVJTEQgPSB7XG4gICAgYWxsUmVuZGVyRm46IGZhbHNlLFxuICAgIGNtcERpZExvYWQ6IHRydWUsXG4gICAgY21wRGlkVW5sb2FkOiBmYWxzZSxcbiAgICBjbXBEaWRVcGRhdGU6IHRydWUsXG4gICAgY21wRGlkUmVuZGVyOiB0cnVlLFxuICAgIGNtcFdpbGxMb2FkOiB0cnVlLFxuICAgIGNtcFdpbGxVcGRhdGU6IHRydWUsXG4gICAgY21wV2lsbFJlbmRlcjogdHJ1ZSxcbiAgICBjb25uZWN0ZWRDYWxsYmFjazogdHJ1ZSxcbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjazogdHJ1ZSxcbiAgICBlbGVtZW50OiB0cnVlLFxuICAgIGV2ZW50OiB0cnVlLFxuICAgIGhhc1JlbmRlckZuOiB0cnVlLFxuICAgIGxpZmVjeWNsZTogdHJ1ZSxcbiAgICBob3N0TGlzdGVuZXI6IHRydWUsXG4gICAgaG9zdExpc3RlbmVyVGFyZ2V0V2luZG93OiB0cnVlLFxuICAgIGhvc3RMaXN0ZW5lclRhcmdldERvY3VtZW50OiB0cnVlLFxuICAgIGhvc3RMaXN0ZW5lclRhcmdldEJvZHk6IHRydWUsXG4gICAgaG9zdExpc3RlbmVyVGFyZ2V0UGFyZW50OiBmYWxzZSxcbiAgICBob3N0TGlzdGVuZXJUYXJnZXQ6IHRydWUsXG4gICAgbWVtYmVyOiB0cnVlLFxuICAgIG1ldGhvZDogdHJ1ZSxcbiAgICBtb2RlOiB0cnVlLFxuICAgIG9ic2VydmVBdHRyaWJ1dGU6IHRydWUsXG4gICAgcHJvcDogdHJ1ZSxcbiAgICBwcm9wTXV0YWJsZTogdHJ1ZSxcbiAgICByZWZsZWN0OiB0cnVlLFxuICAgIHNjb3BlZDogdHJ1ZSxcbiAgICBzaGFkb3dEb206IHRydWUsXG4gICAgc2xvdDogdHJ1ZSxcbiAgICBjc3NBbm5vdGF0aW9uczogdHJ1ZSxcbiAgICBzdGF0ZTogdHJ1ZSxcbiAgICBzdHlsZTogdHJ1ZSxcbiAgICBzdmc6IHRydWUsXG4gICAgdXBkYXRhYmxlOiB0cnVlLFxuICAgIHZkb21BdHRyaWJ1dGU6IHRydWUsXG4gICAgdmRvbVhsaW5rOiB0cnVlLFxuICAgIHZkb21DbGFzczogdHJ1ZSxcbiAgICB2ZG9tRnVuY3Rpb25hbDogdHJ1ZSxcbiAgICB2ZG9tS2V5OiB0cnVlLFxuICAgIHZkb21MaXN0ZW5lcjogdHJ1ZSxcbiAgICB2ZG9tUmVmOiB0cnVlLFxuICAgIHZkb21Qcm9wT3JBdHRyOiB0cnVlLFxuICAgIHZkb21SZW5kZXI6IHRydWUsXG4gICAgdmRvbVN0eWxlOiB0cnVlLFxuICAgIHZkb21UZXh0OiB0cnVlLFxuICAgIHdhdGNoQ2FsbGJhY2s6IHRydWUsXG4gICAgdGFza1F1ZXVlOiB0cnVlLFxuICAgIGhvdE1vZHVsZVJlcGxhY2VtZW50OiBmYWxzZSxcbiAgICBpc0RlYnVnOiBmYWxzZSxcbiAgICBpc0RldjogZmFsc2UsXG4gICAgaXNUZXN0aW5nOiBmYWxzZSxcbiAgICBoeWRyYXRlU2VydmVyU2lkZTogZmFsc2UsXG4gICAgaHlkcmF0ZUNsaWVudFNpZGU6IGZhbHNlLFxuICAgIGxpZmVjeWNsZURPTUV2ZW50czogZmFsc2UsXG4gICAgbGF6eUxvYWQ6IGZhbHNlLFxuICAgIHByb2ZpbGU6IGZhbHNlLFxuICAgIHNsb3RSZWxvY2F0aW9uOiB0cnVlLFxuICAgIGFwcGVuZENoaWxkU2xvdEZpeDogZmFsc2UsXG4gICAgY2xvbmVOb2RlRml4OiBmYWxzZSxcbiAgICBoeWRyYXRlZEF0dHJpYnV0ZTogZmFsc2UsXG4gICAgaHlkcmF0ZWRDbGFzczogdHJ1ZSxcbiAgICBzYWZhcmkxMDogZmFsc2UsXG4gICAgc2NyaXB0RGF0YU9wdHM6IGZhbHNlLFxuICAgIHNjb3BlZFNsb3RUZXh0Q29udGVudEZpeDogZmFsc2UsXG4gICAgc2hhZG93RG9tU2hpbTogZmFsc2UsXG4gICAgc2xvdENoaWxkTm9kZXNGaXg6IGZhbHNlLFxuICAgIGludmlzaWJsZVByZWh5ZHJhdGlvbjogdHJ1ZSxcbiAgICBwcm9wQm9vbGVhbjogdHJ1ZSxcbiAgICBwcm9wTnVtYmVyOiB0cnVlLFxuICAgIHByb3BTdHJpbmc6IHRydWUsXG4gICAgY3NzVmFyU2hpbTogZmFsc2UsXG4gICAgY29uc3RydWN0YWJsZUNTUzogdHJ1ZSxcbiAgICBjbXBTaG91bGRVcGRhdGU6IHRydWUsXG4gICAgZGV2VG9vbHM6IGZhbHNlLFxuICAgIGR5bmFtaWNJbXBvcnRTaGltOiBmYWxzZSxcbiAgICBzaGFkb3dEZWxlZ2F0ZXNGb2N1czogdHJ1ZSxcbiAgICBpbml0aWFsaXplTmV4dFRpY2s6IGZhbHNlLFxuICAgIGFzeW5jTG9hZGluZzogZmFsc2UsXG4gICAgYXN5bmNRdWV1ZTogZmFsc2UsXG4gICAgdHJhbnNmb3JtVGFnTmFtZTogZmFsc2UsXG4gICAgYXR0YWNoU3R5bGVzOiB0cnVlLFxufTtcbmNvbnN0IEVudiA9IHt9O1xuY29uc3QgTkFNRVNQQUNFID0gLyogZGVmYXVsdCAqLyAnYXBwJztcblxuZXhwb3J0IHsgQlVJTEQsIEVudiwgTkFNRVNQQUNFIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=