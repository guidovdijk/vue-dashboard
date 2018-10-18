<template>

    <div class="dashboard">

        <h1 class="title">
            {{ title }}
        </h1>

        <charts />

    </div>

</template>

<script>

    import charts from '../components/charts.vue';

    export default {
        name: 'dashboard',
        components: {
            charts: charts
        },
        data () {
            return {
                title: 'Dashboard',
            };
        },
        
    }

</script>
