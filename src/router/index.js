import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store/index'
import _ from 'lodash'
Vue.use(Router)
const Home =()=>import('@/components/Home')
const Pharmacy =()=>import('@/components/Pharmacy')
const HelloWorld = ()=> import('@/components/pharmacy/HelloWorld')
const Drug =()=>import('@/components/pharmacy/Drug')
const Cf =()=>import('@/components/pharmacy/Cf')
const Employee=()=>import('@/components/pharmacy/Employee')
const Util=()=>import('@/components/Util')

const Article=()=>import('@/components/pharmacy/Article')
const About=()=>import('@/components/About')

const routes=[
  {
    path:'/home',
    name:'home',
    component:Home
  },
  {
    path:'/pharmacy',
    name:'pharmacy',
    component:Pharmacy,
    meta:{
      name:'药房'
    },
    children:[

    {
      path: '/Hello',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
        title:'测试'
      }
    },

    {
      path: '/Drug',
      name: 'Drug',
      component: Drug,
      meta:{
        title:'药品 '
      }
    },
    {
      path: '/Cf',
      name: 'cf',
      component: Cf,
      meta:{
        title:'处方明细'
      }
    },
       {
      path: '/Employee',
      name: 'employee',
      component: Employee,
      meta:{
        title:'职员明细'
      }
    },
      {
    path:"/util",
    name:'util',
    component:Util,
        meta:{
        title:'药学工具'
      }
  },{
    path:"/article",
    name:"article",
    component:Article, meta:{
        title:'法律法规'
      }
  },
    ]
  },
      {
        path:'/About',
        name:'about',
        component:About
      }
  // {
  //   path:'',
  //   redirect:'/home'
  // }

]

const router = new Router({
  mode:'history',
  routes: routes
})
router.beforeEach((to,from,next)=>{
  Store.commit('setBreadCrumb',to)

  next()
})
export default router
