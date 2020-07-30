<template>
    <div>
      <i-table :columns="dataTable.columns" :data="dataTable.fenYe()" :highlight-row="true" tooltip-theme="light"
                   stripe :height="450" size="small" border>
        <templdate slot="footer">
          <Page :total="dataTable.total" show-total class="float-right mx-4"
                :page-size="dataTable.pageSize"
                :current.sync="dataTable.currentPage" show-sizer v-if="dataTable.visible"/>
        </templdate>

      </i-table>
    </div>
</template>

<script>
  import {MyTable} from '../../class/index.js'
    export default {
        name: "TableWithPager",
        props:{
          mytable:MyTable,
          default:null
        },
        data(){
          return {
            dataTable:this.mytable
          }
        },

    }
</script>

<style scoped>

</style>
