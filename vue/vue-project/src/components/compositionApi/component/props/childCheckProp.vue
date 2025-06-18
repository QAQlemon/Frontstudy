<script setup>
let props_fromParent = defineProps({
  // obj:{
    num:{
      type: Number,
      default: 11,
      //自定义校验函数
      validator(value, props){
        console.log('自定义校验：')
        console.log(value)
        console.log(props)
        return false
      },
    },
    str:{
      type: String,
      default: '默认值'
      //默认值：属性或方法
    }
  // }
});
</script>

<template>
  <p>obj: {{props_fromParent}}</p>
</template>

<style scoped>

</style>