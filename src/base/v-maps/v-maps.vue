<template>
  <div class="v-map">
    <el-amap
      :zoom="item.map.zoom"
      :center="item.map.center"
      class="amap-demo"
      :plugin="item.map.plugin">
      <el-amap-info-window :position="item.map.mywindow.position"
                           :content="item.map.mywindow.content"
                           :visible="item.map.mywindow.visible"
                           :events="item.map.mywindow.events">
      </el-amap-info-window>
      <el-amap-marker :position="item.map.marker.position"
                      :events="item.map.marker.events"
                      :visible="item.map.marker.visible"
                      :draggable="item.map.marker.draggable">
      </el-amap-marker>
      <el-amap-circle :center="item.map.circle.center"
                      :radius="item.map.circle.radius"
                      :fillOpacity="item.map.circle.fillOpacity"
                      :events="item.map.circle.events"
                      :strokeColor="item.map.circle.strokeColor"
                      :strokeStyle="item.map.circle.strokeStyle"
                      :fillColor="item.map.circle.fillColor">
      </el-amap-circle>
    </el-amap>
  </div>
</template>

<script>
  export default {
    name: 'v-maps',
    props: {
      item: {
        type: Object
      }
    }
  }
</script>

<style scoped lang="scss">
  .v-map{
    height:100%;
  }
</style>
