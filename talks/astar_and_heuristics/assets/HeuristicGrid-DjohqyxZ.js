import{h as b,r as M,z as C,f as h,o as c,F as S,Q as z,n as v,b as T,i as w,A,g as G,t as k,k as j}from"./modules/vue-Bz_quXwQ.js";import{u as B}from"./slidev/context-CeFFUEaU.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),L=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,r)=>r?r.toUpperCase():o.toLowerCase()),$=a=>{const e=L(a);return e.charAt(0).toUpperCase()+e.slice(1)},V=(...a)=>a.filter((e,o,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===o).join(" ").trim(),_=a=>a==="";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var p={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=({name:a,iconNode:e,absoluteStrokeWidth:o,"absolute-stroke-width":r,strokeWidth:d,"stroke-width":f,size:l=p.width,color:u=p.stroke,...s},{slots:t})=>b("svg",{...p,...s,width:l,height:l,stroke:u,"stroke-width":_(o)||_(r)||o===!0||r===!0?Number(d||f||p["stroke-width"])*24/Number(l):d||f||p["stroke-width"],class:V("lucide",s.class,...a?[`lucide-${x($(a))}-icon`,`lucide-${x(a)}`]:["lucide-icon"])},[...e.map(n=>b(...n)),...t.default?[t.default()]:[]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=(a,e)=>(o,{slots:r,attrs:d})=>b(F,{...d,...o,iconNode:e,name:a},r);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=y("mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=y("sprout",[["path",{d:"M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",key:"139s4v"}],["path",{d:"M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4",key:"1dlkgp"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=y("trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=y("waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]),Z={key:0},D={key:1},E={key:3,class:"z-10 text-center leading-tight"},U={class:"font-bold"},q={key:0,class:"text-[0.55rem] opacity-70"},R={__name:"HeuristicGrid",props:{heuristic:{type:String,default:"manhattan"},size:{type:Number,default:5},start:{type:Object,default:()=>({r:0,c:0})},showStart:{type:Boolean,default:!0},goal:{type:Object,default:()=>({r:4,c:4})},showTerrain:{type:Boolean,default:!1},terrainCosts:{type:Object,default:()=>({plain:0,forest:2,mountain:5,water:10})}},setup(a){B();const e=a,o=["plain","forest","mountain","water"],r=M(Array.from({length:e.size},()=>Array.from({length:e.size},()=>o[Math.floor(Math.random()*o.length)])));function d(u,s){const t=Math.abs(e.goal.c-s),n=Math.abs(e.goal.r-u);let i=0;switch(e.heuristic){case"manhattan":default:i=t+n;break;case"chebyshev":i=Math.max(t,n);break;case"euclidean":i=Math.sqrt(t*t+n*n);break}if(e.showTerrain===!1)return{total:i.toFixed(1),base:i,penalty:0};const g=r.value?.[u]?.[s]||"plain",m=e.terrainCosts[g]||0;return{total:(i+m).toFixed(1),base:i,penalty:m}}function f(u){switch(u){case"forest":return I;case"mountain":return O;case"water":return N;case"plain":return H;default:return null}}const l=C(()=>Array.from({length:e.size},(u,s)=>Array.from({length:e.size},(t,n)=>{const i=r.value?.[s]?.[n]||"plain",g=e.showTerrain?f(i):null,m=d(s,n);return{r:s,c:n,terrain:i,icon:g,isStart:e.showStart&&s===e.start.r&&n===e.start.c,isGoal:s===e.goal.r&&n===e.goal.c,h:m}})));return(u,s)=>(c(),h("div",{class:"inline-grid",style:j(`grid-template-columns: repeat(${e.size}, 3rem);`)},[(c(!0),h(S,null,z(l.value.flat(),t=>(c(),h("div",{key:`${t.r}-${t.c}`,class:v(["flex items-center justify-center border text-xs h-12 w-12",{"bg-blue-300 font-bold":t.isStart,"bg-red-300 font-bold":t.isGoal,"bg-green-100":t.terrain==="plain"&&!t.isStart&&!t.isGoal&&e.showTerrain,"bg-green-300":t.terrain==="forest"&&!t.isStart&&!t.isGoal&&e.showTerrain,"bg-gray-300":t.terrain==="mountain"&&!t.isStart&&!t.isGoal&&e.showTerrain,"bg-blue-100":t.terrain==="water"&&!t.isStart&&!t.isGoal&&e.showTerrain}])},[t.isStart?(c(),h("span",Z,"S")):t.isGoal?(c(),h("span",D,"G")):t.icon?(c(),T(A(t.icon),{key:2,class:v(["absolute w-10 h-10 opacity-30",{"text-green-600":t.terrain==="forest","text-green-400":t.terrain==="plain","text-gray-600":t.terrain==="mountain","text-blue-500":t.terrain==="water"}])},null,8,["class"])):w("v-if",!0),!t.isStart&&!t.isGoal?(c(),h("div",E,[G("div",U,k(t.h.total),1),e.showTerrain?(c(),h("div",q,"h:"+k(t.h.base)+" p:"+k(t.h.penalty),1)):w("v-if",!0)])):w("v-if",!0)],2))),128))],4))}};export{O as M,H as S,I as T,N as W,R as _};
