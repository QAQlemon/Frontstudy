import {createApp, defineAsyncComponent, ref} from 'vue'
import App from './App.vue'
import Global_component from "@/components/compositionApi/component/register/global_component.vue";
import router from "@/components/compositionApi/scaled/router.js";
import {createPinia} from "pinia";


// 创建app应用实例（可创建应用实例）
// 注：在需要 Vue 去控制一个大型页面中特殊的一小部分时，可以创建出多个小的app应用实例
const app = createApp(App)


// 应用配置
app.config.errorHandler = (err) => {
    /* 处理错误 */
}

// 注册一个组件（全局）
// 注：全局注册了一个组件，即使没有被实际使用，仍然会出现在打包后的 JS 文件中
app.component('global_component',Global_component)


//全局所有组件中都可以注入
// app.provide('num',ref(1))

//异步组件
// app.component('test',defineAsyncComponent(()=>
//         import('@/components/compositionApi/component/asyncComponent/asyncComponent.vue')
//     )
// )

//插件
// import i18nPlugin from '@/components/compositionApi/reuse/plugs/i18n.js'
// app.use(i18nPlugin,
//     //作为插件的字典，由用户提供
//     {
//         greetings: {
//         hello: 'Bonjour!'
//     }
// })


//////////////////////////////////////
//注册路由插件
// 全局守卫
router.beforeEach(// 全局前置守卫
(
        to,
        from,
        // next//虽然支持该参数但官方说不建议使用
    ) => {
    console.log("global route:beforeEach "+to.path)

    console.log(to.matched)
    console.log(to.meta)//从父字段到子字段合并的meta路由元信息
    //@return 是否拦截,默认为true
    // return true;
})
router.beforeResolve(to => {// 全局解析守卫
    console.log("global route:beforeResolve "+to.path)
})
router.afterEach(to => {// 全局后置钩子
    console.log("global route:afterEach "+to.path)

})
app.use(router)


//注册状态管理插件
let pinia = createPinia();
app.use(pinia)

// 挂载组件到index.html中
// 注：挂载需要写在最后，才能使上面的各项配置生效
app.mount('#app')
