<template>
	<div></div>
</template>

<script>
var Highcharts = require('highcharts');


export default {
    name : "heatmap",
    props : {
      data : {
        type: Array,
        required: true
      },
      categories : {
        type: Array,
        required: true
      },
      type : {
          type: String,
          required: true
      }
	  },
  	data : function() {
      return {
        target: undefined
      }
    },
    mounted: function () {
      this.target = Highcharts.chart(this.$el, {
        chart: {
          type: 'heatmap',
          plotBorderWidth: 1
        },

        title: {
          text: null
        },

        xAxis: {
          categories: this.categories
        },

        yAxis: {
          categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          title: null
        },

        colorAxis: {
          min: 0,
          minColor: '#FFFFFF',
          maxColor: '#FF0000',
        },

        legend: {
          align: 'right',
          layout: 'vertical',
          margin: 0,
          verticalAlign: 'top',
          y: 25,
          symbolHeight: 280
        },

        tooltip: {
          formatter: function () {
            return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
              this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
          }
        },

        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
          }]
        },
        credits: {
          enabled: false
        },
        series: [{
            data: this.data,
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                color: '#000000'
            },
        }]
      });
    },
    beforeDestroy: function() {
      this.target.destroy();
    },
}
</script>