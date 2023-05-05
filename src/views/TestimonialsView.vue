<template>
        <section id="testimonial">
      <h2 class="display-3 text-center">Testimonials</h2>
      <div class="container-fluid d-flex justify-content-center">
            <div class="row d-flex flex-column flex-md-row ">

                <div class="col-4 gy-3">
        <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front border border-dark">
                <img src="https://i.postimg.cc/nzyPnk5X/IMG-20210822-WA0208.jpg" alt="Brandon" style="width:300px;height:300px;">
              </div>
              <div class="flip-card-back">
                <h1>Brandon Swinton</h1>
                <p>Colleague</p>
                <p>Timothy is a dedicated worker ,always consisitent .A very energetic person .He always knows what to say.He is very passionate about his work ,I enjoyed having Timothy as a fellow developer</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-4 gy-3">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front border border-dark">
                <img src="https://i.postimg.cc/7Y4g5Qrw/DSC-3517.jpg" alt="Likay"  style="width:300px;height:300px;">
              </div>
              <div class="flip-card-back">
                <h1>Lindokuhle Mgoqi</h1>
                <p>Colleague</p>
                <p>Timothy is a Hard working individual who sees to it that the job is done and focuses on the task at hand and does it to the point of perfecting it and  is always willing to lend a helping hand whenever he can</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-4 gy-3">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front border border-dark">
                <img src="https://i.postimg.cc/VvgTx0Ph/DSC-3588.jpg" alt="person" style="width:300px;height:300px;">
              </div>
              <div class="flip-card-back">
                <h1>Maxwill Isaacs</h1>
                <p>Colleague</p>
                <p>Tim is a good listener and a very fast learner. He caught up real quick these past few weeks and showed great results in this short amount of time. He's great at teamwork and shows a lot of front-end developer qualities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    <div class="container-fuid d-flex justify-content-center pt-4 pb-5 mx-auto">
      <div class="row d-flex flex-column flex-md-row d-flex justify-content-between">
        <div class="col-5 gy-3">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front border border-dark">
                <img src="https://i.postimg.cc/Kz8bHftL/Sakhe.jpg" alt="Sakhe" style="width:300px;height:300px;">
              </div>
              <div class="flip-card-back">
                <h3>Sakhe Mzolisa</h3>
                <p>Colleague</p>
                <p>Timmy is a hard working gent, always willing to assist others. He is a resilient person who does not allow any obstacle to stand in his way. A witty character with a big personality and can accommodate everyone. A real asset to any space he is in as he can stand out within a crowd. A character who can add flair to any project he touches.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-5 gy-3">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front border border-dark">
                <img src="https://i.postimg.cc/Ghbvn8KL/Joel-Profile.jpg" alt="Joel" style="width:300px;height:300px;">
              </div>
              <div class="flip-card-back">
                <h3>Joel Mukanye</h3>
                <p>Lecturer</p>
                <p>Timothy is a very creative and well-behaved student. He is very patient and eager to learn more. He enjoys working with his classmates and does well working on his project. He has learned a lot about web development, including Bootstrap 5. I am quite happy with the effort he puts into his work. I recommend him as a developer.</p>
              </div>
            </div>
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

    #testimonial{
    font-family: 'Bruno Ace SC', cursive;
    min-height: 95vh;
    background-image: url(https://i.postimg.cc/288khhs4/new-background-1.png);
    background-size: cover;
}

#testimonial h2 {
    color: white;
    -webkit-text-stroke: 2px;
    -webkit-text-stroke-color: black;
}

.flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
  }
  
  .flip-card-inner img {
    object-fit: cover;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1.5s;
    transform-style: preserve-3d;
    box-shadow: 7px 7px 7px black;
  }
  
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  
  .flip-card-front {
    background-color: #bbb;
    color: black;
  }
  
  .flip-card-back {
    background-color: black;
    color: white;
    transform: rotateY(180deg);
    font-size: medium;
  }

  .flip-card-back p {
    font-size: small;
  }

</style>