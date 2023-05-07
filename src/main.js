import Vue from 'vue'
import App from './App.vue'
import router from './router';
//全局引入
import ElementUI from 'element-ui';
//按需引入
// import {Row,Button} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';
import './api/mock'
import Cookie  from 'js-cookie';
Vue.config.productionTip = false
//全局引入
Vue.use(ElementUI)
//按需引入
// vue.use(router)
// Vue.use(Row,Button)
//添加全局前置导航守卫
router.beforeEach((to,from,next)=>{
  const token = Cookie.get('token')
  //token不存在，应跳转到登录页面
  if(!token && to.name!=='login'){
    next({name:'login'})
  }else if(token && to.name === 'login'){
    next({name:'home'})
  }else{
    next()
  }
})
new Vue({
  store,
  router,
  render: h => h(App),
  created(){
    store.commit('addMenu',router)
  }
}).$mount('#app')
