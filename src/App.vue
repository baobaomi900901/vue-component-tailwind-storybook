<template>
  <div class="w-screen h-screen p-10 flex flex-col">
    <div v-for="(item, i) in itemsValue" :key="i">
      <my-checkbox v-bind="item">{{ item }}</my-checkbox>
    </div>
  </div>
</template>

<script lang="ts">
import MyRadio from "./stories/Radio/Radio.vue";
import MyCheckbox from "./stories/Checkbox/Checkbox.vue";
import { ref, reactive } from "vue";

export default {
  name: "app",
  components: { MyRadio, MyCheckbox },
  setup() {
    const groupValue = ref("直角");
    const itemsValue = ref(["直角", "钝角", "锐角"]);
    return {
      groupValue,
      itemsValue,
    };
  },
};
</script>

<style>
#app {
}
</style>
