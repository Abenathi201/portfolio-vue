<template>
  <div class="container">
    <div class="title">
      <h1>Passionate <br><span>Aspiring Full-Stack Developer</span></h1>
    </div>

    <div class="name">
      <h4>Abenathi Sindapi</h4>
    </div>

    <div class="summary">
      <p>
        Web Developer from Khayelitsha Breaking Barriers with Technology 🚀 | AWS Enthusiast 🌐 | Empowered Through Code 💡
      </p>
    </div>

    <div class="socials">
      <a href="https://www.linkedin.com/in/abenathi-sindapi-420969270/" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
      </a>

      <a href="https://github.com/Abenathi201" target="_blank">
        <i class="fab fa-github"></i>
      </a>
    </div>
    <div class="scroll">
      <h4> Scroll to view </h4>
      <router-link to="/#about">
        <svg class="scroll-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 38.9"><path class="scroll-body" d="M12.8 38.4h-1.6C5.2 38.4.4 33.6.4 27.6V11.2C.4 5.2 5.2.4 11.2.4h1.6c6 0 10.8 4.8 10.8 10.8v16.5c0 5.9-4.8 10.7-10.8 10.7z"/><path class="scrl-wheel" d="M12 13.9a4.2 4.2 0 01-4.2-4.2V4.2C7.8 1.9 9.7 0 12 0c2.3 0 4.2 1.9 4.2 4.2v5.4a4.1 4.1 0 01-4.2 4.3z"/></svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.container{
  width: 850px;
  min-height: 750px;
  margin: auto;
  margin-top: 65px;
}

.title{
  margin: 0;
  height: 300px;
}

.title h1{
  font-size: 60px;
  font-weight: normal;
  color: #000000;
}

.title span{
  font-size: 60px;
  font-weight: 600;
  margin-top: 25px;
  color: #808080;
}

.name h4{
  font-size: 50px;
  color: #000000;
  font-weight: normal;
  margin-block: 15px;
}

.summary p{
  font-size: 25px;
  color: #000000;
  font-weight: 300;
}

.socials{
  display: flex;
  gap: 15px;
}

.socials a{
  font-size: 35px;
  transition: 0.5s ease;
  color: #000000;
  cursor: pointer;
}

.socials a:hover{
  transform: scale(1.1);
}

.scroll{
  display: flex;
  justify-content: center;
  gap: 7px;
  align-items: center;
}

.scroll-icon{
  display: block;
  width: 20px;
  height: auto;
  overflow: visible;
}
.scroll-body{
  fill: none;
  stroke: #000000;
  stroke-linecap: round;
  stroke-miterlimit: 10;
  stroke-width: 3.5;
  animation: scroll-parallax 1.5s cubic-bezier(.41,.07,.83,.67) infinite running
}
@keyframes scroll-parallax {
  25%{
    transform: translateY(0)
  }
  75%{
    transform: translateY(-20%)
  }
}

.scrl-wheel{
  fill: #000000;
  transform-origin: bottom;
  animation: scroll-animation 1.5s linear infinite running;
  will-change: transform;
}

@keyframes scroll-animation{
0% {
	transform: translateY(-90%) scale(0.7, 0.1)
	}
10% {
  transform: translateY(-90%) scaleY(0.3)
  }
25% {
  transform: translateY(-20%) scaleY(1)
  }
75% {
	transform: translateY(40%) scaleY(1)
	}
100% {
	transform: translateY(20%) scale(0.8, 0.1);
	}
}

@media screen and (max-width: 800px){
  .container{
    width: 100%;
    min-height: 750px;
    margin: auto;
    margin-top: 100px;
  }

  .title{
    margin: 0px;
    /* background: blue; */
  }

  .title h1{
    font-size: 50px;
    font-weight: normal;
    color: #000000;
    margin-top: 0;
    margin-bottom: 15px;
  }

  .title span{
    font-size: 52px;
    font-weight: 600;
    margin-top: 25px;
    color: #808080;
  }

  .name h4{ 
    font-size: 50px;
    color: #000000;
    font-weight: normal;
    /* margin-block: 150px; */
  }

  .socials{
    margin: auto;
  }
}
</style>