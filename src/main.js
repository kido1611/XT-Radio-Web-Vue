import Vue from 'vue'
// import App from './App.vue'
import App from './views/Base.vue'
import router from './router'
import './registerServiceWorker'

// Font-Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVolumeUp, faVolumeMute, faPlay, faStop, faVideo, faMusic, faUsers, faInfo, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
//import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlay)
library.add(faStop)
library.add(faVolumeUp)
library.add(faVolumeMute)
library.add(faInstagram)
library.add(faTwitter)
library.add(faWhatsapp)
library.add(faVideo)
library.add(faMusic)
library.add(faUsers)
library.add(faInfo)
library.add(faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Normalize
// import 'normalize.css/normalize.css'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import {Navbar, Layout, Alert, Dropdown, Modal} from 'bootstrap-vue/es/components'
Vue.use(Navbar);
Vue.use(Layout);
Vue.use(Alert);
Vue.use(Dropdown);
Vue.use(Modal);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
