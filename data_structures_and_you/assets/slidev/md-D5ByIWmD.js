import{d as S,t as U,B as b,D as I,z as E,C as T,o as M,b as z,f as G,c as w,k as o,e as s,l as n,m as y,q as Y,s as J,G as j}from"../modules/vue-NONPKcAw.js";import{m as W,C as O,a as H,q as x,r as F}from"../index-BKRycsZf.js";import{u as Q,f as N}from"./context-B_L1OuDA.js";import{_ as K,a as R}from"./VClick-HlSdTR-I.js";import{I as L}from"./default-Yh6HJKNB.js";import"../modules/shiki-4O1MQmo4.js";import"../modules/file-saver-C8BEGaqa.js";import"./VClicks-CUDMxNRj.js";const v=S({__name:"KaTexBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},at:{type:[String,Number],default:"+1"}},setup(D){const a=D,{$clicksContext:t}=Q(),e=U(),d=W();return b(()=>{t.unregister(d)}),I(()=>{var C;if(!t||!((C=a.ranges)!=null&&C.length))return;const r=t.calculateSince(a.at,a.ranges.length-1);t.register(d,r);const u=E(()=>r?Math.max(0,t.current-r.start+1):O),h=E(()=>a.finally==="last"?a.ranges.at(-1):a.finally.toString());T(()=>{if(!e.value)return;let l=a.ranges[u.value]??h.value;const i=l==="hide";e.value.classList.toggle(H,i),i&&(l=a.ranges[u.value+1]??h.value);const m=e.value.querySelectorAll(".mtable > [class*=col-align]");if(!m)return;const k=Array.from(m).map(A=>Array.from(A.querySelectorAll(":scope > .vlist-t > .vlist-r > .vlist > span > .mord"))),p=[];for(const A of k)A.forEach((g,c)=>{g&&(Array.isArray(p[c])?p[c].push(g):p[c]=[g])});const f=a.startLine,V=x(p.length+f-1,l);p.forEach((A,g)=>{const c=V.includes(g+f);A.forEach(B=>{B.classList.toggle(F,!0),B.classList.toggle("highlighted",c),B.classList.toggle("dishonored",!c)})})})}),(r,u)=>(M(),z("div",{ref_key:"el",ref:e,class:"slidev-katex-wrapper"},[G(r.$slots,"default")],512))}}),ls={__name:"data_structures_and_you.md__slidev_7",setup(D){const{$slidev:a,$nav:t,$clicksContext:e,$clicks:d,$page:r,$renderContext:u,$frontmatter:h}=Q();return e.setup(),(C,l)=>{const i=K,m=R,k=v;return M(),w(L,Y(J(j(N)(j(h),6))),{default:o(()=>[l[1]||(l[1]=s("h1",null,"Multidimensional Arrays",-1)),l[2]||(l[2]=s("p",null,"Arrays all the way down.",-1)),n(m,null,{default:o(()=>[n(i,y({},{"steps-lz":"NobwRAxg9gJgpmAXGALgTwA5wAQDsCGAtnMAM4CWAXnALplW33U1gA0YAFvqR0mANYBXNP0oAmABoAZQQHU2qKPzi5SSUJCi4UKlH3RYFUAGbHScPYgAM7DikIAbAMroHCROAC0nnuX7lPGHwAJ34+AGIAEQAhSIB2AGEAQQBRFIVvX39PB3IAczsIgGYATiKkooAWMABfdmU0PiERcWk5Tyta1nBobV0+bCNTc0tK+rhG5GbRSRlZTwBGLp6tHW0+AmIhswskAFZbe2dXdy8fDj8AoNCI2JK4gDYkjPPLnPzC5HDoqzjIyoAHF0BBMmsIZm15mJlpo+utkMBtiMkCVDo4XGg3EgzlkriEwl8HkTiS9ce8CpYwOESjTacCGmCWrN2kUYb01pSKNQkbtEAsbJwjhisR4wJkLtlrgSqTF4sk0qSJQFchTimUKtU6iDJgJwa05p5Nd1YRy+HQeZYFmNBeiTtixa9JfiIsSSexxW8VZ8qbS6VqGVM9cz5ns2at+sguQh2CYdpaHmjjpjTg6yVKIrLEql0u7HcqPpTwqVylV6aDA0zIZ4HmG4ZTzTHhryxAK7Lbk/aPU6boTXTXc2SvYXfTSyzrpvr2nFa6bIwwLUgxGJE8KU128T2ZbEswqB0ryd6i+rS/7y7rKwagXUVnWzQvEGIEzakyKcfv073XYrPQWIiOSmOjIQgaAHXiaEZgAAOrg95iHE4zjkGVb8rUNDsLkuBwAAcoIhAAEZwMEaiIMY+AOOY7B4XkfDroE+KeFRiDhAsYgsSxADctFDgxeRMaY/HGAoxjUcgtFSkxMB4TAcQQPgcBwJxeYHigTHFvgpbsMEUBQCgq40Up4nhJJ0myfJimDgWqllOplTme+9GMcxrHOXZP4UjxfECYJ7AoBwcDEFhRDuGAZK+f5cCkNgABu5A6KQ5h0aE0WxRFCVDgoDj4LgImQBgGBhvAfDkNo2CEPgKDBOQAAewBFHQYgsLY3C8MgcAANKCEkYhJBIAASexVQoKBKCoxEaOyEHFXojZxkgrZCnaopic6XwJNEjyPN+2TpV8STRHsJQHYBrUdV1PX9VVHQzhBgwzciiBFCui1vm8H5bnK2ZbfmqpfMWGrHWA7Wdd1fUDYs13wmAZUVdV97Wm2L5rgZK1UncjzPHubmHj8fyAgDQNnaDl3QmBE2Q4id28vyT0dktyObuEfb9qm+47T6I746dIMXZ4rKk+GkOspTloLDTr4s69KPhJUCQlEkJRLJj22/l8YgAGJxCUALPKeOoE9zYNGjes5gA2YCxvdLFi0jaZS0zX3KX+HO63w+vnWDob87eyDQsLSBWtbnb09K0uy/LisS8rP1Uurmva5zwPu5dNZeybjXm02loHM+el07bDP20r32Hv+CeEzz06pxB0H3gsT4BoDXNJ54V5oWAGHYbhBFEUgpHkXAlE5ctoQeU5bFiK5Ud2KPXneWAwn6fn/ASVJMlyQpXGWUeRQ2QoWk6bnkcbsvRmr6ZG9KUOVk71Uk/H6P48cZv7mObPQ1+QFQV8KFH8RclcUJSlP/VKcBHboSyjlCAeVUJAA==","step-ranges":[[],[]]}),null,16)]),_:1}),n(m,null,{default:o(()=>[n(i,y({},{"steps-lz":"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","step-ranges":[[],[]]}),null,16)]),_:1}),n(m,null,{default:o(()=>[n(i,y({},{"steps-lz":"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","step-ranges":[[],[]]}),null,16)]),_:1}),n(m,null,{default:o(()=>[n(k,y({},{ranges:["1","2-3"]}),{default:o(()=>l[0]||(l[0]=[s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mtable",{rowspacing:"0.25em",columnalign:"right",columnspacing:""},[s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mi",null,"A"),s("mi",null,"d"),s("mi",null,"d"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"s"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]"),s("mo",{stretchy:"false"},"["),s("mi",null,"j"),s("mo",{stretchy:"false"},"]"),s("mo",null,"="),s("mi",null,"B"),s("mi",null,"a"),s("mi",null,"s"),s("mi",null,"e"),s("mi",null,"A"),s("mi",null,"d"),s("mi",null,"d"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"s"),s("mo",{stretchy:"false"},"("),s("mi",null,"B"),s("mi",null,"A"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mi",null,"ω"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mo",{stretchy:"false"},"("),s("mi",null,"j"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mi",null,"A"),s("mi",null,"d"),s("mi",null,"d"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"s"),s("mo",{stretchy:"false"},"["),s("mn",null,"0"),s("mo",{stretchy:"false"},"]"),s("mo",{stretchy:"false"},"["),s("mn",null,"3"),s("mo",{stretchy:"false"},"]"),s("mo",null,"="),s("mi",null,"ω"),s("mo",{stretchy:"false"},"("),s("mn",null,"3"),s("mo",{stretchy:"false"},"("),s("mn",null,"0"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mo",{stretchy:"false"},"("),s("mn",null,"3"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mi",null,"A"),s("mi",null,"d"),s("mi",null,"d"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"s"),s("mo",{stretchy:"false"},"["),s("mn",null,"1"),s("mo",{stretchy:"false"},"]"),s("mo",{stretchy:"false"},"["),s("mn",null,"1"),s("mo",{stretchy:"false"},"]"),s("mo",null,"="),s("mi",null,"ω"),s("mo",{stretchy:"false"},"("),s("mn",null,"3"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")])])])])]),s("annotation",{encoding:"application/x-tex"},"\\begin{aligned} Address[i][j] = Base Address(BA) +\\omega(n(i-1)+(j-1)) \\\\ Address[0][3] = \\omega(3(0-1)+(3-1)) \\\\ Address[1][1] = \\omega(3(1-1)+(1-1)) \\end{aligned} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"4.5em","vertical-align":"-2em"}}),s("span",{class:"mord"},[s("span",{class:"mtable"},[s("span",{class:"col-align-r"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.5em"}},[s("span",{style:{top:"-4.66em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"A"),s("span",{class:"mord mathnormal"},"dd"),s("span",{class:"mord mathnormal"},"ress"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mclose"},"]"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"B"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal"},"se"),s("span",{class:"mord mathnormal"},"A"),s("span",{class:"mord mathnormal"},"dd"),s("span",{class:"mord mathnormal"},"ress"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"B"),s("span",{class:"mord mathnormal"},"A"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},"))")])]),s("span",{style:{top:"-3.16em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"A"),s("span",{class:"mord mathnormal"},"dd"),s("span",{class:"mord mathnormal"},"ress"),s("span",{class:"mopen"},"["),s("span",{class:"mord"},"0"),s("span",{class:"mclose"},"]"),s("span",{class:"mopen"},"["),s("span",{class:"mord"},"3"),s("span",{class:"mclose"},"]"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"3"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"0"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"3"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},"))")])]),s("span",{style:{top:"-1.66em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"A"),s("span",{class:"mord mathnormal"},"dd"),s("span",{class:"mord mathnormal"},"ress"),s("span",{class:"mopen"},"["),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},"]"),s("span",{class:"mopen"},"["),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},"]"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"3"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},"))")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2em"}},[s("span")])])])])])])])])])])],-1)])),_:1},16)]),_:1})]),_:1},16)}}};export{ls as default};
