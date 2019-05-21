// Comic Model


import { Model } from "@vuex-orm/core";
import Author from "./Author";
import Serie from "./Serie";
import Publisher from "./Publisher";
export default class Comic extends Model {
    static get entity () { // <- Define as getter.
        return 'comics'
      }

    static fields(){
        return {
            id: this.increment(),
            title: this.attr(''),
            description: this.attr(''),
            author_id:this.attr(null),
            serie_id:this.attr(null),
            publisher_id:this.attr(null),
            // genres: this.belongsToMany(Genre, GenreComic, 'comic_id','genre_id'),
            publishyear: this.attr(''),
            price: this.attr(''),
            stock: this.attr(0),
            author: this.belongsTo(Author, 'author_id'),
            serie: this.belongsTo(Serie, 'serie_id'),
            publisher: this.belongsTo(Publisher, 'publisher_id'),

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
              url: '/api/comics',
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
              url: '/api/comics',
              method: 'post',
            },
          },
          $update: {
            name: 'update',
            http: {
              url: '/api/comics/:id',
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