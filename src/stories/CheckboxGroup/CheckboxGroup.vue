<template>
  <div :class="checkboxGroup">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, provide, reactive, toRefs, nextTick } from "vue";

export default {
  name: "my-checkbox-group",
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props: any, { emit }: any) {
    const changeEvent = (value: string | number, e: InputEvent) => {
      emit("update:modelValue", value);
      nextTick(() => {
        emit("change", value);
      })
    };
    provide('checkboxGroup', reactive({
      ...toRefs(props),
      changeEvent,
    }))
    return {
      checkboxGroup: computed(() => ({
        "MYX-checkboxGroup": true,
      })),
    };
  },
};
</script>
