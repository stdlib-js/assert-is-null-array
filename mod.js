// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=Math.floor;var r=4294967295;function i(i){return null!=i&&"function"!=typeof i&&"number"==typeof i.length&&(a=i.length,e(a)===a)&&i.length>=0&&i.length<=r;var a}function a(e){return"number"==typeof e}function n(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function t(e,r,i){var a=!1,t=r-e.length;return t<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=i?e+n(t):n(t)+e,a&&(e="-"+e)),e}var o=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function c(e){var r,i,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,n=parseInt(i,10),!isFinite(n)){if(!a(i))throw new Error("invalid integer. Value: "+i);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(i=(-n).toString(r),e.precision&&(i=t(i,e.precision,e.padRight)),i="-"+i):(i=n.toString(r),n||e.precision?e.precision&&(i=t(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===s.call(e.specifier)?s.call(i):o.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var p=Math.abs,l=String.prototype.toLowerCase,g=String.prototype.toUpperCase,f=String.prototype.replace,u=/e\+(\d)$/,h=/e-(\d)$/,d=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,m=/(\..*[^0])0*e/;function y(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!a(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,m,"$1e"),i=f.call(i,b,"e"),i=f.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,u,"e+0$1"),i=f.call(i,h,"e-0$1"),e.alternate&&(i=f.call(i,d,"$1."),i=f.call(i,w,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===g.call(e.specifier)?g.call(i):l.call(i)}function x(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}var k=String.fromCharCode,E=Array.isArray;function S(e){return e!=e}function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $(e){var r,i,a,n,o,s,p,l,g,f,u,h,d;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",p=1,l=0;l<e.length;l++)if(a=e[l],"string"==typeof a)s+=a;else{if(r=void 0!==a.precision,!(a=V(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+a+"`.");for(a.mapping&&(p=a.mapping),i=a.flags,g=0;g<i.length;g++)switch(n=i.charAt(g)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=i.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===a.width){if(a.width=parseInt(arguments[p],10),p+=1,S(a.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(r&&"*"===a.precision){if(a.precision=parseInt(arguments[p],10),p+=1,S(a.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,r=!1)}switch(a.arg=arguments[p],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(a.padZeros=!1),a.arg=c(a);break;case"s":a.maxWidth=r?a.precision:-1,a.arg=String(a.arg);break;case"c":if(!S(a.arg)){if((o=parseInt(a.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=S(o)?String(a.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(a.precision=6),a.arg=y(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=t(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=(f=a.arg,u=a.width,h=a.padRight,d=void 0,(d=u-f.length)<0?f:f=h?f+x(d):x(d)+f)),s+=a.arg||"",p+=1}return s}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function T(e){var r,i,a,n;for(i=[],n=0,a=F.exec(e);a;)(r=e.slice(n,F.lastIndex-a[0].length)).length&&i.push(r),i.push(I(a)),n=F.lastIndex,a=F.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function C(e){var r,i;if("string"!=typeof e)throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[T(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return $.apply(null,r)}var R=function(e){if("function"!=typeof e)throw new TypeError(C("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var a,n;if(!i(r))return!1;if(0===(a=r.length))return!1;for(n=0;n<a;n++)if(!1===e(r[n]))return!1;return!0}}((function(e){return null===e}));export{R as default};
//# sourceMappingURL=mod.js.map
