(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-webview-webview"],{"49eb":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[e("v-uni-web-view",{attrs:{src:this.url}})],1)},u=[]},7028:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{url:""}},onLoad:function(t){"百度"==t.type?this.url="https://www.baidu.com/s?wd="+t.name:"天眼查"==t.type?this.url="https://m.tianyancha.com/search?key="+t.name:"商务合作"==t.type?(this.url="https://m.xykweb.com",uni.setNavigationBarTitle({title:"商务合作"})):"帮助中心"==t.type&&(this.url="http://kycrm.xykweb.com/",uni.setNavigationBarTitle({title:"帮助中心"}))},methods:{}};e.default=i},"88e5c":function(t,e,n){"use strict";n.r(e);var i=n("49eb"),u=n("cb24");for(var r in u)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(r);var a=n("828b"),c=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,"b178524e",null,!1,i["a"],void 0);e["default"]=c.exports},cb24:function(t,e,n){"use strict";n.r(e);var i=n("7028"),u=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=u.a}}]);