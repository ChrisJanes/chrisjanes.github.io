import{d as y,r as g,G as u,o as a,c as f,k as _,f as k,b as c,z as h,F as I,Y as N,i as $,l as m,g as C,h as L,e as b,q as D,s as M}from"../modules/vue-NONPKcAw.js";import{u as S,f as z}from"./context-BpC5xGJM.js";import{l as P,v as T}from"../index-CpTd1MoR.js";import{_ as A}from"./title-renderer.md_vue_type_script_setup_true_lang-CnZL2Eq-.js";import{I as B}from"./default-BsuL06Wz.js";import"../modules/shiki-4O1MQmo4.js";const H=["href","innerHTML"],V=["href"],F=y({__name:"Link",props:{to:{},title:{}},setup(d){const{isPrintMode:r}=P();return(l,o)=>{const i=g("RouterLink");return!u(r)&&l.title?(a(),f(i,{key:0,to:String(l.to),onClick:o[0]||(o[0]=n=>n.target.blur()),innerHTML:l.title},null,8,["to","innerHTML"])):!u(r)&&!l.title?(a(),f(i,{key:1,to:String(l.to),onClick:o[1]||(o[1]=n=>n.target.blur())},{default:_(()=>[k(l.$slots,"default")]),_:3},8,["to"])):u(r)&&l.title?(a(),c("a",{key:2,href:`#${l.to}`,innerHTML:l.title},null,8,H)):(a(),c("a",{key:3,href:`#${l.to}`},[k(l.$slots,"default")],8,V))}}}),O=["start"],R=y({__name:"TocList",props:{level:{default:1},start:{},listStyle:{},list:{},listClass:{}},setup(d){const r=d,{isPresenter:l}=P(),o=h(()=>[...T(r.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${r.level}`]),i=h(()=>[...T(r.listStyle||[])]);return(n,v)=>{const s=F,t=g("TocList",!0);return n.list&&n.list.length>0?(a(),c("ol",{key:0,class:$(o.value),start:n.level===1?n.start:void 0,style:L(i.value.length>=n.level?`list-style:${i.value[n.level-1]}`:void 0)},[(a(!0),c(I,null,N(n.list,e=>(a(),c("li",{key:e.path,class:$(["slidev-toc-item",[{"slidev-toc-item-active":e.active},{"slidev-toc-item-parent-active":e.activeParent}]])},[m(s,{to:u(l)?`/presenter${e.path}`:e.path},{default:_(()=>[m(u(A),{no:e.no},null,8,["no"])]),_:2},1032,["to"]),e.children.length>0?(a(),f(t,{key:0,level:n.level+1,"list-style":n.listStyle,list:e.children,"list-class":n.listClass},null,8,["level","list-style","list","list-class"])):C("",!0)],2))),128))],14,O)):C("",!0)}}}),E=y({__name:"Toc",props:{columns:{default:1},listClass:{default:""},start:{default:1},listStyle:{default:""},maxDepth:{default:Number.POSITIVE_INFINITY},minDepth:{default:1},mode:{default:"all"}},setup(d){const r=d,{$slidev:l}=S();function o(s,t=1){if(t>Number(r.maxDepth))return[];if(t<Number(r.minDepth)){const e=s.find(p=>p.active||p.activeParent);return e?o(e.children,t+1):[]}return s.map(e=>({...e,children:o(e.children,t+1)}))}function i(s){return s.filter(t=>t.active||t.activeParent||t.hasActiveParent).map(t=>({...t,children:i(t.children)}))}function n(s){const t=s.some(e=>e.active||e.activeParent||e.hasActiveParent);return s.filter(()=>t).map(e=>({...e,children:n(e.children)}))}const v=h(()=>{const s=l==null?void 0:l.nav.tocTree;if(!s)return[];let t=o(s);return r.mode==="onlyCurrentTree"?t=i(t):r.mode==="onlySiblings"&&(t=n(t)),t});return(s,t)=>(a(),c("div",{class:"slidev-toc",style:L(`column-count:${s.columns}`)},[m(R,{level:1,start:s.start,"list-style":s.listStyle,list:v.value,"list-class":s.listClass},null,8,["start","list-style","list","list-class"])],4))}}),K={__name:"data_structures_and_you.md__slidev_2",setup(d){const{$slidev:r,$nav:l,$clicksContext:o,$clicks:i,$page:n,$renderContext:v,$frontmatter:s}=S();return o.setup(),(t,e)=>{const p=E;return a(),f(B,D(M(u(z)(u(s),1))),{default:_(()=>[e[0]||(e[0]=b("h1",null,"Today’s topics",-1)),m(p)]),_:1},16)}}};export{K as default};
