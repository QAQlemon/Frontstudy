<script setup>
import {onMounted, ref} from "vue";

let note1_1=`
1.事件绑定 v-on

格式：
  v-on:event=""  完整写法
  @event=""      简写方式
指定事件处理器：
  内联  内联语句，一条表达式
  方法  组件上定义的方法的属性名
`
let count=ref(0)
// let count=0
onMounted(()=>{
  setInterval(()=>{
    count.value++
  },1000)
})
function resetCount(value){
  alert('当前值：'+this.count)
  count.value=0
}
let note1_2=`
2.给事件处理器传递参数

格式：
  @click="func"   接收event事件,等价func($event)
  @click="func()" 无任何参数
  @click="func($event)"  传递事件参数
`
function textChange(event){
  let target = event.target;
  let parentElement = target.parentElement;

  let newElement = document.createElement('p');
  newElement.textContent=`target=${event.target}
  value=${target.value}
  `
  // newElement.innerHTML=`target=${event.target}</br>
  // value=${target.value}
  // `

  newElement.style.whiteSpace="pre-line"
  newElement.style.margin='0'
  parentElement.append(newElement)

}
let persons=['zc','jane','bob']
let show=new Array(persons.length).fill(false)
function choosePerson(event,index){
  event.target.textContent=''
  if(show[index]){
    event.target.textContent=persons[index]
  }
  show[index]=!show[index]
}


let note1_3=`
3.事件修饰符
格式：
  @event.xxx.xxx  xxx式修饰符

事件修饰符：
  .stop      阻止事件冒泡，event|element.stopPropagation()
  .prevent   阻止默认行为,event|element.preventDefault()
  .self      只有点击当前元素本身时才会触发回调
  .capture   当元素发生冒泡时,在被内部元素处理前，先被外部处理
  .once      事件只触发一次
  .passive
按键修饰符
  键盘事件
    类型：@keyup @keydown
  按键别名
    简介：Vue 为一些常用的按键提供了别名,
    类型：.enter .tab .delete .esc .space .up|down|left|right
  系统按键修饰符
    简介：系统按键修饰符和常规按键不同。与 keyup 事件一起使用时，该按键必须在事件发出时处于按下状态
    类型：.ctrl .alt .shift .meta
  精确控制修饰符
    简介：精确控制触发事件所需的 系统修饰符 的组合
    类型：.exact

鼠标按键修饰符
  简介：修饰鼠标事件
  类型：.left .middle .right
`
function handleEventDec(event){
  let info=`
    event:${event}
    key:${event.key}
  `
  alert(info)
}
function handler(event){
  let info=`
    event=${event}

    target=${event.target}
    name=${event.target.getAttribute('name')}

    currentTarget=${event.currentTarget}
    name=${event.currentTarget.getAttribute('name')}
  `
  alert(info)
}

</script>

<template>
  <div class="container">
    <div id="div1" class="item">
      <p class="title">事件绑定</p>

      <div class="example">
        <textarea class="note">{{note1_1}}</textarea>
        <div class="cases">

          <div class="case">
            <p class="caseInfo">内联 @click="++count"</p>
            <button @click="++count">增1</button>
            <p>{{count}}</p>
          </div>

          <div class="case">
            <p class="caseInfo">函数触发 @click="resetCount(count)</p>
            <button @click="resetCount(count)">重置count</button>
            <p>{{count}}</p>
          </div>

        </div>
      </div>

      <div class="example">
        <textarea class="note">{{note1_2}}</textarea>
        <div class="cases">
          <div id="case1" class="case">
            <p class="caseInfo">传递参数 事件</p>
            <input id="in" type="text" @change="textChange">
          </div>
          <div id="case1" class="case">
            <p class="caseInfo">传递参数 事件</p>
            <ul>
              <li v-for="(item,index) in persons" :key="index" @mouseover="choosePerson($event,index)">{{item}}</li>
            </ul>
          </div>

        </div>
      </div>

      <div class="example">
        <textarea class="note"  style="flex: 0 0 50%;min-height: 500px">{{note1_3}}</textarea>
        <div class="cases">

          <div class="case">
            <p class="caseInfo">.stop</p>
            <div name="outer" @click="handler">
              <!--<button name="inner" @click="handler">@click点击</button>-->
              <!--<button name="ss" @click.stop="handler">@click.stop点击</button>-->
              <a name="inner" @click.prevent="handler" href="http://www.baidu.com" style="display: block">@click.prevent</a>
            </div>
            <p class="caseInfo">.prevent</p>
            <p class="caseInfo">.once</p>
            <p class="caseInfo">.self</p>
            <p class="caseInfo">.capture</p>

          </div>

          <div class="case">
            <p class="caseInfo">按键修饰</p>
            <button @keydown.alt.enter="handleEventDec">alt+enter</button>
          </div>

          <div class="case">
            <p class="caseInfo">精确控制修饰符</p>
            <p class="caseInfo">@click.ctrl</p>
            <button @click.ctrl="handleEventDec">只要按了ctl就行，可以同时按其他键</button>
            <p class="caseInfo">@click.ctrl.exact </p>
            <button @click.ctrl.exact="handleEventDec">只能按ctrl和鼠标(排除其它系统修饰符alt、shift)</button>
            <p class="caseInfo">@click.exact </p>
            <button @click.exact="handleEventDec">只能按鼠标</button>
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