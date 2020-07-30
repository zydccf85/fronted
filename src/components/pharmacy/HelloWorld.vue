<template>
  <!--<div class="hello">-->
    <!--<div class="m-4 pb-3  mycolor" >-->
     <!--<b-form inline class="bg-light">-->
        <!--<label  for="inline-form-input-name">药品名称：</label>-->
    <!--<b-input-->
      <!--id="inline-form-input-name"-->
      <!--class="mb-2 mr-sm-2 mb-sm-0"-->
      <!--placeholder="Jane Doe"  v-model="rq.name"-->
    <!--&gt;</b-input>-->
    <!--<label class="mr-sm-2" for="inline-form-custom-select-pref">剂型</label>-->
    <!--<b-form-select-->
      <!--id="inline-form-custom-select-pref"-->
      <!--class="mb-2 mr-sm-2 mb-sm-0"-->
      <!--:options="options"-->
      <!--v-model="rq.form"-->
    <!--&gt;</b-form-select>-->
    <!--<label class="sr-only" for="inline-form-input-username">Username</label>-->
    <!--<b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">-->
      <!--<b-input id="inline-form-input-username" placeholder="Username"></b-input>-->
    <!--</b-input-group>-->

    <!--<b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>-->

    <!--<b-button variant="primary" @click="query" size="sm"><b-icon-search></b-icon-search>查询</b-button>-->
  <!--</b-form>-->
    <!--<div class="mt-2 border-top border-info ">-->
        <!--<b-pagination-->
          <!--v-model="currentPage"-->
          <!--:total-rows="totalRows"-->
          <!--:per-page="perPage"-->
          <!--align="right"-->
          <!--size="sm"-->
          <!--class="my-0"-->
        <!--&gt;</b-pagination>-->
        <!--<b-table responsive small sticky-header select-mode="single" selectable :current-page="currentPage" class="smallfontsize"-->
      <!--:per-page="perPage" @row-selected="onRowSelected" caption-top-->
                 <!--:items="items"  >-->
          <!--<template v-slot:table-caption ><span class="text-danger">处方头</span></template>-->
          <!--<template v-slot:cell(unitprice)="data">-->
            <!--<span class="text-info">{{formatValue(data.value)}}</span>-->
          <!--</template>-->

        <!--</b-table>-->
        <!--&lt;!&ndash;<span>{{item}}</span>&ndash;&gt;-->
        <!--<b-table responsive small :items="items02" class="smallfontsize border-top border-success" >-->

        <!--</b-table>-->
    <!--</div>-->
      <!--</div>-->
  <!--</div>-->
  <div> </div>
</template>

<script>
  import Vue from 'vue'
  import Accounting from 'accounting'
 export default {
    data() {
      return {
        rq: {
          name:'',
          form:''
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true,
        items:[],
        options:[],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
        item:'',
        items02:[]
      }
    },
   created(){
        Vue.axios.post("/polls/get_form",{})
        .then((response)=> this.options= response.data)
      },
   computed:{
      getFields(){
        console.log(this.items)
        var ss={'id':'编号','code':'代码','name':'药品名称','spci':'规格 ','form':'剂型',
        'address':'厂商','unit':'单位','unitprice':'单价','searchcode':'搜索码','cate':'分类'}
        var fields = []
        for(let k in ss){
          var temp = {'key':k,'label':ss[k],'sortable':false};

          fields.push(temp);
       }
       return fields;
      },

   },
    methods: {
      formatValue(val){
        if(val){
          return Accounting.formatMoney(val,'￥',2,',','.')

        }
        return val;
     },
      query(){
        Vue.axios.post("/polls/getdata",this.rq)
        .then((response)=> {
          this.items= response.data;
          this.totalRows = response.data.length})
      },
      onRowSelected(item){
        this.item = item;
        if(item){
           Vue.axios.post("/polls/get_detail",item[0])
        .then((response)=> {
          this.items02= response.data})
        }


      },
      onSubmit(evt) {
        evt.preventDefault()
        // alert(JSON.stringify(this.form))
        Vue.axios.post("/polls/getdata",{'name':this.name})
        .then((response)=> this.items= response.data)
      },

      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.mycolor {
    color:#005293;
  }
.smallfontsize{
    font-size: 12px;
  }
</style>
