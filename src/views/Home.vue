<template>
  <div class="home">
    
    <div id="company-name"> {{$store.state.current_company_name }} </div>
    <input id="enter-company" type="text" @keyup.enter="change_name" v-model="company_name">
    <drop-down id="select-time" :options="$store.state.timeframes"/>
    <company-summary v-if="$store.state.retrieved" :data="$store.state.company_summary_data"/>
      
    <line-graph :height="90" :chartData="$store.state.stock_data" :options="options" class="graph"/>

  </div>
</template>

<style scoped>

  .graph {
    padding-top: 25px;
  }

  #company-name {
    font-size: 40px;
    font-weight: 600;
  }

  #company-symbol {
    font-size: 20px;
  }

  #select-time {
    margin: 0 10px;
  }

</style>


<script>
// @ is an alias to /src
import LineGraph from '@/components/Graphs/LineGraph.vue'
import GraphTemplates from '../components/Graphs/GraphTemplates.js'
import DropDown from '../components/Dropdown.vue'
import CompanySummary from '../components/Home/CompanySummary.vue'

export default {
  name: 'home',
  data() {
    return {
      company_name: '',
      options: GraphTemplates.CLEAN

    }
  },
  components: {
    LineGraph,
    DropDown,
    CompanySummary
  },
  methods: {
    change_name(){
      this.$store.commit('change_company', this.company_name)
      this.$store.dispatch('update_data')
    }
  }
}
</script>
