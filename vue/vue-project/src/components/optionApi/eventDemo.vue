<script>
export default {
  data(){
    return {
      count: 0
    }
  },
  methods:{
    resetCount(){
      this.count=0
    }
  },
  mounted(){
    setInterval(()=> {
      this.count++
    },1000)
  }
}
</script>

<template>
  <button @click="++count">{{count}}</button>
  <button @click="resetCount">重置</button>
  {{count}}
</template>

<style scoped>

</style>