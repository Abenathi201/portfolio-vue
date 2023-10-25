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
        Passionate Web Developer from Khayelitsha Breaking Barriers with Technology 🚀 | Moderately Proficient in HTML, CSS, Bootstrap, JavaScript, Vue.js, MySQL, and Node.js | AWS Enthusiast 🌐 | Empowered Through Code 💡
      </p>
    </div>

    <div class="socials">
      <!-- <a href="https://www.facebook.com" target="_blank">
        <i class="fa-brands fa-facebook"></i>
      </a> -->

      <a href="https://www.linkedin.com/in/abenathi-sindapi-420969270/" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
      </a>

      <a href="https://github.com/Abenathi201" target="_blank">
        <i class="fab fa-github"></i>
      </a>
    </div>
    <div class="scroll">
      <h4>Scroll to view <i class="fa-sharp fa-solid fa-arrow-down"></i></h4>
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
  min-height: 400px;
  margin: auto;
  margin-top: 30px;
}

.title h1{
  font-size: 65px;
  font-weight: normal;
  color: #000000;
}

.title span{
  font-size: 65px;
  font-weight: 600;
  color: #808080;
}

.name h4{
  font-size: 28px;
  color: #000000;
  font-weight: 500;
  margin-block: 0px;
}

.summary p{
  font-size: 28px;
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
  margin: auto;
  margin-bottom: 10px;
}

.scroll i{
  font-size: 20px;
  animation: bounce 0.5s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

</style>