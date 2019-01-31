<template>
  <div class="qualification-Honor">
    <barnner ref="banner" :bgImg="bgImg" :isWx="true"></barnner>
    <div class="commonWidth">
      <div class="commonCategory title">
        <h3>关于国瑞 > 资质荣誉</h3>
      </div>
      <div class="flex-container">
        <div class="flex-item" v-for="item in getCredentialList">
          <div class="certificate-img">
            <img width="251" height="175" v-lazy="item.qualificationHonorImgPath" alt="">
          </div>
          <p class="certificate-desc">{{item.qualificationHonorTitle}}</p>
        </div>
      </div>
      <!--分页-->
      <div id="paging">
        <el-pagination
          @current-change="currentChange"
          background
          :page-size="pageSize"
          :current-page="curPage"
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import {getCredentialList} from 'api/qualification-Honor'
  import Barnner from 'base/barnner/barnner'

  export default {
    name: "qualification--honor",
    data() {
      return {
        pageSize: 8,
        curPage: 1,
        getCredentialList: [],
        total: 0,
        bgImg: 'http://www.ncs-cyber.com.cn/CompanyWebsite/upload/banner/about.png',
      }
    },
    created() {
      this._getCredentialList()
    },
//    computed: {
//      total: function () {
//        return this.tot
//      }
//    },
    methods: {
      _getCredentialList() {
        getCredentialList(this.pageSize, this.curPage)
          .then(res => {
            if (res[0].success) {
              const DATA = res[0].data
              this.getCredentialList = DATA
              this.total = res[0].totalRows
            }
          })
      },
      currentChange(currentPage) {
        this.curPage = currentPage
        this._getCredentialList()
      }
    },
    components: {
      Barnner
    }
  }
</script>

<style scoped lang="scss">

  .qualification-Honor {
    height: 100%;
    font-size: 14px;
    font-family: "Microsoft YaHei", 'Georgia', Times, Times New Roman, serif;
    overflow: hidden;
  }

  .title {
    margin: 29px 0 43px 0;
  }

  .flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .flex-container:after {
    content: '';
    width: 280px;
  }

  .flex-item {
    width: 278px;
    height: 254px;
    border: 1px solid #dcdcdc;
    margin-bottom: 27px;
    margin-left: 16px;
    background-color: #fff;
    overflow: hidden;
  }

  .certificate-img {
    height: calc(100% - 46px);
    text-align: center;
    transition: 1s;
    &:hover {
      transform: scale(1.2);
    }
  }

  .certificate-img img {
    margin-top: 14px;
  }

  .certificate-desc {
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-top: 1px solid #dcdcdc;
    background-color: #f6f6f6;
    color: #222222;
  }

  #paging {
    margin: 80px 0;
    text-align: center;
  }

  #paging .layui-laypage {
    margin-left: 430px;
    margin-top: 50px;
  }
</style>
