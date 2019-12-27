<template>

    <div class="layout">

        <layout-navbar :light="light" />
        <layout-header />

        <slot></slot>

        <layout-footer />

    </div>


</template>

<script>

import LayoutNavbar from "./header/layout-navbar.vue";
import LayoutHeader from "./header/layout-header.vue";
import LayoutFooter from "./footer/layout-footer.vue";

export default {

    components: { LayoutNavbar, LayoutHeader, LayoutFooter},

    props:{
        light: false,
    },

    mounted(){

        if (typeof window === "undefined") return;

        const navbar = document.getElementById("navbar");
        const body = document.getElementsByTagName("body")[0];

        var lastScrollTop = 0;
        // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
        window.addEventListener("scroll", () => { // or window.addEventListener("scroll"....
            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

            if (st === 0)
                document.getElementsByTagName("body")[0].className = "";
            else
            if (st > lastScrollTop) { // downscroll code

                if (this.light)  navbar.classList.remove("stick");

                body.className = "body-scrolled navbar-scrolled header-scrolled"
            }
            else { // upscroll code


                if (this.light) {
                    if (st > 80)
                        navbar.classList.add("stick");
                    else
                        navbar.classList.remove("stick");
                }

                body.className = "body-scrolled navbar-scrolled header-scrolled"
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        }, false);


    }

}
</script>

<style scoped>

    .layout {

    }


</style>