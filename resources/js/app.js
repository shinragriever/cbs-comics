import Vue from 'vue'

import Vuetify from 'vuetify'
import store from './store'
import router from './router'

Vue.use(Vuetify, {
    iconfont: 'md',
    theme: {
        primary: '#00796B',
        // secondary: '#E0F2F1',
        secondary:'#E0F2F1',
        accent: '#8c9eff',
        error: '#b71c1c'
      }
  })

import App from './views/App'

const app = new Vue({
    el: '#app',
    components: { App},
    router,
    store
    
});