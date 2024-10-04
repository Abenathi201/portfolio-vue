<template>
    <div>
        <header :class="{ sticky: isSticky }">
            <div class="nav-bar">
                <router-link to="/" class="logo">Abenathi</router-link>
                <div class="navigation" :class="{ active: isNavigationActive }">
    
                    <div class="nav-items">
                        <i class="uil uil-times nav-close-btn" @click="closeNavigation"></i>
                        <router-link to="/" class="links" :class="{ active: activeLink === 'home' }" @click="setActiveLink('home'); closeNavigationAfterClick()">Home</router-link>
                        <router-link to="/#about" class="links" :class="{ active: activeLink === 'about' }" @click="setActiveLink('about'); closeNavigationAfterClick()">About</router-link>
                        <router-link to="/#projects" class="links" :class="{ active: activeLink === 'projects' }" @click="setActiveLink('projects'); closeNavigationAfterClick()">Projects</router-link>
                        <router-link to="/#testimonials" class="links" :class="{ active: activeLink === 'testimonials' }" @click="setActiveLink('testimonials'); closeNavigationAfterClick()">Peer-Reviews</router-link>
                        <router-link to="/#contact" class="links" :class="{ active: activeLink === 'contact' }" @click="setActiveLink('contact'); closeNavigationAfterClick()">Contact</router-link>
                    </div>
                </div>
                <i class="uil uil-apps nav-menu-btn" @click="openNavigation"></i>
            </div>
        </header>
    </div>
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

          let currentSection = null;
          const sections = ['home', 'about', 'projects', 'testimonials', 'contact'];

          for (const section of sections) {
            const element = document.getElementById(section);
            const rect = element.getBoundingClientRect();

            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = section;
              break;
            }
          }

          if (currentSection) {
            this.activeLink = currentSection;
          }
      },

      openNavigation() {
        this.isNavigationActive = true;
      },

      closeNavigation() {
        this.isNavigationActive = false;
      },

      closeNavigationAfterClick() {
        this.isNavigationActive = false;
      },

      setActiveLink(link) {
        this.activeLink = link;
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

.nav-close-btn, .nav-menu-btn{
    display: none;
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
    color: #808080 !important;
}

@media screen and (max-width: 900px){
    /* .nav-bar{
        padding: 25px 20px;
    } */

    .nav-menu-btn{
        display: block;
        color: #000000;
        display: flex;
        font-size: 28px;
        cursor: pointer;
    }

    .nav-close-btn{
        display: block;
        color: #FFFFFF;
        position: absolute;
        top: -15px;
        right: 0;
        font-size: 2em;
        margin: 10px;
        cursor: pointer;
        transition: 0.3s ease;
    }

    .navigation{
        z-index: 99999;
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: hidden;
        opacity: 0;
        transition: 0.3s ease;
    }

    .navigation.active{
        visibility: visible;
        opacity: 1;
    }

    .navigation .nav-items{
        position: relative;
        background: #000000;
        width: 90%;
        max-width: 400px;
        display: grid;
        place-content: center;
        box-shadow: var(--box-shadow);
        transform: translateY(-80px);
        transition: 0.3s ease;
    }

    .navigation.active .nav-items{
        transform: translateY(0);
    }

    .navigation .nav-items a{
        color: #FFFFFF;
        font-size: 1em;
        margin: 40px;
        margin-block: 25px;
        transition: 0.3s ease;
    }

    .navigation .nav-items a:hover{
        color: #808080;
    }
    
    .navigation .nav-items a i{
        display: inline-block;
        font-size: 1.3em;
        margin-right: 5px;
    }
}
</style>