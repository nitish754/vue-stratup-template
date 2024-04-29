export default {
    install(app,store){
        app.config.globalProperties.$hasPermission = (permision) => {
            let permisions = store.getters['auth/user_permissions'];
            console.log("permission list from plugin",permisions)
            permisions =JSON.parse(permisions);
            return permisions.includes(permision);
        }
    }
}