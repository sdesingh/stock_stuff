<template>
  <div class="home">
    
    <h1>{{$store.state.current_company_name }}</h1> <h3> {{$store.state.company_symbol}} </h3>
    <line-graph :height="100" :chartData="$store.state.stock_data" class="graph"/>

    Company Name: <input type="text" @keyup.enter="change_name" v-model="company_name">
  </div>
</template>

<style scoped>

  .graph {
    
  }

</style>




<script>
// @ is an alias to /src
import LineGraph from '@/components/Graphs/LineGraph.vue'

export default {
  name: 'home',
  data() {
    return {
      company_name: ''
    }
  },
  components: {
    LineGraph
  },
  methods: {
    change_name(){
      this.$store.commit('change_company', this.company_name)
      this.$store.dispatch('update_data')
    }
  }
}
</script>
