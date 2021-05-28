var native=(()=>{var Ke=Object.defineProperty;var Ue=(r,e)=>{for(var t in e)Ke(r,t,{get:e[t],enumerable:!0})};var Be={};Ue(Be,{AdvancedManager:()=>z,Animate:()=>B,App:()=>_e,CONFIG_DEFAULTS:()=>Re,CSSArrValue:()=>D,CSSValue:()=>X,DefaultAnimationOptions:()=>we,EASINGS:()=>fe,EFFECTS:()=>Ve,EasingKeys:()=>Se,Event:()=>U,EventEmitter:()=>F,GetEase:()=>ge,HistoryManager:()=>Oe,KeyframeParse:()=>le,Manager:()=>I,ManagerItem:()=>V,PARSER:()=>Me,PJAX:()=>He,Page:()=>ae,PageManager:()=>ke,ParseTransformableCSSKeyframes:()=>me,ParseTransformableCSSProperties:()=>ue,Replace:()=>Te,Router:()=>De,Service:()=>P,ServiceManager:()=>se,TransformFunctionNames:()=>pe,TransitionManager:()=>Ne,UnitDEG:()=>ie,UnitDEGCSSValue:()=>w,UnitLess:()=>$,UnitLessCSSValue:()=>L,UnitPX:()=>te,UnitPXCSSValue:()=>O,addCSSUnit:()=>ee,animate:()=>ze,asyncMethodCall:()=>Fe,changeState:()=>Ce,clean:()=>be,computeOption:()=>Ie,createTransformProperty:()=>ce,equal:()=>Z,flatten:()=>xe,getElements:()=>ve,getHash:()=>je,getHashedPath:()=>M,getTargets:()=>ne,hashAction:()=>Ee,ignoreURLs:()=>G,isValid:()=>C,mapAnimationOptions:()=>he,mapObject:()=>Y,methodCall:()=>H,newConfig:()=>de,newCoords:()=>_,newListener:()=>oe,newState:()=>J,newURL:()=>E,omit:()=>W,parseOffset:()=>q,parseOptions:()=>Pe,toArr:()=>re,toAttr:()=>N,transpose:()=>Ae});var I=class{constructor(e){this.map=new Map(e)}getMap(){return this.map}get(e){return this.map.get(e)}keys(){return Array.from(this.map.keys())}values(){return Array.from(this.map.values())}set(e,t){return this.map.set(e,t),this}add(e){let i=this.size;return this.set(i,e),this}get size(){return this.map.size}get length(){return this.map.size}last(e=1){let t=this.keys()[this.size-e];return this.get(t)}delete(e){return this.map.delete(e)}remove(e){return this.map.delete(e),this}clear(){return this.map.clear(),this}has(e){return this.map.has(e)}entries(){return this.map.entries()}forEach(e,t){return this.map.forEach(e,t),this}[Symbol.iterator](){return this.entries()}},H=(r,e,...t)=>{r.forEach(i=>{i[e](...t)})},Fe=async(r,e,...t)=>{for(let[,i]of r)await i[e](...t)};var oe=({callback:r=()=>{},scope:e=null,name:t="event"})=>({callback:r,scope:e,name:t}),U=class extends I{constructor(e="event"){super();this.name=e}},F=class extends I{constructor(){super()}getEvent(e){let t=this.get(e);return t instanceof U?t:(this.set(e,new U(e)),this.get(e))}newListener(e,t,i){let n=this.getEvent(e);return n.add(oe({name:e,callback:t,scope:i})),n}on(e,t,i){if(typeof e=="undefined"||e==null)return this;typeof e=="string"&&(e=e.trim().split(/\s/g));let n,s,a=typeof e=="object"&&!Array.isArray(e),l=a?t:i;return a||(s=t),Object.keys(e).forEach(p=>{n=a?p:e[p],a&&(s=e[p]),this.newListener(n,s,l)},this),this}removeListener(e,t,i){let n=this.get(e);if(n instanceof U&&t){let s=oe({name:e,callback:t,scope:i});n.forEach((a,l)=>{if(a.callback===s.callback&&a.scope===s.scope)return n.remove(l)})}return n}off(e,t,i){if(typeof e=="undefined"||e==null)return this;typeof e=="string"&&(e=e.trim().split(/\s/g));let n,s,a=typeof e=="object"&&!Array.isArray(e),l=a?t:i;return a||(s=t),Object.keys(e).forEach(p=>{n=a?p:e[p],a&&(s=e[p]),typeof s=="function"?this.removeListener(n,s,l):this.remove(n)},this),this}once(e,t,i){if(typeof e=="undefined"||e==null)return this;typeof e=="string"&&(e=e.trim().split(/\s/g));let n=typeof e=="object"&&!Array.isArray(e);return Object.keys(e).forEach(s=>{let a=n?s:e[s],l=n?e[s]:t,p=n?t:i,o=(...c)=>{l.apply(p,c),this.removeListener(a,o,p)};this.newListener(a,o,p)},this),this}emit(e,...t){return typeof e=="undefined"||e==null?this:(typeof e=="string"&&(e=e.trim().split(/\s/g)),e.forEach(i=>{let n=this.get(i);n instanceof U&&n.forEach(s=>{let{callback:a,scope:l}=s;a.apply(l,t)})},this),this)}clear(){return H(this,"clear"),super.clear(),this}};var q=r=>typeof r=="string"?r.includes("%")?parseFloat(r)/100:r=="from"?0:r=="to"?1:parseFloat(r):r,le=r=>{let e=new Set,t=Object.keys(r),i=t.length;for(let n=0;n<i;n++){let s=""+t[n],a=r[s],l=s.split(","),p=l.length;for(let o=0;o<p;o++){let c=q(l[o]);e.add({...a,offset:c})}}return[...e].sort((n,s)=>n.offset-s.offset)},Ve={};var ee=(r="")=>e=>typeof e=="string"?e:`${e}${r}`,$=ee(),te=ee("px"),ie=ee("deg"),re=r=>Array.isArray(r)||typeof r=="string"?(typeof r=="string"&&(r=r.split(",")),r):[r],C=r=>Array.isArray(r)||typeof r=="string"?Boolean(r.length):r!=null&&r!=null,X=r=>e=>C(e)?re(e).map(t=>{if(typeof t!="number"&&typeof t!="string")return t;let i=Number(t),n=Number.isNaN(i)?typeof t=="string"?t.trim():t:i;return r(n)}):[],Ae=(...r)=>{let e=0;r=r.map(n=>{let s=re(n),a=s.length;return a>e&&(e=a),s});let t=[],i=r.length;for(let n=0;n<e;n++){t[n]=[];for(let s=0;s<i;s++){let a=r[s][n];C(a)&&(t[n][s]=a)}}return t},D=(r,e)=>re(r).map(X(e)),pe=["translate","translate3d","translateX","translateY","translateZ","rotate","rotate3d","rotateX","rotateY","rotateZ","scale","scale3d","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective"],ce=r=>{let e="",t=pe.length;for(let i=0;i<t;i++){let n=pe[i],s=r[i];C(s)&&(e+=`${n}(${Array.isArray(s)?s.join(", "):s}) `)}return e.trim()},L=X($),O=X(te),w=X(ie),ue=r=>{let{perspective:e,rotate:t,rotate3d:i,rotateX:n,rotateY:s,rotateZ:a,translate:l,translate3d:p,translateX:o,translateY:c,translateZ:h,scale:y,scale3d:m,scaleX:f,scaleY:d,scaleZ:u,skew:g,skewX:b,skewY:A,...v}=r;l=D(l,te),p=D(p,te),o=O(o),c=O(c),h=O(h),t=D(t,ie),i=D(i,$),n=w(n),s=w(s),a=w(a),y=D(y,$),m=D(m,$),f=L(f),d=L(d),u=L(u),g=D(g,ie),b=w(b),A=w(A),e=O(e);let x=Ae(l,p,o,c,h,t,i,n,s,a,y,m,f,d,u,g,b,A,e).filter(C).map(ce);return v=Y(v,T=>[].concat(T).map(S=>""+S)),Object.assign({},C(x)?{transform:x}:null,v)},me=r=>r.map(e=>{let{translate:t,translate3d:i,translateX:n,translateY:s,translateZ:a,rotate:l,rotate3d:p,rotateX:o,rotateY:c,rotateZ:h,scale:y,scale3d:m,scaleX:f,scaleY:d,scaleZ:u,skew:g,skewX:b,skewY:A,perspective:v,easing:x,iterations:T,offset:S,...R}=e;return t=O(t),i=O(i),n=O(n)[0],s=O(s)[0],a=O(a)[0],l=w(l),p=L(p),o=w(o)[0],c=w(c)[0],h=w(h)[0],y=L(y),m=L(m),f=L(f)[0],d=L(d)[0],u=L(u)[0],g=w(g),b=w(b)[0],A=w(A)[0],v=O(v)[0],[R,t,i,n,s,a,l,p,o,c,h,y,m,f,d,u,g,b,A,v]}).map(([e,...t])=>{let i=ce(t);return Object.assign({},C(i)?{transform:i}:null,e)});var ve=r=>typeof r=="string"?Array.from(document.querySelectorAll(r)):[r],xe=r=>[].concat(...r),ne=r=>Array.isArray(r)?xe(r.map(ne)):typeof r=="string"||r instanceof Node?ve(r):r instanceof NodeList||r instanceof HTMLCollection?Array.from(r):[],Ie=(r,e,t)=>typeof r=="function"?r.apply(t,e):r,Y=(r,e)=>{let t=Object.keys(r),i,n,s={};for(let a=0,l=t.length;a<l;a++)i=t[a],n=r[i],s[i]=e(n,i,r);return s},he=(r,e,t)=>Y(r,i=>Ie(i,e,t)),fe={in:"ease-in",out:"ease-out","in-out":"ease-in-out","in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","in-out-expo":"cubic-bezier(1, 0, 0, 1)","in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},Se=Object.keys(fe),ge=r=>{let e=r.replace(/^ease-/,"");return Se.includes(e)?fe[e]:r},we={keyframes:[],offset:[],loop:1,delay:0,speed:1,endDelay:0,easing:"ease",timelineOffset:0,autoplay:!0,duration:1e3,fillMode:"none",direction:"normal",padEndDelay:!1,timeline:document.timeline,extend:{}},Pe=r=>{let{options:e,...t}=r,i=e instanceof B?e.options:Array.isArray(e)?e?.[0]?.options:e;return Object.assign({},i,t)},W=(r,e)=>{let t={...e};for(;r.length;){let{[r.pop()]:i,...n}=t;t=n}return t},ye=class{constructor(e){this.options={};this.properties={};this.totalDuration=-Infinity;this.minDelay=Infinity;this.maxSpeed=Infinity;this.emitter=new F;this.targets=new I;this.targetIndexes=new WeakMap;this.keyframeEffects=new WeakMap;this.computedOptions=new WeakMap;this.animations=new WeakMap;this.computedKeyframes=new WeakMap;this.loop=this.loop.bind(this),this.onVisibilityChange=this.onVisibilityChange.bind(this),this.on("error",console.error),this.updateOptions(e),this.mainAnimation&&(this.visibilityPlayState=this.getPlayState(),ye.pauseOnPageHidden&&document.addEventListener("visibilitychange",this.onVisibilityChange,!1)),this.newPromise()}onVisibilityChange(){document.hidden?(this.visibilityPlayState=this.getPlayState(),this.is("running")&&(this.loop(),this.pause())):this.visibilityPlayState=="running"&&this.is("paused")&&this.play()}newPromise(){return this.promise=new Promise((e,t)=>{this?.emitter?.once?.("finish",()=>e([this])),this?.emitter?.once?.("error",i=>t(i))}),this.promise}then(e,t){return e=e?.bind(this),t=t?.bind(this),this?.promise?.then?.(e,t),this}catch(e){return e=e?.bind(this),this.promise?.catch?.(e),this}finally(e){return e=e?.bind(this),this.promise?.finally?.(e),this}loop(){this.stopLoop(),this.animationFrame=window.requestAnimationFrame(this.loop),this.emit("update",this.getProgress(),this)}stopLoop(){window.cancelAnimationFrame(this.animationFrame)}allAnimations(e){return this.targets.forEach(t=>{let i=this.keyframeEffects.get(t),n=this.animations.get(i);return e(n,t)}),this}all(e){return this.mainAnimation&&e(this.mainAnimation,this.mainElement),this.allAnimations(e),this}beginEvent(){this.getProgress()==0&&this.emit("begin",this)}play(){let e=this.getPlayState();return this.beginEvent(),this.all(t=>t.play()),this.emit("play",e,this),this.is(e)||this.emit("playstate-change",e,this),this.loop(),this}pause(){let e=this.getPlayState();return this.all(t=>t.pause()),this.emit("pause",e,this),this.is(e)||this.emit("playstate-change",e,this),this.stopLoop(),this}reverse(){return this.all(e=>e.reverse()),this}reset(){return this.setProgress(0),this.options.autoplay?this.play():this.pause(),this}cancel(){return this.all(e=>e.cancel()),this}finish(){return this.all(e=>e.finish()),this}stop(){this.cancel(),this.stopLoop(),document.removeEventListener("visibilitychange",this.onVisibilityChange,!1),this.targets.forEach(e=>this.removeTarget(e)),this.emit("stop"),this.emitter.clear(),this.mainkeyframeEffect=null,this.mainAnimation=null,this.mainElement=null,this.promise=null,this.computedOptions=null,this.animations=null,this.keyframeEffects=null,this.emitter=null,this.targets=null,this.options=null,this.properties=null}getAnimation(e){let t=this.keyframeEffects.get(e);return this.animations.get(t)}getTiming(e){let t=this.computedOptions.get(e)??{},i=this.keyframeEffects.get(e).getTiming?.()??{};return{...t,...i}}getCurrentTime(){return this.mainAnimation.currentTime}getProgress(){return this.getCurrentTime()/this.totalDuration*100}getSpeed(){return this.mainAnimation.playbackRate}getPlayState(){return this.mainAnimation.playState}is(e){return this.getPlayState()==e}setCurrentTime(e){return this.all(t=>t.currentTime=e),this.emit("update",this.getProgress()),this}setProgress(e){let t=e/100*this.totalDuration;return this.setCurrentTime(t),this}setSpeed(e=1){return this.maxSpeed=e,this.all(t=>{t.updatePlaybackRate?t.updatePlaybackRate(e):t.playbackRate=e}),this}createArrayOfComputedOptions(e,t){let i=[];return this.targets.forEach((n,s)=>{let a=this.computedOptions.get(n)??{},l=b=>{let A=b;return b=="loop"&&(A="iterations"),b=="fillMode"&&(A="fill"),e[b]??a[A]??this.options[b]},p=Object.assign({easing:l("easing"),iterations:l("loop"),direction:l("direction"),endDelay:l("endDelay"),duration:l("duration"),speed:l("speed"),delay:l("delay"),timelineOffset:l("timelineOffset"),keyframes:l("keyframes")},l("extend")??{}),o=he(p,[s,t,n],this);typeof o.easing=="string"&&(o.easing=ge(o.easing)),o.iterations===!0&&(o.iterations=Infinity),o.fill=l("fillMode");let{timelineOffset:c,speed:h,endDelay:y,delay:m,duration:f,iterations:d,...u}=o;d=Number(d),f=Number(f),y=Number(y),h=Number(h),m=Number(m)+Number(c);let g=m+f*d+y;this.totalDuration<g&&(this.totalDuration=g),i[s]={...u,speed:h,tempDurations:g,endDelay:y,delay:m,duration:f,iterations:d},this.minDelay>m&&(this.minDelay=m),this.maxSpeed>h&&(this.maxSpeed=h)}),i}createAnimations(e,t){let{arrOfComputedOptions:i,padEndDelay:n,oldCSSProperties:s,onfinish:a,oncancel:l,timeline:p}=e;this.targets.forEach((o,c)=>{let{speed:h,keyframes:y,tempDurations:m,...f}=i[c];n&&f.endDelay==0&&Math.abs(f.iterations)!=Math.abs(Infinity)&&(f.endDelay=this.totalDuration-m);let d,u,g=y;typeof g=="object"&&(g=le(g));let b=this.computedKeyframes.get(o)??{},A=Object.assign({},s,b),v=Y(A,(S,R)=>this.properties[R]??S);if(u=C(g)?g:v,Array.isArray(u))d=u.map(S=>{let{easing:R,offset:k,...K}=W(["speed","loop"],S);return Object.assign({},K,typeof R=="string"?{easing:ge(R)}:null,typeof k=="string"||typeof k=="number"?{offset:q(k)}:null)}),d=me(d);else{let S=W(["keyframes"],u),{offset:R,...k}=he(S,[c,t,o],this);k=ue(k);let K=R;d=Object.assign({},k,C(K)?{offset:K.map(q)}:null)}let x,T;this.keyframeEffects.has(o)?(T=this.keyframeEffects.get(o),x=this.animations.get(T),T?.setKeyframes?.(d),T?.updateTiming?.(f)):(T=new KeyframeEffect(o,d,f),x=new Animation(T,p),this.keyframeEffects.set(o,T),this.animations.set(T,x)),x.playbackRate=h,x.onfinish=()=>{typeof a=="function"&&a.call(this,o,c,t,x)},x.oncancel=()=>{typeof l=="function"&&l.call(this,o,c,t,x)},this.computedOptions.set(o,f),this.computedKeyframes.set(o,d)})}updateOptions(e={}){try{let t=Pe(e);this.options=Object.assign({},we,this.options,t);let i=["easing","loop","endDelay","duration","speed","delay","timelineOffset","direction","extend","fillMode","offset"],{padEndDelay:n,autoplay:s,target:a,targets:l,timeline:p,onfinish:o,oncancel:c,...h}=W(i,this.options);this.properties=W([...i,"keyframes","padEndDelay","onfinish","oncancel","autoplay","target","targets","timeline"],t);let y=this.targets.values(),m=[...new Set([...y,...ne(l),...ne(a)])];this.targets.clear(),m.forEach((u,g)=>{this.targets.set(g,u),this.targetIndexes.set(u,g)});let f=this.targets.size,d=this.createArrayOfComputedOptions(t,f);if(this.createAnimations({arrOfComputedOptions:d,padEndDelay:n,oldCSSProperties:h,onfinish:o,oncancel:c,timeline:p},f),f<=0&&(this.maxSpeed==Infinity&&(this.maxSpeed=Number(this.options.speed)),this.minDelay==Infinity&&(this.minDelay=Number(this.options.delay)+Number(this.options.timelineOffset)),this.totalDuration==-Infinity&&(this.totalDuration=Number(this.options.duration))),this.mainAnimation?(this.mainkeyframeEffect?.updateTiming?.({duration:this.totalDuration}),(!this.mainkeyframeEffect.setKeyframes||!this.mainkeyframeEffect.updateTiming)&&console.warn("@okikio/animate - `KeyframeEffect.setKeyframes` and/or `KeyframeEffect.updateTiming` are not supported in this browser.")):(this.mainkeyframeEffect=new KeyframeEffect(this.mainElement,[{opacity:"0"},{opacity:"1"}],{duration:this.totalDuration,easing:"linear"}),this.mainAnimation=new Animation(this.mainkeyframeEffect,p)),this.mainAnimation.playbackRate=this.maxSpeed,this.mainAnimation.onfinish=()=>{if(this.emit("finish",this),this.mainAnimation){let u=this.getPlayState();this.is(u)||this.emit("playstate-change",u,this),this.stopLoop()}},this.mainAnimation.oncancel=()=>{if(this.emit("cancel",this),this.mainAnimation){let u=this.getPlayState();this.is(u)||this.emit("playstate-change",u,this),this.stopLoop()}},s){let u=window.setTimeout(()=>{this.emit("begin",this),u=window.clearTimeout(u)},0);this.play()}else this.pause()}catch(t){this.emit("error",t)}}add(e){let t=this.getProgress(),i=this.is("running"),n=this.is("paused");this.updateOptions({target:e}),this.setProgress(t),i?this.play():n&&this.pause()}removeTarget(e){let t=this.keyframeEffects.get(e);this.animations.delete(t),t=null,this.computedKeyframes.delete(e),this.computedOptions.delete(e),this.keyframeEffects.delete(e);let i=this.targetIndexes.get(e);this.targets.delete(i),this.targetIndexes.delete(e)}remove(e){this.removeTarget(e);let t=new Set([].concat(this.targets.values()));this.options.target=[...t],this.options.targets=[],t.clear(),t=null;let i=this.getProgress(),n=this.is("running"),s=this.is("paused");this.updateOptions(),n?this.play():s&&this.pause(),this.setProgress(i)}on(e,t,i){return this?.emitter?.on(e,t,i??this),this}off(e,t,i){return this?.emitter?.off(e,t,i??this),this}emit(e,...t){return this?.emitter?.emit(e,...t),this}toJSON(){return this.options}get[Symbol.toStringTag](){return"Animate"}},B=ye;B.pauseOnPageHidden=!0;var ze=(r={})=>new B(r);var Re={wrapperAttr:"wrapper",headers:[],preventSelfAttr:'prevent="self"',preventAllAttr:'prevent="all"',transitionAttr:"transition",timeout:2e3,maxPages:5,resizeDelay:100,onTransitionPreventClick:!0,cacheIgnore:!1,prefetchIgnore:!1,preventURLs:[],stickyScroll:!1,forceOnError:!0,ignoreHashAction:!1,transitions:[]},de=r=>Object.assign({...Re},r),N=(r,e,t=!0)=>{let{prefix:i}=r,n=r[e],s=`data${i?"-"+i:""}-${n}`;return t?`[${s}]`:s};var V=class{constructor(){}install(){}register(e,t){return this.manager=e,this.app=e.app,this.config=e.config,this.emitter=e.emitter,this.key=t,this.install(),this}uninstall(){}unregister(){this.uninstall(),this.manager.remove(this.key),this.key=null,this.manager=null,this.app=null,this.config=null,this.emitter=null}},z=class extends I{constructor(e){super();this.app=e,this.config=e.config,this.emitter=e.emitter}set(e,t){return super.set(e,t),t.register(this,e),this}};var E=(r=window.location.href)=>r instanceof URL?r:new URL(r,window.location.origin),M=r=>{let e=E(r);return`${e.pathname}${e.hash}`},je=r=>E(r).hash.slice(1),be=r=>E(r).toString().replace(/(\/#.*|\/|#.*)$/,""),Z=(r,e)=>be(r)===be(e);var P=class extends V{init(){}boot(){this.initEvents()}initEvents(){}stopEvents(){}stop(){this.stopEvents(),this.unregister()}},se=class extends z{constructor(e){super(e)}init(){return H(this,"init"),this}boot(){return H(this,"boot"),this}stop(){return H(this,"stop"),this}};var _=(r=window.scrollX,e=window.scrollY)=>({x:r,y:e}),J=(r={url:M(E()),index:0,transition:"default",data:{scroll:_(),trigger:"HistoryManager"}})=>r,Oe=class extends P{constructor(){super(...arguments);this.pointer=-1}init(){this.states=[];let e=J();this.add(e,"replace")}get(e){return this.states[e]}add(e,t="push"){let i=J(e),n=this.length;this.states.push({...i}),this.pointer=n;let s={index:this.pointer,states:[...this.states]};return Ce(t,i,s),this}remove(e){return e?this.states.splice(e,1):this.states.pop(),this.pointer--,this}replace(e){return this.states=e,this}set(e,t){return this.states[e]=t}get current(){return this.get(this.pointer)}get last(){return this.get(this.length-1)}get previous(){return this.pointer<1?null:this.get(this.pointer-1)}get length(){return this.states.length}},Ce=(r,e,t)=>{let i=M(e.url),n=[t,"",i];if(window.history)switch(r){case"push":window.history.pushState.apply(window.history,n);break;case"replace":window.history.replaceState.apply(window.history,n);break}};function Ge(r){for(var e=[],t=0;t<r.length;){var i=r[t];if(i==="*"||i==="+"||i==="?"){e.push({type:"MODIFIER",index:t,value:r[t++]});continue}if(i==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:r[t++]});continue}if(i==="{"){e.push({type:"OPEN",index:t,value:r[t++]});continue}if(i==="}"){e.push({type:"CLOSE",index:t,value:r[t++]});continue}if(i===":"){for(var n="",s=t+1;s<r.length;){var a=r.charCodeAt(s);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||a===95){n+=r[s++];continue}break}if(!n)throw new TypeError("Missing parameter name at "+t);e.push({type:"NAME",index:t,value:n}),t=s;continue}if(i==="("){var l=1,p="",s=t+1;if(r[s]==="?")throw new TypeError('Pattern cannot start with "?" at '+s);for(;s<r.length;){if(r[s]==="\\"){p+=r[s++]+r[s++];continue}if(r[s]===")"){if(l--,l===0){s++;break}}else if(r[s]==="("&&(l++,r[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at "+s);p+=r[s++]}if(l)throw new TypeError("Unbalanced pattern at "+t);if(!p)throw new TypeError("Missing pattern at "+t);e.push({type:"PATTERN",index:t,value:p}),t=s;continue}e.push({type:"CHAR",index:t,value:r[t++]})}return e.push({type:"END",index:t,value:""}),e}function qe(r,e){e===void 0&&(e={});for(var t=Ge(r),i=e.prefixes,n=i===void 0?"./":i,s="[^"+j(e.delimiter||"/#?")+"]+?",a=[],l=0,p=0,o="",c=function(T){if(p<t.length&&t[p].type===T)return t[p++].value},h=function(T){var S=c(T);if(S!==void 0)return S;var R=t[p],k=R.type,K=R.index;throw new TypeError("Unexpected "+k+" at "+K+", expected "+T)},y=function(){for(var T="",S;S=c("CHAR")||c("ESCAPED_CHAR");)T+=S;return T};p<t.length;){var m=c("CHAR"),f=c("NAME"),d=c("PATTERN");if(f||d){var u=m||"";n.indexOf(u)===-1&&(o+=u,u=""),o&&(a.push(o),o=""),a.push({name:f||l++,prefix:u,suffix:"",pattern:d||s,modifier:c("MODIFIER")||""});continue}var g=m||c("ESCAPED_CHAR");if(g){o+=g;continue}o&&(a.push(o),o="");var b=c("OPEN");if(b){var u=y(),A=c("NAME")||"",v=c("PATTERN")||"",x=y();h("CLOSE"),a.push({name:A||(v?l++:""),pattern:A&&!v?s:v,prefix:u,suffix:x,modifier:c("MODIFIER")||""});continue}h("END")}return a}function j(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Le(r){return r&&r.sensitive?"":"i"}function $e(r,e){if(!e)return r;for(var t=/\((?:\?<(.*?)>)?(?!\?)/g,i=0,n=t.exec(r.source);n;)e.push({name:n[1]||i++,prefix:"",suffix:"",modifier:"",pattern:""}),n=t.exec(r.source);return r}function Xe(r,e,t){var i=r.map(function(n){return Q(n,e,t).source});return new RegExp("(?:"+i.join("|")+")",Le(t))}function Ye(r,e,t){return We(qe(r,t),e,t)}function We(r,e,t){t===void 0&&(t={});for(var i=t.strict,n=i===void 0?!1:i,s=t.start,a=s===void 0?!0:s,l=t.end,p=l===void 0?!0:l,o=t.encode,c=o===void 0?function(T){return T}:o,h="["+j(t.endsWith||"")+"]|$",y="["+j(t.delimiter||"/#?")+"]",m=a?"^":"",f=0,d=r;f<d.length;f++){var u=d[f];if(typeof u=="string")m+=j(c(u));else{var g=j(c(u.prefix)),b=j(c(u.suffix));if(u.pattern)if(e&&e.push(u),g||b)if(u.modifier==="+"||u.modifier==="*"){var A=u.modifier==="*"?"?":"";m+="(?:"+g+"((?:"+u.pattern+")(?:"+b+g+"(?:"+u.pattern+"))*)"+b+")"+A}else m+="(?:"+g+"("+u.pattern+")"+b+")"+u.modifier;else m+="("+u.pattern+")"+u.modifier;else m+="(?:"+g+b+")"+u.modifier}}if(p)n||(m+=y+"?"),m+=t.endsWith?"(?="+h+")":"$";else{var v=r[r.length-1],x=typeof v=="string"?y.indexOf(v[v.length-1])>-1:v===void 0;n||(m+="(?:"+y+"(?="+h+"))?"),x||(m+="(?="+y+"|"+h+")")}return new RegExp(m,Le(t))}function Q(r,e,t){return r instanceof RegExp?$e(r,e):Array.isArray(r)?Xe(r,e,t):Ye(r,e,t)}var Me=new DOMParser,ae=class extends V{constructor(e=E(),t=document){super();this.url=E(e),typeof t=="string"?this.data=t:this.dom=t||document}async build(){if(this.dom instanceof Node||(this.dom=Me.parseFromString(this.data,"text/html")),!(this.body instanceof Node)){let{title:e,head:t,body:i}=this.dom;this.title=e,this.head=t,this.body=i,this.wrapper=this.body.querySelector(this.wrapperAttr)}}install(){this.wrapperAttr=N(this.config,"wrapperAttr")}uninstall(){this.url=null,this.title=null,this.head=null,this.body=null,this.dom=null,this.wrapper=null,this.data=null,this.wrapperAttr=null}},ke=class extends P{constructor(){super();this.loading=new I}install(){this.pages=new z(this.app),this.cacheIgnore=this.config.cacheIgnore;let e=E().pathname;this.set(e,new ae),e=null}get(e){return this.pages.get(e)}add(e){return this.pages.add(e),this}set(e,t){return this.pages.set(e,t),this}remove(e){return this.pages.remove(e),this}has(e){return this.pages.has(e)}clear(){return this.pages.clear(),this}get size(){return this.pages.size}keys(){return this.pages.keys()}async load(e=E()){let t=E(e),i=t.pathname,n,s;if(this.has(i)&&!G(i,this.cacheIgnore))return n=this.get(i),Promise.resolve(n);this.loading.has(i)?s=this.loading.get(i):(s=this.request(i),this.loading.set(i,s));let a=await s;if(this.loading.remove(i),n=new ae(t,a),this.set(i,n),this.size>this.config.maxPages){let l=E(),p=this.keys(),o=Z(l,p[0])?p[1]:p[0],c=this.get(o);c.unregister(),c=null,p=null,l=null,o=null}return n}async request(e){let t=new Headers(this.config.headers),i=window.setTimeout(()=>{window.clearTimeout(i);let n=new Error("Request Timed Out!");throw this.emitter.emit("TIMEOUT_ERROR",n,e),n},this.config.timeout);try{let n=await fetch(e,{mode:"same-origin",method:"GET",headers:t,cache:"default",credentials:"same-origin"});if(window.clearTimeout(i),n.status>=200&&n.status<300)return await n.text();let s=new Error(n.statusText||""+n.status);throw this.emitter.emit("REQUEST_ERROR",s,e),s}catch(n){throw window.clearTimeout(i),n}}},G=(r,e)=>{if(typeof e=="boolean")return e;let t=[];return!e.every(i=>Q(i,t,{start:!1,end:!1}).exec(r)==null)};var Ee=(r,e=window.location.hash)=>{try{let t=e[0]=="#"?e:E(e).hash;if(t.length>1){let i=document.getElementById(t.slice(1));if(i){let{left:n,top:s}=i.getBoundingClientRect(),a=window.scrollX,l=window.scrollY,p=n+a,o=s+l;return _(p,o)}}}catch(t){console.warn("[hashAction] error",t)}return r??_(0,0)},Te={name:"replace"},Ne=class extends P{constructor(e){super();this._arg=e}install(){super.install();let e=this._arg&&this._arg.length?this._arg:this.config.transitions;this.transitions=new I([["default",Te],["replace",Te]].concat(e))}get(e){return this.transitions.get(e)}set(e,t){return this.transitions.set(e,t),this}add(e){return this.transitions.add(e),this}has(e){return this.transitions.has(e)}async start(e,t){let i=this.transitions.get(e),{oldPage:n,newPage:s,ignoreHashAction:a,trigger:l}=t;if(this.emitter.emit("TRANSITION_START",{transitionName:e,...t}),!("wrapper"in n)||!("wrapper"in s))throw`[TransitionManager] either oldPage or newPage aren't instances of the Page Class.
 ${{newPage:s,oldPage:n}}`;document.title=""+s.title;let p=n.wrapper,o=s.wrapper;if(!(p instanceof Node)||!(o instanceof Node))throw`[TransitionManager] the wrapper from the ${o instanceof Node?"current":"next"} page cannot be found. The wrapper must be an element that has the attribute ${N(this.config,"wrapperAttr")}.`;return i.init&&i?.init(t),this.emitter.emit("BEFORE_TRANSITION_OUT",t),i.out&&await new Promise(c=>{i.out.call(i,{...t,from:n,done:c})?.then(c)}),this.emitter.emit("AFTER_TRANSITION_OUT",t),await new Promise(c=>{p.insertAdjacentElement("beforebegin",o),this.emitter.emit("CONTENT_INSERT",t),c()}),await new Promise(c=>{p.remove(),p=null,o=null,this.emitter.emit("CONTENT_REPLACED",t),!a&&!/back|popstate|forward/.test(l)&&(t.scroll=Ee(t.scroll)),c()}),this.emitter.emit("BEFORE_TRANSITION_IN",t),i.in&&await new Promise(c=>{i.in.call(i,{...t,from:n,to:s,done:c})?.then(c)}),this.emitter.emit("AFTER_TRANSITION_IN",t),i.manualScroll||(!a&&!/back|popstate|forward/.test(l)&&(t.scroll=Ee(t.scroll)),window.scroll(t.scroll.x,t.scroll.y)),this.emitter.emit("TRANSITION_END",{transitionName:e,...t}),t}};var _e=class{constructor(e={}){this.canResize=!0;this.canScroll=!0;this._resize=this._resize.bind(this),this._scroll=this._scroll.bind(this),this._ready=this._ready.bind(this),this.register(e)}register(e={}){return this.config=de(e),this.emitter=new F,this.services=new se(this),this}_ready(){document.removeEventListener("DOMContentLoaded",this._ready),window.removeEventListener("load",this._ready),this.emitter.emit("READY ready")}_resize(){if(this.canResize){let e,t;this.canResize=!1,t=window.requestAnimationFrame(()=>{this.emitter.emit("RESIZE resize"),e=window.setTimeout(()=>{this.canResize=!0,e=window.clearTimeout(e),t=window.cancelAnimationFrame(t)},this.config.resizeDelay)})}}_scroll(){if(this.canScroll){let e;this.canScroll=!1,e=requestAnimationFrame(()=>{this.emitter.emit("SCROLL scroll"),this.canScroll=!0,e=window.cancelAnimationFrame(e)})}}get(e){return this.services.get(e)}set(e,t){return this.services.set(e,t),this}add(e){return this.services.add(e),this}boot(){return document.addEventListener("DOMContentLoaded",this._ready),window.addEventListener("load",this._ready),window.addEventListener("resize",this._resize,{passive:!0}),window.addEventListener("scroll",this._scroll,{passive:!0}),this.services.init(),this.services.boot(),this}stop(){return window.removeEventListener("resize",this._resize),window.removeEventListener("scroll",this._scroll),this.services.stop(),this.emitter.clear(),this}on(e,t){return this.emitter.on(e,t,this),this}off(e,t){return this.emitter.off(e,t,this),this}emit(e,...t){return this.emitter.emit(e,...t),this}};var He=class extends P{install(){super.install(),this.preventURLs=this.config.preventURLs,this.prefetchIgnore=this.config.prefetchIgnore,this.onTransitionPreventClick=this.config.onTransitionPreventClick,this.stickyScroll=this.config.stickyScroll,this.forceOnError=this.config.forceOnError,this.ignoreHashAction=this.config.ignoreHashAction}transitionStart(){this.isTransitioning=!0}transitionStop(){this.isTransitioning=!1}init(){this.onHover=this.onHover.bind(this),this.onClick=this.onClick.bind(this),this.onStateChange=this.onStateChange.bind(this)}boot(){super.boot()}getTransitionName(e){if(!e||!e.getAttribute)return null;let t=e.getAttribute(N(this.config,"transitionAttr",!1));return typeof t=="string"?t:null}validLink(e,t,i){let n=!window.history.pushState,s=!e||!i,a=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey,l=e.hasAttribute("target")&&e.target==="_blank",p=e.protocol!==location.protocol||e.hostname!==location.hostname,o=typeof e.getAttribute("download")=="string",c=e.matches(N(this.config,"preventSelfAttr")),h=Boolean(e.closest(N(this.config,"preventAllAttr"))),y=G(E(i).pathname,this.preventURLs),m=M(E())===M(E(i));return!(s||n||a||l||p||o||c||h||y||m)}getHref(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"&&typeof e.href=="string"?e.href:null}getLink(e){let t=e.target,i=this.getHref(t);for(;t&&!i;)t=t.parentNode,i=this.getHref(t);if(!(!t||!this.validLink(t,e,i)))return t}onClick(e){let t=this.getLink(e);if(!t)return;if(this.isTransitioning&&this.onTransitionPreventClick){e.preventDefault(),e.stopPropagation();return}let i=this.getHref(t);this.emitter.emit("ANCHOR_CLICK CLICK",e),this.go({href:i,trigger:t,event:e})}getDirection(e){return Math.abs(e)>1?e>0?"forward":"back":e===0?"popstate":e>0?"back":"forward"}force(e){window.location.assign(e)}go({href:e,trigger:t="HistoryManager",event:i}){if(this.isTransitioning&&!this.onTransitionPreventClick||!(this.manager.has("TransitionManager")&&this.manager.has("HistoryManager")&&this.manager.has("PageManager"))){this.force(e);return}let n=this.manager.get("HistoryManager"),s=_(0,0),a=n.current,l=a.url;if(Z(l,e))return;let p;if(i&&i.state){this.emitter.emit("POPSTATE",i);let{state:o}=i,{index:c}=o,y=a.index-c;n.replace(o.states),n.pointer=c;let m=n.get(c);p=m.transition,s=m.data.scroll,t=this.getDirection(y),this.emitter.emit(t==="back"?"POPSTATE_BACK":"POPSTATE_FORWARD",i)}else{p=this.getTransitionName(t),s=_();let o=J({url:e,transition:p,data:{scroll:s}});!this.stickyScroll&&(s=_(0,0)),n.add(o),this.emitter.emit("HISTORY_NEW_ITEM",i)}return i&&(i.stopPropagation(),i.preventDefault()),this.emitter.emit("GO",i),this.load({oldHref:l,href:e,trigger:t,transitionName:p,scroll:s})}async load({oldHref:e,href:t,trigger:i,transitionName:n="default",scroll:s={x:0,y:0}}){try{let a=this.manager.get("TransitionManager"),l=this.manager.get("PageManager"),p=this.ignoreHashAction,o,c;this.emitter.emit("NAVIGATION_START",{oldHref:e,href:t,trigger:i,transitionName:n,scroll:s}),a.has(n)||(console.log(`[PJAX] transition name "${n}" doesn't exist, switching to the "default" transition`),n="default");try{this.transitionStart(),this.emitter.emit("PAGE_LOADING",{href:t,oldHref:e,trigger:i,scroll:s}),c=await l.load(e),o=await l.load(t),this.emitter.emit("PAGE_LOAD_COMPLETE",{newPage:o,oldPage:c,trigger:i,scroll:s}),c.dom instanceof Element||c.build(),o.build()}catch(h){console.warn("[PJAX] Page load error",h)}try{s=(await a.start(n,{oldPage:c,newPage:o,trigger:i,scroll:s,ignoreHashAction:p})).scroll}catch(h){console.warn("[PJAX] Transition error",h)}this.emitter.emit("NAVIGATION_END",{oldPage:c,newPage:o,trigger:i,transitionName:n,scroll:s})}catch(a){this.forceOnError?this.force(t):console.warn(a)}finally{this.transitionStop()}}onHover(e){let t=this.getLink(e);if(!t||!this.manager.has("PageManager"))return;let i=this.manager.get("PageManager"),n=E(this.getHref(t)),s=n.pathname;if(this.emitter.emit("ANCHOR_HOVER HOVER",e),!G(n.pathname,this.prefetchIgnore)&&!(i.has(s)&&!G(s,i.cacheIgnore)))try{i.load(n),this.emitter.emit("PREFETCH",e)}catch(a){console.warn("[PJAX] Prefetch error",a)}}onStateChange(e){this.go({href:window.location.href,trigger:"popstate",event:e})}initEvents(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.onHover),document.addEventListener("touchstart",this.onHover)),document.addEventListener("click",this.onClick),window.addEventListener("popstate",this.onStateChange)}stopEvents(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.onHover),document.removeEventListener("touchstart",this.onHover)),document.removeEventListener("click",this.onClick),window.removeEventListener("popstate",this.onStateChange)}};var De=class extends P{constructor(e=[]){super();this.routes=new I;for(let t of e)this.add(t)}add({path:e,method:t}){let i=this.parse(e);return this.routes.set(i,t),this}parsePath(e){if(typeof e=="string"||e instanceof RegExp||Array.isArray(e))return Q(e,[],{start:!1,end:!1});if(typeof e=="boolean")return e&&/.*/;throw"[Router] only regular expressions, strings, booleans and arrays of regular expressions and strings are accepted as paths."}isPath(e){return typeof e=="string"||e instanceof RegExp||typeof e=="boolean"||Array.isArray(e)}parse(e){let t=e,i={from:/.*/,to:/.*/};if(this.isPath(e))i={from:!0,to:e};else if(this.isPath(t.from)&&this.isPath(t.to))i=Object.assign({},i,t);else throw"[Router] path is neither a string, regular expression, or a { from, to } object.";let{from:n,to:s}=i;return{from:this.parsePath(n),to:this.parsePath(s)}}route(){if(this.manager.has("HistoryManager")){let e=this.manager.get("HistoryManager"),t=M(E((e.length>1?e.previous:e.current).url)),i=M(E());this.routes.forEach((n,s)=>{let a=s.from,l=s.to;if(typeof a=="boolean"&&typeof l=="boolean")throw`[Router] path ({ from: ${a}, to: ${l} }) is not valid, remember paths can only be strings, regular expressions, or a boolean; however, both the from and to paths cannot be both booleans.`;let p=a,o=l;a instanceof RegExp&&a.test(t)&&(p=a.exec(t)),l instanceof RegExp&&l.test(i)&&(o=l.exec(i)),(Array.isArray(o)&&Array.isArray(p)||Array.isArray(o)&&p==!1&&!l.test(t)||Array.isArray(p)&&o==!1&&!a.test(i))&&n({from:p,to:o,path:{from:t,to:i}})})}else console.warn("[Route] HistoryManager is missing.")}initEvents(){this.emitter.on("READY",this.route,this),this.emitter.on("CONTENT_REPLACED",this.route,this)}stopEvents(){this.emitter.off("READY",this.route,this),this.emitter.off("CONTENT_REPLACED",this.route,this)}};return Be;})();
