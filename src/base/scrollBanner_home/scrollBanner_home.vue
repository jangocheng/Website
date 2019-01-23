<template>
  <div class="scrollBanner_home">
    <el-carousel style="overflow: hidden;"  trigger="click">
      <el-carousel-item
        v-for="(item,index) in scrollBanners_home"
        :key="index">
        <img v-lazy="item" alt="加载失败" >
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'scrollBanner_home',
    props: {
      scrollBanners_home: {
        type: Array
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
