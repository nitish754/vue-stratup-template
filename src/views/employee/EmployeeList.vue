<template>
    <DefaultLayout title="Employees">
        <section class="section">
            <div class="row">
                
                <div class="col-lg-12">
                    <router-link class="btn btn-primary" to="/add-employee"><i class="bi bi-plus"></i> Employee</router-link>
                    <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#disablebackdrop">Add Employee</button> -->
                    <div class="card">
                        <div class="card-header">
                            Employees
                        </div>
                        <div class="card-body">
                            <!-- Default Table -->
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Position</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Start Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Brandon Jacob</td>
                                        <td>Designer</td>
                                        <td>28</td>
                                        <td>2016-05-25</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Bridie Kessler</td>
                                        <td>Developer</td>
                                        <td>35</td>
                                        <td>2014-12-05</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Ashleigh Langosh</td>
                                        <td>Finance</td>
                                        <td>45</td>
                                        <td>2011-08-12</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Angus Grady</td>
                                        <td>HR</td>
                                        <td>34</td>
                                        <td>2012-06-11</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Raheem Lehner</td>
                                        <td>Dynamic Division Officer</td>
                                        <td>47</td>
                                        <td>2011-04-19</td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- End Default Table Example -->
                        </div>
                    </div>



                </div>
            </div>
        </section>
    </DefaultLayout>

    <EmployeeForm />
    
</template>

<script lang="js">
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import EmployeeForm from '@/components/modal/EmployeeForm.vue';
export default {
    name: "EmployeeList",
    components: {
        DefaultLayout,
        EmployeeForm
    },
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>