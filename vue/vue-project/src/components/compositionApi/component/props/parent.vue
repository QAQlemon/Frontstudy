<script setup>
import {ref} from "vue";
import Child from "@/components/compositionApi/component/props/child.vue";
import ChildCheckProp from "@/components/compositionApi/component/props/childCheckProp.vue";

let count=ref(0);

defineOptions({
  inheritAttrs: false
})
let obj_default=ref({
  num:1,
  str: 'sasd',
})
</script>

<template>
  <div>
    <p>count= {{count}}</p>
    <button @click="count++">父组件：count+1</button>
    <child :num="count"></child>
  </div>

  <div>
    <label for="num">输入数值</label>
    <input id="num" type="text" v-model="obj_default.num" placeholder="输入数值">
    <br>
    <label for="str">输入数值</label>
    <input type="text" v-model="obj_default.str" placeholder="输入字符串">

    <ChildCheckProp :="obj_default"></ChildCheckProp>
  </div>



</template>

<style scoped>
div{
  border: red 1px solid;
}
</style>