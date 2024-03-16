<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const router = useRoute();
</script>

<template>
  <div
    data-aos="fade-up"
    class="flex items-center justify-center h-full bg-gray-500"
  >
    Id Product {{ router.params.id }}
  </div>
</template>
