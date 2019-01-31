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
          <div class="pic_item" v-for="pic in item.case">
            <div style="margin-top:20px;">
              <img v-lazy="pic.caseCompanyCompanyPath" alt="" height="62">
              <p>{{pic.caseCompanyCompanyName}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as api from 'api/success-case'
  import Barnner from 'base/barnner/barnner'


  export default {
    name: "success-case",
    data() {
      return {
        successCase: [],
        bgImg: 'http://www.ncs-cyber.com.cn/CompanyWebsite/upload/banner/success.png'

      }
    },
    created() {
      this._successCase()
    },
    methods: {
      _successCase() {
        api.successCase()
          .then(res => {
            if (res[0].success === 'true') {
              let titleList = res[0].data.industry
              let picList = res[0].data.team
              let arr = []
              for (let [index, item] of titleList.entries()) {
                arr.push({
                  title: item.caseIndustryIndustryName,
                  subtitle: item.caseIndustryIndustryEnglish,
                  case: this.case(item.caseIndustryOrder, picList)
                })
              }
              this.successCase = arr
              console.log(this.successCase)
            }
          })
      },
      case(caseIndustryOrder, picList) {
        let arr = []
        for (let [index, item] of picList.entries()) {
          if (item.caseIndustry_id === caseIndustryOrder) {
            arr.push(item)
          }
        }
        return arr
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
    background-color: #f7f7f7;
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
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    &:after {
      content: "";
      flex: auto;
    }
    .pic_item{
      width: 268px;
      height: 144px;
      border: 1px solid #dcdcdc;
      background-color: #fff;
      margin: 15px;
      text-align: center;
      box-shadow: 0 0 4px #ccc;
      p{
        margin-top:20px;
        color: #5b5b5b;
      }
    }
    img {
      border: none;
      vertical-align: middle;
    }
  }

</style>
