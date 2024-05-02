<template>
    <div v-if="loading" class="loader-container" role="status">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        &nbsp;&nbsp;<p class="text-center mt-2">{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: 'LoaderComp',
    props : ['loading','message'],
    data() {
        return {
            load:this.loading,
            loadMessage : this.message
        }
    },
    // props: {
    //     loading: Boolean, // Prop to control when the loader should be displayed
    //     message : String
    // },
};
</script>

<style scoped>
.loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.7);
    /* Optional: Add a semi-transparent background */
    z-index: 9999;
    /* Ensure it's on top of other content */
}
</style>