<script setup>
import {mouseMove} from "@/components/compositionApi/reuse/mouseMoveReuse.js";

let {x,y} = mouseMove();
</script>

<template>
  <p>{{x}},{{y}}</p>
</template>

<style scoped>

</style>