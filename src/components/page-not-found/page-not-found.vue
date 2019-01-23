<template>
    <div class="page-not-found">
      国瑞数码提示您：您访问的页面地址错误，请检查后从新输入地址。
    </div>
</template>

<script>
    export default {
        name: 'page-not-found',
    }
</script>

<style scoped>
.page-not-found{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  line-height: 300px;
  background: #000000;
  color: #fff;
  text-align: center;
  font-size: 30px;
}
</style>
