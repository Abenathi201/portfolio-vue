<template>
  <div class="container">
    <!-- Landing View -->
    <section id="home">
      <HomeComp/>
    </section>
    <!-- Landing View -->
    <hr>
  
    <!-- About View -->
    <section id="about">
      <AboutComp/>
    </section>
    <!-- About View -->
    <hr>

    <!-- Projects View -->
    <section id="projects">
      <ProjectComp/>
    </section>
    <!-- Projects View -->
    <hr>

    <!-- Testimonials View -->
    <section id="testimonials">
      <TestimonialsComp/>
    </section>
    <!-- Testimonials View -->
    <hr>

    <!-- Contact View -->
    <section id="contact">
      <ContactComp/>
    </section>
    <!-- Contact View -->
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