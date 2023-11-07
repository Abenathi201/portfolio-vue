<template>
  <div class="about">

    <div class="title">
      <div class="line"></div>
      <h1>About Me</h1>
      <div class="line"></div>
    </div>

    <div class="container">
      <div class="bio">
        <h1>Abenathi Sindapi, an Aspiring Full-Stack Developer</h1>

        <p>
          Abenathi Sindapi, based in Khayelitsha, is an aspiring <br> <span>Full-Stack Developer</span> with a strong drive to use technology for positive change. With foundation in <span>HTML, CSS, Bootstrap, JavaScript, Vue.js, MySQL and Node.js</span>. Abenathi is continually working to upskill himself to get better opportunities and continuously grow as human.
          <br>
          <br>
          Abenathi's journey reflects the power of grit, determination and learning. The belief is that technology is a tool for empowerment and there is a commitment to creating opportunities and bridging gaps. Abenathi is open to connecting and collaborating on projects that bring positive impact, believing that together, a brighter future can be shaped through code.
          <br>
          <br>
          Now he is preparing for the AWS exam to improve proficiency in cloud computing and also seeking internship opportunities.
        </p>
      </div>

      <div class="image">
        <img src="https://i.postimg.cc/hjYzpV22/C12-C2-Abenathi-Sindapi-2.jpg" alt="Abenathi Sindapi">
      </div>
    </div>

    <div class="skills">
      <h3>Skills</h3>

      <!-- <div class="nav">
        <button>All</button>
        <button>Technical</button>
        <button>Soft</button>
      </div> -->

      <ul>
        <li>
          <img src="https://i.postimg.cc/0QWr458Z/file-type-html-226x256.png" alt="HTML5">
          <h6>HTML</h6>
        </li>

        <li>
          <img src="https://i.postimg.cc/bNGSKnSn/file-type-css-226x256.png" alt="CSS">
          <h6>CSS</h6>
        </li>

        <li>
          <img src="https://i.postimg.cc/CKCqcVB6/bootstrap-plain-256x256.png" alt="Bootstrap">
          <h6>Bootstrap</h6>
        </li>

        <li>
          <img src="https://i.postimg.cc/dtTDWKgm/file-type-js-official-256x256.png" alt="JS">
          <h6>JavaScript</h6>
        </li>

        <li>
          <img src="https://i.postimg.cc/9fxq6YbG/vue-vuejs-javascript-js-framework-256x223.png" alt="Vue">
          <h6>VUE.JS</h6>
        </li>

        <li>
          <img src="https://i.postimg.cc/3rkgHVPW/mysqlworkbench-512x506.png" alt="mysql">
          <h6>MySQL</h6>
        </li>

        <li>
          <img src="https://i.postimg.cc/mZK7ZVsj/node-js-227x256.png" alt="node">
          <h6>NODE.JS</h6>
        </li>

        <li>
          <img src="https://i.postimg.cc/7LP2tW3H/npm-512x200.png" alt="npm">
          <h6>NPM</h6>
        </li>

        <li>
          <img src="https://i.postimg.cc/zfpfLDR5/github-256x250.png" alt="github">
          <h6>GitHub</h6>
        </li>

        <li>
          <img src="https://i.postimg.cc/cLwgJNm4/file-type-firebase-187x256.png" alt="firebase">
          <h6>Firebase</h6>
        </li>
      </ul>
    </div>

    <div class="horizontal"></div>

    <div class="contact">
      <div class="left">
        <h6>I am looking forward to collaborate on projects</h6>
        <button class="btn" @click="scrollToContact">Contact <i class="fa-sharp fa-solid fa-arrow-down"></i></button>
      </div>

      <div class="right">
        <h6>abenathi.sindaphi201@gmail.com</h6>
        <button class="resume btn">Resume</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    scrollToContact() {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        window.scrollTo({
          top: contactSection.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }
}
</script>

<style scoped>
.about{
  width: 1120px;
  min-height: 1200px;
  margin: auto;
  margin-top: 100px;
}

.title{
  margin-bottom: 70px;
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
  width: 1120px;
  min-height: 590px;
  display: flex;
  gap: 35px;
}

.bio{
  width: 550px;
}

.bio h1{
  text-align: start;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 40px;
}

.bio p{
  font-size: 20px;
  font-weight: normal;
  margin: 0;
  text-align: left;
  align-items: top;
}

.bio span{
  color: #808080;
  font-weight: 500;
}

.image{
  width: 470px;
  height: 700px;
}

.image img{
  width: 100%;
  height: 100%;
}

.skills{
  width: 1055px;
  /* background: #000000; */
}

.skills h3{
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
}

ul{
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
}

ul li{
  list-style: none;
}

ul li img{
  height: 64px;
  width: 64px;
  cursor: pointer;
  transition: 0.3s ease;
}

ul li img:hover{
  transform: scale(1.1);
}

ul li h6{
  color: #000000;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
}

.horizontal{
  border-bottom: 2px solid #808080;
  width: 1055px;
}

.contact{
  width: 1055px;
  display: flex;
  justify-content: space-between;
}

.contact h6{
  color: #000000;
  font-size: 16px;
  font-weight: 500;
}

button {
  background: white;
  border: solid 2px black;
  padding: 5px 10px;
}

.btn {
  font-size: 20px;
  font-weight: 100;
  background: #000000;
  color: #FFFFFF;
  box-shadow: 0 0px 0px hsla(190deg, 15%, 5%, .2);
  transform: translateY(0);
  cursor: pointer;
  
  --dur: .10s;
  --delay: .10s;
  
  transition:
    box-shadow calc(var(--dur) * 4) ease-out,
    transform calc(var(--dur) * 4) ease-out,
    background calc(var(--dur) * 4) steps(4, jump-end);
}

.btn:hover,
.btn:focus {
  box-shadow: 0 4px 8px hsla(190deg, 15%, 5%, .2);
  transform: translateY(-4px);
  background: #FFFFFF;
  color: #000000;
}

.contact .resume{
  float: right;
}

@media screen and (max-width: 1050px){
  .about{
    width: 100%;
    min-height: 1200px;
    margin: auto;
    margin-top: 100px;
  }

  .line{
    width: 65%;
  }

  .container{
    width: 100%;
    min-height: 590px;
    display: flex;
    flex-direction: column-reverse;
    gap: 35px;
  }

  .image{
    width: 90%;
    height: 95%;
    margin: auto;
  }

  .bio{
    width: 100%;
  }

  .skills{
    width: 100%;
  }

  ul{
    padding-top: 15px;
  }

  ul li{
    margin-inline: 10px;
  }

  ul li img{
    height: 60px;
    width: 60px;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .contact{
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .contact .resume{
    float: left;
  }
}

@media screen and (min-width: 750px) and (max-width: 1070px) {
  .contact{
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .contact .resume{
    float: right;
  }
}


@media screen and (min-width: 450px) and (max-width: 1050px) {
  .image{
    width: 60%;
    height: 75%;
    margin: auto;
  }

  .line{
    width: 20%;
  }
}
</style>
