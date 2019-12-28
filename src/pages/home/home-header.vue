<template>

    <div>
        <!-- Header -->
        <header class="header text-white h-fullscreen bg-fixed" style="background-image: url(/public/assets/theme/img/vector/9.jpg)">
            <div class="overlay opacity-95" style="background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
            <div class="container text-center">
                <div class="row align-items-center h-100 pt-8 pt-md-7 pb-md-8">

                    <div class="col-md-8 mx-auto">

                        <h1>World's First Anonymous Stablecoin</h1>
                        <p class="lead mt-5 mb-8"> Anonymous payments made easy for average Joe. </p>

                        <p class="gap-xy">
                            <a class="btn btn-lg btn-round btn-light mw-200" href="#">Web Wallet</a>
                        </p>
                    </div>

                </div>
            </div>
        </header><!-- /.header -->

    </div>

</template>

<script>

import config from "build/config/config";

export default {

    computed:{

        config(){
            return config.app;
        }

    }

}

</script>

<style scoped>

</style>