var p=class{constructor(e){this.map=new Map(e)}getMap(){return this.map}get(e){return this.map.get(e)}keys(){return Array.from(this.map.keys())}values(){return Array.from(this.map.values())}set(e,t){return this.map.set(e,t),this}add(e){let t=this.size,n=t;return this.set(n,e),this}get size(){return this.map.size}get length(){return this.map.size}last(e=1){let t=this.keys()[this.size-e];return this.get(t)}delete(e){return this.map.delete(e)}remove(e){return this.map.delete(e),this}clear(){return this.map.clear(),this}has(e){return this.map.has(e)}entries(){return this.map.entries()}forEach(e=(...n)=>{},t){return this.map.forEach(e,t),this}[Symbol.iterator](){return this.entries()}},u=({callback:c=()=>{},scope:e=null,name:t="event"})=>({callback:c,scope:e,name:t}),o=class extends p{constructor(e="event"){super();this.name=e}},b=class extends p{constructor(){super()}getEvent(e){let t=this.get(e);return t instanceof o?t:(this.set(e,new o(e)),this.get(e))}newListener(e,t,n){let r=this.getEvent(e);return r.add(u({name:e,callback:t,scope:n})),r}on(e,t,n){if(typeof e=="undefined")return this;typeof e=="string"&&(e=e.trim().split(/\s/g));let r,i,s=typeof e=="object"&&!Array.isArray(e),a=s?t:n;return s||(i=t),Object.keys(e).forEach(l=>{s?(r=l,i=e[l]):r=e[l],this.newListener(r,i,a)},this),this}removeListener(e,t,n){let r=this.get(e);if(r instanceof o&&t){let i=u({name:e,callback:t,scope:n});r.forEach((s,a)=>{if(s.callback===i.callback&&s.scope===i.scope)return r.remove(a)})}return r}off(e,t,n){if(typeof e=="undefined")return this;typeof e=="string"&&(e=e.trim().split(/\s/g));let r,i,s=typeof e=="object"&&!Array.isArray(e),a=s?t:n;return s||(i=t),Object.keys(e).forEach(l=>{s?(r=l,i=e[l]):r=e[l],typeof i=="function"?this.removeListener(r,i,a):this.remove(r)},this),this}emit(e,...t){return typeof e=="undefined"?this:(typeof e=="string"&&(e=e.trim().split(/\s/g)),e.forEach(n=>{let r=this.get(n);r instanceof o&&r.forEach(i=>{let{callback:s,scope:a}=i;s.apply(a,t)})},this),this)}},h=b;export{o as Event,b as EventEmitter,h as default,u as newListener};
//# sourceMappingURL=api.modern.js.map