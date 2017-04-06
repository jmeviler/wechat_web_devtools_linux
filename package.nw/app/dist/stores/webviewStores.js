"use strict";function init(){function e(e){if(void 0!==e.device&&S[e.device]){var i=S[e.device];t=i["user-agent"],T=i.screen.vertical.width,m=i.screen.vertical.height-40,v=i.screen["device-pixel-ratio"]}else t="iOS"===e.os?s.defaultUa:s.Android_useragent,T=375,m=627,v=2;t=t.replace("{{version}}",e.version)}var t,i=require("events").EventEmitter,r=require("../common/jssdk/sdk.js"),n=require("../common/getA8key/getA8key.js"),o=require("../config/errcodeConfig.js"),s=require("../config/config.js"),_=require("../common/log/log.js"),S=require("../config/DeviceModules.js"),c=require("../config/wordingConfig.js"),u={},f={},E=0,a="iPhone 6",I="iOS",T=375,m=627,v=2,A="app/html/about.html",g={},w=localStorage["webview-network-type"]?localStorage["webview-network-type"]:"wifi",d=JSON.parse(localStorage.getItem("setting"));d?e(d):t=s.defaultUa.replace("{{version}}",s.defaultWechatVersion);var h=Object.assign({},i.prototype,{addWebviewPorts:function(e,t){return g[e]=t,g},delWebviewPorts:function(e){return delete g[e],g},getNetworkType:function(){return w},setNetworkType:function(e){w=e,localStorage["webview-network-type"]=w,this.emit("SIMULATOR_NETWORK_CHANGE",w)},getWebviewPorts:function(){return g},deleteWebviewID:function(e){this.emit("DELETE_WEBVIEW_ID",e)},changeWebviewID:function(e){E=e,this.emit("CHANGE_WEBVIEW_ID",e)},getSnapShot:function(e){return f[e]},setSnapShot:function(e,t){f[e]=t,this.emit("SET_WEBVIEW_SNAPSHOT",e,t)},getInitURL:function(){return A},setInitURL:function(e){A=e},getUA:function(){return t},setUA:function(i){e(i),this.emit("SET_WEBVIEW_UA",t)},setInfo:function(e){I=e.os,a=e.device,m=e.height,T=e.width,v=e.dpr,this.emit("SET_WEBVIEW_INFO",e)},getInfo:function(){return{model:a,dpr:v,width:T,height:m,os:I}},getOffset:function(){return{height:m,width:T,dpr:v}},getCurrentWebviewID:function(){return E},setCurrentWebviewID:function(e){E=e},showShare:function(e,t){this.emit("SHOW_SHARE_WEBVIEW_"+e,e,t)},stopPullDownRefresh:function(){this.emit("STOP_PULL_DOWN_REFRESH")},upStatus:function(e,t){u[e]||(u[e]={}),this.emit("UP_WEBVIEW_STATUS_"+e,e,t),this.emit("UP_WEBVIEW_STATUS",e,t)},setAction:function(e,t){u[e]||(u[e]={}),this.emit("SET_WEBVIEW_ACTION_"+e,e,t)},execJSSDK:function(e,t){var i=this;u[e]||(u[e]={}),r.exec(t,u[e],function(r,n,s){var S=t.sdkName,c=s.type;if("CARD_SDK"===c&&r){var f=s.error;if(f){if(f.errcode===o.NOT_LIMITS_CARD)return _.info("webviewStores.js getA8key NOT_LIMITS_CARD"),void i.emit("NOT_LIMITS_CARD");if(0!==f.errcode){_.info("webviewStores.js getA8key "+f.errcode);var E=require("../common/jssdk/sdkNameTrans.js");return n={errMsg:E.getSdkDisplayName(S)+":fail"},void i.emit("GET_JSSDK_RES_"+e,e,S,n,t.ext)}}else i.emit("CRAD_SDK_RES",e,S,n,r,t)}else"PREVERIFY_SDK"===c?(u[e].purviewFromPreVerify=s.purviewFromPreVerify||{},t.sdkResExt=s,i.emit("GET_JSSDK_RES_"+e,e,S,n,t)):"SHARE_SDK"===c?i.emit("SHOW_SHARE_WEBVIEW_"+e,e,t,n):"REGISTER_SDK"===c||("INTERFACE_ASYNC_SDK"===c?i.emit("SET_INTERFACE_ASYNC_RES",e,S,r,t):"INTERFACE_SDK"===c?(i.emit("SET_INTERFACE_RES_"+e,e,S,r,t),i.emit("GET_JSSDK_RES_"+e,e,S,n,t.ext)):i.emit("GET_JSSDK_RES_"+e,e,S,n,t.ext))})},sendJSSDKRes:function(e,t,i,r){this.emit("GET_JSSDK_RES_"+e,e,t,i,r)},getA8key:function(e,t){var i=this;u[e]={};var r=t.isSync;_.info("webviewStores.js getA8key begin: "+e+" "+JSON.stringify(t)),n.get(t,function(n){_.info("webviewStores.js getA8key end: "+JSON.stringify(n));var s=n.baseresponse,S=parseInt(s.errcode);if(S===o.NOT_LOGIN)return _.info("webviewStores.js getA8key NOT_LOGIN"),void i.emit("NOT_LOGIN");if(S===o.NOT_LIMITS)return _.info("webviewStores.js getA8key NOT_LIMITS"),void i.emit("NOT_LIMITS");if(S===o.NOT_LIMITS_QY)return _.info("webviewStores.js getA8key NOT_LIMITS_QY"),void i.emit("NOT_LIMITS_QY");if(S===o.INVALID_LOGIN||S===o.INVALID_TOKEN)return _.info("webviewStores.js getA8key INVALID_LOGIN"),void i.emit("INVALID_LOGIN");u[e].purviewFormGetA8key=n.purviewFormGetA8key;var f=n.resp_url;if(r||S===o.ILLEGAL_URL)return void setTimeout(function(){i.emit("SET_WEBVIEW_ACTION_"+e,e,{act:"load",url:f,from:t.from})});if(0!==S){_.info("webviewStores.js getA8key "+S);var E=require("../actions/windowActions.js");return void E.showTipsMsg({msg:c[0]+" "+S,type:"error"})}var a=/\#wechat_redirect$/.test(t.url);return a&&t.url.replace(/\#wechat_redirect$/,"")===f?(f=f.replace(/\#wechat_redirect/,""),_.info("webviewStores.js getA8key GETA_8KEY_NOT_SUPPORT "+f),void windowActions.showTipsMsg({msg:""+c[1],type:"error"})):void 0})},getWebviewByID:function(e){return u[e]},clearData:function(e){this.emit("CLEAR_WEBVIEW_DATA",e)},setInterfaceFromPageFrame:function(e,t){this.emit("SET_INTERFACT_FROMPAGEFRAME_"+e,t)},cleanWebview:function(e){this.emit("CLEAN_WEBVIEW_"+e),this.emit("CLEAN_WEBVIEW",e)},asTojs:function(e){this.emit("AS_TO_JS",e)},upASData:function(e,t){this.emit("UP_AS_DATA",e,t)},upBLData:function(e,t){this.emit("UP_BL_DATA",e,t)},asPublish:function(e){this.emit("AS_PUBLISH",e)},postMessageToAS:function(e){this.emit("POST_MSG_TOAS",e)},sendASSdk:function(e,t,i){this.emit("SEND_AS_SDK",e,t,i)},touchSetSuc:function(e){this.emit("TOUCH_SET_SUC_"+e)},togglerRecordWording:function(e){this.emit("TOGGLE_RECORD_WORDING",e)},getGeoSetting:function(){var e=JSON.parse(localStorage.getItem("webivew-geolocation"))||{};return e},setGeoSetting:function(e){localStorage.setItem("webivew-geolocation",JSON.stringify(e))},operatePaymentQrcodeWnd:function(e){this.emit("OPERATE_PAYMENT_QRCODE_WND",e)}}),N=h.on,l={};h.on=function(){var e=arguments,t=e[0];l[t]||(l[t]=0),l[t]++,l[t]>=10&&_.error("webviewStores.js on "+t+" - times: "+l[t]),N.apply(this,arguments)};var O=h.removeListener;h.removeListener=function(){var e=arguments,t=e[0];l[t]&&l[t]--,l[t]>=10&&_.error("webviewStores.js on "+t+" - times: "+l[t]),O.apply(this,arguments)},_exports=h}var _exports;init(),module.exports=_exports;