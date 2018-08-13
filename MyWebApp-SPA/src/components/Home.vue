<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
    <router-link to="/login">Login</router-link> | 
    <router-link to="/register">Register</router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App with Login and Register SPA connected to ASP.NET Core Web API 2.1"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
