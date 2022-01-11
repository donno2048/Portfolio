var Ih=Object.defineProperty;var wl=Object.getOwnPropertySymbols;var Nh=Object.prototype.hasOwnProperty,Fh=Object.prototype.propertyIsEnumerable;var Sl=(s,e,t)=>e in s?Ih(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Tl=(s,e)=>{for(var t in e||(e={}))Nh.call(e,t)&&Sl(s,t,e[t]);if(wl)for(var t of wl(e))Fh.call(e,t)&&Sl(s,t,e[t]);return s};var Bh=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},El={exports:{}},_s={exports:{}};/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */(function(s){(function(e,t){s.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window!="undefined"?window:Bh,function(e,t){var n=[],i=Object.getPrototypeOf,r=n.slice,o=n.flat?function(a){return n.flat.call(a)}:function(a){return n.concat.apply([],a)},l=n.push,u=n.indexOf,h={},p=h.toString,g=h.hasOwnProperty,v=g.toString,y=v.call(Object),b={},S=function(c){return typeof c=="function"&&typeof c.nodeType!="number"&&typeof c.item!="function"},R=function(c){return c!=null&&c===c.window},x=e.document,_={type:!0,src:!0,nonce:!0,noModule:!0};function B(a,c,d){d=d||x;var m,M,w=d.createElement("script");if(w.text=a,c)for(m in _)M=c[m]||c.getAttribute&&c.getAttribute(m),M&&w.setAttribute(m,M);d.head.appendChild(w).parentNode.removeChild(w)}function L(a){return a==null?a+"":typeof a=="object"||typeof a=="function"?h[p.call(a)]||"object":typeof a}var O="3.6.0",f=function(a,c){return new f.fn.init(a,c)};f.fn=f.prototype={jquery:O,constructor:f,length:0,toArray:function(){return r.call(this)},get:function(a){return a==null?r.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var c=f.merge(this.constructor(),a);return c.prevObject=this,c},each:function(a){return f.each(this,a)},map:function(a){return this.pushStack(f.map(this,function(c,d){return a.call(c,d,c)}))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(f.grep(this,function(a,c){return(c+1)%2}))},odd:function(){return this.pushStack(f.grep(this,function(a,c){return c%2}))},eq:function(a){var c=this.length,d=+a+(a<0?c:0);return this.pushStack(d>=0&&d<c?[this[d]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:n.sort,splice:n.splice},f.extend=f.fn.extend=function(){var a,c,d,m,M,w,T=arguments[0]||{},N=1,F=arguments.length,G=!1;for(typeof T=="boolean"&&(G=T,T=arguments[N]||{},N++),typeof T!="object"&&!S(T)&&(T={}),N===F&&(T=this,N--);N<F;N++)if((a=arguments[N])!=null)for(c in a)m=a[c],!(c==="__proto__"||T===m)&&(G&&m&&(f.isPlainObject(m)||(M=Array.isArray(m)))?(d=T[c],M&&!Array.isArray(d)?w=[]:!M&&!f.isPlainObject(d)?w={}:w=d,M=!1,T[c]=f.extend(G,w,m)):m!==void 0&&(T[c]=m));return T},f.extend({expando:"jQuery"+(O+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isPlainObject:function(a){var c,d;return!a||p.call(a)!=="[object Object]"?!1:(c=i(a),c?(d=g.call(c,"constructor")&&c.constructor,typeof d=="function"&&v.call(d)===y):!0)},isEmptyObject:function(a){var c;for(c in a)return!1;return!0},globalEval:function(a,c,d){B(a,{nonce:c&&c.nonce},d)},each:function(a,c){var d,m=0;if(A(a))for(d=a.length;m<d&&c.call(a[m],m,a[m])!==!1;m++);else for(m in a)if(c.call(a[m],m,a[m])===!1)break;return a},makeArray:function(a,c){var d=c||[];return a!=null&&(A(Object(a))?f.merge(d,typeof a=="string"?[a]:a):l.call(d,a)),d},inArray:function(a,c,d){return c==null?-1:u.call(c,a,d)},merge:function(a,c){for(var d=+c.length,m=0,M=a.length;m<d;m++)a[M++]=c[m];return a.length=M,a},grep:function(a,c,d){for(var m,M=[],w=0,T=a.length,N=!d;w<T;w++)m=!c(a[w],w),m!==N&&M.push(a[w]);return M},map:function(a,c,d){var m,M,w=0,T=[];if(A(a))for(m=a.length;w<m;w++)M=c(a[w],w,d),M!=null&&T.push(M);else for(w in a)M=c(a[w],w,d),M!=null&&T.push(M);return o(T)},guid:1,support:b}),typeof Symbol=="function"&&(f.fn[Symbol.iterator]=n[Symbol.iterator]),f.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,c){h["[object "+c+"]"]=c.toLowerCase()});function A(a){var c=!!a&&"length"in a&&a.length,d=L(a);return S(a)||R(a)?!1:d==="array"||c===0||typeof c=="number"&&c>0&&c-1 in a}var X=function(a){var c,d,m,M,w,T,N,F,G,j,de,W,K,Oe,it,Ue,Ot,Ft,cn,vt="sizzle"+1*new Date,tt=a.document,rn=0,dt=0,Pt=gs(),Ar=gs(),ds=gs(),un=gs(),bi=function(E,I){return E===I&&(de=!0),0},Mi={}.hasOwnProperty,sn=[],Kn=sn.pop,vn=sn.push,ei=sn.push,pl=sn.slice,wi=function(E,I){for(var U=0,ie=E.length;U<ie;U++)if(E[U]===I)return U;return-1},Ca="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",pt="[\\x20\\t\\r\\n\\f]",Si="(?:\\\\[\\da-fA-F]{1,6}"+pt+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",ml="\\["+pt+"*("+Si+")(?:"+pt+"*([*^$|!~]?=)"+pt+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Si+"))|)"+pt+"*\\]",La=":("+Si+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+ml+")*)|.*)\\)|)",yh=new RegExp(pt+"+","g"),ps=new RegExp("^"+pt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+pt+"+$","g"),_h=new RegExp("^"+pt+"*,"+pt+"*"),gl=new RegExp("^"+pt+"*([>+~]|"+pt+")"+pt+"*"),bh=new RegExp(pt+"|>"),Mh=new RegExp(La),wh=new RegExp("^"+Si+"$"),ms={ID:new RegExp("^#("+Si+")"),CLASS:new RegExp("^\\.("+Si+")"),TAG:new RegExp("^("+Si+"|[*])"),ATTR:new RegExp("^"+ml),PSEUDO:new RegExp("^"+La),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+pt+"*(even|odd|(([+-]|)(\\d*)n|)"+pt+"*(?:([+-]|)"+pt+"*(\\d+)|))"+pt+"*\\)|)","i"),bool:new RegExp("^(?:"+Ca+")$","i"),needsContext:new RegExp("^"+pt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+pt+"*((?:-\\d)?\\d*)"+pt+"*\\)|)(?=[^-]|$)","i")},Sh=/HTML$/i,Th=/^(?:input|select|textarea|button)$/i,Eh=/^h\d$/i,Cr=/^[^{]+\{\s*\[native \w/,Ah=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Ra=/[+~]/,Gn=new RegExp("\\\\[\\da-fA-F]{1,6}"+pt+"?|\\\\([^\\r\\n\\f])","g"),Vn=function(E,I){var U="0x"+E.slice(1)-65536;return I||(U<0?String.fromCharCode(U+65536):String.fromCharCode(U>>10|55296,U&1023|56320))},vl=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,xl=function(E,I){return I?E==="\0"?"\uFFFD":E.slice(0,-1)+"\\"+E.charCodeAt(E.length-1).toString(16)+" ":"\\"+E},yl=function(){W()},Ch=xs(function(E){return E.disabled===!0&&E.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{ei.apply(sn=pl.call(tt.childNodes),tt.childNodes),sn[tt.childNodes.length].nodeType}catch{ei={apply:sn.length?function(I,U){vn.apply(I,pl.call(U))}:function(I,U){for(var ie=I.length,V=0;I[ie++]=U[V++];);I.length=ie-1}}}function _t(E,I,U,ie){var V,le,pe,we,Ae,Ze,qe,$e=I&&I.ownerDocument,ot=I?I.nodeType:9;if(U=U||[],typeof E!="string"||!E||ot!==1&&ot!==9&&ot!==11)return U;if(!ie&&(W(I),I=I||K,it)){if(ot!==11&&(Ae=Ah.exec(E)))if(V=Ae[1]){if(ot===9)if(pe=I.getElementById(V)){if(pe.id===V)return U.push(pe),U}else return U;else if($e&&(pe=$e.getElementById(V))&&cn(I,pe)&&pe.id===V)return U.push(pe),U}else{if(Ae[2])return ei.apply(U,I.getElementsByTagName(E)),U;if((V=Ae[3])&&d.getElementsByClassName&&I.getElementsByClassName)return ei.apply(U,I.getElementsByClassName(V)),U}if(d.qsa&&!un[E+" "]&&(!Ue||!Ue.test(E))&&(ot!==1||I.nodeName.toLowerCase()!=="object")){if(qe=E,$e=I,ot===1&&(bh.test(E)||gl.test(E))){for($e=Ra.test(E)&&Da(I.parentNode)||I,($e!==I||!d.scope)&&((we=I.getAttribute("id"))?we=we.replace(vl,xl):I.setAttribute("id",we=vt)),Ze=T(E),le=Ze.length;le--;)Ze[le]=(we?"#"+we:":scope")+" "+vs(Ze[le]);qe=Ze.join(",")}try{return ei.apply(U,$e.querySelectorAll(qe)),U}catch{un(E,!0)}finally{we===vt&&I.removeAttribute("id")}}}return F(E.replace(ps,"$1"),I,U,ie)}function gs(){var E=[];function I(U,ie){return E.push(U+" ")>m.cacheLength&&delete I[E.shift()],I[U+" "]=ie}return I}function Sn(E){return E[vt]=!0,E}function Tn(E){var I=K.createElement("fieldset");try{return!!E(I)}catch{return!1}finally{I.parentNode&&I.parentNode.removeChild(I),I=null}}function Pa(E,I){for(var U=E.split("|"),ie=U.length;ie--;)m.attrHandle[U[ie]]=I}function _l(E,I){var U=I&&E,ie=U&&E.nodeType===1&&I.nodeType===1&&E.sourceIndex-I.sourceIndex;if(ie)return ie;if(U){for(;U=U.nextSibling;)if(U===I)return-1}return E?1:-1}function Lh(E){return function(I){var U=I.nodeName.toLowerCase();return U==="input"&&I.type===E}}function Rh(E){return function(I){var U=I.nodeName.toLowerCase();return(U==="input"||U==="button")&&I.type===E}}function bl(E){return function(I){return"form"in I?I.parentNode&&I.disabled===!1?"label"in I?"label"in I.parentNode?I.parentNode.disabled===E:I.disabled===E:I.isDisabled===E||I.isDisabled!==!E&&Ch(I)===E:I.disabled===E:"label"in I?I.disabled===E:!1}}function Ti(E){return Sn(function(I){return I=+I,Sn(function(U,ie){for(var V,le=E([],U.length,I),pe=le.length;pe--;)U[V=le[pe]]&&(U[V]=!(ie[V]=U[V]))})})}function Da(E){return E&&typeof E.getElementsByTagName!="undefined"&&E}d=_t.support={},w=_t.isXML=function(E){var I=E&&E.namespaceURI,U=E&&(E.ownerDocument||E).documentElement;return!Sh.test(I||U&&U.nodeName||"HTML")},W=_t.setDocument=function(E){var I,U,ie=E?E.ownerDocument||E:tt;return ie==K||ie.nodeType!==9||!ie.documentElement||(K=ie,Oe=K.documentElement,it=!w(K),tt!=K&&(U=K.defaultView)&&U.top!==U&&(U.addEventListener?U.addEventListener("unload",yl,!1):U.attachEvent&&U.attachEvent("onunload",yl)),d.scope=Tn(function(V){return Oe.appendChild(V).appendChild(K.createElement("div")),typeof V.querySelectorAll!="undefined"&&!V.querySelectorAll(":scope fieldset div").length}),d.attributes=Tn(function(V){return V.className="i",!V.getAttribute("className")}),d.getElementsByTagName=Tn(function(V){return V.appendChild(K.createComment("")),!V.getElementsByTagName("*").length}),d.getElementsByClassName=Cr.test(K.getElementsByClassName),d.getById=Tn(function(V){return Oe.appendChild(V).id=vt,!K.getElementsByName||!K.getElementsByName(vt).length}),d.getById?(m.filter.ID=function(V){var le=V.replace(Gn,Vn);return function(pe){return pe.getAttribute("id")===le}},m.find.ID=function(V,le){if(typeof le.getElementById!="undefined"&&it){var pe=le.getElementById(V);return pe?[pe]:[]}}):(m.filter.ID=function(V){var le=V.replace(Gn,Vn);return function(pe){var we=typeof pe.getAttributeNode!="undefined"&&pe.getAttributeNode("id");return we&&we.value===le}},m.find.ID=function(V,le){if(typeof le.getElementById!="undefined"&&it){var pe,we,Ae,Ze=le.getElementById(V);if(Ze){if(pe=Ze.getAttributeNode("id"),pe&&pe.value===V)return[Ze];for(Ae=le.getElementsByName(V),we=0;Ze=Ae[we++];)if(pe=Ze.getAttributeNode("id"),pe&&pe.value===V)return[Ze]}return[]}}),m.find.TAG=d.getElementsByTagName?function(V,le){if(typeof le.getElementsByTagName!="undefined")return le.getElementsByTagName(V);if(d.qsa)return le.querySelectorAll(V)}:function(V,le){var pe,we=[],Ae=0,Ze=le.getElementsByTagName(V);if(V==="*"){for(;pe=Ze[Ae++];)pe.nodeType===1&&we.push(pe);return we}return Ze},m.find.CLASS=d.getElementsByClassName&&function(V,le){if(typeof le.getElementsByClassName!="undefined"&&it)return le.getElementsByClassName(V)},Ot=[],Ue=[],(d.qsa=Cr.test(K.querySelectorAll))&&(Tn(function(V){var le;Oe.appendChild(V).innerHTML="<a id='"+vt+"'></a><select id='"+vt+"-\r\\' msallowcapture=''><option selected=''></option></select>",V.querySelectorAll("[msallowcapture^='']").length&&Ue.push("[*^$]="+pt+`*(?:''|"")`),V.querySelectorAll("[selected]").length||Ue.push("\\["+pt+"*(?:value|"+Ca+")"),V.querySelectorAll("[id~="+vt+"-]").length||Ue.push("~="),le=K.createElement("input"),le.setAttribute("name",""),V.appendChild(le),V.querySelectorAll("[name='']").length||Ue.push("\\["+pt+"*name"+pt+"*="+pt+`*(?:''|"")`),V.querySelectorAll(":checked").length||Ue.push(":checked"),V.querySelectorAll("a#"+vt+"+*").length||Ue.push(".#.+[+~]"),V.querySelectorAll("\\\f"),Ue.push("[\\r\\n\\f]")}),Tn(function(V){V.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var le=K.createElement("input");le.setAttribute("type","hidden"),V.appendChild(le).setAttribute("name","D"),V.querySelectorAll("[name=d]").length&&Ue.push("name"+pt+"*[*^$|!~]?="),V.querySelectorAll(":enabled").length!==2&&Ue.push(":enabled",":disabled"),Oe.appendChild(V).disabled=!0,V.querySelectorAll(":disabled").length!==2&&Ue.push(":enabled",":disabled"),V.querySelectorAll("*,:x"),Ue.push(",.*:")})),(d.matchesSelector=Cr.test(Ft=Oe.matches||Oe.webkitMatchesSelector||Oe.mozMatchesSelector||Oe.oMatchesSelector||Oe.msMatchesSelector))&&Tn(function(V){d.disconnectedMatch=Ft.call(V,"*"),Ft.call(V,"[s!='']:x"),Ot.push("!=",La)}),Ue=Ue.length&&new RegExp(Ue.join("|")),Ot=Ot.length&&new RegExp(Ot.join("|")),I=Cr.test(Oe.compareDocumentPosition),cn=I||Cr.test(Oe.contains)?function(V,le){var pe=V.nodeType===9?V.documentElement:V,we=le&&le.parentNode;return V===we||!!(we&&we.nodeType===1&&(pe.contains?pe.contains(we):V.compareDocumentPosition&&V.compareDocumentPosition(we)&16))}:function(V,le){if(le){for(;le=le.parentNode;)if(le===V)return!0}return!1},bi=I?function(V,le){if(V===le)return de=!0,0;var pe=!V.compareDocumentPosition-!le.compareDocumentPosition;return pe||(pe=(V.ownerDocument||V)==(le.ownerDocument||le)?V.compareDocumentPosition(le):1,pe&1||!d.sortDetached&&le.compareDocumentPosition(V)===pe?V==K||V.ownerDocument==tt&&cn(tt,V)?-1:le==K||le.ownerDocument==tt&&cn(tt,le)?1:j?wi(j,V)-wi(j,le):0:pe&4?-1:1)}:function(V,le){if(V===le)return de=!0,0;var pe,we=0,Ae=V.parentNode,Ze=le.parentNode,qe=[V],$e=[le];if(!Ae||!Ze)return V==K?-1:le==K?1:Ae?-1:Ze?1:j?wi(j,V)-wi(j,le):0;if(Ae===Ze)return _l(V,le);for(pe=V;pe=pe.parentNode;)qe.unshift(pe);for(pe=le;pe=pe.parentNode;)$e.unshift(pe);for(;qe[we]===$e[we];)we++;return we?_l(qe[we],$e[we]):qe[we]==tt?-1:$e[we]==tt?1:0}),K},_t.matches=function(E,I){return _t(E,null,null,I)},_t.matchesSelector=function(E,I){if(W(E),d.matchesSelector&&it&&!un[I+" "]&&(!Ot||!Ot.test(I))&&(!Ue||!Ue.test(I)))try{var U=Ft.call(E,I);if(U||d.disconnectedMatch||E.document&&E.document.nodeType!==11)return U}catch{un(I,!0)}return _t(I,K,null,[E]).length>0},_t.contains=function(E,I){return(E.ownerDocument||E)!=K&&W(E),cn(E,I)},_t.attr=function(E,I){(E.ownerDocument||E)!=K&&W(E);var U=m.attrHandle[I.toLowerCase()],ie=U&&Mi.call(m.attrHandle,I.toLowerCase())?U(E,I,!it):void 0;return ie!==void 0?ie:d.attributes||!it?E.getAttribute(I):(ie=E.getAttributeNode(I))&&ie.specified?ie.value:null},_t.escape=function(E){return(E+"").replace(vl,xl)},_t.error=function(E){throw new Error("Syntax error, unrecognized expression: "+E)},_t.uniqueSort=function(E){var I,U=[],ie=0,V=0;if(de=!d.detectDuplicates,j=!d.sortStable&&E.slice(0),E.sort(bi),de){for(;I=E[V++];)I===E[V]&&(ie=U.push(V));for(;ie--;)E.splice(U[ie],1)}return j=null,E},M=_t.getText=function(E){var I,U="",ie=0,V=E.nodeType;if(V){if(V===1||V===9||V===11){if(typeof E.textContent=="string")return E.textContent;for(E=E.firstChild;E;E=E.nextSibling)U+=M(E)}else if(V===3||V===4)return E.nodeValue}else for(;I=E[ie++];)U+=M(I);return U},m=_t.selectors={cacheLength:50,createPseudo:Sn,match:ms,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(E){return E[1]=E[1].replace(Gn,Vn),E[3]=(E[3]||E[4]||E[5]||"").replace(Gn,Vn),E[2]==="~="&&(E[3]=" "+E[3]+" "),E.slice(0,4)},CHILD:function(E){return E[1]=E[1].toLowerCase(),E[1].slice(0,3)==="nth"?(E[3]||_t.error(E[0]),E[4]=+(E[4]?E[5]+(E[6]||1):2*(E[3]==="even"||E[3]==="odd")),E[5]=+(E[7]+E[8]||E[3]==="odd")):E[3]&&_t.error(E[0]),E},PSEUDO:function(E){var I,U=!E[6]&&E[2];return ms.CHILD.test(E[0])?null:(E[3]?E[2]=E[4]||E[5]||"":U&&Mh.test(U)&&(I=T(U,!0))&&(I=U.indexOf(")",U.length-I)-U.length)&&(E[0]=E[0].slice(0,I),E[2]=U.slice(0,I)),E.slice(0,3))}},filter:{TAG:function(E){var I=E.replace(Gn,Vn).toLowerCase();return E==="*"?function(){return!0}:function(U){return U.nodeName&&U.nodeName.toLowerCase()===I}},CLASS:function(E){var I=Pt[E+" "];return I||(I=new RegExp("(^|"+pt+")"+E+"("+pt+"|$)"))&&Pt(E,function(U){return I.test(typeof U.className=="string"&&U.className||typeof U.getAttribute!="undefined"&&U.getAttribute("class")||"")})},ATTR:function(E,I,U){return function(ie){var V=_t.attr(ie,E);return V==null?I==="!=":I?(V+="",I==="="?V===U:I==="!="?V!==U:I==="^="?U&&V.indexOf(U)===0:I==="*="?U&&V.indexOf(U)>-1:I==="$="?U&&V.slice(-U.length)===U:I==="~="?(" "+V.replace(yh," ")+" ").indexOf(U)>-1:I==="|="?V===U||V.slice(0,U.length+1)===U+"-":!1):!0}},CHILD:function(E,I,U,ie,V){var le=E.slice(0,3)!=="nth",pe=E.slice(-4)!=="last",we=I==="of-type";return ie===1&&V===0?function(Ae){return!!Ae.parentNode}:function(Ae,Ze,qe){var $e,ot,bt,Je,Ut,Yt,hn=le!==pe?"nextSibling":"previousSibling",Ct=Ae.parentNode,Lr=we&&Ae.nodeName.toLowerCase(),Rr=!qe&&!we,fn=!1;if(Ct){if(le){for(;hn;){for(Je=Ae;Je=Je[hn];)if(we?Je.nodeName.toLowerCase()===Lr:Je.nodeType===1)return!1;Yt=hn=E==="only"&&!Yt&&"nextSibling"}return!0}if(Yt=[pe?Ct.firstChild:Ct.lastChild],pe&&Rr){for(Je=Ct,bt=Je[vt]||(Je[vt]={}),ot=bt[Je.uniqueID]||(bt[Je.uniqueID]={}),$e=ot[E]||[],Ut=$e[0]===rn&&$e[1],fn=Ut&&$e[2],Je=Ut&&Ct.childNodes[Ut];Je=++Ut&&Je&&Je[hn]||(fn=Ut=0)||Yt.pop();)if(Je.nodeType===1&&++fn&&Je===Ae){ot[E]=[rn,Ut,fn];break}}else if(Rr&&(Je=Ae,bt=Je[vt]||(Je[vt]={}),ot=bt[Je.uniqueID]||(bt[Je.uniqueID]={}),$e=ot[E]||[],Ut=$e[0]===rn&&$e[1],fn=Ut),fn===!1)for(;(Je=++Ut&&Je&&Je[hn]||(fn=Ut=0)||Yt.pop())&&!((we?Je.nodeName.toLowerCase()===Lr:Je.nodeType===1)&&++fn&&(Rr&&(bt=Je[vt]||(Je[vt]={}),ot=bt[Je.uniqueID]||(bt[Je.uniqueID]={}),ot[E]=[rn,fn]),Je===Ae)););return fn-=V,fn===ie||fn%ie==0&&fn/ie>=0}}},PSEUDO:function(E,I){var U,ie=m.pseudos[E]||m.setFilters[E.toLowerCase()]||_t.error("unsupported pseudo: "+E);return ie[vt]?ie(I):ie.length>1?(U=[E,E,"",I],m.setFilters.hasOwnProperty(E.toLowerCase())?Sn(function(V,le){for(var pe,we=ie(V,I),Ae=we.length;Ae--;)pe=wi(V,we[Ae]),V[pe]=!(le[pe]=we[Ae])}):function(V){return ie(V,0,U)}):ie}},pseudos:{not:Sn(function(E){var I=[],U=[],ie=N(E.replace(ps,"$1"));return ie[vt]?Sn(function(V,le,pe,we){for(var Ae,Ze=ie(V,null,we,[]),qe=V.length;qe--;)(Ae=Ze[qe])&&(V[qe]=!(le[qe]=Ae))}):function(V,le,pe){return I[0]=V,ie(I,null,pe,U),I[0]=null,!U.pop()}}),has:Sn(function(E){return function(I){return _t(E,I).length>0}}),contains:Sn(function(E){return E=E.replace(Gn,Vn),function(I){return(I.textContent||M(I)).indexOf(E)>-1}}),lang:Sn(function(E){return wh.test(E||"")||_t.error("unsupported lang: "+E),E=E.replace(Gn,Vn).toLowerCase(),function(I){var U;do if(U=it?I.lang:I.getAttribute("xml:lang")||I.getAttribute("lang"))return U=U.toLowerCase(),U===E||U.indexOf(E+"-")===0;while((I=I.parentNode)&&I.nodeType===1);return!1}}),target:function(E){var I=a.location&&a.location.hash;return I&&I.slice(1)===E.id},root:function(E){return E===Oe},focus:function(E){return E===K.activeElement&&(!K.hasFocus||K.hasFocus())&&!!(E.type||E.href||~E.tabIndex)},enabled:bl(!1),disabled:bl(!0),checked:function(E){var I=E.nodeName.toLowerCase();return I==="input"&&!!E.checked||I==="option"&&!!E.selected},selected:function(E){return E.parentNode&&E.parentNode.selectedIndex,E.selected===!0},empty:function(E){for(E=E.firstChild;E;E=E.nextSibling)if(E.nodeType<6)return!1;return!0},parent:function(E){return!m.pseudos.empty(E)},header:function(E){return Eh.test(E.nodeName)},input:function(E){return Th.test(E.nodeName)},button:function(E){var I=E.nodeName.toLowerCase();return I==="input"&&E.type==="button"||I==="button"},text:function(E){var I;return E.nodeName.toLowerCase()==="input"&&E.type==="text"&&((I=E.getAttribute("type"))==null||I.toLowerCase()==="text")},first:Ti(function(){return[0]}),last:Ti(function(E,I){return[I-1]}),eq:Ti(function(E,I,U){return[U<0?U+I:U]}),even:Ti(function(E,I){for(var U=0;U<I;U+=2)E.push(U);return E}),odd:Ti(function(E,I){for(var U=1;U<I;U+=2)E.push(U);return E}),lt:Ti(function(E,I,U){for(var ie=U<0?U+I:U>I?I:U;--ie>=0;)E.push(ie);return E}),gt:Ti(function(E,I,U){for(var ie=U<0?U+I:U;++ie<I;)E.push(ie);return E})}},m.pseudos.nth=m.pseudos.eq;for(c in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})m.pseudos[c]=Lh(c);for(c in{submit:!0,reset:!0})m.pseudos[c]=Rh(c);function Ml(){}Ml.prototype=m.filters=m.pseudos,m.setFilters=new Ml,T=_t.tokenize=function(E,I){var U,ie,V,le,pe,we,Ae,Ze=Ar[E+" "];if(Ze)return I?0:Ze.slice(0);for(pe=E,we=[],Ae=m.preFilter;pe;){(!U||(ie=_h.exec(pe)))&&(ie&&(pe=pe.slice(ie[0].length)||pe),we.push(V=[])),U=!1,(ie=gl.exec(pe))&&(U=ie.shift(),V.push({value:U,type:ie[0].replace(ps," ")}),pe=pe.slice(U.length));for(le in m.filter)(ie=ms[le].exec(pe))&&(!Ae[le]||(ie=Ae[le](ie)))&&(U=ie.shift(),V.push({value:U,type:le,matches:ie}),pe=pe.slice(U.length));if(!U)break}return I?pe.length:pe?_t.error(E):Ar(E,we).slice(0)};function vs(E){for(var I=0,U=E.length,ie="";I<U;I++)ie+=E[I].value;return ie}function xs(E,I,U){var ie=I.dir,V=I.next,le=V||ie,pe=U&&le==="parentNode",we=dt++;return I.first?function(Ae,Ze,qe){for(;Ae=Ae[ie];)if(Ae.nodeType===1||pe)return E(Ae,Ze,qe);return!1}:function(Ae,Ze,qe){var $e,ot,bt,Je=[rn,we];if(qe){for(;Ae=Ae[ie];)if((Ae.nodeType===1||pe)&&E(Ae,Ze,qe))return!0}else for(;Ae=Ae[ie];)if(Ae.nodeType===1||pe)if(bt=Ae[vt]||(Ae[vt]={}),ot=bt[Ae.uniqueID]||(bt[Ae.uniqueID]={}),V&&V===Ae.nodeName.toLowerCase())Ae=Ae[ie]||Ae;else{if(($e=ot[le])&&$e[0]===rn&&$e[1]===we)return Je[2]=$e[2];if(ot[le]=Je,Je[2]=E(Ae,Ze,qe))return!0}return!1}}function Ia(E){return E.length>1?function(I,U,ie){for(var V=E.length;V--;)if(!E[V](I,U,ie))return!1;return!0}:E[0]}function Ph(E,I,U){for(var ie=0,V=I.length;ie<V;ie++)_t(E,I[ie],U);return U}function ys(E,I,U,ie,V){for(var le,pe=[],we=0,Ae=E.length,Ze=I!=null;we<Ae;we++)(le=E[we])&&(!U||U(le,ie,V))&&(pe.push(le),Ze&&I.push(we));return pe}function Na(E,I,U,ie,V,le){return ie&&!ie[vt]&&(ie=Na(ie)),V&&!V[vt]&&(V=Na(V,le)),Sn(function(pe,we,Ae,Ze){var qe,$e,ot,bt=[],Je=[],Ut=we.length,Yt=pe||Ph(I||"*",Ae.nodeType?[Ae]:Ae,[]),hn=E&&(pe||!I)?ys(Yt,bt,E,Ae,Ze):Yt,Ct=U?V||(pe?E:Ut||ie)?[]:we:hn;if(U&&U(hn,Ct,Ae,Ze),ie)for(qe=ys(Ct,Je),ie(qe,[],Ae,Ze),$e=qe.length;$e--;)(ot=qe[$e])&&(Ct[Je[$e]]=!(hn[Je[$e]]=ot));if(pe){if(V||E){if(V){for(qe=[],$e=Ct.length;$e--;)(ot=Ct[$e])&&qe.push(hn[$e]=ot);V(null,Ct=[],qe,Ze)}for($e=Ct.length;$e--;)(ot=Ct[$e])&&(qe=V?wi(pe,ot):bt[$e])>-1&&(pe[qe]=!(we[qe]=ot))}}else Ct=ys(Ct===we?Ct.splice(Ut,Ct.length):Ct),V?V(null,we,Ct,Ze):ei.apply(we,Ct)})}function Fa(E){for(var I,U,ie,V=E.length,le=m.relative[E[0].type],pe=le||m.relative[" "],we=le?1:0,Ae=xs(function($e){return $e===I},pe,!0),Ze=xs(function($e){return wi(I,$e)>-1},pe,!0),qe=[function($e,ot,bt){var Je=!le&&(bt||ot!==G)||((I=ot).nodeType?Ae($e,ot,bt):Ze($e,ot,bt));return I=null,Je}];we<V;we++)if(U=m.relative[E[we].type])qe=[xs(Ia(qe),U)];else{if(U=m.filter[E[we].type].apply(null,E[we].matches),U[vt]){for(ie=++we;ie<V&&!m.relative[E[ie].type];ie++);return Na(we>1&&Ia(qe),we>1&&vs(E.slice(0,we-1).concat({value:E[we-2].type===" "?"*":""})).replace(ps,"$1"),U,we<ie&&Fa(E.slice(we,ie)),ie<V&&Fa(E=E.slice(ie)),ie<V&&vs(E))}qe.push(U)}return Ia(qe)}function Dh(E,I){var U=I.length>0,ie=E.length>0,V=function(le,pe,we,Ae,Ze){var qe,$e,ot,bt=0,Je="0",Ut=le&&[],Yt=[],hn=G,Ct=le||ie&&m.find.TAG("*",Ze),Lr=rn+=hn==null?1:Math.random()||.1,Rr=Ct.length;for(Ze&&(G=pe==K||pe||Ze);Je!==Rr&&(qe=Ct[Je])!=null;Je++){if(ie&&qe){for($e=0,!pe&&qe.ownerDocument!=K&&(W(qe),we=!it);ot=E[$e++];)if(ot(qe,pe||K,we)){Ae.push(qe);break}Ze&&(rn=Lr)}U&&((qe=!ot&&qe)&&bt--,le&&Ut.push(qe))}if(bt+=Je,U&&Je!==bt){for($e=0;ot=I[$e++];)ot(Ut,Yt,pe,we);if(le){if(bt>0)for(;Je--;)Ut[Je]||Yt[Je]||(Yt[Je]=Kn.call(Ae));Yt=ys(Yt)}ei.apply(Ae,Yt),Ze&&!le&&Yt.length>0&&bt+I.length>1&&_t.uniqueSort(Ae)}return Ze&&(rn=Lr,G=hn),Ut};return U?Sn(V):V}return N=_t.compile=function(E,I){var U,ie=[],V=[],le=ds[E+" "];if(!le){for(I||(I=T(E)),U=I.length;U--;)le=Fa(I[U]),le[vt]?ie.push(le):V.push(le);le=ds(E,Dh(V,ie)),le.selector=E}return le},F=_t.select=function(E,I,U,ie){var V,le,pe,we,Ae,Ze=typeof E=="function"&&E,qe=!ie&&T(E=Ze.selector||E);if(U=U||[],qe.length===1){if(le=qe[0]=qe[0].slice(0),le.length>2&&(pe=le[0]).type==="ID"&&I.nodeType===9&&it&&m.relative[le[1].type]){if(I=(m.find.ID(pe.matches[0].replace(Gn,Vn),I)||[])[0],I)Ze&&(I=I.parentNode);else return U;E=E.slice(le.shift().value.length)}for(V=ms.needsContext.test(E)?0:le.length;V--&&(pe=le[V],!m.relative[we=pe.type]);)if((Ae=m.find[we])&&(ie=Ae(pe.matches[0].replace(Gn,Vn),Ra.test(le[0].type)&&Da(I.parentNode)||I))){if(le.splice(V,1),E=ie.length&&vs(le),!E)return ei.apply(U,ie),U;break}}return(Ze||N(E,qe))(ie,I,!it,U,!I||Ra.test(E)&&Da(I.parentNode)||I),U},d.sortStable=vt.split("").sort(bi).join("")===vt,d.detectDuplicates=!!de,W(),d.sortDetached=Tn(function(E){return E.compareDocumentPosition(K.createElement("fieldset"))&1}),Tn(function(E){return E.innerHTML="<a href='#'></a>",E.firstChild.getAttribute("href")==="#"})||Pa("type|href|height|width",function(E,I,U){if(!U)return E.getAttribute(I,I.toLowerCase()==="type"?1:2)}),(!d.attributes||!Tn(function(E){return E.innerHTML="<input/>",E.firstChild.setAttribute("value",""),E.firstChild.getAttribute("value")===""}))&&Pa("value",function(E,I,U){if(!U&&E.nodeName.toLowerCase()==="input")return E.defaultValue}),Tn(function(E){return E.getAttribute("disabled")==null})||Pa(Ca,function(E,I,U){var ie;if(!U)return E[I]===!0?I.toLowerCase():(ie=E.getAttributeNode(I))&&ie.specified?ie.value:null}),_t}(e);f.find=X,f.expr=X.selectors,f.expr[":"]=f.expr.pseudos,f.uniqueSort=f.unique=X.uniqueSort,f.text=X.getText,f.isXMLDoc=X.isXML,f.contains=X.contains,f.escapeSelector=X.escape;var me=function(a,c,d){for(var m=[],M=d!==void 0;(a=a[c])&&a.nodeType!==9;)if(a.nodeType===1){if(M&&f(a).is(d))break;m.push(a)}return m},ee=function(a,c){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==c&&d.push(a);return d},k=f.expr.match.needsContext;function be(a,c){return a.nodeName&&a.nodeName.toLowerCase()===c.toLowerCase()}var $=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Z(a,c,d){return S(c)?f.grep(a,function(m,M){return!!c.call(m,M,m)!==d}):c.nodeType?f.grep(a,function(m){return m===c!==d}):typeof c!="string"?f.grep(a,function(m){return u.call(c,m)>-1!==d}):f.filter(c,a,d)}f.filter=function(a,c,d){var m=c[0];return d&&(a=":not("+a+")"),c.length===1&&m.nodeType===1?f.find.matchesSelector(m,a)?[m]:[]:f.find.matches(a,f.grep(c,function(M){return M.nodeType===1}))},f.fn.extend({find:function(a){var c,d,m=this.length,M=this;if(typeof a!="string")return this.pushStack(f(a).filter(function(){for(c=0;c<m;c++)if(f.contains(M[c],this))return!0}));for(d=this.pushStack([]),c=0;c<m;c++)f.find(a,M[c],d);return m>1?f.uniqueSort(d):d},filter:function(a){return this.pushStack(Z(this,a||[],!1))},not:function(a){return this.pushStack(Z(this,a||[],!0))},is:function(a){return!!Z(this,typeof a=="string"&&k.test(a)?f(a):a||[],!1).length}});var te,J=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Q=f.fn.init=function(a,c,d){var m,M;if(!a)return this;if(d=d||te,typeof a=="string")if(a[0]==="<"&&a[a.length-1]===">"&&a.length>=3?m=[null,a,null]:m=J.exec(a),m&&(m[1]||!c))if(m[1]){if(c=c instanceof f?c[0]:c,f.merge(this,f.parseHTML(m[1],c&&c.nodeType?c.ownerDocument||c:x,!0)),$.test(m[1])&&f.isPlainObject(c))for(m in c)S(this[m])?this[m](c[m]):this.attr(m,c[m]);return this}else return M=x.getElementById(m[2]),M&&(this[0]=M,this.length=1),this;else return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a);else{if(a.nodeType)return this[0]=a,this.length=1,this;if(S(a))return d.ready!==void 0?d.ready(a):a(f)}return f.makeArray(a,this)};Q.prototype=f.fn,te=f(x);var Me=/^(?:parents|prev(?:Until|All))/,De={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({has:function(a){var c=f(a,this),d=c.length;return this.filter(function(){for(var m=0;m<d;m++)if(f.contains(this,c[m]))return!0})},closest:function(a,c){var d,m=0,M=this.length,w=[],T=typeof a!="string"&&f(a);if(!k.test(a)){for(;m<M;m++)for(d=this[m];d&&d!==c;d=d.parentNode)if(d.nodeType<11&&(T?T.index(d)>-1:d.nodeType===1&&f.find.matchesSelector(d,a))){w.push(d);break}}return this.pushStack(w.length>1?f.uniqueSort(w):w)},index:function(a){return a?typeof a=="string"?u.call(f(a),this[0]):u.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,c){return this.pushStack(f.uniqueSort(f.merge(this.get(),f(a,c))))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}});function ke(a,c){for(;(a=a[c])&&a.nodeType!==1;);return a}f.each({parent:function(a){var c=a.parentNode;return c&&c.nodeType!==11?c:null},parents:function(a){return me(a,"parentNode")},parentsUntil:function(a,c,d){return me(a,"parentNode",d)},next:function(a){return ke(a,"nextSibling")},prev:function(a){return ke(a,"previousSibling")},nextAll:function(a){return me(a,"nextSibling")},prevAll:function(a){return me(a,"previousSibling")},nextUntil:function(a,c,d){return me(a,"nextSibling",d)},prevUntil:function(a,c,d){return me(a,"previousSibling",d)},siblings:function(a){return ee((a.parentNode||{}).firstChild,a)},children:function(a){return ee(a.firstChild)},contents:function(a){return a.contentDocument!=null&&i(a.contentDocument)?a.contentDocument:(be(a,"template")&&(a=a.content||a),f.merge([],a.childNodes))}},function(a,c){f.fn[a]=function(d,m){var M=f.map(this,c,d);return a.slice(-5)!=="Until"&&(m=d),m&&typeof m=="string"&&(M=f.filter(m,M)),this.length>1&&(De[a]||f.uniqueSort(M),Me.test(a)&&M.reverse()),this.pushStack(M)}});var Se=/[^\x20\t\r\n\f]+/g;function et(a){var c={};return f.each(a.match(Se)||[],function(d,m){c[m]=!0}),c}f.Callbacks=function(a){a=typeof a=="string"?et(a):f.extend({},a);var c,d,m,M,w=[],T=[],N=-1,F=function(){for(M=M||a.once,m=c=!0;T.length;N=-1)for(d=T.shift();++N<w.length;)w[N].apply(d[0],d[1])===!1&&a.stopOnFalse&&(N=w.length,d=!1);a.memory||(d=!1),c=!1,M&&(d?w=[]:w="")},G={add:function(){return w&&(d&&!c&&(N=w.length-1,T.push(d)),function j(de){f.each(de,function(W,K){S(K)?(!a.unique||!G.has(K))&&w.push(K):K&&K.length&&L(K)!=="string"&&j(K)})}(arguments),d&&!c&&F()),this},remove:function(){return f.each(arguments,function(j,de){for(var W;(W=f.inArray(de,w,W))>-1;)w.splice(W,1),W<=N&&N--}),this},has:function(j){return j?f.inArray(j,w)>-1:w.length>0},empty:function(){return w&&(w=[]),this},disable:function(){return M=T=[],w=d="",this},disabled:function(){return!w},lock:function(){return M=T=[],!d&&!c&&(w=d=""),this},locked:function(){return!!M},fireWith:function(j,de){return M||(de=de||[],de=[j,de.slice?de.slice():de],T.push(de),c||F()),this},fire:function(){return G.fireWith(this,arguments),this},fired:function(){return!!m}};return G};function he(a){return a}function ye(a){throw a}function Ne(a,c,d,m){var M;try{a&&S(M=a.promise)?M.call(a).done(c).fail(d):a&&S(M=a.then)?M.call(a,c,d):c.apply(void 0,[a].slice(m))}catch(w){d.apply(void 0,[w])}}f.extend({Deferred:function(a){var c=[["notify","progress",f.Callbacks("memory"),f.Callbacks("memory"),2],["resolve","done",f.Callbacks("once memory"),f.Callbacks("once memory"),0,"resolved"],["reject","fail",f.Callbacks("once memory"),f.Callbacks("once memory"),1,"rejected"]],d="pending",m={state:function(){return d},always:function(){return M.done(arguments).fail(arguments),this},catch:function(w){return m.then(null,w)},pipe:function(){var w=arguments;return f.Deferred(function(T){f.each(c,function(N,F){var G=S(w[F[4]])&&w[F[4]];M[F[1]](function(){var j=G&&G.apply(this,arguments);j&&S(j.promise)?j.promise().progress(T.notify).done(T.resolve).fail(T.reject):T[F[0]+"With"](this,G?[j]:arguments)})}),w=null}).promise()},then:function(w,T,N){var F=0;function G(j,de,W,K){return function(){var Oe=this,it=arguments,Ue=function(){var Ft,cn;if(!(j<F)){if(Ft=W.apply(Oe,it),Ft===de.promise())throw new TypeError("Thenable self-resolution");cn=Ft&&(typeof Ft=="object"||typeof Ft=="function")&&Ft.then,S(cn)?K?cn.call(Ft,G(F,de,he,K),G(F,de,ye,K)):(F++,cn.call(Ft,G(F,de,he,K),G(F,de,ye,K),G(F,de,he,de.notifyWith))):(W!==he&&(Oe=void 0,it=[Ft]),(K||de.resolveWith)(Oe,it))}},Ot=K?Ue:function(){try{Ue()}catch(Ft){f.Deferred.exceptionHook&&f.Deferred.exceptionHook(Ft,Ot.stackTrace),j+1>=F&&(W!==ye&&(Oe=void 0,it=[Ft]),de.rejectWith(Oe,it))}};j?Ot():(f.Deferred.getStackHook&&(Ot.stackTrace=f.Deferred.getStackHook()),e.setTimeout(Ot))}}return f.Deferred(function(j){c[0][3].add(G(0,j,S(N)?N:he,j.notifyWith)),c[1][3].add(G(0,j,S(w)?w:he)),c[2][3].add(G(0,j,S(T)?T:ye))}).promise()},promise:function(w){return w!=null?f.extend(w,m):m}},M={};return f.each(c,function(w,T){var N=T[2],F=T[5];m[T[1]]=N.add,F&&N.add(function(){d=F},c[3-w][2].disable,c[3-w][3].disable,c[0][2].lock,c[0][3].lock),N.add(T[3].fire),M[T[0]]=function(){return M[T[0]+"With"](this===M?void 0:this,arguments),this},M[T[0]+"With"]=N.fireWith}),m.promise(M),a&&a.call(M,M),M},when:function(a){var c=arguments.length,d=c,m=Array(d),M=r.call(arguments),w=f.Deferred(),T=function(N){return function(F){m[N]=this,M[N]=arguments.length>1?r.call(arguments):F,--c||w.resolveWith(m,M)}};if(c<=1&&(Ne(a,w.done(T(d)).resolve,w.reject,!c),w.state()==="pending"||S(M[d]&&M[d].then)))return w.then();for(;d--;)Ne(M[d],T(d),w.reject);return w.promise()}});var ae=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;f.Deferred.exceptionHook=function(a,c){e.console&&e.console.warn&&a&&ae.test(a.name)&&e.console.warn("jQuery.Deferred exception: "+a.message,a.stack,c)},f.readyException=function(a){e.setTimeout(function(){throw a})};var He=f.Deferred();f.fn.ready=function(a){return He.then(a).catch(function(c){f.readyException(c)}),this},f.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--f.readyWait:f.isReady)||(f.isReady=!0,!(a!==!0&&--f.readyWait>0)&&He.resolveWith(x,[f]))}}),f.ready.then=He.then;function Ye(){x.removeEventListener("DOMContentLoaded",Ye),e.removeEventListener("load",Ye),f.ready()}x.readyState==="complete"||x.readyState!=="loading"&&!x.documentElement.doScroll?e.setTimeout(f.ready):(x.addEventListener("DOMContentLoaded",Ye),e.addEventListener("load",Ye));var Ce=function(a,c,d,m,M,w,T){var N=0,F=a.length,G=d==null;if(L(d)==="object"){M=!0;for(N in d)Ce(a,c,N,d[N],!0,w,T)}else if(m!==void 0&&(M=!0,S(m)||(T=!0),G&&(T?(c.call(a,m),c=null):(G=c,c=function(j,de,W){return G.call(f(j),W)})),c))for(;N<F;N++)c(a[N],d,T?m:m.call(a[N],N,c(a[N],d)));return M?a:G?c.call(a):F?c(a[0],d):w},Be=/^-ms-/,nt=/-([a-z])/g;function oe(a,c){return c.toUpperCase()}function fe(a){return a.replace(Be,"ms-").replace(nt,oe)}var _e=function(a){return a.nodeType===1||a.nodeType===9||!+a.nodeType};function Ie(){this.expando=f.expando+Ie.uid++}Ie.uid=1,Ie.prototype={cache:function(a){var c=a[this.expando];return c||(c={},_e(a)&&(a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,configurable:!0}))),c},set:function(a,c,d){var m,M=this.cache(a);if(typeof c=="string")M[fe(c)]=d;else for(m in c)M[fe(m)]=c[m];return M},get:function(a,c){return c===void 0?this.cache(a):a[this.expando]&&a[this.expando][fe(c)]},access:function(a,c,d){return c===void 0||c&&typeof c=="string"&&d===void 0?this.get(a,c):(this.set(a,c,d),d!==void 0?d:c)},remove:function(a,c){var d,m=a[this.expando];if(m!==void 0){if(c!==void 0)for(Array.isArray(c)?c=c.map(fe):(c=fe(c),c=c in m?[c]:c.match(Se)||[]),d=c.length;d--;)delete m[c[d]];(c===void 0||f.isEmptyObject(m))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var c=a[this.expando];return c!==void 0&&!f.isEmptyObject(c)}};var re=new Ie,P=new Ie,C=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,se=/[A-Z]/g;function xe(a){return a==="true"?!0:a==="false"?!1:a==="null"?null:a===+a+""?+a:C.test(a)?JSON.parse(a):a}function ge(a,c,d){var m;if(d===void 0&&a.nodeType===1)if(m="data-"+c.replace(se,"-$&").toLowerCase(),d=a.getAttribute(m),typeof d=="string"){try{d=xe(d)}catch{}P.set(a,c,d)}else d=void 0;return d}f.extend({hasData:function(a){return P.hasData(a)||re.hasData(a)},data:function(a,c,d){return P.access(a,c,d)},removeData:function(a,c){P.remove(a,c)},_data:function(a,c,d){return re.access(a,c,d)},_removeData:function(a,c){re.remove(a,c)}}),f.fn.extend({data:function(a,c){var d,m,M,w=this[0],T=w&&w.attributes;if(a===void 0){if(this.length&&(M=P.get(w),w.nodeType===1&&!re.get(w,"hasDataAttrs"))){for(d=T.length;d--;)T[d]&&(m=T[d].name,m.indexOf("data-")===0&&(m=fe(m.slice(5)),ge(w,m,M[m])));re.set(w,"hasDataAttrs",!0)}return M}return typeof a=="object"?this.each(function(){P.set(this,a)}):Ce(this,function(N){var F;if(w&&N===void 0)return F=P.get(w,a),F!==void 0||(F=ge(w,a),F!==void 0)?F:void 0;this.each(function(){P.set(this,a,N)})},null,c,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){P.remove(this,a)})}}),f.extend({queue:function(a,c,d){var m;if(a)return c=(c||"fx")+"queue",m=re.get(a,c),d&&(!m||Array.isArray(d)?m=re.access(a,c,f.makeArray(d)):m.push(d)),m||[]},dequeue:function(a,c){c=c||"fx";var d=f.queue(a,c),m=d.length,M=d.shift(),w=f._queueHooks(a,c),T=function(){f.dequeue(a,c)};M==="inprogress"&&(M=d.shift(),m--),M&&(c==="fx"&&d.unshift("inprogress"),delete w.stop,M.call(a,T,w)),!m&&w&&w.empty.fire()},_queueHooks:function(a,c){var d=c+"queueHooks";return re.get(a,d)||re.access(a,d,{empty:f.Callbacks("once memory").add(function(){re.remove(a,[c+"queue",d])})})}}),f.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?f.queue(this[0],a):c===void 0?this:this.each(function(){var m=f.queue(this,a,c);f._queueHooks(this,a),a==="fx"&&m[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,m=1,M=f.Deferred(),w=this,T=this.length,N=function(){--m||M.resolveWith(w,[w])};for(typeof a!="string"&&(c=a,a=void 0),a=a||"fx";T--;)d=re.get(w[T],a+"queueHooks"),d&&d.empty&&(m++,d.empty.add(N));return N(),M.promise(c)}});var Le=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ve=new RegExp("^(?:([+-])=|)("+Le+")([a-z%]*)$","i"),Re=["Top","Right","Bottom","Left"],We=x.documentElement,Pe=function(a){return f.contains(a.ownerDocument,a)},H={composed:!0};We.getRootNode&&(Pe=function(a){return f.contains(a.ownerDocument,a)||a.getRootNode(H)===a.ownerDocument});var Te=function(a,c){return a=c||a,a.style.display==="none"||a.style.display===""&&Pe(a)&&f.css(a,"display")==="none"};function ue(a,c,d,m){var M,w,T=20,N=m?function(){return m.cur()}:function(){return f.css(a,c,"")},F=N(),G=d&&d[3]||(f.cssNumber[c]?"":"px"),j=a.nodeType&&(f.cssNumber[c]||G!=="px"&&+F)&&Ve.exec(f.css(a,c));if(j&&j[3]!==G){for(F=F/2,G=G||j[3],j=+F||1;T--;)f.style(a,c,j+G),(1-w)*(1-(w=N()/F||.5))<=0&&(T=0),j=j/w;j=j*2,f.style(a,c,j+G),d=d||[]}return d&&(j=+j||+F||0,M=d[1]?j+(d[1]+1)*d[2]:+d[2],m&&(m.unit=G,m.start=j,m.end=M)),M}var ze={};function Fe(a){var c,d=a.ownerDocument,m=a.nodeName,M=ze[m];return M||(c=d.body.appendChild(d.createElement(m)),M=f.css(c,"display"),c.parentNode.removeChild(c),M==="none"&&(M="block"),ze[m]=M,M)}function rt(a,c){for(var d,m,M=[],w=0,T=a.length;w<T;w++)m=a[w],!!m.style&&(d=m.style.display,c?(d==="none"&&(M[w]=re.get(m,"display")||null,M[w]||(m.style.display="")),m.style.display===""&&Te(m)&&(M[w]=Fe(m))):d!=="none"&&(M[w]="none",re.set(m,"display",d)));for(w=0;w<T;w++)M[w]!=null&&(a[w].style.display=M[w]);return a}f.fn.extend({show:function(){return rt(this,!0)},hide:function(){return rt(this)},toggle:function(a){return typeof a=="boolean"?a?this.show():this.hide():this.each(function(){Te(this)?f(this).show():f(this).hide()})}});var It=/^(?:checkbox|radio)$/i,zt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,bn=/^$|^module$|\/(?:java|ecma)script/i;(function(){var a=x.createDocumentFragment(),c=a.appendChild(x.createElement("div")),d=x.createElement("input");d.setAttribute("type","radio"),d.setAttribute("checked","checked"),d.setAttribute("name","t"),c.appendChild(d),b.checkClone=c.cloneNode(!0).cloneNode(!0).lastChild.checked,c.innerHTML="<textarea>x</textarea>",b.noCloneChecked=!!c.cloneNode(!0).lastChild.defaultValue,c.innerHTML="<option></option>",b.option=!!c.lastChild})();var ht={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ht.tbody=ht.tfoot=ht.colgroup=ht.caption=ht.thead,ht.th=ht.td,b.option||(ht.optgroup=ht.option=[1,"<select multiple='multiple'>","</select>"]);function At(a,c){var d;return typeof a.getElementsByTagName!="undefined"?d=a.getElementsByTagName(c||"*"):typeof a.querySelectorAll!="undefined"?d=a.querySelectorAll(c||"*"):d=[],c===void 0||c&&be(a,c)?f.merge([a],d):d}function Kt(a,c){for(var d=0,m=a.length;d<m;d++)re.set(a[d],"globalEval",!c||re.get(c[d],"globalEval"))}var ga=/<|&#?\w+;/;function br(a,c,d,m,M){for(var w,T,N,F,G,j,de=c.createDocumentFragment(),W=[],K=0,Oe=a.length;K<Oe;K++)if(w=a[K],w||w===0)if(L(w)==="object")f.merge(W,w.nodeType?[w]:w);else if(!ga.test(w))W.push(c.createTextNode(w));else{for(T=T||de.appendChild(c.createElement("div")),N=(zt.exec(w)||["",""])[1].toLowerCase(),F=ht[N]||ht._default,T.innerHTML=F[1]+f.htmlPrefilter(w)+F[2],j=F[0];j--;)T=T.lastChild;f.merge(W,T.childNodes),T=de.firstChild,T.textContent=""}for(de.textContent="",K=0;w=W[K++];){if(m&&f.inArray(w,m)>-1){M&&M.push(w);continue}if(G=Pe(w),T=At(de.appendChild(w),"script"),G&&Kt(T),d)for(j=0;w=T[j++];)bn.test(w.type||"")&&d.push(w)}return de}var Mr=/^([^.]*)(?:\.(.+)|)/;function nn(){return!0}function Un(){return!1}function ls(a,c){return a===va()==(c==="focus")}function va(){try{return x.activeElement}catch{}}function $n(a,c,d,m,M,w){var T,N;if(typeof c=="object"){typeof d!="string"&&(m=m||d,d=void 0);for(N in c)$n(a,N,d,m,c[N],w);return a}if(m==null&&M==null?(M=d,m=d=void 0):M==null&&(typeof d=="string"?(M=m,m=void 0):(M=m,m=d,d=void 0)),M===!1)M=Un;else if(!M)return a;return w===1&&(T=M,M=function(F){return f().off(F),T.apply(this,arguments)},M.guid=T.guid||(T.guid=f.guid++)),a.each(function(){f.event.add(this,c,M,m,d)})}f.event={global:{},add:function(a,c,d,m,M){var w,T,N,F,G,j,de,W,K,Oe,it,Ue=re.get(a);if(!!_e(a))for(d.handler&&(w=d,d=w.handler,M=w.selector),M&&f.find.matchesSelector(We,M),d.guid||(d.guid=f.guid++),(F=Ue.events)||(F=Ue.events=Object.create(null)),(T=Ue.handle)||(T=Ue.handle=function(Ot){return typeof f!="undefined"&&f.event.triggered!==Ot.type?f.event.dispatch.apply(a,arguments):void 0}),c=(c||"").match(Se)||[""],G=c.length;G--;)N=Mr.exec(c[G])||[],K=it=N[1],Oe=(N[2]||"").split(".").sort(),!!K&&(de=f.event.special[K]||{},K=(M?de.delegateType:de.bindType)||K,de=f.event.special[K]||{},j=f.extend({type:K,origType:it,data:m,handler:d,guid:d.guid,selector:M,needsContext:M&&f.expr.match.needsContext.test(M),namespace:Oe.join(".")},w),(W=F[K])||(W=F[K]=[],W.delegateCount=0,(!de.setup||de.setup.call(a,m,Oe,T)===!1)&&a.addEventListener&&a.addEventListener(K,T)),de.add&&(de.add.call(a,j),j.handler.guid||(j.handler.guid=d.guid)),M?W.splice(W.delegateCount++,0,j):W.push(j),f.event.global[K]=!0)},remove:function(a,c,d,m,M){var w,T,N,F,G,j,de,W,K,Oe,it,Ue=re.hasData(a)&&re.get(a);if(!(!Ue||!(F=Ue.events))){for(c=(c||"").match(Se)||[""],G=c.length;G--;){if(N=Mr.exec(c[G])||[],K=it=N[1],Oe=(N[2]||"").split(".").sort(),!K){for(K in F)f.event.remove(a,K+c[G],d,m,!0);continue}for(de=f.event.special[K]||{},K=(m?de.delegateType:de.bindType)||K,W=F[K]||[],N=N[2]&&new RegExp("(^|\\.)"+Oe.join("\\.(?:.*\\.|)")+"(\\.|$)"),T=w=W.length;w--;)j=W[w],(M||it===j.origType)&&(!d||d.guid===j.guid)&&(!N||N.test(j.namespace))&&(!m||m===j.selector||m==="**"&&j.selector)&&(W.splice(w,1),j.selector&&W.delegateCount--,de.remove&&de.remove.call(a,j));T&&!W.length&&((!de.teardown||de.teardown.call(a,Oe,Ue.handle)===!1)&&f.removeEvent(a,K,Ue.handle),delete F[K])}f.isEmptyObject(F)&&re.remove(a,"handle events")}},dispatch:function(a){var c,d,m,M,w,T,N=new Array(arguments.length),F=f.event.fix(a),G=(re.get(this,"events")||Object.create(null))[F.type]||[],j=f.event.special[F.type]||{};for(N[0]=F,c=1;c<arguments.length;c++)N[c]=arguments[c];if(F.delegateTarget=this,!(j.preDispatch&&j.preDispatch.call(this,F)===!1)){for(T=f.event.handlers.call(this,F,G),c=0;(M=T[c++])&&!F.isPropagationStopped();)for(F.currentTarget=M.elem,d=0;(w=M.handlers[d++])&&!F.isImmediatePropagationStopped();)(!F.rnamespace||w.namespace===!1||F.rnamespace.test(w.namespace))&&(F.handleObj=w,F.data=w.data,m=((f.event.special[w.origType]||{}).handle||w.handler).apply(M.elem,N),m!==void 0&&(F.result=m)===!1&&(F.preventDefault(),F.stopPropagation()));return j.postDispatch&&j.postDispatch.call(this,F),F.result}},handlers:function(a,c){var d,m,M,w,T,N=[],F=c.delegateCount,G=a.target;if(F&&G.nodeType&&!(a.type==="click"&&a.button>=1)){for(;G!==this;G=G.parentNode||this)if(G.nodeType===1&&!(a.type==="click"&&G.disabled===!0)){for(w=[],T={},d=0;d<F;d++)m=c[d],M=m.selector+" ",T[M]===void 0&&(T[M]=m.needsContext?f(M,this).index(G)>-1:f.find(M,this,null,[G]).length),T[M]&&w.push(m);w.length&&N.push({elem:G,handlers:w})}}return G=this,F<c.length&&N.push({elem:G,handlers:c.slice(F)}),N},addProp:function(a,c){Object.defineProperty(f.Event.prototype,a,{enumerable:!0,configurable:!0,get:S(c)?function(){if(this.originalEvent)return c(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(d){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:d})}})},fix:function(a){return a[f.expando]?a:new f.Event(a)},special:{load:{noBubble:!0},click:{setup:function(a){var c=this||a;return It.test(c.type)&&c.click&&be(c,"input")&&Ni(c,"click",nn),!1},trigger:function(a){var c=this||a;return It.test(c.type)&&c.click&&be(c,"input")&&Ni(c,"click"),!0},_default:function(a){var c=a.target;return It.test(c.type)&&c.click&&be(c,"input")&&re.get(c,"click")||be(c,"a")}},beforeunload:{postDispatch:function(a){a.result!==void 0&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}};function Ni(a,c,d){if(!d){re.get(a,c)===void 0&&f.event.add(a,c,nn);return}re.set(a,c,!1),f.event.add(a,c,{namespace:!1,handler:function(m){var M,w,T=re.get(this,c);if(m.isTrigger&1&&this[c]){if(T.length)(f.event.special[c]||{}).delegateType&&m.stopPropagation();else if(T=r.call(arguments),re.set(this,c,T),M=d(this,c),this[c](),w=re.get(this,c),T!==w||M?re.set(this,c,!1):w={},T!==w)return m.stopImmediatePropagation(),m.preventDefault(),w&&w.value}else T.length&&(re.set(this,c,{value:f.event.trigger(f.extend(T[0],f.Event.prototype),T.slice(1),this)}),m.stopImmediatePropagation())}})}f.removeEvent=function(a,c,d){a.removeEventListener&&a.removeEventListener(c,d)},f.Event=function(a,c){if(!(this instanceof f.Event))return new f.Event(a,c);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.defaultPrevented===void 0&&a.returnValue===!1?nn:Un,this.target=a.target&&a.target.nodeType===3?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,c&&f.extend(this,c),this.timeStamp=a&&a.timeStamp||Date.now(),this[f.expando]=!0},f.Event.prototype={constructor:f.Event,isDefaultPrevented:Un,isPropagationStopped:Un,isImmediatePropagationStopped:Un,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=nn,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=nn,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=nn,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},f.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},f.event.addProp),f.each({focus:"focusin",blur:"focusout"},function(a,c){f.event.special[a]={setup:function(){return Ni(this,a,ls),!1},trigger:function(){return Ni(this,a),!0},_default:function(){return!0},delegateType:c}}),f.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,c){f.event.special[a]={delegateType:c,bindType:c,handle:function(d){var m,M=this,w=d.relatedTarget,T=d.handleObj;return(!w||w!==M&&!f.contains(M,w))&&(d.type=T.origType,m=T.handler.apply(this,arguments),d.type=c),m}}}),f.fn.extend({on:function(a,c,d,m){return $n(this,a,c,d,m)},one:function(a,c,d,m){return $n(this,a,c,d,m,1)},off:function(a,c,d){var m,M;if(a&&a.preventDefault&&a.handleObj)return m=a.handleObj,f(a.delegateTarget).off(m.namespace?m.origType+"."+m.namespace:m.origType,m.selector,m.handler),this;if(typeof a=="object"){for(M in a)this.off(M,c,a[M]);return this}return(c===!1||typeof c=="function")&&(d=c,c=void 0),d===!1&&(d=Un),this.each(function(){f.event.remove(this,a,d,c)})}});var wr=/<script|<style|<link/i,cs=/checked\s*(?:[^=]|=\s*.checked.)/i,xa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function us(a,c){return be(a,"table")&&be(c.nodeType!==11?c:c.firstChild,"tr")&&f(a).children("tbody")[0]||a}function ya(a){return a.type=(a.getAttribute("type")!==null)+"/"+a.type,a}function D(a){return(a.type||"").slice(0,5)==="true/"?a.type=a.type.slice(5):a.removeAttribute("type"),a}function q(a,c){var d,m,M,w,T,N,F;if(c.nodeType===1){if(re.hasData(a)&&(w=re.get(a),F=w.events,F)){re.remove(c,"handle events");for(M in F)for(d=0,m=F[M].length;d<m;d++)f.event.add(c,M,F[M][d])}P.hasData(a)&&(T=P.access(a),N=f.extend({},T),P.set(c,N))}}function ne(a,c){var d=c.nodeName.toLowerCase();d==="input"&&It.test(a.type)?c.checked=a.checked:(d==="input"||d==="textarea")&&(c.defaultValue=a.defaultValue)}function Y(a,c,d,m){c=o(c);var M,w,T,N,F,G,j=0,de=a.length,W=de-1,K=c[0],Oe=S(K);if(Oe||de>1&&typeof K=="string"&&!b.checkClone&&cs.test(K))return a.each(function(it){var Ue=a.eq(it);Oe&&(c[0]=K.call(this,it,Ue.html())),Y(Ue,c,d,m)});if(de&&(M=br(c,a[0].ownerDocument,!1,a,m),w=M.firstChild,M.childNodes.length===1&&(M=w),w||m)){for(T=f.map(At(M,"script"),ya),N=T.length;j<de;j++)F=M,j!==W&&(F=f.clone(F,!0,!0),N&&f.merge(T,At(F,"script"))),d.call(a[j],F,j);if(N)for(G=T[T.length-1].ownerDocument,f.map(T,D),j=0;j<N;j++)F=T[j],bn.test(F.type||"")&&!re.access(F,"globalEval")&&f.contains(G,F)&&(F.src&&(F.type||"").toLowerCase()!=="module"?f._evalUrl&&!F.noModule&&f._evalUrl(F.src,{nonce:F.nonce||F.getAttribute("nonce")},G):B(F.textContent.replace(xa,""),F,G))}return a}function ce(a,c,d){for(var m,M=c?f.filter(c,a):a,w=0;(m=M[w])!=null;w++)!d&&m.nodeType===1&&f.cleanData(At(m)),m.parentNode&&(d&&Pe(m)&&Kt(At(m,"script")),m.parentNode.removeChild(m));return a}f.extend({htmlPrefilter:function(a){return a},clone:function(a,c,d){var m,M,w,T,N=a.cloneNode(!0),F=Pe(a);if(!b.noCloneChecked&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a))for(T=At(N),w=At(a),m=0,M=w.length;m<M;m++)ne(w[m],T[m]);if(c)if(d)for(w=w||At(a),T=T||At(N),m=0,M=w.length;m<M;m++)q(w[m],T[m]);else q(a,N);return T=At(N,"script"),T.length>0&&Kt(T,!F&&At(a,"script")),N},cleanData:function(a){for(var c,d,m,M=f.event.special,w=0;(d=a[w])!==void 0;w++)if(_e(d)){if(c=d[re.expando]){if(c.events)for(m in c.events)M[m]?f.event.remove(d,m):f.removeEvent(d,m,c.handle);d[re.expando]=void 0}d[P.expando]&&(d[P.expando]=void 0)}}}),f.fn.extend({detach:function(a){return ce(this,a,!0)},remove:function(a){return ce(this,a)},text:function(a){return Ce(this,function(c){return c===void 0?f.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=c)})},null,a,arguments.length)},append:function(){return Y(this,arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=us(this,a);c.appendChild(a)}})},prepend:function(){return Y(this,arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=us(this,a);c.insertBefore(a,c.firstChild)}})},before:function(){return Y(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Y(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,c=0;(a=this[c])!=null;c++)a.nodeType===1&&(f.cleanData(At(a,!1)),a.textContent="");return this},clone:function(a,c){return a=a==null?!1:a,c=c==null?a:c,this.map(function(){return f.clone(this,a,c)})},html:function(a){return Ce(this,function(c){var d=this[0]||{},m=0,M=this.length;if(c===void 0&&d.nodeType===1)return d.innerHTML;if(typeof c=="string"&&!wr.test(c)&&!ht[(zt.exec(c)||["",""])[1].toLowerCase()]){c=f.htmlPrefilter(c);try{for(;m<M;m++)d=this[m]||{},d.nodeType===1&&(f.cleanData(At(d,!1)),d.innerHTML=c);d=0}catch{}}d&&this.empty().append(c)},null,a,arguments.length)},replaceWith:function(){var a=[];return Y(this,arguments,function(c){var d=this.parentNode;f.inArray(this,a)<0&&(f.cleanData(At(this)),d&&d.replaceChild(c,this))},a)}}),f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,c){f.fn[a]=function(d){for(var m,M=[],w=f(d),T=w.length-1,N=0;N<=T;N++)m=N===T?this:this.clone(!0),f(w[N])[c](m),l.apply(M,m.get());return this.pushStack(M)}});var Ke=new RegExp("^("+Le+")(?!px)[a-z%]+$","i"),je=function(a){var c=a.ownerDocument.defaultView;return(!c||!c.opener)&&(c=e),c.getComputedStyle(a)},Xe=function(a,c,d){var m,M,w={};for(M in c)w[M]=a.style[M],a.style[M]=c[M];m=d.call(a);for(M in c)a.style[M]=w[M];return m},st=new RegExp(Re.join("|"),"i");(function(){function a(){if(!!G){F.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",G.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",We.appendChild(F).appendChild(G);var j=e.getComputedStyle(G);d=j.top!=="1%",N=c(j.marginLeft)===12,G.style.right="60%",w=c(j.right)===36,m=c(j.width)===36,G.style.position="absolute",M=c(G.offsetWidth/3)===12,We.removeChild(F),G=null}}function c(j){return Math.round(parseFloat(j))}var d,m,M,w,T,N,F=x.createElement("div"),G=x.createElement("div");!G.style||(G.style.backgroundClip="content-box",G.cloneNode(!0).style.backgroundClip="",b.clearCloneStyle=G.style.backgroundClip==="content-box",f.extend(b,{boxSizingReliable:function(){return a(),m},pixelBoxStyles:function(){return a(),w},pixelPosition:function(){return a(),d},reliableMarginLeft:function(){return a(),N},scrollboxSize:function(){return a(),M},reliableTrDimensions:function(){var j,de,W,K;return T==null&&(j=x.createElement("table"),de=x.createElement("tr"),W=x.createElement("div"),j.style.cssText="position:absolute;left:-11111px;border-collapse:separate",de.style.cssText="border:1px solid",de.style.height="1px",W.style.height="9px",W.style.display="block",We.appendChild(j).appendChild(de).appendChild(W),K=e.getComputedStyle(de),T=parseInt(K.height,10)+parseInt(K.borderTopWidth,10)+parseInt(K.borderBottomWidth,10)===de.offsetHeight,We.removeChild(j)),T}}))})();function ct(a,c,d){var m,M,w,T,N=a.style;return d=d||je(a),d&&(T=d.getPropertyValue(c)||d[c],T===""&&!Pe(a)&&(T=f.style(a,c)),!b.pixelBoxStyles()&&Ke.test(T)&&st.test(c)&&(m=N.width,M=N.minWidth,w=N.maxWidth,N.minWidth=N.maxWidth=N.width=T,T=d.width,N.width=m,N.minWidth=M,N.maxWidth=w)),T!==void 0?T+"":T}function at(a,c){return{get:function(){if(a()){delete this.get;return}return(this.get=c).apply(this,arguments)}}}var ut=["Webkit","Moz","ms"],Et=x.createElement("div").style,Rn={};function ft(a){for(var c=a[0].toUpperCase()+a.slice(1),d=ut.length;d--;)if(a=ut[d]+c,a in Et)return a}function kn(a){var c=f.cssProps[a]||Rn[a];return c||(a in Et?a:Rn[a]=ft(a)||a)}var yt=/^(none|table(?!-c[ea]).+)/,Pn=/^--/,Hn={position:"absolute",visibility:"hidden",display:"block"},Dn={letterSpacing:"0",fontWeight:"400"};function Mn(a,c,d){var m=Ve.exec(c);return m?Math.max(0,m[2]-(d||0))+(m[3]||"px"):c}function wt(a,c,d,m,M,w){var T=c==="width"?1:0,N=0,F=0;if(d===(m?"border":"content"))return 0;for(;T<4;T+=2)d==="margin"&&(F+=f.css(a,d+Re[T],!0,M)),m?(d==="content"&&(F-=f.css(a,"padding"+Re[T],!0,M)),d!=="margin"&&(F-=f.css(a,"border"+Re[T]+"Width",!0,M))):(F+=f.css(a,"padding"+Re[T],!0,M),d!=="padding"?F+=f.css(a,"border"+Re[T]+"Width",!0,M):N+=f.css(a,"border"+Re[T]+"Width",!0,M));return!m&&w>=0&&(F+=Math.max(0,Math.ceil(a["offset"+c[0].toUpperCase()+c.slice(1)]-w-F-N-.5))||0),F}function Qn(a,c,d){var m=je(a),M=!b.boxSizingReliable()||d,w=M&&f.css(a,"boxSizing",!1,m)==="border-box",T=w,N=ct(a,c,m),F="offset"+c[0].toUpperCase()+c.slice(1);if(Ke.test(N)){if(!d)return N;N="auto"}return(!b.boxSizingReliable()&&w||!b.reliableTrDimensions()&&be(a,"tr")||N==="auto"||!parseFloat(N)&&f.css(a,"display",!1,m)==="inline")&&a.getClientRects().length&&(w=f.css(a,"boxSizing",!1,m)==="border-box",T=F in a,T&&(N=a[F])),N=parseFloat(N)||0,N+wt(a,c,d||(w?"border":"content"),T,m,N)+"px"}f.extend({cssHooks:{opacity:{get:function(a,c){if(c){var d=ct(a,"opacity");return d===""?"1":d}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(a,c,d,m){if(!(!a||a.nodeType===3||a.nodeType===8||!a.style)){var M,w,T,N=fe(c),F=Pn.test(c),G=a.style;if(F||(c=kn(N)),T=f.cssHooks[c]||f.cssHooks[N],d!==void 0){if(w=typeof d,w==="string"&&(M=Ve.exec(d))&&M[1]&&(d=ue(a,c,M),w="number"),d==null||d!==d)return;w==="number"&&!F&&(d+=M&&M[3]||(f.cssNumber[N]?"":"px")),!b.clearCloneStyle&&d===""&&c.indexOf("background")===0&&(G[c]="inherit"),(!T||!("set"in T)||(d=T.set(a,d,m))!==void 0)&&(F?G.setProperty(c,d):G[c]=d)}else return T&&"get"in T&&(M=T.get(a,!1,m))!==void 0?M:G[c]}},css:function(a,c,d,m){var M,w,T,N=fe(c),F=Pn.test(c);return F||(c=kn(N)),T=f.cssHooks[c]||f.cssHooks[N],T&&"get"in T&&(M=T.get(a,!0,d)),M===void 0&&(M=ct(a,c,m)),M==="normal"&&c in Dn&&(M=Dn[c]),d===""||d?(w=parseFloat(M),d===!0||isFinite(w)?w||0:M):M}}),f.each(["height","width"],function(a,c){f.cssHooks[c]={get:function(d,m,M){if(m)return yt.test(f.css(d,"display"))&&(!d.getClientRects().length||!d.getBoundingClientRect().width)?Xe(d,Hn,function(){return Qn(d,c,M)}):Qn(d,c,M)},set:function(d,m,M){var w,T=je(d),N=!b.scrollboxSize()&&T.position==="absolute",F=N||M,G=F&&f.css(d,"boxSizing",!1,T)==="border-box",j=M?wt(d,c,M,G,T):0;return G&&N&&(j-=Math.ceil(d["offset"+c[0].toUpperCase()+c.slice(1)]-parseFloat(T[c])-wt(d,c,"border",!1,T)-.5)),j&&(w=Ve.exec(m))&&(w[3]||"px")!=="px"&&(d.style[c]=m,m=f.css(d,c)),Mn(d,m,j)}}}),f.cssHooks.marginLeft=at(b.reliableMarginLeft,function(a,c){if(c)return(parseFloat(ct(a,"marginLeft"))||a.getBoundingClientRect().left-Xe(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),f.each({margin:"",padding:"",border:"Width"},function(a,c){f.cssHooks[a+c]={expand:function(d){for(var m=0,M={},w=typeof d=="string"?d.split(" "):[d];m<4;m++)M[a+Re[m]+c]=w[m]||w[m-2]||w[0];return M}},a!=="margin"&&(f.cssHooks[a+c].set=Mn)}),f.fn.extend({css:function(a,c){return Ce(this,function(d,m,M){var w,T,N={},F=0;if(Array.isArray(m)){for(w=je(d),T=m.length;F<T;F++)N[m[F]]=f.css(d,m[F],!1,w);return N}return M!==void 0?f.style(d,m,M):f.css(d,m)},a,c,arguments.length>1)}});function St(a,c,d,m,M){return new St.prototype.init(a,c,d,m,M)}f.Tween=St,St.prototype={constructor:St,init:function(a,c,d,m,M,w){this.elem=a,this.prop=d,this.easing=M||f.easing._default,this.options=c,this.start=this.now=this.cur(),this.end=m,this.unit=w||(f.cssNumber[d]?"":"px")},cur:function(){var a=St.propHooks[this.prop];return a&&a.get?a.get(this):St.propHooks._default.get(this)},run:function(a){var c,d=St.propHooks[this.prop];return this.options.duration?this.pos=c=f.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=c=a,this.now=(this.end-this.start)*c+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),d&&d.set?d.set(this):St.propHooks._default.set(this),this}},St.prototype.init.prototype=St.prototype,St.propHooks={_default:{get:function(a){var c;return a.elem.nodeType!==1||a.elem[a.prop]!=null&&a.elem.style[a.prop]==null?a.elem[a.prop]:(c=f.css(a.elem,a.prop,""),!c||c==="auto"?0:c)},set:function(a){f.fx.step[a.prop]?f.fx.step[a.prop](a):a.elem.nodeType===1&&(f.cssHooks[a.prop]||a.elem.style[kn(a.prop)]!=null)?f.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},St.propHooks.scrollTop=St.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},f.easing={linear:function(a){return a},swing:function(a){return .5-Math.cos(a*Math.PI)/2},_default:"swing"},f.fx=St.prototype.init,f.fx.step={};var Fi,hs,Ju=/^(?:toggle|show|hide)$/,$u=/queueHooks$/;function _a(){hs&&(x.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(_a):e.setTimeout(_a,f.fx.interval),f.fx.tick())}function nl(){return e.setTimeout(function(){Fi=void 0}),Fi=Date.now()}function fs(a,c){var d,m=0,M={height:a};for(c=c?1:0;m<4;m+=2-c)d=Re[m],M["margin"+d]=M["padding"+d]=a;return c&&(M.opacity=M.width=a),M}function il(a,c,d){for(var m,M=(wn.tweeners[c]||[]).concat(wn.tweeners["*"]),w=0,T=M.length;w<T;w++)if(m=M[w].call(d,c,a))return m}function Qu(a,c,d){var m,M,w,T,N,F,G,j,de="width"in c||"height"in c,W=this,K={},Oe=a.style,it=a.nodeType&&Te(a),Ue=re.get(a,"fxshow");d.queue||(T=f._queueHooks(a,"fx"),T.unqueued==null&&(T.unqueued=0,N=T.empty.fire,T.empty.fire=function(){T.unqueued||N()}),T.unqueued++,W.always(function(){W.always(function(){T.unqueued--,f.queue(a,"fx").length||T.empty.fire()})}));for(m in c)if(M=c[m],Ju.test(M)){if(delete c[m],w=w||M==="toggle",M===(it?"hide":"show"))if(M==="show"&&Ue&&Ue[m]!==void 0)it=!0;else continue;K[m]=Ue&&Ue[m]||f.style(a,m)}if(F=!f.isEmptyObject(c),!(!F&&f.isEmptyObject(K))){de&&a.nodeType===1&&(d.overflow=[Oe.overflow,Oe.overflowX,Oe.overflowY],G=Ue&&Ue.display,G==null&&(G=re.get(a,"display")),j=f.css(a,"display"),j==="none"&&(G?j=G:(rt([a],!0),G=a.style.display||G,j=f.css(a,"display"),rt([a]))),(j==="inline"||j==="inline-block"&&G!=null)&&f.css(a,"float")==="none"&&(F||(W.done(function(){Oe.display=G}),G==null&&(j=Oe.display,G=j==="none"?"":j)),Oe.display="inline-block")),d.overflow&&(Oe.overflow="hidden",W.always(function(){Oe.overflow=d.overflow[0],Oe.overflowX=d.overflow[1],Oe.overflowY=d.overflow[2]})),F=!1;for(m in K)F||(Ue?"hidden"in Ue&&(it=Ue.hidden):Ue=re.access(a,"fxshow",{display:G}),w&&(Ue.hidden=!it),it&&rt([a],!0),W.done(function(){it||rt([a]),re.remove(a,"fxshow");for(m in K)f.style(a,m,K[m])})),F=il(it?Ue[m]:0,m,W),m in Ue||(Ue[m]=F.start,it&&(F.end=F.start,F.start=0))}}function Ku(a,c){var d,m,M,w,T;for(d in a)if(m=fe(d),M=c[m],w=a[d],Array.isArray(w)&&(M=w[1],w=a[d]=w[0]),d!==m&&(a[m]=w,delete a[d]),T=f.cssHooks[m],T&&"expand"in T){w=T.expand(w),delete a[m];for(d in w)d in a||(a[d]=w[d],c[d]=M)}else c[m]=M}function wn(a,c,d){var m,M,w=0,T=wn.prefilters.length,N=f.Deferred().always(function(){delete F.elem}),F=function(){if(M)return!1;for(var de=Fi||nl(),W=Math.max(0,G.startTime+G.duration-de),K=W/G.duration||0,Oe=1-K,it=0,Ue=G.tweens.length;it<Ue;it++)G.tweens[it].run(Oe);return N.notifyWith(a,[G,Oe,W]),Oe<1&&Ue?W:(Ue||N.notifyWith(a,[G,1,0]),N.resolveWith(a,[G]),!1)},G=N.promise({elem:a,props:f.extend({},c),opts:f.extend(!0,{specialEasing:{},easing:f.easing._default},d),originalProperties:c,originalOptions:d,startTime:Fi||nl(),duration:d.duration,tweens:[],createTween:function(de,W){var K=f.Tween(a,G.opts,de,W,G.opts.specialEasing[de]||G.opts.easing);return G.tweens.push(K),K},stop:function(de){var W=0,K=de?G.tweens.length:0;if(M)return this;for(M=!0;W<K;W++)G.tweens[W].run(1);return de?(N.notifyWith(a,[G,1,0]),N.resolveWith(a,[G,de])):N.rejectWith(a,[G,de]),this}}),j=G.props;for(Ku(j,G.opts.specialEasing);w<T;w++)if(m=wn.prefilters[w].call(G,a,j,G.opts),m)return S(m.stop)&&(f._queueHooks(G.elem,G.opts.queue).stop=m.stop.bind(m)),m;return f.map(j,il,G),S(G.opts.start)&&G.opts.start.call(a,G),G.progress(G.opts.progress).done(G.opts.done,G.opts.complete).fail(G.opts.fail).always(G.opts.always),f.fx.timer(f.extend(F,{elem:a,anim:G,queue:G.opts.queue})),G}f.Animation=f.extend(wn,{tweeners:{"*":[function(a,c){var d=this.createTween(a,c);return ue(d.elem,a,Ve.exec(c),d),d}]},tweener:function(a,c){S(a)?(c=a,a=["*"]):a=a.match(Se);for(var d,m=0,M=a.length;m<M;m++)d=a[m],wn.tweeners[d]=wn.tweeners[d]||[],wn.tweeners[d].unshift(c)},prefilters:[Qu],prefilter:function(a,c){c?wn.prefilters.unshift(a):wn.prefilters.push(a)}}),f.speed=function(a,c,d){var m=a&&typeof a=="object"?f.extend({},a):{complete:d||!d&&c||S(a)&&a,duration:a,easing:d&&c||c&&!S(c)&&c};return f.fx.off?m.duration=0:typeof m.duration!="number"&&(m.duration in f.fx.speeds?m.duration=f.fx.speeds[m.duration]:m.duration=f.fx.speeds._default),(m.queue==null||m.queue===!0)&&(m.queue="fx"),m.old=m.complete,m.complete=function(){S(m.old)&&m.old.call(this),m.queue&&f.dequeue(this,m.queue)},m},f.fn.extend({fadeTo:function(a,c,d,m){return this.filter(Te).css("opacity",0).show().end().animate({opacity:c},a,d,m)},animate:function(a,c,d,m){var M=f.isEmptyObject(a),w=f.speed(c,d,m),T=function(){var N=wn(this,f.extend({},a),w);(M||re.get(this,"finish"))&&N.stop(!0)};return T.finish=T,M||w.queue===!1?this.each(T):this.queue(w.queue,T)},stop:function(a,c,d){var m=function(M){var w=M.stop;delete M.stop,w(d)};return typeof a!="string"&&(d=c,c=a,a=void 0),c&&this.queue(a||"fx",[]),this.each(function(){var M=!0,w=a!=null&&a+"queueHooks",T=f.timers,N=re.get(this);if(w)N[w]&&N[w].stop&&m(N[w]);else for(w in N)N[w]&&N[w].stop&&$u.test(w)&&m(N[w]);for(w=T.length;w--;)T[w].elem===this&&(a==null||T[w].queue===a)&&(T[w].anim.stop(d),M=!1,T.splice(w,1));(M||!d)&&f.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var c,d=re.get(this),m=d[a+"queue"],M=d[a+"queueHooks"],w=f.timers,T=m?m.length:0;for(d.finish=!0,f.queue(this,a,[]),M&&M.stop&&M.stop.call(this,!0),c=w.length;c--;)w[c].elem===this&&w[c].queue===a&&(w[c].anim.stop(!0),w.splice(c,1));for(c=0;c<T;c++)m[c]&&m[c].finish&&m[c].finish.call(this);delete d.finish})}}),f.each(["toggle","show","hide"],function(a,c){var d=f.fn[c];f.fn[c]=function(m,M,w){return m==null||typeof m=="boolean"?d.apply(this,arguments):this.animate(fs(c,!0),m,M,w)}}),f.each({slideDown:fs("show"),slideUp:fs("hide"),slideToggle:fs("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,c){f.fn[a]=function(d,m,M){return this.animate(c,d,m,M)}}),f.timers=[],f.fx.tick=function(){var a,c=0,d=f.timers;for(Fi=Date.now();c<d.length;c++)a=d[c],!a()&&d[c]===a&&d.splice(c--,1);d.length||f.fx.stop(),Fi=void 0},f.fx.timer=function(a){f.timers.push(a),f.fx.start()},f.fx.interval=13,f.fx.start=function(){hs||(hs=!0,_a())},f.fx.stop=function(){hs=null},f.fx.speeds={slow:600,fast:200,_default:400},f.fn.delay=function(a,c){return a=f.fx&&f.fx.speeds[a]||a,c=c||"fx",this.queue(c,function(d,m){var M=e.setTimeout(d,a);m.stop=function(){e.clearTimeout(M)}})},function(){var a=x.createElement("input"),c=x.createElement("select"),d=c.appendChild(x.createElement("option"));a.type="checkbox",b.checkOn=a.value!=="",b.optSelected=d.selected,a=x.createElement("input"),a.value="t",a.type="radio",b.radioValue=a.value==="t"}();var rl,Sr=f.expr.attrHandle;f.fn.extend({attr:function(a,c){return Ce(this,f.attr,a,c,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})}}),f.extend({attr:function(a,c,d){var m,M,w=a.nodeType;if(!(w===3||w===8||w===2)){if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);if((w!==1||!f.isXMLDoc(a))&&(M=f.attrHooks[c.toLowerCase()]||(f.expr.match.bool.test(c)?rl:void 0)),d!==void 0){if(d===null){f.removeAttr(a,c);return}return M&&"set"in M&&(m=M.set(a,d,c))!==void 0?m:(a.setAttribute(c,d+""),d)}return M&&"get"in M&&(m=M.get(a,c))!==null?m:(m=f.find.attr(a,c),m==null?void 0:m)}},attrHooks:{type:{set:function(a,c){if(!b.radioValue&&c==="radio"&&be(a,"input")){var d=a.value;return a.setAttribute("type",c),d&&(a.value=d),c}}}},removeAttr:function(a,c){var d,m=0,M=c&&c.match(Se);if(M&&a.nodeType===1)for(;d=M[m++];)a.removeAttribute(d)}}),rl={set:function(a,c,d){return c===!1?f.removeAttr(a,d):a.setAttribute(d,d),d}},f.each(f.expr.match.bool.source.match(/\w+/g),function(a,c){var d=Sr[c]||f.find.attr;Sr[c]=function(m,M,w){var T,N,F=M.toLowerCase();return w||(N=Sr[F],Sr[F]=T,T=d(m,M,w)!=null?F:null,Sr[F]=N),T}});var eh=/^(?:input|select|textarea|button)$/i,th=/^(?:a|area)$/i;f.fn.extend({prop:function(a,c){return Ce(this,f.prop,a,c,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[f.propFix[a]||a]})}}),f.extend({prop:function(a,c,d){var m,M,w=a.nodeType;if(!(w===3||w===8||w===2))return(w!==1||!f.isXMLDoc(a))&&(c=f.propFix[c]||c,M=f.propHooks[c]),d!==void 0?M&&"set"in M&&(m=M.set(a,d,c))!==void 0?m:a[c]=d:M&&"get"in M&&(m=M.get(a,c))!==null?m:a[c]},propHooks:{tabIndex:{get:function(a){var c=f.find.attr(a,"tabindex");return c?parseInt(c,10):eh.test(a.nodeName)||th.test(a.nodeName)&&a.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),b.optSelected||(f.propHooks.selected={get:function(a){var c=a.parentNode;return c&&c.parentNode&&c.parentNode.selectedIndex,null},set:function(a){var c=a.parentNode;c&&(c.selectedIndex,c.parentNode&&c.parentNode.selectedIndex)}}),f.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){f.propFix[this.toLowerCase()]=this});function yi(a){var c=a.match(Se)||[];return c.join(" ")}function _i(a){return a.getAttribute&&a.getAttribute("class")||""}function ba(a){return Array.isArray(a)?a:typeof a=="string"?a.match(Se)||[]:[]}f.fn.extend({addClass:function(a){var c,d,m,M,w,T,N,F=0;if(S(a))return this.each(function(G){f(this).addClass(a.call(this,G,_i(this)))});if(c=ba(a),c.length){for(;d=this[F++];)if(M=_i(d),m=d.nodeType===1&&" "+yi(M)+" ",m){for(T=0;w=c[T++];)m.indexOf(" "+w+" ")<0&&(m+=w+" ");N=yi(m),M!==N&&d.setAttribute("class",N)}}return this},removeClass:function(a){var c,d,m,M,w,T,N,F=0;if(S(a))return this.each(function(G){f(this).removeClass(a.call(this,G,_i(this)))});if(!arguments.length)return this.attr("class","");if(c=ba(a),c.length){for(;d=this[F++];)if(M=_i(d),m=d.nodeType===1&&" "+yi(M)+" ",m){for(T=0;w=c[T++];)for(;m.indexOf(" "+w+" ")>-1;)m=m.replace(" "+w+" "," ");N=yi(m),M!==N&&d.setAttribute("class",N)}}return this},toggleClass:function(a,c){var d=typeof a,m=d==="string"||Array.isArray(a);return typeof c=="boolean"&&m?c?this.addClass(a):this.removeClass(a):S(a)?this.each(function(M){f(this).toggleClass(a.call(this,M,_i(this),c),c)}):this.each(function(){var M,w,T,N;if(m)for(w=0,T=f(this),N=ba(a);M=N[w++];)T.hasClass(M)?T.removeClass(M):T.addClass(M);else(a===void 0||d==="boolean")&&(M=_i(this),M&&re.set(this,"__className__",M),this.setAttribute&&this.setAttribute("class",M||a===!1?"":re.get(this,"__className__")||""))})},hasClass:function(a){var c,d,m=0;for(c=" "+a+" ";d=this[m++];)if(d.nodeType===1&&(" "+yi(_i(d))+" ").indexOf(c)>-1)return!0;return!1}});var nh=/\r/g;f.fn.extend({val:function(a){var c,d,m,M=this[0];return arguments.length?(m=S(a),this.each(function(w){var T;this.nodeType===1&&(m?T=a.call(this,w,f(this).val()):T=a,T==null?T="":typeof T=="number"?T+="":Array.isArray(T)&&(T=f.map(T,function(N){return N==null?"":N+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()],(!c||!("set"in c)||c.set(this,T,"value")===void 0)&&(this.value=T))})):M?(c=f.valHooks[M.type]||f.valHooks[M.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(M,"value"))!==void 0?d:(d=M.value,typeof d=="string"?d.replace(nh,""):d==null?"":d)):void 0}}),f.extend({valHooks:{option:{get:function(a){var c=f.find.attr(a,"value");return c!=null?c:yi(f.text(a))}},select:{get:function(a){var c,d,m,M=a.options,w=a.selectedIndex,T=a.type==="select-one",N=T?null:[],F=T?w+1:M.length;for(w<0?m=F:m=T?w:0;m<F;m++)if(d=M[m],(d.selected||m===w)&&!d.disabled&&(!d.parentNode.disabled||!be(d.parentNode,"optgroup"))){if(c=f(d).val(),T)return c;N.push(c)}return N},set:function(a,c){for(var d,m,M=a.options,w=f.makeArray(c),T=M.length;T--;)m=M[T],(m.selected=f.inArray(f.valHooks.option.get(m),w)>-1)&&(d=!0);return d||(a.selectedIndex=-1),w}}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]={set:function(a,c){if(Array.isArray(c))return a.checked=f.inArray(f(a).val(),c)>-1}},b.checkOn||(f.valHooks[this].get=function(a){return a.getAttribute("value")===null?"on":a.value})}),b.focusin="onfocusin"in e;var sl=/^(?:focusinfocus|focusoutblur)$/,al=function(a){a.stopPropagation()};f.extend(f.event,{trigger:function(a,c,d,m){var M,w,T,N,F,G,j,de,W=[d||x],K=g.call(a,"type")?a.type:a,Oe=g.call(a,"namespace")?a.namespace.split("."):[];if(w=de=T=d=d||x,!(d.nodeType===3||d.nodeType===8)&&!sl.test(K+f.event.triggered)&&(K.indexOf(".")>-1&&(Oe=K.split("."),K=Oe.shift(),Oe.sort()),F=K.indexOf(":")<0&&"on"+K,a=a[f.expando]?a:new f.Event(K,typeof a=="object"&&a),a.isTrigger=m?2:3,a.namespace=Oe.join("."),a.rnamespace=a.namespace?new RegExp("(^|\\.)"+Oe.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,a.result=void 0,a.target||(a.target=d),c=c==null?[a]:f.makeArray(c,[a]),j=f.event.special[K]||{},!(!m&&j.trigger&&j.trigger.apply(d,c)===!1))){if(!m&&!j.noBubble&&!R(d)){for(N=j.delegateType||K,sl.test(N+K)||(w=w.parentNode);w;w=w.parentNode)W.push(w),T=w;T===(d.ownerDocument||x)&&W.push(T.defaultView||T.parentWindow||e)}for(M=0;(w=W[M++])&&!a.isPropagationStopped();)de=w,a.type=M>1?N:j.bindType||K,G=(re.get(w,"events")||Object.create(null))[a.type]&&re.get(w,"handle"),G&&G.apply(w,c),G=F&&w[F],G&&G.apply&&_e(w)&&(a.result=G.apply(w,c),a.result===!1&&a.preventDefault());return a.type=K,!m&&!a.isDefaultPrevented()&&(!j._default||j._default.apply(W.pop(),c)===!1)&&_e(d)&&F&&S(d[K])&&!R(d)&&(T=d[F],T&&(d[F]=null),f.event.triggered=K,a.isPropagationStopped()&&de.addEventListener(K,al),d[K](),a.isPropagationStopped()&&de.removeEventListener(K,al),f.event.triggered=void 0,T&&(d[F]=T)),a.result}},simulate:function(a,c,d){var m=f.extend(new f.Event,d,{type:a,isSimulated:!0});f.event.trigger(m,null,c)}}),f.fn.extend({trigger:function(a,c){return this.each(function(){f.event.trigger(a,c,this)})},triggerHandler:function(a,c){var d=this[0];if(d)return f.event.trigger(a,c,d,!0)}}),b.focusin||f.each({focus:"focusin",blur:"focusout"},function(a,c){var d=function(m){f.event.simulate(c,m.target,f.event.fix(m))};f.event.special[c]={setup:function(){var m=this.ownerDocument||this.document||this,M=re.access(m,c);M||m.addEventListener(a,d,!0),re.access(m,c,(M||0)+1)},teardown:function(){var m=this.ownerDocument||this.document||this,M=re.access(m,c)-1;M?re.access(m,c,M):(m.removeEventListener(a,d,!0),re.remove(m,c))}}});var Tr=e.location,ol={guid:Date.now()},Ma=/\?/;f.parseXML=function(a){var c,d;if(!a||typeof a!="string")return null;try{c=new e.DOMParser().parseFromString(a,"text/xml")}catch{}return d=c&&c.getElementsByTagName("parsererror")[0],(!c||d)&&f.error("Invalid XML: "+(d?f.map(d.childNodes,function(m){return m.textContent}).join(`
`):a)),c};var ih=/\[\]$/,ll=/\r?\n/g,rh=/^(?:submit|button|image|reset|file)$/i,sh=/^(?:input|select|textarea|keygen)/i;function wa(a,c,d,m){var M;if(Array.isArray(c))f.each(c,function(w,T){d||ih.test(a)?m(a,T):wa(a+"["+(typeof T=="object"&&T!=null?w:"")+"]",T,d,m)});else if(!d&&L(c)==="object")for(M in c)wa(a+"["+M+"]",c[M],d,m);else m(a,c)}f.param=function(a,c){var d,m=[],M=function(w,T){var N=S(T)?T():T;m[m.length]=encodeURIComponent(w)+"="+encodeURIComponent(N==null?"":N)};if(a==null)return"";if(Array.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){M(this.name,this.value)});else for(d in a)wa(d,a[d],c,M);return m.join("&")},f.fn.extend({serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=f.prop(this,"elements");return a?f.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!f(this).is(":disabled")&&sh.test(this.nodeName)&&!rh.test(a)&&(this.checked||!It.test(a))}).map(function(a,c){var d=f(this).val();return d==null?null:Array.isArray(d)?f.map(d,function(m){return{name:c.name,value:m.replace(ll,`\r
`)}}):{name:c.name,value:d.replace(ll,`\r
`)}}).get()}});var ah=/%20/g,oh=/#.*$/,lh=/([?&])_=[^&]*/,ch=/^(.*?):[ \t]*([^\r\n]*)$/mg,uh=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,hh=/^(?:GET|HEAD)$/,fh=/^\/\//,cl={},Sa={},ul="*/".concat("*"),Ta=x.createElement("a");Ta.href=Tr.href;function hl(a){return function(c,d){typeof c!="string"&&(d=c,c="*");var m,M=0,w=c.toLowerCase().match(Se)||[];if(S(d))for(;m=w[M++];)m[0]==="+"?(m=m.slice(1)||"*",(a[m]=a[m]||[]).unshift(d)):(a[m]=a[m]||[]).push(d)}}function fl(a,c,d,m){var M={},w=a===Sa;function T(N){var F;return M[N]=!0,f.each(a[N]||[],function(G,j){var de=j(c,d,m);if(typeof de=="string"&&!w&&!M[de])return c.dataTypes.unshift(de),T(de),!1;if(w)return!(F=de)}),F}return T(c.dataTypes[0])||!M["*"]&&T("*")}function Ea(a,c){var d,m,M=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==void 0&&((M[d]?a:m||(m={}))[d]=c[d]);return m&&f.extend(!0,a,m),a}function dh(a,c,d){for(var m,M,w,T,N=a.contents,F=a.dataTypes;F[0]==="*";)F.shift(),m===void 0&&(m=a.mimeType||c.getResponseHeader("Content-Type"));if(m){for(M in N)if(N[M]&&N[M].test(m)){F.unshift(M);break}}if(F[0]in d)w=F[0];else{for(M in d){if(!F[0]||a.converters[M+" "+F[0]]){w=M;break}T||(T=M)}w=w||T}if(w)return w!==F[0]&&F.unshift(w),d[w]}function ph(a,c,d,m){var M,w,T,N,F,G={},j=a.dataTypes.slice();if(j[1])for(T in a.converters)G[T.toLowerCase()]=a.converters[T];for(w=j.shift();w;)if(a.responseFields[w]&&(d[a.responseFields[w]]=c),!F&&m&&a.dataFilter&&(c=a.dataFilter(c,a.dataType)),F=w,w=j.shift(),w){if(w==="*")w=F;else if(F!=="*"&&F!==w){if(T=G[F+" "+w]||G["* "+w],!T){for(M in G)if(N=M.split(" "),N[1]===w&&(T=G[F+" "+N[0]]||G["* "+N[0]],T)){T===!0?T=G[M]:G[M]!==!0&&(w=N[0],j.unshift(N[1]));break}}if(T!==!0)if(T&&a.throws)c=T(c);else try{c=T(c)}catch(de){return{state:"parsererror",error:T?de:"No conversion from "+F+" to "+w}}}}return{state:"success",data:c}}f.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tr.href,type:"GET",isLocal:uh.test(Tr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ul,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":f.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,c){return c?Ea(Ea(a,f.ajaxSettings),c):Ea(f.ajaxSettings,a)},ajaxPrefilter:hl(cl),ajaxTransport:hl(Sa),ajax:function(a,c){typeof a=="object"&&(c=a,a=void 0),c=c||{};var d,m,M,w,T,N,F,G,j,de,W=f.ajaxSetup({},c),K=W.context||W,Oe=W.context&&(K.nodeType||K.jquery)?f(K):f.event,it=f.Deferred(),Ue=f.Callbacks("once memory"),Ot=W.statusCode||{},Ft={},cn={},vt="canceled",tt={readyState:0,getResponseHeader:function(dt){var Pt;if(F){if(!w)for(w={};Pt=ch.exec(M);)w[Pt[1].toLowerCase()+" "]=(w[Pt[1].toLowerCase()+" "]||[]).concat(Pt[2]);Pt=w[dt.toLowerCase()+" "]}return Pt==null?null:Pt.join(", ")},getAllResponseHeaders:function(){return F?M:null},setRequestHeader:function(dt,Pt){return F==null&&(dt=cn[dt.toLowerCase()]=cn[dt.toLowerCase()]||dt,Ft[dt]=Pt),this},overrideMimeType:function(dt){return F==null&&(W.mimeType=dt),this},statusCode:function(dt){var Pt;if(dt)if(F)tt.always(dt[tt.status]);else for(Pt in dt)Ot[Pt]=[Ot[Pt],dt[Pt]];return this},abort:function(dt){var Pt=dt||vt;return d&&d.abort(Pt),rn(0,Pt),this}};if(it.promise(tt),W.url=((a||W.url||Tr.href)+"").replace(fh,Tr.protocol+"//"),W.type=c.method||c.type||W.method||W.type,W.dataTypes=(W.dataType||"*").toLowerCase().match(Se)||[""],W.crossDomain==null){N=x.createElement("a");try{N.href=W.url,N.href=N.href,W.crossDomain=Ta.protocol+"//"+Ta.host!=N.protocol+"//"+N.host}catch{W.crossDomain=!0}}if(W.data&&W.processData&&typeof W.data!="string"&&(W.data=f.param(W.data,W.traditional)),fl(cl,W,c,tt),F)return tt;G=f.event&&W.global,G&&f.active++==0&&f.event.trigger("ajaxStart"),W.type=W.type.toUpperCase(),W.hasContent=!hh.test(W.type),m=W.url.replace(oh,""),W.hasContent?W.data&&W.processData&&(W.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(W.data=W.data.replace(ah,"+")):(de=W.url.slice(m.length),W.data&&(W.processData||typeof W.data=="string")&&(m+=(Ma.test(m)?"&":"?")+W.data,delete W.data),W.cache===!1&&(m=m.replace(lh,"$1"),de=(Ma.test(m)?"&":"?")+"_="+ol.guid+++de),W.url=m+de),W.ifModified&&(f.lastModified[m]&&tt.setRequestHeader("If-Modified-Since",f.lastModified[m]),f.etag[m]&&tt.setRequestHeader("If-None-Match",f.etag[m])),(W.data&&W.hasContent&&W.contentType!==!1||c.contentType)&&tt.setRequestHeader("Content-Type",W.contentType),tt.setRequestHeader("Accept",W.dataTypes[0]&&W.accepts[W.dataTypes[0]]?W.accepts[W.dataTypes[0]]+(W.dataTypes[0]!=="*"?", "+ul+"; q=0.01":""):W.accepts["*"]);for(j in W.headers)tt.setRequestHeader(j,W.headers[j]);if(W.beforeSend&&(W.beforeSend.call(K,tt,W)===!1||F))return tt.abort();if(vt="abort",Ue.add(W.complete),tt.done(W.success),tt.fail(W.error),d=fl(Sa,W,c,tt),!d)rn(-1,"No Transport");else{if(tt.readyState=1,G&&Oe.trigger("ajaxSend",[tt,W]),F)return tt;W.async&&W.timeout>0&&(T=e.setTimeout(function(){tt.abort("timeout")},W.timeout));try{F=!1,d.send(Ft,rn)}catch(dt){if(F)throw dt;rn(-1,dt)}}function rn(dt,Pt,Ar,ds){var un,bi,Mi,sn,Kn,vn=Pt;F||(F=!0,T&&e.clearTimeout(T),d=void 0,M=ds||"",tt.readyState=dt>0?4:0,un=dt>=200&&dt<300||dt===304,Ar&&(sn=dh(W,tt,Ar)),!un&&f.inArray("script",W.dataTypes)>-1&&f.inArray("json",W.dataTypes)<0&&(W.converters["text script"]=function(){}),sn=ph(W,sn,tt,un),un?(W.ifModified&&(Kn=tt.getResponseHeader("Last-Modified"),Kn&&(f.lastModified[m]=Kn),Kn=tt.getResponseHeader("etag"),Kn&&(f.etag[m]=Kn)),dt===204||W.type==="HEAD"?vn="nocontent":dt===304?vn="notmodified":(vn=sn.state,bi=sn.data,Mi=sn.error,un=!Mi)):(Mi=vn,(dt||!vn)&&(vn="error",dt<0&&(dt=0))),tt.status=dt,tt.statusText=(Pt||vn)+"",un?it.resolveWith(K,[bi,vn,tt]):it.rejectWith(K,[tt,vn,Mi]),tt.statusCode(Ot),Ot=void 0,G&&Oe.trigger(un?"ajaxSuccess":"ajaxError",[tt,W,un?bi:Mi]),Ue.fireWith(K,[tt,vn]),G&&(Oe.trigger("ajaxComplete",[tt,W]),--f.active||f.event.trigger("ajaxStop")))}return tt},getJSON:function(a,c,d){return f.get(a,c,d,"json")},getScript:function(a,c){return f.get(a,void 0,c,"script")}}),f.each(["get","post"],function(a,c){f[c]=function(d,m,M,w){return S(m)&&(w=w||M,M=m,m=void 0),f.ajax(f.extend({url:d,type:c,dataType:w,data:m,success:M},f.isPlainObject(d)&&d))}}),f.ajaxPrefilter(function(a){var c;for(c in a.headers)c.toLowerCase()==="content-type"&&(a.contentType=a.headers[c]||"")}),f._evalUrl=function(a,c,d){return f.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(m){f.globalEval(m,c,d)}})},f.fn.extend({wrapAll:function(a){var c;return this[0]&&(S(a)&&(a=a.call(this[0])),c=f(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&c.insertBefore(this[0]),c.map(function(){for(var d=this;d.firstElementChild;)d=d.firstElementChild;return d}).append(this)),this},wrapInner:function(a){return S(a)?this.each(function(c){f(this).wrapInner(a.call(this,c))}):this.each(function(){var c=f(this),d=c.contents();d.length?d.wrapAll(a):c.append(a)})},wrap:function(a){var c=S(a);return this.each(function(d){f(this).wrapAll(c?a.call(this,d):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){f(this).replaceWith(this.childNodes)}),this}}),f.expr.pseudos.hidden=function(a){return!f.expr.pseudos.visible(a)},f.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},f.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var mh={0:200,1223:204},Er=f.ajaxSettings.xhr();b.cors=!!Er&&"withCredentials"in Er,b.ajax=Er=!!Er,f.ajaxTransport(function(a){var c,d;if(b.cors||Er&&!a.crossDomain)return{send:function(m,M){var w,T=a.xhr();if(T.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(w in a.xhrFields)T[w]=a.xhrFields[w];a.mimeType&&T.overrideMimeType&&T.overrideMimeType(a.mimeType),!a.crossDomain&&!m["X-Requested-With"]&&(m["X-Requested-With"]="XMLHttpRequest");for(w in m)T.setRequestHeader(w,m[w]);c=function(N){return function(){c&&(c=d=T.onload=T.onerror=T.onabort=T.ontimeout=T.onreadystatechange=null,N==="abort"?T.abort():N==="error"?typeof T.status!="number"?M(0,"error"):M(T.status,T.statusText):M(mh[T.status]||T.status,T.statusText,(T.responseType||"text")!=="text"||typeof T.responseText!="string"?{binary:T.response}:{text:T.responseText},T.getAllResponseHeaders()))}},T.onload=c(),d=T.onerror=T.ontimeout=c("error"),T.onabort!==void 0?T.onabort=d:T.onreadystatechange=function(){T.readyState===4&&e.setTimeout(function(){c&&d()})},c=c("abort");try{T.send(a.hasContent&&a.data||null)}catch(N){if(c)throw N}},abort:function(){c&&c()}}}),f.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return f.globalEval(a),a}}}),f.ajaxPrefilter("script",function(a){a.cache===void 0&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),f.ajaxTransport("script",function(a){if(a.crossDomain||a.scriptAttrs){var c,d;return{send:function(m,M){c=f("<script>").attr(a.scriptAttrs||{}).prop({charset:a.scriptCharset,src:a.url}).on("load error",d=function(w){c.remove(),d=null,w&&M(w.type==="error"?404:200,w.type)}),x.head.appendChild(c[0])},abort:function(){d&&d()}}}});var dl=[],Aa=/(=)\?(?=&|$)|\?\?/;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=dl.pop()||f.expando+"_"+ol.guid++;return this[a]=!0,a}}),f.ajaxPrefilter("json jsonp",function(a,c,d){var m,M,w,T=a.jsonp!==!1&&(Aa.test(a.url)?"url":typeof a.data=="string"&&(a.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Aa.test(a.data)&&"data");if(T||a.dataTypes[0]==="jsonp")return m=a.jsonpCallback=S(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,T?a[T]=a[T].replace(Aa,"$1"+m):a.jsonp!==!1&&(a.url+=(Ma.test(a.url)?"&":"?")+a.jsonp+"="+m),a.converters["script json"]=function(){return w||f.error(m+" was not called"),w[0]},a.dataTypes[0]="json",M=e[m],e[m]=function(){w=arguments},d.always(function(){M===void 0?f(e).removeProp(m):e[m]=M,a[m]&&(a.jsonpCallback=c.jsonpCallback,dl.push(m)),w&&S(M)&&M(w[0]),w=M=void 0}),"script"}),b.createHTMLDocument=function(){var a=x.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",a.childNodes.length===2}(),f.parseHTML=function(a,c,d){if(typeof a!="string")return[];typeof c=="boolean"&&(d=c,c=!1);var m,M,w;return c||(b.createHTMLDocument?(c=x.implementation.createHTMLDocument(""),m=c.createElement("base"),m.href=x.location.href,c.head.appendChild(m)):c=x),M=$.exec(a),w=!d&&[],M?[c.createElement(M[1])]:(M=br([a],c,w),w&&w.length&&f(w).remove(),f.merge([],M.childNodes))},f.fn.load=function(a,c,d){var m,M,w,T=this,N=a.indexOf(" ");return N>-1&&(m=yi(a.slice(N)),a=a.slice(0,N)),S(c)?(d=c,c=void 0):c&&typeof c=="object"&&(M="POST"),T.length>0&&f.ajax({url:a,type:M||"GET",dataType:"html",data:c}).done(function(F){w=arguments,T.html(m?f("<div>").append(f.parseHTML(F)).find(m):F)}).always(d&&function(F,G){T.each(function(){d.apply(this,w||[F.responseText,G,F])})}),this},f.expr.pseudos.animated=function(a){return f.grep(f.timers,function(c){return a===c.elem}).length},f.offset={setOffset:function(a,c,d){var m,M,w,T,N,F,G,j=f.css(a,"position"),de=f(a),W={};j==="static"&&(a.style.position="relative"),N=de.offset(),w=f.css(a,"top"),F=f.css(a,"left"),G=(j==="absolute"||j==="fixed")&&(w+F).indexOf("auto")>-1,G?(m=de.position(),T=m.top,M=m.left):(T=parseFloat(w)||0,M=parseFloat(F)||0),S(c)&&(c=c.call(a,d,f.extend({},N))),c.top!=null&&(W.top=c.top-N.top+T),c.left!=null&&(W.left=c.left-N.left+M),"using"in c?c.using.call(a,W):de.css(W)}},f.fn.extend({offset:function(a){if(arguments.length)return a===void 0?this:this.each(function(M){f.offset.setOffset(this,a,M)});var c,d,m=this[0];if(!!m)return m.getClientRects().length?(c=m.getBoundingClientRect(),d=m.ownerDocument.defaultView,{top:c.top+d.pageYOffset,left:c.left+d.pageXOffset}):{top:0,left:0}},position:function(){if(!!this[0]){var a,c,d,m=this[0],M={top:0,left:0};if(f.css(m,"position")==="fixed")c=m.getBoundingClientRect();else{for(c=this.offset(),d=m.ownerDocument,a=m.offsetParent||d.documentElement;a&&(a===d.body||a===d.documentElement)&&f.css(a,"position")==="static";)a=a.parentNode;a&&a!==m&&a.nodeType===1&&(M=f(a).offset(),M.top+=f.css(a,"borderTopWidth",!0),M.left+=f.css(a,"borderLeftWidth",!0))}return{top:c.top-M.top-f.css(m,"marginTop",!0),left:c.left-M.left-f.css(m,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent;a&&f.css(a,"position")==="static";)a=a.offsetParent;return a||We})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=c==="pageYOffset";f.fn[a]=function(m){return Ce(this,function(M,w,T){var N;if(R(M)?N=M:M.nodeType===9&&(N=M.defaultView),T===void 0)return N?N[c]:M[w];N?N.scrollTo(d?N.pageXOffset:T,d?T:N.pageYOffset):M[w]=T},a,m,arguments.length)}}),f.each(["top","left"],function(a,c){f.cssHooks[c]=at(b.pixelPosition,function(d,m){if(m)return m=ct(d,c),Ke.test(m)?f(d).position()[c]+"px":m})}),f.each({Height:"height",Width:"width"},function(a,c){f.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,m){f.fn[m]=function(M,w){var T=arguments.length&&(d||typeof M!="boolean"),N=d||(M===!0||w===!0?"margin":"border");return Ce(this,function(F,G,j){var de;return R(F)?m.indexOf("outer")===0?F["inner"+a]:F.document.documentElement["client"+a]:F.nodeType===9?(de=F.documentElement,Math.max(F.body["scroll"+a],de["scroll"+a],F.body["offset"+a],de["offset"+a],de["client"+a])):j===void 0?f.css(F,G,N):f.style(F,G,j,N)},c,T?M:void 0,T)}})}),f.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,c){f.fn[c]=function(d){return this.on(c,d)}}),f.fn.extend({bind:function(a,c,d){return this.on(a,null,c,d)},unbind:function(a,c){return this.off(a,null,c)},delegate:function(a,c,d,m){return this.on(c,a,d,m)},undelegate:function(a,c,d){return arguments.length===1?this.off(a,"**"):this.off(c,a||"**",d)},hover:function(a,c){return this.mouseenter(a).mouseleave(c||a)}}),f.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,c){f.fn[c]=function(d,m){return arguments.length>0?this.on(c,null,d,m):this.trigger(c)}});var gh=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;f.proxy=function(a,c){var d,m,M;if(typeof c=="string"&&(d=a[c],c=a,a=d),!!S(a))return m=r.call(arguments,2),M=function(){return a.apply(c||this,m.concat(r.call(arguments)))},M.guid=a.guid=a.guid||f.guid++,M},f.holdReady=function(a){a?f.readyWait++:f.ready(!0)},f.isArray=Array.isArray,f.parseJSON=JSON.parse,f.nodeName=be,f.isFunction=S,f.isWindow=R,f.camelCase=fe,f.type=L,f.now=Date.now,f.isNumeric=function(a){var c=f.type(a);return(c==="number"||c==="string")&&!isNaN(a-parseFloat(a))},f.trim=function(a){return a==null?"":(a+"").replace(gh,"")};var vh=e.jQuery,xh=e.$;return f.noConflict=function(a){return e.$===f&&(e.$=xh),a&&e.jQuery===f&&(e.jQuery=vh),f},typeof t=="undefined"&&(e.jQuery=e.$=f),f})})(_s);var Fy=_s.exports;(function(s){(function(e){s.exports?s.exports=function(t,n){return n===void 0&&(typeof window!="undefined"?n=_s.exports:n=_s.exports(t)),e(n),n}:e(jQuery)})(function(e){return e.fn.tilt=function(t){const n=function(){this.ticking||(requestAnimationFrame(g.bind(this)),this.ticking=!0)},i=function(){const b=this;e(this).on("mousemove",u),e(this).on("mouseenter",o),this.settings.reset&&e(this).on("mouseleave",h),this.settings.glare&&e(window).on("resize",y.bind(b))},r=function(){this.timeout!==void 0&&clearTimeout(this.timeout),e(this).css({transition:`${this.settings.speed}ms ${this.settings.easing}`}),this.settings.glare&&this.glareElement.css({transition:`opacity ${this.settings.speed}ms ${this.settings.easing}`}),this.timeout=setTimeout(()=>{e(this).css({transition:""}),this.settings.glare&&this.glareElement.css({transition:""})},this.settings.speed)},o=function(b){this.ticking=!1,e(this).css({"will-change":"transform"}),r.call(this),e(this).trigger("tilt.mouseEnter")},l=function(b){return typeof b=="undefined"&&(b={pageX:e(this).offset().left+e(this).outerWidth()/2,pageY:e(this).offset().top+e(this).outerHeight()/2}),{x:b.pageX,y:b.pageY}},u=function(b){this.mousePositions=l(b),n.call(this)},h=function(){r.call(this),this.reset=!0,n.call(this),e(this).trigger("tilt.mouseLeave")},p=function(){const b=e(this).outerWidth(),S=e(this).outerHeight(),R=e(this).offset().left,x=e(this).offset().top,_=(this.mousePositions.x-R)/b,B=(this.mousePositions.y-x)/S,L=(this.settings.maxTilt/2-_*this.settings.maxTilt).toFixed(2),O=(B*this.settings.maxTilt-this.settings.maxTilt/2).toFixed(2),f=Math.atan2(this.mousePositions.x-(R+b/2),-(this.mousePositions.y-(x+S/2)))*(180/Math.PI);return{tiltX:L,tiltY:O,percentageX:_*100,percentageY:B*100,angle:f}},g=function(){if(this.transforms=p.call(this),this.reset){this.reset=!1,e(this).css("transform",`perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg)`),this.settings.glare&&(this.glareElement.css("transform","rotate(180deg) translate(-50%, -50%)"),this.glareElement.css("opacity","0"));return}else e(this).css("transform",`perspective(${this.settings.perspective}px) rotateX(${this.settings.disableAxis==="x"?0:this.transforms.tiltY}deg) rotateY(${this.settings.disableAxis==="y"?0:this.transforms.tiltX}deg) scale3d(${this.settings.scale},${this.settings.scale},${this.settings.scale})`),this.settings.glare&&(this.glareElement.css("transform",`rotate(${this.transforms.angle}deg) translate(-50%, -50%)`),this.glareElement.css("opacity",`${this.transforms.percentageY*this.settings.maxGlare/100}`));e(this).trigger("change",[this.transforms]),this.ticking=!1},v=function(){const b=this.settings.glarePrerender;if(b||e(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'),this.glareElementWrapper=e(this).find(".js-tilt-glare"),this.glareElement=e(this).find(".js-tilt-glare-inner"),b)return;const S={position:"absolute",top:"0",left:"0",width:"100%",height:"100%"};this.glareElementWrapper.css(S).css({overflow:"hidden","pointer-events":"none"}),this.glareElement.css({position:"absolute",top:"50%",left:"50%","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",width:`${e(this).outerWidth()*2}`,height:`${e(this).outerWidth()*2}`,transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"})},y=function(){this.glareElement.css({width:`${e(this).outerWidth()*2}`,height:`${e(this).outerWidth()*2}`})};return e.fn.tilt.destroy=function(){e(this).each(function(){e(this).find(".js-tilt-glare").remove(),e(this).css({"will-change":"",transform:""}),e(this).off("mousemove mouseenter mouseleave")})},e.fn.tilt.getValues=function(){const b=[];return e(this).each(function(){this.mousePositions=l.call(this),b.push(p.call(this))}),b},e.fn.tilt.reset=function(){e(this).each(function(){this.mousePositions=l.call(this),this.settings=e(this).data("settings"),h.call(this),setTimeout(()=>{this.reset=!1},this.settings.transition)})},this.each(function(){this.settings=e.extend({maxTilt:e(this).is("[data-tilt-max]")?e(this).data("tilt-max"):20,perspective:e(this).is("[data-tilt-perspective]")?e(this).data("tilt-perspective"):300,easing:e(this).is("[data-tilt-easing]")?e(this).data("tilt-easing"):"cubic-bezier(.03,.98,.52,.99)",scale:e(this).is("[data-tilt-scale]")?e(this).data("tilt-scale"):"1",speed:e(this).is("[data-tilt-speed]")?e(this).data("tilt-speed"):"400",transition:e(this).is("[data-tilt-transition]")?e(this).data("tilt-transition"):!0,disableAxis:e(this).is("[data-tilt-disable-axis]")?e(this).data("tilt-disable-axis"):null,axis:e(this).is("[data-tilt-axis]")?e(this).data("tilt-axis"):null,reset:e(this).is("[data-tilt-reset]")?e(this).data("tilt-reset"):!0,glare:e(this).is("[data-tilt-glare]")?e(this).data("tilt-glare"):!1,maxGlare:e(this).is("[data-tilt-maxglare]")?e(this).data("tilt-maxglare"):1},t),this.settings.axis!==null&&(console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"),this.settings.disableAxis=this.settings.axis),this.init=()=>{e(this).data("settings",this.settings),this.settings.glare&&v.call(this),i.call(this)},this.init()})},e("[data-tilt]").tilt(),!0})})(El);var By=El.exports;/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Al="134",zh=0,Cl=1,Oh=2,Ll=1,Uh=2,Pr=3,Dr=0,kt=1,Bi=2,Rl=1,ti=0,Ir=1,Pl=2,Dl=3,Il=4,kh=5,zi=100,Hh=101,Gh=102,Nl=103,Fl=104,Vh=200,Wh=201,qh=202,jh=203,Bl=204,zl=205,Xh=206,Yh=207,Zh=208,Jh=209,$h=210,Qh=0,Kh=1,ef=2,Ba=3,tf=4,nf=5,rf=6,sf=7,bs=0,af=1,of=2,Ei=0,lf=1,cf=2,uf=3,hf=4,ff=5,Ol=300,Nr=301,Fr=302,za=303,Oa=304,Ms=306,Ua=307,ka=1e3,dn=1001,Ha=1002,Gt=1003,Ul=1004,kl=1005,xn=1006,df=1007,ws=1008,ni=1009,pf=1010,mf=1011,Ss=1012,gf=1013,Ts=1014,ii=1015,Oi=1016,vf=1017,xf=1018,yf=1019,Br=1020,_f=1021,Ui=1022,en=1023,bf=1024,Mf=1025,wf=en,ki=1026,zr=1027,Sf=1028,Tf=1029,Ef=1030,Af=1031,Cf=1032,Lf=1033,Hl=33776,Gl=33777,Vl=33778,Wl=33779,ql=35840,jl=35841,Xl=35842,Yl=35843,Rf=36196,Zl=37492,Jl=37496,Pf=37808,Df=37809,If=37810,Nf=37811,Ff=37812,Bf=37813,zf=37814,Of=37815,Uf=37816,kf=37817,Hf=37818,Gf=37819,Vf=37820,Wf=37821,qf=36492,jf=37840,Xf=37841,Yf=37842,Zf=37843,Jf=37844,$f=37845,Qf=37846,Kf=37847,ed=37848,td=37849,nd=37850,id=37851,rd=37852,sd=37853,ad=2200,od=2201,ld=2202,Es=2300,As=2301,Ga=2302,Hi=2400,Gi=2401,Cs=2402,Va=2500,$l=2501,cd=0,Zt=3e3,Ai=3001,Wa=3007,qa=3002,ud=3003,Ql=3004,Kl=3005,ec=3006,hd=3200,fd=3201,Vi=0,dd=1,ja=7680,pd=519,Or=35044,Ls=35048,tc="300 es";class Ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Xa=Math.PI/180,Ya=180/Math.PI,qt=[];for(let s=0;s<256;s++)qt[s]=(s<16?"0":"")+s.toString(16);const md=typeof crypto!="undefined"&&"randomUUID"in crypto;function In(){if(md)return crypto.randomUUID().toUpperCase();const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[s&255]+qt[s>>8&255]+qt[s>>16&255]+qt[s>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toUpperCase()}function pn(s,e,t){return Math.max(e,Math.min(t,s))}function gd(s,e){return(s%e+e)%e}function Za(s,e,t){return(1-t)*s+t*e}function nc(s){return(s&s-1)==0&&s!==0}function vd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}class ve{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}ve.prototype.isVector2=!0;class jt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,l,u,h){const p=this.elements;return p[0]=e,p[1]=i,p[2]=l,p[3]=t,p[4]=r,p[5]=u,p[6]=n,p[7]=o,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],l=n[3],u=n[6],h=n[1],p=n[4],g=n[7],v=n[2],y=n[5],b=n[8],S=i[0],R=i[3],x=i[6],_=i[1],B=i[4],L=i[7],O=i[2],f=i[5],A=i[8];return r[0]=o*S+l*_+u*O,r[3]=o*R+l*B+u*f,r[6]=o*x+l*L+u*A,r[1]=h*S+p*_+g*O,r[4]=h*R+p*B+g*f,r[7]=h*x+p*L+g*A,r[2]=v*S+y*_+b*O,r[5]=v*R+y*B+b*f,r[8]=v*x+y*L+b*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],u=e[6],h=e[7],p=e[8];return t*o*p-t*l*h-n*r*p+n*l*u+i*r*h-i*o*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],u=e[6],h=e[7],p=e[8],g=p*o-l*h,v=l*u-p*r,y=h*r-o*u,b=t*g+n*v+i*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/b;return e[0]=g*S,e[1]=(i*h-p*n)*S,e[2]=(l*n-i*o)*S,e[3]=v*S,e[4]=(p*t-i*u)*S,e[5]=(i*r-l*t)*S,e[6]=y*S,e[7]=(n*u-h*t)*S,e[8]=(o*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,l){const u=Math.cos(r),h=Math.sin(r);return this.set(n*u,n*h,-n*(u*o+h*l)+o+e,-i*h,i*u,-i*(-h*o+u*l)+l+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],l=i[6],u=i[1],h=i[4],p=i[7];return i[0]=t*r+n*u,i[3]=t*o+n*h,i[6]=t*l+n*p,i[1]=-n*r+t*u,i[4]=-n*o+t*h,i[7]=-n*l+t*p,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}jt.prototype.isMatrix3=!0;function ic(s){if(s.length===0)return-1/0;let e=s[0];for(let t=1,n=s.length;t<n;++t)s[t]>e&&(e=s[t]);return e}function Rs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function rc(s,e=0){let t=3735928559^e,n=1103547991^e;for(let i=0,r;i<s.length;i++)r=s.charCodeAt(i),t=Math.imul(t^r,2654435761),n=Math.imul(n^r,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),4294967296*(2097151&n)+(t>>>0)}let Wi;class qi{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wi===void 0&&(Wi=Rs("canvas")),Wi.width=e.width,Wi.height=e.height;const n=Wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let xd=0;class Xt extends Ci{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=dn,i=dn,r=xn,o=ws,l=en,u=ni,h=1,p=Zt){super();Object.defineProperty(this,"id",{value:xd++}),this.uuid=In(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=u,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=In()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let o=0,l=i.length;o<l;o++)i[o].isDataTexture?r.push(Ja(i[o].image)):r.push(Ja(i[o]))}else r=Ja(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ol)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ka:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case Ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ka:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case Ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}Xt.DEFAULT_IMAGE=void 0;Xt.DEFAULT_MAPPING=Ol;Xt.prototype.isTexture=!0;function Ja(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?qi.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Mt{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const o=.01,l=.1,u=e.elements,h=u[0],p=u[4],g=u[8],v=u[1],y=u[5],b=u[9],S=u[2],R=u[6],x=u[10];if(Math.abs(p-v)<o&&Math.abs(g-S)<o&&Math.abs(b-R)<o){if(Math.abs(p+v)<l&&Math.abs(g+S)<l&&Math.abs(b+R)<l&&Math.abs(h+y+x-3)<l)return this.set(1,0,0,0),this;t=Math.PI;const B=(h+1)/2,L=(y+1)/2,O=(x+1)/2,f=(p+v)/4,A=(g+S)/4,X=(b+R)/4;return B>L&&B>O?B<o?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(B),i=f/n,r=A/n):L>O?L<o?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(L),n=f/i,r=X/i):O<o?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(O),n=A/r,i=X/r),this.set(n,i,r,t),this}let _=Math.sqrt((R-b)*(R-b)+(g-S)*(g-S)+(v-p)*(v-p));return Math.abs(_)<.001&&(_=1),this.x=(R-b)/_,this.y=(g-S)/_,this.z=(v-p)/_,this.w=Math.acos((h+y+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Mt.prototype.isVector4=!0;class Nn extends Ci{constructor(e,t,n={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.texture=new Xt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=Tl({},this.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Nn.prototype.isWebGLRenderTarget=!0;class yd extends Nn{constructor(e,t,n){super(e,t);const i=this.texture;this.texture=[];for(let r=0;r<n;r++)this.texture[r]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}yd.prototype.isWebGLMultipleRenderTargets=!0;class sc extends Nn{constructor(e,t,n){super(e,t,n);this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}sc.prototype.isWebGLMultisampleRenderTarget=!0;class an{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,o,l){let u=n[i+0],h=n[i+1],p=n[i+2],g=n[i+3];const v=r[o+0],y=r[o+1],b=r[o+2],S=r[o+3];if(l===0){e[t+0]=u,e[t+1]=h,e[t+2]=p,e[t+3]=g;return}if(l===1){e[t+0]=v,e[t+1]=y,e[t+2]=b,e[t+3]=S;return}if(g!==S||u!==v||h!==y||p!==b){let R=1-l;const x=u*v+h*y+p*b+g*S,_=x>=0?1:-1,B=1-x*x;if(B>Number.EPSILON){const O=Math.sqrt(B),f=Math.atan2(O,x*_);R=Math.sin(R*f)/O,l=Math.sin(l*f)/O}const L=l*_;if(u=u*R+v*L,h=h*R+y*L,p=p*R+b*L,g=g*R+S*L,R===1-l){const O=1/Math.sqrt(u*u+h*h+p*p+g*g);u*=O,h*=O,p*=O,g*=O}}e[t]=u,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,i,r,o){const l=n[i],u=n[i+1],h=n[i+2],p=n[i+3],g=r[o],v=r[o+1],y=r[o+2],b=r[o+3];return e[t]=l*b+p*g+u*y-h*v,e[t+1]=u*b+p*v+h*g-l*y,e[t+2]=h*b+p*y+l*v-u*g,e[t+3]=p*b-l*g-u*v-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,o=e._order,l=Math.cos,u=Math.sin,h=l(n/2),p=l(i/2),g=l(r/2),v=u(n/2),y=u(i/2),b=u(r/2);switch(o){case"XYZ":this._x=v*p*g+h*y*b,this._y=h*y*g-v*p*b,this._z=h*p*b+v*y*g,this._w=h*p*g-v*y*b;break;case"YXZ":this._x=v*p*g+h*y*b,this._y=h*y*g-v*p*b,this._z=h*p*b-v*y*g,this._w=h*p*g+v*y*b;break;case"ZXY":this._x=v*p*g-h*y*b,this._y=h*y*g+v*p*b,this._z=h*p*b+v*y*g,this._w=h*p*g-v*y*b;break;case"ZYX":this._x=v*p*g-h*y*b,this._y=h*y*g+v*p*b,this._z=h*p*b-v*y*g,this._w=h*p*g+v*y*b;break;case"YZX":this._x=v*p*g+h*y*b,this._y=h*y*g+v*p*b,this._z=h*p*b-v*y*g,this._w=h*p*g-v*y*b;break;case"XZY":this._x=v*p*g-h*y*b,this._y=h*y*g-v*p*b,this._z=h*p*b+v*y*g,this._w=h*p*g+v*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],l=t[5],u=t[9],h=t[2],p=t[6],g=t[10],v=n+l+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(p-u)*y,this._y=(r-h)*y,this._z=(o-i)*y}else if(n>l&&n>g){const y=2*Math.sqrt(1+n-l-g);this._w=(p-u)/y,this._x=.25*y,this._y=(i+o)/y,this._z=(r+h)/y}else if(l>g){const y=2*Math.sqrt(1+l-n-g);this._w=(r-h)/y,this._x=(i+o)/y,this._y=.25*y,this._z=(u+p)/y}else{const y=2*Math.sqrt(1+g-n-l);this._w=(o-i)/y,this._x=(r+h)/y,this._y=(u+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,l=t._x,u=t._y,h=t._z,p=t._w;return this._x=n*p+o*l+i*h-r*u,this._y=i*p+o*u+r*l-n*h,this._z=r*p+o*h+n*u-i*l,this._w=o*p-n*l-i*u-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let l=o*e._w+n*e._x+i*e._y+r*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const u=1-l*l;if(u<=Number.EPSILON){const y=1-t;return this._w=y*o+t*this._w,this._x=y*n+t*this._x,this._y=y*i+t*this._y,this._z=y*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(u),p=Math.atan2(h,l),g=Math.sin((1-t)*p)/h,v=Math.sin(t*p)/h;return this._w=o*g+this._w*v,this._x=n*g+this._x*v,this._y=i*g+this._y*v,this._z=r*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}an.prototype.isQuaternion=!0;class z{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,l=e.z,u=e.w,h=u*t+o*i-l*n,p=u*n+l*t-r*i,g=u*i+r*n-o*t,v=-r*t-o*n-l*i;return this.x=h*u+v*-r+p*-l-g*-o,this.y=p*u+v*-o+g*-r-h*-l,this.z=g*u+v*-l+h*-o-p*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,l=t.y,u=t.z;return this.x=i*u-r*l,this.y=r*o-n*u,this.z=n*l-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $a.copy(this).projectOnVector(e),this.sub($a)}reflect(e){return this.sub($a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}z.prototype.isVector3=!0;const $a=new z,ac=new an;class En{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,l=-1/0;for(let u=0,h=e.length;u<h;u+=3){const p=e[u],g=e[u+1],v=e[u+2];p<t&&(t=p),g<n&&(n=g),v<i&&(i=v),p>r&&(r=p),g>o&&(o=g),v>l&&(l=v)}return this.min.set(t,n,i),this.max.set(r,o,l),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,l=-1/0;for(let u=0,h=e.count;u<h;u++){const p=e.getX(u),g=e.getY(u),v=e.getZ(u);p<t&&(t=p),g<n&&(n=g),v<i&&(i=v),p>r&&(r=p),g>o&&(o=g),v>l&&(l=v)}return this.min.set(t,n,i),this.max.set(r,o,l),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ur.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Qa.copy(t.boundingBox),Qa.applyMatrix4(e.matrixWorld),this.union(Qa));const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ur),Ur.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),Ps.subVectors(this.max,kr),ji.subVectors(e.a,kr),Xi.subVectors(e.b,kr),Yi.subVectors(e.c,kr),ri.subVectors(Xi,ji),si.subVectors(Yi,Xi),Li.subVectors(ji,Yi);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Li.z,Li.y,ri.z,0,-ri.x,si.z,0,-si.x,Li.z,0,-Li.x,-ri.y,ri.x,0,-si.y,si.x,0,-Li.y,Li.x,0];return!Ka(t,ji,Xi,Yi,Ps)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,ji,Xi,Yi,Ps))?!1:(Ds.crossVectors(ri,si),t=[Ds.x,Ds.y,Ds.z],Ka(t,ji,Xi,Yi,Ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ur.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ur).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}En.prototype.isBox3=!0;const Wn=[new z,new z,new z,new z,new z,new z,new z,new z],Ur=new z,Qa=new En,ji=new z,Xi=new z,Yi=new z,ri=new z,si=new z,Li=new z,kr=new z,Ps=new z,Ds=new z,Ri=new z;function Ka(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ri.fromArray(s,r);const l=i.x*Math.abs(Ri.x)+i.y*Math.abs(Ri.y)+i.z*Math.abs(Ri.z),u=e.dot(Ri),h=t.dot(Ri),p=n.dot(Ri);if(Math.max(-Math.max(u,h,p),Math.min(u,h,p))>l)return!1}return!0}const _d=new En,oc=new z,eo=new z,to=new z;class Zi{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_d.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(to.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return eo.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(oc.copy(e.center).add(eo)),this.expandByPoint(oc.copy(e.center).sub(eo)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new z,no=new z,Is=new z,ai=new z,io=new z,Ns=new z,ro=new z;class Ji{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.direction).multiplyScalar(t).add(this.origin),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){no.copy(e).add(t).multiplyScalar(.5),Is.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(no);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Is),l=ai.dot(this.direction),u=-ai.dot(Is),h=ai.lengthSq(),p=Math.abs(1-o*o);let g,v,y,b;if(p>0)if(g=o*u-l,v=o*l-u,b=r*p,g>=0)if(v>=-b)if(v<=b){const S=1/p;g*=S,v*=S,y=g*(g+o*v+2*l)+v*(o*g+v+2*u)+h}else v=r,g=Math.max(0,-(o*v+l)),y=-g*g+v*(v+2*u)+h;else v=-r,g=Math.max(0,-(o*v+l)),y=-g*g+v*(v+2*u)+h;else v<=-b?(g=Math.max(0,-(-o*r+l)),v=g>0?-r:Math.min(Math.max(-r,-u),r),y=-g*g+v*(v+2*u)+h):v<=b?(g=0,v=Math.min(Math.max(-r,-u),r),y=v*(v+2*u)+h):(g=Math.max(0,-(o*r+l)),v=g>0?r:Math.min(Math.max(-r,-u),r),y=-g*g+v*(v+2*u)+h);else v=o>0?-r:r,g=Math.max(0,-(o*v+l)),y=-g*g+v*(v+2*u)+h;return n&&n.copy(this.direction).multiplyScalar(g).add(this.origin),i&&i.copy(Is).multiplyScalar(v).add(no),y}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const n=qn.dot(this.direction),i=qn.dot(qn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),l=n-o,u=n+o;return l<0&&u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,l,u;const h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(n=(e.min.x-v.x)*h,i=(e.max.x-v.x)*h):(n=(e.max.x-v.x)*h,i=(e.min.x-v.x)*h),p>=0?(r=(e.min.y-v.y)*p,o=(e.max.y-v.y)*p):(r=(e.max.y-v.y)*p,o=(e.min.y-v.y)*p),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),g>=0?(l=(e.min.z-v.z)*g,u=(e.max.z-v.z)*g):(l=(e.max.z-v.z)*g,u=(e.min.z-v.z)*g),n>u||l>i)||((l>n||n!==n)&&(n=l),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,i,r){io.subVectors(t,e),Ns.subVectors(n,e),ro.crossVectors(io,Ns);let o=this.direction.dot(ro),l;if(o>0){if(i)return null;l=1}else if(o<0)l=-1,o=-o;else return null;ai.subVectors(this.origin,e);const u=l*this.direction.dot(Ns.crossVectors(ai,Ns));if(u<0)return null;const h=l*this.direction.dot(io.cross(ai));if(h<0||u+h>o)return null;const p=-l*ai.dot(ro);return p<0?null:this.at(p/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,l,u,h,p,g,v,y,b,S,R){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=r,x[5]=o,x[9]=l,x[13]=u,x[2]=h,x[6]=p,x[10]=g,x[14]=v,x[3]=y,x[7]=b,x[11]=S,x[15]=R,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),u=Math.cos(i),h=Math.sin(i),p=Math.cos(r),g=Math.sin(r);if(e.order==="XYZ"){const v=o*p,y=o*g,b=l*p,S=l*g;t[0]=u*p,t[4]=-u*g,t[8]=h,t[1]=y+b*h,t[5]=v-S*h,t[9]=-l*u,t[2]=S-v*h,t[6]=b+y*h,t[10]=o*u}else if(e.order==="YXZ"){const v=u*p,y=u*g,b=h*p,S=h*g;t[0]=v+S*l,t[4]=b*l-y,t[8]=o*h,t[1]=o*g,t[5]=o*p,t[9]=-l,t[2]=y*l-b,t[6]=S+v*l,t[10]=o*u}else if(e.order==="ZXY"){const v=u*p,y=u*g,b=h*p,S=h*g;t[0]=v-S*l,t[4]=-o*g,t[8]=b+y*l,t[1]=y+b*l,t[5]=o*p,t[9]=S-v*l,t[2]=-o*h,t[6]=l,t[10]=o*u}else if(e.order==="ZYX"){const v=o*p,y=o*g,b=l*p,S=l*g;t[0]=u*p,t[4]=b*h-y,t[8]=v*h+S,t[1]=u*g,t[5]=S*h+v,t[9]=y*h-b,t[2]=-h,t[6]=l*u,t[10]=o*u}else if(e.order==="YZX"){const v=o*u,y=o*h,b=l*u,S=l*h;t[0]=u*p,t[4]=S-v*g,t[8]=b*g+y,t[1]=g,t[5]=o*p,t[9]=-l*p,t[2]=-h*p,t[6]=y*g+b,t[10]=v-S*g}else if(e.order==="XZY"){const v=o*u,y=o*h,b=l*u,S=l*h;t[0]=u*p,t[4]=-g,t[8]=h*p,t[1]=v*g+S,t[5]=o*p,t[9]=y*g-b,t[2]=b*g-y,t[6]=l*p,t[10]=S*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bd,e,Md)}lookAt(e,t,n){const i=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),oi.crossVectors(n,mn),oi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),oi.crossVectors(n,mn)),oi.normalize(),Fs.crossVectors(mn,oi),i[0]=oi.x,i[4]=Fs.x,i[8]=mn.x,i[1]=oi.y,i[5]=Fs.y,i[9]=mn.y,i[2]=oi.z,i[6]=Fs.z,i[10]=mn.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],l=n[4],u=n[8],h=n[12],p=n[1],g=n[5],v=n[9],y=n[13],b=n[2],S=n[6],R=n[10],x=n[14],_=n[3],B=n[7],L=n[11],O=n[15],f=i[0],A=i[4],X=i[8],me=i[12],ee=i[1],k=i[5],be=i[9],$=i[13],Z=i[2],te=i[6],J=i[10],Q=i[14],Me=i[3],De=i[7],ke=i[11],Se=i[15];return r[0]=o*f+l*ee+u*Z+h*Me,r[4]=o*A+l*k+u*te+h*De,r[8]=o*X+l*be+u*J+h*ke,r[12]=o*me+l*$+u*Q+h*Se,r[1]=p*f+g*ee+v*Z+y*Me,r[5]=p*A+g*k+v*te+y*De,r[9]=p*X+g*be+v*J+y*ke,r[13]=p*me+g*$+v*Q+y*Se,r[2]=b*f+S*ee+R*Z+x*Me,r[6]=b*A+S*k+R*te+x*De,r[10]=b*X+S*be+R*J+x*ke,r[14]=b*me+S*$+R*Q+x*Se,r[3]=_*f+B*ee+L*Z+O*Me,r[7]=_*A+B*k+L*te+O*De,r[11]=_*X+B*be+L*J+O*ke,r[15]=_*me+B*$+L*Q+O*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],l=e[5],u=e[9],h=e[13],p=e[2],g=e[6],v=e[10],y=e[14],b=e[3],S=e[7],R=e[11],x=e[15];return b*(+r*u*g-i*h*g-r*l*v+n*h*v+i*l*y-n*u*y)+S*(+t*u*y-t*h*v+r*o*v-i*o*y+i*h*p-r*u*p)+R*(+t*h*g-t*l*y-r*o*g+n*o*y+r*l*p-n*h*p)+x*(-i*l*p-t*u*g+t*l*v+i*o*g-n*o*v+n*u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],u=e[6],h=e[7],p=e[8],g=e[9],v=e[10],y=e[11],b=e[12],S=e[13],R=e[14],x=e[15],_=g*R*h-S*v*h+S*u*y-l*R*y-g*u*x+l*v*x,B=b*v*h-p*R*h-b*u*y+o*R*y+p*u*x-o*v*x,L=p*S*h-b*g*h+b*l*y-o*S*y-p*l*x+o*g*x,O=b*g*u-p*S*u-b*l*v+o*S*v+p*l*R-o*g*R,f=t*_+n*B+i*L+r*O;if(f===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/f;return e[0]=_*A,e[1]=(S*v*r-g*R*r-S*i*y+n*R*y+g*i*x-n*v*x)*A,e[2]=(l*R*r-S*u*r+S*i*h-n*R*h-l*i*x+n*u*x)*A,e[3]=(g*u*r-l*v*r-g*i*h+n*v*h+l*i*y-n*u*y)*A,e[4]=B*A,e[5]=(p*R*r-b*v*r+b*i*y-t*R*y-p*i*x+t*v*x)*A,e[6]=(b*u*r-o*R*r-b*i*h+t*R*h+o*i*x-t*u*x)*A,e[7]=(o*v*r-p*u*r+p*i*h-t*v*h-o*i*y+t*u*y)*A,e[8]=L*A,e[9]=(b*g*r-p*S*r-b*n*y+t*S*y+p*n*x-t*g*x)*A,e[10]=(o*S*r-b*l*r+b*n*h-t*S*h-o*n*x+t*l*x)*A,e[11]=(p*l*r-o*g*r-p*n*h+t*g*h+o*n*y-t*l*y)*A,e[12]=O*A,e[13]=(p*S*i-b*g*i+b*n*v-t*S*v-p*n*R+t*g*R)*A,e[14]=(b*l*i-o*S*i-b*n*u+t*S*u+o*n*R-t*l*R)*A,e[15]=(o*g*i-p*l*i+p*n*u-t*g*u-o*n*v+t*l*v)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,l=e.y,u=e.z,h=r*o,p=r*l;return this.set(h*o+n,h*l-i*u,h*u+i*l,0,h*l+i*u,p*l+n,p*u-i*o,0,h*u-i*l,p*u+i*o,r*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,l=t._z,u=t._w,h=r+r,p=o+o,g=l+l,v=r*h,y=r*p,b=r*g,S=o*p,R=o*g,x=l*g,_=u*h,B=u*p,L=u*g,O=n.x,f=n.y,A=n.z;return i[0]=(1-(S+x))*O,i[1]=(y+L)*O,i[2]=(b-B)*O,i[3]=0,i[4]=(y-L)*f,i[5]=(1-(v+x))*f,i[6]=(R+_)*f,i[7]=0,i[8]=(b+B)*A,i[9]=(R-_)*A,i[10]=(1-(v+S))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=$i.set(i[0],i[1],i[2]).length();const o=$i.set(i[4],i[5],i[6]).length(),l=$i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],An.copy(this);const h=1/r,p=1/o,g=1/l;return An.elements[0]*=h,An.elements[1]*=h,An.elements[2]*=h,An.elements[4]*=p,An.elements[5]*=p,An.elements[6]*=p,An.elements[8]*=g,An.elements[9]*=g,An.elements[10]*=g,t.setFromRotationMatrix(An),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const l=this.elements,u=2*r/(t-e),h=2*r/(n-i),p=(t+e)/(t-e),g=(n+i)/(n-i),v=-(o+r)/(o-r),y=-2*o*r/(o-r);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o){const l=this.elements,u=1/(t-e),h=1/(n-i),p=1/(o-r),g=(t+e)*u,v=(n+i)*h,y=(o+r)*p;return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-g,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=-2*p,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}Qe.prototype.isMatrix4=!0;const $i=new z,An=new Qe,bd=new z(0,0,0),Md=new z(1,1,1),oi=new z,Fs=new z,mn=new z,lc=new Qe,cc=new an;class Qi{constructor(e=0,t=0,n=0,i=Qi.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],l=i[8],u=i[1],h=i[5],p=i[9],g=i[2],v=i[6],y=i[10];switch(t){case"XYZ":this._y=Math.asin(pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,y),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(pn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-pn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(pn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(l,y));break;case"XZY":this._z=Math.asin(-pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cc.setFromEuler(this),this.setFromQuaternion(cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new z(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Qi.prototype.isEuler=!0;Qi.DefaultOrder="XYZ";Qi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class wd{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}}let Sd=0;const uc=new z,Ki=new an,jn=new Qe,Bs=new z,Hr=new z,Td=new z,Ed=new an,hc=new z(1,0,0),fc=new z(0,1,0),dc=new z(0,0,1),Ad={type:"added"},pc={type:"removed"};class mt extends Ci{constructor(){super();Object.defineProperty(this,"id",{value:Sd++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DefaultUp.clone();const e=new z,t=new Qi,n=new an,i=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qe},normalMatrix:{value:new jt}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=mt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new wd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(hc,e)}rotateY(e){return this.rotateOnAxis(fc,e)}rotateZ(e){return this.rotateOnAxis(dc,e)}translateOnAxis(e,t){return uc.copy(e).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hc,e)}translateY(e){return this.translateOnAxis(fc,e)}translateZ(e){return this.translateOnAxis(dc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bs.copy(e):Bs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Hr,Bs,this.up):jn.lookAt(Bs,Hr,this.up),this.quaternion.setFromRotationMatrix(jn),i&&(jn.extractRotation(i.matrixWorld),Ki.setFromRotationMatrix(jn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ad)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(pc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,Td),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,Ed,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let h=0,p=u.length;h<p;h++){const g=u[h];r(e.shapes,g)}else r(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,h=this.material.length;u<h;u++)l.push(r(e.materials,this.material[u]));i.material=l}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];i.animations.push(r(e.animations,u))}}if(t){const l=o(e.geometries),u=o(e.materials),h=o(e.textures),p=o(e.images),g=o(e.shapes),v=o(e.skeletons),y=o(e.animations);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),g.length>0&&(n.shapes=g),v.length>0&&(n.skeletons=v),y.length>0&&(n.animations=y)}return n.object=i,n;function o(l){const u=[];for(const h in l){const p=l[h];delete p.metadata,u.push(p)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DefaultUp=new z(0,1,0);mt.DefaultMatrixAutoUpdate=!0;mt.prototype.isObject3D=!0;const Cn=new z,Xn=new z,so=new z,Yn=new z,er=new z,tr=new z,mc=new z,ao=new z,oo=new z,lo=new z;class Bt{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Cn.subVectors(e,t),i.cross(Cn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Cn.subVectors(i,t),Xn.subVectors(n,t),so.subVectors(e,t);const o=Cn.dot(Cn),l=Cn.dot(Xn),u=Cn.dot(so),h=Xn.dot(Xn),p=Xn.dot(so),g=o*h-l*l;if(g===0)return r.set(-2,-1,-1);const v=1/g,y=(h*u-l*p)*v,b=(o*p-l*u)*v;return r.set(1-y-b,b,y)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yn),Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getUV(e,t,n,i,r,o,l,u){return this.getBarycoord(e,t,n,i,Yn),u.set(0,0),u.addScaledVector(r,Yn.x),u.addScaledVector(o,Yn.y),u.addScaledVector(l,Yn.z),u}static isFrontFacing(e,t,n,i){return Cn.subVectors(n,t),Xn.subVectors(e,t),Cn.cross(Xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Cn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Bt.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,l;er.subVectors(i,n),tr.subVectors(r,n),ao.subVectors(e,n);const u=er.dot(ao),h=tr.dot(ao);if(u<=0&&h<=0)return t.copy(n);oo.subVectors(e,i);const p=er.dot(oo),g=tr.dot(oo);if(p>=0&&g<=p)return t.copy(i);const v=u*g-p*h;if(v<=0&&u>=0&&p<=0)return o=u/(u-p),t.copy(n).addScaledVector(er,o);lo.subVectors(e,r);const y=er.dot(lo),b=tr.dot(lo);if(b>=0&&y<=b)return t.copy(r);const S=y*h-u*b;if(S<=0&&h>=0&&b<=0)return l=h/(h-b),t.copy(n).addScaledVector(tr,l);const R=p*b-y*g;if(R<=0&&g-p>=0&&y-b>=0)return mc.subVectors(r,i),l=(g-p)/(g-p+(y-b)),t.copy(i).addScaledVector(mc,l);const x=1/(R+S+v);return o=S*x,l=v*x,t.copy(n).addScaledVector(er,o).addScaledVector(tr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Cd=0;class Jt extends Ci{constructor(){super();Object.defineProperty(this,"id",{value:Cd++}),this.uuid=In(),this.name="",this.type="Material",this.fog=!0,this.blending=Ir,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.format=en,this.transparent=!1,this.blendSrc=Bl,this.blendDst=zl,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ja,this.stencilZFail=ja,this.stencilZPass=ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Rl;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(n.blending=this.blending),this.side!==Dr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==en&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const l in r){const u=r[l];delete u.metadata,o.push(u)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}Jt.prototype.isMaterial=!0;const gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},zs={h:0,s:0,l:0};function co(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function uo(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ho(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}class Ge{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=gd(e,1),t=pn(t,0,1),n=pn(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=co(r,i,e+1/3),this.g=co(r,i,e),this.b=co(r,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(i[1])/360,u=parseInt(i[2],10)/100,h=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(l,u,h)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=gc[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),o=Math.min(t,n,i);let l,u;const h=(o+r)/2;if(o===r)l=0,u=0;else{const p=r-o;switch(u=h<=.5?p/(r+o):p/(2-r-o),r){case t:l=(n-i)/p+(n<i?6:0);break;case n:l=(i-t)/p+2;break;case i:l=(t-n)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Ln),Ln.h+=e,Ln.s+=t,Ln.l+=n,this.setHSL(Ln.h,Ln.s,Ln.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(zs);const n=Za(Ln.h,zs.h,t),i=Za(Ln.s,zs.s,t),r=Za(Ln.l,zs.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Ge.NAMES=gc;Ge.prototype.isColor=!0;Ge.prototype.r=1;Ge.prototype.g=1;Ge.prototype.b=1;class fo extends Jt{constructor(e){super();this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}fo.prototype.isMeshBasicMaterial=!0;const Tt=new z,Os=new ve;class Ht{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Or,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new Ge),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new ve),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new z),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Mt),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Os.fromBufferAttribute(this,t),Os.applyMatrix3(e),this.setXY(t,Os.x,Os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.x=this.getX(t),Tt.y=this.getY(t),Tt.z=this.getZ(t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.x=this.getX(t),Tt.y=this.getY(t),Tt.z=this.getZ(t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.x=this.getX(t),Tt.y=this.getY(t),Tt.z=this.getZ(t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Or&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}Ht.prototype.isBufferAttribute=!0;class vc extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xc extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ld extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}Ld.prototype.isFloat16BufferAttribute=!0;class Vt extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rd=0;const yn=new Qe,po=new mt,nr=new z,gn=new En,Gr=new En,Wt=new z;class Lt extends Ci{constructor(){super();Object.defineProperty(this,"id",{value:Rd++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ic(e)>65535?xc:vc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return po.lookAt(e),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Gr.setFromBufferAttribute(l),this.morphTargetsRelative?(Wt.addVectors(gn.min,Gr.min),gn.expandByPoint(Wt),Wt.addVectors(gn.max,Gr.max),gn.expandByPoint(Wt)):(gn.expandByPoint(Gr.min),gn.expandByPoint(Gr.max))}gn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){const l=t[r],u=this.morphTargetsRelative;for(let h=0,p=l.count;h<p;h++)Wt.fromBufferAttribute(l,h),u&&(nr.fromBufferAttribute(e,h),Wt.add(nr)),i=Math.max(i,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,l=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new Ht(new Float32Array(4*l),4));const u=t.tangent.array,h=[],p=[];for(let ee=0;ee<l;ee++)h[ee]=new z,p[ee]=new z;const g=new z,v=new z,y=new z,b=new ve,S=new ve,R=new ve,x=new z,_=new z;function B(ee,k,be){g.fromArray(i,ee*3),v.fromArray(i,k*3),y.fromArray(i,be*3),b.fromArray(o,ee*2),S.fromArray(o,k*2),R.fromArray(o,be*2),v.sub(g),y.sub(g),S.sub(b),R.sub(b);const $=1/(S.x*R.y-R.x*S.y);!isFinite($)||(x.copy(v).multiplyScalar(R.y).addScaledVector(y,-S.y).multiplyScalar($),_.copy(y).multiplyScalar(S.x).addScaledVector(v,-R.x).multiplyScalar($),h[ee].add(x),h[k].add(x),h[be].add(x),p[ee].add(_),p[k].add(_),p[be].add(_))}let L=this.groups;L.length===0&&(L=[{start:0,count:n.length}]);for(let ee=0,k=L.length;ee<k;++ee){const be=L[ee],$=be.start,Z=be.count;for(let te=$,J=$+Z;te<J;te+=3)B(n[te+0],n[te+1],n[te+2])}const O=new z,f=new z,A=new z,X=new z;function me(ee){A.fromArray(r,ee*3),X.copy(A);const k=h[ee];O.copy(k),O.sub(A.multiplyScalar(A.dot(k))).normalize(),f.crossVectors(X,k);const $=f.dot(p[ee])<0?-1:1;u[ee*4]=O.x,u[ee*4+1]=O.y,u[ee*4+2]=O.z,u[ee*4+3]=$}for(let ee=0,k=L.length;ee<k;++ee){const be=L[ee],$=be.start,Z=be.count;for(let te=$,J=$+Z;te<J;te+=3)me(n[te+0]),me(n[te+1]),me(n[te+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,y=n.count;v<y;v++)n.setXYZ(v,0,0,0);const i=new z,r=new z,o=new z,l=new z,u=new z,h=new z,p=new z,g=new z;if(e)for(let v=0,y=e.count;v<y;v+=3){const b=e.getX(v+0),S=e.getX(v+1),R=e.getX(v+2);i.fromBufferAttribute(t,b),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,R),p.subVectors(o,r),g.subVectors(i,r),p.cross(g),l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,R),l.add(p),u.add(p),h.add(p),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(S,u.x,u.y,u.z),n.setXYZ(R,h.x,h.y,h.z)}else for(let v=0,y=t.count;v<y;v+=3)i.fromBufferAttribute(t,v+0),r.fromBufferAttribute(t,v+1),o.fromBufferAttribute(t,v+2),p.subVectors(o,r),g.subVectors(i,r),p.cross(g),n.setXYZ(v+0,p.x,p.y,p.z),n.setXYZ(v+1,p.x,p.y,p.z),n.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,l=e.attributes[i],u=l.array,h=l.itemSize*t,p=Math.min(u.length,o.length-h);for(let g=0,v=h;g<p;g++,v++)o[v]=u[g]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(l,u){const h=l.array,p=l.itemSize,g=l.normalized,v=new h.constructor(u.length*p);let y=0,b=0;for(let S=0,R=u.length;S<R;S++){l.isInterleavedBufferAttribute?y=u[S]*l.data.stride+l.offset:y=u[S]*p;for(let x=0;x<p;x++)v[b++]=h[y++]}return new Ht(v,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,i=this.attributes;for(const l in i){const u=i[l],h=e(u,n);t.setAttribute(l,h)}const r=this.morphAttributes;for(const l in r){const u=[],h=r[l];for(let p=0,g=h.length;p<g;p++){const v=h[p],y=e(v,n);u.push(y)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let r=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],p=[];for(let g=0,v=h.length;g<v;g++){const y=h[g];p.push(y.toJSON(e.data))}p.length>0&&(i[u]=p,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const p=i[h];this.setAttribute(h,p.clone(t))}const r=e.morphAttributes;for(const h in r){const p=[],g=r[h];for(let v=0,y=g.length;v<y;v++)p.push(g[v].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,p=o.length;h<p;h++){const g=o[h];this.addGroup(g.start,g.count,g.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Lt.prototype.isBufferGeometry=!0;const yc=new Qe,ir=new Ji,mo=new Zi,li=new z,ci=new z,ui=new z,go=new z,vo=new z,xo=new z,Us=new z,ks=new z,Hs=new z,Gs=new ve,Vs=new ve,Ws=new ve,yo=new z,qs=new z;class on extends mt{constructor(e=new Lt,t=new fo){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(r),e.ray.intersectsSphere(mo)===!1)||(yc.copy(r).invert(),ir.copy(e.ray).applyMatrix4(yc),n.boundingBox!==null&&ir.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const l=n.index,u=n.attributes.position,h=n.morphAttributes.position,p=n.morphTargetsRelative,g=n.attributes.uv,v=n.attributes.uv2,y=n.groups,b=n.drawRange;if(l!==null)if(Array.isArray(i))for(let S=0,R=y.length;S<R;S++){const x=y[S],_=i[x.materialIndex],B=Math.max(x.start,b.start),L=Math.min(l.count,Math.min(x.start+x.count,b.start+b.count));for(let O=B,f=L;O<f;O+=3){const A=l.getX(O),X=l.getX(O+1),me=l.getX(O+2);o=js(this,_,e,ir,u,h,p,g,v,A,X,me),o&&(o.faceIndex=Math.floor(O/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const S=Math.max(0,b.start),R=Math.min(l.count,b.start+b.count);for(let x=S,_=R;x<_;x+=3){const B=l.getX(x),L=l.getX(x+1),O=l.getX(x+2);o=js(this,i,e,ir,u,h,p,g,v,B,L,O),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(u!==void 0)if(Array.isArray(i))for(let S=0,R=y.length;S<R;S++){const x=y[S],_=i[x.materialIndex],B=Math.max(x.start,b.start),L=Math.min(u.count,Math.min(x.start+x.count,b.start+b.count));for(let O=B,f=L;O<f;O+=3){const A=O,X=O+1,me=O+2;o=js(this,_,e,ir,u,h,p,g,v,A,X,me),o&&(o.faceIndex=Math.floor(O/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const S=Math.max(0,b.start),R=Math.min(u.count,b.start+b.count);for(let x=S,_=R;x<_;x+=3){const B=x,L=x+1,O=x+2;o=js(this,i,e,ir,u,h,p,g,v,B,L,O),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}on.prototype.isMesh=!0;function Pd(s,e,t,n,i,r,o,l){let u;if(e.side===kt?u=n.intersectTriangle(o,r,i,!0,l):u=n.intersectTriangle(i,r,o,e.side!==Bi,l),u===null)return null;qs.copy(l),qs.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(qs);return h<t.near||h>t.far?null:{distance:h,point:qs.clone(),object:s}}function js(s,e,t,n,i,r,o,l,u,h,p,g){li.fromBufferAttribute(i,h),ci.fromBufferAttribute(i,p),ui.fromBufferAttribute(i,g);const v=s.morphTargetInfluences;if(r&&v){Us.set(0,0,0),ks.set(0,0,0),Hs.set(0,0,0);for(let b=0,S=r.length;b<S;b++){const R=v[b],x=r[b];R!==0&&(go.fromBufferAttribute(x,h),vo.fromBufferAttribute(x,p),xo.fromBufferAttribute(x,g),o?(Us.addScaledVector(go,R),ks.addScaledVector(vo,R),Hs.addScaledVector(xo,R)):(Us.addScaledVector(go.sub(li),R),ks.addScaledVector(vo.sub(ci),R),Hs.addScaledVector(xo.sub(ui),R)))}li.add(Us),ci.add(ks),ui.add(Hs)}s.isSkinnedMesh&&(s.boneTransform(h,li),s.boneTransform(p,ci),s.boneTransform(g,ui));const y=Pd(s,e,t,n,li,ci,ui,yo);if(y){l&&(Gs.fromBufferAttribute(l,h),Vs.fromBufferAttribute(l,p),Ws.fromBufferAttribute(l,g),y.uv=Bt.getUV(yo,li,ci,ui,Gs,Vs,Ws,new ve)),u&&(Gs.fromBufferAttribute(u,h),Vs.fromBufferAttribute(u,p),Ws.fromBufferAttribute(u,g),y.uv2=Bt.getUV(yo,li,ci,ui,Gs,Vs,Ws,new ve));const b={a:h,b:p,c:g,normal:new z,materialIndex:0};Bt.getNormal(li,ci,ui,b.normal),y.face=b}return y}class Vr extends Lt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const l=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const u=[],h=[],p=[],g=[];let v=0,y=0;b("z","y","x",-1,-1,n,t,e,o,r,0),b("z","y","x",1,-1,n,t,-e,o,r,1),b("x","z","y",1,1,e,n,t,i,o,2),b("x","z","y",1,-1,e,n,-t,i,o,3),b("x","y","z",1,-1,e,t,n,i,r,4),b("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(u),this.setAttribute("position",new Vt(h,3)),this.setAttribute("normal",new Vt(p,3)),this.setAttribute("uv",new Vt(g,2));function b(S,R,x,_,B,L,O,f,A,X,me){const ee=L/A,k=O/X,be=L/2,$=O/2,Z=f/2,te=A+1,J=X+1;let Q=0,Me=0;const De=new z;for(let ke=0;ke<J;ke++){const Se=ke*k-$;for(let et=0;et<te;et++){const he=et*ee-be;De[S]=he*_,De[R]=Se*B,De[x]=Z,h.push(De.x,De.y,De.z),De[S]=0,De[R]=0,De[x]=f>0?1:-1,p.push(De.x,De.y,De.z),g.push(et/A),g.push(1-ke/X),Q+=1}}for(let ke=0;ke<X;ke++)for(let Se=0;Se<A;Se++){const et=v+Se+te*ke,he=v+Se+te*(ke+1),ye=v+(Se+1)+te*(ke+1),Ne=v+(Se+1)+te*ke;u.push(et,he,Ne),u.push(he,ye,Ne),Me+=6}l.addGroup(y,Me,me),y+=Me,v+=Q}}static fromJSON(e){return new Vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $t(s){const e={};for(let t=0;t<s.length;t++){const n=rr(s[t]);for(const i in n)e[i]=n[i]}return e}const Dd={clone:rr,merge:$t};var Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Jt{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Id,this.fragmentShader=Nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}Pi.prototype.isShaderMaterial=!0;class _o extends mt{constructor(){super();this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}_o.prototype.isCamera=!0;class ln extends _o{constructor(e=50,t=1,n=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ya*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ya*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/u,t-=o.offsetY*n/h,i*=o.width/u,n*=o.height/h}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}ln.prototype.isPerspectiveCamera=!0;const sr=90,ar=1;class bo extends mt{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new ln(sr,ar,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new z(1,0,0)),this.add(i);const r=new ln(sr,ar,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new z(-1,0,0)),this.add(r);const o=new ln(sr,ar,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new z(0,1,0)),this.add(o);const l=new ln(sr,ar,e,t);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(new z(0,-1,0)),this.add(l);const u=new ln(sr,ar,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new z(0,0,1)),this.add(u);const h=new ln(sr,ar,e,t);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new z(0,0,-1)),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,l,u,h]=this.children,p=e.xr.enabled,g=e.getRenderTarget();e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,l),e.setRenderTarget(n,4),e.render(t,u),n.texture.generateMipmaps=v,e.setRenderTarget(n,5),e.render(t,h),e.setRenderTarget(g),e.xr.enabled=p}}class Xs extends Xt{constructor(e,t,n,i,r,o,l,u,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Nr;super(e,t,n,i,r,o,l,u,h,p);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Xs.prototype.isCubeTexture=!0;class _c extends Nn{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n);super(e,e,t);t=t||{},this.texture=new Xs(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=en,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Vr(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:ti});r.uniforms.tEquirect.value=t;const o=new on(i,r),l=t.minFilter;return t.minFilter===ws&&(t.minFilter=xn),new bo(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}_c.prototype.isWebGLCubeRenderTarget=!0;const Mo=new z,Fd=new z,Bd=new jt;class Zn{constructor(e=new z(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Mo.subVectors(n,t).cross(Fd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Mo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bd.getNormalMatrix(e),i=this.coplanarPoint(Mo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Zn.prototype.isPlane=!0;const or=new Zi,Ys=new z;class Zs{constructor(e=new Zn,t=new Zn,n=new Zn,i=new Zn,r=new Zn,o=new Zn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(r),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],l=n[3],u=n[4],h=n[5],p=n[6],g=n[7],v=n[8],y=n[9],b=n[10],S=n[11],R=n[12],x=n[13],_=n[14],B=n[15];return t[0].setComponents(l-i,g-u,S-v,B-R).normalize(),t[1].setComponents(l+i,g+u,S+v,B+R).normalize(),t[2].setComponents(l+r,g+h,S+y,B+x).normalize(),t[3].setComponents(l-r,g-h,S-y,B-x).normalize(),t[4].setComponents(l-o,g-p,S-b,B-_).normalize(),t[5].setComponents(l+o,g+p,S+b,B+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ys.x=i.normal.x>0?e.max.x:e.min.x,Ys.y=i.normal.y>0?e.max.y:e.min.y,Ys.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bc(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function zd(s,e){const t=e.isWebGL2,n=new WeakMap;function i(h,p){const g=h.array,v=h.usage,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,g,v),h.onUploadCallback();let b=5126;return g instanceof Float32Array?b=5126:g instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):g instanceof Uint16Array?h.isFloat16BufferAttribute?t?b=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):b=5123:g instanceof Int16Array?b=5122:g instanceof Uint32Array?b=5125:g instanceof Int32Array?b=5124:g instanceof Int8Array?b=5120:(g instanceof Uint8Array||g instanceof Uint8ClampedArray)&&(b=5121),{buffer:y,type:b,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version}}function r(h,p,g){const v=p.array,y=p.updateRange;s.bindBuffer(g,h),y.count===-1?s.bufferSubData(g,0,v):(t?s.bufferSubData(g,y.offset*v.BYTES_PER_ELEMENT,v,y.offset,y.count):s.bufferSubData(g,y.offset*v.BYTES_PER_ELEMENT,v.subarray(y.offset,y.offset+y.count)),y.count=-1)}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=n.get(h);p&&(s.deleteBuffer(p.buffer),n.delete(h))}function u(h,p){if(h.isGLBufferAttribute){const v=n.get(h);(!v||v.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const g=n.get(h);g===void 0?n.set(h,i(h,p)):g.version<h.version&&(r(g.buffer,h,p),g.version=h.version)}return{get:o,remove:l,update:u}}class wo extends Lt{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,l=Math.floor(n),u=Math.floor(i),h=l+1,p=u+1,g=e/l,v=t/u,y=[],b=[],S=[],R=[];for(let x=0;x<p;x++){const _=x*v-o;for(let B=0;B<h;B++){const L=B*g-r;b.push(L,-_,0),S.push(0,0,1),R.push(B/l),R.push(1-x/u)}}for(let x=0;x<u;x++)for(let _=0;_<l;_++){const B=_+h*x,L=_+h*(x+1),O=_+1+h*(x+1),f=_+1+h*x;y.push(B,L,f),y.push(L,O,f)}this.setIndex(y),this.setAttribute("position",new Vt(b,3)),this.setAttribute("normal",new Vt(S,3)),this.setAttribute("uv",new Vt(R,2))}static fromJSON(e){return new wo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Od=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wd="vec3 transformed = vec3( position );",qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Xd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,np=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ip=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",up=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,hp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_p=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,bp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wp=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Sp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tp=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ap=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Rp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Pp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Np=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Fp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Op=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Up=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Zp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,pm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wm=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Sm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Tm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Em=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Am=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Cm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Lm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Rm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Im=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Om=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Um=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$m=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Qm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Km=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ig=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ag=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,lg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,lt={alphamap_fragment:Od,alphamap_pars_fragment:Ud,alphatest_fragment:kd,alphatest_pars_fragment:Hd,aomap_fragment:Gd,aomap_pars_fragment:Vd,begin_vertex:Wd,beginnormal_vertex:qd,bsdfs:jd,bumpmap_pars_fragment:Xd,clipping_planes_fragment:Yd,clipping_planes_pars_fragment:Zd,clipping_planes_pars_vertex:Jd,clipping_planes_vertex:$d,color_fragment:Qd,color_pars_fragment:Kd,color_pars_vertex:ep,color_vertex:tp,common:np,cube_uv_reflection_fragment:ip,defaultnormal_vertex:rp,displacementmap_pars_vertex:sp,displacementmap_vertex:ap,emissivemap_fragment:op,emissivemap_pars_fragment:lp,encodings_fragment:cp,encodings_pars_fragment:up,envmap_fragment:hp,envmap_common_pars_fragment:fp,envmap_pars_fragment:dp,envmap_pars_vertex:pp,envmap_physical_pars_fragment:Tp,envmap_vertex:mp,fog_vertex:gp,fog_pars_vertex:vp,fog_fragment:xp,fog_pars_fragment:yp,gradientmap_pars_fragment:_p,lightmap_fragment:bp,lightmap_pars_fragment:Mp,lights_lambert_vertex:wp,lights_pars_begin:Sp,lights_toon_fragment:Ep,lights_toon_pars_fragment:Ap,lights_phong_fragment:Cp,lights_phong_pars_fragment:Lp,lights_physical_fragment:Rp,lights_physical_pars_fragment:Pp,lights_fragment_begin:Dp,lights_fragment_maps:Ip,lights_fragment_end:Np,logdepthbuf_fragment:Fp,logdepthbuf_pars_fragment:Bp,logdepthbuf_pars_vertex:zp,logdepthbuf_vertex:Op,map_fragment:Up,map_pars_fragment:kp,map_particle_fragment:Hp,map_particle_pars_fragment:Gp,metalnessmap_fragment:Vp,metalnessmap_pars_fragment:Wp,morphnormal_vertex:qp,morphtarget_pars_vertex:jp,morphtarget_vertex:Xp,normal_fragment_begin:Yp,normal_fragment_maps:Zp,normal_pars_fragment:Jp,normal_pars_vertex:$p,normal_vertex:Qp,normalmap_pars_fragment:Kp,clearcoat_normal_fragment_begin:em,clearcoat_normal_fragment_maps:tm,clearcoat_pars_fragment:nm,output_fragment:im,packing:rm,premultiplied_alpha_fragment:sm,project_vertex:am,dithering_fragment:om,dithering_pars_fragment:lm,roughnessmap_fragment:cm,roughnessmap_pars_fragment:um,shadowmap_pars_fragment:hm,shadowmap_pars_vertex:fm,shadowmap_vertex:dm,shadowmask_pars_fragment:pm,skinbase_vertex:mm,skinning_pars_vertex:gm,skinning_vertex:vm,skinnormal_vertex:xm,specularmap_fragment:ym,specularmap_pars_fragment:_m,tonemapping_fragment:bm,tonemapping_pars_fragment:Mm,transmission_fragment:wm,transmission_pars_fragment:Sm,uv_pars_fragment:Tm,uv_pars_vertex:Em,uv_vertex:Am,uv2_pars_fragment:Cm,uv2_pars_vertex:Lm,uv2_vertex:Rm,worldpos_vertex:Pm,background_vert:Dm,background_frag:Im,cube_vert:Nm,cube_frag:Fm,depth_vert:Bm,depth_frag:zm,distanceRGBA_vert:Om,distanceRGBA_frag:Um,equirect_vert:km,equirect_frag:Hm,linedashed_vert:Gm,linedashed_frag:Vm,meshbasic_vert:Wm,meshbasic_frag:qm,meshlambert_vert:jm,meshlambert_frag:Xm,meshmatcap_vert:Ym,meshmatcap_frag:Zm,meshnormal_vert:Jm,meshnormal_frag:$m,meshphong_vert:Qm,meshphong_frag:Km,meshphysical_vert:eg,meshphysical_frag:tg,meshtoon_vert:ng,meshtoon_frag:ig,points_vert:rg,points_frag:sg,shadow_vert:ag,shadow_frag:og,sprite_vert:lg,sprite_frag:cg},Ee={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new jt},uv2Transform:{value:new jt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new jt}}},Fn={basic:{uniforms:$t([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:$t([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.fog,Ee.lights,{emissive:{value:new Ge(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:$t([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:$t([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:$t([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ge(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:$t([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:$t([Ee.points,Ee.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:$t([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:$t([Ee.common,Ee.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:$t([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:$t([Ee.sprite,Ee.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},cube:{uniforms:$t([Ee.envmap,{opacity:{value:1}}]),vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:$t([Ee.common,Ee.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:$t([Ee.lights,Ee.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Fn.physical={uniforms:$t([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ve(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};function ug(s,e,t,n,i){const r=new Ge(0);let o=0,l,u,h=null,p=0,g=null;function v(b,S){let R=!1,x=S.isScene===!0?S.background:null;x&&x.isTexture&&(x=e.get(x));const _=s.xr,B=_.getSession&&_.getSession();B&&B.environmentBlendMode==="additive"&&(x=null),x===null?y(r,o):x&&x.isColor&&(y(x,1),R=!0),(s.autoClear||R)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ms)?(u===void 0&&(u=new on(new Vr(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:rr(Fn.cube.uniforms),vertexShader:Fn.cube.vertexShader,fragmentShader:Fn.cube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,O,f){this.matrixWorld.copyPosition(f.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(h!==x||p!==x.version||g!==s.toneMapping)&&(u.material.needsUpdate=!0,h=x,p=x.version,g=s.toneMapping),b.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new on(new wo(2,2),new Pi({name:"BackgroundMaterial",uniforms:rr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||p!==x.version||g!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,p=x.version,g=s.toneMapping),b.unshift(l,l.geometry,l.material,0,0,null))}function y(b,S){t.buffers.color.setClear(b.r,b.g,b.b,S,i)}return{getClearColor:function(){return r},setClearColor:function(b,S=1){r.set(b),o=S,y(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,y(r,o)},render:v}}function hg(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,l={},u=S(null);let h=u;function p($,Z,te,J,Q){let Me=!1;if(o){const De=b(J,te,Z);h!==De&&(h=De,v(h.object)),Me=R(J,Q),Me&&x(J,Q)}else{const De=Z.wireframe===!0;(h.geometry!==J.id||h.program!==te.id||h.wireframe!==De)&&(h.geometry=J.id,h.program=te.id,h.wireframe=De,Me=!0)}$.isInstancedMesh===!0&&(Me=!0),Q!==null&&t.update(Q,34963),Me&&(A($,Z,te,J),Q!==null&&s.bindBuffer(34963,t.get(Q).buffer))}function g(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function v($){return n.isWebGL2?s.bindVertexArray($):r.bindVertexArrayOES($)}function y($){return n.isWebGL2?s.deleteVertexArray($):r.deleteVertexArrayOES($)}function b($,Z,te){const J=te.wireframe===!0;let Q=l[$.id];Q===void 0&&(Q={},l[$.id]=Q);let Me=Q[Z.id];Me===void 0&&(Me={},Q[Z.id]=Me);let De=Me[J];return De===void 0&&(De=S(g()),Me[J]=De),De}function S($){const Z=[],te=[],J=[];for(let Q=0;Q<i;Q++)Z[Q]=0,te[Q]=0,J[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:te,attributeDivisors:J,object:$,attributes:{},index:null}}function R($,Z){const te=h.attributes,J=$.attributes;let Q=0;for(const Me in J){const De=te[Me],ke=J[Me];if(De===void 0||De.attribute!==ke||De.data!==ke.data)return!0;Q++}return h.attributesNum!==Q||h.index!==Z}function x($,Z){const te={},J=$.attributes;let Q=0;for(const Me in J){const De=J[Me],ke={};ke.attribute=De,De.data&&(ke.data=De.data),te[Me]=ke,Q++}h.attributes=te,h.attributesNum=Q,h.index=Z}function _(){const $=h.newAttributes;for(let Z=0,te=$.length;Z<te;Z++)$[Z]=0}function B($){L($,0)}function L($,Z){const te=h.newAttributes,J=h.enabledAttributes,Q=h.attributeDivisors;te[$]=1,J[$]===0&&(s.enableVertexAttribArray($),J[$]=1),Q[$]!==Z&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"]($,Z),Q[$]=Z)}function O(){const $=h.newAttributes,Z=h.enabledAttributes;for(let te=0,J=Z.length;te<J;te++)Z[te]!==$[te]&&(s.disableVertexAttribArray(te),Z[te]=0)}function f($,Z,te,J,Q,Me){n.isWebGL2===!0&&(te===5124||te===5125)?s.vertexAttribIPointer($,Z,te,Q,Me):s.vertexAttribPointer($,Z,te,J,Q,Me)}function A($,Z,te,J){if(n.isWebGL2===!1&&($.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const Q=J.attributes,Me=te.getAttributes(),De=Z.defaultAttributeValues;for(const ke in Me){const Se=Me[ke];if(Se.location>=0){let et=Q[ke];if(et===void 0&&(ke==="instanceMatrix"&&$.instanceMatrix&&(et=$.instanceMatrix),ke==="instanceColor"&&$.instanceColor&&(et=$.instanceColor)),et!==void 0){const he=et.normalized,ye=et.itemSize,Ne=t.get(et);if(Ne===void 0)continue;const ae=Ne.buffer,He=Ne.type,Ye=Ne.bytesPerElement;if(et.isInterleavedBufferAttribute){const Ce=et.data,Be=Ce.stride,nt=et.offset;if(Ce&&Ce.isInstancedInterleavedBuffer){for(let oe=0;oe<Se.locationSize;oe++)L(Se.location+oe,Ce.meshPerAttribute);$.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let oe=0;oe<Se.locationSize;oe++)B(Se.location+oe);s.bindBuffer(34962,ae);for(let oe=0;oe<Se.locationSize;oe++)f(Se.location+oe,ye/Se.locationSize,He,he,Be*Ye,(nt+ye/Se.locationSize*oe)*Ye)}else{if(et.isInstancedBufferAttribute){for(let Ce=0;Ce<Se.locationSize;Ce++)L(Se.location+Ce,et.meshPerAttribute);$.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Ce=0;Ce<Se.locationSize;Ce++)B(Se.location+Ce);s.bindBuffer(34962,ae);for(let Ce=0;Ce<Se.locationSize;Ce++)f(Se.location+Ce,ye/Se.locationSize,He,he,ye*Ye,ye/Se.locationSize*Ce*Ye)}}else if(De!==void 0){const he=De[ke];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(Se.location,he);break;case 3:s.vertexAttrib3fv(Se.location,he);break;case 4:s.vertexAttrib4fv(Se.location,he);break;default:s.vertexAttrib1fv(Se.location,he)}}}}O()}function X(){k();for(const $ in l){const Z=l[$];for(const te in Z){const J=Z[te];for(const Q in J)y(J[Q].object),delete J[Q];delete Z[te]}delete l[$]}}function me($){if(l[$.id]===void 0)return;const Z=l[$.id];for(const te in Z){const J=Z[te];for(const Q in J)y(J[Q].object),delete J[Q];delete Z[te]}delete l[$.id]}function ee($){for(const Z in l){const te=l[Z];if(te[$.id]===void 0)continue;const J=te[$.id];for(const Q in J)y(J[Q].object),delete J[Q];delete te[$.id]}}function k(){be(),h!==u&&(h=u,v(h.object))}function be(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:p,reset:k,resetDefaultState:be,dispose:X,releaseStatesOfGeometry:me,releaseStatesOfProgram:ee,initAttributes:_,enableAttribute:B,disableUnusedAttributes:O}}function fg(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,g){if(g===0)return;let v,y;if(i)v=s,y="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[y](r,h,p,g),t.update(p,r,g)}this.setMode=o,this.render=l,this.renderInstances=u}function dg(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&s instanceof WebGL2ComputeRenderingContext;let l=t.precision!==void 0?t.precision:"highp";const u=r(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=o||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,g=s.getParameter(34930),v=s.getParameter(35660),y=s.getParameter(3379),b=s.getParameter(34076),S=s.getParameter(34921),R=s.getParameter(36347),x=s.getParameter(36348),_=s.getParameter(36349),B=v>0,L=o||e.has("OES_texture_float"),O=B&&L,f=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:r,precision:l,logarithmicDepthBuffer:p,maxTextures:g,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:b,maxAttributes:S,maxVertexUniforms:R,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:B,floatFragmentTextures:L,floatVertexTextures:O,maxSamples:f}}function pg(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Zn,l=new jt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v,y){const b=g.length!==0||v||n!==0||i;return i=v,t=p(g,y,0),n=g.length,b},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1,h()},this.setState=function(g,v,y){const b=g.clippingPlanes,S=g.clipIntersection,R=g.clipShadows,x=s.get(g);if(!i||b===null||b.length===0||r&&!R)r?p(null):h();else{const _=r?0:n,B=_*4;let L=x.clippingState||null;u.value=L,L=p(b,v,B,y);for(let O=0;O!==B;++O)L[O]=t[O];x.clippingState=L,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(g,v,y,b){const S=g!==null?g.length:0;let R=null;if(S!==0){if(R=u.value,b!==!0||R===null){const x=y+S*4,_=v.matrixWorldInverse;l.getNormalMatrix(_),(R===null||R.length<x)&&(R=new Float32Array(x));for(let B=0,L=y;B!==S;++B,L+=4)o.copy(g[B]).applyMatrix4(_,l),o.normal.toArray(R,L),R[L+3]=o.constant}u.value=R,u.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,R}}function mg(s){let e=new WeakMap;function t(o,l){return l===za?o.mapping=Nr:l===Oa&&(o.mapping=Fr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const l=o.mapping;if(l===za||l===Oa)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const h=s.getRenderTarget(),p=new _c(u.height/2);return p.fromEquirectangularTexture(s,o),e.set(o,p),s.setRenderTarget(h),o.addEventListener("dispose",i),t(p.texture,o.mapping)}else return null}}return o}function i(o){const l=o.target;l.removeEventListener("dispose",i);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class So extends _o{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,l=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,l-=p*this.view.offsetY,u=l-p*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}So.prototype.isOrthographicCamera=!0;class Js extends Pi{constructor(e){super(e);this.type="RawShaderMaterial"}}Js.prototype.isRawShaderMaterial=!0;const lr=4,hi=8,Bn=Math.pow(2,hi),Mc=[.125,.215,.35,.446,.526,.582],wc=hi-lr+1+Mc.length,cr=20,fi={[Zt]:0,[Ai]:1,[qa]:2,[Ql]:3,[Kl]:4,[ec]:5,[Wa]:6},To=new So,{_lodPlanes:Wr,_sizeLods:Sc,_sigmas:$s}=xg(),Tc=new Ge;let Eo=null;const Di=(1+Math.sqrt(5))/2,ur=1/Di,Ec=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Di,ur),new z(0,Di,-ur),new z(ur,0,Di),new z(-ur,0,Di),new z(Di,ur,0),new z(-Di,ur,0)];class gg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=yg(cr),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Eo=this._renderer.getRenderTarget();const r=this._allocateTargets();return this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Lc(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Cc(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Wr.length;e++)Wr[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Eo),e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e){Eo=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:ni,format:wf,encoding:vg(e)?e.encoding:qa,depthBuffer:!1},n=Ac(t);return n.depthBuffer=!e,this._pingPongRenderTarget=Ac(t),n}_compileMaterial(e){const t=new on(Wr[0],e);this._renderer.compile(t,To)}_sceneToCubeUV(e,t,n,i){const r=90,o=1,l=new ln(r,o,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,v=p.outputEncoding,y=p.toneMapping;p.getClearColor(Tc),p.toneMapping=Ei,p.outputEncoding=Zt,p.autoClear=!1;const b=new fo({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),S=new on(new Vr,b);let R=!1;const x=e.background;x?x.isColor&&(b.color.copy(x),e.background=null,R=!0):(b.color.copy(Tc),R=!0);for(let _=0;_<6;_++){const B=_%3;B==0?(l.up.set(0,u[_],0),l.lookAt(h[_],0,0)):B==1?(l.up.set(0,0,u[_]),l.lookAt(0,h[_],0)):(l.up.set(0,u[_],0),l.lookAt(0,0,h[_])),Qs(i,B*Bn,_>2?Bn:0,Bn,Bn),p.setRenderTarget(i),R&&p.render(S,l),p.render(e,l)}S.geometry.dispose(),S.material.dispose(),p.toneMapping=y,p.outputEncoding=v,p.autoClear=g,e.background=x}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===en&&t.type===ni&&t.encoding===Ai?e.value=fi[Zt]:e.value=fi[t.encoding]}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Nr||e.mapping===Fr;i?this._cubemapShader==null&&(this._cubemapShader=Lc()):this._equirectShader==null&&(this._equirectShader=Cc());const r=i?this._cubemapShader:this._equirectShader,o=new on(Wr[0],r),l=r.uniforms;l.envMap.value=e,i||l.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(l.inputEncoding,e),this._setEncoding(l.outputEncoding,t.texture),Qs(t,0,0,3*Bn,2*Bn),n.setRenderTarget(t),n.render(o,To)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<wc;i++){const r=Math.sqrt($s[i]*$s[i]-$s[i-1]*$s[i-1]),o=Ec[(i-1)%Ec.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,l){const u=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new on(Wr[i],h),v=h.uniforms,y=Sc[n]-1,b=isFinite(r)?Math.PI/(2*y):2*Math.PI/(2*cr-1),S=r/b,R=isFinite(r)?1+Math.floor(p*S):cr;R>cr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${R} samples when the maximum is set to ${cr}`);const x=[];let _=0;for(let f=0;f<cr;++f){const A=f/S,X=Math.exp(-A*A/2);x.push(X),f==0?_+=X:f<R&&(_+=2*X)}for(let f=0;f<x.length;f++)x[f]=x[f]/_;v.envMap.value=e.texture,v.samples.value=R,v.weights.value=x,v.latitudinal.value=o==="latitudinal",l&&(v.poleAxis.value=l),v.dTheta.value=b,v.mipInt.value=hi-n,this._setEncoding(v.inputEncoding,e.texture),this._setEncoding(v.outputEncoding,e.texture);const B=Sc[i],L=3*Math.max(0,Bn-2*B),O=(i===0?0:2*Bn)+2*B*(i>hi-lr?i-hi+lr:0);Qs(t,L,O,3*B,2*B),u.setRenderTarget(t),u.render(g,To)}}function vg(s){return s===void 0||s.type!==ni?!1:s.encoding===Zt||s.encoding===Ai||s.encoding===Wa}function xg(){const s=[],e=[],t=[];let n=hi;for(let i=0;i<wc;i++){const r=Math.pow(2,n);e.push(r);let o=1/r;i>hi-lr?o=Mc[i-hi+lr-1]:i==0&&(o=0),t.push(o);const l=1/(r-1),u=-l/2,h=1+l/2,p=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,v=6,y=3,b=2,S=1,R=new Float32Array(y*v*g),x=new Float32Array(b*v*g),_=new Float32Array(S*v*g);for(let L=0;L<g;L++){const O=L%3*2/3-1,f=L>2?0:-1,A=[O,f,0,O+2/3,f,0,O+2/3,f+1,0,O,f,0,O+2/3,f+1,0,O,f+1,0];R.set(A,y*v*L),x.set(p,b*v*L);const X=[L,L,L,L,L,L];_.set(X,S*v*L)}const B=new Lt;B.setAttribute("position",new Ht(R,y)),B.setAttribute("uv",new Ht(x,b)),B.setAttribute("faceIndex",new Ht(_,S)),s.push(B),n>lr&&n--}return{_lodPlanes:s,_sizeLods:e,_sigmas:t}}function Ac(s){const e=new Nn(3*Bn,3*Bn,s);return e.texture.mapping=Ms,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Qs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function yg(s){const e=new Float32Array(s),t=new z(0,1,0);return new Js({name:"SphericalGaussianBlur",defines:{n:s},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:fi[Zt]},outputEncoding:{value:fi[Zt]}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${Co()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Cc(){const s=new ve(1,1);return new Js({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:s},inputEncoding:{value:fi[Zt]},outputEncoding:{value:fi[Zt]}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Co()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Lc(){return new Js({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:fi[Zt]},outputEncoding:{value:fi[Zt]}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Co()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ao(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Co(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function _g(s){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const u=l.mapping,h=u===za||u===Oa,p=u===Nr||u===Fr;if(h||p){if(e.has(l))return e.get(l).texture;{const g=l.image;if(h&&g&&g.height>0||p&&g&&i(g)){const v=s.getRenderTarget();t===null&&(t=new gg(s));const y=h?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,y),s.setRenderTarget(v),l.addEventListener("dispose",r),y.texture}else return null}}}return l}function i(l){let u=0;const h=6;for(let p=0;p<h;p++)l[p]!==void 0&&u++;return u===h}function r(l){const u=l.target;u.removeEventListener("dispose",r);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function bg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Mg(s,e,t,n){const i={},r=new WeakMap;function o(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",o),delete i[v.id];const y=r.get(v);y&&(e.remove(y),r.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function l(g,v){return i[v.id]===!0||(v.addEventListener("dispose",o),i[v.id]=!0,t.memory.geometries++),v}function u(g){const v=g.attributes;for(const b in v)e.update(v[b],34962);const y=g.morphAttributes;for(const b in y){const S=y[b];for(let R=0,x=S.length;R<x;R++)e.update(S[R],34962)}}function h(g){const v=[],y=g.index,b=g.attributes.position;let S=0;if(y!==null){const _=y.array;S=y.version;for(let B=0,L=_.length;B<L;B+=3){const O=_[B+0],f=_[B+1],A=_[B+2];v.push(O,f,f,A,A,O)}}else{const _=b.array;S=b.version;for(let B=0,L=_.length/3-1;B<L;B+=3){const O=B+0,f=B+1,A=B+2;v.push(O,f,f,A,A,O)}}const R=new(ic(v)>65535?xc:vc)(v,1);R.version=S;const x=r.get(g);x&&e.remove(x),r.set(g,R)}function p(g){const v=r.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&h(g)}else h(g);return r.get(g)}return{get:l,update:u,getWireframeAttribute:p}}function wg(s,e,t,n){const i=n.isWebGL2;let r;function o(v){r=v}let l,u;function h(v){l=v.type,u=v.bytesPerElement}function p(v,y){s.drawElements(r,y,l,v*u),t.update(y,r,1)}function g(v,y,b){if(b===0)return;let S,R;if(i)S=s,R="drawElementsInstanced";else if(S=e.get("ANGLE_instanced_arrays"),R="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[R](r,y,l,v*u,b),t.update(y,r,b)}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=g}function Sg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case 4:t.triangles+=l*(r/3);break;case 1:t.lines+=l*(r/2);break;case 3:t.lines+=l*(r-1);break;case 2:t.lines+=l*r;break;case 0:t.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}class Lo extends Xt{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Lo.prototype.isDataTexture2DArray=!0;function Tg(s,e){return s[0]-e[0]}function Eg(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Rc(s,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(t)}function Ag(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new z,l=[];for(let h=0;h<8;h++)l[h]=[h,0];function u(h,p,g,v){const y=h.morphTargetInfluences;if(e.isWebGL2===!0){const b=p.morphAttributes.position.length;let S=r.get(p);if(S===void 0||S.count!==b){S!==void 0&&S.texture.dispose();const _=p.morphAttributes.normal!==void 0,B=p.morphAttributes.position,L=p.morphAttributes.normal||[],O=p.attributes.position.count,f=_===!0?2:1;let A=O*f,X=1;A>e.maxTextureSize&&(X=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const me=new Float32Array(A*X*4*b),ee=new Lo(me,A,X,b);ee.format=en,ee.type=ii;const k=f*4;for(let be=0;be<b;be++){const $=B[be],Z=L[be],te=A*X*4*be;for(let J=0;J<$.count;J++){o.fromBufferAttribute($,J),$.normalized===!0&&Rc(o,$);const Q=J*k;me[te+Q+0]=o.x,me[te+Q+1]=o.y,me[te+Q+2]=o.z,me[te+Q+3]=0,_===!0&&(o.fromBufferAttribute(Z,J),Z.normalized===!0&&Rc(o,Z),me[te+Q+4]=o.x,me[te+Q+5]=o.y,me[te+Q+6]=o.z,me[te+Q+7]=0)}}S={count:b,texture:ee,size:new ve(A,X)},r.set(p,S)}let R=0;for(let _=0;_<y.length;_++)R+=y[_];const x=p.morphTargetsRelative?1:1-R;v.getUniforms().setValue(s,"morphTargetBaseInfluence",x),v.getUniforms().setValue(s,"morphTargetInfluences",y),v.getUniforms().setValue(s,"morphTargetsTexture",S.texture,t),v.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}else{const b=y===void 0?0:y.length;let S=n[p.id];if(S===void 0||S.length!==b){S=[];for(let L=0;L<b;L++)S[L]=[L,0];n[p.id]=S}for(let L=0;L<b;L++){const O=S[L];O[0]=L,O[1]=y[L]}S.sort(Eg);for(let L=0;L<8;L++)L<b&&S[L][1]?(l[L][0]=S[L][0],l[L][1]=S[L][1]):(l[L][0]=Number.MAX_SAFE_INTEGER,l[L][1]=0);l.sort(Tg);const R=p.morphAttributes.position,x=p.morphAttributes.normal;let _=0;for(let L=0;L<8;L++){const O=l[L],f=O[0],A=O[1];f!==Number.MAX_SAFE_INTEGER&&A?(R&&p.getAttribute("morphTarget"+L)!==R[f]&&p.setAttribute("morphTarget"+L,R[f]),x&&p.getAttribute("morphNormal"+L)!==x[f]&&p.setAttribute("morphNormal"+L,x[f]),i[L]=A,_+=A):(R&&p.hasAttribute("morphTarget"+L)===!0&&p.deleteAttribute("morphTarget"+L),x&&p.hasAttribute("morphNormal"+L)===!0&&p.deleteAttribute("morphNormal"+L),i[L]=0)}const B=p.morphTargetsRelative?1:1-_;v.getUniforms().setValue(s,"morphTargetBaseInfluence",B),v.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:u}}function Cg(s,e,t,n){let i=new WeakMap;function r(u){const h=n.render.frame,p=u.geometry,g=e.get(u,p);return i.get(g)!==h&&(e.update(g),i.set(g,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),t.update(u.instanceMatrix,34962),u.instanceColor!==null&&t.update(u.instanceColor,34962)),g}function o(){i=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}class Pc extends Xt{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Pc.prototype.isDataTexture3D=!0;const Dc=new Xt,Lg=new Lo,Rg=new Pc,Ic=new Xs,Nc=[],Fc=[],Bc=new Float32Array(16),zc=new Float32Array(9),Oc=new Float32Array(4);function hr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Nc[i];if(r===void 0&&(r=new Float32Array(i),Nc[i]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,s[o].toArray(r,l)}return r}function tn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Qt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Uc(s,e){let t=Fc[e];t===void 0&&(t=new Int32Array(e),Fc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Pg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Dg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2fv(this.addr,e),Qt(t,e)}}function Ig(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;s.uniform3fv(this.addr,e),Qt(t,e)}}function Ng(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4fv(this.addr,e),Qt(t,e)}}function Fg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(tn(t,n))return;Oc.set(n),s.uniformMatrix2fv(this.addr,!1,Oc),Qt(t,n)}}function Bg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(tn(t,n))return;zc.set(n),s.uniformMatrix3fv(this.addr,!1,zc),Qt(t,n)}}function zg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(tn(t,n))return;Bc.set(n),s.uniformMatrix4fv(this.addr,!1,Bc),Qt(t,n)}}function Og(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ug(s,e){const t=this.cache;tn(t,e)||(s.uniform2iv(this.addr,e),Qt(t,e))}function kg(s,e){const t=this.cache;tn(t,e)||(s.uniform3iv(this.addr,e),Qt(t,e))}function Hg(s,e){const t=this.cache;tn(t,e)||(s.uniform4iv(this.addr,e),Qt(t,e))}function Gg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Vg(s,e){const t=this.cache;tn(t,e)||(s.uniform2uiv(this.addr,e),Qt(t,e))}function Wg(s,e){const t=this.cache;tn(t,e)||(s.uniform3uiv(this.addr,e),Qt(t,e))}function qg(s,e){const t=this.cache;tn(t,e)||(s.uniform4uiv(this.addr,e),Qt(t,e))}function jg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||Dc,i)}function Xg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rg,i)}function Yg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||Ic,i)}function Zg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Lg,i)}function Jg(s){switch(s){case 5126:return Pg;case 35664:return Dg;case 35665:return Ig;case 35666:return Ng;case 35674:return Fg;case 35675:return Bg;case 35676:return zg;case 5124:case 35670:return Og;case 35667:case 35671:return Ug;case 35668:case 35672:return kg;case 35669:case 35673:return Hg;case 5125:return Gg;case 36294:return Vg;case 36295:return Wg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Zg}}function $g(s,e){s.uniform1fv(this.addr,e)}function Qg(s,e){const t=hr(e,this.size,2);s.uniform2fv(this.addr,t)}function Kg(s,e){const t=hr(e,this.size,3);s.uniform3fv(this.addr,t)}function ev(s,e){const t=hr(e,this.size,4);s.uniform4fv(this.addr,t)}function tv(s,e){const t=hr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function nv(s,e){const t=hr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function iv(s,e){const t=hr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function rv(s,e){s.uniform1iv(this.addr,e)}function sv(s,e){s.uniform2iv(this.addr,e)}function av(s,e){s.uniform3iv(this.addr,e)}function ov(s,e){s.uniform4iv(this.addr,e)}function lv(s,e){s.uniform1uiv(this.addr,e)}function cv(s,e){s.uniform2uiv(this.addr,e)}function uv(s,e){s.uniform3uiv(this.addr,e)}function hv(s,e){s.uniform4uiv(this.addr,e)}function fv(s,e,t){const n=e.length,i=Uc(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTexture2D(e[r]||Dc,i[r])}function dv(s,e,t){const n=e.length,i=Uc(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTextureCube(e[r]||Ic,i[r])}function pv(s){switch(s){case 5126:return $g;case 35664:return Qg;case 35665:return Kg;case 35666:return ev;case 35674:return tv;case 35675:return nv;case 35676:return iv;case 5124:case 35670:return rv;case 35667:case 35671:return sv;case 35668:case 35672:return av;case 35669:case 35673:return ov;case 5125:return lv;case 36294:return cv;case 36295:return uv;case 36296:return hv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35680:case 36300:case 36308:case 36293:return dv}}function mv(s,e,t){this.id=s,this.addr=t,this.cache=[],this.setValue=Jg(e.type)}function kc(s,e,t){this.id=s,this.addr=t,this.cache=[],this.size=e.size,this.setValue=pv(e.type)}kc.prototype.updateCache=function(s){const e=this.cache;s instanceof Float32Array&&e.length!==s.length&&(this.cache=new Float32Array(s.length)),Qt(e,s)};function Hc(s){this.id=s,this.seq=[],this.map={}}Hc.prototype.setValue=function(s,e,t){const n=this.seq;for(let i=0,r=n.length;i!==r;++i){const o=n[i];o.setValue(s,e[o.id],t)}};const Ro=/(\w+)(\])?(\[|\.)?/g;function Gc(s,e){s.seq.push(e),s.map[e.id]=e}function gv(s,e,t){const n=s.name,i=n.length;for(Ro.lastIndex=0;;){const r=Ro.exec(n),o=Ro.lastIndex;let l=r[1];const u=r[2]==="]",h=r[3];if(u&&(l=l|0),h===void 0||h==="["&&o+2===i){Gc(t,h===void 0?new mv(l,s,e):new kc(l,s,e));break}else{let g=t.map[l];g===void 0&&(g=new Hc(l),Gc(t,g)),t=g}}}function di(s,e){this.seq=[],this.map={};const t=s.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=s.getActiveUniform(e,n),r=s.getUniformLocation(e,i.name);gv(i,r,this)}}di.prototype.setValue=function(s,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(s,t,n)};di.prototype.setOptional=function(s,e,t){const n=e[t];n!==void 0&&this.setValue(s,t,n)};di.upload=function(s,e,t,n){for(let i=0,r=e.length;i!==r;++i){const o=e[i],l=t[o.id];l.needsUpdate!==!1&&o.setValue(s,l.value,n)}};di.seqWithValue=function(s,e){const t=[];for(let n=0,i=s.length;n!==i;++n){const r=s[n];r.id in e&&t.push(r)}return t};function Vc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let vv=0;function xv(s){const e=s.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Wc(s){switch(s){case Zt:return["Linear","( value )"];case Ai:return["sRGB","( value )"];case qa:return["RGBE","( value )"];case Ql:return["RGBM","( value, 7.0 )"];case Kl:return["RGBM","( value, 16.0 )"];case ec:return["RGBD","( value, 256.0 )"];case Wa:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case ud:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function qc(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+xv(s.getShaderSource(e))}function Ii(s,e){const t=Wc(e);return"vec4 "+s+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function yv(s,e){const t=Wc(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function _v(s,e){let t;switch(e){case lf:t="Linear";break;case cf:t="Reinhard";break;case uf:t="OptimizedCineon";break;case hf:t="ACESFilmic";break;case ff:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function bv(s){return[s.extensionDerivatives||s.envMapCubeUV||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qr).join(`
`)}function Mv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wv(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let l=1;r.type===35674&&(l=2),r.type===35675&&(l=3),r.type===35676&&(l=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:l}}return t}function qr(s){return s!==""}function jc(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Po(s){return s.replace(Sv,Tv)}function Tv(s,e){const t=lt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Po(t)}const Ev=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Av=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(s){return s.replace(Av,Zc).replace(Ev,Cv)}function Cv(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Zc(s,e,t,n)}function Zc(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Jc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ll?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Uh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pr&&(e="SHADOWMAP_TYPE_VSM"),e}function Rv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Nr:case Fr:e="ENVMAP_TYPE_CUBE";break;case Ms:case Ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Fr:case Ua:e="ENVMAP_MODE_REFRACTION";break}return e}function Dv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case bs:e="ENVMAP_BLENDING_MULTIPLY";break;case af:e="ENVMAP_BLENDING_MIX";break;case of:e="ENVMAP_BLENDING_ADD";break}return e}function Iv(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,l=t.fragmentShader;const u=Lv(t),h=Rv(t),p=Pv(t),g=Dv(t),v=s.gammaFactor>0?s.gammaFactor:1,y=t.isWebGL2?"":bv(t),b=Mv(r),S=i.createProgram();let R,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(R=[b].filter(qr).join(`
`),R.length>0&&(R+=`
`),x=[y,b].filter(qr).join(`
`),x.length>0&&(x+=`
`)):(R=[Jc(t),"#define SHADER_NAME "+t.shaderName,b,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+v,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),x=[y,Jc(t),"#define SHADER_NAME "+t.shaderName,b,"#define GAMMA_FACTOR "+v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?lt.tonemapping_pars_fragment:"",t.toneMapping!==Ei?_v("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===Ui?"#define OPAQUE":"",lt.encodings_pars_fragment,t.map?Ii("mapTexelToLinear",t.mapEncoding):"",t.matcap?Ii("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Ii("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Ii("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?Ii("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?Ii("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?Ii("lightMapTexelToLinear",t.lightMapEncoding):"",yv("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qr).join(`
`)),o=Po(o),o=jc(o,t),o=Xc(o,t),l=Po(l),l=jc(l,t),l=Xc(l,t),o=Yc(o),l=Yc(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,R=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,x=["#define varying in",t.glslVersion===tc?"":"out highp vec4 pc_fragColor;",t.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const B=_+R+o,L=_+x+l,O=Vc(i,35633,B),f=Vc(i,35632,L);if(i.attachShader(S,O),i.attachShader(S,f),t.index0AttributeName!==void 0?i.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S),s.debug.checkShaderErrors){const me=i.getProgramInfoLog(S).trim(),ee=i.getShaderInfoLog(O).trim(),k=i.getShaderInfoLog(f).trim();let be=!0,$=!0;if(i.getProgramParameter(S,35714)===!1){be=!1;const Z=qc(i,O,"vertex"),te=qc(i,f,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,35715)+`

Program Info Log: `+me+`
`+Z+`
`+te)}else me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",me):(ee===""||k==="")&&($=!1);$&&(this.diagnostics={runnable:be,programLog:me,vertexShader:{log:ee,prefix:R},fragmentShader:{log:k,prefix:x}})}i.deleteShader(O),i.deleteShader(f);let A;this.getUniforms=function(){return A===void 0&&(A=new di(i,S)),A};let X;return this.getAttributes=function(){return X===void 0&&(X=wv(i,S)),X},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.name=t.shaderName,this.id=vv++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=O,this.fragmentShader=f,this}function Nv(s,e,t,n,i,r,o){const l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,p=i.floatVertexTextures,g=i.maxVertexUniforms,v=i.vertexTextures;let y=i.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},S=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap",,"roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","specularIntensityMap","specularColorMap","specularColorMapEncoding","transmission","transmissionMap","thicknessMap","sheen","sheenColorMap","sheenColorMapEncoding","sheenRoughnessMap"];function R(A){const me=A.skeleton.bones;if(p)return 1024;{const k=Math.floor((g-20)/4),be=Math.min(k,me.length);return be<me.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+me.length+" bones. This GPU supports "+be+"."),0):be}}function x(A){let X;return A&&A.isTexture?X=A.encoding:A&&A.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),X=A.texture.encoding):X=Zt,u&&A&&A.isTexture&&A.format===en&&A.type===ni&&A.encoding===Ai&&(X=Zt),X}function _(A,X,me,ee,k){const be=ee.fog,$=A.isMeshStandardMaterial?ee.environment:null,Z=(A.isMeshStandardMaterial?t:e).get(A.envMap||$),te=b[A.type],J=k.isSkinnedMesh?R(k):0;A.precision!==null&&(y=i.getMaxPrecision(A.precision),y!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));let Q,Me;if(te){const he=Fn[te];Q=he.vertexShader,Me=he.fragmentShader}else Q=A.vertexShader,Me=A.fragmentShader;const De=s.getRenderTarget(),ke=A.alphaTest>0,Se=A.clearcoat>0;return{isWebGL2:u,shaderID:te,shaderName:A.type,vertexShader:Q,fragmentShader:Me,defines:A.defines,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,instancing:k.isInstancedMesh===!0,instancingColor:k.isInstancedMesh===!0&&k.instanceColor!==null,supportsVertexTextures:v,outputEncoding:De!==null?x(De.texture):s.outputEncoding,map:!!A.map,mapEncoding:x(A.map),matcap:!!A.matcap,matcapEncoding:x(A.matcap),envMap:!!Z,envMapMode:Z&&Z.mapping,envMapEncoding:x(Z),envMapCubeUV:!!Z&&(Z.mapping===Ms||Z.mapping===Ua),lightMap:!!A.lightMap,lightMapEncoding:x(A.lightMap),aoMap:!!A.aoMap,emissiveMap:!!A.emissiveMap,emissiveMapEncoding:x(A.emissiveMap),bumpMap:!!A.bumpMap,normalMap:!!A.normalMap,objectSpaceNormalMap:A.normalMapType===dd,tangentSpaceNormalMap:A.normalMapType===Vi,clearcoat:Se,clearcoatMap:Se&&!!A.clearcoatMap,clearcoatRoughnessMap:Se&&!!A.clearcoatRoughnessMap,clearcoatNormalMap:Se&&!!A.clearcoatNormalMap,displacementMap:!!A.displacementMap,roughnessMap:!!A.roughnessMap,metalnessMap:!!A.metalnessMap,specularMap:!!A.specularMap,specularIntensityMap:!!A.specularIntensityMap,specularColorMap:!!A.specularColorMap,specularColorMapEncoding:x(A.specularColorMap),alphaMap:!!A.alphaMap,alphaTest:ke,gradientMap:!!A.gradientMap,sheen:A.sheen>0,sheenColorMap:!!A.sheenColorMap,sheenColorMapEncoding:x(A.sheenColorMap),sheenRoughnessMap:!!A.sheenRoughnessMap,transmission:A.transmission>0,transmissionMap:!!A.transmissionMap,thicknessMap:!!A.thicknessMap,combine:A.combine,vertexTangents:!!A.normalMap&&!!k.geometry&&!!k.geometry.attributes.tangent,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!k.geometry&&!!k.geometry.attributes.color&&k.geometry.attributes.color.itemSize===4,vertexUvs:!!A.map||!!A.bumpMap||!!A.normalMap||!!A.specularMap||!!A.alphaMap||!!A.emissiveMap||!!A.roughnessMap||!!A.metalnessMap||!!A.clearcoatMap||!!A.clearcoatRoughnessMap||!!A.clearcoatNormalMap||!!A.displacementMap||!!A.transmissionMap||!!A.thicknessMap||!!A.specularIntensityMap||!!A.specularColorMap||!!A.sheenColorMap||A.sheenRoughnessMap,uvsVertexOnly:!(!!A.map||!!A.bumpMap||!!A.normalMap||!!A.specularMap||!!A.alphaMap||!!A.emissiveMap||!!A.roughnessMap||!!A.metalnessMap||!!A.clearcoatNormalMap||A.transmission>0||!!A.transmissionMap||!!A.thicknessMap||!!A.specularIntensityMap||!!A.specularColorMap||!!A.sheen>0||!!A.sheenColorMap||!!A.sheenRoughnessMap)&&!!A.displacementMap,fog:!!be,useFog:A.fog,fogExp2:be&&be.isFogExp2,flatShading:!!A.flatShading,sizeAttenuation:A.sizeAttenuation,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0&&J>0,maxBones:J,useVertexTexture:p,morphTargets:!!k.geometry&&!!k.geometry.morphAttributes.position,morphNormals:!!k.geometry&&!!k.geometry.morphAttributes.normal,morphTargetsCount:!!k.geometry&&!!k.geometry.morphAttributes.position?k.geometry.morphAttributes.position.length:0,numDirLights:X.directional.length,numPointLights:X.point.length,numSpotLights:X.spot.length,numRectAreaLights:X.rectArea.length,numHemiLights:X.hemi.length,numDirLightShadows:X.directionalShadowMap.length,numPointLightShadows:X.pointShadowMap.length,numSpotLightShadows:X.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,format:A.format,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&me.length>0,shadowMapType:s.shadowMap.type,toneMapping:A.toneMapped?s.toneMapping:Ei,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Bi,flipSided:A.side===kt,depthPacking:A.depthPacking!==void 0?A.depthPacking:!1,index0AttributeName:A.index0AttributeName,extensionDerivatives:A.extensions&&A.extensions.derivatives,extensionFragDepth:A.extensions&&A.extensions.fragDepth,extensionDrawBuffers:A.extensions&&A.extensions.drawBuffers,extensionShaderTextureLOD:A.extensions&&A.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:A.customProgramCacheKey()}}function B(A){const X=[];if(A.shaderID?X.push(A.shaderID):(X.push(rc(A.fragmentShader)),X.push(rc(A.vertexShader))),A.defines!==void 0)for(const me in A.defines)X.push(me),X.push(A.defines[me]);if(A.isRawShaderMaterial===!1){for(let me=0;me<S.length;me++)X.push(A[S[me]]);X.push(s.outputEncoding),X.push(s.gammaFactor)}return X.push(A.customProgramCacheKey),X.join()}function L(A){const X=b[A.type];let me;if(X){const ee=Fn[X];me=Dd.clone(ee.uniforms)}else me=A.uniforms;return me}function O(A,X){let me;for(let ee=0,k=l.length;ee<k;ee++){const be=l[ee];if(be.cacheKey===X){me=be,++me.usedTimes;break}}return me===void 0&&(me=new Iv(s,X,A,r),l.push(me)),me}function f(A){if(--A.usedTimes==0){const X=l.indexOf(A);l[X]=l[l.length-1],l.pop(),A.destroy()}}return{getParameters:_,getProgramCacheKey:B,getUniforms:L,acquireProgram:O,releaseProgram:f,programs:l}}function Fv(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,l){s.get(r)[o]=l}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Bv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.program!==e.program?s.program.id-e.program.id:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function $c(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qc(s){const e=[];let t=0;const n=[],i=[],r=[],o={id:-1};function l(){t=0,n.length=0,i.length=0,r.length=0}function u(y,b,S,R,x,_){let B=e[t];const L=s.get(S);return B===void 0?(B={id:y.id,object:y,geometry:b,material:S,program:L.program||o,groupOrder:R,renderOrder:y.renderOrder,z:x,group:_},e[t]=B):(B.id=y.id,B.object=y,B.geometry=b,B.material=S,B.program=L.program||o,B.groupOrder=R,B.renderOrder=y.renderOrder,B.z=x,B.group=_),t++,B}function h(y,b,S,R,x,_){const B=u(y,b,S,R,x,_);S.transmission>0?i.push(B):S.transparent===!0?r.push(B):n.push(B)}function p(y,b,S,R,x,_){const B=u(y,b,S,R,x,_);S.transmission>0?i.unshift(B):S.transparent===!0?r.unshift(B):n.unshift(B)}function g(y,b){n.length>1&&n.sort(y||Bv),i.length>1&&i.sort(b||$c),r.length>1&&r.sort(b||$c)}function v(){for(let y=t,b=e.length;y<b;y++){const S=e[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.program=null,S.group=null}}return{opaque:n,transmissive:i,transparent:r,init:l,push:h,unshift:p,finish:v,sort:g}}function zv(s){let e=new WeakMap;function t(i,r){let o;return e.has(i)===!1?(o=new Qc(s),e.set(i,[o])):r>=e.get(i).length?(o=new Qc(s),e.get(i).push(o)):o=e.get(i)[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ov(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ge};break;case"SpotLight":t={position:new z,direction:new z,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new z,halfWidth:new z,halfHeight:new z};break}return s[e.id]=t,t}}}function Uv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let kv=0;function Hv(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function Gv(s,e){const t=new Ov,n=Uv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let p=0;p<9;p++)i.probe.push(new z);const r=new z,o=new Qe,l=new Qe;function u(p,g){let v=0,y=0,b=0;for(let me=0;me<9;me++)i.probe[me].set(0,0,0);let S=0,R=0,x=0,_=0,B=0,L=0,O=0,f=0;p.sort(Hv);const A=g!==!0?Math.PI:1;for(let me=0,ee=p.length;me<ee;me++){const k=p[me],be=k.color,$=k.intensity,Z=k.distance,te=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)v+=be.r*$*A,y+=be.g*$*A,b+=be.b*$*A;else if(k.isLightProbe)for(let J=0;J<9;J++)i.probe[J].addScaledVector(k.sh.coefficients[J],$);else if(k.isDirectionalLight){const J=t.get(k);if(J.color.copy(k.color).multiplyScalar(k.intensity*A),k.castShadow){const Q=k.shadow,Me=n.get(k);Me.shadowBias=Q.bias,Me.shadowNormalBias=Q.normalBias,Me.shadowRadius=Q.radius,Me.shadowMapSize=Q.mapSize,i.directionalShadow[S]=Me,i.directionalShadowMap[S]=te,i.directionalShadowMatrix[S]=k.shadow.matrix,L++}i.directional[S]=J,S++}else if(k.isSpotLight){const J=t.get(k);if(J.position.setFromMatrixPosition(k.matrixWorld),J.color.copy(be).multiplyScalar($*A),J.distance=Z,J.coneCos=Math.cos(k.angle),J.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),J.decay=k.decay,k.castShadow){const Q=k.shadow,Me=n.get(k);Me.shadowBias=Q.bias,Me.shadowNormalBias=Q.normalBias,Me.shadowRadius=Q.radius,Me.shadowMapSize=Q.mapSize,i.spotShadow[x]=Me,i.spotShadowMap[x]=te,i.spotShadowMatrix[x]=k.shadow.matrix,f++}i.spot[x]=J,x++}else if(k.isRectAreaLight){const J=t.get(k);J.color.copy(be).multiplyScalar($),J.halfWidth.set(k.width*.5,0,0),J.halfHeight.set(0,k.height*.5,0),i.rectArea[_]=J,_++}else if(k.isPointLight){const J=t.get(k);if(J.color.copy(k.color).multiplyScalar(k.intensity*A),J.distance=k.distance,J.decay=k.decay,k.castShadow){const Q=k.shadow,Me=n.get(k);Me.shadowBias=Q.bias,Me.shadowNormalBias=Q.normalBias,Me.shadowRadius=Q.radius,Me.shadowMapSize=Q.mapSize,Me.shadowCameraNear=Q.camera.near,Me.shadowCameraFar=Q.camera.far,i.pointShadow[R]=Me,i.pointShadowMap[R]=te,i.pointShadowMatrix[R]=k.shadow.matrix,O++}i.point[R]=J,R++}else if(k.isHemisphereLight){const J=t.get(k);J.skyColor.copy(k.color).multiplyScalar($*A),J.groundColor.copy(k.groundColor).multiplyScalar($*A),i.hemi[B]=J,B++}}_>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=v,i.ambient[1]=y,i.ambient[2]=b;const X=i.hash;(X.directionalLength!==S||X.pointLength!==R||X.spotLength!==x||X.rectAreaLength!==_||X.hemiLength!==B||X.numDirectionalShadows!==L||X.numPointShadows!==O||X.numSpotShadows!==f)&&(i.directional.length=S,i.spot.length=x,i.rectArea.length=_,i.point.length=R,i.hemi.length=B,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=O,i.pointShadowMap.length=O,i.spotShadow.length=f,i.spotShadowMap.length=f,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=O,i.spotShadowMatrix.length=f,X.directionalLength=S,X.pointLength=R,X.spotLength=x,X.rectAreaLength=_,X.hemiLength=B,X.numDirectionalShadows=L,X.numPointShadows=O,X.numSpotShadows=f,i.version=kv++)}function h(p,g){let v=0,y=0,b=0,S=0,R=0;const x=g.matrixWorldInverse;for(let _=0,B=p.length;_<B;_++){const L=p[_];if(L.isDirectionalLight){const O=i.directional[v];O.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(x),v++}else if(L.isSpotLight){const O=i.spot[b];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(x),O.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(x),b++}else if(L.isRectAreaLight){const O=i.rectArea[S];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(x),l.identity(),o.copy(L.matrixWorld),o.premultiply(x),l.extractRotation(o),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),O.halfWidth.applyMatrix4(l),O.halfHeight.applyMatrix4(l),S++}else if(L.isPointLight){const O=i.point[y];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(x),y++}else if(L.isHemisphereLight){const O=i.hemi[R];O.direction.setFromMatrixPosition(L.matrixWorld),O.direction.transformDirection(x),O.direction.normalize(),R++}}}return{setup:u,setupView:h,state:i}}function Kc(s,e){const t=new Gv(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(g){n.push(g)}function l(g){i.push(g)}function u(g){t.setup(n,g)}function h(g){t.setupView(n,g)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:u,setupLightsView:h,pushLight:o,pushShadow:l}}function Vv(s,e){let t=new WeakMap;function n(r,o=0){let l;return t.has(r)===!1?(l=new Kc(s,e),t.set(r,[l])):o>=t.get(r).length?(l=new Kc(s,e),t.get(r).push(l)):l=t.get(r)[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class eu extends Jt{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}eu.prototype.isMeshDepthMaterial=!0;class tu extends Jt{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}tu.prototype.isMeshDistanceMaterial=!0;const Wv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nu(s,e,t){let n=new Zs;const i=new ve,r=new ve,o=new Mt,l=new eu({depthPacking:fd}),u=new tu,h={},p=t.maxTextureSize,g={0:kt,1:Dr,2:Bi},v=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:Wv,fragmentShader:qv}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const b=new Lt;b.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new on(b,v),R=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ll,this.render=function(L,O,f){if(R.enabled===!1||R.autoUpdate===!1&&R.needsUpdate===!1||L.length===0)return;const A=s.getRenderTarget(),X=s.getActiveCubeFace(),me=s.getActiveMipmapLevel(),ee=s.state;ee.setBlending(ti),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);for(let k=0,be=L.length;k<be;k++){const $=L[k],Z=$.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);const te=Z.getFrameExtents();if(i.multiply(te),r.copy(Z.mapSize),(i.x>p||i.y>p)&&(i.x>p&&(r.x=Math.floor(p/te.x),i.x=r.x*te.x,Z.mapSize.x=r.x),i.y>p&&(r.y=Math.floor(p/te.y),i.y=r.y*te.y,Z.mapSize.y=r.y)),Z.map===null&&!Z.isPointLightShadow&&this.type===Pr){const Q={minFilter:xn,magFilter:xn,format:en};Z.map=new Nn(i.x,i.y,Q),Z.map.texture.name=$.name+".shadowMap",Z.mapPass=new Nn(i.x,i.y,Q),Z.camera.updateProjectionMatrix()}if(Z.map===null){const Q={minFilter:Gt,magFilter:Gt,format:en};Z.map=new Nn(i.x,i.y,Q),Z.map.texture.name=$.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();const J=Z.getViewportCount();for(let Q=0;Q<J;Q++){const Me=Z.getViewport(Q);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),ee.viewport(o),Z.updateMatrices($,Q),n=Z.getFrustum(),B(O,f,Z.camera,$,this.type)}!Z.isPointLightShadow&&this.type===Pr&&x(Z,f),Z.needsUpdate=!1}R.needsUpdate=!1,s.setRenderTarget(A,X,me)};function x(L,O){const f=e.update(S);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),v.uniforms.shadow_pass.value=L.map.texture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(O,null,f,v,S,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(O,null,f,y,S,null)}function _(L,O,f,A,X,me,ee){let k=null;const be=A.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(be!==void 0?k=be:k=A.isPointLight===!0?u:l,s.localClippingEnabled&&f.clipShadows===!0&&f.clippingPlanes.length!==0||f.displacementMap&&f.displacementScale!==0||f.alphaMap&&f.alphaTest>0){const $=k.uuid,Z=f.uuid;let te=h[$];te===void 0&&(te={},h[$]=te);let J=te[Z];J===void 0&&(J=k.clone(),te[Z]=J),k=J}return k.visible=f.visible,k.wireframe=f.wireframe,ee===Pr?k.side=f.shadowSide!==null?f.shadowSide:f.side:k.side=f.shadowSide!==null?f.shadowSide:g[f.side],k.alphaMap=f.alphaMap,k.alphaTest=f.alphaTest,k.clipShadows=f.clipShadows,k.clippingPlanes=f.clippingPlanes,k.clipIntersection=f.clipIntersection,k.displacementMap=f.displacementMap,k.displacementScale=f.displacementScale,k.displacementBias=f.displacementBias,k.wireframeLinewidth=f.wireframeLinewidth,k.linewidth=f.linewidth,A.isPointLight===!0&&k.isMeshDistanceMaterial===!0&&(k.referencePosition.setFromMatrixPosition(A.matrixWorld),k.nearDistance=X,k.farDistance=me),k}function B(L,O,f,A,X){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&X===Pr)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(f.matrixWorldInverse,L.matrixWorld);const k=e.update(L),be=L.material;if(Array.isArray(be)){const $=k.groups;for(let Z=0,te=$.length;Z<te;Z++){const J=$[Z],Q=be[J.materialIndex];if(Q&&Q.visible){const Me=_(L,k,Q,A,f.near,f.far,X);s.renderBufferDirect(f,null,k,Me,L,J)}}}else if(be.visible){const $=_(L,k,be,A,f.near,f.far,X);s.renderBufferDirect(f,null,k,$,L,null)}}const ee=L.children;for(let k=0,be=ee.length;k<be;k++)B(ee[k],O,f,A,X)}}function jv(s,e,t){const n=t.isWebGL2;function i(){let H=!1;const Te=new Mt;let ue=null;const ze=new Mt(0,0,0,0);return{setMask:function(Fe){ue!==Fe&&!H&&(s.colorMask(Fe,Fe,Fe,Fe),ue=Fe)},setLocked:function(Fe){H=Fe},setClear:function(Fe,rt,It,zt,bn){bn===!0&&(Fe*=zt,rt*=zt,It*=zt),Te.set(Fe,rt,It,zt),ze.equals(Te)===!1&&(s.clearColor(Fe,rt,It,zt),ze.copy(Te))},reset:function(){H=!1,ue=null,ze.set(-1,0,0,0)}}}function r(){let H=!1,Te=null,ue=null,ze=null;return{setTest:function(Fe){Fe?ye(2929):Ne(2929)},setMask:function(Fe){Te!==Fe&&!H&&(s.depthMask(Fe),Te=Fe)},setFunc:function(Fe){if(ue!==Fe){if(Fe)switch(Fe){case Qh:s.depthFunc(512);break;case Kh:s.depthFunc(519);break;case ef:s.depthFunc(513);break;case Ba:s.depthFunc(515);break;case tf:s.depthFunc(514);break;case nf:s.depthFunc(518);break;case rf:s.depthFunc(516);break;case sf:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);ue=Fe}},setLocked:function(Fe){H=Fe},setClear:function(Fe){ze!==Fe&&(s.clearDepth(Fe),ze=Fe)},reset:function(){H=!1,Te=null,ue=null,ze=null}}}function o(){let H=!1,Te=null,ue=null,ze=null,Fe=null,rt=null,It=null,zt=null,bn=null;return{setTest:function(ht){H||(ht?ye(2960):Ne(2960))},setMask:function(ht){Te!==ht&&!H&&(s.stencilMask(ht),Te=ht)},setFunc:function(ht,At,Kt){(ue!==ht||ze!==At||Fe!==Kt)&&(s.stencilFunc(ht,At,Kt),ue=ht,ze=At,Fe=Kt)},setOp:function(ht,At,Kt){(rt!==ht||It!==At||zt!==Kt)&&(s.stencilOp(ht,At,Kt),rt=ht,It=At,zt=Kt)},setLocked:function(ht){H=ht},setClear:function(ht){bn!==ht&&(s.clearStencil(ht),bn=ht)},reset:function(){H=!1,Te=null,ue=null,ze=null,Fe=null,rt=null,It=null,zt=null,bn=null}}}const l=new i,u=new r,h=new o;let p={},g=null,v={},y=null,b=!1,S=null,R=null,x=null,_=null,B=null,L=null,O=null,f=!1,A=null,X=null,me=null,ee=null,k=null;const be=s.getParameter(35661);let $=!1,Z=0;const te=s.getParameter(7938);te.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(te)[1]),$=Z>=1):te.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),$=Z>=2);let J=null,Q={};const Me=s.getParameter(3088),De=s.getParameter(2978),ke=new Mt().fromArray(Me),Se=new Mt().fromArray(De);function et(H,Te,ue){const ze=new Uint8Array(4),Fe=s.createTexture();s.bindTexture(H,Fe),s.texParameteri(H,10241,9728),s.texParameteri(H,10240,9728);for(let rt=0;rt<ue;rt++)s.texImage2D(Te+rt,0,6408,1,1,0,6408,5121,ze);return Fe}const he={};he[3553]=et(3553,3553,1),he[34067]=et(34067,34069,6),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),ye(2929),u.setFunc(Ba),fe(!1),_e(Cl),ye(2884),nt(ti);function ye(H){p[H]!==!0&&(s.enable(H),p[H]=!0)}function Ne(H){p[H]!==!1&&(s.disable(H),p[H]=!1)}function ae(H){H!==g&&(s.bindFramebuffer(36160,H),g=H)}function He(H,Te){return Te===null&&g!==null&&(Te=g),v[H]!==Te?(s.bindFramebuffer(H,Te),v[H]=Te,n&&(H===36009&&(v[36160]=Te),H===36160&&(v[36009]=Te)),!0):!1}function Ye(H){return y!==H?(s.useProgram(H),y=H,!0):!1}const Ce={[zi]:32774,[Hh]:32778,[Gh]:32779};if(n)Ce[Nl]=32775,Ce[Fl]=32776;else{const H=e.get("EXT_blend_minmax");H!==null&&(Ce[Nl]=H.MIN_EXT,Ce[Fl]=H.MAX_EXT)}const Be={[Vh]:0,[Wh]:1,[qh]:768,[Bl]:770,[$h]:776,[Zh]:774,[Xh]:772,[jh]:769,[zl]:771,[Jh]:775,[Yh]:773};function nt(H,Te,ue,ze,Fe,rt,It,zt){if(H===ti){b===!0&&(Ne(3042),b=!1);return}if(b===!1&&(ye(3042),b=!0),H!==kh){if(H!==S||zt!==f){if((R!==zi||B!==zi)&&(s.blendEquation(32774),R=zi,B=zi),zt)switch(H){case Ir:s.blendFuncSeparate(1,771,1,771);break;case Pl:s.blendFunc(1,1);break;case Dl:s.blendFuncSeparate(0,0,769,771);break;case Il:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ir:s.blendFuncSeparate(770,771,1,771);break;case Pl:s.blendFunc(770,1);break;case Dl:s.blendFunc(0,769);break;case Il:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}x=null,_=null,L=null,O=null,S=H,f=zt}return}Fe=Fe||Te,rt=rt||ue,It=It||ze,(Te!==R||Fe!==B)&&(s.blendEquationSeparate(Ce[Te],Ce[Fe]),R=Te,B=Fe),(ue!==x||ze!==_||rt!==L||It!==O)&&(s.blendFuncSeparate(Be[ue],Be[ze],Be[rt],Be[It]),x=ue,_=ze,L=rt,O=It),S=H,f=null}function oe(H,Te){H.side===Bi?Ne(2884):ye(2884);let ue=H.side===kt;Te&&(ue=!ue),fe(ue),H.blending===Ir&&H.transparent===!1?nt(ti):nt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),l.setMask(H.colorWrite);const ze=H.stencilWrite;h.setTest(ze),ze&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),re(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ye(32926):Ne(32926)}function fe(H){A!==H&&(H?s.frontFace(2304):s.frontFace(2305),A=H)}function _e(H){H!==zh?(ye(2884),H!==X&&(H===Cl?s.cullFace(1029):H===Oh?s.cullFace(1028):s.cullFace(1032))):Ne(2884),X=H}function Ie(H){H!==me&&($&&s.lineWidth(H),me=H)}function re(H,Te,ue){H?(ye(32823),(ee!==Te||k!==ue)&&(s.polygonOffset(Te,ue),ee=Te,k=ue)):Ne(32823)}function P(H){H?ye(3089):Ne(3089)}function C(H){H===void 0&&(H=33984+be-1),J!==H&&(s.activeTexture(H),J=H)}function se(H,Te){J===null&&C();let ue=Q[J];ue===void 0&&(ue={type:void 0,texture:void 0},Q[J]=ue),(ue.type!==H||ue.texture!==Te)&&(s.bindTexture(H,Te||he[H]),ue.type=H,ue.texture=Te)}function xe(){const H=Q[J];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ge(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(H){ke.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),ke.copy(H))}function We(H){Se.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Se.copy(H))}function Pe(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},J=null,Q={},g=null,v={},y=null,b=!1,S=null,R=null,x=null,_=null,B=null,L=null,O=null,f=!1,A=null,X=null,me=null,ee=null,k=null,ke.set(0,0,s.canvas.width,s.canvas.height),Se.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:ye,disable:Ne,bindFramebuffer:He,bindXRFramebuffer:ae,useProgram:Ye,setBlending:nt,setMaterial:oe,setFlipSided:fe,setCullFace:_e,setLineWidth:Ie,setPolygonOffset:re,setScissorTest:P,activeTexture:C,bindTexture:se,unbindTexture:xe,compressedTexImage2D:ge,texImage2D:Le,texImage3D:Ve,scissor:Re,viewport:We,reset:Pe}}function Xv(s,e,t,n,i,r,o){const l=i.isWebGL2,u=i.maxTextures,h=i.maxCubemapSize,p=i.maxTextureSize,g=i.maxSamples,v=new WeakMap;let y,b=!1;try{b=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,C){return b?new OffscreenCanvas(P,C):Rs("canvas")}function R(P,C,se,xe){let ge=1;if((P.width>xe||P.height>xe)&&(ge=xe/Math.max(P.width,P.height)),ge<1||C===!0)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap){const Le=C?vd:Math.floor,Ve=Le(ge*P.width),Re=Le(ge*P.height);y===void 0&&(y=S(Ve,Re));const We=se?S(Ve,Re):y;return We.width=Ve,We.height=Re,We.getContext("2d").drawImage(P,0,0,Ve,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ve+"x"+Re+")."),We}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function x(P){return nc(P.width)&&nc(P.height)}function _(P){return l?!1:P.wrapS!==dn||P.wrapT!==dn||P.minFilter!==Gt&&P.minFilter!==xn}function B(P,C){return P.generateMipmaps&&C&&P.minFilter!==Gt&&P.minFilter!==xn}function L(P,C,se,xe,ge=1){s.generateMipmap(P);const Le=n.get(C);Le.__maxMipLevel=Math.log2(Math.max(se,xe,ge))}function O(P,C,se,xe){if(l===!1)return C;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ge=C;return C===6403&&(se===5126&&(ge=33326),se===5131&&(ge=33325),se===5121&&(ge=33321)),C===6407&&(se===5126&&(ge=34837),se===5131&&(ge=34843),se===5121&&(ge=32849)),C===6408&&(se===5126&&(ge=34836),se===5131&&(ge=34842),se===5121&&(ge=xe===Ai?35907:32856)),(ge===33325||ge===33326||ge===34842||ge===34836)&&e.get("EXT_color_buffer_float"),ge}function f(P){return P===Gt||P===Ul||P===kl?9728:9729}function A(P){const C=P.target;C.removeEventListener("dispose",A),me(C),C.isVideoTexture&&v.delete(C),o.memory.textures--}function X(P){const C=P.target;C.removeEventListener("dispose",X),ee(C)}function me(P){const C=n.get(P);C.__webglInit!==void 0&&(s.deleteTexture(C.__webglTexture),n.remove(P))}function ee(P){const C=P.texture,se=n.get(P),xe=n.get(C);if(!!P){if(xe.__webglTexture!==void 0&&(s.deleteTexture(xe.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++)s.deleteFramebuffer(se.__webglFramebuffer[ge]),se.__webglDepthbuffer&&s.deleteRenderbuffer(se.__webglDepthbuffer[ge]);else s.deleteFramebuffer(se.__webglFramebuffer),se.__webglDepthbuffer&&s.deleteRenderbuffer(se.__webglDepthbuffer),se.__webglMultisampledFramebuffer&&s.deleteFramebuffer(se.__webglMultisampledFramebuffer),se.__webglColorRenderbuffer&&s.deleteRenderbuffer(se.__webglColorRenderbuffer),se.__webglDepthRenderbuffer&&s.deleteRenderbuffer(se.__webglDepthRenderbuffer);if(P.isWebGLMultipleRenderTargets)for(let ge=0,Le=C.length;ge<Le;ge++){const Ve=n.get(C[ge]);Ve.__webglTexture&&(s.deleteTexture(Ve.__webglTexture),o.memory.textures--),n.remove(C[ge])}n.remove(C),n.remove(P)}}let k=0;function be(){k=0}function $(){const P=k;return P>=u&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+u),k+=1,P}function Z(P,C){const se=n.get(P);if(P.isVideoTexture&&oe(P),P.version>0&&se.__version!==P.version){const xe=P.image;if(xe===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(se,P,C);return}}t.activeTexture(33984+C),t.bindTexture(3553,se.__webglTexture)}function te(P,C){const se=n.get(P);if(P.version>0&&se.__version!==P.version){et(se,P,C);return}t.activeTexture(33984+C),t.bindTexture(35866,se.__webglTexture)}function J(P,C){const se=n.get(P);if(P.version>0&&se.__version!==P.version){et(se,P,C);return}t.activeTexture(33984+C),t.bindTexture(32879,se.__webglTexture)}function Q(P,C){const se=n.get(P);if(P.version>0&&se.__version!==P.version){he(se,P,C);return}t.activeTexture(33984+C),t.bindTexture(34067,se.__webglTexture)}const Me={[ka]:10497,[dn]:33071,[Ha]:33648},De={[Gt]:9728,[Ul]:9984,[kl]:9986,[xn]:9729,[df]:9985,[ws]:9987};function ke(P,C,se){if(se?(s.texParameteri(P,10242,Me[C.wrapS]),s.texParameteri(P,10243,Me[C.wrapT]),(P===32879||P===35866)&&s.texParameteri(P,32882,Me[C.wrapR]),s.texParameteri(P,10240,De[C.magFilter]),s.texParameteri(P,10241,De[C.minFilter])):(s.texParameteri(P,10242,33071),s.texParameteri(P,10243,33071),(P===32879||P===35866)&&s.texParameteri(P,32882,33071),(C.wrapS!==dn||C.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,10240,f(C.magFilter)),s.texParameteri(P,10241,f(C.minFilter)),C.minFilter!==Gt&&C.minFilter!==xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const xe=e.get("EXT_texture_filter_anisotropic");if(C.type===ii&&e.has("OES_texture_float_linear")===!1||l===!1&&C.type===Oi&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(s.texParameterf(P,xe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function Se(P,C){P.__webglInit===void 0&&(P.__webglInit=!0,C.addEventListener("dispose",A),P.__webglTexture=s.createTexture(),o.memory.textures++)}function et(P,C,se){let xe=3553;C.isDataTexture2DArray&&(xe=35866),C.isDataTexture3D&&(xe=32879),Se(P,C),t.activeTexture(33984+se),t.bindTexture(xe,P.__webglTexture),s.pixelStorei(37440,C.flipY),s.pixelStorei(37441,C.premultiplyAlpha),s.pixelStorei(3317,C.unpackAlignment),s.pixelStorei(37443,0);const ge=_(C)&&x(C.image)===!1,Le=R(C.image,ge,!1,p),Ve=x(Le)||l,Re=r.convert(C.format);let We=r.convert(C.type),Pe=O(C.internalFormat,Re,We,C.encoding);ke(xe,C,Ve);let H;const Te=C.mipmaps;if(C.isDepthTexture)Pe=6402,l?C.type===ii?Pe=36012:C.type===Ts?Pe=33190:C.type===Br?Pe=35056:Pe=33189:C.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===ki&&Pe===6402&&C.type!==Ss&&C.type!==Ts&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Ss,We=r.convert(C.type)),C.format===zr&&Pe===6402&&(Pe=34041,C.type!==Br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Br,We=r.convert(C.type))),t.texImage2D(3553,0,Pe,Le.width,Le.height,0,Re,We,null);else if(C.isDataTexture)if(Te.length>0&&Ve){for(let ue=0,ze=Te.length;ue<ze;ue++)H=Te[ue],t.texImage2D(3553,ue,Pe,H.width,H.height,0,Re,We,H.data);C.generateMipmaps=!1,P.__maxMipLevel=Te.length-1}else t.texImage2D(3553,0,Pe,Le.width,Le.height,0,Re,We,Le.data),P.__maxMipLevel=0;else if(C.isCompressedTexture){for(let ue=0,ze=Te.length;ue<ze;ue++)H=Te[ue],C.format!==en&&C.format!==Ui?Re!==null?t.compressedTexImage2D(3553,ue,Pe,H.width,H.height,0,H.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,ue,Pe,H.width,H.height,0,Re,We,H.data);P.__maxMipLevel=Te.length-1}else if(C.isDataTexture2DArray)t.texImage3D(35866,0,Pe,Le.width,Le.height,Le.depth,0,Re,We,Le.data),P.__maxMipLevel=0;else if(C.isDataTexture3D)t.texImage3D(32879,0,Pe,Le.width,Le.height,Le.depth,0,Re,We,Le.data),P.__maxMipLevel=0;else if(Te.length>0&&Ve){for(let ue=0,ze=Te.length;ue<ze;ue++)H=Te[ue],t.texImage2D(3553,ue,Pe,Re,We,H);C.generateMipmaps=!1,P.__maxMipLevel=Te.length-1}else t.texImage2D(3553,0,Pe,Re,We,Le),P.__maxMipLevel=0;B(C,Ve)&&L(xe,C,Le.width,Le.height),P.__version=C.version,C.onUpdate&&C.onUpdate(C)}function he(P,C,se){if(C.image.length!==6)return;Se(P,C),t.activeTexture(33984+se),t.bindTexture(34067,P.__webglTexture),s.pixelStorei(37440,C.flipY),s.pixelStorei(37441,C.premultiplyAlpha),s.pixelStorei(3317,C.unpackAlignment),s.pixelStorei(37443,0);const xe=C&&(C.isCompressedTexture||C.image[0].isCompressedTexture),ge=C.image[0]&&C.image[0].isDataTexture,Le=[];for(let ue=0;ue<6;ue++)!xe&&!ge?Le[ue]=R(C.image[ue],!1,!0,h):Le[ue]=ge?C.image[ue].image:C.image[ue];const Ve=Le[0],Re=x(Ve)||l,We=r.convert(C.format),Pe=r.convert(C.type),H=O(C.internalFormat,We,Pe,C.encoding);ke(34067,C,Re);let Te;if(xe){for(let ue=0;ue<6;ue++){Te=Le[ue].mipmaps;for(let ze=0;ze<Te.length;ze++){const Fe=Te[ze];C.format!==en&&C.format!==Ui?We!==null?t.compressedTexImage2D(34069+ue,ze,H,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+ue,ze,H,Fe.width,Fe.height,0,We,Pe,Fe.data)}}P.__maxMipLevel=Te.length-1}else{Te=C.mipmaps;for(let ue=0;ue<6;ue++)if(ge){t.texImage2D(34069+ue,0,H,Le[ue].width,Le[ue].height,0,We,Pe,Le[ue].data);for(let ze=0;ze<Te.length;ze++){const rt=Te[ze].image[ue].image;t.texImage2D(34069+ue,ze+1,H,rt.width,rt.height,0,We,Pe,rt.data)}}else{t.texImage2D(34069+ue,0,H,We,Pe,Le[ue]);for(let ze=0;ze<Te.length;ze++){const Fe=Te[ze];t.texImage2D(34069+ue,ze+1,H,We,Pe,Fe.image[ue])}}P.__maxMipLevel=Te.length}B(C,Re)&&L(34067,C,Ve.width,Ve.height),P.__version=C.version,C.onUpdate&&C.onUpdate(C)}function ye(P,C,se,xe,ge){const Le=r.convert(se.format),Ve=r.convert(se.type),Re=O(se.internalFormat,Le,Ve,se.encoding);ge===32879||ge===35866?t.texImage3D(ge,0,Re,C.width,C.height,C.depth,0,Le,Ve,null):t.texImage2D(ge,0,Re,C.width,C.height,0,Le,Ve,null),t.bindFramebuffer(36160,P),s.framebufferTexture2D(36160,xe,ge,n.get(se).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ne(P,C,se){if(s.bindRenderbuffer(36161,P),C.depthBuffer&&!C.stencilBuffer){let xe=33189;if(se){const ge=C.depthTexture;ge&&ge.isDepthTexture&&(ge.type===ii?xe=36012:ge.type===Ts&&(xe=33190));const Le=nt(C);s.renderbufferStorageMultisample(36161,Le,xe,C.width,C.height)}else s.renderbufferStorage(36161,xe,C.width,C.height);s.framebufferRenderbuffer(36160,36096,36161,P)}else if(C.depthBuffer&&C.stencilBuffer){if(se){const xe=nt(C);s.renderbufferStorageMultisample(36161,xe,35056,C.width,C.height)}else s.renderbufferStorage(36161,34041,C.width,C.height);s.framebufferRenderbuffer(36160,33306,36161,P)}else{const xe=C.isWebGLMultipleRenderTargets===!0?C.texture[0]:C.texture,ge=r.convert(xe.format),Le=r.convert(xe.type),Ve=O(xe.internalFormat,ge,Le,xe.encoding);if(se){const Re=nt(C);s.renderbufferStorageMultisample(36161,Re,Ve,C.width,C.height)}else s.renderbufferStorage(36161,Ve,C.width,C.height)}s.bindRenderbuffer(36161,null)}function ae(P,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),Z(C.depthTexture,0);const xe=n.get(C.depthTexture).__webglTexture;if(C.depthTexture.format===ki)s.framebufferTexture2D(36160,36096,3553,xe,0);else if(C.depthTexture.format===zr)s.framebufferTexture2D(36160,33306,3553,xe,0);else throw new Error("Unknown depthTexture format")}function He(P){const C=n.get(P),se=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture){if(se)throw new Error("target.depthTexture not supported in Cube render targets");ae(C.__webglFramebuffer,P)}else if(se){C.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)t.bindFramebuffer(36160,C.__webglFramebuffer[xe]),C.__webglDepthbuffer[xe]=s.createRenderbuffer(),Ne(C.__webglDepthbuffer[xe],P,!1)}else t.bindFramebuffer(36160,C.__webglFramebuffer),C.__webglDepthbuffer=s.createRenderbuffer(),Ne(C.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function Ye(P){const C=P.texture,se=n.get(P),xe=n.get(C);P.addEventListener("dispose",X),P.isWebGLMultipleRenderTargets!==!0&&(xe.__webglTexture=s.createTexture(),xe.__version=C.version,o.memory.textures++);const ge=P.isWebGLCubeRenderTarget===!0,Le=P.isWebGLMultipleRenderTargets===!0,Ve=P.isWebGLMultisampleRenderTarget===!0,Re=C.isDataTexture3D||C.isDataTexture2DArray,We=x(P)||l;if(l&&C.format===Ui&&(C.type===ii||C.type===Oi)&&(C.format=en,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),ge){se.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)se.__webglFramebuffer[Pe]=s.createFramebuffer()}else if(se.__webglFramebuffer=s.createFramebuffer(),Le)if(i.drawBuffers){const Pe=P.texture;for(let H=0,Te=Pe.length;H<Te;H++){const ue=n.get(Pe[H]);ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(Ve)if(l){se.__webglMultisampledFramebuffer=s.createFramebuffer(),se.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,se.__webglColorRenderbuffer);const Pe=r.convert(C.format),H=r.convert(C.type),Te=O(C.internalFormat,Pe,H,C.encoding),ue=nt(P);s.renderbufferStorageMultisample(36161,ue,Te,P.width,P.height),t.bindFramebuffer(36160,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,se.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),P.depthBuffer&&(se.__webglDepthRenderbuffer=s.createRenderbuffer(),Ne(se.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(ge){t.bindTexture(34067,xe.__webglTexture),ke(34067,C,We);for(let Pe=0;Pe<6;Pe++)ye(se.__webglFramebuffer[Pe],P,C,36064,34069+Pe);B(C,We)&&L(34067,C,P.width,P.height),t.unbindTexture()}else if(Le){const Pe=P.texture;for(let H=0,Te=Pe.length;H<Te;H++){const ue=Pe[H],ze=n.get(ue);t.bindTexture(3553,ze.__webglTexture),ke(3553,ue,We),ye(se.__webglFramebuffer,P,ue,36064+H,3553),B(ue,We)&&L(3553,ue,P.width,P.height)}t.unbindTexture()}else{let Pe=3553;Re&&(l?Pe=C.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(Pe,xe.__webglTexture),ke(Pe,C,We),ye(se.__webglFramebuffer,P,C,36064,Pe),B(C,We)&&L(Pe,C,P.width,P.height,P.depth),t.unbindTexture()}P.depthBuffer&&He(P)}function Ce(P){const C=x(P)||l,se=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let xe=0,ge=se.length;xe<ge;xe++){const Le=se[xe];if(B(Le,C)){const Ve=P.isWebGLCubeRenderTarget?34067:3553,Re=n.get(Le).__webglTexture;t.bindTexture(Ve,Re),L(Ve,Le,P.width,P.height),t.unbindTexture()}}}function Be(P){if(P.isWebGLMultisampleRenderTarget)if(l){const C=P.width,se=P.height;let xe=16384;P.depthBuffer&&(xe|=256),P.stencilBuffer&&(xe|=1024);const ge=n.get(P);t.bindFramebuffer(36008,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ge.__webglFramebuffer),s.blitFramebuffer(0,0,C,se,0,0,C,se,xe,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,ge.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function nt(P){return l&&P.isWebGLMultisampleRenderTarget?Math.min(g,P.samples):0}function oe(P){const C=o.render.frame;v.get(P)!==C&&(v.set(P,C),P.update())}let fe=!1,_e=!1;function Ie(P,C){P&&P.isWebGLRenderTarget&&(fe===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),fe=!0),P=P.texture),Z(P,C)}function re(P,C){P&&P.isWebGLCubeRenderTarget&&(_e===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),_e=!0),P=P.texture),Q(P,C)}this.allocateTextureUnit=$,this.resetTextureUnits=be,this.setTexture2D=Z,this.setTexture2DArray=te,this.setTexture3D=J,this.setTextureCube=Q,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Be,this.safeSetTexture2D=Ie,this.safeSetTextureCube=re}function Yv(s,e,t){const n=t.isWebGL2;function i(r){let o;if(r===ni)return 5121;if(r===vf)return 32819;if(r===xf)return 32820;if(r===yf)return 33635;if(r===pf)return 5120;if(r===mf)return 5122;if(r===Ss)return 5123;if(r===gf)return 5124;if(r===Ts)return 5125;if(r===ii)return 5126;if(r===Oi)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===_f)return 6406;if(r===Ui)return 6407;if(r===en)return 6408;if(r===bf)return 6409;if(r===Mf)return 6410;if(r===ki)return 6402;if(r===zr)return 34041;if(r===Sf)return 6403;if(r===Tf)return 36244;if(r===Ef)return 33319;if(r===Af)return 33320;if(r===Cf)return 36248;if(r===Lf)return 36249;if(r===Hl||r===Gl||r===Vl||r===Wl)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Hl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ql||r===jl||r===Xl||r===Yl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ql)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((r===Zl||r===Jl)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(r===Zl)return o.COMPRESSED_RGB8_ETC2;if(r===Jl)return o.COMPRESSED_RGBA8_ETC2_EAC}if(r===Pf||r===Df||r===If||r===Nf||r===Ff||r===Bf||r===zf||r===Of||r===Uf||r===kf||r===Hf||r===Gf||r===Vf||r===Wf||r===jf||r===Xf||r===Yf||r===Zf||r===Jf||r===$f||r===Qf||r===Kf||r===ed||r===td||r===nd||r===id||r===rd||r===sd)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?r:null;if(r===qf)return o=e.get("EXT_texture_compression_bptc"),o!==null?r:null;if(r===Br)return n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class iu extends ln{constructor(e=[]){super();this.cameras=e}}iu.prototype.isArrayCamera=!0;class jr extends mt{constructor(){super();this.type="Group"}}jr.prototype.isGroup=!0;const Zv={type:"move"};class Do{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const l=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(l!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Zv))),h&&e.hand){o=!0;for(const S of e.hand.values()){const R=t.getJointPose(S,n);if(h.joints[S.jointName]===void 0){const _=new jr;_.matrixAutoUpdate=!1,_.visible=!1,h.joints[S.jointName]=_,h.add(_)}const x=h.joints[S.jointName];R!==null&&(x.matrix.fromArray(R.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=R.radius),x.visible=R!==null}const p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=p.position.distanceTo(g.position),y=.02,b=.005;h.inputState.pinching&&v>y+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=y-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1));return l!==null&&(l.visible=i!==null),u!==null&&(u.visible=r!==null),h!==null&&(h.visible=o!==null),this}}class Jv extends Ci{constructor(e,t){super();const n=this,i=e.state;let r=null,o=1,l=null,u="local-floor",h=null,p=null,g=null,v=null,y=null,b=!1,S=null,R=null,x=null,_=null,B=null,L=null;const O=[],f=new Map,A=new ln;A.layers.enable(1),A.viewport=new Mt;const X=new ln;X.layers.enable(2),X.viewport=new Mt;const me=[A,X],ee=new iu;ee.layers.enable(1),ee.layers.enable(2);let k=null,be=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let ye=O[he];return ye===void 0&&(ye=new Do,O[he]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(he){let ye=O[he];return ye===void 0&&(ye=new Do,O[he]=ye),ye.getGripSpace()},this.getHand=function(he){let ye=O[he];return ye===void 0&&(ye=new Do,O[he]=ye),ye.getHandSpace()};function $(he){const ye=f.get(he.inputSource);ye&&ye.dispatchEvent({type:he.type,data:he.inputSource})}function Z(){f.forEach(function(he,ye){he.disconnect(ye)}),f.clear(),k=null,be=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),g&&t.deleteFramebuffer(g),S&&t.deleteFramebuffer(S),R&&t.deleteRenderbuffer(R),x&&t.deleteRenderbuffer(x),g=null,S=null,R=null,x=null,y=null,v=null,p=null,r=null,et.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){o=he,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){u=he,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(he){if(r=he,r!==null){r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",te);const ye=t.getContextAttributes();if(ye.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0){const Ne={antialias:ye.antialias,alpha:ye.alpha,depth:ye.depth,stencil:ye.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(r,t,Ne),r.updateRenderState({baseLayer:y})}else if(t instanceof WebGLRenderingContext){const Ne={antialias:!0,alpha:ye.alpha,depth:ye.depth,stencil:ye.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(r,t,Ne),r.updateRenderState({layers:[y]})}else{b=ye.antialias;let Ne=null;ye.depth&&(L=256,ye.stencil&&(L|=1024),B=ye.stencil?33306:36096,Ne=ye.stencil?35056:33190);const ae={colorFormat:ye.alpha?32856:32849,depthFormat:Ne,scaleFactor:o};p=new XRWebGLBinding(r,t),v=p.createProjectionLayer(ae),g=t.createFramebuffer(),r.updateRenderState({layers:[v]}),b&&(S=t.createFramebuffer(),R=t.createRenderbuffer(),t.bindRenderbuffer(36161,R),t.renderbufferStorageMultisample(36161,4,32856,v.textureWidth,v.textureHeight),i.bindFramebuffer(36160,S),t.framebufferRenderbuffer(36160,36064,36161,R),t.bindRenderbuffer(36161,null),Ne!==null&&(x=t.createRenderbuffer(),t.bindRenderbuffer(36161,x),t.renderbufferStorageMultisample(36161,4,Ne,v.textureWidth,v.textureHeight),t.framebufferRenderbuffer(36160,B,36161,x),t.bindRenderbuffer(36161,null)),i.bindFramebuffer(36160,null))}l=await r.requestReferenceSpace(u),et.setContext(r),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function te(he){const ye=r.inputSources;for(let Ne=0;Ne<O.length;Ne++)f.set(ye[Ne],O[Ne]);for(let Ne=0;Ne<he.removed.length;Ne++){const ae=he.removed[Ne],He=f.get(ae);He&&(He.dispatchEvent({type:"disconnected",data:ae}),f.delete(ae))}for(let Ne=0;Ne<he.added.length;Ne++){const ae=he.added[Ne],He=f.get(ae);He&&He.dispatchEvent({type:"connected",data:ae})}}const J=new z,Q=new z;function Me(he,ye,Ne){J.setFromMatrixPosition(ye.matrixWorld),Q.setFromMatrixPosition(Ne.matrixWorld);const ae=J.distanceTo(Q),He=ye.projectionMatrix.elements,Ye=Ne.projectionMatrix.elements,Ce=He[14]/(He[10]-1),Be=He[14]/(He[10]+1),nt=(He[9]+1)/He[5],oe=(He[9]-1)/He[5],fe=(He[8]-1)/He[0],_e=(Ye[8]+1)/Ye[0],Ie=Ce*fe,re=Ce*_e,P=ae/(-fe+_e),C=P*-fe;ye.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(C),he.translateZ(P),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert();const se=Ce+P,xe=Be+P,ge=Ie-C,Le=re+(ae-C),Ve=nt*Be/xe*se,Re=oe*Be/xe*se;he.projectionMatrix.makePerspective(ge,Le,Ve,Re,se,xe)}function De(he,ye){ye===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(ye.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(r===null)return;ee.near=X.near=A.near=he.near,ee.far=X.far=A.far=he.far,(k!==ee.near||be!==ee.far)&&(r.updateRenderState({depthNear:ee.near,depthFar:ee.far}),k=ee.near,be=ee.far);const ye=he.parent,Ne=ee.cameras;De(ee,ye);for(let He=0;He<Ne.length;He++)De(Ne[He],ye);ee.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),he.position.copy(ee.position),he.quaternion.copy(ee.quaternion),he.scale.copy(ee.scale),he.matrix.copy(ee.matrix),he.matrixWorld.copy(ee.matrixWorld);const ae=he.children;for(let He=0,Ye=ae.length;He<Ye;He++)ae[He].updateMatrixWorld(!0);Ne.length===2?Me(ee,A,X):ee.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return ee},this.getFoveation=function(){if(v!==null)return v.fixedFoveation;if(y!==null)return y.fixedFoveation},this.setFoveation=function(he){v!==null&&(v.fixedFoveation=he),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=he)};let ke=null;function Se(he,ye){if(h=ye.getViewerPose(l),_=ye,h!==null){const ae=h.views;y!==null&&i.bindXRFramebuffer(y.framebuffer);let He=!1;ae.length!==ee.cameras.length&&(ee.cameras.length=0,He=!0);for(let Ye=0;Ye<ae.length;Ye++){const Ce=ae[Ye];let Be=null;if(y!==null)Be=y.getViewport(Ce);else{const oe=p.getViewSubImage(v,Ce);i.bindXRFramebuffer(g),oe.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,B,3553,oe.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,oe.colorTexture,0),Be=oe.viewport}const nt=me[Ye];nt.matrix.fromArray(Ce.transform.matrix),nt.projectionMatrix.fromArray(Ce.projectionMatrix),nt.viewport.set(Be.x,Be.y,Be.width,Be.height),Ye===0&&ee.matrix.copy(nt.matrix),He===!0&&ee.cameras.push(nt)}b&&(i.bindXRFramebuffer(S),L!==null&&t.clear(L))}const Ne=r.inputSources;for(let ae=0;ae<O.length;ae++){const He=O[ae],Ye=Ne[ae];He.update(Ye,ye,l)}if(ke&&ke(he,ye),b){const ae=v.textureWidth,He=v.textureHeight;i.bindFramebuffer(36008,S),i.bindFramebuffer(36009,g),t.invalidateFramebuffer(36008,[B]),t.invalidateFramebuffer(36009,[B]),t.blitFramebuffer(0,0,ae,He,0,0,ae,He,16384,9728),t.invalidateFramebuffer(36008,[36064]),i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),i.bindFramebuffer(36160,S)}_=null}const et=new bc;et.setAnimationLoop(Se),this.setAnimationLoop=function(he){ke=he},this.dispose=function(){}}}function $v(s){function e(x,_){x.fogColor.value.copy(_.color),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function t(x,_,B,L,O){_.isMeshBasicMaterial?n(x,_):_.isMeshLambertMaterial?(n(x,_),u(x,_)):_.isMeshToonMaterial?(n(x,_),p(x,_)):_.isMeshPhongMaterial?(n(x,_),h(x,_)):_.isMeshStandardMaterial?(n(x,_),_.isMeshPhysicalMaterial?v(x,_,O):g(x,_)):_.isMeshMatcapMaterial?(n(x,_),y(x,_)):_.isMeshDepthMaterial?(n(x,_),b(x,_)):_.isMeshDistanceMaterial?(n(x,_),S(x,_)):_.isMeshNormalMaterial?(n(x,_),R(x,_)):_.isLineBasicMaterial?(i(x,_),_.isLineDashedMaterial&&r(x,_)):_.isPointsMaterial?o(x,_,B,L):_.isSpriteMaterial?l(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function n(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map),_.alphaMap&&(x.alphaMap.value=_.alphaMap),_.specularMap&&(x.specularMap.value=_.specularMap),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const B=s.get(_).envMap;if(B){x.envMap.value=B,x.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio;const f=s.get(B).__maxMipLevel;f!==void 0&&(x.maxMipLevel.value=f)}_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity);let L;_.map?L=_.map:_.specularMap?L=_.specularMap:_.displacementMap?L=_.displacementMap:_.normalMap?L=_.normalMap:_.bumpMap?L=_.bumpMap:_.roughnessMap?L=_.roughnessMap:_.metalnessMap?L=_.metalnessMap:_.alphaMap?L=_.alphaMap:_.emissiveMap?L=_.emissiveMap:_.clearcoatMap?L=_.clearcoatMap:_.clearcoatNormalMap?L=_.clearcoatNormalMap:_.clearcoatRoughnessMap?L=_.clearcoatRoughnessMap:_.specularIntensityMap?L=_.specularIntensityMap:_.specularColorMap?L=_.specularColorMap:_.transmissionMap?L=_.transmissionMap:_.thicknessMap?L=_.thicknessMap:_.sheenColorMap?L=_.sheenColorMap:_.sheenRoughnessMap&&(L=_.sheenRoughnessMap),L!==void 0&&(L.isWebGLRenderTarget&&(L=L.texture),L.matrixAutoUpdate===!0&&L.updateMatrix(),x.uvTransform.value.copy(L.matrix));let O;_.aoMap?O=_.aoMap:_.lightMap&&(O=_.lightMap),O!==void 0&&(O.isWebGLRenderTarget&&(O=O.texture),O.matrixAutoUpdate===!0&&O.updateMatrix(),x.uv2Transform.value.copy(O.matrix))}function i(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity}function r(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function o(x,_,B,L){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*B,x.scale.value=L*.5,_.map&&(x.map.value=_.map),_.alphaMap&&(x.alphaMap.value=_.alphaMap),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);let O;_.map?O=_.map:_.alphaMap&&(O=_.alphaMap),O!==void 0&&(O.matrixAutoUpdate===!0&&O.updateMatrix(),x.uvTransform.value.copy(O.matrix))}function l(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map),_.alphaMap&&(x.alphaMap.value=_.alphaMap),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);let B;_.map?B=_.map:_.alphaMap&&(B=_.alphaMap),B!==void 0&&(B.matrixAutoUpdate===!0&&B.updateMatrix(),x.uvTransform.value.copy(B.matrix))}function u(x,_){_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap)}function h(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap),_.bumpMap&&(x.bumpMap.value=_.bumpMap,x.bumpScale.value=_.bumpScale,_.side===kt&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,x.normalScale.value.copy(_.normalScale),_.side===kt&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias)}function p(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap),_.bumpMap&&(x.bumpMap.value=_.bumpMap,x.bumpScale.value=_.bumpScale,_.side===kt&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,x.normalScale.value.copy(_.normalScale),_.side===kt&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias)}function g(x,_){x.roughness.value=_.roughness,x.metalness.value=_.metalness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap),_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap),_.bumpMap&&(x.bumpMap.value=_.bumpMap,x.bumpScale.value=_.bumpScale,_.side===kt&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,x.normalScale.value.copy(_.normalScale),_.side===kt&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),s.get(_).envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function v(x,_,B){g(x,_),x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap)),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap),_.clearcoatNormalMap&&(x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),x.clearcoatNormalMap.value=_.clearcoatNormalMap,_.side===kt&&x.clearcoatNormalScale.value.negate())),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=B.texture,x.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap)}function y(x,_){_.matcap&&(x.matcap.value=_.matcap),_.bumpMap&&(x.bumpMap.value=_.bumpMap,x.bumpScale.value=_.bumpScale,_.side===kt&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,x.normalScale.value.copy(_.normalScale),_.side===kt&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias)}function b(x,_){_.displacementMap&&(x.displacementMap.value=_.displacementMap,x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias)}function S(x,_){_.displacementMap&&(x.displacementMap.value=_.displacementMap,x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),x.referencePosition.value.copy(_.referencePosition),x.nearDistance.value=_.nearDistance,x.farDistance.value=_.farDistance}function R(x,_){_.bumpMap&&(x.bumpMap.value=_.bumpMap,x.bumpScale.value=_.bumpScale,_.side===kt&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,x.normalScale.value.copy(_.normalScale),_.side===kt&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Qv(){const s=Rs("canvas");return s.style.display="block",s}function xt(s={}){const e=s.canvas!==void 0?s.canvas:Qv(),t=s.context!==void 0?s.context:null,n=s.alpha!==void 0?s.alpha:!1,i=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,o=s.antialias!==void 0?s.antialias:!1,l=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,u=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,h=s.powerPreference!==void 0?s.powerPreference:"default",p=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let g=null,v=null;const y=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Zt,this.physicallyCorrectLights=!1,this.toneMapping=Ei,this.toneMappingExposure=1;const S=this;let R=!1,x=0,_=0,B=null,L=-1,O=null;const f=new Mt,A=new Mt;let X=null,me=e.width,ee=e.height,k=1,be=null,$=null;const Z=new Mt(0,0,me,ee),te=new Mt(0,0,me,ee);let J=!1;const Q=[],Me=new Zs;let De=!1,ke=!1,Se=null;const et=new Qe,he=new z,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return B===null?k:1}let ae=t;function He(D,q){for(let ne=0;ne<D.length;ne++){const Y=D[ne],ce=e.getContext(Y,q);if(ce!==null)return ce}return null}try{const D={alpha:n,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if(e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",zt,!1),ae===null){const q=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&q.shift(),ae=He(q,D),ae===null)throw He(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ae.getShaderPrecisionFormat===void 0&&(ae.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Ye,Ce,Be,nt,oe,fe,_e,Ie,re,P,C,se,xe,ge,Le,Ve,Re,We,Pe,H,Te,ue,ze;function Fe(){Ye=new bg(ae),Ce=new dg(ae,Ye,s),Ye.init(Ce),ue=new Yv(ae,Ye,Ce),Be=new jv(ae,Ye,Ce),Q[0]=1029,nt=new Sg(ae),oe=new Fv,fe=new Xv(ae,Ye,Be,oe,Ce,ue,nt),_e=new mg(S),Ie=new _g(S),re=new zd(ae,Ce),ze=new hg(ae,Ye,re,Ce),P=new Mg(ae,re,nt,ze),C=new Cg(ae,P,re,nt),Pe=new Ag(ae,Ce,fe),Ve=new pg(oe),se=new Nv(S,_e,Ie,Ye,Ce,ze,Ve),xe=new $v(oe),ge=new zv(oe),Le=new Vv(Ye,Ce),We=new ug(S,_e,Be,C,l),Re=new nu(S,C,Ce),H=new fg(ae,Ye,nt,Ce),Te=new wg(ae,Ye,nt,Ce),nt.programs=se.programs,S.capabilities=Ce,S.extensions=Ye,S.properties=oe,S.renderLists=ge,S.shadowMap=Re,S.state=Be,S.info=nt}Fe();const rt=new Jv(S,ae);this.xr=rt,this.getContext=function(){return ae},this.getContextAttributes=function(){return ae.getContextAttributes()},this.forceContextLoss=function(){const D=Ye.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Ye.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(D){D!==void 0&&(k=D,this.setSize(me,ee,!1))},this.getSize=function(D){return D.set(me,ee)},this.setSize=function(D,q,ne){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}me=D,ee=q,e.width=Math.floor(D*k),e.height=Math.floor(q*k),ne!==!1&&(e.style.width=D+"px",e.style.height=q+"px"),this.setViewport(0,0,D,q)},this.getDrawingBufferSize=function(D){return D.set(me*k,ee*k).floor()},this.setDrawingBufferSize=function(D,q,ne){me=D,ee=q,k=ne,e.width=Math.floor(D*ne),e.height=Math.floor(q*ne),this.setViewport(0,0,D,q)},this.getCurrentViewport=function(D){return D.copy(f)},this.getViewport=function(D){return D.copy(Z)},this.setViewport=function(D,q,ne,Y){D.isVector4?Z.set(D.x,D.y,D.z,D.w):Z.set(D,q,ne,Y),Be.viewport(f.copy(Z).multiplyScalar(k).floor())},this.getScissor=function(D){return D.copy(te)},this.setScissor=function(D,q,ne,Y){D.isVector4?te.set(D.x,D.y,D.z,D.w):te.set(D,q,ne,Y),Be.scissor(A.copy(te).multiplyScalar(k).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(D){Be.setScissorTest(J=D)},this.setOpaqueSort=function(D){be=D},this.setTransparentSort=function(D){$=D},this.getClearColor=function(D){return D.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(D,q,ne){let Y=0;(D===void 0||D)&&(Y|=16384),(q===void 0||q)&&(Y|=256),(ne===void 0||ne)&&(Y|=1024),ae.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",zt,!1),ge.dispose(),Le.dispose(),oe.dispose(),_e.dispose(),Ie.dispose(),C.dispose(),ze.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",br),rt.removeEventListener("sessionend",Mr),Se&&(Se.dispose(),Se=null),nn.stop()};function It(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const D=nt.autoReset,q=Re.enabled,ne=Re.autoUpdate,Y=Re.needsUpdate,ce=Re.type;Fe(),nt.autoReset=D,Re.enabled=q,Re.autoUpdate=ne,Re.needsUpdate=Y,Re.type=ce}function bn(D){const q=D.target;q.removeEventListener("dispose",bn),ht(q)}function ht(D){At(D),oe.remove(D)}function At(D){const q=oe.get(D).programs;q!==void 0&&q.forEach(function(ne){se.releaseProgram(ne)})}this.renderBufferDirect=function(D,q,ne,Y,ce,Ke){q===null&&(q=ye);const je=ce.isMesh&&ce.matrixWorld.determinant()<0,Xe=xa(D,q,ne,Y,ce);Be.setMaterial(Y,je);let st=ne.index;const ct=ne.attributes.position;if(st===null){if(ct===void 0||ct.count===0)return}else if(st.count===0)return;let at=1;Y.wireframe===!0&&(st=P.getWireframeAttribute(ne),at=2),ze.setup(ce,Y,Xe,ne,st);let ut,Et=H;st!==null&&(ut=re.get(st),Et=Te,Et.setIndex(ut));const Rn=st!==null?st.count:ct.count,ft=ne.drawRange.start*at,kn=ne.drawRange.count*at,yt=Ke!==null?Ke.start*at:0,Pn=Ke!==null?Ke.count*at:1/0,Hn=Math.max(ft,yt),Dn=Math.min(Rn,ft+kn,yt+Pn)-1,Mn=Math.max(0,Dn-Hn+1);if(Mn!==0){if(ce.isMesh)Y.wireframe===!0?(Be.setLineWidth(Y.wireframeLinewidth*Ne()),Et.setMode(1)):Et.setMode(4);else if(ce.isLine){let wt=Y.linewidth;wt===void 0&&(wt=1),Be.setLineWidth(wt*Ne()),ce.isLineSegments?Et.setMode(1):ce.isLineLoop?Et.setMode(2):Et.setMode(3)}else ce.isPoints?Et.setMode(0):ce.isSprite&&Et.setMode(4);if(ce.isInstancedMesh)Et.renderInstances(Hn,Mn,ce.count);else if(ne.isInstancedBufferGeometry){const wt=Math.min(ne.instanceCount,ne._maxInstanceCount);Et.renderInstances(Hn,Mn,wt)}else Et.render(Hn,Mn)}},this.compile=function(D,q){v=Le.get(D),v.init(),b.push(v),D.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(v.pushLight(ne),ne.castShadow&&v.pushShadow(ne))}),v.setupLights(S.physicallyCorrectLights),D.traverse(function(ne){const Y=ne.material;if(Y)if(Array.isArray(Y))for(let ce=0;ce<Y.length;ce++){const Ke=Y[ce];wr(Ke,D,ne)}else wr(Y,D,ne)}),b.pop(),v=null};let Kt=null;function ga(D){Kt&&Kt(D)}function br(){nn.stop()}function Mr(){nn.start()}const nn=new bc;nn.setAnimationLoop(ga),typeof window!="undefined"&&nn.setContext(window),this.setAnimationLoop=function(D){Kt=D,rt.setAnimationLoop(D),D===null?nn.stop():nn.start()},rt.addEventListener("sessionstart",br),rt.addEventListener("sessionend",Mr),this.render=function(D,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D.autoUpdate===!0&&D.updateMatrixWorld(),q.parent===null&&q.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(q),q=rt.getCamera()),D.isScene===!0&&D.onBeforeRender(S,D,q,B),v=Le.get(D,b.length),v.init(),b.push(v),et.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Me.setFromProjectionMatrix(et),ke=this.localClippingEnabled,De=Ve.init(this.clippingPlanes,ke,q),g=ge.get(D,y.length),g.init(),y.push(g),Un(D,q,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(be,$),De===!0&&Ve.beginShadows();const ne=v.state.shadowsArray;if(Re.render(ne,D,q),De===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),We.render(g,D),v.setupLights(S.physicallyCorrectLights),q.isArrayCamera){const Y=q.cameras;for(let ce=0,Ke=Y.length;ce<Ke;ce++){const je=Y[ce];ls(g,D,je,je.viewport)}}else ls(g,D,q);B!==null&&(fe.updateMultisampleRenderTarget(B),fe.updateRenderTargetMipmap(B)),D.isScene===!0&&D.onAfterRender(S,D,q),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1),ze.resetDefaultState(),L=-1,O=null,b.pop(),b.length>0?v=b[b.length-1]:v=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Un(D,q,ne,Y){if(D.visible===!1)return;if(D.layers.test(q.layers)){if(D.isGroup)ne=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(q);else if(D.isLight)v.pushLight(D),D.castShadow&&v.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Me.intersectsSprite(D)){Y&&he.setFromMatrixPosition(D.matrixWorld).applyMatrix4(et);const je=C.update(D),Xe=D.material;Xe.visible&&g.push(D,je,Xe,ne,he.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(D.isSkinnedMesh&&D.skeleton.frame!==nt.render.frame&&(D.skeleton.update(),D.skeleton.frame=nt.render.frame),!D.frustumCulled||Me.intersectsObject(D))){Y&&he.setFromMatrixPosition(D.matrixWorld).applyMatrix4(et);const je=C.update(D),Xe=D.material;if(Array.isArray(Xe)){const st=je.groups;for(let ct=0,at=st.length;ct<at;ct++){const ut=st[ct],Et=Xe[ut.materialIndex];Et&&Et.visible&&g.push(D,je,Et,ne,he.z,ut)}}else Xe.visible&&g.push(D,je,Xe,ne,he.z,null)}}const Ke=D.children;for(let je=0,Xe=Ke.length;je<Xe;je++)Un(Ke[je],q,ne,Y)}function ls(D,q,ne,Y){const ce=D.opaque,Ke=D.transmissive,je=D.transparent;v.setupLightsView(ne),Ke.length>0&&va(ce,q,ne),Y&&Be.viewport(f.copy(Y)),ce.length>0&&$n(ce,q,ne),Ke.length>0&&$n(Ke,q,ne),je.length>0&&$n(je,q,ne)}function va(D,q,ne){if(Se===null){const je=o===!0&&Ce.isWebGL2===!0?sc:Nn;Se=new je(1024,1024,{generateMipmaps:!0,type:ue.convert(Oi)!==null?Oi:ni,minFilter:ws,magFilter:Gt,wrapS:dn,wrapT:dn})}const Y=S.getRenderTarget();S.setRenderTarget(Se),S.clear();const ce=S.toneMapping;S.toneMapping=Ei,$n(D,q,ne),S.toneMapping=ce,fe.updateMultisampleRenderTarget(Se),fe.updateRenderTargetMipmap(Se),S.setRenderTarget(Y)}function $n(D,q,ne){const Y=q.isScene===!0?q.overrideMaterial:null;for(let ce=0,Ke=D.length;ce<Ke;ce++){const je=D[ce],Xe=je.object,st=je.geometry,ct=Y===null?je.material:Y,at=je.group;Xe.layers.test(ne.layers)&&Ni(Xe,q,ne,st,ct,at)}}function Ni(D,q,ne,Y,ce,Ke){D.onBeforeRender(S,q,ne,Y,ce,Ke),D.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ce.onBeforeRender(S,q,ne,Y,D,Ke),ce.transparent===!0&&ce.side===Bi?(ce.side=kt,ce.needsUpdate=!0,S.renderBufferDirect(ne,q,Y,ce,D,Ke),ce.side=Dr,ce.needsUpdate=!0,S.renderBufferDirect(ne,q,Y,ce,D,Ke),ce.side=Bi):S.renderBufferDirect(ne,q,Y,ce,D,Ke),D.onAfterRender(S,q,ne,Y,ce,Ke)}function wr(D,q,ne){q.isScene!==!0&&(q=ye);const Y=oe.get(D),ce=v.state.lights,Ke=v.state.shadowsArray,je=ce.state.version,Xe=se.getParameters(D,ce.state,Ke,q,ne),st=se.getProgramCacheKey(Xe);let ct=Y.programs;Y.environment=D.isMeshStandardMaterial?q.environment:null,Y.fog=q.fog,Y.envMap=(D.isMeshStandardMaterial?Ie:_e).get(D.envMap||Y.environment),ct===void 0&&(D.addEventListener("dispose",bn),ct=new Map,Y.programs=ct);let at=ct.get(st);if(at!==void 0){if(Y.currentProgram===at&&Y.lightsStateVersion===je)return cs(D,Xe),at}else Xe.uniforms=se.getUniforms(D),D.onBuild(ne,Xe,S),D.onBeforeCompile(Xe,S),at=se.acquireProgram(Xe,st),ct.set(st,at),Y.uniforms=Xe.uniforms;const ut=Y.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ut.clippingPlanes=Ve.uniform),cs(D,Xe),Y.needsLights=ya(D),Y.lightsStateVersion=je,Y.needsLights&&(ut.ambientLightColor.value=ce.state.ambient,ut.lightProbe.value=ce.state.probe,ut.directionalLights.value=ce.state.directional,ut.directionalLightShadows.value=ce.state.directionalShadow,ut.spotLights.value=ce.state.spot,ut.spotLightShadows.value=ce.state.spotShadow,ut.rectAreaLights.value=ce.state.rectArea,ut.ltc_1.value=ce.state.rectAreaLTC1,ut.ltc_2.value=ce.state.rectAreaLTC2,ut.pointLights.value=ce.state.point,ut.pointLightShadows.value=ce.state.pointShadow,ut.hemisphereLights.value=ce.state.hemi,ut.directionalShadowMap.value=ce.state.directionalShadowMap,ut.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,ut.spotShadowMap.value=ce.state.spotShadowMap,ut.spotShadowMatrix.value=ce.state.spotShadowMatrix,ut.pointShadowMap.value=ce.state.pointShadowMap,ut.pointShadowMatrix.value=ce.state.pointShadowMatrix);const Et=at.getUniforms(),Rn=di.seqWithValue(Et.seq,ut);return Y.currentProgram=at,Y.uniformsList=Rn,at}function cs(D,q){const ne=oe.get(D);ne.outputEncoding=q.outputEncoding,ne.instancing=q.instancing,ne.skinning=q.skinning,ne.morphTargets=q.morphTargets,ne.morphNormals=q.morphNormals,ne.morphTargetsCount=q.morphTargetsCount,ne.numClippingPlanes=q.numClippingPlanes,ne.numIntersection=q.numClipIntersection,ne.vertexAlphas=q.vertexAlphas,ne.vertexTangents=q.vertexTangents}function xa(D,q,ne,Y,ce){q.isScene!==!0&&(q=ye),fe.resetTextureUnits();const Ke=q.fog,je=Y.isMeshStandardMaterial?q.environment:null,Xe=B===null?S.outputEncoding:B.texture.encoding,st=(Y.isMeshStandardMaterial?Ie:_e).get(Y.envMap||je),ct=Y.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,at=!!Y.normalMap&&!!ne.attributes.tangent,ut=!!ne.morphAttributes.position,Et=!!ne.morphAttributes.normal,Rn=ne.morphAttributes.position?ne.morphAttributes.position.length:0,ft=oe.get(Y),kn=v.state.lights;if(De===!0&&(ke===!0||D!==O)){const St=D===O&&Y.id===L;Ve.setState(Y,D,St)}let yt=!1;Y.version===ft.__version?(ft.needsLights&&ft.lightsStateVersion!==kn.state.version||ft.outputEncoding!==Xe||ce.isInstancedMesh&&ft.instancing===!1||!ce.isInstancedMesh&&ft.instancing===!0||ce.isSkinnedMesh&&ft.skinning===!1||!ce.isSkinnedMesh&&ft.skinning===!0||ft.envMap!==st||Y.fog&&ft.fog!==Ke||ft.numClippingPlanes!==void 0&&(ft.numClippingPlanes!==Ve.numPlanes||ft.numIntersection!==Ve.numIntersection)||ft.vertexAlphas!==ct||ft.vertexTangents!==at||ft.morphTargets!==ut||ft.morphNormals!==Et||Ce.isWebGL2===!0&&ft.morphTargetsCount!==Rn)&&(yt=!0):(yt=!0,ft.__version=Y.version);let Pn=ft.currentProgram;yt===!0&&(Pn=wr(Y,q,ce));let Hn=!1,Dn=!1,Mn=!1;const wt=Pn.getUniforms(),Qn=ft.uniforms;if(Be.useProgram(Pn.program)&&(Hn=!0,Dn=!0,Mn=!0),Y.id!==L&&(L=Y.id,Dn=!0),Hn||O!==D){if(wt.setValue(ae,"projectionMatrix",D.projectionMatrix),Ce.logarithmicDepthBuffer&&wt.setValue(ae,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),O!==D&&(O=D,Dn=!0,Mn=!0),Y.isShaderMaterial||Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshStandardMaterial||Y.envMap){const St=wt.map.cameraPosition;St!==void 0&&St.setValue(ae,he.setFromMatrixPosition(D.matrixWorld))}(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&wt.setValue(ae,"isOrthographic",D.isOrthographicCamera===!0),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial||Y.isShadowMaterial||ce.isSkinnedMesh)&&wt.setValue(ae,"viewMatrix",D.matrixWorldInverse)}if(ce.isSkinnedMesh){wt.setOptional(ae,ce,"bindMatrix"),wt.setOptional(ae,ce,"bindMatrixInverse");const St=ce.skeleton;St&&(Ce.floatVertexTextures?(St.boneTexture===null&&St.computeBoneTexture(),wt.setValue(ae,"boneTexture",St.boneTexture,fe),wt.setValue(ae,"boneTextureSize",St.boneTextureSize)):wt.setOptional(ae,St,"boneMatrices"))}return!!ne&&(ne.morphAttributes.position!==void 0||ne.morphAttributes.normal!==void 0)&&Pe.update(ce,ne,Y,Pn),(Dn||ft.receiveShadow!==ce.receiveShadow)&&(ft.receiveShadow=ce.receiveShadow,wt.setValue(ae,"receiveShadow",ce.receiveShadow)),Dn&&(wt.setValue(ae,"toneMappingExposure",S.toneMappingExposure),ft.needsLights&&us(Qn,Mn),Ke&&Y.fog&&xe.refreshFogUniforms(Qn,Ke),xe.refreshMaterialUniforms(Qn,Y,k,ee,Se),di.upload(ae,ft.uniformsList,Qn,fe)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(di.upload(ae,ft.uniformsList,Qn,fe),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&wt.setValue(ae,"center",ce.center),wt.setValue(ae,"modelViewMatrix",ce.modelViewMatrix),wt.setValue(ae,"normalMatrix",ce.normalMatrix),wt.setValue(ae,"modelMatrix",ce.matrixWorld),Pn}function us(D,q){D.ambientLightColor.needsUpdate=q,D.lightProbe.needsUpdate=q,D.directionalLights.needsUpdate=q,D.directionalLightShadows.needsUpdate=q,D.pointLights.needsUpdate=q,D.pointLightShadows.needsUpdate=q,D.spotLights.needsUpdate=q,D.spotLightShadows.needsUpdate=q,D.rectAreaLights.needsUpdate=q,D.hemisphereLights.needsUpdate=q}function ya(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return B},this.setRenderTarget=function(D,q=0,ne=0){B=D,x=q,_=ne,D&&oe.get(D).__webglFramebuffer===void 0&&fe.setupRenderTarget(D);let Y=null,ce=!1,Ke=!1;if(D){const Xe=D.texture;(Xe.isDataTexture3D||Xe.isDataTexture2DArray)&&(Ke=!0);const st=oe.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Y=st[q],ce=!0):D.isWebGLMultisampleRenderTarget?Y=oe.get(D).__webglMultisampledFramebuffer:Y=st,f.copy(D.viewport),A.copy(D.scissor),X=D.scissorTest}else f.copy(Z).multiplyScalar(k).floor(),A.copy(te).multiplyScalar(k).floor(),X=J;if(Be.bindFramebuffer(36160,Y)&&Ce.drawBuffers){let Xe=!1;if(D)if(D.isWebGLMultipleRenderTargets){const st=D.texture;if(Q.length!==st.length||Q[0]!==36064){for(let ct=0,at=st.length;ct<at;ct++)Q[ct]=36064+ct;Q.length=st.length,Xe=!0}}else(Q.length!==1||Q[0]!==36064)&&(Q[0]=36064,Q.length=1,Xe=!0);else(Q.length!==1||Q[0]!==1029)&&(Q[0]=1029,Q.length=1,Xe=!0);Xe&&(Ce.isWebGL2?ae.drawBuffers(Q):Ye.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}if(Be.viewport(f),Be.scissor(A),Be.setScissorTest(X),ce){const Xe=oe.get(D.texture);ae.framebufferTexture2D(36160,36064,34069+q,Xe.__webglTexture,ne)}else if(Ke){const Xe=oe.get(D.texture),st=q||0;ae.framebufferTextureLayer(36160,36064,Xe.__webglTexture,ne||0,st)}L=-1},this.readRenderTargetPixels=function(D,q,ne,Y,ce,Ke,je){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=oe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&je!==void 0&&(Xe=Xe[je]),Xe){Be.bindFramebuffer(36160,Xe);try{const st=D.texture,ct=st.format,at=st.type;if(ct!==en&&ue.convert(ct)!==ae.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ut=at===Oi&&(Ye.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Ye.has("EXT_color_buffer_float"));if(at!==ni&&ue.convert(at)!==ae.getParameter(35738)&&!(at===ii&&(Ce.isWebGL2||Ye.has("OES_texture_float")||Ye.has("WEBGL_color_buffer_float")))&&!ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ae.checkFramebufferStatus(36160)===36053?q>=0&&q<=D.width-Y&&ne>=0&&ne<=D.height-ce&&ae.readPixels(q,ne,Y,ce,ue.convert(ct),ue.convert(at),Ke):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const st=B!==null?oe.get(B).__webglFramebuffer:null;Be.bindFramebuffer(36160,st)}}},this.copyFramebufferToTexture=function(D,q,ne=0){const Y=Math.pow(2,-ne),ce=Math.floor(q.image.width*Y),Ke=Math.floor(q.image.height*Y);let je=ue.convert(q.format);Ce.isWebGL2&&(je===6407&&(je=32849),je===6408&&(je=32856)),fe.setTexture2D(q,0),ae.copyTexImage2D(3553,ne,je,D.x,D.y,ce,Ke,0),Be.unbindTexture()},this.copyTextureToTexture=function(D,q,ne,Y=0){const ce=q.image.width,Ke=q.image.height,je=ue.convert(ne.format),Xe=ue.convert(ne.type);fe.setTexture2D(ne,0),ae.pixelStorei(37440,ne.flipY),ae.pixelStorei(37441,ne.premultiplyAlpha),ae.pixelStorei(3317,ne.unpackAlignment),q.isDataTexture?ae.texSubImage2D(3553,Y,D.x,D.y,ce,Ke,je,Xe,q.image.data):q.isCompressedTexture?ae.compressedTexSubImage2D(3553,Y,D.x,D.y,q.mipmaps[0].width,q.mipmaps[0].height,je,q.mipmaps[0].data):ae.texSubImage2D(3553,Y,D.x,D.y,je,Xe,q.image),Y===0&&ne.generateMipmaps&&ae.generateMipmap(3553),Be.unbindTexture()},this.copyTextureToTexture3D=function(D,q,ne,Y,ce=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ke=D.max.x-D.min.x+1,je=D.max.y-D.min.y+1,Xe=D.max.z-D.min.z+1,st=ue.convert(Y.format),ct=ue.convert(Y.type);let at;if(Y.isDataTexture3D)fe.setTexture3D(Y,0),at=32879;else if(Y.isDataTexture2DArray)fe.setTexture2DArray(Y,0),at=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ae.pixelStorei(37440,Y.flipY),ae.pixelStorei(37441,Y.premultiplyAlpha),ae.pixelStorei(3317,Y.unpackAlignment);const ut=ae.getParameter(3314),Et=ae.getParameter(32878),Rn=ae.getParameter(3316),ft=ae.getParameter(3315),kn=ae.getParameter(32877),yt=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;ae.pixelStorei(3314,yt.width),ae.pixelStorei(32878,yt.height),ae.pixelStorei(3316,D.min.x),ae.pixelStorei(3315,D.min.y),ae.pixelStorei(32877,D.min.z),ne.isDataTexture||ne.isDataTexture3D?ae.texSubImage3D(at,ce,q.x,q.y,q.z,Ke,je,Xe,st,ct,yt.data):ne.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ae.compressedTexSubImage3D(at,ce,q.x,q.y,q.z,Ke,je,Xe,st,yt.data)):ae.texSubImage3D(at,ce,q.x,q.y,q.z,Ke,je,Xe,st,ct,yt),ae.pixelStorei(3314,ut),ae.pixelStorei(32878,Et),ae.pixelStorei(3316,Rn),ae.pixelStorei(3315,ft),ae.pixelStorei(32877,kn),ce===0&&Y.generateMipmaps&&ae.generateMipmap(at),Be.unbindTexture()},this.initTexture=function(D){fe.setTexture2D(D,0),Be.unbindTexture()},this.resetState=function(){x=0,_=0,B=null,Be.reset(),ze.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}xt.prototype.isWebGLRenderer=!0;class Kv extends xt{}Kv.prototype.isWebGL1Renderer=!0;class ru extends mt{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}ru.prototype.isScene=!0;class Xr{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Or,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}Xr.prototype.isInterleavedBuffer=!0;const Nt=new z;class Yr{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nt.x=this.getX(t),Nt.y=this.getY(t),Nt.z=this.getZ(t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.x=this.getX(t),Nt.y=this.getY(t),Nt.z=this.getZ(t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.x=this.getX(t),Nt.y=this.getY(t),Nt.z=this.getZ(t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Yr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Yr.prototype.isInterleavedBufferAttribute=!0;class su extends Jt{constructor(e){super();this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}su.prototype.isSpriteMaterial=!0;let fr;const Zr=new z,dr=new z,pr=new z,mr=new ve,Jr=new ve,au=new Qe,Ks=new z,$r=new z,ea=new z,ou=new ve,Io=new ve,lu=new ve;class ex extends mt{constructor(e){super();if(this.type="Sprite",fr===void 0){fr=new Lt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xr(t,5);fr.setIndex([0,1,2,0,2,3]),fr.setAttribute("position",new Yr(n,3,0,!1)),fr.setAttribute("uv",new Yr(n,2,3,!1))}this.geometry=fr,this.material=e!==void 0?e:new su,this.center=new ve(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),dr.setFromMatrixScale(this.matrixWorld),au.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),pr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&dr.multiplyScalar(-pr.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;ta(Ks.set(-.5,-.5,0),pr,o,dr,i,r),ta($r.set(.5,-.5,0),pr,o,dr,i,r),ta(ea.set(.5,.5,0),pr,o,dr,i,r),ou.set(0,0),Io.set(1,0),lu.set(1,1);let l=e.ray.intersectTriangle(Ks,$r,ea,!1,Zr);if(l===null&&(ta($r.set(-.5,.5,0),pr,o,dr,i,r),Io.set(0,1),l=e.ray.intersectTriangle(Ks,ea,$r,!1,Zr),l===null))return;const u=e.ray.origin.distanceTo(Zr);u<e.near||u>e.far||t.push({distance:u,point:Zr.clone(),uv:Bt.getUV(Zr,Ks,$r,ea,ou,Io,lu,new ve),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}ex.prototype.isSprite=!0;function ta(s,e,t,n,i,r){mr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Jr.x=r*mr.x-i*mr.y,Jr.y=i*mr.x+r*mr.y):Jr.copy(mr),s.copy(e),s.x+=Jr.x,s.y+=Jr.y,s.applyMatrix4(au)}const cu=new z,uu=new Mt,hu=new Mt,tx=new z,fu=new Qe;class du extends on{constructor(e,t){super(e,t);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;uu.fromBufferAttribute(i.attributes.skinIndex,e),hu.fromBufferAttribute(i.attributes.skinWeight,e),cu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=hu.getComponent(r);if(o!==0){const l=uu.getComponent(r);fu.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(tx.copy(cu).applyMatrix4(fu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}du.prototype.isSkinnedMesh=!0;class nx extends mt{constructor(){super();this.type="Bone"}}nx.prototype.isBone=!0;class ix extends Xt{constructor(e=null,t=1,n=1,i,r,o,l,u,h=Gt,p=Gt,g,v){super(null,o,l,u,h,p,i,r,g,v);this.image={data:e,width:t,height:n},this.magFilter=h,this.minFilter=p,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}ix.prototype.isDataTexture=!0;class No extends Ht{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(e,t,n);this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}No.prototype.isInstancedBufferAttribute=!0;const pu=new Qe,mu=new Qe,na=[],Qr=new on;class rx extends on{constructor(e,t,n){super(e,t);this.instanceMatrix=new No(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Qr.geometry=this.geometry,Qr.material=this.material,Qr.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,pu),mu.multiplyMatrices(n,pu),Qr.matrixWorld=mu,Qr.raycast(e,na);for(let o=0,l=na.length;o<l;o++){const u=na[o];u.instanceId=r,u.object=this,t.push(u)}na.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new No(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}rx.prototype.isInstancedMesh=!0;class Kr extends Jt{constructor(e){super();this.type="LineBasicMaterial",this.color=new Ge(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Kr.prototype.isLineBasicMaterial=!0;const gu=new z,vu=new z,xu=new Qe,Fo=new Ji,ia=new Zi;class Bo extends mt{constructor(e=new Lt,t=new Kr){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)gu.fromBufferAttribute(t,i-1),vu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=gu.distanceTo(vu);e.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(i),ia.radius+=r,e.ray.intersectsSphere(ia)===!1)return;xu.copy(i).invert(),Fo.copy(e.ray).applyMatrix4(xu);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=new z,p=new z,g=new z,v=new z,y=this.isLineSegments?2:1;if(n.isBufferGeometry){const b=n.index,R=n.attributes.position;if(b!==null){const x=Math.max(0,o.start),_=Math.min(b.count,o.start+o.count);for(let B=x,L=_-1;B<L;B+=y){const O=b.getX(B),f=b.getX(B+1);if(h.fromBufferAttribute(R,O),p.fromBufferAttribute(R,f),Fo.distanceSqToSegment(h,p,v,g)>u)continue;v.applyMatrix4(this.matrixWorld);const X=e.ray.origin.distanceTo(v);X<e.near||X>e.far||t.push({distance:X,point:g.clone().applyMatrix4(this.matrixWorld),index:B,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,o.start),_=Math.min(R.count,o.start+o.count);for(let B=x,L=_-1;B<L;B+=y){if(h.fromBufferAttribute(R,B),p.fromBufferAttribute(R,B+1),Fo.distanceSqToSegment(h,p,v,g)>u)continue;v.applyMatrix4(this.matrixWorld);const f=e.ray.origin.distanceTo(v);f<e.near||f>e.far||t.push({distance:f,point:g.clone().applyMatrix4(this.matrixWorld),index:B,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Bo.prototype.isLine=!0;const yu=new z,_u=new z;class zo extends Bo{constructor(e,t){super(e,t);this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)yu.fromBufferAttribute(t,i),_u.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+yu.distanceTo(_u);e.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}zo.prototype.isLineSegments=!0;class sx extends Bo{constructor(e,t){super(e,t);this.type="LineLoop"}}sx.prototype.isLineLoop=!0;class bu extends Jt{constructor(e){super();this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}bu.prototype.isPointsMaterial=!0;const Mu=new Qe,Oo=new Ji,ra=new Zi,sa=new z;class ax extends mt{constructor(e=new Lt,t=new bu){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(i),ra.radius+=r,e.ray.intersectsSphere(ra)===!1)return;Mu.copy(i).invert(),Oo.copy(e.ray).applyMatrix4(Mu);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l;if(n.isBufferGeometry){const h=n.index,g=n.attributes.position;if(h!==null){const v=Math.max(0,o.start),y=Math.min(h.count,o.start+o.count);for(let b=v,S=y;b<S;b++){const R=h.getX(b);sa.fromBufferAttribute(g,R),wu(sa,R,u,i,e,t,this)}}else{const v=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let b=v,S=y;b<S;b++)sa.fromBufferAttribute(g,b),wu(sa,b,u,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}ax.prototype.isPoints=!0;function wu(s,e,t,n,i,r,o){const l=Oo.distanceSqToPoint(s);if(l<t){const u=new z;Oo.closestPointToPoint(s,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(l),point:u,index:e,face:null,object:o})}}class ox extends Xt{constructor(e,t,n,i,r,o,l,u,h){super(e,t,n,i,r,o,l,u,h);this.format=l!==void 0?l:Ui,this.minFilter=o!==void 0?o:xn,this.magFilter=r!==void 0?r:xn,this.generateMipmaps=!1;const p=this;function g(){p.needsUpdate=!0,e.requestVideoFrameCallback(g)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(g)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}ox.prototype.isVideoTexture=!0;class lx extends Xt{constructor(e,t,n,i,r,o,l,u,h,p,g,v){super(null,o,l,u,h,p,i,r,g,v);this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}lx.prototype.isCompressedTexture=!0;class cx extends Xt{constructor(e,t,n,i,r,o,l,u,h){super(e,t,n,i,r,o,l,u,h);this.needsUpdate=!0}}cx.prototype.isCanvasTexture=!0;class ux extends Xt{constructor(e,t,n,i,r,o,l,u,h,p){if(p=p!==void 0?p:ki,p!==ki&&p!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===ki&&(n=Ss),n===void 0&&p===zr&&(n=Br);super(null,i,r,o,l,u,p,n,h);this.image={width:e,height:t},this.magFilter=l!==void 0?l:Gt,this.minFilter=u!==void 0?u:Gt,this.flipY=!1,this.generateMipmaps=!1}}ux.prototype.isDepthTexture=!0;new z;new z;new z;new Bt;class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let l=0,u=r-1,h;for(;l<=u;)if(i=Math.floor(l+(u-l)/2),h=n[i]-o,h<0)l=i+1;else if(h>0)u=i-1;else{u=i;break}if(i=u,n[i]===o)return i/(r-1);const p=n[i],v=n[i+1]-p,y=(o-p)/v;return(i+y)/(r-1)}getTangent(e,t){const n=1e-4;let i=e-n,r=e+n;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),l=this.getPoint(r),u=t||(o.isVector2?new ve:new z);return u.copy(l).sub(o).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new z,i=[],r=[],o=[],l=new z,u=new Qe;for(let y=0;y<=e;y++){const b=y/e;i[y]=this.getTangentAt(b,new z)}r[0]=new z,o[0]=new z;let h=Number.MAX_VALUE;const p=Math.abs(i[0].x),g=Math.abs(i[0].y),v=Math.abs(i[0].z);p<=h&&(h=p,n.set(1,0,0)),g<=h&&(h=g,n.set(0,1,0)),v<=h&&n.set(0,0,1),l.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],l),o[0].crossVectors(i[0],r[0]);for(let y=1;y<=e;y++){if(r[y]=r[y-1].clone(),o[y]=o[y-1].clone(),l.crossVectors(i[y-1],i[y]),l.length()>Number.EPSILON){l.normalize();const b=Math.acos(pn(i[y-1].dot(i[y]),-1,1));r[y].applyMatrix4(u.makeRotationAxis(l,b))}o[y].crossVectors(i[y],r[y])}if(t===!0){let y=Math.acos(pn(r[0].dot(r[e]),-1,1));y/=e,i[0].dot(l.crossVectors(r[0],r[e]))>0&&(y=-y);for(let b=1;b<=e;b++)r[b].applyMatrix4(u.makeRotationAxis(i[b],y*b)),o[b].crossVectors(i[b],r[b])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class aa extends _n{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,l=!1,u=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=u}getPoint(e,t){const n=t||new ve,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const l=this.aStartAngle+e*r;let u=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const p=Math.cos(this.aRotation),g=Math.sin(this.aRotation),v=u-this.aX,y=h-this.aY;u=v*p-y*g+this.aX,h=v*g+y*p+this.aY}return n.set(u,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}aa.prototype.isEllipseCurve=!0;class Su extends aa{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o);this.type="ArcCurve"}}Su.prototype.isArcCurve=!0;function Uo(){let s=0,e=0,t=0,n=0;function i(r,o,l,u){s=r,e=l,t=-3*r+3*o-2*l-u,n=2*r-2*o+l+u}return{initCatmullRom:function(r,o,l,u,h){i(o,l,h*(l-r),h*(u-o))},initNonuniformCatmullRom:function(r,o,l,u,h,p,g){let v=(o-r)/h-(l-r)/(h+p)+(l-o)/p,y=(l-o)/p-(u-o)/(p+g)+(u-l)/g;v*=p,y*=p,i(o,l,v,y)},calc:function(r){const o=r*r,l=o*r;return s+e*r+t*o+n*l}}}const oa=new z,ko=new Uo,Ho=new Uo,Go=new Uo;class Tu extends _n{constructor(e=[],t=!1,n="centripetal",i=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new z){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let l=Math.floor(o),u=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:u===0&&l===r-1&&(l=r-2,u=1);let h,p;this.closed||l>0?h=i[(l-1)%r]:(oa.subVectors(i[0],i[1]).add(i[0]),h=oa);const g=i[l%r],v=i[(l+1)%r];if(this.closed||l+2<r?p=i[(l+2)%r]:(oa.subVectors(i[r-1],i[r-2]).add(i[r-1]),p=oa),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let b=Math.pow(h.distanceToSquared(g),y),S=Math.pow(g.distanceToSquared(v),y),R=Math.pow(v.distanceToSquared(p),y);S<1e-4&&(S=1),b<1e-4&&(b=S),R<1e-4&&(R=S),ko.initNonuniformCatmullRom(h.x,g.x,v.x,p.x,b,S,R),Ho.initNonuniformCatmullRom(h.y,g.y,v.y,p.y,b,S,R),Go.initNonuniformCatmullRom(h.z,g.z,v.z,p.z,b,S,R)}else this.curveType==="catmullrom"&&(ko.initCatmullRom(h.x,g.x,v.x,p.x,this.tension),Ho.initCatmullRom(h.y,g.y,v.y,p.y,this.tension),Go.initCatmullRom(h.z,g.z,v.z,p.z,this.tension));return n.set(ko.calc(u),Ho.calc(u),Go.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new z().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}Tu.prototype.isCatmullRomCurve3=!0;function Eu(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,l=s*s,u=s*l;return(2*t-2*n+r+o)*u+(-3*t+3*n-2*r-o)*l+r*s+t}function hx(s,e){const t=1-s;return t*t*e}function fx(s,e){return 2*(1-s)*s*e}function dx(s,e){return s*s*e}function es(s,e,t,n){return hx(s,e)+fx(s,t)+dx(s,n)}function px(s,e){const t=1-s;return t*t*t*e}function mx(s,e){const t=1-s;return 3*t*t*s*e}function gx(s,e){return 3*(1-s)*s*s*e}function vx(s,e){return s*s*s*e}function ts(s,e,t,n,i){return px(s,e)+mx(s,t)+gx(s,n)+vx(s,i)}class Vo extends _n{constructor(e=new ve,t=new ve,n=new ve,i=new ve){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ve){const n=t,i=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(ts(e,i.x,r.x,o.x,l.x),ts(e,i.y,r.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Vo.prototype.isCubicBezierCurve=!0;class Au extends _n{constructor(e=new z,t=new z,n=new z,i=new z){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new z){const n=t,i=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(ts(e,i.x,r.x,o.x,l.x),ts(e,i.y,r.y,o.y,l.y),ts(e,i.z,r.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Au.prototype.isCubicBezierCurve3=!0;class la extends _n{constructor(e=new ve,t=new ve){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new ve;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}la.prototype.isLineCurve=!0;class xx extends _n{constructor(e=new z,t=new z){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wo extends _n{constructor(e=new ve,t=new ve,n=new ve){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(es(e,i.x,r.x,o.x),es(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Wo.prototype.isQuadraticBezierCurve=!0;class Cu extends _n{constructor(e=new z,t=new z,n=new z){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(es(e,i.x,r.x,o.x),es(e,i.y,r.y,o.y),es(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Cu.prototype.isQuadraticBezierCurve3=!0;class qo extends _n{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),l=r-o,u=i[o===0?o:o-1],h=i[o],p=i[o>i.length-2?i.length-1:o+1],g=i[o>i.length-3?i.length-1:o+2];return n.set(Eu(l,u.x,h.x,p.x,g.x),Eu(l,u.y,h.y,p.y,g.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ve().fromArray(i))}return this}}qo.prototype.isSplineCurve=!0;var Lu=Object.freeze({__proto__:null,ArcCurve:Su,CatmullRomCurve3:Tu,CubicBezierCurve:Vo,CubicBezierCurve3:Au,EllipseCurve:aa,LineCurve:la,LineCurve3:xx,QuadraticBezierCurve:Wo,QuadraticBezierCurve3:Cu,SplineCurve:qo});class yx extends _n{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new la(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,l=this.curves[r],u=l.getLength(),h=u===0?0:1-o/u;return l.getPointAt(h,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],l=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,u=o.getPoints(l);for(let h=0;h<u.length;h++){const p=u[h];n&&n.equals(p)||(t.push(p),n=p)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Lu[i.type]().fromJSON(i))}return this}}class jo extends yx{constructor(e){super();this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new la(this.currentPoint.clone(),new ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Wo(this.currentPoint.clone(),new ve(e,t),new ve(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const l=new Vo(this.currentPoint.clone(),new ve(e,t),new ve(n,i),new ve(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new qo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+l,t+u,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,l,u){const h=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(e+h,t+p,n,i,r,o,l,u),this}absellipse(e,t,n,i,r,o,l,u){const h=new aa(e,t,n,i,r,o,l,u);if(this.curves.length>0){const g=h.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(h);const p=h.getPoint(1);return this.currentPoint.copy(p),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ns extends jo{constructor(e){super(e);this.uuid=In(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new jo().fromJSON(i))}return this}}const _x={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Ru(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let l,u,h,p,g,v,y;if(n&&(r=Tx(s,e,r,t)),s.length>80*t){l=h=s[0],u=p=s[1];for(let b=t;b<i;b+=t)g=s[b],v=s[b+1],g<l&&(l=g),v<u&&(u=v),g>h&&(h=g),v>p&&(p=v);y=Math.max(h-l,p-u),y=y!==0?1/y:0}return is(r,o,t,l,u,y),o}};function Ru(s,e,t,n,i){let r,o;if(i===Bx(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Iu(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Iu(r,s[r],s[r+1],o);return o&&ca(o,o.next)&&(ss(o),o=o.next),o}function pi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ca(t,t.next)||Dt(t.prev,t,t.next)===0)){if(ss(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function is(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Rx(s,n,i,r);let l=s,u,h;for(;s.prev!==s.next;){if(u=s.prev,h=s.next,r?Mx(s,n,i,r):bx(s)){e.push(u.i/t),e.push(s.i/t),e.push(h.i/t),ss(s),s=h.next,l=h.next;continue}if(s=h,s===l){o?o===1?(s=wx(pi(s),e,t),is(s,e,t,n,i,r,2)):o===2&&Sx(s,e,t,n,i,r):is(pi(s),e,t,n,i,r,1);break}}}function bx(s){const e=s.prev,t=s,n=s.next;if(Dt(e,t,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(gr(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&Dt(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Mx(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Dt(i,r,o)>=0)return!1;const l=i.x<r.x?i.x<o.x?i.x:o.x:r.x<o.x?r.x:o.x,u=i.y<r.y?i.y<o.y?i.y:o.y:r.y<o.y?r.y:o.y,h=i.x>r.x?i.x>o.x?i.x:o.x:r.x>o.x?r.x:o.x,p=i.y>r.y?i.y>o.y?i.y:o.y:r.y>o.y?r.y:o.y,g=Xo(l,u,e,t,n),v=Xo(h,p,e,t,n);let y=s.prevZ,b=s.nextZ;for(;y&&y.z>=g&&b&&b.z<=v;){if(y!==s.prev&&y!==s.next&&gr(i.x,i.y,r.x,r.y,o.x,o.y,y.x,y.y)&&Dt(y.prev,y,y.next)>=0||(y=y.prevZ,b!==s.prev&&b!==s.next&&gr(i.x,i.y,r.x,r.y,o.x,o.y,b.x,b.y)&&Dt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=g;){if(y!==s.prev&&y!==s.next&&gr(i.x,i.y,r.x,r.y,o.x,o.y,y.x,y.y)&&Dt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b!==s.prev&&b!==s.next&&gr(i.x,i.y,r.x,r.y,o.x,o.y,b.x,b.y)&&Dt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function wx(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!ca(i,r)&&Pu(i,n,n.next,r)&&rs(i,r)&&rs(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),ss(n),ss(n.next),n=s=r),n=n.next}while(n!==s);return pi(n)}function Sx(s,e,t,n,i,r){let o=s;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&Ix(o,l)){let u=Du(o,l);o=pi(o,o.next),u=pi(u,u.next),is(o,e,t,n,i,r),is(u,e,t,n,i,r);return}l=l.next}o=o.next}while(o!==s)}function Tx(s,e,t,n){const i=[];let r,o,l,u,h;for(r=0,o=e.length;r<o;r++)l=e[r]*n,u=r<o-1?e[r+1]*n:s.length,h=Ru(s,l,u,n,!1),h===h.next&&(h.steiner=!0),i.push(Dx(h));for(i.sort(Ex),r=0;r<i.length;r++)Ax(i[r],t),t=pi(t,t.next);return t}function Ex(s,e){return s.x-e.x}function Ax(s,e){if(e=Cx(s,e),e){const t=Du(e,s);pi(e,e.next),pi(t,t.next)}}function Cx(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const v=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=n&&v>r){if(r=v,v===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===r)return o;const l=o,u=o.x,h=o.y;let p=1/0,g;t=o;do n>=t.x&&t.x>=u&&n!==t.x&&gr(i<h?n:r,i,u,h,i<h?r:n,i,t.x,t.y)&&(g=Math.abs(i-t.y)/(n-t.x),rs(t,s)&&(g<p||g===p&&(t.x>o.x||t.x===o.x&&Lx(o,t)))&&(o=t,p=g)),t=t.next;while(t!==l);return o}function Lx(s,e){return Dt(s.prev,s,e.prev)<0&&Dt(e.next,s,s.next)<0}function Rx(s,e,t,n){let i=s;do i.z===null&&(i.z=Xo(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Px(i)}function Px(s){let e,t,n,i,r,o,l,u,h=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,l=0,e=0;e<h&&(l++,n=n.nextZ,!!n);e++);for(u=h;l>0||u>0&&n;)l!==0&&(u===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,l--):(i=n,n=n.nextZ,u--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,h*=2}while(o>1);return s}function Xo(s,e,t,n,i){return s=32767*(s-t)*i,e=32767*(e-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Dx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function gr(s,e,t,n,i,r,o,l){return(i-o)*(e-l)-(s-o)*(r-l)>=0&&(s-o)*(n-l)-(t-o)*(e-l)>=0&&(t-o)*(r-l)-(i-o)*(n-l)>=0}function Ix(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Nx(s,e)&&(rs(s,e)&&rs(e,s)&&Fx(s,e)&&(Dt(s.prev,s,e.prev)||Dt(s,e.prev,e))||ca(s,e)&&Dt(s.prev,s,s.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ca(s,e){return s.x===e.x&&s.y===e.y}function Pu(s,e,t,n){const i=ha(Dt(s,e,t)),r=ha(Dt(s,e,n)),o=ha(Dt(t,n,s)),l=ha(Dt(t,n,e));return!!(i!==r&&o!==l||i===0&&ua(s,t,e)||r===0&&ua(s,n,e)||o===0&&ua(t,s,n)||l===0&&ua(t,e,n))}function ua(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ha(s){return s>0?1:s<0?-1:0}function Nx(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Pu(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function rs(s,e){return Dt(s.prev,s,s.next)<0?Dt(s,e,s.next)>=0&&Dt(s,s.prev,e)>=0:Dt(s,e,s.prev)<0||Dt(s,s.next,e)<0}function Fx(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Du(s,e){const t=new Yo(s.i,s.x,s.y),n=new Yo(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Iu(s,e,t,n){const i=new Yo(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ss(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Yo(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Bx(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class mi{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return mi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Nu(e),Fu(n,e);let o=e.length;t.forEach(Nu);for(let u=0;u<t.length;u++)i.push(o),o+=t[u].length,Fu(n,t[u]);const l=_x.triangulate(n,i);for(let u=0;u<l.length;u+=3)r.push(l.slice(u,u+3));return r}}function Nu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Fu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class vr extends Lt{constructor(e=new ns([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];o(h)}this.setAttribute("position",new Vt(i,3)),this.setAttribute("uv",new Vt(r,2)),this.computeVertexNormals();function o(l){const u=[],h=t.curveSegments!==void 0?t.curveSegments:12,p=t.steps!==void 0?t.steps:1;let g=t.depth!==void 0?t.depth:1,v=t.bevelEnabled!==void 0?t.bevelEnabled:!0,y=t.bevelThickness!==void 0?t.bevelThickness:.2,b=t.bevelSize!==void 0?t.bevelSize:y-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,R=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:zx;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),g=t.amount);let B,L=!1,O,f,A,X;x&&(B=x.getSpacedPoints(p),L=!0,v=!1,O=x.computeFrenetFrames(p,!1),f=new z,A=new z,X=new z),v||(R=0,y=0,b=0,S=0);const me=l.extractPoints(h);let ee=me.shape;const k=me.holes;if(!mi.isClockWise(ee)){ee=ee.reverse();for(let oe=0,fe=k.length;oe<fe;oe++){const _e=k[oe];mi.isClockWise(_e)&&(k[oe]=_e.reverse())}}const $=mi.triangulateShape(ee,k),Z=ee;for(let oe=0,fe=k.length;oe<fe;oe++){const _e=k[oe];ee=ee.concat(_e)}function te(oe,fe,_e){return fe||console.error("THREE.ExtrudeGeometry: vec does not exist"),fe.clone().multiplyScalar(_e).add(oe)}const J=ee.length,Q=$.length;function Me(oe,fe,_e){let Ie,re,P;const C=oe.x-fe.x,se=oe.y-fe.y,xe=_e.x-oe.x,ge=_e.y-oe.y,Le=C*C+se*se,Ve=C*ge-se*xe;if(Math.abs(Ve)>Number.EPSILON){const Re=Math.sqrt(Le),We=Math.sqrt(xe*xe+ge*ge),Pe=fe.x-se/Re,H=fe.y+C/Re,Te=_e.x-ge/We,ue=_e.y+xe/We,ze=((Te-Pe)*ge-(ue-H)*xe)/(C*ge-se*xe);Ie=Pe+C*ze-oe.x,re=H+se*ze-oe.y;const Fe=Ie*Ie+re*re;if(Fe<=2)return new ve(Ie,re);P=Math.sqrt(Fe/2)}else{let Re=!1;C>Number.EPSILON?xe>Number.EPSILON&&(Re=!0):C<-Number.EPSILON?xe<-Number.EPSILON&&(Re=!0):Math.sign(se)===Math.sign(ge)&&(Re=!0),Re?(Ie=-se,re=C,P=Math.sqrt(Le)):(Ie=C,re=se,P=Math.sqrt(Le/2))}return new ve(Ie/P,re/P)}const De=[];for(let oe=0,fe=Z.length,_e=fe-1,Ie=oe+1;oe<fe;oe++,_e++,Ie++)_e===fe&&(_e=0),Ie===fe&&(Ie=0),De[oe]=Me(Z[oe],Z[_e],Z[Ie]);const ke=[];let Se,et=De.concat();for(let oe=0,fe=k.length;oe<fe;oe++){const _e=k[oe];Se=[];for(let Ie=0,re=_e.length,P=re-1,C=Ie+1;Ie<re;Ie++,P++,C++)P===re&&(P=0),C===re&&(C=0),Se[Ie]=Me(_e[Ie],_e[P],_e[C]);ke.push(Se),et=et.concat(Se)}for(let oe=0;oe<R;oe++){const fe=oe/R,_e=y*Math.cos(fe*Math.PI/2),Ie=b*Math.sin(fe*Math.PI/2)+S;for(let re=0,P=Z.length;re<P;re++){const C=te(Z[re],De[re],Ie);He(C.x,C.y,-_e)}for(let re=0,P=k.length;re<P;re++){const C=k[re];Se=ke[re];for(let se=0,xe=C.length;se<xe;se++){const ge=te(C[se],Se[se],Ie);He(ge.x,ge.y,-_e)}}}const he=b+S;for(let oe=0;oe<J;oe++){const fe=v?te(ee[oe],et[oe],he):ee[oe];L?(A.copy(O.normals[0]).multiplyScalar(fe.x),f.copy(O.binormals[0]).multiplyScalar(fe.y),X.copy(B[0]).add(A).add(f),He(X.x,X.y,X.z)):He(fe.x,fe.y,0)}for(let oe=1;oe<=p;oe++)for(let fe=0;fe<J;fe++){const _e=v?te(ee[fe],et[fe],he):ee[fe];L?(A.copy(O.normals[oe]).multiplyScalar(_e.x),f.copy(O.binormals[oe]).multiplyScalar(_e.y),X.copy(B[oe]).add(A).add(f),He(X.x,X.y,X.z)):He(_e.x,_e.y,g/p*oe)}for(let oe=R-1;oe>=0;oe--){const fe=oe/R,_e=y*Math.cos(fe*Math.PI/2),Ie=b*Math.sin(fe*Math.PI/2)+S;for(let re=0,P=Z.length;re<P;re++){const C=te(Z[re],De[re],Ie);He(C.x,C.y,g+_e)}for(let re=0,P=k.length;re<P;re++){const C=k[re];Se=ke[re];for(let se=0,xe=C.length;se<xe;se++){const ge=te(C[se],Se[se],Ie);L?He(ge.x,ge.y+B[p-1].y,B[p-1].x+_e):He(ge.x,ge.y,g+_e)}}}ye(),Ne();function ye(){const oe=i.length/3;if(v){let fe=0,_e=J*fe;for(let Ie=0;Ie<Q;Ie++){const re=$[Ie];Ye(re[2]+_e,re[1]+_e,re[0]+_e)}fe=p+R*2,_e=J*fe;for(let Ie=0;Ie<Q;Ie++){const re=$[Ie];Ye(re[0]+_e,re[1]+_e,re[2]+_e)}}else{for(let fe=0;fe<Q;fe++){const _e=$[fe];Ye(_e[2],_e[1],_e[0])}for(let fe=0;fe<Q;fe++){const _e=$[fe];Ye(_e[0]+J*p,_e[1]+J*p,_e[2]+J*p)}}n.addGroup(oe,i.length/3-oe,0)}function Ne(){const oe=i.length/3;let fe=0;ae(Z,fe),fe+=Z.length;for(let _e=0,Ie=k.length;_e<Ie;_e++){const re=k[_e];ae(re,fe),fe+=re.length}n.addGroup(oe,i.length/3-oe,1)}function ae(oe,fe){let _e=oe.length;for(;--_e>=0;){const Ie=_e;let re=_e-1;re<0&&(re=oe.length-1);for(let P=0,C=p+R*2;P<C;P++){const se=J*P,xe=J*(P+1),ge=fe+Ie+se,Le=fe+re+se,Ve=fe+re+xe,Re=fe+Ie+xe;Ce(ge,Le,Ve,Re)}}}function He(oe,fe,_e){u.push(oe),u.push(fe),u.push(_e)}function Ye(oe,fe,_e){Be(oe),Be(fe),Be(_e);const Ie=i.length/3,re=_.generateTopUV(n,i,Ie-3,Ie-2,Ie-1);nt(re[0]),nt(re[1]),nt(re[2])}function Ce(oe,fe,_e,Ie){Be(oe),Be(fe),Be(Ie),Be(fe),Be(_e),Be(Ie);const re=i.length/3,P=_.generateSideWallUV(n,i,re-6,re-3,re-2,re-1);nt(P[0]),nt(P[1]),nt(P[3]),nt(P[1]),nt(P[2]),nt(P[3])}function Be(oe){i.push(u[oe*3+0]),i.push(u[oe*3+1]),i.push(u[oe*3+2])}function nt(oe){r.push(oe.x),r.push(oe.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ox(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const l=t[e.shapes[r]];n.push(l)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Lu[i.type]().fromJSON(i)),new vr(n,e.options)}}const zx={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],l=e[n*3],u=e[n*3+1],h=e[i*3],p=e[i*3+1];return[new ve(r,o),new ve(l,u),new ve(h,p)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],l=e[t*3+1],u=e[t*3+2],h=e[n*3],p=e[n*3+1],g=e[n*3+2],v=e[i*3],y=e[i*3+1],b=e[i*3+2],S=e[r*3],R=e[r*3+1],x=e[r*3+2];return Math.abs(l-p)<Math.abs(o-h)?[new ve(o,1-u),new ve(h,1-g),new ve(v,1-b),new ve(S,1-x)]:[new ve(l,1-u),new ve(p,1-g),new ve(y,1-b),new ve(R,1-x)]}};function Ox(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Zo extends Lt{constructor(e=new ns([new ve(0,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let l=0,u=0;if(Array.isArray(e)===!1)h(e);else for(let p=0;p<e.length;p++)h(e[p]),this.addGroup(l,u,p),l+=u,u=0;this.setIndex(n),this.setAttribute("position",new Vt(i,3)),this.setAttribute("normal",new Vt(r,3)),this.setAttribute("uv",new Vt(o,2));function h(p){const g=i.length/3,v=p.extractPoints(t);let y=v.shape;const b=v.holes;mi.isClockWise(y)===!1&&(y=y.reverse());for(let R=0,x=b.length;R<x;R++){const _=b[R];mi.isClockWise(_)===!0&&(b[R]=_.reverse())}const S=mi.triangulateShape(y,b);for(let R=0,x=b.length;R<x;R++){const _=b[R];y=y.concat(_)}for(let R=0,x=y.length;R<x;R++){const _=y[R];i.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let R=0,x=S.length;R<x;R++){const _=S[R],B=_[0]+g,L=_[1]+g,O=_[2]+g;n.push(B,L,O),u+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Ux(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Zo(n,e.curveSegments)}}function Ux(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class kx extends Jt{constructor(e){super();this.type="ShadowMaterial",this.color=new Ge(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}kx.prototype.isShadowMaterial=!0;class Bu extends Jt{constructor(e){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Bu.prototype.isMeshStandardMaterial=!0;class Hx extends Bu{constructor(e){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}Hx.prototype.isMeshPhysicalMaterial=!0;class Gx extends Jt{constructor(e){super();this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Gx.prototype.isMeshPhongMaterial=!0;class Vx extends Jt{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ge(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Vx.prototype.isMeshToonMaterial=!0;class Wx extends Jt{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Wx.prototype.isMeshNormalMaterial=!0;class qx extends Jt{constructor(e){super();this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}qx.prototype.isMeshLambertMaterial=!0;class jx extends Jt{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ge(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}jx.prototype.isMeshMatcapMaterial=!0;class Xx extends Kr{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Xx.prototype.isLineDashedMaterial=!0;const Rt={arraySlice:function(s,e,t){return Rt.isTypedArray(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)},convertArray:function(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const l=t[r]*e;for(let u=0;u!==e;++u)i[o++]=s[l+u]}return i},flattenJSON:function(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)},subclip:function(s,e,t,n,i=30){const r=s.clone();r.name=e;const o=[];for(let u=0;u<r.tracks.length;++u){const h=r.tracks[u],p=h.getValueSize(),g=[],v=[];for(let y=0;y<h.times.length;++y){const b=h.times[y]*i;if(!(b<t||b>=n)){g.push(h.times[y]);for(let S=0;S<p;++S)v.push(h.values[y*p+S])}}g.length!==0&&(h.times=Rt.convertArray(g,h.times.constructor),h.values=Rt.convertArray(v,h.values.constructor),o.push(h))}r.tracks=o;let l=1/0;for(let u=0;u<r.tracks.length;++u)l>r.tracks[u].times[0]&&(l=r.tracks[u].times[0]);for(let u=0;u<r.tracks.length;++u)r.tracks[u].shift(-1*l);return r.resetDuration(),r},makeClipAdditive:function(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let o=0;o<i;++o){const l=t.tracks[o],u=l.ValueTypeName;if(u==="bool"||u==="string")continue;const h=s.tracks.find(function(x){return x.name===l.name&&x.ValueTypeName===u});if(h===void 0)continue;let p=0;const g=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(p=g/3);let v=0;const y=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(v=y/3);const b=l.times.length-1;let S;if(r<=l.times[0]){const x=p,_=g-p;S=Rt.arraySlice(l.values,x,_)}else if(r>=l.times[b]){const x=b*g+p,_=x+g-p;S=Rt.arraySlice(l.values,x,_)}else{const x=l.createInterpolant(),_=p,B=g-p;x.evaluate(r),S=Rt.arraySlice(x.resultBuffer,_,B)}u==="quaternion"&&new an().fromArray(S).normalize().conjugate().toArray(S);const R=h.times.length;for(let x=0;x<R;++x){const _=x*y+v;if(u==="quaternion")an.multiplyQuaternionsFlat(h.values,_,S,0,h.values,_);else{const B=y-v*2;for(let L=0;L<B;++L)h.values[_+L]-=S[L]}}}return s.blendMode=$l,s}};class gi{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===l)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const l=t[1];e<l&&(n=2,r=l);for(let u=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===u)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const l=n+o>>>1;e<t[l]?o=l:n=l+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}gi.prototype.beforeStart_=gi.prototype.copySampleValue_;gi.prototype.afterEnd_=gi.prototype.copySampleValue_;class Yx extends gi{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hi,endingEnd:Hi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,l=i[r],u=i[o];if(l===void 0)switch(this.getSettings_().endingStart){case Gi:r=e,l=2*t-n;break;case Cs:r=i.length-2,l=t+i[r]-i[r+1];break;default:r=e,l=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Gi:o=e,u=2*n-t;break;case Cs:o=1,u=n+i[1]-i[0];break;default:o=e-1,u=t}const h=(n-t)*.5,p=this.valueSize;this._weightPrev=h/(t-l),this._weightNext=h/(u-n),this._offsetPrev=r*p,this._offsetNext=o*p}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,p=this._offsetPrev,g=this._offsetNext,v=this._weightPrev,y=this._weightNext,b=(n-t)/(i-t),S=b*b,R=S*b,x=-v*R+2*v*S-v*b,_=(1+v)*R+(-1.5-2*v)*S+(-.5+v)*b+1,B=(-1-y)*R+(1.5+y)*S+.5*b,L=y*R-y*S;for(let O=0;O!==l;++O)r[O]=x*o[p+O]+_*o[h+O]+B*o[u+O]+L*o[g+O];return r}}class zu extends gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,p=(n-t)/(i-t),g=1-p;for(let v=0;v!==l;++v)r[v]=o[h+v]*g+o[u+v]*p;return r}}class Zx extends gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class zn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rt.convertArray(t,this.TimeBufferType),this.values=Rt.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rt.convertArray(e.times,Array),values:Rt.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Es:t=this.InterpolantFactoryMethodDiscrete;break;case As:t=this.InterpolantFactoryMethodLinear;break;case Ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return As;case this.InterpolantFactoryMethodSmooth:return Ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const l=this.getValueSize();this.times=Rt.arraySlice(n,r,o),this.values=Rt.arraySlice(this.values,r*l,o*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){const u=n[l];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,u),e=!1;break}if(o!==null&&o>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,u,o),e=!1;break}o=u}if(i!==void 0&&Rt.isTypedArray(i))for(let l=0,u=i.length;l!==u;++l){const h=i[l];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,h),e=!1;break}}return e}optimize(){const e=Rt.arraySlice(this.times),t=Rt.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Ga,r=e.length-1;let o=1;for(let l=1;l<r;++l){let u=!1;const h=e[l],p=e[l+1];if(h!==p&&(l!==1||h!==e[0]))if(i)u=!0;else{const g=l*n,v=g-n,y=g+n;for(let b=0;b!==n;++b){const S=t[g+b];if(S!==t[v+b]||S!==t[y+b]){u=!0;break}}}if(u){if(l!==o){e[o]=e[l];const g=l*n,v=o*n;for(let y=0;y!==n;++y)t[v+y]=t[g+y]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,u=o*n,h=0;h!==n;++h)t[u+h]=t[l+h];++o}return o!==e.length?(this.times=Rt.arraySlice(e,0,o),this.values=Rt.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Rt.arraySlice(this.times,0),t=Rt.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=As;class xr extends zn{}xr.prototype.ValueTypeName="bool";xr.prototype.ValueBufferType=Array;xr.prototype.DefaultInterpolation=Es;xr.prototype.InterpolantFactoryMethodLinear=void 0;xr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ou extends zn{}Ou.prototype.ValueTypeName="color";class fa extends zn{}fa.prototype.ValueTypeName="number";class Jx extends gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=(n-t)/(i-t);let h=e*l;for(let p=h+l;h!==p;h+=4)an.slerpFlat(r,0,o,h-l,o,h,u);return r}}class as extends zn{InterpolantFactoryMethodLinear(e){return new Jx(this.times,this.values,this.getValueSize(),e)}}as.prototype.ValueTypeName="quaternion";as.prototype.DefaultInterpolation=As;as.prototype.InterpolantFactoryMethodSmooth=void 0;class yr extends zn{}yr.prototype.ValueTypeName="string";yr.prototype.ValueBufferType=Array;yr.prototype.DefaultInterpolation=Es;yr.prototype.InterpolantFactoryMethodLinear=void 0;yr.prototype.InterpolantFactoryMethodSmooth=void 0;class da extends zn{}da.prototype.ValueTypeName="vector";class Uu{constructor(e,t=-1,n,i=Va){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=In(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,l=n.length;o!==l;++o)t.push(Qx(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(zn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let l=0;l<r;l++){let u=[],h=[];u.push((l+r-1)%r,l,(l+1)%r),h.push(0,1,0);const p=Rt.getKeyframeOrder(u);u=Rt.sortedArray(u,1,p),h=Rt.sortedArray(h,1,p),!i&&u[0]===0&&(u.push(r),h.push(h[0])),o.push(new fa(".morphTargetInfluences["+t[l].name+"]",u,h).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let l=0,u=e.length;l<u;l++){const h=e[l],p=h.name.match(r);if(p&&p.length>1){const g=p[1];let v=i[g];v||(i[g]=v=[]),v.push(h)}}const o=[];for(const l in i)o.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(g,v,y,b,S){if(y.length!==0){const R=[],x=[];Rt.flattenJSON(y,R,x,b),R.length!==0&&S.push(new g(v,R,x))}},i=[],r=e.name||"default",o=e.fps||30,l=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let g=0;g<h.length;g++){const v=h[g].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const y={};let b;for(b=0;b<v.length;b++)if(v[b].morphTargets)for(let S=0;S<v[b].morphTargets.length;S++)y[v[b].morphTargets[S]]=-1;for(const S in y){const R=[],x=[];for(let _=0;_!==v[b].morphTargets.length;++_){const B=v[b];R.push(B.time),x.push(B.morphTarget===S?1:0)}i.push(new fa(".morphTargetInfluence["+S+"]",R,x))}u=y.length*(o||1)}else{const y=".bones["+t[g].name+"]";n(da,y+".position",v,"pos",i),n(as,y+".quaternion",v,"rot",i),n(da,y+".scale",v,"scl",i)}}return i.length===0?null:new this(r,u,i,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function $x(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fa;case"vector":case"vector2":case"vector3":case"vector4":return da;case"color":return Ou;case"quaternion":return as;case"bool":case"boolean":return xr;case"string":return yr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Qx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=$x(s.type);if(s.times===void 0){const t=[],n=[];Rt.flattenJSON(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const _r={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Kx{constructor(e,t,n){const i=this;let r=!1,o=0,l=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){l++,r===!1&&i.onStart!==void 0&&i.onStart(p,o,l),r=!0},this.itemEnd=function(p){o++,i.onProgress!==void 0&&i.onProgress(p,o,l),o===l&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(p){i.onError!==void 0&&i.onError(p)},this.resolveURL=function(p){return u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,g){return h.push(p,g),this},this.removeHandler=function(p){const g=h.indexOf(p);return g!==-1&&h.splice(g,2),this},this.getHandler=function(p){for(let g=0,v=h.length;g<v;g+=2){const y=h[g],b=h[g+1];if(y.global&&(y.lastIndex=0),y.test(p))return b}return null}}}const ey=new Kx;class vi{constructor(e){this.manager=e!==void 0?e:ey,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Jn={};class ty extends vi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=_r.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Jn[e]!==void 0){Jn[e].push({onLoad:t,onProgress:n,onError:i});return}Jn[e]=[],Jn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(o).then(l=>{if(l.status===200||l.status===0){l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received.");const u=Jn[e],h=l.body.getReader(),p=l.headers.get("Content-Length"),g=p?parseInt(p):0,v=g!==0;let y=0;return new ReadableStream({start(b){S();function S(){h.read().then(({done:R,value:x})=>{if(R)b.close();else{y+=x.byteLength;const _=new ProgressEvent("progress",{lengthComputable:v,loaded:y,total:g});for(let B=0,L=u.length;B<L;B++){const O=u[B];O.onProgress&&O.onProgress(_)}b.enqueue(x),S()}})}}})}else throw Error(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`)}).then(l=>{const u=new Response(l);switch(this.responseType){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,this.mimeType));case"json":return u.json();default:return u.text()}}).then(l=>{_r.add(e,l);const u=Jn[e];delete Jn[e];for(let h=0,p=u.length;h<p;h++){const g=u[h];g.onLoad&&g.onLoad(l)}this.manager.itemEnd(e)}).catch(l=>{const u=Jn[e];delete Jn[e];for(let h=0,p=u.length;h<p;h++){const g=u[h];g.onError&&g.onError(l)}this.manager.itemError(e),this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ku extends vi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=_r.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const l=Rs("img");function u(){p(),_r.add(e,this),t&&t(this),r.manager.itemEnd(e)}function h(g){p(),i&&i(g),r.manager.itemError(e),r.manager.itemEnd(e)}function p(){l.removeEventListener("load",u,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",u,!1),l.addEventListener("error",h,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),r.manager.itemStart(e),l.src=e,l}}class ny extends vi{constructor(e){super(e)}load(e,t,n,i){const r=new Xs,o=new ku(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let l=0;function u(h){o.load(e[h],function(p){r.images[h]=p,l++,l===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let h=0;h<e.length;++h)u(h);return r}}class iy extends vi{constructor(e){super(e)}load(e,t,n,i){const r=new Xt,o=new ku(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class On extends mt{constructor(e,t=1){super();this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}On.prototype.isLight=!0;class ry extends On{constructor(e,t,n){super(e,n);this.type="HemisphereLight",this.position.copy(mt.DefaultUp),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e){return On.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}ry.prototype.isHemisphereLight=!0;const Hu=new Qe,Gu=new z,Vu=new z;class Jo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gu),Vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vu),t.updateMatrixWorld(),Hu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wu extends Jo{constructor(){super(new ln(50,1,.5,500));this.focus=1}updateMatrices(e){const t=this.camera,n=Ya*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Wu.prototype.isSpotLightShadow=!0;class sy extends On{constructor(e,t,n=0,i=Math.PI/3,r=0,o=1){super(e,t);this.type="SpotLight",this.position.copy(mt.DefaultUp),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.shadow=new Wu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}sy.prototype.isSpotLight=!0;const qu=new Qe,os=new z,$o=new z;class ju extends Jo{constructor(){super(new ln(90,1,.5,500));this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),os.setFromMatrixPosition(e.matrixWorld),n.position.copy(os),$o.copy(n.position),$o.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($o),n.updateMatrixWorld(),i.makeTranslation(-os.x,-os.y,-os.z),qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qu)}}ju.prototype.isPointLightShadow=!0;class ay extends On{constructor(e,t,n=0,i=1){super(e,t);this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ju}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}ay.prototype.isPointLight=!0;class Xu extends Jo{constructor(){super(new So(-5,5,5,-5,.5,500))}}Xu.prototype.isDirectionalLightShadow=!0;class oy extends On{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(mt.DefaultUp),this.updateMatrix(),this.target=new mt,this.shadow=new Xu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}oy.prototype.isDirectionalLight=!0;class ly extends On{constructor(e,t){super(e,t);this.type="AmbientLight"}}ly.prototype.isAmbientLight=!0;class cy extends On{constructor(e,t,n=10,i=10){super(e,t);this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}cy.prototype.isRectAreaLight=!0;class Yu{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new z)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}Yu.prototype.isSphericalHarmonics3=!0;class Qo extends On{constructor(e=new Yu,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Qo.prototype.isLightProbe=!0;class uy{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class hy extends Lt{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}hy.prototype.isInstancedBufferGeometry=!0;class fy extends vi{constructor(e){super(e);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=_r.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader,fetch(e,l).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){_r.add(e,u),t&&t(u),r.manager.itemEnd(e)}).catch(function(u){i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}fy.prototype.isImageBitmapLoader=!0;let pa;const dy={getContext:function(){return pa===void 0&&(pa=new(window.AudioContext||window.webkitAudioContext)),pa},setContext:function(s){pa=s}};class py extends vi{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new ty(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const u=l.slice(0);dy.getContext().decodeAudioData(u,function(p){t(p)})}catch(u){i?i(u):console.error(u),r.manager.itemError(e)}},n,i)}}class my extends Qo{constructor(e,t,n=1){super(void 0,n);const i=new Ge().set(e),r=new Ge().set(t),o=new z(i.r,i.g,i.b),l=new z(r.r,r.g,r.b),u=Math.sqrt(Math.PI),h=u*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(l).multiplyScalar(u),this.sh.coefficients[1].copy(o).sub(l).multiplyScalar(h)}}my.prototype.isHemisphereLightProbe=!0;class gy extends Qo{constructor(e,t=1){super(void 0,t);const n=new Ge().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}gy.prototype.isAmbientLightProbe=!0;class vy extends mt{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class xy{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let l=0;l!==i;++l)n[r+l]=n[l];o=t}else{o+=t;const l=t/o;this._mixBufferRegion(n,r,0,l,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,l=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const u=t*this._origIndex;this._mixBufferRegion(n,i,u,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let u=t,h=t+t;u!==h;++u)if(n[u]!==n[u+t]){l.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){an.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;an.multiplyQuaternionsFlat(e,o,e,t,e,n),an.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let l=0;l!==r;++l){const u=t+l;e[u]=e[u]*o+e[n+l]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]+e[n+o]*i}}}const Ko="\\[\\]\\.:\\/",yy=new RegExp("["+Ko+"]","g"),el="[^"+Ko+"]",_y="[^"+Ko.replace("\\.","")+"]",by=/((?:WC+[\/:])*)/.source.replace("WC",el),My=/(WCOD+)?/.source.replace("WCOD",_y),wy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",el),Sy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",el),Ty=new RegExp("^"+by+My+wy+Sy+"$"),Ey=["material","materials","bones"];class Ay{constructor(e,t,n){const i=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class gt{constructor(e,t,n){this.path=t,this.parsedPath=n||gt.parseTrackName(t),this.node=gt.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new gt.Composite(e,t,n):new gt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yy,"")}static parseTrackName(e){const t=Ty.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Ey.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const l=r[o];if(l.name===t||l.uuid===t)return l;const u=n(l.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=gt.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===h){h=p;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const o=e[i];if(o===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}gt.Composite=Ay;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Cy{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,l=new Array(o),u={endingStart:Hi,endingEnd:Hi};for(let h=0;h!==o;++h){const p=r[h].createInterpolant(null);l[h]=p,p.settings=u}this._interpolantSettings=u,this._interpolants=l,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=od,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,l=i/r;e.warp(1,o,t),this.warp(l,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let l=this._timeScaleInterpolant;l===null&&(l=i._lendControlInterpolant(),this._timeScaleInterpolant=l);const u=l.parameterPositions,h=l.sampleValues;return u[0]=r,u[1]=r+n,h[0]=e/o,h[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const u=(e-r)*n;if(u<0||n===0)return;this._startTime=null,t=n*u}t*=this._updateTimeScale(e);const o=this._updateTime(t),l=this._updateWeight(e);if(l>0){const u=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case $l:for(let p=0,g=u.length;p!==g;++p)u[p].evaluate(o),h[p].accumulateAdditive(l);break;case Va:default:for(let p=0,g=u.length;p!==g;++p)u[p].evaluate(o),h[p].accumulate(i,l)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===ld;if(e===0)return r===-1?i:o&&(r&1)==1?t-i:i;if(n===ad){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const l=Math.floor(i/t);i-=t*l,r+=Math.abs(l);const u=this.repetitions-r;if(u<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(u===1){const h=e<0;this._setEndings(h,!h,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:l})}}else this.time=i;if(o&&(r&1)==1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Gi,i.endingEnd=Gi):(e?i.endingStart=this.zeroSlopeAtStart?Gi:Hi:i.endingStart=Cs,t?i.endingEnd=this.zeroSlopeAtEnd?Gi:Hi:i.endingEnd=Cs)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const l=o.parameterPositions,u=o.sampleValues;return l[0]=r,u[0]=t,l[1]=r+e,u[1]=n,this}}class Ly extends Ci{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,l=e._interpolants,u=n.uuid,h=this._bindingsByRootAndName;let p=h[u];p===void 0&&(p={},h[u]=p);for(let g=0;g!==r;++g){const v=i[g],y=v.name;let b=p[y];if(b!==void 0)o[g]=b;else{if(b=o[g],b!==void 0){b._cacheIndex===null&&(++b.referenceCount,this._addInactiveBinding(b,u,y));continue}const S=t&&t._propertyBindings[g].binding.parsedPath;b=new xy(gt.create(n,y,S),v.ValueTypeName,v.getValueSize()),++b.referenceCount,this._addInactiveBinding(b,u,y),o[g]=b}l[g].resultBuffer=b.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++==0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount==0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const l=o.knownActions;e._byClipCacheIndex=l.length,l.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,l=o[r],u=l.knownActions,h=u[u.length-1],p=e._byClipCacheIndex;h._byClipCacheIndex=p,u[p]=h,u.pop(),e._byClipCacheIndex=null;const g=l.actionByRoot,v=(e._localRoot||this._root).uuid;delete g[v],u.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount==0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,l=o[i],u=t[t.length-1],h=e._cacheIndex;u._cacheIndex=h,t[h]=u,t.pop(),delete l[r],Object.keys(l).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new zu(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?Uu.findByName(i,e):e;const l=o!==null?o.uuid:e,u=this._actionsByClip[l];let h=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Va),u!==void 0){const g=u.actionByRoot[r];if(g!==void 0&&g.blendMode===n)return g;h=u.knownActions[0],o===null&&(o=h._clip)}if(o===null)return null;const p=new Cy(this,o,t,n);return this._bindAction(p,h),this._addInactiveAction(p,l,r),p}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Uu.findByName(n,e):e,o=r?r.uuid:e,l=this._actionsByClip[o];return l!==void 0&&l.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,r,o);const l=this._bindings,u=this._nActiveBindings;for(let h=0;h!==u;++h)l[h].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let l=0,u=o.length;l!==u;++l){const h=o[l];this._deactivateAction(h);const p=h._cacheIndex,g=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,g._cacheIndex=p,t[p]=g,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const l=n[o].actionByRoot,u=l[t];u!==void 0&&(this._deactivateAction(u),this._removeInactiveAction(u))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const l=r[o];l.restoreOriginalState(),this._removeInactiveBinding(l)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}Ly.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class Ry extends Xr{constructor(e,t,n=1){super(e,t);this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}Ry.prototype.isInstancedInterleavedBuffer=!0;const xi=new z,ma=new Qe,tl=new Qe;class Py extends zo{constructor(e){const t=Zu(e),n=new Lt,i=[],r=[],o=new Ge(0,0,1),l=new Ge(0,1,0);for(let h=0;h<t.length;h++){const p=t[h];p.parent&&p.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(l.r,l.g,l.b))}n.setAttribute("position",new Vt(i,3)),n.setAttribute("color",new Vt(r,3));const u=new Kr({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,u);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");tl.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<t.length;r++){const l=t[r];l.parent&&l.parent.isBone&&(ma.multiplyMatrices(tl,l.matrixWorld),xi.setFromMatrixPosition(ma),i.setXYZ(o,xi.x,xi.y,xi.z),ma.multiplyMatrices(tl,l.parent.matrixWorld),xi.setFromMatrixPosition(ma),i.setXYZ(o+1,xi.x,xi.y,xi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Zu(s){const e=[];s&&s.isBone&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,Zu(s.children[t]));return e}class Dy extends zo{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ge(n),i=new Ge(i);const r=t/2,o=e/t,l=e/2,u=[],h=[];for(let v=0,y=0,b=-l;v<=t;v++,b+=o){u.push(-l,0,b,l,0,b),u.push(b,0,-l,b,0,l);const S=v===r?n:i;S.toArray(h,y),y+=3,S.toArray(h,y),y+=3,S.toArray(h,y),y+=3,S.toArray(h,y),y+=3}const p=new Lt;p.setAttribute("position",new Vt(u,3)),p.setAttribute("color",new Vt(h,3));const g=new Kr({vertexColors:!0,toneMapped:!1});super(p,g);this.type="GridHelper"}}const Iy=new Float32Array(1);new Int32Array(Iy.buffer);_n.create=function(s,e){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(_n.prototype),s.prototype.constructor=s,s.prototype.getPoint=e,s};jo.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)};Dy.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Py.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};vi.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),uy.extractUrlBase(s)};vi.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};En.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)};En.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};En.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};En.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};En.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)};Zi.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Zs.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)};jt.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};jt.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};jt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};jt.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};jt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};jt.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};Qe.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)};Qe.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};Qe.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new z().setFromMatrixColumn(this,3)};Qe.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)};Qe.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Qe.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};Qe.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};Qe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Qe.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)};Qe.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};Qe.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Qe.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Qe.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Qe.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Qe.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Qe.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};Qe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Qe.prototype.makeFrustum=function(s,e,t,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,e,n,t,i,r)};Qe.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};Zn.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)};an.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)};an.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Ji.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};Ji.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)};Ji.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};Bt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};Bt.prototype.barycoordFromPoint=function(s,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,e)};Bt.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)};Bt.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)};Bt.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)};Bt.barycoordFromPoint=function(s,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Bt.getBarycoord(s,e,t,n,i)};Bt.normal=function(s,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Bt.getNormal(s,e,t,n)};ns.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)};ns.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new vr(this,s)};ns.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Zo(this,s)};ve.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};ve.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};ve.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};z.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};z.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};z.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)};z.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)};z.prototype.getColumnFromMatrix=function(s,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,s)};z.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)};z.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};z.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};z.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Mt.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};Mt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};mt.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)};mt.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};mt.prototype.translate=function(s,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,s)};mt.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};mt.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(mt.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});on.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(on.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),cd},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});du.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};ln.prototype.setLens=function(s,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(s)};Object.defineProperties(On.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}});Object.defineProperties(Ht.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Ls},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Ls)}}});Ht.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Ls:Or),this};Ht.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Ht.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Lt.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)};Lt.prototype.addAttribute=function(s,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new Ht(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(s,e)};Lt.prototype.addDrawCall=function(s,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,e)};Lt.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Lt.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Lt.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)};Lt.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Lt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Xr.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Ls:Or),this};Xr.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};vr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};vr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};vr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};ru.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(Jt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Ge}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===Rl}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Pi.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}});xt.prototype.clearTarget=function(s,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(e,t,n)};xt.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)};xt.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};xt.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};xt.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};xt.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};xt.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};xt.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};xt.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};xt.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};xt.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};xt.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};xt.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};xt.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};xt.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)};xt.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};xt.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};xt.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};xt.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};xt.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};xt.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};xt.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};xt.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};xt.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};xt.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(xt.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?Ai:Zt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(nu.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Nn.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}});vy.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new py().load(s,function(n){e.setBuffer(n)}),this};bo.prototype.updateCubeMap=function(s,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,e)};bo.prototype.clear=function(s,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,e,t,n)};qi.crossOrigin=void 0;qi.loadTexture=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new iy;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};qi.loadTextureCube=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new ny;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};qi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};qi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Al}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Al);export{Fy as $,Vr as B,Ge as C,on as M,ln as P,ru as S,xt as W,fo as a,By as t};
