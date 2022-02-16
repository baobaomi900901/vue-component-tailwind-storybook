<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld message="Hello Vue 3 + TypeScript + Vite" />
  <div
    class="
      w-screen
      h-screen
      bg-gradient-to-r
      from-yellow-400
      via-red-500
      to-pink-500
      p-10
      flex
    "
  >
    <MyRadio type="primary" label="1"></MyRadio>
    <MyRadio type="" class="ml-3" label="2"></MyRadio>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import MyRadio from "./stories/Radio/Radio.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
