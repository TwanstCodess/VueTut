<script setup>
import data from "./data.json";
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen gap-y-3">
    <h1 class="text-4xl font-bold">List Render</h1>
    <div
      v-for="i in data"
      :key="i"
      class="bg-slate-300 p-10 w-1/2 text-center hover:shadow-xl rounded-2xl"
    >
      {{ i.email }}
    </div>
  </div>
</template>
