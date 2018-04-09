import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
 
import 'swiper/dist/css/swiper.css'
 
Vue.use(VueAwesomeSwiper /* { default global options } */)
Vue.use(ElementUI,{size:'13px'})


// import HeaderNav from '@/components/Headernavlist'全局注册组件是引入
Vue.config.productionTip = false


//全局注册组件，一般用局部
// Vue.component('HeaderNav',HeaderNav)
Vue.prototype.$ = require('jquery')
Vue.prototype.apiUrl = 'http://127.0.0.1'
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
