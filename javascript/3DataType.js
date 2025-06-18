//数据类型
// 基本类型7   string number bigint boolean symbol null  undefined
// 对象1      Object Array Map Set WeakMap WeakSet JSON Date
// 对象包装器  String Number Boolean Symbol BigInt
// 一.number
// n=1
// n=1.1
// n=1e-11 //10^-11
// n=0xff//16进制
// n=0o77//8进制
// n=0b11//2进制
// 1.数值转->对应进制字符串
// let s = 193.toString(16);//错误
// n=192
// let s = n.toString(16);
// console.log(s)

// 2.舍入
// Math.floor()
// Math.ceil()
// Math.round()
// Math.trunc()

// 4.精度问题 通过toFixed解决
// console.log(0.1+0.2==0.3)
// console.log((0.1+0.2).toFixed(5)==0.3)

// 5.数值测试 isNaN isFinite
// let obj={}
// console.log(isNaN(obj))
// console.log(isFinite(1/3))

// 6.解析数值
// parseInt()
// parseFloat()
// 作用：适合 数值xxxx 的场景
// console.log(parseInt('100pxasd'))
// console.log(parseFloat('10.1230pxasd'))

// 7.随机值
// Math.random()
// console.log(10+Math.random().toFixed(1)*10)

// 二.字符串
// 1.声明和定义 "xxx" 'xxx' `xxx`
// let single = 'single-quoted';
// let double = "double-quoted";
// let backticks = `
// * name:zc
// * age:11
// `;
// console.log(single.length)
// console.log(backticks)

// 2.基本操作
let s='11 hello world world'
// console.log(s.length)//长度
// console.log(s[s.length-1])//访问字符
// console.log(s.charAt(0))//访问字符
// console.log(s.toUpperCase())//大小写
// 2.1.查找方法
// console.log(s.indexOf('w',10))//字串查找,从指定位置开始查找
// if (~s.indexOf("")){} //读作 “if found”
// s.includes()
// s.startsWith()
// s.endsWith()
// 2.2.子串切割
// s.slice(1,5)
// s.substring(1,5)//允许start<end
// 2.3.字符串比较
// s.localeCompare('ss')

// 3.遍历方式 (可迭代对象的遍历方式)
// let s='11 hello world'
// for (const c of s) {
//     console.log(c)
// }

// 三.数组和数组提供的方法
// 1.基本使用
// let arr = new Array();
// let arr = [];
// let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
// let arr=[1,2,3]
// console.log(arr[1]);

// 3.遍历方式
// 注：
// for of   直接遍历元素
// for in   遍历属性，拿到每个元素的属性key
// array.forEach()
// let arr=[1,2,3,4]
// for (const number of arr) {//1.直接遍历元素
//     console.log(number)
// }
// for (const arrKey in arr) {//2.遍历属性，拿到每个元素的属性key(其实就是下标)
//     // console.log(arr.arrKey)//undefined
//     console.log(arrKey)
//     console.log(arr[arrKey])
// }
// arr.forEach(()=>{})//3.

// 4.数组length
// 注：数组.length取决于最大索引(数值属性名)+1
// let arr=[]
// arr[100]=1
// console.log(arr.length)//101

// 4.栈操作
// pop/push         右端出入栈 优先使用
// shift/unshift    左端出入站
// let stack=['1','2','3']
// console.log(stack.pop())//右出栈
// console.log(stack)
// console.log(stack.shift(4))//左出栈
// console.log(stack)

// 5.数组操作
// let arr=[0,1,2]
// arr.splice()//从某个位置删除n个元素
// arr.slice()//返回指定区间的函数
// arr.concat()//组合多个数组
// arr.map((value, index, array) => {})
// arr.sort((a, b) => {})
// arr.reverse()
// let arr_str = '1,2,3'.split(',');
// let arr_str2 = arr_str.join(":");
// 6.搜索元素
// indexOf
// find() findIndex() findLastIndex()
// filter()
// let arr=[0,1, {}]
// arr.indexOf(1,0);//从头开始找元素1
// arr.find(function (value, index, arr) {
//     console.log(index+":"+value)
// })
// arr.filter((value, index, array) => {
//     console.log(index+":"+value)
// })


// 四.可迭代对象
// 描述：
//      可迭代对象必须实现 Symbol.iterator 方法返回迭代器
//      一个迭代器必须有 next() 方法
// 作用：
//      字符串，数组本身是可迭代的，可用于for of
//      其它对象需要定义Symbol.iterator才能使用for of迭代
// let range={
//     from:1,
//     to:10,
// }
// 1.Symbol.iterator设置对象的迭代器
// 1.1 for..of 调用首先会调用这个：
// range[Symbol.iterator]=function (){
//     // 1.2. 返回迭代器对象（iterator object）
//     return {
//         current: this.from,
//         last: this.to,
//         // 1.3. next() 在 for..of 的每一轮循环迭代中被调用
//         next() {
//             // 1.4. 它将会返回 {done:.., value :...} 格式的对象
//             if (this.current <= this.last) {
//                 return { done: false, value: this.current++ };
//             } else {
//                 return { done: true };
//             }
//         }
//     };
// }
// 2.迭代器的使用方式：
// 2.1.for of调用迭代器
// for (let i of range) {
//     console.log(i)
// }
// 2.2.手动调用迭代器
// let iter= range[Symbol.iterator]();
// console.log(iter.next());

