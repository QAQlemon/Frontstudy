<script setup>
import {inject} from "vue";
//解构
let {data,add} = inject("data");
</script>

<template>
  <button @click="add">{{data}}</button>
</template>

<style scoped>

</style>