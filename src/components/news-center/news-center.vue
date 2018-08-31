<template>
  <div class="news-center">
    <barnner ref="banner" :bgImg="bgImg"></barnner>
    <div class="wrap" ref="wrap">
      <div class="commonWidth">
        <div class="tab cf">
          <ul class="fl" ref="navBox">
            <li @click="navTab(item,index)"
                v-for="(item,index) in navs"
                :index="index"
                :key="index"
                :class="{active:item===navActive}">
              {{item}}
            </li>
          </ul>
          <div class="fr total-number">共<span>105</span>篇</div>
        </div>
        <div class="flex-container">
          <div class="flex-item" v-for="item in list" @click="newItem(item)">
            <div class="certificate-img">
              <div class="top">
                <img height="154" :src="item.news01" alt="">
                <h3>{{item.title}}</h3>
                <i>{{item.source}}</i>
              </div>
            </div>
            <div class="certificate-desc cf">
              <div class="fl view">{{item.view}}</div>
              <div class="fl heart">{{item.heart}}</div>
              <div class="fl time">{{item.time}}</div>
            </div>
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
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import {getListAll} from 'api/news-center'
  import Barnner from 'base/barnner/barnner'
  import {mapMutations} from 'vuex'


  export default {
    name: "news-center",
    data() {
      return {
        pageSize:5,
        list: [],
        navs: ['全部', '特约文章', '喜讯', '测评动态'],
        navActive: '全部',
        bgImg: 'http://www.ncs-cyber.com.cn/CompanyWebsite/upload/banner/646b49ef-9cc9-48d3-8b81-76201b142563.jpg'
      }
    },
    computed: {
      total: function () {
        return this.list.length
      }
    },
    created() {
      this._getListAll()
    },
    mounted() {
      setTimeout(() => {

      }, 20)
      this.initView()
    },
    methods: {
      ...mapMutations({
        setNews:'SET_NEWS'
      }),
      _getListAll(param) {
        getListAll(param)
          .then(res => {
            this.list = res
          })
          .catch(err => {
            // console.log(err)
          })
      },
      navTab(item, index) {
        this.navActive = item
        let param = {params: {"userId": index}}
        if (index === 0) {
          param = ''
        }
        this._getListAll(param)//导航切换调用created （this._getListAll()）  初始化数据
      },
      newItem(item) {
        this.$router.push(
          {path: `/newsCenter/${item.userId}`}
        )
        this.setNews(item)

      },
      initView() {
        let wrap = this.$refs.wrap
        wrap.style.display = 'block'
      },
      currentChange(size) {
        console.log(size)
      }
    },
    watch: {
      $route() {
        this.initView()
      }
    },
    components: {
      Barnner
    }

  }
</script>

<style scoped lang="scss">


  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .wrap {

    border: 1px solid #f2f2f2;
  }

  .tab {
    height: 32px;
    border-bottom: 1px solid #dcdcdc;
    margin: 20px 0 41px 0;
  }

  .tab li {
    float: left;
    padding: 0 30px;
    line-height: 32px;
    cursor: pointer;
    color: #666666;
  }

  .tab .active {
    background-color: #356fd9;
    color: #fff;
    font-weight: bold;
  }

  .tab .total-number {
    font-size: 12px;
    color: #666666;
    margin-top: 9px;
  }

  .flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .flex-container:after {
    content: "";
    flex: auto;
  }

  .flex-item {
    width: 278px;
    height: 282px;
    border: 1px solid #dcdcdc;
    background-color: #fff;
    margin: 0 10px 27px 10px;
    cursor:pointer;
  }

  .certificate-img {
    height: calc(100% - 35px);

  }

  .certificate-img .top {
    width: 250px;
    margin: 0 auto;
  }

  .certificate-img img {
    margin-top: 7px;
    cursor: pointer;
  }

  .certificate-img h3 {
    width: 210px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #222222;
    margin-top: 26px;
    margin-bottom: 10px;
  }

  .certificate-img i {
    color: #666666;
    font-size: 12px;
    font-style: normal;
  }

  .certificate-desc {
    height: 34px;
    line-height: 34px;
    border-top: 1px solid #dcdcdc;
    background-color: #f6f6f6;
    color: #828282;
  }

  #paging {
    margin:80px 0;
    text-align: center;
  }


  .view, .heart, .time {
    padding-left: 28px;
    background-position: 5px center;
    background-repeat: no-repeat;
    margin-left: 12px;
  }

  .view {
    background-image: url("../../assets/news-center/icon-view.png");
  }

  .heart {
    background-image: url("../../assets/news-center/icon-heart.png");
  }

  .time {
    background-image: url("../../assets/news-center/icon-time.png");
  }
</style>
