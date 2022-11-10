<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <h1 class="text-6xl">{{ msg }}</h1>
</template>
