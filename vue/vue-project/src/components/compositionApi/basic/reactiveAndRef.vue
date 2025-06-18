<script setup>
import {customRef, onMounted, reactive, ref, shallowReactive, shallowRef} from "vue";

let note1_1=`
一.各种ref
1.声明ref：
  ref()
  shallowRef()
2.ref本质：
  由于Proxy是只能监听对象，原始数据需要放置在对象中，这样就可以使Proxy进行监听一个有value属性的对象

3.ref自动解包
  简介：
    在模板中使用时，ref 会自动解包，不需要写.value
  条件：
    在模板渲染上下文中，只有顶级的 ref 属性才会被解包
    如果 ref 是文本插值的最终计算值 (即 {{ }} 标签)，那么它将被解包
    ref 会在作为reactive响应式对象的属性被访问或修改时自动解包,
      注:ref作为shallowReactive响应式对象的属性不会自动解包
4.深层响应和浅层响应
  深层响应
    ref对深层属性变化都能响应
  浅层响应
    shallowRef仅对ref.value属性值变化进行响应
`

//深层次
//ref基本类型
let count=ref(22)
//ref对象
let obj_ref=ref({
  outer:{
    inner:{
      count:0//obj.outer.inner.count是顶级ref
    }
  }
})
obj_ref.value
//浅层次
let obj_sref = shallowRef({
  outer:{
    inner:{
      count:0//obj.outer.inner.count是顶级ref
    }
  }
});


let obj1={id:count}//obj1.id不是顶级ref

function change(){
  //ref基本类型
  count.value++;

  //ref对象
  // 1.深层次响应
  // obj_ref.value.outer.inner.count++;//响应
  // obj_ref.value.outer=1//响应
  // 2.浅层次响应
  // 注：仅能追踪到.value的变化
  // obj_sref.value.outer.inner.count++;//不响应
  // obj_sref.value.outer={//不响应
  //   inner:{
  //     count:1
  //   }
  // }
  // obj_sref.value={//能响应
  //   outer:{
  //     inner:{
  //       count:1//obj.outer.inner.count是顶级ref
  //     }
  //   }
  // };

}

let note1_2=`
二.reactive
声明：
  reactive()          深层响应
  shallowReactive()   浅层响应 只有根级别的属性是响应式的
本质：
  通过Proxy代理对象属性的get和set，使对象本身具有响应性
  由于Proxy不能代理基本类型，故reactive不支持基本类型的响应
ref属性的自动解包
  只有在深层响应下的reactive响应对象才能自动解包ref属性
`
let obj2={
  inner:{
    count:0
  },
  count:0
}
//深层响应
let obj_react=reactive(obj2)
let obj_react2=reactive(obj2)
let obj_react3=reactive(obj_react)
//浅层响应
let obj_sreact=shallowReactive({
  inner:{
    count:0
  },
  count:0,
})

function change2(){
  //深层响应
  // obj_react3.inner.count++;//能响应
  // obj_react3.count++;

  //浅层响应
  obj_sreact.count++;//能响应
  obj_sreact.inner.count++;//不能响应
}

let info = ref({
  name:'zc'
});
let person_react = reactive({
  info
});
let person_sreact = shallowReactive({
  info
});
person_react.info.name//自动解包reactive响应对象的ref属性
person_sreact.info.value.name


</script>

<template>
  <div class="container">
    <div id="div1" class="item">
      <p class="title">ref和reactive</p>
      <div class="example">
        <!--1.左侧文本-->
        <textarea class="note"  style="flex: 0 0 50%;min-height: 500px">{{note1_1}}</textarea>
        <!--2.右侧实例-->
        <div class="cases">
          <!--2.1.具体用例-->
          <div class="case">
            <!--2.1.1.具体用例的描述-->
            <p class="caseInfo">3.1.模板中的顶级ref发生自动解包，无需 .value</p>
            <button @click="change">点击+1</button>
            <p>1-{{count.value}}-.value无意义</p>
            <p>2-{{count+1}}-count+1解包</p>

            <p class="caseInfo">3.2.模板中的非顶级ref直接作为插值(无计算)，无需 .value</p>
            <p>3-{{obj1.id}}-非顶级ref，但无计算，自动解包</p>
            <p>3-{{obj1.id+1}}-非顶级ref，需要.value</p>
            <p>3-{{obj1.id.value}}-需要.value</p>

            <p class="caseInfo">4.1.深层响应</p>
            <button @click="change">点击+1</button>
            <p>{{obj_ref}}</p>
            <p>{{obj_ref.outer.inner.count}}</p>

            <p class="caseInfo">4.2.浅层响应</p>
            <button @click="change">点击+1</button>
            <p>{{obj_sref}}</p>
            <p>{{obj_sref.outer.inner.count}}</p>


          </div>


        </div>
      </div>

      <div class="example">
        <!--1.左侧文本-->
        <textarea class="note"  style="flex: 0 0 50%;min-height: 500px">{{note1_2}}</textarea>
        <!--2.右侧实例-->
        <div class="cases">
          <div class="case">
            <!--2.1.1.具体用例的描述-->
            <p class="caseInfo">1.深层响应 reactive</p>
            <button @click="change2">点击+1</button>
            <p>1-{{obj_react}}-</p>
            <p>2-{{obj_react2}}-</p>
            <p>3-{{obj_react3}}-</p>

            <p class="caseInfo">2.浅层响应 shallowReactive</p>
            <button @click="change2">点击+1</button>
            <p>2-{{obj_sreact.obj_ref}}-ref属性直接插值，自动解包</p>
            <p>1-{{obj_sreact}}-</p>

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