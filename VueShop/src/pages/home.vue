<script setup>
import { onMounted, ref } from "vue";

const randomuser = ref(null);

async function GetDataUser() {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/users");
    const data = await response.json();
    randomuser.value = data.data[0];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

onMounted(async () => {
  await GetDataUser();
});
</script>

<template>
  <div
    class="flex items-center justify-center h-full text-3xl text-center bg-gray-500"
  >
    <div v-if="randomuser != null" class="flex flex-col text-center">
      <h1>{{ randomuser.name }}</h1>
      <h1>{{ randomuser.email }}</h1>
    </div>
  </div>
</template>
