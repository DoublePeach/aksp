<template>
  <!--列表-->
  <div class="page-filter wrap">
    <div class="breadcrumbs">
      <a href="/">首页</a>&gt;<span class="cur">农产品选购</span>
    </div>
    <div class="invest-filter" data-target="sideMenu">
      <div class="filter-inner clearfix">
        <div class="filter-item">
          <div class="hd">
            <h3>筛选农产品</h3>
            <label>
              <input id="filterMulti" name="multiple_choice" type="checkbox" />
              多选</label
            >
          </div>
          <div class="bd">
            <dl>
              <dt>作物类型</dt>
              <dd>
                <ul>
                  <li class="n1">
                    <a
                      href="javascript:url('post_type','');"
                      id="post_type_"
                      class="active"
                      >不限</a
                    >
                  </li>
                  <li class="n2">
                    <a
                      href="javascript:url('post_type','car');"
                      id="post_type_car"
                      >麦类</a
                    >
                  </li>
                  <li class="n3">
                    <a
                      href="javascript:url('post_type','house');"
                      id="post_type_house"
                      >豆类</a
                    >
                  </li>
                  <li class="n4">
                    <a
                      href="javascript:url('post_type','bridge');"
                      id="post_type_bridge"
                      >稻类</a
                    >
                  </li>
                  <li class="n5">
                    <a
                      href="javascript:url('post_type','worth');"
                      id="post_type_worth"
                      >粗粮类</a
                    >
                  </li>
                  <li class="n6">
                    <a
                        href="javascript:url('post_type','n6');"
                        id="post_type_n6"
                    >薯类</a
                    >
                  </li>

<!--                  <li class="n7">
                    <a
                        href="javascript:url('post_type','n7');"
                        id="post_type_n7"
                    >其他</a
                    >
                  </li>-->
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>年利率</dt>
              <dd>
                <ul>
                  <li class="n1">
                    <a
                      href="javascript:url('borrow_interestrate','');"
                      id="borrow_interestrate_"
                      class="active"
                      >不限</a
                    >
                  </li>
                  <li class="n2">
                    <a
                      id="borrow_interestrate_1"
                      href="javascript:url('borrow_interestrate','1');"
                      >12%以下</a
                    >
                  </li>
                  <li class="n3">
                    <a
                      id="borrow_interestrate_2"
                      href="javascript:url('borrow_interestrate','2');"
                      >12%-20%</a
                    >
                  </li>
                  <li class="n4">
                    <a
                      id="borrow_interestrate_3"
                      href="javascript:url('borrow_interestrate','3');"
                      >20%-45%</a
                    >
                  </li>
                  <li class="n5">
                    <a
                      id="borrow_interestrate_4"
                      href="javascript:url('borrow_interestrate','4');"
                      >45%及以上</a
                    >
                  </li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>采收周期</dt>
              <dd>
                <ul>
                  <li class="n1">
                    <a
                      href="javascript:url('spread_month','');"
                      id="spread_month_"
                      class="active"
                      >不限</a
                    >
                  </li>
                  <li class="n2">
                    <a
                      id="spread_month_1"
                      href="javascript:url('spread_month','1');"
                      >1月以下</a
                    >
                  </li>
                  <li class="n3">
                    <a
                      id="spread_month_2"
                      href="javascript:url('spread_month','2');"
                      >1-3月</a
                    >
                  </li>
                  <li class="n4">
                    <a
                      id="spread_month_3"
                      href="javascript:url('spread_month','3');"
                      >3-6月</a
                    >
                  </li>
                  <li class="n5">
                    <a
                      id="spread_month_4"
                      href="javascript:url('spread_month','4');"
                      >6-12月</a
                    >
                  </li>
                  <li class="n6">
                    <a
                      id="spread_month_5"
                      href="javascript:url('spread_month','5');"
                      >12月及以上</a
                    >
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="repayment">
              <dt>其他分类</dt>
              <dd>
                <ul>
                  <li class="n1">
                    <a
                      href="javascript:url('repay_style','');"
                      id="repay_style_"
                      class="active"
                      >不限</a
                    >
                  </li>
                  <li class="n2">
                    <a
                      id="repay_style_end"
                      href="javascript:url('repay_style','end');"
                      >粮食作物</a
                    >
                  </li>
                  <li class="n2">
                    <a
                      id="repay_style_endmonth"
                      href="javascript:url('repay_style','endmonth');"
                      >经济作物</a
                    >
                  </li>
