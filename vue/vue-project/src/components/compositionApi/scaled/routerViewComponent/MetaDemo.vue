<script setup>
import {useRoute} from "vue-router";

let route = useRoute();
</script>

<template>
  <div>
    {{route.meta.auth}}
  </div>
</template>

<style scoped>

</style>