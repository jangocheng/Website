<template>
  <div id="home">
    <scrollBanner_home :scrollBanners_home="scrollBanners_home"></scrollBanner_home>
    <div class="row1">
      <div class="commonWidth">
        <div class="commonTitle">
          <h3>国瑞，不仅仅是一家安全公司</h3>
          <p>我们坚持我们的信仰，为用户打造真正有价值的服务平台</p>
        </div>
        <div class="cf row1-item-wrap">
          <div class="fl row1-item">
            <div class="row1-item_icon row1-item_iconGY"></div>
            <h3>企业格言</h3>
            <p>团结 自信</p>
            <p>创造 发展</p>
          </div>
          <div class="fl row1-item row1-itemCenter">
            <div class="row1-item_icon  row1-item_iconSM"></div>
            <h3>创业使命</h3>
            <p>为客户创造价值</p>
            <p>为员工创造机会</p>
            <p>为社会创造效益</p>
          </div>
          <div class="fl row1-item">
            <div class="row1-item_icon row1-item_iconLX"></div>
            <h3>企业思想</h3>
            <p>研制最好的产品</p>
            <p>提供最好的服务</p>
            <p>创造最好的品牌</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row2">
      <companyProfile :homeSliderData="homeSliderData"></companyProfile>
    </div>
    <div class="row3">
      <goodProduct :goodProductList="goodProductList"></goodProduct>
      <canvas id="Mycanvas" ></canvas>
    </div>
    <div class="row4">
      <recentNews :recentNews="recentNews"></recentNews>
    </div>
    <div class="row5">
      <partner :partner="partner"></partner>
    </div>
  </div>
</template>

<script>
  import * as api from "api/home"
  import ScrollBanner_home from 'base/scrollBanner_home/scrollBanner_home'
  import RecentNews from 'base/recentNews/recentNews'
  import Partner from 'base/partner/partner'
  import GoodProduct from 'base/goodProduct/goodProduct'
  import CompanyProfile from 'base/companyProfile/companyProfile'

  const ISHIDE = 8
  export default {
    name: "home",
    data() {
      return {
        qizhui: 'http://103.231.146.242:28732/cyber/',
        scrollBanners_home: [],
        homeSliderData: [],
        goodProductList: [],
        initIndex: 0,
        recentNews: [],
        partner: [],
      }
    },
    created() {
      this.imgs = {
        hezuo01: require('@/assets/home-img/icon-hezuo01.png'),
        lArrow: require('@/assets/home-img/icon-l-arrow.png'),
        rArrow: require('@/assets/home-img/icon-r-arrow.png'),
        scroll01: require('@/assets/home-img/img-scroll01.png')
      }
      this._getImage()
      this._getSliderData()
      this._getGoodProduct()
      this._getRecentNews()
      this._partner()
    },
    mounted() {
      setTimeout(() => {
        this._initCanvas()
      },20)
    },
    methods: {
      _initCanvas() {
        //定义画布宽高和生成点的个数
        var WIDTH = window.innerWidth,
          HEIGHT = window.innerHeight,
          POINT = 35;

        var canvas = document.getElementById('Mycanvas');
        canvas.width = WIDTH,
          canvas.height = HEIGHT;
        var context = canvas.getContext('2d');
        context.strokeStyle = 'eceeef',
          context.strokeWidth = 1,
          context.fillStyle = 'rgba(0,0,0,0.1)';
        var circleArr = [];

        //线条：开始xy坐标，结束xy坐标，线条透明度
        function Line(x, y, _x, _y, o) {
          this.beginX = x,
            this.beginY = y,
            this.closeX = _x,
            this.closeY = _y,
            this.o = o;
        }
        //点：圆心xy坐标，半径，每帧移动xy的距离
        function Circle(x, y, r, moveX, moveY) {
          this.x = x,
            this.y = y,
            this.r = r,
            this.moveX = moveX,
            this.moveY = moveY;
        }
        //生成max和min之间的随机数
        function num(max, _min) {
          var min = arguments[1] || 0;
          return Math.floor(Math.random() * (max - min + 1) + min);
        }
        // 绘制原点
        function drawCricle(cxt, x, y, r, moveX, moveY) {
          var circle = new Circle(x, y, r, moveX, moveY)
          cxt.beginPath()
          cxt.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI)
          cxt.closePath()
          cxt.fill();
          return circle;
        }
        //绘制线条
        function drawLine(cxt, x, y, _x, _y, o) {
          var line = new Line(x, y, _x, _y, o)
          cxt.beginPath()
          cxt.strokeStyle = 'rgba(0,0,0,' + o + ')'
          cxt.moveTo(line.beginX, line.beginY)
          cxt.lineTo(line.closeX, line.closeY)
          cxt.closePath()
          cxt.stroke();

        }
        //每帧绘制
        function draw() {
          context.clearRect(0, 0, canvas.width, canvas.height);
          for(var i = 0; i < POINT; i++) {
            drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r);
          }
          for(var i = 0; i < POINT; i++) {
            for(var j = 0; j < POINT; j++) {
              if(i + j < POINT) {
                var A = Math.abs(circleArr[i + j].x - circleArr[i].x),
                  B = Math.abs(circleArr[i + j].y - circleArr[i].y);
                var lineLength = Math.sqrt(A * A + B * B);
                var C = 1 / lineLength * 7 - 0.009;
                var lineOpacity = C > 0.03 ? 0.03 : C;
                if(lineOpacity > 0) {
                  drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[i + j].x, circleArr[i + j].y, lineOpacity);
                }
              }
            }
          }
        }
        //初始化生成原点
        function init() {
          circleArr = [];
          for(var i = 0; i < POINT; i++) {
            circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(15, 2), num(10, -10) / 40, num(10, -10) / 40));
          }
          draw();
        }
        //调用执行
        init();
        setInterval(function() {
          for(var i = 0; i < POINT; i++) {
            var cir = circleArr[i];
            cir.x += cir.moveX;
            cir.y += cir.moveY;
            if(cir.x > WIDTH) cir.x = 0;
            else if(cir.x < 0) cir.x = WIDTH;
            if(cir.y > HEIGHT) cir.y = 0;
            else if(cir.y < 0) cir.y = HEIGHT;
          }
          draw();
        }, 10);
      },
      _getImage() {
        api.getImage()
          .then(res => {
            if (res.success === 'true') {
              const DATA = res.data
              for (let [index, item] of DATA.entries()) {
                this.scrollBanners_home.push(item.bannerImgPath)
              }
            }
          })
      },
      _getSliderData() {
        api.getSliderData()
          .then(res => {
            if (res[0].success === 'true') {
              const DATA = res[0].data
              this.homeSliderData = DATA
            }
          })
      },
      _getGoodProduct() {
        api.getGoodProduct()
          .then(res => {
            if (res[0].success === 'true') {
              const DATA = res[0].data
              this.goodProductList = DATA
            }
          })
      },
      _getRecentNews() {
        api.getRecentNews()
          .then(res => {
            if (res[0].success === 'true') {
              const DATA = res[0].data
              this.recentNews = DATA
            }
          })
      },
      _partner() {
        api.partner()
          .then(res => {
            if (res.success === 'true') {
              const DATA = res.data
              this.partner = DATA
            }
          })
      }
    },
    components: {
      ScrollBanner_home,
      RecentNews,
      Partner,
      GoodProduct,
      CompanyProfile
    }
  }
