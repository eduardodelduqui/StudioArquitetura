<template>
    <div>
        <button @click="botaoAtivado()" :type="tipo" class="botao">{{titulo}}</button>
    </div>
  
</template>

<script>
export default {

    props: ['tipo', 'titulo'],

    methods:{
        
        botaoAtivado(){
            this.$emit('botaoAtivado');
            console.log('botao ativado')
        }
    }

}
</script>

<style>

</style>