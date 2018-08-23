<template>
  <div class="Culture">
    <barnner ref="banner" :bgImg="bgImg"></barnner>
    <div class="commonWidth">
      <div class="titleWrap">
        <h2 class="title">企业文化</h2>
        <h4 class="subtitle">未来，我们共同展望</h4>
      </div>
      <div class="cf">
        <div class="fl item">
          <h2 class="title_Culture">企业格言</h2>
          <img src="./../../assets/Culture/img-Culture.png" alt="">
          <div>
            <p>团结 自信 创造 发展</p>
            <p>团结 自信 创造 发展</p>
          </div>
        </div>
        <div class="fl item">
          <h2 class="title_Culture">企业格言</h2>
          <img src="./../../assets/Culture/img-Culture.png" alt="">
          <div>
            <p>团结 自信 创造 发展</p>
            <p>团结 自信 创造 发展</p>
          </div>
        </div>
        <div class="fl item">
          <h2 class="title_Culture">企业格言</h2>
          <img src="./../../assets/Culture/img-Culture.png" alt="">
          <div>
            <p>团结 自信 创造 发展</p>
            <p>团结 自信 创造 发展</p>
          </div>
        </div>
        <div class="fl item">
          <h2 class="title_Culture">企业格言</h2>
          <img src="./../../assets/Culture/img-Culture.png" alt="">
          <div>
            <p>团结 自信 创造 发展</p>
            <p>团结 自信 创造 发展</p>
          </div>
        </div>
      </div>
      <div class="titleWrap">
        <h2 class="title">国瑞生活</h2>
        <h4 class="subtitle">未来，我们共同展望</h4>
      </div>
      <!--轮播图-->
      <el-carousel style="overflow: hidden;" height="300px" trigger="click" type="card">
        <el-carousel-item
          v-for="(item, index) in life" :key="index" :index="index">
          <img width="100%" height="100%" :src="item" alt="">
        </el-carousel-item>
      </el-carousel>

    </div>
  </div>
</template>

<script>
  import {getLife} from 'api/Culture'
  import Barnner from 'base/barnner/barnner'

  export default {
    name: "culture",
    data() {
      return {
        slidesPerView: 5,
        spaceBetween: 40,
        slidesPerGroup: 5,
        leis: 'swiper-container9',
        life: [],
        bgImg: 'http://www.ncs-cyber.com.cn/CompanyWebsite/upload/banner/646b49ef-9cc9-48d3-8b81-76201b142563.jpg'
      }
    },
    created() {
      this.imgs = []
      this._getLife()
    },
    mounted() {
      setTimeout(() => {

      }, 20)
    },
    methods: {
      _getLife() {
        getLife()
          .then(res => {
            this.life = res
          })
      }
    },
    components: {
      Barnner
    }
  }
</script>

<style scoped lang="scss">


  .Culture {
    font-family: Microsoft YaHei, Tahoma, Arial, sans-serif;
    padding-bottom: 74px;
    background: #f2f2f2;
    overflow: hidden;
  }

  .commonWidth {
    background: #fff;
    padding-bottom: 10px;
    border: 1px solid transparent;
    margin-top: 30px;
  }

  .titleWrap {
    margin: 42px 0 48px 0;
    text-align: center;
  }

  .title {
    font-size: 26px;
    color: #43474a;
    font-weight: normal;
  }

  .subtitle {
    font-size: 16px;
    color: #52575a;
    margin-top: 14px;
    font-weight: normal;
  }

  .title_Culture {
    font-size: 18px;
    color: #333333;
    border-left: 5px solid #0096ff;
    padding-left: 12px;
    margin-bottom: 30px;
  }

  .item {
    padding: 14px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    border: 1px solid #e1e1e1;
    margin-left: 23px;
    p {
      line-height: 26px;
      &:nth-child(1) {
        margin-top: 17px;
      }
    }
  }

</style>
