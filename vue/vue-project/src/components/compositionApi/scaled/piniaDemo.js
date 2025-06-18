import {defineStore} from "pinia";

export const useCounter1=defineStore('counter1',{
    state: () =>({
        count: 1,
        name: 'Eduardo'
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
        upCaseMsg:(state)=>{
            return  ((msg)=>{
                return `${state.name.toUpperCase()}:${msg}`
            });
        },
        //出现错误
        //注意：getter之间的组合使用不要用属性赋值的方式否则调用失败
        // sss:(state)=>{
        //     return this.doubleCount
        // }
        callOtherGetter(state){
            return this.doubleCount
        }
    },
    actions: {
        increment() {
            this.count+=this.callOtherGetter
        },
    },
})

export const useCounter2 = defineStore('counter2', () => {
    // ref() 就是 state 属性
    const count = ref(0)
    const name = ref('Eduardo')

    // computed() 就是 getters
    const doubleCount = computed(() => count.value * 2)

    // function() 就是 actions
    function increment() {
        count.value++
    }

    return { count, name, doubleCount, increment }
})