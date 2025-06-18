
// 一.rest参数和spread语法

// 1.rest参数
// 格式：...args
// 作用：在 解构赋值 或 函数参数中 作为 数组 使用
// function func(...args) {
//     console.log(args)
// }
// func(1,'2',true)

// 2.函数中的特殊变量 arguments
// 作用：函数内部自带的一个隐式变量，当可迭代对象使用
// 注：arguments不是数组！！！
// function func(...args) {
//     console.log(typeof args)
//     console.log(args instanceof Array)//是数组类型
//     console.log(args.push(2))
//
//     console.log(typeof arguments)
//     console.log(arguments instanceof Array)//仅是可迭代对象
//     console.log(arguments[0])
//     console.log(arguments[0])
//     console.log(arguments[Symbol.iterator]().next())
// }
// func(1,true)

//3.Spread语法
// 格式：...可迭代对象
// 作用：
//      1.把 可迭代对象 展开到：
//          函数参数...args(也是个数组)
//          数组[...可迭代对象]
//      2.构造字面量对象：
//          变量={...obj}
// let arr=[3,5,1]
// console.log(Math.max(arr))//错误
// console.log(Math.max(10,...arr,3))
// let str='hello world'
// let [c1,...c2]=[1,...str]//解构+spread展开
// console.log(c1)
// console.log(c2)
// let cs=[...str]//spread展开
// console.log(cs)

// 4.利用Spread语法实现赋值
// let obj={
//     name:'zc',
//     age:11,
// }
// let o1={...obj}


// 二.词法环境和作用域，垃圾回收

// 1.词法环境
// 描述：在 JavaScript 中，每个运行的函数，代码块 {...} 以及整个脚本，都有一个被称为 词法环境（Lexical Environment） 的内部（隐藏）的关联对象
// 组成：
//     环境记录         存储所有局部变量
//                         未申明       词法环境会将代码块中的所有变量设置为unInitializion
//                         遇到变量声明  undefined
//                         赋值         null
//     外部此法环境引用
// let x = 1;
// function func() {//x会立即进入词法环境，但处于未初始化阶段,直到遇到let赋值
//     console.log(typeof x)
//     console.log(x); // ReferenceError: Cannot access 'x' before initialization
//     let x;
//     x=2;
// }
// func();

// 2.垃圾收集
// 通常，函数调用完成后，会将词法环境和其中的所有变量从内存中删除。因为现在没有任何对它们的引用了。与 JavaScript 中的任何其他对象一样，词法环境仅在可达时才会被保留在内存中。


// 二.全局对象
// 内置全局对象   window,全局对象的所有属性都可以被直接访问
// var全局变量


// 三.函数对象
// 描述：在 JavaScript 中，函数的类型是对象，
//      不仅可以调用函数，还能把函数当作对象来处理：增/删属性，按引用传递等

// 1.name属性
// 描述：函数的名字
// function func(){}
// let func_ref=func;
// console.log(func.name)
// console.log(func_ref.name)

// 2.length属性
// 描述：返回函数入参的个数，rest 参数不参与计数
// function func1(){}
// function func2(p1,p2,...p3) {}
// console.log(func1.length)
// console.log(func2.length)

// 3.自定义属性
// function func() {
//     // 计算调用次数
//     func.counter++;
// }
// func.counter = 0; // 初始值
// func()
// func()
// console.log(func.counter)

// 4.函数属性 用来替代 闭包
// function func(){
//     function count(){
//         return ++func.count
//     }
//     func.count=0
//     return count;
// }
// let count1 = func();
// let count2 = func();
// console.log(count1())//1
// console.log(count2())//2
// console.log(count1())//3
// console.log(func()())//0
// console.log(func()())//0

// 5.命名函数表达式（NFE，Named Function Expression)
// 作用：
//     1.它允许函数在内部引用自己
//     2.它在函数外是不可见的
// 适用场景：
//     赋值递归函数给一个变量
// let sayHi = function func(p) {
//     if (p) {
//         console.log(p);
//     } else {
//         func("zc"); // 使用 func 再次调用函数自身
//     }
// };
// // func('ss'); // 错误 func对外不可见
// sayHi(); //默认处理
// sayHi('s'); //默认处理

// 6.new Function(...参数,方法)
// 作用：通过运行时通过参数传递过来的字符串创建的
// 注：没有闭包特性，不能访问词法环境
//     需要向 new Function 创建出的新函数传递数据时，必须显式地通过参数进行传递，不能使用闭包来捕获参数
// let sum = new Function('a', 'b', 'return a + b');
// console.log(sum(1,2))

// 四.setTimeout和setInterval
// setTimeout   将函数推迟到一段时间间隔之后再执行。
// setInterval  固定间隔时间重复运行一个函数
// function handler(...args) {
//     console.log(args)
// }
// let timerId1 = setTimeout(handler, 2000, "Hello", "John");
// let timerId2 = setInterval(handler,1000,'s',1);
// 取消定时器
// clearTimeout(timerId1)
// clearTimeout(timerId2)


// 五.装饰器模式 和 call/apply bind
// 1.func.call和func.apply设定上下文
// 作用：当对象的func在被调用时需要obj对象的上下文
// 方式：
//      call(context,...args)       rest参数接收参数列表
//      apply(context,arrayLike)    接收可迭代对象不是真正的数组
//      func.bind(对象)              有点想友元方法
// let obj={
//     someMethod() {
//         return 1;
//     },
//     func(x) {
//         console.log(`func(${x})`)
//         return x * this.someMethod();
//     }
// }
// function decorator(func){
//     return function (p){
//         console.log('pre')
//         let res = func.call(this,p);
//         console.log('post')
//         return res;
//     }
// }
// obj.func=decorator(obj.func);
// obj.func(1)

// 2.方法借用
// [].join.call()

// 3.防抖动和节流
// 抖动 清理定时器，再刷设置时器
// 节流 操作前设置标记位，操作后设置定时器，定时释放标志位允许其它时间调用函数


// 4.bind可以绑定对象和参数
// 注：同一个函数不能被重复绑定
// let user = {
//     firstName: "zc",
//     sayHi(...x) {
//         console.log(this.firstName+`:${[...x].join('-')}`);
//     }
// };
// let sayHi = user.sayHi.bind(user,1,2,3,4);// 可以防止user对象发生变化造成的错误
// setTimeout(sayHi, 1000);
// setTimeout(user.sayHi, 1000);//传入的方法没有对象环境
// 函数的重新绑定
// 注：不能对bind()得到的函数再次bind()
// function f() {
//     return this.name;
// }
// let f1 = f.bind({name:"zc1"});
// let f2 = f1.bind({name:"zc2"});
// let f3 = f.bind({name:"zc3"});
// console.log(f1())
// console.log(f2())
// console.log(f3())
// console.log(f1())
// 对象方法的绑定
// let obj1={
//     name:'obj1',
//     func(){
//         return this.name
//     }
// }
// let obj2={
//     name:'obj2',
// }
// console.log(obj1.func.bind(obj2)())

// 六.箭头函数
// 注：
//      1.箭头函数没有 this。如果访问 this，则会从外部获取
//      2.箭头函数也没有 arguments 变量

let func=(...args)=>{
    console.log(arguments)
}
func(1,2,34)












