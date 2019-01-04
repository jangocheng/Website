<template>
  <div class="companyProfile" style="height:100%;">
    <div class="commonWidth cf" style="height:100%;">
      <div class="fl row2-img-wrap"
           :class="'row2-img'+(index+1)"
           v-for="(item,index) in homeSliderData"
           :key="index">
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
</template>

<script>
  export default {
    name: 'companyProfile',
    props:{
      homeSliderData:{
        type:Array
      }
    }
  }
</script>

<style scoped lang="scss">
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
</style>
