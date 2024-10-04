<template>
    <div class="container">
        <div class="title">
            <div class="line"></div>
            <h1>Peer Reviews</h1>
            <div class="line"></div>
        </div>

        <div class="frame"  v-if="testimonials">
            <div class="inner" v-if="currentTestimonial !== null">
                <transition name="fade" mode="out-in">
                <div class="left">
                    <div class="text">
                        <p>{{ testimonials[currentTestimonial].testimony }}</p>
                    </div>

                    <img src="https://i.ibb.co/9y41wwD/ci-double-quotes-l.png" alt="" class="quotes">

                    <div class="header">
                        <h1>{{ testimonials[currentTestimonial].name }}</h1>
                        <p>Life Choices Academy Cohort</p>
                    </div>
                </div>
                </transition>

                <div class="right">
                    <transition name="fade" mode="out-in">
                    <img :src="testimonials[currentTestimonial].image" :alt="testimonials[currentTestimonial].name">
                    </transition>
                    <div class="btns">
                        <button v-if="currentTestimonial > 0" class="prev" @click="prevTestimonial"><i class="fa-solid fa-chevron-left  2"></i> Previous</button>
                        <button v-if="currentTestimonial < testimonials.length - 1" class="next" @click="nextTestimonial">Next <i class="fa-solid fa-chevron-right"></i></button>
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
      // Preload the next image
      const nextIndex = this.currentTestimonial + 1;
      if (nextIndex < this.testimonials.length) {
        const img = new Image();
        img.src = this.testimonials[nextIndex].image;
      }
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
/* Style */
.container{
    width: 1120px;
    min-height: 850px;
    margin: auto;
    margin-top: 100px;
}

.title{
    margin-bottom: 70px;
}

.title h1{
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    margin: 0;
}

.line {
    border-top: 2px solid #000000;
    width: 23%;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
}

.frame{
    width: 1080px;
    height: 800px;
}

.inner{
    width: 957px;
    height: 500px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-shadow: 0px 85.26px 181.4px 0px rgba(21, 21, 21, 0.15);
}

.left{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.text{
    width: 360px;
    height: 216px;
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
    width: 400px;
    height: 550px;
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
}

@media screen and (max-width: 1050px) {
    .container{
        width: 100%;
        min-height: 850px;
        margin: auto;
        margin-top: 100px;
    }

    .line{
        display: none;
    }

    .frame{
        width: 100%;
    }

    .inner{
        width: 100%;
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 0 0;
    }

    .inner .header{
        margin-top: 35px;
    }

    .left{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 90px;
        margin: auto;
    }

    .left img{
        display: none;
    }

    .text{
        width: 100%;
    }

    .text p{
        font-size: 20px;
    }

    .right{
        margin: auto;
    }

    .right img{
        width: 85%;
        height: 96%;
    }
}
</style>