<template>
    <main>
        <div class="container">
        <LoaderComp :loading="isLoading" message="Authenticating Your Request..."/>
            

            <section
                class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                            <div class="d-flex justify-content-center py-4">
                                <a href="index.html" class="logo d-flex align-items-center w-auto">
                                    <img src="../../assets/img/logo.png" alt="">
                                    <span class="d-none d-lg-block">nextHRM</span>
                                </a>
                            </div><!-- End Logo -->

                            <div class="card mb-3">

                                <div class="card-body">

                                    <div class="pt-4 pb-2">
                                        <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                        <p class="text-center small">Enter your username & password to login</p>
                                    </div>

                                    <form class="row g-3 needs-validation" @submit.prevent="login">

                                        <div class="col-12">
                                            <label for="yourUsername" class="form-label">Username</label>
                                            <div class="input-group has-validation">
                                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                <input type="text" name="username" v-model="email" class="form-control"
                                                    id="yourUsername" required>
                                                <div class="invalid-feedback">Please enter your username.</div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <label for="yourPassword" class="form-label">Password</label>
                                            <input type="password" name="password" class="form-control"
                                                v-model="password" id="yourPassword" required>
                                            <div class="invalid-feedback">Please enter your password!</div>
                                        </div>

                                        <div class="col-12">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="remember"
                                                    value="true" id="rememberMe" v-model="remember">
                                                <label class="form-check-label" for="rememberMe">Remember me</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100" type="submit">Login</button>
                                        </div>

                                    </form>

                                    <button type="button" class="btn btn-danger" @click="showAlert">Show Alert</button>
                                    <button type="button" class="btn btn-success" @click="showToast">Show Toast</button>

                                </div>
                            </div>



                        </div>
                    </div>
                </div>

            </section>

        </div>
    </main><!-- End #main -->
</template>

<script>
// import LoaderComp from "@/components/LoaderComp.vue";
import { Login } from '@/services/UserService.js';
import { useToast } from 'vue-toastification';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "LoginPage",
    setup() {
        const toast = useToast();

        return { toast };
    },
    data() {
        return {
            isLoading:false,
            email: null,
            password: null,
            remember: true
        }
    },
    // components:{
    //     LoaderComp
    // },
    computed: {
        ...mapGetters('auth', ['currentUser', 'isLoggedIn', 'authToken']),
    },
    mounted(){
        if(this.isLoggedIn)
        {
            this.$router.push('/dashboard'); //redirect to dashboard if user is logged in 
        }
    },
    methods: {
        ...mapActions('auth', ['setLogin']),
        async login() {
            try {
                // show loader 
                this.isLoading=true;

                const credentials = {
                    email: this.email,
                    password: this.password,
                    remember: this.remember
                };
                const response = await Login(credentials);
                if (response) {
                    // commit state 
                    this.setLogin(response);
                    //    get user data from state
                    this.$router.push('/dashboard')
                    console.log(`user data via getter methods`, this.currentUser, this.isLoggedIn, this.authToken);

                    console.log(response)
                }
            } catch (error) {
                alert(error.message);
            }

        },
        showAlert() {
            this.$swal("Hello! World")
        },
        showToast() {
            this.toast.error("I'm an info toast!");
        }
    },
}
</script>