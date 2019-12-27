import config from "build/config/config";

export function getData(vm) {

    let description = vm.$options.description || '';
    if (typeof description === 'function') description = description.call(vm);

    return `${description} :: ${config.app.description}`;
}

const serverMixin = {
    created() {

        if (this.$ssrContext && this.$options.description)
            this.$ssrContext.description = getData(this);

    }
};

const clientMixin = {
    mounted() {

        if (this.$ssrContext && this.$options.description)
            this.$ssrContext.description = getData(this);

    }
};

export const mixin = process.env.VUE_ENV === 'server' ? serverMixin : clientMixin
