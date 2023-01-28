<template>
  <div>
    <h1>
      test
    </h1>
    <button @click="logout">logout</button>
    <button @click="user_info">user_info</button>
  </div>
</template>

<script>
import userManager from '../auth/oidc';
import { getUser } from '../auth/oidc';
export default {
  name: 'AboutView',
  data() {
    return {
      user: null
    }
  }, methods: {
    async logout() {
      await userManager.signoutRedirect({ returnTo: 'http://localhost:5173/' });
      sessionStorage.clear();
    },
    async user_info() {
      this.user = sessionStorage.getItem('user');
      console.log("user: ", this.user);
    },
    async is_authenticated() {
      await userManager.getUser().then(function (user) {
        console.log("user: ", user);
      });
    },

  },

}
</script>

<style>

</style>