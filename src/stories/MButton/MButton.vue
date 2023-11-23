<!--
* @description  参数1
* @fileName  MButton
* @author userName
* @date 2023-10-18 21:27:54
* @version V3.0.0
!-->
<template>
  <div
    id="MButton"
    class="MButton"
    :class="{
      [classes]: true,
      [isPlain]: true,
      [isRound]: true,
      [isDisabled]: true,
      [size]: true,
      'MButton-loading': loading,
    }"
    @click="clickMyself"
  >
    <i
      v-if="icon"
      class="iconfont"
      :class="{
        [iconName]: true,
        'ml-4': $slots.default,
      }"
    ></i>
    <span v-if="$slots.default">
      <slot>Button</slot>
      <i
        v-if="loading"
        :class="{
          [isLoading]: true,
        }"
      ></i>
    </span>
  </div>
</template>

<script setup>
import "./MButton.css";
import { ref, reactive, computed } from "vue";
// 获取 props.type
const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

// 通过 props.type 获取对应的样式
const classes = computed(() => {
  return props.type ? `MButton-${props.type}` : "";
});
const isPlain = computed(() => {
  return props.plain ? `MButton-${props.type}-plain` : "";
});
const isRound = computed(() => {
  return props.round ? `MButton-round` : "";
});
// disabled
const isDisabled = computed(() => {
  return props.disabled ? `MButton-disabled` : "";
});
const isLoading = computed(() => {
  return props.loading ? `iconfont iconfont-right icon-loading` : "";
});
const iconName = computed(() => {
  return props.icon ? props.icon : "";
});

const size = computed(() => {
  return props.size ? `MButton-${props.size}` : "";
});

//定义事件, 传递给父组件, 通过 emit, 传递给父组件 事件名, 事件参数
const emit = defineEmits(["clickBTN"]);

const clickMyself = () => {
  let param = "我是子组件的参数";
  //传递给父组件
  if (!props.disabled && !props.loading) emit("clickBTN", param);
};
</script>
<style >
</style>