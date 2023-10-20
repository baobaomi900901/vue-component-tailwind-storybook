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
    :class="[classes, isPlain, isRound, isDisabled,size]"
    @click="clickChild"
  >
    <i
      v-if="icon"
      class="iconfont"
      :class="{
        [iconName]: true,
        'ml-0': !$slots.default,
        'ml-4': $slots.default,
      }"
    ></i>
    <span v-if="$slots.default">
      <slot>Button</slot>
    </span>
  </div>
</template>

<script setup>
import "./MButton.css";
import { ref, reactive, computed  } from "vue";
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
  }
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
const iconName = computed(() => {
  return props.icon ? props.icon : "";
});

const size = computed(() => {
  return props.size ? `MButton-${props.size}` : "";
});


const emit = defineEmits(['clickChild'])


const clickChild=()=>{
  let param = '我是子组件的参数'
  //传递给父组件
  emit('clickChild',param)
}
</script>
<style >
</style>