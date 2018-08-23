<template>
  <div class="success-case">
    <barnner ref="banner" :bgImg="bgImg"></barnner>
    <div class="commonWidth" style="padding-bottom:20px;">
      <div v-for="item in successCase">
        <div class="titleWrap">
          <div class="center">
            <h1 class="title">{{item.title}}</h1>
            <h3 class="subtitle">{{item.subtitle}}</h3>
          </div>
        </div>
        <div class="picWrap">
          <img :src="pic" alt="" v-for="pic in item.case">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {successCase} from 'api/success-case'
  import Barnner from 'base/barnner/barnner'


  export default {
    name: "success-case",
    data() {
      return {
        successCase: [],
        bgImg: 'http://www.ncs-cyber.com.cn/CompanyWebsite/upload/banner/646b49ef-9cc9-48d3-8b81-76201b142563.jpg'

      }
    },
    created() {
      this._successCase()
    },
    methods:{
      _successCase(){
        successCase()
          .then(res => {
            this.successCase = res
          })
      }
    },
    components: {
      Barnner
    }
  }
</script>

<style scoped lang="scss">

  .titleWrap {
    margin-bottom: 40px;
    margin-top: 60px;
    text-align: center;
    background: url("http://www.ncs-cyber.com.cn/image/case/dd.png") repeat-x center center;
  }

  .center {
    text-align: center;
    background-color: #fff;
    width: 300px;
    margin: 0 auto;
  }

  .title {
    color: #262626;
    font-size: 30px;
  }

  .subtitle {
    color: #929292;
    font-size: 18px;
    margin-top: 10px;
  }

  .picWrap {
    font-size: 0;
    img {
      border: none;
    }
  }
</style>
