import{d as H,z as g,o as v,b as m,e as u,D as T,F as B,x as h,Z as z,P as I,W as P,i as f,h as D,t as E,N as F,n as R,H as V,G as K}from"../modules/vue-Q5I2hRP5.js";import{A as j,B as q,C as N,_ as G}from"../index-6EOZDD_Y.js";const U=["title"],W={class:"flex gap-0.2 items-center min-w-16 font-mono mr1"},X={"text-primary":""},Z={op50:"","text-sm":""},J={key:1,op50:"","flex-auto":"",pl1:""},O={relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~"},Q=["min","max"],Y=H({__name:"ClicksSlider",props:{clicksContext:{},readonly:{type:Boolean},active:{type:Boolean,default:!0}},setup(M){const d=M,t=g(()=>d.clicksContext.total),k=g(()=>j(0,d.clicksContext.clicksStart,t.value)),p=g(()=>t.value-k.value+1),i=g({get(){return d.clicksContext.current>t.value?-1:d.clicksContext.current},set(s){d.clicksContext.current=s}}),b=g(()=>q(k.value,t.value+1));function x(){d.readonly||(i.value<0||i.value>t.value)&&(i.value=0)}return(s,n)=>(v(),m("div",{class:f(["flex gap-1 items-center select-none",p.value&&d.clicksContext.isMounted?"":"op50"]),title:`Clicks in this slide: ${p.value}`},[u("div",W,[n[4]||(n[4]=u("div",{class:"i-carbon:cursor-1 text-sm op50"},null,-1)),i.value>=0&&i.value!==T(N)&&s.active?(v(),m(B,{key:0},[n[2]||(n[2]=u("div",{"flex-auto":""},null,-1)),u("span",X,h(i.value),1),n[3]||(n[3]=u("span",{op25:"","text-sm":""},"/",-1)),u("span",Z,h(t.value),1)],64)):(v(),m("div",J,h(t.value),1))]),u("div",O,[(v(!0),m(B,null,z(b.value,o=>(v(),m("div",{key:o,border:"y main","of-hidden":"",relative:"",class:f([o===0?"rounded-l border-l":"",o===t.value?"rounded-r border-r":""]),style:D({width:p.value>0?`${1/p.value*100}%`:"100%"})},[u("div",{absolute:"","inset-0":"",class:f(o<=i.value&&s.active?"bg-primary op15":"")},null,2),u("div",{class:f([+o==+i.value&&s.active?"text-primary font-bold op100 border-primary":"op30 border-main",o===0?"rounded-l":"",o===t.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},h(o),3)],6))),128)),I(u("input",{"onUpdate:modelValue":n[0]||(n[0]=o=>i.value=o),class:f(["range",s.readonly?"pointer-events-none":""]),type:"range",min:k.value,max:t.value,step:1,absolute:"","inset-0":"","z-label":"",op0:"",style:D({"--thumb-width":`${1/(p.value+1)*100}%`}),onMousedown:x,onFocus:n[1]||(n[1]=o=>{var C;return(C=o.currentTarget)==null?void 0:C.blur()})},null,46,Q),[[P,i.value]])])],10,U))}}),ne=G(Y,[["__scopeId","data-v-b214048c"]]),ee=["innerHTML"],te=["textContent"],oe=["textContent"],L="slidev-note-fade",y="slidev-note-click-mark",ae=H({__name:"NoteDisplay",props:{class:{},noteHtml:{},note:{},highlight:{type:Boolean,default:!0},placeholder:{},clicksContext:{},autoScroll:{type:Boolean}},emits:["markerDblclick","markerClick"],setup(M,{emit:d}){const t=M,k=d,p=g(()=>{var s;return t.clicksContext!=null&&((s=t.noteHtml)==null?void 0:s.includes("slidev-note-click-mark"))}),i=E(null);function b(){var $,A;if(!i.value||!p.value)return;const s=Array.from(i.value.querySelectorAll(`.${y}`)),n=new Map,o=new Map;let C=0;for(const r of s){const a=Number(r.dataset.clicks);n.set(r,a);let l=r,e=r.parentElement;for(;e&&l!==i.value;)o.has(e)||o.set(e,[[null,C]]),o.get(e).push([l,a]),l=e,e=e.parentElement;C=a}const S=new Map;for(const[r,a]of o){let l=!1,e=0;for(const c of Array.from(r.childNodes)){let _=!1;for(;c===(($=a[e+1])==null?void 0:$[0]);)_=!0,e++;if(_)continue;let w=c;if(c.nodeType===3){if(!((A=c.textContent)!=null&&A.trim()))continue;w=document.createElement("span"),w.textContent=c.textContent,r.insertBefore(w,c),c.remove()}l||(l=e===0),S.set(w,a[e][1])}l||(a[0][1]=-1)}return r=>{const a=t.highlight;for(const[l,e]of o)l.classList.toggle(L,a&&!e.some(([c,_])=>_===r));for(const[l,e]of S)l.classList.toggle(L,a&&e!==r);for(const[l,e]of n)l.classList.remove(L),l.classList.toggle(`${y}-past`,a&&e<r),l.classList.toggle(`${y}-active`,a&&e===r),l.classList.toggle(`${y}-next`,a&&e===r+1),l.classList.toggle(`${y}-future`,a&&e>r+1),l.ondblclick=a?c=>{k("markerDblclick",c,e),!c.defaultPrevented&&(t.clicksContext.current=e,c.stopPropagation(),c.stopImmediatePropagation())}:null,l.onclick=a?c=>{k("markerClick",c,e)}:null,a&&t.autoScroll&&e===r&&l.scrollIntoView({block:"center",behavior:"smooth"})}}const x=E();return F(()=>[t.noteHtml,t.highlight],()=>{R(()=>{x.value=b()})},{immediate:!0}),V(()=>{b()}),K(()=>{var n,o;const s=((n=t.clicksContext)==null?void 0:n.current)??N;(o=x.value)==null||o.call(x,s)}),(s,n)=>s.noteHtml?(v(),m("div",{key:0,ref_key:"noteDisplay",ref:i,class:f(["prose overflow-auto outline-none slidev-note",[t.class,p.value?"slidev-note-with-clicks":""]]),innerHTML:s.noteHtml},null,10,ee)):s.note?(v(),m("div",{key:1,class:f(["prose overflow-auto outline-none slidev-note",t.class])},[u("p",{textContent:h(s.note)},null,8,te)],2)):(v(),m("div",{key:2,class:f(["prose overflow-auto outline-none opacity-50 italic select-none slidev-note",t.class])},[u("p",{textContent:h(t.placeholder||"No notes.")},null,8,oe)],2))}});export{ne as C,ae as _};
