<script setup>
import {ref} from "vue";

import Child from "@/components/compositionApi/component/vmodel/child.vue";
import Child2 from "@/components/compositionApi/component/vmodel/child2.vue";
import Child3 from "@/components/compositionApi/component/vmodel/child3.vue";


let model=ref('')
function changeProps(args){
  console.log('父组件：')
  console.log(args)
  model.value = args;
}

let model2=ref('')
let model3=ref('')
</script>

<template>
  <div>
    model1：{{model}}<br>
    mode2：{{model2}}<br>
    mode3：{{model3}}
  </div>
  <div>
    <p>vue3.4之前，组件v-model的替代方式：</p>
    <!--<child :model-value="model" @update:modelValue="args => {model=args}"></child>-->
    <child :modelValue="model" @update:modelValue="changeProps"></child>
  </div>
  <div>
    <p>vue3.4之后，使用v-model语法糖：</p>
    <child2 v-model:modelValue="model2"></child2>
  </div>
  <div>
    <p>自定v-model修饰符：</p>
    <!--<child3 v-model:model-value="model3">不带修饰符</child3>-->
    <child3 v-model:text.capitalize="model3">带修饰符</child3>
  </div>
</template>

<style scoped>
div{
  border: red 1px solid;
}
</style>