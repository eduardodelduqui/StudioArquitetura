<template>
    <footer>
        <div class="footer-grid">
            <div class="endereco">
                <h5>StudioArquitetura</h5>
                <p>Rua Nomequalquer de Rua, 3185, Trindade<br>
                Florianópolis - SC
                Tel: (48) 2005-1819<br>
                Cel: (48) 99999-8888<br>
                E-mail: contato@studioarquitetura.com.br</p>
            </div>
            <div class="mapa-site">
                <ul>
                    <li>HOME</li>
                    <li>PROJETOS</li>
                    <li>CONTATO</li>
                </ul>
            </div>
            <div class="redes-sociais">
                <ul class="redes-sociais-lista">
                    <li><a href="#" class="fa fa-facebook"></a></li>
                    <li><a href="#" class="fa fa-twitter"></a></li>
                    <li><a href="#" class="fa fa-youtube"></a></li>
                    <li><a href="#" class="fa fa-instagram"></a></li>
                </ul>
            </div>
        </div>
    </footer>
  
</template>

<script>
export default {

}
</script>

<style>

footer
{
    background: url(https://media04.lokalkompass.de/article/2018/09/07/0/100380_XXL.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: middle center;
    color: white;
    font-size: 18px;
}

.footer-grid
{
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    background-color: rgba(0, 0, 0, 0.692);
}

.fa
{
    padding: 20px;
    font-size: 30px;
    color: white;
    background-color: rgba(204, 204, 204, 0.699);
    width:80px;
    text-align: center;
    text-decoration: none;
}

.redes-sociais
{
    justify-self: end;
}

.redes-sociais-lista
{
    margin-left: 100px;
    padding: 0px;
    display: flex;
    width: 50%;
    flex-wrap: wrap;
}
.redes-sociais-lista li{
    margin: 5px;
}

</style>