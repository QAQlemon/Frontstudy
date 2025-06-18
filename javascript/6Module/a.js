// 1.声明前导出
export function sayHi(user) {
    alert(`Hello, ${user}!`);
    console.log(user)
}
// 2.导出与声明分开    export xxx
function func(){
    console.log('func')
}
export {func}
// export {func as default}//以默认方式导出

// 3.以别名方式导出
export {sayHi as a_sayHi}

// 4.已默认的方式导出
// 注：每个文件应该只有一个 export default
// export default class User{
//     constructor() {
//     }
//     name='user'
//     func(){
//         console.log('User.func()')
//     }
// }
export default class {
    name='default'
}

// 5.重导出
// 如果是重导出一个默认导出会出错
export {default as m_b_default} from './b.js'//报错
export {obj as m_b} from './b.js'















