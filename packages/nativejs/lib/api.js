function t(){return(t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function e(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function o(t,e,n){return(o=i()?Reflect.construct:function(t,e,n){var i=[null];i.push.apply(i,e);var o=new(Function.bind.apply(t,i));return n&&r(o,n.prototype),o}).apply(null,arguments)}function s(t){var e="function"==typeof Map?new Map:void 0;return(s=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return o(t,arguments,n(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),r(i,t)})(t)}var a={wrapperAttr:"wrapper",noAjaxLinkAttr:"no-ajax-link",noPrefetchAttr:"no-prefetch",headers:[["x-partial","true"]],preventSelfAttr:'prevent="self"',preventAllAttr:'prevent="all"',transitionAttr:"transition",blockAttr:"block",timeout:3e4},c=function(){function e(e){this.config=Object.assign(t({},a),e)}var n=e.prototype;return n.toAttr=function(t,e){void 0===e&&(e=!0);var n=this.config.prefix,r="data"+(n?"-"+n:"")+"-"+t;return e?"["+r+"]":r},n.getConfig=function(t,e){if(void 0===e&&(e=!0),"string"!=typeof t)return this.config;var n=this.config[t];return"string"==typeof n?this.toAttr(n,e):n},e}();class u{constructor(t){this.map=new Map(t)}getMap(){return this.map}get(t){return this.map.get(t)}keys(){return[...this.map.keys()]}values(){return[...this.map.values()]}set(t,e){return this.map.set(t,e),this}add(t){return this.set(this.size,t),this}get size(){return this.map.size}last(t=1){let e=this.keys()[this.size-t];return this.get(e)}prev(){return this.last(2)}delete(t){return this.map.delete(t),this}clear(){return this.map.clear(),this}has(t){return this.map.has(t)}entries(){return this.map.entries()}forEach(t=((...t)=>{}),e){return this.map.forEach(t,e),this}[Symbol.iterator](){return this.entries()}methodCall(t,...e){return this.forEach(n=>{n[t](...e)}),this}async asyncMethodCall(t,...e){for await(let[,n]of this.map)await n[t](...e);return this}}var h=function(){function t(){}var e=t.prototype;return e.getConfig=function(t,e){return this.manager.getConfig(t,e)},e.install=function(){},e.register=function(t){return this.manager=t,this.install(),this},t}(),l=function(t){function n(e){var n;return(n=t.call(this)||this).app=e,n}e(n,t);var r=n.prototype;return r.set=function(e,n){return t.prototype.set.call(this,e,n),"function"==typeof n.register&&n.register(this),this},r.getApp=function(){return this.app},r.getConfig=function(){var t;return(t=this.app).getConfig.apply(t,[].slice.call(arguments))},n}(u),f=function(t){function n(e){return void 0===e&&(e=window.location.href),t.call(this,e instanceof URL?e.href:e,window.location.origin)||this}e(n,t);var r=n.prototype;return r.getFullPath=function(){return""+this.pathname+this.hash},r.getHash=function(){return this.hash.slice(1)},r.clean=function(){return this.toString().replace(/(\/#.*|\/|#.*)$/,"")},r.getPathname=function(){return this.pathname},r.equalTo=function(t){return this.clean()==t.clean()},n.equal=function(t,e){var r=t instanceof n?t:new n(t),i=e instanceof n?e:new n(e);return r.equalTo(i)},n}(s(URL)),g=new f,p=g.getPathname(),v=function(t,e){void 0===t&&(t=window.scrollX),void 0===e&&(e=window.scrollY),this.x=t,this.y=e},d=function(){function t(t){void 0===t&&(t={url:new f,index:0,transition:"default",data:{scroll:new v,trigger:"HistoryManager"}}),this.state=t}var e=t.prototype;return e.getIndex=function(){return this.state.index},e.setIndex=function(t){return this.state.index=t,this},e.getURL=function(){return this.state.url},e.getURLPathname=function(){return this.state.url.getPathname()},e.getTransition=function(){return this.state.transition},e.getData=function(){return this.state.data},e.toJSON=function(){var t=this.state,e=t.index,n=t.transition,r=t.data;return{url:t.url.getFullPath(),index:e,transition:n,data:r}},t}(),m=function(t){function n(){return t.call(this)||this}e(n,t);var r=n.prototype;return r.add=function(e){var n=e,r=this.size;return t.prototype.add.call(this,n),n.setIndex(r),this},r.addState=function(t){var e=t instanceof d?t:new d(t);return this.add(e),this},n}(u),w=new DOMParser,y=function(t){function n(e,n){var r;void 0===e&&(e=new f),void 0===n&&(n=document),(r=t.call(this)||this).url=e,r.dom="string"==typeof n?w.parseFromString(n,"text/html"):n||document;var i=r.dom,o=i.head,s=i.body;return r.title=i.title,r.head=o,r.body=s,r}e(n,t);var r=n.prototype;return r.install=function(){this.wrapper=this.body.querySelector(this.getConfig("wrapperAttr"))},r.getURL=function(){return this.url},r.getPathname=function(){return this.url.pathname},r.getTitle=function(){return this.title},r.getHead=function(){return this.head},r.getBody=function(){return this.body},r.getWrapper=function(){return this.wrapper},r.getDOM=function(){return this.dom},n}(h),E=function(t){function n(e){var n;return(n=t.call(this,e)||this).loading=new u,n.set(p,new y),n}e(n,t);var r=n.prototype;return r.getLoading=function(){return this.loading},r.load=function(t){try{var e=this;void 0===t&&(t=new f);var n,r,i=t instanceof URL?t:new f(t),o=i.getPathname();return e.has(o)?(n=e.get(o),Promise.resolve(n)):(e.loading.has(o)?r=e.loading.get(o):(r=e.request(o),e.loading.set(o,r)),Promise.resolve(r).then(function(t){return e.loading.delete(o),n=new y(i,t),e.set(o,n),n}))}catch(t){return Promise.reject(t)}},r.request=function(t){try{var e=new Headers(this.getConfig("headers")),n=window.setTimeout(function(){throw window.clearTimeout(n),"Request Timed Out!"},this.getConfig("timeout"));return Promise.resolve(function(r,i){try{var o=Promise.resolve(fetch(t,{mode:"same-origin",method:"GET",headers:e,cache:"default",credentials:"same-origin"})).then(function(t){var e;function r(n){if(e)return n;throw new Error(t.statusText||""+t.status)}window.clearTimeout(n);var i=function(){if(t.status>=200&&t.status<300)return e=1,Promise.resolve(t.text())}();return i&&i.then?i.then(r):r(i)})}catch(t){return i(t)}return o&&o.then?o.then(void 0,i):o}(0,function(t){throw window.clearTimeout(n),t}))}catch(t){return Promise.reject(t)}},n}(l);class P{constructor({callback:t=(()=>{}),scope:e=null,name:n="event"}){this.listener={callback:t,scope:e,name:n}}getCallback(){return this.listener.callback}getScope(){return this.listener.scope}getEventName(){return this.listener.name}toJSON(){return this.listener}}class b extends u{constructor(t="event"){super(),this.name=t}}class k extends u{constructor(){super()}getEvent(t){let e=this.get(t);return e instanceof b?e:(this.set(t,new b(t)),this.get(t))}newListener(t,e,n){let r=this.getEvent(t);return r.add(new P({name:t,callback:e,scope:n})),r}on(t,e,n){if(void 0===t)return this;let r,i,o;return"string"==typeof t&&(t=t.split(/\s/g)),Object.keys(t).forEach(s=>{"object"!=typeof t||Array.isArray(t)?(r=t[s],i=e,o=n):(r=s,i=t[s],o=e),this.newListener(r,i,o)},this),this}removeListener(t,e,n){let r=this.getEvent(t);if(e){let i,o=0,s=r.size,a=new P({name:t,callback:e,scope:n});for(;o<s&&(i=r.get(o),console.log(i),i.getCallback()!==a.getCallback()||i.getScope()!==a.getScope());o++);r.delete(o)}return r}off(t,e,n){if(void 0===t)return this;let r,i,o;return"string"==typeof t&&(t=t.split(/\s/g)),Object.keys(t).forEach(s=>{"object"!=typeof t||Array.isArray(t)?(r=t[s],i=e,o=n):(r=s,i=t[s],o=e),i?this.removeListener(r,i,o):this.delete(r)},this),this}once(t,e,n){if(void 0===t)return this;"string"==typeof t&&(t=t.split(/\s/g));let r=(...i)=>{this.off(t,r,n),e.apply(n,i)};return this.on(t,r,n),this}emit(t,...e){return void 0===t||("string"==typeof t&&(t=t.split(/\s/g)),t.forEach(t=>{let n=this.getEvent(t);const r=new CustomEvent(t,{detail:e});window.dispatchEvent(r),n.forEach(t=>{let{callback:n,scope:r}=t.toJSON();n.apply(r,e)})},this)),this}}var A=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var r=n.prototype;return r.install=function(){var t=this.manager.getApp();this.PageManager=t.getPages(),this.EventEmitter=t.getEmitter(),this.HistoryManager=t.getHistory(),this.ServiceManager=t.getServices(),this.TransitionManager=t.getTransitions()},r.boot=function(){},r.initEvents=function(){},r.stopEvents=function(){},r.stop=function(){this.stopEvents()},n}(h),T=function(t){function n(e){return t.call(this,e)||this}e(n,t);var r=n.prototype;return r.boot=function(){try{return Promise.resolve(this.asyncMethodCall("boot")).then(function(){})}catch(t){return Promise.reject(t)}},r.initEvents=function(){return this.methodCall("initEvents"),this},r.stopEvents=function(){return this.methodCall("stopEvents"),this},r.stop=function(){return this.methodCall("stop"),this},n}(l),S=function(t){function n(){var e;return(e=t.call(this)||this).name="Transition",e}e(n,t);var r=n.prototype;return r.init=function(t){var e=t.newPage,n=t.trigger;return this.oldPage=t.oldPage,this.newPage=e,this.trigger=n,this.boot(),this},r.boot=function(){},r.initEvents=function(){},r.stopEvents=function(){},r.stop=function(){this.stopEvents()},r.getName=function(){return this.name},r.getOldPage=function(){return this.oldPage},r.getNewPage=function(){return this.newPage},r.getTrigger=function(){return this.trigger},r.out=function(t){(0,t.done)()},r.in=function(t){(0,t.done)()},r.start=function(t){try{var e=this,n=e.oldPage.getWrapper(),r=e.newPage.getWrapper();return document.title=e.newPage.getTitle(),Promise.resolve(new Promise(function(i){try{return t.emit("BEFORE-TRANSITION-OUT"),Promise.resolve(new Promise(function(t){var n=e.out({from:e.oldPage,trigger:e.trigger,done:t});n.then&&n.then(t)})).then(function(){return t.emit("AFTER-TRANSITION-OUT"),Promise.resolve(new Promise(function(t){n.insertAdjacentElement("beforebegin",r),n.remove(),t()})).then(function(){return t.emit("BEFORE-TRANSITION-IN"),Promise.resolve(new Promise(function(t){var n=e.in({from:e.oldPage,to:e.newPage,trigger:e.trigger,done:t});n.then&&n.then(t)})).then(function(){t.emit("AFTER_TRANSITION_IN"),i()})})})}catch(t){return Promise.reject(t)}}))}catch(t){return Promise.reject(t)}},n}(h),O=function(t){function n(e){return t.call(this,e)||this}e(n,t);var r=n.prototype;return r.add=function(t){var e=t.getName();return this.set(e,t),this},r.boot=function(t){var e=t.name,n=t.oldPage,r=t.newPage,i=t.trigger;try{var o=this.get(e);o.init({oldPage:n,newPage:r,trigger:i});var s=this.getApp().getEmitter();return Promise.resolve(o.start(s))}catch(t){return Promise.reject(t)}},r.initEvents=function(){return this.methodCall("initEvents"),this},r.stopEvents=function(){return this.methodCall("stopEvents"),this},n}(l),C=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var r=n.prototype;return r.init=function(t,e,n,r){this.rootElement=e,this.name=t,this.selector=n,this.index=r},r.getRootElement=function(){return this.rootElement},r.getSelector=function(){return this.selector},r.getIndex=function(){return this.index},r.getName=function(){return this.name},n}(A),x=function(t){function n(e,n){var r;return(r=t.call(this)||this).name=e,r.block=n,r}e(n,t);var r=n.prototype;return r.getName=function(){return this.name},r.getBlock=function(){return this.block},n}(h),L=function(t){function n(e){var n;return(n=t.call(this,e)||this).activeBlocks=new l(e),n}e(n,t);var r=n.prototype;return r.init=function(){var t=this;this.forEach(function(e){for(var n=e.getName(),r=e.getBlock(),i="["+t.getConfig("blockAttr",!1)+'="'+n+'"]',o=[].concat(document.querySelectorAll(i)),s=0,a=o.length;s<a;s++){var c=new r;c.init(n,o[s],i,s),t.activeBlocks.set(s,c)}})},r.getActiveBlocks=function(){return this.activeBlocks},r.boot=function(){try{return Promise.resolve(this.activeBlocks.asyncMethodCall("boot")).then(function(){})}catch(t){return Promise.reject(t)}},r.refresh=function(){var t=this,e=this.getApp().getEmitter();e.on("BEFORE_TRANSITION_OUT",function(){t.stop()}),e.on("AFTER_TRANSITION_IN",function(){t.init(),t.boot()})},r.initEvents=function(){return this.activeBlocks.methodCall("initEvents"),this.refresh(),this},r.stopEvents=function(){return this.activeBlocks.methodCall("stopEvents"),this},r.stop=function(){return this.activeBlocks.methodCall("stop"),this.activeBlocks.clear(),this},n}(l),N=function(){function t(t){void 0===t&&(t={}),this.register(t)}var e=t.prototype;return e.register=function(t){var e=this;void 0===t&&(t={}),this.config=t instanceof c?t:new c(t),this.transitions=new O(this),this.services=new T(this),this.blocks=new L(this),this.history=new m,this.pages=new E(this),this.emitter=new k;var n=function(){document.removeEventListener("DOMContentLoaded",n),window.removeEventListener("load",n),e.emitter.emit("READY ready")}.bind(this);return document.addEventListener("DOMContentLoaded",n),window.addEventListener("load",n),this},e.getConfig=function(){var t;return(t=this.config).getConfig.apply(t,[].slice.call(arguments))},e.getEmitter=function(){return this.emitter},e.getBlocks=function(){return this.blocks},e.getServices=function(){return this.services},e.getPages=function(){return this.pages},e.getTransitions=function(){return this.transitions},e.getHistory=function(){return this.history},e.getBlock=function(t){return this.blocks.get(t)},e.getActiveBlock=function(t){return this.blocks.getActiveBlocks().get(t)},e.getService=function(t){return this.services.get(t)},e.getTransition=function(t){return this.transitions.get(t)},e.getState=function(t){return this.history.get(t)},e.get=function(t,e){switch(t.toLowerCase()){case"service":this.getService(e);break;case"transition":this.getTransition(e);break;case"state":this.getState(e);break;case"block":this.getActiveBlock(e);break;default:throw"Error: can't get type '"+t+"', it is not a recognized type. Did you spell it correctly."}return this},e.loadPage=function(t){try{return Promise.resolve(this.pages.load(t))}catch(t){return Promise.reject(t)}},e.load=function(t,e){try{switch(t.toLowerCase()){case"page":return Promise.resolve(this.loadPage(e));default:return Promise.resolve(this.get(t,e))}}catch(t){return Promise.reject(t)}},e.addBlock=function(t){return this.blocks.add(t),this},e.addService=function(t){return this.services.add(t),this},e.addTransition=function(t){return this.transitions.add(t),this},e.addState=function(t){return this.history.addState(t),this},e.add=function(t,e){switch(t.toLowerCase()){case"service":this.addService(e);break;case"transition":this.addTransition(e);break;case"state":this.addState(e);break;case"block":this.addBlock(e);break;default:throw"Error: can't add type '"+t+"', it is not a recognized type. Did you spell it correctly."}return this},e.boot=function(){try{var t=this;return t.blocks.init(),Promise.resolve(t.services.boot()).then(function(){return Promise.resolve(t.blocks.boot()).then(function(){return t.services.initEvents(),t.blocks.initEvents(),t.transitions.initEvents(),Promise.resolve(t)})})}catch(t){return Promise.reject(t)}},e.stop=function(){return this.services.stop(),this.blocks.stop(),this.transitions.stopEvents(),this},e.currentPage=function(){var t=this.history.last();return this.pages.get(t.getURLPathname())},e.on=function(t,e){return this.emitter.on(t,e,this),this},e.off=function(t,e){return this.emitter.off(t,e,this),this},e.once=function(t,e){return this.emitter.once(t,e,this),this},e.emit=function(t){var e;return(e=this.emitter).emit.apply(e,[t].concat([].slice.call(arguments,1))),this},t}();function R(t,e){try{var n=t()}catch(t){return e(t)}return n&&n.then?n.then(void 0,e):n}var I=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).ignoreURLs=[],e.prefetchIgnore=!1,e.isTransitioning=!1,e.stopOnTransitioning=!1,e.stickyScroll=!0,e.forceOnError=!1,e.autoScrollOnHash=!0,e}e(n,t);var r=n.prototype;return r.transitionStart=function(){this.isTransitioning=!0},r.transitionStop=function(){this.isTransitioning=!1},r.boot=function(){var t=new d;this.HistoryManager.add(t),this.changeState("replace",t)},r.getTransitionName=function(t){if(!t||!t.getAttribute)return null;var e=t.getAttribute(this.getConfig("transitionAttr",!1));return"string"==typeof e?e:null},r.validLink=function(t,e,n){var r=!window.history.pushState,i=!t||!n,o=e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey,s=t.hasAttribute("target")&&"_blank"===t.target,a=t.protocol!==location.protocol||t.hostname!==location.hostname,c="string"==typeof t.getAttribute("download"),u=t.hasAttribute(this.getConfig("preventSelfAttr",!1)),h=Boolean(t.closest(this.getConfig("preventAllAttr"))),l=u&&h,g=(new f).getFullPath()===new f(n).getFullPath();return!(i||r||o||s||a||c||l||g)},r.getHref=function(t){return t&&t.tagName&&"a"===t.tagName.toLowerCase()&&"string"==typeof t.href?t.href:null},r.getLink=function(t){for(var e=t.target,n=this.getHref(e);e&&!n;)n=this.getHref(e=e.parentNode);if(e&&this.validLink(e,t,n))return e},r.onClick=function(t){var e=this.getLink(t);if(e){if(this.isTransitioning&&this.stopOnTransitioning)return t.preventDefault(),void t.stopPropagation();var n=this.getHref(e);this.EventEmitter.emit("ANCHOR-CLICK CLICK click",t),this.go({href:n,trigger:e,event:t})}},r.getDirection=function(t){return Math.abs(t)>1?t>0?"forward":"back":0===t?"popstate":t>0?"back":"forward"},r.force=function(t){window.location.assign(t)},r.go=function(t){var e=t.href,n=t.trigger,r=void 0===n?"HistoryManager":n,i=t.event;if(this.isTransitioning&&this.stopOnTransitioning)this.force(e);else{var o=new f(e),s=this.HistoryManager.last(),a=s.getURL();if(!a.equalTo(o)){var c;if(i&&i.state){this.EventEmitter.emit("POPSTATE",i);var u=i.state,h=u.index,l=u.transition,g=u.data,p=s.getIndex();if(c=l,"popstate"!==(r=this.getDirection(p-h))){var m=g.scroll;window.scroll({top:m.y,left:m.x,behavior:"smooth"})}"back"===r?(this.HistoryManager.delete(p),this.EventEmitter.emit("POPSTATE-BACK",i)):"forward"===r&&(this.HistoryManager.addState({url:o,transition:l,data:g}),this.EventEmitter.emit("POPSTATE-FORWARD",i))}else{c=this.getTransitionName(r)||"default";var w=new v,y=new d({url:o,index:this.HistoryManager.size,transition:c,data:{scroll:w}});this.stickyScroll?window.scroll({top:w.y,left:w.x,behavior:"smooth"}):window.scroll({top:0,left:0,behavior:"smooth"}),this.HistoryManager.add(y),this.changeState("push",y),this.EventEmitter.emit("HISTORY-NEW-ITEM",i)}return i&&(i.stopPropagation(),i.preventDefault()),this.EventEmitter.emit("GO go",i),this.load({oldHref:a.getPathname(),href:e,trigger:r,transitionName:c})}this.hashAction(o.hash)}},r.changeState=function(t,e){var n=e.getURL().getFullPath(),r=[e.toJSON(),"",n];if(window.history)switch(t){case"push":window.history.pushState.apply(window.history,r);break;case"replace":window.history.replaceState.apply(window.history,r)}},r.load=function(t){var e=t.oldHref,n=t.href,r=t.trigger,i=t.transitionName,o=void 0===i?"default":i;try{var s=this;return Promise.resolve(R(function(){function t(t){s.transitionStop()}var i,a=s.PageManager.get(e);s.EventEmitter.emit("PAGE-LOADING",{href:n,oldPage:a,trigger:r});var c=R(function(){function t(t){function e(t){s.EventEmitter.emit("NAVIGATION-END",{oldPage:a,newPage:i,trigger:r,transitionName:o}),s.hashAction()}s.EventEmitter.emit("NAVIGATION-START",{oldPage:a,newPage:i,trigger:r,transitionName:o});var n=R(function(){return s.EventEmitter.emit("TRANSITION-START",o),Promise.resolve(s.TransitionManager.boot({name:o,oldPage:a,newPage:i,trigger:r})).then(function(t){s.EventEmitter.emit("TRANSITION-END",{transition:t})})},function(t){throw"[PJAX] Transition error: "+t});return n&&n.then?n.then(e):e()}var e=R(function(){return Promise.resolve(s.PageManager.load(n)).then(function(t){i=t,s.transitionStart(),s.EventEmitter.emit("PAGE-LOAD-COMPLETE",{newPage:i,oldPage:a,trigger:r})})},function(t){throw"[PJAX] Page load error: "+t});return e&&e.then?e.then(t):t()},function(t){throw s.transitionStop(),t});return c&&c.then?c.then(t):t()},function(t){s.forceOnError?s.force(n):console.error(t)}))}catch(t){return Promise.reject(t)}},r.hashAction=function(t){if(void 0===t&&(t=window.location.hash),this.autoScrollOnHash){var e=t.slice(1);if(e.length){var n=document.getElementById(e);if(n)if(n.scrollIntoView)n.scrollIntoView({behavior:"smooth"});else{var r=n.getBoundingClientRect();window.scroll({left:r.left,top:r.top,behavior:"smooth"})}}}},r.ignoredURL=function(t){var e=t.pathname;return this.ignoreURLs.length&&this.ignoreURLs.some(function(t){return"string"==typeof t?t===e:null!==t.exec(e)})},r.onHover=function(t){var e=this,n=this.getLink(t);if(n){var r=new f(this.getHref(n)),i=r.getPathname();this.ignoredURL(r)||this.PageManager.has(i)||(this.EventEmitter.emit("ANCHOR-HOVER HOVER hover",t),function(){try{var t=R(function(){return Promise.resolve(e.PageManager.load(r)).then(function(){})},function(t){console.warn("[PJAX] Prefetch error: ",t)});t&&t.then&&t.then(function(){})}catch(t){Promise.reject(t)}}())}},r.onStateChange=function(t){this.go({href:window.location.href,trigger:"popstate",event:t})},r.bindEvents=function(){this.onHover=this.onHover.bind(this),this.onClick=this.onClick.bind(this),this.onStateChange=this.onStateChange.bind(this)},r.initEvents=function(){this.bindEvents(),!0!==this.prefetchIgnore&&(document.addEventListener("mouseover",this.onHover),document.addEventListener("touchstart",this.onHover)),document.addEventListener("click",this.onClick),window.addEventListener("popstate",this.onStateChange)},r.stopEvents=function(){!0!==this.prefetchIgnore&&(document.removeEventListener("mouseover",this.onHover),document.removeEventListener("touchstart",this.onHover)),document.removeEventListener("click",this.onClick),window.removeEventListener("popstate",this.onStateChange)},n}(A);exports.AdvancedManager=l,exports.App=N,exports.Block=C,exports.BlockIntent=x,exports.BlockManager=L,exports.CONFIG=c,exports.CONFIG_DEFAULTS=a,exports.Coords=v,exports.Event=b,exports.EventEmitter=k,exports.HistoryManager=m,exports.Listener=P,exports.Manager=u,exports.ManagerItem=h,exports.PARSER=w,exports.PJAX=I,exports.Page=y,exports.PageManager=E,exports.Service=A,exports.ServiceManager=T,exports.State=d,exports.Transition=S,exports.TransitionManager=O,exports.URLString=p,exports._URL=f,exports.newURL=g;
//# sourceMappingURL=api.js.map
