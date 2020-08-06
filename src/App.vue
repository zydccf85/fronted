<template>
  <div>
    <a-layout id="layout-top">
    <a-layout-header class="header">
      <div class="logo text-primary"  >
        <img src="./assets/hospitalLogo.jpg" alt="" width="20"  />
        南通市通州区川姜镇卫生院

      </div>
      <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '62px' }">
        <a-menu-item v-for="(item,index) in mycatalog.contents" :key="item.name" >
          <router-link :to="item.path">
            <a-icon :type="item.icon">  </a-icon>
            {{item.title}}
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <router-view></router-view>
  </a-layout>
  </div>


</template>

<script>
import Vue from 'vue'
import router from '@/router/index'
import catalog from './catalog/index'
export default {
  name: 'App',
  router,
  data(){
    return{
      current:'home',
      mycatalog:catalog
    }
  },
  beforeMount(){
  },

  methods:{

  }
}
</script>

<style scoped >

#layout-top .logo{
  width: 300px;
  height: 31px;
  /*background: rgba(255, 255, 255, 0.2);*/
  color:whitesmoke;
  margin: 16px 28px 16px 0;
  float: left;
  line-height: 31px;
  text-align: center;
}

</style>
