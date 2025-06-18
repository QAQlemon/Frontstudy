<script setup>
import {useCounter1, useCounter2} from "@/components/compositionApi/scaled/piniaDemo.js";
import {computed, ref, watch} from "vue";
import {storeToRefs} from "pinia";

let counter1Store = useCounter1()
//store解构
//注：会丢失响应式效果
// let {count,name} = counter1Store
//需要使用storeToRefs()
let {count,name}=storeToRefs(counter1Store)

console.log(counter1Store)
// console.log(counter1Store.name)
// console.log(counter1Store.$state.name)

watch(counter1Store,(counter1Store)=>{
  console.log('==========>')
  console.log('watch')
  console.log(counter1Store)
},{immediate:false})
//订阅State
counter1Store.$subscribe((mutation, state) => {
  console.log('==========>')
  console.log('subscribe')
  console.log(mutation)
  console.log(state)
},{detached:true})//即使组件已经卸载，但订阅仍存在
//订阅action
counter1Store.$onAction(
  (param)=>{
    param.name
    param.args
    param.store
    //action执行成功后的回调处理
    param.after((res)=>{

    })
    //异常处理
    param.onError((error)=>{

    })
  }, true
)



function patchChange(){
  console.log('==========>')
  console.log('patch')
  counter1Store.$patch((state)=>{
    state.count=0
    state.name='default'
  })
}
let c=ref(0)
setInterval(()=>{
  // console.log(1)
  c.value++;
},3000);



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
        <p>getter:{{counter1Store.upCaseMsg(c)}}</p>
      </div>
      <div>
        <p>getter:{{counter1Store.callOtherGetter}}</p>
      </div>
      <div>
        <input type="text" v-model="counter1Store.name">{{counter1Store.name}}
        <br>
        <input type="text" v-model="counter1Store.$state.name">{{counter1Store.$state.name}}
        <br>
        <button @click="counter1Store.increment()">increment</button>
        <button @click="patchChange">patch change</button>
        <button @click="counter1Store.$reset()">reset store</button>
        <button @click="">reset store</button>/
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