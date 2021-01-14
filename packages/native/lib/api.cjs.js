var B=Object.defineProperty;var mt=r=>B(r,"__esModule",{value:!0});var gt=(r,t)=>{mt(r);for(var e in t)B(r,e,{get:t[e],enumerable:!0})};gt(exports,{AdvancedManager:()=>w,Animate:()=>R,App:()=>it,CONFIG_DEFAULTS:()=>W,DefaultAnimationOptions:()=>G,Event:()=>v,EventEmitter:()=>T,HistoryManager:()=>X,Manager:()=>h,ManagerItem:()=>x,PARSER:()=>Z,PJAX:()=>rt,Page:()=>N,PageManager:()=>tt,Router:()=>nt,Service:()=>g,ServiceManager:()=>H,TransitionManager:()=>et,animate:()=>yt,asyncMethodCall:()=>J,changeState:()=>Q,clean:()=>U,computeValue:()=>j,easings:()=>ot,equal:()=>S,getConfig:()=>u,getEase:()=>at,getElements:()=>st,getHash:()=>bt,getHashedPath:()=>b,getTargets:()=>F,hashAction:()=>D,mapObject:()=>V,methodCall:()=>A,newConfig:()=>_,newCoords:()=>d,newListener:()=>z,newState:()=>k,newURL:()=>c,toAttr:()=>Y});var W={wrapperAttr:"wrapper",noAjaxLinkAttr:"no-ajax-link",noPrefetchAttr:"no-prefetch",headers:[["x-partial","true"]],preventSelfAttr:'prevent="self"',preventAllAttr:'prevent="all"',transitionAttr:"transition",blockAttr:"block",timeout:3e4},_=r=>Object.assign({...W},r),Y=(r,t,e=!0)=>{let{prefix:i}=r,n=`data${i?"-"+i:""}-${t}`;return e?`[${n}]`:n},u=(r,t,e=!0)=>{if(typeof t!="string")return r;let i=r[t];return typeof i=="string"?Y(r,i,e):i};var h=class{constructor(t){this.map=new Map(t)}getMap(){return this.map}get(t){return this.map.get(t)}keys(){return Array.from(this.map.keys())}values(){return Array.from(this.map.values())}set(t,e){return this.map.set(t,e),this}add(t){let i=this.size;return this.set(i,t),this}get size(){return this.map.size}get length(){return this.map.size}last(t=1){let e=this.keys()[this.size-t];return this.get(e)}delete(t){return this.map.delete(t)}remove(t){return this.map.delete(t),this}clear(){return this.map.clear(),this}has(t){return this.map.has(t)}entries(){return this.map.entries()}forEach(t,e){return this.map.forEach(t,e),this}[Symbol.iterator](){return this.entries()}},A=(r,t,...e)=>{r.forEach(i=>{i[t](...e)})},J=async(r,t,...e)=>{for(let[,i]of r)await i[t](...e)};var x=class{constructor(){}install(){}register(t,e){return this.manager=t,this.app=t.app,this.config=t.config,this.emitter=t.emitter,this.key=e,this.install(),this}uninstall(){}unregister(){this.uninstall(),this.manager.remove(this.key),this.key=void 0,this.manager=void 0,this.app=void 0,this.config=void 0,this.emitter=void 0}},w=class extends h{constructor(t){super();this.app=t,this.config=t.config,this.emitter=t.emitter}set(t,e){return super.set(t,e),e.register(this,t),this}};var c=(r=window.location.href)=>r instanceof URL?r:new URL(r,window.location.origin),b=r=>`${r.pathname}${r.hash}`,bt=r=>r.hash.slice(1),U=r=>r.toString().replace(/(\/#.*|\/|#.*)$/,""),S=(r,t)=>{let e=c(r),i=c(t);return U(e)===U(i)};var g=class extends x{init(){}boot(){this.initEvents()}initEvents(){}stopEvents(){}stop(){this.stopEvents(),this.unregister()}},H=class extends w{constructor(t){super(t)}init(){return A(this,"init"),this}boot(){return A(this,"boot"),this}stop(){return A(this,"stop"),this}};var d=(r=window.scrollX,t=window.scrollY)=>({x:r,y:t}),k=(r={url:b(c()),index:0,transition:"default",data:{scroll:d(),trigger:"HistoryManager"}})=>r,X=class extends g{constructor(){super(...arguments);this.pointer=-1}init(){this.states=[];let t=k();this.add(t,"replace")}get(t){return this.states[t]}add(t,e="push"){let i=k(t),n=this.length;this.states.push({...i}),this.pointer=n;let s={index:this.pointer,states:[...this.states]};return Q(e,i,s),this}remove(t){return t?this.states.splice(t,1):this.states.pop(),this.pointer--,this}replace(t){return this.states=t,this}set(t,e){return this.states[t]=e}get current(){return this.get(this.pointer)}get last(){return this.get(this.length-1)}get previous(){return this.pointer<1?null:this.get(this.pointer-1)}get length(){return this.states.length}},Q=(r,t,e)=>{let i=b(c(t.url)),n=[e,"",i];if(window.history)switch(r){case"push":window.history.pushState.apply(window.history,n);break;case"replace":window.history.replaceState.apply(window.history,n);break}};var Z=new DOMParser,N=class extends x{constructor(t=c(),e=document){super();this.url=t,typeof e=="string"?this.data=e:this.dom=e||document}build(){if(this.dom instanceof Node||(this.dom=Z.parseFromString(this.data,"text/html")),!(this.body instanceof Node)){let{title:t,head:e,body:i}=this.dom;this.title=t,this.head=e,this.body=i,this.wrapper=this.body.querySelector(this.wrapperAttr)}}install(){this.wrapperAttr=u(this.config,"wrapperAttr")}uninstall(){this.url=void 0,this.title=void 0,this.head=void 0,this.body=void 0,this.dom=void 0,this.wrapper=void 0,this.data=void 0,this.wrapperAttr=void 0}},tt=class extends g{constructor(){super(...arguments);this.loading=new h}install(){this.pages=new w(this.app),this.maxPages=this.config.maxPages??5;let t=c().pathname;this.set(t,new N),t=void 0}get(t){return this.pages.get(t)}add(t){return this.pages.add(t),this}set(t,e){return this.pages.set(t,e),this}remove(t){return this.pages.remove(t),this}has(t){return this.pages.has(t)}clear(){return this.pages.clear(),this}get size(){return this.pages.size}keys(){return this.pages.keys()}async load(t=c()){let e=c(t),i=e.pathname,n,s;if(this.has(i))return n=this.get(i),Promise.resolve(n);this.loading.has(i)?s=this.loading.get(i):(s=this.request(i),this.loading.set(i,s));let a=await s;if(this.loading.remove(i),n=new N(e,a),this.set(i,n),this.size>this.maxPages){let l=c(),o=this.keys(),p=S(l,o[0])?o[1]:o[0],m=this.get(p);m.unregister(),m=void 0,o=void 0,l=void 0,p=void 0}return n}async request(t){let e=new Headers(u(this.config,"headers")),i=window.setTimeout(()=>{throw window.clearTimeout(i),"Request Timed Out!"},u(this.config,"timeout"));try{let n=await fetch(t,{mode:"same-origin",method:"GET",headers:e,cache:"default",credentials:"same-origin"});if(window.clearTimeout(i),n.status>=200&&n.status<300)return await n.text();throw new Error(n.statusText||""+n.status)}catch(n){throw window.clearTimeout(i),n}}};var z=({callback:r=()=>{},scope:t=null,name:e="event"})=>({callback:r,scope:t,name:e}),v=class extends h{constructor(t="event"){super();this.name=t}},T=class extends h{constructor(){super()}getEvent(t){let e=this.get(t);return e instanceof v?e:(this.set(t,new v(t)),this.get(t))}newListener(t,e,i){let n=this.getEvent(t);return n.add(z({name:t,callback:e,scope:i})),n}on(t,e,i){if(typeof t=="undefined")return this;typeof t=="string"&&(t=t.trim().split(/\s/g));let n,s,a=typeof t=="object"&&!Array.isArray(t),l=a?e:i;return a||(s=e),Object.keys(t).forEach(o=>{a?(n=o,s=t[o]):n=t[o],this.newListener(n,s,l)},this),this}removeListener(t,e,i){let n=this.get(t);if(n instanceof v&&e){let s=z({name:t,callback:e,scope:i});n.forEach((a,l)=>{if(a.callback===s.callback&&a.scope===s.scope)return n.remove(l)})}return n}off(t,e,i){if(typeof t=="undefined")return this;typeof t=="string"&&(t=t.trim().split(/\s/g));let n,s,a=typeof t=="object"&&!Array.isArray(t),l=a?e:i;return a||(s=e),Object.keys(t).forEach(o=>{a?(n=o,s=t[o]):n=t[o],typeof s=="function"?this.removeListener(n,s,l):this.remove(n)},this),this}emit(t,...e){return typeof t=="undefined"?this:(typeof t=="string"&&(t=t.trim().split(/\s/g)),t.forEach(i=>{let n=this.get(i);n instanceof v&&n.forEach(s=>{let{callback:a,scope:l}=s;a.apply(l,e)})},this),this)}clear(){return A(this,"clear"),super.clear(),this}};var D=(r,t=window.location.hash)=>{try{let e=t[0]=="#"?t:c(t).hash;if(e.length>1){let i=document.getElementById(e.slice(1));if(i)return d(i.offsetLeft,i.offsetTop)}}catch(e){console.warn("[hashAction] error",e)}return r??d(0,0)},ft={name:"default",scrollable:!0,out({done:r}){r()},in({scroll:r,done:t}){window.scroll(r.x,r.y),t()}},et=class extends g{constructor(t){super();this._arg=t}install(){super.install();let t=this._arg&&this._arg.length?this._arg:u(this.config,"transitions")??[];t=[["default",ft]].concat(t),this.transitions=new h(t)}get(t){return this.transitions.get(t)}set(t,e){return this.transitions.set(t,e),this}add(t){return this.transitions.add(t),this}has(t){return this.transitions.has(t)}async animate(t,e){let i=this.transitions.get(t),n=e.scroll,s=e.ignoreHashAction;if(!("wrapper"in e.oldPage)||!("wrapper"in e.newPage))throw`[Page] either oldPage or newPage aren't instances of the Page Class.
 ${{newPage:e.newPage,oldPage:e.oldPage}}`;document.title=""+e.newPage.title;let a=e.oldPage.wrapper,l=e.newPage.wrapper;if(!(a instanceof Node)||!(l instanceof Node))throw`[Wrapper] the wrapper from the ${l instanceof Node?"current":"next"} page cannot be found. The wrapper must be an element that has the attribute ${u(this.config,"wrapperAttr")}.`;return i.init&&i?.init(e),this.emitter.emit("BEFORE_TRANSITION_OUT"),i.out&&await new Promise(o=>{i.out.call(i,{...e,from:e.oldPage,trigger:e.trigger,done:o})?.then(o)}),this.emitter.emit("AFTER_TRANSITION_OUT"),await new Promise(o=>{a.insertAdjacentElement("beforebegin",l),this.emitter.emit("CONTENT_INSERT"),!s&&!/back|popstate|forward/.test(e.trigger)&&(n=D(n)),o()}),await new Promise(o=>{a.remove(),a=void 0,l=void 0,this.emitter.emit("CONTENT_REPLACED"),o()}),this.emitter.emit("BEFORE_TRANSITION_IN"),i.in&&await new Promise(async o=>{i.in.call(i,{...e,from:e.oldPage,to:e.newPage,trigger:e.trigger,scroll:n,done:o})?.then(o)}),this.emitter.emit("AFTER_TRANSITION_IN"),i}};var it=class{constructor(t={}){this.register(t)}register(t={}){this.config=_(t),this.emitter=new T,this.services=new H(this);let e=(()=>{document.removeEventListener("DOMContentLoaded",e),window.removeEventListener("load",e),this.emitter.emit("READY ready")}).bind(this);return document.addEventListener("DOMContentLoaded",e),window.addEventListener("load",e),this}get(t){return this.services.get(t)}set(t,e){return this.services.set(t,e),this}add(t){return this.services.add(t),this}boot(){return this.services.init(),this.services.boot(),this}stop(){return this.services.stop(),this.emitter.clear(),this}on(t,e){return this.emitter.on(t,e,this),this}off(t,e){return this.emitter.off(t,e,this),this}emit(t,...e){return this.emitter.emit(t,...e),this}};var rt=class extends g{install(){super.install(),this.ignoreURLs=u(this.config,"ignoreURLs")??[],this.prefetchIgnore=u(this.config,"prefetchIgnore")??!1,this.stopOnTransitioning=u(this.config,"stopOnTransitioning")??!1,this.stickyScroll=u(this.config,"stickyScroll")??!1,this.forceOnError=u(this.config,"forceOnError")??!1,this.ignoreHashAction=u(this.config,"ignoreHashAction")??!1}transitionStart(){this.isTransitioning=!0}transitionStop(){this.isTransitioning=!1}init(){this.onHover=this.onHover.bind(this),this.onClick=this.onClick.bind(this),this.onStateChange=this.onStateChange.bind(this)}boot(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),super.boot()}getTransitionName(t){if(!t||!t.getAttribute)return null;let e=t.getAttribute(u(this.config,"transitionAttr",!1));return typeof e=="string"?e:null}validLink(t,e,i){let n=!window.history.pushState,s=!t||!i,a=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey,l=t.hasAttribute("target")&&t.target==="_blank",o=t.protocol!==location.protocol||t.hostname!==location.hostname,p=typeof t.getAttribute("download")=="string",m=t.matches(u(this.config,"preventSelfAttr")),O=Boolean(t.closest(u(this.config,"preventAllAttr"))),L=b(c())===b(c(i));return!(s||n||a||l||o||p||m||O||L)}getHref(t){return t&&t.tagName&&t.tagName.toLowerCase()==="a"&&typeof t.href=="string"?t.href:null}getLink(t){let e=t.target,i=this.getHref(e);for(;e&&!i;)e=e.parentNode,i=this.getHref(e);if(!(!e||!this.validLink(e,t,i)))return e}onClick(t){let e=this.getLink(t);if(!e)return;if(this.isTransitioning&&this.stopOnTransitioning){t.preventDefault(),t.stopPropagation();return}let i=this.getHref(e);this.emitter.emit("ANCHOR_CLICK CLICK",t),this.go({href:i,trigger:e,event:t})}getDirection(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"}force(t){window.location.assign(t)}go({href:t,trigger:e="HistoryManager",event:i}){if(this.isTransitioning&&this.stopOnTransitioning||!(this.manager.has("TransitionManager")&&this.manager.has("HistoryManager")&&this.manager.has("PageManager"))){this.force(t);return}let n=this.manager.get("HistoryManager"),s=d(0,0),a=n.current,l=a.url;if(S(l,t))return;let o;if(i&&i.state){this.emitter.emit("POPSTATE",i);let{state:p}=i,{index:m}=p,L=a.index-m,M=n.get(n.pointer);o=M.transition,s=M.data.scroll,n.replace(p.states),n.pointer=m,e=this.getDirection(L),this.emitter.emit(e==="back"?"POPSTATE_BACK":"POPSTATE_FORWARD",i)}else{o=this.getTransitionName(e),s=d();let p=k({url:t,transition:o,data:{scroll:s}});!this.stickyScroll&&(s=d(0,0)),n.add(p),this.emitter.emit("HISTORY_NEW_ITEM",i)}return i&&(i.stopPropagation(),i.preventDefault()),this.emitter.emit("GO",i),this.load({oldHref:l,href:t,trigger:e,transitionName:o,scroll:s})}async load({oldHref:t,href:e,trigger:i,transitionName:n="default",scroll:s={x:0,y:0}}){try{let a=this.manager.get("PageManager"),l,o;this.emitter.emit("NAVIGATION_START",{oldHref:t,href:e,trigger:i,transitionName:n});try{this.transitionStart(),o=await a.load(t),!(o.dom instanceof Element)&&o.build(),this.emitter.emit("PAGE_LOADING",{href:e,oldPage:o,trigger:i}),l=await a.load(e),await l.build(),this.emitter.emit("PAGE_LOAD_COMPLETE",{newPage:l,oldPage:o,trigger:i})}catch(p){throw`[PJAX] page load error: ${p}`}try{let p=this.manager.get("TransitionManager");this.emitter.emit("TRANSITION_START",n);let m=await p.animate(p.has(n)?n:"default",{oldPage:o,newPage:l,trigger:i,scroll:s,ignoreHashAction:this.ignoreHashAction});m.scrollable||(!this.ignoreHashAction&&!/back|popstate|forward/.test(i)&&(s=D(s)),window.scroll(s.x,s.y)),this.emitter.emit("TRANSITION_END",{transition:m})}catch(p){throw`[PJAX] transition error: ${p}`}this.emitter.emit("NAVIGATION_END",{oldPage:o,newPage:l,trigger:i,transitionName:n})}catch(a){this.forceOnError?this.force(e):console.warn(a)}finally{this.transitionStop()}}ignoredURL({pathname:t}){return this.ignoreURLs.length&&this.ignoreURLs.some(e=>typeof e=="string"?e===t:e.exec(t)!==null)}onHover(t){let e=this.getLink(t);if(!e||!this.manager.has("PageManager"))return;let i=this.manager.get("PageManager"),n=c(this.getHref(e)),s=n.pathname;if(!(this.ignoredURL(n)||i.has(s))){this.emitter.emit("ANCHOR_HOVER HOVER",t);try{i.load(n)}catch(a){console.warn("[PJAX] prefetch error,",a)}}}onStateChange(t){this.go({href:window.location.href,trigger:"popstate",event:t})}initEvents(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.onHover),document.addEventListener("touchstart",this.onHover)),document.addEventListener("click",this.onClick),window.addEventListener("popstate",this.onStateChange)}stopEvents(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.onHover),document.removeEventListener("touchstart",this.onHover)),document.removeEventListener("click",this.onClick),window.removeEventListener("popstate",this.onStateChange)}};var nt=class extends g{constructor(t=[]){super();this.routes=new h;for(let e of t)this.add(e)}add({path:t,method:e}){let i=this.parse(t);return this.routes.set(i,e),this}parsePath(t){if(typeof t=="string")return new RegExp(t,"i");if(t instanceof RegExp||typeof t=="boolean")return t;throw"[Router] only regular expressions, strings and booleans are accepted as paths."}isPath(t){return typeof t=="string"||t instanceof RegExp||typeof t=="boolean"}parse(t){let e=t,i={from:/(.*)/g,to:/(.*)/g};if(this.isPath(t))i={from:!0,to:t};else if(this.isPath(e.from)&&this.isPath(e.to))i=e;else throw"[Router] path is neither a string, regular expression, or a { from, to } object.";let{from:n,to:s}=i;return{from:this.parsePath(n),to:this.parsePath(s)}}route(){if(this.manager.has("HistoryManager")){let t=this.manager.get("HistoryManager"),e=b(c((t.length>1?t.previous:t.current).url)),i=b(c());this.routes.forEach((n,s)=>{let a=s.from,l=s.to;if(typeof a=="boolean"&&typeof l=="boolean")throw`[Router] path ({ from: ${a}, to: ${l} }) is not valid, remember paths can only be strings, regular expressions, or a boolean; however, both the from and to paths cannot be both booleans.`;let o=a,p=l;a instanceof RegExp&&a.test(e)&&(o=a.exec(e)),l instanceof RegExp&&l.test(i)&&(p=l.exec(i)),(Array.isArray(p)&&Array.isArray(o)||Array.isArray(p)&&typeof o=="boolean"&&o||Array.isArray(o)&&typeof p=="boolean"&&p)&&n({from:o,to:p,path:{from:e,to:i}})})}else console.warn("[Route] HistoryManager is missing.")}initEvents(){this.emitter.on("READY",this.route,this),this.emitter.on("CONTENT_REPLACED",this.route,this)}stopEvents(){this.emitter.off("READY",this.route,this),this.emitter.off("CONTENT_REPLACED",this.route,this)}};var st=r=>typeof r=="string"?Array.from(document.querySelectorAll(r)):[r],dt=r=>[].concat(...r),F=r=>Array.isArray(r)?dt(r.map(F)):typeof r=="string"||r instanceof Node?st(r):r instanceof NodeList||r instanceof HTMLCollection?Array.from(r):[],j=(r,t,e)=>typeof r=="function"?r.apply(e,t):r,V=(r,t,e)=>{let i,n,s={},a=Object.keys(r);for(let l=0,o=a.length;l<o;l++)i=a[l],n=r[i],s[i]=j(n,t,e);return s},ot={in:"ease-in",out:"ease-out","in-out":"ease-in-out","in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","in-out-expo":"cubic-bezier(1, 0, 0, 1)","in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},at=r=>/^(in|out)/.test(r)?ot[r]:r,G={keyframes:[],loop:1,delay:0,speed:1,endDelay:0,easing:"ease",autoplay:!0,duration:1e3,fillMode:"auto",direction:"normal",extend:{}},R=class{constructor(t={}){this.options={};this.targets=[];this.properties={};this.animations=new h;this.totalDuration=0;this.minDelay=0;this.computedOptions=new h;this.emitter=new T;try{let{options:e,...i}=t,n=e instanceof R?e.getOptions():Array.isArray(e)?e?.[0]?.getOptions():e;this.options=Object.assign({},G,n,i),this.loop=this.loop.bind(this);let{loop:s,delay:a,speed:l,easing:o,endDelay:p,duration:m,direction:O,fillMode:L,onfinish:M,target:lt,keyframes:pt,autoplay:ct,extend:ut,...ht}=this.options;this.mainElement=document.createElement("div"),this.targets=F(lt),this.properties=ht;let q=[],I=this.targets.length,C;for(let y=0;y<I;y++){let E=this.targets[y],f={easing:typeof o=="string"?at(o):o,iterations:s===!0?Infinity:s,direction:O,endDelay:p,duration:m,delay:a,fill:L,...ut},K=j(pt,[y,I,E],this);C=K.length?K:this.properties,f=V(f,[y,I,E],this),K.length>0||(C=V(C,[y,I,E],this));let $=f.delay+f.duration*f.iterations+f.endDelay;this.totalDuration<$&&(this.totalDuration=$);let P=E.animate(C,f);P.onfinish=()=>{typeof M=="function"&&M.call(this,E,y,I,P),this.emit("finish",E,y,I,P)},this.computedOptions.set(P,f),this.animations.set(E,P),q.push(f.delay)}this.mainAnimation=this.mainElement.animate([{opacity:"0"},{opacity:"1"}],{duration:this.totalDuration,easing:"linear"}),this.minDelay=Math.min(...q),this.setSpeed(l),ct?this.play():this.pause(),this.promise=this.newPromise(),this.mainAnimation.onfinish=()=>{this.emit("complete",this),this.stopLoop()}}catch(e){this.emit("error",e)}}newPromise(){return new Promise((t,e)=>{this.on("complete",()=>t([this])),this.on("error",i=>e(i))})}then(t,e){return t=t?.bind(this),e=e?.bind(this),this.promise.then(t,e),this}catch(t){return t=t?.bind(this),this.promise.catch(t),this}finally(t){return t=t?.bind(this),this.promise.finally(t),this}loop(){this.stopLoop(),this.emit("update",this.getProgress(),this),this.animationFrame=window.requestAnimationFrame(this.loop)}stopLoop(){window.cancelAnimationFrame(this.animationFrame)}all(t){return t(this.mainAnimation),this.animations.forEach(e=>t(e)),this}beginEvent(){if(this.getProgress()==0){let t=window.setTimeout(()=>{this.emit("begin",this),t=window.clearTimeout(t)},this.minDelay)}}play(){let t=this.getPlayState();return this.beginEvent(),this.all(e=>e.play()),this.emit("play",t,this),this.loop(),this}pause(){let t=this.getPlayState();return this.all(e=>e.pause()),this.emit("pause",t,this),this.stopLoop(),this.animationFrame=void 0,this}reset(){return this.setProgress(0),this.beginEvent(),this.options.autoplay?this.play():this.pause(),this}cancel(){return this.all(t=>t.cancel()),this.stopLoop(),this}finish(){return this.all(t=>t.finish()),this.stopLoop(),this}stop(){for(this.cancel(),this.animations.clear();this.targets.length;)this.targets.pop();this.mainElement=void 0,this.emit("stop")}getTargets(){return this.targets}getAnimation(t){return this.animations.get(t)}getTiming(t){let e=t instanceof Animation?t:this.getAnimation(t),i=this.computedOptions.get(e)??{},n=e.effect?.getTiming()??{},s=this.getOptions();return{...G,...s,...n,...i}}getTotalDuration(){return this.totalDuration}getCurrentTime(){return this.mainAnimation.currentTime}getProgress(){return this.getCurrentTime()/this.totalDuration*100}getSpeed(){return this.mainAnimation.playbackRate}getPlayState(){return this.mainAnimation.playState}getOptions(){return this.options}setCurrentTime(t){return this.all(e=>{e.currentTime=t}),this.emit("update",this.getProgress()),this}setProgress(t){let e=t/100*this.totalDuration;return this.setCurrentTime(e),this}setSpeed(t=1){return this.all(e=>{e.playbackRate=t}),this}on(t,e,i){return this.emitter.on(t,e,i??this),this}off(t,e,i){return this.emitter.off(t,e,i??this),this}emit(t,...e){return this.emitter.emit(t,...e),this}toJSON(){return this.getOptions()}get[Symbol.toStringTag](){return"Animate"}},yt=(r={})=>new R(r);
//# sourceMappingURL=api.cjs.js.map
