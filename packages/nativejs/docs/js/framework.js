const t={wrapperAttr:"wrapper",noAjaxLinkAttr:"no-ajax-link",noPrefetchAttr:"no-prefetch",headers:[["x-partial","true"]],preventSelfAttr:'prevent="self"',preventAllAttr:'prevent="all"',transitionAttr:"transition",blockAttr:"block",timeout:3e4};class e{constructor(e){this.config=Object.assign(Object.assign({},t),e)}toAttr(t,e=!0){let{prefix:i}=this.config,s=`data${i?"-"+i:""}-${t}`;return e?`[${s}]`:s}getConfig(t,e=!0){if("string"!=typeof t)return this.config;let i=this.config[t];return"string"==typeof i?this.toAttr(i,e):i}}
/*!
 * managerjs v1.0.9
 * (c) 2020 Okiki Ojo
 * Released under the MIT license
 */class i{constructor(t){this.map=new Map(t)}getMap(){return this.map}get(t){return this.map.get(t)}keys(){return[...this.map.keys()]}values(){return[...this.map.values()]}set(t,e){return this.map.set(t,e),this}add(t){return this.set(this.size,t),this}get size(){return this.map.size}last(t=1){let e=this.keys()[this.size-t];return this.get(e)}prev(){return this.last(2)}delete(t){return this.map.delete(t),this}clear(){return this.map.clear(),this}has(t){return this.map.has(t)}entries(){return this.map.entries()}forEach(t=((...t)=>{}),e){return this.map.forEach(t,e),this}[Symbol.iterator](){return this.entries()}methodCall(t,...e){return this.forEach(i=>{i[t](...e)}),this}async asyncMethodCall(t,...e){for await(let[,i]of this.map)await i[t](...e);return this}}class s{constructor(){}getConfig(t,e){return this.manager.getConfig(t,e)}install(){}register(t){return this.manager=t,this.install(),this}}class r extends i{constructor(t){super(),this.app=t}set(t,e){return super.set(t,e),"function"==typeof e.register&&e.register(this),this}getApp(){return this.app}getConfig(...t){return this.app.getConfig(...t)}}class n extends URL{constructor(t=window.location.href){super(t instanceof URL?t.href:t,window.location.origin)}getFullPath(){return`${this.pathname}${this.hash}`}getHash(){return this.hash.slice(1)}clean(){return this.toString().replace(/(\/#.*|\/|#.*)$/,"")}getPathname(){return this.pathname}equalTo(t){return this.clean()==t.clean()}static equal(t,e){let i=t instanceof n?t:new n(t),s=e instanceof n?e:new n(e);return i.equalTo(s)}}const a=(new n).getPathname();class o{constructor(t=window.scrollX,e=window.scrollY){this.x=t,this.y=e}}class h{constructor(t={url:new n,index:0,transition:"default",data:{scroll:new o,trigger:"HistoryManager"}}){this.state=t}getIndex(){return this.state.index}setIndex(t){return this.state.index=t,this}getURL(){return this.state.url}getURLPathname(){return this.state.url.getPathname()}getTransition(){return this.state.transition}getData(){return this.state.data}toJSON(){const{url:t,index:e,transition:i,data:s}=this.state;return{url:t.getFullPath(),index:e,transition:i,data:s}}}class l extends i{constructor(){super()}add(t){let e=t,i=this.size;return super.add(e),e.setIndex(i),this}addState(t){let e=t instanceof h?t:new h(t);return this.add(e),this}}const c=new DOMParser;class u extends s{constructor(t=new n,e=document){super(),this.url=t,this.dom="string"==typeof e?c.parseFromString(e,"text/html"):e||document;const{title:i,head:s,body:r}=this.dom;this.title=i,this.head=s,this.body=r}install(){this.wrapper=this.body.querySelector(this.getConfig("wrapperAttr"))}getURL(){return this.url}getPathname(){return this.url.pathname}getTitle(){return this.title}getHead(){return this.head}getBody(){return this.body}getWrapper(){return this.wrapper}getDOM(){return this.dom}}class g extends r{constructor(t){super(t),this.loading=new i,this.set(a,new u)}getLoading(){return this.loading}async load(t=new n){let e,i,s=t instanceof URL?t:new n(t),r=s.getPathname();if(this.has(r))return e=this.get(r),Promise.resolve(e);this.loading.has(r)?i=this.loading.get(r):(i=this.request(r),this.loading.set(r,i));let a=await i;return this.loading.delete(r),e=new u(s,a),this.set(r,e),e}async request(t){const e=new Headers(this.getConfig("headers")),i=window.setTimeout(()=>{throw window.clearTimeout(i),"Request Timed Out!"},this.getConfig("timeout"));try{let s=await fetch(t,{mode:"same-origin",method:"GET",headers:e,cache:"default",credentials:"same-origin"});if(window.clearTimeout(i),s.status>=200&&s.status<300)return await s.text();throw new Error(s.statusText||""+s.status)}catch(t){throw window.clearTimeout(i),t}}}
/*!
 * @okikio/event-emitter v1.0.5
 * (c) 2020 Okiki Ojo
 * Released under the MIT license
 */
/*!
 * managerjs v1.0.9
 * (c) 2020 Okiki Ojo
 * Released under the MIT license
 */class m{constructor(t){this.map=new Map(t)}getMap(){return this.map}get(t){return this.map.get(t)}keys(){return[...this.map.keys()]}values(){return[...this.map.values()]}set(t,e){return this.map.set(t,e),this}add(t){return this.set(this.size,t),this}get size(){return this.map.size}last(t=1){let e=this.keys()[this.size-t];return this.get(e)}prev(){return this.last(2)}delete(t){return this.map.delete(t),this}clear(){return this.map.clear(),this}has(t){return this.map.has(t)}entries(){return this.map.entries()}forEach(t=((...t)=>{}),e){return this.map.forEach(t,e),this}[Symbol.iterator](){return this.entries()}methodCall(t,...e){return this.forEach(i=>{i[t](...e)}),this}async asyncMethodCall(t,...e){for await(let[,i]of this.map)await i[t](...e);return this}}class d{constructor({callback:t=(()=>{}),scope:e=null,name:i="event"}){this.listener={callback:t,scope:e,name:i}}getCallback(){return this.listener.callback}getScope(){return this.listener.scope}getEventName(){return this.listener.name}toJSON(){return this.listener}}class p extends m{constructor(t="event"){super(),this.name=t}}class f extends m{constructor(){super()}getEvent(t){let e=this.get(t);return e instanceof p?e:(this.set(t,new p(t)),this.get(t))}newListener(t,e,i){let s=this.getEvent(t);return s.add(new d({name:t,callback:e,scope:i})),s}on(t,e,i){if(void 0===t)return this;let s,r,n;return"string"==typeof t&&(t=t.split(/\s/g)),Object.keys(t).forEach(a=>{"object"!=typeof t||Array.isArray(t)?(s=t[a],r=e,n=i):(s=a,r=t[a],n=e),this.newListener(s,r,n)},this),this}removeListener(t,e,i){let s=this.getEvent(t);if(e){let r,n=0,a=s.size,o=new d({name:t,callback:e,scope:i});for(;n<a&&(r=s.get(n),console.log(r),r.getCallback()!==o.getCallback()||r.getScope()!==o.getScope());n++);s.delete(n)}return s}off(t,e,i){if(void 0===t)return this;let s,r,n;return"string"==typeof t&&(t=t.split(/\s/g)),Object.keys(t).forEach(a=>{"object"!=typeof t||Array.isArray(t)?(s=t[a],r=e,n=i):(s=a,r=t[a],n=e),r?this.removeListener(s,r,n):this.delete(s)},this),this}once(t,e,i){if(void 0===t)return this;"string"==typeof t&&(t=t.split(/\s/g));let s=(...r)=>{this.off(t,s,i),e.apply(i,r)};return this.on(t,s,i),this}emit(t,...e){return void 0===t||("string"==typeof t&&(t=t.split(/\s/g)),t.forEach(t=>{let i=this.getEvent(t);const s=new CustomEvent(t,{detail:e});window.dispatchEvent(s),i.forEach(t=>{let{callback:i,scope:s}=t.toJSON();i.apply(s,e)})},this)),this}}class y extends s{install(){let t=this.manager.getApp();this.PageManager=t.getPages(),this.EventEmitter=t.getEmitter(),this.HistoryManager=t.getHistory(),this.ServiceManager=t.getServices(),this.TransitionManager=t.getTransitions()}boot(){}initEvents(){}stopEvents(){}stop(){this.stopEvents()}}class w extends r{constructor(t){super(t)}async boot(){await this.asyncMethodCall("boot")}initEvents(){return this.methodCall("initEvents"),this}stopEvents(){return this.methodCall("stopEvents"),this}stop(){return this.methodCall("stop"),this}}class E extends s{constructor(){super(),this.name="Transition"}init({oldPage:t,newPage:e,trigger:i}){return this.oldPage=t,this.newPage=e,this.trigger=i,this.boot(),this}boot(){}initEvents(){}stopEvents(){}stop(){this.stopEvents()}getName(){return this.name}getOldPage(){return this.oldPage}getNewPage(){return this.newPage}getTrigger(){return this.trigger}out({done:t}){t()}in({done:t}){t()}async start(t){let e=this.oldPage.getWrapper(),i=this.newPage.getWrapper();return document.title=this.newPage.getTitle(),new Promise(async s=>{t.emit("BEFORE-TRANSITION-OUT"),await new Promise(t=>{let e=this.out({from:this.oldPage,trigger:this.trigger,done:t});e.then&&e.then(t)}),t.emit("AFTER-TRANSITION-OUT"),await new Promise(t=>{e.insertAdjacentElement("beforebegin",i),e.remove(),t()}),t.emit("BEFORE-TRANSITION-IN"),await new Promise(t=>{let e=this.in({from:this.oldPage,to:this.newPage,trigger:this.trigger,done:t});e.then&&e.then(t)}),t.emit("AFTER_TRANSITION_IN"),s()})}}class b extends r{constructor(t){super(t)}add(t){let e=t.getName();return this.set(e,t),this}async boot({name:t,oldPage:e,newPage:i,trigger:s}){let r=this.get(t);r.init({oldPage:e,newPage:i,trigger:s});let n=this.getApp().getEmitter();return await r.start(n)}initEvents(){return this.methodCall("initEvents"),this}stopEvents(){return this.methodCall("stopEvents"),this}}class v extends y{init(t,e,i,s){this.rootElement=e,this.name=t,this.selector=i,this.index=s}getRootElement(){return this.rootElement}getSelector(){return this.selector}getIndex(){return this.index}getName(){return this.name}}class S extends r{constructor(t){super(t),this.activeBlocks=new r(t)}init(){this.forEach(t=>{let e=t.getName(),i=t.getBlock(),s=`[${this.getConfig("blockAttr",!1)}="${e}"]`,r=[...document.querySelectorAll(s)];for(let t=0,n=r.length;t<n;t++){let n=new i;n.init(e,r[t],s,t),this.activeBlocks.set(t,n)}})}getActiveBlocks(){return this.activeBlocks}async boot(){await this.activeBlocks.asyncMethodCall("boot")}refresh(){const t=this.getApp().getEmitter();t.on("BEFORE_TRANSITION_OUT",()=>{this.stop()}),t.on("AFTER_TRANSITION_IN",()=>{this.init(),this.boot()})}initEvents(){return this.activeBlocks.methodCall("initEvents"),this.refresh(),this}stopEvents(){return this.activeBlocks.methodCall("stopEvents"),this}stop(){return this.activeBlocks.methodCall("stop"),this.activeBlocks.clear(),this}}
/*!
 * walijs v1.0.6
 * (c) 2020 Okiki Ojo
 * Released under the MIT license
 */
/*!
 * @okikio/event-emitter v1.0.5
 * (c) 2020 Okiki Ojo
 * Released under the MIT license
 */
/*!
 * managerjs v1.0.9
 * (c) 2020 Okiki Ojo
 * Released under the MIT license
 */
class A{constructor(t){this.map=new Map(t)}getMap(){return this.map}get(t){return this.map.get(t)}keys(){return[...this.map.keys()]}values(){return[...this.map.values()]}set(t,e){return this.map.set(t,e),this}add(t){return this.set(this.size,t),this}get size(){return this.map.size}last(t=1){let e=this.keys()[this.size-t];return this.get(e)}prev(){return this.last(2)}delete(t){return this.map.delete(t),this}clear(){return this.map.clear(),this}has(t){return this.map.has(t)}entries(){return this.map.entries()}forEach(t=((...t)=>{}),e){return this.map.forEach(t,e),this}[Symbol.iterator](){return this.entries()}methodCall(t,...e){return this.forEach(i=>{i[t](...e)}),this}async asyncMethodCall(t,...e){for await(let[,i]of this.map)await i[t](...e);return this}}class k{constructor({callback:t=(()=>{}),scope:e=null,name:i="event"}){this.listener={callback:t,scope:e,name:i}}getCallback(){return this.listener.callback}getScope(){return this.listener.scope}getEventName(){return this.listener.name}toJSON(){return this.listener}}class P extends A{constructor(t="event"){super(),this.name=t}}class T extends A{constructor(){super()}getEvent(t){let e=this.get(t);return e instanceof P?e:(this.set(t,new P(t)),this.get(t))}newListener(t,e,i){let s=this.getEvent(t);return s.add(new k({name:t,callback:e,scope:i})),s}on(t,e,i){if(void 0===t)return this;let s,r,n;return"string"==typeof t&&(t=t.split(/\s/g)),Object.keys(t).forEach(a=>{"object"!=typeof t||Array.isArray(t)?(s=t[a],r=e,n=i):(s=a,r=t[a],n=e),this.newListener(s,r,n)},this),this}removeListener(t,e,i){let s=this.getEvent(t);if(e){let r,n=0,a=s.size,o=new k({name:t,callback:e,scope:i});for(;n<a&&(r=s.get(n),console.log(r),r.getCallback()!==o.getCallback()||r.getScope()!==o.getScope());n++);s.delete(n)}return s}off(t,e,i){if(void 0===t)return this;let s,r,n;return"string"==typeof t&&(t=t.split(/\s/g)),Object.keys(t).forEach(a=>{"object"!=typeof t||Array.isArray(t)?(s=t[a],r=e,n=i):(s=a,r=t[a],n=e),r?this.removeListener(s,r,n):this.delete(s)},this),this}once(t,e,i){if(void 0===t)return this;"string"==typeof t&&(t=t.split(/\s/g));let s=(...r)=>{this.off(t,s,i),e.apply(i,r)};return this.on(t,s,i),this}emit(t,...e){return void 0===t||("string"==typeof t&&(t=t.split(/\s/g)),t.forEach(t=>{let i=this.getEvent(t);const s=new CustomEvent(t,{detail:e});window.dispatchEvent(s),i.forEach(t=>{let{callback:i,scope:s}=t.toJSON();i.apply(s,e)})},this)),this}}const C=t=>{return Array.isArray(t)?t:"string"==typeof t||t instanceof Node?"string"==typeof(e=t)?Array.from(document.querySelectorAll(e)):[e]:t instanceof NodeList||t instanceof HTMLCollection?Array.from(t):[];var e},O=(t,e)=>"function"==typeof t?t(...e):t,L=(t,e)=>{let i,s,r={},n=Object.keys(t);for(let a=0,o=n.length;a<o;a++)i=n[a],s=t[i],r[i]=O(s,e);return r},x={ease:"ease",in:"ease-in",out:"ease-out","in-out":"ease-in-out","in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","in-out-expo":"cubic-bezier(1, 0, 0, 1)","in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},N={keyframes:[],loop:1,delay:0,speed:1,endDelay:0,easing:"ease",autoplay:!0,duration:1e3,onfinish(){},fillMode:"auto",direction:"normal"};class R{constructor(t={}){this.options={},this.targets=[],this.properties={},this.animations=new Map,this.duration=0,this.emitter=new T;let{options:e,...i}=t;this.options=Object.assign({},N,e,i);let s,{loop:r,delay:n,speed:a,easing:o,endDelay:h,duration:l,direction:c,fillMode:u,onfinish:g,target:m,keyframes:d,autoplay:p,...f}=this.options;this.mainElement=document.createElement("span"),this.targets=C(m),this.properties=f;for(let t=0,e=this.targets.length;t<e;t++){let i=this.targets[t],a={easing:(y=o,/^(ease|in|out)/.test(y)?x[y]:y),iterations:!0===r?1/0:r,direction:c,endDelay:h,duration:l,delay:n,fill:u},m=O(d,[t,e,i]);s=m.length?m:this.properties,a=L(a,[t,e,i]),m.length>0||(s=L(s,[t,e,i]));let p=a.delay+a.duration*a.iterations+a.endDelay;this.duration<p&&(this.duration=p);let f=i.animate(s,a);f.onfinish=()=>{g(i,t,e)},this.animations.set(i,f)}var y;this.mainAnimation=this.mainElement.animate([{opacity:"0"},{opacity:"1"}],{duration:this.duration,easing:"linear"}),this.setSpeed(a),p?this.play():this.pause(),this.promise=this.newPromise(),this.mainAnimation.onfinish=()=>{this.finish(this.options),window.cancelAnimationFrame(this.animationFrame)}}newPromise(){return new Promise((t,e)=>{try{this.finish=e=>(this.emit("finish",e),t(e))}catch(t){e(t)}})}then(t,e){return this.promise.then(t,e)}catch(t){return this.promise.catch(t)}finally(t){return this.promise.finally(t)}loop(){this.animationFrame=window.requestAnimationFrame(this.loop.bind(this)),this.emit("tick change",this.getCurrentTime())}on(t,e,i){return this.emitter.on(t,e,i),this}off(t,e,i){return this.emitter.off(t,e,i),this}emit(t,...e){return this.emitter.emit(t,...e),this}getAnimation(t){return this.animations.get(t)}play(){return"finished"!==this.mainAnimation.playState&&(this.mainAnimation.play(),this.animationFrame=requestAnimationFrame(this.loop.bind(this)),this.animations.forEach(t=>{"finished"!==t.playState&&t.play()}),this.emit("play")),this}pause(){return"finished"!==this.mainAnimation.playState&&(this.mainAnimation.pause(),window.cancelAnimationFrame(this.animationFrame),this.animations.forEach(t=>{"finished"!==t.playState&&t.pause()}),this.emit("pause")),this}getDuration(){return this.duration}getCurrentTime(){return this.mainAnimation.currentTime}setCurrentTime(t){return this.mainAnimation.currentTime=t,this.animations.forEach(e=>{e.currentTime=t}),this}getProgress(){return this.getCurrentTime()/this.duration}setProgress(t){return this.mainAnimation.currentTime=t*this.duration,this.animations.forEach(e=>{e.currentTime=t*this.duration}),this}getSpeed(){return this.mainAnimation.playbackRate}setSpeed(t=1){return this.mainAnimation.playbackRate=t,this.animations.forEach(e=>{e.playbackRate=t}),this}reset(){this.setCurrentTime(0),this.promise=this.newPromise(),this.options.autoplay?this.play():this.pause()}getPlayState(){return this.mainAnimation.playState}getOptions(){return this.options}toJSON(){return this.getOptions()}}const I=(t={})=>new R(t);const H=new class extends s{constructor(t,e){super(),this.name=t,this.block=e}getName(){return this.name}getBlock(){return this.block}}("InViewBlock",class extends v{constructor(){super(...arguments),this.inView=!1}boot(){this.observerOptions={root:null,rootMargin:"0px",threshold:.1},this.observer=new IntersectionObserver(t=>{this.onIntersectionCallback(t)},this.observerOptions),this.imgs=[],this.direction="right",this.xPercent=30,this.rootElement.hasAttribute("data-direction")&&(this.direction=this.rootElement.getAttribute("data-direction")),"left"===this.direction&&(this.xPercent=-this.xPercent),this.imgs=[...this.rootElement.querySelectorAll("img")],this.observe()}observe(){this.observer.observe(this.rootElement)}unobserve(){this.observer.unobserve(this.rootElement)}onScreen(){I({target:this.rootElement,transform:[`translateX(${this.xPercent}%)`,"translateX(0%)"],opacity:[0,1],duration:1500,delay:.15,easing:"out-quint",onfinish(t){t.style.transform="translateX(0%)",t.style.opacity="1"}})}offScreen(){this.rootElement.style.transform=`translateX(${this.xPercent}%)`,this.rootElement.style.opacity="0"}onIntersectionCallback(t){if(!this.inView)for(let e of t)e.intersectionRatio>0?(this.onScreen(),this.inView=!0):this.offScreen()}stopEvents(){this.unobserve()}});class z extends E{constructor(){super(...arguments),this.name="slide",this.duration=500,this.direction="right"}out({from:t}){let{duration:e,direction:i}=this,s=t.getWrapper();return window.scroll({top:0,behavior:"smooth"}),I({target:s,keyframes:[{transform:"translateX(0%)",opacity:1},{transform:`translateX(${"left"===i?"-":""}25%)`,opacity:0}],duration:e,easing:"in-quint",onfinish:t=>{t.style.opacity="0",t.style.transform=`translateX(${"left"===i?"-":""}25%)`}})}in({to:t}){let{duration:e}=this,i=t.getWrapper();return I({target:i,keyframes:[{transform:`translateX(${"right"===this.direction?"-":""}25%)`,opacity:0},{transform:"translateX(0%)",opacity:1}],duration:e,easing:"out-quint",onfinish(t){t.style.opacity="1",t.style.transform="translateX(0%)"}})}}const M=document.querySelector("html");try{let t=(()=>{const t=window.localStorage.getItem("theme");return"string"==typeof t?t:null})();null===t&&(t=(()=>{const t=window.matchMedia("(prefers-color-scheme: dark)");return"boolean"==typeof t.matches?t.matches?"dark":"light":null})()),t&&M.setAttribute("theme",t)}catch(t){console.warn("Theming isn't available on this browser.")}let q=t=>{M.setAttribute("theme",t),(t=>{"string"==typeof t&&window.localStorage.setItem("theme",t)})(t)};window.matchMedia("(prefers-color-scheme: dark)").addListener(t=>{q(t.matches?"dark":"light")});const B=new class{constructor(t={}){this.register(t)}register(t={}){this.config=t instanceof e?t:new e(t),this.transitions=new b(this),this.services=new w(this),this.blocks=new S(this),this.history=new l,this.pages=new g(this),this.emitter=new f;let i=(()=>{document.removeEventListener("DOMContentLoaded",i),window.removeEventListener("load",i),this.emitter.emit("READY")}).bind(this);return document.addEventListener("DOMContentLoaded",i),window.addEventListener("load",i),this}getConfig(...t){return this.config.getConfig(...t)}getEmitter(){return this.emitter}getBlocks(){return this.blocks}getServices(){return this.services}getPages(){return this.pages}getTransitions(){return this.transitions}getHistory(){return this.history}getBlock(t){return this.blocks.get(t)}getActiveBlock(t){return this.blocks.getActiveBlocks().get(t)}getService(t){return this.services.get(t)}getTransition(t){return this.transitions.get(t)}getState(t){return this.history.get(t)}get(t,e){switch(t.toLowerCase()){case"service":this.getService(e);break;case"transition":this.getTransition(e);break;case"state":this.getState(e);break;case"block":this.getActiveBlock(e);break;default:throw`Error: can't get type '${t}', it is not a recognized type. Did you spell it correctly.`}return this}async loadPage(t){return await this.pages.load(t)}async load(t,e){switch(t.toLowerCase()){case"page":return await this.loadPage(e);default:return Promise.resolve(this.get(t,e))}}addBlock(t){return this.blocks.add(t),this}addService(t){return this.services.add(t),this}addTransition(t){return this.transitions.add(t),this}addState(t){return this.history.addState(t),this}add(t,e){switch(t.toLowerCase()){case"service":this.addService(e);break;case"transition":this.addTransition(e);break;case"state":this.addState(e);break;case"block":this.addBlock(e);break;default:throw`Error: can't add type '${t}', it is not a recognized type. Did you spell it correctly.`}return this}async boot(){return this.blocks.init(),await this.services.boot(),await this.blocks.boot(),this.services.initEvents(),this.blocks.initEvents(),this.transitions.initEvents(),Promise.resolve(this)}stop(){return this.services.stop(),this.blocks.stop(),this.transitions.stopEvents(),this}currentPage(){let t=this.history.last();return this.pages.get(t.getURLPathname())}on(t,e){return this.emitter.on(t,e,this),this}off(t,e){return this.emitter.off(t,e,this),this}once(t,e){return this.emitter.once(t,e,this),this}emit(t,...e){return this.emitter.emit(t,...e),this}};B.add("service",new class extends y{constructor(){super(...arguments),this.ignoreURLs=[],this.prefetchIgnore=!1,this.isTransitioning=!1,this.stopOnTransitioning=!1,this.stickyScroll=!0,this.forceOnError=!1,this.autoScrollOnHash=!0}transitionStart(){this.isTransitioning=!0}transitionStop(){this.isTransitioning=!1}boot(){let t=new h;this.HistoryManager.add(t),this.changeState("replace",t)}getTransitionName(t){if(!t||!t.getAttribute)return null;let e=t.getAttribute(this.getConfig("transitionAttr",!1));return"string"==typeof e?e:null}validLink(t,e,i){let s=!window.history.pushState,r=!t||!i,a=e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey,o=t.hasAttribute("target")&&"_blank"===t.target,h=t.protocol!==location.protocol||t.hostname!==location.hostname,l="string"==typeof t.getAttribute("download"),c=t.hasAttribute(this.getConfig("preventSelfAttr",!1)),u=Boolean(t.closest(this.getConfig("preventAllAttr"))),g=c&&u,m=(new n).getFullPath()===new n(i).getFullPath();return!(r||s||a||o||h||l||g||m)}getHref(t){return t&&t.tagName&&"a"===t.tagName.toLowerCase()&&"string"==typeof t.href?t.href:null}getLink(t){let e=t.target,i=this.getHref(e);for(;e&&!i;)e=e.parentNode,i=this.getHref(e);if(e&&this.validLink(e,t,i))return e}onClick(t){let e=this.getLink(t);if(!e)return;if(this.isTransitioning&&this.stopOnTransitioning)return t.preventDefault(),void t.stopPropagation();let i=this.getHref(e);this.EventEmitter.emit("ANCHOR-CLICK CLICK",t),this.go({href:i,trigger:e,event:t})}getDirection(t){return Math.abs(t)>1?t>0?"forward":"back":0===t?"popstate":t>0?"back":"forward"}force(t){window.location.assign(t)}go({href:t,trigger:e="HistoryManager",event:i}){if(this.isTransitioning&&this.stopOnTransitioning)return void this.force(t);let s,r=new n(t),a=this.HistoryManager.last(),l=a.getURL();if(!l.equalTo(r)){if(i&&i.state){this.EventEmitter.emit("POPSTATE",i);let{state:t}=i,{index:n,transition:o,data:h}=t,l=a.getIndex(),c=l-n;if(s=o,"popstate"!==(e=this.getDirection(c))){let{x:t,y:e}=h.scroll;window.scroll({top:e,left:t,behavior:"smooth"})}"back"===e?(this.HistoryManager.delete(l),this.EventEmitter.emit("POPSTATE-BACK",i)):"forward"===e&&(this.HistoryManager.addState({url:r,transition:o,data:h}),this.EventEmitter.emit("POPSTATE-FORWARD",i))}else{s=this.getTransitionName(e)||"default";const t=new o,n=this.HistoryManager.size,a=new h({url:r,index:n,transition:s,data:{scroll:t}});if(this.stickyScroll){let{x:e,y:i}=t;window.scroll({top:i,left:e,behavior:"smooth"})}else window.scroll({top:0,left:0,behavior:"smooth"});this.HistoryManager.add(a),this.changeState("push",a),this.EventEmitter.emit("HISTORY-NEW-ITEM",i)}return i&&(i.stopPropagation(),i.preventDefault()),this.EventEmitter.emit("GO",i),this.load({oldHref:l.getPathname(),href:t,trigger:e,transitionName:s})}this.hashAction(r.hash)}changeState(t,e){let i=e.getURL().getFullPath(),s=[e.toJSON(),"",i];if(window.history)switch(t){case"push":window.history.pushState.apply(window.history,s);break;case"replace":window.history.replaceState.apply(window.history,s)}}async load({oldHref:t,href:e,trigger:i,transitionName:s="default"}){try{let r,n=this.PageManager.get(t);this.EventEmitter.emit("PAGE-LOADING",{href:e,oldPage:n,trigger:i});try{try{r=await this.PageManager.load(e),this.transitionStart(),this.EventEmitter.emit("PAGE-LOAD-COMPLETE",{newPage:r,oldPage:n,trigger:i})}catch(t){throw"[PJAX] Page load error: "+t}this.EventEmitter.emit("NAVIGATION-START",{oldPage:n,newPage:r,trigger:i,transitionName:s});try{this.EventEmitter.emit("TRANSITION-START",s);let t=await this.TransitionManager.boot({name:s,oldPage:n,newPage:r,trigger:i});this.EventEmitter.emit("TRANSITION-END",{transition:t})}catch(t){throw"[PJAX] Transition error: "+t}this.EventEmitter.emit("NAVIGATION-END",{oldPage:n,newPage:r,trigger:i,transitionName:s}),this.hashAction()}catch(t){throw this.transitionStop(),t}this.transitionStop()}catch(t){this.forceOnError?this.force(e):console.error(t)}}hashAction(t=window.location.hash){if(this.autoScrollOnHash){let e=t.slice(1);if(e.length){let t=document.getElementById(e);if(t)if(t.scrollIntoView)t.scrollIntoView({behavior:"smooth"});else{let{left:e,top:i}=t.getBoundingClientRect();window.scroll({left:e,top:i,behavior:"smooth"})}}}}ignoredURL({pathname:t}){return this.ignoreURLs.length&&this.ignoreURLs.some(e=>"string"==typeof e?e===t:null!==e.exec(t))}onHover(t){let e=this.getLink(t);if(!e)return;const i=new n(this.getHref(e)),s=i.getPathname();this.ignoredURL(i)||this.PageManager.has(s)||(this.EventEmitter.emit("ANCHOR-HOVER HOVER",t),(async()=>{try{await this.PageManager.load(i)}catch(t){console.warn("[PJAX] Prefetch error: ",t)}})())}onStateChange(t){this.go({href:window.location.href,trigger:"popstate",event:t})}bindEvents(){this.onHover=this.onHover.bind(this),this.onClick=this.onClick.bind(this),this.onStateChange=this.onStateChange.bind(this)}initEvents(){this.bindEvents(),!0!==this.prefetchIgnore&&(document.addEventListener("mouseover",this.onHover),document.addEventListener("touchstart",this.onHover)),document.addEventListener("click",this.onClick),window.addEventListener("popstate",this.onStateChange)}stopEvents(){!0!==this.prefetchIgnore&&(document.removeEventListener("mouseover",this.onHover),document.removeEventListener("touchstart",this.onHover)),document.removeEventListener("click",this.onClick),window.removeEventListener("popstate",this.onStateChange)}}).add("service",new class extends y{constructor(){super(...arguments),this.minimalDuration=1e3}boot(){this.rootElement=document.getElementById("splashscreen"),this.rootElement&&(this.innerEl=this.rootElement.querySelector(".splashscreen-inner"),this.bgEl=this.rootElement.querySelector(".splashscreen-bg")),this.rootElement.style.visibility="visible",this.rootElement.style.pointerEvents="auto"}initEvents(){this.rootElement&&this.hide()}async hide(){await new Promise(t=>{window.setTimeout(()=>{this.EventEmitter.emit("BEFORE_SPLASHSCREEN_HIDE"),t()},this.minimalDuration)}),await new Promise(async t=>{I({target:this.innerEl,opacity:[1,0],autoplay:!0,duration:500,onfinish(t){t.style.opacity="0"}}),this.EventEmitter.emit("START_SPLASHSCREEN_HIDE"),await I({target:this.rootElement,transform:["translateY(0%)","translateY(100%)"],duration:1200,easing:"in-out-cubic"}),this.rootElement.style.transform="translateY(100%)",this.rootElement.style.visibility="hidden",this.rootElement.style.pointerEvents="none",this.EventEmitter.emit("AFTER_SPLASHSCREEN_HIDE"),t()})}}).add("service",new class extends y{boot(){this.elements=[...document.querySelectorAll('[data-block="IntroBlock"]')],this.prepareToShow=this.prepareToShow.bind(this),this.show=this.show.bind(this)}initEvents(){this.EventEmitter.on("BEFORE_SPLASHSCREEN_HIDE",this.prepareToShow),this.EventEmitter.on("START_SPLASHSCREEN_HIDE",this.show)}stopEvents(){this.EventEmitter.off("BEFORE_SPLASHSCREEN_HIDE",this.prepareToShow),this.EventEmitter.off("START_SPLASHSCREEN_HIDE",this.show)}prepareToShow(){for(let t of this.elements)t.style.transform="translateY(200px)",t.style.opacity="0"}show(){I({target:this.elements,keyframes:[{transform:"translateY(200px)",opacity:0},{transform:"translateY(0px)",opacity:1}],delay:t=>200*(t+1),onfinish(t){t.style.transform="translateY(0px)",t.style.opacity="1"},easing:"out-cubic",duration:500})}}).add("block",H).add("transition",new class extends E{constructor(){super(...arguments),this.name="default",this.duration=500}out({from:t}){let{duration:e}=this,i=t.getWrapper();return window.scroll({top:0,behavior:"smooth"}),new Promise(async t=>{await I({target:i,opacity:[1,0],duration:e,onfinish(t){t.style.opacity="0"}}),window.scrollTo(0,0),t()})}in({to:t}){let{duration:e}=this,i=t.getWrapper();return i.style.transform="translateX(0%)",I({target:i,opacity:[0,1],duration:e,onfinish(t){t.style.opacity="1"}})}}).add("transition",new class extends E{constructor(){super(...arguments),this.name="big",this.delay=200,this.durationPerAnimation=700}boot(){this.mainElement=document.getElementById("big-transition"),this.spinnerElement=this.mainElement.querySelector(".spinner"),this.horizontalElements=[...this.mainElement.querySelector("#big-transition-horizontal").querySelectorAll("div")],this.maxLength=this.horizontalElements.length}out({from:t}){let{durationPerAnimation:e,delay:i}=this,s=t.getWrapper();return window.scroll({top:0,behavior:"smooth"}),new Promise(async t=>{I({target:s,opacity:[1,0],duration:e,onfinish(t){t.style.opacity="0"}}),this.mainElement.style.opacity="1",this.mainElement.style.visibility="visible",await I({target:this.horizontalElements,keyframes:[{transform:"scaleX(0)"},{transform:"scaleX(1)"}],delay:t=>i*(t+1),onfinish(t){t.style.transform="scaleX(1)"},easing:"out-cubic",duration:500});this.spinnerElement.style.visibility="visible";let r=await I({target:this.spinnerElement,opacity:[0,1],duration:500,onfinish(t){t.style.opacity="1"}});await I({options:r,opacity:[1,0],onfinish(t){t.style.opacity="0"},delay:1500}),this.spinnerElement.style.visibility="hidden",t()})}in({to:t}){let{durationPerAnimation:e,delay:i}=this,s=t.getWrapper();return s.style.transform="translateX(0%)",new Promise(async t=>{I({target:s,opacity:[0,1],onfinish(t){t.style.opacity="1"},duration:e}),await I({target:this.horizontalElements,keyframes:[{transform:"scaleX(1)"},{transform:"scaleX(0)"}],delay:t=>i*(t+1),onfinish(t){t.style.transform="scaleX(0)"},easing:"out-cubic",duration:500}),this.mainElement.style.opacity="0",this.mainElement.style.visibility="hidden",t()})}}).add("transition",new z).add("transition",new class extends z{constructor(){super(...arguments),this.name="slide-left",this.duration=500,this.direction="left"}}).add("transition",new class extends z{constructor(){super(...arguments),this.name="slide-right",this.duration=500,this.direction="right"}}),(async()=>{let t=()=>{let{href:t}=window.location,e=document.querySelectorAll(".navbar .nav-link");for(let i of e){let e=n.equal(i.href,t),s=i.classList.contains("active");e&&s||i.classList[e?"add":"remove"]("active")}};try{await B.boot()}catch(t){console.warn("App boot failed",t)}B.on({READY:t,GO:t})})();
