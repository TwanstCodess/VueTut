<script setup></script>

<template>
  <div class="flex items-center justify-center h-full gap-4 bg-gray-500">
    <div v-for="n in 10" :key="n">
      <button>
        <router-link :to="'/products/' + n">{{ n }}</router-link>
      </button>
    </div>
  </div>
</template>
