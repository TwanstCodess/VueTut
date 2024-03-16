<script setup>
import { onMounted, ref } from "vue";

const randomuser = ref(null);

async function GetDataUser(pageNumber, $id) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/users?page=${pageNumber}`
    );
    const data = await response.json();
    randomuser.value = data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
var pages = 1;
onMounted(async () => {
  await GetDataUser(pages); // Fetch data from page 2
});
</script>

<template>
  <div class="flex items-center justify-center h-full bg-gray-500">
    {{ randomuser }}
  </div>
  <button v-on:click="GetDataUser((pages += 1))">Next</button>
</template>
