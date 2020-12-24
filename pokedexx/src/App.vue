<template>
  <div id="app">
    <div class="column is-half is-offset-one-quarter">
      <img src="./assets/logo.png">
      <hr>
      <h4 class="is-size-4">Pokedexx</h4>
      <input type="text" placeholder="Buscar Pokemon pelo nome" v-model="searchPokemon" class="input is-rounded margin-top">
      <button class="button is-fullwidth margin-top is-success" @click="search">Buscar</button>
      <div v-for="(poke, index) in filteredPokemons" :key="poke.url">
        <Pokemon :name="poke.name" :url="poke.url" :num="index+1" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Pokemon from './components/Pokemon';

export default {
  name: 'App',
  data(){
    return {
      pokemons: [],
      filteredPokemons: [],
      searchPokemon: ""
    }
  },
  created: function() {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').then(res => {
      this.pokemons = res.data.results;
      this.filteredPokemons = res.data.results;
    })
  },
  components: {
    Pokemon
  },
  methods: {
    search: function() {
      this.filteredPokemons = this.pokemons;

      if(this.searchPokemon == '' || this.searchPokemon == ' ') {
        this.filteredPokemons = this.pokemons;
      } else {
        this.filteredPokemons = this.pokemons.filter(pokemon => pokemon.name == this.searchPokemon)
      }
    }
  },
  computed: {
    // searchResult: function() {
    //   if(this.searchPokemon == '' || this.searchPokemon == ' ') {
    //     return this.pokemons;
    //   } else {
    //     return this.pokemons.filter(pokemon => pokemon.name == this.searchPokemon)
    //   }
    // }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .margin-top {
    margin-top: 2%;
  }
</style>
