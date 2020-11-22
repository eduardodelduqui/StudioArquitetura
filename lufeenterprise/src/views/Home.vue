<template>
  <div>
      	<div class="page-title">
			<div class="title-text">
        		<h1 class="slide-in-left">Studio</h1><h1 class="slide-in-right"> Arquitetura</h1>
			</div>
			<span class="text-focus-in">Projetando sonhos desde 1500 a.c</span>
      	</div>
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
			<b-carousel-slide img-src="src\assets\carousel-1.jpg"></b-carousel-slide>
			<b-carousel-slide img-src="src\assets\carousel-2.jpg"></b-carousel-slide>
			<b-carousel-slide img-src="src\assets\carousel-3.jpg"></b-carousel-slide>
			<b-carousel-slide img-src="src\assets\carousel-4.jpg"></b-carousel-slide>
		</b-carousel>
    	<section id="section-escritorio">
        <h2 class="titulo-section">Escritório</h2>
        <b-container class="escritorio-conteudo">
          <b-row>
            <b-col lg class="escritorio-video">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/tIvGwZp8Ajs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </b-col>
            <b-col lg class="escritorio-texto">
              <p>
                O StudioArquitetura oferece aos clientes projetos personalizados. A arquiteta Clodovalda possui amplo repertório desenvolvido ao longo dos anos. 
                Com projetos residenciais, edificações e projetos urbanos em vários estados do país, Clodovalda tem como premissa captar os desejos do cliente  ou grupo familiar, 
                pensando no convívio e na qualidade de cada espaço.
              </p>
              <p>
                Com olhar apurado e propostas inovadoras, a equipe do StudioArquitetura absorve e considera tanto a cultura local, a cultura familiar/corporativa e os elementos físicos e naturais do terreno. 
                O resultado são projetos contemporâneos, customizados e na medida para o contexto em que foi criado.
              </p>
            </b-col>
          </b-row>
        </b-container>
    	</section>
    	<section id="section-galeria">
        <div class="section-container">
          <h2 class="titulo-section">Projetos</h2>
          <galeria-de-projetos campoFiltro="campoFiltro"></galeria-de-projetos>
        </div>
    	</section>
      <footer>
    	  <rodape></rodape>
      </footer>
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
        slide: 0
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
  }
</script>

<style scoped>

.page-title {
	text-align: center;
	background-color: rgba(235, 233, 233);
	padding-top: 100px;
	padding-bottom: 100px;
}

.title-text {
	display: flex;
	flex-wrap: wrap;
	letter-spacing: 5px;
	justify-content: center;
}

.page-title span {
	color: #888888;
}

.titulo-pagina
{
  display: block;
  text-align: center;
}

.titulo-section
{
  text-align: center;
  padding: 30px 0;
  font-family: 'Montserrat', sans-serif;
}

#section-escritorio
{
  padding: 10px;
}

#section-galeria
{
  background-color: rgba(235, 235, 235, 0.5);
  padding-top: 10px;
  padding-bottom: 120px;
}

.section-container {
	max-width: 1300px;
	margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
}

.escritorio-video {
  padding: 0px;
}

.escritorio-texto
{
  text-align: justify;
  font-size: 20px;
  visibility: visible;
}

.slide-in-left {
	-webkit-animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.slide-in-right {
	-webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.text-focus-in {
	-webkit-animation: text-focus-in 0.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1s both;
	        animation: text-focus-in 0.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1s both;
}

@media(max-width: 1000px){

  .escritorio-texto{
    padding:20px 0px;
  }
}

@media (max-width: 600px) {
  .escritorio-texto {
    font-size: 16px;
  }
}
	
@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}

@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}

@-webkit-keyframes text-focus-in {
  0% {
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
@keyframes text-focus-in {
  0% {
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
</style>