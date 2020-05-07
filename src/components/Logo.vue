<template>
  <div>
    <img src="@/assets/logo.png" width="150px">
  </div>
</template>
<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      msg: 'Teste' as string,
    };
  },

  methods: {
    teste(): void {
    },
  },
});
</script>
