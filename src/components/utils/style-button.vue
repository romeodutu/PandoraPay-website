<template>
    <a :class="this.className" :title="this.title" v-on:click="handleClick" >
        {{this.name}}
    </a>
</template>

<script>
export default {
    props: ["className", "name", "title"],

    methods:{

        handleClick(event){
            this.$emit("click", event );
        }

    },

}
</script>
