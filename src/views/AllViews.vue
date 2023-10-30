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

    <!-- Projects Section -->
    <section id="projects">
      <ProjectComp/>
    </section>
    <!-- Projects Section -->

    <!-- Testimonials Section -->
    <section id="testimonials">
      <TestimonialsComp/>
    </section>
    <!-- Testimonials Section -->
  </div>
</template>

<script>
import HomeComp from '@/components/HomeComp.vue';
import AboutComp from '@/components/AboutComp.vue';
import ProjectComp from '@/components/ProjectComp.vue';
import TestimonialsComp from '@/components/TestimonialsComp.vue';
export default {
    components: {
        HomeComp,
        AboutComp,
        ProjectComp,
        TestimonialsComp
    },
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
}
</style>