<template>
  <div class="header-top">
    <div class="cf commonWidth">
      <div class="fr header-top_phone">010-82990836/35</div>
      <div class="fr header-top_weixin" @mouseenter="isCode_enter" @mouseleave="enter_leave">
        关注微信
        <span class="header-top_weixin_down" ref="headerTopWeixinDown"></span>
        <transition name="myCode">
          <div class="weixin_code" v-show="state" @mouseenter="state=false">
            <img src="./img-weixin.jpg" alt="">
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    name: "home-header",
    data() {
      return {
        state: false
      }
    },
    methods: {
      isCode_enter() {
        this.state = true
        this.$refs.headerTopWeixinDown.style.transform = 'rotate(135deg)'
        this.$refs.headerTopWeixinDown.style.marginBottom = '-3px'
      },
      enter_leave() {
        this.state = false
        this.$refs.headerTopWeixinDown.style.transform = 'rotate(-45deg)'
        this.$refs.headerTopWeixinDown.style.marginBottom = '2px'
      }
    }

  }
</script>

<style scoped lang="scss">
  .myCode-enter-active, .myCode-leave-active {
    transition: all .1s;
  }

  .myCode-enter, .myCode-leave-to {
    opacity: 0;
    transform: translateY(100px);
  }

  .header-top {
    height: 32px;
    background-color: #373d41;
  }

  .header-top_phone,
  .header-top_weixin {
    position: relative;
    line-height: 32px;
    color: #fff;
    padding-left: 30px;
  }

  .weixin_code {
    position: absolute;
    right: -35px;
    top: 32px;
    z-index: 99;
  }

  .header-top_phone {
    background: url(./../../common/img/icon-phone.png) no-repeat left center;
  }

  .header-top_weixin {
    margin-right: 37px;
    background: url(./../../common/img/icon-weixin.png) no-repeat left center;
  }

  .header-top_weixin_down {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-left: 1px #fff solid;
    border-bottom: 1px #fff solid;
    transform: rotate(-45deg);
    margin-left: 10px;
    margin-bottom: 2px;
  }
</style>
