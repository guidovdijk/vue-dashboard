<template>

  <div class="home">

    <h1 class="title">
      {{ title }}
    </h1>

    <h2 class="subtitle">
      {{ msg }}
    </h2>

    <div class="products">
      <ul>
        <h1>{{ options.title }}</h1>
        <div 
          v-for="(serie, key) in options.series" 
          v-bind:key="key">
          <li>
            {{ serie.name }}
            {{ serie.data }}
          </li>
        </div>
      </ul>
    </div>

  </div>

</template>

<script>
  var options = {
    title: 'Monthly Average Temperature',
    series: [{
      name: 'Tokyo',
      data: 700
    }, {
      name: 'New York',
      data: 700
    }, {
      name: 'Berlin',
      data: 700
    }, {
      name: 'London',
      data: 700
    }]
  };

  export default {
    name: 'Home',
    data() {
      return {
        title: 'Home',
        msg: 'Welcome to Your Vue.js App',
        options: options
      };
    },
  };

</script>
