<!--
* @description  参数1
* @fileName  Radio
* @author userName
* @date 2022-02-15 18:30:29
* @version V3.0.0
!-->
<template>
  <div :class="classs">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import "./radioGroup.css";
import { ref, computed, provide } from "vue";
export default {
  name: "my-radio-group",
  props: {
    direction: {
      type: String,
      default: "row",
    },
    name: {
      type: String,
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    const radioName = props.name;
    provide("radioName", radioName);
    console.log("group", radioName);
    return {
      classs: computed(() => ({
        "MYX-radio-group": true,
        "MYX-radio-group-col": props.direction === "col",
      })),
    };
  },
};
</script>
<style scoped></style>
