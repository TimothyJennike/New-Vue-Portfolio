<template>
    <div class="Skills">
        <h1>Skills</h1>
        <h3>Below are skills I've acquired throughout my experiences:</h3>
    <div class="row d-flex justify-content-center ">
      <div class="card col-1 gy-5" v-for="item in skills" :key="item">
     <div class="box">
          <div class="content">
               <span class="card-title">{{ item.name }}</span>
          <div class="text">
               <p><img :src="item.image" :alt="item.name"></p>
          </div>
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
               skills : [
                    {
                         name: 'HTML 5',
                         image: 'https://i.postimg.cc/XqCMnW2c/html.png'
                    },
                    {
                         name: 'CSS 3',
                         image: 'https://i.postimg.cc/nLnHM1vZ/css-3.png'
                    },
                    {
                         name: 'BOOTSTRAP',
                         image: 'https://i.postimg.cc/gcLBwPR9/pngwing-com-4.png'
                    },
                    {
                         name: 'JAVASCRIPT',
                         image: 'https://i.postimg.cc/Fzbv9d71/js.png'
                    },
                    {
                         name: 'VUE JS',
                         image: 'https://i.postimg.cc/JzDsSYCN/pngwing-com-1.png'
                    },
                    {
                         name: 'MYSQL',
                         image: 'https://i.postimg.cc/JnrqhNRz/pngwing-com-3.png'
                    },
                    {
                         name: 'NODE JS',
                         image: 'https://i.postimg.cc/Qxz73MrK/pngegg-3.png'
                    },
                    {
                         name: 'WORDPRESS',
                         image: 'https://i.postimg.cc/sDbkqbw9/pngwing-com.png'
                    }
               ]
          }
     } 

    
}
</script>

<style scoped>

.Skills {
  background-image: url(https://i.postimg.cc/288khhs4/new-background-1.png);
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Bruno Ace SC', cursive;
  min-height: 86vh;
  overflow: hidden;  
}

h1{
  text-align: center;
  color: white;
  font-size: 4rem;
  -webkit-text-stroke: 2px;
  -webkit-text-stroke-color: black;
  padding-top: 20px;
}

h3{
  text-align: center;
  color: white;
}

.row {
  gap: 15px;
  margin: 2px;
}

.card {
  width: 10.5em;
  height: 14.5em;
  background: linear-gradient(135deg, #576C93, #302863);
  background-position: center;
  background-size: cover;
  border-style: solid 5px;
  background-repeat: no-repeat;
  margin-top: 5%;
  border-style: solid 10px;
  border-color: black;
}

.box {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.074);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  clip-path: polygon(54% 27%, 100% 50%, 100% 100%, 51% 74%, 0 50%, 0% 0%);
  transition: 0.5s;
  line-height: 1.2;
}

.card-title {
  width: 100%;
  font-weight: bold;
  color: white;
  display: block;
  text-align: center;
  padding-top: 6.3em;
  font-size: 0.9em;
  /* transform: rotate(34deg); */
  transition: 0.5s;
}

.text {
  color: white;
  opacity: 0;
  transition: 0.5s;
  margin: auto;
}

 img {
    height: 110px;
    width: 100px;
    margin-right: 100%;
}

.card:hover .content {
  clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 0 50%, 0% 0%);
}

.card:hover .card-title {
  padding-top: 1em;
  margin-left: 0%;
  transform: rotate(0deg);
}

.card:hover .text {
  opacity: 1;
}
    
</style>