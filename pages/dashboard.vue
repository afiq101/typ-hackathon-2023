<script setup>
definePageMeta({
  title: "Dashboard",
  middleware: ["auth"], // This is for Login Auth for page
  requiresAuth: true, // This is use for Login Auth for page
});

</script>
<template>
  <div>
    <LayoutsBreadcrumb />
  </div>
</template>
