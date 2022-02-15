<template>
  <button
    type="primary"
    :class="[classes, plain, text, round]"
    @click="onClick"
    :style="style"
  >
    <span> {{ label }} </span>
  </button>
</template>

<script>
import "./button.css";
import { reactive, computed } from "vue";

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
    size: {
      type: String,
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ["click"],

  setup(props, { emit }) {
    // console.log("props.plain", props.isPlain);
    return {
      classes: computed(() => ({
        "MYX-button": true,
        "MYX-button--block": !props.isText,
        "MYX-button--primary": props.type === "primary" && !props.isText,
        "MYX-button--success": props.type === "success" && !props.isText,
        "MYX-button--danger": props.type === "danger" && !props.isText,
      })),
      plain: computed(() => {
        if (props.isPlain && !props.isText) {
          return {
            "MYX-button--plain": true,
            "MYX-button--primary--plain": props.type === "primary",
            "MYX-button--success--plain": props.type === "success",
            "MYX-button--danger--plain": props.type === "danger",
          };
        } else {
          return "";
        }
      }),
      text: computed(() => {
        if (props.isText) {
          return {
            "MYX-button--text": true,
            "MYX-button--primary--text": props.type === "primary",
            "MYX-button--success--text": props.type === "success",
            "MYX-button--danger--text": props.type === "danger",
          };
        } else {
          return "";
        }
      }),
      round: computed(() => ({
        "MYX-button--round": props.isRound && !props.isText,
      })),
      // style: computed(() => ({
      //   backgroundColor: props.backgroundColor,
      // })),
      onClick() {
        emit("click");
      },
    };
  },
};

// {
//         "MYX-button--plain": props.isPlain && !props.isText,
//         "MYX-button--primary--plain":
//           props.type === "primary" && props.isPlain && !props.isText,
//         "MYX-button--success--plain":
//           props.type === "success" && props.isPlain && !props.isText,
//         "MYX-button--danger--plain":
//           props.type === "danger" && props.isPlain && !props.isText,
//       }
</script>
