<template>
    <main>

        <!-- <img src="~/assets/images/help-banner.png"/> -->
        <!-- header -->
        <!--/Header-->

        <section class="banner-19">
            <div class="banner-layer">
                <div class="main-content-top">
                    <div class="container">
                        <div class="main-content">
                            <div class="w3lbanner-left">
                                <!-- if logo is image enable this
                        <a class="logo" href="index.html">
                            <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
                        </a> -->
                              <h6>Welcome to yimu</h6>
                              <h4>易亩智能</h4>
                              <p style="font-size: 28px;">——基于物联网的智能农牧业一体化平台</p>
                              <a class="btn btn-style btn-secondary mt-md-5 mt-4" id="knowmore" href="http://localhost:81" target="_blank">
                                前往易亩智能端
                              </a>
                            </div>
                          <div class="w3lbanner-right">

                            <p>&nbsp&nbsp掌握农牧未来，</p>
                            <p>&nbsp&nbsp与易亩智能共创智慧农牧时代！</p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      <!-- <div class="new-announcement">
          <div class="new-announcement-title">最新公告</div>
          <div class="new-announcement-content">
              <div id="scrollDiv">
                  <ul style="margin-top: 0px;">
                      <li>
                          <a class="black-link" href="平台公告.html" target="_blank">
                              2023年4月17日平台公告
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </div> -->
        <!-- <div class="ipubs">
            <span class="o1">累计收录农产品数量:<strong>888</strong>余</span>
            <span class="o1">累计帮助实现以农致富:<strong>6666</strong>人</span>
        </div> -->

      <section class="w3l-about-6 py-5" id="about">
        <div class="container py-lg-5 py-md-3">
          <div class="row align-items-center">
            <div class="col-lg-6 pe-lg-5">
              <h6 class="title-subw3hny">Our Info</h6>
              <Nuxt-link to="./help" :class="$route.fullPath === '/help'">
                <h3 class="title-w3l">易亩智能物联控制端</h3>
              </Nuxt-link>


              <p class="mt-md-4 mt-3">
                智能物联管理是利用物联网技术实现农牧业设备智能化管理的核心功能。它包括设备控制、设备分组与定时、实时监测和数据分析与决策支持。通过远程控制设备操作，农民可以方便地进行设备管理，节省时间和劳动成本。设备分组和定时功能使农民能够灵活管理设备，实现自动化管理，提高生产效率。实时监测功能帮助农民及时获取农业生产数据，实现精细化管理，提高产量和质量。数据分析和决策支持功能提供数据报表、趋势分析和预警提示，帮助农民做出科学决策，优化生产方案，提高资源利用效率和产品品质。
              </p>
              <ul class="service-list pt-lg-2 mt-4">

                <li class="service-link"><img src="../assets/images/进度条-对勾.png" alt=""> 物联控制
                </li>
                <li class="service-link"><img src="../assets/images/进度条-对勾.png" alt=""> 提高效率
                </li>
                <li class="service-link"><img src="../assets/images/进度条-对勾.png" alt=""> 智慧农业
                </li>
              </ul>
            </div>
            <div class="HomeAboutImages col-lg-6 mt-lg-0 mt-5">
              <div class="row position-relative">
                <div class="col-6">
                  <img src="../assets/images/b1.jpg" alt="" class="radius-image img-fluid">
                </div>
                <div class="col-6 mt-4">
                  <img src="../assets/images/b2.jpg" alt="" class="radius-image img-fluid mb-md-3 mb-2">
                  <img src="../assets/images/b3.jpg" alt="" class="radius-image img-fluid mt-md-3">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


        <section class="w3l-about-6 py-5" id="about">
            <div class="container py-lg-5 py-md-3">
                <div class="row align-items-center">
                    <div class="col-lg-6 pe-lg-5">
                        <h6 class="title-subw3hny">Our Info</h6>
                        <Nuxt-link to="./help" :class="$route.fullPath === '/help'">
                            <h3 class="title-w3l">农业知识库</h3>
                        </Nuxt-link>


                        <p class="mt-md-4 mt-3">
                            农业知识库的优点包括提高效率、实现知识共享和个性化服务、支持智能化农业，提高农业产品质量和安全性等。可以说，农业知识库在各方面为农业生产提供了发展管理的便利，促进了农业技术的进步，增强了农业产业的竞争力。
                        </p>
                        <ul class="service-list pt-lg-2 mt-4">

                            <li class="service-link"><img src="../assets/images/进度条-对勾.png" alt=""> 聚集资源
                            </li>
                            <li class="service-link"><img src="../assets/images/进度条-对勾.png" alt=""> 提高效率
                            </li>
                            <li class="service-link"><img src="../assets/images/进度条-对勾.png" alt=""> 可持续化
                            </li>
                        </ul>
                    </div>
                    <div class="HomeAboutImages col-lg-6 mt-lg-0 mt-5">
                        <div class="row position-relative">
                            <div class="col-6">
                                <img src="../assets/images/a1.jpg" alt="" class="radius-image img-fluid">
                            </div>
                            <div class="col-6 mt-4">
                                <img src="../assets/images/a2.jpg" alt="" class="radius-image img-fluid mb-md-3 mb-2">
                                <img src="../assets/images/a3.jpg" alt="" class="radius-image img-fluid mt-md-3">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="w3l-grids-3hny py-5" id="grids1">
            <div class="container py-lg-5 py-md-3">
                <div class="wthree-header-section text-center todos">
                    <h6 class="title-subw3hny">What We Do</h6>
                    <h3 class="title-w3l mb-4">我们可以提供什么服务</h3>
                    <p class="mt-md-4 mt-3">
                        开设各类话题和板块，让农业从业者和爱好者可以在这里分享农业技术、经验、市场趋势等信息，交流经验和观点。同时运营电商平台
                        帮助您快速的宣传以及售卖农产品，最后，刊登最及时的农业政策，更好的了解国家政策趋势
                    </p>
                </div>
                <div class="grids-of-3 row text-center">
                    <div class="col-lg-4 col-md-6 mt-5">
                        <div class="grids3-info">
                            <a href="#service" class="d-block zoom"><img src="../assets/images/a4.jpg" alt=""
                                    class="img-fluid radius-image"></a>
                            <Nuxt-link to="http://localhost:8080/#/Home"
                                :class="$route.fullPath === 'http://localhost:8080/#/Home'">
                                <div class="grids-of-3-saas-info">
                                    <h5><a href="#service" class="title">农业交流社区</a></h5>
                                    <p class="saas-para"> 提供基于农业数据的分析工具，如气象数据分析，土壤质量分析等</p>
                                </div>
                            </Nuxt-link>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 mt-5">
                        <div class="grids3-info">
                            <a href="#service" class="d-block zoom"><img src="../assets/images/a5.jpg" alt=""
                                    class="img-fluid radius-image"></a>
                            <Nuxt-link to="./lend" :class="$route.fullPath === '/lend'">
                                <div class="grids-of-3-saas-info">
                                    <h5><a class="title">农产品购买</a></h5>
                                    <p class="saas-para"> 为农业爱好者和农民提供一个知识库，包括种植技术分享，肥料的使用等方面的知识</p>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-5">
                        <div class="grids3-info">
                            <a class="d-block zoom"><img src="../assets/images/a6.jpg" alt=""
                                    class="img-fluid radius-image"></a>
                            <Nuxt-link to="./news" :class="$route.fullPath === '/news'">
                                <div class="grids-of-3-saas-info">
                                    <h5><a href="#service" class="title">农业前言资讯</a></h5>
                                    <p class="saas-para"> 汇集全中国权威认证网站资讯，助你打破信息差，以最快的速度了解国家农业发展战略，政府农业优惠政策等</p>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="w3l-index5 py-5" id="about">
            <div class="new-block py-md-5 py-3">
                <div class="container">
                    <div class="row middle-section align-self">
                        <div class="col-lg-7 video-info pe-lg-5">
                            <div class="title-content text-left">
                                <h6 class="title-subw3hny">与自然共生</h6>
                                <h3 class="title-w3l two pe-lg-5">既要金山银山，更要绿水青山 </h3>
                                <p class="mt-3 pe-lg-5">
                                    农业是国家经济发展的基础之一。随着人口增长和城市化的加速，农业生产面临着越来越大的压力，但是农业也是发展潜力巨大的领域。发展现代农业可以提高农业效率，增加农产品供给，同时还能为农民创造更多就业机会。农业的现代化也可以带动农村地区的经济发展，从而实现城乡经济协调发展。因此，加强对农业的投资和支持，提高农业生产的技术水平和管理能力，推动现代农业发展，不仅有利于保障国家粮食安全，也有助于促进国家经济的持续发展。
                                </p>
                                <a href="http://8.130.118.49" class="btn btn-style btn-outline-light mt-sm-5 mt-4">Discover
                                    More</a>
                            </div>
                        </div>
                        <div class="col-lg-5 history-info mt-5 ps-lg-5 align-self">
                            <div class="position-relative mt-lg-0 mt-5 pt-lg-0 pt-5 pb-lg-0 pb-5">
                                <a href="http://8.130.118.49" class="popup-with-zoom-anim play-view text-center position-absolute">

                                    <!-- <span class="fa fa-play"></span> -->
                                    <button class="videobutton">
                                        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                            width="26px">
                                            <path
                                                d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </button>

                                </a>
                                <!-- dialog itself, mfp-hide class is required to make dialog hidden -->

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section class="w3l-circles py-5" id="circles">
            <div class="container py-md-5 py-2">
                <!--/row-2-->
                <div class="row w3l-circles">
                    <div class="col-lg-6 circles-left">
                        <img src="../assets/images/a6.jpg" alt="" class="radius-image img-fluid">
                    </div>
                    <div class="col-lg-6 circles-right mt-lg-0 mt-5 align-self  position-relative">
                        <h6 class="title-subw3hny">Why Us</h6>
                        <h3 class="title-w3l mb-4">我们的心愿是让农民有田种，有钱花</h3>
                        <p class="mb-5">
                            "易亩智能"是指一亿亩以上的优质耕地，是中国政府提出的一个重要的农业发展目标。这个目标的提出，是为了加强中国的粮食安全和保障国家农业的可持续发展。"易亩智能"计划的实施，主要包括加强耕地保护、提高耕地质量、推进粮食生产等方面的工作。
                        </p>
                        <div class="progress-circles-grids">
                            <div class="progress-circles">
                                <div class="progress-left">
                                    <div class="circle1">
                                        <div id="progress" data-dimension="80" data-text="85%" data-fontsize="18"
                                            data-percent="85" data-fgcolor="#006837" data-bgcolor="#f3f5f4" data-width="10"
                                            data-bordersize="4" data-animationstep="2">
                                        </div>

                                    </div>
                                    <div class="progress-right">
                                        <h4>有田种</h4>
                                        <p class="mb-lg-5">平台开设知识库，手把手指导如何种产量更高、品质更好的农作物</p>
                                    </div>
                                </div>

                            </div>
                            <div class="progress-circles">
                                <div class="progress-left">
                                    <div class="circle1">
                                        <div id="progress1" data-dimension="80" data-text="95%" data-fontsize="18"
                                            data-percent="95" data-fgcolor="#006837" data-bgcolor="#f3f5f4" data-width="10"
                                            data-bordersize="4" data-animationstep="2">
                                        </div>
                                    </div>
                                    <div class="progress-right">
                                        <h4>有钱花</h4>
                                        <p class="mb-lg-5">平台运行电商销售渠道，帮扶农民销售丰收的粮食，提高农民效益</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <!--//row-2-->
            </div>
        </section>
        <section class="w3l-testimonials" id="testimonials">
            <!-- /grids -->
            <div class="cusrtomer-layout py-5">
                <div class="container py-lg-4 py-md-3 py-2 pb-lg-0">

                    <h3 class="title-w3l two text-center mb-sm-5 mb-4">易亩智能是中国农业现代化的一个重要标志</h3>
                    <!-- /grids -->
                    <div class="testimonial-width">
                        <div id="owl-demo1" class="owl-two owl-carousel owl-theme">
                            <div class="item">
                                <div class="testimonial-content">
                                    <div class="testimonial">

                                        <blockquote>
                                            <q>在实施"易亩智能"计划中，中国政府将采取一系列措施，如加强耕地管理和监管、加大耕地整治和提升耕地质量、推广科技创新、加强土壤保育等，以实现粮食生产的可持续发展和农民的持续增收。</q>
                                        </blockquote>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- /grids -->
            </div>
            <!-- //grids -->
        </section>

        <section class="w3l-stats-main py-5" id="stats">
            <div class="container py-lg-4">
                <div class="row stats-con">
                    <div class="col-lg-6 stats-content-left pe-lg-5">
                        <div class="stats_info counter_grid1 text-left">
                            <div class="icon stat-icon">
                                <!-- <span class="fas fa-users"></span> -->
                                <img src="../assets/images/小麦.png" alt="">
                                <p class="counter">5233</p>
                            </div>
                            <div class="stat-icon-des text-left">

                                <h3 class="title-w3l">

                                    累计收录农产品数量
                                </h3>
                                <p class="para-stat">我们致力于做最全面的农产品收录平台</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 stats-content-left ps-lg-5 mt-lg-0 mt-md-5 mt-4">
                        <div class="stats_info counter_grid1 text-left">
                            <div class="icon stat-icon">
                                <!-- <span class="fas fa-tractor"></span> -->
                                <img src="../assets/images/人口.png" alt="">
                                <p class="counter">223000</p>
                            </div>
                            <div class="stat-icon-des text-left">
                                <h3 class="title-w3l">
                                    累计帮助农民致富</h3>
                                <p class="para-stat">我们努力带领每一位农业人脱贫致富</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- <div class="feature">
            <a class="fea1" href="#">
                <i></i>
                <h3>农业知识库</h3>
                <span>
                    农作物百科大全<br />
                    帮助您更好的了解农作物
                </span>
            </a>
            <a class="fea2" href="#">
                <i></i>
                <h3>农业交流社区</h3>
                <span>
                    寻找解决方案<br />
                    分享你的农业经验
                </span>
            </a>
            <a class="fea3" href="#">
                <i></i>
                <h3>农产品购买</h3>
                <span>
                    快速获取目标农产品<br />
                    帮助您实现农业致富
                </span>
            </a>
            <a class="fea4" href="#">
                <i></i>
                <h3>农业新闻资讯</h3>
                <span>
                    一键获取农业最新动态<br />
                    快速掌握农业前沿信息
                </span>
            </a>
        </div> -->
    </main>
