<script setup></script>

<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg mb-6 duration-300 shadow-md shadow-gray-200 dark:shadow-gray-900"
  >
    <header v-if="!!$slots.header" class="text-xl p-5 font-medium">
      <slot name="header" />
    </header>
    <main><slot></slot></main>
    <div v-if="!!$slots.body" class="px-5 pb-5">
      <slot name="body" />
    </div>
    <footer v-if="!!$slots.footer" class="px-5 pb-5">
      <slot name="footer" />
    </footer>
  </div>
</template>
