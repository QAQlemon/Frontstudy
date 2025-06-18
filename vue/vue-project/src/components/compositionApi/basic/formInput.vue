<script setup>
import {onMounted, ref} from "vue";

let note1_1=`
1.v-model
作用：
  根据所使用的元素自动使用对应的 DOM 属性和事件组合
  属性     事件       标签
  value   input    <input>          单行文本输入
                   <textarea>       多行文本输入
          change   <select>         下拉框
  checked change   <input type="checkbox">  复选框
                                             单个-布尔bool
                                             多个-数组或集合
                   <input type="radio">     单选框


格式：
  v-on:event=""  完整写法
  @event=""      简写方式
指定事件处理器：
  内联  内联语句，一条表达式
  方法  组件上定义的方法的属性名
`
let msg1_1 = ref('');
let checked1_1=ref(false);
let data1_1=ref([]);
let radioCheckedValue1_1=ref('');
let radioChecked1_1=ref(false);
let select1_1=ref(1);

let note1_2=`
1.v-model修饰符
格式：
  v-model.lazy="变量"
修饰符
  .lazy     不会在每次 input 事件后更新数据，在每次 change 事件（失去焦点）后更新数据
  .number   让用户输入自动转换为数字
  .trim     默认自动去除用户输入内容中两端的空格


`
let msg1_2=ref('')

</script>

<template>
  <div class="container">
    <div id="div1" class="item">
      <p class="title">表单输入绑定</p>

      <div class="example">
        <!--1.左侧文本-->
        <textarea class="note"  style="flex: 0 0 50%;min-height: 500px">{{note1_1}}</textarea>
        <!--2.右侧实例-->
        <div class="cases">
          <!--2.1.具体用例-->
          <div class="case">
            <!--2.1.1.具体用例的描述-->
            <p class="caseInfo">文本input 和 多行文本textArea</p>
            <input type="text" v-model="msg1_1"><br>
            <textarea v-model="msg1_1"></textarea>
            <p>{{msg1_1}}</p>
          </div>
          <div class="case">
            <p class="caseInfo">复选框（单个） 布尔bool checked属性</p>
            <input type="checkbox" v-model="checked1_1">
            <!--<input type="checkbox" v-model="" value="ss">-->
            <p>{{checked1_1}}</p>

            <p class="caseInfo">复选框（多个）绑定包含所有当前被选中的框的value值</p>
            <input type="checkbox" v-model="data1_1" value="zc">zc
            <input type="checkbox" v-model="data1_1" value="john">john
            <input type="checkbox" v-model="data1_1" value="bob">bob
            <p>{{data1_1}}</p>

            <!--<label for="checkbox">{{ checked1_1 }}</label>-->
          </div>
          <div class="case">
            <p class="caseInfo">单选框 value属性</p>
            <input type="radio" v-model="radioCheckedValue1_1" value="zc">
            <input type="radio" v-model="radioCheckedValue1_1" value="bob">
            <!--<input type="radio" v-model="radioCheckedValue1_1">-->
            <p>{{radioCheckedValue1_1}}</p>
          </div>
          <div class="case">
            <p class="caseInfo">选择器 value属性</p>
            <select v-model="select1_1" multiple>
              <option value="a">aaaa</option>
              <option value="b">bbbb</option>
              <option value="c">ccccc</option>
            </select>
            <p>{{select1_1}}</p>
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
            <p class="caseInfo">无修饰符</p>
            <input v-model="msg1_2">

            <p class="caseInfo">.lazy</p>
            <input v-model.lazy="msg1_2">

            <p class="caseInfo">.number</p>
            <input v-model.number="msg1_2">

            <p class="caseInfo">.trim</p>
            <input v-model.trim="msg1_2">

            <p>{{typeof msg1_2}} {{msg1_2}}</p>
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