webpackJsonp([7],{TFX3:function(e,t){},qpIB:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("q2r3"),n={name:"assets",data:function(){return{tableData:[],isLoading:!0}},methods:{deviceChange:function(e){var t=this;t.isLoading=!0,e=e||"",Object(r.b)(e).then(function(e){200==e.code&&(t.tableData=e.data,console.log(t.tableData)),t.isLoading=!1})}},created:function(){var e=this.$route.query.id;this.deviceChange(e)}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{staticClass:"breadcrumb"},[a("el-breadcrumb-item",{staticClass:"breadcrumb-item",attrs:{to:{name:"assets"},replace:!0}},[e._v("资产管理")]),e._v(" "),a("el-breadcrumb-item",{staticClass:"breadcrumb-item"},[e._v("变更记录")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],ref:"singleTable",staticStyle:{width:"100%"},attrs:{border:!0,"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)",data:e.tableData,"highlight-current-row":"",fit:!0}},[a("el-table-column",{attrs:{property:"deviceNo",label:"资产编号"}}),e._v(" "),a("el-table-column",{attrs:{property:"qrcode",label:"二维码编号"}}),e._v(" "),a("el-table-column",{attrs:{property:"userno",label:"用户工号"}}),e._v(" "),a("el-table-column",{attrs:{property:"create_time",label:"用户工号"}})],1)],1)},staticRenderFns:[]};var i=a("Z0/y")(n,l,!1,function(e){a("TFX3")},"data-v-463da558",null);t.default=i.exports}});
//# sourceMappingURL=7.d51906e0e17d4bdd7ae7.js.map