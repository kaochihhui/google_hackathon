(function(t){function e(e){for(var a,r,c=e[0],o=e[1],l=e[2],u=0,f=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,r=1;r<i.length;r++){var o=i[r];0!==s[o]&&(a=!1)}a&&(n.splice(e--,1),t=c(c.s=i[0]))}return t}var a={},s={app:0},n=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"721f51d4"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.e=function(t){var e=[],i=s[t];if(0!==i)if(i)e.push(i[2]);else{var a=new Promise((function(e,a){i=s[t]=[e,a]}));e.push(i[2]=a);var n,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=r(t);var l=new Error;n=function(e){o.onerror=o.onload=null,clearTimeout(u);var i=s[t];if(0!==i){if(i){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,i[1](l)}s[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:o})}),12e4);o.onerror=o.onload=n,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(i,a,function(e){return t[e]}.bind(null,a));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=l;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"1e01":function(t,e,i){"use strict";var a=i("3135"),s=i.n(a);s.a},"21f5":function(t,e,i){"use strict";var a=i("4b06"),s=i.n(a);s.a},"250e":function(t,e,i){},3135:function(t,e,i){},3631:function(t,e,i){"use strict";var a=i("250e"),s=i.n(a);s.a},"4b06":function(t,e,i){},"566c":function(t,e,i){"use strict";var a=i("6596"),s=i.n(a);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},n=[],r=(i("5c0b"),i("2877")),c={},o=Object(r["a"])(c,s,n,!1,null,null,null),l=o.exports,u=(i("d3b7"),i("8c4f")),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("LandingPage")],1)},f=[],p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"LandingPage"},[i("div",{staticClass:"fullpage-container"},[i("div",{staticClass:"button-group"},[i("button",{attrs:{type:"button"},on:{click:function(e){return t.moveTo(0)}}},[t._v(" 快樂 ")]),i("button",{attrs:{type:"button"},on:{click:function(e){return t.moveTo(1)}}},[t._v(" 健康 ")]),i("button",{attrs:{type:"button"},on:{click:function(e){return t.moveTo(2)}}},[t._v(" 資訊 ")]),i("button",{attrs:{type:"button"},on:{click:function(e){return t.moveTo(3)}}},[t._v(" 走起來 ")])]),i("div",{directives:[{name:"fullpage",rawName:"v-fullpage",value:t.opts,expression:"opts"}],ref:"fullpage",staticClass:"fullpage-wp"},[i("div",{staticClass:"page-1 page"},[i("Header")],1),i("div",{staticClass:"page-2 page"},[i("GridContent")],1),i("div",{staticClass:"page-3 page"},[i("Article")],1),i("div",{staticClass:"page-4 page"},[i("Footer")],1)])])])},m=[],g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{staticClass:"container-fluid headerContent"},[i("div",{staticClass:"container d-flex"},[i("div",{staticClass:"col-6 rightText"},[t._v("快快樂樂出遊去"),i("br"),t._v("身心健康跑起來")]),i("div",{staticClass:"col-6"},[i("div",{staticClass:"device"},[i("img",{staticClass:"deviceImg",attrs:{src:"https://media.giphy.com/media/McmIm0EGUHlDlJQlPZ/giphy.gif",alt:""}})])])])])])}],h={name:"Header",props:{},data:function(){return{}},mounted:function(){},methods:{}},b=h,C=(i("566c"),Object(r["a"])(b,g,v,!1,null,"0adcfb21",null)),_=C.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gridContent"},[i("div",{staticClass:"container-fluid section"},[i("div",{staticClass:"container text-center sectionHeader"},[i("h1",[t._v("脂肪出去! 健康進來! 大家跑起來!!!")]),i("p",{staticClass:"text-muted"},[t._v("~ 你所不知道的各種跑步姿勢 ~")]),i("hr")]),i("div",{staticClass:"d-flex flex-row justify-content-around sectionGrid"},[i("div",{staticClass:"d-flex flex-row justify-content-start"},[i("div",{staticClass:"img-div"},[i("img",{staticClass:"iconImg",attrs:{id:"img1",src:"https://media.giphy.com/media/hqlrKCydiVohFh5Wmy/giphy.gif",alt:""}})]),i("div",{staticClass:"img-div"},[i("img",{staticClass:"iconImg",attrs:{id:"img2",src:"https://media.giphy.com/media/kfS9eNvRsTVDXj7LDS/giphy.gif",alt:""}})]),i("div",{staticClass:"img-div"},[i("img",{staticClass:"iconImg",attrs:{id:"img3",src:"https://media.giphy.com/media/cnKOUsxIfSKoIF8Z7c/giphy.gif",alt:""}})]),i("div",{staticClass:"img-div"},[i("img",{staticClass:"iconImg",attrs:{id:"img4",src:"https://media.giphy.com/media/RjrAEcRPhuSKoJ7WRV/giphy.gif",alt:""}})]),i("div",{staticClass:"img-div"},[i("img",{staticClass:"iconImg",attrs:{id:"img5",src:"https://media.giphy.com/media/Sqfdt2VRK7nHWSvE3n/giphy.gif",alt:""}})]),i("div",[i("div",{staticClass:"img-div"},[i("img",{staticClass:"iconImg",attrs:{id:"img6",src:"https://media.giphy.com/media/mCgEW87gnWUD3cSWi3/giphy.gif",alt:""}})])])])])])])}],w={name:"GridContent",props:{},data:function(){return{}},mounted:function(){},methods:{}},j=w,k=(i("1e01"),Object(r["a"])(j,y,x,!1,null,"f3f3b4aa",null)),O=k.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"article"},[i("div",{staticClass:"container-fluid section"},[i("div",{staticClass:"container text-center articleSection"},[i("h1",[t._v("痞客邦熱門健康資訊")]),i("div",{staticClass:"articleContent"},t._l(t.articles,(function(e){return i("div",{key:e.id,staticClass:"d-flex text-center listArticle"},[e.thumb?i("img",{staticClass:"thumbImg",attrs:{src:e.thumb}}):t._e(),e.title?i("div",{staticClass:"linkText"},[i("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.title))])]):t._e()])})),0)])])])},E=[],S=i("bc3a"),P=i.n(S),I={name:"Article",props:{},data:function(){return{url:"http://emma.pixnet.cc/mainpage/blog/categories/hot/32?page=1&per_page=5&api_version=2&format=json",articles:[],posts:[],errors:[]}},created:function(){var t=this;P.a.get(this.url).then((function(e){t.articles=e.data.articles})).catch((function(e){t.errors.push(e)}))},methods:{}},$=I,A=(i("3631"),Object(r["a"])($,T,E,!1,null,"44c5b556",null)),M=A.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"container-fluid section"},[a("div",{staticClass:"sectionHeader"},[a("h2",[t._v("看那麼多，還不趕快下載起來!")])]),a("div",{staticClass:"iconSection"},[a("a",{attrs:{href:"https://signalrservices.azurewebsites.net/home/activity",target:"_blank"}},[a("img",{staticClass:"iconDownload",attrs:{src:"https://blackrockdigital.github.io/startbootstrap-new-age/img/app-store-badge.svg",alt:""}}),a("img",{staticClass:"iconDownload",attrs:{src:"https://blackrockdigital.github.io/startbootstrap-new-age/img/google-play-badge.svg",alt:""}})])]),a("div",{staticClass:"socialMediaSection"},[a("h4",[t._v("喜歡我們記得訂閱、按讚、分享，還要開啟小鈴鐺喔～")]),a("a",{attrs:{href:"https://www.facebook.com/StretchApp/",target:"_blank"}},[a("img",{staticClass:"socialMediaIcon",attrs:{src:i("b7cd")}})])]),a("div",{staticClass:"googleMapIframe"},[a("h4",[t._v(" 走起來！歡迎來店裡逛逛～ ")]),a("iframe",{attrs:{height:"200",width:"400",src:"http://maps.google.com.tw/maps?hl=zh-TW&saddr=24.120814, 120.673208&daddr=24.148454, 120.673535&output=embed"}})])]),a("div",{staticClass:"container-fluid sectionFooter"},[a("p",[t._v("© 健康進來 2019. All Rights Reserved.")]),a("ul",{staticClass:"list-inline"},[a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"listText",attrs:{href:"#"}},[t._v("Privacy")])]),a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"listText",attrs:{href:"#"}},[t._v("Terms")])]),a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"listText",attrs:{href:"#"}},[t._v("FAQ")])])])])])}],L={name:"Footer",props:{},data:function(){return{}},mounted:function(){},methods:{}},R=L,W=(i("21f5"),Object(r["a"])(R,F,H,!1,null,"40366101",null)),D=W.exports,G={name:"LandingPage",components:{Header:_,GridContent:O,Article:M,Footer:D},data:function(){return{index:0,opts:{start:0,dir:"v",duration:500}}},methods:{moveTo:function(t){this.$refs.fullpage.$fullpage.moveTo(t,!0)}}},K=G,J=(i("d19a"),Object(r["a"])(K,p,m,!1,null,"e0818534",null)),V=J.exports,q={name:"home",components:{LandingPage:V}},U=q,z=Object(r["a"])(U,d,f,!1,null,null,null),N=z.exports;a["a"].use(u["a"]);var Q=[{path:"/",name:"home",component:N},{path:"/about",name:"about",component:function(){return i.e("about").then(i.bind(null,"f820"))}}],Z=new u["a"]({mode:"history",base:"/",routes:Q}),X=Z,B=i("2f62");a["a"].use(B["a"]);var Y=new B["a"].Store({state:{},mutations:{},actions:{},modules:{}}),tt=(i("5977"),i("6ac3")),et=i.n(tt);a["a"].use(et.a),a["a"].config.productionTip=!1,new a["a"]({router:X,store:Y,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var a=i("9c0c"),s=i.n(a);s.a},6596:function(t,e,i){},"6c2b":function(t,e,i){},"9c0c":function(t,e,i){},b7cd:function(t,e,i){t.exports=i.p+"img/social_media_icon.0ae19f5c.png"},d19a:function(t,e,i){"use strict";var a=i("6c2b"),s=i.n(a);s.a}});
//# sourceMappingURL=app.4cb6aec0.js.map