<!--单文件组件 SFC-->
<!--1.逻辑-->
<!--
  setup
    简介：<script setup>是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖

    作用：
        1.任何在 <script setup> 声明的顶层的绑定 (包括变量，函数声明，以及 import 导入的内容) 都能在模板中直接使用
    对比：
        <script> 只在组件被首次引入的时候执行一次不同
        <script setup> 中的代码会在每次组件实例被创建的时候执行
-->
<script setup>


import {computed, defineAsyncComponent, ref} from "vue";
// 组合式api
//基础
import RenderDemo from "@/components/compositionApi/basic/renderDemo.vue";
import EventDemo from "@/components/compositionApi/basic/eventDemo.vue";
import FormInput from "@/components/compositionApi/basic/formInput.vue";
import LifeCircle from "@/components/compositionApi/basic/lifeCircle.vue";
import ReactiveAndRef from "@/components/compositionApi/basic/reactiveAndRef.vue";
import DataBindDemo from "@/components/compositionApi/basic/dataBindDemo.vue";
import ComputedAndWatch from "@/components/compositionApi/basic/computedAndWatch.vue";
//组件
import RegisterComponent from "@/components/compositionApi/component/register/registerComponent.vue";
import PropsComponent from "@/components/compositionApi/component/props/propsComponent.vue";
import Event from "@/components/compositionApi/component/event/event.vue";
import Model from "@/components/compositionApi/component/vmodel/model.vue";
import Attributes from "@/components/compositionApi/component/attributes/attributes.vue";
import Slots from "@/components/compositionApi/component/slot/slots.vue";
import Provider from "@/components/compositionApi/component/inject/provider.vue";
import AsyncDemo from "@/components/compositionApi/component/asyncComponent/asyncDemo.vue";
import MouseTrack from "@/components/compositionApi/reuse/mouseTrack.vue";
import PlugDemo from "@/components/compositionApi/reuse/plugs/plugDemo.vue";
import RouterDemo from "@/components/compositionApi/scaled/RouterDemo.vue";



// 选项式api
// import EventDemo from "@/components/optionApi/eventDemo.vue";


</script>

<!--2.视图-->
<template>
  <div class="layout">
    <!--一.组件式api-->
    <!--1.基础-->
    <!--<ReactiveAndRef class="component"></ReactiveAndRef>-->
    <!--<DataBindDemo class="component"></DataBindDemo>-->
    <!--<RenderDemo class="component"></RenderDemo>-->
    <!--<EventDemo class="component"></EventDemo>-->
    <!--<form-input class="component"></form-input>-->
    <!--<LifeCircle class="component"></LifeCircle>-->
    <!--<ComputedAndWatch class="component"></ComputedAndWatch>-->
    <!--2.组件-->
    <!--<RegisterComponent class="component" custom_attr="自定义属性"></RegisterComponent>-->
    <!--<PropsComponent class="component"></PropsComponent>-->
    <!--<event class="component"></event>-->
    <!--<model class="component"></model>-->
    <!--<Attributes class="component" msg_model="msg_model-ok" msg_props="msg_props-ok"  msg_attr="msg_attr"></Attributes>-->
    <!--<slots class="component"></slots>-->
    <!--<provider></provider>-->
    <!--<AsyncDemo></AsyncDemo>-->
    <!--<MouseTrack></MouseTrack>-->
    <!--<PlugDemo></PlugDemo>-->
    <RouterDemo></RouterDemo>

    <!--选项式api-->
    <!--<demo></demo>-->
  </div>
</template>

<!--3.样式-->
<!--注：scoped然能够影响子组件的根节点-->
<style scoped>
  .layout{
    border: 5px dashed #775bdd;
    /*display: flex;*/
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .component{
    height: auto;
    flex: 1 1 500px;
  }
</style>
