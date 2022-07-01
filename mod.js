// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=Math.floor;var r=function(r){return n(r)===r};var t=function(n){return null!=n&&"function"!=typeof n&&"number"==typeof n.length&&r(n.length)&&n.length>=0&&n.length<=4294967295};var e=function(n){if("function"!=typeof n)throw new TypeError("invalid argument. Must provide a function. Value: `"+n+"`.");return function(r){var e,u;if(!t(r))return!1;if(0===(e=r.length))return!1;for(u=0;u<e;u++)if(!1===n(r[u]))return!1;return!0}}((function(n){return null===n}));export{e as default};
//# sourceMappingURL=mod.js.map