</template>

<script>
import '~/assets/css/index.css'
import '~/assets/css/style-starter.css'


export default {}
</script>
<style>
/* header */

.banner-19 .banner-layer {
    background: url(../assets/images/banner1.jpg) no-repeat center;
    -ms-background-size: cover;
    background-size: cover;
    z-index: 0;
    position: relative;
    display: grid;
    align-items: center;
    min-height: 680px;
    background-size: cover;
    margin-top: 50px;
}

.main-content-top {
    position: absolute;
    top: 0;
    /* min-height: 100vh; */
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    background: var(--layer);
}

.banner-19 .main-content {
    /* max-width: 560px; */
    margin-top: 70px;
    display: grid;
    grid-gap: 40px;
    grid-template-columns: 1.5fr 1fr;
    align-items: center;
}

.banner-19 .main-content h6 {
    font-size: 14px;
    line-height: 28px;
    color: #fff;
    text-transform: uppercase;
    opacity: 0.9;
    font-weight: 700;
    letter-spacing: 1px;
}

.banner-19 .main-content h4 {
    font-size: 80px;
    line-height: 90px;
    color: #fff;
    font-weight: 700;
}

.banner-19 .w3lbanner-right p {
    font-size: 22px;
    line-height: 32px;
    color: #fff;
    opacity: 0.9;
}

