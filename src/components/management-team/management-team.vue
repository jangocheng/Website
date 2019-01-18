<template>
  <div class="management-team">
    <barnner ref="banner" :bgImg="bgImg"></barnner>
    <div class="commonWidth" style="border:1px solid transparent;">
      <h4 class="commonTitleWrap">
        <strong>主要领导人</strong>
        <span>CHIEF LEADERS</span>
      </h4>
      <div class="flex-container main-leadership">
        <div class="flex-item" v-for="(item,index) in teamDetails" :key="index">
          <img class="head" v-lazy="item.headPath" alt="">
          <h2>{{item.teamListName}}</h2>
          <p>{{item.title}}</p>
          <button @mouseenter="detailsInfo($event)" class="details">详情 >></button>
          <div class="personal-info-wrap" ref="personalInfoWrap" @mouseleave="closeDetailsInfo">
            <div class="info">
              <h3 class="personal-info_title">{{item.teamListName}}</h3>
              <div class="personal-info">{{item.content}}</div>
            </div>
          </div>
        </div>
      </div>
      <h4 class="commonTitleWrap">
        <strong>团队组合</strong>
        <span>TEAM COMPOSITION</span>
      </h4>
      <div class="flex-container team-show">
        <div class="flex-item" v-for="(item,index) in teamRatio" :key="index">
          <div class="flex-item_info"
               :class="index===0?'flex-item_b':index===1?'flex-item_s':index===2?'flex-item_ben':''">
            <div class="proportion">
              <span>{{item.Ratio}}</span><span>%</span>
            </div>
            <div class="position">{{item.educationName}}</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import * as api from 'api/management-team'
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
      this._getTeamDetails()
    },
    methods: {
      detailsInfo(ev) {
        let el = ev.target.nextSibling.nextElementSibling
        el.style.top = 0
      },
      closeDetailsInfo() {
        let personalInfoWrap = this.$refs.personalInfoWrap
        for (let item of personalInfoWrap.entries()) {
          item[1].style.top = '100%'
        }
      },
      _getTeamDetails() {
        api.getTeamDetails()
          .then(res => {
            if (res[0].success) {
              const DATA = res[0].data
              this.teamRatio = DATA.team
              this.teamDetails = DATA.main
            }
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
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
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
    margin-left: 17px;
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
    overflow: auto;
  }

  .details:hover .personal-info-wrap {
    top: 0;
  }

  .personal-info-wrap .info {
    width: 100%;
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
    margin-top: 15px;
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
    width: 99px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    border-radius: 35px;
    background-color: #90c2ed;
    border: none;
    margin-top: 35px;
    cursor: pointer;
  }
</style>
