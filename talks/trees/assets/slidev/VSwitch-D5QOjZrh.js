import{t as N}from"../modules/shiki-CQ9Joarf.js";import{d as E,t as v,G as T,E as y,D as R,v as c,I as K}from"../modules/vue-D4kSXDOz.js";import{m as O,C as w,r as x,b as V,d as B,e as D,f as F,h as C}from"../index-BdBL47cZ.js";import{u as G}from"./context-DW6H7Lwp.js";const U=E({props:{at:{type:[Number,String],default:"+1"},unmount:{type:Boolean,default:!1},transition:{type:[Object,String,Boolean],default:!1},tag:{type:String,default:"div"},childTag:{type:String,default:"div"}},setup({at:S,unmount:_,transition:u,tag:f,childTag:h},{slots:g}){const I=Object.entries(g).sort((t,e)=>-t[0].split("-")[0]+ +e[0].split("-")[0]),o=[];let r;for(const[t,e]of I){const a=v();if(Number.isFinite(+t))o.push([+t,r??+t+1,e,a]),r=+t;else{const[s,i]=t.split("-").map(Number);if(!Number.isFinite(s)||!Number.isFinite(i))throw new Error(`Invalid range for v-switch: ${t}`);o.push([s,i,e,a]),r=s}}const L=Math.max(...o.map(t=>t[1]))-1,p=O(),n=v(0),{$clicksContext:l,$nav:b}=G();T(()=>{const t=l.calculateSince(S,L);if(!t){n.value=w;return}l.register(p,t),y(()=>{n.value=t.currentOffset.value+1})}),R(()=>{l.unregister(p)});function k(){C.value=!0,N()}const d=u&&{...x(u,b.value.navDirection<0),tag:f,onAfterLeave:k};return()=>{const t=[];for(let e=o.length-1;e>=0;e--){const[a,s,i,A]=o[e],m=a<=n.value&&n.value<s;_&&!m||t.push(c(h,{key:e,ref:A,class:[V,n.value===a&&B,n.value>=s&&D,!m&&F].filter(Boolean),"data-slidev-clicks-start":a,"data-slidev-clicks-end":s},i==null?void 0:i()))}return d?c(K,C.value?{}:d,()=>t):c(f,t)}}});export{U as _};
