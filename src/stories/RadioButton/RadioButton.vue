<template>
  <label :for="value" :class="classs">
    <input
      type="radio"
      :id="value"
      :name="name"
      :value="value"
      :disabled="disabled"
      :checked="isCheck"
      @change="radioChange"
    />
    <slot></slot>
  </label>
</template>

<script lang="ts">
import "./RadioButton.css";
import { ref, computed, inject } from "vue";
export default {
  name: "my-radio-button",
  props: {
    modelValue: {
      type: [String, Boolean, Number],
    },
    type: {
      type: String,
      validator: function (value) {
        return ["block", "isPlain"].indexOf(value) !== -1;
      },
    },
    name: {
      type: String,
    },
    value: {
      type: [String, Boolean, Number],
    },
    disabled: {
      type: Boolean,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const radioGroup = inject("radioGroup", undefined) as any; // from RadioGroup
    // console.log(radioGroup.type);
    const classs = computed(() => {
      return {
        "MYX-radio--button": true,
        "MYX-radio--button--checked": isCheck.value,
        "MYX-radio--button--disabled": props.disabled,
        "MYX-radio--button--block": props.type,
        "MYX-radio--button--isPlain":
          (props.type === "isPlain") | (radioGroup.type === "isPlain"),
      };
    });
    const radioValue = computed(() =>
      !!radioGroup ? radioGroup.modelValue : props.modelValue
    );

    const isCheck = computed(() => !!(radioValue.value == props.value));

    const radioChange = () => {
      // 判断 RadioGroup 是否有传入值
      if (!!radioGroup) {
        radioGroup.changeEvent(props.value);
      } else {
        emit("update:modelValue", props.value);
      }
    };
    return {
      classs,
      isCheck,
      radioChange,
    };
  },
};
</script>
<style scoped></style>
