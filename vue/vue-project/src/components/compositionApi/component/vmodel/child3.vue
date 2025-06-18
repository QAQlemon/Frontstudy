<script setup>
// let model = defineModel('modelValue',{})
let textModel= defineModel('text',{
  // type:String,
  set(value){
    if (modifiers.capitalize) {
      return value.toUpperCase()
    }
    return value
  },
});
let [model,modifiers]=textModel
console.log(`修饰符:`)
console.log(modifiers)
</script>

<template>
  <input type="text" v-model="model"><slot/>
  <p>{{model}}</p>
</template>

<style scoped>

</style>