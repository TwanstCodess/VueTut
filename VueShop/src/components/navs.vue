<script setup>
const props = defineProps({
  name: String,
  age: Number,
  email: String,
  gender: String,
});
</script>

<template>
  <div class="h-32 bg-slate-500">{{ props.name }}</div>
</template>
