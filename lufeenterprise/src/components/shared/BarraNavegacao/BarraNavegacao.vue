<template>
    <nav class="navbar navbar-expand-lg navbar-dark navbar-bg fixed-top">
        <router-link :to="{name: 'home'}" class="navbar-brand" id="menu-link">StudioArquitetura</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-for="rota in rotas">
                    <router-link class="nav-link" id="menu-link" :to="rota.path ? rota.path:'/'">{{rota.titulo}}</router-link>
                </li>
            </ul>
            <div v-if="usuarioLogado">
                <!-- Barra de Navegação quando o usuário estiver logado -->
                <BarraNavegacaoLogado/>
            </div>
        </div>
    </nav>
</template>

<script>

import BarraNavegacaoLogado from './BarraNavegacaoLogado.vue';

export default {

    components: {
        BarraNavegacaoLogado,
    },

    props:[
        'rotas'
    ],

    computed: {
        usuarioLogado() {
            return Boolean(this.$store.state.token)
        }
    },
    
}
</script>



<style scoped>

.navbar-bg{
    background-color: rgb(0, 0, 0);
}

#menu-link:hover
{
  color: #ffefb9
}












@keyframes border-fade-in{
    0%{
        border-bottom: 1px rgba(0, 0, 0, 0) solid;
        color: rgb(147,146,145);
    }
    100%{
        border-bottom: 1px black solid;
        color: rgb(90, 90, 90);
    }
}


</style>
