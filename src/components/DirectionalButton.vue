<template>
  <div
    class="d-flex flex-no-wrap align-items-center m-0"
    :class="{ 'flex-row-reverse': ! isOnRight  }"
    :style="getButtonPositionStyle"
    @click="onButtonClick"
  >
    <h4 class="m-2">{{ title }}</h4>
    <b-button class="border-0 bg-transparent text-dark m-0">
      <i class="fa-2x" :class="getButtonFontAwesomeIcon"></i>
    </b-button>
  </div>
</template>

<script>
export default {
    props: {
        isOnRight: {
            type: Boolean,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        to: {
            type: String,
            required: true,
        },
    },
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
    methods: {
        onButtonClick() {
            this.$emit('callback')
            this.$router.push(this.to)
        },
    },
}
</script>

<style scoped>
div {
    position: fixed;
    margin-top: 1em;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
}
@media screen and (max-width: 800px) {
    div {
        position: relative;
        top: auto;
        transform: none;
    }
}
</style>

