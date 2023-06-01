// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,l=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var a,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(f.call(r,t)||l.call(r,t)?(a=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=a):r[t]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,e.get),p&&i&&i.call(r,t,e.set),r};var a=t;function c(r,t,e){a(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var y=/./;function p(r){return"boolean"==typeof r}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(r,t){return null!=r&&d.call(r,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var _=b()?function(r){var t,e,n;if(null==r)return v.call(r);e=r[w],t=m(r,w);try{r[w]=void 0}catch(t){return v.call(r)}return n=v.call(r),t?r[w]=e:delete r[w],n}:function(r){return v.call(r)},g=Boolean.prototype.toString;var j=b();function h(r){return"object"==typeof r&&(r instanceof Boolean||(j?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===_(r)))}function S(r){return p(r)||h(r)}function E(){return new Function("return this;")()}c(S,"isPrimitive",p),c(S,"isObject",h);var A="object"==typeof self?self:null,O="object"==typeof window?window:null,x="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},B="object"==typeof x?x:null;var P=function(r){if(arguments.length){if(!p(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return E()}if(A)return A;if(O)return O;if(B)return B;throw new Error("unexpected error. Unable to resolve global object.")}(),T=P.document&&P.document.childNodes,C=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;c(k,"REGEXP",V);var G=Array.isArray?Array.isArray:function(r){return"[object Array]"===_(r)};function L(r){return null!==r&&"object"==typeof r}function M(r){var t,e,n,o;if(("Object"===(e=_(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=V.exec(n.toString()))return t[1]}return L(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}c(L,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!G(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(L));var F="function"==typeof y||"object"==typeof C||"function"==typeof T?function(r){return M(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?M(r).toLowerCase():t};function I(r){return"function"===F(r)}function R(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&I(r.next)}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function D(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function N(){var r,t,e,n,o,u;if((e=arguments.length)<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(r=[],u=0;u<e;u++){if(!R(arguments[u]))throw new TypeError(D("0CD4A",u,arguments[u]));r.push(arguments[u])}if(c(n={},"next",i),c(n,"return",f),U){for(u=0;u<e;u++)if(!I(r[u][U])){o=!0;break}o||c(n,U,l)}return t=r[0],o=!1,u=0,n;function i(){var n;if(o)return{done:!0};for(;(n=t.next()).done;){if((u+=1)===e)return o=!0,m(n,"value")?{value:n.value,done:!0}:{done:!0};t=r[u]}return{value:n.value,done:!1}}function f(r){return o=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){var t,n;for(t=[],n=0;n<e;n++)t.push(r[n][U]());return N.apply(null,t)}}export{N as default};
//# sourceMappingURL=mod.js.map
