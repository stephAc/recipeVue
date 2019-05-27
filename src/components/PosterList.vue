<template>
  <div class="listDisplay">
    <PosterDiv v-for="n in 20" :key="n"/>
  </div>
</template>

<script>
import PosterDiv from './PosterDiv'
export default {
    name: 'Poster',
    data: function() {
        return {
            n: 0,
        }
    },
    methods: {},
    components: {
        PosterDiv,
    },
}
</script>

<style>
.listDisplay {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: scroll;
}
</style>