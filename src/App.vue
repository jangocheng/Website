<template>
  <div id="app">
      <homeHeader></homeHeader>
      <homeNav></homeNav>
      <div class="content">
        <transition name="fade" appear >
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    <footers></footers>
  </div>

</template>

<script>
  import {addClass, removeClass} from "./common/js/addClass";
  import HomeHeader from './components/home-header/home-header'
  import HomeNav from './components/home-nav/home-nav'
  import Footers from './components/footer/footer'

  export default {
    name: 'App',
    methods: {

    },
    created() {
      this.bottomCode = require('common/img/icon-erweima.png')
    },
    components: {
      HomeHeader,
      HomeNav,
      Footers
    }

  }
</script>

<style>
  @import './common/css/default.css';
  @import './common/css/public.css';

  body {
    font-size: 14px;
    font-family: "Microsoft YaHei", 'sans-serif', "Tahoma", "Helvetica";
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .content {
    position: relative;

  }

</style>
