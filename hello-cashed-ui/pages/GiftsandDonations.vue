<template>
  <div>
      <SiteHeader></SiteHeader>
      <!-- partial -->
      <div class="container-fluid page-body-wrapper">
        
      <SiteNavigation></SiteNavigation>
      
      <!-- CONTRIBUTIONS PAGE STARTS HERE-->
          <div class="main-panel">
          <div class="content-wrapper">
            <div class="row" style="margin-top:100px; margin-left:50px; margin-right:50px;">
              <div class="col-md-2 grid-margin cashed-card">
                <div class="card bg-gradient-dark card-img-holder text-white">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-3">Pocket Money <i class="mdi mdi-chart-line mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">$ 250</h2>
                    <h6 class="card-text" style="float:right">Yearly</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-2 grid-margin cashed-card">
                <div class="card bg-gradient-dark card-img-holder text-white">
                  <div class="card-body">

                    <h4 class="font-weight-normal mb-3">Gifts to friends <i class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">$ 250</h2>
                    <h6 class="card-text" style="float:right">Yearly</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-2 grid-margin cashed-card">
                <div class="card bg-gradient-dark card-img-holder text-white">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-3">Donations<i class="mdi mdi-diamond mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">$ 200</h2>
                    <h6 class="card-text" style="float:right">Yearly</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-2 grid-margin cashed-card">
                <div class="card bg-gradient-dark card-img-holder text-white">
                  <div class="card-body">

                    <h4 class="font-weight-normal mb-3">Tasks<i class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">$ 100</h2>
                    <h6 class="card-text" style="float:right">Custom</h6>
                  </div>
                </div>
              </div>
              <br>
            <div class="col-lg-12 grid-margin stretch-card" style="margin-top:50px;">
                <div class="card">
                  <div class="card-body">
                    <div class="container-fluid" style="display:flex;">
                    <h4 class="card-title">Money that flies away</h4>
                     </div>
                    <table class="table table-bordered" style="margin-top:30px">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Requirement</th>
                          <th>Amount</th>
                          <th>Card used</th>
                          <th>Deadline</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          
                          <td> Hailey </td>
                          <td>Washing Dishes and arranging wardrobe</td>
                          <td> $ 10.00 </td>
                          <td>Tasks</td>
                          <td> Feb 28,2021 </td>
                        </tr>
                        <tr>
                          
                          <td> Paul Haithcock </td>
                          <td>Wedding Anniversary</td>
                          <td> $245.30 </td>
                          <td>Gifts to Friends</td>
                          <td> July 1, 2021 </td>
                        </tr>
                        <tr>
                          
                          <td> Children Cancer Foundation </td>
                          <td> Donation </td>
                          <td> $140.00 </td> 
                          <td>Donations</td>
                          <td> Apr 12, 2021 </td>
                        </tr>
                        <tr>
                          
                          <td> Alvira </td>
                          <td> Party </td>
                          <td> $ 30.00 </td>
                          <td>Pocket Money</td>
                          <td> March 15, 2021 </td>
                        </tr>
                        <tr>
                          
                          <td> Edward </td>
                          <td> Donation </td>
                          <td> $ 60.00 </td> 
                          <td>Donations</td>
                          <td> May 03, 2021 </td>
                        </tr>
                        <tr>
                         
                          <td> John Doe </td>
                          <td> Restaurant Tip </td>
                          <td> $ 12.21 </td>
                          <td>Donations</td>
                          <td> Feb 20, 2021 </td>
                        </tr>
                        <tr>
                          
                          <td> Henry Tom </td>
                          <td> Office Party </td>
                          <td> $ 150.00 </td>
                          <td> GIfts to Friends</td>
                          <td> June 16, 2021 </td>
                        </tr>
                       
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            

              </div>
          </div>
       </div>
       <!-- CONTRIBUTIONS PAGE ENDS HERE-->
      </div>
        
      <SiteFooter></SiteFooter>
  </div>
</template>

<script>
import SiteFooter from '../components/SiteFooter.vue';
import SiteHeader from '../components/SiteHeader.vue';
import SiteNavigation from '../components/SiteNavigation.vue';

export default {
  components:{
    SiteFooter,
    SiteHeader,
    SiteNavigation
  }
}
</script>

<style>
@import '../assets/css/style.css';
.mb-5{
 color:#e8ff11;
}
</style>