<template>
	<div>
		<div class="body">
			<h1 id="titulo">PROJETOS</h1>
			<section id="section-galeria">
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
}

</script>

<style scoped>

#titulo
{
	padding: 0px;
	text-align: center;
	margin-top: 40px;
	font-family: 'Montserrat', sans-serif;
}

.section-panel {
	background-color: rgba(235, 233, 233);
}


.body
{
	background-color: white;
	min-height: 100vh;
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

#section-galeria {
	padding: 0px 10px;
	padding-bottom: 120px;
	max-width: 1300px;
	margin: 0 auto;
}
</style>