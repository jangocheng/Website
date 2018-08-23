<template>
  <div class="contact-us">
    <barnner ref="banner" :bgImg="bgImg"></barnner>
    <div class="commonWidth">
      <div class="mapWrap" v-for="item in companyList">
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
          <div class="fr map"></div>
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
        bgImg: 'http://www.ncs-cyber.com.cn/CompanyWebsite/upload/banner/646b49ef-9cc9-48d3-8b81-76201b142563.jpg'

      }
    },
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
