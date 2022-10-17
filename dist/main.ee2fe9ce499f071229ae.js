/*! For license information please see main.ee2fe9ce499f071229ae.js.LICENSE.txt */
(()=>{var e={77:function(e,t,r){var n,o;n=function(){var e,t,r,n,o,i={},a={},s={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},u={currentLocale:s.currentLocale,zeroFormat:s.zeroFormat,nullFormat:s.nullFormat,defaultFormat:s.defaultFormat,scalePercentBy100:s.scalePercentBy100};function l(e,t){this._input=e,this._value=t}return(e=function(r){var n,o,a,s;if(e.isNumeral(r))n=r.value();else if(0===r||void 0===r)n=0;else if(null===r||t.isNaN(r))n=null;else if("string"==typeof r)if(u.zeroFormat&&r===u.zeroFormat)n=0;else if(u.nullFormat&&r===u.nullFormat||!r.replace(/[^0-9]+/g,"").length)n=null;else{for(o in i)if((s="function"==typeof i[o].regexps.unformat?i[o].regexps.unformat():i[o].regexps.unformat)&&r.match(s)){a=i[o].unformat;break}n=(a=a||e._.stringToNumber)(r)}else n=Number(r)||null;return new l(r,n)}).version="2.0.6",e.isNumeral=function(e){return e instanceof l},e._=t={numberToFormat:function(t,r,n){var o,i,s,u,l,c,f,h,d=a[e.options.currentLocale],p=!1,m=!1,b="",y=1e12,g=1e9,v=1e6,w="",_=!1;if(t=t||0,i=Math.abs(t),e._.includes(r,"(")?(p=!0,r=r.replace(/[\(|\)]/g,"")):(e._.includes(r,"+")||e._.includes(r,"-"))&&(l=e._.includes(r,"+")?r.indexOf("+"):t<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),e._.includes(r,"a")&&(o=!!(o=r.match(/a(k|m|b|t)?/))&&o[1],e._.includes(r," a")&&(b=" "),r=r.replace(new RegExp(b+"a[kmbt]?"),""),i>=y&&!o||"t"===o?(b+=d.abbreviations.trillion,t/=y):i<y&&i>=g&&!o||"b"===o?(b+=d.abbreviations.billion,t/=g):i<g&&i>=v&&!o||"m"===o?(b+=d.abbreviations.million,t/=v):(i<v&&i>=1e3&&!o||"k"===o)&&(b+=d.abbreviations.thousand,t/=1e3)),e._.includes(r,"[.]")&&(m=!0,r=r.replace("[.]",".")),s=t.toString().split(".")[0],u=r.split(".")[1],c=r.indexOf(","),h=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,u?(e._.includes(u,"[")?(u=(u=u.replace("]","")).split("["),w=e._.toFixed(t,u[0].length+u[1].length,n,u[1].length)):w=e._.toFixed(t,u.length,n),s=w.split(".")[0],w=e._.includes(w,".")?d.delimiters.decimal+w.split(".")[1]:"",m&&0===Number(w.slice(1))&&(w="")):s=e._.toFixed(t,0,n),b&&!o&&Number(s)>=1e3&&b!==d.abbreviations.trillion)switch(s=String(Number(s)/1e3),b){case d.abbreviations.thousand:b=d.abbreviations.million;break;case d.abbreviations.million:b=d.abbreviations.billion;break;case d.abbreviations.billion:b=d.abbreviations.trillion}if(e._.includes(s,"-")&&(s=s.slice(1),_=!0),s.length<h)for(var x=h-s.length;x>0;x--)s="0"+s;return c>-1&&(s=s.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+d.delimiters.thousands)),0===r.indexOf(".")&&(s=""),f=s+w+(b||""),p?f=(p&&_?"(":"")+f+(p&&_?")":""):l>=0?f=0===l?(_?"-":"+")+f:f+(_?"-":"+"):_&&(f="-"+f),f},stringToNumber:function(e){var t,r,n,o=a[u.currentLocale],i=e,s={thousand:3,million:6,billion:9,trillion:12};if(u.zeroFormat&&e===u.zeroFormat)r=0;else if(u.nullFormat&&e===u.nullFormat||!e.replace(/[^0-9]+/g,"").length)r=null;else{for(t in r=1,"."!==o.delimiters.decimal&&(e=e.replace(/\./g,"").replace(o.delimiters.decimal,".")),s)if(n=new RegExp("[^a-zA-Z]"+o.abbreviations[t]+"(?:\\)|(\\"+o.currency.symbol+")?(?:\\))?)?$"),i.match(n)){r*=Math.pow(10,s[t]);break}r*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),r*=Number(e)}return r},isNaN:function(e){return"number"==typeof e&&isNaN(e)},includes:function(e,t){return-1!==e.indexOf(t)},insert:function(e,t,r){return e.slice(0,r)+t+e.slice(r)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var r,n=Object(e),o=n.length>>>0,i=0;if(3===arguments.length)r=arguments[2];else{for(;i<o&&!(i in n);)i++;if(i>=o)throw new TypeError("Reduce of empty array with no initial value");r=n[i++]}for(;i<o;i++)i in n&&(r=t(r,n[i],i,n));return r},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce((function(e,r){var n=t.multiplier(r);return e>n?e:n}),1)},toFixed:function(e,t,r,n){var o,i,a,s,u=e.toString().split("."),l=t-(n||0);return o=2===u.length?Math.min(Math.max(u[1].length,l),t):l,a=Math.pow(10,o),s=(r(e+"e+"+o)/a).toFixed(o),n>t-o&&(i=new RegExp("\\.?0{1,"+(n-(t-o))+"}$"),s=s.replace(i,"")),s}},e.options=u,e.formats=i,e.locales=a,e.locale=function(e){return e&&(u.currentLocale=e.toLowerCase()),u.currentLocale},e.localeData=function(e){if(!e)return a[u.currentLocale];if(e=e.toLowerCase(),!a[e])throw new Error("Unknown locale : "+e);return a[e]},e.reset=function(){for(var e in s)u[e]=s[e]},e.zeroFormat=function(e){u.zeroFormat="string"==typeof e?e:null},e.nullFormat=function(e){u.nullFormat="string"==typeof e?e:null},e.defaultFormat=function(e){u.defaultFormat="string"==typeof e?e:"0.0"},e.register=function(e,t,r){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=r,r},e.validate=function(t,r){var n,o,i,a,s,u,l,c;if("string"!=typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),(t=t.trim()).match(/^\d+$/))return!0;if(""===t)return!1;try{l=e.localeData(r)}catch(t){l=e.localeData(e.locale())}return i=l.currency.symbol,s=l.abbreviations,n=l.delimiters.decimal,o="."===l.delimiters.thousands?"\\.":l.delimiters.thousands,!(null!==(c=t.match(/^[^\d]+/))&&(t=t.substr(1),c[0]!==i)||null!==(c=t.match(/[^\d]+$/))&&(t=t.slice(0,-1),c[0]!==s.thousand&&c[0]!==s.million&&c[0]!==s.billion&&c[0]!==s.trillion)||(u=new RegExp(o+"{2}"),t.match(/[^\d.,]/g)||(a=t.split(n)).length>2||(a.length<2?!a[0].match(/^\d+.*\d$/)||a[0].match(u):1===a[0].length?!a[0].match(/^\d+$/)||a[0].match(u)||!a[1].match(/^\d+$/):!a[0].match(/^\d+.*\d$/)||a[0].match(u)||!a[1].match(/^\d+$/))))},e.fn=l.prototype={clone:function(){return e(this)},format:function(t,r){var n,o,a,s=this._value,l=t||u.defaultFormat;if(r=r||Math.round,0===s&&null!==u.zeroFormat)o=u.zeroFormat;else if(null===s&&null!==u.nullFormat)o=u.nullFormat;else{for(n in i)if(l.match(i[n].regexps.format)){a=i[n].format;break}o=(a=a||e._.numberToFormat)(s,l,r)}return o},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var r=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([this._value,e],(function(e,t,n,o){return e+Math.round(r*t)}),0)/r,this},subtract:function(e){var r=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([e],(function(e,t,n,o){return e-Math.round(r*t)}),Math.round(this._value*r))/r,this},multiply:function(e){return this._value=t.reduce([this._value,e],(function(e,r,n,o){var i=t.correctionFactor(e,r);return Math.round(e*i)*Math.round(r*i)/Math.round(i*i)}),1),this},divide:function(e){return this._value=t.reduce([this._value,e],(function(e,r,n,o){var i=t.correctionFactor(e,r);return Math.round(e*i)/Math.round(r*i)})),this},difference:function(t){return Math.abs(e(this._value).subtract(t).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,r,n){var o,i=e._.includes(r," BPS")?" ":"";return t*=1e4,r=r.replace(/\s?BPS/,""),o=e._.numberToFormat(t,r,n),e._.includes(o,")")?((o=o.split("")).splice(-1,0,i+"BPS"),o=o.join("")):o=o+i+"BPS",o},unformat:function(t){return+(1e-4*e._.stringToNumber(t)).toFixed(15)}}),n={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},o="("+(o=(r={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(n.suffixes.filter((function(e){return r.suffixes.indexOf(e)<0}))).join("|")).replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(o)},format:function(t,o,i){var a,s,u,l=e._.includes(o,"ib")?n:r,c=e._.includes(o," b")||e._.includes(o," ib")?" ":"";for(o=o.replace(/\s?i?b/,""),a=0;a<=l.suffixes.length;a++)if(s=Math.pow(l.base,a),u=Math.pow(l.base,a+1),null===t||0===t||t>=s&&t<u){c+=l.suffixes[a],s>0&&(t/=s);break}return e._.numberToFormat(t,o,i)+c},unformat:function(t){var o,i,a=e._.stringToNumber(t);if(a){for(o=r.suffixes.length-1;o>=0;o--){if(e._.includes(t,r.suffixes[o])){i=Math.pow(r.base,o);break}if(e._.includes(t,n.suffixes[o])){i=Math.pow(n.base,o);break}}a*=i||1}return a}}),e.register("format","currency",{regexps:{format:/(\$)/},format:function(t,r,n){var o,i,a=e.locales[e.options.currentLocale],s={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(r=r.replace(/\s?\$\s?/,""),o=e._.numberToFormat(t,r,n),t>=0?(s.before=s.before.replace(/[\-\(]/,""),s.after=s.after.replace(/[\-\)]/,"")):t<0&&!e._.includes(s.before,"-")&&!e._.includes(s.before,"(")&&(s.before="-"+s.before),i=0;i<s.before.length;i++)switch(s.before[i]){case"$":o=e._.insert(o,a.currency.symbol,i);break;case" ":o=e._.insert(o," ",i+a.currency.symbol.length-1)}for(i=s.after.length-1;i>=0;i--)switch(s.after[i]){case"$":o=i===s.after.length-1?o+a.currency.symbol:e._.insert(o,a.currency.symbol,-(s.after.length-(1+i)));break;case" ":o=i===s.after.length-1?o+" ":e._.insert(o," ",-(s.after.length-(1+i)+a.currency.symbol.length-1))}return o}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,r,n){var o=("number"!=typeof t||e._.isNaN(t)?"0e+0":t.toExponential()).split("e");return r=r.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(o[0]),r,n)+"e"+o[1]},unformat:function(t){var r=e._.includes(t,"e+")?t.split("e+"):t.split("e-"),n=Number(r[0]),o=Number(r[1]);return o=e._.includes(t,"e-")?o*=-1:o,e._.reduce([n,Math.pow(10,o)],(function(t,r,n,o){var i=e._.correctionFactor(t,r);return t*i*(r*i)/(i*i)}),1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,r,n){var o=e.locales[e.options.currentLocale],i=e._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),i+=o.ordinal(t),e._.numberToFormat(t,r,n)+i}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,r,n){var o,i=e._.includes(r," %")?" ":"";return e.options.scalePercentBy100&&(t*=100),r=r.replace(/\s?\%/,""),o=e._.numberToFormat(t,r,n),e._.includes(o,")")?((o=o.split("")).splice(-1,0,i+"%"),o=o.join("")):o=o+i+"%",o},unformat:function(t){var r=e._.stringToNumber(t);return e.options.scalePercentBy100?.01*r:r}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,r){var n=Math.floor(e/60/60),o=Math.floor((e-60*n*60)/60),i=Math.round(e-60*n*60-60*o);return n+":"+(o<10?"0"+o:o)+":"+(i<10?"0"+i:i)},unformat:function(e){var t=e.split(":"),r=0;return 3===t.length?(r+=60*Number(t[0])*60,r+=60*Number(t[1]),r+=Number(t[2])):2===t.length&&(r+=60*Number(t[0]),r+=Number(t[1])),Number(r)}}),e},void 0===(o=n.call(t,r,t,e))||(e.exports=o)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(77),t=r.n(e),n="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==n&&n,o="URLSearchParams"in n,i="Symbol"in n&&"iterator"in Symbol,a="FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(e){return!1}}(),s="FormData"in n,u="ArrayBuffer"in n;if(u)var l=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(e){return e&&l.indexOf(Object.prototype.toString.call(e))>-1};function f(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function h(e){return"string"!=typeof e&&(e=String(e)),e}function d(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return i&&(t[Symbol.iterator]=function(){return t}),t}function p(e){this.map={},e instanceof p?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function m(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function b(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function y(e){var t=new FileReader,r=b(t);return t.readAsArrayBuffer(e),r}function g(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:a&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:s&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:o&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():u&&a&&(t=e)&&DataView.prototype.isPrototypeOf(t)?(this._bodyArrayBuffer=g(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u&&(ArrayBuffer.prototype.isPrototypeOf(e)||c(e))?this._bodyArrayBuffer=g(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},a&&(this.blob=function(){var e=m(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?m(this)||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer)):this.blob().then(y)}),this.text=function(){var e,t,r,n=m(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,r=b(t=new FileReader),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(x)}),this.json=function(){return this.text().then(JSON.parse)},this}p.prototype.append=function(e,t){e=f(e),t=h(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},p.prototype.delete=function(e){delete this.map[f(e)]},p.prototype.get=function(e){return e=f(e),this.has(e)?this.map[e]:null},p.prototype.has=function(e){return this.map.hasOwnProperty(f(e))},p.prototype.set=function(e,t){this.map[f(e)]=h(t)},p.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},p.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),d(e)},p.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),d(e)},p.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),d(e)},i&&(p.prototype[Symbol.iterator]=p.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function _(e,t){if(!(this instanceof _))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,n,o=(t=t||{}).body;if(e instanceof _){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new p(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new p(t.headers)),this.method=(n=(r=t.method||this.method||"GET").toUpperCase(),w.indexOf(n)>-1?n:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(o),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==t.cache&&"no-cache"!==t.cache)){var i=/([?&])_=[^&]*/;i.test(this.url)?this.url=this.url.replace(i,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}function x(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}})),t}function B(e,t){if(!(this instanceof B))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===t.statusText?"":""+t.statusText,this.headers=new p(t.headers),this.url=t.url||"",this._initBody(e)}_.prototype.clone=function(){return new _(this,{body:this._bodyInit})},v.call(_.prototype),v.call(B.prototype),B.prototype.clone=function(){return new B(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new p(this.headers),url:this.url})},B.error=function(){var e=new B(null,{status:0,statusText:""});return e.type="error",e};var T=[301,302,303,307,308];B.redirect=function(e,t){if(-1===T.indexOf(t))throw new RangeError("Invalid status code");return new B(null,{status:t,headers:{location:e}})};var F=n.DOMException;try{new F}catch(e){(F=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),F.prototype.constructor=F}function E(e,t){return new Promise((function(r,o){var i=new _(e,t);if(i.signal&&i.signal.aborted)return o(new F("Aborted","AbortError"));var s=new XMLHttpRequest;function l(){s.abort()}s.onload=function(){var e,t,n={status:s.status,statusText:s.statusText,headers:(e=s.getAllResponseHeaders()||"",t=new p,e.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(e){return 0===e.indexOf("\n")?e.substr(1,e.length):e})).forEach((function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}})),t)};n.url="responseURL"in s?s.responseURL:n.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;setTimeout((function(){r(new B(o,n))}),0)},s.onerror=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},s.ontimeout=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},s.onabort=function(){setTimeout((function(){o(new F("Aborted","AbortError"))}),0)},s.open(i.method,function(e){try{return""===e&&n.location.href?n.location.href:e}catch(t){return e}}(i.url),!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&(a?s.responseType="blob":u&&i.headers.get("Content-Type")&&-1!==i.headers.get("Content-Type").indexOf("application/octet-stream")&&(s.responseType="arraybuffer")),!t||"object"!=typeof t.headers||t.headers instanceof p?i.headers.forEach((function(e,t){s.setRequestHeader(t,e)})):Object.getOwnPropertyNames(t.headers).forEach((function(e){s.setRequestHeader(e,h(t.headers[e]))})),i.signal&&(i.signal.addEventListener("abort",l),s.onreadystatechange=function(){4===s.readyState&&i.signal.removeEventListener("abort",l)}),s.send(void 0===i._bodyInit?null:i._bodyInit)}))}E.polyfill=!0,n.fetch||(n.fetch=E,n.Headers=p,n.Request=_,n.Response=B);var A=function(e,t){t||(t=window.location.href),e=e.replace(/[[\]]/g,"\\$&");var r=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}("useMockApi")?"http://localhost:3001/":"https://mysterious-dawn-16770.herokuapp.com/";function P(e){return e.json()}function N(e){console.log(e)}var O=t()(1e3).format("$0,0.00");console.log("I would pay ".concat(O," for this awesome course!")),fetch(A+"users").then(P,N).then((function(e){var t="";e.forEach((function(e){t+='<tr>\n      <td><a href="#" data-id="'.concat(e.id,'" class="deleteUser">Delete</a></td>\n      <td>').concat(e.id,"</td>\n      <td>").concat(e.firstName,"</td>\n      <td>").concat(e.lastName,"</td>\n      <td>").concat(e.email,"</td>\n      </tr>")})),r.g.document.getElementById("users").innerHTML=t;var n=r.g.document.getElementsByClassName("deleteUser");Array.from(n,(function(e){e.onclick=function(e){var t,r,n,o=e.target;e.preventDefault(),t=o.attributes["data-id"].value,r="users/".concat(t),n=new Request(A+r,{method:"DELETE"}),fetch(n).then(P,N);var i=o.parentNode.parentNode;i.parentNode.removeChild(i)}}))}))})()})();
//# sourceMappingURL=main.ee2fe9ce499f071229ae.js.map