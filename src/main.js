import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './assets/css/main.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

// 自定义指令
Vue.directive('document-click', {
  // el,binding,vnode:绑定dom元素，vue对象，虚拟节点
  bind (binding) {
    //  window.console.log('bind',el,binding,vnode);
    document.addEventListener('click', binding.value, false)
  },
  inserted () {
    //  window.console.log('inserted')
  },
  update () {
    window.console.log('update')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
