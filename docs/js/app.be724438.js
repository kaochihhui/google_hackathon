(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},s=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2e20423b"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t);var l=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",l.name="ChunkLoadError",l.type=n,l.request=s,a[1](l)}i[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1a9b":function(t,e,a){"use strict";var n=a("f960"),i=a.n(n);i.a},3384:function(t,e,a){"use strict";var n=a("382f"),i=a.n(n);i.a},"382f":function(t,e,a){},"566c":function(t,e,a){"use strict";var n=a("6596"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],r=(a("5c0b"),a("2877")),o={},c=Object(r["a"])(o,i,s,!1,null,null,null),l=c.exports,u=(a("d3b7"),a("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("LandingPage")],1)},f=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"LandingPage"},[a("div",{staticClass:"fullpage-container"},[a("div",{directives:[{name:"fullpage",rawName:"v-fullpage",value:t.opts,expression:"opts"}],ref:"example",staticClass:"fullpage-wp"},[a("div",{staticClass:"page-1 page"},[a("Header")],1),a("div",{staticClass:"page-2 page"},[a("GridContent")],1),a("div",{staticClass:"page-3 page"},[a("Footer")],1)])])])},v=[],m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"container-fluid headerContent"},[a("div",{staticClass:"container d-flex"},[a("div",{staticClass:"col-6 rightText"},[t._v("快快樂樂出遊去"),a("br"),t._v("身心健康跑起來")]),a("div",{staticClass:"col-6"},[a("div",{staticClass:"device"},[a("img",{staticClass:"deviceImg",attrs:{src:"https://media.giphy.com/media/McmIm0EGUHlDlJQlPZ/giphy.gif",alt:""}})])])])])])}],h={name:"Header",props:{},data:function(){return{}},mounted:function(){},methods:{}},b=h,C=(a("566c"),Object(r["a"])(b,m,g,!1,null,"0adcfb21",null)),_=C.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gridContent"},[a("div",{staticClass:"container-fluid section"},[a("div",{staticClass:"container text-center sectionHeader"},[a("h1",[t._v("脂肪出去! 健康進來! 大家跑起來!!!")]),a("p",{staticClass:"text-muted"},[t._v("~ 你所不知道的各種跑步姿勢 ~")]),a("hr")]),a("div",{staticClass:"d-flex flex-row justify-content-around sectionGrid"},[a("div",{staticClass:"d-flex flex-row justify-content-start"},[a("div",{staticClass:"img-div"},[a("img",{staticClass:"iconImg",attrs:{id:"img1",src:"https://signalrservices.azurewebsites.net/walkcat.gif",alt:""}})]),a("div",{staticClass:"img-div"},[a("img",{staticClass:"iconImg",attrs:{id:"img2",src:"https://signalrservices.azurewebsites.net/run.gif",alt:""}})]),a("div",{staticClass:"img-div"},[a("img",{staticClass:"iconImg",attrs:{id:"img3",src:"https://signalrservices.azurewebsites.net/walk.gif",alt:""}})]),a("div",{staticClass:"img-div"},[a("img",{staticClass:"iconImg",attrs:{id:"img4",src:"https://signalrservices.azurewebsites.net/runcat.gif",alt:""}})])])])])])}],x={name:"GridContent",props:{},data:function(){return{}},mounted:function(){},methods:{}},j=x,O=(a("1a9b"),Object(r["a"])(j,w,y,!1,null,"64b35e87",null)),P=O.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"container-fluid section"},[n("div",{staticClass:"sectionHeader"},[n("h2",[t._v("看那麼多，還不趕快下載起來!")])]),n("div",{staticClass:"iconSection"},[n("img",{staticClass:"iconDownload",attrs:{src:"https://blackrockdigital.github.io/startbootstrap-new-age/img/app-store-badge.svg",alt:""}}),n("img",{staticClass:"iconDownload",attrs:{src:"https://blackrockdigital.github.io/startbootstrap-new-age/img/google-play-badge.svg",alt:""}})]),n("div",{staticClass:"socialMediaSection"},[n("h4",[t._v("喜歡我們記得訂閱、按讚、分享，還要開啟小鈴鐺喔～")]),n("a",{attrs:{href:"https://www.facebook.com/StretchApp/",target:"_blank"}},[n("img",{staticClass:"socialMediaIcon",attrs:{src:a("b7cd")}})])])]),n("div",{staticClass:"container-fluid sectionFooter"},[n("p",[t._v("© 健康進來 2019. All Rights Reserved.")]),n("ul",{staticClass:"list-inline"},[n("li",{staticClass:"list-inline-item"},[n("a",{staticClass:"listText",attrs:{href:"#"}},[t._v("Privacy")])]),n("li",{staticClass:"list-inline-item"},[n("a",{staticClass:"listText",attrs:{href:"#"}},[t._v("Terms")])]),n("li",{staticClass:"list-inline-item"},[n("a",{staticClass:"listText",attrs:{href:"#"}},[t._v("FAQ")])])])])])}],T={name:"Footer",props:{},data:function(){return{}},mounted:function(){},methods:{}},$=T,S=(a("bb30"),Object(r["a"])($,k,E,!1,null,"4f1d770d",null)),I=S.exports,M={name:"LandingPage",components:{Header:_,GridContent:P,Footer:I},data:function(){return{opts:{start:0,dir:"v",duration:500}}}},H=M,L=(a("3384"),Object(r["a"])(H,p,v,!1,null,"10279cb0",null)),F=L.exports,G={name:"home",components:{LandingPage:F}},z=G,A=Object(r["a"])(z,d,f,!1,null,null,null),D=A.exports;n["a"].use(u["a"]);var J=[{path:"/",name:"home",component:D},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Q=new u["a"]({mode:"history",base:"/",routes:J}),R=Q,q=a("2f62");n["a"].use(q["a"]);var N=new q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),U=(a("5977"),a("6ac3")),Z=a.n(U);n["a"].use(Z.a),n["a"].config.productionTip=!1,new n["a"]({router:R,store:N,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),i=a.n(n);i.a},6596:function(t,e,a){},"9c0c":function(t,e,a){},b7cd:function(t,e,a){t.exports=a.p+"img/social_media_icon.0ae19f5c.png"},bb30:function(t,e,a){"use strict";var n=a("d46b"),i=a.n(n);i.a},d46b:function(t,e,a){},f960:function(t,e,a){}});
//# sourceMappingURL=app.be724438.js.map