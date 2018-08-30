<template>  <!--:style="{backgroundImage:'url('+bgImg+')'}"-->
  <div class="barnner" v-lazy:background-image="bgImg"></div>
</template>

<script>
  export default {
    name: "barnner",
    props: {
      "bgImg": {
        type: String
      }
    }
  }
</script>

<style scoped lang="scss">
  .barnner {
    height: 300px;
    /*background-color:#0d3349;*/
    background-position: center center;
    background-repeat: no-repeat;
  }

</style>
