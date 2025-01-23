import{d as N,L as _,O as C,o as I,c as B,F as w,aI as z,v as n,aJ as f,aK as V,l as $,ag as L,aL as M}from"../modules/vue-DfOUTzrx.js";import{aj as T,ak as D,ai as E,C as F}from"../index-nPacZ_gs.js";import{u as G}from"./context-vsVq2I3n.js";const K=N({__name:"VClickGap",props:{size:{type:[String,Number],default:1}},setup(l){const a=l,{$clicksContext:o}=G(),p=T();let c=+a.size;return Number.isNaN(c)&&(console.warn(`[slidev] Invalid size for VClickGap: ${a.size}`),c=1),_(()=>{const i=o.currentOffset+c-1;o.register(p,{max:i,delta:c})}),C(()=>{o.unregister(p)}),(i,r)=>(I(),B(w))}}),b=["ul","ol"],O=N({props:{depth:{type:[Number,String],default:1},every:{type:[Number,String],default:1},at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},handleSpecialElements:{type:Boolean,default:!0}},render(){var A,S;const l=+this.every,a=D(this.at),o=typeof a=="string";if(!a){console.warn("[slidev] Invalid at prop for v-clicks component:",a);return}const p=z("click"),c=(s,e)=>L(s,[[p,e,"",{hide:this.hide,fade:this.fade}]]),i=s=>s.flatMap(e=>f(e)&&typeof e.type=="symbol"&&Array.isArray(e.children)?i(e.children):[e]);let r=(S=(A=this.$slots).default)==null?void 0:S.call(A);if(!r)return;r=i(E(r));const k=(s,e=1)=>i(s).map(t=>{if(!f(t))return t;if(b.includes(t.type)&&Array.isArray(t.children)){const d=u(t.children,e+1);return n(t,{},d)}return n(t)});let g=1,h=0;const u=(s,e=1)=>i(s).map(t=>{if(!f(t)||t.type===V)return t;const d=+a+Math.ceil(g++/l)-1;let m;e<+this.depth&&Array.isArray(t.children)?m=n(t,{},k(t.children,e)):m=n(t);const v=d-h;return h=d,c(m,o?v>=0?`+${v}`:`${v}`:d)}),y=()=>$(K,{size:+a+Math.ceil((g-1)/l)-1-h});if(this.handleSpecialElements){if(r.length===1&&b.includes(r[0].type)&&Array.isArray(r[0].children))return n(r[0],{},[...u(r[0].children),y()]);if(r.length===1&&r[0].type==="table"){const s=r[0];if(Array.isArray(s.children))return n(s,{},s.children.map(e=>f(e)?e.type==="tbody"&&Array.isArray(e.children)?n(e,{},[...u(e.children),y()]):n(e):e))}}return[...u(r),y()]}}),U=N({props:{at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},wrapText:{type:Function,default:l=>n("span",l)}},render(){return n(O,{every:F,at:this.at,hide:this.hide,fade:this.fade,handleSpecialElements:!1},{default:()=>{var l,a;return(a=(l=this.$slots).default)==null?void 0:a.call(l).map(o=>o.type===M?this.wrapText(o):o)}})}});export{U as _};
