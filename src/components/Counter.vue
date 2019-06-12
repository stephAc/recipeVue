<template>
  <div class="align-items-center border border-dark d-flex flex-nowrap rounded-pill">
    <b-button
      class="bg-transparent border-0 btn text-dark"
      style="margin-bottom: 2px;"
      @click="counter === 1 ? '' : counter--"
    >-</b-button>
    <p class="m-0">{{ counter }}</p>
    <b-button class="bg-transparent border-0 btn text-dark" @click="counter++">+</b-button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 1,
        }
    },
    watch: {
        counter: function(val) {
            this.$emit('onCounterUpdate', val)
        },
    },
}
</script>

<style scoped>
.btn:focus,
.btn:active .btn:focus,
.btn-secondary:not(:disabled):not(.disabled):active:focus,
.btn-secondary:not(:disabled):not(.disabled).active:focus,
.show > .btn-secondary.dropdown-toggle:focus {
    outline: none !important;
    box-shadow: none;
}
</style>
