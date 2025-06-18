<script setup>
import {defineAsyncComponent} from "vue";
import Loading from "@/components/compositionApi/component/asyncComponent/loadingComponent.vue";
import Erro from "@/components/compositionApi/component/asyncComponent/erroComponent.vue";
import ErroComponent from "@/components/compositionApi/component/asyncComponent/erroComponent.vue";
import LoadingComponent from "@/components/compositionApi/component/asyncComponent/loadingComponent.vue";

// let comp = defineAsyncComponent(()=>
//     import('@/components/compositionApi/component/asyncComponent/asyncComponent.vue')
// );
let asyncComponent = defineAsyncComponent({
  //加载函数
  loader: () => import('@/components/compositionApi/component/asyncComponent/asyncComponent.vue'),
  // 展示加载组件前的延迟时间，默认为 200ms
  delay: 1,
  // 加载异步组件时使用的组件
  loadingComponent: LoadingComponent,

  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
  timeout: 2000,
  // 加载失败后展示的组件
  errorComponent: ErroComponent
});
</script>

<template>
  <asyncComponent></asyncComponent>
</template>

<style scoped>

</style>