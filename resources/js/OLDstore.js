import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

Vue.use(vuex, axios)


export default new vuex.Store({
    state: {
        test: 'test store',
        comics: [],
        newComic: {},
        authors: [],
        series: [],
        publishers: [],

    },
    getters: {
       newComic: state => state.newComic,
       comics: state => state.comics
    },
    mutations: {
        SET_COMICS(state, comics) {
            state.comics = comics
          },
          ADD_COMIC(state, comic){
            state.comics.push(comic)
          },
        SET_AUTHORS(state,authors){
              state.authors = authors
          },
          SET_SERIES(state,series){
            state.series = series
        },
        SET_PUBLISHERS(state,publishers){
            state.publishers = publishers
        },
        

    },

    actions: {
        getComics({commit}) {
            commit('SET_LOADING', true)
            axios.get('/api/comics')
              .then(response => 
                response.data).then(comics => {
                    commit('SET_COMICS', comics)
                    commit('SET_LOADING', false)
                })  
    },
    addComic ({ commit, state }) {
        if (!state.newComic) {
          // do not add empty todos
          return
        }
        const comic = {
          title: state.newComic.title,
          description: state.newComic.description,
          author_id: state.newComic.author_id,
            series_id: state.newComic.publisher_id,
            price: state.newComic.price,
            stock: state.newComic.stock
          
        }
        axios.post('/api/comics', comic).then(_ => {
          commit('ADD_COMIC', comic)
        })
      },
        getAuthors({commit}){
            axios.get('/api/authors')
              .then(response => 
                response.data).then(authors => {
                    commit('SET_AUTHORS', authors)
                })
        },
        getSeries({commit}){
            axios.get('/api/series')
              .then(response => 
                response.data).then(series => {
                    commit('SET_SERIES', series)
                })
        },
        getPublishers({commit}){
            axios.get('/api/publishers')
              .then(response => 
                response.data).then(publishers => {
                    commit('SET_PUBLISHERS', publishers)
                })
        }
}
})
