<template>
    <div class="">
        <h3>Options API + Vuex</h3>
        <h5>{{ counter }} x 2 = {{ times2 }}  </h5>
        <button @click="inc">Increment</button>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapState  } from 'vuex'

export default {
    computed: {
        ...mapState(['counter']),
        ...mapGetters(['times2']),
    },
    methods: {
        ...mapMutations(['setCounter']),
        inc() {
            this.$store.commit('setCounter', this.counter + 1)
        }
    }
}

</script>
