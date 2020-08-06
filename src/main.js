import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import 'bootstrap/dist/css/bootstrap.min.css'
import accounting from 'accounting/accounting'
import store from './store/index'
import _ from 'lodash'
import Moment from 'moment'
import 'moment/locale/zh-cn';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less'
// import "antd-theme/src/theme/index.js"
// import  '@ant-design/dark-theme/index.less';
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
// import './assets/index.less'
//axios.defaults.baseURL = '/api'
Vue.use(VueAxios,axios)
Vue.prototype.$accounting = accounting;
Vue.prototype.Moment=Moment;
Vue.prototype._=_;
Vue.config.productionTip = false
Vue.use(Antd)
axios.defaults.withCredentials = false;
Moment.locale('zh-cn')

new Vue({
  el: '#app',
  store,
  data(){
    return{
      zh_CN
    }
  },
 // router,
  components: { App },
  template: '<a-locale-provider :locale="zh_CN"><App/></a-locale-provider>',

})
