<template>
  
  <div id="app">
  
    <section class="hero">
  
      <div class="column is-2 nav-wrapper">

        <navigation/>

      </div>
  

      <div class="hero-body">

        <div class="container">
  
          <div class="column is-10 is-offset-2">

            <router-view/>

          </div>

        </div>

      </div>
  
    </section>

  </div>

</template>


<script>
  import navigation from "./components/navigation.vue";

  export default {
  
    name: 'App',
  
    components: {
  
      navigation
  
    }
  
  };
</script>
