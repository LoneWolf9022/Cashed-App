<template>
  <div>
      <SiteHeader></SiteHeader>

      <div class="container-fluid page-body-wrapper">
       
      <SiteNavigation></SiteNavigation>

<!-- Font Awesome -->
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
  rel="stylesheet"
/>

      <!-- WALLET PAGE STARTS HERE-->
          <div class="main-panel">
          <div class="content-wrapper">
            <div class="row" style="margin-top:100px; margin-left:35px;">
              <div class="col-md-2 grid-margin mb-5">
                <div>
                  <div>
                            <span class="d-inline-block" style="margin-left:65px; margin-top:100px; margin-bottom:60px;">
                              <NuxtLink to="/createcards"><button class="font-weight-light d-block" style="color:black; text-decoration:underline; border-style:none"> + Add a card </button></NuxtLink>
                              </span>
                     
                    </div>
                  </div>
                </div>

               <!--Cashed Card BEGINS-->
              <div class="cashed-card" v-for="card in cards" :key="card.id">
                <div class="card bg-gradient-dark text-white">
                  <div class="card-body"> 
                     <i class="mdi mdi-close text-white"></i>
                    <h4 class="font-weight-normal mb-3">{{card.card_type}}</h4>
                    <h2 class="mb-5" style="color: e8ff11">{{card.amount}}</h2>
                    <h6 class="card-text" style="float:right">{{card.budget_type}}</h6>
                  </div>
                </div>
              </div>
             <!--Cashed Card ENDS-->
              <br>
              <!--Choose your card BEGINS-->
              <div class="col-lg-10 col-md-10" style="margin-top:80px;margin-left:400px;">
               <div>
               <div class="col-8 grid-margin stretch-card" style="margin-top:20px;" >
                <div class="card" >
                  <div class="card-body">
                    <h4 class="card-title">Choose your card</h4>
                    <p class="card-description"> Record your purchases...</p>
                    <form class="form-inline" >
                      <label class="sr-only" for="inlineFormInputName2">Merchant Name</label>
                      <input type="text" style="margin-right:20px" class="form-control mb-2 mr-sm-2 pt-4 pb-4" id="inlineFormInputName2" v-model="name" placeholder="Walmart" >
                      <label class="sr-only">Card Type</label>
                      <select class="form-control mb-2 mr-sm-2 ml-3 pt-1 pb-1" id="budgettype" v-model="type">
                        <option v-for="card in cards" :key="card.id" placeholder="Please select">{{card.card_type}}</option>
                      </select>
                      <label class="sr-only" for="inlineFormInputName2">Amount</label>
                      <input type="text" class="form-control mb-2 mr-sm-2 ml-3 pt-4 pb-4" id="inlineFormInputName2" v-model="amount" placeholder="$50" >{{card.card_amount}}
                      <label class="sr-only" for="inlineFormInputName2"></label>
                      <input type="date" style="color: lightgray;" class="form-control mb-2 mr-sm-2 ml-3 pt-4 pb-4" v-model="date" id="inlineFormInputName2">
                      <button type="submit" @click.prevent="submitted(); showTable();" class="btn btn-gradient-dark mb-2 ml-5" style="margin-left:10px; color:#e8ff11;">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
           </div>
           <!--Choose your Card ENDS-->
              <br>
            
<div class="col-lg-12 col-md-12 grid-margin" style="margin-top:10px">
                <div id="table-item" class="col-lg-12 col-md-12 grid-margin stretch-card table-entry" style="margin-top:10px">
                  <div class="card">
                   <div class="card-body">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Merchant Name</th>
                          <th>Card Type</th>
                          <th>Amount</th>
                           <th>Created On</th>
                          
                        
                        </tr>
                      </thead>
                      <tbody >
                        <tr v-for="entry in entries" :key="entry.id" >
                          <td>{{entry.MerchantName}}</td>
                          <td>{{entry.CardType}}</td>
                          <td>{{entry.Amount}}</td>
                          <td>{{entry.CreatedOn}}</td>
                        <td><button type="submit" @click="removeEntry(entry.id)" class="btn btn-gradient-dark mb-2" style="margin-left:10px; color:#e8ff11;">Delete</button></td>
                        </tr>
                        
                      </tbody>
                    </table>
                    </div>
                  </div>
                </div>
              </div>
              <img style="margin-left:1450px;float:right;" src="../assets/images/cashed_wallpaper.png" height="550px" width="750px"/>
           </div>
         </div>
        </div>
      </div>
  
       <!-- WALLET PAGE ENDS HERE-->
      

      <SiteFooter></SiteFooter>

  </div>
</template>

<script>
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import SiteNavigation from "../components/SiteNavigation";
import axios from "axios";


export default {
  
  components: {
    SiteFooter,
    SiteHeader,
    SiteNavigation
  },
    
  data() {
    return {
      name: "",
      date: "",
      type: "",
      amount: "",
      entries: [],
      entry: [],
      cards:[],
      card:[]
      
    };
    
  },
  methods: {
    loadItems() {
      const apiUrl = "http://localhost:1337/expenses";
      const options = {
        headers: { "Content-Type": "application/json" }
      };
    axios.get(apiUrl, options).then(
        (response) => {
          // console.log(response.data);
          this.entries = response.data;
          
        this.name = "",
        this.type = "",
        this.date = "",
        this.amount = ""
        },
        (error) => {
          console.log(error);
        });
       
    },
    postItems() {
     
      const apiUrl = "http://localhost:1337/expenses";
      const headers = { "Content-Type": "application/json" };
      axios({
        url: apiUrl,
        data: {
          MerchantName: this.name, 
          CardType: this.type,
          CreatedOn: this.date, 
          Amount: this.amount
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

    loadCards() {
      const apiUrl = "http://localhost:1337/cards";
      const options = {
        headers: { "Content-Type": "application/json" }
      };
    axios.get(apiUrl, options).then(
        (response) => {
          // console.log(response.data);
          this.cards = response.data;
          
        },
        (error) => {
          console.log(error);
        });
       
    },

    showTable(){
         document.getElementById("table-item").style.display = 'block';
           },

   submitted() {
      this.postItems();
      this.showTable();
      this.loadItems();
      this.loadCards();

      
      
      this.entries = this.entries.filter((obj) => {
       return obj.type;
       })
    // this.updateCard();
      
    },

    deleteData(id) {
      
      axios.delete("http://localhost:1337/expenses/" + id)
      .then(response => {
        this.entries.splice(id,1);

      })
      

    },

    removeEntry(id){
      this.entries = this.entries.filter((obj) => {
        return obj.id !== id;
        
      }),
       this.deleteData(id);
    }
 
     },
      
    

  mounted() {
  
    this.postItems();
    this.loadItems();
    this.loadCards();
   
    
   // CALCULATION FOR ENTRIES_TYPE AS CARDTYPE
   this.type = this.card_type;
  
  }

};
</script>


<style scoped>
@import "../assets/css/style.css";
.mb-5 {
  color: #e8ff11;
}
.table-entry{
  display:none;
}
.cashed-card{
  display:grid;
  grid-template-columns:repeat(1,350px);
  margin-right:40px;
  padding-right: 20px;
  grid-auto-rows:auto;
  margin-bottom:10px;
}



</style>