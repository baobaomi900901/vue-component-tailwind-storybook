<template>
  <h1>{{ myvalue }}</h1>
  <div>
    <MRadio name="bbm" label="one" v-model="myvalue">选项1</MRadio>
    <MRadio name="bbm" label="two" v-model="myvalue">选项2</MRadio>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import MRadio from "./stories/MRadio/MRadio.vue";

const myvalue = ref("one");
</script>

<style>
#app {
  padding: 1rem;
}
.group {
  box-sizing: border-box;
}
.group + .group {
  margin-top: 1rem;
}
</style>