/* responsive */
@media (max-width: 1130px) {
    #myVideo {
        width: auto;
        height: 100%;
    }

    .banner-19 .w3lbanner-right p {
        font-size: 20px;
        line-height: 30px;
    }
}

@media (max-width: 1080px) {
    .banner-19 .banner-layer {
        min-height: 600px;
    }

    .banner-19 .main-content {
        display: grid;
        grid-gap: 20px;
    }
}

@media (max-width: 992px) {
    .banner-19 .main-content h4 {
        font-size: 45px;
        line-height: 55px;
    }

    .banner-19 .banner-layer {
        min-height: 580px;
    }

    .banner-19 .main-content {
        /* max-width: 560px; */
        margin-top: 70px;
        display: grid;
        grid-gap: 30px;
        grid-template-columns: 1fr;
        align-items: center;
    }
}

@media (max-width:640px) {
    .banner-19 .main-content h4 {
        font-size: 40px;
        line-height: 50px;

    }

    .banner-19 .w3lbanner-right p {
        font-size: 18px;
        line-height: 28px;
    }

    .banner-19 .main-content {
        margin-top: 30px;
    }

    .banner-19 .banner-layer {
        min-height: 500px;
    }

}

@media (max-width:600px) {
    .banner-19 .main-content h4 {
        font-size: 35px;
        line-height: 45px;
    }

    .banner-19 .banner-layer {
        min-height: 460px;
    }
}

