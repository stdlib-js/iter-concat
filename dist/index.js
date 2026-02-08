"use strict";var g=function(t,u){return function(){return u||t((u={exports:{}}).exports,u),u.exports}};var c=g(function(k,l){"use strict";var v=require("@stdlib/utils-define-nonenumerable-read-only-property"),h=require("@stdlib/assert-is-function"),q=require("@stdlib/assert-is-iterator-like"),w=require("@stdlib/assert-has-own-property"),s=require("@stdlib/symbol-iterator"),x=require("@stdlib/string-format");function f(){var t,u,n,i,a,r;if(n=arguments.length,n<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(t=[],r=0;r<n;r++){if(!q(arguments[r]))throw new TypeError(x("invalid argument. Must provide an iterator protocol-compliant object. Argument: `%u`. Value: `%s`.",r,arguments[r]));t.push(arguments[r])}if(i={},v(i,"next",m),v(i,"return",d),s){for(r=0;r<n;r++)if(!h(t[r][s])){a=!0;break}a||v(i,s,p)}return u=t[0],a=!1,r=0,i;function m(){var e;if(a)return{done:!0};for(;e=u.next(),e.done;){if(r+=1,r===n)return a=!0,w(e,"value")?{value:e.value,done:!0}:{done:!0};u=t[r]}return{value:e.value,done:!1}}function d(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}}function p(){var e,o;for(e=[],o=0;o<n;o++)e.push(t[o][s]());return f.apply(null,e)}}l.exports=f});var y=c();module.exports=y;
/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
