(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-crm-thread-gjDetail"],{"149e":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={bottomBox:e("59f0").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"btName"},[t._v("关联信息")]),e("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5"},[e("v-uni-text",{staticClass:"mr26"},[t._v("关联线索")]),t.infoObj.clientName?e("v-uni-view",{staticClass:"width276 color333 flexC"},[e("v-uni-text",[t._v(t._s(t.infoObj.clientName))])],1):e("v-uni-view",{staticClass:"width276"},[t._v("暂无")])],1),e("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5"},[e("v-uni-text",{staticClass:"mr26"},[t._v("跟进内容")]),t.infoObj.gjContent?e("v-uni-view",{staticClass:"width276 color333"},[t._v(t._s(t.infoObj.gjContent))]):e("v-uni-view",{staticClass:"width276"},[t._v("暂无")])],1),e("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5"},[e("v-uni-text",{staticClass:"mr26"},[t._v("跟进类型")]),t.infoObj.type?e("v-uni-view",{staticClass:"width276 color333"},[t._v(t._s(t.infoObj.type))]):e("v-uni-view",{staticClass:"width276"},[t._v("暂无")])],1),e("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5"},[e("v-uni-text",{staticClass:"mr26"},[t._v("跟进时间")]),t.infoObj.genjin_date?e("v-uni-view",{staticClass:"width276 color333"},[t._v(t._s(t.$u.timeFormat(t.infoObj.genjin_date,"yyyy年mm月dd日 hh时MM分ss秒")))]):e("v-uni-view",{staticClass:"width276"},[t._v("暂无")])],1),e("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5"},[e("v-uni-text",{staticClass:"mr26"},[t._v("跟进地址")]),t.infoObj.gjAddr?e("v-uni-view",{staticClass:"width276 color333"},[t._v(t._s(t.infoObj.gjAddr))]):e("v-uni-view",{staticClass:"width276"},[t._v("暂无")])],1),e("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5"},[e("v-uni-text",{staticClass:"mr26"},[t._v("下次跟进")]),t.infoObj.next_gjDate?e("v-uni-view",{staticClass:"width276 color333"},[t._v(t._s(t.$u.timeFormat(t.infoObj.next_gjDate,"yyyy年mm月dd日 hh时MM分ss秒")))]):e("v-uni-view",{staticClass:"width276"},[t._v("暂无")])],1),e("v-uni-view",{staticClass:"btName"},[t._v("系统信息")]),e("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5"},[e("v-uni-text",{staticClass:"mr26"},[t._v("创建人")]),t.infoObj.cjRenId?e("v-uni-view",{staticClass:"width276 color333"},[t._v(t._s(t.infoObj.cjRenName))]):e("v-uni-view",{staticClass:"width276"},[t._v("暂无")])],1),e("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5"},[e("v-uni-text",{staticClass:"mr26"},[t._v("创建时间")]),t.infoObj.create_date?e("v-uni-view",{staticClass:"width276 color333"},[t._v(t._s(t.$u.timeFormat(t.infoObj.create_date,"yyyy年mm月dd日 hh时MM分ss秒")))]):e("v-uni-view",{staticClass:"width276"},[t._v("暂无")])],1),e("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5"},[e("v-uni-text",{staticClass:"mr26"},[t._v("更新时间")]),t.infoObj.update_date?e("v-uni-view",{staticClass:"width276 color333"},[t._v(t._s(t.$u.timeFormat(t.infoObj.update_date,"yyyy年mm月dd日 hh时MM分ss秒")))]):e("v-uni-view",{staticClass:"width276"},[t._v("暂无")])],1),e("v-uni-view",{staticClass:"noMoreTs"},[t._v("暂无更多~")]),e("bottomBox",{staticClass:"bottomClass",attrs:{sheetList:t.sheetList},on:{pageGenjinFun:function(i){arguments[0]=i=t.$handleEvent(i),t.pageGenjinFun.apply(void 0,arguments)},pageDeleteShowFun:function(i){arguments[0]=i=t.$handleEvent(i),t.pageDeleteShowFun.apply(void 0,arguments)},pageBianjiFun:function(i){arguments[0]=i=t.$handleEvent(i),t.pageBianjiFun.apply(void 0,arguments)}}})],1)},s=[]},2696:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={uActionSheet:e("1db7").default,uSelect:e("ddea").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",[e("v-uni-view",{staticClass:"bottomBox"},[e("v-uni-view",{staticClass:"tabbarItem",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.sheetShowFun("add")}}},[e("v-uni-image",{staticClass:"sishirpx",attrs:{src:"/static/img/xinzeng.png"}}),e("v-uni-view",[t._v("新增")])],1),t.flags?e("v-uni-view",{staticClass:"tabbarItem",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.upImage.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"sishirpx",attrs:{src:"/static/img/zhuying.png"}}),e("v-uni-view",[t._v("主营产品")])],1):e("v-uni-view",{staticClass:"tabbarItem",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.wuquanxian.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"sishirpx",attrs:{src:"/static/img/zhuying.png"}}),e("v-uni-view",[t._v("主营产品")])],1),t.flags?e("v-uni-view",{staticClass:"tabbarItem",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.figure.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"sishirpxs",attrs:{src:"/static/img/qiyexx.png"}}),e("v-uni-view",[t._v("企业形象")])],1):e("v-uni-view",{staticClass:"tabbarItem",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.wuquanxian.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"sishirpxs",attrs:{src:"/static/img/qiyexx.png"}}),e("v-uni-view",[t._v("企业形象")])],1),t.flags?e("v-uni-view",{staticClass:"tabbarItem",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.bianjiFun.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"sishirpx",attrs:{src:"/static/img/bianji.png"}}),e("v-uni-view",[t._v("编辑")])],1):e("v-uni-view",{staticClass:"tabbarItem",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.wuquanxian.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"sishirpx",attrs:{src:"/static/img/bianji.png"}}),e("v-uni-view",[t._v("编辑")])],1)],1)],1),e("u-action-sheet",{attrs:{list:t.sList},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.sheetClickFun.apply(void 0,arguments)}},model:{value:t.moreIsShow,callback:function(i){t.moreIsShow=i},expression:"moreIsShow"}}),e("u-select",{attrs:{mode:"single-column","confirm-text":"确认分配","cancel-text":"取消分配",list:t.userList,"value-name":"_id","label-name":"nickname"},on:{confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.allotConfirmFun.apply(void 0,arguments)}},model:{value:t.allotShow,callback:function(i){t.allotShow=i},expression:"allotShow"}})],1)},s=[]},"2a9f":function(t,i,e){"use strict";e.r(i);var n=e("149e"),a=e("f31c");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("4f17");var o=e("828b"),u=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"6e188681",null,!1,n["a"],void 0);i["default"]=u.exports},"3c219":function(t,i,e){"use strict";var n=e("939a"),a=e.n(n);a.a},"4f17":function(t,i,e){"use strict";var n=e("cb56"),a=e.n(n);a.a},"59f0":function(t,i,e){"use strict";e.r(i);var n=e("2696"),a=e("ca10");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("3c219");var o=e("828b"),u=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"c67fc038",null,!1,n["a"],void 0);i["default"]=u.exports},"85e6":function(t,i){},"939a":function(t,i,e){var n=e("e2ec");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("967d").default;a("19d1f865",n,!0,{sourceMap:!1,shadowMode:!1})},ca10:function(t,i,e){"use strict";e.r(i);var n=e("ce62"),a=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},cb56:function(t,i,e){var n=e("ee51");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("967d").default;a("69330733",n,!0,{sourceMap:!1,shadowMode:!1})},ce62:function(t,i,e){"use strict";e("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("f555");var n=e("d2ab"),a=e("85e6"),s={name:"bottomBox",props:{item:{type:Object,default:function(){}},sheetList:{type:Array,default:function(){return[]}},addSheetList:{type:Array,default:function(){return[]}},isGhc:{type:Boolean,default:!1},isKh:{type:Boolean,default:!1}},data:function(){return{moreIsShow:!1,sList:[],sheetType:"",allotShow:!1,userList:[],flags:!1}},mounted:function(){uni.getStorageSync("WebToken_res").UserId==this.item.BelongUser?this.flags=!0:this.flags=!1},methods:{genjinFun:function(){this.$emit("pageGenjinFun")},sheetClickFun:function(t){"more"==this.sheetType?this.$emit("pageMoreIsShowFun",t):this.$emit("pageAddSheetFun",t)},bianjiFun:function(){this.$emit("pageBianjiFun")},upImage:function(){this.$emit("upImage")},figure:function(){this.$emit("xiangxiang")},wuquanxian:function(){uni.showToast({title:"您无权限修改！",duration:1600,icon:"none",mask:!0})},sheetShowFun:function(t){this.sList="add"==t?this.addSheetList:this.sheetList,this.sheetType=t,this.moreIsShow=!0},deleteDataFun:function(){this.$emit("pageDeleteShowFun")},lingquFun:function(){var t=this;uni.showModal({title:"提示",content:"是否确认领取客户名称为："+t.item.clientName+"的客户吗?",success:function(i){if(i.confirm){uni.showLoading({title:"领取中...",mask:!0});var e={action:"update",params:{_id:t.item._id,req:{status:1,fuZeRenId:uni.$userInfo._id,update_date:(new Date).getTime()}}};(0,n.crmKeHuApi)(e).then((function(i){t.addCzjlFun("领取"),t.$emit("cxPGetDataFun","领取成功"),uni.showToast({title:"领取成功！",duration:1600,icon:"none",mask:!0})}))}}})},allotFun:function(){this.userList.length>0?this.allotShow=!0:this.getUserLisByDepIdtFun()},allotConfirmFun:function(t){var i=t[0],e=this;uni.showModal({title:"提示",content:"是否确认将客户名称为："+e.item.clientName+"的客户分配给 - "+i.label+" - 吗?",success:function(t){var a=(new Date).getTime();if(t.confirm){uni.showLoading({title:"分配中...",mask:!0});var s={action:"update",params:{_id:e.item._id,req:{status:1,fuZeRenId:i.value,update_date:a}}};(0,n.crmKeHuApi)(s).then((function(t){var n=["修改  负责人为 "+i.label];e.addCzjlFun("编辑",n),e.$emit("cxPGetDataFun","分配成功"),uni.showToast({title:"更新成功！",duration:1600,icon:"none",mask:!0})}))}}})},getUserLisByDepIdtFun:function(){var t=this;uni.showLoading({title:"加载中...",mask:!0});var i={action:"getAllUserListByDepID",params:{depId:uni.$userInfo.depManager_Id,status:0}};(0,a.uidUserApi)(i).then((function(i){t.userList=i.result.data,t.allotShow=!0}))},addCzjlFun:function(t,i){var e={create_date:(new Date).getTime(),czRen:uni.$userInfo._id,pageType:"client",dataId:this.item._id,type:t};i&&i.length>0&&(e.content=i),uni.$czjlApiAddFun(e)}}};i.default=s},dcb7:function(t,i,e){"use strict";e("6a54");var n=e("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e("d2ab"),s=n(e("59f0")),o={components:{bottomBox:s.default},data:function(){return{infoObj:{},sheetList:[{text:"更换负责人"},{text:"放入客户池"},{text:"删除"}],cardIndex:0,isLoadSelectPageById:!1}},watch:{infoObj:function(t,i){}},onLoad:function(t){this.infoObj=uni.$gjInfo||{},this.cardIndex=t.index,t._id&&this.reLoadSelectPageByIdFun(t._id)},onShow:function(){this.isLoadSelectPageById&&this.reLoadSelectPageByIdFun(this.infoObj._id)},onBackPress:function(t){"backbutton"==t.from&&-1!=this.cardIndex&&uni.$emit("updateGjListByIndex",{index:this.cardIndex,obj:this.infoObj})},methods:{pageGenjinFun:function(){uni.navigateTo({url:"./addGj?clientName="+this.infoObj.clientName+"&clientId="+this.infoObj.clientId})},pageBianjiFun:function(){uni.$infoObj=this.infoObj,this.isLoadSelectPageById=!0,uni.navigateTo({url:"./addGj?type=update"})},pageDeleteShowFun:function(t){var i=this;uni.showModal({title:"提示",content:"是否确认删除该条跟进记录吗?",success:function(t){if(t.confirm){uni.showLoading({title:"删除中...",mask:!0});var e={action:"delete",params:{_id:i.infoObj._id}};(0,a.threadGjApi)(e).then((function(t){uni.showToast({title:"删除成功!",duration:888,icon:"none"}),uni.$emit("deleteCardFun",{index:i.cardIndex}),setTimeout((function(){uni.navigateBack()}),666)}))}}})},reLoadSelectPageByIdFun:function(t){var i=this;i.isLoadSelectPageById=!1,uni.showLoading({title:"加载中...",mask:!0});var e={action:"selectDetailById",params:{_id:t}};(0,a.threadGjApi)(e).then((function(t){var e=t.result.data;e.length>0?i.infoObj=e[0]:uni.showModal({title:"提示",content:"相关内容不存在，或者已被删除！",showCancel:!1,success:function(){uni.navigateBack()}})}))}}};i.default=o},e2ec:function(t,i,e){var n=e("c86c");i=n(!1),i.push([t.i,".bottomBox[data-v-c67fc038]{width:100%;height:55px;display:flex;align-items:center;justify-content:space-around;background-color:#fff;border-top:%?1?% solid #ddd;font-size:14px}.tabbarItem[data-v-c67fc038]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;padding:0 %?36?%}.tabbarItem[data-v-c67fc038]:active{background-color:#eee}.tabbarItem>.tabImg[data-v-c67fc038]{margin-bottom:%?8?%}.sishirpx[data-v-c67fc038]{width:%?45?%;height:%?45?%;margin-bottom:%?5?%}.sishirpxs[data-v-c67fc038]{width:%?50?%;height:%?45?%;margin-bottom:%?5?%}",""]),t.exports=i},ee51:function(t,i,e){var n=e("c86c");i=n(!1),i.push([t.i,"uni-page-body[data-v-6e188681]{background-color:#f8f8f8;padding-bottom:88px}body.?%PAGE?%[data-v-6e188681]{background-color:#f8f8f8}.color333[data-v-6e188681]{color:#666}.btName[data-v-6e188681]{margin-bottom:%?16?%}.flexC[data-v-6e188681]{display:flex;align-items:center}.p8Img[data-v-6e188681]{padding:%?8?%;width:%?40?%;height:%?40?%;margin-left:%?16?%}.p8[data-v-6e188681]{padding:%?8?%}.noMoreTs[data-v-6e188681]{width:100%;margin:%?32?% 0;text-align:center}.bottomClass[data-v-6e188681]{width:100%;position:fixed;bottom:0}",""]),t.exports=i},f31c:function(t,i,e){"use strict";e.r(i);var n=e("dcb7"),a=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a}}]);