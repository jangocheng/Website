<template>  <!--:style="{backgroundImage:'url('+bgImg+')'}"-->
  <div class="barnner" @click="showWx" :style="{backgroundImage:'url('+bgImg+')'}"></div>
</template>
<script>
  export default {
    name: "barnner",
    props: {
      "bgImg": {
        type: String
      },
      'isWx': {
        type: Boolean
      }
    },
    methods: {
      showWx() {
        if (this.isWx) {
          this.$router.push({path: '/contactUs'})
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .barnner {
    height: 400px;
    background-color: rgba(0, 0, 0, 0.73);
    background-position: center center;
    background-repeat: no-repeat;
  }

</style>
