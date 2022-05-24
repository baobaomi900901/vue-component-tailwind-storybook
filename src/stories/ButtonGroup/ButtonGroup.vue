<template>
  <div :class="buttonGroup"><slot></slot></div>
</template>

<script lang="ts">
import "./ButtonGroup.css";
import { ref, reactive, computed } from "vue";
import MyButton from "../Button/Button.vue";
export default {
  name: "my-button-group",
  props: {
    label: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  setup(props) {
    console.log(props.label);
    return {
      buttonGroup: computed(() => ({
        "MYX-buttonGroup": true,
      })),
    };
  },
};
</script>
<style scoped></style>
