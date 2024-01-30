"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[54861,19476],{19476:(t,e,n)=>{function r(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function i(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return o()}},n.exports),n.exports}function o(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}n.d(e,{n:()=>r,o:()=>i,r:()=>o})},96607:(t,e,n)=>{n.d(e,{A:()=>Z,B:()=>S,C:()=>L,D:()=>V,E:()=>z,F:()=>G,H:()=>j,I:()=>_,L:()=>k,R:()=>D,S:()=>q,V:()=>A,_:()=>C,a:()=>l,b:()=>I,c:()=>h,d:()=>g,f:()=>p,g:()=>x,h:()=>y,i:()=>a,j:()=>P,k:()=>O,l:()=>d,m:()=>v,o:()=>f,p:()=>m,q:()=>H,r:()=>o,s:()=>u,t:()=>s,u:()=>c,v:()=>R,w:()=>E,x:()=>M,y:()=>w,z:()=>b});var r=n(7972),i=n(53223);function o(t){return r.a.extendedSpatialReferenceInfo(t)}function s(t,e,n){return r.a.clip(i.t,t,e,n)}function a(t,e,n){return r.a.cut(i.t,t,e,n)}function u(t,e,n){return r.a.contains(i.t,t,e,n)}function c(t,e,n){return r.a.crosses(i.t,t,e,n)}function f(t,e,n,o){return r.a.distance(i.t,t,e,n,o)}function l(t,e,n){return r.a.equals(i.t,t,e,n)}function h(t,e,n){return r.a.intersects(i.t,t,e,n)}function p(t,e,n){return r.a.touches(i.t,t,e,n)}function d(t,e,n){return r.a.within(i.t,t,e,n)}function m(t,e,n){return r.a.disjoint(i.t,t,e,n)}function x(t,e,n){return r.a.overlaps(i.t,t,e,n)}function g(t,e,n,o){return r.a.relate(i.t,t,e,n,o)}function v(t,e){return r.a.isSimple(i.t,t,e)}function y(t,e){return r.a.simplify(i.t,t,e)}function w(t,e,n=!1){return r.a.convexHull(i.t,t,e,n)}function M(t,e,n){return r.a.difference(i.t,t,e,n)}function E(t,e,n){return r.a.symmetricDifference(i.t,t,e,n)}function Z(t,e,n){return r.a.intersect(i.t,t,e,n)}function z(t,e,n=null){return r.a.union(i.t,t,e,n)}function P(t,e,n,o,s,a,u){return r.a.offset(i.t,t,e,n,o,s,a,u)}function R(t,e,n,o,s=!1){return r.a.buffer(i.t,t,e,n,o,s)}function b(t,e,n,o,s,a,u){return r.a.geodesicBuffer(i.t,t,e,n,o,s,a,u)}function _(t,e,n,o=!0){return r.a.nearestCoordinate(i.t,t,e,n,o)}function A(t,e,n){return r.a.nearestVertex(i.t,t,e,n)}function V(t,e,n,o,s){return r.a.nearestVertices(i.t,t,e,n,o,s)}function j(t,e,n,i){if(null==e||null==i)throw new Error("Illegal Argument Exception");const o=r.a.rotate(e,n,i);return o.spatialReference=t,o}function D(t,e,n){if(null==e||null==n)throw new Error("Illegal Argument Exception");const i=r.a.flipHorizontal(e,n);return i.spatialReference=t,i}function I(t,e,n){if(null==e||null==n)throw new Error("Illegal Argument Exception");const i=r.a.flipVertical(e,n);return i.spatialReference=t,i}function S(t,e,n,o,s){return r.a.generalize(i.t,t,e,n,o,s)}function k(t,e,n,o){return r.a.densify(i.t,t,e,n,o)}function q(t,e,n,o,s=0){return r.a.geodesicDensify(i.t,t,e,n,o,s)}function C(t,e,n){return r.a.planarArea(i.t,t,e,n)}function H(t,e,n){return r.a.planarLength(i.t,t,e,n)}function L(t,e,n,o){return r.a.geodesicArea(i.t,t,e,n,o)}function O(t,e,n,o){return r.a.geodesicLength(i.t,t,e,n,o)}var G=Object.freeze({__proto__:null,extendedSpatialReferenceInfo:o,clip:s,cut:a,contains:u,crosses:c,distance:f,equals:l,intersects:h,touches:p,within:d,disjoint:m,overlaps:x,relate:g,isSimple:v,simplify:y,convexHull:w,difference:M,symmetricDifference:E,intersect:Z,union:z,offset:P,buffer:R,geodesicBuffer:b,nearestCoordinate:_,nearestVertex:A,nearestVertices:V,rotate:j,flipHorizontal:D,flipVertical:I,generalize:S,densify:k,geodesicDensify:q,planarArea:C,planarLength:H,geodesicArea:L,geodesicLength:O})},37551:(t,e,n)=>{n.r(e),n.d(e,{executeGEOperation:()=>i});var r=n(96607);function i(t){return(0,r.F[t.operation])(...t.parameters)}n(7972),n(53223)},53223:(t,e,n)=>{n.d(e,{t:()=>r});const r={convertToGEGeometry:function(t,e){return null==e?null:t.convertJSONToGeometry(e)},exportPoint:function(t,e,n){const r=new i(t.getPointX(e),t.getPointY(e),n),o=t.hasZ(e),s=t.hasM(e);return o&&(r.z=t.getPointZ(e)),s&&(r.m=t.getPointM(e)),r},exportPolygon:function(t,e,n){return new o(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportPolyline:function(t,e,n){return new s(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportMultipoint:function(t,e,n){return new a(t.exportPoints(e),n,t.hasZ(e),t.hasM(e))},exportExtent:function(t,e,n){const r=t.hasZ(e),i=t.hasM(e),o=new u(t.getXMin(e),t.getYMin(e),t.getXMax(e),t.getYMax(e),n);if(r){const n=t.getZExtent(e);o.zmin=n.vmin,o.zmax=n.vmax}if(i){const n=t.getMExtent(e);o.mmin=n.vmin,o.mmax=n.vmax}return o}};class i{constructor(t,e,n){this.x=t,this.y=e,this.spatialReference=n,this.z=void 0,this.m=void 0}}class o{constructor(t,e,n,r){this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),r&&(this.hasM=r)}}class s{constructor(t,e,n,r){this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),r&&(this.hasM=r)}}class a{constructor(t,e,n,r){this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),r&&(this.hasM=r)}}class u{constructor(t,e,n,r,i){this.xmin=t,this.ymin=e,this.xmax=n,this.ymax=r,this.spatialReference=i,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}}}]);