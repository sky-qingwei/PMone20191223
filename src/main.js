import Vue from 'vue'
import App from './App.vue'

// 日志的详细与否-生产环境  开发环境
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

// main,js入口文件的职责:1.做全局范围内的依赖和配置 2.创建一个根VUE实例