@media (max-width:480px) {
    .banner-19 .main-content h4 {
        font-size: 30px;
        line-height: 40px;
    }

    .brk-btn {
        padding: 12px;
        margin-top: 1em;
    }
}



.w3l-about-6 ul.service-list li {
    display: block;
    margin-bottom: 15px;
}

.w3l-about-6 ul.service-list li:last-child {
    margin-bottom: 0px;
}

.w3l-about-6 ul.service-list li a {
    font-size: 18px;
    line-height: 28px;
    font-weight: 700;
    color: var(--heading-color);
    position: relative;
}

.w3l-about-6 ul.service-list li a span.fa {
    color: var(--primary-color);
    margin-right: 5px;
    opacity: .8;
}

.w3l-about-6 ul.service-list li a:hover {
    transition: 0.3s ease;
    color: var(--primary-color);
}

@media (max-width: 568px) {
    .w3l-about-6 ul.service-list li {
        margin-bottom: 10px;
    }
}

@media (max-width: 480px) {
    .HomeAboutImages .row {
        padding: 0 10px;
    }

    .Home Images .col-6 {
        padding: 0 5px;
    }
}

@media (max-width: 415px) {
    .w3l-about-6 ul.service-list li {
        margin-bottom: 5px;
    }
}

@media (max-width: 384px) {
    .w3l-about-6 ul.service-list li a {
        font-size: 16px;
        line-height: 27px;
    }
}


