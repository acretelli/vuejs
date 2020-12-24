<template>
    <div :class="{'cliente': !isPremium, 'cliente-premium': isPremium}">
        <h4>Nome: {{ cliente.nome }}</h4>
        <hr>  
        <p>Email: {{ cliente.email | processarEmail }}</p>    
        <!-- <p v-show="mostrarIdade">Idade: {{ cliente.idade }}</p>    (Não deleta o elemento, só deixa invisível) -->
        <p v-if="mostrarIdade">Idade: {{ cliente.idade }}</p>    
        <p v-else>Idade não informada.</p>
        <button @click="mudarCor()">Mudar cor</button>
        <button @click="mostrarEdicao()">Editar</button>
        <div v-if="editar" >
            <h4>Edição: </h4>
            <input type="text" v-model="cliente.nome" >
            <input type="email" v-model="cliente.email" >
            <input type="number" v-model="cliente.idade" >
        </div>
        <button @click="emitirEventoDeletar()">Deletar</button>
        <h4>Id especial: {{ idEspecial }}</h4>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isPremium: false,
            editar: false,
        }
    },
    props: {
        cliente: Object,
        mostrarIdade: Boolean,
    },
    methods: {
        mudarCor: function() {
            this.isPremium = !this.isPremium
        },
        mostrarEdicao: function() {
          this.editar = !this.editar
        },
        emitirEventoDeletar: function() {
            // console.log("Emitindo do filho")
            this.$emit("medelete", { idDoCliente: this.cliente.id, mensagem: "Usuário deletado.", component: this })
        },
        testar: function() {
            alert("Teste")
        }
    },
    filters: {
        processarEmail: function(valor) {
            return valor.toUpperCase();
        }
    },
    computed: {
        idEspecial: function() {
            return (this.cliente.email + this.cliente.nome + this.cliente.id).toUpperCase();
        }
    }
    
}
</script>

<style scoped>
    .cliente {
        margin: 2% auto;
        padding: 2%;
        max-width: 600px;
        background: #ECE5E3;
    }

    .cliente-premium{
        margin: 2% auto;
        padding: 2%;
        max-width: 600px;
        background: #454545;
        color:#ECE5E3
    }

</style>