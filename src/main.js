import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap Vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Aos
// import * as VueAos from 'vue-aos'
// import "vue-aos/src/components/"
import AOS from "aos"
import "aos/dist/aos.css"

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Vue.use(VueAos)

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: h => h(App)
}).$mount('#app')
