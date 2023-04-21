<template>
  <body>
<main>
    <div class="Home">
    <section id="#home">
        <div class="display-2 text-center">Portfolio of Timothy Jennike
        <h3 id="h3">A Full-Stack Web Developer</h3></div>
    </section>
 </div>
</main>
</body>

</template>

<script>
export default {
  
}
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap');
.Home {
    overflow-x: hidden;
    background-image: url(https://i.postimg.cc/dQHnQ96p/maxresdefault.jpg);
    background-size: cover;
    min-height: 86vh;
    font-family: 'Bruno Ace SC', cursive;
    color: white;
}

.display-2 {
    padding-top: 250px;
}

#h3 {
    position: relative;
    animation: left 5s infinite;
    animation-direction: alternate; 
}

@keyframes left{
    from{left:0;}
    to{left: 5%;}
}
  
</style>