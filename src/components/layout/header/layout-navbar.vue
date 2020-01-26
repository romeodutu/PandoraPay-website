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
                    <a class="nav-link" href="#">Block Explorer</a>
                    <a class="nav-link" href="#">Web Wallet</a>
                    <router-link class="nav-link" to="/contact">Contact</router-link>
                </nav>
            </section>

        </div>
    </nav><!-- /.navbar -->
</template>

<script>
export default {

    props:{
        light: false,
    },

}
</script>

<style scoped>

</style>