
<template>
  <div>


    <router-view />
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import homePage from './view/homePage.vue';
export default {
  components: {
    homePage
  }
}
</script>

<style>
</style>