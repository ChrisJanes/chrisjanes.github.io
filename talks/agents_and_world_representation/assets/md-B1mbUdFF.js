import{h as d,C,f as h,o as l,g as i,F as b,S as B,D as L,n as M,b as v,B as P,t as $,w as f,e as j,v as D,x as A,E as _}from"./modules/vue-Bb6m8YdB.js";import{u as x,f as F}from"./slidev/context-DuNwx2B2.js";import{I}from"./side-title-CrJX6akD.js";import"./index-DrqMA4vb.js";import"./modules/shiki-DB49ljUF.js";import"./layoutHelper-HtdtuDyr.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),O=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,r)=>r?r.toUpperCase():o.toLowerCase()),V=e=>{const t=O(e);return t.charAt(0).toUpperCase()+t.slice(1)},Z=(...e)=>e.filter((t,o,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===o).join(" ").trim(),g=e=>e==="";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=({name:e,iconNode:t,absoluteStrokeWidth:o,"absolute-stroke-width":r,strokeWidth:s,"stroke-width":c,size:a=n.width,color:k=n.stroke,...p},{slots:u})=>d("svg",{...n,...p,width:a,height:a,stroke:k,"stroke-width":g(o)||g(r)||o===!0||r===!0?Number(s||c||n["stroke-width"])*24/Number(a):s||c||n["stroke-width"],class:Z("lucide",p.class,...e?[`lucide-${w(V(e))}-icon`,`lucide-${w(e)}`]:["lucide-icon"])},[...t.map(y=>d(...y)),...u.default?[u.default()]:[]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(e,t)=>(o,{slots:r,attrs:s})=>d(E,{...s,...o,iconNode:t,name:e},r);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=m("compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=m("footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=m("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),T={class:"h-full flex items-center justify-center"},U={class:"flex flex-col items-center gap-6 w-full mt-6"},R={class:"ml-4 flex flex-col"},q={class:"text-lg font-bold leading-tight"},G={__name:"ModuleOverview",setup(e){x();const t=[{name:"Behaviour Selection",icon:N,color:"bg-amber-200 border-amber-500"},{name:"Path Finding",icon:S,color:"bg-amber-200 border-amber-500"},{name:"Locomotion",icon:z,color:"bg-amber-200 border-amber-500"}];return(o,r)=>{const s=C("click");return l(),h("div",T,[i("div",U,[(l(),h(b,null,B(t,(c,a)=>L(i("div",{key:c.name,class:M(["flex items-center w-80 p-4 border-2 rounded-xl shadow-lg transform",c.color])},[(l(),v(P(c.icon),{class:"w-8 h-8 text-gray-800 flex-shrink-0"})),i("div",R,[i("div",q,$(c.name),1)])],2),[[s,a+1]])),64))])])}}},W={__name:"slides.md__slidev_2",setup(e){const{$clicksContext:t,$frontmatter:o}=x();return t.setup(),(r,s)=>{const c=G;return l(),v(I,D(A(_(F)(_(o),1))),{title:f(a=>[...s[0]||(s[0]=[i("h1",null,"Module Overview",-1)])]),content:f(a=>[j(c)]),_:1},16)}}};export{W as default};
