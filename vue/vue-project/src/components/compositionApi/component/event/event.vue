<script setup>

import Child from "@/components/compositionApi/component/event/child.vue";

function test(event){
  console.log(`父组件触发`)
  console.log('target:',event.target)
  console.log('currentTarget:',event.currentTarget)
}

</script>

<template>

  <div>

    <child @click_child="test"></child>
  </div>

</template>

<style scoped>
  div{
    border: red 1px solid;
  }
</style>