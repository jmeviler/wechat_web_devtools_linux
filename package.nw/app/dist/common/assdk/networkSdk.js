"use strict";function init(){function e(e){var r=e.apphash,t=o.getProjectByHash(r),a=t.isTourist,i=t.urlCheck,n=!0;return a?n=!1:i||(n=!1),n}function r(r,t){var a=o.getCurrentProject(),l=a.appid,s=a.ext_appid,d=a.platform,u=r.args,f=o.getCurrentProjectConfig(),p=u.filePath;if(!n.existsSync(i.getRealPath(p)))return t({errMsg:"uploadFile:fail file not found"});if(c>=f.Setting.MaxUploadConcurrent)return void t({errMsg:"uploadFile:fail exceed max upload connection count "+f.Setting.MaxUploadConcurrent});c++,u.tlsVersionCheck=e(r),u.header=u.header||{},u.header.Referer="https://servicewechat.com/"+(d&&s?s:l)+"/devtools/page-frame.html",u.callback=function(e,r,o){t(e?e&&"EPROTO"===e.code?{errMsg:"uploadFile:fail 小程序要求的 TLS 版本必须大于等于 1.2"}:{errMsg:"uploadFile:fail "+e}:{errMsg:"uploadFile:ok",data:o,statusCode:r.statusCode}),c--};try{i.uploadFileToServer(u)}catch(e){u.callback(e.toString())}}function t(r,t){var c=r.args,f=o.getCurrentProject(),p=f.appid,g=f.ext_appid,h=f.platform,x=o.getCurrentProjectConfig(),v=1024*d.DownloadFileSizeLimit*1024,C=c.header||{};if(C.Referer="https://servicewechat.com/"+(h&&g?g:p)+"/devtools/page-frame.html",u>=x.Setting.MaxDownloadConcurrent)return void t({errMsg:"downloadFile:fail exceed max download connection count "+x.Setting.MaxDownloadConcurrent});u++;var m=0,w=200,F=i.createNewLocalId(f)+a.extname(c.url.split("?")[0]),M=i.getRealPath(F),P=function(e){"function"==typeof t&&(t(e),u--,t=void 0)},S={method:"get",url:c.url,encoding:null,headers:C,followRedirect:function(e){var r=!1;(f.urlCheck||f.isTourist)&&(r=!0);var t=e.statusCode;if(t>=300&&t<400&&(302==t||301==t))for(var o=e.caseless.get("location"),a=x.Network.DownloadDomain,i=0;i<a.length;i++)if(o&&0===o.indexOf(a[i])){r=!0;break}return r}};e(r)&&(S.agentOptions={secureProtocol:"TLSv1_2_method"});try{var j=s.getProxyForURL(S.url);"DIRECT"!==j&&(S.proxy="http://"+j.replace("PROXY ",""));var k=l(S);k.on("response",function(e){if(w=e.statusCode,200!=w&&206!=w)P({errMsg:"downloadFile:ok",statusCode:w});else{var r=parseInt(e.headers["content-length"]);r>v&&(k.abort(),P({errMsg:"downloadFile:fail exceed max file size"}))}}).on("error",function(e){P(e&&"EPROTO"===e.code?{errMsg:"downloadFile:fail 小程序要求的 TLS 版本必须大于等于 1.2"}:{errMsg:"downloadFile:fail "+e})}).on("data",function(e){m+=e.length,m>v&&(k.abort(),P({errMsg:"downloadFile:fail exceed max file size"}))}).on("end",function(e){P({errMsg:"downloadFile:ok",tempFilePath:F,statusCode:w})}).pipe(n.createWriteStream(M))}catch(e){P({errMsg:"downloadFile:fail "+e})}}var o=require("../../stores/projectStores.js"),a=require("path"),i=require("../../utils/file.js"),n=require("fs"),l=require("request"),s=require("../../utils/tools.js"),d=require("../../config/appserviceConfig.js"),c=0,u=0;_exports={downloadFile:t,uploadFile:r}}var _exports;init(),module.exports=_exports;