<template>
    <div>
      <DatePicker ref="ch" type="datetimerange"  :placement="bottom-end"   :options="options" v-model="daterange" @on-change="handleChange"
                       placeholder="Select date" ></DatePicker>
      <!--//<slot name="dp" :text="options"></slot>-->

    </div>
</template>

<script>
  import Moment from 'moment'
  import Vue from 'vue'
    export default {
        name: "CustomDatePicker",
        props:{
          daterange:{
            type:Array,
            default:()=>[Moment().startOf('day').toDate(),Moment().endOf('day').toDate()]
          }
        },
        data(){
          return {
            options: {
                    shortcuts: [
                        {
                            text: '1 周',
                            value () {
                                const start = Moment().startOf('month').subtract(1,'week')
                               const end = Moment().endOf('day')
                               return [start.toDate(), end.toDate()];
                            }
                        },
                        {
                            text: '1个月',
                            value () {
                                const start = Moment().startOf('month')
                               const end = Moment().endOf('month')
                              return [start.toDate(), end.toDate()];
                            }
                        },
                        {
                            text: '3个月',
                            value () {
                                const start = Moment().subtract(3,'months').startOf('day')
                               const end = Moment().endOf('day')
                              return [start.toDate(), end.toDate()];
                            }
                        },{
                            text:'本月',
                            value() {
                              const end = Moment().endOf('month');
                              const start = Moment().startOf('month');
                              return [start.toDate(), end.toDate()];
                            }
                         },{
                            text:'上月',
                            value() {
                              const start = Moment().startOf('month').subtract(1,'months')
                              const end = Moment().endOf('month').subtract(1,'months')

                              return [start.toDate(), end.toDate()];
                            }
                         },
                    ]},
            daterage:this.daterange
          }
        },
      methods:{
          handleChange(){
            let da = [Moment(this.daterange[0]).format("YYYY-MM-DD"),
              Moment(this.daterange[1]).format("YYYY-MM-DD"),
            ];
            this.$emit("changeValue",da);
          },
        getValue(){
            return [Moment(this.daterage[0]).format("YYYY-MM-DD"),Moment(this.daterage[1]).format("YYYY-MM-DD")];
         }
      },
      // watch:{
      //     daterange(newval){
      //       let da = [Moment(newval[0]).format("YYYY-MM-DD"),
      //         Moment(newval[1]).format("YYYY-MM-DD"),
      //       ];
      //       this.$emit("changeValue",da);
      //     }
      // }
    }
</script>

<style scoped>

</style>
