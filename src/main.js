import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import less from 'less'

Vue.config.productionTip = false

// 安装插件
Vue.use(less)
Vue.use(VueAwesomeSwiper)


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
