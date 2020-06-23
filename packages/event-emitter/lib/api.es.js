function t(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}class e{constructor(t){this.map=new Map(t)}getMap(){return this.map}get(t){return this.map.get(t)}keys(){return[...this.map.keys()]}values(){return[...this.map.values()]}set(t,e){return this.map.set(t,e),this}add(t){return this.set(this.size,t),this}get size(){return this.map.size}last(t=1){let e=this.keys()[this.size-t];return this.get(e)}prev(){return this.last(2)}delete(t){return this.map.delete(t),this}clear(){return this.map.clear(),this}has(t){return this.map.has(t)}entries(){return this.map.entries()}forEach(t=((...t)=>{}),e){return this.map.forEach(t,e),this}[Symbol.iterator](){return this.entries()}methodCall(t,...e){return this.forEach(r=>{r[t](...e)}),this}async asyncMethodCall(t,...e){for await(let[,r]of this.map)await r[t](...e);return this}}var r=function(){function t(t){var e=t.callback,r=t.scope,n=t.name;this.listener={callback:void 0===e?function(){}:e,scope:void 0===r?null:r,name:void 0===n?"event":n}}var e=t.prototype;return e.getCallback=function(){return this.listener.callback},e.getScope=function(){return this.listener.scope},e.getEventName=function(){return this.listener.name},e.toJSON=function(){return this.listener},t}(),n=function(e){function r(t){var r;return void 0===t&&(t="event"),(r=e.call(this)||this).name=t,r}return t(r,e),r}(e),i=function(e){function i(){return e.call(this)||this}t(i,e);var s=i.prototype;return s.getEvent=function(t){var e=this.get(t);return e instanceof n?e:(this.set(t,new n(t)),this.get(t))},s.newListener=function(t,e,n){var i=this.getEvent(t);return i.add(new r({name:t,callback:e,scope:n})),i},s.on=function(t,e,r){var n,i,s,a=this;return void 0===t||("string"==typeof t&&(t=t.split(/\s/g)),Object.keys(t).forEach(function(o){"object"!=typeof t||Array.isArray(t)?(n=t[o],i=e,s=r):(n=o,i=t[o],s=e),a.newListener(n,i,s)},this)),this},s.removeListener=function(t,e,n){var i=this.getEvent(t);if(e){for(var s,a=0,o=i.size,c=new r({name:t,callback:e,scope:n});a<o&&(s=i.get(a),console.log(s),s.getCallback()!==c.getCallback()||s.getScope()!==c.getScope());a++);i.delete(a)}return i},s.off=function(t,e,r){var n,i,s,a=this;return void 0===t||("string"==typeof t&&(t=t.split(/\s/g)),Object.keys(t).forEach(function(o){"object"!=typeof t||Array.isArray(t)?(n=t[o],i=e,s=r):(n=o,i=t[o],s=e),i?a.removeListener(n,i,s):a.delete(n)},this)),this},s.once=function(t,e,r){var n=this;return void 0===t||("string"==typeof t&&(t=t.split(/\s/g)),this.on(t,function i(){n.off(t,i,r),e.apply(r,[].slice.call(arguments))},r)),this},s.emit=function(t){var e=this,r=[].slice.call(arguments,1);return void 0===t||("string"==typeof t&&(t=t.split(/\s/g)),t.forEach(function(t){var n=e.getEvent(t),i=new CustomEvent(t,{detail:r});window.dispatchEvent(i),n.forEach(function(t){var e=t.toJSON();e.callback.apply(e.scope,r)})},this)),this},i}(e);export{n as Event,i as EventEmitter,r as Listener};
//# sourceMappingURL=api.es.js.map
