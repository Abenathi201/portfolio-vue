<template>
  <div class="card" v-for="project in projects" :key="project.id">
    <img :src="project.image" :alt="project.name">
    <p>On 19, Aug, 2022</p>
    <h1>{{ project.name }}</h1>
    <hr>
    <div class="btns">
        <a :href="project.github" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a :href="project.link" target="_blank"><i class="fa-solid fa-up-right-from-square"></i></a>
    </div>
  </div>
</template>

<script>
export default {
    props: ["projects"]
}
</script>

<style scoped>
.card{
    width: 425px;
    height: 455px;
    margin-block: 20px;
}

.card img{
    width: 425px;
    height: 297px;
    object-fit: fill;
    transition: 0.3s ease;
}

.card img:hover{
    transform: scale(1.05);
}

.btns{
    display: flex;
    justify-content: space-between;
}

.btns a{
    color: #000000;
    font-size: 25px;
    font-weight: 100;
    cursor: pointer;
    
    --dur: .10s;
    --delay: .10s;
    
    transition:
      box-shadow calc(var(--dur) * 4) ease-out,
      transform calc(var(--dur) * 4) ease-out,
      background calc(var(--dur) * 4) steps(4, jump-end);
}

.btns a:hover,
.btns a:focus{
    transform: translateY(-4px) scale(1.1);
}

@media screen and (max-width: 1050px) {
    .card{
        width: 80%;
        margin-block: 20px;
    }

    .card img{
        width: 100%;
        height: 60%;
    }
}

@media screen and (min-width: 525px) and (max-width: 1160px) {
    .card{
        width: 55%;
        margin-block: 20px;
    }

    .card img{
        width: 100%;
        height: 60%;
    }
}
</style>