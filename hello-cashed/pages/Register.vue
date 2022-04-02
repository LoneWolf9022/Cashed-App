<template>
    <div>
     <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper align-items-center auth">
          <div class="row flex-grow">
            <div class="col-lg-4 mx-auto" style="margin-left:1000px; margin-top:250px;">
              <div class="auth-form-light text-left p-5">

                <h4>New here?</h4>
                <h6 class="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <form class="pt-3">
                  <div class="form-group">
                    <input type="text" class="form-control form-control-lg" id="exampleInputUsername1" placeholder="Username">
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email">
                  </div>
 
                  <div class="form-group">
                    <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password">
                  </div>
                  <div class="mb-4">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input"> I agree to all Terms and Conditions </label>
                    </div>
                  </div>
                  <div class="mt-3">
                    <NuxtLink to="/createcards" class="btn btn-block btn-gradient-dark btn-lg font-weight-medium auth-form-btn" style="color:#e8ff11">SIGN UP</NuxtLink>
                  </div>
                  <div class="text-center mt-4 font-weight-light"> Already have an account? <NuxtLink to="/wallet" class="auth-link text-black" style="text-decoration:underline">Login</NuxtLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
@import '../assets/css/style.css';
</style>