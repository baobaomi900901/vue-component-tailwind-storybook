<!--
* @description  参数1
* @fileName  MRadio
* @author userName
* @date 2023-11-22 22:18:55
* @version V3.0.0
!-->
<template>
  <label id="MRadio" class="MRadio">
    <span class="m-radio__input">
      <input
        type="radio"
        :name="name"
        :value="modelValue"
        :checked="isChecked"
        @input="updateModalValue($event.target.value)"
      />
    </span>
    <slot></slot>
  </label>
</template>

<script setup>
import { ref, reactive, defineProps, defineEmits, computed } from "vue";
const props = defineProps({
  name: {
    type: String,
  },
  label: {
    type: String || Number || Boolean,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const isChecked = computed(() => {
  return props.label === props.modelValue;
});

const updateModalValue = (value) => {
  emit("update:modelValue", value);
};
</script>
<style scoped>

</style>