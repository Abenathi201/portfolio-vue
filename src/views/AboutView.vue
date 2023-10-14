<template>
  <div class="about">
    <div class="line"></div>
    <h1>About Me</h1>
    <div class="line"></div>

    <div class="container">
      <!-- <div class="img">
        <img src="https://i.postimg.cc/hjYzpV22/C12-C2-Abenathi-Sindapi-2.jpg" alt="Abenathi Sindapi">
      </div> -->
  
      <!-- <div class="bio">
        <p>
          Hello, I'm Abenathi Sindapi, hailing from Khayelitsha. With a background in coding and a fervent drive to break barriers, I'm on a mission to transform lives through technology. Proficient in HTML, CSS, Bootstrap, JavaScript, Vue.js, MySQL, and Node.js, I'm constantly honing my skills to build innovative solutions.

          Currently, I'm gearing up for the AWS exam, aiming to elevate my proficiency in cloud computing. My journey is a testament to the power of determination and learning. I believe that technology is a tool for empowerment, and I'm committed to bridging gaps and creating opportunities.

          Let's connect and collaborate on projects that make a positive impact. Together, we can shape a brighter future through code!
        </p>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.about{
  left: 50%;
  position: absolute;
  top: 20%;
  transform: translate(-50%, -50%);
}

.about h1{
  font-size: 40px;
  font-weight: 500;
}

.line {
  border-top: 2px solid #000000;
  width: 30%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

/* .container{
  width: 1257px;
  height: 556px;
  display: flex;
  justify-content: center;
  align-items: center;
} */

.img{
  width: 436px;
  height: 556px;
}

.img img{
  width: 100%;
  height: 100%;
}

.bio{
  width: 629px;
  height: 439px;
}
</style>
