// 导入区域
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载全局样式
import './styles/index.less'
// 加载 Vant 核心组件库和全局样式
import Vant from 'vant'
import 'vant/lib/index.css'
// 设置 REM 基准值(不需要挂载文件自调用)
import 'amfe-flexible'


// 挂载区域
// 注册使用 Vant 组件库
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
