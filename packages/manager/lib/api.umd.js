!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n=n||self).managerjs=t()}(this,function(){function n(n){var t;if("undefined"!=typeof Symbol){if(Symbol.asyncIterator&&null!=(t=n[Symbol.asyncIterator]))return t.call(n);if(Symbol.iterator&&null!=(t=n[Symbol.iterator]))return t.call(n)}throw new TypeError("Object is not async iterable")}function t(n,e,i){if(!n.s){if(i instanceof r){if(!i.s)return void(i.o=t.bind(null,n,e));1&e&&(e=i.s),i=i.v}if(i&&i.then)return void i.then(t.bind(null,n,e),t.bind(null,n,2));n.s=e,n.v=i;var o=n.o;o&&o(n)}}var e=function(){function t(n){this.map=new Map(n)}var e,r=t.prototype;return r.getMap=function(){return this.map},r.get=function(n){return this.map.get(n)},r.keys=function(){return[].concat(this.map.keys())},r.values=function(){return[].concat(this.map.values())},r.set=function(n,t){return this.map.set(n,t),this},r.add=function(n){return this.set(this.size,n),this},r.last=function(n){void 0===n&&(n=1);var t=this.keys()[this.size-n];return this.get(t)},r.prev=function(){return this.last(2)},r.delete=function(n){return this.map.delete(n),this},r.clear=function(){return this.map.clear(),this},r.has=function(n){return this.map.has(n)},r.entries=function(){return this.map.entries()},r.forEach=function(n,t){return void 0===n&&(n=function(){}),this.map.forEach(n,t),this},r[Symbol.iterator]=function(){return this.entries()},r.methodCall=function(n){var t=arguments;return this.forEach(function(e){e[n].apply(e,[].slice.call(t,1))}),this},r.asyncMethodCall=function(t){try{var e,r,i,c,h,a=this,s=arguments,l=!0,v=!1,d=f(function(){return u(function(){r=n(a.map);var e=o(function(){return!!Promise.resolve(r.next()).then(function(n){return l=i.done,i=n,Promise.resolve(i.value).then(function(n){return c=n,!l})})},function(){return!!(l=!0)},function(){var n=c[1];return Promise.resolve(n[t].apply(n,[].slice.call(s,1))).then(function(){})});if(e&&e.then)return e.then(function(){})},function(n){v=!0,h=n})},function(n,t){function i(r){if(e)return r;if(n)throw t;return t}var o=f(function(){var n=function(){if(!l&&null!=r.return)return Promise.resolve(r.return()).then(function(){})}();if(n&&n.then)return n.then(function(){})},function(n,t){if(v)throw h;if(n)throw t;return t});return o&&o.then?o.then(i):i(o)});return Promise.resolve(d&&d.then?d.then(function(n){return e?n:a}):e?d:a)}catch(n){return Promise.reject(n)}},(e=[{key:"size",get:function(){return this.map.size}}])&&function(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}(t.prototype,e),t}(),r=function(){function n(){}return n.prototype.then=function(e,r){var i=new n,o=this.s;if(o){var u=1&o?e:r;if(u){try{t(i,1,u(this.v))}catch(n){t(i,2,n)}return i}return this}return this.o=function(n){try{var o=n.v;1&n.s?t(i,1,e?e(o):o):r?t(i,1,r(o)):t(i,2,o)}catch(n){t(i,2,n)}},i},n}();function i(n){return n instanceof r&&1&n.s}function o(n,e,o){for(var u;;){var f=n();if(i(f)&&(f=f.v),!f)return c;if(f.then){u=0;break}var c=o();if(c&&c.then){if(!i(c)){u=1;break}c=c.s}if(e){var h=e();if(h&&h.then&&!i(h)){u=2;break}}}var a=new r,s=t.bind(null,a,2);return(0===u?f.then(v):1===u?c.then(l):h.then(d)).then(void 0,s),a;function l(r){c=r;do{if(e&&(h=e())&&h.then&&!i(h))return void h.then(d).then(void 0,s);if(!(f=n())||i(f)&&!f.v)return void t(a,1,c);if(f.then)return void f.then(v).then(void 0,s);i(c=o())&&(c=c.v)}while(!c||!c.then);c.then(l).then(void 0,s)}function v(n){n?(c=o())&&c.then?c.then(l).then(void 0,s):l(c):t(a,1,c)}function d(){(f=n())?f.then?f.then(v).then(void 0,s):v(f):t(a,1,c)}}function u(n,t){try{var e=n()}catch(n){return t(n)}return e&&e.then?e.then(void 0,t):e}function f(n,t){try{var e=n()}catch(n){return t(!0,n)}return e&&e.then?e.then(t.bind(null,!1),t.bind(null,!0)):t(!1,e)}return e});
//# sourceMappingURL=api.umd.js.map
