<template>
    <section class="projetos">
        <div class="busca" :class="campoFiltro">
            <label for="inputBusca"></label>
            <input type="search" class="campo-busca" id="inputBusca" placeholder="Filtrar" @input="filtro = $event.target.value" autocomplete="off">
        </div>
        <div class="filtros" :class="campoFiltro">
            <FiltroGaleria/>

        </div>
        <b-container fluid class="projetos-conteudo">
            <li v-for="foto in fotosComFiltro">
                <!-- Adicionar v-if="foto._id != idNaoListar" para não listar -->
                <router-link :to ="{name: 'item', params: {id: foto._id}}">
                    <painel :titulo="foto.titulo" :url="foto.url" :descricao="foto.descricao" :id="foto._id">
                        <div v-if="usuarioLogado">
                            <b-button @click="remove(foto)" class="botao botao-excluir icone">
                                <b-icon icon="trash"></b-icon>
                            </b-button>
                            <b-button :to="{name: 'editar', params: {id: foto._id}}" class="botao botao-editar icone">
                                <b-icon icon="pencil"></b-icon>
                            </b-button>
                        </div>
                    </painel>
                </router-link>  
            </li>
        </b-container>
    </section>
  



</template>

<script>

import Painel from './Painel.vue';
import FotoService from '../../directives/domain/foto/FotoService';
import FiltroGaleria from './FiltroGaleria.vue';

export default {

    props: ['campoFiltro', 'idNaoListar', ],

    components:{
        'painel': Painel,
        FiltroGaleria
    },
    
    data() {
        return {
            fotos:[],
            filtro: ''
        }
    },

    created(){
      this.service = new FotoService(this.$resource);
      this.service.lista()
      .then(fotos => this.fotos = fotos, err => console.log(err));
    },

    computed:{
        fotosComFiltro(){
            if(this.filtro){
                var exp = new RegExp(this.filtro.trim(), 'i');
                return this.fotos.filter(foto => exp.test(foto.titulo))

            }else{
                return this.fotos
            }
        },

        usuarioLogado(){
            return Boolean (this.$store.state.token)
        }
    },

    methods: {
        remove(foto) {
            
            this.service.apaga(foto._id)
            .then (()=> {
                let indice = this.fotos.indexOf(foto);
                this.fotos.splice(indice, 1);
                this.mensagem = 'Foto removida com sucesso';
            }, err => {
                console.log(err);
                this.mensagem = 'Não foi possível remover a foto';
            });
        }

    },

}
</script>

<style>

li
{
    overflow: hidden;
}

.campoFiltro
{
    visibility: hidden;
}

.filtros ul{
    display: flex;    
    margin: 0 auto;
    justify-content: center;
}

.filto-item{
    color: rgba(0, 0, 0, 0.5);
}



#botao-ativo{
    background-color: rgba(128, 128, 128, 0.322)
}


.projetos
{
    background-color: transparent;
}

.projetos-conteudo
{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
    gap: 10px;
}
.item-1{
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
}

.busca, .projetos-conteudo, .filtros
{
    width: 90%;
    padding: 10px 0;
    margin: 0 auto;
}

.busca
{
    padding-top: 10px;
    margin: 0 auto;
}

.campo-busca
{
    position: relative;
    box-sizing: border-box;
    background-color: transparent;
    border: 1px solid gray;
    border-radius: 5px;
    width: 15%;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.5s;
}

.campo-busca:focus
{
    outline: none;
    width: 50%;
    background-color: rgba(0, 0, 0, 0.158)
}

.campo-busca::placeholder
{
    opacity: 1;
    text-align: center;
}

input:focus ~ .campo-busca::placeholder
{
    opacity: 0;
}


</style>