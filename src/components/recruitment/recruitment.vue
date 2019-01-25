<template>
  <div style="height:100%;">
    <barnner ref="banner" :bgImg="bgImg"></barnner>
    <div class="commonWidth" ref="commonWidth">
      <div class="introduce-wrap">
        <div class="commonCategory">
          <h3>人才招聘</h3>
        </div>
        <section>
          <div class="content">
            <div class="box cf">
              <!--校园招聘-->
              <div class="fl campus-wrap">
                <div class="cf">
                  <div class="fl icon icon-campus"></div>
                  <div class="fl title">校园招聘</div>
                </div>
                <ul>
                  <li v-for="item in campusRecruitment">
                        <span class="circle-wrap">
                            <i class=""></i>
                        </span>
                    <span class="desc" @click="select(item)">{{item.webWorkContentJob}}</span>
                  </li>
                </ul>
              </div>
              <!--社会招聘-->
              <div class="fl social-wrap" style="margin:0 150px;">
                <div class="cf">
                  <div class="fl icon icon-social"></div>
                  <div class="fl title">社会招聘</div>
                </div>
                <ul>
                  <li v-for="item in societyRecruitment">
                        <span class="circle-wrap">
                            <i class=""></i>
                        </span>
                    <span class="desc" @click="select(item)">{{item.webWorkContentJob}}</span>
                  </li>
                </ul>
              </div>
              <!--福利待遇-->
              <div class="fl welfare-wrap">
                <div class="cf">
                  <div class="fl icon icon-welfare"></div>
                  <div class="fl title">福利待遇</div>
                </div>
                <ul>
                  <li v-for="item in Benefits">
                        <span class="circle-wrap">
                            <i class=""></i>
                        </span>
                    <span class="desc" @click="select(item)">{{item.webWorkContentJob}}</span>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import * as api from 'api/recruitment'
  import Barnner from 'base/barnner/barnner'
  import {mapMutations} from 'vuex'


  export default {
    name: "recruitment",
    data() {
      return {
        campusRecruitment: [],
        societyRecruitment: [],
        Benefits: [],
        bgImg: 'http://www.ncs-cyber.com.cn/CompanyWebsite/upload/banner/646b49ef-9cc9-48d3-8b81-76201b142563.jpg'
      }
    },
    created() {
      this._getCampusRecruitment()
    },
    mounted() {
      this._initView()
    },
    methods: {
      ...mapMutations({
        set_recruitment: 'SET_RECRUITMENT'
      }),
      _getCampusRecruitment() {
        api.getRecruitmentList()
          .then(res => {
            if (res[0].success === 'true') {
              const DATA = res[0].data
              this.campusRecruitment = DATA.mainBJ
              this.societyRecruitment = DATA.mainTJ
              this.Benefits = DATA.mainFl
            }
          })
      },
      select(item) {
        this.$router.push(
          {path: `/recruitment/recruitmentDetails`}
        )
        this.set_recruitment(item)
      },
      _initView() {
        let commonWidth = this.$refs.commonWidth
        commonWidth.style.display = 'block'
      }
    },
    watch: {
      $route() {
        this._initView()
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

  .introduce-wrap {
    margin-top: 23px;
    margin-bottom: 50px;
  }

  .content {
    border: 1px solid #fff;
    background-color: #fff;
    /*min-height:100px;*/
  }

  .content .box {
    width: 930px;
    margin: 42px auto;
  }

  .box .title {
    margin-left: 17px;
    margin-top: 33px;
    font-size: 16px;
    font-weight: bold;
    color: #555555;
  }

  .box .icon {
    width: 78px;
    height: 78px;
    border-radius: 50%;
  }

  .box .icon-campus {
    background: #fb6e50 url("./img/icon-campus.png") no-repeat center center;
  }

  .box .icon-social {
    background: #48c1cf url("./img/icon-social.png") no-repeat center center;
  }

  .box .icon-welfare {
    background: #ffb739 url("./img/icon-welfare.png") no-repeat center center;
  }

  .box .circle-wrap {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    text-align: center;
  }

  .box .circle-wrap .circle {
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    vertical-align: 4px;
  }

  .campus-wrap .circle-wrap {
    border: 1px solid #fb6e50;
  }

  .campus-wrap .circle {
    background-color: #fb6e50;
  }

  .social-wrap .circle-wrap {
    border: 1px solid #48c1cf;
  }

  .social-wrap .circle {
    background-color: #48c1cf;
  }

  .welfare-wrap .circle-wrap {
    border: 1px solid #ffb739;
  }

  .welfare-wrap .circle {
    background-color: #ffb739;
  }

  .box .desc {
    margin-left: 21px;
    color: #555555;
    cursor: pointer;
    &:hover {
      color: #0b3e6f;
    }
  }

  .box ul {
    margin: 18px 0 0 65px;
  }

  .box ul li {
    margin-bottom: 20px;
  }

  .box ul .active {
    color: #fb6e50;
  }
</style>
