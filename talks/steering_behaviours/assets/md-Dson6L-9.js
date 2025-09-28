import{h as d,aK as b,f as h,o as l,g as n,F as B,ak as L,ai as P,n as $,b as k,aw as j,t as _,w as f,e as A,v as S,x as D,T as g}from"./modules/vue-CrRDdA8a.js";import{u as y,f as I}from"./slidev/context-DhW34tNX.js";import{I as M}from"./side-title-eODhx4DH.js";import"./index-CIGJWBDX.js";import"./modules/shiki-BHxSvP0H.js";import"./layoutHelper-HtdtuDyr.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),V=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,s)=>s?s.toUpperCase():o.toLowerCase()),Z=e=>{const t=V(e);return t.charAt(0).toUpperCase()+t.slice(1)},F=(...e)=>e.filter((t,o,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===o).join(" ").trim(),w=e=>e==="";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=({name:e,iconNode:t,absoluteStrokeWidth:o,"absolute-stroke-width":s,strokeWidth:c,"stroke-width":r,size:a=i.width,color:v=i.stroke,...p},{slots:u})=>d("svg",{...i,...p,width:a,height:a,stroke:v,"stroke-width":w(o)||w(s)||o===!0||s===!0?Number(c||r||i["stroke-width"])*24/Number(a):c||r||i["stroke-width"],class:F("lucide",p.class,...e?[`lucide-${x(Z(e))}-icon`,`lucide-${x(e)}`]:["lucide-icon"])},[...t.map(C=>d(...C)),...u.default?[u.default()]:[]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(e,t)=>(o,{slots:s,attrs:c})=>d(T,{...c,...o,iconNode:t,name:e},s);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=m("compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=m("footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=m("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),U={class:"h-full flex items-center justify-center"},H={class:"flex flex-col items-center gap-6 w-full mt-6"},O={class:"ml-4 flex flex-col"},R={class:"text-lg font-bold leading-tight"},q={class:"text-sm text-gray-700 leading-snug"},G={__name:"SteeringLayers",setup(e){y();const t=[{name:"Action Selection",description:"What to do?",icon:N,color:"bg-teal-200 border-teal-500"},{name:"Steering",description:"How to do it?",icon:z,color:"bg-teal-300 border-teal-600"},{name:"Locomotion",description:"Physical execution",icon:E,color:"bg-teal-400 border-teal-700"}];return(o,s)=>{const c=b("click");return l(),h("div",U,[n("div",H,[(l(),h(B,null,L(t,(r,a)=>P(n("div",{key:r.name,class:$(["flex items-center w-80 p-4 border-2 rounded-xl shadow-lg transform",r.color])},[(l(),k(j(r.icon),{class:"w-8 h-8 text-gray-800 flex-shrink-0"})),n("div",O,[n("div",R,_(r.name),1),n("div",q,_(r.description),1)])],2),[[c,a+1]])),64))])])}}},ee={__name:"slides.md__slidev_2",setup(e){const{$clicksContext:t,$frontmatter:o}=y();return t.setup(),(s,c)=>{const r=G;return l(),k(M,S(D(g(I)(g(o),1))),{title:f(a=>[...c[0]||(c[0]=[n("h1",null,"Brains, Behaviours, Bodies",-1)])]),content:f(a=>[A(r)]),_:1},16)}}};export{ee as default};
