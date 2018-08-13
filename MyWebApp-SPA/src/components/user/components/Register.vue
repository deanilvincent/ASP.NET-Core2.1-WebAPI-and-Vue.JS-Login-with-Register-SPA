<template>
    <div>
        <div class="field">
            <label class="label">Firstname</label>
            <div class="control">
                <input class="input" v-model="user.firstname" />
            </div>
        </div>
        <div class="field">
            <label class="label">Lastname</label>
            <div class="control">
                <input class="input" v-model="user.lastname" />
            </div>
        </div>
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
            <label class="label">Confirm Password</label>
            <div class="control">
                <input class="input" type="password" v-model="confirmPassword" />
            </div>
        </div>
        <button class="button is-primary" @click="register">Register</button>
                <button class="button" @click="goBackHome">Go back home</button>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {},
      confirmPassword: null
    };
  },
  methods: {
    register() {
      if (this.user.password != this.confirmPassword) {
        alert("Password doesn't match");
      } else {
        axios
          .post("https://localhost:5001/api/auth/register", this.user)
          .then(response => {
            alert("Successfully register");
          })
          .catch(error => {
            console.log(`Something went wrong ${error}`);
          })
          .then(() => {
            this.$router.push({ name: "Home" });
          });
      }
    },
    goBackHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<