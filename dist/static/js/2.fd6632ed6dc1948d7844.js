webpackJsonp([2],{"4rl6":function(e,t){},"9Vhy":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i(a("7+uW"));var n=i(a("NaW9")),r=i(a("uC/g"));function i(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{dataSource:[],allDrugs:[],value:"",columns:r.default,data:[],pagination:{current:1,pageSize:8,position:"bottom",showTotal:function(e,t){return t[0]+"至"+t[1]+"，共 "+e+" 条记录数"}},drugCata:[]}},mounted:function(){var e=this;(0,n.default)({url:"/springDemo/drug/getAllDrugName.do"}).then(function(t){return e.allDrugs=t.data}),this.query()},methods:{onSearch:function(e){e.length>=2?this.dataSource=this._.uniq(this.allDrugs.filter(function(t,a){return t.searchCode.indexOf(e)>=0}).map(function(e){return e.name})):this.dataSource=[]},handleTableChange:function(e){this.pagination.current=e.current},query:function(){this.pagination.current=1,this.fetch()},fetch:function(){var e=this;(0,n.default)({url:"/springDemo/drug/getDrugs.do",params:{name:this.value}}).then(function(t){e.data=t.data,e.drugCata=e._.uniq(t.data.map(function(e){return e.cate})).map(function(e,t){return{label:e,value:!0}})})}},computed:{filterData:function(){this.pagination.current=1;var e=this.drugCata.filter(function(e){return 1==e.value}).map(function(e){return e.label});return this.data.filter(function(t){return e.indexOf(t.cate)>=0})}}}},FFs5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("9Vhy"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);var u=a("z/he");var l=function(e){a("4rl6")},o=a("VU/8")(r.a,u.a,!1,l,"data-v-065a340a",null);t.default=o.exports},"uC/g":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a("W1GH"),i=(n=r)&&n.__esModule?n:{default:n};var u=[{title:"编码",dataIndex:"code",key:"code"},{title:"药品名称",dataIndex:"name",key:"name",ellipsis:!0,width:180},{title:"规格",dataIndex:"spci",key:"spci",ellipsis:!0},{title:"剂型",dataIndex:"form",key:"form",ellipsis:!0},{title:"厂商",dataIndex:"address",key:"address",ellipsis:!0},{title:"单位",dataIndex:"unit",key:"unit",ellipsis:!0},{title:"单价",dataIndex:"unitPrice",key:"unitPrice",ellipsis:!0,customRender:function(e,t,a){return i.default.formatMoney(e,"￥",2,",",".")}},{title:"分类",dataIndex:"cate",key:"cate",ellipsis:!0},{title:"性质分类",dataIndex:"cata",key:"cata",ellipsis:!0}];u.forEach(function(e){return e.align="center"}),t.default=u},"z/he":function(e,t,a){"use strict";var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-page-header",{staticStyle:{border:"1px solid rgb(235, 237, 240)"},attrs:{title:"药品明细","sub-title":"可分类过滤"}},[a("template",{slot:"extra"},[a("div",{staticStyle:{"text-align":"center"}},[e._v("药品名称：\n      "),a("a-auto-complete",{staticStyle:{width:"200px"},attrs:{"data-source":e.dataSource,placeholder:"请输入至少两个搜索码",allowClear:"",backfill:""},on:{search:e.onSearch,select:e.query},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.query}},[e._v("查询")])],1)]),e._v(" "),a("template",{slot:"tags"},e._l(e.drugCata,function(t,n){return a("a-checkable-tag",{key:n,model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}},[e._v("\n       "+e._s(t.label)+"\n    ")])}),1),e._v(" "),a("a-table",{ref:"mytable",attrs:{columns:e.columns,"data-source":e.filterData,bordered:"",size:"small",rowKey:"code",pagination:e.pagination,scroll:{y:350}},on:{change:e.handleTableChange}})],2)],1)},staticRenderFns:[]};t.a=n}});
//# sourceMappingURL=2.fd6632ed6dc1948d7844.js.map