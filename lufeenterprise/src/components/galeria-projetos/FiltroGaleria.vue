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
                <b-list-group-item id="filtro-item" button data-toggle="list" active>TODOS</b-list-group-item>
                <b-list-group-item id="filtro-item" button data-toggle="list">COMERCIAL</b-list-group-item>
                <b-list-group-item id="filtro-item" button data-toggle="list">EM ANDAMENTO</b-list-group-item>
                <b-list-group-item id="filtro-item" button data-toggle="list">INSTITUCIONAL</b-list-group-item>
                <b-list-group-item id="filtro-item" button data-toggle="list">MULTIFAMILIAR</b-list-group-item>
                <b-list-group-item id="filtro-item" button data-toggle="list">UNIFAMILIAR</b-list-group-item>
                <b-list-group-item id="filtro-item" button data-toggle="list">URBANISMO</b-list-group-item>
            </b-list-group>
        </div>
</template>

<script>
export default {

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