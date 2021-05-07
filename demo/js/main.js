var xt=Object.defineProperty;var nt=Object.prototype.hasOwnProperty;var H=Object.getOwnPropertySymbols,st=Object.prototype.propertyIsEnumerable;var at=(r,t,e)=>t in r?xt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,c=(r,t)=>{for(var e in t||(t={}))nt.call(t,e)&&at(r,e,t[e]);if(H)for(var e of H(t))st.call(t,e)&&at(r,e,t[e]);return r};var q=(r,t)=>{var e={};for(var i in r)nt.call(r,i)&&t.indexOf(i)<0&&(e[i]=r[i]);if(r!=null&&H)for(var i of H(r))t.indexOf(i)<0&&st.call(r,i)&&(e[i]=r[i]);return e};var Lt={wrapperAttr:"wrapper",noAjaxLinkAttr:"no-ajax-link",noPrefetchAttr:"no-prefetch",headers:[["x-partial","true"]],preventSelfAttr:'prevent="self"',preventAllAttr:'prevent="all"',transitionAttr:"transition",blockAttr:"block",timeout:3e4,maxPages:5,resizeDelay:100},ot=r=>Object.assign(c({},Lt),r),St=(r,t,e=!0)=>{let{prefix:i}=r,n=`data${i?"-"+i:""}-${t}`;return e?`[${n}]`:n},h=(r,t,e=!0)=>{if(typeof t!="string")return r;let i=r[t];return typeof i=="string"?St(r,i,e):i};var d=class{constructor(t){this.map=new Map(t)}getMap(){return this.map}get(t){return this.map.get(t)}keys(){return Array.from(this.map.keys())}values(){return Array.from(this.map.values())}set(t,e){return this.map.set(t,e),this}add(t){let i=this.size;return this.set(i,t),this}get size(){return this.map.size}get length(){return this.map.size}last(t=1){let e=this.keys()[this.size-t];return this.get(e)}delete(t){return this.map.delete(t)}remove(t){return this.map.delete(t),this}clear(){return this.map.clear(),this}has(t){return this.map.has(t)}entries(){return this.map.entries()}forEach(t,e){return this.map.forEach(t,e),this}[Symbol.iterator](){return this.entries()}},T=(r,t,...e)=>{r.forEach(i=>{i[t](...e)})};var S=class{constructor(){}install(){}register(t,e){return this.manager=t,this.app=t.app,this.config=t.config,this.emitter=t.emitter,this.key=e,this.install(),this}uninstall(){}unregister(){this.uninstall(),this.manager.remove(this.key),this.key=void 0,this.manager=void 0,this.app=void 0,this.config=void 0,this.emitter=void 0}},M=class extends d{constructor(t){super();this.app=t,this.config=t.config,this.emitter=t.emitter}set(t,e){return super.set(t,e),e.register(this,t),this}};var u=(r=window.location.href)=>r instanceof URL?r:new URL(r,window.location.origin),A=r=>{let t=u(r);return`${t.pathname}${t.hash}`};var lt=r=>u(r).toString().replace(/(\/#.*|\/|#.*)$/,""),N=(r,t)=>lt(r)===lt(t);var f=class extends S{init(){}boot(){this.initEvents()}initEvents(){}stopEvents(){}stop(){this.stopEvents(),this.unregister()}},j=class extends M{constructor(t){super(t)}init(){return T(this,"init"),this}boot(){return T(this,"boot"),this}stop(){return T(this,"stop"),this}};var w=(r=window.scrollX,t=window.scrollY)=>({x:r,y:t}),D=(r={url:A(u()),index:0,transition:"default",data:{scroll:w(),trigger:"HistoryManager"}})=>r,V=class extends f{constructor(){super(...arguments);this.pointer=-1}init(){this.states=[];let t=D();this.add(t,"replace")}get(t){return this.states[t]}add(t,e="push"){let i=D(t),n=this.length;this.states.push(c({},i)),this.pointer=n;let s={index:this.pointer,states:[...this.states]};return Mt(e,i,s),this}remove(t){return t?this.states.splice(t,1):this.states.pop(),this.pointer--,this}replace(t){return this.states=t,this}set(t,e){return this.states[t]=e}get current(){return this.get(this.pointer)}get last(){return this.get(this.length-1)}get previous(){return this.pointer<1?null:this.get(this.pointer-1)}get length(){return this.states.length}},Mt=(r,t,e)=>{let i=A(t.url),n=[e,"",i];if(window.history)switch(r){case"push":window.history.pushState.apply(window.history,n);break;case"replace":window.history.replaceState.apply(window.history,n);break}};var Pt=new DOMParser,G=class extends S{constructor(t=u(),e=document){super();this.url=t,typeof e=="string"?this.data=e:this.dom=e||document}build(){if(this.dom instanceof Node||(this.dom=Pt.parseFromString(this.data,"text/html")),!(this.body instanceof Node)){let{title:t,head:e,body:i}=this.dom;this.title=t,this.head=e,this.body=i,this.wrapper=this.body.querySelector(this.wrapperAttr)}}install(){this.wrapperAttr=h(this.config,"wrapperAttr")}uninstall(){this.url=void 0,this.title=void 0,this.head=void 0,this.body=void 0,this.dom=void 0,this.wrapper=void 0,this.data=void 0,this.wrapperAttr=void 0}},$=class extends f{constructor(){super(...arguments);this.loading=new d}install(){this.pages=new M(this.app);let t=u().pathname;this.set(t,new G),t=void 0}get(t){return this.pages.get(t)}add(t){return this.pages.add(t),this}set(t,e){return this.pages.set(t,e),this}remove(t){return this.pages.remove(t),this}has(t){return this.pages.has(t)}clear(){return this.pages.clear(),this}get size(){return this.pages.size}keys(){return this.pages.keys()}async load(t=u()){let e=u(t),i=e.pathname,n,s;if(this.has(i))return n=this.get(i),Promise.resolve(n);this.loading.has(i)?s=this.loading.get(i):(s=this.request(i),this.loading.set(i,s));let o=await s;if(this.loading.remove(i),n=new G(e,o),this.set(i,n),this.size>h(this.config,"maxPages")){let l=u(),a=this.keys(),p=N(l,a[0])?a[1]:a[0],m=this.get(p);m.unregister(),m=void 0,a=void 0,l=void 0,p=void 0}return n}async request(t){let e=new Headers(h(this.config,"headers")),i=window.setTimeout(()=>{throw window.clearTimeout(i),"Request Timed Out!"},h(this.config,"timeout"));try{let n=await fetch(t,{mode:"same-origin",method:"GET",headers:e,cache:"default",credentials:"same-origin"});if(window.clearTimeout(i),n.status>=200&&n.status<300)return await n.text();throw new Error(n.statusText||""+n.status)}catch(n){throw window.clearTimeout(i),n}}};var pt=({callback:r=()=>{},scope:t=null,name:e="event"})=>({callback:r,scope:t,name:e}),P=class extends d{constructor(t="event"){super();this.name=t}},k=class extends d{constructor(){super()}getEvent(t){let e=this.get(t);return e instanceof P?e:(this.set(t,new P(t)),this.get(t))}newListener(t,e,i){let n=this.getEvent(t);return n.add(pt({name:t,callback:e,scope:i})),n}on(t,e,i){if(typeof t=="undefined")return this;typeof t=="string"&&(t=t.trim().split(/\s/g));let n,s,o=typeof t=="object"&&!Array.isArray(t),l=o?e:i;return o||(s=e),Object.keys(t).forEach(a=>{o?(n=a,s=t[a]):n=t[a],this.newListener(n,s,l)},this),this}removeListener(t,e,i){let n=this.get(t);if(n instanceof P&&e){let s=pt({name:t,callback:e,scope:i});n.forEach((o,l)=>{if(o.callback===s.callback&&o.scope===s.scope)return n.remove(l)})}return n}off(t,e,i){if(typeof t=="undefined")return this;typeof t=="string"&&(t=t.trim().split(/\s/g));let n,s,o=typeof t=="object"&&!Array.isArray(t),l=o?e:i;return o||(s=e),Object.keys(t).forEach(a=>{o?(n=a,s=t[a]):n=t[a],typeof s=="function"?this.removeListener(n,s,l):this.remove(n)},this),this}emit(t,...e){return typeof t=="undefined"?this:(typeof t=="string"&&(t=t.trim().split(/\s/g)),t.forEach(i=>{let n=this.get(i);n instanceof P&&n.forEach(s=>{let{callback:o,scope:l}=s;o.apply(l,e)})},this),this)}clear(){return T(this,"clear"),super.clear(),this}};var X=(r,t=window.location.hash)=>{try{let e=t[0]=="#"?t:u(t).hash;if(e.length>1){let i=document.getElementById(e.slice(1));if(i){let{left:n,top:s}=i.getBoundingClientRect(),o=window.scrollX,l=window.scrollY,a=n+o,p=s+l;return console.log(a,p),w(a,p)}}}catch(e){console.warn("[hashAction] error",e)}return r!=null?r:w(0,0)},kt={name:"default",scrollable:!0,out({done:r}){r()},in({scroll:r,done:t}){window.scroll(r.x,r.y),t()}},B=class extends f{constructor(t){super();this._arg=t}install(){var e;super.install();let t=this._arg&&this._arg.length?this._arg:(e=h(this.config,"transitions"))!=null?e:[];t=[["default",kt]].concat(t),this.transitions=new d(t)}get(t){return this.transitions.get(t)}set(t,e){return this.transitions.set(t,e),this}add(t){return this.transitions.add(t),this}has(t){return this.transitions.has(t)}async animate(t,e){let i=this.transitions.get(t),n=e.scroll,s=e.ignoreHashAction;if(!("wrapper"in e.oldPage)||!("wrapper"in e.newPage))throw`[Page] either oldPage or newPage aren't instances of the Page Class.
 ${{newPage:e.newPage,oldPage:e.oldPage}}`;document.title=""+e.newPage.title;let o=e.oldPage.wrapper,l=e.newPage.wrapper;if(!(o instanceof Node)||!(l instanceof Node))throw`[Wrapper] the wrapper from the ${l instanceof Node?"current":"next"} page cannot be found. The wrapper must be an element that has the attribute ${h(this.config,"wrapperAttr")}.`;return i.init&&(i==null||i.init(e)),this.emitter.emit("BEFORE_TRANSITION_OUT"),i.out&&await new Promise(a=>{let p=i.out.call(i,c(c({},e),{from:e.oldPage,trigger:e.trigger,done:a}));p==null||p.then(a)}),this.emitter.emit("AFTER_TRANSITION_OUT"),await new Promise(a=>{o.insertAdjacentElement("beforebegin",l),this.emitter.emit("CONTENT_INSERT"),!s&&!/back|popstate|forward/.test(e.trigger)&&(n=X(n)),a()}),await new Promise(a=>{o.remove(),o=void 0,l=void 0,this.emitter.emit("CONTENT_REPLACED"),a()}),this.emitter.emit("BEFORE_TRANSITION_IN"),i.in&&await new Promise(async a=>{let p=i.in.call(i,c(c({},e),{from:e.oldPage,to:e.newPage,trigger:e.trigger,scroll:n,done:a}));p==null||p.then(a)}),this.emitter.emit("AFTER_TRANSITION_IN"),i}};var W=class{constructor(t={}){this.canResize=!0;this.canScroll=!0;this._resize=this._resize.bind(this),this._scroll=this._scroll.bind(this),this._ready=this._ready.bind(this),this.register(t)}register(t={}){return this.config=ot(t),this.emitter=new k,this.services=new j(this),document.addEventListener("DOMContentLoaded",this._ready),window.addEventListener("load",this._ready),window.addEventListener("resize",this._resize,{passive:!0}),window.addEventListener("scroll",this._scroll,{passive:!0}),this}_ready(){document.removeEventListener("DOMContentLoaded",this._ready),window.removeEventListener("load",this._ready),this.emitter.emit("READY ready")}_resize(){if(this.canResize){let t,e;this.canResize=!1,e=window.requestAnimationFrame(()=>{this.emitter.emit("RESIZE resize"),t=window.setTimeout(()=>{this.canResize=!0,t=window.clearTimeout(t),e=window.cancelAnimationFrame(e)},h(this.config,"resizeDelay"))})}}_scroll(){if(this.canScroll){let t;this.canScroll=!1,t=requestAnimationFrame(()=>{this.emitter.emit("SCROLL scroll"),this.canScroll=!0,t=window.cancelAnimationFrame(t)})}}get(t){return this.services.get(t)}set(t,e){return this.services.set(t,e),this}add(t){return this.services.add(t),this}boot(){return this.services.init(),this.services.boot(),this}stop(){return this.services.stop(),this.emitter.clear(),this}on(t,e){return this.emitter.on(t,e,this),this}off(t,e){return this.emitter.off(t,e,this),this}emit(t,...e){return this.emitter.emit(t,...e),this}};var Y=class extends f{install(){var t,e,i,n,s,o;super.install(),this.ignoreURLs=(t=h(this.config,"ignoreURLs"))!=null?t:[],this.prefetchIgnore=(e=h(this.config,"prefetchIgnore"))!=null?e:!1,this.stopOnTransitioning=(i=h(this.config,"stopOnTransitioning"))!=null?i:!1,this.stickyScroll=(n=h(this.config,"stickyScroll"))!=null?n:!1,this.forceOnError=(s=h(this.config,"forceOnError"))!=null?s:!1,this.ignoreHashAction=(o=h(this.config,"ignoreHashAction"))!=null?o:!1}transitionStart(){this.isTransitioning=!0}transitionStop(){this.isTransitioning=!1}init(){this.onHover=this.onHover.bind(this),this.onClick=this.onClick.bind(this),this.onStateChange=this.onStateChange.bind(this)}boot(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),super.boot()}getTransitionName(t){if(!t||!t.getAttribute)return null;let e=t.getAttribute(h(this.config,"transitionAttr",!1));return typeof e=="string"?e:null}validLink(t,e,i){let n=!window.history.pushState,s=!t||!i,o=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey,l=t.hasAttribute("target")&&t.target==="_blank",a=t.protocol!==location.protocol||t.hostname!==location.hostname,p=typeof t.getAttribute("download")=="string",m=t.matches(h(this.config,"preventSelfAttr")),E=Boolean(t.closest(h(this.config,"preventAllAttr"))),g=A(u())===A(u(i));return!(s||n||o||l||a||p||m||E||g)}getHref(t){return t&&t.tagName&&t.tagName.toLowerCase()==="a"&&typeof t.href=="string"?t.href:null}getLink(t){let e=t.target,i=this.getHref(e);for(;e&&!i;)e=e.parentNode,i=this.getHref(e);if(!(!e||!this.validLink(e,t,i)))return e}onClick(t){let e=this.getLink(t);if(!e)return;if(this.isTransitioning&&this.stopOnTransitioning){t.preventDefault(),t.stopPropagation();return}let i=this.getHref(e);this.emitter.emit("ANCHOR_CLICK CLICK",t),this.go({href:i,trigger:e,event:t})}getDirection(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"}force(t){window.location.assign(t)}go({href:t,trigger:e="HistoryManager",event:i}){if(this.isTransitioning&&this.stopOnTransitioning||!(this.manager.has("TransitionManager")&&this.manager.has("HistoryManager")&&this.manager.has("PageManager"))){this.force(t);return}let n=this.manager.get("HistoryManager"),s=w(0,0),o=n.current,l=o.url;if(N(l,t))return;let a;if(i&&i.state){this.emitter.emit("POPSTATE",i);let{state:p}=i,{index:m}=p,g=o.index-m;n.replace(p.states),n.pointer=m;let O=n.get(m);a=O.transition,s=O.data.scroll,e=this.getDirection(g),console.log(e=="forward"&&n),this.emitter.emit(e==="back"?"POPSTATE_BACK":"POPSTATE_FORWARD",i)}else{a=this.getTransitionName(e),s=w();let p=D({url:t,transition:a,data:{scroll:s}});!this.stickyScroll&&(s=w(0,0)),n.add(p),this.emitter.emit("HISTORY_NEW_ITEM",i)}return i&&(i.stopPropagation(),i.preventDefault()),this.emitter.emit("GO",i),this.load({oldHref:l,href:t,trigger:e,transitionName:a,scroll:s})}async load({oldHref:t,href:e,trigger:i,transitionName:n="default",scroll:s={x:0,y:0}}){try{let o=this.manager.get("PageManager"),l,a;this.emitter.emit("NAVIGATION_START",{oldHref:t,href:e,trigger:i,transitionName:n});try{this.transitionStart(),a=await o.load(t),!(a.dom instanceof Element)&&a.build(),this.emitter.emit("PAGE_LOADING",{href:e,oldPage:a,trigger:i}),l=await o.load(e),await l.build(),this.emitter.emit("PAGE_LOAD_COMPLETE",{newPage:l,oldPage:a,trigger:i})}catch(p){console.warn(`[PJAX] Page load error: ${p}`)}try{let p=this.manager.get("TransitionManager");this.emitter.emit("TRANSITION_START",n);let m=await p.animate(p.has(n)?n:"default",{oldPage:a,newPage:l,trigger:i,scroll:s,ignoreHashAction:this.ignoreHashAction});m.scrollable||(!this.ignoreHashAction&&!/back|popstate|forward/.test(i)&&(s=X(s)),window.scroll(s.x,s.y)),this.emitter.emit("TRANSITION_END",{transition:m})}catch(p){console.warn(`[PJAX] Transition error: ${p}`)}this.emitter.emit("NAVIGATION_END",{oldPage:a,newPage:l,trigger:i,transitionName:n})}catch(o){this.forceOnError?this.force(e):console.warn(o)}finally{this.transitionStop()}}ignoredURL({pathname:t}){return this.ignoreURLs.length&&this.ignoreURLs.some(e=>typeof e=="string"?e===t:e.exec(t)!==null)}onHover(t){let e=this.getLink(t);if(!e||!this.manager.has("PageManager"))return;let i=this.manager.get("PageManager"),n=u(this.getHref(e)),s=n.pathname;if(!(this.ignoredURL(n)||i.has(s))){this.emitter.emit("ANCHOR_HOVER HOVER",t);try{i.load(n)}catch(o){console.warn("[PJAX] prefetch error,",o)}}}onStateChange(t){this.go({href:window.location.href,trigger:"popstate",event:t})}initEvents(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.onHover),document.addEventListener("touchstart",this.onHover)),document.addEventListener("click",this.onClick),window.addEventListener("popstate",this.onStateChange)}stopEvents(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.onHover),document.removeEventListener("touchstart",this.onHover)),document.removeEventListener("click",this.onClick),window.removeEventListener("popstate",this.onStateChange)}};var J=class extends f{constructor(t=[]){super();this.routes=new d;for(let e of t)this.add(e)}add({path:t,method:e}){let i=this.parse(t);return this.routes.set(i,e),this}parsePath(t){if(typeof t=="string")return new RegExp(t,"i");if(t instanceof RegExp||typeof t=="boolean")return t;throw"[Router] only regular expressions, strings and booleans are accepted as paths."}isPath(t){return typeof t=="string"||t instanceof RegExp||typeof t=="boolean"}parse(t){let e=t,i={from:/(.*)/g,to:/(.*)/g};if(this.isPath(t))i={from:!0,to:t};else if(this.isPath(e.from)&&this.isPath(e.to))i=e;else throw"[Router] path is neither a string, regular expression, or a { from, to } object.";let{from:n,to:s}=i;return{from:this.parsePath(n),to:this.parsePath(s)}}route(){if(this.manager.has("HistoryManager")){let t=this.manager.get("HistoryManager"),e=A(u((t.length>1?t.previous:t.current).url)),i=A(u());this.routes.forEach((n,s)=>{let o=s.from,l=s.to;if(typeof o=="boolean"&&typeof l=="boolean")throw`[Router] path ({ from: ${o}, to: ${l} }) is not valid, remember paths can only be strings, regular expressions, or a boolean; however, both the from and to paths cannot be both booleans.`;let a=o,p=l;o instanceof RegExp&&o.test(e)&&(a=o.exec(e)),l instanceof RegExp&&l.test(i)&&(p=l.exec(i)),(Array.isArray(p)&&Array.isArray(a)||Array.isArray(p)&&typeof a=="boolean"&&a||Array.isArray(a)&&typeof p=="boolean"&&p)&&n({from:a,to:p,path:{from:e,to:i}})})}else console.warn("[Route] HistoryManager is missing.")}initEvents(){this.emitter.on("READY",this.route,this),this.emitter.on("CONTENT_REPLACED",this.route,this)}stopEvents(){this.emitter.off("READY",this.route,this),this.emitter.off("CONTENT_REPLACED",this.route,this)}};var Rt=r=>typeof r=="string"?Array.from(document.querySelectorAll(r)):[r],Ot=r=>[].concat(...r),ct=r=>Array.isArray(r)?Ot(r.map(ct)):typeof r=="string"||r instanceof Node?Rt(r):r instanceof NodeList||r instanceof HTMLCollection?Array.from(r):[],ht=(r,t,e)=>typeof r=="function"?r.apply(e,t):r,ut=(r,t,e)=>{let i,n,s={},o=Object.keys(r);for(let l=0,a=o.length;l<a;l++)i=o[l],n=r[i],s[i]=ht(n,t,e);return s},Ct={in:"ease-in",out:"ease-out","in-out":"ease-in-out","in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","in-out-expo":"cubic-bezier(1, 0, 0, 1)","in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},Ht=r=>/^(in|out)/.test(r)?Ct[r]:r,mt={keyframes:[],loop:1,delay:0,speed:1,endDelay:0,easing:"ease",autoplay:!0,duration:1e3,fillMode:"auto",direction:"normal",extend:{}},_=class{constructor(t={}){this.options={};this.targets=[];this.properties={};this.animations=new d;this.totalDuration=0;this.minDelay=0;this.computedOptions=new d;this.emitter=new k;var i;try{let e=t,{options:s}=e,o=q(e,["options"]),l=s instanceof _?s.getOptions():Array.isArray(s)?(i=s==null?void 0:s[0])==null?void 0:i.getOptions():s;this.options=Object.assign({},mt,l,o),this.loop=this.loop.bind(this);let n=this.options,{loop:a,delay:p,speed:m,easing:E,endDelay:g,duration:O,direction:yt,fillMode:At,onfinish:et,target:Et,keyframes:vt,autoplay:wt,extend:It}=n,Tt=q(n,["loop","delay","speed","easing","endDelay","duration","direction","fillMode","onfinish","target","keyframes","autoplay","extend"]);this.mainElement=document.createElement("div"),this.targets=ct(Et),this.properties=Tt;let it=[],x=this.targets.length,C;for(let v=0;v<x;v++){let I=this.targets[v],y=c({easing:typeof E=="string"?Ht(E):E,iterations:a===!0?Infinity:a,direction:yt,endDelay:g,duration:O,delay:p,fill:At},It),F=ht(vt,[v,x,I],this);C=F.length?F:this.properties,y=ut(y,[v,x,I],this),F.length>0||(C=ut(C,[v,x,I],this));let rt=y.delay+y.duration*y.iterations+y.endDelay;this.totalDuration<rt&&(this.totalDuration=rt);let L=I.animate(C,y);L.onfinish=()=>{typeof et=="function"&&et.call(this,I,v,x,L),this.emit("finish",I,v,x,L)},this.computedOptions.set(L,y),this.animations.set(I,L),it.push(y.delay)}this.mainAnimation=this.mainElement.animate([{opacity:"0"},{opacity:"1"}],{duration:this.totalDuration,easing:"linear"}),this.minDelay=Math.min(...it),this.setSpeed(m),wt?this.play():this.pause(),this.promise=this.newPromise(),this.mainAnimation.onfinish=()=>{this.emit("complete",this),this.stopLoop()}}catch(s){this.emit("error",s)}}newPromise(){return new Promise((t,e)=>{this.on("complete",()=>t([this])),this.on("error",i=>e(i))})}then(t,e){return t=t==null?void 0:t.bind(this),e=e==null?void 0:e.bind(this),this.promise.then(t,e),this}catch(t){return t=t==null?void 0:t.bind(this),this.promise.catch(t),this}finally(t){return t=t==null?void 0:t.bind(this),this.promise.finally(t),this}loop(){this.stopLoop(),this.emit("update",this.getProgress(),this),this.animationFrame=window.requestAnimationFrame(this.loop)}stopLoop(){window.cancelAnimationFrame(this.animationFrame)}all(t){return t(this.mainAnimation,this.mainElement),this.animations.forEach(t),this}beginEvent(){if(this.getProgress()==0){let t=window.setTimeout(()=>{this.emit("begin",this),t=window.clearTimeout(t)},this.minDelay)}}play(){let t=this.getPlayState();return this.beginEvent(),this.all(e=>e.play()),this.emit("play",t,this),this.loop(),this}pause(){let t=this.getPlayState();return this.all(e=>e.pause()),this.emit("pause",t,this),this.stopLoop(),this.animationFrame=void 0,this}reset(){return this.setProgress(0),this.beginEvent(),this.options.autoplay?this.play():this.pause(),this}cancel(){return this.all(t=>t.cancel()),this.stopLoop(),this}finish(){return this.all(t=>t.finish()),this.stopLoop(),this}stop(){for(this.cancel(),this.animations.clear();this.targets.length;)this.targets.pop();this.mainElement=void 0,this.emit("stop")}getTargets(){return this.targets}getAnimation(t){return this.animations.get(t)}getTiming(t){var o,l,a;let e=t instanceof Animation?t:this.getAnimation(t),i=(o=this.computedOptions.get(e))!=null?o:{},n=(a=(l=e.effect)==null?void 0:l.getTiming())!=null?a:{},s=this.getOptions();return c(c(c(c({},mt),s),n),i)}getTotalDuration(){return this.totalDuration}getCurrentTime(){return this.mainAnimation.currentTime}getProgress(){return this.getCurrentTime()/this.totalDuration*100}getSpeed(){return this.mainAnimation.playbackRate}getPlayState(){return this.mainAnimation.playState}getOptions(){return this.options}setCurrentTime(t){return this.all(e=>{e.currentTime=t}),this.emit("update",this.getProgress()),this}setProgress(t){let e=t/100*this.totalDuration;return this.setCurrentTime(e),this}setSpeed(t=1){return this.all(e=>{e.playbackRate=t}),this}on(t,e,i){return this.emitter.on(t,e,i!=null?i:this),this}off(t,e,i){return this.emitter.off(t,e,i!=null?i:this),this}emit(t,...e){return this.emitter.emit(t,...e),this}toJSON(){return this.getOptions()}get[Symbol.toStringTag](){return"Animate"}},b=(r={})=>new _(r);var R=r=>Array.from(r),z=R;var Z=class extends f{init(){super.init(),this.elements=z(document.querySelectorAll(".intro-animation"))}newPage(){this.init(),this.prepareToShow()}initEvents(){this.emitter.on("CONTENT_REPLACED",this.newPage,this),this.emitter.on("BEFORE_TRANSITION_IN",this.show,this)}stopEvents(){this.emitter.off("CONTENT_REPLACED",this.newPage,this),this.emitter.off("BEFORE_TRANSITION_IN",this.show,this)}stop(){requestAnimationFrame(()=>{for(let t of this.elements)t.style.opacity="1"}),super.stop()}prepareToShow(){requestAnimationFrame(()=>{for(let t of this.elements)t.style.opacity="0"})}async show(){let[t]=await b({target:this.elements,opacity:[0,1],delay(e){return 300*(e+1)},onfinish(e){e.style.opacity="1"},easing:"ease",duration:850});return t.stop(),t}};var gt={name:"default",duration:500,scrollable:!0,out({from:r}){let{duration:t}=this,e=r.wrapper;return b({target:e,opacity:[1,0],duration:t}).on("finish",function(){window.scroll(0,0),this.stop()})},in({to:r,scroll:t}){let{duration:e}=this,i=r.wrapper;return window.scroll(t.x,t.y),b({target:i,opacity:[0,1],duration:e}).then(function(){this.stop()})}};var dt={name:"big",delay:200,durationPerAnimation:700,scrollable:!0,init(){this.mainElement=document.getElementById("big-transition"),this.logoElement=this.mainElement.querySelector("#logo"),this.horizontalElements=z(this.mainElement.querySelectorAll("#big-transition-horizontal div")),this.maxLength=this.horizontalElements.length},out({from:r,scroll:t}){let{durationPerAnimation:e,delay:i}=this,n=r.wrapper,s=Object.assign({},n.style);return new Promise(async o=>{this.mainElement.style.opacity="1",this.mainElement.style.visibility="visible",b({target:n,opacity:[1,0],duration:e,onfinish(g){g.style.opacity="0"}}).then(function(){this.stop()});let[a]=await b({target:this.horizontalElements,keyframes:[{transform:"scaleX(0)"},{transform:"scaleX(1)"}],delay(g){return i*(g+1)},onfinish(g){g.style.transform="scaleX(1)"},easing:"out-cubic",duration:500});n.style.opacity="1",Object.assign(n.style,s),this.logoElement.style.visibility="visible";let p=500,[m]=await b({target:this.logoElement,opacity:[0,1],duration:p,onfinish(g){g.style.opacity="1"}}),[E]=await b({options:m,opacity:[1,0],onfinish(g){g.style.opacity="0"},delay:1500});this.logoElement.style.visibility="hidden",m.stop(),E.stop(),o()})},in({to:r,scroll:t}){let{durationPerAnimation:e,delay:i}=this,n=r.wrapper;return window.scroll(t.x,t.y),new Promise(async s=>{let o=b({target:n,opacity:[0,1],duration:e}).then(()=>{o.stop()}),[l]=await b({target:this.horizontalElements,keyframes:[{transform:"scaleX(1)"},{transform:"scaleX(0)"}],delay(a){return i*(a+1)},onfinish(a){a.style.transform="scaleX(0)"},easing:"out-cubic",duration:500});this.mainElement.style.opacity="0",this.mainElement.style.visibility="hidden",l.stop(),s()})}};var K={name:"slide",duration:500,direction:"right",scrollable:!0,init(r){let t=r.trigger;t instanceof Node&&t.hasAttribute("data-direction")?this.direction=t.getAttribute("data-direction"):this.direction="right"},out({from:r}){let{duration:t,direction:e}=this,i=r.wrapper;return b({target:i,keyframes:[{transform:"translateX(0%)",opacity:1},{transform:`translateX(${e==="left"?"-":""}25%)`,opacity:0}],duration:t,easing:"in-quint"}).on("begin",()=>{document.body.classList.add("no-overflow-x")}).then(function(){this.stop()})},in({to:r,scroll:t}){let{duration:e}=this,i=r.wrapper;return window.scroll(t.x,t.y),b({target:i,keyframes:[{transform:`translateX(${this.direction==="right"?"-":""}25%)`,opacity:0},{transform:"translateX(0%)",opacity:1}],duration:e,easing:"out-quint"}).then(function(){document.body.classList.remove("no-overflow-x"),this.stop()})}},ft=c(c({},K),{name:"slide-left",direction:"left",init(r){}}),bt=c(c({},K),{name:"slide-right",direction:"right",init(r){}});var Q=class extends f{init(){this.navbar=document.querySelector(".navbar"),this.collapseSection=this.navbar.querySelector(".navbar-collapse.mobile"),this.navbarList=this.navbar.querySelector(".navbar-list"),this.elements=R(this.navbar.querySelectorAll(".navbar-list a")),this.menu=this.navbar.querySelector(".navbar-toggle"),this.toggleStatus=!1,this.fixTabindex(),this.toggleClick=this.toggleClick.bind(this)}activateLink(){let{href:t}=window.location;for(let e of this.elements){let i=e.getAttribute("data-path")||e.href;if(!i||i.length<1)return;let n=new RegExp(i).test(t),s=e.classList.contains("active");n&&s||e.classList.toggle("active",n)}this.toggleStatus&&this.toggleClick()}fixTabindex(){for(let t of this.elements)t.setAttribute("tabindex",`${this.toggleStatus?0:-1}`)}toggleClick(){var t,e;(e=(t=this.collapseSection.style)==null?void 0:t.setProperty)==null||e.call(t,"--height",`${this.navbarList.clientHeight}px`),this.toggleStatus=!this.toggleStatus,this.collapseSection.classList.toggle("collapse",!this.toggleStatus),this.collapseSection.classList.toggle("show",this.toggleStatus),this.fixTabindex()}scroll(){this.navbar.classList.toggle("shadow",window.scrollY>=5)}initEvents(){this.menu.addEventListener("click",this.toggleClick),this.emitter.on("scroll",this.scroll,this),this.emitter.on("READY",this.activateLink,this),this.emitter.on("GO",this.activateLink,this)}stopEvents(){this.navbar.removeEventListener("click",this.toggleClick),this.emitter.off("scroll",this.scroll,this),this.emitter.off("READY",this.activateLink,this),this.emitter.off("GO",this.activateLink,this)}uninstall(){for(;this.elements.length;)this.elements.pop();this.elements=void 0,this.menu=void 0,this.navbar=void 0}};var U,Nt,tt=new W;tt.add(new Z).set("HistoryManager",new V).set("PageManager",new $).set("TransitionManager",new B([["default",gt],["BigTransition",dt],["Slide",K],["SlideLeft",ft],["SlideRight",bt]])).add(new Q).set("router",U=new J).add(Nt=new Y);try{U=tt.get("router");let r=R(document.querySelectorAll(".navbar .nav-link"));for(let t of r){let e=t;U.add({path:e.getAttribute("data-path")||e.pathname,method(){e.classList.contains("active")||e.classList.add("active");for(let n of r)n!==e&&n.classList.remove("active")}})}U.add({path:/(index|\/$)(\.html)?/,method(){}}),tt.boot()}catch(r){console.warn("[App] boot failed,",r)}
//# sourceMappingURL=main.js.map
