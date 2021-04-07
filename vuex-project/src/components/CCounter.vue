<template>
    <div class="">
        <h3>Composition API + Vuex</h3>
        <h5>{{ counter }} x 2 = {{ times2 }}  </h5>
        <button @click="inc">Increment</button>
    </div>
</template>

<script>
import { useState, useGetters, useMutations } from '@/helpers.ts'

export default {
    setup() {
        const { counter } = useState(['counter'])
        const { times2 } = useGetters(['times2'])
        const { setCounter } = useMutations(['setCounter'])
        const inc = () => setCounter(counter.value + 1)
        return { inc, counter, times2 }
    },
}
</script>
