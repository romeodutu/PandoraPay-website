<template>

    <!-- Footer -->
    <footer class="footer text-white bg-img bg-fixed" style="background-image: url(/public/assets/theme/img/vector/9.jpg)" data-overlay="8">
        <div class="container py-7">
            <div class="row gap-y">

                <div class="col-6 col-md-3">
                    <h6 class="mb-4"><strong>Organization</strong></h6>
                    <div class="nav flex-column">
                        <a class="nav-link" href="#">About us</a>
                        <a class="nav-link" href="#">Contact us</a>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <h6 class="mb-4"><strong>Blockchain</strong></h6>
                    <div class="nav flex-column">
                        <a class="nav-link" href="#">Why {{config.name}}?</a>
                        <a class="nav-link" href="#">Security</a>
                        <router-link class="nav-link" to="/faq">FAQ</router-link>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <h6 class="mb-4"><strong>Community</strong></h6>
                    <div class="nav flex-column">
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <h6 class="mb-4"><strong>Support</strong></h6>
                    <div class="nav flex-column">
                        <a class="nav-link" href="#">Help Center</a>
                        <a class="nav-link" href="#">Guides</a>
                        <a class="nav-link" href="#">API</a>
                        <a class="nav-link" href="#">FAQ</a>
                    </div>
                </div>


            </div>
        </div>

        <div class="container">
        <div class="row gap-y">

            <div class="col-md-6 text-center text-md-left">
                <small class="opacity-70">© 2020 {{config.name}}. It is an open source project created by a community.</small>
            </div>


        </div>
    </div>
    </footer>


</template>

<script>

import config from "build/config/config";

export default {

    computed: {
        config(){
            return config.app;
        }
    }

}
</script>

<style scoped>

</style>