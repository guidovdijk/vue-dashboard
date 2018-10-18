<template>
	<div></div>
</template>

<script>
var Highcharts = require('highcharts');

export default {
    name : "column",
    props : {
      data : {
        type: Array,
        required: true
      },
      categories: {
        type: Array,
        required: true
      },
	  },
  	data : function() {
      return {
        target: undefined
      }
    },
    mounted : function() {
      this.target = Highcharts.chart(this.$el, {
        chart: {
            type: 'spline',
        },
        title: {
          text: null,
        },

        xAxis: {
          categories: this.categories,
        },
        yAxis: {
          title: {
          text: 'All requested Tickets'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
  	        borderWidth: 0
      },
      credits: {
        enabled: false
      },
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            xAxis: {
              labels: {
                formatter: function () {
                  return this.value.charAt(0);
                }
              }
            },
          }
        }]
      },
      series: this.data,
    });
  },
  beforeDestroy: function() {
    this.target.destroy();
  },
}
</script>