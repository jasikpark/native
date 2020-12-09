var pt={wrapperAttr:"wrapper",noAjaxLinkAttr:"no-ajax-link",noPrefetchAttr:"no-prefetch",headers:[["x-partial","true"]],preventSelfAttr:'prevent="self"',preventAllAttr:'prevent="all"',transitionAttr:"transition",blockAttr:"block",timeout:3e4},M=class{constructor(t){this.config=Object.assign({...pt},t)}toAttr(t,e=!0){let{prefix:i}=this.config,n=`data${i?"-"+i:""}-${t}`;return e?`[${n}]`:n}getConfig(t,e=!0){if(typeof t!="string")return this.config;let i=this.config[t];return typeof i=="string"?this.toAttr(i,e):i}};var h=class{constructor(t){this.map=new Map(t)}getMap(){return this.map}get(t){return this.map.get(t)}keys(){return Array.from(this.map.keys())}values(){return Array.from(this.map.values())}set(t,e){return this.map.set(t,e),this}add(t){let e=this.size,i=e;return this.set(i,t),this}get size(){return this.map.size}get length(){return this.map.size}last(t=1){let e=this.keys()[this.size-t];return this.get(e)}delete(t){return this.map.delete(t)}remove(t){return this.map.delete(t),this}clear(){return this.map.clear(),this}has(t){return this.map.has(t)}entries(){return this.map.entries()}forEach(t=(...i)=>{},e){return this.map.forEach(t,e),this}[Symbol.iterator](){return this.entries()}},x=(r,t,...e)=>{r.forEach(i=>{i[t](...e)})},I=class{constructor(){}install(){}register(t,e){return this.manager=t,this.app=t.app,this.config=t.config,this.emitter=t.emitter,this.key=e,this.install(),this}uninstall(){}unregister(){this.uninstall(),this.manager.delete(this.key),this.key=void 0,this.manager=void 0,this.app=void 0,this.config=void 0,this.emitter=void 0}},v=class extends h{constructor(t){super();this.app=t,this.config=t.config,this.emitter=t.emitter}set(t,e){return super.set(t,e),e.register(this,t),this}};var p=(r=window.location.href)=>r instanceof URL?r:new URL(r,window.location.origin),m=r=>`${r.pathname}${r.hash}`,W=r=>r.toString().replace(/(\/#.*|\/|#.*)$/,""),C=(r,t)=>{let e=p(r),i=p(t);return W(e)===W(i)};var S=(r=window.scrollX,t=window.scrollY)=>({x:r,y:t}),k=(r={url:m(p()),index:0,transition:"default",data:{scroll:S(),trigger:"HistoryManager"}})=>r,F=class{constructor(){this.pointer=-1;this.states=[];let t=k();this.add(t,"replace")}get(t){return this.states[t]}add(t,e="push"){let i=k(t),n=this.length;this.states.push({...i}),this.pointer=n;let a={index:this.pointer,states:[...this.states]};return ct(e,i,a),this}remove(t){return t?this.states.splice(t,1):this.states.pop(),this.pointer--,this}replace(t){return this.states=t,this}set(t,e){return this.states[t]=e}get current(){return this.get(this.pointer)}get last(){return this.get(this.length-1)}get previous(){return this.pointer<1?null:this.get(this.pointer-1)}get length(){return this.states.length}},ct=(r,t,e)=>{let i=m(p(t.url)),n=[e,"",i];if(window.history)switch(r){case"push":window.history.pushState.apply(window.history,n);break;case"replace":window.history.replaceState.apply(window.history,n);break}};var ut=new DOMParser,A=class extends I{constructor(t=p(),e=document){super();this.url=t,typeof e=="string"?this.data=e:this.dom=e||document}async build(){if(this.dom instanceof Node||(this.dom=ut.parseFromString(this.data,"text/html")),!(this.body instanceof Node)){let{title:t,head:e,body:i}=this.dom;this.title=t,this.head=e,this.body=i,this.wrapper=this.body.querySelector(this.wrapperAttr)}}install(){this.wrapperAttr=this.config.getConfig("wrapperAttr")}uninstall(){this.url=void 0,this.title=void 0,this.head=void 0,this.body=void 0,this.dom=void 0,this.wrapper=void 0,this.data=void 0,this.wrapperAttr=void 0}},D=class extends v{constructor(t){super(t);this.loading=new h;this.maxPages=5;let e=p().pathname;this.set(e,new A),e=void 0}async load(t=p()){let e=p(t),i=e.pathname,n,a;if(this.has(i))return n=this.get(i),Promise.resolve(n);this.loading.has(i)?a=this.loading.get(i):(a=this.request(i),this.loading.set(i,a));let o=await a;if(this.loading.delete(i),n=new A(e,o),this.set(i,n),this.size>this.maxPages){let s=p(),l=this.keys(),u=C(s,l[0])?l[1]:l[0],f=this.get(u);f.unregister(),f=void 0,l=void 0,s=void 0,u=void 0}return n}async request(t){let e=new Headers(this.config.getConfig("headers")),i=window.setTimeout(()=>{throw window.clearTimeout(i),"Request Timed Out!"},this.config.getConfig("timeout"));try{let n=await fetch(t,{mode:"same-origin",method:"GET",headers:e,cache:"default",credentials:"same-origin"});if(window.clearTimeout(i),n.status>=200&&n.status<300)return await n.text();let a=new Error(n.statusText||""+n.status);throw a}catch(n){throw window.clearTimeout(i),n}}};var J=({callback:r=()=>{},scope:t=null,name:e="event"})=>({callback:r,scope:t,name:e}),L=class extends h{constructor(t="event"){super();this.name=t}},P=class extends h{constructor(){super()}getEvent(t){let e=this.get(t);return e instanceof L?e:(this.set(t,new L(t)),this.get(t))}newListener(t,e,i){let n=this.getEvent(t);return n.add(J({name:t,callback:e,scope:i})),n}on(t,e,i){if(typeof t=="undefined")return this;typeof t=="string"&&(t=t.trim().split(/\s/g));let n,a,o=typeof t=="object"&&!Array.isArray(t),s=o?e:i;return o||(a=e),Object.keys(t).forEach(l=>{o?(n=l,a=t[l]):n=t[l],this.newListener(n,a,s)},this),this}removeListener(t,e,i){let n=this.get(t);if(n instanceof L&&e){let a=J({name:t,callback:e,scope:i});n.forEach((o,s)=>{if(o.callback===a.callback&&o.scope===a.scope)return n.delete(s)})}return n}off(t,e,i){if(typeof t=="undefined")return this;typeof t=="string"&&(t=t.trim().split(/\s/g));let n,a,o=typeof t=="object"&&!Array.isArray(t),s=o?e:i;return o||(a=e),Object.keys(t).forEach(l=>{o?(n=l,a=t[l]):n=t[l],typeof a=="function"?this.removeListener(n,a,s):this.delete(n)},this),this}emit(t,...e){return typeof t=="undefined"?this:(typeof t=="string"&&(t=t.trim().split(/\s/g)),t.forEach(i=>{let n=this.get(i);n instanceof L&&n.forEach(a=>{let{callback:o,scope:s}=a;o.apply(s,e)})},this),this)}};var g=class extends I{install(){let{app:t}=this.manager;this.PageManager=t.pages,this.HistoryManager=t.history,this.ServiceManager=t.services,this.TransitionManager=t.transitions}init(...t){}boot(){this.initEvents()}initEvents(){}stopEvents(){}uninstall(){this.PageManager=void 0,this.HistoryManager=void 0,this.ServiceManager=void 0,this.TransitionManager=void 0}stop(){this.stopEvents(),this.unregister()}},_=class extends v{constructor(t){super(t)}init(){return x(this,"init",this.app),this}boot(){return x(this,"boot",this.app),this}stop(){return x(this,"stop",this.app),this}};var K=class extends g{constructor(){super(...arguments);this.ignoreURLs=[];this.prefetchIgnore=!1;this.isTransitioning=!1;this.stopOnTransitioning=!1;this.stickyScroll=!1;this.forceOnError=!1;this.autoScrollOnHash=!0;this.dontScroll=!1}transitionStart(){this.isTransitioning=!0}transitionStop(){this.isTransitioning=!1}init(){super.init(),this.onHover=this.onHover.bind(this),this.onClick=this.onClick.bind(this),this.onStateChange=this.onStateChange.bind(this)}boot(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),super.boot()}getTransitionName(t){if(!t||!t.getAttribute)return null;let e=t.getAttribute(this.config.getConfig("transitionAttr",!1));return typeof e=="string"?e:null}validLink(t,e,i){let n=!window.history.pushState,a=!t||!i,o=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey,s=t.hasAttribute("target")&&t.target==="_blank",l=t.protocol!==location.protocol||t.hostname!==location.hostname,u=typeof t.getAttribute("download")=="string",f=t.hasAttribute(this.config.getConfig("preventSelfAttr",!1)),w=Boolean(t.closest(this.config.getConfig("preventAllAttr"))),y=f&&w,O=m(p())===m(p(i));return!(a||n||o||s||l||u||y||O)}getHref(t){return t&&t.tagName&&t.tagName.toLowerCase()==="a"&&typeof t.href=="string"?t.href:null}getLink(t){let e=t.target,i=this.getHref(e);for(;e&&!i;)e=e.parentNode,i=this.getHref(e);return!e||!this.validLink(e,t,i)?void 0:e}onClick(t){let e=this.getLink(t);if(!e)return;if(this.isTransitioning&&this.stopOnTransitioning){t.preventDefault(),t.stopPropagation();return}let i=this.getHref(e);this.emitter.emit("ANCHOR_CLICK CLICK",t),this.go({href:i,trigger:e,event:t})}getDirection(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"}force(t){window.location.assign(t)}go({href:t,trigger:e="HistoryManager",event:i}){if(this.isTransitioning&&this.stopOnTransitioning){this.force(t);return}let n={x:0,y:0},a=this.HistoryManager.current,o=a.url;if(C(o,t))return;let s;if(i&&i.state){this.emitter.emit("POPSTATE",i);let{state:l}=i,{index:u}=l,f=a.index,w=f-u;e=this.getDirection(w);let y=this.HistoryManager.get(this.HistoryManager.pointer);s=y.transition,n=y.data.scroll,this.HistoryManager.replace(l.states),this.HistoryManager.pointer=u,e==="back"?this.emitter.emit("POPSTATE_BACK",i):e==="forward"&&this.emitter.emit("POPSTATE_FORWARD",i)}else{s=this.getTransitionName(e)||"default",n=S();let l=k({url:t,transition:s,data:{scroll:n}});this.HistoryManager.add(l),this.emitter.emit("HISTORY_NEW_ITEM",i)}return i&&(i.stopPropagation(),i.preventDefault()),this.emitter.emit("GO",i),this.load({oldHref:o,href:t,trigger:e,transitionName:s,scroll:n})}async load({oldHref:t,href:e,trigger:i,transitionName:n="default",scroll:a={x:0,y:0}}){try{let o=await this.PageManager.load(t);await o.build();let s;this.emitter.emit("PAGE_LOADING",{href:e,oldPage:o,trigger:i});try{try{s=await this.PageManager.load(e),await s.build(),this.transitionStart(),this.emitter.emit("PAGE_LOAD_COMPLETE",{newPage:s,oldPage:o,trigger:i})}catch(l){console.error(`[PJAX] page load error: ${l}`)}this.emitter.emit("NAVIGATION_START",{oldPage:o,newPage:s,trigger:i,transitionName:n});try{this.emitter.emit("TRANSITION_START",n);let l=await this.TransitionManager.boot(n,{oldPage:o,newPage:s,trigger:i,scroll:a});l.scrollable||(/back|popstate|forward/.test(i)||(a=z()),window.scroll(a.x,a.y)),this.emitter.emit("TRANSITION_END",{transition:l})}catch(l){console.error(`[PJAX] transition error: ${l}`)}this.emitter.emit("NAVIGATION_END",{oldPage:o,newPage:s,trigger:i,transitionName:n})}catch(l){throw this.transitionStop(),l}this.transitionStop()}catch(o){this.forceOnError?this.force(e):console.error(o)}}ignoredURL({pathname:t}){return this.ignoreURLs.length&&this.ignoreURLs.some(e=>typeof e=="string"?e===t:e.exec(t)!==null)}onHover(t){let e=this.getLink(t);if(!e)return;let i=p(this.getHref(e)),n=i.pathname;if(this.ignoredURL(i)||this.PageManager.has(n))return;this.emitter.emit("ANCHOR_HOVER HOVER",t);try{this.PageManager.load(i)}catch(a){console.warn("[PJAX] prefetch error,",a)}}onStateChange(t){this.go({href:window.location.href,trigger:"popstate",event:t})}initEvents(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.onHover),document.addEventListener("touchstart",this.onHover)),document.addEventListener("click",this.onClick),window.addEventListener("popstate",this.onStateChange)}stopEvents(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.onHover),document.removeEventListener("touchstart",this.onHover)),document.removeEventListener("click",this.onClick),window.removeEventListener("popstate",this.onStateChange)}},z=(r=window.location.hash)=>{try{let t=r[0]=="#"?r:p(r).hash;if(t.length>1){let e=document.getElementById(t.slice(1));if(e)return S(e.offsetLeft,e.offsetTop)}}catch(t){console.warn("hashAction error",t)}return S(0,0)},q=class extends h{constructor(t){super();this.app=t,this.config=t.config,this.emitter=t.emitter}async boot(t,e){let i=this.get(t),n=e.scroll;if(!(e.oldPage instanceof A)||!(e.newPage instanceof A))throw`[Page] either oldPage or newPage aren't instances of the Page Class.
 ${{newPage:e.newPage,oldPage:e.oldPage}}`;let a=e.oldPage.wrapper,o=e.newPage.wrapper;if(document.title=""+e.newPage.title,!(a instanceof Node)||!(o instanceof Node))throw`[Wrapper] the wrapper from the ${o instanceof Node?"current":"next"} page cannot be found. The wrapper must be an element that has the attribute ${this.config.getConfig("wrapperAttr")}.`;return i.init&&(i==null||i.init(e)),this.emitter.emit("BEFORE_TRANSITION_OUT"),await new Promise(s=>{let l=i.out.call(i,{...e,from:e.oldPage,trigger:e.trigger,done:s});l.then&&l.then(s)}),this.emitter.emit("AFTER_TRANSITION_OUT"),await new Promise(s=>{a.insertAdjacentElement("beforebegin",o),this.emitter.emit("CONTENT_INSERT"),/back|popstate|forward/.test(e.trigger)||(n=z()),s()}),await new Promise(s=>{a.remove(),a=void 0,o=void 0,this.emitter.emit("CONTENT_REPLACED"),s()}),this.emitter.emit("BEFORE_TRANSITION_IN"),await new Promise(s=>{let l=i.in.call(i,{...e,from:e.oldPage,to:e.newPage,trigger:e.trigger,scroll:n,done:s});l.then&&l.then(s)}),this.emitter.emit("AFTER_TRANSITION_IN"),i}};var j=class{constructor(t={}){this.register(t)}register(t={}){this.config=t instanceof M?t:new M(t),this.emitter=new P,this.history=new F,this.pages=new D(this),this.transitions=new q(this),this.services=new _(this);let e=(()=>{document.removeEventListener("DOMContentLoaded",e),window.removeEventListener("load",e),this.emitter.emit("READY ready")}).bind(this);return document.addEventListener("DOMContentLoaded",e),window.addEventListener("load",e),this}get(t,e){switch(t.toLowerCase()){case"service":return this.services.get(e);case"transition":return this.transitions.get(e);case"state":return this.history.get(e);default:throw`Error: can't get type '${t}', it is not a recognized type. Did you spell it correctly.`}}async load(t,e){switch(t.toLowerCase()){case"page":return await this.pages.load(e);default:return Promise.resolve(this.get(t,e))}}setService(t,e){return this.services.set(t,e),this}setTransition(t,e){return this.transitions.set(t,e),this}add(t,e){switch(t.toLowerCase()){case"service":this.services.add(e);break;case"transition":this.transitions.set(e.name,e);break;case"state":this.history.add(e);break;default:throw`Error: can't add type '${t}', it is not a recognized type. Did you spell it correctly.`}return this}boot(){return this.services.init(),this.services.boot(),this}stop(){return this.services.stop(),this}on(t,e){return this.emitter.on(t,e,this),this}off(t,e){return this.emitter.off(t,e,this),this}emit(t,...e){return this.emitter.emit(t,...e),this}};var U=class extends g{constructor(t=[]){super();this.routes=new h;for(let e of t)this.add(e)}add({path:t,method:e}){let i=this.parse(t);return this.routes.set(i,e),this}parsePath(t){if(typeof t=="string")return new RegExp(t,"i");if(t instanceof RegExp||typeof t=="boolean")return t;throw"[Router] only regular expressions, strings and booleans are accepted as paths."}isPath(t){return typeof t=="string"||t instanceof RegExp||typeof t=="boolean"}parse(t){let e=t,i={from:/(.*)/g,to:/(.*)/g};if(this.isPath(t))i={from:!0,to:t};else if(this.isPath(e.from)&&this.isPath(e.to))i=e;else throw"[Router] path is neither a string, regular expression, or a { from, to } object.";let{from:n,to:a}=i;return{from:this.parsePath(n),to:this.parsePath(a)}}route(){let t=this.HistoryManager,e=m(p((t.length>1?t.previous:t.current).url)),i=m(p());this.routes.forEach((n,a)=>{let o=a.from,s=a.to;if(typeof o=="boolean"&&typeof s=="boolean")throw`[Router] path ({ from: ${o}, to: ${s} }) is not valid, remember paths can only be strings, regular expressions, or a boolean; however, both the from and to paths cannot be both booleans.`;let l=o,u=s;o instanceof RegExp&&o.test(e)&&(l=o.exec(e)),s instanceof RegExp&&s.test(i)&&(u=s.exec(i)),(Array.isArray(u)&&Array.isArray(l)||Array.isArray(u)&&typeof l=="boolean"&&l||Array.isArray(l)&&typeof u=="boolean"&&u)&&n({from:l,to:u,path:{from:e,to:i}})})}initEvents(){this.emitter.on("READY",this.route,this),this.emitter.on("CONTENT_REPLACED",this.route,this)}stopEvents(){this.emitter.off("READY",this.route,this),this.emitter.off("CONTENT_REPLACED",this.route,this)}};var ht=r=>typeof r=="string"?Array.from(document.querySelectorAll(r)):[r],mt=r=>Array.isArray(r)?r:typeof r=="string"||r instanceof Node?ht(r):r instanceof NodeList||r instanceof HTMLCollection?Array.from(r):[],Q=(r,t)=>typeof r=="function"?r(...t):r,Z=(r,t)=>{let e,i,n={},a=Object.keys(r);for(let o=0,s=a.length;o<s;o++)e=a[o],i=r[e],n[e]=Q(i,t);return n},gt={ease:"ease",in:"ease-in",out:"ease-out","in-out":"ease-in-out","in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","in-out-expo":"cubic-bezier(1, 0, 0, 1)","in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},ft=r=>/^(ease|in|out)/.test(r)?gt[r]:r,dt={keyframes:[],loop:1,delay:0,speed:1,endDelay:0,easing:"ease",autoplay:!0,duration:1e3,onfinish(){},fillMode:"auto",direction:"normal"},tt=class{constructor(t={}){this.options={};this.targets=[];this.properties={};this.animations=new Map;this.duration=0;this.emitter=new P;let{options:e,...i}=t;this.options=Object.assign({},dt,e,i),this.loop=this.loop.bind(this);let{loop:n,delay:a,speed:o,easing:s,endDelay:l,duration:u,direction:f,fillMode:w,onfinish:y,target:O,keyframes:ot,autoplay:at,...lt}=this.options;this.mainElement=document.createElement("span"),this.targets=mt(O),this.properties=lt;let R;for(let d=0,T=this.targets.length;d<T;d++){let E=this.targets[d],b={easing:ft(s),iterations:n===!0?Infinity:n,direction:f,endDelay:l,duration:u,delay:a,fill:w},N=Q(ot,[d,T,E]);R=N.length?N:this.properties,b=Z(b,[d,T,E]),N.length>0||(R=Z(R,[d,T,E]));let B=b.delay+b.duration*b.iterations+b.endDelay;this.duration<B&&(this.duration=B);let Y=E.animate(R,b);Y.onfinish=()=>{y(E,d,T)},this.animations.set(E,Y)}this.mainAnimation=this.mainElement.animate([{opacity:"0"},{opacity:"1"}],{duration:this.duration,easing:"linear"}),this.setSpeed(o),at?this.play():this.pause(),this.promise=this.newPromise(),this.mainAnimation.onfinish=()=>{this.finish(this.options),window.cancelAnimationFrame(this.animationFrame)}}getTargets(){return this.targets}newPromise(){return new Promise((t,e)=>{try{this.finish=i=>(this.emit("finish",i),t(i))}catch(i){e(i)}})}then(t,e){return this.promise.then(t,e)}catch(t){return this.promise.catch(t)}finally(t){return this.promise.finally(t)}loop(){this.animationFrame=window.requestAnimationFrame(this.loop),this.emit("tick change",this.getCurrentTime())}on(t,e,i){return this.emitter.on(t,e,i),this}off(t,e,i){return this.emitter.off(t,e,i),this}emit(t,...e){return this.emitter.emit(t,...e),this}getAnimation(t){return this.animations.get(t)}play(){return this.mainAnimation.playState!=="finished"&&(this.mainAnimation.play(),this.animationFrame=requestAnimationFrame(this.loop),this.animations.forEach(t=>{t.playState!=="finished"&&t.play()}),this.emit("play")),this}pause(){return this.mainAnimation.playState!=="finished"&&(this.mainAnimation.pause(),window.cancelAnimationFrame(this.animationFrame),this.animations.forEach(t=>{t.playState!=="finished"&&t.pause()}),this.emit("pause")),this}getDuration(){return this.duration}getCurrentTime(){return this.mainAnimation.currentTime}setCurrentTime(t){return this.mainAnimation.currentTime=t,this.animations.forEach(e=>{e.currentTime=t}),this}getProgress(){return this.getCurrentTime()/this.duration}setProgress(t){return this.mainAnimation.currentTime=t*this.duration,this.animations.forEach(e=>{e.currentTime=t*this.duration}),this}getSpeed(){return this.mainAnimation.playbackRate}setSpeed(t=1){return this.mainAnimation.playbackRate=t,this.animations.forEach(e=>{e.playbackRate=t}),this}reset(){this.setCurrentTime(0),this.promise=this.newPromise(),this.options.autoplay?this.play():this.pause()}getPlayState(){return this.mainAnimation.playState}getOptions(){return this.options}toJSON(){return this.getOptions()}},c=(r={})=>new tt(r);var V=class extends g{constructor(){super(...arguments);this.minimalDuration=1e3}init(){super.init(),this.rootElement=document.getElementById("splashscreen"),this.rootElement&&(this.innerEl=this.rootElement.querySelector(".splashscreen-inner"),this.bgEl=this.rootElement.querySelector(".splashscreen-bg")),this.rootElement.style.visibility="visible",this.rootElement.style.pointerEvents="auto"}boot(){this.rootElement&&this.hide()}async hide(){await new Promise(t=>{window.setTimeout(()=>{this.emitter.emit("BEFORE_SPLASHSCREEN_HIDE"),t()},this.minimalDuration)}),await new Promise(async t=>{c({target:this.innerEl,opacity:[1,0],autoplay:!0,duration:500,onfinish(e){e.style.opacity="0"}}),this.emitter.emit("START_SPLASHSCREEN_HIDE"),await this.show(),t()})}async show(){await c({target:this.rootElement,transform:["translateY(0%)","translateY(100%)"],duration:1200,easing:"in-out-cubic"}),this.rootElement.style.transform="translateY(100%)",this.rootElement.style.visibility="hidden",this.rootElement.style.pointerEvents="none"}},G=class extends g{init(){super.init(),this.elements=[...document.querySelectorAll(".intro-animation")]}newPage(){this.init(),this.prepareToShow()}initEvents(){this.emitter.on("BEFORE_SPLASHSCREEN_HIDE",this.prepareToShow,this),this.emitter.on("CONTENT_REPLACED",this.newPage,this),this.emitter.on("START_SPLASHSCREEN_HIDE BEFORE_TRANSITION_IN",this.show,this)}stopEvents(){this.emitter.off("BEFORE_SPLASHSCREEN_HIDE",this.prepareToShow,this),this.emitter.off("CONTENT_REPLACED",this.newPage,this),this.emitter.off("START_SPLASHSCREEN_HIDE BEFORE_TRANSITION_IN",this.show,this)}stop(){requestAnimationFrame(()=>{for(let t of this.elements)t.style.transform="translateY(0px)",t.style.opacity="1"}),super.stop()}prepareToShow(){requestAnimationFrame(()=>{for(let t of this.elements)t.style.transform="translateY(200px)",t.style.opacity="0"})}async show(){return await c({target:this.elements,keyframes:[{transform:"translateY(200px)",opacity:0},{transform:"translateY(0px)",opacity:1}],delay(t){return 300*(t+1)},onfinish(t){requestAnimationFrame(()=>{t.style.transform="translateY(0px)",t.style.opacity="1"})},easing:"out-cubic",duration:650})}},et={name:"default",duration:500,scrollable:!0,out({from:r}){let{duration:t}=this,e=r.wrapper;return new Promise(async i=>{await c({target:e,opacity:[1,0],duration:t,onfinish(n){requestAnimationFrame(()=>{n.style.opacity="0"})}}),i()})},in({to:r,scroll:t}){let{duration:e}=this,i=r.wrapper;return requestAnimationFrame(()=>{i.style.transform="translateX(0%)"}),window.scroll(t.x,t.y),c({target:i,opacity:[0,1],duration:e,onfinish(n){requestAnimationFrame(()=>{n.style.opacity="1",n.style={}})}})}},it={name:"big",delay:200,durationPerAnimation:700,scrollable:!0,init(){this.mainElement=document.getElementById("big-transition"),this.spinnerElement=this.mainElement.querySelector(".spinner"),this.horizontalElements=[...this.mainElement.querySelector("#big-transition-horizontal").querySelectorAll("div")],this.maxLength=this.horizontalElements.length},out({from:r}){let{durationPerAnimation:t,delay:e}=this,i=r.wrapper;return new Promise(async n=>{c({target:i,opacity:[1,0],duration:t,onfinish(s){s.style.opacity="0"}}),this.mainElement.style.opacity="1",this.mainElement.style.visibility="visible",await c({target:this.horizontalElements,keyframes:[{transform:"scaleX(0)"},{transform:"scaleX(1)"}],delay(s){return e*(s+1)},onfinish(s){s.style.transform="scaleX(1)"},easing:"out-cubic",duration:500});let a=500;this.spinnerElement.style.visibility="visible";let o=await c({target:this.spinnerElement,opacity:[0,1],duration:a,onfinish(s){s.style.opacity="1"}});await c({options:o,opacity:[1,0],onfinish(s){s.style.opacity="0"},delay:1500}),this.spinnerElement.style.visibility="hidden",n()})},in({to:r,scroll:t}){let{durationPerAnimation:e,delay:i}=this,n=r.wrapper;return n.style.transform="translateX(0%)",window.scroll(t.x,t.y),new Promise(async a=>{c({target:n,opacity:[0,1],onfinish(o){o.style.opacity="1"},duration:e}),await c({target:this.horizontalElements,keyframes:[{transform:"scaleX(1)"},{transform:"scaleX(0)"}],delay(o){return i*(o+1)},onfinish(o){o.style.transform="scaleX(0)"},easing:"out-cubic",duration:500}),this.mainElement.style.opacity="0",this.mainElement.style.visibility="hidden",a()})}},H={name:"slide",duration:500,direction:"right",scrollable:!0,init(r){let t=r.trigger;t instanceof Node&&t.hasAttribute("data-direction")?this.direction=t.getAttribute("data-direction"):this.direction="right"},out({from:r}){let{duration:t,direction:e}=this,i=r.wrapper;return c({target:i,keyframes:[{transform:"translateX(0%)",opacity:1},{transform:`translateX(${e==="left"?"-":""}25%)`,opacity:0}],duration:t,easing:"in-quint",onfinish:n=>{requestAnimationFrame(()=>{n.style.opacity="0",n.style.transform=`translateX(${e==="left"?"-":""}25%)`})}})},in({to:r,scroll:t}){let{duration:e}=this,i=r.wrapper;return window.scroll(t.x,t.y),c({target:i,keyframes:[{transform:`translateX(${this.direction==="right"?"-":""}25%)`,opacity:0},{transform:"translateX(0%)",opacity:1}],duration:e,easing:"out-quint",onfinish(n){requestAnimationFrame(()=>{n.style.opacity="1",n.style.transform="translateX(0%)"})}})}},rt={...H,name:"slide-left",direction:"left"},nt={...H,name:"slide-right",direction:"right"},X=new j,st,$,bt;X.add("service",new G).add("service",st=new V).setService("router",$=new U).add("service",bt=new K).setTransition("default",et).add("transition",it).add("transition",H).add("transition",rt).add("transition",nt);try{$=X.get("service","router");let r=document.querySelectorAll(".navbar .nav-link");for(let t of r){let e=t;$.add({path:e.getAttribute("data-path")||e.pathname,method(){let i=e.classList.contains("active");i||e.classList.add("active");for(let n of r)n!==e&&n.classList.remove("active")}})}X.boot()}catch(r){st.show(),console.warn("[App] boot failed,",r)}
//# sourceMappingURL=main.js.map
