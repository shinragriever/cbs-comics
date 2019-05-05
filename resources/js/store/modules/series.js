import axios from 'axios'

const state= {
    
   
    series :[],
    

};
const getters= {
  
   allSeries: state => state.series
};
const mutations= {
    
   
      SET_SERIES(state,series){
        state.series = series
    },
    
    

};

const actions= {
    
   
    fetchSeries({commit}){
        axios.get('/api/series')
          .then(response => 
            response.data).then(series => {
                commit('SET_SERIES', series)
            })
    },
   
};

export default {
    state, getters, actions, mutations
};



