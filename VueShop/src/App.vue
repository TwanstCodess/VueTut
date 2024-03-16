<script setup>
import { onBeforeMount, onMounted, onUpdated, ref } from "vue";

const counter = ref(0);

onBeforeMount(() => {
  console.log("Before Mounted");
});

onMounted(() => {
  console.log("One Mounted");
});

onUpdated(() => {
  console.log("On Update");
});
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen gap-y-3">
    <h1 class="text-4xl font-bold">Couter</h1>
    <h1 v-on:click="() => counter++">{{ counter }}</h1>
  </div>
</template>
