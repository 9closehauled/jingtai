(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-crm-shangji-shangji"],{1851:function(e,t,a){"use strict";var i=a("8bdb"),r=a("84d6"),n=a("1cb5");i({target:"Array",proto:!0},{fill:r}),n("fill")},"1d47":function(e,t,a){var i=a("c86c");t=i(!1),t.push([e.i,".addBtn[data-v-2f041b10]{width:%?88?%;height:%?88?%;border-radius:50%;background-image:linear-gradient(45deg,#007aff,#0af);display:flex;align-items:center;justify-content:center;position:fixed;bottom:%?200?%;right:%?26?%;z-index:100}.addBtn[data-v-2f041b10]:active{background-image:linear-gradient(45deg,#0af,#007aff)}",""]),e.exports=t},2145:function(e,t,a){"use strict";var i=a("8e46"),r=a.n(i);r.a},"237b":function(e,t,a){"use strict";a.r(t);var i=a("4239"),r=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(n);t["default"]=r.a},"2a35":function(e,t,a){var i=a("c86c");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 郑志平\r\n * 2021-12-06\r\n */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-select__action[data-v-5e9568b0]{position:relative;line-height:%?70?%;height:%?70?%}.u-select__action__icon[data-v-5e9568b0]{position:absolute;right:%?20?%;top:50%;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:1}.u-select__action__icon--reverse[data-v-5e9568b0]{-webkit-transform:rotate(-180deg) translateY(50%);transform:rotate(-180deg) translateY(50%)}.u-select__hader__title[data-v-5e9568b0]{color:#606266}.u-select--border[data-v-5e9568b0]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-select__header[data-v-5e9568b0]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;height:%?80?%;padding:0 %?40?%}.u-select__body[data-v-5e9568b0]{width:100%;height:%?500?%;overflow:hidden;background-color:#fff}.u-select__body__picker-view[data-v-5e9568b0]{height:100%;box-sizing:border-box}.u-select__body__picker-view__item[data-v-5e9568b0]{display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:%?32?%;color:#303133;padding:0 %?8?%}',""]),e.exports=t},"2f77":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i}));var i={uIcon:a("97c4").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"addBtn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.gotoAdd.apply(void 0,arguments)}}},[a("u-icon",{attrs:{name:"plus",color:"#ffffff",size:"40"}})],1)],1)},n=[]},3905:function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("64aa"),a("5ef2");var i={props:{item:{type:Object,default:function(){}},index:{type:Number,default:0},isSelect:{type:Boolean,default:!1},isDetail:{type:Boolean,default:!1},isQywx:{type:Boolean,default:!1}},watch:{item:function(e,t){this.setSjJieduanFun()}},data:function(){return{percent:70,activeColor:""}},created:function(){this.setSjJieduanFun()},methods:{setSjJieduanFun:function(){var e=this.item.sjJieduan,t="";e&&-1!=e.indexOf("(")&&(e=e.split("(")[0]),"初步沟通"==e?(t="初步沟通(10%)",this.item.percent=10,this.activeColor="#ffda03"):"需求确定"==e?(t="需求确定(30%)",this.item.percent=30,this.activeColor="#ffaa00"):"方案报价"==e?(t="方案报价(50%)",this.item.percent=50,this.activeColor="#00ff7f"):"谈判协商"==e?(t="谈判协商(80%)",this.activeColor="#00ff00",this.item.percent=80):"赢单"==e?(t="赢单(100%)",this.activeColor="#00aa00",this.item.percent=100):"输单"==e?(t="输单(0%)",this.item.percent=0,this.activeColor="#ff0000"):this.item.percent=-1,this.item.sjJieduan=t},gotoDetailFun:function(){this.isSelect||(uni.$sjInfo=this.item,uni.navigateTo({url:"/pages/crm/shangji/detail?index="+this.index+"&isQywx="+this.isQywx}))}}};t.default=i},4239:function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("64aa"),a("1851"),a("aa9c"),a("fd3c");var i={props:{list:{type:Array,default:function(){return[]}},border:{type:Boolean,default:!0},value:{type:Boolean,default:!1},cancelColor:{type:String,default:"#606266"},confirmColor:{type:String,default:"#2979ff"},zIndex:{type:[String,Number],default:0},safeAreaInsetBottom:{type:Boolean,default:!1},maskCloseAble:{type:Boolean,default:!0},defaultValue:{type:Array,default:function(){return[0]}},mode:{type:String,default:"single-column"},valueName:{type:String,default:"value"},labelName:{type:String,default:"label"},childName:{type:String,default:"children"},title:{type:String,default:""},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确认"}},data:function(){return{defaultSelector:[0],columnData:[],selectValue:[],lastSelectIndex:[],columnNum:0,moving:!1}},watch:{value:{immediate:!0,handler:function(e){var t=this;e&&setTimeout((function(){return t.init()}),10)}}},computed:{uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},methods:{pickstart:function(){},pickend:function(){},init:function(){this.setColumnNum(),this.setDefaultSelector(),this.setColumnData(),this.setSelectValue()},setDefaultSelector:function(){this.defaultSelector=this.defaultValue.length==this.columnNum?this.defaultValue:Array(this.columnNum).fill(0),this.lastSelectIndex=this.$u.deepClone(this.defaultSelector)},setColumnNum:function(){if("single-column"==this.mode)this.columnNum=1;else if("mutil-column"==this.mode)this.columnNum=this.list.length;else if("mutil-column-auto"==this.mode){var e=1,t=this.list;while(t[0][this.childName])t=t[0]?t[0][this.childName]:{},e++;this.columnNum=e}},setColumnData:function(){var e=[];if(this.selectValue=[],"mutil-column-auto"==this.mode)for(var t=this.list[this.defaultSelector.length?this.defaultSelector[0]:0],a=0;a<this.columnNum;a++)0==a?(e[a]=this.list,t=t[this.childName]):(e[a]=t,t=t[this.defaultSelector[a]][this.childName]);else"single-column"==this.mode?e[0]=this.list:e=this.list;this.columnData=e},setSelectValue:function(){for(var e=null,t=0;t<this.columnNum;t++){e=this.columnData[t][this.defaultSelector[t]];var a={value:e?e[this.valueName]:null,label:e?e[this.labelName]:null};e&&e.extra&&(a.extra=e.extra),this.selectValue.push(a)}},columnChange:function(e){var t=this,a=null,i=e.detail.value;if(this.selectValue=[],"mutil-column-auto"==this.mode){this.lastSelectIndex.map((function(e,t){e!=i[t]&&(a=t)})),this.defaultSelector=i;for(var r=a+1;r<this.columnNum;r++)this.columnData[r]=this.columnData[r-1][r-1==a?i[a]:0][this.childName],this.defaultSelector[r]=0;i.map((function(e,a){var r=t.columnData[a][i[a]],n={value:r?r[t.valueName]:null,label:r?r[t.labelName]:null};r&&void 0!==r.extra&&(n.extra=r.extra),t.selectValue.push(n)})),this.lastSelectIndex=i}else if("single-column"==this.mode){var n=this.columnData[0][i[0]],l={value:n?n[this.valueName]:null,label:n?n[this.labelName]:null};n&&void 0!==n.extra&&(l.extra=n.extra),this.selectValue.push(l)}else"mutil-column"==this.mode&&i.map((function(e,a){var r=t.columnData[a][i[a]],n={value:r?r[t.valueName]:null,label:r?r[t.labelName]:null};r&&void 0!==r.extra&&(n.extra=r.extra),t.selectValue.push(n)}))},close:function(){this.$emit("input",!1)},getResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&this.$emit(e,this.selectValue),this.close()},selectHandler:function(){this.$emit("click")}}};t.default=i},"4a8c":function(e,t,a){"use strict";var i=a("7b9d"),r=a.n(i);r.a},"600b":function(e,t,a){var i=a("c86c");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 郑志平\r\n * 2021-12-06\r\n */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-progress[data-v-62fcb81c]{overflow:hidden;height:15px;display:inline-flex;align-items:center;width:100%;border-radius:%?100?%}.u-active[data-v-62fcb81c]{width:0;height:100%;align-items:center;display:flex;flex-direction:row;justify-items:flex-end;justify-content:space-around;font-size:%?20?%;color:#fff;transition:all .4s ease}.u-striped[data-v-62fcb81c]{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:39px 39px}.u-striped-active[data-v-62fcb81c]{-webkit-animation:progress-stripes-data-v-62fcb81c 2s linear infinite;animation:progress-stripes-data-v-62fcb81c 2s linear infinite}@-webkit-keyframes progress-stripes-data-v-62fcb81c{0%{background-position:0 0}100%{background-position:39px 0}}@keyframes progress-stripes-data-v-62fcb81c{0%{background-position:0 0}100%{background-position:39px 0}}',""]),e.exports=t},"6a90":function(e,t,a){"use strict";a.r(t);var i=a("3905"),r=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(n);t["default"]=r.a},7345:function(e,t,a){"use strict";var i=a("8651"),r=a.n(i);r.a},"7a7c":function(e,t,a){"use strict";var i=a("d3cd"),r=a.n(i);r.a},"7b9d":function(e,t,a){var i=a("2a35");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("967d").default;r("79c46dcd",i,!0,{sourceMap:!1,shadowMode:!1})},"80cf":function(e,t,a){var i=a("600b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("967d").default;r("1bb04ee0",i,!0,{sourceMap:!1,shadowMode:!1})},"810a":function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{url:{type:String}},data:function(){return{}},methods:{gotoAdd:function(){this.url&&uni.navigateTo({url:this.url})}}};t.default=i},8651:function(e,t,a){var i=a("914c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("967d").default;r("7de5b1f3",i,!0,{sourceMap:!1,shadowMode:!1})},"88e5":function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("64aa");var i={name:"u-line-progress",props:{round:{type:Boolean,default:!0},type:{type:String,default:""},activeColor:{type:String,default:"#19be6b"},inactiveColor:{type:String,default:"#ececec"},percent:{type:Number,default:0},showPercent:{type:Boolean,default:!0},height:{type:[Number,String],default:28},striped:{type:Boolean,default:!1},stripedActive:{type:Boolean,default:!1}},data:function(){return{}},computed:{progressStyle:function(){var e={};return e.width=this.percent+"%",this.activeColor&&(e.backgroundColor=this.activeColor),e}},methods:{}};t.default=i},"89ff":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i}));var i={uPopup:a("9e2d").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"u-select"},[a("u-popup",{attrs:{maskCloseAble:e.maskCloseAble,mode:"bottom",popup:!1,length:"auto",safeAreaInsetBottom:e.safeAreaInsetBottom,"z-index":e.uZIndex},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("v-uni-view",{staticClass:"u-select"},[a("v-uni-view",{staticClass:"u-select__header",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t)}}},[a("v-uni-view",{staticClass:"u-select__header__cancel u-select__header__btn",style:{color:e.cancelColor},attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getResult("cancel")}}},[e._v(e._s(e.cancelText))]),a("v-uni-view",{staticClass:"u-select__header__title"},[e._v(e._s(e.title))]),a("v-uni-view",{staticClass:"u-select__header__confirm u-select__header__btn",style:{color:e.moving?e.cancelColor:e.confirmColor},attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{touchmove:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t)},click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.getResult("confirm")}}},[e._v(e._s(e.confirmText))])],1),a("v-uni-view",{staticClass:"u-select__body"},[a("v-uni-picker-view",{staticClass:"u-select__body__picker-view",attrs:{value:e.defaultSelector},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.columnChange.apply(void 0,arguments)},pickstart:function(t){arguments[0]=t=e.$handleEvent(t),e.pickstart.apply(void 0,arguments)},pickend:function(t){arguments[0]=t=e.$handleEvent(t),e.pickend.apply(void 0,arguments)}}},e._l(e.columnData,(function(t,i){return a("v-uni-picker-view-column",{key:i},e._l(t,(function(t,i){return a("v-uni-view",{key:i,staticClass:"u-select__body__picker-view__item"},[a("v-uni-view",{staticClass:"u-line-1"},[e._v(e._s(t[e.labelName]))])],1)})),1)})),1)],1)],1)],1)],1)},n=[]},"8bc2":function(e,t,a){"use strict";a.r(t);var i=a("c10b"),r=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(n);t["default"]=r.a},"8c41":function(e,t,a){"use strict";var i=a("80cf"),r=a.n(i);r.a},"8e46":function(e,t,a){var i=a("b733");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("967d").default;r("ddbf0fc0",i,!0,{sourceMap:!1,shadowMode:!1})},"914c":function(e,t,a){var i=a("c86c");t=i(!1),t.push([e.i,".progress[data-v-1d0be43e]{width:%?200?%!important;margin-left:%?26?%}.fzr[data-v-1d0be43e]{position:absolute;right:%?26?%;bottom:%?80?%;font-size:15px}.fzrLeft[data-v-1d0be43e]{color:#adadad}.fzrRight[data-v-1d0be43e]{font-weight:700;color:#ff941a}",""]),e.exports=t},b733:function(e,t,a){var i=a("c86c");t=i(!1),t.push([e.i,"uni-page-body[data-v-0959bf18]{background-color:#f8f8f8}body.?%PAGE?%[data-v-0959bf18]{background-color:#f8f8f8}",""]),e.exports=t},bccf:function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.tyDropDown=t.threadSxData=t.sjSxDropDownData=t.sjDatePxData=t.qywxTyDropDown=t.qywxDropDownByUser=t.qwkhsxData=t.lxrDropDownData=t.khsxData=t.htSxDropDownData=t.hkjhSxDropDownData=t.hkdSxDropDownData=t.gjSxDropDownData=t.gjDropDownData1=t.gjDropDownData=t.gjDatePxData=t.dropDownByUser=t.distanceData=t.datePxData=t.cjDropDownData1=t.cjDropDownData=t.bjdSxDropDownData=t.bjdDatePxData=void 0;t.tyDropDown=[{value:0,label:"全部"},{value:1,label:"我负责的"},{value:2,label:"下属负责"},{value:3,label:"我创建的"},{value:4,label:"下属创建"}];t.dropDownByUser=[{value:0,label:"我负责的"},{value:1,label:"我创建的"}];t.qywxTyDropDown=[{value:0,label:"全部"},{value:1,label:"我负责的"},{value:2,label:"下属负责"}];t.qywxDropDownByUser=[{value:0,label:"我负责的"}];t.gjDropDownData=[{value:0,label:"全部"},{value:1,label:"我创建的"},{value:2,label:"下属创建"}];t.gjDropDownData1=[{value:0,label:"我创建的"}];t.cjDropDownData=[{value:0,label:"全部"},{value:1,label:"我创建的"},{value:2,label:"下属创建"}];t.cjDropDownData1=[{value:0,label:"我创建的"}];t.distanceData=[{value:0,distance:5e3,label:"5公里内"},{value:1,distance:500,label:"500米内"},{value:2,distance:1e3,label:"1公里内"},{value:3,distance:2e3,label:"2公里内"},{value:4,distance:3e3,label:"3公里内"},{value:5,distance:4e3,label:"4公里内"},{value:6,distance:5e3,label:"5公里内"},{value:7,distance:8e3,label:"8公里内"},{value:8,distance:1e4,label:"10公里内"}];t.khsxData=[{title:"下次跟进时间",field:"next_gjDate",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"客户阶段",field:"jieDuan",current:"",arr:["初步接洽","确认需求","解决方案","商务谈判","成交","流失"]},{title:"客户性质",field:"xingZhi",current:"",arr:["企业客户","个人客户","政府单位","事业单位"]},{title:"客户分级",field:"fenJi",current:"",arr:["大型","中型","小型","微型"]},{title:"客户来源",field:"laiYuan",current:"",arr:["电话咨询","自主开拓","公司资源","网络推广","渠道代理","其他方式"]},{title:"最后跟进时间",field:"genjin_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"创建时间",field:"create_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"更新时间",field:"update_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"重要程度",field:"zycdNum",current:"",arr:["一星以下","一星","二星","三星","四星","五星"]},{title:"客户行业",field:"hangYe",current:"",arr:["金融","电信","教育","高科技","政府","制造业","服务业","能源","零售","媒体","娱乐","咨询","非盈利事业","公用事业","其他"]}];t.qwkhsxData=[{title:"下次跟进时间",field:"next_gjDate",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"最后跟进时间",field:"genjin_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"创建时间",field:"create_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"更新时间",field:"update_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]}];t.threadSxData=[{title:"下次跟进时间",field:"next_gjDate",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"客户性质",field:"xingZhi",current:"",arr:["企业客户","个人客户","政府单位","事业单位"]},{title:"客户分级",field:"fenJi",current:"",arr:["大型","中型","小型","微型"]},{title:"客户来源",field:"laiYuan",current:"",arr:["电话咨询","自主开拓","公司资源","网络推广","渠道代理","其他方式"]},{title:"最后跟进时间",field:"genjin_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"创建时间",field:"create_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"更新时间",field:"update_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"重要程度",field:"zycdNum",current:"",arr:["一星以下","一星","二星","三星","四星","五星"]},{title:"客户行业",field:"hangYe",current:"",arr:["金融","电信","教育","高科技","政府","制造业","服务业","能源","零售","媒体","娱乐","咨询","非盈利事业","公用事业","其他"]}];t.datePxData=[{title:"创建时间排序",field:"create_date",current:"",arr:["降序","升序"]},{title:"更新时间排序(默认降序)",field:"update_date",current:0,arr:["降序","升序"]},{title:"最后跟进时间排序",field:"genjin_date",current:"",arr:["降序","升序"]}];t.gjDatePxData=[{title:"创建时间排序",field:"create_date",current:"",arr:["降序","升序"]},{title:"更新时间排序",field:"update_date",current:"",arr:["降序","升序"]},{title:"跟进时间排序(默认降序)",field:"genjin_date",current:0,arr:["降序","升序"]}];t.sjDatePxData=[{title:"创建时间排序",field:"create_date",current:"",arr:["降序","升序"]},{title:"更新时间排序(默认降序)",field:"update_date",current:0,arr:["降序","升序"]},{title:"预计成交时间排序",field:"chengJiao_date",current:"",arr:["降序","升序"]}];t.bjdDatePxData=[{title:"报价金额",field:"bjPrice",current:"",arr:["降序","升序"]},{title:"创建时间排序",field:"create_date",current:"",arr:["降序","升序"]},{title:"更新时间排序(默认降序)",field:"update_date",current:0,arr:["降序","升序"]}];t.lxrDropDownData=[{title:"下次跟进时间",field:"next_gjDate",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"性别",field:"gender",current:"",arr:["男","女"]},{title:"最后跟进时间",field:"genjin_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"创建时间",field:"create_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"更新时间",field:"update_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"重要程度",field:"zycdNum",current:"",arr:["一星以下","一星","二星","三星","四星","五星"]},{title:"亲密程度",field:"zycdNum",current:"",arr:["一星以下","一星","二星","三星","四星","五星"]}];t.gjSxDropDownData=[{title:"下次跟进时间",field:"next_gjDate",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"跟进类型",field:"type",current:"",arr:["外出拜访","客户面谈","客户来电","客户来访","在线交流","发送资料","售后回访","方案整理","其他方面"]},{title:"单据类型",field:"orderType",current:"",arr:["商机","报价单","合同","回款计划","回款单"]},{title:"跟进时间",field:"genjin_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"创建时间",field:"create_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"更新时间",field:"update_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]}];t.sjSxDropDownData=[{title:"预计成交时间",field:"chengJiao_date",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"下次跟进时间",field:"next_gjDate",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"商机阶段",field:"sjJieduan",current:"",arr:["初步沟通","需求确定","方案报价","谈判协商","赢单","输单","无效"]},{title:"商机来源",field:"sjLaiYuan",current:"",arr:["独立开发","来电咨询","广告宣传","搜索引擎","客户介绍","展会","招标公告","其他"]},{title:"跟进时间",field:"genjin_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"创建时间",field:"create_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"更新时间",field:"update_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]}];t.bjdSxDropDownData=[{title:"下次跟进时间",field:"next_gjDate",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"跟进时间",field:"genjin_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"报价时间",field:"bjdDateTime",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"创建时间",field:"create_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"更新时间",field:"update_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]}];t.htSxDropDownData=[{title:"下次跟进时间",field:"next_gjDate",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"跟进时间",field:"genjin_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"报价时间",field:"bjdDateTime",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"创建时间",field:"create_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"更新时间",field:"update_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]}];t.hkjhSxDropDownData=[{title:"预计回款日期",field:"date",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"下次跟进时间",field:"next_gjDate",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"跟进时间",field:"genjin_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"创建时间",field:"create_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"更新时间",field:"update_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]}];t.hkdSxDropDownData=[{title:"下次跟进时间",field:"next_gjDate",current:"",isDate:2,arr:["今天","三天内","七天内","半月内","一月内","自定义"]},{title:"跟进时间",field:"genjin_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"创建时间",field:"create_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]},{title:"更新时间",field:"update_date",current:"",isDate:1,arr:["今天","昨天","本周","上周","本月","上月","最近七天","3个月","自定义"]}]},befd:function(e,t,a){"use strict";a.r(t);var i=a("e391"),r=a("6a90");for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);a("7345");var l=a("828b"),u=Object(l["a"])(r["default"],i["b"],i["c"],!1,null,"1d0be43e",null,!1,i["a"],void 0);t["default"]=u.exports},c10b:function(e,t,a){"use strict";a("6a54");var i=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d4b5"),a("c223"),a("aa9c"),a("dd2b"),a("e966");var r=a("d2ab"),n=a("bccf"),l=(a("0f5e"),i(a("ee22"))),u=i(a("e0c5")),s=i(a("12ec")),o=i(a("befd")),d=i(a("2acf")),c={components:{dataNull:l.default,addBtn:u.default,getMore:s.default,shangji:o.default,topDropdown:d.default},data:function(){return{dropdown1:"全部",options1:[],optionsPx:n.sjDatePxData,sxList:[],list:[],pageIndex:1,isMore:!0,scrollHeight:"667px",triggered:!1,isSelect:!1,pageType:"",sortObj:{update_date:-1},optionsReq:{},dateReq:[],sxReq:JSON.stringify({}),matchObj:{},searchValue:"",clientIdArr:[],tabNoEqualArr:[],depId:void 0,isQywx:!1,external_userid:"",userid:"",uids:[]}},onLoad:function(e){},onBackPress:function(){uni.$off("deleteCardFun","".deleteCardFun),uni.$off("updateSjListByIndex","".updateSjListByIndex),uni.$off("addSjItemInListFun","".addSjItemInListFun)},methods:{selectDataFun:function(){var e=this;if("".isMore){uni.showLoading({title:"加载中...",mask:!0});var t={isQywx:"".isQywx,matchObj:"".matchObj,dateReq:"".dateReq,pageIndex:"".pageIndex,sortObj:"".sortObj,tabNoEqualArr:"".tabNoEqualArr,clientIdArr:"".clientIdArr,searchValue:"".searchValue};"".isQywx?("".external_userid&&(t.matchObj.external_userid="".external_userid),t.userid="".userid,t.uids="".uids):t.depId="".depId;var a={action:"getShangji",params:t};(0,r.crmShangJiApi)(a).then((function(t){e.triggered=!1;var a=t.result.data;1=="".pageIndex&&("".list=[]),20==a.length?("".pageIndex+=1,"".isMore=!0):"".isMore=!1,"".list="".list.concat(a)}))}},cardClickFun:function(e,t){"genjin"=="".pageType?(uni.$emit("gjOrderBindFun",e),uni.navigateBack()):""!="".pageType&&(uni.$emit("shangjiBindFun",e),uni.navigateBack())},dropDownFun1:function(e){var t={},a=[],i=uni.$userInfo;if("".depId=void 0,"".isQywx){if("全部"==e.label)"".uids=uni.$qwXsUserIdList,"".userid="";else if("我负责的"==e.label)"".userid=uni.$qwUser.userid;else if("下属负责"==e.label){for(var r=uni.$qwXsUserIdList,n=[],l=0;l<r.length;l++)r[l]!=uni.$qwUser.userid&&n.push(r[l]);"".userid="","".uids=n}}else"全部"==e.label?"".depId=i.depManager_Id:"我负责的"==e.label?t.fuZeRenId=i._id:"我创建的"==e.label?t.cjRenId=i._id:"下属负责"==e.label?("".depId=i.depManager_Id,a=[{field:"fuZeRenId",value:i._id}],t.department=i.departmentId):"下属创建"==e.label&&("".depId=i.depManager_Id,a=[{field:"cjRenId",value:i._id}]),"".tabNoEqualArr=a,"".optionsReq=JSON.stringify(t),"".matchObj=Object.assign(t,JSON.parse("".sxReq));"".cxGetDataFun()},optionSxFun:function(e){var t=e.arr;"".clientIdArr=e.selectKhList;for(var a=[],i=[],r=0;r<t.length;r++)""===t[r].current||t[r].isDate?""!==t[r].current&&t[r].isDate&&i.push({field:t[r].field,sTime:t[r].sTime,eTime:t[r].eTime}):a.push({field:t[r].field,value:t[r].arr[t[r].current]});var n={};for(r=0;r<a.length;r++)n[a[r].field]=a[r].value;"".dateReq=i,"".sxReq=JSON.stringify(n),"".matchObj=Object.assign(n,JSON.parse("".optionsReq)),"".cxGetDataFun()},optionPxFun:function(e){for(var t={update_date:-1},a=0;a<e.length;a++)if(""!==e[a].current){t={},"create_date"==e[a].field&&(t.create_date=1==e[a].current?1:-1),"update_date"==e[a].field&&(t.update_date=1==e[a].current?1:-1),"chengJiao_date"==e[a].field&&(t.chengJiao_date=1==e[a].current?1:-1),"".sortObj=t;break}"".cxGetDataFun()},searchBoxEmitFun:function(e){"".searchValue=e.searchValue1,"".cxGetDataFun()},onRefresh:function(){"".triggered||("".triggered=!0,"".cxGetDataFun())},onRestore:function(e){"".triggered=!1},cxGetDataFun:function(){"".pageIndex=1,"".isMore=!0,"".selectDataFun()},deleteCardFun:function(e){var t="".list;t.splice(e.index,1),"".list=t},addSjItemInListFun:function(e){"".cxGetDataFun()},updateSjListByIndex:function(e){"".$set("".list,parseInt(e.index),e.obj)}}};t.default=c},c3b8:function(e,t,a){"use strict";a.r(t);var i=a("d95c"),r=a("8bc2");for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);a("2145");var l=a("828b"),u=Object(l["a"])(r["default"],i["b"],i["c"],!1,null,"0959bf18",null,!1,i["a"],void 0);t["default"]=u.exports},d3cd:function(e,t,a){var i=a("1d47");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("967d").default;r("50af9ca4",i,!0,{sourceMap:!1,shadowMode:!1})},d4c3:function(e,t,a){"use strict";a.r(t);var i=a("88e5"),r=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(n);t["default"]=r.a},d95c:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i}));var i={topDropdown:a("2acf").default,dataNull:a("ee22").default,getMore:a("12ec").default,addBtn:a("e0c5").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("topDropdown",{attrs:{isSxShow:!0,isPaiXu:!0,dropdown1:e.dropdown1,options1:e.options1,optionsSx:e.sxList,optionsPx:e.optionsPx,isDuoXuan:!0,searchLabel1:"商机名称",searchPh1:"请输入商机名称",isKhShow:!0},on:{searchBoxEmitFun:function(t){arguments[0]=t=e.$handleEvent(t),e.searchBoxEmitFun.apply(void 0,arguments)},dropDownFun1:function(t){arguments[0]=t=e.$handleEvent(t),e.dropDownFun1.apply(void 0,arguments)},optionSxFun:function(t){arguments[0]=t=e.$handleEvent(t),e.optionSxFun.apply(void 0,arguments)},optionPxFun:function(t){arguments[0]=t=e.$handleEvent(t),e.optionPxFun.apply(void 0,arguments)}}}),0==e.list.length?a("dataNull",{attrs:{src:"/static/img/chahua/gjNull.png",title:"暂无商机",title1:"请添加或者更换搜索添加"}}):a("v-uni-scroll-view",{style:{height:e.scrollHeight},attrs:{"scroll-y":"true","refresher-enabled":!0,"refresher-threshold":200,"refresher-triggered":e.triggered,"refresher-background":"gray"},on:{scrolltolower:function(t){arguments[0]=t=e.$handleEvent(t),e.selectDataFun.apply(void 0,arguments)},refresherrefresh:function(t){arguments[0]=t=e.$handleEvent(t),e.onRefresh.apply(void 0,arguments)},refresherrestore:function(t){arguments[0]=t=e.$handleEvent(t),e.onRestore.apply(void 0,arguments)}}},[e._l(e.list,(function(t,i){return a("v-uni-view",{key:i,on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.cardClickFun(t,i)}}},[a("shangji",{attrs:{item:t,isSelect:e.isSelect,index:i,isQywx:e.isQywx}})],1)})),a("getMore",{attrs:{isMore:e.isMore}})],2),e.isQywx?a("addBtn",{attrs:{url:"./addSj?isQywx=true"}}):a("addBtn",{attrs:{url:"./addSj"}})],1)},n=[]},dccd:function(e,t,a){"use strict";a.r(t);var i=a("810a"),r=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(n);t["default"]=r.a},ddea:function(e,t,a){"use strict";a.r(t);var i=a("89ff"),r=a("237b");for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);a("4a8c");var l=a("828b"),u=Object(l["a"])(r["default"],i["b"],i["c"],!1,null,"5e9568b0",null,!1,i["a"],void 0);t["default"]=u.exports},e0c5:function(e,t,a){"use strict";a.r(t);var i=a("2f77"),r=a("dccd");for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);a("7a7c");var l=a("828b"),u=Object(l["a"])(r["default"],i["b"],i["c"],!1,null,"2f041b10",null,!1,i["a"],void 0);t["default"]=u.exports},e190:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"u-progress",style:{borderRadius:e.round?"100rpx":0,height:e.height+"rpx",backgroundColor:e.inactiveColor}},[a("v-uni-view",{staticClass:"u-active",class:[e.type?"u-type-"+e.type+"-bg":"",e.striped?"u-striped":"",e.striped&&e.stripedActive?"u-striped-active":""],style:[e.progressStyle]},[e.$slots.default||e.$slots.$default?e._t("default"):e.showPercent?[e._v(e._s(e.percent+"%"))]:e._e()],2)],1)},r=[]},e391:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i}));var i={uLineProgress:a("f679").default,uIcon:a("97c4").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"myCard",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.gotoDetailFun.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cardTopName"},[e._v("商机名称："+e._s(e.item.sjName))]),a("v-uni-view",{staticClass:"cardRow"},[a("v-uni-view",[e._v("客户名称：")]),a("v-uni-view",[e._v(e._s(e.item.clientName))])],1),a("v-uni-view",{staticClass:"cardRow"},[a("v-uni-view",[e._v("商机阶段：")]),a("v-uni-view",[e._v(e._s(e.item.sjJieduan))]),-1!=e.item.percent?a("v-uni-cover-view",[a("u-line-progress",{staticClass:"progress",attrs:{striped:!0,percent:e.item.percent,"striped-active":!0,"show-percent":!1,"active-color":e.activeColor}})],1):e._e()],1),a("v-uni-view",{staticClass:"cardRow"},[a("v-uni-view",[e._v("商机金额：")]),a("v-uni-view",[e._v(e._s(e.item.sjPrice))])],1),a("v-uni-view",{staticClass:"cardRow"},[a("v-uni-view",[e._v("预计成交：")]),a("v-uni-view",[e._v(e._s(e.$u.timeFormat(e.item.chengJiao_date,"yyyy-mm-dd")))])],1),e.item.fuZeRenId&&!e.isDetail?a("v-uni-view",{staticClass:"fzr"},[a("v-uni-text",{staticClass:"fzrLeft"},[e._v("负责人：")]),a("v-uni-text",{staticClass:"fzrRight"},[e._v(e._s(e.item.fuZeRenName))])],1):e._e(),e.isDetail||e.isSelect?e._e():a("v-uni-view",{staticClass:"lookDetail"},[a("v-uni-text",[e._v("查看详情")]),a("u-icon",{attrs:{name:"arrow-right",size:"36"}})],1)],1)},n=[]},f679:function(e,t,a){"use strict";a.r(t);var i=a("e190"),r=a("d4c3");for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);a("8c41");var l=a("828b"),u=Object(l["a"])(r["default"],i["b"],i["c"],!1,null,"62fcb81c",null,!1,i["a"],void 0);t["default"]=u.exports}}]);