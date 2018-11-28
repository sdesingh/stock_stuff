<template>
  <div id="app">
    <navigation-bar/>
    <router-view/>
  </div>
</template>


<script>
  import NavigationBar from './components/NavigationBar.vue'

  export default {
    components: {
      NavigationBar
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;

}

body {
  margin: 0 5%;
}
</style>
