define(["exports","./index-86304dcd","./index2-600fb1b2"],(function(e,t,s){"use strict";const a=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisQueryTargetSelectChange=t.createEvent(this,"analysisQueryTargetSelectChange",7),this.onLayerSelectChange=e=>{var t;const s=e.target.selectedOption.value;this.target=null!==(t=this.layers.find((e=>e.id===s)))&&void 0!==t?t:this.layers[0],this.analysisQueryTargetSelectChange.emit(this.target)},this.target=void 0,this.disabled=!1,this.recordsTerm="features",this.layers=[]}async componentWillLoad(){({strings:this.strings}=await s.fetchComponentLocaleStrings(this.hostElement,t.getAssetPath("."))),void 0===this.target&&(this.target=this.layers[0],this.analysisQueryTargetSelectChange.emit(this.target))}render(){const e="records"===this.recordsTerm?this.strings.recordsLabel:this.strings.featuresLabel;return t.h(t.Host,null,t.h("calcite-label",null,e,t.h("calcite-select",{label:e,onCalciteSelectChange:this.onLayerSelectChange,width:"auto",disabled:this.disabled},this.layers.map((e=>t.h("calcite-option",{value:e.id,selected:this.target.id===e.id,key:e.id},s.getLayerLabel(e)))))))}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:var(--calcite-ui-border-2);--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height:30vh;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{display:flex}"}},[1,"analysis-query-target-select",{target:[1040],disabled:[4],recordsTerm:[1,"records-term"],layers:[16]}]);function i(){"undefined"!=typeof customElements&&["analysis-query-target-select"].forEach((e=>{"analysis-query-target-select"===e&&(customElements.get(e)||customElements.define(e,a))}))}i(),e.AnalysisQueryTargetSelect=a,e.defineCustomElement=i}));