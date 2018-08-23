import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import "babel-polyfill"
import 'swiper/dist/css/swiper.css'
import {Pagination,Carousel,CarouselItem} from 'element-ui'


Vue.use(Pagination)
Vue.use(Carousel)
Vue.use(CarouselItem)
// axios 配置
// Vue.prototype.$axios=axios
axios.defaults.baseURL = 'http://localhost:3000'


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
