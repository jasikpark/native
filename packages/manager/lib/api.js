var Manager=(()=>{var s=Object.defineProperty,p=r=>s(r,"__esModule",{value:!0}),h=(r,e)=>{p(r);for(var t in e)s(r,t,{get:e[t],enumerable:!0})},o={};h(o,{Manager:()=>i,asyncMethodCall:()=>u,default:()=>l,methodCall:()=>n});var i=class{constructor(e){this.map=new Map(e)}getMap(){return this.map}get(e){return this.map.get(e)}keys(){return Array.from(this.map.keys())}values(){return Array.from(this.map.values())}set(e,t){return this.map.set(e,t),this}add(e){let t=this.size,a=t;return this.set(a,e),this}get size(){return this.map.size}get length(){return this.map.size}last(e=1){let t=this.keys()[this.size-e];return this.get(t)}delete(e){return this.map.delete(e)}remove(e){return this.map.delete(e),this}clear(){return this.map.clear(),this}has(e){return this.map.has(e)}entries(){return this.map.entries()}forEach(e=(...a)=>{},t){return this.map.forEach(e,t),this}[Symbol.iterator](){return this.entries()}},n=(r,e,...t)=>{r.forEach(a=>{a[e](...t)})},u=async(r,e,...t)=>{for(let[,a]of r)await a[e](...t)},l=i;return o;})();
//# sourceMappingURL=api.js.map
