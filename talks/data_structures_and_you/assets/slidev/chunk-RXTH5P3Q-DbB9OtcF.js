import{a as o,r as c,_ as n,ah as x}from"./md-ESFZO2Nf.js";var l=o(c()),d=n((a,t)=>{const e=a.append("rect");if(e.attr("x",t.x),e.attr("y",t.y),e.attr("fill",t.fill),e.attr("stroke",t.stroke),e.attr("width",t.width),e.attr("height",t.height),t.name&&e.attr("name",t.name),t.rx&&e.attr("rx",t.rx),t.ry&&e.attr("ry",t.ry),t.attrs!==void 0)for(const r in t.attrs)e.attr(r,t.attrs[r]);return t.class&&e.attr("class",t.class),e},"drawRect"),h=n((a,t)=>{const e={x:t.startx,y:t.starty,width:t.stopx-t.startx,height:t.stopy-t.starty,fill:t.fill,stroke:t.stroke,class:"rect"};d(a,e).lower()},"drawBackgroundRect"),m=n((a,t)=>{const e=t.text.replace(x," "),r=a.append("text");r.attr("x",t.x),r.attr("y",t.y),r.attr("class","legend"),r.style("text-anchor",t.anchor),t.class&&r.attr("class",t.class);const s=r.append("tspan");return s.attr("x",t.x+t.textMargin*2),s.text(e),r},"drawText"),y=n((a,t,e,r)=>{const s=a.append("image");s.attr("x",t),s.attr("y",e);const i=(0,l.sanitizeUrl)(r);s.attr("xlink:href",i)},"drawImage"),p=n((a,t,e,r)=>{const s=a.append("use");s.attr("x",t),s.attr("y",e);const i=(0,l.sanitizeUrl)(r);s.attr("xlink:href",`#${i}`)},"drawEmbeddedImage"),f=n(()=>({x:0,y:0,width:100,height:100,fill:"#EDF2AE",stroke:"#666",anchor:"start",rx:0,ry:0}),"getNoteRect"),w=n(()=>({x:0,y:0,width:100,height:100,"text-anchor":"start",style:"#666",textMargin:0,rx:0,ry:0,tspan:!0}),"getTextObj");export{w as a,h as b,p as c,d,y as e,m as f,f as g};
