<template>

  <body>
  <h1>Work & Education</h1>
  <h6>Below are my work and education I've acquired over the years</h6>
<div class="timeline">
  <div class="container left" data-aos="fade-right">
    <div class="content">
      <h2>Plumstead High School-2014/2018</h2>
      <p>I matriculated from Plumstead High at 2018 with a Bachelors pass.</p>
    </div>
  </div>
  <div class="container right" data-aos="fade-left">
    <div class="content">
      <h2>Mores Envelopes-2018/2019</h2>
      <p>Employed to cut the stamps into individual pieces and put them onto the envelopes.</p>
    </div>
  </div>
  <div class="container left" data-aos="fade-right">
    <div class="content">
      <h2>Okuhlaza Suppliers-2019/2020</h2>
      <p>Done an internship where i was Office Admin Assistant, where i learnt the basics of working/learning more about the work environment.</p>
    </div>
  </div>
  <div class="container right" data-aos="fade-left">
    <div class="content">
      <h2>Rev Transcribing-2020/2021</h2>
      <p>Transcribing job where i worked as a freelancer to transcribe audio and videos for many clients around the world</p>
    </div>
  </div>
  <div class="container left" data-aos="fade-right">
    <div class="content">
      <h2>Statistics South Africa-2021/2022</h2>
      <p>I worked for StatsSa as a supervisor under a term contract where i had to go door-to-door interviewing people for Census purposes.</p>
    </div>
  </div>
  <div class="container right" data-aos="fade-left">
    <div class="content">
      <h2>Life Choices Academy-2022/2023</h2>
      <p>Completed a coding course with Life Choices Academy where i learned the technical and various other skills such as work ethics and professional development.</p>
    </div>
  </div>
  <div class="container left pb-3" data-aos="fade-right">
    <div class="content">
      <h2>Life Choices Studio-2023/present</h2>
      <p>Currently in Life Choices Studio where i am on a learning journey where I will learn about UI/UX, Wordpress, SEO and PHP</p>
    </div>
  </div>
</div>


</body>

</template>

<script>
export default {
    
}
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap');

* {
  box-sizing: border-box;
}

/* Set a background color */
body {
  background-image: url(https://i.postimg.cc/288khhs4/new-background-1.png);
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Bruno Ace SC', cursive;
}

h1{
  text-align: center;
  color: white;
  font-size: 4rem;
  -webkit-text-stroke: 2px;
  -webkit-text-stroke-color: black;
  padding-top: 20px;
}

h2 {
    text-decoration: underline black;
}

h6{
  text-align: center;
  font-size: larger;
  color: white;
}
/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid black;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  right: 25.4%;
}

/* Place the container to the right */
.right {
  left: 25.4%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
/* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

/* Full-width containers */
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

/* Make sure that all arrows are pointing leftwards */
  .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

/* Make sure all circles are at the same spot */
  .left::after, .right::after {
    left: 15px;
  }

/* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}
    
</style>