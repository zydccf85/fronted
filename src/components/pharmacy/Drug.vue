<template>
    <div >
      <a-page-header
    style="border: 1px solid rgb(235, 237, 240)"
    title="药品明细"
    sub-title="可分类过滤"
     >
        <template slot="extra">
            <div style="text-align: center">药品名称：
          <a-auto-complete
          v-model="value"
         :data-source="dataSource"
         style="width: 200px"
         placeholder="请输入至少两个搜索码"
         @search="onSearch" allowClear backfill @select="query"
        >
          </a-auto-complete>
           <a-button type="primary" icon="search" @click="query">查询</a-button>
     </div>
        </template>
        <template slot="tags">
          <a-checkable-tag v-model="item.value"  v-for="(item,index) in drugCata" :key="index" >
           {{item.label}}
        </a-checkable-tag>
        </template>

      <a-table :columns="columns" :data-source="filterData" ref="mytable" bordered  size="small" rowKey="code"
               :pagination="pagination" @change="handleTableChange"  :scroll="{y:350}">
      </a-table>
      </a-page-header>

    </div>
</template>

<script>
  import Vue from 'vue'
  import request from '../../network/index'
  import drugColumn from '../../DefColumn/DrugColumn'
  export default {
    data(){
      return{
        dataSource:[],
        allDrugs:[],
        value:'',
        columns:drugColumn,
        data:[],
        pagination:{
          current:1,
          pageSize:8,
          position:'bottom',
           // :show-total="(total, range) => `${range[0]}-${range[1]} of ${total} items`"
          showTotal:(total,range)=>{
            return `${range[0]}至${range[1]}，共 ${total} 条记录数`;
          }
        },
        drugCata:[]

      }
    },
    mounted(){
         request({url:'/springDemo/drug/getAllDrugName.do'})
          .then(response=>this.allDrugs=response.data);
         this.query();
    },
    methods:{
      onSearch(searchText){
        if(searchText.length>=2){
          this.dataSource= this._.uniq(this.allDrugs.filter((item,index)=>item.searchCode.indexOf(searchText)>=0)
          .map(item=>item.name));
        }else{
          this.dataSource=[];
        }


        // this.dataSource = !searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)];
      },
      handleTableChange(pagination){
        this.pagination.current=pagination.current;
      },
      query(){
        this.pagination.current=1;
        this.fetch();
      },
      fetch(){

        request({url:'/springDemo/drug/getDrugs.do',params:{name:this.value}})
          .then(response=>{
            this.data=response.data;
              this.drugCata= this._.uniq(response.data.map(item=>item.cate)).map((item,index)=>{
                return{
                label:item,value:true
              }
              })

          });
      }

    },
    computed:{
      filterData(){
        this.pagination.current=1;
        let temp = this.drugCata.filter(item=>item.value==true).map(i=>i.label);
        return this.data.filter(item=>temp.indexOf(item.cate)>=0);
      }
    }
  }
</script>

<style scoped>

</style>
