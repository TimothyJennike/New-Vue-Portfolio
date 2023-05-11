<template>

  <section id="testimonials">
    <h2 class="display-3 text-center">Testimonials</h2>

         <div class="container mx-auto g-5">
    <div v-for="items in testimonial" :key="items.id" class ="card ">
      <div class= "image">
          <img :src="items.profile" alt="...">
          <h2>{{ items.name }}</h2>
      </div>
      <div class = "content">
        <h3><span class="relation">{{items.relation}}</span></h3>
        <p class="reference" >{{ items.words}}</p>
      </div>
    </div>
  </div>    

</section>

</template>
<script>
export default {
    data() {
      return {
        testimonial: [
        {
          id : 1,
          name : 'Brandon Swinton',
          relation : 'Colleague',
          words: 'Timothy is a dedicated worker ,always consistent .A very energetic person .He always knows what to say.He is very passionate about his work ,I enjoyed having Timothy as a fellow developer',
          profile: 'https://i.postimg.cc/QdGJWsyD/C11-Brandon-Swinton-1.jpg'
        },
        {
          id : 2,
          name : 'Lindokuhle Mgoqi',
          relation : 'Colleague',
          words: 'Timothy is a Hard working individual who sees to it that the job is done and focuses on the task at hand and does it to the point of perfecting it and  is always willing to lend a helping hand whenever he can.',
          profile: 'https://i.postimg.cc/7Y4g5Qrw/DSC-3517.jpg'
        },
        {
          id : 3,
          name : 'Maxwill Isaacs',
          relation : 'Colleague',
          words: "Tim is a good listener and a very fast learner. He caught up real quick these past few weeks and showed great results in this short amount of time. He's great at teamwork and shows a lot of front-end developer qualities .",
          profile: 'https://i.postimg.cc/SRS2FSV6/DSC-3589.jpg'
        },
      {
          id : 4,
          name : 'Sakhe Mzolisa',
          relation : 'Colleague',
          words: 'Timmy is a hard working gent, always willing to assist others. He is a resilient person who does not allow any obstacle to stand in his way. A witty character with a big personality and can accommodate everyone. A real asset to any space he is in as he can stand out within a crowd. A character who can add flair to any project he touches.',
          profile: 'https://i.postimg.cc/Kz8bHftL/Sakhe.jpg'
        },
        {
          id : 5,
          name : 'Joel Mukanye',
          relation : 'Lecturer',
          words: 'Timothy is a very creative and well-behaved student. He is very patient and eager to learn more. He enjoys working with his classmates and does well working on his project. He has learned a lot about web development and I am quite happy with the effort he puts into his work. I recommend him as a developer.',
          profile: 'https://i.postimg.cc/Ghbvn8KL/Joel-Profile.jpg'
        },
        {
          id: 6,
          name: 'Konke Malindi',
          relation: 'Colleague',
          words: "Timothy has this drive within himself that whatever is put in he's way whether or not he understands it or not,he'll complete at the end of the day.He's been truly helpful to me and countless others as well,and when knowing what to do he'll make sure to help those he sees don't understand as well.",
          profile: 'https://i.postimg.cc/YCkHtYb1/DSC-3528.jpg'
        }
      ]
      }
    },
  }
  
</script>

<style scoped>

/* NEW TESTIMONIALS STYLES */

  #testimonials,
#testimonials * {
  box-sizing: border-box;
}

#testimonials {
  font-family: 'Bruno Ace SC', cursive;
  background-image: url(https://i.postimg.cc/288khhs4/new-background-1.png);
  background-size: cover;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.display-3 {
  font-family: 'Bruno Ace SC', cursive;
  color: white;
  -webkit-text-stroke: 2px;
  -webkit-text-stroke-color: black;
}

* { 
  margin : 0;
  padding: 0;
  box-sizing : border-box;
  font-family : 'Bruno Ace SC', cursive;
}


.container {
  position : relative;
  margin-top: 6%;
  width : 1100px;
  display : flex;
  align-items : center;
  justify-content : center;
  flex-wrap : wrap;
  padding : 30px;
}

.container .card {
  position: relative;
  max-width : 300px;
  height : 215px;  
  background-color : #36454F;
  margin : 30px 10px;
  padding : 20px 15px;
  display : flex;
  flex-direction : column;
  box-shadow : 0 5px 20px rgba(0,0,0,0.5);
  transition : 0.3s ease-in-out;
  border-radius : 15px;
}
.container .card:hover {
  height : 395px; 
}


.container .card .image {
  position : relative;
  width : 260px;
  height : 260px;
  top : -40%;
  left: 8px;
  box-shadow : 0 5px 20px rgba(0,0,0,0.2);
  z-index : 1;
}

.container .card .image img {
  max-width : 100%;
  border-radius : 15px;
}

.container .card .content {
  position : relative;
  top : -140px;
  padding : 10px 15px;
  color : #111;
  text-align : center;
  
  visibility : hidden;
  opacity : 0;
  transition : 0.3s ease-in-out;
    
}

.container .card:hover .content {
   margin-top : 30px;
   visibility : visible;
   opacity : 1;
   transition-delay: 0.2s;
  
}

.container:hover > .card:not(:hover) {
  filter: blur(10px);
  transform: scale(0.9, 0.9);
}

h2 {
  color: white;
}

.card:hover h2{
  display: none;
}

h3{
  color: white;
  font-family: 'Rubik';
}

.relation{
  color: whitesmoke;
  text-decoration: underline white;
  font-family: 'Rubik'
}

.reference{
  color: white;
  font-family:'Archivo Narrow', sans-serif;;
  font-size: 1rem;
  position : relative;

  
}



</style>