/*-- container --*/
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.min-width {
    border: none !important;
}

@media (min-width: 992px) {
    .container {
        max-width: 960px;
        margin-right: auto;
        margin-left: auto;
    }
}

@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
        margin-right: auto;
        margin-left: auto;
    }
}

@media (min-width: 1280px) {
    .container {
        max-width: 1200px;
    }
}

@media (max-width: 480px) {
    .HomeAboutImages .row {
        padding: 0 10px;
    }

    .Home Images .col-6 {
        padding: 0 5px;
    }
}

.col-lg-6 {
    flex: 0 0 auto;
    width: 50%
}


.pe-lg-5 {
    padding-right: 3rem !important
}


.title-w3l,
.title-w3l.two {
    font-size: 34px;
    line-height: 44px;
    font-weight: 700;
    text-transform: capitalize;
}

.title-w3l span.thin {
    font-weight: 300;
    font-size: 38px;
    line-height: 48px;
    color: var(--heading-color)
}

.title-w3l.two {
    color: #fff;
}

.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 992px) {
    .container {
        max-width: 960px;
        margin-right: auto;
        margin-left: auto;
    }
}

@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
        margin-right: auto;
        margin-left: auto;
    }
}

@media (min-width: 1280px) {
    .container {
        max-width: 1200px;
    }
}

.todos {
    text-align: center;
}



.title-subw3hny {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 30px;
    color: var(--secondary-color);
    display: block;
    margin-bottom: 10px;
}


/*---//Banner-Style--*/
/*--/about--*/
.w3l-about-6 ul.service-list li {
    display: block;
    margin-bottom: 15px;
}

.w3l-about-6 ul.service-list li:last-child {
    margin-bottom: 0px;
}

.w3l-about-6 ul.service-list li a {
    font-size: 18px;
    line-height: 28px;
    font-weight: 700;
    color: var(--heading-color);
    position: relative;
}

.w3l-about-6 ul.service-list li a span.fa {
    color: var(--primary-color);
    margin-right: 5px;
    opacity: .8;
}

.w3l-about-6 ul.service-list li a:hover {
    transition: 0.3s ease;
    color: var(--primary-color);
}

@media (max-width: 568px) {
    .w3l-about-6 ul.service-list li {
        margin-bottom: 10px;
    }
}

@media (max-width: 480px) {
    .HomeAboutImages .row {
        padding: 0 10px;
    }

    .Home Images .col-6 {
        padding: 0 5px;
    }
}

