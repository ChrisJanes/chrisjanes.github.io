import{d as N,B as k,D as C,o as B,c as I,F as $,M as w,v as a,Z as f,_ as z,l as M,N as V,$ as T}from"../modules/vue-BsyFHM2O.js";import{m as D,G,I as E,C as F}from"../index-MT-4ei2m.js";import{u as L}from"./context-jadggw9a.js";const K=N({__name:"VClickGap",props:{size:{type:[String,Number],default:1}},setup(l){const s=l,{$clicksContext:o}=L(),p=D();let c=+s.size;return Number.isNaN(c)&&(console.warn(`[slidev] Invalid size for VClickGap: ${s.size}`),c=1),k(()=>{const i=o.currentOffset+c-1;o.register(p,{max:i,delta:c})}),C(()=>{o.unregister(p)}),(i,r)=>(B(),I($))}}),_=["ul","ol"],O=N({props:{depth:{type:[Number,String],default:1},every:{type:[Number,String],default:1},at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},handleSpecialElements:{type:Boolean,default:!0}},render(){var g,S;const l=+this.every,s=G(this.at),o=typeof s=="string";if(!s){console.warn("[slidev] Invalid at prop for v-clicks component:",s);return}const p=w("click"),c=(n,e)=>V(n,[[p,e,"",{hide:this.hide,fade:this.fade}]]),i=n=>n.flatMap(e=>f(e)&&typeof e.type=="symbol"&&Array.isArray(e.children)?i(e.children):[e]);let r=(S=(g=this.$slots).default)==null?void 0:S.call(g);if(!r)return;r=i(E(r));const b=(n,e=1)=>i(n).map(t=>{if(!f(t))return t;if(_.includes(t.type)&&Array.isArray(t.children)){const d=u(t.children,e+1);return a(t,{},d)}return a(t)});let A=1,h=0;const u=(n,e=1)=>i(n).map(t=>{if(!f(t)||t.type===z)return t;const d=+s+Math.ceil(A++/l)-1;let m;e<+this.depth&&Array.isArray(t.children)?m=a(t,{},b(t.children,e)):m=a(t);const v=d-h;return h=d,c(m,o?v>=0?`+${v}`:`${v}`:d)}),y=()=>M(K,{size:+s+Math.ceil((A-1)/l)-1-h});if(this.handleSpecialElements){if(r.length===1&&_.includes(r[0].type)&&Array.isArray(r[0].children))return a(r[0],{},[...u(r[0].children),y()]);if(r.length===1&&r[0].type==="table"){const n=r[0];if(Array.isArray(n.children))return a(n,{},n.children.map(e=>f(e)?e.type==="tbody"&&Array.isArray(e.children)?a(e,{},[...u(e.children),y()]):a(e):e))}}return[...u(r),y()]}}),Z=N({props:{at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},wrapText:{type:Function,default:l=>a("span",l)}},render(){return a(O,{every:F,at:this.at,hide:this.hide,fade:this.fade,handleSpecialElements:!1},{default:()=>{var l,s;return(s=(l=this.$slots).default)==null?void 0:s.call(l).map(o=>o.type===T?this.wrapText(o):o)}})}});export{Z as _};
