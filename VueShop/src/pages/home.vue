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
  <div
    data-aos="fade-up"
    class="flex flex-col items-center justify-center gap-y-3"
  >
    <p>
      Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic,
      <br />
      print, and publishing industries for previewing layouts and visual <br />
      mockups.
    </p>
  </div>
</template>
