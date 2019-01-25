<template>
  <div class="header-bottom">
    <div class="cf commonWidth">
      <img class="fl header-bottom_img" :src="iconLogo" alt="">
      <div class="fr">
        <ul>
          <router-link @mouseenter.native="addClas(item.name)"
                       v-for="(item,index) in nav"
                       tag="li"
                       :to="item.url"
                       :key="index">
            <a :class="{active:nav_active===item.name}" href="">
              {{item.name}}
            </a>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="header-bottom-subTab hide" :class="{show:nav_active==='关于国瑞'}">
      <ul class="cf">
        <router-link tag="li" to="/introduce">国瑞介绍</router-link>
        <router-link tag="li" to="/managementTeam">管理团队</router-link>
        <router-link tag="li" to="/developmentCatalogue">发展历程</router-link>
        <router-link tag="li" to="/qualificationHonor">资质荣誉</router-link>
        <router-link tag="li" to="/culture">企业文化</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home-nav",
    data() {
      return {
        nav: [
          {"name": "首页", "url": "/home"},
          {"name": "关于国瑞", "url": "/introduce"},
          {"name": "新闻中心", "url": "/newsCenter"},
          {"name": "产品信息", "url": "/product"},
          {"name": "成功案例", "url": "/successCase"},
          {"name": "人才招聘", "url": "/recruitment"},
          {"name": "联系我们", "url": "/contactUs"}
        ],
        nav_active: '首页'
      }
    },
    methods: {
      addClas(name) {
        this.nav_active = name
      }
    },
    created() {
      this.iconLogo = require('common/img/icon-logo.png')
    }
  }
</script>

<style scoped>
  .header-bottom {
    height: 93px;
  }

  .header-bottom .commonWidth ul {
    margin-top: 46px;
  }

  .header-bottom .commonWidth ul li {
    float: left;
  }

  .header-bottom .commonWidth ul li a {
    display: inline-block;
    height: 27px;
    line-height: 27px;
    font-size: 16px;
    color: #000000;
    padding: 0 21px;
    text-decoration: none;
    border: 1px solid #fff;
  }

  .header-bottom .commonWidth ul li a.active {
    color: #24b8cf;
    border: 1px solid #24b8cf;
    border-radius: 20px;
    font-weight: bold;
  }

  .header-bottom-subTab {
    position: absolute;
    left: 0;
    top: 125px;
    z-index: 9;
    width: 100%;
    height: 52px;
    line-height: 52px;
    background-color: rgba(0, 0, 0, .3);
  }

  .header-bottom-subTab ul {
    margin-left: 30%;
  }

  .header-bottom-subTab ul li {
    float: left;
    color: #fff;
    margin-right: 62px;
    cursor: pointer;
  }

  .header-bottom-subTab ul li.active {
    color: #00d8ff;
  }

  .header-bottom_img {
    margin-top: 21px;
  }

</style>
