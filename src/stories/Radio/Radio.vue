<template>
  <label :for="value" :class="classs">
    <input
      ref="radioRef"
      type="radio"
      :id="modelValue"
      :name="name"
      :value="modelValue"
      :disabled="disabled"
      :checked="isCheck"
      @change="radioChange"
    />
    <!-- @click="onChang" -->
    <span>
      <slot>选项{{ label }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import "./radio.css";
import { ref, computed, inject, nextTick } from "vue";
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
    name: {
      type: String,
    },
    value: {
      type: [String, Number],
    },
    disabled: {
      type: Boolean,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    console.log(props);
    const radioGroup = inject("radioGroup", undefined) as any; // from RadioGroup
    const classs = computed(() => {
      const type = `MYX-radio--${props.type}`;
      return {
        "MYX-radio": true,
        [type]: props.type,
      };
    });
    const radioRef = ref<HTMLInputElement | null>(null);
    const isGroup = computed(() => !!radioGroup);
    const radioValue = computed(() =>
      !!isGroup.value ? radioGroup.modelValue : props.modelValue
    );
    const isCheck = computed(() => radioValue.value == props.value);
    const radioChange = () => {
      if (isGroup.value) {
        radioGroup.changeEvent(props.value);
      } else {
        emit("update:modelValue", props.value);
      }
    };
    return {
      radioRef,
      classs,
      isCheck,
      radioChange,
    };
  },
};
</script>
<style scoped></style>
