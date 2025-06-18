<script setup>
import {useRoute, useRouter} from "vue-router";
import {reactive, ref, watch, watchEffect} from "vue";
let router = useRouter();
let route = useRoute();


let count=ref(0)
let url = ref('/nested');
watch(url, (val) => {
  console.log(count.value++)
  router.push({
    path:url.value,
    // params:route.params,
    // query:route.query,
    // hash:route.hash
  });
})
// watch(route,(val) => {
//   url.value=route.path
// })
</script>

<template>

  <div class="option">
    <input type="text" v-model="url">
    <div>
      <input type="radio" name="path_select" id="select_1" v-model="url" value="/">
      <label for="select_1">root</label>
    </div>
    <div>
      <input type="radio" name="path_select" id="select_2" v-model="url" value="/nested">
      <label for="select_2">nested</label>
    </div>
    <div>
      <input type="radio" name="path_select" id="select_3" v-model="url" value="/query">
      <label for="select_3">query</label>
    </div>
    <div>
      <input type="radio" name="path_select" id="select_4" v-model="url" value="/namedView/">
      <label for="select_4">namedView</label>
    </div>
    <div>
      <input type="radio" name="path_select" id="select_5" v-model="url" value="/redirect">
      <label for="select_5">redirect to namedView</label>
    </div>
    <div>
      <input type="radio" name="path_select" id="select_6" v-model="url" value="/alias">
      <label for="select_6">alias of redirect</label>
    </div>
    <div>
      <input type="radio" name="path_select" id="select_7" v-model="url" value="/routeGuard">
      <label for="select_7">route Guard</label>
    </div>
    <div>
      <input type="radio" name="path_select" id="select_8" v-model="url" value="/meta">
      <label for="select_8">route meta info</label>
    </div>
    <div>
      <input type="radio" name="path_select" id="select_9" v-model="url" value="/pinia">
      <label for="select_9">pinia test</label>
    </div>
    <!--<div>-->
    <!--  <RouterLink :to='{name:"outer",params:{id:count}}'>点击进入/nested/id参数/{{count}}</RouterLink>-->
    <!--</div>-->
    <!--<div>-->
    <!--  <RouterLink :to='{name:"query",query:{id:count}}' replace>点击进入/query?id={{count}}</RouterLink>-->
    <!--</div>-->

  </div>

  <div class="router_info">
    <!--{{route}}-->
  </div>

  <main>
    <!--<RouterView />-->

    <RouterView v-slot="{Component}">
      <transition name="view">
        <Component :is="Component"></Component>
      </transition>
    </RouterView>

  </main>

</template>

<style scoped>
  .option{
    border: 1px #00a4fd solid;
  }
  .router_info{
    border: 1px #00a4fd solid;
  }
  main{
    border: 1px #00a4fd solid;
  }

.view-leave-active,
.view-enter-active{
  transition: opacity 0.5s ease;
}
.view-leave-active{
  position: absolute;
}
.view-enter-from,
.view-leave-to{
  opacity: 0;
}

</style>