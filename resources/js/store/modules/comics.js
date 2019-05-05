
import axios from 'axios'





const state = {      
        comics: [],
        
       };
const getters= {
       newComic: state => state.NewComic,
       allComics: state => state.comics
    };
const mutations= {
        SET_COMICS(state, comics) {
            state.comics = comics
          },
          ADD_COMIC(state, payload){
           
            state.comics.push(payload)
            
          }
       
        

    };

const actions= {
       async fetchComics({commit}) {
            
            await axios.get('/api/comics')
              .then(response => 
                response.data).then(comics => {
                    commit('SET_COMICS', comics)
                    
                })  
    },
    addComic: async (context,  payload) => {   
     
      console.log("addcomic",payload);
      await axios.post('/api/comics',payload )
      .then((response)=> {       
        context.commit('ADD_COMIC', response.data)})
    //
      }
};

export default {
  namespaced: true,
    state, getters, actions, mutations
};
