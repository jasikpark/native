function t(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var n,e=(function(t,n){t.exports=function(){function t(t){var n;if("undefined"!=typeof Symbol){if(Symbol.asyncIterator&&null!=(n=t[Symbol.asyncIterator]))return n.call(t);if(Symbol.iterator&&null!=(n=t[Symbol.iterator]))return n.call(t)}throw new TypeError("Object is not async iterable")}function n(t,e,i){if(!t.s){if(i instanceof r){if(!i.s)return void(i.o=n.bind(null,t,e));1&e&&(e=i.s),i=i.v}if(i&&i.then)return void i.then(n.bind(null,t,e),n.bind(null,t,2));t.s=e,t.v=i;var o=t.o;o&&o(t)}}var e=function(){function n(t){this.map=new Map(t)}var e,r=n.prototype;return r.getMap=function(){return this.map},r.get=function(t){return this.map.get(t)},r.keys=function(){return[].concat(this.map.keys())},r.values=function(){return[].concat(this.map.values())},r.set=function(t,n){return this.map.set(t,n),this},r.add=function(t){return this.set(this.size,t),this},r.last=function(t){void 0===t&&(t=1);var n=this.keys()[this.size-t];return this.get(n)},r.prev=function(){return this.last(2)},r.delete=function(t){return this.map.delete(t),this},r.clear=function(){return this.map.clear(),this},r.has=function(t){return this.map.has(t)},r.entries=function(){return this.map.entries()},r.forEach=function(t,n){return void 0===t&&(t=function(){}),this.map.forEach(t,n),this},r[Symbol.iterator]=function(){return this.entries()},r.methodCall=function(t){var n=arguments;return this.forEach(function(e){e[t].apply(e,[].slice.call(n,1))}),this},r.asyncMethodCall=function(n){try{var e,r,i,s,a,f=this,h=arguments,l=!0,v=!1,p=c(function(){return u(function(){r=t(f.map);var e=o(function(){return!!Promise.resolve(r.next()).then(function(t){return l=i.done,i=t,Promise.resolve(i.value).then(function(t){return s=t,!l})})},function(){return!!(l=!0)},function(){var t=s[1];return Promise.resolve(t[n].apply(t,[].slice.call(h,1))).then(function(){})});if(e&&e.then)return e.then(function(){})},function(t){v=!0,a=t})},function(t,n){function i(r){if(e)return r;if(t)throw n;return n}var o=c(function(){var t=function(){if(!l&&null!=r.return)return Promise.resolve(r.return()).then(function(){})}();if(t&&t.then)return t.then(function(){})},function(t,n){if(v)throw a;if(t)throw n;return n});return o&&o.then?o.then(i):i(o)});return Promise.resolve(p&&p.then?p.then(function(t){return e?t:f}):e?p:f)}catch(t){return Promise.reject(t)}},(e=[{key:"size",get:function(){return this.map.size}}])&&function(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(n.prototype,e),n}(),r=function(){function t(){}return t.prototype.then=function(e,r){var i=new t,o=this.s;if(o){var u=1&o?e:r;if(u){try{n(i,1,u(this.v))}catch(t){n(i,2,t)}return i}return this}return this.o=function(t){try{var o=t.v;1&t.s?n(i,1,e?e(o):o):r?n(i,1,r(o)):n(i,2,o)}catch(t){n(i,2,t)}},i},t}();function i(t){return t instanceof r&&1&t.s}function o(t,e,o){for(var u;;){var c=t();if(i(c)&&(c=c.v),!c)return s;if(c.then){u=0;break}var s=o();if(s&&s.then){if(!i(s)){u=1;break}s=s.s}if(e){var a=e();if(a&&a.then&&!i(a)){u=2;break}}}var f=new r,h=n.bind(null,f,2);return(0===u?c.then(v):1===u?s.then(l):a.then(p)).then(void 0,h),f;function l(r){s=r;do{if(e&&(a=e())&&a.then&&!i(a))return void a.then(p).then(void 0,h);if(!(c=t())||i(c)&&!c.v)return void n(f,1,s);if(c.then)return void c.then(v).then(void 0,h);i(s=o())&&(s=s.v)}while(!s||!s.then);s.then(l).then(void 0,h)}function v(t){t?(s=o())&&s.then?s.then(l).then(void 0,h):l(s):n(f,1,s)}function p(){(c=t())?c.then?c.then(v).then(void 0,h):v(c):n(f,1,s)}}function u(t,n){try{var e=t()}catch(t){return n(t)}return e&&e.then?e.then(void 0,n):e}function c(t,n){try{var e=t()}catch(t){return n(!0,t)}return e&&e.then?e.then(n.bind(null,!1),n.bind(null,!0)):n(!1,e)}return e}()}(n={path:void 0,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}}),n.exports),r=function(){function t(t){var n=t.callback,e=t.scope,r=t.name;this.listener={callback:void 0===n?function(){}:n,scope:void 0===e?null:e,name:void 0===r?"event":r}}var n=t.prototype;return n.getCallback=function(){return this.listener.callback},n.getScope=function(){return this.listener.scope},n.getEventName=function(){return this.listener.name},n.toJSON=function(){return this.listener},t}(),i=function(n){function e(t){var e;return void 0===t&&(t="event"),(e=n.call(this)||this).name=t,e}return t(e,n),e}(e),o=function(n){function e(){return n.call(this)||this}t(e,n);var o=e.prototype;return o.getEvent=function(t){var n=this.get(t);return n instanceof i?n:(this.set(t,new i(t)),this.get(t))},o.newListener=function(t,n,e){var i=this.getEvent(t);return i.add(new r({name:t,callback:n,scope:e})),i},o.on=function(t,n,e){var r,i,o,u=this;return void 0===t||("string"==typeof t&&(t=t.split(/\s/g)),Object.keys(t).forEach(function(c){"object"!=typeof t||Array.isArray(t)?(r=t[c],i=n,o=e):(r=c,i=t[c],o=n),u.newListener(r,i,o)},this)),this},o.removeListener=function(t,n,e){var i=this.getEvent(t);if(n){for(var o,u=0,c=i.size,s=new r({name:t,callback:n,scope:e});u<c&&(o=i.get(u),console.log(o),o.getCallback()!==s.getCallback()||o.getScope()!==s.getScope());u++);i.delete(u)}return i},o.off=function(t,n,e){var r,i,o,u=this;return void 0===t||("string"==typeof t&&(t=t.split(/\s/g)),Object.keys(t).forEach(function(c){"object"!=typeof t||Array.isArray(t)?(r=t[c],i=n,o=e):(r=c,i=t[c],o=n),i?u.removeListener(r,i,o):u.delete(r)},this)),this},o.once=function(t,n,e){var r=this;return void 0===t||("string"==typeof t&&(t=t.split(/\s/g)),this.on(t,function i(){r.off(t,i,e),n.apply(e,[].slice.call(arguments))},e)),this},o.emit=function(t){var n=this,e=[].slice.call(arguments,1);return void 0===t||("string"==typeof t&&(t=t.split(/\s/g)),t.forEach(function(t){var r=n.getEvent(t),i=new CustomEvent(t,{detail:e});window.dispatchEvent(i),r.forEach(function(t){var n=t.toJSON();n.callback.apply(n.scope,e)})},this)),this},e}(e);export{i as Event,o as EventEmitter,r as Listener};
//# sourceMappingURL=api.es.js.map
