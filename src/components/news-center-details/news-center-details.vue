<template>
  <div class="news-center-details" ref="newsCenterDetails">
    <div class="commonWidth cf">
      <section>
        <div class="fl left">
          <header>
            <div class="head">
              <h3>{{newsInfo.title}}</h3>
              <div class="cf">
                <div class="fl time-wrap">
                  <span>{{newsInfo.createtime_String}}</span>
                  <span>{{newsInfo.author}}</span>
                </div>
                <div class="fr link-wrap">
                  <span>分享到：</span>
                  <i @click="share('qq')"></i>
                  <i @click="share('sina')"></i>
                  <i @click="share('wx')"></i>
                </div>
              </div>
            </div>
          </header>
          <section>
            <div class="content">
              <p class="describe" v-html="newsInfo.content"></p>
            </div>
          </section>
          <div class="cf tools">
            <!--<div class="fl prev">-->
              <!--<div class="text-overflow">上一篇：{{prevNews !=undefined?prevNews.title:'没有了'}}</div>-->
            <!--</div>-->
            <div class=" praise" @click="praise">赞</div>
            <!--<div class="fr next">-->
              <!--<div class="text-overflow">下一篇：{{nextNews !=undefined?nextNews.title:'没有了'}}</div>-->
            <!--</div>-->
          </div>
        </div>
      </section>
      <aside>
        <div class="fr right">
          <div>
            <div class="search-wrap">
              <input type="search" placeholder="搜素" v-model="searchResult" @keyup.enter="search">
              <a class="icon-search" @click="search" :plain="true" href="javascript:;"></a>
            </div>
            <h4 class="right_recommend">为您推荐</h4>
            <ul class="recommend-list">
              <li v-for="(item,index) in Recommend.slice(0,5)"
                  v-if="Recommend.length"
                  :key="index"
                  @click="recommendDetail(item)">
                {{item.title}}
              </li>
              <li v-if="!Recommend.length">无</li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
  import * as api from 'api/news-center-details'
  import {mapMutations, mapGetters} from 'vuex'
  import {getStorage} from 'common/js/storage'

  export default {
    name: "news-center-details",
    data() {
      return {
        qizhui: 'http://103.231.146.242:28732/cyber',
        newsInfo: {},
        Recommend: [],
        searchResult: '',
        prevNews:'',
        nextNews:''
      }
    },
    computed: {
      ...mapGetters([
        'news',
        'newsRecordList',
        'newsIndex',
        'currentNews'
      ]),
    },
    created() {
      this._initData()
      this._getRecommend()
    },
    mounted() {
      setTimeout(() => {
        this._initView()
      }, 20)
    },
    methods: {
      ...mapMutations({
        setNews: 'SET_NEWS',
      }),

      share(param) {
        if (param === 'qq') {
          this.shareToQq()
        } else if (param === 'sina') {
          this.sharetosina()
        } else {
          this.message('success', '敬请期待')
        }
      },
      shareToQq() {
        let title = this.newsInfo.title //这个是标题
        let url = window.location.href
        let picurl = this.newsInfo.picturePath
        let shareqqzonestring = 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title=' + title + '&url=' + url + '&pics=' + picurl;
        window.open(shareqqzonestring, 'newwindow', 'height=400,width=400,top=100,left=100');
      },
      sharetosina() {
        let desc = "内容" //这个字段表示是内容并不是标题
        let url = window.location.href
        let picurl = this.newsInfo.picturePath
        let sharesinastring = 'http://v.t.sina.com.cn/share/share.php?title=' + desc + '&url=' + url + '&pic=' + picurl;
        window.open(sharesinastring, 'newwindow', 'height=400,width=400,top=100,left=100');
      },
      praise() {
        api.postPraise(this.news.id)
          .then(res => {
            if (res[0].success === 'true') {
              this.message('success', '点赞成功')
            } else {
              this.message('error', '不能频繁点赞，请稍后再试')
            }
          })
      },
      _initData() {
        this.newsInfo = this.EventListerWindowReload()
      },
      _initView() {
        let newsCenterDetails = this.$refs.newsCenterDetails
        let prevEle = newsCenterDetails.previousElementSibling
        prevEle.style.display = 'none'
      },
      _getRecommend() {
        api.getRecommend(localStorage.getItem('newsType'))
          .then(res => {
            if (res[0].success === 'true') {
              const DATA = res[0].data
              this.Recommend = DATA
            }
          })
      },
      recommendDetail(item) {
        this.setNews(item)
        this._initData()
      },
      message(type, content) {
        this.$message({
          showClose: true,
          message: content,
          type: type
        })
      },
      search() {
        if (this.searchResult === '') {
          this.message('error', '搜素内容不能为空！！！')
          return
        }
        api.searched(this.searchResult)
          .then(res => {
            if (res[0].success === 'true') {
              const DATA = res[0].data
              DATA.length != 0 ? this.Recommend = DATA : this.message('error', '没有匹配内容！！！')
            }
          })
      },
      EventListerWindowReload() {//解决浏览器刷新getters取不到值的bug。
        if (this.news.id) {
          return this.news
        }
        return getStorage('news')
      }
    },
    watch: {
      $route() {
        this._initView()
      }
    }
  }
