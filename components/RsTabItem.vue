<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  padding: {
    type: Boolean,
    default: true,
  },
});

const selectedTitle = inject("selectedTitle");
</script>

<template>
  <div
    class="tab-pane"
    :class="{
      'p-4': padding,
    }"
    v-show="selectedTitle === title"
  >
    <slot></slot>
  </div>
</template>
