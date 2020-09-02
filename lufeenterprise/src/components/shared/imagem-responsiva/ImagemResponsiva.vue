<template>
    <div>
        <b-img :src="url" class="card-img" :alt="titulo" fluid></b-img>
    </div>

    
</template>

<script>



export default {

    props: ['url', 'titulo'],


    methods:{
    
    }
    
    
}
</script>





<style scoped>

.card-img{
    width:100%;
}





</style>