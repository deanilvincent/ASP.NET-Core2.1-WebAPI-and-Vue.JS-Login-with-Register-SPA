<template>
  <div id="app">
      <div class="container">
        <app-nav></app-nav>
          <router-view/>
       </div>
  </div>
</template>

<script>
import Nav from "./components/Nav";

export default {
  components: {
    appNav: Nav
  },
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style>
@import "../node_modules/bulma/css/bulma.min.css";
</style>

