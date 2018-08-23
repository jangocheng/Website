<template>
  <div class="qualification-Honor">
    <barnner ref="banner" :bgImg="bgImg"></barnner>
    <div class="commonWidth">
      <div class="commonCategory title">
        <h3>关于国瑞 > 资质荣誉</h3>
      </div>
      <div class="flex-container">
        <div class="flex-item" v-for="item in getCredentialList">
          <div class="certificate-img">
            <img src="./img/img-certificate01.png" alt="">
          </div>
          <p class="certificate-desc">{{item.name}}</p>
        </div>
      </div>
      <!--分页-->
      <div id="paging">
        <el-pagination
          @current-change="currentChange"
          background
          :page-size="pageSize"
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
        pageSize:5,
        getCredentialList: [],
        bgImg: 'http://www.ncs-cyber.com.cn/CompanyWebsite/upload/banner/646b49ef-9cc9-48d3-8b81-76201b142563.jpg',
      }
    },
    computed: {
      total: function () {
        return this.getCredentialList.length
      }
    },
    created() {
      this._getCredentialList()
    },
    mounted() {
      setTimeout(() => {

      }, 20)
    },
    methods: {
      _getCredentialList() {
        getCredentialList()
          .then(res => {
            this.getCredentialList = res
          })
      },
      currentChange(size) {
        console.log(size)
      }
    },
    components: {
      Barnner
    }
  }
</script>

<style scoped>

  .qualification-Honor {
    height: 100%;
    background-color: #f7f7f7;
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
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .flex-item {
    width: 278px;
    height: 254px;
    border: 1px solid #dcdcdc;
    margin-bottom: 27px;
    background-color: #fff;

  }

  .certificate-img {
    height: calc(100% - 46px);
    text-align: center;
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
