const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-yth6N-0M.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-DiTzTokA.js","assets/modules/vue-DfOUTzrx.js","assets/modules/shiki-D-1PhLMd.js","assets/modules/shiki-Bxv373Z5.css","assets/slidev/SlideWrapper-BI6DSNvc.js","assets/index-nPacZ_gs.js","assets/index-DuD46O85.css","assets/SlideWrapper-NbkuuGMr.css","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-B0nzeBKi.js","assets/slidev/shortcuts-D0wkDDUe.js","assets/slidev/title-renderer.md_vue_type_script_setup_true_lang-CyAltlfk.js","assets/slidev/context-vsVq2I3n.js","assets/modules/unplugin-icons-DI5TNof6.js","assets/shortcuts-DGPqjSeU.css","assets/DrawingControls-Cxk9a9ub.css"])))=>i.map(i=>d[i]);
import{z as b,E as P,ao as N,d as h,ad as T,o as a,c as v,B as e,b as g,e as r,f as H,i as E,g as d,ap as L,k as D,ac as A,an as M,Q as w,l as _,F as z,h as F,t as O}from"../modules/vue-DfOUTzrx.js";import{c as U,a as W}from"./SlideWrapper-BI6DSNvc.js";import{q as G,v as x,a as B,w as j,x as V,y as C,d as $,z as q,k as S,A as m,B as k,D as K}from"../index-nPacZ_gs.js";import{c as Q,G as X,d as Y,u as J,r as Z,a as ee,S as te,b as se,o as oe}from"./shortcuts-D0wkDDUe.js";import{b as ae}from"../modules/unplugin-icons-DI5TNof6.js";import"../modules/shiki-D-1PhLMd.js";import"./title-renderer.md_vue_type_script_setup_true_lang-CyAltlfk.js";import"./context-vsVq2I3n.js";import"./IconButton.vue_vue_type_script_setup_true_lang-B0nzeBKi.js";const ne=2e3;function le(p){const n=b(()=>p.value&&G.value);function i(){document.body.style.cursor="none"}function s(){document.body.style.cursor=""}let t=null;P(n,u=>{u||s()}),N(document.body,["pointermove","pointerdown"],()=>{s(),t&&clearTimeout(t),n.value&&(t=setTimeout(i,ne))},{passive:!0})}const re="/talks/sorting_algorithms/assets/logo-BYkHSa_O.png",ie={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-modal"},ue=h({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(p,{emit:n}){const i=p,t=T(i,"modelValue",n);function u(){t.value=!1}return(f,o)=>(a(),v(L,null,[e(t)?(a(),g("div",ie,[r("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:o[0]||(o[0]=c=>u())}),r("div",{class:E(["m-auto rounded-md bg-main shadow",i.class]),"dark:border":"~ main"},[H(f.$slots,"default")],2)])):d("",!0)],1024))}}),de={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ce=["innerHTML"],me=h({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(p,{emit:n}){const t=T(p,"modelValue",n),u=b(()=>typeof x.info=="string");return(f,o)=>(a(),v(ue,{modelValue:e(t),"onUpdate:modelValue":o[0]||(o[0]=c=>M(t)?t.value=c:null),class:"px-6 py-4"},{default:D(()=>[r("div",de,[u.value?(a(),g("div",{key:0,class:"mb-4",innerHTML:e(x).info},null,8,ce)):d("",!0),o[1]||(o[1]=r("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[r("div",{class:"flex gap-1 children:my-auto"},[r("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),r("img",{class:"w-5 h-5",src:re,alt:"Slidev logo"}),r("div",{style:{color:"#2082A6"}},[r("b",null,"Sli"),A("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),pe=h({__name:"Controls",setup(p){const{isEmbedded:n}=B(),i=!x.drawings.presenterOnly&&!n.value,s=w();i&&j(()=>import("./DrawingControls-yth6N-0M.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).then(f=>s.value=f.default);const t=w(),u=w();return(f,o)=>(a(),g(z,null,[s.value?(a(),v(e(s),{key:0})):d("",!0),_(Q),_(X),t.value?(a(),v(e(t),{key:1})):d("",!0),u.value?(a(),v(e(u),{key:2,modelValue:e(V),"onUpdate:modelValue":o[0]||(o[0]=c=>M(V)?V.value=c:null)},null,8,["modelValue"])):d("",!0),e(x).info?(a(),v(me,{key:3,modelValue:e(C),"onUpdate:modelValue":o[1]||(o[1]=c=>M(C)?C.value=c:null)},null,8,["modelValue"])):d("",!0),_(Y)],64))}}),fe={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ve=h({__name:"PresenterMouse",setup(p){return(n,i)=>{const s=ae;return e($).cursor?(a(),g("div",fe,[_(s,{class:"absolute stroke-white dark:stroke-black",style:F({left:`${e($).cursor.x}%`,top:`${e($).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):d("",!0)}}}),Ce=h({__name:"play",setup(p){const{next:n,prev:i,isPrintMode:s,isPresenter:t}=B(),{isDrawing:u}=U(),f=O();function o(l){var y;S.value||l.button===0&&((y=l.target)==null?void 0:y.id)==="slide-container"&&(l.pageX/window.innerWidth>.5?n():i())}J(f),Z(),ee(),le(b(()=>!t.value&&!s.value));const c=b(()=>q.value||S.value),R=w(),I=b(()=>{let l="";return m.value.brightness!==k.brightness&&(l+=`brightness(${m.value.brightness}) `),m.value.contrast!==k.contrast&&(l+=`contrast(${m.value.contrast}) `),m.value.sepia!==k.sepia&&(l+=`sepia(${m.value.sepia}) `),m.value.hueRotate!==k.hueRotate&&(l+=`hue-rotate(${m.value.hueRotate}deg) `),m.value.invert&&(l+="invert(1) "),{filter:l}});return(l,y)=>(a(),g(z,null,[r("div",{id:"page-root",ref_key:"root",ref:f,class:E(["grid",e(K)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[_(W,{style:{background:"var(--slidev-slide-container-background, black)"},"is-main":"","content-style":I.value,onPointerdown:o,onContextmenu:e(oe)},{default:D(()=>[_(te,{"render-context":"slide"}),_(ve)]),controls:D(()=>[e(s)?d("",!0):(a(),g("div",{key:0,class:E(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100 focus-visible:opacity-100",[c.value?"!opacity-100 right-0":"opacity-0 p-2",e(u)?"pointer-events-none":""]])},[_(se,{persist:c.value},null,8,["persist"])],2))]),_:1},8,["content-style","onContextmenu"]),R.value&&e(S)?(a(),v(e(R),{key:0,resize:!0})):d("",!0)],2),e(s)?d("",!0):(a(),v(pe,{key:0})),y[0]||(y[0]=r("div",{id:"twoslash-container"},null,-1))],64))}});export{Ce as default};
