<script setup>

import Child1 from "@/components/compositionApi/component/slot/child1.vue";
import Child2 from "@/components/compositionApi/component/slot/child2.vue";
import Child3 from "@/components/compositionApi/component/vmodel/child3.vue";
</script>

<template>
  <div>
    <p>插槽</p>
    <child1>child1</child1>
  </div>

  <div>
    <p>默认插槽</p>
    <child1></child1>
  </div>

  <div>
    <p>具名插槽</p>
    <child2>
      插入的文本值
      <template #slot1>
        slot1
        <br><button>也可插入元素</button>
      </template>

      <template v-slot:slot2>
        slot2
        <br><button>也可插入元素</button>
      </template>

    </child2>
  </div>

  <div>
    <p>条件插槽</p>
    <child3>

    </child3>\
  </div>

</template>

<style scoped>
  div{
    border: red 1px solid;
  }
</style>