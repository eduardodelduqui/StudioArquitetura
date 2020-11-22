<template>
    <div class="body">
        <b-row class="box-contact-us" no-gutters>
            <b-col md="6" class="info">
                <h3>Se liga na gente!</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum magnam similique rerum voluptate facilis repudiandae iusto asperiores quae deleniti voluptatem!</p>
                <div class="contact-us-info">
                    <p>Rua Nomequalquer de Rua, 3185, Trindade</p>
                    <p>Rio de Janeiro - RJ</p>
                    <p>Email: contato@studioarquitetura.com.br</p>
                    <p>Cel: (21) 99999-8888</p>
                </div>
                <div class="social-media">
                    <h4>Conecte-se com a gente:</h4>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-instagram"></a>
                </div>
            </b-col>
            <b-col md="6" class="form">
                <h3>Entre em contato</h3>
                <b-form @submit="enviaFormulario()">
                    <b-form-group
                        label="Nome"
                        label-for="input-nome"
                    >
                        <b-form-input
                            id="input-nome"
                            v-model="form.nome"
                            required
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="E-mail"
                        label-for="input-email"
                    >
                        <b-form-input
                            id="input-email"
                            v-model="form.nome"
                            required
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Orçamento"
                        label-for="input-solicitacao"
                    >
                        <b-form-select
                            id="input-solicitacao"
                            v-model="form.solicitacao"
                            :options="solicitacoes"
                            required
                        ></b-form-select>
                    </b-form-group>
                    <b-form-group
                        label="Deixe uma mensagem"
                        label-for="input-mensagem"
                    >
                        <b-form-textarea
                            id="input-mensagem"
                            v-model="form.mensagem"
                            no-resize
                            required
                            rows="4"
                        ></b-form-textarea>
                    </b-form-group>
                    <b-button type="submit">Enviar</b-button>
                </b-form>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {

    data() {
        return {
            form: {
                nome: "",
                email: "",
                solicitacao: null,
                mensagem: ""
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
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    padding: 80px;
    background: url('/src/assets/footer-image.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.visivel{
    visibility: visible;
    animation: 1s slide-in-top both, 3s visibilidade 5s both;
}

.box-contact-us {
    max-width: 800px;
    background-color: rgb(235, 233, 233);
    border-radius: 10px;
    box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    margin: 0 auto;
}

.info {
    width: 100%;
    height: 100%;
    padding: 20px;
}

.info h3, .info h4{
    color: #1a96bc;
}

.social-media {
    margin-top: 30px;
}

.info h4 {
    font-size: 18px;
}

.form {
    padding: 20px;
    background-color: #1a96bc;
    height: 100%;
    color: white;
}

.form button {
    background-color: white;
    color: #1a96bc;
    border: none;
}

.contact-us-info {
    margin-top: 50px;
    font-size: 14px;
}

h3 {
    margin-bottom: 20px;
}

p {
    margin: 0px;
}

input:hover, input:focus
{
    outline: none;
}

button
{
    cursor: pointer;
}

.social-media a{
    width: 35px;
    height: 35px;
    border-radius: 5px;
    background: linear-gradient(45deg, #1a96bc, #149279);
    color: white;
    text-align: center;
    line-height: 35px;
    margin-right: 0.5rem;
}

.social-media a:hover{
    transform: scale(1.1);
    text-decoration: none;
}

@media (max-width: 768px) {

    .body {
        height: 100%;
        padding: 20px;
    }

    .social-media, .contact-us-info {
        margin-top: 10px;
    }
}

</style>