webpackJsonp([5],{"3C6w":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7f7A"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);var s=n("s3II");var r=function(t){n("KmwQ")},u=n("VU/8")(a.a,s.a,!1,r,"data-v-073c840a",null);e.default=u.exports},"7f7A":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(n("7+uW")),a=i(n("W1GH"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{rq:{name:"",form:""},foods:[{text:"Select One",value:null},"Carrots","Beans","Tomatoes","Corn"],show:!0,items:[],options:[],totalRows:1,currentPage:1,perPage:5,pageOptions:[5,10,15],item:"",items02:[]}},created:function(){var t=this;o.default.axios.post("/polls/get_form",{}).then(function(e){return t.options=e.data})},computed:{getFields:function(){console.log(this.items);var t={id:"编号",code:"代码",name:"药品名称",spci:"规格 ",form:"剂型",address:"厂商",unit:"单位",unitprice:"单价",searchcode:"搜索码",cate:"分类"},e=[];for(var n in t){var o={key:n,label:t[n],sortable:!1};e.push(o)}return e}},methods:{formatValue:function(t){return t?a.default.formatMoney(t,"￥",2,",","."):t},query:function(){var t=this;o.default.axios.post("/polls/getdata",this.rq).then(function(e){t.items=e.data,t.totalRows=e.data.length})},onRowSelected:function(t){var e=this;this.item=t,t&&o.default.axios.post("/polls/get_detail",t[0]).then(function(t){e.items02=t.data})},onSubmit:function(t){var e=this;t.preventDefault(),o.default.axios.post("/polls/getdata",{name:this.name}).then(function(t){return e.items=t.data})},onReset:function(t){var e=this;t.preventDefault(),this.form.email="",this.form.name="",this.form.food=null,this.form.checked=[],this.show=!1,this.$nextTick(function(){e.show=!0})}}}},KmwQ:function(t,e){},s3II:function(t,e,n){"use strict";var o={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};e.a=o}});
//# sourceMappingURL=5.a55d2eba52d42d154a93.js.map