<!--
* @description  参数1
* @fileName  Radio
* @author userName
* @date 2022-02-15 18:30:29
* @version V3.0.0
!-->
<template>
  <label :class="classs" :for="label">
    <input
      type="radio"
      name=""
      :id="label"
      :value="label"
      :checked="checked"
      :disabled="disabled"
      @click="onChang(label)"
    />
    <slot>选项{{ label }}</slot>
  </label>
</template>

<script lang="ts">
import "./radioButton.css";
import { ref, computed } from "vue";
export default {
  name: "my-radio-button",
  props: {
    checked: {
      type: Boolean,
    },
    label: {
      type: String,
    },
    type: {
      type: String,
      validator: function (value) {
        return ["primary", "success", "danger"].indexOf(value) !== -1;
      },
    },
    disabled: {
      type: Boolean,
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    const checked = ref(props.checked);
    console.log("checked.value :>>", checked.value);
    return {
      checked,
      classs: computed(() => {
        // const type = props.type ? `MYX-radio--button--${props.type}` : "";
        return {
          "MYX-radio--button": true,
          "MYX-radio--button--checked": checked.value,
          "MYX-radio--button--disabled": props.disabled,
          // [type]: props.type,
        };
      }),
      onChang($event) {
        if (!props.disabled && !checked.value) {
          this.checked = true;
          emit("click", $event);
        }
      },
    };
  },
};
</script>
<style scoped></style>