</script>

<style scoped lang="scss">
  .commonWidth {
    margin: 29px auto 60px auto;
    background: #fff;
    border-radius: 6px;
  }

  .praise {
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    border: 1px solid #ccc;
    text-align: center;
    margin:0 auto;
    cursor: pointer;
  }

  .praise:hover {
    border-color: red;
  }

  .news-center-details {
    overflow: hidden;
  }

  .left {
    width: 900px;
    background-color: #fff;
    padding: 0 24px 24px 24px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .head {
    border-bottom: 1px solid #d0d2d5;
  }

  .head h3 {
    padding: 29px 0 20px 0;
    font-size: 22px;
    color: #273b46;
    font-weight: normal;
  }

  .head .time-wrap {
    color: #8791a5;
  }

  .time-wrap span:nth-child(2) {
    margin-left: 12px;
  }

  .link-wrap span {
    color: #273b46;
    vertical-align: text-top;
  }

  .link-wrap i {
    display: inline-block;
    margin-right: 3px;
    width: 16px;
    height: 16px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 16px 16px;
    cursor: pointer;
  }

  .link-wrap i:nth-child(2) {
    background-image: url("./img/icon-qq-space.jpg");
    border-radius: 50%;
  }

  .link-wrap i:nth-child(3) {
    background-image: url("./img/icon-weibo.png");
  }

  .link-wrap i:nth-child(4) {
    background-image: url("./img/icon-weixin.png");
  }

  .right {
    width: 300px;
    background-color: #fff;
    padding: 16px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .content {
    min-height: 500px;
    margin-top: 20px;
    overflow: auto;
    border-bottom: 1px solid #d0d2d5;
    padding:0 40px;
  }

  .describe {
    color: #666666;
    line-height: 24px;
    margin: 36px 0;
    text-indent: 2em;
  }

  .tools {
    margin-top: 14px;
  }

  .tools .prev,
  .tools .next {
    height: 39px;
    line-height: 39px;
    border-radius: 19px;
    border: 1px solid #d0d2d5;
    cursor: pointer;
  }

  .tools .prev {
    width: 215px;
  }

  .tools .next {
    width: 122px;
  }

  .text-overflow {
    margin: 0 auto;
    font-size: 12px;
    color: #273b46;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .tools .prev .text-overflow {
    width: 170px;
  }

  .tools .next .text-overflow {
    width: 110px;
  }

  .search-wrap {
    position: relative;
    height: 48px;
    border-bottom: 1px solid #d0d2d5;
  }

  .search-wrap input {
    width: 100%;
    border-radius: 14px;
    height: 36px;
    line-height: 36px;
    text-indent: 18px;
    border: 1px solid #d0d2d5;
    outline: none;
    padding-right: 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .search-wrap .icon-search {
    position: absolute;
    right: 0;
    top: 4px;
  }

  .right_recommend {
    font-size: 16px;
    font-weight: normal;
    color: #494e5f;
    margin-top: 18px;
    margin-bottom: 10px;
  }

  .recommend-list {
    border: 1px solid #d0d2d5;
  }

  .recommend-list li {
    line-height: 20px;
    padding: 12px 18px;
    font-size: 12px;
    color: #494e5f;
    border-bottom: 1px solid #d0d2d5;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
  }

  .recommend-list li:last-child {
    border-bottom: none;

  }

  .icon-search {
    display: inline-block;
    width: 30px;
    height: 28px;
    background: url("./img/icon-search.png") no-repeat center center;
    background-size: 50% 50%;
  }
</style>
