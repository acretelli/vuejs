<template>
  <div class="ccouter">
    <CCounter />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CCounter from '@/components/CCounter.vue'; // @ is an alias to /src

@Options({
  components: {
    CCounter,
  },
})

export default class Composition extends Vue {}
</script>
