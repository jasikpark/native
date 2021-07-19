var y=Object.defineProperty;var d=s=>y(s,"__esModule",{value:!0});var E=(s,e)=>{d(s);for(var t in e)y(s,t,{get:e[t],enumerable:!0})};E(exports,{Event:()=>c,EventEmitter:()=>h,default:()=>L,isObject:()=>u,newListener:()=>b});var o=class{constructor(e){this.map=new Map(e)}getMap(){return this.map}get(e){return this.map.get(e)}keys(){return Array.from(this.map.keys())}values(){return Array.from(this.map.values())}set(e,t){return this.map.set(e,t),this}add(e){let a=this.size;return this.set(a,e),this}get size(){return this.map.size}get length(){return this.map.size}last(e=1){let t=this.keys()[this.size-e];return this.get(t)}delete(e){return this.map.delete(e)}remove(e){return this.map.delete(e),this}clear(){return this.map.clear(),this}has(e){return this.map.has(e)}entries(){return this.map.entries()}forEach(e,t){return this.map.forEach(e,t),this}[Symbol.iterator](){return this.entries()}},m=(s,e,...t)=>{s.forEach(a=>{a[e](...t)})};var b=({callback:s=()=>{},scope:e=null,name:t="event"})=>({callback:s,scope:e,name:t}),c=class extends o{constructor(e="event"){super();this.name=e}},u=s=>typeof s=="object"&&!Array.isArray(s)&&typeof s!="function",h=class extends o{constructor(){super()}getEvent(e){let t=this.get(e);return t instanceof c?t:(this.set(e,new c(e)),this.get(e))}newListener(e,t,a){let r=this.getEvent(e);return r.add(b({name:e,callback:t,scope:a})),r}on(e,t,a){if(e==null||e==null)return this;typeof e=="string"&&(e=e.trim().split(/\s/g));let r,i,n=u(e),p=n?t:a;return n||(i=t),Object.keys(e).forEach(l=>{r=n?l:e[l],n&&(i=e[l]),this.newListener(r,i,p)},this),this}removeListener(e,t,a){let r=this.get(e);if(r instanceof c&&t){let i=b({name:e,callback:t,scope:a});r.forEach((n,p)=>{if(n.callback===i.callback&&n.scope===i.scope)return r.remove(p)})}return r}off(e,t,a){if(e==null||e==null)return this;typeof e=="string"&&(e=e.trim().split(/\s/g));let r,i,n=u(e),p=n?t:a;return n||(i=t),Object.keys(e).forEach(l=>{r=n?l:e[l],n&&(i=e[l]),typeof i=="function"?this.removeListener(r,i,p):this.remove(r)},this),this}once(e,t,a){if(e==null||e==null)return this;typeof e=="string"&&(e=e.trim().split(/\s/g));let r=u(e);return Object.keys(e).forEach(i=>{let n=r?i:e[i],p=r?e[i]:t,l=r?t:a,f=(...g)=>{p.apply(l,g),this.removeListener(n,f,l)};this.newListener(n,f,l)},this),this}emit(e,...t){return e==null||e==null?this:(typeof e=="string"&&(e=e.trim().split(/\s/g)),e.forEach(a=>{let r=this.get(a);r instanceof c&&r.forEach(i=>{let{callback:n,scope:p}=i;n.apply(p,t)})},this),this)}clear(){return m(this,"clear"),super.clear(),this}},L=h;0&&(module.exports={Event,EventEmitter,isObject,newListener});
