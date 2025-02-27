import{a2 as J,z as b,d as T,o,c as f,i as w,L as s,a3 as K,W as N,b as m,N as I,a1 as W,e,I as M,g as C,a4 as V,t as j,K as D,J as Q,B as X,V as Y,a5 as Z,l as c,a6 as ee,k as y,h as E,x as te,F as se}from"../modules/vue-BsyFHM2O.js";import{o as oe,u as ne,B as re,s as le,L as ie,M as ae,N as ce,O as ue,P as de,Q as ve,q as me,_ as fe}from"../index-MT-4ei2m.js";import{c as pe,u as xe,b as P,S as _e}from"./SlideWrapper-bp1fcTkd.js";import{r as ke,u as ge,a as ye,_ as be,S as we,o as Ce,b as Se,G as he,c as $e,d as Me}from"./shortcuts-Bh2iohVJ.js";import{_ as Ne,C as Te}from"./NoteDisplay.vue_vue_type_style_index_0_lang-BfEAuUDu.js";import{_ as ze}from"./DrawingControls.vue_vue_type_style_index_0_lang-B4HCV1CV.js";import{_ as R}from"./IconButton.vue_vue_type_script_setup_true_lang-BBc3RlAJ.js";import"../modules/shiki-lHQ22T56.js";import"./title-renderer.md_vue_type_script_setup_true_lang-BHUO0gUD.js";import"./context-jadggw9a.js";import"../modules/unplugin-icons-Dkq8I3yX.js";function Fe(){const{counter:p,isActive:n,reset:l,pause:r,resume:u}=J(1e3,{controls:!0});return{timer:b(()=>{const a=p.value,S=Math.floor(a%60).toString().padStart(2,"0");return`${Math.floor(a/60).toString().padStart(2,"0")}:${S}`}),isTimerActive:n,resetTimer:l,toggleTimer:()=>n.value?r():u()}}const Be=T({__name:"NoteStatic",props:{no:{},class:{},clicksContext:{}},setup(p){const n=p,{info:l}=pe(n.no);return(r,u)=>{var d,a;return o(),f(Ne,{class:w(n.class),note:(d=s(l))==null?void 0:d.note,"note-html":(a=s(l))==null?void 0:a.noteHTML,"clicks-context":r.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),Le={"h-full":"","w-full":""},Ve={key:0,"w-full":"","h-full":"",flex:"~ col gap-4 items-center justify-center"},je=T({__name:"ScreenCaptureMirror",setup(p){const n=K("video"),l=N(null),r=N(!1);async function u(){l.value=await navigator.mediaDevices.getDisplayMedia({video:{cursor:"always"},audio:!1,selfBrowserSurface:"include",preferCurrentTab:!1}),n.value.srcObject=l.value,n.value.play(),r.value=!0,l.value.addEventListener("inactive",()=>{n.value.srcObject=null,r.value=!1}),l.value.addEventListener("ended",()=>{n.value.srcObject=null,r.value=!1})}return(d,a)=>(o(),m("div",Le,[I(e("video",{ref_key:"video",ref:n,class:"w-full h-full object-contain"},null,512),[[W,r.value]]),r.value?C("v-if",!0):(o(),m("div",Ve,[a[0]||(a[0]=e("div",{op50:""},[M(" Use screen capturing to mirror your main screen back to presenter view."),e("br"),M(" Click the button below and "),e("b",null,"select your other monitor or window"),M(". ")],-1)),e("button",{class:"slidev-form-button",onClick:u}," Start Screen Mirroring ")]))]))}}),De={class:"bg-main h-full slidev-presenter","pt-2px":""},Ee={flex:"~ gap-4 items-center",border:"b main",p1:""},Pe={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Re={key:1,class:"h-full flex justify-center items-center"},Ie={key:0,class:"grid-section note of-auto"},We={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Oe={class:"grid-section bottom flex"},Ae={class:"group flex items-center justify-center pl-4 select-none"},qe={class:"w-22px cursor-pointer"},Ge={class:"group-not-hover:hidden flex flex-col items-center"},He={key:0,class:"i-carbon:pause text-lg"},Ue={key:1,class:"i-carbon:play"},Je={class:"text-2xl px-3 my-auto tabular-nums"},Ke={class:"progress-bar"},Qe=T({__name:"presenter",setup(p){const n=V(),l=j();ke(),ge(l),ye();const{clicksContext:r,currentSlideNo:u,currentSlideRoute:d,hasNext:a,nextRoute:S,slides:z,getPrimaryClicks:O,total:A}=oe(),{isDrawing:q}=xe();ne({title:`Presenter - ${me}`}),j(!1);const{timer:G,isTimerActive:H,resetTimer:F,toggleTimer:B}=Fe(),U=b(()=>z.value.map(_=>re(_))),v=b(()=>r.value.current<r.value.total?[d.value,r.value.current+1]:a.value?[S.value,0]:null),k=b(()=>v.value&&U.value[v.value[0].no-1]);D(v,()=>{k.value&&v.value&&(k.value.current=v.value[1])},{immediate:!0});const x=Q("slidev-presenter-main-slide-mode","slides"),L=N();return X(()=>{const _=l.value.querySelector("#slide-content"),t=Y(Z()),g=V();D(()=>{if(!g.value||q.value||!ie.value||!_)return;const i=_.getBoundingClientRect(),h=(t.x-i.left)/i.width*100,$=(t.y-i.top)/i.height*100;if(!(h<0||h>100||$<0||$>100))return{x:h,y:$}},i=>{le.cursor=i})}),(_,t)=>{var g;return o(),m(se,null,[e("div",De,[e("div",{class:w(["grid-container",`layout${s(ae)}`])},[e("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col"},[e("div",Ee,[t[5]||(t[5]=e("span",{op50:"",px2:""},"Current",-1)),t[6]||(t[6]=e("div",{"flex-auto":""},null,-1)),c(be,{modelValue:s(x),"onUpdate:modelValue":t[0]||(t[0]=i=>ee(x)?x.value=i:null),options:[{label:"Slides",value:"slides"},{label:"Screen Mirror",value:"mirror"}]},null,8,["modelValue"])]),s(x)==="mirror"?(o(),f(je,{key:0})):C("v-if",!0),C(" We use v-show here to still infer the clicks context "),I(c(P,{key:"main",class:"p-2 lg:p-4 flex-auto","is-main":"",onContextmenu:s(Ce)},{default:y(()=>[c(we,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),[[W,s(x)==="slides"]]),(o(),f(Te,{key:(g=s(d))==null?void 0:g.no,"clicks-context":s(O)(s(d)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"]))],512),e("div",Pe,[v.value&&k.value?(o(),f(P,{key:"next"},{default:y(()=>[(o(),f(_e,{key:v.value[0].no,"clicks-context":k.value,route:v.value[0],"render-context":"previewNext"},null,8,["clicks-context","route"]))]),_:1})):(o(),m("div",Re,t[7]||(t[7]=[e("div",{class:"text-gray-500"}," End of the presentation ",-1)]))),t[8]||(t[8]=e("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1))]),L.value&&s(ce)?(o(),m("div",Ie,[c(s(L))])):(o(),m("div",We,[(o(),f(Be,{key:`static-${s(u)}`,no:s(u),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:E({fontSize:`${s(ue)}em`}),"clicks-context":s(r)},null,8,["no","style","clicks-context"])),t[12]||(t[12]=e("div",{"border-t":"","border-main":""},null,-1)),e("div",{class:w(["py-1 px-2 text-sm transition",s(n)?"":"op25"])},[c(R,{title:"Increase font size",onClick:s(de)},{default:y(()=>t[9]||(t[9]=[e("div",{class:"i-carbon:zoom-in"},null,-1)])),_:1},8,["onClick"]),c(R,{title:"Decrease font size",onClick:s(ve)},{default:y(()=>t[10]||(t[10]=[e("div",{class:"i-carbon:zoom-out"},null,-1)])),_:1},8,["onClick"]),C("v-if",!0)],2)])),e("div",Oe,[c(Se,{persist:!0,class:w(["transition",s(n)?"":"op25"])},null,8,["class"]),t[15]||(t[15]=e("div",{"flex-auto":""},null,-1)),e("div",Ae,[e("div",qe,[t[14]||(t[14]=e("div",{class:"i-carbon:time group-hover:hidden text-xl"},null,-1)),e("div",Ge,[e("div",{class:"relative op-80 hover:op-100",onClick:t[3]||(t[3]=(...i)=>s(B)&&s(B)(...i))},[s(H)?(o(),m("div",He)):(o(),m("div",Ue))]),e("div",{class:"op-80 hover:op-100",onClick:t[4]||(t[4]=(...i)=>s(F)&&s(F)(...i))},t[13]||(t[13]=[e("div",{class:"i-carbon:renew"},null,-1)]))])]),e("div",Je,te(s(G)),1)])]),(o(),f(ze,{key:2}))],2),e("div",Ke,[e("div",{class:"progress h-3px bg-primary transition-all",style:E({width:`${(s(u)-1)/(s(A)-1)*100+1}%`})},null,4)])]),c(he),c($e),c(Me)],64)}}}),at=fe(Qe,[["__scopeId","data-v-30078b7e"]]);export{at as default};
