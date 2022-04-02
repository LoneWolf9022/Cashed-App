<template>
    <div>
          <nav class="sidebar sidebar-offcanvas" id="sidebar">
          <ul class="nav">
            <li class="nav-item nav-profile">
              <a href="#" class="nav-link">
                <div class="nav-profile-image">
                  <span class="login-status online"></span>
                  <!--change to offline or busy as needed-->
                </div>
               <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
              </a>
            </li>
          
            <li class="nav-item" style="margin-top:15px; text-decoration:none; color: #0000000; font-size:16px;">
              <NuxtLink to="/wallet">
                <span class="menu-title" style="margin-top:15px; text-decoration:none; color: #000000">Wallet</span>
                <i class="mdi mdi-contacts menu-icon"></i>
             </NuxtLink>
            </li>
            <li class="nav-item" style="list-style: none; margin-top:15px; text-decoration:none; color: #0000000; font-size:16px;">
                <NuxtLink to="/goals">
                <span class="menu-title" style="margin-top:15px; text-decoration:none; color: #000000">Goals</span>
                <i class="mdi mdi-format-list-bulleted menu-icon"></i>
              </NuxtLink>
              </li>
          
            <li class="nav-item" style="margin-top:15px; text-decoration:none; color: #0000000; font-size:16px;">
              <NuxtLink to="/GiftsandDonations">
                <span class="menu-title" style="margin-top:15px; text-decoration:none; color: #000000">Contribution</span>
                <i class="mdi mdi-chart-bar menu-icon"></i>
              </NuxtLink>
            </li>
            <li class="nav-item" style="margin-top:15px; text-decoration:none; color: #0000000; font-size:16px;">
              <NuxtLink to="/dashboard">
                <span class="menu-title" style="margin-top:15px; text-decoration:none; color: #000000">Settings</span>
                <i class="mdi mdi-table-large menu-icon"></i>
              </NuxtLink>
            </li>
          </ul>
        </nav>
    </div>
</template>
<script>

</script>