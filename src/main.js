import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { MessageBox, Message, Button } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/reset.css'
import './css/theme/index.less'
import timeC from '@/mixins/timeC'
import toast from '@/components/chajian'
import * as apiList from '@/utils/apiList'
import { debounce } from './directive/bounce'
Vue.config.productionTip = false // 阻止生产提示
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message
Vue.prototype.$api = apiList
Vue.mixin(timeC)
Vue.use(toast)
Vue.use(Button)
Vue.directive('debounce', debounce)
new Vue({
  router,
  render: h => h(App),
  beforeCreate () {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
