<template>
  <h1>{{ RadioValue }}</h1>
  <div>
    <MRadio name="bbm" label="one" :value="'one'" v-model="RadioValue">选项1</MRadio>
    <MRadio name="bbm" label="two" :value="'two'" v-model="RadioValue">选项2</MRadio>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import MRadio from "./stories/MRadio/MRadio.vue";

const RadioValue = ref("one");
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
