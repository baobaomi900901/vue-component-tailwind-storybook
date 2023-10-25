<template>
  <div class="group flex gap-8">
    <MButton
      >Default
      <i class="iconfont icon-search iconfont-right"></i>
    </MButton>
  </div>
  <div class="group flex gap-8">
    <MButton size="sm">Default</MButton>
    <MButton type="primary" size="lg">Primary</MButton>
    <MButton type="primary" size="lg" loading round plain>loading</MButton>
  </div>
  <div class="group flex gap-8">
    <MButtonGroup>
      <MButton type="primary" >上一页</MButton>
      <MButton type="success" >本页</MButton>
      <MButton type="primary" >本页</MButton>
      <MButton type="primary" >本页</MButton>
      <MButton type="primary" >下一页</MButton>
    </MButtonGroup>
  </div>
  <div class=" border-1">123</div>
</template>

<script setup>
import { ref, reactive } from "vue";
import MButton from "./stories/MButton/MButton.vue";
import MButtonGroup from "./stories/MButtonGroup/MButtonGroup.vue";

const result = ref("");
const clickEven = (val) => {
  console.log("我是父组件", val);
};
</script>

<style>
#app {
  padding: 1rem;
}
.group{
  box-sizing: border-box;
}
.group + .group {
  margin-top: 1rem;
}
</style>
