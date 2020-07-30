<template>
  <div>
    <a-page-header
    style="border: 1px solid rgb(235, 237, 240)"
    title="处方明细"
    sub-title=""
  >
      <template slot="extra">
      发药时间：
     <a-range-picker
       :showTime="false"
        format="YYYY-MM-DD"
       :ranges=" dateRange"
       v-model="fytime"
    />
        医生：
    <a-select  style="width: 120px" @change="handleChange"   v-model="filter.doctor" >
      <a-select-option value="">所有医生</a-select-option>
      <a-select-option :value="item"  v-for="(item,index) in doctors" :key="index">
        {{item}}
      </a-select-option>
    </a-select>
        患者：
    <a-input placeholder="患者姓名" allowClear :maxLength="6" style="width:100px;"  v-model="filter.patient"/>
        <a-button type="primary" icon="search" @click="query">查询</a-button>
      </template>
      <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="处方明细表">
        <a-table :columns="columns" :data-source="data"  bordered  size="small" rowKey="opertime" :expandRowByClick="true"
               :pagination="pagination" @change="handleTableChange" :scroll="{y:350}"  @expand="expandInner">
           <a-table style="background:lightgray"
         slot="expandedRowRender" bordered size="small"
         :columns="innerColumns"
          :data-source="innerData"
         :pagination="false"
          rowKey="id"
          />

       </a-table>
      </a-tab-pane>
      <a-tab-pane key="2" tab="统计明细表(按费别)" force-render style="background: whitesmoke;text-align: center;">
          <a-table :columns="tjcols" :data-source="tongji" :scroll="{y:350}" size="small" :pagination="false">
          </a-table>
      </a-tab-pane>

    </a-tabs>
    </a-page-header>



  </div>
</template>

<script>
  import Vue from 'vue'
import CfheadColumn from '../../DefColumn/CfheadColumn'
  import moment from 'moment'
    export default {
        name: "Cf",
        data(){
          return{
            moment,
            doctors:[],
            dateRange:{
              "今日":[moment().startOf('day'),moment().endOf('day')],
              "昨天":[moment().subtract(1,'days').startOf('day'),moment().subtract(1,'days').endOf('day')],
              "前天":[moment().subtract(2,'days').startOf('day'),moment().subtract(2,'days').endOf('day')],
              "近一周":[moment().subtract(7,'days').startOf('day'),moment().endOf('day')],
              "近一月":[moment().subtract(1,'months').startOf('day'),moment().endOf('day')],
              "本月":[moment().startOf('month'),moment().endOf('day')],
              "本年":[moment().startOf('year'),moment().endOf('day')],

            },
            data:[],
            columns:CfheadColumn,
            pagination:{
              current:1,
              pageSize:8,
              showTotal:(total,range)=>{
                return `${range[0]}至${range[1]}，共 ${total} 条记录数`;
          }
            },
            fytime:[moment().startOf('day'),moment().endOf('day')],
            filter:{
              doctor:'',
              patient:'',

            },
            tongji:[],
            tjcols:[
              {title:'医生',key:'医生',dataIndex:'医生'},
              {title:'金额',key:'金额',dataIndex:'金额',ellipsis: true,width:150 },
              {title:'人次',key:'人次',dataIndex:'人次'},
              {title:'处方数',key:'处方数',dataIndex:'处方数'},
              {title:'自费',key:'自费',dataIndex:'自费'},
              {title:'医保',key:'医保',dataIndex:'医保'},
              {title:'普通',key:'普通',dataIndex:'普通'},
              {title:'儿科',key:'儿科',dataIndex:'儿科'},
              {title:'精二',key:'精二',dataIndex:'精二'},
              {title:'急诊',key:'急诊',dataIndex:'急诊'},
              {title:'麻醉',key:'麻醉',dataIndex:'麻醉'},
              {title:'静滴',key:'静滴',dataIndex:'静滴'},
            ],
            innerColumns:[
              {title:'组号',key:'gid',dataIndex:'gid',width:50},
              {title:'药品名称',key:'drug',dataIndex:'drug'},
              {title:'规格',key:'spci',dataIndex:'spci'},
              // {title:'单价',key:'drug',dataIndex:'drug'},
              {title:'用法用量',customRender:function(text,record,index){
                return record.yongliang+record.danwei+"  "+record.cishu+"  "+record.yongfa
                }},
              {title:'数量',key:'quantity',dataIndex:'quantity',width:50},
              {title:'单位',key:'unit',dataIndex:'unit',width:50},

            ],
            innerData:[]
          }
        },
        mounted(){
          this.axios.get("/springDemo/api/getDoctors.do")
            .then(response=>this.doctors=response.data);
          this.innerColumns.forEach(item=>item.align='center');
          this.tjcols.forEach(item=>item.align='center')

        },
      methods:{
          query(){
            this.pagination.current=1;
            this.fetch();
          },
          fetch(){
            this.filter.beginTime=this.fytime[0].format('YYYY-MM-DD HH:mm:ss');
            this.filter.endTime=this.fytime[1].format('YYYY-MM-DD HH:mm:ss')
            this.axios.get("/springDemo/api/CfHead.do",{params:this.filter})
              .then(response=>{
                this.data=response.data;
                this.groupByDoctor();
              })
          },
          handleTableChange(pagination){
            this.pagination.current=pagination.current;
          },
          groupByDoctor(){

            this.tongji =this._.chain(this.data).groupBy('doctor').map((val,key,obj)=>{
              let feibie = this._.countBy(val,'feibie')
              let leixing =this._.countBy(val,'cftype')
              let totalprice = this.$accounting.formatMoney(this._.sumBy(val,'totalprice'),"￥",2,',','.');
              let renci = this._.uniqBy(val,'pid').length;
              let cfcount = val.length;
              let yongfa={"静滴":0}
              val.forEach(item=>{
                if(item.cfDetail.some(item=>item.yongfa=='静滴')){
                  yongfa['静滴']++;
                }
              })
              return this._.defaults({'医生':key},feibie,leixing,{'金额':totalprice},{'人次':renci},{'处方数':cfcount},yongfa)
            }).orderBy('医生').value();
              console.log(this.tongji)
          },
        expandInner(expanded,record){
            console.log(record);
            if(expanded)
             this.innerData = record.cfDetail;

        }
      }

    }
</script>

<style scoped>
  .ivu-form-inline  {
    display: inline-block;
    margin-left: 30px;
     vertical-align: middle;
    border-bottom: 1px solid blue;
  }

 .ivu-form-item {
    margin-bottom: 10px;
    vertical-align: middle;
    zoom: 1;
}
.ivu-modal-wrap *{
  color:blue;
}


</style>
