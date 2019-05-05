// Serie Model

import { Model } from "@vuex-orm/core";


export default class Serie extends Model {
    static get entity () { // <- Define as getter.
        return 'series'
      }

    static fields(){
        return {
            id: this.attr(null),
           name: this.attr("")

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
              url: '/api/series',
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


