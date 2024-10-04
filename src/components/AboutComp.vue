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
          I’m an aspiring <span>Full-Stack Developer</span>. I have experience with <span>HTML, CSS, Bootstrap, JavaScript, Vue.js, MySQL, Node.js, and React</span>. I’m constantly working to improve my skills, seeking better opportunities for personal and professional growth.
          <!-- <br> -->
          <!-- <br> -->
          <!-- I’ve learned the value of hard work and determination throughout my journey. I believe in using technology to solve real-world problems and make everyday tasks easier. I’m passionate about creating web solutions that are both practical and impactful. -->
          <br>
          <br>
          I attended at <span>Life Choices Academy</span>, where I gained hands-on experience in web development, from <span>Front-End Design</span> to <span>Back-End Functionality</span>. The academy taught me how to turn ideas into fully functional web applications and sharpened my problem-solving skills.
          <br>
          <br>
          I also completed a program at <span>On The Ball College</span>, where I focused on Java and learned the fundamentals of programming. There, I gained knowledge in software development principles and improved my technical skills, which helped me understand how to build solid applications.
          <br>
          <br>
          I’m actively looking for <span>ENTRY-LEVEL Positions</span> and <span>INTERNSHIPS</span> where I can keep learning, improve my skills, and collaborate with others to work on projects that make a real impact. I’m excited about the future and eager to contribute through code.
        </p>
      </div>

      <div class="image">
        <img src="https://i.ibb.co/D9QhFtp/C12-C2-Abenathi-Sindapi-3.jpg" alt="Abenathi Sindapi">
      </div>
    </div>

    <div class="skills">
      <h3>Skills</h3>
      <ul>
        <li>
          <img src="https://i.ibb.co/j6b4zf8/file-type-html-902x1024.png" alt="HTML5">
          <h6>HTML</h6>
        </li>

        <li>
          <img src="https://i.ibb.co/gmhr5s7/css3-shiled-877x1024.png" alt="CSS">
          <h6>CSS</h6>
        </li>

        <li>
          <img src="https://i.ibb.co/QPHPVVf/bootstrap-plain-1024x1024.png" alt="Bootstrap">
          <h6>Bootstrap</h6>
        </li>

        <li>
          <img src="https://i.ibb.co/PWH4cQ3/javascript-js-1024x1024.png" alt="JS">
          <h6>JavaScript</h6>
        </li>

        <li>
          <img src="https://i.ibb.co/8zmNskp/vue-vuejs-javascript-js-framework-1024x891.png" alt="Vue">
          <h6>VUE.JS</h6>
        </li>

        <li>
          <img src="https://i.ibb.co/R9jJqzL/database-mysql-980x1024.png" alt="mysql">
          <h6>MySQL</h6>
        </li>

        <li>
          <img src="https://i.ibb.co/F6gn8WG/nodejs-original-907x1024.png" alt="node">
          <h6>NODE.JS</h6>
        </li>

        <li>
          <img src="https://i.ibb.co/mRBZz7H/react-javascript-js-framework-facebook-1024x911.png" alt="react">
          <h6>REACT.JS</h6>
        </li>

        <li>
          <img src="https://i.ibb.co/h7Kcx1x/figma-684x1024.png" alt="figma">
          <h6>Figma</h6>
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
        <button class="resume btn">
          <a href="https://drive.google.com/file/d/1VIK1-fcQTo8UvqNDcjxoc-g9PP7CuUnh/view" target="_blank">Resume</a>
        </button>
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
/* Style */
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
  color: #000000;
  font-weight: 600;
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
}

.skills h3{
  text-align: center;
  font-size: 30px;
  font-weight: 500;
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

.resume a{
  text-decoration: none;
  color: #FFFFFF;
}

.btn:hover,
.btn:focus {
  box-shadow: 0 4px 8px hsla(190deg, 15%, 5%, .2);
  transform: translateY(-4px);
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
    display: none;
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
    margin-right: 50px;
  }

  ul li{
    margin: auto;
  }

  ul li img{
    height: 60px;
    width: 60px;
    cursor: pointer;
    transition: 0.3s ease;
  }
  
  .horizontal{
    width: 90%;
    margin: auto;
  }

  .contact{
    width: 80%;
    margin-left: 19px;
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
