<script setup lang="ts">
const { url } = defineProps<{
  url: string
}>()
</script>

<template>
  <a
    :href="url"
    class="font-medium hover:text-green-700"
    target="_blank"
    rel="noopener"
  >
    <slot />
  </a>
</template>
