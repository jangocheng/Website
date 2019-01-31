<template>
  <div class="header-bottom">
    <div class="cf commonWidth">
      <img class="fl header-bottom_img" v-lazy="iconLogo" alt="">
      <div class="fr">
        <ul>
          <router-link @mouseenter.native="addClas(item.name)"
                       v-for="(item,index) in nav"
                       tag="li"
                       :to="item.url"
                       :key="index">
            {{item.name}}
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
      <div class="sliderBorder"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home-nav",
    data() {
      return {
        nav: [
          {"name": "首页", "url": "/index"},
          {"name": "关于国瑞", "url": "/introduce"},
          {"name": "产品信息", "url": "/product"},
          {"name": "成功案例", "url": "/successCase"},
          {"name": "新闻中心", "url": "/newsCenter"},
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

<style scoped lang="scss">
  .header-bottom {
    height: 93px;
    .commonWidth ul {
      margin-top: 46px;
      li {
        float: left;
        height: 27px;
        line-height: 27px;
        font-size: 16px;
        color: #000000;
        padding: 0 15px;
        text-decoration: none;
        border: 1px solid #fff;
        cursor: pointer;
        margin-left: 8px;
        transition: .5s;
        &:hover {
          color: #005bf5;
          border-bottom: 2px dashed #004ff5;
          padding-bottom: 8px;
        }
        &.router-link-active {
          color: #0051bc;
          border-bottom: 2px solid #0044b4;
          padding-bottom: 8px;
        }
      }
    }
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
    ul {
      margin-left: 30%;
      li {
        float: left;
        color: #fff;
        margin-right: 62px;
        cursor: pointer;
        &.router-link-active {
          color: #00d8ff;
        }
        &:hover {
          color: #00d8ff;
        }
      }
    }
    &:hover .sliderBorder {
      width:99%;
      border-width:1px;
    }
  }

  .header-bottom_img {
    margin-top: 21px;
  }

  .sliderBorder {
    border: 0 dotted #0abdff;
    width: 0;
    margin:0 auto;
    transition: 1s;
  }

</style>
