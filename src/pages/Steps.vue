<template>
  <div class="d-flex flex-column justify-content-center align-items-center min-vh-100">
    <b-form action="#" class="d-flex flex-column w-50">
      <h4 class="mb-4">Étapes</h4>
      <b-form-input
        id="input-title"
        class="mb-4 rounded-pill"
        type="text"
        required
        placeholder="Nom de l'étape (optionnel)"
        v-model="newStepName"
        autofocus
      ></b-form-input>
      <b-form-textarea
        id="description"
        class="mb-4"
        placeholder="Description"
        rows="4"
        max-rows="6"
        v-model="newStepDescription"
        @keydown.prevent.enter="addStep"
        style="border-radius: 15px"
      ></b-form-textarea>
      <div class="d-flex justify-content-center">
        <b-button @click="addStep" class="rounded-pill">Ajouter l'étape</b-button>
      </div>
    </b-form>
    <draggable tag="ul" class="list-unstyled rounded shadow-sm p-3 w-50 mt-3" :list="stepList">
      <li
        class="d-flex flex-no-wrap align-items-center justify-content-between mb-3"
        v-for="(step, index) in stepList"
        v-bind:key="index"
      >
        <div class="d-flex flex-row flex-nowrap align-items-center">
          <small class="mr-4">{{ index + 1 }}</small>
          <div class="d-flex flex-column">
            <b>{{step.name}}</b>
            <p class="m-0">{{ step.description }}</p>
          </div>
        </div>
        <i class="fa fa-trash ml-4" aria-hidden="true" @click="removeStep(index)"></i>
      </li>
    </draggable>
    <DirectionalButton title="Ingrédients" :isOnRight="false" to="/recipe/create/ingredients"/>
    <DirectionalButton
      title="Créer"
      :isOnRight="true"
      :needRedirect="false"
      v-if="stepList.length > 0"
      @callback="dispatchNewRecipeInRecipeList"
      to="/"
    />
  </div>
</template>

<script>
import DirectionalButton from '@/components/DirectionalButton'
import draggable from 'vuedraggable'
import Swal from 'sweetalert2'
import { mapState } from 'vuex'

export default {
    components: {
        DirectionalButton,
        draggable,
    },
    data() {
        return {
            stepList: [],
            newStepName: '',
            newStepDescription: '',
        }
    },
    computed: {
        ...mapState(['recipes']),
        newStepObject() {
            return {
                name: this.newStepName,
                description: this.newStepDescription,
            }
        },
        isStepDescriptionNotEmpty() {
            return this.newStepDescription.trim() != ''
        },
    },
    methods: {
        addStep() {
            if (this.isStepDescriptionNotEmpty) {
                this.stepList.push(this.newStepObject)
                this.dispatchNewRecipeStepList()
                this.newStepName = ''
                this.newStepDescription = ''
            } else {
                Swal.fire(
                    'Erreur',
                    'La description ne peut pas être vide!',
                    'error'
                )
            }
        },
        removeStep(stepIndex) {
            Swal.fire({
                title: 'Confirmation',
                text: 'Êtes-vous sûr de vouloir supprimer cette étape ?',
                type: 'warning',
                customClass: 'confirm-alert',
                showCancelButton: true,
                confirmButtonText: "Oui, supprimer l'étape.",
                cancelButtonText: 'Non',
                confirmButtonClass: 'btn btn-danger m-10',
                cancelButtonClass: 'btn btn-block m-10',
                buttonsStyling: false,
            }).then(hasConfirm => {
                if (hasConfirm.value) this.stepList.splice(stepIndex, 1)
                this.dispatchNewRecipeStepList()
            })
        },
        dispatchNewRecipeStepList() {
            this.$store.dispatch('updateNewRecipeStepList', this.stepList)
        },
        dispatchNewRecipeInRecipeList() {
            this.$store.dispatch('addNewRecipeToRecipeList')
            this.$toasted.global.success({
                message: 'Création effectuée avec succès!',
            })
        },
    },
}
</script>

<style scoped>
ul:empty {
    display: none;
}

ul li:last-child {
    margin-bottom: 0 !important;
}

ul li {
    cursor: pointer;
}

ul li i:hover {
    color: #f56565;
    transition: color;
    transition-duration: 400ms;
}
</style>
