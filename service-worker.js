!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";n.r(t);n(0);const s=[],r={get:()=>s,add(e){s.push(...e)}};n(1);const c={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},a=e=>[c.prefix,e,c.suffix].filter(e=>e&&e.length>0).join("-"),o=e=>e||a(c.precache),i=(e,...t)=>{let n=e;return t.length>0&&(n+=" :: "+JSON.stringify(t)),n};class h extends Error{constructor(e,t){super(i(e,t)),this.name=e,this.details=t}}const l=new Set;const u=(e,t)=>e.filter(e=>t in e),f=async({request:e,mode:t,plugins:n=[]})=>{const s=u(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},d=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const c=await self.caches.open(e),a=await f({plugins:r,request:t,mode:"read"});let o=await c.match(a,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;o=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:o,request:a})}return o},p=async({cacheName:e,request:t,response:n,event:s,plugins:r=[],matchOptions:c})=>{const a=await f({plugins:r,request:t,mode:"write"});if(!n)throw new h("cache-put-with-no-response",{url:(o=a.url,new URL(String(o),location.href).href.replace(new RegExp("^"+location.origin),""))});var o;const i=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,c=!1;for(const t of s)if("cacheWillUpdate"in t){c=!0;const s=t.cacheWillUpdate;if(r=await s.call(t,{request:e,response:r,event:n}),!r)break}return c||(r=r&&200===r.status?r:void 0),r||null})({event:s,plugins:r,response:n,request:a});if(!i)return void 0;const p=await self.caches.open(e),y=u(r,"cacheDidUpdate"),w=y.length>0?await d({cacheName:e,matchOptions:c,request:a}):null;try{await p.put(a,i)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of l)await e()}(),e}for(const t of y)await t.cacheDidUpdate.call(t,{cacheName:e,event:s,oldResponse:w,newResponse:i,request:a})},y=async({request:e,fetchOptions:t,event:n,plugins:s=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=u(s,"fetchDidFail"),c=r.length>0?e.clone():null;try{for(const t of s)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new h("plugin-error-request-will-fetch",{thrownError:e})}const a=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of s)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:n,request:a,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:c.clone(),request:a.clone()});throw e}};let w;async function g(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,c=function(){if(void 0===w){const e=new Response("");if("body"in e)try{new Response(e.body),w=!0}catch(e){w=!1}w=!1}return w}()?n.body:await n.blob();return new Response(c,r)}function m(e){if(!e)throw new h("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new h("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:r.href}}class R{constructor(e){this._cacheName=o(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=m(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new h("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new h("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],s=[],r=await self.caches.open(this._cacheName),c=await r.keys(),a=new Set(c.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)a.has(t)?s.push(e):n.push({cacheKey:t,url:e});const o=n.map(({cacheKey:n,url:s})=>{const r=this._cacheKeysToIntegrities.get(n),c=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:n,cacheMode:c,event:e,integrity:r,plugins:t,url:s})});await Promise.all(o);return{updatedURLs:n.map(e=>e.url),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:s,plugins:r,integrity:c}){const a=new Request(t,{integrity:c,cache:n,credentials:"same-origin"});let o,i=await y({event:s,plugins:r,request:a});for(const e of r||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:s,request:a,response:i}):i.status<400))throw new h("bad-precaching-response",{url:t,status:i.status});i.redirected&&(i=await g(i)),await p({event:s,plugins:r,response:i,request:e===t?a:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new h("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new h("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}let v;const _=()=>(v||(v=new R),v);const U=(e,t)=>{const n=_().getURLsToCacheKeys();for(const s of function*(e,{ignoreURLParametersMatching:t,directoryIndex:n,cleanURLs:s,urlManipulation:r}={}){const c=new URL(e,location.href);c.hash="",yield c.href;const a=function(e,t=[]){for(const n of[...e.searchParams.keys()])t.some(e=>e.test(n))&&e.searchParams.delete(n);return e}(c,t);if(yield a.href,n&&a.pathname.endsWith("/")){const e=new URL(a.href);e.pathname+=n,yield e.href}if(s){const e=new URL(a.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:c});for(const t of e)yield t.href}}(e,t)){const e=n.get(s);if(e)return e}};let L=!1;function q(e){L||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:n=!0,urlManipulation:s}={})=>{const r=o();self.addEventListener("fetch",c=>{const a=U(c.request.url,{cleanURLs:n,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:s});if(!a)return;let o=self.caches.open(r).then(e=>e.match(a)).then(e=>e||fetch(a));c.respondWith(o)})})(e),L=!0)}const T=e=>{const t=_(),n=r.get();e.waitUntil(t.install({event:e,plugins:n}).catch(e=>{throw e}))},K=e=>{const t=_();e.waitUntil(t.activate())};var b;(function(e){_().addToCacheList(e),e.length>0&&(self.addEventListener("install",T),self.addEventListener("activate",K))})([{'revision':'e5911eb2d76d7aef09be985426d415b0','url':'./index.html'},{'revision':'3226a61e67329e4ab6032ea6783327e8','url':'css/app.css'},{'revision':'f30e029218958bd6aad3cd424f865f94','url':'fonts/Framework7Icons-Regular.eot'},{'revision':'1b6b2c3ed476f4d4b7555af75e387d73','url':'fonts/Framework7Icons-Regular.ttf'},{'revision':'8f897db6f41a6ae1661072172143a21b','url':'fonts/Framework7Icons-Regular.woff'},{'revision':'9393ad14858229d680936a6206688704','url':'fonts/Framework7Icons-Regular.woff2'},{'revision':'e79bfd88537def476913f3ed52f4f4b3','url':'fonts/MaterialIcons-Regular.eot'},{'revision':'a37b0c01c0baf1888ca812cc0508f6e2','url':'fonts/MaterialIcons-Regular.ttf'},{'revision':'012cf6a10129e2275d79d6adac7f3b02','url':'fonts/MaterialIcons-Regular.woff'},{'revision':'570eb83859dc23dd0eec423a49e147fe','url':'fonts/MaterialIcons-Regular.woff2'},{'revision':'5ebb24ee1112dd9562629375c387879a','url':'fonts/roboto-black-webfont.ttf'},{'revision':'e07df86cef2e721115583d61d1fb68a6','url':'fonts/roboto-bold-webfont.ttf'},{'revision':'58aef543c97bbaf6a9896e8484456d98','url':'fonts/roboto-medium-webfont.ttf'},{'revision':'11eabca2251325cfc5589c9c6fb57b46','url':'fonts/roboto-webfont.ttf'},{'revision':'a9d476ce3f5777b592671951c37827d0','url':'fonts/roboto-webfont.woff'},{'revision':'071fcca9ce48f336894f072bae4c2440','url':'fonts/rubik-bold-webfont.ttf'},{'revision':'11f22f212ab3e9b8e241cbd69d3c43e7','url':'fonts/rubik-medium-webfont.ttf'},{'revision':'75852e6bdc48c05b3c39f4b3b94d2a9c','url':'fonts/rubik-semi-webfont.ttf'},{'revision':'86eb98635233be43f682f26bad629f11','url':'fonts/rubik-webfont-regular.ttf'},{'revision':'12af8a7232fa6aeb194a925ce971f61d','url':'fonts/rubik-webfont.woff'},{'revision':'1650dd41de4369adceec4a16f75876cb','url':'js/app.js'},{'revision':'e949988f2a6ffdfdcb6053b46ae67823','url':'js/app.js.LICENSE.txt'},{'revision':'25641ebb62105160810dd5502539d002','url':'manifest.json'},{'revision':'885544914caf858b0b9a58c892fcab76','url':'static/audio/app_alert_tone_011.mp3'},{'revision':'2a196b4a29e3295a36cbcddff3a83d97','url':'static/audio/app_alert_tone_012.mp3'},{'revision':'13b399b335f541016fb94c4cf0c9e477','url':'static/audio/app_alert_tone_013.mp3'},{'revision':'deb123d8b8a2e42ef77a17dae9767b53','url':'static/badge/sample-badge.svg'},{'revision':'69819a92190e2e0188b16da94051b0c1','url':'static/bg/merseyside-bg.png'},{'revision':'a88bf16288b2ef1d80bf42c8a3c0eef1','url':'static/default-pp.png'},{'revision':'cff6a7fd196456b8c69fe91510812774','url':'static/intro-cards/img-1.jpg'},{'revision':'36a15732a43b79e104c0328569511242','url':'static/intro-cards/img-2.jpg'},{'revision':'fc47d0ed06d263044ec0b6079bf05afc','url':'static/intro-cards/img-3.jpg'},{'revision':'e66ec63005d024368f467db651194bdb','url':'static/intro-cards/img-4.jpg'},{'revision':'02a326cc8d656524c82a96f8e1cafd0a','url':'static/intro-cards/img-5.jpg'},{'revision':'d6875d0f4a6a4d79ab6e55c317b09206','url':'static/logo-variations/black-icon-color-standard.svg'},{'revision':'caf06c0b2f47508d384685c059a45c68','url':'static/logo-variations/black-icon.svg'},{'revision':'457405fc3ecf542cb2d991f6ab125cd9','url':'static/logo-variations/black-trans-bg.png'},{'revision':'6c617adbd99190a30c5b88b23d24ae15','url':'static/logo-variations/color-icon.svg'},{'revision':'c464799d8061ae1791461da5f5bed732','url':'static/logo-variations/color-trans-bg.png'},{'revision':'b908d68e6e0c5c2370e937be5e5dfc78','url':'static/logo-variations/cordova-android-icon.png'},{'revision':'b908d68e6e0c5c2370e937be5e5dfc78','url':'static/logo-variations/cordova-ios-icon.png'},{'revision':'b908d68e6e0c5c2370e937be5e5dfc78','url':'static/logo-variations/cordova-splash-screen.png'},{'revision':'128c11b03dc80cbf9407cd7d492752b9','url':'static/logo-variations/logo-black-color-bg.jpg'},{'revision':'61b2eafeec5a6ab3d915f4396a42ffba','url':'static/logo-variations/logo-color-white-bg.jpg'},{'revision':'706f91667f67ed01081d5518b60c7aab','url':'static/logo-variations/logo-white-color-bg.jpg'},{'revision':'3958c2b8d6c8931407aaae81ae3e132e','url':'static/logo-variations/white-icon-color-standard.svg'},{'revision':'86f1942ad68d2ae21602ffc2c399c8b7','url':'static/logo-variations/white-icon.svg'},{'revision':'87d7f0f420b5913acf60b1be12f58b82','url':'static/logo-variations/white-trans-bg.png'},{'revision':'27e2ef144c05cb180a1dc9c34fa9f3d6','url':'static/svgs/loading.svg'},{'revision':'6fbff4f242737e82ff3feb64618552ab','url':'static/svgs/location.svg'},{'revision':'0606fe594032a3d70206bf903477ded2','url':'static/svgs/no-selected-badge.svg'},{'revision':'a182878458138e38f6a8702ccaddea65','url':'static/svgs/slider-img-1.svg'}]||[]),q(b)}]);
//# sourceMappingURL=service-worker.js.map