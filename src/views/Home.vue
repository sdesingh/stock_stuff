<template>
  <div class="home">
    
    <h1>Stock Stuff and Data</h1>
    <line-graph :height="150" :data="$store.state.stock_data" class="graph"/>


  </div>
</template>

<style scoped>



</style>




<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import LineGraph from '@/components/Graphs/LineGraph.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    LineGraph
  }
}
</script>
