import axios from 'axios'

const state= {
    
   
    publishers: [],
    

};
const getters= {
   
   allPublishers: state => state.publishers
};
const mutations= {
    
    
    SET_PUBLISHERS(state,publishers){
        state.publishers = publishers
    },
    

};

const actions= {
    

    async fetchPublishers({commit}){
        await axios.get('/api/publishers')
          .then(response => 
            response.data).then(publishers => {
                commit('SET_PUBLISHERS', publishers)
            })
    }
};

export default {
    state, getters, actions, mutations
};
