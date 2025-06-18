<script setup>
import {ref} from "vue";

let note1_1=`
v-if条件渲染
简介：根据表达式的bool值，控制是否渲染一个元素
格式:
  <label v-if="bool">
区分：
    v-show仅仅是控制dom树上是否显示一个标签元素，display:none
    v-if会修改dom树，会重新进行渲染
`
let showFlag1=ref(true);
let showFlag2=ref(true);

let note1_2=`
v-for列表渲染
简介：从数组中循环渲染元素
格式：
  <label v-for="(item,index) in arr" :key="index">
  或
  <label v-for="(value,key,index) in arr" :key="index">
    <!--子元素可以直接使用item,index -->
    eg:{{index}}
    eg:<label v-if="i%2=0">
  </label>>
注：
   :key=""的作用：用于标识列表中的元素，以便在列表更新时，Vue 可以识别哪些元素发生了变化，而不是简单地替换所有元素
`
let arr = ref('saas');
function changeArr(event){
  let set = new Set(event.target.value);
  arr.value=set
}
let obj={
  name:'zc',
  age:11,
  [Symbol('sym')]:'隐藏符号symbol',
}

</script>

<template>
  <div class="layoutItem container">
    <div id="div1" class="item">
      <p class="title">渲染</p>

      <div class="example">
        <textarea class="note">{{note1_1}}</textarea>
        <div class="cases">
          <div class="case">
            <p class="caseInfo">v-if</p>
            <button @click.stop="showFlag1=!showFlag1">切换显示</button>
            <span v-if="showFlag1">隐藏信息</span>
          </div>
          <div class="case">
            <p class="caseInfo">v-show</p>
            <button @click.stop="showFlag2=!showFlag2">切换显示</button>
            <span v-show="showFlag2">隐藏信息</span>
          </div>
        </div>
      </div>

      <div class="example">
        <textarea class="note">{{note1_2}}</textarea>
        <div class="cases">
          <div class="case">
            <p class="caseInfo">渲染列表ul</p>
            <div style="display: flex">
              <ul>
                渲染数组
                <input type="text" @keyup.stop="changeArr($event)" placeholder="输入去重渲染" style="display: block">
                <li v-for="(item,i) in arr">
                  item={{item}},index={{i}}
                  <span v-if="i%2==0">偶</span>
                  <span v-else>奇</span>
                </li>
              </ul>
              <ul>
                渲染对象{{JSON.stringify(obj)}}
                <li v-for="(v,k,i) of obj">
                  value={{v}},key={{k}},index={{i}}
                </li>
              </ul>
            </div>
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