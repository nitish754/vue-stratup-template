<template>
  <div>
    <HeaderComp />
    <div class="flex">

      <main id="main" class="main">
        <div class="pagetitle">
          <!-- <h1>{{ pageTitle }}</h1> -->
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link to="/dashboard">Dashobard</router-link></li>
              <li class="breadcrumb-item active">{{ pageTitle }}</li>
            </ol>
          </nav>
        </div><!-- End Page Title -->
        <slot />
      </main>
    </div>
    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from '@/components/layouts/HeaderComp.vue';
import FooterComp from "@/components/layouts/FooterComp.vue";
//  import SidebarComp from '@/components/layouts/SidebarComp.vue';

export default {
  name: 'DefaultLayout',
  props : ["title"],
  data(){
    return {
      pageTitle : this.title
    }
  },
  components: {
    HeaderComp,
    FooterComp,
    // SidebarComp
  },
};
</script>

<style scoped>
/* Custom styles for the default layout */
</style>