@media (max-width: 415px) {
    .w3l-about-6 ul.service-list li {
        margin-bottom: 5px;
    }
}

@media (max-width: 384px) {
    .w3l-about-6 ul.service-list li a {
        font-size: 16px;
        line-height: 27px;
    }
}


@media (max-width: 480px) {
    .HomeAboutImages .row {
        padding: 0 10px;
    }

    .Home Images .col-6 {
        padding: 0 5px;
    }
}

.col-lg-6 {
    flex: 0 0 auto;
    width: 50%
}

.mt-lg-0 {
    margin-top: 0 !important
}

.mt-5 {
    margin-top: 3rem !important
}

.position-relative {
    position: relative !important
}


.radius-image {
    border-radius: var(--border-radius);
}

.radius-image-full {
    border-radius: var(--border-radius-full);
}

.img-fluid {
    max-width: 100%;
    height: auto
}

.col-6 {
    flex: 0 0 auto;
    width: 50%
}

@media (max-width: 480px) {
    .HomeAboutImages .row {
        padding: 0 10px;
    }

    .Home Images .col-6 {
        padding: 0 5px;
    }
}

@media (max-width: 480px) {
    .w3l-team .row {
        padding: 0 10px;
    }

    .w3l-team .row .col-6 {
        padding: 0 8px;
    }

    .w3l-team h4 {
        font-size: 22px;
        margin-top: 15px;
    }
}

@media (max-width: 384px) {
    .w3l-team .team .row {
        padding: 0 10px;
    }

    .w3l-team .team .col-6 {
        padding: 0 5px;
    }

    .w3l-team h4 {
        font-size: 17px;
        margin-top: 15px;
    }
}

@media (max-width: 384px) {
    .w3l-team .team .row {
        padding: 0 10px;
    }

    .w3l-team .team .col-6 {
        padding: 0 5px;
    }

    .w3l-team h4 {
        font-size: 17px;
        margin-top: 15px;
    }
}

.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--bs-gutter-y) * -1);
    margin-right: calc(var(--bs-gutter-x)/ -2);
    margin-left: calc(var(--bs-gutter-x)/ -2)
}


.col-6 {
    flex: 0 0 auto;
    width: 50%
}

@media (max-width: 480px) {
    .HomeAboutImages .row {
        padding: 0 10px;
    }

    .Home Images .col-6 {
        padding: 0 5px;
    }
}

@media (max-width: 480px) {
    .w3l-team .row {
        padding: 0 10px;
    }

    .w3l-team .row .col-6 {
        padding: 0 8px;
    }

    .w3l-team h4 {
        font-size: 22px;
        margin-top: 15px;
    }
}

@media (max-width: 384px) {
    .w3l-team .team .row {
        padding: 0 10px;
    }

    .w3l-team .team .col-6 {
        padding: 0 5px;
    }

    .w3l-team h4 {
        font-size: 17px;
        margin-top: 15px;
    }
}

.w3l-grids-3hny {
    background-color: var(--bg-grey);
}


.text-center {
    text-align: center
}

.mb-4 {
    margin-bottom: 1.5rem !important
}



.grids-of-3-saas-info {
    position: relative;
    padding: 20px 30px;
}

.grids-of-3-saas-info h5 a {
    background: var(--bg-color);
    padding: 12px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: -32px;
    z-index: 99;
    max-width: 68%;
    border-radius: var(--border-radius);
    box-shadow: rgb(1 1 1 / 5%) 1px 1px 5px 0px;
    font-weight: 700;
    color: var(--primary-color);
}

/* video */
/*--/video--*/
.w3l-index5 {
    background: url(../assets/images/banner1.jpg) no-repeat;
    -ms-background-size: cover;
    background-size: cover;
    z-index: 0;
    position: relative;
    display: grid;
    align-items: center;
    background-size: cover;
}

.w3l-index5:before {
    content: "";
    background: rgb(0 0 0 / 55%);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
}

.w3l-index5 .new-block {
    display: grid;
    align-items: center;
    padding: 2rem 0;
}

.w3l-index5 .middle-section h2 {
    font-size: 45px;
    line-height: 55px;
    font-weight: 700;
}

.w3l-index5 .video-info p,
p.vhny-para {
    color: #fff;
    opacity: 0.8;
}

