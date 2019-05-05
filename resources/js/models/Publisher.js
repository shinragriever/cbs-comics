// Publisher Model

import { Model } from "@vuex-orm/core";
import Comic from './Comic'

export default class Publisher extends Model {
    static get entity () { // <- Define as getter.
        return 'publishers'
      }
    static fields(){
        return {
            id: this.attr(null),
           name: this.attr(""),
          

        }
    }
    static methodConf = {
        http: {
            url: '',
          
        },
        methods: {
          $fetch: {
            name: 'fetch',
            http: {
              url: '/api/publishers',
              method: 'get',
            },
          },
          $get: {
            name: 'get',
            http: {
              url: '/:id',
              method: 'get',
            },
          },
          $create: {
            name: 'create',
            http: {
              url: '',
              method: 'post',
            },
          },
          $update: {
            name: 'update',
            http: {
              url: '/:id',
              method: 'put',
            },
          },
          $delete: {
            name: 'delete',
            http: {
              url: '/:id',
              method: 'delete',
            },
          },
        },
      }
}


