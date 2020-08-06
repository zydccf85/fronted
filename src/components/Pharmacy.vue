<template>
  <a-layout>
      <a-layout-sider width="200" style="height:550px">
        <a-menu
          mode="inline" theme="dark"
          :default-selected-keys="['1']"
          :default-open-keys="['sub1','sub2','sub3']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="user" />药 品</span>
            <a-menu-item key="1">

              <router-link to="/Drug">药品明细 </router-link>
            </a-menu-item>

          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="laptop" />处 方</span>
            <a-menu-item key="5">
              <router-link to="/Cf">处方明细 </router-link>
            </a-menu-item>

          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="user" />人 员</span>
            <a-menu-item key="6">
              <router-link to="/Employee">职员明细</router-link>
            </a-menu-item>

          </a-sub-menu>

        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 12px 6px;border:1px solid white;">
        <a-layout-content
          :style="{  padding: '12px', margin: 0, minHeight: '350px' }"
        >
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>

</template>

<script>
  import router from '@/router/index'
    export default {
        name: "Pharmacy",
      component:{router},
      data () {
    return {
      activeItem:'',
      loginTime:0,
     time1:0,
      currentName:{parent:'',child:''},
      time2:new Date(),
      //time1:1250202,
      menus:[
        //{'name':'首页','icon':'ios-home','children':[{'name':'','link':''}]},
        {'name':'药品','icon':'ios-appstore','children':[{'name':'本院药品','link':'/hello'},{'name':'基本药品','link':'/Drug'}]},
        {'name':'处方','icon':'ios-book','children':[{'name':'处方明细','link':'/Cf'}]},
        {'name':'人员','icon':'ios-body','children':[{'name':'','link':''}]},
        {'name':'款项','icon':'ios-cash','children':[{'name':'','link':''}]},
        {'name':'配置','icon':'ios-settings','children':[{'name':'','link':''}]},


      ],
      title: "<b>陈春峰<sub>中国人民欢迎你</sub></b>",
      tableData:[],
      myval:'',
      tableproperty:{} ,
      h1class:{'red':true},
      val:'',
      allData:[],
      head:['药品名称','日期','药品名称s','日期d','药品名称s','日期s','d','ds','fds','sds',"sdfd"],
      flag:true,
      IsShow:true,
      current:'MyTable',
      options:[],
      nav:[]
    }
  },

  created:function(){

    this.loginTime = (new Date()).getTime();
    this.time1 = (new Date()).getTime()-this.loginTime
    console.log(router)
    this.nav = router.options.routes[1].children;

  },
  computed:{
    getTimes(){
      return (new Date()).getTime()-this.loginTime;
    },
    getStyle(){
      let h = this.$store.state.screenHeight;
      let sty={padding: '12px', background: '#fff',marginLeft:'200px',height:h};
      return sty;
    }
  },
  methods:{
    myclick(){
      Vue.axios.post("/polls/getdata",{'name':this.myval})
        .then((response)=> this.tableData= response.data)


    },
    change(){
      // if(this.current=="MyTable")
      //   this.current="HelloWorld"
      // else
      //   this.current="MyTable"
    },
    deleteRow(id){
      console.log(id)
      this.tableData.shift(id)
    },
    handleSelect(s){
      var xx = this._.find(this.menus,(o)=>this._.findIndex(o.children,(x)=>x.name==s)>=0)
      console.log(xx)
      console.log(xx.name)
      this.currentName.parent=xx.name;
      this.currentName.child=s;
    }
  }
    }
</script>

<style scoped>

</style>
