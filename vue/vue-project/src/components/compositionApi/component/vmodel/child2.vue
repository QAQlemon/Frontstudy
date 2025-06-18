<script setup>
let modelValue = defineModel('modelValue',{});
</script>

<template>
  <input type="text" v-model="modelValue" />
  <p>{{modelValue}}</p>
</template>

<style scoped>

</style>