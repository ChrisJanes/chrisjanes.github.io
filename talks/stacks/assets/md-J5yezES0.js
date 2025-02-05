import{_ as g}from"./slidev/VClicks-CFiaRAwg.js";import{d as h,z as k,o as p,b as v,e as t,f as $,h as y,c as C,k as c,l as x,C as i,q as B,s as b,E as u}from"./modules/vue-CBxqocqx.js";import{u as f,f as z}from"./slidev/context-CpiJ_oHH.js";import"./index-Cfxp1WUj.js";import"./modules/shiki-iQNZlL5J.js";function d(e){return e.startsWith("/")?"/talks/stacks"+e.slice(1):e}function S(e,s=!1,r="cover",n="center"){const a=e&&(e[0]==="#"||e.startsWith("rgb")),o={background:a?e:void 0,color:e&&!a?"white":void 0,backgroundImage:a?void 0:e?s?`linear-gradient(#0005, #0008), url(${d(e)})`:`url("${d(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:n,backgroundSize:r};return o.background||delete o.background,o}const w={class:"grid grid-cols-2 w-full h-full"},P={class:"slidev-layout default image-right my-auto"},T=h({__name:"image-right-standard",props:{image:{type:String},dim:{type:Boolean,default:!1},background_size:{type:String,default:"cover"}},setup(e){f();const s=e,r=k(()=>S(s.image,s.dim,s.background_size,"right"));return(n,a)=>(p(),v("div",w,[t("div",P,[$(n.$slots,"default")]),t("div",{class:"mr-0",style:y(r.value)},null,4)]))}}),A={__name:"stacks.md__slidev_11",setup(e){const{$slidev:s,$nav:r,$clicksContext:n,$clicks:a,$page:o,$renderContext:N,$frontmatter:m}=f();return n.setup(),(V,l)=>{const _=g;return p(),C(T,B(b(u(z)(u(m),10))),{default:c(()=>[l[1]||(l[1]=t("h1",null,"Task",-1)),x(_,{depth:"2"},{default:c(()=>l[0]||(l[0]=[t("p",null,[i('Using a stack, write a system that checks if a string of parentheses (e.g. "'),t("code",null,"{([])}"),i('") is balanced.')],-1),t("ul",null,[t("li",null,[i("Traverse the string "),t("ul",null,[t("li",null,[t("code",null,"for (char c : str)")])])]),t("li",null,"Push opening brackets onto a stack"),t("li",null,"Compare closing brackets to the top of the stack in order")],-1)])),_:1})]),_:1},16)}}};export{A as default};
