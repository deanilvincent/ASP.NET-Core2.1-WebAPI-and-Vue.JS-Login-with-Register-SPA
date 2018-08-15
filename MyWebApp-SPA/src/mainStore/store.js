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
        [IS_LOCALSTORAGE_TOKEN_IS_NOT_EMPTY]: (state, payload) => {
            if (payload.isLoggedIn) {
                if (localStorage.getItem('token')) {
                    state.isLoggedIn = true;
                } else {
                    state.isLoggedIn = false;
                }
            } else {
                localStorage.removeItem('token');
                state.isLoggedIn = false;
            }
        }
    },
    actions: {
        isLocalStoreTokenIsNotEmpty: ({ commit }, payload) => {
            commit(IS_LOCALSTORAGE_TOKEN_IS_NOT_EMPTY, payload);
        }
    }
});

export default store;