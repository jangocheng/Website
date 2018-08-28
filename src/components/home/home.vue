<template>
  <div id="home">
    <div class="banner">
      <el-carousel style="overflow: hidden;" height="350px" trigger="click">
        <el-carousel-item
          v-for="(item,index) in scroll"
          :key="index"
          :class="item.clas">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="row1">
      <div class="commonWidth">
        <div class="commonTitle">
          <h3>国瑞，不仅仅是一家安全公司</h3>
          <p>我们坚持我们的信仰，为用户打造真正有价值的服务平台</p>
        </div>
        <div class="cf row1-item-wrap">
          <div class="fl row1-item">
            <div class="row1-item_icon row1-item_iconGY"></div>
            <h3>企业格言</h3>
            <p>团结 自信 创造 发展</p>
          </div>
          <div class="fl row1-item row1-itemCenter">
            <div class="row1-item_icon  row1-item_iconSM"></div>
            <h3>创业使命</h3>
            <p>为客户创造价值</p>
            <p>为员工创造机会</p>
            <p>为社会创造效益</p>
          </div>
          <div class="fl row1-item">
            <div class="row1-item_icon row1-item_iconLX"></div>
            <h3>企业思想</h3>
            <p>研制最好的产品</p>
            <p>提供最好的服务</p>
            <p>创造最好的品牌</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row2">
      <div class="commonWidth cf" style="height:100%;">
        <div class="fl row2-img-wrap" :class="'row2-img'+(index+1)" v-for="(item,index) in homeSliderData" :key="index">
          <div class="bgColor">
            <div class="top" :class="'row2-img'+(index+1)+'_top'">
              <div></div>
              <p>{{item.title}}</p>
            </div>
            <div class="bottom hide">
              <p>{{item.describe1}}</p>
              <p>{{item.describe2}}</p>
              <p>{{item.describe3}}</p>
              <!--<input type="button" value="查看详情">-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row3">
      <div class="commonWidth">
        <div class="commonTitle">
          <h3>优秀产品</h3>
          <p>用产品见证我们的完美追求</p>
        </div>
        <div class="cf">
          <div
            class="fl row3-item"
            @mouseenter="ul_infoWrap(index)"
            @mouseleave="ul_infoWrap_leave(index)"
            :class="index===1?'row3-item2':''"
            v-for="(Product,index) in goodProduct"
            :key="index">
            <div class="row3-item_titleWrap">
              <div class="row3-item_titleWrap_title">{{Product.title}}</div>
              <p class="row3-item_titleWrap_subtitle">{{Product.EnglishTitle}}</p>
            </div>
            <ul class="row3-item_ul">
              <li class="cf" v-for="(item,child_index) in Product.item">
                <div class="fl">
                  <div class="row3-item_ul_titleWrap">
                    <span>{{child_index + 1}}.</span>
                    <span>{{item.title}}</span>
                  </div>
                  <div v-show="(isHover===index?true:false)" class="row3-item_ul_infoWrap">
                    <p class="row3-item_ul_info">
                      <span>功能：</span>
                      <span>{{item.fun[0]}}</span>
                    </p>
                    <p class="row3-item_ul_info">
                      <span>功能：</span>
                      <span>{{item.fun[1]}}</span>
                    </p>
                  </div>
                </div>
                <div class="fr">
                  <button class="row3-item_details" @click="selectDetails">查看详情</button>
                </div>
                <div style="clear:both;"></div>
                <div v-if="((child_index+1)===Product.item.length)" v-show="(isHover===index?true:false)" class=" row3-item_ul_allWrap">
                  <a @click="selectAll" class="row3-item_ul_all" href="javascript:;">查看全部</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row4">
      <div class="commonWidth">
        <div class="commonTitle">
          <h3>最新动态</h3>
          <p>每一件动态都是我们成长的见证</p>
        </div>
        <el-carousel style="overflow: hidden;" height="250px" trigger="click" type="card">
          <el-carousel-item
            v-for="(item,index) in recentNews"
            :key="index">
            <img width="100%" style="height:100%;" :src="item.imgUrl" alt="">
            <p
              style="position:absolute;left:0;bottom:0;z-index: 88;width:100%;line-height:30px;background:rgba(0,0,0,.5);color:#fff;text-indent: 6px;">
              {{item.title}}
            </p>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="row5">
      <div class="commonWidth">
        <div class="commonTitle">
          <h3>核心合作伙伴</h3>
          <p>每一个合作伙伴我们都认真对待</p>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in partner" :key="index" :index="index">
            <img width="100%" height="100%" :src="item.imgUrl" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

      </div>
    </div>
  </div>
</template>

