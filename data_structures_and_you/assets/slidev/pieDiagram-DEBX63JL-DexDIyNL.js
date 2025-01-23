import{p as B}from"./chunk-K2ZEYYM2-DvT5zLzi.js";import{p as U}from"./gitGraph-YCYPL57B-5MQDGNWY-DpKNSdnE.js";import{G as q,p as H,q as V,s as Z,g as j,d as J,c as K,_ as i,l as C,x as Q,e as X,H as Y,a8 as tt,aa as et,ab as z,ac as at,m as rt,ad as it}from"./md-5YGcO0Xr.js";import"./chunk-TGZYFRKZ-CoR5q9is.js";import"../index-PSIbsfTo.js";import"../modules/vue-NONPKcAw.js";import"../modules/shiki-4O1MQmo4.js";import"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DfgStXFl.js";import"../modules/unplugin-icons-BymZu8he.js";import"./context-ChtHdXMI.js";import"./VClick-CCaaSuOj.js";import"../modules/file-saver-C8BEGaqa.js";import"./VClicks-D_HEqTHC.js";import"./default-qzHPH9QZ.js";var G=q.pie,D={sections:new Map,showData:!1,config:G},f=D.sections,w=D.showData,st=structuredClone(G),ot=i(()=>structuredClone(st),"getConfig"),nt=i(()=>{f=new Map,w=D.showData,Q()},"clear"),lt=i(({label:t,value:a})=>{f.has(t)||(f.set(t,a),C.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ct=i(()=>f,"getSections"),pt=i(t=>{w=t},"setShowData"),dt=i(()=>w,"getShowData"),F={getConfig:ot,clear:nt,setDiagramTitle:H,getDiagramTitle:V,setAccTitle:Z,getAccTitle:j,setAccDescription:J,getAccDescription:K,addSection:lt,getSections:ct,setShowData:pt,getShowData:dt},gt=i((t,a)=>{B(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),ut={parse:i(async t=>{const a=await U("pie",t);C.debug(a),gt(a,F)},"parse")},mt=i(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),ft=mt,ht=i(t=>{const a=[...t.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,n)=>n.value-s.value);return it().value(s=>s.value)(a)},"createPieArcs"),St=i((t,a,W,s)=>{C.debug(`rendering pie chart
`+t);const n=s.db,y=X(),T=Y(n.getConfig(),y.pie),$=40,o=18,d=4,c=450,h=c,S=tt(a),l=S.append("g");l.attr("transform","translate("+h/2+","+c/2+")");const{themeVariables:r}=y;let[A]=et(r.pieOuterStrokeWidth);A??(A=2);const _=T.textPosition,g=Math.min(h,c)/2-$,M=z().innerRadius(0).outerRadius(g),O=z().innerRadius(g*_).outerRadius(g*_);l.append("circle").attr("cx",0).attr("cy",0).attr("r",g+A/2).attr("class","pieOuterCircle");const b=n.getSections(),v=ht(b),P=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],p=at(P);l.selectAll("mySlices").data(v).enter().append("path").attr("d",M).attr("fill",e=>p(e.data.label)).attr("class","pieCircle");let E=0;b.forEach(e=>{E+=e}),l.selectAll("mySlices").data(v).enter().append("text").text(e=>(e.data.value/E*100).toFixed(0)+"%").attr("transform",e=>"translate("+O.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),l.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const x=l.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(e,u)=>{const m=o+d,I=m*p.domain().length/2,L=12*o,N=u*m-I;return"translate("+L+","+N+")"});x.append("rect").attr("width",o).attr("height",o).style("fill",p).style("stroke",p),x.data(v).append("text").attr("x",o+d).attr("y",o-d).text(e=>{const{label:u,value:m}=e.data;return n.getShowData()?`${u} [${m}]`:u});const R=Math.max(...x.selectAll("text").nodes().map(e=>(e==null?void 0:e.getBoundingClientRect().width)??0)),k=h+$+o+d+R;S.attr("viewBox",`0 0 ${k} ${c}`),rt(S,c,k,T.useMaxWidth)},"draw"),vt={draw:St},Ft={parser:ut,db:F,renderer:vt,styles:ft};export{Ft as diagram};
