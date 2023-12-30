(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4248"],{"04d2":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"商品ID",prop:"iShopId"}},[a("el-input",{attrs:{placeholder:"请输入商品ID",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.iShopId,callback:function(t){e.$set(e.queryParams,"iShopId",t)},expression:"queryParams.iShopId"}})],1),a("el-form-item",{attrs:{label:"省份",prop:"provinceName"}},[a("el-input",{attrs:{placeholder:"请输入省份",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.provinceName,callback:function(t){e.$set(e.queryParams,"provinceName",t)},expression:"queryParams.provinceName"}})],1),a("el-form-item",{attrs:{label:"城市",prop:"cityName"}},[a("el-input",{attrs:{placeholder:"请输入城市",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.cityName,callback:function(t){e.$set(e.queryParams,"cityName",t)},expression:"queryParams.cityName"}})],1),a("el-form-item",{attrs:{label:"地区",prop:"districtName"}},[a("el-input",{attrs:{placeholder:"请输入地区",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.districtName,callback:function(t){e.$set(e.queryParams,"districtName",t)},expression:"queryParams.districtName"}})],1),a("el-form-item",{attrs:{label:"公司名称",prop:"tenantName"}},[a("el-input",{attrs:{placeholder:"请输入公司名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.tenantName,callback:function(t){e.$set(e.queryParams,"tenantName",t)},expression:"queryParams.tenantName"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),a("el-row",{staticClass:"mb8",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{attrs:{type:"danger",plain:"",icon:"el-icon-refresh",size:"mini"},on:{click:e.handleRefresh}},[e._v("刷新i茅台商品列表")])],1),a("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.shopList}},[a("el-table-column",{attrs:{label:"商品ID",align:"center",prop:"ishopId"}}),a("el-table-column",{attrs:{label:"省份",align:"center",prop:"provinceName"}}),a("el-table-column",{attrs:{label:"城市",align:"center",prop:"cityName"}}),a("el-table-column",{attrs:{label:"地区",align:"center",prop:"districtName"}}),a("el-table-column",{attrs:{label:"完整地址",align:"center",prop:"fullAddress"}}),a("el-table-column",{attrs:{label:"纬度",align:"center",prop:"lat"}}),a("el-table-column",{attrs:{label:"经度",align:"center",prop:"lng"}}),a("el-table-column",{attrs:{label:"名称",align:"center",prop:"name"}}),a("el-table-column",{attrs:{label:"公司名称",align:"center",prop:"tenantName"}}),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"}})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)},n=[],r=a("b775");function i(e){return Object(r["a"])({url:"/imt/shop/list",method:"get",params:e})}function s(){return Object(r["a"])({url:"/imt/shop/refresh",method:"get"})}var o={name:"Shop",data:function(){return{loading:!0,showSearch:!0,total:0,shopList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,iShopId:null,provinceName:null,cityName:null,districtName:null,fullAddress:null,lat:null,lng:null,name:null,tenantName:null},form:{},rules:{}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,i(this.queryParams).then((function(t){e.shopList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={shopId:null,iShopId:null,provinceName:null,cityName:null,districtName:null,fullAddress:null,lat:null,lng:null,name:null,tenantName:null,createTime:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleRefresh:function(){var e=this;s().then((function(){e.getList(),e.$modal.msgSuccess("刷新成功")}))}}},u=o,c=a("2877"),m=Object(c["a"])(u,l,n,!1,null,null,null);t["default"]=m.exports}}]);