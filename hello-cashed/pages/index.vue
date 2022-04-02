<template>
    <div>
        
    
            <div class="col-lg-3" style="margin-left:1000px; margin-top:250px;">
              <div class="auth-form-light text-left p-5">
                <h4>Hello! let's get started</h4>
                <h6 class="font-weight-light">Sign in to continue.</h6>
                <form class="pt-3">
                  <div class="form-group">
                    <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username">
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password">
                  </div>
                  <div class="mt-3">
                    <NuxtLink to="/wallet" class="btn btn-block btn-gradient-dark btn-lg font-weight-medium auth-form-btn" style="color:#e8ff11">SIGN IN</NuxtLink>
                  </div>
                  <div class="my-2 d-flex justify-content-between align-items-center">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input"> Keep me signed in 
                        </label>
                    </div>
                    <a href="#" class="auth-link text-black">Forgot password?</a>
                  </div>
                  
                  <div class="text-center mt-4 font-weight-light"> Don't have an account? 
                    <NuxtLink to="/register" class="auth-link text-black" style="text-decoration: underline;">Create</NuxtLink>
                  </div>
                </form>
             </div>
            </div>
  
 
</div>
</template>
<style>
@import "../assets/css/style.css";

</style>