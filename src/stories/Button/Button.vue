<template>
  <button
    ref="button"
    :class="[classes, plain, text, round, size]"
    @click="onClick"
    :style="style"
    :disabled="disabled"
  >
    <i v-if="iconleft" class="MYX-button-icon-left">{{ iconName }}</i>
    <span>
      <slot>{{ label }} </slot></span
    >
    <i v-if="iconRight" class="MYX-button-icon-right">{{ iconName }}</i>
  </button>
</template>

<script>
import "./Button.css";
import { ref, reactive, computed } from "vue";

export default {
  name: "my-button",
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
    isPlain: {
      type: Boolean,
      default: false,
    },
    isText: {
      type: Boolean,
      default: false,
    },
    isRound: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
    },
    size: {
      type: String,
      validator: function (value) {
        return ["tiny", "small", "medium", "large"].indexOf(value) !== -1;
      },
      default: "medium",
    },
    icon: {
      type: String,
    },
  },

  emits: ["click"],

  setup(props, { emit }) {
    return {
      iconleft: computed(() => {
        if (!props.icon) return false;
        if (
          props.icon.split(",").length === 1 ||
          props.icon.split(",")[1] === "left"
        )
          return true;
        return false;
      }),
      iconRight: computed(() => {
        if (!props.icon) return false;
        if (props.icon.split(",")[1] === "right") return true;
        return false;
      }),
      iconName: computed(() => {
        if (props.icon) return props.icon.split(",")[0];
        return "";
      }),
      classes: computed(() => {
        const type = props.type ? `MYX-button--${props.type}` : "";
        return {
          "MYX-button": true,
          "MXY-button--hoverActive": !props.type && !props.disabled,
          "MYX-button--block": !props.isText,
          [type]: !props.isText,
        };
      }),
      plain: computed(() => {
        if (!(props.isPlain && !props.isText)) return "";
        const type = props.type ? `MYX-button--${props.type}--plain` : "";
        return {
          "MYX-button--plain": true,
          [type]: true,
        };
      }),
      text: computed(() => {
        if (!props.isText) return "";
        const type = props.type ? `MYX-button--${props.type}--text` : "";
        return {
          "MYX-button--text": true,
          [type]: true,
        };
      }),
      round: computed(() => ({
        "MYX-button--round": props.isRound && !props.isText,
      })),
      size: computed(() => {
        const type = `MYX-button--${props.size}`;
        return {
          [type]: true,
        };
      }),
      onClick() {
        if (!props.disabled) {
          emit("click");
        }
      },
    };
  },
};
</script>
