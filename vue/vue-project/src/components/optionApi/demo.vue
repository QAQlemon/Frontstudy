<script>
export default {
  name: "demo",
  data:function (){
    return {
      msg:'hello world',
      raw_html:'<a href="http://www.baidu.com">百度链接</a>',
      color:'color',
      clickable:true,
    }
  }
}

</script>

<template>
  <p>{{msg}}</p>
  <p>{{ raw_html }}</p>
  <p v-html="raw_html"></p>

  <p v-bind:class="color">{{msg}}</p>
  <button :disabled="clickable">按钮</button>
</template>

<style scoped>
  .color{
    color: aqua;
  }
</style>