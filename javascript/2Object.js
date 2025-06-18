// 一.对象基础
// 1.创建对象
// let o = new Object();// “构造函数” 的语法
// let o={}// “字面量” 的语法
// console.log(o)
// console.log(o==null)
// console.log(o==undefined)
// 1.属性键
//     字符串类型    默认是字符串，所以可以不加引号，obj[1]会被自动转为obj['1']
//     symbol类型  只能通过obj[Symbol]访问属性
// 2.属性
// let person={
//     name: 'zc',
//     age: 2,
//     "is admin":true,
// }
// console.log(person)
// console.log(person.name)
// console.log(person["is admin"])
// //添加属性
// person.sex=1
// console.log(person)
// //删除属性
// delete person.sex
// console.log(person)
// //未定义属性
// console.log(person.key)

// 3.计算属性
// let io = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// io.question('输入: ', (attr) => {
//     // 输出用户输入的数据
//     let obj={
//         [attr]:'default'
//     }
//     console.log(obj)
//     // 关闭接口
//     io.close();
// });

// 4.属性简写
// function make(name,age){
//     return{
//         name:name,
//         age:age,
//     }
// }
// let name='zc'
// let age=11
// let p1 = make(name,age);
// let p2={
//     name,// 与 name: name 相同
//     age,// 与 age: age 相同
// }
// console.log(p1)
// console.log(p2.name)

// 5.in操作符 属性存在性测试
// // 尽量不要使用undefined进行测试
// let obj={}
// // obj.key=undefined
// console.log('key' in obj)
// console.log(obj['key']==null)
// console.log(obj['key']===null)
// console.log(obj['key']==undefined)
// console.log(obj['key']===undefined)


// 6.for遍历属性
// let obj={
//     name: 'zc',
//     ag: 30
// }
// for (const key in obj) {
//     console.log(obj[key])
// }

// 7.拷贝
// let o={num:1}
// let obj1={
//     name: 'obj1',
//     ag: 30,
//     o
// }
// let obj2={}
//Object.assign()
// 仅仅进行简单的属性拷贝-浅拷贝
// 基本类型属性-拷贝值，
// 引用类型属性-复制引用
// Object.assign(obj2,obj1)//可用于替代 for in
// obj2.name='obj2'
// obj2.o.num=666//对obj1可见
// console.log(obj1)
// console.log(obj2)
// console.log(obj2.o instanceof Object)

// 8.对象方法和this-指向执行方法的对象
// let obj={
//     name: 'zc'
// }
// func=()=>{
//     console.log('func')
// }
// obj={//对象方法的简写
//     func1:func,
//     func2:function(){
//         console.log('func2')
//     },
//     func3:()=>{
//         console.log('func3')
//     },
//     func4(){
//         console.log('func4')
//     },
//     func,
// }
// obj.func();//func
// obj.func1();//func
// obj.func2();//func2
// obj.func3();//func3
// obj.func4();//func4

// 9.构造器和new操作符
// 9.1.构造函数
// 注：直接调用是一个普通函数，需要和new操作符一起使用
// function person(name,age){
//     // this = {};（隐式创建）
//     this.name=name;
//     this.age=age;
//     // return this;（隐式返回）
// }
// 9.2.new操作符
// 作用：当一个函数被使用 new 操作符执行时，一个新的空对象被创建并分配给 this ，并返回 this 的值
// let obj = new person('zc',11);
// 9.3.指定函数为构造函数
// function person(){
//     console.assert(new.target)
//     this.name='构造函数'
// }
// let obj = person()//断言失败，返回undefined
// // let obj = new person();
// console.log(obj)

// 10.可选链
// 10.1 ?.[方法|属性]
// 作用：?. 允许 user 为 null/undefined（在这种情况下会返回 undefined）也不会报错，但这仅对于 user
// let user={}
// console.log(user.address)
// console.log(user?.address?.street)//仅返回undefined
// console.log(user.address.street)//会报错


// 10.2 ?.()
// 作用：检测func是否存在，存在则执行，否则什么也不做返回undefined
// let user={}
// console.log(user.func?.())

// 10.2 ?.[]
// 作用：检测 属性 是否存在，存在则执行，否则返回undefined
// let user={}
// console.log(user?.['sa '])

// 二.垃圾回收
// 可达性：全局变量中有一个对象，并且该对象有一个属性引用了另一个对象，则 该 对象被认为是可达的。而且它引用的内容也是可达的
// 算法：标志清除

// 三.symbol类型 基本数据类型!!!
// 1.基本使用
// 作用：用来表示一个独一无二的值，避免第三方框架的同名属性被覆盖
//      隐藏属性，不参与 for..in 循环和Obeject.keys()
// 注：symbol 属性不参与 for..in 循环
// let id1 = Symbol('id');
// let id2 = Symbol('id');
// console.log(id1)
// console.log(id1.toString())//会添加多于字符Symbol()
// console.log(id1.description)//仅显示描述字符串
// let o1={}
// let o2={}
// let obj={
//     name: 'obj',
//     'id1':0,
//     id1:1,//等价’id‘
//     [id1]:2,//计算属性
//     [id2]:3,//计算属性
//     'o1':6,
//     o1:7,//等价'o1'
//     [o1]:4,
//     [o2]:5,//会覆盖o1的值
// }
// console.log(obj)
// console.log(obj['[object Object]'])

// 2.symbol作为隐藏属性
// 注：symbol 属性不参与 for..in 循环和Object.keys()
// let id1 = Symbol('id');
// let id2 = Symbol('id');
// let obj={
//     id1:'id1',
//     id2:'id2',
//     [id1]:1,
//     [id2]:2,
// }
// for (const objKey in obj) {
//     console.log(objKey+': '+obj[objKey])
// }
// Object.keys(obj).forEach(key => {
//     console.log(key)
// })

