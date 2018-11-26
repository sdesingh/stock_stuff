<template>
  
  <select v-model="selected" @change="change_selection">
    <option v-for="option in options" v-bind:value="option"> {{ option }} </option>
  </select>


</template>

<script>
  export default {
    data() {
      return {
        selected: '1Y'
      }
    },
    methods: {
      change_selection(){
        this.$store.commit('change_timeframe', this.selected)
      }
    },
    props: ['options']
  }
</script>