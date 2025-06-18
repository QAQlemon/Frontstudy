<script setup>

</script>

<template>
  <button @click="$emit('click_child',$event)">子组件事件触发</button>
</template>

<style scoped>

</style>