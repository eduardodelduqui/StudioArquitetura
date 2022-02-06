<template>
    <div class="projetos">
        <div class="busca" :class="campoFiltro">
            <label for="inputBusca"></label>
            <input type="search" class="campo-busca" id="input-busca" placeholder="Filtrar" @input="filtro = $event.target.value" autocomplete="off">
        </div>
        <div class="filtros" :class="campoFiltro">
            <FiltroGaleria @filtered="filterList"/>
        </div>
        <div class="projetos-conteudo">
            <li class="card-projeto" v-for="foto in fotosComFiltro" :key="foto.titulo">
                <!-- Adicionar v-if="foto._id != idNaoListar" para não listar -->
                <router-link :to ="{name: 'item', params: {id: foto._id}}">
                    <painel :titulo="foto.titulo" :url="foto.url" :descricao="foto.descricao" :id="foto._id">
                        <!-- <div v-if="usuarioLogado"> -->
                        <div>
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
        </div>
    </div>
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
            filtro: '',
            filtroCategoria: ''
        }
    },

    created(){
      this.service = new FotoService(this.$resource);
      this.service.lista()
      .then(fotos => this.fotos = fotos, err => console.log(err));
    },

    computed:{
        fotosComFiltro(){
            if(this.filtroCategoria) {
                var exp = new RegExp(this.filtroCategoria.trim(), 'i');
                return this.fotos.filter(foto => exp.test(foto.tipo))
            }
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
        },

        filterList(value) {
            this.filtroCategoria = value
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
    display: none;
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
    max-width: 1300px;
    margin: 0 auto;
}

.busca, .projetos-conteudo, .filtros
{
    padding: 10px 0;
}

.busca
{
    width: 90%;
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
    width: 50%;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.5s;
}

.campo-busca:focus
{
    outline: none;
    width: 90%;
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

.projetos-conteudo {
    display: grid;
    gap: 15px;
    justify-content: center;
    align-items: center;
}

@media (max-width: 900px) {
    .projetos-conteudo {
        grid-template-columns: minmax(auto, 550px);
    }
}

@media (min-width: 900px) {
    .projetos-conteudo {
        grid-template-columns: repeat(2, minmax(auto, 550px));
    }
}

@media (min-width: 1300px) {
    .projetos-conteudo {
        grid-template-columns: repeat(3, minmax(auto, 550px));
    }

    /* .projetos {
        width: 90%;
        margin: 0 auto;
    } */

}

</style>