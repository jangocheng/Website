<template>
      <div class="header-top">
        <div class="cf commonWidth">
          <div class="fr header-top_phone">010-82990836/35</div>
          <div class="fr header-top_weixin">
            关注微信
            <span class="header-top_weixin_down">v</span>
          </div>
        </div>
      </div>
</template>

<script>
    export default {
        name: "home-header"
    }
</script>

<style scoped>
  .header-top {
    height: 32px;
    background-color: #373d41;
  }

  .header-top_phone,
  .header-top_weixin {
    line-height: 32px;
    color: #fff;
    padding-left: 25px;
  }

  .header-top_phone {
    background: url(./../../common/img/icon-phone.png) no-repeat left center;
  }

  .header-top_weixin {
    margin-right: 37px;
    background: url(./../../common/img/icon-weixin.png) no-repeat left center;
  }

  .header-top_weixin_down {

  }
</style>
