import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { GET, POST, PUT } from '@/service/api'
Vue.prototype.$GET = GET
Vue.prototype.$POST = POST
Vue.prototype.$PUT = PUT

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

//改變網頁title
router.beforeEach((to,from,next) =>{
    if(to.meta.title){
        document.title = to.meta.title
    }
    next();
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
