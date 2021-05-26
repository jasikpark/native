var S=class{constructor(e){this.map=new Map(e)}getMap(){return this.map}get(e){return this.map.get(e)}keys(){return Array.from(this.map.keys())}values(){return Array.from(this.map.values())}set(e,t){return this.map.set(e,t),this}add(e){let i=this.size;return this.set(i,e),this}get size(){return this.map.size}get length(){return this.map.size}last(e=1){let t=this.keys()[this.size-e];return this.get(t)}delete(e){return this.map.delete(e)}remove(e){return this.map.delete(e),this}clear(){return this.map.clear(),this}has(e){return this.map.has(e)}entries(){return this.map.entries()}forEach(e,t){return this.map.forEach(e,t),this}[Symbol.iterator](){return this.entries()}},_=(r,e,...t)=>{r.forEach(i=>{i[e](...t)})},Ge=async(r,e,...t)=>{for(let[,i]of r)await i[e](...t)};var oe=({callback:r=()=>{},scope:e=null,name:t="event"})=>({callback:r,scope:e,name:t}),U=class extends S{constructor(e="event"){super();this.name=e}},F=class extends S{constructor(){super()}getEvent(e){let t=this.get(e);return t instanceof U?t:(this.set(e,new U(e)),this.get(e))}newListener(e,t,i){let n=this.getEvent(e);return n.add(oe({name:e,callback:t,scope:i})),n}on(e,t,i){if(typeof e=="undefined"||e==null)return this;typeof e=="string"&&(e=e.trim().split(/\s/g));let n,s,a=typeof e=="object"&&!Array.isArray(e),l=a?t:i;return a||(s=t),Object.keys(e).forEach(o=>{n=a?o:e[o],a&&(s=e[o]),this.newListener(n,s,l)},this),this}removeListener(e,t,i){let n=this.get(e);if(n instanceof U&&t){let s=oe({name:e,callback:t,scope:i});n.forEach((a,l)=>{if(a.callback===s.callback&&a.scope===s.scope)return n.remove(l)})}return n}off(e,t,i){if(typeof e=="undefined"||e==null)return this;typeof e=="string"&&(e=e.trim().split(/\s/g));let n,s,a=typeof e=="object"&&!Array.isArray(e),l=a?t:i;return a||(s=t),Object.keys(e).forEach(o=>{n=a?o:e[o],a&&(s=e[o]),typeof s=="function"?this.removeListener(n,s,l):this.remove(n)},this),this}once(e,t,i){if(typeof e=="undefined"||e==null)return this;typeof e=="string"&&(e=e.trim().split(/\s/g));let n=typeof e=="object"&&!Array.isArray(e);return Object.keys(e).forEach(s=>{let a=n?s:e[s],l=n?e[s]:t,o=n?t:i,p=(...c)=>{l.apply(o,c),this.removeListener(a,p,o)};this.newListener(a,p,o)},this),this}emit(e,...t){return typeof e=="undefined"||e==null?this:(typeof e=="string"&&(e=e.trim().split(/\s/g)),e.forEach(i=>{let n=this.get(i);n instanceof U&&n.forEach(s=>{let{callback:a,scope:l}=s;a.apply(l,t)})},this),this)}clear(){return _(this,"clear"),super.clear(),this}};var q=r=>typeof r=="string"?r.includes("%")?parseFloat(r)/100:r=="from"?0:r=="to"?1:parseFloat(r):r,le=r=>{let e=new Set,t=Object.keys(r),i=t.length;for(let n=0;n<i;n++){let s=""+t[n],a=r[s],l=s.split(","),o=l.length;for(let p=0;p<o;p++){let c=q(l[p]);e.add({...a,offset:c})}}return[...e].sort((n,s)=>n.offset-s.offset)},Ye={};var Q=(r="")=>e=>typeof e=="string"?e:`${e}${r}`,$=Q(),ee=Q("px"),te=Q("deg"),ie=r=>Array.isArray(r)||typeof r=="string"?(typeof r=="string"&&(r=r.split(",")),r):[r],O=r=>Array.isArray(r)||typeof r=="string"?Boolean(r.length):r!=null&&r!=null,X=r=>e=>O(e)?ie(e).map(t=>{if(typeof t!="number"&&typeof t!="string")return t;let i=Number(t),n=Number.isNaN(i)?typeof t=="string"?t.trim():t:i;return r(n)}):[],ve=(...r)=>{let e=0;r=r.map(n=>{let s=ie(n),a=s.length;return a>e&&(e=a),s});let t=[],i=r.length;for(let n=0;n<e;n++){t[n]=[];for(let s=0;s<i;s++){let a=r[s][n];O(a)&&(t[n][s]=a)}}return t},H=(r,e)=>ie(r).map(X(e)),pe=["translate","translate3d","translateX","translateY","translateZ","rotate","rotate3d","rotateX","rotateY","rotateZ","scale","scale3d","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective"],ce=r=>{let e="",t=pe.length;for(let i=0;i<t;i++){let n=pe[i],s=r[i];O(s)&&(e+=`${n}(${Array.isArray(s)?s.join(", "):s}) `)}return e.trim()},L=X($),C=X(ee),P=X(te),ue=r=>{let{perspective:e,rotate:t,rotate3d:i,rotateX:n,rotateY:s,rotateZ:a,translate:l,translate3d:o,translateX:p,translateY:c,translateZ:f,scale:y,scale3d:u,scaleX:g,scaleY:h,scaleZ:m,skew:E,skewX:b,skewY:A,...d}=r;l=H(l,ee),o=H(o,ee),p=C(p),c=C(c),f=C(f),t=H(t,te),i=H(i,$),n=P(n),s=P(s),a=P(a),y=H(y,$),u=H(u,$),g=L(g),h=L(h),m=L(m),E=H(E,te),b=P(b),A=P(A),e=C(e);let x=ve(l,o,p,c,f,t,i,n,s,a,y,u,g,h,m,E,b,A,e).map(ce);return d=Y(d,v=>[].concat(v).map(I=>""+I)),Object.assign({},O(x)?{transform:x}:null,d)},me=r=>r.map(e=>{let{translate:t,translate3d:i,translateX:n,translateY:s,translateZ:a,rotate:l,rotate3d:o,rotateX:p,rotateY:c,rotateZ:f,scale:y,scale3d:u,scaleX:g,scaleY:h,scaleZ:m,skew:E,skewX:b,skewY:A,perspective:d,easing:x,iterations:v,offset:I,...w}=e;return t=C(t),i=C(i),n=C(n)[0],s=C(s)[0],a=C(a)[0],l=P(l),o=L(o),p=P(p)[0],c=P(c)[0],f=P(f)[0],y=L(y),u=L(u),g=L(g)[0],h=L(h)[0],m=L(m)[0],E=P(E),b=P(b)[0],A=P(A)[0],d=C(d)[0],[w,t,i,n,s,a,l,o,p,c,f,y,u,g,h,m,E,b,A,d]}).map(([e,...t])=>{let i=ce(t);return Object.assign({},O(i)?{transform:i}:null,e)});var xe=r=>typeof r=="string"?Array.from(document.querySelectorAll(r)):[r],Ie=r=>[].concat(...r),re=r=>Array.isArray(r)?Ie(r.map(re)):typeof r=="string"||r instanceof Node?xe(r):r instanceof NodeList||r instanceof HTMLCollection?Array.from(r):[],Se=(r,e,t)=>typeof r=="function"?r.apply(t,e):r,Y=(r,e)=>{let t=Object.keys(r),i,n,s={};for(let a=0,l=t.length;a<l;a++)i=t[a],n=r[i],s[i]=e(n,i,r);return s},he=(r,e,t)=>Y(r,i=>Se(i,e,t)),fe={in:"ease-in",out:"ease-out","in-out":"ease-in-out","in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","in-out-expo":"cubic-bezier(1, 0, 0, 1)","in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},we=Object.keys(fe),ge=r=>{let e=r.replace(/^ease-/,"");return we.includes(e)?fe[e]:r},Pe={keyframes:[],offset:[],loop:1,delay:0,speed:1,endDelay:0,easing:"ease",timelineOffset:0,autoplay:!0,duration:1e3,fillMode:"none",direction:"normal",padEndDelay:!1,extend:{}},Re=r=>{let{options:e,...t}=r,i=e instanceof B?e.options:Array.isArray(e)?e?.[0]?.options:e;return Object.assign({},i,t)},W=(r,e)=>{let t={...e};for(;r.length;){let{[r.pop()]:i,...n}=t;t=n}return t},ne=class{constructor(e){this.options={};this.properties={};this.totalDuration=0;this.emitter=new F;this.targets=new S;this.targetIndexes=new WeakMap;this.keyframeEffects=new WeakMap;this.computedOptions=new WeakMap;this.animations=new WeakMap;this.computedKeyframes=new WeakMap;this.loop=this.loop.bind(this),this.onVisibilityChange=this.onVisibilityChange.bind(this),this.on("error",t=>console.error(t)),this.updateOptions(e),this.visibilityPlayState=this.getPlayState(),ne.pauseOnPageHidden&&document.addEventListener("visibilitychange",this.onVisibilityChange,!1),this.newPromise()}onVisibilityChange(){document.hidden?(this.visibilityPlayState=this.getPlayState(),this.is("running")&&(this.loop(),this.pause())):this.visibilityPlayState=="running"&&this.is("paused")&&this.play()}newPromise(){return this.promise=new Promise((e,t)=>{this?.emitter?.once?.("finish",()=>e([this])),this?.emitter?.once?.("error",i=>t(i))}),this.promise}then(e,t){return e=e?.bind(this),t=t?.bind(this),this?.promise?.then?.(e,t),this}catch(e){return e=e?.bind(this),this.promise?.catch?.(e),this}finally(e){return e=e?.bind(this),this.promise?.finally?.(e),this}loop(){this.stopLoop(),this.animationFrame=window.requestAnimationFrame(this.loop),this.emit("update",this.getProgress(),this)}stopLoop(){window.cancelAnimationFrame(this.animationFrame)}allAnimations(e){return this.targets.forEach(t=>{let i=this.keyframeEffects.get(t),n=this.animations.get(i);return e(n,t)}),this}all(e){return this.mainAnimation&&e(this.mainAnimation,this.mainElement),this.allAnimations(e),this}beginEvent(){this.getProgress()==0&&this.emit("begin",this)}play(){let e=this.getPlayState();return this.beginEvent(),this.all(t=>t.play()),this.emit("play",e,this),this.is(e)||this.emit("playstate-change",e,this),this.loop(),this}pause(){let e=this.getPlayState();return this.all(t=>t.pause()),this.emit("pause",e,this),this.is(e)||this.emit("playstate-change",e,this),this.stopLoop(),this}reverse(){return this.all(e=>e.reverse()),this}reset(){return this.setProgress(0),this.options.autoplay?this.play():this.pause(),this}cancel(){return this.all(e=>e.cancel()),this}finish(){return this.all(e=>e.finish()),this}stop(){this.cancel(),this.stopLoop(),document.removeEventListener("visibilitychange",this.onVisibilityChange,!1),this.targets.forEach(e=>this.removeTarget(e)),this.emit("stop"),this.emitter.clear(),this.mainkeyframeEffect=null,this.mainAnimation=null,this.mainElement=null,this.promise=null,this.computedOptions=null,this.animations=null,this.keyframeEffects=null,this.emitter=null,this.targets=null,this.options=null,this.properties=null}getAnimation(e){let t=this.keyframeEffects.get(e);return this.animations.get(t)}getTiming(e){let t=this.computedOptions.get(e)??{},i=this.keyframeEffects.get(e).getTiming?.()??{};return{...t,...i}}getCurrentTime(){return this.mainAnimation.currentTime}getProgress(){return this.getCurrentTime()/this.totalDuration*100}getSpeed(){return this.mainAnimation.playbackRate}getPlayState(){return this.mainAnimation.playState}is(e){return this.getPlayState()==e}setCurrentTime(e){return this.all(t=>t.currentTime=e),this.emit("update",this.getProgress()),this}setProgress(e){let t=e/100*this.totalDuration;return this.setCurrentTime(t),this}setSpeed(e=1){return this.maxSpeed=e,this.all(t=>{t.updatePlaybackRate?t.updatePlaybackRate(e):t.playbackRate=e}),this}createArrayOfComputedOptions(e,t){let i=[];return this.targets.forEach((n,s)=>{let a=this.computedOptions.get(n)??{},l=b=>{let A=b;return b=="loop"&&(A="iterations"),b=="fillMode"&&(A="fill"),e[b]??a[A]??this.options[b]},o=Object.assign({easing:l("easing"),iterations:l("loop"),direction:l("direction"),endDelay:l("endDelay"),duration:l("duration"),speed:l("speed"),delay:l("delay"),timelineOffset:l("timelineOffset"),keyframes:l("keyframes")},l("extend")??{}),p=he(o,[s,t,n],this);typeof p.easing=="string"&&(p.easing=ge(p.easing)),p.iterations===!0&&(p.iterations=Infinity),p.fill=l("fillMode");let{timelineOffset:c,speed:f,endDelay:y,delay:u,duration:g,iterations:h,...m}=p;h=Number(h),g=Number(g),y=Number(y),f=Number(f),u=Number(u)+Number(c);let E=u+g*h+y;this.totalDuration<E&&(this.totalDuration=E),i[s]={...m,speed:f,tempDurations:E,endDelay:y,delay:u,duration:g,iterations:h},(!O(this.minDelay)||u<this.minDelay)&&(this.minDelay=u),(!O(this.maxSpeed)||f<this.maxSpeed)&&(this.maxSpeed=f)}),i}createAnimations(e,t){let{arrOfComputedOptions:i,padEndDelay:n,oldCSSProperties:s,onfinish:a,oncancel:l}=e;this.targets.forEach((o,p)=>{let{speed:c,keyframes:f,tempDurations:y,...u}=i[p];n&&u.endDelay==0&&Math.abs(u.iterations)!=Math.abs(Infinity)&&(u.endDelay=this.totalDuration-y);let g,h,m=f;typeof m=="object"&&(m=le(m));let E=this.computedKeyframes.get(o)??{},b=Object.assign({},s,E),A=Y(b,(v,I)=>this.properties[I]??v);if(h=O(m)?m:A,Array.isArray(h))g=h.map(v=>{let{easing:I,offset:w,...D}=W(["speed","loop"],v);return Object.assign({},D,typeof I=="string"?{easing:ge(I)}:null,typeof w=="string"||typeof w=="number"?{offset:q(w)}:null)}),g=me(g);else{let v=W(["keyframes"],h),{offset:I,...w}=he(v,[p,t,o],this);w=ue(w);let D=I;g=Object.assign({},w,O(D)?{offset:D.map(q)}:null)}let d,x;this.keyframeEffects.has(o)?(x=this.keyframeEffects.get(o),d=this.animations.get(x),x?.setKeyframes?.(g),x?.updateTiming?.(u)):(x=new KeyframeEffect(o,g,u),d=new Animation(x,u.timeline),this.keyframeEffects.set(o,x),this.animations.set(x,d)),d.playbackRate=c,d.onfinish=()=>{typeof a=="function"&&a.call(this,o,p,t,d)},d.oncancel=()=>{typeof l=="function"&&l.call(this,o,p,t,d)},this.computedOptions.set(o,u),this.computedKeyframes.set(o,g)})}updateOptions(e={}){try{let t=Re(e);this.options=Object.assign({},Pe,this.options,t);let i=["easing","loop","endDelay","duration","speed","delay","timelineOffset","direction","extend","fillMode","offset"],{padEndDelay:n,onfinish:s,oncancel:a,autoplay:l,target:o,targets:p,...c}=W(i,this.options);this.properties=W([...i,"keyframes","padEndDelay","onfinish","oncancel","autoplay","target","targets"],t);let f=this.targets.values(),y=[...new Set([...f,...re(p),...re(o)])];this.targets.clear(),y.forEach((h,m)=>{this.targets.set(m,h),this.targetIndexes.set(h,m)});let u=this.targets.size,g=this.createArrayOfComputedOptions(t,u);if(this.createAnimations({arrOfComputedOptions:g,padEndDelay:n,oldCSSProperties:c,onfinish:s,oncancel:a},u),this.maxSpeed=this.maxSpeed??this.options.speed,this.minDelay=this.minDelay??this.options.delay,this.totalDuration=this.totalDuration??this.options.duration,this.mainAnimation?(this.mainkeyframeEffect?.updateTiming?.({duration:this.totalDuration}),(!this.mainkeyframeEffect.setKeyframes||!this.mainkeyframeEffect.updateTiming)&&console.warn("@okikio/animate - `KeyframeEffect.setKeyframes` and/or `KeyframeEffect.updateTiming` are not supported in this browser.")):(this.mainkeyframeEffect=new KeyframeEffect(this.mainElement,[{opacity:"0"},{opacity:"1"}],{duration:this.totalDuration,easing:"linear"}),this.mainAnimation=new Animation(this.mainkeyframeEffect,this.options.timeline)),this.mainAnimation.playbackRate=this.maxSpeed,this.mainAnimation.onfinish=()=>{if(this.emit("finish",this),this.mainAnimation){let h=this.getPlayState();this.is(h)||this.emit("playstate-change",h,this),this.stopLoop()}},this.mainAnimation.oncancel=()=>{if(this.emit("cancel",this),this.mainAnimation){let h=this.getPlayState();this.is(h)||this.emit("playstate-change",h,this),this.stopLoop()}},l){let h=window.setTimeout(()=>{this.emit("begin",this),h=window.clearTimeout(h)},0);this.play()}else this.pause()}catch(t){this.emit("error",t)}}add(e){let t=this.getProgress(),i=this.is("running"),n=this.is("paused");this.updateOptions({target:e}),this.setProgress(t),i?this.play():n&&this.pause()}removeTarget(e){let t=this.keyframeEffects.get(e);this.animations.delete(t),t=null,this.computedKeyframes.delete(e),this.computedOptions.delete(e),this.keyframeEffects.delete(e);let i=this.targetIndexes.get(e);this.targets.delete(i),this.targetIndexes.delete(e)}remove(e){this.removeTarget(e);let t=new Set([].concat(this.targets.values()));this.options.target=[...t],this.options.targets=[],t.clear(),t=null;let i=this.getProgress(),n=this.is("running"),s=this.is("paused");this.updateOptions(),n?this.play():s&&this.pause(),this.setProgress(i)}on(e,t,i){return this?.emitter?.on(e,t,i??this),this}off(e,t,i){return this?.emitter?.off(e,t,i??this),this}emit(e,...t){return this?.emitter?.emit(e,...t),this}toJSON(){return this.options}get[Symbol.toStringTag](){return"Animate"}},B=ne;B.pauseOnPageHidden=!0;var nt=(r={})=>new B(r);var Oe={wrapperAttr:"wrapper",headers:[],preventSelfAttr:'prevent="self"',preventAllAttr:'prevent="all"',transitionAttr:"transition",timeout:2e3,maxPages:5,resizeDelay:100,onTransitionPreventClick:!0,cacheIgnore:!1,prefetchIgnore:!1,preventURLs:[],stickyScroll:!1,forceOnError:!0,ignoreHashAction:!1,transitions:[]},ye=r=>Object.assign({...Oe},r),k=(r,e,t=!0)=>{let{prefix:i}=r,n=r[e],s=`data${i?"-"+i:""}-${n}`;return t?`[${s}]`:s};var V=class{constructor(){}install(){}register(e,t){return this.manager=e,this.app=e.app,this.config=e.config,this.emitter=e.emitter,this.key=t,this.install(),this}uninstall(){}unregister(){this.uninstall(),this.manager.remove(this.key),this.key=null,this.manager=null,this.app=null,this.config=null,this.emitter=null}},z=class extends S{constructor(e){super();this.app=e,this.config=e.config,this.emitter=e.emitter}set(e,t){return super.set(e,t),t.register(this,e),this}};var T=(r=window.location.href)=>r instanceof URL?r:new URL(r,window.location.origin),M=r=>{let e=T(r);return`${e.pathname}${e.hash}`},mt=r=>T(r).hash.slice(1),de=r=>T(r).toString().replace(/(\/#.*|\/|#.*)$/,""),Z=(r,e)=>de(r)===de(e);var R=class extends V{init(){}boot(){this.initEvents()}initEvents(){}stopEvents(){}stop(){this.stopEvents(),this.unregister()}},se=class extends z{constructor(e){super(e)}init(){return _(this,"init"),this}boot(){return _(this,"boot"),this}stop(){return _(this,"stop"),this}};var N=(r=window.scrollX,e=window.scrollY)=>({x:r,y:e}),J=(r={url:M(T()),index:0,transition:"default",data:{scroll:N(),trigger:"HistoryManager"}})=>r,Ce=class extends R{constructor(){super(...arguments);this.pointer=-1}init(){this.states=[];let e=J();this.add(e,"replace")}get(e){return this.states[e]}add(e,t="push"){let i=J(e),n=this.length;this.states.push({...i}),this.pointer=n;let s={index:this.pointer,states:[...this.states]};return Le(t,i,s),this}remove(e){return e?this.states.splice(e,1):this.states.pop(),this.pointer--,this}replace(e){return this.states=e,this}set(e,t){return this.states[e]=t}get current(){return this.get(this.pointer)}get last(){return this.get(this.length-1)}get previous(){return this.pointer<1?null:this.get(this.pointer-1)}get length(){return this.states.length}},Le=(r,e,t)=>{let i=M(e.url),n=[t,"",i];if(window.history)switch(r){case"push":window.history.pushState.apply(window.history,n);break;case"replace":window.history.replaceState.apply(window.history,n);break}};function Me(r){for(var e=[],t=0;t<r.length;){var i=r[t];if(i==="*"||i==="+"||i==="?"){e.push({type:"MODIFIER",index:t,value:r[t++]});continue}if(i==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:r[t++]});continue}if(i==="{"){e.push({type:"OPEN",index:t,value:r[t++]});continue}if(i==="}"){e.push({type:"CLOSE",index:t,value:r[t++]});continue}if(i===":"){for(var n="",s=t+1;s<r.length;){var a=r.charCodeAt(s);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||a===95){n+=r[s++];continue}break}if(!n)throw new TypeError("Missing parameter name at "+t);e.push({type:"NAME",index:t,value:n}),t=s;continue}if(i==="("){var l=1,o="",s=t+1;if(r[s]==="?")throw new TypeError('Pattern cannot start with "?" at '+s);for(;s<r.length;){if(r[s]==="\\"){o+=r[s++]+r[s++];continue}if(r[s]===")"){if(l--,l===0){s++;break}}else if(r[s]==="("&&(l++,r[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at "+s);o+=r[s++]}if(l)throw new TypeError("Unbalanced pattern at "+t);if(!o)throw new TypeError("Missing pattern at "+t);e.push({type:"PATTERN",index:t,value:o}),t=s;continue}e.push({type:"CHAR",index:t,value:r[t++]})}return e.push({type:"END",index:t,value:""}),e}function ke(r,e){e===void 0&&(e={});for(var t=Me(r),i=e.prefixes,n=i===void 0?"./":i,s="[^"+K(e.delimiter||"/#?")+"]+?",a=[],l=0,o=0,p="",c=function(v){if(o<t.length&&t[o].type===v)return t[o++].value},f=function(v){var I=c(v);if(I!==void 0)return I;var w=t[o],D=w.type,Ae=w.index;throw new TypeError("Unexpected "+D+" at "+Ae+", expected "+v)},y=function(){for(var v="",I;I=c("CHAR")||c("ESCAPED_CHAR");)v+=I;return v};o<t.length;){var u=c("CHAR"),g=c("NAME"),h=c("PATTERN");if(g||h){var m=u||"";n.indexOf(m)===-1&&(p+=m,m=""),p&&(a.push(p),p=""),a.push({name:g||l++,prefix:m,suffix:"",pattern:h||s,modifier:c("MODIFIER")||""});continue}var E=u||c("ESCAPED_CHAR");if(E){p+=E;continue}p&&(a.push(p),p="");var b=c("OPEN");if(b){var m=y(),A=c("NAME")||"",d=c("PATTERN")||"",x=y();f("CLOSE"),a.push({name:A||(d?l++:""),pattern:A&&!d?s:d,prefix:m,suffix:x,modifier:c("MODIFIER")||""});continue}f("END")}return a}function K(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function be(r){return r&&r.sensitive?"":"i"}function Ne(r,e){if(!e)return r;for(var t=/\((?:\?<(.*?)>)?(?!\?)/g,i=0,n=t.exec(r.source);n;)e.push({name:n[1]||i++,prefix:"",suffix:"",modifier:"",pattern:""}),n=t.exec(r.source);return r}function _e(r,e,t){var i=r.map(function(n){return j(n,e,t).source});return new RegExp("(?:"+i.join("|")+")",be(t))}function He(r,e,t){return De(ke(r,t),e,t)}function De(r,e,t){t===void 0&&(t={});for(var i=t.strict,n=i===void 0?!1:i,s=t.start,a=s===void 0?!0:s,l=t.end,o=l===void 0?!0:l,p=t.encode,c=p===void 0?function(v){return v}:p,f="["+K(t.endsWith||"")+"]|$",y="["+K(t.delimiter||"/#?")+"]",u=a?"^":"",g=0,h=r;g<h.length;g++){var m=h[g];if(typeof m=="string")u+=K(c(m));else{var E=K(c(m.prefix)),b=K(c(m.suffix));if(m.pattern)if(e&&e.push(m),E||b)if(m.modifier==="+"||m.modifier==="*"){var A=m.modifier==="*"?"?":"";u+="(?:"+E+"((?:"+m.pattern+")(?:"+b+E+"(?:"+m.pattern+"))*)"+b+")"+A}else u+="(?:"+E+"("+m.pattern+")"+b+")"+m.modifier;else u+="("+m.pattern+")"+m.modifier;else u+="(?:"+E+b+")"+m.modifier}}if(o)n||(u+=y+"?"),u+=t.endsWith?"(?="+f+")":"$";else{var d=r[r.length-1],x=typeof d=="string"?y.indexOf(d[d.length-1])>-1:d===void 0;n||(u+="(?:"+y+"(?="+f+"))?"),x||(u+="(?="+y+"|"+f+")")}return new RegExp(u,be(t))}function j(r,e,t){return r instanceof RegExp?Ne(r,e):Array.isArray(r)?_e(r,e,t):He(r,e,t)}var Ke=new DOMParser,ae=class extends V{constructor(e=T(),t=document){super();this.url=T(e),typeof t=="string"?this.data=t:this.dom=t||document}async build(){if(this.dom instanceof Node||(this.dom=Ke.parseFromString(this.data,"text/html")),!(this.body instanceof Node)){let{title:e,head:t,body:i}=this.dom;this.title=e,this.head=t,this.body=i,this.wrapper=this.body.querySelector(this.wrapperAttr)}}install(){this.wrapperAttr=k(this.config,"wrapperAttr")}uninstall(){this.url=null,this.title=null,this.head=null,this.body=null,this.dom=null,this.wrapper=null,this.data=null,this.wrapperAttr=null}},Ue=class extends R{constructor(){super();this.loading=new S}install(){this.pages=new z(this.app),this.cacheIgnore=this.config.cacheIgnore;let e=T().pathname;this.set(e,new ae),e=null}get(e){return this.pages.get(e)}add(e){return this.pages.add(e),this}set(e,t){return this.pages.set(e,t),this}remove(e){return this.pages.remove(e),this}has(e){return this.pages.has(e)}clear(){return this.pages.clear(),this}get size(){return this.pages.size}keys(){return this.pages.keys()}async load(e=T()){let t=T(e),i=t.pathname,n,s;if(this.has(i)&&!G(i,this.cacheIgnore))return n=this.get(i),Promise.resolve(n);this.loading.has(i)?s=this.loading.get(i):(s=this.request(i),this.loading.set(i,s));let a=await s;if(this.loading.remove(i),n=new ae(t,a),this.set(i,n),this.size>this.config.maxPages){let l=T(),o=this.keys(),p=Z(l,o[0])?o[1]:o[0],c=this.get(p);c.unregister(),c=null,o=null,l=null,p=null}return n}async request(e){let t=new Headers(this.config.headers),i=window.setTimeout(()=>{window.clearTimeout(i);let n=new Error("Request Timed Out!");throw this.emitter.emit("TIMEOUT_ERROR",n),n},this.config.timeout);try{let n=await fetch(e,{mode:"same-origin",method:"GET",headers:t,cache:"default",credentials:"same-origin"});if(window.clearTimeout(i),n.status>=200&&n.status<300)return await n.text();let s=new Error(n.statusText||""+n.status);throw this.emitter.emit("REQUEST_ERROR",s),s}catch(n){throw window.clearTimeout(i),n}}},G=(r,e)=>{if(typeof e=="boolean")return e;let t=[];return!e.every(i=>j(i,t,{start:!1,end:!1}).exec(r)==null)};var Ee=(r,e=window.location.hash)=>{try{let t=e[0]=="#"?e:T(e).hash;if(t.length>1){let i=document.getElementById(t.slice(1));if(i){let{left:n,top:s}=i.getBoundingClientRect(),a=window.scrollX,l=window.scrollY,o=n+a,p=s+l;return N(o,p)}}}catch(t){console.warn("[hashAction] error",t)}return r??N(0,0)},Te={name:"replace"},Fe=class extends R{constructor(e){super();this._arg=e}install(){super.install();let e=this._arg&&this._arg.length?this._arg:this.config.transitions;this.transitions=new S([["default",Te],["replace",Te]].concat(e))}get(e){return this.transitions.get(e)}set(e,t){return this.transitions.set(e,t),this}add(e){return this.transitions.add(e),this}has(e){return this.transitions.has(e)}async start(e,t){let i=this.transitions.get(e),{oldPage:n,newPage:s,ignoreHashAction:a,trigger:l}=t;if(this.emitter.emit("TRANSITION_START",{transitionName:e,...t}),!("wrapper"in n)||!("wrapper"in s))throw`[TransitionManager] either oldPage or newPage aren't instances of the Page Class.
 ${{newPage:s,oldPage:n}}`;document.title=""+s.title;let o=n.wrapper,p=s.wrapper;if(!(o instanceof Node)||!(p instanceof Node))throw`[TransitionManager] the wrapper from the ${p instanceof Node?"current":"next"} page cannot be found. The wrapper must be an element that has the attribute ${k(this.config,"wrapperAttr")}.`;return i.init&&i?.init(t),this.emitter.emit("BEFORE_TRANSITION_OUT",t),i.out&&await new Promise(c=>{i.out.call(i,{...t,from:n,done:c})?.then(c)}),this.emitter.emit("AFTER_TRANSITION_OUT",t),await new Promise(c=>{o.insertAdjacentElement("beforebegin",p),this.emitter.emit("CONTENT_INSERT",t),c()}),await new Promise(c=>{o.remove(),o=null,p=null,this.emitter.emit("CONTENT_REPLACED",t),!a&&!/back|popstate|forward/.test(l)&&(t.scroll=Ee(t.scroll)),c()}),this.emitter.emit("BEFORE_TRANSITION_IN",t),i.in&&await new Promise(c=>{i.in.call(i,{...t,from:n,to:s,done:c})?.then(c)}),this.emitter.emit("AFTER_TRANSITION_IN",t),i.manualScroll||(!a&&!/back|popstate|forward/.test(l)&&(t.scroll=Ee(t.scroll)),window.scroll(t.scroll.x,t.scroll.y)),this.emitter.emit("TRANSITION_END",{transitionName:e,...t}),t}};var Ve=class{constructor(e={}){this.canResize=!0;this.canScroll=!0;this._resize=this._resize.bind(this),this._scroll=this._scroll.bind(this),this._ready=this._ready.bind(this),this.register(e)}register(e={}){return this.config=ye(e),this.emitter=new F,this.services=new se(this),this}_ready(){document.removeEventListener("DOMContentLoaded",this._ready),window.removeEventListener("load",this._ready),this.emitter.emit("READY ready")}_resize(){if(this.canResize){let e,t;this.canResize=!1,t=window.requestAnimationFrame(()=>{this.emitter.emit("RESIZE resize"),e=window.setTimeout(()=>{this.canResize=!0,e=window.clearTimeout(e),t=window.cancelAnimationFrame(t)},this.config.resizeDelay)})}}_scroll(){if(this.canScroll){let e;this.canScroll=!1,e=requestAnimationFrame(()=>{this.emitter.emit("SCROLL scroll"),this.canScroll=!0,e=window.cancelAnimationFrame(e)})}}get(e){return this.services.get(e)}set(e,t){return this.services.set(e,t),this}add(e){return this.services.add(e),this}boot(){return document.addEventListener("DOMContentLoaded",this._ready),window.addEventListener("load",this._ready),window.addEventListener("resize",this._resize,{passive:!0}),window.addEventListener("scroll",this._scroll,{passive:!0}),this.services.init(),this.services.boot(),this}stop(){return window.removeEventListener("resize",this._resize),window.removeEventListener("scroll",this._scroll),this.services.stop(),this.emitter.clear(),this}on(e,t){return this.emitter.on(e,t,this),this}off(e,t){return this.emitter.off(e,t,this),this}emit(e,...t){return this.emitter.emit(e,...t),this}};var ze=class extends R{install(){super.install(),this.preventURLs=this.config.preventURLs,this.prefetchIgnore=this.config.prefetchIgnore,this.onTransitionPreventClick=this.config.onTransitionPreventClick,this.stickyScroll=this.config.stickyScroll,this.forceOnError=this.config.forceOnError,this.ignoreHashAction=this.config.ignoreHashAction}transitionStart(){this.isTransitioning=!0}transitionStop(){this.isTransitioning=!1}init(){this.onHover=this.onHover.bind(this),this.onClick=this.onClick.bind(this),this.onStateChange=this.onStateChange.bind(this)}boot(){super.boot()}getTransitionName(e){if(!e||!e.getAttribute)return null;let t=e.getAttribute(k(this.config,"transitionAttr",!1));return typeof t=="string"?t:null}validLink(e,t,i){let n=!window.history.pushState,s=!e||!i,a=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey,l=e.hasAttribute("target")&&e.target==="_blank",o=e.protocol!==location.protocol||e.hostname!==location.hostname,p=typeof e.getAttribute("download")=="string",c=e.matches(k(this.config,"preventSelfAttr")),f=Boolean(e.closest(k(this.config,"preventAllAttr"))),y=G(T(i).pathname,this.preventURLs),u=M(T())===M(T(i));return!(s||n||a||l||o||p||c||f||y||u)}getHref(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"&&typeof e.href=="string"?e.href:null}getLink(e){let t=e.target,i=this.getHref(t);for(;t&&!i;)t=t.parentNode,i=this.getHref(t);if(!(!t||!this.validLink(t,e,i)))return t}onClick(e){let t=this.getLink(e);if(!t)return;if(this.isTransitioning&&this.onTransitionPreventClick){e.preventDefault(),e.stopPropagation();return}let i=this.getHref(t);this.emitter.emit("ANCHOR_CLICK CLICK",e),this.go({href:i,trigger:t,event:e})}getDirection(e){return Math.abs(e)>1?e>0?"forward":"back":e===0?"popstate":e>0?"back":"forward"}force(e){window.location.assign(e)}go({href:e,trigger:t="HistoryManager",event:i}){if(this.isTransitioning&&!this.onTransitionPreventClick||!(this.manager.has("TransitionManager")&&this.manager.has("HistoryManager")&&this.manager.has("PageManager"))){this.force(e);return}let n=this.manager.get("HistoryManager"),s=N(0,0),a=n.current,l=a.url;if(Z(l,e))return;let o;if(i&&i.state){this.emitter.emit("POPSTATE",i);let{state:p}=i,{index:c}=p,y=a.index-c;n.replace(p.states),n.pointer=c;let u=n.get(c);o=u.transition,s=u.data.scroll,t=this.getDirection(y),this.emitter.emit(t==="back"?"POPSTATE_BACK":"POPSTATE_FORWARD",i)}else{o=this.getTransitionName(t),s=N();let p=J({url:e,transition:o,data:{scroll:s}});!this.stickyScroll&&(s=N(0,0)),n.add(p),this.emitter.emit("HISTORY_NEW_ITEM",i)}return i&&(i.stopPropagation(),i.preventDefault()),this.emitter.emit("GO",i),this.load({oldHref:l,href:e,trigger:t,transitionName:o,scroll:s})}async load({oldHref:e,href:t,trigger:i,transitionName:n="default",scroll:s={x:0,y:0}}){try{let a=this.manager.get("TransitionManager"),l=this.manager.get("PageManager"),o=this.ignoreHashAction,p,c;this.emitter.emit("NAVIGATION_START",{oldHref:e,href:t,trigger:i,transitionName:n,scroll:s}),a.has(n)||(console.log(`[PJAX] transition name "${n}" doesn't exist, switching to the "default" transition`),n="default");try{this.transitionStart(),this.emitter.emit("PAGE_LOADING",{href:t,oldHref:e,trigger:i,scroll:s}),c=await l.load(e),p=await l.load(t),this.emitter.emit("PAGE_LOAD_COMPLETE",{newPage:p,oldPage:c,trigger:i,scroll:s}),c.dom instanceof Element||c.build(),p.build()}catch(f){console.warn("[PJAX] Page load error",f)}try{s=(await a.start(n,{oldPage:c,newPage:p,trigger:i,scroll:s,ignoreHashAction:o})).scroll}catch(f){console.warn("[PJAX] Transition error",f)}this.emitter.emit("NAVIGATION_END",{oldPage:c,newPage:p,trigger:i,transitionName:n,scroll:s})}catch(a){this.forceOnError?this.force(t):console.warn(a)}finally{this.transitionStop()}}onHover(e){let t=this.getLink(e);if(!t||!this.manager.has("PageManager"))return;let i=this.manager.get("PageManager"),n=T(this.getHref(t)),s=n.pathname;if(this.emitter.emit("ANCHOR_HOVER HOVER",e),!G(n.pathname,this.prefetchIgnore)&&!(i.has(s)&&!G(s,i.cacheIgnore)))try{i.load(n),this.emitter.emit("PREFETCH",e)}catch(a){console.warn("[PJAX] Prefetch error",a)}}onStateChange(e){this.go({href:window.location.href,trigger:"popstate",event:e})}initEvents(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.onHover),document.addEventListener("touchstart",this.onHover)),document.addEventListener("click",this.onClick),window.addEventListener("popstate",this.onStateChange)}stopEvents(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.onHover),document.removeEventListener("touchstart",this.onHover)),document.removeEventListener("click",this.onClick),window.removeEventListener("popstate",this.onStateChange)}};var je=class extends R{constructor(e=[]){super();this.routes=new S;for(let t of e)this.add(t)}add({path:e,method:t}){let i=this.parse(e);return this.routes.set(i,t),this}parsePath(e){if(typeof e=="string"||e instanceof RegExp||Array.isArray(e))return j(e,[],{start:!1,end:!1});if(typeof e=="boolean")return e&&/.*/;throw"[Router] only regular expressions, strings, booleans and arrays of regular expressions and strings are accepted as paths."}isPath(e){return typeof e=="string"||e instanceof RegExp||typeof e=="boolean"||Array.isArray(e)}parse(e){let t=e,i={from:/.*/,to:/.*/};if(this.isPath(e))i={from:!0,to:e};else if(this.isPath(t.from)&&this.isPath(t.to))i=Object.assign({},i,t);else throw"[Router] path is neither a string, regular expression, or a { from, to } object.";let{from:n,to:s}=i;return{from:this.parsePath(n),to:this.parsePath(s)}}route(){if(this.manager.has("HistoryManager")){let e=this.manager.get("HistoryManager"),t=M(T((e.length>1?e.previous:e.current).url)),i=M(T());this.routes.forEach((n,s)=>{let a=s.from,l=s.to;if(typeof a=="boolean"&&typeof l=="boolean")throw`[Router] path ({ from: ${a}, to: ${l} }) is not valid, remember paths can only be strings, regular expressions, or a boolean; however, both the from and to paths cannot be both booleans.`;let o=a,p=l;a instanceof RegExp&&a.test(t)&&(o=a.exec(t)),l instanceof RegExp&&l.test(i)&&(p=l.exec(i)),(Array.isArray(p)&&Array.isArray(o)||Array.isArray(p)&&o==!1&&!l.test(t)||Array.isArray(o)&&p==!1&&!a.test(i))&&n({from:o,to:p,path:{from:t,to:i}})})}else console.warn("[Route] HistoryManager is missing.")}initEvents(){this.emitter.on("READY",this.route,this),this.emitter.on("CONTENT_REPLACED",this.route,this)}stopEvents(){this.emitter.off("READY",this.route,this),this.emitter.off("CONTENT_REPLACED",this.route,this)}};export{z as AdvancedManager,B as Animate,Ve as App,Oe as CONFIG_DEFAULTS,H as CSSArrValue,X as CSSValue,Pe as DefaultAnimationOptions,fe as EASINGS,Ye as EFFECTS,we as EasingKeys,U as Event,F as EventEmitter,ge as GetEase,Ce as HistoryManager,le as KeyframeParse,S as Manager,V as ManagerItem,Ke as PARSER,ze as PJAX,ae as Page,Ue as PageManager,me as ParseTransformableCSSKeyframes,ue as ParseTransformableCSSProperties,Te as Replace,je as Router,R as Service,se as ServiceManager,pe as TransformFunctionNames,Fe as TransitionManager,te as UnitDEG,P as UnitDEGCSSValue,$ as UnitLess,L as UnitLessCSSValue,ee as UnitPX,C as UnitPXCSSValue,Q as addCSSUnit,nt as animate,Ge as asyncMethodCall,Le as changeState,de as clean,Se as computeOption,ce as createTransformProperty,Z as equal,Ie as flatten,xe as getElements,mt as getHash,M as getHashedPath,re as getTargets,Ee as hashAction,G as ignoreURLs,O as isValid,he as mapAnimationOptions,Y as mapObject,_ as methodCall,ye as newConfig,N as newCoords,oe as newListener,J as newState,T as newURL,W as omit,q as parseOffset,Re as parseOptions,ie as toArr,k as toAttr,ve as transpose};
