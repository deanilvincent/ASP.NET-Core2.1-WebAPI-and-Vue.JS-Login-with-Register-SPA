import Vue from 'vue';
import VueJWT from 'vuejs-jwt';
import axios from 'axios';

Vue.use(VueJWT);

export default class UserService {
    getUser(id) {
        if (id) {
            return axios.get('https://localhost:5001/api/users/' + id);
        }
    }
}