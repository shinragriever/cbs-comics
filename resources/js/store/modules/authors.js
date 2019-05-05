import axios from 'axios'


const state= {
    
   
    authors: [],
    

};
const getters= {
   
   allAuthors: state => state.authors
};
const mutations= {
    
    SET_AUTHORS(state,authors){
          state.authors = authors
      },
   

};

const actions= {
    
    async fetchAuthors({commit}){
        await axios.get('/api/authors')
          .then(response => 
            response.data).then(authors => {
                commit('SET_AUTHORS', authors)
            })
    },
};

export default {
    state, getters, mutations, actions
};
