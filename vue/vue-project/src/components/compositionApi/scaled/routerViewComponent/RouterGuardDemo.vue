<script setup>
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUpdated} from "vue";
import {onBeforeRouteLeave, onBeforeRouteUpdate} from "vue-router";

onBeforeRouteUpdate((to, from)=>{
  // 在当前路由改变，但是该组件被复用时调用
  // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
  // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
  console.log('route:beforeRouteUpdate '+to.path)
})
onBeforeRouteLeave((to, from)=>{
    // 在导航离开渲染该组件的对应路由时调用
    // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
    console.log('route:beforeRouteLeave '+to.path)
  }
)
onBeforeMount(()=>{
  console.log('life circle:onBeforeMount')
})
onMounted(()=>{
  console.log('life circle:onMounted')
})
onBeforeUpdate(()=>{
  console.log('life circle:onBeforeUpdate')
})
onUpdated(()=>{
  console.log('life circle:onUpdated')
})
onBeforeUnmount(()=>{
  console.log('life circle:onBeforeUnmount')
})
onBeforeUnmount(()=>{
  console.log('life circle:onBeforeUnmount')
})
</script>

<template>
  <p>RoutGuard</p>
</template>

<style scoped>

</style>