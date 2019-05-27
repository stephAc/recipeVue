<template>
  <div class="poster">{{number}}</div>
</template>

<script>
export default {
    name: 'Poster',
    props: ['number'],
    data: function() {
        return {}
    },
    methods: {},
}
</script>

<style>
.poster {
    height: 250px;
    width: 250px;
    min-width: 250px;
    margin-right: 10px;
    background-color: aqua;
}
</style>