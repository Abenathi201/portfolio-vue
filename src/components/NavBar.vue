<template>
    <header :class="{ sticky: isSticky }">
        <div class="nav-bar">
            <router-link to="/" class="logo">Abenathi</router-link>
            <div class="navigation">
                <router-link to="/" class="links" :class="{ active: activeLink === 'home' }" @click="setActiveLink('home')">Home</router-link>
                <router-link to="/#about" class="links" :class="{ active: activeLink === 'about' }" @click="setActiveLink('about')">About</router-link>
                <router-link to="/#projects" class="links" :class="{ active: activeLink === 'projects' }" @click="setActiveLink('projects')">Projects</router-link>
                <router-link to="/#testimonials" class="links" :class="{ active: activeLink === 'testimonials' }" @click="setActiveLink('testimonials')">Testimonials</router-link>
                <router-link to="/#contact" class="links" :class="{ active: activeLink === 'contact' }" @click="setActiveLink('contact')">Contact</router-link>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
      return {
        isSticky: false,
        isNavigationActive: false,
        activeLink: "home",
      };
    },

    methods: {
        handleScroll() {
            this.isSticky = window.scrollY > 0;
        },

        setActiveLink(link) {
            this.activeLink = link;
            console.log(this.activeLink);
        }
    },

    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },

    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Leckerli+One&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

header{
    z-index: 99999;
    width: 100%;
    height: 95px;
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(20px);
    transition: 0.3s ease;
}

header.sticky {
    height: 70px;
    box-shadow: 0px 8px 24px  rgba(149, 157, 165, 0.2);
}

.nav-bar{
    position: relative;
    height: 5rem;
    max-width: 1250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;
    transition: 05s ease;
}

.links{
    font-size: 24px;
    font-weight: normal;
    text-decoration: none;
}

.nav-bar .logo{
    font-family: 'Leckerli One';
    color: #000000;
    font-size: 36px;
    font-weight: normal;
    text-decoration: none;
}

.nav-bar .links{
    color: #000000;
    font-size: 17px;
    font-weight: 500;
}

.nav-bar .links:not(:last-child){
    margin-right: 50px;
}

.nav-bar .links:hover{
    color: #808080;
}

.active {
    color: #777 !important;
}
</style>