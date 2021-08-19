const t=t=>[].concat(...t),e=t=>"object"==typeof t&&!Array.isArray(t)&&"function"!=typeof t,i=t=>{for(let e in t)return!1;return!0},s=(t,e)=>{let i,s,a=Object.keys(t),n={};for(let r=0,o=a.length;r<o;r++)i=a[r],s=t[i],n[i]=e(s,i,t);return n},a=t=>""+t,n=t=>{let e=parseFloat(t);return a(t).replace(a(e),"")},r=t=>a(t).trim(),o=t=>Array.isArray(t)||"string"==typeof t?("string"==typeof t&&(t=t.split(/\s+/)),t):[t],l=t=>Array.isArray(t)||"string"==typeof t?Boolean(t.length):null!=t&&null!=t&&!Number.isNaN(t),u=t=>"-"==(t=t.replace(/([A-Z])/g,(t=>`-${t.toLowerCase()}`))).charAt(0)?t.substr(1):t,h=t=>t.includes("--")?t:`${t}`.replace(/-([a-z])/g,((t,e)=>e.toUpperCase())),c=(t,e)=>{let i=[...t],s={...e};for(;i.length;){let{[i.pop()]:t,...e}=s;s=e}return s},m=(t,e)=>{let i=[...t],s={};for(let t of i)l(e[t])&&(s[t]=e[t]);return s},p=(...t)=>{let e=0,i=[],s=(t=t.map((t=>{let i=o(t),s=i.length;return s>e&&(e=s),i}))).length;for(let a=0;a<e;a++){i[a]=[];for(let e=0;e<s;e++){let s=t[e][a];l(s)&&(i[a][e]=s)}}return i},f=t=>"string"==typeof t?t.includes("%")?parseFloat(t)/100:"from"==t?0:"to"==t?1:parseFloat(t):t,d=t=>{let e=new Set,i=Object.keys(t),s=i.length;for(let a=0;a<s;a++){let s=""+i[a],n=t[s],r=s.split(","),o=r.length;for(let t=0;t<o;t++){let i=f(r[t]);e.add({...n,offset:i})}}return[...e].sort(((t,e)=>t.offset-e.offset))},g={};class y{constructor(t){this.map=new Map(t)}getMap(){return this.map}get(t){return this.map.get(t)}keys(){return Array.from(this.map.keys())}values(){return Array.from(this.map.values())}set(t,e){return this.map.set(t,e),this}add(t){let e=this.size;return this.set(e,t),this}get size(){return this.map.size}get length(){return this.map.size}last(t=1){let e=this.keys()[this.size-t];return this.get(e)}delete(t){return this.map.delete(t)}remove(t){return this.map.delete(t),this}clear(){return this.map.clear(),this}has(t){return this.map.has(t)}entries(){return this.map.entries()}forEach(t,e){return this.map.forEach(t,e),this}[Symbol.iterator](){return this.entries()}}const b=(t="")=>e=>"string"==typeof e?e:`${e}${t}`,E=b(),S=b("px"),O=b("deg"),A=t=>e=>l(e)?o(e).map((e=>{if("number"!=typeof e&&"string"!=typeof e)return e;let i=Number(e),s=Number.isNaN(i)?"string"==typeof e?e.trim():e:i;return t(s)})):[],k=(t,e)=>o(t).map(A(e)),w=A(E),D=A(S),x=A(O),I=new y,C=(t="transparent")=>{if(t=t.trim(),I.has(t))return I.get(t);if(!CSS.supports("background-color",t))return t;let e=document.createElement("div");e.style.backgroundColor=t,document.body.appendChild(e);let{backgroundColor:i}=getComputedStyle(e);e.remove();let s=/\(([^)]+)\)?/.exec(i)?.[1].split(","),a=(3==s.length?[...s,"1"]:s).map((t=>parseFloat(t)));return I.set(t,a),a},P={translate3d:["--translate3d0","--translate3d1","--translate3d2"],translate:["--translate0","--translate1"],translateX:"--translateX",translateY:"--translateY",translateZ:"--translateZ",rotate3d:["--rotate3d0","--rotate3d1","--rotate3d2","--rotate3d3"],rotate:"--rotate",rotateX:"--rotateX",rotateY:"--rotateY",rotateZ:"--rotateZ",scale3d:["--scale3d0","--scale3d1","--scale3d2"],scale:["--scale0","--scale1"],scaleX:"--scaleX",scaleY:"--scaleY",scaleZ:"--scaleZ",skew:["--skew0","--skew1"],skewX:"--skewX",skewY:"--skewY",perspective:"--perspective"},M="registerProperty"in CSS,T=Object.keys(P),v=(t={})=>Object.keys(t).filter((t=>T.includes(t))).map((t=>{if(!M)return"";let e=[].concat(P[t]);return e.forEach((t=>{if(globalThis.RegisteredCSSVars?.[t])return;let e={name:t,inherits:!1};/translate|perspective/i.test(t)?CSS.registerProperty({...e,syntax:"<length-percentage>",initialValue:"0px"}):/rotate3d3|skew/i.test(t)?CSS.registerProperty({...e,syntax:"<angle>",initialValue:"0deg"}):/scale|rotate3d/i.test(t)?CSS.registerProperty({...e,syntax:"<number>",initialValue:/rotate3d/i.test(t)?0:1}):/rotate/i.test(t)&&CSS.registerProperty({...e,syntax:"<angle>",initialValue:"0deg"}),globalThis.RegisteredCSSVars??={},globalThis.RegisteredCSSVars[t]=!0})),`${t}(${e.map((t=>`var(${t})`))})`})).join(" "),N=(t={})=>{let e={};return T.forEach((i=>{if(!(i in t))return;let s=[].concat(t[i]).filter((t=>l(t))).map((t=>"string"==typeof t&&/\s/.test(t.trim())?t.split(/\s+/):t));if(0==s.length)return;let a=[].concat(P[i]),n=s.every((t=>Array.isArray(t))),r=1==s.length&&"scale"==i;a.forEach(((t,i)=>{let a=r?0:i,o=n?p(...s)[a]:s;if(l(o)){let i=t;/translate|perspective/i.test(i)?o=D(o):/rotate3d3|skew/i.test(i)?o=x(o):/scale|rotate3d/i.test(i)||/rotate/i.test(i)&&(o=x(o)),e[t]=o}}))})),e},F="function"==typeof Float32Array,j=(t,e)=>1-3*e+3*t,z=(t,e)=>3*e-6*t,R=t=>3*t,q=(t,e,i)=>((j(e,i)*t+z(e,i))*t+R(e))*t,L=(t,e,i)=>3*j(e,i)*t*t+2*z(e,i)*t+R(e),_=(t,e,i,s)=>{if(!(0<=t&&t<=1&&0<=i&&i<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&i===s)return t=>t;for(var a=F?new Float32Array(11):new Array(11),n=0;n<11;++n)a[n]=q(.1*n,t,i);const r=e=>{let s=0,n=1;for(;10!==n&&a[n]<=e;++n)s+=.1;--n;let r=s+.1*((e-a[n])/(a[n+1]-a[n])),o=L(r,t,i);return o>=.001?((t,e,i,s)=>{for(var a=0;a<4;++a){let a=L(e,i,s);if(0===a)return e;e-=(q(e,i,s)-t)/a}return e})(e,r,t,i):0===o?r:((t,e,i,s,a)=>{let n,r,o=0;do{r=e+(i-e)/2,n=q(r,s,a)-t,n>0?i=r:e=r}while(Math.abs(n)>1e-7&&++o<10);return r})(e,s,s+.1,t,i)};return t=>0===t||1===t?t:q(r(t),e,s)},V=(t,e,i)=>Math.min(Math.max(t,e),i),U=t=>Math.pow(t,2),X=t=>Math.pow(t,3),Y=t=>Math.pow(t,4),K=t=>Math.pow(t,5),G=t=>Math.pow(t,6),Z=t=>1-Math.cos(t*Math.PI/2),$=t=>1-Math.sqrt(1-t*t),B=t=>t*t*(3*t-2),W=t=>{let e,i=4;for(;t<((e=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)},H=(t,e=[])=>{let[i=1,s=.5]=e;const a=V(i,1,10),n=V(s,.1,2);return 0===t||1===t?t:-a*Math.pow(2,10*(t-1))*Math.sin((t-1-n/(2*Math.PI)*Math.asin(1/a))*(2*Math.PI)/n)},Q=(t,e=[],i)=>{let[s=1,a=100,n=10,r=0]=e;s=V(s,.1,1e3),a=V(a,.1,1e3),n=V(n,.1,1e3),r=V(r,.1,1e3);const o=Math.sqrt(a/s),l=n/(2*Math.sqrt(a*s)),u=l<1?o*Math.sqrt(1-l*l):0,h=l<1?(l*o-r)/u:-r+o;let c=i?i*t/1e3:t;return c=l<1?Math.exp(-c*l*o)*(1*Math.cos(u*c)+h*Math.sin(u*c)):(1+h*c)*Math.exp(-c*o),0===t||1===t?t:1-c},J=new Map,tt=1e4,et=(t="spring")=>{if(J.has(t))return J.get(t);const e="function"==typeof t?t:pt(t),i="function"==typeof t?[]:ft(t),s=1/6;let a=0,n=0,r=0;for(;++r<1e4;)if(a+=s,1===e(a,i,null)){if(n++,n>=16)break}else n=0;const o=a*s*1e3;return J.set(t,o),o},it=(t,e=[])=>{let[i=10,s]=e;return("start"==s?Math.ceil:Math.floor)(V(t,0,1)*i)/i},st=(t,e=[])=>{let[i,s,a,n]=e;return _(i,s,a,n)(t)},at=_(.42,0,1,1),nt=t=>(e,i=[],s)=>1-t(1-e,i,s),rt=t=>(e,i=[],s)=>e<.5?t(2*e,i,s)/2:1-t(-2*e+2,i,s)/2,ot=t=>(e,i=[],s)=>e<.5?(1-t(1-2*e,i,s))/2:(t(2*e-1,i,s)+1)/2,lt={steps:it,"step-start":t=>it(t,[1,"start"]),"step-end":t=>it(t,[1,"end"]),linear:t=>t,"cubic-bezier":st,ease:t=>st(t,[.25,.1,.25,1]),in:at,out:nt(at),"in-out":rt(at),"out-in":ot(at),"in-quad":U,"out-quad":nt(U),"in-out-quad":rt(U),"out-in-quad":ot(U),"in-cubic":X,"out-cubic":nt(X),"in-out-cubic":rt(X),"out-in-cubic":ot(X),"in-quart":Y,"out-quart":nt(Y),"in-out-quart":rt(Y),"out-in-quart":ot(Y),"in-quint":K,"out-quint":nt(K),"in-out-quint":rt(K),"out-in-quint":ot(K),"in-expo":G,"out-expo":nt(G),"in-out-expo":rt(G),"out-in-expo":ot(G),"in-sine":Z,"out-sine":nt(Z),"in-out-sine":rt(Z),"out-in-sine":ot(Z),"in-circ":$,"out-circ":nt($),"in-out-circ":rt($),"out-in-circ":ot($),"in-back":B,"out-back":nt(B),"in-out-back":rt(B),"out-in-back":ot(B),"in-bounce":W,"out-bounce":nt(W),"in-out-bounce":rt(W),"out-in-bounce":ot(W),"in-elastic":H,"out-elastic":nt(H),"in-out-elastic":rt(H),"out-in-elastic":ot(H),spring:Q,"spring-in":Q,"spring-out":nt(Q),"spring-in-out":rt(Q),"spring-out-in":ot(Q)};let ut=Object.keys(lt);const ht=(t,e)=>{Object.assign(lt,{[t]:e}),ut=Object.keys(lt)},ct=(...t)=>{Object.assign(lt,...t),ut=Object.keys(lt)},mt=t=>u(t).replace(/^ease-/,"").replace(/(\(|\s).+/,"").toLowerCase().trim(),pt=t=>{let e=mt(a(t));return ut.includes(e)?lt[e]:null},ft=t=>{const e=/(\(|\s)([^)]+)\)?/.exec(a(t));return e?e[2].split(",").map((t=>{let e=parseFloat(t);return Number.isNaN(e)?t.trim():e})):[]},dt=(t,e,i)=>e+(i-e)*t,gt=(t,e)=>Math.round(t*10**e)/10**e,yt=(t,e,i=3)=>{let s=e.length-1,a=V(Math.floor(t*s),0,s-1),n=e[a],r=e[a+1];return gt(dt((t-a/s)*s,n,r),i)},bt=t=>{let e=parseFloat(t);return"number"==typeof e&&!Number.isNaN(e)},Et=(t,e)=>{t=V(t,0,1);let i=e.length-1;return e[Math.round(t*i)]},St=(t,e,i=3)=>{let s="";return bt(e[0])&&(s=n(e[0])),yt(t,e.map((t=>"number"==typeof t?t:parseFloat(t))),i)+s},Ot=(t,e,i=3)=>p(...e.map((t=>C(t)))).map(((e,s)=>{let a=yt(t,e);return s<3?Math.round(a):gt(a,i)})),At=t=>r(t).replace(/(\d|\)|\w)\s/g,(t=>t[0]+"__")).split("__").map(r).filter(l),kt=(t,e,i=3)=>e.every((t=>"number"==typeof t))?yt(t,e,i):e.every((t=>CSS.supports("color",a(t))))?`rgba(${Ot(t,e,i)})`:e.some((t=>"string"==typeof t))?e.some((t=>/(\d|\)|\w)\s/.test(r(t))))?p(...e.map(At)).map((e=>kt(t,e,i))).join(" "):e.every((t=>bt(t)))?St(t,e,i):Et(t,e):void 0,wt=(t={})=>{let e="string"==typeof t||"function"==typeof t,{easing:i="spring(1, 100, 10, 0)",numPoints:s=100,decimal:a=3,duration:n}=e?{easing:t}:t;return{easing:i,numPoints:s,decimal:a,duration:n}},Dt=new Map,xt=({easing:t,numPoints:e,duration:i}={})=>{const s=[],a=`${t}${e}`;if(Dt.has(a))return Dt.get(a);const n="function"==typeof t?t:pt(t),r="function"==typeof t?[]:ft(t);for(let t=0;t<e;t++)s[t]=n(t/(e-1),r,i);return Dt.set(a,s),s},It=(t={})=>{if("string"==typeof t.easing){let e=mt(t.easing);/(spring|spring-in)$/i.test(e)&&(t.duration=et(t.easing))}},Ct=(t,e={})=>{let i=wt(e);return It(i),xt(i).map((e=>kt(e,t,i.decimal)))},Pt=(t,e={})=>{let i=wt(e),{duration:s}=i;return It(i),[Ct(t,i),l(s)?s:i.duration]},Mt=(t={})=>{let{easing:e,numPoints:i,decimal:a,duration:n,...r}=t,o={easing:e,numPoints:i,decimal:a,duration:n};It(o);let u=s(r,(t=>Ct(t,o))),h={};return l(n)?h={duration:n}:l(o.duration)&&(h={duration:o.duration}),Object.assign({},u,h)},Tt={translate:t=>k(t,S),translate3d:t=>k(t,S),translateX:t=>D(t),translateY:t=>D(t),translateZ:t=>D(t),rotate:t=>k(t,O),rotate3d:t=>k(t,E),rotateX:t=>x(t),rotateY:t=>x(t),rotateZ:t=>x(t),scale:t=>k(t,E),scale3d:t=>k(t,E),scaleX:t=>w(t),scaleY:t=>w(t),scaleZ:t=>w(t),skew:t=>k(t,O),skewX:t=>x(t),skewY:t=>x(t),perspective:t=>D(t)},vt=Object.keys(Tt),Nt=t=>{let e,i,s=Object.keys(t),a={};for(let n=0,r=s.length;n<r;n++)e=h(s[n]),i=t[s[n]],a[e]=i;return a},Ft=(t,e)=>{let i="",s=t.length;for(let a=0;a<s;a++){let s=t[a],n=e[a];l(n)&&(i+=`${s}(${Array.isArray(n)?n.join(", "):n}) `)}return i.trim()},jt=["margin","padding","size","width","height","left","right","top","bottom","radius","gap","basis","inset","outline-offset","translate","perspective","thickness","position","distance","spacing"].map(h).join("|"),zt=(t,e)=>(e=e??Math.max(...t.map((t=>t.length))),t.map((t=>{let i=t.length;return t.every((t=>Array.isArray(t)))?p(...zt(p(...t),e)):i!==e?Array.from(Array(e),((s,a)=>{let n=1==i?Array(2).fill(t[0]):t;return St(a/(e-1),n)})):t}))),Rt=t=>{let e,i,n=Nt(t);if(M)e=Object.assign({},N(n),c(T,n));else{let t=Object.keys(n).filter((t=>vt.includes(t))),s=t.map((t=>Tt[t](n[t])));s=zt(s),i=p(...s).filter(l).map((e=>Ft(t,e))),e=c(vt,n)}return e=s(e,((t,e)=>{let i;if(!/color|shadow/i.test(e)){let s=/rotate/i.test(e),a=new RegExp(jt,"i").test(e)||CSS.supports(u(e),"1px");if(s||a)return s?i=x:a&&(i=D),i(t).map((t=>{let e=r(t).split(/\s+/);return i(e).join(" ")}))}return[].concat(t).map(a)})),Object.assign({},l(i)?{transform:i}:null,e)},qt=t=>t.map((t=>{let e=Nt(t);if(M)return{rest:Object.assign({},N(e),c(T,e)),transformFunctions:null};let{translate:i,translate3d:s,translateX:a,translateY:n,translateZ:r,rotate:o,rotate3d:l,rotateX:u,rotateY:h,rotateZ:m,scale:p,scale3d:f,scaleX:d,scaleY:g,scaleZ:y,skew:b,skewX:E,skewY:S,perspective:O,...A}=e;return i=D(i),s=D(s),a=D(a)[0],n=D(n)[0],r=D(r)[0],o=x(o),l=w(l),u=x(u)[0],h=x(h)[0],m=x(m)[0],p=w(p),f=w(f),d=w(d)[0],g=w(g)[0],y=w(y)[0],b=x(b),E=x(E)[0],S=x(S)[0],O=D(O)[0],{rest:A,transformFunctions:[s,i,a,n,r,l,o,u,h,m,f,p,d,g,y,b,E,S,O]}})).map((({rest:t,transformFunctions:e})=>{let i=M?null:Ft(vt,e);return t=s(t,((t,e)=>{let i;if(t=a(t),!/color|shadow/i.test(e)){let s=/rotate/i.test(e),a=new RegExp(jt,"i").test(e);if(s||a)return s?i=x:a&&(i=D),i(t).join(" ")}return t})),Object.assign({},l(i)?{transform:i}:null,t)})),Lt=({callback:t=(()=>{}),scope:e=null,name:i="event"})=>({callback:t,scope:e,name:i});class _t extends y{constructor(t="event"){super(),this.name=t}}const Vt=t=>"object"==typeof t&&!Array.isArray(t)&&"function"!=typeof t;class Ut extends y{constructor(){super()}getEvent(t){let e=this.get(t);return e instanceof _t?e:(this.set(t,new _t(t)),this.get(t))}newListener(t,e,i){let s=this.getEvent(t);return s.add(Lt({name:t,callback:e,scope:i})),s}on(t,e,i){if(null==t||null==t)return this;"string"==typeof t&&(t=t.trim().split(/\s+/));let s,a,n=Vt(t),r=n?e:i;return n||(a=e),Object.keys(t).forEach((e=>{s=n?e:t[e],n&&(a=t[e]),this.newListener(s,a,r)}),this),this}removeListener(t,e,i){let s=this.get(t);if(s instanceof _t&&e){let a=Lt({name:t,callback:e,scope:i});s.forEach(((t,e)=>{if(t.callback===a.callback&&t.scope===a.scope)return s.remove(e)}))}return s}off(t,e,i){if(null==t||null==t)return this;"string"==typeof t&&(t=t.trim().split(/\s+/));let s,a,n=Vt(t),r=n?e:i;return n||(a=e),Object.keys(t).forEach((e=>{s=n?e:t[e],n&&(a=t[e]),"function"==typeof a?this.removeListener(s,a,r):this.remove(s)}),this),this}once(t,e,i){if(null==t||null==t)return this;"string"==typeof t&&(t=t.trim().split(/\s+/));let s=Vt(t);return Object.keys(t).forEach((a=>{let n=s?a:t[a],r=s?t[a]:e,o=s?e:i,l=(...t)=>{r.apply(o,t),this.removeListener(n,l,o)};this.newListener(n,l,o)}),this),this}emit(t,...e){return null==t||null==t||("string"==typeof t&&(t=t.trim().split(/\s+/)),t.forEach((t=>{let i=this.get(t);i instanceof _t&&i.forEach((t=>{let{callback:i,scope:s}=t;i.apply(s,e)}))}),this)),this}clear(){return((t,e,...i)=>{t.forEach((t=>{t[e](...i)}))})(this,"clear"),super.clear(),this}}const Xt=t=>"string"==typeof t?Array.from(document.querySelectorAll(t)):[t],Yt=e=>Array.isArray(e)?t(e.map(Yt)):"string"==typeof e||e instanceof Node?Xt(e):e instanceof NodeList||e instanceof HTMLCollection?Array.from(e):[],Kt=(t,e,i)=>"function"==typeof t?t.apply(i,e):t,Gt=(t,e,i)=>s(t,(t=>Kt(t,e,i))),Zt={in:"ease-in",out:"ease-out","in-out":"ease-in-out","in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","in-out-expo":"cubic-bezier(1, 0, 0, 1)","in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},$t=Object.keys(Zt),Bt=(t="ease")=>{let e=u(t).replace(/^ease-/,"");return $t.includes(e)?Zt[e]:t},Wt={keyframes:[],offset:[],loop:1,delay:0,speed:1,endDelay:0,easing:"ease",timelineOffset:0,autoplay:!0,duration:1e3,fillMode:"none",direction:"normal",padEndDelay:!1,timeline:document.timeline,extend:{}},Ht=t=>{let{options:e,...i}=t,s=e instanceof ie?e.options:Array.isArray(e)?e?.[0]?.options:e;return Object.assign({},s,i)},Qt=["easing","loop","endDelay","duration","speed","delay","timelineOffset","direction","extend","fillMode","composite"],Jt=["keyframes","padEndDelay","onfinish","oncancel","autoplay","target","targets","timeline"],te=[...Qt,...Jt],ee=class{constructor(t={}){this.options={},this.initialOptions={},this.properties={},this.totalDuration=0,this.totalDurationOptions={},this.maxDuration=0,this.minDelay=1/0,this.maxSpeed=1/0,this.maxEndDelay=0,this.timelineOffset=0,this.emitter=new Ut,this.targets=new y,this.targetIndexes=new WeakMap,this.keyframeEffects=new WeakMap,this.computedOptions=new WeakMap,this.animations=new WeakMap,this.computedKeyframes=new WeakMap,this.loop=this.loop.bind(this),this.onVisibilityChange=this.onVisibilityChange.bind(this),this.on("error",console.error),this.updateOptions(t),this.mainAnimation&&(this.visibilityPlayState=this.getPlayState(),ee.pauseOnPageHidden&&document.addEventListener("visibilitychange",this.onVisibilityChange,!1)),this.newPromise()}static requestFrame(t=0){let e=1e3/ee.FRAME_RATE,i=t-ee.FRAME_START_TIME;i>e&&(ee.FRAME_START_TIME=t-i%e,ee.RUNNING.forEach((t=>{t.emitter.getEvent("update").length<=0?t.stopLoop():t.loop()}))),ee.RUNNING.size>0?ee.animationFrame=window.requestAnimationFrame(ee.requestFrame):ee.cancelFrame()}static cancelFrame(){window.cancelAnimationFrame(ee.animationFrame),ee.animationFrame=null}loop(){this.emit("update",this.getProgress(),this)}stopLoop(){ee.RUNNING.delete(this)}onVisibilityChange(){document.hidden?(this.visibilityPlayState=this.getPlayState(),this.is("running")&&(this.loop(),this.pause())):"running"==this.visibilityPlayState&&this.is("paused")&&this.play()}newPromise(){return this.promise=new Promise(((t,e)=>{this.emitter?.once?.("finish",(()=>t([this]))),this.emitter?.once?.("error",(t=>e(t)))})),this.promise}then(t,e){return t=t?.bind(this),e=e?.bind(this),this.promise?.then?.(t,e),this}catch(t){return t=t?.bind(this),this.promise?.catch?.(t),this}finally(t){return t=t?.bind(this),this.promise?.finally?.(t),this}allAnimations(t){return this.targets.forEach((e=>{let i=this.keyframeEffects.get(e),s=this.animations.get(i);return t(s,e)})),this}all(t){return this.mainAnimation&&t(this.mainAnimation,this.mainElement),this.allAnimations(t),this}beginEvent(){0==this.getProgress()&&this.emit("begin",this)}play(){let t=this.getPlayState();return this.beginEvent(),this.all((t=>t.play())),this.emit("play",t,this),this.emit("playstate-change",t,this),this.loop(),ee.RUNNING.add(this),ee.requestFrame(),this}pause(){let t=this.getPlayState();return this.all((t=>t.pause())),this.emit("pause",t,this),this.emit("playstate-change",t,this),this.stopLoop(),this}reverse(){return this.all((t=>t.reverse())),this}reset(){return this.setProgress(0),this.options.autoplay?this.play():this.pause(),this}commitStyles(){return this.all((t=>t?.commitStyles())),this}persist(){return this.all((t=>t?.persist())),this}cancel(){return this.all((t=>t.cancel())),this}finish(){return this.all((t=>t.finish())),this}stop(){this.cancel(),this.stopLoop(),document.removeEventListener("visibilitychange",this.onVisibilityChange,!1),this.targets.forEach((t=>this.removeTarget(t))),this.emit("stop"),this.emitter.clear(),this.mainkeyframeEffect=null,this.mainAnimation=null,this.mainElement?.remove?.(),this.mainElement=null,this.promise=null,this.computedOptions=null,this.animations=null,this.keyframeEffects=null,this.emitter=null,this.targets=null,this.options=null,this.properties=null}getAnimation(t){let e=this.keyframeEffects.get(t);return this.animations.get(e)}getTiming(t){return{...this.computedOptions.get(t)??{},...this.keyframeEffects.get(t).getTiming?.()??{}}}getCurrentTime(){return this.mainAnimation.currentTime}getProgress(){return this.getCurrentTime()/this.totalDuration*100}getSpeed(){return this.mainAnimation.playbackRate}getPlayState(){return this.mainAnimation.playState}is(t){return this.getPlayState()==t}setCurrentTime(t){return this.all((e=>e.currentTime=t)),this.emit("update",this.getProgress()),this}setProgress(t){let e=t/100*this.totalDuration;return this.setCurrentTime(e),this}setSpeed(t=1){return this.maxSpeed=t,this.all((e=>{e.updatePlaybackRate?e.updatePlaybackRate(t):e.playbackRate=t})),this}createArrayOfComputedOptions(t,e){let i=[],s=t=>Object.assign({easing:t("easing"),iterations:t("loop"),direction:t("direction"),endDelay:t("endDelay"),duration:t("duration"),speed:t("speed"),delay:t("delay"),timelineOffset:t("timelineOffset"),keyframes:t("keyframes"),fill:t("fillMode"),composite:t("composite")},t("extend")??{});if(0==this.targets.size){let{delay:e,duration:i,iterations:a,endDelay:n,speed:r,timelineOffset:o}=s((e=>{let i=t[e]??this.options[e]??Wt[e];return"function"!=typeof i?i:Wt[e]}));o=Number(o),a=Number(a),i=Number(i),n=Number(n),r=Number(r),e=Number(e),this.timelineOffset=o,this.minDelay=e,this.maxSpeed=r,this.maxDuration=i,this.maxEndDelay=n,this.totalDuration=e+o+i*a+n,this.totalDurationOptions={delay:e,duration:i,iterations:a,endDelay:n,speed:r,timelineOffset:o,totalDuration:this.totalDuration}}return this.targets.forEach(((a,n)=>{let r=this.computedOptions.get(a)??{},o=s((e=>{let i=e;return"loop"==e&&(i="iterations"),"fillMode"==e&&(i="fill"),t[e]??r[i]??this.options[e]??Wt[e]})),l=Gt(o,[n,e,a],this);if("string"==typeof l.easing||Array.isArray(l.easing)){let{easing:t}=l;l.easing=Array.isArray(t)?t.map((t=>Bt(t))):Bt(t)}!0===l.iterations&&(l.iterations=1/0);let{timelineOffset:u,speed:h,endDelay:c,delay:m,duration:p,iterations:f,...d}=l;u=Number(u),f=Number(f),p=Number(p),c=Number(c),h=Number(h),m=Number(m),this.timelineOffset=u??this.timelineOffset,this.minDelay>m&&(this.minDelay=m),this.maxSpeed>h&&(this.maxSpeed=h),this.maxDuration<p&&(this.maxDuration=p),this.maxEndDelay<c&&(this.maxEndDelay=c);let g=m+u+p*f+c;this.totalDuration<g&&(this.totalDuration=g,this.totalDurationOptions={delay:m,duration:p,totalDuration:g,iterations:f,endDelay:c,speed:h,timelineOffset:u}),i[n]={...d,speed:h,tempDurations:g,endDelay:c,delay:m+u,duration:p,iterations:f,timelineOffset:u}}),this),i}createAnimations(t,i){let{arrOfComputedOptions:a,padEndDelay:n,oldCSSProperties:r,onfinish:o,oncancel:u,timeline:h}=t;this.targets.forEach(((t,m)=>{let p,{speed:g,keyframes:y,tempDurations:b,timelineOffset:E,...S}=a[m];n&&0==S.endDelay&&Math.abs(S.iterations)!=Math.abs(1/0)&&(S.endDelay=this.totalDuration-b);let O,A,k=y;e(k)&&(k=d(k));let w,D,x=this.computedKeyframes.get(t)??{},I="transform"in this.properties?x:c(["transform"],x),C=Object.assign({},r,I),T=s(C,((t,e)=>this.properties[e]??t));if(A=l(k)?k:T,Array.isArray(A))O=A.map((t=>{let{easing:e,offset:i,...s}=c(["speed","loop"],t);return Object.assign({},s,"string"==typeof e?{easing:Bt(e)}:null,"string"==typeof i||"number"==typeof i?{offset:f(i)}:null)})),p=v(P),O=qt(O);else{let e=c(["keyframes"],A),{offset:s,...a}=Gt(e,[m,i,t],this);p=v(Nt(a)),a=Rt(a);let n=s;O=Object.assign({},a,l(n)?{offset:n.map(f)}:null)}this.keyframeEffects.has(t)?(D=this.keyframeEffects.get(t),w=this.animations.get(D),D?.setKeyframes?.(O),D?.updateTiming?.(S)):(D=new KeyframeEffect(t,O,S),w=new Animation(D,h),this.keyframeEffects.set(t,D),this.animations.set(D,w)),w.updatePlaybackRate?w.updatePlaybackRate(g):w.playbackRate=g,w.onfinish=()=>{"function"==typeof o&&o.call(this,t,m,i,w)},w.oncancel=()=>{"function"==typeof u&&u.call(this,t,m,i,w)},M&&Object.assign(t.style,{transform:p}),this.computedOptions.set(t,S),this.computedKeyframes.set(t,O)}))}updateOptions(t={}){try{let e=Ht(t);this.initialOptions=e,this.options=Object.assign({},Wt,this.options,e);let{padEndDelay:i,autoplay:s,target:a,targets:n,timeline:r,onfinish:o,oncancel:l,...u}=c(Qt,this.options);this.properties=c(te,e);let h=this.targets.values(),m=[...new Set([...h,...Yt(n),...Yt(a)])];this.targets.clear(),m.forEach(((t,e)=>{this.targets.set(e,t),this.targetIndexes.set(t,e)}));let p=this.targets.size,f=this.createArrayOfComputedOptions(e,p);if(this.createAnimations({arrOfComputedOptions:f,padEndDelay:i,oldCSSProperties:u,onfinish:o,oncancel:l,timeline:r},p),this.mainAnimation?(this.mainkeyframeEffect?.updateTiming?.({duration:this.totalDuration}),(!this.mainkeyframeEffect.setKeyframes||!this.mainkeyframeEffect.updateTiming)&&console.warn("@okikio/animate - `KeyframeEffect.setKeyframes` and/or `KeyframeEffect.updateTiming` are not supported in this browser.")):(this.mainkeyframeEffect=new KeyframeEffect(this.mainElement,null,{duration:this.totalDuration}),this.mainAnimation=new Animation(this.mainkeyframeEffect,r)),this.mainAnimation.updatePlaybackRate?this.mainAnimation.updatePlaybackRate(this.maxSpeed):this.mainAnimation.playbackRate=this.maxSpeed,this.mainAnimation.onfinish=()=>{if(this.mainAnimation){let t=this.getPlayState();this.emit("playstate-change",t,this),this.loop(),this.stopLoop()}this.emit("finish",this)},this.mainAnimation.oncancel=()=>{if(this.mainAnimation){let t=this.getPlayState();this.emit("playstate-change",t,this),this.loop(),this.stopLoop()}this.emit("cancel",this)},s){let t=window.setTimeout((()=>{this.emit("begin",this);let e=this.getPlayState();this.emit("playstate-change",e,this),t=window.clearTimeout(t)}),0);this.play()}else this.pause()}catch(t){this.emit("error",t)}}add(t){let e=this.getProgress(),i=this.is("running"),s=this.is("paused");return this.updateOptions({target:t}),this.setProgress(e),i?this.play():s&&this.pause(),this}removeTarget(t){let e=this.keyframeEffects.get(t);this.animations.delete(e),e=null,this.computedKeyframes.delete(t),this.computedOptions.delete(t),this.keyframeEffects.delete(t);let i=this.targetIndexes.get(t);return this.targets.delete(i),this.targetIndexes.delete(t),this}remove(t){this.removeTarget(t);let e=new Set([].concat(this.targets.values()));this.options.target=[...e],this.options.targets=[],e.clear(),e=null;let i=this.getProgress(),s=this.is("running"),a=this.is("paused");return this.updateOptions(),s?this.play():a&&this.pause(),this.setProgress(i),this}on(t,e,i){return i=i??this,this.emitter?.on?.(t,e??i,i),this.emitter.getEvent("update").length>0&&(ee.RUNNING.add(this),null==ee.animationFrame&&ee.requestFrame()),this}off(t,e,i){return i=i??this,this.emitter?.off?.(t,e??i,i),this}emit(t,...e){return this.emitter?.emit?.(t,...e),this}toJSON(){return this.options}get[Symbol.toStringTag](){return"Animate"}};let ie=ee;ie.RUNNING=new Set,ie.FRAME_RATE=60,ie.FRAME_START_TIME=0,ie.pauseOnPageHidden=!0;const se=(t={})=>new ie(t);let ae=0;const ne=document.createElement("div"),re=()=>{l(ne.id)||(ne.id="empty-tween-el-container",ne.style.setProperty("display","none"),ne.style.setProperty("contain","paint layout size"),document.body.appendChild(ne));let t=document.createElement("div");return t.id="empty-animate-el-"+ae++,t.style.setProperty("display","none"),ne.appendChild(t),t};class oe extends ie{stop(){this.targets.forEach((t=>t?.remove?.())),super.stop()}}const le=(t={})=>{let{easing:e,decimal:i,numPoints:s,opacity:a,...n}=Ht(t),r=m(te,n),o=e;if("string"==typeof e){let t=mt(e);o=$t.includes(t)||["linear","steps","step-start","step-end"].includes(t)?Bt(e):ut.includes(t)?pt(e):e}return{..."function"==typeof o?Mt({opacity:[0,1],easing:e,decimal:i,numPoints:s}):{opacity:[0,1],easing:e},...r}};class ue extends oe{constructor(){super(...arguments),this.updateListeners=new y}updateOptions(t={}){let e=Ht(t),i=this.targets.size>1?null:{target:re()},a=Object.assign({},le(c(["target","targets"],e)),i);super.updateOptions(a);let n=c(te,e);try{this.updateListeners=this.updateListeners??new y,this.updateListeners.forEach(((t,e)=>{this.off("update",t),this.updateListeners.remove(e)}),this);let{target:t,targets:i}=e,a=[...new Set([...Yt(i),...Yt(t)])],r=a.length,o=this.targets.get(0),l=window.getComputedStyle(o);a.forEach(((t,i)=>{s(n,((s,a)=>{let n,o=t.getAttribute(a);this.on("update",n=()=>{let n,u=Number(l.getPropertyValue("opacity"));n="function"==typeof s?s(u,i,r,t):kt(u,Array.isArray(s)?s:[o,s],e.decimal),t.setAttribute(a,""+n)}),this.updateListeners.add(n)}))}),this)}catch(t){this?.stopLoop(),this?.emit?.("error",t)}return this}}const he=(t={})=>new ue(t),ce=(t,e={})=>{const{grid:i,axis:s,from:a=0,easing:r,direction:o="normal"}=e,l=Array.isArray(t),u=l?t.length-1:null,h=parseFloat(l?t[0]:t),c=l?parseFloat(t[u]):0,{start:m=(l?h:0)}=e,p=n(l?t[u]:t)||0,f="function"==typeof r?r:pt(r),d="function"==typeof r?[]:ft(r);let g,y=[],b=0,E=a;return/from/i.test(a)&&(E=0),(t,e)=>{if(/center/i.test(a)&&(E=(e-1)/2),/last/i.test(a)&&(E=e-1),0==y.length){for(let t=0;t<e;t++)if(Array.isArray(i)){const e="center"!==a?E%i[0]:(i[0]-1)/2,n="center"!==a?Math.floor(E/i[0]):(i[1]-1)/2,r=e-t%i[0],o=n-Math.floor(t/i[0]);let l;l="x"===s?-r:"y"===s?-o:Math.sqrt(r*r+o*o),y.push(l)}else y.push(Math.abs(E-t));b=Math.max(...y),g=l?(c-h)/b:h,"function"==typeof f&&(y=y.map((t=>f(t/b,d)*b))),/reverse/i.test(o)&&y.reverse()}return m+g*(Math.round(100*y[t])/100)+p}},me=(t,e={})=>{let i=e.stagger??{};return(s,a)=>{let n=t.map(((e,n)=>{let r=t[Math.max(0,n-1)];return ce([r,e],i)(s,a)}));return Ct(n,e)}},pe=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,fe=(t,e)=>"string"==typeof t?/^\=/.test(t)?parseFloat(t.replace("=","")):parseFloat(t)+e:t+e;class de{constructor(t={}){this.animateInstances=new y,this.initialOptions={},this.mainInstance=new ie({duration:0}),this.initialOptions=Object.assign({},Wt,Ht(t)),this.totalDuration=0,this.maxDuration=0}get totalDuration(){return this.mainInstance.totalDuration}set totalDuration(t){this.mainInstance.totalDuration=t}get maxDuration(){return this.mainInstance.maxDuration}set maxDuration(t){this.mainInstance.maxDuration=t}get minDelay(){return this.mainInstance.minDelay}set minDelay(t){this.mainInstance.minDelay=t}get maxSpeed(){return this.mainInstance.maxSpeed}set maxSpeed(t){this.mainInstance.maxSpeed=t}get maxEndDelay(){return this.mainInstance.maxEndDelay}set maxEndDelay(t){this.mainInstance.maxEndDelay=t}get timelineOffset(){return this.mainInstance.timelineOffset}set timelineOffset(t){this.mainInstance.timelineOffset=t}get options(){return this.mainInstance.options}set options(t){this.mainInstance.options=Ht(t)}get emitter(){return this.mainInstance.emitter}get promise(){return this.mainInstance.promise}add(t={},e=0){let i,s=Object.assign({},Wt,this.initialOptions,t instanceof ie?t.initialOptions:Ht(t));return s.timelineOffset=fe(e,this.totalDuration),s.autoplay=this.initialOptions.autoplay,t instanceof ie?(i=t,i.updateOptions(s)):i=new ie(s),this.animateInstances.add(i),this.updateTiming(),this}updateTiming(){let t=this.animateInstances.values(),e=Math.max(...t.map((t=>t.totalDuration)));return this.mainInstance.updateOptions({autoplay:this.initialOptions.autoplay,duration:e,delay:Math.max(...t.map((t=>t.minDelay))),endDelay:e-Math.max(...t.map((t=>t.totalDuration-t.maxEndDelay)))}),this}remove(t){let e=this.animateInstances.size;if(this.animateInstances.has(t)){let i=this.animateInstances.get(t),{totalDuration:s,timelineOffset:a}=i.totalDurationOptions,n=Number(s)-Number(a);for(let i=t;i<e;i++){let t=this.animateInstances.get(i);t.updateOptions({timelineOffset:t.timelineOffset-n})}return this.animateInstances.remove(t),this.updateTiming(),i}return null}then(t,e){return t=t?.bind(this),e=e?.bind(this),this.mainInstance?.then?.(t,e),this}catch(t){return t=t?.bind(this),this.mainInstance?.catch?.(t),this}finally(t){return t=t?.bind(this),this.mainInstance?.finally?.(t),this}allInstances(t){return this.animateInstances.forEach(t),this}all(t){return this.mainInstance&&t(this.mainInstance),this.allInstances(t),this}play(){return this.all((t=>t.play())),this}pause(){return this.all((t=>t.pause())),this}reverse(){return this.all((t=>t.reverse())),this}reset(){return this.all((t=>t.reset())),this}cancel(){return this.all((t=>t.cancel())),this}finish(){return this.all((t=>t.finish())),this}stop(){this.all((t=>t.stop())),this.animateInstances.clear(),this.mainInstance=null,this.animateInstances=null}getCurrentTime(){return this.mainInstance.getCurrentTime()}getProgress(){return this.mainInstance.getProgress()}getPlayState(){return this.mainInstance.getPlayState()}is(t){return this.mainInstance.is(t)}setCurrentTime(t){return this.all((e=>e.setCurrentTime(t))),this}setProgress(t){return this.all((e=>e.setProgress(t))),this}setSpeed(t=1){return this.all((e=>e.setSpeed(t))),this}on(t,e,i){return i=i??this,this.mainInstance?.on?.(t,e??i,i),this}off(t,e,i){return i=i??this,this.mainInstance?.off?.(t,e??i,i),this}emit(t,...e){return this.mainInstance?.emit?.(t,...e),this}toJSON(){return this.options}get[Symbol.toStringTag](){return"Timeline"}}const ge=(t={})=>new de(t);export{te as ALL_TIMING_KEYS,ie as Animate,ue as AnimateAttributes,Mt as ApplyCustomEasing,B as Back,st as Bezier,W as Bounce,k as CSSArrValue,Nt as CSSCamelCase,jt as CSSPXDataType,A as CSSValue,M as CSSVarSupport,I as CSS_CACHE,$ as Circ,mt as ComplexEasingSyntax,At as ComplexStrtoArr,X as Cubic,Ct as CustomEasing,wt as CustomEasingOptions,Wt as DefaultAnimationOptions,oe as DestroyableAnimate,Zt as EASINGS,g as EFFECTS,rt as EaseInOut,nt as EaseOut,ot as EaseOutIn,J as EasingDurationCache,ut as EasingFunctionKeys,lt as EasingFunctions,$t as EasingKeys,xt as EasingPts,H as Elastic,ne as EmptyTweenElContainer,G as Expo,Qt as FUNCTION_SUPPORTED_TIMING_KEYS,Bt as GetEase,pt as GetEasingFunction,tt as INTINITE_LOOP_LIMIT,d as KeyframeParse,Jt as NOT_FUNCTION_SUPPORTED_TIMING_KEYS,qt as ParseTransformableCSSKeyframes,Rt as ParseTransformableCSSProperties,U as Quad,Y as Quart,K as Quint,Z as Sine,Q as Spring,Pt as SpringEasing,me as StaggerCustomEasing,it as Steps,de as Timeline,vt as TransformFunctionNames,Tt as TransformFunctions,Dt as TweenCache,ae as UIDCount,O as UnitDEG,x as UnitDEGCSSValue,E as UnitLess,w as UnitLessCSSValue,S as UnitPX,D as UnitPXCSSValue,b as addCSSUnit,se as animate,zt as arrFill,h as camelCase,Kt as computeOption,u as convertToDash,re as createEmptyEl,Ft as createTransformProperty,v as createTransformValue,le as createTweenOptions,at as easein,t as flatten,et as getEasingDuration,Xt as getElements,Yt as getTargets,n as getUnit,Ot as interpolateColor,kt as interpolateComplex,yt as interpolateNumber,St as interpolateString,Et as interpolateUsingIndex,i as isEmpty,bt as isNumberLike,e as isObject,l as isValid,V as limit,Gt as mapAnimationOptions,s as mapObject,c as omit,ft as parseEasingParameters,f as parseOffset,Ht as parseOptions,m as pick,pe as random,ht as registerEasingFunction,ct as registerEasingFunctions,fe as relativeTo,dt as scale,ce as stagger,ge as timeline,o as toArr,N as toCSSVars,gt as toFixed,C as toRGBAArr,a as toStr,P as transformCSSVars,T as transformProperyNames,p as transpose,r as trim,he as tweenAttr};
