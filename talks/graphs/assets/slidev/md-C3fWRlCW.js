import{d as m,z as f,o as c,b as p,f as g,h as _,c as v,k as h,e as a,q as $,s as k,L as i}from"../modules/vue-BsyFHM2O.js";import{u as d,f as x}from"./context-jadggw9a.js";import"../index-MT-4ei2m.js";import"../modules/shiki-lHQ22T56.js";function l(e){return e.startsWith("/")?"/talks/graphs"+e.slice(1):e}function C(e,r=!1){const s=e&&["#","rgb","hsl"].some(n=>e.indexOf(n)===0),t={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?r?`linear-gradient(#0005, #0008), url(${l(e)})`:`url("${l(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const b=m({__name:"intro-image",props:{image:{type:String}},setup(e){d();const r=e,s=f(()=>C(r.image));return(t,n)=>(c(),p("div",{class:"slidev-layout w-full h-full intro-image",style:_(s.value)},[g(t.$slots,"default")],4))}}),R={__name:"slides.md__slidev_1",setup(e){const{$slidev:r,$nav:s,$clicksContext:t,$clicks:n,$page:y,$renderContext:S,$frontmatter:u}=d();return t.setup(),(B,o)=>(c(),v(b,$(k(i(x)(i(u),0))),{default:h(()=>o[0]||(o[0]=[a("div",{class:"absolute bottom-10"},[a("h1",{class:""},"Graphs")],-1),a("div",{class:"w-full absolute top-10"},[a("div",{class:"font-700"}," Chris Janes 27/02/25 "),a("div",null," Data Structures, Algorithms and Advanced Programming ")],-1)])),_:1},16))}};export{R as default};
