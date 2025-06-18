<script setup>
import {reactive, ref} from "vue";

let items=reactive([]);
for(let i=0;i< 5;i++){
  items.push(i);
}

</script>

<template>
  <div >
    <p v-for="item in items" :key="item.id" class="item">{{item}}</p>
  </div>
</template>

<style scoped>
  .item{
    background: #42f179;
    border: 1px solid #e4efe8;
  }
</style>