.w3l-index5 span.video-play-icon {
    background: #fff;
    display: inline-block;
    width: 55px;
    height: 55px;
    line-height: 55px;
    border-radius: 50%;
    -webkit-animation: ripple 1s linear infinite;
    animation: ripple 1s linear infinite;
    animation: ripple 1s linear infinite;
    -webkit-animation: ripple 1s linear infinite;
    transition: 0.3s ease-in-out;
    -webkit-transition: 0.3s ease-in-out;
    -moz-transition: 0.3s ease-in-out;
    -ms-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;

}

.w3l-index5 span.video-play-icon span {
    color: var(--primary-color);
}

.w3l-index5 span.video-play-icon:hover {
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
    -webkit-transition: 0.3s ease-in-out;
    -moz-transition: 0.3s ease-in-out;
    -ms-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
}

.w3l-index5 span.fa.fa-play {
    line-height: 55px;
}

.w3l-index5 .play-view {
    left: 0;
    right: 0;
    top: calc(50% - 40px);
}

@media (max-width: 800px) {
    .w3l-index5 .middle-section h2 {
        font-size: 40px;
        line-height: 50px;
    }
}

@media (max-width: 667px) {
    .w3l-index5 .middle-section h2 {
        font-size: 32px !important;
        line-height: 42px;
    }

    .w3l-index5 .play-view {
        left: 0;
        right: 0;
        top: calc(50% - 28px);
    }

}

.w3l-circles {
    background: var(--bg-color);
}

.circliful {
    position: relative;
}

.circle-text,
.circle-info,
.circle-text-half,
.circle-info-half {
    width: 100%;
    position: absolute;
    text-align: center;
    display: inline-block;
    font-weight: 700;
    color: var(--heading-color);
}

.circle-info,
.circle-info-half {
    color: #999;
}

.circliful .fa {
    margin: -10px 3px 0 3px;
    position: relative;
    bottom: 4px;
}

.progress-circles-grids {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}

.progress {
    display: flex;
    height: 1rem;
    overflow: hidden;
    font-size: .75rem;
    background-color: #e9ecef;
    border-radius: .25rem
}

.progress-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #0d6efd;
    transition: width .6s ease
}

@media (prefers-reduced-motion:reduce) {
    .progress-bar {
        transition: none
    }
}

.progress-bar-striped {
    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
    background-size: 1rem 1rem
}

.progress-bar-animated {
    -webkit-animation: 1s linear infinite progress-bar-stripes;
    animation: 1s linear infinite progress-bar-stripes
}

@media (prefers-reduced-motion:reduce) {
    .progress-bar-animated {
        -webkit-animation: none;
        animation: none
    }
}


.progress-left {
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-gap: 15px;
}

.progress-circles h4 {
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 8px;
}

@media (max-width: 991px) {
    .progress-left {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 10px;
    }
}

@media (max-width:767px) {
    .progress-circles h4 {
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        margin-bottom: 6px;
    }
}

@media (max-width: 480px) {
    canvas {
        width: 120px;
        height: 120px;
    }

    .circle-text,
    .circle-info,
    .circle-text-half,
    .circle-info-half {
        font-size: 26px !important;
        line-height: 160px !important;
    }

    .circliful {
        width: 120px !important;
    }
}

@media (max-width:480px) {

    .circle-text,
    .circle-info,
    .circle-text-half,
    .circle-info-half {
        font-size: 20px !important;
        line-height: 126px !important;
    }

    .progress-circles h4 {
        font-size: 16px;
        line-height: 26px;
    }
}

.w3l-testimonials {
    background: url(../assets/images/banner4.jpg) no-repeat center;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -ms-background-size: cover;
    position: relative;
    z-index: 1;
}

.w3l-testimonials::before {
    background: var(--layer);
    content: "";
    position: absolute;
    top: 0;
    min-height: 100%;
    left: 0;
    right: 0;
    z-index: -1;
}

.w3l-testimonials .testimonial {
    position: relative;
    overflow: hidden;
    text-align: center;
}

.w3l-testimonials .testimonial {
    display: block;
    padding: 40px 30px;
    position: relative;
    border: none;
    max-width: 750px;
    margin: auto;
    text-align: center;
}

.w3l-testimonials blockquote q {
    font-size: 20px;
    line-height: 28px;
    color: #fff;
    font-weight: 700;
}

