<script setup>
let note1_1=`
文本插值：
格式：
  {{}}    可插入变量或表达式
  v-html="" 插入html文本
  v-text="" 插入纯文本
`
let count=0
let str_html=`<span style="color: #00a6ff;border: 1px black solid">插入的html文本</span>`
let str_text=str_html

let note1_2=`
属性插值：
格式：
  v-bind="var"    //完整写法
  :attr="var"   //简写方式
  :attr         //属性和变量名一样
  可插入变量或表达式
`
let str='插入的str字符串'
let value='02:13'
value='2014-02-09'

let note1_3=`
过滤器插值
注：vue3已移除 建议使用计算属性
格式：
  {{变量|filter函数}}
全局注册过滤器：
  Vue.filter('name',函数)
`
function filter(value){
  return value.toUpperCase()
}
let str_filter=''
function handEvent(event) {
  alert(event.target.value)
  str_filter=event.target.value
}
</script>

<template>
  <div class="layoutItem container">

    <div id="div1" class="item">
      <p class="title">插值</p>

      <div class="example">
        <textarea class="note">{{note1_1}}</textarea>
        <div class="cases">

          <div class="case">
            <p class="caseInfo">插入一个表达式{ {express} }：</p>
            {{1+count}}
            {{'hello world'+' zc'.length}}
          </div>

          <div class="case">
            <p class="caseInfo">插入html文本  v-html="str_html"：</p>
            <div v-html="str_html"></div>
            <p class="caseInfo">插入纯文本  v-text="str_text"：</p>
            <div v-text="str_text"></div>
          </div>

        </div>
      </div>

      <div class="example">
        <textarea class="note">{{note1_2}}</textarea>
        <div class="cases">

          <div class="case">
            <p class="caseInfo">:placeholder="str"</p>
            <input type="text" :placeholder="str" style="display: block">
          </div>

          <div class="case">
            <p class="caseInfo">:value</p>
            <input type="date" :value  style="display: block">
          </div>

        </div>
      </div>

      <div class="example">
        <textarea class="note">{{note1_3}}</textarea>
        <div class="cases">
          <div class="case">
            <p class="caseInfo">略</p>
          </div>
        </div>
      </div>

    </div>


  </div>
</template>

<style scoped>
div{

}
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
  /*字体属性*/
  font-family: 宋体;
  font-size: 20px;/* 设置字体大小 */
  font-weight: bold;/* 设置字体粗细 */
  font-style: normal;/* 设置字体样式 斜体 */
  color: #585bfd; /* 设置文本颜色 */

  /*文本装饰*/
  text-decoration-line: underline;/* 设置文本装饰为 划线 */
  /*text-shadow: #1c0e96 10px 10px 2px; !* 添加文本阴影效果 *!*/

  /*文本对齐*/
  text-align:center;

  /*段落*/
  line-height: 100%; /* 设置行高为1.5倍 */
  /*letter-spacing: 0px; !* 设置字符间距为1像素 *!*/
  /*word-spacing: 0px; !* 设置单词间距为2像素 *!*/
  /*text-indent: 0px; !* 设置文本首行缩进为20像素 *!*/
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