<template>

    <layout>

        <faq/>

    </layout>

</template>

<script>

import Layout from "src/components/layout/layout"
import config from "build/config/config";
import Faq from "src/pages/other/faq/faq.vue"


export default {

    components: {Layout, Faq},

    computed:{

        config(){
            return config.app;
        }

    },

}

</script>

<style scoped>

    .team-pic{
        max-width: 128px;
        max-height: 128px;
    }

</style>