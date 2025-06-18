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

</script>

<template>
  <div class="container">
    <div id="div1" class="item">
      <p class="title">事件绑定</p>
      <div class="example">
        <!--1.左侧文本-->
        <textarea class="note"  style="flex: 0 0 50%;min-height: 500px">{{note1_1}}</textarea>
        <!--2.右侧实例-->
        <div class="cases">
          <!--2.1.具体用例-->
          <div class="case">
            <!--2.1.1.具体用例的描述-->
            <p class="caseInfo">.stop</p>

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