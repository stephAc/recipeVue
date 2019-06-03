<template>
  <div>
    <button v-if="left" class="btnNextStyle btnNextStyleLeft" @click="btnLeft($event)">
      <i style="color: white;" class="fas fa-chevron-left"></i>
    </button>
    <button v-if="right " class="btnNextStyle btnNextStyleRight" @click="btnRight($event)">
      <i style="color: white;" class="fas fa-chevron-right"></i>
    </button>
  </div>
</template>
<script>
export default {
    name: 'BtnNext',
    props: { right: { type: Boolean }, left: { type: Boolean } },
    data: function() {
        return {}
    },
    methods: {
        btnRight(event) {
            this.$emit('right_btn')
        },
        btnLeft(event) {
            this.$emit('left_btn')
        },
    },
}
</script>
<style>
.btnNextStyle {
    height: calc(100% - 8px);
    border: none;
    background-color: black;
    width: 100px;
    opacity: 0.2;
    z-index: 5;
    position: absolute;
    top: 0;
    bottom: 0;
}
.btnNextStyleLeft {
    left: 0;
}
.btnNextStyleLeft:hover {
    opacity: 0.6;
}
.btnNextStyleRight {
    right: 1px;
}
.btnNextStyleRight:hover {
    opacity: 0.6;
}
</style>
