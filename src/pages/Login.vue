<template>
  <div class="fullpage">
    <div class="centerDiv">
      <div class="loginGrid">
        <div class="borderRight flexInput">
          <div>
            <b-button pill class="flexBtn marginBottom communWidth">
              <i class="fab fa-facebook-f"></i>
              Connexion via Facebook
            </b-button>
            <b-button pill class="flexBtn marginBottom communWidth">
              <i class="fab fa-google"></i>
              Connexion via Google
            </b-button>
            <b-button pill class="flexBtn marginBottom communWidth">
              <i class="fab fa-twitter"></i>
              Connexion via Twitter
            </b-button>
          </div>
          <b-button pill class="marginTop communWidth">Pas encore inscrit ?</b-button>
        </div>

        <form class="flexInput" @submit.prevent="onSubmit">
          <div style="display: flex; flex-direction: column;">
            <b-form-input
              type="email"
              class="communWidth marginBottom"
              placeholder="E-mail"
              v-model="email"
            ></b-form-input>
            <br>
            <b-form-input
              type="password"
              class="communWidth"
              placeholder="Mot de passe"
              v-model="mdp"
            ></b-form-input>
          </div>
          <b-button
            pill
            class="communWidth"
            type="submit"
            value="Submit"
            style="margin-top: 40px"
          >Se connecter</b-button>
        </form>
      </div>
      <div style="display: flex; margin-top: 50px;">
        <b-button
          to="/"
          pill
          class="communWidth"
          style="margin-left:auto; margin-right: auto"
        >Page d'accueil</b-button>
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
    methods: {
        onSubmit() {
            let userConnection = {
                email: this.email,
                mdp: this.mdp,
            }
            alert(userConnection.email + ' ' + userConnection.mdp)
        },
    },
}
</script>

<style>
.fullpage {
    height: 100vh;
    width: 100vw;
    display: flex;
}
.centerDiv {
    width: 100%;
    align-self: center;
}
.flexInput {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.flexBtn {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
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