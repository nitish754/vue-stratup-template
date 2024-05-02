<template>
    <DefaultLayout title="Projects">
        <section class="section">
            <div class="row">

                <div class="col-lg-12">
                    <router-link class="btn btn-primary" to="/add-employee"><i class="bi bi-plus"></i>
                        Project</router-link>
                    <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#disablebackdrop">Add Employee</button> -->
                    <div class="card">
                        <div class="card-header">
                            Projects
                        </div>
                        <div class="card-body">
                            <!-- Default Table -->
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Start Date</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <h1 class="text-center">No Project Found</h1>
                                </tbody>
                            </table>
                            <!-- End Default Table Example -->
                        </div>
                    </div>



                </div>
            </div>
        </section>
    </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
export default {
    name: "ProjectList",
    components: {
        DefaultLayout
    }

}
</script>