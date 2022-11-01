// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=Math.floor;function r(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&(t=r.length,n(t)===t)&&r.length>=0&&r.length<=4294967295;var t}var t=function(n){if("function"!=typeof n)throw new TypeError("invalid argument. Must provide a function. Value: `"+n+"`.");return function(t){var e,u;if(!r(t))return!1;if(0===(e=t.length))return!1;for(u=0;u<e;u++)if(!1===n(t[u]))return!1;return!0}}((function(n){return null===n}));export{t as default};
//# sourceMappingURL=mod.js.map
