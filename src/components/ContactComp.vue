<template>
  <div class="contact">
    <div class="title">
      <div class="line"></div>
      <h1>Contact Me</h1>
      <div class="line"></div>
    </div>

    <div class="container">
        <div class="info">
            <h1>Contact Information</h1>
            <h6>Leave your contact information here 👉</h6>

            <div class="details">
                <p> <i class="fa-solid fa-phone"></i> +27 65 838 0423</p>
                <p> <i class="fa-solid fa-envelope"></i> abenathi.sindaphi201@gmail.com</p>
                <p>
                    <i class="fa-solid fa-location-dot"></i> Zwelitsha, <br>
                    Khayelitsha, <br>
                    7784
                </p>
            </div>

            <div class="socials">
                <h6>You can find and follow me on:</h6>

                <div class="icons">
                    <a href="https://www.linkedin.com/in/abenathi-sindapi-420969270/" target="_blank">
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                
                    <a href="https://github.com/Abenathi201" target="_blank">
                      <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
        
        <form action="https://formspree.io/f/xoqzrooq" method="POST">
            <div class="form-row">
                <div class="input-data">
                    <input type="text" name="name" required>
                    <div class="underline"></div>
                    <label for="">First Name</label>
                </div>
                <div class="input-data">
                    <input type="text" name="lastname" required>
                    <div class="underline"></div>
                    <label for="">Last Name</label>
                </div>
            </div>
            <div class="form-row">
                <div class="input-data">
                    <input type="email" name="email" required>
                    <div class="underline"></div>
                    <label for="">Email Address</label>
                </div>
                <div class="input-data">
                    <input type="text" required>
                    <div class="underline"></div>
                    <label for="">Phone Number</label>
                </div>
            </div>
            <div class="form-row">
                <div class="input-data textarea">
                    <textarea name="message" rows="8" cols="80" required></textarea>
                    <br/>
                    <div class="underline"></div>
                    <label for="">Write your message</label>
                    <br/>
                    <div class="submit-btn">
                        <input type="submit" value="Send Message">
                    </div>
                </div>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.contact{
    width: 1120px;
    margin: auto;
    margin-top: 100px;
}

.title{
    margin-bottom: 70px;
}

.contact h1{
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
    width: 1196px;
    height: 667px;
    margin: auto;
    display: flex;
}

.info{
    width: 490px;
    height: 490px;
    background-color: #000000;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
}

.info h1{
    font-size: 32px;
    font-weight: 600;
    text-align: left;
    margin-top: 40px;
    margin-left: 30px;
}

.info h6{
    font-size: 20px;
    font-weight: normal;
    text-align: left;
    color: #C9C9C9;
    margin-top: 0;
    margin-left: 30px;
}

.details{
    width: 389px;
    height: 220px;
    margin-left: 30px;
}

.details p{
    font-size: 20px;
    font-weight: normal;
    text-align: left;
    display: flex;
    gap: 20px;
}

.socials{
    margin-left: 30px;
    width: 389px;
    height: 100px;
    margin-top: 15px;
}

.socials h6{
    font-size: 20px;
    font-weight: normal;
    text-align: left;
    color: #C9C9C9;
    margin-bottom: 20px;
    margin-left: 30px;
}

.socials .icons{
    display: flex;
    justify-content: center;
    gap: 15px;
}

.socials .icons a{
    font-size: 30px;
    margin-bottom: 30px;
    color: #FFFFFF;
    transition: 0.3s ease;
}

.socials .icons a:hover{
    transform: scale(1.1);
}

form{
    border: 5px solid black;
    width: 700px;
    height: 480.5px;
}

form .form-row{
    display: flex;
    margin: 32px 0;
}

form .form-row .input-data{
    width: 100%;
    height: 40px;
    margin-left: 20px;
    position: relative;
}

form .form-row .textarea{
    height: 70px;
}

.input-data input{
    display: block;
    width: 80%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 17px;
    border-bottom: 2px solid rgba(0,0,0, 0.12);
}

.textarea textarea{
    display: block;
    width: 92%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 17px;
    border-bottom: 2px solid rgba(0,0,0, 0.12);
}

.input-data input:focus ~ label, .textarea textarea:focus ~ label,
.input-data input:valid ~ label, .textarea textarea:valid ~ label{
    transform: translateY(-20px);
    font-size: 14px;
    color: #000000;
}

