(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-crm-genJin-add"],{"0f5e":function(e,t,n){"use strict";function a(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1;n=n>=10?n:"0"+n;var a=e.getDate();a=a>=10?a:"0"+a;var i=t+"-"+n+"-"+a+" 00:00:00",l=new Date(i),r=(e.getDay(),l.getTime()),u=r+864e5;return[r,u]}n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.dateArr=function(e){for(var t=[],n=(new Date).getTime(),a=0;a<e;a++){var i=new Date(n-864e5*(a+1)),l=i.getMonth()+1,r=i.getDate();l=l>9?l:"0"+l,r=r>9?r:"0"+r,t.unshift(l+"/"+r)}return t},t.dateYZFun=function(e){if(e){var t=a();return e>t[0]&&e<t[1]}return!1},t.getDayByNumFun=function(e,t){var n=new Date,a=n.getFullYear(),i=n.getMonth()+1;i=i>=10?i:"0"+i;var l=n.getDate();l=l>=10?l:"0"+l;var r=a+"-"+i+"-"+l+" 00:00:00",u=new Date(r),s=(n.getDay(),u.getTime()),o=s-864e5*e;if(t){var d=a+"-"+i+"-"+l,c=new Date(o),g=c.getFullYear(),f=c.getMonth()+1;f=f>=10?f:"0"+f;var v=c.getDate();return v=v>=10?v:"0"+v,[o,s,g+"-"+f+"-"+v,d]}return[o,s]},t.getDayFun=a,t.getMonthFun=function(){var e=new Date,t=e.getMonth(),n=e.getFullYear(),a=new Date(n,t,1),i=new Date(n,t+1,0);return[a.getTime(),i.getTime()+864e5]},t.getNowDate=function(e){var t=new Date,n=t.getFullYear(),a=t.getMonth()+1;a=a>=10?a:"0"+a;var i=t.getDate();i=i>=10?i:"0"+i;var l=t.getHours();l=l>=10?l:"0"+l;var r=t.getMinutes();r=r>=10?r:"0"+r;var u,s=t.getSeconds();s=s>=10?s:"0"+s,u=e?n+"-"+a+"-"+i+" "+l+":"+r:n+"-"+a+"-"+i+" "+l+":"+r+":"+s;var o=t.getTime();return{nowDate:u,st:o}},t.getSZDateFun=function(){var e,t,n=new Date,a=new Date;return e=new Date(n.setDate(n.getDate()-6-n.getDay())).setHours(0,0,0,0),t=new Date(a.setDate(a.getDate()-a.getDay())).setHours(0,0,0,0)+864e5,[e,t]},t.getTjDate=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1;n=n>=10?n:"0"+n;var a=e.getDate();a=a>=10?a:"0"+a;var i=e.getHours()+1;i=i>=10?i:"0"+i;var l=t+"-"+n+"-"+a+" "+i+":00",r=new Date(l).getTime(),u=t+"-"+n+"-"+a+" "+i+":30",s=new Date(u).getTime();return{startDate:l,endDate:u,st:r,et:s}},t.getWeekFun=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1;n=n>=10?n:"0"+n;var a=e.getDate();a=a>=10?a:"0"+a;var i=t+"-"+n+"-"+a+" 00:00:00",l=new Date(i),r=e.getDay(),u=l.getTime();r=0==r?7:r;var s=u-864e5*(r-1),o=u+864e5*(8-r);return[s,o]},t.getXyDayFun=function(e){e+=" 00:00:00";var t=new Date(e),n=t.getTime()+864e5,a=new Date(n),i=a.getFullYear(),l=a.getMonth()+1;l=l>=10?l:"0"+l;var r=a.getDate();return r=r>=10?r:"0"+r,i+"-"+l+"-"+r},t.lastMonthFun=function(){var e,t,n=new Date,a=new Date(n.setMonth(n.getMonth()-1));e=new Date(a.setDate(1)).setHours(0,0,0,0);var i=new Date(e);return t=new Date(new Date(i.setMonth(i.getMonth()+1)).setMilliseconds(-1)).getTime(),[e,t]},n("3efd")},1696:function(e,t,n){"use strict";n.r(t);var a=n("71eb"),i=n.n(a);for(var l in a)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(l);t["default"]=i.a},1851:function(e,t,n){"use strict";var a=n("8bdb"),i=n("84d6"),l=n("1cb5");a({target:"Array",proto:!0},{fill:i}),l("fill")},"237b":function(e,t,n){"use strict";n.r(t);var a=n("4239"),i=n.n(a);for(var l in a)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(l);t["default"]=i.a},"2a35":function(e,t,n){var a=n("c86c");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 郑志平\r\n * 2021-12-06\r\n */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-select__action[data-v-5e9568b0]{position:relative;line-height:%?70?%;height:%?70?%}.u-select__action__icon[data-v-5e9568b0]{position:absolute;right:%?20?%;top:50%;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:1}.u-select__action__icon--reverse[data-v-5e9568b0]{-webkit-transform:rotate(-180deg) translateY(50%);transform:rotate(-180deg) translateY(50%)}.u-select__hader__title[data-v-5e9568b0]{color:#606266}.u-select--border[data-v-5e9568b0]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-select__header[data-v-5e9568b0]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;height:%?80?%;padding:0 %?40?%}.u-select__body[data-v-5e9568b0]{width:100%;height:%?500?%;overflow:hidden;background-color:#fff}.u-select__body__picker-view[data-v-5e9568b0]{height:100%;box-sizing:border-box}.u-select__body__picker-view__item[data-v-5e9568b0]{display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:%?32?%;color:#303133;padding:0 %?8?%}',""]),e.exports=t},"301b":function(e,t,n){"use strict";var a=n("4ab9"),i=n.n(a);i.a},"3ede":function(e,t,n){var a=n("c86c");t=a(!1),t.push([e.i,"uni-page-body[data-v-2e9aa259]{background-color:#f8f8f8;padding-bottom:%?260?%}body.?%PAGE?%[data-v-2e9aa259]{background-color:#f8f8f8}.u-radio[data-v-2e9aa259]{width:%?200?%!important}",""]),e.exports=t},4239:function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("64aa"),n("1851"),n("aa9c"),n("fd3c");var a={props:{list:{type:Array,default:function(){return[]}},border:{type:Boolean,default:!0},value:{type:Boolean,default:!1},cancelColor:{type:String,default:"#606266"},confirmColor:{type:String,default:"#2979ff"},zIndex:{type:[String,Number],default:0},safeAreaInsetBottom:{type:Boolean,default:!1},maskCloseAble:{type:Boolean,default:!0},defaultValue:{type:Array,default:function(){return[0]}},mode:{type:String,default:"single-column"},valueName:{type:String,default:"value"},labelName:{type:String,default:"label"},childName:{type:String,default:"children"},title:{type:String,default:""},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确认"}},data:function(){return{defaultSelector:[0],columnData:[],selectValue:[],lastSelectIndex:[],columnNum:0,moving:!1}},watch:{value:{immediate:!0,handler:function(e){var t=this;e&&setTimeout((function(){return t.init()}),10)}}},computed:{uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},methods:{pickstart:function(){},pickend:function(){},init:function(){this.setColumnNum(),this.setDefaultSelector(),this.setColumnData(),this.setSelectValue()},setDefaultSelector:function(){this.defaultSelector=this.defaultValue.length==this.columnNum?this.defaultValue:Array(this.columnNum).fill(0),this.lastSelectIndex=this.$u.deepClone(this.defaultSelector)},setColumnNum:function(){if("single-column"==this.mode)this.columnNum=1;else if("mutil-column"==this.mode)this.columnNum=this.list.length;else if("mutil-column-auto"==this.mode){var e=1,t=this.list;while(t[0][this.childName])t=t[0]?t[0][this.childName]:{},e++;this.columnNum=e}},setColumnData:function(){var e=[];if(this.selectValue=[],"mutil-column-auto"==this.mode)for(var t=this.list[this.defaultSelector.length?this.defaultSelector[0]:0],n=0;n<this.columnNum;n++)0==n?(e[n]=this.list,t=t[this.childName]):(e[n]=t,t=t[this.defaultSelector[n]][this.childName]);else"single-column"==this.mode?e[0]=this.list:e=this.list;this.columnData=e},setSelectValue:function(){for(var e=null,t=0;t<this.columnNum;t++){e=this.columnData[t][this.defaultSelector[t]];var n={value:e?e[this.valueName]:null,label:e?e[this.labelName]:null};e&&e.extra&&(n.extra=e.extra),this.selectValue.push(n)}},columnChange:function(e){var t=this,n=null,a=e.detail.value;if(this.selectValue=[],"mutil-column-auto"==this.mode){this.lastSelectIndex.map((function(e,t){e!=a[t]&&(n=t)})),this.defaultSelector=a;for(var i=n+1;i<this.columnNum;i++)this.columnData[i]=this.columnData[i-1][i-1==n?a[n]:0][this.childName],this.defaultSelector[i]=0;a.map((function(e,n){var i=t.columnData[n][a[n]],l={value:i?i[t.valueName]:null,label:i?i[t.labelName]:null};i&&void 0!==i.extra&&(l.extra=i.extra),t.selectValue.push(l)})),this.lastSelectIndex=a}else if("single-column"==this.mode){var l=this.columnData[0][a[0]],r={value:l?l[this.valueName]:null,label:l?l[this.labelName]:null};l&&void 0!==l.extra&&(r.extra=l.extra),this.selectValue.push(r)}else"mutil-column"==this.mode&&a.map((function(e,n){var i=t.columnData[n][a[n]],l={value:i?i[t.valueName]:null,label:i?i[t.labelName]:null};i&&void 0!==i.extra&&(l.extra=i.extra),t.selectValue.push(l)}))},close:function(){this.$emit("input",!1)},getResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&this.$emit(e,this.selectValue),this.close()},selectHandler:function(){this.$emit("click")}}};t.default=a},"4a8c":function(e,t,n){"use strict";var a=n("7b9d"),i=n.n(a);i.a},"4ab9":function(e,t,n){var a=n("3ede");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("967d").default;i("65bc0216",a,!0,{sourceMap:!1,shadowMode:!1})},5468:function(e,t,n){"use strict";n.r(t);var a=n("d25a"),i=n("1696");for(var l in i)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(l);n("301b");var r=n("828b"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"2e9aa259",null,!1,a["a"],void 0);t["default"]=u.exports},"71eb":function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("e966");var a=n("0f5e"),i=n("d2ab"),l="",r={data:function(){return{selectShow:!1,selectList:[],selectType:"",DateShow:!1,pickerTimeParams:{year:!0,month:!0,day:!0,hour:!0,minute:!0,timestamp:!0},clientName:"",clientId:"",glkhLxr:"",glkhLxrId:"",gjContent:"",type:"外出拜访",states:"有需求跟进",gjDateType:"",genjin_date:"",next_gjDate:"",next_gjDateTime:"",gjAddr:"",orderType:"",glOrder:"",glOrderId:"",action:"http://www.example.com/upload",fileList:[],pageType:"",xgInfoObj:{},defaulTime:"",clientDisabled:!1,glOrderIdDisabled:!1,isQywx:!1,external_userid:"",pageT:""}},onLoad:function(e){l=this;var t=(0,a.getNowDate)(!0);l.defaulTime=t.nowDate,l.genjin_date=t.st,e.clientName&&"undefined"!=e.clientName&&(l.clientName=e.clientName),e.clientId&&"undefined"!=e.clientName&&(l.clientId=e.clientId,l.clientDisabled=!0),"true"===e.isQywx&&(l.isQywx=!0),e.external_userid&&(l.external_userid=e.external_userid,l.clientDisabled=!0),e.glkhLxr&&(l.glkhLxr=e.glkhLxr),e.glkhLxrId&&(l.glkhLxrId=e.glkhLxrId),e.glOrderId&&(l.glOrderId=e.glOrderId,l.glOrderIdDisabled=!0),e.glOrder&&(l.glOrder=e.glOrder),e.orderType&&(l.orderType=e.orderType),e.pageT&&(l.pageT=e.pageT),"update"==e.type&&(l.setDataFun(),l.pageType="update",uni.setNavigationBarTitle({title:"修改跟进信息"})),uni.$on("gjKehuBindFun",l.gjKehuBindFun),uni.$on("gjLxrBindFun",l.gjLxrBindFun),uni.$on("gjOrderBindFun",l.gjOrderBindFun)},onBackPress:function(){uni.$off("gjKehuBindFun",l.gjKehuBindFun),uni.$off("gjLxrBindFun",l.gjLxrBindFun),uni.$off("gjOrderBindFun",l.gjOrderBindFun)},methods:{chooseAddrFun:function(){uni.chooseLocation({success:function(e){l.gjAddr=e.address}})},pickerSelectFun:function(e){if("跟进类型"==e)l.selectList=[{value:0,label:"外出拜访"},{value:1,label:"客户面谈"},{value:2,label:"客户来电"},{value:3,label:"客户来访"},{value:4,label:"在线交流"},{value:5,label:"发送资料"},{value:6,label:"售后回访"},{value:7,label:"方案整理"},{value:8,label:"其他方面"}];else if("跟进状态"==e)l.selectList=[{value:0,label:"有需求跟进"},{value:1,label:"促单"},{value:2,label:"放弃"}];else if("单据类型"==e){if(l.glOrderIdDisabled)return;l.selectList=[{value:0,label:"商机"},{value:1,label:"报价单"},{value:2,label:"合同订单"},{value:3,label:"发票"},{value:4,label:"回款计划"},{value:5,label:"回款单"},{value:6,label:"退货退款"}]}l.selectShow=!0,l.selectType=e},selectConfirmFun:function(e){"跟进类型"==l.selectType?l.type=e[0].label:"跟进状态"==l.selectType?l.states=e[0].label:"单据类型"==l.selectType&&(l.orderType=e[0].label)},pickerTimeConfirmFun:function(e){var t=parseInt(e.timestamp+"000"),n=(new Date).getTime();if("gjDate"==l.gjDateType){if(t>n)return void uni.$myModalFun("新建跟进记录的跟进时间，不能大于当前时间，请修改！");l.genjin_date=t}else{if(t<n)return void uni.$myModalFun("下次跟进记录的跟进时间，不能小于当前时间，请修改！");l.next_gjDate=t}},imgFillUploadChangeFun:function(e){},submitBtnFun:function(){if(""!=l.gjContent)if(""!=l.clientName){var e={req:{gjContent:l.gjContent,type:l.type,genjin_date:l.genjin_date,gjAddr:l.gjAddr,orderType:l.orderType,glOrder:l.glOrder,glOrderId:l.glOrderId,next_gjDate:l.next_gjDate},pageType:l.pageT};l.isQywx?e.req.external_userid=l.external_userid:(e.req.clientId=l.clientId,e.req.glkhLxrId=l.glkhLxrId,e.req.glkhLxr=l.glkhLxr);var t="addGenjin";"update"==l.pageType?(t="update",e._id=l.xgInfoObj._id,e.req.update_date=(new Date).getTime(),l.isQywx?e.req.updateUid=uni.$qwUser.userid:e.req.updateUid=uni.$userInfo._id,uni.showLoading({title:"修改中..."})):(e.req.create_date=(new Date).getTime(),e.req.update_date=(new Date).getTime(),l.isQywx?(e.req.cjRenId=uni.$qwUser.userid,e.req.cjRen=uni.$qwUser.name,e.req.qywxData=!0):(e.req.cjRen=uni.$userInfo.nickname,e.req.cjRenId=uni.$userInfo._id),uni.showLoading({title:"提交中..."}));var n={action:t,params:e};(0,i.crmGenJinApi)(n).then((function(n){"update"==t?(uni.showToast({title:"修改成功！",icon:"none",duration:888,mask:!0}),setTimeout((function(){uni.navigateBack()}),888)):(uni.showToast({title:"新增成功！",icon:"none",duration:888,mask:!0}),e.req._id=n.result.id,e.req.clientName=l.clientName,uni.$emit("addGjItemInListFun"),setTimeout((function(){l.isQywx?uni.redirectTo({url:"./detail?index=0&isQywx=true&_id="+n.result.id}):uni.redirectTo({url:"./detail?index=0&_id="+n.result.id})}),888))}))}else uni.$myModalFun("关联客户不能为空，请选择！");else uni.$myModalFun("跟进内容不能为空，请输入！")},selectKehuFun:function(){l.clientDisabled||(l.isQywx?uni.navigateTo({url:"/qywxPage/view/qywxClient/qywxClient?type=addGjjl"}):uni.navigateTo({url:"../kehu/kehu?type=addGjjl"}))},gjKehuBindFun:function(e){l.isQywx?(""!=l.external_userid&&l.external_userid!=e.external_userid&&(l.glkhLxr="",l.glkhLxrId="",l.glOrder="",l.glOrderId=""),l.external_userid=e.external_userid,l.clientName=e.clientName):(""!=l.clientId&&l.clientId!=e.clientId&&(l.glkhLxr="",l.glkhLxrId="",l.glOrder="",l.glOrderId=""),l.clientId=e.clientId,l.clientName=e.clientName)},selectLxrFun:function(){l.clientId?uni.navigateTo({url:"../lianxiren/lianxiren?type=addGjjl&clientId="+l.clientId}):uni.$myModalFun("请先关联相关客户！")},gjLxrBindFun:function(e){l.glkhLxrId=e.lxrId,l.glkhLxr=e.lxrName},glOrderFun:function(){if(!l.glOrderIdDisabled)if(l.isQywx||l.clientId)if(!l.isQywx||l.external_userid)if(l.orderType){var e="";"商机"==l.orderType?e=l.isQywx?"../shangji/shangji?type=genjin&isQywx=true&external_userid="+l.external_userid:"../shangji/shangji?type=genjin&clientId="+l.clientId:"报价单"==l.orderType?e=l.isQywx?"../baoJiaDan/baoJiaDan?type=genjin&isQywx=true&external_userid="+l.external_userid:"../baoJiaDan/baoJiaDan?type=genjin&clientId="+l.clientId:"合同订单"==l.orderType?e=l.isQywx?"../hetong/hetong?type=genjin&isQywx=true&external_userid="+l.external_userid:"../hetong/hetong?type=genjin&clientId="+l.clientId:"发票"==l.orderType?e=l.isQywx?"../faPiao/faPiao?type=genjin&isQywx=true&external_userid="+l.external_userid:"../faPiao/faPiao?type=genjin&clientId="+l.clientId:"回款计划"==l.orderType?e=l.isQywx?"../huikuanJH/huikuanJH?type=genjin&isQywx=true&external_userid="+l.external_userid:"../huikuanJH/huikuanJH?type=genjin&clientId="+l.clientId:"回款单"==l.orderType?e=l.isQywx?"../huikuan/huikuan?type=genjin&isQywx=true&external_userid="+l.external_userid:"../huikuan/huikuan?type=genjin&clientId="+l.clientId:"退货退款"==l.orderType&&(e=l.isQywx?"../shangji/shangji?type=genjin&isQywx=true&external_userid="+l.external_userid:"../shangji/shangji?type=genjin&clientId="+l.clientId),uni.navigateTo({url:e})}else uni.$myModalFun("请先选择关联单据类型！");else uni.$myModalFun("请先关联相关客户！");else uni.$myModalFun("请先关联相关客户！")},gjOrderBindFun:function(e){l.glOrderId=e._id,"商机"==l.orderType?l.glOrder=e.sjCode:"报价单"==l.orderType?l.glOrder=e.bjdCode:"合同订单"==l.orderType?l.glOrder=e.htCode:"发票"==l.orderType?l.glOrder=e.fpCode:"回款计划"==l.orderType?l.glOrder=e.hkjhCode:"回款单"==l.orderType?l.glOrder=e.hkdCode:"退货退款"==l.orderType&&(l.glOrder=e.ttCode)},setDataFun:function(){var e=uni.$infoObj;l.clientDisabled=!0,l.xgInfoObj=uni.$infoObj,l.isQywx?(l.external_userid=e.external_userid,l.gjContent=e.gjContent,l.type=e.type,l.genjin_date=e.genjin_date,l.gjAddr=e.gjAddr,l.clientName=e.clientName,l.clientId=e.clientId,l.orderType=e.orderType,l.glOrder=e.glOrder,l.glOrderId=e.glOrderId,l.next_gjDate=e.next_gjDate):(l.gjContent=e.gjContent,l.type=e.type,l.genjin_date=e.genjin_date,l.gjAddr=e.gjAddr,l.clientName=e.clientName,l.clientId=e.clientId,l.glkhLxr=e.glkhLxr,l.glkhLxrId=e.glkhLxrId,l.orderType=e.orderType,l.glOrder=e.glOrder,l.glOrderId=e.glOrderId,l.next_gjDate=e.next_gjDate)}}};t.default=r},"7b9d":function(e,t,n){var a=n("2a35");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("967d").default;i("79c46dcd",a,!0,{sourceMap:!1,shadowMode:!1})},"89ff":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return a}));var a={uPopup:n("9e2d").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"u-select"},[n("u-popup",{attrs:{maskCloseAble:e.maskCloseAble,mode:"bottom",popup:!1,length:"auto",safeAreaInsetBottom:e.safeAreaInsetBottom,"z-index":e.uZIndex},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[n("v-uni-view",{staticClass:"u-select"},[n("v-uni-view",{staticClass:"u-select__header",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t)}}},[n("v-uni-view",{staticClass:"u-select__header__cancel u-select__header__btn",style:{color:e.cancelColor},attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getResult("cancel")}}},[e._v(e._s(e.cancelText))]),n("v-uni-view",{staticClass:"u-select__header__title"},[e._v(e._s(e.title))]),n("v-uni-view",{staticClass:"u-select__header__confirm u-select__header__btn",style:{color:e.moving?e.cancelColor:e.confirmColor},attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{touchmove:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t)},click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.getResult("confirm")}}},[e._v(e._s(e.confirmText))])],1),n("v-uni-view",{staticClass:"u-select__body"},[n("v-uni-picker-view",{staticClass:"u-select__body__picker-view",attrs:{value:e.defaultSelector},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.columnChange.apply(void 0,arguments)},pickstart:function(t){arguments[0]=t=e.$handleEvent(t),e.pickstart.apply(void 0,arguments)},pickend:function(t){arguments[0]=t=e.$handleEvent(t),e.pickend.apply(void 0,arguments)}}},e._l(e.columnData,(function(t,a){return n("v-uni-picker-view-column",{key:a},e._l(t,(function(t,a){return n("v-uni-view",{key:a,staticClass:"u-select__body__picker-view__item"},[n("v-uni-view",{staticClass:"u-line-1"},[e._v(e._s(t[e.labelName]))])],1)})),1)})),1)],1)],1)],1)],1)},l=[]},d25a:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return a}));var a={uIcon:n("97c4").default,uInput:n("3752").default,uButton:n("2599").default,uSelect:n("ddea").default,uPicker:n("b204c").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"btName"},[e._v("关联信息")]),n("v-uni-view",{staticClass:"flex-white-plr26 ptb20 mt32 bdb_f5",class:e.clientDisabled?"disabledStyle":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectKehuFun.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"mr26"},[e._v("关联客户"),n("v-uni-text",{staticClass:"redXingh"},[e._v("*")])],1),n("v-uni-view",{class:e.clientName?"":"cBlack"},[e._v(e._s(e.clientName?e.clientName:"请选择")),n("u-icon",{staticClass:"ml26",attrs:{name:"arrow-right",size:"40",color:"#888888"}})],1)],1),e.isQywx?e._e():n("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectLxrFun.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"mr26"},[e._v("联系人")]),n("v-uni-view",{class:e.glkhLxr?"":"cBlack"},[e._v(e._s(e.glkhLxr?e.glkhLxr:"请选择")),n("u-icon",{staticClass:"ml26",attrs:{name:"arrow-right",size:"40",color:"#888888"}})],1)],1),n("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5",class:e.glOrderIdDisabled?"disabledStyle":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerSelectFun("单据类型")}}},[n("v-uni-text",{staticClass:"mr26"},[e._v("单据类型")]),n("v-uni-view",{class:e.orderType?"":"cBlack"},[e._v(e._s(e.orderType?e.orderType:"请选择")),n("u-icon",{staticClass:"ml26",attrs:{name:"arrow-right",size:"40",color:"#888888"}})],1)],1),n("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5",class:e.glOrderIdDisabled?"disabledStyle":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.glOrderFun.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"mr26"},[e._v("关联单据")]),n("v-uni-view",{class:e.glOrder?"":"cBlack"},[e._v(e._s(e.glOrder?e.glOrder:"请选择")),n("u-icon",{staticClass:"ml26",attrs:{name:"arrow-right",size:"40",color:"#888888"}})],1)],1),n("v-uni-view",{staticClass:"btName"},[e._v("基础信息")]),n("v-uni-view",{staticClass:"flex-white-plr26-column ptb20 mt32 bdb_f5"},[n("v-uni-view",{staticStyle:{"margin-bottom":"8rpx"}},[n("v-uni-text",[e._v("跟进内容")]),n("v-uni-text",{staticClass:"redXingh"},[e._v("*")])],1),n("u-input",{attrs:{type:"textarea",border:!0,height:100,"auto-height":!0},model:{value:e.gjContent,callback:function(t){e.gjContent=t},expression:"gjContent"}})],1),n("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerSelectFun("跟进类型")}}},[n("v-uni-text",{staticClass:"mr26"},[e._v("跟进类型"),n("v-uni-text",{staticClass:"redXingh"},[e._v("*")])],1),n("v-uni-view",{class:e.type?"":"cBlack"},[e._v(e._s(e.type?e.type:"请选择")),n("u-icon",{staticClass:"ml26",attrs:{name:"arrow-right",size:"40",color:"#888888"}})],1)],1),n("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.DateShow=!0,e.gjDateType="gjDate"}}},[n("v-uni-text",{staticClass:"mr26"},[e._v("跟进时间")]),n("v-uni-view",{staticClass:"w420"},[e._v(e._s(e.$u.timeFormat(e.genjin_date,"yyyy-mm-dd hh:MM:ss")))]),n("u-icon",{staticClass:"ml26",attrs:{name:"calendar",size:"40",color:"#888888"}})],1),n("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.DateShow=!0,e.gjDateType="next_gjDate"}}},[n("v-uni-text",{staticClass:"mr26"},[e._v("下次跟进")]),n("v-uni-view",{staticClass:"w420"},[e.next_gjDate?n("v-uni-text",[e._v(e._s(e.$u.timeFormat(e.next_gjDate,"yyyy-mm-dd hh:MM:ss")))]):n("v-uni-text",{staticClass:"cBlack"},[e._v("请选择下次跟进时间")])],1),n("u-icon",{staticClass:"ml26",attrs:{name:"calendar",size:"40",color:"#888888"}})],1),n("v-uni-view",{staticClass:"flex-white-plr26 ptb20"},[n("v-uni-text",{staticClass:"mr26"},[e._v("跟进地址")]),n("u-input",{attrs:{placeholder:"请在此输入或点击右侧图标选择",height:35,"auto-height":!0,type:"textarea"},model:{value:e.gjAddr,callback:function(t){e.gjAddr=t},expression:"gjAddr"}}),n("u-icon",{staticClass:"ml26",attrs:{name:"map",size:"50",color:"#007AFF"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseAddrFun.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"submitView"},[n("u-button",{staticClass:"submitBtn",attrs:{type:"primary",ripple:!0,"ripple-bg-color":"#909399"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submitBtnFun.apply(void 0,arguments)}}},[e._v(e._s(e.pageType?"保存":"提交"))])],1),n("u-select",{attrs:{list:e.selectList},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.selectConfirmFun.apply(void 0,arguments)}},model:{value:e.selectShow,callback:function(t){e.selectShow=t},expression:"selectShow"}}),n("u-picker",{attrs:{params:e.pickerTimeParams,"safe-area-inset-bottom":!0,"end-year":"2100","default-time":e.defaulTime,mode:"time"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerTimeConfirmFun.apply(void 0,arguments)}},model:{value:e.DateShow,callback:function(t){e.DateShow=t},expression:"DateShow"}})],1)},l=[]},ddea:function(e,t,n){"use strict";n.r(t);var a=n("89ff"),i=n("237b");for(var l in i)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(l);n("4a8c");var r=n("828b"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"5e9568b0",null,!1,a["a"],void 0);t["default"]=u.exports}}]);