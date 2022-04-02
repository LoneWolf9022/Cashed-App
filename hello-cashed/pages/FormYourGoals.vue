<template>
  <div>
      <SiteHeader></SiteHeader>
      <!-- partial -->
      <div class="container-fluid page-body-wrapper">
      <SiteNavigation></SiteNavigation>
      <div class="main-panel">
          <div class="content-wrapper">
               <div class="col-lg-8 grid-margin stretch-card" style="margin-top:200px; margin-left:350px;">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Let us help you achieve your goals!</h4>
                  
                    <form class="forms-sample">
                      <div class="form-group">
                        <label for="name">Name your goal</label>
                        <input type="text" class="form-control" id="exampleInputName1" v-model="goal_name" placeholder="Ex. Your dream home">
                      </div>
                      <div class="form-group">
                        <label for="name">Amount to Save</label>
                        <input type="text" class="form-control" id="exampleInputName1" v-model="saving_amount" placeholder="Tell me the total amount">
                      </div>
                      <div class="form-group">
                        <label for="name">Year to achieve</label>
                        <input type="text" class="form-control" id="exampleInputName1" v-model="goal_time" placeholder="Tell me the number of years">
                      </div>
                      <div class="form-group">
                        <label for="exampleSelectGender" >Your commitment</label>
                        <select class="form-control" v-model="goal_commitment">
                          <option>Bi-Monthly</option>
                          <option>Monthly</option>
                          <option>Quarterly</option>
                          <option>Twice an year</option>
                          <option>Yearly</option>
                        </select>
                      </div>
                    
                      <button type="submit" @click.prevent="goalsCreated();" class="btn btn-gradient-dark mr-2" style="background-color: black;color: #e8ff11;" ><NuxtLink style="background-color: black;color: #e8ff11;" to="/goals">Submit</NuxtLink></button>
                      <button class="btn btn-light">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
       
      <SiteFooter></SiteFooter>
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
      goal_name:"",
      saving_amount:"",
      goal_time:"",
      goal_commitment:""
    };
  },
  methods:{
    postGoals() {
      const apiUrl = "http://localhost:1337/goals";
      const headers = { "Content-Type": "application/json" };
      axios({
        url: apiUrl, 
        data: {
          name: this.goal_name,
          amount:this.saving_amount,
          time: this.goal_time,
          commitment: this.goal_commitment
        },
        headers: headers,
        method: "POST",
        
      })
        .then((response) => {
            console.log(response.data);
           
        })
        .catch((err) => {
          console.log(err);
        });
    },

    goalsCreated() {
         this.postGoals();
         
    }
    }
  }
</script>

<style>
@import '../assets/css/style.css';
</style>
