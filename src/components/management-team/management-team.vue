<template>
  <div class="management-team">
    <barnner ref="banner" :bgImg="bgImg"></barnner>
    <div class="commonWidth" style="border:1px solid #f7f7f7;">
      <h4 class="commonTitleWrap">
        <strong>团队组合</strong>
        <span>TEAM COMPOSITION</span>
      </h4>
      <div class="flex-container team-show">
        <div class="flex-item" v-for="(item,index) in teamRatio" :key="index">
          <div class="flex-item_info"
               :class="index===0?'flex-item_b':index===1?'flex-item_s':index===2?'flex-item_ben':''">
            <div class="proportion">
              <span>{{item.ratio}}</span><span>%</span>
            </div>
            <div class="position">{{item.name}}</div>
          </div>
        </div>

      </div>
      <h4 class="commonTitleWrap">
        <strong>主要领导人</strong>
        <span>CHIEF LEADERS</span>
      </h4>
      <div class="flex-container main-leadership">
        <div class="flex-item" v-for="item in teamDetails">
          <img class="head" src="./img/icon-head.png" alt="">
          <h2>{{item.name}}</h2>
          <p>{{item.position}}</p>
          <div class="personal-info-wrap">
            <div class="info">
              <h3 class="personal-info_title">{{item.name}}</h3>
              <div class="personal-info">{{item.personalInfo}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getTeamRatio,getTeamDetails} from 'api/management-team'
  import Barnner from 'base/barnner/barnner'


  export default {
    name: "management-team",
    data() {
      return {
        teamRatio: [],
        teamDetails: [],
        bgImg: 'http://www.ncs-cyber.com.cn/CompanyWebsite/upload/banner/646b49ef-9cc9-48d3-8b81-76201b142563.jpg'
      }
    },
    created() {
      this._getTeamRatio()
      this._getTeamDetails()
    },
    methods: {
      _getTeamRatio() {
        getTeamRatio()
          .then(res => {
            this.teamRatio = res
          })
      },
      _getTeamDetails() {
        getTeamDetails()
          .then(res => {
            this.teamDetails = res
          })
      }
    },
    components: {
      Barnner
    }
  }
</script>

<style scoped>

  .management-team {
    background-color: #f7f7f7;
    font-size: 14px;
    font-family: "Microsoft YaHei", 'Georgia', Times, Times New Roman, serif;
  }

  .banner {
    height: 300px;
    background: url(./img/img-banner.png) no-repeat center center;
  }

  .flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
  }

  .team-show {
    height: 540px;
    -webkit-align-items: center;
    align-items: center;
  }

  .flex-item_info {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 80px;
    height: 100px;
    text-align: center;
    margin: auto;
    font-style: italic;
    line-height: 34px;
    text-indent: -17px;
  }

  .flex-item_b span,
  .flex-item_b .position {
    color: #a0b624;
  }

  .flex-item_s span,
  .flex-item_s .position {
    color: #6f3086;
  }

  .flex-item_ben span,
  .flex-item_ben .position {
    color: #29a6a5;
  }

  .flex-item_info .proportion span:nth-child(1) {
    font-size: 65px;
    font-weight: bold;
  }

  .flex-item_info .proportion span:nth-child(2) {
    font-size: 45px;
    font-weight: bold;
  }

  .flex-item_info .position {
    font-size: 26px;
    font-weight: bold;
  }

  .commonTitleWrap {
    height: 38px;
    background-color: #dae1ec;
    margin-top: 28px;
  }

  .commonTitleWrap strong {
    display: inline-block;
    line-height: 38px;
    padding: 0 24px;
    color: #fff;
    font-size: 14px;
    background-color: #356fd9;
    font-weight: normal;
  }

  .commonTitleWrap span {
    font-family: "Microsoft YaHei", 'Georgia', Times, Times New Roman, serif;
    color: #555555;
    font-weight: normal;
  }

  .team-show .flex-item {
    position: relative;
    width: 300px;
    height: 320px;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .team-show .flex-item:nth-child(1) {
    background-position: -31px center;
    background-image: url("./img/icon-b.png");
  }

  .team-show .flex-item:nth-child(2) {
    background-image: url("./img/icon-s.png");
  }

  .team-show .flex-item:nth-child(3) {
    background-image: url("./img/icon-ben.png");
  }

  .main-leadership {
    margin-top: 58px;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .main-leadership .flex-item {
    position: relative;
    width: 280px;
    height: 380px;
    background-color: #fff;
    text-align: center;
    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, .4);
    -moz-box-shadow: 0 0 5px rgba(0, 0, 0, .4);
    box-shadow: 0 0 5px rgba(0, 0, 0, .4);
    margin-bottom: 60px;
    overflow: hidden;
  }

  .flex-item .personal-info-wrap {
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    height: 100%;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: 1s .1s;
    -moz-transition: 1s .1s;
    -ms-transition: 1s .1s;
    -o-transition: 1s .1s;
    transition: 1s .1s;
    background-color: #e8e8e8;
  }

  .main-leadership .flex-item:hover .personal-info-wrap {
    top: 0;
  }

  .personal-info-wrap .info {
    width: 100%;
    height: 100%;
    background-color: #eff1f5;
    padding: 25px;
    text-align: left;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .personal-info_title {
    font-size: 16px;
    color: #666666;
    padding: 0 0 14px 0;
    text-align: left;
  }

  .personal-info {
    line-height: 28px;
    color: #666666;
  }

  .main-leadership .head {
    margin-top: 62px;
    width: 110px;
  }

  .main-leadership h2 {
    font-size: 26px;
    margin-top: 40px;
    color: #333333;
  }

  .main-leadership p {
    width: 170px;
    margin: 16px auto 0 auto;
    line-height: 21px;
    font-size: 14px;
    color: #777777;
  }

  .main-leadership button {
    width: 140px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    border-radius: 35px;
    background-color: #1fb4e5;
    border: none;
    margin-top: 64px;
    cursor: pointer;
  }
</style>
