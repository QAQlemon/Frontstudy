import {defineStore} from "pinia";

export const useCounter1=defineStore('counter1',{
    state: () => ({
        count: 0,
        name: 'Eduardo'
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
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