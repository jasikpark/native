var h=Object.defineProperty,g=s=>h(s,"__esModule",{value:!0}),m=(s,e)=>{g(s);for(var t in e)h(s,t,{get:e[t],enumerable:!0})};m(exports,{Event:()=>o,EventEmitter:()=>b,default:()=>y,newListener:()=>u});var p=class{constructor(e){this.map=new Map(e)}getMap(){return this.map}get(e){return this.map.get(e)}keys(){return Array.from(this.map.keys())}values(){return Array.from(this.map.values())}set(e,t){return this.map.set(e,t),this}add(e){let t=this.size,i=t;return this.set(i,e),this}get size(){return this.map.size}get length(){return this.map.size}last(e=1){let t=this.keys()[this.size-e];return this.get(t)}delete(e){return this.map.delete(e)}remove(e){return this.map.delete(e),this}clear(){return this.map.clear(),this}has(e){return this.map.has(e)}entries(){return this.map.entries()}forEach(e=(...i)=>{},t){return this.map.forEach(e,t),this}[Symbol.iterator](){return this.entries()}},f=(s,e,...t)=>{s.forEach(i=>{i[e](...t)})},u=({callback:s=()=>{},scope:e=null,name:t="event"})=>({callback:s,scope:e,name:t}),o=class extends p{constructor(e="event"){super();this.name=e}},b=class extends p{constructor(){super()}getEvent(e){let t=this.get(e);return t instanceof o?t:(this.set(e,new o(e)),this.get(e))}newListener(e,t,i){let r=this.getEvent(e);return r.add(u({name:e,callback:t,scope:i})),r}on(e,t,i){if(typeof e=="undefined")return this;typeof e=="string"&&(e=e.trim().split(/\s/g));let r,n,a=typeof e=="object"&&!Array.isArray(e),l=a?t:i;return a||(n=t),Object.keys(e).forEach(c=>{a?(r=c,n=e[c]):r=e[c],this.newListener(r,n,l)},this),this}removeListener(e,t,i){let r=this.get(e);if(r instanceof o&&t){let n=u({name:e,callback:t,scope:i});r.forEach((a,l)=>{if(a.callback===n.callback&&a.scope===n.scope)return r.remove(l)})}return r}off(e,t,i){if(typeof e=="undefined")return this;typeof e=="string"&&(e=e.trim().split(/\s/g));let r,n,a=typeof e=="object"&&!Array.isArray(e),l=a?t:i;return a||(n=t),Object.keys(e).forEach(c=>{a?(r=c,n=e[c]):r=e[c],typeof n=="function"?this.removeListener(r,n,l):this.remove(r)},this),this}emit(e,...t){return typeof e=="undefined"?this:(typeof e=="string"&&(e=e.trim().split(/\s/g)),e.forEach(i=>{let r=this.get(i);r instanceof o&&r.forEach(n=>{let{callback:a,scope:l}=n;a.apply(l,t)})},this),this)}clear(){return f(this,"clear"),super.clear(),this}},y=b;
//# sourceMappingURL=api.node.js.map
