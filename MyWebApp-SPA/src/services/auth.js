import axios from 'axios';

export default class AuthService {
    login(user){
        return axios
        .post("https://localhost:5001/api/auth/login", user)
        .then(response => {
          if (response) {
              localStorage.setItem('token', response.data.token)
          }
        })
        .catch(error => {
          console.log(error);
        });
    }

    loggedIn(){
        return !!localStorage.getItem('token');
    }
}