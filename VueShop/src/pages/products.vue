<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
function goToProduct(productid) {
  router.push({ name: "product", params: { id: productid } });
}
</script>

<template>
  <div class="flex items-center justify-center h-full gap-4 bg-gray-500">
    <div v-for="n in 10" :key="n">
      <button @click="goToProduct(n)">{{ n }}</button>
    </div>
  </div>
</template>
