var p=class{constructor(e){this.map=new Map(e)}getMap(){return this.map}get(e){return this.map.get(e)}keys(){return Array.from(this.map.keys())}values(){return Array.from(this.map.values())}set(e,t){return this.map.set(e,t),this}add(e){let t=this.size,r=t;return this.set(r,e),this}get size(){return this.map.size}get length(){return this.map.size}last(e=1){let t=this.keys()[this.size-e];return this.get(t)}delete(e){return this.map.delete(e)}remove(e){return this.map.delete(e),this}clear(){return this.map.clear(),this}has(e){return this.map.has(e)}entries(){return this.map.entries()}forEach(e=(...r)=>{},t){return this.map.forEach(e,t),this}[Symbol.iterator](){return this.entries()}},f=(e,t,...r)=>{e.forEach(a=>{a[t](...r)})},h=({callback:e=()=>{},scope:t=null,name:r="event"})=>({callback:e,scope:t,name:r}),c=class extends p{constructor(t="event"){super();this.name=t}},u=class extends p{constructor(){super()}getEvent(t){let r=this.get(t);return r instanceof c?r:(this.set(t,new c(t)),this.get(t))}newListener(t,r,a){let i=this.getEvent(t);return i.add(h({name:t,callback:r,scope:a})),i}on(t,r,a){if(typeof t=="undefined")return this;typeof t=="string"&&(t=t.trim().split(/\s/g));let i,s,n=typeof t=="object"&&!Array.isArray(t),l=n?r:a;return n||(s=r),Object.keys(t).forEach(o=>{n?(i=o,s=t[o]):i=t[o],this.newListener(i,s,l)},this),this}removeListener(t,r,a){let i=this.get(t);if(i instanceof c&&r){let s=h({name:t,callback:r,scope:a});i.forEach((n,l)=>{if(n.callback===s.callback&&n.scope===s.scope)return i.remove(l)})}return i}off(t,r,a){if(typeof t=="undefined")return this;typeof t=="string"&&(t=t.trim().split(/\s/g));let i,s,n=typeof t=="object"&&!Array.isArray(t),l=n?r:a;return n||(s=r),Object.keys(t).forEach(o=>{n?(i=o,s=t[o]):i=t[o],typeof s=="function"?this.removeListener(i,s,l):this.remove(i)},this),this}emit(t,...r){return typeof t=="undefined"?this:(typeof t=="string"&&(t=t.trim().split(/\s/g)),t.forEach(a=>{let i=this.get(a);i instanceof c&&i.forEach(s=>{let{callback:n,scope:l}=s;n.apply(l,r)})},this),this)}clear(){return f(this,"clear"),super.clear(),this}},b=u;export{c as Event,u as EventEmitter,b as default,h as newListener};
//# sourceMappingURL=api.modern.js.map
