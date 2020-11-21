<template>
    <div class="body">
        <div class="box-mensagem">
            <p>Obrigado, {{nomeMensagem}} :)</p>
            <p>Seu contato foi enviado com sucesso</p>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            form: {
                nome: "",
                email: "",
                solicitacao: null

            },
            solicitacoes: [{ text: 'Selecione para orçamento', value: 'null'}, 'Interiores', 'Exteriores', 'Reforma'],
            nomeMensagem: ""
        }
    },
    methods: {
        enviaFormulario() {
            let formulario = this.$el.querySelector('.formulario');
            let mensagem = this.$el.querySelector('.box-mensagem');
            mensagem.classList.add('visivel');
            formulario.reset();
            console.log(formulario);
            console.log(this.form);
            this.form.nome = "",
            this.form.email = "",
            this.form.solicitacao = null
            console.log(this.form);        
        }
    },

   
    
}
</script>



<style scoped>

.body
{
    position: absolute;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background: url(https://media04.lokalkompass.de/article/2018/09/07/0/100380_XXL.jpg);
    background-repeat: no-repeat;
}

.navbar-bg
{
    background-color: rgb(0, 0, 0);
}

.atual{
    color: #ffefb9;
}


main
{
    height: 100vh;
}

.box-mensagem
{
    text-align: center;
    vertical-align: center;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    background-color: #ffefb9;
    width: 20%;
    padding: 10px 0;
    box-sizing: border-box;
    border-radius: 10px;
    visibility: hidden;
}
.box-mensagem p{
    margin: 0px;
    padding: 0px;
    font-size: 19px;
    font-weight: bold;
}
.visivel{
    visibility: visible;
    animation: 1s slide-in-top both, 3s visibilidade 5s both;

}

h1
{
    padding-top: 20px;
    text-align: center;
    color: rgb(255, 255, 255);
    font-family: 'Montserrat', sans-serif;
}

h4
{
    position: absolute;
    top: 10%;
}

.contato
{
    padding-left: 100px;
}

.box
{
    position: absolute;
    display: grid;
    top: 50%;
    left: 50%;
    width: 30%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.616);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, .5);
    border-radius: 15px;
    animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.formulario{
    padding: 50px;
}
.box .inputBox
{
    position: relative;
    width: 100%;
}
.box .inputBox input
{
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    margin-bottom: 30px;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid rgb(255, 255, 255);  
    color: white;
}

.box .inputBox label
{
    position: absolute;
    top: 0;
    padding: 10px 0;
    font-size: 18px;
    color: rgb(255, 255, 255);
    display: block;
    pointer-events: none;
    transition: .5s;
}

.box .inputBox input:focus ~ label, .box .inputBox input:valid ~ label
{
    top: -24px;
    color: #007bff;
    font-size: 16px;
}

input:hover, input:focus
{
    outline: none;
}

button
{
    cursor: pointer;
}

.info-box{
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 30%;
    background: linear-gradient(110deg, #ffefb9 60%, #fdcd3b 60%);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, .5);
    border-radius: 15px;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 50%;
}

.info{
    position: relative;
}



.info-texto{
    position: absolute;
    bottom: 10%;
    left: 0;
    width: 400px;
    padding: 40px;
    font-size: 14px;
}

.redes-sociais{
    position: absolute;
    bottom: 0%;
    right: 0%;
    width: 100%;
    align-self: left;
}

.redes-sociais ul
{
    list-style: none;

}
.redes-sociais li{
    width: 30px;
}

.redes-sociais a{
    font-size: 20px;
    padding: 0px;
    background: transparent;
    color: #007bff;
}

.email{
    font-weight: bold;
}




@keyframes slide-in-left {
    0% {
        left: 35%;
      
    }
    100% {
        left: 50%;
    
    }
}

@keyframes slide-in-top{
    0%{
        top: -20%;
    }
    100%{
        top: 9%;
    }
}

@keyframes visibilidade{
    0%{
        opacity: 100%;
    }
    100%{
        opacity: 0%;
        visibility: hidden;
    }

}


@media(max-width: 1300px){
    .info-box{
        /* transform: translate(0%, 0%); */
        top: 50%;
        left: 50%;
        width: 90%;
        height: 90%
    }

    .box{
        display: block;
        padding: 0px;
        top: 45%;
        left: 50%;
        width: 95%;
        height: 40%;
        z-index: 1;
    }
    .contato{
        padding: 0px;
        position: relative;
    }

    h1
    {
        font-size: 20px;
    }

    h4
    {
        top: 5%;
        font-size: 18px;
        padding: 10px 0;
    }

    .formulario
    {
        padding: 0px 10%;
    }

    .info-texto{
        bottom: 0;
        padding: 40px 20px;
        width: 100%;
    }
}

</style>