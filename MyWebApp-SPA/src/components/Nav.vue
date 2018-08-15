    <template>
<span>
<nav class="navbar is-transparent">
  <div class="navbar-brand">
    <router-link to="/" class="navbar-item">LOGO</router-link>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu" v-if="isLoggedIn">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <button @click="navToAccount" class="button">ACCOUNT</button>
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
import { mapState, mapActions } from "vuex";

const authService = new AuthService();

export default {
  data() {
    return {
      get token() {
        return localStorage.getItem("token");
      }
    };
  },
  computed: {
    ...mapState({
      isLoggedIn: state => state.isLoggedIn
    })
  },
  methods: {
    ...mapActions(["isLocalStoreTokenIsNotEmpty"]),
    logout() {
      localStorage.removeItem("token");
      alert("Successfully logout");
      this.isLocalStoreTokenIsNotEmpty({
        isLoggedIn: false
      });
      this.$router.push({ name: "Home" });
    },
    navToAccount() {
      this.isLocalStoreTokenIsNotEmpty({
        isLoggedIn: true
      });
      this.$router.push({ name: "UserAccount" });
    }
  }
};
</script>