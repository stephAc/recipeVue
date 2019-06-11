<template>
  <div class="content d-flex justify-content-center align-items-center">
    <b-card>
      <avatar
        :fullname="pseudo ? pseudo : 'Recette'"
        :size=75>
      </avatar>
      <b-form-group
        id="fieldset-1"
        label="Pseudo"
        label-for="input-1"
        :invalid-feedback="invalidPseudo"
        :state="statePseudo"
      >
        <b-form-input
          id="input-1"
          placeholder="Ton pseudo"
          v-model="pseudo"
          :state="statePseudo"
          trim
        >
        </b-form-input>
      </b-form-group>
      <b-form-group
        id="fieldset-2"
        label="Adresse e-mail"
        label-for="input-2"
        :invalid-feedback="invalidMail"
        :state="stateMail"
      >
        <b-form-input
          id="input-2"
          placeholder="Ton adresse email"
          v-model="mail"
          :state="stateMail"
          trim
        >
        </b-form-input>
      </b-form-group>
      <b-form-group
        id="fieldset-3"
        label="Mot de passe"
        label-for="input-2"
        :invalid-feedback="invalidPass"
        :state="statePass"
      >
        <b-form-input
          id="input-3"
          placeholder="Ton mot de passe"
          type="password"
          v-model="pass"
          :state="statePass"
          trim
        >
        </b-form-input>
      </b-form-group>
      <b-button
        pill variant="outline-secondary"
        :disabled="isOk"
        @click="persist">
        Modifier le profil
        </b-button>
    </b-card>
  </div>
</template>

<script>
import Avatar from 'vue-avatar-component'
export default {
    components: { Avatar },
    name: 'Profile',
    computed: {
      statePseudo() {
        return this.pseudo.length >= 2 ? true : false
      },
      invalidPseudo() {
        if (this.pseudo.length > 2) {
          return ''
        } else if (this.pseudo.length > 0) {
          return 'Il faut au moins 2 caractères !'
        } else {
          return 'Merci de saisir un pseudo !'
        }
      },
      stateMail() {
        return this.mail.length >= 5 ? true : false
      },
      invalidMail() {
        if (this.mail.length > 5) {
          return ''
        } else if (this.mail.length > 0) {
          return 'Il faut au moins 5 caractères ! (format "toto@test.com")'
        } else {
          return 'Merci de saisir une adresse e-mail ! (format "toto@test.com")'
        }
      },
      statePass() {
        return this.pass.length >= 4 ? true : false
      },
      invalidPass() {
        if (this.pass.length > 4) {
          return ''
        } else if (this.pass.length > 0) {
          return 'Il faut au moins 4 caractères !'
        } else {
          return 'Merci de saisir un mot de passe !'
        }
      },
      isOk() {
        return !(this.statePseudo && this.stateMail && this.statePass)
      },
    },
    mounted() {
      if(sessionStorage.pseudo) {
        this.pseudo = sessionStorage.pseudo;
      }
      else {
        this.pseudo = 'ZeFrenchCuistot';
      }
      if(sessionStorage.mail) {
        this.mail = sessionStorage.mail;
      }
      else {
        this.mail = 'zefrench@cuistot.fr';
      }
      if(sessionStorage.pass) {
        this.pass = sessionStorage.pass;
      }
      else {
        this.pass = 'password';
      }
    },
    methods: {
      persist() {
        sessionStorage.pseudo = this.pseudo;
        sessionStorage.mail = this.mail;
        sessionStorage.pass = this.pass;
      }
    },
    data() {
      return {
        mainProps: { width: 75, height: 75, class: 'm1' },
        pseudo: '',
        mail: '',
        pass: ''
      }
    }
}
</script>

<style scoped>
  .content {
    height: 100vh;
  }

  .card {
    text-align: center;
    max-width: 20rem;
  }

  img {
    border: solid 1px;
    margin-bottom: 2em;
  }

  input {
    text-align: center;
  }

</style>