<!--                  <li class="n2">
                    <a
                      id="repay_style_month"
                      href="javascript:url('repay_style','month');"
                      >等额本息</a
                    >
                  </li>-->
                </ul>
              </dd>
            </dl>
          </div>
        </div>
        <div class="common-problem">
          <h3>常见问题</h3>
          <ul>
            <li><a href="#">如何选择农产品？</a></li>
            <li><a href="#">年利率是什么意思？</a></li>
            <li><a href="#">收费标准从哪里制定的？</a></li>
            <li><a href="#">如何进行对比购买不同产品？</a></li>
            <li><a href="#">待发布和售卖中的区别？</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="invest-list mrt30 clearfix">
      <div class="hd">
        <h3>农产品列表</h3>
        <div class="count">
          <ul>
            <li class="line">
              农产品交易金额&nbsp;&nbsp;<span class="f20 bold"
                >3.54亿元</span
              >
            </li>
            <li>
              累计帮助农民赚取收益&nbsp;&nbsp;<span class="f20 bold">2.52亿元</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="bd">
        <div class="invest-table clearfix">
          <div class="title clearfix">
            <ul>
              <li class="col-330">农产品名称</li>
              <li class="col-180">
                <a href="javascript:url('order','account_up');" class=""
                  >价格(元/kg)</a
                >
              </li>
              <li class="col-110">
                <a href="javascript:url('order','apr_up');" class="">年利率</a>
              </li>
              <li class="col-150">
                <a href="javascript:url('order','period_up');" class=""
                  >采收周期</a
                >
              </li>
              <li class="col-150">种植方式</li>
              <li class="col-120">
                <a href="javascript:url('order','scale_up');" class=""
                  >仓库余量(%)</a
                >
              </li>
              <li class="col-120-t">操作</li>
            </ul>
          </div>
          <!------------投资列表-------------->
          <div class="item" v-for="lend in lendList" :key="lend.id">
            <ul>
              <li class="col-330 col-t">
                <NuxtLink :to="'/lend/' + lend.id" target="_blank">
                  <i class="icon icon-zhai"></i>
                </NuxtLink>
                <NuxtLink
                  class="f18"
                  :to="'/lend/' + lend.id"
                  :title="lend.title"
                  target="_blank"
                >
                  {{ lend.title }}
                </NuxtLink>
              </li>
              <li class="col-180">
                <span class="f20 c-333"> {{ lend.amount }}元 </span>
              </li>
              <li class="col-110 relative">
                <span class="f20 c-orange">
                  {{ lend.lendYearRate * 100 }}%
                </span>
              </li>
              <li class="col-150">
                <span class="f20 c-333">{{ lend.period }}个月</span>
              </li>
              <li class="col-150">{{ lend.param.returnMethod }}</li>
              <li class="col-120">
                <div class="circle">
                  <div class="left progress-bar">
                    <!-- <div
                      :class="
                        'progress-bgPic progress-bfb' +
                          Math.floor((lend.investAmount / lend.amount) * 10)
                      "
                    > -->
                    <div
                      :class="
                        'progress-bgPic progress-bfb' +
                          Math.floor((lend.investAmount / lend.amount) * 10)
                      "
                    >
                      <div class="show-bar">
                        {{ (lend.investAmount / lend.amount) * 100 }}%
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="col-120-2">
                <NuxtLink
                  class="ui-btn btn-gray"
                  :to="'/lend/' + lend.id"
                  target="_blank"
                >
                  {{ lend.param.status }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <!------------投资列表-------------->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/css/index.css'
import '~/assets/css/detail.css'
export default {
  async asyncData({ $axios }) {
    console.log('服务器端获取远程数据。。。。。。。。。。。。。。。。')
    let response = await $axios.$get('/api/core/lend/list')
    return {
      lendList: response.data.lendList,
    }
  },
}
</script>
