<template>
  <div class="d-flex flex-column justify-content-center align-items-center min-vh-100">
    <b-form @submit="onSubmit" class="d-flex flex-column">
      <h4 class="mb-4">Informations générales</h4>
      <b-form-input
        id="input-title"
        class="mb-4 rounded-pill"
        v-model="form.title"
        type="text"
        required
        placeholder="Titre"
        autofocus
      ></b-form-input>
      <b-form-select class="mb-4 rounded-pill" v-model="originSelected" :options="origins"></b-form-select>
      <div class="mb-4 align-items-center d-flex justify-content-between">
        <p class="mb-0">Nombre de personnes</p>
        <Counter class="ml-2"/>
      </div>
      <b-form-textarea
        id="description"
        class="mb-4"
        v-model="description"
        placeholder="Description de la recette"
        rows="4"
        max-rows="6"
        style="border-radius: 15px"
      ></b-form-textarea>
      <div
        class="creation__image mb-4"
        v-show="photoUrl !== null"
        :style="{ 'background-image': 'url(' + photoUrl + ')' }"
        alt="Image"
      />
      <b-button id="pick-files" class="rounded-pill">Importer une image</b-button>
    </b-form>
    <DirectionalButton title="Ingrédients" :isOnRight="true" to="/recipe/create/ingredients"/>
  </div>
</template>

<script>
import Counter from '@/components/Counter'
import DirectionalButton from '@/components/DirectionalButton'
import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import Tus from '@uppy/tus'
import Webcam from '@uppy/webcam'
import FrenchLocale from '@uppy/locales/lib/fr_FR'
import '@uppy/dashboard/dist/style.css'
import '@uppy/core/dist/style.css'
import '@uppy/webcam/dist/style.css'

export default {
    name: 'Creation',
    components: {
        Counter,
        DirectionalButton,
    },
    data() {
        return {
            form: {},
            originSelected: null,
            description: '',
            origins: [
                { value: null, text: 'Origine' },
                { value: 'francaise', text: 'Origine française' },
                { value: 'italienne', text: 'Origine italienne' },
            ],
            photoUrl: null,
        }
    },
    methods: {
        onSubmit(evt) {},
    },
    mounted() {
        const uppy = Uppy({
            autoProceed: false,
            restrictions: {
                maxNumberOfFiles: 1,
            },
        })
            .use(Dashboard, {
                trigger: '#pick-files',
                proudlyDisplayPoweredByUppy: false,
                closeAfterFinish: true,
                locale: FrenchLocale,
            })
            .use(Tus, { endpoint: 'https://master.tus.io/files/' })
            .use(Webcam, { target: Dashboard, modes: ['picture'] })
            .on('complete', result => {
                const pictureUrl = result.successful[0].uploadURL
                this.photoUrl = pictureUrl
            })
    },
}
</script>

<style scoped>
.creation__image {
    width: 250px;
    height: 250px;
    background-position: center;
    background-size: cover;
}
</style>
