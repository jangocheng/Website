<template>
  <div class="introduce">
    <barnner ref="banner" :bgImg="bgImg" :isWx="true"></barnner>
    <div class="commonWidth">
      <div class="introduce-wrap">
        <div class="commonCategory">
          <h3>关于国瑞 > 国瑞介绍</h3>
        </div>
        <section>
          <div class="content" >
            <p v-html="content"></p>
            <div id="chart"></div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import Barnner from 'base/barnner/barnner'
  import * as api from 'api/introduce'

  export default {
    name: "introduce",
    data() {
      return {
        bgImg: 'http://www.ncs-cyber.com.cn/CompanyWebsite/upload/banner/about.png',
        content:''
      }
    },
    created() {
      this._getIntroduce()
    },
    methods: {
      _getIntroduce() {
        api.getIntroduce()
          .then(res => {
            if(res[0].success) {
              const DATA = res[0].data
              this.content = DATA
            }
          })
      }
    },
    components: {
      Barnner
    }
  }
</script>

<style scoped lang="scss">

  .introduce {
    height: 100%;
  }

  .introduce-wrap {
    margin-top: 23px;
    margin-bottom: 23px;
    box-shadow: 0 0 6px #e0e0e0;
  }

  .content {
    background-color: #fff;
    padding: 0 150px;
    border: 1px solid #fff;
    margin-bottom: 50px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .content p {
    margin-top: 44px;
    line-height: 23px;
    color: #666666;
    font-size: 14px;
    text-indent: 2em;
    font-family: "Microsoft YaHei", 'Georgia', Times, Times New Roman, serif;
  }

  .content #chart {
    background: url(./img/img-map.png) no-repeat center center;
    height: 600px;
    margin-top: 50px;
  }
</style>
