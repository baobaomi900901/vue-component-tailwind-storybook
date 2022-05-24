<!--
* @description  参数1
* @fileName  CheckBox
* @author userName
* @date 2022-02-16 17:39:02
* @version V3.0.0
!-->
<template>
  <label :for="value" :class="classs">
    <input
      ref="checkbox"
      type="checkbox"
      name=""
      :id="value"
      :value="value"
      @click="onChang(value)"
      :checked="checked"
      :disabled="disabled"
    />
    <span>
      <slot></slot>
    </span>
  </label>
</template>

<script lang="ts">
import "./Checkbox.css";
import { ref, reactive, computed, onMounted, inject } from "vue";
export default {
  name: "my-checkbox",
  props: {
    value: {
      type: String,
    },
    checked: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    type: {
      type: String,
      validator: function (value) {
        return ["primary", "success", "danger"].indexOf(value) !== -1;
      },
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    const checked = ref(props.checked);
    onMounted(() => {
      console.log(props.disabled);
    });
    return {
      classs: computed(() => {
        const type = props.type ? `MYX-checkbox--${props.type}` : "";
        return {
          "MYX-checkbox": true,
          [type]: props.type,
          "MYX-checkbox--disabled": props.disabled,
        };
      }),
      onChang($event) {
        checked.value = !checked.value;
        if (!props.disabled && (checked.value == true)) {
          checked.value = true;
          emit("click", $event);
        }
      },
    };
  },
};
</script>
<style scoped></style>
