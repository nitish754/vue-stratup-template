<template>
    <!-- ======= Sidebar ======= -->
    <aside id="sidebar" class="sidebar">

        <ul class="sidebar-nav" id="sidebar-nav">

            <li class="nav-item">
                <router-link to="/dashboard" class="nav-link collapsed"><i class="bi bi-grid"></i><span>Dashboard</span></router-link>
            </li><!-- End Dashboard Nav -->


            <li class="nav-item" v-if="$hasPermission('View Employees')">
                <router-link class="nav-link collapsed" to="/employee">
                    <i class="bi bi-person"></i>
                    <span>Employees</span>
                </router-link>
            </li><!-- End Profile Page Nav -->

            <li class="nav-item" v-if="$hasPermission('Add Project')">
                <router-link class="nav-link collapsed" to="/projects">
                    <i class="bi bi-person"></i>
                    <span>Projects</span>
                </router-link>
            </li><!-- End Profile Page Nav -->
            

            <li class="nav-item" v-if="$hasPermission('View User')">
                <router-link class="nav-link collapsed" to="/users">
                    <i class="bi bi-person"></i>
                    <span>System User</span>
                </router-link>
            </li><!-- End F.A.Q Page Nav -->

            <li class="nav-item" v-if="$hasPermission('View Roles')">
                <router-link class="nav-link collapsed" to="/role-permission">
                    <i class="bi bi-lock"></i>
                    <span>Roles &amp; Permissions</span>
                </router-link>
            </li><!-- End Contact Page Nav -->



            <li class="nav-item">
                <router-link class="nav-link collapsed" to="/nothing">
                    <i class="bi bi-dash-circle"></i>
                    <span>Error 404</span>
                </router-link>
            </li><!-- End Error 404 Page Nav -->



        </ul>

    </aside><!-- End Sidebar-->
</template>

<script>
export default {
    name: "MenuComp",
}
</script>