<script setup>
import {useRouter} from "vue-router";
let router = useRouter();
</script>

<template>
  <div>
    <p>B</p>
    <button @click="router.back()">back</button>
  </div>

</template>

<style scoped>

</style>