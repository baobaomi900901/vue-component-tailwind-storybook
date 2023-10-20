<template>
  <div class="group flex gap-8">
    <MButton>Default</MButton>
    <MButton type="primary">Primary</MButton>
    <MButton type="success">Success</MButton>
    <MButton type="info">Info</MButton>
    <MButton type="warning">Warning</MButton>
    <MButton type="danger">Danger</MButton>
  </div>
  <div class="group flex gap-8">
    <MButton>Plain</MButton>
    <MButton type="primary" plain>Primary</MButton>
    <MButton type="success" plain>Success</MButton>
    <MButton type="info" plain>Info</MButton>
    <MButton type="warning" plain>Warning</MButton>
    <MButton type="danger" plain>Danger</MButton>
  </div>
  <div class="group flex gap-8">
    <MButton round>Plain</MButton>
    <MButton type="primary" round>Primary</MButton>
    <MButton type="success" round>Success</MButton>
    <MButton type="info" round>Info</MButton>
    <MButton type="warning" round>Warning</MButton>
    <MButton type="danger" round>Danger</MButton>
  </div>
  <div class="group flex gap-8">
    <MButton icon="icon-search">Plain</MButton>
    <MButton type="primary" icon="icon-search">Primary</MButton>
    <MButton type="success" icon="icon-search">Success</MButton>
    <MButton type="info" icon="icon-search">Info</MButton>
    <MButton type="warning" icon="icon-search">Warning</MButton>
    <MButton type="danger" icon="icon-search">Danger</MButton>
  </div>
  <div class="group flex gap-8">
    <MButton icon="icon-search" disabled>Default</MButton>
    <MButton type="primary" icon="icon-search" disabled>Primary</MButton>
    <MButton type="success" icon="icon-search" disabled>Success</MButton>
    <MButton type="info" icon="icon-search" disabled>Info</MButton>
    <MButton type="warning" icon="icon-search" disabled>Warning</MButton>
    <MButton type="danger" icon="icon-search" disabled>Danger</MButton>
  </div>
  <div class="group flex gap-8">
    <MButton icon="icon-search" plain disabled>Default</MButton>
    <MButton type="primary" icon="icon-search" plain disabled>Primary</MButton>
    <MButton type="success" icon="icon-search" plain disabled>Success</MButton>
    <MButton type="info" icon="icon-search" plain disabled>Info</MButton>
    <MButton type="warning" icon="icon-search" plain disabled>Warning</MButton>
    <MButton type="danger" icon="icon-search" plain disabled>Danger</MButton>
  </div>
  <div class="group flex gap-8">
    <MButton icon="icon-search"></MButton>
    <MButton type="primary" icon="icon-search"></MButton>
    <MButton type="success" icon="icon-search"></MButton>
    <MButton type="info" icon="icon-search"></MButton>
    <MButton type="warning" icon="icon-search"></MButton>
    <MButton type="danger" icon="icon-search"></MButton>
  </div>

  <div class="group flex gap-8">
    <MButton icon="icon-search" round></MButton>
    <MButton type="primary" icon="icon-search" round></MButton>
    <MButton type="success" icon="icon-search" round></MButton>
    <MButton type="info" icon="icon-search" round></MButton>
    <MButton type="warning" icon="icon-search" round></MButton>
    <MButton
      type="danger"
      icon="icon-search"
      round
      @clickChild="clickEven"
    ></MButton>
  </div>

  <div class="group flex gap-8">
    <MButton
      >Default
      <i class="iconfont icon-search iconfont-right"></i>
    </MButton>
    <MButton type="primary"
      >Primary <i class="iconfont icon-search iconfont-right"></i
    ></MButton>
    <MButton type="success"
      >Success <i class="iconfont icon-search iconfont-right"></i
    ></MButton>
    <MButton type="info"
      >Info <i class="iconfont icon-search iconfont-right"></i
    ></MButton>
    <MButton type="warning"
      >Warning <i class="iconfont icon-search iconfont-right"></i
    ></MButton>
    <MButton type="danger"
      >Danger <i class="iconfont icon-search iconfont-right"></i
    ></MButton>
  </div>
  <div class="group flex gap-8">
    <MButton type="text" icon="icon-search"
      >Default <i class="iconfont icon-search iconfont-right"></i
    ></MButton>
  </div>
  <div class="group flex gap-8">
    <MButton size="sm">Default</MButton>
    <MButton type="primary" size="lg">Primary</MButton>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import MButton from "./stories/MButton/MButton.vue";

const result = ref("");
const clickEven = (val) => {
  console.log("我是父组件", val);
};
</script>

<style>
#app {
  padding: 1rem;
}
.group + .group {
  margin-top: 1rem;
}
</style>
