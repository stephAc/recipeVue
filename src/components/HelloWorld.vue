<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <b-button to="/login">VERS LOGIN</b-button>
    </div>
    <PosterList style="margin-top: 20px;"/>
  </div>
</template>

<script>
import PosterList from './PosterList'
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Coucou tout le monde !',
        }
    },
    components: {
        PosterList,
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
