<script setup>

//局部注册
import Local_component from "@/components/compositionApi/component/register/local_component.vue";

//关闭属性继承
// 作用：该模板的子组件 不会继承 除组件所声明的 props 和 emits 之外的所有其他 attribute
defineOptions({
  inheritAttrs:false//关闭属性继承
})

</script>

<template>
  <!--<div>-->
  <!--  <p>透传 {{$attrs}}</p>-->
  <!--  <global_component>全局注册</global_component>-->
  <!--  <Local_component>局部注册</Local_component>-->
  <!--  <global_component :="$attrs">属性绑定</global_component>-->
  <!--</div>-->

  <!--<p>透传 {{$attrs}}</p>-->
  <!--<global_component>全局注册</global_component>-->
  <!--<Local_component>局部注册</Local_component>-->
  <!--<global_component :="$attrs">属性绑定</global_component>-->

</template>

<style scoped>

</style>