.w3l-testimonials blockquote q::before {
    display: none;
}

.w3l-testimonials .test-img {
    width: 70px;
    height: 70px;
    display: inline-block;
    overflow: hidden;
    background: var(--bg-color);
    border-radius: 50%;
}

.w3l-testimonials .testimonial img {
    width: 100%;
    min-height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
}

.testi-des {
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    text-align: left;
    grid-gap: 20px;
}

.w3l-testimonials .testimonial blockquote {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    position: relative;
    margin-bottom: 1.5em;
}

.w3l-clients .testimonial .peopl {
    margin: 0;
    margin-left: 20px;
    text-align: left;
}

.testimonial i.fas.fa-quote-right {
    color: #fff;
    font-size: 50px;
    margin-bottom: 20px;
}

.w3l-testimonials .testimonial .peopl h3 {
    margin: 0;
    font-weight: 700;
    font-size: 20px;
    color: #fff;
}

.w3l-testimonials p.indentity {
    font-style: normal;
    margin-bottom: 0;
    opacity: 0.7;
    color: #fff;
}

.w3l-testimonials .title-subw3hny {
    opacity: 0.8;
    color: #fff;
}

@media (max-width: 768px) {
    .w3l-testimonials .testimonial {
        padding: 20px 20px;
    }

    .w3l-testimonials blockquote q {
        font-size: 18px;
        line-height: 28px;
        color: #fff;
        font-weight: 700;
    }
}

@media (max-width: 415px) {
    .w3l-testimonials .testimonial {
        padding: 20px 0px;
    }
}

.mb-1 {
    margin-bottom: .25rem !important
}

.w3l-stats-main {
    background: var(--bg-color);
}

.stats-content-left {
    align-content: center;
    display: grid;
}

.stat-icon-des {
    text-align: left;
}

.w3l-stats-main .icon.stat-icon {
    text-align: left;
}

.w3l-stats-main .icon.stat-icon span {
    font-size: 46px;
    color: var(--primary-color);
}

.stats_info p {
    font-size: 46px;
    line-height: 56px;
    font-weight: 700;
    color: var(--secondary-color);
    margin-top: 10px;
    margin-bottom: 0;
}

p.para-stat {
    font-size: 17px;
    line-height: 27px;
    color: var(--font-color);
    font-weight: normal;
    opacity: 0.9;
}

.stats_info h4 {
    font-size: 26px;
    line-height: 36px;
    color: var(--heading-color);
    font-weight: 700;
    opacity: 1;
}

.stats_bottom_grid_left img {
    margin: 0 auto;
}

.stats_info {
    text-align: center;
    border-top: none;
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-gap: 40px;
}

@media (max-width:1280px) {
    .stats_info h4 {
        font-size: 20px;
        line-height: 30px;
    }

    .stats_info {
        text-align: center;
        border-top: none;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: 10px 20px;
    }
}

@media (max-width:1080px) {
    .stats_info {
        text-align: center;
        border-top: none;
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-gap: 10px 20px;
    }

}

@media (max-width: 767px) {

    .w3l-stats-main .icon.stat-icon span {
        font-size: 36px;
        margin-bottom: 10px;
    }
}

@media (max-width:600px) {
    .stats_info p {
        font-size: 32px;
        line-height: 26px;
    }

    p.para-stat {
        font-size: 16px;
        line-height: 26px;
    }

    .stats_info h4 {
        font-size: 18px;
        line-height: 28px;
    }

    .stat-icon-des h3.title-w3l {
        font-size: 24px !important;
    }
}

.videobutton {
    display: flex;
    justify-content: center;
    color: #fff;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background: linear-gradient(30deg, rgb(255, 130, 0) 20%, rgb(255, 38, 0) 80%);
    transition: all 0.3s ease-in-out 0s;
    box-shadow: rgba(193, 244, 246, 0.698) 0px 0px 0px 0px;
    animation: 1.2s cubic-bezier(0.8, 0, 0, 1) 0s infinite normal none running pulse;
    align-items: center;
    border: 0;
}

.videobutton:is(:hover, :focus) {
    transform: scale(1.2);
}

@keyframes pulse {
    100% {
        box-shadow: 0 0 0 45px rgba(193, 244, 246, 0);
    }
}
</style>
