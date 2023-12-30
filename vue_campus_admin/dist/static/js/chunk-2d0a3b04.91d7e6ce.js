(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3b04"],{"02f2":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"系统模块",prop:"appName"}},[a("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入应用编码",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.appName,callback:function(t){e.$set(e.queryParams,"appName",t)},expression:"queryParams.appName"}})],1),a("el-form-item",{attrs:{label:"操作人员",prop:"operId"}},[a("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入操作人员",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.operId,callback:function(t){e.$set(e.queryParams,"operId",t)},expression:"queryParams.operId"}})],1),a("el-form-item",{attrs:{label:"日志名称",prop:"logName"}},[a("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入日志名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.logName,callback:function(t){e.$set(e.queryParams,"logName",t)},expression:"queryParams.logName"}})],1),a("el-form-item",{attrs:{label:"主机地址",prop:"operIp"}},[a("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入主机地址",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.operIp,callback:function(t){e.$set(e.queryParams,"operIp",t)},expression:"queryParams.operIp"}})],1),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-select",{staticStyle:{width:"240px"},attrs:{placeholder:"操作状态",clearable:""},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.dict.type.sys_common_status,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"操作时间"}},[a("el-date-picker",{staticStyle:{width:"240px"},attrs:{"value-format":"yyyy-MM-dd",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),a("el-row",{staticClass:"mb8",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["monitor:operlog:remove"],expression:"['monitor:operlog:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["monitor:operlog:remove"],expression:"['monitor:operlog:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini"},on:{click:e.handleClean}},[e._v("清空")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["monitor:operlog:export"],expression:"['monitor:operlog:export']"}],attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1),a("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"tables",attrs:{data:e.list,"default-sort":e.defaultSort},on:{"selection-change":e.handleSelectionChange,"sort-change":e.handleSortChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{label:"日志编号",align:"center",prop:"operId"}}),a("el-table-column",{attrs:{label:"系统模块",align:"center",prop:"appName"}}),a("el-table-column",{attrs:{label:"日志名称",align:"center",prop:"logName"}}),a("el-table-column",{attrs:{label:"请求方式",align:"center",prop:"requestMethod"}}),a("el-table-column",{attrs:{label:"操作人员",align:"center",prop:"operUserId",width:"100","show-overflow-tooltip":!0,sortable:"custom","sort-orders":["descending","ascending"]},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(null==t.row.operUserId?"游客":t.row.operUserId))])]}}])}),a("el-table-column",{attrs:{label:"操作地址",align:"center",prop:"operIp",width:"130","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"日志记录内容",align:"center",prop:"logContent","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"操作状态",align:"center",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.sys_common_status,value:t.row.status}})]}}])}),a("el-table-column",{attrs:{label:"操作日期",align:"center",prop:"operTime",sortable:"custom",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.operTime)))])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["monitor:operlog:query"],expression:"['monitor:operlog:query']"}],attrs:{size:"mini",type:"text",icon:"el-icon-view"},on:{click:function(a){return e.handleView(t.row,t.index)}}},[e._v("详细")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{title:"操作日志详细",visible:e.open,width:"700px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px",size:"mini"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"应用编码："}},[e._v(e._s(e.form.appName)+" / "+e._s(e.form.logName))]),a("el-form-item",{attrs:{label:"登录信息："}},[e._v(" "+e._s(e.form.operIp)+" ")])],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"请求地址："}},[e._v(e._s(e.form.operUrl))]),a("el-form-item",{attrs:{label:"请求方式："}},[e._v(e._s(e.form.requestMethod))])],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"操作方法："}},[e._v(e._s(e.form.method))])],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"请求参数："}},[e._v(e._s(e.form.operParam))])],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"返回参数："}},[e._v(e._s(e.form.jsonResult))])],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"操作状态："}},[0===e.form.status?a("div",[e._v("正常")]):1===e.form.status?a("div",[e._v("失败")]):e._e()])],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"操作时间："}},[e._v(e._s(e.parseTime(e.form.operTime)))])],1),a("el-col",{attrs:{span:24}},[1===e.form.status?a("el-form-item",{attrs:{label:"异常信息："}},[e._v(e._s(e.form.errorMsg))]):e._e()],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{staticStyle:{"white-space":"pre-wrap"},attrs:{label:"日志内容："}},[e._v(e._s(e.form.logContent))])],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.open=!1}}},[e._v("关 闭")])],1)],1)],1)},o=[],l=a("5530"),n=(a("d81d"),a("b775"));function s(e){return Object(n["a"])({url:"/monitor/operlog/list",method:"get",params:e})}function i(e){return Object(n["a"])({url:"/monitor/operlog/"+e,method:"delete"})}function p(){return Object(n["a"])({url:"/monitor/operlog/clean",method:"delete"})}var m={name:"Operlog",dicts:["sys_oper_type","sys_common_status"],data:function(){return{loading:!0,ids:[],multiple:!0,showSearch:!0,total:0,list:[],open:!1,dateRange:[],form:{},queryParams:{pageNum:1,pageSize:10,title:void 0,operId:void 0,operIp:void 0,logName:void 0,status:void 0}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,s(this.addDateRange(this.queryParams,this.dateRange)).then((function(t){e.list=t.rows,e.total=t.total,e.loading=!1}))},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.dateRange=[],this.resetForm("queryForm"),this.queryParams.pageNum=1},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.operId})),this.multiple=!e.length},handleSortChange:function(e,t,a){this.queryParams.orderByColumn=e.prop,this.queryParams.isAsc=e.order,this.getList()},handleView:function(e){this.open=!0,this.form=e},handleDelete:function(e){var t=this,a=e.operId||this.ids;this.$modal.confirm('是否确认删除日志编号为"'+a+'"的数据项？').then((function(){return i(a)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleClean:function(){var e=this;this.$modal.confirm("是否确认清空所有操作日志数据项？").then((function(){return p()})).then((function(){e.getList(),e.$modal.msgSuccess("清空成功")})).catch((function(){}))},handleExport:function(){this.download("monitor/operlog/export",Object(l["a"])({},this.queryParams),"operlog_".concat((new Date).getTime(),".xlsx"))}}},u=m,c=a("2877"),d=Object(c["a"])(u,r,o,!1,null,null,null);t["default"]=d.exports}}]);