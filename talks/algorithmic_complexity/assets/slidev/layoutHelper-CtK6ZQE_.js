function i(e){return e.startsWith("/")?"/talks/algorithmic_complexity"+e.slice(1):e}function s(e,r=!1,o="cover"){const t=e&&(e[0]==="#"||e.startsWith("rgb")),n={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?r?`linear-gradient(#0005, #0008), url(${i(e)})`:`url("${i(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:o};return n.background||delete n.background,n}export{s as h};
