(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-crm-hetong-addHt"],{"1d48":function(e,t,i){"use strict";var n=i("9e66"),a=i.n(n);a.a},"8efd":function(e,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("c223"),i("dd2b"),i("e838"),i("5c47"),i("a1c1"),i("e966"),i("aa9c");var n=i("0f5e"),a=i("d2ab"),s="",c={data:function(){return{selectShow:!1,selectList:[],selectType:"",htName:"",sjName:"",sjId:"",bjName:"",bjdId:"",htPrice:"",clientName:"",clientId:"",clientLxr:"",clientLxrId:"",qianYueDate:"",qianYueDateTime:"",shiXiaoDate:"",shiXiaoDateTime:"",startDate:"",startDateTime:"",dateIndex:0,htType:"新合同",sjLaiYuan:"",cpList:[],cpHzObj:{},isGlsj:!1,isSave:!1,isGlBjd:!1,isGlkh:!1,shRen:"",shPhone:"",shAddr:"",describe:"",fuZeRenId:uni.$userInfo._id,fuZeRen:uni.$userInfo.nickname,xgInfoObj:{},pageType:"",clientDisabled:!1,isQywx:!1,external_userid:""}},watch:{cpList:function(e,t){s.cpCalcFun()}},onLoad:function(e){s=this,"update"==e.type&&(s.setDataFun(),s.pageType="update",uni.setNavigationBarTitle({title:"修改合同信息"})),e.clientName&&(s.clientName=e.clientName),e.clientId&&(s.clientId=e.clientId),"true"===e.isQywx&&(s.isQywx=!0),e.external_userid&&(s.external_userid=e.external_userid,s.clientDisabled=!0),uni.$on("heTongdKehuBindFun",s.heTongdKehuBindFun),uni.$on("heTongLxrBindFun",s.heTongLxrBindFun),uni.$on("shangjiBindFun",s.shangjiBindFun),uni.$on("baoJiaDanBindFun",s.baoJiaDanBindFun),uni.$on("chanpinBindFun",s.chanpinBindFun)},onBackPress:function(){uni.$off("heTongdKehuBindFun",s.heTongdKehuBindFun),uni.$off("heTongLxrBindFun",s.heTongLxrBindFun),uni.$off("shangjiBindFun",s.shangjiBindFun),uni.$off("baoJiaDanBindFun",s.baoJiaDanBindFun),uni.$off("chanpinBindFun",s.chanpinBindFun)},methods:{chooseAddrFun:function(){uni.chooseLocation({success:function(e){s.gjAddr=e.address}})},pickerSelectFun:function(e){"合同类型"==e&&(s.selectList=[{value:0,label:"新合同"},{value:1,label:"续约合同"}]),s.selectShow=!0,s.selectType=e},selectConfirmFun:function(e){"合同类型"==s.selectType&&(s.htType=e[0].label)},scanFun:function(){uni.scanCode({success:function(e){s.code=e.result}})},bindDateChange:function(e){1==s.dateIndex?(s.qianYueDate=e.detail.value,s.qianYueDateTime=new Date(e.detail.value+" 00:00:00").getTime()):2==s.dateIndex?(s.startDate=e.detail.value,s.startDateTime=new Date(e.detail.value+" 00:00:00").getTime()):3==s.dateIndex&&(s.shiXiaoDate=e.detail.value,s.shiXiaoDateTime=new Date(e.detail.value+" 00:00:00").getTime())},selectKehuFun:function(){s.clientDisabled||(s.isGlkh=!0,s.isQywx?uni.navigateTo({url:"../../../qywxPage/view/qywxClient/qywxClient?type=heTong"}):uni.navigateTo({url:"../kehu/kehu?type=heTong"}))},heTongdKehuBindFun:function(e){s.isGlkh&&(setTimeout((function(){s.isQywx?""==s.external_userid?(s.external_userid=e.external_userid,s.clientName=e.clientName):(s.clientLxrId||s.sjId||s.bjdId||s.cpList.length>0)&&uni.showModal({title:"提示",content:"前后两次关联客户信息不一致，关联新的客户信息，会将上次关联客户相关的信息重新赋值，是否确认？",success:function(t){t.confirm&&(s.external_userid=e.external_userid,s.clientName=e.clientName,s.bjName="",s.bjdId="",s.sjId="",s.sjName="",s.clientLxrId="",s.clientLxr="",s.cpHzObj={},s.cpList=[])}}):""==s.clientId?(s.clientId=e.clientId,s.clientName=e.clientName):(s.clientLxrId||s.sjId||s.bjdId||s.cpList.length>0)&&uni.showModal({title:"提示",content:"前后两次关联客户信息不一致，关联新的客户信息，会将上次关联客户相关的信息重新赋值，是否确认？",success:function(t){t.confirm&&(s.clientId=e.clientId,s.clientName=e.clientName,s.bjName="",s.bjdId="",s.sjId="",s.sjName="",s.clientLxrId="",s.clientLxr="",s.cpHzObj={},s.cpList=[])}})}),88),s.isGlkh=!1)},selectLxrFun:function(){s.clientId?uni.navigateTo({url:"../lianxiren/lianxiren?type=heTong&clientId="+s.clientId}):uni.$myModalFun("请先关联相关客户！")},heTongLxrBindFun:function(e){s.clientLxrId=e.lxrId,s.clientLxr=e.lxrName},selectShangJiFun:function(){(s.isQywx||s.clientId)&&(!s.isQywx||s.external_userid)?(s.isGlsj=!0,s.isQywx?uni.navigateTo({url:"../shangji/shangji?type=heTong&isQywx=true&external_userid="+s.external_userid}):uni.navigateTo({url:"../shangji/shangji?type=heTong&clientId="+s.clientId})):uni.$myModalFun("请先选择相关客户！")},shangjiBindFun:function(e){s.sjId=e._id,s.sjName=e.sjName,s.isQywx?s.external_userid=e.external_userid:(s.clientId=e.clientId,s.clientLxrId=e.clientLxrId,s.clientLxr=e.clientLxr),s.clientName=e.clientName,s.isGlsj&&(setTimeout((function(){e.cpNum&&uni.showModal({title:"提示",content:"该商机下有"+e.cpNum+"条产品信息，是否关联或替换至该合同中？",success:function(t){t.confirm&&s.getCpBysjIdFun(e._id)}})}),8),s.isGlsj=!1)},selectBaoJiaDaFun:function(){(s.isQywx||s.clientId)&&(!s.isQywx||s.external_userid)?(s.isGlBjd=!0,s.isQywx?uni.navigateTo({url:"../baoJiaDan/baoJiaDan?type=heTong&isQywx=true&external_userid="+s.external_userid}):uni.navigateTo({url:"../baoJiaDan/baoJiaDan?type=heTong&clientId="+s.clientId})):uni.$myModalFun("请先选择相关客户！")},baoJiaDanBindFun:function(e){s.bjName=e.bjName,s.bjdId=e._id,e.sjId&&(s.sjId=e.sjId,s.sjName=e.sjName),s.isQywx?s.external_userid=e.external_userid:s.clientId=e.clientId,s.clientName=e.clientName,e.clientLxrId&&(s.clientLxrId=e.clientLxrId,s.clientLxr=e.clientLxr),s.isGlBjd&&setTimeout((function(){e.cpNum&&uni.showModal({title:"提示",content:"该报价单下有"+e.cpNum+"种产品信息，是否关联或替换至该合同中？",success:function(t){t.confirm&&s.getCpByBjdIdFun(e._id)}})}),8),s.isGlBjd=!1},addChanPinFun:function(){uni.navigateTo({url:"../../../chanpin/view/shop?type=heTong"}),s.isTjcp=!0},chanpinBindFun:function(e){var t={pName:e.pName,price:e.price,unit:e.unit,cpId:e._id,sellingPrice:e.price,discount:100,num:1,totalPrice:e.price};if(s.isTjcp){for(var i=s.cpList,n=!1,a=0;a<i.length;a++)i[a].cpId==t.cpId&&(n=!0);n?setTimeout((function(){uni.showToast({title:"该产品已存在！",icon:"none",duration:2e3})}),88):(i=i.concat(t),s.cpList=i,setTimeout((function(){uni.pageScrollTo({duration:100,scrollTop:1e5})}),88)),s.isTjcp=!1}},deleteCpFun:function(e){var t=s.cpList[e];t._id?uni.showModal({title:"提示",content:"是否确认要删除该产品？",success:function(i){if(i.confirm){uni.showLoading({title:"加载中..."});var n={action:"deleteCp",params:{_id:t._id}};(0,a.crmHeTongApi)(n).then((function(t){s.cpList.splice(e,1)}))}}}):s.cpList.splice(e,1)},cpPriceUpdateFun:function(e,t){s.cpList,t.sellingPrice;t.discount=(t.sellingPrice/t.price*100).toFixed(2),s.$set(s.cpList,e,t),s.cpCalcFun()},cpDiscountUpdateFun:function(e,t){s.cpList;var i=t.discount;t.sellingPrice=(t.price*i/100).toFixed(2),s.$set(s.cpList,e,t),s.cpCalcFun()},cpzzkXgFun:function(){s.cpHzObj.sumPrice=(s.cpHzObj.discount*s.cpHzObj.price/100).toFixed(2),s.htPrice=s.cpHzObj.sumPrice},cpzzPriceXgFun:function(){s.cpHzObj.discount=(s.cpHzObj.sumPrice/s.cpHzObj.price*100).toFixed(2),s.htPrice=s.cpHzObj.sumPrice},orderPriceXgFun:function(){s.cpList.length>0&&(s.cpHzObj.sumPrice=s.htPrice,s.cpHzObj.discount=(s.htPrice/s.cpHzObj.price*100).toFixed(2))},cpCalcFun:function(){for(var e=s.cpList,t=0,i=0,n=0,a=0;a<e.length;a++)e[a].totalPrice=(parseFloat(e[a].sellingPrice)*e[a].num).toFixed(2),t+=parseFloat(e[a].totalPrice),i+=parseFloat(e[a].price)*e[a].num,n+=e[a].num;s.cpHzObj.price=i.toFixed(2),s.cpHzObj.discount=(t/s.cpHzObj.price*100).toFixed(2),"NaN"==s.cpHzObj.discount&&(s.cpHzObj.discount=0),s.cpHzObj.sumPrice=t.toFixed(2),s.cpHzObj.totalNum=n,s.cpList=e,s.htPrice=0==t?"":t.toFixed(2)},submitBtnFun:function(){if(s.htName)if(s.clientName)if(s.htPrice)if(s.qianYueDate){var e={htName:s.htName,sjId:s.sjId,sjName:s.sjName,bjName:s.bjName,bjdId:s.bjdId,cpNum:s.cpList.length,htPrice:s.htPrice,qianYueDate:s.qianYueDate,qianYueDateTime:s.qianYueDateTime,startDate:s.startDate,startDateTime:s.startDateTime,shiXiaoDate:s.shiXiaoDate,shiXiaoDateTime:s.shiXiaoDateTime,htType:s.htType,shRen:s.shRen,shAddr:s.shAddr,shPhone:s.shPhone,describe:s.describe,clientLxrId:s.clientLxrId,clientLxr:s.clientLxr},t=(0,n.getDayFun)(),i=(0,n.getNowDate)().nowDate,c=i.split(" "),u=c[0].replace(/-/g,""),l={cpList:s.cpList,req:e},r="addHeTong";"update"==s.pageType?(r="update",l._id=s.xgInfoObj._id,l.req.update_date=(new Date).getTime(),uni.showLoading({title:"修改中..."})):(l.req.create_date=(new Date).getTime(),l.req.update_date=(new Date).getTime(),s.isQywx?(l.req.external_userid=s.external_userid,l.req.fuZeRenId=uni.$qwUser.userid,l.req.fuZeRen=uni.$qwUser.name,l.req.cjRenId=uni.$qwUser.userid,l.req.cjRen=uni.$qwUser.name,l.req.qywxData=!0):(l.req.clientId=s.clientId,l.req.fuZeRenId=s.fuZeRenId,l.req.fuZeRen=s.fuZeRen,l.req.cjRen=uni.$userInfo.nickname,l.req.cjRenId=uni.$userInfo._id),l.startDate=t[0],l.endDate=t[1],l.dateStr=parseInt(u),uni.showLoading({title:"提交中..."}));var d={action:r,params:l};(0,a.crmHeTongApi)(d).then((function(e){"update"==r?(s.addCzjlFun(),uni.showToast({title:"合同修改成功",icon:"none",duration:1e3,mask:!0}),setTimeout((function(){uni.navigateBack()}),1e3)):(uni.showToast({title:"合同新增成功",icon:"none",duration:1e3,mask:!0}),l.req._id=e.result.id,l.req.clientName=s.clientName,uni.$emit("addHtItemInListFun"),setTimeout((function(){s.isQywx?uni.redirectTo({url:"./detail?index=0&isQywx=true&fromDetail=true&_id="+e.result.id}):uni.redirectTo({url:"./detail?index=0&fromDetail=true&_id="+e.result.id})}),1e3))}))}else uni.$myModalFun("签约日期不能为空，请选择！");else uni.$myModalFun("合同金额不能为空，请输入或者添加产品自动计算！");else uni.$myModalFun("合同所属客户不能为空，请选择！");else uni.$myModalFun("合同名称不能为空，请输入！")},addCzjlFun:function(e,t){var i={create_date:(new Date).getTime(),czRen:uni.$userInfo._id,pageType:"contract"},n=s.xgInfoObj;i.dataId=n._id,i.type="编辑",i.newUpdate=(new Date).getTime(),i.oldUpdate=n.update_date;var a=[],c="";s.htName!=n.htName&&(c='修改 合同名称 ，由 "'+n.htName+'" 变更为 "'+s.htName+'"',a.push(c)),s.sjName!=n.sjName&&(c='修改 商机 ，由 "'+n.sjName+'" 变更为 "'+s.sjName+'"',a.push(c)),s.clientName!=n.clientName&&(c='修改 客户 ，由 "'+n.clientName+'" 变更为 "'+s.clientName+'"',a.push(c)),s.bjName!=n.bjName&&(c='修改 报价单名称 ，由 "'+n.bjName+'" 变更为 "'+s.bjName+'"',a.push(c)),s.clientLxr!=n.clientLxr&&(c='修改 联系人 ，由 "'+n.clientLxr+'" 变更为 "'+s.clientLxr+'"',a.push(c)),s.htPrice!=n.htPrice&&(c='修改 合同金额 ，由 "'+n.htPrice+'" 变更为 "'+s.htPrice+'"',a.push(c)),s.qianYueDate!=n.qianYueDate&&(c='修改 签约日期 ，由 "'+n.qianYueDate+'" 变更为 "'+s.qianYueDate+'"',a.push(c)),s.startDate!=n.startDate&&(c='修改 合同生效日期 ，由 "'+n.startDate+'" 变更为 "'+s.startDate+'"',a.push(c)),s.shiXiaoDate!=n.shiXiaoDate&&(c='修改 合同失效日期 ，由 "'+n.shiXiaoDate+'" 变更为 "'+s.shiXiaoDate+'"',a.push(c)),s.htType!=n.htType&&(c='修改 合同类型 ，由 "'+n.htType+'" 变更为 "'+s.htType+'"',a.push(c)),s.shRen!=n.shRen&&(c='修改 收货人 ，由 "'+n.shRen+'" 变更为 "'+s.shRen+'"',a.push(c)),s.shAddr!=n.shAddr&&(c='修改 收货地址 ，由 "'+n.shAddr+'" 变更为 "'+s.shAddr+'"',a.push(c)),s.shPhone!=n.shPhone&&(c='修改 收货电话 ，由 "'+n.shPhone+'" 变更为 "'+s.shPhone+'"',a.push(c)),s.describe!=n.describe&&(c='修改 备注 ，由 "'+n.describe+'" 变更为 "'+s.describe+'"',a.push(c)),s.fuZeRen!=n.fuZeRen&&(c='修改 负责人 ，由 "'+n.fuZeRen+'" 变更为 "'+s.fuZeRen+'"',a.push(c)),i.content=a,uni.$czjlApiAddFun(i)},setDataFun:function(){var e=uni.$infoObj;s.xgInfoObj=uni.$infoObj,s.isQywx?(s.external_userid=e.external_userid,s.htName=e.htName,s.sjId=e.sjId,s.sjName=e.sjName,s.bjName=e.bjName,s.bjdId=e.bjdId,s.clientName=e.clientName,s.htPrice=e.htPrice,s.qianYueDate=e.qianYueDate,s.qianYueDateTime=e.qianYueDateTime,s.startDate=e.startDate,s.startDateTime=e.startDateTime,s.shiXiaoDate=e.shiXiaoDate,s.shiXiaoDateTime=e.shiXiaoDateTime,s.htType=e.htType,s.shRen=e.shRen,s.shAddr=e.shAddr,s.shPhone=e.shPhone,s.describe=e.describe,s.fuZeRenId=e.fuZeRenId,s.fuZeRen=e.fuZeRen):(s.htName=e.htName,s.sjId=e.sjId,s.sjName=e.sjName,s.bjName=e.bjName,s.bjdId=e.bjdId,s.clientName=e.clientName,s.clientId=e.clientId,s.clientLxr=e.clientLxr,s.clientLxrId=e.clientLxrId,s.htPrice=e.htPrice,s.qianYueDate=e.qianYueDate,s.qianYueDateTime=e.qianYueDateTime,s.startDate=e.startDate,s.startDateTime=e.startDateTime,s.shiXiaoDate=e.shiXiaoDate,s.shiXiaoDateTime=e.shiXiaoDateTime,s.htType=e.htType,s.shRen=e.shRen,s.shAddr=e.shAddr,s.shPhone=e.shPhone,s.describe=e.describe,s.fuZeRenId=e.fuZeRenId,s.fuZeRen=e.fuZeRen),s.getCpByIdFun()},getCpByIdFun:function(){var e={action:"getCp",params:{htId:s.xgInfoObj._id}};uni.showLoading({title:"加载中..."}),(0,a.crmHeTongApi)(e).then((function(e){var t=e.result.data;if(t.length>0){for(var i={discount:0,price:0,sumPrice:0,totalNum:0},n=0;n<t.length;n++){var a=t[n];a.discount=(a.sellingPrice/a.price*100).toFixed(2),a.totalPrice=(a.sellingPrice*a.num).toFixed(2),t[n]=a,i.price+=parseFloat(a.price)*a.num,i.sumPrice+=parseFloat(a.sellingPrice)*a.num,i.totalNum+=parseFloat(a.num)}i.discount=i.sumPrice/i.price*100,s.cpHzObj=i,s.cpList=t}}))},getCpBysjIdFun:function(e){var t={action:"getCp",params:{sjId:e}};uni.showLoading({title:"加载中..."}),(0,a.crmShangJiApi)(t).then((function(e){var t=e.result.data;if(t.length>0){for(var i={discount:0,price:0,sumPrice:0,totalNum:0},n=0;n<t.length;n++){var a=t[n];a._id="",a.discount=(a.sellingPrice/a.price*100).toFixed(2),a.totalPrice=(a.sellingPrice*a.num).toFixed(2),t[n]=a,i.price+=parseFloat(a.price)*a.num,i.sumPrice+=parseFloat(a.sellingPrice)*a.num,i.totalNum+=parseFloat(a.num)}i.discount=i.sumPrice/i.price*100,s.cpHzObj=i,s.cpList=t}}))},getCpByBjdIdFun:function(e){var t={action:"getCp",params:{bjdId:e}};uni.showLoading({title:"加载中..."}),(0,a.crmBaoJiaDanApi)(t).then((function(e){var t=e.result.data;if(t.length>0){for(var i={discount:0,price:0,sumPrice:0,totalNum:0},n=0;n<t.length;n++){var a=t[n];a._id="",a.discount=(a.sellingPrice/a.price*100).toFixed(2),a.totalPrice=(a.sellingPrice*a.num).toFixed(2),t[n]=a,i.price+=parseFloat(a.price)*a.num,i.sumPrice+=parseFloat(a.sellingPrice)*a.num,i.totalNum+=parseFloat(a.num)}i.discount=i.sumPrice/i.price*100,s.cpHzObj=i,s.cpList=t}}))}}};t.default=c},9423:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return n}));var n={uInput:i("3752").default,uIcon:i("97c4").default,uNumberBox:i("cca1").default,uButton:i("2599").default,uSelect:i("ddea").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"btName"},[e._v("基础信息")]),i("v-uni-view",{staticClass:"flex-white-plr26 ptb10 mt32 bdb_f5"},[i("v-uni-text",{staticClass:"mr26"},[e._v("合同单号")]),i("u-input",{attrs:{disabled:!0,placeholder:"自动生成"}})],1),i("v-uni-view",{staticClass:"flex-white-plr26 ptb10 bdb_f5"},[i("v-uni-text",{staticClass:"mr26"},[e._v("合同名称"),i("v-uni-text",{staticClass:"redXingh"},[e._v("*")])],1),i("u-input",{attrs:{placeholder:"请在此输入"},model:{value:e.htName,callback:function(t){e.htName=t},expression:"htName"}})],1),i("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5",class:e.clientDisabled?"disabledStyle":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectKehuFun.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"mr26"},[e._v("客户"),i("v-uni-text",{staticClass:"redXingh"},[e._v("*")])],1),i("v-uni-view",{class:e.clientName?"":"cBlack"},[e._v(e._s(e.clientName?e.clientName:"请选择")),i("u-icon",{staticClass:"ml26",attrs:{name:"arrow-right",size:"40",color:"#888888"}})],1)],1),e.isQywx?e._e():i("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectLxrFun.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"mr26"},[e._v("联系人")]),i("v-uni-view",{class:e.clientLxr?"":"cBlack"},[e._v(e._s(e.clientLxr?e.clientLxr:"请选择")),i("u-icon",{staticClass:"ml26",attrs:{name:"arrow-right",size:"40",color:"#888888"}})],1)],1),i("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerSelectFun("合同类型")}}},[i("v-uni-text",{staticClass:"mr26"},[e._v("合同类型"),i("v-uni-text",{staticClass:"redXingh"},[e._v("*")])],1),i("v-uni-view",{class:e.htType?"":"cBlack"},[e._v(e._s(e.htType?e.htType:"请选择")),i("u-icon",{staticClass:"ml26",attrs:{name:"arrow-right",size:"40",color:"#888888"}})],1)],1),i("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectShangJiFun.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"mr26"},[e._v("关联商机")]),i("v-uni-view",{class:e.sjName?"":"cBlack"},[e._v(e._s(e.sjName?e.sjName:"请选择")),i("u-icon",{staticClass:"ml26",attrs:{name:"arrow-right",size:"40",color:"#888888"}})],1)],1),i("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectBaoJiaDaFun.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"mr26"},[e._v("关联报价单")]),i("v-uni-view",{class:e.bjName?"":"cBlack"},[e._v(e._s(e.bjName?e.bjName:"请选择")),i("u-icon",{staticClass:"ml26",attrs:{name:"arrow-right",size:"40",color:"#888888"}})],1)],1),i("v-uni-view",{staticClass:"flex-white-plr26 ptb10 bdb_f5"},[i("v-uni-text",{staticClass:"mr26"},[e._v("合同金额"),i("v-uni-text",{staticClass:"redXingh"},[e._v("*")])],1),i("u-input",{attrs:{"input-align":"right",placeholder:"请在此输入或添加产品自动计算"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.orderPriceXgFun.apply(void 0,arguments)}},model:{value:e.htPrice,callback:function(t){e.htPrice=t},expression:"htPrice"}})],1),i("v-uni-view",{staticClass:"flex-white-plr26 ptb20 mt32 bdb_f5"},[i("v-uni-text",{staticClass:"mr26"},[e._v("签约日期"),i("v-uni-text",{staticClass:"redXingh"},[e._v("*")])],1),i("v-uni-picker",{attrs:{mode:"date",value:e.qianYueDate,start:"1999-02-15",end:"2100-02-15"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindDateChange.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.dateIndex=1}}},[e.qianYueDate?i("v-uni-view",{staticClass:"w420"},[e._v(e._s(e.qianYueDate))]):i("v-uni-view",{staticStyle:{color:"#c5c5c5"}},[e._v("请选择签约日期")])],1),i("u-icon",{staticClass:"ml26",attrs:{name:"calendar",size:"40",color:"#888888"}})],1),i("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5"},[i("v-uni-text",{staticClass:"mr26"},[e._v("生效日期")]),i("v-uni-picker",{attrs:{mode:"date",value:e.startDate,start:"1999-02-15",end:"2100-02-15"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindDateChange.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.dateIndex=2}}},[e.startDate?i("v-uni-view",{staticClass:"w420"},[e._v(e._s(e.startDate))]):i("v-uni-view",{staticStyle:{color:"#c5c5c5"}},[e._v("请选择生效日期")])],1),i("u-icon",{staticClass:"ml26",attrs:{name:"calendar",size:"40",color:"#888888"}})],1),i("v-uni-view",{staticClass:"flex-white-plr26 ptb20 bdb_f5"},[i("v-uni-text",{staticClass:"mr26"},[e._v("失效日期")]),i("v-uni-picker",{attrs:{mode:"date",value:e.shiXiaoDate,start:"1999-02-15",end:"2100-02-15"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindDateChange.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.dateIndex=3}}},[e.shiXiaoDate?i("v-uni-view",{staticClass:"w420"},[e._v(e._s(e.shiXiaoDate))]):i("v-uni-view",{staticStyle:{color:"#c5c5c5"}},[e._v("请选择失效日期")])],1),i("u-icon",{staticClass:"ml26",attrs:{name:"calendar",size:"40",color:"#888888"}})],1),i("v-uni-view",{staticClass:"flex-white-plr26 ptb10 bdb_f5"},[i("v-uni-text",{staticClass:"mr26"},[e._v("收货人")]),i("u-input",{attrs:{placeholder:"请在此输入"},model:{value:e.shRen,callback:function(t){e.shRen=t},expression:"shRen"}})],1),i("v-uni-view",{staticClass:"flex-white-plr26 ptb10 bdb_f5"},[i("v-uni-text",{staticClass:"mr26"},[e._v("收货人电话")]),i("u-input",{attrs:{placeholder:"请在此输入"},model:{value:e.shPhone,callback:function(t){e.shPhone=t},expression:"shPhone"}})],1),i("v-uni-view",{staticClass:"flex-white-plr26 ptb10 bdb_f5"},[i("v-uni-text",{staticClass:"mr26"},[e._v("收货地址")]),i("u-input",{attrs:{placeholder:"请在此输入"},model:{value:e.shAddr,callback:function(t){e.shAddr=t},expression:"shAddr"}})],1),i("v-uni-view",{staticClass:"flex-white-plr26-column ptb20 mt32"},[i("v-uni-view",{staticStyle:{"margin-bottom":"8rpx"}},[i("v-uni-text",[e._v("备注")])],1),i("u-input",{attrs:{type:"textarea",border:!0,height:100,"auto-height":!0},model:{value:e.describe,callback:function(t){e.describe=t},expression:"describe"}})],1),i("v-uni-view",{staticClass:"tjcpName"},[i("v-uni-text",[e._v("添加产品")])],1),i("v-uni-view",{staticClass:"productBox"},[e.cpList.length>0?i("v-uni-view",{staticClass:"myCard"},[i("v-uni-view",{staticClass:"cardRow"},[i("v-uni-view",[e._v("总数量：")]),i("v-uni-view",[e._v(e._s(e.cpHzObj.totalNum))])],1),i("v-uni-view",{staticClass:"cardRow"},[i("v-uni-view",[e._v("价格合计：")]),i("v-uni-view",[e._v(e._s(e.cpHzObj.price)+"元")])],1),i("v-uni-view",{staticClass:"cardRow"},[i("v-uni-view",[e._v("总折扣%：")]),i("v-uni-view",{staticClass:"cpInput1"},[i("u-input",{attrs:{type:"number",height:"50",border:!0,clearable:!1,placeholder:"请输入"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.cpzzkXgFun.apply(void 0,arguments)}},model:{value:e.cpHzObj.discount,callback:function(t){e.$set(e.cpHzObj,"discount",t)},expression:"cpHzObj.discount"}})],1)],1),i("v-uni-view",{staticClass:"cardRow"},[i("v-uni-view",[e._v("最终价格：")]),i("v-uni-view",{staticClass:"cpInput1"},[i("u-input",{attrs:{type:"number",height:"50",border:!0,clearable:!1,placeholder:"请输入"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.cpzzPriceXgFun.apply(void 0,arguments)}},model:{value:e.cpHzObj.sumPrice,callback:function(t){e.$set(e.cpHzObj,"sumPrice",t)},expression:"cpHzObj.sumPrice"}})],1)],1)],1):e._e(),e._l(e.cpList,(function(t,n){return i("v-uni-view",{key:n,staticClass:"myCard"},[i("u-icon",{staticClass:"clearIcon",attrs:{name:"close-circle-fill",size:"50",color:"#ff0000"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteCpFun(n)}}}),i("v-uni-view",{staticClass:"cardTopName"},[e._v("产品名称："+e._s(t.pName))]),i("v-uni-view",{staticClass:"cardRow"},[i("v-uni-view",[e._v("产品价格：")]),i("v-uni-view",[e._v(e._s(t.price)+"元/"+e._s(t.unit))])],1),i("v-uni-view",{staticClass:"disFlex"},[i("v-uni-view",{staticClass:"inputName"},[e._v("售价 (元)：")]),i("v-uni-view",{staticClass:"cpInput"},[i("u-input",{attrs:{type:"number",height:"50",border:!0,clearable:!1,placeholder:"请输入"},on:{input:function(i){arguments[0]=i=e.$handleEvent(i),e.cpPriceUpdateFun(n,t)}},model:{value:t.sellingPrice,callback:function(i){e.$set(t,"sellingPrice",i)},expression:"item.sellingPrice"}})],1),i("v-uni-view",{staticClass:"inputName"},[e._v("折扣 (%)：")]),i("v-uni-view",{staticClass:"cpInput"},[i("u-input",{attrs:{type:"number",height:"50",border:!0,clearable:!1,placeholder:"请输入"},on:{input:function(i){arguments[0]=i=e.$handleEvent(i),e.cpDiscountUpdateFun(n,t)}},model:{value:t.discount,callback:function(i){e.$set(t,"discount",i)},expression:"item.discount"}})],1)],1),i("v-uni-view",{staticClass:"cardRow"},[i("v-uni-view",[e._v("产品数量：")]),i("v-uni-view",[i("u-number-box",{attrs:{index:n,"input-width":128,"input-height":60,min:1,max:1e5},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.cpCalcFun.apply(void 0,arguments)}},model:{value:t.num,callback:function(i){e.$set(t,"num",i)},expression:"item.num"}})],1)],1),i("v-uni-view",{staticClass:"cardRow"},[i("v-uni-view",[e._v("价格合计：")]),i("v-uni-view",{staticClass:"greenPrice"},[e._v("￥"+e._s(t.totalPrice))])],1)],1)})),i("v-uni-view",{staticClass:"addHKQS",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addChanPinFun.apply(void 0,arguments)}}},[i("v-uni-text",[e._v("点击添加相关产品")]),i("u-icon",{staticStyle:{"margin-left":"16rpx"},attrs:{name:"plus-circle-fill",color:"#007aff",size:"56"}})],1)],2),i("v-uni-view",{staticClass:"submitView"},[i("u-button",{staticClass:"submitBtn",attrs:{type:"primary",ripple:!0,"ripple-bg-color":"#909399"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submitBtnFun.apply(void 0,arguments)}}},[e._v(e._s(e.pageType?"保存":"提交"))])],1),i("u-select",{attrs:{list:e.selectList},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.selectConfirmFun.apply(void 0,arguments)}},model:{value:e.selectShow,callback:function(t){e.selectShow=t},expression:"selectShow"}})],1)},s=[]},"980c":function(e,t,i){"use strict";i.r(t);var n=i("8efd"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(s);t["default"]=a.a},"9e66":function(e,t,i){var n=i("bd0b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("967d").default;a("78d908a3",n,!0,{sourceMap:!1,shadowMode:!1})},bd0b:function(e,t,i){var n=i("c86c");t=n(!1),t.push([e.i,"uni-page-body[data-v-f672a4b0]{background-color:#f8f8f8;padding-bottom:%?260?%}body.?%PAGE?%[data-v-f672a4b0]{background-color:#f8f8f8}.u-radio[data-v-f672a4b0]{width:%?200?%!important}.submitView[data-v-f672a4b0]{width:100%;padding:%?16?% 0 %?26?%;background-color:#fff;position:fixed;bottom:0;left:0;border-top:%?1?% solid #f1f1f1;display:flex;align-items:center;justify-content:center;z-index:100}.submitBtn[data-v-f672a4b0]{width:%?666?%}.productBox[data-v-f672a4b0]{background-color:#fff;margin-top:%?32?%;padding:%?26?% 0}.tjcpName[data-v-f672a4b0]{width:%?686?%;height:%?40?%;font-size:16px;font-weight:700;border-left:%?6?% solid #007aff;padding-left:%?12?%;margin-left:%?26?%;margin-top:%?26?%}.cpInput[data-v-f672a4b0]{width:%?150?%!important;margin-right:%?12?%}.clearIcon[data-v-f672a4b0]{position:absolute;right:%?6?%;top:%?6?%}.greenPrice[data-v-f672a4b0]{font-size:16px;color:#19be6b!important;font-weight:700}.disFlex[data-v-f672a4b0]{display:flex;align-items:center;margin-bottom:%?8?%}.inputName[data-v-f672a4b0]{color:#adadad;font-size:16px}.addHKQS[data-v-f672a4b0]{display:flex;align-items:center;padding:%?16?% %?26?%;font-size:15px;font-weight:700;width:100%;display:flex;align-items:center;justify-content:center}",""]),e.exports=t},d4bd:function(e,t,i){"use strict";i.r(t);var n=i("9423"),a=i("980c");for(var s in a)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(s);i("1d48");var c=i("828b"),u=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"f672a4b0",null,!1,n["a"],void 0);t["default"]=u.exports}}]);