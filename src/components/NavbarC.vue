<template>
        <header>
        <nav class="navbar navbar-dark bg-black sticky-top">
            <div class="container-fluid">
                <img class="logo" src="https://i.postimg.cc/QxshjtTz/Timothy-Jennike.png" alt="logo">
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Navigate to...</h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 text-decoration-none">
                    <li class="nav-item ">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" >About me</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/resume">Resume</router-link>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="./html_files/testimonial.html"><i class="bi bi-person-rolodex">Testimonials</i></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="./html_files/projects.html"><i class="bi bi-archive">Projects</i></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="./html_files/contact.html"><i class="bi bi-telephone">Contact</i></a>
                      </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</header>

</template>
<script>
export default {
    
}
</script>
<style scoped>
.logo {
    height: 4rem;
    width: 4rem;
}

.navbar toggler{
  color: white;
}

h5{
  font-size: 30px;
  color: white;
  font-family: 'Bruno Ace SC', cursive;
  text-decoration: underline white;
}

.nav-item{
  padding-top: 20px;
}
.nav-item a{
  text-decoration: none;
  font-size: 20px;
  color: white;
  font-family: 'Bruno Ace SC', cursive;
  transition: .5s;
}

ul li a:hover::before {
  transform: scale(1.1);
  box-shadow: 0 0 15px #ffee10;
}

ul li a:hover {
  color: #ffee10;
  box-shadow: 0 0 5px #ffee10;
  text-shadow: 0 0 5px #ffee10;
}

</style>