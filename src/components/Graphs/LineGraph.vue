<script>
    
    import { Line } from 'vue-chartjs'

    export default {
        extends: Line,
        props: ['data', 'options'],
        mounted(){
            // Render the chart using the passed in data/options.
            this.renderChart(this.data, this.options)
        }
    }
</script>