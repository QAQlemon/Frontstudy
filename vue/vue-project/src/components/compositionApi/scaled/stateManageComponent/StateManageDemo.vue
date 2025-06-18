<script setup>
import {useCounter1, useCounter2} from "@/components/compositionApi/scaled/piniaDemo.js";
import {computed} from "vue";
import {storeToRefs} from "pinia";

let counter1Store = useCounter1()
//store解构
//注：会丢失响应式效果
// let {count,name} = counter1Store
//需要使用storeToRefs()
// let {count,name}=storeToRefs(counter1Store)



</script>

<template>
  <div>
    <div >
      <div>
        <p>storeId:{{counter1Store.$id}}</p>
      </div>
      <div>
        <p>state:{{counter1Store.$state}}</p>
      </div>
      <div>
        <p>getter:{{counter1Store.doubleCount}}</p>
      </div>
      <div>
        <input type="text" v-model="count">{{count}}
        <br>
        <input type="text" v-model="name">{{name}}
        <br>
        <button @click="counter1Store.increment()">increment</button>
      </div>


    </div>
    <hr>
    <!--<div>-->
    <!--  {{counter2Store.$id}}-->
    <!--</div>-->
  </div>
</template>

<style scoped>

</style>