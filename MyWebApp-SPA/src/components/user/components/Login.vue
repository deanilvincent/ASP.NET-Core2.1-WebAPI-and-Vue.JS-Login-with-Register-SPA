<template>
<div>
    <div class="field">
        <label class="label">Username</label>
        <div class="control">
            <input class="input" v-model="user.username" />
        </div>
    </div>
    <div class="field">
        <label class="label">Password</label>
        <div class="control">
            <input class="input" type="password" v-model="user.password" />
        </div>
    </div>
    <div class="field">
        <button class="button is-primary" @click="login">Login</button>
        <button class="button" @click="goBackHome">Go back home</button>
    </div>
</div>
</template>

<script>
import AuthService from "../../../services/auth.js";
import { mapActions } from "vuex";

const authService = new AuthService();

export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    ...mapActions(["isLocalStoreTokenIsNotEmpty"]),
    login() {
      authService.login(this.user).then(() => {
        this.isLocalStoreTokenIsNotEmpty({ isLoggedIn: true });
        alert("Successfully login");
      });
    },
    goBackHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>