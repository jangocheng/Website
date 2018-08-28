<template>
  <div class="product">
    <barnner ref="banner" :bgImg="bgImg"></barnner>
    <div class="container commonWidth" ref="commonWidth">
      <div class="row">
        <h3 class="title">
          <span>互联网管理相关产品</span>
        </h3>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in product" :key="index" @click.native="select">
            <img :src="item.imgSrc" alt="">
            <p>{{item.name}}</p>
          </swiper-slide>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
        </swiper>
      </div>
      <div id="tt" class="row">
        <h3 class="title">
          <span>商用密码产品</span>
        </h3>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in product" :key="index" @click.native="select">
            <img :src="item.imgSrc" alt="">
            <p>{{item.name}}</p>
          </swiper-slide>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
        </swiper>
      </div>
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import {getProduct} from 'api/product'
  import Barnner from 'base/barnner/barnner'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'


  export default {
    name: "product",
    data() {
      return {
        product: [],
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
        bgImg: 'http://www.ncs-cyber.com.cn/CompanyWebsite/upload/banner/646b49ef-9cc9-48d3-8b81-76201b142563.jpg',
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        }
      }
    },
    created(){
      this._getProduct()
    },
    mounted() {
      setTimeout(() => {

      }, 20)
      this._initView()//这样写是为了在详情页刷新页面的时候保证dom渲染比当前页面慢，就不会出现刷新上一级页面也会存在的问题
    },
    methods: {
      _getProduct() {
        getProduct()
          .then(res => {
            this.product = res
          })
      },
      select() {
        this.$router.push({
          path: `/product/2`
        })
      },
      _initView() {
        let commonWidth = this.$refs.commonWidth
        commonWidth.style.display = 'block'
      }
    },
    watch: {
      $route() {
        this._initView()
      }
    },
    components: {
      Barnner,
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .container {
    box-shadow: 0 0 10px #e8e8e8;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    padding: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .row {
    margin-top: 6px;
    margin-bottom: 30px;
  }

  .title {
    height: 46px;
    color: #343434;
    border-bottom: solid 1px #dfdfdf;
    margin-bottom: 20px;
    span {
      display: inline-block;
      border-bottom: solid 3px #2d8fe9;
      font-weight: 600;
      line-height: 44px;
      padding: 0 10px;
      font-size: 18px;
    }
  }

  .swiper-slide {
    height: 285px;
    border: 1px solid #c5d8db;
    text-align: center;
  }

  .swiper-slide img {
    height: 254px;
  }

  .swiper-slide p {
    color: #292d30;
    overflow: hidden;
    font-size: 14px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    top: 0;
    width: 40px;
    height: 100%;
    margin-top: 0;
    background-size: 16px;
    background-color: rgba(37, 41, 44, .2);
  }
  .swiper-button-prev{
    left:0;
  }
  .swiper-button-next {
    right: 0;
  }
</style>
