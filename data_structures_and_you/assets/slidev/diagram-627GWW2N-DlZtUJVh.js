import{p as w}from"./chunk-K2ZEYYM2-CxzaT8FA.js";import{p as B}from"./gitGraph-YCYPL57B-5MQDGNWY-CR8m6J5m.js";import{G as S,s as F,g as z,p as P,q as W,c as T,d as D,_ as n,l as x,H as v,I as _,x as A,a8 as E,m as N}from"./md-5iOcqcd_.js";import"./chunk-TGZYFRKZ-Dcn7nufO.js";import"../index-BKRycsZf.js";import"../modules/vue-NONPKcAw.js";import"../modules/shiki-4O1MQmo4.js";import"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-D-i_PtPz.js";import"../modules/unplugin-icons-BymZu8he.js";import"./context-B_L1OuDA.js";import"./VClick-HlSdTR-I.js";import"../modules/file-saver-C8BEGaqa.js";import"./VClicks-CUDMxNRj.js";import"./default-Yh6HJKNB.js";var C={packet:[]},h=structuredClone(C),I=S.packet,L=n(()=>{const t=v({...I,..._().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),Y=n(()=>h.packet,"getPacket"),G=n(t=>{t.length>0&&h.packet.push(t)},"pushWord"),H=n(()=>{A(),h=structuredClone(C)},"clear"),u={pushWord:G,getPacket:Y,getConfig:L,clear:H,setAccTitle:F,getAccTitle:z,setDiagramTitle:P,getDiagramTitle:W,getAccDescription:T,setAccDescription:D},M=1e4,O=n(t=>{w(t,u);let e=-1,o=[],i=1;const{bitsPerRow:s}=u.getConfig();for(let{start:a,end:r,label:p}of t.blocks){if(r&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);for(e=r??a,x.debug(`Packet block ${a} - ${e} with label ${p}`);o.length<=s+1&&u.getPacket().length<M;){const[m,c]=q({start:a,end:r,label:p},i,s);if(o.push(m),m.end+1===i*s&&(u.pushWord(o),o=[],i++),!c)break;({start:a,end:r,label:p}=c)}}u.pushWord(o)},"populate"),q=n((t,e,o)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*o?[t,void 0]:[{start:t.start,end:e*o-1,label:t.label},{start:e*o,end:t.end,label:t.label}]},"getNextFittingBlock"),K={parse:n(async t=>{const e=await B("packet",t);x.debug(e),O(e)},"parse")},R=n((t,e,o,i)=>{const s=i.db,a=s.getConfig(),{rowHeight:r,paddingY:p,bitWidth:m,bitsPerRow:c}=a,b=s.getPacket(),l=s.getDiagramTitle(),g=r+p,d=g*(b.length+1)-(l?0:r),k=m*c+2,f=E(e);f.attr("viewbox",`0 0 ${k} ${d}`),N(f,d,k,a.useMaxWidth);for(const[$,y]of b.entries())U(f,y,$,a);f.append("text").text(l).attr("x",k/2).attr("y",d-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),U=n((t,e,o,{rowHeight:i,paddingX:s,paddingY:a,bitWidth:r,bitsPerRow:p,showBits:m})=>{const c=t.append("g"),b=o*(i+a)+a;for(const l of e){const g=l.start%p*r+1,d=(l.end-l.start+1)*r-s;if(c.append("rect").attr("x",g).attr("y",b).attr("width",d).attr("height",i).attr("class","packetBlock"),c.append("text").attr("x",g+d/2).attr("y",b+i/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(l.label),!m)continue;const k=l.end===l.start,f=b-2;c.append("text").attr("x",g+(k?d/2:0)).attr("y",f).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(l.start),k||c.append("text").attr("x",g+d).attr("y",f).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(l.end)}},"drawWord"),X={draw:R},j={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},J=n(({packet:t}={})=>{const e=v(j,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),pt={parser:K,db:u,renderer:X,styles:J};export{pt as diagram};
