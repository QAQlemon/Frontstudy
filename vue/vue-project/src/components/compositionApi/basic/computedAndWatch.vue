<script setup>
import {computed, onMounted, reactive, ref, watch} from "vue";

let note1_1=`
1.计算属性-computed
简介：
  计算属性会自动追踪响应式依赖
  用于描述依赖响应式状态的复杂逻辑
  计算属性值会基于其响应式依赖被缓存
格式：
  let str=ref('adadw')
  let computed_str_len= computed(()=>{//getter方法，可以有一个隐藏的参数
    return str.value.length
  });
  let computed_str_set=computed({
    get(preValue){//上个值
      return str.value.length
    },
    set(newValue){
      str+=newValue
    },
  })
`
let firstName=ref('')
let lastName=ref('')
let fullName=computed({
  get(preValue){
    console.log(preValue,firstName.value,lastName.value)
    return firstName.value+' '+lastName.value;
  },
  set(newValue){
    [firstName.value,lastName.value]=newValue.split(' ')
  }
})


let note1_2=`
2.侦听器
简介：
  在每次响应式状态发生变化时触发回调函数
触发源：
  ref      类型的变量
  reactive 类型的变量
  Array    类型的变量，数组里面的元素可以是 ref 类型的变量、reactive 类型的变量、Function 函数
  Function getter函数
选项：
  deep
  immediate
  flush
格式：

`
//一.ref
//基本类型
let obj1_2_1=ref(0)
watch(obj1_2_1,(count)=>{
  console.log('侦听器1：'+count)
})

//对象 侦听对象是否变化
let obj1_2_2=ref({count:0})
watch(obj1_2_2,(count)=>{
  console.log('侦听器2：'+count)
},)

//二.reactive
//基本类型-不支持
//对象 侦听对象是否变化
let obj1_2_3=reactive({count:0})
watch(obj1_2_3,(count)=>{
  console.log('侦听器4：'+count)
})

</script>

<template>
  <div class="container">
    <div id="div1" class="item">

      <p class="title">计算属性 和 监听器</p>
      <div class="example">
        <!--1.左侧文本-->
        <textarea class="note"  style="flex: 0 0 50%;min-height: 500px">{{note1_1}}</textarea>
        <!--2.右侧实例-->
        <div class="cases">
          <!--2.1.具体用例-->
          <div class="case">
            <!--2.1.1.具体用例的描述-->
            <p class="caseInfo">计算属性 computed</p>
            <input type="text" placeholder="firstName" v-model="firstName">
            <input type="text" placeholder="lastName" v-model="lastName"><br>
            <input type="text" v-model="fullName">
            <p>{{fullName}}</p>
          </div>

        </div>
      </div>

      <div class="example">
        <!--1.左侧文本-->
        <textarea class="note"  style="flex: 0 0 50%;min-height: 500px">{{note1_2}}</textarea>
        <!--2.右侧实例-->
        <div class="cases">
          <!--2.1.具体用例-->
          <div class="case">
            <!--2.1.1.具体用例的描述-->
            <p class="caseInfo">侦听器 watch ref(0)</p>
            <button @click="obj1_2_1++">{{obj1_2_1}}</button>

            <p class="caseInfo">侦听器 watch ref({count:0})</p>
            <button @click="++obj1_2_2.count">{{obj1_2_2}}</button>
            <button @click="obj1_2_2=ref({count:0})">改变ref，使得侦听失效</button>

            <p class="caseInfo">侦听器 watch reactive({count:0})</p>
            <button @click="obj1_2_3.count++">{{obj1_2_3}}</button>


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