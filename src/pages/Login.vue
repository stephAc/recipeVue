<template>
  <div>
    <div class="loginGrid">
      <div class="borderRight">
        <div>
          <b-button pill class="marginBottom communWidth">
            <i class="fab fa-facebook-square"></i>
            Connexion via Facebook
          </b-button>
          <br>
          <b-button pill class="marginBottom communWidth">
            <i class="fab fa-google"></i>
            Connexion via Google
          </b-button>
          <br>
          <b-button pill class="marginBottom communWidth">
            <i class="fab fa-twitter"></i>
            Connexion via Twitter
          </b-button>
        </div>
        <b-button pill class="marginTop communWidth">Pas encore inscrit ?</b-button>
      </div>
      <div class="flexInput">
        <div>
          <b-form-input type="email" class="communWidth" placeholder="E-mail" v-model="email"></b-form-input>
          <br>
          <b-form-input
            type="password"
            class="communWidth"
            placeholder="Mot de passe"
            v-model="mdp"
          ></b-form-input>
        </div>
        <b-button pill class="communWidth" style="margin-top: 40px">Se connecter</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data: function() {
        return {
            email: null,
            mdp: null,
        }
    },
}
</script>

<style>
.flexInput {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.communWidth {
    width: 300px;
}
.marginBottom {
    margin-bottom: 20px;
}
.marginTop {
    margin-top: 40px;
}
.borderRight {
    border-right: 1px solid;
}
.loginGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 645px) {
    .loginGrid {
        grid-template-columns: 1fr;
        grid-gap: 50px;
    }
    .borderRight {
        border: none;
    }
    .marginTop {
        margin-top: 0px;
    }
}
</style>