module.exports = {
  server: {
    port: 3000, // default: 3000
  },

  head: {
    title: '易亩智能',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'meta-key-words',
        name: 'keywords',
        content:
          '解决农民对农业信息差的问题，专注于农业知识分享，解决农产品销售问题，打造一体化的农业交流社区',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '解决农民对农业信息差的问题，专注于农业知识分享，解决农产品销售问题，打造一体化的农业交流社区',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    // CSS file in the project
    '~/assets/css/common.css',
  ],

  modules: [
    '@nuxtjs/axios', //引入axios模块
  ],

  env: {
    BASE_API: 'http://localhost:8099',

    // BASE_API: 'http://47.92.69.43:8099',
  },

  axios: {
    // Axios options here
    baseURL: 'http://localhost:8099',

    // baseURL: 'http://47.92.69.43:8099',
  },


  plugins: [
    '~/plugins/axios',
    '~/plugins/element-ui.js',
    '~/plugins/vue-qriously-plugin.js',
  ],

  // ssr: false, //设置为false表示客户端渲染，true为服务器端渲染，默认为true
}
