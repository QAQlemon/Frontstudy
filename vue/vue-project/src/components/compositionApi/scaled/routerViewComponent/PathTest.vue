<script setup>
import {useRoute} from "vue-router";
import {reactive} from "vue";
let route = reactive(useRoute());

</script>

<template>
  <div>
    <p>{{route}}</p>
  </div>
</template>

<style scoped>

</style>