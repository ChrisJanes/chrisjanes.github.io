import{I as Z}from"./chunk-YJGJQOYZ-DI3iMa_t.js";import{p as F}from"./chunk-K2ZEYYM2-C8yorp78.js";import{p as U}from"./gitGraph-YCYPL57B-5MQDGNWY-COpdtEbz.js";import{G as ee,_ as h,e as re,H as te,I as ae,K as ne,l as w,s as se,g as ce,c as oe,d as ie,p as de,q as he,f as B,x as le,k as $e,v as fe,L as ge}from"./Mermaid.vue_vue_type_script_setup_true_lang-HPruvTA1.js";import"./chunk-TGZYFRKZ-B-thtS4w.js";import"./index-MT-4ei2m.js";import"./modules/vue-BsyFHM2O.js";import"./modules/shiki-lHQ22T56.js";import"./modules/file-saver-C8BEGaqa.js";var p={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},ye=ee.gitGraph,z=h(()=>te({...ye,...ae().gitGraph}),"getConfig"),i=new Z(()=>{const t=z(),e=t.mainBranchName,a=t.mainBranchOrder;return{mainBranchName:e,commits:new Map,head:null,branchConfig:new Map([[e,{name:e,order:a}]]),branches:new Map([[e,null]]),currBranch:e,direction:"LR",seq:0,options:{}}});function S(){return ne({length:7})}h(S,"getID");function D(t,e){const a=Object.create(null);return t.reduce((s,r)=>{const n=e(r);return a[n]||(a[n]=!0,s.push(r)),s},[])}h(D,"uniqBy");var ue=h(function(t){i.records.direction=t},"setDirection"),pe=h(function(t){w.debug("options str",t),t=t==null?void 0:t.trim(),t=t||"{}";try{i.records.options=JSON.parse(t)}catch(e){w.error("error while parsing gitGraph options",e.message)}},"setOptions"),xe=h(function(){return i.records.options},"getOptions"),be=h(function(t){let e=t.msg,a=t.id;const s=t.type;let r=t.tags;w.info("commit",e,a,s,r),w.debug("Entering commit:",e,a,s,r);const n=z();a=B.sanitizeText(a,n),e=B.sanitizeText(e,n),r=r==null?void 0:r.map(c=>B.sanitizeText(c,n));const o={id:a||i.records.seq+"-"+S(),message:e,seq:i.records.seq++,type:s??p.NORMAL,tags:r??[],parents:i.records.head==null?[]:[i.records.head.id],branch:i.records.currBranch};i.records.head=o,w.info("main branch",n.mainBranchName),i.records.commits.set(o.id,o),i.records.branches.set(i.records.currBranch,o.id),w.debug("in pushCommit "+o.id)},"commit"),me=h(function(t){let e=t.name;const a=t.order;if(e=B.sanitizeText(e,z()),i.records.branches.has(e))throw new Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${e}")`);i.records.branches.set(e,i.records.head!=null?i.records.head.id:null),i.records.branchConfig.set(e,{name:e,order:a}),N(e),w.debug("in createBranch")},"branch"),we=h(t=>{let e=t.branch,a=t.id;const s=t.type,r=t.tags,n=z();e=B.sanitizeText(e,n),a&&(a=B.sanitizeText(a,n));const o=i.records.branches.get(i.records.currBranch),c=i.records.branches.get(e),$=o?i.records.commits.get(o):void 0,l=c?i.records.commits.get(c):void 0;if($&&l&&$.branch===e)throw new Error(`Cannot merge branch '${e}' into itself.`);if(i.records.currBranch===e){const d=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw d.hash={text:`merge ${e}`,token:`merge ${e}`,expected:["branch abc"]},d}if($===void 0||!$){const d=new Error(`Incorrect usage of "merge". Current branch (${i.records.currBranch})has no commits`);throw d.hash={text:`merge ${e}`,token:`merge ${e}`,expected:["commit"]},d}if(!i.records.branches.has(e)){const d=new Error('Incorrect usage of "merge". Branch to be merged ('+e+") does not exist");throw d.hash={text:`merge ${e}`,token:`merge ${e}`,expected:[`branch ${e}`]},d}if(l===void 0||!l){const d=new Error('Incorrect usage of "merge". Branch to be merged ('+e+") has no commits");throw d.hash={text:`merge ${e}`,token:`merge ${e}`,expected:['"commit"']},d}if($===l){const d=new Error('Incorrect usage of "merge". Both branches have same head');throw d.hash={text:`merge ${e}`,token:`merge ${e}`,expected:["branch abc"]},d}if(a&&i.records.commits.has(a)){const d=new Error('Incorrect usage of "merge". Commit with id:'+a+" already exists, use different custom Id");throw d.hash={text:`merge ${e} ${a} ${s} ${r==null?void 0:r.join(" ")}`,token:`merge ${e} ${a} ${s} ${r==null?void 0:r.join(" ")}`,expected:[`merge ${e} ${a}_UNIQUE ${s} ${r==null?void 0:r.join(" ")}`]},d}const f=c||"",g={id:a||`${i.records.seq}-${S()}`,message:`merged branch ${e} into ${i.records.currBranch}`,seq:i.records.seq++,parents:i.records.head==null?[]:[i.records.head.id,f],branch:i.records.currBranch,type:p.MERGE,customType:s,customId:!!a,tags:r??[]};i.records.head=g,i.records.commits.set(g.id,g),i.records.branches.set(i.records.currBranch,g.id),w.debug(i.records.branches),w.debug("in mergeBranch")},"merge"),Ce=h(function(t){let e=t.id,a=t.targetId,s=t.tags,r=t.parent;w.debug("Entering cherryPick:",e,a,s);const n=z();if(e=B.sanitizeText(e,n),a=B.sanitizeText(a,n),s=s==null?void 0:s.map($=>B.sanitizeText($,n)),r=B.sanitizeText(r,n),!e||!i.records.commits.has(e)){const $=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw $.hash={text:`cherryPick ${e} ${a}`,token:`cherryPick ${e} ${a}`,expected:["cherry-pick abc"]},$}const o=i.records.commits.get(e);if(o===void 0||!o)throw new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');if(r&&!(Array.isArray(o.parents)&&o.parents.includes(r)))throw new Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");const c=o.branch;if(o.type===p.MERGE&&!r)throw new Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");if(!a||!i.records.commits.has(a)){if(c===i.records.currBranch){const g=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw g.hash={text:`cherryPick ${e} ${a}`,token:`cherryPick ${e} ${a}`,expected:["cherry-pick abc"]},g}const $=i.records.branches.get(i.records.currBranch);if($===void 0||!$){const g=new Error(`Incorrect usage of "cherry-pick". Current branch (${i.records.currBranch})has no commits`);throw g.hash={text:`cherryPick ${e} ${a}`,token:`cherryPick ${e} ${a}`,expected:["cherry-pick abc"]},g}const l=i.records.commits.get($);if(l===void 0||!l){const g=new Error(`Incorrect usage of "cherry-pick". Current branch (${i.records.currBranch})has no commits`);throw g.hash={text:`cherryPick ${e} ${a}`,token:`cherryPick ${e} ${a}`,expected:["cherry-pick abc"]},g}const f={id:i.records.seq+"-"+S(),message:`cherry-picked ${o==null?void 0:o.message} into ${i.records.currBranch}`,seq:i.records.seq++,parents:i.records.head==null?[]:[i.records.head.id,o.id],branch:i.records.currBranch,type:p.CHERRY_PICK,tags:s?s.filter(Boolean):[`cherry-pick:${o.id}${o.type===p.MERGE?`|parent:${r}`:""}`]};i.records.head=f,i.records.commits.set(f.id,f),i.records.branches.set(i.records.currBranch,f.id),w.debug(i.records.branches),w.debug("in cherryPick")}},"cherryPick"),N=h(function(t){if(t=B.sanitizeText(t,z()),i.records.branches.has(t)){i.records.currBranch=t;const e=i.records.branches.get(i.records.currBranch);e===void 0||!e?i.records.head=null:i.records.head=i.records.commits.get(e)??null}else{const e=new Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${t}")`);throw e.hash={text:`checkout ${t}`,token:`checkout ${t}`,expected:[`branch ${t}`]},e}},"checkout");function A(t,e,a){const s=t.indexOf(e);s===-1?t.push(a):t.splice(s,1,a)}h(A,"upsert");function K(t){const e=t.reduce((r,n)=>r.seq>n.seq?r:n,t[0]);let a="";t.forEach(function(r){r===e?a+="	*":a+="	|"});const s=[a,e.id,e.seq];for(const r in i.records.branches)i.records.branches.get(r)===e.id&&s.push(r);if(w.debug(s.join(" ")),e.parents&&e.parents.length==2&&e.parents[0]&&e.parents[1]){const r=i.records.commits.get(e.parents[0]);A(t,e,r),e.parents[1]&&t.push(i.records.commits.get(e.parents[1]))}else{if(e.parents.length==0)return;if(e.parents[0]){const r=i.records.commits.get(e.parents[0]);A(t,e,r)}}t=D(t,r=>r.id),K(t)}h(K,"prettyPrintCommitHistory");var ve=h(function(){w.debug(i.records.commits);const t=V()[0];K([t])},"prettyPrint"),Ee=h(function(){i.reset(),le()},"clear"),Be=h(function(){return[...i.records.branchConfig.values()].map((e,a)=>e.order!==null&&e.order!==void 0?e:{...e,order:parseFloat(`0.${a}`)}).sort((e,a)=>(e.order??0)-(a.order??0)).map(({name:e})=>({name:e}))},"getBranchesAsObjArray"),ke=h(function(){return i.records.branches},"getBranches"),Le=h(function(){return i.records.commits},"getCommits"),V=h(function(){const t=[...i.records.commits.values()];return t.forEach(function(e){w.debug(e.id)}),t.sort((e,a)=>e.seq-a.seq),t},"getCommitsArray"),Te=h(function(){return i.records.currBranch},"getCurrentBranch"),Me=h(function(){return i.records.direction},"getDirection"),Re=h(function(){return i.records.head},"getHead"),X={commitType:p,getConfig:z,setDirection:ue,setOptions:pe,getOptions:xe,commit:be,branch:me,merge:we,cherryPick:Ce,checkout:N,prettyPrint:ve,clear:Ee,getBranchesAsObjArray:Be,getBranches:ke,getCommits:Le,getCommitsArray:V,getCurrentBranch:Te,getDirection:Me,getHead:Re,setAccTitle:se,getAccTitle:ce,getAccDescription:oe,setAccDescription:ie,setDiagramTitle:de,getDiagramTitle:he},Ie=h((t,e)=>{F(t,e),t.dir&&e.setDirection(t.dir);for(const a of t.statements)qe(a,e)},"populate"),qe=h((t,e)=>{const s={Commit:h(r=>e.commit(Oe(r)),"Commit"),Branch:h(r=>e.branch(ze(r)),"Branch"),Merge:h(r=>e.merge(Ge(r)),"Merge"),Checkout:h(r=>e.checkout(He(r)),"Checkout"),CherryPicking:h(r=>e.cherryPick(Pe(r)),"CherryPicking")}[t.$type];s?s(t):w.error(`Unknown statement type: ${t.$type}`)},"parseStatement"),Oe=h(t=>({id:t.id,msg:t.message??"",type:t.type!==void 0?p[t.type]:p.NORMAL,tags:t.tags??void 0}),"parseCommit"),ze=h(t=>({name:t.name,order:t.order??0}),"parseBranch"),Ge=h(t=>({branch:t.branch,id:t.id??"",type:t.type!==void 0?p[t.type]:void 0,tags:t.tags??void 0}),"parseMerge"),He=h(t=>t.branch,"parseCheckout"),Pe=h(t=>{var a;return{id:t.id,targetId:"",tags:((a=t.tags)==null?void 0:a.length)===0?void 0:t.tags,parent:t.parent}},"parseCherryPicking"),We={parse:h(async t=>{const e=await U("gitGraph",t);w.debug(e),Ie(e,X)},"parse")},j=re(),b=j==null?void 0:j.gitGraph,R=10,I=40,k=4,L=2,O=8,v=new Map,E=new Map,P=30,G=new Map,W=[],M=0,u="LR",Se=h(()=>{v.clear(),E.clear(),G.clear(),M=0,W=[],u="LR"},"clear"),J=h(t=>{const e=document.createElementNS("http://www.w3.org/2000/svg","text");return(typeof t=="string"?t.split(/\\n|\n|<br\s*\/?>/gi):t).forEach(s=>{const r=document.createElementNS("http://www.w3.org/2000/svg","tspan");r.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),r.setAttribute("dy","1em"),r.setAttribute("x","0"),r.setAttribute("class","row"),r.textContent=s.trim(),e.appendChild(r)}),e},"drawText"),Q=h(t=>{let e,a,s;return u==="BT"?(a=h((r,n)=>r<=n,"comparisonFunc"),s=1/0):(a=h((r,n)=>r>=n,"comparisonFunc"),s=0),t.forEach(r=>{var o,c;const n=u==="TB"||u=="BT"?(o=E.get(r))==null?void 0:o.y:(c=E.get(r))==null?void 0:c.x;n!==void 0&&a(n,s)&&(e=r,s=n)}),e},"findClosestParent"),je=h(t=>{let e="",a=1/0;return t.forEach(s=>{const r=E.get(s).y;r<=a&&(e=s,a=r)}),e||void 0},"findClosestParentBT"),Ae=h((t,e,a)=>{let s=a,r=a;const n=[];t.forEach(o=>{const c=e.get(o);if(!c)throw new Error(`Commit not found for key ${o}`);c.parents.length?(s=Ye(c),r=Math.max(s,r)):n.push(c),_e(c,s)}),s=r,n.forEach(o=>{De(o,s,a)}),t.forEach(o=>{const c=e.get(o);if(c!=null&&c.parents.length){const $=je(c.parents);s=E.get($).y-I,s<=r&&(r=s);const l=v.get(c.branch).pos,f=s-R;E.set(c.id,{x:l,y:f})}})},"setParallelBTPos"),Ke=h(t=>{var s;const e=Q(t.parents.filter(r=>r!==null));if(!e)throw new Error(`Closest parent not found for commit ${t.id}`);const a=(s=E.get(e))==null?void 0:s.y;if(a===void 0)throw new Error(`Closest parent position not found for commit ${t.id}`);return a},"findClosestParentPos"),Ye=h(t=>Ke(t)+I,"calculateCommitPosition"),_e=h((t,e)=>{const a=v.get(t.branch);if(!a)throw new Error(`Branch not found for commit ${t.id}`);const s=a.pos,r=e+R;return E.set(t.id,{x:s,y:r}),{x:s,y:r}},"setCommitPosition"),De=h((t,e,a)=>{const s=v.get(t.branch);if(!s)throw new Error(`Branch not found for commit ${t.id}`);const r=e+a,n=s.pos;E.set(t.id,{x:n,y:r})},"setRootPosition"),Ne=h((t,e,a,s,r,n)=>{if(n===p.HIGHLIGHT)t.append("rect").attr("x",a.x-10).attr("y",a.y-10).attr("width",20).attr("height",20).attr("class",`commit ${e.id} commit-highlight${r%O} ${s}-outer`),t.append("rect").attr("x",a.x-6).attr("y",a.y-6).attr("width",12).attr("height",12).attr("class",`commit ${e.id} commit${r%O} ${s}-inner`);else if(n===p.CHERRY_PICK)t.append("circle").attr("cx",a.x).attr("cy",a.y).attr("r",10).attr("class",`commit ${e.id} ${s}`),t.append("circle").attr("cx",a.x-3).attr("cy",a.y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${e.id} ${s}`),t.append("circle").attr("cx",a.x+3).attr("cy",a.y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${e.id} ${s}`),t.append("line").attr("x1",a.x+3).attr("y1",a.y+1).attr("x2",a.x).attr("y2",a.y-5).attr("stroke","#fff").attr("class",`commit ${e.id} ${s}`),t.append("line").attr("x1",a.x-3).attr("y1",a.y+1).attr("x2",a.x).attr("y2",a.y-5).attr("stroke","#fff").attr("class",`commit ${e.id} ${s}`);else{const o=t.append("circle");if(o.attr("cx",a.x),o.attr("cy",a.y),o.attr("r",e.type===p.MERGE?9:10),o.attr("class",`commit ${e.id} commit${r%O}`),n===p.MERGE){const c=t.append("circle");c.attr("cx",a.x),c.attr("cy",a.y),c.attr("r",6),c.attr("class",`commit ${s} ${e.id} commit${r%O}`)}n===p.REVERSE&&t.append("path").attr("d",`M ${a.x-5},${a.y-5}L${a.x+5},${a.y+5}M${a.x-5},${a.y+5}L${a.x+5},${a.y-5}`).attr("class",`commit ${s} ${e.id} commit${r%O}`)}},"drawCommitBullet"),Ve=h((t,e,a,s)=>{var r;if(e.type!==p.CHERRY_PICK&&(e.customId&&e.type===p.MERGE||e.type!==p.MERGE)&&(b!=null&&b.showCommitLabel)){const n=t.append("g"),o=n.insert("rect").attr("class","commit-label-bkg"),c=n.append("text").attr("x",s).attr("y",a.y+25).attr("class","commit-label").text(e.id),$=(r=c.node())==null?void 0:r.getBBox();if($&&(o.attr("x",a.posWithOffset-$.width/2-L).attr("y",a.y+13.5).attr("width",$.width+2*L).attr("height",$.height+2*L),u==="TB"||u==="BT"?(o.attr("x",a.x-($.width+4*k+5)).attr("y",a.y-12),c.attr("x",a.x-($.width+4*k)).attr("y",a.y+$.height-12)):c.attr("x",a.posWithOffset-$.width/2),b.rotateCommitLabel))if(u==="TB"||u==="BT")c.attr("transform","rotate(-45, "+a.x+", "+a.y+")"),o.attr("transform","rotate(-45, "+a.x+", "+a.y+")");else{const l=-7.5-($.width+10)/25*9.5,f=10+$.width/25*8.5;n.attr("transform","translate("+l+", "+f+") rotate(-45, "+s+", "+a.y+")")}}},"drawCommitLabel"),Xe=h((t,e,a,s)=>{var r;if(e.tags.length>0){let n=0,o=0,c=0;const $=[];for(const l of e.tags.reverse()){const f=t.insert("polygon"),g=t.append("circle"),d=t.append("text").attr("y",a.y-16-n).attr("class","tag-label").text(l),y=(r=d.node())==null?void 0:r.getBBox();if(!y)throw new Error("Tag bbox not found");o=Math.max(o,y.width),c=Math.max(c,y.height),d.attr("x",a.posWithOffset-y.width/2),$.push({tag:d,hole:g,rect:f,yOffset:n}),n+=20}for(const{tag:l,hole:f,rect:g,yOffset:d}of $){const y=c/2,x=a.y-19.2-d;if(g.attr("class","tag-label-bkg").attr("points",`
      ${s-o/2-k/2},${x+L}  
      ${s-o/2-k/2},${x-L}
      ${a.posWithOffset-o/2-k},${x-y-L}
      ${a.posWithOffset+o/2+k},${x-y-L}
      ${a.posWithOffset+o/2+k},${x+y+L}
      ${a.posWithOffset-o/2-k},${x+y+L}`),f.attr("cy",x).attr("cx",s-o/2+k/2).attr("r",1.5).attr("class","tag-hole"),u==="TB"||u==="BT"){const m=s+d;g.attr("class","tag-label-bkg").attr("points",`
        ${a.x},${m+2}
        ${a.x},${m-2}
        ${a.x+R},${m-y-2}
        ${a.x+R+o+4},${m-y-2}
        ${a.x+R+o+4},${m+y+2}
        ${a.x+R},${m+y+2}`).attr("transform","translate(12,12) rotate(45, "+a.x+","+s+")"),f.attr("cx",a.x+k/2).attr("cy",m).attr("transform","translate(12,12) rotate(45, "+a.x+","+s+")"),l.attr("x",a.x+5).attr("y",m+3).attr("transform","translate(14,14) rotate(45, "+a.x+","+s+")")}}}},"drawCommitTags"),Je=h(t=>{switch(t.customType??t.type){case p.NORMAL:return"commit-normal";case p.REVERSE:return"commit-reverse";case p.HIGHLIGHT:return"commit-highlight";case p.MERGE:return"commit-merge";case p.CHERRY_PICK:return"commit-cherry-pick";default:return"commit-normal"}},"getCommitClassType"),Qe=h((t,e,a,s)=>{const r={x:0,y:0};if(t.parents.length>0){const n=Q(t.parents);if(n){const o=s.get(n)??r;return e==="TB"?o.y+I:e==="BT"?(s.get(t.id)??r).y-I:o.x+I}}else return e==="TB"?P:e==="BT"?(s.get(t.id)??r).y-I:0;return 0},"calculatePosition"),Ze=h((t,e,a)=>{var o,c;const s=u==="BT"&&a?e:e+R,r=u==="TB"||u==="BT"?s:(o=v.get(t.branch))==null?void 0:o.pos,n=u==="TB"||u==="BT"?(c=v.get(t.branch))==null?void 0:c.pos:s;if(n===void 0||r===void 0)throw new Error(`Position were undefined for commit ${t.id}`);return{x:n,y:r,posWithOffset:s}},"getCommitPosition"),_=h((t,e,a)=>{if(!b)throw new Error("GitGraph config not found");const s=t.append("g").attr("class","commit-bullets"),r=t.append("g").attr("class","commit-labels");let n=u==="TB"||u==="BT"?P:0;const o=[...e.keys()],c=(b==null?void 0:b.parallelCommits)??!1,$=h((f,g)=>{var x,m;const d=(x=e.get(f))==null?void 0:x.seq,y=(m=e.get(g))==null?void 0:m.seq;return d!==void 0&&y!==void 0?d-y:0},"sortKeys");let l=o.sort($);u==="BT"&&(c&&Ae(l,e,n),l=l.reverse()),l.forEach(f=>{var y;const g=e.get(f);if(!g)throw new Error(`Commit not found for key ${f}`);c&&(n=Qe(g,u,n,E));const d=Ze(g,n,c);if(a){const x=Je(g),m=g.customType??g.type,q=((y=v.get(g.branch))==null?void 0:y.index)??0;Ne(s,g,d,x,q,m),Ve(r,g,d,n),Xe(r,g,d,n)}u==="TB"||u==="BT"?E.set(g.id,{x:d.x,y:d.posWithOffset}):E.set(g.id,{x:d.posWithOffset,y:d.y}),n=u==="BT"&&c?n+I:n+I+R,n>M&&(M=n)})},"drawCommits"),Fe=h((t,e,a,s,r)=>{const o=(u==="TB"||u==="BT"?a.x<s.x:a.y<s.y)?e.branch:t.branch,c=h(l=>l.branch===o,"isOnBranchToGetCurve"),$=h(l=>l.seq>t.seq&&l.seq<e.seq,"isBetweenCommits");return[...r.values()].some(l=>$(l)&&c(l))},"shouldRerouteArrow"),H=h((t,e,a=0)=>{const s=t+Math.abs(t-e)/2;if(a>5)return s;if(W.every(o=>Math.abs(o-s)>=10))return W.push(s),s;const n=Math.abs(t-e);return H(t,e-n/5,a+1)},"findLane"),Ue=h((t,e,a,s)=>{var y,x,m,q,Y;const r=E.get(e.id),n=E.get(a.id);if(r===void 0||n===void 0)throw new Error(`Commit positions not found for commits ${e.id} and ${a.id}`);const o=Fe(e,a,r,n,s);let c="",$="",l=0,f=0,g=(y=v.get(a.branch))==null?void 0:y.index;a.type===p.MERGE&&e.id!==a.parents[0]&&(g=(x=v.get(e.branch))==null?void 0:x.index);let d;if(o){c="A 10 10, 0, 0, 0,",$="A 10 10, 0, 0, 1,",l=10,f=10;const T=r.y<n.y?H(r.y,n.y):H(n.y,r.y),C=r.x<n.x?H(r.x,n.x):H(n.x,r.x);u==="TB"?r.x<n.x?d=`M ${r.x} ${r.y} L ${C-l} ${r.y} ${$} ${C} ${r.y+f} L ${C} ${n.y-l} ${c} ${C+f} ${n.y} L ${n.x} ${n.y}`:(g=(m=v.get(e.branch))==null?void 0:m.index,d=`M ${r.x} ${r.y} L ${C+l} ${r.y} ${c} ${C} ${r.y+f} L ${C} ${n.y-l} ${$} ${C-f} ${n.y} L ${n.x} ${n.y}`):u==="BT"?r.x<n.x?d=`M ${r.x} ${r.y} L ${C-l} ${r.y} ${c} ${C} ${r.y-f} L ${C} ${n.y+l} ${$} ${C+f} ${n.y} L ${n.x} ${n.y}`:(g=(q=v.get(e.branch))==null?void 0:q.index,d=`M ${r.x} ${r.y} L ${C+l} ${r.y} ${$} ${C} ${r.y-f} L ${C} ${n.y+l} ${c} ${C-f} ${n.y} L ${n.x} ${n.y}`):r.y<n.y?d=`M ${r.x} ${r.y} L ${r.x} ${T-l} ${c} ${r.x+f} ${T} L ${n.x-l} ${T} ${$} ${n.x} ${T+f} L ${n.x} ${n.y}`:(g=(Y=v.get(e.branch))==null?void 0:Y.index,d=`M ${r.x} ${r.y} L ${r.x} ${T+l} ${$} ${r.x+f} ${T} L ${n.x-l} ${T} ${c} ${n.x} ${T-f} L ${n.x} ${n.y}`)}else c="A 20 20, 0, 0, 0,",$="A 20 20, 0, 0, 1,",l=20,f=20,u==="TB"?(r.x<n.x&&(a.type===p.MERGE&&e.id!==a.parents[0]?d=`M ${r.x} ${r.y} L ${r.x} ${n.y-l} ${c} ${r.x+f} ${n.y} L ${n.x} ${n.y}`:d=`M ${r.x} ${r.y} L ${n.x-l} ${r.y} ${$} ${n.x} ${r.y+f} L ${n.x} ${n.y}`),r.x>n.x&&(c="A 20 20, 0, 0, 0,",$="A 20 20, 0, 0, 1,",l=20,f=20,a.type===p.MERGE&&e.id!==a.parents[0]?d=`M ${r.x} ${r.y} L ${r.x} ${n.y-l} ${$} ${r.x-f} ${n.y} L ${n.x} ${n.y}`:d=`M ${r.x} ${r.y} L ${n.x+l} ${r.y} ${c} ${n.x} ${r.y+f} L ${n.x} ${n.y}`),r.x===n.x&&(d=`M ${r.x} ${r.y} L ${n.x} ${n.y}`)):u==="BT"?(r.x<n.x&&(a.type===p.MERGE&&e.id!==a.parents[0]?d=`M ${r.x} ${r.y} L ${r.x} ${n.y+l} ${$} ${r.x+f} ${n.y} L ${n.x} ${n.y}`:d=`M ${r.x} ${r.y} L ${n.x-l} ${r.y} ${c} ${n.x} ${r.y-f} L ${n.x} ${n.y}`),r.x>n.x&&(c="A 20 20, 0, 0, 0,",$="A 20 20, 0, 0, 1,",l=20,f=20,a.type===p.MERGE&&e.id!==a.parents[0]?d=`M ${r.x} ${r.y} L ${r.x} ${n.y+l} ${c} ${r.x-f} ${n.y} L ${n.x} ${n.y}`:d=`M ${r.x} ${r.y} L ${n.x-l} ${r.y} ${c} ${n.x} ${r.y-f} L ${n.x} ${n.y}`),r.x===n.x&&(d=`M ${r.x} ${r.y} L ${n.x} ${n.y}`)):(r.y<n.y&&(a.type===p.MERGE&&e.id!==a.parents[0]?d=`M ${r.x} ${r.y} L ${n.x-l} ${r.y} ${$} ${n.x} ${r.y+f} L ${n.x} ${n.y}`:d=`M ${r.x} ${r.y} L ${r.x} ${n.y-l} ${c} ${r.x+f} ${n.y} L ${n.x} ${n.y}`),r.y>n.y&&(a.type===p.MERGE&&e.id!==a.parents[0]?d=`M ${r.x} ${r.y} L ${n.x-l} ${r.y} ${c} ${n.x} ${r.y-f} L ${n.x} ${n.y}`:d=`M ${r.x} ${r.y} L ${r.x} ${n.y+l} ${$} ${r.x+f} ${n.y} L ${n.x} ${n.y}`),r.y===n.y&&(d=`M ${r.x} ${r.y} L ${n.x} ${n.y}`));if(d===void 0)throw new Error("Line definition not found");t.append("path").attr("d",d).attr("class","arrow arrow"+g%O)},"drawArrow"),er=h((t,e)=>{const a=t.append("g").attr("class","commit-arrows");[...e.keys()].forEach(s=>{const r=e.get(s);r.parents&&r.parents.length>0&&r.parents.forEach(n=>{Ue(a,e.get(n),r,e)})})},"drawArrows"),rr=h((t,e)=>{const a=t.append("g");e.forEach((s,r)=>{var x;const n=r%O,o=(x=v.get(s.name))==null?void 0:x.pos;if(o===void 0)throw new Error(`Position not found for branch ${s.name}`);const c=a.append("line");c.attr("x1",0),c.attr("y1",o),c.attr("x2",M),c.attr("y2",o),c.attr("class","branch branch"+n),u==="TB"?(c.attr("y1",P),c.attr("x1",o),c.attr("y2",M),c.attr("x2",o)):u==="BT"&&(c.attr("y1",M),c.attr("x1",o),c.attr("y2",P),c.attr("x2",o)),W.push(o);const $=s.name,l=J($),f=a.insert("rect"),d=a.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+n);d.node().appendChild(l);const y=l.getBBox();f.attr("class","branchLabelBkg label"+n).attr("rx",4).attr("ry",4).attr("x",-y.width-4-((b==null?void 0:b.rotateCommitLabel)===!0?30:0)).attr("y",-y.height/2+8).attr("width",y.width+18).attr("height",y.height+4),d.attr("transform","translate("+(-y.width-14-((b==null?void 0:b.rotateCommitLabel)===!0?30:0))+", "+(o-y.height/2-1)+")"),u==="TB"?(f.attr("x",o-y.width/2-10).attr("y",0),d.attr("transform","translate("+(o-y.width/2-5)+", 0)")):u==="BT"?(f.attr("x",o-y.width/2-10).attr("y",M),d.attr("transform","translate("+(o-y.width/2-5)+", "+M+")")):f.attr("transform","translate(-19, "+(o-y.height/2)+")")})},"drawBranches"),tr=h(function(t,e,a,s,r){return v.set(t,{pos:e,index:a}),e+=50+(r?40:0)+(u==="TB"||u==="BT"?s.width/2:0),e},"setBranchPosition"),ar=h(function(t,e,a,s){if(Se(),w.debug("in gitgraph renderer",t+`
`,"id:",e,a),!b)throw new Error("GitGraph config not found");const r=b.rotateCommitLabel??!1,n=s.db;G=n.getCommits();const o=n.getBranchesAsObjArray();u=n.getDirection();const c=$e(`[id="${e}"]`);let $=0;o.forEach((l,f)=>{var q;const g=J(l.name),d=c.append("g"),y=d.insert("g").attr("class","branchLabel"),x=y.insert("g").attr("class","label branch-label");(q=x.node())==null||q.appendChild(g);const m=g.getBBox();$=tr(l.name,$,f,m,r),x.remove(),y.remove(),d.remove()}),_(c,G,!1),b.showBranches&&rr(c,o),er(c,G),_(c,G,!0),fe.insertTitle(c,"gitTitleText",b.titleTopMargin??0,n.getDiagramTitle()),ge(void 0,c,b.diagramPadding,b.useMaxWidth)},"draw"),nr={draw:ar},sr=h(t=>`
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0,1,2,3,4,5,6,7].map(e=>`
        .branch-label${e} { fill: ${t["gitBranchLabel"+e]}; }
        .commit${e} { stroke: ${t["git"+e]}; fill: ${t["git"+e]}; }
        .commit-highlight${e} { stroke: ${t["gitInv"+e]}; fill: ${t["gitInv"+e]}; }
        .label${e}  { fill: ${t["git"+e]}; }
        .arrow${e} { stroke: ${t["git"+e]}; }
        `).join(`
`)}

  .branch {
    stroke-width: 1;
    stroke: ${t.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelColor};}
  .commit-label-bkg { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${t.tagLabelFontSize}; fill: ${t.tagLabelColor};}
  .tag-label-bkg { fill: ${t.tagLabelBackground}; stroke: ${t.tagLabelBorder}; }
  .tag-hole { fill: ${t.textColor}; }

  .commit-merge {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }
  .commit-reverse {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
`,"getStyles"),cr=sr,ur={parser:We,db:X,renderer:nr,styles:cr};export{ur as diagram};
