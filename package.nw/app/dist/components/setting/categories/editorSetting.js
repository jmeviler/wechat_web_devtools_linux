"use strict";function init(){var e=require("../../../lib/react.js"),t=require("../../dropdown/dropdown"),i=require("../../../stores/windowStores.js"),a=require("../../../actions/windowActions.js"),s=require("../../../utils/editorConfigurable.js"),n=(s.Configurable,s.ConfigurableDefaults,require("../../../utils/fonts.js")),o=(require("../../../common/log/log.js"),e.createClass({displayName:"EditorSetting",getInitialState:function(){return this.tasksOnSave={},this.getInitState()},save:function(){var e={},t=this.tasksOnSave;for(var i in t)t[i]&&t[i](e);this.updateEditorConfig(e),this.reset()},cancel:function(){this.reset()},restoreDefault:function(){var e=this,t=this.getInitState(!0);this.setState(t),this.tasksOnSave.setTheme=function(t){t.theme=e.state.themeList[e.state.themeSelectedIndex]},this.tasksOnSave.setFontFamily=function(t){t.fontFamily=e.state.fontFamilyList[e.state.fontFamilySelectedIndex]},this.tasksOnSave.setFontSize=function(t){t.fontSize=e.state.fontSize},this.tasksOnSave.setLineSpacing=function(t){t.lineHeight=e.state.lineSpacing+e.state.fontSize},this.tasksOnSave.setWrap=function(t){t.wrappingColumn=e.state.wrap},this.tasksOnSave.setInsertSpaces=function(t){t.insertSpaces=e.state.insertSpaces},this.tasksOnSave.setTabSize=function(t){t.tabSize=e.state.tabSize},this.tasksOnSave.setAutoSave=function(t){t.autoSave=e.state.autoSave},this.tasksOnSave.setAutoRefreshWather=function(t){t.autoRefresh=e.state.autoRefresh},this.tasksOnSave.setSaveBeforeCompile=function(t){t.saveBeforeCompile=e.state.saveBeforeCompile}},updateEditorConfig:function(e){a.updateEditorConfig(e)},getEditorConfig:function(e){return i.getEditorConfig(e)},getEditorConfigAll:function(){return i.getEditorConfigAll()},getEditorDefaultConfigAll:function(){return i.getEditorDefaultConfigAll()},onThemeDropdownItemSelected:function(e,t){var i=this;e!==this.state.themeSelectedIndex&&this.setState({themeSelectedIndex:e}),this.tasksOnSave.setTheme=function(e){e.theme=i.state.themeList[i.state.themeSelectedIndex]}},onFontFamilyDropdownWillOpen:function(){var e=this;this.props.setCursorLoading(!0),n(function(t,i){if(t)return void e.props.setCursorLoading(!1);0===i.length&&(i=[e.getEditorConfig("fontFamily")]);var a=i.indexOf(e.state.fontFamilyList[e.state.fontFamilySelectedIndex]);a===-1&&(a=i.indexOf("Menlo"),a===-1&&(a=i.indexOf("Courier New"),a===-1&&(a=i.indexOf("Arial"),a===-1&&(a=0)))),e.setState({fontFamilyList:i,fontFamilySelectedIndex:a},function(){e.props.setCursorLoading(!1)})})},onFontFamilyDropdownItemSelected:function(e,t){var i=this;e!==this.state.fontFamilySelectedIndex?this.setState({fontFamilySelectedIndex:e}):this.setState({fontFamilySelectedIndex:e}),this.tasksOnSave.setFontFamily=function(e){e.fontFamily=i.state.fontFamilyList[i.state.fontFamilySelectedIndex]}},fontFamilyDropdownGetItemStyle:function(e){return{"font-family":this.state.fontFamilyList[e]}},onFontSizeInputChange:function(e){var t=parseInt(e.target.value);this.setState({fontSize:t}),this.tasksOnSave.setFontSize=function(e){e.fontSize=t}},onlineSpacingChange:function(e){var t=this,i=parseInt(e.target.value);this.setState({lineSpacing:i}),this.tasksOnSave.setLineSpacing=function(e){e.lineHeight=i+t.state.fontSize}},onWrapChange:function(e){var t=0==this.state.wrap?-1:0;this.setState({wrap:t}),this.tasksOnSave.setWrap=function(e){e.wrappingColumn=t}},oninsertSpacesChange:function(e){var t=!this.state.insertSpaces;this.setState({insertSpaces:t}),this.tasksOnSave.setInsertSpaces=function(e){e.insertSpaces=t}},onTabSizeChange:function(e,t){var i=t;this.setState({tabSize:i}),this.tasksOnSave.setTabSize=function(e){e.tabSize=i}},onAutoSaveChange:function(e){var t=!this.state.autoSave;this.setState({autoSave:t}),this.tasksOnSave.setAutoSave=function(e){e.autoSave=t}},onAutoRefreshChange:function(e){var t=!this.state.autoRefresh;this.setState({autoRefresh:t}),this.tasksOnSave.setAutoRefreshWather=function(e){e.autoRefresh=t}},onSaveBeforeCompileChange:function(e){var t=!this.state.saveBeforeCompile;this.setState({saveBeforeCompile:t}),this.tasksOnSave.setSaveBeforeCompile=function(e){e.saveBeforeCompile=t}},getInitState:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(this.props.project,e?this.getEditorDefaultConfigAll():this.getEditorConfigAll()),i=["vs","vs-dark","hc-black"];this.themeListDisplay=["白色","深色","黑色"],this.tabSizeList=[2,3,4];var a=0,s=this.state&&this.state.fontFamilyList&&this.state.fontFamilyList.length>1?this.state.fontFamilyList:[t.fontFamily],n=(a=s.indexOf(t.fontFamily))>-1?a:0;return{fontSize:parseInt(t.fontSize),lineSpacing:parseInt(t.lineHeight)-parseInt(t.fontSize),wrap:t.wrappingColumn,themeList:i,themeSelectedIndex:i.indexOf(t.theme),fontFamilyList:s,fontFamilySelectedIndex:n,insertSpaces:t.insertSpaces,tabSize:parseInt(t.tabSize),autoSave:t.autoSave,autoRefresh:t.autoRefresh,saveBeforeCompile:t.saveBeforeCompile,dropdownStyle:{width:"10rem",height:"2rem"}}},reset:function(){this.tasksOnSave={},this.setState(this.getInitState())},render:function(){return this.props.show?e.createElement("div",{className:"setting-sections"},e.createElement("section",{className:"setting-section"},e.createElement("div",{className:"setting-section-title"},"外观"),e.createElement("ul",{className:"setting-section-list"},e.createElement("li",{className:"setting-section-list-item"},e.createElement("div",{className:"option-name"},"主题"),e.createElement("div",{className:"option-value"},e.createElement(t,{onItemSelected:this.onThemeDropdownItemSelected.bind(this),items:this.themeListDisplay,selectedIndex:this.state.themeSelectedIndex,dropdownStyle:this.state.dropdownStyle}))),e.createElement("li",{className:"setting-section-list-item"},e.createElement("div",{className:"option-name"},"字体"),e.createElement("div",{className:"option-value"},e.createElement(t,{onDropdownWillOpen:this.onFontFamilyDropdownWillOpen.bind(this),onItemSelected:this.onFontFamilyDropdownItemSelected.bind(this),getItemStyle:this.fontFamilyDropdownGetItemStyle.bind(this),dropdownStyle:this.state.dropdownStyle,items:this.state.fontFamilyList,selectedIndex:this.state.fontFamilySelectedIndex}))),e.createElement("li",{className:"setting-section-list-item"},e.createElement("div",{className:"option-name"},"字号"),e.createElement("div",{className:"option-value"},e.createElement("input",{id:"setting-editor-font-size",type:"number",className:"ui-input",value:this.state.fontSize,onChange:this.onFontSizeInputChange.bind(this)}))),e.createElement("li",{className:"setting-section-list-item"},e.createElement("div",{className:"option-name"},"行距"),e.createElement("div",{className:"option-value"},e.createElement("input",{id:"setting-editor-line-height",type:"number",className:"ui-input",value:this.state.lineSpacing,onChange:this.onlineSpacingChange.bind(this)}))))),e.createElement("section",{className:"setting-section"},e.createElement("div",{className:"setting-section-title"},"编辑"),e.createElement("ul",{className:"setting-section-list"},e.createElement("li",{className:"setting-section-list-item"},e.createElement("div",{className:"option-name"},"修改文件时自动保存"),e.createElement("div",{className:"option-value"},e.createElement("label",{htmlFor:"autoSaveCheckbox",className:"ui-checkbox"},e.createElement("input",{id:"autoSaveCheckbox",type:"checkbox",checked:this.state.autoSave,onChange:this.onAutoSaveChange.bind(this)}),e.createElement("i",{className:"ui-icon-check-square"}),e.createElement("i",{className:"ui-icon-square-o"})))),e.createElement("li",{className:"setting-section-list-item"},e.createElement("div",{className:"option-name"},"编译时自动保存所有文件"),e.createElement("div",{className:"option-value"},e.createElement("label",{htmlFor:"saveBeforeCompileCheckbox",className:"ui-checkbox"},e.createElement("input",{id:"saveBeforeCompileCheckbox",type:"checkbox",checked:this.state.saveBeforeCompile,onChange:this.onSaveBeforeCompileChange.bind(this)}),e.createElement("i",{className:"ui-icon-check-square"}),e.createElement("i",{className:"ui-icon-square-o"})))),e.createElement("li",{className:"setting-section-list-item"},e.createElement("div",{className:"option-name"},"文件保存时自动编译小程序"),e.createElement("div",{className:"option-value"},e.createElement("label",{htmlFor:"autoRefreshCheckbox",className:"ui-checkbox"},e.createElement("input",{id:"autoRefreshCheckbox",type:"checkbox",checked:this.state.autoRefresh,onChange:this.onAutoRefreshChange.bind(this)}),e.createElement("i",{className:"ui-icon-check-square"}),e.createElement("i",{className:"ui-icon-square-o"})))),e.createElement("li",{className:"setting-section-list-item"},e.createElement("div",{className:"option-name"},"自动折行"),e.createElement("div",{className:"option-value"},e.createElement("label",{htmlFor:"wrapCheckbox",className:"ui-checkbox"},e.createElement("input",{id:"wrapCheckbox",type:"checkbox",checked:0==this.state.wrap,onChange:this.onWrapChange.bind(this)}),e.createElement("i",{className:"ui-icon-check-square"}),e.createElement("i",{className:"ui-icon-square-o"})))),e.createElement("li",{className:"setting-section-list-item"},e.createElement("div",{className:"option-name"},"用空格代替 Tab"),e.createElement("div",{className:"option-value"},e.createElement("label",{htmlFor:"insertSpacesCheckbox",className:"ui-checkbox"},e.createElement("input",{id:"insertSpacesCheckbox",type:"checkbox",checked:this.state.insertSpaces,onChange:this.oninsertSpacesChange.bind(this)}),e.createElement("i",{className:"ui-icon-check-square"}),e.createElement("i",{className:"ui-icon-square-o"})))),e.createElement("li",{className:"setting-section-list-item"},e.createElement("div",{className:"option-name"},"Tab 大小"),e.createElement("div",{className:"option-value"},e.createElement(t,{onItemSelected:this.onTabSizeChange.bind(this),dropdownStyle:this.state.dropdownStyle,items:this.tabSizeList,selectedIndex:this.state.tabSize-2})))))):null}}));_exports=o}var _exports;init(),module.exports=_exports;