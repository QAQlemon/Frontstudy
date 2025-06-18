<script setup>
import {
  getCurrentInstance,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref
} from "vue";

let note1_1=`
1.挂载 mounted
简介：

2.更新 updated
简介：

3.卸载 unMounted
简介：


`
let count=ref(0)

onBeforeMount(()=>{
  console.log("BeforeMount")
})
onMounted(()=>{
  console.log("mounted",el_p.value)
})

onBeforeUpdate(()=>{
  console.log("BeforeUpdate",el_p.value)
})
onUpdated(()=>{
  console.log(`Updated `,el_p.value)
})

onBeforeUnmount(()=>{
  console.log("BeforeUnmount",el_p.value)
})
onUnmounted(()=>{
  console.log("Unmounted",el_p.value)
})
let show=ref(true)
let el_p=ref()

// setInterval(()=>{
//   count.value++
//   console.log('count',count)
// },5000)

</script>

<template>
  <div class="container">
    <div id="div1" class="item">
      <p class="title">生命周期</p>
      <div class="example">
        <!--1.左侧文本-->
        <div class="note"  style="flex: 0 0 50%;">
          <textarea style="white-space: pre-line;width:100%;height: 50%;display: block">
            {{note1_1}}
          </textarea>

          <button @click="count++">修改count</button>
          <p ref="el_p">计数器：{{count}}</p>

          <button @click="show=!show">修改dom</button>
          <p v-if="show" ref="el_p">元素1</p>

        </div>




        <!--2.右侧实例-->
        <div class="cases">
          <!--2.1.具体用例-->
          <div class="case">
            <!--2.1.1.具体用例的描述-->
            <p class="caseInfo">.stop</p>
            <img src="../../../assets/vue生命周期.png" alt="加载失败" class="note" style="width: 500px;display: inline-block">
          </div>


        </div>

      </div>



    </div>

  </div>
</template>

<style scoped>
.container{
  width: auto;
  height: auto;
  border: 5px dashed #dcdfe6;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.item{
  width: 100%;
  height: 100%;
  min-height: 300px;
  border: 5px dashed #585bfd;

  margin-bottom: 5px;
  padding: 5px;

  flex: 1 0 auto;
}

.title{
  margin: 0px;
  font-family: 宋体;
  font-size: 20px;/* 设置字体大小 */
  font-weight: bold;/* 设置字体粗细 */
  font-style: normal;/* 设置字体样式 斜体 */
  color: #585bfd; /* 设置文本颜色 */
  text-decoration-line: underline;/* 设置文本装饰为 划线 */
  text-align:center;
  line-height: 100%;
}

.example{
  border: 1px red dashed;
  margin-top: 5px;
  display: flex;
  justify-content: left;
}
.note{
  flex: 0 0 40%;

  min-height: 200px;

  margin: 0;
  border-bottom: 1px #589afd dashed;
}
.cases{
  flex: 1 0 auto;
  border:2px #d48c7f dashed;
  overflow: auto;
}
.caseInfo{
  margin: 0;
  color: #ff0000;
}
.case{
  height: auto;
  border-top: 1px #8040ef dashed;
  margin: 5px;
  /*color: #bd26b5;*/
}
</style>