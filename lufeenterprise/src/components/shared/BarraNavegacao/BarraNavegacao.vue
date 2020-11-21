<template>
    <nav class="navbar navbar-expand-lg navbar-light navbar-bg">
        <router-link :to="{name: 'home'}" class="navbar-brand" id="menu-link">StudioArquitetura</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-for="rota in rotas" :key="rota.path">
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
    background-color: rgb(235, 233, 233);
}

#menu-link:hover
{
  color: #2b2a2a
}

</style>
