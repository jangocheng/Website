<template>
  <div class="contact-us">
    <barnner ref="banner" :bgImg="bgImg"></barnner>
    <div class="commonWidth">
      <div class="mapWrap" v-for="(item,index) in companyList" :key="index">
        <div class="title">
          <label>{{item.name}}</label>
        </div>
        <div class="cf wrap">
          <div class="fl left">
            <div class="address">{{item.address}}</div>
            <div class="cf mB">
              <div class="fl icon icon-phone"></div>
              <div class="fl mL">
                <div class="space">
                  <span class="name">总机：</span>
                  <span>{{item.switchboard}}</span>
                </div>
                <div class="space">
                  <span class="name">市场部：</span>
                  <span>{{item.marketingPhone}}</span>
                </div>
                <div class="space">
                  <span class="name">技术支持：</span>
                  <span>{{item.Support}}</span>
                </div>
              </div>
            </div>
            <div class="cf mB">
              <div class="fl icon icon-email"></div>
              <div class="fl mL space email">
                <span class="name">Email</span>
                <span>{{item.email}}</span>
              </div>
            </div>
          </div>
          <div class="fr map">
            <el-amap :vid="address[index].el"
                     :zoom="address[index].zoom"
                     :center="address[index].center"
                     class="amap-demo"
                     :plugin="address[index].plugin">
              <el-amap-info-window :position="address[index].mywindow.position"
                                   :content="address[index].mywindow.content"
                                   :visible="address[index].mywindow.visible"
                                   :events="address[index].mywindow.events">
              </el-amap-info-window>
              <el-amap-marker :position="address[index].marker.position"
                              :events="address[index].marker.events"
                              :visible="address[index].marker.visible"
                              :draggable="address[index].marker.draggable">
              </el-amap-marker>
              <el-amap-circle :center="address[index].circle.center"
                              :radius="address[index].circle.radius"
                              :fillOpacity="address[index].circle.fillOpacity"
                              :events="address[index].circle.events"
                              :strokeColor="address[index].circle.strokeColor"
                              :strokeStyle="address[index].circle.strokeStyle"
                              :fillColor="address[index].circle.fillColor">
              </el-amap-circle>
            </el-amap>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Barnner from 'base/barnner/barnner'
  import {companyList} from 'api/contact-us'

  export default {
    name: "contact-us",
    data() {
      return {
        companyList: [],
        bgImg: 'http://www.ncs-cyber.com.cn/CompanyWebsite/upload/banner/646b49ef-9cc9-48d3-8b81-76201b142563.jpg',
        address: [
          {
            el:'map1',
            zoom: 15,
            center: [116.431405, 39.979933],
            circle: {
              clickable: true,
              center: [116.431405, 39.979933],
              radius: 200,
              fillOpacity: 0.3,
              strokeStyle: 'dashed',
              fillColor: '#FFFF00',
              strokeColor: '#00BFFF'
            },
            marker: {
              position: [116.431405, 39.979933],
              events: {
                dragend: (e) => {
                  this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
                }
              },
              visible: true,
              draggable: false
            },
            mywindow: {
              position: [116.431405, 39.979933],
              content: '<h4>国瑞数码</h4>' +
              '<div class="text item">北京市朝阳区芍药居综合楼3层4层</div>',
              visible: true,
              events: {
                close() {
                  this.visible = false
                }
              }
            },
            plugin: {
              pName: 'Scale',
              events: {
                init(instance) {
                  console.log(instance)
                }
              }
            }
          },
          {
            el:'map2',
            zoom: 15,
            center: [117.030488, 36.67327],
            circle: {
              clickable: true,
              center: [117.030488, 36.67327],
              radius: 200,
              fillOpacity: 0.3,
              strokeStyle: 'dashed',
              fillColor: '#FFFF00',
              strokeColor: '#00BFFF'
            },
            marker: {
              position: [117.030488, 36.67327],
              events: {
                dragend: (e) => {
                  this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
                }
              },
              visible: true,
              draggable: false
            },
            mywindow: {
              position: [117.030488, 36.67327],
              content: '<h4>国瑞数码</h4>' +
              '<div class="text item">济南市历下区大明湖路96号</div>',
              visible: true,
              events: {
                close() {
                  this.visible = false
                }
              }
            },
            plugin: {
              pName: 'Scale',
              events: {
                init(instance) {
                  console.log(instance)
                }
              }
            }
          }
        ]
      }
    },
    computed: {},
    created() {
      this._companyList()
    },
    methods: {
      _companyList() {
        companyList()
          .then(res => {
            this.companyList = res
          })
      }
    },
    components: {
      Barnner
    }
  }
</script>

<style scoped lang="scss">
  .contact-us {
    padding-bottom: 96px;
  }

  .mapWrap {
    margin-top: 50px;
  }

  .title {
    height: 35px;
    line-height: 35px;
    background: #c1d5e7;
    label {
      display: inline-block;
      width: 180px;
      background: #1f87c8;
      text-align: center;
      font-weight: 600;
      color: #fff;
      font-size: 16px;
    }
  }

  .wrap {
    margin-top: 40px;
  }

  .left {
    margin-left: 50px;
  }

  .address {
    height: 44px;
    line-height: 44px;
    background: url("./../../assets/contact-us/icon-location.png") no-repeat left center;
    padding-left: 64px;
    font-weight: bold;
    color: #353535;
    margin-bottom: 34px;
  }

  .icon {
    width: 44px;
    height: 44px;
    &-phone {
      background: url("./../../assets/contact-us/icon-phone.png") no-repeat center center;
    }
    &-email {
      background: url("./../../assets/contact-us/icon-email.png") no-repeat center center;
    }
  }

  .mL {
    margin-left: 20px;
  }

  .name {
    display: inline-block;
    min-width: 72px;
    text-align: left;
    color: #868686;
  }

  .space {
    margin-bottom: 24px;
    & span:nth-child(2) {
      color: #353535;
      font-weight: bold;
    }
  }

  .mB {
    margin-bottom: 34px;
  }

  .email {
    height: 44px;
    line-height: 44px;
  }

  .map {
    width: 600px;
    height: 330px;
    border: 1px solid #ccc;
    margin-right: 45px;
  }

</style>
