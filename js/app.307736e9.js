(function(t){function e(e){for(var r,a,i=e[0],u=e[1],s=e[2],f=0,l=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(l.length)l.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},c={app:0},o=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-0886af1a":"d611366b","chunk-48542d07":"e4e5d773","chunk-72ef5bb7":"fa57ef4b","chunk-2d080daa":"c10e1297","chunk-5310b477":"0525f082","chunk-87331bce":"1c117a35","chunk-df8f8a34":"7b140980"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-0886af1a":1,"chunk-48542d07":1,"chunk-72ef5bb7":1,"chunk-2d080daa":1,"chunk-5310b477":1,"chunk-87331bce":1,"chunk-df8f8a34":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-0886af1a":"b4f4173a","chunk-48542d07":"4c82761c","chunk-72ef5bb7":"b8b48c68","chunk-2d080daa":"9006d11c","chunk-5310b477":"b198c0f3","chunk-87331bce":"3fd34f5f","chunk-df8f8a34":"c56c4378"}[t]+".css",c=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===c))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],f=s.getAttribute("data-href");if(f===r||f===c)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||c,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],d.parentNode.removeChild(d),n(o)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=o);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(t);var l=new Error;s=function(e){f.onerror=f.onload=null,clearTimeout(d);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}c[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/supermall/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=f;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},2144:function(t,e,n){"use strict";var r=n("8fd2"),a=n.n(r);a.a},2872:function(t,e,n){t.exports=n.p+"img/shopcart.c68224ce.svg"},"2e08":function(t,e,n){"use strict";var r=n("630a"),a=n.n(r);a.a},4897:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"toast"},[t._v(" "+t._s(t.message)+" ")])},a=[],c={name:"Toast",props:{message:{type:String,default:""},isShow:{type:Boolean,default:!1}},data:function(){return{}},methods:{}},o=c,i=(n("a609"),n("2877")),u=Object(i["a"])(o,r,a,!1,null,"12603fc6",null);e["a"]=u.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("main-tab-bar")],1)},c=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tab-bar",[r("tab-bar-item",{attrs:{path:"/home"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[r("img",{attrs:{src:n("9443"),alt:""}})]},proxy:!0},{key:"item-icon-active",fn:function(){return[r("img",{attrs:{src:n("b508"),alt:""}})]},proxy:!0},{key:"item-text",fn:function(){return[r("p",[t._v("首页")])]},proxy:!0}])}),r("tab-bar-item",{attrs:{path:"/category"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[r("img",{attrs:{src:n("57cd"),alt:""}})]},proxy:!0},{key:"item-icon-active",fn:function(){return[r("img",{attrs:{src:n("a5ef"),alt:""}})]},proxy:!0},{key:"item-text",fn:function(){return[r("p",[t._v("分类")])]},proxy:!0}])}),r("tab-bar-item",{attrs:{path:"/cart"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[r("img",{attrs:{src:n("2872"),alt:""}})]},proxy:!0},{key:"item-icon-active",fn:function(){return[r("img",{attrs:{src:n("c3f8"),alt:""}})]},proxy:!0},{key:"item-text",fn:function(){return[r("p",[t._v("购物车")])]},proxy:!0}])}),r("tab-bar-item",{attrs:{path:"/profile"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[r("img",{attrs:{src:n("e55d"),alt:""}})]},proxy:!0},{key:"item-icon-active",fn:function(){return[r("img",{attrs:{src:n("d151"),alt:""}})]},proxy:!0},{key:"item-text",fn:function(){return[r("p",[t._v("我的")])]},proxy:!0}])})],1)},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},s=[],f={name:"TabBar"},l=f,d=(n("2144"),n("2877")),p=Object(d["a"])(l,u,s,!1,null,"6dde8bc7",null),h=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?n("div",[t._t("item-icon")],2):n("div",[t._t("item-icon-active")],2),n("div",{style:t.activeStyle},[t._t("item-text")],2)])},b=[],v=(n("c975"),n("ac1f"),n("5319"),{name:"TabBarItem",props:{path:String,activeColor:{type:String,default:"#D81E06"}},data:function(){return{}},computed:{isActive:function(){return this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{}:{color:this.activeColor}}},methods:{itemClick:function(){this.$router.replace(this.path).catch((function(t){return t}))}}}),g=v,y=(n("2e08"),Object(d["a"])(g,m,b,!1,null,"4c83a816",null)),k=y.exports,x={name:"MainTabBar",components:{TabBar:h,TabBarItem:k}},_=x,w=Object(d["a"])(_,o,i,!1,null,"278a1f7c",null),S=w.exports,C={name:"App",components:{MainTabBar:S}},O=C,T=(n("034f"),Object(d["a"])(O,a,c,!1,null,null,null)),j=T.exports,E=(n("d3b7"),n("8c4f"));r["default"].use(E["a"]);var P=[{path:"",redirect:"/home"},{path:"/home",component:function(){return Promise.all([n.e("chunk-48542d07"),n.e("chunk-72ef5bb7"),n.e("chunk-5310b477")]).then(n.bind(null,"b3d7"))}},{path:"/category",component:function(){return Promise.all([n.e("chunk-48542d07"),n.e("chunk-72ef5bb7"),n.e("chunk-87331bce")]).then(n.bind(null,"bb51"))}},{path:"/cart",component:function(){return Promise.all([n.e("chunk-48542d07"),n.e("chunk-df8f8a34")]).then(n.bind(null,"c228"))}},{path:"/profile",component:function(){return n.e("chunk-0886af1a").then(n.bind(null,"3b42"))}},{path:"/detail/:id",component:function(){return Promise.all([n.e("chunk-48542d07"),n.e("chunk-72ef5bb7"),n.e("chunk-2d080daa")]).then(n.bind(null,"6ab7"))}}],L=new E["a"]({routes:P}),$=L,A=(n("7db0"),n("2f62"));r["default"].use(A["a"]);var B=new A["a"].Store({state:{cartList:[]},mutations:{addCounter:function(t,e){e.count++},addToCart:function(t,e){e.checked=!1,t.cartList.push(e)},checkClick:function(t,e){t.cartList[e].checked=!t.cartList[e].checked}},actions:{addCart:function(t,e){return new Promise((function(n){var r=t.state.cartList.find((function(t){return t.id===e.id}));r?(t.commit("addCounter",r),n("数量加1")):(e.count=1,t.commit("addToCart",e),n("新商品"))}))}},modules:{},getters:{cartLength:function(t){return t.cartList.length},cartList:function(t){return t.cartList}}}),M=n("be79"),N=n.n(M),D=n("4897"),I={install:function(t){var e=t.extend(D["a"]),n=new e;n.$mount(document.createElement("div")),document.body.appendChild(n.$el),t.prototype.$toast=D["a"]}},q=I,J=n("caf9");r["default"].use(N.a),r["default"].use(q),r["default"].use(J["a"]),r["default"].config.productionTip=!1,r["default"].prototype.$bus=new r["default"],new r["default"]({router:$,store:B,render:function(t){return t(j)}}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.12bedb89.svg"},"630a":function(t,e,n){},"85ec":function(t,e,n){},"8fd2":function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.7210ddcb.svg"},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.cb2cc09f.svg"},a609:function(t,e,n){"use strict";var r=n("b3b6"),a=n.n(r);a.a},b3b6:function(t,e,n){},b508:function(t,e,n){t.exports=n.p+"img/home_active.cc40b6f2.svg"},c3f8:function(t,e,n){t.exports=n.p+"img/shopcart_active.3f0a2016.svg"},d151:function(t,e,n){t.exports=n.p+"img/profile_active.fd66b281.svg"},e55d:function(t,e,n){t.exports=n.p+"img/profile.42d7cf12.svg"}});
//# sourceMappingURL=app.307736e9.js.map