<template>
  <div>
      <b-carousel
        id="carousel-fade"
        v-model="slide"
        :interval="5000"
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        fade
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->

        <b-carousel-slide img-src="src\assets\carousel-1.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="src\assets\carousel-2.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="src\assets\carousel-3.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="src\assets\carousel-4.jpg"></b-carousel-slide>
        <div class="titulo-pagina">
            <p class="focus-in-expand"><spam style="color: black">STUDIO</spam>A<spam class="tracking-out-contract">RQUITETURA</spam></p>
        </div>
      </b-carousel>
      
      <section class="escritorio" id="scroll-to">
        <h2 class="titulo-section">Escritório</h2>
        <b-container class="escritorio-conteudo container">
          <b-row>
            <b-col lg class="escritorio-video">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/tIvGwZp8Ajs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </b-col>
            <b-col lg class="escritorio-texto">
              <p>
                O StudioA oferece aos clientes projetos personalizados. A arquiteta Clodovalda possui amplo repertório desenvolvido ao longo dos anos. 
                Com projetos residenciais, edificações e projetos urbanos em vários estados do país, Clodovalda tem como premissa captar os desejos do cliente  ou grupo familiar, 
                pensando no convívio e na qualidade de cada espaço.
              </p>
              <p>
                Com olhar apurado e propostas inovadoras, a equipe do StudioA absorve e considera tanto a cultura local, a cultura familiar/corporativa e os elementos físicos e naturais do terreno. 
                O resultado são projetos contemporâneos, customizados e na medida para o contexto em que foi criado.
              </p>
            </b-col>
          </b-row>
        </b-container>
      </section>
        <galeria-de-projetos campoFiltro="campoFiltro" class="galeria"></galeria-de-projetos>
        <rodape></rodape>
  </div>
</template>

<script>

import GaleriaProjetos from '../components/galeria-projetos/GaleriaProjetos.vue';
import Footer from '../components/shared/footer/Footer.vue';

  export default {
    components:{
      'galeria-de-projetos': GaleriaProjetos,
      'rodape': Footer
    },

    data() {
      return {

      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    },

    created(){
    }
  }
</script>

<style scoped>

.titulo-pagina
{
  position: absolute;
  bottom: 35%;
  left: 50%;
  color: white;
  font-size: 90px;
  text-align: center;
  transform: translate(-48%, -80%);
  z-index: 10;
  text-shadow:
  -1px -1px 0 rgb(255, 255, 255, 0.1),  
    1px -1px 0 rgb(255, 255, 255, 0.1),
  -1px  1px 0 rgb(255, 255, 255, 0.1),
    1px  1px 0 rgb(255, 255, 255, 0.1);
}

.titulo-section
{
  text-align: center;
  padding: 30px 0;
  font-family: 'Montserrat', sans-serif;
}

.galeria
{
  background-color: #ffdf7e;
  padding-bottom: 50px;
}

.escritorio
{
  background-color: #ffefb9;
}


.escritorio-texto
{
  text-align: justify;
  font-size: 20px;
  visibility: visible;
}

.tracking-out-contract
{
  -webkit-animation: tracking-out-contract 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) 3s both;
  animation: tracking-out-contract 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) 3s both;
  border-bottom: 2;
}
.focus-in-expand
{
  -webkit-animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes tracking-out-contract {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;

  }
  100% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
}
@keyframes tracking-out-contract {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
}
@-webkit-keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}

@media(max-width: 992px){

  .escritorio-texto{
    padding:20px 0px;
  }
  
  
}


</style>