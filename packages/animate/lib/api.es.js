var B=e=>typeof e=="string"?e.includes("%")?parseFloat(e)/100:e=="from"?0:e=="to"?1:parseFloat(e):e,Ve=e=>{let t=new Set,i=Object.keys(e),n=i.length;for(let r=0;r<n;r++){let s=""+i[r],a=e[s],o=s.split(","),l=o.length;for(let p=0;p<l;p++){let y=B(o[p]);t.add({...a,offset:y})}}return[...t].sort((r,s)=>r.offset-s.offset)},vt={};var Ke=e=>[].concat(...e),O=(e,t)=>{let i=Object.keys(e),n,r,s={};for(let a=0,o=i.length;a<o;a++)n=i[a],r=e[n],s[n]=t(r,n,e);return s},V=e=>""+e,Z=e=>Array.isArray(e)||typeof e=="string"?(typeof e=="string"&&(e=e.split(",")),e):[e],b=e=>Array.isArray(e)||typeof e=="string"?Boolean(e.length):e!=null&&e!=null&&!Number.isNaN(e),Q=e=>(e=e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`),e.charAt(0)=="-"?e.substr(1):e),Se=e=>e.includes("--")?e:`${e}`.replace(/-([a-z])/g,(i,n)=>n.toUpperCase()),M=(e,t)=>{let i=[...e],n={...t};for(;i.length;){let{[i.pop()]:r,...s}=n;n=s}return n},je=(e,t)=>{let i=[...e],n={};for(let r of i)b(t[r])&&(n[r]=t[r]);return n},R=(...e)=>{let t=0;e=e.map(r=>{let s=Z(r),a=s.length;return a>t&&(t=a),s});let i=[],n=e.length;for(let r=0;r<t;r++){i[r]=[];for(let s=0;s<n;s++){let a=e[s][r];b(a)&&(i[r][s]=a)}}return i};var Ee=(e="")=>t=>typeof t=="string"?t:`${t}${e}`,X=Ee(),Te=Ee("px"),xe=Ee("deg"),J=e=>t=>b(t)?Z(t).map(i=>{if(typeof i!="number"&&typeof i!="string")return i;let n=Number(i),r=Number.isNaN(n)?typeof i=="string"?i.trim():i:n;return e(r)}):[],K=(e,t)=>Z(e).map(J(t)),F=J(X),x=J(Te),T=J(xe),ze=e=>{let t=Object.keys(e),i,n,r={};for(let s=0,a=t.length;s<a;s++)i=Se(t[s]),n=e[t[s]],r[i]=n;return r},De={translate:e=>K(e,Te),translate3d:e=>K(e,Te),translateX:e=>x(e),translateY:e=>x(e),translateZ:e=>x(e),rotate:e=>K(e,xe),rotate3d:e=>K(e,X),rotateX:e=>T(e),rotateY:e=>T(e),rotateZ:e=>T(e),scale:e=>K(e,X),scale3d:e=>K(e,X),scaleX:e=>F(e),scaleY:e=>F(e),scaleZ:e=>F(e),skew:e=>K(e,xe),skewX:e=>T(e),skewY:e=>T(e),perspective:e=>x(e)},Ce=Object.keys(De),qe=(e,t)=>{let i="",n=e.length;for(let r=0;r<n;r++){let s=e[r],a=t[r];b(a)&&(i+=`${s}(${Array.isArray(a)?a.join(", "):a}) `)}return i.trim()},Ue=["margin","padding","size","width","height","left","right","top","bottom","radius","gap","basis","inset","outline-offset","perspective","thickness","position","distance","spacing"].map(Se).join("|"),He=e=>{let t=ze(e),i=M(Ce,t),n=Object.keys(t).filter(a=>Ce.includes(a)),r=n.map(a=>De[a](t[a])),s=R(...r).filter(b).map(a=>qe(n,a));return i=O(i,(a,o)=>{let l;if(!/color/i.test(o)){let p=/rotate/i.test(o),y=new RegExp(Ue,"i").test(o);if(p||y)return p?l=T:y&&(l=x),l(a).map(c=>{let u=c.trim().split(" ");return l(u).join(" ")})}return[].concat(a).map(V)}),Object.assign({},b(s)?{transform:s}:null,i)},Re=e=>e.map(t=>{let{translate:i,translate3d:n,translateX:r,translateY:s,translateZ:a,rotate:o,rotate3d:l,rotateX:p,rotateY:y,rotateZ:c,scale:u,scale3d:f,scaleX:g,scaleY:m,scaleZ:E,skew:S,skewX:h,skewY:I,perspective:H,easing:P,iterations:w,offset:z,...N}=ze(t);return i=x(i),n=x(n),r=x(r)[0],s=x(s)[0],a=x(a)[0],o=T(o),l=F(l),p=T(p)[0],y=T(y)[0],c=T(c)[0],u=F(u),f=F(f),g=F(g)[0],m=F(m)[0],E=F(E)[0],S=T(S),h=T(h)[0],I=T(I)[0],H=x(H)[0],[N,i,n,r,s,a,o,l,p,y,c,u,f,g,m,E,S,h,I,H]}).map(([t,...i])=>{let n=qe(Ce,i);return t=O(t,(r,s)=>{let a;if(!/color/i.test(s)){let o=/rotate/i.test(s),l=new RegExp(Ue,"i").test(s);if(o||l){o?a=T:l&&(a=x);let p=V(r).trim().split(" ");return a(p).join(" ")}}return V(r)}),Object.assign({},b(n)?{transform:n}:null,t)});var lt=4,pt=.001,ut=1e-7,mt=10,_=11,ee=1/(_-1),ct=typeof Float32Array=="function",_e=(e,t)=>1-3*t+3*e,Ge=(e,t)=>3*t-6*e,$e=e=>3*e,te=(e,t,i)=>((_e(t,i)*e+Ge(t,i))*e+$e(t))*e,We=(e,t,i)=>3*_e(t,i)*e*e+2*Ge(t,i)*e+$e(t),yt=(e,t,i,n,r)=>{let s,a,o=0;do a=t+(i-t)/2,s=te(a,n,r)-e,s>0?i=a:t=a;while(Math.abs(s)>ut&&++o<mt);return a},ft=(e,t,i,n)=>{for(var r=0;r<lt;++r){let s=We(t,i,n);if(s===0)return t;t-=(te(t,i,n)-e)/s}return t},gt=(e,t,i,n)=>{if(!(0<=e&&e<=1&&0<=i&&i<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===t&&i===n)return o=>o;for(var r=ct?new Float32Array(_):new Array(_),s=0;s<_;++s)r[s]=te(s*ee,e,i);let a=o=>{let l=0,p=1,y=_-1;for(;p!==y&&r[p]<=o;++p)l+=ee;--p;let c=(o-r[p])/(r[p+1]-r[p]),u=l+c*ee,f=We(u,e,i);return f>=pt?ft(o,u,e,i):f===0?u:yt(o,l,l+ee,e,i)};return o=>o===0||o===1?o:te(a(o),t,n)},Ae=gt;var ke={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};var ht={name:"hsl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HSL"],rgb:function(e){var t=e[0]/360,i=e[1]/100,n=e[2]/100,r,s,a,o,l;if(i===0)return l=n*255,[l,l,l];n<.5?s=n*(1+i):s=n+i-n*i,r=2*n-s,o=[0,0,0];for(var p=0;p<3;p++)a=t+1/3*-(p-1),a<0?a++:a>1&&a--,6*a<1?l=r+(s-r)*6*a:2*a<1?l=s:3*a<2?l=r+(s-r)*(2/3-a)*6:l=r,o[p]=l*255;return o}},Ye={red:0,orange:60,yellow:120,green:180,blue:240,purple:300},bt=e=>{var t,i=[],n=1,r;if(typeof e=="string")if(ke[e])i=ke[e].slice(),r="rgb";else if(e==="transparent")n=0,r="rgb",i=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var s=e.slice(1),a=s.length,o=a<=4;n=1,o?(i=[parseInt(s[0]+s[0],16),parseInt(s[1]+s[1],16),parseInt(s[2]+s[2],16)],a===4&&(n=parseInt(s[3]+s[3],16)/255)):(i=[parseInt(s[0]+s[1],16),parseInt(s[2]+s[3],16),parseInt(s[4]+s[5],16)],a===8&&(n=parseInt(s[6]+s[7],16)/255)),i[0]||(i[0]=0),i[1]||(i[1]=0),i[2]||(i[2]=0),r="rgb"}else if(t=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var l=t[1],p=l==="rgb",s=l.replace(/a$/,"");r=s;var a=s==="cmyk"?4:s==="gray"?1:3;i=t[2].trim().split(/\s*[,\/]\s*|\s+/).map(function(u,f){if(/%$/.test(u))return f===a?parseFloat(u)/100:s==="rgb"?parseFloat(u)*255/100:parseFloat(u);if(s[f]==="h"){if(/deg$/.test(u))return parseFloat(u);if(Ye[u]!==void 0)return Ye[u]}return parseFloat(u)}),l===s&&i.push(1),n=p||i[a]===void 0?1:i[a],i=i.slice(0,a)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(i=e.match(/([0-9]+)/g).map(function(y){return parseFloat(y)}),r=e.match(/([a-z])/ig).join("").toLowerCase());else Number.isNaN(e)?Array.isArray(e)||e.length?(i=[e[0],e[1],e[2]],r="rgb",n=e.length===4?e[3]:1):e instanceof Object&&(e.r!=null||e.red!=null||e.R!=null?(r="rgb",i=[e.r||e.red||e.R||0,e.g||e.green||e.G||0,e.b||e.blue||e.B||0]):(r="hsl",i=[e.h||e.hue||e.H||0,e.s||e.saturation||e.S||0,e.l||e.lightness||e.L||e.b||e.brightness]),n=e.a||e.alpha||e.opacity||1,e.opacity!=null&&(n/=100)):(r="rgb",i=[e>>>16,(e&65280)>>>8,e&255]);return{space:r,values:i,alpha:n}},dt=e=>{Array.isArray(e)&&e.raw&&(e=String.raw(...arguments));var t,i,n,r=bt(e);return r.space?(t=Array(3),t[0]=Math.min(Math.max(r.values[0],0),255),t[1]=Math.min(Math.max(r.values[1],0),255),t[2]=Math.min(Math.max(r.values[2],0),255),r.space[0]==="h"&&(t=ht.rgb(t)),t.push(Math.min(Math.max(r.alpha,0),1)),t):[]},Oe=dt;var L=(e,t,i)=>Math.min(Math.max(e,t),i),ie=e=>Math.pow(e,2),ne=e=>Math.pow(e,3),re=e=>Math.pow(e,4),se=e=>Math.pow(e,5),ae=e=>Math.pow(e,6),oe=e=>1-Math.cos(e*Math.PI/2),le=e=>1-Math.sqrt(1-e*e),pe=e=>e*e*(3*e-2),ue=e=>{let t,i=4;for(;e<((t=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((t*3-2)/22-e,2)},me=(e,t=[])=>{let[i=1,n=.5]=t,r=L(i,1,10),s=L(n,.1,2);return e===0||e===1?e:-r*Math.pow(2,10*(e-1))*Math.sin((e-1-s/(Math.PI*2)*Math.asin(1/r))*(Math.PI*2)/s)},G=(e,t=[],i)=>{let[n=1,r=100,s=10,a=0]=t;n=L(n,.1,1e3),r=L(r,.1,1e3),s=L(s,.1,1e3),a=L(a,.1,1e3);let o=Math.sqrt(r/n),l=s/(2*Math.sqrt(r*n)),p=l<1?o*Math.sqrt(1-l*l):0,y=1,c=l<1?(l*o+-a)/p:-a+o,u=i?i*e/1e3:e;return l<1?u=Math.exp(-u*l*o)*(y*Math.cos(p*u)+c*Math.sin(p*u)):u=(y+c*u)*Math.exp(-u*o),e===0||e===1?e:1-u},Ie=new Map,St=1e4,Et=(e="spring")=>{if(Ie.has(e))return Ie.get(e);let t=typeof e=="function"?e:fe(e),i=typeof e=="function"?[]:Ze(e),n=1/6,r=0,s=0,a=0;for(;++a<St;)if(r+=n,t(r,i,null)===1){if(s++,s>=16)break}else s=0;let o=r*n*1e3;return Ie.set(e,o),o},Pe=(e,t=[])=>{let[i=10,n]=t;return(n=="start"?Math.ceil:Math.floor)(L(e,0,1)*i)/i},Be=(e,t=[])=>{let[i,n,r,s]=t;return Ae(i,n,r,s)(e)},ce=Ae(.42,0,1,1),C=e=>(t,i=[],n)=>1-e(1-t,i,n),A=e=>(t,i=[],n)=>t<.5?e(t*2,i,n)/2:1-e(t*-2+2,i,n)/2,k=e=>(t,i=[],n)=>t<.5?(1-e(1-t*2,i,n))/2:(e(t*2-1,i,n)+1)/2,D={steps:Pe,"step-start":e=>Pe(e,[1,"start"]),"step-end":e=>Pe(e,[1,"end"]),linear:e=>e,"cubic-bezier":Be,ease:e=>Be(e,[.25,.1,.25,1]),in:ce,out:C(ce),"in-out":A(ce),"out-in":k(ce),"in-quad":ie,"out-quad":C(ie),"in-out-quad":A(ie),"out-in-quad":k(ie),"in-cubic":ne,"out-cubic":C(ne),"in-out-cubic":A(ne),"out-in-cubic":k(ne),"in-quart":re,"out-quart":C(re),"in-out-quart":A(re),"out-in-quart":k(re),"in-quint":se,"out-quint":C(se),"in-out-quint":A(se),"out-in-quint":k(se),"in-expo":ae,"out-expo":C(ae),"in-out-expo":A(ae),"out-in-expo":k(ae),"in-sine":oe,"out-sine":C(oe),"in-out-sine":A(oe),"out-in-sine":k(oe),"in-circ":le,"out-circ":C(le),"in-out-circ":A(le),"out-in-circ":k(le),"in-back":pe,"out-back":C(pe),"in-out-back":A(pe),"out-in-back":k(pe),"in-bounce":ue,"out-bounce":C(ue),"in-out-bounce":A(ue),"out-in-bounce":k(ue),"in-elastic":me,"out-elastic":C(me),"in-out-elastic":A(me),"out-in-elastic":k(me),spring:G,"spring-in":G,"spring-out":C(G),"spring-in-out":A(G),"spring-out-in":k(G)},$=Object.keys(D),$t=(e,t)=>{Object.assign(D,{[e]:t}),$=Object.keys(D)},Wt=(...e)=>{Object.assign(D,...e),$=Object.keys(D)},ye=e=>Q(e).replace(/^ease-/,"").replace(/(\(|\s).+/,"").toLowerCase().trim(),fe=e=>{let t=ye(e);return $.includes(t)?D[t]:null},Ze=e=>{let t=/(\(|\s)([^)]+)\)?/.exec(e);return t?t[2].split(",").map(i=>{let n=parseFloat(i);return Number.isNaN(n)?i.trim():n}):[]},Tt=(e,t,i)=>t+(i-t)*e,Qe=(e,t)=>Math.round(e*10**t)/10**t,we=(e,t,i=3)=>{let n=t.length-1,r=L(Math.floor(e*n),0,n-1),s=t[r],a=t[r+1],o=(e-r/n)*n;return Qe(Tt(o,s,a),i)},Xe=e=>{let t=parseFloat(e);return typeof t=="number"&&!Number.isNaN(t)},xt=(e,t)=>{e=L(e,0,1);let i=t.length-1,n=Math.round(e*i);return t[n]},Ct=(e,t,i=3)=>{let n="";return Xe(t[0])&&(n=V(t[0]).replace(/^\d+/,"")),we(e,t.map(parseFloat),i)+n},At=(e,t,i=3)=>R(...t.map(Oe)).map((n,r)=>{let s=we(e,n);return r<3?Math.round(s):Qe(s,i)}),Me=e=>V(e).trim(),kt=e=>Me(e).replace(/(\d|\)|\w)\s/g,t=>t[0]+"__").split("__").map(Me).filter(b),ge=(e,t,i=3)=>{if(t.every(a=>typeof a=="number"))return we(e,t,i);if(t.every(a=>b(Oe(a??null))))return`rgba(${At(e,t,i)})`;if(t.some(a=>typeof a=="string"))return t.some(l=>/(\d|\)|\w)\s/.test(Me(l)))?R(...t.map(kt)).map(l=>ge(e,l,i)).join(" "):t.every(l=>Xe(l))?Ct(e,t,i):xt(e,t)},Je=(e={})=>{let t=typeof e=="string"||typeof e=="function",{easing:i="spring(1, 100, 10, 0)",numPoints:n=100,decimal:r=3,duration:s}=t?{easing:e}:e;return{easing:i,numPoints:n,decimal:r,duration:s}},Fe=new Map,Ot=({easing:e,numPoints:t,duration:i}={})=>{let n=[],r=`${e}${t}`;if(Fe.has(r))return Fe.get(r);let s=typeof e=="function"?e:fe(e),a=typeof e=="function"?[]:Ze(e);for(let o=0;o<t;o++)n[o]=s(o/(t-1),a,i);return Fe.set(r,n),n},Le=(e={})=>{if(typeof e.easing=="string"){let t=ye(e.easing);/(spring|spring-in)$/i.test(t)&&(e.duration=Et(e.easing))}},et=(e,t={})=>{let i=Je(t);return Le(i),Ot(i).map(n=>ge(n,e,i.decimal))},Yt=(e,t={})=>{let i=Je(t),{duration:n}=i;return Le(i),[et(e,i),b(n)?n:i.duration]},tt=(e={})=>{let{easing:t,numPoints:i,decimal:n,duration:r,...s}=e,a={easing:t,numPoints:i,decimal:n,duration:r};Le(a);let o=O(s,p=>et(p,a)),l={};return b(r)?l={duration:r}:b(a.duration)&&(l={duration:a.duration}),Object.assign({},o,l)};var q=class{constructor(t){this.map=new Map(t)}getMap(){return this.map}get(t){return this.map.get(t)}keys(){return Array.from(this.map.keys())}values(){return Array.from(this.map.values())}set(t,i){return this.map.set(t,i),this}add(t){let n=this.size;return this.set(n,t),this}get size(){return this.map.size}get length(){return this.map.size}last(t=1){let i=this.keys()[this.size-t];return this.get(i)}delete(t){return this.map.delete(t)}remove(t){return this.map.delete(t),this}clear(){return this.map.clear(),this}has(t){return this.map.has(t)}entries(){return this.map.entries()}forEach(t,i){return this.map.forEach(t,i),this}[Symbol.iterator](){return this.entries()}},it=(e,t,...i)=>{e.forEach(n=>{n[t](...i)})};var nt=({callback:e=()=>{},scope:t=null,name:i="event"})=>({callback:e,scope:t,name:i}),W=class extends q{constructor(t="event"){super();this.name=t}},Ne=class extends q{constructor(){super()}getEvent(t){let i=this.get(t);return i instanceof W?i:(this.set(t,new W(t)),this.get(t))}newListener(t,i,n){let r=this.getEvent(t);return r.add(nt({name:t,callback:i,scope:n})),r}on(t,i,n){if(typeof t=="undefined"||t==null)return this;typeof t=="string"&&(t=t.trim().split(/\s/g));let r,s,a=typeof t=="object"&&!Array.isArray(t),o=a?i:n;return a||(s=i),Object.keys(t).forEach(l=>{r=a?l:t[l],a&&(s=t[l]),this.newListener(r,s,o)},this),this}removeListener(t,i,n){let r=this.get(t);if(r instanceof W&&i){let s=nt({name:t,callback:i,scope:n});r.forEach((a,o)=>{if(a.callback===s.callback&&a.scope===s.scope)return r.remove(o)})}return r}off(t,i,n){if(typeof t=="undefined"||t==null)return this;typeof t=="string"&&(t=t.trim().split(/\s/g));let r,s,a=typeof t=="object"&&!Array.isArray(t),o=a?i:n;return a||(s=i),Object.keys(t).forEach(l=>{r=a?l:t[l],a&&(s=t[l]),typeof s=="function"?this.removeListener(r,s,o):this.remove(r)},this),this}once(t,i,n){if(typeof t=="undefined"||t==null)return this;typeof t=="string"&&(t=t.trim().split(/\s/g));let r=typeof t=="object"&&!Array.isArray(t);return Object.keys(t).forEach(s=>{let a=r?s:t[s],o=r?t[s]:i,l=r?i:n,p=(...y)=>{o.apply(l,y),this.removeListener(a,p,l)};this.newListener(a,p,l)},this),this}emit(t,...i){return typeof t=="undefined"||t==null?this:(typeof t=="string"&&(t=t.trim().split(/\s/g)),t.forEach(n=>{let r=this.get(n);r instanceof W&&r.forEach(s=>{let{callback:a,scope:o}=s;a.apply(o,i)})},this),this)}clear(){return it(this,"clear"),super.clear(),this}};var It=e=>typeof e=="string"?Array.from(document.querySelectorAll(e)):[e],U=e=>Array.isArray(e)?Ke(e.map(U)):typeof e=="string"||e instanceof Node?It(e):e instanceof NodeList||e instanceof HTMLCollection?Array.from(e):[],Pt=(e,t,i)=>typeof e=="function"?e.apply(i,t):e,rt=(e,t,i)=>O(e,n=>Pt(n,t,i)),st={in:"ease-in",out:"ease-out","in-out":"ease-in-out","in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","in-out-expo":"cubic-bezier(1, 0, 0, 1)","in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},ve=Object.keys(st),he=(e="ease")=>{let t=Q(e).replace(/^ease-/,"");return ve.includes(t)?st[t]:e},at={keyframes:[],offset:[],loop:1,delay:0,speed:1,endDelay:0,easing:"ease",timelineOffset:0,autoplay:!0,duration:1e3,fillMode:"none",direction:"normal",padEndDelay:!1,timeline:document.timeline,extend:{}},be=e=>{let{options:t,...i}=e,n=t instanceof j?t.options:Array.isArray(t)?t?.[0]?.options:t;return Object.assign({},n,i)},ot=["easing","loop","endDelay","duration","speed","delay","timelineOffset","direction","extend","fillMode","offset"],wt=["keyframes","padEndDelay","onfinish","oncancel","autoplay","target","targets","timeline"],de=[...ot,...wt],d=class{constructor(t){this.options={};this.properties={};this.totalDuration=-1/0;this.minDelay=1/0;this.maxSpeed=1/0;this.emitter=new Ne;this.targets=new q;this.targetIndexes=new WeakMap;this.keyframeEffects=new WeakMap;this.computedOptions=new WeakMap;this.animations=new WeakMap;this.computedKeyframes=new WeakMap;this.loop=this.loop.bind(this),this.onVisibilityChange=this.onVisibilityChange.bind(this),this.on("error",console.error),this.updateOptions(t),this.mainAnimation&&(this.visibilityPlayState=this.getPlayState(),d.pauseOnPageHidden&&document.addEventListener("visibilitychange",this.onVisibilityChange,!1)),this.newPromise()}static requestFrame(){d.cancelFrame(),d.RUNNING.forEach(t=>{t.emitter.getEvent("update").length<=0?t.stopLoop():t.loop()}),d.RUNNING.size>0?d.animationFrame=window.requestAnimationFrame(d.requestFrame):d.cancelFrame()}static cancelFrame(){window.cancelAnimationFrame(d.animationFrame),d.animationFrame=null}loop(){this.emit("update",this.getProgress(),this)}stopLoop(){d.RUNNING.delete(this)}onVisibilityChange(){document.hidden?(this.visibilityPlayState=this.getPlayState(),this.is("running")&&(this.loop(),this.pause())):this.visibilityPlayState=="running"&&this.is("paused")&&this.play()}newPromise(){return this.promise=new Promise((t,i)=>{this.emitter?.once?.("finish",()=>t([this])),this.emitter?.once?.("error",n=>i(n))}),this.promise}then(t,i){return t=t?.bind(this),i=i?.bind(this),this.promise?.then?.(t,i),this}catch(t){return t=t?.bind(this),this.promise?.catch?.(t),this}finally(t){return t=t?.bind(this),this.promise?.finally?.(t),this}allAnimations(t){return this.targets.forEach(i=>{let n=this.keyframeEffects.get(i),r=this.animations.get(n);return t(r,i)}),this}all(t){return this.mainAnimation&&t(this.mainAnimation,this.mainElement),this.allAnimations(t),this}beginEvent(){this.getProgress()==0&&this.emit("begin",this)}play(){let t=this.getPlayState();return this.beginEvent(),this.all(i=>i.play()),this.emit("play",t,this),this.is(t)||this.emit("playstate-change",t,this),this.loop(),d.RUNNING.add(this),d.requestFrame(),this}pause(){let t=this.getPlayState();return this.all(i=>i.pause()),this.emit("pause",t,this),this.is(t)||this.emit("playstate-change",t,this),this.stopLoop(),this}reverse(){return this.all(t=>t.reverse()),this}reset(){return this.setProgress(0),this.options.autoplay?this.play():this.pause(),this}cancel(){return this.all(t=>t.cancel()),this}finish(){return this.all(t=>t.finish()),this}stop(){this.cancel(),this.stopLoop(),document.removeEventListener("visibilitychange",this.onVisibilityChange,!1),this.targets.forEach(t=>this.removeTarget(t)),this.emit("stop"),this.emitter.clear(),this.mainkeyframeEffect=null,this.mainAnimation=null,this.mainElement?.remove?.(),this.mainElement=null,this.promise=null,this.computedOptions=null,this.animations=null,this.keyframeEffects=null,this.emitter=null,this.targets=null,this.options=null,this.properties=null}getAnimation(t){let i=this.keyframeEffects.get(t);return this.animations.get(i)}getTiming(t){let i=this.computedOptions.get(t)??{},n=this.keyframeEffects.get(t).getTiming?.()??{};return{...i,...n}}getCurrentTime(){return this.mainAnimation.currentTime}getProgress(){return this.getCurrentTime()/this.totalDuration*100}getSpeed(){return this.mainAnimation.playbackRate}getPlayState(){return this.mainAnimation.playState}is(t){return this.getPlayState()==t}setCurrentTime(t){return this.all(i=>i.currentTime=t),this.emit("update",this.getProgress()),this}setProgress(t){let i=t/100*this.totalDuration;return this.setCurrentTime(i),this}setSpeed(t=1){return this.maxSpeed=t,this.all(i=>{i.updatePlaybackRate?i.updatePlaybackRate(t):i.playbackRate=t}),this}createArrayOfComputedOptions(t,i){let n=[];return this.targets.forEach((r,s)=>{let a=this.computedOptions.get(r)??{},o=h=>{let I=h;return h=="loop"&&(I="iterations"),h=="fillMode"&&(I="fill"),t[h]??a[I]??this.options[h]??at[h]},l=Object.assign({easing:o("easing"),iterations:o("loop"),direction:o("direction"),endDelay:o("endDelay"),duration:o("duration"),speed:o("speed"),delay:o("delay"),timelineOffset:o("timelineOffset"),keyframes:o("keyframes")},o("extend")??{}),p=rt(l,[s,i,r],this);typeof p.easing=="string"&&(p.easing=he(p.easing)),p.iterations===!0&&(p.iterations=1/0),p.fill=o("fillMode");let{timelineOffset:y,speed:c,endDelay:u,delay:f,duration:g,iterations:m,...E}=p;m=Number(m),g=Number(g),u=Number(u),c=Number(c),f=Number(f)+Number(y);let S=f+g*m+u;this.totalDuration<S&&(this.totalDuration=S),n[s]={...E,speed:c,tempDurations:S,endDelay:u,delay:f,duration:g,iterations:m},this.minDelay>f&&(this.minDelay=f),this.maxSpeed>c&&(this.maxSpeed=c)}),n}createAnimations(t,i){let{arrOfComputedOptions:n,padEndDelay:r,oldCSSProperties:s,onfinish:a,oncancel:o,timeline:l}=t;this.targets.forEach((p,y)=>{let{speed:c,keyframes:u,tempDurations:f,...g}=n[y];r&&g.endDelay==0&&Math.abs(g.iterations)!=Math.abs(1/0)&&(g.endDelay=this.totalDuration-f);let m,E,S=u;typeof S=="object"&&(S=Ve(S));let h=this.computedKeyframes.get(p)??{},I=Object.assign({},s,h),H=O(I,(z,N)=>this.properties[N]??z);if(E=b(S)?S:H,Array.isArray(E))m=E.map(z=>{let{easing:N,offset:v,...Y}=M(["speed","loop"],z);return Object.assign({},Y,typeof N=="string"?{easing:he(N)}:null,typeof v=="string"||typeof v=="number"?{offset:B(v)}:null)}),m=Re(m);else{let z=M(["keyframes"],E),{offset:N,...v}=rt(z,[y,i,p],this);v=He(v);let Y=N;m=Object.assign({},v,b(Y)?{offset:Y.map(B)}:null)}let P,w;this.keyframeEffects.has(p)?(w=this.keyframeEffects.get(p),P=this.animations.get(w),w?.setKeyframes?.(m),w?.updateTiming?.(g)):(w=new KeyframeEffect(p,m,g),P=new Animation(w,l),this.keyframeEffects.set(p,w),this.animations.set(w,P)),P.playbackRate=c,P.onfinish=()=>{typeof a=="function"&&a.call(this,p,y,i,P)},P.oncancel=()=>{typeof o=="function"&&o.call(this,p,y,i,P)},this.computedOptions.set(p,g),this.computedKeyframes.set(p,m)})}updateOptions(t={}){try{let i=be(t);this.options=Object.assign({},at,this.options,i);let{padEndDelay:n,autoplay:r,target:s,targets:a,timeline:o,onfinish:l,oncancel:p,...y}=M(ot,this.options);this.properties=M(de,i);let c=this.targets.values(),u=[...new Set([...c,...U(a),...U(s)])];this.targets.clear(),u.forEach((m,E)=>{this.targets.set(E,m),this.targetIndexes.set(m,E)});let f=this.targets.size,g=this.createArrayOfComputedOptions(i,f);if(this.createAnimations({arrOfComputedOptions:g,padEndDelay:n,oldCSSProperties:y,onfinish:l,oncancel:p,timeline:o},f),f<=0&&(this.maxSpeed==1/0&&(this.maxSpeed=Number(this.options.speed)),this.minDelay==1/0&&(this.minDelay=Number(this.options.delay)+Number(this.options.timelineOffset)),this.totalDuration==-1/0&&(this.totalDuration=Number(this.options.duration))),this.mainAnimation?(this.mainkeyframeEffect?.updateTiming?.({duration:this.totalDuration}),(!this.mainkeyframeEffect.setKeyframes||!this.mainkeyframeEffect.updateTiming)&&console.warn("@okikio/animate - `KeyframeEffect.setKeyframes` and/or `KeyframeEffect.updateTiming` are not supported in this browser.")):(this.mainkeyframeEffect=new KeyframeEffect(this.mainElement,null,{duration:this.totalDuration}),this.mainAnimation=new Animation(this.mainkeyframeEffect,o)),this.mainAnimation.playbackRate=this.maxSpeed,this.mainAnimation.onfinish=()=>{if(this.mainAnimation){let m=this.getPlayState();this.is(m)||this.emit("playstate-change",m,this),this.loop(),this.stopLoop()}this.emit("finish",this)},this.mainAnimation.oncancel=()=>{if(this.mainAnimation){let m=this.getPlayState();this.is(m)||this.emit("playstate-change",m,this),this.loop(),this.stopLoop()}this.emit("cancel",this)},r){let m=window.setTimeout(()=>{this.emit("begin",this),m=window.clearTimeout(m)},0);this.play()}else this.pause()}catch(i){this.emit("error",i)}}add(t){let i=this.getProgress(),n=this.is("running"),r=this.is("paused");this.updateOptions({target:t}),this.setProgress(i),n?this.play():r&&this.pause()}removeTarget(t){let i=this.keyframeEffects.get(t);this.animations.delete(i),i=null,this.computedKeyframes.delete(t),this.computedOptions.delete(t),this.keyframeEffects.delete(t);let n=this.targetIndexes.get(t);this.targets.delete(n),this.targetIndexes.delete(t)}remove(t){this.removeTarget(t);let i=new Set([].concat(this.targets.values()));this.options.target=[...i],this.options.targets=[],i.clear(),i=null;let n=this.getProgress(),r=this.is("running"),s=this.is("paused");this.updateOptions(),r?this.play():s&&this.pause(),this.setProgress(n)}on(t,i,n){return this.emitter?.on?.(t,i,n??this),this.emitter.getEvent("update").length>0&&(d.RUNNING.add(this),d.animationFrame==null&&d.requestFrame()),this}off(t,i,n){return this.emitter?.off?.(t,i,n??this),this}emit(t,...i){return this.emitter?.emit?.(t,...i),this}toJSON(){return this.options}get[Symbol.toStringTag](){return"Animate"}},j=d;j.pauseOnPageHidden=!0,j.RUNNING=new Set;var ri=(e={})=>new j(e);var Mt=0,Ft=()=>{let e=document.createElement("div");return e.id=`empty-animate-el-${Mt++}`,e.style.setProperty("display","none"),document.body.appendChild(e),e},Lt=class extends j{constructor(e={}){super(e)}stop(){this.targets.forEach(e=>e?.remove?.()),super.stop()}},Nt=(e={})=>{let t=Ft(),{target:i,easing:n,decimal:r,numPoints:s,...a}=be(e),o=je(de,a),l=n;if(typeof n=="string"){let c=ye(n);ve.includes(c)||["linear","steps","step-start","step-end"].includes(c)?l=he(n):$.includes(c)?l=fe(n):l=n}let p=typeof l=="function"?tt({opacity:[0,1],easing:n,decimal:r,numPoints:s}):{opacity:[0,1],easing:n};return new Lt({target:t,...p,...o})},mi=(e={},t="attribute")=>{let i=be(e),n=M([...de,"opacity","decimal","numPoints"],i),r=Nt(i),{target:s,targets:a}=i,o=[...new Set([...U(a),...U(s)])];try{let l=o.length,p=r.targets.get(0),y=getComputedStyle(p);o.forEach((c,u)=>{let f=/style/i.test(t)?getComputedStyle(c):null;O(n,(g,m)=>{let E=/style/i.test(t)?f?.getPropertyValue(m):c.getAttribute(m);r.on("update",()=>{let S=Number(y.getPropertyValue("opacity")),h;typeof g=="function"?h=g(S,u,l,c):h=ge(S,Array.isArray(g)?g:[E,g],e.decimal),/style/i.test(t)?c.style.setProperty(m,""+h):c.setAttribute(m,""+h)})})})}catch(l){r?.stopLoop(),console.error(l)}return r};export{de as ALL_TIMING_KEYS,j as Animate,tt as ApplyCustomEasing,pe as Back,Be as Bezier,ue as Bounce,K as CSSArrValue,Ue as CSSPXDataType,J as CSSValue,le as Circ,ye as ComplexEasingSyntax,kt as ComplexStrtoArr,ne as Cubic,et as CustomEasing,Je as CustomEasingOptions,at as DefaultAnimationOptions,Lt as DestroyableAnimate,st as EASINGS,vt as EFFECTS,A as EaseInOut,C as EaseOut,k as EaseOutIn,Ie as EasingDurationCache,$ as EasingFunctionKeys,D as EasingFunctions,ve as EasingKeys,Ot as EasingPts,me as Elastic,ae as Expo,ot as FUNCTION_SUPPORTED_TIMING_KEYS,he as GetEase,fe as GetEasingFunction,St as INTINITE_LOOP_LIMIT,Ve as KeyframeParse,wt as NOT_FUNCTION_SUPPORTED_TIMING_KEYS,ze as ParseCSSProperties,Re as ParseTransformableCSSKeyframes,He as ParseTransformableCSSProperties,ie as Quad,re as Quart,se as Quint,oe as Sine,G as Spring,Yt as SpringEasing,Pe as Steps,Ce as TransformFunctionNames,De as TransformFunctions,Fe as TweenCache,Mt as UIDCount,xe as UnitDEG,T as UnitDEGCSSValue,X as UnitLess,F as UnitLessCSSValue,Te as UnitPX,x as UnitPXCSSValue,Ee as addCSSUnit,ri as animate,Pt as computeOption,Ft as createEmptyEl,qe as createTransformProperty,ce as easein,Et as getEasingDuration,It as getElements,U as getTargets,At as interpolateColor,ge as interpolateComplex,we as interpolateNumber,Ct as interpolateString,xt as interpolateUsingIndex,Xe as isNumberLike,L as limit,rt as mapAnimationOptions,Ze as parseEasingParameters,B as parseOffset,be as parseOptions,$t as registerEasingFunction,Wt as registerEasingFunctions,Tt as scale,Qe as toFixed,Me as trim,Nt as tween,mi as tweenAttr};
