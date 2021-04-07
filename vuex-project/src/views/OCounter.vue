<template>
  <div class="home">
    <OCounter />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import OCounter from '@/components/OCounter.vue'; // @ is an alias to /src

@Options({
  components: {
    OCounter,
  },
})
export default class Option extends Vue {}
</script>
