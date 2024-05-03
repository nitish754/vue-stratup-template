<template>
    <div>
      <input ref="datepickerInput" type="text" class="form-control" :placeholder="placeholder" >
    </div>
  </template>
  
  <script>
  import 'bootstrap-datepicker';
  
  export default {
    name: 'DatePicker',
    props: {
      placeholder: String, // Placeholder text for the input
    },
    mounted() {
      // Initialize the datepicker when the component is mounted
      this.$(this.$refs.datepickerInput).datepicker({
        format: 'yyyy-mm-dd', // Date format
        autoclose: true, // Close the datepicker when a date is selected
      });
    },
    beforeUnmount() {
      // Clean up the datepicker when the component is unmounted
      this.$(this.$refs.datepickerInput).datepicker('destroy');
    },
  };
  </script>
  