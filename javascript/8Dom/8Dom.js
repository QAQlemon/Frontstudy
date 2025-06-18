
// 当文档中没有脚本时，浏览器解析完文档便能触发 DOMContentLoaded 事件；
// 如果文档中包含脚本，则脚本会阻塞文档的解析，而脚本需要等 CSSOM 构建完成才能执行。
// 在任何情况下，DOMContentLoaded 的触发不需要等待图片等其他资源加载完成


// dom树
// css规则树 css语法解析结果
// render树 由dom树和css规则书合并得到，节点盒子模型


// css
//     注：css选择器是从右到左匹配
//     导入方式：
//         行内(内联)样式    标签的style属性设置的样式
//         嵌入样式         style标签内写的样式
//         链接样式         HTML-link标签的href属性 或 style标签的src属性 导入文件
//                         link适用于自己写的且需要动态修改的样式
//         导入样式         CSS语法-@import url("")
//                         @import适用于引入公共基础样式或第三方样式
// script
//     常规
//          立即执行，会阻塞页面后续的内容（包括页面的渲染、其它资源的下载）
//          浏览器为了防止出现JS修 改DOM树，需要重新构建DOM树的情况，所以 就会阻塞其他的下载和呈现
//     defer
//         defer 仅适用于外部脚本，加载完，等待html解析完再执行
//         告诉浏览器不要等待脚本下载，而继续解析 HTML，构建 DOM Tree
//         如果脚本提前下载好了，它会等待 DOM Tree 构建完成，在 DOMContentLoaded 事件之前先执行 defer 中的代码
//     async
//         让一个脚本完全独立的，加载完立即执行
//         async 不会能保证在 DOMContentLoaded 之前或者之后执行
//
// DomContentLoaded
//      在 DOM、CSSOM 构建完毕，defer 脚本执行完成之后，DOMContentLoaded 事件触发
//      需要等待defer脚本的执行，脚本又需要等待样式的加载
// loaded
//      所有其他内容（例如异步js、css、图片等）完成加载后
// beforeunload
// unload


// 一.Dom树节点和元素

// 1.顶层节点 document
// let documentElement = document.documentElement;//元素
// let head = document.head;//元素
// let body = document.body;//元素

// 2.子节点和父节点
// 对于所有节点：parentNode，childNodes，firstChild，lastChild，previousSibling，nextSibling。
// 仅对于元素节点：parentElement，children，firstElementChild，lastElementChild，previousElementSibling，nextElementSibling。

// 3.搜索元素
// document.getElementById()
// document.getElementsByClassName()   根据class属性搜索
// document.getElementsByTagName()
// document.querySelector(css)         返回给定 CSS 选择器的第一个元素   最常用
// document.querySelectorALL(css)      根据css查找 所有 元素           最常用

// 4.判断元素是否匹配CSS选择器
// element.matches('')                 元素才能进行match,节点不行

// 5.节点属性
// node.nodeType                节点类型 1-文本 3-元素 9-document
// node.nodeName                文本-#comment 文档-#document
// node.nodeValue               节点值，一般是文本节点
// node.textContent             仅文本，去掉所有 <tags>

// 6.元素属性 元素element继承子节点node
// htmlElement.tagName      标签名 文本/文档-undefined
// htmlElement.innerHTML    允许将元素中的 HTML 获取为字符串形式
// htmlElement.innerText    仅文本节点
// htmlElement.hidden       隐藏元素

// 7.HTML属性 dataset
// htmlElement.getAttribute()
// htmlElement.setAttribute()
// htmlElement.removeAttribute()
// htmlElement.hasAttribute()
// 通过data-*合法且安全的传递自定义数据：
// htmlElement.dataset.xxx//如果一个 elem 有一个名为 "data-xxx-xxx" 的特性，那么可以通过 elem.dataset.xxxXxxx 取到它

// 8.修改文档
// 8.1.创建元素节点
// let divElement = document.createElement('div');
// 8.2.创建文本节点
// let textNode = document.createTextNode('Hello World');
// 8.3.添加节点
// node.append()       //在 node 末尾 插入节点或字符串
// node.prepend()      //在 node 开头 插入节点或字符串，
// node.before()       //在 node 前面 插入节点或字符串
// node.after()        //在 node 后面 插入节点或字符串
// node.replaceWith()  //将 node 替换为给定的节点或字符串
// insertAdjacentElement("beforeend",divElement)    通用写法
// 8.4.移除节点
// node.remove()
// 8.5.克隆节点
// let cloneNode = node.cloneNode(true);
// 8.6.DocumentFragment包装器
// 作用：DocumentFragment对象可以作为节点添加节点元素，在将DocumentFragment对象添加到其它节点中时，会将其内部的节点拿出来添加过去

// 9.样式和类
// 9.1.元素的类
// htmlElement.style
// htmlElement.className    clas属性值的整个字符串
// htmlElement.classList    提供add/remove/toggle方法用于操作单个类
// 9.2.样式
// htmlElement.style.xxxXxx=''  置空就可以重置了
// 9.3.计算样式
// 注：只读不可修改
//  let css = getComputedStyle(document.body);

// 10.元素大小和滚动
// 元素的几何属性
// 父元素
// htmlElement.offsetParent
// 整体 与元素的相对坐标
// htmlElement.offsetLeft
// htmlElement.offsetTop
// htmlElement.offsetWidth
// htmlElement.offsetHeight
// 内容
// htmlElement.clientLeft
// htmlElement.clientTop
// htmlElement.clientWidth
// htmlElement.clientHeight
// 滚动条
// htmlElement.scrollLeft
// htmlElement.scrollTop
// htmlElement.scrollWidth
// htmlElement.scrollHeight

// 11.窗口大小和滚动
// 获取当前滚动条位置
// document.documentElement.scrollTop
// 窗口移动
// window.scrollBy(0,10)//增量移动
// window.scrollTo(0,0)//移动到指定位置
// 元素移动
// htmlElement.scrollIntoView()//会滚动到窗口顶部
// htmlElement.scrollIntoView(false)//会滚动到窗口底部
// 禁止滚动
// document.body.style.overflow='hidden'
// document.body.style.overflow=''

// 12.坐标
// 元素相对窗口的坐标信息
let window_addr = htmlElement.BoundingClientRect();
// 文档坐标
window.scrollY
window.scroll

// 元素大小位置信息














// 4.修改DOM样式
// htmlElement.style
// htmlElement.classList
// htmlElement.className


// 5.DOM的遍历
// htmlElement.parentNode
// htmlElement.childNodes
// htmlElement.parentElement
// htmlElement.children

// 6.事件监听


// 7.事件流
// 事件冒泡
// 事件捕获
// Event的stopPropagation















