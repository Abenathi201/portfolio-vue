<template>
  <div class="container">
    <!-- Landing Section -->
    <section id="home">
      <HomeComp/>
    </section>
    <hr>
    <!-- Landing Section -->
  
    <!-- About Section -->
    <section id="about">
      <AboutComp/>
    </section>
    <!-- About Section -->
  </div>
</template>

<script>
import HomeComp from '@/components/HomeComp.vue';
import AboutComp from '@/components/AboutComp.vue';
export default {
    components: {
        HomeComp,
        AboutComp
    },
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
}
</style>