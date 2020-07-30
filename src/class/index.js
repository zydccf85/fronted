import Vue from 'vue'
import request from '../network/index'
// class MyTable{
//     constructor(){
//       this.data = [];
//       this.total = 0;
//       this.pageNo = 1;
//       this.pageSize=7;
//       this.currentPage=1;
//       this.visible=false;
//     }
//     getData(url,condition){
//      Vue.axios.get(url,{params:condition})
//       .then(response=>{
//         this.data = response.data;
//         this.total=response.data.length;
//         this.visible=response.data.length>0?true:false;
//       })
//     }
//     fenYe(){
//       if(this.total<=this.pageSize){
//         return this.data;
//       }
//       var beginIndex = (this.currentPage-1)*this.pageSize;
//       var endIndex = this.currentPage*this.pageSize;
//       return this.data.filter(function(val,inx,arr) {
//         return inx >= beginIndex && inx < endIndex;
//       });
//     }
//   }
  function MyTable(){
      this.data = [],
      this.total = 0;
      this.pageNo = 1;
      this.pageSize=7;
      this.currentPage=1;
      this.visible=false;
      this.columns=[{
        type: 'index',
        width: 60,
        align: 'center',
        indexMethod:function (row) {
          return row._index
        }
      }];
  }
MyTable.prototype = {
  constructor:MyTable,
  getData:function(url,condition){
    return new Promise((resolve,reject)=>{
       request({url:url,params:condition})
      .then(
        response=> {
          this.data = response.data;
          this.total = response.data.length;
          this.visible = response.data.length > 0 ? true : false;
          if(response.data.length==0){
            resolve(0)
          }else{
            resolve(response.data)
          }
        }
      )
    })

    },
    fenYe:function(){
      if(this.total<=this.pageSize){
        return this.data;
      }
      var beginIndex = (this.currentPage-1)*this.pageSize;
      var endIndex = this.currentPage*this.pageSize;

      return this.data.filter(function(val,inx,arr) {
        return inx >= beginIndex && inx < endIndex;
      });
    }
}
export  {
  MyTable
}
