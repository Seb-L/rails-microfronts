(function(e){function t(t){for(var r,i,a=t[0],s=t[1],c=t[2],l=0,p=[];l<a.length;l++)i=a[l],o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},u=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var f=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("VueJs App!")]),e.features.vuejs_msg_btn?n("button",{staticClass:"btn btn-primary",on:{click:e.sayHi}},[e._v("\n    SAY HI TO REACT\n  ")]):e._e(),n("br"),n("br"),n("h4",[e._v("From React")]),n("ul",[n("li",[e._v("Msg: "+e._s(e.fromReact.msg))]),n("li",[e._v("Timestamp: "+e._s(e.fromReact.timestamp))])]),e.features.show_user_infos?n("div",[n("h5",[e._v("Current User")]),n("ul",[n("li",[e._v("Name: "+e._s(e.config.user.name))]),n("li",[e._v("Email: "+e._s(e.config.user.email))])])]):e._e()])},u=[],i=n("2f62"),a={name:"app",data:function(){return{fromReact:{msg:null,timestamp:null}}},computed:Object(i["b"])(["features","config"]),methods:{sayHi:function(){console.log("VUEJS: TO REACT"),window.PubSub.publish("HI_FROM_VUEJS",{msg:"Hi from VueJs",timestamp:(new Date).getTime()})}},created:function(){var e=this;console.log("VUEJS: SUBSCRIBE"),console.log(this.features),console.log(this.config),window.PubSub.subscribe("HI_FROM_REACT",function(t,n){console.log("VUEJS: FROM REACT"),e.fromReact=n})}},s=a,c=(n("5c0b"),n("2877")),f=Object(c["a"])(s,o,u,!1,null,null,null);f.options.__file="App.vue";var l=f.exports;r["a"].use(i["a"]);var p=new i["a"].Store({state:{features:window.gon.features.reduce(function(e,t){return e[t.id]=t.activated,e},{}),config:window.gon.config},mutations:{},actions:{},getters:{features:function(e){return e.features},config:function(e){return e.config}}});r["a"].config.productionTip=!1,r["a"].config.devtools=!0,new r["a"]({store:p,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){}});
//# sourceMappingURL=app.8b98ca3a.js.map