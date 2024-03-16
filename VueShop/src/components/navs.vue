<script setup></script>

<template>
  <!-- Navbar -->
  <nav class="p-4 bg-gray-800">
    <div class="container flex items-center justify-between mx-auto">
      <div class="flex items-center">
        <span class="text-lg font-semibold text-white">Vue Shoping</span>
      </div>
      <div class="hidden md:flex">
        <RouterLink to="/" class="mx-4 text-white">Home</RouterLink>
        <RouterLink to="/about" class="mx-4 text-white">About</RouterLink>

        <a href="#" class="mx-4 text-white">Services</a>
        <a href="#" class="mx-4 text-white">Contact</a>
      </div>
      <div class="md:hidden">
        <button id="mobile-menu-btn" class="text-white focus:outline-none">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>
