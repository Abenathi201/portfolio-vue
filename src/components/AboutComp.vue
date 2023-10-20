<template>
  <div class="about">
    <div class="title">
      <div class="line"></div>
      <h1>About Me</h1>
      <div class="line"></div>
    </div>

    <div class="container">
      <div class="img">
        <img src="https://i.postimg.cc/hjYzpV22/C12-C2-Abenathi-Sindapi-2.jpg" alt="Abenathi Sindapi">
      </div>
  
      <div class="bio">
        <p>
          Hello, I'm Abenathi Sindapi, hailing from Khayelitsha. With a background in coding and a fervent drive to break barriers, I'm on a mission to transform lives through technology. Proficient in HTML, CSS, Bootstrap, JavaScript, Vue.js, MySQL, and Node.js, I'm constantly honing my skills to build innovative solutions.
          <br>
          <br>
          Currently, I'm gearing up for the AWS exam, aiming to elevate my proficiency in cloud computing. My journey is a testament to the power of determination and learning. I believe that technology is a tool for empowerment, and I'm committed to bridging gaps and creating opportunities.
          <br>
          <br>
          Let's connect and collaborate on projects that make a positive impact. Together, we can shape a brighter future through code!
        </p>

        <div class="btn">
          <button>Resume</button>
          <button>Contact</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about{
  width: 850px;
  min-height: 400px; 
  margin: auto;
}

.about h1{
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  margin: 0;
}

.line {
  border-top: 2px solid #000000;
  width: 22%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

.container{
  height: 556px;
  margin-top: 70px;
  display: flex;
  justify-content: center;
}

.img{
  width: 436px;
  height: 556px;
}

.img img{
  width: 276px;
  height: 404px;
}

.bio{
  width: 629px;
  height: 550px;
  border: 2px solid black;
  padding: 5px;
}

.bio p{
  font-size: 20px;
  font-weight: normal;
  margin: 0;
  text-align: left;
  align-items: top;
}

.btn{
  margin-block: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn button{
  width: 150px;
  height: 60px;
  background-color: #000000;
  color: #FFFFFF;
  border: none;
  /* border-radius: 2px; */
  cursor: pointer;
  font-size: 30px;
  font-weight: normal;
  transition: 0.3s linear;
}

.btn button:hover{
  background-color: #FFFFFF;
  color: #000000;
  border: 2px solid #000000;
}
</style>
