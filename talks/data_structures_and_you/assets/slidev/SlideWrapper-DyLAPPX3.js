import{t as L,z as b,G as F,a8 as Zt,L as ct,a9 as Qt,W as zt,y as Jt,n as Wt,M as te,d as yt,o as Y,b as et,g as ee,aa as se,ab as ne,ac as A,e as W,f as St,h as tt,I as re,l as bt,c as ie,A as ae,i as oe}from"../modules/vue-NONPKcAw.js";import{W as Rt,l as Ot,c as pt,X as dt,Y as Pt,Z as le,$ as ue,a0 as U,a1 as he,a2 as ce,a3 as Et,a4 as Mt,a5 as $t,a6 as Lt,x as de,h as fe,a7 as pe,_ as Ut,g as ge,f as me,d as ve,e as ye,b as xe,a8 as _e,j as we}from"../index-CpTd1MoR.js";function Se(t){var e;return{info:L(((e=Rt(t))==null?void 0:e.meta.slide)??null),update:async()=>{}}}const ft={};function ms(t){function e(s){return ft[s]??(ft[s]=Se(s))}return{info:b({get(){return e(F(t)).info.value},set(s){e(F(t)).info.value=s}}),update:async(s,n)=>{const r=e(n??F(t)),i=await r.update(s);return i&&(r.info.value=i),i}}}var be=Object.defineProperty,kt=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,Ct=(t,e,s)=>e in t?be(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,gt=(t,e)=>{for(var s in e||(e={}))Pe.call(e,s)&&Ct(t,s,e[s]);if(kt)for(var s of kt(e))Ee.call(e,s)&&Ct(t,s,e[s]);return t},Me=()=>({emit(t,...e){for(let s=this.events[t]||[],n=0,r=s.length;n<r;n++)s[n](...e)},events:{},on(t,e){var s;return((s=this.events)[t]||(s[t]=[])).push(e),()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(r=>e!==r)}}});function st(t,e){return t-e}function $e(t){return t<0?-1:1}function nt(t){return[Math.abs(t),$e(t)]}function Bt(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var Le=2,k=Le;function Gt(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),n=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",e),n.setAttribute("id",t),n.setAttribute("viewBox","0 -5 10 10"),n.setAttribute("refX","5"),n.setAttribute("refY","0"),n.setAttribute("markerWidth","4"),n.setAttribute("markerHeight","4"),n.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),n.appendChild(r),s.appendChild(n),s}function ke(t,e){const s=t.x-e.x,n=t.y-e.y;return s*s+n*n}function Ce(t,e,s){let n=e.x,r=e.y,i=s.x-n,o=s.y-r;if(i!==0||o!==0){const a=((t.x-n)*i+(t.y-r)*o)/(i*i+o*o);a>1?(n=s.x,r=s.y):a>0&&(n+=i*a,r+=o*a)}return i=t.x-n,o=t.y-r,i*i+o*o}function De(t,e){let s=t[0];const n=[s];let r;for(let i=1,o=t.length;i<o;i++)r=t[i],ke(r,s)>e&&(n.push(r),s=r);return s!==r&&r&&n.push(r),n}function mt(t,e,s,n,r){let i=n,o=0;for(let a=e+1;a<s;a++){const l=Ce(t[a],t[e],t[s]);l>i&&(o=a,i=l)}i>n&&(o-e>1&&mt(t,e,o,n,r),r.push(t[o]),s-o>1&&mt(t,o,s,n,r))}function Ie(t,e){const s=t.length-1,n=[t[0]];return mt(t,0,s,e,n),n.push(t[s]),n}function Dt(t,e,s=!1){if(t.length<=2)return t;const n=e*e;return t=s?t:De(t,n),t=Ie(t,n),t}var B=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var e,s,n;const r=this.drauu.el,i=(e=this.drauu.options.coordinateScale)!=null?e:1,o=(s=this.drauu.options.offset)!=null?s:{x:0,y:0};if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-a.left+o.x)*i,y:(t.pageY-a.top+o.y)*i,pressure:t.pressure}}else{const a=this.drauu.svgPoint;a.x=t.clientX+o.x,a.y=t.clientY+o.y;const l=a.matrixTransform((n=r.getScreenCTM())==null?void 0:n.inverse());return{x:l.x*i,y:l.y*i,pressure:t.pressure}}}createElement(t,e){var s;const n=document.createElementNS("http://www.w3.org/2000/svg",t),r=e?gt(gt({},this.brush),e):this.brush;return n.setAttribute("fill",(s=r.fill)!=null?s:"transparent"),n.setAttribute("stroke",r.color),n.setAttribute("stroke-width",r.size.toString()),n.setAttribute("stroke-linecap","round"),r.dasharray&&n.setAttribute("stroke-dasharray",r.dasharray),n}attr(t,e){this.el.setAttribute(t,typeof e=="string"?e:e.toFixed(k))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},Ne=class z extends B{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Bt();const s=Gt(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Dt(this.points,1,!0),this.count=0),this.attr("d",z.toSvgData(this.points)),!0}onEnd(){const e=this.el;if(this.el=null,!e)return!1;if(e.setAttribute("d",z.toSvgData(Dt(this.points,1,!0))),!e.getTotalLength()){const{x:s,y:n}=this.points[0],r=this.brush.size/2;e.setAttribute("d",`M ${s-r} ${n} a ${r},${r} 0 1,0 ${r*2},0 a ${r},${r} 0 1,0 ${-r*2},0`),e.setAttribute("fill",this.brush.color),e.setAttribute("stroke-width","0")}return!0}static line(e,s){const n=s.x-e.x,r=s.y-e.y;return{length:Math.sqrt(n**2+r**2),angle:Math.atan2(r,n)}}static controlPoint(e,s,n,r){const i=s||e,o=n||e,a=.2,l=z.line(i,o),p=l.angle+(r?Math.PI:0),v=l.length*a,y=e.x+Math.cos(p)*v,x=e.y+Math.sin(p)*v;return{x:y,y:x}}static bezierCommand(e,s,n){const r=z.controlPoint(n[s-1],n[s-2],e),i=z.controlPoint(e,n[s-1],n[s+1],!0);return`C ${r.x.toFixed(k)},${r.y.toFixed(k)} ${i.x.toFixed(k)},${i.y.toFixed(k)} ${e.x.toFixed(k)},${e.y.toFixed(k)}`}static toSvgData(e){return e.reduce((s,n,r,i)=>r===0?`M ${n.x.toFixed(k)},${n.y.toFixed(k)}`:`${s} ${z.bezierCommand(n,r,i)}`,"")}},Ae=class extends B{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=nt(t.x-this.start.x),[n,r]=nt(t.y-this.start.y);if(this.shiftPressed){const i=Math.min(e,n);e=i,n=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",e),this.attr("ry",n);else{const[i,o]=[this.start.x,this.start.x+e*s].sort(st),[a,l]=[this.start.y,this.start.y+n*r].sort(st);this.attr("cx",(i+o)/2),this.attr("cy",(a+l)/2),this.attr("rx",(o-i)/2),this.attr("ry",(l-a)/2)}return!0}onEnd(){const t=this.el;if(this.el=null,!t)return!1;try{if(!t.getTotalLength())return!1}catch{return!1}return!0}},Fe=class extends B{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[],this._erased=[]}onSelected(t){const e=(s,n)=>{if(s&&s.length)for(let r=0;r<s.length;r++){const i=s[r];if(i.getTotalLength){const o=i.getTotalLength();for(let a=0;a<this.pathSubFactor;a++){const l=i.getPointAtLength(o*a/this.pathSubFactor),p=i.getPointAtLength(o*(a+1)/this.pathSubFactor);this.pathFragments.push({x1:l.x,x2:p.x,y1:l.y,y2:p.y,segment:a,element:n||i})}}else i.children&&e(i.children,i)}};t&&e(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const e=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,e}onEnd(){this.svgPointPrevious=void 0,this.svgPointCurrent=void 0;const t=this._erased;return this._erased=[],{undo:()=>t.forEach(e=>this.drauu._restoreNode(e)),redo:()=>t.forEach(e=>this.drauu._removeNode(e))}}checkAndEraseElement(){if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const e=this.pathFragments[t];if(this.svgPointPrevious&&this.svgPointCurrent){const s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(e,s)&&(this.drauu._removeNode(e.element),this._erased.push(e.element))}}return this._erased.length&&(this.pathFragments=this.pathFragments.filter(t=>!this._erased.includes(t.element))),this._erased.length>0}lineLineIntersect(t,e){const s=t.x1,n=t.x2,r=e.x1,i=e.x2,o=t.y1,a=t.y2,l=e.y1,p=e.y2,v=(s-n)*(l-p)-(o-a)*(r-i),y=(s*a-o*n)*(r-i)-(s-n)*(r*p-l*i),x=(s*a-o*n)*(l-p)-(o-a)*(r*p-l*i),d=(f,c,E)=>f>=c&&f<=E?!0:f>=E&&f<=c;if(v===0)return!1;{const f={x:y/v,y:x/v};return d(f.x,s,n)&&d(f.y,o,a)&&d(f.x,r,i)&&d(f.y,l,p)}}},Te=class extends B{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const e=Bt(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Gt(e,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${e})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:e,y:s}=t;if(this.shiftPressed){const n=t.x-this.start.x,r=t.y-this.start.y;if(r!==0){let i=n/r;i=Math.round(i),Math.abs(i)<=1?(e=this.start.x+r*i,s=this.start.y+r):(e=this.start.x+n,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-e),this.attr("y1",this.start.y*2-s),this.attr("x2",e),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",e),this.attr("y2",s)),!0}onEnd(){const t=this.el;if(this.el=null,!t)return!1;try{if(t.getTotalLength()<5)return!1}catch{return!1}return!0}},Ke=class extends B{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=nt(t.x-this.start.x),[n,r]=nt(t.y-this.start.y);if(this.shiftPressed){const i=Math.min(e,n);e=i,n=i}if(this.altPressed)this.attr("x",this.start.x-e),this.attr("y",this.start.y-n),this.attr("width",e*2),this.attr("height",n*2);else{const[i,o]=[this.start.x,this.start.x+e*s].sort(st),[a,l]=[this.start.y,this.start.y+n*r].sort(st);this.attr("x",i),this.attr("y",a),this.attr("width",o-i),this.attr("height",l-a)}return!0}onEnd(){const t=this.el;if(this.el=null,!t)return!1;try{if(!t.getTotalLength())return!1}catch{return!1}return!0}};function It(t,e,s,n=r=>r){return t*n(.5-e*(.5-s))}function je(t){return[-t[0],-t[1]]}function $(t,e){return[t[0]+e[0],t[1]+e[1]]}function P(t,e){return[t[0]-e[0],t[1]-e[1]]}function M(t,e){return[t[0]*e,t[1]*e]}function ze(t,e){return[t[0]/e,t[1]/e]}function q(t){return[t[1],-t[0]]}function Nt(t,e){return t[0]*e[0]+t[1]*e[1]}function Re(t,e){return t[0]===e[0]&&t[1]===e[1]}function Oe(t){return Math.hypot(t[0],t[1])}function Ue(t){return t[0]*t[0]+t[1]*t[1]}function At(t,e){return Ue(P(t,e))}function Vt(t){return ze(t,Oe(t))}function Be(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function H(t,e,s){let n=Math.sin(s),r=Math.cos(s),i=t[0]-e[0],o=t[1]-e[1],a=i*r-o*n,l=i*n+o*r;return[a+e[0],l+e[1]]}function vt(t,e,s){return $(t,M(P(e,t),s))}function Ft(t,e,s){return $(t,M(e,s))}var{min:O,PI:Ge}=Math,Tt=.275,X=Ge+1e-4;function Ve(t,e={}){let{size:s=16,smoothing:n=.5,thinning:r=.5,simulatePressure:i=!0,easing:o=h=>h,start:a={},end:l={},last:p=!1}=e,{cap:v=!0,easing:y=h=>h*(2-h)}=a,{cap:x=!0,easing:d=h=>--h*h*h+1}=l;if(t.length===0||s<=0)return[];let f=t[t.length-1].runningLength,c=a.taper===!1?0:a.taper===!0?Math.max(s,f):a.taper,E=l.taper===!1?0:l.taper===!0?Math.max(s,f):l.taper,R=Math.pow(s*n,2),C=[],u=[],_=t.slice(0,10).reduce((h,S)=>{let g=S.pressure;if(i){let m=O(1,S.distance/s),lt=O(1,1-m);g=O(1,h+(lt-h)*(m*Tt))}return(h+g)/2},t[0].pressure),w=It(s,r,t[t.length-1].pressure,o),rt,it=t[0].vector,G=t[0].point,Z=G,K=G,j=Z,at=!1;for(let h=0;h<t.length;h++){let{pressure:S}=t[h],{point:g,vector:m,distance:lt,runningLength:V}=t[h];if(h<t.length-1&&f-V<3)continue;if(r){if(i){let N=O(1,lt/s),ht=O(1,1-N);S=O(1,_+(ht-_)*(N*Tt))}w=It(s,r,S,o)}else w=s/2;rt===void 0&&(rt=w);let Ht=V<c?y(V/c):1,Xt=f-V<E?d((f-V)/E):1;w=Math.max(.01,w*Math.min(Ht,Xt));let xt=(h<t.length-1?t[h+1]:t[h]).vector,ut=h<t.length-1?Nt(m,xt):1,Yt=Nt(m,it)<0&&!at,_t=ut!==null&&ut<0;if(Yt||_t){let N=M(q(it),w);for(let ht=1/13,J=0;J<=1;J+=ht)K=H(P(g,N),g,X*J),C.push(K),j=H($(g,N),g,X*-J),u.push(j);G=K,Z=j,_t&&(at=!0);continue}if(at=!1,h===t.length-1){let N=M(q(m),w);C.push(P(g,N)),u.push($(g,N));continue}let wt=M(q(vt(xt,m,ut)),w);K=P(g,wt),(h<=1||At(G,K)>R)&&(C.push(K),G=K),j=$(g,wt),(h<=1||At(Z,j)>R)&&(u.push(j),Z=j),_=S,it=m}let D=t[0].point.slice(0,2),I=t.length>1?t[t.length-1].point.slice(0,2):$(t[0].point,[1,1]),ot=[],Q=[];if(t.length===1){if(!(c||E)||p){let h=Ft(D,Vt(q(P(D,I))),-(rt||w)),S=[];for(let g=1/13,m=g;m<=1;m+=g)S.push(H(h,D,X*2*m));return S}}else{if(!(c||E&&t.length===1))if(v)for(let S=1/13,g=S;g<=1;g+=S){let m=H(u[0],D,X*g);ot.push(m)}else{let S=P(C[0],u[0]),g=M(S,.5),m=M(S,.51);ot.push(P(D,g),P(D,m),$(D,m),$(D,g))}let h=q(je(t[t.length-1].vector));if(E||c&&t.length===1)Q.push(I);else if(x){let S=Ft(I,h,w);for(let g=1/29,m=g;m<1;m+=g)Q.push(H(S,I,X*3*m))}else Q.push($(I,M(h,w)),$(I,M(h,w*.99)),P(I,M(h,w*.99)),P(I,M(h,w)))}return C.concat(Q,u.reverse(),ot)}function qe(t,e={}){var s;let{streamline:n=.5,size:r=16,last:i=!1}=e;if(t.length===0)return[];let o=.15+(1-n)*.85,a=Array.isArray(t[0])?t:t.map(({x:d,y:f,pressure:c=.5})=>[d,f,c]);if(a.length===2){let d=a[1];a=a.slice(0,-1);for(let f=1;f<5;f++)a.push(vt(a[0],d,f/4))}a.length===1&&(a=[...a,[...$(a[0],[1,1]),...a[0].slice(2)]]);let l=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,v=0,y=l[0],x=a.length-1;for(let d=1;d<a.length;d++){let f=i&&d===x?a[d].slice(0,2):vt(y.point,a[d],o);if(Re(y.point,f))continue;let c=Be(f,y.point);if(v+=c,d<x&&!p){if(v<r)continue;p=!0}y={point:f,pressure:a[d][2]>=0?a[d][2]:.5,vector:Vt(P(y.point,f)),distance:c,runningLength:v},l.push(y)}return l[0].vector=((s=l[1])==null?void 0:s.vector)||[0,0],l}function He(t,e={}){return Ve(qe(t,e),e)}var Xe=class qt extends B{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){return qt.getSvgData(e,this.brush)}static getSvgData(e,s){const n=He(e,gt({size:s.size,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},s.stylusOptions));if(!n.length)return"";const r=n.reduce((i,[o,a],l,p)=>{const[v,y]=p[(l+1)%p.length];return i.push(o,a,(o+v)/2,(a+y)/2),i},["M",...n[0],"Q"]);return r.push("Z"),r.map(i=>typeof i=="number"?i.toFixed(2):i).join(" ")}};function Ye(t){return{draw:new Ne(t),stylus:new Xe(t),line:new Te(t),rectangle:new Ke(t),ellipse:new Ae(t),eraseLine:new Fe(t)}}var Ze=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Me(),this._originalPointerId=null,this._models=Ye(this),this._opStack=[],this._opIndex=0,this._disposables=[],this._elements=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget,t.window)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,e,s=window){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(e)||this.el,r=this.eventStart.bind(this),i=this.eventMove.bind(this),o=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",r,{passive:!1}),s.addEventListener("pointermove",i,{passive:!1}),s.addEventListener("pointerup",o,{passive:!1}),s.addEventListener("pointercancel",o,{passive:!1}),s.addEventListener("keydown",a,!1),s.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",r),s.removeEventListener("pointermove",i),s.removeEventListener("pointerup",o),s.removeEventListener("pointercancel",o),s.removeEventListener("keydown",a,!1),s.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this._elements.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,e){return this._emitter.on(t,e)}undo(){return!this.canUndo()||this.drawing?!1:(this._opStack[--this._opIndex].undo(),this._emitter.emit("changed"),!0)}redo(){return!this.canRedo()||this.drawing?!1:(this._opStack[this._opIndex++].redo(),this._emitter.emit("changed"),!0)}canRedo(){return this._opIndex<this._opStack.length}canUndo(){return this._opIndex>0}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._originalPointerId=t.pointerId,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const e=this.model._eventUp(t);if(!e)this.cancel();else if(e===!0){const s=this._currentNode;s&&(this._appendNode(s),this.commit({undo:()=>this._removeNode(s),redo:()=>this._restoreNode(s)}))}else this.commit(e);this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed"),this._originalPointerId=null}acceptsInput(t){return(!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType))&&!(this._originalPointerId&&this._originalPointerId!==t.pointerId)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(t){this._opStack.length=this._opIndex,this._opStack.push(t),this._opIndex++;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._opStack.length=0,this._opIndex=0,this._elements=[],this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}_appendNode(t){const e=this._elements.at(-1);e?e.after(t):this.el.append(t);const s=this._elements.push(t)-1;t.dataset.drauu_index=s.toString()}_removeNode(t){t.remove(),this._elements[+t.dataset.drauu_index]=null}_restoreNode(t){const e=+t.dataset.drauu_index;this._elements[e]=t;for(let s=e-1;s>=0;s--){const n=this._elements[s];if(n){n.after(t);return}}this.el.prepend(t)}};function Qe(t){return new Ze(t)}const Je=Zt(()=>{const{currentSlideNo:t,isPresenter:e}=Ot(),s=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],n=ct("slidev-drawing-enabled",!1),r=ct("slidev-drawing-pinned",!1),i=Qt(ct("slidev-drawing-brush",{color:s[0],size:4,mode:"stylus"})),o=L(!1),a=L(!1),l=L(!1),p=L(!1),v=L("stylus"),y=b(()=>pt.drawings.syncAll||e.value);let x=!1;const d=b({get(){return v.value},set(u){v.value=u,u==="arrow"?(c.mode="line",i.arrowEnd=!0):(c.mode=u,i.arrowEnd=!1)}}),f=zt({brush:i,acceptsInputTypes:b(()=>n.value&&(!pt.drawings.presenterOnly||e.value)?void 0:["pen"]),coordinateTransform:!1}),c=Jt(Qe(f));function E(){c.clear(),y.value&&Pt(t.value,"")}function R(){var u;l.value=c.canRedo(),a.value=c.canUndo(),p.value=!!((u=c.el)!=null&&u.children.length)}function C(u){x=!0;const _=dt[u||t.value];_!=null?c.load(_):c.clear(),R(),x=!1}return c.on("changed",()=>{if(R(),!x){const u=c.dump(),_=t.value;(dt[_]||"")!==u&&y.value&&Pt(_,c.dump())}}),le(u=>{x=!0,u[t.value]!=null&&c.load(u[t.value]||""),x=!1,R()}),Wt(()=>{te(t,()=>{c.mounted&&C()},{immediate:!0})}),c.on("start",()=>o.value=!0),c.on("end",()=>o.value=!1),window.addEventListener("keydown",u=>{if(!n.value||ue.value)return;const _=!u.ctrlKey&&!u.altKey&&!u.shiftKey&&!u.metaKey;let w=!0;u.code==="KeyZ"&&(u.ctrlKey||u.metaKey)?u.shiftKey?c.redo():c.undo():u.code==="Escape"?n.value=!1:u.code==="KeyL"&&_?d.value="line":u.code==="KeyA"&&_?d.value="arrow":u.code==="KeyS"&&_?d.value="stylus":u.code==="KeyR"&&_?d.value="rectangle":u.code==="KeyE"&&_?d.value="ellipse":u.code==="KeyC"&&_?E():u.code.startsWith("Digit")&&_&&+u.code[5]<=s.length?i.color=s[+u.code[5]-1]:w=!1,w&&(u.preventDefault(),u.stopPropagation())},!1),{brush:i,brushColors:s,canClear:p,canRedo:l,canUndo:a,clear:E,drauu:c,drauuOptions:f,drawingEnabled:n,drawingMode:d,drawingPinned:r,drawingState:dt,isDrawing:o,loadCanvas:C}}),We=["innerHTML"],vs=yt({__name:"DrawingPreview",props:{page:{}},setup(t){const{drawingState:e}=Je();return(s,n)=>F(e)[s.page]?(Y(),et("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:F(e)[s.page]},null,8,We)):ee("",!0)}}),T=zt({});let ts=[],es=[];U(T,"$syncUp",!0);U(T,"$syncDown",!0);U(T,"$paused",!1);U(T,"$onSet",t=>ts.push(t));U(T,"$onPatch",t=>es.push(t));he();U(T,"$patch",async()=>!1);const ss=ce(T,T,!0);var Kt;(Kt=window.navigator.userAgent.match(/Chrome\/(\d+)/))==null||Kt[1];var jt;(jt=window.navigator.userAgent.match(/Chrome\/(\d+)/))==null||jt[1];class ns{constructor(){this._screenshotSession=null}getSnapshot(e,s){const n=e+(s?"-dark":"-light"),r=ss.state[n];if(!r)return;const i=Rt(e);if(i&&(r==null?void 0:r.revision)===(i==null?void 0:i.meta.slide.revision))return r.image}async saveSnapshot(e,s,n){return!1}async startCapturing(e){return!1}}const rs=new ns,is=["id"],as=["id"],os={key:1,class:"slidev-slide-container w-full h-full relative"},ls=["src"],us=yt({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},isMain:{type:Boolean,default:!1},no:{type:Number,required:!1},useSnapshot:{type:Boolean,default:!1},contentStyle:{type:Object,default:()=>({})}},setup(t){const e=t,{isPrintMode:s}=Ot(),n=L(null),r=se(n),i=L(null),o=b(()=>e.width??r.width.value),a=b(()=>e.width?e.width/Et.value:r.height.value),l=b(()=>Mt.value&&!s.value?+Mt.value:Math.min(o.value/$t.value,a.value/Lt.value)),p=b(()=>({...e.contentStyle,height:`${Lt.value}px`,width:`${$t.value}px`,transform:`translate(-50%, -50%) scale(${l.value})`,"--slidev-slide-scale":l.value})),v=b(()=>e.width?{width:`${e.width}px`,height:`${e.width/Et.value}px`}:{});e.isMain&&ne(b(()=>`:root { --slidev-slide-scale: ${l.value}; }`)),A(fe,l),A(pe,i);const y=b(()=>{if(!(e.no==null||!e.useSnapshot))return rs.getSnapshot(e.no,de.value)});return(x,d)=>y.value?(Y(),et("div",os,[W("img",{src:y.value,class:"w-full h-full object-cover",style:tt(v.value)},null,12,ls),d[0]||(d[0]=W("div",{absolute:"","bottom-1":"","right-1":"","p0.5":"","text-cyan:75":"","bg-cyan:10":"",rounded:"",title:"Snapshot"},[W("div",{class:"i-carbon-camera"})],-1))])):(Y(),et("div",{key:0,id:t.isMain?"slide-container":void 0,ref_key:"container",ref:n,class:"slidev-slide-container",style:tt(v.value)},[W("div",{id:t.isMain?"slide-content":void 0,ref_key:"slideElement",ref:i,class:"slidev-slide-content",style:tt(p.value)},[St(x.$slots,"default",{},void 0,!0)],12,as),St(x.$slots,"controls",{},void 0,!0)],12,is))}}),ys=Ut(us,[["__scopeId","data-v-d775ce03"]]),xs={render:()=>[]},_s={render:()=>[]},hs={render:()=>[]},cs={render:()=>[]},ds=["data-slidev-no","lang"],fs=yt({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},route:{type:Object,required:!0}},setup(t){const e=t,s=b(()=>{var i,o;return((o=(i=e.route.meta)==null?void 0:i.slide)==null?void 0:o.frontmatter.zoom)??1});A(ge,e.route),A(me,e.route.meta.slide.frontmatter),A(ve,L(e.route.no)),A(ye,L(e.renderContext)),A(xe,re(e,"clicksContext")),A(we,s);const n=b(()=>s.value===1?void 0:{width:`${100/s.value}%`,height:`${100/s.value}%`,transformOrigin:"top left",transform:`scale(${s.value})`}),r=b(()=>({...n.value,"user-select":pt.selectable?void 0:"none"}));return(i,o)=>(Y(),et("div",{"data-slidev-no":e.route.no,class:oe(F(_e)(t.route,["slide","presenter"].includes(e.renderContext)?"":"disable-view-transition")),style:tt(r.value),lang:e.route.meta.slide.frontmatter.lang},[bt(F(cs)),(Y(),ie(ae(e.route.component))),bt(F(hs))],14,ds))}}),ws=Ut(fs,[["__scopeId","data-v-86edf2bb"]]);export{_s as G,ws as S,vs as _,ms as a,ys as b,Se as c,xs as d,Je as u};
