<template>
    <div class="container">
        <div class="title">
            <div class="line"></div>
            <h1>Testimonials</h1>
            <div class="line"></div>
        </div>

        <div class="frame"  v-if="testimonials">

            <div class="inner" v-if="currentTestimonial !== null">

                <div class="left">
                    <div class="text">
                        <!-- <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p> -->
                        <p>{{ testimonials[currentTestimonial].testimony }}</p>
                    </div>

                    <img src="https://i.postimg.cc/rs7DnrHC/ci-double-quotes-l.jpg" alt="" class="quotes">

                    <div class="header">
                        <!-- <h1>Cheslyn Herman</h1> -->
                        <h1>{{ testimonials[currentTestimonial].name }}</h1>
                        <p>Life Choices Academy Cohort</p>
                    </div>
                </div>

                <div class="right">
                    <!-- <img src="https://i.postimg.cc/g0R9JZPB/C12_Cheslyn_Herman_(1).jpg" alt=""> -->
                    <img :src="testimonials[currentTestimonial].image" :alt="testimonials[currentTestimonial].name">
                    <div class="btns">
                        <button class="prev" @click="prevTestimonial"><i class="fa-solid fa-chevron-left  2"></i> Previous</button>
                        <button @click="nextTestimonial">Next <i class="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        currentTestimonial: 0,
      };
    },

    computed: {
        testimonials() {
            return this.$store.state.testimonials
        }
    },

    mounted() {
        return this.$store.dispatch("getTestimonials")
    },

    methods: {
      nextTestimonial() {
        if (this.currentTestimonial < this.testimonials.length - 1) {
          this.currentTestimonial++;
        }
      },
      prevTestimonial() {
        if (this.currentTestimonial > 0) {
          this.currentTestimonial--;
        }
      },
    },
}
</script>

<style scoped>
.frame{
    width: 1080px;
    height: 1080px;
}

.inner{
    width: 957px;
    height: 598px;
    border: 2px solid #000000;
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.left{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.text{
    width: 360px;
    height: 216px;
    border: 2px solid #000000;
}

.text p{
    font-size: 22px;
    font-weight: normal;
    color: #000000;
}

.header h1{
    font-size: 29.02px;
    font-weight: 600;
}

.header p{
    font-size: 18px;
    font-weight: normal;
    color: #808080;
}

.quotes{
    width: 94px;
    height: 94px;
    margin-left: 400px;
}

.right{
    display: flex;
    flex-direction: column;
}

.right img{
    width: 442px;
    height: 670px;
    object-fit: fill;
}

.btns{
    display: flex;
    justify-content: space-between;
}

.right button{
    width: 120px;
    height: 53px;
    background-color: #000000;
    color: #FFFFFF;
    font-size: 17px;
    font-weight: normal;
    padding: 15px 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border: none;
    margin-top: 15px;
    cursor: pointer;

    --dur: .10s;
    --delay: .10s;
    
    transition:
      box-shadow calc(var(--dur) * 4) ease-out,
      transform calc(var(--dur) * 4) ease-out,
      background calc(var(--dur) * 4) steps(4, jump-end);
}

.right .prev{
    gap: 10px;
}

.right button:hover,
.right button:focus{
    box-shadow: 0 4px 8px hsla(190deg, 15%, 5%, .2);
    transform: translateY(-4px);
    /* background: #FFFFFF;
    color: #000000; */
}
</style>