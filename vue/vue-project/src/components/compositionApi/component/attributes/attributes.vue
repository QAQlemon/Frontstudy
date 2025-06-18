<script setup>
import {onMounted, useAttrs, useTemplateRef} from "vue";

let props = defineProps(['msg_props']);
let model = defineModel('msg_model');
//模板引用
let el_ref = useTemplateRef('btn2');
let attrs = useAttrs();

function getAttrs(){
  console.log(attrs)
  el_ref.value.textContent=`btn2`
}
</script>

<template>
  <p>{{props.msg_props}}</p>
  <p>{{$attrs}}</p>
  <button @click="console.log($attrs)">控制台打印$attrs</button>
  <button @click="getAttrs($event.target)" ref="btn2" >获取attr</button>

</template>

<style scoped>

</style>