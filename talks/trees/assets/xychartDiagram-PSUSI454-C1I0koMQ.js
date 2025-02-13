import{_ as a,a_ as ui,a$ as Mt,l as Ft,R as Bt,D as Wt,aZ as gi,I as bt,H as Xt,G as xi,j as pi,q as Nt,s as di,g as fi,p as yi,c as mi,d as bi,x as Ai,aT as Ci,m as wi}from"./Mermaid.vue_vue_type_script_setup_true_lang-CQN01j9m.js";import"./modules/vue-D4kSXDOz.js";import"./index-Q8FuNTTW.js";import"./modules/shiki-CQ9Joarf.js";import"./modules/file-saver-C8BEGaqa.js";var dt=function(){var s=a(function(B,h,c,u){for(c=c||{},u=B.length;u--;c[B[u]]=h);return c},"o"),t=[1,10,12,14,16,18,19,21,23],i=[2,6],e=[1,3],n=[1,5],r=[1,6],x=[1,7],y=[1,5,10,12,14,16,18,19,21,23,34,35,36],m=[1,25],R=[1,26],_=[1,28],D=[1,29],I=[1,30],V=[1,31],k=[1,32],E=[1,33],f=[1,34],w=[1,35],l=[1,36],P=[1,37],K=[1,43],Dt=[1,42],Pt=[1,47],et=[1,50],A=[1,10,12,14,16,18,19,21,23,34,35,36],lt=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36],v=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36,41,42,43,44,45,46,47,48,49,50],vt=[1,64],ct={trace:a(function(){},"trace"),yy:{},symbols_:{error:2,start:3,eol:4,XYCHART:5,chartConfig:6,document:7,CHART_ORIENTATION:8,statement:9,title:10,text:11,X_AXIS:12,parseXAxis:13,Y_AXIS:14,parseYAxis:15,LINE:16,plotData:17,BAR:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,SQUARE_BRACES_START:24,commaSeparatedNumbers:25,SQUARE_BRACES_END:26,NUMBER_WITH_DECIMAL:27,COMMA:28,xAxisData:29,bandData:30,ARROW_DELIMITER:31,commaSeparatedTexts:32,yAxisData:33,NEWLINE:34,SEMI:35,EOF:36,alphaNum:37,STR:38,MD_STR:39,alphaNumToken:40,AMP:41,NUM:42,ALPHA:43,PLUS:44,EQUALS:45,MULT:46,DOT:47,BRKT:48,MINUS:49,UNDERSCORE:50,$accept:0,$end:1},terminals_:{2:"error",5:"XYCHART",8:"CHART_ORIENTATION",10:"title",12:"X_AXIS",14:"Y_AXIS",16:"LINE",18:"BAR",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"SQUARE_BRACES_START",26:"SQUARE_BRACES_END",27:"NUMBER_WITH_DECIMAL",28:"COMMA",31:"ARROW_DELIMITER",34:"NEWLINE",35:"SEMI",36:"EOF",38:"STR",39:"MD_STR",41:"AMP",42:"NUM",43:"ALPHA",44:"PLUS",45:"EQUALS",46:"MULT",47:"DOT",48:"BRKT",49:"MINUS",50:"UNDERSCORE"},productions_:[0,[3,2],[3,3],[3,2],[3,1],[6,1],[7,0],[7,2],[9,2],[9,2],[9,2],[9,2],[9,2],[9,3],[9,2],[9,3],[9,2],[9,2],[9,1],[17,3],[25,3],[25,1],[13,1],[13,2],[13,1],[29,1],[29,3],[30,3],[32,3],[32,1],[15,1],[15,2],[15,1],[33,3],[4,1],[4,1],[4,1],[11,1],[11,1],[11,1],[37,1],[37,2],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1]],performAction:a(function(h,c,u,g,b,o,Z){var p=o.length-1;switch(b){case 5:g.setOrientation(o[p]);break;case 9:g.setDiagramTitle(o[p].text.trim());break;case 12:g.setLineData({text:"",type:"text"},o[p]);break;case 13:g.setLineData(o[p-1],o[p]);break;case 14:g.setBarData({text:"",type:"text"},o[p]);break;case 15:g.setBarData(o[p-1],o[p]);break;case 16:this.$=o[p].trim(),g.setAccTitle(this.$);break;case 17:case 18:this.$=o[p].trim(),g.setAccDescription(this.$);break;case 19:this.$=o[p-1];break;case 20:this.$=[Number(o[p-2]),...o[p]];break;case 21:this.$=[Number(o[p])];break;case 22:g.setXAxisTitle(o[p]);break;case 23:g.setXAxisTitle(o[p-1]);break;case 24:g.setXAxisTitle({type:"text",text:""});break;case 25:g.setXAxisBand(o[p]);break;case 26:g.setXAxisRangeData(Number(o[p-2]),Number(o[p]));break;case 27:this.$=o[p-1];break;case 28:this.$=[o[p-2],...o[p]];break;case 29:this.$=[o[p]];break;case 30:g.setYAxisTitle(o[p]);break;case 31:g.setYAxisTitle(o[p-1]);break;case 32:g.setYAxisTitle({type:"text",text:""});break;case 33:g.setYAxisRangeData(Number(o[p-2]),Number(o[p]));break;case 37:this.$={text:o[p],type:"text"};break;case 38:this.$={text:o[p],type:"text"};break;case 39:this.$={text:o[p],type:"markdown"};break;case 40:this.$=o[p];break;case 41:this.$=o[p-1]+""+o[p];break}},"anonymous"),table:[s(t,i,{3:1,4:2,7:4,5:e,34:n,35:r,36:x}),{1:[3]},s(t,i,{4:2,7:4,3:8,5:e,34:n,35:r,36:x}),s(t,i,{4:2,7:4,6:9,3:10,5:e,8:[1,11],34:n,35:r,36:x}),{1:[2,4],9:12,10:[1,13],12:[1,14],14:[1,15],16:[1,16],18:[1,17],19:[1,18],21:[1,19],23:[1,20]},s(y,[2,34]),s(y,[2,35]),s(y,[2,36]),{1:[2,1]},s(t,i,{4:2,7:4,3:21,5:e,34:n,35:r,36:x}),{1:[2,3]},s(y,[2,5]),s(t,[2,7],{4:22,34:n,35:r,36:x}),{11:23,37:24,38:m,39:R,40:27,41:_,42:D,43:I,44:V,45:k,46:E,47:f,48:w,49:l,50:P},{11:39,13:38,24:K,27:Dt,29:40,30:41,37:24,38:m,39:R,40:27,41:_,42:D,43:I,44:V,45:k,46:E,47:f,48:w,49:l,50:P},{11:45,15:44,27:Pt,33:46,37:24,38:m,39:R,40:27,41:_,42:D,43:I,44:V,45:k,46:E,47:f,48:w,49:l,50:P},{11:49,17:48,24:et,37:24,38:m,39:R,40:27,41:_,42:D,43:I,44:V,45:k,46:E,47:f,48:w,49:l,50:P},{11:52,17:51,24:et,37:24,38:m,39:R,40:27,41:_,42:D,43:I,44:V,45:k,46:E,47:f,48:w,49:l,50:P},{20:[1,53]},{22:[1,54]},s(A,[2,18]),{1:[2,2]},s(A,[2,8]),s(A,[2,9]),s(lt,[2,37],{40:55,41:_,42:D,43:I,44:V,45:k,46:E,47:f,48:w,49:l,50:P}),s(lt,[2,38]),s(lt,[2,39]),s(v,[2,40]),s(v,[2,42]),s(v,[2,43]),s(v,[2,44]),s(v,[2,45]),s(v,[2,46]),s(v,[2,47]),s(v,[2,48]),s(v,[2,49]),s(v,[2,50]),s(v,[2,51]),s(A,[2,10]),s(A,[2,22],{30:41,29:56,24:K,27:Dt}),s(A,[2,24]),s(A,[2,25]),{31:[1,57]},{11:59,32:58,37:24,38:m,39:R,40:27,41:_,42:D,43:I,44:V,45:k,46:E,47:f,48:w,49:l,50:P},s(A,[2,11]),s(A,[2,30],{33:60,27:Pt}),s(A,[2,32]),{31:[1,61]},s(A,[2,12]),{17:62,24:et},{25:63,27:vt},s(A,[2,14]),{17:65,24:et},s(A,[2,16]),s(A,[2,17]),s(v,[2,41]),s(A,[2,23]),{27:[1,66]},{26:[1,67]},{26:[2,29],28:[1,68]},s(A,[2,31]),{27:[1,69]},s(A,[2,13]),{26:[1,70]},{26:[2,21],28:[1,71]},s(A,[2,15]),s(A,[2,26]),s(A,[2,27]),{11:59,32:72,37:24,38:m,39:R,40:27,41:_,42:D,43:I,44:V,45:k,46:E,47:f,48:w,49:l,50:P},s(A,[2,33]),s(A,[2,19]),{25:73,27:vt},{26:[2,28]},{26:[2,20]}],defaultActions:{8:[2,1],10:[2,3],21:[2,2],72:[2,28],73:[2,20]},parseError:a(function(h,c){if(c.recoverable)this.trace(h);else{var u=new Error(h);throw u.hash=c,u}},"parseError"),parse:a(function(h){var c=this,u=[0],g=[],b=[null],o=[],Z=this.table,p="",nt=0,Lt=0,hi=2,Et=1,ri=o.slice.call(arguments,1),C=Object.create(this.lexer),W={yy:{}};for(var ut in this.yy)Object.prototype.hasOwnProperty.call(this.yy,ut)&&(W.yy[ut]=this.yy[ut]);C.setInput(h,W.yy),W.yy.lexer=C,W.yy.parser=this,typeof C.yylloc>"u"&&(C.yylloc={});var gt=C.yylloc;o.push(gt);var li=C.options&&C.options.ranges;typeof W.yy.parseError=="function"?this.parseError=W.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ci(T){u.length=u.length-2*T,b.length=b.length-T,o.length=o.length-T}a(ci,"popStack");function It(){var T;return T=g.pop()||C.lex()||Et,typeof T!="number"&&(T instanceof Array&&(g=T,T=g.pop()),T=c.symbols_[T]||T),T}a(It,"lex");for(var S,O,L,xt,z={},at,M,Vt,ot;;){if(O=u[u.length-1],this.defaultActions[O]?L=this.defaultActions[O]:((S===null||typeof S>"u")&&(S=It()),L=Z[O]&&Z[O][S]),typeof L>"u"||!L.length||!L[0]){var pt="";ot=[];for(at in Z[O])this.terminals_[at]&&at>hi&&ot.push("'"+this.terminals_[at]+"'");C.showPosition?pt="Parse error on line "+(nt+1)+`:
`+C.showPosition()+`
Expecting `+ot.join(", ")+", got '"+(this.terminals_[S]||S)+"'":pt="Parse error on line "+(nt+1)+": Unexpected "+(S==Et?"end of input":"'"+(this.terminals_[S]||S)+"'"),this.parseError(pt,{text:C.match,token:this.terminals_[S]||S,line:C.yylineno,loc:gt,expected:ot})}if(L[0]instanceof Array&&L.length>1)throw new Error("Parse Error: multiple actions possible at state: "+O+", token: "+S);switch(L[0]){case 1:u.push(S),b.push(C.yytext),o.push(C.yylloc),u.push(L[1]),S=null,Lt=C.yyleng,p=C.yytext,nt=C.yylineno,gt=C.yylloc;break;case 2:if(M=this.productions_[L[1]][1],z.$=b[b.length-M],z._$={first_line:o[o.length-(M||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(M||1)].first_column,last_column:o[o.length-1].last_column},li&&(z._$.range=[o[o.length-(M||1)].range[0],o[o.length-1].range[1]]),xt=this.performAction.apply(z,[p,Lt,nt,W.yy,L[1],b,o].concat(ri)),typeof xt<"u")return xt;M&&(u=u.slice(0,-1*M*2),b=b.slice(0,-1*M),o=o.slice(0,-1*M)),u.push(this.productions_[L[1]][0]),b.push(z.$),o.push(z._$),Vt=Z[u[u.length-2]][u[u.length-1]],u.push(Vt);break;case 3:return!0}}return!0},"parse")},oi=function(){var B={EOF:1,parseError:a(function(c,u){if(this.yy.parser)this.yy.parser.parseError(c,u);else throw new Error(c)},"parseError"),setInput:a(function(h,c){return this.yy=c||this.yy||{},this._input=h,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:a(function(){var h=this._input[0];this.yytext+=h,this.yyleng++,this.offset++,this.match+=h,this.matched+=h;var c=h.match(/(?:\r\n?|\n).*/g);return c?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),h},"input"),unput:a(function(h){var c=h.length,u=h.split(/(?:\r\n?|\n)/g);this._input=h+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-c),this.offset-=c;var g=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),u.length-1&&(this.yylineno-=u.length-1);var b=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:u?(u.length===g.length?this.yylloc.first_column:0)+g[g.length-u.length].length-u[0].length:this.yylloc.first_column-c},this.options.ranges&&(this.yylloc.range=[b[0],b[0]+this.yyleng-c]),this.yyleng=this.yytext.length,this},"unput"),more:a(function(){return this._more=!0,this},"more"),reject:a(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:a(function(h){this.unput(this.match.slice(h))},"less"),pastInput:a(function(){var h=this.matched.substr(0,this.matched.length-this.match.length);return(h.length>20?"...":"")+h.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:a(function(){var h=this.match;return h.length<20&&(h+=this._input.substr(0,20-h.length)),(h.substr(0,20)+(h.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:a(function(){var h=this.pastInput(),c=new Array(h.length+1).join("-");return h+this.upcomingInput()+`
`+c+"^"},"showPosition"),test_match:a(function(h,c){var u,g,b;if(this.options.backtrack_lexer&&(b={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(b.yylloc.range=this.yylloc.range.slice(0))),g=h[0].match(/(?:\r\n?|\n).*/g),g&&(this.yylineno+=g.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:g?g[g.length-1].length-g[g.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+h[0].length},this.yytext+=h[0],this.match+=h[0],this.matches=h,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(h[0].length),this.matched+=h[0],u=this.performAction.call(this,this.yy,this,c,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),u)return u;if(this._backtrack){for(var o in b)this[o]=b[o];return!1}return!1},"test_match"),next:a(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var h,c,u,g;this._more||(this.yytext="",this.match="");for(var b=this._currentRules(),o=0;o<b.length;o++)if(u=this._input.match(this.rules[b[o]]),u&&(!c||u[0].length>c[0].length)){if(c=u,g=o,this.options.backtrack_lexer){if(h=this.test_match(u,b[o]),h!==!1)return h;if(this._backtrack){c=!1;continue}else return!1}else if(!this.options.flex)break}return c?(h=this.test_match(c,b[g]),h!==!1?h:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:a(function(){var c=this.next();return c||this.lex()},"lex"),begin:a(function(c){this.conditionStack.push(c)},"begin"),popState:a(function(){var c=this.conditionStack.length-1;return c>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:a(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:a(function(c){return c=this.conditionStack.length-1-Math.abs(c||0),c>=0?this.conditionStack[c]:"INITIAL"},"topState"),pushState:a(function(c){this.begin(c)},"pushState"),stateStackSize:a(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:a(function(c,u,g,b){switch(g){case 0:break;case 1:break;case 2:return this.popState(),34;case 3:return this.popState(),34;case 4:return 34;case 5:break;case 6:return 10;case 7:return this.pushState("acc_title"),19;case 8:return this.popState(),"acc_title_value";case 9:return this.pushState("acc_descr"),21;case 10:return this.popState(),"acc_descr_value";case 11:this.pushState("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 5;case 15:return 8;case 16:return this.pushState("axis_data"),"X_AXIS";case 17:return this.pushState("axis_data"),"Y_AXIS";case 18:return this.pushState("axis_band_data"),24;case 19:return 31;case 20:return this.pushState("data"),16;case 21:return this.pushState("data"),18;case 22:return this.pushState("data_inner"),24;case 23:return 27;case 24:return this.popState(),26;case 25:this.popState();break;case 26:this.pushState("string");break;case 27:this.popState();break;case 28:return"STR";case 29:return 24;case 30:return 26;case 31:return 43;case 32:return"COLON";case 33:return 44;case 34:return 28;case 35:return 45;case 36:return 46;case 37:return 48;case 38:return 50;case 39:return 47;case 40:return 41;case 41:return 49;case 42:return 42;case 43:break;case 44:return 35;case 45:return 36}},"anonymous"),rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:(\r?\n))/i,/^(?:(\r?\n))/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:\{)/i,/^(?:[^\}]*)/i,/^(?:xychart-beta\b)/i,/^(?:(?:vertical|horizontal))/i,/^(?:x-axis\b)/i,/^(?:y-axis\b)/i,/^(?:\[)/i,/^(?:-->)/i,/^(?:line\b)/i,/^(?:bar\b)/i,/^(?:\[)/i,/^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i,/^(?:\])/i,/^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s+)/i,/^(?:;)/i,/^(?:$)/i],conditions:{data_inner:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,23,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},data:{rules:[0,1,3,4,5,6,7,9,11,14,15,16,17,20,21,22,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_band_data:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_data:{rules:[0,1,2,4,5,6,7,9,11,14,15,16,17,18,19,20,21,23,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},title:{rules:[],inclusive:!1},md_string:{rules:[],inclusive:!1},string:{rules:[27,28],inclusive:!1},INITIAL:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0}}};return B}();ct.lexer=oi;function st(){this.yy={}}return a(st,"Parser"),st.prototype=ct,ct.Parser=st,new st}();dt.parser=dt;var Si=dt;function ft(s){return s.type==="bar"}a(ft,"isBarPlot");function At(s){return s.type==="band"}a(At,"isBandAxisData");function F(s){return s.type==="linear"}a(F,"isLinearAxisData");var X,Yt=(X=class{constructor(t){this.parentGroup=t}getMaxDimension(t,i){if(!this.parentGroup)return{width:t.reduce((r,x)=>Math.max(x.length,r),0)*i,height:i};const e={width:0,height:0},n=this.parentGroup.append("g").attr("visibility","hidden").attr("font-size",i);for(const r of t){const x=ui(n,1,r),y=x?x.width:r.length*i,m=x?x.height:i;e.width=Math.max(e.width,y),e.height=Math.max(e.height,m)}return n.remove(),e}},a(X,"TextDimensionCalculatorWithFont"),X),Ot=.7,zt=.2,N,Ht=(N=class{constructor(t,i,e,n){this.axisConfig=t,this.title=i,this.textDimensionCalculator=e,this.axisThemeConfig=n,this.boundingRect={x:0,y:0,width:0,height:0},this.axisPosition="left",this.showTitle=!1,this.showLabel=!1,this.showTick=!1,this.showAxisLine=!1,this.outerPadding=0,this.titleTextHeight=0,this.labelTextHeight=0,this.range=[0,10],this.boundingRect={x:0,y:0,width:0,height:0},this.axisPosition="left"}setRange(t){this.range=t,this.axisPosition==="left"||this.axisPosition==="right"?this.boundingRect.height=t[1]-t[0]:this.boundingRect.width=t[1]-t[0],this.recalculateScale()}getRange(){return[this.range[0]+this.outerPadding,this.range[1]-this.outerPadding]}setAxisPosition(t){this.axisPosition=t,this.setRange(this.range)}getTickDistance(){const t=this.getRange();return Math.abs(t[0]-t[1])/this.getTickValues().length}getAxisOuterPadding(){return this.outerPadding}getLabelDimension(){return this.textDimensionCalculator.getMaxDimension(this.getTickValues().map(t=>t.toString()),this.axisConfig.labelFontSize)}recalculateOuterPaddingToDrawBar(){Ot*this.getTickDistance()>this.outerPadding*2&&(this.outerPadding=Math.floor(Ot*this.getTickDistance()/2)),this.recalculateScale()}calculateSpaceIfDrawnHorizontally(t){let i=t.height;if(this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth&&(i-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){const e=this.getLabelDimension(),n=zt*t.width;this.outerPadding=Math.min(e.width/2,n);const r=e.height+this.axisConfig.labelPadding*2;this.labelTextHeight=e.height,r<=i&&(i-=r,this.showLabel=!0)}if(this.axisConfig.showTick&&i>=this.axisConfig.tickLength&&(this.showTick=!0,i-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){const e=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),n=e.height+this.axisConfig.titlePadding*2;this.titleTextHeight=e.height,n<=i&&(i-=n,this.showTitle=!0)}this.boundingRect.width=t.width,this.boundingRect.height=t.height-i}calculateSpaceIfDrawnVertical(t){let i=t.width;if(this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth&&(i-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){const e=this.getLabelDimension(),n=zt*t.height;this.outerPadding=Math.min(e.height/2,n);const r=e.width+this.axisConfig.labelPadding*2;r<=i&&(i-=r,this.showLabel=!0)}if(this.axisConfig.showTick&&i>=this.axisConfig.tickLength&&(this.showTick=!0,i-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){const e=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),n=e.height+this.axisConfig.titlePadding*2;this.titleTextHeight=e.height,n<=i&&(i-=n,this.showTitle=!0)}this.boundingRect.width=t.width-i,this.boundingRect.height=t.height}calculateSpace(t){return this.axisPosition==="left"||this.axisPosition==="right"?this.calculateSpaceIfDrawnVertical(t):this.calculateSpaceIfDrawnHorizontally(t),this.recalculateScale(),{width:this.boundingRect.width,height:this.boundingRect.height}}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}getDrawableElementsForLeftAxis(){const t=[];if(this.showAxisLine){const i=this.boundingRect.x+this.boundingRect.width-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["left-axis","axisl-line"],data:[{path:`M ${i},${this.boundingRect.y} L ${i},${this.boundingRect.y+this.boundingRect.height} `,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["left-axis","label"],data:this.getTickValues().map(i=>({text:i.toString(),x:this.boundingRect.x+this.boundingRect.width-(this.showLabel?this.axisConfig.labelPadding:0)-(this.showTick?this.axisConfig.tickLength:0)-(this.showAxisLine?this.axisConfig.axisLineWidth:0),y:this.getScaleValue(i),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"middle",horizontalPos:"right"}))}),this.showTick){const i=this.boundingRect.x+this.boundingRect.width-(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["left-axis","ticks"],data:this.getTickValues().map(e=>({path:`M ${i},${this.getScaleValue(e)} L ${i-this.axisConfig.tickLength},${this.getScaleValue(e)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["left-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.axisConfig.titlePadding,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:270,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForBottomAxis(){const t=[];if(this.showAxisLine){const i=this.boundingRect.y+this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["bottom-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["bottom-axis","label"],data:this.getTickValues().map(i=>({text:i.toString(),x:this.getScaleValue(i),y:this.boundingRect.y+this.axisConfig.labelPadding+(this.showTick?this.axisConfig.tickLength:0)+(this.showAxisLine?this.axisConfig.axisLineWidth:0),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}))}),this.showTick){const i=this.boundingRect.y+(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["bottom-axis","ticks"],data:this.getTickValues().map(e=>({path:`M ${this.getScaleValue(e)},${i} L ${this.getScaleValue(e)},${i+this.axisConfig.tickLength}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["bottom-axis","title"],data:[{text:this.title,x:this.range[0]+(this.range[1]-this.range[0])/2,y:this.boundingRect.y+this.boundingRect.height-this.axisConfig.titlePadding-this.titleTextHeight,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForTopAxis(){const t=[];if(this.showAxisLine){const i=this.boundingRect.y+this.boundingRect.height-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["top-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["top-axis","label"],data:this.getTickValues().map(i=>({text:i.toString(),x:this.getScaleValue(i),y:this.boundingRect.y+(this.showTitle?this.titleTextHeight+this.axisConfig.titlePadding*2:0)+this.axisConfig.labelPadding,fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}))}),this.showTick){const i=this.boundingRect.y;t.push({type:"path",groupTexts:["top-axis","ticks"],data:this.getTickValues().map(e=>({path:`M ${this.getScaleValue(e)},${i+this.boundingRect.height-(this.showAxisLine?this.axisConfig.axisLineWidth:0)} L ${this.getScaleValue(e)},${i+this.boundingRect.height-this.axisConfig.tickLength-(this.showAxisLine?this.axisConfig.axisLineWidth:0)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["top-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.axisConfig.titlePadding,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElements(){if(this.axisPosition==="left")return this.getDrawableElementsForLeftAxis();if(this.axisPosition==="right")throw Error("Drawing of right axis is not implemented");return this.axisPosition==="bottom"?this.getDrawableElementsForBottomAxis():this.axisPosition==="top"?this.getDrawableElementsForTopAxis():[]}},a(N,"BaseAxis"),N),Y,_i=(Y=class extends Ht{constructor(t,i,e,n,r){super(t,n,r,i),this.categories=e,this.scale=Mt().domain(this.categories).range(this.getRange())}setRange(t){super.setRange(t)}recalculateScale(){this.scale=Mt().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(.5),Ft.trace("BandAxis axis final categories, range: ",this.categories,this.getRange())}getTickValues(){return this.categories}getScaleValue(t){return this.scale(t)??this.getRange()[0]}},a(Y,"BandAxis"),Y),H,ki=(H=class extends Ht{constructor(t,i,e,n,r){super(t,n,r,i),this.domain=e,this.scale=Bt().domain(this.domain).range(this.getRange())}getTickValues(){return this.scale.ticks()}recalculateScale(){const t=[...this.domain];this.axisPosition==="left"&&t.reverse(),this.scale=Bt().domain(t).range(this.getRange())}getScaleValue(t){return this.scale(t)}},a(H,"LinearAxis"),H);function yt(s,t,i,e){const n=new Yt(e);return At(s)?new _i(t,i,s.categories,s.title,n):new ki(t,i,[s.min,s.max],s.title,n)}a(yt,"getAxis");var U,Ti=(U=class{constructor(t,i,e,n){this.textDimensionCalculator=t,this.chartConfig=i,this.chartData=e,this.chartThemeConfig=n,this.boundingRect={x:0,y:0,width:0,height:0},this.showChartTitle=!1}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){const i=this.textDimensionCalculator.getMaxDimension([this.chartData.title],this.chartConfig.titleFontSize),e=Math.max(i.width,t.width),n=i.height+2*this.chartConfig.titlePadding;return i.width<=e&&i.height<=n&&this.chartConfig.showTitle&&this.chartData.title&&(this.boundingRect.width=e,this.boundingRect.height=n,this.showChartTitle=!0),{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){const t=[];return this.showChartTitle&&t.push({groupTexts:["chart-title"],type:"text",data:[{fontSize:this.chartConfig.titleFontSize,text:this.chartData.title,verticalPos:"middle",horizontalPos:"center",x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.chartThemeConfig.titleColor,rotation:0}]}),t}},a(U,"ChartTitle"),U);function Ut(s,t,i,e){const n=new Yt(e);return new Ti(n,s,t,i)}a(Ut,"getChartTitleComponent");var $,Ri=($=class{constructor(t,i,e,n,r){this.plotData=t,this.xAxis=i,this.yAxis=e,this.orientation=n,this.plotIndex=r}getDrawableElement(){const t=this.plotData.data.map(e=>[this.xAxis.getScaleValue(e[0]),this.yAxis.getScaleValue(e[1])]);let i;return this.orientation==="horizontal"?i=Wt().y(e=>e[0]).x(e=>e[1])(t):i=Wt().x(e=>e[0]).y(e=>e[1])(t),i?[{groupTexts:["plot",`line-plot-${this.plotIndex}`],type:"path",data:[{path:i,strokeFill:this.plotData.strokeFill,strokeWidth:this.plotData.strokeWidth}]}]:[]}},a($,"LinePlot"),$),q,Di=(q=class{constructor(t,i,e,n,r,x){this.barData=t,this.boundingRect=i,this.xAxis=e,this.yAxis=n,this.orientation=r,this.plotIndex=x}getDrawableElement(){const t=this.barData.data.map(r=>[this.xAxis.getScaleValue(r[0]),this.yAxis.getScaleValue(r[1])]),e=Math.min(this.xAxis.getAxisOuterPadding()*2,this.xAxis.getTickDistance())*(1-.05),n=e/2;return this.orientation==="horizontal"?[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map(r=>({x:this.boundingRect.x,y:r[0]-n,height:e,width:r[1]-this.boundingRect.x,fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill}))}]:[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map(r=>({x:r[0]-n,y:r[1],width:e,height:this.boundingRect.y+this.boundingRect.height-r[1],fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill}))}]}},a(q,"BarPlot"),q),G,Pi=(G=class{constructor(t,i,e){this.chartConfig=t,this.chartData=i,this.chartThemeConfig=e,this.boundingRect={x:0,y:0,width:0,height:0}}setAxes(t,i){this.xAxis=t,this.yAxis=i}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){return this.boundingRect.width=t.width,this.boundingRect.height=t.height,{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){if(!(this.xAxis&&this.yAxis))throw Error("Axes must be passed to render Plots");const t=[];for(const[i,e]of this.chartData.plots.entries())switch(e.type){case"line":{const n=new Ri(e,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...n.getDrawableElement())}break;case"bar":{const n=new Di(e,this.boundingRect,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...n.getDrawableElement())}break}return t}},a(G,"BasePlot"),G);function $t(s,t,i){return new Pi(s,t,i)}a($t,"getPlotComponent");var j,vi=(j=class{constructor(t,i,e,n){this.chartConfig=t,this.chartData=i,this.componentStore={title:Ut(t,i,e,n),plot:$t(t,i,e),xAxis:yt(i.xAxis,t.xAxis,{titleColor:e.xAxisTitleColor,labelColor:e.xAxisLabelColor,tickColor:e.xAxisTickColor,axisLineColor:e.xAxisLineColor},n),yAxis:yt(i.yAxis,t.yAxis,{titleColor:e.yAxisTitleColor,labelColor:e.yAxisLabelColor,tickColor:e.yAxisTickColor,axisLineColor:e.yAxisLineColor},n)}}calculateVerticalSpace(){let t=this.chartConfig.width,i=this.chartConfig.height,e=0,n=0,r=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),x=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100),y=this.componentStore.plot.calculateSpace({width:r,height:x});t-=y.width,i-=y.height,y=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i}),n=y.height,i-=y.height,this.componentStore.xAxis.setAxisPosition("bottom"),y=this.componentStore.xAxis.calculateSpace({width:t,height:i}),i-=y.height,this.componentStore.yAxis.setAxisPosition("left"),y=this.componentStore.yAxis.calculateSpace({width:t,height:i}),e=y.width,t-=y.width,t>0&&(r+=t,t=0),i>0&&(x+=i,i=0),this.componentStore.plot.calculateSpace({width:r,height:x}),this.componentStore.plot.setBoundingBoxXY({x:e,y:n}),this.componentStore.xAxis.setRange([e,e+r]),this.componentStore.xAxis.setBoundingBoxXY({x:e,y:n+x}),this.componentStore.yAxis.setRange([n,n+x]),this.componentStore.yAxis.setBoundingBoxXY({x:0,y:n}),this.chartData.plots.some(m=>ft(m))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateHorizontalSpace(){let t=this.chartConfig.width,i=this.chartConfig.height,e=0,n=0,r=0,x=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),y=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100),m=this.componentStore.plot.calculateSpace({width:x,height:y});t-=m.width,i-=m.height,m=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i}),e=m.height,i-=m.height,this.componentStore.xAxis.setAxisPosition("left"),m=this.componentStore.xAxis.calculateSpace({width:t,height:i}),t-=m.width,n=m.width,this.componentStore.yAxis.setAxisPosition("top"),m=this.componentStore.yAxis.calculateSpace({width:t,height:i}),i-=m.height,r=e+m.height,t>0&&(x+=t,t=0),i>0&&(y+=i,i=0),this.componentStore.plot.calculateSpace({width:x,height:y}),this.componentStore.plot.setBoundingBoxXY({x:n,y:r}),this.componentStore.yAxis.setRange([n,n+x]),this.componentStore.yAxis.setBoundingBoxXY({x:n,y:e}),this.componentStore.xAxis.setRange([r,r+y]),this.componentStore.xAxis.setBoundingBoxXY({x:0,y:r}),this.chartData.plots.some(R=>ft(R))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateSpace(){this.chartConfig.chartOrientation==="horizontal"?this.calculateHorizontalSpace():this.calculateVerticalSpace()}getDrawableElement(){this.calculateSpace();const t=[];this.componentStore.plot.setAxes(this.componentStore.xAxis,this.componentStore.yAxis);for(const i of Object.values(this.componentStore))t.push(...i.getDrawableElements());return t}},a(j,"Orchestrator"),j),Q,Li=(Q=class{static build(t,i,e,n){return new vi(t,i,e,n).getDrawableElement()}},a(Q,"XYChartBuilder"),Q),J=0,qt,tt=St(),it=wt(),d=_t(),mt=it.plotColorPalette.split(",").map(s=>s.trim()),ht=!1,Ct=!1;function wt(){const s=gi(),t=bt();return Xt(s.xyChart,t.themeVariables.xyChart)}a(wt,"getChartDefaultThemeConfig");function St(){const s=bt();return Xt(xi.xyChart,s.xyChart)}a(St,"getChartDefaultConfig");function _t(){return{yAxis:{type:"linear",title:"",min:1/0,max:-1/0},xAxis:{type:"band",title:"",categories:[]},title:"",plots:[]}}a(_t,"getChartDefaultData");function rt(s){const t=bt();return pi(s.trim(),t)}a(rt,"textSanitizer");function Gt(s){qt=s}a(Gt,"setTmpSVGG");function jt(s){s==="horizontal"?tt.chartOrientation="horizontal":tt.chartOrientation="vertical"}a(jt,"setOrientation");function Qt(s){d.xAxis.title=rt(s.text)}a(Qt,"setXAxisTitle");function kt(s,t){d.xAxis={type:"linear",title:d.xAxis.title,min:s,max:t},ht=!0}a(kt,"setXAxisRangeData");function Kt(s){d.xAxis={type:"band",title:d.xAxis.title,categories:s.map(t=>rt(t.text))},ht=!0}a(Kt,"setXAxisBand");function Zt(s){d.yAxis.title=rt(s.text)}a(Zt,"setYAxisTitle");function Jt(s,t){d.yAxis={type:"linear",title:d.yAxis.title,min:s,max:t},Ct=!0}a(Jt,"setYAxisRangeData");function ti(s){const t=Math.min(...s),i=Math.max(...s),e=F(d.yAxis)?d.yAxis.min:1/0,n=F(d.yAxis)?d.yAxis.max:-1/0;d.yAxis={type:"linear",title:d.yAxis.title,min:Math.min(e,t),max:Math.max(n,i)}}a(ti,"setYAxisRangeFromPlotData");function Tt(s){let t=[];if(s.length===0)return t;if(!ht){const i=F(d.xAxis)?d.xAxis.min:1/0,e=F(d.xAxis)?d.xAxis.max:-1/0;kt(Math.min(i,1),Math.max(e,s.length))}if(Ct||ti(s),At(d.xAxis)&&(t=d.xAxis.categories.map((i,e)=>[i,s[e]])),F(d.xAxis)){const i=d.xAxis.min,e=d.xAxis.max,n=(e-i)/(s.length-1),r=[];for(let x=i;x<=e;x+=n)r.push(`${x}`);t=r.map((x,y)=>[x,s[y]])}return t}a(Tt,"transformDataWithoutCategory");function Rt(s){return mt[s===0?0:s%mt.length]}a(Rt,"getPlotColorFromPalette");function ii(s,t){const i=Tt(t);d.plots.push({type:"line",strokeFill:Rt(J),strokeWidth:2,data:i}),J++}a(ii,"setLineData");function ei(s,t){const i=Tt(t);d.plots.push({type:"bar",fill:Rt(J),data:i}),J++}a(ei,"setBarData");function si(){if(d.plots.length===0)throw Error("No Plot to render, please provide a plot with some data");return d.title=Nt(),Li.build(tt,d,it,qt)}a(si,"getDrawableElem");function ni(){return it}a(ni,"getChartThemeConfig");function ai(){return tt}a(ai,"getChartConfig");var Ei=a(function(){Ai(),J=0,tt=St(),d=_t(),it=wt(),mt=it.plotColorPalette.split(",").map(s=>s.trim()),ht=!1,Ct=!1},"clear"),Ii={getDrawableElem:si,clear:Ei,setAccTitle:di,getAccTitle:fi,setDiagramTitle:yi,getDiagramTitle:Nt,getAccDescription:mi,setAccDescription:bi,setOrientation:jt,setXAxisTitle:Qt,setXAxisRangeData:kt,setXAxisBand:Kt,setYAxisTitle:Zt,setYAxisRangeData:Jt,setLineData:ii,setBarData:ei,setTmpSVGG:Gt,getChartThemeConfig:ni,getChartConfig:ai},Vi=a((s,t,i,e)=>{const n=e.db,r=n.getChartThemeConfig(),x=n.getChartConfig();function y(f){return f==="top"?"text-before-edge":"middle"}a(y,"getDominantBaseLine");function m(f){return f==="left"?"start":f==="right"?"end":"middle"}a(m,"getTextAnchor");function R(f){return`translate(${f.x}, ${f.y}) rotate(${f.rotation||0})`}a(R,"getTextTransformation"),Ft.debug(`Rendering xychart chart
`+s);const _=Ci(t),D=_.append("g").attr("class","main"),I=D.append("rect").attr("width",x.width).attr("height",x.height).attr("class","background");wi(_,x.height,x.width,!0),_.attr("viewBox",`0 0 ${x.width} ${x.height}`),I.attr("fill",r.backgroundColor),n.setTmpSVGG(_.append("g").attr("class","mermaid-tmp-group"));const V=n.getDrawableElem(),k={};function E(f){let w=D,l="";for(const[P]of f.entries()){let K=D;P>0&&k[l]&&(K=k[l]),l+=f[P],w=k[l],w||(w=k[l]=K.append("g").attr("class",f[P]))}return w}a(E,"getGroup");for(const f of V){if(f.data.length===0)continue;const w=E(f.groupTexts);switch(f.type){case"rect":w.selectAll("rect").data(f.data).enter().append("rect").attr("x",l=>l.x).attr("y",l=>l.y).attr("width",l=>l.width).attr("height",l=>l.height).attr("fill",l=>l.fill).attr("stroke",l=>l.strokeFill).attr("stroke-width",l=>l.strokeWidth);break;case"text":w.selectAll("text").data(f.data).enter().append("text").attr("x",0).attr("y",0).attr("fill",l=>l.fill).attr("font-size",l=>l.fontSize).attr("dominant-baseline",l=>y(l.verticalPos)).attr("text-anchor",l=>m(l.horizontalPos)).attr("transform",l=>R(l)).text(l=>l.text);break;case"path":w.selectAll("path").data(f.data).enter().append("path").attr("d",l=>l.path).attr("fill",l=>l.fill?l.fill:"none").attr("stroke",l=>l.strokeFill).attr("stroke-width",l=>l.strokeWidth);break}}},"draw"),Mi={draw:Vi},Xi={parser:Si,db:Ii,renderer:Mi};export{Xi as diagram};
