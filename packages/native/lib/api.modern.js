var G={wrapperAttr:"wrapper",noAjaxLinkAttr:"no-ajax-link",noPrefetchAttr:"no-prefetch",headers:[["x-partial","true"]],preventSelfAttr:'prevent="self"',preventAllAttr:'prevent="all"',transitionAttr:"transition",blockAttr:"block",timeout:3e4},F=r=>Object.assign({...G},r),q=(r,t,e=!0)=>{let{prefix:i}=r,n=`data${i?"-"+i:""}-${t}`;return e?`[${n}]`:n},g=(r,t,e=!0)=>{if(typeof t!="string")return r;let i=r[t];return typeof i=="string"?q(r,i,e):i};var u=class{constructor(t){this.map=new Map(t)}getMap(){return this.map}get(t){return this.map.get(t)}keys(){return Array.from(this.map.keys())}values(){return Array.from(this.map.values())}set(t,e){return this.map.set(t,e),this}add(t){let e=this.size,i=e;return this.set(i,t),this}get size(){return this.map.size}get length(){return this.map.size}last(t=1){let e=this.keys()[this.size-t];return this.get(e)}delete(t){return this.map.delete(t)}remove(t){return this.map.delete(t),this}clear(){return this.map.clear(),this}has(t){return this.map.has(t)}entries(){return this.map.entries()}forEach(t=(...i)=>{},e){return this.map.forEach(t,e),this}[Symbol.iterator](){return this.entries()}},w=(r,t,...e)=>{r.forEach(i=>{i[t](...e)})},$=async(r,t,...e)=>{for(let[,i]of r)await i[t](...e)},v=class{constructor(){}install(){}register(t,e){return this.manager=t,this.app=t.app,this.config=t.config,this.emitter=t.emitter,this.key=e,this.install(),this}uninstall(){}unregister(){this.uninstall(),this.manager.remove(this.key),this.key=void 0,this.manager=void 0,this.app=void 0,this.config=void 0,this.emitter=void 0}},x=class extends u{constructor(t){super();this.app=t,this.config=t.config,this.emitter=t.emitter}set(t,e){return super.set(t,e),e.register(this,t),this}};var c=(r=window.location.href)=>r instanceof URL?r:new URL(r,window.location.origin),b=r=>`${r.pathname}${r.hash}`,pt=r=>r.hash.slice(1),_=r=>r.toString().replace(/(\/#.*|\/|#.*)$/,""),R=(r,t)=>{let e=c(r),i=c(t);return _(e)===_(i)};var m=class extends v{install(){let{app:t}=this.manager;this.ServiceManager=t.services}init(){}boot(){this.initEvents()}initEvents(){}stopEvents(){}uninstall(){this.ServiceManager=void 0}stop(){this.stopEvents(),this.unregister()}},H=class extends x{constructor(t){super(t)}init(){return w(this,"init",this.app),this}boot(){return w(this,"boot",this.app),this}stop(){return w(this,"stop",this.app),this}},I=(r=window.scrollX,t=window.scrollY)=>({x:r,y:t}),k=(r={url:b(c()),index:0,transition:"default",data:{scroll:I(),trigger:"HistoryManager"}})=>r,B=class extends m{constructor(){super(...arguments);this.pointer=-1}init(){this.states=[];let t=k();this.add(t,"replace")}get(t){return this.states[t]}add(t,e="push"){let i=k(t),n=this.length;this.states.push({...i}),this.pointer=n;let s={index:this.pointer,states:[...this.states]};return W(e,i,s),this}remove(t){return t?this.states.splice(t,1):this.states.pop(),this.pointer--,this}replace(t){return this.states=t,this}set(t,e){return this.states[t]=e}get current(){return this.get(this.pointer)}get last(){return this.get(this.length-1)}get previous(){return this.pointer<1?null:this.get(this.pointer-1)}get length(){return this.states.length}},W=(r,t,e)=>{let i=b(c(t.url)),n=[e,"",i];if(window.history)switch(r){case"push":window.history.pushState.apply(window.history,n);break;case"replace":window.history.replaceState.apply(window.history,n);break}};var Y=new DOMParser,y=class extends v{constructor(t=c(),e=document){super();this.url=t,typeof e=="string"?this.data=e:this.dom=e||document}async build(){if(this.dom instanceof Node||(this.dom=Y.parseFromString(this.data,"text/html")),!(this.body instanceof Node)){let{title:t,head:e,body:i}=this.dom;this.title=t,this.head=e,this.body=i,this.wrapper=this.body.querySelector(this.wrapperAttr)}}install(){this.wrapperAttr=g(this.config,"wrapperAttr")}uninstall(){this.url=void 0,this.title=void 0,this.head=void 0,this.body=void 0,this.dom=void 0,this.wrapper=void 0,this.data=void 0,this.wrapperAttr=void 0}},J=class extends m{constructor(){super(...arguments);this.loading=new u;this.maxPages=5}install(){this.pages=new x(this.app);let t=c().pathname;this.set(t,new y),t=void 0}get(t){return this.pages.get(t)}add(t){return this.pages.add(t),this}set(t,e){return this.pages.set(t,e),this}remove(t){return this.pages.remove(t),this}has(t){return this.pages.has(t)}clear(){return this.pages.clear(),this}get size(){return this.pages.size}keys(){return this.pages.keys()}async load(t=c()){let e=c(t),i=e.pathname,n,s;if(this.has(i))return n=this.get(i),Promise.resolve(n);this.loading.has(i)?s=this.loading.get(i):(s=this.request(i),this.loading.set(i,s));let o=await s;if(this.loading.remove(i),n=new y(e,o),this.set(i,n),this.size>this.maxPages){let a=c(),l=this.keys(),p=R(a,l[0])?l[1]:l[0],h=this.get(p);h.unregister(),h=void 0,l=void 0,a=void 0,p=void 0}return n}async request(t){let e=new Headers(g(this.config,"headers")),i=window.setTimeout(()=>{throw window.clearTimeout(i),"Request Timed Out!"},g(this.config,"timeout"));try{let n=await fetch(t,{mode:"same-origin",method:"GET",headers:e,cache:"default",credentials:"same-origin"});if(window.clearTimeout(i),n.status>=200&&n.status<300)return await n.text();let s=new Error(n.statusText||""+n.status);throw s}catch(n){throw window.clearTimeout(i),n}}};var D=({callback:r=()=>{},scope:t=null,name:e="event"})=>({callback:r,scope:t,name:e}),T=class extends u{constructor(t="event"){super();this.name=t}},L=class extends u{constructor(){super()}getEvent(t){let e=this.get(t);return e instanceof T?e:(this.set(t,new T(t)),this.get(t))}newListener(t,e,i){let n=this.getEvent(t);return n.add(D({name:t,callback:e,scope:i})),n}on(t,e,i){if(typeof t=="undefined")return this;typeof t=="string"&&(t=t.trim().split(/\s/g));let n,s,o=typeof t=="object"&&!Array.isArray(t),a=o?e:i;return o||(s=e),Object.keys(t).forEach(l=>{o?(n=l,s=t[l]):n=t[l],this.newListener(n,s,a)},this),this}removeListener(t,e,i){let n=this.get(t);if(n instanceof T&&e){let s=D({name:t,callback:e,scope:i});n.forEach((o,a)=>{if(o.callback===s.callback&&o.scope===s.scope)return n.remove(a)})}return n}off(t,e,i){if(typeof t=="undefined")return this;typeof t=="string"&&(t=t.trim().split(/\s/g));let n,s,o=typeof t=="object"&&!Array.isArray(t),a=o?e:i;return o||(s=e),Object.keys(t).forEach(l=>{o?(n=l,s=t[l]):n=t[l],typeof s=="function"?this.removeListener(n,s,a):this.remove(n)},this),this}emit(t,...e){return typeof t=="undefined"?this:(typeof t=="string"&&(t=t.trim().split(/\s/g)),t.forEach(i=>{let n=this.get(i);n instanceof T&&n.forEach(s=>{let{callback:o,scope:a}=s;o.apply(a,e)})},this),this)}};var X=class extends m{constructor(){super(...arguments);this.ignoreURLs=[];this.prefetchIgnore=!1;this.isTransitioning=!1;this.stopOnTransitioning=!1;this.stickyScroll=!1;this.forceOnError=!1;this.autoScrollOnHash=!0;this.dontScroll=!1}transitionStart(){this.isTransitioning=!0}transitionStop(){this.isTransitioning=!1}init(){super.init(),this.onHover=this.onHover.bind(this),this.onClick=this.onClick.bind(this),this.onStateChange=this.onStateChange.bind(this)}boot(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),super.boot()}getTransitionName(t){if(!t||!t.getAttribute)return null;let e=t.getAttribute(g(this.config,"transitionAttr",!1));return typeof e=="string"?e:null}validLink(t,e,i){let n=!window.history.pushState,s=!t||!i,o=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey,a=t.hasAttribute("target")&&t.target==="_blank",l=t.protocol!==location.protocol||t.hostname!==location.hostname,p=typeof t.getAttribute("download")=="string",h=t.hasAttribute(g(this.config,"preventSelfAttr",!1)),M=Boolean(t.closest(g(this.config,"preventAllAttr"))),S=h&&M,A=b(c())===b(c(i));return!(s||n||o||a||l||p||S||A)}getHref(t){return t&&t.tagName&&t.tagName.toLowerCase()==="a"&&typeof t.href=="string"?t.href:null}getLink(t){let e=t.target,i=this.getHref(e);for(;e&&!i;)e=e.parentNode,i=this.getHref(e);return!e||!this.validLink(e,t,i)?void 0:e}onClick(t){let e=this.getLink(t);if(!e)return;if(this.isTransitioning&&this.stopOnTransitioning){t.preventDefault(),t.stopPropagation();return}let i=this.getHref(e);this.emitter.emit("ANCHOR_CLICK CLICK",t),this.go({href:i,trigger:e,event:t})}getDirection(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"}force(t){window.location.assign(t)}go({href:t,trigger:e="HistoryManager",event:i}){if(this.isTransitioning&&this.stopOnTransitioning||!this.ServiceManager.has("TransitionManager")||!this.ServiceManager.has("HistoryManager")||!this.ServiceManager.has("PageManager")){this.force(t);return}let n=this.ServiceManager.get("HistoryManager"),s={x:0,y:0},o=n.current,a=o.url;if(R(a,t))return;let l;if(i&&i.state){this.emitter.emit("POPSTATE",i);let{state:p}=i,{index:h}=p,M=o.index,S=M-h;e=this.getDirection(S);let A=n.get(n.pointer);l=A.transition,s=A.data.scroll,n.replace(p.states),n.pointer=h,e==="back"?this.emitter.emit("POPSTATE_BACK",i):e==="forward"&&this.emitter.emit("POPSTATE_FORWARD",i)}else{l=this.getTransitionName(e)||"default",s=I();let p=k({url:t,transition:l,data:{scroll:s}});n.add(p),this.emitter.emit("HISTORY_NEW_ITEM",i)}return i&&(i.stopPropagation(),i.preventDefault()),this.emitter.emit("GO",i),this.load({oldHref:a,href:t,trigger:e,transitionName:l,scroll:s})}async load({oldHref:t,href:e,trigger:i,transitionName:n="default",scroll:s={x:0,y:0}}){try{let o=this.ServiceManager.get("PageManager"),a=await o.load(t);await a.build();let l;this.emitter.emit("PAGE_LOADING",{href:e,oldPage:a,trigger:i});try{try{l=await o.load(e),await l.build(),this.transitionStart(),this.emitter.emit("PAGE_LOAD_COMPLETE",{newPage:l,oldPage:a,trigger:i})}catch(p){console.error(`[PJAX] page load error: ${p}`)}this.emitter.emit("NAVIGATION_START",{oldPage:a,newPage:l,trigger:i,transitionName:n});try{let p=this.ServiceManager.get("TransitionManager");this.emitter.emit("TRANSITION_START",n);let h=await p.animate(n,{oldPage:a,newPage:l,trigger:i,scroll:s});h.scrollable||(/back|popstate|forward/.test(i)||(s=N()),window.scroll(s.x,s.y)),this.emitter.emit("TRANSITION_END",{transition:h})}catch(p){console.error(`[PJAX] transition error: ${p}`)}this.emitter.emit("NAVIGATION_END",{oldPage:a,newPage:l,trigger:i,transitionName:n})}catch(p){throw this.transitionStop(),p}this.transitionStop()}catch(o){this.forceOnError?this.force(e):console.error(o)}}ignoredURL({pathname:t}){return this.ignoreURLs.length&&this.ignoreURLs.some(e=>typeof e=="string"?e===t:e.exec(t)!==null)}onHover(t){let e=this.getLink(t);if(!e||!this.ServiceManager.get("PageManager"))return;let i=this.ServiceManager.get("PageManager"),n=c(this.getHref(e)),s=n.pathname;if(this.ignoredURL(n)||i.has(s))return;this.emitter.emit("ANCHOR_HOVER HOVER",t);try{i.load(n)}catch(o){console.warn("[PJAX] prefetch error,",o)}}onStateChange(t){this.go({href:window.location.href,trigger:"popstate",event:t})}initEvents(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.onHover),document.addEventListener("touchstart",this.onHover)),document.addEventListener("click",this.onClick),window.addEventListener("popstate",this.onStateChange)}stopEvents(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.onHover),document.removeEventListener("touchstart",this.onHover)),document.removeEventListener("click",this.onClick),window.removeEventListener("popstate",this.onStateChange)}},N=(r=window.location.hash)=>{try{let t=r[0]=="#"?r:c(r).hash;if(t.length>1){let e=document.getElementById(t.slice(1));if(e)return I(e.offsetLeft,e.offsetTop)}}catch(t){console.warn("hashAction error",t)}return I(0,0)},Q=class extends m{constructor(t){super();this.transitions=new u(t)}get(t){return this.transitions.get(t)}set(t,e){return this.transitions.set(t,e),this}add(t){return this.transitions.add(t),this}boot(){super.boot()}async animate(t,e){let i=this.transitions.get(t),n=e.scroll;if(!(e.oldPage instanceof y)||!(e.newPage instanceof y))throw`[Page] either oldPage or newPage aren't instances of the Page Class.
 ${{newPage:e.newPage,oldPage:e.oldPage}}`;let s=e.oldPage.wrapper,o=e.newPage.wrapper;if(document.title=""+e.newPage.title,!(s instanceof Node)||!(o instanceof Node))throw`[Wrapper] the wrapper from the ${o instanceof Node?"current":"next"} page cannot be found. The wrapper must be an element that has the attribute ${g(this.config,"wrapperAttr")}.`;return i.init&&i?.init(e),this.emitter.emit("BEFORE_TRANSITION_OUT"),await new Promise(a=>{let l=i.out.call(i,{...e,from:e.oldPage,trigger:e.trigger,done:a});l.then&&l.then(a)}),this.emitter.emit("AFTER_TRANSITION_OUT"),await new Promise(a=>{s.insertAdjacentElement("beforebegin",o),this.emitter.emit("CONTENT_INSERT"),/back|popstate|forward/.test(e.trigger)||(n=N()),a()}),await new Promise(a=>{s.remove(),s=void 0,o=void 0,this.emitter.emit("CONTENT_REPLACED"),a()}),this.emitter.emit("BEFORE_TRANSITION_IN"),await new Promise(async a=>{let l=i.in.call(i,{...e,from:e.oldPage,to:e.newPage,trigger:e.trigger,scroll:n,done:a});l.then&&l.then(a)}),this.emitter.emit("AFTER_TRANSITION_IN"),i}};var Z=class{constructor(t={}){this.register(t)}register(t={}){this.config=F(t),this.emitter=new L,this.services=new H(this);let e=(()=>{document.removeEventListener("DOMContentLoaded",e),window.removeEventListener("load",e),this.emitter.emit("READY ready")}).bind(this);return document.addEventListener("DOMContentLoaded",e),window.addEventListener("load",e),this}get(t){return this.services.get(t)}set(t,e){return this.services.set(t,e),this}add(t){return this.services.add(t),this}boot(){return this.services.init(),this.services.boot(),this}stop(){return this.services.stop(),this}on(t,e){return this.emitter.on(t,e,this),this}off(t,e){return this.emitter.off(t,e,this),this}emit(t,...e){return this.emitter.emit(t,...e),this}};var tt=class extends m{constructor(t=[]){super();this.routes=new u;for(let e of t)this.add(e)}add({path:t,method:e}){let i=this.parse(t);return this.routes.set(i,e),this}parsePath(t){if(typeof t=="string")return new RegExp(t,"i");if(t instanceof RegExp||typeof t=="boolean")return t;throw"[Router] only regular expressions, strings and booleans are accepted as paths."}isPath(t){return typeof t=="string"||t instanceof RegExp||typeof t=="boolean"}parse(t){let e=t,i={from:/(.*)/g,to:/(.*)/g};if(this.isPath(t))i={from:!0,to:t};else if(this.isPath(e.from)&&this.isPath(e.to))i=e;else throw"[Router] path is neither a string, regular expression, or a { from, to } object.";let{from:n,to:s}=i;return{from:this.parsePath(n),to:this.parsePath(s)}}route(){if(this.ServiceManager.has("HistoryManager")){let t=this.ServiceManager.get("HistoryManager"),e=b(c((t.length>1?t.previous:t.current).url)),i=b(c());this.routes.forEach((n,s)=>{let o=s.from,a=s.to;if(typeof o=="boolean"&&typeof a=="boolean")throw`[Router] path ({ from: ${o}, to: ${a} }) is not valid, remember paths can only be strings, regular expressions, or a boolean; however, both the from and to paths cannot be both booleans.`;let l=o,p=a;o instanceof RegExp&&o.test(e)&&(l=o.exec(e)),a instanceof RegExp&&a.test(i)&&(p=a.exec(i)),(Array.isArray(p)&&Array.isArray(l)||Array.isArray(p)&&typeof l=="boolean"&&l||Array.isArray(l)&&typeof p=="boolean"&&p)&&n({from:l,to:p,path:{from:e,to:i}})})}else console.warn("[Route] HistoryManager is missing.")}initEvents(){this.emitter.on("READY",this.route,this),this.emitter.on("CONTENT_REPLACED",this.route,this)}stopEvents(){this.emitter.off("READY",this.route,this),this.emitter.off("CONTENT_REPLACED",this.route,this)}};var et=r=>typeof r=="string"?Array.from(document.querySelectorAll(r)):[r],it=r=>Array.isArray(r)?r:typeof r=="string"||r instanceof Node?et(r):r instanceof NodeList||r instanceof HTMLCollection?Array.from(r):[],z=(r,t)=>typeof r=="function"?r(...t):r,U=(r,t)=>{let e,i,n={},s=Object.keys(r);for(let o=0,a=s.length;o<a;o++)e=s[o],i=r[e],n[e]=z(i,t);return n},rt={ease:"ease",in:"ease-in",out:"ease-out","in-out":"ease-in-out","in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","in-out-expo":"cubic-bezier(1, 0, 0, 1)","in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},nt=r=>/^(ease|in|out)/.test(r)?rt[r]:r,st={keyframes:[],loop:1,delay:0,speed:1,endDelay:0,easing:"ease",autoplay:!0,duration:1e3,onfinish(){},fillMode:"auto",direction:"normal"},C=class{constructor(t={}){this.options={};this.targets=[];this.properties={};this.animations=new Map;this.duration=0;this.emitter=new L;let{options:e,...i}=t;this.options=Object.assign({},st,e instanceof C?e.getOptions():e,i),this.loop=this.loop.bind(this);let{loop:n,delay:s,speed:o,easing:a,endDelay:l,duration:p,direction:h,fillMode:M,onfinish:S,target:A,keyframes:ot,autoplay:at,...lt}=this.options;this.mainElement=document.createElement("div"),this.targets=it(A),this.properties=lt;let f=0,P=this.targets.length,O;for(;f<P;f++){let E=this.targets[f],d={easing:nt(a),iterations:n===!0?Infinity:n,direction:h,endDelay:l,duration:p,delay:s,fill:M},K=z(ot,[f,P,E]);O=K.length?K:this.properties,d=U(d,[f,P,E]),K.length>0||(O=U(O,[f,P,E]));let j=d.delay+d.duration*d.iterations+d.endDelay;this.duration<j&&(this.duration=j);let V=E.animate(O,d);V.onfinish=()=>{S(E,f,P)},this.animations.set(E,V)}this.mainAnimation=this.mainElement.animate([{opacity:"0"},{opacity:"1"}],{duration:this.duration,easing:"linear"}),this.setSpeed(o),at?this.play():this.pause(),this.promise=this.newPromise(),this.mainAnimation.onfinish=()=>{window.cancelAnimationFrame(this.animationFrame),this.finish()}}newPromise(){return new Promise((t,e)=>{try{this.finish=()=>(this.emit("finish",this.options),t(this.options))}catch(i){e(i)}})}getTargets(){return this.targets}then(t,e){return t=t?.bind(this),e=e?.bind(this),this.promise.then(t,e),this}catch(t){return t=t?.bind(this),this.promise.catch(t),this}finally(t){return t=t?.bind(this),this.promise.finally(t),this}loop(){this.animationFrame=window.requestAnimationFrame(this.loop),this.emit("tick change",this.getCurrentTime())}on(t,e,i){return this.emitter.on(t,e,i??this),this}off(t,e,i){return this.emitter.off(t,e,i??this),this}emit(t,...e){return this.emitter.emit(t,...e),this}getAnimation(t){return this.animations.get(t)}play(){return this.mainAnimation.playState!=="finished"&&(this.mainAnimation.play(),this.animationFrame=requestAnimationFrame(this.loop),this.animations.forEach(t=>{t.playState!=="finished"&&t.play()}),this.emit("play")),this}pause(){return this.mainAnimation.playState!=="finished"&&(this.mainAnimation.pause(),window.cancelAnimationFrame(this.animationFrame),this.animations.forEach(t=>{t.playState!=="finished"&&t.pause()}),this.emit("pause")),this}getDuration(){return this.duration}getCurrentTime(){return this.mainAnimation.currentTime}setCurrentTime(t){return this.mainAnimation.currentTime=t,this.animations.forEach(e=>{e.currentTime=t}),this}getProgress(){return this.getCurrentTime()/this.duration}setProgress(t){return this.mainAnimation.currentTime=t/100*this.duration,this.animations.forEach(e=>{e.currentTime=t*this.duration}),this}getSpeed(){return this.mainAnimation.playbackRate}setSpeed(t=1){return this.mainAnimation.playbackRate=t,this.animations.forEach(e=>{e.playbackRate=t}),this}reset(){this.setCurrentTime(0),this.promise=this.newPromise(),this.options.autoplay?this.play():this.pause()}getPlayState(){return this.mainAnimation.playState}getOptions(){return this.options}toJSON(){return this.getOptions()}stop(){for(this.animations.forEach(t=>{t.cancel()},this),this.mainAnimation.cancel(),window.cancelAnimationFrame(this.animationFrame),this.animations.clear();this.targets.length;)this.targets.pop();this.mainElement=void 0,this.animationFrame=void 0,this.emit("stop")}get[Symbol.toStringTag](){return"Animate"}},ct=(r={})=>new C(r);export{x as AdvancedManager,C as Animate,Z as App,G as CONFIG_DEFAULTS,st as DefaultAnimationOptions,T as Event,L as EventEmitter,B as HistoryManager,u as Manager,v as ManagerItem,Y as PARSER,X as PJAX,y as Page,J as PageManager,tt as Router,m as Service,H as ServiceManager,Q as TransitionManager,ct as animate,$ as asyncMethodCall,W as changeState,_ as clean,z as computeValue,rt as easings,R as equal,g as getConfig,nt as getEase,et as getElements,pt as getHash,b as getHashedPath,it as getTargets,N as hashAction,U as mapObject,w as methodCall,F as newConfig,I as newCoords,D as newListener,k as newState,c as newURL,q as toAttr};
//# sourceMappingURL=api.modern.js.map
