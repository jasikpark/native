function n(n){var t;if("undefined"!=typeof Symbol){if(Symbol.asyncIterator&&null!=(t=n[Symbol.asyncIterator]))return t.call(n);if(Symbol.iterator&&null!=(t=n[Symbol.iterator]))return t.call(n)}throw new TypeError("Object is not async iterable")}function t(n,e,i){if(!n.s){if(i instanceof r){if(!i.s)return void(i.o=t.bind(null,n,e));1&e&&(e=i.s),i=i.v}if(i&&i.then)return void i.then(t.bind(null,n,e),t.bind(null,n,2));n.s=e,n.v=i;var u=n.o;u&&u(n)}}var e=function(){function t(n){this.map=new Map(n)}var e,r=t.prototype;return r.getMap=function(){return this.map},r.get=function(n){return this.map.get(n)},r.keys=function(){return[].concat(this.map.keys())},r.values=function(){return[].concat(this.map.values())},r.set=function(n,t){return this.map.set(n,t),this},r.add=function(n){return this.set(this.size,n),this},r.last=function(n){void 0===n&&(n=1);var t=this.keys()[this.size-n];return this.get(t)},r.prev=function(){return this.last(2)},r.delete=function(n){return this.map.delete(n),this},r.clear=function(){return this.map.clear(),this},r.has=function(n){return this.map.has(n)},r.entries=function(){return this.map.entries()},r.forEach=function(n,t){return void 0===n&&(n=function(){}),this.map.forEach(n,t),this},r[Symbol.iterator]=function(){return this.entries()},r.methodCall=function(n){var t=arguments;return this.forEach(function(e){e[n].apply(e,[].slice.call(t,1))}),this},r.asyncMethodCall=function(t){try{var e,r,i,h,c,a=this,s=arguments,l=!0,v=!1,d=f(function(){return o(function(){r=n(a.map);var e=u(function(){return!!Promise.resolve(r.next()).then(function(n){return l=i.done,i=n,Promise.resolve(i.value).then(function(n){return h=n,!l})})},function(){return!!(l=!0)},function(){var n=h[1];return Promise.resolve(n[t].apply(n,[].slice.call(s,1))).then(function(){})});if(e&&e.then)return e.then(function(){})},function(n){v=!0,c=n})},function(n,t){function i(r){if(e)return r;if(n)throw t;return t}var u=f(function(){var n=function(){if(!l&&null!=r.return)return Promise.resolve(r.return()).then(function(){})}();if(n&&n.then)return n.then(function(){})},function(n,t){if(v)throw c;if(n)throw t;return t});return u&&u.then?u.then(i):i(u)});return Promise.resolve(d&&d.then?d.then(function(n){return e?n:a}):e?d:a)}catch(n){return Promise.reject(n)}},(e=[{key:"size",get:function(){return this.map.size}}])&&function(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}(t.prototype,e),t}(),r=function(){function n(){}return n.prototype.then=function(e,r){var i=new n,u=this.s;if(u){var o=1&u?e:r;if(o){try{t(i,1,o(this.v))}catch(n){t(i,2,n)}return i}return this}return this.o=function(n){try{var u=n.v;1&n.s?t(i,1,e?e(u):u):r?t(i,1,r(u)):t(i,2,u)}catch(n){t(i,2,n)}},i},n}();function i(n){return n instanceof r&&1&n.s}function u(n,e,u){for(var o;;){var f=n();if(i(f)&&(f=f.v),!f)return h;if(f.then){o=0;break}var h=u();if(h&&h.then){if(!i(h)){o=1;break}h=h.s}if(e){var c=e();if(c&&c.then&&!i(c)){o=2;break}}}var a=new r,s=t.bind(null,a,2);return(0===o?f.then(v):1===o?h.then(l):c.then(d)).then(void 0,s),a;function l(r){h=r;do{if(e&&(c=e())&&c.then&&!i(c))return void c.then(d).then(void 0,s);if(!(f=n())||i(f)&&!f.v)return void t(a,1,h);if(f.then)return void f.then(v).then(void 0,s);i(h=u())&&(h=h.v)}while(!h||!h.then);h.then(l).then(void 0,s)}function v(n){n?(h=u())&&h.then?h.then(l).then(void 0,s):l(h):t(a,1,h)}function d(){(f=n())?f.then?f.then(v).then(void 0,s):v(f):t(a,1,h)}}function o(n,t){try{var e=n()}catch(n){return t(n)}return e&&e.then?e.then(void 0,t):e}function f(n,t){try{var e=n()}catch(n){return t(!0,n)}return e&&e.then?e.then(t.bind(null,!1),t.bind(null,!0)):t(!1,e)}export default e;
//# sourceMappingURL=api.mjs.map