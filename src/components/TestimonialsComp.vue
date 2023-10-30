<template>
    <div class="container">
        <div class="title">
            <div class="line"></div>
            <h1>Testimonials</h1>
            <div class="line"></div>
        </div>

        <div class="frame">

            <div class="inner">

                <div class="left">
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>

                    <img src="https://i.postimg.cc/rs7DnrHC/ci-double-quotes-l.jpg" alt="" class="quotes">

                    <div class="header">
                        <h1>Cheslyn Herman</h1>
                        <p>Life Choices Academy Cohort</p>
                    </div>
                </div>

                <div class="right">
                    <img src="https://i.postimg.cc/g0R9JZPB/C12_Cheslyn_Herman_(1).jpg" alt="">
                </div>
            </div>
        </div>
        <button>Next</button>
    </div>
</template>

<script>
export default {

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
}

.left{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    margin-left: 320px;
}

.right img{
    width: 442px;
    height: 670px;
    object-fit: fill;
}
</style>