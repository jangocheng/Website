<template>
  <div class="partner">
    <div class="commonWidth">
      <div class="commonTitle">
        <h3>核心合作伙伴</h3>
        <p>每一个合作伙伴我们都认真对待</p>
      </div>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in partner" :key="index" :index="index">
          <img width="100%" height="100%" v-lazy="qizhui+item.caseCompanyCompanyPath" alt="">
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
        qizhui: 'http://103.231.146.242:28732/cyber',
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 30,
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
  .commonWidth,.partner {
    height: 100%;
    overflow: hidden;
  }

  .swiper-container {
    overflow: visible;
  }
  .swiper-slide {
    border: 1px solid #d7d7d7;
    height: 143px;
  }
  .swiper-pagination {
    bottom: -38px;
  }


</style>
