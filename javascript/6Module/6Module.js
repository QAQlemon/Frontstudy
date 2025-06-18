// 模块的导入和导出
// 1.<script type="module">
//  作用：告诉浏览器，此脚本应该被当作模块（module）来对待，使 import/export 可以工作
//      浏览器会获取导入的模块以及该模块的导），并运行该脚本
//  特性：
//      1.延迟加载
//      2.模块始终使用 use strict
//      3.具有相同 src 的外部脚本仅运行一次
// 2.导出：
//  在声明一个 class/function/… 之前：
//      export [default] class/function/variable ...
//  重命名的导出：
//      export {x as y, ...}//常用来写在文件末尾
//  重新导出：
//      export {x [as y], ...} from "module"
//      export * from "module"（不会重新导出默认的导出）。
//      export {default [as y]} from "module"（重新导出默认的导出）
// 4.导入：
//  导入重命名的导出：
//      import {x [as y], ...} from "module"
//  导入所有：
//      import * as obj from "module"
//  导入默认的导出：
//      import x from "module" //不需要花括号{}
//      import {default as x} from "module"
//  导入模块（其代码，并运行），但不要将其任何导出赋值给变量：
//      import "module"

// 一. 静态导入
// 1.导入 import {xxx} from 'xxx.js'
// import {sayHi,a_sayHi} from './a.js'

// 2.导入全部 import * from 'xxx.js'
// import * as m_a from './a.js'
// console.log(new m_a.default())

// 3.已重命名的方式导入 import {xxx as xxx} from 'xxx.js'
// import {a_sayHi as m_a_sayHi} from './a.js'

// 4.已默认的方式导入 import xxx from 'xxx.js'
// 注：
//      1.文件一般只默认导出一个
// import m_user from './a.js'
// console.log(new m_user());
//      2.由于每个文件最多只能有一个默认的导出，因此导出的实体可能没有名称,即使有在被导入到其它文件后也被重命名了
// import m_user from './a.js'
// console.log(m_user)

// 5.同时导入 默认 和 非默认 的导出
// import {default as m_a_default,func} from './a.js'
// console.log(m_a_default)


// 6.导入模块暴露的入口
// import {m_b,m_b_default} from './a.js'
// console.log(m_b)
// console.log(m_b_default)

// 二.动态导入
// import(module) 表达式加载模块并返回一个 promise
// 动态导入在常规脚本中工作时，它们不需要 script type="module".
let promise = import('./a.js');
promise.then(value =>{
    alert('./a.js加载成功')
}).catch(reason => {
    alert(`加载失败:${reason}`)
})



