<!-- MyComponent.vue -->

<template>
    <div class="container">
      <h1>Hello Bootstrap!</h1>
      <button class="btn btn-primary" @click="showAlert">Click me</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      showAlert() {
        alert('Button clicked!');
      },
    },
  };
  </script>
  
  <style>
  /* You can also add custom styles here */
  </style>
  