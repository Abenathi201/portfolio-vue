<template>
  <div v-if="projects" class="container">
    <div class="title">
      <div class="line"></div>
      <h1>Projects</h1>
      <div class="line"></div>
    </div>

    <div class="cards">
        <ProjectCard :projects="projects"/>
    </div>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';
export default {
    components: { ProjectCard },

    computed: {
        projects() {
            return this.$store.state.projects
        }
    },

    mounted() {
        return this.$store.dispatch("getProjects")
    },
}
</script>

<style scoped>
.container{
    min-width: 850px;
    min-height: 1200px;
    /* border: 2px solid black; */
    margin: auto;
    /* margin-top: 80px; */
}

.container h1{
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  margin: 0;
}

.line {
  border-top: 2px solid #000000;
  width: 10%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

.cards{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 50px;
}
</style>