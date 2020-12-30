var x=Object.defineProperty,F=i=>x(i,"__esModule",{value:!0}),D=(i,t)=>{F(i);for(var e in t)x(i,e,{get:t[e],enumerable:!0})};D(exports,{Animate:()=>h,DefaultAnimationOptions:()=>O,animate:()=>j,computeValue:()=>E,default:()=>_,easings:()=>w,getEase:()=>C,getElements:()=>T,getTargets:()=>K,mapObject:()=>k});var y=class{constructor(t){this.map=new Map(t)}getMap(){return this.map}get(t){return this.map.get(t)}keys(){return Array.from(this.map.keys())}values(){return Array.from(this.map.values())}set(t,e){return this.map.set(t,e),this}add(t){let e=this.size,n=e;return this.set(n,t),this}get size(){return this.map.size}get length(){return this.map.size}last(t=1){let e=this.keys()[this.size-t];return this.get(e)}delete(t){return this.map.delete(t)}remove(t){return this.map.delete(t),this}clear(){return this.map.clear(),this}has(t){return this.map.has(t)}entries(){return this.map.entries()}forEach(t=(...n)=>{},e){return this.map.forEach(t,e),this}[Symbol.iterator](){return this.entries()}},z=(i,t,...e)=>{i.forEach(n=>{n[t](...e)})},M=({callback:i=()=>{},scope:t=null,name:e="event"})=>({callback:i,scope:t,name:e}),b=class extends y{constructor(t="event"){super();this.name=t}},A=class extends y{constructor(){super()}getEvent(t){let e=this.get(t);return e instanceof b?e:(this.set(t,new b(t)),this.get(t))}newListener(t,e,n){let r=this.getEvent(t);return r.add(M({name:t,callback:e,scope:n})),r}on(t,e,n){if(typeof t=="undefined")return this;typeof t=="string"&&(t=t.trim().split(/\s/g));let r,a,s=typeof t=="object"&&!Array.isArray(t),o=s?e:n;return s||(a=e),Object.keys(t).forEach(u=>{s?(r=u,a=t[u]):r=t[u],this.newListener(r,a,o)},this),this}removeListener(t,e,n){let r=this.get(t);if(r instanceof b&&e){let a=M({name:t,callback:e,scope:n});r.forEach((s,o)=>{if(s.callback===a.callback&&s.scope===a.scope)return r.remove(o)})}return r}off(t,e,n){if(typeof t=="undefined")return this;typeof t=="string"&&(t=t.trim().split(/\s/g));let r,a,s=typeof t=="object"&&!Array.isArray(t),o=s?e:n;return s||(a=e),Object.keys(t).forEach(u=>{s?(r=u,a=t[u]):r=t[u],typeof a=="function"?this.removeListener(r,a,o):this.remove(r)},this),this}emit(t,...e){return typeof t=="undefined"?this:(typeof t=="string"&&(t=t.trim().split(/\s/g)),t.forEach(n=>{let r=this.get(n);r instanceof b&&r.forEach(a=>{let{callback:s,scope:o}=a;s.apply(o,e)})},this),this)}clear(){return z(this,"clear"),super.clear(),this}},T=i=>typeof i=="string"?Array.from(document.querySelectorAll(i)):[i],K=i=>Array.isArray(i)?i:typeof i=="string"||i instanceof Node?T(i):i instanceof NodeList||i instanceof HTMLCollection?Array.from(i):[],E=(i,t)=>typeof i=="function"?i(...t):i,k=(i,t)=>{let e,n,r={},a=Object.keys(i);for(let s=0,o=a.length;s<o;s++)e=a[s],n=i[e],r[e]=E(n,t);return r},w={ease:"ease",in:"ease-in",out:"ease-out","in-out":"ease-in-out","in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","in-out-expo":"cubic-bezier(1, 0, 0, 1)","in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},C=i=>/^(ease|in|out)/.test(i)?w[i]:i,O={keyframes:[],loop:1,delay:0,speed:1,endDelay:0,easing:"ease",autoplay:!0,duration:1e3,onfinish(){},fillMode:"auto",direction:"normal"},h=class{constructor(t={}){this.options={};this.targets=[];this.properties={};this.animations=new Map;this.duration=0;this.emitter=new A;let{options:e,...n}=t;this.options=Object.assign({},O,e instanceof h?e.getOptions():e,n),this.loop=this.loop.bind(this);let{loop:r,delay:a,speed:s,easing:o,endDelay:u,duration:v,direction:I,fillMode:V,onfinish:S,target:q,keyframes:P,autoplay:H,...N}=this.options;this.mainElement=document.createElement("div"),this.targets=K(q),this.properties=N;let p=this.targets.length,f;for(let c=0;c<p;c++){let m=this.targets[c],l={easing:C(o),iterations:r===!0?Infinity:r,direction:I,endDelay:u,duration:v,delay:a,fill:V},d=E(P,[c,p,m]);f=d.length?d:this.properties,l=k(l,[c,p,m]),d.length>0||(f=k(f,[c,p,m]));let L=l.delay+l.duration*l.iterations+l.endDelay;this.duration<L&&(this.duration=L);let g=m.animate(f,l);g.onfinish=()=>{S(m,c,p,g)},this.animations.set(m,g)}this.mainAnimation=this.mainElement.animate([{opacity:"0"},{opacity:"1"}],{duration:this.duration,easing:"linear"}),this.setSpeed(s),H?this.play():this.pause(),this.promise=this.newPromise(),this.mainAnimation.onfinish=()=>{window.cancelAnimationFrame(this.animationFrame),this.finish()}}newPromise(){return new Promise((t,e)=>{try{this.finish=()=>(this.emit("finish",this.options),t(this.options))}catch(n){e(n)}})}getTargets(){return this.targets}then(t,e){return t=t?.bind(this),e=e?.bind(this),this.promise.then(t,e),this}catch(t){return t=t?.bind(this),this.promise.catch(t),this}finally(t){return t=t?.bind(this),this.promise.finally(t),this}loop(){this.animationFrame=window.requestAnimationFrame(this.loop),this.emit("tick change",this.getCurrentTime())}on(t,e,n){return this.emitter.on(t,e,n??this),this}off(t,e,n){return this.emitter.off(t,e,n??this),this}emit(t,...e){return this.emitter.emit(t,...e),this}getAnimation(t){return this.animations.get(t)}play(){return this.mainAnimation.playState!=="finished"&&(this.mainAnimation.play(),this.animationFrame=requestAnimationFrame(this.loop),this.animations.forEach(t=>{t.playState!=="finished"&&t.play()}),this.emit("play")),this}pause(){return this.mainAnimation.playState!=="finished"&&(this.mainAnimation.pause(),window.cancelAnimationFrame(this.animationFrame),this.animations.forEach(t=>{t.playState!=="finished"&&t.pause()}),this.emit("pause")),this}getDuration(){return this.duration}getCurrentTime(){return this.mainAnimation.currentTime}setCurrentTime(t){return this.mainAnimation.currentTime=t,this.animations.forEach(e=>{e.currentTime=t}),this}getProgress(){return this.getCurrentTime()/this.duration}setProgress(t){return this.mainAnimation.currentTime=t/100*this.duration,this.animations.forEach(e=>{e.currentTime=t*this.duration}),this}getSpeed(){return this.mainAnimation.playbackRate}setSpeed(t=1){return this.mainAnimation.playbackRate=t,this.animations.forEach(e=>{e.playbackRate=t}),this}reset(){this.setCurrentTime(0),this.promise=this.newPromise(),this.options.autoplay?this.play():this.pause()}getPlayState(){return this.mainAnimation.playState}getOptions(){return this.options}toJSON(){return this.getOptions()}stop(){for(this.animations.forEach(t=>{t.cancel()},this),this.mainAnimation.cancel(),window.cancelAnimationFrame(this.animationFrame),this.animations.clear();this.targets.length;)this.targets.pop();this.mainElement=void 0,this.animationFrame=void 0,this.emit("stop")}get[Symbol.toStringTag](){return"Animate"}},j=(i={})=>new h(i),_=j;
//# sourceMappingURL=api.cjs.js.map
