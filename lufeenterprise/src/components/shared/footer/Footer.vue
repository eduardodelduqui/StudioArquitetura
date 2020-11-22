<template>
    <footer>
        <div class="footer-grid">
            <div class="endereco">
                <h5>StudioArquitetura</h5>
                <p>Rua Nomequalquer de Rua, 3185, Trindade<br>
                Rio de Janeiro - RJ
                Tel: (21) 2005-1819<br>
                Cel: (21) 99999-8888<br>
                E-mail: contato@studioarquitetura.com.br</p>
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
    background: url("../../../../src/assets/footer-image.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right center;
    color: white;
    font-size: 14px;
}

.footer-grid
{
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.692);
}

p {
    overflow-wrap: break-word;
}

</style>