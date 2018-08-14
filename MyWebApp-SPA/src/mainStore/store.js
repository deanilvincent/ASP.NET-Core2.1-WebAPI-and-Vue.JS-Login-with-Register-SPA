import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const IS_LOCALSTORAGE_TOKEN_IS_NOT_EMPTY = "IS_LOCALSTORAGE_TOKEN_IS_NOT_EMPTY";

const store = new Vuex.Store({
    state: {
        isLoggedIn: false,
    },
    getters: {

    },
    mutations: {
        [IS_LOCALSTORAGE_TOKEN_IS_NOT_EMPTY]: (state) => {
            state.isLoggedIn = !!localStorage.getItem('token');
        }
    },
    actions: {
        isLocalStoreTokenIsNotEmpty: ({ commit }) => {
            commit(IS_LOCALSTORAGE_TOKEN_IS_NOT_EMPTY);
        }
    }
});

export default store;