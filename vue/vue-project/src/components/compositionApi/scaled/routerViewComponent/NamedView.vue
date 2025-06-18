<script setup>

</script>

<template>
  <main >
    <p class="head">namedView Page</p>
    <div class="layout">
      <RouterView name="LeftMenu" class="menu"></RouterView>
      <RouterView name="content" class="content"></RouterView>
    </div>
  </main>
</template>

<style scoped>
  .head{
    text-align: center;
  }
  .layout{
    display: flex;
    flex-direction: row;
    height: 400px;
  }
  .menu{
    border: 1px #585bfd solid;
    flex-basis: 100px ;
    flex-grow: 0.05;
    flex-shrink: 0;
  }
  .content{
    border: 1px #58c3fd solid;
    flex-basis: 500px ;
    flex-grow: 1;
    flex-shrink: 0;
  }
  main{
    border: 1px #00a4fd solid;
    height: 500px;
  }
</style>