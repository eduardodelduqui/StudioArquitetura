<template>
    <div class="corpo">
        <h1 class="centralizado">Cadastro</h1>
        <form @submit.prevent="grava()" class="form-cadastro container">
            <div class="controle">
                <input v-model.lazy="foto.titulo" id="inputTitulo" type="text" name="titulo" placeholder="Título (Obrigatório)" autocomplete="off">
                    <!-- V-Model (bind two-ways) é uma simplificação de:
                    @input="foto.titulo = $event.target.value"
                    :value="foto.titulo" -->
            </div>
            <div class="controle">
                <input v-model.lazy="foto.url" id="inputURL" type="text" name="url" placeholder="URL (Obrigatório)"  autocomplete="off">
            </div>
            <b-img :src="foto.url" fluid></b-img>
            <div class="controle">
                <input v-model.lazy="foto.tipo" id="inputTipo" type="text" name="url" autocomplete="off">
            </div>
            <div class="controle">
                <textarea v-model="foto.descricao" id="areaDescricao" name="descricao" cols="30" rows="10" placeholder="Descrição"  autocomplete="off"></textarea>
            </div>  
            <div class="botoes">
                <meu-botao tipo="submit" titulo="Cadastrar"/>
            </div>
        </form>
    </div>
</template>


<script>

import Botao from '../components/shared/botao/Botao.vue'
import Foto from '../directives/domain/foto/Foto.js'
import GaleriaProjetos from '../components/galeria-projetos/GaleriaProjetos.vue'
import FotoService from '../directives/domain/foto/FotoService'

export default {

    data() {
        return {
            foto: new Foto(),
            id: this.$route.params.id /** Para recuperar o valor passado por parâmetro em routes.js */
        }
    },

    components:{
        'meu-botao': Botao,
        'minha-foto': Foto,
        'galeria-de-projetos': GaleriaProjetos
    },

    created(){
        this.service = new FotoService(this.$resource);

        if(this.id){
            this.service.busca(this.id)
            .then(foto => this.foto = foto);
        }
      
    },

    methods:{
        grava(){
            this.service.cadastra(this.foto)
            .then(() => this.foto = new Foto(), err => console.log(err));
        
        },
    },


}
</script>

<style>

.corpo{
    display: block;
    padding-top: 8%;
    margin: 0 auto;
}

.centralizado{
    text-align: center;
    color: white;
    font-size: 3em;
}

.form-cadastro{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
}

input, textarea, .controle{
    width: 100%;
    margin: 2px 0;
}
input{
    height: 20px;
}

textarea{
    height: 200px;
}








</style>