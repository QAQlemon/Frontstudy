<script setup>
import {provide, ref} from "vue";
import Child from "@/components/compositionApi/component/inject/child.vue";
let data = ref(1);
function add(){
  data.value++;
}
//将数据和对应的操作封装在一起
provide('data',{
    data,
    add
  }
);
</script>

<template>
  <child>

  </child>
</template>

<style scoped>

</style>