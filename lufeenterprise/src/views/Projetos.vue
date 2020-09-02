<template>
  <div>
    <div class="body">
        <h1 id="titulo">PROJETOS</h1>
        <section>
          <galeria-de-projetos class="galeria"></galeria-de-projetos>
        </section>
        
    </div>
    <rodape></rodape>
  </div>

    
</template>

<script>

import GaleriaProjetos from '../components/galeria-projetos/GaleriaProjetos.vue'
import ImagemResponsiva from '../components/shared/imagem-responsiva/ImagemResponsiva.vue'
import Footer from '../components/shared/footer/Footer.vue'

export default {

  components:{
    'galeria-de-projetos': GaleriaProjetos,
    'imagem-responsiva': ImagemResponsiva,
    'rodape': Footer
  },

  data(){
    return {}
  
  },

  created(){

  },
  
  methods:{


  }  
}

</script>

<style scoped>

#titulo
{
  padding: 0px;
  text-align: center;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
}

.body
{
  padding-top: 5%;
  background-color: white;
  min-height: 100vh;
}

.texto-banner
{
    position: absolute;
    top: 50%;
    left: 10%;
    color: white;
    background-color: rgba(0, 0, 0, 0.50);
    padding: 20px;
    border-radius: 20px;
}

.divisor-pagina
{
  display: block;
  height: 20px;
  border-bottom: solid 20px rgb(24, 24, 24);
  border-top: solid 20px rgb(24, 24, 24);
  transition: all 0.0001s both;
  margin: 30px 0;
}

h1
{
  font-size: 2.5em;
  padding: 0 5px 0 0;
}

h2
{
  padding: 5px 0 0 0;
}

li
{
  list-style: none;
}

.corpo
{
    width: 90%;
    margin: 0 auto;
}




</style>