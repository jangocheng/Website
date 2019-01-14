<template>
  <div class="development-catalogue">
    <barnner ref="banner" :bgImg="bgImg"></barnner>
    <div id="cd-timeline" class="cd-container">
      <div class="cd-timeline-block"
           v-for="(item,index) in timeList"
           :key="index">
        <div class="cd-timeline-img"
             :style="{backgroundColor:color[index]}">
          <img src="./img/icon-time.png" alt="Picture">
        </div><!-- cd-timeline-img -->

        <div class="cd-timeline-content bounce-in">
          <h2>{{item.developmentTitle}}</h2>
          <p>{{item.content}}</p>
          <span class="cd-date">{{item.developmentDisplayTime}}</span>
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
        color: ['#75ce66', '#c03b44', '#f0ca45', '#31f05e', '#58f0c0', '#4aa4f0', '#7f73f0', '#b46ff0', '#f068ec', '#f07f94', '#f0c187','#75ce66', '#c03b44', '#f0ca45', '#31f05e', '#58f0c0', '#4aa4f0', '#7f73f0', '#b46ff0', '#f068ec', '#f07f94', '#f0c187'],
        timeList: [],
        bgImg: 'http://www.ncs-cyber.com.cn/CompanyWebsite/upload/banner/646b49ef-9cc9-48d3-8b81-76201b142563.jpg'
      }
    },
    created() {
      this._getTimeList()
    },
    methods: {
      _getTimeList() {
        getTimeList()
          .then(res => {
            if (res[0].success) {
              const DATA = res[0].data
              this.timeList = DATA
            }
//            this.timeList = res
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

  .development-catalogue {
    overflow: hidden;
  }
</style>
