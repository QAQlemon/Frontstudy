import HOME from '@/components/compositionApi/scaled/routerViewComponent/HOME.vue'
import page_A from '@/components/compositionApi/scaled/routerViewComponent/A.vue'
import page_B from '@/components/compositionApi/scaled/routerViewComponent/B.vue'
import ERROR from "@/components/compositionApi/scaled/routerViewComponent/ERROR.vue";
import Nested from "@/components/compositionApi/scaled/routerViewComponent/Nested.vue";
import Inner from "@/components/compositionApi/scaled/routerViewComponent/Inner.vue";
import Inner2 from "@/components/compositionApi/scaled/routerViewComponent/Inner2.vue";

import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import PathTest from "@/components/compositionApi/scaled/routerViewComponent/PathTest.vue";
import NamedView from "@/components/compositionApi/scaled/routerViewComponent/NamedView.vue";
import LeftMenu from "@/components/compositionApi/scaled/routerViewComponent/LeftMenu.vue";
import MainContent from "@/components/compositionApi/scaled/routerViewComponent/MainContent.vue";
import RouterGuardDemo from "@/components/compositionApi/scaled/routerViewComponent/RouterGuardDemo.vue";
import StateManageDemo from "@/components/compositionApi/scaled/stateManageComponent/StateManageDemo.vue";
// import MetaDemo from "@/components/compositionApi/scaled/routerViewComponent/MetaDemo.vue";

const routes = [
    //可重复参数*+，param将是一个数组
    //可选参数?
    //大小写限制 sensitive: true
    //尾部斜杠限制 strict
    {
        path: '/test/:param([0-9]*)',
        component: HOME ,
        // strict:true,
        // sensitive: true
    },
    { path: '/A/:name', component: page_A },
    { path: '/B/:show', component: page_B },
    {
        path:'/nested/:id([0-9]*)?',
        component: Nested,//父路由用于确定嵌套路由渲染到哪个组件下的<RouterView>
        name:"outer",
        children:[
            {
                path:'1',component: Inner,name:'inner1'
            },
            {
                path:'2',component: Inner2,name:'inner2'
            }
        ]
    },
    { path: '/query', component: PathTest,name:'query',query:'id'},
    { path: '/error', component: ERROR },

    { path: '/namedView',component: NamedView,
        // components: {
        //     default:NamedView,
        //     LeftMenu,
        //     MainContent
        // }
        children: [
            {
                path:'',components: {
                    //默认组件名和<RouterView name="">一致
                    LeftMenu,
                    content:MainContent
                },
            },
            {
                path:'1',components: {
                    LeftMenu,
                    content:page_A,
                },
            },
            {
                path:'2',components: {
                    LeftMenu,
                    content:page_B,
                },
            },
        ],
    },
    { path: '/redirect',alias:['/alias'],
        children: [
            {
                path: '',
                redirect: '/namedView'
            },
            {
                path: '1',
                redirect: path=>{
                    console.log(path)
                    return '/namedView/1'
                }
            },
            {
                path: '2',
                redirect: {path:'/namedView/2'}
            },
        ]
    },

    {
        path: '/routeGuard/:id?', component: RouterGuardDemo,
        // strict:true,
        sensitive: false,
        //注：只在进入路由时触发，不会在 params、query 或 hash 改变时触发
        //可用于进入路由时去除query和hash信息
        beforeEnter: (to, from)=>{
            // 在渲染该组件的对应路由被验证前调用
            // 不能获取组件实例 `this` ！
            // 因为当守卫执行时，组件实例还没被创建！
            console.log('route:beforeEnter '+to.path)
        },

    },

    {
        path: '/meta',
        // component: MetaDemo,
        //动态导入
        component: ()=>{return import('@/components/compositionApi/scaled/routerViewComponent/MetaDemo.vue')} ,
        meta:{user:'zc',auth:false},
        children: [
            {
                path: ':id',
                component: page_A,
                // 只有经过身份验证的用户才能创建帖子
                meta: { auth: true },
            },
            {
                path: 'new',
                component: page_B,
                // 任何人都可以阅读文章
                meta: { auth: false },
            }
        ]
    },

    {
        path: '/pinia',component: StateManageDemo,
    }
]

const router = createRouter(
    {
        // history: createMemoryHistory(),
        history: createWebHashHistory(),
        // history: createWebHistory(),
        routes: routes,
        //全局限制
        // strict: true,    //大小写限制 sensitive: true
        // sensitive: true,  //尾部斜杠限制 strict: true
        scrollBehavior:(
            to,
            from,
            //注：savedPosition只有当这是一个 popstate 导航时才可用（由浏览器的后退/前进按钮触发
            savedPosition
        ) => {
            return {
                //todo 方式一
                //  top: 100,

                // todo 方式二
                // 传入element或css选择器
                // el: document.getElementById('main'),
                // el: '#main',
                // top: 10,// 在元素上 10 像素
            }
        }
    }
)



export default router
