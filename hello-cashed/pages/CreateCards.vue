<template>
    <div>
         <SiteHeader></SiteHeader>
      <!-- partial -->
      <div class="container-fluid page-body-wrapper">
        <!-- partial:partials/_sidebar.html -->
      <SiteNavigation></SiteNavigation>
      <!-- WALLET PAGE STARTS HERE-->
          <div class="main-panel">
          <div class="content-wrapper">
            <div class="row" style="margin-top:250px; margin-left:700px;">

              <div class="col-md-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Create your card</h4>
                    <form class="forms-sample">
                      <div class="form-group">
                        <label for="budgettype">Budget Type </label><br>
                        <select v-model="budgettype" class="form-control" id="budgettype" placeholder="How often do you spend? ex. Weekly or Monthly">
                        <option>Weekly</option>
                        <option>Monthly</option>
                        <option>Biweekly</option>
                          </select>
                      </div>
                      <div class="form-group">
                        <label for="budgetamount">Amount</label>
                        <input type="text" class="form-control" id="budgetamount" v-model="amount" placeholder="Type in any amount ex.250.00"> 
                      </div>
                      <div class="form-group">
                        <label for="cardtype">Card Type</label>
                        <input type="text" class="form-control" id="cardtype" v-model="cardtype" placeholder="Anything that you pay regularly needs to be on a budget ex. Groceries">
                      </div>
                      <button type="submit" @click.prevent="cardCreated();" class="btn btn-gradient-dark mr-2" style="color:#e8ff11" ><NuxtLink style="color:#e8ff11" to="/wallet">Submit</NuxtLink></button>
                      <button class="btn btn-light">Cancel</button>
                    </form>
                  <!--card-body ends--></div>

                
                
                <!--card ends--></div>
              <!--col-md-6 ends--></div>
         
            </div>
            </div>
            </div>
            
      </div>
       
      <SiteFooter></SiteFooter>
    </div>
</template>
<script>
import axios from 'axios';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import SiteNavigation from '../components/SiteNavigation';
export default {
   components:{
    SiteFooter,
    SiteHeader,
    SiteNavigation
  },
 data() {
   return {
     
    budgettype: "",
    amount: "",
    cardtype: ""
    
   };
 
 },
  methods: {
    postCards() {

      const apiUrl = "http://localhost:1337/cards";
      const headers = { "Content-Type": "application/json" };
      axios({
        url: apiUrl, 
        data: {
          budget_type: this.budgettype,
          amount:this.amount,
          card_type: this.cardtype
        },
        headers: headers,
        method: "POST",
        
      })
        .then((response) => {
            console.log(response.data);
            // this.budgettype = "",
            // this.amount = "",
            // this.cardtype = ""

        })
        .catch((err) => {
          console.log(err);
        });
    },

    cardCreated() {
         this.postCards();
         
    }

  },

  mounted() {
    this.postCards();
  }

    
      
    
}

</script>