<script>
  import {getSliderData, getGoodProduct, getRecentNews, partner} from "api/home";
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  const ISHIDE = 8
  const IS_HOVER = 1
  export default {
    name: "home",
    data() {
      return {
        scroll: [
          {clas: 'swiper-slide-img1'},
          {clas: 'swiper-slide-img2'},
          {clas: 'swiper-slide-img3'}
        ],
        homeSliderData: [],
        goodProduct: [],
        isHover: IS_HOVER,
        initIndex: 0,
        recentNews: [],
        partner: [],
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 4,
        leis: 'swiper-container3',
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    created() {
      this.imgs = {
        hezuo01: require('@/assets/home-img/icon-hezuo01.png'),
        lArrow: require('@/assets/home-img/icon-l-arrow.png'),
        rArrow: require('@/assets/home-img/icon-r-arrow.png'),
        scroll01: require('@/assets/home-img/img-scroll01.png')
      }
      this._getSliderData()
      this._getGoodProduct()
      this._getRecentNews()
      this._partner()
    },
    mounted() {
      setTimeout(() => {

      }, 20)

    },
    methods: {
      _getSliderData() {
        getSliderData()
          .then(res => {
            this.homeSliderData = res
          })
      },
      _getGoodProduct() {
        getGoodProduct()
          .then(res => {
            this.goodProduct = res
          })
      },
      ul_infoWrap(index) {
        this.isHover = index
      },
      ul_infoWrap_leave(index) {
        this.isHover = index
      },
      _getRecentNews() {
        getRecentNews()
          .then(res => {
            this.recentNews = res
          })
      },
      _partner() {
        partner()
          .then(res => {
            this.partner = res
          })
      },
      selectDetails() {
        this.$router.push(
          {path: `/product/2`}
        )
      },
      selectAll() {
        this.$router.push(
          {path: `/product`, hash: 'tt'}
        )
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped lang="scss">

  #home {
    font-size: 14px;
    font-family: "Microsoft YaHei", 'sans-serif', "Tahoma", "Helvetica";
  }

  .swiper-container {
    overflow: visible;
  }

  .banner .swiper-slide-img1 {
    background: url("./../../assets/home-img/img-banner1.png") no-repeat center center;
  }

  .banner .swiper-slide-img2 {
    background: url("./../../assets/home-img/img-banner2.png") no-repeat center center;
  }

  .banner .swiper-slide-img3 {
    background: url("./../../assets/home-img/img-banner2.png") no-repeat center center;
  }

  .row1-item-wrap {
    width: 820px;
    margin: 0 auto;
  }

  .row1-item_icon {
    /*width:75px;*/
    height: 75px;
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-transition: all 4s;
    -moz-transition: all 4s;
    -ms-transition: all 4s;
    -o-transition: all 4s;
    transition: all 4s;
  }

  .row1-item:hover .row1-item_icon {
    transform: rotateY(360deg);
  }

  .row1-item:hover h3 {
    color: rgb(0, 193, 222);
  }

  .row1-item_iconGY {
    background-image: url(./../../assets/home-img/icon-geyan.png);
  }

  .row1-item_iconSM {
    background-image: url(./../../assets/home-img/icon-shiming.png);
  }

  .row1-item_iconLX {
    background-image: url(./../../assets/home-img/icon-lixiang.png);
  }

  .row1-itemCenter {
    margin: 0 248px;
  }

  .row1-item h3 {
    font-size: 22px;
    color: #373d41;
    text-align: center;
    margin-top: 19px;
    margin-bottom: 17px;
  }

  .row1-item p {
    height: 24px;
    line-height: 24px;
    color: #989fa3;
    text-align: center;
  }

  .row2 {
    height: 433px;
    margin-top: 34px;
    background-color: #373d41;
  }

  .row2-img1 {
    width: 240px;
    height: 100%;
    background: url(./../../assets/home-img/img-ruanjian.png);
  }

  .row2-img1_top div {
    height: 14px;
    margin-top: 166px;
    margin-bottom: 68px;
    background: url(./../../assets/home-img/icon-ruanjian.png) no-repeat center center;
  }

  .row2-img1_top p {
    font-size: 27px;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }

  .row2-img2 {
    width: 240px;
    height: 100%;
    background: url(./../../assets/home-img/img-icp.png);
  }

  .row2-img2_top div {
    height: 52px;
    margin-top: 127px;
    margin-bottom: 68px;
    background: url(./../../assets/home-img/icon-icp.png) no-repeat center center;
  }

  .row2-img2_top p {
    font-size: 27px;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }

  .row2-img3 {
    width: 240px;
    height: 100%;
    background: url(./../../assets/home-img/img-idc.png);
  }

  .row2-img3_top div {
    height: 55px;
    margin-top: 122px;
    margin-bottom: 68px;
    background: url(./../../assets/home-img/icon-idc.png) no-repeat center center;
  }

  .row2-img3_top p {
    font-size: 27px;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }

  .row2-img4 {
    width: 240px;
    height: 100%;
    background: url(./../../assets/home-img/img-data.png);
  }

  .row2-img4_top div {
    height: 40px;
    margin-top: 138px;
    margin-bottom: 68px;
    background: url(./../../assets/home-img/icon-data.png) no-repeat center center;
  }

  .row2-img4_top p {
    font-size: 27px;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }

  .row2-img5 {
    width: 240px;
    height: 100%;
    background: url(./../../assets/home-img/img-web.png);
  }

  .row2-img5_top div {
    height: 51px;
    margin-top: 126px;
    margin-bottom: 68px;
    background: url(./../../assets/home-img/icon-web.png) no-repeat center center;
  }

  .row2-img5_top p {
    font-size: 27px;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }

  .row2-img-wrap {
    overflow: hidden;
  }

  .row2-img-wrap .top {
    -webkit-transition: .5s;
    -moz-transition: .5s;
    -ms-transition: .5s;
    -o-transition: .5s;
    transition: .5s;
  }

  .row2-img-wrap .bottom {
    margin-top: 42px;
    text-align: center;
  }

  .row2-img-wrap .bottom p {
    height: 24px;
    line-height: 24px;
    color: #fff;

  }

  .row2-img-wrap .bottom input {
    width: 105px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    color: #fff;
    border: 1px solid #fff;
    background-color: rgba(0, 223, 255, .9);
    margin-top: 42px;
    cursor: pointer;
  }

  .row2-img-wrap:hover .bgColor {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 223, 255, .9);
    border: 1px solid rgba(0, 223, 255, .9);
  }

  .row2-img-wrap:hover .top {
    margin-top: -80px;
  }

  .row2-img-wrap:hover .bottom {
    display: block;
  }

  .row3 {
    height: 660px;
  }

  .row3-item {
    width: 388px;
    min-height: 379px;
    border: 1px solid #dcdcdc;
    -webkit-box-shadow: 0 0 6px rgba(10, 2, 4, .12);
    -moz-box-shadow: 0 0 6px rgba(10, 2, 4, .12);
    box-shadow: 0 0 6px rgba(10, 2, 4, .12);
    -webkit-transition: 1s;
    -moz-transition: 1s;
    -ms-transition: 1s;
    -o-transition: 1s;
    transition: 1s;
  }

  .row3-item2 {
    margin: 0 16px;
  }

  .row3-item:hover {
    border: 1px solid #00c1de;
  }

  .row3-item_titleWrap {
    height: 96px;
    border-bottom: 1px solid #dcdcdc;
    background-color: #e5e5e5;
    padding-left: 30px;
    padding-top: 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: 2s;
    -moz-transition: 2s;
    -ms-transition: 2s;
    -o-transition: 2s;
    transition: 2s;
  }

  .row3-item_titleWrap_title {
    font-size: 18px;
    color: #333333;
    margin: 0 0 15px 0;
  }

  .row3-item_titleWrap_subtitle {
    font-size: 16px;
    color: #8c8c8c;
  }

  .row3-item_ul {
    padding: 0 16px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .row3-item_ul li {
    min-height: 85px;
    border-bottom: 1px solid #dcdcdc;
    padding-bottom: 18px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .row3-item_ul_titleWrap {
    margin-top: 38px;
  }

  .row3-item_ul_titleWrap span:nth-child(1) {
    color: #666666;
    font-size: 20px;
  }

  .row3-item_ul_titleWrap span:nth-child(2) {
    color: #333333;
    font-size: 16px;
  }

  .row3-item_ul_infoWrap {
    margin-top: 13px;
    margin-left: 20px;

  }

  .row3-item_ul_info {
    height: 19px;
    line-height: 19px;

  }

  .row3-item_ul_info span:nth-child(1) {
    color: #ff8a00;
    vertical-align: super;
  }

  .row3-item_ul_info span:nth-child(2) {
    display: inline-block;
    width: 130px;
    color: #565e62;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .row3-item_details {
    margin-top: 35px;
    width: 74px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    background-color: #fff;
    color: #00c1de;
    border: 1px solid #00c1de;
    cursor: pointer;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    -ms-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
  }

  .row3-item_ul li:last-child {
    border: none;
  }

  .row3-item_ul li:nth-child(2) {
    /*margin:0 16px;*/
  }

  .row3-item_ul_allWrap {
    display: block;
    text-align: center;
    margin-top: 21px;
  }

  .row3-item_ul_all {
    color: #ff4800;
    text-decoration: none;
  }

  .row3-item:hover .row3-item_titleWrap {
    background-color: #373d41;
  }

  .row3-item:hover .row3-item_titleWrap_title {
    color: #fff;
  }

  .row3-item:hover .row3-item_titleWrap_subtitle {
    color: #fff;
  }

  .row3-item:hover .row3-item_ul_titleWrap span:nth-child(2) {
    font-weight: bold;
  }

  .row3-item_details:hover {
    background-color: #00c1de;
    color: #fff;
  }

  .row3-item:hover .row3-item_details {
    margin-top: 58px;
  }

  .row3-item:hover .row3-item_ul_allWrap {
    /*display: block;*/
  }

  .row4 .commonWidth {
    overflow: hidden;
    height: 100%;
  }

  .row4 {
    /*height: 432px;*/
    /*background-color: #f5f5f6;*/
    border: 1px solid #fff;
    padding-bottom: 16px;
  }

  .row4 .swiper-slide img {
    width: 100%;
  }

  .row5 {
    height: 343px;
  }

  .row5 .commonWidth {
    height: 100%;
    overflow: hidden;
  }

  .row5 .swiper-slide {
    border: 1px solid #d7d7d7;
    height: 143px;
  }

  .row5 .swiper-pagination {
    bottom: -38px;
  }


</style>
