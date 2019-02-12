import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAMap from 'vue-amap'
import VueLazyload from 'vue-lazyload'
import "babel-polyfill"
import store from './store'
import 'swiper/dist/css/swiper.css'
import {Pagination, Carousel, CarouselItem, Message} from 'element-ui'


Vue.use(Pagination)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.prototype.$message = Message;
Vue.use(VueAMap)
Vue.use(VueLazyload, {
  error: require('common/img/fileError.jpg'),
  loading: require('common/img/loading_logo.png')
})

VueAMap.initAMapApiLoader({
  key: '',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.4'
});


Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
