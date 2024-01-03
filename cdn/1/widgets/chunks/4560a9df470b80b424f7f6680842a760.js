/*! For license information please see 4560a9df470b80b424f7f6680842a760.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[11150],{58892:(e,t,s)=>{s.d(t,{a:()=>a,b:()=>i,c:()=>n,d:()=>r});const r=(0,s(27010).c)({typeKeywords:[],customParameters:[],analyzedLocationTypes:[],allowStoredAuth:!0,isSecured:null,checkAuth:!1}),a=r.state,n=r.state,i=r.state},11150:(e,t,s)=>{s.r(t),s.d(t,{arcgis_new_item_pages_data_store_select_arango_credentials:()=>o});var r=s(28384),a=s(47682),n=s(58892),i=s(54871);s(27010);const o=class{constructor(e){(0,r.r)(this,e),this.newItemUpdatePage=(0,r.c)(this,"newItemUpdatePage",7),this.inputFields=["username","password","database"],this.hosts=n.a.hosts||"",this.useSsl=n.a.useSsl||!1,this.username=n.a.username||"",this.password=n.a.password||"",this.database=n.a.database||"",this.error=[],this.renderError=!1}async componentWillLoad(){this.i18n=i.u.i18n.dataStoreSelectNoSql}validateInputs(){const{i18n:e}=this,t=[];return this.hosts||t.push(e.hosts),this.username||t.push(e.username),this.password||t.push(e.password),this.database||t.push(e.database),this.error=t,!!this.error.length}renderErrorItem(){if(null!==this.error){const e=this.i18n.errorMessage,t=(0,a.r)(e,this.error.join(", "),"missingFields");return(0,r.h)("arcgis-new-item-alert",{heading:this.i18n.error,description:t,active:null!==this.error,onAlertDismiss:()=>{this.error=null}})}}handleNext(){this.validateInputs()?this.renderError=!0:(this.renderError=!1,n.a.hosts=this.hosts,n.a.useSsl=this.useSsl,n.a.username=this.username,n.a.password=this.password,n.a.database=this.database,this.newItemUpdatePage.emit("dataStoreSelectServerList"))}render(){const{i18n:e,inputFields:t}=this;return(0,r.h)("div",null,(0,r.h)("arcgis-new-item-description",{header:e.credentialDescription}),(0,r.h)("calcite-label",{scale:"l",class:"arango-label-hosts"},e.hosts,(0,r.h)("calcite-input",{onCalciteInputChange:e=>{const t=e.target.value;this.hosts=t},value:this.hosts}),(0,r.h)("p",{class:"arango-example-text"},e.fallBackServersExample)),(0,r.h)("calcite-label",{scale:"l",class:"arango-label-input",layout:"inline"},e.useSsl,(0,r.h)("calcite-checkbox",{scale:"l",onCalciteCheckboxChange:e=>{const t=e.target.checked;this.useSsl=t},checked:this.useSsl})),t.map((t=>(0,r.h)("calcite-label",{scale:"l",class:"arango-label-input",key:t},e[t],(0,r.h)("calcite-input",{onCalciteInputChange:e=>{const s=e.target.value;this[t]=s},type:"password"===t?"password":"text",value:this[t]})))),this.renderError?this.renderErrorItem():null)}};o.style=".arango-label-hosts{margin-top:1.5rem}.arango-label-input{margin-top:0.25rem}.arango-example-text{margin:0;font-size:0.875rem}"},47682:(e,t,s)=>{s.d(t,{r:()=>a});const r={fileName:/\$\{fileName\}/g,fileType:/\$\{type\}/g,typeList:/\$\{typeList\}/g,missingFields:/\$\{\missingFields\}/g},a=(e,t,s)=>{const a=new RegExp(r[s]);return null==e?void 0:e.replace(a,t)}},27010:(e,t,s)=>{s.d(t,{c:()=>o});var r=s(28384);const a=e=>!("isConnected"in e)||e.isConnected,n=((e,t)=>{let s;return(...e)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,(e=>{for(let t of e.keys())e.set(t,e.get(t).filter(a))})(...e)}),2e3)}})(),i=e=>"function"==typeof e?e():e,o=(e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{const s=i(e);let r=new Map(Object.entries(null!=s?s:{}));const a={dispose:[],get:[],set:[],reset:[]},n=()=>{var t;r=new Map(Object.entries(null!==(t=i(e))&&void 0!==t?t:{})),a.reset.forEach((e=>e()))},o=e=>(a.get.forEach((t=>t(e))),r.get(e)),l=(e,s)=>{const n=r.get(e);t(s,n,e)&&(r.set(e,s),a.set.forEach((t=>t(e,s,n))))},c="undefined"==typeof Proxy?{}:new Proxy(s,{get:(e,t)=>o(t),ownKeys:e=>Array.from(r.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>r.has(t),set:(e,t,s)=>(l(t,s),!0)}),h=(e,t)=>(a[e].push(t),()=>{((e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)})(a[e],t)});return{state:c,get:o,set:l,on:h,onChange:(t,s)=>{const r=h("set",((e,r)=>{e===t&&s(r)})),a=h("reset",(()=>s(i(e)[t])));return()=>{r(),a()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(h("set",t.set)),t.get&&e.push(h("get",t.get)),t.reset&&e.push(h("reset",t.reset)),t.dispose&&e.push(h("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{a.dispose.forEach((e=>e())),n()},reset:n,forceUpdate:e=>{const t=r.get(e);a.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof r.g)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,r.g)();s&&((e,t,s)=>{const r=e.get(t);r?r.includes(s)||r.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(r.f)),n(e)},reset:()=>{e.forEach((e=>e.forEach(r.f))),n(e)}}})()),s}},54871:(e,t,s)=>{s.d(t,{a:()=>r,u:()=>a});const r=(0,s(27010).c)({nextText:"next",workflow:"content",scale:"m",disableScroll:!1,featureFlags:{tileLayer3dTiles:!1}}),a=r.state}}]);