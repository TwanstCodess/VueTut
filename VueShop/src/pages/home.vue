<script setup>
import { onMounted, ref } from "vue";

const randomuser = ref(null);

async function GetDataUser() {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/users");
    const data = await response.json();
    randomuser.value = data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

onMounted(async () => {
  await GetDataUser();
});
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-y-3">
    <div
      v-for="(user, index) in randomuser.data"
      :key="index"
      class="w-full p-10 text-center bg-slate-300 hover:shadow-xl rounded-2xl"
    >
      <h1>{{ user.name }}</h1>
      <h2>{{ user.email }}</h2>
    </div>
  </div>
</template>
