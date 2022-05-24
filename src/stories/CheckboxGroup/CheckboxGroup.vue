<template>
  <div :class="checkboxGroup">
    <slot />
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "my-checkbox-group",
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {
      checkboxGroup: computed(() => ({
        "MYX-checkboxGroup": true,
      })),
    };
  },
};
</script>
