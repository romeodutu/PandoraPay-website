import config from "build/config/config";

export function getData(vm) {

    let {title} = vm.$options ;
    if (typeof title === 'function') title = title.call(vm);

    return `${config.app.name} | ${title}`;

}

const serverMixin = {
    created() {

        if (this.$ssrContext && this.$options.title)
            this.$ssrContext.title = getData(this);

    }
};

const clientMixin = {
    mounted() {

        if (this.$ssrContext && this.$options.title)
            this.$ssrContext.title = getData(this);

    }
};

export const mixin = process.env.VUE_ENV === 'server' ? serverMixin : clientMixin ;


