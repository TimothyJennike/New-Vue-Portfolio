<template>
    <section id="contact">
    <h2 class="display-3 text-center">Contact</h2>
    <p class="text-center">If you have any questions or want to contact me, feel free to use the form below</p>

    <div class="container-fluid pb-5">
    <div class="row d-flex flex-column flex-md-row">
        <div class="col-md-7 mx-auto">
          <div class="card mt-2 mx-auto p-4 bg-light">
              <div class="card-body bg-light">         
              <div class = "container-fluid">
         <form action="https://formspree.io/f/xeqwngqv" method="post" id="contact-form" role="form"> 
              <div class="controls"> 
                  <div class="row">
                      <div class="col-md-6">
                          <div class="form-group">
                              <label for="form_name">Firstname</label>
                              <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your firstname" required="required" data-error="Firstname is required.">                             
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="form-group">
                              <label for="form_lastname">Lastname</label>
                              <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter your lastname" required="required" data-error="Lastname is required.">
                            </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-6">
                          <div class="form-group">
                              <label for="form_email">Email</label>
                              <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email" required="required" data-error="Valid email is required.">                             
                          </div>
                      </div>

                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-12">
                          <div class="form-group align-items-center">
                              <label for="form_message">Message</label>
                              <textarea id="form_message" name="message" class="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave me a message."></textarea>
                              </div> 
                            </div> 
                          <div class="col-md-12 mt-4">                         
                              <input type="submit" class="btn btn-primary btn-send pt-2 btn-block" value="Send Message" >
                            </div>                     
                        </div>
                    </form>
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
 
#contact {
    font-family: 'Bruno Ace SC', cursive;
    min-height:90vh;
    background-image: url(https://i.postimg.cc/288khhs4/new-background-1.png);
    background-size: cover;
}

#contact h2 {
    color: white;
    -webkit-text-stroke: 2px;
    -webkit-text-stroke-color: black;
}

#contact p{
    color: white;
    font-size: x-large;
}

.card, input, textarea {
    border-color: black;
}

#contact .btn{
  margin-left: 320px;
}



</style>