<template>
  <div class="hello">
    <RecetteDuJour/>
    <PosterList style="margin: 20px 20px 0px 20px;"/>
  </div>
</template>

<script>
import PosterList from './PosterList'
import RecetteDuJour from './RecetteDuJour'

export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Coucou tout le monde !',
        }
    },
    components: {
        PosterList,
        RecetteDuJour,
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