// 3.全局symbol
// Symbol.for(key)      按key返回一个 symbol
// Symbol.keyFor(sym2)  内部使用全局 symbol 注册表来查找 symbol 的键
// 作用：保每次访问相同名字的 symbol 时，返回的都是相同的 symbol
// let id1 = Symbol.for("id");
// let id2 = Symbol.for("id");
// let key1 = Symbol.keyFor(id1);
// let key2 = Symbol.keyFor(id2);
// let obj={
//     [id1]:1,
//     [id2]:2,
// }
// console.log(obj);
// console.log(key1)
// console.log(key2)

//四.对象类型 和 原始类型 的转换
// hint:
//     string
//     number
//     default
// 为了进行转换，JavaScript 尝试查找并调用三个对象方法：
//      obj[Symbol.toPrimitive](hint) 优先使用
//      obj.toString()
//      obj.valueOf()
// 1.string
// let key={
//     age:1
// }
// let obj={
//     [key]:0
// }
// console.log(obj)//obj会转换为string
// console.log(obj[key])//key会转换为string
// 2.number
// let obj = {}
// let num = Number(obj);
// let num = obj+1;//string：obj转字符串,1转为字符串'1'
// let num=1-obj//number
// console.log(num)
// 3.default
// 除了Date对象外，所有内建对象的 default转换的实现方式都和 number 相同

// 4.类型转换方式
// let obj={
//     //优先调用原始转换
//     [Symbol.toPrimitive](hint){
//         console.log(`[Symbol.toPrimitive](hint)：hint=${hint}`)
//         return 1
//     },
//     toString(){
//         console.log('toString()')
//         return 'obj string'
//     },
//     valueOf(){
//         console.log('valueOf()')
//         return 1
//     }
// }
// let newVar = obj;
// console.log(obj-1)

// 五.属性描述符 和 访问器描述符

// 1.属性描述符（属性特性）：
//      value           属性值
//      writable        是否可修改属性值
//      enumerable      是否在循环for in中列出
//      configurable    属性可删除添加，特性也可修改

// let obj={
//     name:'zc',
//     [Symbol('addr')]:'home',
// }
// 2.获取属性特性
// let desc = Object.getOwnPropertyDescriptor(obj,'name');
// console.log(desc)
// let symbols = Object.getOwnPropertySymbols(obj);
// console.log(symbols)
// let desc_symbol = Object.getOwnPropertyDescriptor(obj,symbols[0]);
// console.log(desc_symbol)

// 3.修改属性描述符
// let desc = Object.getOwnPropertyDescriptor(obj,'name');
// obj.name='test'//修改失败
// console.log(obj)

// 4.属性的getter()和setter()
// 作用：用作“真实”属性值的包装器，以便对属性进行更多的控制
// let user = {
//     get name() {
//         return this._name;
//     },
//     set name(value) {
//         this._name = value;
//     }
// };
// user.name = "Pete";
// console.log(user.name)

// 六.原型继承

// 1.对象obj.__proto__属性[[Prototype]]
// 描述：当从 object 中读取一个缺失的属性时，JavaScript 会自动从原型中获取该属性。在编程中，这被称为“原型继承”
//      obj.__proto__ 被读取或者赋值，那么对应的 getter/setter 会被从它的原型中调用，它会 set/get [[Prototype]]
// 注:
//      1.__proto__是历史遗留问题，建议使用Object.getPrototypeOf/Object.setPrototypeOf
//      2.this 根本不受原型的影响
//      3.for in 会迭代继承的属性
// let animal = {
//     eats: true
// };
// let rabbit1 = {
//     jumps: true
// };
// let rabbit2 = {
//     jumps: true
// };
// rabbit1.__proto__=animal// 设置 rabbit.[[Prototype]] = animal
// rabbit1.eats=false
// rabbit2.eats=true
// console.log(rabbit1)
// console.log(rabbit2)
// console.log(rabbit1.eats)//读取一个没有的属性时，会自动从 原型 中获取
// for (const rabbitKey in rabbit1) {
//     console.log(rabbitKey+':'+rabbit1[rabbitKey])
// }

// 2.函数func.prototype属性
// 作用：func.prototype设置了原型对象后，
//      new func()创建的所有对象共用同一个原型，原型被修改对所有对象可见。
//      通过创建的对象可以直接访问到原型具有的属性，
//      修改new func()创建的对象，仅在该新建对象上修改
//      可通过obj.__proto__修改原型对象的属性
Function.prototype.show=(s)=>{
    console.log(s)
}
let animal = {
    eats: true
};
function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype = animal;
let rabbit1 = new Rabbit("Rabbit1");
// rabbit1.__proto__.eats=false//原型被修改对rabbit2可见
Object.getPrototypeOf(rabbit1).eats=false;
let rabbit2 = new Rabbit("Rabbit2");
// rabbit2.eats=true//会在rabbit2上进行属性赋值和修改
console.log(rabbit1.eats)
console.log(rabbit2.eats)
Rabbit.show('ssss')

// 3.对象原型__proto__的改进
// 注：不建议直接使用__proto__
// Object.getPrototypeOf()
// Object.setPrototypeOf()
// let animal={
//     eats: true
// }
// let rabbit = Object.create(null,{
//     eats: {
//         // value:false,
//         enumerable:false,
//     },
// });
// console.log(Object.getPrototypeOf(rabbit)==animal)
// console.log(Object.getOwnPropertyDescriptors(rabbit))
// console.log(rabbit)
// console.log(rabbit.eats)









