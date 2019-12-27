import config from "build/config/config";

export function getData(vm) {

    let keywords = vm.$options.keywords || [];
    if (typeof keywords === 'function') keywords = keywords.call(vm);
    
    return keywords.concat(config.app.keywords).join(',');
    
}

const serverMixin = {
    created() {

        if (this.$ssrContext && this.$options.keywords)
            this.$ssrContext.keywords = getData(this);

    }
};

const clientMixin = {
    mounted() {

        if (this.$ssrContext && this.$options.keywords)
            this.$ssrContext.keywords = getData(this);

    }
};

export const mixin = process.env.VUE_ENV === 'server' ? serverMixin : clientMixin;