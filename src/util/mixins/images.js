import config from "build/config/config";

import {getData as getTitleData } from "./title";

export function getImages(vm) {

    const title = getTitleData(vm);

    let images = vm.$options.images || '';
    if (typeof images === 'function') images = images.call(vm);

    if ( !images ) images = [];
    else if ( typeof images === "string" ) images = [ {src: images } ];
    else if ( typeof images === "object" && images.src  ) images = [images];
    else throw "Invalid images";

    images = images.filter( it => it.src || it.title );
    
    images = images.map( it => {
        if (typeof it === "string") return { src: it, title: title };
        else if ( !it.src ) return { src: config.app.image, title: it.title }; 
        else if ( !it.title ) return { src: it.src, title: title }; 
    });

    return images;
}

export function getData(vm){

    const images = getImages(vm);

    const text = images.map( it => {

        let out = '';
        if ( it.src ){
            out += `<meta property="og:image" content="${it.src}"/>`;
            out += `<meta property="twitter:image" content="${it.src}"/>`;
        }
        if (it.title){
            out += `<meta property="og:image:alt" content="${it.title}"/>`;
            out += `<meta property="twitter:image:alt" content="${it.title}"/>`;
        }

        return out;
    });

    return text.join('\n');

}

const serverMixin = {
    created() {

        if (this.$ssrContext && this.$options.images)
            this.$ssrContext.images = getData(this);
        
    }
};

const clientMixin = {
    mounted() {

        if (this.$ssrContext && this.$options.images)
            this.$ssrContext.images = getData(this);

    }
};

export const mixin = process.env.VUE_ENV === 'server' ? serverMixin : clientMixin
