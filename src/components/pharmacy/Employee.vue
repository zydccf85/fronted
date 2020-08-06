<template>
     <div >
      <a-page-header
    style="border: 1px solid rgb(235, 237, 240)"
    title="职员明细"
    sub-title="可分类过滤"
     >
        <template slot="extra">
            <div style="text-align: center">职员姓名：
          <a-auto-complete
          v-model="value"
         :data-source="dataSource"
         placeholder=""
         @search="" allowClear backfill @select=""
        >
          </a-auto-complete>
           <a-button type="primary" icon="search" @click="query">查询</a-button>
     </div>
        </template>
        <a-button-group>
          <a-button icon="search" type="primary" :disabled="selectedRow==null" @click="view">查看</a-button>
          <a-button icon="add" type="primary" :disabled="selectedRow==null" @click="view">新增</a-button>
         <a-button type="primary" icon="edit" :disabled="selectedRow==null" @click="view">修改</a-button>
          <a-button type="danger" icon="delete" :disabled="selectedRow==null" @click="view">删除</a-button>
     </a-button-group>
        <a-table :columns="columns" :data-source="tableData" bordered  size="small" rowKey="code" :row-selection="rowSelection"
               :pagination="pagination" @change="handleTableChange"  :scroll="{y:350}">
      </a-table>


      </a-page-header>
       <a-modal v-model="visible"  title="职员明细" ok-text="确认" cancel-text="取消" @ok="visible=!visible" :width="600">
         <div>
          <a-form-model  :model="form" >
                <a-form-model-item :label="mymap[k]" :label-col="{span:4}" :wrapper-col="{span:18}"
                                   style="margin:0" v-for="(item,k,index) in form" :key="index">
              <a-input placeholder=""
                       v-model="item==null?'':item"  size="small" :disabled="index==0"/>
            </a-form-model-item>

          </a-form-model>
           </div>
      </a-modal>

    </div>
</template>

<script>
  import employeeColumn from '../../DefColumn/EmployeeColumn'
    export default {
        name: "Employee",
        data(){
          return {
            value:'',
            columns:employeeColumn,
            tableData:[],
            selectedRow:null,
            visible:false,
            form:{},
            mymap:{id:'编号'}
          }
        },
      mounted(){
          this.fetch();

         this.columns.forEach(item=>{
           this.mymap[item.key.toLowerCase()]=item.title;
         })
      },
      methods:{
          fetch(){
            this.axios.get("/springDemo/employee/getEmployee.do")
              .then(response=>this.tableData=response.data)
          },

        view(event){
            let text = event.target.innerText;

            switch(text) {
              case '查看':
               this.form = this._.clone(this.selectedRow)
                  break;
               case '新增':
                 let temp =this._.clone(this.selectedRow);
                 for(let i in temp){
                   temp[i]=''
                 }
                 this.form=temp;
                  break;
                case '修改':
                  break;
              case '删除':
                  break;
          }
          this.visible = true;
        }
      },
      computed: {
        rowSelection() {
      return {
        type:'radio',
        columnTitle:'选中项',
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          this.selectedRow=selectedRows[0];
        },
        getCheckboxProps: record => (
          {
          props: {

            disabled: false, // Column configuration not to be checked
            name: record.name,
          },
        }),
      };
    },

  },
    }
</script>

<style scoped>


</style>
