<template>
     <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'cadastro'}">Cadastro</router-link>
        </li>
        <li class="nav-item">
            <a @click="efetuarLogout()" class="nav-link" href="">Logout</a>
        </li>
    </ul>
</template>

<script>
export default {

    methods: {
        efetuarLogout(){
            this.$store.commit('DESLOGAR_USUARIO')
            this.$router.push({name: 'login'})
        }
    }

}
</script>

<style>

</style>