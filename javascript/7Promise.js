// 一.promise
// 简介：当 new Promise 被创建，executor 会自动运行

// 1.Promise组成：
//      state    pending,result
//      result   undefined

// 2.then()函数的返回方式：
//      返回Promise对象 Promise处理完才进入下一个then
//      直接返回一个结果  以该结果作为参数传递给下一个then(value=>{})函数中的value
//      通过对Promise的resolve进行设置值，进入下一个then()

// 3.Promise的创建：
//     let promise = new Promise(function(resolve, reject){
//          resolve(value)  如果任务成功完成并带有结果 value
//          reject(error)   reject(error) —— 如果出现了 error，error 即为 error 对象
//     })
// let promise = new Promise((resolve, reject) => {
//     console.log('promise running')
//     setTimeout(() => {
//         resolve('Promise done!')
//     },1000)
// });
// promise.then(value => {
//     console.log(value)
// })

// 4.异常捕获
// new Promise(function(resolve, reject) {
//     // throw new Error("Whoops1!");
//     setTimeout(() => {
//         // throw new Error("Whoops2!");
//         reject(new Error("Whoops3!"))
//     }, 2000);
// }).then(value => {
//     console.log(value)
// }).catch(e=>{
//     console.error('异常处理'+e);
// });

// 5.Promise API
// Promise.all(可迭代对象)           并行指向多个任务,需要 所有 结果都成功时，针对这种“全有或全无”的情况
// Promise.allSettled(可迭代对象)    带有Promise状态，等待所有任务响应，即使有rejected
// Promise.race(可迭代对象)          只等待第一个 settled 的 promise 并获取其结果触发then()
// Promise.any(可迭代对象)            等待第一个 fulfilled 的 promise，并将这个 fulfilled 的 promise 返回
// Promise.resolve(结果)             创建一个带结果的Promise
// Promise.reject()                 不常用
// Promise.race([
//     new Promise((resolve,reject) => setTimeout(() => {
//         reject('s')
//         resolve(1)
//     }, 3000)), // 1
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//     new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then(value => {
//     console.log(value)
// });





// 二.Promisification
//简介：将一个接受回调的函数转换为一个返回 promise 的函数







// 三.微任务
// 简介：微任务队列中的所有微任务都会在开始下一个宏任务之前都被执行完
//      宏任务  主代码块，setTimeout,setInterval,事件
//      微任务  Promise
// 补充：
//      javascript是一门单线程、异步、非阻塞、解析类型脚本语言
//      单线程     所有任务需要排队，前一个任务结束，才会执行后一个任务
// new Promise((resolve) => {
//     console.log('new Promise(macro task 1)');
//     resolve();
// }).then(() => {
//     console.log('micro task 1');
//     setTimeout(() => {
//         console.log('setTimeout1');
//     }, 5110)
// })
// setTimeout(() => {
//     console.log('setTimeout2');
// }, 5500)
// console.log('========== 结束==========');

// 四.async/await
// 简介：async/await 是以更舒适的方式使用 promise 的一种特殊语法
//      一种语法糖
//

// 1.async
// 简介：放在函数前面,表示函数总是返回一个 promise。
//      返回值自动被包装在 resolved 的 promise 中
//      允许在该函数内使用 await
// async function func() {
//
// }
// func()

// 2.await
// 简介：关键字 await 让 JavaScript 引擎等待直到 promise 完成（settle）并返回结果
// 注：await只能在 模块顶层 或 async函数 中使用
// let promise = new Promise(
//     resolve => setTimeout(resolve, 3000,'hello')
// );
// let res = await promise;
// console.log(res)


async function wait() {
    let res = await new Promise(
        resolve => setTimeout(resolve, 10000,'hello')
    );

    return res;
}
// function f() {
    // 1 秒后显示 10
wait().then(console.log);
console.log('f end')
// }
// f();
console.log('finished')



