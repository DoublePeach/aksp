<template>
  <client-only>
    <div>
    <!--农业新闻-->
    <div class="banner">
      <img src="~/assets/images/help-banner.png" alt="" />
    </div>
    <div class="content help-content">
      <dl>
        <dt>
          <ul class="content-tab">
            <li :class="{ sel: show === 1 }" @click="change(1)">金农网
              <!--  -->
            </li>
            <li :class="{ sel: show === 2 }" @click="change(2)">农业农村部门户</li>
            <li :class="{ sel: show === 3 }" @click="change(3)">中国农业信息网</li>
            <li :class="{ sel: show === 4 }" @click="change(4)">中国兴农网</li>
            <li :class="{ sel: show === 5 }" @click="change(5)">吾谷网</li>
            <li :class="{ sel: show === 6 }" @click="change(6)">中国水果交易网</li>
          </ul>
        </dt>
        <dd v-if="show === 1" class="question-list" style="display:block">
          <iframe src="https://www.jinnong.cn" 
          id="iframe"
        name="iframe"
        height="100%"
        width="100%"
        scrolling="auto"
        frameborder="0"></iframe>
          <ul>
          </ul>
        </dd>
        <dd v-if="show === 2"  class="question-list" style="display:block">
          <iframe src="http://www.moa.gov.cn/so/s?tab=all&siteCode=bm21000007&qt=%E4%B8%AD%E5%A4%AE%E4%B8%80%E5%8F%B7%E6%96%87%E4%BB%B6&sitePath=true" 
          id="iframe"
        name="iframe"
        height="100%"
        width="100%"
        scrolling="auto"
        frameborder="0"></iframe>
        </dd>
        <dd v-if="show === 3" class="question-list" style="display:block">
          <iframe src=" http://www.agri.cn/"
          id="iframe"
        name="iframe"
        height="100%"
        width="100%"
        scrolling="auto"
        frameborder="0"></iframe>
        </dd>
        <dd v-if="show === 4" class="question-list" style="display:block">
          <iframe src="http://www.nongyezhan.com/z/202110/zl-547.html"
          id="iframe"
        name="iframe"
        height="100%"
        width="100%"
        scrolling="auto"
        frameborder="0"></iframe>
        </dd>
        <dd v-if="show === 5" class="question-list" style="display:block">
          <iframe src="http://www.wugu.com.cn/"
          id="iframe"
        name="iframe"
        height="100%"
        width="100%"
        scrolling="auto"
        frameborder="0"></iframe>
        </dd>

        <dd v-if="show === 6" class="question-list" style="display:block">
          <iframe src="https://www.guo68.com/"
          id="iframe"
        name="iframe"
        height="100%"
        width="100%"
        scrolling="auto"
        frameborder="0"></iframe>
        </dd>
      </dl>
    </div>
  </div>
  </client-only>

</template>

<script>
import '~/assets/css/help.css'
export default {
  data() {
    return { show: 1 }
  },

  methods: {
    change(value) {
      this.show = value
    },
    show(value) {
      this.show = value
  },

  
}
}
</script>