</script>

<style scoped lang="scss">

  #home {
    font-size: 14px;
    font-family: "Microsoft YaHei", 'sans-serif', "Tahoma", "Helvetica";
  }

  .swiper-container {
    overflow: visible;
  }

  .row1-item-wrap {
    width: 820px;
    margin: 0 auto;
  }

  .row1-item_icon {
    /*width:75px;*/
    height: 75px;
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-transition: all 4s;
    -moz-transition: all 4s;
    -ms-transition: all 4s;
    -o-transition: all 4s;
    transition: all 4s;
  }

  .row1-item:hover .row1-item_icon {
    transform: rotateY(360deg);
  }

  .row1-item:hover h3 {
    color: rgb(0, 193, 222);
  }

  .row1-item_iconGY {
    background-image: url(./../../assets/home-img/icon-geyan.png);
  }

  .row1-item_iconSM {
    background-image: url(./../../assets/home-img/icon-shiming.png);
  }

  .row1-item_iconLX {
    background-image: url(./../../assets/home-img/icon-lixiang.png);
  }

  .row1-itemCenter {
    margin: 0 248px;
  }

  .row1-item h3 {
    font-size: 22px;
    color: #373d41;
    text-align: center;
    margin-top: 19px;
    margin-bottom: 17px;
  }

  .row1-item p {
    height: 24px;
    line-height: 24px;
    color: #989fa3;
    text-align: center;
  }

  .row2 {
    height: 433px;
    margin-top: 34px;
    background-color: #373d41;
  }
  .row3{
    position: relative;
  }

  .row4 {
    padding-bottom: 16px;
  }

  .row5 {
    height: 480px;
  }
  #Mycanvas{
    position:absolute;
    left:0;
    top:0;
    z-index: -1;
  }
</style>
