<template>
  <!--网站底部-->
  <div id="footer" class="ft">
    <div class="ft-inner clearfix">
      <div class="ft-helper clearfix">
        <dl>
          <dt>关于我们</dt>
          <dd>
            <NuxtLink to="/about/profile">项目简介</NuxtLink
            ><NuxtLink to="/about/leader">管理团队</NuxtLink
            ><NuxtLink to="/about/report">网站公告</NuxtLink>
          </dd>
        </dl>
        <dl>
          <dt>相关网站</dt>
          <dd>
            <a target="_blank" href="https://www.farmer.com.cn/">
              中国农业新闻网
            </a>
<!--            <NuxtLink to="https://www.farmer.com.cn/">关注中国农网</NuxtLink>-->
<!--            <NuxtLink to="/borrow">我要借款</NuxtLink>-->
            <a target="_blank" href="http://www.nkb.com.cn/">
              中国农科新闻网
            </a>
          </dd>
        </dl>
        <dl>
          <dt>帮助中心</dt>
          <dd>
            <NuxtLink to="/help">新手入门</NuxtLink
            ><NuxtLink to="/user">我的账户</NuxtLink>
          </dd>
        </dl>
        <dl>
          <dt>联系我们</dt>
          <dd><NuxtLink to="/about">联系我们</NuxtLink></dd>
        </dl>
      </div>
      <div class="ft-service">
        <dl>
          <dd>
            <p>
              <strong>易亩智能</strong><br />
              联系平台管理员QQ:<em>2389242270</em><br />
              WeChat：htt15235357489<br />
            </p>
            <div class="ft-serv-handle clearfix">
              <a
                class="icon-hdSprite icon-ft-sina a-move a-moveHover"
                title="新浪微博"
                target="_blank"
                href="#"
              ></a>
              <a
                class="icon-hdSprite icon-ft-qqweibo a-move a-moveHover"
                title="腾讯微博"
                target="_blank"
                href="#"
              ></a>
              <a
                class="icon-hdSprite icon-ft-email a-move a-moveHover mrn"
                title="email"
                target="_blank"
                href="mailto:xz@shangrongbao.com"
              ></a>
            </div>
          </dd>
        </dl>
      </div>
      <div class="ft-wap clearfix">
        <dl>
          <dt>后台管理员微信二维码</dt>
          <dd>
            <span class="icon-ft-erweima">
              <img src="~/assets/images/code.png" style="display: inline;" />
            </span>
          </dd>
        </dl>
      </div>
    </div>
    <div class="ft-record">
      <div class="ft-approve clearfix">
        <a class="icon-approve approve-0 fadeIn-2s" target="_blank" href="#">
        </a>
        <a class="icon-approve approve-1 fadeIn-2s" target="_blank" href="#">
        </a>
        <a class="icon-approve approve-2 fadeIn-2s" target="_blank" href="#">
        </a>
        <a class="icon-approve approve-3 fadeIn-2s" target="_blank" href="#">
        </a>
      </div>
      <div class="ft-identity">
        ©2023 晋中信息学院 All rights reserved&nbsp;&nbsp;&nbsp;
        <span class="color-e6">|</span>&nbsp;&nbsp;&nbsp;
        doublepeach&nbsp;&nbsp;&nbsp;
        <span class="color-e6">|</span>&nbsp;&nbsp;&nbsp;
        <a target="_blank" href="http://www.miitbeian.gov.cn/">
          京ICP备xxxxxxxx号-1
        </a>
      </div>
    </div>
  </div>
</template>
