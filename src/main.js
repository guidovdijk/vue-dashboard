// Init vue
import Vue from 'vue';
// Highchart
import HighchartsVue from 'highcharts-vue';
import Highcharts from 'highcharts';
import Heatmap from 'highcharts/modules/heatmap';
// Vue files
import App from './App';
import router from './router';
import './../node_modules/bulma/css/bulma.css';
import './assets/styles/style.scss';

// Init highchart and Heatmap
Vue.use(HighchartsVue, { Highcharts });
Heatmap(Highcharts);

export let serverBus = new Vue();

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
