<template>
  <div class="action">
    <div class="call-button-container">
      <VueSpinner size="80" color="blue" />
    </div>
  </div>
</template>

<script>
import {
  VueSpinner
} from 'vue3-spinners';
import userManager from '../auth/oidc';
export default {
  name: 'HomeView',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    VueSpinner,
    // ...
  },
  methods: {
    async login() {
      await userManager.signinRedirect({ state: { bar: 15 } }).then(function () {
        console.log("signinRedirect done");
      }).catch(function (err) {
        console.log(err);
      });
    },

  },
  created() {
    this.login();
  }
}
</script>

<style scoped>
.action {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>