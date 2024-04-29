import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes.js'
import store from './store';
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ApiService from '@/services/ApiService.js'

/**
 * sweet alert 2 
 * 
 */
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

/**
 * flash message 
 */
// import ToastPlugin from '@/plugins/toastnotificationPlugin'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const toastOptions = {
    // You can set your default options here
};

/**
 * register custom plugin 
 */
import permissionPlugin from './plugins/permissionPlugin.js';

ApiService.init("http://localhost:8000/api")

const sweetAlertOption = {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674',
};

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueSweetalert2,sweetAlertOption);
app.use(Toast,toastOptions);
app.use(permissionPlugin,store);
// app.use(ToastPlugin);

app.mount("#app");




