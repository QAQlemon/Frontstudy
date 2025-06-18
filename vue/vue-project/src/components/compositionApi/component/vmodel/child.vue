<script setup>
let props=defineProps(['modelValue'])
let emits = defineEmits(['update:modelValue']);//返回一个自定义事件
function change(event){
  console.log('子组件：')
  console.log(event)
  emits('update:modelValue',event.target.value)
}
</script>

<template>
  <input type="text" :value="props.modelValue" @keyup="change">
  <p>{{props.modelValue}}</p>
</template>

<style scoped>

</style>