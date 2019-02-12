<template>
  <div class="partner">
    <div class="commonWidth">
      <div class="commonTitle">
        <h3>核心合作伙伴</h3>
        <p>每一个合作伙伴我们都认真对待</p>
      </div>
      <swiper ref="mySwiper" class="swiperPadding" :options="swiperOption">
        <swiper-slide v-for="(item, index) in partner" :key="index" :index="index">
          <img v-lazy="qizhui+item.caseCompanyCompanyPath" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>

      </swiper>
    </div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
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
          width: 1202,
          slidesPerView: 4,
          spaceBetween: 20,
          slidesPerGroup: 4,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          on: {
            slideChange() {
              if (this.activeIndex - 1 < 0) {
                return
              }
              this.slides[this.activeIndex - 1].style.marginRight = '12px'
            }
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
  .partner {
    position: relative;
  }

  .swiper-button-prev, .swiper-button-next {
    top: 61%;
  }

  .swiper-button-prev {
    left: 15%;
  }

  .swiper-button-next {
    right: 16%;
  }

  .commonWidth, .partner {
    height: 100%;
    overflow: hidden;
  }

  .commonWidth {
    padding-right: 10px;
  }

  .swiper-container {
    width: 100%;
    overflow: visible;
  }

  .swiper-slide {
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
