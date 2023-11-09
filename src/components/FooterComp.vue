<template>
    <footer>
      <h1>©️Copyright2023</h1>
      <router-link to="/">Abenathi</router-link>
      <h1>Made by Abenathi Sindapi</h1>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Leckerli+One&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

footer{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 108px;
    padding: 10px;
    align-items: center;
    box-shadow: 0px -8px 24px rgba(149, 157, 165, 0.2);
}

footer h1{
    font-size: 20px;
    font-weight: 600;
}

a{
    text-decoration: none;
    font-family: 'Leckerli One', sans-serif;
    font-size: 36px;
    font-weight: normal;
    color: #000000;
}

@media screen and (max-width: 800px) {
    footer{
        display: flex;
        flex-direction: column;
        width: 100%;
        background: #808080;
    }

    footer h1{
        font-size: 14px;
        font-size: 500;
        text-align: center;
    }

    a{
        font-size: 26px;
    }
}
</style>