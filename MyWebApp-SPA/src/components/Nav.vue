<template>
<span>
<nav class="navbar is-transparent">
  <div class="navbar-brand">
    <router-link to="/" class="navbar-item">LOGO {{isLoggedIn}}</router-link>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu"  v-if="loggedIn()">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <router-link to="/user-account" class="button">ACCOUNT</router-link>
          </p>
            <p class="control">
            <a class="button is-danger" @click="logout">
                LOGOUT
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
<hr />
</span>
</template>

<script>
import AuthService from "../services/auth";

const authService = new AuthService();

export default {
  data() {
    return {
      isLoggedIn: this.$isLoggedIn
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      alert("Successfully logout");
      this.$router.push({ name: "Home" });
    },
    loggedIn() {
      return authService.loggedIn();
    }
  }
};
</script>