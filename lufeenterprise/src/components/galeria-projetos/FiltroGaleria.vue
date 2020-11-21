<template>
        <!-- <b-list-group horizontal="lg">
            <b-list-group-item id="filto-item">
                <b-form-group>
                    <b-form-radio-group buttons>
                        TODOS
                    </b-form-radio-group>
                </b-form-group>
            </b-list-group-item>
            <b-list-group-item id="filto-item">
                <b-form-group>
                    <b-form-radio-group buttons>
                        COMERCIAL
                    </b-form-radio-group>
                </b-form-group>
            </b-list-group-item>
            <b-list-group-item id="filto-item">
                <b-form-group>
                    <b-form-radio-group buttons>
                        EM ANDAMENTO
                    </b-form-radio-group>
                </b-form-group>
            </b-list-group-item>
            <b-list-group-item id="filto-item">
                <b-form-group>
                    <b-form-radio-group buttons>
                        INSTITUCIONAL
                    </b-form-radio-group>
                </b-form-group>
            </b-list-group-item>
            <b-list-group-item id="filto-item">
                <b-form-group>
                    <b-form-radio-group buttons>
                        MULTIFAMILIAR
                    </b-form-radio-group>
                </b-form-group>
            </b-list-group-item>
            <b-list-group-item id="filto-item">
                <b-form-group>
                    <b-form-radio-group buttons>
                        UNIFAMILIAR
                    </b-form-radio-group>
                </b-form-group>
            </b-list-group-item>
            <b-list-group-item id="filto-item">
                <b-form-group>
                    <b-form-radio-group buttons>
                        URBANISMO
                    </b-form-radio-group>
                </b-form-group>
            </b-list-group-item>
        </b-list-group> -->
        <div>
            <b-list-group horizontal="lg">
                <b-list-group-item id="filtro-item" button data-toggle="list" active @click="changeFilter('')">TODOS</b-list-group-item>
                <b-list-group-item id="filtro-item" button data-toggle="list" @click="changeFilter('comercial')">COMERCIAL</b-list-group-item>
                <b-list-group-item id="filtro-item" button data-toggle="list" @click="changeFilter('em andamento')">EM ANDAMENTO</b-list-group-item>
                <b-list-group-item id="filtro-item" button data-toggle="list" @click="changeFilter('institucional')">INSTITUCIONAL</b-list-group-item>
                <b-list-group-item id="filtro-item" button data-toggle="list" @click="changeFilter('multifamiliar')">MULTIFAMILIAR</b-list-group-item>
                <b-list-group-item id="filtro-item" button data-toggle="list" @click="changeFilter('unifamiliar')">UNIFAMILIAR</b-list-group-item>
                <b-list-group-item id="filtro-item" button data-toggle="list" @click="changeFilter('urbanismo')">URBANISMO</b-list-group-item>
            </b-list-group>
        </div>
</template>

<script>
export default {

    data() {
        return {
            filtro: ''
        }
    },

    methods: {
        changeFilter(value) {
            this.filtro = value
        }
    },

     watch: {
         filtro(newValue, oldValue) {
             this.$emit('filtered', newValue)
         }
     },

    
}


</script>

<style scoped>

#filtro-item{
    text-align: center;
}

#filtro-item:focus{
    outline: none;
}




</style>