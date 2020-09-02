<template>
   <div class="body">
       <div class="conteudo">
           <div class="conteudo-item b-container">
                <b-row class="linha">
                    <b-col lg class="coluna">
                        <div class="conteudo-texto">
                                <h1>{{foto.titulo}}</h1>
                                <p>Tipo: N/D<br>
                                Escritório: StudioArquitetura<br>
                                Nome do projeto: {{foto.titulo}}<br>
                                Data do inicio do projeto: N/D<br>
                                Data de conclusão do projeto: N/D<br>
                                Localização: São Paulo, SP<br>
                                Área: N/D</p>
                        </div>
                    </b-col>
                    <b-col lg class="coluna">
                            <div class="conteudo-foto container">
                                <b-img thumbnail="" :src="foto.url"></b-img>
                            </div>
                    </b-col>
                </b-row>
            </div>
            <div class="galeria">
                <galeria :idNaoListar="id"></galeria>
            </div>
            <Footer/>
       </div>
   </div>

</template>

<script>

import Foto from '../directives/domain/foto/Foto.js';
import FotoService from '../directives/domain/foto/FotoService.js';
import GaleriaProjetos from '../components/galeria-projetos/GaleriaProjetos.vue';
import Footer from '../components/shared/footer/Footer.vue'

export default {

    components: {
        'galeria': GaleriaProjetos,
        Footer
    },

    data() {
        return {
            foto: new Foto(),
            id: this.$route.params.id
        }
    },

    created () {

        this.service = new FotoService(this.$resource);


         if(this.id){
            this.service.busca(this.id)
            .then(foto => this.foto = foto);
        };
    },
    watch: {
        $route(to, from) {
            if(to !== from){
                location.reload();
            } 
        } 
    }

}
</script>

<style scoped>

.body
{
    position: absolute;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}

.linha{
    width: 100%;
}

.conteudo
{
    position: relative;
    display: block;
    top: 56px;
}
.conteudo-item
{
    background-color: rgb(235, 233, 233);
}

h1
{
    word-wrap: break-word;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.conteudo-texto
{
    padding: 5% 10%;
}


</style>