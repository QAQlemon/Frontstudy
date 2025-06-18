// 一.常用事件
// 1.鼠标事件
// click               当鼠标点击一个元素时（触摸屏设备会在点击时生成）
// contextmenu         当鼠标右键点击一个元素时
// mouseover/mouseout  当鼠标指针移入/离开一个元素时
// mousedown/mouseup   当在元素上按下/释放鼠标按钮时
// mousemove           当鼠标移动时


// 2.键盘事件
// keydown/keyup        当按下和松开一个按键时

// 3.表单事件
// submit      当访问者提交了一个 <form> 时
// focus       当访问者聚焦于一个元素时，例如聚焦于一个 <input>

// 4.Document 事件
// DOMContentLoaded     当 HTML 的加载和处理均完成，DOM 被完全构建完成时。

// 5.css事件
// transitionend           当一个 CSS 动画完成时

// 二.事件绑定
// this 访问当前元素
// 绑定方式
// 1.HTML特性 <label onXXX="func()">
// 2.DOM属性 element.onXXX=func
// 3.添加 element.addEventListener(event,handler[,options])

// 三.事件对象
// Event

// 四.事件冒泡和捕获
// 1.捕获
// 简介：事件（从 Window）向下走近元素

// 2.目标阶段
// 简介：事件到达目标元素

// 3.冒泡
// 简介：事件从目标元素“冒泡”到所有父级
// event.target                引发事件的那个嵌套层级最深的元素被称为目标元素
// this（=event.currentTarget） 是 <form> 元素，因为处理程序在它上面运行


// 4.阻止冒泡事件的方式：
// event.stopPropagation()
// 注：一般不建议组织冒泡，因为不确定是否确实不需要冒泡上来的事件，也许是用于完全不同的事情

// 五.事件委托

// 六.浏览器默认行为
// 1.阻住默认行为的方式：
//  主流的方式是使用 event 对象。有一个 event.preventDefault() 方法。
//  如果处理程序是使用 on<event>（而不是 addEventListener）分配的，那返回 false 也同样有效。

// 2.passive事件选项
// addEventListener 的可选项 passive: true 向浏览器发出信号，表明处理程序将不会调用 preventDefault()

// 七.自定义事件
// 1.创建事件
// let event = new Event(type,options);
    // type:   事件类型，可以是像这样 "my_event" 的字符串。
    // options: 具有两个可选属性的对象：
    //     bubbles: true/false  true-事件会冒泡。
    //     cancelable: true/false true-阻止“默认行为”可以生效。
// 2.特定事件
// 简介：相比于Event,又更多的对应事件的option
// CustomEvent 自定义事件，能自定义事件相关属性
// UIEvent
// FocusEvent
// MouseEvent
// WheelEvent
// KeyboardEvent

// 3.触发事件
// element.dispatchEvent(event);
// 注：
//      1.event.isTrusted:bool 区分“真实”用户事件和通过脚本生成的事件
//      2.如果事件处理中调用了event.preventDefault()，则element.dispatchEvent(event)返回false






