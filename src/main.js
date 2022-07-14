import Vue from 'vue';
// 配置ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import moment from 'moment'
import tab from '@/utilis/tab'
moment.locale('zh-cn')


Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$moment = moment
Vue.prototype.$tab = tab

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
