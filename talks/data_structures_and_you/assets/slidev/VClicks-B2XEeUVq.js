import{m as C,t as V,v as z}from"../index-7mOp5CWy.js";import{d as k,D as B,B as I,o as _,c as $,F as w,N as D,v as a,P as f,Q as M,l as G,O as E}from"../modules/vue-NONPKcAw.js";import{u as F}from"./context-CEkR0Qlu.js";const L=k({__name:"VClickGap",props:{size:{type:[String,Number],default:1}},setup(d){const n=d,{$clicksContext:i}=F(),p=C();let o=+n.size;return Number.isNaN(o)&&(console.warn(`[slidev] Invalid size for VClickGap: ${n.size}`),o=1),B(()=>{const l=i.currentOffset+o-1;i.register(p,{max:l,delta:o})}),I(()=>{i.unregister(p)}),(l,r)=>(_(),$(w))}}),b=["ul","ol"],Q=k({props:{depth:{type:[Number,String],default:1},every:{type:[Number,String],default:1},at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},handleSpecialElements:{type:Boolean,default:!0}},render(){var A,g;const d=+this.every,n=V(this.at),i=typeof n=="string";if(!n){console.warn("[slidev] Invalid at prop for v-clicks component:",n);return}const p=D("click"),o=(s,e)=>E(s,[[p,e,"",{hide:this.hide,fade:this.fade}]]),l=s=>s.flatMap(e=>f(e)&&typeof e.type=="symbol"&&Array.isArray(e.children)?l(e.children):[e]);let r=(g=(A=this.$slots).default)==null?void 0:g.call(A);if(!r)return;r=l(z(r));const S=(s,e=1)=>l(s).map(t=>{if(!f(t))return t;if(b.includes(t.type)&&Array.isArray(t.children)){const c=u(t.children,e+1);return a(t,{},c)}return a(t)});let N=1,h=0;const u=(s,e=1)=>l(s).map(t=>{if(!f(t)||t.type===M)return t;const c=+n+Math.ceil(N++/d)-1;let m;e<+this.depth&&Array.isArray(t.children)?m=a(t,{},S(t.children,e)):m=a(t);const v=c-h;return h=c,o(m,i?v>=0?`+${v}`:`${v}`:c)}),y=()=>G(L,{size:+n+Math.ceil((N-1)/d)-1-h});if(this.handleSpecialElements){if(r.length===1&&b.includes(r[0].type)&&Array.isArray(r[0].children))return a(r[0],{},[...u(r[0].children),y()]);if(r.length===1&&r[0].type==="table"){const s=r[0];if(Array.isArray(s.children))return a(s,{},s.children.map(e=>f(e)?e.type==="tbody"&&Array.isArray(e.children)?a(e,{},[...u(e.children),y()]):a(e):e))}}return[...u(r),y()]}});export{Q as V};
