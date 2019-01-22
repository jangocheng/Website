<template>
  <div class="news-center-details" ref="newsCenterDetails">
    <div class="commonWidth">
      <div class="commonCategory">
        <h3>社会招聘 > {{recruitmentData.webWorkContentJob}}</h3>
      </div>
      <div v-show="!isImg" class="content">
        <h3 class="position">{{recruitmentData.webWorkContentJob}}</h3>
        <div class="share-wrap">
          <span class="share-to">分享到</span>
          <img v-lazy="imgs.qq" alt="x">
          <img v-lazy="imgs.weibo" alt="x">
          <img v-lazy="imgs.weixin" alt="x">
        </div>
        <div class="position-info">
          <table>
            <tr>
              <td class="left-text">工作地点：</td>
              <td class="right-text">{{recruitmentData.webWorkContentAddress}}</td>
              <td class="left-text">工作经验：</td>
              <td class="right-text">{{recruitmentData.webWorkContentWorkExperience}}</td>
              <td class="left-text">学 历：</td>
              <td class="right-text">{{recruitmentData.webWorkContentRecrodSchool}}</td>
            </tr>
            <tr>
              <td class="left-text">工作类型：</td>
              <td class="right-text">{{recruitmentData.work}}</td>
              <td class="left-text">招聘人数：</td>
              <td class="right-text">{{recruitmentData.webWorkContentPeopleCount}}</td>
              <td class="left-text">发布时间：</td>
              <td class="right-text">{{recruitmentData.releasetime}}</td>
            </tr>
          </table>
        </div>
        <h3 class="title">职位描述</h3>
        <div class="position-desc" v-html="recruitmentData.webWorkContentDescribe"></div>
        <h3 class="title">任职要求</h3>
        <div class="position-requirements" v-html="recruitmentData.webWorkContentCondition"></div>
        <div class="special-container">
          <h2>优先考虑：</h2>
          <p>{{recruitmentData.prioritize}}</p>
        </div>

      </div>
      <div class="welfare" v-show="isImg">
        <img v-lazy="webWorkContentAddress" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  const NUM = '666'
  export default {
    name: "recruitment-details",
    data() {
      return {
        recruitmentData:'',
        webWorkContentAddress:'',
        isImg: false
      }
    },
    computed: {
      ...mapGetters([
        'recruitment'
      ])
    },
    created() {
      this.imgs = {
        "weibo": require('@/components/recruitment-details/icon-weibo.png'),
        "qq": require('@/components/recruitment-details/icon-qq.png'),
        "weixin": require('@/components/recruitment-details/icon-weixin.png'),
      }
      this._getDetails()
    },
    mounted() {
      setTimeout(() => {
        this._initView()
      }, 20)
    },
    methods: {
      _initView() {
        let newsCenterDetails = this.$refs.newsCenterDetails
        let prevEle = newsCenterDetails.previousElementSibling
        prevEle.style.display = 'none'
      },
      _getDetails() {
        this.recruitmentData = this.getCurrentRecruitment()
      },
      getCurrentRecruitment() {
        if(!this.recruitment.webWorkContentRecrodSchool) {
          this.isImg = true
          this.webWorkContentAddress = this.recruitment.webWorkContentAddress
        }
        let arr = Object.keys(this.recruitment)
        return arr.length !==0 ? this.recruitment : JSON.parse(localStorage.getItem('recruitment'))
      }
    }
  }
</script>

<style scoped>

  .commonCategory {
    margin-top: 34px;
  }

  .content {
    background-color: #fff;
    padding: 47px;
    margin-bottom: 34px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .welfare {
    text-align: center;
    margin: 30px 0;
  }

  .position {
    font-weight: normal;
    font-size: 28px;
    color: #353535;
  }

  .share-wrap {
    margin-top: 16px;
  }

  .share-wrap img {
    vertical-align: middle;
    height: 22px;
    cursor: pointer;
  }

  .share-to {
    color: #666666;
    font-size: 12px;
  }

  .title {
    color: #444444;
    font-size: 21px;
    margin: 28px 0;
    font-weight: normal;
  }

  .position-info {
    height: 102px;
    background-color: #f2f2f2;
    margin-top: 33px;
    border: 1px solid #f2f2f2;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .position-info table {
    width: 100%;
    margin-top: 24px;
  }

  .position-info table tr {
    height: 28px;
  }

  .position-info .left-text {
    color: #999999;
    text-align: right;
  }

  .position-info .right-text {
    color: #333333;
    text-align: left;
  }

  .position-desc,
  .position-requirements,
  .special-container {
    line-height: 26px;
    color: #666666;
  }

  .special-container {
    margin: 28px 0;
  }

  .special-container h2 {
    color: #666666;
  }

  .tools {
    text-align: center;
  }

  .tools button {
    width: 170px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    color: #fff;
    border-radius: 6px;
    border: none;
    margin: 10px 4px;
    cursor: pointer;
  }

  .tools button:nth-child(1) {
    background-color: #fd8d56;
  }

  .tools button:nth-child(2) {
    background-color: #32b8fd;
  }

  .tools button:nth-child(3) {
    background-color: #01b78e;
  }
</style>
