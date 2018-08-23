<template>
  <div class="barnner" :style="{backgroundImage:'url('+bgImg+')'}">

  </div>
</template>

<script>
  export default {
    name: "barnner",
    props: {
      "bgImg": {
        type: String,
        required:false
      }
    }
  }
</script>

<style scoped>
  .barnner {
    height: 300px;
    background-position: center center;
    background-repeat: no-repeat;
  }
</style>
