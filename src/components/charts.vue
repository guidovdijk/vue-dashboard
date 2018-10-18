<!-- 
    COMPONENT
        *is: Which chart component will be used
        *categories: the values of the xAxis of the chart
        *data: The data that will be shown in the chart

-->

<template>
    <div>
        <div v-if="isLoading">
            loading
        </div>
        <div v-if="!isLoading" class="cards">
            <div class="card" v-bind:key="key" v-for="(chart, key) in charts">
                <header class="card-header">
                    <p class="card-header-title">
                        {{ charts[key].title }}
                    </p>
                </header>
                <div class="card-content">
                    <component 
                        :is="charts[key].type" 
                        :categories="charts[key].xAxis.categories" 
                        :data="charts[key].data" ref="highcharts">
                    </component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { serverBus } from '../main';

    import heatmap from '../components/charts/heatmap.vue';
    import column from '../components/charts/column.vue';
    import spline from '../components/charts/spline.vue';
    
    export default {
        name: 'charts',
        props: ['chartType'],
        components: {
            column,
            heatmap,
            spline
        },
        data: function() {
            return {
                isLoading: false,
                selected: null,
                charts: [],
            };
        },
        mounted: function(){
            // console.log(this.allData.data);                
            
            // setTimeout(() => {
            //     this.isLoading = false;
            // }, 500);
        },
         created() {
            let self = this;
            // Using the service bus
            serverBus.$on('serverSelected', (selected) => {
                this.selected = selected;
                self.init();
            });
        },
        methods: {
            init: function(){
                this.charts = [];
                this.fetchHeatmapData('../../static/generated-2.json');
                this.fetchColumnData('../../static/generated.json');
                this.fetchSplineData('../../static/generated.json');
            },
            fetchColumnData: function(url){
                let chartData = {}

                chartData = {
                    title: null,
                    type: 'column',
                    data: [
                    ],
                    xAxis: {
                        categories: ['Jan', 'Fabian', 'Mark', 'April', 'May', 'Junn', 'Julia', 'Augustus', 'Stephan', 'Oliver', 'Naomi', 'Dirk']
                    }
                }


                this.getJson(url, chartData);

            },
            fetchSplineData: function(url){
                let chartData = {}

                chartData = {
                    title: null,
                    type: 'spline',
                    data: [
                    ],
                    xAxis: {
                        categories: ['Jan', 'Fabian', 'Mark', 'April', 'May', 'Junn', 'Julia', 'Augustus', 'Stephan', 'Oliver', 'Naomi', 'Dirk']
                    }
                }


                this.getJson(url, chartData);

            },
            fetchHeatmapData: function(url){
                let chartData = {}
                let wrap = true;
                chartData = {
                    title: null,
                    type: 'heatmap',
                    data: [
                    ],
                    xAxis: {
                        categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
                    },
                }
                
                this.getJson(url, chartData, wrap);

            },

            getJson: function(u, c, w){
                var self = this;
                fetch(u).then(function(response) { 
                    return response.json();
                })
                .then(function(response) {
                    if(w){
                        c.data = response.data;
                        c.title = response.titles[self.selected];
                    } else {
                        c.title = response.titles[self.selected];
                        for (let i = 0; i < response.Argentina.length; i++) {
                            c.data[i] = new Array()
                            c.data[i].data = response[self.selected][i];
                            c.data[i].name = response.name[i];
                        }
                    }
                })
                .then(function(){
                    self.charts.push(c);
                })
                .catch(function(response) {
                    console.log("error", response);
                });
            }
        }
    }

</script>
