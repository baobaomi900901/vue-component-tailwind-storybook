<!--
* @description  参数1
* @fileName  CheckBox
* @author userName
* @date 2022-02-16 17:39:02
* @version V3.0.0
!-->
<template>
  <label :for="value" :class="myClass">
    <input
      ref="checkbox"
      type="checkbox"
      :name="value"
      :id="value"
      :value="value"
      @click="onChange(value)"
      :checked="checked"
      :disabled="disabled"
    />
    <span>
      <slot></slot>
    </span>
  </label>
</template>

<script>
import "./Checkbox.css";
import { ref, computed } from "vue";
export default {
  name: "my-checkbox",

  props: {
    value: {
      type: String,
      default: "",
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      validator: function (value) {
        return ["primary", "success", "danger"].indexOf(value) !== -1;
      },
    },
  },

  emits: ["post"],

  setup(props, { emit }) {
    const checked = ref(props.checked);

    return {
      myClass: computed(() => {
        const type = props.type ? `MYX-checkbox--${props.type}` : "";
        return {
          "MYX-checkbox": true,
          [type]: props.type,
          "MYX-checkbox--disabled": props.disabled,
        };
      }),
      onChange(value) {
        checked.value = !checked.value;
        if (!props.disabled && (checked.value == true)) {
          checked.value = true;
        }
        emit("post", value);
      }
    };
  }
};
</script>
