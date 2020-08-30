const z={wrapperAttr:"wrapper",noAjaxLinkAttr:"no-ajax-link",noPrefetchAttr:"no-prefetch",headers:[["x-partial","true"]],preventSelfAttr:'prevent="self"',preventAllAttr:'prevent="all"',transitionAttr:"transition",blockAttr:"block",timeout:3e4};class v{constructor(a){this.config=Object.assign({...z},a)}toAttr(a,b=!0){let{prefix:c}=this.config,d=`data${c?"-"+c:""}-${a}`;return b?`[${d}]`:d}getConfig(a,b=!0){if(typeof a!=="string")return this.config;let c=this.config[a];return typeof c==="string"?this.toAttr(c,b):c}}class m{constructor(a){this.map=new Map(a)}getMap(){return this.map}get(a){return this.map.get(a)}keys(){return Array.from(this.map.keys())}values(){return Array.from(this.map.values())}set(a,b){return this.map.set(a,b),this}add(a){let b=this.size,c=b;return this.set(c,a),this}get size(){return this.map.size}last(a=1){let b=this.keys()[this.size-a];return this.get(b)}prev(){return this.last(2)}delete(a){return this.map.delete(a),this}clear(){return this.map.clear(),this}has(a){return this.map.has(a)}entries(){return this.map.entries()}forEach(a=(...c)=>{},b){return this.map.forEach(a,b),this}[Symbol.iterator](){return this.entries()}methodCall(a,...b){return this.forEach(c=>{c[a](...b)}),this}async asyncMethodCall(a,...b){for(let[,c]of this.map)await c[a](...b);return this}}class u{constructor(){}getConfig(a,b=!0){return this.manager.getConfig(a,b)}install(){}register(a){return this.manager=a,this.install(),this}}class o extends m{constructor(a){super();this.app=a}set(a,b){return super.set(a,b),typeof b.register==="function"&&b.register(this),this}getApp(){return this.app}getConfig(a,b=!0){return this.app.getConfig(a,b)}}class j extends URL{constructor(a=window.location.href){super(a instanceof URL?a.href:a,window.location.origin)}getFullPath(){return`${this.pathname}${this.hash}`}getHash(){return this.hash.slice(1)}clean(){return this.toString().replace(/(\/#.*|\/|#.*)$/,"")}getPathname(){return this.pathname}equalTo(a){return this.clean()==a.clean()}static equal(a,b){let c=a instanceof j?a:new j(a),d=b instanceof j?b:new j(b);return c.equalTo(d)}}class w{constructor(a=window.scrollX,b=window.scrollY){this.x=a,this.y=b}}class q{constructor(a={url:new j(),index:0,transition:"default",data:{scroll:new w(),trigger:"HistoryManager"}}){this.state=a}getIndex(){return this.state.index}setIndex(a){return this.state.index=a,this}getURL(){return this.state.url}getURLPathname(){return this.state.url.getPathname()}getTransition(){return this.state.transition}getData(){return this.state.data}toJSON(){const{url:a,index:b,transition:c,data:d}=this.state;return{url:a.getFullPath(),index:b,transition:c,data:d}}}class A extends m{constructor(){super()}add(a){let b=a,c=this.size;return super.add(b),b.setIndex(c),this}addState(a){let b=a instanceof q?a:new q(a);return this.add(b),this}}const B=new DOMParser();class x extends u{constructor(a=new j(),b=document){super();this.url=a,typeof b==="string"?this.dom=B.parseFromString(b,"text/html"):this.dom=b||document;const{title:c,head:d,body:e}=this.dom;this.title=c,this.head=d,this.body=e}install(){this.wrapper=this.body.querySelector(this.getConfig("wrapperAttr"))}getURL(){return this.url}getPathname(){return this.url.pathname}getTitle(){return this.title}getHead(){return this.head}getBody(){return this.body}getWrapper(){return this.wrapper}getDOM(){return this.dom}}class C extends o{constructor(a){super(a);this.loading=new m();let b=new j().getPathname();this.set(b,new x())}getLoading(){return this.loading}async load(a=new j()){let b=a instanceof URL?a:new j(a),c=b.getPathname(),d,e;if(this.has(c))return d=this.get(c),Promise.resolve(d);this.loading.has(c)?e=this.loading.get(c):(e=this.request(c),this.loading.set(c,e));let f=await e;return this.loading.delete(c),d=new x(b,f),this.set(c,d),d}async request(a){const b=new Headers(this.getConfig("headers")),c=window.setTimeout(()=>{throw window.clearTimeout(c),"Request Timed Out!"},this.getConfig("timeout"));try{let d=await fetch(a,{mode:"same-origin",method:"GET",headers:b,cache:"default",credentials:"same-origin"});window.clearTimeout(c);if(d.status>=200&&d.status<300)return await d.text();const e=new Error(d.statusText||""+d.status);throw e}catch(d){throw window.clearTimeout(c),d}}}class y{constructor({callback:a=()=>{},scope:b=null,name:c="event"}){this.listener={callback:a,scope:b,name:c}}getCallback(){return this.listener.callback}getScope(){return this.listener.scope}getEventName(){return this.listener.name}toJSON(){return this.listener}}class r extends m{constructor(a="event"){super();this.name=a}}class D extends m{constructor(){super()}getEvent(a){let b=this.get(a);return b instanceof r?b:(this.set(a,new r(a)),this.get(a))}newListener(a,b,c){let d=this.getEvent(a);return d.add(new y({name:a,callback:b,scope:c})),d}on(a,b,c){if(typeof a=="undefined")return this;typeof a=="string"&&(a=a.trim().split(/\s/g));let d,e,f=typeof a=="object"&&!Array.isArray(a),g=f?b:c;return f||(e=b),Object.keys(a).forEach(h=>{f?(d=h,e=a[h]):d=a[h],this.newListener(d,e,g)},this),this}removeListener(a,b,c){let d=this.get(a);if(d instanceof r&&b){let e=new y({name:a,callback:b,scope:c});d.forEach((f,g)=>{if(f.getCallback()===e.getCallback()&&f.getScope()===e.getScope())return d.delete(g)})}return d}off(a,b,c){if(typeof a=="undefined")return this;typeof a=="string"&&(a=a.trim().split(/\s/g));let d,e,f=typeof a=="object"&&!Array.isArray(a),g=f?b:c;return f||(e=b),Object.keys(a).forEach(h=>{f?(d=h,e=a[h]):d=a[h],typeof e==="function"?this.removeListener(d,e,g):this.delete(d)},this),this}once(a,b,c){if(typeof a=="undefined")return this;typeof a=="string"&&(a=a.trim().split(/\s/g));let d,e,f=typeof a==="object"&&!Array.isArray(a),g=f?b:c;return f||(e=b),Object.keys(a).forEach(h=>{f?(d=h,e=a[h]):d=a[h];let i=(...k)=>{f?(d=h,e=a[h]):d=a[h],this.off(d,i,g),e.apply(g,k)};this.on(d,i,g)},this),this}emit(a,...b){return typeof a=="undefined"?this:(typeof a=="string"&&(a=a.trim().split(/\s/g)),a.forEach(c=>{let d=this.get(c);d instanceof r&&d.forEach(e=>{let{callback:f,scope:g}=e.toJSON();f.apply(g,b)})},this),this)}}class s extends u{install(){let a=this.manager.getApp();this.PageManager=a.getPages(),this.EventEmitter=a.getEmitter(),this.HistoryManager=a.getHistory(),this.ServiceManager=a.getServices(),this.TransitionManager=a.getTransitions()}init(...a){}boot(){this.initEvents()}initEvents(){}stopEvents(){}stop(){this.stopEvents()}}class E extends o{constructor(a){super(a)}init(){return this.methodCall("init",this.getApp()),this}boot(){return this.methodCall("boot"),this}stop(){return this.methodCall("stop"),this}}class H extends s{constructor(){super();this.name="Transition"}init({oldPage:a,newPage:b,trigger:c}){super.init(),this.oldPage=a,this.newPage=b,this.trigger=c}getName(){return this.name}getOldPage(){return this.oldPage}getNewPage(){return this.newPage}getTrigger(){return this.trigger}out({done:a}){a()}in({done:a}){a()}async start(a){let b=this.oldPage.getWrapper(),c=this.newPage.getWrapper();document.title=this.newPage.getTitle();if(!(b instanceof Node)||!(c instanceof Node))throw`[Wrapper] the wrapper from the ${c instanceof Node?"current":"next"} page cannot be found. The wrapper must be an element that has the attribute ${this.getConfig("wrapperAttr")}.`;return a.emit("BEFORE_TRANSITION_OUT"),await new Promise(d=>{let e=this.out({from:this.oldPage,trigger:this.trigger,done:d});e.then&&e.then(d)}),a.emit("AFTER_TRANSITION_OUT"),await new Promise(d=>{b.insertAdjacentElement("beforebegin",c),b.remove(),a.emit("CONTENT_REPLACED"),d()}),a.emit("BEFORE_TRANSITION_IN"),await new Promise(d=>{let e=this.in({from:this.oldPage,to:this.newPage,trigger:this.trigger,done:d});e.then&&e.then(d)}),a.emit("AFTER_TRANSITION_IN"),this}}class F extends o{constructor(a){super(a)}add(a){let b=a.getName();return this.set(b,a),this}async boot({name:a,oldPage:b,newPage:c,trigger:d}){let e=this.get(a);e.init({oldPage:b,newPage:c,trigger:d});let f=this.getApp().getEmitter();return await e.start(f)}}class I extends s{init({name:a,rootElement:b,selector:c,index:d,length:e}){this.rootElement=b,this.name=a,this.selector=c,this.index=d,this.length=e}getRootElement(){return this.rootElement}getSelector(){return this.selector}getLength(){return this.length}getIndex(){return this.index}getID(){return this.id}setID(a){return this.id=a,this}getName(){return this.name}}class J extends u{constructor({name:a,block:b}){super();this.name=a,this.block=b}getName(){return this.name}getBlock(){return this.block}}class G extends o{constructor(a){super(a);this.activeBlocks=new m(),this.activeIDs=new m()}build(a){let b=this.getApp();for(let[,c]of this){let d=c.getName(),e=`[${this.getConfig("blockAttr",!1)}="${d}"]`,f=[...document.querySelectorAll(e)];Array.isArray(this.activeIDs[d])||(this.activeIDs[d]=[]);let g=new o(b),h=c.getBlock();for(let i=0,k=f.length;i<k;i++){let n=f[i],l=n.id,p=this.activeIDs[d][i];if(p!==""&&p!==l||a){let t=new h();t.init({name:d,rootElement:n,selector:e,index:i,length:k}),t.setID(l),this.activeIDs[d][i]=l,g.set(i,t)}}this.activeBlocks.set(d,g)}}init(){return this.build(!0),this}initEvents(){let a=this.getApp();const b=a.getEmitter();return b.on("CONTENT_REPLACED",this.reload,this),this}flush(){return this.activeBlocks.forEach(a=>{a.methodCall("stop")}),this.activeBlocks.clear(),this}reload(){return this.flush(),this.init(),this.bootBlocks(),this}observe(a){}bootBlocks(){return this.activeBlocks.forEach(a=>{a.methodCall("boot")}),this}boot(){return this.initEvents(),this.bootBlocks(),this}stopEvents(){this.activeBlocks.forEach(c=>{c.methodCall("stopEvents")});let a=this.getApp();const b=a.getEmitter();return b.off("BEFORE_TRANSITION_IN",this.reload,this),this}stop(){return this.flush(),this.stopEvents(),this}getActiveBlocks(){return this.activeBlocks}}class K{constructor(a={}){this.register(a)}register(a={}){this.config=a instanceof v?a:new v(a),this.transitions=new F(this),this.services=new E(this),this.blocks=new G(this),this.history=new A(),this.pages=new C(this),this.emitter=new D();let b=(()=>{document.removeEventListener("DOMContentLoaded",b),window.removeEventListener("load",b),this.emitter.emit("READY ready")}).bind(this);return document.addEventListener("DOMContentLoaded",b),window.addEventListener("load",b),this}getConfig(a,b=!0){return this.config.getConfig(a,b)}getEmitter(){return this.emitter}getBlocks(){return this.blocks}getServices(){return this.services}getPages(){return this.pages}getTransitions(){return this.transitions}getHistory(){return this.history}getBlock(a){return this.blocks.get(a)}getActiveBlock(a,b){return this.blocks.getActiveBlocks().get(a).get(b)}getService(a){return this.services.get(a)}getTransition(a){return this.transitions.get(a)}getState(a){return this.history.get(a)}get(a,b){switch(a.toLowerCase()){case"service":return this.getService(b);case"transition":return this.getTransition(b);case"state":return this.getState(b);default:throw`Error: can't get type '${a}', it is not a recognized type. Did you spell it correctly.`}}async loadPage(a){return await this.pages.load(a)}async load(a,b){switch(a.toLowerCase()){case"page":return await this.loadPage(b);default:return Promise.resolve(this.get(a,b))}}addBlock(a){return this.blocks.add(a),this}addService(a){return this.services.add(a),this}setService(a,b){return this.services.set(a,b),this}addTransition(a){return this.transitions.add(a),this}addState(a){return this.history.addState(a),this}add(a,b){switch(a.toLowerCase()){case"service":this.addService(b);break;case"transition":this.addTransition(b);break;case"state":this.addState(b);break;case"block":this.addBlock(b);break;default:throw`Error: can't add type '${a}', it is not a recognized type. Did you spell it correctly.`}return this}boot(){return this.services.init(),this.services.boot(),this.blocks.init(),this.blocks.boot(),this}stop(){return this.services.stop(),this.blocks.stop(),this}currentPage(){let a=this.history.last();return this.pages.get(a.getURLPathname())}on(a,b){return this.emitter.on(a,b,this),this}off(a,b){return this.emitter.off(a,b,this),this}once(a,b){return this.emitter.once(a,b,this),this}emit(a,...b){return this.emitter.emit(a,...b),this}}class L extends s{constructor(){super(...arguments);this.ignoreURLs=[],this.prefetchIgnore=!1,this.isTransitioning=!1,this.stopOnTransitioning=!1,this.stickyScroll=!0,this.forceOnError=!1,this.autoScrollOnHash=!0}transitionStart(){this.isTransitioning=!0}transitionStop(){this.isTransitioning=!1}boot(){super.boot();let a=new q();this.HistoryManager.add(a),this.changeState("replace",a)}getTransitionName(a){if(!a||!a.getAttribute)return null;let b=a.getAttribute(this.getConfig("transitionAttr",!1));return typeof b==="string"?b:null}validLink(a,b,c){let d=!window.history.pushState,e=!a||!c,f=b.which>1||b.metaKey||b.ctrlKey||b.shiftKey||b.altKey,g=a.hasAttribute("target")&&a.target==="_blank",h=a.protocol!==location.protocol||a.hostname!==location.hostname,i=typeof a.getAttribute("download")==="string",k=a.hasAttribute(this.getConfig("preventSelfAttr",!1)),n=Boolean(a.closest(this.getConfig("preventAllAttr"))),l=k&&n,p=new j().getFullPath()===new j(c).getFullPath();return!(e||d||f||g||h||i||l||p)}getHref(a){return a&&a.tagName&&a.tagName.toLowerCase()==="a"&&typeof a.href==="string"?a.href:null}getLink(a){let b=a.target,c=this.getHref(b);for(;b&&!c;)b=b.parentNode,c=this.getHref(b);return!b||!this.validLink(b,a,c)?void 0:b}onClick(a){let b=this.getLink(a);if(!b)return;if(this.isTransitioning&&this.stopOnTransitioning){a.preventDefault(),a.stopPropagation();return}let c=this.getHref(b);this.EventEmitter.emit("ANCHOR_CLICK CLICK",a),this.go({href:c,trigger:b,event:a})}getDirection(a){return Math.abs(a)>1?a>0?"forward":"back":a===0?"popstate":a>0?"back":"forward"}force(a){window.location.assign(a)}go({href:a,trigger:b="HistoryManager",event:c}){if(this.isTransitioning&&this.stopOnTransitioning){this.force(a);return}let d=new j(a),e=this.HistoryManager.last(),f=e.getURL();if(f.equalTo(d)){this.hashAction(d.hash);return}let g;if(c&&c.state){this.EventEmitter.emit("POPSTATE",c);let{state:h}=c,{index:i,transition:k,data:n}=h,l=e.getIndex(),p=l-i;b=this.getDirection(p),g=k;if(b!=="popstate"){let{x:t,y:N}=n.scroll;window.scroll({top:N,left:t,behavior:"smooth"})}b==="back"?(this.HistoryManager.delete(l),this.EventEmitter.emit("POPSTATE_BACK",c)):b==="forward"&&(this.HistoryManager.addState({url:d,transition:k,data:n}),this.EventEmitter.emit("POPSTATE_FORWARD",c))}else{g=this.getTransitionName(b)||"default";const h=new w(),i=this.HistoryManager.size,k=new q({url:d,index:i,transition:g,data:{scroll:h}});if(this.stickyScroll){let{x:n,y:l}=h;window.scroll({top:l,left:n,behavior:"smooth"})}else window.scroll({top:0,left:0,behavior:"smooth"});this.HistoryManager.add(k),this.changeState("push",k),this.EventEmitter.emit("HISTORY_NEW_ITEM",c)}return c&&(c.stopPropagation(),c.preventDefault()),this.EventEmitter.emit("GO",c),this.load({oldHref:f.getPathname(),href:a,trigger:b,transitionName:g})}changeState(a,b){let c=b.getURL(),d=c.getFullPath(),e=b.toJSON(),f=[e,"",d];if(window.history)switch(a){case"push":window.history.pushState.apply(window.history,f);break;case"replace":window.history.replaceState.apply(window.history,f);break}}async load({oldHref:a,href:b,trigger:c,transitionName:d="default"}){try{let e=this.PageManager.get(a),f;this.EventEmitter.emit("PAGE_LOADING",{href:b,oldPage:e,trigger:c});try{try{f=await this.PageManager.load(b),this.transitionStart(),this.EventEmitter.emit("PAGE_LOAD_COMPLETE",{newPage:f,oldPage:e,trigger:c})}catch(g){throw`[PJAX] Page load error: ${g}`}this.EventEmitter.emit("NAVIGATION_START",{oldPage:e,newPage:f,trigger:c,transitionName:d});try{this.EventEmitter.emit("TRANSITION_START",d);let g=await this.TransitionManager.boot({name:d,oldPage:e,newPage:f,trigger:c});this.hashAction(),this.EventEmitter.emit("TRANSITION_END",{transition:g})}catch(g){throw`[PJAX] Transition error: ${g}`}this.EventEmitter.emit("NAVIGATION_END",{oldPage:e,newPage:f,trigger:c,transitionName:d})}catch(g){throw this.transitionStop(),g}this.transitionStop()}catch(e){this.forceOnError?this.force(b):console.error(e)}}hashAction(a=window.location.hash){if(this.autoScrollOnHash){let b=a.slice(1);if(b.length){let c=document.getElementById(b);if(c)if(c.scrollIntoView)c.scrollIntoView({behavior:"smooth"});else{let{left:d,top:e}=c.getBoundingClientRect();window.scroll({left:d,top:e,behavior:"smooth"})}}}}ignoredURL({pathname:a}){return this.ignoreURLs.length&&this.ignoreURLs.some(b=>typeof b==="string"?b===a:b.exec(a)!==null)}onHover(a){let b=this.getLink(a);if(!b)return;const c=new j(this.getHref(b)),d=c.getPathname();if(this.ignoredURL(c)||this.PageManager.has(d))return;this.EventEmitter.emit("ANCHOR_HOVER HOVER",a),(async()=>{try{await this.PageManager.load(c)}catch(e){console.warn("[PJAX] prefetch error,",e)}})()}onStateChange(a){this.go({href:window.location.href,trigger:"popstate",event:a})}bindEvents(){this.onHover=this.onHover.bind(this),this.onClick=this.onClick.bind(this),this.onStateChange=this.onStateChange.bind(this)}initEvents(){this.bindEvents(),this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.onHover),document.addEventListener("touchstart",this.onHover)),document.addEventListener("click",this.onClick),window.addEventListener("popstate",this.onStateChange)}stopEvents(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.onHover),document.removeEventListener("touchstart",this.onHover)),document.removeEventListener("click",this.onClick),window.removeEventListener("popstate",this.onStateChange)}}class M extends s{constructor(a=[]){super();this.routes=new m();for(const b of a)this.add(b)}add({path:a,method:b}){const c=this.parse(a);return this.routes.set(c,b),this}parsePath(a){if(typeof a==="string")return new RegExp(a,"i");if(a instanceof RegExp)return a;throw"[Router] only regular expressions and strings are accepted as paths."}isPath(a){return typeof a==="string"||a instanceof RegExp}parse(a){let b=a,c={from:/(.*)/g,to:/(.*)/g};if(this.isPath(a))c={from:a,to:/(.*)/g};else if(this.isPath(b.from)&&this.isPath(b.to))c=b;else throw"[Router] path is neither a string, regular expression, or a { from, to } object.";let{from:d,to:e}=c;return{from:this.parsePath(d),to:this.parsePath(e)}}route(){let a=this.HistoryManager.last().getURLPathname(),b=window.location.pathname;this.routes.forEach((c,d)=>{let e=d.from,f=d.to;if(e.test(a)&&f.test(b)){let g=e.exec(a),h=f.exec(b);c({from:g,to:h})}})}initEvents(){this.EventEmitter.on("READY",this.route,this),this.EventEmitter.on("PAGE_LOADING",this.route,this)}stopEvents(){this.EventEmitter.off("READY",this.route,this),this.EventEmitter.off("PAGE_LOADING",this.route,this)}}export{o as AdvancedManager,K as App,I as Block,J as BlockIntent,G as BlockManager,v as CONFIG,z as CONFIG_DEFAULTS,w as Coords,r as Event,D as EventEmitter,A as HistoryManager,y as Listener,m as Manager,u as ManagerItem,B as PARSER,L as PJAX,x as Page,C as PageManager,M as Router,s as Service,E as ServiceManager,q as State,H as Transition,F as TransitionManager,j as _URL};
//# sourceMappingURL=api.mjs.map
