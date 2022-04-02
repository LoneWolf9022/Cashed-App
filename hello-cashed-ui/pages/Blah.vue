  <!--Cashed Card BEGINS-->
              <div class="col-lg-2 col-sm-2 col-md-2 grid-margin" v-for="card in cards" :key="card.id">
                <div class="card bg-gradient-dark text-white">
                  <div class="card-body"> 
                     <i class="mdi mdi-close"></i>
                    <h4 class="font-weight-normal mb-3">{{card.card_type}}</h4>
                    <h2 class="mb-5" style="color: e8ff11">{{card.amount}}</h2>
                    <h6 class="card-text" style="float:right">{{card.budget_type}}</h6>
                  </div>
                </div>
              </div>
             <!--Cashed Card ENDS-->