var i=class{constructor(e){this.map=new Map(e)}getMap(){return this.map}get(e){return this.map.get(e)}keys(){return Array.from(this.map.keys())}values(){return Array.from(this.map.values())}set(e,t){return this.map.set(e,t),this}add(e){let t=this.size,r=t;return this.set(r,e),this}get size(){return this.map.size}get length(){return this.map.size}last(e=1){let t=this.keys()[this.size-e];return this.get(t)}delete(e){return this.map.delete(e)}remove(e){return this.map.delete(e),this}clear(){return this.map.clear(),this}has(e){return this.map.has(e)}entries(){return this.map.entries()}forEach(e=(...r)=>{},t){return this.map.forEach(e,t),this}[Symbol.iterator](){return this.entries()}},s=(a,e,...t)=>{a.forEach(r=>{r[e](...t)})},n=async(a,e,...t)=>{for(let[,r]of a)await r[e](...t)},u=i;export{i as Manager,n as asyncMethodCall,u as default,s as methodCall};
//# sourceMappingURL=api.modern.js.map