.textarea textarea{
    resize: none;
    padding-top: 10px;
}

.input-data label{
    position: absolute;
    pointer-events: none;
    bottom: 10px;
    font-size: 16px;
    color: #808080;
    transition: 0.3s ease;
}

.textarea label{
    width: 100%;
    bottom: 40px;
    background: #FFFFFF;
}

.input-data .underline{
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 100%;
}

.input-data .underline:before{
    position: absolute;
    content: "";
    height: 2px;
    width: 82.9%;
    margin-top: 4px;
    background: #000000;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
}

.textarea .underline:before{
    position: absolute;
    content: "";
    height: 2px;
    width: 93.5%;
    margin-top: 14.5px;
    background: #000000;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
}

.input-data input:focus ~ .underline:before,
.input-data input:valid ~ .underline:before,
.textarea textarea:focus ~ .underline:before,
.textarea textarea:valid ~ .underline:before{
    transform: scale(1);
}

.submit-btn input{
    width: 160px;
    height: 53px;
    background-color: #000000;
    color: #FFFFFF;
    font-size: 17px;
    font-weight: normal;
    padding: 15px 22px;
    border: none;
    float: right;
    margin-right: 50px;
    cursor: pointer;

    --dur: .10s;
    --delay: .10s;
    
    transition:
      box-shadow calc(var(--dur) * 4) ease-out,
      transform calc(var(--dur) * 4) ease-out,
      background calc(var(--dur) * 4) steps(4, jump-end);
}

.submit-btn input:hover,
.submit-btn input:focus{
    box-shadow: 0 4px 8px hsla(190deg, 15%, 5%, .2);
    transform: translateY(-4px);
}

@media screen and (max-width: 1050px) {
    .contact{
        width: 100%;
    }

    .container{
        width: 95%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .contact{
        width: 100%;
        margin-bottom: 150px;
        display: flex;
        flex-direction: column;
    }

    .line{
        display: none;
    }

    .info{
        width: 100%;
        margin: auto;
    }

    form{
        width: 100%;
        height: 445px;
        float: left;
        border: none;
    }

    .submit-btn input{
        float: left;
    }

    .info h1{
        font-size: 1.53125em;
        font-weight: 600;
        text-align: left;
        margin-top: 25px;
        margin-left: 10px;
    }

    .info h6{
        font-size: 0.8125em;
        font-weight: normal;
        text-align: left;
        color: #C9C9C9;
        margin-top: 0;
        margin-left: 10px;
    }

    .details{
        width: 100%;
        height: 220px;
        margin-left: 10px;
    }

    .details p{
        font-size: 0.84375em;
        font-weight: normal;
        text-align: left;
        display: flex;
        gap: 20px;
    }

    .socials{
        margin-left: 10px;
        width: 100%;
        height: 100px;
        margin-top: 15px;
    }

    .socials h6{
        font-size: 0.9375em;
        font-weight: normal;
        text-align: left;
        color: #C9C9C9;
        margin-bottom: 30px;
        margin-left: 10px;
    }

    .socials .icons{
        display: flex;
        justify-content: start;
        margin-left: 80px;
        gap: 15px;
    }

    .socials .icons a{
        font-size: 1.875em;
        margin-bottom: 30px;
        color: #FFFFFF;
        transition: 0.3s ease;
    }
}

@media screen and (min-width: 360px) {
    .info{
        width: 100%;
        max-width: 650px;
        margin: 0 auto;
    }
    
    form{
        width: 70%;
        height: 80%;
        margin: auto;
        margin-left: 20px;
        border: none;
    }
    
}

@media screen and (min-width: 420px) and (max-width: 1124px) {
    .contact{
        margin-top: 350px;
    }

    .info{
        width: 70%;
        max-width: 650px;
        margin: 0 auto;
    }
    
    form{
        width: 70%;
        height: 80%;
        margin: auto;
        border: none;
    }
}

@media screen and (min-width: 1125px) {
    .contact{
        margin-top: 0px;
    }

    .info{
        width: 50%;
        max-width: 650px;
        margin: 0 auto;
    }
    
    form{
        width: 80%;
        height: 80%;
        margin: auto;
        margin-right: 50px;
        border: none;
    }
}
</style>