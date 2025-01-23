import{d as F,t as z,L as N,z as i,M as $,o as c,b as r,e,h as b,G as o,l as a,k as u,x as C,F as T}from"../modules/vue-NONPKcAw.js";import{k as B,l as L,s as d,n as D,o as E,p as H}from"../index-CpTd1MoR.js";import{_ as M,C as V}from"./NoteDisplay.vue_vue_type_style_index_0_lang-BzcTV3A8.js";import{_ as f}from"./IconButton.vue_vue_type_script_setup_true_lang-CQ8RG-yC.js";import"../modules/shiki-4O1MQmo4.js";const G={class:"h-full pt-2 flex flex-col"},I={class:"flex-none border-t border-main",px3:"",py2:""},R={class:"flex-none border-t border-main"},j={class:"flex gap-1 items-center px-6 py-3"},q={key:0,class:"i-carbon:minimize"},A={key:1,class:"i-carbon:maximize"},J={class:"p2 text-center"},X=F({__name:"notes",setup(K){B({title:`Notes - ${E}`});const{slides:g,total:m}=L(),{isFullscreen:p,toggle:y}=H,v=z(),s=N("slidev-notes-font-size",18),n=i(()=>d.page),_=i(()=>g.value.find(l=>l.no===n.value));$(n,()=>{var l;(l=v.value)==null||l.scrollTo({left:0,top:0,behavior:"smooth"}),window.scrollTo({left:0,top:0,behavior:"smooth"})});function S(){s.value=s.value+1}function w(){s.value=s.value-1}const x=i(()=>{const l=d.clicks,t=d.clicksTotal;return D(z(l),void 0,t)});return(l,t)=>{var k,h;return c(),r(T,null,[e("div",{class:"fixed top-0 left-0 h-3px bg-primary transition-all duration-500",style:b({width:`${(n.value-1)/(o(m)-1)*100+1}%`})},null,4),e("div",G,[e("div",{ref_key:"scroller",ref:v,class:"px-5 flex-auto h-full overflow-auto",style:b({fontSize:`${o(s)}px`})},[a(M,{note:(k=_.value)==null?void 0:k.meta.slide.note,"note-html":(h=_.value)==null?void 0:h.meta.slide.noteHTML,placeholder:`No notes for Slide ${n.value}.`,"clicks-context":x.value,"auto-scroll":!0},null,8,["note","note-html","placeholder","clicks-context"])],4),e("div",I,[a(V,{"clicks-context":x.value,readonly:""},null,8,["clicks-context"])]),e("div",R,[e("div",j,[a(f,{title:o(p)?"Close fullscreen":"Enter fullscreen",onClick:o(y)},{default:u(()=>[o(p)?(c(),r("div",q)):(c(),r("div",A))]),_:1},8,["title","onClick"]),a(f,{title:"Increase font size",onClick:S},{default:u(()=>t[0]||(t[0]=[e("div",{class:"i-carbon:zoom-in"},null,-1)])),_:1}),a(f,{title:"Decrease font size",onClick:w},{default:u(()=>t[1]||(t[1]=[e("div",{class:"i-carbon:zoom-out"},null,-1)])),_:1}),t[2]||(t[2]=e("div",{class:"flex-auto"},null,-1)),e("div",J,C(n.value)+" / "+C(o(m)),1)])])])],64)}}});export{X as default};
