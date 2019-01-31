<template>
  <div class="product-details" ref="productDetails">
    <div class="commonWidth">
      <div class="nav">产品信息 -> {{productTitle}}</div>
      <div class="container">
        <h3>{{productTitle}}</h3>
        <div class="container-child ps" v-html="contentHtml"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as api from 'api/product-details'

  export default {
    name: "product-details",
    data() {
      return {
        contentHtml:'',
        productTitle:''
      }
    },


    created() {
      this._getProductDetail()
    },
    mounted() {
      setTimeout(() => {
        this._initView()
      }, 20)
    },
    methods: {
      _getProductDetail() {
        let id = parseInt(this.$route.query.id)
        api.getProductDetail(id)
          .then(res => {
            if (res[0].success) {
              const DATA = res[0].data
              this.contentHtml = DATA.productBody
              this.productTitle = DATA.productTitle
            }
          })
      },
      _initView() {
        let productDetails = this.$refs.productDetails
        let prevEle = productDetails.previousElementSibling
        prevEle.style.display = 'none'
      },
    }
  }
</script>

<style scoped lang="scss">
  .product-details {
    padding-bottom: 60px;
  }

  .nav {
    color: #343434;
    font-weight: 600;
    line-height: 70px;
    font-size: 16px;
  }

  h3 {
    font-size: 24px;
    font-weight: 500;
    border-bottom: solid 1px #dfdfdf;
    padding: 15px 0;
    text-align: center;
  }

  .container {
    padding: 15px 40px;
    box-shadow: 0 0 10px #e8e8e8;
    border: solid 1px #e8e8e8;
    border-radius: 5px;
    background:#fff;
  }

  .container-child {
    margin-bottom: 100px;
    padding: 0 20px;
  }

  .item_label {
    font-weight: bold;
    line-height: 5em;
  }

  .ps {
    text-indent: 2em;
    line-height: 22px;
  }

  .imgContainer {
    text-align: center;
  }
</style>
