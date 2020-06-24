<template>
  <div class="img-fundo">
    <div class="corpo">
    <menu-navegacao :rotas="routes"></menu-navegacao>
    <router-view></router-view>
    <img src="./assets/logo.png">
    <h1></h1>
    <h2>Essential Links</h2>
    
    
    </div>
  </div>
</template>

<script>

import Menu from '../src/components/shared/menu/Menu.vue';
import {routes} from '../src/routes.js'

export default {
  
  components:{
    'menu-navegacao': Menu
  },

  data () {
    return {
      routes: routes
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

.img-fundo{
    background: url('assets/banner-website.jpg') no-repeat;
    background-size: cover;
    display: block;
    min-width: 970px;
    
  
}
</style>
