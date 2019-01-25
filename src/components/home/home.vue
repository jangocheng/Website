<template>
  <div id="home">
    <scrollBanner_home :scrollBanners_home="scrollBanners_home"></scrollBanner_home>
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
      <companyProfile :homeSliderData="homeSliderData"></companyProfile>
    </div>
    <div class="row3">
      <goodProduct :goodProductList="goodProductList"></goodProduct>
    </div>
    <div class="row4">
      <recentNews :recentNews="recentNews"></recentNews>
    </div>
    <div class="row5">
      <partner :partner="partner"></partner>
    </div>
  </div>
</template>

<script>
  import * as api from "api/home"
  import ScrollBanner_home from 'base/scrollBanner_home/scrollBanner_home'
  import RecentNews from 'base/recentNews/recentNews'
  import Partner from 'base/partner/partner'
  import GoodProduct from 'base/goodProduct/goodProduct'
  import CompanyProfile from 'base/companyProfile/companyProfile'

  const ISHIDE = 8
  export default {
    name: "home",
    data() {
      return {
        qizhui: 'http://103.231.146.242:28732/cyber/',
        scrollBanners_home: [],
        homeSliderData: [],
        goodProductList: [],
        initIndex: 0,
        recentNews: [],
        partner: [],
      }
    },
    created() {
      this.imgs = {
        hezuo01: require('@/assets/home-img/icon-hezuo01.png'),
        lArrow: require('@/assets/home-img/icon-l-arrow.png'),
        rArrow: require('@/assets/home-img/icon-r-arrow.png'),
        scroll01: require('@/assets/home-img/img-scroll01.png')
      }
      this._getImage()
      this._getSliderData()
      this._getGoodProduct()
      this._getRecentNews()
      this._partner()
    },

    methods: {
      _getImage() {
        api.getImage()
          .then(res => {
            if (res.success === 'true') {
              const DATA = res.data
              for (let [index, item] of DATA.entries()) {
                this.scrollBanners_home.push(item.bannerImgPath)
              }
            }

          })
      },
      _getSliderData() {
        api.getSliderData()
          .then(res => {
            if (res[0].success === 'true') {
              const DATA = res[0].data
              this.homeSliderData = DATA
            }
          })
      },
      _getGoodProduct() {
        api.getGoodProduct()
          .then(res => {
            if (res[0].success === 'true') {
              const DATA = res[0].data
              this.goodProductList = DATA
            }
          })
      },
      _getRecentNews() {
        api.getRecentNews()
          .then(res => {
            if (res[0].success === 'true') {
              const DATA = res[0].data
              this.recentNews = DATA
            }
          })
      },
      _partner() {
        api.partner()
          .then(res => {
            if (res.success === 'true') {
              const DATA = res.data
              this.partner = DATA
            }
          })
      }
    },
    components: {
      ScrollBanner_home,
      RecentNews,
      Partner,
      GoodProduct,
      CompanyProfile
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

  .row4 {
    /*border: 1px solid #fff;*/
    padding-bottom: 16px;
  }

  .row5 {
    height: 460px;
  }
</style>
