(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uview-ui-components-u-avatar-cropper-u-avatar-cropper"],{1851:function(t,e,n){"use strict";var o=n("8bdb"),r=n("84d6"),i=n("1cb5");o({target:"Array",proto:!0},{fill:r}),i("fill")},"1c7b":function(t,e,n){"use strict";n("6a54");var o=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("64aa");var r=o(n("94d2")),i={props:{boundStyle:{type:Object,default:function(){return{lineWidth:4,borderColor:"rgb(245, 245, 245)",mask:"rgba(0, 0, 0, 0.35)"}}}},data:function(){return{bottomNavHeight:50,originWidth:200,width:0,height:0,cropperOpt:{id:"cropper",targetId:"targetCropper",pixelRatio:1,width:0,height:0,scale:2.5,zoom:8,cut:{x:(this.width-this.originWidth)/2,y:(this.height-this.originWidth)/2,width:this.originWidth,height:this.originWidth},boundStyle:{lineWidth:uni.upx2px(this.boundStyle.lineWidth),mask:this.boundStyle.mask,color:this.boundStyle.borderColor}},destWidth:200,rectWidth:200,fileType:"jpg",src:""}},onLoad:function(t){var e=this,n=uni.getSystemInfoSync();if(this.width=n.windowWidth,this.height=n.windowHeight-this.bottomNavHeight,this.cropperOpt.width=this.width,this.cropperOpt.height=this.height,this.cropperOpt.pixelRatio=n.pixelRatio,t.destWidth&&(this.destWidth=t.destWidth),t.rectWidth){var o=Number(t.rectWidth);this.cropperOpt.cut={x:(this.width-o)/2,y:(this.height-o)/2,width:o,height:o}}this.rectWidth=t.rectWidth,t.fileType&&(this.fileType=t.fileType),this.cropper=new r.default(this.cropperOpt).on("ready",(function(t){})).on("beforeImageLoad",(function(t){})).on("imageLoad",(function(t){})).on("beforeDraw",(function(t,e){})),uni.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#000000"}),uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){e.src=t.tempFilePaths[0],e.cropper.pushOrign(e.src)}})},methods:{touchStart:function(t){this.cropper.touchStart(t)},touchMove:function(t){this.cropper.touchMove(t)},touchEnd:function(t){this.cropper.touchEnd(t)},getCropperImage:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.src)return this.$u.toast("请先选择图片再裁剪");var n={destHeight:Number(this.destWidth),destWidth:Number(this.destWidth),fileType:this.fileType};this.cropper.getCropperImage(n,(function(n,o){o?uni.showModal({title:"温馨提示",content:o.message}):e?uni.previewImage({current:"",urls:[n]}):(uni.$emit("uAvatarCropper",n),t.$u.route({type:"back"}))}))},uploadTap:function(){var t=this,e=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(n){e.src=n.tempFilePaths[0],e.cropper.pushOrign(t.src)}})}}};e.default=i},2973:function(t,e,n){"use strict";var o=n("79cc"),r=n.n(o);r.a},"3ca4":function(t,e,n){"use strict";n.r(e);var o=n("de91"),r=n("a48b");for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("2973");var a=n("828b"),c=Object(a["a"])(r["default"],o["b"],o["c"],!1,null,"40d667f5",null,!1,o["a"],void 0);e["default"]=c.exports},"6cf5":function(t,e,n){var o=n("c86c");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 郑志平\r\n * 2021-12-06\r\n */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-40d667f5]{background:#fff}.cropper[data-v-40d667f5]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:11}.cropper-buttons[data-v-40d667f5]{background-color:#000;color:#eee}.cropper-wrapper[data-v-40d667f5]{position:relative;display:flex;flex-direction:row;flex-direction:row;justify-content:space-between;align-items:center;width:100%;background-color:#000}.cropper-buttons[data-v-40d667f5]{width:100vw;display:flex;flex-direction:row;flex-direction:row;justify-content:space-between;align-items:center;position:fixed;bottom:0;left:0;font-size:%?28?%}.cropper-buttons .upload[data-v-40d667f5],\r\n.cropper-buttons .getCropperImage[data-v-40d667f5]{width:50%;text-align:center}.cropper-buttons .upload[data-v-40d667f5]{text-align:left;padding-left:%?50?%}.cropper-buttons .getCropperImage[data-v-40d667f5]{text-align:right;padding-right:%?50?%}',""]),t.exports=e},"79cc":function(t,e,n){var o=n("6cf5");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("967d").default;r("01647b5c",o,!0,{sourceMap:!1,shadowMode:!1})},"94d2":function(t,e,n){(function(o){var r,i,a=n("bdbb").default;n("f7a5"),n("bf0f"),n("a03a"),n("6a54"),n("e838"),n("5ef2"),n("c223"),n("7a76"),n("c9b5"),n("5c47"),n("a1c1"),n("0506"),n("2c10"),n("1851"),n("2797"),n("dc8a"),
/**
 * we-cropper v1.3.9
 * (c) 2020 dlhandsome
 * @license MIT
 */
function(o,c){"object"===a(e)&&"undefined"!==typeof t?t.exports=c():(r=c,i="function"===typeof r?r.call(e,n,e,t):r,void 0===i||(t.exports=i))}(0,(function(){"use strict";var t=void 0,e=["touchstarted","touchmoved","touchended"];function n(t){var n=[],o=arguments.length-1;while(o-- >0)n[o]=arguments[o+1];e.forEach((function(e,o){void 0!==n[o]&&(t[e]=n[o])}))}function r(){return t||(t=uni.getSystemInfoSync()),t}var i={},c=r(),u=c.pixelRatio,s={id:{default:"cropper",get:function(){return i.id},set:function(t){"string"!==typeof t&&console.error("id："+t+" is invalid"),i.id=t}},width:{default:750,get:function(){return i.width},set:function(t){"number"!==typeof t&&console.error("width："+t+" is invalid"),i.width=t}},height:{default:750,get:function(){return i.height},set:function(t){"number"!==typeof t&&console.error("height："+t+" is invalid"),i.height=t}},pixelRatio:{default:u,get:function(){return i.pixelRatio},set:function(t){"number"!==typeof t&&console.error("pixelRatio："+t+" is invalid"),i.pixelRatio=t}},scale:{default:2.5,get:function(){return i.scale},set:function(t){"number"!==typeof t&&console.error("scale："+t+" is invalid"),i.scale=t}},zoom:{default:5,get:function(){return i.zoom},set:function(t){"number"!==typeof t?console.error("zoom："+t+" is invalid"):(t<0||t>10)&&console.error("zoom should be ranged in 0 ~ 10"),i.zoom=t}},src:{default:"",get:function(){return i.src},set:function(t){"string"!==typeof t&&console.error("src："+t+" is invalid"),i.src=t}},cut:{default:{},get:function(){return i.cut},set:function(t){"object"!==a(t)&&console.error("cut："+t+" is invalid"),i.cut=t}},boundStyle:{default:{},get:function(){return i.boundStyle},set:function(t){"object"!==a(t)&&console.error("boundStyle："+t+" is invalid"),i.boundStyle=t}},onReady:{default:null,get:function(){return i.ready},set:function(t){i.ready=t}},onBeforeImageLoad:{default:null,get:function(){return i.beforeImageLoad},set:function(t){i.beforeImageLoad=t}},onImageLoad:{default:null,get:function(){return i.imageLoad},set:function(t){i.imageLoad=t}},onBeforeDraw:{default:null,get:function(){return i.beforeDraw},set:function(t){i.beforeDraw=t}}},d=r(),h=d.windowWidth;var p="undefined"!==typeof window?window:"undefined"!==typeof o?o:"undefined"!==typeof self?self:{};function l(t,e){return e={exports:{}},t(e,e.exports),e.exports}var f=l((function(t,e){e.isStr=function(t){return"string"===typeof t},e.isNum=function(t){return"number"===typeof t},e.isArr=Array.isArray,e.isUndef=function(t){return void 0===t},e.isTrue=function(t){return!0===t},e.isFalse=function(t){return!1===t},e.isFunc=function(t){return"function"===typeof t},e.isObj=e.isObject=function(t){return null!==t&&"object"===a(t)};var n=Object.prototype.toString;e.isPlainObject=function(t){return"[object Object]"===n.call(t)};var o=Object.prototype.hasOwnProperty;e.hasOwn=function(t,e){return o.call(t,e)},e.noop=function(t,e,n){},e.isValidArrayIndex=function(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}})),g=f.isFunc,v=f.isPlainObject,b=["ready","beforeImageLoad","beforeDraw","imageLoad"];function y(t){return function(e){var n=[],o=arguments.length-1;while(o-- >0)n[o]=arguments[o+1];return void 0===e&&(e={}),new Promise((function(o,r){e.success=function(t){o(t)},e.fail=function(t){r(t)},t.apply(void 0,[e].concat(n))}))}}function m(t,e){return void 0===e&&(e=!1),new Promise((function(n){t.draw(e,n)}))}var x=y(uni.getImageInfo),w=y(uni.canvasToTempFilePath),C=l((function(t,e){
/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
(function(n){var o=e,r=t&&t.exports==o&&t,i="object"==a(p)&&p;i.global!==i&&i.window!==i||(n=i);var c=function(t){this.message=t};c.prototype=new Error,c.prototype.name="InvalidCharacterError";var u=function(t){throw new c(t)},s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d=/[\t\n\f\r ]/g,h={encode:function(t){t=String(t),/[^\0-\xFF]/.test(t)&&u("The string to be encoded contains characters outside of the Latin1 range.");var e,n,o,r,i=t.length%3,a="",c=-1,d=t.length-i;while(++c<d)e=t.charCodeAt(c)<<16,n=t.charCodeAt(++c)<<8,o=t.charCodeAt(++c),r=e+n+o,a+=s.charAt(r>>18&63)+s.charAt(r>>12&63)+s.charAt(r>>6&63)+s.charAt(63&r);return 2==i?(e=t.charCodeAt(c)<<8,n=t.charCodeAt(++c),r=e+n,a+=s.charAt(r>>10)+s.charAt(r>>4&63)+s.charAt(r<<2&63)+"="):1==i&&(r=t.charCodeAt(c),a+=s.charAt(r>>2)+s.charAt(r<<4&63)+"=="),a},decode:function(t){t=String(t).replace(d,"");var e=t.length;e%4==0&&(t=t.replace(/==?$/,""),e=t.length),(e%4==1||/[^+a-zA-Z0-9/]/.test(t))&&u("Invalid character: the string to be decoded is not correctly encoded.");var n,o,r=0,i="",a=-1;while(++a<e)o=s.indexOf(t.charAt(a)),n=r%4?64*n+o:o,r++%4&&(i+=String.fromCharCode(255&n>>(-2*r&6)));return i},version:"0.1.0"};if(o&&!o.nodeType)if(r)r.exports=h;else for(var l in h)h.hasOwnProperty(l)&&(o[l]=h[l]);else n.base64=h})(p)}));function S(t){var e="";if("string"===typeof t)e=t;else for(var n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return C.encode(e)}function O(t,e,n,o,r,i,a){void 0===a&&(a=function(){}),void 0===i&&(i="png"),i=function(t){t=t.toLowerCase().replace(/jpg/i,"jpeg");var e=t.match(/png|jpeg|bmp|gif/)[0];return"image/"+e}(i),/bmp/.test(i)?function(t,e,n,o,r,i){uni.canvasGetImageData({canvasId:t,x:e,y:n,width:o,height:r,success:function(t){i(t,null)},fail:function(t){i(null,t)}})}(t,e,n,o,r,(function(t,e){var n=function(t){var e=t.width,n=t.height,o=e*n*3,r=o+54,i=[66,77,255&r,r>>8&255,r>>16&255,r>>24&255,0,0,0,0,54,0,0,0],a=[40,0,0,0,255&e,e>>8&255,e>>16&255,e>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,1,0,24,0,0,0,0,0,255&o,o>>8&255,o>>16&255,o>>24&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=(4-3*e%4)%4,u=t.data,s="",d=e<<2,h=n,p=String.fromCharCode;do{for(var l=d*(h-1),f="",g=0;g<e;g++){var v=g<<2;f+=p(u[l+v+2])+p(u[l+v+1])+p(u[l+v])}for(var b=0;b<c;b++)f+=String.fromCharCode(0);s+=f}while(--h);var y=S(i.concat(a))+S(s);return y}(t);g(a)&&a(function(t,e){return"data:"+e+";base64,"+t}(n,"image/"+i),e)})):console.error("暂不支持生成'"+i+"'类型的base64图片")}var I={convertToImage:O,convertToBMP:function(t,e){void 0===t&&(t={});var n=t.canvasId,o=t.x,r=t.y,i=t.width,a=t.height;return void 0===e&&(e=function(){}),O(n,o,r,i,a,"bmp",e)}};var T={touchStart:function(t){var e=t.touches,o=e[0],r=e[1];this.src&&(n(this,!0,null,null),this.__oneTouchStart(o),t.touches.length>=2&&this.__twoTouchStart(o,r))},touchMove:function(t){var e=t.touches,o=e[0],r=e[1];this.src&&(n(this,null,!0),1===t.touches.length&&this.__oneTouchMove(o),t.touches.length>=2&&this.__twoTouchMove(o,r))},touchEnd:function(t){this.src&&(n(this,!1,!1,!0),this.__xtouchEnd())}};var M=function(t){var e={};return function(t,e){Object.defineProperties(t,e)}(this,s),Object.keys(s).forEach((function(t){e[t]=s[t].default})),Object.assign(this,e,t),this.prepare(),this.attachPage(),this.createCtx(),this.observer(),this.cutt(),this.methods(),this.init(),this.update(),this};return M.prototype.init=function(){var t=this.src;return this.version="1.3.9","function"===typeof this.onReady&&this.onReady(this.ctx,this),t?this.pushOrign(t):this.updateCanvas(),n(this,!1,!1,!1),this.oldScale=1,this.newScale=1,this},Object.assign(M.prototype,T),M.prototype.prepare=function(){var t=this;t.attachPage=function(){var e=getCurrentPages(),n=e[e.length-1];Object.defineProperty(n,"wecropper",{get:function(){return console.warn("Instance will not be automatically bound to the page after v1.4.0\n\nPlease use a custom instance name instead\n\nExample: \nthis.mycropper = new WeCropper(options)\n\n// ...\nthis.mycropper.getCropperImage()"),t},configurable:!0})},t.createCtx=function(){var e=t.id,n=t.targetId;e?(t.ctx=t.ctx||uni.createCanvasContext(e),t.targetCtx=t.targetCtx||uni.createCanvasContext(n)):console.error("constructor: create canvas context failed, 'id' must be valuable")},t.deviceRadio=h/750},M.prototype.observer=function(){var t=this;t.on=function(e,n){return b.indexOf(e)>-1?g(n)&&("ready"===e?n(t):t["on"+function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(e)]=n):console.error("event: "+e+" is invalid"),t}},M.prototype.methods=function(){var t=this,e=t.width,n=t.height,o=t.id,r=t.targetId,i=t.pixelRatio,a=t.cut,c=a.x;void 0===c&&(c=0);var u=a.y;void 0===u&&(u=0);var s=a.width;void 0===s&&(s=e);var d=a.height;void 0===d&&(d=n),t.updateCanvas=function(e){return t.croperTarget&&t.ctx.drawImage(t.croperTarget,t.imgLeft,t.imgTop,t.scaleWidth,t.scaleHeight),g(t.onBeforeDraw)&&t.onBeforeDraw(t.ctx,t),t.setBoundStyle(t.boundStyle),t.ctx.draw(!1,e),t},t.pushOrigin=t.pushOrign=function(e){return t.src=e,g(t.onBeforeImageLoad)&&t.onBeforeImageLoad(t.ctx,t),x({src:e}).then((function(e){var n=e.width/e.height,o=s/d;return t.croperTarget=e.path,n<o?(t.rectX=c,t.baseWidth=s,t.baseHeight=s/n,t.rectY=u-Math.abs((d-t.baseHeight)/2)):(t.rectY=u,t.baseWidth=d*n,t.baseHeight=d,t.rectX=c-Math.abs((s-t.baseWidth)/2)),t.imgLeft=t.rectX,t.imgTop=t.rectY,t.scaleWidth=t.baseWidth,t.scaleHeight=t.baseHeight,t.update(),new Promise((function(e){t.updateCanvas(e)}))})).then((function(){g(t.onImageLoad)&&t.onImageLoad(t.ctx,t)}))},t.removeImage=function(){return t.src="",t.croperTarget="",m(t.ctx)},t.getCropperBase64=function(t){void 0===t&&(t=function(){}),I.convertToBMP({canvasId:o,x:c,y:u,width:s,height:d},t)},t.getCropperImage=function(e,n){var a=e,h={canvasId:o,x:c,y:u,width:s,height:d},p=function(){return Promise.resolve()};return v(a)&&a.original&&(p=function(){return t.targetCtx.drawImage(t.croperTarget,t.imgLeft*i,t.imgTop*i,t.scaleWidth*i,t.scaleHeight*i),h={canvasId:r,x:c*i,y:u*i,width:s*i,height:d*i},m(t.targetCtx)}),p().then((function(){v(a)&&(h=Object.assign({},h,a)),g(a)&&(n=a);var t=h.componentContext?[h,h.componentContext]:[h];return w.apply(null,t)})).then((function(e){var o=e.tempFilePath;return g(n)?n.call(t,o,null):o})).catch((function(e){if(!g(n))throw e;n.call(t,null,e)}))}},M.prototype.cutt=function(){var t=this,e=t.width,n=t.height,o=t.cut,r=o.x;void 0===r&&(r=0);var i=o.y;void 0===i&&(i=0);var a=o.width;void 0===a&&(a=e);var c=o.height;void 0===c&&(c=n),t.outsideBound=function(e,n){t.imgLeft=e>=r?r:t.scaleWidth+e-r<=a?r+a-t.scaleWidth:e,t.imgTop=n>=i?i:t.scaleHeight+n-i<=c?i+c-t.scaleHeight:n},t.setBoundStyle=function(o){void 0===o&&(o={});var u=o.color;void 0===u&&(u="#04b00f");var s=o.mask;void 0===s&&(s="rgba(0, 0, 0, 0.3)");var d=o.lineWidth;void 0===d&&(d=1);var h=d/2,p=[{start:{x:r-h,y:i+10-h},step1:{x:r-h,y:i-h},step2:{x:r+10-h,y:i-h}},{start:{x:r-h,y:i+c-10+h},step1:{x:r-h,y:i+c+h},step2:{x:r+10-h,y:i+c+h}},{start:{x:r+a-10+h,y:i-h},step1:{x:r+a+h,y:i-h},step2:{x:r+a+h,y:i+10-h}},{start:{x:r+a+h,y:i+c-10+h},step1:{x:r+a+h,y:i+c+h},step2:{x:r+a-10+h,y:i+c+h}}];t.ctx.beginPath(),t.ctx.setFillStyle(s),t.ctx.fillRect(0,0,r,n),t.ctx.fillRect(r,0,a,i),t.ctx.fillRect(r,i+c,a,n-i-c),t.ctx.fillRect(r+a,0,e-r-a,n),t.ctx.fill(),p.forEach((function(e){t.ctx.beginPath(),t.ctx.setStrokeStyle(u),t.ctx.setLineWidth(d),t.ctx.moveTo(e.start.x,e.start.y),t.ctx.lineTo(e.step1.x,e.step1.y),t.ctx.lineTo(e.step2.x,e.step2.y),t.ctx.stroke()}))}},M.prototype.update=function(){var t=this;t.src&&(t.__oneTouchStart=function(e){t.touchX0=Math.round(e.x),t.touchY0=Math.round(e.y)},t.__oneTouchMove=function(e){var n,o;if(t.touchended)return t.updateCanvas();n=Math.round(e.x-t.touchX0),o=Math.round(e.y-t.touchY0);var r=Math.round(t.rectX+n),i=Math.round(t.rectY+o);t.outsideBound(r,i),t.updateCanvas()},t.__twoTouchStart=function(e,n){var o,r,i;t.touchX1=Math.round(t.rectX+t.scaleWidth/2),t.touchY1=Math.round(t.rectY+t.scaleHeight/2),o=Math.round(n.x-e.x),r=Math.round(n.y-e.y),i=Math.round(Math.sqrt(o*o+r*r)),t.oldDistance=i},t.__twoTouchMove=function(e,n){var o=t.oldScale,r=t.oldDistance,i=t.scale,a=t.zoom;t.newScale=function(t,e,n,o,r){var i,a,c;return i=Math.round(r.x-o.x),a=Math.round(r.y-o.y),c=Math.round(Math.sqrt(i*i+a*a)),t+.001*n*(c-e)}(o,r,a,e,n),t.newScale<=1&&(t.newScale=1),t.newScale>=i&&(t.newScale=i),t.scaleWidth=Math.round(t.newScale*t.baseWidth),t.scaleHeight=Math.round(t.newScale*t.baseHeight);var c=Math.round(t.touchX1-t.scaleWidth/2),u=Math.round(t.touchY1-t.scaleHeight/2);t.outsideBound(c,u),t.updateCanvas()},t.__xtouchEnd=function(){t.oldScale=t.newScale,t.rectX=t.imgLeft,t.rectY=t.imgTop})},M}))}).call(this,n("0ee4"))},a48b:function(t,e,n){"use strict";n.r(e);var o=n("1c7b"),r=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},de91:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"cropper-wrapper",style:{height:t.cropperOpt.height+"px"}},[n("v-uni-canvas",{staticClass:"cropper",style:{width:t.cropperOpt.width,height:t.cropperOpt.height,backgroundColor:"rgba(0, 0, 0, 0.8)"},attrs:{"disable-scroll":!0,"canvas-id":"cropper",id:"cropper"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchStart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchEnd.apply(void 0,arguments)}}}),n("v-uni-canvas",{staticClass:"cropper",style:{position:"fixed",top:"-"+t.cropperOpt.width*t.cropperOpt.pixelRatio+"px",left:"-"+t.cropperOpt.height*t.cropperOpt.pixelRatio+"px",width:t.cropperOpt.width*t.cropperOpt.pixelRatio+"px",height:""+t.cropperOpt.height*t.cropperOpt.pixelRatio},attrs:{"disable-scroll":!0,"canvas-id":"targetId",id:"targetId"}})],1),n("v-uni-view",{staticClass:"cropper-buttons safe-area-padding",style:{height:t.bottomNavHeight+"px"}},[n("v-uni-view",{staticClass:"upload",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadTap.apply(void 0,arguments)}}},[t._v("选择图片")]),n("v-uni-view",{staticClass:"getCropperImage",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCropperImage(!1)}}},[t._v("确定")])],1)],1)},r=[]}}]);