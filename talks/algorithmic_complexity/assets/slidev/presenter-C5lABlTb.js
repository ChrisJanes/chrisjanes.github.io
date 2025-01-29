import{aj as Q,z as b,d as z,o,c as f,i as w,B as s,ak as Y,Q as T,b as m,ag as I,al as W,e,ac as M,g as C,a7 as D,t as E,E as L,Y as J,L as K,P as X,am as Z,l as c,an as ee,k as y,h as V,x as te,F as se}from"../modules/vue-Q3zVd4dq.js";import{a as oe,u as ne,c as le,d as re,h as ie,j as ae,k as ce,l as ue,m as de,n as ve,s as me,_ as fe}from"../index-BCFHKqnA.js";import{b as pe,c as xe,a as P,S as _e}from"./SlideWrapper-DFhAsHuH.js";import{r as ke,u as ge,a as ye,_ as be,S as we,o as Ce,b as Se,G as he,c as $e,d as Me}from"./shortcuts-C1PH8eXD.js";import{_ as Te,C as ze}from"./NoteDisplay.vue_vue_type_style_index_0_lang-BT3k29cp.js";import{_ as Ne}from"./DrawingControls.vue_vue_type_style_index_0_lang-BO6ZVlFi.js";import{_ as R}from"./IconButton.vue_vue_type_script_setup_true_lang-DuB_vWuw.js";import"../modules/shiki-B8jMJcot.js";import"./title-renderer.md_vue_type_script_setup_true_lang-DQkozwwv.js";import"./context-Bg9ed1E-.js";import"../modules/unplugin-icons-DXsIuWDZ.js";function Fe(){const{counter:p,isActive:n,reset:r,pause:l,resume:u}=Q(1e3,{controls:!0});return{timer:b(()=>{const a=p.value,S=Math.floor(a%60).toString().padStart(2,"0");return`${Math.floor(a/60).toString().padStart(2,"0")}:${S}`}),isTimerActive:n,resetTimer:r,toggleTimer:()=>n.value?l():u()}}const je=z({__name:"NoteStatic",props:{no:{},class:{},clicksContext:{}},setup(p){const n=p,{info:r}=pe(n.no);return(l,u)=>{var d,a;return o(),f(Te,{class:w(n.class),note:(d=s(r))==null?void 0:d.note,"note-html":(a=s(r))==null?void 0:a.noteHTML,"clicks-context":l.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),Be={"h-full":"","w-full":""},De={key:0,"w-full":"","h-full":"",flex:"~ col gap-4 items-center justify-center"},Ee=z({__name:"ScreenCaptureMirror",setup(p){const n=Y("video"),r=T(null),l=T(!1);async function u(){r.value=await navigator.mediaDevices.getDisplayMedia({video:{cursor:"always"},audio:!1,selfBrowserSurface:"include",preferCurrentTab:!1}),n.value.srcObject=r.value,n.value.play(),l.value=!0,r.value.addEventListener("inactive",()=>{n.value.srcObject=null,l.value=!1}),r.value.addEventListener("ended",()=>{n.value.srcObject=null,l.value=!1})}return(d,a)=>(o(),m("div",Be,[I(e("video",{ref_key:"video",ref:n,class:"w-full h-full object-contain"},null,512),[[W,l.value]]),l.value?C("v-if",!0):(o(),m("div",De,[a[0]||(a[0]=e("div",{op50:""},[M(" Use screen capturing to mirror your main screen back to presenter view."),e("br"),M(" Click the button below and "),e("b",null,"select your other monitor or window"),M(". ")],-1)),e("button",{class:"slidev-form-button",onClick:u}," Start Screen Mirroring ")]))]))}}),Le={class:"bg-main h-full slidev-presenter","pt-2px":""},Ve={flex:"~ gap-4 items-center",border:"b main",p1:""},Pe={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Re={key:1,class:"h-full flex justify-center items-center"},Ie={key:0,class:"grid-section note of-auto"},We={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Ae={class:"grid-section bottom flex"},Oe={class:"group flex items-center justify-center pl-4 select-none"},Ge={class:"w-22px cursor-pointer"},He={class:"group-not-hover:hidden flex flex-col items-center"},Ue={key:0,class:"i-carbon:pause text-lg"},qe={key:1,class:"i-carbon:play"},Qe={class:"text-2xl px-3 my-auto tabular-nums"},Ye={class:"progress-bar"},Je=z({__name:"presenter",setup(p){const n=D(),r=E();ke(),ge(r),ye();const{clicksContext:l,currentSlideNo:u,currentSlideRoute:d,hasNext:a,nextRoute:S,slides:N,getPrimaryClicks:A,total:O}=oe(),{isDrawing:G}=xe();ne({title:`Presenter - ${me}`}),E(!1);const{timer:H,isTimerActive:U,resetTimer:F,toggleTimer:j}=Fe(),q=b(()=>N.value.map(_=>le(_))),v=b(()=>l.value.current<l.value.total?[d.value,l.value.current+1]:a.value?[S.value,0]:null),k=b(()=>v.value&&q.value[v.value[0].no-1]);L(v,()=>{k.value&&v.value&&(k.value.current=v.value[1])},{immediate:!0});const x=J("slidev-presenter-main-slide-mode","slides"),B=T();return K(()=>{const _=r.value.querySelector("#slide-content"),t=X(Z()),g=D();L(()=>{if(!g.value||G.value||!ie.value||!_)return;const i=_.getBoundingClientRect(),h=(t.x-i.left)/i.width*100,$=(t.y-i.top)/i.height*100;if(!(h<0||h>100||$<0||$>100))return{x:h,y:$}},i=>{re.cursor=i})}),(_,t)=>{var g;return o(),m(se,null,[e("div",Le,[e("div",{class:w(["grid-container",`layout${s(ae)}`])},[e("div",{ref_key:"main",ref:r,class:"relative grid-section main flex flex-col"},[e("div",Ve,[t[5]||(t[5]=e("span",{op50:"",px2:""},"Current",-1)),t[6]||(t[6]=e("div",{"flex-auto":""},null,-1)),c(be,{modelValue:s(x),"onUpdate:modelValue":t[0]||(t[0]=i=>ee(x)?x.value=i:null),options:[{label:"Slides",value:"slides"},{label:"Screen Mirror",value:"mirror"}]},null,8,["modelValue"])]),s(x)==="mirror"?(o(),f(Ee,{key:0})):C("v-if",!0),C(" We use v-show here to still infer the clicks context "),I(c(P,{key:"main",class:"p-2 lg:p-4 flex-auto","is-main":"",onContextmenu:s(Ce)},{default:y(()=>[c(we,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),[[W,s(x)==="slides"]]),(o(),f(ze,{key:(g=s(d))==null?void 0:g.no,"clicks-context":s(A)(s(d)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"]))],512),e("div",Pe,[v.value&&k.value?(o(),f(P,{key:"next"},{default:y(()=>[(o(),f(_e,{key:v.value[0].no,"clicks-context":k.value,route:v.value[0],"render-context":"previewNext"},null,8,["clicks-context","route"]))]),_:1})):(o(),m("div",Re,t[7]||(t[7]=[e("div",{class:"text-gray-500"}," End of the presentation ",-1)]))),t[8]||(t[8]=e("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1))]),B.value&&s(ce)?(o(),m("div",Ie,[c(s(B))])):(o(),m("div",We,[(o(),f(je,{key:`static-${s(u)}`,no:s(u),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:V({fontSize:`${s(ue)}em`}),"clicks-context":s(l)},null,8,["no","style","clicks-context"])),t[12]||(t[12]=e("div",{"border-t":"","border-main":""},null,-1)),e("div",{class:w(["py-1 px-2 text-sm transition",s(n)?"":"op25"])},[c(R,{title:"Increase font size",onClick:s(de)},{default:y(()=>t[9]||(t[9]=[e("div",{class:"i-carbon:zoom-in"},null,-1)])),_:1},8,["onClick"]),c(R,{title:"Decrease font size",onClick:s(ve)},{default:y(()=>t[10]||(t[10]=[e("div",{class:"i-carbon:zoom-out"},null,-1)])),_:1},8,["onClick"]),C("v-if",!0)],2)])),e("div",Ae,[c(Se,{persist:!0,class:w(["transition",s(n)?"":"op25"])},null,8,["class"]),t[15]||(t[15]=e("div",{"flex-auto":""},null,-1)),e("div",Oe,[e("div",Ge,[t[14]||(t[14]=e("div",{class:"i-carbon:time group-hover:hidden text-xl"},null,-1)),e("div",He,[e("div",{class:"relative op-80 hover:op-100",onClick:t[3]||(t[3]=(...i)=>s(j)&&s(j)(...i))},[s(U)?(o(),m("div",Ue)):(o(),m("div",qe))]),e("div",{class:"op-80 hover:op-100",onClick:t[4]||(t[4]=(...i)=>s(F)&&s(F)(...i))},t[13]||(t[13]=[e("div",{class:"i-carbon:renew"},null,-1)]))])]),e("div",Qe,te(s(H)),1)])]),(o(),f(Ne,{key:2}))],2),e("div",Ye,[e("div",{class:"progress h-3px bg-primary transition-all",style:V({width:`${(s(u)-1)/(s(O)-1)*100+1}%`})},null,4)])]),c(he),c($e),c(Me)],64)}}}),at=fe(Je,[["__scopeId","data-v-30078b7e"]]);export{at as default};
