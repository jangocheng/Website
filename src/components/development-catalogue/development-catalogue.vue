<template>
  <div class="development-catalogue">
    <barnner ref="banner" :bgImg="bgImg"></barnner>
    <div id="cd-timeline" class="cd-container">

      <div class="cd-timeline-block" v-for="(item,index) in timeList" :key="index">
        <div class="cd-timeline-img" :class="index===0?'cd-picture':index===1?'cd-movie':index===2?'cd-location':''">
          <img src="./img/icon-time.png" alt="Picture">
        </div><!-- cd-timeline-img -->

        <div class="cd-timeline-content bounce-in">
          <h2>{{item.title}}</h2>
          <p>{{item.content}}</p>
          <span class="cd-date">{{item.date}}</span>
        </div> <!-- cd-timeline-content -->
      </div>

    </div>
  </div>
</template>

<script>
  import {getTimeList} from 'api/development-catalogue'
  import Barnner from 'base/barnner/barnner'

  export default {
    name: "development-catalogue",
    data() {
      return {
        timeList: [],
        bgImg: 'http://www.ncs-cyber.com.cn/CompanyWebsite/upload/banner/646b49ef-9cc9-48d3-8b81-76201b142563.jpg'

      }
    },
    created() {
      this._getTimeList()
    },
    mounted() {
      setTimeout(() => {

      }, 20)
    },
    methods: {
      _getTimeList() {
        getTimeList()
          .then(res => {
            this.timeList = res
          })
      }
    },
    components: {
      Barnner
    }
  }
</script>

<style scoped>
  @import "./../../assets/css/timeline.css";


  .development-catalogue{
    overflow: hidden;
  }
</style>
