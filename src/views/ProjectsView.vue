<template>
    <section id="projects">
<h2 class="display-3 text-center">Projects</h2>
<p>Below are a few projects that i have worked on.</p>

<div class="container-fluid d-flex justify-content-center pb-4 ">
    <div class="row gx-5 d-flex flex-column flex-md-row g-3">
        <div class="col-4">
            <div class="card" style="width: 18rem;">
                <img src="https://i.postimg.cc/nrpFh6K6/Screenshot-2023-05-11-154620.png" class="card-img-top" height="160px">
                <div class="card-body">
                  <h5 class="card-title text-center"> Duo Comic Site</h5>
                  <a href="https://github.com/MaxTF141/NodeJS-EOMP" target="_blank" class="btn github">Github</a>
                  <a href="https://dead-mans-tales.web.app/" target="_blank" class="btn netlify">Netlify</a>
                </div>
              </div>
        </div>

        <div class="col-4">
            <div class="card" style="width: 18rem;">
                <img src="https://i.postimg.cc/C5fVLX7m/Screenshot-2023-05-18-125440.png" class="card-img-top" height="160px">
                <div class="card-body">
                  <h5 class="card-title text-center">Calculator</h5>
                  <a href="https://github.com/TimothyJennike/Calculator" target="_blank" class="btn github">Github</a>
                  <a href="https://timothy-calculator.netlify.app" target="_blank" class="btn netlify">Netlify</a>
                </div>
              </div>
        </div>
        
        <div class="col-4">
            <div class="card" style="width: 18rem;">
                <img src="https://i.postimg.cc/3xJjpmq4/Screenshot-2023-05-11-151416.png" class="card-img-top" height="160px">
                <div class="card-body">
                  <h5 class="card-title text-center">JS Ecommerce</h5>
                  <a href="https://github.com/TimothyJennike/JavasScript-Ecommerce" target="_blank" class="btn github">Github</a>
                  <a href="https://timothyjsproject.netlify.app" target="_blank" class="btn netlify">Netlify</a>
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

    #projects {
    font-family: 'Bruno Ace SC', cursive;
    min-height:90vh;
    background-image: url(https://i.postimg.cc/288khhs4/new-background-1.png);
    background-size: cover;
  }

  .display-3 {
    font-family: 'Bruno Ace SC', cursive;
    color: white;
    -webkit-text-stroke: 2px;
    -webkit-text-stroke-color: black;
  }

  h5{
    color: white;
    font-size: x-large;
    -webkit-text-stroke: 1px;
    -webkit-text-stroke-color: black;
  }

  img {
    border-style: solid;
    border-color: black;

  }


  #projects p {
    color: white;
    text-align: center;
    font-size: x-large;
  }

  .row {
    padding-top: 80px;
  }

  .card {
    background-color: transparent;
    border-style: solid;
    border-color: black;
    border-width: 3px;
  }

  a {
    display: flex;
    justify-content: center;
  }

  .github {
    background-color: #576C93;
    color: white;
    border-style: solid 10px;
    border-color: whitesmoke;
  }

  .netlify {
    background-color: #302863;
    color: white;
    border-style: solid 10px;
    border-color: whitesmoke;
    margin-top: 10%;
  }

  .btn:hover {
    box-shadow: 4px 4px 0px 0px black;
    border-color: black;
    transform: scale(1.1);
  }
  
  .card {
    height: 25rem;
  }
 
</style>