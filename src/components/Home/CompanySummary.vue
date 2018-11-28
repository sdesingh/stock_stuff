<template>
    
    <div id="summary">

        <div>Current Price: {{ data.currentPrice }} </div>
        <div>High: {{ data.highPrice }}</div>
        <div>Low: {{ data.lowPrice }}</div>
        <div>Change: {{ data.change }}</div>
        <div>Percent Change {{ (data.changePercent * 100).toFixed(2) }}% </div>

    </div>

</template>

<script>
    export default {
        props: ['data']
    }
</script>