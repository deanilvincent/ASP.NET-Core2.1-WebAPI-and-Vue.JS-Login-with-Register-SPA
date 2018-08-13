<template>
    <div>
        <p>Firstname: {{user.firstname}}</p>
        <p>Lastname: {{user.lastname}}</p>
        <p>Username: {{user.username}}</p>
    </div>
</template>
<script>
import Vue from "vue";
import UserService from "../../../services/user.js";
import VueJWT from "vuejs-jwt";

Vue.use(VueJWT);

const userService = new UserService();

export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    getUserByTokenNameId() {
      const decodedToken = this.$jwt.decode(localStorage.getItem("token"));
      if (decodedToken) {
        userService.getUser(decodedToken.nameid).then(response => {
          this.user = response.data;
        }).catch(error=>{
            console.log(error);
        });
      }
    }
  },
  created() {
    this.getUserByTokenNameId();
  }
};
</script>
