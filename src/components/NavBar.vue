<template>
    <header>
        <div class="nav-bar">
            <a href="/" class="logo">Abenathi</a>
            <div class="navigation">
                <router-link class="links" to="/">Home</router-link>
                <router-link class="links" to="about">About</router-link>
                <router-link class="links" to="skills">Skills</router-link>
                <router-link class="links" to="projects">Projects</router-link>
                <router-link class="links" to="contact">Contact</router-link>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Leckerli+One&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

header{
    z-index: 99999;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(20px);
    transition: 0.5s ease;
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
    /* background: #0e2431; */
}

.links{
    font-size: 24px;
    font-weight: normal;
}

.nav-bar .logo{
    font-family: 'Leckerli One';
    color: #000000;
    font-size: 36px;
    font-weight: normal;
}

.nav-bar .links{
    color: #0e2431  ;
    font-size: var(--normal-font-size);
    font-weight: 500;
}

.nav-bar .links:not(:last-child){
    margin-right: 50px;
}

.nav-bar .links:hover{
    color: #777;
}
</style>