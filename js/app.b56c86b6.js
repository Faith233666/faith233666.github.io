(function(e){function n(n){for(var c,r,o=n[0],i=n[1],h=n[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&d.push(u[r][0]),u[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(n);while(d.length)d.shift()();return a.push.apply(a,h||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],c=!0,r=1;r<t.length;r++){var o=t[r];0!==u[o]&&(c=!1)}c&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},r={app:0},u={app:0},a=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-20086128":"d85fc1e7","chunk-28fee0c3":"97b297c5","chunk-6a3d186a":"9f99ba4f","chunk-130dc3ca":"12ce7600","chunk-2519fc8a":"139ac115","chunk-7dcb6504":"6ea08009","chunk-6cdb1055":"4b803451","chunk-6f962380":"c376da37","chunk-73b508c0":"7e9fd679","chunk-c5bd1154":"42f893d9","chunk-07c9a424":"4a165d7a","chunk-185ec098":"d63ff8de","chunk-632ae4c9":"790676a6","chunk-53a0a8f4":"32a782c2","chunk-c3d9692e":"96489185"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-20086128":1,"chunk-28fee0c3":1,"chunk-130dc3ca":1,"chunk-2519fc8a":1,"chunk-7dcb6504":1,"chunk-6cdb1055":1,"chunk-6f962380":1,"chunk-73b508c0":1,"chunk-07c9a424":1,"chunk-185ec098":1,"chunk-632ae4c9":1,"chunk-53a0a8f4":1,"chunk-c3d9692e":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-20086128":"237aece9","chunk-28fee0c3":"8aa76124","chunk-6a3d186a":"31d6cfe0","chunk-130dc3ca":"a0c3d977","chunk-2519fc8a":"af8781ea","chunk-7dcb6504":"05111177","chunk-6cdb1055":"8e983f82","chunk-6f962380":"43cd2932","chunk-73b508c0":"a0641173","chunk-c5bd1154":"31d6cfe0","chunk-07c9a424":"124cefcc","chunk-185ec098":"4e92d615","chunk-632ae4c9":"44becbfd","chunk-53a0a8f4":"0f73d48c","chunk-c3d9692e":"9ecc8f13"}[e]+".css",u=i.p+c,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var h=a[o],l=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(l===c||l===u))return n()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){h=d[o],l=h.getAttribute("data-href");if(l===c||l===u)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var c=n&&n.target&&n.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete r[e],f.parentNode.removeChild(f),t(a)},f.href=u;var s=document.getElementsByTagName("head")[0];s.appendChild(f)})).then((function(){r[e]=0})));var c=u[e];if(0!==c)if(c)n.push(c[2]);else{var a=new Promise((function(n,t){c=u[e]=[n,t]}));n.push(c[2]=a);var h,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var d=new Error;h=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=u[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",d.name="ChunkLoadError",d.type=c,d.request=r,t[1](d)}u[e]=void 0}};var f=setTimeout((function(){h({type:"timeout",target:l})}),12e4);l.onerror=l.onload=h,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],l=h.push.bind(h);h.push=n,h=h.slice();for(var d=0;d<h.length;d++)n(h[d]);var f=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},2395:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("d3b7"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("keep-alive",{attrs:{include:"index,search"}},[t("router-view")],1)],1)},u=[],a=(t("7c55"),t("2877")),o={},i=Object(a["a"])(o,r,u,!1,null,null,null),h=i.exports,l=t("8c4f");c["a"].use(l["a"]);var d,f=[{path:"/",redirect:"/index"},{path:"/login",component:function(){return t.e("chunk-20086128").then(t.bind(null,"a55b"))}},{path:"/register",component:function(){return t.e("chunk-73b508c0").then(t.bind(null,"73cf"))}},{path:"/user",component:function(){return Promise.all([t.e("chunk-c5bd1154"),t.e("chunk-632ae4c9")]).then(t.bind(null,"1511"))},meta:{goto:!0}},{path:"/edit-profile",component:function(){return t.e("chunk-28fee0c3").then(t.bind(null,"fb5e"))},meta:{goto:!0}},{path:"/follow",component:function(){return Promise.all([t.e("chunk-c5bd1154"),t.e("chunk-c3d9692e")]).then(t.bind(null,"99b5"))},meta:{goto:!0}},{path:"/comment",component:function(){return Promise.all([t.e("chunk-c5bd1154"),t.e("chunk-07c9a424")]).then(t.bind(null,"2d0c"))},meta:{goto:!0}},{path:"/star",component:function(){return t.e("chunk-6cdb1055").then(t.bind(null,"ef5a"))},meta:{goto:!0}},{path:"/index",component:function(){return Promise.all([t.e("chunk-6a3d186a"),t.e("chunk-7dcb6504")]).then(t.bind(null,"d504"))}},{path:"/category",component:function(){return Promise.all([t.e("chunk-6a3d186a"),t.e("chunk-130dc3ca")]).then(t.bind(null,"4886"))}},{path:"/search",component:function(){return Promise.all([t.e("chunk-6a3d186a"),t.e("chunk-2519fc8a")]).then(t.bind(null,"2d3b"))}},{path:"/post/:id",component:function(){return Promise.all([t.e("chunk-c5bd1154"),t.e("chunk-185ec098")]).then(t.bind(null,"37d3"))}},{path:"/video/:id",component:function(){return t.e("chunk-6f962380").then(t.bind(null,"81a8"))}},{path:"/post-comment/:id",component:function(){return Promise.all([t.e("chunk-c5bd1154"),t.e("chunk-6a3d186a"),t.e("chunk-53a0a8f4")]).then(t.bind(null,"eb79"))}}],s=new l["a"]({mode:"history",base:"/",routes:f}),p=s,k=t("b970"),b=t("d399"),m=t("bc3a"),g=t.n(m);c["a"].prototype.$axios=g.a,g.a.defaults.baseURL="http://hmtoutiao-api.atlansic.com",c["a"].use(k["a"]),c["a"].config.productionTip=!1,p.beforeEach((function(e,n,t){if(e.meta.goto){var c=JSON.parse(localStorage.getItem("userInfo"))||{};c.token?t():t("/login")}else t()})),g.a.interceptors.response.use((function(e){return e}),(function(e){var n=e.response.data,t=n.statusCode,c=n.message;if(400===t&&b["a"].fail(c),403===t)return b["a"].fail(c),d.$router.push({path:"/login",query:{return_url:d.$route.path}}),Promise.reject(e)})),d=new c["a"]({router:p,render:function(e){return e(h)}}).$mount("#app")},"7c55":function(e,n,t){"use strict";var c=t("2395"),r=t.n(c);r.a}});
//# sourceMappingURL=app.b56c86b6.js.map