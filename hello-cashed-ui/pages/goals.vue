<template>
  <div>
      <SiteHeader></SiteHeader>
      <!-- partial --> 
      <div>
      <div class="container-fluid page-body-wrapper">
      <SiteNavigation></SiteNavigation>
    
      <div class="main-panel">
         <div class="content-wrapper">
<img src="../assets/images/goals.png" height="170px" weight="180px" style="margin-top:180px;margin-left:900px;"/>
<NuxtLink to="/formyourgoals"><h5 style="margin-top:20px;margin-left:890px;color:black;margin-bottom:120px">Try adding a goal now!</h5></NuxtLink>
            <div class="row" style="margin-top:100px; margin-left:50px; margin-right:50px;margin-bottom:100px;">
              
              <div class="col-md-4 stretch-card grid-margin" v-for="goal in goals" :key="goal.id">
                <div class="card bg-gradient-dark card-img-holder text-white">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-3" style="float:left;" >{{goal.name}}<i class="mdi mdi-chart-line mdi-24px float-right"></i>
                    </h4>
                    <h6 class="card-text" style="float:right;">Due in {{goal.time}} months</h6>
                    <br><br><br>
                    <h2 class="mb-5" style="float:left;">Amount to be saved</h2> 
                    <h2 style="float:right;color:#e8ff11;">$ {{goal.amount}} </h2>
                    <h4 class="card-text" style="float:left;">You should save <span style="color:#e8ff11">$ {{goal.amount/goal.time}}</span> each month!</h4>
                  </div>   
                 
                </div>
               </div> 
                  <br>

              </div>
             <img src="../assets/images/cashed-goals-wallpaper.png" height="600px" width="1200px" style="margin-left:1250px;"/>
             </div>  
            </div>
           
          </div>
          
             
            <SiteFooter></SiteFooter>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import SiteFooter from '../components/SiteFooter.vue';
import SiteHeader from '../components/SiteHeader.vue';
import SiteNavigation from '../components/SiteNavigation.vue';

export default {
  components:{
    SiteFooter,
    SiteHeader,
    SiteNavigation
  },
  data(){
    return{
      goals:[],
      goal:[]
    }
  },
  methods:{
     loadGoals() {
      const apiUrl = "http://localhost:1337/goals";
      const options = {
        headers: { "Content-Type": "application/json" }
      };
    axios.get(apiUrl, options).then(
        (response) => {
          
          this.goals = response.data;
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        });
       
    }
  },
  mounted(){
    this.loadGoals();
  }
}
</script>

<style>
@import '../assets/css/style.css';

    i.fas {
      border: 1px solid red;
    }

    i.fa-bullseye-arrow {
      color: green;
    }
    
</style>
