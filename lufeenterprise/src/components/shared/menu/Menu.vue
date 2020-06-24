<template>
        <div class="corpo">
        
        <!-- <img class="banner-home" src="https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467_960_720.jpg" alt="Banner Empresa"> -->
            <nav class="menu-navegacao">
                <ul class="menu-lista">
                    <li class="menu-item" v-for="rota in rotas" :key="rota"><router-link class="menu-link" :to="rota.path">{{rota.titulo}}</router-link></li>
                </ul>
            </nav>
        </div>
    </div>  
</template>

<script>
export default {

    props:[
        'rotas'
    ]
    
}
</script>



<style scoped>

.corpo{
    margin: 0 auto;
}



.menu-navegacao{
    /* position: relative; */
    width: 100%;



}

.menu-lista{
    /* position: absolute; */
    display: flex;
    justify-content: flex-start;
    margin-left: 0px;
    list-style: none;
    padding: 30px 0;
    width: 100%;
    margin: 0px;
    border: solid 2px;
    border-top: solid 2px;
    border-radius: 30px;
    border-bottom-right-radius: 30px;

}



.menu-link{
    font-size: 1.2em;
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-weight: bold;
    margin-left: 40px;
}

.menu-link:hover{
    text-shadow: 2px 2px black;

}

</style>