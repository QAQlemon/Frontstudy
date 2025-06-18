// 类

// 一.class基本语法
// 简介：
//      本质是个function,等于它的.prototype.constructor
//      它的.prototype包含了constructor和其它方法，for in看不到
// 特性：
//      1.prototype 中的所有方法的 enumerable 标志设置为 false
//      2.类总是使用 use strict。 在类构造中的所有代码都将自动进入严格模式
// class cls{
//     // 1.类字段
//     // 类字段的重要区别在于，它们会被挂在实例对象上，而非 User.prototype 上
//     _name='default'
//     // 2.构造函数
//     constructor(name=2) {
//         //通过getter和setter设置和赋值  name不是属性
//         //否则，作为子对象的一个属性，而非原型链上的属性
//         this.name = name;
//         // Object.defineProperty(this,'name',{enumerable:false})
//     }
//     // 3.getter()和setter()
//     // 注：不参与for in显示
//     // get name(){
//     //     return this._name;
//     // }
//     // set name(name){
//     //     console.log(`修改name：${this.name}=>${name}`)
//     //     this._name = name;
//     // }
//     sayHi(msg) {
//         console.log(this.name+':'+msg)
//     }
// }
// let o1=new cls('zc1')
// let o2=new cls('zc2')
// console.log(o1)
// console.log(typeof o1)
// o1.sayHi.call(o2,'hello')
// o1.sayHi('2')
// for (let o1Key in o1) {//不输出类方法
//     console.log(o1Key)
// }
// console.log(o1.hasOwnProperty('_name'))
// console.log(o1.hasOwnProperty('name'))
// console.log(Object.getOwnPropertyDescriptor(o1,'name'))

// 二.类的继承 [[HomeObject]]
// 1.extends关键字
// 注：类语法不仅允许指定一个类，在 extends 后可以指定任意表达式
// class extends func(args){}

// 2.重写方法 supper() supper.xxx访问字段和方法
// 派生构造器具有特殊的内部属性 [[ConstructorKind]]:"derived"
// 该属性会影响 new 行为：
//      当通过 new 执行一个常规函数时，它将创建一个空对象，并将这个空对象赋值给 this
//      当继承的 constructor 执行时，它不会执行此操作。它期望父类的 constructor 来完成这项工作
//

// 3.[[HomeObject]]
// 隐式原型  __proto__
//      [[Prototype]] 每个对象都具有的属性
// 显式原型  prototype
//      函数特有，为new func()创建的对象设置该prototype原型
// 注：
//      函数的prototype属性是定义时自动添加的。默认为{}
//      对象的__proto__属性是创建对象时自动添加的，默认值为其构造函数的prototype
//      Object.prototype.__proto__ === null
// 作用：
//      当 一个函数 被定义为 类方法 或者 对象的函数属性 时，函数的 [[HomeObject]] 属性就为 该对象
//      supper让JS从父类原型中获取方法，this 指向不变, super内部的this指的是子类实例,super指向父类的原型
//      注意 对象函数属性 和 方法 的写法区别，函数属性
// 注：[[HomeObject]] 不能被更改，即使是复制一个类方法到另外类的方法里，[[HomeObject]]仍指代原来的类
//    箭头函数没有自己的 this 或 super，所以它们能融入到就近的上下文
// func(){supper .func()}
// 等价：
// func(){func.[[HomeObject]].__proto__ .func.call(this)}
// let animal = {
//     // eat1: function() { // 这里是故意这样写的，而不是 eat() {...
//     //     console.log('animal eat');
//     // },
//     eat() {
//         console.log('animal eat');
//     },
// };
// let rabbit = {
//     __proto__: animal,
//     eat1: function() {
//         eat();
//     },
//     eat2() {
//         super.eat();
//     },
// };
// rabbit.eat2();

// 二.static属性和方法



// 三.私有和受保护的属性和方法
// 简介：# 是该字段为私有的特殊标志。我们无法从外部或从继承的类中访问它
//      公共  默认
//      私有  以#xxx方式命名，结合getter和setter使用
// class A{
//     name='public'
//     //私有变量外界无法访问
//     #name_private='private'
//     constructor(str) {
//         this.name+=`_${str}`
//         this.#name_private+=`_${str}`
//     }
// }
// let a = new A('s');
// console.log(a.name)
// // console.log(a.#name_private)//erro 访问失败

// 四.拓展内建类
// Symbol.species

// 五.instanceof类型检查
// instanceof 的逻辑，真正决定类型的是 prototype，而不是构造函数

// 六.Mixin模式

// mixin
// Object.assign(),可以将对象
let sayHiMixin = {
    sayHi() {//注：[[HomeObject]]为sayHiMixin
        alert(`Hello ${this.name}`);
    },
    sayBye() {
        alert(`Bye ${this.name}`);
    }
};
// 用法：
class User {
    constructor(name) {
        this.name = name;
    }
}
let user1 = new User();
// 拷贝方法
Object.assign(User.prototype, sayHiMixin);
// 现在 User 可以打招呼了
let user2 = new User("Dude");
user2.sayHi(); // Hello Dude!


