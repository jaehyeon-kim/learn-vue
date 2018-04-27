const state = {
    counter: 0
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    stringCounter: state => {
        return state.counter + ' Clicks';
    }    
};

const mutations = {
    increment: state => {
        state.counter++;
    },
    decrement: state => {
        state.counter--;
    },
    incrementMore: (state, delta) => {
        state.counter += delta;
    },
    decrementMore: (state, delta) => {
         state.counter -= delta;
     }
};

const actions = {
    increment: ({ commit }) => {
        commit('increment');
   },
   decrement: ({ commit }) => {
        commit('decrement');
    },
    asyncIncrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('incrementMore', payload.delta);
        }, payload.duration);
    },
    asyncDecrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('decrementMore', payload);
        }, 1000);
    }
};

export default {
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
}