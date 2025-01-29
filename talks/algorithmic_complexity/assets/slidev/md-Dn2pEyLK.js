import{d as y,r as g,B as c,o as a,c as f,k as _,f as k,b as u,z as h,F as I,ai as N,i as $,l as m,g as C,h as L,e as b,q as B,s as D}from"../modules/vue-Cy3r4cIK.js";import{u as S,f as M}from"./context-BlCw4VYY.js";import{a as P,ai as T}from"../index-BaNsS1lq.js";import{_ as z}from"./title-renderer.md_vue_type_script_setup_true_lang-DVqjyQlS.js";import{I as A}from"./default-4yWFKh9E.js";import"../modules/shiki-DMv8G_5s.js";const H=["href","innerHTML"],V=["href"],F=y({__name:"Link",props:{to:{},title:{}},setup(d){const{isPrintMode:r}=P();return(l,o)=>{const i=g("RouterLink");return!c(r)&&l.title?(a(),f(i,{key:0,to:String(l.to),onClick:o[0]||(o[0]=n=>n.target.blur()),innerHTML:l.title},null,8,["to","innerHTML"])):!c(r)&&!l.title?(a(),f(i,{key:1,to:String(l.to),onClick:o[1]||(o[1]=n=>n.target.blur())},{default:_(()=>[k(l.$slots,"default")]),_:3},8,["to"])):c(r)&&l.title?(a(),u("a",{key:2,href:`#${l.to}`,innerHTML:l.title},null,8,H)):(a(),u("a",{key:3,href:`#${l.to}`},[k(l.$slots,"default")],8,V))}}}),O=["start"],R=y({__name:"TocList",props:{level:{default:1},start:{},listStyle:{},list:{},listClass:{}},setup(d){const r=d,{isPresenter:l}=P(),o=h(()=>[...T(r.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${r.level}`]),i=h(()=>[...T(r.listStyle||[])]);return(n,v)=>{const s=F,t=g("TocList",!0);return n.list&&n.list.length>0?(a(),u("ol",{key:0,class:$(o.value),start:n.level===1?n.start:void 0,style:L(i.value.length>=n.level?`list-style:${i.value[n.level-1]}`:void 0)},[(a(!0),u(I,null,N(n.list,e=>(a(),u("li",{key:e.path,class:$(["slidev-toc-item",[{"slidev-toc-item-active":e.active},{"slidev-toc-item-parent-active":e.activeParent}]])},[m(s,{to:c(l)?`/presenter${e.path}`:e.path},{default:_(()=>[m(c(z),{no:e.no},null,8,["no"])]),_:2},1032,["to"]),e.children.length>0?(a(),f(t,{key:0,level:n.level+1,"list-style":n.listStyle,list:e.children,"list-class":n.listClass},null,8,["level","list-style","list","list-class"])):C("",!0)],2))),128))],14,O)):C("",!0)}}}),E=y({__name:"Toc",props:{columns:{default:1},listClass:{default:""},start:{default:1},listStyle:{default:""},maxDepth:{default:Number.POSITIVE_INFINITY},minDepth:{default:1},mode:{default:"all"}},setup(d){const r=d,{$slidev:l}=S();function o(s,t=1){if(t>Number(r.maxDepth))return[];if(t<Number(r.minDepth)){const e=s.find(p=>p.active||p.activeParent);return e?o(e.children,t+1):[]}return s.map(e=>({...e,children:o(e.children,t+1)}))}function i(s){return s.filter(t=>t.active||t.activeParent||t.hasActiveParent).map(t=>({...t,children:i(t.children)}))}function n(s){const t=s.some(e=>e.active||e.activeParent||e.hasActiveParent);return s.filter(()=>t).map(e=>({...e,children:n(e.children)}))}const v=h(()=>{const s=l==null?void 0:l.nav.tocTree;if(!s)return[];let t=o(s);return r.mode==="onlyCurrentTree"?t=i(t):r.mode==="onlySiblings"&&(t=n(t)),t});return(s,t)=>(a(),u("div",{class:"slidev-toc",style:L(`column-count:${s.columns}`)},[m(R,{level:1,start:s.start,"list-style":s.listStyle,list:v.value,"list-class":s.listClass},null,8,["start","list-style","list","list-class"])],4))}}),K={__name:"algorithmic_complexity.md__slidev_2",setup(d){const{$slidev:r,$nav:l,$clicksContext:o,$clicks:i,$page:n,$renderContext:v,$frontmatter:s}=S();return o.setup(),(t,e)=>{const p=E;return a(),f(A,B(D(c(M)(c(s),1))),{default:_(()=>[e[0]||(e[0]=b("h1",null,"In this session",-1)),m(p)]),_:1},16)}}};export{K as default};
