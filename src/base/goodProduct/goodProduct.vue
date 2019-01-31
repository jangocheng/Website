<template>
  <div class="goodProduct">
    <div class="commonWidth">
      <div class="commonTitle">
        <h3>优秀产品</h3>
        <p>用产品见证我们的完美追求</p>
      </div>
      <div class="cf goodProductContainer">
        <div
          class="fl row3-item"
          @mouseenter="ul_infoWrap(index)"
          @mouseleave="ul_infoWrap_leave(index)"
          v-for="(Product,index) in goodProductList"
          :class="{custormScale:index===custormScaleIndex}"
          :key="index">
          <div class="row3-item_titleWrap">
            <div class="row3-item_titleWrap_title">{{Product.title}}</div>
            <p class="row3-item_titleWrap_subtitle">{{Product.EnglishTitle}}</p>
          </div>
          <ul class="row3-item_ul">
            <li class="cf" v-for="(item,child_index) in Product.item.slice(0,3)">
              <div class="fl">
                <div class="row3-item_ul_titleWrap">
                  <span>{{child_index + 1}}.</span>
                  <span>{{item.productTitle}}</span>
                </div>
                <div v-show="(isHover === index ? true : false)" class="row3-item_ul_infoWrap">
                  <p class="row3-item_ul_info">
                    <span>功能：</span>
                    <span>{{item.fun}}</span>
                  </p>
                </div>
              </div>
              <div class="fr">
                <button class="row3-item_details" @click="selectDetails(item)">查看详情</button>
              </div>
              <div style="clear:both;"></div>
            </li>
          </ul>
          <div v-show="(isHover === index ? true : false)"
               class=" row3-item_ul_allWrap">
            <a @click="selectAll(Product)" class="row3-item_ul_all" href="javascript:;">查看全部</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const IS_HOVER = 1
  export default {
    name: 'goodProduct',
    data() {
      return {
        isHover: IS_HOVER,
        custormScaleIndex : 1
      }
    },
    props: {
      goodProductList: {
        type: Array
      }
    },
    methods: {
      ul_infoWrap(index) {
        this.isHover = index
        this.custormScaleIndex = index
      },
      ul_infoWrap_leave(index) {
        this.isHover = index
      },
      selectDetails(item) {
        this.$router.push(
          {path: `/product/productDetails?id=${item.productId}`}
        )
      },
      selectAll(Product) {
        this.$router.push(
          {path: `/product`, query: {y: 457}}
        )
      }
    }
  }
</script>

<style scoped lang="scss">
  .commonTitle{
    margin-bottom:80px;
  }
  .row3-item {
    width: 388px;
    min-height: 379px;
    border: 1px solid #dcdcdc;
    -webkit-box-shadow: 0 0 6px rgba(10, 2, 4, .12);
    -moz-box-shadow: 0 0 6px rgba(10, 2, 4, .12);
    box-shadow: 0 0 6px rgba(10, 2, 4, .12);
    -webkit-transition: .3s linear;
    -moz-transition: .3s linear;
    -ms-transition: .3s linear;
    -o-transition: .3s linear;
    transition: .3s linear;
  }

  .goodProductContainer {
    .row3-item:nth-child(2) {
      margin: 0 16px;
    }

    .custormScale {
      border: 1px solid #00c1de;
      transform: scale(1.15);
      background:#fff;
      .row3-item_titleWrap{
        background-color: #373d41;
        .row3-item_titleWrap_title,
        .row3-item_titleWrap_subtitle{
          color:#fff;
        }
      }
      .row3-item_details {
        margin-top: 58px;
      }
    }
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
    width: 160px;
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

  .row3-item_ul_allWrap {
    display: block;
    text-align: center;
    margin: 21px 0;
  }

  .row3-item_ul_all {
    color: #ff4800;
    text-decoration: none;
  }

  /*.row3-item:hover .row3-item_titleWrap {*/
    /*background-color: #373d41;*/
  /*}*/

  /*.row3-item:hover .row3-item_titleWrap_title {*/
    /*color: #fff;*/
  /*}*/

  /*.row3-item:hover .row3-item_titleWrap_subtitle {*/
    /*color: #fff;*/
  /*}*/

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

</style>
