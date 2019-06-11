<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="#">
        <img
          src="../assets/logo.png"
          class="d-inline-block align-top"
          alt="Kitten"
          height="32"
          width="40"
        > Mes Recettes
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav></b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              Se connecter / S'inscrire
              <i class="fas fa-user-circle fa-lg"></i>
            </template>
            <b-dropdown-item to="/profile">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Se déconnecter</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style>
.navbar-light {
    background-color: #f7f1eb;
}
</style>
