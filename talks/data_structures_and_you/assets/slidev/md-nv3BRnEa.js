import{d as m,z as f,o as u,b as p,f as _,h as g,c as v,k as $,e as a,q as h,s as k,G as l}from"../modules/vue-CEQSbvvB.js";import{u as d,f as y}from"./context-By2PPIM6.js";import"../index-DDPFxAiT.js";import"../modules/shiki-Bn_wYjA5.js";function i(e){return e.startsWith("/")?"/talks/data_structures_and_you"+e.slice(1):e}function x(e,r=!1){const s=e&&["#","rgb","hsl"].some(n=>e.indexOf(n)===0),t={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?r?`linear-gradient(#0005, #0008), url(${i(e)})`:`url("${i(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const C=m({__name:"intro-image",props:{image:{type:String}},setup(e){d();const r=e,s=f(()=>x(r.image));return(t,n)=>(u(),p("div",{class:"slidev-layout w-full h-full intro-image",style:g(s.value)},[_(t.$slots,"default")],4))}}),D={__name:"data_structures_and_you.md__slidev_1",setup(e){const{$slidev:r,$nav:s,$clicksContext:t,$clicks:n,$page:S,$renderContext:b,$frontmatter:c}=d();return t.setup(),(B,o)=>(u(),v(C,h(k(l(y)(l(c),0))),{default:$(()=>o[0]||(o[0]=[a("div",{class:"absolute bottom-10"},[a("h1",null,"Data Structures and You")],-1),a("div",{class:"w-full absolute top-10"},[a("div",{class:"font-700"}," Chris Janes 23/02/25 "),a("div",null," Data Structures, Algorithms and Advanced Programming ")],-1)])),_:1},16))}};export{D as default};
