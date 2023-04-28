<script setup>
useHead({
  title: "MawarWatch",
  description: "Home page",
  bodyAttrs: {
    class: "bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300",
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
