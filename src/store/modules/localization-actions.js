import CookiesService from "src/util/cookies.service"

export  default {

    LOCALIZATION_STORE_SELECTED_LANGUAGE: async function  ({ commit, dispatch, state }, {language} ) {

        commit('SET_LOCALIZATION_SELECTED_LANGUAGE', {language});

        if (typeof window !==  "undefined")
            CookiesService.setCookie('language', language);

    },

    LOCALIZATION_NEW_IP: async function ({ commit, dispatch, state }, ip ) {

        return commit("SET_LOCALIZATION_IP", ip);

    },

    LOCALIZATION_FETCH: async function ({ commit, dispatch, state }, ip ) {


        if ( state.request.done && !state.request.error )
            return;

        if (!ip) ip = state.ip || '';

        ip = ip.replace("::ffff:", '');
        ip = ip.replace('127.0.0.1','');

        try {

            const res = await this.$app.httpHelper.get("https://geoip-db.com/json/" + ip, undefined,  '', undefined,false);

            const payload = {
                country: res.country_name || '',
                countryCode: res.country_code || '',
                city: res.city || '',
                latitude: res.latitude || '',
                longitude: res.longitude || '',
                clientIP: res.ip || '',
                timeZone: res.time_zone || '',
                request: {
                    sent: true,
                    done: true,
                    error: false,
                },
            };

            commit('SET_LOCALIZATION_DATA', payload );

            if (!state.language)
                commit('SET_LOCALIZATION_SELECTED_COUNTRY', { language: payload.countryCode } );

        }
        catch(ex){

            console.error("Geo IP rejected ",ex.toString());

            commit('SET_LOCALIZATION_REQUEST_ERROR',{});

            if (!state.language)
                commit('SET_LOCALIZATION_SELECTED_COUNTRY', { language: 'en' } );

        }

    },

}