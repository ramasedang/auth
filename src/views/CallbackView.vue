<template>
    <div></div>
</template>

<script>
import userManager from '../auth/oidc';
export default {
    name: 'CallbackView',
    data() {
        return {

        }
    },
    mounted() {
        userManager.signinRedirectCallback().then(async function (user) {
            console.log("signinRedirectCallback done");image.png
            console.log("user: ", user);
        }).catch(function (err) {
            console.log(err);
        }).finally(function () {
            window.location.href = "http://127.0.0.1:5173/about";
        });
    }


}
</script>

<style>

</style>

