<script setup>
import layouts from "./layout/index.vue";
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
onMounted(() => {
  document.cookie = "lang=EN";
});
</script>

<template>
  <Suspense>
    <layouts />

    <template #fallback>
      <div class="flex items-center justify-center h-screen">
        <h1 class="text-2xl animate-pulse">&#9706;</h1>
      </div>
    </template>
  </Suspense>
</template>
