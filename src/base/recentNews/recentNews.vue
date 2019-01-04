<template>
  <div class="recentNews">
    <div class="commonWidth">
      <div class="commonTitle">
        <h3>最新动态</h3>
        <p>每一件动态都是我们成长的见证</p>
      </div>
      <el-carousel style="overflow: hidden;" height="250px" trigger="click" type="card">
        <el-carousel-item
          v-for="(item,index) in recentNews"
          :key="index">
          <img width="100%" style="height:100%;" v-lazy="item.imgUrl" alt="">
          <p
            style="position:absolute;left:0;bottom:0;z-index: 88;width:100%;line-height:30px;background:rgba(0,0,0,.5);color:#fff;text-indent: 6px;">
            {{item.title}}
          </p>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'recentNews',
    props: {
      recentNews: {
        type: Array
      }
    }
  }
</script>

<style scoped lang="scss">
  .commonWidth {
    overflow: hidden;
    height: 100%;
  }
  .swiper-slide img {
    width: 100%;
  }
</style>
