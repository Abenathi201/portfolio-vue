<template>
  <div class="container">
    <!-- Landing Section -->
    <section id="home">
      <HomeComp/>
    </section>
    <!-- Landing Section -->
    <hr>
  
    <!-- About Section -->
    <section id="about">
      <AboutComp/>
    </section>
    <!-- About Section -->
    <hr>

    <!-- Projects Section -->
    <section id="projects">
      <ProjectComp/>
    </section>
    <!-- Projects Section -->
    <hr>

    <!-- Testimonials Section -->
    <section id="testimonials">
      <TestimonialsComp/>
    </section>
    <!-- Testimonials Section -->
    <hr>

    <!-- Contact Section -->
    <section id="contact">
      <ContactComp/>
    </section>
    <!-- Contact Section -->
  </div>
</template>

<script>
import HomeComp from '@/components/HomeComp.vue';
import AboutComp from '@/components/AboutComp.vue';
import ProjectComp from '@/components/ProjectComp.vue';
import TestimonialsComp from '@/components/TestimonialsComp.vue';
import ContactComp from '@/components/ContactComp.vue';
export default {
    components: {
        HomeComp,
        AboutComp,
        ProjectComp,
        TestimonialsComp,
        ContactComp
    },
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
}
</style>