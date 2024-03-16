<script setup>
import navs from "./components/navs.vue";
import bodys from "./components/bodys.vue";
import sidebar from "./components/sidbar.vue";
import zherawa from "./components/zherawa.vue";
</script>

<template>
  <div class="flex flex-col h-screen p-1 gap-7">
    <navs />

    <div class="flex flex-row flex-1 gap-7">
      <sidebar class="p-1 flex-3" />
      <bodys class="flex-1" />
    </div>
    <zherawa />
  </div>
</template>
