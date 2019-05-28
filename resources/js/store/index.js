import Vuex from 'vuex';
import Vue from 'vue';
import VuexORMAxios from '@vuex-orm/plugin-axios'
import VuexORM from '@vuex-orm/core'
import database from './database'

//Load Vuex
Vue.use(Vuex);
//New Database Instance


//Create Store
VuexORM.use(VuexORMAxios, {
    database,
    http: {
        baseURL: '',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  })

export default new Vuex.Store({
    state: {
        msg: 'test'
    },
    
    
    plugins: [VuexORM.install(database)]

})