<template>
  <div id="app">
    <homeHeader></homeHeader>
    <homeNav></homeNav>
    <div class="app-contentContainer">
      <transition name="fade" appear>
        <keep-alive>
          <router-view v-if="!$route.meta.isKeepAlive"></router-view>
        </keep-alive>
      </transition>
      <router-view v-if="$route.meta.isKeepAlive"></router-view>
    </div>
    <footers></footers>
  </div>

</template>

<script>
  import HomeHeader from './components/home-header/home-header'
  import HomeNav from './components/home-nav/home-nav'
  import Footers from './components/footer/footer'

  export default {
    name: 'App',
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

  .app-contentContainer {
    position: relative;
    background: rgba(237, 237, 237, 0.59);
    overflow: hidden;
  }

</style>
