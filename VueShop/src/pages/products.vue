<script setup></script>

<template>
  <div
    data-aos="fade-up"
    data-aos-duration="1500"
    class="flex items-center justify-center h-full gap-4 bg-gray-500"
  >
    <div v-for="n in 10" :key="n">
      <button>
        <router-link :to="'/products/' + n">{{ n }}</router-link>
      </button>
    </div>
  </div>
</template>
