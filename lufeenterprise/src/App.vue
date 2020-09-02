<template>
    <div>
      <header>
        <BarraNavegacao :rotas="routes"></BarraNavegacao>
      </header>
      <!-- <div class="banner"> -->
      <transition name="pagina" mode="out-in">
        <router-view></router-view>
      </transition>
      <!-- </div> -->
    </div>
</template>

<script>

import BarraNavegacao from '../src/components/shared/BarraNavegacao/BarraNavegacao.vue';
import {routes} from '../src/routes.js'

export default {
  
  components:{
    BarraNavegacao
  },

  data () {
    return {
      routes: routes.filter(route => route.menu)/** "menu" é o nome dado em routes.js quando a rota for visivel(true) ou não(false) na barra de navegação */
    }
  }
}
</script>

<style>

html, body
{
    height:100%;
    margin: 0;
    padding: 0;
    background-color: rgb(255, 255, 255);
    
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



.pagina-enter, .pagina-leave-to{
    opacity: 0%;
}

.pagina-enter-active, .pagina-leave-active{
    transition: opacity 0.15s;
}

li{
  list-style: none;
}


</style>
