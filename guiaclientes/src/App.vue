<template>
  <div id="app">
    <h3>Cadastro</h3>
    <small id="erroNome" v-show="campoErrado">Nome inválido. Tente novamente.</small><br>
    <input type="text" placeholder="nome" v-model="campoNome"> <br>
    <input type="email" placeholder="email" v-model="campoEmail"> <br>
    <input type="number" placeholder="idade" v-model="campoIdade"> <br>
    <button @click="cadastrarUsuario()">Cadastrar</button>
    <hr>
    <div v-for="(cliente, index) in ordenarClientes" :key="cliente.id">
      <h4>{{ index + 1 }}</h4>
      <Cliente :cliente="cliente" :mostrarIdade="true" @medelete="deletarUsuario" />
      <hr>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import Cliente from './components/Cliente';
// import Produto from './components/Produto';

export default {
  name: 'App',
  data(){
    return {
      campoErrado: false,
      campoNome: "",
      campoEmail: "",
      campoIdade: 0,
      clientes: [
        {
        id: 0,
        nome: "Joana Enjoada",
        email: "joana@email.com",
        idade: 25
        },
        {
          id: 1,
          nome: "Sandra Safada",
          email: "sandra@email.com",
          idade: 44
        },
        {
          id: 2,
          nome: "João Reclamão",
          email: "joao@email.com",
          idade: 18
        },
        {
          id: 3,
          nome: "Gabriela Tagarela",
          email: "gabriela@email.com",
          idade: 33
        }
      ]
    }
  },
  components: {
    Cliente,
    // Produto
  },
  methods: {
    cadastrarUsuario: function() {
      if(this.campoNome == "" || this.campoNome == " " || this.campoNome.length < 3) {
        this.campoErrado = true;
      }
      this.clientes.push({
        id: Date.now(),
        nome: this.campoNome,
        email: this.campoEmail,
        idade: this.campoIdade
      })

      this.campoNome = "";
      this.campoEmail = "";
      this.campoIdade = 0;
    },
    deletarUsuario: function($event) {
      // console.log("Recebendo evento.")
      // console.log($event.idDoCliente)
      // $event.component.testar(); Pode chamar outras funções do compoente.

      var id = $event.idDoCliente;
      var novaLista = this.clientes.filter(cliente => cliente.id != id);
      this.clientes = novaLista;
    }
  },
  computed: {
    ordenarClientes: function() {
      return _.orderBy(this.clientes, ['nome'], ['asc']);
    }
  }
}
</script>

<style>
</style>
