<script setup>

import {computed, ref, watch} from "vue";

let props = defineProps({
  num:Number
});
let num_ref = ref(props.num);

//计算属性
// 计算属性默认时只读的，但也可以设置setter,但由于props的num属性是只读的，所以最终不能修改
let num_computed = computed({
  get(){
      return props.num+100
  },
  set(value){
    props.num=value-100
  }
});

//侦听器侦听传入目标的属性是否发生变化
// watch(props.num,(value, oldValue, onCleanup)=>{//出差
//   console.log(`侦听器0发生变化 ${oldValue.num}=>${value.num}`);
// })
watch(()=>props.num,(value, oldValue, onCleanup)=>{
  console.log(`侦听器1发生变化 ${oldValue}=>${value}`);
},)
watch(props,(value, oldValue, onCleanup)=>{
  console.log(`侦听器2发生变化 ${oldValue.num}=>${value.num}`);
})
</script>

<template>
  <p>子组件：{{props.num}}</p>
  <button @click="props.num++">子组件：count+1 prop不可修改</button>

  <!--<p>子组件：{{num_ref}}</p>-->
  <!--<button @click="num_ref++">子组件：count+1 ref_prop可修改</button>-->

  <!--<p>子组件：{{num_computed}}</p>-->
  <!--<button @click="num_computed++">子组件：count+1 computed_prop可修改</button>-->

</template>

<style scoped>

</style>