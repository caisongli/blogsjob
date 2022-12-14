import Toast from './toast-com.vue' // 组件就是一个对象
import dayjs from 'dayjs'
Toast.install = function (Vue) {
  // 1创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  // 2.通过new的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastContrustor()

  // 3.将组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  // 4.toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  Vue.component('toast-c', Toast)

  // 在vue原型上添加$toast,方便以后组件使用
  Vue.prototype.$toast = toast;
  Vue.mixin({
    methods: {
      alertBox () {
        this.$alert('hhh')
      }
    }
  })
  Vue.filter('lcs', function (val) {
    val = '郦大哥'
    return val
  })
  Vue.filter('formatDate', function (val, ...res) {
    console.log(res);
    let h = res.includes(1) ? 'HH:mm:ss' : ''
    return dayjs(val).format(`YYYY/MM/DD ${h}`)
  })
}

export default Toast 