//3.将可迭代对象或类数组的值转为真正的数组
// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 2
// };
// let arr = Array.from(arrayLike);
// console.log(arr.pop()); // World（pop 方法有效）
// console.log(arr)


// 五.Map和Set
//1.Map的基本使用
// let map=new Map()//创建 map。
// map.set("name", 'zc') //根据键存储值。
// map.get("name") // 根据键来返回值，如果 map 中不存在对应的 key，则返回 undefined。
// map.has("name") // 如果 key 存在则返回 true，否则返回 false。
// map.delete("name")// 删除指定键的值。
// map.clear() // 清空 map。
// map.size //返回当前元素个数。

// 2.Map的添加问题
// map['age']=1;//错误使用方式
// map.set("age",1);//正确的方式
// let iter = map[Symbol.iterator]();
// console.log(map.size)
// console.log(iter.next());
// console.log('可迭代遍历')
// for (const i of map) {
//     console.log(i)
// }
// console.log('遍历对象属性')
// for (const i in map) {
//     console.log(i)
// }

// 3.对象 和 Map 的相互转换
// Object.Entries()
// Object.fromEntries()
// let obj={
//     'name': 'zc',
//     'age':11,
// }
// let entries = Object.entries(obj);
// let map = new Map(entries);
// console.log(map)
// map.set('sex', 'boy');
// let p = Object.fromEntries(map.entries());
// console.log(p);

// 4.Set与Map相似 略

// 六.解构赋值
// 作用：当把对象Object或数组Array传递给函数时，函数可能不需要整个对象/数组，而只需要其中一部分。
//      解构赋值 是一种特殊的语法，它可以将数组或对象“拆包”至一系列变量中
// 1.数组解构
// 格式：[v1,v2,...v3]=适用任何可迭代对象
// let arr = 'john,smith,sss,123,5vf,tty4'.split(',')
// let [p1,,p2,...p3]=arr
// console.log(p1)//arr[0]
// console.log(p2)//arr[2]
// console.log(p3)//[arr[3],arr[4],arr[5]]

// 2.对象解构
// 格式：{v1,v2}=对象
// let obj={
//     p1:1,
//     p2:2,
//     p3:3,
// }
//注：解构的变量必须和对象的属性名一致
//      否则通过 属性:变量名
// let {p1:v1,p2,p3}=obj
// console.log(v1)
// console.log(p2)

// 3.嵌套解构
// let options = {
//     size: {
//         width: 100,
//         height: 200
//     },
//     items: ["Cake", "Donut"],
//     extra: true
// };

// 为了清晰起见，解构赋值语句被写成多行的形式
// let {
//     size: { // 把 size 赋值到这里
//         width:w,
//         height:h
//     },
//     items: [i1, i2], // 把 items 赋值到这里
//     title = "Menu" // 在对象中不存在（使用默认值）
// } = options;
// console.log(title);  // Menu
// console.log(w);  // 100
// console.log(h); // 200
// console.log(i1);  // Cake
// console.log(i2);  // Donut

// 3.利用对象解构赋值实现可选参数和默认值设定 重要!!!!
// let options = {
//     title: "My menu",
//     items: ["Item1", "Item2"]
// };
// function func({
//     title="default_title",
//     items:[i1=0,i2=0]=[],
//     width:w='default_w',
//     height:h='default_h',
// }={}) {
//     console.log(title)
//     console.log(i1)
//     console.log(i2)
//     console.log(w)
//     console.log(h)
// }
// func({
//     // title:'ss',
//     items:[1],
//     // width:'width',
//     // height:'height',
// })


// 七.日期和时间
// 创建Date
// 当前时间
// console.log(new Date())
// console.log(Date.now())
// 指定时间戳
// console.log(new Date(0))
// 获取时间戳
// let now = Date.now();
// console.log(Date.parse('1970-01-01T00:00:00.000Z'))//YYYY-MM-DDTHH:mm:ss.sssZ
// console.log(now.valueOf())



// 八.Json
// 1.object对象 转 json字符串
// 注：undefined和Symbol属性不参与序列化
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    [Symbol('symbol')]: 1,//不参与序列化
    spouse: undefined//不参与序列化
};
let json = JSON.stringify(student,(key, value)=>{
    console.log(key+'-'+value)
    return value
});
// let json = JSON.stringify(student,['name','spouse']);

console.log(json)
// 2.json字符串 转 object对象
let obj = JSON.parse('{"name":"zc","age":12}');
console.log(obj)













































