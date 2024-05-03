<template>
    <div class="modal fade" id="disablebackdrop" tabindex="-1" data-bs-backdrop="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add Project</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- Floating Labels Form -->
                    <form class="row g-3" @submit.prevent="handleProjectForm">
                        <div class="col-md-12">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="floatingName" placeholder="Your Name"
                                    v-model="name">
                                <label for="floatingName">Project Name</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating">

                                <input type="date" class="form-control" id="floatingEmail" placeholder="Your Email" v-model="start_date">
                                <label for="floatingEmail">Start Date</label>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="col-md-12">
                                <div class="form-floating">
                                    <select class="form-select" id="floatingSelect" aria-label="State" v-model="status">
                                        <option v-for="s in statusList" :key="s" :value="s">{{ s }}</option>
                                    </select>
                                    <label for="floatingSelect">Status</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-floating">
                                <!-- <label for="">Description</label> -->
                                    <!-- <textarea class="form-control"></textarea> -->
                                    <CkEditor />
                                    
                                    
                                </div>
                        </div>


                        <div class="text-center">
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <button type="reset" class="btn btn-secondary">Reset</button>
                        </div>
                    </form><!-- End floating Labels Form -->
                </div>
                <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="">Save changes</button>
                </div> -->
            </div>
        </div>
    </div><!-- End Disabled Backdrop Modal-->
</template>

<script>
import { PROJECT_STATUS } from '@/utilities/constant';
import CkEditor from "@/components/CkEditor.vue";




export default {
    name: "ProjectForm",
    data() {
        return {
            statusList: PROJECT_STATUS,
            name: null,
            status: "Pending",
            start_date: this.$helper.today(),
            description : null
        }
    },
    components:{
        CkEditor
    },
    mounted() {
        console.log(this.start_date);
    },
    methods: {
        handleProjectForm() {
            alert("form submitted");
        }
    },
}
</script>