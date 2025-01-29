import{aj as Q,z as b,d as z,o,c as p,i as C,B as s,ak as Y,Q as M,b as v,ag as I,al as A,e,ac as $,g as T,a7 as D,t as E,E as L,Y as J,L as K,P as X,am as Z,l as c,an as ee,k as y,h as V,x as te,F as se}from"../modules/vue-Cy3r4cIK.js";import{a as oe,u as ne,c as le,d as re,h as ae,j as ie,k as ce,l as ue,m as de,n as me,s as ve,_ as pe}from"../index-BaNsS1lq.js";import{b as fe,c as xe,a as P,S as _e}from"./SlideWrapper-CwDScPND.js";import{r as ke,u as ge,a as ye,_ as be,S as Ce,o as Se,b as we,G as he,c as $e,d as Me}from"./shortcuts-CVMqMS8i.js";import{_ as Te,C as ze}from"./NoteDisplay.vue_vue_type_style_index_0_lang-C5Q_sjCZ.js";import{_ as Ne}from"./DrawingControls.vue_vue_type_style_index_0_lang-D_FxvvFr.js";import{_ as R}from"./IconButton.vue_vue_type_script_setup_true_lang-CR7cBGyN.js";import"../modules/shiki-DMv8G_5s.js";import"./title-renderer.md_vue_type_script_setup_true_lang-DVqjyQlS.js";import"./context-BlCw4VYY.js";import"../modules/unplugin-icons-DRnsKnYk.js";function Fe(){const{counter:f,isActive:n,reset:r,pause:l,resume:u}=Q(1e3,{controls:!0});return{timer:b(()=>{const i=f.value,S=Math.floor(i%60).toString().padStart(2,"0");return`${Math.floor(i/60).toString().padStart(2,"0")}:${S}`}),isTimerActive:n,resetTimer:r,toggleTimer:()=>n.value?l():u()}}const je=z({__name:"NoteStatic",props:{no:{},class:{},clicksContext:{}},setup(f){const n=f,{info:r}=fe(n.no);return(l,u)=>{var d,i;return o(),p(Te,{class:C(n.class),note:(d=s(r))==null?void 0:d.note,"note-html":(i=s(r))==null?void 0:i.noteHTML,"clicks-context":l.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),Be={"h-full":"","w-full":""},De={key:0,"w-full":"","h-full":"",flex:"~ col gap-4 items-center justify-center"},Ee=z({__name:"ScreenCaptureMirror",setup(f){const n=Y("video"),r=M(null),l=M(!1);async function u(){r.value=await navigator.mediaDevices.getDisplayMedia({video:{cursor:"always"},audio:!1,selfBrowserSurface:"include",preferCurrentTab:!1}),n.value.srcObject=r.value,n.value.play(),l.value=!0,r.value.addEventListener("inactive",()=>{n.value.srcObject=null,l.value=!1}),r.value.addEventListener("ended",()=>{n.value.srcObject=null,l.value=!1})}return(d,i)=>(o(),v("div",Be,[I(e("video",{ref_key:"video",ref:n,class:"w-full h-full object-contain"},null,512),[[A,l.value]]),l.value?T("",!0):(o(),v("div",De,[i[0]||(i[0]=e("div",{op50:""},[$(" Use screen capturing to mirror your main screen back to presenter view."),e("br"),$(" Click the button below and "),e("b",null,"select your other monitor or window"),$(". ")],-1)),e("button",{class:"slidev-form-button",onClick:u}," Start Screen Mirroring ")]))]))}}),Le={class:"bg-main h-full slidev-presenter","pt-2px":""},Ve={flex:"~ gap-4 items-center",border:"b main",p1:""},Pe={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Re={key:1,class:"h-full flex justify-center items-center"},Ie={key:0,class:"grid-section note of-auto"},Ae={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Oe={class:"grid-section bottom flex"},We={class:"group flex items-center justify-center pl-4 select-none"},Ge={class:"w-22px cursor-pointer"},He={class:"group-not-hover:hidden flex flex-col items-center"},Ue={key:0,class:"i-carbon:pause text-lg"},qe={key:1,class:"i-carbon:play"},Qe={class:"text-2xl px-3 my-auto tabular-nums"},Ye={class:"progress-bar"},Je=z({__name:"presenter",setup(f){const n=D(),r=E();ke(),ge(r),ye();const{clicksContext:l,currentSlideNo:u,currentSlideRoute:d,hasNext:i,nextRoute:S,slides:N,getPrimaryClicks:O,total:W}=oe(),{isDrawing:G}=xe();ne({title:`Presenter - ${ve}`}),E(!1);const{timer:H,isTimerActive:U,resetTimer:F,toggleTimer:j}=Fe(),q=b(()=>N.value.map(_=>le(_))),m=b(()=>l.value.current<l.value.total?[d.value,l.value.current+1]:i.value?[S.value,0]:null),k=b(()=>m.value&&q.value[m.value[0].no-1]);L(m,()=>{k.value&&m.value&&(k.value.current=m.value[1])},{immediate:!0});const x=J("slidev-presenter-main-slide-mode","slides"),B=M();return K(()=>{const _=r.value.querySelector("#slide-content"),t=X(Z()),g=D();L(()=>{if(!g.value||G.value||!ae.value||!_)return;const a=_.getBoundingClientRect(),w=(t.x-a.left)/a.width*100,h=(t.y-a.top)/a.height*100;if(!(w<0||w>100||h<0||h>100))return{x:w,y:h}},a=>{re.cursor=a})}),(_,t)=>{var g;return o(),v(se,null,[e("div",Le,[e("div",{class:C(["grid-container",`layout${s(ie)}`])},[e("div",{ref_key:"main",ref:r,class:"relative grid-section main flex flex-col"},[e("div",Ve,[t[5]||(t[5]=e("span",{op50:"",px2:""},"Current",-1)),t[6]||(t[6]=e("div",{"flex-auto":""},null,-1)),c(be,{modelValue:s(x),"onUpdate:modelValue":t[0]||(t[0]=a=>ee(x)?x.value=a:null),options:[{label:"Slides",value:"slides"},{label:"Screen Mirror",value:"mirror"}]},null,8,["modelValue"])]),s(x)==="mirror"?(o(),p(Ee,{key:0})):T("",!0),I(c(P,{key:"main",class:"p-2 lg:p-4 flex-auto","is-main":"",onContextmenu:s(Se)},{default:y(()=>[c(Ce,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),[[A,s(x)==="slides"]]),(o(),p(ze,{key:(g=s(d))==null?void 0:g.no,"clicks-context":s(O)(s(d)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"]))],512),e("div",Pe,[m.value&&k.value?(o(),p(P,{key:"next"},{default:y(()=>[(o(),p(_e,{key:m.value[0].no,"clicks-context":k.value,route:m.value[0],"render-context":"previewNext"},null,8,["clicks-context","route"]))]),_:1})):(o(),v("div",Re,t[7]||(t[7]=[e("div",{class:"text-gray-500"}," End of the presentation ",-1)]))),t[8]||(t[8]=e("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1))]),B.value&&s(ce)?(o(),v("div",Ie,[c(s(B))])):(o(),v("div",Ae,[(o(),p(je,{key:`static-${s(u)}`,no:s(u),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:V({fontSize:`${s(ue)}em`}),"clicks-context":s(l)},null,8,["no","style","clicks-context"])),t[12]||(t[12]=e("div",{"border-t":"","border-main":""},null,-1)),e("div",{class:C(["py-1 px-2 text-sm transition",s(n)?"":"op25"])},[c(R,{title:"Increase font size",onClick:s(de)},{default:y(()=>t[9]||(t[9]=[e("div",{class:"i-carbon:zoom-in"},null,-1)])),_:1},8,["onClick"]),c(R,{title:"Decrease font size",onClick:s(me)},{default:y(()=>t[10]||(t[10]=[e("div",{class:"i-carbon:zoom-out"},null,-1)])),_:1},8,["onClick"]),T("",!0)],2)])),e("div",Oe,[c(we,{persist:!0,class:C(["transition",s(n)?"":"op25"])},null,8,["class"]),t[15]||(t[15]=e("div",{"flex-auto":""},null,-1)),e("div",We,[e("div",Ge,[t[14]||(t[14]=e("div",{class:"i-carbon:time group-hover:hidden text-xl"},null,-1)),e("div",He,[e("div",{class:"relative op-80 hover:op-100",onClick:t[3]||(t[3]=(...a)=>s(j)&&s(j)(...a))},[s(U)?(o(),v("div",Ue)):(o(),v("div",qe))]),e("div",{class:"op-80 hover:op-100",onClick:t[4]||(t[4]=(...a)=>s(F)&&s(F)(...a))},t[13]||(t[13]=[e("div",{class:"i-carbon:renew"},null,-1)]))])]),e("div",Qe,te(s(H)),1)])]),(o(),p(Ne,{key:2}))],2),e("div",Ye,[e("div",{class:"progress h-3px bg-primary transition-all",style:V({width:`${(s(u)-1)/(s(W)-1)*100+1}%`})},null,4)])]),c(he),c($e),c(Me)],64)}}}),it=pe(Je,[["__scopeId","data-v-52b2ef11"]]);export{it as default};
