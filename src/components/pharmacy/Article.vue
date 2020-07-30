<template>
  <b-card no-body>
    <b-tabs pills card vertical nav-wrapper-class="w-10"  content-class="border border-muted"
    active-nav-item-class="font-weight-bold text-light">
      <b-tab  v-for="(item,index) in mydata" :title="item.name" :key="index" lazy >
        <b-card-text>
          <div class="d-flex m-0 p-0">
              <div id="scrollspy-nested" class="w-80 " style="position:relative;left:0;height:638px; overflow-y:auto">
              <!--<h2 class="text-center">中华人民共和国药品管理法</h2>-->
               <!--<p v-html="drugFa"></p>-->
                <h2 id="item" class="text-center">{{item.name}}</h2>
                <p v-html="item.content"></p>


              </div>
          <div class="w-20">
                     <b-navbar v-b-scrollspy:scrollspy-nested class="flex-column "  >
              <b-navbar-brand href="#" class="text-primary">导航</b-navbar-brand>
              <b-nav  pills vertical align="right" >
                <b-nav-item v-for='(item,inx) in item.nav' :href="myhref(index,inx)" :key="index+inx">{{item}}</b-nav-item>

              </b-nav>
                        </b-navbar>
            </div>


            </div>
          </b-card-text>
      </b-tab>

    </b-tabs>
  </b-card>
</div>
</template>

<script>
  import mydata from '../articleContent/content.js'
    export default {
        name: "Article",
        data(){
          return{
            mydata:mydata
          }
        },
      methods:{
          myhref(inx01,inx02){
            return '#item-'+String(inx01)+String(inx02)
          }
      }
    }
</script>

<style scoped>
  .w-10 {
    width:10% !important;
  }
  .w-20{
    width:20% !important;
  }
  .w-80{
    width:80% !important;
  }
  .w-90{
    width:90% !important;
  }

</style>
