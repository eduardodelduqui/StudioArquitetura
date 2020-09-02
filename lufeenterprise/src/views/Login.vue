<template>
    <div class="body">
        <b-form @submit.prevent="efetuarLogin()" class="formulario">
            <div class="corpo-formulario">
                <h1 class="titulo">Login</h1>
                <b-form-group label="E-mail" class="inputBox">
                    <b-form-input type="email" required v-model="usuario.email"></b-form-input>
                </b-form-group>
                <b-form-group label="Senha" class="inputBox">
                    <b-form-input type="password" required v-model="usuario.senha"></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Entrar</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
export default {

    data() {
        return {
            usuario: {
                email: '',
                senha: ''
            }
        }
    },

     methods: {
        efetuarLogin() {

            this.$store.dispatch('efetuarLogin', this.usuario)
                .then(()=> this.$router.push({name: 'home'}))

            
        }
    },

}
</script>

<style scoped>

.body{
    position: absolute;
    height: 100vh;
    width: 100%;
    background-image: url(https://images.wallpaperscraft.com/image/bicycle_fence_house_window_116265_1920x1080.jpg);
    background-image: no-repeat cover;
}

.formulario{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.658);
    box-shadow: 0 15px 25px rgba(0, 0, 0, .5);
    color: white;
    margin: 0px;
}

.corpo-formulario{
    width: 70%;
    margin: 0 auto;
    padding: 40px 0;
}

.titulo{
    padding-bottom: 10px;
}







</style>