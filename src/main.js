import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAMap from 'vue-amap'
import VueLazyload from 'vue-lazyload'
import store from './store'
import "babel-polyfill"
import 'swiper/dist/css/swiper.css'
import {Pagination, Carousel, CarouselItem, Message} from 'element-ui'


Vue.use(Pagination)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.prototype.$message = Message;
Vue.use(VueAMap)
Vue.use(VueLazyload, {
  error: require('common/img/fileError.jpg'),
  loading: require('common/img/loading.gif')
})


// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: 'YOUR_KEY',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});

// axios 配置
// Vue.prototype.$axios=axios
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.timeout = 5000;


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
