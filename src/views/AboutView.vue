<template>
  <section id="aboutme">
    <div class="container-fluid text-center pb-5">
        <h2 class="display-3">About me</h2>
        <div class="row d-flex flex-column flex-md-row">
           <div class="col-6">
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner rounded-3">
                      <div class="carousel-item active" data-bs-interval="10000">
                        <img src="https://i.postimg.cc/vH76FhmR/C11-1.jpg" class="mx-auto img-fluid border border-dark" alt="image1">
                      </div>
                      <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://i.postimg.cc/J4ThBbCv/IMG-4336.jpg" class="mx-auto img-fluid border border-dark" alt="image2">
                      </div>
                      <div class="carousel-item">
                        <img src="https://i.postimg.cc/PrnWRnLT/IMG-3573.jpg" class="mx-auto img-fluid border border-dark" alt="image3">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                <div class="col-6 information text-lead bg-gradient">
                   <p>Hi, Im Timothy Jennike, a 22 year old aspiring developer from Bayview, Cape Town. Coding is a topic that i show alot of interest in because I enjoy problem-solving and you really get to show your creative side when designing web pages. To me thats the best of both worlds.Since a young age my dream has been to become a video game developer and thats what i want to chase. In my free time i enjoy upskilling myself in coding by watching videos about things I want a better understanding of or I'll spend time with my friends gaming or going on hikes.</p>
                     <p><i class="bi bi-calendar-heart g-5">  27 October 2000</i></p>
                      <p><i class="bi bi-whatsapp g-5">  +27 73 985 3441</i></p>
                      <p><i class="bi bi-envelope">  jenniketimothy00@gmail.com</i></p>
                      <div class="icons">
                      <a href="https://github.com/TimothyJennike" target="_blank"><i class="bi bi-github"></i></a>
                      <a href="https://www.instagram.com/timmy_turner27/" target="_blank"><i class="bi bi-instagram"></i></a>
                     </div>
                    </div>
                  </div>
                </div>
           </section>

</template>
<script>
export default {
  
}
</script>
<style scoped>
 
 @import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap');

#aboutme {
    font-family: 'Bruno Ace SC', cursive;
    background-image: url(https://i.postimg.cc/288khhs4/new-background-1.png);
    background-size: cover;
    min-height: 95vh;
    overflow: hidden;
    color: whitesmoke;
}

.display-3{
  -webkit-text-stroke: 2px;
  -webkit-text-stroke-color: black;
}

#aboutme img {
    width: auto;
    height: 75vh;
    object-position: center;
    object-fit: cover;
}

#aboutme a {
  display: block;
  scale: 2;
  color: white;
}

.information{
  color: whitesmoke;
}
.information::after {
  background-color: black;
  opacity: 0.5;
}

.icons {
  display:flex;
  justify-content:center;
  gap: 50px;
}

i {
  font-size: x-large;
}

.col-6 p {
    font-size: x-large;
}

</style>