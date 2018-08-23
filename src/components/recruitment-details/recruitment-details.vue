<template>
  <div class="news-center-details" ref="newsCenterDetails">
    <div class="commonWidth">
      <div class="commonCategory">
        <h3>社会招聘 > {{title}}</h3>
      </div>
      <div class="content">
        <h3 class="position">{{title}}</h3>
        <div class="share-wrap">
          <span class="share-to">分享到</span>
          <img :src="imgs.qq" alt="x">
          <img :src="imgs.weibo" alt="x">
          <img :src="imgs.weixin" alt="x">
        </div>
        <div class="position-info">
          <table>
            <tr>
              <td class="left-text">工作地点：</td>
              <td class="right-text">天津、北京、济南</td>
              <td class="left-text">工作经验：</td>
              <td class="right-text">无</td>
              <td class="left-text">学 历：</td>
              <td class="right-text">本科及本科以上</td>
            </tr>
            <tr>
              <td class="left-text">工作类型：</td>
              <td class="right-text">技术</td>
              <td class="left-text">招聘人数：</td>
              <td class="right-text">2人</td>
              <td class="left-text">发布时间：</td>
              <td class="right-text">2017-12-18</td>
            </tr>
          </table>
        </div>
        <h3 class="title">职位描述</h3>
        <div class="position-desc">
          <p>1、负责公司产品及项目的软件测试和质量检测，提升产品的技术可靠性；</p>
          <p>2、研究、构建测试环境，使用成熟的测试工具，提升测试效率。</p>
        </div>
        <h3 class="title">任职要求</h3>
        <div class="position-requirements">
          <p>1、本科及以上学历，计算机、软件工程、通讯工程、密码学、数学等相关理工科专业；</p>
          <p>2、至少精通JAVA、C++、Python其中一种开发语言；具有良好的逻辑思维能力、学习能力、动手能力、解决问题的能力。</p>
        </div>
        <div class="special-container">
          <h2>优先考虑：</h2>
          <p>熟悉网络知识、Linux环境、Hadoop生态圈，有海量数据挖掘、机器学习经验者。</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import {getDetails} from 'api/recruitment-details'

  export default {
    name: "recruitment-details",
    data() {
      return {
        title: ''
      }
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
        let params = this.$route.params
        getDetails(params.id)
          .then(res => {
            this.title = res.text
          })
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

  .position-desc p,
  .position-requirements p,
  .special-container p {
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
