import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import bootstrap from 'bootstrap-vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'



Vue.use(ElementUI)

Vue.use(jquery)
Vue.use(bootstrap)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
