<template>
  <div class="partner">
    <div class="commonWidth">
      <div class="commonTitle">
        <h3>核心合作伙伴</h3>
        <p>每一个合作伙伴我们都认真对待</p>
      </div>
      <swiper class="swiperPadding" :options="swiperOption">
        <swiper-slide v-for="(item, index) in partner" :key="index" :index="index">
          <img v-lazy="qizhui+item.caseCompanyCompanyPath" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: 'partner',
    props: {
      partner: {
        type: Array
      }
    },
    data() {
      return {
        qizhui: 'http://www.ncs-cyber.com.cn/CompanyWebsite',
        swiperOption: {
          slidesPerView: 'auto',
          spaceBetween: 34,
          slidesPerGroup : 4,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    components: {
      swiper,
      swiperSlide,
    }
  }
</script>

<style scoped lang="scss">
  .commonWidth, .partner {
    height: 100%;
    overflow: hidden;
  }

  .swiper-container {
    overflow: visible;
  }

  .swiper-slide {
    width: 268px;
    height: 144px;
    line-height: 144px;
    text-align: center;
    border: 1px solid #d7d7d7;
    background: #fff;
    box-shadow: 0 0 4px #ccc;
    img {
      vertical-align: middle;
    }
  }

  .swiper-pagination {
    bottom: -38px !important;
  }


</style>
