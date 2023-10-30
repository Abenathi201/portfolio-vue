import { createStore } from "vuex";

const database = "https://abenathi201.github.io/data/db.json";

export default createStore({
  state: {
    projects: null,
    testimonials: null
  },

  mutations: {
    setProjects: (state, projects) => {
      state.projects = projects;
    },

    setProjectsError: (state, errorMessage) => {
      state.projectsError = errorMessage;
    },

    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },
  },

  actions: {
    // async getTestimonials(context) {
    //   try {
    //     const res = await fetch(database)
    //     const  {testimonials}  = await res.json();
    //     context.commit("setTestimonials", testimonials);
    //     console.log(testimonials)
    //   } catch (error) {
    //     context.commit("Testimonials Error", error.message);
    //   }
    // },

    // async getProjects(context) {
    //   try{
    //     const res = await fetch(database)
    //     const {projects} = await res.json();
    //     context.commit("setProjects", projects);
    //     console.log(projects);
    //   } catch (error) {
    //     context.commit("Projects Error", error.message)
    //   }
    // },

    async getProjects(context) {
      try {
        const response = await fetch(database);
    
        if (!response.ok) {
          throw Error("Failed to fetch projects");
        } else {
          const { projects } = await response.json();
          context.commit("setProjects", projects);
          console.log('Projects fetched', projects);
        }
      } catch (err) {
        context.commit("setProjectsError", err.message);
      }
    }    
  }
});