<template>
  <div class="contact-us">
    <barnner ref="banner" :bgImg="bgImg"></barnner>
    <div class="commonWidth">
      <div class="mapWrap" v-for="(item,index) in companyList" :key="index">
        <div class="title">
          <label>{{item.area}}</label>
        </div>
        <div class="cf wrap">
          <div class="fl left">
            <div class="address">{{item.companyAddressAddress}}</div>
            <div class="cf mB">
              <div class="fl icon icon-phone"></div>
              <div class="fl mL">
                <div class="space">
                  <span class="name">总机：</span>
                  <span>{{item.companyAddressSwitchboard}}</span>
                </div>
                <div class="space">
                  <span class="name">市场部：</span>
                  <span>{{item.companyAddressMarketphone}}</span>
                </div>
                <div class="space">
                  <span class="name">技术支持：</span>
                  <span>{{item.companyAddressSupportphone}}</span>
                </div>
              </div>
            </div>
            <div class="cf mB">
              <div class="fl icon icon-email"></div>
              <div class="fl mL space email">
                <span class="name">Email</span>
                <span>{{item.companyAddressEmail}}</span>
              </div>
            </div>
          </div>
          <div class="fr map">
            <maps :item="item"></maps>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Barnner from 'base/barnner/barnner'
  import * as api from 'api/contact-us'
  import Maps from 'base/v-maps/v-maps'

  export default {
    name: "contact-us",
    data() {
      return {
        companyList: [],
        bgImg: 'http://www.ncs-cyber.com.cn/CompanyWebsite/upload/banner/email-banr.png ',
      }
    },
    created() {
      this._companyList()
    },
    methods: {
      _companyList() {
        api.companyList()
          .then(res => {
            if (res[0].success === 'true') {
              const DATA = res[0].data
              for (let [index, item] of DATA.entries()) {
                item.map = {
                  zoom: 15,
                  center: [item.companyAddressLongitude, item.companyAddressLatitude],
                  circle: {
                    clickable: true,
                    center: [item.companyAddressLongitude, item.companyAddressLatitude],
                    radius: 200,
                    fillOpacity: 0.3,
                    strokeStyle: 'dashed',
                    fillColor: '#FFFF00',
                    strokeColor: '#00BFFF'
                  },
                  marker: {
                    position: [item.companyAddressLongitude, item.companyAddressLatitude],
                    events: {
                      dragend: (e) => {
                        this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
                      }
                    },
                    visible: true,
                    draggable: false
                  },
                  mywindow: {
                    position: [item.companyAddressLongitude, item.companyAddressLatitude],
                    content: `<h4>国瑞数码</h4>
                                <div style="font-size:12px;">${item.companyAddressAddress}</div>`,
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
              }
              this.companyList = DATA
            }
          })
      }
    },
    components: {
      Barnner,
      Maps
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
