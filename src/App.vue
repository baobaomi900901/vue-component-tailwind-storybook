<template>
  <div class="w-screen h-screen p-10 flex flex-col">
    <my-radio v-model="groupValue" value="直角">直角</my-radio>
    <my-radio v-model="groupValue" value="钝角">钝角</my-radio>
    <br />
    <div class="flex">
      <!-- <my-radio v-model="bbm1" name="radio" type="success">锐角</my-radio>
      <my-radio v-model="vvn1" name="radio">没角</my-radio> -->
    </div>
  </div>
</template>

<script lang="ts">
import MyRadio from "./stories/Radio/Radio.vue";
import MyRadioGroup from "./stories/RadioGroup/RadioGroup.vue";
import { ref, provide, toRefs } from "vue";

export default {
  name: "app",
  components: { MyRadio, MyRadioGroup },
  setup() {
    const groupValue = ref("直角");
    return {
      groupValue,
    };
  },
};
</script>

<style>
#app {
}
</style>
