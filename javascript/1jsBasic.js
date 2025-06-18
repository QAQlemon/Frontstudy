// //现代模式 可用于整个文件或单个函数
// // 1、不允许使用未声明的变量
// // 2、不允许删除变量或函数
// // 3、函数中不允许有同名的参数
// // 4、eval 语句的作用域是独立的
// // 5、不允许使用 with 语句
// // 6、不允许写入只读属性
// // 7、不允许使用八进制数
// // 8、不能在 if 语句中声明函数
// // 9、禁止使用 this 表示全局对象
// "use strict";
//
// //一.变量和常量
// //1.变量
// // 1.1.let
// // let v;
// let v1='hello';
//
// 1.2.var
// var v2="var"
// var v2=v1//深拷贝
// v2="v2修改"
// console.log(v1)
// console.log(v2)
//
// 2.常量
// const cv=1;
// a=2;//报错

// var let const区别
// var变量提升：
// var a=1
// {
//     // var a=2
//     //等价：
//     var a;
//     a=2;
// }
// console.log(a)

// // 二.数据类型 7(null,undefined,symbol)+1(Object)
// // 1.Number
// // 特殊字符: Infinity -Infinity NaN
// console.log(typeof 1.0)
// // 2.BigInt 范围更大
//
// // 3.String js中没有char类型只有String
// // 双引号
// let str1="str1"
// // 单引号
// let str2='str2'
// // 反引号 功能扩展${变量名}
// let str3=`${str2}+"反引"`
// console.log(str3)
//
// // 4.Boolean
// // 5.null       仅仅是一个代表“无”、“空”或“值未知”的特殊值,能转换为0
// // 6.undefined  未被赋值，能转换为NaN
// // let age=1;
// // age=undefined
// // console.log(age)
//
// // 7.Object 储存数据集合和更复杂的实体
//
// // 8.Symbol 创建对象的唯一标识符

// 三.类型转换 typeof Type(值)
// console.log(null)
// console.log(String(null))
// console.log(1)
// console.log(String(1))
// console.log(true)
// console.log(String(true))
// console.log('6'/'2')//在算术函数和表达式中，数字字符串会自动进行 number 类型转换。
// console.log('01'==1)
// console.log(Number('ssss'))
// console.log(Boolean('ssss'))
// console.log(Boolean(''))
// console.log(Boolean())


// 四.基础运算符、比较符、逻辑运算符
// console.log(2**2)//2^2
// console.log('2'+'2')//22
// console.log('2'/'2')
// console.log(2+2+'2'+2+2)//4222
// 在二元运算符加号起作用之前，所有的值都被转化为了数字
// apples = "2";
// oranges = "3";
// console.log( +apples + +oranges ); // 5
// console.log( apples + oranges ); // 23
// console.log(''==false)//会进行类型转换
// console.log(''===false)//在进行比较时不会做任何的类型转换
// 4.1.值比较
// 注：
//  undefined 和 null 在相等性检查 == 中不会进行任何的类型转换
//  当使用数学式或其他比较方法 < > <= >= 时：null 被转化为 0，undefined 被转化为 NaN
//  undefined 在比较中被转换为 NaN，与任何值进行比较都会返回 false
// console.log( null > 0 );  // (1) false
// console.log( null == 0 ); // (2) false
// console.log( null >= 0 ); // (3) true
// console.log( undefined > 0 ); // false (1)
// console.log( undefined <= 0 ); // false (2)
// console.log( undefined == 0 ); // false (3)
// 4.2.逻辑运算符
// ||（或）
// &&（与）
// !（非）
// ??（空值合并运算符） 如果第一个参数不是 null/undefined，则 ?? 返回第一个参数。否则，返回第二个参数
// let a
// let b=2
// console.log(a??'未赋值')
// console.log(b??1)

// 五.流程控制语句
// if(){
// }else if (){
// }else {
// }
// label:{
//     for (;;){
//         continue;
//         break label;
//     }
// }
// let arg=''
// switch (arg) {
//     case "1"://严格比较
// }


//六.函数
// 6.1.函数声明 函数声明在声明它的代码块内任意位置都可用
// 格式：function fun(){}
// 6.2.函数表达式
// let func_express=function (param1) {
//     console.log('func_express')
// }
// let f=func
// func()
// f()
// 6.3.lambda表达式
// lambda=(param1)=>{
//
// }

//交互相关
// 模态
// alert    会显示一条信息，并等待用户按下 “OK”
// prompt   带有文本消息的模态窗口，还有 input 框和确定/取消按钮
// confirm  确定和取消两个按钮的模态窗口