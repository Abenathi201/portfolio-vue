<template>
    <div class="container">
        <h1>Skills</h1>

        <div class="skills">
            <div class="each html">
              <div class="box">
                <div class="content">
                  <h2>HTML</h2>
                  <p>Lorem, ipsum dolor elit. Sapiente, nemo.</p>
                  <i class="fa-brands fa-html5"></i>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container{
    width: 1200px;
    min-height: 400px; 
    margin: auto;
}

.each {
  background: #FFFFFF;
  box-shadow: inset 0 0 5px rgba(55, 84, 170, 0),
    inset 0 0 10px rgba(255, 255, 255, 0), 5px 5px 9px rgba(55, 84, 170, 0.15),
    -5px -5px 11px #FFFFFF, inset 0px 0px 2px rgba(255, 255, 255, 0.2);
  transition: box-shadow 0.2s ease-in-out;
  height: 190px;
  width: 190px;
  /* border-radius: 30px; */
  border: 0px solid #eaeef5;
  cursor: pointer;
}

.each:hover{
  box-shadow: inset 4px 4px 7px rgba(55, 84, 170, 0.15),
    inset 4px 4px 10px white, 0px 0px 2px rgba(255, 255, 255, 0.2);
  transition: box-shadow 0.2s ease-in-out;
}

.each .box {
  padding: 16px;
}

.each .box .content p {
  font-size: 12px;
  margin: 0;
}

.html .box .content i {
  margin-top: 40px;
}
.each .box .content i {
  font-size: 40px;
}
</style>