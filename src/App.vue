<template>
  <div class="w-screen h-screen p-10 flex flex-col">
    <my-radio-group direction="col" :name="radio1">
      <my-radio v-model="bbm" type="success">直角</my-radio>
      <my-radio v-model="vvn">钝角</my-radio>
    </my-radio-group>
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
import { ref, provide } from "vue";

export default {
  name: "app",
  components: { MyRadio, MyRadioGroup },
  setup() {
    const bbm = ref("bbm-s");
    const vvn = ref("vvn-s");
    const bbm1 = ref("bbm-v");
    const vvn1 = ref("vvn-v");

    const radio1 = ref("radio1-s");
    return {
      radio1,
      bbm,
      vvn,
      bbm1,
      vvn1,
    };
  },
};
</script>

<style>
#app {
}
</style>
