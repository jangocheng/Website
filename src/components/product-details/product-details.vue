<template>
  <div class="product-details" ref="productDetails">
    <div class="commonWidth">
      <div class="nav">产品信息 -> 企业侧IDC/ISP信息安全管理系统</div>
      <div class="container">
        <h3>企业侧IDC/ISP信息安全管理系统</h3>
        <div class="container-child">
          <div class="item_label">一、产品概述</div>
          <p>
            国瑞数码IDC/ISP信息安全管理系统(简称ISMS系统)是为IDC/ISP业务经营者建设的具有基础数据管理、访问日志管理、信息安全管理等功能的信息安全管理系统,以满足IDC/ISP业务经营者和电信管理部门的信息安全管理需求。</p>
          <p>
            国瑞数码IDC/ISP信息安全管理系统(简称ISMS系统)是为IDC/ISP业务经营者建设的具有基础数据管理、访问日志管理、信息安全管理等功能的信息安全管理系统,以满足IDC/ISP业务经营者和电信管理部门的信息安全管理需求。</p>
          <p>
            国瑞数码IDC/ISP信息安全管理系统(简称ISMS系统)是为IDC/ISP业务经营者建设的具有基础数据管理、访问日志管理、信息安全管理等功能的信息安全管理系统,以满足IDC/ISP业务经营者和电信管理部门的信息安全管理需求。</p>
          <div class="item_label">二、产品架构</div>
          <p>下图描述了ISMS系统网络拓扑关系及与备案管理系统之间关系:</p>
          <div class="imgContainer">
            <img src="http://www.ncs-cyber.com.cn/CompanyWebsite/upload/92f75453-fbba-4d45-b7f0-6ddf653dc3ed.png"
                 alt="">
          </div>
          <div class="item_label">三、产品功能</div>
          <p>该产品具有如下特点：</p>
          <p>
            １）数据采集：主要汇集全省ＩＤＣ／ＩＳＰ企业上报的基础数据，包括机房信息、ＩＰ地址、用户信息等，通过对本省企业机房架设数据采集设备收集本省互联网环境下的活跃资源信息，在ＳＭＭＳ系统中进行数据校准验证、去重垃圾数据和问题数据，优化本省采集的数据资源库。</p>
          <p>
            １）数据采集：主要汇集全省ＩＤＣ／ＩＳＰ企业上报的基础数据，包括机房信息、ＩＰ地址、用户信息等，通过对本省企业机房架设数据采集设备收集本省互联网环境下的活跃资源信息，在ＳＭＭＳ系统中进行数据校准验证、去重垃圾数据和问题数据，优化本省采集的数据资源库。</p>
          <p>
            １）数据采集：主要汇集全省ＩＤＣ／ＩＳＰ企业上报的基础数据，包括机房信息、ＩＰ地址、用户信息等，通过对本省企业机房架设数据采集设备收集本省互联网环境下的活跃资源信息，在ＳＭＭＳ系统中进行数据校准验证、去重垃圾数据和问题数据，优化本省采集的数据资源库。</p>
          <p>
            １）数据采集：主要汇集全省ＩＤＣ／ＩＳＰ企业上报的基础数据，包括机房信息、ＩＰ地址、用户信息等，通过对本省企业机房架设数据采集设备收集本省互联网环境下的活跃资源信息，在ＳＭＭＳ系统中进行数据校准验证、去重垃圾数据和问题数据，优化本省采集的数据资源库。</p>
          <p>
            １）数据采集：主要汇集全省ＩＤＣ／ＩＳＰ企业上报的基础数据，包括机房信息、ＩＰ地址、用户信息等，通过对本省企业机房架设数据采集设备收集本省互联网环境下的活跃资源信息，在ＳＭＭＳ系统中进行数据校准验证、去重垃圾数据和问题数据，优化本省采集的数据资源库。</p>
          <div class="item_label">四、产品特点</div>
          <p>
            １）技术先进、扩展性好：基于我司多年在互联网管理方面的产品和项目经验进行设计，本项目的管理系统采用Ｊ２ＥＥ开发架构设计、流量采集和管控设备基于Ｌｉｎｕｘ内核实现，整个系统采用平台化模块化设计思路，产品总体技术先进，扩展性强；</p>
          <p>
            １）技术先进、扩展性好：基于我司多年在互联网管理方面的产品和项目经验进行设计，本项目的管理系统采用Ｊ２ＥＥ开发架构设计、流量采集和管控设备基于Ｌｉｎｕｘ内核实现，整个系统采用平台化模块化设计思路，产品总体技术先进，扩展性强；</p>
          <p>
            １）技术先进、扩展性好：基于我司多年在互联网管理方面的产品和项目经验进行设计，本项目的管理系统采用Ｊ２ＥＥ开发架构设计、流量采集和管控设备基于Ｌｉｎｕｘ内核实现，整个系统采用平台化模块化设计思路，产品总体技术先进，扩展性强；</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "product-details",
    mounted() {
      setTimeout(() => {
        this._initView()
      }, 20)
    },
    methods: {
      _initView() {
        let productDetails = this.$refs.productDetails
        let prevEle = productDetails.previousElementSibling
        prevEle.style.display = 'none'
      }
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
  }

  .container-child {
    margin-bottom: 100px;
    padding: 0 20px;
  }

  .item_label {
    font-weight: bold;
    line-height: 5em;
  }

  p {
    text-indent: 2em;
    line-height: 22px;
  }

  .imgContainer {
    text-align: center;
  }
</style>
