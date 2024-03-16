<script setup>
import navs from "./components/navs.vue";
import bodys from "./components/bodys.vue";
import sidebar from "./components/sidbar.vue";
import zherawa from "./components/zherawa.vue";
</script>

<template>
  <div class="flex flex-col h-screen p-1 gap-7">
    <!-- paramitarize the navs -->
    <navs />
    <div class="flex">
      <RouterView></RouterView>
    </div>
    <zherawa />
  </div>
</template>
