<template>
  <label :for="modelValue" :class="classs">
    <input
      type="radio"
      :id="modelValue"
      :name="name"
      :value="modelValue"
      :disabled="disabled"
      :checked="checked"
      @click="onChang"
    />
    <span>
      <slot>选项{{ label }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import "./radio.css";
import { ref, computed, inject } from "vue";
export default {
  name: "my-radio",
  props: {
    modelValue: {
      type: [String, Boolean, Number],
    },
    type: {
      type: String,
      validator: function (value) {
        return ["primary", "success", "danger"].indexOf(value) !== -1;
      },
    },
    checked: {
      type: Boolean,
    },
    name: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const radioName = inject("radioName"); // from RadioGroup
    return {
      classs: computed(() => {
        const type = `MYX-radio--${props.type}`;
        return {
          "MYX-radio": true,
          [type]: props.type,
        };
      }),
      name: computed(() => {
        if (props.name) {
          console.log("props.name", props.name);
          return props.name;
        }
        return radioName;
      }),
      onChang() {
        console.log(props.modelValue);
        emit("update:modelValue", props.modelValue);
      },
    };
  },
};
</script>
<style scoped></style>
