import{d as B,t as M,M as P,$ as R,o as c,b as V,f as A,h as S,D as e,c as D,k as n,l as a,i,e as s,x as F,P as f,W as h,F as j,Z as T,a0 as b,g as z}from"../modules/vue-Q5I2hRP5.js";import{L as W}from"../modules/shiki-BvYBi_Xo.js";import{u as Y}from"./SlideWrapper-wM-Kz2dZ.js";import{_ as r}from"./IconButton.vue_vue_type_script_setup_true_lang-DZOQYyt3.js";import{V as $}from"./shortcuts-C-tQoXzw.js";const Z=B({__name:"Draggable",props:{storageKey:{},initial:{}},setup(L){const u=L,g=M(null),m=u.initial??{x:0,y:0},y=u.storageKey?P(u.storageKey,m):M(m),{style:C}=R(g,{initialValue:y});return(k,v)=>(c(),V("div",{ref_key:"el",ref:g,class:"fixed",style:S(e(C))},[A(k.$slots,"default")],4))}}),_={class:"flex bg-main p-2"},q={class:"inline-block w-7 text-center"},G={class:"pt-.5"},H={class:"i-carbon:pin-filled transform -rotate-45"},I={class:"i-carbon:pin"},J={class:"i-carbon:error"},O={class:"i-carbon:close-outline"},nl=B({__name:"DrawingControls",setup(L){const{brush:u,canClear:g,canRedo:m,canUndo:y,clear:C,drauu:k,drawingEnabled:v,drawingMode:o,drawingPinned:d,brushColors:U}=Y();function E(){k.undo()}function K(){k.redo()}let x="stylus";function p(w){o.value=w,v.value=!0,w!=="eraseLine"&&(x=w)}function N(w){u.color=w,v.value=!0,o.value=x}return(w,l)=>e(v)||e(d)?(c(),D(Z,{key:0,class:i(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-nav border border-main",!e(v)&&e(d)?"opacity-40 hover:opacity-90":""]),"storage-key":"slidev-drawing-pos","initial-x":10,"initial-y":10},{default:n(()=>[a(r,{title:"Draw with stylus",class:i({shallow:e(o)!=="stylus"}),onClick:l[0]||(l[0]=t=>p("stylus"))},{default:n(()=>l[13]||(l[13]=[s("div",{class:"i-carbon:pen"},null,-1)])),_:1},8,["class"]),a(r,{title:"Draw a line",class:i({shallow:e(o)!=="line"}),onClick:l[1]||(l[1]=t=>p("line"))},{default:n(()=>l[14]||(l[14]=[s("svg",{width:"1em",height:"1em",class:"-mt-0.5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[s("path",{d:"M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",fill:"currentColor"})],-1)])),_:1},8,["class"]),a(r,{title:"Draw an arrow",class:i({shallow:e(o)!=="arrow"}),onClick:l[2]||(l[2]=t=>p("arrow"))},{default:n(()=>l[15]||(l[15]=[s("div",{class:"i-carbon:arrow-up-right"},null,-1)])),_:1},8,["class"]),a(r,{title:"Draw an ellipse",class:i({shallow:e(o)!=="ellipse"}),onClick:l[3]||(l[3]=t=>p("ellipse"))},{default:n(()=>l[16]||(l[16]=[s("div",{class:"i-carbon:radio-button"},null,-1)])),_:1},8,["class"]),a(r,{title:"Draw a rectangle",class:i({shallow:e(o)!=="rectangle"}),onClick:l[4]||(l[4]=t=>p("rectangle"))},{default:n(()=>l[17]||(l[17]=[s("div",{class:"i-carbon:checkbox"},null,-1)])),_:1},8,["class"]),a(r,{title:"Erase",class:i({shallow:e(o)!=="eraseLine"}),onClick:l[5]||(l[5]=t=>p("eraseLine"))},{default:n(()=>l[18]||(l[18]=[s("div",{class:"i-carbon:erase"},null,-1)])),_:1},8,["class"]),a($),a(e(W),null,{popper:n(()=>[s("div",_,[s("div",q,F(e(u).size),1),s("div",G,[f(s("input",{"onUpdate:modelValue":l[6]||(l[6]=t=>e(u).size=t),type:"range",min:"1",max:"15",onChange:l[7]||(l[7]=t=>o.value=e(x))},null,544),[[h,e(u).size]])])])]),default:n(()=>[a(r,{title:"Adjust stroke width",class:i({shallow:e(o)==="eraseLine"})},{default:n(()=>l[19]||(l[19]=[s("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},[s("line",{x1:"2",y1:"15",x2:"22",y2:"4",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"}),s("line",{x1:"2",y1:"24",x2:"28",y2:"10",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),s("line",{x1:"7",y1:"31",x2:"29",y2:"19",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])),_:1},8,["class"])]),_:1}),(c(!0),V(j,null,T(e(U),t=>(c(),D(r,{key:t,title:"Set brush color",class:i(e(u).color===t&&e(o)!=="eraseLine"?"active":"shallow"),onClick:Q=>N(t)},{default:n(()=>[s("div",{class:i(["w-6 h-6 transition-all transform border",e(u).color!==t?"rounded-1/2 scale-85 border-white":"rounded-md border-gray-300/50"]),style:S(e(v)?{background:t}:{borderColor:t})},null,6)]),_:2},1032,["class","onClick"]))),128)),a($),a(r,{title:"Undo",class:i({disabled:!e(y)}),onClick:l[8]||(l[8]=t=>E())},{default:n(()=>l[20]||(l[20]=[s("div",{class:"i-carbon:undo"},null,-1)])),_:1},8,["class"]),a(r,{title:"Redo",class:i({disabled:!e(m)}),onClick:l[9]||(l[9]=t=>K())},{default:n(()=>l[21]||(l[21]=[s("div",{class:"i-carbon:redo"},null,-1)])),_:1},8,["class"]),a(r,{title:"Delete",class:i({disabled:!e(g)}),onClick:l[10]||(l[10]=t=>e(C)())},{default:n(()=>l[22]||(l[22]=[s("div",{class:"i-carbon:trash-can"},null,-1)])),_:1},8,["class"]),a($),a(r,{title:e(d)?"Unpin drawing":"Pin drawing",class:i({shallow:!e(d)}),onClick:l[11]||(l[11]=t=>d.value=!e(d))},{default:n(()=>[f(s("div",H,null,512),[[b,e(d)]]),f(s("div",I,null,512),[[b,!e(d)]])]),_:1},8,["title","class"]),e(v)?(c(),D(r,{key:0,title:e(d)?"Drawing pinned":"Drawing unpinned",class:i({shallow:!e(v)}),onClick:l[12]||(l[12]=t=>v.value=!e(v))},{default:n(()=>[f(s("div",J,null,512),[[b,e(d)]]),f(s("div",O,null,512),[[b,!e(d)]])]),_:1},8,["title","class"])):z("v-if",!0)]),_:1},8,["class"])):z("v-if",!0)}});export{nl as _};
