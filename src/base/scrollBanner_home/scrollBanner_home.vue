<template>
  <div class="scrollBanner_home" @click="toContactUs">
    <el-carousel style="" height="528px" trigger="click">
      <el-carousel-item
        v-for="(item,index) in scrollBanners_home"
        :key="index">
        <img :src="item" alt="加载失败">
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
    },
    methods:{
      toContactUs() {
        this.$router.push('contactUs')
      }
    }
  }
</script>

<style scoped lang="scss">
  .scrollBanner_home {
    text-align: center;
  }
</style>
