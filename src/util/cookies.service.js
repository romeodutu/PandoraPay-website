class CookiesService {


    static deleteCookie(name) {
        CookiesService.setCookie(name, '', -1);
    }

    static setCookie(name , value, days) {
        if (typeof window ==="undefined") return '';

        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }


}


export default CookiesService;