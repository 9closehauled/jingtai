(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-regLogin-login"],{2637:function(e,t,n){"use strict";n.r(t);var i=n("91d5"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},"5beb":function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.envjudge=function(){var e=window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i),t=/micromessenger/i.test(navigator.userAgent),n=/wxwork/i.test(navigator.userAgent);return n&&e?"com-wx-mobile":n&&!e?"com-wx-pc":t&&e?"wx-mobile":t&&!e?"wx-pc":"other"},n("5c47"),n("2c10"),n("0506")},"80c4":function(e,t,n){var i=n("c86c");t=i(!1),t.push([e.i,'.img-a[data-v-0eda1b4b]{position:absolute;width:100%;top:%?-280?%;right:%?-100?%}.img-b[data-v-0eda1b4b]{position:absolute;width:50%;bottom:0;left:%?-50?%;margin-bottom:%?-200?%}.t-login[data-v-0eda1b4b]{width:%?600?%;margin:0 auto;font-size:%?28?%;color:#000}.t-login .loginBtn[data-v-0eda1b4b]{font-size:%?30?%;font-weight:700;background-image:linear-gradient(45deg,#007aff,#019eff);color:#fff;height:%?90?%;line-height:%?90?%;\n\t/* border-radius: 50rpx; */box-shadow:0 5px 7px 0 rgba(86,119,252,.2)}.t-login uni-input[data-v-0eda1b4b]{padding:0 %?120?% 0 %?120?%;height:%?90?%;line-height:%?90?%;margin-bottom:%?50?%;background:#f8f7fc;border:1px solid #e9e9e9;font-size:%?32?%;border-radius:%?50?%}.t-login .t-a[data-v-0eda1b4b]{position:relative}.t-login .t-a uni-image[data-v-0eda1b4b]{width:%?40?%;height:%?40?%;position:absolute;left:%?40?%;top:%?28?%;border-right:%?2?% solid #dedede;padding-right:%?20?%}.t-login .t-b[data-v-0eda1b4b]{text-align:left;font-size:%?46?%;color:#000;padding:%?200?% 0 %?60?% 0;font-weight:700}.t-login .t-c[data-v-0eda1b4b]{position:absolute;right:%?22?%;top:%?22?%;background:#5677fc;color:#fff;font-size:%?24?%;border-radius:%?50?%;height:%?50?%;line-height:%?50?%;padding:0 %?25?%}.t-login .t-d[data-v-0eda1b4b]{text-align:center;color:#999;margin:%?80?% 0}.t-login .t-e[data-v-0eda1b4b]{text-align:center;width:%?250?%;margin:%?80?% auto 0}.t-login .t-g[data-v-0eda1b4b]{float:left;width:50%}.t-login .t-e uni-image[data-v-0eda1b4b]{width:%?50?%;height:%?50?%}.t-login .t-f[data-v-0eda1b4b]{text-align:center;margin:%?200?% 0 0 0;color:#666}.t-login .t-f uni-text[data-v-0eda1b4b]{margin-left:%?20?%;color:#aaa;font-size:%?27?%}.t-login .uni-input-placeholder[data-v-0eda1b4b]{color:#000}.cl[data-v-0eda1b4b]{zoom:1}.cl[data-v-0eda1b4b]:after{clear:both;display:block;visibility:hidden;height:0;content:"\\20"}.uTabs[data-v-0eda1b4b]{\n\t/* margin-bottom: 50rpx; */width:%?260?%}.spaceRow[data-v-0eda1b4b]{display:flex;align-items:center;justify-content:space-between;margin-top:%?36?%}.uIconR[data-v-0eda1b4b]{position:absolute;right:%?16?%;top:%?10?%;padding:%?20?%}',""]),e.exports=t},"85e6":function(e,t){},"91d5":function(t,n,i){"use strict";i("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,i("5ef2"),i("c223"),i("5c47"),i("0506");var o=i("d2ab"),a=(i("85e6"),i("f20e"),i("5beb")),s="",r={data:function(){return{title:"秒火代理网CRM",second:60,showText:!0,username:"",codeMobile:"",password:"",yzm:"",isMmLogin:!1,isShowP:!0,tabList:[{name:"登录"},{name:"注册"}],current:0,yjLoginOk:uni.yjLoginOk,qwConfig:{}}},onLoad:function(){s=this;var e="";if(e=window.location.href,console.log(-1!=e.indexOf("?code")),e&&-1!=e.indexOf("?code"))e=e.split("?code=")[1],e=e.split("&")[0],s.getAccess_tokenFun(e);else{var t=(0,a.envjudge)();"com-wx-mobile"==t&&s.qywxLoginNavigateFun()}},methods:{tabChange:function(e){this.current=e},loginBtn:function(){this.username?this.isMmLogin||""!=this.password?this.$http.post("User/Login?userName=".concat(this.username,"&password=").concat(this.password,"&time=")).then((function(e){1==e.Tag&&(uni.showToast({title:"登陆成功",icon:"loading"}),uni.setStorageSync("WebToken_CRM",e.Data.WebToken),uni.setStorageSync("WebToken_res",e.Data),setTimeout((function(){console.log("执行 未跳转"),uni.reLaunch({url:"/pages/index/index"})}),1500))})):uni.showToast({title:"请输入登录密码",icon:"none"}):uni.showToast({title:"请输入账号",icon:"none"})},getCode:function(){if(/^[1][3,4,5,7,8,9][0-9]{9}$/.test(s.username)){var e=setInterval((function(){s.showText=!1;var e=s.second-1;s.second=e}),1e3);setTimeout((function(){clearInterval(e),s.second=60,s.showText=!0}),6e4),s.sendSmsCodeFun()}else uni.showToast({title:"请输入正确的手机号",icon:"none"})},sendSmsCodeFun:function(){uni.showLoading({title:"发送中..."});var e={action:"sendSmsCode",params:{mobile:s.username,type:"login"}};(0,o.crmMyAppUserApi)(e).then((function(e){s.codeMobile=s.username,uni.showToast({title:"发送成功，请注意查收!",icon:"none"})}))},verifyCodeFun:function(){uni.showLoading({title:"正在登录..."});var e={action:"verifyCode",params:{mobile:s.username,code:s.yzm,type:"login"}};(0,o.crmMyAppUserApi)(e).then((function(e){}))},loginBySmsFun:function(){uni.showLoading({title:"登录中..."});var e={action:"loginBySms",params:{mobile:s.username,code:s.yzm}};(0,o.crmMyAppUserApi)(e).then((function(e){uni.setStorageSync("uni_id_token",e.result.token),uni.setStorageSync("uni_id_token_expired",e.result.tokenExpired)}))},yiJianLoginFun:function(){uni.login({provider:"univerify",univerifyStyle:{fullScreen:!0},success:function(t){uni.closeAuthView(),uni.showLoading({title:"登录中..."});var n={action:"loginByUniverify",params:t.authResult};(0,o.crmMyAppUserApi)(n).then((function(t){var n=e.result.username||e.result.mobile||"一键登录新用户";uni.setStorageSync("uni_id_token",e.result.token),uni.setStorageSync("username",n),uni.setStorageSync("login_type","online")}))},fail:function(e){uni.closeAuthView()}})}}};n.default=r},b237:function(e,t,n){var i=n("80c4");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("967d").default;o("f95ac14a",i,!0,{sourceMap:!1,shadowMode:!1})},d478:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uIcon:n("97c4").default,uButton:n("2599").default},o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"t-login"},[i("v-uni-image",{staticClass:"img-a",attrs:{src:n("bd99")}}),i("v-uni-image",{staticClass:"img-b",attrs:{src:n("1a19")}}),i("v-uni-view",{staticClass:"t-b"},[e._v(e._s(e.title))]),i("v-uni-view",{staticClass:"cl",staticStyle:{"margin-top":"40rpx"}},[i("v-uni-view",{staticClass:"t-a"},[i("v-uni-image",{attrs:{src:n("b8bc")}}),i("v-uni-input",{attrs:{name:"username",placeholder:"请输入账号/手机号"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e.username?i("u-icon",{staticClass:"uIconR",attrs:{name:"close-circle-fill",color:"#8a8a8a",size:"40"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.username=""}}}):e._e()],1),e.isMmLogin?i("v-uni-view",{staticClass:"t-a"},[i("v-uni-image",{attrs:{src:n("0acc")}}),i("v-uni-input",{attrs:{type:"number",name:"yzm",maxlength:"6",placeholder:"请输入验证码"},model:{value:e.yzm,callback:function(t){e.yzm=t},expression:"yzm"}}),e.showText?i("u-button",{staticClass:"t-c",attrs:{ripple:!0,"ripple-bg-color":"#909399"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode()}}},[e._v("发送短信")]):i("v-uni-view",{staticClass:"t-c",staticStyle:{"background-color":"#A7A7A7"}},[e._v("重新发送("+e._s(e.second)+")")])],1):i("v-uni-view",{staticClass:"t-a"},[i("v-uni-image",{attrs:{src:n("8270")}}),i("v-uni-input",{attrs:{name:"password",password:e.isShowP,placeholder:"请输入密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e.password?i("v-uni-view",[e.isShowP?i("u-icon",{staticClass:"uIconR",attrs:{name:"eye-fill",color:"#8a8a8a",size:"40"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.isShowP=!1}}}):i("u-icon",{staticClass:"uIconR",attrs:{name:"eye-off",color:"#8a8a8a",size:"40"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.isShowP=!0}}})],1):e._e()],1),i("u-button",{staticClass:"loginBtn",attrs:{type:"primary","ripple-bg-color":"#909399"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.loginBtn.apply(void 0,arguments)}}},[e._v("登 录")])],1)],1)},a=[]},db44:function(e,t,n){"use strict";n.r(t);var i=n("d478"),o=n("2637");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("fc56");var s=n("828b"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"0eda1b4b",null,!1,i["a"],void 0);t["default"]=r.exports},f20e:function(e,t){},fc56:function(e,t,n){"use strict";var i=n("b237"),o=n.n(i);o.a}}]);