import Cookies from "js-cookie";

const Cookie={
    /**
     * 
     * @param {string} key 
     * @param {any} value 
     * @param {number in days} expiresIn 
     */
    store(key,value,expiresIn){
        Cookies.set(key,value,expiresIn)
    },
    /**
     * 
     * @param {any} key 
     * @returns 
     */
    fetch(key){
        return Cookies.get(key);
    },
    isExist(key){
        if(Cookies.get(key))
        return true;
        else return false;
    },
    destory(key){
        Cookies.remove(key);
    }
}

export default Cookie;