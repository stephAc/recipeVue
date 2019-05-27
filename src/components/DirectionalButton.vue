<template>
  <div
    class="d-flex flex-no-wrap align-items-center"
    :class="{ 'flex-row-reverse': ! isOnRight  }"
    :style="getButtonPositionStyle"
  >
    <h4 class="m-2">{{ title }}</h4>
    <b-button class="border-0 bg-transparent text-dark" :to="to">
      <i class="fa-2x" :class="getButtonFontAwesomeIcon"></i>
    </b-button>
  </div>
</template>

<script>
export default {
    props: ['isOnRight', 'title', 'to'],
    computed: {
        getButtonFontAwesomeIcon() {
            return this.isOnRight
                ? 'fas fa-arrow-circle-right'
                : 'fas fa-arrow-circle-left'
        },
        getButtonPositionStyle() {
            return this.isOnRight ? 'right: 0' : 'left: 0'
        },
    },
}
</script>

<style scoped>
div {
    position: fixed;
    margin-top: 1em;
}
@media screen and (max-width: 700px) {
    div {
        position: relative;
    }
}
</style>

