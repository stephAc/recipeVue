<template>
  <div>
    <button class="btnNextStyle btnNextStyleLeft">
      <i style="color: white;" class="fas fa-chevron-left"></i>
    </button>
    <button class="btnNextStyle btnNextStyleRight">
      <i style="color: white;" class="fas fa-chevron-right"></i>
    </button>
  </div>
</template>
<script>
export default {
    name: 'BtnNext',
    data: function() {
        return {}
    },
    methods: {},
}
</script>
<style>
.btnNextStyle {
    border: none;
    background-color: black;
    width: 100px;
    opacity: 0.3;
    z-index: 5;
    position: absolute;
    top: 0;
    bottom: 0;
}
.btnNextStyleLeft {
    left: 0;
}
.btnNextStyleRight {
    right: 0;
}
</style>
