const Storage = {
    store(key,value){
        localStorage.setItem(key,value);
    },
    fetch(key){
        return localStorage.getItem(key);
    },
    isExist(key){
        if(localStorage.getItem(key))
        return true;
        else return false;
    },
    destory(key){
        localStorage.removeItem(key);
    }
}

export default Storage;