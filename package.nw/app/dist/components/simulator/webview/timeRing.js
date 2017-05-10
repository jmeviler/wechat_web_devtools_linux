"use strict";function init(){var t=require("../../../lib/react.js"),e=(require("../../../lib/react-dom.js"),require("./pickerRing.js")),r=require("../../../cssStr/cssStr.js"),s=t.createClass({displayName:"TimeRing",getInitialState:function(){for(var t=[],e=[],r=0;r<60;r++)r<24&&t.push(r>9?""+r:"0"+r),e.push(r>9?""+r:"0"+r);return{hourArray:t,minuteArray:e,hourCurrent:0,minuteCurrent:0}},componentDidMount:function(){this.range={},this.setRange("start",this.props.start||"00:00"),this.setRange("end",this.props.end||"23:59"),this.setCurrent(this.props.current||"00:00")},componentWillReceiveProps:function(t){t.show&&(t.current!=this.props.current&&this.setCurrent(t.current),t.start!=this.props.start&&this.setRange("start",t.start),t.end!=this.props.end&&this.setRange("end",t.end))},setCurrent:function(t){var e=t.split(":"),r=parseInt(e[0]),s=parseInt(e[1]);this.setState({hourCurrent:isNaN(r)?0:Math.min(Math.max(r,0),23),minuteCurrent:isNaN(s)?0:Math.min(Math.max(s,0),59)})},setRange:function(t,e){var r=e.split(":"),s=parseInt(r[0]);s=isNaN(s)?0:s;var n=parseInt(r[1]);n=isNaN(n)?0:n,this.range[t]=60*s+n},onHourSelect:function(t){var e=60*t+this.state.minuteCurrent,r=t;e<this.range.start?r=parseInt(this.range.start/60):e>this.range.end&&(r=parseInt(this.range.end/60)),this.setState({hourCurrent:r}),this.refs.hourPicker.setCurrent(r)},onMinuteSelect:function(t){var e=60*this.state.hourCurrent+t,r=t;e<this.range.start?r=parseInt(this.range.start%60):e>this.range.end&&(r=parseInt(this.range.end%60),this.setState({minuteCurrent:r}),this.refs.minutePicker.setCurrent(r)),this.setState({minuteCurrent:r}),this.refs.minutePicker.setCurrent(r)},getValue:function(){return this.state.hourArray[this.state.hourCurrent]+":"+this.state.minuteArray[this.state.minuteCurrent]},render:function(){return t.createElement("div",{className:"wx-picker-bd",style:this.props.show?{}:r.displayNone},t.createElement(e,{ref:"hourPicker",array:this.state.hourArray,current:this.state.hourCurrent,onPickerSelect:this.onHourSelect}),t.createElement(e,{ref:"minutePicker",array:this.state.minuteArray,current:this.state.minuteCurrent,onPickerSelect:this.onMinuteSelect}))}});_exports=s}var _exports;init(),module.exports=_exports;