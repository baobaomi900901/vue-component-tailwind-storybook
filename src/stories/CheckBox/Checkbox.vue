<!--
* @description  参数1
* @fileName  CheckBox
* @author userName
* @date 2022-02-16 17:39:02
* @version V3.0.0
!-->
<template>
  <label :for="label" :class="classs">
    <input
      type="checkbox"
      name=""
      :id="label"
      :value="label"
      @click="onChang(label)"
      :checked="checked"
    />
    <slot></slot>
  </label>
</template>

<script lang="ts">
import "./checkbox.css";
import { ref, reactive, computed } from "vue";
export default {
  name: "my-checkbox",
  props: {
    label: {
      type: String,
    },
    checked: {
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
    console.log(props.label);
    const checked = ref(props.checked);
    return {
      classs: computed(() => {
        const type = props.type ? `MYX-checkbox--${props.type}` : "";
        return {
          "MYX-checkbox": true,
          [type]: props.type,
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
