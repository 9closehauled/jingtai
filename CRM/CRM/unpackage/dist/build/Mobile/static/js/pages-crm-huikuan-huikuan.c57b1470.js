(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-crm-huikuan-huikuan"],{"06da":function(e,t,a){"use strict";a.r(t);var r=a("1f3b"),i=a("f935");for(var n in i)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(n);a("fb73");var d=a("828b"),u=Object(d["a"])(i["default"],r["b"],r["c"],!1,null,"67d72e5a",null,!1,r["a"],void 0);t["default"]=u.exports},"0da49":function(e,t,a){"use strict";a.r(t);var r=a("3e6d"),i=a.n(r);for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);t["default"]=i.a},"1d47":function(e,t,a){var r=a("c86c");t=r(!1),t.push([e.i,".addBtn[data-v-2f041b10]{width:%?88?%;height:%?88?%;border-radius:50%;background-image:linear-gradient(45deg,#007aff,#0af);display:flex;align-items:center;justify-content:center;position:fixed;bottom:%?200?%;right:%?26?%;z-index:100}.addBtn[data-v-2f041b10]:active{background-image:linear-gradient(45deg,#0af,#007aff)}",""]),e.exports=t},"1f3b":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r}));var r={uIcon:a("97c4").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"myCard",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.gotoDetailFun.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cardTopName"},[e._v("回款编号："+e._s(e.item.hkdCode))]),a("v-uni-view",{staticClass:"cardRow"},[a("v-uni-view",[e._v("合同名称：")]),a("v-uni-view",[e._v(e._s(e.item.htName))])],1),a("v-uni-view",{staticClass:"cardRow"},[a("v-uni-view",[e._v("客户名称：")]),a("v-uni-view",[e._v(e._s(e.item.clientName))])],1),a("v-uni-view",{staticClass:"cardRow"},[a("v-uni-view",[e._v("回款方式：")]),a("v-uni-view",[e._v(e._s(e.item.hkdType))])],1),a("v-uni-view",{staticClass:"cardRow"},[a("v-uni-view",[e._v("回款金额：")]),a("v-uni-view",[e._v(e._s(e.item.hkdPrice))])],1),a("v-uni-view",{staticClass:"cardRow"},[a("v-uni-view",[e._v("回款日期：")]),a("v-uni-view",[e._v(e._s(e.$u.timeFormat(e.item.hkdDateTime,"yyyy-mm-dd")))])],1),e.item.fuZeRenId&&!e.isDetail?a("v-uni-view",{staticClass:"fzrAbsolute"},[a("v-uni-text",{staticClass:"fzrLeft"},[e._v("负责人：")]),a("v-uni-text",{staticClass:"fzrRight"},[e._v(e._s(e.item.fuZeRenName))])],1):e._e(),e.isDetail||e.isSelect?e._e():a("v-uni-view",{staticClass:"lookDetail"},[a("v-uni-text",[e._v("查看详情")]),a("u-icon",{attrs:{name:"arrow-right",size:"36"}})],1)],1)},n=[]},"2f77":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r}));var r={uIcon:a("97c4").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"addBtn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.gotoAdd.apply(void 0,arguments)}}},[a("u-icon",{attrs:{name:"plus",color:"#ffffff",size:"40"}})],1)],1)},n=[]},"3e6d":function(e,t,a){"use strict";a("6a54");var r=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d4b5"),a("aa9c"),a("c223"),a("dd2b"),a("e966");var i=a("bccf"),n=a("d2ab"),d=a("0f5e"),u=r(a("ee22")),l=r(a("e0c5")),s=r(a("12ec")),o=r(a("06da")),c=r(a("2acf")),f="",p={components:{dataNull:u.default,addBtn:l.default,getMore:s.default,shijiHK:o.default,topDropdown:c.default},data:function(){return{dropdown1:"全部",options1:[],optionsPx:i.gjDatePxData,sxList:[],list:[],pageIndex:1,isMore:!0,scrollHeight:"667px",triggered:!1,isSelect:!1,pageType:"",sortObj:{update_date:-1},optionsReq:{},dateReq:[],sxReq:JSON.stringify({}),matchObj:{},searchValue:"",clientIdArr:[],tabNoEqualArr:[],depId:void 0,isQywx:!1,external_userid:"",userid:"",uids:[]}},onLoad:function(e){f=this;var t=JSON.stringify(i.hkdSxDropDownData);f.sxList=JSON.parse(t);var a={};if("true"===e.isQywx&&(f.isQywx=!0,uni.setNavigationBarTitle({title:"企微回款单列表"})),e.external_userid&&(f.external_userid=e.external_userid),f.isQywx?uni.$qwUser.isleader?(f.options1=i.qywxTyDropDown,f.uids=uni.$qwXsUserIdList):(f.options1=i.qywxDropDownByUser,f.userid=uni.$qwUser.userid):uni.$userInfo.isDepManager?(f.options1=i.tyDropDown,f.depId=uni.$userInfo.depManager_Id):(f.options1=i.dropDownByUser,a.fuZeRenId=uni.$userInfo._id),f.pageType=e.type?e.type:"",e.type&&(f.isSelect=!0),e.clientId&&(f.clientIdArr=[e.clientId]),f.matchObj=a,f.optionsReq=JSON.stringify(a),uni.getSystemInfo({success:function(e){f.scrollHeight=e.windowHeight-40+"px"}}),e.next_gjDate){var r=(0,d.getDayByNumFun)(e.next_gjDate),n={field:"next_gjDate",sTime:r[1],eTime:r[0]},u=f.sxList;u[0].current=0,f.sxList=u,f.dateReq.push(n)}else{var l=f.sxList;l[0].current="",f.sxList=l}f.selectDataFun(),uni.$on("deleteCardFun",f.deleteCardFun),uni.$on("updateHkdListByIndex",f.updateHkdListByIndex),uni.$on("addHkdItemInListFun",f.addHkdItemInListFun)},onBackPress:function(){uni.$off("deleteCardFun",f.deleteCardFun),uni.$off("updateHkdListByIndex",f.updateHkdListByIndex),uni.$off("addHkdItemInListFun",f.addHkdItemInListFun)},methods:{clickFun:function(e,t){"genjin"==f.pageType?(uni.$emit("gjOrderBindFun",e),uni.navigateBack()):""!=f.pageType&&(uni.$emit("huiKuanBindFun",e),uni.navigateBack())},selectDataFun:function(){var e=this;if(f.isMore){uni.showLoading({title:"加载中...",mask:!0});var t={isQywx:f.isQywx,matchObj:f.matchObj,dateReq:f.dateReq,pageIndex:f.pageIndex,sortObj:f.sortObj,tabNoEqualArr:f.tabNoEqualArr,clientIdArr:f.clientIdArr,searchValue:f.searchValue};f.isQywx?(f.external_userid&&(t.matchObj.external_userid=f.external_userid),t.userid=f.userid,t.uids=f.uids):t.depId=f.depId;var a={action:"get",params:t};(0,n.crmHkdApi)(a).then((function(t){e.triggered=!1;var a=t.result.data;1==f.pageIndex&&(f.list=[]),20==a.length?(f.pageIndex+=1,f.isMore=!0):f.isMore=!1,f.list=f.list.concat(a)}))}},dropDownFun1:function(e){var t={},a=[],r=uni.$userInfo;if(f.depId=void 0,f.isQywx){if("全部"==e.label)f.uids=uni.$qwXsUserIdList,f.userid="";else if("我负责的"==e.label)f.userid=uni.$qwUser.userid;else if("下属负责"==e.label){for(var i=uni.$qwXsUserIdList,n=[],d=0;d<i.length;d++)i[d]!=uni.$qwUser.userid&&n.push(i[d]);f.userid="",f.uids=n}}else"全部"==e.label?f.depId=r.depManager_Id:"我负责的"==e.label?t.fuZeRenId=r._id:"我创建的"==e.label?t.cjRenId=r._id:"下属负责"==e.label?(f.depId=r.depManager_Id,a=[{field:"fuZeRenId",value:r._id}],t.department=r.departmentId):"下属创建"==e.label&&(f.depId=r.depManager_Id,a=[{field:"cjRenId",value:r._id}]),f.tabNoEqualArr=a,f.optionsReq=JSON.stringify(t),f.matchObj=Object.assign(t,JSON.parse(f.sxReq));f.cxGetDataFun()},optionSxFun:function(e){var t=e.arr;f.clientIdArr=e.selectKhList;for(var a=[],r=[],i=0;i<t.length;i++)""===t[i].current||t[i].isDate?""!==t[i].current&&t[i].isDate&&r.push({field:t[i].field,sTime:t[i].sTime,eTime:t[i].eTime}):a.push({field:t[i].field,value:t[i].arr[t[i].current]});var n={};for(i=0;i<a.length;i++)n[a[i].field]=a[i].value;f.dateReq=r,f.sxReq=JSON.stringify(n),f.matchObj=Object.assign(n,JSON.parse(f.optionsReq)),f.cxGetDataFun()},optionPxFun:function(e){for(var t={update_date:-1},a=0;a<e.length;a++)if(""!==e[a].current){t={},"create_date"==e[a].field&&(t.create_date=1==e[a].current?1:-1),"update_date"==e[a].field&&(t.update_date=1==e[a].current?1:-1),"chengJiao_date"==e[a].field&&(t.chengJiao_date=1==e[a].current?1:-1),"bjPrice"==e[a].field&&(t.bjPrice=1==e[a].current?1:-1),f.sortObj=t;break}f.cxGetDataFun()},searchBoxEmitFun:function(e){f.searchValue=e.searchValue1,f.cxGetDataFun()},onRefresh:function(){f.triggered||(f.triggered=!0,f.cxGetDataFun())},onRestore:function(e){f.triggered=!1},cxGetDataFun:function(){f.pageIndex=1,f.isMore=!0,f.selectDataFun()},deleteCardFun:function(e){var t=f.list;t.splice(e.index,1),f.list=t},addHkdItemInListFun:function(e){f.cxGetDataFun()},updateHkdListByIndex:function(e){f.$set(f.list,parseInt(e.index),e.obj)}}};t.default=p},"6d10":function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("64aa");var r={props:{item:{type:Object,default:function(){}},index:{type:Number,default:0},isSelect:{type:Boolean,default:!1},isDetail:{type:Boolean,default:!1},isQywx:{type:Boolean,default:!1}},data:function(){return{}},methods:{gotoDetailFun:function(){this.isSelect||(uni.$hkdInfo=this.item,uni.navigateTo({url:"/pages/crm/huikuan/detail?index="+this.index+"&isQywx="+this.isQywx}))}}};t.default=r},"7a7c":function(e,t,a){"use strict";var r=a("d3cd"),i=a.n(r);i.a},"7aba":function(e,t,a){var r=a("7bd7");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=a("967d").default;i("2f15bf2c",r,!0,{sourceMap:!1,shadowMode:!1})},"7bd7":function(e,t,a){var r=a("c86c");t=r(!1),t.push([e.i,".progress[data-v-67d72e5a]{width:%?200?%!important;margin-left:%?26?%}.fzr[data-v-67d72e5a]{position:absolute;right:%?26?%;bottom:%?74?%;font-size:15px}.fzrLeft[data-v-67d72e5a]{color:#adadad}.fzrRight[data-v-67d72e5a]{font-weight:700;color:#ff941a}",""]),e.exports=t},"810a":function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={props:{url:{type:String}},data:function(){return{}},methods:{gotoAdd:function(){this.url&&uni.navigateTo({url:this.url})}}};t.default=r},"89d5":function(e,t,a){"use strict";var r=a("eb59"),i=a.n(r);i.a},"8a3d":function(e,t,a){"use strict";a.r(t);var r=a("a1cc"),i=a("0da49");for(var n in i)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(n);a("89d5");var d=a("828b"),u=Object(d["a"])(i["default"],r["b"],r["c"],!1,null,"7aa559d2",null,!1,r["a"],void 0);t["default"]=u.exports},"8eb2":function(e,t,a){var r=a("c86c");t=r(!1),t.push([e.i,"uni-page-body[data-v-7aa559d2]{background-color:#f8f8f8}body.?%PAGE?%[data-v-7aa559d2]{background-color:#f8f8f8}",""]),e.exports=t},a1cc:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r}));var r={topDropdown:a("2acf").default,dataNull:a("ee22").default,getMore:a("12ec").default,addBtn:a("e0c5").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("topDropdown",{attrs:{isSxShow:!0,isPaiXu:!0,dropdown1:e.dropdown1,options1:e.options1,optionsSx:e.sxList,optionsPx:e.optionsPx,isDuoXuan:!0,searchLabel1:"回款编号",searchPh1:"请输入回款单编号",isKhShow:!0},on:{searchBoxEmitFun:function(t){arguments[0]=t=e.$handleEvent(t),e.searchBoxEmitFun.apply(void 0,arguments)},dropDownFun1:function(t){arguments[0]=t=e.$handleEvent(t),e.dropDownFun1.apply(void 0,arguments)},optionSxFun:function(t){arguments[0]=t=e.$handleEvent(t),e.optionSxFun.apply(void 0,arguments)},optionPxFun:function(t){arguments[0]=t=e.$handleEvent(t),e.optionPxFun.apply(void 0,arguments)}}}),0==e.list.length?a("dataNull",{attrs:{src:"/static/img/chahua/gjNull.png",title:"暂无相关回款",title1:"请添加或者更换搜索添加"}}):a("v-uni-scroll-view",{style:{height:e.scrollHeight},attrs:{"scroll-y":"true","refresher-enabled":!0,"refresher-threshold":200,"refresher-triggered":e.triggered,"refresher-background":"gray"},on:{scrolltolower:function(t){arguments[0]=t=e.$handleEvent(t),e.selectDataFun.apply(void 0,arguments)},refresherrefresh:function(t){arguments[0]=t=e.$handleEvent(t),e.onRefresh.apply(void 0,arguments)},refresherrestore:function(t){arguments[0]=t=e.$handleEvent(t),e.onRestore.apply(void 0,arguments)}}},[e._l(e.list,(function(t,r){return a("v-uni-view",{key:r,on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.clickFun(t,r)}}},[a("shijiHK",{attrs:{item:t,isSelect:e.isSelect,index:r,isQywx:e.isQywx}})],1)})),a("getMore",{attrs:{isMore:e.isMore}})],2),e.isQywx?a("addBtn",{attrs:{url:"./addHk?isQywx=true"}}):a("addBtn",{attrs:{url:"./addHk"}})],1)},n=[]},bccf:function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.tyDropDown=t.threadSxData=t.sjSxDropDownData=t.sjDatePxData=t.qywxTyDropDown=t.qywxDropDownByUser=t.qwkhsxData=t.lxrDropDownData=t.khsxData=t.htSxDropDownData=t.hkjhSxDropDownData=t.hkdSxDropDownData=t.gjSxDropDownData=t.gjDropDownData1=t.gjDropDownData=t.gjDatePxData=t.dropDownByUser=t.distanceData=t.datePxData=t.cjDropDownData1=t.cjDropDownData=t.bjdSxDropDownData=t.bjdDatePxData=void 0;t.tyDropDown=[{value:0,label:"全部"},{value:1,label:"我负责的"},{value:2,label:"下属负责"},{value:3,label:"我创建的"},{value:4,label:"下属创建"}];t.dropDownByUser=[{value:0,label:"我负责的"},{value:1,label:"我创建的"}];t.qywxTyDropDown=[{value:0,label:"全部"},{value:1,label:"我负责的"},{value:2,label:"下属负责"}];t.qywxDropDownByUser=[{value:0,label:"我负责的"}];t.gjDropDownData=[{value:0,label:"全部"},{value:1,label:"我创建的"},{value:2,label:"下属创建"}];t.gjDropDownData1=[{value:0,label:"我创建的"}];t.cjDropDownData=[{value:0,label:"全部"},{value:1,label:"我创建的"},{value:2,label:"下属创建"}];t.cjDropDownData1=[{value:0,label:"我创建的"}];t.distanceData=[{value:0,distance:5e3,label:"5公里内"},{value:1,distance:500,label:"500米内"},{value:2,distance:1e3,label:"1公里内"},{value:3,distance:2e3,label:"2公里内"},{value:4,distance:3e3,label:"3公里内"},{value:5,distance:4e3,label:"4公里内"},{value:6,distance:5e3,label:"5公里内"},{value:7,distance:8e3,label:"8公里内"},{value:8,distance:1e4,label:"10公里内"}];t.khsxData=[{title:"下次跟进时间",field:"next_gjDate",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"客户阶段",field:"jieDuan",current:"",arr:["初步接洽","确认需求","解决方案","商务谈判","成交","流失"]},{title:"客户性质",field:"xingZhi",current:"",arr:["企业客户","个人客户","政府单位","事业单位"]},{title:"客户分级",field:"fenJi",current:"",arr:["大型","中型","小型","微型"]},{title:"客户来源",field:"laiYuan",current:"",arr:["电话咨询","自主开拓","公司资源","网络推广","渠道代理","其他方式"]},{title:"最后跟进时间",field:"genjin_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"创建时间",field:"create_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"更新时间",field:"update_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"重要程度",field:"zycdNum",current:"",arr:["一星以下","一星","二星","三星","四星","五星"]},{title:"客户行业",field:"hangYe",current:"",arr:["金融","电信","教育","高科技","政府","制造业","服务业","能源","零售","媒体","娱乐","咨询","非盈利事业","公用事业","其他"]}];t.qwkhsxData=[{title:"下次跟进时间",field:"next_gjDate",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"最后跟进时间",field:"genjin_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"创建时间",field:"create_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"更新时间",field:"update_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]}];t.threadSxData=[{title:"下次跟进时间",field:"next_gjDate",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"客户性质",field:"xingZhi",current:"",arr:["企业客户","个人客户","政府单位","事业单位"]},{title:"客户分级",field:"fenJi",current:"",arr:["大型","中型","小型","微型"]},{title:"客户来源",field:"laiYuan",current:"",arr:["电话咨询","自主开拓","公司资源","网络推广","渠道代理","其他方式"]},{title:"最后跟进时间",field:"genjin_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"创建时间",field:"create_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"更新时间",field:"update_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"重要程度",field:"zycdNum",current:"",arr:["一星以下","一星","二星","三星","四星","五星"]},{title:"客户行业",field:"hangYe",current:"",arr:["金融","电信","教育","高科技","政府","制造业","服务业","能源","零售","媒体","娱乐","咨询","非盈利事业","公用事业","其他"]}];t.datePxData=[{title:"创建时间排序",field:"create_date",current:"",arr:["降序","升序"]},{title:"更新时间排序(默认降序)",field:"update_date",current:0,arr:["降序","升序"]},{title:"最后跟进时间排序",field:"genjin_date",current:"",arr:["降序","升序"]}];t.gjDatePxData=[{title:"创建时间排序",field:"create_date",current:"",arr:["降序","升序"]},{title:"更新时间排序",field:"update_date",current:"",arr:["降序","升序"]},{title:"跟进时间排序(默认降序)",field:"genjin_date",current:0,arr:["降序","升序"]}];t.sjDatePxData=[{title:"创建时间排序",field:"create_date",current:"",arr:["降序","升序"]},{title:"更新时间排序(默认降序)",field:"update_date",current:0,arr:["降序","升序"]},{title:"预计成交时间排序",field:"chengJiao_date",current:"",arr:["降序","升序"]}];t.bjdDatePxData=[{title:"报价金额",field:"bjPrice",current:"",arr:["降序","升序"]},{title:"创建时间排序",field:"create_date",current:"",arr:["降序","升序"]},{title:"更新时间排序(默认降序)",field:"update_date",current:0,arr:["降序","升序"]}];t.lxrDropDownData=[{title:"下次跟进时间",field:"next_gjDate",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"性别",field:"gender",current:"",arr:["男","女"]},{title:"最后跟进时间",field:"genjin_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"创建时间",field:"create_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"更新时间",field:"update_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"重要程度",field:"zycdNum",current:"",arr:["一星以下","一星","二星","三星","四星","五星"]},{title:"亲密程度",field:"zycdNum",current:"",arr:["一星以下","一星","二星","三星","四星","五星"]}];t.gjSxDropDownData=[{title:"下次跟进时间",field:"next_gjDate",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"跟进类型",field:"type",current:"",arr:["外出拜访","客户面谈","客户来电","客户来访","在线交流","发送资料","售后回访","方案整理","其他方面"]},{title:"单据类型",field:"orderType",current:"",arr:["商机","报价单","合同","回款计划","回款单"]},{title:"跟进时间",field:"genjin_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"创建时间",field:"create_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"更新时间",field:"update_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]}];t.sjSxDropDownData=[{title:"预计成交时间",field:"chengJiao_date",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"下次跟进时间",field:"next_gjDate",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"商机阶段",field:"sjJieduan",current:"",arr:["初步沟通","需求确定","方案报价","谈判协商","赢单","输单","无效"]},{title:"商机来源",field:"sjLaiYuan",current:"",arr:["独立开发","来电咨询","广告宣传","搜索引擎","客户介绍","展会","招标公告","其他"]},{title:"跟进时间",field:"genjin_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"创建时间",field:"create_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"更新时间",field:"update_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]}];t.bjdSxDropDownData=[{title:"下次跟进时间",field:"next_gjDate",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"跟进时间",field:"genjin_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"报价时间",field:"bjdDateTime",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"创建时间",field:"create_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"更新时间",field:"update_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]}];t.htSxDropDownData=[{title:"下次跟进时间",field:"next_gjDate",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"跟进时间",field:"genjin_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"报价时间",field:"bjdDateTime",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"创建时间",field:"create_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"更新时间",field:"update_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]}];t.hkjhSxDropDownData=[{title:"预计回款日期",field:"date",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"下次跟进时间",field:"next_gjDate",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"跟进时间",field:"genjin_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"创建时间",field:"create_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"更新时间",field:"update_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]}];t.hkdSxDropDownData=[{title:"下次跟进时间",field:"next_gjDate",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"跟进时间",field:"genjin_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"创建时间",field:"create_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"更新时间",field:"update_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]}]},d3cd:function(e,t,a){var r=a("1d47");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=a("967d").default;i("50af9ca4",r,!0,{sourceMap:!1,shadowMode:!1})},dccd:function(e,t,a){"use strict";a.r(t);var r=a("810a"),i=a.n(r);for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);t["default"]=i.a},e0c5:function(e,t,a){"use strict";a.r(t);var r=a("2f77"),i=a("dccd");for(var n in i)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(n);a("7a7c");var d=a("828b"),u=Object(d["a"])(i["default"],r["b"],r["c"],!1,null,"2f041b10",null,!1,r["a"],void 0);t["default"]=u.exports},eb59:function(e,t,a){var r=a("8eb2");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=a("967d").default;i("9c87c556",r,!0,{sourceMap:!1,shadowMode:!1})},f935:function(e,t,a){"use strict";a.r(t);var r=a("6d10"),i=a.n(r);for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);t["default"]=i.a},fb73:function(e,t,a){"use strict";var r=a("7aba"),i=a.n(r);i.a}}]);