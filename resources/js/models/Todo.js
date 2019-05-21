// Todo Model

import { Model } from "@vuex-orm/core";


export default class Todo extends Model {
    static get entity () { // <- Define as getter.
        return 'todos'
      }

    static fields(){
        return {
            id: this.attr(null),
           title: this.attr(""),
           body: this.attr(""),
          completed: this.boolean(false)
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
              url: '/api/todos',
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


