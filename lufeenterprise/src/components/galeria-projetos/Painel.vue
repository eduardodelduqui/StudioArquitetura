<template>
    <div @mouseover="cardVisivel(true)" @mouseout="cardVisivel(false)" class="item">
        <div class="card bg-dark text-white card-img" :style="imagemBackground">
            <!-- <b-img :src="url" class="card-img" :alt="titulo"></b-img> -->
            <div v-show="visivel" class="card-img-overlay card-imagem">
                    <h5 class="card-title">{{titulo}}</h5>
                    <p class="card-text">{{descricao}}</p>
                    <b-button @click="mudaIcone(icone)"    size="sm" class="botao botao-like">
                        <b-icon :icon="iconeHeart" aria-hidden="true" class="bg-transparent text-red icone"></b-icon>
                    </b-button>
                    <slot>
                    <!-- Botões adicionais -->
                    </slot>
            </div>
        </div>
    </div>
</template>

<script>

import FotoService from '../../directives/domain/foto/FotoService';

export default {

    props: [
        'titulo', 'url', 'descricao', 'id'
    ],

    data(){
        return{
            visivel: false, 
            icone: false
        }
    },

    created () {
        this.service = new FotoService(this.$resource);
    },

   
    computed:{
        
        iconeHeart(){
            if(this.icone){
                return "heart-fill"
            }
            if(!this.icone){
                return "heart"
            }
        },
         imagemBackground(){
            return `background-image: url(${this.url}); background-size: cover; min-height: 400px; max-height: 100%; background-position: center center; background-repeat: no-repeat`
        }
    },

    methods: {
        mudaIcone(icone){
            if(icone){
                this.icone = false
                this.$el.querySelector('.icone').style.transition = '1s'
                this.$el.querySelector('.icone').style.color = 'white'
            }
            if(!icone){
                // this.$el.querySelector('.icone').style.color = red;
                this.$el.querySelector('.icone').style.transition = '0.5s'
                this.$el.querySelector('.icone').style.color = 'red'

                
                this.icone = true
            }
        },
        
        cardVisivel(visivel){
            if(visivel){
                this.$el.querySelector('.card-imagem').style.transition = '1s'
                this.$el.querySelector('.card-imagem').style.opacity = '1'
                this.visivel = visivel;
            }
            if(!visivel){
                let elemento = this.$el.querySelector('.card-img-overlay');
                elemento.style.transition = '1s'
   
                this.visivel = visivel;

                this.visivel = visivel;
            }
        },

        remove(id) {
            console.log(id);
            
            this.service.apaga(id)
            .then (()=> {
                let indice = this.fotos.indexOf(foto);
                this.fotos.splice(indice, 1);
                this.mensagem = 'Foto removida com sucesso';
            }, err => {
                console.log(err);
                this.mensagem = 'Não foi possível remover a foto';
            });
        }
    }
}
</script>

<style scoped>

.card-imagem
{
    position: absolute;
    background-color: rgba(0, 0, 0, 0.432);
    cursor: pointer;
    opacity: 0
}

.card-img
{
    border: 1px solid black;

}

.botao
{
    background-color: transparent;
    margin: 0px;
    padding: 0px;
    border: none;
    outline: none;
    outline-color: transparent;
}
.botao:focus , .botao:active{
    box-shadow: none;
    background-color: transparent;
    outline: none;
}

.icone:hover
{
    transform: scale(1.2);
}

.icone
{
    color: white;
}
.botao-editar
{
    position: absolute;
    right: 10px;
    top: 10px;
}
.botao-excluir
{
    position: absolute;
    right: 40px;
    top: 10px;
}



</style>