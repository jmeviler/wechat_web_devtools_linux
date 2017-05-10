"use strict";function init(){var e=require("../../../lib/react.js"),t=(require("../../../lib/react-dom.js"),require("../../../stores/webviewStores.js")),s=require("../../../cssStr/cssStr.js"),a=(require("../../../utils/file.js"),require("../../../weapp/utils/tools.js"),e.createClass({displayName:"PreviewImage",getInitialState:function(){return{urls:[],translateX:0,load:!1,hidden:!0}},componentDidMount:function(){t.on("SEND_AS_SDK",this._handleAssdkCommand)},componentWillUnmount:function(){t.removeListener("SEND_AS_SDK",this._handleAssdkCommand)},_handleAssdkCommand:function(e,t,s){var a=t.args;if("previewImage"===e){var i=a.current,n=a.urls||[];i=n.indexOf(i),i=i>=0?i:0,this.callback=s,this.setState({urls:n,translateX:-i*this.props.width,load:!0,hidden:!1}),s({errMsg:"previewImage:ok"})}},hide:function(){this.setState({hidden:!0})},onMouseDown:function(e){this.startX=e.pageX,this.touch=!0,this.lastTranslateX=this.state.translateX},onMouseMove:function(e){if(this.touch){var t=e.pageX-this.startX+this.lastTranslateX;t=Math.min(0,t),t=Math.max((1-this.state.urls.length)*this.props.width,t),this.setState({translateX:t})}},onMouseUp:function(e){this.startX=0,this.touch=!1,this.setState({translateX:parseInt(this.state.translateX/this.props.width-.5)*this.props.width})},render:function(){var t={width:100*this.state.urls.length+"%",transition:"all linear 0.3s",transform:"translate3d("+this.state.translateX+"px,0,0)"};return this.state.load?e.createElement("div",{className:"weui-gallery-wrapper",style:this.state.hidden?s.displayNone:{}},e.createElement("div",{className:"simulator-hd"},e.createElement("div",{className:"simulator-hd-back",onClick:this.hide},e.createElement("i",{className:"simulator-hd-back-icon"}),e.createElement("span",{style:{color:"white"}},"返回"))),e.createElement("div",{className:"weui-gallery-body"},e.createElement("div",{className:"weui-gallery",style:t,onMouseDown:this.onMouseDown,onMouseMove:this.onMouseMove,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseUp},this.state.urls.map(function(t){var s=t;return t.indexOf("wxfile://")>=0&&(s=t.replace("wxfile://","http://wxfile.open.weixin.qq.com/")),e.createElement("div",{className:"weui-gallery__img",style:{backgroundImage:'url("'+s+'")'}})})))):null}}));_exports=a}var _exports;init(),module.exports=_exports;