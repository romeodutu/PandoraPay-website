<template>
    <!-- Navbar -->
    <nav id="navbar" :class="`navbar navbar-expand-lg navbar-${light? 'light ':'dark stick'} navbar-stick-dark`" data-navbar="smart">
        <div class="container">

            <div class="navbar-left">
                <button class="navbar-toggler" type="button"><span class="navbar-toggler-icon"></span></button>
                <router-link class="navbar-brand" to="/">
                    <img class="logo-dark" src="/public/assets/images/pandora-pay-logo-inline.png" alt="logo">
                    <img class="logo-light" src="/public/assets/images/pandora-pay-logo-inline-white.png" alt="logo">
                </router-link>
            </div>

            <section class="navbar-mobile">
                <nav class="nav nav-navbar ml-auto">
                    <router-link class="nav-link" to="/">Home</router-link>
                    <a class="nav-link" :href="config.explorer">Block Explorer</a>
                    <a class="nav-link" :href="config.wallet">Web Wallet</a>
                    <router-link class="nav-link" to="/contact">Contact</router-link>
                    <router-link class="nav-link" to="/faq">FAQ</router-link>
                </nav>
            </section>

        </div>
    </nav><!-- /.navbar -->
</template>

<script>
import config from "build/config/config";
export default {

    props:{
        light: false,
    },

    computed:{
        config(){
            return config.app;
        }
    }

}
</script>

<style scoped>

</style>