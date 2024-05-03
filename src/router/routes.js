import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import LoginPage from "@/views/auth/LoginPage.vue";
import DashboardPage from "@/views/DashboardPage.vue";
import TestComp from "@/views/TestComp.vue";
import EmployeeList from "../views/employee/EmployeeList.vue";
import addEmployee from "@/views/employee/addEmployee.vue";
import UserList from "@/views/users/UserList.vue";
import RoleList from "@/views/roles/RoleList.vue";
import NotFound from "@/views/errors/NotFound.vue";
import ProjectList from "@/views/projects/ProjectList.vue";


const routes = [
    {
        path : '/',
        redirect : '/login'
    },
    {
        path : '/login',
        name : 'login',
        component : LoginPage
    },
    {
        path : '/dashboard',
        name : 'dashboard',
        component : DashboardPage,
        meta : {auth : true}
    },
    {
        path : '/employee',
        name : 'Employee',
        component : EmployeeList,
        meta : {auth:true}
    },
    {
        path : '/add-employee',
        name : 'add-employee',
        component : addEmployee,
        meta : {auth:true}
    },
    {
        path : "/users",
        name : "users",
        component : UserList,
        meta : {auth:true}
    },
    {
        path : "/role-permission",
        name : "roles",
        component : RoleList
    },
    {
        path : "/projects",
        name : "projects",
        component : ProjectList
    }





    ,{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    {
        path : '/test',
        name : 'test',
        component : TestComp
    },

];

const router = createRouter({
    history : createWebHistory(),
    routes
});

router.beforeEach((to,from,next) =>{
    const auth = to.matched.some(record => record.meta.auth);
    const isLoggedIn = store.getters["auth/isLoggedIn"];
    if(auth && !isLoggedIn)
    {
        next('/login'); //back to login page 
    }else{
        next(); //proceed to other routes access
    }
})

export default router;