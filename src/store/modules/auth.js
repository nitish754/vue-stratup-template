import Cookie from "@/services/CookiesService";
import Storage from "@/services/StorageService";

const state = {
    user: null,
    isLoggedIn: false,
    authToken: null,
    user_permissions: [],
};

const mutations = {
    setLoginSession(state, user) {

        console.log("api data from store",user.data);
        // delete permision array 
        // delete user.data.roles_with_permissions;
        let userInfo = user.data;
        state.user = {
            id : userInfo.id,
            name : userInfo.name,
            email : userInfo.email,
            role : userInfo.role,
            company_id : userInfo.company_id
        };
        state.isLoggedIn = !!user;
        state.authToken = user.token;
        
        // set user permissions 
        // this.setPermissions(user.data.roles_with_permissions);

        // set user session in localstorage 
        Storage.store("user_data",JSON.stringify(state.user),7);
        Cookie.store("token",user.token);
        Cookie.store("isLoggedIn",!!user);
    },
    setPermissions(state,permissions){
        // console.log("permissons",permissions)
        const permissionArr = [];
        permissions.forEach(p => {
            permissionArr.push(p.name);
        });
        state.user_permissions = permissionArr;

        // store permission in local storage 
        Storage.store('user_permissions',JSON.stringify(permissionArr));
    },
    logout(state) {
        state.user = null;
        state.isLoggedIn = false;
        state.authToken = null;
        state.user_permissions = [];

        // remove session data form storage 
        Storage.destory('user_data');
        Cookie.destory('isLoggedIn');
        Cookie.destory('token');
        Storage.destory('user_permissions');

    }
}

const actions = {
    setLogin({ commit }, data) {
        console.log("user data from action",data.data)
        commit('setLoginSession', data);
        commit('setPermissions',data.data.roles_with_permissions[0].permissions)
    },
    setLogout({ commit }) {

        commit('logout')
    }
}

const getters = {
    currentUser: state => state.user || Storage.fetch('user_data'),
    isLoggedIn: state => state.isLoggedIn || Cookie.fetch('isLoggedIn'),
    user_permissions : state => state.permissions || Storage.fetch('user_permissions'),
    authToken : state => state.authToken || Cookie.fetch('token')
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}