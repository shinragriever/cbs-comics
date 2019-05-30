// Author Model

import { Model } from "@vuex-orm/core"
import Comic from "./Comic"

export default class Author extends Model {
    static get entity () { // <- Define as getter.
        return 'authors'
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
              url: '/api/authors',
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
              url: '/api/authors',
              method: 'post',
            },
          },
          $update: {
            name: 'update',
            http: {
              url: '/api/authors/:id',
              method: 'put',
            },
          },
          $delete: {
            name: 'delete',
            http: {
              url: '/api/authors/:id',
              method: 'delete',
            },
          },
        },
      }
}


